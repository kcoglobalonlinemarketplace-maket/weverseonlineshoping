import { supabase } from './supabase-client.js';

export const LIVE_CONTROL_CACHE_KEY = 'kco_live_control_admin_v1';
export const LIVE_PUBLIC_STATE_CACHE_KEY = 'kco_live_public_state_v1';

export const LIVE_STREAM_PLATFORM_DEFS = [
  { id: 'tiktok-live', label: 'TikTok Live', icon: 'radio', description: 'Real TikTok external streaming should use RTMP server URL + stream key from TikTok LIVE tools or LIVE Studio.', fields: ['apiKey', 'apiSecret', 'channelId', 'rtmpUrl', 'streamKey', 'hostUrl', 'embedUrl'] },
  { id: 'youtube-live', label: 'YouTube Live', icon: 'play-circle', description: 'Long-form streaming, premiere, and embedded live video.', fields: ['apiKey', 'apiSecret', 'channelId', 'hostUrl', 'embedUrl'] },
  { id: 'facebook-live', label: 'Facebook Live', icon: 'share-2', description: 'Go live to Facebook pages and groups.', fields: ['apiKey', 'apiSecret', 'pageId', 'hostUrl', 'embedUrl'] },
  { id: 'instagram-live', label: 'Instagram Live', icon: 'camera', description: 'Prepared for support as official API access expands.', fields: ['apiKey', 'apiSecret', 'channelId', 'hostUrl'] },
  { id: 'twitch', label: 'Twitch', icon: 'gamepad-2', description: 'Gaming and interactive livestreaming.', fields: ['clientId', 'clientSecret', 'channelId', 'streamKey', 'hostUrl', 'embedUrl'] },
  { id: 'x-live', label: 'X (Twitter) Live', icon: 'send', description: 'Stream to live video destinations on X.', fields: ['apiKey', 'apiSecret', 'channelId', 'hostUrl'] },
  { id: 'kick', label: 'Kick', icon: 'zap', description: 'Creator streaming and chat-first broadcasts.', fields: ['apiKey', 'apiSecret', 'channelId', 'streamKey', 'hostUrl', 'embedUrl'] },
  { id: 'vimeo-live', label: 'Vimeo Live', icon: 'video', description: 'Professional event streaming and embedded playback.', fields: ['apiKey', 'apiSecret', 'channelId', 'hostUrl', 'embedUrl'] },
  { id: 'zoom', label: 'Zoom', icon: 'monitor', description: 'Meetings and webinar streaming destinations.', fields: ['sdkKey', 'sdkSecret', 'meetingId', 'hostUrl', 'embedUrl'] },
  { id: 'google-meet', label: 'Google Meet', icon: 'monitor', description: 'Meet sessions and event links.', fields: ['clientId', 'clientSecret', 'meetingId', 'hostUrl'] },
  { id: 'microsoft-teams', label: 'Microsoft Teams', icon: 'users', description: 'Enterprise collaboration and live events.', fields: ['clientId', 'clientSecret', 'tenantId', 'meetingId', 'hostUrl'] },
  { id: 'rtmp-custom', label: 'RTMP Custom Stream', icon: 'wifi', description: 'Custom encoder output, multi-restream, or private CDN.', fields: ['rtmpUrl', 'streamKey', 'embedUrl', 'hostUrl'] },
];

export const VIDEO_CALL_PROVIDER_DEFS = [
  { id: 'zoom', label: 'Zoom', icon: 'monitor', description: 'One-to-one and group video calls with webinar-grade control.', fields: ['sdkKey', 'sdkSecret', 'meetingId', 'hostUrl', 'joinUrl', 'embedUrl'] },
  { id: 'google-meet', label: 'Google Meet', icon: 'monitor', description: 'Browser-first meetings and call links.', fields: ['clientId', 'clientSecret', 'meetingId', 'hostUrl', 'joinUrl'] },
  { id: 'microsoft-teams', label: 'Microsoft Teams', icon: 'users', description: 'Enterprise calls and team meetings.', fields: ['clientId', 'clientSecret', 'tenantId', 'meetingId', 'hostUrl', 'joinUrl'] },
  { id: 'custom-room', label: 'Custom Video Room', icon: 'video', description: 'Use your own hosted room, SDK, or embed URL.', fields: ['hostUrl', 'joinUrl', 'embedUrl', 'webhookSecret'] },
];

function readCache(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeCache(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

function normalizePlatform(def, config = {}) {
  const credentials = config.credentials || {};
  const links = config.links || {};
  const normalized = {
    id: def.id,
    label: def.label,
    icon: def.icon,
    description: def.description,
    enabled: !!config.enabled,
    credentials: {},
    links: {
      hostUrl: links.hostUrl || config.hostUrl || '',
      embedUrl: links.embedUrl || config.embedUrl || '',
      joinUrl: links.joinUrl || config.joinUrl || '',
    },
    settings: {
      channelId: config.settings?.channelId || config.channelId || '',
      pageId: config.settings?.pageId || config.pageId || '',
      meetingId: config.settings?.meetingId || config.meetingId || '',
      tenantId: config.settings?.tenantId || config.tenantId || '',
      streamKey: config.settings?.streamKey || config.streamKey || '',
      rtmpUrl: config.settings?.rtmpUrl || config.rtmpUrl || '',
      webhookSecret: config.settings?.webhookSecret || config.webhookSecret || '',
    },
  };
  def.fields.forEach(field => {
    if (['apiKey','apiSecret','clientId','clientSecret','sdkKey','sdkSecret'].includes(field)) normalized.credentials[field] = credentials[field] || config[field] || '';
    if (['hostUrl','embedUrl','joinUrl'].includes(field) && !normalized.links[field]) normalized.links[field] = config[field] || '';
    if (['channelId','pageId','meetingId','tenantId','streamKey','rtmpUrl','webhookSecret'].includes(field) && !normalized.settings[field]) normalized.settings[field] = config[field] || '';
  });
  return normalized;
}

function normalizeSession(session = {}, index = 0) {
  return {
    id: session.id || `session-${Date.now()}-${index}`,
    title: session.title || 'Untitled Live Stream',
    headline: session.headline || '',
    description: session.description || '',
    embedUrl: session.embedUrl || '',
    badgeText: session.badgeText || 'LIVE NOW',
    status: session.status || 'draft',
    scheduledAt: session.scheduledAt || '',
    startedAt: session.startedAt || '',
    endedAt: session.endedAt || '',
    selectedPlatforms: Array.isArray(session.selectedPlatforms) ? session.selectedPlatforms : [],
    notifyVisitors: session.notifyVisitors !== false,
    showHomepageBadge: session.showHomepageBadge !== false,
    showHomepageEmbed: !!session.showHomepageEmbed,
    viewerCount: Number(session.viewerCount) || 0,
    commentCount: Number(session.commentCount) || 0,
    streamStatus: session.streamStatus || 'idle',
  };
}

function normalizeRoom(room = {}, index = 0) {
  return {
    id: room.id || `room-${Date.now()}-${index}`,
    title: room.title || 'Video Call Room',
    providerId: room.providerId || 'zoom',
    callType: room.callType || 'group',
    roomCode: room.roomCode || '',
    hostUrl: room.hostUrl || '',
    joinUrl: room.joinUrl || '',
    embedUrl: room.embedUrl || '',
    status: room.status || 'draft',
    scheduledAt: room.scheduledAt || '',
    startedAt: room.startedAt || '',
    endedAt: room.endedAt || '',
    maxParticipants: Number(room.maxParticipants) || 25,
    waitingRoom: room.waitingRoom !== false,
    screenShare: room.screenShare !== false,
    recording: !!room.recording,
    cameraControl: room.cameraControl !== false,
    microphoneControl: room.microphoneControl !== false,
    chatEnabled: room.chatEnabled !== false,
    fileSharing: !!room.fileSharing,
    muteOnEntry: !!room.muteOnEntry,
    removeParticipants: room.removeParticipants !== false,
    notes: room.notes || '',
  };
}

export function getDefaultLiveControlAdminState() {
  return {
    streamingPlatforms: LIVE_STREAM_PLATFORM_DEFS.map(def => normalizePlatform(def)),
    videoCallProviders: VIDEO_CALL_PROVIDER_DEFS.map(def => normalizePlatform(def)),
    liveSessions: [],
    videoCallRooms: [],
    preferences: {
      homepageLiveBadgeEnabled: true,
      homepageLiveEmbedEnabled: true,
      visitorNotificationsEnabled: true,
      defaultBadgeText: 'LIVE NOW',
    },
  };
}

export function getDefaultPublicLiveState() {
  return {
    isLive: false,
    badgeText: 'LIVE NOW',
    headline: '',
    description: '',
    platformLabels: [],
    embedUrl: '',
    viewerCount: 0,
    commentCount: 0,
    streamStatus: 'offline',
    sessionId: '',
    notifyVisitors: true,
    startedAt: '',
    updatedAt: '',
  };
}

export async function loadLiveControlAdminState() {
  const fallback = readCache(LIVE_CONTROL_CACHE_KEY, getDefaultLiveControlAdminState());
  try {
    const { data, error } = await supabase.from('admin_live_control').select('*').limit(1).maybeSingle();
    if (error || !data) return normalizeLiveControlAdminState(fallback);
    const state = normalizeLiveControlAdminState(data);
    writeCache(LIVE_CONTROL_CACHE_KEY, state);
    return state;
  } catch {
    return normalizeLiveControlAdminState(fallback);
  }
}

export function normalizeLiveControlAdminState(raw = {}) {
  const defaults = getDefaultLiveControlAdminState();
  return {
    streamingPlatforms: LIVE_STREAM_PLATFORM_DEFS.map(def => normalizePlatform(def, (raw.streamingPlatforms || raw.live_streaming_platforms || []).find(item => item.id === def.id) || {})),
    videoCallProviders: VIDEO_CALL_PROVIDER_DEFS.map(def => normalizePlatform(def, (raw.videoCallProviders || raw.video_call_providers || []).find(item => item.id === def.id) || {})),
    liveSessions: (raw.liveSessions || raw.live_stream_sessions || []).map(normalizeSession),
    videoCallRooms: (raw.videoCallRooms || raw.video_call_rooms || []).map(normalizeRoom),
    preferences: { ...defaults.preferences, ...(raw.preferences || {}) },
  };
}

export async function saveLiveControlAdminState(state) {
  const normalized = normalizeLiveControlAdminState(state);
  writeCache(LIVE_CONTROL_CACHE_KEY, normalized);
  const payload = {
    id: state.id,
    live_streaming_platforms: normalized.streamingPlatforms,
    video_call_providers: normalized.videoCallProviders,
    live_stream_sessions: normalized.liveSessions,
    video_call_rooms: normalized.videoCallRooms,
    preferences: normalized.preferences,
    updated_at: new Date().toISOString(),
  };
  try {
    const { data: existing } = await supabase.from('admin_live_control').select('id').limit(1).maybeSingle();
    if (existing?.id) return await supabase.from('admin_live_control').update(payload).eq('id', existing.id);
    return await supabase.from('admin_live_control').insert(payload);
  } catch (error) {
    return { error };
  }
}

export async function loadPublicLiveState() {
  const fallback = readCache(LIVE_PUBLIC_STATE_CACHE_KEY, getDefaultPublicLiveState());
  try {
    const { data, error } = await supabase.from('public_live_state').select('*').limit(1).maybeSingle();
    if (error || !data) return { ...fallback };
    const state = normalizePublicLiveState(data);
    writeCache(LIVE_PUBLIC_STATE_CACHE_KEY, state);
    return state;
  } catch {
    return { ...fallback };
  }
}

export function normalizePublicLiveState(raw = {}) {
  const defaults = getDefaultPublicLiveState();
  return {
    ...defaults,
    ...raw,
    platformLabels: Array.isArray(raw.platformLabels || raw.platform_labels) ? (raw.platformLabels || raw.platform_labels) : [],
    viewerCount: Number(raw.viewerCount || raw.viewer_count) || 0,
    commentCount: Number(raw.commentCount || raw.comment_count) || 0,
    isLive: !!(raw.isLive ?? raw.is_live),
    badgeText: raw.badgeText || raw.badge_text || defaults.badgeText,
    streamStatus: raw.streamStatus || raw.stream_status || defaults.streamStatus,
    sessionId: raw.sessionId || raw.session_id || defaults.sessionId,
    notifyVisitors: raw.notifyVisitors !== false && raw.notify_visitors !== false,
    startedAt: raw.startedAt || raw.started_at || '',
    updatedAt: raw.updatedAt || raw.updated_at || '',
  };
}

export async function savePublicLiveState(state) {
  const normalized = normalizePublicLiveState(state);
  writeCache(LIVE_PUBLIC_STATE_CACHE_KEY, normalized);
  const payload = {
    is_live: normalized.isLive,
    badge_text: normalized.badgeText,
    headline: normalized.headline,
    description: normalized.description,
    platform_labels: normalized.platformLabels,
    embed_url: normalized.embedUrl,
    viewer_count: normalized.viewerCount,
    comment_count: normalized.commentCount,
    stream_status: normalized.streamStatus,
    session_id: normalized.sessionId,
    notify_visitors: normalized.notifyVisitors,
    started_at: normalized.startedAt || null,
    updated_at: new Date().toISOString(),
  };
  try {
    const { data: existing } = await supabase.from('public_live_state').select('id').limit(1).maybeSingle();
    if (existing?.id) return await supabase.from('public_live_state').update(payload).eq('id', existing.id);
    return await supabase.from('public_live_state').insert(payload);
  } catch (error) {
    return { error };
  }
}
