import { SHOWROOM_LISTINGS, formatPrice, flagEmoji, findListingById, loadDBListings, getAllListings, isDBLoaded, cleanListing } from './showroom-data.js';
import { getCatalogCategory, getCatalogSample } from './catalog.js';
import { getTruckById, formatTruckPrice, TRUCK_LISTINGS } from './truck-data.js';
import { getMotorhomeById, MOTORHOME_LISTINGS } from './motorhome-data.js';
import { getCarById, CAR_LISTINGS } from './car-data.js';
import { getPhoneById, PHONE_LISTINGS } from './phone-data.js';
import { PET_LISTINGS } from './pet-data.js';
import { PRODUCT_LISTINGS } from './products-data.js';
// products-extra.js is ~636 KB — loaded LAZILY (dynamic import) so the details
// page doesn't block on it for properties/cars/etc.
import { renderCard } from './showroom-cards.js';
import { getCurrentUser, setRedirectAfterAuth } from './auth.js';
import { trackEvent } from './analytics.js';
import { supabase } from './supabase-client.js';
import { addToCart as cartAddToCart } from './cart.js';
import { generateSeedReviews } from './seed-reviews.js';

const FALLBACK_IMG = '/fallback.svg';

function safeRating(r) { return (typeof r === 'number' && !isNaN(r)) ? r.toFixed(1) : '0.0'; }
function safeImages(imgs) { return (Array.isArray(imgs) && imgs.length > 0) ? imgs : [FALLBACK_IMG]; }

// ── Professional app-style building blocks ─────────────────────
// Shared pieces used across every details page renderer so the whole
// page reads like a real global marketplace app — big, alive, truthful.
function ratingStars(rating, cls = 'w-4 h-4') {
  const r = Math.round(Number(rating) || 0);
  return [1, 2, 3, 4, 5].map(i =>
    `<i data-lucide="star" class="${cls} ${i <= r ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}"></i>`
  ).join('');
}

function sectionHeader(icon, title, tone = 'blue') {
  const tones = {
    blue: 'bg-blue-50 text-blue-600',
    amber: 'bg-amber-50 text-amber-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    violet: 'bg-violet-50 text-violet-600',
    rose: 'bg-rose-50 text-rose-600',
  };
  const c = tones[tone] || tones.blue;
  return `
    <div class="flex items-center gap-2.5 mb-4">
      <div class="shrink-0 w-10 h-10 rounded-xl ${c} flex items-center justify-center"><i data-lucide="${icon}" class="w-5 h-5"></i></div>
      <h3 class="text-lg font-black text-gray-900 tracking-tight">${title}</h3>
    </div>`;
}

function specTile(s) {
  return `
    <div class="bg-gray-50 border border-gray-100 rounded-xl p-3.5">
      <div class="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5"><i data-lucide="${s.icon}" class="w-3.5 h-3.5"></i>${s.label}</div>
      <div class="text-gray-900 font-bold text-[15px] leading-snug">${escapeHtml(s.value)}</div>
    </div>`;
}

function specsPanel(title, icon, specs, tone = 'blue') {
  if (!specs || !specs.length) return '';
  return `
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${sectionHeader(icon, title, tone)}
      ${specsGridHtml(specs)}
    </div>`;
}

function specsGridHtml(specs) {
  if (!specs || !specs.length) return '';
  return `<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">${specs.map(specTile).join('')}</div>`;
}

function featuresGrid(features) {
  if (!features || !features.length) return '';
  return `
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${sectionHeader('list-checks', 'Features & Amenities', 'emerald')}
      ${featuresListHtml(features)}
    </div>`;
}

function featuresListHtml(features) {
  if (!features || !features.length) return '';
  return `<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${features.map(f => `
          <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
            <span class="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
            <span class="text-[15px] text-gray-800 font-medium">${escapeHtml(f)}</span>
          </div>`).join('')}
      </div>`;
}

function highlightsGrid(highlights) {
  if (!highlights || !highlights.length) return '';
  return `
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${sectionHeader('star', 'Highlights', 'amber')}
      ${highlightsListHtml(highlights)}
    </div>`;
}

function highlightsListHtml(highlights) {
  if (!highlights || !highlights.length) return '';
  return `<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${highlights.map(item => `
          <div class="flex items-start gap-2.5 bg-amber-50/60 border border-amber-100 rounded-xl px-3.5 py-2.5">
            <i data-lucide="badge-check" class="w-4 h-4 text-amber-500 mt-0.5 shrink-0"></i>
            <span class="text-[15px] text-gray-800 font-medium">${escapeHtml(item)}</span>
          </div>`).join('')}
      </div>`;
}

function descriptionBlockHtml(text) {
  return `
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${sectionHeader('file-text', 'Description', 'blue')}
      <p class="text-[15px] sm:text-base text-gray-700 leading-relaxed">${escapeHtml(text || '')}</p>
    </div>`;
}

/* ── Accordion sections on the product page ────────────────────────────────
   Each section has a tap header with a ▼/▲ arrow (chevron rotates when the
   panel opens). Every section shows DIFFERENT content:
     • Product Details        → description + highlights + features
     • Specifications         → the spec grid
     • Shipping Information   → the shop's real shipping policy
     • Return & Refund Policy → the shop's real refund policy
     • Frequently Asked Questions → FAQ list with a "Show more" button that
       reveals additional questions.
*/
function accordionItem(id, icon, title, contentHtml, open = false, tone = 'blue') {
  const tones = { blue: 'bg-blue-50 text-blue-600', amber: 'bg-amber-50 text-amber-600', emerald: 'bg-emerald-50 text-emerald-600', violet: 'bg-violet-50 text-violet-600', rose: 'bg-rose-50 text-rose-600' };
  const c = tones[tone] || tones.blue;
  return `
    <div class="bg-white border border-gray-200 rounded-2xl mb-3 overflow-hidden shadow-sm">
      <button type="button" data-acc="${id}" class="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left hover:bg-gray-50 transition active:bg-gray-100">
        <span class="flex items-center gap-3 min-w-0">
          <span class="shrink-0 w-10 h-10 rounded-xl ${c} flex items-center justify-center"><i data-lucide="${icon}" class="w-5 h-5"></i></span>
          <span class="text-[15px] sm:text-base font-black text-gray-900 tracking-tight">${title}</span>
        </span>
        <span data-acc-icon="${id}" class="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${open ? 'rotate-180' : ''}">
          <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500"></i>
        </span>
      </button>
      <div data-acc-body="${id}" class="px-4 sm:px-5 pb-5 ${open ? '' : 'hidden'}">
        ${contentHtml}
      </div>
    </div>`;
}

window.toggleAccordion = (id) => {
  const body = document.querySelector(`[data-acc-body="${id}"]`);
  const icon = document.querySelector(`[data-acc-icon="${id}"]`);
  if (!body || !icon) return;
  body.classList.toggle('hidden');
  icon.classList.toggle('rotate-180');
};

function shippingInfoContent() {
  return `
    <div class="space-y-3 text-[15px] text-gray-700 leading-relaxed">
      <p class="flex items-start gap-2.5"><i data-lucide="truck" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Shipping methods.</strong> Standard delivery is <strong>free worldwide</strong> (3–7 business days). Express (2–4 business days, $25) and Priority (1–2 business days, $50) are available at checkout.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Courier partners.</strong> We ship with trusted international couriers — DHL, FedEx, UPS and EMS. Every shipment gets a tracking number.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="clock" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Processing time.</strong> Orders are processed within 1–2 business days after payment confirmation. Bank-transfer orders are processed once the receipt is verified.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="globe" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">International delivery.</strong> We ship to over 200 countries. Customs duties and import taxes may apply and are the buyer's responsibility.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="search-check" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Tracking.</strong> You'll receive a shipping confirmation email with your tracking number. You can also track orders from your account dashboard.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="badge-help" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span>Questions? <a href="/shipping-policy.html" class="text-blue-600 font-bold hover:underline">Read the full Shipping Policy</a>.</span></p>
    </div>`;
}

function refundPolicyContent() {
  return `
    <div class="space-y-3 text-[15px] text-gray-700 leading-relaxed">
      <p class="flex items-start gap-2.5"><i data-lucide="rotate-ccw" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">14-day easy returns.</strong> Items may be returned within 14 days of delivery. Refund requests must be submitted within 30 days of the order date.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="calendar-x" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Cancellation before shipment.</strong> Cancel before your order ships and a full refund is issued within 5–7 business days.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package-x" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Damaged or defective.</strong> If your item arrives damaged, contact us within 7 days with photos — we arrange a replacement or full refund, including return shipping.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package-search" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Non-delivery.</strong> If your order doesn't arrive within the estimated window plus 14 days, we investigate with the carrier and refund or resend at no cost.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="wallet" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Refund processing.</strong> Approved refunds are processed within 5–7 business days. Card refunds take 5–10 business days to appear, bank transfers 7–14, mobile money 3–5.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="circle-slash" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Non-refundable.</strong> Final-sale items, digital products, and items used or damaged by the customer are not eligible for refunds.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="badge-help" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span>Questions? <a href="/refund-policy.html" class="text-blue-600 font-bold hover:underline">Read the full Return &amp; Refund Policy</a>.</span></p>
    </div>`;
}

function faqContent() {
  const visible = [
    { q: 'How do I track my order?', a: 'Once your order ships you\'ll get a confirmation email with your tracking number. You can also track it anytime from your account dashboard under Shipping & Delivery.' },
    { q: 'Is shipping really free worldwide?', a: 'Yes. Standard shipping to any country is free on every order. Express and Priority upgrades are available at checkout if you need it sooner.' },
    { q: 'How long does delivery take?', a: 'Standard delivery takes 3–7 business days. Express takes 2–4 business days and Priority 1–2 business days. Processing adds 1–2 business days after payment is confirmed.' },
    { q: 'How do returns work?', a: 'Items can be returned within 14 days of delivery. Refund requests must be submitted within 30 days of the order date — see the Return &amp; Refund Policy section above.' },
  ];
  const extra = [
    { q: 'Is my payment secure?', a: 'Yes. All payments are processed over SSL-encrypted connections through certified payment gateways. Your payment details are never stored on our servers in plain text.' },
    { q: 'Can I cancel my order before it ships?', a: 'Absolutely. Cancel before shipment and a full refund is issued within 5–7 business days to your original payment method.' },
    { q: 'What if my item arrives damaged?', a: 'Contact us within 7 days of delivery with photos and a description. We\'ll arrange a replacement or a full refund — including return shipping costs.' },
    { q: 'How do I contact customer support?', a: 'Email us at support@weverseonlineshop.com or use the Contact page. Our team reviews every message within 48 hours.' },
    { q: 'Do you ship to my country?', a: 'We ship to over 200 countries worldwide. Customs duties and import taxes, where applicable, are the buyer\'s responsibility.' },
    { q: 'How do I request a refund?', a: 'Email support@weverseonlineshop.com with your order number, the reason, and any supporting documentation. Approved refunds are processed within 5–7 business days.' },
  ];
  const item = (f) => `
    <div class="border border-gray-100 rounded-xl overflow-hidden">
      <button type="button" data-acc="faq" class="faq-q w-full flex items-center justify-between gap-3 p-3.5 text-left hover:bg-gray-50 transition">
        <span class="text-[14px] font-bold text-gray-900">${escapeHtml(f.q)}</span>
        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300"></i>
      </button>
      <div class="faq-a hidden px-3.5 pb-3.5 text-sm text-gray-600 leading-relaxed">${escapeHtml(f.a)}</div>
    </div>`;
  return `
    <div class="space-y-2">
      ${visible.map(item).join('')}
      <div class="faq-extra hidden space-y-2">${extra.map(item).join('')}</div>
      <button type="button" id="faq-show-more" class="mt-2 w-full inline-flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-blue-600 font-bold py-2.5 rounded-xl text-sm transition">
        Show more questions <i data-lucide="chevron-down" class="w-4 h-4"></i>
      </button>
    </div>`;
}

function detailsAccordions(listing, specs, features, highlights, locationContent) {
  const productDetails = `
    <p class="text-[15px] sm:text-base text-gray-700 leading-relaxed">${escapeHtml(listing.description || '')}</p>
    ${locationContent || ''}
    ${highlightsListHtml(highlights)}
    ${featuresListHtml(features)}`;
  return `
    ${accordionItem('acc-details', 'file-text', 'Product Details', productDetails, true, 'blue')}
    ${accordionItem('acc-specs', 'settings-2', 'Specifications', specsGridHtml(specs) || '<p class="text-sm text-gray-500">No specifications available for this listing.</p>', true, 'violet')}
    ${accordionItem('acc-shipping', 'truck', 'Shipping Information', shippingInfoContent(), false, 'emerald')}
    ${accordionItem('acc-refund', 'rotate-ccw', 'Return &amp; Refund Policy', refundPolicyContent(), false, 'rose')}
    ${accordionItem('acc-faq', 'circle-help', 'Frequently Asked Questions', faqContent(), false, 'amber')}`;
}

// Wire up the accordion headers (▼/▲ toggles) and the FAQ "Show more" button.
// Uses event delegation so it works no matter which renderer created the DOM.
function setupAccordions() {
  const root = document.getElementById('details-content');
  if (!root) return;
  root.querySelectorAll('[data-acc]').forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
      const id = btn.dataset.acc;
      const body = root.querySelector(`[data-acc-body="${id}"]`);
      const icon = root.querySelector(`[data-acc-icon="${id}"]`);
      if (!body || !icon) return;
      body.classList.toggle('hidden');
      icon.classList.toggle('rotate-180');
      if (window.lucide) lucide.createIcons();
    });
  });
  root.querySelectorAll('.faq-q').forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
      const icon = btn.querySelector('i, svg');
      const ans = btn.nextElementSibling;
      if (!ans) return;
      ans.classList.toggle('hidden');
      if (icon) icon.classList.toggle('rotate-180');
    });
  });
  const showMore = root.querySelector('#faq-show-more');
  if (showMore && !showMore.dataset.bound) {
    showMore.dataset.bound = '1';
    showMore.addEventListener('click', () => {
      const extra = root.querySelector('.faq-extra');
      if (!extra) return;
      extra.classList.toggle('hidden');
      const icon = showMore.querySelector('i, svg');
      if (icon) icon.classList.toggle('rotate-180');
      showMore.innerHTML = extra.classList.contains('hidden')
        ? 'Show more questions <i data-lucide="chevron-down" class="w-4 h-4"></i>'
        : 'Show fewer questions <i data-lucide="chevron-up" class="w-4 h-4"></i>';
      if (window.lucide) lucide.createIcons();
    });
  }
}

function reviewItemHtml(r) {
  const nm = r.name || r.profiles?.full_name || 'Anonymous';
  const initial = escapeHtml(nm.trim().charAt(0).toUpperCase() || 'A');
  const loc = r.location ? `<span class="text-xs text-gray-400">&middot; ${escapeHtml(r.location)}</span>` : '';
  const title = r.title ? `<p class="text-sm font-bold text-gray-900 mt-1">${escapeHtml(r.title)}</p>` : '';
  const photo = r.review_photo ? `<div class="mt-2.5"><img src="${escapeHtml(r.review_photo)}" alt="Customer photo" class="w-28 h-28 object-cover rounded-xl border border-gray-100" loading="lazy" onerror="this.style.display='none'"></div>` : '';
  return `
    <div class="flex gap-3 py-4 border-b border-gray-100 last:border-0">
      <div class="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-black uppercase shadow-sm">${initial}</div>
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-sm font-bold text-gray-900">${escapeHtml(nm)}</span>${loc}
          <span class="text-xs text-gray-400">${new Date(r.date || r.created_at).toLocaleDateString()}</span>
        </div>
        <div class="flex gap-0.5 mt-1">${[1,2,3,4,5].map(i => `<i data-lucide="star" class="w-3.5 h-3.5 ${i <= (r.rating || 0) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}"></i>`).join('')}</div>
        ${title}
        <p class="text-[15px] text-gray-700 leading-relaxed mt-1.5">${escapeHtml(r.text || r.comment || '')}</p>
        ${photo}
      </div>
    </div>`;
}

// Full Customer Reviews section: live summary, 5→1 breakdown bars, real + seed
// review list, and the write-a-review form. Keyed by the PUBLIC property_id so
// reviews for one product can never leak onto another product's page.
function reviewsSectionHtml(listing) {
  const redirect = encodeURIComponent(window.location.pathname + window.location.search);
  return `
    <div id="reviews-section" class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${sectionHeader('message-square-star', 'Customer Reviews', 'amber')}
      <div id="reviews-summary" class="mb-1"><div class="text-gray-500 text-sm py-3">Loading ratings…</div></div>
      <div id="reviews-breakdown" class="mb-3"></div>
      <div id="reviews-list"><div class="text-gray-500 text-sm py-4">Loading reviews…</div></div>
      <div id="review-form-wrapper" class="mt-5 pt-5 border-t border-gray-100">
        <h4 class="text-[15px] font-black text-gray-900 mb-3 flex items-center gap-2"><i data-lucide="pen-line" class="w-4 h-4 text-blue-500"></i> Write a Review</h4>
        <div id="review-login-msg" class="text-xs text-gray-500 hidden">Please <a href="/auth.html?redirect=${redirect}" class="text-blue-500 hover:underline">sign in</a> to write a review.</div>
        <form id="review-form" class="space-y-3">
          <div class="flex items-center gap-2">
            <label class="text-xs text-gray-600 font-bold uppercase">Rating</label>
            <div id="star-rating" class="flex gap-1">
              ${[1,2,3,4,5].map(i => `<button type="button" data-rating="${i}" class="star-btn p-1"><i data-lucide="star" class="w-5 h-5 text-gray-300 hover:text-amber-400 transition"></i></button>`).join('')}
            </div>
          </div>
          <textarea id="review-text" rows="3" placeholder="Share your experience with this product..." class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-[15px] text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"></textarea>
          <div class="flex items-center gap-3">
            <label for="review-photo-input" class="inline-flex items-center gap-2 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 cursor-pointer hover:border-blue-300 hover:bg-blue-50/40 transition">
              <i data-lucide="camera" class="w-4 h-4 text-blue-500"></i> Add a photo
            </label>
            <input id="review-photo-input" type="file" accept="image/*" class="hidden">
            <div id="review-photo-preview" class="flex items-center gap-2"></div>
          </div>
          <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition">Submit Review</button>
          <div id="review-submit-msg" class="text-xs text-emerald-600 font-bold hidden"><i data-lucide="check-circle" class="w-3.5 h-3.5 inline"></i> Thank you! Your review is now live.</div>
        </form>
      </div>
    </div>`;
}

function ratingsBreakdownHtml(listing, breakdown, total) {
  const max = Math.max(1, total);
  return `
    <div class="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-1 items-center bg-gray-50/70 border border-gray-100 rounded-2xl p-4">
      ${[5,4,3,2,1].map(s => {
        const n = breakdown[s] || 0;
        const pct = Math.round((n / max) * 100);
        return `
        <div class="flex items-center gap-1.5 text-xs text-gray-500 font-medium"><i data-lucide="star" class="w-3 h-3 ${s <= 5 ? 'fill-amber-400 text-amber-400' : ''}"></i>${s}</div>
        <div class="flex items-center gap-2">
          <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden"><div class="h-full bg-amber-400 rounded-full" style="width:${pct}%"></div></div>
          <span class="text-[11px] text-gray-400 w-9 text-right tabular-nums">${pct}%</span>
        </div>`;
      }).join('')}
    </div>`;
}

function getListingId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

const ALL_PRODUCTS = [...PRODUCT_LISTINGS];
function findProductById(id) {
  return ALL_PRODUCTS.find(l => l.property_id === id) || null;
}

// Lazy-loaded ~636 KB extra product catalog. Only fetched when the built-in
// product list + live DB don't already contain the requested id.
let _extraProductsPromise = null;
function loadExtraProducts() {
  if (!_extraProductsPromise) {
    _extraProductsPromise = import('./products-extra.js')
      .then(m => {
        const extra = m.PRODUCT_EXTRA_LISTINGS || [];
        for (const l of extra) if (!ALL_PRODUCTS.some(x => x.property_id === l.property_id)) ALL_PRODUCTS.push(l);
        return ALL_PRODUCTS;
      })
      .catch(() => ALL_PRODUCTS);
  }
  return _extraProductsPromise;
}

function renderTruck(listing) {
  const root = document.getElementById('details-content');
  const price = formatTruckPrice(listing);

  const imgs = safeImages(listing.images);
  const galleryThumbs = imgs.map((img, i) =>
    `<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${i === 0 ? 'active border-blue-500' : 'border-gray-200'} shrink-0" data-img="${escapeHtml(img)}">
      <img src="${escapeHtml(img)}" alt="View ${i + 1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
    </button>`
  ).join('');

  const galleryLabels = [
    'Front View', 'Rear View', 'Left Side', 'Right Side',
    'Interior Dashboard', 'Driver Seat', 'Cargo Area / Truck Bed',
    'Engine', 'Wheels / Tires', 'Additional View'
  ];

  const specs = [
    { icon: 'building-2', label: 'Brand', value: listing.brand },
    { icon: 'car', label: 'Model', value: listing.model },
    { icon: 'calendar', label: 'Model Year', value: listing.model_year },
    { icon: 'badge-check', label: 'Condition', value: listing.condition },
    { icon: 'gauge', label: 'Mileage', value: listing.mileage },
    { icon: 'cog', label: 'Transmission', value: listing.transmission },
    { icon: 'fuel', label: 'Fuel Type', value: listing.fuel_type },
    { icon: 'zap', label: 'Engine', value: listing.engine },
    { icon: 'truck', label: 'Drive Type', value: listing.drive_type },
    { icon: 'palette', label: 'Colour', value: listing.color },
    { icon: 'package', label: 'Payload Capacity', value: listing.payload_capacity },
    { icon: 'link', label: 'Towing Capacity', value: listing.towing_capacity },
    { icon: 'barcode', label: 'VIN', value: listing.vin },
    { icon: 'tag', label: 'Stock Number', value: listing.stock_number },
  ].filter(s => s.value != null && s.value !== '' && s.value !== 'N/A');

  const featuresBlock = featuresGrid(listing.features);

  const ratingsBlock = reviewsSectionHtml(listing);

  root.innerHTML = `
    <div class="fade-in">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>Trucks</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${listing.title}</span>
      </div>

      <!-- Title & ID -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${escapeHtml(listing.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${escapeHtml(listing.stock_number || '—')}</span> &middot; VIN: <span class="text-gray-600 font-mono">${escapeHtml(listing.vin || '—')}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${price}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${escapeHtml(listing.condition || 'Used')} &middot; For Sale</span>
        </div>
      </div>

      ${ratingsBlock}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${listing.images[0]}" alt="${listing.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${galleryLabels[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${galleryThumbs}
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 mb-8">
        <button id="buy-now-btn" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl uppercase text-sm tracking-wider transition flex items-center justify-center gap-2">
          <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
        </button>
        <button id="wishlist-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="w-5 h-5"></i>
        </button>
        <button id="share-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Share">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Description -->
      ${detailsAccordions(listing, specs, listing.features, null, null)}

      ${sellerBlock(listing)}

      ${relSectionsHtml()}
    </div>
  `;

  const hero = document.getElementById('hero-image');
  const label = document.getElementById('gallery-label');
  root.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active', 'border-blue-500'));
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.add('border-gray-200'));
      thumb.classList.add('active', 'border-blue-500');
      thumb.classList.remove('border-gray-200');
      hero.src = thumb.dataset.img;
      label.textContent = galleryLabels[i] || `View ${i + 1}`;
    });
  });

  document.getElementById('buy-now-btn').addEventListener('click', async () => {
    const user = await getCurrentUser();
    if (user) {
      window.location.href = `/checkout.html?id=${listing.property_id}`;
    } else {
      setRedirectAfterAuth(`/checkout.html?id=${listing.property_id}`);
      window.location.href = `/auth.html?redirect=${encodeURIComponent('/checkout.html?id=' + listing.property_id)}`;
    }
  });

  document.getElementById('share-btn').addEventListener('click', async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: escapeHtml(listing.title), url });
      } else {
        await navigator.clipboard.writeText(url);
        const btn = document.getElementById('share-btn');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Copied!';
        if (window.lucide) lucide.createIcons();
        setTimeout(() => { btn.innerHTML = orig; if (window.lucide) lucide.createIcons(); }, 2000);
      }
    } catch (e) { /* user cancelled */ }
  });

  loadRelatedSections(listing);

  setupReviewForm(listing);
  loadReviews(listing);

  setupAccordions();
  if (window.lucide) lucide.createIcons();
}

function renderMotorhome(listing) {
  const root = document.getElementById('details-content');
  const price = formatPrice(listing);

  const imgs = safeImages(listing.images);
  const galleryThumbs = imgs.map((img, i) =>
    `<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${i === 0 ? 'active border-blue-500' : 'border-gray-200'} shrink-0" data-img="${escapeHtml(img)}">
      <img src="${escapeHtml(img)}" alt="View ${i + 1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
    </button>`
  ).join('');

  const galleryLabels = [
    'Exterior Front', 'Exterior Side', 'Exterior Rear', 'Living Area',
    'Kitchen', 'Bedroom', 'Bathroom', 'Additional View'
  ];

  const specs = [
    { icon: 'building-2', label: 'Brand', value: listing.brand },
    { icon: 'car', label: 'Model', value: listing.model },
    { icon: 'calendar', label: 'Model Year', value: listing.model_year },
    { icon: 'badge-check', label: 'Condition', value: listing.condition },
    { icon: 'gauge', label: 'Mileage', value: listing.mileage },
    { icon: 'cog', label: 'Transmission', value: listing.transmission },
    { icon: 'fuel', label: 'Fuel Type', value: listing.fuel_type },
    { icon: 'zap', label: 'Engine', value: listing.engine },
    { icon: 'bus', label: 'Type', value: listing.property_type },
    { icon: 'truck', label: 'Drive Type', value: listing.drive_type },
    { icon: 'palette', label: 'Colour', value: listing.color },
    { icon: 'moon', label: 'Sleeping Capacity', value: listing.sleeping_capacity },
    { icon: 'users', label: 'Seating Capacity', value: listing.seating_capacity },
    { icon: 'shower-head', label: 'Bathroom', value: listing.bathroom },
    { icon: 'utensils', label: 'Kitchen', value: listing.kitchen },
    { icon: 'droplet', label: 'Water Tank', value: listing.water_tank },
    { icon: 'barcode', label: 'VIN', value: listing.vin },
    { icon: 'tag', label: 'Stock Number', value: listing.stock_number },
  ].filter(s => s.value != null && s.value !== '' && s.value !== 'N/A');

  const featuresBlock = featuresGrid(listing.features);

  const ratingsBlock = reviewsSectionHtml(listing);

  root.innerHTML = `
    <div class="fade-in">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>Motorhomes</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${listing.title}</span>
      </div>

      <!-- Title & ID -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${escapeHtml(listing.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${escapeHtml(listing.stock_number || '—')}</span> &middot; VIN: <span class="text-gray-600 font-mono">${escapeHtml(listing.vin || '—')}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${price}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${escapeHtml(listing.condition || 'Used')} &middot; For Sale</span>
        </div>
      </div>

      ${ratingsBlock}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${listing.images[0]}" alt="${listing.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${galleryLabels[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${galleryThumbs}
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 mb-8">
        <button id="buy-now-btn" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl uppercase text-sm tracking-wider transition flex items-center justify-center gap-2">
          <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
        </button>
        <button id="wishlist-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="w-5 h-5"></i>
        </button>
        <button id="share-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Share">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Description -->
      ${detailsAccordions(listing, specs, listing.features, null, null)}

      ${sellerBlock(listing)}

      ${relSectionsHtml()}
    </div>
  `;

  const hero = document.getElementById('hero-image');
  const label = document.getElementById('gallery-label');
  root.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active', 'border-blue-500'));
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.add('border-gray-200'));
      thumb.classList.add('active', 'border-blue-500');
      thumb.classList.remove('border-gray-200');
      hero.src = thumb.dataset.img;
      label.textContent = galleryLabels[i] || `View ${i + 1}`;
    });
  });

  document.getElementById('buy-now-btn').addEventListener('click', async () => {
    const user = await getCurrentUser();
    if (user) {
      window.location.href = `/checkout.html?id=${listing.property_id}`;
    } else {
      setRedirectAfterAuth(`/checkout.html?id=${listing.property_id}`);
      window.location.href = `/auth.html?redirect=${encodeURIComponent('/checkout.html?id=' + listing.property_id)}`;
    }
  });

  document.getElementById('share-btn').addEventListener('click', async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: escapeHtml(listing.title), url });
      } else {
        await navigator.clipboard.writeText(url);
        const btn = document.getElementById('share-btn');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Copied!';
        if (window.lucide) lucide.createIcons();
        setTimeout(() => { btn.innerHTML = orig; if (window.lucide) lucide.createIcons(); }, 2000);
      }
    } catch (e) { /* user cancelled */ }
  });

  loadRelatedSections(listing);

  setupReviewForm(listing);
  loadReviews(listing);

  setupAccordions();
  if (window.lucide) lucide.createIcons();
}

function renderCar(listing) {
  const root = document.getElementById('details-content');
  const price = formatPrice(listing);

  const imgs = safeImages(listing.images);
  const galleryThumbs = imgs.map((img, i) =>
    `<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${i === 0 ? 'active border-blue-500' : 'border-gray-200'} shrink-0" data-img="${escapeHtml(img)}">
      <img src="${escapeHtml(img)}" alt="View ${i + 1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
    </button>`
  ).join('');

  const galleryLabels = [
    'Front View', 'Rear View', 'Left Side', 'Right Side',
    'Interior Dashboard', 'Driver Seat', 'Cabin / Interior',
    'Wheels / Tires', 'Additional View'
  ];

  const specs = [
    { icon: 'building-2', label: 'Brand', value: listing.brand },
    { icon: 'car', label: 'Model', value: listing.model },
    { icon: 'calendar', label: 'Model Year', value: listing.model_year },
    { icon: 'badge-check', label: 'Condition', value: listing.condition },
    { icon: 'gauge', label: 'Mileage', value: listing.mileage },
    { icon: 'cog', label: 'Transmission', value: listing.transmission },
    { icon: 'fuel', label: 'Fuel Type', value: listing.fuel_type },
    { icon: 'zap', label: 'Engine', value: listing.engine },
    { icon: 'truck', label: 'Drive Type', value: listing.drive_type },
    { icon: 'palette', label: 'Colour', value: listing.color },
    { icon: 'barcode', label: 'VIN', value: listing.vin },
    { icon: 'tag', label: 'Stock Number', value: listing.stock_number },
  ].filter(s => s.value != null && s.value !== '' && s.value !== 'N/A');

  const featuresBlock = featuresGrid(listing.features);

  const ratingsBlock = reviewsSectionHtml(listing);

  root.innerHTML = `
    <div class="fade-in">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>Cars</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${listing.title}</span>
      </div>

      <!-- Title & ID -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${escapeHtml(listing.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${escapeHtml(listing.stock_number || '—')}</span> &middot; VIN: <span class="text-gray-600 font-mono">${escapeHtml(listing.vin || '—')}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${price}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${escapeHtml(listing.condition || 'Used')} &middot; For Sale</span>
        </div>
      </div>

      ${ratingsBlock}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${listing.images[0]}" alt="${listing.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${galleryLabels[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${galleryThumbs}
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 mb-8">
        <button id="buy-now-btn" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl uppercase text-sm tracking-wider transition flex items-center justify-center gap-2">
          <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
        </button>
        <button id="wishlist-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="w-5 h-5"></i>
        </button>
        <button id="share-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Share">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Description -->
      ${detailsAccordions(listing, specs, listing.features, null, null)}

      ${sellerBlock(listing)}

      ${relSectionsHtml()}
    </div>
  `;

  const hero = document.getElementById('hero-image');
  const label = document.getElementById('gallery-label');
  root.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active', 'border-blue-500'));
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.add('border-gray-200'));
      thumb.classList.add('active', 'border-blue-500');
      thumb.classList.remove('border-gray-200');
      hero.src = thumb.dataset.img;
      label.textContent = galleryLabels[i] || `View ${i + 1}`;
    });
  });

  document.getElementById('buy-now-btn').addEventListener('click', async () => {
    const user = await getCurrentUser();
    if (user) {
      window.location.href = `/checkout.html?id=${listing.property_id}`;
    } else {
      setRedirectAfterAuth(`/checkout.html?id=${listing.property_id}`);
      window.location.href = `/auth.html?redirect=${encodeURIComponent('/checkout.html?id=' + listing.property_id)}`;
    }
  });

  document.getElementById('share-btn').addEventListener('click', async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: escapeHtml(listing.title), url });
      } else {
        await navigator.clipboard.writeText(url);
        const btn = document.getElementById('share-btn');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Copied!';
        if (window.lucide) lucide.createIcons();
        setTimeout(() => { btn.innerHTML = orig; if (window.lucide) lucide.createIcons(); }, 2000);
      }
    } catch (e) { /* user cancelled */ }
  });

  loadRelatedSections(listing);

  setupReviewForm(listing);
  loadReviews(listing);

  setupAccordions();
  if (window.lucide) lucide.createIcons();
}

function galleryLabelsFor(listing) {
  if (listing.listing_type === 'vehicle') {
    return ['Front View', 'Rear View', 'Left Side', 'Right Side', 'Interior Dashboard', 'Driver Seat', 'Cargo / Bed', 'Engine', 'Wheels / Tires', 'Additional View'];
  }
  if (listing.listing_type === 'property') {
    return ['Front Exterior', 'Side Exterior', 'Back Exterior', 'Living Room', 'Kitchen', 'Dining Area', 'Bedroom', 'Bathroom', 'Additional Interior', 'Additional View'];
  }
  return ['Front View', 'Angle View', 'Detail View', 'Packaging', 'Additional View'];
}

function actionGridHtml(listing) {
  const isProperty = listing.listing_type === 'property';
  const shareLabel = isProperty ? 'Share Property' : 'Share';
  const contactHref = `/contact.html?listing=${encodeURIComponent(listing.property_id || '')}`;
  return `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
      <button type="button" id="view-details-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="eye" class="w-5 h-5"></i> View Details
      </button>
      <button type="button" id="add-cart-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart
      </button>
      <button type="button" id="buy-now-btn" class="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition text-sm uppercase tracking-wider">
        <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
      </button>
      <a href="${contactHref}" class="flex items-center justify-center gap-2 bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-700 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="badge-check" class="w-4 h-4"></i> Contact Us
        <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online</span>
      </a>
      <button type="button" id="wishlist-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-700 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="heart" class="w-5 h-5"></i> Add to Wishlist
      </button>
      <button type="button" id="share-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="share-2" class="w-5 h-5"></i> ${shareLabel}
      </button>
    </div>
  `;
}

function sellerBlock(listing) {
  const isAgent = listing.listing_type === 'property';
  const base = `/contact.html?listing=${encodeURIComponent(listing.property_id || '')}`;
  return `
    <div class="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm">
      <div class="flex items-center gap-3 mb-4">
        <div class="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm">
          <img src="/w-logo.svg" alt="Weverse Online Shop" class="w-full h-full object-contain" onerror="this.onerror=null;this.style.display='none'">
        </div>
        <div class="min-w-0">
          <p class="text-[15px] font-black text-gray-900 flex items-center gap-1.5">Weverse Online Shop <i data-lucide="badge-check" class="w-4 h-4 fill-blue-600 text-white"></i></p>
          <p class="text-xs text-gray-500">${isAgent ? 'Professional agent for this listing' : 'Trusted marketplace seller'}</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 mb-4">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full"><i data-lucide="truck" class="w-3.5 h-3.5"></i> Fast Worldwide Delivery</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-violet-700 bg-violet-50 border border-violet-200 px-2.5 py-1.5 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Authentic Listings</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1.5 rounded-full"><i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i> Easy Returns</span>
      </div>
      <div class="flex gap-2">
        <a href="${base}" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl text-sm text-center transition">Contact Seller</a>
        <a href="${base}&subject=Enquiry" class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-xl text-sm text-center transition">Send Message</a>
      </div>
    </div>`;
}

function relSectionsHtml() {
  return `
      <div id="similar-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Similar Products</h3>
        <div class="rel-grid flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-1 snap-x snap-mandatory"></div>
      </div>
      <div id="related-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Related Products</h3>
        <div class="rel-grid flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-1 snap-x snap-mandatory"></div>
      </div>
      <div id="recommended-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Recommended For You</h3>
        <div class="rel-grid flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-1 snap-x snap-mandatory"></div>
      </div>`;
}

function buildRelatedPool(listing) {
  const seen = new Map();
  const add = (arr) => (arr || []).forEach(l => { if (l && l.property_id) seen.set(l.property_id, l); });
  add(SHOWROOM_LISTINGS);
  add(TRUCK_LISTINGS);
  add(MOTORHOME_LISTINGS);
  add(CAR_LISTINGS);
  add(PHONE_LISTINGS);
  add(PET_LISTINGS);
  add(PRODUCT_LISTINGS);
  add(ALL_PRODUCTS); // includes lazily-loaded extra products when available
  add(getAllListings());
  const cat = getCatalogCategory(listing.category || listing.subcategory);
  if (cat) add(getCatalogSample(cat.slug, 50));
  return [...seen.values()].filter(l => l.property_id !== listing.property_id);
}

function relScore(a, b) {
  let score = 0;
  const n = s => String(s || '').trim().toLowerCase();
  if (a.listing_type && a.listing_type === b.listing_type) score += 40;
  if (a.category && n(a.category) === n(b.category)) score += 30;
  if (a.subcategory && n(a.subcategory) === n(b.subcategory)) score += 20;
  if (a.brand && n(a.brand) === n(b.brand)) score += 15;
  if (a.breed && n(a.breed) === n(b.breed)) score += 15;
  if (a.model && n(a.model) === n(b.model)) score += 10;
  if (a.property_type && n(a.property_type) === n(b.property_type)) score += 15;
  const pa = parseFloat(a.price) || 0, pb = parseFloat(b.price) || 0;
  if (pa > 0 && pb > 0) {
    const ratio = Math.min(pa, pb) / Math.max(pa, pb);
    if (ratio >= 0.8) score += 10;
    else if (ratio >= 0.6) score += 6;
    else if (ratio >= 0.4) score += 3;
  }
  if (a.country_code && a.country_code === b.country_code) score += 5;
  const wa = new Set(n(a.title).split(/[^a-z0-9]+/).filter(w => w.length > 2));
  const wb = new Set(n(b.title).split(/[^a-z0-9]+/).filter(w => w.length > 2));
  let overlap = 0;
  wa.forEach(w => { if (wb.has(w)) overlap++; });
  score += Math.min(overlap * 2, 10);
  return score;
}

function fillRelGrid(sectionId, items) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  const grid = section.querySelector('.rel-grid');
  if (!grid) return;
  if (!items.length) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');
  grid.innerHTML = '';
  const frag = document.createDocumentFragment();
  items.slice(0, 10).forEach(item => {
    const wrap = document.createElement('div');
    wrap.className = 'shrink-0 w-[260px] sm:w-[320px] snap-start';
    const card = renderCard(item);
    card.style.width = '100%';
    wrap.appendChild(card);
    frag.appendChild(wrap);
  });
  grid.appendChild(frag);
  if (window.lucide) lucide.createIcons();
}

function loadRelatedSections(listing) {
  const poolAll = buildRelatedPool(listing);
  const scored = poolAll
    .map(c => ({ item: c, score: relScore(listing, c) }))
    .sort((x, y) => y.score - x.score || (y.item.rating || 0) - (x.item.rating || 0));
  const similar = scored.filter(s => s.score >= 35).map(s => s.item);
  const used = new Set(similar.map(s => s.property_id));
  const related = scored.filter(s => s.score >= 15 && s.score < 35 && !used.has(s.item.property_id)).map(s => s.item);
  const recommended = [...poolAll]
    .filter(l => !used.has(l.property_id))
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 10);
  const fallback = scored.filter(s => !used.has(s.item.property_id)).map(s => s.item);
  fillRelGrid('similar-section', similar.length ? similar : fallback.slice(0, 10));
  fillRelGrid('related-section', related.length ? related : fallback.slice(0, 10));
  fillRelGrid('recommended-section', recommended.length ? recommended : fallback.slice(0, 10));
}

function render(listing) {
  const root = document.getElementById('details-content');
  const isProperty = listing.listing_type === 'property';
  const price = formatPrice(listing);
  const flag = flagEmoji(listing.country_code);
  const idLabel = listing.listing_type === 'product' ? 'Product ID' : isProperty ? 'Property ID' : 'Listing ID';

  // Real Price (crossed out through the middle) + Discount Price (what customers
  // pay). real_price is the source of truth; legacy compare_at_price /
  // original_price are honored as fallbacks for older listings.
  let originalPriceHtml = '';
  let discountBadge = '';
  let realNum = parseFloat(listing.real_price);
  if (!Number.isFinite(realNum) || realNum <= 0) realNum = parseFloat(listing.compare_at_price ?? listing.original_price);
  if (Number.isFinite(realNum) && realNum > 0 && realNum > parseFloat(listing.price)) {
    const pct = Math.round((1 - parseFloat(listing.price) / realNum) * 100);
    originalPriceHtml = `<span class="text-lg text-gray-400 price-strike line-through font-medium">${formatPrice({ ...listing, price: realNum })}</span>`;
    discountBadge = `<span class="inline-flex items-center gap-1 text-xs font-black text-white bg-red-500 px-2 py-1 rounded-full">-${pct}% OFF</span>`;
  }
  const availabilityStatus = listing.availability_status || (listing.listing_type === 'product' ? 'In Stock' : 'Available');

  const imgs2 = safeImages(listing.images);
  const galleryThumbs = imgs2.map((img, i) =>
    `<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${i === 0 ? 'active border-blue-500' : 'border-gray-200'} shrink-0" data-img="${escapeHtml(img)}">
      <img src="${escapeHtml(img)}" alt="View ${i + 1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
    </button>`
  ).join('');

  let locationBlock = '';
  if (isProperty) {
    const locItems = [
      { icon: 'globe', label: 'Country', value: `${flag} ${listing.country}` },
      { icon: 'map-pin', label: 'State / Province', value: listing.state },
      { icon: 'building', label: 'City', value: listing.city },
      { icon: 'navigation', label: 'Town / Local Area', value: listing.town },
    ].filter(item => item.value);
    locationBlock = `
      <div class="mt-4">
        ${sectionHeader('map-pin', 'Location', 'rose')}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${locItems.map(item => `
            <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
              <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="${item.icon}" class="w-4 h-4 text-blue-500"></i></div>
              <div><div class="text-gray-500 text-xs">${item.label}</div><div class="text-gray-900 font-bold text-[15px]">${item.value}</div></div>
            </div>
          `).join('')}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-200" style="height:280px"></div>
      </div>`;
  }

  let specsBlock = '';
  if (isProperty) {
    const specs = [
      { icon: 'bed-double', label: 'Bedrooms', value: listing.bedrooms },
      { icon: 'bath', label: 'Bathrooms', value: listing.bathrooms },
      { icon: 'building', label: 'Building Size', value: listing.building_size },
      { icon: 'ruler', label: 'Land Size', value: listing.land_size },
      { icon: 'car', label: 'Parking Spaces', value: listing.parking_spaces },
      { icon: 'home', label: 'Property Type', value: listing.property_type },
      { icon: 'sofa', label: 'Furnished', value: listing.furnished },
      { icon: 'calendar', label: 'Year Built', value: listing.year_built },
      { icon: 'tag', label: 'Status', value: listing.listing_status === 'rent' ? 'For Rent' : 'For Sale' },
    ].filter(s => s.value != null && s.value !== '');
    specsBlock = specsPanel('Property Information', 'home', specs);
  } else if (listing.category === 'Motorhomes') {
    const specs = [
      { icon: 'factory', label: 'Brand', value: listing.brand },
      { icon: 'car', label: 'Model', value: listing.model },
      { icon: 'calendar', label: 'Year', value: listing.model_year },
      { icon: 'badge-check', label: 'Condition', value: listing.condition },
      { icon: 'gauge', label: 'Mileage', value: listing.mileage },
      { icon: 'cog', label: 'Transmission', value: listing.transmission },
      { icon: 'fuel', label: 'Fuel Type', value: listing.fuel_type },
      { icon: 'zap', label: 'Engine', value: listing.engine },
      { icon: 'bus', label: 'Type', value: listing.property_type },
      { icon: 'moon', label: 'Sleeping Capacity', value: listing.sleeping_capacity },
      { icon: 'users', label: 'Seating Capacity', value: listing.seating_capacity },
      { icon: 'shower-head', label: 'Bathroom', value: listing.bathroom },
      { icon: 'utensils', label: 'Kitchen', value: listing.kitchen },
      { icon: 'droplet', label: 'Water Tank', value: listing.water_tank },
    ].filter(s => s.value != null && s.value !== '');
    specsBlock = specsPanel('Vehicle Information', 'bus', specs, 'violet');
  } else if (listing.listing_type === 'product') {
    const specs = [
      { icon: 'factory', label: 'Brand', value: listing.brand },
      { icon: 'tag', label: 'Subcategory', value: listing.subcategory },
      { icon: 'palette', label: 'Colour', value: listing.color },
      { icon: 'ruler', label: 'Size', value: listing.size },
      { icon: 'layers', label: 'Material', value: listing.material },
      { icon: 'badge-check', label: 'Condition', value: listing.condition || 'New' },
      { icon: 'shield-check', label: 'Warranty', value: listing.warranty },
      { icon: 'package-check', label: 'Availability', value: listing.availability_status },
    ].filter(s => s.value != null && s.value !== '');
    specsBlock = specsPanel('Product Information', 'package', specs);
  } else if (listing.listing_type === 'pet') {
    const specs = [
      { icon: 'paw-print', label: 'Breed', value: listing.breed },
      { icon: 'calendar', label: 'Age', value: listing.age },
      { icon: 'users', label: 'Gender', value: listing.gender },
      { icon: 'palette', label: 'Colour', value: listing.color },
      { icon: 'scale', label: 'Weight', value: listing.size },
      { icon: 'globe', label: 'Origin', value: `${flagEmoji(listing.country_code)} ${listing.country}` },
      { icon: 'badge-check', label: 'Health', value: listing.condition },
    ].filter(s => s.value != null && s.value !== '');
    specsBlock = specsPanel('Pet Information', 'paw-print', specs, 'amber');
  }

  const featuresBlock = featuresGrid(listing.features);

  const highlightsBlock = highlightsGrid(listing.highlights);

  const ratingsBlock = reviewsSectionHtml(listing);

  root.innerHTML = `
    <div class="fade-in">
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>${listing.category}</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${escapeHtml(listing.title)}</span>
      </div>

      <div class="mb-5">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">${escapeHtml(listing.title)}</h1>
        <div class="flex flex-wrap items-center gap-2 mt-2.5">
          <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified</span>
          <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full"><i data-lucide="box" class="w-3.5 h-3.5"></i> ${idLabel}: <span class="font-mono">${escapeHtml(listing.property_id)}</span></span>
          <span class="inline-flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">${listing.listing_status === 'rent' ? 'For Rent' : 'For Sale'}</span>
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-4 bg-gradient-to-br from-blue-50 via-white to-white border border-blue-100 rounded-2xl p-5 mb-6">
        <div>
          <div class="flex items-baseline flex-wrap gap-2">
            ${originalPriceHtml}
            <span class="text-4xl font-black text-blue-600">${price}</span>
          </div>
          <div class="flex items-center gap-2 mt-1.5">
            ${discountBadge}
            <span class="text-sm text-emerald-600 font-bold flex items-center gap-1"><i data-lucide="package-check" class="w-4 h-4"></i> ${availabilityStatus}</span>
          </div>
        </div>
        <div class="flex flex-col gap-1.5 text-sm">
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="truck" class="w-4 h-4 text-blue-500"></i> Free worldwide shipping</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="rotate-ccw" class="w-4 h-4 text-blue-500"></i> Easy returns within 14 days</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="lock" class="w-4 h-4 text-blue-500"></i> Secure payment protection</span>
        </div>
      </div>

      ${ratingsBlock}

      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${listing.images[0]}" alt="${listing.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${galleryThumbs}
      </div>

      ${actionGridHtml(listing)}

      <div id="listing-details">
        ${detailsAccordions(listing, specs, features, highlights, locationBlock)}
      </div>

      <div id="recommendations-section" class="hidden">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">You May Also Like</h3>
        <div id="recommendations-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>

      ${relSectionsHtml()}
    </div>
  `;

  const hero = document.getElementById('hero-image');
  root.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active', 'border-blue-500'));
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.add('border-gray-200'));
      thumb.classList.add('active', 'border-blue-500');
      thumb.classList.remove('border-gray-200');
      hero.src = thumb.dataset.img;
    });
  });

  document.getElementById('buy-now-btn').addEventListener('click', async () => {
    const user = await getCurrentUser();
    if (user) {
      window.location.href = `/checkout.html?id=${listing.property_id}`;
    } else {
      setRedirectAfterAuth(`/checkout.html?id=${listing.property_id}`);
      window.location.href = `/auth.html?redirect=${encodeURIComponent('/checkout.html?id=' + listing.property_id)}`;
    }
  });

  document.getElementById('share-btn').addEventListener('click', async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: escapeHtml(listing.title), url });
      } else {
        await navigator.clipboard.writeText(url);
        const btn = document.getElementById('share-btn');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Copied!';
        if (window.lucide) lucide.createIcons();
        setTimeout(() => { btn.innerHTML = orig; if (window.lucide) lucide.createIcons(); }, 2000);
      }
    } catch (e) { /* user cancelled */ }
  });

  const viewDetailsBtn = document.getElementById('view-details-btn');
  if (viewDetailsBtn) {
    viewDetailsBtn.addEventListener('click', () => {
      const target = document.getElementById('listing-details');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  const addCartBtn = document.getElementById('add-cart-btn');
  if (addCartBtn) {
    addCartBtn.addEventListener('click', () => {
      cartAddToCart(listing.property_id, 1);
      addCartBtn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Added to Cart';
      if (window.lucide) lucide.createIcons();
      setTimeout(() => {
        addCartBtn.innerHTML = '<i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart';
        if (window.lucide) lucide.createIcons();
      }, 2000);
    });
  }

  setupWishlistButton(listing);
  setupReviewForm(listing);
  loadReviews(listing);
  loadRecommendations(listing);

  setupAccordions();
  if (window.lucide) lucide.createIcons();

  trackEvent('view_item', { item_id: listing.property_id, item_name: listing.title, value: parseFloat(listing.price) || 0, currency: listing.currency || 'USD' });

  const mapEl = document.getElementById('listing-map');
  if (mapEl && window.L) {
    const lat = parseFloat(listing.latitude) || null;
    const lng = parseFloat(listing.longitude) || null;
    const query = [listing.town, listing.city, listing.state, listing.country].filter(Boolean).join(', ');
    if (lat && lng) {
      const map = L.map(mapEl).setView([lat, lng], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
      L.marker([lat, lng]).addTo(map).bindPopup(listing.title);
    } else if (query) {
      fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + encodeURIComponent(query))
        .then(r => r.json())
        .then(data => {
          if (data && data[0]) {
            const ml = parseFloat(data[0].lat);
            const mln = parseFloat(data[0].lon);
            const map = L.map(mapEl).setView([ml, mln], 12);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
            L.marker([ml, mln]).addTo(map).bindPopup(listing.title);
          } else {
            mapEl.style.display = 'none';
          }
        })
        .catch(() => { mapEl.style.display = 'none'; });
    } else {
      mapEl.style.display = 'none';
    }
  }
}

let selectedRating = 0;

// Heart pop animation (smooth, app-like toggle feedback)
let _wishPopStyleInjected = false;
function ensureWishPopStyle() {
  if (_wishPopStyleInjected) return;
  _wishPopStyleInjected = true;
  const s = document.createElement('style');
  s.textContent = '@keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}';
  document.head.appendChild(s);
}
function setWishlistBtn(btn, saved) {
  if (!btn) return;
  ensureWishPopStyle();
  btn.innerHTML = `<i data-lucide="heart" class="w-5 h-5 ${saved ? 'fill-red-500 text-red-500' : ''}"></i>`;
  btn.classList.toggle('bg-red-50', saved);
  btn.classList.toggle('border', saved);
  btn.classList.toggle('border-red-200', saved);
  const sub = btn.querySelector('span');
  if (sub) sub.textContent = saved ? 'Saved to Wishlist' : 'Add to Wishlist';
  if (window.lucide) lucide.createIcons();
  const icon = btn.querySelector('i');
  if (icon) {
    icon.style.animation = 'none';
    void icon.offsetWidth;
    icon.style.animation = 'kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)';
    setTimeout(() => { if (icon) icon.style.animation = ''; }, 550);
  }
}

async function setupWishlistButton(listing) {
  const btn = document.getElementById('wishlist-btn');
  if (!btn) return;
  const user = await getCurrentUser();
  if (!user) {
    btn.addEventListener('click', () => {
      setRedirectAfterAuth(window.location.pathname + window.location.search);
      window.location.href = `/auth.html?redirect=${encodeURIComponent(window.location.pathname + window.location.search)}`;
    });
    return;
  }
  const { data: existing, error: wishErr } = await supabase
    .from('wishlist')
    .select('id')
    .eq('user_id', user.id)
    .eq('listing_id', listing.id)
    .maybeSingle();
  if (wishErr) { console.error('Wishlist check failed:', wishErr.message); return; }
  if (existing) setWishlistBtn(btn, true);
  btn.addEventListener('click', async () => {
    const { data: fav, error: favErr } = await supabase
      .from('wishlist')
      .select('id')
      .eq('user_id', user.id)
      .eq('listing_id', listing.id)
      .maybeSingle();
    if (favErr) { console.error('Wishlist toggle failed:', favErr.message); return; }
    if (fav) {
      const { error: delErr } = await supabase.from('wishlist').delete().eq('id', fav.id);
      if (delErr) { console.error('Wishlist delete failed:', delErr.message); return; }
      setWishlistBtn(btn, false);
    } else {
      const { error: insErr } = await supabase.from('wishlist').insert({ user_id: user.id, listing_id: listing.id });
      if (insErr) { console.error('Wishlist insert failed:', insErr.message); return; }
      setWishlistBtn(btn, true);
    }
  });
}

async function setupReviewForm(listing) {
  const form = document.getElementById('review-form');
  const loginMsg = document.getElementById('review-login-msg');
  if (!form) return;
  const user = await getCurrentUser();
  if (!user) {
    form.classList.add('hidden');
    if (loginMsg) loginMsg.classList.remove('hidden');
    return;
  }

  document.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedRating = parseInt(btn.dataset.rating, 10);
      document.querySelectorAll('.star-btn').forEach((b, i) => {
        const icon = b.querySelector('i, svg');
        if (!icon) return;
        if (i < selectedRating) {
          icon.classList.add('fill-amber-400','text-amber-400');
          icon.classList.remove('text-gray-300');
        } else {
          icon.classList.remove('fill-amber-400','text-amber-400');
          icon.classList.add('text-gray-300');
        }
      });
    });
  });

  const photoInput = document.getElementById('review-photo-input');
  const photoPreview = document.getElementById('review-photo-preview');
  let photoFile = null;
  if (photoInput) {
    photoInput.addEventListener('change', () => {
      photoFile = photoInput.files && photoInput.files[0];
      if (!photoPreview) return;
      photoPreview.innerHTML = '';
      if (photoFile) {
        const url = URL.createObjectURL(photoFile);
        photoPreview.innerHTML = `<span class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg px-2.5 py-1"><img src="${url}" alt="" class="w-5 h-5 rounded object-cover">${escapeHtml(photoFile.name)}</span>`;
      }
    });
  }

  const msg = document.getElementById('review-submit-msg');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = document.getElementById('review-text').value.trim();
    if (!selectedRating) { alert('Please select a rating.'); return; }
    if (!text) { alert('Please write a review.'); return; }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalLabel = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="inline-block animate-spin">⏳</span> Submitting…';

    let reviewPhoto = null;
    if (photoFile) {
      const ext = (photoFile.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg';
      const path = `${user.id}/${Date.now()}_${String(Math.random()).slice(2)}.${ext}`;
      const { error: upErr } = await supabase.storage.from('review-photos').upload(path, photoFile, {
        contentType: photoFile.type || 'image/jpeg',
        cacheControl: '3600',
        upsert: false,
      });
      if (upErr) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalLabel;
        alert('Could not upload photo: ' + upErr.message);
        return;
      }
      const { data: pub } = supabase.storage.from('review-photos').getPublicUrl(path);
      reviewPhoto = pub?.publicUrl || null;
    }

    const { error } = await supabase.from('product_reviews').insert({
      listing_id: listing.id || null,
      property_id: listing.property_id || listing.id || '',
      user_id: user.id,
      rating: selectedRating,
      comment: text,
      review_photo: reviewPhoto,
      is_approved: true,
    });

    submitBtn.disabled = false;
    submitBtn.innerHTML = originalLabel;
    if (error) { alert('Error: ' + error.message); return; }

    document.getElementById('review-text').value = '';
    selectedRating = 0;
    photoFile = null;
    if (photoInput) photoInput.value = '';
    if (photoPreview) photoPreview.innerHTML = '';
    document.querySelectorAll('.star-btn').forEach(b => {
      const icon = b.querySelector('i, svg');
      if (!icon) return;
      icon.classList.remove('fill-amber-400','text-amber-400');
      icon.classList.add('text-gray-300');
    });
    if (msg) {
      msg.classList.remove('hidden');
      setTimeout(() => { if (msg) msg.classList.add('hidden'); }, 4000);
    }
    loadReviews(listing);
  });
}

async function loadReviews(listing) {
  const listEl = document.getElementById('reviews-list');
  const summaryEl = document.getElementById('reviews-summary');
  const breakdownEl = document.getElementById('reviews-breakdown');
  if (!listEl) return;

  const seed = generateSeedReviews(listing);
  const breakdown = { 5: seed.breakdown[5] || 0, 4: seed.breakdown[4] || 0, 3: seed.breakdown[3] || 0, 2: seed.breakdown[2] || 0, 1: seed.breakdown[1] || 0 };
  let total = Math.max(Number(seed.total) || 0, seed.reviews.length);
  const dbReviews = [];
  const pid = listing.property_id || listing.id || '';

  if (pid) {
    const { data: reviews, error } = await supabase
      .from('product_reviews')
      .select('*, profiles(full_name)')
      .eq('property_id', pid)
      .eq('is_approved', true)
      .order('created_at', { ascending: false });
    if (!error && reviews) {
      for (const r of reviews) {
        dbReviews.push({ ...r, name: r.profiles?.full_name || 'Anonymous', verified: r.is_verified_purchase });
        const s = Math.min(5, Math.max(1, Math.round(Number(r.rating) || 0)));
        breakdown[s]++;
        total++;
      }
    }
  }

  // Rating recomputed from the true combined breakdown so it stays honest when
  // real customer reviews change the mix.
  let weighted = 0;
  for (let s = 5; s >= 1; s--) weighted += s * breakdown[s];
  const computed = total ? weighted / total : 0;
  const displayRating = computed || Number(listing.rating) || 0;
  const displayCount = total;

  const summaryHtml = `
    <div class="flex flex-wrap items-center gap-4 sm:gap-6">
      <div class="flex items-center gap-3">
        <div class="text-4xl font-black text-gray-900">${displayRating > 0 ? displayRating.toFixed(1) : 'New'}</div>
        <div>
          <div class="flex gap-0.5">${ratingStars(displayRating, 'w-5 h-5')}</div>
          <div class="text-xs text-gray-500 mt-0.5">Customer Reviews</div>
        </div>
      </div>
      <div class="hidden sm:block w-px h-10 bg-gray-200"></div>
      <div class="flex flex-wrap gap-2">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Listing</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1.5 rounded-full"><i data-lucide="truck" class="w-3.5 h-3.5"></i> Fast Worldwide Delivery</span>
      </div>
    </div>`;
  if (summaryEl) summaryEl.innerHTML = summaryHtml;
  if (breakdownEl) breakdownEl.innerHTML = ratingsBreakdownHtml(listing, breakdown, displayCount);

  const all = [...dbReviews, ...seed.reviews];
  if (!all.length) {
    listEl.innerHTML = '<p class="text-gray-500 text-sm py-2">No reviews yet. Be the first to review this product!</p>';
    if (window.lucide) lucide.createIcons();
    return;
  }

  // Show the 3 newest reviews first, then let customers scroll through the
  // full list. New customer reviews appear at the very top (dbReviews are
  // merged before seeds). No review-count numbers are shown anywhere.
  const preview = all.slice(0, 3);
  listEl.innerHTML = preview.map(reviewItemHtml).join('');

  if (all.length > preview.length) {
    const wrap = document.createElement('div');
    wrap.className = 'mt-4 flex justify-center';
    wrap.innerHTML = `
      <button type="button" id="view-all-reviews-btn" class="btn-press inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition shadow-sm shadow-blue-500/20">
        View All Reviews
        <i data-lucide="chevron-down" class="w-4 h-4"></i>
      </button>`;
    listEl.appendChild(wrap);

    const btn = wrap.querySelector('#view-all-reviews-btn');
    let expanded = false;
    btn.addEventListener('click', () => {
      if (expanded) return;
      expanded = true;
      btn.disabled = true;
      listEl.innerHTML = all.map(reviewItemHtml).join('');
      if (window.lucide) lucide.createIcons();
      appendReviewsBackToTop(listEl);
    });
  }
  if (window.lucide) lucide.createIcons();
}

// Floating control so customers scrolling through the full review list can tap
// to return to the top of the Customer Reviews section.
function appendReviewsBackToTop(listEl) {
  if (!listEl || document.getElementById('reviews-back-top')) return;
  const back = document.createElement('div');
  back.id = 'reviews-back-top';
  back.className = 'mt-5 flex justify-center';
  back.innerHTML = `
    <button type="button" class="btn-press inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-bold py-2.5 px-5 rounded-full text-xs transition shadow-sm">
      <i data-lucide="chevron-up" class="w-4 h-4"></i> Back to top
    </button>`;
  listEl.appendChild(back);
  back.querySelector('button').addEventListener('click', () => {
    const sec = document.getElementById('reviews-section');
    if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  if (window.lucide) lucide.createIcons();
}

async function loadRecommendations(listing) {
  const section = document.getElementById('recommendations-section');
  const grid = document.getElementById('recommendations-grid');
  if (!section || !grid || !listing.id) return;
  const { data: recs, error: recErr } = await supabase
    .from('product_recommendations')
    .select('recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)')
    .eq('listing_id', listing.id)
    .order('score', { ascending: false })
    .limit(4);
  if (recErr) { console.error('Recommendations load failed:', recErr.message); section.classList.add('hidden'); return; }
  let items = (recs || []).map(r => r.showroom_listings).filter(Boolean);
  if (items.length < 4) {
    const { data: related } = await supabase
      .from('showroom_listings')
      .select('property_id, title, price, currency, images, listing_type')
      .eq('category', listing.category)
      .neq('id', listing.id)
      .eq('is_active', true)
      .order('rating', { ascending: false })
      .limit(4 - items.length);
    items = [...items, ...(related || [])];
  }
  if (items.length === 0) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');
  grid.innerHTML = items.map(p => {
    const img = (p.images && p.images[0]) || '/fallback.svg';
    const pprice = typeof p.price === 'number' ? p.price : parseFloat(p.price || 0);
    const cur = p.currency || 'USD';
    return `<a href="/details.html?id=${p.property_id}" class="block bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition group">
      <div class="aspect-square overflow-hidden bg-gray-100"><img src="${escapeHtml(img)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-gray-900 font-bold truncate">${escapeHtml(p.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${cur} ${pprice.toLocaleString()}</p></div>
    </a>`;
  }).join('');
}

function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

async function init() {
  const id = getListingId();
  if (!id) {
    document.getElementById('details-content').innerHTML = '<div class="text-center py-20 text-gray-500">Listing not found.</div>';
    return;
  }

  // Fast path — render the built-in listing INSTANTLY (no network wait) so the
  // page never sits on "Loading property details...". The live database rows
  // are fetched in the background and, when present, re-render over the static
  // version so admin edits (title, price, images, publish state) still win.
  const staticSource = () =>
    getTruckById(id) || getMotorhomeById(id) || getCarById(id) || getPhoneById(id) || findProductById(id);

  const renderListing = (l) => {
    cleanListing(l);
    document.title = `${l.title} | Weverse Online Shop`;
    // Built-in trucks/motorhomes/cars keep their specialist renderers (which
    // load related sections internally); any live database listing (and
    // phones/products/properties) use the main renderer + related sections.
    if (l === getTruckById(id)) renderTruck(l);
    else if (l === getMotorhomeById(id)) renderMotorhome(l);
    else if (l === getCarById(id)) renderCar(l);
    else { render(l); try { loadRelatedSections(l); } catch {} }
  };

  const staticListing = staticSource();
  if (staticListing) {
    renderListing(staticListing);
    // Hydrate with live DB data in the background (single shared fetch).
    loadDBListings().then(() => {
      const live = findListingById(id);
      if (live && live.property_id === id) {
        try { renderListing(live); } catch {}
      }
    });
    return;
  }

  // No built-in listing — resolve from the live database (properties are DB-only).
  await loadDBListings();
  const live = findListingById(id);
  if (live) {
    renderListing(live);
    return;
  }

  // The big extra-product catalog (~636 KB) is lazy: only fetched here, and only
  // if the id wasn't in the built-in list or the database.
  await loadExtraProducts();
  const extraProduct = findProductById(id);
  if (extraProduct) {
    renderListing(extraProduct);
    return;
  }

  // Deterministic catalog listings (W-XX-NNNN) resolve instantly.
  const [{ generateListingById }, { loadHiddenCatalogIds }] = await Promise.all([
    import('./catalog.js'),
    import('./catalog-hidden-store.js'),
  ]);
  await loadHiddenCatalogIds();
  const listing = generateListingById(id);
  if (!listing) {
    document.getElementById('details-content').innerHTML = '<div class="text-center py-20 text-gray-500">Listing not found.</div>';
    return;
  }
  cleanListing(listing);
  document.title = `${listing.title} | Weverse Online Shop`;
  render(listing);
  try { loadRelatedSections(listing); } catch {}
}

init();
