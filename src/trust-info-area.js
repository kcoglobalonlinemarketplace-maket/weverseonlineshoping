// trust-info-area.js — Professional trust & information area shown on EVERY
// page, right above the "Weverse Mobile App" banner. Contains:
//   1. A promotional hero whose background (image OR video) is chosen by the
//      admin in the "Promo & Backgrounds" panel (empty = built-in design).
//   2. A two-column Trust & Security strip.
//   3. Expandable, customer-friendly information sections (varied designs).
//   4. A Customer Reviews section with its own admin-chosen background.
//   5. A two-column footer (Company/Legal + Account/Support).

import { loadPromoBackgrounds, bgMediaLayer, DEFAULT_PROMO_BG } from './promo-backgrounds.js';
import { DEFAULT_BRAND_NAME, W_LOGO_SVG } from './brand.js';

const SITE_NAME = 'Weverse Online Shop';
const BRAND_CACHE_KEY = 'weverse_brand_v1';

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function readBrand() {
  try {
    const c = JSON.parse(localStorage.getItem(BRAND_CACHE_KEY) || '{}');
    const d = c.data && typeof c.data === 'object' ? c.data : c;
    if (d && typeof d === 'object' && (d.brand_name || d.site_name || d.brand_logo)) return d;
  } catch {}
  return {};
}

// ── 1. Promotional hero ──────────────────────────────────────────
function promoHeroHtml() {
  const brand = readBrand();
  const name = brand.brand_name || brand.site_name || DEFAULT_BRAND_NAME;
  return `
    <section class="relative overflow-hidden bg-slate-950 text-white">
      <!-- built-in design (shown when no admin media is set) -->
      <div class="absolute inset-0" style="background:
        radial-gradient(900px 480px at 82% 12%, rgba(37,99,235,.40), transparent 62%),
        radial-gradient(720px 420px at 8% 92%, rgba(6,182,212,.26), transparent 60%),
        linear-gradient(160deg,#0b1226 0%,#060c1c 55%,#071523 100%)"></div>
      <div class="absolute inset-0 opacity-[.07]" style="background-image:radial-gradient(#7dd3fc 1px, transparent 1px);background-size:24px 24px"></div>
      <!-- admin-chosen background (image or video) -->
      <div class="absolute inset-0" data-bg-slot="trust_promo"></div>

      <div class="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div class="max-w-2xl relative rounded-3xl bg-slate-950/55 border border-white/10 p-6 sm:p-8 md:p-10 backdrop-blur-md shadow-2xl shadow-slate-950/50">
          <span class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300 border border-cyan-400/30 bg-cyan-400/10 rounded-full px-3.5 py-1.5 mb-5">
            <i data-lucide="truck" class="w-3.5 h-3.5"></i> Worldwide Delivery
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.06] tracking-tight text-white">
            Premium shopping, delivered right to your door
          </h2>
          <p class="text-[15px] sm:text-base text-slate-200 mt-4 leading-relaxed max-w-xl">
            Every order is packed with care, tracked in real time, and shipped securely to customers in
            200+ countries worldwide — so shopping with ${esc(name)} is always fast, safe and worry-free.
          </p>
          <div class="flex flex-wrap items-center gap-3.5 mt-7">
            <a href="/#showroom-directory" class="inline-flex items-center gap-2 bg-white text-blue-900 font-black text-sm px-6 py-3.5 rounded-2xl shadow-xl shadow-slate-900/40 hover:scale-[1.03] active:scale-[.98] transition">
              Shop Now <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
            <a href="/account.html" class="inline-flex items-center gap-2 border border-white/25 bg-white/10 text-white text-sm font-bold px-6 py-3.5 rounded-2xl backdrop-blur hover:bg-white/15 transition">
              Track My Order <i data-lucide="package-search" class="w-4 h-4"></i>
            </a>
          </div>
          <div class="grid grid-cols-3 gap-2.5 mt-8 max-w-md">
            ${[
              { icon: 'globe', label: '200+ countries', sub: 'worldwide' },
              { icon: 'shield-check', label: 'Secure payments', sub: 'protected' },
              { icon: 'clock', label: '24/7 support', sub: 'always here' },
            ].map((s) => `
              <div class="bg-white/[.06] border border-white/10 rounded-2xl px-3 py-3.5 text-center backdrop-blur">
                <i data-lucide="${s.icon}" class="w-5 h-5 text-cyan-300 mx-auto"></i>
                <p class="text-[11px] font-black text-white mt-2">${s.label}</p>
                <p class="text-[9px] text-slate-400">${s.sub}</p>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </section>`;
}

// ── 2. Trust & Security (two side-by-side columns) ───────────────
function trustSecurityHtml() {
  const col = (items) => `
    <div class="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3.5">
      ${items.map((it) => `
        <div class="flex items-start gap-3">
          <div class="shrink-0 w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <i data-lucide="${it.icon}" class="w-5 h-5"></i>
          </div>
          <div class="min-w-0">
            <p class="text-[13px] font-black text-gray-900 leading-tight">${it.title}</p>
            <p class="text-[11px] text-gray-500 mt-0.5">${it.sub}</p>
          </div>
        </div>`).join('')}
    </div>`;
  return `
    <section class="bg-gray-50 border-y border-gray-200">
      <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-7 sm:py-9">
        <div class="grid grid-cols-2 gap-3 sm:gap-5">
          ${col([
            { icon: 'lock', title: 'SSL Secure', sub: 'Encrypted' },
            { icon: 'globe', title: 'Trusted Worldwide', sub: '200+ countries' },
            { icon: 'package-search', title: 'Order Tracking', sub: 'Real-time updates' },
          ])}
          ${col([
            { icon: 'shield-check', title: 'Secure Checkout', sub: 'Protected' },
            { icon: 'key-round', title: 'Privacy Protected', sub: 'Your data is safe' },
            { icon: 'headphones', title: '24/7 Support', sub: 'Always here' },
          ])}
        </div>
      </div>
    </section>`;
}

// ── 3. Expandable information sections ───────────────────────────
const ACCORDIONS = [
  {
    id: 'trust-shipping', icon: 'package', tone: 'blue', title: 'Shipping & Delivery',
    body: `
      <p class="text-sm text-gray-600 leading-relaxed">Every order is packed securely and shipped through trusted, fully-tracked couriers. Delivery times depend on your location:</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span><b>Standard:</b> 5–10 business days</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span><b>Express:</b> 2–4 business days</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span><b>Worldwide:</b> tracked delivery to 200+ countries</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400">You will receive a tracking number the moment your order ships.</p>`,
  },
  {
    id: 'trust-checkout', icon: 'lock', tone: 'emerald', title: 'Secure Checkout',
    body: `
      <p class="text-sm text-gray-600 leading-relaxed">Checkout is protected end-to-end with 256-bit SSL encryption. Your payment and personal details are processed securely and never shared with third parties.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>256-bit SSL encrypted connection</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Verified, trusted payment gateways</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>No card details stored on our servers</li>
      </ul>`,
  },
  {
    id: 'trust-returns', icon: 'rotate-ccw', tone: 'amber', title: 'Returns & Refunds',
    body: `
      <p class="text-sm text-gray-600 leading-relaxed">Not happy with your order? We make returns simple and fair.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>30-day return window on eligible items</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Refunds processed within 3–7 business days</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Start a return from your account, anytime</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400">See our <a class="text-blue-600 font-semibold hover:underline" href="/refund-policy.html">Refund Policy</a> for full details.</p>`,
  },
  {
    id: 'trust-payment', icon: 'credit-card', tone: 'violet', title: 'Payment Information',
    body: `
      <p class="text-sm text-gray-600 leading-relaxed">We accept a wide range of payment methods so everyone can shop with confidence:</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-violet-500"></span>Credit & debit cards (Visa, Mastercard, …)</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-violet-500"></span>Mobile money & bank transfer</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-violet-500"></span>Secure online payment gateways</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400">Available options are shown at checkout for your region.</p>`,
  },
  {
    id: 'trust-worldwide', icon: 'globe', tone: 'sky', title: 'Worldwide Delivery',
    body: `
      <p class="text-sm text-gray-600 leading-relaxed">From one local shop to homes around the world — we deliver to 200+ countries and territories through reliable international couriers.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>International tracking on every order</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>Careful customs & import handling</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>Transparent delivery fees at checkout</li>
      </ul>`,
  },
  {
    id: 'trust-tracking', icon: 'package-search', tone: 'indigo', title: 'Order Tracking',
    body: `
      <p class="text-sm text-gray-600 leading-relaxed">Follow your order from our shop to your door with real-time updates.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Instant tracking number when your order ships</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Live status in <b>My Account → Orders</b></li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Email & SMS updates at every step</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400"><a class="text-blue-600 font-semibold hover:underline" href="/account.html">Track an order now</a></p>`,
  },
  {
    id: 'trust-privacy', icon: 'shield', tone: 'rose', title: 'Privacy & Security',
    body: `
      <p class="text-sm text-gray-600 leading-relaxed">Your privacy matters to us. We protect your personal information with industry-standard security and never sell your data.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Encrypted storage of personal data</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Your data is never sold to third parties</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>You can request deletion at any time</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400">Read our <a class="text-blue-600 font-semibold hover:underline" href="/privacy.html">Privacy Policy</a>.</p>`,
  },
  {
    id: 'trust-faq', icon: 'message-circle-question', tone: 'slate', title: 'Frequently Asked Questions',
    body: `
      <div class="space-y-4">
        <div><p class="text-sm font-black text-gray-900">How do I track my order?</p>
          <p class="text-sm text-gray-600 mt-1">Open <b>My Account → Orders</b> and select the order to see live tracking, or follow the link sent to your email.</p></div>
        <div><p class="text-sm font-black text-gray-900">Can I change or cancel an order?</p>
          <p class="text-sm text-gray-600 mt-1">Yes — contact support within 24 hours of ordering and we will do our best to update or cancel it before shipping.</p></div>
        <div><p class="text-sm font-black text-gray-900">How long do refunds take?</p>
          <p class="text-sm text-gray-600 mt-1">Once your return is received, refunds are processed within 3–7 business days to your original payment method.</p></div>
        <div><p class="text-sm font-black text-gray-900">Is my payment information safe?</p>
          <p class="text-sm text-gray-600 mt-1">Absolutely. Checkout runs over a 256-bit SSL encrypted connection and your card details are never stored by us.</p></div>
      </div>`,
  },
  {
    id: 'trust-support', icon: 'headphones', tone: 'teal', title: 'Customer Support',
    body: `
      <p class="text-sm text-gray-600 leading-relaxed">Our support team is here for you 24/7, before and after every order.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-teal-500"></span><b>Email:</b> <a class="text-blue-600 hover:underline" href="mailto:support@weverseonlineshop.com">support@weverseonlineshop.com</a></li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-teal-500"></span><b>Chat:</b> the chat bubble in the corner of every page</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-teal-500"></span><b>Help Center:</b> guides & answers at <a class="text-blue-600 hover:underline" href="/help.html">our Help Center</a></li>
      </ul>`,
  },
  {
    id: 'trust-app', icon: 'smartphone', tone: 'cyan', title: 'Weverse Mobile App',
    body: `
      <p class="text-sm text-gray-600 leading-relaxed">Take the whole shop with you. Browse products, manage orders, save favorites and enjoy a smooth shopping experience on the go.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Shop products anywhere, anytime</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Track orders & get instant updates</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Exclusive app offers & new arrivals</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400">The Android app is in final review — the download link will appear here the moment it goes live.</p>`,
  },
];

const ACC_TONES = {
  blue: 'bg-blue-50 text-blue-600', emerald: 'bg-emerald-50 text-emerald-600',
  amber: 'bg-amber-50 text-amber-600', violet: 'bg-violet-50 text-violet-600',
  sky: 'bg-sky-50 text-sky-600', indigo: 'bg-indigo-50 text-indigo-600',
  rose: 'bg-rose-50 text-rose-600', slate: 'bg-slate-100 text-slate-600',
  teal: 'bg-teal-50 text-teal-600', cyan: 'bg-cyan-50 text-cyan-600',
};

function accordionCard(a) {
  const tone = ACC_TONES[a.tone] || ACC_TONES.blue;
  return `
    <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      <button type="button" data-acc="${a.id}" aria-expanded="false" class="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left hover:bg-gray-50 transition active:bg-gray-100">
        <span class="flex items-center gap-3 min-w-0">
          <span class="shrink-0 w-10 h-10 rounded-xl ${tone} flex items-center justify-center"><i data-lucide="${a.icon}" class="w-5 h-5"></i></span>
          <span class="text-[15px] sm:text-base font-black text-gray-900 tracking-tight">${a.title}</span>
        </span>
        <span data-acc-icon="${a.id}" class="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300">
          <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500"></i>
        </span>
      </button>
      <div data-acc-body="${a.id}" class="trust-acc-body" data-open="0">
        <div class="px-4 sm:px-5 pb-5 pt-1 border-t border-gray-100">${a.body}</div>
      </div>
    </div>`;
}

function accordionsHtml() {
  const firstSix = ACCORDIONS.slice(0, 6);
  const rest = ACCORDIONS.slice(6);
  const cols = (list) => list.map(accordionCard).join('');
  return `
    <section class="bg-white">
      <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><i data-lucide="info" class="w-5 h-5"></i></div>
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Shop with confidence</h2>
            <p class="text-xs text-gray-500 mt-0.5">Everything you need to know before you buy — tap any section to expand.</p>
          </div>
        </div>
        <div class="grid lg:grid-cols-2 gap-4">
          ${cols(firstSix)}
        </div>
        <div class="mt-4 grid lg:grid-cols-2 gap-4">
          ${cols(rest)}
        </div>
      </div>
    </section>`;
}

// ── 4. Customer Reviews & Trust (with admin background) ──────────
const TESTIMONIALS = [
  { name: 'Amina K.', country: 'Nigeria', text: 'My order arrived ahead of schedule and the quality was exactly as described. I shop here without any doubt.' },
  { name: 'Sarah & James', country: 'United States', text: 'Ordered for our whole family — tracking updates made it feel safe and reliable from checkout to delivery.' },
  { name: 'Priya S.', country: 'India', text: 'The customer support team answered my questions in minutes. Genuinely trustworthy shopping experience.' },
];

function reviewsHtml() {
  return `
    <section class="relative overflow-hidden bg-slate-950 text-white">
      <div class="absolute inset-0" style="background:
        radial-gradient(800px 420px at 15% 20%, rgba(16,185,129,.25), transparent 60%),
        linear-gradient(160deg,#071a16 0%,#060c1c 60%,#0b1226 100%)"></div>
      <div class="absolute inset-0 opacity-[.06]" style="background-image:radial-gradient(#34d399 1px, transparent 1px);background-size:22px 22px"></div>
      <div class="absolute inset-0" data-bg-slot="reviews"></div>

      <div class="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/20 text-emerald-300 flex items-center justify-center"><i data-lucide="star" class="w-5 h-5"></i></div>
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-white tracking-tight">Customer Reviews & Trust</h2>
            <p class="text-xs text-slate-400 mt-0.5">Real shoppers, real orders, real peace of mind.</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-3 gap-4">
          ${TESTIMONIALS.map((t) => `
            <div class="bg-white/[.07] border border-white/10 rounded-2xl p-4 backdrop-blur flex flex-col">
              <div class="flex items-center gap-1 mb-2.5">
                ${[1, 2, 3, 4, 5].map(() => '<i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>').join('')}
              </div>
              <p class="text-[13px] text-slate-200 leading-relaxed flex-1">“${esc(t.text)}”</p>
              <div class="flex items-center gap-2.5 mt-3.5">
                <span class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white text-[11px] font-black">${esc(t.name.split(' ')[0][0])}</span>
                <div>
                  <p class="text-xs font-black text-white">${esc(t.name)}</p>
                  <p class="text-[10px] text-slate-400">${esc(t.country)} · Verified buyer</p>
                </div>
              </div>
            </div>`).join('')}
        </div>

        <div class="mt-6 bg-white/[.06] border border-white/10 rounded-2xl overflow-hidden">
          <button type="button" data-acc="trust-reviews-more" aria-expanded="false" class="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-white/[.04] transition">
            <span class="flex items-center gap-2.5">
              <i data-lucide="message-circle-heart" class="w-5 h-5 text-emerald-300"></i>
              <span class="text-sm font-black text-white">Why thousands of families trust ${SITE_NAME}</span>
            </span>
            <span data-acc-icon="trust-reviews-more" class="shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300"><i data-lucide="chevron-down" class="w-5 h-5 text-slate-300"></i></span>
          </button>
          <div data-acc-body="trust-reviews-more" class="trust-acc-body" data-open="0">
            <div class="px-4 sm:px-5 pb-5 pt-1 border-t border-white/10 text-[13px] text-slate-300 leading-relaxed">
              <p class="mt-2">Every listing on ${SITE_NAME} comes with real product details, clear pricing, secure checkout and tracked worldwide delivery. We read and verify customer feedback continuously, and our team responds to every review — good or bad — to keep your shopping experience fair, honest and worry-free.</p>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                ${[
                  { icon: 'shield-check', v: '100%', l: 'secure checkout' },
                  { icon: 'globe', v: '200+', l: 'countries served' },
                  { icon: 'package-search', v: 'Real-time', l: 'order tracking' },
                  { icon: 'headphones', v: '24/7', l: 'human support' },
                ].map((s) => `
                  <div class="bg-white/[.05] border border-white/10 rounded-xl p-3 text-center">
                    <p class="text-base font-black text-emerald-300">${s.v}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${s.l}</p>
                  </div>`).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

// ── 5. Two-column footer ─────────────────────────────────────────
function footerLink(href, label, onClick) {
  return `<li><a href="${href}" ${onClick ? `onclick="${onClick}"` : ''} class="text-xs text-gray-600 hover:text-blue-600 transition">${label}</a></li>`;
}

function footerHtml() {
  const brand = readBrand();
  const name = brand.brand_name || brand.site_name || DEFAULT_BRAND_NAME;
  const logo = brand.brand_logo || brand.brand_header_logo || brand.brand_footer_logo || '/w-logo.svg';
  const slogan = brand.brand_slogan || brand.site_tagline || 'GLOBAL SHOPPING · WORLDWIDE DELIVERY';
  const supportEmail = 'support@weverseonlineshop.com';
  return `
    <footer class="bg-gray-50 border-t border-gray-200">
      <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-9 pb-7 border-b border-gray-200">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
              <img src="${esc(logo)}" alt="${esc(name)}" class="w-7 h-7 object-contain" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex'">
              <span style="display:none">${W_LOGO_SVG('w-7 h-7')}</span>
            </div>
            <div>
              <p class="text-sm font-black text-gray-900 leading-none">${esc(name)}</p>
              <p class="text-[10px] text-gray-500 mt-1 font-semibold tracking-wide">${esc(slogan)}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 text-[11px] font-bold text-gray-500">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200"><i data-lucide="lock" class="w-3.5 h-3.5 text-emerald-600"></i> SSL Secure</span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200"><i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-600"></i> Secure Checkout</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6 gap-y-9 sm:gap-x-10">
          <div>
            <h4 class="text-xs font-black text-gray-900 uppercase tracking-widest mb-3.5">Company</h4>
            <ul class="space-y-2.5">
              ${footerLink('/about.html', 'About Us')}
              ${footerLink('/team.html', 'Our Team')}
              ${footerLink('/contact.html', 'Contact Us')}
              ${footerLink('/help.html', 'Help Center')}
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-black text-gray-900 uppercase tracking-widest mb-3.5">Legal</h4>
            <ul class="space-y-2.5">
              ${footerLink('/privacy.html', 'Privacy Policy')}
              ${footerLink('/terms.html', 'Terms & Conditions')}
              ${footerLink('/refund-policy.html', 'Refund Policy')}
              ${footerLink('/shipping-policy.html', 'Shipping Policy')}
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-black text-gray-900 uppercase tracking-widest mb-3.5">Account</h4>
            <ul class="space-y-2.5">
              ${footerLink('/account.html', 'My Account')}
              ${footerLink('/auth.html', 'Sign In')}
              ${footerLink('/auth.html', 'Register / Create Account')}
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-black text-gray-900 uppercase tracking-widest mb-3.5">Support</h4>
            <ul class="space-y-2.5">
              ${footerLink('mailto:' + supportEmail, 'Email Support')}
              ${footerLink('/help.html', 'FAQ')}
              ${footerLink('/contact.html', 'Contact Us')}
            </ul>
          </div>
        </div>

        <p class="text-center text-[11px] text-gray-400 mt-10">© ${new Date().getFullYear()} ${esc(name)}. All rights reserved.</p>
      </div>
    </footer>`;
}

// ── Wiring ───────────────────────────────────────────────────────
function bindAccordions(root) {
  root.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-acc]');
    if (!btn) return;
    const id = btn.dataset.acc;
    const body = root.querySelector(`[data-acc-body="${id}"]`);
    const icon = root.querySelector(`[data-acc-icon="${id}"]`);
    if (!body) return;
    const open = body.dataset.open === '1';
    if (open) {
      body.style.maxHeight = '0px';
      body.style.opacity = '0';
      body.dataset.open = '0';
      icon.classList.remove('rotate-180');
      btn.setAttribute('aria-expanded', 'false');
    } else {
      body.style.maxHeight = body.scrollHeight + 'px';
      body.style.opacity = '1';
      body.dataset.open = '1';
      icon.classList.add('rotate-180');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
}

function applyBg(bg) {
  const slots = document.querySelectorAll('[data-bg-slot]');
  if (!slots.length) return;
  slots.forEach((el) => {
    const slot = el.dataset.bgSlot;
    if (slot === 'trust_promo') el.innerHTML = bgMediaLayer(bg.trust_promo_bg_image, bg.trust_promo_bg_video);
    else if (slot === 'reviews') el.innerHTML = bgMediaLayer(bg.reviews_bg_image, bg.reviews_bg_video);
  });
}

function injectStyle() {
  if (document.getElementById('trust-info-style')) return;
  const st = document.createElement('style');
  st.id = 'trust-info-style';
  st.textContent = `
    .trust-acc-body{overflow:hidden;max-height:0;opacity:0;transition:max-height .38s cubic-bezier(.2,.8,.2,1),opacity .28s ease}
    .trust-acc-body[data-open="1"]{opacity:1}`;
  document.head.appendChild(st);
}

async function init() {
  const mount = document.getElementById('trust-info-area');
  if (!mount) return;
  injectStyle();
  mount.innerHTML = [
    promoHeroHtml(),
    trustSecurityHtml(),
    accordionsHtml(),
    reviewsHtml(),
    footerHtml(),
  ].join('');
  if (window.lucide) { try { lucide.createIcons(); } catch {} }
  bindAccordions(mount);
  let bg = { ...DEFAULT_PROMO_BG };
  try { bg = await loadPromoBackgrounds(); } catch {}
  applyBg(bg);
  window.addEventListener('promo-backgrounds-updated', () => {
    loadPromoBackgrounds().then(applyBg).catch(() => {});
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();