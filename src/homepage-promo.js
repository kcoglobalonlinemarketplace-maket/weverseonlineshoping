// ═══════════════════════════════════════════════════════════════════════════
// homepage-promo.js — Home page hero Promo Banner.
//
// The owner uploads their own image or video and writes their own title,
// subtitle and button from the admin "Content Settings" panel. This module
// reads those saved fields, builds a hero carousel slide and tells app.js to
// place it first in the rotating hero banner.
//
// Nothing here is fabricated and nothing in the showroom is touched — only
// the owner's own uploads and words are shown.
// ═══════════════════════════════════════════════════════════════════════════

import { loadSiteContent, DEFAULT_SITE_CONTENT } from './site-content.js';

function buildPromoSlide(content) {
  const c = { ...DEFAULT_SITE_CONTENT, ...(content || {}) };
  if (c.promo_banner_enabled === false) return null;
  const image = (c.promo_banner_image || '').trim();
  const video = (c.promo_banner_video || '').trim();
  if (!image && !video) return null;
  const slide = {
    promoBanner: true,
    badge: (c.promo_banner_title || 'Promo Banner').trim(),
    title: (c.promo_banner_title || 'Weverse Online Shop').trim(),
    subtitle: (c.promo_banner_subtitle || '').trim(),
    buttonText: (c.promo_banner_button_text || '').trim(),
    buttonLink: (c.promo_banner_button_link || '/#showroom-directory').trim(),
  };
  if (video) {
    slide.video = video;
    if (image) slide.poster = image;
  } else if (image) {
    slide.image = image;
  }
  return slide;
}

async function pushPromoBanner() {
  let content = {};
  try { content = await loadSiteContent(); } catch { /* keep defaults */ }
  const slide = buildPromoSlide(content);
  window._promoBannerSlide = slide;
  window.dispatchEvent(new CustomEvent('promo-banner-updated', { detail: slide }));
}

function init() {
  pushPromoBanner().catch(() => {});
  window.addEventListener('site-content-updated', () => {
    pushPromoBanner().catch(() => {});
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();