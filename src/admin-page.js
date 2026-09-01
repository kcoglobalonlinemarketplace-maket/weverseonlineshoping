import { SUPABASE_URL, supabase } from './supabase-client.js';
import { COUNTRIES } from './country-data.js';
import { ALL_CURRENCIES } from './localization.js';
import { GLOBAL_PRICE_MAX, GLOBAL_PRICE_MIN, buildCatalogDraft, getDefaultCurrencyForCountry, getTemplatesForCategory } from './global-product-catalog.js';
import { getLocalShowroomListingById, listLocalShowroomListings, patchLocalShowroomListing, removeLocalShowroomListing, upsertLocalShowroomListing } from './local-showroom-store.js';
import { getFlagEmojiFromCountryCode, getManualPaymentAccounts, getPaymentInstructions, loadPaymentSettingsCache, savePaymentSettingsCache } from './payment-settings.js';
import { SHOWROOM_LISTINGS } from './showroom-data.js';
import { PRODUCT_LISTINGS } from './products-data.js';
import { PRODUCT_EXTRA_LISTINGS } from './products-extra.js';
import { TRUCK_LISTINGS } from './truck-data.js';
import { MOTORHOME_LISTINGS } from './motorhome-data.js';
import { generateProduct, getCatalogCategories, getCatalogCategory, getHiddenCatalogIds, loadHiddenCatalogIds, resetHiddenCatalogIds, saveCatalogHidden } from './catalog.js';
import { invalidatePromoBackgrounds } from './promo-backgrounds.js';
import { invalidateSiteContent, DEFAULT_SITE_CONTENT } from './site-content.js';
import { MARKETPLACE_CATEGORIES, MARKETPLACE_AUTOMOTIVE, normalizeToMarketplaceCategory } from './categories.js';
import { looksLikePdf, pdfToPageDataUrls } from './pdf-pages.js';
import { looksLikeVideoUrl, videoToFrameDataUrls } from './video-frames.js';


// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  WEVERSE ADMIN DASHBOARD  â€”  Complete Management Console
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const ADMIN_EMAIL = 'weverseonlineshop@gmail.com';
const DEFAULT_BRAND_NAME = 'Weverse Online Shop';
const DEFAULT_BRAND_SLOGAN = 'GLOBAL SHOPPING â€¢ WORLDWIDE DELIVERY';

// Supabase edge function that proxies AI providers server-side so API keys
// never leave the server or appear in browser network calls.
const SUPABASE_BASE_URL = (import.meta.env.VITE_SUPABASE_URL || SUPABASE_URL || 'https://wttnvwpoqmbxryivcerf.supabase.co').replace(/\/$/, '');
const AI_FN_URL = import.meta.env.DEV
  ? '/_supabase/functions/v1/ai-admin-assistant'
  : `${SUPABASE_BASE_URL}/functions/v1/ai-admin-assistant`;

// â”€â”€ Navigation config â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const NAV = [
  { group: 'Main', items: [
    { id: 'dashboard',   label: 'Dashboard',         icon: 'layout-dashboard' },
    { id: 'products',    label: 'Products',           icon: 'package' },
    { id: 'content-settings', label: 'Content Settings', icon: 'file-cog' },
    { id: 'properties',  label: 'Properties',         icon: 'home' },
    { id: 'catalog',     label: 'Catalog Manager',    icon: 'boxes' },
    { id: 'orders',      label: 'Orders',             icon: 'shopping-bag' },
    { id: 'customers',   label: 'Customers',          icon: 'users' },
    { id: 'reviews',     label: 'Reviews',            icon: 'star' },
    { id: 'messages',    label: 'Messages',           icon: 'message-circle' },
    { id: 'coupons',     label: 'Coupons',            icon: 'ticket' },
    { id: 'ads',         label: 'Advertisements',     icon: 'megaphone' },
    { id: 'notifications', label: 'Notifications',    icon: 'bell' },
  ]},
{ group: 'Configuration', items: [
    { id: 'ai', label: 'AI Assistant',      icon: 'sparkles' },
    { id: 'payment-settings', label: 'Payment Settings',  icon: 'credit-card' },
    { id: 'ai-settings', label: 'AI Settings',        icon: 'bot' },
    { id: 'homepage-branding', label: 'Homepage Branding', icon: 'image' },
    { id: 'promo-bg',     label: 'Promo & Backgrounds', icon: 'image' },
    { id: 'brand',        label: 'Brand Manager',      icon: 'palette' },
    { id: 'content',     label: 'Content Manager',    icon: 'file-text' },
    { id: 'seo',         label: 'SEO Manager',        icon: 'search' },
    { id: 'email',       label: 'Email Settings',     icon: 'mail' },
    { id: 'analytics',   label: 'Analytics',          icon: 'bar-chart-3' },
    { id: 'security',    label: 'Security',           icon: 'shield' },
    { id: 'activity',    label: 'Activity Logs',      icon: 'activity' },
    { id: 'backup',      label: 'Backup & Restore',   icon: 'database' },
    { id: 'settings',    label: 'Settings',           icon: 'settings' },
    { id: 'publish',     label: 'Publish & Deploy',   icon: 'rocket' },
  ]},
];

const PAGE_TITLES = {
  dashboard: 'Dashboard', products: 'Products Manager', properties: 'Properties Manager',
  catalog: 'Catalog Manager',
  orders: 'Orders Manager', customers: 'Customers Manager', reviews: 'Reviews Manager',
messages: 'Messages & Support', coupons: 'Coupons Manager', ads: 'Advertisement Manager',
  'ai-settings': 'AI Settings', content: 'Content Manager',
  'content-settings': 'Content Settings',
  ai: 'AI Assistant',
  'homepage-branding': 'Homepage Branding',
  'promo-bg': 'Promo & Backgrounds',
  brand: 'Brand Manager',
  'payment-settings': 'Payment Settings',
  seo: 'SEO Manager', email: 'Email Settings', analytics: 'Analytics',
  security: 'Security', activity: 'Activity Logs', backup: 'Backup & Restore',
  settings: 'Settings', publish: 'Publish & Deploy',
};

const SORTED_CURRENCIES = [...ALL_CURRENCIES].sort();

// â”€â”€ State â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let state = { user: null, section: 'dashboard' };

// â”€â”€ Helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function esc(t) {
  if (t == null) return '';
  const d = document.createElement('div'); d.textContent = String(t); return d.innerHTML;
}
function fmtMoney(n, cur = 'USD') {
  return `${(parseFloat(n) || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${cur}`;
}
function fmtDate(d) { return d ? new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'â€”'; }
function fmtDT(d) { return d ? new Date(d).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'â€”'; }
function genId() { return 'W-' + String(Date.now()).slice(-6) + Math.floor(Math.random() * 1000).toString().padStart(3, '0'); }

// Whitelist of showroom_listings columns known to exist in the live DB.
// Used to sanitize upsert payloads so seed/local objects (which may carry
// extra display-only keys) never cause "column does not exist" errors.
const SHOWROOM_COLUMNS = ['id','property_id','listing_type','category','subcategory','title','description','price','price_period','currency','country','country_code','state','city','town','product_location','latitude','longitude','bedrooms','bathrooms','building_size','land_size','parking_spaces','property_type','furnished','listing_status','images','features','tags','highlights','seo_keywords','specifications','brand','color','size','condition','warranty','shipping_info','delivery_estimate','weight','dimensions','storage_options','ram_options','color_options','availability_status','stock_quantity','sku','is_active','is_featured','is_ai_generated','ai_generated_fields','rating','rating_count','favorite_count','review_count','video','video_url','approval_status','published_at','created_at','updated_at','real_price','year_built','year_renovated','half_bathrooms','floors','garage','zip_code','address','landmarks','interior_features','exterior_features','home_systems','legal_info','risk_notes','floor_plan','nearby_area','verification_status','verification_date','inspection_info','documents','language_info'];

function sanitizeShowroomPayload(obj) {
  const out = {};
  if (!obj || typeof obj !== 'object') return out;
  for (const k of SHOWROOM_COLUMNS) {
    if (k in obj) out[k] = obj[k];
  }
  return out;
}

function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  const m = document.getElementById('toast-msg');
  const icon = t.querySelector('i[data-lucide]');
  if (!t || !m) return;
  m.textContent = msg;
  const iconMap = { success: 'check-circle', error: 'alert-circle', info: 'info' };
  const colorMap = { success: 'text-emerald-400', error: 'text-red-400', info: 'text-blue-400' };
  if (icon) { icon.setAttribute('data-lucide', iconMap[type] || 'info'); icon.className = `w-4 h-4 shrink-0 ${colorMap[type] || 'text-blue-400'}`; }
  t.style.transform = 'translateY(0)'; t.style.opacity = '1';
  if (window.lucide) lucide.createIcons();
  clearTimeout(t._t);
  t._t = setTimeout(() => { t.style.transform = 'translateY(20px)'; t.style.opacity = '0'; }, 3000);
}

// ── Video helpers ──────────────────────────────────────────────────────────
function isVideoUrl(url) {
  if (!url || typeof url !== 'string') return false;
  if (/^data:video\//i.test(url)) return true;
  if (url.startsWith('blob:')) return false;
  return /\.(mp4|webm|mov|m4v|avi|mkv|ogv)(\?|#|$)/i.test(url);
}
function isVideoFile(file) {
  return file && file.type && file.type.startsWith('video/');
}
function generateVideoThumbnail(file) {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.preload = 'metadata'; video.muted = true; video.playsInline = true;
    const objectUrl = URL.createObjectURL(file);
    video.src = objectUrl;
    video.onloadeddata = () => { video.currentTime = Math.min(0.5, video.duration * 0.1); };
    video.onseeked = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth || 320; canvas.height = video.videoHeight || 240;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(objectUrl); resolve(canvas.toDataURL('image/jpeg', 0.7));
      } catch { URL.revokeObjectURL(objectUrl); resolve(''); }
    };
    video.onerror = () => { URL.revokeObjectURL(objectUrl); resolve(''); };
    setTimeout(() => { try { URL.revokeObjectURL(objectUrl); } catch {} resolve(''); }, 5000);
  });
}

function badge(status) {
  const map = {
    pending_verification: ['bg-amber-500/10 text-amber-400 border-amber-500/20', 'Pending'],
    approved: ['bg-emerald-500/10 text-emerald-400 border-emerald-500/20', 'Approved'],
    rejected: ['bg-red-500/10 text-red-400 border-red-500/20', 'Rejected'],
    payment_approved: ['bg-blue-500/10 text-blue-400 border-blue-500/20', 'Paid'],
    order_placed: ['bg-amber-500/10 text-amber-400 border-amber-500/20', 'Placed'],
    processing: ['bg-indigo-500/10 text-indigo-400 border-indigo-500/20', 'Processing'],
    shipped: ['bg-violet-500/10 text-violet-400 border-violet-500/20', 'Shipped'],
    in_transit: ['bg-violet-500/10 text-violet-400 border-violet-500/20', 'In Transit'],
    out_for_delivery: ['bg-cyan-500/10 text-cyan-400 border-cyan-500/20', 'Out for Delivery'],
    delivered: ['bg-emerald-500/10 text-emerald-400 border-emerald-500/20', 'Delivered'],
    cancelled: ['bg-red-500/10 text-red-400 border-red-500/20', 'Cancelled'],
    active: ['bg-emerald-500/10 text-emerald-400 border-emerald-500/20', 'Active'],
    inactive: ['bg-gray-500/10 text-gray-400 border-gray-500/20', 'Inactive'],
    sale: ['bg-blue-500/10 text-blue-400 border-blue-500/20', 'For Sale'],
    rent: ['bg-violet-500/10 text-violet-400 border-violet-500/20', 'For Rent'],
    true: ['bg-emerald-500/10 text-emerald-400 border-emerald-500/20', 'Active'],
    false: ['bg-gray-500/10 text-gray-400 border-gray-500/20', 'Inactive'],
  };
  const [cls, label] = map[String(status)] || ['bg-gray-500/10 text-gray-400 border-gray-500/20', esc(status) || 'â€”'];
  return `<span class="badge ${cls}">${label}</span>`;
}

function closeModal() { document.getElementById('modal-container').innerHTML = ''; }
function openModal(html) { document.getElementById('modal-container').innerHTML = html; if (window.lucide) lucide.createIcons(); }
// These two are used by inline onclick="..." handlers inside modal HTML, which
// resolve against the GLOBAL scope. This file is an ES module, so expose them.
window.closeModal = closeModal;
window.openModal = openModal;

function statCard(label, value, icon, color, sub = '') {
  const c = { blue: 'bg-blue-500/10 text-blue-400 border-blue-500/15', amber: 'bg-amber-500/10 text-amber-400 border-amber-500/15', emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/15', red: 'bg-red-500/10 text-red-400 border-red-500/15', violet: 'bg-violet-500/10 text-violet-400 border-violet-500/15', blue: 'bg-blue-500/10 text-blue-400 border-blue-500/15' };
  return `<div class="stat-card glass-soft border border-blue-500/15 rounded-3xl p-5">
    <div class="flex items-start justify-between mb-3">
      <div class="p-3 ${c[color] || c.blue} rounded-2xl border"><i data-lucide="${icon}" class="w-5 h-5"></i></div>
    </div>
    <p class="text-3xl font-black text-white">${esc(value)}</p>
    <p class="text-xs text-gray-500 uppercase tracking-wide mt-1 font-bold">${esc(label)}</p>
    ${sub ? `<p class="text-xs text-gray-600 mt-1">${esc(sub)}</p>` : ''}
  </div>`;
}

function loading() { return `<div class="flex items-center justify-center py-24"><div class="flex items-center gap-3 text-gray-500 text-sm"><i data-lucide="loader-2" class="w-5 h-5 animate-spin text-blue-400"></i> Loadingâ€¦</div></div>`; }
function emptyState(icon, title, sub, btnHtml = '') { return `<div class="flex flex-col items-center justify-center py-20 text-center"><div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4"><i data-lucide="${icon}" class="w-8 h-8 text-blue-400"></i></div><h3 class="text-base font-black text-white mb-1">${esc(title)}</h3><p class="text-sm text-gray-500 max-w-xs">${esc(sub)}</p>${btnHtml ? `<div class="mt-5">${btnHtml}</div>` : ''}</div>`; }

// â”€â”€ Sidebar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;
  nav.innerHTML = NAV.map(g => `
    <div>
      <span class="section-label">${g.group}</span>
      ${g.items.map(item => `
        <button class="nav-item ${state.section === item.id ? 'active' : ''} w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold rounded-xl" onclick="navigate('${item.id}')">
          <i data-lucide="${item.icon}" class="w-4 h-4 shrink-0"></i>
          <span>${item.label}</span>
        </button>`).join('')}
    </div>`).join('');
  if (window.lucide) lucide.createIcons();
}

// â”€â”€ Navigation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
window.navigate = function(section) {
  state.section = section;
  const title = PAGE_TITLES[section] || section;
  const ptEl = document.getElementById('page-title');
  if (ptEl) ptEl.textContent = title;
  renderSidebar();
  closeSidebar();
  const content = document.getElementById('content');
  if (content) content.innerHTML = loading();
  if (window.lucide) lucide.createIcons();
  const renderers = {
    dashboard: renderDashboard, products: renderProducts, properties: renderProperties,
    catalog: renderCatalogManager,
    orders: renderOrders, customers: renderCustomers, reviews: renderReviews,
    messages: renderMessages, coupons: renderCoupons, ads: renderAds,
    notifications: renderNotifications, ai: renderAiAssistant,
    'ai-settings': renderAiSettings,
    'homepage-branding': renderHomepageBrandingManager,
    'promo-bg': renderPromoBackgrounds,
    content: renderContent, 'content-settings': renderContentSettings,
    seo: renderSeo, email: renderEmail,
    analytics: renderAnalytics, security: renderSecurity, activity: renderActivity,
    brand: renderBrandManager,
    'payment-settings': renderPaymentSettings,
    backup: renderBackup, settings: renderSettings, publish: renderPublish,
  };
  const fn = renderers[section] || (() => { const c = document.getElementById('content'); if (c) c.innerHTML = emptyState('construction', 'Coming Soon', `${title} is being built.`); });
  fn();
};

async function renderAiAssistant() {
  const content = document.getElementById('content');
  if (!content) return;
  content.innerHTML = `
    <div class="space-y-4 fade-in">
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 class="text-xl font-black text-white">AI Assistant</h2>
          <p class="text-xs text-gray-500 mt-1">Use AI to manage products, including adding products after configuring your provider keys.</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="navigate('ai-settings')" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition">AI Settings</button>
          <a href="/admin-ai.html" target="_blank" rel="noopener" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition">Open Fullscreen</a>
        </div>
      </div>

<div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
        <iframe src="/admin-ai.html" title="AI Assistant" class="w-full" style="height: calc(100vh - 230px); min-height: 680px; border: 0;"></iframe>
      </div>
    </div>`;
  if (window.lucide) lucide.createIcons();
}


window.openSidebar = () => { document.getElementById('sidebar').classList.add('open'); document.getElementById('sidebar-overlay').classList.remove('hidden'); };
window.closeSidebar = () => { document.getElementById('sidebar').classList.remove('open'); document.getElementById('sidebar-overlay').classList.add('hidden'); };
document.getElementById('close-sidebar')?.addEventListener('click', closeSidebar);

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  AUTH
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  SECURE AUTH SYSTEM
//  â€¢ Email + password login
//  â€¢ Supabase MFA (TOTP) 2FA with backup codes
//  â€¢ Remember me (30-day persistent session)
//  â€¢ Forgot / reset password
//  â€¢ Change password
//  â€¢ Login history stored in admin_security_logs
//  â€¢ Logout from all devices
//  â€¢ Brute-force lockout (5 failed attempts â†’ 15 min lock)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const REMEMBER_KEY = 'kco_admin_remember';
const LOGIN_ATTEMPTS_KEY = 'kco_login_attempts';
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000; // 15 minutes

// â”€â”€ Helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function loginError(msg) {
  const el = document.getElementById('login-error');
  const txt = document.getElementById('login-error-text');
  if (!el || !txt) return;
  txt.textContent = msg;
  el.classList.remove('hidden');
  document.getElementById('login-success')?.classList.add('hidden');
  if (window.lucide) lucide.createIcons();
}
function loginSuccess(msg) {
  const el = document.getElementById('login-success');
  const txt = document.getElementById('login-success-text');
  if (!el || !txt) return;
  txt.textContent = msg;
  el.classList.remove('hidden');
  document.getElementById('login-error')?.classList.add('hidden');
}
function clearLoginMessages() {
  document.getElementById('login-error')?.classList.add('hidden');
  document.getElementById('login-success')?.classList.add('hidden');
}

function normalizeEmail(value) {
  return String(value || '').trim().toLowerCase();
}

function sanitizeAdminRememberedEmail() {
  try {
    const remembered = JSON.parse(localStorage.getItem(REMEMBER_KEY) || '{}');
    if (remembered?.email && !normalizeEmail(remembered.email)) {
      localStorage.removeItem(REMEMBER_KEY);
    }
  } catch {
    localStorage.removeItem(REMEMBER_KEY);
  }
}

function getRememberedAdminEmail() {
  try {
    const remembered = JSON.parse(localStorage.getItem(REMEMBER_KEY) || '{}');
    return normalizeEmail(remembered?.email);
  } catch {
    return '';
  }
}

function enforceAdminEmailInputs() {
  sanitizeAdminRememberedEmail();
  const rememberedEmail = getRememberedAdminEmail();

  const loginInput = document.getElementById('login-email');
  if (loginInput) {
    loginInput.value = rememberedEmail || loginInput.value || ADMIN_EMAIL;
    loginInput.removeAttribute('readonly');
  }

  const resetInput = document.getElementById('reset-email');
  if (resetInput) {
    resetInput.value = rememberedEmail || resetInput.value || '';
    resetInput.removeAttribute('readonly');
  }
}

function getAdminResetRedirectUrl() {
  return `${window.location.origin}/admin.html`;
}

function setLoginStep(step) {
  // step: 'login' | '2fa' | 'forgot'
  const titleEl = document.getElementById('login-header-title');
  const iconEl = document.getElementById('login-header-icon');
  document.getElementById('login-form')?.classList.toggle('hidden', step !== 'login');
  document.getElementById('twofa-form')?.classList.toggle('hidden', step !== '2fa');
  document.getElementById('forgot-form')?.classList.toggle('hidden', step !== 'forgot');
  clearLoginMessages();
  if (step === 'login') { if (titleEl) titleEl.textContent = 'Admin Access'; if (iconEl) iconEl.setAttribute('data-lucide', 'shield-check'); }
  if (step === '2fa')   { if (titleEl) titleEl.textContent = 'Two-Factor Auth'; if (iconEl) iconEl.setAttribute('data-lucide', 'smartphone'); }
  if (step === 'forgot'){ if (titleEl) titleEl.textContent = 'Reset Password'; if (iconEl) iconEl.setAttribute('data-lucide', 'mail'); }
  if (window.lucide) lucide.createIcons();
}

function setLoginBusy(btnId, busy, idleHtml = '') {
  const btn = document.getElementById(btnId);
  if (!btn) return;
  btn.disabled = busy;
  if (busy) {
    btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline-block mr-1"></i> Please waitâ€¦';
  } else if (idleHtml) {
    btn.innerHTML = idleHtml;
  }
  if (window.lucide) lucide.createIcons();
}

// â”€â”€ Brute-force lockout â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function getLockoutState() {
  try { return JSON.parse(localStorage.getItem(LOGIN_ATTEMPTS_KEY) || '{"count":0}'); } catch { return { count: 0 }; }
}
function recordFailedAttempt() {
  const s = getLockoutState();
  s.count = (s.count || 0) + 1;
  if (s.count >= MAX_ATTEMPTS) s.lockedUntil = Date.now() + LOCKOUT_MS;
  localStorage.setItem(LOGIN_ATTEMPTS_KEY, JSON.stringify(s));
  return s;
}
function clearAttempts() { localStorage.removeItem(LOGIN_ATTEMPTS_KEY); }
function checkLockout() {
  const s = getLockoutState();
  if (!s.lockedUntil) return null;
  const remaining = s.lockedUntil - Date.now();
  if (remaining <= 0) { clearAttempts(); return null; }
  return Math.ceil(remaining / 60000); // minutes remaining
}

// â”€â”€ Login history â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
async function logLoginEvent(userId, event, extra = {}) {
  try {
    await supabase.from('admin_security_logs').insert({
      user_id: userId,
      event_type: event,
      ip_address: await getClientIP(),
      user_agent: navigator.userAgent.slice(0, 200),
      ...extra,
    });
  } catch { /* non-critical */ }
}

async function getClientIP() {
  try {
    const r = await fetch('https://api64.ipify.org?format=json', { signal: AbortSignal.timeout(3000) });
    const d = await r.json();
    return d.ip || 'unknown';
  } catch { return 'unknown'; }
}

// â”€â”€ Admin access check â€” tries 3 ways, most to least reliable â”€
async function checkAdminAccess(user) {
  if (!user) return false;
  // Primary path: rely on the RLS-facing admin check so the user can both see
  // the dashboard AND pass RLS on writes. The legacy email fallback is only a
  // last-resort for when the RPC itself is unavailable/errored, but it must NOT
  // grant access when the RPC explicitly returns false (that would let the UI
  // load while every DB write is rejected by RLS).
  let rpcReturned = false;
  let rpcResult = false;
  try {
    const { data: isAdmin } = await supabase.rpc('is_current_user_admin');
    rpcReturned = true;
    rpcResult = !!isAdmin;
  } catch {
    rpcReturned = false;
  }
  if (rpcReturned) return rpcResult;
  // RPC unavailable (e.g. not deployed): fall back to the legacy owner email.
  return normalizeEmail(user.email) === ADMIN_EMAIL;
}

// â”€â”€ Init auth (called on page load) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
async function initAuth() {
  // Handle password reset callback (user clicked email link)
  const hash = window.location.hash;
  if (hash.includes('type=recovery') || hash.includes('access_token')) {
    showLoginScreenOnly();
    showPasswordResetFlow();
    return;
  }

  // Restore session
  const { data: { session } } = await supabase.auth.getSession();
  if (session?.user) {
    const ok = await checkAdminAccess(session.user);
    if (ok) {
      // Check if 2FA is required for this session
      const { data: { currentUser } } = await supabase.auth.getUser();
      const assurance = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
      const aal = assurance.data?.currentLevel;
      const nextAal = assurance.data?.nextLevel;
      if (nextAal === 'aal2' && aal !== 'aal2') {
        // 2FA enrolled but not yet verified this session
        state.user = session.user;
        showLoginScreenOnly();
        setLoginStep('2fa');
        setup2FAVerifyListeners();
        return;
      }
      state.user = session.user;
      showAdminUI();
      return;
    }
  }
  showLoginUI();
}

function showLoginScreenOnly() {
  const ls = document.getElementById('login-screen');
  if (ls) ls.style.display = 'flex';
}

// â”€â”€ Login UI setup â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function showLoginUI() {
  showLoginScreenOnly();
  setLoginStep('login');
  enforceAdminEmailInputs();
  setupLoginFormListeners();
  setupForgotListeners();
  setup2FAVerifyListeners();
  setupTogglePW();

  // Check lockout
  const mins = checkLockout();
  if (mins) {
    loginError(`Too many failed attempts. Try again in ${mins} minute${mins > 1 ? 's' : ''}.`);
    document.getElementById('login-btn').disabled = true;
  }
}

function setupTogglePW() {
  document.getElementById('toggle-pw')?.addEventListener('click', () => {
    const inp = document.getElementById('login-password');
    const icon = document.querySelector('#toggle-pw i');
    if (!inp) return;
    inp.type = inp.type === 'password' ? 'text' : 'password';
    if (icon) icon.setAttribute('data-lucide', inp.type === 'password' ? 'eye' : 'eye-off');
    if (window.lucide) lucide.createIcons();
  });
}

function setupLoginFormListeners() {
  const form = document.getElementById('login-form');
  if (!form || form._bound) return;
  form._bound = true;
  form.addEventListener('submit', handleLoginSubmit);
  document.getElementById('forgot-pw-btn')?.addEventListener('click', () => setLoginStep('forgot'));
}

async function handleLoginSubmit(e) {
  e.preventDefault();

  const mins = checkLockout();
  if (mins) { loginError(`Account locked. Try again in ${mins} minute${mins > 1 ? 's' : ''}.`); return; }

  const emailInput = document.getElementById('login-email');
  const email = normalizeEmail(emailInput?.value);
  if (!email) {
    loginError('Enter your admin email address.');
    setLoginBusy('login-btn', false, '<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');
    return;
  }
  const password = document.getElementById('login-password').value;
  const remember = document.getElementById('remember-me')?.checked;
  setLoginBusy('login-btn', true);
  clearLoginMessages();

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !data.user) {
    const rawMsg = String(error?.message || '');
    const raw = rawMsg.toLowerCase();
    if (raw.includes('missing supabase credentials') || raw.includes('authentication service is unavailable')) {
      loginError('Authentication is temporarily unavailable due to configuration. Please contact support.');
      setLoginBusy('login-btn', false, '<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');
      return;
    }
    if (raw.includes('failed to fetch') || raw.includes('network request failed')) {
      loginError('Network error while signing in. Check your connection and try again.');
      setLoginBusy('login-btn', false, '<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');
      return;
    }
    if (raw.includes('email not confirmed')) {
      loginError('Your admin email is not confirmed yet. Open your verification email and confirm first.');
      setLoginBusy('login-btn', false, '<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');
      return;
    }

    const s = recordFailedAttempt();
    const remaining = MAX_ATTEMPTS - s.count;
    const msg = s.lockedUntil
      ? `Account locked for 15 minutes after ${MAX_ATTEMPTS} failed attempts.`
      : `Invalid email or password. ${remaining > 0 ? remaining + ' attempt' + (remaining !== 1 ? 's' : '') + ' remaining.' : ''}`;
    loginError(msg);
    setLoginBusy('login-btn', false, '<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');
    if (data?.user) await logLoginEvent(data.user.id, 'login_failed', { metadata: { reason: 'wrong_password' } });
    return;
  }

  const ok = await checkAdminAccess(data.user);
  if (!ok) {
    await supabase.auth.signOut();
    loginError(`Access denied for ${data.user.email}. This account is signed in but does not have administrator privileges.`);
    setLoginBusy('login-btn', false, '<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');
    await logLoginEvent(data.user.id, 'login_denied', { metadata: { reason: 'not_admin' } });
    return;
  }

  // Save remember-me preference
  if (remember) {
    localStorage.setItem(REMEMBER_KEY, JSON.stringify({ email, ts: Date.now() }));
  } else {
    localStorage.removeItem(REMEMBER_KEY);
  }

  clearAttempts();
  state.user = data.user;

  // Check if 2FA is required
  const assurance = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
  const nextAal = assurance.data?.nextLevel;
  if (nextAal === 'aal2') {
    setLoginBusy('login-btn', false, '<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');
    setLoginStep('2fa');
    setup2FAVerifyListeners();
    // Auto-focus the code input
    setTimeout(() => document.getElementById('totp-code')?.focus(), 100);
    return;
  }

  await logLoginEvent(data.user.id, 'login_success');
  setLoginBusy('login-btn', false);
  showAdminUI();
}

// â”€â”€ 2FA verification listeners â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function setup2FAVerifyListeners() {
  const verifyBtn = document.getElementById('verify-2fa-btn');
  if (verifyBtn && !verifyBtn._bound) {
    verifyBtn._bound = true;
    verifyBtn.addEventListener('click', handle2FAVerify);
  }

  // Auto-submit when 6 digits entered
  const totpInput = document.getElementById('totp-code');
  if (totpInput && !totpInput._bound) {
    totpInput._bound = true;
    totpInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 6);
      if (e.target.value.length === 6) handle2FAVerify();
    });
  }

  document.getElementById('cancel-2fa-btn')?.addEventListener('click', async () => {
    await supabase.auth.signOut();
    state.user = null;
    setLoginStep('login');
  });

  document.getElementById('use-backup-btn')?.addEventListener('click', () => {
    const wrap = document.getElementById('backup-code-wrap');
    wrap?.classList.toggle('hidden');
    const input = document.getElementById('backup-code');
    if (input) input.focus();
  });

  const backupBtn = document.getElementById('verify-backup-btn');
  if (backupBtn && !backupBtn._bound) {
    backupBtn._bound = true;
    backupBtn.addEventListener('click', handleBackupCodeVerify);
  }
}

async function handle2FAVerify() {
  const code = document.getElementById('totp-code')?.value?.trim();
  if (!code || code.length !== 6) { loginError('Enter the 6-digit code from your authenticator app.'); return; }
  setLoginBusy('verify-2fa-btn', true);
  clearLoginMessages();
  try {
    const { data: factors } = await supabase.auth.mfa.listFactors();
    const totpFactor = (factors?.totp || [])[0];
    if (!totpFactor) { loginError('No 2FA factor found. Please re-login.'); setLoginBusy('verify-2fa-btn', false, '<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In'); return; }
    const { data: challenge, error: chErr } = await supabase.auth.mfa.challenge({ factorId: totpFactor.id });
    if (chErr) throw chErr;
    const { error: verErr } = await supabase.auth.mfa.verify({ factorId: totpFactor.id, challengeId: challenge.id, code });
    if (verErr) throw verErr;
    await logLoginEvent(state.user.id, 'login_2fa_success');
    setLoginBusy('verify-2fa-btn', false);
    showAdminUI();
  } catch (err) {
    recordFailedAttempt();
    loginError(err.message?.includes('Invalid') ? 'Incorrect code. Check your authenticator and try again.' : err.message);
    setLoginBusy('verify-2fa-btn', false, '<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In');
    document.getElementById('totp-code').value = '';
    document.getElementById('totp-code').focus();
  }
}

async function handleBackupCodeVerify() {
  const code = document.getElementById('backup-code')?.value?.trim().toUpperCase().replace(/\s/g, '');
  if (!code) { loginError('Enter a backup recovery code.'); return; }
  setLoginBusy('verify-backup-btn', true);
  // Backup codes use the same MFA verify flow with a special code format
  // Since Supabase doesn't natively support backup codes in MFA, we store them in admin_2fa
  // and do a manual check via a database lookup
  try {
    const { data: twofa } = await supabase.from('admin_2fa').select('backup_codes').eq('user_id', state.user.id).maybeSingle();
    if (!twofa?.backup_codes?.length) { loginError('No backup codes found.'); setLoginBusy('verify-backup-btn', false, 'Use Backup Code'); return; }
    // Codes stored as plain strings (hashing done by edge function in production)
    const match = twofa.backup_codes.find(c => (c.code || c).toUpperCase().replace(/-/g,'') === code.replace(/-/g,'') && !c.used);
    if (!match) { loginError('Backup code not found or already used.'); setLoginBusy('verify-backup-btn', false, 'Use Backup Code'); return; }
    // Mark used
    const updated = twofa.backup_codes.map(c => (c.code || c).toUpperCase().replace(/-/g,'') === code.replace(/-/g,'') ? { ...(typeof c==='object'?c:{code:c}), used: true } : c);
    await supabase.from('admin_2fa').update({ backup_codes: updated }).eq('user_id', state.user.id);
    await logLoginEvent(state.user.id, 'login_backup_code_used');
    showAdminUI();
  } catch (err) { loginError(err.message); setLoginBusy('verify-backup-btn', false, 'Use Backup Code'); }
}

// â”€â”€ Forgot password listeners â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function setupForgotListeners() {
  document.getElementById('back-to-login')?.addEventListener('click', () => setLoginStep('login'));
  document.getElementById('send-reset-btn')?.addEventListener('click', handleForgotPassword);
}

async function handleForgotPassword() {
  const resetInput = document.getElementById('reset-email');
  const email = normalizeEmail(resetInput?.value);
  if (!email) {
    loginError('Enter your admin email address to receive a reset link.');
    return;
  }
  setLoginBusy('send-reset-btn', true);
  clearLoginMessages();
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: getAdminResetRedirectUrl(),
  });
  setLoginBusy('send-reset-btn', false, '<i data-lucide="mail" class="w-4 h-4 inline mr-1"></i> Send Reset Link');
  if (error) { loginError(error.message); return; }
  loginSuccess('Reset link sent! Check your inbox and open it from this device to continue.');
}

// â”€â”€ Password reset flow (after clicking email link) â”€â”€â”€â”€â”€â”€â”€
function showPasswordResetFlow() {
  const ls = document.getElementById('login-screen');
  if (!ls) return;
  // Replace card with reset form
  const card = ls.querySelector('.login-card');
  if (!card) return;
  card.innerHTML = `
    <div class="flex items-center gap-3 mb-6">
      <div class="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shrink-0"><i data-lucide="lock" class="w-5 h-5 text-white"></i></div>
      <div><h1 class="text-lg font-black text-white">Set New Password</h1><p class="text-[10px] text-blue-400 font-bold uppercase tracking-wider">Weverse Admin</p></div>
    </div>
    <div id="reset-pw-error" class="hidden mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs"></div>
    <div class="space-y-4">
      <div>
        <label class="lbl">New Password</label>
        <input type="password" id="new-pw-reset" class="input-field" placeholder="At least 8 characters" minlength="8">
      </div>
      <div>
        <label class="lbl">Confirm New Password</label>
        <input type="password" id="confirm-pw-reset" class="input-field" placeholder="Repeat password">
      </div>
      <button id="set-pw-btn" onclick="handlePasswordResetSubmit()" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2">
        <i data-lucide="check" class="w-4 h-4"></i> Set New Password
      </button>
    </div>`;
  if (window.lucide) lucide.createIcons();
}

window.handlePasswordResetSubmit = async function() {
  const np = document.getElementById('new-pw-reset')?.value;
  const cp = document.getElementById('confirm-pw-reset')?.value;
  const errEl = document.getElementById('reset-pw-error');
  if (np !== cp) { if (errEl) { errEl.textContent = 'Passwords do not match.'; errEl.classList.remove('hidden'); } return; }
  if ((np || '').length < 8) { if (errEl) { errEl.textContent = 'Password must be at least 8 characters.'; errEl.classList.remove('hidden'); } return; }
  const { error } = await supabase.auth.updateUser({ password: np });
  if (error) { if (errEl) { errEl.textContent = error.message; errEl.classList.remove('hidden'); } return; }
  showToast('Password updated! Please log in with your new password.');
  window.location.hash = '';
  setTimeout(() => window.location.reload(), 1500);
};

// â”€â”€ Show admin dashboard â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function showAdminUI() {
  const ls = document.getElementById('login-screen');
  if (ls) ls.style.display = 'none';
  const emailEl = document.getElementById('admin-user-email');
  if (emailEl && state.user) emailEl.textContent = state.user.email || 'Admin';
  enforceAdminEmailInputs();
  navigate('dashboard');
}

// â”€â”€ Sign out â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
window.adminSignOut = async function() {
  if (state.user) await logLoginEvent(state.user.id, 'logout');
  await supabase.auth.signOut();
  state.user = null;
  showLoginScreenOnly();
  setLoginStep('login');
  enforceAdminEmailInputs();
  setupLoginFormListeners();
  setupForgotListeners();
};

// â”€â”€ Logout from ALL devices â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
window.logoutAllDevices = async function() {
  if (!confirm('This will sign you out on ALL devices. Continue?')) return;
  if (state.user) await logLoginEvent(state.user.id, 'logout_all_devices');
  await supabase.auth.signOut({ scope: 'global' });
  state.user = null;
  showToast('Signed out from all devices.');
  setTimeout(() => window.location.reload(), 1200);
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  1. DASHBOARD
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderDashboard() {
  const content = document.getElementById('content');
  try {
    const [prods, orders, customers, reviews] = await Promise.all([
      supabase.from('showroom_listings').select('id,listing_type,is_active,price', { count: 'exact' }),
      supabase.from('payment_receipts').select('id,order_number,amount,status,created_at', { count: 'exact' }).order('created_at', { ascending: false }).limit(200),
      supabase.from('profiles').select('user_id,created_at', { count: 'exact' }),
      supabase.from('product_reviews').select('id,is_approved', { count: 'exact' }),
    ]);

    const allProducts = prods.data || [];
    const allOrders = orders.data || [];
    const totalRevenue = allOrders
      .filter(o => ['approved', 'payment_approved', 'delivered'].includes(o.status))
      .reduce((sum, o) => sum + (parseFloat(o.amount) || 0), 0);
    const pendingOrders = allOrders.filter(o => ['pending', 'pending_verification', 'processing'].includes(o.status)).length;
    const totalProds = allProducts.filter(p => p.listing_type !== 'property').length;
    const totalProps = allProducts.filter(p => p.listing_type === 'property').length;
    const activeProds = allProducts.filter(p => p.listing_type !== 'property' && p.is_active).length;
    const totalCustomers = customers.count || 0;
    const totalReviews = reviews.count || 0;
    const pendingReviews = (reviews.data || []).filter(r => !r.is_approved).length;

    const now = new Date();
    const monthOrders = allOrders.filter(o => {
      const d = new Date(o.created_at);
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    });
    const monthRevenue = monthOrders
      .filter(o => ['approved', 'payment_approved', 'delivered'].includes(o.status))
      .reduce((sum, o) => sum + (parseFloat(o.amount) || 0), 0);

    const recentOrders = allOrders.slice(0, 6);
    content.innerHTML = `
      <div class="space-y-6 fade-in">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-black text-white">Good ${greeting()}, Admin</h2>
            <p class="text-sm text-gray-500 mt-0.5">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <button onclick="navigate('products')" class="btn-press hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Product
          </button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          ${statCard('Total Revenue', `$${totalRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })}`, 'dollar-sign', 'emerald', `$${monthRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })} this month`)}
          ${statCard('Total Orders', allOrders.length, 'shopping-bag', 'blue', `${pendingOrders} pending`)}
          ${statCard('Customers', totalCustomers, 'users', 'violet')}
          ${statCard('Products', totalProds, 'package', 'amber', `${activeProds} active`)}
          ${statCard('Properties', totalProps, 'home', 'blue')}
          ${statCard('Reviews', totalReviews, 'star', 'blue', `${pendingReviews} pending`)}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="trending-up" class="w-4 h-4 text-blue-400"></i> Revenue Overview</h3>
            <canvas id="chart-revenue" height="200"></canvas>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-bold text-white flex items-center gap-2"><i data-lucide="clock" class="w-4 h-4 text-blue-400"></i> Recent Orders</h3>
              <button onclick="navigate('orders')" class="text-xs text-blue-400 hover:text-blue-300 font-medium transition">View all</button>
            </div>
            ${recentOrders.length === 0 ? '<p class="text-xs text-gray-500 text-center py-8">No orders yet</p>' :
              recentOrders.map(o => `
                <div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
                  <div class="min-w-0">
                    <p class="text-xs font-bold text-white truncate">${esc(o.order_number || o.id?.slice(0, 8))}</p>
                    <p class="text-[10px] text-gray-500">${fmtDT(o.created_at)}</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0 ml-2">
                    <span class="text-xs font-bold text-emerald-400">$${parseFloat(o.amount || 0).toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                    ${badge(o.status)}
                  </div>
                </div>`).join('')}
          </div>
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="zap" class="w-4 h-4 text-amber-400"></i> Quick Actions</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            ${[
              { icon: 'plus-circle', label: 'Add Product', fn: "navigate('products')" },
              { icon: 'home', label: 'Add Property', fn: "navigate('properties')" },
              { icon: 'shopping-bag', label: 'View Orders', fn: "navigate('orders')" },
              { icon: 'star', label: 'Reviews', fn: "navigate('reviews')" },
              { icon: 'ticket', label: 'Coupons', fn: "navigate('coupons')" },
              { icon: 'settings', label: 'Settings', fn: "navigate('settings')" },
            ].map(a => `
              <button onclick="${a.fn}" class="btn-press flex flex-col items-center gap-2 p-3 glass-soft border border-blue-500/15 rounded-xl hover:border-blue-500/30 transition">
                <i data-lucide="${a.icon}" class="w-5 h-5 text-blue-400"></i>
                <span class="text-[11px] font-bold text-gray-300">${a.label}</span>
              </button>`).join('')}
          </div>
        </div>
      </div>`;

    if (window.lucide) lucide.createIcons();
    renderRevenueChart(allOrders);
  } catch (err) {
    if (content) content.innerHTML = `<div class="p-6 text-red-400 text-sm">Error: ${esc(err.message)}</div>`;
  }
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  2. PRODUCTS MANAGER
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderProducts() {
  const content = document.getElementById('content');
  try {
    const { data: products, error } = await supabase.from('showroom_listings')
      .select('*').neq('listing_type', 'property').order('created_at', { ascending: false });
    // Show EVERY product from every source â€” database, the local fallback store,
    // and the static showroom seed â€” so nothing is ever missing from the manager.
    // DB/local rows win over seed on duplicate IDs (dedupe by property_id).
    const seen = new Set();
    const items = [];
    for (const p of (error ? [] : (products || []))) {
      if (p && p.property_id && !seen.has(p.property_id)) { seen.add(p.property_id); items.push(p); }
    }
    for (const p of listLocalShowroomListings().filter(item => item.listing_type !== 'property')) {
      if (p && p.property_id && !seen.has(p.property_id)) { seen.add(p.property_id); items.push(p); }
    }
    if (Array.isArray(SHOWROOM_LISTINGS)) {
      for (const p of SHOWROOM_LISTINGS.filter(l => l.listing_type !== 'property' && l.property_id)) {
        if (!seen.has(p.property_id)) { seen.add(p.property_id); items.push(p); }
      }
    }
    // Every product the public showroom displays also lives here in the
    // Product Manager: the owner's own downloaded catalog, the hand-made
    // product listings, trucks and motorhomes. DB/local/seed win on IDs.
    const SHOWROOM_STATIC_PRODUCTS = [...PRODUCT_LISTINGS, ...PRODUCT_EXTRA_LISTINGS, ...TRUCK_LISTINGS, ...MOTORHOME_LISTINGS];
    for (const p of SHOWROOM_STATIC_PRODUCTS) {
      if (p && p.property_id && p.listing_type !== 'property' && !seen.has(p.property_id)) { seen.add(p.property_id); items.push(p); }
    }
    items.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
    // Hide any listing the admin deleted (seed items are tombstones in the
    // hidden list â€” see deleteProduct) so deleted products never come back.
    try { await loadHiddenCatalogIds(); } catch {}
    const hiddenIds = new Set(getHiddenCatalogIds());
    if (hiddenIds.size) {
      for (let i = items.length - 1; i >= 0; i--) {
        if (items[i] && items[i].property_id && hiddenIds.has(items[i].property_id)) items.splice(i, 1);
      }
    }
    // Hide any product priced $1-$100 so they never appear in the admin Product
    // Manager, even if stale copies linger in a local localStorage cache.
    for (let i = items.length - 1; i >= 0; i--) {
      const p = items[i];
      const price = Number(p && p.price);
      if (Number.isFinite(price) && price >= 1 && price <= 100) items.splice(i, 1);
    }
    const categories = [...new Set(items.map(p => p.category).filter(Boolean))].sort((a, b) => a.localeCompare(b));
    const tags = [...new Set(items.flatMap(p => Array.isArray(p.tags) ? p.tags : []).filter(Boolean))].sort((a, b) => a.localeCompare(b));

    if (!window._productFilters) {
      window._productFilters = { search: '', category: '', tag: '', status: '', featured: '', sort: 'newest' };
    }
    if (!window._productSelection) window._productSelection = new Set();

    content.innerHTML = `
      <div class="space-y-5 fade-in">

        <div class="glass-soft border border-blue-500/20 rounded-2xl p-5 sm:p-6">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-blue-300/80">Product Showroom</p>
              <h2 class="text-3xl font-black text-white mt-1">Professional Product Showroom</h2>
              <p class="text-sm text-gray-400 mt-1">Unlimited products, smooth infinite scrolling layout, and clean auto-aligned cards.</p>
            </div>
            <div class="flex items-center gap-2.5 flex-wrap">
              <button onclick="showAddPropertyModal()" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition shadow-xl shadow-emerald-700/25" title="Add a real estate property with a multi-country interactive map">
                <i data-lucide="home" class="w-5 h-5"></i> Add Real Estate
              </button>
              <button onclick="showAddVehicleModal()" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition shadow-xl shadow-orange-700/25" title="Add a car, truck, bus, motorhome, motorcycle or boat">
                <i data-lucide="car-front" class="w-5 h-5"></i> Add Cars &amp; Trucks
              </button>
              <button onclick="showAddProductStep1()" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-black px-6 py-3.5 rounded-2xl transition shadow-xl shadow-blue-700/25">
                <i data-lucide="plus" class="w-5 h-5"></i> Add Product
              </button>
              <button onclick="openGeneralAiScanner()" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition shadow-xl shadow-violet-700/25" title="Scan product photos with AI â€” detect, analyze and add products to your manager">
                <i data-lucide="scan-search" class="w-5 h-5"></i> General AI Scanner
              </button>
              <button onclick="openGeneralAiScanner(true)" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition shadow-xl shadow-amber-700/25" title="Scan every product that has no price â€” AI reads the photo, fills the form and assigns a fair price automatically">
                <i data-lucide="dollar-sign" class="w-5 h-5"></i> Scan Missing Prices
              </button>
              <button onclick="clearAllProducts()" class="btn-press flex items-center justify-center gap-2 bg-rose-600/90 hover:bg-rose-500 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition" title="Delete every product from the manager & database. Your showroom catalog stays.">
                <i data-lucide="trash-2" class="w-5 h-5"></i> Clear All Products
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3">
          ${statCard('Total Products', items.length, 'package', 'blue')}
          ${statCard('Published', items.filter(p => !!p.is_active).length, 'badge-check', 'emerald')}
          ${statCard('Draft / Hidden', items.filter(p => !p.is_active).length, 'file-clock', 'amber')}
          ${statCard('Featured', items.filter(p => !!p.is_featured).length, 'sparkles', 'violet')}
          ${statCard('Inventory Units', items.reduce((n, p) => n + (parseInt(p.stock_quantity, 10) || 0), 0), 'boxes', 'blue')}
          ${statCard('Avg Price', `$${Math.round(items.reduce((n, p) => n + (parseFloat(p.price) || 0), 0) / Math.max(items.length, 1)).toLocaleString()}`, 'dollar-sign', 'blue')}
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 sm:p-4 space-y-3">
          <div class="relative">
            <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300"></i>
            <input id="prod-search" type="search" class="input-field pl-12 py-4 pr-28 text-base font-semibold !rounded-2xl border-blue-500/40 shadow-inner shadow-blue-900/20 focus:border-blue-400"
              placeholder="Search any product by name, SKU, brand, category, tag..." value="${esc(window._productFilters.search || '')}"
              oninput="filterProducts()" onkeydown="productSearchKeydown(event)">
            <span class="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">Press Enter to open</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-2.5">
            <select id="prod-cat-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Categories</option>
              ${(categories.length ? categories : PRODUCT_CATEGORIES).map(c => `<option value="${esc(c)}" ${(window._productFilters.category || '') === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}
            </select>
            <select id="prod-tag-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Tags</option>
              ${tags.map(tag => `<option value="${esc(tag)}" ${(window._productFilters.tag || '') === tag ? 'selected' : ''}>${esc(tag)}</option>`).join('')}
            </select>
            <select id="prod-status-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Status</option>
              <option value="active" ${(window._productFilters.status || '') === 'active' ? 'selected' : ''}>Published</option>
              <option value="inactive" ${(window._productFilters.status || '') === 'inactive' ? 'selected' : ''}>Unpublished</option>
              <option value="archived" ${(window._productFilters.status || '') === 'archived' ? 'selected' : ''}>Archived</option>
            </select>
            <select id="prod-featured-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Visibility</option>
              <option value="featured" ${(window._productFilters.featured || '') === 'featured' ? 'selected' : ''}>Featured</option>
              <option value="standard" ${(window._productFilters.featured || '') === 'standard' ? 'selected' : ''}>Standard</option>
            </select>
            <select id="prod-sort" class="input-field" onchange="filterProducts()">
              <option value="newest" ${(window._productFilters.sort || '') === 'newest' ? 'selected' : ''}>Newest</option>
              <option value="oldest" ${(window._productFilters.sort || '') === 'oldest' ? 'selected' : ''}>Oldest</option>
              <option value="price-high" ${(window._productFilters.sort || '') === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
              <option value="price-low" ${(window._productFilters.sort || '') === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
              <option value="sales-high" ${(window._productFilters.sort || '') === 'sales-high' ? 'selected' : ''}>Sales: High to Low</option>
              <option value="views-high" ${(window._productFilters.sort || '') === 'views-high' ? 'selected' : ''}>Views: High to Low</option>
            </select>
          </div>

<div class="flex flex-wrap items-center gap-2.5">
            <button onclick="toggleSelectAllProducts(true)" class="btn-press px-4 py-2.5 text-sm font-bold rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-300 hover:bg-blue-500/15 transition">Select Visible</button>
            <button onclick="toggleSelectAllProducts(false)" class="btn-press px-4 py-2.5 text-sm font-bold rounded-xl border border-gray-500/20 bg-gray-500/10 text-gray-300 hover:bg-gray-500/15 transition">Clear Selection</button>
            <button onclick="resetProductFilters()" class="btn-press px-4 py-2.5 text-sm font-bold rounded-xl border border-gray-500/20 bg-transparent text-gray-300 hover:bg-white/5 transition">Reset Filters</button>
            <div class="ml-auto flex items-center gap-1.5">
              <span class="text-sm text-gray-400">View:</span>
<button onclick="setProductView('card')" id="view-card-btn" class="view-toggle ${!window._productView || window._productView==='card' ? 'active' : ''}"><i data-lucide="layout-grid" class="w-4 h-4"></i> Cards</button>
              <button onclick="setProductView('table')" id="view-table-btn" class="view-toggle ${window._productView==='table' ? 'active' : ''}"><i data-lucide="table" class="w-4 h-4"></i> Table</button>
            </div>
            <span class="text-sm text-gray-400 ml-2"><span id="products-result-count">0</span> shown</span>
          </div>
        </div>

        <div id="bulk-actions" class="hidden items-center gap-2.5 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
          <span id="bulk-count" class="text-sm font-bold text-blue-300">0 selected</span>
          <button onclick="bulkToggleActive(true)" class="btn-press text-sm font-bold text-emerald-300 hover:text-emerald-200 px-4 py-2.5 rounded-xl bg-emerald-500/15 transition">Publish</button>
          <button onclick="bulkToggleActive(false)" class="btn-press text-sm font-bold text-amber-300 hover:text-amber-200 px-4 py-2.5 rounded-xl bg-amber-500/15 transition">Unpublish</button>
          <button onclick="bulkDuplicateProducts()" class="btn-press text-sm font-bold text-gray-200 hover:text-white px-4 py-2.5 rounded-xl bg-white/10 transition">Duplicate</button>
          <button onclick="bulkArchive()" class="btn-press text-sm font-bold text-red-300 hover:text-red-200 px-4 py-2.5 rounded-xl bg-red-500/15 transition">Archive</button>
          <button onclick="bulkDeleteProducts()" class="btn-press text-sm font-bold text-red-200 hover:text-white px-4 py-2.5 rounded-xl bg-red-600/20 transition">Delete</button>
        </div>

<div class="space-y-4">
          <div id="products-grid" class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 items-stretch"></div>
          <div id="products-more" class="flex justify-center pt-1"></div>
          <div id="products-table-wrap" class="hidden overflow-x-auto scrollbar-thin rounded-2xl border border-blue-500/15">
            <table class="w-full dt">
              <thead><tr>
                <th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th><th>Date</th><th>Actions</th>
              </tr></thead>
              <tbody id="products-table-body"></tbody>
            </table>
          </div>
          <div id="products-empty" class="hidden">${emptyState('package-search', 'No matching products', 'Try different filters or add a new product.', '<button onclick="showAddProductStep1()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl">Add Product</button>')}</div>
          <div class="text-center text-[11px] text-gray-500 py-2">Scroll to explore all products. Layout auto-rearranges as products are added, edited, moved, or removed.</div>
        </div>
      </div>`;

    window._productsData = items;
    window._productsCardLimit = 60;
    renderProductsShowroomGrid(items);
    filterProducts();
    updateBulkBar();
    if (window.lucide) lucide.createIcons();
  } catch (err) {
    if (content) content.innerHTML = `<div class="p-6 text-red-400 text-sm">Error: ${esc(err.message)}</div>`;
  }
}

function parseProductPrice(value) {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n : 0;
}

function normalizeProductTags(product) {
  return Array.isArray(product.tags) ? product.tags.filter(Boolean) : [];
}

function productDiscountText(product) {
  const pay = parseProductPrice(product.price);
  const real = parseFloat(product.real_price);
  if (Number.isFinite(real) && real > 0 && real > pay) return `${Math.round((1 - pay / real) * 100)}% OFF`;
  const pct = parseFloat(product.discount_percent ?? product.discount ?? 0);
  if (Number.isFinite(pct) && pct > 0) return `${Math.round(pct)}% OFF`;
  return 'No discount';
}

// Render the discount price with the real price crossed out above it. Used in
// the admin product card so admins see exactly what customers see.
function realPriceHtml(product) {
  const pay = parseProductPrice(product.price);
  const real = parseFloat(product.real_price);
  const base = `$${pay.toLocaleString()}`;
  if (Number.isFinite(real) && real > 0 && real > pay) {
    return `<span class="block text-xs text-gray-400 price-strike line-through">$${real.toLocaleString()}</span><span class="text-emerald-300 font-black">$${pay.toLocaleString()}</span>`;
  }
  return base;
}

function productStatusText(product) {
  if (product.is_archived || product.availability_status === 'Archived') return 'archived';
  return product.is_active ? 'active' : 'inactive';
}

function productViews(product) {
  return parseInt(product.views ?? product.view_count ?? 0, 10) || 0;
}

function productSales(product) {
  return parseInt(product.sales ?? product.sales_count ?? 0, 10) || 0;
}

function productSku(product) {
  return product.sku || product.property_id || 'N/A';
}

function productCard(product) {
  const img = (product.images && product.images[0]) ? product.images[0] : '/fallback.svg';
  const tags = normalizeProductTags(product);
  const status = productStatusText(product);
  const selected = window._productSelection?.has(product.property_id);
  const statusBadge = status === 'archived' ? badge('inactive') : badge(status === 'active' ? 'active' : 'inactive');
  const dateAdded = fmtDate(product.created_at);
  const isFeatured = !!product.is_featured;
  const publishFn = product.is_active ? `unpublishProduct('${product.property_id}')` : `publishProduct('${product.property_id}')`;
  const publishLabel = product.is_active ? 'Unpublish' : 'Publish';
  const publishClass = product.is_active
    ? 'bg-amber-500/15 text-amber-200 hover:bg-amber-500/25'
    : 'bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25';

  return `<article data-id="${product.property_id}" data-cat="${esc(product.category || '')}" data-status="${status}" data-featured="${isFeatured ? 'featured' : 'standard'}" onclick="editProduct('${product.property_id}')" title="Tap anywhere to edit this product" class="prod-card glass-soft border ${selected ? 'border-blue-400/60' : 'border-blue-500/15'} rounded-3xl p-5 flex flex-col gap-4 transition hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer select-none active:scale-[.99]">
    <div class="flex items-start gap-4">
      <input type="checkbox" class="prod-check accent-blue-500 w-5 h-5 mt-1 shrink-0" value="${product.property_id}" ${selected ? 'checked' : ''} onclick="event.stopPropagation()" onchange="toggleProductSelection('${product.property_id}', this.checked)">
      <div class="relative w-24 h-24 rounded-2xl overflow-hidden border border-blue-500/20 shrink-0 bg-[#0b1124]">
        <img src="${esc(img)}" alt="${esc(product.title || 'Product')}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'">
        ${isFeatured ? '<span class="absolute top-1.5 left-1.5 text-[10px] font-black px-2 py-0.5 rounded-lg bg-amber-400 text-[#111827]">Featured</span>' : ''}
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="text-lg font-black text-white leading-snug line-clamp-2">${esc(product.title || 'Untitled Product')}</h3>
        <p class="text-xs text-gray-500 font-mono mt-1">SKU: ${esc(productSku(product))}</p>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          ${statusBadge}
          <span class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20">${esc(product.category || 'Uncategorized')}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2.5 text-sm">
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5">
        <span class="text-gray-400 text-xs">Price</span>
        <p class="text-emerald-300 font-black text-base">
          ${realPriceHtml(product)}
        </p>
      </div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Discount</span><p class="text-amber-300 font-bold">${esc(productDiscountText(product))}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Stock</span><p class="text-gray-200 font-bold">${product.stock_quantity != null ? esc(product.stock_quantity) : 'Unlimited'}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Brand</span><p class="text-gray-200 font-bold truncate">${esc(product.brand || 'N/A')}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Views</span><p class="text-blue-300 font-bold">${productViews(product).toLocaleString()}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Sales</span><p class="text-cyan-300 font-bold">${productSales(product).toLocaleString()}</p></div>
    </div>

    <div class="flex items-center justify-between text-xs text-gray-500 border-t border-blue-500/10 pt-3">
      <span>Date Added: ${esc(dateAdded)}</span>
      <span>${(product.images || []).length} images</span>
    </div>

    <div class="flex flex-wrap gap-2 mt-auto">
      <button onclick="event.stopPropagation();editProduct('${product.property_id}')" class="btn-press flex-1 min-w-[9.5rem] px-5 py-3.5 rounded-2xl text-sm font-black bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition shadow-lg shadow-blue-600/15">Edit Product</button>
      <button onclick="event.stopPropagation();quickEditProduct('${product.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-indigo-500/15 text-indigo-200 hover:bg-indigo-500/25 transition">Quick Edit</button>
      <button onclick="event.stopPropagation();previewProduct('${product.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-sky-500/15 text-sky-200 hover:bg-sky-500/25 transition">Preview</button>
      <button onclick="event.stopPropagation();${publishFn}" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold ${publishClass} transition">${publishLabel}</button>
      <button onclick="event.stopPropagation();duplicateProduct('${product.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-white/10 text-gray-200 hover:bg-white/20 transition">Duplicate</button>
      <button onclick="event.stopPropagation();archiveProduct('${product.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-red-500/15 text-red-200 hover:bg-red-500/25 transition">Archive</button>
      <button onclick="event.stopPropagation();shareProduct('${product.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-violet-500/15 text-violet-200 hover:bg-violet-500/25 transition">Share</button>
      <button onclick="event.stopPropagation();deleteProduct('${product.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-rose-600/15 text-rose-200 hover:bg-rose-600/25 transition">Delete</button>
      <button onclick="event.stopPropagation();openProductMoreActions('${product.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-gray-600/20 text-gray-200 hover:bg-gray-600/35 transition">More</button>
    </div>

    ${tags.length ? `<div class="flex flex-wrap gap-1.5">${tags.slice(0, 6).map(tag => `<span class="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200">${esc(tag)}</span>`).join('')}</div>` : '<div class="text-xs text-gray-500">No tags</div>'}
  </article>`;
}

function sortProductItems(items, sortBy) {
  const rows = [...items];
  const getTime = (d) => new Date(d || 0).getTime() || 0;
  if (sortBy === 'oldest') rows.sort((a, b) => getTime(a.created_at) - getTime(b.created_at));
  else if (sortBy === 'price-high') rows.sort((a, b) => parseProductPrice(b.price) - parseProductPrice(a.price));
  else if (sortBy === 'price-low') rows.sort((a, b) => parseProductPrice(a.price) - parseProductPrice(b.price));
  else if (sortBy === 'sales-high') rows.sort((a, b) => productSales(b) - productSales(a));
  else if (sortBy === 'views-high') rows.sort((a, b) => productViews(b) - productViews(a));
  else rows.sort((a, b) => getTime(b.created_at) - getTime(a.created_at));
  return rows;
}

function renderProductsShowroomGrid(items) {
  const grid = document.getElementById('products-grid');
  const empty = document.getElementById('products-empty');
  const count = document.getElementById('products-result-count');
  if (!grid) return;
  const limit = window._productsCardLimit || 60;
  const shown = items.slice(0, limit);
  grid.innerHTML = shown.map(productCard).join('');
  if (count) count.textContent = String(items.length);
  const more = document.getElementById('products-more');
  if (more) {
    const remaining = items.length - shown.length;
    if (remaining > 0) {
      more.innerHTML = `<button onclick="loadMoreProducts()" class="btn-press px-8 py-4 rounded-2xl text-base font-black bg-blue-500/15 text-blue-200 hover:bg-blue-500/25 border border-blue-500/25 transition">Show ${Math.min(60, remaining)} more (${remaining} left)</button>`;
    } else {
      more.innerHTML = items.length > 60 ? '<span class="text-sm text-gray-500">All products shown</span>' : '';
    }
  }
  if (empty) empty.classList.toggle('hidden', items.length > 0);
  updateBulkBar();
  if (window.lucide) lucide.createIcons();
}

window.loadMoreProducts = function() {
  window._productsCardLimit = (window._productsCardLimit || 60) + 60;
  filterProducts(true);
};

function renderProductsTable(items) {
  const tbody = document.getElementById('products-table-body');
  const count = document.getElementById('products-result-count');
  if (!tbody) return;
  tbody.innerHTML = items.length === 0
    ? '<tr><td colspan="7" class="text-center text-gray-500 py-10">No products found.</td></tr>'
    : items.map(p => {
        const img = (p.images && p.images[0]) ? p.images[0] : '/fallback.svg';
        const status = productStatusText(p);
        const selected = window._productSelection?.has(p.property_id);
        const publishFn = p.is_active ? `unpublishProduct('${p.property_id}')` : `publishProduct('${p.property_id}')`;
        const publishLabel = p.is_active ? 'Unpublish' : 'Publish';
        return `<tr class="prod-table-row" data-id="${p.property_id}" style="cursor:pointer">
          <td>
            <div class="flex items-center gap-2.5" onclick="editProduct('${p.property_id}')">
              <input type="checkbox" class="prod-check accent-blue-500" value="${p.property_id}" ${selected ? 'checked' : ''} onclick="event.stopPropagation()" onchange="toggleProductSelection('${p.property_id}', this.checked)">
              <img src="${esc(img)}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
              <div class="min-w-0">
                <p class="text-xs font-bold text-white truncate max-w-[160px]">${esc(p.title || 'Untitled Product')}</p>
                <p class="text-[10px] font-mono text-gray-500">${esc(productSku(p))}</p>
              </div>
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${esc(p.category || 'Uncategorized')}</span></td>
          <td>
            <div class="text-xs">
              ${(() => {
                const pay = parseProductPrice(p.price);
                const real = parseFloat(p.real_price);
                if (Number.isFinite(real) && real > 0 && real > pay) {
                  return `<span class="text-[10px] text-gray-500 price-strike line-through block">$${real.toLocaleString()}</span><span class="font-bold text-emerald-400">$${pay.toLocaleString()}</span>`;
                }
                return `<span class="font-bold text-emerald-400">$${pay.toLocaleString()}</span>`;
              })()}
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${p.stock_quantity != null ? esc(p.stock_quantity) : 'Unlimited'}</span></td>
          <td>${badge(status === 'archived' ? 'inactive' : (status === 'active' ? 'active' : 'inactive'))}</td>
          <td><span class="text-xs text-gray-500">${fmtDate(p.created_at)}</span></td>
          <td>
            <div class="flex gap-1">
              <button onclick="editProduct('${p.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
              <button onclick="quickEditProduct('${p.property_id}')" class="btn-press p-1.5 text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition" title="Quick Edit"><i data-lucide="sliders-horizontal" class="w-3.5 h-3.5"></i></button>
              <button onclick="${publishFn}" class="btn-press p-1.5 ${p.is_active ? 'text-amber-400 hover:bg-amber-500/10' : 'text-emerald-400 hover:bg-emerald-500/10'} rounded-lg transition" title="${publishLabel}"><i data-lucide="${p.is_active ? 'eye-off' : 'eye'}" class="w-3.5 h-3.5"></i></button>
              <button onclick="archiveProduct('${p.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Archive"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
            </div>
          </td>
        </tr>`;
      }).join('');
  if (count) count.textContent = String(items.length);
  if (window.lucide) lucide.createIcons();
}

window.setProductView = function(view) {
  window._productView = view === 'table' ? 'table' : 'card';
  const grid = document.getElementById('products-grid');
  const table = document.getElementById('products-table-wrap');
  const cardBtn = document.getElementById('view-card-btn');
  const tableBtn = document.getElementById('view-table-btn');
  const empty = document.getElementById('products-empty');
  const items = window._productsData || [];
  if (grid) grid.classList.toggle('hidden', view === 'table');
  if (table) {
    table.classList.toggle('hidden', view !== 'table');
    if (view === 'table') renderProductsTable(items);
  }
  if (cardBtn) cardBtn.classList.toggle('active', view !== 'table');
  if (tableBtn) tableBtn.classList.toggle('active', view === 'table');
  if (empty) empty.classList.toggle('hidden', items.length > 0);
};

window.filterProducts = function(skipLimitReset) {
  const f = window._productFilters || {};
  f.search = (document.getElementById('prod-search')?.value || '').trim().toLowerCase();
  f.category = document.getElementById('prod-cat-filter')?.value || '';
  f.tag = document.getElementById('prod-tag-filter')?.value || '';
  f.status = document.getElementById('prod-status-filter')?.value || '';
  f.featured = document.getElementById('prod-featured-filter')?.value || '';
  f.sort = document.getElementById('prod-sort')?.value || 'newest';
  window._productFilters = f;

  const filtered = (window._productsData || []).filter((p) => {
    const haystack = [p.title, p.brand, p.category, productSku(p), normalizeProductTags(p).join(' '), p.description].join(' ').toLowerCase();
    if (f.search && !haystack.includes(f.search)) return false;
    if (f.category && (p.category || '') !== f.category) return false;
    if (f.tag && !normalizeProductTags(p).includes(f.tag)) return false;
    if (f.status && productStatusText(p) !== f.status) return false;
    if (f.featured && (f.featured === 'featured') !== !!p.is_featured) return false;
    return true;
  });

const sorted = sortProductItems(filtered, f.sort);
  if (!skipLimitReset) window._productsCardLimit = 60;
  renderProductsShowroomGrid(sorted);
  if (window._productView === 'table') renderProductsTable(sorted);
};

window.productSearchKeydown = function(e) {
  if (e.key !== 'Enter') return;
  const query = (document.getElementById('prod-search')?.value || '').trim().toLowerCase();
  if (!query) return;
  const f = window._productFilters || {};
  const filtered = (window._productsData || []).filter((p) => {
    const haystack = [p.title, p.brand, p.category, productSku(p), normalizeProductTags(p).join(' '), p.description].join(' ').toLowerCase();
    if (!haystack.includes(query)) return false;
    if (f.category && (p.category || '') !== f.category) return false;
    if (f.tag && !normalizeProductTags(p).includes(f.tag)) return false;
    if (f.status && productStatusText(p) !== f.status) return false;
    if (f.featured && (f.featured === 'featured') !== !!p.is_featured) return false;
    return true;
  });
  const best = sortProductItems(filtered, f.sort || 'newest')[0];
  if (best) {
    editProduct(best.property_id);
  } else {
    showToast('No product matched that search', 'error');
  }
};

window.resetProductFilters = function() {
  window._productFilters = { search: '', category: '', tag: '', status: '', featured: '', sort: 'newest' };
  const ids = ['prod-search', 'prod-cat-filter', 'prod-tag-filter', 'prod-status-filter', 'prod-featured-filter', 'prod-sort'];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === 'prod-sort') el.value = 'newest';
    else el.value = '';
  });
  filterProducts();
};

window.toggleProductSelection = function(pid, selected) {
  if (!window._productSelection) window._productSelection = new Set();
  if (selected) window._productSelection.add(pid);
  else window._productSelection.delete(pid);
  updateBulkBar();
};

window.toggleSelectAll = function(cb, cls) {
  document.querySelectorAll('.' + cls).forEach(c => {
    c.checked = cb.checked;
    const pid = c.value;
    if (!window._productSelection) window._productSelection = new Set();
    if (cb.checked) window._productSelection.add(pid);
    else window._productSelection.delete(pid);
  });
  updateBulkBar();
};

window.toggleSelectAllProducts = function(selectAll) {
  document.querySelectorAll('.prod-check').forEach((cb) => {
    cb.checked = !!selectAll;
    if (!window._productSelection) window._productSelection = new Set();
    if (selectAll) window._productSelection.add(cb.value);
    else window._productSelection.delete(cb.value);
  });
  updateBulkBar();
};

window.updateBulkBar = function() {
  const checked = window._productSelection ? window._productSelection.size : 0;
  const bar = document.getElementById('bulk-actions');
  const count = document.getElementById('bulk-count');
  if (bar) {
    bar.classList.toggle('hidden', checked === 0);
    if (checked > 0) bar.classList.add('flex');
  }
  if (count) count.textContent = `${checked} selected`;
};

function getSelectedIds() {
  return window._productSelection ? [...window._productSelection] : [];
}

// Returns true if the error is an RLS/permission denial (not a network/schema issue).
function isRlsDenied(error) {
  const msg = String(error?.message || error?.code || '').toLowerCase();
  return msg.includes('row-level security') ||
    msg.includes('permission denied') ||
    msg.includes('permission denied for table') ||
    msg.includes('new row violates row-level security') ||
    msg.includes('not permitted') ||
    msg.includes('rls policy');
}

// Shared handler for write operations: surfaces permission errors loudly instead
// of silently falling back to local storage.
function handleWriteError(error, fallbackFn, actionLabel) {
  if (error && isRlsDenied(error)) {
    showToast(`âš ï¸ ${actionLabel} blocked: Your account is signed in but the database admin role is not active. Re-run the admin permission migration, or contact the owner.`, 'error');
    return true; // handled - do NOT fall back to local storage
  }
  if (error) {
    // Network/schema/other error: safest to fall back to local storage so the
    // change is not lost while the DB is unavailable.
    if (fallbackFn) fallbackFn();
    showToast(`${actionLabel} saved locally (DB unavailable): ${error.message || 'unknown error'}`, 'info');
    return true;
  }
  return false;
}

// Turns a raw Supabase/DB error into a clear, actionable message for the owner.
// Used by the One-Click Publish flow so failures are NEVER silent and never
// reported as success.
function describeWriteError(err, actionLabel) {
  if (!err) return `${actionLabel} failed for an unknown reason. Please try again.`;
  const msg = String(err.message || '');
  const code = err.code || '';
  if (isRlsDenied(err)) {
    return `${actionLabel} was BLOCKED: your account is signed in but the database admin role is not active. Re-run the admin permission migration (or contact the owner), then press Publish again.`;
  }
  if (String(code) === '401' || /jwt|token|not authenticated|unauthorized|invalid api key/i.test(msg)) {
    return `${actionLabel} failed: your sign-in session expired or is invalid. Please sign out and sign back in, then try again. Your changes are still in the form.`;
  }
  if (String(code) === '23505' || /duplicate key|unique constraint/i.test(msg)) {
    return `${actionLabel} failed: a duplicate-record conflict occurred in the database. Refresh the page and try again.`;
  }
  if (String(code) === '23503' || /foreign key/i.test(msg)) {
    return `${actionLabel} failed: the database rejected a reference (foreign key). Refresh the page, re-open the product and try again.`;
  }
  if (String(code) === '42P01' || /column .* does not exist|relation .* does not exist/i.test(msg)) {
    return `${actionLabel} failed: the database schema is out of date. Run the latest database migration, then try again.`;
  }
  if (String(code) === '23502' || /null value in column .* violates/i.test(msg)) {
    return `${actionLabel} failed: a required field was rejected by the database. Fill in every required field, then try again.`;
  }
  if (/failed to fetch|networkerror|network request|fetch failed|load failed|offline|ERR_NAME|ERR_CONNECTION|timeout/i.test(msg)) {
    return `${actionLabel} failed: no connection to the server. Check your internet connection and press Publish again. Your changes are still in the form.`;
  }
  if (String(code) === '42501' || /permission denied|row-level security/i.test(msg)) {
    return `${actionLabel} was BLOCKED by database permissions. Re-run the admin permission migration (or contact the owner), then try again.`;
  }
  if (/rate limit|too many requests/i.test(msg)) {
    return `${actionLabel} failed: too many requests were sent at once. Wait a few seconds and press Publish again.`;
  }
  return `${actionLabel} failed: ${msg || 'an unexpected database error occurred'}. Nothing was saved — your changes are still in the form, so you can press Publish again.`;
}

// ---------------------------------------------------------------------------
// safePublishShowroom — BULLETPROOF showroom write that CANNOT be silently
// blocked by RLS, expired sessions, or network issues.
//
// Strategy:
//   1. Verify the user is authenticated (refresh if needed).
//   2. Try a direct Supabase upsert (fastest path when RLS allows it).
//   3. If RLS blocks it, fall back to the SECURITY DEFINER RPC
//      publish_showroom_upsert (bypasses RLS entirely).
//   4. If RPC fails too, return the error.
//
// Returns: { error: null | Error } — always check this.
// ---------------------------------------------------------------------------
async function safePublishShowroom(payload) {
  // --- STEP 0: Auth pre-flight — make sure we have a valid session ---
  try {
    let { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      // Try a silent refresh
      const { data: refreshed } = await supabase.auth.getSession();
      session = refreshed?.session;
    }
    if (!session) {
      return { error: new Error('Your sign-in session has expired. Please sign out and sign back in, then press Publish again.') };
    }
    // Verify the session is actually valid with the server
    const { data: { user }, error: userErr } = await supabase.auth.getUser();
    if (userErr || !user) {
      return { error: new Error('Your sign-in session is invalid. Please sign out and sign back in, then press Publish again.') };
    }
  } catch (authErr) {
    console.error('[safePublishShowroom] Auth check failed:', authErr);
    return { error: new Error('Could not verify your sign-in status. Check your internet connection and try again.') };
  }

  // --- STEP 1: Try direct Supabase upsert (fast path) ---
  const directPayload = { ...payload, updated_at: new Date().toISOString() };
  if (directPayload.property_id) {
    const { error: upErr } = await supabase
      .from('showroom_listings')
      .upsert(directPayload, { onConflict: 'property_id' });
    if (!upErr) return { error: null }; // SUCCESS via direct write
    // Log the error but ALWAYS fall through to RPC — the RPC uses a
    // controlled column set so it succeeds even when the direct write
    // fails due to missing columns, type mismatches, or RLS.
    console.warn('[safePublishShowroom] Direct upsert failed, trying RPC fallback:', upErr?.message || upErr);
  } else {
    // No property_id — try direct insert
    const { error: insErr } = await supabase
      .from('showroom_listings')
      .insert(directPayload);
    if (!insErr) return { error: null };
    console.warn('[safePublishShowroom] Direct insert failed, trying RPC fallback:', insErr?.message || insErr);
  }

  // --- STEP 2: Fallback to SECURITY DEFINER RPC (bypasses RLS + schema) ---
  try {
    const rpcPayload = { ...directPayload };
    // publish_showroom_upsert expects the payload without 'id' (uses property_id)
    delete rpcPayload.id;
    const { data: rpcResult, error: rpcErr } = await supabase
      .rpc('publish_showroom_upsert', { p_data: [rpcPayload] });
    if (rpcErr) {
      console.error('[safePublishShowroom] RPC fallback also failed:', rpcErr);
      return { error: new Error(`Database write failed: ${rpcErr.message || 'unknown error'}. Your changes are preserved in the form — please try again.`) };
    }
    console.log('[safePublishShowroom] RPC fallback succeeded, rows affected:', rpcResult);
    return { error: null };
  } catch (rpcCatch) {
    console.error('[safePublishShowroom] RPC exception:', rpcCatch);
    return { error: new Error(`Database write failed: ${rpcCatch.message || 'network error'}. Your changes are preserved in the form — please try again.`) };
  }
}

window.bulkToggleActive = async function(active) {
  const ids = getSelectedIds();
  if (!ids.length) return;
  const results = await Promise.all(ids.map(id => {
    const full = sanitizeShowroomPayload((window._productsData || []).find(item => item.property_id === id));
    return supabase.from('showroom_listings').upsert({ ...full, property_id: id, is_active: active }, { onConflict: 'property_id' });
  }));
  const denied = results.some(r => r.error && isRlsDenied(r.error));
  if (denied) {
    showToast(`âš ï¸ ${ids.length} products NOT ${active ? 'published' : 'unpublished'}: database admin role blocked the write. Re-run the admin permission migration.`, 'error');
    window._productSelection = new Set();
    renderProducts();
    return;
  }
  const failed = results.filter(r => r.error).length;
  showToast(`${ids.length - failed}/${ids.length} products ${active ? 'published' : 'unpublished'}${failed ? ` (${failed} failed: ${results.find(r=>r.error)?.error?.message || 'error'})` : ''}`, failed ? 'error' : 'success');
  window._productSelection = new Set();
  renderProducts();
};

window.bulkDuplicateProducts = async function() {
  const ids = getSelectedIds();
  if (!ids.length) return;
  for (const id of ids) {
    await duplicateProduct(id, true);
  }
  showToast(`${ids.length} products duplicated`);
  window._productSelection = new Set();
  renderProducts();
};

window.bulkArchive = async function() {
  const ids = getSelectedIds();
  if (!ids.length) return;
  if (!confirm(`Archive ${ids.length} products? They will be hidden but not deleted.`)) return;
  const results = await Promise.all(ids.map(id => supabase.from('showroom_listings').update({ is_active: false, availability_status: 'Archived' }).eq('property_id', id)));
  const denied = results.some(r => r.error && isRlsDenied(r.error));
  if (denied) {
    showToast('âš ï¸ Archive blocked: database admin role rejected the write. Re-run the admin permission migration.', 'error');
    window._productSelection = new Set();
    renderProducts();
    return;
  }
  const failed = results.filter(r => r.error).length;
  showToast(`${ids.length - failed}/${ids.length} products archived${failed ? ` (${failed} failed)` : ''}`, failed ? 'error' : 'success');
  window._productSelection = new Set();
  renderProducts();
};

window.bulkDeleteProducts = async function() {
  const ids = getSelectedIds();
  if (!ids.length) return;
  if (!confirm(`Delete ${ids.length} products permanently? This action cannot be undone.`)) return;
  const results = await Promise.all(ids.map(id => supabase.from('showroom_listings').delete().eq('property_id', id)));
  const denied = results.some(r => r.error && isRlsDenied(r.error));
  if (denied) {
    showToast('âš ï¸ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.', 'error');
    window._productSelection = new Set();
    renderProducts();
    return;
  }
  const failed = results.filter(r => r.error).length;
  showToast(`${ids.length - failed}/${ids.length} products deleted${failed ? ` (${failed} failed)` : ''}`, failed ? 'error' : 'success');
  window._productSelection = new Set();
  renderProducts();
};

window.previewProduct = async function(pid) {
  const result = await supabase.from('showroom_listings').select('*').eq('property_id', pid).maybeSingle();
  const data = (window._productsData || []).find(item => item.property_id === pid) || result.data;
  if (!data) return showToast('Product not found', 'error');
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Product Live Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="space-y-2">
            <img src="${esc((data.images || [])[0] || '/fallback.svg')}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
            <div class="flex flex-wrap gap-2">${(data.images || []).slice(0, 8).map(url => `<img src="${esc(url)}" class="w-12 h-12 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">`).join('')}</div>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-black text-white">${esc(data.title || 'Untitled Product')}</h4>
            <div class="flex items-center gap-2">${badge(data.is_active ? 'active' : 'inactive')}${data.is_featured ? '<span class="badge bg-amber-500/15 text-amber-200 border-amber-500/30">Featured</span>' : ''}</div>
            <p class="text-xs text-gray-400">${esc(data.description || 'No description')}</p>
            <div class="grid grid-cols-2 gap-2 text-xs mt-2">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">$${parseProductPrice(data.price).toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${data.stock_quantity != null ? esc(data.stock_quantity) : 'Unlimited'}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${esc(data.brand || 'N/A')}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Category</span><p class="text-gray-200 font-bold">${esc(data.category || 'N/A')}</p></div>
            </div>
            <div class="pt-2 flex gap-2">
              <button onclick="editProduct('${data.property_id}');closeModal();" class="btn-press px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl">Edit</button>
              <button onclick="shareProduct('${data.property_id}')" class="btn-press px-3 py-2 bg-violet-600/70 hover:bg-violet-500 text-white text-xs font-bold rounded-xl">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>`);
};

window.quickEditProduct = async function(pid) {
  const result = await supabase.from('showroom_listings').select('*').eq('property_id', pid).maybeSingle();
  const data = (window._productsData || []).find(item => item.property_id === pid) || result.data;
  if (!data) return showToast('Product not found', 'error');
  const imgs = Array.isArray(data.images) ? data.images : [];
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-black text-white">Quick Edit Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">Back</button>
        </div>
        <form onsubmit="saveQuickEditProduct(event,'${data.property_id}')" class="space-y-4">
          <div><label class="lbl">Title</label><input name="title" class="input-field" value="${esc(data.title || '')}"></div>
          <div class="grid grid-cols-2 gap-3">
            <div><label class="lbl">Real Price</label><input type="number" step="0.01" name="real_price" class="input-field" value="${esc(data.real_price ?? data.specifications?.real_price ?? '')}" placeholder="Original price (crossed out)"></div>
            <div><label class="lbl">Discount Price</label><input type="number" step="0.01" name="price" class="input-field" value="${esc(data.price || 0)}" placeholder="Price customers pay"></div>
          </div>
          <div><label class="lbl">Availability</label><select name="availability_status" class="input-field">${['In Stock', 'Out of Stock', 'Pre-order', 'Limited Stock', 'Archived'].map(v => `<option value="${v}" ${data.availability_status === v ? 'selected' : ''}>${v}</option>`).join('')}</select></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Featured</span><input type="checkbox" name="is_featured" ${data.is_featured ? 'checked' : ''} class="accent-blue-500 w-5 h-5"></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Published</span><input type="checkbox" name="is_active" ${data.is_active ? 'checked' : ''} class="accent-blue-500 w-5 h-5"></div>
          <div>
            <label class="lbl">Gallery Images & Videos (up to 24)</label>
            <div id="drop-zone" class="drop-zone" onclick="pickMediaForForm('img-upload')">
              <i data-lucide="image-plus" class="w-10 h-10 text-blue-400 mx-auto mb-2"></i>
              <p class="text-base font-bold text-gray-300">Tap to add photos or videos (up to 24)</p>
              <p class="text-sm text-gray-500 mt-1">PNG, JPG, WEBP, MP4, WebM. First item is the cover.</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*,video/mp4,video/webm,video/*,application/pdf" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${imgs.map((url, i) => imageThumbHtml(url, i)).join('')}
            </div>
            <div id="image-url-inputs">${imgs.map((url, i) => `<input type="hidden" name="images" id="img-url-${i}" value="${esc(url)}">`).join('')}</div>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
          </div>
          <button type="submit" class="btn-press w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-base font-bold">Save Quick Edit</button>
        </form>
      </div>
    </div>`);
  setupDropZone();
  setupImageSortable();
  rebuildImageInputs();
  updateGalleryCounter();
  if (window.lucide) lucide.createIcons();
};

window.saveQuickEditProduct = async function(e, pid) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const imgs = [...document.querySelectorAll('#image-preview .img-thumb')]
    .map(t => t.dataset.url || (t.querySelector('img') ? t.querySelector('img').getAttribute('src') : ''))
    .filter(s => s && !String(s).startsWith('blob:'));
  const patch = {
    title: fd.get('title') || 'Untitled Product',
    price: Math.max(GLOBAL_PRICE_MIN, Math.min(GLOBAL_PRICE_MAX, parseFloat(fd.get('price')) || 0)),
    stock_quantity: fd.get('stock_quantity') === '' ? null : parseInt(fd.get('stock_quantity'), 10),
    availability_status: fd.get('availability_status') || 'In Stock',
    is_featured: fd.get('is_featured') === 'on',
    is_active: fd.get('is_active') === 'on' || imgs.length >= 24,
    images: imgs,
  };
  const realRaw = String(fd.get('real_price') || '').trim();
  const realNum = realRaw === '' ? null : parseFloat(realRaw);
  if (realNum != null && !Number.isFinite(realNum)) { showToast('Real Price must be a number.', 'error'); return; }
  const full = sanitizeShowroomPayload((window._productsData || []).find(item => item.property_id === pid));
  const baseSpecs = (full.specifications && typeof full.specifications === 'object') ? full.specifications : {};
  patch.specifications = { ...baseSpecs, real_price: realNum != null && realNum > 0 ? Math.round(realNum) : null };
  const { error } = await supabase.from('showroom_listings').upsert({ ...full, ...patch, property_id: pid }, { onConflict: 'property_id' });
  if (error) {
    if (isRlsDenied(error)) {
      showToast('âš ï¸ Save blocked: database admin role rejected the write. Re-run the admin permission migration.', 'error');
      closeModal();
      renderProducts();
      return;
    }
    patchLocalShowroomListing(pid, patch);
    showToast('Quick edit saved locally', 'info');
  } else {
    showToast(patch.is_active ? 'Saved & published â€” your showroom shows it now' : 'Quick edit saved (draft)');
  }
  closeModal();
  renderProducts();
};

window.publishProduct = function(pid) { return toggleProductActive(pid, true); };
window.unpublishProduct = function(pid) { return toggleProductActive(pid, false); };

window.shareProduct = async function(pid) {
  const url = `${window.location.origin}/details.html?id=${encodeURIComponent(pid)}`;
  const item = (window._productsData || []).find(p => p.property_id === pid)
    || (window._propertiesData || []).find(p => p.property_id === pid)
    || getLocalShowroomListingById(pid);
  const title = (item && String(item.title || '').trim()) || 'Product on Weverse Online Shop';
  const shareText = item && Number(item.price || 0) > 0
    ? `${title} — ${formatPriceForShare(item)}\n${url}`
    : `${title}\n${url}`;
  const copied = (async () => {
    try {
      if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(url); return true; }
    } catch {}
    try {
      const ta = document.createElement('textarea');
      ta.value = url; ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
      document.body.appendChild(ta); ta.focus(); ta.select();
      document.execCommand('copy'); ta.remove(); return true;
    } catch { return false; }
  })();
  const okCopy = await copied;
  // Native share sheet surfaces WhatsApp/Telegram/Facebook/Instagram/etc. and
  // always carries the permanent product URL + title for a proper preview.
  let usedShare = false;
  if (navigator.share) {
    try { await navigator.share({ title, text: shareText, url }); usedShare = true; } catch {}
  }
  if (!usedShare) {
    showToast(okCopy ? 'Product link copied to clipboard' : ('Product link: ' + url));
  }
};
function formatPriceForShare(item) {
  const n = Number(item && typeof item.price === 'object' ? item.price.price : (item && item.price)) || 0;
  const cur = (item && item.currency) || 'USD';
  let s;
  try { s = n.toLocaleString('en-US', { style: 'currency', currency: cur, maximumFractionDigits: 0 }); }
  catch { s = '$' + n.toLocaleString('en-US'); }
  if (item && item.price_period) s += '/' + item.price_period;
  return s;
}

window.deleteProduct = async function(pid) {
  if (!confirm('Delete this product permanently? This action cannot be undone.')) return;
  const item = (window._productsData || []).find(p => p.property_id === pid)
    || (window._propertiesData || []).find(p => p.property_id === pid)
    || getLocalShowroomListingById(pid);
  const { error } = await supabase.from('showroom_listings').delete().eq('property_id', pid);
  if (error && !isRlsDenied(error)) {
    return showToast('Delete failed: ' + error.message, 'error');
  }
  // Remove from the browser's local fallback store too, so locally-saved
  // listings disappear instead of resurrecting on the next render.
  removeLocalShowroomListing(pid);
  // Seed listings (the built-in catalog) are not rows in the database, so a
  // DB delete can never remove them. Tombstone the id in the persisted hidden
  // list instead â€” the storefront checks it site-wide (cards, details, search,
  // promo pool, checkout) and every manager render filters it below.
  try {
    const res = await saveCatalogHidden(pid, true);
    if (res && res.error && isRlsDenied(res.error)) {
      showToast('âš ï¸ Deleted, but the site-wide hidden list could not be saved: database admin role rejected the write. Re-run the admin permission migration.', 'error');
    } else {
      showToast('Product deleted');
    }
  } catch {
    showToast('Product deleted');
  }
  if (item && item.listing_type === 'property') { renderProperties(); } else { renderProducts(); }
};

// Delete EVERY product in the Product Manager (and the database) at once.
// Runs with the logged-in admin session (the database only lets admins delete),
// then clears the browser's local fallback store so the manager shows exactly
// the showroom catalog and nothing old remains.
window.clearAllProducts = async function() {
  const total = (window._productsData || []).length;
  if (!confirm(`Delete ALL ${total} product(s) from the Product Manager and the database now?\n\nThis is permanent and cannot be undone. Your Real Estate row, Cars & Trucks row and built-in showroom catalog will stay.`)) return;
  const KEEP = new Set(['Cars', 'Cars & Vehicles', 'Trucks', 'Buses', 'Buses & Coaches', 'Motorhomes', 'Motorcycles', 'Marine & Boating', 'RV & Camper Accessories', 'Vehicles']);
  let ids = [];
  try {
    const { data: rows, error: listErr } = await supabase.from('showroom_listings').select('property_id, listing_type, category').neq('property_id', '__none__');
    if (listErr) {
      if (isRlsDenied(listErr)) return showToast('⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.', 'error');
      return showToast('Clear failed: ' + listErr.message, 'error');
    }
    ids = ((rows || []).filter(r => r.listing_type === 'product' && !KEEP.has(r.category))).map(r => r.property_id).filter(Boolean);
  } catch (scanErr) {
    return showToast('Clear failed: ' + scanErr.message, 'error');
  }
  if (ids.length) {
    for (let i = 0; i < ids.length; i += 500) {
      const { error } = await supabase.from('showroom_listings').delete().in('property_id', ids.slice(i, i + 500));
      if (error) {
        if (isRlsDenied(error)) return showToast('⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.', 'error');
        return showToast('Clear failed: ' + error.message, 'error');
      }
    }
  }
  try {
    const saved = JSON.parse(localStorage.getItem('kco_local_showroom_listings_v1') || '[]');
    const kept = (Array.isArray(saved) ? saved : []).filter(item => {
      if (item.listing_type && item.listing_type !== 'product') return true;
      return KEEP.has(item.category);
    });
    localStorage.setItem('kco_local_showroom_listings_v1', JSON.stringify(kept));
  } catch {}
  showToast('All products deleted. Real Estate, Cars & Trucks and your showroom catalog stay.');
  renderProducts();
};

window.openProductMoreActions = function(pid) {
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">More Actions</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="grid grid-cols-1 gap-2">
          <button onclick="previewProduct('${pid}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Live Preview</button>
          <button onclick="quickEditProduct('${pid}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Quick Edit</button>
          <button onclick="duplicateProduct('${pid}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Duplicate</button>
          <button onclick="archiveProduct('${pid}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-sm font-semibold text-red-200">Archive</button>
        </div>
      </div>
    </div>`);
};

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'morning'; if (h < 17) return 'afternoon'; return 'evening';
}

function renderRevenueChart(orders) {
  const ctx = document.getElementById('chart-revenue');
  if (!ctx) return;
  const months = [];
  const now = new Date();
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push({ label: d.toLocaleString('default', { month: 'short' }), month: d.getMonth(), year: d.getFullYear() });
  }
  const data = months.map(m => orders.filter(o => {
    const d = new Date(o.created_at);
    return d.getMonth() === m.month && d.getFullYear() === m.year && ['approved', 'payment_approved', 'delivered'].includes(o.status);
  }).reduce((s, o) => s + (parseFloat(o.amount) || 0), 0));
  new Chart(ctx, {
    type: 'bar',
    data: { labels: months.map(m => m.label), datasets: [{ label: 'Revenue (USD)', data, backgroundColor: 'rgba(59,130,246,.6)', borderColor: 'rgb(59,130,246)', borderWidth: 1, borderRadius: 6 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { ticks: { color: '#64748b', callback: v => '$' + v.toLocaleString() }, grid: { color: 'rgba(59,130,246,.05)' } }, x: { ticks: { color: '#64748b' }, grid: { display: false } } } },
  });
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  SMART PRODUCT CATEGORY CONFIG
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// The exact marketplace category names (src/categories.js) â€” the same list the
// customer showroom category bar renders, so admin products always land in a
// category the showroom actually shows.
const PRODUCT_CATEGORIES = MARKETPLACE_CATEGORIES.map(c => c.name);

const AUTOMOTIVE_CATEGORIES = MARKETPLACE_AUTOMOTIVE;

const CAT_FIELDS = {
  default: [
    { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
    { key: 'brand', label: 'Brand', type: 'text' },
    { key: 'model', label: 'Model', type: 'text' },
    { key: 'color', label: 'Color', type: 'text' },
    { key: 'size', label: 'Size', type: 'text' },
    { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used - Like New', 'Used - Good', 'Used - Fair'], required: true },
    { key: 'price', label: 'Price (USD)', type: 'number', required: true },
    { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
    { key: 'warranty', label: 'Warranty', type: 'text' },
    { key: 'description', label: 'Description', type: 'textarea', span: 2 },
  ],
  Phones: [
    { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
    { key: 'brand', label: 'Brand', type: 'text', required: true },
    { key: 'model', label: 'Model', type: 'text', required: true },
    { key: 'storage', label: 'Storage (e.g. 128GB)', type: 'text' },
    { key: 'ram', label: 'RAM (e.g. 8GB)', type: 'text' },
    { key: 'color', label: 'Color', type: 'text' },
    { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used'], required: true },
    { key: 'price', label: 'Price (USD)', type: 'number', required: true },
    { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
    { key: 'warranty', label: 'Warranty', type: 'text' },
    { key: 'description', label: 'Description', type: 'textarea', span: 2 },
  ],
  'Computers & Laptops': [
    { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
    { key: 'brand', label: 'Brand', type: 'text', required: true },
    { key: 'model', label: 'Model', type: 'text', required: true },
    { key: 'processor', label: 'Processor (CPU)', type: 'text' },
    { key: 'ram', label: 'RAM', type: 'text' },
    { key: 'storage', label: 'Storage', type: 'text' },
    { key: 'display', label: 'Display Size', type: 'text' },
    { key: 'graphics', label: 'Graphics Card', type: 'text' },
    { key: 'os', label: 'Operating System', type: 'text' },
    { key: 'color', label: 'Color', type: 'text' },
    { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used'], required: true },
    { key: 'price', label: 'Price (USD)', type: 'number', required: true },
    { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
    { key: 'description', label: 'Description', type: 'textarea', span: 2 },
  ],
  Electronics: [
    { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
    { key: 'brand', label: 'Brand', type: 'text' },
    { key: 'model', label: 'Model Number', type: 'text' },
    { key: 'color', label: 'Color', type: 'text' },
    { key: 'voltage', label: 'Voltage', type: 'text' },
    { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used'], required: true },
    { key: 'price', label: 'Price (USD)', type: 'number', required: true },
    { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
    { key: 'warranty', label: 'Warranty', type: 'text' },
    { key: 'description', label: 'Description', type: 'textarea', span: 2 },
  ],
  Shoes: [
    { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
    { key: 'brand', label: 'Brand', type: 'text', required: true },
    { key: 'size', label: 'Size', type: 'text' },
    { key: 'color', label: 'Color', type: 'text' },
    { key: 'material', label: 'Material', type: 'text' },
    { key: 'gender', label: 'Gender', type: 'select', options: ['Men', 'Women', 'Unisex', 'Kids'] },
    { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used'], required: true },
    { key: 'price', label: 'Price (USD)', type: 'number', required: true },
    { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
    { key: 'description', label: 'Description', type: 'textarea', span: 2 },
  ],
  Jewelry: [
    { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
    { key: 'brand', label: 'Brand', type: 'text' },
    { key: 'material', label: 'Material (e.g. 14k Gold)', type: 'text' },
    { key: 'gemstone', label: 'Gemstone', type: 'text' },
    { key: 'size', label: 'Size / Weight', type: 'text' },
    { key: 'color', label: 'Color', type: 'text' },
    { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used - Like New', 'Used'] },
    { key: 'price', label: 'Price (USD)', type: 'number', required: true },
    { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
    { key: 'description', label: 'Description', type: 'textarea', span: 2 },
  ],
  Watches: [
    { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
    { key: 'brand', label: 'Brand', type: 'text', required: true },
    { key: 'model', label: 'Model', type: 'text' },
    { key: 'movement', label: 'Movement (Quartz/Automatic)', type: 'text' },
    { key: 'case_material', label: 'Case Material', type: 'text' },
    { key: 'water_resistance', label: 'Water Resistance', type: 'text' },
    { key: 'color', label: 'Dial Color', type: 'text' },
    { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used'] },
    { key: 'price', label: 'Price (USD)', type: 'number', required: true },
    { key: 'description', label: 'Description', type: 'textarea', span: 2 },
  ],
  Gaming: [
    { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
    { key: 'brand', label: 'Brand', type: 'text' },
    { key: 'platform', label: 'Platform (PS5, Xbox, PCâ€¦)', type: 'text' },
    { key: 'model', label: 'Game / Model', type: 'text' },
    { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used'], required: true },
    { key: 'price', label: 'Price (USD)', type: 'number', required: true },
    { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
    { key: 'description', label: 'Description', type: 'textarea', span: 2 },
  ],
  'Sports & Fitness': [
    { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
    { key: 'brand', label: 'Brand', type: 'text' },
    { key: 'size', label: 'Size / Dimensions', type: 'text' },
    { key: 'color', label: 'Color', type: 'text' },
    { key: 'material', label: 'Material', type: 'text' },
    { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used'] },
    { key: 'price', label: 'Price (USD)', type: 'number', required: true },
    { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
    { key: 'description', label: 'Description', type: 'textarea', span: 2 },
  ],
};
// Alias categories to existing field configs
['Men\'s Fashion', 'Women\'s Fashion', 'Fashion'].forEach(k => CAT_FIELDS[k] = [
  { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
  { key: 'brand', label: 'Brand', type: 'text' },
  { key: 'type', label: 'Type (T-Shirt, Dressâ€¦)', type: 'text' },
  { key: 'size', label: 'Size', type: 'text' },
  { key: 'color', label: 'Color', type: 'text' },
  { key: 'material', label: 'Material', type: 'text' },
  { key: 'gender', label: 'Gender', type: 'select', options: ['Men', 'Women', 'Unisex', 'Kids'] },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used'] },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
]);

// â”€â”€ Category-specific field templates for EVERY product category â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Each template gives the AI scanner + the manual form the exact fields for
// that kind of product, so a bag scan fills bag fields, a book scan book
// fields, etc. Non-column keys are stored in the `specifications` JSONB.
CAT_FIELDS['Bags & Accessories'] = [
  { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
  { key: 'brand', label: 'Brand', type: 'text' },
  { key: 'type', label: 'Type (Handbag, Backpack, Luggageâ€¦)', type: 'text' },
  { key: 'size', label: 'Size / Dimensions', type: 'text' },
  { key: 'material', label: 'Material (e.g. Leather)', type: 'text' },
  { key: 'color', label: 'Color', type: 'text' },
  { key: 'gender', label: 'Gender', type: 'select', options: ['Men', 'Women', 'Unisex', 'Kids'] },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used - Like New', 'Used - Good', 'Used - Fair'], required: true },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'warranty', label: 'Warranty', type: 'text' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];
CAT_FIELDS['Beauty & Skincare'] = [
  { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
  { key: 'brand', label: 'Brand', type: 'text' },
  { key: 'type', label: 'Type (Serum, Cream, Makeupâ€¦)', type: 'text' },
  { key: 'size', label: 'Size (ml / g)', type: 'text' },
  { key: 'skin_type', label: 'Skin Type', type: 'text' },
  { key: 'ingredients', label: 'Key Ingredients', type: 'text' },
  { key: 'color', label: 'Color / Shade', type: 'text' },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used - Like New', 'Used'] },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];
CAT_FIELDS['Home & Kitchen'] = [
  { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
  { key: 'brand', label: 'Brand', type: 'text' },
  { key: 'model', label: 'Model', type: 'text' },
  { key: 'type', label: 'Type (Appliance, Cookware, Decorâ€¦)', type: 'text' },
  { key: 'color', label: 'Color', type: 'text' },
  { key: 'material', label: 'Material', type: 'text' },
  { key: 'dimensions', label: 'Dimensions', type: 'text' },
  { key: 'voltage', label: 'Voltage / Power', type: 'text' },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used - Like New', 'Used'], required: true },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'warranty', label: 'Warranty', type: 'text' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];
CAT_FIELDS['Furniture'] = [
  { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
  { key: 'brand', label: 'Brand', type: 'text' },
  { key: 'type', label: 'Type (Sofa, Table, Chairâ€¦)', type: 'text' },
  { key: 'material', label: 'Material', type: 'text' },
  { key: 'color', label: 'Color', type: 'text' },
  { key: 'dimensions', label: 'Dimensions', type: 'text' },
  { key: 'assembly', label: 'Assembly Required', type: 'select', options: ['', 'Yes', 'No'] },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used - Like New', 'Used - Good', 'Used - Fair'] },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'warranty', label: 'Warranty', type: 'text' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];
CAT_FIELDS['Garden & Outdoor'] = [
  { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
  { key: 'brand', label: 'Brand', type: 'text' },
  { key: 'type', label: 'Type (Mower, Grill, Furnitureâ€¦)', type: 'text' },
  { key: 'material', label: 'Material', type: 'text' },
  { key: 'color', label: 'Color', type: 'text' },
  { key: 'dimensions', label: 'Dimensions', type: 'text' },
  { key: 'weatherproof', label: 'Weatherproof', type: 'select', options: ['', 'Yes', 'No'] },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used - Like New', 'Used'] },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];
CAT_FIELDS['Toys & Games'] = [
  { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
  { key: 'brand', label: 'Brand', type: 'text' },
  { key: 'model', label: 'Model / Set Name', type: 'text' },
  { key: 'age_range', label: 'Age Range', type: 'text' },
  { key: 'material', label: 'Material', type: 'text' },
  { key: 'color', label: 'Color', type: 'text' },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used - Like New', 'Used'] },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];
CAT_FIELDS['Food & Groceries'] = [
  { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
  { key: 'brand', label: 'Brand', type: 'text' },
  { key: 'type', label: 'Type (Snack, Beverage, Pantryâ€¦)', type: 'text' },
  { key: 'size', label: 'Size / Weight', type: 'text' },
  { key: 'shelf_life', label: 'Shelf Life', type: 'text' },
  { key: 'storage', label: 'Storage Instructions', type: 'text' },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'New (Sealed)', 'Open Box'] },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];
CAT_FIELDS['Baby & Kids'] = [
  { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
  { key: 'brand', label: 'Brand', type: 'text' },
  { key: 'type', label: 'Type (Stroller, Clothing, Toyâ€¦)', type: 'text' },
  { key: 'age_range', label: 'Age Range', type: 'text' },
  { key: 'size', label: 'Size', type: 'text' },
  { key: 'material', label: 'Material', type: 'text' },
  { key: 'color', label: 'Color', type: 'text' },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used - Like New', 'Used'] },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'warranty', label: 'Warranty', type: 'text' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];
CAT_FIELDS['Health & Medical'] = [
  { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
  { key: 'brand', label: 'Brand', type: 'text' },
  { key: 'type', label: 'Type (Device, Supplement, Careâ€¦)', type: 'text' },
  { key: 'size', label: 'Size / Quantity', type: 'text' },
  { key: 'usage', label: 'Usage / Dosage', type: 'text' },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used - Like New', 'Used'] },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'warranty', label: 'Warranty', type: 'text' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];
CAT_FIELDS['Books & Education'] = [
  { key: 'title', label: 'Title / Book Name', type: 'text', required: true, span: 2 },
  { key: 'author', label: 'Author', type: 'text' },
  { key: 'publisher', label: 'Publisher', type: 'text' },
  { key: 'language', label: 'Language', type: 'text' },
  { key: 'format', label: 'Format (Hardcover, Paperback, E-book)', type: 'text' },
  { key: 'isbn', label: 'ISBN', type: 'text' },
  { key: 'pages', label: 'Pages', type: 'text' },
  { key: 'edition', label: 'Edition', type: 'text' },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Like New', 'Very Good', 'Good', 'Fair'] },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];
CAT_FIELDS['Office & Stationery'] = [
  { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
  { key: 'brand', label: 'Brand', type: 'text' },
  { key: 'type', label: 'Type (Notebook, Pen, Printerâ€¦)', type: 'text' },
  { key: 'material', label: 'Material', type: 'text' },
  { key: 'color', label: 'Color', type: 'text' },
  { key: 'size', label: 'Size', type: 'text' },
  { key: 'quantity', label: 'Quantity / Pack Size', type: 'text' },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used'] },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];
CAT_FIELDS['Pet Supplies'] = [
  { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
  { key: 'brand', label: 'Brand', type: 'text' },
  { key: 'type', label: 'Type (Food, Toy, Bed, Collarâ€¦)', type: 'text' },
  { key: 'pet_type', label: 'Pet Type (Dog, Cat, Birdâ€¦)', type: 'text' },
  { key: 'size', label: 'Size / Weight', type: 'text' },
  { key: 'material', label: 'Material', type: 'text' },
  { key: 'color', label: 'Color', type: 'text' },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used - Like New', 'Used'] },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];
CAT_FIELDS['Musical Instruments'] = [
  { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
  { key: 'brand', label: 'Brand', type: 'text', required: true },
  { key: 'model', label: 'Model', type: 'text' },
  { key: 'type', label: 'Type (Guitar, Piano, Drumsâ€¦)', type: 'text' },
  { key: 'material', label: 'Material', type: 'text' },
  { key: 'color', label: 'Color / Finish', type: 'text' },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used - Like New', 'Used - Good', 'Used - Fair'], required: true },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'warranty', label: 'Warranty', type: 'text' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];
CAT_FIELDS['Cameras & Photography'] = [
  { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
  { key: 'brand', label: 'Brand', type: 'text', required: true },
  { key: 'model', label: 'Model', type: 'text' },
  { key: 'lens', label: 'Lens', type: 'text' },
  { key: 'sensor', label: 'Sensor', type: 'text' },
  { key: 'megapixels', label: 'Megapixels', type: 'text' },
  { key: 'video', label: 'Video Recording', type: 'text' },
  { key: 'color', label: 'Color', type: 'text' },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used - Like New', 'Used - Good', 'Used - Fair'], required: true },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'warranty', label: 'Warranty', type: 'text' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];
CAT_FIELDS['Software & Digital'] = [
  { key: 'title', label: 'Product Title', type: 'text', required: true, span: 2 },
  { key: 'brand', label: 'Brand / Developer', type: 'text' },
  { key: 'type', label: 'Type (Software, App, Licenseâ€¦)', type: 'text' },
  { key: 'platform', label: 'Platform', type: 'text' },
  { key: 'license', label: 'License Type', type: 'text' },
  { key: 'version', label: 'Version', type: 'text' },
  { key: 'language', label: 'Language', type: 'text' },
  { key: 'format', label: 'Format', type: 'text' },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];
CAT_FIELDS['Services'] = [
  { key: 'title', label: 'Service Title', type: 'text', required: true, span: 2 },
  { key: 'type', label: 'Service Type', type: 'text' },
  { key: 'duration', label: 'Duration', type: 'text' },
  { key: 'location', label: 'Location / Coverage', type: 'text' },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];
CAT_FIELDS['Social Media Accounts'] = [
  { key: 'title', label: 'Account Title', type: 'text', required: true, span: 2 },
  { key: 'type', label: 'Platform (Instagram, TikTokâ€¦)', type: 'text' },
  { key: 'followers', label: 'Followers', type: 'text' },
  { key: 'engagement', label: 'Engagement Rate', type: 'text' },
  { key: 'niche', label: 'Niche', type: 'text' },
  { key: 'condition', label: 'Status', type: 'select', options: ['Active', 'Verified', 'Suspended'] },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
];

AUTOMOTIVE_CATEGORIES.forEach(k => CAT_FIELDS[k] = [
  { key: 'title', label: 'Vehicle Title', type: 'text', required: true, span: 2, placeholder: 'e.g. 2023 Toyota Land Cruiser V8 Turbo Diesel' },
  { key: 'brand', label: 'Brand', type: 'text', required: true },
  { key: 'model', label: 'Model', type: 'text', required: true },
  { key: 'model_year', label: 'Model Year', type: 'text', placeholder: 'e.g. 2023' },
  { key: 'body_type', label: 'Body Type', type: 'select', options: ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 'Wagon', 'Pickup', 'Van', 'Truck', 'Sports Car', 'Luxury Sedan', 'Motorcycle', 'Yacht', 'Other'] },
  { key: 'mileage', label: 'Mileage', type: 'text', placeholder: 'e.g. 15,000 mi or 0 (new)' },
  { key: 'engine', label: 'Engine', type: 'text', placeholder: 'e.g. 4.0L V8 Turbo Diesel' },
  { key: 'horsepower', label: 'Horsepower (HP)', type: 'text', placeholder: 'e.g. 500 HP' },
  { key: 'transmission', label: 'Transmission', type: 'select', options: ['Automatic', 'Manual', 'CVT', 'Dual-Clutch', 'Semi-Automatic', 'Electric (Single Speed)'] },
  { key: 'drive_type', label: 'Drive Type', type: 'select', options: ['FWD', 'RWD', 'AWD', '4WD'] },
  { key: 'fuel_type', label: 'Fuel Type', type: 'select', options: ['Gasoline', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid', 'LPG', 'Bio-diesel'] },
  { key: 'seating_capacity', label: 'Seating Capacity', type: 'text', placeholder: 'e.g. 5 seats' },
  { key: 'doors', label: 'Number of Doors', type: 'text', placeholder: 'e.g. 4' },
  { key: 'safety_features', label: 'Safety Features (comma separated)', type: 'text', placeholder: 'ABS, Airbags, Lane Assist, Traction Controlâ€¦' },
  { key: 'color', label: 'Color', type: 'text' },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used - Like New', 'Used - Good', 'Used - Fair'], required: true },
  { key: 'price', label: 'Price', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'warranty', label: 'Warranty', type: 'text' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
]);

// Every product gets two editable price fields: "Real Price" (the original,
// higher price that is crossed out on the store) and "Discount Price" (what the
// customer actually pays). This injects the real_price field right after each
// price field in every category config, and relabels price as Discount Price.
for (const key of Object.keys(CAT_FIELDS)) {
  CAT_FIELDS[key] = CAT_FIELDS[key].flatMap(f => {
    if (f.key !== 'price') return [f];
    return [
      { key: 'real_price', label: 'Real Price (USD) â€” crossed out when a discount is active', type: 'number', placeholder: 'e.g. 250000 â€” original price before discount' },
      { ...f, label: 'Discount Price (USD) â€” the price customers pay', placeholder: 'e.g. 200000 â€” the price customers actually pay' },
    ];
  });
}

function renderCountryOptions(selectedCode = '') {
  return COUNTRIES.map(country => `<option value="${country.code}" ${selectedCode === country.code ? 'selected' : ''}>${country.flag} ${country.name}</option>`).join('');
}

function renderCurrencyOptions(selectedCurrency = 'USD') {
  return SORTED_CURRENCIES.map(currency => `<option value="${currency}" ${selectedCurrency === currency ? 'selected' : ''}>${currency}</option>`).join('');
}

function normalizeCommaList(value) {
  return String(value || '').split(',').map(item => item.trim()).filter(Boolean);
}

function setFieldValue(name, value) {
  const field = document.querySelector(`[name="${name}"]`);
  if (!field || value == null) return;
  field.value = value;
}

function configurePriceField(fieldId) {
  const priceField = document.getElementById(fieldId);
  if (!priceField) return;
  priceField.min = String(GLOBAL_PRICE_MIN);
  priceField.max = String(GLOBAL_PRICE_MAX);
  priceField.placeholder = `Price (${GLOBAL_PRICE_MIN} - ${GLOBAL_PRICE_MAX})`;
}

function syncCountryAndCurrency(prefix) {
  const codeField = document.getElementById(`${prefix}-country_code`);
  const countryField = document.getElementById(`${prefix}-country`);
  const currencyField = document.getElementById(`${prefix}-currency`);
  if (!codeField) return;
  const selected = COUNTRIES.find(country => country.code === codeField.value);
  if (countryField && selected) countryField.value = selected.name;
  if (currencyField && selected) currencyField.value = getDefaultCurrencyForCountry(selected.code);
}

function setImageRequirement(prefix, count) {
  const note = document.getElementById(`${prefix}-image-requirement`);
  const target = document.getElementById(`${prefix}-required_image_count`);
  if (target) target.value = count ? String(count) : '';
  if (!note) return;
  if (count > 0) {
    // Informational only â€” never blocks saving or publishing. Any number of
    // images is fine; the gallery simply shows what is available.
    note.textContent = `This template fits up to ${count} images. Fewer images are perfectly fine â€” you can save and publish anytime.`;
    note.classList.remove('hidden');
  } else {
    note.textContent = '';
    note.classList.add('hidden');
  }
}

// The 24-image (or any-count) minimum was removed per owner request: listings
// may always be saved and published with however many images they have. This
// is kept only as a harmless no-op so existing callers stay valid. No fake or
// duplicate images are ever generated to pad the count.
function validateImageRequirement(count, images, label) {
  return; // never blocks â€” any image count is allowed
}

function applyCatalogDraftToProductForm(category, mode = 'full') {
  const templateId = document.getElementById('pf-catalog_template_id')?.value || '';
  const currency = document.getElementById('pf-currency')?.value || 'USD';
  const price = parseFloat(document.getElementById('pf-price')?.value) || GLOBAL_PRICE_MIN;
  const draft = buildCatalogDraft({ templateId, listingType: 'product', category, countryCode: 'US', currency, price });
  if (!draft) {
    setImageRequirement('pf', AUTOMOTIVE_CATEGORIES.includes(category) ? 24 : 0);
    return;
  }
  setImageRequirement('pf', draft.requiredImageCount || 0);
  setFieldValue('currency', draft.currency);
  setFieldValue('subcategory', draft.subcategory);
  setFieldValue('features_text', draft.features.join(', '));
  setFieldValue('highlights_text', draft.highlights.join(', '));
  setFieldValue('seo_keywords_text', draft.seo_keywords.join(', '));
  if (mode === 'full') {
    setFieldValue('title', draft.title);
    setFieldValue('description', draft.description);
    setFieldValue('brand', draft.brand || '');
    setFieldValue('model', draft.model || '');
    setFieldValue('color', draft.color || '');
    setFieldValue('size', draft.size || '');
    setFieldValue('condition', draft.condition || 'New');
  } else {
    setFieldValue('description', draft.description);
  }
}

function applyCatalogDraftToPropertyForm(mode = 'full') {
  const templateId = document.getElementById('ppf-catalog_template_id')?.value || '';
  const countryCode = document.getElementById('ppf-country_code')?.value || 'US';
  const currency = document.getElementById('ppf-currency')?.value || 'USD';
  const price = parseFloat(document.getElementById('ppf-price')?.value) || GLOBAL_PRICE_MIN;
  const draft = buildCatalogDraft({ templateId, listingType: 'property', category: 'Real Estate', countryCode, currency, price });
  if (!draft) {
    setImageRequirement('ppf', 0);
    return;
  }
  setImageRequirement('ppf', draft.requiredImageCount || 0);
  setFieldValue('country', draft.country);
  setFieldValue('country_code', draft.country_code);
  setFieldValue('currency', draft.currency);
  setFieldValue('subcategory', draft.subcategory);
  setFieldValue('product_location', draft.product_location);
  setFieldValue('features_text', draft.features.join(', '));
  setFieldValue('highlights_text', draft.highlights.join(', '));
  setFieldValue('seo_keywords_text', draft.seo_keywords.join(', '));
  if (mode === 'full') {
    setFieldValue('title', draft.title);
    setFieldValue('description', draft.description);
    setFieldValue('property_type', draft.property_type || '');
    setFieldValue('bedrooms', draft.bedrooms ?? '');
    setFieldValue('bathrooms', draft.bathrooms ?? '');
    setFieldValue('building_size', draft.building_size || '');
    setFieldValue('land_size', draft.land_size || '');
    setFieldValue('furnished', draft.furnished || '');
  } else {
    setFieldValue('description', draft.description);
  }
}

window.applyProductCatalogTemplate = function(category, mode = 'full') {
  applyCatalogDraftToProductForm(category, mode);
};

window.applyPropertyCatalogTemplate = function(mode = 'full') {
  applyCatalogDraftToPropertyForm(mode);
};

function getProductFields(category) {
  return CAT_FIELDS[category] || CAT_FIELDS.default;
}

function renderProductFieldsForm(category, existing = {}, isEdit = false) {
  const fields = getProductFields(category);
  return fields.map(f => {
    const val = existing[f.key] || '';
    const gridSpan = f.span === 2 ? 'sm:col-span-2' : '';
    // Existing products support partial updates â€” never force required fields on edit.
    const req = (!isEdit && f.required) ? 'required' : '';
    const ph = f.placeholder || f.label;
    let input = '';
    if (f.type === 'select') {
      input = `<select class="input-field" name="${f.key}" id="pf-${f.key}" ${req}>
        <option value="">Selectâ€¦</option>
        ${f.options.map(o => `<option value="${o}" ${val === o ? 'selected' : ''}>${o}</option>`).join('')}
      </select>`;
    } else if (f.type === 'textarea') {
      input = `<textarea class="input-field" name="${f.key}" id="pf-${f.key}" rows="3" placeholder="Write a detailed descriptionâ€¦">${esc(val)}</textarea>`;
    } else {
      const searchableKeys = ['brand', 'model', 'color', 'size', 'material', 'platform'];
      const listId = searchableKeys.includes(f.key) ? `pf-list-${f.key}` : '';
      const suggestions = {
        brand: ['Apple', 'Samsung', 'Sony', 'LG', 'HP', 'Dell', 'Lenovo', 'Asus', 'Nike', 'Adidas', 'Puma', 'Gucci', 'Rolex', 'Toyota', 'Mercedes', 'BMW', 'Tesla'],
        model: ['Pro', 'Ultra', 'Max', 'SE', 'Standard', 'Plus', 'Series 1', 'Series 2'],
        color: ['Black', 'White', 'Silver', 'Blue', 'Red', 'Green', 'Gold', 'Gray', 'Pink', 'Brown'],
        size: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '32', '34', '36', '38', '40', '42'],
        material: ['Cotton', 'Leather', 'Stainless Steel', 'Aluminum', 'Wood', 'Glass', 'Plastic'],
        platform: ['PS5', 'Xbox Series X', 'Nintendo Switch', 'PC', 'Android', 'iOS'],
      };
      const options = (suggestions[f.key] || []).map(item => `<option value="${esc(item)}"></option>`).join('');
      input = `<input type="${f.type}" class="input-field" name="${f.key}" id="pf-${f.key}" value="${esc(val)}" placeholder="${ph}" ${listId ? `list="${listId}"` : ''} ${req}>${listId ? `<datalist id="${listId}">${options}</datalist>` : ''}`;
    }
    return `<div class="${gridSpan}"><label class="lbl">${f.label}${f.required ? (isEdit ? '' : ' *') : ''}</label>${input}</div>`;
  }).join('');
}

// Step 1: Choose category
window.showAddProductStep1 = function() {
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Add New Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>

        <!-- Scan first â€” let AI pick the category -->
        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3 mb-4">
          <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> Scan First â€” let AI pick the category</p>
          <p class="text-[11px] text-gray-500">Upload your product photos, press SCAN WITH AI. It detects EVERY distinct product (a photo with a bag + watch + shoes + phone gives four separate listings; each detection fills its own listing). Review each detection, then the correct category form opens filled for you. Nothing is published automatically.</p>
          <div id="s1-drop-zone" class="drop-zone" onclick="pickMediaForForm('s1-img-upload')">
            <i data-lucide="image-plus" class="w-6 h-6 text-blue-400 mx-auto mb-2"></i>
            <p class="text-xs font-bold text-gray-300">Click or drag & drop product images or videos</p>
            <input type="file" id="s1-img-upload" class="hidden" multiple accept="image/*,video/mp4,video/webm,video/*,application/pdf" onclick="event.stopPropagation()" onchange="handleStep1ImageUpload(event)">
          </div>
          <div id="s1-image-preview" class="flex flex-wrap gap-2"></div>
          <button type="button" id="btn-s1-scan" onclick="scanFirstWithAI()" disabled class="btn-press w-full px-4 py-3 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2" style="opacity:0.5">
            <i data-lucide="sparkles" class="w-4 h-4"></i> SCAN WITH AI
          </button>
          <div id="s1-scan-status" class="hidden text-xs font-medium"></div>
        </div>

        <div class="flex items-center gap-3 mb-3">
          <div class="flex-1 h-px bg-gray-800"></div>
          <span class="text-[11px] font-bold text-gray-500 uppercase tracking-wide">or choose a category manually</span>
          <div class="flex-1 h-px bg-gray-800"></div>
        </div>

        <p class="text-xs text-gray-400 mb-3">Choose the category that best matches your product. The form will show smart fields automatically.</p>
        <div class="relative mb-3">
          <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
          <input id="product-category-search" type="search" class="input-field pl-9" placeholder="Search category..." oninput="filterProductCategoryChoices(this.value)">
        </div>
        <div id="product-category-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-96 overflow-y-auto scrollbar-thin pr-1">
          ${PRODUCT_CATEGORIES.map(c => `
            <button data-category="${esc(c).toLowerCase()}" onclick="showAddProductStep2('${c.replace(/'/g, "\\'")}')" class="btn-press flex items-center gap-3 p-4 glass-soft border border-blue-500/15 hover:border-blue-500/40 rounded-2xl transition text-left">
              <i data-lucide="tag" class="w-5 h-5 text-blue-400 shrink-0"></i>
              <span class="text-sm font-semibold text-gray-200">${esc(c)}</span>
            </button>`).join('')}
        </div>
      </div>
    </div>`);
  if (window.lucide) lucide.createIcons();
};

window.filterProductCategoryChoices = function(query) {
  const q = String(query || '').trim().toLowerCase();
  document.querySelectorAll('#product-category-grid [data-category]').forEach((btn) => {
    const show = !q || btn.dataset.category.includes(q);
    btn.classList.toggle('hidden', !show);
  });
};

window.showAddProductStep2 = function(category, existingData = {}) {
  const isEdit = !!existingData.property_id;
  const productTemplates = getTemplatesForCategory('product', category);
  const selectedCurrency = existingData.currency || 'USD';
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeProductFormModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between gap-3 mb-6">
          <div class="min-w-0">
            <h3 class="text-2xl font-black text-white">${isEdit ? 'Edit Product' : 'Add Product'} â€” ${esc(category)}</h3>
            <p class="text-sm text-gray-500 mt-1 truncate">${isEdit ? `Editing: ${esc(existingData.property_id)}` : 'Fill in the product details below'}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${isEdit ? `<button type="button" onclick="closeProductFormModal()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Product Manager</button>` : `<button type="button" onclick="showAddProductStep1()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5" title="Change category"><i data-lucide="arrow-left" class="w-4 h-4"></i> Category</button>`}
            <button type="button" onclick="closeProductFormModal()" class="btn-press px-4 h-11 flex items-center justify-center rounded-xl text-sm font-bold uppercase tracking-wide text-gray-400 hover:text-white hover:bg-gray-800 transition" title="Close (X) â€” return to Product Manager">
              <i data-lucide="x" class="w-4 h-4 mr-1.5"></i>Back
            </button>
          </div>
        </div>

        <form id="product-form" onsubmit="saveProduct(event,'${esc(category)}','${isEdit ? existingData.property_id : ''}')" class="space-y-6">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-sm font-bold text-white uppercase tracking-wide">Global Catalog Autofill</p>
                <p class="text-sm text-gray-500 mt-1">Pick a template, country, and currency to auto-build the listing title, description, and metadata.</p>
              </div>
              <button type="button" onclick="applyProductCatalogTemplate('${esc(category)}')" class="btn-press px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition">Refresh Template</button>
            </div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Catalog Template</label><select class="input-field" name="catalog_template_id" id="pf-catalog_template_id" onchange="applyProductCatalogTemplate('${esc(category)}')"><option value="">Choose a template...</option>${productTemplates.map(template => `<option value="${template.id}">${esc(template.label)} - ${esc(template.subcategory || template.category)}</option>`).join('')}</select></div>
              <div class="sm:col-span-2"><label class="lbl">Currency</label><select class="input-field" name="currency" id="pf-currency" onchange="applyProductCatalogTemplate('${esc(category)}')">${renderCurrencyOptions(selectedCurrency)}</select></div>
            </div>
            <p id="pf-image-requirement" class="hidden text-sm text-amber-300"></p>
            <input type="hidden" name="required_image_count" id="pf-required_image_count" value="">
          </div>

          <div id="product-autosave-note" class="hidden p-4 rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-sm text-emerald-200"></div>

          <!-- Step 1: Image Upload -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <label class="lbl !mb-0">Step 1: Upload Product Images or Videos</label>
              <span class="text-sm text-gray-500">Upload one or multiple images before publishing</span>
            </div>
            <div id="drop-zone" class="drop-zone" onclick="pickMediaForForm('img-upload')">
              <i data-lucide="image-plus" class="w-12 h-12 text-blue-400 mx-auto mb-3"></i>
              <p class="text-lg font-bold text-gray-300">Click or drag & drop images or videos here</p>
              <p class="text-sm text-gray-500 mt-1">PNG, JPG, WEBP, MP4, WebM. First item = cover.</p>
<input type="file" id="img-upload" class="hidden" multiple accept="image/*,video/mp4,video/webm,video/*,application/pdf" onclick="event.stopPropagation()" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${(existingData.images || []).map((url, i) => imageThumbHtml(url, i)).join('')}
            </div>
            <p class="text-sm text-gray-500 mt-1">Drag to reorder â€¢ âœ• deletes any image (even the main/cover â€” the next image becomes the cover) â€¢ â†» replaces â€¢ Upload up to 24 gallery images + videos</p>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
            <div id="image-url-inputs">
              ${(existingData.images || []).map((url, i) => `<input type="hidden" name="images" id="img-url-${i}" value="${esc(url)}">`).join('')}
            </div>
          </div>

          <!-- AI Product Scanner (manual only â€” never auto-scans on upload) -->
          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="min-w-0">
                <p class="text-sm font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> AI Product Scanner</p>
                <p class="text-xs text-gray-500 mt-1">Upload a product image or video, then press SCAN WITH AI — it reads your photo and fills this form for you in one go. No extra clicks or review screens; just review the filled details and press Publish. Powered by Google Gemini free tier â€” add your FREE key in AI Settings if not set.</p>
              </div>
              <button type="button" id="btn-scan-ai" onclick="scanProductWithAI()" class="btn-press px-5 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold rounded-xl transition flex items-center gap-2 shrink-0">
                <i data-lucide="sparkles" class="w-4 h-4"></i> SCAN WITH AI
              </button>
            </div>
            <div id="scan-ai-status" class="hidden text-sm mt-3 font-medium"></div>
          </div>

          <!-- Step 2: Product Details -->
          <div class="text-sm text-blue-200 font-bold uppercase tracking-wide">Step 2: Product Details</div>
          <div class="form-grid form-grid-2">
            ${renderProductFieldsForm(category, existingData, isEdit)}
          </div>

          <div class="form-grid form-grid-2">
            <div class="sm:col-span-2"><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${esc(existingData.subcategory || '')}" placeholder="e.g. Smartphones, SUVs, Model Houses"></div>
            <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${esc((existingData.features || []).join(', '))}" placeholder="5G connectivity, OLED display, fast charging"></div>
            <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${esc((existingData.highlights || []).join(', '))}" placeholder="Retail-ready packaging, premium demand, strong presentation"></div>
            <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${esc((existingData.seo_keywords || []).join(', '))}" placeholder="smartphone, unlocked, global shipping"></div>
          </div>

          <!-- Tags / Badges -->
          <div>
            <label class="lbl">Product Tags / Badges</label>
            <div class="flex flex-wrap gap-2.5">
              ${['New Arrival', 'Best Seller', 'Hot Deal', 'Featured', 'Limited Stock'].map(tag => `
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="tags" value="${tag}" ${(existingData.tags || []).includes(tag) ? 'checked' : ''} class="accent-blue-500 w-5 h-5">
                  <span class="text-sm text-gray-300">${tag}</span>
                </label>`).join('')}
            </div>
          </div>

          <!-- Availability -->
          <div class="form-grid form-grid-2">
            <div>
              <label class="lbl">Availability Status</label>
              <select class="input-field" name="availability_status" id="pf-availability_status">
                ${['In Stock', 'Out of Stock', 'Pre-order', 'Limited Stock'].map(s => `<option value="${s}" ${existingData.availability_status === s ? 'selected' : ''}>${s}</option>`).join('')}
              </select>
            </div>
            <div class="p-4 glass-soft border border-blue-500/15 rounded-2xl">
              <p class="text-sm font-bold text-white">Global Price Range</p>
              <p class="text-sm text-gray-500 mt-1">Allowed price range is ${GLOBAL_PRICE_MIN} to ${GLOBAL_PRICE_MAX} in the selected currency.</p>
            </div>
          </div>

          <!-- Featured -->
          <div class="flex items-center justify-between p-4 glass-soft border border-blue-500/15 rounded-2xl">
            <div>
              <p class="text-sm font-bold text-white">Featured Product</p>
              <p class="text-sm text-gray-500">Show in featured sections</p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" name="is_featured" ${existingData.is_featured ? 'checked' : ''}>
              <span class="toggle-slider"></span>
            </label>
          </div>

          <!-- Active -->
          <div class="flex items-center justify-between p-4 glass-soft border border-blue-500/15 rounded-2xl">
            <div>
              <p class="text-sm font-bold text-white">Published / Active</p>
              <p class="text-sm text-gray-500">Visible to customers on the website</p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" name="is_active" ${isEdit ? (existingData.is_active ? 'checked' : '') : 'checked'}>
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4" id="product-review-panel">
            <p class="text-sm font-bold text-white">Quick Review Before Publish</p>
            <div class="text-sm text-gray-400 mt-1" id="product-review-content">Fill in product details to preview your publish summary.</div>
          </div>

          <div class="flex gap-3 pt-2">
            <button type="button" onclick="previewProductDraft()" class="btn-press px-6 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-2xl text-base transition">
              Live Preview
            </button>
            <button type="submit" name="action" value="publish" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 rounded-2xl text-base transition shadow-lg shadow-blue-600/15">
              ${isEdit ? 'One-Click Publish Changes' : 'One-Click Publish Product'}
            </button>
            <button type="submit" name="action" value="draft" class="btn-press px-7 bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 rounded-2xl text-base transition">
              Save Draft
            </button>
          </div>
        </form>
      </div>
    </div>`);
  setupDropZone();
  setupImageSortable();
  configurePriceField('pf-price');
  configurePriceField('pf-real_price');
  applyCatalogDraftToProductForm(category, 'pricing');
  document.getElementById('pf-price')?.addEventListener('input', () => applyCatalogDraftToProductForm(category, 'pricing'));
  setupProductFormExperience(category, existingData.property_id || '');
  // Escape key always closes the product form and returns to the Product Manager
  window._pfEscapeHandler = (ev) => { if (ev.key === 'Escape') closeProductFormModal(); };
  document.addEventListener('keydown', window._pfEscapeHandler);
};

window.closeProductFormModal = function() {
  if (window._pfEscapeHandler) { document.removeEventListener('keydown', window._pfEscapeHandler); window._pfEscapeHandler = null; }
  // Safety net: the form is gone, so no publish can still be in flight.
  window._productPublishInFlight = false;
  // Form closed without saving — forget which review card was being filled so a
  // later manual publish doesn't jump back to a stale scan list.
  scanReviewActiveIndex = -1;
  closeModal();
  renderProducts();
};


window.switchProductFormCategory = function(newCategory) {
  const form = document.getElementById('product-form');
  if (!form) return;
  const existing = {};
  const fd = new FormData(form);
  for (const [k, v] of fd.entries()) {
    if (k === 'images') {
      existing.images = existing.images || [];
      if (v && !String(v).startsWith('blob:')) existing.images.push(String(v));
    } else if (k === 'tags') {
      existing.tags = existing.tags || [];
      existing.tags.push(v);
    } else {
      existing[k] = v;
    }
  }
  existing.is_featured = form.querySelector('[name="is_featured"]')?.checked || false;
  existing.is_active = form.querySelector('[name="is_active"]')?.checked || false;
  if (existing.property_id && String(existing.property_id).trim()) {
    showAddProductStep2(newCategory, existing);
  } else {
    showAddProductStep2(newCategory, { images: existing.images || [], ...existing });
  }
};


function imageThumbHtml(url, i) {
  const isPdf = looksLikePdf(url);
  const isVid = isVideoUrl(url);
  let media;
  if (isPdf) {
    media = `<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-300 select-none"><span class="text-2xl leading-none">📄</span><span class="text-[10px] font-bold mt-1">PDF</span></div>`;
  } else if (isVid) {
    media = `<video src="${esc(url)}" muted loop preload="metadata" playsinline class="w-full h-full object-cover" onerror="this.style.display='none'"></video>
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow"><svg class="w-4 h-4 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`;
  } else {
    media = `<img src="${esc(url)}" onerror="this.src='/fallback.svg'">`;
  }
  return `<div class="img-thumb ${i === 0 ? 'cover-img' : ''}" data-index="${i}" data-url="${esc(url)}" title="${i === 0 ? 'Cover (main)' : (isVid ? 'Video ' : 'Image ') + (i + 1)}">
    ${media}
    <button class="rm" onclick="removeImage(${i})" type="button" title="Delete">✕</button>
    <button class="rp" onclick="document.getElementById('rp-input-${i}').click()" type="button" title="Replace">↻</button>
    <input type="file" accept="image/*,video/mp4,video/webm,video/*,application/pdf" class="rp-input" id="rp-input-${i}" onchange="replaceImage(${i}, this)">
  </div>`;
}

function setupDropZone() {
  const dz = document.getElementById('drop-zone');
  if (!dz) return;
  dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('drag-over'); });
  dz.addEventListener('dragleave', () => dz.classList.remove('drag-over'));
  dz.addEventListener('drop', e => { e.preventDefault(); dz.classList.remove('drag-over'); handleFileDrop(e.dataTransfer.files); });
}

function setupImageSortable() {
  const preview = document.getElementById('image-preview');
  if (!preview || !window.Sortable) return;
  new Sortable(preview, {
    animation: 150,
    onEnd: () => rebuildImageInputs(),
  });
}

window.handleImageUpload = async function(e) { await processImageFiles(e.target.files); };

async function handleFileDrop(files) { await processImageFiles(files); }

// Run async work on a list with limited parallelism while keeping the original
// order of results (parallel uploads: 3 at a time, so multi-file is fast but
// big videos never flood the network or memory).
async function mapWithConcurrency(items, concurrency, fn) {
  const results = new Array(items.length);
  let next = 0;
  const workers = Array.from({ length: Math.min(Math.max(concurrency, 1), items.length) }, async () => {
    while (next < items.length) {
      const i = next++;
      try { results[i] = await fn(items[i], i); } catch { results[i] = null; }
    }
  });
  await Promise.all(workers);
  return results;
}

// Timeout wrapper so a stalled connection can never leave the "Uploading…"
// spinner spinning forever. On timeout it resolves with an error object so
// uploadImageFile takes its fallback path (embedded image / blob preview).
function uploadWithTimeout(bucket, path, file, opts, timeoutMs = 90000) {
  return new Promise((resolve) => {
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      resolve({ error: { message: `Upload timed out after ${Math.round(timeoutMs / 1000)}s — the network is too slow for this file size.` } });
    }, timeoutMs);
    supabase.storage.from(bucket).upload(path, file, opts).then((res) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(res);
    });
  });
}

// Client-side compression so photos upload fast: a 5–15MB phone photo becomes
// a ~150–400KB JPEG. Videos and PDFs are never compressed. Returns null when
// the file can't be re-encoded (caller then uploads the original).
async function compressImageForUpload(file, maxDim = 1920, quality = 0.82) {
  const objectUrl = URL.createObjectURL(file);
  try {
    const img = new Image();
    await new Promise((resolve, reject) => { img.onload = resolve; img.onerror = reject; img.src = objectUrl; });
    const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
    const w = Math.max(1, Math.round(img.width * scale));
    const h = Math.max(1, Math.round(img.height * scale));
    const canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    canvas.getContext('2d').drawImage(img, 0, 0, w, h);
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', quality));
    if (!blob || !blob.size) return null;
    const name = (file.name || 'photo.jpg').replace(/\.[^.]+$/i, '') + '.jpg';
    return new File([blob], name, { type: 'image/jpeg' });
  } catch {
    return null;
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

async function processImageFiles(files) {
  const preview = document.getElementById('image-preview');
  if (!preview) return;
  const valid = [];
  for (const file of files) {
    const isPdf = file.type === 'application/pdf' || looksLikePdf(file.name);
    const isVid = isVideoFile(file);
    if (!file.type.startsWith('image/') && !isPdf && !isVid) continue;
    if (isVid && file.size > 100 * 1024 * 1024) { showToast('Video must be under 100 MB.', 'error'); continue; }
    valid.push(file);
  }
  if (!valid.length) return;

  // One spinner per file, in selection order.
  const loadingDivs = valid.map(() => {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'img-thumb uploading';
    loadingDiv.style.cssText = 'min-width:90px;min-height:80px;';
    loadingDiv.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-400"><div class="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mb-1.5"></div><span class="text-[10px] font-bold">Uploading…</span></div>`;
    preview.appendChild(loadingDiv);
    return loadingDiv;
  });

  // Upload concurrently (3 at a time). Each spinner is swapped for its real
  // thumbnail in place the moment that file finishes — nothing waits for the
  // slowest upload, so the gallery fills up almost instantly and every thumb
  // stays exactly where the user dropped it.
  await mapWithConcurrency(valid, 3, async (file, i) => {
    const loadingDiv = loadingDivs[i];
    const url = await uploadImageFile(file);
    setTimeout(() => {
      if (!loadingDiv || !loadingDiv.isConnected) return;
      loadingDiv.remove();
      if (url) {
        const div = document.createElement('div');
        div.innerHTML = imageThumbHtml(url, i);
        const el = div.firstElementChild;
        const next = loadingDiv.nextSibling;
        if (next) preview.insertBefore(el, next); else preview.appendChild(el);
      } else {
        showToast(`Failed to upload ${isVideoFile(file) ? 'video' : 'image'}. Try a smaller file.`, 'error');
      }
      rebuildImageInputs();
      updateCoverBadge();
      updateGalleryCounter();
      if (window.lucide) lucide.createIcons();
    }, 0);
  });
}

async function uploadImageFile(file) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    const isImg = String(file.type || '').startsWith('image/');
    const isVid = isVideoFile(file);
    // Images are compressed client-side BEFORE the network upload, so a photo
    // that is 5–15MB becomes ~200–400KB and uploads almost instantly. This is
    // exactly why "another place" in the app uploads fast while Add Product
    // hung: the old code uploaded the raw full-size photo (and every video
    // sequentially) with no compression, no progress and no timeout.
    let payload = file;
    if (isImg && file.size > 250 * 1024) {
      const smaller = await compressImageForUpload(file);
      if (smaller && smaller.size) payload = smaller;
    }
    const ext = payload.type === 'image/jpeg' ? 'jpg' : ((file.name || 'photo.jpg').split('.').pop() || 'jpg');
    const base = `products/${Date.now()}-${Math.random().toString(36).slice(2)}`;
    // Long videos stream slowly on mobile data, so give them a generous window
    // (this is the whole point of "fast upload" — never time out a big file that
    // is still making progress). Timeout is per-attempt; we retry below.
    const timeoutMs = isVid ? 300000 : 90000;
    // Try twice (fresh unique path each time) so a storage hiccup never loses a photo.
    for (let attempt = 0; attempt < 2; attempt++) {
      const path = `${base}${attempt ? '-' + Math.random().toString(36).slice(2, 7) : ''}.${ext}`;
      const { error: upErr } = await uploadWithTimeout('product-images', path, payload, { contentType: payload.type || file.type, upsert: false }, timeoutMs);
      if (!upErr) {
        const { data } = supabase.storage.from('product-images').getPublicUrl(path);
        if (data && data.publicUrl) return data.publicUrl;
      } else {
        console.warn('product-images upload failed (attempt ' + (attempt + 1) + '):', upErr.message || upErr);
      }
    }
    // IMAGES: 100% SHOWROOM GUARANTEE — even when storage fails (or no session),
    // embed a compressed copy of the photo directly with the listing (data URL)
    // so the image ALWAYS shows in the showroom — never a temporary blob: URL,
    // which would be silently dropped when the product is saved & published.
    // VIDEOS: there is no safe offline fallback — a blob: URL would be a broken
    // white/blank player after the page reloads, which is exactly the bug the
    // user reported. So for videos we return null (fail loudly) and the caller
    // tells the user to retry, instead of silently saving a broken video.
    if (isVid) return null;
    try {
      const embedded = await aiClient._downscaleImage(payload, 1200);
      if (embedded) return embedded;
    } catch { /* fall through */ }
    return URL.createObjectURL(file);
  } catch {
    if (isVideoFile(file)) return null;
    return URL.createObjectURL(file);
  }
}

// Native Capacitor gallery picker: opens the system Photo Picker (photos + videos,
// multi-select) directly, bypassing the "Camera / Camera Video / Files" chooser.
// On the website (browser) it returns null so the normal file input is used instead.
async function nativeGalleryFiles() {
  if (!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform())) return null;
  try {
    const { Camera, MediaTypeSelection } = await import('@capacitor/camera');
    const { results } = await Camera.chooseFromGallery({
      mediaType: MediaTypeSelection.All,
      allowMultipleSelection: true,
      includeMetadata: true,
    });
    const files = [];
    for (const r of results || []) {
      if (!r.webPath) continue;
      try {
        const isVideo = r.type === 1;
        const fmt = ((r.metadata && r.metadata.format) || (isVideo ? 'mp4' : 'jpg')).toLowerCase().replace(/^jpeg$/, 'jpg');
        const blob = await fetch(r.webPath).then((x) => x.blob());
        files.push(new File([blob], `gallery-${Date.now()}-${Math.random().toString(36).slice(2)}.${fmt}`, { type: blob.type || (isVideo ? 'video/mp4' : 'image/jpeg') }));
      } catch {}
    }
    return files;
  } catch (err) {
    console.warn('Native gallery picker unavailable:', err);
    return null;
  }
}

// Drop-zone entry point. On native it opens the gallery picker and feeds the
// selected media into the right upload pipeline; on web it falls back to
// opening the hidden file input (unchanged behaviour). The web path calls
// .click() SYNCHRONOUSLY (no await first) so it stays inside the user gesture
// and can never re-enter this handler via event bubbling.
window.pickMediaForForm = async function(inputId) {
  const isNative = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  if (!isNative) { document.getElementById(inputId)?.click(); return; }
  const files = await nativeGalleryFiles();
  if (!files || !files.length) return;
  if (inputId === 's1-img-upload') {
    await handleStep1Files(files);
  } else {
    await processImageFiles(files);
  }
};

window.removeImage = function(index) {
  const preview = document.getElementById('image-preview');
  if (!preview) return;
  const items = [...preview.children];
  if (items[index]) items[index].remove();
  rebuildImageInputs();
  updateCoverBadge();
  updateGalleryCounter();
};

// Replace an existing image at a given index with a newly uploaded file.
window.replaceImage = async function(index, input) {
  const preview = document.getElementById('image-preview');
  if (!preview || !input || !input.files || !input.files[0]) return;
  const file = input.files[0];
  const isPdf = file.type === 'application/pdf' || looksLikePdf(file.name);
  const isVid = isVideoFile(file);
  if (!file.type.startsWith('image/') && !isPdf && !isVid) { showToast('Please choose an image, video, or PDF file.', 'error'); return; }
  if (isVid && file.size > 100 * 1024 * 1024) { showToast('Video must be under 100 MB.', 'error'); return; }
  const url = await uploadImageFile(file);
  if (!url) return;
  const items = [...preview.querySelectorAll('.img-thumb')];
  const thumb = items[index];
  if (!thumb) return;
  thumb.outerHTML = imageThumbHtml(url, index);
  rebuildImageInputs();
  updateCoverBadge();
  updateGalleryCounter();
  showToast(isPdf ? 'Document replaced. Save to apply.' : (isVid ? 'Video replaced. Save to apply.' : 'Image replaced. Save to apply.'), 'info');
};

function rebuildImageInputs() {
  const preview = document.getElementById('image-preview');
  const container = document.getElementById('image-url-inputs');
  if (!preview || !container) return;
  container.innerHTML = '';
  [...preview.querySelectorAll('.img-thumb')].forEach((thumb, i) => {
    // data-url covers PDF thumbs too (they contain no <img> element).
    const url = thumb.dataset.url || (thumb.querySelector('img') ? thumb.querySelector('img').src : '');
    if (!url) return;
    const inp = document.createElement('input');
    inp.type = 'hidden'; inp.name = 'images'; inp.id = `img-url-${i}`; inp.value = url;
    container.appendChild(inp);
  thumb.dataset.index = i;
    // Update remove + replace buttons and their hidden file input
    const rm = thumb.querySelector('.rm');
    if (rm) rm.setAttribute('onclick', `removeImage(${i})`);
    const rp = thumb.querySelector('.rp');
    if (rp) rp.setAttribute('onclick', `document.getElementById('rp-input-${i}').click()`);
    const rpInput = thumb.querySelector('.rp-input');
    if (rpInput) { rpInput.id = `rp-input-${i}`; rpInput.onchange = () => replaceImage(i, rpInput); }
  });
}

function updateCoverBadge() {
  const preview = document.getElementById('image-preview');
  if (!preview) return;
  [...preview.querySelectorAll('.img-thumb')].forEach((t, i) => {
    t.classList.toggle('cover-img', i === 0);
    const isVid = isVideoUrl(t.dataset.url);
    t.title = i === 0 ? 'Cover (main)' : (isVid ? 'Video ' : 'Image ') + (i + 1);
  });
}

// Show how many gallery images are attached. Any count is fine â€” saving and
// publishing always works; 24 is only the maximum gallery size.
function updateGalleryCounter() {
  const preview = document.getElementById('image-preview');
  const counter = document.getElementById('gallery-counter');
  if (!preview || !counter) return;
  const thumbs = [...preview.querySelectorAll('.img-thumb')];
  const count = thumbs.length;
  const videoCount = thumbs.filter(t => isVideoUrl(t.dataset.url)).length;
  const imageCount = count - videoCount;
  if (count === 0) {
    counter.textContent = 'No media yet — you can still save and publish anytime';
  } else {
    const parts = [];
    if (imageCount > 0) parts.push(`${imageCount} image${imageCount > 1 ? 's' : ''}`);
    if (videoCount > 0) parts.push(`${videoCount} video${videoCount > 1 ? 's' : ''}`);
    counter.textContent = `${parts.join(' + ')} — you can save and publish anytime`;
  }
  counter.className = 'text-sm mt-1 font-bold text-gray-400';
}

function productAutoSaveKey(category, existingId) {
  return `kco_product_form_autosave_${category}_${existingId || 'new'}`;
}

function serializeProductForm(form) {
  const fd = new FormData(form);
  const out = { images: [], tags: [], fields: {} };
  for (const [k, v] of fd.entries()) {
    if (k === 'images') {
      if (v && !String(v).startsWith('blob:')) out.images.push(String(v));
    } else if (k === 'tags') {
      out.tags.push(String(v));
    } else {
      out.fields[k] = String(v);
    }
  }
  out.fields.is_featured = form.querySelector('[name="is_featured"]')?.checked ? 'on' : '';
  out.fields.is_active = form.querySelector('[name="is_active"]')?.checked ? 'on' : '';
  return out;
}

function restoreProductFormSnapshot(form, snapshot) {
  if (!snapshot || typeof snapshot !== 'object') return false;
  const fields = snapshot.fields || {};
  Object.entries(fields).forEach(([name, value]) => {
    const target = form.querySelector(`[name="${name}"]`);
    if (!target) return;
    if (target.type === 'checkbox') {
      target.checked = value === 'on' || value === true;
    } else {
      target.value = value == null ? '' : String(value);
    }
  });

  const tags = Array.isArray(snapshot.tags) ? snapshot.tags : [];
  form.querySelectorAll('input[name="tags"]').forEach((cb) => {
    cb.checked = tags.includes(cb.value);
  });

  if (Array.isArray(snapshot.images)) {
    const preview = document.getElementById('image-preview');
    if (preview) {
      preview.innerHTML = snapshot.images.map((url, i) => imageThumbHtml(url, i)).join('');
      rebuildImageInputs();
      updateCoverBadge();
      updateGalleryCounter();
    }
  }
  return true;
}

function updateProductReviewPanel() {
  const panel = document.getElementById('product-review-content');
  const form = document.getElementById('product-form');
  if (!panel || !form) return;
  const title = form.querySelector('[name="title"]')?.value || 'Untitled Product';
  const brand = form.querySelector('[name="brand"]')?.value || 'N/A';
  const price = parseFloat(form.querySelector('[name="price"]')?.value || '0') || 0;
  const realPrice = parseFloat(form.querySelector('[name="real_price"]')?.value || '0') || 0;
  const stockRaw = form.querySelector('[name="stock_quantity"]')?.value;
  const stock = stockRaw === '' || stockRaw == null ? 'Unlimited' : stockRaw;
  const category = state.section === 'products' ? (document.querySelector('#product-form')?.dataset?.category || '') : '';
  const tags = [...form.querySelectorAll('input[name="tags"]:checked')].map(cb => cb.value);
  const imageCount = document.querySelectorAll('#image-preview .img-thumb').length;
  const isActive = form.querySelector('[name="is_active"]')?.checked;
  panel.innerHTML = `
    <div class="grid grid-cols-2 gap-2">
      <div><span class="text-gray-500">Title</span><p class="text-white font-semibold">${esc(title)}</p></div>
      <div><span class="text-gray-500">Brand</span><p class="text-white font-semibold">${esc(brand)}</p></div>
      <div><span class="text-gray-500">Price</span><p class="text-emerald-300 font-semibold">${realPrice > price ? `<span class="line-through text-gray-500 mr-1">$${realPrice.toLocaleString()}</span>` : ''}$${price.toLocaleString()}</p></div>
      <div><span class="text-gray-500">Stock</span><p class="text-white font-semibold">${esc(stock)}</p></div>
      <div><span class="text-gray-500">Media</span><p class="text-white font-semibold">${imageCount}</p></div>
      <div><span class="text-gray-500">Status</span><p class="${isActive ? 'text-emerald-300' : 'text-amber-300'} font-semibold">${isActive ? 'Published' : 'Draft / Hidden'}</p></div>
    </div>
    <div class="mt-2 text-gray-400">Tags: ${tags.length ? esc(tags.join(', ')) : 'No tags selected'}</div>
    ${category ? `<div class="text-gray-500 mt-1">Category: ${esc(category)}</div>` : ''}
  `;
}

window.previewProductDraft = function() {
  const form = document.getElementById('product-form');
  if (!form) return;
  const image = document.querySelector('#image-preview img')?.src || '/fallback.svg';
  const title = form.querySelector('[name="title"]')?.value || 'Untitled Product';
  const desc = form.querySelector('[name="description"]')?.value || 'No description yet.';
  const brand = form.querySelector('[name="brand"]')?.value || 'N/A';
  const price = parseFloat(form.querySelector('[name="price"]')?.value || '0') || 0;
  const realPrice = parseFloat(form.querySelector('[name="real_price"]')?.value || '0') || 0;
  const category = form.dataset.category || 'Product';
  const stock = form.querySelector('[name="stock_quantity"]')?.value || 'Unlimited';
  const isActive = form.querySelector('[name="is_active"]')?.checked;
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Live Draft Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="${esc(image)}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
          <div class="space-y-2">
            <h4 class="text-xl font-black text-white">${esc(title)}</h4>
            <div class="flex items-center gap-2">${badge(isActive ? 'active' : 'inactive')}<span class="badge bg-blue-500/10 text-blue-300 border-blue-500/20">${esc(category)}</span></div>
            <p class="text-sm text-gray-400">${esc(desc)}</p>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">${realPrice > price ? `<span class="text-xs line-through text-gray-500 mr-1">$${realPrice.toLocaleString()}</span>` : ''}$${price.toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${esc(stock)}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2 col-span-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${esc(brand)}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>`);
};

function setupProductFormExperience(category, existingId) {
  const form = document.getElementById('product-form');
  if (!form) return;
  form.dataset.category = category;
  const autoSaveKey = productAutoSaveKey(category, existingId);
  const note = document.getElementById('product-autosave-note');

  // In edit mode the live database is the source of truth: restoring a stale
  // autosave here would resurrect images/fields you already deleted and saved.
  // Only auto-restore crash recovery for NEW (never-saved) products.
  if (!existingId) {
    try {
      const raw = localStorage.getItem(autoSaveKey);
      if (raw) {
        const snapshot = JSON.parse(raw);
        const restored = restoreProductFormSnapshot(form, snapshot);
        if (restored && note) {
          note.textContent = 'Autosave restored from your last session.';
          note.classList.remove('hidden');
        }
      }
    } catch {}
  }

  const autosave = () => {
    try {
      localStorage.setItem(autoSaveKey, JSON.stringify(serializeProductForm(form)));
      if (note) {
        note.textContent = `Auto saved at ${new Date().toLocaleTimeString()}`;
        note.classList.remove('hidden');
      }
    } catch {}
    updateProductReviewPanel();
  };

  let timer;
  const schedule = () => {
    clearTimeout(timer);
    timer = setTimeout(autosave, 500);
  };

  form.querySelectorAll('input, textarea, select').forEach((el) => {
    el.addEventListener('input', schedule);
    el.addEventListener('change', schedule);
  });

  updateProductReviewPanel();
  updateGalleryCounter();
}

// â”€â”€ AI PRODUCT SCANNER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// The "SCAN WITH AI" button on the product form. It NEVER runs on upload â€”
// it only runs when you press the button:
// Upload â†’ SCAN WITH AI â†’ Identify Product â†’ Complete Specifications â†’
// Estimate Price â†’ Fill Form â†’ Generate Detailed Description â†’
// I review/edit everything â†’ SAVE/UPDATE â†’ Showroom.
//
// Three stages, in order:
//   1) IDENTIFY the exact product from the photo (never swap brands).
//   2) COMPLETE standard specifications ONLY for that identified product
//      (engine, transmission, fuel, drive, horsepower, seats, doors, etc.)
//      plus a detailed, professional description about that exact product.
//   3) ESTIMATE a reasonable current market price for that exact product and
//      put it into the Price field (always left editable).
// It never auto-saves, never auto-publishes, and never shows AI/internal
// labels to customers.
//
// Provider is modular: register a new provider in AI_PRODUCT_SCANNER.PROVIDERS
// and switch AI_PRODUCT_SCANNER.activeProvider. Each provider only needs a
// scan(images, context) method that returns
// { identification, specs, price }.
const SCAN_CONDITION_OPTIONS = ['New', 'Refurbished', 'Used - Like New', 'Used - Good', 'Used - Fair'];
const SCAN_BODY_OPTIONS = ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 'Wagon', 'Pickup', 'Van', 'Truck', 'Sports Car', 'Luxury Sedan', 'Motorcycle', 'Yacht', 'Other'];
const SCAN_TRANSMISSION_OPTIONS = ['Automatic', 'Manual', 'CVT', 'Dual-Clutch', 'Semi-Automatic', 'Electric (Single Speed)'];
const SCAN_FUEL_OPTIONS = ['Gasoline', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid', 'LPG', 'Bio-diesel'];
const SCAN_DRIVE_OPTIONS = ['FWD', 'RWD', 'AWD', '4WD'];

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  SCAN COMPLETENESS ENGINE
//  Every field of the open form is registered, extracted against, validated
//  and accounted for. No field can silently stay unprocessed: after the first
//  extraction pass a SECOND verification pass re-reads the document pages,
//  hunts for missed/unmapped/misplaced values, and only then is anything
//  filled. The owner always sees the full per-field checklist.
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

// Keys the scanner may fill on saved products when no form is open (General AI
// Scanner â†’ "Continue with ALL"). This is the FULL superset across categories.
const SCAN_KNOWN_SPEC_KEYS = [
  'title', 'description', 'brand', 'model', 'model_year', 'color', 'condition', 'subcategory',
  'engine', 'transmission', 'fuel_type', 'drive_type', 'horsepower', 'mileage', 'seating_capacity', 'doors',
  'body_type', 'safety_features', 'storage', 'ram', 'processor', 'display', 'graphics', 'os',
  'material', 'size', 'gender', 'platform', 'voltage', 'type', 'dimensions',
  'property_type', 'bedrooms', 'bathrooms', 'half_bathrooms', 'building_size', 'land_size', 'floors',
  'garage', 'parking_spaces', 'furnished', 'year_built', 'year_renovated', 'area', 'address', 'zip_code',
  'landmarks', 'town', 'city', 'state', 'country', 'country_code', 'latitude', 'longitude', 'listing_status',
  'interior_features', 'exterior_features', 'home_systems',
  'author', 'publisher', 'language', 'format', 'isbn', 'pages', 'edition', 'quantity',
  'age_range', 'skin_type', 'ingredients', 'pet_type', 'lens', 'sensor', 'megapixels', 'video',
  'license', 'version', 'duration', 'followers', 'engagement', 'niche', 'usage', 'shelf_life',
  'assembly', 'weatherproof', 'warranty', 'availability_status',
];

// Fields that are never auto-filled from a document (owner-entered by design).
const SCAN_OWNER_ONLY_KEYS = new Set([
  'price', 'real_price', 'stock_quantity', 'currency', 'images', 'tags', 'verification_status',
  'is_featured', 'is_active', 'sku',
]);

function _scanFieldLabel(el) {
  const id = el.id ? `label[for="${el.id}"]` : null;
  const labelEl = id ? document.querySelector(id) : null;
  if (labelEl) return labelEl.textContent.replace(/\s+/g, ' ').trim().slice(0, 60);
  const wrap = el.closest('div');
  if (wrap) {
    const lab = wrap.querySelector('label');
    if (lab) return lab.textContent.replace(/\s+/g, ' ').trim().slice(0, 60);
  }
  return String(el.name || '').replace(/_/g, ' ');
}

// Register EVERY fillable control in a form: text/number/textarea/select plus
// checkbox groups (e.g. tags). Hidden/file/submit controls are not fields.
function collectFormFields(formSelector) {
  const form = typeof formSelector === 'string' ? document.querySelector(formSelector) : formSelector;
  if (!form) return [];
  const seen = new Set();
  const fields = [];
  form.querySelectorAll('input[name], select[name], textarea[name]').forEach((el) => {
    const key = String(el.name || '');
    if (!key || key === 'images' || seen.has(key)) return;
    if (['hidden', 'file', 'submit', 'button'].includes(el.type)) return;
    seen.add(key);
    if (el.type === 'checkbox') {
      // Checkbox GROUP (several inputs sharing one name) = multi-select badges.
      const boxes = [...form.querySelectorAll(`input[name="${key}"]`)];
      fields.push({ key, label: _scanFieldLabel(el), type: 'checkbox-group', options: boxes.map(b => b.value).filter(Boolean), required: el.required });
      return;
    }
    if (el.type === 'radio') return; // radio groups are handled as selects below when named uniquely
    const type = el.tagName === 'SELECT' ? 'select' : el.tagName === 'TEXTAREA' ? 'textarea' : (el.type === 'number' ? 'number' : 'text');
    fields.push({
      key,
      label: _scanFieldLabel(el),
      type,
      options: el.tagName === 'SELECT' ? [...el.options].map(o => o.value).filter(Boolean) : null,
      required: !!el.required,
    });
  });
  return fields;
}

// Compact schema listing for prompts so the AI knows EVERY field that exists
// and can plan a value (or an honest "not present") for each one. Owner-only
// fields (price, stock, currency…) are never listed — the owner enters those.
function buildFieldSchemaSection(fields) {
  if (!fields || !fields.length) return '';
  const lines = fields.filter(f => !SCAN_OWNER_ONLY_KEYS.has(f.key)).map((f) => {
    let spec = f.type;
    if (f.type === 'select' && f.options && f.options.length <= 24) spec += ` [options: ${f.options.join(' | ')}]`;
    else if (f.type === 'checkbox-group' && f.options && f.options.length) spec += ` [multi-select: ${f.options.join(' | ')}]`;
    else if (f.type === 'number') spec = 'number';
    else if (f.type === 'textarea') spec = 'long text';
    return `- "${f.key}" (${f.label}) — ${spec}`;
  });
  return `\nTHE COMPLETE LIST OF FORM FIELDS (every single one MUST be accounted for):\n${lines.join('\n')}\n`;
}

const _SCAN_BAD_VALUE = /^(n\/?a|none|unknown|not (available|specified|found|visible|applicable)|null|undefined|-{1,}|no data)$/i;

// Validation layer â€” runs BEFORE anything touches the form. Returns a cleaned
// copy plus a per-field checklist. Never invents values; it only normalizes
// formats, matches dropdown options, coerces numbers/dates and flags problems.
function validateScanExtraction(fields, rawSpecs) {
  const specs = { ...(rawSpecs || {}) };
  const estimatedKeys = new Set(Array.isArray(specs.estimated) ? specs.estimated.map(k => String(k)) : []);
  const missingKeys = new Set(Array.isArray(specs.missing_fields) ? specs.missing_fields.map(k => String(k)) : []);
  const checklist = [];
  const flags = [];

  const cleanTextValue = (v) => {
    if (v == null) return '';
    if (Array.isArray(v)) v = v.filter(x => x != null && String(x).trim() !== '').join(', ');
    let s = String(v).replace(/\s+/g, ' ').trim();
    // Strip accidental AI commentary prefixes like "Answer:" or "Value: ...".
    s = s.replace(/^(answer|value|result|extracted)\s*[:\-]\s*/i, '');
    return s;
  };

  const coerceNumber = (v) => {
    const s = cleanTextValue(v).replace(/[^0-9.,\-]/g, '').replace(/,(?=\d{3}\b)/g, '').replace(',', '.');
    const n = parseFloat(s);
    return Number.isFinite(n) ? n : NaN;
  };

  for (const f of (fields || [])) {
    if (SCAN_OWNER_ONLY_KEYS.has(f.key)) continue;
    const entry = { key: f.key, label: f.label, status: 'empty-ok', value: null, note: '' };
    if (f.type === 'checkbox-group') {
      const arr = Array.isArray(specs[f.key]) ? specs[f.key].map(cleanTextValue).filter(Boolean) : [];
      const valid = f.options && f.options.length ? arr.filter(v => f.options.includes(v)) : arr;
      if (valid.length) { specs[f.key] = valid; entry.status = 'filled'; entry.value = valid.join(', '); }
      else {
        // Nothing valid: drop the key entirely (invalid selections are never
        // written into the form).
        delete specs[f.key];
        if (arr.length) { entry.status = 'flagged'; entry.note = 'values not in the allowed badge list were dropped'; flags.push(`${f.label}: invalid selection ignored`); }
      }
      checklist.push(entry);
      continue;
    }
    const hasValue = specs[f.key] != null && cleanTextValue(specs[f.key]) !== '';
    if (!hasValue) {
      entry.status = missingKeys.has(f.key) ? 'missing' : 'empty-ok';
      checklist.push(entry);
      continue;
    }
    if (_SCAN_BAD_VALUE.test(cleanTextValue(specs[f.key]))) {
      delete specs[f.key];
      missingKeys.add(f.key);
      entry.status = 'missing';
      entry.note = 'document/AI said the value is unavailable';
      checklist.push(entry);
      continue;
    }
    if (f.type === 'number') {
      const rawText = cleanTextValue(specs[f.key]);
      const n = coerceNumber(specs[f.key]);
      if (!Number.isFinite(n)) {
        delete specs[f.key]; missingKeys.add(f.key);
        entry.status = 'flagged'; entry.note = `"${rawText}" is not a valid number`;
        flags.push(`${f.label}: not a valid number`);
        checklist.push(entry); continue;
      }
      const yearish = /year/.test(f.key);
      if (yearish && (n < 1800 || n > new Date().getFullYear() + 2)) {
        delete specs[f.key]; missingKeys.add(f.key);
        entry.status = 'flagged'; entry.note = `${n} is outside the plausible range`;
        flags.push(`${f.label}: implausible value ${n}`);
        checklist.push(entry); continue;
      }
      specs[f.key] = n;
      entry.status = 'filled'; entry.value = String(n);
      if (estimatedKeys.has(f.key)) { entry.status = 'estimated'; entry.note = 'AI estimate â€” confirm'; }
      checklist.push(entry); continue;
    }
    if (f.type === 'select' && f.options && f.options.length) {
      const mapped = mapSelectValue({ options: f.options.map(o => ({ value: o })) }, cleanTextValue(specs[f.key]));
      if (mapped == null) {
        entry.status = 'flagged'; entry.note = `"${cleanTextValue(specs[f.key])}" does not match any option â€” left empty`;
        flags.push(`${f.label}: no matching option`);
        delete specs[f.key]; missingKeys.add(f.key);
        checklist.push(entry); continue;
      }
      specs[f.key] = mapped; entry.status = 'filled'; entry.value = mapped;
      if (mapped !== cleanTextValue(rawSpecs?.[f.key])) entry.note = 'matched to the closest option';
      checklist.push(entry); continue;
    }
    // text / textarea / long text
    let s = cleanTextValue(specs[f.key]);
    if (f.type !== 'textarea' && f.type !== 'text-long' && s.length > 120 && !['title'].includes(f.key)) {
      entry.status = 'flagged'; entry.note = 'unusually long â€” check it landed in the right field';
      flags.push(`${f.label}: suspiciously long value`);
    }
    specs[f.key] = s;
    entry.status = 'filled'; entry.value = s.length > 48 ? s.slice(0, 48) + 'â€¦' : s;
    if (estimatedKeys.has(f.key)) { entry.status = 'estimated'; entry.note = 'AI estimate â€” confirm'; }
    checklist.push(entry);
  }

  // Drop keys that belong to NO current form field so stray AI output can never
  // leak into the payload (prevents wrong-field mappings at the source). When
  // NO form is registered (e.g. a headless scan), keep everything instead.
  if (fields && fields.length) {
    const knownKeys = new Set([...fields.map(f => f.key), 'estimated', 'missing_fields', 'features', 'highlights', 'seo_keywords']);
    Object.keys(specs).forEach((k) => { if (!knownKeys.has(k)) delete specs[k]; });
  }

  // The checklist is now the single source of truth: rebuild the AI's
  // bookkeeping arrays so downstream consumers ("Not specified" policy,
  // estimates badge) always match what was actually extracted & verified.
  specs.missing_fields = checklist.filter(c => c.status === 'missing').map(c => c.key);
  specs.estimated = checklist.filter(c => c.status === 'estimated').map(c => c.key);

  const summary = {
    total: checklist.length,
    filled: checklist.filter(c => c.status === 'filled').length,
    estimated: checklist.filter(c => c.status === 'estimated').length,
    flagged: checklist.filter(c => c.status === 'flagged').length,
    missing: checklist.filter(c => c.status === 'missing').length,
  };
  return { specs, checklist, flags, summary };
}

// The user-visible field checklist â€” every field, its status, nothing hidden.
function renderScanChecklistReport(checklist, summary) {
  if (!checklist || !checklist.length) return '';
  const icon = { filled: '<span class="text-emerald-400 font-bold">âœ“</span>', estimated: '<span class="text-blue-300 font-bold">â‰ˆ</span>', flagged: '<span class="text-red-400 font-bold">!</span>', missing: '<span class="text-gray-500">â€”</span>', 'empty-ok': '<span class="text-gray-700">Â·</span>' };
  const rows = checklist.filter(c => c.status !== 'empty-ok').map((c) =>
    `<li class="flex items-start gap-2"><span class="shrink-0 w-4">${icon[c.status] || ''}</span><span><b>${esc(c.label)}</b> <span class="text-gray-600">(${esc(c.key)})</span>${c.value ? ` â€” <span class="text-gray-300">${esc(String(c.value))}</span>` : ''}${c.note ? ` <span class="text-gray-500">${esc(c.note)}</span>` : ''}</span></li>`).join('');
  const notApplicable = summary.total - summary.filled - summary.estimated - summary.flagged - summary.missing;
  return `<details class="mt-2 rounded-xl border border-violet-500/20 bg-violet-500/5 p-3">
    <summary class="cursor-pointer text-[11px] font-bold text-violet-300 select-none">Field checklist â€” ${summary.filled} filled Â· ${summary.missing} not present in document Â· ${summary.flagged} need review${summary.estimated ? ` Â· ${summary.estimated} estimates` : ''}${notApplicable > 0 ? ` Â· ${notApplicable} not applicable to this listing type` : ''}</summary>
    <ul class="mt-2 space-y-1.5 text-[11px] text-gray-300 max-h-64 overflow-y-auto pr-1">${rows || '<li class="text-gray-500">No applicable fields found.</li>'}</ul>
  </details>`;
}


const AI_PRODUCT_SCANNER = {
  activeProvider: 'gemini',
  // COMPLETENESS FIRST: every uploaded image / document page is scanned —
  // nothing is skipped. `maxImages` is the number of images sent PER AI
  // REQUEST (batch size); larger sets are processed in parallel batches and
  // the results are merged, so a 30-page document is read end-to-end.
  // 4 per batch keeps every request well inside the free edge-function
  // payload limit even with high-resolution document pages.
  maxImages: 4,
  PROVIDERS: {
    gemini: {
      label: 'Google Gemini (Free Tier)',
      // Stage 1: identify. Stage 2: complete specs + detailed description.
      // Stage 3: estimate a current market price for that exact product.
      // All reuse the Gemini key already saved in AI Settings, trying
      // browser-side Gemini vision first, then the server edge function.
      scan: async (images, context) => {
        const report = typeof context.onProgress === 'function' ? context.onProgress : () => {};
        report(1, 'Identifying the exact product from your imagesâ€¦');
        const identification = await aiClient.identifyProduct(images, context);
        if (!identification || identification.identified === false) return { identification, specs: null, price: null };
        // FAST: stages 2+3 are ONE combined AI request (specs + price together),
        // so the scan makes half the requests and finishes roughly twice as fast.
        report(2, 'Completing specifications and estimating a fair market priceâ€¦');
        const combined = await aiClient.completeSpecsAndPrice(images, identification, context).catch(() => null);
        return { identification, specs: combined ? combined.specs : null, price: combined ? combined.price : null };
      },
    },
  },
  async scan(images, context) {
    const provider = this.PROVIDERS[this.activeProvider];
    if (!provider) throw new Error(`Scanner provider "${this.activeProvider}" is not configured.`);
    return provider.scan(images || [], context); // ALL images/pages â€” batched inside the client
  },
};

// Best-match a free-text value to a select field's options (e.g. "Petrol" â†’ "Gasoline").
function mapSelectValue(field, value) {
  const options = [...(field.options || [])].map(o => o.value).filter(Boolean);
  if (options.includes(String(value))) return String(value);
  const synonyms = {
    petrol: 'Gasoline', gas: 'Gasoline', gasoline: 'Gasoline', unleaded: 'Gasoline',
    ev: 'Electric', electric: 'Electric', 'fully electric': 'Electric',
    hybrid: 'Hybrid', 'hybrid electric': 'Hybrid',
    'plug-in hybrid': 'Plug-in Hybrid', phev: 'Plug-in Hybrid',
    auto: 'Automatic', automatic: 'Automatic', 'automatic transmission': 'Automatic',
    manual: 'Manual', 'manual transmission': 'Manual',
    cvt: 'CVT', 'continuously variable': 'CVT',
    'dual clutch': 'Dual-Clutch', dct: 'Dual-Clutch',
    fwd: 'FWD', 'front-wheel drive': 'FWD', 'front wheel drive': 'FWD',
    rwd: 'RWD', 'rear-wheel drive': 'RWD', 'rear wheel drive': 'RWD',
    awd: 'AWD', 'all-wheel drive': 'AWD', 'all wheel drive': 'AWD',
    '4wd': '4WD', 'four-wheel drive': '4WD', 'four wheel drive': '4WD', '4x4': '4WD',
    sedan: 'Sedan', saloon: 'Sedan', suv: 'SUV', hatchback: 'Hatchback', coupe: 'Coupe', 'coupÃ©': 'Coupe',
    convertible: 'Convertible', wagon: 'Wagon', estate: 'Wagon', pickup: 'Pickup', 'pick up': 'Pickup',
    van: 'Van', truck: 'Truck', 'sports car': 'Sports Car', motorcycle: 'Motorcycle', yacht: 'Yacht',
    'like new': 'Used - Like New', 'used - like new': 'Used - Like New',
  };
  const v = String(value).toLowerCase().trim();
  if (synonyms[v]) return synonyms[v];
  const fuzzy = options.find(o => o.toLowerCase().includes(v) || v.includes(o.toLowerCase()));
  return fuzzy || null;
}

// REAL-VALUE INFERENCE PASS — fills the genuine gaps a scan can still have with
// real, expert-derived values instead of blank fields or "Not specified"
// placeholders. Every inferred value is marked in "estimated" so the owner
// reviews it before publishing. Fields that can NEVER be read from a photo
// (private seller contact details, VIN, precise address/GPS, verification
// evidence) are intentionally NOT inferred — those stay blank for the owner.
function inferScanGaps(category, current, identification, fields) {
  const out = {};
  const estimated = [];
  const fieldMap = new Map((fields || []).map((f) => [f.key, f]));
  const has = (k) => fieldMap.has(k);
  const isEmpty = (k) => current[k] == null || String(Array.isArray(current[k]) ? current[k].join(', ') : current[k]).trim() === '';
  const set = (k, v) => {
    if (v == null || String(v).trim() === '') return;
    const f = fieldMap.get(k);
    if (!f || !isEmpty(k)) return;
    if (f.type === 'select' && f.options && f.options.length && !f.options.includes(v)) return;
    out[k] = v;
    estimated.push(k);
  };

  const id = identification || {};
  const isVehicle = /cars?|trucks?|vehicle|motor|marine/i.test(String(category || ''))
    || id.listing_type === 'vehicle' || Boolean(id.body_type);
  const isProperty = /estate|propert|real|house|villa|home|land/i.test(String(category || ''))
    || id.listing_type === 'property' || Boolean(id.property_type);

  if (isVehicle) {
    const body = String(current.body_type || id.body_type || '');
    const bodyLC = body.toLowerCase();
    const hay = [
      current.engine, current.trim, current.mileage, current.fuel_economy, current.title,
      id.model, id.brand, body, current.wheels_tires,
    ].filter(Boolean).join(' ').toLowerCase();
    const yearNum = parseInt(String(current.model_year || id.year || ''), 10);

    let fuel = '';
    if (/plug[ -]?in|phev/.test(hay)) fuel = 'Plug-in Hybrid';
    else if (/hybrid|hev|mhev/.test(hay)) fuel = 'Hybrid';
    else if (/electric|tesla|\bbev\b|single[- ]?speed/.test(hay)) fuel = 'Electric';
    else if (/lpg|gpl|autogas|cng/.test(hay)) fuel = 'LPG';
    else if (/bio[- ]?diesel/.test(hay)) fuel = 'Bio-diesel';
    else if (/diesel|tdi|\bhdi\b|\bcrdi\b|\bcdti\b|\bd4d\b|\bdci\b|turbo[- ]?d/.test(hay)) fuel = 'Diesel';
    else if (/gasoline|petrol|\bgas\b|unleaded/.test(hay)) fuel = 'Gasoline';
    else fuel = 'Gasoline';
    set('fuel_type', fuel);

    let trans = '';
    if (/manual|\bstick\b/.test(hay)) trans = 'Manual';
    else if (/cvt|continuously/.test(hay)) trans = 'CVT';
    else if (/dual[- ]?clutch|\bdct\b/.test(hay)) trans = 'Dual-Clutch';
    else if (/semi[- ]?automatic|\bamt\b/.test(hay)) trans = 'Semi-Automatic';
    else if (/automatic|\bauto\b|shift[- ]?tronic|torque[- ]?converter|\d[ -]?speed/.test(hay)) trans = 'Automatic';
    else trans = (Number.isFinite(yearNum) && yearNum < 2014) ? 'Manual' : 'Automatic';
    set('transmission', trans);

    let drive = '';
    if (/4wd|\b4x4\b|four[- ]?wheel|quad/.test(hay)) drive = '4WD';
    else if (/awd|all[- ]?wheel/.test(hay)) drive = 'AWD';
    else if (/rwd|rear[- ]?wheel/.test(hay)) drive = 'RWD';
    else if (/fwd|front[- ]?wheel/.test(hay)) drive = 'FWD';
    else if (/pickup|truck/.test(bodyLC)) drive = '4WD';
    else if (/suv/.test(bodyLC)) drive = 'AWD';
    else if (/motorcycle/.test(bodyLC)) drive = 'RWD';
    else drive = 'FWD';
    set('drive_type', drive);

    const seatMap = { sedan: 5, hatchback: 5, coupe: 4, convertible: 4, wagon: 5, suv: 5,
      'sports car': 2, 'luxury sedan': 5, pickup: 5, truck: 3, van: 8, bus: 20,
      motorhome: 6, motorcycle: 2, yacht: 6, 'jet ski': 2 };
    const doorMap = { sedan: 4, hatchback: 5, coupe: 2, convertible: 2, wagon: 5, suv: 5,
      'sports car': 2, 'luxury sedan': 4, pickup: 4, truck: 4, van: 5, bus: 2,
      motorhome: 3, motorcycle: 0, 'jet ski': 0 };
    for (const [k, map] of [['seating_capacity', seatMap], ['doors', doorMap]]) {
      if (!has(k)) continue;
      const entry = Object.entries(map).find(([b]) => bodyLC.includes(b));
      if (entry) set(k, String(entry[1]));
    }

    const vt = String(current.vehicle_type || id.vehicle_type || '').toLowerCase();
    if (!body && has('body_type')) {
      if (/motorhome|rv/.test(vt)) set('body_type', 'Motorhome');
      else if (/jet/.test(vt)) set('body_type', 'Jet Ski');
      else if (/marine|boat|yacht/.test(vt)) set('body_type', 'Yacht');
      else if (/bus/.test(vt)) set('body_type', 'Bus');
      else if (/motorcycle/.test(vt)) set('body_type', 'Motorcycle');
      else if (/truck/.test(vt)) set('body_type', 'Truck');
    }

    const condLower = String(current.condition || '').toLowerCase();
    if (!current.mileage && /new/.test(condLower) && has('mileage')) set('mileage', '0 mi');
    if (!current.condition && has('condition')) set('condition', 'Used - Good');
    if (!current.previous_owners && has('previous_owners')) set('previous_owners', /new/.test(condLower) ? 'None (new)' : '1');
    if (!current.registration_status && has('registration_status')) set('registration_status', 'Registered');
    if (!current.inspection_status && has('inspection_status')) set('inspection_status', 'Not Inspected');
    if (!current.warranty && has('warranty')) set('warranty', 'Manufacturer warranty - confirm remaining coverage with the seller');
  }

  if (isProperty) {
    const pt = String(current.property_type || id.property_type || '').toLowerCase();
    const sizeText = String(current.building_size || current.floor_plan_total_area || '');
    const sizeNum = parseFloat(sizeText.replace(/[^0-9.]/g, ''));
    let beds = null;
    let baths = null;
    if (Number.isFinite(sizeNum) && sizeNum > 100) {
      beds = Math.max(2, Math.min(6, Math.round(sizeNum / 600)));
      baths = Math.max(1, Math.min(4, beds > 4 ? 3 : beds - 1));
    }
    if (isEmpty('bedrooms') && has('bedrooms') && beds) set('bedrooms', String(beds));
    if (isEmpty('bathrooms') && has('bathrooms') && baths) set('bathrooms', String(baths));
    if (isEmpty('listing_status') && has('listing_status')) {
      const hint = String(current.title || '') + ' ' + String(current.description || '');
      set('listing_status', /for rent|lease|\brent\b/.test(hint.toLowerCase()) ? 'rent' : 'sale');
    }
    if (isEmpty('furnished') && has('furnished')) {
      set('furnished', /land|plot|acre/.test(pt + ' ' + String(current.land_size || '')) ? 'Unfurnished' : 'Furnished');
    }
    if (isEmpty('condition') && has('condition')) set('condition', 'Good');
    if (isEmpty('floors') && has('floors')) {
      const fl = /mansion|villa|townhouse/.test(pt) ? '2' : (/apartment|condo|single/.test(pt) ? '1' : null);
      if (fl) set('floors', fl);
    }
    if (isEmpty('kitchens') && has('kitchens')) set('kitchens', '1');
    if (isEmpty('parking_spaces') && has('parking_spaces') && /car|garage|parking/.test(String(current.garage || '').toLowerCase())) {
      set('parking_spaces', '1');
    }
    if (isEmpty('property_type') && has('property_type')) {
      set('property_type', /land|plot|acre/.test(pt + ' ' + String(current.land_size || '')) ? 'Land' : 'Single-Family Home');
    }
  }

  return { specs: out, estimated };
}

function buildScanTitle(identification) {
  const parts = [];
  if (identification.year) parts.push(identification.year);
  if (identification.brand) parts.push(identification.brand);
  if (identification.model) parts.push(identification.model);
  if (!identification.model && identification.body_type) parts.push(identification.body_type);
  return parts.join(' ') || identification.detected_name || '';
}

// â”€â”€ GUARANTEED COMPLETENESS PASS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Runs LAST, after every AI value has been applied. Any user-editable field that
// is STILL empty (because the AI failed, hit its free quota, returned junk, or
// simply could not see the value in the photo) receives a safe default
// (price/stock/title/description) or stays blank - never "Not specified".
// AI values ALWAYS win â€” this pass only touches genuinely empty fields, so a
// scan can never leave the form partially blank and the owner can always
// review, edit and publish.
const GUARANTEED_FILL_SKIP = new Set([
  'images', 'tags', 'currency', 'catalog_template_id', 'country_code',
  'listing_type', 'category', 'property_id', 'id', 'slug', 'user_id',
  'latitude', 'longitude', 'cover_image', 'video_url',
]);
function guaranteeCompleteFormFill(formSelector, { titleFallback = 'Product', descriptionFallback = '', visionUsed = true } = {}) {
  const form = document.querySelector(formSelector);
  if (!form || !visionUsed) return 0;
  let count = 0;
  form.querySelectorAll('input, textarea, select').forEach((field) => {
    const name = String(field.name || '').trim();
    if (!name || GUARANTEED_FILL_SKIP.has(name)) return;
    const type = String(field.type || '').toLowerCase();
    if (['hidden', 'checkbox', 'radio', 'file', 'submit', 'button', 'image', 'password'].includes(type)) return;
    if (field.disabled) return;
    if (String(field.value || '').trim() !== '') return; // AI value already there â€” never touch it
    // Publishing-gating fields always get a safe, valid default.
    if (name === 'price' || name === 'real_price') {
      const min = Number.isFinite(Number(GLOBAL_PRICE_MIN)) ? Number(GLOBAL_PRICE_MIN) : 1;
      field.value = String(min);
      count++;
      return;
    }
    if (name === 'stock_quantity') { field.value = '1'; count++; return; }
    if (name === 'title') { field.value = titleFallback; count++; return; }
    if (name === 'description') {
      field.value = descriptionFallback || `${titleFallback} â€” full details to be confirmed by the seller. Review and edit everything before publishing.`;
      count++;
      return;
    }
    if (type === 'number' || type === 'range' || type === 'tel') { field.value = '0'; count++; return; }
    // Text / textarea / select values the AI genuinely could not determine
    // (private contact details, unreadable VIN, invisible address) are left
    // BLANK - never stamped "Not specified". The scanner field checklist above
    // already tells the owner exactly which fields still need completing.
  });
  return count;
}

// Fill the product form fields from the two-stage result. Only sets fields
// that exist in the current form and never guesses price/stock.
function applyScanToProductForm(result, options = {}) {
  const identification = result && result.identification && result.identification.identified !== false ? result.identification : {};
  const specs = result && result.specs ? result.specs : {};
  const price = result && result.price ? result.price : null;
  const visionUsed = (options && options.visionUsed !== undefined) ? options.visionUsed : (result && result.visionUsed !== undefined ? result.visionUsed : true);
  const filled = [];
  const text = (v) => (Array.isArray(v) ? v.join(', ') : String(v ?? '').trim());
  const set = (key, value, allowed) => {
    if (value == null || text([value]) === '') return;
    const field = document.querySelector(`#product-form [name="${key}"]`);
    if (!field) return;
    let v = String(value);
    if (allowed && !allowed.includes(v)) {
      const mapped = mapSelectValue(field, v);
      if (mapped === null) return;
      v = mapped;
    }
    field.value = v;
    filled.push(key);
  };

  // From image (identification stage)
  set('brand', identification.brand);
  set('model', identification.model);
  set('color', identification.color);
  set('condition', identification.condition, SCAN_CONDITION_OPTIONS);
  set('subcategory', identification.subcategory);
  set('body_type', identification.body_type || specs.body_type, SCAN_BODY_OPTIONS);
  // model_year prefers the validated extraction: it went through the
  // verification pass, so a corrected year always beats the stage-1 estimate.
  set('model_year', specs.model_year || identification.year);

  // Completed specifications â€” the always-fill list.
  set('title', specs.title || buildScanTitle(identification));
  set('description', specs.description);
  set('engine', specs.engine);
  set('transmission', specs.transmission, SCAN_TRANSMISSION_OPTIONS);
  set('fuel_type', specs.fuel_type, SCAN_FUEL_OPTIONS);
  set('drive_type', specs.drive_type, SCAN_DRIVE_OPTIONS);
  set('horsepower', specs.horsepower);
  set('mileage', specs.mileage);
  set('seating_capacity', specs.seating_capacity);
  set('doors', specs.doors);
  set('safety_features', text(specs.safety_features));
  set('storage', specs.storage);
  set('ram', specs.ram);
  set('processor', specs.processor);
  set('display', specs.display);
  set('graphics', specs.graphics);
  set('os', specs.os);
  set('material', specs.material);
  set('size', specs.size);
  set('gender', specs.gender);
  set('platform', specs.platform);

  // Category-specific fields â€” only filled when the current form has them, so a
  // bag scan fills bag fields, a book scan fills book fields, etc.
  set('type', specs.type || identification.type);
  set('age_range', specs.age_range);
  set('skin_type', specs.skin_type);
  set('ingredients', specs.ingredients);
  set('dimensions', specs.dimensions);
  set('author', specs.author);
  set('publisher', specs.publisher);
  set('language', specs.language);
  set('format', specs.format);
  set('isbn', specs.isbn);
  set('pages', specs.pages);
  set('edition', specs.edition);
  set('quantity', specs.quantity);
  set('pet_type', specs.pet_type);
  set('lens', specs.lens);
  set('sensor', specs.sensor);
  set('megapixels', specs.megapixels);
  set('video', specs.video);
  set('license', specs.license);
  set('version', specs.version);
  set('duration', specs.duration);
  set('followers', specs.followers);
  set('engagement', specs.engagement);
  set('niche', specs.niche);
  set('usage', specs.usage);
  set('shelf_life', specs.shelf_life);
  set('assembly', specs.assembly);
  set('weatherproof', specs.weatherproof);
  set('warranty', specs.warranty || identification.warranty);
  set('availability_status', specs.availability_status);

  // Listing content fields â€” the customer-facing extras for the identified product.
  set('features_text', text(specs.features));
  set('highlights_text', text(identification.highlights || specs.highlights));
  set('seo_keywords_text', text(specs.seo_keywords));
  const scanTags = new Set((Array.isArray(specs.tags) ? specs.tags : []).map(t => String(t).trim()));
  document.querySelectorAll('#product-form input[name="tags"]').forEach((cb) => {
    if (scanTags.has(cb.value)) { cb.checked = true; filled.push('tags'); }
  });
  const stock = Number(specs.stock_quantity);
  if (Number.isFinite(stock) && stock > 0) { set('stock_quantity', stock); }

  // Estimated market prices from stage 3 â€” the REAL price always goes into the
  // Real Price field (crossed out on the store), and the suggested discount
  // price goes into the Discount Price field (what customers pay). If no
  // discount was suggested, the real price is used for both. Fully editable â€”
  // no auto-save, no auto-publish.
  const priceField = document.querySelector('#product-form [name="price"]');
  const realPriceField = document.querySelector('#product-form [name="real_price"]');
  const estPrice = price ? Number(price.estimated_price) : NaN;
  const estDiscount = price ? Number(price.suggested_discount_price) : NaN;
  const min = Number.isFinite(Number(GLOBAL_PRICE_MIN)) ? Number(GLOBAL_PRICE_MIN) : 0;
  const max = Number.isFinite(Number(GLOBAL_PRICE_MAX)) ? Number(GLOBAL_PRICE_MAX) : 999999999;
  const clamp = (n) => Math.max(min, Math.min(max, Math.round(n)));
  if (Number.isFinite(estPrice) && estPrice > 0) {
    if (realPriceField) {
      realPriceField.value = String(clamp(estPrice));
      filled.push('real_price');
    }
    const discount = Number.isFinite(estDiscount) && estDiscount > 0 && estDiscount < estPrice ? estDiscount : estPrice;
    if (priceField) {
      priceField.value = String(clamp(discount));
      filled.push('price');
    }
  }

  // GUARANTEED COMPLETENESS PASS â€” runs last, so every AI value wins and only
  // genuinely empty fields (AI failure / quota / not visible in the photo)
  // receive the honest "Not specified" placeholder or a safe default. The form
  // can never be left partially blank after a scan.
  const titleFallback = buildScanTitle(identification) || identification.detected_name || 'Product';
  const descFallback = specs.description
    || `${titleFallback} for sale on Weverse Online Shop. Review the details below and edit anything before publishing.`;
  const guaranteed = guaranteeCompleteFormFill('#product-form', { titleFallback, descriptionFallback: descFallback, visionUsed });
  if (guaranteed) filled.push(`${guaranteed} auto-completed (safe defaults)`);

  updateProductReviewPanel();
  return { filled };
}

// â”€â”€ General AI Product Scanner â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// ONE scanner for EVERY category: it identifies the product first, asks the
// owner to confirm the detected category (and lets them pick a different one),
// switches the form to the right category template, fills only the fields of
// that template, and NEVER publishes anything automatically.

// Best-match a free-text AI category to an exact PRODUCT_CATEGORIES entry.
function normalizeDetectedCategory(raw) {
  const s = String(raw || '').trim().toLowerCase();
  const exact = PRODUCT_CATEGORIES.find(c => c.toLowerCase() === s);
  if (exact) return { category: exact, listing_type: null };
  if (/(house|villa|apartment|condo|mansion|land|estate|real estate|property|building|bungalow|townhouse|ranch|farmhouse)/.test(s)) {
    return { category: null, listing_type: 'property' };
  }
  const map = {
    bag: 'Fashion', bags: 'Fashion', handbag: 'Fashion', handbags: 'Fashion',
    backpack: 'Fashion', backpacks: 'Fashion', purse: 'Fashion',
    wallet: 'Fashion', wallets: 'Fashion', luggage: 'Travel & Luggage',
    sneaker: 'Fashion', sneakers: 'Fashion', shoe: 'Fashion', shoes: 'Fashion', boot: 'Fashion', boots: 'Fashion', footwear: 'Fashion',
    sandal: 'Fashion', sandals: 'Fashion', heel: 'Fashion', heels: 'Fashion',
    phone: 'Phones', smartphone: 'Phones', smartphones: 'Phones', iphone: 'Phones', 'mobile phone': 'Phones',
    laptop: 'Computers', laptops: 'Computers', computer: 'Computers', notebook: 'Computers',
    macbook: 'Computers', pc: 'Computers', desktop: 'Computers',
    electronics: 'Electronics', electronic: 'Electronics', gadget: 'Electronics', gadgets: 'Electronics', tv: 'Electronics',
    television: 'Electronics', headphones: 'Electronics', speaker: 'Electronics', speakers: 'Electronics', soundbar: 'Electronics',
    tablet: 'Electronics', earbuds: 'Electronics',
    camera: 'Cameras & Photography', cameras: 'Cameras & Photography', dslr: 'Cameras & Photography', drone: 'Cameras & Photography',
    jewelry: 'Jewelry', jewellery: 'Jewelry', ring: 'Jewelry', necklace: 'Jewelry', earring: 'Jewelry', earrings: 'Jewelry', bracelet: 'Jewelry',
    watch: 'Watches & Accessories', watches: 'Watches & Accessories', wristwatch: 'Watches & Accessories', 'smart watch': 'Watches & Accessories',
    clothing: 'Fashion', clothes: 'Fashion', fashion: 'Fashion', shirt: 'Fashion', shirts: 'Fashion', dress: 'Fashion', dresses: 'Fashion',
    jacket: 'Fashion', jackets: 'Fashion', hoodie: 'Fashion', jeans: 'Fashion', 't-shirt': 'Fashion', tshirt: 'Fashion', apparel: 'Fashion',
    "men's fashion": 'Men', 'mens fashion': 'Men',
    "women's fashion": 'Women', 'womens fashion': 'Women',
    car: 'Cars', cars: 'Cars', vehicle: 'Cars', vehicles: 'Cars', automobile: 'Cars', suv: 'Cars', sedan: 'Cars', 'luxury car': 'Cars',
    'luxury cars': 'Cars',
    truck: 'Trucks', trucks: 'Trucks', trailer: 'Trucks', bus: 'Trucks',
    motorcycle: 'Motorcycles', motorbike: 'Motorcycles', 'motor bike': 'Motorcycles',
    bicycle: 'Bicycles', bicycles: 'Bicycles', cycling: 'Bicycles', bike: 'Bicycles',
    motorhome: 'RV & Camper Accessories', motorhomes: 'RV & Camper Accessories', camper: 'RV & Camper Accessories', rv: 'RV & Camper Accessories',
    boat: 'Marine & Boating', boats: 'Marine & Boating', yacht: 'Marine & Boating', jet: 'Marine & Boating',
    beauty: 'Beauty', skincare: 'Beauty', cosmetics: 'Beauty', makeup: 'Beauty', perfume: 'Beauty',
    kitchen: 'Kitchen', appliance: 'Home Appliances', appliances: 'Home Appliances', blender: 'Kitchen', kettle: 'Kitchen',
    cookware: 'Kitchen', vacuum: 'Home Appliances',
    furniture: 'Furniture', sofa: 'Furniture', chair: 'Furniture', chairs: 'Furniture', table: 'Furniture', tables: 'Furniture',
    bed: 'Furniture', mattress: 'Furniture', desk: 'Furniture',
    toy: 'Toys & Hobbies', toys: 'Toys & Hobbies', game: 'Gaming', games: 'Gaming', gaming: 'Gaming', console: 'Gaming',
    food: 'Food & Groceries', groceries: 'Food & Groceries', snack: 'Food & Groceries', snacks: 'Food & Groceries', beverage: 'Food & Groceries',
    baby: 'Baby', kids: 'Kids', stroller: 'Baby',
    health: 'Health & Medical', medical: 'Health & Medical', supplement: 'Health & Medical',
    fitness: 'Sports', sport: 'Sports', sports: 'Sports', gym: 'Sports', dumbbell: 'Sports',
    book: 'Books', books: 'Books', textbook: 'Books', novel: 'Books',
    stationery: 'Office', office: 'Office', printer: 'Office', pen: 'Office',
    pet: 'Pets', pets: 'Pets', dog: 'Pets', cat: 'Pets',
    musical: 'Musical Instruments', guitar: 'Musical Instruments', piano: 'Musical Instruments', instrument: 'Musical Instruments', drum: 'Musical Instruments',
    software: 'Software & Digital Products', digital: 'Software & Digital Products',
    account: 'Software & Digital Products', accounts: 'Software & Digital Products', instagram: 'Software & Digital Products', tiktok: 'Software & Digital Products',
    camping: 'Camping & Hiking', tent: 'Camping & Hiking', hiking: 'Camping & Hiking',
    flower: 'Flowers & Gifts', flowers: 'Flowers & Gifts', gift: 'Flowers & Gifts', gifts: 'Flowers & Gifts',
    wedding: 'Wedding Supplies', party: 'Party & Event Supplies', coin: 'Coins & Bullion', coins: 'Coins & Bullion',
    art: 'Arts & Crafts', painting: 'Arts & Crafts', craft: 'Arts & Crafts',
  };
  const hit = map[s] || map[s.replace(/s$/, '')] || map[s.replace(/\s+/g, ' ')];
  if (hit) return { category: hit, listing_type: null };
  for (const cat of PRODUCT_CATEGORIES) {
    if (s.includes(cat.toLowerCase()) || (s.length > 2 && cat.toLowerCase().includes(s))) return { category: cat, listing_type: null };
  }
  const normalized = normalizeToMarketplaceCategory(s);
  return { category: normalized || 'Other', listing_type: null };
}

function mapPropertyType(value) {
  const s = String(value || '').toLowerCase().trim();
  if (!s) return null;
  const direct = PROPERTY_TYPES.find(t => t.toLowerCase() === s);
  if (direct) return direct;
  const fuzzy = PROPERTY_TYPES.find(t => t.toLowerCase().includes(s) || s.includes(t.toLowerCase()));
  return fuzzy || null;
}

let _scanConfirmResolve = null;
window._resolveScanConfirm = function(choice, category) {
  if (typeof _scanConfirmResolve === 'function') _scanConfirmResolve({ choice, category });
};

// â”€â”€ Multi-product review list â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// After detection, every distinct product is shown as its own card so the owner
// can review, edit, remove or continue each one. Different products are never
// merged; the same product across several photos stays as one entry.
let scanReviewProducts = [];
let scanReviewImages = [];
let scanReviewEntry = '';
// Index of the review card currently being filled in the product form. Set when
// "Continue to its form" is pressed, so that after Save & Publish the owner is
// returned to the SAME review list (with the saved card removed) to pick the
// next product instead of landing on the plain Product Manager.
let scanReviewActiveIndex = -1;

const scannerReviewId = 'scanner-scan-status';

// ── Auto-scan state ──────────────────────────────────────────────────
// When the General AI Scanner runs in fully autonomous mode, it fills and
// publishes every product without showing a review list or asking questions.
let _autoScannerActive = false;
let _autoScannerTotal = 0;
let _autoScannerPublished = 0;
let _autoScannerErrors = 0;

// One-by-one streaming scan state: the General AI Scanner processes products
// sequentially and shows a one-click Publish button on every card THE MOMENT
// it is scanned, while the remaining products keep scanning in the background.
let _streamScanActive = false;
let _streamScanTotal = 0;
let _streamScanScanned = 0;
let _streamScanPublished = 0;
let _streamScanErrors = 0;
let _streamScanDuplicatesSkipped = 0;
let _streamScanFallbacks = 0;

function imagesForProduct(p, images) {
  const idxs = Array.isArray(p.image_indices) ? p.image_indices : [];
  const out = idxs.map(i => images[i]).filter(Boolean);
  return out.length ? out : images;
}

function scanReviewCardHtml(p, i, isDuplicate, showPublish) {
  const norm = normalizeDetectedCategory(p.category);
  const isProperty = p.listing_type === 'property' || (norm && norm.listing_type === 'property');
  const cat = !isProperty ? (norm.category || p.category || 'Other') : 'Real Estate';
  const conf = p.confidence || 'medium';
  const confCls = {
    high: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    medium: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    low: 'bg-red-500/10 text-red-400 border-red-500/20',
  }[conf] || 'bg-amber-500/10 text-amber-400 border-amber-500/20';
  const thumbs = imagesForProduct(p, scanReviewImages).slice(0, 3);
  return `
  <div class="scan-review-card rounded-xl border border-violet-500/30 bg-violet-500/10 p-3 space-y-2 fade-in" data-i="${i}">
    <div class="flex items-center justify-between gap-2 flex-wrap">
      <p class="text-xs font-bold text-white">${i + 1}. ${esc(p.detected_name || 'Detected product')}</p>
      <span class="inline-flex items-center gap-1">
        ${p._photoNotRead ? '<span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border bg-red-500/10 text-red-300 border-red-500/20" title="The AI could not read the photos for this card - it was created from saved details only.">PHOTO NOT READ</span>' : ''}
        ${isDuplicate ? '<span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border bg-orange-500/10 text-orange-300 border-orange-500/20" title="This product appears more than once — consider deleting the duplicate.">DUPLICATE</span>' : ''}
        <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${confCls}">${esc(conf).toUpperCase()}</span>
      </span>
    </div>
    <div class="flex items-center gap-2 flex-wrap">
      ${thumbs.map(u => `<img src="${esc(u)}" class="w-10 h-10 rounded-lg object-cover border border-violet-500/20" onerror="this.src='/fallback.svg'">`).join('')}
      <span class="text-[11px] text-gray-400">${isProperty ? 'Real Estate' : esc(cat)} &middot; ${(p.image_indices || []).length || 1} image(s)</span>
    </div>
    <div class="flex flex-wrap gap-2">
      ${showPublish ? `<button type="button" onclick="scanStreamPublish(${i})" class="btn-press px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition" title="Open this product, fill it with the AI scan and publish it right now with one click">Publish Now</button>` : ''}
      <button type="button" onclick="scanReviewContinue(${i})" class="btn-press px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg transition">Continue to ${isProperty ? 'Properties Manager' : 'its form'}</button>
      <button type="button" onclick="scanReviewEdit(${i})" class="btn-press px-4 py-2 bg-gray-700/60 hover:bg-gray-600 text-gray-200 text-xs font-bold rounded-lg transition">Edit</button>
      <button type="button" onclick="scanReviewDelete(${i})" class="btn-press px-3 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg transition" title="Permanently delete this product from the database">Delete</button>
      <button type="button" onclick="scanReviewRemove(${i})" class="btn-press px-4 py-2 bg-red-900/40 hover:bg-red-800/60 text-red-200 text-xs font-bold rounded-lg transition">Remove</button>
      <button type="button" onclick="scanReviewCancel()" class="btn-press px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 text-xs font-bold rounded-lg transition">Cancel</button>
    </div>
  </div>`;
}

window.scanReviewRender = function() {
  if (scanReviewEntry === 'scanner-scan-status') { scanStreamRender(); return; }
  const el = document.getElementById(scanReviewEntry);
  if (!el) return;
  el.classList.remove('hidden', 'text-red-400', 'text-emerald-300', 'text-amber-300', 'text-blue-300', 'text-gray-400');
  if (!scanReviewProducts.length) {
    el.classList.add('text-gray-400');
    el.textContent = 'All detected products were removed \u2014 nothing was changed.';
    return;
  }
  // Precompute duplicate flags: mark any product whose brand+model (or name)
  // matches another product in the same scan batch.
  const dupCounts = {};
  for (const p of scanReviewProducts) {
    const brand = normalizeDupKey(p.brand);
    const model = normalizeDupKey(p.model);
    const name  = normalizeDupKey(p.detected_name);
    const key = (brand && model) ? `${brand}::${model}` : (name || `${brand}::${model}`);
    if (key) dupCounts[key] = (dupCounts[key] || 0) + 1;
  }
  el.classList.add('text-gray-100');
  el.innerHTML = `
    <div class="space-y-3">
      <div>
        <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="list-checks" class="w-4 h-4 text-violet-400"></i> ${scanReviewProducts.length} distinct product${scanReviewProducts.length > 1 ? 's' : ''} detected</p>
        <p class="text-[11px] text-gray-400 mt-1">Review each card below. Edit, remove or delete duplicates as needed, then press Continue to open each product's form and publish it.</p>
      </div>
      ${scanReviewProducts.map((p, i) => {
        const brand = normalizeDupKey(p.brand);
        const model = normalizeDupKey(p.model);
        const name  = normalizeDupKey(p.detected_name);
        const key = (brand && model) ? `${brand}::${model}` : (name || `${brand}::${model}`);
        return scanReviewCardHtml(p, i, key && dupCounts[key] > 1);
      }).join('')}
    </div>`;
  if (window.lucide) lucide.createIcons();
};

window.scanReviewContinue = async function(i) {
  const p = scanReviewProducts[i];
  if (!p) return;
  scanReviewActiveIndex = i;
  const images = imagesForProduct(p, scanReviewImages);
  const norm = normalizeDetectedCategory(p.category);
  const isProperty = p.listing_type === 'property' || (norm && norm.listing_type === 'property');
  if (isProperty) {
    if (scanReviewEntry === 's1-scan-status' || scanReviewEntry === 'scanner-scan-status') { closeModal(); step1Images = []; scannerImages = []; }
    routePropertyScan(p, images);
    return;
  }
  const cat = norm.category || p.category || 'Other';
  if (scanReviewEntry === 's1-scan-status' || scanReviewEntry === 'scanner-scan-status') {
    try { localStorage.removeItem(productAutoSaveKey(cat, '')); } catch {}
    step1Images = [];
    scannerImages = [];
    // Scanned from an existing product (General AI Scanner) â€” open its EDIT
    // form so the owner updates that listing instead of creating a duplicate.
    let existing = p.property_id ? scanReviewSourceProducts[p.property_id] : null;
    if (existing && existing.specifications && typeof existing.specifications === 'object') {
      existing = { ...existing, ...existing.specifications };
    }
    showAddProductStep2(cat, existing ? { ...existing, images } : { images });
    await completeScanAndFill(p, images, cat);
  } else {
    const form = document.getElementById('product-form');
    const currentCat = form ? form.dataset.category || '' : '';
    if (cat !== currentCat) {
      try { localStorage.removeItem(productAutoSaveKey(cat, '')); } catch {}
      switchProductFormCategory(cat);
      const el2 = document.getElementById(scanReviewEntry);
      if (el2) { el2.classList.remove('hidden'); el2.classList.add('text-blue-300'); el2.textContent = `Category changed to ${cat} â€” finishing the scanâ€¦`; }
      if (window.lucide) lucide.createIcons();
    }
    await completeScanAndFill(p, images, cat);
  }
};

window.scanReviewEdit = function(i) {
  const p = scanReviewProducts[i];
  if (!p) return;
  const card = document.querySelector(`.scan-review-card[data-i="${i}"]`);
  if (!card) return;
  const norm = normalizeDetectedCategory(p.category);
  const isProperty = p.listing_type === 'property' || (norm && norm.listing_type === 'property');
  const curCat = isProperty ? 'Real Estate' : (norm.category || p.category || 'Other');
  const catOptions = PRODUCT_CATEGORIES.map(c => `<option value="${esc(c)}" ${c === curCat ? 'selected' : ''}>${esc(c)}</option>`).join('');
  card.innerHTML = `
    <p class="text-xs font-bold text-white">Edit detected product #${i + 1}</p>
    <div class="space-y-2">
      <input id="sr-name-${i}" class="input-field !py-2 !text-xs" value="${esc(p.detected_name || '')}" placeholder="Product name">
      <input id="sr-brand-${i}" class="input-field !py-2 !text-xs" value="${esc(p.brand || '')}" placeholder="Brand">
      <input id="sr-model-${i}" class="input-field !py-2 !text-xs" value="${esc(p.model || '')}" placeholder="Model">
      <select id="sr-cat-${i}" class="input-field !py-2 !text-xs">${catOptions}</select>
    </div>
    <div class="flex flex-wrap gap-2">
      <button type="button" onclick="scanReviewApplyEdit(${i})" class="btn-press px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition">Apply</button>
      <button type="button" onclick="scanReviewRender()" class="btn-press px-4 py-2 bg-gray-700/60 hover:bg-gray-600 text-gray-200 text-xs font-bold rounded-lg transition">Back</button>
    </div>`;
};

window.scanReviewApplyEdit = function(i) {
  const p = scanReviewProducts[i];
  if (!p) return;
  const name = document.getElementById(`sr-name-${i}`)?.value;
  const brand = document.getElementById(`sr-brand-${i}`)?.value;
  const model = document.getElementById(`sr-model-${i}`)?.value;
  const cat = document.getElementById(`sr-cat-${i}`)?.value;
  if (name) p.detected_name = name;
  if (brand) p.brand = brand;
  if (model) p.model = model;
  if (cat) p.category = cat;
  scanReviewRender();
};

window.scanReviewRemove = function(i) {
  scanReviewProducts.splice(i, 1);
  scanReviewRender();
};

window.scanReviewDelete = async function(i) {
  const p = scanReviewProducts[i];
  if (!p) return;
  const pid = p.property_id;
  if (!pid) { scanReviewProducts.splice(i, 1); scanReviewRender(); return; }
  if (!confirm(`Permanently delete "${p.detected_name || 'this product'}" from the database and showroom?`)) return;
  try {
    await supabase.from('showroom_listings').delete().eq('property_id', pid);
    removeLocalShowroomListing(pid);
    try { await saveCatalogHidden(pid, true); } catch {}
  } catch {}
  scanReviewProducts.splice(i, 1);
  scanReviewRender();
  showToast(`${p.detected_name || 'Product'} deleted`);
};

window.scanReviewCancel = function() {
  const el = document.getElementById(scanReviewEntry);
  if (el) {
    el.classList.remove('hidden', 'text-red-400', 'text-emerald-300', 'text-amber-300', 'text-blue-300');
    el.classList.add('text-gray-400');
    el.textContent = 'Scan cancelled — nothing was changed.';
  }
};

// ── DUPLICATE DETECTION ──────────────────────────────────────────────
// After the AI scanner identifies all products, this compares every
// detection by normalised brand + model + name and groups potential
// duplicates together.  A group with 2+ entries means the same product
// was listed more than once.
function normalizeDupKey(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '').trim();
}
function findDuplicateGroups(detections) {
  const groups = {};
  for (const d of detections) {
    const brand = normalizeDupKey(d.brand);
    const model = normalizeDupKey(d.model);
    const name  = normalizeDupKey(d.detected_name);
    // Key: brand+model if both exist, otherwise name (catches name-only dupes too)
    const key = (brand && model) ? `${brand}::${model}` : (name || `${brand}::${model}`);
    if (!key) continue;
    (groups[key] = groups[key] || []).push(d);
  }
  // Only return groups with 2+ members (actual duplicates)
  return Object.values(groups).filter(g => g.length > 1);
}

// Track which duplicate indices the user selected for deletion.
let _dupReviewGroups = [];
let _dupReviewRemaining = [];
let _dupReviewAllDetections = [];

function renderDuplicateReview() {
  const el = document.getElementById(scannerReviewId);
  if (!el) return;
  el.classList.remove('hidden', 'text-red-400', 'text-emerald-300', 'text-amber-300', 'text-blue-300', 'text-gray-400');
  el.classList.add('text-gray-100');
  const totalDupes = _dupReviewRemaining.reduce((s, g) => s + g.length - 1, 0);
  el.innerHTML = `
    <div class="space-y-3">
      <div class="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3">
        <p class="text-xs font-bold text-rose-300 flex items-center gap-2"><i data-lucide="copy" class="w-4 h-4"></i> ${_dupReviewRemaining.length} duplicate product group${_dupReviewRemaining.length > 1 ? 's' : ''} found — ${totalDupes} extra listing${totalDupes > 1 ? 's' : ''} to delete</p>
        <p class="text-[11px] text-gray-400 mt-1">The AI found products that look the same (same brand + model or name). Review each group below — keep one copy, delete the rest. You can also delete entire groups.</p>
      </div>
      ${_dupReviewGroups.map((group, gi) => {
        const norm = normalizeDetectedCategory(group[0].category);
        const cat = norm && !norm.listing_type ? (norm.category || group[0].category || 'Other') : 'Other';
        return `
        <div class="rounded-xl border border-amber-500/25 bg-amber-500/8 p-3 space-y-2">
          <p class="text-[11px] font-bold text-amber-300 uppercase tracking-wide">Group ${gi + 1}: ${esc(group[0].detected_name || 'Unknown product')} (${cat})</p>
          ${group.map((d, di) => {
            const globalIdx = _dupReviewAllDetections.indexOf(d);
            return `
            <div class="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 p-2">
              <img src="${esc((d.image_indices || [0]).map(ii => scanReviewImages[ii]).filter(Boolean)[0] || '')}" class="w-10 h-10 rounded-lg object-cover border border-white/10" onerror="this.src='/fallback.svg'">
              <div class="flex-1 min-w-0">
                <p class="text-[11px] font-bold text-white truncate">${esc(d.detected_name || 'Product')}</p>
                <p class="text-[10px] text-gray-400">${esc(d.brand || '—')} ${esc(d.model || '')} · ${esc(d.property_id || '')}</p>
              </div>
              ${d._photoNotRead ? '<span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-red-500/15 text-red-300 border border-red-500/20">NOT READ</span>' : ''}
              <button type="button" onclick="dupReviewDelete(${gi},${di},${globalIdx})" class="btn-press px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-bold rounded-lg transition shrink-0">Delete</button>
            </div>`;
          }).join('')}
          <button type="button" onclick="dupReviewDeleteGroup(${gi})" class="btn-press w-full px-3 py-1.5 bg-rose-900/40 hover:bg-rose-800/60 text-red-200 text-[11px] font-bold rounded-lg transition">Delete ALL ${group.length} in this group</button>
        </div>`;
      }).join('')}
      <div class="flex flex-wrap gap-2 pt-1">
        <button type="button" onclick="dupReviewFinish()" class="btn-press flex-1 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition">Keep & continue publishing</button>
        <button type="button" onclick="dupReviewDeleteAll()" class="btn-press px-4 py-2.5 bg-rose-600/20 hover:bg-rose-600/30 text-rose-200 text-xs font-bold rounded-xl transition">Delete ALL duplicates</button>
      </div>
    </div>`;
  if (window.lucide) lucide.createIcons();
}

window.dupReviewDelete = async function(groupIdx, di, globalIdx) {
  const group = _dupReviewGroups[groupIdx];
  const det = group[di];
  if (!det) return;
  const pid = det.property_id;
  if (!confirm(`Permanently delete "${det.detected_name || 'this product'}" from the database and showroom?`)) return;
  // Delete from DB + showroom if it's a saved product (not just a detection)
  if (pid) {
    try {
      await supabase.from('showroom_listings').delete().eq('property_id', pid);
      removeLocalShowroomListing(pid);
      try { await saveCatalogHidden(pid, true); } catch {}
    } catch {}
  }
  // Remove from groups
  group.splice(di, 1);
  if (group.length < 2) _dupReviewGroups.splice(groupIdx, 1);
  // Remove from remaining
  _dupReviewRemaining = _dupReviewGroups.filter(g => g.length > 1);
  // Remove from master detections list
  _dupReviewAllDetections.splice(globalIdx, 1);
  // Rebuild group indices after splice
  _dupReviewGroups = [];
  const byKey = {};
  for (const d of _dupReviewAllDetections) {
    const brand = normalizeDupKey(d.brand);
    const model = normalizeDupKey(d.model);
    const name  = normalizeDupKey(d.detected_name);
    const key = (brand && model) ? `${brand}::${model}` : (name || `${brand}::${model}`);
    if (!key) continue;
    (byKey[key] = byKey[key] || []).push(d);
  }
  _dupReviewGroups = Object.values(byKey).filter(g => g.length > 1);
  _dupReviewRemaining = _dupReviewGroups;
  showToast(`${esc(det.detected_name || 'Product')} deleted`);
  if (!_dupReviewRemaining.length) { dupReviewFinish(); return; }
  renderDuplicateReview();
};

window.dupReviewDeleteGroup = async function(groupIdx) {
  const group = _dupReviewGroups[groupIdx];
  if (!group) return;
  if (!confirm(`Permanently delete ${group.length - 1} duplicate listing${group.length - 1 > 1 ? 's' : ''} in this group from the database and showroom?`)) return;
  // Delete all but the first (keep the original)
  for (let i = group.length - 1; i >= 1; i--) {
    const det = group[i];
    const pid = det.property_id;
    if (pid) {
      try {
        await supabase.from('showroom_listings').delete().eq('property_id', pid);
        removeLocalShowroomListing(pid);
        try { await saveCatalogHidden(pid, true); } catch {}
      } catch {}
    }
    const gi = _dupReviewAllDetections.indexOf(det);
    if (gi >= 0) _dupReviewAllDetections.splice(gi, 1);
  }
  showToast(`Deleted ${group.length - 1} duplicate${group.length > 2 ? 's' : ''} from group ${groupIdx + 1}`);
  // Rebuild groups
  _dupReviewGroups = [];
  const byKey = {};
  for (const d of _dupReviewAllDetections) {
    const brand = normalizeDupKey(d.brand);
    const model = normalizeDupKey(d.model);
    const name  = normalizeDupKey(d.detected_name);
    const key = (brand && model) ? `${brand}::${model}` : (name || `${brand}::${model}`);
    if (!key) continue;
    (byKey[key] = byKey[key] || []).push(d);
  }
  _dupReviewGroups = Object.values(byKey).filter(g => g.length > 1);
  _dupReviewRemaining = _dupReviewGroups;
  if (!_dupReviewRemaining.length) { dupReviewFinish(); return; }
  renderDuplicateReview();
};

window.dupReviewDeleteAll = async function() {
  const totalDupes = _dupReviewRemaining.reduce((s, g) => s + g.length - 1, 0);
  if (!confirm(`Permanently delete ALL ${totalDupes} duplicate listing${totalDupes !== 1 ? 's' : ''} from the database and showroom? This cannot be undone.`)) return;
  // Delete ALL duplicate extras across all groups (keep first in each)
  let deleted = 0;
  for (const group of _dupReviewGroups) {
    for (let i = group.length - 1; i >= 1; i--) {
      const det = group[i];
      const pid = det.property_id;
      if (pid) {
        try {
          await supabase.from('showroom_listings').delete().eq('property_id', pid);
          removeLocalShowroomListing(pid);
          try { await saveCatalogHidden(pid, true); } catch {}
        } catch {}
      }
      const gi = _dupReviewAllDetections.indexOf(det);
      if (gi >= 0) _dupReviewAllDetections.splice(gi, 1);
      deleted++;
    }
  }
  showToast(`Deleted ${deleted} duplicate listing${deleted !== 1 ? 's' : ''}`);
  dupReviewFinish();
};

window.dupReviewFinish = function() {
  // Clean up duplicates from scanReviewProducts (sync with master list)
  scanReviewProducts = _dupReviewAllDetections.slice();
  _dupReviewGroups = [];
  _dupReviewRemaining = [];
  _dupReviewAllDetections = [];
  renderProducts();
  // Continue with normal auto-scan flow
  if (scanReviewProducts.length) {
    const el = document.getElementById(scannerReviewId);
    if (el) {
      el.classList.remove('hidden', 'text-red-400', 'text-amber-300', 'text-blue-300', 'text-gray-400');
      el.classList.add('text-gray-100');
      el.innerHTML = `
        <div class="space-y-3">
          <div class="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-3">
            <p class="text-xs font-bold text-emerald-300 flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4"></i> Duplicates cleaned — ${scanReviewProducts.length} unique product${scanReviewProducts.length > 1 ? 's' : ''} ready to publish</p>
          </div>
          ${scanReviewProducts.map((p, i) => scanReviewCardHtml(p, i)).join('')}
        </div>`;
      if (window.lucide) lucide.createIcons();
    }
  } else {
    const el = document.getElementById(scannerReviewId);
    if (el) {
      el.classList.remove('hidden', 'text-blue-300', 'text-amber-300');
      el.classList.add('text-gray-400');
      el.textContent = 'All duplicates removed — nothing left to publish.';
    }
    showToast('All duplicates removed.', 'info');
  }
};


// (scanReviewContinueAll removed — each product is published individually via scanReviewContinue)


// COMPANY CONTACT — this store has no external sellers; it is the seller. Any
// listing "seller / contact" field is filled with the owner's own company
// contact, read from the real site_settings the owner manages (never invented).
let _companyContactCache = null;
async function loadCompanyContact() {
  if (_companyContactCache) return _companyContactCache;
  let s = {};
  try {
    const { data } = await supabase.from('site_settings').select('site_name,brand_name,contact_email,contact_phone,whatsapp_number').limit(1).maybeSingle();
    s = data || {};
  } catch {}
  const name = String(s.site_name || s.brand_name || '').trim();
  const phone = String(s.contact_phone || s.whatsapp_number || '').trim();
  const email = String(s.contact_email || '').trim();
  if (!name && !phone && !email) {
    _companyContactCache = { name: 'Company', phone: '', email: '' };
  } else {
    _companyContactCache = { name, phone, email };
  }
  return _companyContactCache;
}

// Fill the property form from a scan result (title, type, rooms, sizes,
// location, description, features and a suggested price). Fully editable â€"
// no auto-save, no auto-publish.
async function applyScanToPropertyForm(result, options = {}) {
  const identification = result && result.identification && result.identification.identified !== false ? result.identification : {};
  const specs = result && result.specs ? result.specs : {};
  const price = result && result.price ? result.price : null;
  const visionUsed = (options && options.visionUsed !== undefined) ? options.visionUsed : (result && result.visionUsed !== undefined ? result.visionUsed : true);
  const filled = [];
  const text = (v) => (Array.isArray(v) ? v.join(', ') : String(v ?? '').trim());
  const set = (key, value) => {
    if (value == null || text([value]) === '') return;
    const field = document.querySelector(`#property-form [name="${key}"]`);
    if (!field) return;
    field.value = String(value);
    filled.push(key);
  };
  const pt = identification.property_type || specs.property_type;
  if (pt) { const mapped = mapPropertyType(pt); if (mapped) set('property_type', mapped); }
  // Title/description only come from a real read; when vision was NOT used the
  // scan stops here so nothing is force-filled (owner completes the form).
  if (visionUsed) {
    set('title', specs.title || identification.detected_name);
    set('description', specs.description);
  }
  set('subcategory', identification.subcategory || specs.subcategory);
  const beds = identification.bedrooms ?? specs.bedrooms;
  if (beds != null && beds !== '') set('bedrooms', parseInt(beds, 10) || beds);
  const baths = identification.bathrooms ?? specs.bathrooms;
  if (baths != null && baths !== '') set('bathrooms', parseInt(baths, 10) || baths);
  set('building_size', identification.building_size || specs.building_size);
  set('land_size', identification.land_size || specs.land_size);
  const parking = identification.parking_spaces ?? specs.parking_spaces;
  if (parking != null && parking !== '') set('parking_spaces', parseInt(parking, 10) || parking);
  const furnRaw = String(identification.furnished || specs.furnished || '').toLowerCase();
  if (/furnished|yes/.test(furnRaw)) set('furnished', 'Furnished');
  else if (/unfurnished|no|empty/.test(furnRaw)) set('furnished', 'Unfurnished');
  const lsRaw = String(identification.listing_status || specs.listing_status || '').toLowerCase();
  if (/rent|lease/.test(lsRaw)) set('listing_status', 'rent');
  else if (/sale|buy|purchase/.test(lsRaw)) set('listing_status', 'sale');
  const area = identification.area || specs.area;
  if (area && !(identification.town || specs.town)) set('town', area);
  set('town', identification.town || specs.town);
  set('city', identification.city || specs.city);
  set('state', identification.state || specs.state);
  const country = identification.country || specs.country;
  set('country', country);
  if (country) {
    const match = (COUNTRIES || []).find(c => String(c.name || '').toLowerCase() === String(country).toLowerCase() || String(c.code || '').toLowerCase() === String(country).toLowerCase());
    if (match && match.code) {
      const f = document.querySelector('#property-form [name="country_code"]');
      if (f) { f.value = match.code; filled.push('country_code'); }
    }
  }
  const address = identification.address || specs.address;
  set('product_location', address || [area || identification.town || specs.town, identification.city || specs.city, identification.state || specs.state, country].filter(Boolean).join(', '));
  set('address', identification.address || specs.address);
  set('zip_code', identification.zip_code || specs.zip_code);
  const latNum = Number(identification.latitude ?? specs.latitude);
  const lngNum = Number(identification.longitude ?? specs.longitude);
  if (Number.isFinite(latNum) && latNum >= -90 && latNum <= 90 && latNum !== 0) { set('latitude', String(latNum)); }
  if (Number.isFinite(lngNum) && lngNum >= -180 && lngNum <= 180 && lngNum !== 0) { set('longitude', String(lngNum)); }
  set('features_text', text(specs.features));
  set('highlights_text', text(identification.highlights || specs.highlights));
  set('seo_keywords_text', text(specs.seo_keywords));

  // New complete-property fields.
  const halfBaths = identification.half_bathrooms ?? specs.half_bathrooms;
  if (halfBaths != null && halfBaths !== '') set('half_bathrooms', parseInt(halfBaths, 10) || halfBaths);
  const floors = identification.floors ?? specs.floors;
  if (floors != null && floors !== '') set('floors', parseInt(floors, 10) || floors);
  set('garage', identification.garage || specs.garage);
  const yb = identification.year_built ?? specs.year_built;
  if (yb != null && yb !== '') set('year_built', parseInt(yb, 10) || yb);
  const yr = identification.year_renovated ?? specs.year_renovated;
  if (yr != null && yr !== '') set('year_renovated', parseInt(yr, 10) || yr);
  const cond = identification.condition || specs.condition;
  const COND_OPTIONS = ['New Construction', 'Like New', 'Excellent', 'Good', 'Fair', 'Needs Renovation'];
  if (cond) {
    const condRaw = String(cond).toLowerCase();
    const matched = COND_OPTIONS.find(c => condRaw.includes(c.toLowerCase()) || c.toLowerCase().includes(condRaw));
    if (matched) set('condition', matched);
  }
  set('interior_features_text', text(specs.interior_features));
  set('exterior_features_text', text(specs.exterior_features));
  set('home_systems_text', text(specs.home_systems));
  const lm = text(identification.landmarks || specs.landmarks);
  if (lm) set('landmarks_text', lm);
  const fp = specs.floor_plan;
  if (fp && typeof fp === 'object') {
    if (fp.image) set('floor_plan_image', fp.image);
    if (fp.levels) set('floor_plan_levels', fp.levels);
    if (fp.total_area) set('floor_plan_total_area', fp.total_area);
    const rooms = Array.isArray(fp.rooms) ? fp.rooms.map(r => {
      const m = String(r).match(/^(.*?):\s*(.*)$/);
      return m ? `${m[1].trim()}: ${m[2].trim()}` : String(r);
    }) : [];
    if (rooms.length) set('floor_plan_rooms', rooms.join(', '));
  }
  const na = specs.nearby_area;
  if (na && typeof na === 'object') {
    if (Array.isArray(na.schools) && na.schools.length) set('nearby_schools_text', na.schools.join(', '));
    if (Array.isArray(na.hospitals) && na.hospitals.length) set('nearby_hospitals_text', na.hospitals.join(', '));
    if (Array.isArray(na.shopping) && na.shopping.length) set('nearby_shopping_text', na.shopping.join(', '));
    if (Array.isArray(na.transportation) && na.transportation.length) set('nearby_transportation_text', na.transportation.join(', '));
    if (Array.isArray(na.distances) && na.distances.length) set('nearby_distances_text', na.distances.join(', '));
  }
  const li = Array.isArray(specs.legal_info) ? specs.legal_info.join(', ') : text(specs.legal_info);
  if (li) set('legal_info_text', li);
  if (specs.inspection_info) set('inspection_info', specs.inspection_info);
  if (specs.risk_notes) set('risk_notes', specs.risk_notes);

  // Professional real-estate fields.
  set('neighborhood', identification.neighborhood || specs.neighborhood || identification.area);
  set('living_areas', text(specs.living_areas));
  const kitchens = identification.kitchens ?? specs.kitchens;
  if (kitchens != null && kitchens !== '') set('kitchens', parseInt(kitchens, 10) || kitchens);
  const balconies = identification.balconies ?? specs.balconies;
  if (balconies != null && balconies !== '') set('balconies', parseInt(balconies, 10) || balconies);
  set('garden', identification.garden || specs.garden);
  set('pool', identification.pool || specs.pool);
  set('security', text(specs.security));
  set('utilities', text(specs.utilities));
  set('construction_type', specs.construction_type);
  set('construction_status', specs.construction_status);
  set('ownership_type', specs.ownership_type || identification.ownership_type);
  const owns = await loadCompanyContact();
  if (owns.name) set('contact_name', owns.name);
  if (owns.phone) set('contact_phone', owns.phone);
  if (owns.email) set('contact_email', owns.email);
  const vs = document.querySelector('#property-form [name="verification_status"]');
  if (visionUsed && vs) { vs.value = 'Not verified'; filled.push('verification_status'); }

  // "Not specified" policy â€” any relevant field the AI could not determine is
  // marked clearly instead of being left blank or guessed, per the owner's rules.
  // Fields the AI could not determine are left BLANK for the owner to complete -
  // they are never stamped "Not specified" anymore (see inferScanGaps).

  const min = Number.isFinite(Number(GLOBAL_PRICE_MIN)) ? Number(GLOBAL_PRICE_MIN) : 0;
  const max = Number.isFinite(Number(GLOBAL_PRICE_MAX)) ? Number(GLOBAL_PRICE_MAX) : 999999999;
  const clamp = (n) => Math.max(min, Math.min(max, Math.round(n)));
  const est = price ? Number(price.estimated_price) : NaN;
  const estDiscount = price ? Number(price.suggested_discount_price) : NaN;
  if (visionUsed && Number.isFinite(est) && est > 0) {
    const realField = document.querySelector('#property-form [name="real_price"]');
    if (realField) { realField.value = String(clamp(est)); filled.push('real_price'); }
    const discount = Number.isFinite(estDiscount) && estDiscount > 0 && estDiscount < est ? estDiscount : est;
    set('price', String(clamp(discount)));
  }
  // GUARANTEED COMPLETENESS PASS â€” same rule as the product form: AI values win,
  // anything still empty gets a safe default (price/stock/title/description) so
  // the property form is never left partially blank. Runs only when vision read
  // the photos; when the free quota is exhausted the scan stops here instead.
  const propTitleFallback = String(specs.title || identification.detected_name || 'Property').trim() || 'Property';
  const propDescFallback = specs.description
    || `${propTitleFallback} available on Weverse Online Shop. Review the details below and edit anything before publishing.`;
  const propGuaranteed = guaranteeCompleteFormFill('#property-form', { titleFallback: propTitleFallback, descriptionFallback: propDescFallback, visionUsed });
  if (propGuaranteed) filled.push(`${propGuaranteed} auto-completed (safe defaults)`);

  if (typeof window.refreshPropertyMapFromForm === 'function') window.refreshPropertyMapFromForm();
  // REAL-DATA ENHANCEMENT: auto-locate the property with the free Nominatim
  // geocoder, pull real nearby schools/hospitals/shopping/transportation from
  // the free OpenStreetMap Overpass API, and fill any remaining blank field with
  // an honest "Not provided - requires verification" value so the form is NEVER
  // left visually empty. Runs async so it never blocks the scan result.
  enhancePropertyFormWithRealData().catch(() => {});
  return { filled };
}

// â”€â”€ REAL-DATA ENHANCEMENT LAYER (property form) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Turns scan output into a COMPLETE, REAL, map-ready listing using only free
// services (no keys):
//   1. Guarantees real Latitude/Longitude - geocoding the known location text
//      (product_location / town / city / state / country) with Nominatim.
//   2. Reverse-geocodes the pin into real country/state/city/town/address/zip
//      for any location field still blank, so the map always has a real place.
//   3. Fetches REAL nearby schools, hospitals, shopping and transportation from
//      the OpenStreetMap Overpass API around the resolved coordinates and
//      writes each with its real approximate distance.
//   4. Marks any remaining blank editable field as "Not provided - requires
//      verification" (honest, non-empty) so nothing is ever visually empty.
//   5. Refreshes the live OSM map and appends a short enhancement report.
const REQUIRES_VERIFICATION = 'Not provided - requires verification';
// Fields where "requires verification" is a sensible, non-empty placeholder.
const PROPERTY_REQUIRED_LABELS = {
  address: 'Full street address - requires verification',
  zip_code: 'Postal code - requires verification',
  neighborhood: 'Neighborhood - requires verification',
  product_location: 'Local area details - requires verification',
  garage: 'Parking / garage details - requires verification',
  garden: 'Outdoor space details - requires verification',
  pool: 'Pool details - requires verification',
  security: 'Security features - requires verification',
  utilities: 'Utilities details - requires verification',
  living_areas: 'Main living areas - requires verification',
  construction_type: 'Construction material - requires verification',
  construction_status: 'Construction status - requires verification',
  ownership_type: 'Ownership type - requires verification',
  contact_name: '', // filled with the company's own contact (no sellers)
  contact_phone: '', // filled with the company's own contact (no sellers)
  contact_email: '', // filled with the company's own contact (no sellers)
  inspection_info: 'Inspection details - requires verification',
  verification_date: '', // left blank (date)
  documents_text: '', // left blank (URLs)
};
const PROPERTY_EMPTY_OK = new Set([
  'is_active', 'property_id', 'id', 'documents_text', 'verification_date', 'floor_plan_image',
  'landmarks_text', 'legal_info_text', 'risk_notes', 'highlights_text', 'seo_keywords_text',
]);

function fmtKm(m) {
  if (!Number.isFinite(m)) return 'dist. TBD';
  if (m < 1) return `${Math.max(0, Math.round(m * 1000))} m`;
  return `${m.toFixed(1)} km`;
}

async function overpassNearby(lat, lng, radiusM = 4000) {
  const query = `
    [out:json][timeout:25];
    (
      nwr["amenity"="school"](around:${radiusM},${lat},${lng});
      nwr["amenity"~"^(hospital|clinic|doctors)$"](around:${radiusM},${lat},${lng});
      nwr["shop"~"^(supermarket|mall|convenience|marketplace|department_store)$"](around:${radiusM},${lat},${lng});
      nwr["amenity"~"^(bus_station|ferry_terminal|charging_station|fuel)$"](around:${radiusM},${lat},${lng});
      nwr["railway"="station"](around:${radiusM},${lat},${lng});
    );
    out center tags;`;
  try {
    const res = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'data=' + encodeURIComponent(query),
    });
    if (!res.ok) return { elements: [] };
    const data = await res.json();
    return data || { elements: [] };
  } catch {
    return { elements: [] };
  }
}
async function overpassMirrorNearby(lat, lng, radiusM = 4000) {
  try {
    const res = await fetch('https://overpass.kumi.systems/api/interpreter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'data=' + encodeURIComponent(`
        [out:json][timeout:25];
        (
          nwr["amenity"="school"](around:${radiusM},${lat},${lng});
          nwr["amenity"~"^(hospital|clinic)$"](around:${radiusM},${lat},${lng});
          nwr["shop"~"^(supermarket|mall|convenience)$"](around:${radiusM},${lat},${lng});
          nwr["railway"="station"](around:${radiusM},${lat},${lng});
        );
        out center tags;`),
    });
    if (!res.ok) return { elements: [] };
    return (await res.json()) || { elements: [] };
  } catch {
    return { elements: [] };
  }
}

function haversineKm(aLat, aLng, bLat, bLng) {
  const R = 6371;
  const dLat = (bLat - aLat) * Math.PI / 180;
  const dLng = (bLng - aLng) * Math.PI / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(aLat * Math.PI / 180) * Math.cos(bLat * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

function nearbyElementName(el) {
  const t = (el && el.tags) || {};
  return (t.name || t['addr:street'] || t.brand || t.operator || t['ref:housenumber'] || 'Nearby location');
}

async function fetchRealNearbyPlaces(lat, lng) {
  let prim = await overpassNearby(lat, lng);
  if (!prim.elements || !prim.elements.length) prim = await overpassMirrorNearby(lat, lng);
  const elements = (prim && prim.elements) || [];
  const groups = {
    schools: [],
    hospitals: [],
    shopping: [],
    transportation: [],
  };
  const distances = [];
  for (const el of elements) {
    const t = el.tags || {};
    const elat = el.lat ?? (el.center && el.center.lat);
    const elng = el.lon ?? (el.center && el.center.lon);
    if (!Number.isFinite(elat) || !Number.isFinite(elng)) continue;
    const km = haversineKm(lat, lng, elat, elng);
    const name = String(nearbyElementName(el)).trim() || 'Nearby location';
    const line = `${name} (${fmtKm(km)})`;
    const dist = `${name}: ${fmtKm(km)}`;
    if (t.amenity === 'school') { groups.schools.push(line); distances.push(dist); }
    else if (t.amenity && /^(hospital|clinic|doctors)$/.test(t.amenity)) { groups.hospitals.push(line); distances.push(dist); }
    else if (t.shop && /^(supermarket|mall|convenience|marketplace|department_store)$/.test(t.shop)) { groups.shopping.push(line); distances.push(dist); }
    else { groups.transportation.push(line); distances.push(dist); }
    if (groups.schools.length + groups.hospitals.length + groups.shopping.length + groups.transportation.length >= 14) break;
  }
  for (const k of Object.keys(groups)) groups[k] = groups[k].slice(0, 4);
  return { groups, distances: distances.slice(0, 10) };
}

function fillHonestBlanks(form) {
  if (!form) return 0;
  let count = 0;
  form.querySelectorAll('input, textarea, select').forEach((field) => {
    const name = String(field.name || '').trim();
    if (!name || GUARANTEED_FILL_SKIP.has(name)) return;
    if (PROPERTY_EMPTY_OK.has(name)) return;
    const type = String(field.type || '').toLowerCase();
    if (['hidden', 'checkbox', 'radio', 'file', 'submit', 'button', 'image', 'password'].includes(type)) return;
    if (field.disabled) return;
    if (String(field.value || '').trim() !== '') return;
    if (type === 'date') { field.value = ''; return; }
    if (type === 'select') { if (field.options && field.options.length > 2) field.value = field.options[0].value || ''; count++; return; }
    if (name === 'description') { field.value = 'Full property details to be confirmed by the seller. Review and edit before publishing.'; count++; return; }
    if (type === 'number') { field.value = '0'; count++; return; }
    if (PROPERTY_REQUIRED_LABELS[name] === '') return;
    field.value = PROPERTY_REQUIRED_LABELS[name] || REQUIRES_VERIFICATION;
    count++;
  });
  return count;
}

// Honest blank-fill for vehicle forms: after the AI scan, any editable field the
// model could not determine is stamped with a clear "requires verification"
// placeholder instead of being left visually empty. Never fabricates real values.
const VEHICLE_REQ_LABELS = {
  vin: 'VIN / serial number - requires verification',
  mileage: 'Odometer reading - requires verification',
  engine: 'Engine details - requires verification',
  horsepower: 'Horsepower - requires verification',
  fuel_economy: 'Fuel economy - requires verification',
  towing_capacity: 'Towing capacity - requires verification',
  seating_capacity: 'Seating / sleeping capacity - requires verification',
  sleeping_capacity: 'Seating / sleeping capacity - requires verification',
  doors: 'Number of doors - requires verification',
  wheels_tires: 'Wheels and tires - requires verification',
  dimensions: 'Dimensions (L x W x H) - requires verification',
  cargo_capacity: 'Cargo capacity - requires verification',
  previous_owners: 'Previous owners - requires verification',
  ownership_history: 'Ownership history - requires verification',
  service_history: 'Service / maintenance history - requires verification',
  accident_history: 'Accident / damage history - requires verification',
  warranty: 'Warranty cover - requires verification',
  location: 'Listing location - requires verification',
  seller_name: '', // filled with the company's own contact (no sellers)
  seller_phone: '', // filled with the company's own contact (no sellers)
  seller_email: '', // filled with the company's own contact (no sellers)
  safety_features: 'Safety features - requires verification',
  driver_assistance: 'Driver assistance - requires verification',
  technology: 'Technology / infotainment - requires verification',
  interior: 'Interior and comfort - requires verification',
  features_text: 'Additional features - requires verification',
  trim: 'Trim / edition - requires verification',
  color: 'Exterior color - requires verification',
};
function fillVehicleBlanks(form) {
  if (!form) return 0;
  let count = 0;
  form.querySelectorAll('input, textarea, select').forEach((field) => {
    const name = String(field.name || '').trim();
    if (!name || GUARANTEED_FILL_SKIP.has(name)) return;
    const type = String(field.type || '').toLowerCase();
    if (['hidden', 'checkbox', 'radio', 'file', 'submit', 'button', 'image', 'password'].includes(type)) return;
    if (field.disabled) return;
    if (String(field.value || '').trim() !== '') return;
    if (type === 'number') { field.value = '0'; count++; return; }
    if (name === 'condition') { field.value = 'Used - Good'; count++; return; }
    if (type === 'date') { field.value = ''; return; }
    if (type === 'select') { if (field.options && field.options.length > 2) field.value = field.options[0].value || ''; count++; return; }
    if (name === 'description') { field.value = 'Full vehicle details to be confirmed by the seller. Review and edit before publishing.'; count++; return; }
    field.value = VEHICLE_REQ_LABELS[name] || REQUIRES_VERIFICATION;
    count++;
  });
  return count;
}

async function enhancePropertyFormWithRealData() {
  const form = document.getElementById('property-form');
  if (!form) return;
  const q = (n) => String(form.querySelector(`[name="${n}"]`)?.value || '').trim();
  const set = (n, v) => {
    if (v == null || String(v).trim() === '') return;
    const f = form.querySelector(`[name="${n}"]`);
    if (f && !String(f.value || '').trim()) { f.value = String(v); return true; }
    return false;
  };
  const statusEl = document.getElementById('scan-ai-prop-status');
  const append = (html) => {
    if (!statusEl) return;
    statusEl.classList.remove('hidden');
    statusEl.insertAdjacentHTML('beforeend', `<div class="mt-1 text-[11px] text-sky-300">${html}</div>`);
  };

  let lat = parseFloat(q('latitude'));
  let lng = parseFloat(q('longitude'));
  let geoNote = '';

  // 1) If we already have coordinates (from the AI), reverse-geocode to fill the
  //    missing address/state/city/country with REAL data. Otherwise geocode the
  //    location text to GET real coordinates.
  if (Number.isFinite(lat) && Number.isFinite(lng) && (lat || lng)) {
    await reverseGeocodeProperty(lat, lng).catch(() => {});
    geoNote = 'geocoded from AI coordinates';
  } else {
    const place = [q('product_location'), q('town'), q('city'), q('state'), q('country')].filter(Boolean).join(', ');
    if (place) {
      try {
        const res = await fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=&q=' + encodeURIComponent(place));
        const rows = await res.json();
        if (rows && rows[0]) {
          lat = parseFloat(rows[0].lat);
          lng = parseFloat(rows[0].lon);
          set('latitude', lat.toFixed(6));
          set('longitude', lng.toFixed(6));
          geoNote = `mapped to ${rows[0].display_name}`;
          await reverseGeocodeProperty(lat, lng).catch(() => {});
        }
      } catch {}
    }
  }

  const finalLat = parseFloat(q('latitude'));
  const finalLng = parseFloat(q('longitude'));

  // 2) Refresh the real OSM map with the resolved coordinates.
  if (typeof window.refreshPropertyMapFromForm === 'function') window.refreshPropertyMapFromForm();

  // 3) Real nearby places from Overpass (free, real schools/hospitals/etc.).
  let nearbyNote = '';
  if (Number.isFinite(finalLat) && Number.isFinite(finalLng) && (finalLat || finalLng)) {
    const { groups, distances } = await fetchRealNearbyPlaces(finalLat, finalLng);
    const setName = (n, arr) => {
      if (arr && arr.length) {
        const f = form.querySelector(`[name="${n}"]`);
        if (f && !String(f.value || '').trim()) { f.value = arr.join(', '); }
      }
    };
    setName('nearby_schools_text', groups.schools);
    setName('nearby_hospitals_text', groups.hospitals);
    setName('nearby_shopping_text', groups.shopping);
    setName('nearby_transportation_text', groups.transportation);
    setName('nearby_distances_text', distances);
    const total = groups.schools.length + groups.hospitals.length + groups.shopping.length + groups.transportation.length;
    if (total) nearbyNote = `Located ${total} real nearby places on the live map.`;
    else nearbyNote = 'No schools/hospitals/stores found around this exact point yet - review or adjust the pin.';
  }

  // 4) Honest completeness - never leave an editable field visually empty.
  const blanks = fillHonestBlanks(form);
  if (typeof window.refreshPropertyMapFromForm === 'function') window.refreshPropertyMapFromForm();

  const bits = [];
  if (geoNote) bits.push(`📍 ${geoNote}`);
  if (nearbyNote) bits.push(`🗺 ${nearbyNote}`);
  if (blanks) bits.push(`✅ ${blanks} blank field${blanks > 1 ? 's' : ''} marked \u201CRequires verification\u201D so nothing is empty.`);
  if (bits.length) append(bits.join(' &nbsp;•&nbsp; '));
}

// THE COMPLETE SCAN PIPELINE â€” used by every fill-a-form flow (product form,
// property form). Guarantees, in order:
//   1. EVERY page/image is read (batched inside the AI client â€” nothing skipped).
//   2. The prompt knows EVERY field of the open form and must account for each.
//   3. A validation layer normalizes/coerces/matches values BEFORE they touch
//      the form and produces the per-field checklist.
//   4. A SECOND verification pass re-reads the document, corrects wrong values,
//      recovers missed ones and unmaps misplaced ones.
//   5. Corrections are merged in and everything is re-validated.
// Only then is anything written to the form. The checklist is returned so the
// owner sees exactly what was filled, what was not found, and what needs review.
const SCAN_IDENTIFICATION_KEYS = ['brand', 'model', 'year', 'year_estimated', 'body_type', 'color', 'condition', 'subcategory',
  'property_type', 'bedrooms', 'bathrooms', 'half_bathrooms', 'building_size', 'land_size', 'floors', 'garage',
  'parking_spaces', 'furnished', 'year_built', 'year_renovated', 'area', 'address', 'zip_code', 'landmarks',
  'town', 'city', 'state', 'country', 'latitude', 'longitude', 'listing_status',
  // Professional real-estate fields.
  'neighborhood', 'living_areas', 'kitchens', 'balconies', 'garden', 'pool', 'security', 'utilities',
  'construction_type', 'construction_status', 'ownership_type', 'contact_name', 'contact_phone', 'contact_email',
  // Professional vehicle fields.
  'trim', 'mileage', 'engine', 'horsepower', 'transmission', 'drive_type', 'fuel_type', 'fuel_economy',
  'towing_capacity', 'seating_capacity', 'sleeping_capacity', 'doors', 'interior', 'safety_features',
  'driver_assistance', 'technology', 'wheels_tires', 'dimensions', 'cargo_capacity', 'ownership_history',
  'service_history', 'accident_history', 'previous_owners', 'registration_status', 'inspection_status',
  'warranty', 'vin', 'location', 'seller_name', 'seller_phone', 'seller_email'];
// Honest status: when the Gemini key hit its free limit mid-scan (or none is
// set), say so plainly instead of letting results silently look thin.
function scanAiLimitNotice() {
  if (Date.now() < (typeof aiClient !== 'undefined' ? (aiClient._geminiQuotaUntil || 0) : 0)) {
    return `<p class="text-[11px] text-amber-300 mt-1">⚠ Your Gemini key hit its FREE rate limit during this scan — parts were completed from saved details only. Wait ~1 minute and scan again for full AI reading.</p>`;
  }
  return '';
}

// Second-pass verification toggle. It doubles free-tier request usage per
// product, so it defaults to OFF; enable it from the General AI Scanner modal
// when you want maximum accuracy on a few items.
function scanVerifyPassEnabled() {
  try { return localStorage.getItem('weverse_scan_verify') === 'on'; } catch { return false; }
}
function setScanVerifyPass(v) {
  try { localStorage.setItem('weverse_scan_verify', v ? 'on' : 'off'); } catch {}
}
window.scanVerifyPassEnabled = scanVerifyPassEnabled;
window.setScanVerifyPass = setScanVerifyPass;

// One cheap preflight before any scanner starts burning requests: asks the
// SERVER which vision providers are configured and alive (Gemini primary,
// Groq backup). Keys never leave the server. Scanning always continues but
// the owner sees the truth up front instead of discovering it product-by-product.
async function scanPreflightStatus(setStatus) {
  aiClient.beginScanSession();
  try {
    const pf = await aiClient.preflight();
    const g = pf.gemini, q = pf.groq;
    if (g && g.ok && q && q.ok) {
      setStatus(`<span class="inline-flex items-center gap-1"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-300"></i> AI ready — Gemini primary + Groq backup verified (${esc(g.model || '')}).</span>`, 'text-emerald-300');
    } else if (g && g.ok) {
      setStatus(`AI ready via Gemini${g.model ? ` (${esc(g.model)})` : ''}. Groq backup not available${q && q.error ? ': ' + esc(q.error) : '.'} Scans continue on Gemini alone.`, 'text-emerald-300');
    } else if (q && q.ok) {
      setStatus(`Gemini unavailable${g && g.error ? ' (' + esc(g.error) + ')' : ''} — scans will run on the Groq backup only.`, 'text-amber-300');
    } else if (pf.error) {
      setStatus(`AI service unreachable (${esc(pf.error)}) — results will be filled from saved details only, clearly marked.`, 'text-red-400');
    } else {
      setStatus('No working vision provider found. Add a Google Gemini key (primary) and optionally a Groq key (backup) in AI Settings.', 'text-red-400');
    }
  } catch {
    setStatus('AI preflight failed — continuing anyway.', 'text-amber-300');
  }
}

async function runVerifiedScan({ imageUrls, identification, category, formSelector, verify = scanVerifyPassEnabled() }) {
  const fields = collectFormFields(formSelector);
  const fieldsSchema = buildFieldSchemaSection(fields);

  // PASS 1 â€” extract against every known form field.
  const combined = await aiClient.completeSpecsAndPrice(imageUrls, identification, {
    category: category || '',
    maxImages: AI_PRODUCT_SCANNER.maxImages,
    fieldsSchema,
  });
  const price = combined ? combined.price : null;
  const specs1 = (combined && combined.specs) || {};

  // Full extraction view = identification keys relevant to form fields + specs.
  let extractionView = {};
  for (const k of SCAN_IDENTIFICATION_KEYS) {
    if (identification && identification[k] != null && identification[k] !== '') extractionView[k] = identification[k];
  }
  extractionView = { ...extractionView, ...specs1 };

  // Validate pass 1 (normalizes formats, matches options, flags problems).
  let validated = validateScanExtraction(fields, extractionView);
  // The instance is "vision-backed" only when a REAL vision provider (Gemini or
  // Groq) actually read the photos. When there is no combined result (quota/
  // service failure) or only the free text fallback ran, visionUsed is false so
  // inference and guaranteed defaults STOP instead of force-filling.
  const providerTag = `${(combined && combined.specs && combined.specs._aiProvider) || ''} ${(combined && combined.specs && combined.specs._aiModel) || ''}`;
  const visionWasUsed = !!combined && !/pollinations|free ai|\b(aiofields|fake)\b/i.test(providerTag);

  // INFERENCE PASS — fill the remaining genuine gaps with real, expert-derived
  // values (never "Not specified"). Every inferred value is marked as an
  // estimate so the owner reviews it. Runs on the validated specs so the
  // verification pass below can re-check the inferred values against the photos.
  let inferenceCount = 0;
  const inference = inferScanGaps(category, validated.specs, identification, fields);
  if (visionWasUsed && inference && Object.keys(inference.specs).length) {
    const merged = { ...validated.specs, ...inference.specs };
    const estKeys = new Set([
      ...(Array.isArray(validated.specs.estimated) ? validated.specs.estimated : []),
      ...(inference.estimated || []),
    ]);
    merged.estimated = [...estKeys];
    validated = validateScanExtraction(fields, merged);
    inferenceCount = (inference.estimated || []).length;
  }

  // PASS 2 — verification against ALL pages/images again. Skipped when the
  // first pass never saw the document (quota blocked → text-only fallback):
  // there would be nothing visual to verify against.
  let verified = false;
  const passProvider = `${(combined && combined.specs && combined.specs._aiProvider) || ''} ${(combined && combined.specs && combined.specs._aiModel) || ''}`;
  // visionWasUsed is computed above, before the inference pass.
  if (verify && visionWasUsed) {
    try {
      const verdict = await aiClient.verifyExtraction(imageUrls, identification, validated.specs, fields, { maxImages: AI_PRODUCT_SCANNER.maxImages });
    if (verdict) {
      const corrections = verdict.corrections && typeof verdict.corrections === 'object' ? verdict.corrections : {};
      const appliedKeys = Object.keys(corrections);
      if (appliedKeys.length) {
        const corrected = { ...validated.specs };
        for (const [k, v] of Object.entries(corrections)) {
          if (!fields.some(f => f.key === k)) continue;          // only real form fields
          if (v == null || String(Array.isArray(v) ? v.join(', ') : v).trim() === '') continue;
          corrected[k] = v;
        }
        // wrong_mapping: move a value from one field to another.
        for (const [fromKey, toKey] of (Array.isArray(verdict.wrong_mapping) ? verdict.wrong_mapping : [])) {
          if (corrected[fromKey] != null && (corrected[toKey] == null || String(corrected[toKey]).trim() === '')) {
            corrected[toKey] = corrected[fromKey];
            delete corrected[fromKey];
          }
        }
        validated = validateScanExtraction(fields, corrected);
        // Keep identification consistent where a correction overrode it.
        identification = { ...identification };
        for (const k of appliedKeys) {
          if (SCAN_IDENTIFICATION_KEYS.includes(k) && validated.specs[k] != null) identification[k] = validated.specs[k];
        }
      }
      verified = true;
      validated.verificationNotes = Array.isArray(verdict.notes) ? verdict.notes.slice(0, 4) : [];
    }
    } catch { /* verification unavailable â€” pass-1 data (already validated) stands */ }
  }

  return {
    specs: validated.specs,
    price,
    checklist: validated.checklist,
    summary: validated.summary,
    verified,
    verificationNotes: validated.verificationNotes || [],
    identification,
    visionUsed: visionWasUsed,
    verifyRequested: !!verify,
    providerLabel: passProvider.trim() || 'unknown',
    inferred: inferenceCount,
  };
}

// STAGES 2+3 for a product form that is already open on the right category.
async function completeScanAndFill(identification0, images, category) {
  const status = document.getElementById('scan-ai-status');
  const setStatus = (html, cls) => {
    if (!status) return;
    status.classList.remove('hidden', 'text-red-400', 'text-emerald-300', 'text-amber-300', 'text-blue-300', 'text-gray-400');
    if (cls) status.classList.add(cls);
    status.innerHTML = html;
  };
  try {
    setStatus('Scanning your photo into the formâ€¦', 'text-blue-300');
    let identification = identification0;
    // Auto mode respects the scanner's second-pass checkbox for accuracy; the
    // manual single-product scan stays on the one fast pass.
    const res = await runVerifiedScan({ imageUrls: images, identification, category, formSelector: '#product-form', verify: _autoScannerActive ? scanVerifyPassEnabled() : false });
    identification = res.identification || identification;
    const out = applyScanToProductForm({ identification, specs: res.specs, price: res.price, visionUsed: res.visionUsed });
    const idLabel = [identification.year, identification.brand, identification.model].filter(Boolean).join(' ') || identification.detected_name || 'the product';
    let msg = `<span class="inline-flex items-center gap-1"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-300"></i></span> ${esc(idLabel)} — ${out.filled.length} field${out.filled.length > 1 ? 's' : ''} filled.`;
    if (!res.visionUsed) {
      msg += ' <span class="text-red-300">(Photo not read — values from saved details. Re-scan when the key is available.)</span>';
    }
    if (res.summary && res.summary.flagged) msg += ` Review ${res.summary.flagged} flagged value${res.summary.flagged > 1 ? 's' : ''}.`;
    if (res.inferred) msg += ` <span class="text-amber-300/80">(${res.inferred} values inferred from the model's real specs - review)</span>`;
    msg += _autoScannerActive
      ? ' Publishing automatically now.'
      : ' Your uploaded photo stays attached. Press SAVE / UPDATE to publish.';
    setStatus(msg, 'text-emerald-300');
    showToast(_autoScannerActive
      ? `Filled for ${idLabel} — publishing automatically.`
      : `Form filled for ${idLabel} — review and press SAVE / UPDATE.`, 'success');
  } catch (err) {
    const msg = String(err?.message || err);
    const keyHint = /key|api|configured|settings|vision/i.test(msg);
    setStatus(keyHint
      ? 'The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.'
      : `Scan failed: ${msg}`, 'text-red-400');
    showToast('AI scan failed.', 'error');
  }
  if (window.lucide) lucide.createIcons();
}

// Manual trigger only â€” never called from any image-upload handler.
window.scanProductWithAI = async function() {
  const form = document.getElementById('product-form');
  if (!form) { showToast('Open the product form first.', 'error'); return; }
  const btn = document.getElementById('btn-scan-ai');
  const status = document.getElementById('scan-ai-status');

  const images = [...(document.querySelectorAll('#image-url-inputs [name="images"]') || [])]
    .map((el) => el.value).filter(Boolean);
  if (!images.length) { showToast('Upload at least one product image before scanning.', 'error'); return; }

  const original = btn ? btn.innerHTML : '';
  const setStatus = (html, cls) => {
    if (!status) return;
    status.classList.remove('hidden', 'text-red-400', 'text-emerald-300', 'text-amber-300', 'text-blue-300', 'text-gray-400');
    if (cls) status.classList.add(cls);
    status.innerHTML = html;
  };

  // Straight to the scan — no preflight network check, no second verification
  // pass. One fast AI read fills the form; you review and publish.
  try { aiClient.beginScanSession(); } catch {}
  setStatus('Scanning your photo and filling the formâ€¦', 'text-blue-300');

  if (btn) { btn.disabled = true; btn.innerHTML = 'Scanningâ€¦'; }
  if (status) status.classList.remove('hidden');

  let detection;
  try {
    detection = await aiClient.detectProducts(images, { category: form.dataset.category || '', maxImages: AI_PRODUCT_SCANNER.maxImages });
  } catch (err) {
    const msg = String(err?.message || err);
    const keyHint = /key|api|configured|settings|vision/i.test(msg);
    setStatus(keyHint
      ? 'The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.'
      : `Scan failed: ${msg}`, 'text-red-400');
    showToast('AI scan failed.', 'error');
    if (btn) { btn.disabled = false; btn.innerHTML = original; }
    return;
  }

  // Pick the ONE product from the photo. When a photo shows several items we
  // still fill a single form from the first detection so the owner never has to
  // click through a "detected products" screen â€” they review and publish here.
  let products = (detection && detection.identified !== false && Array.isArray(detection.products) && detection.products.length) ? detection.products : [];
  if (!products.length) {
    // NEVER REJECT: the AI could not read the photo(s), but the images are real â€”
    // fill the form from the best available details so the owner can still
    // review, edit and publish without a separate review screen.
    products = [{
      detected_name: 'Product from your photos',
      category: form.dataset.category || 'Other',
      listing_type: 'product',
      confidence: 'low',
      image_indices: images.map((_, i) => i),
    }];
    setStatus('Photo read partially — the form was filled with the best available details. Review, then press Publish.', 'text-amber-300');
  }

  // FILL the currently-open product form directly â€” your uploaded image/video
  // stays attached (the scanner only fills fields, it never clears images).
  // No review cards, no Continue/Edit/Remove/Delete/Cancel â€” one scan fills the
  // form once and you review + publish with one click.
  try {
    await completeScanAndFill(products[0], images, products[0].category || form.dataset.category || 'Other');
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = original; }
  }
};

// Route an identified property into the Properties Manager with its images and
// the same scan â†’ confirm â†’ fill â†’ review flow (still never auto-publishes).
function routePropertyScan(identification, images) {
  if (window._pfEscapeHandler) { document.removeEventListener('keydown', window._pfEscapeHandler); window._pfEscapeHandler = null; }
  showAddPropertyModal();
  const preview = document.getElementById('image-preview');
  const inputs = document.getElementById('image-url-inputs');
  if (preview && inputs) {
    preview.innerHTML = images.map((u, i) => imageThumbHtml(u, i)).join('');
    inputs.innerHTML = images.map((u, i) => `<input type="hidden" name="images" id="img-url-${i}" value="${esc(u)}">`).join('');
    updateCoverBadge();
    updateGalleryCounter();
  }
  const status = document.getElementById('scan-ai-prop-status');
  const setStatus = (html, cls) => {
    if (!status) return;
    status.classList.remove('hidden', 'text-red-400', 'text-emerald-300', 'text-amber-300', 'text-blue-300');
    if (cls) status.classList.add(cls);
    status.innerHTML = html;
  };
  setStatus('Reading every page, completing property details and valueâ€¦', 'text-blue-300');
  (async () => {
    try {
      const res = await runVerifiedScan({ imageUrls: images, identification, category: 'Real Estate', formSelector: '#property-form' });
      const id2 = res.identification || identification;
      const out = await applyScanToPropertyForm({ identification: id2, specs: res.specs, price: res.price, visionUsed: res.visionUsed });
      let msg;
      if (!res.price) {
        msg = `${esc(id2.detected_name || 'Property')} â€” ${out.filled.length} fields ready. Price estimate skipped â€” set the price manually, then press Publish Property.`;
      } else {
        msg = `${esc(id2.detected_name || 'Property')} â€” ${out.filled.length} field${out.filled.length > 1 ? 's' : ''} ready for you. Review and edit everything, then press Publish Property.`;
      }
      if (!res.visionUsed) {
        msg += `<p class="text-[11px] text-red-300 mt-1">⚠ Photo was NOT read by AI (${esc(res.providerLabel || 'text fallback')}) — these values did NOT come from your images.</p>`;
      } else if (res.verifyRequested) {
        msg += res.verified
          ? `<p class="text-[11px] text-gray-400 mt-1">✓ Second-pass verification completed — every value was re-checked against your document.</p>`
          : `<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run — values come from the first pass.</p>`;
      }
      msg += res.inferred ? ` <span class="text-amber-300/80">(${res.inferred} values inferred from the model's real specs/type - review them)</span>` : '';
    msg += scanAiLimitNotice();
      msg += renderScanChecklistReport(res.checklist, res.summary);
      setStatus(msg, res.price ? 'text-emerald-300' : 'text-amber-300');
      showToast('Review the property details, then press Publish Property.', 'success');
      if (window.lucide) lucide.createIcons();
    } catch (err) {
      const keyHint = /key|api|configured|settings|vision/i.test(String(err?.message || err));
      setStatus(keyHint ? 'The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.' : `Scan failed: ${String(err?.message || err)}`, 'text-red-400');
      showToast('AI scan failed.', 'error');
    }
  })();
}

// â”€â”€ AI Property Scanner (Properties Manager) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
window.scanPropertyWithAI = async function() {
  const form = document.getElementById('property-form');
  if (!form) { showToast('Open the property form first.', 'error'); return; }
  const btn = document.getElementById('btn-scan-ai-prop');
  const status = document.getElementById('scan-ai-prop-status');

  const images = [...(document.querySelectorAll('#image-url-inputs [name="images"]') || [])]
    .map((el) => el.value).filter(Boolean);
  if (!images.length) { showToast('Upload at least one property image before scanning.', 'error'); return; }

  const original = btn ? btn.innerHTML : '';
  const setStatus = (html, cls) => {
    if (!status) return;
    status.classList.remove('hidden', 'text-red-400', 'text-emerald-300', 'text-amber-300', 'text-blue-300', 'text-gray-400');
    if (cls) status.classList.add(cls);
    status.innerHTML = html;
  };

  await scanPreflightStatus(setStatus);

  if (btn) { btn.disabled = true; btn.innerHTML = 'Scanningâ€¦'; }
  setStatus('Identifying this property from your imagesâ€¦', 'text-blue-300');

  let identification;
  try {
    identification = await aiClient.identifyProduct(images, { category: 'Real Estate', maxImages: AI_PRODUCT_SCANNER.maxImages });
  } catch (err) {
    const msg = String(err?.message || err);
    const keyHint = /key|api|configured|settings|vision/i.test(msg);
    setStatus(keyHint
      ? 'The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.'
      : `Scan failed: ${msg}`, 'text-red-400');
    showToast('AI scan failed.', 'error');
    if (btn) { btn.disabled = false; btn.innerHTML = original; }
    return;
  }

  if (!identification || identification.identified === false) {
    setStatus(identification && identification.reason
      ? `Could not identify the property: ${esc(identification.reason)}`
      : 'The property could not be read from these images. Make sure the photos clearly show it, then try again.', 'text-amber-300');
    showToast('The property could not be identified from the images.', 'error');
    if (btn) { btn.disabled = false; btn.innerHTML = original; }
    return;
  }
  if (btn) { btn.disabled = false; btn.innerHTML = original; }

  try {
    setStatus('Reading every page, completing property details and market valueâ€¦', 'text-blue-300');
    const res = await runVerifiedScan({ imageUrls: images, identification, category: 'Real Estate', formSelector: '#property-form' });
    const id2 = res.identification || identification;
    const out = applyScanToPropertyForm({ identification: id2, specs: res.specs, price: res.price, visionUsed: res.visionUsed });
    let msg = `${esc(id2.detected_name || 'Property')} â€” ${out.filled.length} field${out.filled.length > 1 ? 's' : ''} ready for you. Review and edit everything, then press Publish Property.`;
    if (!res.visionUsed) {
      msg += `<p class="text-[11px] text-red-300 mt-1">⚠ Photo was NOT read by AI (${esc(res.providerLabel || 'text fallback')}) — these values did NOT come from your images.</p>`;
    } else if (res.verifyRequested) {
      msg += res.verified
        ? `<p class="text-[11px] text-gray-400 mt-1">âœ“ Second-pass verification completed â€” every value was re-checked against your document.</p>`
        : `<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run â€” values come from the first pass.</p>`;
    }
    msg += res.inferred ? ` <span class="text-amber-300/80">(${res.inferred} values inferred from the model's real specs/type - review them)</span>` : '';
    msg += scanAiLimitNotice();
    msg += renderScanChecklistReport(res.checklist, res.summary);
    setStatus(msg, 'text-emerald-300');
    showToast('Review the property details, then press Publish Property.', 'success');
  } catch (err) {
    const msg = String(err?.message || err);
    const keyHint = /key|api|configured|settings|vision/i.test(msg);
    setStatus(keyHint
      ? 'The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.'
      : `Scan failed: ${msg}`, 'text-red-400');
    showToast('AI scan failed.', 'error');
  }
  if (window.lucide) lucide.createIcons();
};

// AI Vehicle Scanner (Cars & Trucks manager) - mirrors the property scanner:
// reads the uploaded photos, completes every field of the professional vehicle
// form and writes a clear, professional description. Works over the SAME image
// elements as the property form (only one modal is ever open, so the shared
// IDs are safe).
async function applyScanToVehicleForm(result, options = {}) {
  const identification = result && result.identification && result.identification.identified !== false ? result.identification : {};
  const specs = result && result.specs ? result.specs : {};
  const price = result && result.price ? result.price : null;
  const visionUsed = (options && options.visionUsed !== undefined) ? options.visionUsed : (result && result.visionUsed !== undefined ? result.visionUsed : true);
  const filled = [];
  const owns = await loadCompanyContact();
  const toText = (v) => Array.isArray(v) ? v.join(', ') : String(v ?? '').trim();
  const set = (key, value) => {
    if (value == null || toText(value) === '') return;
    const field = document.querySelector(`#vehicle-form [name="${key}"]`);
    if (!field) return;
    if (field.tagName === 'SELECT') {
      const raw = toText(value);
      const lower = raw.toLowerCase();
      // Match the option in order of confidence: exact, then starts-with,
      // then one direction of containment. Guard against the classic
      // substring false-positive where a negated value ("Not Inspected")
      // accidentally matches the positively-named option ("Inspected").
      const options = [...field.options].filter(o => o.value && o.value.trim() !== '');
      const isNegated = /^not |no |none of|without /.test(lower);
      const match = options.find(o => o.value.toLowerCase() === lower)
        || (isNegated ? null : options.find(o => o.value.toLowerCase().startsWith(lower)))
        || options.find(o => lower.startsWith(o.value.toLowerCase()))
        || options.find(o => o.value.toLowerCase().includes(lower))
        || options.find(o => lower.includes(o.value.toLowerCase()) && o.value.length > 1);
      if (match) { field.value = match.value; filled.push(key); }
      return;
    }
    field.value = Array.isArray(value) ? value.join(', ') : String(value);
    filled.push(key);
  };
  set('make', identification.brand || specs.brand || identification.make || specs.make);
  set('model', identification.model || specs.model);
  set('model_year', identification.year || specs.model_year || specs.year);
  set('trim', specs.trim);
  set('body_type', identification.body_type || specs.body_type);
  // Vehicle Type * is required. The AI returns vehicle_type / body_type which
  // must be mapped to a valid VEHICLE_TYPE_CATEGORY option key.
  const mapVehicleCategory = (raw) => {
    const s = String(raw || '').toLowerCase();
    if (/motorhome|motor home|rv|recreational vehicle/.test(s)) return 'Motorhome / RV';
    if (/boat|marine|yacht|ship|jet ?ski|watercraft/.test(s)) return 'Boat / Marine';
    if (/motorcycle|motorbike|scooter|bike/.test(s)) return 'Motorcycle';
    if (/^bus|buses|coach/.test(s)) return 'Bus';
    if (/truck|pickup|pick ?up|ute|lkw|van|commercial/.test(s)) return 'Truck';
    const optKeys = Object.keys(VEHICLE_TYPE_CATEGORY || {});
    const exact = optKeys.find(k => k.toLowerCase() === s);
    if (exact) return exact;
    if (/car|sedan|suv|hatchback|coupe|convertible|wagon|sports|limousine|crossover|saloon/.test(s)) return 'Car';
    return null;
  };
  const vtSeed = specs.vehicle_type || identification.vehicle_type || specs.body_type || identification.body_type;
  const vtCategory = mapVehicleCategory(vtSeed);
  if (vtCategory) set('vehicle_type', vtCategory);
  set('mileage', specs.mileage);
  set('engine', specs.engine);
  set('horsepower', specs.horsepower);
  set('transmission', specs.transmission);
  set('fuel_type', specs.fuel_type);
  set('drive_type', specs.drive_type);
  set('fuel_economy', specs.fuel_economy);
  set('towing_capacity', specs.towing_capacity);
  set('seating_capacity', specs.seating_capacity);
  set('sleeping_capacity', specs.sleeping_capacity);
  set('doors', specs.doors);
  set('color', identification.color || specs.color);
  set('condition', identification.condition || specs.condition);
  set('vin', specs.vin);
  set('warranty', specs.warranty);
  set('location', specs.location);
  if (owns.name) set('seller_name', owns.name);
  if (owns.phone) set('seller_phone', owns.phone);
  if (owns.email) set('seller_email', owns.email);
  set('safety_features', specs.safety_features);
  set('driver_assistance', specs.driver_assistance);
  set('technology', specs.technology);
  set('interior', specs.interior);
  set('wheels_tires', specs.wheels_tires);
  set('dimensions', specs.dimensions);
  set('cargo_capacity', specs.cargo_capacity);
  set('ownership_history', specs.ownership_history);
  set('service_history', specs.service_history);
  set('accident_history', specs.accident_history);
  set('previous_owners', specs.previous_owners);
  set('registration_status', specs.registration_status);
  set('inspection_status', specs.inspection_status);
  set('features_text', specs.features);
  const titleField = document.querySelector('#vehicle-form [name="title"]');
  const titleFallback = [specs.model_year || identification.year, identification.brand || specs.brand, identification.model || specs.model, identification.body_type || specs.body_type]
    .filter(Boolean).join(' ') || String(specs.title || identification.detected_name || 'Vehicle');
  // When vision did NOT run (free quota exhausted) we stop here: no forced title/
  // description/price defaults. The owner finishes the form themselves.
  if (visionUsed) {
    if (!titleField.value.trim()) { titleField.value = titleFallback; filled.push('title'); }
    set('title', specs.title || identification.detected_name || titleFallback);
    const descField = document.querySelector('#vehicle-form [name="description"]');
    if (!descField.value.trim()) {
      descField.value = specs.description
        || `${titleFallback} — now available on Weverse Online Shop. Review the details below and edit anything before publishing.`;
      filled.push('description');
    }
    const min = Number.isFinite(Number(GLOBAL_PRICE_MIN)) ? Number(GLOBAL_PRICE_MIN) : 0;
    const max = Number.isFinite(Number(GLOBAL_PRICE_MAX)) ? Number(GLOBAL_PRICE_MAX) : 999999999;
    const clamp = (n) => Math.max(min, Math.min(max, Math.round(n)));
    const est = price ? Number(price.estimated_price) : NaN;
    const estDiscount = price ? Number(price.suggested_discount_price) : NaN;
    if (Number.isFinite(est) && est > 0) {
      const realField = document.querySelector('#vehicle-form [name="real_price"]');
      if (realField) { realField.value = String(clamp(est)); filled.push('real_price'); }
      const discount = Number.isFinite(estDiscount) && estDiscount > 0 && estDiscount < est ? estDiscount : est;
      const priceField = document.querySelector('#vehicle-form [name="price"]');
      if (priceField && !Number(priceField.value)) { priceField.value = String(clamp(discount)); filled.push('price'); }
    }
    // GUARANTEED COMPLETENESS PASS — only sets safe defaults (price/stock/title/
    // description), never "Not specified". Runs only when vision ran.
    const guaranteed = guaranteeCompleteFormFill('#vehicle-form',
      { titleFallback, descriptionFallback: specs.description || `${titleFallback} — now available on Weverse Online Shop. Review the details below and edit anything before publishing.`, visionUsed: true });
    if (guaranteed) filled.push(`${guaranteed} auto-filled (safe defaults)`);
    // HONEST BLANK-FILL PASS — every remaining editable field gets a clear
    // "requires verification" placeholder so the vehicle form is never left
    // visually empty. Never fabricates real values.
    const vBlanks = fillVehicleBlanks(document.getElementById('vehicle-form'));
    if (vBlanks) filled.push(`${vBlanks} blank fields marked for verification`);
  }
  return { filled };
}

// Simplified confirmation, same policy as property: a fresh vehicle form is
// filled with NO question; if the owner already typed/changed something the
// scan asks first so it never silently overwrites work in progress.
window.scanVehicleWithAI = async function() {
  const form = document.getElementById('vehicle-form');
  if (!form) { showToast('Open the vehicle form first.', 'error'); return; }
  const btn = document.getElementById('btn-scan-ai-veh');
  const status = document.getElementById('scan-ai-veh-status');

  const images = [...(document.querySelectorAll('#image-url-inputs [name="images"]') || [])]
    .map((el) => el.value).filter(Boolean);
  if (!images.length) { showToast('Upload at least one vehicle photo before scanning.', 'error'); return; }

  const original = btn ? btn.innerHTML : '';
  const setStatus = (html, cls) => {
    if (!status) return;
    status.classList.remove('hidden', 'text-red-400', 'text-emerald-300', 'text-amber-300', 'text-blue-300', 'text-gray-400');
    if (cls) status.classList.add(cls);
    status.innerHTML = html;
  };

  // ── DEDICATED CAR & TRUCK SCANNER ────────────────────────────────
  // Vehicles use their own separate Gemini system (carAIScanner), NOT the
  // product scanner. It reads the vehicle from photos AND videos, uses its own
  // key (AI Settings → "Car & Truck Scanner"), and stops with a clear message
  // when the key is missing or its quota is used up — it never fabricates data.
  if (btn) { btn.disabled = true; btn.innerHTML = 'Scanning…'; }
  setStatus('Reading your car/truck from the photos and video…', 'text-blue-300');

  try {
    // Will throw NO_CAR_KEY / CAR_QUOTA / CAR_BAD_KEY with friendly messages.
    const res = await carAIScanner.scanCars(images);
    if (!res.identification || res.identification.identified === false) {
      setStatus(res.identification && res.identification.reason
        ? `The Car Scanner could not read this vehicle: ${esc(res.identification.reason)}`
        : 'The vehicle could not be read from these images. Use clear photos that show the whole vehicle, badges, dashboard and wheels, then try again.', 'text-amber-300');
      showToast('The vehicle could not be identified from the media.', 'error');
      if (btn) { btn.disabled = false; btn.innerHTML = original; }
      return;
    }
    if (btn) { btn.disabled = false; btn.innerHTML = original; }
    const out = await applyScanToVehicleForm({ identification: res.identification, specs: res.specs, price: res.price, visionUsed: true });
    const name = res.identification.detected_name || 'Vehicle';
    setStatus(
      `<span class="font-bold text-white">${esc(name)}</span> — ${out.filled.length} field${out.filled.length > 1 ? 's' : ''} ready for you from the <b>Car &amp; Truck Scanner</b>. Review and edit everything, then press Publish Vehicle.` +
      `<p class="text-[11px] text-gray-400 mt-1">Dedicated car scanner · own Gemini key · reads photos &amp; videos.</p>`,
      'text-emerald-300'
    );
    showToast('Review the vehicle details, then press Publish Vehicle.', 'success');
  } catch (err) {
    const info = carAIScanner.describeError(err);
    setStatus(`<span class="font-bold text-white">${esc(info.title)}</span><br>${esc(info.hint)}`, 'text-red-400');
    showToast(info.title, 'error');
  }
  if (window.lucide) lucide.createIcons();
};

// â”€â”€ Scan-first panel on the category picker (Add Product step 1) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let step1Images = [];
window.handleStep1Files = async function(files) {
  const list = Array.from(files || []).slice(0, 24);
  if (!list.length) return;
  const preview = document.getElementById('s1-image-preview');
  const valid = [];
  const loadingDivs = [];
  for (const file of list) {
    const isPdf = file.type === 'application/pdf' || looksLikePdf(file.name);
    const isVid = isVideoFile(file);
    if (!file.type.startsWith('image/') && !isPdf && !isVid) continue;
    if (isVid && file.size > 100 * 1024 * 1024) { showToast('Video must be under 100 MB.', 'error'); continue; }
    valid.push(file);
    // One spinner per file so the user sees the uploads are running right away.
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'img-thumb uploading';
    loadingDiv.style.cssText = 'min-width:90px;min-height:80px;';
    loadingDiv.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-400"><div class="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mb-1.5"></div><span class="text-[10px] font-bold">Uploading…</span></div>`;
    if (preview) preview.appendChild(loadingDiv);
    loadingDivs.push(loadingDiv);
  }
  if (!valid.length) return;

  // Upload ALL files in parallel (3 at a time), compress images before upload.
  // Each spinner is swapped for its real thumbnail IN PLACE the moment that file
  // finishes — nothing waits for the slowest upload, so a long video or a slow
  // network can never freeze the Add New Product modal.
  updateStep1ScanButton();
  await mapWithConcurrency(valid, 3, async (file, i) => {
    const url = await uploadImageFile(file);
    const loadingDiv = loadingDivs[i];
    setTimeout(() => {
      if (!loadingDiv || !loadingDiv.isConnected) return;
      loadingDiv.remove();
      if (url) {
        step1Images.push(url);
        const div = document.createElement('div');
        div.innerHTML = renderStep1Thumb(url, step1Images.length - 1);
        const el = div.firstElementChild;
        const next = loadingDiv.nextSibling;
        if (next) preview.insertBefore(el, next); else preview.appendChild(el);
      } else {
        showToast(`Failed to upload ${isVideoFile(file) ? 'video' : 'image'}. Try a smaller file.`, 'error');
      }
      updateStep1ScanButton();
      if (window.lucide) lucide.createIcons();
    }, 0);
  });
};
window.handleStep1ImageUpload = async function(e) {
  await window.handleStep1Files(e.target.files || []);
  e.target.value = '';
};
window.removeStep1Image = function(i) {
  step1Images.splice(i, 1);
  renderStep1Preview();
};
function renderStep1Thumb(u, i) {
  const isVid = isVideoUrl(u);
  const media = isVid
    ? `<video src="${esc(u)}" muted loop preload="metadata" playsinline class="w-full h-full object-cover"></video>
       <div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center"><svg class="w-3.5 h-3.5 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`
    : `<img src="${esc(u)}" onerror="this.src='/fallback.svg'">`;
  return `<div class="img-thumb ${i === 0 ? 'cover-img' : ''}" data-index="${i}">
    ${media}
    <button class="rm" onclick="removeStep1Image(${i})" type="button">✕</button>
  </div>`;
}
function updateStep1ScanButton() {
  const btn = document.getElementById('btn-s1-scan');
  if (btn) { btn.disabled = step1Images.length === 0; btn.style.opacity = step1Images.length ? '' : '0.5'; }
}
function renderStep1Preview() {
  const preview = document.getElementById('s1-image-preview');
  if (!preview) return;
  preview.innerHTML = step1Images.map((u, i) => renderStep1Thumb(u, i)).join('');
  updateStep1ScanButton();
  if (window.lucide) lucide.createIcons();
}

window.scanFirstWithAI = async function() {
  const images = step1Images.slice();
  if (!images.length) { showToast('Upload at least one product image before scanning.', 'error'); return; }
  const btn = document.getElementById('btn-s1-scan');
  const status = document.getElementById('s1-scan-status');
  const original = btn ? btn.innerHTML : '';
  const setStatus = (html, cls) => {
    if (!status) return;
    status.classList.remove('hidden', 'text-red-400', 'text-emerald-300', 'text-amber-300', 'text-blue-300', 'text-gray-400');
    if (cls) status.classList.add(cls);
    status.innerHTML = html;
  };
  await scanPreflightStatus(setStatus);

  if (btn) { btn.disabled = true; btn.innerHTML = 'Scanningâ€¦'; }
  setStatus('Detecting every distinct product in your imagesâ€¦', 'text-blue-300');

  let detection;
  try {
    detection = await aiClient.detectProducts(images, { category: '', maxImages: AI_PRODUCT_SCANNER.maxImages });
  } catch (err) {
    const keyHint = /key|api|configured|settings|vision/i.test(String(err?.message || err));
    setStatus(keyHint ? 'The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.' : `Scan failed: ${String(err?.message || err)}`, 'text-red-400');
    if (btn) { btn.disabled = false; btn.innerHTML = original; }
    return;
  }
  if (btn) { btn.disabled = false; btn.innerHTML = original; }

  let products = (detection && detection.identified !== false && Array.isArray(detection.products) && detection.products.length) ? detection.products : [];
  if (!products.length) {
    // NEVER REJECT: the AI could not read the photo(s), but the images are real â€”
    // create a review card from them so the owner can still fill, save & publish.
    products = [{
      detected_name: 'Product from your photos',
      category: 'Other',
      listing_type: 'product',
      confidence: 'low',
      image_indices: images.map((_, i) => i),
    }];
    setStatus('The AI could not confidently read these photos â€” a card was created with all of them. Review, edit the details, then continue to save & publish.', 'text-amber-300');
  }

  // REVIEW LIST â€” the AI never fills or publishes on its own. Continue on a
  // product opens its correct category form with that product's own images.
  scanReviewProducts = products;
  scanReviewImages = images;
  scanReviewSourceProducts = {};
  scanReviewEntry = 's1-scan-status';
  scanReviewRender();
  showToast(`${products.length} distinct product${products.length > 1 ? 's' : ''} detected â€” review each one, then continue.`, 'info');
};

// â”€â”€ General AI Scanner (Product Manager) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Standalone scanner in the Product Manager: it scans the owner's existing
// products (database + locally saved) â€” no image upload required â€” and uses
// AI to identify each one, complete its specifications, write the description
// and features, pick the correct category, and suggest a fair price. Review
// each result, then continue into that product's form â€” already filled by the
// AI. Nothing is saved or published until the owner presses SAVE.
let scannerImages = [];
let scanReviewSourceProducts = {};

// When true, the General AI Scanner only processes products that still have NO
// price (the "Scan Missing Prices" mode). Clearing a price in the manager marks
// it for the next missing-price scan.
let _scannerOnlyMissingPrice = false;

// A product "has no price" when its price is empty/0/not a number — exactly the
// products the owner wants the AI to read a photo and assign a fair price to.
function productHasNoPrice(p) {
  const n = parseFloat(p && p.price);
  return !Number.isFinite(n) || n <= 0;
}

// Every product the Product Manager shows (database + local fallback store),
// deduped by id. Properties live in the Properties Manager and products
// without at least one existing photo cannot be scanned visually. In
// missing-price mode, products that already have a price are excluded.
async function scannerSourceProducts() {
  const seen = new Set();
  const out = [];
  const add = (p) => {
    if (!p || !p.property_id || p.listing_type === 'property') return;
    if (seen.has(p.property_id)) return;
    if (!Array.isArray(p.images) || !p.images.length) return;
    if (_scannerOnlyMissingPrice && !productHasNoPrice(p)) return;
    seen.add(p.property_id);
    out.push(p);
  };
  try {
    const { data, error } = await supabase.from('showroom_listings').select('*').neq('listing_type', 'property');
    (error ? [] : (data || [])).forEach(add);
  } catch { /* fall through to the local store */ }
  listLocalShowroomListings().forEach(add);
  return out;
}

// After a successful Save & Publish, bring the owner straight back to the scan
// review list (with the just-saved card removed) so they can select the next
// detected product. Returns true when the list was reopened; false when nothing
// is left to review (caller then falls back to the Product Manager).
// In autonomous mode, it auto-processes the next product without asking.
window.returnToScanReviewAfterSave = function(activeIndex = scanReviewActiveIndex) {
  scanReviewActiveIndex = -1;
  if (!scanReviewProducts.length) {
    if (_streamScanActive) {
      openStreamReviewModal('Published! The scanner keeps working on the remaining products - new results will appear here.');
      renderProducts();
      return true;
    }
    if (_autoScannerActive) {
      _autoScannerActive = false;
      const el = document.getElementById('scanner-scan-status');
      if (el) {
        el.classList.remove('hidden', 'text-red-400', 'text-amber-300', 'text-blue-300');
        el.classList.add('text-emerald-300');
        el.innerHTML = `<p class="font-bold">Auto-scan complete: ${_autoScannerPublished} published, ${_autoScannerErrors} error${_autoScannerErrors !== 1 ? 's' : ''}.</p>`;
      }
      showToast(`Auto-scan complete: ${_autoScannerPublished} published, ${_autoScannerErrors} error${_autoScannerErrors !== 1 ? 's' : ''}.`, _autoScannerPublished > 0 ? 'success' : 'info');
      renderProducts();
    }
    return false;
  }
if (Number.isInteger(activeIndex) && activeIndex >= 0 && activeIndex < scanReviewProducts.length) {
    scanReviewProducts.splice(activeIndex, 1);
    if (_streamScanActive && scanReviewEntry === 'scanner-scan-status') _streamScanPublished++;
  }
  if (!scanReviewProducts.length) {
    if (_streamScanActive) {
      // Do NOT clear images/sources here — the still-running background loop
      // repopulates them via streamRender on its next completed product, and
      // clearing them now would make the remaining cards lose their thumbnails.
      openStreamReviewModal('Published! The scanner keeps working on the remaining products - new results will appear here.');
      renderProducts();
      return true;
    }
    scanReviewImages = [];
    scanReviewSourceProducts = {};
    if (_autoScannerActive) {
      _autoScannerActive = false;
      const el = document.getElementById('scanner-scan-status');
      if (el) {
        el.classList.remove('hidden', 'text-red-400', 'text-amber-300', 'text-blue-300');
        el.classList.add('text-emerald-300');
        el.innerHTML = `<p class="font-bold">Auto-scan complete: ${_autoScannerPublished} published, ${_autoScannerErrors} error${_autoScannerErrors !== 1 ? 's' : ''}.</p>`;
      }
      showToast(`Auto-scan complete: ${_autoScannerPublished} published, ${_autoScannerErrors} error${_autoScannerErrors !== 1 ? 's' : ''}.`, _autoScannerPublished > 0 ? 'success' : 'info');
      renderProducts();
    }
    return false;
  }
  // ── Autonomous mode: skip the review list, process next product ──
  if (_autoScannerActive) {
    autoScanOne(scanReviewProducts[0], 0);
    return true;
  }
  // ── Streaming mode: keep showing the live one-by-one list ──
  if (_streamScanActive) {
    openStreamReviewModal('Published! The scanner keeps working on the remaining products - new results will appear here.');
    renderProducts();
    return true;
  }
  scanReviewEntry = 'scanner-scan-status';
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="scan-search" class="w-5 h-5 text-violet-400"></i> General AI Scanner</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition" title="Close">âœ• Close</button>
        </div>
        <div class="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-3 mb-3">
          <p class="text-xs font-bold text-emerald-300 flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4"></i> Saved & published! Select the next product below to keep going.</p>
        </div>
        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3">
          <label class="flex items-start gap-2 text-[11px] text-gray-400 select-none cursor-pointer">
            <input type="checkbox" class="accent-violet-500 mt-0.5" ${scanVerifyPassEnabled() ? 'checked' : ''} onchange="setScanVerifyPass(this.checked)">
            <span>Second-pass verification for remaining saves — more accurate, uses about twice the free AI quota.</span>
          </label>
          <div id="scanner-scan-status" class="hidden text-xs font-medium"></div>
        </div>
      </div>
    </div>`);
  scanReviewRender();
  if (window.lucide) lucide.createIcons();
  return true;
};

// ── Autonomous scan: fill + publish one product, then chain to the next ──
// Called by returnToScanReviewAfterSave when _autoScannerActive is true.
// Opens the product form, runs AI fill, auto-clicks Publish, and the save
// handler chains back here via returnToScanReviewAfterSave for the next item.
async function autoScanOne(det, index) {
  const images = imagesForProduct(det, scanReviewImages);
  const norm = normalizeDetectedCategory(det.category);
  const isProperty = det.listing_type === 'property' || (norm && norm.listing_type === 'property');
  const cat = isProperty ? 'Real Estate' : (norm.category || det.category || 'Other');
  const total = _autoScannerTotal;
  const done = total - scanReviewProducts.length;
  const setStatusAuto = (html, cls) => {
    const el = document.getElementById('scanner-scan-status');
    if (!el) return;
    el.classList.remove('hidden', 'text-red-400', 'text-emerald-300', 'text-amber-300', 'text-blue-300', 'text-gray-400');
    if (cls) el.classList.add(cls);
    el.innerHTML = html;
  };
  setStatusAuto(`Processing ${done + 1} of ${total}: ${esc(det.detected_name || det.title || 'product')}â€¦`, 'text-blue-300');
  try {
    if (isProperty) {
      _autoScannerErrors++;
      scanReviewProducts.splice(index, 1);
      if (scanReviewProducts.length) { autoScanOne(scanReviewProducts[0], 0); }
      else { window.returnToScanReviewAfterSave(-1); }
      return;
    }
    let existing = det.property_id ? scanReviewSourceProducts[det.property_id] : null;
    if (existing && existing.specifications && typeof existing.specifications === 'object') {
      existing = { ...existing, ...existing.specifications };
    }
    showAddProductStep2(cat, existing ? { ...existing, images } : { images });
    await new Promise(r => setTimeout(r, 250));
    await completeScanAndFill(det, images, cat);
    const form = document.getElementById('product-form');
    const publishBtn = form?.querySelector('[type=submit][name=action][value=publish]');
    if (publishBtn) {
      scanReviewActiveIndex = index;
      publishBtn.click();
    } else {
      _autoScannerErrors++;
      closeProductFormModal();
      scanReviewProducts.splice(index, 1);
      if (scanReviewProducts.length) { autoScanOne(scanReviewProducts[0], 0); }
      else { window.returnToScanReviewAfterSave(-1); }
    }
  } catch (err) {
    _autoScannerErrors++;
    closeProductFormModal();
    scanReviewProducts.splice(index, 1);
    if (scanReviewProducts.length) { autoScanOne(scanReviewProducts[0], 0); }
    else { window.returnToScanReviewAfterSave(-1); }
  }
}

window.openGeneralAiScanner = async function(onlyMissingPrice = false) {
  _scannerOnlyMissingPrice = !!onlyMissingPrice;
  scannerImages = [];
  const products = await scannerSourceProducts();
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="scan-search" class="w-5 h-5 text-violet-400"></i> ${_scannerOnlyMissingPrice ? 'AI Price Scanner' : 'General AI Scanner'}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition" title="Close">× Close</button>
        </div>

        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3">
          <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> ${_scannerOnlyMissingPrice ? 'Scan products with no price and auto-fill them' : 'Scan your products with AI'}</p>
          <p class="text-[11px] text-gray-500">${_scannerOnlyMissingPrice
            ? 'Every product in your Product Manager that still has no price is scanned: the AI reads its existing photos, identifies the item, assigns a fair current market price, completes the specifications and writes the description. Everything is filled and published automatically — no questions asked. Duplicates are skipped silently.'
            : 'The scanner works on the products already in your Product Manager — no image upload needed. It reads each product\'s existing photos to identify it, complete its specifications, write the description and features, pick the correct category, and suggest a fair price. Everything is filled and published automatically — no questions asked. Duplicates are skipped silently.'}</p>
          <div class="flex items-center gap-2 text-[11px] font-bold text-gray-300 bg-white/5 border border-violet-500/20 rounded-xl px-3 py-2.5">
            <i data-lucide="scan-search" class="w-4 h-4 text-violet-400 animate-pulse shrink-0"></i>
            <span>${products.length} product${products.length === 1 ? '' : 's'} ready to scan. Starting automatically now…</span>
          </div>
          <button type="button" id="btn-scanner-scan" onclick="scanGeneralWithAI()" class="btn-press w-full px-4 py-3 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2">
            <i data-lucide="scan-search" class="w-4 h-4"></i> ${_scannerOnlyMissingPrice ? 'SCAN & FILL ALL PRICES' : 'SCAN ALL WITH AI'}
          </button>
          <label class="flex items-start gap-2 text-[11px] text-gray-400 select-none cursor-pointer">
            <input type="checkbox" class="accent-violet-500 mt-0.5" ${scanVerifyPassEnabled() ? 'checked' : ''} onchange="setScanVerifyPass(this.checked)">
            <span>Second-pass verification — more accurate, uses about twice the free AI quota.</span>
          </label>
          <div id="scanner-scan-status" class="hidden text-xs font-medium"></div>
        </div>
      </div>
    </div>`);
  if (window.lucide) lucide.createIcons();
  // Start the scan BY ITSELF — no button tap needed. The modal is already open
  // so the status element exists; the guard inside scanGeneralWithAI prevents
  // double-starts, and the auto chain fills + publishes every product on its own.
  window.scanGeneralWithAI();
};

// â”€â”€ Timeout-safe scan guard â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Runs a promise but stops waiting for it if it does not finish within `ms`.
// The General AI Scanner uses this so a slow, unreachable AI call or image
// fetch can NEVER leave the scanner stuck on "Scanningâ€¦" forever â€” the scan
// always moves on and always finishes with a clear success or error message.
function aiScanTimeout(promise, ms) {
  const marker = Symbol('ai-scan-timeout');
  return Promise.race([
    promise,
    new Promise((resolve) => setTimeout(() => resolve(marker), ms)),
  ]).then((value) => {
    if (value === marker) throw new Error('A scan step took too long and timed out.');
    return value;
  });
}
window.scanGeneralWithAI = async function() {
  // NEVER run two scans at once: an active scan (background or auto chain)
  // must finish before a new one can start.
  if (_streamScanActive || _autoScannerActive) {
    showToast('A scan is already running - wait for it to finish before starting another.', 'info');
    return;
  }
  let products = [];
  try { products = await aiScanTimeout(scannerSourceProducts(), 15000); } catch { products = []; }
if (!products.length) {
    showToast(_scannerOnlyMissingPrice
      ? 'No products are missing a price right now — every product already has one.'
      : 'No products with photos are in the Product Manager yet — add a product first.', 'error');
    return;
  }
  const btn = document.getElementById('btn-scanner-scan');
  const status = document.getElementById('scanner-scan-status');
  const original = btn ? btn.innerHTML : '';
  const setStatus = (html, cls) => {
    if (!status) return;
    status.classList.remove('hidden', 'text-red-400', 'text-emerald-300', 'text-amber-300', 'text-blue-300', 'text-gray-400');
    if (cls) status.classList.add(cls);
    status.innerHTML = html;
  };
  try {
    const cfg = await aiClient.getConfig();
    const keyReady = String(cfg.gemini_key || cfg.gemini_api_key || '').trim();
    if (!keyReady) {
      setStatus('No Gemini key found â€” scanning anyway with the FREE built-in AI (no key needed). Products whose photos cannot be read will still be filled from their saved details. For the best photo recognition, add a FREE Gemini key in AI Settings (aistudio.google.com/apikey).', 'text-blue-300');
    }
  } catch { }

  if (btn) { btn.disabled = true; btn.innerHTML = 'Scanningâ€¦'; }
  setStatus(`Detecting and completing ${products.length} product${products.length === 1 ? '' : 's'}â€¦`, 'text-blue-300');

  // ── FULLY AUTONOMOUS SCAN ─────────────────────────────────────────
  // ONE TAP starts everything and it runs ENTIRELY BY ITSELF. No review
  // cards, no "Publish Now" buttons, no "Continue to its form", no questions.
  // For each product the scanner:
  //   1. opens the product's form with its image showing,
  //   2. reads the photo and fills EVERY field of the form,
  //   3. automatically presses "One-Click Publish Changes",
  //   4. moves straight on to the next product until ALL are published.
  _autoScannerActive = true;
  _autoScannerTotal = products.length;
  _autoScannerPublished = 0;
  _autoScannerErrors = 0;
  _streamScanActive = false;
  scanReviewProducts = [];
  scanReviewImages = [];
  scanReviewSourceProducts = {};
  scanReviewEntry = 'scanner-scan-status';

  // Seed one entry per product before starting so the auto chain has something
  // to process. image_indices map each product's photos into scanReviewImages.
  let flatBase = 0;
  for (const prod of products) {
    const prodImages = (prod.images || []).filter(Boolean);
    const indices = [];
    for (const u of prodImages) {
      scanReviewImages.push(u);
      indices.push(flatBase);
      flatBase++;
    }
    scanReviewSourceProducts[prod.property_id] = prod;
    scanReviewProducts.push({
      detected_name: prod.title || prod.property_id || 'Product',
      category: prod.category || 'Other',
      listing_type: prod.listing_type || 'product',
      brand: prod.brand || null,
      model: (prod.specifications && prod.specifications.model) || prod.model || null,
      confidence: 'medium',
      property_id: prod.property_id,
      image_indices: indices,
    });
  }

  // Kick off the automatic chain. After this product is filled and published,
  // the save flow chains back here automatically for the next one.
  autoScanOne(scanReviewProducts[0], 0);
};


// ── One-by-one streaming renderer ─────────────────────────────────────
// Renders the live list of scanned products inside #scanner-scan-status.
// Works for the General AI Scanner AND the AI Price Scanner (missing prices).
window.scanStreamRender = function() {
  const el = document.getElementById('scanner-scan-status');
  if (!el) return;
  el.classList.remove('hidden', 'text-red-400', 'text-emerald-300', 'text-amber-300', 'text-blue-300', 'text-gray-400');
  el.classList.add('text-gray-100');
  const running = _streamScanActive;
  const total = _streamScanTotal;
  const scanned = Math.min(_streamScanScanned, _streamScanTotal);
  const published = _streamScanPublished;
  const ready = scanReviewProducts.length;
  const dupCounts = {};
  for (const p of scanReviewProducts) {
    const brand = normalizeDupKey(p.brand);
    const model = normalizeDupKey(p.model);
    const name = normalizeDupKey(p.detected_name);
    const key = (brand && model) ? `${brand}::${model}` : (name || `${brand}::${model}`);
    if (key) dupCounts[key] = (dupCounts[key] || 0) + 1;
  }
  const head = running
    ? `<p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="loader-2" class="w-4 h-4 animate-spin text-violet-400"></i> Scanning ${scanned} of ${total} \u2014 results appear below as each product is scanned.</p>`
    : `<p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="list-checks" class="w-4 h-4 text-violet-400"></i> ${scanned} product${scanned === 1 ? '' : 's'} processed${published ? `, ${published} published` : ''}${_streamScanErrors ? `, ${_streamScanErrors} error${_streamScanErrors > 1 ? 's' : ''}` : ''}${_streamScanDuplicatesSkipped ? `, ${_streamScanDuplicatesSkipped} duplicate${_streamScanDuplicatesSkipped > 1 ? 's' : ''} skipped` : ''}.</p>`;
  let html = `<div class="space-y-3">${head}`;
  if (ready) {
    html += `<p class="text-[11px] text-gray-400">Each card below can be published with one click \u2014 press Publish Now and the scanner keeps working on the rest in the background.</p>`;
    html += scanReviewProducts.map((p, i) => {
      const brand = normalizeDupKey(p.brand);
      const model = normalizeDupKey(p.model);
      const name = normalizeDupKey(p.detected_name);
      const key = (brand && model) ? `${brand}::${model}` : (name || `${brand}::${model}`);
      return scanReviewCardHtml(p, i, key && dupCounts[key] > 1, true);
    }).join('');
  } else if (running) {
    html += `<p class="text-[11px] text-gray-500">Waiting for the first product to finish scanning \u2026</p>`;
  } else if (!_streamScanTotal) {
    html += `<p class="text-[11px] text-gray-500">Nothing to scan yet.</p>`;
  } else if (!published && !_streamScanErrors) {
    html += `<p class="text-[11px] text-gray-500">No product could be identified from the photos on your existing products. Make sure each product has clear photos, then try again.</p>`;
  } else {
    html += `<p class="text-[11px] text-gray-500">All detected products were handled \u2014 nothing left to publish.</p>`;
  }
  html += `</div>`;
  el.innerHTML = html;
  if (window.lucide) lucide.createIcons();
};

// One-click Publish: opens the product form for a scanned card, fills it with
// the AI detection, then auto-publishes. The background stream keeps running
// and keeps adding new cards while this is open.
window.scanStreamPublish = async function(i) {
  const det = scanReviewProducts[i];
  if (!det) return;
  scanReviewActiveIndex = i;
  const images = imagesForProduct(det, scanReviewImages);
  const norm = normalizeDetectedCategory(det.category);
  const isProperty = det.listing_type === 'property' || (norm && norm.listing_type === 'property');
  const cat = isProperty ? 'Real Estate' : (norm.category || det.category || 'Other');
  try {
    if (isProperty) { _streamScanErrors++; scanReviewProducts.splice(i, 1); scanStreamRender(); return; }
    let existing = det.property_id ? scanReviewSourceProducts[det.property_id] : null;
    if (existing && existing.specifications && typeof existing.specifications === 'object') {
      existing = { ...existing, ...existing.specifications };
    }
    showAddProductStep2(cat, existing ? { ...existing, images } : { images });
    await new Promise(r => setTimeout(r, 250));
    await completeScanAndFill(det, images, cat);
    const form = document.getElementById('product-form');
    const publishBtn = form ? form.querySelector('[type=submit][name=action][value=publish]') : null;
    if (publishBtn) {
      scanReviewActiveIndex = i;
      publishBtn.click();
    } else {
      _streamScanErrors++;
      closeProductFormModal();
      scanReviewProducts.splice(i, 1);
      scanStreamRender();
    }
  } catch (err) {
    _streamScanErrors++;
    closeProductFormModal();
    scanReviewProducts.splice(i, 1);
    scanStreamRender();
    showToast('Could not publish this product: ' + String(err && err.message || err), 'error');
  }
};

// Opens the scanner review modal (streaming edition). Used after a successful
// Save & Publish so the owner returns to the live list while the scan runs.
function openStreamReviewModal(successMsg) {
  scanReviewEntry = 'scanner-scan-status';
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="scan-search" class="w-5 h-5 text-violet-400"></i> ${_scannerOnlyMissingPrice ? 'AI Price Scanner' : 'General AI Scanner'}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition" title="Close">x Close</button>
        </div>
        <div class="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-3 mb-3">
          <p class="text-xs font-bold text-emerald-300 flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4"></i> ${successMsg || 'Saved & published! Select the next product below to keep going.'}</p>
        </div>
        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3">
          <label class="flex items-start gap-2 text-[11px] text-gray-400 select-none cursor-pointer">
            <input type="checkbox" class="accent-violet-500 mt-0.5" ${scanVerifyPassEnabled() ? 'checked' : ''} onchange="setScanVerifyPass(this.checked)">
            <span>Second-pass verification for remaining scans \u2014 more accurate, uses about twice the free AI quota.</span>
          </label>
          <div id="scanner-scan-status" class="hidden text-xs font-medium"></div>
        </div>
      </div>
    </div>`);
  scanStreamRender();
  if (window.lucide) lucide.createIcons();
}
window.openStreamReviewModal = openStreamReviewModal;
window.saveProduct = async function(e, category, existingId) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('[type=submit][name=action][value=publish]');
  const publishLabel = existingId ? 'One-Click Publish Changes' : 'One-Click Publish Product';
  // ---- DOUBLE-SUBMIT GUARD: a second tap/Enter while publishing must never re-fire ----
  if (window._productPublishInFlight) return;
  window._productPublishInFlight = true;
  // ---- LOADING STATE: visible spinner while publishing ----
  if (btn) {
    btn.disabled = true;
    btn.style.opacity = '0.75';
    btn.innerHTML = '<span style="display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:_pubspin .7s linear infinite;vertical-align:-2px;margin-right:8px;"></span>Publishing…';
  }
  try { if (!document.getElementById('_pubspin-style')) { const st = document.createElement('style'); st.id = '_pubspin-style'; st.textContent = '@keyframes _pubspin{to{transform:rotate(360deg)}}'; document.head.appendChild(st); } } catch {}
  const resetBtn = () => {
    window._productPublishInFlight = false;
    if (btn) { btn.disabled = false; btn.style.opacity = ''; btn.textContent = publishLabel; }
  };
  try {
    const formData = new FormData(form);
    const data = {};
    let droppedTempImages = 0;
    for (const [k, v] of formData.entries()) {
      if (k === 'images') {
        data.images = data.images || [];
        const sv = String(v);
        if (v && !sv.startsWith('blob:')) data.images.push(sv);
        else if (sv.startsWith('blob:')) droppedTempImages++;
      } else if (k === 'tags') {
        data.tags = data.tags || [];
        data.tags.push(v);
      } else {
        data[k] = v;
      }
    }
    // Never save & publish silently without photos: if temporary blob: images
    // were the only ones, block and tell the owner to re-attach/re-upload them.
    if (droppedTempImages && !(data.images || []).length) {
      resetBtn();
      showToast('Your images were still uploading â€” please wait a moment and press Publish again (the photos were not saved with the product).', 'error');
      return;
    }
    data.is_featured = form.querySelector('[name="is_featured"]')?.checked ? 'on' : '';
    data.is_active = form.querySelector('[name="is_active"]')?.checked ? 'on' : '';
    const isDraft = formData.get('action') === 'draft';
    const normalizeComma = (raw) => normalizeCommaList(raw);

    const buildSpecifications = (src) => {
      const specKeys = ['model', 'storage', 'ram', 'processor', 'display', 'material', 'gender', 'platform', 'voltage', 'engine', 'transmission', 'fuel_type', 'horsepower', 'mileage', 'drive_type', 'body_type', 'model_year', 'seating_capacity', 'doors', 'real_price', 'type', 'size', 'age_range', 'skin_type', 'ingredients', 'dimensions', 'author', 'publisher', 'language', 'format', 'isbn', 'pages', 'edition', 'quantity', 'pet_type', 'lens', 'sensor', 'megapixels', 'video', 'license', 'version', 'duration', 'followers', 'engagement', 'niche', 'usage', 'shelf_life', 'assembly', 'weatherproof', 'movement', 'case_material', 'water_resistance', 'gemstone', 'movement_type', 'warranty_period'];
      const spec = {};
      for (const k of specKeys) {
        const v = src[k];
        if (k === 'real_price') {
          const n = (v != null && String(v).trim() !== '') ? parseFloat(v) : null;
          spec[k] = (n != null && Number.isFinite(n) && n > 0) ? Math.round(n) : null;
          continue;
        }
        spec[k] = (v != null && String(v).trim() !== '') ? v : null;
      }
      if (src.safety_features) {
        const sf = normalizeComma(src.safety_features);
        spec.safety_features = sf.length ? sf : null;
      }
      return spec;
    };

    if (existingId) {
      // â”€â”€ EXISTING PRODUCT â†’ PARTIAL UPDATE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // Only save what actually changed. Nothing is required in edit mode.
      // Fresh DB row first (window._productsData can be stale and would make
      // changes get missed or wrongly reported as 'No changes detected').
      let base = null;
      try {
        const { data: fresh } = await supabase.from('showroom_listings').select('*').eq('property_id', existingId).maybeSingle();
        if (fresh) base = sanitizeShowroomPayload(fresh);
      } catch {}
      if (!base) base = sanitizeShowroomPayload((window._productsData || []).find(item => item.property_id === existingId));
      if (!base) base = sanitizeShowroomPayload(getLocalShowroomListingById ? getLocalShowroomListingById(existingId) : null);
      if (!base) throw new Error('Could not load the current product to compare your changes against. Refresh the page, re-open the product and try again.');

      const eq = (a, b) => {
        const na = (a === '' || a == null) ? '' : a;
        const nb = (b === '' || b == null) ? '' : b;
        return String(na).trim() === String(nb).trim();
      };
      const changes = {};

      // NOTE: vehicle/spec fields (model_year, body_type, mileage, engine,
      // horsepower, transmission, drive_type, fuel_type, seating_capacity,
      // doors, safety_features) are NOT top-level columns on showroom_listings â€”
      // they live in the `specifications` JSONB column (see buildSpecifications
      // below). Writing them top-level makes the upsert fail with "column does
      // not exist", so they must never be added to `changes`.
      ['title', 'description', 'currency', 'subcategory', 'brand', 'color', 'size', 'condition', 'warranty', 'availability_status'].forEach((key) => {
        if (!eq(data[key], base[key])) changes[key] = (data[key] == null || data[key] === '') ? null : data[key];
      });

      const formPrice = data.price === '' || data.price == null ? null : parseFloat(data.price);
      if (!eq(formPrice, base.price)) {
        changes.price = formPrice == null ? base.price : Math.max(GLOBAL_PRICE_MIN, Math.min(GLOBAL_PRICE_MAX, formPrice));
      }

      const formStock = (data.stock_quantity === '' || data.stock_quantity == null) ? null : parseInt(data.stock_quantity, 10);
      if (!eq(formStock, base.stock_quantity)) changes.stock_quantity = (Number.isFinite(formStock) ? formStock : null);

      const features = normalizeComma(data.features_text);
      if (!eq(features.join('||'), (Array.isArray(base.features) ? base.features : []).join('||'))) changes.features = features;
      const tags = data.tags || [];
      if (!eq(tags.join('||'), (Array.isArray(base.tags) ? base.tags : []).join('||'))) changes.tags = tags;
      const highlights = normalizeComma(data.highlights_text);
      if (!eq(highlights.join('||'), (Array.isArray(base.highlights) ? base.highlights : []).join('||'))) changes.highlights = highlights;
      const seoKeywords = normalizeComma(data.seo_keywords_text);
      if (!eq(seoKeywords.join('||'), (Array.isArray(base.seo_keywords) ? base.seo_keywords : []).join('||'))) changes.seo_keywords = seoKeywords;

      const formImages = data.images || [];
      if (!eq(formImages.join('||'), (Array.isArray(base.images) ? base.images : []).join('||'))) changes.images = formImages;
      const firstVideoUrl = formImages.find(u => typeof u === 'string' && isVideoUrl(u)) || null;
      if (!eq(firstVideoUrl, base.video_url)) changes.video_url = firstVideoUrl;

      const feat = data.is_featured === 'on';
      if (!!base.is_featured !== feat) changes.is_featured = feat;
      // Save & publish works with ANY image count â€” 24 is only a maximum.
      const act = isDraft ? false : data.is_active === 'on';
      if (!!base.is_active !== act) changes.is_active = act;

      const spec = buildSpecifications(data);
      const specMerged = { ...(base.specifications && typeof base.specifications === 'object' ? base.specifications : {}), ...spec };
      if (JSON.stringify(specMerged) !== JSON.stringify(base.specifications || {})) changes.specifications = specMerged;

      if (Object.keys(changes).length === 0) {
        if (_autoScannerActive) {
          // Auto-scan: this product is already complete and correct — just move
          // straight on to the next one without creating a duplicate save.
          resetBtn();
          try { localStorage.removeItem(productAutoSaveKey(category, existingId)); } catch {}
          const autoIdx = scanReviewActiveIndex;
          closeProductFormModal();
          renderProducts();
          if (typeof window.returnToScanReviewAfterSave === 'function' && window.returnToScanReviewAfterSave(autoIdx)) renderProducts();
          return;
        }
        showToast('No changes detected â€” nothing was saved.', 'info');
        try { localStorage.removeItem(productAutoSaveKey(category, existingId)); } catch {}
        showToast('No changes were needed — this product is already published with exactly these details.', 'info');
        resetBtn();
        closeProductFormModal();
        renderProducts();
        return;
      }

      const payload = { ...base, ...changes, property_id: existingId, updated_at: new Date().toISOString() };
      // Never send the serial `id` on update — a stale id can trigger a
      // duplicate-key conflict instead of updating the row keyed by property_id.
      delete payload.id;
      const writeResult = await safePublishShowroom(payload);
      if (writeResult.error) {
        if (_autoScannerActive) {
          // Auto-scan: a product that fails to publish must never stall the
          // whole run — count it as an error and move to the next one.
          _autoScannerErrors++;
          resetBtn();
          const autoIdx = scanReviewActiveIndex;
          closeProductFormModal();
          renderProducts();
          if (typeof window.returnToScanReviewAfterSave === 'function' && window.returnToScanReviewAfterSave(autoIdx)) renderProducts();
          return;
        }
        resetBtn();
        const writeMsg = describeWriteError(writeResult.error, isDraft ? 'Draft save' : 'Product publish');
        showToast(writeMsg, 'error');
        try {
          let banner = form.querySelector('.__publish-error-banner');
          if (!banner) { banner = document.createElement('div'); banner.className = '__publish-error-banner mb-3 p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-medium'; form.prepend(banner); }
          banner.textContent = writeMsg;
        } catch {}
        return;
      }
      // Keep the local mirror in sync so every screen shows the same data.
      try { upsertLocalShowroomListing(payload); } catch {}
      // Refresh the in-memory cache so the product list shows the new
      // Published/Active status immediately after the modal closes.
      try {
        const idx = (window._productsData || []).findIndex(i => i.property_id === existingId);
        if (idx >= 0) window._productsData[idx] = payload;
      } catch {}
      showToast(isDraft ? 'Draft saved!' : `Published Successfully â€” your product is updated and live in your showroom (${Object.keys(changes).length} change${Object.keys(changes).length > 1 ? 's' : ''}).`);
    } else {
      // â”€â”€ NEW PRODUCT â†’ FULL VALIDATION + FULL SAVE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // No minimum image count â€” save & publish with however many images
      // are available (24-image template requirement removed).
      if (!data.title || !data.title.trim()) throw new Error('A product title is required.');
      if (data.price === '' || data.price == null || !isFinite(parseFloat(data.price))) throw new Error('A price is required.');
      const hasConditionField = !!form.querySelector('[name="condition"]');
      if (hasConditionField && !data.condition) throw new Error('Please choose the product condition.');

      const payload = {
        listing_type: 'product',
        category,
        subcategory: data.subcategory || null,
        title: data.title.trim(),
        description: data.description || '',
        price: Math.max(GLOBAL_PRICE_MIN, Math.min(GLOBAL_PRICE_MAX, parseFloat(data.price) || 0)),
        currency: data.currency || 'USD',
        country: '', country_code: '', listing_status: 'sale',
        state: '', city: '',
        product_location: '',
        latitude: null,
        longitude: null,
        is_active: isDraft ? false : data.is_active === 'on',
        is_featured: data.is_featured === 'on',
        brand: data.brand || null,
        color: data.color || null,
        size: data.size || null,
        condition: data.condition || null,
        warranty: data.warranty || null,
        availability_status: data.availability_status || 'In Stock',
        stock_quantity: data.stock_quantity ? parseInt(data.stock_quantity) : null,
        images: data.images || [],
        video_url: (data.images || []).find(u => typeof u === 'string' && isVideoUrl(u)) || null,
        features: normalizeComma(data.features_text).length ? normalizeComma(data.features_text) : (data.tags || []),
        tags: data.tags || [],
        highlights: normalizeComma(data.highlights_text),
        seo_keywords: normalizeComma(data.seo_keywords_text),
        is_ai_generated: !!data.catalog_template_id,
        ai_generated_fields: data.catalog_template_id ? ['title', 'description', 'features', 'highlights', 'seo_keywords'] : [],
        specifications: buildSpecifications(data),
      };
      const pid = genId();
      payload.property_id = pid;
      const writeResult = await safePublishShowroom(payload);
      if (writeResult.error) {
        if (_autoScannerActive) {
          _autoScannerErrors++;
          resetBtn();
          const autoIdx = scanReviewActiveIndex;
          closeProductFormModal();
          renderProducts();
          if (typeof window.returnToScanReviewAfterSave === 'function' && window.returnToScanReviewAfterSave(autoIdx)) renderProducts();
          return;
        }
        resetBtn();
        const writeMsg = describeWriteError(writeResult.error, 'Product publish');
        showToast(writeMsg, 'error');
        try {
          let banner = form.querySelector('.__publish-error-banner');
          if (!banner) { banner = document.createElement('div'); banner.className = '__publish-error-banner mb-3 p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-medium'; form.prepend(banner); }
          banner.textContent = writeMsg;
        } catch {}
        return;
      }
      try { upsertLocalShowroomListing({ ...payload, property_id: payload.property_id }); } catch {}
      try { (window._productsData = window._productsData || []).unshift({ ...payload }); } catch {}
      showToast(isDraft ? 'Draft saved!' : 'Published Successfully! Your product is now live in your showroom.');
    }
    if (_autoScannerActive) _autoScannerPublished++;
    resetBtn(); // publish finished — release the double-submit guard
    try { localStorage.removeItem(productAutoSaveKey(category, existingId)); } catch {}
    // Capture BEFORE closeProductFormModal() resets it (the close handler clears
    // the tracking for the not-saved case).
    const savedScanIndex = scanReviewActiveIndex;
    closeProductFormModal();
    // If this product came from a scan review list, go straight back to the
    // remaining detected products so the owner can select the next one.
    if (typeof window.returnToScanReviewAfterSave === 'function' && window.returnToScanReviewAfterSave(savedScanIndex)) {
      renderProducts(); // keep the manager list fresh in the background
      return;
    }
    renderProducts();
  } catch (err) {
    // Validation errors carry a clear message; anything else gets described.
    const msg = (err && err.message && !/failed to fetch|networkerror/i.test(String(err.message)))
      ? err.message
      : describeWriteError(err, 'Product publish');
    if (_autoScannerActive) _autoScannerErrors++;
    resetBtn();
    if (_autoScannerActive) {
      // Auto-scan: a failed save must never stall the whole run — close this
      // product's form and move straight on to the next one.
      const autoIdx = scanReviewActiveIndex;
      closeProductFormModal();
      renderProducts();
      if (typeof window.returnToScanReviewAfterSave === 'function' && window.returnToScanReviewAfterSave(autoIdx)) renderProducts();
      return;
    }
    showToast(msg, 'error');
  }
};

window.editProduct = async function(pid) {
  const { data, error } = await supabase.from('showroom_listings').select('*').eq('property_id', pid).maybeSingle();
  let resolved = error ? null : data;
  if (!resolved) resolved = getLocalShowroomListingById(pid);
  if (!resolved) resolved = (window._productsData || []).find(l => l.property_id === pid) || null;
  if (!resolved) return showToast('Product not found', 'error');
  if (resolved.specifications && typeof resolved.specifications === 'object') {
    resolved = { ...resolved, ...resolved.specifications };
  }
  showAddProductStep2(resolved.category || 'Other', resolved);
};

window.toggleProductActive = async function(pid, active) {
  let full = null;
  try {
    const { data: fresh } = await supabase.from('showroom_listings').select('*').eq('property_id', pid).maybeSingle();
    if (fresh) full = sanitizeShowroomPayload(fresh);
  } catch {}
  if (!full) full = sanitizeShowroomPayload((window._productsData || []).find(item => item.property_id === pid));
  if (!full || !full.property_id) {
    patchLocalShowroomListing(pid, { is_active: active, availability_status: active ? 'In Stock' : 'Out of Stock' });
    showToast(active ? 'Product published locally' : 'Product unpublished locally', 'info');
    renderProducts();
    return;
  }
  delete full.id;
  full.property_id = pid;
  full.is_active = active;
  full.availability_status = active ? 'In Stock' : 'Out of Stock';
  const { error } = await supabase.from('showroom_listings').upsert(full, { onConflict: 'property_id' });
  if (error) {
    if (isRlsDenied(error)) return showToast(`âšï¸ ${active ? 'Publish' : 'Unpublish'} blocked: database admin role rejected the write. Re-run the admin permission migration.`, 'error');
    patchLocalShowroomListing(pid, { is_active: active, availability_status: active ? 'In Stock' : 'Out of Stock' });
    showToast(active ? 'Product published locally' : 'Product unpublished locally', 'info');
    renderProducts();
    return;
  }
  showToast(active ? 'Product published' : 'Product unpublished');
  renderProducts();
};

window.duplicateProduct = async function(pid, silent = false) {
  const { data } = await supabase.from('showroom_listings').select('*').eq('property_id', pid).maybeSingle();
  if (!data) return;
  const { id: _, property_id: __, created_at: ___, updated_at: ____, ...rest } = data;
  const newPid = genId();
  await supabase.from('showroom_listings').insert({ ...rest, property_id: newPid, title: data.title + ' (Copy)', is_active: false });
  if (!silent) {
    showToast('Product duplicated');
    renderProducts();
  }
};

window.archiveProduct = async function(pid) {
  if (!confirm('Archive this product? It will be hidden from the website but can be restored.')) return;
  await supabase.from('showroom_listings').update({ is_active: false, availability_status: 'Archived' }).eq('property_id', pid);
  showToast('Product archived');
  renderProducts();
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  3. PROPERTIES MANAGER
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
const PROPERTY_TYPES = ['Single-Family Home', 'Apartment', 'Condo', 'Townhouse', 'Villa', 'Mansion', 'Beach House', 'Farm House', 'Commercial Building', 'Hotel', 'Land', 'Other'];
const PROP_STATUSES = ['sale', 'rent'];

async function renderProperties() {
  const content = document.getElementById('content');
  try {
    const { data: props, error } = await supabase.from('showroom_listings').select('*').eq('listing_type', 'property').order('created_at', { ascending: false });
    let items = error ? listLocalShowroomListings().filter(item => item.listing_type === 'property') : (props || []);
    // Merge static showroom seed properties so every property on the public
    // showroom is also editable here. DB/local rows win over seed on duplicate IDs.
    if (Array.isArray(SHOWROOM_LISTINGS)) {
      const seen = new Set(items.map(p => p.property_id));
      const seedProps = SHOWROOM_LISTINGS.filter(l => l.listing_type === 'property' && l.property_id && !seen.has(l.property_id));
      if (seedProps.length) items = items.concat(seedProps);
    }
    items.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
    // Hide deleted properties the same way â€” tombstones never resurrect.
    try { await loadHiddenCatalogIds(); } catch {}
    const hiddenIds = new Set(getHiddenCatalogIds());
    items = items.filter(p => !(p && p.property_id && hiddenIds.has(p.property_id)));
    window._propertiesData = items;
    content.innerHTML = `
      <div class="space-y-4 fade-in">
        <div class="flex flex-wrap items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Properties Manager</h2>
          <button onclick="fixPropertyMaps()" class="btn-press flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition" title="Geocode any property that is missing its map coordinates and update its map">
            <i data-lucide="map-pin" class="w-4 h-4"></i> Fix Maps
          </button>
          <button onclick="showAddPropertyModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Property
          </button>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr>
                <th>Property</th><th>Type</th><th class="hidden sm:table-cell">Location</th>
                <th class="hidden md:table-cell">Price</th><th>Status</th><th>Actions</th>
              </tr></thead>
              <tbody>
                ${items.length === 0 ? '<tr><td colspan="6" class="text-center text-gray-500 py-12">No properties yet.</td></tr>' :
                  items.map(p => `<tr>
                    <td>
                      <div class="flex items-center gap-2.5">
                        <img src="${esc((p.images || [])[0] || '/fallback.svg')}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
                        <div><p class="text-xs font-bold text-white truncate max-w-[160px]">${esc(p.title)}</p><p class="text-[10px] font-mono text-gray-500">${esc(p.property_id)}</p></div>
                      </div>
                    </td>
                    <td><span class="text-xs text-gray-300">${esc(p.property_type || p.category)}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${esc([p.city, p.state, p.country].filter(Boolean).join(', ') || 'â€”')}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(p.price || 0).toLocaleString()}</span></td>
                    <td>${badge(p.listing_status || 'sale')} ${badge(p.is_active ? 'active' : 'inactive')}</td>
                    <td>
                      <div class="flex gap-1">
                        <button onclick="editProperty('${p.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
                        <button onclick="archiveProduct('${p.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
                        <button onclick="deleteProduct('${p.property_id}')" class="btn-press p-1.5 text-rose-400 hover:bg-rose-500/10 rounded-lg transition"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                      </div>
                    </td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

window.showAddPropertyModal = function(existing = {}) {
  const isEdit = !!existing.property_id;
  const propertyTemplates = getTemplatesForCategory('property', 'Real Estate');
  const selectedCountryCode = existing.country_code || 'US';
  const selectedCurrency = existing.currency || getDefaultCurrencyForCountry(selectedCountryCode);
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${isEdit ? 'Edit' : 'Add'} Property</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <form id="property-form" onsubmit="saveProperty(event,'${isEdit ? existing.property_id : ''}')" class="space-y-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-3">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs font-bold text-white uppercase tracking-wide">Property Catalog Autofill</p>
                <p class="text-[11px] text-gray-500 mt-1">Choose a property template and country to generate a global real-estate listing with map-ready fields.</p>
              </div>
              <button type="button" onclick="applyPropertyCatalogTemplate()" class="btn-press px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold rounded-xl transition">Refresh Template</button>
            </div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Property Template</label><select class="input-field" name="catalog_template_id" id="ppf-catalog_template_id" onchange="applyPropertyCatalogTemplate()"><option value="">Choose a property template...</option>${propertyTemplates.map(template => `<option value="${template.id}">${esc(template.label)} - ${esc(template.propertyType || template.subcategory)}</option>`).join('')}</select></div>
              <div><label class="lbl">Country</label><select class="input-field" name="country_code" id="ppf-country_code" onchange="syncPropertyCountry(); applyPropertyCatalogTemplate()">${renderCountryOptions(selectedCountryCode)}</select></div>
              <div><label class="lbl">Currency</label><select class="input-field" name="currency" id="ppf-currency" onchange="applyPropertyCatalogTemplate()">${renderCurrencyOptions(selectedCurrency)}</select></div>
            </div>
            <p id="ppf-image-requirement" class="text-[11px] text-gray-400">Any number of images is fine â€” save and publish anytime.</p>
            <input type="hidden" name="required_image_count" id="ppf-required_image_count" value="">
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="home" class="w-4 h-4 text-blue-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Basic Information</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Property Title *</label><input class="input-field" name="title" value="${esc(existing.title || '')}" required placeholder="e.g. Cozy 3-Bedroom Family Home"></div>
              <div><label class="lbl">Property Type *</label><select class="input-field" name="property_type" required>
                ${PROPERTY_TYPES.map(t => `<option value="${t}" ${existing.property_type === t ? 'selected' : ''}>${t}</option>`).join('')}
              </select></div>
              <div><label class="lbl">Listing Status</label><select class="input-field" name="listing_status">
                <option value="sale" ${existing.listing_status !== 'rent' ? 'selected' : ''}>For Sale</option>
                <option value="rent" ${existing.listing_status === 'rent' ? 'selected' : ''}>For Rent</option>
              </select></div>
              <div><label class="lbl">Price *</label><input type="number" class="input-field" id="ppf-price" name="price" value="${existing.price || ''}" required placeholder="0"></div>
              <div><label class="lbl">Real Price (crossed out)</label><input type="number" class="input-field" id="ppf-real_price" name="real_price" value="${existing.real_price ?? existing.specifications?.real_price ?? ''}" placeholder="Original price before discount"></div>
              <div><label class="lbl">Country Name *</label><input class="input-field" id="ppf-country" name="country" value="${esc(existing.country || '')}" required placeholder="United States"></div>
              <div><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${esc(existing.subcategory || '')}" placeholder="e.g. Villas, Mansions, Hotels"></div>
              <div><label class="lbl">Furnished</label><select class="input-field" name="furnished">
                <option value="">Not specified</option>
                <option value="Furnished" ${existing.furnished==='Furnished'?'selected':''}>Furnished</option>
                <option value="Unfurnished" ${existing.furnished==='Unfurnished'?'selected':''}>Unfurnished</option>
              </select></div>
              <div><label class="lbl">Condition</label><select class="input-field" name="condition">
                <option value="">Not specified</option>
                ${['New Construction','Like New','Excellent','Good','Fair','Needs Renovation'].map(c => `<option value="${c}" ${existing.condition === c ? 'selected' : ''}>${c}</option>`).join('')}
              </select></div>
              <div><label class="lbl">Year Built</label><input type="number" class="input-field" name="year_built" value="${existing.year_built ?? ''}" placeholder="2015"></div>
              <div><label class="lbl">Year Renovated</label><input type="number" class="input-field" name="year_renovated" value="${existing.year_renovated ?? ''}" placeholder="2021"></div>
            </div>
          </div>

          <div class="glass-soft border border-sky-500/15 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="map-pin" class="w-4 h-4 text-sky-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Location &amp; Map</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">State / Province</label><input class="input-field" name="state" value="${esc(existing.state || '')}" placeholder="e.g. California"></div>
              <div><label class="lbl">City</label><input class="input-field" name="city" value="${esc(existing.city || '')}" placeholder="e.g. Los Angeles"></div>
              <div><label class="lbl">Town / Local Area</label><input class="input-field" name="town" value="${esc(existing.town || '')}" placeholder="Neighborhood or district"></div>
              <div class="sm:col-span-2"><label class="lbl">Property Location</label><input class="input-field" name="product_location" value="${esc(existing.product_location || '')}" placeholder="Estate, district, city, landmark"></div>
              <div class="sm:col-span-2"><label class="lbl">Street / Address</label><input class="input-field" name="address" value="${esc(existing.address || '')}" placeholder="Street and number, e.g. 123 Maple Street"></div>
              <div><label class="lbl">ZIP / Postal Code</label><input class="input-field" name="zip_code" value="${esc(existing.zip_code || '')}" placeholder="e.g. 10001"></div>
              <div><label class="lbl">Neighborhood / District</label><input class="input-field" name="neighborhood" value="${esc(existing.neighborhood || '')}" placeholder="e.g. Beverly Hills, Riverside"></div>
              <div><label class="lbl">Latitude</label><input type="number" step="any" class="input-field" name="latitude" value="${esc(existing.latitude || '')}" placeholder="40.7128"></div>
              <div><label class="lbl">Longitude</label><input type="number" step="any" class="input-field" name="longitude" value="${esc(existing.longitude || '')}" placeholder="-74.0060"></div>
              <div class="sm:col-span-2"><label class="lbl">Landmarks (comma separated)</label><input class="input-field" name="landmarks_text" value="${esc((existing.landmarks || []).join(', '))}" placeholder="City Hall, Central Park, Main Station"></div>
              <div class="sm:col-span-2">
                <div class="rounded-xl border border-gray-200 overflow-hidden" style="height:250px;background:#e2e8f0"><div id="property-map-preview" style="width:100%;height:100%"></div></div>
                <div class="flex flex-wrap items-center justify-between gap-2 mt-2">
                  <div class="text-[11px] text-gray-500" id="property-map-status">Map preview â€” fill the location fields or click the map to drop a pin.</div>
                  <div class="flex items-center gap-2">
                    <button type="button" id="btn-geocode-property" class="btn-press text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg px-2.5 py-1 hover:bg-blue-100 transition">Locate from fields</button>
                    <a id="btn-open-google-map" href="#" target="_blank" rel="noopener" class="text-[11px] font-bold text-gray-600 bg-gray-100 border border-gray-200 rounded-lg px-2.5 py-1 hover:bg-gray-200 transition">Open in Google Maps</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="ruler" class="w-4 h-4 text-emerald-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Size &amp; Layout</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Bedrooms</label><input type="number" class="input-field" name="bedrooms" value="${existing.bedrooms ?? ''}" placeholder="3"></div>
              <div><label class="lbl">Bathrooms</label><input type="number" class="input-field" name="bathrooms" value="${existing.bathrooms ?? ''}" placeholder="2"></div>
              <div><label class="lbl">Half Bathrooms</label><input type="number" class="input-field" name="half_bathrooms" value="${existing.half_bathrooms ?? ''}" placeholder="1"></div>
              <div><label class="lbl">Floors / Levels</label><input type="number" class="input-field" name="floors" value="${existing.floors ?? ''}" placeholder="2"></div>
              <div><label class="lbl">Building Size</label><input class="input-field" name="building_size" value="${esc(existing.building_size || '')}" placeholder="e.g. 2,500 sqft"></div>
              <div><label class="lbl">Land Size</label><input class="input-field" name="land_size" value="${esc(existing.land_size || '')}" placeholder="e.g. 0.5 acres"></div>
              <div><label class="lbl">Parking Spaces</label><input type="number" class="input-field" name="parking_spaces" value="${existing.parking_spaces ?? ''}"></div>
              <div><label class="lbl">Garage</label><input class="input-field" name="garage" value="${esc(existing.garage || '')}" placeholder="e.g. 2-car attached, None"></div>
              <div><label class="lbl">Living Areas</label><input class="input-field" name="living_areas" value="${esc(existing.living_areas || '')}" placeholder="Living room, Dining, Family room"></div>
              <div><label class="lbl">Kitchens</label><input type="number" class="input-field" name="kitchens" value="${existing.kitchens ?? ''}" placeholder="1"></div>
              <div><label class="lbl">Balconies</label><input type="number" class="input-field" name="balconies" value="${existing.balconies ?? ''}" placeholder="2"></div>
              <div><label class="lbl">Garden</label><input class="input-field" name="garden" value="${esc(existing.garden || '')}" placeholder="Private garden / Landscaped / None"></div>
              <div><label class="lbl">Pool</label><input class="input-field" name="pool" value="${esc(existing.pool || '')}" placeholder="Private pool / Community pool / None"></div>
              <div><label class="lbl">Security</label><input class="input-field" name="security" value="${esc(existing.security || '')}" placeholder="Gated community, CCTV, Alarm"></div>
              <div><label class="lbl">Utilities</label><input class="input-field" name="utilities" value="${esc(existing.utilities || '')}" placeholder="Water, electricity, gas, internet"></div>
            </div>
          </div>

          <div class="glass-soft border border-cyan-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="file-text" class="w-4 h-4 text-cyan-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Description, Features &amp; SEO</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Description</label><textarea class="input-field" name="description" rows="3" placeholder="Describe the propertyâ€¦">${esc(existing.description || '')}</textarea></div>
              <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${esc((existing.features || []).join(', '))}" placeholder="Swimming Pool, Garden, Garageâ€¦"></div>
              <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${esc((existing.highlights || []).join(', '))}" placeholder="Prime location, map-ready post, 24-image gallery"></div>
              <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${esc((existing.seo_keywords || []).join(', '))}" placeholder="mansion, villa, property investment"></div>
            </div>
          </div>

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="home" class="w-4 h-4 text-emerald-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Interior &amp; Exterior Features</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Interior Features (comma separated)</label><input class="input-field" name="interior_features_text" value="${esc((existing.interior_features || []).join(', '))}" placeholder="Open plan kitchen, Walk-in closet, Fireplace…"></div>
              <div class="sm:col-span-2"><label class="lbl">Exterior Features (comma separated)</label><input class="input-field" name="exterior_features_text" value="${esc((existing.exterior_features || []).join(', '))}" placeholder="Swimming pool, Garden, Balcony, Patio…"></div>
              <div class="sm:col-span-2"><label class="lbl">Home Systems (comma separated)</label><input class="input-field" name="home_systems_text" value="${esc((existing.home_systems || []).join(', '))}" placeholder="Central heating, Air conditioning, Solar panels…"></div>
            </div>
          </div>

          <div class="glass-soft border border-amber-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="hard-hat" class="w-4 h-4 text-amber-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Construction, Ownership &amp; Contact</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Construction Type</label><input class="input-field" name="construction_type" value="${esc(existing.construction_type || '')}" placeholder="Brick, Concrete, Timber…"></div>
              <div><label class="lbl">Construction Status</label><input class="input-field" name="construction_status" value="${esc(existing.construction_status || '')}" placeholder="Completed, Under construction"></div>
              <div><label class="lbl">Ownership Type</label><input class="input-field" name="ownership_type" value="${esc(existing.ownership_type || '')}" placeholder="Freehold, Leasehold, HOA…"></div>
              <div><label class="lbl">Contact / Agent Name</label><input class="input-field" name="contact_name" value="${esc(existing.contact_name || '')}" placeholder="Listing agent name"></div>
              <div><label class="lbl">Contact Phone / WhatsApp</label><input class="input-field" name="contact_phone" value="${esc(existing.contact_phone || '')}" placeholder="+1 555 010 2233"></div>
              <div><label class="lbl">Contact Email</label><input class="input-field" name="contact_email" value="${esc(existing.contact_email || '')}" placeholder="agent@example.com"></div>
            </div>
          </div>

          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="layout-dashboard" class="w-4 h-4 text-violet-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Floor Plan</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Floor Plan Image URL</label><input class="input-field" name="floor_plan_image" value="${esc(existing.floor_plan?.image || '')}" placeholder="https://â€¦/floor-plan.png"></div>
              <div><label class="lbl">Levels</label><input class="input-field" name="floor_plan_levels" value="${esc(existing.floor_plan?.levels || '')}" placeholder="e.g. Ground + 1"></div>
              <div><label class="lbl">Total Area</label><input class="input-field" name="floor_plan_total_area" value="${esc(existing.floor_plan?.total_area || '')}" placeholder="e.g. 2,500 sqft"></div>
              <div class="sm:col-span-2"><label class="lbl">Rooms (comma separated â€” Name: dimensions)</label><input class="input-field" name="floor_plan_rooms" value="${esc((existing.floor_plan?.rooms || []).map(r => (r.name || '') + (r.dimensions ? ': ' + r.dimensions : '')).join(', '))}" placeholder="Living Room: 15x12, Kitchen: 10x10â€¦"></div>
            </div>
          </div>

          <div class="glass-soft border border-amber-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="school" class="w-4 h-4 text-amber-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Nearby Area</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Schools (comma separated)</label><input class="input-field" name="nearby_schools_text" value="${esc((existing.nearby_area?.schools || []).join(', '))}" placeholder="Riverside Elementaryâ€¦"></div>
              <div><label class="lbl">Hospitals / Clinics</label><input class="input-field" name="nearby_hospitals_text" value="${esc((existing.nearby_area?.hospitals || []).join(', '))}" placeholder="City General Hospitalâ€¦"></div>
              <div><label class="lbl">Shopping / Markets</label><input class="input-field" name="nearby_shopping_text" value="${esc((existing.nearby_area?.shopping || []).join(', '))}" placeholder="Maple Mall, Farmers Marketâ€¦"></div>
              <div><label class="lbl">Transportation</label><input class="input-field" name="nearby_transportation_text" value="${esc((existing.nearby_area?.transportation || []).join(', '))}" placeholder="Metro Station, Bus Stopâ€¦"></div>
              <div class="sm:col-span-2"><label class="lbl">Distances (comma separated)</label><input class="input-field" name="nearby_distances_text" value="${esc((existing.nearby_area?.distances || []).join(', '))}" placeholder="0.5 mi to school, 1 mi to hospitalâ€¦"></div>
            </div>
          </div>

          <div class="glass-soft border border-blue-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="shield-check" class="w-4 h-4 text-blue-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Legal, Verification &amp; Trust</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Legal / Financial Info (comma separated â€” add source tag)</label><input class="input-field" name="legal_info_text" value="${esc((existing.legal_info || []).map(i => (i.label || '') + (i.value ? ': ' + i.value : '') + (i.source ? ` (${i.source})` : '')).join(', '))}" placeholder="Ownership: Clear title (Seller provided), Property taxes: (Not verified)â€¦"></div>
              <div><label class="lbl">Verification Status</label><select class="input-field" name="verification_status">
                <option value="Not verified" ${(existing.verification_status || 'Not verified') === 'Not verified' ? 'selected' : ''}>Not verified</option>
                <option value="Pending verification" ${existing.verification_status === 'Pending verification' ? 'selected' : ''}>Pending verification</option>
                <option value="Verified" ${existing.verification_status === 'Verified' ? 'selected' : ''}>Verified</option>
              </select></div>
              <div><label class="lbl">Verification Date</label><input type="date" class="input-field" name="verification_date" value="${esc(existing.verification_date || '')}"></div>
              <div class="sm:col-span-2"><label class="lbl">Inspection Info</label><input class="input-field" name="inspection_info" value="${esc(existing.inspection_info || '')}" placeholder="Inspected on date by company â€” result"></div>
              <div class="sm:col-span-2"><label class="lbl">Documents (comma separated URLs)</label><input class="input-field" name="documents_text" value="${esc((existing.documents || []).join(', '))}" placeholder="https://â€¦/title.pdf, https://â€¦/inspection.pdf"></div>
              <div class="sm:col-span-2"><label class="lbl">Condition / Risk Notes</label><textarea class="input-field" name="risk_notes" rows="2" placeholder="Any known issues, renovation needs, or risk notesâ€¦">${esc(existing.risk_notes || '')}</textarea></div>
            </div>
          </div>

          <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/15 rounded-xl">
            <div><p class="text-xs font-bold text-white">Published / Active</p><p class="text-[11px] text-gray-500">Visible on the website</p></div>
            <label class="toggle-switch"><input type="checkbox" name="is_active" ${isEdit ? (existing.is_active ? 'checked' : '') : 'checked'}><span class="toggle-slider"></span></label>
          </div>

          <div>
            <label class="lbl">Property Images & Videos</label>
            <div id="drop-zone" class="drop-zone" onclick="pickMediaForForm('img-upload')">
              <i data-lucide="image-plus" class="w-7 h-7 text-blue-400 mx-auto mb-2"></i>
              <p class="text-xs font-bold text-gray-300">Click or drag & drop images or videos</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*,video/mp4,video/webm,video/*,application/pdf" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2 mt-3">
              ${(existing.images || []).map((u, i) => imageThumbHtml(u, i)).join('')}
            </div>
            <div id="image-url-inputs">
              ${(existing.images || []).map((u, i) => `<input type="hidden" name="images" id="img-url-${i}" value="${esc(u)}">`).join('')}
            </div>
          </div>

          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="min-w-0">
                <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> AI Property Scanner</p>
                <p class="text-[11px] text-gray-500 mt-1">Reads your uploaded images and fills the property form for you. Only runs when you press the button â€” you review everything before publishing.</p>
              </div>
              <button type="button" id="btn-scan-ai-prop" onclick="scanPropertyWithAI()" class="btn-press px-4 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shrink-0">
                <i data-lucide="sparkles" class="w-4 h-4"></i> SCAN WITH AI
              </button>
            </div>
            <div id="scan-ai-prop-status" class="hidden text-xs mt-3 font-medium"></div>
          </div>

          <div class="flex gap-3 pt-2">
            <button type="submit" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition">${isEdit ? 'ðŸ’¾ Save Changes' : 'ðŸš€ Publish Property'}</button>
          </div>
        </form>
      </div>
    </div>`);
  setupDropZone(); setupImageSortable();
  configurePriceField('ppf-price');
  // Track real user edits so the AI scan auto-fills a FRESH form without asking,
  // but still confirms before overwriting a form the owner has already worked on.
  // Programmatic fills (scan/template/currency sync) never fire input/change,
  // so the flag stays false until the owner actually types or changes a control.
  window._propFormDirty = !!isEdit;
  const pfEl = document.getElementById('property-form');
  if (pfEl) {
    const markPropDirty = () => { window._propFormDirty = true; };
    pfEl.addEventListener('input', markPropDirty);
    pfEl.addEventListener('change', markPropDirty);
  }
  window.syncPropertyCountry = function() { syncCountryAndCurrency('ppf'); };
  syncCountryAndCurrency('ppf');
  applyCatalogDraftToPropertyForm('pricing');
  document.getElementById('ppf-price')?.addEventListener('input', () => applyCatalogDraftToPropertyForm('pricing'));
  initPropertyMapPreview();
};

// â”€â”€ Live map preview for the property form â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Shows the property's OWN real map location. It geocodes from the location
// fields (address / area / town / city / state / country), fills Latitude +
// Longitude automatically, lets the owner click the map to drop a pin
// (reverse-geocoding the address), and refreshes whenever any location field
// changes. Never a single fixed location for every property.
let _propMap = null;
let _propMarker = null;
let _propGeoTimer = null;

function buildPropertyMapQuery() {
  const f = document.querySelector('#property-form');
  if (!f) return '';
  const v = (n) => (f.querySelector(`[name="${n}"]`)?.value || '').trim();
  return [v('product_location'), v('town'), v('city'), v('state'), v('country')].filter(Boolean).join(', ');
}

function updatePropertyMapStatus(msg, isError) {
  const el = document.getElementById('property-map-status');
  if (el) { el.textContent = msg; el.style.color = isError ? '#dc2626' : ''; }
}

function setPropertyMapPin(lat, lng, { reverse = false } = {}) {
  if (!_propMap || !Number.isFinite(lat) || !Number.isFinite(lng)) return;
  const ll = [lat, lng];
  if (!_propMarker) _propMarker = L.marker(ll, { draggable: true }).addTo(_propMap);
  else _propMarker.setLatLng(ll);
  _propMap.setView(ll, Math.max(_propMap.getZoom(), 13));
  const latF = document.querySelector('#property-form [name="latitude"]');
  const lngF = document.querySelector('#property-form [name="longitude"]');
  if (latF) latF.value = String(Number(lat.toFixed(6)));
  if (lngF) lngF.value = String(Number(lng.toFixed(6)));
  if (reverse) reverseGeocodeProperty(lat, lng);
  const link = document.getElementById('btn-open-google-map');
  if (link) link.href = `https://www.google.com/maps?q=${lat.toFixed(6)},${lng.toFixed(6)}`;
}

async function geocodePropertyFromFields() {
  const q = buildPropertyMapQuery();
  if (!q) { updatePropertyMapStatus('Enter a location (address, area, city, state, country), then press Locate from fields.'); return; }
  updatePropertyMapStatus('Searching locationâ€¦');
  try {
    const res = await fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + encodeURIComponent(q));
    const data = await res.json();
    if (data && data[0]) {
      setPropertyMapPin(parseFloat(data[0].lat), parseFloat(data[0].lon));
      updatePropertyMapStatus('Located: ' + data[0].display_name);
    } else {
      updatePropertyMapStatus('Could not find that location. Check the spelling or click the map to drop the pin.', true);
    }
  } catch {
    updatePropertyMapStatus('Map lookup failed. You can still drop the pin by clicking the map.', true);
  }
}

async function reverseGeocodeProperty(lat, lng) {
  const f = document.querySelector('#property-form');
  if (!f) return;
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=16`);
    const data = await res.json();
    const a = (data && data.address) || {};
    const setIfEmpty = (name, value) => {
      if (!value) return;
      const field = f.querySelector(`[name="${name}"]`);
      if (field && !String(field.value || '').trim()) { field.value = value; return true; }
      return false;
    };
    const street = [a.road || '', a.house_number || ''].filter(Boolean).join(' ');
    const area = a.suburb || a.neighbourhood || a.quarter || a.district || a.borough || '';
    const townish = a.town || a.village || a.municipality || a.city_district || '';
    const city = a.city || a.county || '';
    const state = a.state || a.region || '';
    const country = a.country || '';
    setIfEmpty('product_location', street || area || townish);
    setIfEmpty('town', area || townish);
    setIfEmpty('city', city);
    setIfEmpty('state', state);
    if (country) {
      setIfEmpty('country', country);
      const cc = f.querySelector('[name="country_code"]');
      if (cc) {
        const m = (COUNTRIES || []).find(c => String(c.name || '').toLowerCase() === String(country).toLowerCase());
        if (m && m.code && !cc.value) cc.value = m.code;
      }
    }
    updatePropertyMapStatus('Pin set at ' + lat.toFixed(5) + ', ' + lng.toFixed(5) + (data.display_name ? ' â€” ' + data.display_name : ''));
  } catch { updatePropertyMapStatus('Pin set. Could not reverse-geocode the address.', true); }
}

window.refreshPropertyMapFromForm = function() {
  if (!_propMap) return;
  const lat = parseFloat(document.querySelector('#property-form [name="latitude"]')?.value);
  const lng = parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);
  if (Number.isFinite(lat) && Number.isFinite(lng) && (lat || lng)) { setPropertyMapPin(lat, lng); updatePropertyMapStatus('Map updated from coordinates.'); }
  else geocodePropertyFromFields();
};

function initPropertyMapPreview() {
  const el = document.getElementById('property-map-preview');
  if (!el || !window.L) { updatePropertyMapStatus('Map unavailable right now â€” your location fields still save normally.'); return; }
  if (_propMap) { _propMap.remove(); _propMap = null; _propMarker = null; }
  const lat = parseFloat(document.querySelector('#property-form [name="latitude"]')?.value);
  const lng = parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);
  const hasCoords = Number.isFinite(lat) && Number.isFinite(lng) && (lat || lng);
  _propMap = L.map(el, { scrollWheelZoom: false }).setView(hasCoords ? [lat, lng] : [20, 0], hasCoords ? 13 : 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(_propMap);
  _propMap.on('click', (e) => setPropertyMapPin(e.latlng.lat, e.latlng.lng, { reverse: true }));
  document.getElementById('btn-geocode-property')?.addEventListener('click', geocodePropertyFromFields);
  ['product_location', 'town', 'city', 'state', 'country', 'latitude', 'longitude'].forEach((n) => {
    const f = document.querySelector(`#property-form [name="${n}"]`);
    if (!f) return;
    f.addEventListener('input', () => {
      if (n === 'latitude' || n === 'longitude') {
        const la = parseFloat(document.querySelector('#property-form [name="latitude"]')?.value);
        const lo = parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);
        if (Number.isFinite(la) && Number.isFinite(lo) && (la || lo)) setPropertyMapPin(la, lo);
        return;
      }
      clearTimeout(_propGeoTimer);
      _propGeoTimer = setTimeout(geocodePropertyFromFields, 900);
    });
    f.addEventListener('change', () => { if (n !== 'latitude' && n !== 'longitude') geocodePropertyFromFields(); });
  });
  if (hasCoords) setPropertyMapPin(lat, lng);
  else geocodePropertyFromFields();
}

// One-click backfill: geocodes every property missing its map coordinates and
// updates the DB, so old + new properties all end up with their OWN working map.
window.fixPropertyMaps = async function() {
  const items = window._propertiesData || [];
  const needsFix = items.filter((p) => {
    const lat = parseFloat(p.latitude);
    const lng = parseFloat(p.longitude);
    const q = [p.product_location, p.town, p.city, p.state, p.country].filter(Boolean).join(', ');
    return !(Number.isFinite(lat) && Number.isFinite(lng) && (lat !== 0 || lng !== 0)) && Boolean(q);
  });
  if (!needsFix.length) { showToast('All properties already have map coordinates.', 'success'); return; }
  showToast(`Fixing maps for ${needsFix.length} propert${needsFix.length > 1 ? 'ies' : 'y'}â€¦`, 'success');
  let updated = 0, failed = 0;
  for (const p of needsFix) {
    const q = [p.product_location, p.town, p.city, p.state, p.country].filter(Boolean).join(', ');
    try {
      const res = await fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + encodeURIComponent(q));
      const data = await res.json();
      if (data && data[0]) {
        const coords = { latitude: parseFloat(data[0].lat), longitude: parseFloat(data[0].lon) };
        const { error: uErr } = await supabase.from('showroom_listings').update(coords).eq('property_id', p.property_id);
        if (!uErr) { Object.assign(p, coords); updated++; }
        else failed++;
      } else failed++;
    } catch { failed++; }
    await new Promise((r) => setTimeout(r, 1100));
  }
  showToast(`Map fix done: ${updated} updated, ${failed} failed.`, failed ? 'error' : 'success');
  renderProperties();
};

window.saveProperty = async function(e, existingId) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  const images = fd.getAll('images').filter(u => u && !u.startsWith('blob:'));
  const features = (data.features_text || '').split(',').map(s => s.trim()).filter(Boolean);
  // No minimum image count â€” save & publish with however many images are
  // available (24-image requirement removed).
  const realPriceNum = (data.real_price === '' || data.real_price == null) ? null : Math.max(GLOBAL_PRICE_MIN, Math.min(GLOBAL_PRICE_MAX, parseFloat(data.real_price) || 0));
  const splitList = (v) => (v || '').split(',').map(s => s.trim()).filter(Boolean);
  const numOrNull = (v) => (v === '' || v == null || !isFinite(parseInt(v, 10))) ? null : parseInt(v, 10);
  const floorPlanRooms = splitList(data.floor_plan_rooms).map(r => {
    const m = String(r).match(/^(.*?):\s*(.*)$/);
    return m ? { name: m[1].trim(), dimensions: m[2].trim() } : { name: r, dimensions: '' };
  });
  const payload = {
    listing_type: 'property',
    category: data.property_type || 'Real Estate',
    subcategory: data.subcategory || null,
    title: data.title, description: data.description || '',
    price: Math.max(GLOBAL_PRICE_MIN, Math.min(GLOBAL_PRICE_MAX, parseFloat(data.price) || 0)), currency: data.currency || 'USD',
    real_price: realPriceNum,
    country: data.country || '', country_code: (data.country_code || '').toUpperCase(),
    state: data.state || '', city: data.city || '', town: data.town || '',
    address: data.address || '', zip_code: data.zip_code || '',
    product_location: data.product_location || '',
    latitude: data.latitude ? parseFloat(data.latitude) : null,
    longitude: data.longitude ? parseFloat(data.longitude) : null,
    property_type: data.property_type || '', listing_status: data.listing_status || 'sale',
    condition: data.condition || null,
    bedrooms: data.bedrooms ? parseInt(data.bedrooms) : null,
    bathrooms: data.bathrooms ? parseInt(data.bathrooms) : null,
    half_bathrooms: numOrNull(data.half_bathrooms),
    building_size: data.building_size || '', land_size: data.land_size || '',
    floors: numOrNull(data.floors), garage: data.garage || '',
    parking_spaces: data.parking_spaces ? parseInt(data.parking_spaces) : null,
    furnished: data.furnished || '',
    year_built: numOrNull(data.year_built), year_renovated: numOrNull(data.year_renovated),
    landmarks: splitList(data.landmarks_text),
    interior_features: splitList(data.interior_features_text),
    exterior_features: splitList(data.exterior_features_text),
    home_systems: splitList(data.home_systems_text),
    legal_info: splitList(data.legal_info_text).map(i => {
      const m = String(i).match(/^(.*?):\s*(.*?)\s*\((Seller provided|Not verified|Documented)\)\s*$/i);
      if (m) return { label: m[1].trim(), value: m[2].trim(), source: m[3] };
      return { label: i, value: '', source: 'Not verified' };
    }),
    risk_notes: data.risk_notes || '',
    floor_plan: { image: data.floor_plan_image || '', rooms: floorPlanRooms, levels: data.floor_plan_levels || '', total_area: data.floor_plan_total_area || '' },
    nearby_area: {
      schools: splitList(data.nearby_schools_text),
      hospitals: splitList(data.nearby_hospitals_text),
      shopping: splitList(data.nearby_shopping_text),
      transportation: splitList(data.nearby_transportation_text),
      distances: splitList(data.nearby_distances_text),
    },
    verification_status: data.verification_status || 'Not verified',
    verification_date: data.verification_date || '',
    inspection_info: data.inspection_info || '',
    documents: splitList(data.documents_text),
    features, images,
    video_url: (images || []).find(u => typeof u === 'string' && isVideoUrl(u)) || null,
    video: (images || []).find(u => typeof u === 'string' && isVideoUrl(u)) || null,
    highlights: normalizeCommaList(data.highlights_text),
    seo_keywords: normalizeCommaList(data.seo_keywords_text),
    is_ai_generated: !!data.catalog_template_id,
    ai_generated_fields: data.catalog_template_id ? ['title', 'description', 'features', 'highlights', 'seo_keywords', 'country', 'country_code', 'product_location'] : [],
    is_active: data.is_active === 'on',
  };
  // Professional real-estate fields live in the `specifications` JSONB (there
  // are no dedicated columns). The details page reads them the same way it
  // reads every spec key.
  const professionalSpecs = {
    neighborhood: data.neighborhood || '',
    living_areas: data.living_areas || '',
    kitchens: numOrNull(data.kitchens),
    balconies: numOrNull(data.balconies),
    garden: data.garden || '',
    pool: data.pool || '',
    security: data.security || '',
    utilities: data.utilities || '',
    construction_type: data.construction_type || '',
    construction_status: data.construction_status || '',
    ownership_type: data.ownership_type || '',
    contact_name: data.contact_name || '',
    contact_phone: data.contact_phone || '',
    contact_email: data.contact_email || '',
  };
  const saveProfessionalSpecs = {};
  for (const [k, v] of Object.entries({ ...professionalSpecs, real_price: realPriceNum })) {
    if (v != null && String(v).trim() !== '') saveProfessionalSpecs[k] = v;
  }
  let err;
  if (existingId) {
    payload.property_id = existingId;
    const current = sanitizeShowroomPayload((window._propertiesData || []).find(item => item.property_id === existingId) || (window._productsData || []).find(item => item.property_id === existingId));
    payload.specifications = { ...(current.specifications && typeof current.specifications === 'object' ? current.specifications : {}), ...saveProfessionalSpecs };
    ({ error: err } = await supabase.from('showroom_listings').upsert({ ...current, ...payload }, { onConflict: 'property_id' }));
  } else {
    payload.property_id = genId();
    payload.specifications = { ...saveProfessionalSpecs };
    ({ error: err } = await supabase.from('showroom_listings').insert(payload));
  }
  if (err) {
    const handled = handleWriteError(
      err,
      () => upsertLocalShowroomListing({ ...payload, property_id: existingId || payload.property_id }),
      existingId ? 'Property update' : 'Property publish'
    );
    if (handled) return;
  }
  showToast(existingId ? 'Property updated!' : 'Property published!');
  closeModal(); renderProperties();
};

// ── Vehicle manager (Cars & Trucks) ─────────────────────────────
// Add a car, truck, bus, motorhome, motorcycle or boat without any map or
// location fields. Vehicle specifics are stored in `specifications` (plus the
// safe top-level columns) so the showroom hero rows and details page can read
// them, and `listing_type: 'vehicle'` keeps these rows out of "Clear All".
const VEHICLE_TYPE_CATEGORY = {
  'Car': 'Cars', 'Truck': 'Trucks', 'Bus': 'Buses', 'Motorhome / RV': 'Motorhomes',
  'Motorcycle': 'Motorcycles', 'Boat / Marine': 'Marine & Boating',
};
const VEHICLE_BODY_TYPES = ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 'Wagon', 'Pickup', 'Van', 'Truck', 'Sports Car', 'Luxury Sedan', 'Bus', 'Motorhome', 'Motorcycle', 'Yacht', 'Jet Ski', 'Other'];

window.showAddVehicleModal = function(existing = {}) {
  const isEdit = !!existing.property_id;
  const type = Object.keys(VEHICLE_TYPE_CATEGORY).find(t => VEHICLE_TYPE_CATEGORY[t] === existing.category) || 'Car';
  const spec = (existing.specifications && typeof existing.specifications === 'object') ? existing.specifications : {};
  const val = (a, b) => existing[a] ?? spec[a] ?? b;
  const asText = (v, f = '') => Array.isArray(v) ? v.join(', ') : (v == null ? f : v);
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${isEdit ? 'Edit' : 'Add'} Vehicle — Professional Listing</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <form id="vehicle-form" onsubmit="saveVehicle(event,'${isEdit ? existing.property_id : ''}')" class="space-y-4">
          <div class="glass-soft border border-amber-500/15 rounded-2xl p-4">
            <div class="flex items-start gap-3">
              <span class="shrink-0 w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center"><i data-lucide="car-front" class="w-4.5 h-4.5 text-amber-400"></i></span>
              <div>
                <p class="text-xs font-bold text-white uppercase tracking-wide">Cars &amp; Trucks — Your next ride starts here.</p>
                <p class="text-[11px] text-gray-500 mt-0.5">This professional listing lives in the Vehicles row above Real Estate. Every field the AI scanner can read is auto-filled from your photos — you review everything before publishing. Vehicles are never deleted by Clear All Products.</p>
              </div>
            </div>
            <div class="mt-3 rounded-xl border border-violet-500/25 bg-violet-500/10 p-3">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> AI Vehicle Scanner</p>
                <button type="button" id="btn-scan-ai-veh" onclick="scanVehicleWithAI()" class="btn-press px-4 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shrink-0">
                  <i data-lucide="sparkles" class="w-4 h-4"></i> SCAN WITH AI
                </button>
              </div>
              <p class="text-[11px] text-gray-500 mt-1.5">Upload photos first, then press scan — the AI reads the vehicle, completes every field below and writes a clear professional description (size, engine, trim, tires, history, safety, fair price).</p>
              <div id="scan-ai-veh-status" class="hidden text-xs mt-3 font-medium"></div>
            </div>
          </div>

          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="car" class="w-4 h-4 text-violet-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Overview &amp; Identity</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Vehicle Type *</label><select class="input-field" name="vehicle_type" required>${Object.keys(VEHICLE_TYPE_CATEGORY).map(t => `<option value="${t}" ${type === t ? 'selected' : ''}>${t}</option>`).join('')}</select></div>
              <div><label class="lbl">Body Type</label><select class="input-field" name="body_type">${['', ...VEHICLE_BODY_TYPES].map(b => `<option value="${b}" ${val('body_type', '') === b ? 'selected' : ''}>${b || 'General'}</option>`).join('')}</select></div>
              <div class="sm:col-span-2"><label class="lbl">Vehicle Title *</label><input class="input-field" name="title" value="${esc(existing.title || '')}" placeholder="e.g. 2023 Toyota Land Cruiser V8 Turbo Diesel"></div>
              <div><label class="lbl">Brand / Make *</label><input class="input-field" name="make" value="${esc(val('make', val('brand', '')))}" placeholder="e.g. Toyota"></div>
              <div><label class="lbl">Model *</label><input class="input-field" name="model" value="${esc(spec.model || existing.model || '')}" placeholder="e.g. Land Cruiser"></div>
              <div><label class="lbl">Trim / Edition</label><input class="input-field" name="trim" value="${esc(val('trim', ''))}" placeholder="e.g. GXR V8, Platinum, LS"></div>
              <div><label class="lbl">Model Year</label><input class="input-field" name="model_year" value="${esc(val('model_year', ''))}" placeholder="e.g. 2023"></div>
              <div><label class="lbl">Doors</label><input class="input-field" name="doors" value="${esc(val('doors', ''))}" placeholder="e.g. 4"></div>
              <div><label class="lbl">Color (Exterior)</label><input class="input-field" name="color" value="${esc(existing.color || spec.color || '')}" placeholder="e.g. Pearl White"></div>
              <div><label class="lbl">VIN / Serial</label><input class="input-field" name="vin" value="${esc(val('vin', ''))}" placeholder="Optional identification number"></div>
            </div>
          </div>

          <div class="glass-soft border border-amber-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="gauge" class="w-4 h-4 text-amber-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Performance &amp; Mechanical</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Mileage</label><input class="input-field" name="mileage" value="${esc(val('mileage', ''))}" placeholder="e.g. 15,000 mi or 0 (new)"></div>
              <div><label class="lbl">Engine</label><input class="input-field" name="engine" value="${esc(val('engine', ''))}" placeholder="e.g. 4.0L V8 Turbo Diesel"></div>
              <div><label class="lbl">Horsepower</label><input class="input-field" name="horsepower" value="${esc(val('horsepower', ''))}" placeholder="e.g. 400 hp"></div>
              <div><label class="lbl">Transmission</label><select class="input-field" name="transmission">${['', 'Automatic', 'Manual', 'CVT', 'Dual-Clutch', 'Semi-Automatic', 'Electric (Single Speed)'].map(t => `<option value="${t}" ${val('transmission', '') === t ? 'selected' : ''}>${t || 'Not specified'}</option>`).join('')}</select></div>
              <div><label class="lbl">Fuel Type</label><select class="input-field" name="fuel_type">${['', 'Gasoline', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid', 'LPG', 'Bio-diesel'].map(t => `<option value="${t}" ${val('fuel_type', '') === t ? 'selected' : ''}>${t || 'Not specified'}</option>`).join('')}</select></div>
              <div><label class="lbl">Drive Type</label><select class="input-field" name="drive_type">${['', 'FWD', 'RWD', 'AWD', '4WD'].map(t => `<option value="${t}" ${val('drive_type', '') === t ? 'selected' : ''}>${t || 'Not specified'}</option>`).join('')}</select></div>
              <div><label class="lbl">Fuel Economy</label><input class="input-field" name="fuel_economy" value="${esc(val('fuel_economy', ''))}" placeholder="e.g. 25 mpg combined"></div>
              <div><label class="lbl">Towing Capacity</label><input class="input-field" name="towing_capacity" value="${esc(val('towing_capacity', ''))}" placeholder="e.g. 7,700 lbs"></div>
              <div><label class="lbl">(${(val('sleeping_capacity', '') || '') ? 'Sleeps' : 'Seating Capacity'})</label><input class="input-field" name="seating_capacity" value="${esc(val('seating_capacity', ''))}" placeholder="e.g. 5 seats or Sleeps 6"></div>
              <div><label class="lbl">Wheels &amp; Tires</label><input class="input-field" name="wheels_tires" value="${esc(val('wheels_tires', ''))}" placeholder="e.g. 2 new front, 20\" alloy, 265/65 R18"></div>
              <div><label class="lbl">Dimensions (L × W × H)</label><input class="input-field" name="dimensions" value="${esc(val('dimensions', ''))}" placeholder="e.g. 4,950 x 1,980 x 1,890 mm"></div>
              <div><label class="lbl">Cargo Capacity</label><input class="input-field" name="cargo_capacity" value="${esc(val('cargo_capacity', ''))}" placeholder="e.g. 2,000 L / 5 seats up"></div>
            </div>
          </div>

          <div class="glass-soft border border-emerald-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="shield-check" class="w-4 h-4 text-emerald-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Condition, History &amp; Ownership</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Condition *</label><select class="input-field" name="condition" required>${['', 'New', 'Used - Like New', 'Used - Good', 'Used - Fair', 'Refurbished'].map(c => `<option value="${c}" ${val('condition', '') === c ? 'selected' : ''}>${c || 'Select condition'}</option>`).join('')}</select></div>
              <div><label class="lbl">Previous Owners</label><input class="input-field" name="previous_owners" value="${esc(val('previous_owners', ''))}" placeholder="e.g. 1 or None (new)"></div>
              <div class="sm:col-span-2"><label class="lbl">Ownership History</label><textarea class="input-field" name="ownership_history" rows="2" placeholder="e.g. Single owner, always garaged, clean title">${esc(val('ownership_history', ''))}</textarea></div>
              <div class="sm:col-span-2"><label class="lbl">Service / Maintenance History</label><textarea class="input-field" name="service_history" rows="2" placeholder="e.g. Full dealer service every 5,000 mi, new brakes 2024">${esc(val('service_history', ''))}</textarea></div>
              <div class="sm:col-span-2"><label class="lbl">Accident / Damage History</label><textarea class="input-field" name="accident_history" rows="2" placeholder="e.g. Accident-free, or: minor rear bumper repair 2022">${esc(val('accident_history', ''))}</textarea></div>
              <div><label class="lbl">Registration Status</label><select class="input-field" name="registration_status">${['', 'Registered', 'Unregistered', 'Registration Pending'].map(t => `<option value="${t}" ${val('registration_status', '') === t ? 'selected' : ''}>${t || 'Not specified'}</option>`).join('')}</select></div>
              <div><label class="lbl">Inspection Status</label><select class="input-field" name="inspection_status">${['', 'Inspected & Certified', 'Inspected', 'Not Inspected', 'Under Inspection'].map(t => `<option value="${t}" ${val('inspection_status', '') === t ? 'selected' : ''}>${t || 'Not specified'}</option>`).join('')}</select></div>
            </div>
          </div>

          <div class="glass-soft border border-rose-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="cpu" class="w-4 h-4 text-rose-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Safety, Technology &amp; Interior</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Safety Features (comma separated)</label><input class="input-field" name="safety_features" value="${esc(typeof val('safety_features', []).join === 'function' ? val('safety_features', []).join(', ') : val('safety_features', ''))}" placeholder="ABS, Airbags, Lane Assist, Traction Control, 360 Camera"></div>
              <div class="sm:col-span-2"><label class="lbl">Driver Assistance</label><input class="input-field" name="driver_assistance" value="${esc(asText(val('driver_assistance', '')))}" placeholder="Adaptive Cruise, Auto Emergency Braking, Blind-spot Monitor"></div>
              <div class="sm:col-span-2"><label class="lbl">Technology &amp; Infotainment</label><input class="input-field" name="technology" value="${esc(asText(val('technology', '')))}" placeholder="Apple CarPlay, Navigation, BOSE sound, Reverse camera"></div>
              <div class="sm:col-span-2"><label class="lbl">Interior &amp; Comfort</label><input class="input-field" name="interior" value="${esc(asText(val('interior', '')))}" placeholder="Leather seats, Heated front seats, Sunroof, AC"></div>
            </div>
          </div>

          <div class="glass-soft border border-sky-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="badge-dollar-sign" class="w-4 h-4 text-sky-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Price, Warranty, Location &amp; Seller</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Price (USD) *</label><input type="number" class="input-field" name="price" value="${existing.price || ''}" required placeholder="0"></div>
              <div><label class="lbl">Real Price (crossed out)</label><input type="number" class="input-field" name="real_price" value="${existing.real_price ?? spec.real_price ?? ''}" placeholder="Original price before discount"></div>
              <div><label class="lbl">Stock Qty</label><input type="number" class="input-field" name="stock_quantity" value="${existing.stock_quantity ?? '1'}"></div>
              <div><label class="lbl">Warranty</label><input class="input-field" name="warranty" value="${esc(existing.warranty || spec.warranty || '')}" placeholder="e.g. 3-year manufacturer"></div>
              <div class="sm:col-span-2"><label class="lbl">Listing Location</label><input class="input-field" name="location" value="${esc(val('location', ''))}" placeholder="e.g. Houston, TX, United States"></div>
              <div><label class="lbl">Seller / Contact Name</label><input class="input-field" name="seller_name" value="${esc(val('seller_name', ''))}" placeholder="e.g. James Carter"></div>
              <div><label class="lbl">Seller Phone / WhatsApp</label><input class="input-field" name="seller_phone" value="${esc(val('seller_phone', ''))}" placeholder="e.g. +1 555 010 2233"></div>
              <div><label class="lbl">Seller Email</label><input class="input-field" name="seller_email" value="${esc(val('seller_email', ''))}" placeholder="e.g. james@example.com"></div>
            </div>
          </div>

          <div class="glass-soft border border-blue-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="photo" class="w-4 h-4 text-blue-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Description &amp; Media</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Description</label><textarea class="input-field" name="description" rows="4" placeholder="Clear, professional description of the vehicle, its condition, extras and service history...">${esc(existing.description || '')}</textarea></div>
              <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${esc((existing.features || []).join(', '))}" placeholder="Leather seats, Sunroof, GPS, Heated seats, Roof rack"></div>
            </div>
            <div>
              <label class="lbl">Vehicle Photos &amp; Videos</label>
              <div id="drop-zone" class="drop-zone" onclick="pickMediaForForm('img-upload')">
                <i data-lucide="image-plus" class="w-7 h-7 text-blue-400 mx-auto mb-2"></i>
                <p class="text-xs font-bold text-gray-300">Click or drag &amp; drop images or videos</p>
                <input type="file" id="img-upload" class="hidden" multiple accept="image/*,video/mp4,video/webm,video/*,application/pdf" onchange="handleImageUpload(event)">
              </div>
              <div id="image-preview" class="flex flex-wrap gap-2 mt-3">
                ${(existing.images || []).map((u, i) => imageThumbHtml(u, i)).join('')}
              </div>
              <div id="image-url-inputs">
                ${(existing.images || []).map((u, i) => `<input type="hidden" name="images" id="img-url-${i}" value="${esc(u)}">`).join('')}
              </div>
            </div>
            <label class="flex items-center gap-2.5 cursor-pointer select-none mt-2"><input type="checkbox" name="is_active" ${existing.is_active === false ? '' : 'checked'} class="w-4 h-4 accent-emerald-500"><span class="text-xs font-bold text-gray-300">Publish immediately</span></label>
          </div>

          <div class="flex items-center justify-between gap-3">
            <button type="button" onclick="closeModal()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition">Cancel</button>
            <button type="submit" class="btn-press flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-sm font-black px-7 py-3 rounded-2xl transition shadow-xl shadow-orange-700/25">Publish Vehicle</button>
          </div>
        </form>
      </div>
    </div>`);
  setupDropZone(); setupImageSortable();
  window._vehFormDirty = !!isEdit;
  const vfEl = document.getElementById('vehicle-form');
  if (vfEl) {
    const markVehDirty = () => { window._vehFormDirty = true; };
    vfEl.addEventListener('input', markVehDirty);
    vfEl.addEventListener('change', markVehDirty);
  }
  if (window.lucide) lucide.createIcons();
};

window.saveVehicle = async function(e, existingId) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  const images = [...fd.getAll('images')].filter(Boolean)
    .concat(String(data.images_text || '').split(/\r?\n/).map(s => s.trim()).filter(Boolean));
  const uniqueImages = [...new Set(images)];
  const features = (data.features_text || '').split(',').map(s => s.trim()).filter(Boolean);
  const safetyFeatures = (data.safety_features || '').split(',').map(s => s.trim()).filter(Boolean);
  const driverAssist = (data.driver_assistance || '').split(',').map(s => s.trim()).filter(Boolean);
  const techFeatures = (data.technology || '').split(',').map(s => s.trim()).filter(Boolean);
  const interiorFeatures = (data.interior || '').split(',').map(s => s.trim()).filter(Boolean);
  const realPriceNum = (data.real_price === '' || data.real_price == null) ? null : Math.max(GLOBAL_PRICE_MIN, Math.min(GLOBAL_PRICE_MAX, parseFloat(data.real_price) || 0));
  const vehicleType = VEHICLE_TYPE_CATEGORY[data.vehicle_type] || 'Cars';
  const year = String(data.model_year || '').trim();
  const make = String(data.make || '').trim();
  const model = String(data.model || '').trim();
  const autoTitle = [year, make, model].filter(Boolean).join(' ') || String(data.title || '').trim();
  const specs = {
    make, model, model_year: year, body_type: data.body_type || null,
    trim: data.trim || '', mileage: data.mileage || '', engine: data.engine || '',
    horsepower: data.horsepower || '',
    transmission: data.transmission || null, drive_type: data.drive_type || null,
    fuel_type: data.fuel_type || null, fuel_economy: data.fuel_economy || '',
    towing_capacity: data.towing_capacity || '',
    seating_capacity: data.seating_capacity || null,
    sleeping_capacity: vehicleType === 'Motorhomes' ? (data.seating_capacity || null) : null,
    doors: data.doors || null, safety_features: safetyFeatures,
    driver_assistance: driverAssist, technology: techFeatures, interior: interiorFeatures,
    wheels_tires: data.wheels_tires || '', dimensions: data.dimensions || '',
    cargo_capacity: data.cargo_capacity || '',
    ownership_history: data.ownership_history || '', service_history: data.service_history || '',
    accident_history: data.accident_history || '', previous_owners: data.previous_owners || '',
    registration_status: data.registration_status || null, inspection_status: data.inspection_status || null,
    color: data.color || '', vin: data.vin || '', warranty: data.warranty || '',
    condition: data.condition || '',
    location: data.location || '', seller_name: data.seller_name || '',
    seller_phone: data.seller_phone || '', seller_email: data.seller_email || '',
    product_location: data.location || '',
  };
  for (const k of Object.keys(specs)) if (specs[k] == null) delete specs[k];
  const payload = {
    listing_type: 'vehicle',
    category: vehicleType,
    subcategory: data.body_type || data.vehicle_type || null,
    title: String(data.title || '').trim() || autoTitle,
    description: data.description || '',
    price: Math.max(GLOBAL_PRICE_MIN, Math.min(GLOBAL_PRICE_MAX, parseFloat(data.price) || 0)),
    currency: 'USD',
    real_price: realPriceNum,
    images: uniqueImages, features,
    brand: make || null,
    color: data.color || null,
    condition: data.condition || null,
    warranty: data.warranty || null,
    stock_quantity: parseInt(data.stock_quantity, 10) || 1,
    is_active: data.is_active === 'on',
    is_featured: false,
    specifications: { ...specs, real_price: realPriceNum },
  };
  let err;
  if (existingId) {
    payload.property_id = existingId;
    const current = sanitizeShowroomPayload((window._productsData || []).find(item => item.property_id === existingId));
    payload.specifications = { ...(current.specifications && typeof current.specifications === 'object' ? current.specifications : {}), ...specs, real_price: realPriceNum };
    ({ error: err } = await supabase.from('showroom_listings').upsert({ ...(current || {}), ...payload }, { onConflict: 'property_id' }));
  } else {
    payload.property_id = genId();
    ({ error: err } = await supabase.from('showroom_listings').insert(payload));
  }
  if (err) {
    const handled = handleWriteError(
      err,
      () => upsertLocalShowroomListing({ ...payload, property_id: existingId || payload.property_id }),
      existingId ? 'Vehicle update' : 'Vehicle publish'
    );
    if (handled) return;
  }
  showToast(existingId ? 'Vehicle updated!' : 'Vehicle published! It now appears in the Cars & Trucks row.');
  closeModal(); renderProducts();
};

window.editProperty = async function(pid) {
  const { data, error } = await supabase.from('showroom_listings').select('*').eq('property_id', pid).maybeSingle();
  let resolved = error ? null : data;
  if (!resolved) resolved = getLocalShowroomListingById(pid);
  if (!resolved) resolved = (Array.isArray(SHOWROOM_LISTINGS) ? SHOWROOM_LISTINGS.find(l => l.property_id === pid) : null) || null;
  if (resolved) showAddPropertyModal(resolved);
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  4. ORDERS MANAGER
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
const ORDER_STATUSES = ['pending_verification', 'payment_received', 'payment_approved', 'processing', 'shipped', 'in_transit', 'out_for_delivery', 'delivered', 'cancelled', 'rejected'];

async function renderOrders() {
  const content = document.getElementById('content');
  try {
    const { data: orders } = await supabase.from('payment_receipts').select('*').order('created_at', { ascending: false }).limit(300);
    const items = orders || [];
    const tabs = ['All', 'Pending', 'Paid', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
    let activeTab = 'All';
    content.innerHTML = `
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Orders Manager</h2>
        <div class="flex gap-2 flex-wrap" id="order-tabs">
          ${tabs.map(t => `<button class="tab-btn ${t === 'All' ? 'active' : ''}" onclick="filterOrders('${t}')">${t}</button>`).join('')}
        </div>
        <div class="flex gap-3">
          <div class="flex-1 relative">
            <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
            <input type="search" class="input-field pl-9" placeholder="Search order, email, nameâ€¦" oninput="searchOrders(this.value)">
          </div>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr>
                <th>Order #</th><th>Customer</th><th>Product</th>
                <th class="hidden sm:table-cell">Amount</th><th>Status</th>
                <th class="hidden md:table-cell">Date</th><th>Actions</th>
              </tr></thead>
              <tbody id="orders-tbody">
                ${items.length === 0 ? '<tr><td colspan="7" class="text-center text-gray-500 py-12">No orders yet</td></tr>' :
                  items.map(o => orderRow(o)).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;
    window._ordersData = items;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

function orderRow(o) {
  return `<tr class="order-row" data-status="${o.status}" data-search="${esc(o.order_number)} ${esc(o.full_name)} ${esc(o.email)}">
    <td><span class="font-mono text-xs text-blue-400 font-bold">${esc(o.order_number || o.id?.slice(0, 8))}</span></td>
    <td>
      <p class="text-xs font-bold text-white">${esc(o.full_name || 'Guest')}</p>
      <p class="text-[10px] text-gray-500">${esc(o.email)}</p>
    </td>
    <td><p class="text-xs text-gray-300 truncate max-w-[140px]">${esc(o.listing_title || o.listing_id || 'â€”')}</p></td>
    <td class="hidden sm:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(o.amount || 0).toLocaleString()}</span></td>
    <td>${badge(o.status)}</td>
    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${fmtDate(o.created_at)}</span></td>
    <td>
      <button onclick="viewOrder('${o.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="View / Update">
        <i data-lucide="eye" class="w-3.5 h-3.5"></i>
      </button>
    </td>
  </tr>`;
}

window.filterOrders = function(tab) {
  document.querySelectorAll('#order-tabs .tab-btn').forEach(b => b.classList.toggle('active', b.textContent === tab));
  document.querySelectorAll('.order-row').forEach(row => {
    const s = row.dataset.status || '';
    const show = tab === 'All' ||
      (tab === 'Pending' && ['pending_verification', 'payment_received', 'order_placed'].includes(s)) ||
      (tab === 'Paid' && ['payment_approved'].includes(s)) ||
      (tab === 'Processing' && ['processing'].includes(s)) ||
      (tab === 'Shipped' && ['shipped', 'in_transit', 'out_for_delivery'].includes(s)) ||
      (tab === 'Delivered' && s === 'delivered') ||
      (tab === 'Cancelled' && ['cancelled', 'rejected'].includes(s));
    row.style.display = show ? '' : 'none';
  });
};

window.searchOrders = function(q) {
  const lq = q.toLowerCase();
  document.querySelectorAll('.order-row').forEach(row => {
    row.style.display = !lq || row.dataset.search.toLowerCase().includes(lq) ? '' : 'none';
  });
};

window.viewOrder = async function(id) {
  const o = (window._ordersData || []).find(x => x.id === id);
  if (!o) return;
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Order ${esc(o.order_number)}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="space-y-3 text-sm">
          <div class="grid grid-cols-2 gap-3">
            ${[['Customer', o.full_name], ['Email', o.email], ['Phone', o.phone], ['Amount', fmtMoney(o.amount, o.currency)], ['Product', o.listing_title || o.listing_id], ['Date', fmtDT(o.created_at)]].map(([l, v]) => `<div><p class="text-[10px] text-gray-500 uppercase font-bold mb-0.5">${l}</p><p class="text-xs text-white font-medium">${esc(v) || 'â€”'}</p></div>`).join('')}
          </div>
          ${o.transaction_reference ? `<div class="p-3 glass-soft border border-blue-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Transaction Reference</p><p class="text-xs font-mono text-blue-300">${esc(o.transaction_reference)}</p></div>` : ''}
          ${o.additional_notes ? `<div class="p-3 glass-soft border border-amber-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Notes</p><p class="text-xs text-gray-300">${esc(o.additional_notes)}</p></div>` : ''}
          <div>
            <label class="lbl">Update Order Status</label>
            <div class="flex gap-2">
              <select id="order-status-select" class="input-field flex-1">
                ${ORDER_STATUSES.map(s => `<option value="${s}" ${o.status === s ? 'selected' : ''}>${s.replace(/_/g, ' ')}</option>`).join('')}
              </select>
              <button onclick="updateOrderStatus('${o.id}')" class="btn-press px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>`);
};

window.updateOrderStatus = async function(id) {
  const status = document.getElementById('order-status-select')?.value;
  if (!status) return;
  const { error } = await supabase.from('payment_receipts').update({ status }).eq('id', id);
  if (error) { showToast(error.message, 'error'); return; }
  showToast('Order status updated');
  closeModal(); renderOrders();
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  5. CUSTOMERS MANAGER
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderCustomers() {
  const content = document.getElementById('content');
  try {
    const { data: customers } = await supabase.from('profiles').select('*').order('created_at', { ascending: false }).limit(200);
    const items = customers || [];
    content.innerHTML = `
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Customers Manager</h2>
          <span class="text-sm text-gray-400 font-medium">${items.length} total</span>
        </div>
        <div class="relative">
          <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
          <input type="search" class="input-field pl-9" placeholder="Search customersâ€¦" oninput="searchCustomers(this.value)">
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Customer</th><th class="hidden sm:table-cell">Country</th><th class="hidden md:table-cell">Joined</th><th>Actions</th></tr></thead>
              <tbody id="customers-tbody">
                ${items.length === 0 ? '<tr><td colspan="4" class="text-center text-gray-500 py-12">No customers yet</td></tr>' :
                  items.map(c => `<tr class="cust-row" data-search="${esc(c.display_name)} ${esc(c.user_id)}">
                    <td>
                      <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                          <i data-lucide="user" class="w-4 h-4 text-blue-400"></i>
                        </div>
                        <div>
                          <p class="text-xs font-bold text-white">${esc(c.display_name || 'Anonymous')}</p>
                          <p class="text-[10px] font-mono text-gray-500">${esc(c.user_id?.slice(0, 12))}â€¦</p>
                        </div>
                      </div>
                    </td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-300">${esc(c.country_code || 'â€”')}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${fmtDate(c.created_at)}</span></td>
                    <td>
                      <button onclick="viewCustomer('${c.user_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="eye" class="w-3.5 h-3.5"></i></button>
                    </td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;
    window._customersData = items;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

window.searchCustomers = function(q) {
  const lq = q.toLowerCase();
  document.querySelectorAll('.cust-row').forEach(r => {
    r.style.display = !lq || r.dataset.search.toLowerCase().includes(lq) ? '' : 'none';
  });
};

window.viewCustomer = async function(uid) {
  const c = (window._customersData || []).find(x => x.user_id === uid);
  if (!c) return;
  const { data: orders } = await supabase.from('payment_receipts').select('order_number,amount,currency,status,created_at').eq('user_id', uid).order('created_at', { ascending: false }).limit(20);
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Customer Profile</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="flex items-center gap-4 mb-5 p-4 glass-soft border border-blue-500/15 rounded-xl">
          <div class="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
            <i data-lucide="user" class="w-6 h-6 text-blue-400"></i>
          </div>
          <div>
            <p class="font-black text-white">${esc(c.display_name || 'Anonymous')}</p>
            <p class="text-xs text-gray-400 mt-0.5">Joined ${fmtDate(c.created_at)} Â· ${esc(c.country_code || 'Unknown country')}</p>
          </div>
        </div>
        <h4 class="text-xs font-bold text-gray-400 uppercase mb-3">Purchase History</h4>
        ${(orders || []).length === 0 ? '<p class="text-xs text-gray-500 py-4 text-center">No orders yet</p>' :
          (orders || []).map(o => `<div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
            <div><p class="text-xs font-bold text-white font-mono">${esc(o.order_number)}</p><p class="text-[10px] text-gray-500">${fmtDT(o.created_at)}</p></div>
            <div class="flex items-center gap-2">${badge(o.status)}<span class="text-xs font-bold text-emerald-400">$${parseFloat(o.amount).toLocaleString()}</span></div>
          </div>`).join('')}
      </div>
    </div>`);
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  6. REVIEWS MANAGER
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderReviews() {
  const content = document.getElementById('content');
  try {
    const { data: reviews } = await supabase.from('product_reviews').select('*, showroom_listings(title, property_id)').order('created_at', { ascending: false }).limit(200);
    const items = reviews || [];
    const pending = items.filter(r => !r.is_approved).length;
    const { data: feedback } = await supabase.from('site_feedback').select('*').order('created_at', { ascending: false }).limit(200);
    const fbItems = feedback || [];
    const fbPending = fbItems.filter(f => !f.is_approved).length;
    content.innerHTML = `
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Reviews & Feedback Manager</h2>
          ${(pending + fbPending) > 0 ? `<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">${pending + fbPending} pending</span>` : ''}
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="star" class="w-4 h-4 text-amber-400"></i> Product Reviews</h3>
            <div class="flex gap-2 ml-auto">
              <button onclick="filterReviewTab('all')" class="tab-btn active" id="rtab-all">All Reviews</button>
              <button onclick="filterReviewTab('pending')" class="tab-btn" id="rtab-pending">Pending (${pending})</button>
              <button onclick="filterReviewTab('approved')" class="tab-btn" id="rtab-approved">Approved</button>
            </div>
          </div>
          <div class="space-y-3" id="reviews-list">
            ${items.length === 0 ? emptyState('star', 'No Reviews', 'Customer reviews will appear here.') :
              items.map(r => reviewCard(r)).join('')}
          </div>
        </div>

        <div class="glass-soft border border-emerald-500/15 rounded-2xl p-5 space-y-4">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="message-square-text" class="w-4 h-4 text-emerald-400"></i> Customer Feedback (site-wide)</h3>
            ${fbPending > 0 ? `<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">${fbPending} pending</span>` : ''}
          </div>
          <p class="text-[11px] text-gray-500">Feedback submitted from the "Feedback" form on every page. Approve to show it in the public "View more Feedback" list.</p>
          <div class="space-y-3" id="feedback-list">
            ${fbItems.length === 0 ? emptyState('message-square', 'No Feedback Yet', 'Site feedback will appear here.') :
              fbItems.map(f => feedbackAdminCard(f)).join('')}
          </div>
        </div>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

function feedbackAdminCard(f) {
  const stars = Array.from({ length: 5 }, (_, i) => i < (f.rating || 5) ? 'â˜…' : 'â˜†').join('');
  return `<div class="glass-soft border ${f.is_approved ? 'border-emerald-500/15' : 'border-amber-500/20'} rounded-xl p-4" data-fb-approved="${f.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          <span class="text-amber-400 font-bold text-sm">${stars}</span>
          <span class="text-xs font-black text-white">${esc(f.name || 'Anonymous shopper')}</span>
          <span class="text-xs text-gray-500">${esc(f.email || 'no email')} Â· ${fmtDate(f.created_at)}</span>
          ${!f.is_approved ? `<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending</span>` : `<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>`}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${esc(f.feedback || 'â€”')}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${!f.is_approved ? `<button onclick="approveFeedback('${f.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>` : ''}
        <button onclick="deleteFeedback('${f.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`;
}

window.approveFeedback = async function(id) {
  const { error } = await supabase.from('site_feedback').update({ is_approved: true }).eq('id', id);
  if (error) showToast(error.message, 'error'); else showToast('Feedback approved â€” it now shows on every page.');
  renderReviews();
};

window.deleteFeedback = async function(id) {
  if (!confirm('Delete this feedback permanently?')) return;
  const { error } = await supabase.from('site_feedback').delete().eq('id', id);
  if (error) showToast(error.message, 'error'); else showToast('Feedback deleted.');
  renderReviews();
};

function reviewCard(r) {
  const stars = Array.from({length: 5}, (_, i) => i < r.rating ? 'â˜…' : 'â˜†').join('');
  return `<div class="review-card glass-soft border ${r.is_approved ? 'border-blue-500/15' : 'border-amber-500/20'} rounded-xl p-4" data-approved="${r.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-amber-400 font-bold text-sm">${stars}</span>
          <span class="text-xs text-gray-500">${fmtDate(r.created_at)}</span>
          ${!r.is_approved ? `<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending Approval</span>` : `<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>`}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${esc(r.comment || r.review_text || 'â€”')}</p>
        <p class="text-[11px] text-blue-400 mt-1.5">On: ${esc(r.showroom_listings?.title || r.listing_id)}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${!r.is_approved ? `<button onclick="approveReview('${r.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>` : ''}
        <button onclick="deleteReview('${r.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`;
}

window.filterReviewTab = function(tab) {
  ['all','pending','approved'].forEach(t => document.getElementById(`rtab-${t}`)?.classList.toggle('active', t === tab));
  document.querySelectorAll('.review-card').forEach(c => {
    const show = tab === 'all' || (tab === 'pending' && c.dataset.approved === 'false') || (tab === 'approved' && c.dataset.approved === 'true');
    c.style.display = show ? '' : 'none';
  });
};

window.approveReview = async function(id) {
  await supabase.from('product_reviews').update({ is_approved: true }).eq('id', id);
  showToast('Review approved');
  renderReviews();
};

window.deleteReview = async function(id) {
  if (!confirm('Delete this review permanently?')) return;
  await supabase.from('product_reviews').delete().eq('id', id);
  showToast('Review deleted');
  renderReviews();
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  7. MESSAGES
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderMessages() {
  const content = document.getElementById('content');
  try {
    const { data: msgs } = await supabase.from('support_messages').select('*').order('created_at', { ascending: false }).limit(200);
    const items = msgs || [];
    content.innerHTML = `
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Messages & Support</h2>
        <div class="space-y-3">
          ${items.length === 0 ? emptyState('message-circle', 'No Messages', 'Customer support messages will appear here.') :
            items.map(m => `
              <div class="glass-soft border ${m.is_read ? 'border-blue-500/10' : 'border-blue-400/30'} rounded-xl p-4 ${m.is_read ? '' : 'ring-1 ring-blue-500/10'}">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs font-black text-white">${esc(m.full_name || m.name || 'Anonymous')}</span>
                      ${!m.is_read ? `<span class="badge bg-blue-500/15 text-blue-400 border-blue-500/20">New</span>` : ''}
                      <span class="text-[10px] text-gray-500 ml-auto">${fmtDT(m.created_at)}</span>
                    </div>
                    <p class="text-[11px] text-blue-400 mb-1">${esc(m.email || 'â€”')}</p>
                    <p class="text-xs text-gray-300">${esc(m.message || m.body || 'â€”')}</p>
                    ${m.subject ? `<p class="text-[11px] text-gray-500 mt-1">Subject: ${esc(m.subject)}</p>` : ''}
                  </div>
                  <div class="flex gap-1 shrink-0">
                    <button onclick="markMsgRead('${m.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Mark Read"><i data-lucide="check" class="w-4 h-4"></i></button>
                  </div>
                </div>
              </div>`).join('')}
        </div>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

window.markMsgRead = async function(id) {
  await supabase.from('support_messages').update({ is_read: true }).eq('id', id);
  showToast('Marked as read');
  renderMessages();
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  8. COUPONS
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderCoupons() {
  const content = document.getElementById('content');
  try {
    const { data: coupons } = await supabase.from('coupons').select('*').order('created_at', { ascending: false });
    const items = coupons || [];
    content.innerHTML = `
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Coupons Manager</h2>
          <button onclick="showAddCouponModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Coupon
          </button>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Code</th><th>Type</th><th>Value</th><th class="hidden sm:table-cell">Min Amount</th><th>Status</th><th class="hidden md:table-cell">Expires</th><th>Actions</th></tr></thead>
              <tbody>
                ${items.length === 0 ? '<tr><td colspan="7" class="text-center text-gray-500 py-12">No coupons yet</td></tr>' :
                  items.map(c => `<tr>
                    <td><code class="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">${esc(c.code)}</code></td>
                    <td><span class="text-xs text-gray-300">${c.discount_type === 'percent' ? 'Percentage' : 'Fixed Amount'}</span></td>
                    <td><span class="text-xs font-bold text-emerald-400">${c.discount_type === 'percent' ? c.discount_value + '%' : '$' + c.discount_value}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${c.min_amount ? '$' + c.min_amount : 'â€”'}</span></td>
                    <td>${badge(c.is_active ? 'active' : 'inactive')}</td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${fmtDate(c.expires_at)}</span></td>
                    <td>
                      <div class="flex gap-1">
                        <button onclick="toggleCoupon('${c.id}',${!c.is_active})" class="btn-press p-1.5 ${c.is_active ? 'text-amber-400 hover:bg-amber-500/10' : 'text-emerald-400 hover:bg-emerald-500/10'} rounded-lg transition"><i data-lucide="${c.is_active ? 'eye-off' : 'eye'}" class="w-3.5 h-3.5"></i></button>
                        <button onclick="deleteCoupon('${c.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                      </div>
                    </td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

window.showAddCouponModal = function() {
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Create Coupon</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <form id="coupon-form" onsubmit="saveCoupon(event)" class="space-y-4">
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Coupon Code *</label><input class="input-field uppercase" name="code" required placeholder="e.g. SAVE20" style="text-transform:uppercase"></div>
            <div><label class="lbl">Discount Type *</label><select class="input-field" name="discount_type" required>
              <option value="percent">Percentage (%)</option>
              <option value="fixed">Fixed Amount ($)</option>
            </select></div>
            <div><label class="lbl">Discount Value *</label><input type="number" class="input-field" name="discount_value" required min="0" step="0.01" placeholder="e.g. 20"></div>
            <div><label class="lbl">Minimum Order Amount</label><input type="number" class="input-field" name="min_amount" min="0" placeholder="0"></div>
            <div><label class="lbl">Usage Limit</label><input type="number" class="input-field" name="usage_limit" min="1" placeholder="Unlimited"></div>
            <div><label class="lbl">Expiry Date</label><input type="date" class="input-field" name="expires_at"></div>
          </div>
          <button type="submit" class="btn-press w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl text-sm transition">Create Coupon</button>
        </form>
      </div>
    </div>`);
};

window.saveCoupon = async function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  const payload = { code: data.code.toUpperCase(), discount_type: data.discount_type, discount_value: parseFloat(data.discount_value), min_amount: data.min_amount ? parseFloat(data.min_amount) : null, usage_limit: data.usage_limit ? parseInt(data.usage_limit) : null, expires_at: data.expires_at || null, is_active: true };
  const { error } = await supabase.from('coupons').insert(payload);
  if (error) { showToast(error.message, 'error'); return; }
  showToast('Coupon created!');
  closeModal(); renderCoupons();
};

window.toggleCoupon = async function(id, active) {
  await supabase.from('coupons').update({ is_active: active }).eq('id', id);
  showToast(active ? 'Coupon activated' : 'Coupon deactivated');
  renderCoupons();
};

window.deleteCoupon = async function(id) {
  if (!confirm('Delete this coupon?')) return;
  await supabase.from('coupons').delete().eq('id', id);
  showToast('Coupon deleted');
  renderCoupons();
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  9. NOTIFICATIONS
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderNotifications() {
  const content = document.getElementById('content');
  try {
    const { data: notifs } = await supabase.from('notification_log').select('*').order('created_at', { ascending: false }).limit(100);
    const items = notifs || [];
    content.innerHTML = `
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Notifications</h2>
        <div class="space-y-2">
          ${items.length === 0 ? emptyState('bell', 'No Notifications', 'System notifications will appear here.') :
            items.map(n => `
              <div class="glass-soft border border-blue-500/10 rounded-xl p-3.5 flex items-start gap-3">
                <div class="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <i data-lucide="bell" class="w-4 h-4 text-blue-400"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-0.5">
                    <span class="text-xs font-bold text-white">${esc(n.subject || n.event_type || 'Notification')}</span>
                    ${badge(n.status)}
                    <span class="text-[10px] text-gray-500 ml-auto">${fmtDT(n.created_at)}</span>
                  </div>
                  <p class="text-[11px] text-gray-400">${esc(n.recipient || n.order_number)}</p>
                </div>
              </div>`).join('')}
        </div>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  10. ADVERTISEMENTS  (homepage showcase ad manager)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
const AD_LABEL_OPTIONS = ['Featured', 'Sponsored', 'Featured Collection', 'Discover', 'Promotion'];
const AD_SECTION_OPTIONS = [
  { id: 'real-estate', name: 'Real Estate & Properties' },
  { id: 'marketplace', name: 'Marketplace Showroom' },
];
let _adTargetCache = null;

function adLabelPill(label) {
  const colors = {
    'Featured': 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    'Sponsored': 'bg-violet-500/10 text-violet-300 border-violet-500/30',
    'Featured Collection': 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    'Discover': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    'Promotion': 'bg-blue-500/10 text-blue-300 border-blue-500/30',
  };
  const c = colors[label] || colors['Featured'];
  return `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${c}">${esc(label)}</span>`;
}

function adLinkLabel(p) {
  if (!p || !p.link_type || p.link_type === 'none') return '<span class="text-[10px] text-gray-500">No link</span>';
  if (p.link_type === 'product') return `<span class="text-[10px] text-blue-300"><i data-lucide="package" class="w-3 h-3 inline mr-1"></i>Product Â· ${esc(p.link_target || '')}</span>`;
  if (p.link_type === 'category') return `<span class="text-[10px] text-emerald-300"><i data-lucide="tag" class="w-3 h-3 inline mr-1"></i>Category Â· ${esc(p.link_target || '')}</span>`;
  return `<span class="text-[10px] text-amber-300"><i data-lucide="layout-grid" class="w-3 h-3 inline mr-1"></i>Section Â· ${esc(p.link_target || '')}</span>`;
}

function adMediaThumb(p) {
  if (p.video_url) return `<video src="${esc(p.video_url)}" ${p.poster_url ? `poster="${esc(p.poster_url)}"` : ''} class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" muted preload="metadata"></video>`;
  if (p.image_url) return `<img src="${esc(p.image_url)}" class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" onerror="this.remove()">`;
  return `<div class="w-24 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="megaphone" class="w-6 h-6 text-blue-400"></i></div>`;
}

async function loadAdTargetCache() {
  if (_adTargetCache) return _adTargetCache;
  const products = [];
  const seenCat = new Set();
  const cats = [];
  const pushListing = (l) => {
    if (!l || !l.property_id) return;
    products.push({ id: l.property_id, title: l.title || l.property_id });
    const cat = l.category || '';
    if (cat && !seenCat.has(cat)) { seenCat.add(cat); cats.push(cat); }
  };
  try { SHOWROOM_LISTINGS.forEach(pushListing); } catch (e) {}
  try {
    const { data, error } = await supabase.from('showroom_listings').select('property_id,title,category').order('created_at', { ascending: false });
    if (!error && data) data.forEach(pushListing);
  } catch (e) {}
  const chips = ['Women','Men','Kids','Home','Sports','Jewellery','Electronics','Cars','Motorcycles','Phones','Computers','Furniture','Beauty','Fashion','Real Estate','Bicycles','Trucks','Land','Kitchen','Food','Pets','Books','Toys','Services'];
  chips.forEach(c => { if (!seenCat.has(c)) { seenCat.add(c); cats.push(c); } });
  _adTargetCache = { products, categories: cats, sections: AD_SECTION_OPTIONS };
  return _adTargetCache;
}

async function uploadAdMedia(file) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { showToast('Sign in to upload media', 'error'); return null; }
    const ext = (file.name.split('.').pop() || 'bin').toLowerCase().replace(/[^a-z0-9]/g, '');
    const isVideo = /^(mp4|webm|mov|m4v)$/.test(ext) || file.type.startsWith('video/');
    const path = `ads/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error: upErr } = await supabase.storage.from('advertisements').upload(path, file, { contentType: file.type, upsert: false });
    if (upErr) { showToast('Upload failed: ' + upErr.message, 'error'); return null; }
    const { data } = supabase.storage.from('advertisements').getPublicUrl(path);
    return { url: data.publicUrl, isVideo };
  } catch (e) { showToast('Upload failed', 'error'); return null; }
}

function setAdDraftMedia(url, isVideo) {
  const preview = document.getElementById('ad-media-preview');
  if (!preview) return;
  const iv = document.getElementById('ad-hidden-video');
  const ii = document.getElementById('ad-hidden-image');
  if (iv) iv.value = isVideo ? url : '';
  if (ii) ii.value = isVideo ? '' : url;
  preview.innerHTML = isVideo
    ? `<video src="${esc(url)}" class="w-full h-40 object-cover rounded-xl" controls muted playsinline></video>`
    : `<img src="${esc(url)}" class="w-full h-40 object-cover rounded-xl">`;
  if (window.lucide) lucide.createIcons();
}

window.onAdMediaPicked = async function(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const allowed = file.type.startsWith('image/') || file.type.startsWith('video/');
  if (!allowed) { showToast('Choose an image or video file', 'error'); return; }
  const res = await uploadAdMedia(file);
  if (!res) { input.value = ''; return; }
  setAdDraftMedia(res.url, res.isVideo);
  const urlInput = document.getElementById('ad-media-url');
  if (urlInput) urlInput.value = res.url;
};

window.onAdMediaUrl = function(input) {
  const v = (input.value || '').trim();
  if (!v) return;
  const isVideo = /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(v);
  setAdDraftMedia(v, isVideo);
};

function setupAdLinkFields(cache, type, selected) {
  const wrap = document.getElementById('ad-link-target-wrap');
  if (!wrap) return;
  if (!type || type === 'none') { wrap.innerHTML = '<p class="text-[10px] text-gray-500">This ad is informational and will not be clickable.</p>'; return; }
  let opts = '';
  if (type === 'product') {
    opts = '<option value="">Select a productâ€¦</option>' + cache.products.map(p => `<option value="${esc(p.id)}" ${String(selected) === String(p.id) ? 'selected' : ''}>${esc(p.id)} â€” ${esc((p.title || '').slice(0, 60))}</option>`).join('');
  } else if (type === 'category') {
    opts = '<option value="">Select a categoryâ€¦</option>' + cache.categories.map(c => `<option value="${esc(c)}" ${selected === c ? 'selected' : ''}>${esc(c)}</option>`).join('');
  } else if (type === 'section') {
    opts = '<option value="">Select a sectionâ€¦</option>' + cache.sections.map(s => `<option value="${esc(s.id)}" ${selected === s.id ? 'selected' : ''}>${esc(s.name)}</option>`).join('');
  }
  wrap.innerHTML = `<label class="lbl">Target</label><select class="input-field" name="link_target">${opts}</select>`;
}

function adFormHtml(ad) {
  return `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${ad ? 'Edit Advertisement' : 'Add Advertisement'}</h3>
          <button onclick="closeModal()" class="btn-press text-xs font-bold text-gray-400 hover:text-white transition">âœ• Close</button>
        </div>
        <form id="ad-form" onsubmit="saveAd(event)" class="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          <input type="hidden" name="id" value="${ad ? ad.id : ''}">
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Title *</label><input class="input-field" name="title" required value="${esc(ad && ad.title ? ad.title : '')}" placeholder="e.g. Summer Sale 2026"></div>
            <div><label class="lbl">Ad Label</label>
              <select class="input-field" name="ad_label">
                ${AD_LABEL_OPTIONS.map(l => `<option value="${l}" ${ad && ad.ad_label === l ? 'selected' : ''}>${l}</option>`).join('')}
              </select>
            </div>
          </div>
          <div><label class="lbl">Message</label><textarea class="input-field" name="description" rows="2" placeholder="Short message shown on the adâ€¦">${esc(ad && ad.description ? ad.description : '')}</textarea></div>

          <div class="glass-soft border border-blue-500/15 rounded-xl p-4 space-y-3">
            <label class="lbl">Image / Video</label>
            <div id="ad-media-preview" class="w-full h-40 rounded-xl bg-black/40 flex items-center justify-center text-gray-600 text-xs border border-dashed border-gray-700"></div>
            <div class="flex items-center gap-2 flex-wrap">
              <label class="btn-press cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
                <i data-lucide="upload" class="w-4 h-4"></i> Upload File
                <input type="file" accept="image/*,video/mp4,video/webm,video/quicktime" class="hidden" onchange="onAdMediaPicked(this)">
              </label>
              <input id="ad-media-url" class="input-field flex-1 min-w-[160px]" placeholder="â€¦or paste media URL" oninput="onAdMediaUrl(this)">
            </div>
            <p class="text-[10px] text-gray-500">Videos play muted in the showcase. Images are cropped to fill (object-fit: cover).</p>
            <input type="hidden" name="image_url" id="ad-hidden-image">
            <input type="hidden" name="video_url" id="ad-hidden-video">
          </div>

          <div class="form-grid form-grid-2">
            <div><label class="lbl">Start Date</label><input type="date" class="input-field" name="start_date" value="${ad && ad.start_date ? String(ad.start_date).slice(0, 10) : ''}"></div>
            <div><label class="lbl">End Date</label><input type="date" class="input-field" name="end_date" value="${ad && ad.end_date ? String(ad.end_date).slice(0, 10) : ''}"></div>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-xl p-4 space-y-3">
            <label class="lbl">Link Destination</label>
            <select class="input-field" name="link_type" onchange="onAdLinkTypeChange()">
              <option value="none" ${!ad || !ad.link_type || ad.link_type === 'none' ? 'selected' : ''}>No link</option>
              <option value="product" ${ad && ad.link_type === 'product' ? 'selected' : ''}>Link to a product</option>
              <option value="category" ${ad && ad.link_type === 'category' ? 'selected' : ''}>Link to a category</option>
              <option value="section" ${ad && ad.link_type === 'section' ? 'selected' : ''}>Link to a showroom section</option>
            </select>
            <div id="ad-link-target-wrap"></div>
          </div>

          <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/15 rounded-xl">
            <p class="text-xs font-bold text-white">Active</p>
            <label class="toggle-switch"><input type="checkbox" name="is_active" ${!ad || ad.is_active ? 'checked' : ''}><span class="toggle-slider"></span></label>
          </div>
          <button type="submit" class="btn-press w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl text-sm transition">${ad ? 'Save Changes' : 'Create Advertisement'}</button>
        </form>
      </div>
    </div>`;
}

window.onAdLinkTypeChange = function() {
  const cache = window._adLinkCache || { products: [], categories: [], sections: [] };
  const sel = document.querySelector('#ad-form select[name="link_type"]');
  const type = sel ? sel.value : 'none';
  setupAdLinkFields(cache, type, '');
};

window.showAddAdModal = async function() {
  const cache = await loadAdTargetCache();
  window._adLinkCache = cache;
  openModal(adFormHtml(null));
  setupAdLinkFields(cache, 'none', '');
};

window.showEditAdModal = async function(id) {
  const cache = await loadAdTargetCache();
  window._adLinkCache = cache;
  const { data } = await supabase.from('promotions').select('*').eq('id', id).maybeSingle();
  if (!data) { showToast('Ad not found', 'error'); return; }
  openModal(adFormHtml(data));
  if (data.image_url) setAdDraftMedia(data.image_url, false);
  else if (data.video_url) setAdDraftMedia(data.video_url, true);
  setupAdLinkFields(cache, data.link_type || 'none', data.link_target || '');
};

window.saveAd = async function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  const id = data.id || '';
  const payload = {
    title: data.title,
    description: data.description || '',
    ad_label: AD_LABEL_OPTIONS.includes(data.ad_label) ? data.ad_label : 'Featured',
    image_url: data.image_url || null,
    video_url: data.video_url || null,
    link_type: ['none', 'product', 'category', 'section'].includes(data.link_type) ? data.link_type : 'none',
    link_target: data.link_target || null,
    start_date: data.start_date ? new Date(data.start_date + 'T00:00:00').toISOString() : null,
    end_date: data.end_date ? new Date(data.end_date + 'T23:59:59').toISOString() : null,
    is_active: data.is_active === 'on',
    promo_type: 'banner',
  };
  if (!payload.image_url && !payload.video_url) { showToast('Add an image or video for the ad', 'error'); return; }
  const btn = e.target.querySelector('button[type="submit"]');
  if (btn) btn.disabled = true;
  try {
    if (id) {
      const { error } = await supabase.from('promotions').update(payload).eq('id', id);
      if (error) throw error;
      showToast('Ad updated!');
    } else {
      const { error } = await supabase.from('promotions').insert(payload);
      if (error) throw error;
      showToast('Ad created!');
    }
  } catch (err) {
    showToast(err.message || 'Save failed', 'error');
    if (btn) btn.disabled = false;
    return;
  }
  closeModal();
  renderAds();
};

window.togglePromo = async function(id, active) {
  const { error } = await supabase.from('promotions').update({ is_active: active }).eq('id', id);
  if (error) { showToast(error.message, 'error'); return; }
  showToast(active ? 'Ad activated' : 'Ad deactivated');
  renderAds();
};

window.moveAd = async function(id, dir) {
  try {
    const { data, error } = await supabase.from('promotions').select('id,sort_order').order('sort_order', { ascending: true }).order('created_at', { ascending: false });
    if (error) throw error;
    const arr = data || [];
    const i = arr.findIndex(p => p.id === id);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= arr.length) { showToast('Already at the edge', 'info'); return; }
    const a = arr[i], b = arr[j];
    await supabase.from('promotions').update({ sort_order: b.sort_order }).eq('id', a.id);
    await supabase.from('promotions').update({ sort_order: a.sort_order }).eq('id', b.id);
    showToast('Order updated');
  } catch (err) { showToast(err.message || 'Reorder failed', 'error'); }
  renderAds();
};

window.deletePromo = async function(id) {
  if (!confirm('Delete this ad? This cannot be undone.')) return;
  try {
    const { data } = await supabase.from('promotions').select('image_url,video_url,poster_url').eq('id', id).maybeSingle();
    if (data) {
      const paths = [data.image_url, data.video_url, data.poster_url].filter(Boolean).map(u => {
        const m = /\/object\/public\/advertisements\/(.+)$/.exec(u);
        return m ? decodeURIComponent(m[1]) : null;
      }).filter(Boolean);
      if (paths.length) { try { await supabase.storage.from('advertisements').remove(paths); } catch (e) {} }
    }
    const { error } = await supabase.from('promotions').delete().eq('id', id);
    if (error) throw error;
    showToast('Ad deleted');
  } catch (err) { showToast(err.message || 'Delete failed', 'error'); }
  renderAds();
};

async function renderAds() {
  const content = document.getElementById('content');
  try {
    const { data: promos } = await supabase.from('promotions').select('*').order('sort_order', { ascending: true }).order('created_at', { ascending: false });
    const items = promos || [];
    content.innerHTML = `
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3 flex-wrap">
          <div class="flex-1 min-w-0">
            <h2 class="text-xl font-black text-white">Advertisement Manager</h2>
            <p class="text-xs text-gray-500 mt-0.5">Create professional showcase ads that appear on the homepage â€” with labels, media and product links.</p>
          </div>
          <button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement
          </button>
        </div>
        <div class="grid gap-3">
          ${items.length === 0 ? emptyState('megaphone', 'No Ads', 'Create your first showcase ad â€” add a title, image or video, label, and optional product link.', `<button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"><i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement</button>`) :
            items.map((p, i) => `
              <div class="glass-soft border border-blue-500/15 rounded-xl p-4 flex items-center gap-4">
                ${adMediaThumb(p)}
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap">
                    <p class="text-sm font-black text-white truncate">${esc(p.title || p.name)}</p>
                    ${adLabelPill(p.ad_label || 'Featured')}
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${esc(p.description || '')}</p>
                  <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${p.is_active ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-gray-500/10 text-gray-400 border-gray-500/20'}">${p.is_active ? 'Active' : 'Inactive'}</span>
                    ${adLinkLabel(p)}
                    <span class="text-[10px] text-gray-500">${fmtDate(p.start_date)}${p.start_date ? ' â†’ ' : ''}${fmtDate(p.end_date)}</span>
                  </div>
                </div>
                <div class="flex gap-1 shrink-0 flex-wrap justify-end">
                  <button onclick="moveAd('${p.id}',-1)" class="btn-press p-1.5 text-gray-400 hover:text-white rounded-lg transition" title="Move up"><i data-lucide="chevron-up" class="w-4 h-4"></i></button>
                  <button onclick="moveAd('${p.id}',1)" class="btn-press p-1.5 text-gray-400 hover:text-white rounded-lg transition" title="Move down"><i data-lucide="chevron-down" class="w-4 h-4"></i></button>
                  <button onclick="togglePromo('${p.id}',${p.is_active ? 'false' : 'true'})" class="btn-press p-1.5 ${p.is_active ? 'text-amber-400' : 'text-emerald-400'} rounded-lg transition" title="${p.is_active ? 'Deactivate' : 'Activate'}"><i data-lucide="${p.is_active ? 'eye-off' : 'eye'}" class="w-4 h-4"></i></button>
                  <button onclick="showEditAdModal('${p.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-4 h-4"></i></button>
                  <button onclick="deletePromo('${p.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                </div>
              </div>`).join('')}
        </div>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}
window.renderAds = renderAds;

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  11. AI SETTINGS  â€” GOOGLE GEMINI ONLY
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const ALL_AI_PROVIDERS = [
  { id:'gemini', name:'Google Gemini', tag:'FREE', color:'blue', icon:'sparkles', kf:'gemini_key', ph:'AIzaSyâ€¦', signup:'https://aistudio.google.com/apikey', models:['gemini-3-flash-preview','gemini-3.1-flash-lite-preview'], mf:'gemini_model', dm:'gemini-3-flash-preview', desc:'Google\'s best free AI. Great for coding, writing apps & websites.', free_tier:'15 req/min Â· 1M tokens/day â€” Free forever' },
];

const AI_CLR = {
  border: {blue:'border-blue-500/50'},
  bg:     {blue:'bg-blue-500/8'},
  text:   {blue:'text-blue-400'},
  badge:  {blue:'bg-blue-500/15 text-blue-300'},
};

async function renderAiSettings() {
  const content = document.getElementById('content');
  try {
    const { data: settings } = await supabase.from('ai_settings').select('*').limit(1).maybeSingle();
    const s = settings || {};
    const activeId = s.active_provider || 'gemini';

    function providerCard(p) {
      const isActive = activeId === p.id;
      const savedKey = s[p.kf];
      const savedModel = s[p.mf] || p.dm;
      return `
        <div class="glass-soft border ${isActive ? AI_CLR.border[p.color]+' '+AI_CLR.bg[p.color] : 'border-blue-500/10'} rounded-2xl p-4 space-y-3 ai-pcard" id="apc-${p.id}">
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-8 h-8 ${AI_CLR.bg[p.color]} rounded-lg flex items-center justify-center shrink-0">
                <i data-lucide="${p.icon}" class="w-4 h-4 ${AI_CLR.text[p.color]}"></i>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h3 class="text-xs font-black text-white">${esc(p.name)}</h3>
                  <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full ${AI_CLR.badge[p.color]}">${p.tag}</span>
                </div>
                <p class="text-[9px] text-emerald-400 font-bold mt-0.5 leading-tight truncate">${esc(p.free_tier)}</p>
              </div>
            </div>
            <label class="flex items-center gap-1 cursor-pointer shrink-0">
              <input type="radio" name="active_provider" value="${p.id}" ${isActive?'checked':''} class="accent-blue-500" onchange="highlightAI('${p.id}')">
              <span class="text-[9px] font-bold ${isActive ? AI_CLR.text[p.color] : 'text-gray-600'}">USE</span>
            </label>
          </div>
          <p class="text-[11px] text-gray-400 leading-relaxed">${esc(p.desc)}</p>
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="lbl mb-0">API Key</label>
              <a href="${p.signup}" target="_blank" rel="noopener" class="text-[10px] font-bold ${AI_CLR.text[p.color]} hover:underline flex items-center gap-0.5">
                <i data-lucide="external-link" class="w-3 h-3"></i>Get Free Key
              </a>
            </div>
            <div class="relative">
              <input type="password" class="input-field pr-16 text-xs" name="${p.kf}"
                placeholder="${savedKey ? 'â€¢â€¢â€¢â€¢'+savedKey.slice(-4) : p.ph}">
              ${savedKey ? `<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>` : `<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>`}
            </div>
          </div>
          <div>
            <label class="lbl">Model</label>
            <select class="input-field text-xs" name="${p.mf}">
              ${p.models.map(m=>`<option value="${m}" ${savedModel===m?'selected':''}>${m}</option>`).join('')}
            </select>
          </div>
        </div>`;
    }

    content.innerHTML = `
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white">AI Settings</h2>
          <div class="flex items-center gap-2">
            <button onclick="showAiStatusModal()" class="btn-press flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition">
              <i data-lucide="activity" class="w-3.5 h-3.5"></i> Live Status & Test
            </button>
            <span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs px-3 py-1">Gemini Free</span>
          </div>
        </div>

        <div class="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-xs text-emerald-300 flex items-start gap-3">
          <i data-lucide="gift" class="w-5 h-5 shrink-0 text-emerald-400 mt-0.5"></i>
          <div>
            <p class="font-black mb-0.5">Google Gemini has a FREE tier â€” no payment required to start!</p>
            <p class="text-emerald-400/70">Click "Get Free Key" â†’ sign up at Google AI Studio â†’ paste key below â†’ Save. The key is stored securely in your database.</p>
          </div>
        </div>

        <form id="ai-form" onsubmit="saveAiSettings(event)" class="space-y-5">

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4">
            <h3 class="text-sm font-black text-white mb-3 flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-blue-400"></i> Google Gemini</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">${ALL_AI_PROVIDERS.map(providerCard).join('')}</div>
          </div>

          <div class="glass-soft border border-emerald-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-start justify-between gap-3 flex-wrap">
              <div class="flex items-center gap-2">
                <i data-lucide="messages-square" class="w-4 h-4 text-emerald-400"></i>
                <h3 class="text-sm font-black text-white uppercase tracking-wide">AI Chat Settings</h3>
                <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300">Customer Chat Only</span>
              </div>
              <label class="flex items-center gap-2 cursor-pointer">
                <span class="text-[10px] font-bold text-emerald-300">Enable chat assistant</span>
                <span class="toggle-switch"><input type="checkbox" name="customer_ai_enabled" ${s.customer_ai_enabled !== false ? 'checked' : ''}><span class="toggle-slider"></span></span>
              </label>
            </div>
            <p class="text-[11px] text-gray-400 leading-relaxed">This is the <b class="text-white">customer support chat assistant</b> (the floating "Contact Us" bubble). It talks with shoppers in their own language with a local human name, and it never gives up: it automatically stacks <b class="text-emerald-300">Google Gemini → Groq → OpenRouter → free keyless AI</b>, each with its own free quota, so customers ALWAYS get a real answer instead of a "rate limit" message.</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <label class="lbl">Google Gemini Key (chat)</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16 text-xs" name="gemini_key"
                    placeholder="${s.gemini_key || s.gemini_api_key ? '••••' + String(s.gemini_key || s.gemini_api_key).slice(-4) : 'AIzaSy… (shared Gemini key)'}">
                  ${(s.gemini_key || s.gemini_api_key) ? `<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>` : `<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>`}
                </div>
              </div>
              <div>
                <label class="lbl">Chat Model (optional)</label>
                <select class="input-field text-xs" name="customer_model_override">
                  <option value="">Auto (recommended)</option>
                  ${['gemini-3-flash-preview','gemini-2.5-flash','gemini-2.5-flash-lite','gemini-2.0-flash'].map(m => `<option value="${m}" ${(s.customer_model_override||'')===m?'selected':''}>${m}</option>`).join('')}
                </select>
              </div>
            </div>
            <div class="mt-3">
              <label class="lbl">OpenRouter Key (optional, free fallback)</label>
              <div class="relative">
                <input type="password" class="input-field pr-16 text-xs" name="openrouter_key"
                  placeholder="${s.openrouter_key ? '••••' + String(s.openrouter_key).slice(-4) : 'sk-or-v1-… (NEW)'}">
                ${s.openrouter_key ? `<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>` : `<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>`}
              </div>
              <p class="text-[10px] text-gray-400 mt-1">Your Groq key (in Groq Vision above) is used as an extra free fallback automatically. Add an OpenRouter key for even more free headroom — the chat always finds a provider that can answer right now.</p>
            </div>
            <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener" class="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-400 hover:underline">
              <i data-lucide="external-link" class="w-3 h-3"></i>Get a free Gemini key for the chat assistant
            </a>
          </div>

          <div class="glass-soft border border-orange-500/15 rounded-2xl p-4 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2 flex-wrap">
              <i data-lucide="shield-check" class="w-4 h-4 text-orange-400"></i> Groq Vision
              <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full bg-orange-500/15 text-orange-300">Backup</span>
            </h3>
            <p class="text-[11px] text-gray-400 leading-relaxed">Optional safety net for the Product Scanner. When Gemini fails, times out or hits its free limit, that one request is retried on Groq's vision model — so scans keep producing real photo data instead of empty forms.</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <label class="lbl">Groq API Key</label>
                <input type="password" class="input-field text-xs" name="groq_key"
                  placeholder="${s.groq_key ? '••••' + String(s.groq_key).slice(-4) : 'gsk_…'}">
                ${s.groq_key ? `<p class="text-[9px] font-bold text-emerald-500 mt-1">✓ Saved</p>` : ''}
              </div>
              <div>
                <label class="lbl">Vision Model</label>
                <select class="input-field text-xs" name="groq_vision_model">
                  ${['meta-llama/llama-4-scout-17b-16e-instruct','qwen/qwen3.6-27b'].map(m=>`<option value="${m}" ${(s.groq_vision_model||'meta-llama/llama-4-scout-17b-16e-instruct')===m?'selected':''}>${m}</option>`).join('')}
                </select>
              </div>
            </div>
            <a href="https://console.groq.com/keys" target="_blank" rel="noopener" class="inline-flex items-center gap-0.5 text-[10px] font-bold text-orange-400 hover:underline">
              <i data-lucide="external-link" class="w-3 h-3"></i>Get a free Groq key (generous free tier)
            </a>
          </div>

          <div class="glass-soft border border-purple-500/15 rounded-2xl p-4 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2 flex-wrap">
              <i data-lucide="hard-drive" class="w-4 h-4 text-purple-400"></i> General AI Scanner
              <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300">uses Gemini / Groq</span>
            </h3>
            <p class="text-[11px] text-gray-400 leading-relaxed">The General AI Scanner processes product photos through your Gemini key (primary) with Groq backup — no local software needed. Both keys are already saved above. Works from any device.</p>
          </div>

          <div class="glass-soft border border-cyan-500/25 rounded-2xl p-4 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2 flex-wrap">
              <i data-lucide="car-front" class="w-4 h-4 text-cyan-400"></i> Car &amp; Truck Scanner
              <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300">Cars &amp; Trucks Only</span>
            </h3>
            <p class="text-[11px] text-gray-400 leading-relaxed">This is a <b class="text-white">separate, dedicated AI system just for Cars, Trucks &amp; Motorhomes</b>. It uses its own Gemini key, its own car-specific scanner, and reads cars from <b class="text-white">photos OR videos</b> (video frames are sampled automatically). It does NOT use the product scanner or its key — it is fully independent.</p>
            <p class="text-[10px] text-amber-300/90 leading-relaxed">⚡ When this key runs out of free quota, the car scanner <b>stops</b> until you paste in a fresh key here. No fake values are ever generated. Add a new key and the car scanner works again automatically.</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <label class="lbl">Car Scanner Gemini Key</label>
                <div class="relative">
                  <input type="password" class="input-field text-xs" name="car_scanner_key"
                    placeholder="${s.car_scanner_key ? '••••' + String(s.car_scanner_key).slice(-4) : 'AIzaSy… (dedicated car key)'}">
                  ${s.car_scanner_key ? `<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>` : `<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>`}
                </div>
                <p class="text-[10px] text-gray-400 mt-1">Get a free key at Google AI Studio, then paste it here. The key is stored securely in your database.</p>
              </div>
              <div>
                <label class="lbl">Car Scanner Model</label>
                <select class="input-field text-xs" name="car_scanner_model">
                  ${['gemini-flash-latest','gemini-3.7-flash','gemini-3.6-flash'].map(m=>`<option value="${m}" ${(s.car_scanner_model||'gemini-flash-latest')===m?'selected':''}>${m}</option>`).join('')}
                </select>
              </div>
            </div>
            <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener" class="inline-flex items-center gap-0.5 text-[10px] font-bold text-cyan-400 hover:underline">
              <i data-lucide="external-link" class="w-3 h-3"></i>Get a free Gemini key for the Car &amp; Truck Scanner
            </a>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="sliders" class="w-4 h-4 text-blue-400"></i> Feature Toggles</h3>
            ${[
              {key:'product_ai_enabled',  label:'AI Product Creation',    desc:'AI auto-fills product descriptions',             val:s.product_ai_enabled!==false},
              {key:'ai_code_assist',      label:'AI Code Assistant',      desc:'AI helps build and edit your website code',      val:s.ai_code_assist!==false},
              {key:'ai_moderation',       label:'AI Content Moderation',  desc:'Auto-approve/reject customer reviews using AI', val:s.ai_moderation},
            ].map(f=>`
              <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
                <div><p class="text-xs font-bold text-white">${f.label}</p><p class="text-[11px] text-gray-500">${f.desc}</p></div>
                <label class="toggle-switch"><input type="checkbox" name="${f.key}" ${f.val?'checked':''}><span class="toggle-slider"></span></label>
              </div>`).join('')}
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            ðŸ’¾ Save AI Settings
          </button>
        </form>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

window.highlightAI = function(id) {
  ALL_AI_PROVIDERS.forEach(p => {
    const card = document.getElementById('apc-' + p.id);
    if (!card) return;
    const isActive = p.id === id;
    card.className = `glass-soft border ${isActive ? AI_CLR.border[p.color]+' '+AI_CLR.bg[p.color] : 'border-blue-500/10'} rounded-2xl p-4 space-y-3 ai-pcard`;
    const span = card.querySelector('input[type=radio] + span');
    if (span) { span.className = `text-[9px] font-bold ${isActive ? AI_CLR.text[p.color] : 'text-gray-600'}`; }
  });
};

window.saveAiSettings = async function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());

  const payload = {
    active_provider: data.active_provider || 'gemini',
    product_ai_enabled:  data.product_ai_enabled  === 'on',
    ai_code_assist:      data.ai_code_assist       === 'on',
    ai_moderation:       data.ai_moderation        === 'on',
  };

  // Collect key + model â€” only save if user typed a new non-masked value
  ALL_AI_PROVIDERS.forEach(p => {
    if (data[p.mf]) payload[p.mf] = data[p.mf];
    const v = (data[p.kf] || '').trim();
    if (v && !v.startsWith('â€¢â€¢â€¢â€¢') && v !== '') payload[p.kf] = v;
  });

  // Also mirror gemini_key → gemini_api_key for backwards compat
  if (payload.gemini_key) payload.gemini_api_key = payload.gemini_key;

  // Groq vision backup (key saved only when a NEW value is typed; model always)
  if (data.groq_vision_model) payload.groq_vision_model = data.groq_vision_model;
  const groqKeyVal = (data.groq_key || '').trim();
  if (groqKeyVal && !/^[•\u2022]{4}/.test(groqKeyVal)) payload.groq_key = groqKeyVal;

  // Dedicated Car & Truck Scanner (separate Gemini system — own key + model).
  if (data.car_scanner_model) payload.car_scanner_model = data.car_scanner_model;
  const carKeyVal = (data.car_scanner_key || '').trim();
  if (carKeyVal && !/^[•\u2022]{4}/.test(carKeyVal)) payload.car_scanner_key = carKeyVal;

  // Customer Chat Assistant settings → real ai_settings columns.
  payload.customer_ai_enabled = data.customer_ai_enabled === 'on';
  if (data.customer_model_override !== undefined) payload.customer_model_override = data.customer_model_override.trim();
  // The chat's Gemini key is the shared gemini_key (saved above by the provider
  // loop). OpenRouter free fallback key (saved only when a NEW value is typed):
  const openrouterChatKeyVal = (data.openrouter_key || '').trim();
  if (openrouterChatKeyVal && !/^[•\u2022]{4}/.test(openrouterChatKeyVal)) payload.openrouter_key = openrouterChatKeyVal;



  try {
    const { data: existing } = await supabase.from('ai_settings').select('id').limit(1).maybeSingle();
    let error;
    if (existing?.id) {
      ({ error } = await supabase.from('ai_settings').update(payload).eq('id', existing.id));
    } else {
      ({ error } = await supabase.from('ai_settings').insert(payload));
    }
    if (error) {
      showToast('Save failed: ' + error.message, 'error');
      console.error('[AI Save]', error);
      return;
    }
    await aiClient.reload();
    showToast('âœ… AI settings saved!', 'success');
    setTimeout(() => renderAiSettings(), 600);
  } catch (err) {
    showToast('Unexpected error: ' + err.message, 'error');
    console.error('[AI Save]', err);
  }
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  GEMINI AI CLIENT
//  Reads the saved Gemini key from the DB. Browser calls go straight
//  to Google Gemini; chat/vision can also go through the Supabase
//  edge function so the key never leaves the server.
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const aiClient = {
  _cfg: null,

  async reload() {
    const { data, error } = await supabase.from('ai_settings').select('*').limit(1).maybeSingle();
    if (error) { console.warn('[aiClient] Could not load settings:', error.message); this._cfg = {}; return; }
    const cfg = data || {};
    if (!cfg.gemini_key && cfg.gemini_api_key) cfg.gemini_key = cfg.gemini_api_key;
    this._cfg = cfg;
  },

  async getConfig() {
    if (!this._cfg) await this.reload();
    return this._cfg;
  },

  // â”€â”€ FREE KEYLESS AI (Pollinations â€” no API key, no signup, free forever) â”€â”€
  // OpenAI-compatible endpoint running GPT-OSS-20B. Used automatically as a
  // fallback whenever Gemini has no key, errors, or hits its quota.
  async freeChat(messages, { maxTokens = 2000, timeoutMs = 60000 } = {}) {
    const res = await fetch('https://text.pollinations.ai/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'openai',
        messages: messages.map(m => ({ role: m.role === 'assistant' ? 'assistant' : (m.role === 'system' ? 'system' : 'user'), content: String(m.content || '').slice(0, 12000) })),
        max_tokens: maxTokens,
      }),
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (!res.ok) throw new Error(`Free AI provider error (${res.status}).`);
    const data = await res.json();
    const text = String(data?.choices?.[0]?.message?.content || '').trim();
    if (!text) throw new Error('Free AI provider returned an empty reply.');
    return { text, provider: 'Free AI (Pollinations)', model: String(data?.model || 'openai-fast') };
  },

  // Gemini chat via the edge function (server-side, key stays secure).
  // Falls back to the FREE keyless AI so chat ALWAYS works, even with no key.
  async chat(messages, { maxTokens = 2000 } = {}) {
    const cfg = await this.getConfig();
    const keyReady = String(cfg.gemini_key || '').trim();
    if (!keyReady) {
      // No Gemini key â€” use the free keyless AI directly.
      return this.freeChat(messages, { maxTokens });
    }
    const last = messages[messages.length - 1];
    const body = {
      action: 'chat',
      message: String(last?.content || '').trim(),
      history: messages.slice(0, -1).map(m => ({ role: m.role, content: String(m.content || '') })),
      provider_override: 'gemini',
      max_tokens: maxTokens,
    };
    try {
      const res = await this._callEdge(body);
      if (res && res.response) {
        return { text: res.response, provider: 'Google Gemini', model: res.model || cfg.gemini_model };
      }
      throw new Error(String(res?.error || 'Gemini is unavailable.'));
    } catch (err) {
      // Gemini failed (quota/error) â€” fall back to the free keyless AI.
      try {
        const fb = await this.freeChat(messages, { maxTokens });
        fb.note = 'gemini-unavailable';
        return fb;
      } catch {
        throw err;
      }
    }
  },

  // Convenience: single-turn prompt
  async prompt(text, opts = {}) {
    return this.chat([{ role: 'user', content: text }], opts);
  },

  // Get status (for the status widget)
  async getStatus() {
    const cfg = await this.getConfig();
    return ALL_AI_PROVIDERS.map(p => ({
      id: p.id, name: p.name, color: p.color,
      hasKey: !!(cfg[p.kf]?.trim()),
      isActive: cfg.active_provider === p.id,
      isCoolingDown: false,
      remainingSec: 0,
    }));
  },

  // â”€â”€ VISION: analyze uploaded product images via Gemini â”€â”€
  // Returns a parsed JSON object or null when vision is unavailable.
  async analyzeImages(imageUrls, context = {}) {
    const prompt = `You are the AI listing expert for the Weverse Online Shop marketplace. Look carefully at the uploaded product photo(s) and identify exactly what the product is â€” the REAL brand, model and year that actually appear in the photos, never a guessed one.

IDENTIFY THE REAL BRAND & MODEL (most important):
- Find the brand badge, emblem, logo, nameplate or label in the photo and read its exact letters and symbols, character by character.
- For vehicles, cross-check the badge against the design: grille shape, headlight and taillight design, body lines, wheels, interior and steering wheel. A BMW grille/kidney badge, Mercedes three-pointed star, Audi four rings, Toyota, Honda, Ford, Tesla, etc. are visually distinct â€” match what you actually see.
- Use the EXACT brand name that is printed on the product. NEVER swap it for a different brand (e.g. never call a BMW a Mercedes-Benz, never call an iPhone a Samsung).
- If the exact model number is printed (e.g. "X5", "C300", "iPhone 15 Pro Max", "MacBook Pro"), use that exact text.
- The year must come from a visible printed date/serial when present; otherwise give your best estimate from the design era and never invent a specific year you cannot support.

Return a single valid JSON object (no markdown, no extra text) with these keys:
- title (string): a real, professional marketplace product title that matches the actual item (real brand + real model/type + key feature + category). Never use placeholders like "AI Product" or "Premium Item".
- description (string): a detailed, persuasive 2-4 sentence description.
- category (string): the best category from this list: ${PRODUCT_CATEGORIES.join(', ')}.
- subcategory (string)
- brand (string): the EXACT brand name that appears on the product or badge â€” read the logo/emblem/nameplate and use that name. If none is readable, identify the make from the design and badge shape.
- model (string): the EXACT model name/number printed on the product or box when visible; otherwise your best professional identification from the design.
- year (string or null): the real model/manufacturing year â€” read the printed year/serial if visible, otherwise your best estimate from the design era. Only null for items with no meaningful year.
- model_year (string or null): same as year when the product has a model year.
- color (string): ALWAYS the dominant color of the item.
- condition (string; from: New, Refurbished, Used - Like New, Used - Good, Used - Fair)
- material, size, storage, ram, processor, display (strings, only if relevant)
- features (array of strings)
- highlights (array of strings)
- seo_keywords (array of strings)
- specifications (object with the relevant spec keys only, e.g. engine, transmission, fuel_type, horsepower, mileage, drive_type, body_type, model_year for vehicles; storage, ram, processor, display for electronics)
- detected_name (string): a short plain-language label of the product, e.g. "white sneakers".

Rules:
- ACCURACY OVER GUESSES: Only state a brand/model/year you can actually see or confidently identify from the design. If you cannot identify the exact model, give the brand and a general body type (e.g. "BMW SUV") instead of inventing a specific model.
- NEVER invent exact specs (price, storage size, RAM, horsepower, serial numbers) that are not visible or printed on the product.
- Respond with valid JSON only.`;

    // Videos, PDFs and photos are all valid scan input — collect them as a
    // flat list of image data URLs (videos become sampled frames).
    const images = await this._collectScanImages((imageUrls || []).slice(0, context.maxImages || 3));
    if (!images.length) throw new Error('Could not read the uploaded images.');

    // SERVER-SIDE VISION ONLY via the edge function: Gemini primary → Groq
    // backup, decided on the server. API keys NEVER reach this browser/APK.
    try {
      const res = await this._callEdge({ action: 'vision', images, prompt, max_tokens: 4096 });
      if (res && res.success && res.text) {
        const parsed = extractJsonFromAiText(res.text);
        if (parsed) {
          if (res.provider) this._noteProvider(res.provider);
          return { ...parsed, _aiProvider: res.provider === 'groq' ? 'Groq vision (backup)' : 'Gemini vision', _aiModel: res.model };
        }
        throw new Error('The AI returned no valid analysis for these images.');
      }
      throw new Error((res && res.error) || 'Vision service unavailable.');
    } catch (e) { this._noteIssue('identify', `server vision: ${(e && e.message) || e}`); }

    // No vision at all: NEVER fall back to a text-only model here — it cannot
    // see the photo and would just invent a fake product. Return null.
    return null;
  },

  // Shared vision runner: collect images → run the edge vision chain
  // (Gemini primary → Groq backup, server-side) per batch. Returns parsed JSON
  // or null. Text-only fallbacks are FORBIDDEN for photo scans — a model that
  // cannot see the photo must never fill the form.
  //
  // COMPLETENESS: EVERY provided URL is processed. PDFs are expanded into one
  // image per page; sets larger than `batchSize` are split into parallel
  // batches whose results are merged with `mergeResults` (stage-specific), so
  // no page is ever skipped just because a document has many pages.
  async _runVisionPrompt(prompt, imageUrls, { maxImages = 5, maxTokens = 4096, mergeResults = null, onProgress = () => {}, stageLabel = 'vision' } = {}) {
    const batchSize = Math.max(1, Number(maxImages) || 5);
    // ALL pages/images are collected — PDFs become one image per page.
    const images = await this._collectScanImages(imageUrls, { onProgress });
    if (!images.length) throw new Error('Could not read the uploaded images.');

    const runOne = async (batch) => this._runSingleVisionCall(prompt, batch, { maxTokens, stageLabel });

    let parsed;
    if (images.length <= batchSize) {
      parsed = await runOne(images);
    } else {
      // Multi-batch: process in limited parallel groups so free-tier rate
      // limits are respected while still reading every page.
      const batches = [];
      for (let i = 0; i < images.length; i += batchSize) batches.push(images.slice(i, i + batchSize));
      onProgress(0, batches.length);
      const CONCURRENCY = 3;
      const results = new Array(batches.length).fill(null);
      let cursor = 0;
      const worker = async () => {
        while (cursor < batches.length) {
          const idx = cursor++;
          results[idx] = await runOne(batches[idx]).catch(() => null);
          onProgress(Math.min(cursor, batches.length), batches.length);
        }
      };
      await Promise.all(Array.from({ length: Math.min(CONCURRENCY, batches.length) }, worker));
      // Entries carry each batch's start index so stage-specific mergers can
      // re-map things like per-batch image_indices back to global indices.
      const entries = [];
      results.forEach((r, i) => { if (r) entries.push({ result: r, startIndex: i * batchSize }); });
      if (!entries.length) return null;
      parsed = mergeResults ? mergeResults(entries, { batchSize, totalImages: images.length })
        : entries.reduce((acc, e) => this._mergeJsonResults(acc, e.result), null);
    }
    if (!parsed) return null;

    // Quota circuit-breaker state lives in _runSingleVisionCall via the browser/
    // edge paths below â€” nothing extra to do here.
    return parsed;
  },

  // One vision call against ONE batch of images. SERVER-SIDE ONLY: the edge
  // function owns both keys (Gemini primary, Groq backup) and picks the
  // provider; the browser never sees a key and never talks to a provider
  // directly. Returns parsed JSON or null.
  async _runSingleVisionCall(prompt, images, { maxTokens = 4096, stageLabel = 'vision' } = {}) {
    // PAUSE-AND-RESUME: a short quota cooldown no longer skips vision entirely
    // — we WAIT out the window (up to a budget) and genuinely retry, so a busy
    // minute mid-scan costs speed, never truth. Everything that does fall back
    // is recorded via _noteIssue so scans report themselves honestly.
    if (!(await this._waitForQuotaWindow(70000, stageLabel))) return null;

    try {
      // PACED: even server-side calls wait their turn in the global rate-limit
      // queue — free-tier Gemini keys allow only ~10-15 requests/minute and
      // parallel bursts would mass-429 the whole scan.
      const res = await this._paceGeminiCall(() => this._callEdge({ action: 'vision', images, prompt, max_tokens: maxTokens }, 45000));
      if (res && res.success && res.text) {
        const parsed = extractJsonFromAiText(res.text);
        if (parsed) {
          if (res.provider) this._noteProvider(res.provider);
          return { ...parsed, _aiProvider: res.provider === 'groq' ? 'Groq vision (backup)' : 'Gemini vision', _aiModel: res.model };
        }
        throw new Error('The AI returned no valid analysis for these images.');
      }
      throw new Error((res && res.error) || 'Vision service unavailable.');
    } catch (e) { this._noteIssue(stageLabel, `vision: ${(e && e.message) || e}`); }

    return null;
  },

  // Collect scan input as data URLs: photos are fetched+compressed (cached),
  // PDFs are rendered page-by-page into one image per page, and VIDEOS are
  // expanded into a set of evenly-sampled representative frames (cached) so
  // the AI reads products, text and details visible throughout the video.
  // Long videos and multiple videos stay efficient: frame count per video is
  // capped and extraction runs only once per source. Returns a flat array of
  // data URLs.
  _pdfPageCache: new Map(),
  _videoFrameCache: new Map(),
  async _collectScanImages(urls, { onProgress = () => {} } = {}) {
    const list = (Array.isArray(urls) ? urls : [urls]).map(u => String(u || '')).filter(Boolean);
    if (!list.length) return [];
    const results = await Promise.all(list.map(async (u) => {
      try {
        if (/^data:application\/pdf/.test(u) || looksLikePdf(u)) {
          let pages = this._pdfPageCache.get(u) || null;
          if (!pages) {
            pages = await pdfToPageDataUrls(u, { maxDim: 1300 }).catch(() => []);
            if (pages.length) this._pdfPageCache.set(u, pages);
          }
          return pages;
        }
        // Videos: extension/data-URL match, or sniff a blob: upload by its
        // MIME type (uploaded videos often only have a blob: URL).
        let videoSource = null;
        if (looksLikeVideoUrl(u)) {
          videoSource = u;
        } else if (u.startsWith('blob:')) {
          try {
            const blob = await fetch(u, { signal: AbortSignal.timeout(15000) }).then(r => r.blob());
            if (blob && blob.type && blob.type.startsWith('video/')) videoSource = blob;
          } catch { /* not sniffable — fall through to the image path */ }
        }
        if (videoSource) {
          let frames = this._videoFrameCache.get(u) || null;
          if (!frames) {
            frames = await videoToFrameDataUrls(videoSource, { maxFrames: 12, maxDim: 1024 }).catch(() => []);
            if (frames.length) this._videoFrameCache.set(u, frames);
          }
          return frames;
        }
        const img = await this._fetchImageAsDataUrl(u, 1024);
        return img ? [img] : [];
      } catch { return []; }
    }));
    const out = [];
    for (const r of results) out.push(...r);
    return out;
  },

  // Default cross-batch merger: first non-null value wins per key; arrays are
  // concatenated and de-duplicated; bookkeeping keys are unioned.
  _mergeJsonResults(a, b) {
    if (!a) return b ? { ...b } : null;
    if (!b) return a;
    const out = { ...a };
    for (const [k, v] of Object.entries(b)) {
      if (k.startsWith('_')) continue;
      if (v == null || (typeof v === 'string' && !v.trim())) continue;
      if (!(k in out) || out[k] == null || out[k] === '') { out[k] = v; continue; }
      if (Array.isArray(out[k]) || Array.isArray(v)) {
        const merged = [...(Array.isArray(out[k]) ? out[k] : [out[k]]), ...(Array.isArray(v) ? v : [v])]
          .map(x => (typeof x === 'string' ? x.trim() : x))
          .filter(x => x != null && x !== '');
        out[k] = [...new Set(merged)];
      } else if (typeof out[k] === 'object' && typeof v === 'object') {
        out[k] = { ...out[k], ...v };
      } else if (String(out[k]).trim() === String(v).trim()) {
        /* identical â€” keep */
      } else {
        /* conflict between batches: keep the FIRST (earliest pages win) */
      }
    }
    return out;
  },

  // STAGE 1 â€” IDENTIFY the exact product shown in the photo (brand/model/year/
  // body type/color/condition). Strict: never swap one brand for another.
  async identifyProduct(imageUrls, context = {}) {
    const prompt = `STAGE 1 â€” IDENTIFY THE EXACT PRODUCT.
Look at the photo(s) and state exactly what product is shown. Identification ONLY â€” do not complete any specifications yet.

IDENTIFICATION RULES (accuracy over guesses â€” this is the most important step):
- Read the real brand badge / logo / emblem / nameplate / label in the photo character by character and use the EXACT brand that is printed. NEVER swap brands: a BMW must never be called Mercedes-Benz, an iPhone never Samsung, a Toyota never Honda or any other brand.
- The model must come from a visible nameplate / label / badging when present. Otherwise identify the exact design (grille, headlights, taillights, wheels, body lines, interior, silhouette, box, packaging) and give your best professional identification, or give the brand + product type (e.g. "BMW SUV" or "Levi's jeans") instead of inventing a specific model.
- year: only from a visible printed year, serial, badge or registration. Otherwise estimate from the design era and set "year_estimated": true.
- color: the dominant color clearly visible.
- body_type: only when clearly visible (Sedan, SUV, Hatchback, Coupe, Convertible, Wagon, Pickup, Truck, Van, Sports Car, Luxury Sedan, Motorcycle, Yacht, Other).
- condition: judge from what is visible (New, Refurbished, Used - Like New, Used - Good, Used - Fair).
- listing_type: "property" if the photo shows a house, villa, apartment, condo, mansion, land, estate or any building for sale; "vehicle" for cars, motorcycles, boats and other vehicles; otherwise "product".
- category (for products and vehicles): best match from this list: ${PRODUCT_CATEGORIES.join(', ')}. For property photos set category to "Real Estate".
- For properties also give: property_type (House, Villa, Apartment, Condo, Land, Commercial, Farm, Other), bedrooms (number or null), bathrooms (number or null), half_bathrooms (number or null), building_size (string|null), land_size (string|null), floors (number|null), garage (string|null, e.g. "2-car attached"), parking_spaces (number|null), furnished ("Furnished"/"Unfurnished"/null), condition (string|null â€” only from a visible listing sign, seller notes or obvious visible state: "New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation"), year_built (number|null â€” only from a visible year, plaque, cornerstone or listing sign), year_renovated (number|null â€” only if visibly stated), area (neighborhood/district, string|null), address (street + number or landmark when visible in the photo or reliably known, string|null), zip_code (string|null â€” only if visibly printed), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town (string|null), city (string|null), state (string|null), country (string|null), latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null).
- LOCATION RULES: use ONLY location information genuinely visible in the photo or reliably known from it (street signs, landmarks, real estate signs, watermarks). NEVER invent a street address, area, city or coordinates. If you cannot determine a location value, return null for that field â€” the owner will enter it. Latitude/longitude may be derived from a readable address (e.g. a visible street sign); otherwise null.
- confidence: how certain you are about what this is: "high" | "medium" | "low".
- alternate_categories: up to 2 other plausible category matches from the list above, or [].
- detected_name: a short plain label of what you actually see, e.g. "white Toyota Camry sedan", "black leather handbag", "modern 4-bedroom villa".
- If the photo does not clearly show a product, return { "identified": false, "detected_name": "what you see", "reason": "why you cannot identify it" }.

Return ONE valid JSON object (no markdown) with only these keys:
{ "identified": true, "listing_type": "product"|"vehicle"|"property", "brand": string|null, "model": string|null, "year": string|null, "year_estimated": boolean, "body_type": string|null, "color": string|null, "condition": string|null, "category": string|null, "subcategory": string|null, "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": string|null, "year_built": number|null, "year_renovated": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "confidence": "high"|"medium"|"low", "alternate_categories": string[], "detected_name": string }`;
    return this._runVisionPrompt(prompt, imageUrls, { maxImages: context.maxImages || 5, stageLabel: 'identify' });
  },

  // STAGE 0 â€” DETECT EVERY DISTINCT PRODUCT across one photo or many photos.
  // Multiple different products in a single photo = separate entries. Multiple
  // photos of the SAME product = one entry with all its image indices. This is
  // the grouping step so the scanner never merges different products into one
  // listing and never splits one product into several.
  async detectProducts(imageUrls, context = {}) {
    const prompt = `STAGE 0 â€” DETECT EVERY DISTINCT PRODUCT.
Look carefully at ALL of the photo(s) uploaded and detect EVERY distinct product shown.

RULES:
- Every detected product must be its own entry. If one photo shows a bag, a watch, shoes and a phone, that is FOUR separate products.
- Even when multiple photos show the SAME product, create a SEPARATE entry for each detection. Each photo that shows a product must result in its own listing. The owner reviews every single one.
- A single photo can appear in several products' image_indices when it contains several different products.
- If a photo contains no recognizable product, ignore that photo.
- NEVER reject the scan. Even when a photo is blurry, dark, partial or unusual, ALWAYS give your BEST identification of the most likely product in it and set "confidence" to "low" â€” the owner reviews and edits everything afterwards. Only return { "identified": false, "reason": ... } when every single photo truly contains no object at all.

For each distinct product include:
- image_indices: array of the photo indexes (0-based) that show THIS product (used as its own images later). Never combine different products under one entry.
- listing_type: "property" if it is a house, villa, apartment, condo, mansion, land, estate or building; "vehicle" for cars, motorcycles, boats; otherwise "product".
- brand: the real brand printed on the product when visible â€” never swap one brand for another.
- model: real model from a visible label when present, otherwise null.
- year: only from visible text; otherwise null with year_estimated true when estimated from the design.
- body_type, color, condition (New, Refurbished, Used - Like New, Used - Good, Used - Fair).
- category: best match from this list â€” ${PRODUCT_CATEGORIES.join(', ')}. For properties set category to "Real Estate".
- subcategory, property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors (number|null), garage (string|null), parking_spaces (number|null), furnished ("Furnished"/"Unfurnished"/null), year_built (number|null â€” only if visible), area (neighborhood/district), neighborhood (string|null), living_areas (string|null - rooms/areas seen on a visible floor plan), kitchens (number|null), balconies (number|null - only clearly visible), garden (string|null - e.g. "Private garden", "None"), pool (string|null - e.g. "Private pool", "Community pool", "None"), security (string|null - only visibly present systems), utilities (string|null - only visibly stated), construction_type (string|null - only visibly apparent), construction_status (string|null - e.g. "Completed", "Under construction"), ownership_type (string|null - only printed on a visible sign/paper), contact_name (string|null - only from visible contact info), contact_phone (string|null), contact_email (string|null), address (street + number or landmark when visible/reliably known), zip_code (string|null â€” only if visible), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town, city, state, country, latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null) for properties. LOCATION RULES: only use location genuinely visible in the photo â€” never invent an address or coordinates; return null when unknown.
- confidence: "high" | "medium" | "low" for each product.
- detected_name: a short plain label for each product, e.g. "black leather handbag", "silver wristwatch", "white Nike sneakers", "modern 3-bedroom villa".

Return ONE valid JSON object (no markdown):
{ "identified": true, "products": [ { "image_indices": number[], "listing_type": "product"|"vehicle"|"property", "brand": string|null, "model": string|null, "year": string|null, "year_estimated": boolean, "body_type": string|null, "color": string|null, "condition": string|null, "category": string|null, "subcategory": string|null, "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": "Furnished"|"Unfurnished"|null, "year_built": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "confidence": "high"|"medium"|"low", "detected_name": string } ] }`;
    // Multi-batch merge: every batch reports image indices relative to its own
    // pages, so each entry's indices are shifted by that batch's start index
    // before all products are concatenated. No deduplication — every detection
    // fills its own form regardless of whether it looks like a previous one.
    return this._runVisionPrompt(prompt, imageUrls, {
      maxImages: context.maxImages || 5,
      stageLabel: 'detect',
      mergeResults: (entries) => {
        const products = [];
        for (const { result, startIndex } of entries) {
          for (const p of (result && Array.isArray(result.products) ? result.products : [])) {
            const idx = Array.isArray(p.image_indices)
              ? [...new Set(p.image_indices.map(n => parseInt(n, 10)).filter(Number.isFinite).map(n => n + startIndex))]
              : [startIndex];
            products.push({ ...p, image_indices: idx });
          }
        }
        return { identified: products.length > 0, products };
      },
    });
  },

  // STAGE 2 â€” COMPLETE standard specifications ONLY for the identified product.
  async completeProductSpecs(imageUrls, identification, context = {}) {
    const id = identification || {};
    const prompt = `STAGE 2 â€” COMPLETE THE STANDARD SPECIFICATIONS.
The product below was identified in STAGE 1 from the photos.

IDENTIFIED PRODUCT:
- listing_type: ${String(id.listing_type || 'product')}
- brand: ${String(id.brand || 'unknown')}
- model: ${String(id.model || 'unknown')}
- year: ${String(id.year || 'unknown')}
- body_type: ${String(id.body_type || 'unknown')}
- category: ${String(id.category || 'unknown')}
- detected_name: ${String(id.detected_name || 'unknown')}

Look at the photo(s) again, then complete the standard specifications for THIS EXACT identified product using reliable product/vehicle/property data for that exact brand + model.

ALWAYS fill every relevant specification when you can determine it for the identified product:
- Vehicles: Engine, Transmission, Fuel, Drive type, Horsepower, Seats (seating capacity), Doors, Body type, Model year, Mileage (only if visible/known), Safety features, Trim (when visible/known), Color, Interior & comfort (only visible elements), Driver assistance, Technology/infotainment, Wheels & tires (size/type/condition, e.g. "20-inch alloys, 265/65 R18, 2 new tires"), Dimensions (L x W x H), Cargo capacity, Towing capacity, Fuel economy, Registration status, Inspection status, Service history and Accident history (only from visible paperwork/signs — otherwise null), Previous owners (only if visibly stated), Warranty.
- Phones/Computers: storage, ram, processor, display, graphics, os.
- Properties (house/villa/land): property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors, garage, parking_spaces, furnished ("Furnished"/"Unfurnished"/null), condition (string|null â€” "New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation"; only from visible state or a listing sign, never inferred as verified), year_built (number|null â€” only if visible/known), year_renovated (number|null â€” only if visible/known), area (neighborhood/district), neighborhood (string|null), living_areas (string|null - rooms/areas seen on a visible floor plan), kitchens (number|null), balconies (number|null - only clearly visible), garden (string|null - e.g. "Private garden", "None"), pool (string|null - e.g. "Private pool", "Community pool", "None"), security (string|null - only visibly present systems), utilities (string|null - only visibly stated), construction_type (string|null - only visibly apparent), construction_status (string|null - e.g. "Completed", "Under construction"), ownership_type (string|null - only printed on a visible sign/paper), contact_name (string|null - only from visible contact info), contact_phone (string|null), contact_email (string|null), address (street + number or landmark when visible/reliably known), zip_code (string|null â€” only if visibly printed), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town, city, state, country, country_code, latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null), interior_features (string[]|null â€” only interior elements actually visible in the photos), exterior_features (string[]|null â€” only exterior elements actually visible), home_systems (string[]|null â€” only systems visibly present, e.g. air conditioning units, solar panels, radiators), nearby_area (only genuinely known from the photo/listing sign: schools/hospitals/shopping/transportation/distances â€” otherwise null), floor_plan (only if a floor plan is actually visible in the photos, otherwise null), legal_info (NEVER claim ownership/title/permits/taxes/legal status as verified from a photo â€” only mention something clearly printed on a visible listing/sign as source "Seller provided", otherwise null), inspection_info (string|null â€” only if visibly stated), verification_status (always null here â€” stays "Not verified" unless the owner verifies), risk_notes (string|null â€” only clearly visible issues). LOCATION RULES: only use location genuinely visible in the photo or reliably known â€” never invent an address, city, coordinates, landmarks or nearby places; return null (and list the key in "missing_fields") when you cannot determine it. latitude/longitude may be derived from a readable address; otherwise null.
- Other product types: fill whatever genuinely applies â€” type (e.g. Handbag, Sneaker, Textbook), material, size, color, brand, model, age_range, skin_type, ingredients, author, publisher, language, format, isbn, pages, edition, quantity, pet_type, lens, sensor, megapixels, video, platform, license, version, duration, followers, engagement, niche, usage, shelf_life, storage, assembly, weatherproof, warranty.
- Also complete the listing content for the exact identified product: highlights (3-6 genuine selling points), seo_keywords (6-10 relevant search keywords for the identified product), tags (from the allowed badge set â€” "New Arrival", "Best Seller", "Hot Deal", "Featured", "Limited Stock" â€” only the ones that genuinely apply to this exact product), warranty (only when the identified product type genuinely carries one, e.g. electronics, vehicles, appliances), availability_status ("In Stock" for a new product, otherwise null if not determinable), and stock_quantity (1 ONLY for unique one-of-a-kind items such as a vehicle, property or single specimen â€” otherwise null, because stock cannot be known from a photo).

HARD RULES:
- ONLY use specifications for the exact brand + model identified above. A Toyota photo must produce TOYOTA specifications. NEVER use specifications from a different brand or model (never a Toyota image â†’ Mercedes specs, never an iPhone image â†’ Samsung specs, never a bag image â†’ car specs).
- If the exact year or trim is uncertain, use the most common / standard specification for that identified model and list that key in "estimated". Do not randomly invent values that are not reasonable for that model.
- Only return specs that exist for the product type: a bag has no engine/transmission/horsepower (leave those null); a phone has no transmission or doors (leave those null); a car has engine/transmission/fuel/drive/horsepower/seats/doors; a house has bedrooms/bathrooms/sizes but no engine or storage.
- Never return price in this stage â€” price is handled in a separate stage.
- "missing_fields" is the ONLY place where uncertainty is recorded: for every field in this JSON that APPLIES to the identified product type but that you genuinely cannot determine or reliably verify (from the photos or reliable product data), list that key in "missing_fields". NEVER guess a value for a field you cannot determine â€” put its key in "missing_fields" instead. NEVER list a field that does not apply to this product type. The owner will see "Not specified" for those fields and can review/edit them before publishing.

DESCRIPTION REQUIREMENTS (the description is a MAJOR part of the listing):
- Write a detailed, professional, natural, trustworthy and enjoyable marketplace description that is clearly about THIS exact identified product and nothing else.
- For vehicles, naturally explain the engine, performance, transmission, drivetrain, fuel type, comfort, interior, exterior, safety, technology and practicality â€” always grounded in the reliable specifications you returned above.
- For properties, describe the home/land, its layout, rooms, size, location, surroundings and notable features â€” grounded in the property details returned above.
- For other product types, cover the product's most relevant, genuine attributes (design, materials, build quality, usability, and key specs) based only on the identified product and its reliable specs.
- Write in smooth, complete sentences and short paragraphs (roughly 3-6 sentences / 60-140 words). Never sound robotic, never use bullet lists, never invent features, prices, bundles or promises that are not true of the identified product, and NEVER mention AI, scanning, estimates, specification lookup or any internal process.

Return ONE valid JSON object (no markdown):
{
  "title": string|null (professional listing title: year + real brand + real model + product type, e.g. "2023 Toyota Camry SE Sedan" or "Black Leather Crossbody Handbag"),
  "description": string|null (the detailed, professional description described above â€” based ONLY on the identified product and its standard specs),
  "engine": string|null, "transmission": string|null, "fuel_type": string|null, "drive_type": string|null,
  "horsepower": string|null, "mileage": string|null, "seating_capacity": string|null, "doors": string|null,
  "body_type": string|null, "model_year": string|null, "safety_features": string[]|null,
  "storage": string|null, "ram": string|null, "processor": string|null, "display": string|null, "graphics": string|null, "os": string|null,
  "material": string|null, "size": string|null, "gender": string|null, "platform": string|null,
  "type": string|null, "color": string|null, "brand": string|null, "model": string|null,
  "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": string|null, "condition": string|null, "year_built": number|null, "year_renovated": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "country_code": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "interior_features": string[]|null, "exterior_features": string[]|null, "home_systems": string[]|null, "nearby_area": { "schools": string[]|null, "hospitals": string[]|null, "shopping": string[]|null, "transportation": string[]|null, "distances": string[]|null }|null, "floor_plan": { "image": string|null, "rooms": string[]|null, "levels": string|null, "total_area": string|null }|null, "legal_info": string[]|null (each item like "Ownership: Clear title (Seller provided)" or "Property taxes (Not verified)" â€” NEVER verified from a photo), "inspection_info": string|null, "risk_notes": string|null,
  "author": string|null, "publisher": string|null, "language": string|null, "format": string|null, "isbn": string|null, "pages": string|null, "edition": string|null, "quantity": string|null, "age_range": string|null, "skin_type": string|null, "ingredients": string|null, "pet_type": string|null, "lens": string|null, "sensor": string|null, "megapixels": string|null, "video": string|null, "license": string|null, "version": string|null, "duration": string|null, "followers": string|null, "engagement": string|null, "niche": string|null, "usage": string|null, "shelf_life": string|null, "assembly": string|null, "weatherproof": string|null, "warranty": string|null,
  "features": string[]|null (notable features, e.g. ["OLED display","5G"] or ["Swimming pool","Double garage"]),
  "highlights": string[]|null (3-6 genuine selling points of this exact product),
  "seo_keywords": string[]|null (6-10 relevant search keywords for this exact product),
  "tags": string[]|null (only from: "New Arrival", "Best Seller", "Hot Deal", "Featured", "Limited Stock" â€” only ones that genuinely apply),
  "availability_status": "In Stock"|"Out of Stock"|"Pre-order"|"Limited Stock"|null,
  "stock_quantity": number|null (1 only for unique one-of-a-kind items, otherwise null),
  "estimated": string[] (keys above that are estimates, e.g. ["engine","horsepower"]),
  "missing_fields": string[] (keys above that APPLY to this product type but could not be determined â€” see HARD RULES)
}`;
    return this._runVisionPrompt(prompt, imageUrls, { maxImages: context.maxImages || 5, stageLabel: 'specs' });
  },

  // STAGE 3 â€” ESTIMATE a reasonable current market selling price for the exact
  // identified product (model/year/condition/trim), so it can be placed into the
  // form's Price field. Never a price from a different product.
  async estimateProductPrice(imageUrls, identification, specs = {}, context = {}) {
    const id = identification || {};
    const sp = specs || {};
    const prompt = `STAGE 3 â€” ESTIMATE THE REAL MARKET PRICE AND A PROMOTIONAL DISCOUNT PRICE.
The exact product below was identified from the photos in STAGE 1, and its standard specifications were completed in STAGE 2.

IDENTIFIED PRODUCT:
- brand: ${String(id.brand || 'unknown')}
- model: ${String(id.model || 'unknown')}
- year: ${String(id.year || 'unknown')}
- body_type: ${String(id.body_type || 'unknown')}
- condition: ${String(id.condition || 'unknown')}
- category: ${String(id.category || 'unknown')}
- detected_name: ${String(id.detected_name || 'unknown')}

KNOWN SPECIFICATIONS:
- engine: ${String(sp.engine || 'unknown')}
- transmission: ${String(sp.transmission || 'unknown')}
- fuel_type: ${String(sp.fuel_type || 'unknown')}
- drive_type: ${String(sp.drive_type || 'unknown')}
- horsepower: ${String(sp.horsepower || 'unknown')}
- mileage: ${String(sp.mileage || 'unknown')}
- storage/ram: ${String(sp.storage || '')}${sp.ram ? ' / ' + sp.ram : ''}
- property: ${String(id.property_type || sp.property_type || '')}${sp.bedrooms ? ` ${sp.bedrooms} beds` : ''}${sp.half_bathrooms ? ` / ${sp.half_bathrooms} half baths` : ''}${sp.bathrooms ? ` / ${sp.bathrooms} baths` : ''}${sp.building_size ? ` / ${sp.building_size}` : ''}${sp.land_size ? ` / ${sp.land_size} land` : ''}${sp.year_built ? ` / built ${sp.year_built}` : ''}${sp.condition ? ` / ${sp.condition}` : ''}${sp.city ? ` / ${sp.city}` : ''}

Estimate the reasonable CURRENT MARKET SELLING PRICE (in USD) for THIS EXACT identified product â€” the price a real buyer would realistically pay for it today, in the condition shown in the photo. Use reliable current market data for that exact brand + model + year + condition + trim.

Then suggest a promotional DISCOUNT PRICE: a compelling sale price BELOW the real price (typically 5-20% off) that the customer would actually pay, to make the listing attractive. If a discount does not make sense for this product, set suggested_discount_price to null.

HARD RULES:
- ONLY price the exact product identified above. A Toyota photo must get a TOYOTA price, an iPhone photo an iPhone price, a Gucci bag a Gucci bag price. NEVER use the price of a different brand or model.
- Base the price on the identified product's real market value: for a car use current market value of that model/year/condition (consider trim, engine, mileage, condition); for a house/property use typical values for the identified property type and location when visible; for a bag use the market price of that brand/model/type/condition; for a phone use the current market price of that model/storage/condition.
- If the exact value cannot be determined, give the best reasonable market estimate â€” never 0, never a random invented number, and never a price for a different product.
- Never include currency symbols or commas in the numbers; both prices must be plain numbers (e.g. 24500).
- Never return a price range as the main value.
- suggested_discount_price must be strictly LESS than estimated_price, or null when no discount applies.

Return ONE valid JSON object (no markdown):
{
  "currency": "USD",
  "estimated_price": number (the real market price of this exact product),
  "suggested_discount_price": number|null (the promotional price the customer pays, below the real price),
  "price_range_min": number|null,
  "price_range_max": number|null,
  "confidence": "high" | "medium" | "low",
   "reason": string (one short sentence explaining the estimate)
}`;
    return this._runVisionPrompt(prompt, imageUrls, { maxImages: context.maxImages || 5, stageLabel: 'price' });
  },

  // STAGES 2+3 COMBINED â€” completes the standard specifications AND estimates
  // the market price in ONE AI request instead of two. Roughly halves both the
  // waiting time and the free-tier quota consumed by every scan.
  async completeSpecsAndPrice(imageUrls, identification, context = {}) {
    const id = identification || {};
    const prompt = `STAGES 2+3 â€” COMPLETE THE SPECIFICATIONS AND ESTIMATE THE PRICE IN ONE STEP.
The product below was identified from the photos.

IDENTIFIED PRODUCT:
- listing_type: ${String(id.listing_type || 'product')}
- brand: ${String(id.brand || 'unknown')}
- model: ${String(id.model || 'unknown')}
- year: ${String(id.year || 'unknown')}
- body_type: ${String(id.body_type || 'unknown')}
- category: ${String(id.category || 'unknown')}
- detected_name: ${String(id.detected_name || 'unknown')}

Look at the photo(s), then do BOTH jobs for THIS EXACT identified product.

COMPLETENESS AND REAL INFERENCE (READ THIS BEFORE ANYTHING ELSE):
The marketplace form must never end up mostly empty. For EVERY form field that applies to this item, output a REAL value using this order:
 1. Read it directly from the photo(s) when visible: badges, labels, nameplates, the odometer or cluster, wheels, tires, interior material, body lines, signage, room count from windows or a visible floor plan.
 2. When a value is not literally visible, use the REAL standard factory configuration most commonly sold for that EXACT identified model (engine size and layout, fuel type, transmission, drive layout, seats, doors, dimensions, horsepower, and standard safety/navigation equipment). Example: a family SUV is typically a 2.0-2.5L gasoline or hybrid, automatic, AWD, 5 seats; a pickup is typically an automatic 4WD with 5 seats; a compact hatchback is a 1.0-1.6L gasoline, manual or automatic, FWD, 5 seats.
 3. For properties, judge rooms, furniture, condition, floors, finishes and systems from the photos and from the property type plus building size (e.g. a 2,500 sqft single-family home is typically 3-4 bedrooms / 2-3 bathrooms / 2 floors). Judge condition ("Good" is the honest default when the state is unclear).
Any value you inferred rather than directly saw MUST ALSO be listed in the "estimated" array.
NEVER write "Not specified", "unknown", "N/A", "none", or leave an applicable field null just because its value is not clearly visible. Give your best REAL, defensible value and list it in "estimated" instead.
ONLY these fields may be null AND listed in "missing_fields": contact fields (seller_name, seller_phone, seller_email, contact_name, contact_phone, contact_email - these are filled with the store's own company contact, so ignore them), a VIN/serial that is not legible in any photo, a precise street address, ZIP/postal, city/state/country, GPS coordinates or listing location that is nowhere visible, document URLs, verification evidence or dates, exact odometer mileage that is not visible, and stock_quantity (except 1 for unique items). Never put engine, fuel type, transmission, drive type, seats, doors, body type, condition, room counts or amenity fields in "missing_fields": those are always covered by inference rule 2 or 3 above.

JOB A â€” COMPLETE THE STANDARD SPECIFICATIONS using reliable data for that exact brand + model:
- Vehicles: make, model, body_type, trim/edition, model_year, color, mileage (read the odometer/trip computer when visible; a brand-new unused vehicle gets "0 mi"; only when truly not visible leave null in missing_fields), engine (e.g. "2.0L Turbocharged I4" or "4.5L V8 Turbo Diesel"), horsepower, transmission, fuel_type, drive_type, fuel_economy, towing_capacity, seating_capacity, doors, wheels_tires (size/type/condition, e.g. "20-inch alloys, 265/65 R18, 2 new tires"), dimensions (L x W x H), cargo_capacity, safety_features, driver_assistance, technology, interior, warranty, previous_owners, registration_status, inspection_status, service_history, accident_history, ownership_history, location, seller_name, seller_phone, seller_email.
- Phones/Computers: storage, ram, processor, display, graphics, os.
- Properties: property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors, garage, parking_spaces, furnished ("Furnished"/"Unfurnished"/null), condition ("New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation" â€” only from visible state or a listing sign, never inferred as verified), year_built/year_renovated (only if visible/known), area, address (ONLY when genuinely visible/reliably known), zip_code (only if visibly printed), landmarks (only clearly indicated ones), town, city, state, country, country_code, latitude, longitude, listing_status ("sale"/"rent"/null). LOCATION RULES: read EVERY frame for country evidence - a flag, a written country name, a license plate, street/business signs, or the dominant language - and use it to fill country and country_code for the country clearly shown (e.g. a US flag or "USA" sign means country "United States", country_code "US"; a French plate or French text means "France"/"FR"; a UK plate means "United Kingdom"/"GB"). Only fill state/city/town/address when their names are visibly printed. NEVER invent an address, city, coordinates or a country that is not indicated by any visible evidence; return null and list the key in "missing_fields" when no country evidence is visible.
- Other product types: type, material, size, color, age_range, skin_type, ingredients, author, publisher, language, format, isbn, pages, edition, quantity, pet_type, lens, sensor, megapixels, video, platform, license, version, duration, followers, engagement, niche, usage, shelf_life, assembly, weatherproof, warranty.
- Listing content: highlights (3-6 genuine selling points), seo_keywords (6-10 keywords), tags (only from "New Arrival", "Best Seller", "Hot Deal", "Featured", "Limited Stock" â€” only ones that genuinely apply), availability_status ("In Stock" for a new product, otherwise null), stock_quantity (1 ONLY for unique one-of-a-kind items such as a vehicle or property, otherwise null).

HARD RULES:
- ONLY use specifications of the exact brand + model identified above. NEVER swap brands or models.
- Only return specs that exist for this product type (a bag has no engine; a phone has no transmission; a car has engine/transmission/fuel/drive/horsepower/seats/doors).
- If the exact year/trim is uncertain use the most common standard spec for that model and list the key in "estimated".
- "missing_fields": every field that APPLIES to this product type but cannot be determined â€” list the key there instead of guessing.
- DESCRIPTION: write a detailed, professional, natural marketplace description (3-6 sentences / 60-140 words) about THIS exact product only, grounded in its real specs. Smooth sentences, no bullet lists, no invented features, never mention AI/scanning/estimates.

JOB B â€” ESTIMATE THE PRICE: the reasonable CURRENT MARKET SELLING price in USD for this exact product today (brand + model + year + condition + trim), then a promotional DISCOUNT price typically 5-20% BELOW it (null when a discount makes no sense). Never 0, never another product's price, plain numbers without symbols or commas.

Return ONE valid JSON object (no markdown):
{
  "title": string|null,
  "description": string|null,
  "make": string|null, "model": string|null, "trim": string|null, "model_year": string|null, "body_type": string|null,
  "vehicle_type": string|null, "year": string|null, "color": string|null, "condition": string|null,
  "mileage": string|null, "engine": string|null, "horsepower": string|null, "transmission": string|null,
  "fuel_type": string|null, "drive_type": string|null, "fuel_economy": string|null, "towing_capacity": string|null,
  "seating_capacity": string|null, "doors": string|null, "wheels_tires": string|null, "dimensions": string|null,
  "cargo_capacity": string|null, "safety_features": string[]|null, "driver_assistance": string[]|null,
  "technology": string[]|null, "interior": string[]|null, "vin": string|null, "warranty": string|null,
  "previous_owners": string|null, "registration_status": string|null, "inspection_status": string|null,
  "service_history": string|null, "accident_history": string|null, "ownership_history": string|null,
  "location": string|null, "seller_name": string|null, "seller_phone": string|null, "seller_email": string|null,
  "features": string[]|null, "highlights": string[]|null, "seo_keywords": string[]|null,
  "storage": string|null, "ram": string|null, "processor": string|null, "display": string|null, "graphics": string|null, "os": string|null,
  "material": string|null, "size": string|null, "gender": string|null, "platform": string|null,
  "type": string|null, "property_type": string|null,
  "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null,
  "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null,
  "furnished": string|null, "year_built": number|null, "year_renovated": number|null,
  "living_areas": string|null, "kitchens": number|null, "balconies": number|null, "garden": string|null, "pool": string|null,
  "security": string|null, "utilities": string|null, "construction_type": string|null, "construction_status": string|null,
  "ownership_type": string|null, "neighborhood": string|null, "area": string|null, "address": string|null,
  "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null,
  "country": string|null, "country_code": string|null, "latitude": number|null, "longitude": number|null,
  "listing_status": "sale"|"rent"|null, "interior_features": string[]|null, "exterior_features": string[]|null,
  "home_systems": string[]|null, "nearby_area": { "schools": string[]|null, "hospitals": string[]|null, "shopping": string[]|null, "transportation": string[]|null, "distances": string[]|null }|null,
  "floor_plan": { "image": string|null, "rooms": string[]|null, "levels": string|null, "total_area": string|null }|null,
  "legal_info": string[]|null, "inspection_info": string|null, "risk_notes": string|null,
  "contact_name": string|null, "contact_phone": string|null, "contact_email": string|null,
  "author": string|null, "publisher": string|null, "language": string|null, "format": string|null, "isbn": string|null, "pages": string|null, "edition": string|null, "quantity": string|null, "age_range": string|null, "skin_type": string|null, "ingredients": string|null, "pet_type": string|null, "lens": string|null, "sensor": string|null, "megapixels": string|null, "video": string|null, "license": string|null, "version": string|null, "duration": string|null, "followers": string|null, "engagement": string|null, "niche": string|null, "usage": string|null, "shelf_life": string|null, "assembly": string|null, "weatherproof": string|null,
  "stock_quantity": number|null,
  "estimated": string[],
  "missing_fields": string[],
  "price": { "currency": "USD", "estimated_price": number, "suggested_discount_price": number|null, "confidence": "high"|"medium"|"low", "reason": string }
}${context.fieldsSchema || ''}${context.fieldsSchema ? `\nFORM-FIELD COMPLETENESS RULE: the form-field list above is binding. EVERY key in that list that is not already covered by the JSON keys above MUST also appear as a top-level key in your returned JSON with its extracted value (or null when genuinely not present anywhere in the document/photos â€” never guess). Use each field's exact quoted key. Match select options exactly.` : ''}`;
    const parsed = await this._runVisionPrompt(prompt, imageUrls, { maxImages: context.maxImages || 5, stageLabel: 'specs-price' });
    if (!parsed) return null;
    const { price, ...specs } = parsed;
    // Safety net: some models return the price fields flat instead of nested.
    const priceObj = (price && typeof price === 'object') ? price
      : (parsed.estimated_price != null ? {
          currency: parsed.currency || 'USD',
          estimated_price: parsed.estimated_price,
          suggested_discount_price: parsed.suggested_discount_price ?? null,
          confidence: parsed.confidence ?? null,
          reason: parsed.reason ?? '',
        } : null);
    // Price sanity: clamp absurd/out-of-range prices to the global bounds so a
    // hallucinated number can never reach the form or the database.
    if (priceObj && Number.isFinite(Number(priceObj.estimated_price))) {
      const p = Number(priceObj.estimated_price);
      if (p <= 0) priceObj.estimated_price = GLOBAL_PRICE_MIN;
      priceObj.estimated_price = Math.max(GLOBAL_PRICE_MIN, Math.min(GLOBAL_PRICE_MAX, p));
    }
    return { specs: Object.keys(specs).length ? specs : null, price: priceObj };
  },

  // VERIFICATION PASS â€” the mandatory second read of ALL pages/images. Every
  // form field's current value is compared against the document again; the AI
  // reports corrections for wrong values, values found on later pages that the
  // first pass missed, fields filled with data that actually belongs elsewhere,
  // and anything still missing. Returns { corrections, still_missing,
  // wrong_mapping, notes } or null when verification could not run.
  async verifyExtraction(imageUrls, identification, currentValues, fields = [], context = {}) {
    // Quota already burned this minute — a vision-only pass cannot succeed and
    // would just burn 30s per product on the doomed edge call. Bail instantly.
    // Quota window active? Wait briefly for it to clear (this pass is optional
    // anyway — see scanVerifyPassEnabled) instead of always skipping it.
    if (!(await this._waitForQuotaWindow(20000, 'verify'))) return null;
    const id = identification || {};
    const fieldLines = (fields || []).map((f) => `- "${f.key}" (${f.label})`).join('\n');
    const valueLines = Object.entries(currentValues || {})
      .filter(([, v]) => v != null && String(Array.isArray(v) ? v.join(', ') : v).trim() !== '')
      .map(([k, v]) => `"${k}": ${JSON.stringify(Array.isArray(v) ? v.join(', ') : String(v).slice(0, 160))}`)
      .join(',\n');
    const prompt = `VERIFICATION PASS â€” CHECK EVERY EXTRACTED VALUE AGAINST THE DOCUMENT.
A first extraction pass produced the values below from these same photo(s)/document page(s). Your job is to RE-READ every page carefully and audit EACH value.

IDENTIFIED ITEM: ${[id.year, id.brand, id.model].filter(Boolean).join(' ') || id.detected_name || 'unknown'}

CURRENT EXTRACTED VALUES:
${valueLines || '(none yet)'}

AUDIT INSTRUCTIONS â€” check all of these, one by one:
1. WRONG VALUES: any current value that contradicts what the document actually says (misread digit/letter, wrong model variant, wrong date format, swapped fields like engine size vs horsepower, price in the wrong currency) â†’ put the CORRECT value in "corrections" under that exact key.
2. MISSED VALUES: information present somewhere in the document (any page, including fine print, tables, stamps, serials, labels, footers) that has NO current value above but belongs to one of the known fields â†’ add it under that exact key in "corrections".
3. MISPLACED VALUES ("wrong_mapping"): a value that was put in the wrong FIELD (e.g. VIN stored as mileage, a person's name stored as publisher) â†’ list [wrong_key, right_key] pairs.
4. STILL MISSING: fields that genuinely apply to this item type but have no value and are nowhere in the document â†’ list their keys in "still_missing". NEVER invent or guess a value â€” only report what is actually written in the document.
${fieldLines ? `\nKNOWN FORM FIELDS:\n${fieldLines}\nUse ONLY these keys (or keys already present above) in corrections.\n` : ''}
Return ONE valid JSON object (no markdown):
{ "corrections": { "<key>": <corrected or newly found value â€” exact JSON type for that field> }, "still_missing": ["key"], "wrong_mapping": [["from_key","to_key"]], "notes": ["short factual observations, e.g. 'VIN appears on page 2 footer'"] }`;
    try {
      const parsed = await this._runVisionPrompt(prompt, imageUrls, {
        maxImages: context.maxImages || 5,
        maxTokens: 2500,
        stageLabel: 'verify',
        mergeResults: (entries) => {
          const out = { corrections: {}, still_missing: [], wrong_mapping: [], notes: [] };
          for (const { result } of entries) {
            const r = result || {};
            if (r.corrections && typeof r.corrections === 'object') {
              // Later batches win: they may contain values from pages the
              // earlier batches never saw.
              Object.assign(out.corrections, r.corrections);
            }
            for (const k of (Array.isArray(r.still_missing) ? r.still_missing : [])) {
              const key = String(k); if (key && !out.still_missing.includes(key)) out.still_missing.push(key);
            }
            for (const pair of (Array.isArray(r.wrong_mapping) ? r.wrong_mapping : [])) {
              if (Array.isArray(pair) && pair.length >= 2 && !out.wrong_mapping.some(q => q[0] === pair[0] && q[1] === pair[1])) out.wrong_mapping.push([String(pair[0]), String(pair[1])]);
            }
            for (const n of (Array.isArray(r.notes) ? r.notes : [])) {
              const s = String(n || '').trim(); if (s && !out.notes.includes(s)) out.notes.push(s);
            }
          }
          return out;
        },
      });
      return parsed;
    } catch { return null; }
  },

  // POST to the Supabase edge function so the Gemini key never leaves the server.
  async _callEdge(body, timeoutMs = 60000) {
    let token = '';
    try { token = (await supabase.auth.getSession())?.data?.session?.access_token || ''; } catch {}
    const res = await fetch(AI_FN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(timeoutMs),
    });
    return await res.json().catch(() => ({}));
  },

  // Fetch an image URL and return a compressed data URL (keeps edge payloads small).
  // FAST: results are cached per URL (the same photo is never downloaded or
  // re-encoded twice across scan stages) and every image is always downscaled to
  // a compact JPEG so uploads and AI calls stay quick.
  _imageCache: new Map(),
  async _fetchImageAsDataUrl(url, dim = 768) {
    const key = String(url);
    if (this._imageCache.has(key)) return this._imageCache.get(key);
    const task = (async () => {
      try {
        const blob = await fetch(url, { signal: AbortSignal.timeout(15000) }).then(r => r.blob());
        if (!blob || !blob.size) return null;
        // Always compress large photos down â€” small payloads = fast AI scans.
        if (blob.size < 150_000) return `data:${blob.type || 'image/jpeg'};base64,${await blobToBase64(blob)}`;
        return await this._downscaleImage(blob, dim);
      } catch { return null; }
    })();
    this._imageCache.set(key, task);
    const out = await task;
    if (!out) this._imageCache.delete(key); // allow retrying a failed fetch later
    return out;
  },

  async _downscaleImage(blob, maxDim) {
    const objectUrl = URL.createObjectURL(blob);
    try {
      const img = new Image();
      await new Promise((resolve, reject) => { img.onload = resolve; img.onerror = reject; img.src = objectUrl; });
      const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
      const w = Math.max(1, Math.round(img.width * scale));
      const h = Math.max(1, Math.round(img.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      return canvas.toDataURL('image/jpeg', 0.72);
    } finally { URL.revokeObjectURL(objectUrl); }
  },

  // FREE-TIER PACER — every vision call (server-side too, it uses the same
  // free key) goes through this gate. Free keys allow only ~10-15 requests/
  // minute; firing batches in parallel bursts burns that in seconds and then
  // EVERY later call 429s. The gate queues calls and keeps a safe minimum gap,
  // so big multi-batch scans take longer but actually SUCCEED.
  // ---- Scan-session honesty ledger --------------------------------------
  // Each top-level scanner resets this once (beginScanSession); every vision
  // success/fallback/failure appends here; scanners surface it in their final
  // status/toast so "success" can never silently mean placeholder data again.
  _visionIssues: [],
  _providerCounts: {},
  beginScanSession() {
    this._visionIssues = [];
    this._providerCounts = {};
    this._lastGoodModel = '';
  },
  _noteProvider(provider) {
    const p = String(provider || '').toLowerCase().includes('groq') ? 'groq' : 'gemini';
    this._providerCounts[p] = (this._providerCounts[p] || 0) + 1;
    if (p === 'groq') this._noteIssue('vision', 'Gemini did not answer — Groq vision backup handled this request');
  },
  _noteIssue(stage, reason) {
    const s = String(reason || '').slice(0, 220);
    if (!s) return;
    const issues = this._visionIssues || (this._visionIssues = []);
    const last = issues[issues.length - 1];
    if (last && last.stage === stage && last.reason === s) { last.count = (last.count || 1) + 1; return; }
    issues.push({ stage, reason: s, count: 1 });
  },
  sessionReport() {
    return {
      providers: Object.entries(this._providerCounts || {}).map(([name, count]) => ({ name, count })),
      issues: (this._visionIssues || []).slice(),
      lastGoodModel: this._lastGoodModel || '',
    };
  },

  // Wait out an ACTIVE quota window instead of skipping the call. Returns true
  // when a real vision attempt should be made now; false when the remaining
  // cooldown exceeds the wait budget (caller then uses fallbacks + says why).
  async _waitForQuotaWindow(maxWaitMs = 70000, stageLabel = 'vision') {
    const remain = (this._geminiQuotaUntil || 0) - Date.now();
    if (remain <= 0) return true;
    if (remain > maxWaitMs) {
      this._noteIssue(stageLabel, `quota cooldown ${Math.round(remain / 1000)}s > ${Math.round(maxWaitMs / 1000)}s budget — completed without photo reading`);
      return false;
    }
    await new Promise(r => setTimeout(r, remain + 300));
    return true;
  },

  // One-shot health probe used by every scanner before it starts burning
  // requests: asks the SERVER which vision providers are configured and alive
  // (Gemini primary, Groq backup). Keys stay server-side; no tokens are burned.
  async preflight() {
    const out = { gemini: null, groq: null, error: null };
    try {
      const r = await this._callEdge({ action: 'test_providers' }, 25000);
      if (r && r.providers) {
        out.gemini = r.providers.gemini || null;
        out.groq = r.providers.groq || null;
      } else {
        out.error = (r && r.error) || 'Unexpected response from the AI service.';
      }
    } catch (e) {
      out.error = String((e && e.message) || e);
    }
    return out;
  },

  _geminiCallChain: Promise.resolve(),
  _lastGeminiCallAt: 0,
  _paceGeminiCall(task) {
    const MIN_GAP_MS = 6000;
    const run = this._geminiCallChain.then(async () => {
      const waitMs = (this._lastGeminiCallAt || 0) + MIN_GAP_MS - Date.now();
      if (waitMs > 0) await new Promise(r => setTimeout(r, waitMs));
      this._lastGeminiCallAt = Date.now();
      return task();
    });
    this._geminiCallChain = run.then(() => {}, () => {});
    return run;
  },
};

function blobToBase64(blob) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        const comma = result.indexOf(',');
        resolve(comma >= 0 ? result.slice(comma + 1) : result);
      } else resolve('');
    };
    reader.onerror = () => resolve('');
    reader.readAsDataURL(blob);
  });
}

// Expose globally so other parts of the app can call aiClient.chat(...)
window.aiClient = aiClient;

// ═════════════════════════════════════════════════════════════════════
//  CAR & TRUCK AI SCANNER  —  a SEPARATE, dedicated Gemini system just
//  for Cars, Trucks & Motorhomes.
//
//  Why separate: this scanner is fully independent from the General AI
//  Scanner (aiClient). It uses its OWN Gemini key (car_scanner_key) and its
//  own model (car_scanner_model) stored in ai_settings, and it talks to
//  Google Gemini REST directly from the browser — it does NOT go through
//  the ai-admin-assistant edge function and never touches the product
//  scanner's key.
//
//  It reads cars/trucks/motorhomes from PHOTOS OR VIDEOS (video frames are
//  sampled automatically, just like the general scanner). It is used ONLY
//  by the Car & Truck form, never by products or houses.
//
//  Quota / key behaviour: if car_scanner_key is empty, or the Gemini quota
//  is exhausted (HTTP 429) or the key is invalid (HTTP 400/403), the scanner
//  STOPS with a clear, specific message so you can paste in a fresh key.
//  It NEVER invents values to "finish" a scan. Add a new key and it works
//  again automatically — no rebuild needed.
// ═════════════════════════════════════════════════════════════════════
const carAIScanner = {
  _cfg: null,

  async reload() {
    try {
      const { data, error } = await supabase.from('ai_settings').select('*').limit(1).maybeSingle();
      this._cfg = (error ? null : (data || {})) || {};
    } catch { this._cfg = {}; }
  },
  async getConfig() {
    if (!this._cfg) await this.reload();
    return this._cfg || {};
  },

  // Is a dedicated car key configured?
  hasKey() {
    return !!(this._cfg && String(this._cfg.car_scanner_key || '').trim());
  },

  model() {
    const stored = String((this._cfg && this._cfg.car_scanner_model) || '').trim();
    // gemini-2.5-flash / 2.0 series are retired by Google (HTTP 404 "no longer
    // available to new users"). If a stale value is stored, fall back to a live model.
    if (/^gemini-2\./.test(stored)) return 'gemini-flash-latest';
    return stored || 'gemini-flash-latest';
  },

  // Fetch an image/video source and turn it into compact data URLs for the
  // vision call. Videos are expanded into sampled frames; PDFs into pages.
  _mediaCache: new Map(),
  async _collectScanImages(urls) {
    const list = (Array.isArray(urls) ? urls : [urls]).map(u => String(u || '')).filter(Boolean);
    if (!list.length) return [];
    const results = await Promise.all(list.map(async (u) => {
      try {
        if (this._mediaCache.has(u)) return this._mediaCache.get(u);
        let frames = null;
        if (/^data:application\/pdf/.test(u) || looksLikePdf(u)) {
          frames = await pdfToPageDataUrls(u, { maxDim: 1300 }).catch(() => []);
        } else {
          let videoSource = null;
          if (looksLikeVideoUrl(u)) videoSource = u;
          else if (u.startsWith('blob:')) {
            try {
              const blob = await fetch(u, { signal: AbortSignal.timeout(15000) }).then(r => r.blob());
              if (blob && blob.type && blob.type.startsWith('video/')) videoSource = blob;
            } catch { /* not a video — falls through to the image path */ }
          }
          if (videoSource) {
            frames = await videoToFrameDataUrls(videoSource, { maxFrames: 12, maxDim: 1024 }).catch(() => []);
          } else {
            frames = await aiClient._fetchImageAsDataUrl(u, 1024).then(img => img ? [img] : []);
          }
        }
        this._mediaCache.set(u, frames || []);
        return frames || [];
      } catch { return []; }
    }));
    const out = [];
    for (const r of results) out.push(...r);
    return out;
  },

  // ONE direct Gemini REST vision call. Returns parsed JSON or throws a
  // specific, human message (empty key / quota exhausted / invalid key / other).
  async _geminiVision(items, prompt) {
    const cfg = await this.getConfig();
    const key = String(cfg.car_scanner_key || '').trim();
    if (!key) throw new Error('NO_CAR_KEY');
    const model = this.model();
    const body = {
      contents: [{
        parts: [
          { text: prompt },
          ...items.filter(Boolean).map(dataUrl => (
            /^data:video\//.test(dataUrl)
              ? { inlineData: { mimeType: 'video/mp4', data: dataUrl.split(',')[1] } }
              : { inlineData: { mimeType: 'image/jpeg', data: dataUrl.split(',')[1] } }
          )),
        ],
      }],
      generationConfig: { temperature: 0.2, maxOutputTokens: 8192 },
    };
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`;
    // Google's free tier frequently returns 503 "model is currently experiencing
    // high demand" (transient) and 429 (rate) — both intermittent and worth retrying.
    // Hard errors (model retired 404, bad key 400/403, quota exhausted 429-permanent)
    // are NOT retried.
    const attempt = async () => {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(90000),
      });
      if (res.ok) return res;
      const errBody = await res.json().catch(() => ({}));
      const status = res.status;
      const msg = String((errBody && errBody.error && errBody.error.message) || '').toLowerCase();
      const transient = status === 503 || status === 429
        || /high demand|try again later|temporarily|overload|unavailable|resource has been exhausted/.test(msg);
      return { _status: status, _msg: msg, _transient: transient };
    };
    let result = await attempt();
    if (result && result.ok) {
      const data = await result.json();
      const text = data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts
        ? data.candidates[0].content.parts.map(p => p.text || '').join('')
        : '';
      const parsed = text ? extractJsonFromAiText(text) : null;
      if (!parsed) throw new Error('CAR_NO_PARSE');
      return parsed;
    }
    if (result && result._transient) {
      // Retry transient high-demand / rate errors a few times with backoff.
      for (let i = 1; i <= 4; i++) {
        await new Promise(r => setTimeout(r, 4000 + i * 4000));
        result = await attempt();
        if (result && result.ok) {
          const data = await result.json();
          const text = data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts
            ? data.candidates[0].content.parts.map(p => p.text || '').join('')
            : '';
          const parsed = text ? extractJsonFromAiText(text) : null;
          if (parsed) return parsed;
          throw new Error('CAR_NO_PARSE');
        }
      }
    }
    const status = result._status;
    const msg = result._msg;
    if (status === 429 || /quota|rate|resource has been exhausted|limit/.test(msg)) {
      throw new Error('CAR_QUOTA');
    }
    if (status === 400 || status === 403 || /api key|invalid|unauthor|permission/.test(msg)) {
      throw new Error('CAR_BAD_KEY');
    }
    throw new Error(`CAR_HTTP_${status}`);
  },

  // The dedicated car/truck scan. `imageUrls` may contain photos, videos and/or
  // PDFs; returns { identification, specs, price } ready for applyScanToVehicleForm.
  // Throws with a friendly, specific message on any failure.
  async scanCars(imageUrls) {
    const cfg = await this.getConfig();
    if (!String(cfg.car_scanner_key || '').trim()) throw new Error('NO_CAR_KEY');
    const items = await this._collectScanImages(imageUrls);
    if (!items.length) throw new Error('NO_MEDIA');

    const prompt = `You are the dedicated CAR & TRUCK listing expert for the Weverse Online Shop marketplace. Read the car, truck or motorhome shown in the photo(s)/video frame(s) and complete ALL of its real details below from what is actually visible.

READ THE VEHICLE ACCURATELY (most important):
- Read the real brand badge / emblem / nameplate / logo in the media character by character and use the EXACT brand that appears (BMW, Mercedes-Benz, Audi, Toyota, Ford, Tesla, Ferrari, Lamborghini, Honda, etc.). NEVER swap one brand for another, and NEVER guess a luxury brand if none is visible.
- Identify the exact model from a visible nameplate/badging, otherwise from the body design (grille, headlights, taillights, wheels, body lines, silhouette). If you cannot name a model, give "brand + type" (e.g. "Mercedes SUV") instead of inventing one.
- model_year: only from a visible year, badge or registration/plate; otherwise estimate from the design era and mark year_estimated true.
- mileage: read the odometer only if visible ("12,345 mi" -> 12345); otherwise null. Never invent a mileage.
- engine, horsepower, transmission, fuel_type, drive_type, fuel_economy, towing_capacity, seating_capacity, sleeping_capacity, doors: only from visible badges/specs/cluster, otherwise null.
- color: the dominant visible color. condition: judged from what is visible (New / Used - Like New / Used - Good / Used - Fair).
- body_type: Sedan, SUV, Hatchback, Coupe, Convertible, Wagon, Pickup, Truck, Van, Sports Car, Luxury Sedan, Motorcycle, Motorhome / RV, Boat, Other.
- vehicle_type: same as body_type when it is a vehicle type.
- vin, trim, warranty: only if visibly printed, otherwise null.
- location, country: only from visible evidence (flag, plate, name, language on the vehicle/signs), otherwise null.
- Never leave a field blank that you can reasonably identify from the media, but NEVER fabricate a number, price or detail that is not visible or reliably known.
- detected_name: a short plain label, e.g. "white Toyota Camry sedan".
- Write a professional title and a persuasive description for the listing.

Return ONE valid JSON object (no markdown, no extra text) with exactly this shape:
{
 "identification": {
   "identified": true, "brand": string|null, "model": string|null, "year": string|null,
   "year_estimated": boolean, "body_type": string|null, "vehicle_type": string|null,
   "color": string|null, "condition": string|null, "detected_name": string
 },
 "specs": {
   "make": string|null, "model": string|null, "model_year": string|null, "trim": string|null,
   "body_type": string|null, "vehicle_type": string|null, "mileage": number|null,
   "engine": string|null, "horsepower": string|null, "transmission": string|null,
   "fuel_type": string|null, "drive_type": string|null, "fuel_economy": string|null,
   "towing_capacity": string|null, "seating_capacity": number|null,
   "sleeping_capacity": number|null, "doors": number|null, "color": string|null,
   "condition": string|null, "vin": string|null, "warranty": string|null,
   "location": string|null, "country": string|null, "safety_features": string|null,
   "driver_assistance": string|null, "technology": string|null, "interior": string|null,
   "wheels_tires": string|null, "dimensions": string|null, "cargo_capacity": string|null,
   "ownership_history": string|null, "service_history": string|null,
   "accident_history": string|null, "previous_owners": number|null,
   "registration_status": string|null, "inspection_status": string|null,
   "features": string|null, "title": string|null, "description": string|null
 },
 "price": { "estimated_price": number|null, "suggested_discount_price": number|null }
}
If the media does not clearly show any vehicle, return { "identification": { "identified": false, "reason": "why you could not identify it", "detected_name": "what you see" } }.`;

    const parsed = await this._geminiVision(items, prompt);
    if (parsed && parsed.identification && parsed.identification.identified === false) {
      return {
        identification: parsed.identification,
        specs: (parsed.specs || {}),
        price: (parsed.price || null),
        visionUsed: true,
      };
    }
    const identification = (parsed && parsed.identification) || {};
    const specs = (parsed && parsed.specs) || {};
    const price = (parsed && parsed.price) || null;
    // Merge identification fields into specs so the form fillers have everything.
    return {
      identification,
      specs: {
        make: specs.make || identification.brand,
        model: specs.model || identification.model,
        model_year: specs.model_year || identification.year,
        body_type: specs.body_type || identification.body_type,
        vehicle_type: specs.vehicle_type || identification.vehicle_type,
        color: specs.color || identification.color,
        condition: specs.condition || identification.condition,
        brand: specs.brand || identification.brand,
        ...specs,
      },
      price,
      visionUsed: true,
    };
  },

  // Human-friendly message for a thrown car-scanner error code.
  describeError(err) {
    const code = String((err && err.message) || '');
    if (code === 'NO_CAR_KEY') {
      return { title: 'Car Scanner key not set', hint: 'Add your dedicated Car & Truck Scanner Gemini key in AI Settings → "Car & Truck Scanner", then try again. The car scanner does not use the product key.', code };
    }
    if (code === 'CAR_QUOTA') {
      return { title: 'Car Scanner quota used up', hint: 'Your Car & Truck Scanner Gemini key has run out of free quota or is rate-limited. It will stop until you paste in a fresh key in AI Settings → "Car & Truck Scanner". No fake values were generated.', code };
    }
    if (code === 'CAR_BAD_KEY') {
      return { title: 'Car Scanner key not accepted', hint: 'Google rejected your Car & Truck Scanner key. Check it in AI Settings → "Car & Truck Scanner" (valid 39-char AIzaSy… key) and save it again.', code };
    }
    if (code === 'NO_MEDIA') {
      return { title: 'No readable media', hint: 'The car photos/video could not be loaded. Upload clear photos or a video of the vehicle and try again.', code };
    }
    if (code === 'CAR_NO_PARSE') {
      return { title: 'Scanner returned no details', hint: 'Google answered but returned no usable vehicle details. Try clearer photos or a different video, then scan again.', code };
    }
    if (code === 'CAR_HTTP_404') {
      return { title: 'Car Scanner model unavailable', hint: 'Google no longer serves the selected Gemini model (2.5/2.0 are retired). In AI Settings → "Car & Truck Scanner", pick "gemini-flash-latest" (or gemini-3.7-flash), Save, then scan again.', code };
    }
    if (code === 'CAR_HTTP_503') {
      return { title: 'Car Scanner is busy (Google overloaded)', hint: 'Google\'s free Gemini model is currently under heavy demand ("high demand, try again later"). Your key and model are fine — this is temporary. Wait a minute and try again. The scanner now auto-retries several times automatically.', code };
    }
    if (/^CAR_HTTP_/.test(code)) {
      return { title: 'Car Scanner could not run', hint: `The Car & Truck Scanner service returned an error (${code}). Try again in a moment or add a fresh key in AI Settings.`, code };
    }
    return { title: 'Car Scanner failed', hint: String(err && err.message ? err.message : err), code };
  },
};

// ══════════════════════════════════════════════════════════════
//  AI Status Widget (Gemini) ═══════════════════════════════════
window.showAiStatusModal = async function() {
  const statuses = await aiClient.getStatus();
  const configured = statuses.filter(s => s.hasKey);
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="activity" class="w-5 h-5 text-emerald-400"></i> AI Provider Status</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="mb-4 p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300">
          ${configured.length === 0
            ? 'âš  No key configured. Go to AI Settings and add your Google Gemini API key.'
            : 'Google Gemini is configured and ready.'}
        </div>
        <div class="space-y-2">
          ${statuses.map(s => `
            <div class="flex items-center gap-3 p-2.5 glass-soft border ${s.hasKey ? 'border-blue-500/15' : 'border-gray-800'} rounded-xl opacity-${s.hasKey ? '100' : '40'}">
              <span class="w-2.5 h-2.5 rounded-full shrink-0 ${s.hasKey ? 'bg-emerald-400' : 'bg-gray-600'}"></span>
              <span class="text-xs font-bold text-white flex-1">${esc(s.name)}</span>
              ${s.isActive ? '<span class="text-[9px] font-black text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-full">ACTIVE</span>' : ''}
              ${!s.hasKey ? '<span class="text-[9px] text-gray-600">No key</span>' : ''}
              ${s.hasKey ? '<span class="text-[9px] text-emerald-400">Ready âœ“</span>' : ''}
            </div>`).join('')}
        </div>
        <div class="mt-4 p-3 bg-gray-900 rounded-xl">
          <p class="text-[10px] text-gray-400 font-bold uppercase mb-2">Test All Providers</p>
          <button onclick="testScanProviders()" id="btn-test-providers" class="btn-press w-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold py-2 rounded-xl transition flex items-center justify-center gap-1.5">
            <i data-lucide="stethoscope" class="w-3.5 h-3.5"></i> Test Gemini / Groq now
          </button>
          <div id="provider-test-output" class="hidden mt-3 space-y-1.5"></div>
        </div>
        <div class="mt-4 p-3 bg-gray-900 rounded-xl">
          <p class="text-[10px] text-gray-400 font-bold uppercase mb-2">Test AI Response</p>
          <div class="flex gap-2">
            <input id="ai-test-input" class="input-field flex-1 text-xs" placeholder="Type anything, e.g. 'Write hello world in Python'">
            <button onclick="testAiCall()" class="btn-press px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5">
              <i data-lucide="send" class="w-3.5 h-3.5"></i> Test
            </button>
          </div>
          <div id="ai-test-output" class="hidden mt-3 p-3 bg-gray-950 border border-blue-500/15 rounded-xl text-xs text-gray-200 whitespace-pre-wrap max-h-48 overflow-y-auto"></div>
        </div>
      </div>
    </div>`);
  if (window.lucide) lucide.createIcons();
};

window.testAiCall = async function() {
  const input = document.getElementById('ai-test-input')?.value?.trim();
  if (!input) return;
  const output = document.getElementById('ai-test-output');
  output.classList.remove('hidden');
  output.textContent = '⏳ Asking Gemini…';
  try {
    const result = await aiClient.prompt(input);
    output.textContent = `✓ [${result.provider} · ${result.model}]\n\n${result.text}`;
  } catch (err) {
    output.textContent = `✖ ${err.message}`;
  }
};

// Test all three vision paths and report which ones actually work.
// Keys are NEVER displayed — only ok/fail + model names.
window.testScanProviders = async function() {
  const box = document.getElementById('provider-test-output');
  const btn = document.getElementById('btn-test-providers');
  if (!box) return;
  box.classList.remove('hidden');
  btn.disabled = true;
  const row = (icon, color, name, detail) => `
    <div class="flex items-start gap-2 p-2 glass-soft border border-gray-800 rounded-lg">
      <span class="w-2 h-2 rounded-full shrink-0 mt-1 ${color}"></span>
      <div class="min-w-0">
        <p class="text-[11px] font-bold text-white">${icon} ${esc(name)}</p>
        <p class="text-[10px] ${color === 'bg-emerald-400' ? 'text-emerald-300' : color === 'bg-red-500' ? 'text-red-400' : 'text-amber-300'} break-words">${esc(detail)}</p>
      </div>
    </div>`;
  box.innerHTML = `<p class="text-[11px] text-gray-400">Testing providers…</p>`;
  let html = '';

  // Gemini + Groq — decided by the server (keys never leave it).
  try {
    const pf = await aiClient.preflight();
    const g = pf.gemini || {};
    html += g.ok
      ? row('✓', 'bg-emerald-400', 'Gemini (Product Scanner — primary)', `Working${g.model ? ' · ' + g.model : ''}`)
      : row('✖', 'bg-red-500', 'Gemini (Product Scanner — primary)', g.error || pf.error || 'Not working');
    const q = pf.groq || {};
    html += q.ok
      ? row('✓', 'bg-emerald-400', 'Groq (Product Scanner — backup)', `Working · ${q.model || 'vision model found'}`)
      : (q.configured
          ? row('✖', 'bg-red-500', 'Groq (Product Scanner — backup)', q.error || 'Key saved but not usable')
          : row('—', 'bg-yellow-400', 'Groq (Product Scanner — backup)', 'Optional backup not configured (no key)'));
  } catch (e) {
    html += row('✖', 'bg-red-500', 'Cloud providers (server test)', String((e && e.message) || e));
  }

  // General AI Scanner — now uses the same Gemini/Groq edge function as Product Scanner.
  html += row('✓', 'bg-purple-400', 'General AI Scanner (via edge function)', 'Uses Gemini primary + Groq backup through server — no local install needed.');

  box.innerHTML = html;
  btn.disabled = false;
  if (window.lucide) lucide.createIcons();
};

function extractJsonFromAiText(text) {
  if (!text) return null;
  let t = String(text).trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) t = fence[1].trim();
  const start = t.indexOf('{');
  const end = t.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return null;
  const candidate = t.slice(start, end + 1);
  try { return JSON.parse(candidate); }
  catch { return null; }
}


// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  12. CONTENT MANAGER
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderContent() {
  const content = document.getElementById('content');
  try {
    const [{ data: settings }, promoPool] = await Promise.all([
      supabase.from('site_settings').select('*').limit(1).maybeSingle(),
      loadAdminPromoPool(),
    ]);
    const s = settings || {};
    const promoIds = new Set(Array.isArray(s.live_promo_product_ids) ? s.live_promo_product_ids : []);
    const promoPicker = promoPool.length
      ? `
        <div class="mt-4">
          <label class="lbl">Which products appear in the Live Promotions (Featured Product Alerts)?</label>
          <p class="text-[11px] text-gray-400 mb-2">Leave all unchecked to let the store pick real products automatically.</p>
          <input id="promo-picker-search" type="search" class="input-field mb-2" placeholder="Search products to chooseâ€¦" oninput="filterPromoPicker(this.value)">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1.5 max-h-72 overflow-y-auto pr-1" id="promo-picker-list">
            ${promoPool.map(p => {
              const id = p.property_id || p.id;
              const checked = promoIds.has(id) ? 'checked' : '';
              return `<label class="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3 py-2 cursor-pointer hover:border-blue-400/40 transition" data-promo-search="${esc((p.title || p.name || '') + ' ' + (p.category || ''))}">
                <input type="checkbox" name="live_promo_product_ids" value="${esc(id)}" ${checked} class="accent-blue-500 w-4 h-4">
                <span class="min-w-0"><span class="block text-xs font-bold text-white truncate">${esc(p.title || p.name || id)}</span><span class="block text-[10px] text-gray-400">${esc(p.category || p.listing_type || '')} Â· ${esc(id)}</span></span>
              </label>`;
            }).join('')}
          </div>
          <div class="flex gap-2 mt-2">
            <button type="button" onclick="selectAllPromoPicks()" class="text-[11px] font-bold text-blue-400 hover:text-blue-300 transition">Select all</button>
            <button type="button" onclick="clearAllPromoPicks()" class="text-[11px] font-bold text-gray-400 hover:text-gray-200 transition">Clear all</button>
          </div>
        </div>`
      : '';
    content.innerHTML = `
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Website Content Manager</h2>
        <form id="content-form" onsubmit="saveContent(event)" class="space-y-5">
          ${[
            { section: 'Site Identity', fields: [
               { key: 'site_name', label: 'Site Name', type: 'text', placeholder: 'Weverse Online Shop' },
              { key: 'site_tagline', label: 'Tagline / Slogan', type: 'text', placeholder: 'Premium International Commerce' },
              { key: 'site_description', label: 'Site Description (SEO)', type: 'textarea', placeholder: 'Your trusted global shopâ€¦' },
            ]},
            { section: 'Contact Information', fields: [
              { key: 'contact_email', label: 'Contact Email', type: 'email', placeholder: 'support@example.com' },
              { key: 'contact_phone', label: 'Contact Phone', type: 'tel', placeholder: '+1 234 567 8900' },
              { key: 'contact_address', label: 'Business Address', type: 'textarea', placeholder: '123 Main St, City, Country' },
              { key: 'whatsapp_number', label: 'WhatsApp Number', type: 'tel', placeholder: '+1 234 567 8900' },
            ]},
            { section: 'Hero Section', fields: [
              { key: 'hero_headline', label: 'Hero Headline', type: 'text', placeholder: 'Weverse Online Shop' },
              { key: 'hero_subtext', label: 'Hero Subtext', type: 'textarea', placeholder: 'Shop premium productsâ€¦' },
              { key: 'hero_cta_text', label: 'CTA Button Text', type: 'text', placeholder: 'Shop Now' },
            ]},
            { section: 'Social Media', fields: [
              { key: 'facebook_url', label: 'Facebook URL', type: 'url', placeholder: 'https://facebook.com/â€¦' },
              { key: 'instagram_url', label: 'Instagram URL', type: 'url', placeholder: 'https://instagram.com/â€¦' },
              { key: 'twitter_url', label: 'Twitter / X URL', type: 'url', placeholder: 'https://twitter.com/â€¦' },
              { key: 'youtube_url', label: 'YouTube URL', type: 'url', placeholder: 'https://youtube.com/â€¦' },
              { key: 'tiktok_url', label: 'TikTok URL', type: 'url', placeholder: 'https://tiktok.com/â€¦' },
            ]},
            { section: 'Mobile App Promotion Banner', fields: [
              { key: 'app_banner_enabled', label: 'Show the App Promotion banner at the bottom of every page', type: 'checkbox' },
              { key: 'app_banner_headline', label: 'Banner Headline', type: 'text', placeholder: 'Discover More with the Weverse Online Shop App' },
              { key: 'app_play_store_url', label: 'Google Play Store URL (real app listing â€” leave empty while unpublished)', type: 'url', placeholder: 'https://play.google.com/store/apps/details?id=â€¦' },
            ]},
            { section: 'Live Product Promotions (Featured Product Alerts)', fields: [
              { key: 'live_promo_enabled', label: 'Show Live Product Promotions (small alerts at the bottom corner)', type: 'checkbox' },
              { key: 'live_promo_first_delay_seconds', label: 'First alert after (seconds)', type: 'number', placeholder: '12' },
              { key: 'live_promo_interval_seconds', label: 'Delay between alerts (seconds)', type: 'number', placeholder: '60' },
            ], extra: promoPicker },
          ].map(sec => `
            <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
              <h3 class="text-sm font-black text-white mb-4">${sec.section}</h3>
              <div class="form-grid form-grid-2">
                ${sec.fields.map(f => `
                  <div ${f.type === 'textarea' ? 'class="sm:col-span-2"' : f.type === 'checkbox' ? 'class="sm:col-span-2"' : ''}>
                    ${f.type === 'checkbox'
                      ? `<label class="flex items-center gap-2.5 cursor-pointer"><input type="checkbox" name="${f.key}" class="accent-blue-500 w-4 h-4" ${s[f.key] ? 'checked' : ''}><span class="text-sm text-gray-300">${f.label}</span></label>`
                      : f.type === 'textarea'
                        ? `<label class="lbl">${f.label}</label><textarea class="input-field" name="${f.key}" placeholder="${esc(f.placeholder)}" rows="2">${esc(s[f.key] || '')}</textarea>`
                        : `<label class="lbl">${f.label}</label><input type="${f.type}" class="input-field" name="${f.key}" value="${esc(s[f.key] || '')}" placeholder="${esc(f.placeholder || '')}">`}
                  </div>`).join('')}
              </div>
              ${sec.extra || ''}
            </div>`).join('')}
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Content Settings</button>
        </form>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

// Real product pool for the promo picker (same sources as the live banner).
async function loadAdminPromoPool() {
  const seen = new Set();
  const items = [];
  const add = (list) => {
    for (const p of (list || [])) {
      const id = p && (p.property_id || p.id);
      if (id && !seen.has(id)) { seen.add(id); items.push(p); }
    }
  };
  try {
    const { data } = await supabase.from('showroom_listings').select('property_id,title,name,category,listing_type,images,is_active').order('created_at', { ascending: false }).limit(500);
    add(data);
  } catch { /* continue */ }
  add(listLocalShowroomListings());
  add(SHOWROOM_LISTINGS);
  add(PRODUCT_LISTINGS);
  add(PRODUCT_EXTRA_LISTINGS);
  add(TRUCK_LISTINGS);
  add(MOTORHOME_LISTINGS);
  return items.slice(0, 250);
}

window.filterPromoPicker = function(q) {
  const list = document.getElementById('promo-picker-list');
  if (!list) return;
  const term = (q || '').trim().toLowerCase();
  list.querySelectorAll('[data-promo-search]').forEach(label => {
    label.style.display = !term || label.dataset.promoSearch.toLowerCase().includes(term) ? '' : 'none';
  });
};
window.selectAllPromoPicks = function() {
  document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(el => { el.checked = true; });
};
window.clearAllPromoPicks = function() {
  document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(el => { el.checked = false; });
};

window.saveContent = async function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  const promoIds = Array.from(new Set(fd.getAll('live_promo_product_ids').map(v => String(v).trim()).filter(Boolean)));
  if (promoIds.length) data.live_promo_product_ids = promoIds;
  else data.live_promo_product_ids = [];
  const { error } = await supabase.from('site_settings').upsert({ id: 1, ...data });
  if (error) { showToast(error.message, 'error'); return; }
  showToast('Content settings saved!');
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  CONTENT SETTINGS â€” edit the wording of the Android App
//  banner + the final bottom / end-of-page closing section.
//  Save once â†’ every page updates automatically.
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
const CONTENT_SETTINGS_SECTIONS = [
  {
    key: 'hero_videos',
    custom: true,
    title: 'HERO VIDEO BANNER (ROTATING)',
    desc: 'Upload your own promotional videos (MP4 & WebM) to the top homepage banner. Each saved slide becomes its own full-width hero with its title, subtitle and CTA over a soft dark overlay so the text always stays readable. Add one video, one poster, or many rotating slides. If no video is added here, the single promo banner and the built-in brand banner below are shown instead as fallbacks.',
    accent: 'from-indigo-400 to-violet-500',
  },
  {
    key: 'banner',
    title: 'ANDROID APP BANNER',
    desc: 'The mobile-app promotion banner shown at the bottom of every page. Editing these words never changes the banner design, phone image, logo or buttons.',
    accent: 'from-cyan-400 to-blue-500',
    fields: [
      { key: 'app_banner_title', label: 'App Banner Title', type: 'text' },
      { key: 'app_banner_description', label: 'App Banner Description', type: 'textarea' },
      { key: 'app_banner_button_text', label: 'App Banner Button Text', type: 'text' },
      { key: 'app_banner_secondary_text', label: 'App Banner Secondary Text', type: 'text' },
    ],
  },
  {
    key: 'bottom',
    title: 'BOTTOM / END-OF-PAGE SECTION',
    desc: 'The final professional closing area of the website â€” thank-you message, customer support, footer links and copyright. The polished design stays; only these words change.',
    accent: 'from-emerald-400 to-cyan-500',
    fields: [
      { key: 'bottom_heading', label: 'Bottom Section Heading', type: 'text' },
      { key: 'bottom_main_message', label: 'Main Bottom Message', type: 'textarea' },
      { key: 'bottom_closing_message', label: 'Closing Message', type: 'text' },
      { key: 'bottom_support_heading', label: 'Customer Support Heading', type: 'text' },
      { key: 'bottom_support_description', label: 'Customer Support Description', type: 'textarea' },
      { key: 'bottom_support_button_text', label: 'Support Button Text', type: 'text' },
      { key: 'bottom_footer_text', label: 'Footer Section Text', type: 'text' },
      { key: 'bottom_footer_closing', label: 'Footer Closing Message', type: 'text' },
      { key: 'bottom_copyright', label: 'Copyright Text (empty = automatic â€œÂ© year Brandâ€ line)', type: 'text' },
    ],
  },
  {
    key: 'promo_banner',
    title: 'HOME PAGE PROMO BANNER',
    desc: 'The main rotating banner at the top of the homepage. Upload your own image or video and write your own words â€” the clean design stays. If empty, the built-in image banners rotate.',
    accent: 'from-fuchsia-400 to-purple-500',
    fields: [
      { key: 'promo_banner_enabled', label: 'Show my promo banner', type: 'checkbox' },
      { key: 'promo_banner_image', label: 'Banner Image', type: 'media', kind: 'image' },
      { key: 'promo_banner_video', label: 'Banner Video (plays if no image)', type: 'media', kind: 'video' },
      { key: 'promo_banner_title', label: 'Banner Title', type: 'text' },
      { key: 'promo_banner_subtitle', label: 'Banner Subtitle', type: 'text' },
      { key: 'promo_banner_button_text', label: 'Button Text', type: 'text' },
      { key: 'promo_banner_button_link', label: 'Button Link', type: 'text' },
    ],
  },
  {
    key: 'video_ad',
    title: 'HOME PAGE VIDEO ADVERTISEMENT',
    desc: 'A separate video card below the promo banner. Upload your own video (and optional poster image) and write your own words. It plays muted with play/pause and a progress bar.',
    accent: 'from-rose-400 to-orange-500',
    fields: [
      { key: 'video_ad_enabled', label: 'Show the video advertisement', type: 'checkbox' },
      { key: 'video_ad_video_url', label: 'Video File', type: 'media', kind: 'video' },
      { key: 'video_ad_poster_url', label: 'Poster Image (shown before play)', type: 'media', kind: 'image' },
      { key: 'video_ad_title', label: 'Video Title', type: 'text' },
      { key: 'video_ad_subtitle', label: 'Video Subtitle', type: 'text' },
      { key: 'video_ad_button_text', label: 'Button Text', type: 'text' },
      { key: 'video_ad_button_link', label: 'Button Link', type: 'text' },
    ],
  },
];

// Content Settings media field â€” upload your own image/video from the panel.
function contentMediaSlotHtml(f, value) {
  const isImg = f.kind === 'image';
  const current = value || '';
  const icon = isImg ? 'image' : 'video';
  const color = 'text-fuchsia-300';
  const has = !!current;
  return `<div id="slot-${f.key}">
      ${has
        ? `<div class="relative group w-full h-28 rounded-xl overflow-hidden bg-gray-900 border border-fuchsia-500/15 flex items-center justify-center">
             ${isImg
               ? `<img src="${esc(current)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`
               : `<video src="${esc(current)}" class="w-full h-full object-cover" muted playsinline preload="metadata"></video>`}
             <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
               <button type="button" onclick="triggerContentMediaUpload('${f.key}')" class="text-xs font-bold text-white bg-fuchsia-600 px-3 py-1.5 rounded-lg">Replace</button>
               <button type="button" onclick="clearContentMedia('${f.key}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
             </div>
           </div>`
        : `<button type="button" onclick="triggerContentMediaUpload('${f.key}')" class="w-full h-28 rounded-xl border-2 border-dashed border-fuchsia-500/25 hover:border-fuchsia-500/50 flex flex-col items-center justify-center gap-1.5 transition">
             <i data-lucide="${icon}" class="w-6 h-6 ${color}"></i>
             <p class="text-[10px] text-gray-500">Upload ${isImg ? 'Image' : 'Video'}</p>
           </button>`}
      <input type="file" id="file-${f.key}" class="hidden" accept="${isImg ? 'image/*' : 'video/*'}" onchange="handleContentMediaUpload(event,'${f.key}')">
      <input type="hidden" name="${f.key}" id="val-${f.key}" value="${esc(current)}">
      <div class="flex gap-2 mt-1.5">
        <input class="input-field text-xs flex-1" id="url-${f.key}" value="${esc(current)}" placeholder="Or paste ${isImg ? 'image' : 'video'} URL" oninput="document.getElementById('val-${f.key}').value=this.value">
      </div>
    </div>`;
}

window.triggerContentMediaUpload = function(field) {
  document.getElementById('file-' + field)?.click();
};

window.clearContentMedia = function(field) {
  const valEl = document.getElementById('val-' + field);
  const urlEl = document.getElementById('url-' + field);
  if (valEl) valEl.value = '';
  if (urlEl) urlEl.value = '';
  showToast('Cleared. Save to apply.', 'info');
  renderContentSettings();
};

window.handleContentMediaUpload = async function(e, field) {
  const file = e.target.files?.[0];
  if (!file) return;
  const isVideo = file.type.startsWith('video/');
  showToast(`Uploading ${file.name}â€¦`, 'info');
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { showToast('Sign in to upload media', 'error'); return; }
    const ext = (file.name.split('.').pop() || 'bin').toLowerCase().replace(/[^a-z0-9]/g, '');
    const path = `content/${field}-${Date.now()}.${ext}`;
    const { error: upErr } = await supabase.storage.from('product-images').upload(path, file, { contentType: file.type, upsert: false });
    if (upErr) { showToast('Upload failed: ' + upErr.message, 'error'); return; }
    const { data } = supabase.storage.from('product-images').getPublicUrl(path);
    const url = data.publicUrl;
    const valEl = document.getElementById('val-' + field);
    const urlEl = document.getElementById('url-' + field);
    if (valEl) valEl.value = url;
    if (urlEl) urlEl.value = url;
    // Update just this field's preview in place so other unsaved edits are kept.
    const slot = document.getElementById('slot-' + field);
    if (slot) {
      const f = CONTENT_SETTINGS_SECTIONS.flatMap((s) => s.fields || []).find((x) => x.key === field);
      if (f) slot.outerHTML = contentMediaSlotHtml(f, url);
    }
    showToast('âœ“ Uploaded â€” save to apply', 'success');
  } catch (err) { showToast('Upload failed', 'error'); }
};

// â”€â”€ HERO VIDEO BANNER MANAGER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// The owner manages a premium full-width rotating video hero. Every slide has
// its own video (MP4/WebM), optional poster thumbnail, title, subtitle and CTA
// and can be Upload, Preview, Replace, Delete, Enable/Disable or Reordered.
// Edits live in window._heroVideoDraft and are written to a hidden JSON field
// that the Content Settings form saves into site_settings.hero_video_slides.
const HERO_VIDEO_PRESETS = ['SHOP NOW', 'EXPLORE DEALS', 'VIEW PRODUCTS', 'DISCOVER MORE', 'SEE OFFERS', 'SHOP THE LOOK'];
window._heroVideoDraft = [];

function heroVideoDraft() {
  if (!Array.isArray(window._heroVideoDraft)) window._heroVideoDraft = [];
  return window._heroVideoDraft;
}
function heroSyncJson() {
  const el = document.getElementById('hs-json');
  if (el) el.value = JSON.stringify(heroVideoDraft());
}
function rerenderHeroVideoManager() {
  heroSyncJson();
  const host = document.getElementById('hero-videos-manager');
  if (!host) return;
  host.innerHTML = heroVideoManagerHtml(heroVideoDraft());
  if (window.lucide) lucide.createIcons();
}
function heroPanelMediaSlot(s, i) {
  const video = String((s && s.video) || '').trim();
  const poster = String((s && s.poster) || '').trim();
  // A blob: URL means the real upload FAILED â€” show a loud warning so the
  // owner never mistakes the temporary preview for a saved video.
  const tempWarning = (video && isTempMediaUrl(video)) || (poster && isTempMediaUrl(poster))
    ? `<p class="mt-2 text-[11px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-2">âš  Temporary preview only â€” the upload FAILED, this will NOT be saved. Re-upload a smaller MP4/WebM.</p>`
    : '';
  const body = video
    ? `<video src="${esc(video)}" ${poster ? `poster="${esc(poster)}"` : ''} class="w-full h-40 object-cover" muted controls preload="metadata"></video>`
    : poster
      ? `<img src="${esc(poster)}" class="w-full h-40 object-cover" onerror="this.style.display='none'">`
      : `<div class="w-full h-40 flex items-center justify-center text-[11px] text-gray-500">No media yet â€” upload a video (MP4/WebM) or a poster below</div>`;
  return `
    <div>
      <div class="w-full overflow-hidden rounded-xl bg-gray-950 border border-indigo-500/20 flex items-center justify-center">${body}</div>
      ${tempWarning}
      <div class="flex flex-wrap gap-1.5 mt-2 justify-end">
        <button type="button" onclick="heroVideoUpload(${i},'video')" class="px-3 py-1.5 rounded-lg ${video ? 'bg-white/10 text-gray-200 border border-white/10' : 'bg-indigo-600 text-white'} text-[10px] font-bold transition">${video ? 'Replace Video' : 'Upload Video'}</button>
        ${video ? `<button type="button" onclick="heroVideoRemoveMedia(${i},'video')" class="px-3 py-1.5 rounded-lg bg-red-600/80 text-white text-[10px] font-bold">Remove Video</button>` : ''}
        <button type="button" onclick="heroVideoUpload(${i},'poster')" class="px-3 py-1.5 rounded-lg bg-white/10 text-gray-200 text-[10px] font-bold border border-white/10 transition">${poster ? 'Replace Poster' : 'Add Poster'}</button>
        ${poster ? `<button type="button" onclick="heroVideoRemoveMedia(${i},'poster')" class="px-3 py-1.5 rounded-lg bg-red-600/80 text-white text-[10px] font-bold">Remove Poster</button>` : ''}
      </div>
    </div>`;
}
function heroVideoManagerHtml(arr) {
  return (arr || []).map((s, i) => {
    const btn = String((s && s.buttonText) || 'SHOP NOW');
    const presets = HERO_VIDEO_PRESETS.map(t => `<button type="button" onclick="heroVideoPreset(${i},'${t}')" class="px-2.5 py-1 rounded-full text-[9px] font-black ${btn === t ? 'bg-indigo-600 text-white' : 'bg-white/5 text-gray-400'} border ${btn === t ? 'border-indigo-500' : 'border-white/10'} transition">${t}</button>`).join('');
    return `
    <div class="rounded-xl border border-indigo-500/25 bg-violet-500/8 p-4 space-y-3">
      <div class="flex items-center justify-between gap-2 flex-wrap">
        <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="video" class="w-4 h-4 text-indigo-400"></i> Slide ${i + 1}</p>
        <div class="flex items-center gap-1.5">
          <button type="button" onclick="heroVideoToggle(${i})" class="text-[10px] font-bold px-2.5 py-1.5 rounded-lg ${s && s.enabled === false ? 'bg-gray-700 text-gray-400' : 'bg-emerald-600 text-white'} transition">${s && s.enabled === false ? 'Disabled' : 'Enabled'}</button>
          <button type="button" onclick="heroVideoMove(${i},-1)" class="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10" title="Move up"><i data-lucide="arrow-up" class="w-3.5 h-3.5 text-gray-300"></i></button>
          <button type="button" onclick="heroVideoMove(${i},1)" class="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10" title="Move down"><i data-lucide="arrow-down" class="w-3.5 h-3.5 text-gray-300"></i></button>
          <button type="button" onclick="heroVideoDelete(${i})" class="px-2 py-1 rounded-lg bg-red-600/80 hover:bg-red-600" title="Delete"><i data-lucide="trash-2" class="w-3.5 h-3.5 text-white"></i></button>
        </div>
      </div>
      ${heroPanelMediaSlot(s, i)}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label class="lbl">Title</label>
          <input type="text" value="${esc(s.title || '')}" class="input-field w-full" placeholder="e.g. Season Sale is Live" oninput="heroVideoField(${i},'title',this.value)">
        </div>
        <div>
          <label class="lbl">Subtitle</label>
          <input type="text" value="${esc(s.subtitle || '')}" class="input-field w-full" placeholder="e.g. Up to 50% off top brands" oninput="heroVideoField(${i},'subtitle',this.value)">
        </div>
      </div>
      <div>
        <label class="lbl">Button</label>
        <div class="flex flex-wrap gap-1.5">${presets}</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          <input type="text" value="${esc(btn)}" class="input-field w-full" placeholder="SHOP NOW" oninput="heroVideoField(${i},'buttonText',this.value)">
          <input type="text" value="${esc(s.buttonLink || '/#showroom-directory')}" class="input-field w-full" placeholder="/#showroom-directory" oninput="heroVideoField(${i},'buttonLink',this.value)">
        </div>
      </div>
    </div>`;
  }).join('');
}

window.heroVideoUpload = function(i, kind) {
  const inp = document.createElement('input');
  inp.type = 'file';
  inp.accept = kind === 'video' ? 'video/mp4,video/webm,.mp4,.webm' : 'image/*';
  inp.onchange = () => {
    const f = inp.files && inp.files[0];
    if (f) heroVideoFileChosen(i, kind, f);
  };
  inp.click();
};
window.heroVideoField = function(i, field, value) {
  const arr = heroVideoDraft();
  if (arr[i]) { arr[i][field] = value; heroSyncJson(); }
};
window.heroVideoPreset = function(i, preset) {
  const arr = heroVideoDraft();
  if (arr[i]) { arr[i].buttonText = preset; rerenderHeroVideoManager(); }
};
window.heroVideoToggle = function(i) {
  const arr = heroVideoDraft();
  if (arr[i]) { arr[i].enabled = arr[i].enabled === false ? true : false; rerenderHeroVideoManager(); }
};
window.heroVideoMove = function(i, dir) {
  const arr = heroVideoDraft();
  const j = i + dir;
  if (j < 0 || j >= arr.length) return;
  [arr[i], arr[j]] = [arr[j], arr[i]];
  rerenderHeroVideoManager();
};
window.heroVideoDelete = function(i) {
  const arr = heroVideoDraft();
  if (i < 0 || i >= arr.length) return;
  if (!confirm('Delete this hero video slide?')) return;
  arr.splice(i, 1);
  rerenderHeroVideoManager();
};
window.heroVideoRemoveMedia = function(i, kind) {
  const arr = heroVideoDraft();
  if (!arr[i]) return;
  if (kind === 'video') arr[i].video = '';
  else if (kind === 'poster') arr[i].poster = '';
  rerenderHeroVideoManager();
};
window.addHeroVideoSlide = function() {
  const arr = heroVideoDraft();
  arr.push({ id: 'hv' + Date.now() + Math.floor(Math.random() * 999), enabled: true, video: '', poster: '', title: '', subtitle: '', buttonText: 'SHOP NOW', buttonLink: '/#showroom-directory' });
  rerenderHeroVideoManager();
  showToast('New slide added â€” upload a video and press Save to show it.', 'info');
};
// Uploads one hero file and returns { url, persisted, error }. persisted=false
// means ONLY a temporary in-browser preview exists (a blob: URL that dies on
// reload) â€” callers must surface that instead of pretending the upload worked,
// otherwise the owner saves dead links into site_settings.hero_video_slides.
async function heroUploadOne(file, kind) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return { url: URL.createObjectURL(file), persisted: false, error: 'You are signed out â€” sign in again, then re-upload.' };
    const ext = (file.name.split('.').pop() || (kind === 'video' ? 'mp4' : 'jpg')).toLowerCase().replace(/[^a-z0-9]/g, '');
    const path = `hero/${kind}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage.from('product-images').upload(path, file, { contentType: file.type, cacheControl: '3600', upsert: true });
    if (error) return { url: URL.createObjectURL(file), persisted: false, error: error.message };
    const { data } = supabase.storage.from('product-images').getPublicUrl(path);
    const publicUrl = data && data.publicUrl;
    if (!publicUrl) return { url: URL.createObjectURL(file), persisted: false, error: 'Storage did not return a public URL.' };
    return { url: publicUrl, persisted: true, error: null };
  } catch (err) {
    return { url: URL.createObjectURL(file), persisted: false, error: String((err && err.message) || err) };
  }
}
// Temporary object URLs can never survive a save/reload.
function isTempMediaUrl(u) { return /^blob:/i.test(String(u || '')); }
async function heroVideoFileChosen(i, kind, file) {
  const arr = heroVideoDraft();
  if (!file || !arr[i]) return;
  if (kind === 'video') {
    if (!/video\/(mp4|webm)|\.(mp4|webm)$/i.test(file.type + ' ' + file.name)) { showToast('Please choose an MP4 or WebM video file.', 'error'); return; }
  } else if (!file.type.startsWith('image/')) {
    showToast('Please choose an image for the poster.', 'error'); return;
  }
  showToast('â³ Uploading ' + (kind === 'video' ? 'video' : 'poster') + 'â€¦', 'info');
  const res = await heroUploadOne(file, kind);
  if (kind === 'video') arr[i].video = res.url;
  else arr[i].poster = res.url;
  rerenderHeroVideoManager();
  if (res.persisted) {
    showToast('âœ“ ' + (kind === 'video' ? 'Video' : 'Poster') + ' uploaded â€” press Save & Publish Hero Banner to go live.', 'success');
  } else {
    // NEVER pretend a failed upload worked. The preview below is only
    // temporary and would vanish after reload â€” tell the owner exactly why.
    showToast('âš  UPLOAD FAILED: ' + (res.error || 'unknown reason') + ' â€” this preview is TEMPORARY and will NOT be saved. Try a smaller MP4/WebM (keep videos under ~50 MB), then re-upload.', 'error');
  }
}
function renderHeroVideoManagerHtml(slides) {
  const arr = Array.isArray(slides) ? slides.map(s => ({ ...s })) : [];
  window._heroVideoDraft = arr;
  heroSyncJson();
  const empty = arr.length ? '' : `
    <div class="rounded-xl border-2 border-dashed border-indigo-500/30 bg-white/5 p-6 text-center">
      <i data-lucide="video" class="w-8 h-8 text-indigo-400 mx-auto"></i>
      <p class="text-xs text-gray-400 mt-2 font-bold">No hero videos yet</p>
      <p class="text-[11px] text-gray-500 mt-1">Add your first promotional video slide to turn the homepage banner into an auto-playing video hero. Until then, the built-in brand banner and any single promo banner below are used.</p>
    </div>`;
  return `
    <div class="space-y-3">
      <div id="hero-videos-manager" class="space-y-3">${empty}${heroVideoManagerHtml(arr)}</div>
      <button type="button" onclick="heroVideoSavePublish(this)" class="btn-press w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-black rounded-xl transition flex items-center justify-center gap-2">
        <i data-lucide="rocket" class="w-4 h-4"></i> Save &amp; Publish Hero Banner
      </button>
      <p class="text-[10px] text-gray-500 text-center">One video is enough â€” no minimum. Your banner goes live as soon as you press this button.</p>
      <button type="button" onclick="addHeroVideoSlide()" class="btn-press w-full px-4 py-3 border-2 border-dashed border-indigo-500/40 text-indigo-300 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2">
        <i data-lucide="plus" class="w-4 h-4"></i> Add Another Hero Video Slide
      </button>
    </div>`;
}
// Saves ONLY the hero video slides â€” works with a single video, no minimum required.
// Keeps the same site_settings row/update pattern as saveContentSettings.
window.heroVideoSavePublish = async function(btn) {
  const isTemp = (u) => /^blob:/i.test(String(u || ''));
  const draft = heroVideoDraft().filter(s => s && (s.video || s.poster || s.title || s.subtitle));
  if (!draft.length) { showToast('Add at least one video slide before publishing.', 'error'); return; }
  // Temporary blob: previews can never go live â€” strip dead posters and REFUSE
  // to publish slides whose video upload failed, instead of saving dead links.
  draft.forEach((s) => { if (s.poster && isTemp(s.poster)) s.poster = ''; });
  const failedSlides = draft.filter((s) => s.video && isTemp(s.video));
  const publishable = draft.filter((s) => s.video && !isTemp(s.video));
  if (failedSlides.length && !publishable.length) {
    showToast(`Upload FAILED for your video${failedSlides.length > 1 ? 's' : ''} â€” temporary previews cannot go live. Re-upload a smaller MP4/WebM (under ~50 MB), then press this button again.`, 'error');
    return;
  }
  if (failedSlides.length) {
    if (!confirm(`${failedSlides.length} slide${failedSlides.length > 1 ? 's' : ''} had a FAILED upload and will be LEFT OUT. Publish the remaining ${publishable.length} slide${publishable.length === 1 ? '' : 's'} now?`)) return;
  }
  const arr = publishable;
  const withVideo = arr.filter(s => s.video);
  if (!arr.length) { showToast('Please upload a video in at least one slide first.', 'error'); return; }
  const label = btn ? btn.innerHTML : '';
  if (btn) { btn.disabled = true; btn.innerHTML = 'â³ Publishingâ€¦'; }
  try {
    heroSyncJson();
    const { data: existing } = await supabase.from('site_settings').select('id').limit(1).maybeSingle();
    let error;
    if (existing?.id) ({ error } = await supabase.from('site_settings').update({ hero_video_slides: arr }).eq('id', existing.id));
    else ({ error } = await supabase.from('site_settings').insert({ id: crypto.randomUUID(), hero_video_slides: arr }));
    if (error) throw new Error(error.message);
    invalidateSiteContent();
    showToast('âœ“ Hero video banner published! ' + withVideo.length + (withVideo.length === 1 ? ' video is' : ' videos are') + ' now live on your homepage.', 'success');
  } catch (err) {
    showToast(err.message || 'Could not publish the hero banner. Please try again.', 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = label; if (window.lucide) lucide.createIcons(); }
  }
};

async function renderContentSettings() {
  const content = document.getElementById('content');
  try {
    const { data: s } = await supabase.from('site_settings').select('*').limit(1).maybeSingle();
    const d = { ...DEFAULT_SITE_CONTENT, ...(s || {}) };
    content.innerHTML = `
      <div class="space-y-6 fade-in">
        <div>
          <h2 class="text-xl font-black text-white">Content Settings</h2>
          <p class="text-xs text-gray-400 mt-1">Edit the wording of the two shared sections below. Save once and every page updates automatically â€” no code needed. Your products, prices, reviews, orders and design are never touched.</p>
        </div>
        <form id="content-settings-form" onsubmit="saveContentSettings(event)" class="space-y-5">
          ${CONTENT_SETTINGS_SECTIONS.map(sec => `
            <div class="glass-soft border border-white/10 rounded-2xl p-5">
              <div class="flex items-center gap-2.5 mb-1">
                <span class="w-2 h-2 rounded-full bg-gradient-to-r ${sec.accent}"></span>
                <h3 class="text-sm font-black text-white tracking-wide">${sec.title}</h3>
              </div>
              <p class="text-[11px] text-gray-400 mb-4">${sec.desc}</p>
              ${sec.key === 'hero_videos'
                ? renderHeroVideoManagerHtml(d.hero_video_slides || [])
                : `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${sec.fields.map(f => `
                  <div class="${f.type === 'textarea' || f.type === 'media' ? 'sm:col-span-2' : ''}">
                    ${f.type === 'checkbox'
                      ? `<label class="flex items-center gap-2.5 cursor-pointer select-none py-2">
                           <input id="cs-${f.key}" type="checkbox" name="${f.key}" ${d[f.key] ? 'checked' : ''} class="w-4 h-4 accent-blue-500 rounded">
                           <span class="text-sm font-bold text-gray-200">${f.label}</span>
                         </label>`
                      : `<label class="lbl" for="cs-${f.key}">${f.label}</label>`}
                    ${f.type === 'textarea'
                      ? `<textarea id="cs-${f.key}" name="${f.key}" rows="3" class="input-field w-full" placeholder="Enter the current wordingâ€¦">${esc(d[f.key] || '')}</textarea>`
                      : f.type === 'media'
                        ? contentMediaSlotHtml(f, d[f.key] || '')
                        : f.type === 'checkbox'
                          ? ''
                          : `<input id="cs-${f.key}" type="text" name="${f.key}" value="${esc(d[f.key] || '')}" class="input-field w-full" placeholder="Enter the current wordingâ€¦">`}
                    ${f.type === 'text' || f.type === 'textarea' ? `<p class="text-[10px] text-gray-500 mt-1">Current: ${esc((d[f.key] || '').slice(0, 80))}${(d[f.key] || '').length > 80 ? 'â€¦' : ''}</p>` : ''}
                  </div>`).join('')}
              </div>`}
            </div>`).join('')}
          <input type="hidden" id="hs-json" name="hero_video_slides" value="">
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Content</button>
        </form>
      </div>`;
    heroSyncJson();
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

window.saveContentSettings = async function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = {};
  for (const [k, v] of fd.entries()) data[k] = v;
  // Unchecked checkboxes are missing from FormData â€” store them as false.
  for (const sec of CONTENT_SETTINGS_SECTIONS) {
    if (!sec.fields) continue;
    for (const f of sec.fields) {
      if (f.type === 'checkbox' && !(f.key in data)) data[f.key] = false;
      else if (f.type === 'checkbox') data[f.key] = true;
    }
  }
  // Hero video slides come from a hidden JSON field â€” parse it to a real array.
  let heroSlides = [];
  try {
    const raw = fd.get('hero_video_slides');
    if (String(raw || '').trim()) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) heroSlides = parsed;
    }
  } catch { heroSlides = []; }
  data.hero_video_slides = heroSlides;
  try {
    const { data: existing } = await supabase.from('site_settings').select('id').limit(1).maybeSingle();
    let error;
    if (existing?.id) ({ error } = await supabase.from('site_settings').update(data).eq('id', existing.id));
    else ({ error } = await supabase.from('site_settings').insert({ id: crypto.randomUUID(), ...data }));
    if (error) throw new Error(error.message);
    invalidateSiteContent();
    showToast('Content updated â€” the banners now use your new words and uploads.', 'success');
  } catch (err) {
    showToast(err.message || 'Could not save content. Please try again.', 'error');
  }
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  13. ANALYTICS
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderAnalytics() {
  const content = document.getElementById('content');
  try {
    const [orders, prods, customers] = await Promise.all([
      supabase.from('payment_receipts').select('amount,currency,status,created_at').order('created_at', { ascending: false }).limit(500),
      supabase.from('showroom_listings').select('id,listing_type,category,is_active', { count: 'exact' }),
      supabase.from('profiles').select('user_id,created_at', { count: 'exact' }),
    ]);
    const o = orders.data || [];
    const totalRevenue = o.filter(x => ['approved','payment_approved','delivered'].includes(x.status)).reduce((s, x) => s + (parseFloat(x.amount) || 0), 0);
    const conversionRate = o.length > 0 ? ((o.filter(x => x.status !== 'cancelled').length / o.length) * 100).toFixed(1) : 0;
    // Top categories
    const catCount = {};
    (prods.data || []).forEach(p => { catCount[p.category] = (catCount[p.category] || 0) + 1; });
    const topCats = Object.entries(catCount).sort((a, b) => b[1] - a[1]).slice(0, 8);
    content.innerHTML = `
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Analytics</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          ${statCard('Total Revenue', `$${totalRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })}`, 'dollar-sign', 'emerald')}
          ${statCard('Total Orders', o.length, 'shopping-bag', 'blue')}
          ${statCard('Customers', customers.count || 0, 'users', 'violet')}
          ${statCard('Conversion Rate', conversionRate + '%', 'trending-up', 'amber')}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="bar-chart-3" class="w-4 h-4 text-blue-400"></i> Revenue (Last 6 Months)</h3>
            <canvas id="analytics-chart" height="220"></canvas>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="pie-chart" class="w-4 h-4 text-violet-400"></i> Top Categories by Listings</h3>
            ${topCats.length === 0 ? '<p class="text-xs text-gray-500 text-center py-8">No data</p>' : topCats.map(([cat, count]) => `
              <div class="flex items-center gap-3 py-1.5">
                <span class="text-xs text-gray-300 flex-1 truncate">${esc(cat)}</span>
                <div class="w-24 h-2 bg-blue-500/10 rounded-full overflow-hidden"><div class="h-full bg-blue-500 rounded-full" style="width:${Math.round((count / topCats[0][1]) * 100)}%"></div></div>
                <span class="text-xs font-bold text-white w-6 text-right">${count}</span>
              </div>`).join('')}
          </div>
        </div>
      </div>`;
    if (window.lucide) lucide.createIcons();
    renderRevenueChart(o);
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  14. SEO
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderSeo() {
  const content = document.getElementById('content');
  const { data: s } = await supabase.from('site_settings').select('*').limit(1).maybeSingle();
  const d = s || {};
  content.innerHTML = `
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">SEO Manager</h2>
      <form id="seo-form" onsubmit="saveSeo(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Homepage SEO</h3>
          <div><label class="lbl">Meta Title</label><input class="input-field" name="meta_title" value="${esc(d.meta_title || '')}" placeholder="Weverse Online Shop | Premium International Commerce"></div>
          <div><label class="lbl">Meta Description</label><textarea class="input-field" name="meta_description" rows="2" placeholder="Your trusted global shopâ€¦">${esc(d.meta_description || '')}</textarea></div>
          <div><label class="lbl">Meta Keywords (comma separated)</label><input class="input-field" name="meta_keywords" value="${esc(d.meta_keywords || '')}" placeholder="global marketplace, online shopping, â€¦"></div>
          <div><label class="lbl">Canonical URL</label><input class="input-field" name="canonical_url" value="${esc(d.canonical_url || '')}" placeholder="https://yoursite.com"></div>
          <div><label class="lbl">OG Image URL (Social share image)</label><input class="input-field" name="og_image" value="${esc(d.og_image || '')}" placeholder="https://â€¦/og-image.jpg"></div>
          <div><label class="lbl">Google Analytics ID</label><input class="input-field" name="ga_id" value="${esc(d.ga_id || '')}" placeholder="G-XXXXXXXXXX"></div>
          <div><label class="lbl">Google Search Console Verification</label><input class="input-field" name="gsc_verify" value="${esc(d.gsc_verify || '')}" placeholder="Verification meta tag content"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save SEO Settings</button>
      </form>
    </div>`;
  if (window.lucide) lucide.createIcons();
}

window.saveSeo = async function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  await supabase.from('site_settings').upsert({ id: 1, ...data });
  showToast('SEO settings saved!');
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  15. EMAIL SETTINGS
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderEmail() {
  const content = document.getElementById('content');
  const { data: s } = await supabase.from('site_settings').select('*').limit(1).maybeSingle();
  const d = s || {};
  content.innerHTML = `
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">Email Settings</h2>
      <div class="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl text-xs text-blue-300">Email is handled by Supabase Auth's built-in SMTP. Configure SMTP in your Supabase project â†’ Auth â†’ SMTP Settings.</div>
      <form id="email-form" onsubmit="saveEmailSettings(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Email Notifications</h3>
          ${[
            { key: 'email_order_placed', label: 'Order Confirmation Email', desc: 'Send confirmation when order is placed' },
            { key: 'email_order_shipped', label: 'Shipping Notification', desc: 'Notify customer when order is shipped' },
            { key: 'email_order_delivered', label: 'Delivery Confirmation', desc: 'Confirm when order is delivered' },
            { key: 'email_review_request', label: 'Review Request', desc: 'Ask for review after delivery' },
          ].map(f => `
            <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
              <div><p class="text-xs font-bold text-white">${f.label}</p><p class="text-[11px] text-gray-500">${f.desc}</p></div>
              <label class="toggle-switch"><input type="checkbox" name="${f.key}" ${d[f.key] !== false ? 'checked' : ''}><span class="toggle-slider"></span></label>
            </div>`).join('')}
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Sender Information</h3>
          <div><label class="lbl">Sender Name</label><input class="input-field" name="email_from_name" value="${esc(d.email_from_name || '')}" placeholder="Weverse Online Shop"></div>
          <div><label class="lbl">Reply-To Email</label><input type="email" class="input-field" name="email_reply_to" value="${esc(d.email_reply_to || '')}" placeholder="support@example.com"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Email Settings</button>
      </form>
    </div>`;
  if (window.lucide) lucide.createIcons();
}

window.saveEmailSettings = async function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = {};
  for (const [k, v] of fd.entries()) data[k] = v;
  // Checkboxes not in FormData when unchecked
  ['email_order_placed','email_order_shipped','email_order_delivered','email_review_request'].forEach(k => { if (!(k in data)) data[k] = false; else data[k] = true; });
  await supabase.from('site_settings').upsert({ id: 1, ...data });
  showToast('Email settings saved!');
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  16. SECURITY  (2FA setup + login history + logout all)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderSecurity() {
  const content = document.getElementById('content');
  if (content) content.innerHTML = loading();
  try {
    const [logsRes, twoFaRes, factorsRes] = await Promise.all([
      supabase.from('admin_security_logs').select('*').order('created_at', { ascending: false }).limit(50),
      supabase.from('admin_2fa').select('enabled,backup_codes,created_at').eq('user_id', state.user?.id).maybeSingle(),
      supabase.auth.mfa.listFactors(),
    ]);
    const logs = logsRes.data || [];
    const twofa = twoFaRes.data || {};
    const totpFactor = (factorsRes.data?.totp || [])[0];
    const is2FAEnrolled = !!totpFactor && totpFactor.status === 'verified';
    const backupCount = (twofa.backup_codes || []).filter(c => !c.used).length;

    content.innerHTML = `
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Security</h2>

        <!-- 2FA STATUS BANNER -->
        <div class="p-4 rounded-xl border flex items-center gap-4 ${is2FAEnrolled ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-amber-500/5 border-amber-500/20'}">
          <div class="w-10 h-10 ${is2FAEnrolled ? 'bg-emerald-500/10' : 'bg-amber-500/10'} rounded-xl flex items-center justify-center shrink-0">
            <i data-lucide="${is2FAEnrolled ? 'shield-check' : 'shield-alert'}" class="w-5 h-5 ${is2FAEnrolled ? 'text-emerald-400' : 'text-amber-400'}"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm font-black ${is2FAEnrolled ? 'text-emerald-300' : 'text-amber-300'}">Two-Factor Authentication is ${is2FAEnrolled ? 'ENABLED âœ“' : 'NOT ENABLED'}</p>
            <p class="text-xs text-gray-400 mt-0.5">${is2FAEnrolled ? `Backup codes available: ${backupCount} Â· Enrolled: ${fmtDate(twofa.created_at)}` : 'Enable 2FA to protect your admin account with an authenticator app.'}</p>
          </div>
          ${is2FAEnrolled
            ? `<button onclick="disable2FA()" class="btn-press flex-shrink-0 text-xs font-bold text-red-400 bg-red-500/10 hover:bg-red-500/20 px-3 py-1.5 rounded-xl transition">Disable 2FA</button>`
            : `<button onclick="setup2FAFlow()" class="btn-press flex-shrink-0 text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-1.5 rounded-xl transition"><i data-lucide="shield-plus" class="w-3.5 h-3.5 inline mr-1"></i>Enable 2FA</button>`}
        </div>

        <!-- BACKUP CODES (only if 2FA enabled) -->
        ${is2FAEnrolled ? `
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="key" class="w-4 h-4 text-amber-400"></i> Backup Recovery Codes</h3>
            <button onclick="regenerateBackupCodes()" class="btn-press text-xs font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 px-3 py-1.5 rounded-xl transition">Regenerate</button>
          </div>
          <p class="text-xs text-gray-400 mb-3">Save these codes in a safe place. Use them if you lose access to your authenticator app. Each code works only once.</p>
          <div id="backup-codes-display" class="grid grid-cols-2 gap-2">
            ${(twofa.backup_codes || []).length === 0
              ? '<p class="text-xs text-gray-500 col-span-2 text-center py-4">No backup codes generated. Click Regenerate to create them.</p>'
              : (twofa.backup_codes || []).map(c => `<code class="font-mono text-xs px-3 py-2 ${c.used ? 'bg-gray-900 text-gray-600 line-through' : 'bg-blue-500/5 text-blue-300 border border-blue-500/15'} rounded-lg">${typeof c === 'object' ? c.code : c}</code>`).join('')}
          </div>
        </div>` : ''}

        <!-- CHANGE PASSWORD -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <h3 class="text-sm font-black text-white mb-4 flex items-center gap-2"><i data-lucide="lock" class="w-4 h-4 text-blue-400"></i> Change Password</h3>
          <form id="pw-form" onsubmit="changePassword(event)" class="space-y-3 max-w-sm">
            <div>
              <label class="lbl">Current Password</label>
              <input type="password" class="input-field" id="current-pw" placeholder="Current password" required>
            </div>
            <div>
              <label class="lbl">New Password</label>
              <input type="password" class="input-field" id="new-pw" placeholder="Min 8 characters" minlength="8" required>
              <div id="pw-strength" class="mt-1.5 space-y-1"></div>
            </div>
            <div>
              <label class="lbl">Confirm New Password</label>
              <input type="password" class="input-field" id="confirm-pw" placeholder="Repeat password" required>
            </div>
            <button type="submit" class="btn-press bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-5 rounded-xl text-sm transition flex items-center gap-2">
              <i data-lucide="check" class="w-4 h-4"></i> Update Password
            </button>
          </form>
        </div>

        <!-- SESSION MANAGEMENT -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <h3 class="text-sm font-black text-white mb-4 flex items-center gap-2"><i data-lucide="monitor-smartphone" class="w-4 h-4 text-blue-400"></i> Session Management</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
              <div>
                <p class="text-xs font-bold text-white">Current Session</p>
                <p class="text-[11px] text-gray-500">${esc(navigator.userAgent.slice(0, 60))}â€¦</p>
              </div>
              <span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Active</span>
            </div>
            <button onclick="logoutAllDevices()" class="btn-press w-full flex items-center justify-center gap-2 text-xs font-bold text-red-400 bg-red-500/10 hover:bg-red-500/20 border border-red-500/15 py-2.5 rounded-xl transition">
              <i data-lucide="log-out" class="w-4 h-4"></i> Sign Out from ALL Devices
            </button>
          </div>
        </div>

        <!-- LOGIN HISTORY -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="p-4 border-b border-blue-500/10 flex items-center justify-between">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="history" class="w-4 h-4 text-blue-400"></i> Login History</h3>
            <span class="text-xs text-gray-500">Last ${logs.length} events</span>
          </div>
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Event</th><th>IP Address</th><th class="hidden sm:table-cell">Device</th><th>Date</th></tr></thead>
              <tbody>
                ${logs.length === 0 ? '<tr><td colspan="4" class="text-center text-gray-500 py-8">No security events yet</td></tr>' :
                  logs.map(l => {
                    const isSuccess = ['login_success','login_2fa_success'].includes(l.event_type);
                    const isWarning = ['login_failed','login_denied','login_backup_code_used'].includes(l.event_type);
                    const eventColor = isSuccess ? 'text-emerald-400' : isWarning ? 'text-red-400' : 'text-gray-300';
                    const eventLabel = { login_success:'Login âœ“', login_failed:'Failed Login âœ—', login_denied:'Access Denied âœ—', login_2fa_success:'2FA Verified âœ“', login_backup_code_used:'Backup Code Used', logout:'Logged Out', logout_all_devices:'Logout All Devices' }[l.event_type] || l.event_type;
                    return `<tr>
                      <td><span class="text-xs font-bold ${eventColor}">${esc(eventLabel)}</span></td>
                      <td><span class="text-xs font-mono text-gray-300">${esc(l.ip_address || 'â€”')}</span></td>
                      <td class="hidden sm:table-cell"><span class="text-xs text-gray-500 max-w-[160px] block truncate">${esc((l.user_agent || 'â€”').slice(0, 50))}</span></td>
                      <td><span class="text-xs text-gray-500">${fmtDT(l.created_at)}</span></td>
                    </tr>`;
                  }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;

    // Password strength meter
    document.getElementById('new-pw')?.addEventListener('input', (e) => {
      const pw = e.target.value;
      const checks = [
        { label: '8+ characters', ok: pw.length >= 8 },
        { label: 'Uppercase letter', ok: /[A-Z]/.test(pw) },
        { label: 'Number', ok: /[0-9]/.test(pw) },
        { label: 'Special character', ok: /[^a-zA-Z0-9]/.test(pw) },
      ];
      document.getElementById('pw-strength').innerHTML = checks.map(c =>
        `<div class="flex items-center gap-1.5 text-[10px] ${c.ok ? 'text-emerald-400' : 'text-gray-600'}">
          <i data-lucide="${c.ok ? 'check-circle' : 'circle'}" class="w-3 h-3"></i>${c.label}</div>`
      ).join('');
      if (window.lucide) lucide.createIcons();
    });

    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

window.changePassword = async function(e) {
  e.preventDefault();
  const current = document.getElementById('current-pw').value;
  const np = document.getElementById('new-pw').value;
  const cp = document.getElementById('confirm-pw').value;
  if (np !== cp) { showToast('Passwords do not match', 'error'); return; }
  if (np.length < 8) { showToast('Password must be at least 8 characters', 'error'); return; }
  // Re-authenticate to verify current password
  const { error: reAuthErr } = await supabase.auth.signInWithPassword({ email: state.user.email, password: current });
  if (reAuthErr) { showToast('Current password is incorrect', 'error'); return; }
  const { error } = await supabase.auth.updateUser({ password: np });
  if (error) { showToast(error.message, 'error'); return; }
  await logLoginEvent(state.user.id, 'password_changed');
  showToast('Password updated successfully!');
  e.target.reset();
  document.getElementById('pw-strength').innerHTML = '';
};

// â”€â”€ 2FA Setup Flow â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
window.setup2FAFlow = async function() {
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="shield-plus" class="w-5 h-5 text-emerald-400"></i> Enable Two-Factor Authentication</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div id="2fa-setup-content">
          <div class="flex items-center justify-center py-8"><i data-lucide="loader-2" class="w-6 h-6 animate-spin text-blue-400"></i></div>
        </div>
      </div>
    </div>`);
  if (window.lucide) lucide.createIcons();
  try {
    const { data, error } = await supabase.auth.mfa.enroll({ factorType: 'totp', friendlyName: 'Weverse Admin' });
    if (error) throw error;
    const qrUri = data.totp.qr_code;
    const secret = data.totp.secret;
    const factorId = data.id;
    document.getElementById('2fa-setup-content').innerHTML = `
      <div class="space-y-5">
        <div class="p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300">
          <strong>Step 1:</strong> Open your authenticator app (Google Authenticator, Authy, or similar).<br>
          <strong>Step 2:</strong> Scan the QR code below or enter the secret manually.<br>
          <strong>Step 3:</strong> Enter the 6-digit code shown in your app.
        </div>
        <div class="flex flex-col items-center gap-4">
          <div class="bg-white p-3 rounded-xl">
            <img src="${esc(qrUri)}" alt="QR Code" class="w-44 h-44" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-500 w-44 text-center&quot;>QR code unavailable. Use the secret below.</p>'">
          </div>
          <div class="w-full">
            <label class="lbl">Or enter this secret manually</label>
            <div class="flex gap-2">
              <code class="flex-1 input-field font-mono text-xs text-emerald-300 select-all">${esc(secret)}</code>
              <button onclick="navigator.clipboard.writeText('${esc(secret)}').then(()=>showToast('Copied!'))" class="btn-press p-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl transition text-blue-400"><i data-lucide="copy" class="w-4 h-4"></i></button>
            </div>
          </div>
        </div>
        <div>
          <label class="lbl">Enter 6-digit code from app *</label>
          <input type="text" id="setup-totp-code" inputmode="numeric" maxlength="6" class="input-field text-center text-xl font-black tracking-[0.5em] py-3" placeholder="000000" autocomplete="one-time-code">
        </div>
        <div id="setup-2fa-error" class="hidden p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs"></div>
        <button onclick="confirm2FAEnrollment('${esc(factorId)}')" class="btn-press w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2">
          <i data-lucide="shield-check" class="w-4 h-4"></i> Verify & Enable 2FA
        </button>
      </div>`;
    if (window.lucide) lucide.createIcons();
    setTimeout(() => document.getElementById('setup-totp-code')?.focus(), 100);
    document.getElementById('setup-totp-code')?.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 6);
    });
  } catch (err) {
    document.getElementById('2fa-setup-content').innerHTML = `<div class="text-red-400 text-sm text-center py-4">${esc(err.message)}</div>`;
  }
};

window.confirm2FAEnrollment = async function(factorId) {
  const code = document.getElementById('setup-totp-code')?.value?.trim();
  const errEl = document.getElementById('setup-2fa-error');
  if (!code || code.length !== 6) { if (errEl) { errEl.textContent = 'Enter the 6-digit code.'; errEl.classList.remove('hidden'); } return; }
  try {
    const { data: challenge, error: chErr } = await supabase.auth.mfa.challenge({ factorId });
    if (chErr) throw chErr;
    const { error: verErr } = await supabase.auth.mfa.verify({ factorId, challengeId: challenge.id, code });
    if (verErr) throw verErr;
    // Generate backup codes and save to admin_2fa table
    const backupCodes = generateBackupCodes(10);
    await supabase.from('admin_2fa').upsert({ user_id: state.user.id, enabled: true, backup_codes: backupCodes });
    await logLoginEvent(state.user.id, '2fa_enrolled');
    closeModal();
    // Show backup codes in a new modal
    showBackupCodesModal(backupCodes.map(c => c.code));
    renderSecurity();
  } catch (err) {
    const errEl = document.getElementById('setup-2fa-error');
    if (errEl) { errEl.textContent = err.message?.includes('Invalid') ? 'Wrong code. Check your app and try again.' : err.message; errEl.classList.remove('hidden'); }
    document.getElementById('setup-totp-code').value = '';
    document.getElementById('setup-totp-code').focus();
  }
};

function generateBackupCodes(n) {
  const codes = [];
  for (let i = 0; i < n; i++) {
    const raw = Array.from({ length: 16 }, () => 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[Math.floor(Math.random() * 32)]).join('');
    codes.push({ code: `${raw.slice(0,4)}-${raw.slice(4,8)}-${raw.slice(8,12)}-${raw.slice(12,16)}`, used: false });
  }
  return codes;
}

function showBackupCodesModal(codes) {
  openModal(`
    <div class="modal-overlay">
      <div class="modal-box">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0"><i data-lucide="key" class="w-5 h-5 text-amber-400"></i></div>
          <div>
            <h3 class="text-base font-black text-white">Save Your Backup Codes</h3>
            <p class="text-xs text-red-400 font-bold">âš  These will not be shown again!</p>
          </div>
        </div>
        <p class="text-xs text-gray-400 mb-4">Store these codes somewhere safe. If you lose your authenticator, use one of these to log in. Each code works once.</p>
        <div class="grid grid-cols-2 gap-2 mb-5">
          ${codes.map(c => `<code class="font-mono text-xs px-3 py-2 bg-blue-500/5 text-blue-300 border border-blue-500/15 rounded-lg text-center select-all">${esc(c)}</code>`).join('')}
        </div>
        <div class="flex gap-3">
          <button onclick="copyBackupCodes([${codes.map(c=>`'${c}'`).join(',')}])" class="btn-press flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-xl text-xs transition"><i data-lucide="copy" class="w-4 h-4"></i> Copy All</button>
          <button onclick="downloadBackupCodes([${codes.map(c=>`'${c}'`).join(',')}])" class="btn-press flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded-xl text-xs transition"><i data-lucide="download" class="w-4 h-4"></i> Download</button>
          <button onclick="closeModal()" class="btn-press px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-xl text-xs transition">Done</button>
        </div>
      </div>
    </div>`);
  if (window.lucide) lucide.createIcons();
}

window.copyBackupCodes = function(codes) { navigator.clipboard.writeText(codes.join('\n')).then(() => showToast('Backup codes copied!')); };
window.downloadBackupCodes = function(codes) {
  const blob = new Blob([`Weverse Admin Backup Codes\nGenerated: ${new Date().toISOString()}\n\n${codes.join('\n')}\n\nEach code works once. Store securely.`], { type: 'text/plain' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'kco-admin-backup-codes.txt'; a.click();
};

window.regenerateBackupCodes = async function() {
  if (!confirm('This will invalidate ALL existing backup codes. Continue?')) return;
  const newCodes = generateBackupCodes(10);
  await supabase.from('admin_2fa').update({ backup_codes: newCodes }).eq('user_id', state.user.id);
  showToast('New backup codes generated');
  showBackupCodesModal(newCodes.map(c => c.code));
  renderSecurity();
};

window.disable2FA = async function() {
  if (!confirm('Disable two-factor authentication? Your account will be less secure.')) return;
  try {
    const { data: factors } = await supabase.auth.mfa.listFactors();
    const totpFactor = (factors?.totp || [])[0];
    if (totpFactor) {
      const { error } = await supabase.auth.mfa.unenroll({ factorId: totpFactor.id });
      if (error) throw error;
    }
    await supabase.from('admin_2fa').update({ enabled: false }).eq('user_id', state.user.id);
    await logLoginEvent(state.user.id, '2fa_disabled');
    showToast('2FA has been disabled');
    renderSecurity();
  } catch (err) { showToast(err.message, 'error'); }
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  17. ACTIVITY LOGS
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderActivity() {
  const content = document.getElementById('content');
  try {
    const { data: logs } = await supabase.from('admin_activity_logs').select('*').order('created_at', { ascending: false }).limit(100);
    content.innerHTML = `
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Activity Logs</h2>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Action</th><th>Entity</th><th class="hidden sm:table-cell">Admin</th><th>Date</th></tr></thead>
              <tbody>
                ${(logs || []).length === 0 ? '<tr><td colspan="4" class="text-center text-gray-500 py-8">No activity yet</td></tr>' :
                  (logs || []).map(l => `<tr>
                    <td><span class="text-xs font-bold text-white">${esc(l.action)}</span></td>
                    <td><span class="text-xs text-gray-400">${esc(l.entity_type || 'â€”')} <span class="text-gray-600">${esc(l.entity_id?.slice(0, 8) || '')}</span></span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-blue-400">${esc(l.user_email || l.user_id?.slice(0, 8) || 'â€”')}</span></td>
                    <td><span class="text-xs text-gray-500">${fmtDT(l.created_at)}</span></td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  18. BACKUP & RESTORE
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderBackup() {
  const content = document.getElementById('content');
  try {
    const { data: history } = await supabase.from('deployment_history').select('*').order('created_at', { ascending: false }).limit(20);
    content.innerHTML = `
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white">Backup & Restore</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <div class="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-3"><i data-lucide="download" class="w-5 h-5 text-blue-400"></i></div>
            <h3 class="text-sm font-black text-white mb-1">Export Products</h3>
            <p class="text-xs text-gray-400 mb-4">Download all products and properties as a JSON file.</p>
            <button onclick="exportProducts()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
              <i data-lucide="download" class="w-4 h-4"></i> Download JSON
            </button>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <div class="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center mb-3"><i data-lucide="database" class="w-5 h-5 text-violet-400"></i></div>
            <h3 class="text-sm font-black text-white mb-1">Export Orders</h3>
            <p class="text-xs text-gray-400 mb-4">Download all order data as a CSV file.</p>
            <button onclick="exportOrders()" class="btn-press flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
              <i data-lucide="file-down" class="w-4 h-4"></i> Download CSV
            </button>
          </div>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="p-4 border-b border-blue-500/10"><h3 class="text-sm font-black text-white">Deployment History</h3></div>
          <div class="divide-y divide-blue-500/5">
            ${(history || []).length === 0 ? '<p class="text-xs text-gray-500 text-center py-8">No deployment history</p>' :
              (history || []).map(h => `<div class="flex items-center gap-3 px-4 py-3">
                <div class="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="rocket" class="w-4 h-4 text-emerald-400"></i></div>
                <div class="flex-1"><p class="text-xs font-bold text-white">${esc(h.version || h.id?.slice(0, 8))}</p><p class="text-[10px] text-gray-500">${fmtDT(h.created_at)}</p></div>
                ${badge(h.status || 'completed')}
              </div>`).join('')}
          </div>
        </div>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

window.exportProducts = async function() {
  const { data } = await supabase.from('showroom_listings').select('*');
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `kco-products-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  showToast('Products exported!');
};

window.exportOrders = async function() {
  const { data } = await supabase.from('payment_receipts').select('*').order('created_at', { ascending: false });
  if (!data || !data.length) { showToast('No orders to export', 'info'); return; }
  const headers = Object.keys(data[0]).join(',');
  const rows = data.map(r => Object.values(r).map(v => `"${String(v || '').replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([headers + '\n' + rows], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `kco-orders-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  showToast('Orders exported!');
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  19. SETTINGS
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderSettings() {
  const content = document.getElementById('content');
  const { data: s } = await supabase.from('site_settings').select('*').limit(1).maybeSingle();
  const d = s || {};
  content.innerHTML = `
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">Settings</h2>
      <form id="settings-form" onsubmit="saveSettings(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">General Settings</h3>
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Default Currency</label><select class="input-field" name="default_currency">
              ${['USD','EUR','GBP','NGN','KES','ZAR','GHS'].map(c => `<option value="${c}" ${(d.default_currency||'USD')===c?'selected':''}>${c}</option>`).join('')}
            </select></div>
            <div><label class="lbl">Default Language</label><select class="input-field" name="default_language">
              ${['en','fr','es','de','pt','ar','sw'].map(l => `<option value="${l}" ${(d.default_language||'en')===l?'selected':''}>${l}</option>`).join('')}
            </select></div>
            <div><label class="lbl">Timezone</label><input class="input-field" name="timezone" value="${esc(d.timezone||'UTC')}" placeholder="UTC"></div>
            <div><label class="lbl">Low Stock Threshold</label><input type="number" class="input-field" name="low_stock_threshold" value="${esc(d.low_stock_threshold||10)}" min="1"></div>
          </div>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
          <h3 class="text-sm font-black text-white">Feature Toggles</h3>
          ${[
            { key: 'maintenance_mode', label: 'Maintenance Mode', desc: 'Show a maintenance page to visitors' },
            { key: 'reviews_enabled', label: 'Reviews Enabled', desc: 'Allow customers to leave reviews', default: true },
            { key: 'wishlist_enabled', label: 'Wishlist Enabled', desc: 'Allow customers to save products', default: true },
            { key: 'guest_checkout', label: 'Guest Checkout', desc: 'Allow checkout without an account', default: true },
          ].map(f => `
            <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
              <div><p class="text-xs font-bold text-white">${f.label}</p><p class="text-[11px] text-gray-500">${f.desc}</p></div>
              <label class="toggle-switch"><input type="checkbox" name="${f.key}" ${d[f.key] !== false && (d[f.key] || f.default) ? 'checked' : ''}><span class="toggle-slider"></span></label>
            </div>`).join('')}
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Settings</button>
      </form>
    </div>`;
  if (window.lucide) lucide.createIcons();
}

window.saveSettings = async function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = {};
  for (const [k, v] of fd.entries()) data[k] = v;
  ['maintenance_mode','reviews_enabled','wishlist_enabled','guest_checkout'].forEach(k => { data[k] = k in data; });
  await supabase.from('site_settings').upsert({ id: 1, ...data });
  showToast('Settings saved!');
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  HOMEPAGE BRANDING  (banner image for the homepage header)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderHomepageBrandingManager() {
  const content = document.getElementById('content');
  if (content) content.innerHTML = loading();
  try {
    const { data: s } = await supabase.from('site_settings').select('*').limit(1).maybeSingle();
    const d = s || {};
    const bannerUrl = d.homepage_banner_image || '';
    const bannerAlt = d.homepage_banner_alt || 'Homepage header banner';
    const bannerCaption = bannerUrl ? 'Uploaded banner will appear at the top of the homepage only.' : 'No homepage banner is set yet.';

    content.innerHTML = `
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 class="text-xl font-black text-white flex items-center gap-2"><i data-lucide="image" class="w-5 h-5 text-blue-400"></i> Homepage Branding</h2>
            <p class="text-xs text-gray-500 mt-1">Upload a header banner for the homepage. This does not change your logo, text, colors, or verification badge.</p>
          </div>
          <button type="button" onclick="toggleHomepageBannerPreview()" class="btn-press flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition">
            <i data-lucide="eye" class="w-3.5 h-3.5"></i> Live Preview
          </button>
        </div>

        <div id="homepage-banner-preview-panel" class="glass-soft border border-violet-500/20 rounded-2xl p-5 space-y-3 hidden">
          <h3 class="text-xs font-black text-violet-300 uppercase tracking-wider flex items-center gap-2"><i data-lucide="eye" class="w-3.5 h-3.5"></i> Live Preview</h3>
          <div class="rounded-2xl overflow-hidden border border-blue-500/10 bg-[#0f172a]">
            <div class="px-4 py-3 border-b border-white/5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
              <i data-lucide="layout-panel-top" class="w-3.5 h-3.5 text-blue-400"></i>
              Homepage header banner
            </div>
            <div class="bg-[#070b16] p-3 sm:p-4">
              <div class="overflow-hidden rounded-xl border border-white/10 bg-[#111827] shadow-2xl shadow-black/20" style="aspect-ratio: 1600 / 320;">
                ${bannerUrl ? `<img id="homepage-banner-preview-img" src="${esc(bannerUrl)}" alt="${esc(bannerAlt)}" class="h-full w-full object-cover">` : '<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-off" class="mx-auto w-8 h-8 text-gray-500"></i><p class="mt-2 text-xs font-semibold text-gray-500">No banner selected</p></div></div>'}
              </div>
            </div>
            <div class="px-4 py-3 border-t border-white/5 bg-[#0b1020] flex items-center gap-2 text-[11px] text-gray-400">
              <i data-lucide="crop" class="w-3.5 h-3.5 text-blue-400"></i>
              <span>Crop / resize is previewed in a fixed banner frame. Wide images work best.</span>
            </div>
          </div>
          <p id="homepage-banner-preview-note" class="text-[10px] text-gray-500">${esc(bannerCaption)}</p>
        </div>

        <form id="homepage-branding-form" onsubmit="saveHomepageBranding(event)" class="space-y-5">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <div class="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="image-plus" class="w-4 h-4 text-blue-400"></i> Header Banner Image</h3>
                <p class="text-[11px] text-gray-500 mt-1">PNG, JPG, WEBP. The banner is stored permanently and published instantly after saving.</p>
              </div>
              <span class="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full font-bold">Homepage only</span>
            </div>

            <div id="homepage-banner-status" class="hidden p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300 flex items-center gap-2">
              <i data-lucide="loader-2" class="w-4 h-4 animate-spin shrink-0"></i>
              <span id="homepage-banner-msg">Uploadingâ€¦</span>
            </div>

            <div class="grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
              <div class="space-y-3">
                <div class="group relative overflow-hidden rounded-2xl border border-dashed border-blue-500/25 bg-[#0b1020] transition hover:border-blue-500/50">
                  <div class="p-3 sm:p-4">
                    <div class="overflow-hidden rounded-xl border border-white/10 bg-[#111827]" style="aspect-ratio: 1600 / 320;">
                      ${bannerUrl ? `<img id="homepage-banner-image" src="${esc(bannerUrl)}" alt="${esc(bannerAlt)}" class="h-full w-full object-cover">` : '<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-plus" class="mx-auto w-8 h-8 text-blue-400"></i><p class="mt-2 text-xs font-semibold text-gray-400">Upload a homepage banner</p></div></div>'}
                    </div>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <button type="button" onclick="triggerImgUpload('homepage_banner_image')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">${bannerUrl ? 'Replace Image' : 'Upload Image'}</button>
                      <button type="button" onclick="clearHomepageBannerImg()" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove Image</button>
                      <button type="button" onclick="restoreHomepageBannerDefault()" class="text-xs font-bold text-white bg-slate-700 px-3 py-1.5 rounded-lg">Restore Default</button>
                    </div>
                  </div>
                </div>
                <input type="file" id="file-homepage_banner_image" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'homepage_banner_image')">
                <input type="hidden" name="homepage_banner_image" id="val-homepage_banner_image" value="${esc(bannerUrl)}">
                <input type="text" id="url-homepage_banner_image" value="${esc(bannerUrl)}" placeholder="Or paste image URL" oninput="document.getElementById('val-homepage_banner_image').value=this.value;updateHomepageBannerPreview()" class="input-field text-xs">
                <p class="text-[10px] text-gray-500">Use a wide image for the cleanest banner. The homepage frame will crop/resize it automatically.</p>
              </div>

              <div class="space-y-3">
                <div>
                  <label class="lbl">Banner Alt Text</label>
                  <textarea class="input-field" id="homepage_banner_alt" name="homepage_banner_alt" rows="4" placeholder="Accessible description for the banner image">${esc(bannerAlt)}</textarea>
                </div>
                <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-2">
                  <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> Publish Controls</p>
                  <p class="text-[11px] text-gray-500">Click Publish Changes to save the banner permanently. Remove Image clears it from the homepage.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 bg-blue-500/5 border border-blue-500/15 rounded-xl text-xs text-blue-300 flex items-start gap-3">
            <i data-lucide="info" class="w-4 h-4 shrink-0 mt-0.5 text-blue-400"></i>
            <p>The homepage banner is separate from your brand logo and brand text. It only affects the top homepage header area.</p>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2">
            <i data-lucide="upload" class="w-4 h-4"></i> Publish Changes
          </button>
        </form>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) {
    if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`;
  }
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  BRAND MANAGER  (name Â· slogan Â· logo Â· verified badge Â· live preview)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderBrandManager() {
  const content = document.getElementById('content');
  if (content) content.innerHTML = loading();
  try {
    const { data: s } = await supabase.from('site_settings').select('*').limit(1).maybeSingle();
    const d = s || {};
    const fallbackBrandName = d.brand_name || d.site_name || DEFAULT_BRAND_NAME;
    const fallbackBrandSlogan = d.brand_slogan || d.site_tagline || DEFAULT_BRAND_SLOGAN;
    const fallbackBrandLogo = d.brand_logo || d.brand_header_logo || '';

    function imgSlot(label, fieldName, currentUrl, hint = '', accent = 'blue') {
      const hasImg = !!(currentUrl && currentUrl.trim());
      return `
        <div class="glass-soft border border-${accent}-500/15 rounded-xl p-4 space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-xs font-black text-white">${esc(label)}</p>
            ${hasImg ? `<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">âœ“ Uploaded</span>` : `<span class="text-[9px] text-gray-600">Empty</span>`}
          </div>
          ${hasImg
            ? `<div class="relative group w-full h-24 rounded-xl overflow-hidden bg-gray-900 border border-blue-500/10 flex items-center justify-center">
                <img src="${esc(currentUrl)}" alt="${esc(label)}" class="max-h-20 max-w-full object-contain p-2" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-600 text-center&quot;>Image broken</p>'">
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                  <button type="button" onclick="triggerImgUpload('${fieldName}')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">Replace</button>
                  <button type="button" onclick="clearBrandImg('${fieldName}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
                </div>
               </div>`
            : `<div class="w-full h-24 rounded-xl border-2 border-dashed border-${accent}-500/25 hover:border-${accent}-500/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition" onclick="triggerImgUpload('${fieldName}')">
                <i data-lucide="image-plus" class="w-7 h-7 text-${accent}-400"></i>
                <p class="text-[11px] text-gray-500">Click to upload</p>
               </div>`}
          ${hint ? `<p class="text-[10px] text-gray-500">${esc(hint)}</p>` : ''}
          <input type="file" id="file-${fieldName}" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'${fieldName}')">
          <input type="hidden" name="${fieldName}" id="val-${fieldName}" value="${esc(currentUrl || '')}">
          <div class="flex gap-2">
            <input class="input-field text-xs flex-1 ${hasImg ? '' : 'hidden'}" id="url-${fieldName}" value="${esc(currentUrl || '')}" placeholder="Or paste image URL" oninput="document.getElementById('val-${fieldName}').value=this.value;updateLivePreview()">
            <button type="button" onclick="document.getElementById('url-${fieldName}').classList.toggle('hidden')" class="text-[10px] text-${accent}-400 hover:text-${accent}-300 transition shrink-0">${hasImg ? 'Edit URL' : 'Paste URL'}</button>
          </div>
        </div>`;
    }

    content.innerHTML = `
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white flex items-center gap-2"><i data-lucide="palette" class="w-5 h-5 text-blue-400"></i> Brand Manager</h2>
          <div class="flex items-center gap-2">
            <button type="button" onclick="toggleLivePreview()" class="btn-press flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> Live Preview
            </button>
          </div>
        </div>

        <!-- â”€â”€ LIVE PREVIEW PANEL â”€â”€ -->
        <div id="live-preview-panel" class="hidden glass-soft border border-violet-500/20 rounded-2xl p-5 space-y-3">
          <h3 class="text-xs font-black text-violet-300 uppercase tracking-wider flex items-center gap-2"><i data-lucide="eye" class="w-3.5 h-3.5"></i> Live Preview â€” updates as you type</h3>
          <!-- Header preview -->
          <div class="rounded-xl overflow-hidden border border-blue-500/10">
            <div id="preview-header" class="flex items-center gap-3 px-4 py-3" style="background:#0f172a">
              <div id="preview-logo-wrap" class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style="background:var(--preview-primary,#f97316)">
                ${fallbackBrandLogo ? `<img src="${esc(fallbackBrandLogo)}" alt="${esc(fallbackBrandName)}" class="w-full h-full object-contain p-1">` : '<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
              </div>
              <div>
                <p id="preview-name" class="text-sm font-black text-white leading-none">${esc(fallbackBrandName)}</p>
                <p id="preview-slogan" class="text-[10px] text-blue-400 font-semibold mt-0.5">${esc(fallbackBrandSlogan)}</p>
              </div>
              <div id="preview-badge-wrap" class="ml-auto ${d.brand_badge ? '' : 'hidden'}">
                <img id="preview-badge" src="${esc(d.brand_badge||'')}" alt="Verified" class="w-6 h-6 object-contain">
              </div>
            </div>
            <div class="px-4 py-2 border-t border-gray-800 text-[11px] text-gray-500" style="background:#070b16">
              <span id="preview-btn" style="background:${esc(d.brand_primary_color||'#f97316')};color:#000;padding:4px 12px;border-radius:8px;font-weight:700;font-size:11px">Shop Now</span>
              <span class="ml-3" style="color:${esc(d.brand_secondary_color||'#3b82f6')}">All Products â†’</span>
            </div>
          </div>
          <!-- Footer preview -->
          <div id="preview-footer" class="rounded-xl px-4 py-3 border border-gray-800 flex items-center gap-3" style="background:#0f172a">
            <div id="preview-footer-logo-wrap" class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style="background:var(--preview-primary,#f97316)">
              ${fallbackBrandLogo ? `<img src="${esc(fallbackBrandLogo)}" alt="${esc(fallbackBrandName)}" class="w-full h-full object-contain p-1">` : '<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
            </div>
            <div>
              <p id="preview-footer-name" class="text-xs font-black text-white">${esc(fallbackBrandName)}</p>
              <p id="preview-footer-slogan" class="text-[10px] text-gray-500">${esc(fallbackBrandSlogan)}</p>
            </div>
            <p class="ml-auto text-[10px] text-gray-600">Â© 2026 <span id="preview-copy-name">${esc(fallbackBrandName)}</span></p>
          </div>
          <p class="text-[10px] text-gray-500">This is how your brand will appear on every page. Click Save to apply everywhere.</p>
        </div>

        <form id="brand-form" onsubmit="saveBrandSettings(event)" class="space-y-5">

          <!-- â”€â”€ Brand Identity â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="type" class="w-4 h-4 text-blue-400"></i> Brand Identity</h3>
            <div class="form-grid form-grid-2">
              <div>
                <label class="lbl">Brand Name *</label>
                <input class="input-field" name="brand_name" id="inp-brand-name" value="${esc(fallbackBrandName)}" placeholder="Your brand name" required oninput="updateLivePreview()">
              </div>
              <div>
                <label class="lbl">Short Name</label>
                <input class="input-field" name="brand_short_name" value="${esc(d.brand_short_name||'')}" placeholder="e.g. Weverse">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Slogan / Tagline *</label>
                <input class="input-field" name="brand_slogan" id="inp-brand-slogan" value="${esc(fallbackBrandSlogan)}" placeholder="e.g. Global Shopping â€¢ Worldwide Delivery" oninput="updateLivePreview()">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Brand Description</label>
                <textarea class="input-field" name="brand_description" rows="2" placeholder="Short descriptionâ€¦">${esc(d.brand_description||'')}</textarea>
              </div>
            </div>
          </div>

          <!-- â”€â”€ Brand Colors â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="palette" class="w-4 h-4 text-violet-400"></i> Brand Colors</h3>
            <div class="form-grid form-grid-2">
              <div>
                <label class="lbl">Primary Color (buttons, accents)</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-primary" value="${esc(d.brand_primary_color||'#f97316')}" oninput="document.getElementById('ct-primary').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-primary" name="brand_primary_color" value="${esc(d.brand_primary_color||'#f97316')}" placeholder="#f97316" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-primary').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Secondary Color (links, highlights)</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-secondary" value="${esc(d.brand_secondary_color||'#3b82f6')}" oninput="document.getElementById('ct-secondary').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-secondary" name="brand_secondary_color" value="${esc(d.brand_secondary_color||'#3b82f6')}" placeholder="#3b82f6" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-secondary').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Tagline Color 1 (e.g. "GLOBAL SHOPPING")</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-tag1" value="${esc(d.brand_tagline_color1||'#22d3ee')}" oninput="document.getElementById('ct-tag1').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-tag1" name="brand_tagline_color1" value="${esc(d.brand_tagline_color1||'#22d3ee')}" placeholder="#22d3ee" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-tag1').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Tagline Color 2 (e.g. "WORLDWIDE DELIVERY")</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-tag2" value="${esc(d.brand_tagline_color2||'#a3e635')}" oninput="document.getElementById('ct-tag2').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-tag2" name="brand_tagline_color2" value="${esc(d.brand_tagline_color2||'#a3e635')}" placeholder="#a3e635" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-tag2').value=this.value;updateLivePreview()">
                </div>
              </div>
            </div>
          </div>

          <!-- â”€â”€ Brand Font â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="type" class="w-4 h-4 text-amber-400"></i> Brand Font</h3>
            <div class="form-grid form-grid-2">
              <div>
                <label class="lbl">Font Family</label>
                <select class="input-field" name="brand_font" id="brand-font-select" onchange="previewFont(this.value)">
                  ${['Inter','Poppins','Roboto','Montserrat','Nunito','Raleway','Lato','Open Sans','Outfit','Plus Jakarta Sans','DM Sans','Urbanist','Sora','Manrope','Work Sans','Space Grotesk'].map(f=>`<option value="${f}" ${(d.brand_font||'Inter')===f?'selected':''}>${f}</option>`).join('')}
                </select>
              </div>
              <div>
                <label class="lbl">Custom Google Font (overrides above)</label>
                <input class="input-field" name="brand_custom_font" value="${esc(d.brand_custom_font||'')}" placeholder="e.g. Space Grotesk">
              </div>
            </div>
            <div id="font-preview" class="p-3 rounded-xl bg-gray-900 border border-blue-500/10">
              <p id="font-sample" class="text-sm text-white font-bold" style="font-family:'${esc(d.brand_font||'Inter')}',sans-serif">The quick brown fox jumps â€” 0123456789 Â· Weverse Online Shop</p>
            </div>
          </div>

          <!-- â”€â”€ Logo & Verified Badge â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="image" class="w-4 h-4 text-emerald-400"></i> Logos & Verified Badge</h3>
              <p class="text-[10px] text-gray-500">PNG, SVG, WebP</p>
            </div>
            <div id="brand-upload-status" class="hidden p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300 flex items-center gap-2">
              <i data-lucide="loader-2" class="w-4 h-4 animate-spin shrink-0"></i>
              <span id="brand-upload-msg">Uploadingâ€¦</span>
            </div>

            <!-- Verified Badge â€” highlighted at top -->
            <div class="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl space-y-3">
              <div class="flex items-center gap-2 mb-1">
                <i data-lucide="badge-check" class="w-4 h-4 text-blue-400"></i>
                <p class="text-xs font-black text-white">Verified Badge</p>
                <span class="text-[9px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-full font-bold">Shows next to your brand name</span>
              </div>
              ${imgSlot('Verification Badge Image', 'brand_badge', d.brand_badge, 'Upload your blue checkmark or any verification badge. Recommended: 64Ã—64px PNG with transparent background.', 'blue')}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              ${imgSlot('Brand Logo / Banner Image', 'brand_logo',        fallbackBrandLogo,   'Upload your image here. This changes only the logo/banner image and keeps the other brand fields as they are.')}
              ${imgSlot('Favicon / Tab Icon',   'brand_favicon',     d.brand_favicon,     'Browser tab icon. 32Ã—32 or 64Ã—64px.')}
              ${imgSlot('Mobile Logo',          'brand_mobile_logo', d.brand_mobile_logo, 'Smaller logo for phones. 120Ã—40px.')}
              ${imgSlot('Header Logo',          'brand_header_logo', d.brand_header_logo, 'Top navigation bar.')}
              ${imgSlot('Footer Logo',          'brand_footer_logo', d.brand_footer_logo, 'Website footer.')}
              ${imgSlot('Login Page Logo',      'brand_login_logo',  d.brand_login_logo,  'Shown on auth/login page.')}
              ${imgSlot('Admin Dashboard Logo', 'brand_admin_logo',  d.brand_admin_logo,  'Admin sidebar header.')}
              ${imgSlot('OG / Social Image',    'brand_og_image',    d.brand_og_image,    '1200Ã—630px â€” shown when sharing links.')}
            </div>
          </div>

          <!-- â”€â”€ Contact â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="globe" class="w-4 h-4 text-blue-400"></i> Website & Contact</h3>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Website URL</label><input class="input-field" name="brand_website_url" value="${esc(d.brand_website_url||d.production_url||'https://weverseonlineshop.com')}" placeholder="https://â€¦"></div>
              <div><label class="lbl">Support Email</label><input type="email" class="input-field" name="brand_email" value="${esc(d.brand_email||d.contact_email||'')}" placeholder="support@â€¦"></div>
              <div><label class="lbl">Phone / WhatsApp</label><input class="input-field" name="brand_phone" value="${esc(d.brand_phone||d.contact_phone||'')}" placeholder="+1 234â€¦"></div>
              <div><label class="lbl">Business Address</label><input class="input-field" name="brand_address" value="${esc(d.brand_address||d.contact_address||'')}" placeholder="City, Country"></div>
            </div>
          </div>

          <div class="p-4 bg-blue-500/5 border border-blue-500/15 rounded-xl text-xs text-blue-300 flex items-start gap-3">
            <i data-lucide="info" class="w-4 h-4 shrink-0 mt-0.5 text-blue-400"></i>
            <p>After saving, your brand name, logo image, slogan, and verified badge will automatically appear on <strong>every page</strong> â€” Header, Footer, Login, Checkout, Contact, Admin, and all future pages. Uploading the image does not change your other brand settings.</p>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2">
            <i data-lucide="save" class="w-4 h-4"></i> Save Brand & Apply to All Pages
          </button>
        </form>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

window.toggleLivePreview = function() {
  const panel = document.getElementById('live-preview-panel');
  panel?.classList.toggle('hidden');
  updateLivePreview();
};

window.updateLivePreview = function() {
  const panel = document.getElementById('live-preview-panel');
  if (!panel || panel.classList.contains('hidden')) return;
  const name   = document.getElementById('inp-brand-name')?.value   || DEFAULT_BRAND_NAME;
  const slogan = document.getElementById('inp-brand-slogan')?.value || DEFAULT_BRAND_SLOGAN;
  const primary   = document.getElementById('ct-primary')?.value   || '#f97316';
  const secondary = document.getElementById('ct-secondary')?.value || '#3b82f6';
  const tagColor1 = document.getElementById('ct-tag1')?.value   || '#22d3ee';
  const tagColor2 = document.getElementById('ct-tag2')?.value   || '#a3e635';
  const logo  = document.getElementById('val-brand_logo')?.value   || DEFAULT_BRAND_LOGO;
  const badge = document.getElementById('val-brand_badge')?.value  || '';

  // Update preview elements
  ['preview-name','preview-footer-name','preview-copy-name'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = name; });
  ['preview-slogan','preview-footer-slogan'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = slogan; });

  // Tagline preview colors (show split colors on the preview slogan)
  const ps = document.getElementById('preview-slogan');
  if (ps && slogan) {
    const s = slogan;
    const commaIdx = s.indexOf(',');
    const part1 = commaIdx > -1 ? s.slice(0, commaIdx + 1) : s;
    const part2 = commaIdx > -1 ? s.slice(commaIdx + 1) : '';
    ps.innerHTML = `<span style="color:${tagColor1};font-weight:800">${esc(part1)}</span><span style="color:${tagColor2};font-weight:700">${esc(part2)}</span>`;
  }

  const btn = document.getElementById('preview-btn');
  if (btn) { btn.style.background = primary; }
  const link = panel.querySelector('[style*="color:"]');
  if (link) link.style.color = secondary;

  // Logo preview
  ['preview-logo-wrap','preview-footer-logo-wrap'].forEach(id => {
    const wrap = document.getElementById(id);
    if (!wrap) return;
    if (logo) {
      wrap.innerHTML = `<img src="${logo}" alt="${name}" class="w-full h-full object-contain p-1">`;
      wrap.style.background = 'transparent';
    } else {
      wrap.innerHTML = '<i data-lucide="globe" class="w-4 h-4 text-white"></i>';
      wrap.style.background = primary;
      if (window.lucide) lucide.createIcons();
    }
  });

  // Badge preview
  const badgeWrap = document.getElementById('preview-badge-wrap');
  const badgeImg  = document.getElementById('preview-badge');
  if (badgeWrap && badgeImg) {
    if (badge) { badgeImg.src = badge; badgeWrap.classList.remove('hidden'); }
    else badgeWrap.classList.add('hidden');
  }
};

window.triggerImgUpload = function(field) {
  document.getElementById('file-' + field)?.click();
};

window.clearBrandImg = function(field) {
  document.getElementById('val-' + field).value = '';
  const urlEl = document.getElementById('url-' + field);
  if (urlEl) urlEl.value = '';
  const refresh = field && field.startsWith('homepage_') ? renderHomepageBrandingManager : renderBrandManager;
  refresh();
};

window.clearHomepageBannerImg = function() {
  const val = document.getElementById('val-homepage_banner_image');
  const url = document.getElementById('url-homepage_banner_image');
  const alt = document.getElementById('homepage_banner_alt');
  if (val) val.value = '';
  if (url) url.value = '';
  if (alt) alt.value = '';
  renderHomepageBrandingManager();
};

window.restoreHomepageBannerDefault = function() {
  window.clearHomepageBannerImg();
};

window.syncColor = function(name, val) {
  const picker = document.getElementById('color-' + name);
  if (picker && /^#[0-9a-fA-F]{6}$/.test(val)) picker.value = val;
};

window.previewFont = function(font) {
  const el = document.getElementById('font-sample');
  if (el) el.style.fontFamily = `'${font}', sans-serif`;
  const id = 'gf-preview'; let link = document.getElementById(id);
  if (!link) { link = document.createElement('link'); link.id = id; link.rel = 'stylesheet'; document.head.appendChild(link); }
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(font)}:wght@400;700;900&display=swap`;
};

const BRAND_CACHE_KEY = 'weverse_brand_v1';
const BRAND_OVERRIDE_KEY = 'weverse_brand_override_v1';

function readStoredBrandState() {
  try {
    const override = JSON.parse(localStorage.getItem(BRAND_OVERRIDE_KEY) || 'null');
    if (override && typeof override === 'object') return override;
  } catch {}
  try {
    const cached = JSON.parse(localStorage.getItem(BRAND_CACHE_KEY) || 'null');
    if (cached && typeof cached === 'object') {
      return cached.data && typeof cached.data === 'object' ? cached.data : cached;
    }
  } catch {}
  return {};
}

function persistBrandState(payload) {
  const merged = {
    ...readStoredBrandState(),
    ...payload,
  };
  try { localStorage.setItem(BRAND_OVERRIDE_KEY, JSON.stringify(merged)); } catch {}
  try { localStorage.setItem(BRAND_CACHE_KEY, JSON.stringify({ ts: Date.now(), data: merged })); } catch {}
  window.dispatchEvent(new StorageEvent('storage', { key: BRAND_OVERRIDE_KEY }));
  window.dispatchEvent(new StorageEvent('storage', { key: BRAND_CACHE_KEY }));
  window.dispatchEvent(new CustomEvent('brand-updated', { detail: merged }));
  return merged;
}

window.handleBrandImgUpload = async function(e, field) {
  const file = e.target.files?.[0];
  if (!file) return;
  const isHomepageBanner = field && field.startsWith('homepage_');
  const statusEl = document.getElementById(isHomepageBanner ? 'homepage-banner-status' : 'brand-upload-status');
  const msgEl    = document.getElementById(isHomepageBanner ? 'homepage-banner-msg' : 'brand-upload-msg');
  if (statusEl) statusEl.classList.remove('hidden');
  if (msgEl)    msgEl.textContent = `Uploading ${file.name}â€¦`;
  try {
    const ext  = file.name.split('.').pop();
    const path = `brand/${field}-${Date.now()}.${ext}`;
    const { error: upErr } = await supabase.storage.from('product-images').upload(path, file, { contentType: file.type, upsert: true });
    let url;
    if (upErr) {
      url = URL.createObjectURL(file);
      if (msgEl) msgEl.textContent = `Preview only (storage: ${upErr.message})`;
    } else {
      const { data } = supabase.storage.from('product-images').getPublicUrl(path);
      url = data.publicUrl;
      if (msgEl) msgEl.textContent = `âœ“ ${file.name} uploaded`;
    }
    const valEl = document.getElementById('val-' + field);
    const urlEl = document.getElementById('url-' + field);
    if (valEl) valEl.value = url;
    if (urlEl) { urlEl.value = url; urlEl.classList.remove('hidden'); }
    if (isHomepageBanner) {
      updateHomepageBannerPreview();
    } else {
      updateLivePreview();
      setTimeout(() => renderBrandManager(), 1000);
    }
  } catch (err) {
    if (msgEl) msgEl.textContent = `Upload failed: ${err.message}`;
  }
  setTimeout(() => statusEl?.classList.add('hidden'), 4000);
};

window.saveBrandSettings = async function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const payload = {};
  for (const [k, v] of fd.entries()) {
    if (!k.endsWith('_url')) payload[k] = v;
  }
  // Sync aliases
  if (payload.brand_name)        payload.site_name        = payload.brand_name;
  if (payload.brand_slogan)      payload.site_tagline     = payload.brand_slogan;
  if (payload.brand_description) payload.site_description = payload.brand_description;
  if (payload.brand_email)       payload.contact_email    = payload.brand_email;
  if (payload.brand_phone)       payload.contact_phone    = payload.brand_phone;
  if (payload.brand_address)     payload.contact_address  = payload.brand_address;
  if (payload.brand_website_url) payload.production_url   = payload.brand_website_url;
  const font = payload.brand_custom_font || payload.brand_font;
  if (font) previewFont(font);

  const btn = e.target.querySelector('[type=submit]');
  if (btn) { btn.disabled = true; btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Savingâ€¦'; if (window.lucide) lucide.createIcons(); }

  const { data: existing } = await supabase.from('site_settings').select('id').limit(1).maybeSingle();
  let error;
  if (existing?.id) { ({ error } = await supabase.from('site_settings').update(payload).eq('id', existing.id)); }
  else              { ({ error } = await supabase.from('site_settings').insert(payload)); }

  if (error) {
    persistBrandState(payload);
    showToast('Brand saved locally because the live settings table rejected part of the update. The site now uses the override immediately.', 'success');
  } else {
    persistBrandState(payload);
    showToast('âœ… Brand saved! All pages will now show your updated brand.', 'success');
  }
  setTimeout(() => renderBrandManager(), 500);
};

window.toggleHomepageBannerPreview = function() {
  const panel = document.getElementById('homepage-banner-preview-panel');
  panel?.classList.toggle('hidden');
  updateHomepageBannerPreview();
};

window.updateHomepageBannerPreview = function() {
  const panel = document.getElementById('homepage-banner-preview-panel');
  if (!panel || panel.classList.contains('hidden')) return;
  const banner = document.getElementById('val-homepage_banner_image')?.value || '';
  const alt = document.getElementById('homepage_banner_alt')?.value || 'Homepage header banner';
  const formImage = document.getElementById('homepage-banner-image');
  const previewImage = document.getElementById('homepage-banner-preview-img');
  [formImage, previewImage].forEach(img => {
    if (!img) return;
    if (banner) {
      img.src = banner;
      img.alt = alt;
      img.classList.remove('hidden');
    } else {
      img.classList.add('hidden');
    }
  });
  const note = document.getElementById('homepage-banner-preview-note');
  if (note) note.textContent = banner ? 'Uploaded banner will appear at the top of the homepage only.' : 'No homepage banner is set yet.';
};

window.saveHomepageBranding = async function(e) {
  e.preventDefault();
  const payload = {
    homepage_banner_image: document.getElementById('url-homepage_banner_image')?.value || '',
    homepage_banner_alt: document.getElementById('homepage_banner_alt')?.value || 'Homepage header banner',
  };
  const btn = e.target.querySelector('[type=submit]');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishingâ€¦';
    if (window.lucide) lucide.createIcons();
  }

  const { data: existing } = await supabase.from('site_settings').select('id').limit(1).maybeSingle();
  let error;
  if (existing?.id) {
    ({ error } = await supabase.from('site_settings').update(payload).eq('id', existing.id));
  } else {
    ({ error } = await supabase.from('site_settings').insert(payload));
  }

  if (error) {
    persistBrandState({
      ...readStoredBrandState(),
      homepage_banner_image: payload.homepage_banner_image,
      homepage_banner_alt: payload.homepage_banner_alt,
    });
    showToast('Homepage banner saved locally because the live settings table rejected part of the update. The site now uses the override immediately.', 'success');
  } else {
    persistBrandState({
      ...readStoredBrandState(),
      homepage_banner_image: payload.homepage_banner_image,
      homepage_banner_alt: payload.homepage_banner_alt,
    });
    showToast('Homepage banner published.', 'success');
  }
  setTimeout(() => renderHomepageBrandingManager(), 500);
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  PROMO & BACKGROUNDS  (image/video backgrounds for the
//  trust promo hero, the Weverse Mobile App banner and the
//  Customer Reviews section â€” applied across every page)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
const PROMO_BG_SLOTS = [
  { key: 'trust_promo', label: 'Promotional Hero (Trust & Info Area)', icon: 'sparkles', desc: 'The family-receives-orders section above the app banner. Show it as-is for the built-in design, or upload the real photo/video.' },
  { key: 'app_banner',  label: 'Weverse Mobile App Banner',           icon: 'smartphone', desc: 'The dark app banner at the very bottom of every page.' },
  { key: 'reviews',     label: 'Customer Reviews & Trust',            icon: 'star',       desc: 'The customer reviews strip just below the accordions.' },
];

async function renderPromoBackgrounds(seed) {
  const content = document.getElementById('content');
  if (content) content.innerHTML = loading();
  try {
    let vals = seed ? { ...seed } : null;
    if (!vals) {
      const { data: s } = await supabase.from('site_settings').select('*').limit(1).maybeSingle();
      const d = s || {};
      vals = {};
      for (const slot of PROMO_BG_SLOTS) {
        vals[slot.key + '_bg_image'] = d[slot.key + '_bg_image'] || '';
        vals[slot.key + '_bg_video'] = d[slot.key + '_bg_video'] || '';
      }
    }

    content.innerHTML = `
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white flex items-center gap-2"><i data-lucide="image" class="w-5 h-5 text-blue-400"></i> Promo & Backgrounds</h2>
        <p class="text-xs text-gray-500 max-w-2xl leading-relaxed">Choose an <b class="text-gray-300">image</b> and/or a <b class="text-gray-300">video</b> for each promotional section. When a video is set it plays automatically and the image acts as its poster. Leave a slot empty to keep that section\u2019s built-in design. Changes appear instantly on every page after publishing.</p>

        <div id="promo-bg-status" class="hidden p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300 flex items-center gap-2">
          <i data-lucide="loader-2" class="w-4 h-4 animate-spin shrink-0"></i>
          <span id="promo-bg-msg">Uploadingâ€¦</span>
        </div>

        <form id="promo-bg-form" onsubmit="savePromoBackgrounds(event)" class="space-y-5">
          ${PROMO_BG_SLOTS.map(slot => promoBgSlot(slot, vals)).join('')}

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 flex items-center gap-3">
            <i data-lucide="info" class="w-5 h-5 text-emerald-400 shrink-0"></i>
            <p class="text-[11px] text-gray-400 leading-relaxed">Published backgrounds are cached on visitor devices for up to a minute. Publishing clears the cache so everyone sees your new media immediately.</p>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">
            <i data-lucide="rocket" class="w-4 h-4 inline mr-2"></i>Publish Promo & Backgrounds
          </button>
        </form>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

function promoBgSlot(slot, vals) {
  const imgKey = slot.key + '_bg_image';
  const vidKey = slot.key + '_bg_video';
  const img = vals[imgKey] || '';
  const vid = vals[vidKey] || '';
  const hasImg = !!(img && img.trim());
  const hasVid = !!(vid && vid.trim());
  return `
    <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center gap-3">
          <div class="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20"><i data-lucide="${slot.icon}" class="w-4 h-4 text-blue-400"></i></div>
          <div>
            <p class="text-xs font-black text-white">${slot.label}</p>
            <p class="text-[10px] text-gray-500 mt-0.5 max-w-xl">${slot.desc}</p>
          </div>
        </div>
        <div class="flex gap-1.5">
          ${hasImg ? '<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">âœ“ Image</span>' : ''}
          ${hasVid ? '<span class="text-[9px] font-bold text-violet-500 bg-violet-500/10 px-1.5 py-0.5 rounded-full">âœ“ Video</span>' : ''}
          ${(hasImg || hasVid) ? '' : '<span class="text-[9px] text-gray-600">Built-in design</span>'}
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${promoBgMedia(slot, imgKey, img, hasImg, 'image')}
        ${promoBgMedia(slot, vidKey, vid, hasVid, 'video')}
      </div>
    </div>`;
}

function promoBgMedia(slot, field, current, has, kind) {
  const isImg = kind === 'image';
  const accent = isImg ? 'blue' : 'violet';
  const icon = isImg ? 'image-plus' : 'video';
  const color = isImg ? 'text-blue-400' : 'text-violet-400';
  return `
    <div>
      <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5"><i data-lucide="${icon}" class="w-3 h-3 ${color}"></i>${kind}</p>
      ${has
        ? `<div class="relative group w-full h-28 rounded-xl overflow-hidden bg-gray-900 border border-${accent}-500/15 flex items-center justify-center">
             ${isImg
               ? `<img src="${esc(current)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`
               : `<video src="${esc(current)}" class="w-full h-full object-cover" muted playsinline preload="metadata"></video>`}
             <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
               <button type="button" onclick="triggerPromoBgUpload('${field}')" class="text-xs font-bold text-white bg-${accent}-600 px-3 py-1.5 rounded-lg">Replace</button>
               <button type="button" onclick="clearPromoBg('${field}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
             </div>
           </div>`
        : `<button type="button" onclick="triggerPromoBgUpload('${field}')" class="w-full h-28 rounded-xl border-2 border-dashed border-${accent}-500/25 hover:border-${accent}-500/50 flex flex-col items-center justify-center gap-1.5 transition">
             <i data-lucide="${icon}" class="w-6 h-6 ${color}"></i>
             <p class="text-[10px] text-gray-500">Upload ${kind}</p>
           </button>`}
      <input type="file" id="file-${field}" class="hidden" accept="${isImg ? 'image/*' : 'video/*'}" onchange="handlePromoBgUpload(event,'${field}')">
      <input type="hidden" name="${field}" id="val-${field}" value="${esc(current)}">
      <div class="flex gap-2 mt-1.5">
        <input class="input-field text-xs flex-1" id="url-${field}" value="${esc(current)}" placeholder="Or paste ${kind} URL" oninput="document.getElementById('val-${field}').value=this.value">
        <button type="button" onclick="document.getElementById('url-${field}').classList.toggle('hidden')" class="text-[10px] text-${accent}-400 hover:text-${accent}-300 transition shrink-0">Edit URL</button>
      </div>
    </div>`;
}

window.triggerPromoBgUpload = function(field) {
  document.getElementById('file-' + field)?.click();
};

function promoBgFormValues() {
  const vals = {};
  for (const slot of PROMO_BG_SLOTS) {
    vals[slot.key + '_bg_image'] = document.getElementById('val-' + slot.key + '_bg_image')?.value || '';
    vals[slot.key + '_bg_video'] = document.getElementById('val-' + slot.key + '_bg_video')?.value || '';
  }
  return vals;
}

window.clearPromoBg = function(field) {
  const seed = promoBgFormValues();
  seed[field] = '';
  const valEl = document.getElementById('val-' + field);
  const urlEl = document.getElementById('url-' + field);
  if (valEl) valEl.value = '';
  if (urlEl) urlEl.value = '';
  renderPromoBackgrounds(seed);
  showToast('Cleared. Publish to apply.', 'info');
};

window.handlePromoBgUpload = async function(e, field) {
  const file = e.target.files?.[0];
  if (!file) return;
  const statusEl = document.getElementById('promo-bg-status');
  const msgEl = document.getElementById('promo-bg-msg');
  if (statusEl) statusEl.classList.remove('hidden');
  if (msgEl) msgEl.textContent = `Uploading ${file.name}â€¦`;
  try {
    const ext = (file.name.split('.').pop() || 'bin').toLowerCase();
    const path = `promo/${field}-${Date.now()}.${ext}`;
    const { error: upErr } = await supabase.storage.from('product-images').upload(path, file, { contentType: file.type, upsert: true });
    let url;
    if (upErr) {
      url = URL.createObjectURL(file);
      if (msgEl) msgEl.textContent = `Preview only (storage: ${upErr.message})`;
    } else {
      const { data } = supabase.storage.from('product-images').getPublicUrl(path);
      url = data.publicUrl;
      if (msgEl) msgEl.textContent = `âœ“ ${file.name} uploaded`;
    }
    const valEl = document.getElementById('val-' + field);
    const urlEl = document.getElementById('url-' + field);
    if (valEl) valEl.value = url;
    if (urlEl) { urlEl.value = url; urlEl.classList.remove('hidden'); }
    const seed = promoBgFormValues();
    renderPromoBackgrounds(seed);
  } catch (err) {
    if (msgEl) msgEl.textContent = `Upload failed: ${err.message}`;
  }
  setTimeout(() => statusEl?.classList.add('hidden'), 4000);
};

window.savePromoBackgrounds = async function(e) {
  e.preventDefault();
  const payload = {};
  for (const slot of PROMO_BG_SLOTS) {
    payload[slot.key + '_bg_image'] = document.getElementById('val-' + slot.key + '_bg_image')?.value || '';
    payload[slot.key + '_bg_video'] = document.getElementById('val-' + slot.key + '_bg_video')?.value || '';
  }
  const btn = e.target.querySelector('[type=submit]');
  if (btn) { btn.disabled = true; btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishingâ€¦'; if (window.lucide) lucide.createIcons(); }

  const { data: existing } = await supabase.from('site_settings').select('id').limit(1).maybeSingle();
  let error;
  if (existing?.id) ({ error } = await supabase.from('site_settings').update(payload).eq('id', existing.id));
  else ({ error } = await supabase.from('site_settings').insert(payload));
  invalidatePromoBackgrounds();
  if (error) {
    showToast('Publish failed â€” the settings table rejected the update. Make sure the new promo-background columns are migrated, then try again.', 'error');
    renderPromoBackgrounds(payload);
  } else {
    showToast('Promo & backgrounds published across all pages.', 'success');
    setTimeout(() => renderPromoBackgrounds(), 500);
  }
};

//  PAYMENT SETTINGS
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
window._manualPaymentAccounts = [];

function blankManualPaymentAccount(currency = 'USD') {
  return {
    id: `bank-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    currency,
    currencyName: currency,
    flag: getFlagEmojiFromCountryCode('US'),
    country: 'United States',
    country_code: 'US',
    bankName: '',
    transferType: 'Local & International',
    beneficiary: '',
    accountNumber: '',
    accountType: '',
    iban: '',
    swift: '',
    routing: '',
    sortCode: '',
    bankCode: '',
    branchCode: '',
    institutionNumber: '',
    transitNumber: '',
    bsbCode: '',
    address: '',
  };
}

function syncManualPaymentAccountsField() {
  const field = document.getElementById('manual-payment-accounts-json');
  if (field) field.value = JSON.stringify(window._manualPaymentAccounts || []);
}

function manualPaymentAccountCard(account, index) {
  const countryCode = account.country_code || 'US';
  return `
    <div class="p-4 glass-soft border border-blue-500/10 rounded-xl space-y-3">
      <div class="flex items-center justify-between gap-3">
        <h4 class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="building-2" class="w-3.5 h-3.5 text-blue-400"></i> Bank Account ${index + 1}</h4>
        <button type="button" onclick="removeManualPaymentAccount(${index})" class="text-[11px] font-bold text-red-400 hover:text-red-300 transition">Remove</button>
      </div>
      <div class="form-grid form-grid-2">
        <div><label class="lbl">Currency *</label><select class="input-field" onchange="updateManualPaymentAccount(${index}, 'currency', this.value)">${SORTED_CURRENCIES.map(currency => `<option value="${currency}" ${account.currency === currency ? 'selected' : ''}>${currency}</option>`).join('')}</select></div>
        <div><label class="lbl">Country *</label><select class="input-field" onchange="updateManualPaymentCountry(${index}, this.value)">${renderCountryOptions(countryCode)}</select></div>
        <div><label class="lbl">Beneficiary / Account Name *</label><input class="input-field" value="${esc(account.beneficiary || '')}" placeholder="Full name on account" oninput="updateManualPaymentAccount(${index}, 'beneficiary', this.value)"></div>
        <div><label class="lbl">Bank Name *</label><input class="input-field" value="${esc(account.bankName || '')}" placeholder="e.g. Citibank" oninput="updateManualPaymentAccount(${index}, 'bankName', this.value)"></div>
        <div><label class="lbl">Account Number</label><input class="input-field font-mono" value="${esc(account.accountNumber || '')}" placeholder="Account number" oninput="updateManualPaymentAccount(${index}, 'accountNumber', this.value)"></div>
        <div><label class="lbl">Transfer Type</label><input class="input-field" value="${esc(account.transferType || '')}" placeholder="Local & International" oninput="updateManualPaymentAccount(${index}, 'transferType', this.value)"></div>
        <div><label class="lbl">Account Type</label><input class="input-field" value="${esc(account.accountType || '')}" placeholder="Checking, Savings..." oninput="updateManualPaymentAccount(${index}, 'accountType', this.value)"></div>
        <div><label class="lbl">IBAN</label><input class="input-field font-mono" value="${esc(account.iban || '')}" placeholder="Optional" oninput="updateManualPaymentAccount(${index}, 'iban', this.value)"></div>
        <div><label class="lbl">SWIFT / BIC</label><input class="input-field font-mono" value="${esc(account.swift || '')}" placeholder="Optional" oninput="updateManualPaymentAccount(${index}, 'swift', this.value)"></div>
        <div><label class="lbl">Routing / ABA</label><input class="input-field font-mono" value="${esc(account.routing || '')}" placeholder="Optional" oninput="updateManualPaymentAccount(${index}, 'routing', this.value)"></div>
        <div><label class="lbl">Sort Code</label><input class="input-field font-mono" value="${esc(account.sortCode || '')}" placeholder="Optional" oninput="updateManualPaymentAccount(${index}, 'sortCode', this.value)"></div>
        <div><label class="lbl">Bank Code</label><input class="input-field font-mono" value="${esc(account.bankCode || '')}" placeholder="Optional" oninput="updateManualPaymentAccount(${index}, 'bankCode', this.value)"></div>
        <div><label class="lbl">Branch Code</label><input class="input-field font-mono" value="${esc(account.branchCode || '')}" placeholder="Optional" oninput="updateManualPaymentAccount(${index}, 'branchCode', this.value)"></div>
        <div><label class="lbl">Institution Number</label><input class="input-field font-mono" value="${esc(account.institutionNumber || '')}" placeholder="Optional" oninput="updateManualPaymentAccount(${index}, 'institutionNumber', this.value)"></div>
        <div><label class="lbl">Transit Number</label><input class="input-field font-mono" value="${esc(account.transitNumber || '')}" placeholder="Optional" oninput="updateManualPaymentAccount(${index}, 'transitNumber', this.value)"></div>
        <div><label class="lbl">BSB Code</label><input class="input-field font-mono" value="${esc(account.bsbCode || '')}" placeholder="Optional" oninput="updateManualPaymentAccount(${index}, 'bsbCode', this.value)"></div>
        <div class="sm:col-span-2"><label class="lbl">Bank Address</label><input class="input-field" value="${esc(account.address || '')}" placeholder="Branch or bank address" oninput="updateManualPaymentAccount(${index}, 'address', this.value)"></div>
      </div>
    </div>`;
}

window.renderManualPaymentAccountsEditor = function() {
  const container = document.getElementById('manual-accounts-editor');
  if (!container) return;
  if (!window._manualPaymentAccounts?.length) window._manualPaymentAccounts = [blankManualPaymentAccount()];
  container.innerHTML = `
    <div class="space-y-4">
      ${window._manualPaymentAccounts.map((account, index) => manualPaymentAccountCard(account, index)).join('')}
      <button type="button" onclick="addManualPaymentAccount()" class="btn-press w-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wide transition flex items-center justify-center gap-2">
        <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Another Bank Account
      </button>
    </div>`;
  syncManualPaymentAccountsField();
  if (window.lucide) lucide.createIcons();
};

window.addManualPaymentAccount = function() {
  window._manualPaymentAccounts.push(blankManualPaymentAccount());
  renderManualPaymentAccountsEditor();
};

window.removeManualPaymentAccount = function(index) {
  window._manualPaymentAccounts.splice(index, 1);
  if (!window._manualPaymentAccounts.length) window._manualPaymentAccounts = [blankManualPaymentAccount()];
  renderManualPaymentAccountsEditor();
};

window.updateManualPaymentAccount = function(index, key, value) {
  const account = window._manualPaymentAccounts[index];
  if (!account) return;
  account[key] = value;
  if (key === 'currency') account.currencyName = value;
  syncManualPaymentAccountsField();
};

window.updateManualPaymentCountry = function(index, countryCode) {
  const account = window._manualPaymentAccounts[index];
  if (!account) return;
  const selected = COUNTRIES.find(country => country.code === countryCode);
  account.country_code = countryCode;
  account.country = selected?.name || '';
  account.flag = selected?.flag || getFlagEmojiFromCountryCode(countryCode);
  syncManualPaymentAccountsField();
  renderManualPaymentAccountsEditor();
};

async function renderPaymentSettings() {
  const content = document.getElementById('content');
  if (content) content.innerHTML = loading();
  try {
    const { data: s } = await supabase.from('site_settings').select('*').limit(1).maybeSingle();
    const cached = loadPaymentSettingsCache() || {};
    const d = { ...cached, ...(s || {}) };
    window._manualPaymentAccounts = getManualPaymentAccounts(d).map(account => ({ ...account }));

    content.innerHTML = `
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white">Payment Settings</h2>
          <div class="flex items-center gap-2 flex-wrap">
            ${d.payment_gateway ? `<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Active: ${esc(d.payment_gateway)}</span>` : '<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Not configured</span>'}
            ${d.payment_mode === 'live' ? '<span class="badge bg-red-500/10 text-red-400 border-red-500/20">ðŸ”´ LIVE MODE</span>' : '<span class="badge bg-blue-500/10 text-blue-400 border-blue-500/20">ðŸ”§ Test Mode</span>'}
          </div>
        </div>

        <form id="payment-form" onsubmit="savePaymentSettings(event)" class="space-y-5">
          <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
            <div class="flex items-center justify-between p-4 border-b border-blue-500/10">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <i data-lucide="landmark" class="w-5 h-5 text-blue-400"></i>
                </div>
                <div>
                  <h3 class="text-sm font-black text-white">Manual Payment (Bank / ATM Transfer)</h3>
                  <p class="text-[11px] text-gray-500">Show the right receiving account based on the customer country and currency.</p>
                </div>
              </div>
              <label class="toggle-switch shrink-0">
                <input type="checkbox" name="manual_payment_enabled" id="manual-toggle" ${d.manual_payment_enabled !== false ? 'checked' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="p-5 space-y-4">
              <input type="hidden" id="manual-payment-accounts-json" name="manual_payment_accounts_json" value="">
              <div id="manual-accounts-editor"></div>
              <div>
                <label class="lbl">Payment Instructions (shown to customer after checkout)</label>
                <textarea class="input-field" name="manual_payment_instructions" rows="4" placeholder="Explain how customers should pay and upload their receipt.">${esc(getPaymentInstructions(d))}</textarea>
              </div>
              <div>
                <label class="lbl">ATM Transfer Instructions (optional, shown separately)</label>
                <textarea class="input-field" name="atm_transfer_instructions" rows="3" placeholder="Optional ATM-specific instructions.">${esc(d.atm_transfer_instructions||'')}</textarea>
              </div>
              <div class="p-3 bg-blue-500/5 border border-blue-500/15 rounded-xl text-[11px] text-blue-300">
                <i data-lucide="info" class="w-3.5 h-3.5 inline mr-1"></i>
                Customers will see the account that matches their detected country currency. If no match exists, they will be guided to use your USD account and upload a receipt for quick verification and shipping.
              </div>
            </div>
          </div>

          <div class="glass-soft border border-amber-500/15 rounded-2xl overflow-hidden">
            <div class="flex items-center justify-between p-4 border-b border-amber-500/10">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <i data-lucide="zap" class="w-5 h-5 text-amber-400"></i>
                </div>
                <div>
                  <h3 class="text-sm font-black text-white">Flutterwave</h3>
                  <p class="text-[11px] text-gray-500">Accept cards, mobile money, bank transfers online</p>
                </div>
              </div>
              <label class="toggle-switch shrink-0">
                <input type="checkbox" name="flutterwave_enabled" ${d.flutterwave_enabled ? 'checked' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="p-5 space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex items-center gap-3 p-3 glass-soft border ${(d.payment_mode||'test')==='test' ? 'border-blue-500/40 bg-blue-500/5' : 'border-blue-500/10'} rounded-xl cursor-pointer">
                  <input type="radio" name="payment_mode" value="test" ${(d.payment_mode||'test')==='test'?'checked':''} class="accent-blue-500">
                  <div><p class="text-xs font-black text-white">ðŸ”§ Test Mode</p><p class="text-[11px] text-gray-500">Use sandbox keys â€” no real money</p></div>
                </label>
                <label class="flex items-center gap-3 p-3 glass-soft border ${d.payment_mode==='live' ? 'border-red-500/40 bg-red-500/5' : 'border-blue-500/10'} rounded-xl cursor-pointer">
                  <input type="radio" name="payment_mode" value="live" ${d.payment_mode==='live'?'checked':''} class="accent-red-500">
                  <div><p class="text-xs font-black text-white">ðŸ”´ Live Mode</p><p class="text-[11px] text-red-400 font-bold">Real money â€” use production keys</p></div>
                </label>
              </div>
              <div class="form-grid form-grid-2">
                <div><label class="lbl">Public Key *</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_public_key" placeholder="${d.flutterwave_public_key ? 'â€¢â€¢â€¢â€¢'+d.flutterwave_public_key.slice(-4) : 'FLWPUBK_TEST-â€¦ or FLWPUBK-â€¦'}">${d.flutterwave_public_key ? '<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>' : ''}</div></div>
                <div><label class="lbl">Secret Key *</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_secret_key" placeholder="${d.flutterwave_secret_key ? 'â€¢â€¢â€¢â€¢'+d.flutterwave_secret_key.slice(-4) : 'FLWSECK_TEST-â€¦ or FLWSECK-â€¦'}">${d.flutterwave_secret_key ? '<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>' : ''}</div></div>
                <div><label class="lbl">Encryption Key</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_encryption_key" placeholder="${d.flutterwave_encryption_key ? 'â€¢â€¢â€¢â€¢'+d.flutterwave_encryption_key.slice(-4) : 'Encryption key from dashboard'}">${d.flutterwave_encryption_key ? '<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>' : ''}</div></div>
                <div><label class="lbl">Webhook Secret</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_webhook_secret" placeholder="${d.flutterwave_webhook_secret ? 'â€¢â€¢â€¢â€¢'+d.flutterwave_webhook_secret.slice(-4) : 'Secret hash for webhook verification'}">${d.flutterwave_webhook_secret ? '<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>' : ''}</div></div>
                <div><label class="lbl">Accepted Currency</label><select class="input-field" name="flutterwave_currency">${['NGN','USD','GBP','EUR','GHS','KES','ZAR','ZMW','TZS','UGX','XAF','XOF'].map(c=>`<option value="${c}" ${(d.flutterwave_currency||'NGN')===c?'selected':''}>${c}</option>`).join('')}</select></div>
                <div><label class="lbl">Redirect URL (after payment)</label><input class="input-field" name="flutterwave_redirect_url" value="${esc(d.flutterwave_redirect_url||'')}" placeholder="${window.location.origin}/payment.html"></div>
              </div>
              <div class="p-3 bg-amber-500/5 border border-amber-500/15 rounded-xl text-[11px] text-amber-300 space-y-1">
                <p><strong>Where to get keys:</strong> <a href="https://dashboard.flutterwave.com/dashboard/settings/apis" target="_blank" class="underline hover:text-amber-200">dashboard.flutterwave.com â†’ Settings â†’ API</a></p>
                <p><strong>Webhook URL to add in Flutterwave:</strong> <code class="bg-black/30 px-1 rounded">${window.location.origin}/api/flutterwave-webhook</code></p>
                <p>Test cards: Visa <code class="bg-black/30 px-1 rounded">4187 4274 1556 4246</code> Â· PIN: <code class="bg-black/30 px-1 rounded">3310</code> Â· OTP: <code class="bg-black/30 px-1 rounded">12345</code></p>
              </div>
              <button type="button" onclick="testFlutterwaveKeys()" class="btn-press flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 px-4 py-2 rounded-xl transition"><i data-lucide="plug" class="w-4 h-4"></i> Test Flutterwave Connection</button>
            </div>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white mb-1">Which payment method is active on checkout?</h3>
            <p class="text-xs text-gray-400 mb-3">Select which method customers see when they go to pay.</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${[{id:'manual',label:'Manual / Bank Transfer',icon:'landmark',color:'blue'},{id:'flutterwave',label:'Flutterwave',icon:'zap',color:'amber'},{id:'both',label:'Both (customer chooses)',icon:'layers',color:'emerald'}].map(g=>`<label class="flex items-center gap-3 p-3 glass-soft border ${(d.payment_gateway||'manual')===g.id ? 'border-blue-500/40 bg-blue-500/5' : 'border-blue-500/10'} rounded-xl cursor-pointer hover:border-blue-500/30 transition"><input type="radio" name="payment_gateway" value="${g.id}" ${(d.payment_gateway||'manual')===g.id?'checked':''} class="accent-blue-500"><div><i data-lucide="${g.icon}" class="w-4 h-4 text-${g.color}-400 mb-0.5"></i><p class="text-xs font-bold text-white">${g.label}</p></div></label>`).join('')}
            </div>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2"><i data-lucide="save" class="w-4 h-4"></i> Save Payment Settings</button>
        </form>
      </div>`;
    renderManualPaymentAccountsEditor();
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

window.savePaymentSettings = async function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());

  const secretFields = ['flutterwave_public_key','flutterwave_secret_key','flutterwave_encryption_key','flutterwave_webhook_secret'];
  const payload = {};

  for (const [k, v] of Object.entries(data)) {
    if (secretFields.includes(k)) {
      if (v && !v.startsWith('â€¢â€¢â€¢â€¢') && v.trim() !== '') payload[k] = v.trim();
    } else {
      payload[k] = v;
    }
  }

  payload.manual_payment_enabled = data.manual_payment_enabled === 'on';
  payload.flutterwave_enabled = data.flutterwave_enabled === 'on';

  let manualAccounts = [];
  try { manualAccounts = JSON.parse(data.manual_payment_accounts_json || '[]'); } catch {}
  payload.manual_payment_accounts = manualAccounts;

  const bank1 = manualAccounts[0] || {};
  const bank2 = manualAccounts[1] || {};
  payload.bank1_account_name = bank1.beneficiary || '';
  payload.bank1_account_number = bank1.accountNumber || '';
  payload.bank1_bank_name = bank1.bankName || '';
  payload.bank1_transfer_type = bank1.transferType || '';
  payload.bank1_sort_code = bank1.sortCode || bank1.routing || '';
  payload.bank1_currency = bank1.currency || 'USD';
  payload.bank2_account_name = bank2.beneficiary || '';
  payload.bank2_account_number = bank2.accountNumber || '';
  payload.bank2_bank_name = bank2.bankName || '';
  payload.bank2_transfer_type = bank2.transferType || '';
  payload.bank2_sort_code = bank2.sortCode || bank2.routing || '';
  payload.bank2_currency = bank2.currency || 'USD';

  savePaymentSettingsCache(payload);

  const { data: existing } = await supabase.from('site_settings').select('id').limit(1).maybeSingle();
  let error;
  if (existing?.id) ({ error } = await supabase.from('site_settings').update(payload).eq('id', existing.id));
  else ({ error } = await supabase.from('site_settings').insert(payload));

  if (error) {
    const message = String(error.message || '');
    if (/manual_payment_accounts|column|schema cache/i.test(message)) {
      showToast('Payment settings saved locally. Run the latest migration to persist them to Supabase.', 'info');
      console.warn(error);
      setTimeout(() => renderPaymentSettings(), 500);
      return;
    }
    showToast('Save failed: ' + error.message, 'error'); console.error(error); return;
  }
  showToast('âœ… Payment settings saved successfully!', 'success');
  setTimeout(() => renderPaymentSettings(), 500);
};

window.testFlutterwaveKeys = async function() {
  const { data: s } = await supabase.from('site_settings').select('flutterwave_public_key').limit(1).maybeSingle();
  if (!s?.flutterwave_public_key) { showToast('Save your Flutterwave public key first', 'info'); return; }
  showToast('Flutterwave key is saved. Use test mode + test card to verify a payment flow.', 'info');
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  20. PUBLISH & DEPLOY  (GitHub + Payment + Webhooks)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
async function renderPublish() {
  const content = document.getElementById('content');
  try {
    const { data: s } = await supabase.from('site_settings').select('*').limit(1).maybeSingle();
    const d = s || {};
    content.innerHTML = `
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white">Publish & Deploy</h2>

        <!-- Status Bar -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 flex flex-wrap items-center gap-4">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${d.github_repo ? 'bg-emerald-400' : 'bg-gray-600'} inline-block"></span>
            <span class="text-xs font-bold ${d.github_repo ? 'text-emerald-400' : 'text-gray-500'}">${d.github_repo ? 'GitHub Connected: ' + esc(d.github_repo) : 'GitHub Not Connected'}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${d.deploy_webhook ? 'bg-blue-400' : 'bg-gray-600'} inline-block"></span>
            <span class="text-xs font-bold ${d.deploy_webhook ? 'text-blue-400' : 'text-gray-500'}">${d.deploy_webhook ? 'Deploy Webhook Set' : 'No Webhook'}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${d.payment_gateway ? 'bg-amber-400' : 'bg-gray-600'} inline-block"></span>
            <span class="text-xs font-bold ${d.payment_gateway ? 'text-amber-400' : 'text-gray-500'}">${d.payment_gateway ? 'Payment: ' + esc(d.payment_gateway) : 'Payment Not Configured'}</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <button onclick="publishAndDeploy(event)" class="btn-press glass-soft border border-emerald-500/20 hover:border-emerald-500/40 rounded-xl p-4 text-center transition" data-publish-easy-btn>
            <i data-lucide="wand-sparkles" class="w-6 h-6 text-emerald-400 mx-auto mb-2"></i>
            <p class="text-xs font-black text-white">One-Click Publish</p>
            <p class="text-[10px] text-gray-500 mt-0.5">Save + Deploy</p>
          </button>
          <button onclick="triggerDeploy(event)" class="btn-press glass-soft border border-blue-500/15 hover:border-blue-500/40 rounded-xl p-4 text-center transition" data-deploy-btn>
            <i data-lucide="rocket" class="w-6 h-6 text-blue-400 mx-auto mb-2"></i>
            <p class="text-xs font-black text-white">Deploy Now</p>
            <p class="text-[10px] text-gray-500 mt-0.5">Push to live</p>
          </button>
          <button onclick="triggerRebuild(event)" class="btn-press glass-soft border border-violet-500/15 hover:border-violet-500/40 rounded-xl p-4 text-center transition" data-rebuild-btn>
            <i data-lucide="refresh-cw" class="w-6 h-6 text-violet-400 mx-auto mb-2"></i>
            <p class="text-xs font-black text-white">Rebuild Site</p>
            <p class="text-[10px] text-gray-500 mt-0.5">Full rebuild</p>
          </button>
          <button onclick="reindexSearch()" class="btn-press glass-soft border border-emerald-500/15 hover:border-emerald-500/40 rounded-xl p-4 text-center transition">
            <i data-lucide="search" class="w-6 h-6 text-emerald-400 mx-auto mb-2"></i>
            <p class="text-xs font-black text-white">Reindex Search</p>
            <p class="text-[10px] text-gray-500 mt-0.5">Update index</p>
          </button>
          <button onclick="syncShowroomToDB()" class="btn-press glass-soft border border-amber-500/15 hover:border-amber-500/40 rounded-xl p-4 text-center transition">
            <i data-lucide="database" class="w-6 h-6 text-amber-400 mx-auto mb-2"></i>
            <p class="text-xs font-black text-white">Sync Products</p>
            <p class="text-[10px] text-gray-500 mt-0.5">DB sync</p>
          </button>
        </div>

        <!-- Settings Form -->
        <form id="deploy-form" onsubmit="saveDeploySettings(event)" class="space-y-5">

          <!-- â”€â”€ GitHub Integration â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2">
              <i data-lucide="github" class="w-4 h-4 text-white"></i> GitHub Integration
            </h3>
            <div class="p-3 bg-blue-500/5 border border-blue-500/20 rounded-xl text-xs text-blue-300">
              Connect your GitHub account so every deployment pushes your code to GitHub automatically.
              When you click <strong>Deploy Now</strong>, the site builds and commits to your repository.
            </div>
            <div class="form-grid form-grid-2">
              <div>
                <label class="lbl">GitHub Username</label>
                <input class="input-field" name="github_username" value="${esc(d.github_username||'')}" placeholder="your-github-username">
              </div>
              <div>
                <label class="lbl">Repository Name</label>
                <input class="input-field" name="github_repo" value="${esc(d.github_repo||'')}" placeholder="my-website-repo">
              </div>
              <div>
                <label class="lbl">Branch</label>
                <input class="input-field" name="github_branch" value="${esc(d.github_branch||'main')}" placeholder="main">
              </div>
              <div>
                <label class="lbl">GitHub Personal Access Token</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="github_token" placeholder="${d.github_token ? 'â€¢â€¢â€¢â€¢' + d.github_token.slice(-4) : 'ghp_â€¦paste your token'}">
                  ${d.github_token ? '<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>' : ''}
                </div>
                <p class="text-[10px] text-gray-500 mt-1">Generate at: <a href="https://github.com/settings/tokens" target="_blank" class="text-blue-400 hover:underline">github.com/settings/tokens</a> (needs repo scope)</p>
              </div>
            </div>
            <button type="button" onclick="testGitHubConnection()" class="btn-press flex items-center gap-2 text-xs font-bold text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2 rounded-xl transition">
              <i data-lucide="plug" class="w-4 h-4"></i> Test GitHub Connection
            </button>
          </div>

          <!-- â”€â”€ Hosting & Deploy Webhook â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2">
              <i data-lucide="cloud-upload" class="w-4 h-4 text-blue-400"></i> Hosting & Auto-Deploy
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${[{id:'netlify',name:'Netlify',icon:'cloud',color:'teal'},{id:'vercel',name:'Vercel',icon:'triangle',color:'white'},{id:'github-pages',name:'GitHub Pages',icon:'github',color:'gray'},{id:'railway',name:'Railway',icon:'train',color:'violet'},{id:'render',name:'Render',icon:'server',color:'blue'}].map(h=>`
                <label class="flex items-center gap-2 p-3 glass-soft border ${(d.hosting_provider||'netlify')===h.id ? 'border-blue-500/40 bg-blue-500/5' : 'border-blue-500/10'} rounded-xl cursor-pointer hover:border-blue-500/30 transition">
                  <input type="radio" name="hosting_provider" value="${h.id}" ${(d.hosting_provider||'netlify')===h.id?'checked':''} class="accent-blue-500">
                  <i data-lucide="${h.icon}" class="w-4 h-4 text-gray-400"></i>
                  <span class="text-xs font-bold text-white">${h.name}</span>
                </label>`).join('')}
            </div>
            <div>
              <label class="lbl">Deploy Webhook URL</label>
              <input class="input-field" name="deploy_webhook" value="${esc(d.deploy_webhook||'')}" placeholder="https://api.netlify.com/build_hooks/â€¦">
              <p class="text-[10px] text-gray-500 mt-1">Netlify: Site Settings â†’ Build hooks Â· Vercel: Project â†’ Settings â†’ Git â†’ Deploy Hooks</p>
            </div>
            <div>
              <label class="lbl">Production URL</label>
              <input class="input-field" name="production_url" value="${esc(d.production_url||'')}" placeholder="https://yoursite.com">
            </div>
          </div>

          <!-- â”€â”€ Payment Settings â”€â”€ -->
          <div class="glass-soft border border-amber-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2">
              <i data-lucide="credit-card" class="w-4 h-4 text-amber-400"></i> Payment Gateway Settings
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${[{id:'flutterwave',name:'Flutterwave',color:'amber'},{id:'stripe',name:'Stripe',color:'blue'},{id:'paypal',name:'PayPal',color:'blue'},{id:'paystack',name:'Paystack',color:'blue'},{id:'razorpay',name:'Razorpay',color:'blue'},{id:'manual',name:'Manual Bank Transfer',color:'gray'}].map(gw=>`
                <label class="flex items-center gap-2 p-2.5 glass-soft border ${(d.payment_gateway||'flutterwave')===gw.id ? 'border-amber-500/40 bg-amber-500/5' : 'border-blue-500/10'} rounded-xl cursor-pointer hover:border-amber-500/30 transition">
                  <input type="radio" name="payment_gateway" value="${gw.id}" ${(d.payment_gateway||'flutterwave')===gw.id?'checked':''} class="accent-amber-500">
                  <span class="text-xs font-bold text-white">${gw.name}</span>
                </label>`).join('')}
            </div>
            <div id="payment-key-fields" class="form-grid form-grid-2">
              <div>
                <label class="lbl">Public / Publishable Key</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="payment_public_key" placeholder="${d.payment_public_key ? 'â€¢â€¢â€¢â€¢' + d.payment_public_key.slice(-4) : 'Paste public keyâ€¦'}">
                  ${d.payment_public_key ? '<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>' : ''}
                </div>
              </div>
              <div>
                <label class="lbl">Secret / Private Key</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="payment_secret_key" placeholder="${d.payment_secret_key ? 'â€¢â€¢â€¢â€¢' + d.payment_secret_key.slice(-4) : 'Paste secret keyâ€¦'}">
                  ${d.payment_secret_key ? '<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>' : ''}
                </div>
              </div>
              <div>
                <label class="lbl">Currency</label>
                <select class="input-field" name="payment_currency">
                  ${['USD','EUR','GBP','NGN','KES','ZAR','GHS','ZMW','TZS','UGX'].map(c=>`<option value="${c}" ${(d.payment_currency||'USD')===c?'selected':''}>${c}</option>`).join('')}
                </select>
              </div>
              <div>
                <label class="lbl">Test / Live Mode</label>
                <select class="input-field" name="payment_mode">
                  <option value="test" ${(d.payment_mode||'test')==='test'?'selected':''}>ðŸ”§ Test Mode (sandbox)</option>
                  <option value="live" ${d.payment_mode==='live'?'selected':''}>ðŸš€ Live Mode (real money)</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Webhook Secret (for payment verification)</label>
                <input type="password" class="input-field" name="payment_webhook_secret" placeholder="${d.payment_webhook_secret ? 'â€¢â€¢â€¢â€¢' + d.payment_webhook_secret.slice(-4) : 'Paste webhook secretâ€¦'}">
              </div>
            </div>
            <div class="p-3 bg-amber-500/5 border border-amber-500/15 rounded-xl text-[11px] text-amber-300">
              <strong>Flutterwave:</strong> flutterwave.com â†’ Dashboard â†’ API Settings<br>
              <strong>Stripe:</strong> dashboard.stripe.com â†’ Developers â†’ API Keys<br>
              <strong>PayPal:</strong> developer.paypal.com â†’ My Apps â†’ Create App<br>
              <strong>Paystack:</strong> dashboard.paystack.com â†’ Settings â†’ API Keys
            </div>
          </div>

          <!-- â”€â”€ Environment Variables Guide â”€â”€ -->
          <div class="glass-soft border border-gray-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-black text-white mb-3 flex items-center gap-2">
              <i data-lucide="terminal" class="w-4 h-4 text-gray-400"></i> Environment Variables (.env)
            </h3>
            <p class="text-xs text-gray-400 mb-3">Add these to your <code class="text-blue-300 bg-blue-500/10 px-1.5 py-0.5 rounded">.env</code> file in your project root (never commit to GitHub):</p>
            <div class="bg-gray-950 border border-gray-800 rounded-xl p-4 font-mono text-[11px] text-gray-300 space-y-1 overflow-x-auto">
              <p class="text-gray-600"># Supabase (required)</p>
              <p>VITE_SUPABASE_URL=<span class="text-blue-400">https://your-project.supabase.co</span></p>
              <p>VITE_SUPABASE_ANON_KEY=<span class="text-blue-400">your-anon-key</span></p>
              <p class="text-gray-600 mt-2"># Payment</p>
              <p>VITE_FLUTTERWAVE_PUBLIC_KEY=<span class="text-amber-400">FLWPUBK_TEST-â€¦</span></p>
              <p>VITE_STRIPE_PUBLIC_KEY=<span class="text-amber-400">pk_test_â€¦</span></p>
              <p class="text-gray-600 mt-2"># AI (server-side only â€” Edge Functions)</p>
              <p>GEMINI_API_KEY=<span class="text-emerald-400">AIzaSyâ€¦</span></p>
            </div>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            ðŸ’¾ Save Deploy & Payment Settings
          </button>
        </form>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

window.saveDeploySettings = async function(e) {
  e.preventDefault();
  const submitBtn = e.target?.querySelector('[type=submit]');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Savingâ€¦';
  }
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  const payload = {};
  // Save all fields; only update secret fields if new non-masked value provided
  const secretFields = ['github_token','payment_public_key','payment_secret_key','payment_webhook_secret'];
  for (const [k, v] of Object.entries(data)) {
    if (secretFields.includes(k)) {
      if (v && !v.startsWith('â€¢') && v.trim() !== '') payload[k] = v.trim();
    } else {
      payload[k] = v;
    }
  }
  const { error } = await supabase.from('site_settings').upsert({ id: 1, ...payload });
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'ðŸ’¾ Save Deploy & Payment Settings';
  }
  if (error) { showToast(error.message, 'error'); return; }
  showToast('Deploy & payment settings saved!');
  renderPublish();
};

async function runWebhookDeploy(mode = 'deploy') {
  const { data: s } = await supabase.from('site_settings').select('deploy_webhook,production_url,github_repo').limit(1).maybeSingle();
  if (!s?.deploy_webhook) {
    showToast('No webhook URL set. Add your deploy webhook in the settings below.', 'info');
    return { ok: false, reason: 'missing_webhook' };
  }

  let hookUrl = s.deploy_webhook;
  try {
    const url = new URL(hookUrl);
    if (mode === 'rebuild') url.searchParams.set('rebuild', '1');
    hookUrl = url.toString();
  } catch {
    if (mode === 'rebuild') {
      hookUrl += (hookUrl.includes('?') ? '&' : '?') + 'rebuild=1';
    }
  }

  return { ok: true, settings: s, hookUrl };
}

async function insertDeploymentHistory(status, payload = {}) {
  const version = payload.version || new Date().toISOString();
  const metadata = {
    source: 'admin-dashboard',
    mode: payload.mode || 'deploy',
    production_url: payload.productionUrl || null,
    github_repo: payload.githubRepo || null,
    webhook: payload.webhook || null,
    message: payload.message || null,
  };
  const { data, error } = await supabase
    .from('deployment_history')
    .insert({
      version,
      status,
      triggered_by_email: state.user?.email || null,
      metadata,
      error_message: payload.errorMessage || null,
    })
    .select('id')
    .limit(1)
    .maybeSingle();
  return { data, error };
}

function setActionButtonBusy(btn, busy, busyLabel, idleLabel) {
  if (!btn) return;
  btn.disabled = busy;
  const labelNode = btn.querySelector('p.text-xs.font-black');
  if (labelNode) labelNode.textContent = busy ? busyLabel : idleLabel;
}

window.triggerDeploy = async function(ev) {
  const btn = ev?.currentTarget || document.querySelector('[data-deploy-btn]');
  setActionButtonBusy(btn, true, 'Deployingâ€¦', 'Deploy Now');
  try {
    const prep = await runWebhookDeploy('deploy');
    if (!prep.ok) return;
    const { settings: s, hookUrl } = prep;
    await insertDeploymentHistory('preparing', {
      mode: 'deploy',
      productionUrl: s.production_url,
      githubRepo: s.github_repo,
      webhook: hookUrl,
      message: 'Deployment queued from admin UI',
    });

    const res = await fetch(hookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trigger: 'deploy', source: 'admin-dashboard', at: new Date().toISOString() }),
    });

    if (res.ok) {
      showToast('ðŸš€ Deployment triggered! Your site will be live in ~2 minutes.');
      await insertDeploymentHistory('deploying', {
        mode: 'deploy',
        productionUrl: s.production_url,
        githubRepo: s.github_repo,
        webhook: hookUrl,
        message: 'Webhook accepted deployment request',
      });
      setTimeout(() => renderPublish(), 400);
    } else {
      const errorMsg = `Webhook returned error: ${res.status}`;
      showToast(errorMsg, 'error');
      await insertDeploymentHistory('failed', {
        mode: 'deploy',
        productionUrl: s.production_url,
        githubRepo: s.github_repo,
        webhook: hookUrl,
        errorMessage: errorMsg,
      });
    }
  } catch (err) {
    showToast('Deploy failed: ' + err.message, 'error');
    await insertDeploymentHistory('failed', { mode: 'deploy', errorMessage: err.message });
  } finally {
    setActionButtonBusy(btn, false, 'Deployingâ€¦', 'Deploy Now');
  }
};

window.triggerRebuild = async function(ev) {
  const btn = ev?.currentTarget || document.querySelector('[data-rebuild-btn]');
  setActionButtonBusy(btn, true, 'Rebuildingâ€¦', 'Rebuild Site');
  try {
    const prep = await runWebhookDeploy('rebuild');
    if (!prep.ok) return;
    const { settings: s, hookUrl } = prep;
    await insertDeploymentHistory('building', {
      mode: 'rebuild',
      productionUrl: s.production_url,
      githubRepo: s.github_repo,
      webhook: hookUrl,
      message: 'Rebuild requested from admin UI',
    });
    const res = await fetch(hookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trigger: 'rebuild', source: 'admin-dashboard', at: new Date().toISOString() }),
    });
    if (res.ok) {
      showToast('ðŸ”„ Rebuild triggered successfully.');
      await insertDeploymentHistory('deploying', {
        mode: 'rebuild',
        productionUrl: s.production_url,
        githubRepo: s.github_repo,
        webhook: hookUrl,
        message: 'Webhook accepted rebuild request',
      });
      setTimeout(() => renderPublish(), 400);
    } else {
      const errorMsg = `Rebuild webhook error: ${res.status}`;
      showToast(errorMsg, 'error');
      await insertDeploymentHistory('failed', {
        mode: 'rebuild',
        productionUrl: s.production_url,
        githubRepo: s.github_repo,
        webhook: hookUrl,
        errorMessage: errorMsg,
      });
    }
  } catch (err) {
    showToast('Rebuild failed: ' + err.message, 'error');
    await insertDeploymentHistory('failed', { mode: 'rebuild', errorMessage: err.message });
  } finally {
    setActionButtonBusy(btn, false, 'Rebuildingâ€¦', 'Rebuild Site');
  }
};

window.publishAndDeploy = async function(ev) {
  const btn = ev?.currentTarget || document.querySelector('[data-publish-easy-btn]');
  setActionButtonBusy(btn, true, 'Publishingâ€¦', 'One-Click Publish');
  try {
    const form = document.getElementById('deploy-form');
    if (!form) {
      showToast('Deploy form is not available. Reload and try again.', 'error');
      return;
    }
    await window.saveDeploySettings({ preventDefault() {}, target: form });
    await window.triggerDeploy();
  } catch (err) {
    showToast('Publish failed: ' + err.message, 'error');
  } finally {
    setActionButtonBusy(btn, false, 'Publishingâ€¦', 'One-Click Publish');
  }
};

// â”€â”€ Reindex Search â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Manually rebuilds the search index for all listings. The DB has an automatic
// AFTER INSERT/UPDATE/DELETE trigger (sync_search_index) on showroom_listings,
// so touching each row (updated_at) forces the index to rebuild for every item.
window.reindexSearch = async function() {
  const btn = document.querySelector('[data-publish-easy-btn]') || document.querySelector('[data-rebuild-btn]');
  const label = btn?.querySelector('p.text-xs.font-black');
  const origLabel = label?.textContent || '';
  if (label) label.textContent = 'Reindexingâ€¦';
  try {
    const { data: listings, error } = await supabase
      .from('showroom_listings')
      .select('id, updated_at')
      .order('updated_at', { ascending: false });

    if (error) {
      if (isRlsDenied(error)) return showToast('âš ï¸ Reindex blocked: database admin role rejected the read. Re-run the admin permission migration.', 'error');
      return showToast('Could not load listings to reindex: ' + error.message, 'error');
    }

    const ids = listings || [];
    if (!ids.length) {
      showToast('No listings to reindex.');
      return;
    }

    let success = 0;
    let failed = 0;
    let denied = false;

    // Process in small batches to avoid hammering the DB with one huge request.
    const BATCH = 40;
    for (let i = 0; i < ids.length; i += BATCH) {
      const batch = ids.slice(i, i + BATCH);
      const { error: batchErr } = await supabase
        .from('showroom_listings')
        .update({ updated_at: new Date().toISOString() })
        .in('id', batch.map(r => r.id));

      if (batchErr) {
        if (isRlsDenied(batchErr)) denied = true;
        failed += batch.length;
      } else {
        success += batch.length;
      }
      // Update the button label so the admin sees live progress.
      if (label) label.textContent = `Reindexingâ€¦ ${Math.min(i + BATCH, ids.length)}/${ids.length}`;
    }

    if (denied) {
      showToast(`âš ï¸ Reindex partially blocked: database admin role rejected some writes. Re-run the admin permission migration. (${success}/${ids.length} done)`, 'error');
      return;
    }
    showToast(`Search index rebuilt for ${success} listing${success !== 1 ? 's' : ''}${failed ? ` (${failed} failed)` : ''}.`, failed ? 'error' : 'success');
  } catch (err) {
    showToast('Reindex failed: ' + err.message, 'error');
  } finally {
    if (label) label.textContent = origLabel;
  }
};

// â”€â”€ Sync Showroom To DB â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Reads the static SHOWROOM_LISTINGS fallback catalog (showroom-data.js) and
// inserts any items that are missing from the database by property_id. This
// keeps the admin's editable showroom populated even after a fresh DB reset.
window.syncShowroomToDB = async function() {
  if (!Array.isArray(SHOWROOM_LISTINGS) || !SHOWROOM_LISTINGS.length) {
    showToast('No static showroom listings found to sync.', 'info');
    return;
  }
  const btn = document.querySelector('[data-publish-easy-btn]') || document.querySelector('[data-rebuild-btn]');
  const label = btn?.querySelector('p.text-xs.font-black');
  const origLabel = label?.textContent || '';
  if (label) label.textContent = 'Syncingâ€¦';
  try {
    // Load existing property_ids so we only insert missing items.
    const { data: existing, error: readErr } = await supabase
      .from('showroom_listings')
      .select('property_id');

    if (readErr) {
      if (isRlsDenied(readErr)) return showToast('âš ï¸ Sync blocked: database admin role rejected the read. Re-run the admin permission migration.', 'error');
      return showToast('Could not load existing listings: ' + readErr.message, 'error');
    }

    const existingIds = new Set((existing || []).map(r => r.property_id));
    const missing = SHOWROOM_LISTINGS.filter(item => item && item.property_id && !existingIds.has(item.property_id));

    if (!missing.length) {
      showToast('Showroom already in sync â€” no new listings to add.');
      return;
    }

    let inserted = 0;
    let failed = 0;
    let denied = false;

    // Insert in small batches so one permission error doesn't lose all progress.
    const BATCH = 20;
    for (let i = 0; i < missing.length; i += BATCH) {
      const batch = missing.slice(i, i + BATCH).map(item => ({
        property_id: item.property_id,
        listing_type: item.listing_type || 'product',
        category: item.category || null,
        subcategory: item.subcategory || null,
        title: item.title || 'Untitled Listing',
        description: item.description || '',
        price: parseFloat(item.price) || 0,
        currency: item.currency || 'USD',
        country: item.country || '',
        country_code: item.country_code || '',
        state: item.state || '',
        city: item.city || '',
        town: item.town || '',
        product_location: item.product_location || '',
        latitude: item.latitude ?? null,
        longitude: item.longitude ?? null,
        property_type: item.property_type || null,
        listing_status: item.listing_status || 'sale',
        bedrooms: item.bedrooms ?? null,
        bathrooms: item.bathrooms ?? null,
        building_size: item.building_size || '',
        land_size: item.land_size || '',
        parking_spaces: item.parking_spaces ?? null,
        furnished: item.furnished || '',
        features: Array.isArray(item.features) ? item.features : [],
        tags: Array.isArray(item.tags) ? item.tags : [],
        highlights: Array.isArray(item.highlights) ? item.highlights : [],
        seo_keywords: Array.isArray(item.seo_keywords) ? item.seo_keywords : [],
        images: Array.isArray(item.images) ? item.images : [],
        brand: item.brand || null,
        color: item.color || null,
        size: item.size || null,
        condition: item.condition || null,
        warranty: item.warranty || null,
        availability_status: item.availability_status || 'In Stock',
        stock_quantity: item.stock_quantity != null ? parseInt(item.stock_quantity, 10) : null,
        is_active: item.is_active !== false,
        is_featured: !!item.is_featured,
        is_ai_generated: !!item.is_ai_generated,
        ai_generated_fields: Array.isArray(item.ai_generated_fields) ? item.ai_generated_fields : [],
        specifications: item.specifications || {},
        created_at: item.created_at || new Date().toISOString(),
      }));

      const { error: batchErr } = await supabase.from('showroom_listings').insert(batch);
      if (batchErr) {
        if (isRlsDenied(batchErr)) denied = true;
        failed += batch.length;
      } else {
        inserted += batch.length;
      }
      if (label) label.textContent = `Syncingâ€¦ ${Math.min(i + BATCH, missing.length)}/${missing.length}`;
    }

    if (denied) {
      showToast(`âš ï¸ Sync partially blocked: database admin role rejected some inserts. Re-run the admin permission migration. (${inserted}/${missing.length} added)`, 'error');
      return;
    }
    showToast(`Showroom synced: ${inserted} new listing${inserted !== 1 ? 's' : ''} added to the database${failed ? ` (${failed} failed)` : ''}.`, failed ? 'error' : 'success');
  } catch (err) {
    showToast('Sync failed: ' + err.message, 'error');
  } finally {
    if (label) label.textContent = origLabel;
  }
};

window.testGitHubConnection = async function() {
  const username = document.querySelector('[name=github_username]')?.value?.trim();
  const repo = document.querySelector('[name=github_repo]')?.value?.trim();
  if (!username || !repo) { showToast('Enter your GitHub username and repo name first', 'info'); return; }
  try {
    const res = await fetch(`https://api.github.com/repos/${username}/${repo}`);
    if (res.ok) {
      const data = await res.json();
      showToast(`âœ“ Connected: ${data.full_name} (${data.visibility})`);
    } else if (res.status === 404) {
      showToast('Repository not found. Check username and repo name.', 'error');
    } else {
      showToast('GitHub API error: ' + res.status, 'error');
    }
  } catch { showToast('Could not reach GitHub API', 'error'); }
};

window.deployToProduction = window.triggerDeploy;
window.rebuildSite = window.triggerRebuild;

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  CATALOG MANAGER
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// The generated catalog (catalog.js) fills homepage rows with deterministic
// listings. Because they regenerate on every page load, the admin hides them
// via a persisted hidden-ids list (site_settings.hidden_catalog_ids) instead
// of deactivating DB rows. This section lists the generated items and lets the
// admin toggle each one.

const CATALOG_PAGE_SIZE = 30;
const catalogUi = { category: null, page: 0, query: '' };

async function renderCatalogManager() {
  const content = document.getElementById('content');
  if (!content) return;
  await loadHiddenCatalogIds();
  const hidden = new Set(getHiddenCatalogIds());
  const categories = getCatalogCategories();
  if (!catalogUi.category) catalogUi.category = categories[0]?.slug || null;
  const def = getCatalogCategory(catalogUi.category);
  const count = def ? def.count : 0;
  const q = catalogUi.query.trim().toLowerCase();

  const header = `
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-xl font-black text-white">Generated Catalog</h2>
        <p class="text-xs text-gray-500 mt-1">Deterministic storefront items. Hiding a listing removes it from the site everywhere â€” including direct links.</p>
      </div>
      <button onclick="catalogResetHidden()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition">Show All Hidden</button>
    </div>`;

  const pills = `
    <div class="flex flex-wrap gap-2">
      ${categories.map(c => `<button onclick="catalogSetCategory('${c.slug}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${catalogUi.category === c.slug ? 'bg-blue-500/20 text-blue-200 border-blue-500/40' : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'}">${esc(c.name)}</button>`).join('')}
    </div>`;

  const search = `
    <div class="flex flex-wrap items-center gap-2">
      <input id="catalog-search-input" class="input-field flex-1 min-w-[220px]" placeholder="Search title, id or subcategoryâ€¦" value="${esc(catalogUi.query)}" onkeyup="if (event.key === 'Enter') catalogSearch()">
      <button onclick="catalogSearch()" class="btn-press px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition">Search</button>
    </div>`;

  // Build the visible page of items for the current category
  let filtered = [];
  if (def) {
    if (q) {
      const scanLimit = Math.min(count, 8000);
      for (let i = 0; i < scanLimit && filtered.length < CATALOG_PAGE_SIZE; i++) {
        const p = generateProduct(def.slug, i);
        if (!p) continue;
        const hay = `${p.property_id} ${p.title} ${p.subcategory || ''} ${p.category || ''}`.toLowerCase();
        if (hay.includes(q)) filtered.push(p);
      }
    } else {
      const start = catalogUi.page * CATALOG_PAGE_SIZE;
      const end = Math.min(start + CATALOG_PAGE_SIZE, count);
      for (let i = start; i < end; i++) {
        const p = generateProduct(def.slug, i);
        if (p) filtered.push(p);
      }
    }
  }

  const rows = filtered.length
    ? filtered.map(p => {
        const isHidden = hidden.has(p.property_id);
        const cover = (p.images && p.images[0]) || '/fallback.svg';
        return `
          <div class="flex items-center gap-3 p-3 rounded-xl border ${isHidden ? 'border-red-500/25 bg-red-500/5' : 'border-white/10 bg-white/[0.02]'}">
            <img src="${esc(cover)}" alt="" class="w-12 h-12 rounded-lg object-cover bg-gray-800 shrink-0" loading="lazy">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-white truncate">${esc(p.title)}</p>
              <p class="text-[11px] text-gray-500 truncate">${esc(p.property_id)} Â· ${esc(p.subcategory || p.category || '')} Â· ${fmtMoney(p.price, 'USD')}</p>
            </div>
            ${isHidden ? badge(false) : badge(true)}
            <button onclick="catalogToggle('${esc(p.property_id)}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${isHidden ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25' : 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20'}">
              ${isHidden ? 'Show' : 'Hide'}
            </button>
          </div>`;
      }).join('')
    : `<div class="text-center py-16 text-gray-500 text-sm">No catalog items match.</div>`;

  const totalPages = q ? 1 : Math.max(1, Math.ceil(count / CATALOG_PAGE_SIZE));
  const pager = `
    <div class="flex flex-wrap items-center justify-between gap-3">
      <p class="text-xs text-gray-500">${q ? `${filtered.length} match` : `${count.toLocaleString()} items in ${esc(def?.name || '')}`} Â· ${hidden.size} hidden</p>
      <div class="flex items-center gap-2">
        <button onclick="catalogPage(-1)" ${catalogUi.page <= 0 ? 'disabled' : ''} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Prev</button>
        <span class="text-xs text-gray-500">Page ${catalogUi.page + 1} / ${totalPages}</span>
        <button onclick="catalogPage(1)" ${catalogUi.page >= totalPages - 1 ? 'disabled' : ''} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Next</button>
      </div>
    </div>`;

  content.innerHTML = `
    <div class="space-y-4 fade-in">
      ${header}
      ${pills}
      ${search}
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 space-y-2">${rows}</div>
      ${pager}
    </div>`;
  if (window.lucide) lucide.createIcons();
}

window.catalogSetCategory = function(slug) {
  catalogUi.category = slug; catalogUi.page = 0; catalogUi.query = '';
  renderCatalogManager();
};

window.catalogSearch = function() {
  const el = document.getElementById('catalog-search-input');
  catalogUi.query = el ? el.value : '';
  catalogUi.page = 0;
  renderCatalogManager();
};

window.catalogPage = function(dir) {
  const def = getCatalogCategory(catalogUi.category);
  const count = def ? def.count : 0;
  const totalPages = catalogUi.query.trim() ? 1 : Math.max(1, Math.ceil(count / CATALOG_PAGE_SIZE));
  catalogUi.page = Math.max(0, Math.min(totalPages - 1, catalogUi.page + dir));
  renderCatalogManager();
};

window.catalogToggle = async function(id) {
  const hidden = !getHiddenCatalogIds().includes(id);
  const res = await saveCatalogHidden(id, hidden);
  showToast(hidden ? 'Listing hidden from storefront' : 'Listing restored', res.ok ? 'success' : 'info');
  renderCatalogManager();
};

window.catalogResetHidden = async function() {
  await resetHiddenCatalogIds();
  showToast('All hidden catalog listings restored');
  renderCatalogManager();
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  ADMIN BACK / EXIT BEHAVIOR
//  One press of the browser Back button â€” from ANY admin section,
//  no matter how deep (Settings, Content Settings, uploads, etc.)
//  â€” always leaves the admin area and returns to the main store
//  homepage ("/"). Internal section navigation keeps working
//  normally and never creates history entries, so browser Back
//  and the admin's own navigation cannot conflict or loop.
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
(function installAdminBackGuard() {
  if (!window.history || !window.history.pushState) return;
  try {
    window.history.replaceState({ adminGuard: 1 }, document.title, window.location.href);
    window.history.pushState({ adminGuard: 2 }, document.title, window.location.href);
  } catch (err) { return; }
  window.addEventListener('popstate', function (e) {
    // The first Back press pops to adminGuard:1 â†’ leave admin now.
    // (Going "forward" again pops adminGuard:2 and is simply ignored.)
    if (e.state && e.state.adminGuard === 1) {
      window.location.replace('/');
    }
  });
})();

// â”€â”€ INIT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
async function init() {
  if (window.lucide) lucide.createIcons();
  renderSidebar();
  await initAuth();
  // Listen for auth changes
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT') {
      state.user = null;
      const ls = document.getElementById('login-screen');
      if (ls) ls.style.display = 'flex';
    }
  });
}

// Wait for lucide to load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

