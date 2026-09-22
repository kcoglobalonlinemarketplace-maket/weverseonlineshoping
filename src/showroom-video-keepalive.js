// showroom-video-keepalive.js
// Keep every showroom video playing forever: muted, looping, always
// autoplaying. Covers the ~186 pre-rendered card videos baked into
// index.html, JS-rendered cards, and the hero video-tour section — so
// a finished clip restarts, a paused clip resumes, and none ever
// plays audio. The user-controlled video-tour modal keeps its native
// controls so the owner can still pause/scrub it.
const SELECTOR = '.showroom-card video, [data-showroom-grid] video, .kco-video-section video, .kco-video-el';
const IGNORED = '#video-tour-modal video';

function isWatched(el) {
  return !!(el && el.matches && el.matches(SELECTOR) && (!IGNORED || !el.closest(IGNORED)));
}

function keepAlive(video) {
  if (!isWatched(video)) return;
  video.setAttribute('muted', '');
  video.setAttribute('loop', '');
  video.setAttribute('autoplay', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.autoplay = true;
  if (video.ended) {
    try { video.currentTime = 0; } catch { /* noop */ }
  }
  if (video.paused) {
    video.play().catch(() => {});
  }
}

function scan(root) {
  if (!root || !root.querySelectorAll) return;
  root.querySelectorAll(SELECTOR).forEach(keepAlive);
}

// If a watched video ever reports 'ended' (e.g. loop briefly failed on a
// re-rendered card), roll it back and resume playing.
document.addEventListener('ended', (e) => {
  const t = e.target;
  if (t && t.tagName === 'VIDEO' && isWatched(t)) {
    try { t.currentTime = 0; } catch { /* noop */ }
    t.play().catch(() => {});
  }
}, true);

// Cards and hero sections are re-rendered lazily after DB loads — watch for
// new videos and start them the moment they appear.
const mo = ('MutationObserver' in window) ? new MutationObserver((muts) => {
  for (const m of muts) {
    for (const node of m.addedNodes) {
      if (!node || node.nodeType !== 1) continue;
      if (node.matches && isWatched(node)) keepAlive(node);
      if (node.querySelectorAll) node.querySelectorAll(SELECTOR).forEach(keepAlive);
    }
  }
}) : null;

function init() {
  scan(document);
  if (mo && document.body) mo.observe(document.body, { childList: true, subtree: true });
  // Safety net: browser throttling or a render swap may pause a clip —
  // this always brings the showroom back to full playback.
  setInterval(() => scan(document), 2000);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();