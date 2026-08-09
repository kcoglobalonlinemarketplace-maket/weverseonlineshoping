import { loadPublicLiveState } from './live-control-store.js';

const SEEN_SESSION_KEY = 'kco_live_seen_session_v1';

function injectStyles() {
  if (document.getElementById('kco-live-public-styles')) return;
  const style = document.createElement('style');
  style.id = 'kco-live-public-styles';
  style.textContent = `
    #kco-live-home-banner { animation: kcoLiveBannerIn .45s ease; }
    @keyframes kcoLiveBannerIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
    .kco-live-dot-pulse { animation: kcoLiveDotPulse 1.6s ease-in-out infinite; }
    @keyframes kcoLiveDotPulse { 0%,100% { opacity: 1; box-shadow: 0 0 0 0 rgba(239,68,68,.4); } 60% { opacity: .7; box-shadow: 0 0 0 8px rgba(239,68,68,0); } }
  `;
  document.head.appendChild(style);
}

function ensureBadge() {
  let badge = document.getElementById('kco-live-home-badge');
  if (!badge) {
    badge = document.createElement('div');
    badge.id = 'kco-live-home-badge';
    badge.className = 'fixed top-24 right-4 z-[70] hidden items-center gap-2 rounded-full bg-red-500 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-lg shadow-red-500/30';
    badge.innerHTML = '<span class="kco-live-dot-pulse h-2.5 w-2.5 rounded-full bg-white"></span><span id="kco-live-home-badge-text">LIVE NOW</span>';
    document.body.appendChild(badge);
  }
  return badge;
}

function ensureBanner() {
  let banner = document.getElementById('kco-live-home-banner');
  if (!banner) {
    banner = document.createElement('section');
    banner.id = 'kco-live-home-banner';
    banner.className = 'hidden relative z-[20] mx-auto mt-[156px] sm:mt-[136px] w-[calc(100%-1.5rem)] max-w-[1600px] overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-r from-[#1b1020] via-[#111827] to-[#0b1324] p-4 shadow-2xl shadow-red-500/10 sm:w-[calc(100%-2.5rem)] sm:p-5';
    const header = document.querySelector('header');
    if (header?.parentNode) header.parentNode.insertBefore(banner, header.nextSibling);
    else document.body.prepend(banner);
  }
  return banner;
}

function maybeNotify(state) {
  if (!state.isLive || !state.notifyVisitors || !state.sessionId) return;
  const seen = localStorage.getItem(SEEN_SESSION_KEY);
  if (seen === state.sessionId) return;
  localStorage.setItem(SEEN_SESSION_KEY, state.sessionId);
  if (Notification.permission === 'granted') {
    new Notification(state.badgeText || 'LIVE NOW', {
      body: state.headline || 'A live stream just started.',
      tag: state.sessionId,
    });
  }
}

function renderState(state) {
  injectStyles();
  const badge = ensureBadge();
  const banner = ensureBanner();
  if (!state.isLive) {
    badge.classList.add('hidden');
    banner.classList.add('hidden');
    return;
  }

  badge.classList.remove('hidden');
  badge.classList.add('flex');
  const badgeText = badge.querySelector('#kco-live-home-badge-text');
  if (badgeText) badgeText.textContent = state.badgeText || 'LIVE NOW';

  banner.classList.remove('hidden');
  banner.innerHTML = `
    <div class="grid gap-4 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
      <div>
        <div class="mb-3 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-red-300">
          <span class="kco-live-dot-pulse h-2.5 w-2.5 rounded-full bg-red-400"></span>
          <span>${state.badgeText || 'LIVE NOW'}</span>
        </div>
        <h2 class="text-xl font-black text-white sm:text-2xl">${state.headline || 'We are live right now'}</h2>
        ${state.description ? `<p class="mt-2 max-w-2xl text-sm leading-relaxed text-gray-300">${state.description}</p>` : ''}
        <div class="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-300">
          ${(state.platformLabels || []).map(label => `<span class="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-semibold text-blue-300">${label}</span>`).join('')}
          <span class="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-300">Viewers: ${state.viewerCount || 0}</span>
          <span class="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-semibold text-amber-300">Comments: ${state.commentCount || 0}</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-semibold text-gray-200">Status: ${state.streamStatus || 'live'}</span>
        </div>
        <div class="mt-5 flex flex-wrap gap-3">
          ${state.embedUrl ? `<a href="${state.embedUrl}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-400">Watch Live</a>` : ''}
          ${Notification.permission === 'default' ? `<button id="kco-enable-live-notifs" class="rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-2.5 text-sm font-bold text-blue-300 transition hover:bg-blue-500/20">Enable Live Alerts</button>` : ''}
        </div>
      </div>
      ${state.embedUrl ? `<div class="overflow-hidden rounded-2xl border border-blue-500/15 bg-black/40 p-2"><iframe src="${state.embedUrl}" title="Live Stream" class="h-[240px] w-full rounded-xl bg-black sm:h-[320px]" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" allowfullscreen loading="lazy"></iframe></div>` : ''}
    </div>`;

  banner.querySelector('#kco-enable-live-notifs')?.addEventListener('click', async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') maybeNotify(state);
  });

  maybeNotify(state);
}

async function boot() {
  const state = await loadPublicLiveState();
  renderState(state);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
