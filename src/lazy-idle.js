// Lazy, non-critical homepage extras.
// Loaded only after the page has fully loaded and the browser is idle, so
// the AI chat widget, live-stream mode, and special-order flow never block
// first paint or initial interactivity.
function loadAll() {
  import('./customer-ai-widget.js');
  import('./live-stream-mode.js');
  import('./special-order.js');
}

window.addEventListener('load', () => {
  if (typeof requestIdleCallback === 'function') {
    requestIdleCallback(loadAll, { timeout: 3000 });
  } else {
    setTimeout(loadAll, 3000);
  }
});
