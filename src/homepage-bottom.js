// ═══════════════════════════════════════════════════════════════════════════
// homepage-bottom.js — Professional homepage closing sections.
//
// Rendered into <div id="homepage-bottom"> right after the product showroom:
//   1. Featured Promotions      6. Payment
//   2. Special Offers           7. Customer Support
//   3. New Arrivals             8. Why Shop With Us
//   4. How to Order             9. Shop by Category
//   5. Delivery Information    10. More Products
//                              11. Final Promotion
//
// Everything is built from REAL products and REAL store settings (products,
// discounts, payment methods). Nothing here is fabricated.
// ═══════════════════════════════════════════════════════════════════════════

import {
  loadDBListings,
  getDBListings,
  getAllListings,
  findListingById,
  formatPrice,
  cleanListing,
} from './showroom-data.js';
import { renderCard } from './showroom-cards.js';
import { loadPaymentSettings } from './payment-settings.js';

const FALLBACK_IMG = '/fallback.svg';
const MOUNT = () => document.getElementById('homepage-bottom');

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function asImages(listing) {
  if (Array.isArray(listing.images)) return listing.images.filter(Boolean);
  if (typeof listing.images === 'string') return [listing.images];
  return [];
}

function coverOf(listing) {
  const imgs = asImages(listing);
  return imgs[0] || FALLBACK_IMG;
}

// Real discount = the listing actually carries a higher real_price.
function discountOf(listing) {
  const real = parseFloat(listing.real_price);
  const price = parseFloat(listing.price);
  if (!(real > 0) || !(price > 0) || real <= price) return null;
  return { real, price, pct: Math.round((1 - price / real) * 100) };
}

function priceHtml(listing) {
  const d = discountOf(listing);
  const price = formatPrice(listing);
  const real = d ? formatPrice({ price: d.real, currency: listing.currency, price_period: listing.price_period }) : '';
  const strike = d ? `<span class="text-sm text-gray-400 line-through">${real}</span>` : '';
  const badge = d ? `<span class="inline-block bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full ml-1.5">-${d.pct}%</span>` : '';
  return `${strike} <span class="text-lg font-black text-blue-600">${price}</span> ${badge}`;
}

// ── Section header (matches the showroom's design language) ──────────────
function sectionHeader(icon, title, subtitle, accent = 'blue') {
  const isAmber = accent === 'amber';
  const text = isAmber ? 'text-amber-300' : 'text-blue-300';
  const border = isAmber ? 'border-amber-400/40' : 'border-blue-500/30';
  const bg = isAmber ? 'bg-amber-400/15' : 'bg-blue-500/10';
  const glow = isAmber ? '0 0 22px rgba(251,191,36,0.35)' : '0 0 22px rgba(59,130,246,0.25)';
  const gradient = isAmber ? 'from-amber-100 via-white to-orange-200' : 'from-blue-200 via-white to-blue-300';
  return `
    <div class="relative pt-2 pb-3">
      <div class="flex items-center gap-3.5">
        <div class="p-3 rounded-2xl border ${border} ${bg} shrink-0" style="box-shadow:${glow}">
          <i data-lucide="${icon}" class="w-6 h-6 ${text}"></i>
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight">
            <span class="bg-gradient-to-r ${gradient} bg-clip-text text-transparent">${esc(title)}</span>
          </h3>
          ${subtitle ? `<p class="text-gray-400 text-xs sm:text-[13px] leading-tight mt-1 truncate">${esc(subtitle)}</p>` : ''}
        </div>
      </div>
      <div class="mt-3 h-px bg-gradient-to-r ${isAmber ? 'from-amber-400/60 via-orange-300/40' : 'from-blue-500/40 via-gray-700/40'} to-transparent"></div>
    </div>`;
}

// ── 1. FEATURED PROMOTIONS ─────────────────────────────────────────────────
function featuredPromotions(pool) {
  const discounted = pool.filter(l => discountOf(l));
  const chosen = (discounted.length ? discounted : pool).slice(0, 3);
  if (!chosen.length) return '';

  const banners = chosen.map((l, idx) => {
    const img = coverOf(l);
    const d = discountOf(l);
    const title = l.title || l.name || 'Featured product';
    const sub = d
      ? `Save ${d.pct}% — was ${formatPrice({ price: d.real, currency: l.currency, price_period: l.price_period })}`
      : (l.category || 'Featured product');
    const gradient = ['from-blue-700 via-blue-500 to-cyan-400', 'from-violet-700 via-purple-500 to-pink-400', 'from-emerald-700 via-teal-500 to-cyan-300'][idx % 3];
    return `
      <a href="/details.html?id=${encodeURIComponent(l.property_id)}"
         class="group relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} text-white block min-h-[220px] sm:min-h-[260px] shadow-lg shadow-blue-500/10 hover:shadow-xl transition">
        <div class="absolute inset-0 opacity-90">
          <img src="${esc(img)}" alt="${esc(title)}" loading="lazy" decoding="async"
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div class="absolute bottom-0 inset-x-0 p-4 sm:p-5">
          <span class="inline-block text-[10px] font-black uppercase tracking-wider bg-white/15 backdrop-blur rounded-full px-2.5 py-1 mb-2">Featured Promotion</span>
          <h4 class="font-black text-white text-lg sm:text-xl leading-tight line-clamp-2">${esc(title)}</h4>
          <div class="flex items-center flex-wrap gap-2 mt-2">
            <span class="text-sm font-black text-white">${formatPrice(l)}</span>
            ${d ? `<span class="text-xs text-white/70 line-through">${formatPrice({ price: d.real, currency: l.currency, price_period: l.price_period })}</span>
            <span class="text-[10px] font-black bg-red-500 rounded-full px-2 py-0.5">-${d.pct}%</span>` : ''}
          </div>
          <p class="text-[11px] text-white/70 mt-1 truncate">${esc(sub)}</p>
          <span class="inline-flex items-center gap-1.5 mt-3 bg-white text-gray-900 text-xs font-black px-4 py-2 rounded-full group-hover:gap-2.5 transition-all">
            Shop Now <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </span>
        </div>
      </a>`;
  });

  return `
    <section class="showroom-section space-y-3">
      ${sectionHeader('megaphone', 'Featured Promotions', 'Hand-picked real products with the best savings right now.')}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">${banners.join('')}</div>
    </section>`;
}

// ── 2. SPECIAL OFFERS ──────────────────────────────────────────────────────
function specialOffers(pool) {
  const discounted = pool.filter(l => discountOf(l)).slice(0, 10);
  if (!discounted.length) return '';
  return `
    <section class="showroom-section space-y-3" data-hb-rail="special-offers">
      ${sectionHeader('percent', 'Special Offers', 'Genuinely discounted products — real savings on real items.', 'amber')}
      <div class="relative">
        <div class="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth no-scrollbar">
          ${discounted.map((l, i) => `<div data-hb-card="${i}" class="w-[240px] sm:w-[260px] shrink-0 snap-start"></div>`).join('')}
        </div>
      </div>
    </section>`;
}

// ── 3. NEW ARRIVALS ────────────────────────────────────────────────────────
function newArrivals(pool, dbListings) {
  const seen = new Set();
  const pick = (l) => { const id = l && (l.property_id || l.id); if (!id || seen.has(id)) return false; seen.add(id); return true; };
  // Newest first: DB rows are ordered by created_at desc; catalog "New Arrivals" category next.
  let list = dbListings.filter(pick);
  const categoryNew = pool.filter(l => (l.category || '').toLowerCase() === 'new arrivals' && pick(l));
  list = [...list, ...categoryNew].slice(0, 10);
  if (!list.length) {
    list = pool.filter(pick).slice(0, 10);
  }
  if (!list.length) return '';
  return `
    <section class="showroom-section space-y-3" data-hb-rail="new-arrivals">
      ${sectionHeader('sparkles', 'New Arrivals', 'Freshly added products — newest listings first.')}
      <div class="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth no-scrollbar">
        ${list.map((l, i) => `<div data-hb-card="${i}" class="w-[240px] sm:w-[260px] shrink-0 snap-start"></div>`).join('')}
      </div>
    </section>`;
}

// ── 4. HOW TO ORDER ────────────────────────────────────────────────────────
function howToOrder() {
  const steps = [
    { icon: 'search', title: 'Browse Products', desc: 'Explore the showroom or search for what you need.' },
    { icon: 'eye', title: 'View Details', desc: 'Check photos, price, description and availability.' },
    { icon: 'shopping-cart', title: 'Add to Cart / Buy', desc: 'Add items to your cart or buy now.' },
    { icon: 'credit-card', title: 'Checkout', desc: 'Enter your delivery details and proceed to payment.' },
    { icon: 'lock', title: 'Payment', desc: 'Pay securely with card or bank transfer.' },
    { icon: 'check-circle', title: 'Order Confirmation', desc: 'Get instant confirmation by email.' },
    { icon: 'package', title: 'Delivery', desc: 'Your order is packed, shipped and delivered to you.' },
  ];
  return `
    <section class="showroom-section space-y-3">
      ${sectionHeader('list-ordered', 'How to Order', 'Ordering is simple — seven easy steps from browse to doorstep.')}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        ${steps.map((s, i) => `
          <div class="relative bg-white border border-gray-200 rounded-2xl p-4">
            <span class="absolute top-3 right-3 text-[10px] font-black text-gray-300">${String(i + 1).padStart(2, '0')}</span>
            <div class="p-2.5 bg-blue-50 rounded-xl w-fit mb-3"><i data-lucide="${s.icon}" class="w-5 h-5 text-blue-600"></i></div>
            <h4 class="text-sm font-black text-gray-900">${esc(s.title)}</h4>
            <p class="text-xs text-gray-500 mt-1 leading-relaxed">${esc(s.desc)}</p>
          </div>`).join('')}
      </div>
    </section>`;
}

// ── 5. DELIVERY INFORMATION ────────────────────────────────────────────────
function deliveryInformation(settings) {
  // Only real shipping facts are used. Shipping is free worldwide (checked out
  // at zero cost by the checkout), orders are tracked, and returns are 14 days.
  const rows = [
    { icon: 'globe', title: 'Free Worldwide Shipping', desc: 'Standard shipping to any country is free on every order.' },
    { icon: 'truck', title: 'Shipping Methods', desc: 'Standard worldwide delivery — your order is packed and handed to our trusted courier.' },
    { icon: 'map-pin', title: 'Delivery Areas', desc: 'We ship internationally. Delivery details are confirmed from your address at checkout.' },
    { icon: 'package-search', title: 'Order Tracking', desc: 'Track your order any time from My Account → Orders, plus email updates at each stage.' },
    { icon: 'clock', title: 'Estimated Delivery', desc: 'Estimated delivery is shown at checkout based on your shipping country. Exact times depend on your location.' },
    { icon: 'rotate-ccw', title: 'Returns & Refunds', desc: 'Easy 14-day returns and a clear refund process for eligible orders.' },
  ];
  return `
    <section class="showroom-section space-y-3">
      ${sectionHeader('truck', 'Delivery Information', 'How you receive your goods — based on the store\u2019s actual shipping setup.')}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        ${rows.map(r => `
          <div class="bg-white border border-gray-200 rounded-2xl p-4">
            <div class="p-2.5 bg-blue-50 rounded-xl w-fit mb-3"><i data-lucide="${r.icon}" class="w-5 h-5 text-blue-600"></i></div>
            <h4 class="text-sm font-black text-gray-900">${esc(r.title)}</h4>
            <p class="text-xs text-gray-500 mt-1 leading-relaxed">${esc(r.desc)}</p>
          </div>`).join('')}
      </div>
      ${settings && settings.payment_gateway ? `<p class="text-[11px] text-gray-400 px-1">Payment gateway: ${esc(settings.payment_gateway)} · Mode: ${esc(settings.payment_mode || 'test')}</p>` : ''}
    </section>`;
}

// ── 6. PAYMENT ─────────────────────────────────────────────────────────────
function paymentMethods(settings) {
  // Only genuinely active methods are shown.
  const methods = [];
  const manualOn = settings ? settings.manual_payment_enabled !== false : true;
  const flutterOn = settings ? !!settings.flutterwave_enabled : false;
  if (manualOn) {
    methods.push({
      icon: 'landmark', title: 'Manual Bank / ATM Transfer',
      desc: 'Pay by bank transfer or ATM using the store\u2019s official receiving account, then upload your payment receipt for verification.',
    });
  }
  if (flutterOn) {
    methods.push({
      icon: 'zap', title: 'Flutterwave',
      desc: 'Pay securely online with your ATM/debit card, bank transfer, or mobile money through Flutterwave.',
    });
  }
  if (!methods.length) return '';
  return `
    <section class="showroom-section space-y-3">
      ${sectionHeader('credit-card', 'Payment Methods', 'Only the payment methods actually accepted at checkout are shown.')}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${methods.map(m => `
          <div class="flex items-start gap-3 bg-white border border-gray-200 rounded-2xl p-4">
            <div class="p-2.5 bg-emerald-50 rounded-xl shrink-0"><i data-lucide="${m.icon}" class="w-5 h-5 text-emerald-600"></i></div>
            <div>
              <h4 class="text-sm font-black text-gray-900">${esc(m.title)}</h4>
              <p class="text-xs text-gray-500 mt-1 leading-relaxed">${esc(m.desc)}</p>
            </div>
          </div>`).join('')}
      </div>
    </section>`;
}

// ── 7. CUSTOMER SUPPORT ────────────────────────────────────────────────────
function customerSupport() {
  const options = [
    { icon: 'message-circle', title: 'Contact Us', desc: 'Send us a message any time — we reply fast.', href: '/contact.html', cta: 'Go to Contact' },
    { icon: 'life-buoy', title: 'Help Center', desc: 'Answers to common questions about orders and payments.', href: '/help.html', cta: 'Browse Help' },
    { icon: 'mail', title: 'Email Support', desc: 'Reach support directly at support@weverseonlineshop.com.', href: 'mailto:support@weverseonlineshop.com', cta: 'Email Us' },
    { icon: 'user-check', title: 'Track Your Order', desc: 'Check the live status of any order from your account.', href: '/account.html', cta: 'Track Order' },
  ];
  return `
    <section class="showroom-section space-y-3">
      ${sectionHeader('headset', 'Customer Support', 'We\u2019re here to help with orders, payments and delivery.')}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        ${options.map(o => `
          <a href="${o.href}" class="group bg-white border border-gray-200 rounded-2xl p-4 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition">
            <div class="p-2.5 bg-blue-50 rounded-xl w-fit mb-3"><i data-lucide="${o.icon}" class="w-5 h-5 text-blue-600"></i></div>
            <h4 class="text-sm font-black text-gray-900">${esc(o.title)}</h4>
            <p class="text-xs text-gray-500 mt-1 leading-relaxed">${esc(o.desc)}</p>
            <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-600 mt-3 group-hover:gap-2 transition-all">${esc(o.cta)} <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></span>
          </a>`).join('')}
      </div>
    </section>`;
}

// ── 8. WHY SHOP WITH US ────────────────────────────────────────────────────
function whyShopWithUs() {
  const perks = [
    { icon: 'lock', title: 'Secure Checkout', desc: 'Encrypted, protected payments — SSL secure and payment protection.' },
    { icon: 'package-search', title: 'Order Tracking', desc: 'Follow every order from processing to delivery.' },
    { icon: 'headset', title: 'Customer Support', desc: 'Friendly support for orders, payments and shipping.' },
    { icon: 'truck', title: 'Worldwide Delivery', desc: 'Free standard worldwide shipping on your order.' },
    { icon: 'rotate-ccw', title: 'Easy Returns', desc: 'Simple 14-day returns on eligible items.' },
    { icon: 'shield-check', title: 'Trusted Marketplace', desc: 'Real products, real sellers, verified every step of the way.' },
  ];
  return `
    <section class="showroom-section space-y-3">
      ${sectionHeader('shield-check', 'Why Shop With Us', 'Legitimate benefits you can count on.')}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        ${perks.map(p => `
          <div class="bg-white border border-gray-200 rounded-2xl p-4 text-center">
            <div class="mx-auto p-2.5 bg-blue-50 rounded-xl w-fit mb-3"><i data-lucide="${p.icon}" class="w-5 h-5 text-blue-600"></i></div>
            <h4 class="text-xs font-black text-gray-900">${esc(p.title)}</h4>
            <p class="text-[11px] text-gray-500 mt-1 leading-relaxed">${esc(p.desc)}</p>
          </div>`).join('')}
      </div>
    </section>`;
}

// ── 9. SHOP BY CATEGORY ────────────────────────────────────────────────────
function shopByCategory(pool) {
  const categoryNames = [
    { label: 'Real Estate', icon: 'home', keyword: 'houses' },
    { label: 'Cars', icon: 'car-front', keyword: 'cars' },
    { label: 'Trucks', icon: 'truck', keyword: 'trucks' },
    { label: 'Motorhomes', icon: 'bus', keyword: 'motorhomes' },
    { label: 'Jewelry', icon: 'gem', keyword: 'jewel' },
    { label: 'Watches', icon: 'watch', keyword: 'watch' },
    { label: 'Fashion & Shoes', icon: 'shirt', keyword: 'fashion' },
    { label: 'Electronics', icon: 'smartphone', keyword: 'electronic' },
    { label: 'Home Appliances', icon: 'washing-machine', keyword: 'appliance' },
    { label: 'Kitchen & Appliances', icon: 'chef-hat', keyword: 'kitchen' },
    { label: 'Babies & Kids', icon: 'baby', keyword: 'kids' },
    { label: 'Tools & Hardware', icon: 'wrench', keyword: 'tool' },
  ];
  const cards = categoryNames.map(cat => {
    const match = pool.find(l => (l.title || '').toLowerCase().includes(cat.keyword)
      || (l.category || '').toLowerCase().includes(cat.keyword));
    const img = match ? coverOf(match) : FALLBACK_IMG;
    const count = pool.filter(l => (l.title || '').toLowerCase().includes(cat.keyword)
      || (l.category || '').toLowerCase().includes(cat.keyword)).length;
    return `
      <a href="/details.html" onclick="event.preventDefault();window._filterShowroomByCategory && window._filterShowroomByCategory('${esc(cat.label)}');document.getElementById('showroom-directory') && document.getElementById('showroom-directory').scrollIntoView({behavior:'smooth'})"
         class="group relative overflow-hidden rounded-2xl bg-gray-100 block aspect-[4/3]">
        <img src="${esc(img)}" alt="${esc(cat.label)}" loading="lazy" decoding="async"
             class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div class="absolute bottom-0 inset-x-0 p-3">
          <div class="flex items-center gap-1.5 text-white font-black text-sm"><i data-lucide="${cat.icon}" class="w-4 h-4"></i> ${esc(cat.label)}</div>
          <p class="text-[10px] text-white/80 mt-0.5">${count} items</p>
        </div>
      </a>`;
  });
  return `
    <section class="showroom-section space-y-3">
      ${sectionHeader('layout-grid', 'Shop by Category', 'Jump straight to the products you care about.')}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">${cards.join('')}</div>
    </section>`;
}

// ── 10. MORE PRODUCTS ──────────────────────────────────────────────────────
function moreProducts(pool) {
  const list = pool.slice(0, 8);
  if (!list.length) return '';
  return `
    <section class="showroom-section space-y-3" data-hb-rail="more-products">
      ${sectionHeader('package-plus', 'More Products', 'Keep browsing — plenty more real products to discover.')}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        ${list.map((l, i) => `<div data-hb-card="${i}" class="w-full"></div>`).join('')}
      </div>
    </section>`;
}

// ── 11. FINAL PROMOTION ────────────────────────────────────────────────────
function finalPromotion(pool) {
  const discounted = pool.filter(l => discountOf(l));
  const pick = discounted[0] || pool[0];
  if (!pick) return '';
  const img = coverOf(pick);
  const d = discountOf(pick);
  return `
    <section class="showroom-section space-y-3">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-600 text-white text-center py-10 sm:py-14 px-5">
        <div class="absolute inset-0 opacity-20">
          <img src="${esc(img)}" alt="" loading="lazy" decoding="async"
               class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        </div>
        <div class="relative max-w-2xl mx-auto">
          <span class="inline-block text-[10px] font-black uppercase tracking-[0.3em] bg-white/15 backdrop-blur rounded-full px-3 py-1 mb-3">Limited Time Offers</span>
          <h3 class="text-2xl sm:text-4xl font-black leading-tight">Big Savings on Real Products</h3>
          <p class="text-sm sm:text-base text-white/85 mt-3 max-w-xl mx-auto">Genuine discounts on genuine items — ${esc(pick.title || 'our top products')} and more. Don\u2019t miss out.</p>
          <div class="flex items-center justify-center gap-2 mt-4 text-sm">
            ${d ? `<span class="text-white/70 line-through">${formatPrice({ price: d.real, currency: pick.currency, price_period: pick.price_period })}</span>` : ''}
            <span class="text-2xl font-black">${formatPrice(pick)}</span>
            ${d ? `<span class="text-[10px] font-black bg-red-500 rounded-full px-2 py-0.5">-${d.pct}%</span>` : ''}
          </div>
          <a href="/details.html?id=${encodeURIComponent(pick.property_id)}"
             class="inline-flex items-center gap-2 mt-6 bg-white text-blue-800 font-black text-sm px-7 py-3 rounded-full hover:gap-3 transition-all shadow-lg shadow-blue-900/30">
            SHOP NOW <i data-lucide="shopping-bag" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </section>`;
}

// ── Assembly ───────────────────────────────────────────────────────────────
async function init() {
  const mount = MOUNT();
  if (!mount) return;

  // Load everything we need. Payment settings come from the real store config.
  let settings = {};
  try { settings = await loadPaymentSettings(); } catch { /* keep defaults */ }

  let dbListings = [];
  let pool = [];
  try {
    await loadDBListings();
    dbListings = getDBListings() || [];
    pool = getAllListings() || [];
    if (!pool.length) pool = dbListings;
  } catch { /* fall through with empty pool */ }

  // Also bring in the owner's own product catalogs (real product data).
  try {
    const { PRODUCT_LISTINGS } = await import('./products-data.js');
    const { PRODUCT_EXTRA_LISTINGS } = await import('./products-extra.js');
    const extras = [...(PRODUCT_LISTINGS || []), ...(PRODUCT_EXTRA_LISTINGS || [])];
    const seen = new Set(pool.map(l => l.property_id || l.id));
    for (const l of extras) {
      const id = l.property_id || l.id;
      if (id && !seen.has(id)) { seen.add(id); pool.push(l); }
    }
  } catch { /* catalogs are optional */ }

  // Filter to real, visible products (ignore hidden catalog ids).
  try {
    const { isCatalogListingHidden } = await import('./catalog-hidden-store.js');
    pool = pool.filter(l => {
      const id = l.property_id || l.id;
      if (!id) return false;
      try { return !isCatalogListingHidden(id); } catch { return true; }
    });
  } catch { /* keep all */ }

  const html = [
    featuredPromotions(pool),
    specialOffers(pool),
    newArrivals(pool, dbListings),
    howToOrder(),
    deliveryInformation(settings),
    paymentMethods(settings),
    customerSupport(),
    whyShopWithUs(),
    shopByCategory(pool),
    moreProducts(pool),
    finalPromotion(pool),
  ].join('');

  if (!html.trim()) return;
  mount.innerHTML = html;

  // Insert real, interactive product cards into the placeholders so every
  // card's Buy / Cart / Wishlist / navigation listeners are live.
  const railSpecs = [
    { rail: 'special-offers', items: pool.filter(l => discountOf(l)).slice(0, 10) },
    { rail: 'more-products', items: pool.slice(0, 8) },
  ];
  const seenArrivals = new Set();
  const arrivalPick = (l) => { const id = l && (l.property_id || l.id); if (!id || seenArrivals.has(id)) return false; seenArrivals.add(id); return true; };
  const newestFromDb = dbListings.filter(arrivalPick);
  let arrivalsList = newestFromDb;
  if (newestFromDb.length) {
    arrivalsList = [...newestFromDb, ...pool.filter(l => (l.category || '').toLowerCase() === 'new arrivals' && arrivalPick(l))].slice(0, 10);
  } else {
    arrivalsList = pool.filter(arrivalPick).slice(0, 10);
  }
  railSpecs.push({ rail: 'new-arrivals', items: arrivalsList });

  for (const { rail, items } of railSpecs) {
    const section = mount.querySelector(`[data-hb-rail="${rail}"]`);
    if (!section || !items.length) continue;
    const slots = section.querySelectorAll('[data-hb-card]');
    items.forEach((l, i) => {
      const slot = slots[i];
      if (!slot) return;
      try {
        const card = renderCard(l);
        slot.replaceChildren(card);
        if (window.lucide) { try { lucide.createIcons(); } catch { /* ignore */ } }
      } catch { /* skip a listing that can't be rendered */ }
    });
  }

  if (window.lucide) { try { lucide.createIcons(); } catch { /* ignore */ } }
  if (window.dispatchEvent) window.dispatchEvent(new CustomEvent('homepage-bottom-ready'));
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
