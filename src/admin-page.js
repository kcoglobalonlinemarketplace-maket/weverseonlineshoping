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
const SHOWROOM_COLUMNS = ['id','property_id','listing_type','category','subcategory','title','description','price','price_period','currency','country','country_code','state','city','town','product_location','latitude','longitude','bedrooms','bathrooms','building_size','land_size','parking_spaces','property_type','furnished','listing_status','images','features','features_text','tags','highlights','seo_keywords','specifications','brand','color','size','condition','warranty','shipping_info','delivery_estimate','weight','dimensions','storage_options','ram_options','color_options','availability_status','stock_quantity','sku','is_active','is_featured','is_ai_generated','ai_generated_fields','rating','rating_count','favorite_count','review_count','video','video_url','approval_status','published_at','created_at','updated_at','real_price','year_built','year_renovated','half_bathrooms','floors','garage','zip_code','address','landmarks','interior_features','exterior_features','home_systems','legal_info','risk_notes','floor_plan','nearby_area','verification_status','verification_date','inspection_info','documents'];

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
              <button onclick="showAddProductStep1()" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-black px-6 py-3.5 rounded-2xl transition shadow-xl shadow-blue-700/25">
                <i data-lucide="plus" class="w-5 h-5"></i> Add Product
              </button>
              <button onclick="openGeneralAiScanner()" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition shadow-xl shadow-violet-700/25" title="Scan product photos with AI â€” detect, analyze and add products to your manager">
                <i data-lucide="scan-search" class="w-5 h-5"></i> General AI Scanner
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
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-2.5">
            <div class="xl:col-span-2 relative">
              <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
              <input id="prod-search" type="search" class="input-field pl-9" placeholder="Search by name, SKU, brand, category..." value="${esc(window._productFilters.search || '')}" oninput="filterProducts()">
            </div>
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
    msg.includes('rls policy') ||
    msg.includes('duplicate key') ||
    msg.includes('violates foreign key');
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">ðŸ”™ Back</button>
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
            <label class="lbl">Gallery Images (up to 24)</label>
            <div id="drop-zone" class="drop-zone" onclick="document.getElementById('img-upload').click()">
              <i data-lucide="image-plus" class="w-10 h-10 text-blue-400 mx-auto mb-2"></i>
              <p class="text-base font-bold text-gray-300">Tap to add photos (up to 24)</p>
              <p class="text-sm text-gray-500 mt-1">PNG, JPG, WEBP. First image is the cover. âœ• deletes any image (even the main/cover).</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*,application/pdf" onchange="handleImageUpload(event)">
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
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
      showToast('Product link copied to clipboard');
      return;
    }
  } catch {}
  window.prompt('Copy product link:', url);
};

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
  if (!confirm(`Delete ALL ${total} product(s) from the Product Manager and the database now?\n\nThis is permanent and cannot be undone. Your built-in showroom catalog will stay.`)) return;
  const { error } = await supabase.from('showroom_listings').delete().neq('property_id', '__none__');
  if (error) {
    if (isRlsDenied(error)) return showToast('âš ï¸ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.', 'error');
    return showToast('Clear failed: ' + error.message, 'error');
  }
  try { localStorage.removeItem('kco_local_showroom_listings_v1'); } catch {}
  showToast('All products deleted. The manager now shows your showroom catalog.');
  renderProducts();
};

window.openProductMoreActions = function(pid) {
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">More Actions</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">ðŸ”™ Back</button>
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">ðŸ”™ Back</button>
        </div>

        <!-- Scan first â€” let AI pick the category -->
        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3 mb-4">
          <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> Scan First â€” let AI pick the category</p>
          <p class="text-[11px] text-gray-500">Upload your product photos, press SCAN WITH AI. It detects EVERY distinct product (a photo with a bag + watch + shoes + phone gives four separate listings; several photos of the same product merge into one). Review each detection, then the correct category form opens filled for you. Nothing is published automatically.</p>
          <div id="s1-drop-zone" class="drop-zone" onclick="document.getElementById('s1-img-upload').click()">
            <i data-lucide="image-plus" class="w-6 h-6 text-blue-400 mx-auto mb-2"></i>
            <p class="text-xs font-bold text-gray-300">Click or drag & drop product images</p>
            <input type="file" id="s1-img-upload" class="hidden" multiple accept="image/*,application/pdf" onchange="handleStep1ImageUpload(event)">
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
              Back
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
              <label class="lbl !mb-0">Step 1: Upload Product Images</label>
              <span class="text-sm text-gray-500">Upload one or multiple images before publishing</span>
            </div>
            <div id="drop-zone" class="drop-zone" onclick="document.getElementById('img-upload').click()">
              <i data-lucide="image-plus" class="w-12 h-12 text-blue-400 mx-auto mb-3"></i>
              <p class="text-lg font-bold text-gray-300">Click or drag & drop images here</p>
              <p class="text-sm text-gray-500 mt-1">PNG, JPG, WEBP up to 5MB each. First image = cover.</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*,application/pdf" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${(existingData.images || []).map((url, i) => imageThumbHtml(url, i)).join('')}
            </div>
            <p class="text-sm text-gray-500 mt-1">Drag to reorder â€¢ âœ• deletes any image (even the main/cover â€” the next image becomes the cover) â€¢ â†» replaces â€¢ Upload up to 24 gallery images</p>
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
                <p class="text-xs text-gray-500 mt-1">Reads your uploaded images and fills the form for you. Detects every distinct product (multiple products in one photo = separate listings; several photos of the same product = one listing). Powered by Google Gemini free tier â€” add your FREE key in AI Settings if not set. Only runs when you press the button.</p>
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
  const media = isPdf
    ? `<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-300 select-none"><span class="text-2xl leading-none">📄</span><span class="text-[10px] font-bold mt-1">PDF</span></div>`
    : `<img src="${esc(url)}" onerror="this.src='/fallback.svg'">`;
  return `<div class="img-thumb ${i === 0 ? 'cover-img' : ''}" data-index="${i}" data-url="${esc(url)}" title="${i === 0 ? 'Cover Image (main photo)' : 'Image ' + (i + 1)}">
    ${media}
    <button class="rm" onclick="removeImage(${i})" type="button" title="Delete this image (cover can be deleted too)">✕</button>
    <button class="rp" onclick="document.getElementById('rp-input-${i}').click()" type="button" title="Replace image">↻</button>
    <input type="file" accept="image/*,application/pdf" class="rp-input" id="rp-input-${i}" onchange="replaceImage(${i}, this)">
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

async function processImageFiles(files) {
  const preview = document.getElementById('image-preview');
  if (!preview) return;
  for (const file of files) {
    // Photos AND PDF documents (multi-page listings, invoices, spec sheets,
    // certificates) are accepted â€” the scanner renders every PDF page itself.
    const isPdf = file.type === 'application/pdf' || looksLikePdf(file.name);
    if (!file.type.startsWith('image/') && !isPdf) continue;
    const url = await uploadImageFile(file);
    if (url) {
      const i = preview.children.length;
      const div = document.createElement('div');
      div.innerHTML = imageThumbHtml(url, i);
      preview.appendChild(div.firstElementChild);
      rebuildImageInputs();
    }
  }
  updateCoverBadge();
  updateGalleryCounter();
  if (window.lucide) lucide.createIcons();
}

async function uploadImageFile(file) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    const ext = (file.name || 'photo.jpg').split('.').pop() || 'jpg';
    const base = `products/${Date.now()}-${Math.random().toString(36).slice(2)}`;
    // Try twice (fresh unique path each time) so a storage hiccup never loses a photo.
    for (let attempt = 0; attempt < 2; attempt++) {
      const path = `${base}${attempt ? '-' + Math.random().toString(36).slice(2, 7) : ''}.${ext}`;
      const { error: upErr } = await supabase.storage.from('product-images').upload(path, file, { contentType: file.type, upsert: false });
      if (!upErr) {
        const { data } = supabase.storage.from('product-images').getPublicUrl(path);
        if (data && data.publicUrl) return data.publicUrl;
      } else {
        console.warn('product-images upload failed (attempt ' + (attempt + 1) + '):', upErr.message || upErr);
      }
    }
    // 100% SHOWROOM GUARANTEE: even when storage fails (or no session), embed a
    // compressed copy of the photo directly with the listing (data URL) so the
    // image ALWAYS shows in the showroom â€” never a temporary blob: URL, which
    // would be silently dropped when the product is saved & published.
    try {
      const embedded = await aiClient._downscaleImage(file, 1200);
      if (embedded) return embedded;
    } catch { /* fall through */ }
    return URL.createObjectURL(file);
  } catch { return URL.createObjectURL(file); }
}

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
  if (!file.type.startsWith('image/') && !isPdf) { showToast('Please choose an image or PDF file.', 'error'); return; }
  const url = await uploadImageFile(file);
  if (!url) return;
  const items = [...preview.querySelectorAll('.img-thumb')];
  const thumb = items[index];
  if (!thumb) return;
  // Re-render the whole thumb so photos AND PDF documents are handled the
  // same way (PDF thumbs have no <img>, they render a document badge).
  thumb.outerHTML = imageThumbHtml(url, index);
  rebuildImageInputs();
  updateCoverBadge();
  updateGalleryCounter();
  showToast(isPdf ? 'Document replaced. Save changes to apply.' : 'Image replaced. Save changes to apply.', 'info');
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
    t.title = i === 0 ? 'Cover Image' : `Image ${i + 1}`;
  });
}

// Show how many gallery images are attached. Any count is fine â€” saving and
// publishing always works; 24 is only the maximum gallery size.
function updateGalleryCounter() {
  const preview = document.getElementById('image-preview');
  const counter = document.getElementById('gallery-counter');
  if (!preview || !counter) return;
  const count = preview.querySelectorAll('.img-thumb').length;
  counter.textContent = count
    ? `${count} image${count > 1 ? 's' : ''} â€” you can save and publish anytime`
    : 'No images yet â€” you can still save and publish anytime';
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
      <div><span class="text-gray-500">Images</span><p class="text-white font-semibold">${imageCount}</p></div>
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">ðŸ”™ Back</button>
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
// simply could not see the value in the photo) receives an honest "Not
// specified" placeholder or a safe default (price/stock/title/description).
// AI values ALWAYS win â€” this pass only touches genuinely empty fields, so a
// scan can never leave the form partially blank and the owner can always
// review, edit and publish.
const GUARANTEED_FILL_SKIP = new Set([
  'images', 'tags', 'currency', 'catalog_template_id', 'country_code',
  'listing_type', 'category', 'property_id', 'id', 'slug', 'user_id',
  'latitude', 'longitude', 'cover_image', 'video_url',
]);
function guaranteeCompleteFormFill(formSelector, { titleFallback = 'Product', descriptionFallback = '' } = {}) {
  const form = document.querySelector(formSelector);
  if (!form) return 0;
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
    if (field.tagName === 'SELECT' && ![...field.options].some(o => o.value === 'Not specified')) {
      const opt = document.createElement('option');
      opt.value = 'Not specified'; opt.textContent = 'Not specified';
      field.appendChild(opt);
    }
    field.value = 'Not specified';
    count++;
  });
  return count;
}

// Fill the product form fields from the two-stage result. Only sets fields
// that exist in the current form and never guesses price/stock.
function applyScanToProductForm(result) {
  const identification = result && result.identification && result.identification.identified !== false ? result.identification : {};
  const specs = result && result.specs ? result.specs : {};
  const price = result && result.price ? result.price : null;
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

  // "Not specified" policy â€” any relevant field the AI could not determine is
  // marked clearly instead of being left blank or guessed, per the owner's rules.
  const missing = new Set((Array.isArray(specs.missing_fields) ? specs.missing_fields : []).map(k => String(k)));
  const NOT_SPECIFIED_SKIP = new Set(['title', 'description', 'price', 'real_price', 'stock_quantity', 'images', 'features', 'highlights', 'seo_keywords', 'tags', 'safety_features']);
  missing.forEach((key) => {
    if (NOT_SPECIFIED_SKIP.has(key)) return;
    const field = document.querySelector(`#product-form [name="${key}"]`);
    if (!field || field.type === 'checkbox' || field.type === 'radio' || field.type === 'number') return;
    if (String(field.value || '').trim() !== '') return;
    if (field.tagName === 'SELECT' && ![...field.options].some(o => o.value === 'Not specified')) {
      const opt = document.createElement('option');
      opt.value = 'Not specified'; opt.textContent = 'Not specified';
      field.appendChild(opt);
    }
    field.value = 'Not specified';
    filled.push(`${key} (Not specified)`);
  });

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
  const guaranteed = guaranteeCompleteFormFill('#product-form', { titleFallback, descriptionFallback: descFallback });
  if (guaranteed) filled.push(`${guaranteed} auto-completed (Not specified / safe defaults)`);

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

function imagesForProduct(p, images) {
  const idxs = Array.isArray(p.image_indices) ? p.image_indices : [];
  const out = idxs.map(i => images[i]).filter(Boolean);
  return out.length ? out : images;
}

function scanReviewCardHtml(p, i) {
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
      <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${confCls}">${esc(conf).toUpperCase()}</span>
    </div>
    <div class="flex items-center gap-2 flex-wrap">
      ${thumbs.map(u => `<img src="${esc(u)}" class="w-10 h-10 rounded-lg object-cover border border-violet-500/20" onerror="this.src='/fallback.svg'">`).join('')}
      <span class="text-[11px] text-gray-400">${isProperty ? 'Real Estate' : esc(cat)} Â· ${(p.image_indices || []).length || 1} image(s)</span>
    </div>
    <div class="flex flex-wrap gap-2">
      <button type="button" onclick="scanReviewContinue(${i})" class="btn-press px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg transition">Continue to ${isProperty ? 'Properties Manager' : 'its form'}</button>
      <button type="button" onclick="scanReviewEdit(${i})" class="btn-press px-4 py-2 bg-gray-700/60 hover:bg-gray-600 text-gray-200 text-xs font-bold rounded-lg transition">Edit</button>
      <button type="button" onclick="scanReviewRemove(${i})" class="btn-press px-4 py-2 bg-red-900/40 hover:bg-red-800/60 text-red-200 text-xs font-bold rounded-lg transition">Remove</button>
      <button type="button" onclick="scanReviewCancel()" class="btn-press px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 text-xs font-bold rounded-lg transition">Cancel</button>
    </div>
  </div>`;
}

window.scanReviewRender = function() {
  const el = document.getElementById(scanReviewEntry);
  if (!el) return;
  el.classList.remove('hidden', 'text-red-400', 'text-emerald-300', 'text-amber-300', 'text-blue-300', 'text-gray-400');
  if (!scanReviewProducts.length) {
    el.classList.add('text-gray-400');
    el.textContent = 'All detected products were removed â€” nothing was changed.';
    return;
  }
  el.classList.add('text-gray-100');
  el.innerHTML = `
    <div class="space-y-3">
      <div>
        <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="list-checks" class="w-4 h-4 text-violet-400"></i> ${scanReviewProducts.length} distinct product${scanReviewProducts.length > 1 ? 's' : ''} detected</p>
        <p class="text-[11px] text-gray-400 mt-1">Photos of the same product are grouped into one listing; different products stay separate. Edit or remove cards as needed â€” then either Continue one-by-one, or press Continue with ALL to save & publish everything in one click.</p>
        <button type="button" id="btn-scan-continue-all" onclick="scanReviewContinueAll()" class="btn-press mt-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition flex items-center gap-2"><i data-lucide="rocket" class="w-4 h-4"></i> Continue with ALL â€” Save &amp; Publish Everything</button>
      </div>
      ${scanReviewProducts.map((p, i) => scanReviewCardHtml(p, i)).join('')}
    </div>`;
  if (window.lucide) lucide.createIcons();
};

window.scanReviewContinue = async function(i) {
  const p = scanReviewProducts[i];
  if (!p) return;
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

window.scanReviewCancel = function() {
  const el = document.getElementById(scanReviewEntry);
  if (el) {
    el.classList.remove('hidden', 'text-red-400', 'text-emerald-300', 'text-amber-300', 'text-blue-300');
    el.classList.add('text-gray-400');
    el.textContent = 'Scan cancelled â€” nothing was changed.';
  }
};

// â”€â”€ Continue with ALL: save & publish every detected product in one click â”€â”€
// Loops over every review card, completes each product's specs + price with the
// AI, and writes it straight to showroom_listings. Existing products (scanned
// from the General AI Scanner) are UPDATED â€” never duplicated; brand-new
// detections are INSERTED as new listings. Any image count is fine.
window.scanReviewContinueAll = async function() {
  const el = document.getElementById(scanReviewEntry);
  const setStatus = (html, cls) => {
    if (!el) return;
    el.classList.remove('hidden', 'text-red-400', 'text-emerald-300', 'text-amber-300', 'text-blue-300', 'text-gray-400', 'text-gray-100');
    if (cls) el.classList.add(cls);
    el.innerHTML = html;
    if (window.lucide) lucide.createIcons();
  };
  if (!scanReviewProducts.length) return;
  const btn = document.getElementById('btn-scan-continue-all');
  if (btn) { btn.disabled = true; btn.textContent = 'Saving everythingâ€¦'; }

  const total = scanReviewProducts.length;
  let savedNew = 0, updated = 0, failed = 0;
  const propertyIndexes = [];

  for (let i = 0; i < total; i++) {
    const p = scanReviewProducts[i];
    if (!p) continue;
    const norm = normalizeDetectedCategory(p.category);
    const isProperty = p.listing_type === 'property' || (norm && norm.listing_type === 'property');
    if (isProperty) { propertyIndexes.push(i); continue; }
    const cat = norm.category || p.category || 'Other';
    const images = imagesForProduct(p, scanReviewImages);
    setStatus(`<p class="flex items-center gap-2"><i data-lucide="loader" class="w-4 h-4 animate-spin text-blue-300"></i> Completing ${i + 1} of ${total}: <b>${esc(p.detected_name || 'product')}</b>â€¦</p>`, 'text-blue-300');
    try {
      // COMPLETENESS: specifications + price from ALL of this product's photos
      // (batched inside the client), then a second-pass verification, then
      // validation â€” only a validated extraction is ever saved.
      const combined = await aiClient.completeSpecsAndPrice(images, p, { category: cat, maxImages: AI_PRODUCT_SCANNER.maxImages }).catch(() => null);
      let specs = (combined && combined.specs) || {};
      let price = combined ? combined.price : null;
      // SECOND PASS â€” verify every extracted value against the document again.
      try {
        const verdict = await aiClient.verifyExtraction(images, p, specs, [], { maxImages: AI_PRODUCT_SCANNER.maxImages });
        if (verdict && verdict.corrections && typeof verdict.corrections === 'object') {
          for (const [k, v] of Object.entries(verdict.corrections)) {
            if (v == null || String(Array.isArray(v) ? v.join(', ') : v).trim() === '') continue;
            if (!SCAN_KNOWN_SPEC_KEYS.includes(k)) continue;
            specs[k] = v;
          }
          for (const [fromKey, toKey] of (Array.isArray(verdict.wrong_mapping) ? verdict.wrong_mapping : [])) {
            if (!SCAN_KNOWN_SPEC_KEYS.includes(toKey)) continue;
            if (specs[fromKey] != null && (specs[toKey] == null || String(specs[toKey]).trim() === '')) {
              specs[toKey] = specs[fromKey];
              delete specs[fromKey];
            }
          }
        }
      } catch { /* verification unavailable â€” validated first pass stands */ }

      // VALIDATION before save: strip junk values ("n/a", "unknown", AI
      // commentary), coerce years/numbers into sane ranges and keep only keys
      // that belong to the known spec superset.
      const cleanSpecs = {};
      for (const [k, raw] of Object.entries(specs)) {
        if (!SCAN_KNOWN_SPEC_KEYS.includes(k) || SCAN_OWNER_ONLY_KEYS.has(k)) continue;
        const v = Array.isArray(raw)
          ? raw.map(x => String(x ?? '').replace(/\s+/g, ' ').trim()).filter(Boolean)
          : String(raw ?? '').replace(/\s+/g, ' ').trim();
        if (!v.length || (Array.isArray(v) ? v.join(' ') : v).match(_SCAN_BAD_VALUE)) continue;
        if (/^(model_)?year/.test(k)) {
          const n = parseInt(v, 10);
          if (!Number.isFinite(n) || n < 1800 || n > new Date().getFullYear() + 2) continue;
        }
        cleanSpecs[k] = v;
      }
      specs = cleanSpecs;

      const s = specs || {};
      const src = p.property_id ? (scanReviewSourceProducts[p.property_id] || null) : null;
      const existing = src ? (src.specifications && typeof src.specifications === 'object' ? { ...src, ...src.specifications } : src) : null;
      const idLabel = [p.year || s.year, p.brand || s.brand, p.model || s.model].filter(Boolean).join(' ') || p.detected_name || 'Product';

      const est = price ? Number(price.estimated_price ?? price.price ?? price.estimate) : NaN;
      let finalPrice = (Number.isFinite(est) && est > 0) ? est : (existing ? Number(existing.price) : NaN);
      if (!Number.isFinite(finalPrice) || finalPrice <= 0) finalPrice = GLOBAL_PRICE_MIN;
      finalPrice = Math.max(GLOBAL_PRICE_MIN, Math.min(GLOBAL_PRICE_MAX, finalPrice));

      // FULL SPEC PAYLOAD: every validated key returned by the AI is kept â€”
      // nothing is dropped because it was missing from a hardcoded list.
      const TOP_LEVEL_HANDLED = new Set(['title', 'description', 'brand', 'color', 'size', 'condition', 'warranty', 'availability_status']);
      const specPayload = {};
      for (const [k, v] of Object.entries({ ...Object.fromEntries(SCAN_IDENTIFICATION_KEYS.filter(k => k !== 'year_estimated' && k !== 'listing_status').map(k => [k, p[k] ?? null])), ...s })) {
        if (TOP_LEVEL_HANDLED.has(k) || SCAN_OWNER_ONLY_KEYS.has(k)) continue;
        const val = Array.isArray(v) ? v.filter(x => x != null && String(x).trim() !== '') : v;
        if (val == null || (typeof val === 'string' && !val.trim())) continue;
        specPayload[k] = val;
      }
      const specMerged = { ...((existing && existing.specifications && typeof existing.specifications === 'object') ? existing.specifications : {}), ...specPayload };

      const payload = {
        listing_type: 'product',
        category: cat,
        subcategory: existing?.subcategory || s.subcategory || null,
        title: s.title || (existing && existing.title) || idLabel,
        description: s.description || (existing && existing.description) || '',
        price: finalPrice,
        currency: (existing && existing.currency) || 'USD',
        country: (existing && existing.country) || '', country_code: (existing && existing.country_code) || '',
        listing_status: 'sale', state: '', city: '', product_location: '', latitude: null, longitude: null,
        is_active: true, // publish â€” any image count is fine
        is_featured: !!(existing && existing.is_featured),
        brand: p.brand || s.brand || (existing && existing.brand) || null,
        color: s.color || (existing && existing.color) || null,
        size: s.size || (existing && existing.size) || null,
        condition: (existing && existing.condition) || null,
        warranty: (existing && existing.warranty) || null,
        availability_status: (existing && existing.availability_status) || 'In Stock',
        stock_quantity: (existing && existing.stock_quantity) ? parseInt(existing.stock_quantity) : null,
        images: images.length ? images : ((existing && existing.images) || []),
        features: (Array.isArray(s.features) && s.features.length ? s.features : (existing && existing.features) || []),
        tags: (Array.isArray(s.tags) && s.tags.length ? s.tags : (existing && existing.tags) || []),
        highlights: (Array.isArray(s.highlights) && s.highlights.length ? s.highlights : (existing && existing.highlights) || []),
        seo_keywords: (Array.isArray(s.seo_keywords) && s.seo_keywords.length ? s.seo_keywords : (existing && existing.seo_keywords) || []),
        is_ai_generated: true,
        ai_generated_fields: ['title', 'description', 'specifications', 'price'],
        specifications: specMerged,
        updated_at: new Date().toISOString(),
      };

      if (existing && existing.property_id) {
        // UPDATE the scanned product â€” never create a duplicate of it.
        payload.property_id = existing.property_id;
        const { error } = await supabase.from('showroom_listings').upsert(payload, { onConflict: 'property_id' });
        if (error) throw error;
        updated++;
      } else {
        payload.property_id = genId();
        const { error } = await supabase.from('showroom_listings').insert(payload);
        if (error) throw error;
        savedNew++;
      }
    } catch (err) {
      failed++;
      setStatus(`<p class="text-amber-300">Could not save "${esc(p.detected_name || 'product')}": ${esc(String(err?.message || err))} â€” continuing with the restâ€¦</p>`, 'text-amber-300');
    }
  }

  // Reset the review list to only what still needs attention (properties).
  scanReviewProducts = scanReviewProducts.filter((_, i) => propertyIndexes.includes(i));
  const summary = `${updated} updated, ${savedNew} new${failed ? `, ${failed} failed` : ''}`;
  if (!scanReviewProducts.length) {
    scanReviewSourceProducts = {};
    scanReviewImages = [];
    setStatus(`<div class="space-y-1">
      <p class="font-bold text-emerald-300 flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4"></i> Done â€” everything saved &amp; published: ${summary}.</p>
      <p class="text-[11px] text-gray-400">Your products are live in the showroom. Use Publish &amp; Deploy to push the site.</p>
    </div>`, 'text-emerald-300');
    showToast(`All done â€” ${summary} saved & published.`, 'success');
  } else {
    scanReviewRender();
    const el2 = document.getElementById(scanReviewEntry);
    if (el2) {
      const note = document.createElement('p');
      note.className = 'text-xs font-bold text-emerald-300';
      note.textContent = `Saved & published: ${summary}. Property cards below still need Continue.`;
      el2.prepend(note);
    }
    showToast(`Saved ${summary}.`, failed ? 'info' : 'success');
  }
  renderProducts();
};

// Fill the property form from a scan result (title, type, rooms, sizes,
// location, description, features and a suggested price). Fully editable â€”
// no auto-save, no auto-publish.
function applyScanToPropertyForm(result) {
  const identification = result && result.identification && result.identification.identified !== false ? result.identification : {};
  const specs = result && result.specs ? result.specs : {};
  const price = result && result.price ? result.price : null;
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
  set('title', specs.title || identification.detected_name);
  set('description', specs.description);
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
  const vs = document.querySelector('#property-form [name="verification_status"]');
  if (vs) { vs.value = 'Not verified'; filled.push('verification_status'); }

  // "Not specified" policy â€” any relevant field the AI could not determine is
  // marked clearly instead of being left blank or guessed, per the owner's rules.
  const missing = new Set((Array.isArray(specs.missing_fields) ? specs.missing_fields : []).map(k => String(k)));
  const NOT_SPECIFIED_SKIP = new Set(['title', 'description', 'price', 'real_price', 'features', 'highlights', 'seo_keywords',
      'country', 'country_code', 'state', 'city', 'town', 'product_location', 'area', 'address', 'zip_code', 'latitude', 'longitude',
      'landmarks_text', 'interior_features_text', 'exterior_features_text', 'home_systems_text',
      'floor_plan_image', 'floor_plan_levels', 'floor_plan_total_area', 'floor_plan_rooms',
      'nearby_schools_text', 'nearby_hospitals_text', 'nearby_shopping_text', 'nearby_transportation_text', 'nearby_distances_text',
      'legal_info_text', 'inspection_info', 'risk_notes', 'documents_text', 'verification_date', 'verification_status']);
  missing.forEach((key) => {
    if (NOT_SPECIFIED_SKIP.has(key)) return;
    const field = document.querySelector(`#property-form [name="${key}"]`);
    if (!field || field.type === 'checkbox' || field.type === 'radio' || field.type === 'number') return;
    if (String(field.value || '').trim() !== '') return;
    if (field.tagName === 'SELECT' && ![...field.options].some(o => o.value === 'Not specified')) {
      const opt = document.createElement('option');
      opt.value = 'Not specified'; opt.textContent = 'Not specified';
      field.appendChild(opt);
    }
    field.value = 'Not specified';
    filled.push(`${key} (Not specified)`);
  });

  const min = Number.isFinite(Number(GLOBAL_PRICE_MIN)) ? Number(GLOBAL_PRICE_MIN) : 0;
  const max = Number.isFinite(Number(GLOBAL_PRICE_MAX)) ? Number(GLOBAL_PRICE_MAX) : 999999999;
  const clamp = (n) => Math.max(min, Math.min(max, Math.round(n)));
  const est = price ? Number(price.estimated_price) : NaN;
  const estDiscount = price ? Number(price.suggested_discount_price) : NaN;
  if (Number.isFinite(est) && est > 0) {
    const realField = document.querySelector('#property-form [name="real_price"]');
    if (realField) { realField.value = String(clamp(est)); filled.push('real_price'); }
    const discount = Number.isFinite(estDiscount) && estDiscount > 0 && estDiscount < est ? estDiscount : est;
    set('price', String(clamp(discount)));
  }
  // GUARANTEED COMPLETENESS PASS â€” same rule as the product form: AI values win,
  // anything still empty gets "Not specified" / a safe default, so the property
  // form is never left partially blank after a scan.
  const propTitleFallback = String(specs.title || identification.detected_name || 'Property').trim() || 'Property';
  const propDescFallback = specs.description
    || `${propTitleFallback} available on Weverse Online Shop. Review the details below and edit anything before publishing.`;
  const propGuaranteed = guaranteeCompleteFormFill('#property-form', { titleFallback: propTitleFallback, descriptionFallback: propDescFallback });
  if (propGuaranteed) filled.push(`${propGuaranteed} auto-completed (Not specified / safe defaults)`);

  if (typeof window.refreshPropertyMapFromForm === 'function') window.refreshPropertyMapFromForm();
  return { filled };
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
  'town', 'city', 'state', 'country', 'latitude', 'longitude', 'listing_status'];
// Honest status: when the Gemini key hit its free limit mid-scan (or none is
// set), say so plainly instead of letting results silently look thin.
function scanAiLimitNotice() {
  if (Date.now() < (typeof aiClient !== 'undefined' ? (aiClient._geminiQuotaUntil || 0) : 0)) {
    return `<p class="text-[11px] text-amber-300 mt-1">⚠ Your Gemini key hit its FREE rate limit during this scan — parts were completed from saved details only. Wait ~1 minute and scan again for full AI reading.</p>`;
  }
  return '';
}

async function runVerifiedScan({ imageUrls, identification, category, formSelector }) {
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

  // PASS 2 — verification against ALL pages/images again. Skipped when the
  // first pass never saw the document (quota blocked → text-only fallback):
  // there would be nothing visual to verify against.
  let verified = false;
  const passProvider = `${(combined && combined.specs && combined.specs._aiProvider) || ''} ${(combined && combined.specs && combined.specs._aiModel) || ''}`;
  const visionWasUsed = !/pollinations|free ai/i.test(passProvider);
  if (visionWasUsed) {
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
    setStatus('Reading every image/page, completing all specifications and pricesâ€¦', 'text-blue-300');
    let identification = identification0;
    const res = await runVerifiedScan({ imageUrls: images, identification, category, formSelector: '#product-form' });
    identification = res.identification || identification;
    const out = applyScanToProductForm({ identification, specs: res.specs, price: res.price });
    const idLabel = [identification.year, identification.brand, identification.model].filter(Boolean).join(' ') || identification.detected_name || 'the product';
    let msg = `${esc(idLabel)} â€” ${out.filled.length} field${out.filled.length > 1 ? 's' : ''} ready for you (including the detailed description and suggested Real + Discount prices). Review and edit everything, then press SAVE / UPDATE.`;
    if (identification.year_estimated) msg += ' Confirm the model year before saving.';
    msg += res.verified
      ? `<p class="text-[11px] text-gray-400 mt-1">âœ“ Second-pass verification completed â€” every value was re-checked against your document.</p>`
      : `<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run â€” values come from the first pass.</p>`;
    if (res.summary.flagged) msg += `<p class="text-[11px] text-red-300 mt-1">${res.summary.flagged} value${res.summary.flagged > 1 ? 's need' : ' needs'} your attention below.</p>`;
    msg += scanAiLimitNotice();
    msg += renderScanChecklistReport(res.checklist, res.summary);
    setStatus(msg, 'text-emerald-300');
    showToast(`Review ${idLabel}, then press SAVE / UPDATE.`, 'success');
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

  try {
    const cfg = await aiClient.getConfig();
    const keyReady = String(cfg.gemini_key || cfg.gemini_api_key || '').trim();
    if (!keyReady) {
      setStatus('No Gemini key found â€” scanning anyway with the FREE built-in AI (no key needed). For the best photo recognition, add a FREE Gemini key in AI Settings (aistudio.google.com/apikey).', 'text-blue-300');
    }
  } catch { /* config load failed â€” let the scan try anyway */ }

  if (btn) { btn.disabled = true; btn.innerHTML = 'Scanningâ€¦'; }
  setStatus('Detecting every distinct product in your imagesâ€¦', 'text-blue-300');

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
  if (btn) { btn.disabled = false; btn.innerHTML = original; }

  let products = (detection && detection.identified !== false && Array.isArray(detection.products) && detection.products.length) ? detection.products : [];
  if (!products.length) {
    // NEVER REJECT: the AI could not read the photo(s), but the images are real â€”
    // create a review card from them so the owner can still fill, save & publish.
    products = [{
      detected_name: 'Product from your photos',
      category: form.dataset.category || 'Other',
      listing_type: 'product',
      confidence: 'low',
      image_indices: images.map((_, i) => i),
    }];
    setStatus('The AI could not confidently read these photos â€” a card was created with all of them. Review, edit the details, then continue to save & publish.', 'text-amber-300');
  }

  // REVIEW LIST â€” the AI never fills or publishes on its own.
  scanReviewProducts = products;
  scanReviewImages = images;
  scanReviewSourceProducts = {};
  scanReviewEntry = 'scan-ai-status';
  scanReviewRender();
  showToast(`${products.length} distinct product${products.length > 1 ? 's' : ''} detected â€” review each one, then continue.`, 'info');
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
      const out = applyScanToPropertyForm({ identification: id2, specs: res.specs, price: res.price });
      let msg;
      if (!res.price) {
        msg = `${esc(id2.detected_name || 'Property')} â€” ${out.filled.length} fields ready. Price estimate skipped â€” set the price manually, then press Publish Property.`;
      } else {
        msg = `${esc(id2.detected_name || 'Property')} â€” ${out.filled.length} field${out.filled.length > 1 ? 's' : ''} ready for you. Review and edit everything, then press Publish Property.`;
      }
      msg += res.verified
        ? `<p class="text-[11px] text-gray-400 mt-1">✓ Second-pass verification completed — every value was re-checked against your document.</p>`
        : `<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run — values come from the first pass.</p>`;
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

  try {
    const cfg = await aiClient.getConfig();
    const keyReady = String(cfg.gemini_key || cfg.gemini_api_key || '').trim();
    if (!keyReady) {
      setStatus('No Gemini key found â€” scanning anyway with the FREE built-in AI (no key needed). For the best photo recognition, add a FREE Gemini key in AI Settings (aistudio.google.com/apikey).', 'text-blue-300');
    }
  } catch { }

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

  // Simplified confirmation â€” the owner reviews what was identified before any fill.
  // Per owner rule: a FRESH property form (no user edits) is filled automatically
  // with NO question. The confirmation only appears if the user already typed or
  // changed something, so a scan never silently overwrites work in progress.
  const choice = await new Promise((resolve) => {
    _scanConfirmResolve = (c) => { _scanConfirmResolve = null; resolve(c); };
    const el = document.getElementById('scan-ai-prop-status');
    if (!el) { resolve({ choice: 'continue' }); return; }
    if (!window._propFormDirty) { resolve({ choice: 'continue' }); return; }
    el.classList.remove('hidden', 'text-red-400', 'text-emerald-300', 'text-amber-300', 'text-blue-300');
    const conf = identification.confidence || 'medium';
    const confBadge = { high: 'text-emerald-400 border-emerald-500/20', medium: 'text-amber-400 border-amber-500/20', low: 'text-red-400 border-red-500/20' }[conf] || 'text-amber-400 border-amber-500/20';
    el.innerHTML = `
      <div class="rounded-xl border border-violet-500/30 bg-violet-500/10 p-3 space-y-2 fade-in">
        <p class="text-xs font-bold text-white">AI identified: <span class="text-violet-300">${esc(identification.detected_name || 'this property')}</span></p>
        <p class="text-[11px] text-gray-400">
          ${identification.property_type ? 'Type: ' + esc(identification.property_type) + ' â€¢ ' : ''}${identification.bedrooms ? esc(identification.bedrooms) + ' bed â€¢ ' : ''}${identification.bathrooms ? esc(identification.bathrooms) + ' bath â€¢ ' : ''}${[identification.city, identification.state, identification.country].filter(Boolean).join(', ') || 'location not visible'}
          <span class="ml-1 inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${confBadge}">${esc(conf).toUpperCase()} confidence</span>
        </p>
        <div class="flex flex-wrap gap-2">
          <button type="button" onclick="_resolveScanConfirm('continue')" class="btn-press px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg transition">Fill the property form</button>
          <button type="button" onclick="_resolveScanConfirm('cancel')" class="btn-press px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 text-xs font-bold rounded-lg transition">Cancel</button>
        </div>
      </div>`;
  });

  if (!choice || choice.choice === 'cancel') {
    setStatus('Scan cancelled â€” nothing was changed.', 'text-gray-400');
    showToast('Scan cancelled.', 'info');
    return;
  }

  try {
    setStatus('Reading every page, completing property details and market valueâ€¦', 'text-blue-300');
    const res = await runVerifiedScan({ imageUrls: images, identification, category: 'Real Estate', formSelector: '#property-form' });
    const id2 = res.identification || identification;
    const out = applyScanToPropertyForm({ identification: id2, specs: res.specs, price: res.price });
    let msg = `${esc(id2.detected_name || 'Property')} â€” ${out.filled.length} field${out.filled.length > 1 ? 's' : ''} ready for you. Review and edit everything, then press Publish Property.`;
    msg += res.verified
      ? `<p class="text-[11px] text-gray-400 mt-1">âœ“ Second-pass verification completed â€” every value was re-checked against your document.</p>`
      : `<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run â€” values come from the first pass.</p>`;
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

// â”€â”€ Scan-first panel on the category picker (Add Product step 1) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let step1Images = [];
window.handleStep1ImageUpload = async function(e) {
  const files = Array.from(e.target.files || []).slice(0, 10);
  if (!files.length) return;
  for (const file of files) {
    try {
      const url = await uploadImageFile(file);
      if (url) step1Images.push(url);
    } catch { /* skip failed uploads */ }
  }
  renderStep1Preview();
  e.target.value = '';
};
window.removeStep1Image = function(i) {
  step1Images.splice(i, 1);
  renderStep1Preview();
};
function renderStep1Preview() {
  const preview = document.getElementById('s1-image-preview');
  if (!preview) return;
  preview.innerHTML = step1Images.map((u, i) => `
    <div class="img-thumb ${i === 0 ? 'cover-img' : ''}" data-index="${i}">
      <img src="${esc(u)}" onerror="this.src='/fallback.svg'">
      <button class="rm" onclick="removeStep1Image(${i})" type="button">ðŸ”™</button>
    </div>`).join('');
  const btn = document.getElementById('btn-s1-scan');
  if (btn) { btn.disabled = step1Images.length === 0; btn.style.opacity = step1Images.length ? '' : '0.5'; }
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
  try {
    const cfg = await aiClient.getConfig();
    const keyReady = String(cfg.gemini_key || cfg.gemini_api_key || '').trim();
    if (!keyReady) {
      setStatus('No Gemini key found â€” scanning anyway with the FREE built-in AI (no key needed). For the best photo recognition, add a FREE Gemini key in AI Settings (aistudio.google.com/apikey).', 'text-blue-300');
    }
  } catch { }

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

// Every product the Product Manager shows (database + local fallback store),
// deduped by id. Properties live in the Properties Manager and products
// without at least one existing photo cannot be scanned visually.
async function scannerSourceProducts() {
  const seen = new Set();
  const out = [];
  const add = (p) => {
    if (!p || !p.property_id || p.listing_type === 'property') return;
    if (seen.has(p.property_id)) return;
    if (!Array.isArray(p.images) || !p.images.length) return;
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

window.openGeneralAiScanner = async function() {
  scannerImages = [];
  const products = await scannerSourceProducts();
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="scan-search" class="w-5 h-5 text-violet-400"></i> General AI Scanner</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition" title="Close">âœ• Close</button>
        </div>

        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3">
          <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> Scan your products with AI</p>
          <p class="text-[11px] text-gray-500">The scanner works on the products already in your Product Manager â€” no image upload needed. Press SCAN ALL WITH AI and it reads each product's existing photos to identify it, complete its specifications, write the description and features, pick the correct category, and suggest a fair price. Review every result, then continue to that product's form, already filled for you. Nothing is saved or published automatically.</p>
          <div class="flex items-center gap-2 text-[11px] font-bold text-gray-300 bg-white/5 border border-violet-500/20 rounded-xl px-3 py-2.5">
            <i data-lucide="package" class="w-4 h-4 text-violet-400 shrink-0"></i>
            <span>${products.length} product${products.length === 1 ? '' : 's'} ready to scan in the Product Manager.</span>
          </div>
          <button type="button" id="btn-scanner-scan" onclick="scanGeneralWithAI()" class="btn-press w-full px-4 py-3 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2">
            <i data-lucide="scan-search" class="w-4 h-4"></i> SCAN ALL WITH AI
          </button>
          <div id="scanner-scan-status" class="hidden text-xs font-medium"></div>
        </div>
      </div>
    </div>`);
  if (window.lucide) lucide.createIcons();
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
  let products = [];
  try { products = await aiScanTimeout(scannerSourceProducts(), 15000); } catch { products = []; }
  if (!products.length) {
    showToast('No products with photos are in the Product Manager yet â€” add a product first.', 'error');
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

  const images = [];
  const detections = [];
  const sources = {};
  let scannedCount = 0;
  let failedCount = 0;
  const total = products.length;
  // â”€â”€ Duplicate-image handling â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // The FIRST time a product's photos are all duplicates of photos already
  // scanned, ONE "Continue" button is shown. Pressing it ONCE skips every
  // remaining duplicate warning automatically â€” processing (AI detection,
  // category selection, saving flow) continues for every remaining product.
  // Duplicate photos are never deleted or replaced; the duplicate product is
  // simply not re-scanned (the original product with those photos is kept).
  const seenImages = new Set();
  let duplicatesSkipped = 0;
  let fallbacks = 0;
  let duplicateConfirmed = false;
  window.__scanDupContinue = function() {
    const r = window.__scanDupResolve;
    window.__scanDupResolve = null;
    const b = document.getElementById('btn-scan-dup-continue');
    if (b) b.disabled = true;
    if (r) r();
  };
  const waitForDuplicateConfirm = (prod) => new Promise((resolve) => {
    window.__scanDupResolve = resolve;
    setStatus(`<div class="space-y-2">
      <p class="font-bold text-amber-300">Duplicate images detected on "${esc(prod?.title || prod?.property_id || 'product')}". This product's photos are the same as a product already scanned.</p>
      <p class="text-gray-400">Press Continue ONCE to automatically skip ALL remaining duplicate warnings and keep processing every remaining product. No duplicate photos will be deleted or replaced.</p>
      <button type="button" id="btn-scan-dup-continue" onclick="__scanDupContinue()" class="btn-press px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg transition">Continue â€” skip all duplicate warnings</button>
    </div>`, 'text-amber-300');
    // Safety: if the scanner modal is closed while waiting, resolve so the scan
    // can never hang forever on a Continue button that no longer exists.
    const t = setInterval(() => {
      if (!document.getElementById('btn-scan-dup-continue')) {
        clearInterval(t);
        if (window.__scanDupResolve) { window.__scanDupResolve = null; resolve(); }
      }
    }, 500);
    const orig = window.__scanDupContinue;
    window.__scanDupContinue = function() { clearInterval(t); orig(); };
  });
  // â”€â”€ FAST concurrent scanning â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Several products are scanned AT THE SAME TIME (not one after another), so a
  // full catalog scan takes a fraction of the time. Each scan processes ALL of
  // the product's photos/pages (batched inside the AI client â€” nothing skipped)
  // and is bounded by a generous timeout so a slow call can never hold up the
  // whole batch.
  // PACED: only TWO products scan at once now. Every AI call is rate-limited
  // through the global pacer, so higher concurrency would just queue anyway —
  // two workers keep the pipeline full without bursting free-tier limits.
  const SCAN_CONCURRENCY = 2;
  const SCAN_TIMEOUT_MS = 120000;
  let cursor = 0;
  let doneCount = 0;
  const scanOne = async (prod) => {
    // COMPLETENESS: every photo/page of the product is scanned â€” no slicing.
    const prodImages = (prod.images || []).filter(Boolean);
    if (!prodImages.length) return;
    // Register this product's photos, then check whether ALL of them were
    // already scanned on an earlier product (a full duplicate).
    const keys = prodImages.map(u => String(u || '').trim()).filter(Boolean);
    const allSeen = keys.length > 0 && keys.every(k => seenImages.has(k));
    for (const k of keys) seenImages.add(k);
    if (allSeen) {
      // Duplicate photos of an already-scanned product â€” skip silently and keep
      // going with the rest. No prompt, nothing deleted or replaced.
      duplicatesSkipped++;
      return; // skip re-scanning this duplicate; do NOT touch its images
    }
    // No await between reading images.length and pushing, so this is race-free.
    const base = images.length;
    images.push(...prodImages);
    const indices = prodImages.map((_, i) => base + i);
    let list = [];
    try {
      const detection = await aiScanTimeout(aiClient.detectProducts(prodImages, { category: prod.category || '', maxImages: AI_PRODUCT_SCANNER.maxImages }), SCAN_TIMEOUT_MS);
      list = (detection && detection.identified !== false && Array.isArray(detection.products)) ? detection.products : [];
    } catch { /* fall through to the guaranteed fallback below */ }
    // NEVER REJECT: if the AI could not read this product (unclear photo, timeout,
    // service hiccup), still include it in the review list using the product's own
    // saved info and photos. The owner reviews it, the AI completes specs/price on
    // Continue, and the product is always saveable & publishable.
    if (!list.length) {
      list = [{
        detected_name: prod.title || prod.property_id || 'Product',
        category: prod.category || 'Other',
        listing_type: prod.listing_type || 'product',
        brand: prod.brand || null,
        model: (prod.specifications && prod.specifications.model) || prod.model || null,
        confidence: 'medium',
      }];
      fallbacks++;
    }
    scannedCount++;
    sources[prod.property_id] = prod;
    for (const d of list) {
      detections.push({
        ...d,
        property_id: prod.property_id,
        image_indices: (Array.isArray(d.image_indices) && d.image_indices.length ? d.image_indices.map(i => indices[Number(i)]).filter(i => i !== undefined) : indices),
        detected_name: d.detected_name || prod.title || prod.property_id,
        category: d.category || prod.category || 'Other',
        listing_type: d.listing_type || prod.listing_type || 'product',
      });
    }
  };
  const worker = async () => {
    while (cursor < products.length) {
      const prod = products[cursor++];
      setStatus(`Scanning ${doneCount + 1} of ${total} product${total === 1 ? '' : 's'} (fast parallel mode)â€¦`, 'text-blue-300');
      await scanOne(prod);
      doneCount++;
      if (doneCount < total) setStatus(`Scanned ${doneCount} of ${total} â€” continuingâ€¦`, 'text-blue-300');
    }
  };
  await Promise.all(Array.from({ length: Math.min(SCAN_CONCURRENCY, Math.max(1, products.length)) }, worker));
  if (btn) { btn.disabled = false; btn.innerHTML = original; }

  if (!detections.length) {
    setStatus(failedCount
      ? `The scan could not read any product (${failedCount} scan${failedCount > 1 ? 's' : ''} failed or timed out${duplicatesSkipped ? `; ${duplicatesSkipped} duplicate product${duplicatesSkipped > 1 ? 's' : ''} skipped` : ''}). Make sure your products have clear photos and that your free Gemini key is active in AI Settings, then try again.`
      : `No product could be identified from the photos on your existing products${duplicatesSkipped ? ` (${duplicatesSkipped} duplicate product${duplicatesSkipped > 1 ? 's' : ''} skipped)` : ''}. Make sure each product has clear photos, then try again.`, 'text-amber-300');
    showToast('No products could be scanned.', 'error');
    return;
  }

  // âœ… SUCCESS â€” the scan stops here with a review list. Press "Continue with
  // ALL" to save & publish every product in one click, or handle cards
  // one-by-one. Any image count is fine; 24 is only the gallery maximum.
  scanReviewProducts = detections;
  scanReviewImages = images;
  scanReviewSourceProducts = sources;
  scanReviewEntry = 'scanner-scan-status';
  scanReviewRender();
  const quotaHit = Date.now() < (aiClient._geminiQuotaUntil || 0);
  showToast(`Scan complete â€” ${scannedCount} product${scannedCount > 1 ? 's' : ''} scanned${duplicatesSkipped ? `, ${duplicatesSkipped} duplicate product${duplicatesSkipped > 1 ? 's' : ''} skipped` : ''}${fallbacks ? `, ${fallbacks} completed from saved details (AI could not read the photo â€” review ${fallbacks > 1 ? 'those' : 'it'} and edit as needed)` : ''}${quotaHit ? '. Your Gemini key hit its FREE rate limit during the scan â€” wait about 1 minute, then continue for full AI reading.' : ''}. Press "Continue with ALL" to save & publish everything at once.`, 'success');
};

window.saveProduct = async function(e, category, existingId) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('[type=submit][name=action][value=publish]');
  const publishLabel = existingId ? 'One-Click Publish Changes' : 'One-Click Publish Product';
  if (btn) { btn.disabled = true; btn.textContent = 'Savingâ€¦'; }
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
      if (btn) { btn.disabled = false; btn.textContent = publishLabel; }
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

    let err;
    if (existingId) {
      // â”€â”€ EXISTING PRODUCT â†’ PARTIAL UPDATE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // Only save what actually changed. Nothing is required in edit mode.
      let base = sanitizeShowroomPayload((window._productsData || []).find(item => item.property_id === existingId));
      if (!base) {
        const { data: fresh } = await supabase.from('showroom_listings').select('*').eq('property_id', existingId).maybeSingle();
        base = fresh ? sanitizeShowroomPayload(fresh) : null;
      }
      if (!base) throw new Error('Could not load the current product. Refresh the page and try again.');

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

      const feat = data.is_featured === 'on';
      if (!!base.is_featured !== feat) changes.is_featured = feat;
      // Save & publish works with ANY image count â€” 24 is only a maximum.
      const act = isDraft ? false : data.is_active === 'on';
      if (!!base.is_active !== act) changes.is_active = act;

      const spec = buildSpecifications(data);
      const specMerged = { ...(base.specifications && typeof base.specifications === 'object' ? base.specifications : {}), ...spec };
      if (JSON.stringify(specMerged) !== JSON.stringify(base.specifications || {})) changes.specifications = specMerged;

      if (Object.keys(changes).length === 0) {
        showToast('No changes detected â€” nothing was saved.', 'info');
        try { localStorage.removeItem(productAutoSaveKey(category, existingId)); } catch {}
        if (btn) { btn.disabled = false; btn.textContent = publishLabel; }
        return;
      }

      const payload = { ...base, ...changes, property_id: existingId, updated_at: new Date().toISOString() };
      ({ error: err } = await supabase.from('showroom_listings').upsert(payload, { onConflict: 'property_id' }));
      if (err) {
        const handled = handleWriteError(err, () => upsertLocalShowroomListing(payload), 'Product update');
        if (handled) {
          if (btn) { btn.disabled = false; btn.textContent = publishLabel; }
          // Even when a write is caught (permission / DB-unavailable fallback),
          // always close the product form and return to the Product Manager
          // list so the owner is never left stuck inside the product.
          closeModal();
          renderProducts();
          return;
        }
      }
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
      ({ error: err } = await supabase.from('showroom_listings').insert(payload));
      if (err) {
        const handled = handleWriteError(err, () => upsertLocalShowroomListing({ ...payload, property_id: payload.property_id }), 'Product publish');
        if (handled) {
          if (btn) { btn.disabled = false; btn.textContent = publishLabel; }
          // Always return to the Product Manager so the owner isn't stuck in
          // the form (permission / DB-unavailable cases included).
          closeModal();
          renderProducts();
          return;
        }
      }
      showToast(isDraft ? 'Draft saved!' : 'Published Successfully! Your product is now live in your showroom.');
    }
    try { localStorage.removeItem(productAutoSaveKey(category, existingId)); } catch {}
    closeProductFormModal();
    renderProducts();
  } catch (err) {
    showToast('Error: ' + err.message, 'error');
    if (btn) { btn.disabled = false; btn.textContent = publishLabel; }
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
  const full = sanitizeShowroomPayload((window._productsData || []).find(item => item.property_id === pid));
  const { error } = await supabase.from('showroom_listings').upsert({ ...full, property_id: pid, is_active: active, availability_status: active ? 'In Stock' : 'Out of Stock' }, { onConflict: 'property_id' });
  if (error) {
    if (isRlsDenied(error)) return showToast(`âš ï¸ ${active ? 'Publish' : 'Unpublish'} blocked: database admin role rejected the write. Re-run the admin permission migration.`, 'error');
    return showToast(`${active ? 'Publish' : 'Unpublish'} failed: ${error.message}`, 'error');
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">ðŸ”™ Back</button>
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
            <div><label class="lbl">State / Province</label><input class="input-field" name="state" value="${esc(existing.state || '')}" placeholder="e.g. California"></div>
            <div><label class="lbl">City</label><input class="input-field" name="city" value="${esc(existing.city || '')}" placeholder="e.g. Los Angeles"></div>
            <div><label class="lbl">Town / Local Area</label><input class="input-field" name="town" value="${esc(existing.town || '')}" placeholder="Neighborhood or district"></div>
            <div><label class="lbl">Latitude</label><input type="number" step="any" class="input-field" name="latitude" value="${esc(existing.latitude || '')}" placeholder="40.7128"></div>
            <div><label class="lbl">Longitude</label><input type="number" step="any" class="input-field" name="longitude" value="${esc(existing.longitude || '')}" placeholder="-74.0060"></div>
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
            <div><label class="lbl">Bedrooms</label><input type="number" class="input-field" name="bedrooms" value="${existing.bedrooms ?? ''}" placeholder="3"></div>
            <div><label class="lbl">Bathrooms</label><input type="number" class="input-field" name="bathrooms" value="${existing.bathrooms ?? ''}" placeholder="2"></div>
            <div><label class="lbl">Building Size</label><input class="input-field" name="building_size" value="${esc(existing.building_size || '')}" placeholder="e.g. 2,500 sqft"></div>
            <div><label class="lbl">Land Size</label><input class="input-field" name="land_size" value="${esc(existing.land_size || '')}" placeholder="e.g. 0.5 acres"></div>
            <div><label class="lbl">Parking Spaces</label><input type="number" class="input-field" name="parking_spaces" value="${existing.parking_spaces ?? ''}"></div>
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
            <div><label class="lbl">Half Bathrooms</label><input type="number" class="input-field" name="half_bathrooms" value="${existing.half_bathrooms ?? ''}" placeholder="1"></div>
            <div><label class="lbl">Floors / Levels</label><input type="number" class="input-field" name="floors" value="${existing.floors ?? ''}" placeholder="2"></div>
            <div><label class="lbl">Garage</label><input class="input-field" name="garage" value="${esc(existing.garage || '')}" placeholder="e.g. 2-car attached, None"></div>
            <div class="sm:col-span-2"><label class="lbl">Description</label><textarea class="input-field" name="description" rows="3" placeholder="Describe the propertyâ€¦">${esc(existing.description || '')}</textarea></div>
            <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${esc((existing.features || []).join(', '))}" placeholder="Swimming Pool, Garden, Garageâ€¦"></div>
            <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${esc((existing.highlights || []).join(', '))}" placeholder="Prime location, map-ready post, 24-image gallery"></div>
            <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${esc((existing.seo_keywords || []).join(', '))}" placeholder="mansion, villa, property investment"></div>
            <div class="sm:col-span-2"><label class="lbl">Property Location</label><input class="input-field" name="product_location" value="${esc(existing.product_location || '')}" placeholder="Estate, district, city, landmark"></div>
            <div class="sm:col-span-2"><label class="lbl">Street / Address</label><input class="input-field" name="address" value="${esc(existing.address || '')}" placeholder="Street and number, e.g. 123 Maple Street"></div>
            <div><label class="lbl">ZIP / Postal Code</label><input class="input-field" name="zip_code" value="${esc(existing.zip_code || '')}" placeholder="e.g. 10001"></div>
            <div><label class="lbl">Landmarks (comma separated)</label><input class="input-field" name="landmarks_text" value="${esc((existing.landmarks || []).join(', '))}" placeholder="City Hall, Central Park, Main Station"></div>
          </div>

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="home" class="w-4 h-4 text-emerald-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Interior &amp; Exterior Features</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Interior Features (comma separated)</label><input class="input-field" name="interior_features_text" value="${esc((existing.interior_features || []).join(', '))}" placeholder="Open plan kitchen, Walk-in closet, Fireplaceâ€¦"></div>
              <div class="sm:col-span-2"><label class="lbl">Exterior Features (comma separated)</label><input class="input-field" name="exterior_features_text" value="${esc((existing.exterior_features || []).join(', '))}" placeholder="Swimming pool, Garden, Balcony, Patioâ€¦"></div>
              <div class="sm:col-span-2"><label class="lbl">Home Systems (comma separated)</label><input class="input-field" name="home_systems_text" value="${esc((existing.home_systems || []).join(', '))}" placeholder="Central heating, Air conditioning, Solar panelsâ€¦"></div>
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
            <label class="lbl">Property Images</label>
            <div id="drop-zone" class="drop-zone" onclick="document.getElementById('img-upload').click()">
              <i data-lucide="image-plus" class="w-7 h-7 text-blue-400 mx-auto mb-2"></i>
              <p class="text-xs font-bold text-gray-300">Click or drag & drop images</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*,application/pdf" onchange="handleImageUpload(event)">
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
    highlights: normalizeCommaList(data.highlights_text),
    seo_keywords: normalizeCommaList(data.seo_keywords_text),
    is_ai_generated: !!data.catalog_template_id,
    ai_generated_fields: data.catalog_template_id ? ['title', 'description', 'features', 'highlights', 'seo_keywords', 'country', 'country_code', 'product_location'] : [],
    is_active: data.is_active === 'on',
  };
  let err;
  if (existingId) {
    payload.property_id = existingId;
    const current = sanitizeShowroomPayload((window._propertiesData || []).find(item => item.property_id === existingId) || (window._productsData || []).find(item => item.property_id === existingId));
    payload.specifications = { ...(current.specifications && typeof current.specifications === 'object' ? current.specifications : {}), real_price: realPriceNum };
    ({ error: err } = await supabase.from('showroom_listings').upsert({ ...current, ...payload }, { onConflict: 'property_id' }));
  } else {
    payload.property_id = genId();
    payload.specifications = { real_price: realPriceNum };
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">ðŸ”™ Back</button>
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">ðŸ”™ Back</button>
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">ðŸ”™ Back</button>
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

  // Also mirror gemini_key â†’ gemini_api_key for backwards compat
  if (payload.gemini_key) payload.gemini_api_key = payload.gemini_key;

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

    const images = (await Promise.all(
      (imageUrls || []).slice(0, context.maxImages || 3).map(u => this._fetchImageAsDataUrl(u, 768))
    )).filter(Boolean);
    if (!images.length) throw new Error('Could not read the uploaded images.');

    // 1) FAST PATH: browser-side Gemini vision (key already loaded).
    try {
      const fast = await this._tryBrowserGeminiVision(prompt, images);
      if (fast) return fast;
    } catch { /* fall through to server vision */ }

    // 2) Server-side Gemini vision via the edge function (key stays server-side)
    try {
      const res = await this._callEdge({ action: 'vision', images, prompt, max_tokens: 4096 });
      if (res && res.success && res.text) {
        const parsed = extractJsonFromAiText(res.text);
        if (parsed) return { ...parsed, _aiProvider: res.provider, _aiModel: res.model };
        throw new Error('The AI returned no valid analysis for these images.');
      }
      throw new Error((res && res.error) || 'Vision service unavailable.');
    } catch { /* no vision */ }

    // 3) No vision at all: NEVER fall back to a text-only model here â€” it cannot
    //    see the photo and would just invent a fake product. Return null.
    return null;
  },

  // Shared vision runner: fetch images â†’ try browser Gemini â†’ try server edge â†’
  // (optional) free keyless text AI for prompts that already contain the
  // identification data (specs/price stages). Returns parsed JSON or null.
  //
  // COMPLETENESS: EVERY provided URL is processed. PDFs are expanded into one
  // image per page; sets larger than `batchSize` are split into parallel
  // batches whose results are merged with `mergeResults` (stage-specific), so
  // no page is ever skipped just because a document has many pages.
  async _runVisionPrompt(prompt, imageUrls, { maxImages = 5, maxTokens = 4096, allowTextFallback = false, mergeResults = null, onProgress = () => {} } = {}) {
    const batchSize = Math.max(1, Number(maxImages) || 5);
    // ALL pages/images are collected â€” PDFs become one image per page.
    const images = await this._collectScanImages(imageUrls, { onProgress });
    if (!images.length) throw new Error('Could not read the uploaded images.');

    const runOne = async (batch) => this._runSingleVisionCall(prompt, batch, { maxTokens, allowTextFallback });

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

  // One vision call against ONE batch of images: browser Gemini â†’ server edge â†’
  // (optional) free keyless text fallback. Returns parsed JSON or null.
  async _runSingleVisionCall(prompt, images, { maxTokens = 4096, allowTextFallback = false } = {}) {
    // FAST: if Gemini already answered 429/quota in this session, skip BOTH the
    // browser vision call and the server edge vision call entirely (the edge
    // function uses the same key and would just burn another timeout) and go
    // straight to the free text fallback / saved-details path.
    const quotaBlocked = Date.now() < (this._geminiQuotaUntil || 0);

    if (!quotaBlocked) {
      try {
        const fast = await this._tryBrowserGeminiVision(prompt, images);
        if (fast) return fast;
      } catch { /* fall through to server vision */ }
    }

    if (!quotaBlocked) {
      try {
        const res = await this._callEdge({ action: 'vision', images, prompt, max_tokens: maxTokens }, 30000);
        if (res && res.success && res.text) {
          const parsed = extractJsonFromAiText(res.text);
          if (parsed) return { ...parsed, _aiProvider: res.provider, _aiModel: res.model };
          throw new Error('The AI returned no valid analysis for these images.');
        }
        throw new Error((res && res.error) || 'Vision service unavailable.');
      } catch { /* no vision */ }
    }

    // FREE KEYLESS FALLBACK (specs/price stages only â€” the prompt already contains
    // the full identification data from stage 1, so the text AI can complete the
    // form without seeing the photo, and it invents nothing about the identity).
    if (allowTextFallback) {
      try {
        const fb = await this.freeChat([
          { role: 'system', content: 'You complete marketplace listing data. Always reply with ONE valid JSON object only â€” no markdown, no extra text.' },
          { role: 'user', content: prompt },
        ], { maxTokens: 3000, timeoutMs: 30000 });
        const parsed = extractJsonFromAiText(fb.text);
        if (parsed) return { ...parsed, _aiProvider: fb.provider, _aiModel: fb.model };
      } catch { /* give up gracefully */ }
    }

    return null;
  },

  // Collect scan input as data URLs: photos are fetched+compressed (cached),
  // PDFs are rendered page-by-page into one image per page so multi-page
  // documents are read completely. Photos download IN PARALLEL so a big
  // document set is ready quickly. Returns a flat array of data URLs.
  _pdfPageCache: new Map(),
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
    return this._runVisionPrompt(prompt, imageUrls, { maxImages: context.maxImages || 5 });
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
- Every DIFFERENT product must be its own entry. If one photo shows a bag, a watch, shoes and a phone, that is FOUR separate products â€” one entry per product.
- Photos that show the SAME product from different angles / sides / details are ONE product: give them the same entry and list every image index in image_indices.
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
- subcategory, property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors (number|null), garage (string|null), parking_spaces (number|null), furnished ("Furnished"/"Unfurnished"/null), year_built (number|null â€” only if visible), area (neighborhood/district), address (street + number or landmark when visible/reliably known), zip_code (string|null â€” only if visible), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town, city, state, country, latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null) for properties. LOCATION RULES: only use location genuinely visible in the photo â€” never invent an address or coordinates; return null when unknown.
- confidence: "high" | "medium" | "low" for each product.
- detected_name: a short plain label for each product, e.g. "black leather handbag", "silver wristwatch", "white Nike sneakers", "modern 3-bedroom villa".

Return ONE valid JSON object (no markdown):
{ "identified": true, "products": [ { "image_indices": number[], "listing_type": "product"|"vehicle"|"property", "brand": string|null, "model": string|null, "year": string|null, "year_estimated": boolean, "body_type": string|null, "color": string|null, "condition": string|null, "category": string|null, "subcategory": string|null, "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": "Furnished"|"Unfurnished"|null, "year_built": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "confidence": "high"|"medium"|"low", "detected_name": string } ] }`;
    // Multi-batch merge: every batch reports image indices relative to its own
    // pages, so each entry's indices are shifted by that batch's start index
    // before all products are concatenated. The same product split across two
    // batches (e.g. a long PDF) is unified by detected_name + brand + model.
    return this._runVisionPrompt(prompt, imageUrls, {
      maxImages: context.maxImages || 5,
      mergeResults: (entries) => {
        const products = [];
        for (const { result, startIndex } of entries) {
          for (const p of (result && Array.isArray(result.products) ? result.products : [])) {
            const idx = Array.isArray(p.image_indices)
              ? [...new Set(p.image_indices.map(n => parseInt(n, 10)).filter(Number.isFinite).map(n => n + startIndex))]
              : [startIndex];
            const dupe = products.find(q =>
              String(q.detected_name || '').toLowerCase() === String(p.detected_name || '').toLowerCase()
              && String(q.brand || '').toLowerCase() === String(p.brand || '').toLowerCase()
              && String(q.model || '').toLowerCase() === String(p.model || '').toLowerCase());
            if (dupe) {
              dupe.image_indices = [...new Set([...(dupe.image_indices || []), ...idx])];
              if ((p.confidence === 'high' && dupe.confidence !== 'high') || (!dupe.detected_name && p.detected_name)) {
                dupe.confidence = p.confidence; dupe.detected_name = p.detected_name || dupe.detected_name;
              }
              continue;
            }
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
- Vehicles: Engine, Transmission, Fuel, Drive type, Horsepower, Seats (seating capacity), Doors, Body type, Model year, Mileage (only if visible/known), Safety features.
- Phones/Computers: storage, ram, processor, display, graphics, os.
- Properties (house/villa/land): property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors, garage, parking_spaces, furnished ("Furnished"/"Unfurnished"/null), condition (string|null â€” "New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation"; only from visible state or a listing sign, never inferred as verified), year_built (number|null â€” only if visible/known), year_renovated (number|null â€” only if visible/known), area (neighborhood/district), address (street + number or landmark when visible/reliably known), zip_code (string|null â€” only if visibly printed), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town, city, state, country, country_code, latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null), interior_features (string[]|null â€” only interior elements actually visible in the photos), exterior_features (string[]|null â€” only exterior elements actually visible), home_systems (string[]|null â€” only systems visibly present, e.g. air conditioning units, solar panels, radiators), nearby_area (only genuinely known from the photo/listing sign: schools/hospitals/shopping/transportation/distances â€” otherwise null), floor_plan (only if a floor plan is actually visible in the photos, otherwise null), legal_info (NEVER claim ownership/title/permits/taxes/legal status as verified from a photo â€” only mention something clearly printed on a visible listing/sign as source "Seller provided", otherwise null), inspection_info (string|null â€” only if visibly stated), verification_status (always null here â€” stays "Not verified" unless the owner verifies), risk_notes (string|null â€” only clearly visible issues). LOCATION RULES: only use location genuinely visible in the photo or reliably known â€” never invent an address, city, coordinates, landmarks or nearby places; return null (and list the key in "missing_fields") when you cannot determine it. latitude/longitude may be derived from a readable address; otherwise null.
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
    return this._runVisionPrompt(prompt, imageUrls, { maxImages: context.maxImages || 5, allowTextFallback: true });
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
    return this._runVisionPrompt(prompt, imageUrls, { maxImages: context.maxImages || 5, allowTextFallback: true });
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

JOB A â€” COMPLETE THE STANDARD SPECIFICATIONS using reliable data for that exact brand + model:
- Vehicles: engine, transmission, fuel_type, drive_type, horsepower, seating_capacity, doors, body_type, model_year, mileage (only if visible/known), safety_features.
- Phones/Computers: storage, ram, processor, display, graphics, os.
- Properties: property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors, garage, parking_spaces, furnished ("Furnished"/"Unfurnished"/null), condition ("New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation" â€” only from visible state or a listing sign, never inferred as verified), year_built/year_renovated (only if visible/known), area, address (ONLY when genuinely visible/reliably known), zip_code (only if visibly printed), landmarks (only clearly indicated ones), town, city, state, country, country_code, latitude, longitude, listing_status ("sale"/"rent"/null). LOCATION RULES: never invent an address, city or coordinates; return null and list the key in "missing_fields" when undeterminable.
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
  "engine": string|null, "transmission": string|null, "fuel_type": string|null, "drive_type": string|null,
  "horsepower": string|null, "mileage": string|null, "seating_capacity": string|null, "doors": string|null,
  "body_type": string|null, "model_year": string|null, "safety_features": string[]|null,
  "storage": string|null, "ram": string|null, "processor": string|null, "display": string|null, "graphics": string|null, "os": string|null,
  "material": string|null, "size": string|null, "gender": string|null, "platform": string|null,
  "type": string|null, "color": string|null, "brand": string|null, "model": string|null,
  "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": string|null, "condition": string|null, "year_built": number|null, "year_renovated": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "country_code": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null,
  "author": string|null, "publisher": string|null, "language": string|null, "format": string|null, "isbn": string|null, "pages": string|null, "edition": string|null, "quantity": string|null, "age_range": string|null, "skin_type": string|null, "ingredients": string|null, "pet_type": string|null, "lens": string|null, "sensor": string|null, "megapixels": string|null, "video": string|null, "license": string|null, "version": string|null, "duration": string|null, "followers": string|null, "engagement": string|null, "niche": string|null, "usage": string|null, "shelf_life": string|null, "assembly": string|null, "weatherproof": string|null, "warranty": string|null,
  "features": string[]|null, "highlights": string[]|null, "seo_keywords": string[]|null, "tags": string[]|null,
  "availability_status": string|null, "stock_quantity": number|null,
  "estimated": string[],
  "missing_fields": string[],
  "price": { "currency": "USD", "estimated_price": number, "suggested_discount_price": number|null, "confidence": "high"|"medium"|"low", "reason": string }
}${context.fieldsSchema || ''}${context.fieldsSchema ? `\nFORM-FIELD COMPLETENESS RULE: the form-field list above is binding. EVERY key in that list that is not already covered by the JSON keys above MUST also appear as a top-level key in your returned JSON with its extracted value (or null when genuinely not present anywhere in the document/photos â€” never guess). Use each field's exact quoted key. Match select options exactly.` : ''}`;
    const parsed = await this._runVisionPrompt(prompt, imageUrls, { maxImages: context.maxImages || 5, allowTextFallback: true });
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
    if (Date.now() < (this._geminiQuotaUntil || 0)) return null;
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
        allowTextFallback: false,
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

  // Gemini vision straight from the browser (free tier supports vision).
  // FREE-TIER PACER — every Gemini vision call goes through this gate. Free
  // keys allow only ~10-15 requests/minute; firing batches in parallel bursts
  // burns that in seconds and then EVERY later call 429s (which is why scans
  // used to come back with empty forms). The gate queues calls and keeps a
  // safe minimum gap between them, so big multi-batch scans take longer but
  // actually SUCCEED instead of mass-failing.
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

  async _tryBrowserGeminiVision(prompt, images) {
    // FAST: if we already know Gemini's quota is exhausted, don't waste time
    // retrying every model with the same key.
    if (Date.now() < (this._geminiQuotaUntil || 0)) return null;
    const cfg = await this.getConfig();
    const apiKey = String(cfg.gemini_key || cfg.gemini_api_key || '').trim();
    if (!apiKey) return null;
    // FAST: the lightest vision model answers first â€” flash-lite is the fastest
    // free vision model by far, so it leads unless you explicitly picked a
    // vision model yourself. Slow "thinking" is disabled (thinkingBudget 0)
    // because thinking tokens add many seconds and eat the output budget.
    const preferred = String(cfg.gemini_vision_model || '').trim();
    const models = [...new Set([
      preferred || 'gemini-2.0-flash-lite',
      'gemini-2.0-flash-lite',
      String(cfg.gemini_model || '').trim(),
      'gemini-2.5-flash',
    ].filter(Boolean))];
    for (const model of models) {
      try {
        const parts = [{ text: prompt }];
        for (const url of images) {
          const match = String(url).match(/^data:([^;,]+)[;,]base64,(.+)$/s);
          if (!match) continue;
          parts.push({ inlineData: { mimeType: match[1].trim(), data: match[2].trim() } });
        }
        if (parts.length < 2) return null;
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
        const disableThinking = /2\.5|-3/.test(model);
        // PACED: this fetch waits its turn in the global rate-limit queue.
        const res = await this._paceGeminiCall(() => fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts }],
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 4096,
              ...(disableThinking ? { thinkingConfig: { thinkingBudget: 0 } } : {}),
            },
          }),
          signal: AbortSignal.timeout(20000),
        }));
        // FAST circuit-breaker: a 429 (quota) or 403 applies to the whole key,
        // so stop trying the remaining models â€” skip straight to the fallbacks.
        if (res.status === 429 || res.status === 403) {
          this._geminiQuotaUntil = Date.now() + 65 * 1000; // wait out the per-minute window
          return null;
        }
        if (!res.ok) continue;
        const data = await res.json();
        const text = (data?.candidates?.[0]?.content?.parts || []).map(p => p?.text || '').join('\n').trim();
        if (!text) continue;
        const parsed = extractJsonFromAiText(text);
        if (parsed) return { ...parsed, _aiProvider: 'Gemini (browser)', _aiModel: model };
      } catch { /* try next model */ }
    }
    return null;
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

// â”€â”€ AI Status Widget (Gemini) â”€â”€
window.showAiStatusModal = async function() {
  const statuses = await aiClient.getStatus();
  const configured = statuses.filter(s => s.hasKey);
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="activity" class="w-5 h-5 text-emerald-400"></i> AI Provider Status</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">ðŸ”™ Back</button>
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
  output.textContent = 'â³ Asking Geminiâ€¦';
  try {
    const result = await aiClient.prompt(input);
    output.textContent = `âœ“ [${result.provider} Â· ${result.model}]\n\n${result.text}`;
  } catch (err) {
    output.textContent = `âŒ ${err.message}`;
  }
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
    else ({ error } = await supabase.from('site_settings').insert({ id: 1, hero_video_slides: arr }));
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
    else ({ error } = await supabase.from('site_settings').insert({ id: 1, ...data }));
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">ðŸ”™ Back</button>
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

