import { supabase } from './supabase-client.js';

const ACTIVE_FIELDS = 'ai_ad_enabled,ai_ad_video_url,ai_ad_badge,ai_ad_title,ai_ad_cta_label,ai_ad_muted,ai_ad_starts_at,ai_ad_ends_at';
const LIVE_FALLBACK_FIELDS = 'is_live,badge_text,headline,embed_url,description,stream_status,started_at,updated_at';
const AI_AD_LOCAL_FALLBACK_KEY = 'kco_ai_ad_override_fallback_v1';

function readAiMetaDescription(value) {
  if (!value || typeof value !== 'string') return null;
  if (!value.startsWith('AI_AD_META:')) return null;
  try {
    return JSON.parse(value.slice('AI_AD_META:'.length));
  } catch {
    return null;
  }
}

function toPayload(row) {
  if (!row || !row.ai_ad_enabled || !row.ai_ad_video_url) return null;
  const now = Date.now();
  if (row.ai_ad_starts_at && new Date(row.ai_ad_starts_at).getTime() > now) return null;
  if (row.ai_ad_ends_at && new Date(row.ai_ad_ends_at).getTime() <= now) return null;
  return {
    videoUrl: row.ai_ad_video_url,
    badge: row.ai_ad_badge || 'Featured',
    title: row.ai_ad_title || 'Featured Campaign',
    ctaLabel: row.ai_ad_cta_label || 'Shop Now',
    muted: row.ai_ad_muted !== false,
    startsAt: row.ai_ad_starts_at || null,
    endsAt: row.ai_ad_ends_at || null,
  };
}

function toPayloadFromLiveState(row) {
  if (!row || !row.is_live || !row.embed_url || row.stream_status !== 'ai_ad') return null;
  const meta = readAiMetaDescription(row.description);
  const now = Date.now();
  const startsAt = meta?.startsAt || row.started_at || null;
  const endsAt = meta?.endsAt || null;
  if (startsAt && new Date(startsAt).getTime() > now) return null;
  if (endsAt && new Date(endsAt).getTime() <= now) return null;
  return {
    videoUrl: row.embed_url,
    badge: row.badge_text || 'Featured',
    title: row.headline || 'Featured Campaign',
    ctaLabel: meta?.ctaLabel || 'Shop Now',
    muted: meta?.muted !== false,
    startsAt,
    endsAt,
  };
}

function broadcast(payload) {
  window.dispatchEvent(new CustomEvent('ai-ad-override-updated', { detail: payload }));
}

function loadLocalFallbackPayload() {
  try {
    const raw = localStorage.getItem(AI_AD_LOCAL_FALLBACK_KEY);
    if (!raw) return null;
    const row = JSON.parse(raw);
    return toPayload(row || null);
  } catch {
    return null;
  }
}

async function loadAiAdOverride() {
  try {
    const { data, error } = await supabase.from('site_settings').select(ACTIVE_FIELDS).limit(1).maybeSingle();
    if (!error) {
      const payload = toPayload(data || null);
      broadcast(payload);
      return payload;
    }
  } catch {}

  try {
    const { data, error } = await supabase.from('public_live_state').select(LIVE_FALLBACK_FIELDS).limit(1).maybeSingle();
    if (error) throw error;
    const payload = toPayloadFromLiveState(data || null);
    broadcast(payload);
    return payload;
  } catch {
    const localPayload = loadLocalFallbackPayload();
    broadcast(localPayload);
    return localPayload;
  }
}

function subscribeAiAdOverride() {
  try {
    return supabase
      .channel('public:site_settings:ai_ad_override')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'site_settings' }, () => {
        loadAiAdOverride();
      })
      .subscribe();
  } catch {
    return null;
  }
}

window._loadAiAdOverride = loadAiAdOverride;
window._ackAiAdOverrideComplete = async () => {
  // Playback restore is handled on the frontend immediately.
  // Database auto-clear is best effort and may fail for anon users.
  try {
    const { data: row } = await supabase.from('site_settings').select('id').limit(1).maybeSingle();
    if (row?.id) {
      await supabase.from('site_settings').update({ ai_ad_enabled: false, ai_ad_updated_at: new Date().toISOString() }).eq('id', row.id);
      return;
    }
  } catch {}

  try {
    const { data: liveRow } = await supabase.from('public_live_state').select('id').limit(1).maybeSingle();
    if (!liveRow?.id) return;
    await supabase.from('public_live_state').update({ is_live: false, stream_status: 'offline', updated_at: new Date().toISOString() }).eq('id', liveRow.id);
    return;
  } catch {}

  try {
    const raw = localStorage.getItem(AI_AD_LOCAL_FALLBACK_KEY);
    if (!raw) return;
    const row = JSON.parse(raw);
    row.ai_ad_enabled = false;
    row.ai_ad_updated_at = new Date().toISOString();
    localStorage.setItem(AI_AD_LOCAL_FALLBACK_KEY, JSON.stringify(row));
  } catch {}
};

loadAiAdOverride();
subscribeAiAdOverride();
window.addEventListener('storage', (e) => {
  if (e.key === AI_AD_LOCAL_FALLBACK_KEY) loadAiAdOverride();
});
setInterval(loadAiAdOverride, 15000);
