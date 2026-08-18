// ═══════════════════════════════════════════════════════════════════════════
// scroll-progress.js — slim vertical progress line fixed on the right edge of
// the screen (appears on all pages, all phones).
//
//   • The filled portion shows how far down the page you are.
//   • TAP near the top → instantly back to the top (so customers scrolling
//     through long review lists can quickly return to view the product).
//   • TAP / hold anywhere else on the line → jump straight down to that spot,
//     so nobody gets stuck halfway through a long page.
// ═══════════════════════════════════════════════════════════════════════════

(() => {
  if (typeof window === 'undefined') return;
  if (document.getElementById('scroll-progress-rail')) return;

  const rail = document.createElement('div');
  rail.id = 'scroll-progress-rail';
  rail.setAttribute('role', 'scrollbar');
  rail.setAttribute('aria-label', 'Scroll progress — tap to jump to top or down the page');
  rail.innerHTML = `
    <div id="scroll-progress-fill"></div>
    <button type="button" id="scroll-progress-top" aria-label="Back to top">
      <svg viewBox="0 0 24 24" fill="none"><path d="M6 14l6-6 6 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>`;
  document.body.appendChild(rail);

  const fill = rail.querySelector('#scroll-progress-fill');
  const topBtn = rail.querySelector('#scroll-progress-top');
  let dragging = false;

  const css = `
    #scroll-progress-rail{position:fixed;top:88px;right:4px;bottom:88px;width:5px;z-index:60;touch-action:none}
    #scroll-progress-fill{position:absolute;top:0;left:0;width:100%;height:0;background:#2563eb;border-radius:999px;box-shadow:0 0 10px rgba(37,99,235,.55)}
    #scroll-progress-top{position:absolute;top:-40px;left:50%;transform:translateX(-50%);width:26px;height:26px;display:flex;align-items:center;justify-content:center;border-radius:999px;border:1px solid #e2e8f0;background:#ffffff;color:#2563eb;box-shadow:0 4px 14px rgba(2,8,30,.18);cursor:pointer;transition:transform .15s ease,color .15s ease}
    #scroll-progress-top:hover{color:#1d4ed8;transform:translateX(-50%) scale(1.08)}
    #scroll-progress-top:active{transform:translateX(-50%) scale(.94)}
    #scroll-progress-top svg{width:15px;height:15px;pointer-events:none}
    @media (max-width:640px){
      #scroll-progress-rail{top:104px;right:2px;bottom:104px;width:4px}
    }
    @media (min-width:641px){
      #scroll-progress-rail{right:6px;width:5px}
    }`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  function maxScroll() {
    return Math.max(0, (document.documentElement.scrollHeight || document.body.scrollHeight || 0) - window.innerHeight);
  }

  function paint() {
    const max = maxScroll();
    const pct = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    if (fill) fill.style.height = `${(pct * 100).toFixed(2)}%`;
    topBtn.style.opacity = window.scrollY > 300 ? '1' : '0';
    topBtn.style.pointerEvents = window.scrollY > 300 ? 'auto' : 'none';
  }

  function jumpFromClientY(clientY) {
    const rect = rail.getBoundingClientRect();
    const t = Math.min(1, Math.max(0, (clientY - rect.top) / Math.max(1, rect.height)));
    window.scrollTo({ top: t * maxScroll(), behavior: 'smooth' });
  }

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  rail.addEventListener('pointerdown', (e) => {
    if (e.target === topBtn) return;
    dragging = true;
    jumpFromClientY(e.clientY);
    rail.setPointerCapture(e.pointerId);
    e.preventDefault();
  });

  rail.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    jumpFromClientY(e.clientY);
  });

  ['pointerup', 'pointercancel'].forEach(ev => {
    rail.addEventListener(ev, () => { dragging = false; });
  });

  paint();
  window.addEventListener('scroll', paint, { passive: true });
  window.addEventListener('resize', paint, { passive: true });
})();