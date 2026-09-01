/* ═══════════════════════════════════════════════════════════════════════
   Weverse Online Shop — Real Voice Call & Message System
   
   Provides 2 buttons for every product/property:
   1. Call Company  — Voice conversation with a real sales representative
   2. Message Company — Text chat with the sales team
   
   Uses Web Speech API (free, built-in) for voice, Pollinations AI (free,
   no key) for conversation intelligence. Zero server costs.
   ═══════════════════════════════════════════════════════════════════════ */

import { ANON_KEY, SUPABASE_URL, supabase } from './supabase-client.js';

const POLLINATIONS_URL = 'https://text.pollinations.ai/openai';

// ── Locale & Time Detection ───────────────────────────────────────
function detectLocale() {
  let country = '', countryName = '', language = '';
  try {
    const saved = JSON.parse(localStorage.getItem('kco_locale') || 'null');
    if (saved?.country) country = saved.country;
    if (saved?.countryName) countryName = saved.countryName;
    if (saved?.language) language = saved.language;
  } catch {}
  if (!language) {
    try { language = (navigator.language || 'en').split('-')[0]; } catch { language = 'en'; }
  }
  return { country, countryName, language };
}

function getLocalGreeting() {
  const now = new Date();
  const locale = detectLocale();
  let tz = 'UTC';
  try {
    const saved = JSON.parse(localStorage.getItem('kco_locale') || 'null');
    if (saved?.timezone) tz = saved.timezone;
  } catch {}
  try {
    const hour = parseInt(now.toLocaleTimeString('en-US', { timeZone: tz, hour: 'numeric', hour12: false }));
    const day = now.toLocaleDateString('en-US', { timeZone: tz, weekday: 'long' });
    const isWeekend = day === 'Saturday' || day === 'Sunday';
    let timeGreeting = 'Hello';
    if (hour >= 5 && hour < 12) timeGreeting = 'Good morning';
    else if (hour >= 12 && hour < 17) timeGreeting = 'Good afternoon';
    else if (hour >= 17 && hour < 21) timeGreeting = 'Good evening';
    else timeGreeting = 'Good evening';
    const weekendGreeting = isWeekend ? ` Happy ${day}!` : '';
    return `${timeGreeting}${weekendGreeting}`;
  } catch {
    return 'Hello';
  }
}

// ── Representative Names by Language ───────────────────────────────
const AGENT_NAMES = {
  en: { male: ['Michael', 'James', 'Daniel', 'William', 'David', 'Alexander', 'Thomas', 'Oliver', 'Benjamin'], female: ['Emily', 'Sophia', 'Charlotte', 'Olivia', 'Emma', 'Amelia', 'Isabella', 'Victoria', 'Anna'] },
  zh: { male: ['Wei', 'Ming', 'Jun', 'Lei', 'Chen'], female: ['Xiao Mei', 'Li Na', 'Fang', 'Ying', 'Lin'] },
  es: { male: ['Carlos', 'Miguel', 'Diego', 'Pablo', 'Andrés'], female: ['María', 'Isabel', 'Carmen', 'Rosa', 'Elena'] },
  fr: { male: ['Pierre', 'Jean', 'François', 'Philippe', 'Nicolas'], female: ['Marie', 'Sophie', 'Claire', 'Anne', 'Julie'] },
  de: { male: ['Hans', 'Klaus', 'Stefan', 'Thomas', 'Andreas'], female: ['Anna', 'Greta', 'Heike', 'Sabine', 'Claudia'] },
  ar: { male: ['Mohammed', 'Ahmed', 'Omar', 'Ali', 'Hassan'], female: ['Fatima', 'Aisha', 'Layla', 'Nora', 'Salma'] },
};

function getAgentName(listing) {
  const locale = detectLocale();
  const lang = locale.language || 'en';
  const names = AGENT_NAMES[lang] || AGENT_NAMES.en;
  const pool = names.female;
  const idx = Math.abs(hashCode(listing?.property_id || 'default')) % pool.length;
  return pool[idx];
}

function getCompanyName() {
  return 'Weverse Online Shop';
}

function hashCode(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

// ── Product Context Builder ────────────────────────────────────────
function buildProductContext(listing) {
  if (!listing) return '';
  const parts = [];
  parts.push(`Product: ${listing.title || 'Untitled'}`);
  parts.push(`Category: ${listing.category || listing.listing_type || 'General'}`);
  if (listing.price) parts.push(`Price: ${listing.price}`);
  if (listing.description) parts.push(`Description: ${String(listing.description).slice(0, 500)}`);
  if (listing.listing_type === 'property') {
    if (listing.bedrooms != null) parts.push(`Bedrooms: ${listing.bedrooms}`);
    if (listing.bathrooms != null) parts.push(`Bathrooms: ${listing.bathrooms}`);
    if (listing.land_size) parts.push(`Size: ${listing.land_size}`);
    if (listing.city) parts.push(`City: ${listing.city}`);
    if (listing.state) parts.push(`State/Region: ${listing.state}`);
    if (listing.country) parts.push(`Country: ${listing.country}`);
    if (listing.condition) parts.push(`Condition: ${listing.condition}`);
    if (listing.year_built) parts.push(`Year Built: ${listing.year_built}`);
    if (listing.parking) parts.push(`Parking: ${listing.parking}`);
    if (listing.nearby_area && typeof listing.nearby_area === 'object') {
      const nearby = [];
      Object.entries(listing.nearby_area).forEach(([k, v]) => {
        if (Array.isArray(v) && v.length) nearby.push(`${k}: ${v.join(', ')}`);
      });
      if (nearby.length) parts.push(`Nearby: ${nearby.join('; ')}`);
    }
  }
  if (listing.listing_type === 'vehicle') {
    if (listing.brand) parts.push(`Brand: ${listing.brand}`);
    if (listing.model) parts.push(`Model: ${listing.model}`);
    if (listing.model_year) parts.push(`Year: ${listing.model_year}`);
    if (listing.mileage) parts.push(`Mileage: ${listing.mileage}`);
    if (listing.fuel_type) parts.push(`Fuel: ${listing.fuel_type}`);
    if (listing.transmission) parts.push(`Transmission: ${listing.transmission}`);
    if (listing.condition) parts.push(`Condition: ${listing.condition}`);
    if (listing.color) parts.push(`Color: ${listing.color}`);
    if (listing.engine) parts.push(`Engine: ${listing.engine}`);
  }
  if (Array.isArray(listing.features) && listing.features.length) {
    parts.push(`Features: ${listing.features.slice(0, 10).join(', ')}`);
  }
  if (Array.isArray(listing.images) && listing.images.length) {
    parts.push(`Images available: ${listing.images.length}`);
  }
  return parts.join('\n');
}

function buildCompanyContext() {
  return `Company: ${getCompanyName()}
We are a global online marketplace connecting buyers with quality products and properties worldwide.
We offer secure checkout, payment protection, free worldwide shipping on most items, and a 14-day return policy.
We support multiple payment methods including credit cards, bank transfers, and mobile money.
Our customer support team is available to help with orders, shipping, returns, and general inquiries.
We have products across categories: Real Estate, Cars, Trucks, Motorhomes, Electronics, Fashion, Jewelry, Beauty, Kitchen, Home Decor, and more.
Our website is weverseonlineshop.com.`;
}

// ── AI Conversation Engine (Edge Function → Pollinations fallback) ─
async function getAIReply(messages, systemPrompt, opts = {}) {
  // Prefer the server-side edge function (rich free-provider stack + grounded
  // product facts). Fall back to a direct Pollinations call if unavailable.
  const { listing = null, mode = 'agent' } = opts;
  const locale = detectLocale();
  const csv = localStorage.getItem('kco_locale') || '';
  let sessionId = '';
  try { sessionId = localStorage.getItem('kco_session_id') || ''; } catch {}
  try {
    const feUrl = `${SUPABASE_URL.replace(/\/+$/, '')}/functions/v1/smart-agent-chat`;
    const res = await fetch(feUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'apikey': ANON_KEY, 'Authorization': `Bearer ${ANON_KEY}` },
      body: JSON.stringify({
        message: messages.length ? String(messages[messages.length - 1].content || '') : '',
        history: messages.slice(0, -1),
        mode,
        listing: mode === 'agent' ? (listing || null) : null,
        country: locale.country,
        countryName: locale.countryName,
        language: locale.language,
        session_id: sessionId,
      }),
      signal: AbortSignal.timeout(45000),
    });
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.response === 'string' && data.response.trim()) {
        return data.response.trim();
      }
    }
  } catch { /* fall through to Pollinations */ }

  // ── Fallback: direct Pollinations (free, keyless) ─────────────────
  const body = {
    model: 'openai',
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages.slice(-12).map(m => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: String(m.content || '').slice(0, 2000),
      })),
    ],
    max_tokens: 800,
  };
  const res = await fetch(POLLINATIONS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(60000),
  });
  if (!res.ok) throw new Error(`AI-${res.status}`);
  const data = await res.json();
  const text = String(data?.choices?.[0]?.message?.content || '').trim();
  if (!text) throw new Error('AI-empty');
  return text;
}

// ── Speech Synthesis (TTS) ─────────────────────────────────────────
const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
let speakingVoice = null;

// Cache voices — getVoices() returns [] until the async voiceschanged event.
let cachedVoices = [];

function refreshVoiceCache() {
  if (!synth) return;
  try { cachedVoices = synth.getVoices() || []; } catch { cachedVoices = []; }
}

function ensureVoicesReady(cb) {
  if (!synth) { cb(); return; }
  refreshVoiceCache();
  if (cachedVoices.length) { cb(); return; }
  let done = false;
  const finish = () => { if (!done) { done = true; cleanup(); cb(); } };
  const onVoicesChanged = () => { refreshVoiceCache(); finish(); };
  synth.addEventListener('voiceschanged', onVoicesChanged);
  const cleanup = () => synth.removeEventListener('voiceschanged', onVoicesChanged);
  // Safety timeout so we never wait forever.
  setTimeout(finish, 800);
}

function isFemaleVoiceName(name) {
  const n = String(name || '').toLowerCase();
  const female = /female|woman|girl|samantha|victoria|karen|moira|tessa|fiona|ava|allison|susan|zira|aria|serena|siri|jenny|jennifer|alison|salli|joanna|kendra|kimberly|ivy|emma|olivia|amanda|ashley|michelle|hazel|nicky|libby|sonia|heera|katya|zoey|amy|bella|grace|harriet|natasha|sophie|melina|google us english|google uk english female|mei-jia|tina|zoe|emma|aria|li mu|google british english female|amira|ayesha/.test(n);
  const male = /male|man|guy|boy|david|mark|daniel|james|oliver|jack|matthew|alex|tom|ben|sam|ryan|eric|guy|alexander|liam|noah|lucas|george|charlie|thomas|joseph|michael|william|henry|arthur|ethan|mason|jacob/.test(n);
  return female && !male;
}

function pickVoice(lang) {
  if (!synth) return null;
  let voices = cachedVoices;
  if (!voices.length) { try { voices = synth.getVoices() || []; } catch { voices = []; } }

  // Only genuine US or UK English — never Indian English or other accents.
  const isTargetAccent = (v) => {
    const l = (v.lang || '').toLowerCase();
    if (l.startsWith('en-us')) return true;
    if (l.startsWith('en-gb')) return true;
    if (l.startsWith('en')) {
      const tag = l.split('-')[1] || '';
      // Explicitly avoid Indian, Filipino, South-African, NZ, AU voices.
      if (/^(in|ph|za|ng|gh|ke|au|nz)$/.test(tag)) return false;
      return true;
    }
    return false;
  };

  const femaleVoice = voices.find(v => isTargetAccent(v) && isFemaleVoiceName(v.name));
  if (femaleVoice) return femaleVoice;

  const nonIndianEn = voices.find(v => isTargetAccent(v));
  if (nonIndianEn) return nonIndianEn;

  const anyUS = voices.find(v => v.lang.toLowerCase().startsWith('en-us'));
  if (anyUS) return anyUS;
  const anyGB = voices.find(v => v.lang.toLowerCase().startsWith('en-gb'));
  if (anyGB) return anyGB;
  const anyEn = voices.find(v => v.lang.toLowerCase().startsWith('en') && !/^en-(in|ph|za|ng|gh|ke|au|nz)$/i.test(v.lang));
  if (anyEn) return anyEn;

  // Absolute last resort — any female English voice.
  return voices.find(v => v.lang.toLowerCase().startsWith('en') && isFemaleVoiceName(v.name)) ||
         voices.find(v => v.lang.toLowerCase().startsWith('en')) || voices[0] || null;
}

// Speak with a guaranteed completion callback (falls back to default voice
// if none is picked yet, and always fires onEnd so the call never hangs).
function speak(text, lang, onEnd) {
  if (!synth || !text) { onEnd?.(); return; }
  const finish = () => onEnd?.();
  synth.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 1.05;
  utter.pitch = 1.0;
  utter.volume = 1.0;
  let voice = pickVoice(lang);
  if (voice) utter.voice = voice;
  let ended = false;
  const once = () => { if (!ended) { ended = true; finish(); } };
  utter.onend = once;
  utter.onerror = () => once();
  // Absolute safety timeout so the call never stalls on speech.
  const safety = setTimeout(once, 30000);
  utter.onend = () => { clearTimeout(safety); once(); };
  utter.onerror = () => { clearTimeout(safety); once(); };
  synth.speak(utter);
}

function stopSpeaking() {
  if (synth) synth.cancel();
}

// ── Ring Tone ──────────────────────────────────────────────────────
// Plays a real, calm, musical ringtone while the customer waits for the
// representative to pick up (~25s). Source priority:
//   1. The ringtone an admin uploads on the Dashboard (stored in Supabase
//      and referenced by site_settings.ringtone_audio). This is live
//      immediately with no redeploy.
//   2. An audio file dropped into the project's public/ folder (ringtone.mp3
//      / .wav / .ogg / .m4a) — requires a rebuild + redeploy.
//   3. A gentle synthesized melody, so there is always a pleasant ring.
let ringCtx = null;
let ringTimer = null;
let ringGain = null;
let ringOscs = [];
let ringSource = null;
let ringBuffer = null;
let ringBufferPromise = null;

// ── Real audio file playback (optional) ─────────────────────────────
function loadRingBuffer(ctx) {
  if (ringBuffer) return Promise.resolve(ringBuffer);
  if (ringBufferPromise) return ringBufferPromise;

  const decodeUrl = (url) =>
    fetch(url, { cache: 'force-cache' })
      .then((res) => { if (!res.ok) throw new Error('bad-status'); return res.arrayBuffer(); })
      .then((buf) => ctx.decodeAudioData(buf));

  // 1) Live URL set on the admin dashboard, if any.
  const dashboardUrl = async () => {
    try {
      const { data } = await supabase.from('site_settings').select('ringtone_audio,ringtone_url').limit(1).maybeSingle();
      const url = data?.ringtone_audio || data?.ringtone_url || '';
      if (!url) throw new Error('no-dashboard-ring');
      return await decodeUrl(url);
    } catch (e) { throw new Error('no-dashboard-ring'); }
  };

  // 2) A file placed in the public/ folder of the deployment.
  const folderCandidates = () => {
    const urls = ['/ringtone.mp3', '/ringtone.wav', '/ringtone.ogg', '/ringtone.m4a'];
    const tryOne = (i) => {
      if (i >= urls.length) return Promise.reject(new Error('no-folder-ring'));
      return decodeUrl(urls[i]).catch((e) => tryOne(i + 1));
    };
    return tryOne(0);
  };

  ringBufferPromise = dashboardUrl()
    .catch(() => folderCandidates())
    .then((decoded) => { ringBuffer = decoded; return decoded; })
    .catch(() => { ringBufferPromise = null; throw new Error('no-ring'); });
  return ringBufferPromise;
}

function playRingFile() {
  if (!ringCtx || !ringBuffer) return;
  const now = ringCtx.currentTime;
  const master = ringCtx.createGain();
  master.gain.setValueAtTime(1, now);
  master.connect(ringCtx.destination);
  ringGain = master;
  const src = ringCtx.createBufferSource();
  src.buffer = ringBuffer;
  src.loop = true;
  src.connect(master);
  src.start(now);
  ringSource = src;
}

// ── Synthesized fallback melody (used only if no ringtone file exists) ──
// A calm, pleasant motif (note freqs in Hz + duration in seconds).
const RING_MOTIF = [
  { f: 523.25, d: 0.35 },   // C5
  { f: 659.25, d: 0.25 },   // E5
  { f: 783.99, d: 0.35 },   // G5
  { f: 659.25, d: 0.25 },   // E5
  { f: 880.00, d: 0.5 },    // A5
  { f: 0,       d: 0.15 },  // short rest
  { f: 783.99, d: 0.35 },   // G5
  { f: 659.25, d: 0.35 },   // E5
  { f: 523.25, d: 0.5 },    // C5
];

function toneNote(ctx, dest, freq, start, dur, vol) {
  if (!freq) return;
  // Two detuned oscillators create a warmer, more "live" timbre.
  [0, 6].forEach((detune) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    osc.detune.value = detune;
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(vol, start + 0.015);
    g.gain.setValueAtTime(vol, start + dur - 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    osc.connect(g);
    g.connect(dest);
    osc.start(start);
    osc.stop(start + dur + 0.02);
    ringOscs.push(osc);
  });
}

// Soft pad chord played underneath the melody for a fuller, richer ring.
function toneChord(ctx, dest, freqs, start, dur, vol) {
  (freqs || []).forEach((f) => toneNote(ctx, dest, f, start, dur, vol * 0.35));
}

function playRingMotif() {
  if (!ringCtx) return;
  if (ringGain) { try { ringGain.disconnect(); } catch {} ringGain = null; }
  const now = ringCtx.currentTime;
  let t = now;
  const master = ringCtx.createGain();
  master.gain.setValueAtTime(1, now);
  master.connect(ringCtx.destination);
  ringGain = master;
  RING_MOTIF.forEach((n) => {
    if (n.f) {
      const chordFreqs = [n.f / 2, n.f * 1.5];
      toneChord(ringCtx, master, chordFreqs, t, n.d * 0.9, 0.5);
    }
    toneNote(ringCtx, master, n.f, t, n.d, 0.5);
    t += n.d;
  });
}

function startRing() {
  stopRing();
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    if (!ringCtx) ringCtx = new AC();
    ringCtx.resume && ringCtx.resume();

    // Try the real audio file first. If it isn't there, fall back to the
    // synthesized melody. A small safety timeout guarantees we always ring.
    loadRingBuffer(ringCtx).then((buf) => {
      if (!ringCtx) return;
      // Stop any synth fallback that the safety timeout may have started.
      if (ringTimer) { clearInterval(ringTimer); ringTimer = null; }
      if (ringGain) { try { ringGain.disconnect(); } catch {} ringGain = null; }
      ringOscs.forEach((o) => { try { o.stop(); } catch {} });
      ringOscs = [];
      playRingFile();
    }).catch(() => {
      if (!ringCtx) return;
      if (!ringSource && !ringGain && !ringTimer) {
        playRingMotif();
        ringTimer = setInterval(playRingMotif, 3400);
      }
    });

    // Guarantee a ring even if the file fails to download quickly.
    setTimeout(() => {
      if (!ringCtx || ringSource !== null) return;
      if (!ringGain && !ringTimer) {
        playRingMotif();
        ringTimer = setInterval(playRingMotif, 3400);
      }
    }, 1500);
  } catch (e) { /* audio not available */ }
}

function stopRing() {
  if (ringTimer) { clearInterval(ringTimer); ringTimer = null; }
  if (ringSource) { try { ringSource.stop(); } catch {} ringSource = null; }
  if (ringGain) { try { ringGain.disconnect(); } catch {} ringGain = null; }
  ringOscs.forEach((o) => { try { o.stop(); } catch {} });
  ringOscs = [];
  if (ringCtx) { try { ringCtx.close(); } catch {} ringCtx = null; }
}

// ── Speech Recognition (STT) ───────────────────────────────────────
const SpeechRecognition = typeof window !== 'undefined'
  ? (window.SpeechRecognition || window.webkitSpeechRecognition) : null;

function createRecognizer(lang) {
  if (!SpeechRecognition) return null;
  const rec = new SpeechRecognition();
  rec.continuous = false;
  rec.interimResults = true;
  rec.maxAlternatives = 1;
  rec.lang = lang || 'en-US';
  return rec;
}

// ═══════════════════════════════════════════════════════════════════
//  VOICE CALL AGENT
// ═══════════════════════════════════════════════════════════════════

let callState = { active: false, listing: null, isCompany: false, agentName: '', history: [], recognizer: null };

function getLangCode(locale) {
  const map = { en: 'en-US', zh: 'zh-CN', es: 'es-ES', fr: 'fr-FR', de: 'de-DE', ar: 'ar-SA', ja: 'ja-JP', ko: 'ko-KR', pt: 'pt-BR', hi: 'hi-IN' };
  return map[locale] || 'en-US';
}

function injectCallStyles() {
  if (document.getElementById('kco-call-agent-style')) return;
  const style = document.createElement('style');
  style.id = 'kco-call-agent-style';
  style.textContent = `
    #kco-call-overlay{position:fixed;inset:0;z-index:999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.6);backdrop-filter:blur(8px);opacity:0;pointer-events:none;transition:opacity .3s ease}
    #kco-call-overlay.kco-active{opacity:1;pointer-events:auto}
    .kco-call-modal{width:100%;max-width:420px;margin:1rem;background:linear-gradient(145deg,#0f172a 0%,#1e293b 50%,#0f172a 100%);border-radius:2rem;border:1px solid rgba(255,255,255,.08);box-shadow:0 40px 100px rgba(0,0,0,.6),0 0 80px rgba(59,130,246,.15);overflow:hidden;transform:translateY(20px) scale(.95);transition:transform .3s ease}
    #kco-call-overlay.kco-active .kco-call-modal{transform:translateY(0) scale(1)}
    .kco-call-header{padding:2rem 1.5rem 1rem;text-align:center}
    .kco-call-avatar{width:80px;height:80px;border-radius:50%;margin:0 auto 1rem;position:relative;display:flex;align-items:center;justify-content:center}
    .kco-call-avatar-ring{position:absolute;inset:-6px;border-radius:50%;border:3px solid rgba(59,130,246,.3);animation:kco-call-pulse 2s ease-in-out infinite}
    .kco-call-avatar-ring2{position:absolute;inset:-12px;border-radius:50%;border:2px solid rgba(59,130,246,.15);animation:kco-call-pulse 2s ease-in-out infinite .4s}
    @keyframes kco-call-pulse{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.08);opacity:1}}
    .kco-call-avatar-inner{width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);display:flex;align-items:center;justify-content:center;color:#fff;font-size:2rem;font-weight:900;letter-spacing:-.02em;position:relative;z-index:1}
    .kco-call-name{color:#fff;font-size:1.25rem;font-weight:800;margin-bottom:.25rem}
    .kco-call-subtitle{color:rgba(255,255,255,.5);font-size:.8rem}
    .kco-call-status{padding:.5rem 1rem;text-align:center}
    .kco-call-status-text{color:rgba(255,255,255,.6);font-size:.85rem;font-weight:600;display:flex;align-items:center;justify-content:center;gap:.5rem}
    .kco-call-status-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
    .kco-call-status-dot.listening{background:#34d399;box-shadow:0 0 12px rgba(52,211,153,.5);animation:kco-call-dot-blink 1.2s ease-in-out infinite}
    .kco-call-status-dot.speaking{background:#3b82f6;box-shadow:0 0 12px rgba(59,130,246,.5);animation:kco-call-dot-blink 1.2s ease-in-out infinite}
    .kco-call-status-dot.thinking{background:#f59e0b;box-shadow:0 0 12px rgba(245,158,11,.5);animation:kco-call-dot-blink 1.2s ease-in-out infinite}
    .kco-call-status-dot.idle{background:#6b7280}
    @keyframes kco-call-dot-blink{0%,100%{opacity:1}50%{opacity:.4}}
    .kco-call-transcript{max-height:180px;overflow-y:auto;padding:.5rem 1.5rem 1rem;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.1) transparent}
    .kco-call-transcript::-webkit-scrollbar{width:4px}
    .kco-call-transcript::-webkit-scrollbar-thumb{background:rgba(255,255,255,.15);border-radius:4px}
    .kco-call-msg{margin-bottom:.5rem;padding:.4rem .75rem;border-radius:.75rem;font-size:.8rem;line-height:1.4;max-width:90%;word-break:break-word}
    .kco-call-msg.user{margin-left:auto;background:rgba(59,130,246,.25);color:#93c5fd;border-bottom-right-radius:.2rem}
    .kco-call-msg.agent{margin-right:auto;background:rgba(255,255,255,.08);color:rgba(255,255,255,.8);border-bottom-left-radius:.2rem}
    .kco-call-waveform{height:40px;display:flex;align-items:center;justify-content:center;gap:3px;padding:0 1.5rem}
    .kco-call-wave-bar{width:3px;border-radius:3px;background:rgba(59,130,246,.4);transition:height .15s ease}
    .kco-call-wave-bar.active{background:#3b82f6;box-shadow:0 0 8px rgba(59,130,246,.3)}
    .kco-call-controls{display:flex;align-items:center;justify-content:center;gap:1.5rem;padding:1rem 1.5rem 2rem}
    .kco-call-ctrl-btn{width:56px;height:56px;border-radius:50%;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s ease;color:#fff}
    .kco-call-ctrl-btn.mute{background:rgba(255,255,255,.1)}
    .kco-call-ctrl-btn.mute:hover{background:rgba(255,255,255,.18)}
    .kco-call-ctrl-btn.mute.active{background:#ef4444;color:#fff}
    .kco-call-ctrl-btn.speaker{background:rgba(255,255,255,.1)}
    .kco-call-ctrl-btn.speaker:hover{background:rgba(255,255,255,.18)}
    .kco-call-ctrl-btn.end{background:#ef4444;width:64px;height:64px;box-shadow:0 8px 30px rgba(239,68,68,.4)}
    .kco-call-ctrl-btn.end:hover{background:#dc2626;transform:scale(1.05)}
    .kco-call-product-bar{display:flex;align-items:center;gap:.75rem;padding:.65rem 1.5rem;background:rgba(255,255,255,.04);border-top:1px solid rgba(255,255,255,.06)}
    .kco-call-product-thumb{width:40px;height:40px;border-radius:.5rem;object-fit:cover;border:1px solid rgba(255,255,255,.1)}
    .kco-call-product-info{min-width:0;flex:1}
    .kco-call-product-title{color:#fff;font-size:.75rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .kco-call-product-price{color:#3b82f6;font-size:.7rem;font-weight:800}
    .kco-call-time{color:rgba(255,255,255,.3);font-size:.7rem;font-variant-numeric:tabular-nums}
    @media(max-width:480px){.kco-call-modal{border-radius:1.5rem;margin:.5rem;max-width:calc(100vw - 1rem)}}
  `;
  document.head.appendChild(style);
}

function buildCallModalHtml(listing, isCompany, agentName) {
  const greeting = getLocalGreeting();
  const productName = isCompany ? getCompanyName() : (listing?.title || 'this product');
  const productImage = (!isCompany && listing?.images?.[0]) ? listing.images[0] : '';
  const productPrice = (!isCompany && listing?.price) ? listing.price : '';
  const subtitle = 'Customer Care';
  const avatarLetter = agentName.charAt(0);

  return `
    <div class="kco-call-modal">
      <div class="kco-call-header">
        <div class="kco-call-avatar">
          <div class="kco-call-avatar-ring"></div>
          <div class="kco-call-avatar-ring2"></div>
          <div class="kco-call-avatar-inner">${avatarLetter}</div>
        </div>
        <div class="kco-call-name">${agentName}</div>
        <div class="kco-call-subtitle">${subtitle} · ${getCompanyName()}</div>
      </div>
      <div class="kco-call-status">
        <div class="kco-call-status-text">
          <span class="kco-call-status-dot thinking" id="kco-call-dot"></span>
          <span id="kco-call-status-label">Calling...</span>
        </div>
      </div>
      <div class="kco-call-waveform" id="kco-call-waveform">
        ${Array.from({length: 20}, () => '<div class="kco-call-wave-bar" style="height:4px"></div>').join('')}
      </div>
      <div class="kco-call-controls">
        <button class="kco-call-ctrl-btn mute" id="kco-call-mute-btn" title="Mute">
          <i data-lucide="mic" class="w-5 h-5"></i>
        </button>
        <button class="kco-call-ctrl-btn end" id="kco-call-end-btn" title="End Call">
          <i data-lucide="phone-off" class="w-6 h-6"></i>
        </button>
        <button class="kco-call-ctrl-btn speaker" id="kco-call-speaker-btn" title="Speaker">
          <i data-lucide="volume-2" class="w-5 h-5"></i>
        </button>
      </div>
      ${!isCompany && productImage ? `
      <div class="kco-call-product-bar">
        <img class="kco-call-product-thumb" src="${productImage}" alt="" onerror="this.style.display='none'">
        <div class="kco-call-product-info">
          <div class="kco-call-product-title">${productName}</div>
          ${productPrice ? `<div class="kco-call-product-price">${productPrice}</div>` : ''}
        </div>
        <div class="kco-call-time" id="kco-call-time">00:00</div>
      </div>` : `
      <div class="kco-call-product-bar">
        <div class="kco-call-product-info">
          <div class="kco-call-product-title">${getCompanyName()}</div>
          <div class="kco-call-product-price">General Support</div>
        </div>
        <div class="kco-call-time" id="kco-call-time">00:00</div>
      </div>`}
    </div>
  `;
}

function addCallMsg() {
  // Transcript display is hidden — the call is an audio-only phone call.
}

function setCallStatus(status, label) {
  const dot = document.getElementById('kco-call-dot');
  const lbl = document.getElementById('kco-call-status-label');
  if (dot) { dot.className = `kco-call-status-dot ${status}`; }
  if (lbl) { lbl.textContent = label; }
}

let callTimerInterval = null;
function startCallTimer() {
  const el = document.getElementById('kco-call-time');
  if (!el) return;
  let secs = 0;
  callTimerInterval = setInterval(() => {
    secs++;
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    el.textContent = `${m}:${s}`;
  }, 1000);
}
function stopCallTimer() {
  if (callTimerInterval) { clearInterval(callTimerInterval); callTimerInterval = null; }
}

let waveformInterval = null;
function animateWaveform(active) {
  const bars = document.querySelectorAll('#kco-call-waveform .kco-call-wave-bar');
  if (waveformInterval) { clearInterval(waveformInterval); waveformInterval = null; }
  if (!active) {
    bars.forEach(b => { b.style.height = '4px'; b.classList.remove('active'); });
    return;
  }
  waveformInterval = setInterval(() => {
    bars.forEach(b => {
      const h = 4 + Math.random() * 28;
      b.style.height = h + 'px';
      b.classList.toggle('active', h > 12);
    });
  }, 120);
}

function buildCallSystemPrompt(listing, isCompany, agentName, greeting) {
  const locale = detectLocale();
  const lang = locale.language || 'en';
  const langName = { en: 'English', zh: 'Mandarin Chinese', es: 'Spanish', fr: 'French', de: 'German', ar: 'Arabic', ja: 'Japanese', ko: 'Korean', pt: 'Portuguese', hi: 'Hindi' }[lang] || 'English';

  const productCtx = isCompany ? '' : `\n\nCURRENT PRODUCT LISTING INFORMATION:\n${buildProductContext(listing)}`;
  const companyCtx = isCompany ? `\n\nCOMPANY INFORMATION:\n${buildCompanyContext()}` : '';

  return `You are ${agentName}, a real human sales representative for ${getCompanyName()}. You are NOT an AI or chatbot — you are a professional, experienced sales consultant speaking on the phone with a customer.

CRITICAL RULES:
- NEVER say you are AI, a bot, an assistant, or automated in any way
- If asked, warmly confirm you are a real person on the sales team
- Speak naturally like a real professional on a phone call
- Use warm, friendly, confident, humble, respectful, and persuasive language
- Listen carefully and respond to what the customer actually says
- Use natural pauses in your responses
- Never make up information you don't have
- If unsure, say you'll check and get back to them
- Guide the customer toward a purchase when appropriate, but never pressure
- Use the greeting: "${greeting}"
- Respond in ${langName}${lang !== 'en' ? ' (if the customer speaks ' + langName + ', respond in ' + langName + ')' : ''}
- Keep responses conversational and concise (2-4 sentences typically)
- Never lie or fabricate details
- Always protect the company's reputation
- If the customer seems hesitant, address their concerns empathetically
- Always be helpful and make the customer feel valued${productCtx}${companyCtx}

YOUR ROLE:
${isCompany
  ? `You handle general marketplace questions about ${getCompanyName()}. Help with: products, purchasing, checkout, payments, shipping, returns, customer support, orders, policies, and general information.`
  : `You are a product specialist helping a customer with a specific listing. Explain genuine features, answer questions about the product shown in the showroom, discuss price, availability, and guide them toward a purchase or next step. You know the product details listed above.`
}`;
}

async function startCallAgent(listing, isCompany = false) {
  if (callState.active) return;

  injectCallStyles();

  const locale = detectLocale();
  const lang = locale.language || 'en';
  const langCode = getLangCode(lang);
  const agentName = getAgentName(listing);
  const greeting = getLocalGreeting();

  // Create overlay
  const overlay = document.createElement('div');
  overlay.id = 'kco-call-overlay';
  overlay.innerHTML = buildCallModalHtml(listing, isCompany, agentName);
  document.body.appendChild(overlay);
  if (window.lucide) lucide.createIcons();

  // Show
  requestAnimationFrame(() => overlay.classList.add('kco-active'));

  callState = {
    active: true,
    listing,
    isCompany,
    agentName,
    history: [],
    recognizer: null,
    muted: false,
    speaking: false,
    listening: false,
  };

  startCallTimer();

  // End call handler
  const endBtn = document.getElementById('kco-call-end-btn');
  const muteBtn = document.getElementById('kco-call-mute-btn');

  endBtn?.addEventListener('click', () => endCall());
  muteBtn?.addEventListener('click', () => {
    callState.muted = !callState.muted;
    muteBtn.classList.toggle('active', callState.muted);
    if (callState.muted) {
      stopSpeaking();
      if (callState.recognizer) try { callState.recognizer.stop(); } catch {}
    }
  });

  // Ring the agent first — the call rings a few times before someone picks up.
  setCallStatus('thinking', 'Calling...');
  animateWaveform(false);
  startRing();

  const systemPrompt = buildCallSystemPrompt(listing, isCompany, agentName, greeting);

  try {
    // Let the phone ring many times (ring ... pause ... ring ... pause)
    // for ~25 seconds before the agent picks up — feels like a real phone.
    await new Promise(resolve => setTimeout(resolve, 25000));
    if (!callState.active) return;
    // Agent picks up.
    stopRing();
    setCallStatus('speaking', 'Connected');

    // Brief natural pickup pause, then a warm human greeting that
    // introduces the rep by name — sounds like a real person, not an AI.
    const welcome = `${greeting}! You've reached ${getCompanyName()}, this is ${agentName} speaking. How can I help you today?`;
    ensureVoicesReady(() => {
      speak(welcome, langCode, () => {
        if (callState.active) {
          setCallStatus('listening', 'Listening...');
          startListening(langCode, systemPrompt);
        }
      });
    });
    addCallMsg(welcome, 'agent');
    callState.history.push({ role: 'assistant', content: welcome });
  } catch (err) {
    stopRing();
    setCallStatus('idle', 'Connection issue — please try again');
    setTimeout(() => endCall(), 3000);
  }
}

function startListening(langCode, systemPrompt) {
  if (!callState.active || callState.muted) return;

  const rec = createRecognizer(langCode);
  if (!rec) {
    // No speech recognition available — fall back to text input
    setCallStatus('idle', 'Type your message below');
    showCallTextInput(systemPrompt);
    return;
  }

  callState.recognizer = rec;

  let finalTranscript = '';

  rec.onresult = (event) => {
    let interim = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const t = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript = t;
      } else {
        interim = t;
      }
    }
    if (interim) {
      setCallStatus('listening', `Hearing: "${interim.slice(0, 40)}..."`);
    }
  };

  rec.onend = async () => {
    if (!callState.active) return;
    if (finalTranscript.trim()) {
      await handleCallUserInput(finalTranscript.trim(), systemPrompt);
    } else {
      // No speech detected — prompt again
      if (callState.active && !callState.speaking) {
        setCallStatus('listening', 'Listening...');
        if (callState.active) startListening(langCode, systemPrompt);
      }
    }
  };

  rec.onerror = (event) => {
    if (!callState.active) return;
    if (event.error === 'no-speech' || event.error === 'aborted') {
      if (callState.active && !callState.speaking) {
        setCallStatus('listening', 'Listening...');
        if (callState.active) {
          setTimeout(() => startListening(langCode, systemPrompt), 300);
        }
      }
    }
  };

  try {
    setCallStatus('listening', 'Listening...');
    animateWaveform(true);
    rec.start();
  } catch {}
}

async function handleCallUserInput(text, systemPrompt) {
  if (!callState.active) return;

  addCallMsg(text, 'user');
  callState.history.push({ role: 'user', content: text });
  setCallStatus('thinking', 'Thinking...');
  animateWaveform(true);

  try {
    const reply = await getAIReply(callState.history, systemPrompt, {
      listing: callState.listing,
      mode: callState.isCompany ? 'company' : 'agent',
    });
    callState.history.push({ role: 'assistant', content: reply });
    addCallMsg(reply, 'agent');

    const locale = detectLocale();
    const langCode = getLangCode(locale.language || 'en');

    callState.speaking = true;
    setCallStatus('speaking', 'Speaking...');
    ensureVoicesReady(() => {
      speak(reply, langCode, () => {
        callState.speaking = false;
        if (callState.active && !callState.muted) {
          setCallStatus('listening', 'Listening...');
          startListening(langCode, systemPrompt);
        }
      });
    });
  } catch (err) {
    addCallMsg("I'm sorry, could you repeat that? I want to make sure I give you the best help.", 'agent');
    const locale = detectLocale();
    const langCode = getLangCode(locale.language || 'en');
    speak("Sorry, could you repeat that?", langCode, () => {
      if (callState.active) {
        setCallStatus('listening', 'Listening...');
        startListening(langCode, systemPrompt);
      }
    });
  }
}

function showCallTextInput(systemPrompt) {
  const overlay = document.getElementById('kco-call-overlay');
  if (!overlay) return;
  const modal = overlay.querySelector('.kco-call-modal');
  if (!modal) return;

  const inputBar = document.createElement('div');
  inputBar.style.cssText = 'display:flex;gap:.5rem;padding:.75rem 1.5rem 1.5rem;background:rgba(255,255,255,.04);border-top:1px solid rgba(255,255,255,.06)';
  inputBar.innerHTML = `
    <input type="text" id="kco-call-text-input" placeholder="Type your message..." style="flex:1;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.08);color:#fff;border-radius:1rem;padding:.6rem 1rem;font-size:.85rem;outline:none">
    <button id="kco-call-text-send" style="width:44px;height:44px;border-radius:50%;border:none;background:#3b82f6;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer">
      <i data-lucide="send" class="w-4 h-4"></i>
    </button>
  `;
  modal.appendChild(inputBar);
  if (window.lucide) lucide.createIcons();

  const input = document.getElementById('kco-call-text-input');
  const send = document.getElementById('kco-call-text-send');
  const doSend = () => {
    const text = input?.value?.trim();
    if (!text) return;
    input.value = '';
    handleCallUserInput(text, systemPrompt);
  };
  send?.addEventListener('click', doSend);
  input?.addEventListener('keydown', (e) => { if (e.key === 'Enter') doSend(); });
  input?.focus();
}

function endCall() {
  stopSpeaking();
  stopRing();
  stopCallTimer();
  animateWaveform(false);
  if (callState.recognizer) { try { callState.recognizer.stop(); } catch {} }
  callState.active = false;

  const overlay = document.getElementById('kco-call-overlay');
  if (overlay) {
    overlay.classList.remove('kco-active');
    setTimeout(() => overlay.remove(), 350);
  }
}

// ═══════════════════════════════════════════════════════════════════
//  MESSAGE AGENT (Text Chat)
// ═══════════════════════════════════════════════════════════════════

let msgState = { active: false, panel: null, body: null, input: null, history: [], busy: false, isCompany: false, listing: null };

function injectMsgStyles() {
  if (document.getElementById('kco-msg-agent-style')) return;
  const style = document.createElement('style');
  style.id = 'kco-msg-agent-style';
  style.textContent = `
    .kco-msg-overlay{position:fixed;inset:0;z-index:985;background:rgba(0,0,0,.45);backdrop-filter:blur(6px);opacity:0;pointer-events:none;transition:opacity .25s ease}
    .kco-msg-overlay.kco-open{opacity:1;pointer-events:auto}
    .kco-msg-panel{position:fixed;right:0;bottom:0;top:0;width:420px;max-width:100vw;z-index:986;display:flex;flex-direction:column;background:#fff;box-shadow:-10px 0 60px rgba(0,0,0,.2);transform:translateX(100%);transition:transform .3s cubic-bezier(.4,0,.2,1)}
    .kco-msg-overlay.kco-open .kco-msg-panel{transform:translateX(0)}
    .kco-msg-head{display:flex;align-items:center;gap:.75rem;padding:.85rem 1rem;background:linear-gradient(135deg,#111827,#1f2937);color:#fff}
    .kco-msg-head-avatar{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:1.1rem;flex-shrink:0}
    .kco-msg-head-info{flex:1;min-width:0}
    .kco-msg-head-name{font-weight:800;font-size:.9rem;line-height:1.1}
    .kco-msg-head-status{font-size:.7rem;opacity:.7;display:flex;align-items:center;gap:.3rem;margin-top:2px}
    .kco-msg-head-dot{width:6px;height:6px;border-radius:50%;background:#34d399}
    .kco-msg-head-close{width:34px;height:34px;border-radius:10px;border:none;background:rgba(255,255,255,.12);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .15s}
    .kco-msg-head-close:hover{background:rgba(255,255,255,.25)}
    .kco-msg-product-strip{display:flex;align-items:center;gap:.6rem;padding:.5rem 1rem;background:#f8fafc;border-bottom:1px solid #e5e7eb}
    .kco-msg-product-strip img{width:36px;height:36px;border-radius:.4rem;object-fit:cover;border:1px solid #e5e7eb}
    .kco-msg-product-strip-title{font-size:.75rem;font-weight:700;color:#111827;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}
    .kco-msg-product-strip-price{font-size:.7rem;font-weight:800;color:#2563eb}
    .kco-msg-body{flex:1;min-height:0;overflow-y:auto;padding:1rem;display:flex;flex-direction:column;gap:.5rem;background:#fff}
    .kco-msg-bubble{max-width:85%;padding:.55rem .85rem;border-radius:1.1rem;font-size:.85rem;line-height:1.5;word-break:break-word;animation:kco-msg-fade-in .2s ease}
    @keyframes kco-msg-fade-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
    .kco-msg-bubble.user{align-self:flex-end;background:#111827;color:#fff;border-bottom-right-radius:.2rem}
    .kco-msg-bubble.agent{align-self:flex-start;background:#f3f4f6;color:#111827;border:1px solid #e5e7eb;border-bottom-left-radius:.2rem}
    .kco-msg-typing{align-self:flex-start;display:inline-flex;gap:4px;padding:.6rem .9rem;border-radius:1.1rem;border-bottom-left-radius:.2rem;background:#f3f4f6;border:1px solid #e5e7eb}
    .kco-msg-typing span{width:6px;height:6px;border-radius:50%;background:#9ca3af;animation:kco-msg-bounce 1.2s infinite}
    .kco-msg-typing span:nth-child(2){animation-delay:.15s}
    .kco-msg-typing span:nth-child(3){animation-delay:.3s}
    @keyframes kco-msg-bounce{0%,60%,100%{transform:translateY(0);opacity:.4}30%{transform:translateY(-5px);opacity:1}}
    .kco-msg-chips{display:flex;flex-wrap:wrap;gap:.4rem;padding:.5rem 1rem;background:#fff;border-top:1px solid #f1f5f9}
    .kco-msg-chip{border:1px solid #d1d5db;background:#fff;color:#374151;font-size:.72rem;font-weight:600;padding:.35rem .65rem;border-radius:999px;cursor:pointer;transition:all .15s;white-space:nowrap}
    .kco-msg-chip:hover{background:#111827;color:#fff;border-color:#111827}
    .kco-msg-inputrow{display:flex;gap:.5rem;padding:.65rem 1rem;border-top:1px solid #e5e7eb;background:#fff}
    .kco-msg-input{flex:1;border:1px solid #d1d5db;border-radius:1rem;padding:.55rem .85rem;font-size:.85rem;color:#000;background:#fff;outline:none;transition:border-color .15s}
    .kco-msg-input:focus{border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.1)}
    .kco-msg-send{flex-shrink:0;width:42px;height:42px;border:none;border-radius:50%;background:#111827;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s}
    .kco-msg-send:hover{transform:scale(1.06);background:#000}
    .kco-msg-send:disabled{opacity:.4;cursor:not-allowed;transform:none}
    .kco-msg-footer{font-size:.6rem;color:#94a3b8;text-align:center;padding:.35rem 1rem;background:#fff;border-top:1px solid #f1f5f9}
    @media(max-width:480px){.kco-msg-panel{width:100vw}}
  `;
  document.head.appendChild(style);
}

function buildMsgPanelHtml(listing, isCompany) {
  const agentName = getAgentName(listing);
  const productTitle = isCompany ? 'General Support' : (listing?.title || 'Product');
  const productPrice = isCompany ? '' : (listing?.price || '');
  const productImage = (!isCompany && listing?.images?.[0]) ? listing.images[0] : '';
  const avatarLetter = agentName.charAt(0);
  const suggestions = isCompany
    ? ['What products do you have?', 'How does shipping work?', 'What is your return policy?', 'How do I track my order?']
    : ['Tell me about this product', 'What is the price?', 'Is it available?', 'How do I purchase?'];

  return `
    <div class="kco-msg-head">
      <div class="kco-msg-head-avatar">${avatarLetter}</div>
      <div class="kco-msg-head-info">
        <div class="kco-msg-head-name">${agentName}</div>
        <div class="kco-msg-head-status"><span class="kco-msg-head-dot"></span> Online — replies instantly</div>
      </div>
      <button class="kco-msg-head-close" id="kco-msg-close" aria-label="Close"><i data-lucide="x" class="w-5 h-5"></i></button>
    </div>
    ${productImage ? `
    <div class="kco-msg-product-strip">
      <img src="${productImage}" alt="" onerror="this.style.display='none'">
      <span class="kco-msg-product-strip-title">${productTitle}</span>
      ${productPrice ? `<span class="kco-msg-product-strip-price">${productPrice}</span>` : ''}
    </div>` : ''}
    <div class="kco-msg-body" id="kco-msg-body"></div>
    <div class="kco-msg-chips" id="kco-msg-chips">
      ${suggestions.map(s => `<button class="kco-msg-chip" type="button">${s}</button>`).join('')}
    </div>
    <div class="kco-msg-inputrow">
      <input class="kco-msg-input" type="text" id="kco-msg-input" placeholder="Type your message..." maxlength="1500" aria-label="Message">
      <button class="kco-msg-send" id="kco-msg-send" aria-label="Send"><i data-lucide="send" class="w-4 h-4"></i></button>
    </div>
    <div class="kco-msg-footer">For urgent help, email support@weverseonlineshop.com</div>
  `;
}

function buildMsgSystemPrompt(listing, isCompany, agentName) {
  const locale = detectLocale();
  const lang = locale.language || 'en';
  const langName = { en: 'English', zh: 'Mandarin Chinese', es: 'Spanish', fr: 'French', de: 'German', ar: 'Arabic' }[lang] || 'English';

  const productCtx = isCompany ? '' : `\n\nPRODUCT LISTING INFORMATION:\n${buildProductContext(listing)}`;
  const companyCtx = isCompany ? `\n\nCOMPANY INFORMATION:\n${buildCompanyContext()}` : '';

  return `You are ${agentName}, a real human sales and customer care representative for ${getCompanyName()}. You are messaging a customer on the marketplace's live chat. You are NOT an AI or chatbot — you are a real person on the sales team.

RULES:
- NEVER say you are AI, a bot, an assistant, or automated
- If asked who you are, warmly say you're a real person on the sales team
- Be warm, friendly, confident, humble, respectful, and persuasive
- Use contractions, short sentences, natural language
- Never make up prices, dates, or facts
- If unsure, say you'll check with the team
- Guide toward purchase when appropriate, but never pressure
- Respond in ${langName}
- Keep messages concise and conversational
- Always protect the company's reputation
- Be emotionally intelligent — sense when customer is hesitant and address concerns
- Always make the customer feel valued and well cared for
- Gently encourage so they don't leave empty-handed${productCtx}${companyCtx}

${isCompany
  ? `Help with general marketplace questions, products, purchasing, shipping, returns, orders, and policies.`
  : `You are helping with a specific product. Answer questions about it using the listing info above. Guide toward purchase.`}`;
}

function openMsgAgent(listing, isCompany = false) {
  if (msgState.active) { closeMsgAgent(); return; }

  injectMsgStyles();

  const agentName = getAgentName(listing);
  const overlay = document.createElement('div');
  overlay.className = 'kco-msg-overlay';
  overlay.innerHTML = `<div class="kco-msg-panel">${buildMsgPanelHtml(listing, isCompany)}</div>`;
  document.body.appendChild(overlay);
  if (window.lucide) lucide.createIcons();

  const panel = overlay.querySelector('.kco-msg-panel');
  const body = overlay.querySelector('#kco-msg-body');
  const input = overlay.querySelector('#kco-msg-input');
  const sendBtn = overlay.querySelector('#kco-msg-send');
  const closeBtn = overlay.querySelector('#kco-msg-close');
  const chips = overlay.querySelector('#kco-msg-chips');

  msgState = { active: true, overlay, panel, body, input, history: [], busy: false, isCompany, listing, agentName };

  // Close
  closeBtn?.addEventListener('click', closeMsgAgent);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeMsgAgent(); });

  // Chips
  chips?.querySelectorAll('.kco-msg-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      sendMsgMessage(chip.textContent);
      chips.remove();
    });
  });

  // Send
  const doSend = () => {
    const text = input?.value?.trim();
    if (!text || msgState.busy) return;
    input.value = '';
    sendMsgMessage(text);
    chips?.remove();
  };
  sendBtn?.addEventListener('click', doSend);
  input?.addEventListener('keydown', (e) => { if (e.key === 'Enter') doSend(); });

  // Show
  requestAnimationFrame(() => overlay.classList.add('kco-open'));
  setTimeout(() => input?.focus(), 350);

  // Welcome
  const greeting = getLocalGreeting();
  const welcome = `${greeting}! I'm ${agentName} from ${getCompanyName()}. How can I help you with our marketplace today?`;
  addMsgBubble(welcome, 'agent');
  msgState.history.push({ role: 'assistant', content: welcome });
}

function addMsgBubble(text, role) {
  if (!msgState.body) return;
  const el = document.createElement('div');
  el.className = `kco-msg-bubble ${role}`;
  el.innerHTML = renderMsgText(text);
  msgState.body.appendChild(el);
  msgState.body.scrollTop = msgState.body.scrollHeight;
}

function addMsgTyping() {
  if (!msgState.body) return;
  const el = document.createElement('div');
  el.className = 'kco-msg-typing';
  el.id = 'kco-msg-typing';
  el.innerHTML = '<span></span><span></span><span></span>';
  msgState.body.appendChild(el);
  msgState.body.scrollTop = msgState.body.scrollHeight;
  return el;
}

function removeMsgTyping() {
  document.getElementById('kco-msg-typing')?.remove();
}

function renderMsgText(text) {
  return String(text || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
}

async function sendMsgMessage(text) {
  if (!msgState.active || msgState.busy || !text) return;

  addMsgBubble(text, 'user');
  msgState.history.push({ role: 'user', content: text });

  msgState.busy = true;
  addMsgTyping();

  const systemPrompt = buildMsgSystemPrompt(msgState.listing, msgState.isCompany, msgState.agentName);

  try {
    const reply = await getAIReply(msgState.history, systemPrompt, {
      listing: msgState.listing,
      mode: msgState.isCompany ? 'company' : 'agent',
    });
    removeMsgTyping();
    addMsgBubble(reply, 'agent');
    msgState.history.push({ role: 'assistant', content: reply });
  } catch {
    removeMsgTyping();
    const fallback = "I'm sorry, I'm having a little trouble right now. Could you try again in a moment? I want to make sure I give you the best help.";
    addMsgBubble(fallback, 'agent');
  }

  msgState.busy = false;
  msgState.input?.focus();
}

function closeMsgAgent() {
  msgState.active = false;
  msgState.overlay?.classList.remove('kco-open');
  setTimeout(() => msgState.overlay?.remove(), 300);
  msgState = { active: false, overlay: null, panel: null, body: null, input: null, history: [], busy: false, isCompany: false, listing: null, agentName: '' };
}

// ═══════════════════════════════════════════════════════════════════
//  PUBLIC API — Button HTML for Cards & Detail Pages
// ═══════════════════════════════════════════════════════════════════

/**
 * Returns the agent buttons. Only company contact options are shown — "Call
 * Company" and "Message Company" — for every listing, whether it is a house,
 * car or any other product. The product-specific "Call Agent" / "Message
 * Agent" buttons have been removed.
 */
export function agentButtonsHtml(listing, opts = {}) {
  const id = listing?.property_id || listing?.id || '';
  const compact = opts.compact || false;
  const cls = compact ? 'kco-agent-btn-compact' : 'kco-agent-btn';

  if (compact) {
    return `
      <div class="kco-agent-row" data-listing-id="${id}">
        <button class="${cls} kco-agent-call-company" data-action="call-company" title="Call Company" aria-label="Call Company">
          <i data-lucide="building-2" class="w-3.5 h-3.5"></i><span>Call Us</span>
        </button>
        <button class="${cls} kco-agent-msg-company" data-action="msg-company" title="Message Company" aria-label="Message Company">
          <i data-lucide="headphones" class="w-3.5 h-3.5"></i><span>Support</span>
        </button>
      </div>`;
  }

  return `
    <div class="kco-agent-row kco-agent-row-full" data-listing-id="${id}">
      <button class="${cls} kco-agent-call-company" data-action="call-company" title="Call Company — Speak with company support">
        <i data-lucide="building-2" class="w-4 h-4"></i>
        <span>Call Company</span>
      </button>
      <button class="${cls} kco-agent-msg-company" data-action="msg-company" title="Message Company — Chat with company support">
        <i data-lucide="headphones" class="w-4 h-4"></i>
        <span>Message Company</span>
      </button>
    </div>`;
}

/**
 * Inject global agent styles once. Call at module init.
 */
export function injectAgentStyles() {
  if (document.getElementById('kco-agent-global-style')) return;
  const style = document.createElement('style');
  style.id = 'kco-agent-global-style';
  style.textContent = `
    .kco-agent-row{display:flex;gap:.4rem;flex-wrap:wrap}
    .kco-agent-row-full{display:grid;grid-template-columns:1fr 1fr;gap:.5rem}
    .kco-agent-btn{display:inline-flex;align-items:center;justify-content:center;gap:.4rem;padding:.55rem .75rem;border:1.5px solid;border-radius:.75rem;font-size:.72rem;font-weight:700;cursor:pointer;transition:all .2s ease;white-space:nowrap;letter-spacing:.01em}
    .kco-agent-btn:active{transform:scale(.96)}
    .kco-agent-btn-compact{display:inline-flex;align-items:center;justify-content:center;gap:.3rem;padding:.4rem .55rem;border:1.5px solid;border-radius:.6rem;font-size:.65rem;font-weight:700;cursor:pointer;transition:all .2s ease;white-space:nowrap;flex:1;min-width:0}
    .kco-agent-btn-compact:active{transform:scale(.96)}
    .kco-agent-call{background:linear-gradient(135deg,#059669,#10b981);border-color:#059669;color:#fff;box-shadow:0 2px 8px rgba(5,150,105,.25)}
    .kco-agent-call:hover{background:linear-gradient(135deg,#047857,#059669);box-shadow:0 4px 14px rgba(5,150,105,.35);transform:translateY(-1px)}
    .kco-agent-msg{background:linear-gradient(135deg,#2563eb,#3b82f6);border-color:#2563eb;color:#fff;box-shadow:0 2px 8px rgba(37,99,235,.25)}
    .kco-agent-msg:hover{background:linear-gradient(135deg,#1d4ed8,#2563eb);box-shadow:0 4px 14px rgba(37,99,235,.35);transform:translateY(-1px)}
    .kco-agent-call-company{background:linear-gradient(135deg,#7c3aed,#8b5cf6);border-color:#7c3aed;color:#fff;box-shadow:0 2px 8px rgba(124,58,237,.25)}
    .kco-agent-call-company:hover{background:linear-gradient(135deg,#6d28d9,#7c3aed);box-shadow:0 4px 14px rgba(124,58,237,.35);transform:translateY(-1px)}
    .kco-agent-msg-company{background:linear-gradient(135deg,#e11d48,#f43f5e);border-color:#e11d48;color:#fff;box-shadow:0 2px 8px rgba(225,29,72,.25)}
    .kco-agent-msg-company:hover{background:linear-gradient(135deg,#be123c,#e11d48);box-shadow:0 4px 14px rgba(225,29,72,.35);transform:translateY(-1px)}
    .kco-agent-btn span{line-height:1}
    .kco-agent-btn-compact span{line-height:1;font-size:.6rem}
  `;
  document.head.appendChild(style);
}

/**
 * Wire up agent button clicks on a container. Uses event delegation.
 * Call once per page/card and it handles all buttons within.
 */
export function wireAgentButtons(container, listingLookup) {
  if (!container || container._agentWired) return;
  container._agentWired = true;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    e.stopPropagation();
    e.preventDefault();

    const action = btn.dataset.action;
    const row = btn.closest('.kco-agent-row');
    const listingId = row?.dataset.listingId || '';

    const listing = typeof listingLookup === 'function'
      ? listingLookup(listingId)
      : (window.__kcoAgentListingLookup?.(listingId) || null);

    switch (action) {
      case 'call-agent': startCallAgent(listing, false); break;
      case 'msg-agent': openMsgAgent(listing, false); break;
      case 'call-company': startCallAgent(null, true); break;
      case 'msg-company': openMsgAgent(null, true); break;
    }
  });
}

// Global listing lookup fallback
window.__kcoAgentListingLookup = window.__kcoAgentListingLookup || null;

// Auto-init styles
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectAgentStyles);
} else {
  injectAgentStyles();
}

// Warm up the TTS voice list early so a call can start instantly.
if (synth) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      refreshVoiceCache();
      synth.addEventListener('voiceschanged', refreshVoiceCache);
    });
  } else {
    refreshVoiceCache();
    synth.addEventListener('voiceschanged', refreshVoiceCache);
  }
}

// Expose for external access
window.__kcoCallAgent = startCallAgent;
window.__kcoMsgAgent = openMsgAgent;
window.__kcoCallCompany = () => startCallAgent(null, true);
window.__kcoMsgCompany = () => openMsgAgent(null, true);
