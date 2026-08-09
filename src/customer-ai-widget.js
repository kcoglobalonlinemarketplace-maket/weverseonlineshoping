// ─── Weverse Online Shop Contact Widget ──────────────────────
// Premium messaging-style AI chat widget. Text + voice + image + voice notes.
// Multilingual, proactive, separate from Admin AI.
// Fully functional — connects to the ai-customer-assistant edge function.
import { supabase } from './supabase-client.js';
import { getLanguage, selectBestVoice, getVoiceForLanguage } from './localization.js';

const SUPABASE_BASE_URL = (import.meta.env.VITE_SUPABASE_URL || 'https://wttnvwpoqmbxryivcerf.supabase.co').replace(/\/$/, '');
const AI_FUNCTION_URL = `${SUPABASE_BASE_URL}/functions/v1/ai-customer-assistant`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const SHOULD_DISABLE_WIDGET =
  window.self !== window.top ||
  /\/admin(\-ai)?\.html$/i.test(window.location.pathname);

let state = {
  open: false,
  history: [],
  sending: false,
  voiceEnabled: localStorage.getItem('kco_voice') === '1',
  voiceAccent: localStorage.getItem('kco_voice_accent') || 'US', // US or UK
  welcomed: false,
  proactiveShown: {},
  sessionId: null,
  attachments: [],   // { type:'image'|'audio', dataUrl, name, duration }
  recording: false,
  mediaRecorder: null,
  mediaChunks: [],
  recordTimer: null,
  recordSeconds: 0,
};

// ── Helpers ──────────────────────────────────────────────────
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function renderMarkdown(text) {
  let html = escapeHtml(text);
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/^\- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`);
  html = html.replace(/\n\n/g, '</p><p>');
  html = html.replace(/\n/g, '<br>');
  html = `<p>${html}</p>`;
  html = html.replace(/<ul><br>/g, '<ul>').replace(/<br><\/ul>/g, '</ul>');
  return html;
}

function getCurrentLang() {
  return getLanguage() || localStorage.getItem('kco_language') || 'en';
}

function getPageContext() {
  const path = window.location.pathname;
  if (path.includes('checkout')) return 'checkout';
  if (path.includes('payment')) return 'payment';
  if (path.includes('auth')) return 'sign-in';
  if (path.includes('account')) return 'account';
  if (path.includes('details')) return 'product-details';
  if (path.includes('contact')) return 'contact';
  if (path.includes('help')) return 'help';
  if (path.includes('about')) return 'about';
  return 'home';
}

// ── Get cart items from page context ──────────────────────
function getCartItems() {
  try {
    const cart = JSON.parse(localStorage.getItem('kco_cart') || '[]');
    return cart.map((item) => ({ title: item.title || item.name, price: item.price, quantity: item.quantity || 1 }));
  } catch { return []; }
}
function speak(text) {
  if (!state.voiceEnabled) return;
  if (!('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text.replace(/[*#`]/g, ''));
    const lang = getCurrentLang();
    const voiceConfig = getVoiceForLanguage(lang);

    // Use US or UK accent for English based on user preference
    if (lang === 'en') {
      utter.lang = state.voiceAccent === 'UK' ? 'en-GB' : 'en-US';
    } else {
      utter.lang = voiceConfig.lang;
    }

    utter.rate = voiceConfig.rate;
    utter.pitch = voiceConfig.pitch;

    const voice = selectBestVoice(lang === 'en' ? (state.voiceAccent === 'UK' ? 'en-GB' : 'en-US').slice(0, 2) : lang);
    if (voice) utter.voice = voice;

    window.speechSynthesis.speak(utter);
  } catch (e) { /* noop */ }
}

function stopSpeaking() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

// ── Widget rendering ──────────────────────────────────────────
function injectStyles() {
  if (document.getElementById('kco-ai-styles')) return;
  const style = document.createElement('style');
  style.id = 'kco-ai-styles';
  style.textContent = `
    @keyframes kcoAiSlideUp { from { opacity:0; transform:translateY(20px) scale(0.97); } to { opacity:1; transform:translateY(0) scale(1); } }
    @keyframes kcoAiFadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes kcoAiTyping { 0%,60%,100% { opacity:0.3; transform:translateY(0); } 30% { opacity:1; transform:translateY(-4px); } }
    @keyframes kcoOnlinePulse { 0% { box-shadow:0 0 0 0 rgba(34,197,94,0.5); } 70% { box-shadow:0 0 0 6px rgba(34,197,94,0); } 100% { box-shadow:0 0 0 0 rgba(34,197,94,0); } }
    @keyframes kcoRecPulse { 0%,100% { box-shadow:0 0 0 0 rgba(239,68,68,0.55); } 50% { box-shadow:0 0 0 8px rgba(239,68,68,0); } }
    @keyframes kcoFabRing { 0% { transform:scale(1); opacity:.6; } 100% { transform:scale(1.9); opacity:0; } }
    .kco-ai-msg-in { animation: kcoAiSlideUp 0.3s ease; }
    .kco-ai-fade { animation: kcoAiFadeIn 0.3s ease; }
    .kco-ai-typing-dot { animation: kcoAiTyping 1.2s infinite; }
    .kco-ai-typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .kco-ai-typing-dot:nth-child(3) { animation-delay: 0.4s; }
    #kco-ai-panel { transition: opacity 0.3s ease, transform 0.3s ease; }
    #kco-ai-panel.hidden-panel { opacity:0; transform:translateY(24px) scale(0.97); pointer-events:none; }
    .kco-ai-quick-btn { transition: all 0.2s ease; }
    .kco-ai-quick-btn:hover { transform: translateY(-1px); }
    .kco-ai-send-btn:disabled { opacity:0.5; }
    .kco-online-dot { animation: kcoOnlinePulse 2s infinite; }
    .kco-rec-pulse { animation: kcoRecPulse 1.2s infinite; }
    .kco-fab-ring { animation: kcoFabRing 2.2s cubic-bezier(0,0,.2,1) infinite; }
    .kco-attach-chip { transition: all .2s ease; }
    .kco-attach-chip:hover { border-color: rgba(249,115,22,.5); }
    #kco-ai-input::-webkit-scrollbar{display:none}
    #kco-ai-input{-ms-overflow-style:none;scrollbar-width:none}
  `;
  document.head.appendChild(style);
}

// ── Professional support avatar SVG (headset icon) ─────────────
const SUPPORT_AVATAR_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C7.58 2 4 5.58 4 10v4a3 3 0 0 0 3 3h1v-6H6v-1a6 6 0 0 1 12 0v1h-2v6h1a3 3 0 0 0 3-3v-4c0-4.42-3.58-8-8-8z" fill="#60a5fa"/><path d="M12 2C7.58 2 4 5.58 4 10v4a3 3 0 0 0 3 3h1v-6H6v-1a6 6 0 0 1 12 0v1h-2v6h1a3 3 0 0 0 3-3v-4c0-4.42-3.58-8-8-8z" stroke="#3b82f6" stroke-width="0.5"/></svg>`;

// ── Professional send button SVG (paper plane) ────────────────
const SEND_ICON_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a1 1 0 0 0-1.39 1.21L4 12l-1.99 7.19a1 1 0 0 0 1.39 1.21z" fill="white"/></svg>`;

// ── Central verified badge (identical design/color to homepage) ─
const VERIFIED_BADGE_SVG = `<svg viewBox="0 0 24 24" class="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 inline-block align-middle" aria-label="Verified" role="img"><circle cx="12" cy="12" r="11" fill="#1877F2"/><path d="M10.8 15.6 7.4 12.2l1.5-1.5 1.9 1.9 3.9-3.9 1.5 1.5-5.4 5.4z" fill="#fff"/></svg>`;

function buildWidget() {
  injectStyles();

  // ── FAB — small, circular, never blocks the site ──
  const fab = document.createElement('button');
  fab.id = 'kco-ai-fab';
  fab.setAttribute('aria-label', 'Chat with Weverse support');
  fab.className = 'fixed bottom-5 right-5 z-[60] w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-105 active:scale-95';
  fab.style.background = 'linear-gradient(135deg,#3b82f6 0%,#2563eb 100%)';
  fab.style.border = '1px solid rgba(255,255,255,0.18)';
  fab.style.boxShadow = '0 8px 24px rgba(59,130,246,0.4)';

  fab.innerHTML = `
    <span class="kco-fab-ring absolute inset-0 rounded-full pointer-events-none" style="background:radial-gradient(circle,rgba(59,130,246,.35),transparent 70%)"></span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="relative">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="kco-online-dot absolute top-1 right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#1e293b]"></span>
  `;
  fab.onclick = () => togglePanel(true);
  document.body.appendChild(fab);

  // ── Panel — app-like bottom sheet on mobile, floating card on desktop ──
  const panel = document.createElement('div');
  panel.id = 'kco-ai-panel';
  panel.className = 'hidden-panel fixed z-[60] flex flex-col overflow-hidden w-full sm:w-[400px] h-[92dvh] sm:h-[640px] sm:max-h-[calc(100dvh-120px)] bottom-0 sm:bottom-[90px] right-0 sm:right-5 rounded-t-2xl sm:rounded-2xl bg-slate-900/97 border-t sm:border border-blue-500/25 shadow-2xl';
  panel.style.backdropFilter = 'blur(20px)';
  panel.innerHTML = `
    <!-- Header — messaging app style -->
    <div class="flex items-center justify-between px-3.5 py-3 border-b border-white/10 shrink-0" style="background:linear-gradient(135deg,#1e1e2e 0%,#1a1a2e 50%,#16213e 100%)">
      <div class="flex items-center gap-2.5 min-w-0">
        <div class="relative w-9 h-9 rounded-full flex items-center justify-center shrink-0" style="background:rgba(59,130,246,0.15)">
          ${SUPPORT_AVATAR_SVG}
        </div>
        <div class="min-w-0">
          <p class="text-sm font-bold text-white leading-tight tracking-wide flex items-center gap-1 truncate">Weverse Support ${VERIFIED_BADGE_SVG}</p>
          <p class="text-[10px] leading-tight flex items-center gap-1.5 mt-0.5">
            <span class="w-2 h-2 bg-emerald-400 rounded-full inline-block kco-online-dot"></span>
            <span class="text-emerald-400 font-medium">Online \u00B7 AI Assistant</span>
          </p>
        </div>
      </div>
      <div class="flex items-center gap-0.5 shrink-0">
        <button id="kco-ai-voice-toggle" class="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-blue-100 transition" title="Toggle voice replies" aria-label="Toggle voice">
          <i data-lucide="volume-2" class="w-4 h-4"></i>
        </button>
        <button id="kco-ai-voice-accent" class="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-blue-100 transition text-[10px] font-bold" title="Switch voice accent" aria-label="Switch voice accent">
          ${state.voiceAccent}
        </button>
        <button id="kco-ai-clear" class="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-blue-100 transition" title="Clear conversation" aria-label="Clear conversation">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
        <button id="kco-ai-minimize" class="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-blue-100 transition" title="Minimize" aria-label="Minimize">
          <i data-lucide="minus" class="w-4 h-4"></i>
        </button>
        <button id="kco-ai-close" class="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-blue-100 transition" title="Close" aria-label="Close">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>
    </div>

    <!-- Recording banner -->
    <div id="kco-ai-recording" class="hidden shrink-0 flex items-center justify-center gap-2 px-4 py-1.5 bg-red-500/10 border-b border-red-500/20">
      <span class="w-2.5 h-2.5 rounded-full bg-red-500 kco-rec-pulse"></span>
      <span class="text-[11px] font-semibold text-red-300">Recording voice note...</span>
      <span id="kco-ai-rec-timer" class="text-[11px] font-mono text-red-200">0:00</span>
      <button id="kco-ai-rec-cancel" class="ml-1 text-[10px] font-bold uppercase tracking-wide text-gray-400 hover:text-white transition">Cancel</button>
    </div>

    <!-- Messages -->
    <div id="kco-ai-messages" class="flex-1 overflow-y-auto px-3.5 py-3 space-y-3 scroll-smooth"></div>

    <!-- Quick actions -->
    <div id="kco-ai-quick" class="px-3 pb-2 flex gap-2 overflow-x-auto scrollbar-none shrink-0">
      <button class="kco-ai-quick-btn shrink-0 text-[11px] px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20" data-q="Help me find a product">Find products</button>
      <button class="kco-ai-quick-btn shrink-0 text-[11px] px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20" data-q="How do I track my order?">Track order</button>
      <button class="kco-ai-quick-btn shrink-0 text-[11px] px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20" data-q="What payment methods are available?">Payments</button>
      <button class="kco-ai-quick-btn shrink-0 text-[11px] px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20" data-q="Explain shipping and delivery">Shipping</button>
      <button class="kco-ai-quick-btn shrink-0 text-[11px] px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20" data-q="How do returns and refunds work?">Returns</button>
    </div>

    <!-- Attachment previews -->
    <div id="kco-ai-attachments" class="hidden px-3 pb-2 flex gap-2 overflow-x-auto scrollbar-none shrink-0"></div>

    <!-- Input — messaging app style -->
    <div class="px-3 py-2.5 border-t border-blue-500/10 bg-slate-900/95 shrink-0">
      <div class="flex items-end gap-1.5">
        <button id="kco-ai-attach" class="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-300 hover:bg-white/5 transition shrink-0" title="Attach image" aria-label="Attach image">
          <i data-lucide="image-plus" class="w-5 h-5"></i>
        </button>
        <button id="kco-ai-mic" class="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-rose-300 hover:bg-rose-500/10 transition shrink-0" title="Record voice note" aria-label="Record voice note">
          <i data-lucide="mic" class="w-5 h-5"></i>
        </button>
        <input type="file" id="kco-ai-file" accept="image/*" class="hidden">
        <textarea id="kco-ai-input" rows="1" placeholder="Type a message..." class="flex-1 bg-slate-800/80 text-sm text-gray-200 placeholder-gray-500 rounded-2xl px-4 py-2.5 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500/40 border border-blue-500/15 max-h-24"></textarea>
        <button id="kco-ai-send" class="kco-ai-send-btn w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 hover:scale-110 transition-transform" style="background:linear-gradient(135deg,#3b82f6 0%,#2563eb 100%);box-shadow:0 2px 8px rgba(59,130,246,0.3)" aria-label="Send message">
          ${SEND_ICON_SVG}
        </button>
      </div>
      <p class="text-[10px] text-gray-600 mt-1.5 text-center">Weverse AI Assistant \u00B7 AI may make mistakes, verify important info.</p>
    </div>
  `;
  document.body.appendChild(panel);

  // Wire up
  document.getElementById('kco-ai-close').onclick = () => togglePanel(false);
  document.getElementById('kco-ai-minimize').onclick = () => togglePanel(false);
  document.getElementById('kco-ai-clear').onclick = clearChat;
  document.getElementById('kco-ai-voice-toggle').onclick = toggleVoice;
  document.getElementById('kco-ai-voice-accent').onclick = toggleVoiceAccent;
  document.getElementById('kco-ai-send').onclick = sendMessage;
  document.getElementById('kco-ai-attach').onclick = () => document.getElementById('kco-ai-file').click();
  document.getElementById('kco-ai-file').onchange = pickImage;
  document.getElementById('kco-ai-mic').onclick = toggleVoiceNote;
  document.getElementById('kco-ai-rec-cancel').onclick = cancelVoiceNote;

  const input = document.getElementById('kco-ai-input');
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } });
  input.addEventListener('input', () => { input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 96) + 'px'; });
  document.querySelectorAll('.kco-ai-quick-btn').forEach(btn => {
    btn.onclick = () => { input.value = btn.dataset.q; sendMessage(); };
  });
  updateVoiceIcon();
  if (window.lucide) lucide.createIcons();
}

function togglePanel(force) {
  const panel = document.getElementById('kco-ai-panel');
  const fab = document.getElementById('kco-ai-fab');
  state.open = force !== undefined ? force : panel.classList.contains('hidden-panel');
  if (state.open) {
    panel.classList.remove('hidden-panel');
    fab.style.display = 'none';
    if (window.innerWidth < 640) document.body.style.overflow = 'hidden';
    if (!state.welcomed) { renderWelcome(); state.welcomed = true; }
    setTimeout(() => document.getElementById('kco-ai-input')?.focus(), 300);
  } else {
    panel.classList.add('hidden-panel');
    fab.style.display = 'flex';
    stopSpeaking();
    stopVoiceNote();
    document.body.style.overflow = '';
  }
}

function toggleVoice() {
  state.voiceEnabled = !state.voiceEnabled;
  localStorage.setItem('kco_voice', state.voiceEnabled ? '1' : '0');
  if (!state.voiceEnabled) stopSpeaking();
  updateVoiceIcon();
  if (state.voiceEnabled) speak("Voice assistance is now on.");
}

function toggleVoiceAccent() {
  state.voiceAccent = state.voiceAccent === 'US' ? 'UK' : 'US';
  localStorage.setItem('kco_voice_accent', state.voiceAccent);
  const btn = document.getElementById('kco-ai-voice-accent');
  if (btn) btn.textContent = state.voiceAccent;
  const msg = state.voiceAccent === 'UK'
    ? "Voice accent switched to British English."
    : "Voice accent switched to American English.";
  speak(msg);
}

function updateVoiceIcon() {
  const btn = document.getElementById('kco-ai-voice-toggle');
  if (!btn) return;
  const icon = state.voiceEnabled ? 'volume-2' : 'volume-x';
  btn.title = state.voiceEnabled ? 'Voice is ON — click to mute' : 'Voice is OFF — click to enable';
  btn.innerHTML = `<i data-lucide="${icon}" class="w-4 h-4"></i>`;
  if (window.lucide) lucide.createIcons();
}

// ── Attachments (images + voice notes) ─────────────────────────
function formatDuration(sec) {
  const m = Math.floor(sec / 60);
  const s = String(Math.floor(sec % 60)).padStart(2, '0');
  return `${m}:${s}`;
}

function renderAttachments() {
  const box = document.getElementById('kco-ai-attachments');
  if (!box) return;
  box.innerHTML = state.attachments.map((att, i) => {
    if (att.type === 'image') {
      return `<div class="kco-attach-chip relative shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-blue-500/30 bg-slate-800">
        <img src="${att.dataUrl}" class="w-full h-full object-cover" alt="Attachment">
        <button data-rm="${i}" class="absolute top-0.5 right-0.5 w-5 h-5 rounded-full bg-black/70 text-white text-[10px] flex items-center justify-center hover:bg-red-600 transition" aria-label="Remove image">\u2715</button>
      </div>`;
    }
    return `<div class="kco-attach-chip relative shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg border border-rose-500/30 bg-rose-500/10">
      <i data-lucide="mic" class="w-4 h-4 text-rose-300"></i>
      <span class="text-xs font-semibold text-rose-200 whitespace-nowrap">${formatDuration(att.duration)}</span>
      <button data-rm="${i}" class="w-5 h-5 rounded-full bg-black/50 text-white text-[10px] flex items-center justify-center hover:bg-red-600 transition" aria-label="Remove voice note">\u2715</button>
    </div>`;
  }).join('');
  box.classList.toggle('hidden', state.attachments.length === 0);
  if (window.lucide) lucide.createIcons();
  box.querySelectorAll('[data-rm]').forEach(btn => {
    btn.onclick = () => { state.attachments.splice(Number(btn.dataset.rm), 1); renderAttachments(); };
  });
}

function addAttachment(att) {
  if (state.attachments.length >= 4) { showChatError('You can attach up to 4 items per message.'); return; }
  state.attachments.push(att);
  renderAttachments();
}

function downscaleImage(file, maxDim = 900, quality = 0.72) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = () => resolve(reader.result);
      img.src = reader.result;
    };
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}

function pickImage(e) {
  const file = e.target.files && e.target.files[0];
  e.target.value = '';
  if (!file) return;
  if (!/^image\//.test(file.type)) { showChatError('Please choose an image file.'); return; }
  downscaleImage(file).then((dataUrl) => {
    if (dataUrl) addAttachment({ type: 'image', dataUrl, name: file.name });
  });
}

// ── Voice notes (MediaRecorder) ────────────────────────────────
function setMicButton(recording) {
  const mic = document.getElementById('kco-ai-mic');
  const rec = document.getElementById('kco-ai-recording');
  if (!mic) return;
  mic.innerHTML = `<i data-lucide="${recording ? 'square' : 'mic'}" class="w-5 h-5 ${recording ? 'text-rose-400' : ''}"></i>`;
  mic.title = recording ? 'Stop recording' : 'Record voice note';
  mic.style.color = recording ? '#fb7185' : '';
  mic.style.background = recording ? 'rgba(244,63,94,0.15)' : '';
  if (rec) rec.classList.toggle('hidden', !recording);
  if (window.lucide) lucide.createIcons();
}

function toggleVoiceNote() {
  if (state.recording) { stopVoiceNote(); return; }
  startVoiceNote();
}

async function startVoiceNote() {
  if (!navigator.mediaDevices || !window.MediaRecorder) { showChatError('Voice notes are not supported on this browser.'); return; }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.mediaChunks = [];
    state.recordSeconds = 0;
    const mime = MediaRecorder.isTypeSupported('audio/webm;codecs=opus') ? 'audio/webm;codecs=opus' : 'audio/webm';
    state.mediaRecorder = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
    state.mediaRecorder.ondataavailable = (ev) => { if (ev.data.size > 0) state.mediaChunks.push(ev.data); };
    state.mediaRecorder.onstop = () => {
      const blob = new Blob(state.mediaChunks, { type: state.mediaRecorder.mimeType || 'audio/webm' });
      stream.getTracks().forEach(t => t.stop());
      const reader = new FileReader();
      reader.onloadend = () => addAttachment({ type: 'audio', dataUrl: reader.result, duration: state.recordSeconds });
      reader.readAsDataURL(blob);
    };
    state.recording = true;
    setMicButton(true);
    const timerEl = document.getElementById('kco-ai-rec-timer');
    state.recordTimer = setInterval(() => {
      state.recordSeconds += 1;
      if (state.recordSeconds >= 60) { stopVoiceNote(); return; }
      if (timerEl) timerEl.textContent = formatDuration(state.recordSeconds);
    }, 1000);
  } catch { showChatError('Microphone access was denied.'); }
}

function stopVoiceNote() {
  if (!state.recording || !state.mediaRecorder) return;
  try { state.mediaRecorder.stop(); } catch { /* noop */ }
  clearInterval(state.recordTimer);
  state.recordTimer = null;
  state.recording = false;
  setMicButton(false);
}

function cancelVoiceNote() {
  clearInterval(state.recordTimer);
  state.recordTimer = null;
  state.mediaChunks = [];
  if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
    try { state.mediaRecorder.onstop = null; state.mediaRecorder.stop(); } catch { /* noop */ }
    if (state.mediaRecorder.stream) state.mediaRecorder.stream.getTracks().forEach(t => t.stop());
  }
  state.recording = false;
  state.mediaRecorder = null;
  setMicButton(false);
}

function clearChat() {
  const container = document.getElementById('kco-ai-messages');
  if (container) container.innerHTML = '';
  state.history = [];
  state.attachments = [];
  renderAttachments();
  stopVoiceNote();
  renderWelcome();
  showChatToast('Conversation cleared');
}

function showChatToast(msg) {
  const el = document.createElement('div');
  el.className = 'fixed top-16 left-1/2 -translate-x-1/2 z-[70] bg-gray-900 border border-blue-500/30 text-white text-xs font-medium px-4 py-2 rounded-full shadow-xl kco-ai-fade';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2000);
}

function showChatError(msg) {
  const input = document.getElementById('kco-ai-input');
  if (input) { input.placeholder = msg; setTimeout(() => { if (input.placeholder === msg) input.placeholder = 'Type a message...'; }, 2600); }
}

// ── Messages ─────────────────────────────────────────────────
function renderAttachmentsHtml(attachments) {
  return (attachments || []).map((att) => {
    if (att.type === 'image') {
      return `<img src="${att.dataUrl}" class="mt-2 w-full max-h-56 rounded-xl object-cover border border-white/10" alt="Shared image">`;
    }
    if (att.type === 'audio') {
      return `<div class="mt-2 flex items-center gap-2">
        <span class="w-8 h-8 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center shrink-0"><i data-lucide="mic" class="w-4 h-4 text-rose-300"></i></span>
        <audio controls preload="metadata" src="${att.dataUrl}" class="h-9 w-44 max-w-full"></audio>
        <span class="text-[10px] text-rose-200/80 font-mono">${formatDuration(att.duration)}</span>
      </div>`;
    }
    return '';
  }).join('');
}

function renderMessage(msg, animate = true) {
  const container = document.getElementById('kco-ai-messages');
  if (!container) return;
  const isUser = msg.role === 'user';
  const wrapper = document.createElement('div');
  wrapper.className = `flex ${isUser ? 'justify-end' : 'justify-start'} ${animate ? 'kco-ai-msg-in' : ''}`;
  wrapper.innerHTML = isUser ? `
    <div class="max-w-[80%] text-white rounded-2xl rounded-tr-sm px-3.5 py-2.5 shadow-lg" style="background:linear-gradient(135deg,#3b82f6 0%,#2563eb 100%);box-shadow:0 2px 8px rgba(59,130,246,0.25)">
      <p class="text-sm leading-relaxed whitespace-pre-wrap break-words">${escapeHtml(msg.content)}</p>
      ${renderAttachmentsHtml(msg.attachments)}
    </div>
  ` : `
    <div class="max-w-[88%] flex gap-2">
      <div class="w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-md mt-0.5" style="background:rgba(59,130,246,0.15)">
        ${SUPPORT_AVATAR_SVG}
      </div>
      <div class="bg-slate-800/80 border border-white/10 rounded-2xl rounded-tl-sm px-3.5 py-2.5">
        <div class="text-sm text-gray-200 leading-relaxed">${renderMarkdown(msg.content)}</div>
      </div>
    </div>
  `;
  container.appendChild(wrapper);
  if (window.lucide) lucide.createIcons();
  scrollToBottom();
  if (!isUser) speak(msg.content);
}

function renderWelcome() {
  const lang = getCurrentLang();
  const welcomes = {
    en: "Welcome to Weverse Online Shop!\n\nI'm here to help you with products, orders, payments, shipping, returns, and any questions you may have. You can also send photos or voice notes.\n\nHow can I help you today?",
    es: "¡Bienvenido a Weverse Online Shop!\n\nEstoy aquí para ayudarte con productos, pedidos, pagos, envíos, devoluciones y cualquier pregunta que tengas. También puedes enviarme fotos o notas de voz.\n\n¿Cómo puedo ayudarte hoy?",
    fr: "Bienvenue sur Weverse Online Shop !\n\nJe suis là pour vous aider avec les produits, les commandes, les paiements, la livraison, les retours et toute question que vous pourriez avoir. Vous pouvez aussi m'envoyer des photos ou des notes vocales.\n\nComment puis-je vous aider aujourd'hui ?",
    de: "Willkommen bei Weverse Online Shop!\n\nIch bin hier, um Ihnen bei Produkten, Bestellungen, Zahlungen, Versand, Rücksendungen und allen Fragen zu helfen. Sie können mir auch Fotos oder Sprachnotizen senden.\n\nWie kann ich Ihnen heute helfen?",
    ar: "مرحباً بك في Weverse Online Shop!\n\nأنا هنا لمساعدتك في المنتجات والطلبات والمدفوعات والشحن والإرجاع وأي أسئلة قد تكون لديك. يمكنك أيضاً إرسال الصور أو الملاحظات الصوتية.\n\nكيف يمكنني مساعدتك اليوم؟",
    pt: "Bem-vindo à Weverse Online Shop!\n\nEstou aqui para ajudar com produtos, pedidos, pagamentos, envios, devoluções e qualquer pergunta que você tenha. Você também pode enviar fotos ou notas de voz.\n\nComo posso ajudar você hoje?",
    ja: "Weverse Online Shopへようこそ！\n\n商品、ご注文、お支払い、配送、返品などについてご質問があればお手伝いします。写真や音声メモも送れます。\n\n本日はいかがいたしましたか？",
    zh: "欢迎来到 Weverse Online Shop！\n\n我在这里帮助您解决产品、订单、付款、运输、退货以及您可能有的任何问题。您也可以发送照片或语音留言。\n\n今天我能为您做些什么？",
    hi: "Weverse Online Shop में आपका स्वागत है!\n\nमैं आपको उत्पादों, ऑर्डर, भुगतान, शिपिंग, रिटर्न और आपके किसी भी प्रश्न में मदद करने के लिए यहाँ हूँ। आप फोटो या वॉइस नोट भी भेज सकते हैं।\n\nआज मैं आपकी कैसे मदद कर सकता हूँ?",
    ru: "Добро пожаловать в Weverse Online Shop!\n\nЯ здесь, чтобы помочь вам с товарами, заказами, оплатой, доставкой, возвратами и любыми вопросами. Вы также можете отправлять фотографии или голосовые сообщения.\n\nЧем я могу помочь вам сегодня?",
    it: "Benvenuto su Weverse Online Shop!\n\nSono qui per aiutarti con prodotti, ordini, pagamenti, spedizioni, resi e qualsiasi domanda tu possa avere. Puoi anche inviarmi foto o note vocali.\n\nCome posso aiutarti oggi?",
    nl: "Welkom bij Weverse Online Shop!\n\nIk ben hier om je te helpen met producten, bestellingen, betalingen, verzending, retouren en eventuele vragen. Je kunt ook foto's of spraaknotities sturen.\n\nHoe kan ik je vandaag helpen?",
    tr: "Weverse Online Shop'e hoş geldiniz!\n\nÜrünler, siparişler, ödemeler, kargo, iadeler ve herhangi bir sorunuzda size yardımcı olmak için buradayım. Fotoğraf veya sesli not da gönderebilirsiniz.\n\nBugün size nasıl yardımcı olabilirim?",
    ko: "Weverse Online Shop에 오신 것을 환영합니다!\n\n상품, 주문, 결제, 배송, 반품 및 궁금한 점을 도와드릴 수 있습니다. 사진이나 음성 메모도 보낼 수 있어요.\n\n오늘 어떻게 도와드릴까요?",
    id: "Selamat datang di Weverse Online Shop!\n\nSaya di sini untuk membantu Anda dengan produk, pesanan, pembayaran, pengiriman, pengembalian, dan pertanyaan apa pun. Anda juga dapat mengirim foto atau catatan suara.\n\nBagaimana saya bisa membantu Anda hari ini?",
    vi: "Chào mừng đến với Weverse Online Shop!\n\nTôi ở đây để giúp bạn với các sản phẩm, đơn hàng, thanh toán, vận chuyển, đổi trả và bất kỳ câu hỏi nào. Bạn cũng có thể gửi ảnh hoặc ghi âm.\n\nTôi có thể giúp gì cho bạn hôm nay?",
    th: "ยินดีต้อนรับสู่ Weverse Online Shop!\n\nฉันพร้อมช่วยคุณเรื่องสินค้า คำสั่งซื้อ การชำระเงิน การจัดส่ง การคืนสินค้า และคำถามใดๆ คุณสามารถส่งรูปภาพหรือข้อความเสียงได้\n\nวันนี้ฉันช่วยอะไรได้บ้าง?",
    pl: "Witamy w Weverse Online Shop!\n\nJestem tutaj, aby pomóc Ci z produktami, zamówieniami, płatnościami, wysyłką, zwrotami i wszelkimi pytaniami. Możesz też wysyłać zdjęcia lub notatki głosowe.\n\nJak mogę Ci dzisiaj pomóc?",
    uk: "Ласкаво просимо до Weverse Online Shop!\n\nЯ тут, щоб допомогти вам з товарами, замовленнями, оплатою, доставкою, поверненнями та будь-якими питаннями. Ви також можете надсилати фото або голосові повідомлення.\n\nЧим я можу допомогти вам сьогодні?",
    sv: "Välkommen till Weverse Online Shop!\n\nJag är här för att hjälpa dig med produkter, beställningar, betalningar, frakt, returer och frågor du kan ha. Du kan också skicka bilder eller röstmeddelanden.\n\nHur kan jag hjälpa dig idag?",
    el: "Καλώς ήρθατε στο Weverse Online Shop!\n\nΕίμαι εδώ για να σας βοηθήσω με προϊόντα, παραγγελίες, πληρωμές, αποστολές, επιστροφές και οποιεσδήποτε ερωτήσεις. Μπορείτε επίσης να στείλετε φωτογραφίες ή φωνητικά μηνύματα.\n\nΠώς μπορώ να σας βοηθήσω σήμερα;",
    he: "ברוכים הבאים ל-Weverse Online Shop!\n\nאני כאן כדי לעזור לך עם מוצרים, הזמנות, תשלומים, משלוחים, החזרות וכל שאלה שיש לך. ניתן גם לשלוח תמונות או הודעות קוליות.\n\nאיך אוכל לעזור לך היום?",
    sw: "Karibu kwenye Weverse Online Shop!\n\nNiko hapa kukusaidia na bidhaa, maagizo, malipo, usafirishaji, marejesho na maswali yoyote. Unaweza pia kutuma picha au ujumbe wa sauti.\n\nNaweza kukusaidia vipi leo?",
  };
  renderMessage({ role: 'assistant', content: welcomes[lang] || welcomes.en });
}

function renderTyping() {
  const container = document.getElementById('kco-ai-messages');
  if (!container) return;
  const t = document.createElement('div');
  t.id = 'kco-ai-typing';
  t.className = 'flex justify-start kco-ai-fade';
  t.innerHTML = `
    <div class="flex gap-2">
      <div class="w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-md mt-0.5" style="background:rgba(59,130,246,0.15)">
        ${SUPPORT_AVATAR_SVG}
      </div>
      <div class="bg-slate-800/80 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3.5 flex items-center gap-1.5">
        <span class="kco-ai-typing-dot w-2 h-2 rounded-full" style="background:#3b82f6"></span>
        <span class="kco-ai-typing-dot w-2 h-2 rounded-full" style="background:#3b82f6"></span>
        <span class="kco-ai-typing-dot w-2 h-2 rounded-full" style="background:#3b82f6"></span>
      </div>
    </div>`;
  container.appendChild(t);
  if (window.lucide) lucide.createIcons();
  scrollToBottom();
}

function scrollToBottom() {
  const c = document.getElementById('kco-ai-messages');
  if (c) c.scrollTop = c.scrollHeight;
}

// ── Send / receive ───────────────────────────────────────────
async function getAuthHeaders() {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token || ANON_KEY;
  return { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' };
}

async function sendMessage() {
  const input = document.getElementById('kco-ai-input');
  if (!input) return;
  const text = input.value.trim();
  const attachments = state.attachments.slice();
  if (!text && attachments.length === 0) return;
  if (state.sending) return;
  input.value = '';
  input.style.height = 'auto';
  state.attachments = [];
  renderAttachments();
  state.sending = true;
  document.getElementById('kco-ai-send').disabled = true;

  // Tell the AI what media was attached (it may ignore the payload, but
  // the message stays descriptive).
  const hasImage = attachments.some(a => a.type === 'image');
  const hasAudio = attachments.some(a => a.type === 'audio');
  const hint = [hasImage && '[Image attached]', hasAudio && '[Voice note attached]'].filter(Boolean).join(' ');
  const displayText = hint ? `${text ? text + ' ' : ''}${hint}`.trim() : text;

  const userMsg = { role: 'user', content: displayText, attachments };
  state.history.push(userMsg);
  renderMessage(userMsg);
  renderTyping();

  try {
    const headers = await getAuthHeaders();
    const res = await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        action: 'chat',
        message: displayText,
        history: state.history.slice(-20, -1).map(h => ({ role: h.role, content: h.content })),
        language: getCurrentLang(),
        page_context: getPageContext(),
        cart_items: getCartItems(),
        attachments: attachments.map(a => ({ type: a.type, dataUrl: a.dataUrl, duration: a.duration || 0 })),
      }),
    });
    const data = await res.json();
    document.getElementById('kco-ai-typing')?.remove();

    const aiMsg = { role: 'assistant', content: data.response || data.error || "I'm sorry, I didn't catch that. Could you rephrase?" };
    state.history.push(aiMsg);
    renderMessage(aiMsg);
  } catch (err) {
    document.getElementById('kco-ai-typing')?.remove();
    const errMsg = { role: 'assistant', content: "I'm having trouble connecting right now. Please try again in a moment." };
    state.history.push(errMsg);
    renderMessage(errMsg);
  } finally {
    state.sending = false;
    document.getElementById('kco-ai-send').disabled = false;
    document.getElementById('kco-ai-input')?.focus();
  }
}

// ── Proactive guidance ───────────────────────────────────────
function proactiveNudge(key, message) {
  if (state.proactiveShown[key]) return;
  state.proactiveShown[key] = true;
  if (state.open) return;

  const fab = document.getElementById('kco-ai-fab');
  if (!fab) return;

  const bubble = document.createElement('div');
  bubble.id = `kco-ai-nudge-${key}`;
  bubble.className = 'fixed bottom-[92px] right-5 z-[59] max-w-[280px] bg-slate-800 border border-blue-500/30 rounded-xl shadow-2xl px-3.5 py-2.5 kco-ai-fade';
  bubble.innerHTML = `
    <div class="flex items-start gap-2">
      <i data-lucide="message-circle" class="w-4 h-4 text-blue-400 shrink-0 mt-0.5"></i>
      <p class="text-xs text-gray-300 leading-snug flex-1">${escapeHtml(message)}</p>
    </div>
    <div class="flex gap-2 mt-2">
      <button class="text-[10px] font-semibold text-blue-400 hover:text-blue-300" onclick="document.getElementById('kco-ai-nudge-${key}').remove();window.__kcoAiOpen()">Ask Support</button>
      <button class="text-[10px] text-gray-500 hover:text-gray-400" onclick="document.getElementById('kco-ai-nudge-${key}').remove()">Dismiss</button>
    </div>`;
  document.body.appendChild(bubble);
  if (window.lucide) lucide.createIcons();
  setTimeout(() => bubble?.remove(), 10000);
}

window.__kcoAiOpen = () => togglePanel(true);

// ── Proactive context detection ──────────────────────────────
function setupProactiveGuidance() {
  const ctx = getPageContext();
  const nudges = {
    checkout: "I can help you complete your purchase. Need guidance with checkout?",
    payment: "Before you pay, I can explain your payment options. Just ask!",
    'sign-in': "Welcome back! Need help signing in or recovering your password?",
    account: "I can help you set up your account. Just ask me anything!",
    'product-details': "Have a question about this product? I'm here to help!",
  };
  if (nudges[ctx]) {
    setTimeout(() => proactiveNudge(ctx, nudges[ctx]), 4000);
  }
}

// ── Init ─────────────────────────────────────────────────────
async function init() {
  if (SHOULD_DISABLE_WIDGET) {
    return;
  }

  buildWidget();

  // Load chat history for signed-in users
  try {
    const { data: session } = await supabase.auth.getSession();
    if (session?.session?.access_token) {
      const res = await fetch(AI_FUNCTION_URL, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${session.session.access_token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'get_history' }),
      });
      const data = await res.json();
      if (data.history && data.history.length > 0) {
        state.history = data.history.map((h) => ({ role: h.role, content: h.content }));
        // Render last few messages
        const recent = state.history.slice(-6);
        for (const msg of recent) renderMessage(msg, false);
      }
    }
  } catch { /* best-effort */ }

  window.addEventListener('kco-language-changed', () => {
    if (state.open) {
      const lang = getCurrentLang();
      const acks = {
        en: "Language changed. I'll respond in your selected language from now on.",
        es: "Idioma cambiado. Responderé en tu idioma seleccionado.",
        fr: "Langue changée. Je répondrai dans votre langue sélectionnée.",
        de: "Sprache geändert. Ich werde in Ihrer gewählten Sprache antworten.",
        ar: "تم تغيير اللغة. سأرد بلغتك المختارة من الآن.",
        zh: "语言已更改。我将使用您选择的语言回复。",
        ja: "言語が変更されました。選択した言語で応答します。",
        hi: "भाषा बदल दी गई है। मैं अब से आपकी चुनी हुई भाषा में जवाब दूंगा।",
        ru: "Язык изменен. Я буду отвечать на выбранном вами языке.",
      };
      const msg = { role: 'assistant', content: acks[lang] || acks.en };
      renderMessage(msg);
    }
  });

  setupProactiveGuidance();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for proactive use
window.kcoCustomerAI = {
  nudge: proactiveNudge,
  open: () => togglePanel(true),
  close: () => togglePanel(false),
  send: (text) => { const i = document.getElementById('kco-ai-input'); if (i) { i.value = text; sendMessage(); } },
};
