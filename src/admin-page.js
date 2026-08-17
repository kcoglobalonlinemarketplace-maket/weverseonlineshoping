import { SUPABASE_URL, supabase } from './supabase-client.js';
import { COUNTRIES } from './country-data.js';
import { ALL_CURRENCIES } from './localization.js';
import { GLOBAL_PRICE_MAX, GLOBAL_PRICE_MIN, buildCatalogDraft, getDefaultCurrencyForCountry, getTemplatesForCategory } from './global-product-catalog.js';
import { getLocalShowroomListingById, listLocalShowroomListings, patchLocalShowroomListing, upsertLocalShowroomListing } from './local-showroom-store.js';
import { getFlagEmojiFromCountryCode, getManualPaymentAccounts, getPaymentInstructions, loadPaymentSettingsCache, savePaymentSettingsCache } from './payment-settings.js';
import { SHOWROOM_LISTINGS } from './showroom-data.js';
import { PRODUCT_LISTINGS } from './products-data.js';
import { PRODUCT_EXTRA_LISTINGS } from './products-extra.js';
import { TRUCK_LISTINGS } from './truck-data.js';
import { MOTORHOME_LISTINGS } from './motorhome-data.js';
import { generateProduct, getCatalogCategories, getCatalogCategory, getHiddenCatalogIds, loadHiddenCatalogIds, resetHiddenCatalogIds, saveCatalogHidden } from './catalog.js';

// ══════════════════════════════════════════════════════════
//  WEVERSE ADMIN DASHBOARD  —  Complete Management Console
// ══════════════════════════════════════════════════════════

const ADMIN_EMAIL = 'weverseonlineshop@gmail.com';
const AI_AD_LOCAL_FALLBACK_KEY = 'kco_ai_ad_override_fallback_v1';
const DEFAULT_BRAND_NAME = 'Weverse Online Shop';
const DEFAULT_BRAND_SLOGAN = 'GLOBAL SHOPPING • WORLDWIDE DELIVERY';

// Supabase edge function that proxies AI providers server-side so API keys
// never leave the server or appear in browser network calls.
const SUPABASE_BASE_URL = (import.meta.env.VITE_SUPABASE_URL || SUPABASE_URL || 'https://wttnvwpoqmbxryivcerf.supabase.co').replace(/\/$/, '');
const AI_FN_URL = import.meta.env.DEV
  ? '/_supabase/functions/v1/ai-admin-assistant'
  : `${SUPABASE_BASE_URL}/functions/v1/ai-admin-assistant`;

// ── Navigation config ──────────────────────────────────────
const NAV = [
  { group: 'Main', items: [
    { id: 'dashboard',   label: 'Dashboard',         icon: 'layout-dashboard' },
    { id: 'products',    label: 'Products',           icon: 'package' },
    { id: 'general-ai',  label: 'General AI',         icon: 'sparkles' },
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
    { id: 'n8n', label: 'n8n Automation',    icon: 'workflow' },
    { id: 'payment-settings', label: 'Payment Settings',  icon: 'credit-card' },
    { id: 'ai-settings', label: 'AI Settings',        icon: 'bot' },
    { id: 'ai-marketing', label: 'AI Marketing Studio', icon: 'sparkles' },
    { id: 'homepage-branding', label: 'Homepage Branding', icon: 'image' },
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
  n8n: 'n8n Automation',
  ai: 'AI Assistant',
  'ai-marketing': 'AI Marketing Studio',
  'homepage-branding': 'Homepage Branding',
  brand: 'Brand Manager',
  'payment-settings': 'Payment Settings',
  seo: 'SEO Manager', email: 'Email Settings', analytics: 'Analytics',
  security: 'Security', activity: 'Activity Logs', backup: 'Backup & Restore',
  settings: 'Settings', publish: 'Publish & Deploy',
};

const SORTED_CURRENCIES = [...ALL_CURRENCIES].sort();

// ── State ──────────────────────────────────────────────────
let state = { user: null, section: 'dashboard' };

// ── Helpers ────────────────────────────────────────────────
function esc(t) {
  if (t == null) return '';
  const d = document.createElement('div'); d.textContent = String(t); return d.innerHTML;
}
function fmtMoney(n, cur = 'USD') {
  return `${(parseFloat(n) || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${cur}`;
}
function fmtDate(d) { return d ? new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '—'; }
function fmtDT(d) { return d ? new Date(d).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—'; }
function genId() { return 'KCO-' + String(Date.now()).slice(-6) + Math.floor(Math.random() * 1000).toString().padStart(3, '0'); }

// Whitelist of showroom_listings columns known to exist in the live DB.
// Used to sanitize upsert payloads so seed/local objects (which may carry
// extra display-only keys) never cause "column does not exist" errors.
const SHOWROOM_COLUMNS = ['id','property_id','listing_type','category','subcategory','title','description','price','price_period','currency','country','country_code','state','city','town','product_location','latitude','longitude','bedrooms','bathrooms','building_size','land_size','parking_spaces','property_type','furnished','listing_status','images','features','features_text','tags','highlights','seo_keywords','specifications','brand','color','size','condition','warranty','shipping_info','delivery_estimate','weight','dimensions','storage_options','ram_options','color_options','availability_status','stock_quantity','sku','is_active','is_featured','is_ai_generated','ai_generated_fields','rating','rating_count','favorite_count','review_count','video','video_url','approval_status','published_at','created_at','updated_at'];

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
  const [cls, label] = map[String(status)] || ['bg-gray-500/10 text-gray-400 border-gray-500/20', esc(status) || '—'];
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

function loading() { return `<div class="flex items-center justify-center py-24"><div class="flex items-center gap-3 text-gray-500 text-sm"><i data-lucide="loader-2" class="w-5 h-5 animate-spin text-blue-400"></i> Loading…</div></div>`; }
function emptyState(icon, title, sub, btnHtml = '') { return `<div class="flex flex-col items-center justify-center py-20 text-center"><div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4"><i data-lucide="${icon}" class="w-8 h-8 text-blue-400"></i></div><h3 class="text-base font-black text-white mb-1">${esc(title)}</h3><p class="text-sm text-gray-500 max-w-xs">${esc(sub)}</p>${btnHtml ? `<div class="mt-5">${btnHtml}</div>` : ''}</div>`; }

// ── Sidebar ────────────────────────────────────────────────
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

// ── Navigation ─────────────────────────────────────────────
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
    n8n: renderN8n,
    'ai-settings': renderAiSettings,
    'ai-marketing': renderAiMarketingStudio,
    'homepage-branding': renderHomepageBrandingManager,
    content: renderContent, seo: renderSeo, email: renderEmail,
    analytics: renderAnalytics, security: renderSecurity, activity: renderActivity,
    brand: renderBrandManager,
    'payment-settings': renderPaymentSettings,
    backup: renderBackup, settings: renderSettings, publish: renderPublish,
    'general-ai': renderGeneralAI,
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

// ── General AI Assistant ──────────────────────────────────────────────
async function renderGeneralAI() {
  const content = document.getElementById('content');
  if (!content) return;
  try {
    // Load current showroom products for AI context
    const { data: products, error } = await supabase.from('showroom_listings')
      .select('*').neq('listing_type', 'property').order('created_at', { ascending: false });
    const items = (products || []);
    
    // Build product catalog context for AI
    const productContext = items.map(p => ({
      id: p.property_id,
      title: p.title,
      category: p.category,
      listing_type: p.listing_type,
      price: p.price,
      brand: p.brand,
      features: p.features,
      tags: p.tags,
      is_active: p.is_active,
      description: p.description,
      images: p.images
    })).slice(0, 50); // Limit to first 50 for context

    content.innerHTML = `
      <div class="space-y-6 fade-in">
        <div class="glass-soft border border-purple-500/20 rounded-2xl p-4 sm:p-5">
          <div class="flex flex-col gap-3">
            <h2 class="text-xl font-black text-white">General AI Assistant</h2>
            <p class="text-sm text-gray-500">Upload images and give instructions — AI will generate product cards, fix issues, and publish to your showroom automatically.</p>
          </div>
        </div>

        <!-- AI Chat Area -->
        <div class="glass-soft border border-purple-500/15 rounded-2xl p-3 sm:p-4 h-96 overflow-y-auto fade-in">
          <div id="ai-chat-history" class="h-64 overflow-y-auto space-y-2">
            <!-- Chat messages will appear here -->
          </div>
          <div class="p-2 border-t border-purple-500/20">
            <div class="flex gap-2">
              <input type="file" id="ai-image-upload" class="hidden" multiple />
              <button onclick="document.getElementById('ai-image-upload').click()" class="btn-press px-3 py-1.5 text-xs font-bold bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-lg hover:bg-purple-500/15 transition">
                <i data-lucide="upload" class="w-3.5 h-3.5 inline mr-1"></i> Upload Image
              </button>
              <select id="ai-product-type" class="input-field w-48 bg-[#0a1124]/80 border border-purple-500/20 rounded-xl px-2.5 py-1.5 text-sm text-white focus:outline-none focus:border-purple-500">
                <option value="product">Product (general item)</option>
                <option value="property">Property (house/land)</option>
                <option value="vehicle">Vehicle (car/motorcycle)</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion & Apparel</option>
                <option value="home-kitchen">Home & Kitchen</option>
              </select>
              <button onclick="aiGenerateProduct()" class="btn-press px-3 py-1.5 text-xs font-bold bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-lg hover:bg-purple-500/15 transition">
                <i data-lucide="sparkles" class="w-3.5 h-3.5 inline mr-1"></i> Generate
              </button>
              <input type="text" id="ai-prompt" class="input-field flex-1 bg-[#0a1124]/80 border border-purple-500/20 rounded-xl px-3 py-1.5 text-sm text-white focus:outline-none focus:border-purple-500" placeholder="Tell AI what to create..." onkeypress="if(event.key==='Enter')aiGenerateProduct()">
            </div>
          </div>
        </div>

        <!-- Showroom Status Monitor -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div class="glass-soft border border-purple-500/15 rounded-xl p-3">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <i data-lucide="eye" class="w-4 h-4 text-purple-400"></i>
              </div>
              <span class="text-sm font-bold text-purple-400">Showroom Total</span>
            </div>
            <p class="text-xl font-black text-white" id="ai-total-products">Loading...</p>
          </div>
          <div class="glass-soft border border-purple-500/15 rounded-xl p-3">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i>
              </div>
              <span class="text-sm font-bold text-emerald-400">Active</span>
            </div>
            <p class="text-xl font-black text-white" id="ai-active-products">Loading...</p>
          </div>
          <div class="glass-soft border border-purple-500/15 rounded-xl p-3">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-400"></i>
              </div>
              <span class="text-sm font-bold text-amber-400">Issues</span>
            </div>
            <p class="text-xl font-black text-white" id="ai-issue-count">Loading...</p>
          </div>
          <div class="glass-soft border border-purple-500/15 rounded-xl p-3">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <i data-lucide="history" class="w-4 h-4 text-blue-400"></i>
              </div>
              <span class="text-sm font-bold text-blue-400">Recent AI</span>
            </div>
            <p class="text-xs text-gray-400" id="ai-recent-ai">No activity yet</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div class="glass-soft border border-purple-500/15 rounded-2xl p-4">
            <h3 class="text-sm font-bold text-white mb-3 flex items-center gap-2"><i data-lucide="zap" class="w-4 h-4 text-purple-400"></i> Quick Commands</h3>
            <div class="space-y-2">
              <button onclick="aiFixDuplicates()" class="btn-press w-full text-xs font-bold text-purple-400 hover:text-purple-300 rounded-xl py-2.5 transition">
                <i data-lucide="rotate-cw" class="w-3.5 h-3.5 inline mr-1"></i> Fix Duplicate Products
              </button>
              <button onclick="aiCleanupNames()" class="btn-press w-full text-xs font-bold text-purple-400 hover:text-purple-300 rounded-xl py-2.5 transition">
                <i data-lucide="text-field" class="w-3.5 h-3.5 inline mr-1"></i> Fix Naming Issues
              </button>
              <button onclick="aiCheckHealth()" class="btn-press w-full text-xs font-bold text-purple-400 hover:text-purple-300 rounded-xl py-2.5 transition">
                <i data-lucide="heart" class="w-3.5 h-3.5 inline mr-1"></i> Check Product Health
              </button>
            </div>
          </div>
          <div class="glass-soft border border-purple-500/15 rounded-2xl p-4">
            <h3 class="text-sm font-bold text-white mb-3 flex items-center gap-2"><i data-lucide="magic-wand" class="w-4 h-4 text-purple-400"></i> AI Actions</h3>
            <div class="space-y-2">
              <button onclick="aiGenerateRandomProduct()" class="btn-press w-full text-xs font-bold text-purple-400 hover:text-purple-300 rounded-xl py-2.5 transition">
                <i data-lucide="sparkles" class="w-3.5 h-3.5 inline mr-1"></i> Generate Random Product
              </button>
              <button onclick="aiOptimizePricing()" class="btn-press w-full text-xs font-bold text-purple-400 hover:text-purple-300 rounded-xl py-2.5 transition">
                <i data-lucide="trending-up" class="w-3.5 h-3.5 inline mr-1"></i> Optimize Prices
              </button>
              <button onclick="aiRearrangeGallery()" class="btn-press w-full text-xs font-bold text-purple-400 hover:text-purple-300 rounded-xl py-2.5 transition">
                <i data-lucide="image" class="w-3.5 h-3.5 inline mr-1"></i> Rearrange Galleries
              </button>
            </div>
          </div>
          <div class="glass-soft border border-purple-500/15 rounded-2xl p-4">
            <h3 class="text-sm font-bold text-white mb-3 flex items-center gap-2"><i data-lucide="shield-check" class="w-4 h-4 text-purple-400"></i> Auto-Fix Power</h3>
            <p class="text-xs text-gray-500 mb-2">AI has permission to:</p>
            <ul class="text-xs text-gray-400 space-y-1">
              <li><i data-lucide="check-circle" class="w-3 h-3 text-emerald-400 inline mr-1"></i> Delete duplicates & generate new</li>
              <li><i data-lucide="check-circle" class="w-3 h-3 text-emerald-400 inline mr-1"></i> Fix naming & descriptions</li>
              <li><i data-lucide="check-circle" class="w-3 h-3 text-emerald-400 inline mr-1"></i> Reprice items competitively</li>
              <li><i data-lucide="check-circle" class="w-3 h-3 text-emerald-400 inline mr-1"></i> Relocate to proper categories</li>
              <li><i data-lucide="check-circle" class="w-3 h-3 text-emerald-400 inline mr-1"></i> Publish/unpublish as needed</li>
            </ul>
            <button onclick="aiFullCleanup()" class="btn-press w-full text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white py-2.5 rounded-lg mt-2 transition">
              <i data-lucide="trash" class="w-3.5 h-3.5 inline mr-1"></i> Full Showroom Cleanup
            </button>
          </div>
        </div>
      </div>`;

    // Initialize chat history
    window.aiChatHistory = [];
    renderAiChatHistory();
    
    // Load product count
    loadProductCounts();
    
    if (window.lucide) lucide.createIcons();
  } catch (err) {
    if (content) content.innerHTML = `<div class="p-6 text-purple-400 text-sm">Error: ${esc(err.message)}</div>`;
  }
}

function renderAiChatHistory() {
  const el = document.getElementById('ai-chat-history');
  if (!el) return;
  if (!window.aiChatHistory || window.aiChatHistory.length === 0) {
    el.innerHTML = '<p class="text-gray-500 text-sm text-center py-8">Start by uploading an image or typing a command</p>';
    return;
  }
  el.innerHTML = window.aiChatHistory.map((msg, i) => `
    <div class="p-3 rounded-xl ${msg.type === 'ai' ? 'bg-purple-500/10' : 'bg-blue-500/10'} ${msg.type === 'ai' ? 'right-0' : 'left-0'} ${msg.type === 'ai' ? '' : 'mb-3'}">
      <p class="text-sm font-medium ${msg.type === 'ai' ? 'text-purple-300' : 'text-blue-300'}">${esc(msg.sender)}</p>
      <p class="text-[10px] ${msg.type === 'ai' ? 'text-purple-400' : 'text-gray-300'}">${esc(msg.content)}</p>
      <p class="text-[10px] text-gray-500">${new Date().toLocaleTimeString()}</p>
    </div>
  `).join('');
  if (window.lucide) lucide.createIcons();
}

function loadProductCounts() {
  // Quick count update
  const totalEl = document.getElementById('ai-total-products');
  const activeEl = document.getElementById('ai-active-products');
  const issueEl = document.getElementById('ai-issue-count');
  if (totalEl) totalEl.textContent = '...';
  if (activeEl) activeEl.textContent = '...';
  if (issueEl) issueEl.textContent = '...';
}

async function renderN8n() {
  const content = document.getElementById('content');
  if (!content) return;
  content.innerHTML = `
    <div class="space-y-4 fade-in">
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 class="text-xl font-black text-white">n8n Automation</h2>
          <p class="text-xs text-gray-500 mt-1">Configure webhooks, automation center, and AI assistant triggers.</p>
        </div>
        <div class="flex items-center gap-2">
          <a href="/admin-n8n.html" target="_blank" rel="noopener" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition">Open Fullscreen</a>
        </div>
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
        <iframe src="/admin-n8n.html" title="n8n Automation" class="w-full" style="height: calc(100vh - 230px); min-height: 680px; border: 0;"></iframe>
      </div>
    </div>`;
  if (window.lucide) lucide.createIcons();
}

window.openSidebar = () => { document.getElementById('sidebar').classList.add('open'); document.getElementById('sidebar-overlay').classList.remove('hidden'); };
window.closeSidebar = () => { document.getElementById('sidebar').classList.remove('open'); document.getElementById('sidebar-overlay').classList.add('hidden'); };
document.getElementById('close-sidebar')?.addEventListener('click', closeSidebar);

// ══════════════════════════════════════════════════════════
//  AUTH
// ══════════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════════
//  SECURE AUTH SYSTEM
//  • Email + password login
//  • Supabase MFA (TOTP) 2FA with backup codes
//  • Remember me (30-day persistent session)
//  • Forgot / reset password
//  • Change password
//  • Login history stored in admin_security_logs
//  • Logout from all devices
//  • Brute-force lockout (5 failed attempts → 15 min lock)
// ══════════════════════════════════════════════════════════

const REMEMBER_KEY = 'kco_admin_remember';
const LOGIN_ATTEMPTS_KEY = 'kco_login_attempts';
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000; // 15 minutes

// ── Helpers ────────────────────────────────────────────────
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
    btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline-block mr-1"></i> Please wait…';
  } else if (idleHtml) {
    btn.innerHTML = idleHtml;
  }
  if (window.lucide) lucide.createIcons();
}

// ── Brute-force lockout ───────────────────────────────────
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

// ── Login history ─────────────────────────────────────────
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

// ── Admin access check — tries 3 ways, most to least reliable ─
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

// ── Init auth (called on page load) ──────────────────────
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

// ── Login UI setup ────────────────────────────────────────
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

// ── 2FA verification listeners ─────────────────────────────
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

// ── Forgot password listeners ─────────────────────────────
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

// ── Password reset flow (after clicking email link) ───────
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

// ── Show admin dashboard ──────────────────────────────────
function showAdminUI() {
  const ls = document.getElementById('login-screen');
  if (ls) ls.style.display = 'none';
  const emailEl = document.getElementById('admin-user-email');
  if (emailEl && state.user) emailEl.textContent = state.user.email || 'Admin';
  enforceAdminEmailInputs();
  navigate('dashboard');
}

// ── Sign out ──────────────────────────────────────────────
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

// ── Logout from ALL devices ───────────────────────────────
window.logoutAllDevices = async function() {
  if (!confirm('This will sign you out on ALL devices. Continue?')) return;
  if (state.user) await logLoginEvent(state.user.id, 'logout_all_devices');
  await supabase.auth.signOut({ scope: 'global' });
  state.user = null;
  showToast('Signed out from all devices.');
  setTimeout(() => window.location.reload(), 1200);
};

// ══════════════════════════════════════════════════════════
//  1. DASHBOARD
// ══════════════════════════════════════════════════════════
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

// ══════════════════════════════════════════════════════════
//  2. PRODUCTS MANAGER
// ══════════════════════════════════════════════════════════
async function renderProducts() {
  const content = document.getElementById('content');
  try {
    const { data: products, error } = await supabase.from('showroom_listings')
      .select('*').neq('listing_type', 'property').order('created_at', { ascending: false });
    // Show EVERY product from every source — database, the local fallback store,
    // and the static showroom seed — so nothing is ever missing from the manager.
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
    const categories = [...new Set(items.map(p => p.category).filter(Boolean))].sort((a, b) => a.localeCompare(b));
    const tags = [...new Set(items.flatMap(p => Array.isArray(p.tags) ? p.tags : []).filter(Boolean))].sort((a, b) => a.localeCompare(b));

    if (!window._productFilters) {
      window._productFilters = { search: '', category: '', tag: '', status: '', featured: '', sort: 'newest' };
    }
    if (!window._productSelection) window._productSelection = new Set();

    content.innerHTML = `
      <div class="space-y-5 fade-in">
        <!-- General AI — sits on top of the Product Manager -->
        <div class="glass-soft border border-sky-500/25 rounded-2xl overflow-hidden">
          <div class="px-4 py-3 flex items-center justify-between gap-3 border-b border-sky-500/15 bg-gradient-to-r from-sky-600/10 to-indigo-600/10">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-700 flex items-center justify-center shrink-0">
                <i data-lucide="sparkles" class="w-5 h-5 text-white"></i>
              </div>
              <div class="min-w-0">
                <span class="text-sm font-black text-white block truncate">General AI</span>
                <span class="text-[10px] text-sky-300/80 block truncate">Whole Showroom Assistant — scans your showroom and always writes the full brand, model &amp; year so customers feel confident</span>
              </div>
            </div>
            <button onclick="openGeneralAi()" class="btn-press shrink-0 text-[10px] font-bold text-sky-200 bg-sky-500/10 border border-sky-500/25 hover:bg-sky-500/20 px-2.5 py-1.5 rounded-lg transition">
              <i data-lucide="maximize" class="w-3 h-3 inline mr-1"></i> Fullscreen
            </button>
          </div>
          <div id="general-ai-embed-scroll" class="h-64 overflow-y-auto scrollbar-thin px-3 py-3 space-y-4"></div>
          <div class="px-3 pb-3 pt-1">
            <div id="general-ai-embed-thumbs" class="flex flex-wrap gap-2 pb-2"></div>
            <div class="glass border border-sky-500/25 rounded-2xl p-1.5 flex items-end gap-1.5">
              <button onclick="generalAiEmbedAttach()" class="btn-press w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/25 flex items-center justify-center shrink-0" title="Attach photo(s)">
                <i data-lucide="image-plus" class="w-5 h-5 text-sky-300"></i>
              </button>
              <textarea id="general-ai-embed-input" rows="1" class="flex-1 bg-transparent text-base text-white placeholder-gray-500 resize-none outline-none px-2 py-2.5 max-h-36 leading-relaxed scrollbar-thin" placeholder="Just upload a photo — I'll scan it and publish it automatically. Or tell me anything, like: fix my showroom…"></textarea>
              <button id="general-ai-embed-send-btn" onclick="runGeneralAiInstruction()" class="btn-press w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-700 hover:from-sky-400 hover:to-indigo-600 text-white flex items-center justify-center shrink-0 transition" title="Send">
                <i data-lucide="send" class="w-5 h-5"></i>
              </button>
            </div>
            <p class="text-xs text-gray-500 pt-2">Full permission over the whole showroom — it checks how your cards look before it publishes, and it always writes the complete brand, model, year and details of what you upload so customers feel comfortable.</p>
          </div>
          <input id="general-ai-embed-image" type="file" accept="image/*" multiple class="hidden" onchange="generalAiChatImagePicked(this)">
        </div>

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
    generalAiEnsureState();
    renderGeneralAiEmbed();
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
  const pct = parseFloat(product.discount_percent ?? product.discount ?? 0);
  if (Number.isFinite(pct) && pct > 0) return `${Math.round(pct)}% OFF`;
  return 'No discount';
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
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Price</span><p class="text-emerald-300 font-black text-base">$${parseProductPrice(product.price).toLocaleString()}</p></div>
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
      <button onclick="event.stopPropagation();openProductAiAssistant('${product.property_id}','products')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-fuchsia-500/15 text-fuchsia-200 hover:bg-fuchsia-500/25 transition">AI Assistant</button>
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
          <td><span class="text-xs font-bold text-emerald-400">$${parseProductPrice(p.price).toLocaleString()}</span></td>
          <td><span class="text-xs text-gray-300">${p.stock_quantity != null ? esc(p.stock_quantity) : 'Unlimited'}</span></td>
          <td>${badge(status === 'archived' ? 'inactive' : (status === 'active' ? 'active' : 'inactive'))}</td>
          <td><span class="text-xs text-gray-500">${fmtDate(p.created_at)}</span></td>
          <td>
            <div class="flex gap-1">
              <button onclick="editProduct('${p.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
              <button onclick="openProductAiAssistant('${p.property_id}','products')" class="btn-press p-1.5 text-fuchsia-400 hover:bg-fuchsia-500/10 rounded-lg transition" title="AI Assistant"><i data-lucide="sparkles" class="w-3.5 h-3.5"></i></button>
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
    showToast(`⚠️ ${actionLabel} blocked: Your account is signed in but the database admin role is not active. Re-run the admin permission migration, or contact the owner.`, 'error');
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
    showToast(`⚠️ ${ids.length} products NOT ${active ? 'published' : 'unpublished'}: database admin role blocked the write. Re-run the admin permission migration.`, 'error');
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
    showToast('⚠️ Archive blocked: database admin role rejected the write. Re-run the admin permission migration.', 'error');
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
    showToast('⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.', 'error');
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">🔙 Back</button>
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
            <div><label class="lbl">Price</label><input type="number" step="0.01" name="price" class="input-field" value="${esc(data.price || 0)}"></div>
            <div><label class="lbl">Stock</label><input type="number" name="stock_quantity" class="input-field" value="${esc(data.stock_quantity ?? '')}" placeholder="Unlimited"></div>
          </div>
          <div><label class="lbl">Availability</label><select name="availability_status" class="input-field">${['In Stock', 'Out of Stock', 'Pre-order', 'Limited Stock', 'Archived'].map(v => `<option value="${v}" ${data.availability_status === v ? 'selected' : ''}>${v}</option>`).join('')}</select></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Featured</span><input type="checkbox" name="is_featured" ${data.is_featured ? 'checked' : ''} class="accent-blue-500 w-5 h-5"></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Published</span><input type="checkbox" name="is_active" ${data.is_active ? 'checked' : ''} class="accent-blue-500 w-5 h-5"></div>
          <div>
            <label class="lbl">Gallery Images (up to 24)</label>
            <div id="drop-zone" class="drop-zone" onclick="document.getElementById('img-upload').click()">
              <i data-lucide="image-plus" class="w-10 h-10 text-blue-400 mx-auto mb-2"></i>
              <p class="text-base font-bold text-gray-300">Tap to add photos (up to 24)</p>
              <p class="text-sm text-gray-500 mt-1">PNG, JPG, WEBP. First image is the cover.</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*" onchange="handleImageUpload(event)">
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
  const imgs = [...document.querySelectorAll('#image-preview .img-thumb img')].map(i => i.getAttribute('src')).filter(s => s && !String(s).startsWith('blob:'));
  const patch = {
    title: fd.get('title') || 'Untitled Product',
    price: Math.max(GLOBAL_PRICE_MIN, Math.min(GLOBAL_PRICE_MAX, parseFloat(fd.get('price')) || 0)),
    stock_quantity: fd.get('stock_quantity') === '' ? null : parseInt(fd.get('stock_quantity'), 10),
    availability_status: fd.get('availability_status') || 'In Stock',
    is_featured: fd.get('is_featured') === 'on',
    is_active: fd.get('is_active') === 'on' || imgs.length >= 24,
    images: imgs,
  };
  const full = sanitizeShowroomPayload((window._productsData || []).find(item => item.property_id === pid));
  const { error } = await supabase.from('showroom_listings').upsert({ ...full, ...patch, property_id: pid }, { onConflict: 'property_id' });
  if (error) {
    if (isRlsDenied(error)) {
      showToast('⚠️ Save blocked: database admin role rejected the write. Re-run the admin permission migration.', 'error');
      closeModal();
      renderProducts();
      return;
    }
    patchLocalShowroomListing(pid, patch);
    showToast('Quick edit saved locally', 'info');
  } else {
    showToast(patch.is_active ? 'Saved & published — your showroom shows it now' : 'Quick edit saved (draft)');
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
  const { error } = await supabase.from('showroom_listings').delete().eq('property_id', pid);
  if (error) {
    if (isRlsDenied(error)) return showToast('⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.', 'error');
    return showToast('Delete failed: ' + error.message, 'error');
  }
  showToast('Product deleted');
  renderProducts();
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
    if (isRlsDenied(error)) return showToast('⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.', 'error');
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">🔙 Back</button>
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

// ══════════════════════════════════════════════════════════
//  SMART PRODUCT CATEGORY CONFIG
// ══════════════════════════════════════════════════════════
const PRODUCT_CATEGORIES = [
  'Electronics', 'Phones', 'Computers & Laptops', 'Fashion', 'Men\'s Fashion',
  'Women\'s Fashion', 'Shoes', 'Bags & Accessories', 'Jewelry', 'Beauty & Skincare',
  'Home & Kitchen', 'Furniture', 'Garden & Outdoor', 'Toys & Games',
  'Sports & Fitness', 'Food & Groceries', 'Baby & Kids', 'Health & Medical',
  'Books & Education', 'Office & Stationery', 'Pet Supplies', 'Musical Instruments',
  'Cameras & Photography', 'Watches', 'Gaming', 'Software & Digital', 'Services',
  'Cars', 'Luxury Cars', 'Motorcycles', 'Commercial Vehicles', 'Boats & Marine',
  'Social Media Accounts', 'Other',
];

const AUTOMOTIVE_CATEGORIES = ['Cars', 'Luxury Cars', 'Motorcycles', 'Commercial Vehicles', 'Boats & Marine'];

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
    { key: 'platform', label: 'Platform (PS5, Xbox, PC…)', type: 'text' },
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
  { key: 'type', label: 'Type (T-Shirt, Dress…)', type: 'text' },
  { key: 'size', label: 'Size', type: 'text' },
  { key: 'color', label: 'Color', type: 'text' },
  { key: 'material', label: 'Material', type: 'text' },
  { key: 'gender', label: 'Gender', type: 'select', options: ['Men', 'Women', 'Unisex', 'Kids'] },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used'] },
  { key: 'price', label: 'Price (USD)', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
]);

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
  { key: 'safety_features', label: 'Safety Features (comma separated)', type: 'text', placeholder: 'ABS, Airbags, Lane Assist, Traction Control…' },
  { key: 'color', label: 'Color', type: 'text' },
  { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Refurbished', 'Used - Like New', 'Used - Good', 'Used - Fair'], required: true },
  { key: 'price', label: 'Price', type: 'number', required: true },
  { key: 'stock_quantity', label: 'Stock Qty', type: 'number' },
  { key: 'warranty', label: 'Warranty', type: 'text' },
  { key: 'description', label: 'Description', type: 'textarea', span: 2 },
]);

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
    note.textContent = `This listing template requires at least ${count} images.`;
    note.classList.remove('hidden');
  } else {
    note.textContent = '';
    note.classList.add('hidden');
  }
}

function validateImageRequirement(count, images, label) {
  if (count > 0 && images.length < count) {
    throw new Error(`${label} needs at least ${count} images before publishing.`);
  }
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
    setImageRequirement('ppf', 24);
    return;
  }
  setImageRequirement('ppf', draft.requiredImageCount || 24);
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
    // Existing products support partial updates — never force required fields on edit.
    const req = (!isEdit && f.required) ? 'required' : '';
    const ph = f.placeholder || f.label;
    let input = '';
    if (f.type === 'select') {
      input = `<select class="input-field" name="${f.key}" id="pf-${f.key}" ${req}>
        <option value="">Select…</option>
        ${f.options.map(o => `<option value="${o}" ${val === o ? 'selected' : ''}>${o}</option>`).join('')}
      </select>`;
    } else if (f.type === 'textarea') {
      input = `<textarea class="input-field" name="${f.key}" id="pf-${f.key}" rows="3" placeholder="Write a detailed description…">${esc(val)}</textarea>`;
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
          <h3 class="text-base font-black text-white">Select Product Category</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">🔙 Back</button>
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
            <h3 class="text-2xl font-black text-white">${isEdit ? 'Edit Product' : 'Add Product'} — ${esc(category)}</h3>
            <p class="text-sm text-gray-500 mt-1 truncate">${isEdit ? `Editing: ${esc(existingData.property_id)}` : 'Fill in the product details below'}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${isEdit ? `<button type="button" onclick="closeProductFormModal()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Product Manager</button>` : `<button type="button" onclick="showAddProductStep1()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5" title="Change category"><i data-lucide="arrow-left" class="w-4 h-4"></i> Category</button>`}
            <button type="button" onclick="closeProductFormModal()" class="btn-press px-4 h-11 flex items-center justify-center rounded-xl text-sm font-bold uppercase tracking-wide text-gray-400 hover:text-white hover:bg-gray-800 transition" title="Close (X) — return to Product Manager">
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
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${(existingData.images || []).map((url, i) => imageThumbHtml(url, i)).join('')}
            </div>
            <p class="text-sm text-gray-500 mt-1">Drag to reorder • Click X to remove • First image is cover • Upload up to 24 gallery images</p>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
            <div id="image-url-inputs">
              ${(existingData.images || []).map((url, i) => `<input type="hidden" name="images" id="img-url-${i}" value="${esc(url)}">`).join('')}
            </div>
          </div>

          <!-- AI Auto-Listing: analyze images + expand gallery -->
          <div class="glass-soft border border-fuchsia-500/20 rounded-2xl p-5">
            <div class="flex items-start justify-between gap-3 mb-3">
              <div>
                <p class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-5 h-5 text-fuchsia-400"></i> AI Auto-Listing</p>
                <p class="text-sm text-gray-500 mt-1">AI looks at your photos, identifies the product, writes the title / description / specifications, detects the category, and can expand the gallery to 24 realistic images.</p>
              </div>
              <span id="pf-ai-badge" class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/25 hidden shrink-0"><i data-lucide="loader-2" class="w-3 h-3 animate-spin"></i> Working…</span>
            </div>
            <div class="flex flex-wrap items-center gap-2.5">
              <button type="button" onclick="runProductImageAnalysis()" class="btn-press px-5 py-3.5 bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-sm font-bold rounded-xl transition flex items-center gap-2">
                <i data-lucide="scan-face" class="w-4 h-4"></i> AI Analyze & Auto-Fill
              </button>
              <select id="pf-ai-expand-count" class="input-field !w-28 !py-3 text-sm" title="How many AI images to generate">
                <option value="12">12 images</option>
                <option value="18">18 images</option>
                <option value="24" selected>24 images</option>
              </select>
              <button type="button" onclick="expandProductGalleryAi()" class="btn-press px-5 py-3.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold rounded-xl transition flex items-center gap-2">
                <i data-lucide="wand-2" class="w-4 h-4"></i> AI Expand Images
              </button>
            </div>
            <p id="pf-ai-status" class="text-sm text-gray-500 mt-3"></p>
            <div id="pf-ai-detected" class="hidden mt-3"></div>
            <div id="pf-ai-generated" class="flex flex-wrap gap-2 mt-3"></div>
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
  applyCatalogDraftToProductForm(category, 'pricing');
  document.getElementById('pf-price')?.addEventListener('input', () => applyCatalogDraftToProductForm(category, 'pricing'));
  setupProductFormExperience(category, existingData.property_id || '');
  // Escape key always closes the product form and returns to the Product Manager
  window._pfEscapeHandler = (ev) => { if (ev.key === 'Escape') closeProductFormModal(); };
  document.addEventListener('keydown', window._pfEscapeHandler);
};

window.closeProductFormModal = function() {
  if (window._pfEscapeHandler) { document.removeEventListener('keydown', window._pfEscapeHandler); window._pfEscapeHandler = null; }
  clearTimeout(window._pfAiTimer);
  closeModal();
  renderProducts();
};

// ══════════════════════════════════════════════════════════
//  AI AUTO-LISTING: analyze uploaded images, auto-fill the
//  product form, detect the category, and expand the gallery.
// ══════════════════════════════════════════════════════════
const AI_CAR_ANGLES = [
  'Front view', 'Rear view', 'Left side', 'Right side', 'Interior', 'Dashboard',
  'Steering wheel', 'Engine', 'Wheels and tires', 'Seats', 'Trunk', 'Headlights',
  'Taillights', 'Roof', 'Door panels', 'Mirrors', 'Suspension', 'Exhaust',
  'Gear selector', 'Infotainment screen', 'Brake system', 'Close-up details',
  'Lifestyle shot', 'Three-quarter front angle',
];
const AI_HOUSE_ANGLES = [
  'Front elevation', 'Back view', 'Living room', 'Kitchen', 'Dining room', 'Bedroom',
  'Bathroom', 'Balcony', 'Garage', 'Garden', 'Swimming pool', 'Floor plan',
  'Map location', 'Street view', 'Neighborhood', 'Interior detail', 'Exterior detail',
  'Backyard', 'Staircase', 'Hallway', 'Home office', 'Playroom', 'Utility room', 'Landscaping',
];
const AI_CLOTHING_ANGLES = [
  'Front view', 'Back view', 'Left side', 'Right side', 'Fabric close-up', 'Collar detail',
  'Sleeves', 'Buttons', 'Zipper', 'Pocket detail', 'Brand label', 'Model wearing it',
  'Folded view', 'Hanging view', 'Color variation', 'Size detail', 'Matching accessories',
  'Stitching detail', 'Hem detail', 'Care label', 'Style 1', 'Style 2', 'Packaging', 'On model back',
];
const AI_PHONE_ANGLES = [
  'Front view', 'Back view', 'Left side', 'Right side', 'Camera module close-up',
  'Display close-up', 'Ports', 'Buttons', 'Box contents', 'Charging cable',
  'Screen close-up', 'Sim tray', 'Speaker grille', 'Bottom view', 'Top view',
  'Angled front', 'Angled back', 'With protective case', 'Retail box', 'Accessories',
  'Held in hand', 'Lifestyle shot', 'Spec sheet', 'Package contents',
];
const AI_GENERAL_ANGLES = [
  'Front view', 'Back view', 'Left side', 'Right side', 'Top view', 'Bottom view',
  'Close-up detail 1', 'Close-up detail 2', 'Material texture', 'Packaging', 'In use',
  'Lifestyle shot', 'Scale reference', 'Color detail', 'Brand label', 'Model angle 1',
  'Model angle 2', 'Accessories', 'Box contents', 'Back detail', 'Angled view 1',
  'Angled view 2', 'Detail stitching', 'Complete product',
];

function galleryAnglesForCategory(category) {
  const cat = String(category || '').toLowerCase();
  if (/(car|vehicle|boat|marine|motorcycle)/.test(cat)) return AI_CAR_ANGLES;
  if (/(house|home|property|apartment|condo|villa|mansion|estate|land|real estate)/.test(cat)) return AI_HOUSE_ANGLES;
  if (/(cloth|fashion|wear|shoe|bag|accessor)/.test(cat)) return AI_CLOTHING_ANGLES;
  if (/(phone|electronic|computer|laptop|tablet|camera|watch)/.test(cat)) return AI_PHONE_ANGLES;
  return AI_GENERAL_ANGLES;
}

function setProductAiStatus(msg, type = 'info') {
  const el = document.getElementById('pf-ai-status');
  if (!el) return;
  el.textContent = msg || '';
  el.className = 'text-[10px] mt-2 ' + (type === 'error' ? 'text-red-400' : type === 'ok' ? 'text-emerald-300' : type === 'warn' ? 'text-amber-300' : 'text-gray-500');
}

function setProductAiBusy(busy, msg) {
  const badge = document.getElementById('pf-ai-badge');
  if (badge) badge.classList.toggle('hidden', !busy);
  if (msg) setProductAiStatus(msg);
}

function scheduleAutoProductAnalysis() {
  clearTimeout(window._pfAiTimer);
  window._pfAiTimer = setTimeout(() => {
    const form = document.getElementById('product-form');
    if (!form || form.dataset.aiBusy === '1') return;
    const hasImages = [...form.querySelectorAll('input[name="images"]')].some(i => i.value && !String(i.value).startsWith('blob:'));
    if (hasImages) {
      setProductAiStatus('AI detected new images — analyzing automatically…');
      runProductImageAnalysis(true);
    }
  }, 900);
}

window.runProductImageAnalysis = async function(auto = false) {
  const form = document.getElementById('product-form');
  if (!form) return;
  if (form.dataset.aiBusy === '1') return;
  const category = form.dataset.category || '';
  const images = [...form.querySelectorAll('input[name="images"]')].map(i => i.value).filter(u => u && !String(u).startsWith('blob:'));
  if (!images.length) {
    if (!auto) setProductAiStatus('Upload at least one image first, then AI can analyze it.', 'warn');
    return;
  }
  form.dataset.aiBusy = '1';
  setProductAiBusy(true, 'AI is analyzing your images…');
  try {
    const result = await aiClient.analyzeImages(images, { category, existingTitle: form.querySelector('[name="title"]')?.value || '' });
    if (!result) {
      setProductAiStatus('AI analysis unavailable — add a Gemini, Groq, or OpenRouter API key in AI Settings (or install Ollama locally).', 'warn');
      return;
    }
    applyAiAnalysisToForm(result, category);
    setProductAiStatus('AI analysis complete. The fields were auto-filled — review them and save.', 'ok');
    if (!auto) showToast('AI analyzed your images and filled the listing.', 'success');
  } catch (err) {
    setProductAiStatus('AI analysis failed: ' + (err.message || err), 'error');
    if (!auto) showToast('AI analysis failed: ' + (err.message || err), 'error');
  } finally {
    form.dataset.aiBusy = '0';
    setProductAiBusy(false);
  }
};

function applyAiAnalysisToForm(result, category) {
  const form = document.getElementById('product-form');
  if (!form || !result) return;
  const setIfEmpty = (name, value) => {
    if (value == null || String(value).trim() === '') return;
    const field = form.querySelector(`[name="${name}"]`);
    if (!field) return;
    if (!String(field.value || '').trim()) field.value = value;
  };
  const setArrayIfEmpty = (name, arr) => {
    if (!Array.isArray(arr) || !arr.length) return;
    const field = form.querySelector(`[name="${name}"]`);
    if (!field) return;
    if (!String(field.value || '').trim()) field.value = arr.join(', ');
  };
  setIfEmpty('title', result.title);
  setIfEmpty('description', result.description);
  setIfEmpty('subcategory', result.subcategory);
  setIfEmpty('brand', result.brand);
  setIfEmpty('model', result.model);
  setIfEmpty('color', result.color);
  setIfEmpty('size', result.size);
  setIfEmpty('material', result.material);
  setIfEmpty('storage', result.storage);
  setIfEmpty('ram', result.ram);
  setIfEmpty('processor', result.processor);
  if (!String(form.querySelector('[name="condition"]')?.value || '').trim()) setIfEmpty('condition', result.condition);
  setArrayIfEmpty('features_text', result.features);
  setArrayIfEmpty('highlights_text', result.highlights);
  setArrayIfEmpty('seo_keywords_text', result.seo_keywords);

  const spec = result.specifications || {};
  ['engine', 'transmission', 'fuel_type', 'horsepower', 'mileage', 'drive_type', 'body_type', 'model_year'].forEach(k => {
    if (spec[k] != null && String(spec[k]).trim() !== '') setIfEmpty(k, spec[k]);
  });
  if (Array.isArray(spec.safety_features)) setArrayIfEmpty('safety_features', spec.safety_features);

  const detected = result.category ? String(result.category).trim() : '';
  const detectedBox = document.getElementById('pf-ai-detected');
  if (detectedBox && detected && detected.toLowerCase() !== String(category || '').toLowerCase()) {
    detectedBox.classList.remove('hidden');
    detectedBox.innerHTML = `<div class="flex items-center gap-2 p-2 rounded-lg bg-amber-500/10 border border-amber-500/25">
      <span class="text-[11px] text-amber-200">AI detected category: <b>${esc(detected)}</b></span>
      <button type="button" onclick="switchProductFormCategory('${esc(detected).replace(/'/g, "\\'")}')" class="btn-press px-2 py-1 rounded-lg text-[10px] font-bold bg-amber-500 text-[#111827] hover:bg-amber-400 transition">Switch category</button>
      <button type="button" onclick="document.getElementById('pf-ai-detected').classList.add('hidden')" class="text-amber-300 hover:text-white text-[10px] font-bold uppercase tracking-wide">🔙 Back</button>
    </div>`;
  }
  if (window.lucide) lucide.createIcons();
  updateProductReviewPanel();
}

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

window.expandProductGalleryAi = async function() {
  const form = document.getElementById('product-form');
  if (!form) return;
  if (form.dataset.aiBusy === '1') return;
  const category = form.dataset.category || '';
  const countSel = document.getElementById('pf-ai-expand-count');
  const target = Math.min(24, Math.max(1, parseInt(countSel?.value || '24', 10) || 24));
  const current = [...form.querySelectorAll('input[name="images"]')].map(i => i.value).filter(u => u && !String(u).startsWith('blob:'));
  const reference = current[0] || document.querySelector('#image-preview img')?.src;
  if (!reference || reference === '/fallback.svg') {
    setProductAiStatus('Upload at least one product image first, then AI can generate the full gallery.', 'warn');
    return;
  }
  const angles = galleryAnglesForCategory(category);
  const toGenerate = Math.min(target, angles.length);
  form.dataset.aiBusy = '1';
  const generatedBox = document.getElementById('pf-ai-generated');
  if (generatedBox) generatedBox.innerHTML = '';
  let ok = 0;
  try {
    for (let i = 0; i < toGenerate; i++) {
      setProductAiBusy(true, `Generating ${i + 1}/${toGenerate} — ${angles[i]}…`);
      try {
        const imgs = await aiClient.generateImages(
          `Generate a single high-quality, photorealistic marketplace photo of this EXACT product from this angle/perspective: ${angles[i]}. Keep the product identical in design, color, and branding. Clean background, sharp focus, professional e-commerce product photography.`,
          reference, 1
        );
        if (imgs && imgs[0]) {
          const url = await uploadDataUrlImage(imgs[0]);
          if (url) { appendGeneratedThumb(url); ok += 1; }
        }
      } catch (err) {
        setProductAiStatus(`Stopped at ${i}/${toGenerate}: ${err.message || err}`, 'error');
        break;
      }
    }
    if (ok) {
      setProductAiStatus(`Generated ${ok} image${ok > 1 ? 's' : ''}. They are added to your gallery — save the product to keep them.`, 'ok');
      showToast(`${ok} AI image(s) generated and added.`, 'success');
    } else {
      setProductAiStatus('No images could be generated. Check the Gemini API key / image-model access.', 'error');
    }
  } finally {
    form.dataset.aiBusy = '0';
    setProductAiBusy(false);
  }
};

function appendGeneratedThumb(url) {
  const preview = document.getElementById('image-preview');
  if (!preview) return;
  const i = preview.children.length;
  const div = document.createElement('div');
  div.innerHTML = imageThumbHtml(url, i);
  preview.appendChild(div.firstElementChild);
  rebuildImageInputs();
  updateCoverBadge();
  updateGalleryCounter();
  const box = document.getElementById('pf-ai-generated');
  if (box) {
    const t = document.createElement('div');
    t.className = 'w-14 h-14 rounded-lg overflow-hidden border border-fuchsia-500/30 relative';
    t.innerHTML = `<img src="${esc(url)}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'"><span class="absolute bottom-0 inset-x-0 text-center text-[7px] font-black bg-fuchsia-600/80 text-white">AI</span>`;
    box.appendChild(t);
  }
}

async function uploadDataUrlImage(dataUrl) {
  try {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    const ext = (blob.type.split('/')[1] || 'png').replace('jpeg', 'jpg');
    const name = `ai-${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    return await uploadImageFile(new File([blob], name, { type: blob.type }));
  } catch { return dataUrl; }
}

function imageThumbHtml(url, i) {
  return `<div class="img-thumb ${i === 0 ? 'cover-img' : ''}" data-index="${i}" title="${i === 0 ? 'Cover Image' : 'Image ' + (i + 1)}">
    <img src="${esc(url)}" onerror="this.src='/fallback.svg'">
    <button class="rp" onclick="document.getElementById('rp-input-${i}').click()" type="button" title="Replace image">↻</button>
    <input type="file" accept="image/*" class="rp-input" id="rp-input-${i}" onchange="replaceImage(${i}, this)">
    <button class="rm" onclick="removeImage(${i})" type="button">🔙</button>
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
    if (!file.type.startsWith('image/')) continue;
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
  scheduleAutoProductAnalysis();
}

async function uploadImageFile(file) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return URL.createObjectURL(file); // fallback: local preview
    const ext = file.name.split('.').pop();
    const path = `products/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error: upErr } = await supabase.storage.from('product-images').upload(path, file, { contentType: file.type, upsert: false });
    if (upErr) return URL.createObjectURL(file);
    const { data } = supabase.storage.from('product-images').getPublicUrl(path);
    return data.publicUrl;
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
  if (!file.type.startsWith('image/')) { showToast('Please choose an image file.', 'error'); return; }
  const url = await uploadImageFile(file);
  if (!url) return;
  const items = [...preview.querySelectorAll('.img-thumb')];
  const thumb = items[index];
  if (!thumb) return;
  const img = thumb.querySelector('img');
  if (img) img.src = url;
  rebuildImageInputs();
  updateCoverBadge();
  updateGalleryCounter();
  showToast('Image replaced. Save changes to apply.', 'info');
};

function rebuildImageInputs() {
  const preview = document.getElementById('image-preview');
  const container = document.getElementById('image-url-inputs');
  if (!preview || !container) return;
  container.innerHTML = '';
  [...preview.querySelectorAll('.img-thumb')].forEach((thumb, i) => {
    const img = thumb.querySelector('img');
    if (!img) return;
    const inp = document.createElement('input');
    inp.type = 'hidden'; inp.name = 'images'; inp.id = `img-url-${i}`; inp.value = img.src;
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

// Show how many of the 24 gallery slots are filled. Once 24 images are
// uploaded the product is marked to publish automatically on save.
function updateGalleryCounter() {
  const preview = document.getElementById('image-preview');
  const counter = document.getElementById('gallery-counter');
  if (!preview || !counter) return;
  const count = preview.querySelectorAll('.img-thumb').length;
  const full = count >= 24;
  counter.textContent = full
    ? '✓ ' + count + ' / 24 images — this product will auto-publish on save'
    : count + ' / 24 images' + (count >= 12 ? ' — almost there, keep going for a full gallery' : '');
  counter.className = 'text-sm mt-1 font-bold ' + (full ? 'text-emerald-300' : 'text-gray-400');
  const active = document.querySelector('#product-form [name="is_active"]');
  if (full && active && !active.checked) active.checked = true;
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
      <div><span class="text-gray-500">Price</span><p class="text-emerald-300 font-semibold">$${price.toLocaleString()}</p></div>
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
  const category = form.dataset.category || 'Product';
  const stock = form.querySelector('[name="stock_quantity"]')?.value || 'Unlimited';
  const isActive = form.querySelector('[name="is_active"]')?.checked;
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Live Draft Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">🔙 Back</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="${esc(image)}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
          <div class="space-y-2">
            <h4 class="text-xl font-black text-white">${esc(title)}</h4>
            <div class="flex items-center gap-2">${badge(isActive ? 'active' : 'inactive')}<span class="badge bg-blue-500/10 text-blue-300 border-blue-500/20">${esc(category)}</span></div>
            <p class="text-sm text-gray-400">${esc(desc)}</p>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">$${price.toLocaleString()}</p></div>
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

window.saveProduct = async function(e, category, existingId) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('[type=submit][name=action][value=publish]');
  const publishLabel = existingId ? 'One-Click Publish Changes' : 'One-Click Publish Product';
  if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
  try {
    const formData = new FormData(form);
    const data = {};
    for (const [k, v] of formData.entries()) {
      if (k === 'images') {
        data.images = data.images || [];
        if (v && !String(v).startsWith('blob:')) data.images.push(String(v));
      } else if (k === 'tags') {
        data.tags = data.tags || [];
        data.tags.push(v);
      } else {
        data[k] = v;
      }
    }
    data.is_featured = form.querySelector('[name="is_featured"]')?.checked ? 'on' : '';
    data.is_active = form.querySelector('[name="is_active"]')?.checked ? 'on' : '';
    const isDraft = formData.get('action') === 'draft';
    const normalizeComma = (raw) => normalizeCommaList(raw);

    const buildSpecifications = (src) => {
      const specKeys = ['model', 'storage', 'ram', 'processor', 'display', 'material', 'gender', 'platform', 'voltage', 'engine', 'transmission', 'fuel_type', 'horsepower', 'mileage', 'drive_type', 'body_type', 'model_year'];
      const spec = {};
      for (const k of specKeys) {
        const v = src[k];
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
      // ── EXISTING PRODUCT → PARTIAL UPDATE ─────────────────────────
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

      ['title', 'description', 'currency', 'subcategory', 'brand', 'color', 'size', 'condition', 'warranty', 'availability_status', 'model_year', 'body_type', 'mileage', 'engine', 'horsepower', 'transmission', 'drive_type', 'fuel_type'].forEach((key) => {
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
      // A complete 24-image gallery auto-publishes the product.
      const act = isDraft ? false : (data.is_active === 'on' || (data.images || []).length >= 24);
      if (!!base.is_active !== act) changes.is_active = act;

      const spec = buildSpecifications(data);
      const specMerged = { ...(base.specifications && typeof base.specifications === 'object' ? base.specifications : {}), ...spec };
      if (JSON.stringify(specMerged) !== JSON.stringify(base.specifications || {})) changes.specifications = specMerged;

      if (Object.keys(changes).length === 0) {
        showToast('No changes detected — nothing was saved.', 'info');
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
          return;
        }
      }
      showToast(isDraft ? 'Draft saved!' : `Saved & published — your showroom shows it now (${Object.keys(changes).length} change${Object.keys(changes).length > 1 ? 's' : ''}).`);
    } else {
      // ── NEW PRODUCT → FULL VALIDATION + FULL SAVE ─────────────────
      const requiredImageCount = parseInt(data.required_image_count || '0', 10) || (AUTOMOTIVE_CATEGORIES.includes(category) ? 24 : 0);
      validateImageRequirement(requiredImageCount, data.images || [], 'This listing');
      if (!data.title || !data.title.trim()) throw new Error('A product title is required.');
      if (data.price === '' || data.price == null || !isFinite(parseFloat(data.price))) throw new Error('A price is required.');
      if (!data.condition) throw new Error('Please choose the product condition.');

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
        is_active: isDraft ? false : (data.is_active === 'on' || (data.images || []).length >= 24),
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
          return;
        }
      }
      showToast(isDraft ? 'Draft saved!' : 'Published! Your showroom shows this product now.');
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
  showAddProductStep2(resolved.category || 'Other', resolved);
};

window.toggleProductActive = async function(pid, active) {
  const full = sanitizeShowroomPayload((window._productsData || []).find(item => item.property_id === pid));
  const { error } = await supabase.from('showroom_listings').upsert({ ...full, property_id: pid, is_active: active, availability_status: active ? 'In Stock' : 'Out of Stock' }, { onConflict: 'property_id' });
  if (error) {
    if (isRlsDenied(error)) return showToast(`⚠️ ${active ? 'Publish' : 'Unpublish'} blocked: database admin role rejected the write. Re-run the admin permission migration.`, 'error');
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

// ══════════════════════════════════════════════════════════
//  3. PROPERTIES MANAGER
// ══════════════════════════════════════════════════════════
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
    window._propertiesData = items;
    content.innerHTML = `
      <div class="space-y-4 fade-in">
        <div class="flex flex-wrap items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Properties Manager</h2>
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
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${esc([p.city, p.state, p.country].filter(Boolean).join(', ') || '—')}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(p.price || 0).toLocaleString()}</span></td>
                    <td>${badge(p.listing_status || 'sale')} ${badge(p.is_active ? 'active' : 'inactive')}</td>
                    <td>
                      <div class="flex gap-1">
                        <button onclick="editProperty('${p.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
                        <button onclick="openProductAiAssistant('${p.property_id}','properties')" class="btn-press p-1.5 text-fuchsia-400 hover:bg-fuchsia-500/10 rounded-lg transition" title="AI Assistant"><i data-lucide="sparkles" class="w-3.5 h-3.5"></i></button>
                        <button onclick="archiveProduct('${p.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
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
            <p id="ppf-image-requirement" class="text-[11px] text-amber-300">This property flow expects 24 images for a complete gallery.</p>
            <input type="hidden" name="required_image_count" id="ppf-required_image_count" value="24">
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
            <div><label class="lbl">Country Name *</label><input class="input-field" id="ppf-country" name="country" value="${esc(existing.country || '')}" required placeholder="United States"></div>
            <div><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${esc(existing.subcategory || '')}" placeholder="e.g. Villas, Mansions, Hotels"></div>
            <div><label class="lbl">State / Province</label><input class="input-field" name="state" value="${esc(existing.state || '')}" placeholder="e.g. California"></div>
            <div><label class="lbl">City</label><input class="input-field" name="city" value="${esc(existing.city || '')}" placeholder="e.g. Los Angeles"></div>
            <div><label class="lbl">Town / Local Area</label><input class="input-field" name="town" value="${esc(existing.town || '')}" placeholder="Neighborhood or district"></div>
            <div><label class="lbl">Latitude</label><input type="number" step="any" class="input-field" name="latitude" value="${esc(existing.latitude || '')}" placeholder="40.7128"></div>
            <div><label class="lbl">Longitude</label><input type="number" step="any" class="input-field" name="longitude" value="${esc(existing.longitude || '')}" placeholder="-74.0060"></div>
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
            <div class="sm:col-span-2"><label class="lbl">Description</label><textarea class="input-field" name="description" rows="3" placeholder="Describe the property…">${esc(existing.description || '')}</textarea></div>
            <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${esc((existing.features || []).join(', '))}" placeholder="Swimming Pool, Garden, Garage…"></div>
            <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${esc((existing.highlights || []).join(', '))}" placeholder="Prime location, map-ready post, 24-image gallery"></div>
            <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${esc((existing.seo_keywords || []).join(', '))}" placeholder="mansion, villa, property investment"></div>
            <div class="sm:col-span-2"><label class="lbl">Property Location</label><input class="input-field" name="product_location" value="${esc(existing.product_location || '')}" placeholder="Estate, district, city, landmark"></div>
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
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2 mt-3">
              ${(existing.images || []).map((u, i) => imageThumbHtml(u, i)).join('')}
            </div>
            <div id="image-url-inputs">
              ${(existing.images || []).map((u, i) => `<input type="hidden" name="images" id="img-url-${i}" value="${esc(u)}">`).join('')}
            </div>
          </div>

          <div class="flex gap-3 pt-2">
            <button type="submit" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition">${isEdit ? '💾 Save Changes' : '🚀 Publish Property'}</button>
          </div>
        </form>
      </div>
    </div>`);
  setupDropZone(); setupImageSortable();
  configurePriceField('ppf-price');
  window.syncPropertyCountry = function() { syncCountryAndCurrency('ppf'); };
  syncCountryAndCurrency('ppf');
  applyCatalogDraftToPropertyForm('pricing');
  document.getElementById('ppf-price')?.addEventListener('input', () => applyCatalogDraftToPropertyForm('pricing'));
};

window.saveProperty = async function(e, existingId) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  const images = fd.getAll('images').filter(u => u && !u.startsWith('blob:'));
  const features = (data.features_text || '').split(',').map(s => s.trim()).filter(Boolean);
  const requiredImageCount = existingId ? 0 : (parseInt(data.required_image_count || '24', 10) || 24);
  validateImageRequirement(requiredImageCount, images, 'This property');
  const payload = {
    listing_type: 'property',
    category: data.property_type || 'Real Estate',
    subcategory: data.subcategory || null,
    title: data.title, description: data.description || '',
    price: Math.max(GLOBAL_PRICE_MIN, Math.min(GLOBAL_PRICE_MAX, parseFloat(data.price) || 0)), currency: data.currency || 'USD',
    country: data.country || '', country_code: (data.country_code || '').toUpperCase(),
    state: data.state || '', city: data.city || '', town: data.town || '',
    product_location: data.product_location || '',
    latitude: data.latitude ? parseFloat(data.latitude) : null,
    longitude: data.longitude ? parseFloat(data.longitude) : null,
    property_type: data.property_type || '', listing_status: data.listing_status || 'sale',
    bedrooms: data.bedrooms ? parseInt(data.bedrooms) : null,
    bathrooms: data.bathrooms ? parseInt(data.bathrooms) : null,
    building_size: data.building_size || '', land_size: data.land_size || '',
    parking_spaces: data.parking_spaces ? parseInt(data.parking_spaces) : null,
    furnished: data.furnished || '', features, images,
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
    ({ error: err } = await supabase.from('showroom_listings').upsert({ ...current, ...payload }, { onConflict: 'property_id' }));
  } else {
    payload.property_id = genId();
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

// ══════════════════════════════════════════════════════════
//  4. ORDERS MANAGER
// ══════════════════════════════════════════════════════════
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
            <input type="search" class="input-field pl-9" placeholder="Search order, email, name…" oninput="searchOrders(this.value)">
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
    <td><p class="text-xs text-gray-300 truncate max-w-[140px]">${esc(o.listing_title || o.listing_id || '—')}</p></td>
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
        </div>
        <div class="space-y-3 text-sm">
          <div class="grid grid-cols-2 gap-3">
            ${[['Customer', o.full_name], ['Email', o.email], ['Phone', o.phone], ['Amount', fmtMoney(o.amount, o.currency)], ['Product', o.listing_title || o.listing_id], ['Date', fmtDT(o.created_at)]].map(([l, v]) => `<div><p class="text-[10px] text-gray-500 uppercase font-bold mb-0.5">${l}</p><p class="text-xs text-white font-medium">${esc(v) || '—'}</p></div>`).join('')}
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

// ══════════════════════════════════════════════════════════
//  5. CUSTOMERS MANAGER
// ══════════════════════════════════════════════════════════
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
          <input type="search" class="input-field pl-9" placeholder="Search customers…" oninput="searchCustomers(this.value)">
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
                          <p class="text-[10px] font-mono text-gray-500">${esc(c.user_id?.slice(0, 12))}…</p>
                        </div>
                      </div>
                    </td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-300">${esc(c.country_code || '—')}</span></td>
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
        </div>
        <div class="flex items-center gap-4 mb-5 p-4 glass-soft border border-blue-500/15 rounded-xl">
          <div class="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
            <i data-lucide="user" class="w-6 h-6 text-blue-400"></i>
          </div>
          <div>
            <p class="font-black text-white">${esc(c.display_name || 'Anonymous')}</p>
            <p class="text-xs text-gray-400 mt-0.5">Joined ${fmtDate(c.created_at)} · ${esc(c.country_code || 'Unknown country')}</p>
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

// ══════════════════════════════════════════════════════════
//  6. REVIEWS MANAGER
// ══════════════════════════════════════════════════════════
async function renderReviews() {
  const content = document.getElementById('content');
  try {
    const { data: reviews } = await supabase.from('product_reviews').select('*, showroom_listings(title, property_id)').order('created_at', { ascending: false }).limit(200);
    const items = reviews || [];
    const pending = items.filter(r => !r.is_approved).length;
    content.innerHTML = `
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Reviews Manager</h2>
          ${pending > 0 ? `<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">${pending} pending</span>` : ''}
        </div>
        <div class="flex gap-2">
          <button onclick="filterReviewTab('all')" class="tab-btn active" id="rtab-all">All Reviews</button>
          <button onclick="filterReviewTab('pending')" class="tab-btn" id="rtab-pending">Pending (${pending})</button>
          <button onclick="filterReviewTab('approved')" class="tab-btn" id="rtab-approved">Approved</button>
        </div>
        <div class="space-y-3" id="reviews-list">
          ${items.length === 0 ? emptyState('star', 'No Reviews', 'Customer reviews will appear here.') :
            items.map(r => reviewCard(r)).join('')}
        </div>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

function reviewCard(r) {
  const stars = Array.from({length: 5}, (_, i) => i < r.rating ? '★' : '☆').join('');
  return `<div class="review-card glass-soft border ${r.is_approved ? 'border-blue-500/15' : 'border-amber-500/20'} rounded-xl p-4" data-approved="${r.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-amber-400 font-bold text-sm">${stars}</span>
          <span class="text-xs text-gray-500">${fmtDate(r.created_at)}</span>
          ${!r.is_approved ? `<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending Approval</span>` : `<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>`}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${esc(r.review_text || '—')}</p>
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

// ══════════════════════════════════════════════════════════
//  7. MESSAGES
// ══════════════════════════════════════════════════════════
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
                    <p class="text-[11px] text-blue-400 mb-1">${esc(m.email || '—')}</p>
                    <p class="text-xs text-gray-300">${esc(m.message || m.body || '—')}</p>
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

// ══════════════════════════════════════════════════════════
//  8. COUPONS
// ══════════════════════════════════════════════════════════
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
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${c.min_amount ? '$' + c.min_amount : '—'}</span></td>
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
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

// ══════════════════════════════════════════════════════════
//  9. NOTIFICATIONS
// ══════════════════════════════════════════════════════════
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

// ══════════════════════════════════════════════════════════
//  10. ADVERTISEMENTS  (homepage showcase ad manager)
// ══════════════════════════════════════════════════════════
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
  if (p.link_type === 'product') return `<span class="text-[10px] text-blue-300"><i data-lucide="package" class="w-3 h-3 inline mr-1"></i>Product · ${esc(p.link_target || '')}</span>`;
  if (p.link_type === 'category') return `<span class="text-[10px] text-emerald-300"><i data-lucide="tag" class="w-3 h-3 inline mr-1"></i>Category · ${esc(p.link_target || '')}</span>`;
  return `<span class="text-[10px] text-amber-300"><i data-lucide="layout-grid" class="w-3 h-3 inline mr-1"></i>Section · ${esc(p.link_target || '')}</span>`;
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
    opts = '<option value="">Select a product…</option>' + cache.products.map(p => `<option value="${esc(p.id)}" ${String(selected) === String(p.id) ? 'selected' : ''}>${esc(p.id)} — ${esc((p.title || '').slice(0, 60))}</option>`).join('');
  } else if (type === 'category') {
    opts = '<option value="">Select a category…</option>' + cache.categories.map(c => `<option value="${esc(c)}" ${selected === c ? 'selected' : ''}>${esc(c)}</option>`).join('');
  } else if (type === 'section') {
    opts = '<option value="">Select a section…</option>' + cache.sections.map(s => `<option value="${esc(s.id)}" ${selected === s.id ? 'selected' : ''}>${esc(s.name)}</option>`).join('');
  }
  wrap.innerHTML = `<label class="lbl">Target</label><select class="input-field" name="link_target">${opts}</select>`;
}

function adFormHtml(ad) {
  return `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${ad ? 'Edit Advertisement' : 'Add Advertisement'}</h3>
          <button onclick="closeModal()" class="btn-press text-xs font-bold text-gray-400 hover:text-white transition">✕ Close</button>
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
          <div><label class="lbl">Message</label><textarea class="input-field" name="description" rows="2" placeholder="Short message shown on the ad…">${esc(ad && ad.description ? ad.description : '')}</textarea></div>

          <div class="glass-soft border border-blue-500/15 rounded-xl p-4 space-y-3">
            <label class="lbl">Image / Video</label>
            <div id="ad-media-preview" class="w-full h-40 rounded-xl bg-black/40 flex items-center justify-center text-gray-600 text-xs border border-dashed border-gray-700"></div>
            <div class="flex items-center gap-2 flex-wrap">
              <label class="btn-press cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
                <i data-lucide="upload" class="w-4 h-4"></i> Upload File
                <input type="file" accept="image/*,video/mp4,video/webm,video/quicktime" class="hidden" onchange="onAdMediaPicked(this)">
              </label>
              <input id="ad-media-url" class="input-field flex-1 min-w-[160px]" placeholder="…or paste media URL" oninput="onAdMediaUrl(this)">
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
            <p class="text-xs text-gray-500 mt-0.5">Create professional showcase ads that appear on the homepage — with labels, media and product links.</p>
          </div>
          <button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement
          </button>
        </div>
        <div class="grid gap-3">
          ${items.length === 0 ? emptyState('megaphone', 'No Ads', 'Create your first showcase ad — add a title, image or video, label, and optional product link.', `<button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"><i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement</button>`) :
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
                    <span class="text-[10px] text-gray-500">${fmtDate(p.start_date)}${p.start_date ? ' → ' : ''}${fmtDate(p.end_date)}</span>
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

// ══════════════════════════════════════════════════════════
//  11. AI SETTINGS  — 20 FREE coding AI providers
// ══════════════════════════════════════════════════════════

const ALL_AI_PROVIDERS = [
  // ── BATCH 1 (original 10) ──────────────────────────────
  { id:'gemini',      name:'Google Gemini',         tag:'FREE',  color:'blue',    icon:'sparkles',   kf:'gemini_key',      ph:'AIzaSy…',      signup:'https://aistudio.google.com/apikey',                        models:['gemini-3-flash-preview','gemini-3.1-flash-lite-preview'],                                                                mf:'gemini_model',      dm:'gemini-3-flash-preview',              desc:'Google\'s best free AI. Great for coding, writing apps & websites.',                                free_tier:'15 req/min · 1M tokens/day — Free forever' },
  { id:'groq',        name:'Groq (Llama 3.3)',       tag:'FREE',  color:'blue',  icon:'zap',        kf:'groq_key',        ph:'gsk_…',        signup:'https://console.groq.com/keys',                             models:['llama-3.3-70b-versatile','llama-3.1-8b-instant','mixtral-8x7b-32768','gemma2-9b-it'],                                          mf:'groq_model',        dm:'llama-3.3-70b-versatile',           desc:'Fastest free AI inference. Runs Llama 3.3 & Mixtral. Excellent for coding.',                       free_tier:'30 req/min · 6,000 req/day free' },
  { id:'deepseek',    name:'DeepSeek Coder',         tag:'FREE',  color:'cyan',    icon:'search',     kf:'deepseek_key',    ph:'sk-…',         signup:'https://platform.deepseek.com/api_keys',                    models:['deepseek-coder','deepseek-chat','deepseek-reasoner'],                                                                         mf:'deepseek_model',    dm:'deepseek-coder',                    desc:'Top-ranked coding AI. DeepSeek Coder beats GPT-4 on code benchmarks.',                             free_tier:'$5 free credit on signup' },
  { id:'mistral',     name:'Mistral / Codestral',    tag:'FREE',  color:'violet',  icon:'wind',       kf:'mistral_key',     ph:'…key',         signup:'https://console.mistral.ai/api-keys',                       models:['codestral-latest','mistral-small-latest','open-mistral-7b','open-mixtral-8x7b'],                                               mf:'mistral_model',     dm:'codestral-latest',                  desc:'Codestral is purpose-built for code. Free for open-source projects.',                              free_tier:'Free tier · Codestral free for open-source' },
  { id:'cohere',      name:'Cohere',                 tag:'FREE',  color:'emerald', icon:'cpu',        kf:'cohere_key',      ph:'…key',         signup:'https://dashboard.cohere.com/api-keys',                     models:['command-r-plus','command-r','command-light'],                                                                                mf:'cohere_model',      dm:'command-r',                         desc:'Free trial API. Great for chat, code, and text generation.',                                       free_tier:'Free trial · No credit card needed' },
  { id:'huggingface', name:'Hugging Face',           tag:'FREE',  color:'amber',   icon:'box',        kf:'hf_key',          ph:'hf_…',         signup:'https://huggingface.co/settings/tokens',                    models:['Qwen/Qwen2.5-Coder-32B-Instruct','meta-llama/Meta-Llama-3-8B-Instruct','mistralai/Mistral-7B-Instruct-v0.3'],               mf:'hf_model',          dm:'Qwen/Qwen2.5-Coder-32B-Instruct',   desc:'500k+ open-source models free. Qwen 2.5 Coder is top-ranked for code.',                            free_tier:'Free Inference API on open models' },
  { id:'together',    name:'Together AI',            tag:'FREE',  color:'pink',    icon:'users',      kf:'together_key',    ph:'…key',         signup:'https://api.together.ai/settings/api-keys',                 models:['Qwen/Qwen2.5-Coder-32B-Instruct','meta-llama/Llama-3.3-70B-Instruct-Turbo','deepseek-ai/DeepSeek-V3'],                      mf:'together_model',    dm:'Qwen/Qwen2.5-Coder-32B-Instruct',   desc:'$5 free credit. Runs DeepSeek V3 and Qwen 2.5 Coder at high speed.',                               free_tier:'$5 free credit on signup' },
  { id:'openrouter',  name:'OpenRouter',             tag:'FREE',  color:'rose',    icon:'git-branch', kf:'openrouter_key',  ph:'sk-or-…',      signup:'https://openrouter.ai/keys',                                models:['google/gemini-2.0-flash-exp:free','meta-llama/llama-3.3-70b-instruct:free','deepseek/deepseek-chat:free','qwen/qwen-2.5-coder-32b-instruct:free'], mf:'openrouter_model', dm:'google/gemini-2.0-flash-exp:free', desc:'Routes to ALL AI providers. Has 100% free ":free" models including Gemini & Llama.',              free_tier:'Many completely FREE models with :free tag' },
  { id:'cerebras',    name:'Cerebras',               tag:'FREE',  color:'teal',    icon:'brain',      kf:'cerebras_key',    ph:'csk-…',        signup:'https://cloud.cerebras.ai/',                                models:['llama3.3-70b','llama3.1-70b','llama3.1-8b'],                                                                                 mf:'cerebras_model',    dm:'llama3.3-70b',                      desc:'World\'s fastest AI (2000+ tokens/sec). Free tier with Llama 3.3.',                                free_tier:'Free tier · 60 req/min' },
  { id:'fireworks',   name:'Fireworks AI',           tag:'FREE',  color:'red',     icon:'flame',      kf:'fireworks_key',   ph:'fw_…',         signup:'https://fireworks.ai/api-keys',                             models:['accounts/fireworks/models/qwen2p5-coder-32b-instruct','accounts/fireworks/models/llama-v3p3-70b-instruct','accounts/fireworks/models/deepseek-v3'], mf:'fireworks_model', dm:'accounts/fireworks/models/qwen2p5-coder-32b-instruct', desc:'$1 free credit/month. DeepSeek V3, Qwen Coder, Llama 3.3 at ultra-fast speed.', free_tier:'$1 free credit every month' },
  // ── BATCH 2 (new 10) ───────────────────────────────────
  { id:'github',      name:'GitHub Models',          tag:'FREE',  color:'gray',    icon:'github',     kf:'github_key',      ph:'ghp_…',        signup:'https://github.com/marketplace/models',                     models:['meta-llama/Llama-3.3-70B-Instruct','mistral-ai/Mistral-7B-Instruct-v0.3','openai/gpt-4o','microsoft/Phi-3-mini-4k-instruct'], mf:'github_model',      dm:'meta-llama/Llama-3.3-70B-Instruct', desc:'FREE with a GitHub account. Access Llama, Mistral, GPT-4o and Phi via your GitHub token.',          free_tier:'Completely FREE with any GitHub account' },
  { id:'cloudflare',  name:'Cloudflare Workers AI',  tag:'FREE',  color:'blue',  icon:'cloud',      kf:'cloudflare_key',  ph:'…token',       signup:'https://dash.cloudflare.com/profile/api-tokens',            models:['@cf/meta/llama-3.3-70b-instruct','@cf/deepseek-ai/deepseek-r1-distill-llama-70b','@hf/thebloke/codellama-7b-instruct-awq'],   mf:'cloudflare_model',  dm:'@cf/meta/llama-3.3-70b-instruct',   desc:'FREE 10,000 req/day. Runs Llama, CodeLlama, DeepSeek R1 on Cloudflare\'s global edge network.',    free_tier:'10,000 requests/day FREE forever' },
  { id:'sambanova',   name:'SambaNova Cloud',        tag:'FREE',  color:'violet',  icon:'server',     kf:'sambanova_key',   ph:'…key',         signup:'https://cloud.sambanova.ai/',                               models:['Meta-Llama-3.3-70B-Instruct','Meta-Llama-3.1-405B-Instruct','Meta-Llama-3.2-3B-Instruct'],                                   mf:'sambanova_model',   dm:'Meta-Llama-3.3-70B-Instruct',       desc:'FREE fastest Llama 405B inference in the world. Purpose-built AI chips for maximum speed.',        free_tier:'Free tier with Llama 3.1 405B' },
  { id:'hyperbolic',  name:'Hyperbolic',             tag:'FREE',  color:'cyan',    icon:'activity',   kf:'hyperbolic_key',  ph:'…key',         signup:'https://app.hyperbolic.xyz/settings',                       models:['deepseek-ai/DeepSeek-V3','Qwen/Qwen2.5-Coder-32B-Instruct','meta-llama/Llama-3.3-70B-Instruct'],                             mf:'hyperbolic_model',  dm:'Qwen/Qwen2.5-Coder-32B-Instruct',   desc:'$10 FREE credit on signup. Run DeepSeek V3 and Qwen 2.5 Coder at competitive speed.',              free_tier:'$10 free credit on signup' },
  { id:'novita',      name:'Novita AI',              tag:'FREE',  color:'emerald', icon:'layers',     kf:'novita_key',      ph:'…key',         signup:'https://novita.ai/settings#key-management',                 models:['qwen/qwen2.5-coder-32b-instruct','meta-llama/llama-3.3-70b-instruct','deepseek/deepseek-v3'],                                 mf:'novita_model',      dm:'qwen/qwen2.5-coder-32b-instruct',   desc:'Free credits on signup. Runs Qwen Coder, DeepSeek V3, Llama 3.3 at affordable prices.',           free_tier:'Free credits on signup' },
  { id:'perplexity',  name:'Perplexity AI',          tag:'FREE',  color:'blue',    icon:'search-code',kf:'perplexity_key',  ph:'pplx-…',       signup:'https://www.perplexity.ai/settings/api',                    models:['llama-3.1-sonar-small-128k-online','llama-3.1-sonar-large-128k-online','llama-3.1-8b-instruct'],                              mf:'perplexity_model',  dm:'llama-3.1-sonar-small-128k-online', desc:'Online AI with real-time web search. Sonar model can search the web to answer coding questions.',  free_tier:'Free tier available · $5 starting credit' },
  { id:'replicate',   name:'Replicate',              tag:'FREE',  color:'amber',   icon:'repeat',     kf:'replicate_key',   ph:'r8_…',         signup:'https://replicate.com/account/api-tokens',                  models:['meta/codellama-70b-instruct','meta/llama-3.3-70b-instruct','deepseek-ai/deepseek-coder-v2'],                                  mf:'replicate_model',   dm:'meta/codellama-70b-instruct',       desc:'$0.50 free credit. Thousands of open-source AI models including specialized coding models.',        free_tier:'$0.50 free credit · No card for many models' },
  { id:'ai21',        name:'AI21 Labs (Jamba)',       tag:'FREE',  color:'pink',    icon:'wand-2',     kf:'ai21_key',        ph:'…key',         signup:'https://studio.ai21.com/account/api-key',                   models:['jamba-1.5-large','jamba-1.5-mini','j2-ultra','j2-mid'],                                                                      mf:'ai21_model',        dm:'jamba-1.5-mini',                    desc:'Free tier with Jamba 1.5. Long context (256K tokens) model good for analyzing large codebases.',   free_tier:'Free tier · No credit card required' },
  { id:'lepton',      name:'Lepton AI',              tag:'FREE',  color:'teal',    icon:'atom',       kf:'lepton_key',      ph:'…key',         signup:'https://www.lepton.ai/login',                               models:['llama3-3-70b','deepseek-v3','qwen2-5-coder-32b-instruct','mistral-7b'],                                                       mf:'lepton_model',      dm:'qwen2-5-coder-32b-instruct',        desc:'Free credits. Runs Qwen Coder, DeepSeek V3, Llama 3.3 with fast inference.',                       free_tier:'Free credits on signup' },
  { id:'ollama',      name:'Ollama (Local)',          tag:'FREE',  color:'gray',    icon:'monitor',    kf:'ollama_url',      ph:'http://localhost:11434', signup:'https://ollama.ai/download',                       models:['codellama:13b','qwen2.5-coder:7b','deepseek-coder:6.7b','llama3.3:70b','phi3:mini'],                                        mf:'ollama_model',      dm:'qwen2.5-coder:7b',                  desc:'100% FREE — runs entirely on YOUR computer. No API key needed. No internet. No limits. Install Ollama app.', free_tier:'100% FREE forever — runs locally offline' },
];

const AI_CLR = {
  border: {blue:'border-blue-500/50',blue:'border-blue-500/50',cyan:'border-cyan-500/50',violet:'border-violet-500/50',emerald:'border-emerald-500/50',amber:'border-amber-500/50',pink:'border-pink-500/50',rose:'border-rose-500/50',teal:'border-teal-500/50',red:'border-red-500/50',gray:'border-gray-500/50'},
  bg:     {blue:'bg-blue-500/8',blue:'bg-blue-500/8',cyan:'bg-cyan-500/8',violet:'bg-violet-500/8',emerald:'bg-emerald-500/8',amber:'bg-amber-500/8',pink:'bg-pink-500/8',rose:'bg-rose-500/8',teal:'bg-teal-500/8',red:'bg-red-500/8',gray:'bg-gray-500/8'},
  text:   {blue:'text-blue-400',blue:'text-blue-400',cyan:'text-cyan-400',violet:'text-violet-400',emerald:'text-emerald-400',amber:'text-amber-400',pink:'text-pink-400',rose:'text-rose-400',teal:'text-teal-400',red:'text-red-400',gray:'text-gray-400'},
  badge:  {blue:'bg-blue-500/15 text-blue-300',blue:'bg-blue-500/15 text-blue-300',cyan:'bg-cyan-500/15 text-cyan-300',violet:'bg-violet-500/15 text-violet-300',emerald:'bg-emerald-500/15 text-emerald-300',amber:'bg-amber-500/15 text-amber-300',pink:'bg-pink-500/15 text-pink-300',rose:'bg-rose-500/15 text-rose-300',teal:'bg-teal-500/15 text-teal-300',red:'bg-red-500/15 text-red-300',gray:'bg-gray-500/15 text-gray-300'},
};

async function renderAiSettings() {
  const content = document.getElementById('content');
  try {
    const { data: settings } = await supabase.from('ai_settings').select('*').limit(1).maybeSingle();
    const s = settings || {};
    const activeId = s.active_provider || 'gemini';

    const batch1 = ALL_AI_PROVIDERS.slice(0, 10);
    const batch2 = ALL_AI_PROVIDERS.slice(10);

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
              <label class="lbl mb-0">${p.id==='ollama' ? 'Ollama Server URL' : 'API Key'}</label>
              <a href="${p.signup}" target="_blank" rel="noopener" class="text-[10px] font-bold ${AI_CLR.text[p.color]} hover:underline flex items-center gap-0.5">
                <i data-lucide="external-link" class="w-3 h-3"></i>${p.id==='ollama' ? 'Install Ollama' : 'Get Free Key'}
              </a>
            </div>
            <div class="relative">
              <input type="${p.id==='ollama'?'text':'password'}" class="input-field pr-16 text-xs" name="${p.kf}"
                placeholder="${savedKey ? '••••'+savedKey.slice(-4) : p.ph}">
              ${savedKey ? `<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>` : `<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>`}
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
            <span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs px-3 py-1">20 Free Providers</span>
          </div>
        </div>

        <div class="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-xs text-emerald-300 flex items-start gap-3">
          <i data-lucide="gift" class="w-5 h-5 shrink-0 text-emerald-400 mt-0.5"></i>
          <div>
            <p class="font-black mb-0.5">All 20 providers have FREE tiers — no payment required to start!</p>
            <p class="text-emerald-400/70">Click "Get Free Key" → sign up on their website → paste key below → Save. Keys are stored securely in your database. Select one as your active provider.</p>
          </div>
        </div>

        <form id="ai-form" onsubmit="saveAiSettings(event)" class="space-y-5">

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4">
            <h3 class="text-sm font-black text-white mb-3 flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-blue-400"></i> Batch 1 — Original 10 Free AI Providers</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">${batch1.map(providerCard).join('')}</div>
          </div>

          <div class="glass-soft border border-violet-500/15 rounded-2xl p-4">
            <h3 class="text-sm font-black text-white mb-3 flex items-center gap-2"><i data-lucide="plus-circle" class="w-4 h-4 text-violet-400"></i> Batch 2 — 10 More Free AI Providers</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">${batch2.map(providerCard).join('')}</div>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="sliders" class="w-4 h-4 text-blue-400"></i> Feature Toggles</h3>
            ${[
              {key:'customer_ai_enabled', label:'Customer AI Chatbot',    desc:'Customers can chat with AI on your website',    val:s.customer_ai_enabled},
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
            💾 Save All AI Settings
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
    customer_ai_enabled: data.customer_ai_enabled === 'on',
    product_ai_enabled:  data.product_ai_enabled  === 'on',
    ai_code_assist:      data.ai_code_assist       === 'on',
    ai_moderation:       data.ai_moderation        === 'on',
  };

  // Collect key + model for every provider — only save if user typed a new non-masked value
  ALL_AI_PROVIDERS.forEach(p => {
    if (data[p.mf]) payload[p.mf] = data[p.mf];
    const v = (data[p.kf] || '').trim();
    if (v && !v.startsWith('••••') && v !== '') payload[p.kf] = v;
  });

  // Also mirror gemini_key → gemini_api_key for backwards compat
  if (payload.gemini_key) payload.gemini_api_key = payload.gemini_key;
  if (payload.openai_key) payload.openai_api_key = payload.openai_key;

  try {
    // Get the existing row id (the table uses UUID, not integer)
    const { data: existing } = await supabase.from('ai_settings').select('id').limit(1).maybeSingle();

    let error;
    if (existing?.id) {
      // Row exists → UPDATE it
      ({ error } = await supabase.from('ai_settings').update(payload).eq('id', existing.id));
    } else {
      // No row yet → INSERT one
      ({ error } = await supabase.from('ai_settings').insert(payload));
    }

    if (error) {
      // Show the real error so we can debug
      showToast('Save failed: ' + error.message, 'error');
      console.error('[AI Save]', error);
      return;
    }

    // Reload the live AI client cache
    await aiClient.reload();
    showToast('✅ AI settings saved! Keys are active and auto-switch is ON.', 'success');

    // Refresh the page so the "✓ Saved" indicators update
    setTimeout(() => renderAiSettings(), 600);

  } catch (err) {
    showToast('Unexpected error: ' + err.message, 'error');
    console.error('[AI Save]', err);
  }
};

// ══════════════════════════════════════════════════════════
//  AI AUTO-SWITCH CLIENT
//  Reads saved keys from DB, tries each provider in order,
//  automatically skips to next when a provider is rate-limited
//  or returns an error. Cooldown tracked in localStorage.
// ══════════════════════════════════════════════════════════
const AI_COOLDOWN_KEY = 'kco_ai_cooldowns';
const AI_COOLDOWN_MS  = 60 * 1000; // 1 minute cooldown after rate limit

const aiClient = {
  _cfg: null,

  async reload() {
    const { data, error } = await supabase.from('ai_settings').select('*').limit(1).maybeSingle();
    if (error) { console.warn('[aiClient] Could not load settings:', error.message); this._cfg = {}; return; }
    // Normalise: support both old column names (openai_api_key) and new (openai_key)
    const cfg = data || {};
    if (!cfg.openai_key && cfg.openai_api_key) cfg.openai_key = cfg.openai_api_key;
    if (!cfg.gemini_key && cfg.gemini_api_key) cfg.gemini_key = cfg.gemini_api_key;
    this._cfg = cfg;
  },

  async getConfig() {
    if (!this._cfg) await this.reload();
    return this._cfg;
  },

  // Returns providers sorted: active provider first, then others that have a key
  async getOrderedProviders() {
    const cfg = await this.getConfig();
    const activeId = cfg.active_provider || 'gemini';
    const cooldowns = this._getCooldowns();
    const now = Date.now();

    // Build list: active first, then others with saved keys, skip cooled-down ones
    const withKey = ALL_AI_PROVIDERS.filter(p => cfg[p.kf] && cfg[p.kf].trim());
    const active  = withKey.filter(p => p.id === activeId);
    const others  = withKey.filter(p => p.id !== activeId);
    const ordered = [...active, ...others];

    // Sort: cooled-down go to end
    return ordered.sort((a, b) => {
      const aCool = (cooldowns[a.id] || 0) > now ? 1 : 0;
      const bCool = (cooldowns[b.id] || 0) > now ? 1 : 0;
      return aCool - bCool;
    });
  },

  _getCooldowns() {
    try { return JSON.parse(localStorage.getItem(AI_COOLDOWN_KEY) || '{}'); } catch { return {}; }
  },

  _setCooldown(providerId) {
    const c = this._getCooldowns();
    c[providerId] = Date.now() + AI_COOLDOWN_MS;
    localStorage.setItem(AI_COOLDOWN_KEY, JSON.stringify(c));
  },

  _clearCooldown(providerId) {
    const c = this._getCooldowns();
    delete c[providerId];
    localStorage.setItem(AI_COOLDOWN_KEY, JSON.stringify(c));
  },

  // Build the actual HTTP request for each provider
  _buildRequest(provider, cfg, messages, maxTokens) {
    const key   = cfg[provider.kf];
    const model = cfg[provider.mf] || provider.dm;

    switch (provider.id) {
      case 'gemini': {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
        const body = { contents: messages.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })) };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json' }, body, parse: d => d.candidates?.[0]?.content?.parts?.[0]?.text || '' };
      }
      case 'groq': {
        const url = 'https://api.groq.com/openai/v1/chat/completions';
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body, parse: d => d.choices?.[0]?.message?.content || '' };
      }
      case 'deepseek': {
        const url = 'https://api.deepseek.com/v1/chat/completions';
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body, parse: d => d.choices?.[0]?.message?.content || '' };
      }
      case 'mistral': {
        const url = 'https://api.mistral.ai/v1/chat/completions';
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body, parse: d => d.choices?.[0]?.message?.content || '' };
      }
      case 'cohere': {
        const url = 'https://api.cohere.com/v2/chat';
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body, parse: d => d.message?.content?.[0]?.text || d.text || '' };
      }
      case 'huggingface': {
        const url = `https://api-inference.huggingface.co/models/${model}/v1/chat/completions`;
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body, parse: d => d.choices?.[0]?.message?.content || '' };
      }
      case 'together': {
        const url = 'https://api.together.xyz/v1/chat/completions';
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body, parse: d => d.choices?.[0]?.message?.content || '' };
      }
      case 'openrouter': {
        const url = 'https://openrouter.ai/api/v1/chat/completions';
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}`, 'HTTP-Referer': window.location.origin }, body, parse: d => d.choices?.[0]?.message?.content || '' };
      }
      case 'cerebras': {
        const url = 'https://api.cerebras.ai/v1/chat/completions';
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body, parse: d => d.choices?.[0]?.message?.content || '' };
      }
      case 'fireworks': {
        const url = 'https://api.fireworks.ai/inference/v1/chat/completions';
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body, parse: d => d.choices?.[0]?.message?.content || '' };
      }
      case 'github': {
        const url = 'https://models.inference.ai.azure.com/chat/completions';
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body, parse: d => d.choices?.[0]?.message?.content || '' };
      }
      case 'cloudflare': {
        // key = accountId|token  (user pastes both separated by |)
        const [accountId, token] = (key || '').split('|');
        const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${model}`;
        const body = { messages };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token || key}` }, body, parse: d => d.result?.response || '' };
      }
      case 'sambanova': {
        const url = 'https://api.sambanova.ai/v1/chat/completions';
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body, parse: d => d.choices?.[0]?.message?.content || '' };
      }
      case 'hyperbolic': {
        const url = 'https://api.hyperbolic.xyz/v1/chat/completions';
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body, parse: d => d.choices?.[0]?.message?.content || '' };
      }
      case 'novita': {
        const url = 'https://api.novita.ai/v3/openai/chat/completions';
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body, parse: d => d.choices?.[0]?.message?.content || '' };
      }
      case 'perplexity': {
        const url = 'https://api.perplexity.ai/chat/completions';
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body, parse: d => d.choices?.[0]?.message?.content || '' };
      }
      case 'replicate': {
        // Use Replicate's OpenAI-compatible endpoint
        const url = 'https://openai-compat.replicate.com/v1/chat/completions';
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body, parse: d => d.choices?.[0]?.message?.content || '' };
      }
      case 'ai21': {
        const url = 'https://api.ai21.com/studio/v1/chat/completions';
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body, parse: d => d.choices?.[0]?.message?.content || '' };
      }
      case 'lepton': {
        const url = `https://${model.replace(/[^a-z0-9-]/g,'')}.lepton.run/api/v1/chat/completions`;
        const body = { model, messages, max_tokens: maxTokens };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body, parse: d => d.choices?.[0]?.message?.content || '' };
      }
      case 'ollama': {
        // key field is actually the server URL for Ollama
        const baseUrl = (key || 'http://localhost:11434').replace(/\/$/, '');
        const url = `${baseUrl}/api/chat`;
        const body = { model, messages, stream: false };
        return { url, method: 'POST', headers: { 'Content-Type': 'application/json' }, body, parse: d => d.message?.content || '' };
      }
      default:
        return null;
    }
  },

  // ── MAIN CALL: tries providers in order, auto-switches on error ──
  async chat(messages, { maxTokens = 2000, onProviderSwitch = null } = {}) {
    const providers = await this.getOrderedProviders();
    const cfg = await this.getConfig();
    const cooldowns = this._getCooldowns();
    const now = Date.now();

    if (providers.length === 0) {
      throw new Error('No AI providers configured. Go to AI Settings and add at least one API key.');
    }

    let lastError = null;
    for (const provider of providers) {
      // Skip if still in cooldown
      if ((cooldowns[provider.id] || 0) > now) {
        const remaining = Math.ceil(((cooldowns[provider.id] || 0) - now) / 1000);
        console.log(`[AI] Skipping ${provider.name} — rate limited for ${remaining}s more`);
        continue;
      }

      // Ollama is local (no API key) so it is called directly from the browser.
      if (provider.id === 'ollama') {
        const req = this._buildRequest(provider, cfg, messages, maxTokens);
        if (!req) continue;
        try {
          if (onProviderSwitch) onProviderSwitch(provider.name);
          const res = await fetch(req.url, {
            method: req.method,
            headers: req.headers,
            body: JSON.stringify(req.body),
            signal: AbortSignal.timeout(60000),
          });
          if (res.status === 429 || res.status === 503) {
            this._setCooldown(provider.id);
            console.warn(`[AI] ${provider.name} rate limited (${res.status}), switching to next provider…`);
            lastError = new Error(`${provider.name} rate limited`);
            continue;
          }
          if (!res.ok) {
            const errBody = await res.text().catch(() => '');
            lastError = new Error(`${provider.name} error ${res.status}: ${errBody.slice(0, 100)}`);
            console.warn(`[AI] ${provider.name} failed:`, lastError.message);
            continue;
          }
          const data = await res.json();
          const text = req.parse(data);
          if (!text) { lastError = new Error(`${provider.name} returned empty response`); continue; }
          this._clearCooldown(provider.id);
          console.log(`[AI] ✓ Response from ${provider.name}`);
          return { text, provider: provider.name, model: cfg[provider.mf] || provider.dm };
        } catch (err) {
          if (err.name === 'TimeoutError') { this._setCooldown(provider.id); lastError = new Error(`${provider.name} timed out`); }
          else lastError = err;
          console.warn(`[AI] ${provider.name} exception:`, err.message);
        }
        continue;
      }

      // Cloud providers go through the Supabase edge function so their API keys
      // never appear in the browser's network requests.
      try {
        if (onProviderSwitch) onProviderSwitch(provider.name);
        const last = messages[messages.length - 1];
        const body = {
          action: 'chat',
          message: String(last?.content || '').trim(),
          history: messages.slice(0, -1).map(m => ({ role: m.role, content: String(m.content || '') })),
          provider_override: provider.id,
          max_tokens: maxTokens,
        };
        const res = await this._callEdge(body);
        if (res && res.response) {
          this._clearCooldown(provider.id);
          console.log(`[AI] ✓ Response from ${provider.name} (via edge function)`);
          return { text: res.response, provider: provider.name, model: res.model || cfg[provider.mf] || provider.dm };
        }
        const msg = String(res?.error || 'empty response');
        const low = msg.toLowerCase();
        if (low.includes('429') || low.includes('rate limit') || low.includes('quota')) {
          this._setCooldown(provider.id);
          console.warn(`[AI] ${provider.name} rate limited (${msg.slice(0, 80)}), switching to next provider…`);
          lastError = new Error(`${provider.name} rate limited`);
        } else {
          lastError = new Error(`${provider.name} error: ${msg.slice(0, 200)}`);
          console.warn(`[AI] ${provider.name} failed:`, lastError.message);
        }
      } catch (err) {
        if (err.name === 'TimeoutError') { this._setCooldown(provider.id); lastError = new Error(`${provider.name} timed out`); }
        else lastError = err;
        console.warn(`[AI] ${provider.name} exception:`, err.message);
      }
    }

    throw new Error(lastError?.message || 'All AI providers failed or are rate limited. Add more API keys in AI Settings.');
  },

  // Convenience: single-turn prompt
  async prompt(text, opts = {}) {
    return this.chat([{ role: 'user', content: text }], opts);
  },

  // Get status of all providers (for the status widget)
  async getStatus() {
    const cfg = await this.getConfig();
    const cooldowns = this._getCooldowns();
    const now = Date.now();
    return ALL_AI_PROVIDERS.map(p => ({
      id: p.id, name: p.name, color: p.color,
      hasKey: !!(cfg[p.kf]?.trim()),
      isActive: cfg.active_provider === p.id,
      cooldownUntil: cooldowns[p.id] || 0,
      isCoolingDown: (cooldowns[p.id] || 0) > now,
      remainingSec: Math.max(0, Math.ceil(((cooldowns[p.id] || 0) - now) / 1000)),
    }));
  },

  // ── VISION: analyze uploaded product images (server-side cloud providers) ──
  // Returns a parsed JSON object { title, description, category, subcategory,
  // brand, model, color, condition, features[], highlights[], seo_keywords[],
  // specifications{} } or null when vision is unavailable. API keys stay
  // server-side — the browser only sends image data and a prompt.
  async analyzeImages(imageUrls, context = {}) {
    const prompt = `You are the AI listing expert for the Weverse Online Shop marketplace. Look carefully at the uploaded product photo(s) and identify exactly what the product is.

Return a single valid JSON object (no markdown, no extra text) with these keys:
- title (string): a real, professional marketplace product title that matches the actual item (brand + model/type + key feature + category). Never use placeholders like "AI Product" or "Premium Item".
- description (string): a detailed, persuasive 2-4 sentence description.
- category (string): the best category from this list: Electronics, Phones, Computers & Laptops, Fashion, Men's Fashion, Women's Fashion, Shoes, Bags & Accessories, Jewelry, Beauty & Skincare, Home & Kitchen, Furniture, Garden & Outdoor, Toys & Games, Sports & Fitness, Food & Groceries, Baby & Kids, Health & Medical, Books & Education, Office & Stationery, Pet Supplies, Musical Instruments, Cameras & Photography, Watches, Gaming, Software & Digital, Services, Cars, Luxury Cars, Motorcycles, Commercial Vehicles, Boats & Marine, Other.
- subcategory (string)
- brand, model, color, condition (strings; condition from: New, Refurbished, Used - Like New, Used - Good, Used - Fair)
- material, size, storage, ram, processor (strings, only if relevant)
- features (array of strings)
- highlights (array of strings)
- seo_keywords (array of strings)
- specifications (object with the relevant spec keys only, e.g. engine, transmission, fuel_type, horsepower, mileage, drive_type, body_type, model_year for vehicles; storage, ram, processor, display for electronics)
- detected_name (string): a short plain-language label of the product, e.g. "white sneakers".

Rules:
- Only include keys you can actually observe or reasonably infer from the photo(s). NEVER invent exact specs (price, storage size, RAM, horsepower, year, serial numbers) that are not visible or printed on the product.
- Respond with valid JSON only.`;

    const images = [];
    for (const url of (imageUrls || []).slice(0, 4)) {
      const dataUrl = await this._fetchImageAsDataUrl(url);
      if (dataUrl) images.push(dataUrl);
    }
    if (!images.length) throw new Error('Could not read the uploaded images.');

    // 1) Server-side vision: cloud providers with automatic 429/rate-limit fallback
    try {
      const res = await this._callEdge({ action: 'vision', images, prompt, max_tokens: 4096 });
      if (res && res.success && res.text) {
        const parsed = extractJsonFromAiText(res.text);
        if (parsed) return { ...parsed, _aiProvider: res.provider, _aiModel: res.model };
        throw new Error('The AI returned no valid analysis for these images.');
      }
      throw new Error((res && res.error) || 'Vision service unavailable.');
    } catch (err) {
      // 2) Local Ollama vision (browser → localhost; no API key, fully offline)
      try {
        const local = await this._tryLocalOllamaVision(prompt, images);
        if (local) return local;
      } catch { /* ignore — try text-only */ }
      // 3) Text-only fallback using the category context (never invents image facts)
      const extra = `\n\n(No image analysis is available right now. The product is currently categorized as "${context.category || 'Unknown'}"${context.existingTitle ? ` and titled "${context.existingTitle}"` : ''}. Base your content on that plus general knowledge of typical products in this category. Do not invent specific specs or prices you cannot know.)`;
      const res = await this.chat([{ role: 'user', content: prompt + extra }], { maxTokens: 4000 });
      return extractJsonFromAiText(res.text);
    }
  },

  // POST to the Supabase edge function so provider API keys never leave the server.
  async _callEdge(body) {
    let token = '';
    try { token = (await supabase.auth.getSession())?.data?.session?.access_token || ''; } catch {}
    const res = await fetch(AI_FN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(120000),
    });
    return await res.json().catch(() => ({}));
  },

  // Fetch an image URL and return a compressed data URL (keeps edge payloads small).
  async _fetchImageAsDataUrl(url) {
    try {
      const blob = await fetch(url).then(r => r.blob());
      if (!blob || !blob.size) return null;
      if (blob.size < 1_800_000) return `data:${blob.type || 'image/jpeg'};base64,${await blobToBase64(blob)}`;
      return await this._downscaleImage(blob, 1200);
    } catch { return null; }
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
      return canvas.toDataURL('image/jpeg', 0.82);
    } finally { URL.revokeObjectURL(objectUrl); }
  },

  // Local Ollama vision via the browser → localhost (no API key, fully offline).
  async _tryLocalOllamaVision(prompt, images) {
    const cfg = await this.getConfig();
    const baseUrl = String(cfg.ollama_url || 'http://localhost:11434').replace(/\/$/, '');
    const models = [cfg.ollama_model, 'llava', 'llama3.2-vision', 'moondream'].filter(Boolean);
    for (const model of models) {
      try {
        const res = await fetch(`${baseUrl}/api/generate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model,
            prompt,
            images: images.map(d => String(d).split(',')[1] || d),
            stream: false,
            options: { temperature: 0.3, num_predict: 4096 },
          }),
          signal: AbortSignal.timeout(120000),
        });
        if (!res.ok) continue;
        const data = await res.json();
        const text = String(data?.response || '').trim();
        if (!text) continue;
        const parsed = extractJsonFromAiText(text);
        return parsed
          ? { ...parsed, _aiProvider: 'Ollama (Local)', _aiModel: model }
          : { description: text, _aiProvider: 'Ollama (Local)', _aiModel: model };
      } catch { /* try next local model */ }
    }
    return null;
  },

  // ── IMAGE GENERATION: expand a product into realistic angle photos ──
  // Cloud generation runs server-side (Gemini image models) so the API key
  // never touches the browser. Falls back to local ComfyUI, then Ollama.
  // Returns an array of data-URLs.
  async generateImages(prompt, referenceUrl, count = 1) {
    let refData = null;
    if (referenceUrl) {
      try { refData = await this._fetchImageAsDataUrl(referenceUrl); } catch { /* reference optional */ }
    }
    try {
      const res = await this._callEdge({ action: 'generate_images', prompt, reference_url: refData, count: count || 1 });
      if (res && res.success && Array.isArray(res.images) && res.images.length) return res.images;
      throw new Error((res && res.error) || 'Image generation service unavailable.');
    } catch (err) {
      try {
        const comfy = await this._tryLocalComfyUI(prompt);
        if (comfy && comfy.length) return comfy;
      } catch { /* ignore */ }
      try {
        const local = await this._tryLocalOllamaImage(prompt);
        if (local && local.length) return local;
      } catch { /* ignore */ }
      throw new Error(`AI image generation failed: ${err.message || err}. Add a Google Gemini API key in AI Settings, or configure local ComfyUI/Ollama.`);
    }
  },

  // Local image generation via ComfyUI (browser → localhost).
  // Uses the saved workflow JSON; the prompt is injected into the input node.
  async _tryLocalComfyUI(prompt) {
    const cfg = await this.getConfig();
    const workflowRaw = String(cfg.comfyui_workflow || '').trim();
    if (!workflowRaw) return null;
    let workflow;
    try { workflow = JSON.parse(workflowRaw); } catch { return null; }
    const baseUrl = String(cfg.comfyui_url || 'http://127.0.0.1:8188').replace(/\/$/, '');
    const inputNode = String(cfg.comfyui_input_node || 'image');
    const outputNode = String(cfg.comfyui_output_node || 'image');
    const input = workflow[inputNode] || Object.values(workflow)[0];
    if (!input) return null;
    input.inputs = { ...(input.inputs || {}), text: prompt };
    const clientId = `web-${Date.now()}`;
    const res = await fetch(`${baseUrl}/prompt`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: workflow, client_id: clientId }),
      signal: AbortSignal.timeout(60000),
    });
    if (!res.ok) return null;
    const { prompt_id } = await res.json();
    if (!prompt_id) return null;
    // Poll /history until the output node emits images.
    const deadline = Date.now() + 180000;
    while (Date.now() < deadline) {
      await new Promise(r => setTimeout(r, 1000));
      try {
        const hres = await fetch(`${baseUrl}/history/${prompt_id}`, { signal: AbortSignal.timeout(10000) });
        if (!hres.ok) continue;
        const history = await hres.json();
        const entry = history[prompt_id];
        if (!entry) continue;
        const outputs = Object.values(entry.outputs || {});
        const images = outputs.flatMap(o => Array.isArray(o.images) ? o.images : []);
        if (images.length) {
          return Promise.all(images.slice(0, 4).map(async (img) => {
            const ires = await fetch(`${baseUrl}/view?filename=${encodeURIComponent(img.filename)}&subfolder=${encodeURIComponent(img.subfolder || '')}&type=${encodeURIComponent(img.type || 'output')}`, { signal: AbortSignal.timeout(30000) });
            if (!ires.ok) return null;
            const blob = await ires.blob();
            return await blobToBase64(blob).then(b64 => `data:${blob.type || 'image/png'};base64,${b64}`);
          })).then(list => list.filter(Boolean));
        }
      } catch { /* keep polling */ }
    }
    return null;
  },

  // Best-effort local image generation via Ollama (browser → localhost).
  async _tryLocalOllamaImage(prompt) {
    const cfg = await this.getConfig();
    const baseUrl = String(cfg.ollama_url || 'http://localhost:11434').replace(/\/$/, '');
    const models = [cfg.ollama_image_model || cfg.ollama_model, 'llava'].filter(Boolean);
    for (const model of models) {
      try {
        const res = await fetch(`${baseUrl}/api/generate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ model, prompt, stream: false, options: { num_predict: 512 } }),
          signal: AbortSignal.timeout(120000),
        });
        if (!res.ok) continue;
        const data = await res.json();
        const imgB64 = String(data?.images?.[0] || '').trim();
        if (imgB64) return [`data:image/png;base64,${imgB64}`];
      } catch { /* try next local model */ }
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

// ── AI Status Widget (shows which provider is active/cooled-down) ──
window.showAiStatusModal = async function() {
  const statuses = await aiClient.getStatus();
  const configured = statuses.filter(s => s.hasKey);
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="activity" class="w-5 h-5 text-emerald-400"></i> AI Provider Status</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
        </div>
        <div class="mb-4 p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300">
          ${configured.length === 0
            ? '⚠ No keys configured. Go to AI Settings and add at least one API key.'
            : `${configured.length} provider${configured.length>1?'s':''} configured. Auto-switch is <strong class="text-emerald-400">ON</strong> — will skip rate-limited providers automatically.`}
        </div>
        <div class="space-y-2">
          ${statuses.map(s => `
            <div class="flex items-center gap-3 p-2.5 glass-soft border ${s.hasKey ? 'border-blue-500/15' : 'border-gray-800'} rounded-xl opacity-${s.hasKey ? '100' : '40'}">
              <span class="w-2.5 h-2.5 rounded-full shrink-0 ${s.isCoolingDown ? 'bg-red-500' : s.hasKey ? 'bg-emerald-400' : 'bg-gray-600'}"></span>
              <span class="text-xs font-bold text-white flex-1">${esc(s.name)}</span>
              ${s.isActive ? '<span class="text-[9px] font-black text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-full">ACTIVE</span>' : ''}
              ${!s.hasKey ? '<span class="text-[9px] text-gray-600">No key</span>' : ''}
              ${s.isCoolingDown ? `<span class="text-[9px] text-red-400 font-bold">Rate limited — ${s.remainingSec}s</span>` : ''}
              ${s.hasKey && !s.isCoolingDown ? '<span class="text-[9px] text-emerald-400">Ready ✓</span>' : ''}
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
  output.textContent = '⏳ Trying providers…';
  try {
    const result = await aiClient.prompt(input, {
      onProviderSwitch: (name) => { output.textContent = `⚡ Using: ${name}…`; },
    });
    output.textContent = `✓ [${result.provider} · ${result.model}]\n\n${result.text}`;
  } catch (err) {
    output.textContent = `❌ ${err.message}`;
  }
};

// ══════════════════════════════════════════════════════════
//  11.5 PER-PRODUCT AI ASSISTANT
//  One permanent AI assistant, auto-attached to every product
//  (existing and new) in the Admin Dashboard. Scoped to a single
//  product — it can only ever edit the product it is attached to.
// ══════════════════════════════════════════════════════════
let _productAiState = null; // { pid, from, product, busy, suggestions, approved, removedImages, addedImages, instruction }

const PRODUCT_AI_QUICK_ACTIONS = [
  { key: 'rewrite', mode: 'edit', label: 'Rewrite Title & Description', icon: 'pen-line', prompt: 'Rewrite the title and description to be more professional, compelling, and conversion-focused. Keep all product facts accurate. The title must be a real, professional product name that matches the item and its category — never a generic placeholder.' },
  { key: 'name', mode: 'edit', label: 'Professional Name', icon: 'badge-check', prompt: 'Give this product a real, professional product name that accurately matches what it actually is and its category. Never use placeholder names like "AI Product", "AI Curated Product", or anything similar.' },
  { key: 'price', mode: 'edit', label: 'Optimize Price & Stock', icon: 'dollar-sign', prompt: 'Suggest a competitive, realistic price and an optimal stock quantity for this product based on the category and current data.' },
  { key: 'category', mode: 'edit', label: 'Fix Category & Specs', icon: 'tags', prompt: 'Fix the category, subcategory, and specifications so they accurately describe this product. Use the category list if possible.' },
  { key: 'images', mode: 'edit', label: 'Clean Up Duplicate/Bad Images', icon: 'images', prompt: 'Identify duplicate, broken, or low-quality images among the CURRENT images list only, and list their exact URLs in images_to_remove. Do not invent any image URLs.' },
  { key: 'scan', mode: 'scan', label: 'Scan My Showroom', icon: 'scan-search', prompt: 'Scan the showroom and check this product against the other products so everything matches.' },
  { key: 'gen', mode: 'gen', label: 'Generate an Image', icon: 'wand-sparkles', prompt: 'Generate a new professional product image for this product.' },
];

function productAiFindProduct(pid) {
  const pool = [
    ...(window._productsData || []),
    ...(window._propertiesData || []),
  ];
  return pool.find((p) => p.property_id === pid) || null;
}

function productAiSnapshot(product) {
  const keys = ['property_id','listing_type','category','subcategory','title','description','price','currency','brand','color','size','condition','availability_status','stock_quantity','features','tags','highlights','seo_keywords','specifications','bedrooms','bathrooms','city','state','country','images'];
  const out = {};
  for (const k of keys) {
    if (k in product) out[k] = product[k];
  }
  return out;
}

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

function productAiValuePreview(value) {
  if (Array.isArray(value)) return value.length ? value.join(' · ') : '(empty)';
  if (value && typeof value === 'object') return JSON.stringify(value);
  return value === undefined || value === null || value === '' ? '(empty)' : String(value);
}

window.openProductAiAssistant = async function(pid, from = 'products') {
  let product = productAiFindProduct(pid);
  if (!product) {
    try {
      const { data } = await supabase.from('showroom_listings').select('*').eq('property_id', pid).maybeSingle();
      if (data) product = data;
    } catch { /* fall back to undefined */ }
  }
  if (!product) { showToast('Product not found.', 'error'); return; }
  _productAiState = {
    pid,
    from: from === 'properties' ? 'properties' : 'products',
    product,
    busy: false,
    suggestions: null,
    approved: new Set(),
    removedImages: new Set(),
    addedImages: [],
    instruction: '',
    quickMode: '',
    chatImages: [],
    generatedImages: [],
    lastGenPrompt: '',
    lastGenReference: null,
    messages: [{
      role: 'assistant',
      welcome: true,
      content: `I'm your AI product manager for ${pid}. We can chat about anything — or I can work on this card for you: rewrite copy, fix the price or category, clean images, scan the showroom to make sure it matches the other products, generate brand-new images, and look at any photos you attach. What do you need?`,
    }],
  };
  renderProductAiModal();
};

function renderProductAiModal() {
  const s = _productAiState;
  if (!s) return;
  const p = s.product;
  const thumb = (p.images && p.images[0]) ? p.images[0] : '/fallback.svg';
  const busy = s.busy === true;
  const msgs = Array.isArray(s.messages) ? s.messages : [];

  const msgsHtml = msgs.map((m) => m.role === 'user' ? `
    <div class="flex justify-end">
      <div class="max-w-[85%] bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl rounded-tr-md px-5 py-3.5 text-[1.02rem] leading-relaxed whitespace-pre-wrap break-words shadow-lg shadow-blue-600/20">
        ${(m.images && m.images.length) ? `<div class="flex flex-wrap gap-2 mb-2">${m.images.map((u) => `<img src="${esc(u)}" class="w-16 h-16 rounded-xl object-cover border border-white/20">`).join('')}</div>` : ''}
        ${esc(m.content)}
      </div>
    </div>` : `
    <div class="flex gap-3 items-start">
      <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-700 flex items-center justify-center shrink-0 shadow-md mt-0.5">
        <i data-lucide="sparkles" class="w-6 h-6 text-white"></i>
      </div>
      <div class="glass border border-fuchsia-500/20 rounded-3xl rounded-tl-md px-5 py-3.5 min-w-0 max-w-[85%]">
        <div class="text-[1.02rem] leading-relaxed text-gray-100 whitespace-pre-wrap break-words">${esc(m.content)}</div>
        ${m.generated && m.generated.length ? `
          <div class="flex flex-wrap gap-2.5 mt-3">
            ${m.generated.map((u, gi) => `
              <div class="relative">
                <img src="${esc(u)}" class="w-40 h-40 rounded-2xl object-cover border border-fuchsia-500/40 shadow-lg" onerror="this.src='/fallback.svg'">
                <button onclick="productAiUseGeneratedImage(${gi})" class="absolute bottom-1.5 right-1.5 px-2 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-black shadow transition">Use on card</button>
                <button onclick="productAiReplaceMainImage(${gi})" class="absolute top-1.5 right-1.5 px-2 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[9px] font-black shadow transition" title="Replace the current MAIN image with this one">Set as main</button>
              </div>`).join('')}
          </div>
          <div class="flex items-center gap-2 mt-2.5">
            <button onclick="productAiRegenerateImage()" class="btn-press px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-fuchsia-500/10 text-fuchsia-200 hover:bg-fuchsia-500/25 transition flex items-center gap-1"><i data-lucide="refresh-cw" class="w-3 h-3"></i> Regenerate</button>
            <button onclick="productAiUseAllGeneratedImages()" class="btn-press px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25 transition flex items-center gap-1"><i data-lucide="images" class="w-3 h-3"></i> Add all to card</button>
          </div>` : ''}
        ${m.provider ? `<p class="text-[9px] text-gray-600 mt-2">${esc(m.provider)}</p>` : ''}
      </div>
    </div>`).join('');

  const typingHtml = busy ? `
    <div class="flex gap-3 items-start">
      <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-700 flex items-center justify-center shrink-0 shadow-md mt-0.5">
        <i data-lucide="sparkles" class="w-6 h-6 text-white"></i>
      </div>
      <div class="glass border border-fuchsia-500/20 rounded-3xl rounded-tl-md px-5 py-4 flex items-center gap-1.5">
        <span class="typing-dot w-2.5 h-2.5 bg-fuchsia-400 rounded-full"></span>
        <span class="typing-dot w-2.5 h-2.5 bg-fuchsia-400 rounded-full"></span>
        <span class="typing-dot w-2.5 h-2.5 bg-fuchsia-400 rounded-full"></span>
      </div>
    </div>` : '';

  const chips = PRODUCT_AI_QUICK_ACTIONS.map((a) => `
    <button onclick="productAiQuickAction('${a.key}')" class="btn-press px-3 py-2 rounded-xl text-[11px] font-bold bg-fuchsia-500/10 text-fuchsia-200 hover:bg-fuchsia-500/20 border border-fuchsia-500/15 transition flex items-center gap-1.5 shrink-0">
      <i data-lucide="${a.icon}" class="w-3.5 h-3.5"></i> ${a.label}
    </button>`).join('');

  const chatImages = Array.isArray(s.chatImages) ? s.chatImages : [];
  const chatThumbs = chatImages.map((u, i) => `
    <div class="relative w-14 h-14 rounded-xl overflow-hidden border border-blue-500/40 shrink-0">
      <img src="${esc(u)}" class="w-full h-full object-cover">
      <button onclick="productAiRemoveChatImage(${i})" class="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-red-500 text-white text-xs leading-none flex items-center justify-center shadow" title="Remove image">✕</button>
    </div>`).join('');

  const previewHtml = s.suggestions ? renderProductAiPreviewPanel() : '';
  const imagesPanel = renderProductAiImagesPanel();

  openModal(`
    <div class="fixed inset-0 z-[100] bg-[#030712]/92 backdrop-blur-sm flex flex-col" onclick="if(event.target===this)closeModal()">
      <div class="max-w-4xl mx-auto w-full h-full flex flex-col">
        <div class="px-3 sm:px-5 h-16 shrink-0 flex items-center justify-between gap-3 border-b border-fuchsia-500/15 bg-blue-950/40">
          <div class="flex items-center gap-3 min-w-0">
            <button onclick="closeModal()" class="btn-press w-11 h-11 rounded-2xl bg-blue-950/60 border border-blue-500/25 flex items-center justify-center shrink-0" title="Back to products">
              <i data-lucide="chevron-left" class="w-6 h-6 text-blue-300"></i>
            </button>
            <img src="${esc(thumb)}" class="w-11 h-11 rounded-2xl object-cover border border-fuchsia-500/30" onerror="this.src='/fallback.svg'">
            <div class="min-w-0">
              <span class="text-lg font-black text-white block leading-tight truncate">${esc(p.title || 'Untitled')}</span>
              <span class="text-[11px] font-mono text-gray-500 block truncate">${esc(p.property_id)} · ${esc(p.category || 'Uncategorized')}</span>
            </div>
          </div>
          <span class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/25 hidden sm:inline-flex shrink-0"><i data-lucide="sparkles" class="w-3 h-3"></i> AI Assistant</span>
        </div>

        <div id="product-ai-chat-scroll" class="flex-1 min-h-0 overflow-y-auto scrollbar-thin px-3 sm:px-5 py-4">
          <div class="space-y-4">
            <div class="glass-soft border border-blue-500/15 rounded-2xl p-4">
              <div class="flex flex-wrap gap-1.5 mb-3">${chips}</div>
              ${imagesPanel}
            </div>
            ${msgsHtml}
            ${typingHtml}
            ${previewHtml}
          </div>
        </div>

        <div class="shrink-0 px-3 sm:px-5 pb-3 pt-2 bg-gradient-to-t from-[#070b16] via-[#070b16]/95 to-transparent">
          ${chatThumbs ? `<div class="flex flex-wrap gap-2.5 pb-2">${chatThumbs}</div>` : ''}
          <div class="glass border border-fuchsia-500/25 rounded-[1.6rem] p-2 flex items-end gap-1.5 shadow-2xl shadow-fuchsia-950/40">
            <button onclick="productAiChatAttach()" class="btn-press w-12 h-12 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/30 hover:bg-fuchsia-500/25 flex items-center justify-center shrink-0" title="Attach image(s)">
              <i data-lucide="image-plus" class="w-6 h-6 text-fuchsia-300"></i>
            </button>
            <textarea id="product-ai-input" rows="1" class="flex-1 bg-transparent text-lg text-white placeholder-gray-500 resize-none outline-none px-1 py-3 max-h-40 leading-relaxed scrollbar-thin" placeholder="Chat or ask the AI to fix this product…"></textarea>
            <button id="product-ai-send-btn" onclick="runProductAiInstruction()" class="btn-press w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-700 hover:from-fuchsia-400 hover:to-purple-600 text-white flex items-center justify-center shrink-0 transition shadow-lg shadow-fuchsia-600/30 ${busy ? 'opacity-40 pointer-events-none' : ''}" title="Send">
              <i data-lucide="send" class="w-6 h-6"></i>
            </button>
          </div>
          <div class="flex items-center justify-between gap-3 pt-2.5">
            <p class="text-[11px] text-gray-500 min-w-0">Full Gemini chat. It can fix this card, scan the showroom, generate images, and manage this product's photos — you have full permission over everything here.</p>
            ${s.suggestions ? `<button onclick="applyProductAiChanges()" class="btn-press px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-sm font-black rounded-xl transition flex items-center gap-1.5 shrink-0 shadow-lg shadow-emerald-600/30"><i data-lucide="database" class="w-4 h-4"></i> Save Approved</button>` : ''}
          </div>
        </div>
      </div>
      <input id="product-ai-chat-image" type="file" accept="image/*" multiple class="hidden" onchange="productAiChatImagePicked(this)">
    </div>`);

  const input = document.getElementById('product-ai-input');
  if (input) {
    input.value = s.instruction || '';
    input.addEventListener('input', () => {
      if (_productAiState) _productAiState.instruction = input.value;
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        runProductAiInstruction();
      }
    });
  }
  if (window.lucide) lucide.createIcons();
  scrollProductAiChatToBottom();
}

function scrollProductAiChatToBottom() {
  const el = document.getElementById('product-ai-chat-scroll');
  if (!el) return;
  requestAnimationFrame(() => {
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  });
}

window.productAiChatAttach = function() {
  document.getElementById('product-ai-chat-image')?.click();
};

window.productAiChatImagePicked = async function(input) {
  if (!_productAiState || !input || !input.files || !input.files.length) return;
  const files = [...input.files].slice(0, 4);
  let ok = 0;
  for (const file of files) {
    if (!file.type.startsWith('image/')) continue;
    const dataUrl = await productAiFileToDataUrl(file);
    if (dataUrl) { _productAiState.chatImages.push(dataUrl); ok += 1; }
  }
  input.value = '';
  if (ok) showToast(`${ok} photo(s) attached. Send any message and the AI will look at them right away.`, 'info');
  renderProductAiModal();
};

window.productAiRemoveChatImage = function(index) {
  if (!_productAiState) return;
  _productAiState.chatImages.splice(index, 1);
  renderProductAiModal();
};

function productAiFileToDataUrl(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => resolve('');
    reader.readAsDataURL(file);
  });
}

function renderProductAiImagesPanel() {
  const s = _productAiState;
  if (!s) return '';
  const current = Array.isArray(s.product.images) ? s.product.images : [];
  const all = [...current, ...s.addedImages];
  const dupCounts = {};
  current.forEach((u) => { dupCounts[u] = (dupCounts[u] || 0) + 1; });
  const dupUrls = Object.keys(dupCounts).filter((u) => dupCounts[u] > 1);

  const thumbs = all.map((url, i) => {
    const isCurrent = i < current.length;
    const isDup = isCurrent && dupUrls.includes(url);
    return `
      <div class="relative group w-20 h-20 rounded-lg overflow-hidden border ${isDup ? 'border-amber-400/70' : 'border-white/10'}">
        <img src="${esc(url)}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'">
        ${isDup ? '<span class="absolute top-0.5 left-0.5 text-[8px] font-black px-1 rounded bg-amber-400 text-[#111827]">DUP</span>' : i === 0 ? '<span class="absolute top-0.5 left-0.5 text-[8px] font-black px-1 rounded bg-blue-500 text-white">MAIN</span>' : ''}
        ${isCurrent ? `<button onclick="productAiRemoveImageNow(${i})" class="absolute top-0.5 right-0.5 w-5 h-5 rounded-full bg-black/70 hover:bg-red-600 text-white text-[10px] flex items-center justify-center" title="Remove this image from the card now">✕</button>` : ''}
      </div>`;
  }).join('');

  return `
    <div class="glass-soft border border-blue-500/15 rounded-2xl p-4">
      <div class="flex items-center justify-between mb-3">
        <div>
          <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="images" class="w-4 h-4 text-fuchsia-400"></i> Product Images</p>
          <p class="text-[10px] text-gray-500 mt-0.5">${current.length} current ${s.addedImages.length ? `+ ${s.addedImages.length} new` : ''} ${s.removedImages.size ? `· ${s.removedImages.size} to remove` : ''}</p>
        </div>
        <div class="flex gap-2">
          <button onclick="productAiDetectDuplicates()" class="btn-press px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-amber-500/15 text-amber-200 hover:bg-amber-500/25 transition">Detect Duplicates</button>
          <label class="btn-press px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25 transition cursor-pointer flex items-center gap-1">
            <i data-lucide="upload" class="w-3.5 h-3.5"></i> Upload Better Images
            <input type="file" accept="image/*" multiple class="hidden" onchange="productAiUploadImages(this)">
          </label>
        </div>
      </div>
      ${thumbs || '<p class="text-xs text-gray-500">No images yet.</p>'}
      <p class="text-[10px] text-gray-500 mt-2">Tap ✕ to delete an image, upload new ones, or generate with AI below — every image change is saved to the card immediately. The MAIN badge is the card cover; use "Set as main" on a generated image to replace it.</p>
    </div>`;
}

function renderProductAiChatPanel() {
  const s = _productAiState;
  if (!s) return '';
  const chips = PRODUCT_AI_QUICK_ACTIONS.map((a) => `
    <button onclick="productAiQuickAction('${a.key}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-fuchsia-500/10 text-fuchsia-200 hover:bg-fuchsia-500/20 border border-fuchsia-500/15 transition flex items-center gap-1.5">
      <i data-lucide="${a.icon}" class="w-3 h-3"></i> ${a.label}
    </button>`).join('');

  return `
    <div class="glass-soft border border-fuchsia-500/20 rounded-2xl p-4">
      <p class="text-xs font-black text-white flex items-center gap-2 mb-3"><i data-lucide="bot" class="w-4 h-4 text-fuchsia-400"></i> Ask the AI Assistant</p>
      <div class="flex flex-wrap gap-1.5 mb-3">${chips}</div>
      <div class="flex gap-2">
        <textarea id="product-ai-input" rows="2" class="input-field flex-1 text-xs resize-none" placeholder="e.g. Make the title more professional, rewrite the description, or suggest a better price…" oninput="productAiSyncInput(this.value)">${esc(s.instruction)}</textarea>
        <button onclick="runProductAiInstruction()" class="btn-press px-3 py-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 self-start" ${s.busy ? 'disabled' : ''}>
          <i data-lucide="send" class="w-3.5 h-3.5"></i> Run
        </button>
      </div>
      ${s.busy ? '<p class="text-[11px] text-fuchsia-300 mt-2 flex items-center gap-2"><i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Thinking…</p>' : ''}
    </div>`;
}

function renderProductAiPreviewPanel() {
  const s = _productAiState;
  if (!s) return '';
  if (!s.suggestions) {
    return `
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-4">
        <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="eye" class="w-4 h-4 text-blue-400"></i> Preview Changes</p>
        <p class="text-[11px] text-gray-500 mt-2">No suggestions yet. Use a quick action above or type an instruction, then review and approve changes before saving.</p>
      </div>`;
  }

  const rows = [];
  const fieldLabels = {
    title: 'Title', description: 'Description', price: 'Price', stock_quantity: 'Stock',
    category: 'Category', subcategory: 'Subcategory', brand: 'Brand', availability_status: 'Availability',
    features: 'Features', tags: 'Tags', highlights: 'Highlights', seo_keywords: 'SEO Keywords',
  };

  for (const key of Object.keys(s.suggestions)) {
    if (key === 'images_to_remove' || key === 'images_to_add' || key === 'summary') continue;
    const oldVal = productAiValuePreview(s.product[key]);
    const newVal = productAiValuePreview(s.suggestions[key]);
    if (oldVal === newVal) continue;
    const checked = s.approved.has(key) ? 'checked' : '';
    rows.push(`
      <div class="flex items-start gap-3 p-3 rounded-xl bg-white/5 border ${checked ? 'border-emerald-500/25' : 'border-white/10'}">
        <input type="checkbox" class="mt-0.5 accent-emerald-500" ${checked} onchange="productAiToggleApproved('${key}', this.checked)">
        <div class="min-w-0 flex-1">
          <p class="text-[10px] font-black uppercase tracking-wide text-gray-400">${esc(fieldLabels[key] || key)}</p>
          <p class="text-[11px] text-gray-500 line-through decoration-red-400/60 mt-0.5 break-words">${esc(oldVal)}</p>
          <p class="text-[11px] text-emerald-300 font-semibold mt-1 break-words">${esc(newVal)}</p>
        </div>
      </div>`);
  }

  const currentImages = Array.isArray(s.product.images) ? s.product.images : [];
  const aiRemovals = Array.isArray(s.suggestions.images_to_remove) ? s.suggestions.images_to_remove.filter((u) => currentImages.includes(u)) : [];
  const removals = [...new Set([...s.removedImages, ...aiRemovals])];
  if (removals.length) {
    const checked = s.approved.has('images_to_remove') ? 'checked' : '';
    rows.push(`
      <div class="flex items-start gap-3 p-3 rounded-xl bg-white/5 border ${checked ? 'border-emerald-500/25' : 'border-white/10'}">
        <input type="checkbox" class="mt-0.5 accent-emerald-500" ${checked} onchange="productAiToggleApproved('images_to_remove', this.checked)">
        <div class="min-w-0 flex-1">
          <p class="text-[10px] font-black uppercase tracking-wide text-gray-400">Remove ${removals.length} image${removals.length>1?'s':''}</p>
          <div class="flex flex-wrap gap-1.5 mt-1.5">${removals.slice(0, 12).map((u) => `<img src="${esc(u)}" class="w-10 h-10 rounded-md object-cover border border-red-500/40" onerror="this.src='/fallback.svg'">`).join('')}</div>
        </div>
      </div>`);
  }

  if (s.addedImages.length) {
    rows.push(`
      <div class="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-emerald-500/25">
        <input type="checkbox" class="mt-0.5 accent-emerald-500" checked disabled>
        <div class="min-w-0 flex-1">
          <p class="text-[10px] font-black uppercase tracking-wide text-gray-400">Add ${s.addedImages.length} uploaded image${s.addedImages.length>1?'s':''}</p>
          <div class="flex flex-wrap gap-1.5 mt-1.5">${s.addedImages.map((u) => `<img src="${esc(u)}" class="w-10 h-10 rounded-md object-cover border border-emerald-500/40" onerror="this.src='/fallback.svg'">`).join('')}</div>
        </div>
      </div>`);
  }

  if (s.suggestions.summary) {
    rows.unshift(`<p class="text-[11px] text-fuchsia-300 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-xl p-3">${esc(s.suggestions.summary)}</p>`);
  }

  if (!rows.length) {
    return `
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-4">
        <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="eye" class="w-4 h-4 text-blue-400"></i> Preview Changes</p>
        <p class="text-[11px] text-gray-500 mt-2">The AI had no new suggestions beyond what's already saved. Try a different instruction.</p>
      </div>`;
  }

  return `
    <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 space-y-2">
      <div class="flex items-center justify-between mb-1">
        <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="eye" class="w-4 h-4 text-emerald-400"></i> Review & Approve Changes</p>
        <button onclick="productAiApproveAll()" class="btn-press text-[10px] font-bold text-emerald-300 hover:text-emerald-200 px-2 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 transition">Approve all</button>
      </div>
      ${rows.join('')}
    </div>`;
}

window.productAiSyncInput = function(value) {
  if (_productAiState) _productAiState.instruction = value;
};

window.productAiQuickAction = function(key) {
  const action = PRODUCT_AI_QUICK_ACTIONS.find((a) => a.key === key);
  if (!action || !_productAiState) return;
  _productAiState.instruction = action.prompt;
  _productAiState.quickLabel = action.label;
  _productAiState.quickMode = action.mode || 'edit';
  runProductAiInstruction();
};

window.productAiToggleApproved = function(key, checked) {
  if (!_productAiState) return;
  if (checked) _productAiState.approved.add(key);
  else _productAiState.approved.delete(key);
  renderProductAiModal();
};

window.productAiApproveAll = function() {
  if (!_productAiState || !_productAiState.suggestions) return;
  for (const key of Object.keys(_productAiState.suggestions)) {
    _productAiState.approved.add(key);
  }
  if (_productAiState.removedImages.size) _productAiState.approved.add('images_to_remove');
  renderProductAiModal();
};

window.productAiToggleRemoveImage = function(index) {
  if (!_productAiState) return;
  const current = Array.isArray(_productAiState.product.images) ? _productAiState.product.images : [];
  const all = [...current, ..._productAiState.addedImages];
  const url = all[index];
  if (!url) return;
  if (index < current.length) {
    if (_productAiState.removedImages.has(url)) _productAiState.removedImages.delete(url);
    else _productAiState.removedImages.add(url);
  } else {
    _productAiState.addedImages = _productAiState.addedImages.filter((u) => u !== url);
  }
  renderProductAiModal();
};

window.productAiDetectDuplicates = async function() {
  if (!_productAiState) return;
  const s = _productAiState;
  const current = Array.isArray(s.product.images) ? s.product.images : [];
  const counts = {};
  current.forEach((u) => { counts[u] = (counts[u] || 0) + 1; });
  const newImages = current.filter((u, i) => !(counts[u] > 1 && current.indexOf(u) !== i));
  if (newImages.length === current.length) { showToast('No duplicate images found.', 'info'); return; }
  await productAiSaveImages(newImages, `Removed ${current.length - newImages.length} duplicate image(s) from the card.`);
};

window.productAiUploadImages = async function(input) {
  if (!_productAiState || !input || !input.files || !input.files.length) return;
  const s = _productAiState;
  const files = [...input.files];
  s.busy = true;
  renderProductAiModal();
  const current = Array.isArray(s.product.images) ? s.product.images : [];
  const next = [...current];
  let ok = 0;
  for (const file of files) {
    if (!file.type.startsWith('image/')) continue;
    const url = await uploadImageFile(file);
    if (url) { next.push(url); ok += 1; }
  }
  input.value = '';
  s.busy = false;
  if (ok) {
    await productAiSaveImages(next, `${ok} image(s) uploaded to the card.`);
    return;
  }
  showToast('Upload failed.', 'error');
  renderProductAiModal();
};

function productAiDetectMode(text, hasImages) {
  const t = String(text || '').toLowerCase();
  if (/\b(generate|create|make|draw|produce|imagine)\b[\s\S]*\b(image|photo|picture|logo|thumbnail|background|banner)\b/.test(t)
      || /\b(change|swap|replace|edit|remove)\b[\s\S]*\b(background|color|colour)\b/.test(t)) return 'gen';
  if (/\bshowroom\b/.test(t)
      || /\bcompare\b[\s\S]*\b(showroom|product|other|card)\b/.test(t)
      || /\bscan\b[\s\S]*\b(showroom|product|card|listing|shop|match)\b/.test(t)
      || /\bmatch(es|ing)?\b/.test(t)) return 'scan';
  const verb = /\b(rewrite|rephrase|update|fix|improve|optimize|change|make|rename|retitle|set|clean up|cleanup|remove|delete|add)\b/;
  const field = /\b(title|description|price|stock|category|subcategory|brand|name|images?|features|tags|highlights|seo)\b/;
  if (verb.test(t) && field.test(t)) return 'edit';
  if (hasImages) return 'vision';
  return 'chat';
}

function productAiHistoryForChat() {
  const s = _productAiState;
  const msgs = Array.isArray(s.messages) ? s.messages : [];
  return msgs
    .slice(0, -1)
    .filter((m) => !m.welcome)
    .map((m) => {
      const imgNote = m.images && m.images.length ? ` [Sent ${m.images.length} photo(s)]` : '';
      const content = `${m.content || ''}${imgNote}`.trim();
      return { role: m.role === 'user' ? 'user' : 'assistant', content };
    })
    .filter((m) => m.content);
}

window.runProductAiInstruction = async function() {
  const s = _productAiState;
  if (!s || s.busy) return;
  const rawInstruction = (s.instruction || '').trim();
  const quickLabel = s.quickLabel || '';
  s.quickLabel = '';
  const quickMode = s.quickMode || '';
  s.quickMode = '';
  const hasImages = (s.chatImages || []).length > 0;
  if (!rawInstruction && !quickLabel && !quickMode && !hasImages) return;

  const aiInstruction = rawInstruction || 'Improve this product listing professionally.';
  const userText = quickLabel || rawInstruction || (hasImages ? 'Look at these photos and tell me what you see.' : 'Improve this product listing professionally.');
  const sentImages = [...(s.chatImages || [])];
  s.chatImages = [];
  s.instruction = '';
  s.messages.push({ role: 'user', content: userText, images: sentImages });
  s.busy = true;
  renderProductAiModal();

  const mode = quickMode || productAiDetectMode(aiInstruction, hasImages);

  try {
    if (mode === 'gen') {
      await runProductAiImageGen(aiInstruction, sentImages);
    } else if (mode === 'scan') {
      await runProductAiScanShowroom();
    } else if (mode === 'edit') {
      await runProductAiEditFix(aiInstruction, sentImages);
    } else if (mode === 'vision') {
      await runProductAiVisionChat(aiInstruction, sentImages);
    } else {
      await runProductAiFreeChat(aiInstruction);
    }
    scrollProductAiChatToBottom();
  } catch (err) {
    s.messages.push({ role: 'assistant', content: `⚠️ ${err.message}` });
    showToast(`AI error: ${err.message}`, 'error');
  } finally {
    s.busy = false;
    renderProductAiModal();
  }
};

async function runProductAiEditFix(instruction, sentImages) {
  const s = _productAiState;
  const prompt = buildProductAiPrompt(s, instruction);
  let text = '';
  if (sentImages && sentImages.length) {
    const res = await aiClient._callEdge({ action: 'vision', images: sentImages.slice(0, 4), prompt, max_tokens: 4096 });
    text = (res && res.text) ? String(res.text) : '';
    if (!text) throw new Error((res && res.error) || 'The AI could not read the attached photos.');
  } else {
    const res = await aiClient.prompt(prompt, { maxTokens: 4000, onProviderSwitch: () => {} });
    text = res.text;
  }
  const json = extractJsonFromAiText(text);
  if (!json) throw new Error('The AI did not return valid JSON suggestions.');
  s.suggestions = json;
  s.approved = new Set(Object.keys(json));
  s.approved.add('images_to_remove');
  const summary = (json.summary || 'Changes are ready for this product.').trim();
  s.messages.push({ role: 'assistant', content: `${summary}\n\n✅ Changes are ready below. Tick what you want, then press Save.` });
  showToast('Suggestions ready — review and approve before saving.', 'info');
}

async function runProductAiFreeChat(userText) {
  const s = _productAiState;
  const history = productAiHistoryForChat();
  const res = await aiClient._callEdge({ action: 'chat', message: userText, history, max_tokens: 1200 });
  if (res && res.response) {
    s.messages.push({ role: 'assistant', content: String(res.response) });
    return;
  }
  throw new Error((res && res.error) || 'The AI did not respond.');
}

async function runProductAiVisionChat(userText, sentImages) {
  const s = _productAiState;
  const prompt = `${userText || 'Look at these photos.'}\n\nIf you recognize the product in these photos, say yes and identify exactly what it is, give a typical price range for it, and offer to generate more product photos for this listing. Be friendly and helpful.`;
  const res = await aiClient._callEdge({ action: 'vision', images: (sentImages || []).slice(0, 4), prompt, max_tokens: 1200 });
  const text = (res && res.text) ? String(res.text) : '';
  if (!text) throw new Error((res && res.error) || 'The AI could not read the attached photos.');
  s.messages.push({ role: 'assistant', content: text });
}

async function productAiFetchShowroom() {
  let items = Array.isArray(window._productsData) ? window._productsData : [];
  if (!items.length) {
    try {
      const { data, error } = await supabase.from('showroom_listings').select('*').limit(500);
      if (!error && Array.isArray(data)) items = data;
    } catch { /* fall back to empty */ }
  }
  return (items || []).filter((p) => p && p.property_id !== _productAiState.pid);
}

async function runProductAiScanShowroom() {
  const s = _productAiState;
  const others = await productAiFetchShowroom();
  const snapshot = JSON.stringify(productAiSnapshot(s.product), null, 2);
  const sample = others.slice(0, 15).map((p) => ({
    title: p.title, category: p.category, subcategory: p.subcategory,
    price: p.price, currency: p.currency, brand: p.brand,
    images: (Array.isArray(p.images) ? p.images.length : 0), listing_type: p.listing_type,
  }));
  const prompt = `You are the AI product manager for the product ${s.pid} in the Weverse Online Shop showroom.
THIS PRODUCT (JSON):
${snapshot}

OTHER PRODUCTS IN THE SAME SHOWROOM (${others.length} found, showing ${sample.length}):
${JSON.stringify(sample, null, 2)}

Compare THIS product with the OTHER products in the showroom. Tell the admin whether everything matches (category, style, brand, price range, photo quality). If something does not match the showroom, say exactly what is wrong and how to fix it.

Return a single valid JSON object (no markdown, no extra text):
{
  "matches": ["what already matches the showroom"],
  "mismatches": [{ "field": "title", "current": "current value", "issue": "why it does not match", "suggested_value": "the fix" }],
  "summary": "one short sentence summarizing the showroom check"
}
Rules:
- Only list mismatches that are realistic and verifiable from the given data.
- Allowed fields: title, description, price, stock_quantity, category, subcategory, brand, availability_status, features, tags, highlights, seo_keywords, specifications.
- Respond with valid JSON only.`;
  const res = await aiClient._callEdge({ action: 'chat', message: prompt, history: [], max_tokens: 3000 });
  const text = (res && res.response) ? String(res.response) : '';
  if (!text) throw new Error((res && res.error) || 'The showroom scan returned nothing.');
  const json = extractJsonFromAiText(text);
  const mismatches = Array.isArray(json && json.mismatches) ? json.mismatches : [];
  const matches = Array.isArray(json && json.matches) ? json.matches : [];
  if (json && (mismatches.length || matches.length || json.summary)) {
    const fixes = {};
    mismatches.forEach((m) => {
      if (m && m.field && m.suggested_value !== undefined && m.suggested_value !== null) fixes[m.field] = m.suggested_value;
    });
    const lines = ['Showroom scan complete:'];
    if (matches.length) lines.push(...matches.map((m) => `✅ ${m}`));
    if (mismatches.length) lines.push(...mismatches.map((m) => `⚠️ ${m.field}: ${m.issue}`));
    if (!mismatches.length) lines.push('✅ Everything matches the other products in this showroom.');
    if (mismatches.length) {
      fixes.summary = json.summary || `${mismatches.length} issue(s) found with the showroom.`;
      s.suggestions = fixes;
      s.approved = new Set(Object.keys(fixes));
      s.approved.add('images_to_remove');
      lines.push('Fixes are ready below. Tick what you want, then press Save.');
    } else {
      s.suggestions = null;
    }
    s.messages.push({ role: 'assistant', content: lines.join('\n') });
    showToast('Showroom scan complete.', 'info');
    return;
  }
  s.messages.push({ role: 'assistant', content: text || 'Showroom scan complete.' });
}

async function runProductAiImageGen(userText, sentImages) {
  const s = _productAiState;
  const p = s.product;
  const prompt = `${userText}\n\n(Generate a clean, professional product photo for "${String(p.title || '').trim() || 'this product'}" in the Weverse Online Shop.)`;
  let reference = null;
  if (sentImages && sentImages.length) reference = sentImages[0];
  else if (Array.isArray(p.images) && p.images[0]) reference = await aiClient._fetchImageAsDataUrl(p.images[0]);
  const res = await aiClient._callEdge({ action: 'generate_images', prompt, reference_url: reference, count: 2 });
  if (res && Array.isArray(res.images) && res.images.length) {
    s.generatedImages = res.images;
    s.lastGenPrompt = userText;
    s.lastGenReference = reference;
    s.messages.push({ role: 'assistant', content: 'Here are your generated images. Tap one to add it to the card, or Regenerate for new variations.', generated: res.images, provider: `${res.provider || 'AI'}/${res.model || ''}` });
    return;
  }
  throw new Error((res && res.error) || 'Image generation returned nothing.');
}

async function productAiUploadDataUrl(dataUrl) {
  try {
    const blob = await fetch(dataUrl).then((r) => r.blob());
    if (!blob || !blob.size) return null;
    const file = new File([blob], `ai-${Date.now()}.png`, { type: blob.type || 'image/png' });
    return await uploadImageFile(file);
  } catch { return null; }
}

window.productAiUseGeneratedImage = async function(index) {
  const s = _productAiState;
  if (!s || s.busy || !Array.isArray(s.generatedImages)) return;
  const dataUrl = s.generatedImages[index];
  if (!dataUrl) return;
  s.busy = true;
  renderProductAiModal();
  const url = await productAiUploadDataUrl(dataUrl);
  s.busy = false;
  if (!url) { showToast('Could not upload the generated image.', 'error'); renderProductAiModal(); return; }
  const current = Array.isArray(s.product.images) ? s.product.images : [];
  await productAiSaveImages([...current, url], 'Generated image added to the card.');
};

window.productAiReplaceMainImage = async function(index) {
  const s = _productAiState;
  if (!s || s.busy || !Array.isArray(s.generatedImages)) return;
  const dataUrl = s.generatedImages[index];
  if (!dataUrl) return;
  s.busy = true;
  renderProductAiModal();
  const url = await productAiUploadDataUrl(dataUrl);
  s.busy = false;
  if (!url) { showToast('Could not upload the generated image.', 'error'); renderProductAiModal(); return; }
  const current = Array.isArray(s.product.images) ? s.product.images : [];
  const newImages = current.length ? [url, ...current.slice(1)] : [url];
  await productAiSaveImages(newImages, 'Old main image replaced with the generated one.');
};

window.productAiUseAllGeneratedImages = async function() {
  const s = _productAiState;
  if (!s || s.busy || !Array.isArray(s.generatedImages) || !s.generatedImages.length) return;
  s.busy = true;
  renderProductAiModal();
  const current = Array.isArray(s.product.images) ? s.product.images : [];
  const next = [...current];
  let ok = 0;
  for (const dataUrl of s.generatedImages) {
    const url = await productAiUploadDataUrl(dataUrl);
    if (url) { next.push(url); ok += 1; }
  }
  s.busy = false;
  if (ok) {
    s.generatedImages = [];
    await productAiSaveImages(next, `${ok} generated image(s) added to the card.`);
    return;
  }
  showToast('Upload failed.', 'error');
  renderProductAiModal();
};

window.productAiRemoveImageNow = async function(index) {
  const s = _productAiState;
  if (!s || s.busy) return;
  const current = Array.isArray(s.product.images) ? s.product.images : [];
  if (index < 0 || index >= current.length) return;
  await productAiSaveImages(current.filter((_, i) => i !== index), 'Image removed from the card.');
};

async function productAiSaveImages(newImages, msg) {
  const s = _productAiState;
  if (!s) return;
  s.busy = true;
  renderProductAiModal();
  const payload = sanitizeShowroomPayload({ ...s.product, images: newImages, property_id: s.pid, updated_at: new Date().toISOString() });
  try {
    const { error } = await supabase.from('showroom_listings').upsert(payload, { onConflict: 'property_id' });
    if (error) throw error;
    s.product.images = newImages;
    s.removedImages.clear();
    showToast(msg, 'success');
    if (s.from === 'properties') renderProperties(); else renderProducts();
  } catch (err) {
    if (err && isRlsDenied(err)) showToast('⚠️ Save blocked: database admin role is not active. Re-run the admin permission migration.', 'error');
    else showToast(`Save failed: ${(err && err.message) || 'unknown error'}`, 'error');
  } finally {
    s.busy = false;
    renderProductAiModal();
  }
}

window.productAiRegenerateImage = async function() {
  const s = _productAiState;
  if (!s || s.busy || !s.lastGenPrompt) return;
  s.busy = true;
  renderProductAiModal();
  try {
    await runProductAiImageGen(s.lastGenPrompt, s.lastGenReference ? [s.lastGenReference] : []);
  } catch (err) {
    s.messages.push({ role: 'assistant', content: `⚠️ ${err.message}` });
  } finally {
    s.busy = false;
    renderProductAiModal();
  }
};

function buildProductAiPrompt(s, instruction) {
  const p = s.product;
  const snapshot = JSON.stringify(productAiSnapshot(p), null, 2);
  return `You are the AI product manager assistant for the Weverse Online Shop admin dashboard, working on ONE product.

You have FULL permission over the whole showroom. This is a REAL catalog managed by real store staff — always give real, usable data (real brand, realistic price, professional title). Never refuse or hedge; if something looks wrong, fix it directly. Edit the attached product, and never create or delete other products.

CURRENT PRODUCT DATA (JSON):
${snapshot}

ADMIN INSTRUCTION:
${instruction}

Return a single valid JSON object (no markdown, no extra text) that proposes changes to the attached product. Allowed keys:
- title (string): a real, professional product name that matches the actual item and its category. NEVER use placeholders like "AI Product", "AI Curated Product", or similar.
- description (string)
- price (number): always give the item's real market value — a realistic number, never 0, never omitted.
- stock_quantity (number)
- category (string)
- subcategory (string)
- brand (string): ALWAYS the item's real brand when identifiable; for unbranded/artisan items, "Handmade", "Unbranded", or similar. Never leave blank.
- model (string)
- year (number)
- color (string)
- condition (string)
- mileage (string)
- property_type (string)
- listing_type (string)
- warranty (string)
- rating (number)
- rating_count (number)
- favorite_count (number)
- availability_status (string)
- features (array of strings)
- tags (array of strings)
- highlights (array of strings)
- seo_keywords (array of strings)
- specifications (object)
- images_to_remove (array of EXACT URLs that already exist in the CURRENT product images list — only for duplicate, broken, or clearly low-quality images. Never invent URLs.)
- summary (string): one short sentence summarizing the proposed changes.

Rules:
- Only include keys you actually want to change. Omit unchanged keys.
- Do not change the property_id.
- Only list image URLs that are already in the CURRENT images array above.
- Respond with valid JSON only.`;
}

window.applyProductAiChanges = async function() {
  const s = _productAiState;
  if (!s || s.busy) return;
  const hasApprovedFields = [...s.approved].some((k) => k !== 'images_to_remove');
  const changes = {};
  if (s.suggestions) {
    for (const key of s.approved) {
      if (key === 'images_to_remove') continue;
      if (key in s.suggestions && s.suggestions[key] !== undefined) changes[key] = s.suggestions[key];
    }
  }
  if (!hasApprovedFields && !s.removedImages.size && !s.addedImages.length) {
    showToast('Approve at least one change before saving.', 'error');
    return;
  }

  const currentImages = Array.isArray(s.product.images) ? s.product.images : [];
  const removeSet = new Set(s.removedImages);
  if (s.approved.has('images_to_remove') && Array.isArray(s.suggestions?.images_to_remove)) {
    s.suggestions.images_to_remove.forEach((u) => removeSet.add(u));
  }
  const images = [...currentImages.filter((u) => !removeSet.has(u)), ...s.addedImages];

  const payload = sanitizeShowroomPayload({
    ...s.product,
    ...changes,
    images,
    property_id: s.pid,
    updated_at: new Date().toISOString(),
  });

  s.busy = true;
  renderProductAiModal();
  try {
    const { error } = await supabase.from('showroom_listings').upsert(payload, { onConflict: 'property_id' });
    if (error) throw error;
    showToast('Changes saved to Supabase.', 'success');
    const from = s.from;
    _productAiState = null;
    closeModal();
    if (from === 'properties') renderProperties();
    else renderProducts();
  } catch (err) {
    s.busy = false;
    if (err && isRlsDenied(err)) {
      showToast('⚠️ Save blocked: database admin role is not active. Re-run the admin permission migration, or contact the owner.', 'error');
    } else {
      showToast(`Save failed: ${(err && err.message) || 'unknown error'}`, 'error');
    }
    renderProductAiModal();
  }
};

// ══════════════════════════════════════════════════════════
//  11b. GENERAL AI — WHOLE SHOWROOM ASSISTANT
//  Sits on top of the Product Manager. Manages the ENTIRE
//  showroom: friendly chat, monitor, publish from a photo,
//  generate any image, and fix anything without coding.
// ══════════════════════════════════════════════════════════
let _generalAiState = null; // { busy, messages, chatImages, generatedImages, lastGenPrompt, lastGenReference, pendingPlan }

const GENERAL_AI_QUICK_ACTIONS = [
  { key: 'monitor', mode: 'monitor', label: 'Scan Showroom', icon: 'scan-search', prompt: 'Scan the whole showroom and tell me what is good and what is not good.' },
  { key: 'publish', mode: 'publish', label: 'Publish from Photo', icon: 'image-up', prompt: 'Scan this photo and publish it in the matching section of my showroom — show me a preview first so I can approve it.' },
  { key: 'gen', mode: 'gen', label: 'Generate an Image', icon: 'wand-sparkles', prompt: 'Generate a beautiful new image for me.' },
  { key: 'fix', mode: 'fix', label: 'Fix Everything', icon: 'wrench', prompt: 'Check the whole showroom and fix everything that is wrong so everything is proper.' },
];

function generalAiHistoryForChat() {
  const s = _generalAiState;
  if (!s) return [];
  const msgs = Array.isArray(s.messages) ? s.messages : [];
  return msgs
    .slice(0, -1)
    .filter((m) => !m.welcome)
    .map((m) => {
      const imgNote = m.images && m.images.length ? ` [Sent ${m.images.length} photo(s)]` : '';
      const content = `${m.content || ''}${imgNote}`.trim();
      return { role: m.role === 'user' ? 'user' : 'assistant', content };
    })
    .filter((m) => m.content);
}

function generalAiDetectMode(text, hasImages) {
  const t = String(text || '').toLowerCase();
  if (/\bpublish\b/.test(t) || /\b(add|upload|put)\b[\s\S]*\b(showroom|store|site|listing|product|card|item)\b/.test(t)) return 'publish';
  if (/\b(generate|create|make|draw|produce|imagine|design)\b[\s\S]*\b(image|photo|picture|logo|thumbnail|background|banner|color|colour)\b/.test(t)) return 'gen';
  if (hasImages) return t ? 'vision' : 'execute';
  if (/\b(scan|monitor|health|good|bad|check)\b[\s\S]*\b(showroom|store|product|section|everything)\b/.test(t) || /\bshowroom\b/.test(t)) return 'monitor';
  return 'execute';
}

function generalAiPlanPreview(plan) {
  const action = plan && plan.action;
  const p = (plan && plan.params) || {};
  switch (action) {
    case 'delete_duplicates': return `Delete duplicate products${p.category ? ` in the "${p.category}" section` : ' in the whole showroom'}.`;
    case 'delete_products': return `Delete ${(p.property_ids || []).length} product(s).`;
    case 'rename_category': return `Rename the section "${p.from}" to "${p.to}" everywhere.`;
    case 'create_product': return `Create a new product: "${p.title}" in ${p.category || 'General'}.`;
    case 'regenerate_product': return `Generate a brand-new image and replace the current one on ${p.property_id}.`;
    default: return JSON.stringify(p || {});
  }
}

function generalAiEnsureState() {
  if (_generalAiState) return _generalAiState;
  _generalAiState = {
    busy: false,
    messages: [{
      role: 'assistant',
      welcome: true,
      content: `I'm the General AI — I manage your WHOLE showroom, right here on top of the Product Manager. Upload a photo and tell me what you want: I'll scan it and list the brand, model, year and real details, generate a matching image, or publish it to the showroom (I'll always show you a preview and ask if it's good before publishing). I always scan your showroom first so trucks go where the trucks are, cars where the cars are, homes where the homes are — I never guess or make new sections unless you ask me to. I can also generate any image, chat friendly, learn from your corrections, monitor what's good and what's not, and fix everything without coding. Just tell me.`,
    }],
    chatImages: [],
    generatedImages: [],
    lastGenPrompt: '',
    lastGenReference: null,
    pendingPlan: null,
    pendingPublish: null,
  };
  return _generalAiState;
}

window.openGeneralAi = async function() {
  generalAiEnsureState();
  generalAiRefreshUi();
};

function generalAiPreviewCardHtml(p) {
  if (!p) return '';
  const price = (Number(p.price) || 0) > 0 ? `$${Number(p.price).toLocaleString()}` : '';
  const imgs = Array.isArray(p.images) ? p.images.slice(0, 3) : [];
  const feats = Array.isArray(p.features) ? p.features.slice(0, 8) : [];
  const tags = [p.brand, p.model, p.year, p.property_type].filter(Boolean);
  return `
    <div class="mt-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4">
      <div class="flex items-center justify-between gap-2 mb-3">
        <p class="text-[10px] font-black text-emerald-300 uppercase tracking-wider flex items-center gap-1.5"><i data-lucide="eye" class="w-3.5 h-3.5"></i> Card preview — check before publishing</p>
        <span class="badge bg-emerald-500/15 text-emerald-300 border-emerald-500/25 text-[9px]">${esc(p.category || 'New section')}</span>
      </div>
      ${imgs.length ? `<div class="flex flex-wrap gap-2 mb-3">${imgs.map((u) => `<img src="${esc(u)}" class="w-28 h-28 rounded-xl object-cover border border-emerald-500/40 shadow-lg" onerror="this.src='/fallback.svg'">`).join('')}</div>` : ''}
      <p class="text-base font-black text-white leading-tight">${esc(p.title || 'New Product')}</p>
      ${tags.length ? `<p class="text-[11px] font-bold text-emerald-300 mt-1">${tags.map((t) => esc(String(t))).join(' · ')}${price ? ` · ${price}` : ''}</p>` : price ? `<p class="text-[11px] font-bold text-emerald-300 mt-1">${price}</p>` : ''}
      <p class="text-[11px] text-gray-300 mt-2 leading-relaxed whitespace-pre-wrap break-words">${esc(p.description || '')}</p>
      ${feats.length ? `<div class="flex flex-wrap gap-1.5 mt-3">${feats.map((f) => `<span class="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[9px] text-gray-200">${esc(String(f))}</span>`).join('')}</div>` : ''}
      <div class="flex flex-wrap items-center gap-2 mt-4">
        <button onclick="generalAiConfirmPublish()" class="btn-press px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-black rounded-xl transition flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5"></i> Yes, publish it</button>
        <button onclick="generalAiOpenPublishFix()" class="btn-press px-3 py-2 bg-white/10 hover:bg-white/20 text-gray-200 text-[11px] font-bold rounded-xl transition flex items-center gap-1.5"><i data-lucide="pen-line" class="w-3.5 h-3.5"></i> Not professional</button>
        <button onclick="generalAiCancelPublish()" class="btn-press px-3 py-2 bg-white/5 hover:bg-white/10 text-gray-400 text-[11px] font-bold rounded-xl transition">Cancel</button>
      </div>
      <div id="general-ai-publish-fix-box" class="hidden mt-3">
        <input id="general-ai-publish-fix-input" class="w-full px-3 py-2 rounded-xl bg-white/5 border border-amber-500/30 text-[11px] text-white placeholder-gray-400 focus:outline-none" placeholder="Tell the AI what to fix (e.g. make the title and price more professional)">
        <button onclick="generalAiRevisePublish()" class="btn-press mt-2 px-3 py-2 bg-amber-500 hover:bg-amber-400 text-black text-[11px] font-black rounded-xl transition flex items-center gap-1.5"><i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i> Make it professional</button>
      </div>
    </div>`;
}

function generalAiMessageHtml(m) {
  if (!m) return '';
  if (m.role === 'user') {
    return `
    <div class="flex justify-end">
      <div class="max-w-[85%] bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl rounded-tr-md px-5 py-3.5 text-[1.02rem] leading-relaxed whitespace-pre-wrap break-words shadow-lg shadow-blue-600/20">
        ${(m.images && m.images.length) ? `<div class="flex flex-wrap gap-2 mb-2">${m.images.map((u) => `<img src="${esc(u)}" class="w-16 h-16 rounded-xl object-cover border border-white/20">`).join('')}</div>` : ''}
        ${esc(m.content)}
      </div>
    </div>`;
  }
  return `
    <div class="flex gap-3 items-start">
      <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-700 flex items-center justify-center shrink-0 shadow-md mt-0.5">
        <i data-lucide="sparkles" class="w-6 h-6 text-white"></i>
      </div>
      <div class="glass border border-sky-500/20 rounded-3xl rounded-tl-md px-5 py-3.5 min-w-0 max-w-[85%]">
        <div class="text-[1.02rem] leading-relaxed text-gray-100 whitespace-pre-wrap break-words">${esc(m.content)}</div>
        ${m.previewDraft ? generalAiPreviewCardHtml(m.previewDraft) : ''}
        ${m.images && m.images.length ? `
          <div class="flex flex-wrap gap-2.5 mt-3">
            ${m.images.map((u) => `<img src="${esc(u)}" class="w-40 h-40 rounded-2xl object-cover border border-sky-500/40 shadow-lg" onerror="this.src='/fallback.svg'">`).join('')}
          </div>` : ''}
        ${m.generated && m.generated.length ? `
          <div class="flex flex-wrap gap-2.5 mt-3">
            ${m.generated.map((u, gi) => `
              <div class="relative">
                <img src="${esc(u)}" class="w-40 h-40 rounded-2xl object-cover border border-sky-500/40 shadow-lg" onerror="this.src='/fallback.svg'">
                <button onclick="generalAiUseGeneratedImage(${gi})" class="absolute bottom-8 right-1.5 px-2 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-black shadow transition">Use on card</button>
                <button onclick="generalAiPublishGeneratedImage(${gi})" class="absolute bottom-1.5 right-1.5 px-2 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-[10px] font-black shadow transition">Publish to showroom</button>
              </div>`).join('')}
          </div>
          <div class="flex items-center gap-2 mt-2.5">
            <button onclick="generalAiRegenerateImage()" class="btn-press px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-sky-500/10 text-sky-200 hover:bg-sky-500/25 transition flex items-center gap-1"><i data-lucide="refresh-cw" class="w-3 h-3"></i> Regenerate</button>
          </div>` : ''}
        ${m.provider ? `<p class="text-[9px] text-gray-600 mt-2">${esc(m.provider)}</p>` : ''}
      </div>
    </div>`;
}

function generalAiTypingHtml() {
  return `
    <div class="flex gap-3 items-start">
      <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-700 flex items-center justify-center shrink-0 shadow-md mt-0.5">
        <i data-lucide="sparkles" class="w-6 h-6 text-white"></i>
      </div>
      <div class="glass border border-sky-500/20 rounded-3xl rounded-tl-md px-5 py-4 flex items-center gap-1.5">
        <span class="typing-dot w-2.5 h-2.5 bg-sky-400 rounded-full"></span>
        <span class="typing-dot w-2.5 h-2.5 bg-sky-400 rounded-full"></span>
        <span class="typing-dot w-2.5 h-2.5 bg-sky-400 rounded-full"></span>
      </div>
    </div>`;
}

function generalAiPendingHtml() {
  const s = _generalAiState;
  if (!s || !s.pendingPlan) return '';
  return `
    <div class="glass border border-amber-500/30 rounded-2xl p-4 bg-amber-500/5">
      <p class="text-xs font-black text-amber-200 flex items-center gap-2"><i data-lucide="shield-alert" class="w-4 h-4"></i> Confirm this action</p>
      <p class="text-[11px] text-gray-400 mt-1.5">${esc(generalAiPlanPreview(s.pendingPlan))}</p>
      <div class="flex gap-2 mt-3">
        <button onclick="generalAiConfirmPlan()" class="btn-press px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-black rounded-xl transition flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5"></i> Do it</button>
        <button onclick="generalAiCancelPlan()" class="btn-press px-3 py-2 bg-white/10 hover:bg-white/20 text-gray-200 text-[11px] font-bold rounded-xl transition">Cancel</button>
      </div>
    </div>`;
}

function generalAiChatThumbsHtml() {
  const s = _generalAiState;
  if (!s) return '';
  const chatImages = Array.isArray(s.chatImages) ? s.chatImages : [];
  return chatImages.map((u, i) => `
    <div class="relative w-14 h-14 rounded-xl overflow-hidden border border-sky-500/40 shrink-0">
      <img src="${esc(u)}" class="w-full h-full object-cover">
      <button onclick="generalAiRemoveChatImage(${i})" class="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-red-500 text-white text-xs leading-none flex items-center justify-center shadow" title="Remove image">✕</button>
    </div>`).join('');
}

function generalAiRefreshUi() {
  if (document.getElementById('general-ai-embed-scroll')) renderGeneralAiEmbed();
  const modalOpen = (document.getElementById('modal-container')?.innerHTML || '').trim().length > 0;
  if (modalOpen) renderGeneralAiModal();
  scrollGeneralAiChatToBottom();
}

window.generalAiEmbedAttach = function() {
  document.getElementById('general-ai-embed-image')?.click();
};

function renderGeneralAiModal() {
  const s = _generalAiState;
  if (!s) return;
  const busy = s.busy === true;
  const msgs = Array.isArray(s.messages) ? s.messages : [];

  const msgsHtml = msgs.map((m) => generalAiMessageHtml(m)).join('');

  const typingHtml = busy ? generalAiTypingHtml() : '';

  const chips = GENERAL_AI_QUICK_ACTIONS.map((a) => `
    <button onclick="generalAiQuickAction('${a.key}')" class="btn-press px-3 py-2 rounded-xl text-[11px] font-bold bg-sky-500/10 text-sky-200 hover:bg-sky-500/20 border border-sky-500/15 transition flex items-center gap-1.5 shrink-0">
      <i data-lucide="${a.icon}" class="w-3.5 h-3.5"></i> ${a.label}
    </button>`).join('');

  const chatThumbs = generalAiChatThumbsHtml();

  const pendingHtml = generalAiPendingHtml();

  openModal(`
    <div class="fixed inset-0 z-[100] bg-[#030712]/92 backdrop-blur-sm flex flex-col" onclick="if(event.target===this)closeModal()">
      <div class="max-w-4xl mx-auto w-full h-full flex flex-col">
        <div class="px-3 sm:px-5 h-16 shrink-0 flex items-center justify-between gap-3 border-b border-sky-500/15 bg-blue-950/40">
          <div class="flex items-center gap-3 min-w-0">
            <button onclick="closeModal()" class="btn-press w-11 h-11 rounded-2xl bg-blue-950/60 border border-sky-500/25 flex items-center justify-center shrink-0" title="Back to products">
              <i data-lucide="chevron-left" class="w-6 h-6 text-sky-300"></i>
            </button>
            <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-700 flex items-center justify-center shrink-0">
              <i data-lucide="sparkles" class="w-6 h-6 text-white"></i>
            </div>
            <div class="min-w-0">
              <span class="text-lg font-black text-white block leading-tight">General AI</span>
              <span class="text-[11px] text-gray-500 block truncate">Whole Showroom Assistant</span>
            </div>
          </div>
          <span class="badge bg-sky-500/10 text-sky-300 border-sky-500/25 hidden sm:inline-flex shrink-0"><i data-lucide="globe" class="w-3 h-3"></i> Full showroom access</span>
        </div>

        <div id="general-ai-chat-scroll" class="flex-1 min-h-0 overflow-y-auto scrollbar-thin px-3 sm:px-5 py-4">
          <div class="space-y-4">
            <div class="glass-soft border border-sky-500/15 rounded-2xl p-4">
              <div class="flex flex-wrap gap-1.5 mb-2">${chips}</div>
              <p class="text-[11px] text-gray-500">Upload a photo and tell me what to do — I'll scan it and list the real details (brand, model, year), generate a matching image, or publish it after you approve a preview. I always scan your showroom so every item goes in the right existing section, and I only create new sections when you ask. Or just chat and tell me what to fix.</p>
            </div>
            ${msgsHtml}
            ${typingHtml}
            ${pendingHtml}
          </div>
        </div>

        <div class="shrink-0 px-3 sm:px-5 pb-3 pt-2 bg-gradient-to-t from-[#070b16] via-[#070b16]/95 to-transparent">
          ${chatThumbs ? `<div class="flex flex-wrap gap-2.5 pb-2">${chatThumbs}</div>` : ''}
          <div class="glass border border-sky-500/25 rounded-[1.6rem] p-2 flex items-end gap-1.5 shadow-2xl shadow-sky-950/40">
            <button onclick="generalAiChatAttach()" class="btn-press w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/25 flex items-center justify-center shrink-0" title="Attach photo(s)">
              <i data-lucide="image-plus" class="w-6 h-6 text-sky-300"></i>
            </button>
            <textarea id="general-ai-input" rows="1" class="flex-1 bg-transparent text-lg text-white placeholder-gray-500 resize-none outline-none px-1 py-3 max-h-40 leading-relaxed scrollbar-thin" placeholder="Tell the General AI what to do for your showroom…"></textarea>
            <button id="general-ai-send-btn" onclick="runGeneralAiInstruction()" class="btn-press w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-700 hover:from-sky-400 hover:to-indigo-600 text-white flex items-center justify-center shrink-0 transition shadow-lg shadow-sky-600/30 ${busy ? 'opacity-40 pointer-events-none' : ''}" title="Send">
              <i data-lucide="send" class="w-6 h-6"></i>
            </button>
          </div>
          <p class="text-[11px] text-gray-500 pt-2.5">Full permission over the whole showroom — it checks everything before it publishes, and it can fix anything without coding.</p>
        </div>
      </div>
      <input id="general-ai-chat-image" type="file" accept="image/*" multiple class="hidden" onchange="generalAiChatImagePicked(this)">
    </div>`);

  const input = document.getElementById('general-ai-input');
  if (input) {
    input.value = s.instruction || '';
    input.addEventListener('input', () => {
      if (_generalAiState) {
        _generalAiState.instruction = input.value;
      }
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        runGeneralAiInstruction();
      }
    });
  }
  if (window.lucide) lucide.createIcons();
  scrollGeneralAiChatToBottom();
}

function renderGeneralAiEmbed() {
  const s = _generalAiState;
  const scroll = document.getElementById('general-ai-embed-scroll');
  if (!s || !scroll) return;
  const busy = s.busy === true;
  const msgs = Array.isArray(s.messages) ? s.messages : [];

  const chips = GENERAL_AI_QUICK_ACTIONS.map((a) => `
    <button onclick="generalAiQuickAction('${a.key}')" class="btn-press px-3 py-2 rounded-xl text-[11px] font-bold bg-sky-500/10 text-sky-200 hover:bg-sky-500/20 border border-sky-500/15 transition flex items-center gap-1.5 shrink-0">
      <i data-lucide="${a.icon}" class="w-3.5 h-3.5"></i> ${a.label}
    </button>`).join('');

  scroll.innerHTML = `
    <div class="flex flex-wrap gap-1.5">${chips}</div>
    ${msgs.map((m) => generalAiMessageHtml(m)).join('')}
    ${busy ? generalAiTypingHtml() : ''}
    ${generalAiPendingHtml()}
  `;

  const thumbs = document.getElementById('general-ai-embed-thumbs');
  if (thumbs) thumbs.innerHTML = generalAiChatThumbsHtml();

  const send = document.getElementById('general-ai-embed-send-btn');
  if (send) {
    send.classList.toggle('opacity-40', busy);
    send.classList.toggle('pointer-events-none', busy);
  }

  const input = document.getElementById('general-ai-embed-input');
  if (input) {
    input.value = s.instruction || '';
    if (!input.dataset.gaiBound) {
      input.dataset.gaiBound = '1';
      input.addEventListener('input', () => {
        if (_generalAiState) {
          _generalAiState.instruction = input.value;
        }
      });
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          runGeneralAiInstruction();
        }
      });
    }
  }
  if (window.lucide) lucide.createIcons();
  scrollGeneralAiChatToBottom();
}

function scrollGeneralAiChatToBottom() {
  const selectors = ['general-ai-chat-scroll', 'general-ai-embed-scroll'];
  requestAnimationFrame(() => {
    for (const id of selectors) {
      const el = document.getElementById(id);
      if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    }
  });
}

window.generalAiChatAttach = function() {
  document.getElementById('general-ai-chat-image')?.click();
};

window.generalAiChatImagePicked = async function(input) {
  if (!_generalAiState || !input || !input.files || !input.files.length) return;
  const files = [...input.files].slice(0, 4);
  let ok = 0;
  for (const file of files) {
    if (!file.type.startsWith('image/')) continue;
    const dataUrl = await productAiFileToDataUrl(file);
    if (dataUrl) { _generalAiState.chatImages.push(dataUrl); ok += 1; }
  }
  input.value = '';
  if (ok) {
    showToast(`${ok} photo(s) attached. Now type what you want me to do with it (e.g. "scan this and list everything about it", "generate an image exactly like this", or "publish this to the showroom").`, 'info');
    const inputEl = document.getElementById('general-ai-embed-input') || document.getElementById('general-ai-input');
    if (inputEl) inputEl.focus();
  }
  generalAiRefreshUi();
};

window.generalAiRemoveChatImage = function(index) {
  if (!_generalAiState) return;
  _generalAiState.chatImages.splice(index, 1);
  generalAiRefreshUi();
};

window.generalAiQuickAction = function(key) {
  const action = GENERAL_AI_QUICK_ACTIONS.find((a) => a.key === key);
  if (!action || !_generalAiState) return;
  _generalAiState.instruction = action.prompt;
  _generalAiState.quickLabel = action.label;
  _generalAiState.quickMode = action.mode;
  runGeneralAiInstruction();
};

window.runGeneralAiInstruction = async function() {
  const s = _generalAiState;
  if (!s || s.busy) return;
  const rawInstruction = (s.instruction || '').trim();
  const quickLabel = s.quickLabel || '';
  s.quickLabel = '';
  const quickMode = s.quickMode || '';
  s.quickMode = '';
  const hasImages = (s.chatImages || []).length > 0;
  if (!rawInstruction && !quickLabel && !quickMode) return;

  const aiInstruction = rawInstruction || '';
  const userText = quickLabel || rawInstruction || (hasImages ? 'Photo attached — please scan it and list everything you can identify about it.' : aiInstruction);
  const sentImages = [...(s.chatImages || [])];
  s.chatImages = [];
  s.instruction = '';
  s.pendingPlan = null;
  s.messages.push({ role: 'user', content: userText, images: sentImages });
  s.busy = true;
  generalAiRefreshUi();

  const mode = quickMode || generalAiDetectMode(aiInstruction, hasImages);

  try {
    if (mode === 'publish') {
      await generalAiPublish(aiInstruction, sentImages);
    } else if (mode === 'gen') {
      await generalAiImageGen(aiInstruction, sentImages);
    } else if (mode === 'monitor') {
      await generalAiMonitor();
    } else if (mode === 'vision') {
      await generalAiVisionChat(aiInstruction, sentImages);
    } else {
      await generalAiExecute(aiInstruction, sentImages);
    }
    scrollGeneralAiChatToBottom();
  } catch (err) {
    s.messages.push({ role: 'assistant', content: `⚠️ ${err.message}` });
    showToast(`General AI error: ${err.message}`, 'error');
  } finally {
    s.busy = false;
    generalAiRefreshUi();
  }
};

async function generalAiPublish(instruction, sentImages) {
  const s = _generalAiState;
  const res = await aiClient._callEdge({ action: 'general_publish', message: instruction, images: sentImages.slice(0, 4), max_tokens: 2048 });
  if (!res || res.success !== true) throw new Error((res && res.error) || 'Could not prepare the product card.');
  if (res.pending && res.draft) {
    s.pendingPublish = { draft: res.draft, instruction };
    s.messages.push({
      role: 'assistant',
      content: String(res.response || 'Here is the card I prepared. Is it good?'),
      previewDraft: res.preview || res.draft,
      images: (res.images || []).slice(0, 2),
    });
    generalAiRefreshUi();
    return;
  }
  s.messages.push({ role: 'assistant', content: String(res.response || 'Published.'), images: (res.images || []).slice(0, 2) });
  showToast('Product published to the showroom.', 'success');
  generalAiRefreshShowroom();
}

window.generalAiConfirmPublish = async function() {
  const s = _generalAiState;
  if (!s || s.busy || !s.pendingPublish || !s.pendingPublish.draft) return;
  const draft = s.pendingPublish.draft;
  s.pendingPublish = null;
  s.busy = true;
  generalAiRefreshUi();
  try {
    const res = await aiClient._callEdge({ action: 'general_publish', mode: 'publish', draft });
    if (!res || res.success !== true) throw new Error((res && res.error) || 'Could not publish the product.');
    s.messages.push({ role: 'assistant', content: `✅ ${String(res.response || 'Published to the showroom.')}`, images: (res.images || []).slice(0, 2) });
    showToast('Product published to the showroom.', 'success');
    generalAiRefreshShowroom();
  } catch (err) {
    s.messages.push({ role: 'assistant', content: `⚠️ ${err.message}` });
  } finally {
    s.busy = false;
    generalAiRefreshUi();
  }
};

window.generalAiCancelPublish = function() {
  if (!_generalAiState) return;
  _generalAiState.pendingPublish = null;
  _generalAiState.messages.push({ role: 'assistant', content: 'Cancelled — nothing was published.' });
  generalAiRefreshUi();
};

window.generalAiOpenPublishFix = function() {
  const box = document.getElementById('general-ai-publish-fix-box');
  if (box) box.classList.remove('hidden');
};

window.generalAiRevisePublish = async function() {
  const s = _generalAiState;
  if (!s || s.busy || !s.pendingPublish || !s.pendingPublish.draft) return;
  const input = document.getElementById('general-ai-publish-fix-input');
  const feedback = input ? String(input.value || '').trim() : '';
  const draft = s.pendingPublish.draft;
  const instruction = s.pendingPublish.instruction || '';
  s.pendingPublish = null;
  s.busy = true;
  generalAiRefreshUi();
  try {
    const res = await aiClient._callEdge({ action: 'general_publish', mode: 'preview', message: instruction, draft, feedback: feedback || 'Make this card more professional and match the showroom style.' });
    if (!res || res.success !== true) throw new Error((res && res.error) || 'Could not revise the card.');
    if (!res.pending || !res.draft) throw new Error('The AI could not produce a revised card.');
    s.pendingPublish = { draft: res.draft, instruction };
    s.messages.push({ role: 'assistant', content: String(res.response || 'Here is the revised card. Is it good now?'), previewDraft: res.preview || res.draft, images: (res.images || []).slice(0, 2) });
    generalAiRefreshUi();
  } catch (err) {
    s.messages.push({ role: 'assistant', content: `⚠️ ${err.message}` });
  } finally {
    s.busy = false;
    generalAiRefreshUi();
  }
};

async function generalAiImageGen(instruction, sentImages) {
  const s = _generalAiState;
  let reference = null;
  if (sentImages && sentImages.length) reference = sentImages[0];
  const genDirective = reference
    ? 'The attached image is your SUBJECT — study it carefully and reproduce the SAME thing: the same type of object, subject, brand, model, look, colors, style and background. Keep the identical subject; only improve quality and lighting for a professional look. Do NOT change the subject and do NOT draw a person, woman, man, or face unless the attached image actually shows one. You must match what is in the reference photo.'
    : `Generate a beautiful, high-quality image based on this request: "${instruction}". Follow the request exactly. If it asks for a specific object, product, vehicle, or scene, draw exactly that — never swap in a different subject, a person, or a random image.`;
  const res = await aiClient._callEdge({ action: 'generate_images', prompt: `${instruction}\n\n${genDirective}`, reference_url: reference, count: 2 });
  if (!res || !Array.isArray(res.images) || !res.images.length) throw new Error((res && res.error) || 'Image generation returned nothing.');
  s.generatedImages = res.images;
  s.lastGenPrompt = instruction;
  s.lastGenReference = reference;
  s.messages.push({ role: 'assistant', content: 'Here are your images — generated to match your reference photo. Tap one to save it to your showroom product images.', generated: res.images, provider: `${res.provider || 'AI'}/${res.model || ''}` });
}

async function generalAiMonitor() {
  const s = _generalAiState;
  const res = await aiClient._callEdge({ action: 'general_monitor', max_tokens: 3000 });
  if (!res || res.success !== true || !res.report) throw new Error((res && res.error) || 'Could not scan the showroom.');
  const report = res.report || {};
  const lines = ['Showroom scan complete:'];
  (Array.isArray(report.good) ? report.good : []).forEach((g) => lines.push(`✅ ${g}`));
  (Array.isArray(report.issues) ? report.issues : []).forEach((i) => lines.push(`⚠️ ${i.property_id} (${i.severity || 'low'}): ${i.issue}`));
  (Array.isArray(report.suggestions) ? report.suggestions : []).forEach((g) => lines.push(`💡 ${g}`));
  if (!(Array.isArray(report.issues) ? report.issues.length : 0)) lines.push('Everything looks good.');
  s.messages.push({ role: 'assistant', content: lines.join('\n') });
}

async function generalAiVisionChat(instruction, sentImages) {
  const s = _generalAiState;
  const prompt = `${instruction}\n\nSCAN the attached photo(s) carefully and list every detail you can actually identify, one per line, in this exact order:\n1. Brand / make\n2. Model\n3. Year\n4. Body type (for vehicles: Sedan, SUV, Coupe, Truck, etc.)\n5. Color\n6. Engine / performance specs (if visible)\n7. Mileage (if visible)\n8. Condition (New / Used - Good / Used - Fair)\n9. Visible features, badges, trims, interior, or accessories\n10. Estimated market price range\n\nRules:\n- Base every line ONLY on what you can see in the photo. Never invent specs.\n- If a badge or emblem is readable, read it exactly.\n- If you cannot identify a detail, write "Not visible" — do not guess.\n- Keep it a clean, readable list. You manage the whole showroom, so stay professional and factual.`;
  const res = await aiClient._callEdge({ action: 'vision', images: (sentImages || []).slice(0, 4), prompt, max_tokens: 1500 });
  const text = (res && res.text) ? String(res.text) : '';
  if (!text) throw new Error((res && res.error) || 'The AI could not read the attached photos.');
  s.messages.push({ role: 'assistant', content: text, provider: res.provider ? `${res.provider}/${res.model}` : '' });
}

async function generalAiExecute(instruction, sentImages) {
  const s = _generalAiState;
  const history = generalAiHistoryForChat();
  const res = await aiClient._callEdge({ action: 'general_execute', message: instruction, images: (sentImages || []).slice(0, 4), history, max_tokens: 1200 });
  if (!res || res.success !== true) throw new Error((res && res.error) || 'Could not handle that request.');
  if (res.needs_confirmation) {
    s.pendingPlan = res.plan || null;
    s.messages.push({ role: 'assistant', content: String(res.response || 'I found something I can fix.') });
    return;
  }
  s.messages.push({ role: 'assistant', content: String(res.response || res.reply || 'Done.') });
  if (res.plan && res.plan.action !== 'chat' && res.plan.action !== 'monitor') {
    generalAiRefreshShowroom();
  }
}

window.generalAiConfirmPlan = async function() {
  const s = _generalAiState;
  if (!s || !s.pendingPlan || s.busy) return;
  const plan = s.pendingPlan;
  s.pendingPlan = null;
  s.busy = true;
  generalAiRefreshUi();
  try {
    const res = await aiClient._callEdge({ action: 'general_execute', confirm_plan: plan, confirmed: true });
    if (!res || res.success !== true) throw new Error((res && res.error) || 'The action failed.');
    s.messages.push({ role: 'assistant', content: `✅ ${String(res.response || res.reply || 'Done.')}` });
    generalAiRefreshShowroom();
  } catch (err) {
    s.messages.push({ role: 'assistant', content: `⚠️ ${err.message}` });
  } finally {
    s.busy = false;
    generalAiRefreshUi();
  }
};

window.generalAiCancelPlan = function() {
  if (!_generalAiState) return;
  _generalAiState.pendingPlan = null;
  _generalAiState.messages.push({ role: 'assistant', content: 'Cancelled — nothing was changed.' });
  generalAiRefreshUi();
};

window.generalAiUseGeneratedImage = async function(index) {
  const s = _generalAiState;
  if (!s || s.busy || !Array.isArray(s.generatedImages)) return;
  const dataUrl = s.generatedImages[index];
  if (!dataUrl) return;
  s.busy = true;
  generalAiRefreshUi();
  const url = await productAiUploadDataUrl(dataUrl);
  s.busy = false;
  if (!url) { showToast('Could not upload the generated image.', 'error'); generalAiRefreshUi(); return; }
  showToast('Image saved to showroom storage. Use it on any card or ask the AI to attach it.', 'success');
  generalAiRefreshUi();
};

window.generalAiPublishGeneratedImage = async function(index) {
  const s = _generalAiState;
  if (!s || s.busy || !Array.isArray(s.generatedImages)) return;
  const dataUrl = s.generatedImages[index];
  if (!dataUrl) return;
  s.instruction = 'Publish this generated image in the matching section of my showroom.';
  s.messages.push({ role: 'user', content: 'Publish this generated image in the matching section of my showroom.', images: [dataUrl] });
  s.chatImages = [];
  s.generatedImages = [];
  await generalAiPublish('Publish this generated image in the matching section of my showroom.', [dataUrl]);
};

window.generalAiRegenerateImage = async function() {
  const s = _generalAiState;
  if (!s || s.busy || !s.lastGenPrompt) return;
  s.busy = true;
  generalAiRefreshUi();
  try {
    await generalAiImageGen(s.lastGenPrompt, s.lastGenReference ? [s.lastGenReference] : []);
  } catch (err) {
    s.messages.push({ role: 'assistant', content: `⚠️ ${err.message}` });
  } finally {
    s.busy = false;
    generalAiRefreshUi();
  }
};

async function generalAiRefreshShowroom() {
  try {
    await renderProducts();
  } catch { /* page may not be the products page */ }
}

// ══════════════════════════════════════════════════════════
//  12. AI MARKETING STUDIO
// ══════════════════════════════════════════════════════════
const AI_AD_VIDEO_PROVIDERS = [
  { id: 'flow', name: 'Flow' },
  { id: 'veo', name: 'Veo' },
  { id: 'luma', name: 'Luma' },
  { id: 'runway', name: 'Runway' },
  { id: 'pika', name: 'Pika' },
  { id: 'kling', name: 'Kling' },
  { id: 'hailuo', name: 'Hailuo' },
  { id: 'pixverse', name: 'PixVerse' },
  { id: 'hedra', name: 'Hedra' },
  { id: 'heygen', name: 'HeyGen' },
  { id: 'tavus', name: 'Tavus' },
];

const AI_AD_GOALS = [
  'Product launch',
  'Seasonal sale',
  'Brand awareness',
  'Lead generation',
  'Live stream conversion',
  'Retargeting',
];

function toArray(value) {
  return Array.isArray(value) ? value : [];
}

function getAiAdProviderConfig(savedProviders = []) {
  const byId = new Map(toArray(savedProviders).map((p) => [p.id, p]));
  return AI_AD_VIDEO_PROVIDERS.map((provider) => {
    const saved = byId.get(provider.id) || {};
    return {
      id: provider.id,
      name: provider.name,
      enabled: !!saved.enabled,
      apiKey: saved.apiKey || '',
      model: saved.model || '',
      baseUrl: saved.baseUrl || '',
    };
  });
}

async function saveAiSettingsPatch(patch) {
  const { data: existing } = await supabase.from('ai_settings').select('id').limit(1).maybeSingle();
  let error;
  if (existing?.id) {
    ({ error } = await supabase.from('ai_settings').update(patch).eq('id', existing.id));
  } else {
    ({ error } = await supabase.from('ai_settings').insert(patch));
  }
  if (error) throw error;
}

async function appendAiAdHistory(entry) {
  const { data: current } = await supabase.from('ai_settings').select('ai_ad_generation_history').limit(1).maybeSingle();
  const history = [entry, ...toArray(current?.ai_ad_generation_history)].slice(0, 120);
  await saveAiSettingsPatch({ ai_ad_generation_history: history });
}

async function saveSiteSettingsPatch(patch) {
  try {
    const { data: existing, error: loadError } = await supabase.from('site_settings').select('id').limit(1).maybeSingle();
    if (loadError) throw loadError;

    let error;
    if (existing?.id) {
      ({ error } = await supabase.from('site_settings').update(patch).eq('id', existing.id));
    } else {
      ({ error } = await supabase.from('site_settings').insert(patch));
    }
    if (error) throw error;
    return;
  } catch {}

  // Fallback path for environments where site_settings has not been migrated.
  const meta = {
    mode: 'ai_ad',
    startsAt: patch.ai_ad_starts_at || null,
    endsAt: patch.ai_ad_ends_at || null,
    ctaLabel: patch.ai_ad_cta_label || 'Shop Now',
    muted: patch.ai_ad_muted !== false,
  };
  const fallbackPayload = {
    is_live: !!patch.ai_ad_enabled,
    badge_text: patch.ai_ad_badge || 'AI Advertisement',
    headline: patch.ai_ad_title || '',
    embed_url: patch.ai_ad_video_url || '',
    description: `AI_AD_META:${JSON.stringify(meta)}`,
    stream_status: patch.ai_ad_enabled ? 'ai_ad' : 'offline',
    started_at: patch.ai_ad_starts_at || null,
    updated_at: new Date().toISOString(),
  };
  try {
    const { data: fallbackExisting } = await supabase.from('public_live_state').select('id').limit(1).maybeSingle();
    let fallbackError;
    if (fallbackExisting?.id) {
      ({ error: fallbackError } = await supabase.from('public_live_state').update(fallbackPayload).eq('id', fallbackExisting.id));
    } else {
      ({ error: fallbackError } = await supabase.from('public_live_state').insert(fallbackPayload));
    }
    if (!fallbackError) return;
  } catch {}

  // Last-resort local fallback so activation still works if DB schema is unavailable.
  try {
    localStorage.setItem(AI_AD_LOCAL_FALLBACK_KEY, JSON.stringify({
      ai_ad_enabled: !!patch.ai_ad_enabled,
      ai_ad_video_url: patch.ai_ad_video_url || '',
      ai_ad_badge: patch.ai_ad_badge || 'AI Advertisement',
      ai_ad_title: patch.ai_ad_title || '',
      ai_ad_cta_label: patch.ai_ad_cta_label || 'Shop Now',
      ai_ad_muted: patch.ai_ad_muted !== false,
      ai_ad_starts_at: patch.ai_ad_starts_at || null,
      ai_ad_ends_at: patch.ai_ad_ends_at || null,
      ai_ad_duration_seconds: patch.ai_ad_duration_seconds || 30,
      ai_ad_updated_at: new Date().toISOString(),
    }));
  } catch {}
}

function readAiMetaDescription(value) {
  if (!value || typeof value !== 'string') return null;
  if (!value.startsWith('AI_AD_META:')) return null;
  try {
    return JSON.parse(value.slice('AI_AD_META:'.length));
  } catch {
    return null;
  }
}

async function loadAiMarketingSiteState() {
  try {
    const { data, error } = await supabase.from('site_settings').select('*').limit(1).maybeSingle();
    if (!error && data) return data;
  } catch {}

  try {
    const { data, error } = await supabase.from('public_live_state').select('*').limit(1).maybeSingle();
    if (error || !data) throw new Error('public_live_state unavailable');
    const meta = readAiMetaDescription(data.description);
    const startsAt = meta?.startsAt || data.started_at || null;
    const endsAt = meta?.endsAt || null;
    return {
      ai_ad_enabled: !!data.is_live && data.stream_status === 'ai_ad' && !!data.embed_url,
      ai_ad_video_url: data.embed_url || '',
      ai_ad_badge: data.badge_text || 'AI Advertisement',
      ai_ad_title: data.headline || '',
      ai_ad_cta_label: meta?.ctaLabel || 'Shop Now',
      ai_ad_muted: meta?.muted !== false,
      ai_ad_starts_at: startsAt,
      ai_ad_ends_at: endsAt,
      ai_ad_duration_seconds: endsAt && startsAt ? Math.max(5, Math.round((new Date(endsAt).getTime() - new Date(startsAt).getTime()) / 1000)) : 30,
    };
  } catch {
    try {
      const raw = localStorage.getItem(AI_AD_LOCAL_FALLBACK_KEY);
      const localState = raw ? JSON.parse(raw) : null;
      return localState && typeof localState === 'object' ? localState : {};
    } catch {
      return {};
    }
  }
}

async function renderAiMarketingStudio() {
  const content = document.getElementById('content');
  if (!content) return;
  try {
    const [{ data: aiSettings }, siteSettings] = await Promise.all([
      supabase.from('ai_settings').select('*').limit(1).maybeSingle(),
      loadAiMarketingSiteState(),
    ]);

    const ai = aiSettings || {};
    const site = siteSettings || {};
    const providers = getAiAdProviderConfig(ai.ai_ad_video_providers);
    const history = toArray(ai.ai_ad_generation_history)
      .sort((a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime())
      .slice(0, 12);
    const activeNow = !!site.ai_ad_enabled && !!site.ai_ad_video_url && (!site.ai_ad_ends_at || new Date(site.ai_ad_ends_at).getTime() > Date.now());

    content.innerHTML = `
      <div class="space-y-6 fade-in">
        <div class="flex items-start justify-between flex-wrap gap-3">
          <div>
            <h2 class="text-xl font-black text-white">AI Marketing Studio</h2>
            <p class="text-xs text-gray-500 mt-1">AI Advertisement Generator with live ad-slot takeover and automatic restore when campaign ends.</p>
          </div>
          ${activeNow
            ? `<button onclick="deactivateAiAdvertisement()" class="btn-press bg-red-600/90 hover:bg-red-500 text-white text-xs font-bold px-3 py-2 rounded-xl transition flex items-center gap-1.5"><i data-lucide="square" class="w-3.5 h-3.5"></i>Stop Active AI Ad</button>`
            : '<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">No active AI ad</span>'}
        </div>

        <div class="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl text-xs text-blue-200">
          <p class="font-bold mb-1">How this works in real playback</p>
          <p>When an AI campaign is active, the homepage pauses normal carousel ads, plays the AI video, and resumes normal ads after finish or end-time. Video generation happens through your configured providers and keys.</p>
        </div>

        <form id="ai-ad-provider-form" onsubmit="saveAiAdProviders(event)" class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="key-round" class="w-4 h-4 text-blue-400"></i>API Management</h3>
            <button type="submit" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition">Save Provider Keys</button>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
            ${providers.map((p) => `
              <div class="glass-soft border border-blue-500/10 rounded-xl p-3 space-y-2">
                <div class="flex items-center justify-between">
                  <p class="text-xs font-bold text-white">${esc(p.name)}</p>
                  <label class="flex items-center gap-1.5 text-[11px] text-gray-400">
                    <input type="checkbox" name="provider_${p.id}_enabled" ${p.enabled ? 'checked' : ''}>
                    Enabled
                  </label>
                </div>
                <div>
                  <label class="lbl">API Key</label>
                  <input type="password" class="input-field text-xs" name="provider_${p.id}_api_key" placeholder="${p.apiKey ? 'Saved key - leave blank to keep' : 'Paste API key'}">
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label class="lbl">Model</label>
                    <input type="text" class="input-field text-xs" name="provider_${p.id}_model" value="${esc(p.model)}" placeholder="Optional model name">
                  </div>
                  <div>
                    <label class="lbl">Base URL</label>
                    <input type="url" class="input-field text-xs" name="provider_${p.id}_base_url" value="${esc(p.baseUrl)}" placeholder="Optional custom API URL">
                  </div>
                </div>
              </div>`).join('')}
          </div>
        </form>

        <form id="ai-ad-generator-form" onsubmit="activateAiAdvertisement(event)" class="glass-soft border border-violet-500/20 rounded-2xl p-5 space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="clapperboard" class="w-4 h-4 text-violet-400"></i>AI Advertisement Generator</h3>
            <button type="button" onclick="generateAiAdScript()" class="btn-press bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition">Generate Script with AI</button>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div>
              <label class="lbl">Campaign Goal</label>
              <select id="ai-ad-goal" class="input-field text-xs" name="goal">
                ${AI_AD_GOALS.map((goal) => `<option value="${esc(goal)}">${esc(goal)}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="lbl">Provider Used for Video</label>
              <select id="ai-ad-provider" class="input-field text-xs" name="provider_id">
                ${providers.map((p) => `<option value="${p.id}" ${p.enabled ? 'selected' : ''}>${esc(p.name)}</option>`).join('')}
              </select>
            </div>
          </div>

          <div>
            <label class="lbl">Offer / Brief</label>
            <textarea id="ai-ad-brief" class="input-field text-xs" name="brief" rows="3" placeholder="Describe product, offer, target audience, and style."></textarea>
          </div>

          <div>
            <label class="lbl">Generated Script</label>
            <textarea id="ai-ad-script" class="input-field text-xs" name="script" rows="6" placeholder="Click Generate Script with AI, then edit if needed.">${esc(history[0]?.script || '')}</textarea>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div>
              <label class="lbl">AI Video URL</label>
              <input id="ai-ad-video-url" type="url" class="input-field text-xs" name="video_url" placeholder="https://...mp4" value="${esc(activeNow ? site.ai_ad_video_url || '' : '')}" required>
            </div>
            <div>
              <label class="lbl">Playback Duration (seconds)</label>
              <input id="ai-ad-duration" type="number" class="input-field text-xs" name="duration_seconds" min="5" max="900" value="${esc(String(site.ai_ad_duration_seconds || 30))}" required>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div>
              <label class="lbl">Badge</label>
              <input id="ai-ad-badge" type="text" class="input-field text-xs" name="badge" value="${esc(site.ai_ad_badge || 'AI Advertisement')}" placeholder="AI Advertisement">
            </div>
            <div>
              <label class="lbl">Headline</label>
              <input id="ai-ad-title" type="text" class="input-field text-xs" name="title" value="${esc(site.ai_ad_title || '')}" placeholder="Campaign headline">
            </div>
            <div>
              <label class="lbl">CTA Label</label>
              <input id="ai-ad-cta" type="text" class="input-field text-xs" name="cta_label" value="${esc(site.ai_ad_cta_label || 'Shop Now')}" placeholder="Shop Now">
            </div>
          </div>

          <label class="flex items-center gap-2 text-xs text-gray-400">
            <input type="checkbox" name="muted" ${site.ai_ad_muted !== false ? 'checked' : ''}>
            Play AI ad muted (recommended for autoplay)
          </label>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-bold py-3 rounded-xl text-sm transition">Activate AI Advertisement</button>
        </form>

        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="p-4 border-b border-blue-500/10 flex items-center justify-between">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="history" class="w-4 h-4 text-blue-400"></i>Recent AI Ad Jobs</h3>
            <span class="text-xs text-gray-500">${history.length} entries</span>
          </div>
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Time</th><th>Goal</th><th>Provider</th><th>Status</th><th>Video</th></tr></thead>
              <tbody>
                ${history.length === 0
                  ? '<tr><td colspan="5" class="text-center text-gray-500 py-8">No AI ad jobs yet.</td></tr>'
                  : history.map((job) => `
                    <tr>
                      <td><span class="text-xs text-gray-400">${esc(fmtDT(job.created_at))}</span></td>
                      <td><span class="text-xs text-white">${esc(job.goal || 'General')}</span></td>
                      <td><span class="text-xs text-gray-300">${esc(job.provider_name || job.provider_id || 'N/A')}</span></td>
                      <td>${badge(job.status || 'active')}</td>
                      <td>${job.video_url ? `<a href="${job.video_url}" target="_blank" rel="noopener" class="text-xs text-blue-400 hover:underline">Open</a>` : '<span class="text-xs text-gray-600">N/A</span>'}</td>
                    </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) {
    content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`;
  }
}

window.saveAiAdProviders = async function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  try {
    const { data: current } = await supabase.from('ai_settings').select('ai_ad_video_providers').limit(1).maybeSingle();
    const existing = getAiAdProviderConfig(current?.ai_ad_video_providers);
    const existingMap = new Map(existing.map((p) => [p.id, p]));
    const providers = AI_AD_VIDEO_PROVIDERS.map((provider) => {
      const id = provider.id;
      const prev = existingMap.get(id) || {};
      const typedKey = String(data[`provider_${id}_api_key`] || '').trim();
      return {
        id,
        name: provider.name,
        enabled: fd.get(`provider_${id}_enabled`) === 'on',
        apiKey: typedKey || prev.apiKey || '',
        model: String(data[`provider_${id}_model`] || '').trim(),
        baseUrl: String(data[`provider_${id}_base_url`] || '').trim(),
      };
    });

    await saveAiSettingsPatch({ ai_ad_video_providers: providers });
    showToast('AI advertisement provider settings saved.', 'success');
    renderAiMarketingStudio();
  } catch (err) {
    showToast('Failed to save providers: ' + err.message, 'error');
  }
};

window.generateAiAdScript = async function() {
  const brief = document.getElementById('ai-ad-brief')?.value?.trim();
  const goal = document.getElementById('ai-ad-goal')?.value || 'Product launch';
  const providerSelect = document.getElementById('ai-ad-provider');
  const scriptEl = document.getElementById('ai-ad-script');

  if (!brief) {
    showToast('Enter campaign brief first.', 'error');
    return;
  }
  if (!scriptEl) return;

  scriptEl.value = 'Generating script...';
  try {
    const prompt = [
      'Create a short video advertisement script for an ecommerce marketplace.',
      `Goal: ${goal}`,
      `Brief: ${brief}`,
      'Return only plain text in this exact structure:',
      'Headline:',
      'Voiceover:',
      'On-screen text:',
      'CTA:',
    ].join('\n');

    const result = await aiClient.prompt(prompt, {
      onProviderSwitch: (name) => {
        scriptEl.value = `Generating with ${name}...`;
      },
    });

    scriptEl.value = result.text || '';
    await appendAiAdHistory({
      created_at: new Date().toISOString(),
      goal,
      brief,
      provider_name: result.provider,
      provider_id: providerSelect?.value || '',
      status: 'script_generated',
      script: result.text || '',
      video_url: null,
    });
    showToast(`Script generated with ${result.provider}.`, 'success');
  } catch (err) {
    scriptEl.value = '';
    showToast('Script generation failed: ' + err.message, 'error');
  }
};

window.activateAiAdvertisement = async function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const goal = String(fd.get('goal') || 'Product launch');
  const providerId = String(fd.get('provider_id') || '');
  const providerName = AI_AD_VIDEO_PROVIDERS.find((p) => p.id === providerId)?.name || providerId;
  const brief = String(fd.get('brief') || '').trim();
  const script = String(fd.get('script') || '').trim();
  const videoUrl = String(fd.get('video_url') || '').trim();
  const duration = Math.max(5, Math.min(900, parseInt(String(fd.get('duration_seconds') || '30'), 10) || 30));
  const now = Date.now();
  const startsAt = new Date(now).toISOString();
  const endsAt = new Date(now + duration * 1000).toISOString();

  if (!videoUrl) {
    showToast('Video URL is required.', 'error');
    return;
  }

  try {
    const payload = {
      ai_ad_enabled: true,
      ai_ad_video_url: videoUrl,
      ai_ad_badge: String(fd.get('badge') || 'AI Advertisement').trim() || 'AI Advertisement',
      ai_ad_title: String(fd.get('title') || '').trim(),
      ai_ad_cta_label: String(fd.get('cta_label') || 'Shop Now').trim() || 'Shop Now',
      ai_ad_duration_seconds: duration,
      ai_ad_muted: fd.get('muted') === 'on',
      ai_ad_provider_id: providerId,
      ai_ad_starts_at: startsAt,
      ai_ad_ends_at: endsAt,
      ai_ad_updated_at: new Date().toISOString(),
    };

    await saveSiteSettingsPatch(payload);

    await appendAiAdHistory({
      created_at: startsAt,
      goal,
      brief,
      provider_name: providerName,
      provider_id: providerId,
      status: 'active',
      script,
      video_url: videoUrl,
      ends_at: endsAt,
    });

    showToast('AI advertisement activated. Homepage will switch to AI video now.', 'success');
    renderAiMarketingStudio();
  } catch (err) {
    showToast('Failed to activate AI advertisement: ' + err.message, 'error');
  }
};

window.deactivateAiAdvertisement = async function() {
  try {
    await saveSiteSettingsPatch({
      ai_ad_enabled: false,
      ai_ad_updated_at: new Date().toISOString(),
    });
    await appendAiAdHistory({
      created_at: new Date().toISOString(),
      goal: 'Manual stop',
      provider_name: 'Admin',
      provider_id: 'manual',
      status: 'inactive',
      script: '',
      video_url: null,
    });
    showToast('AI advertisement stopped.', 'success');
    renderAiMarketingStudio();
  } catch (err) {
    showToast('Failed to stop AI advertisement: ' + err.message, 'error');
  }
};

// ══════════════════════════════════════════════════════════
//  12. CONTENT MANAGER
// ══════════════════════════════════════════════════════════
async function renderContent() {
  const content = document.getElementById('content');
  try {
    const { data: settings } = await supabase.from('site_settings').select('*').limit(1).maybeSingle();
    const s = settings || {};
    content.innerHTML = `
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Website Content Manager</h2>
        <form id="content-form" onsubmit="saveContent(event)" class="space-y-5">
          ${[
            { section: 'Site Identity', fields: [
               { key: 'site_name', label: 'Site Name', type: 'text', placeholder: 'Weverse Online Shop' },
              { key: 'site_tagline', label: 'Tagline / Slogan', type: 'text', placeholder: 'Premium International Commerce' },
              { key: 'site_description', label: 'Site Description (SEO)', type: 'textarea', placeholder: 'Your trusted global shop…' },
            ]},
            { section: 'Contact Information', fields: [
              { key: 'contact_email', label: 'Contact Email', type: 'email', placeholder: 'support@example.com' },
              { key: 'contact_phone', label: 'Contact Phone', type: 'tel', placeholder: '+1 234 567 8900' },
              { key: 'contact_address', label: 'Business Address', type: 'textarea', placeholder: '123 Main St, City, Country' },
              { key: 'whatsapp_number', label: 'WhatsApp Number', type: 'tel', placeholder: '+1 234 567 8900' },
            ]},
            { section: 'Hero Section', fields: [
              { key: 'hero_headline', label: 'Hero Headline', type: 'text', placeholder: 'Global Online Marketplace' },
              { key: 'hero_subtext', label: 'Hero Subtext', type: 'textarea', placeholder: 'Shop premium products…' },
              { key: 'hero_cta_text', label: 'CTA Button Text', type: 'text', placeholder: 'Shop Now' },
            ]},
            { section: 'Social Media', fields: [
              { key: 'facebook_url', label: 'Facebook URL', type: 'url', placeholder: 'https://facebook.com/…' },
              { key: 'instagram_url', label: 'Instagram URL', type: 'url', placeholder: 'https://instagram.com/…' },
              { key: 'twitter_url', label: 'Twitter / X URL', type: 'url', placeholder: 'https://twitter.com/…' },
              { key: 'youtube_url', label: 'YouTube URL', type: 'url', placeholder: 'https://youtube.com/…' },
              { key: 'tiktok_url', label: 'TikTok URL', type: 'url', placeholder: 'https://tiktok.com/…' },
            ]},
          ].map(sec => `
            <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
              <h3 class="text-sm font-black text-white mb-4">${sec.section}</h3>
              <div class="form-grid form-grid-2">
                ${sec.fields.map(f => `
                  <div ${f.type === 'textarea' ? 'class="sm:col-span-2"' : ''}>
                    <label class="lbl">${f.label}</label>
                    ${f.type === 'textarea'
                      ? `<textarea class="input-field" name="${f.key}" placeholder="${esc(f.placeholder)}" rows="2">${esc(s[f.key] || '')}</textarea>`
                      : `<input type="${f.type}" class="input-field" name="${f.key}" value="${esc(s[f.key] || '')}" placeholder="${esc(f.placeholder)}">`}
                  </div>`).join('')}
              </div>
            </div>`).join('')}
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save Content Settings</button>
        </form>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

window.saveContent = async function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  const { error } = await supabase.from('site_settings').upsert({ id: 1, ...data });
  if (error) { showToast(error.message, 'error'); return; }
  showToast('Content settings saved!');
};

// ══════════════════════════════════════════════════════════
//  13. ANALYTICS
// ══════════════════════════════════════════════════════════
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

// ══════════════════════════════════════════════════════════
//  14. SEO
// ══════════════════════════════════════════════════════════
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
          <div><label class="lbl">Meta Description</label><textarea class="input-field" name="meta_description" rows="2" placeholder="Your trusted global shop…">${esc(d.meta_description || '')}</textarea></div>
          <div><label class="lbl">Meta Keywords (comma separated)</label><input class="input-field" name="meta_keywords" value="${esc(d.meta_keywords || '')}" placeholder="global marketplace, online shopping, …"></div>
          <div><label class="lbl">Canonical URL</label><input class="input-field" name="canonical_url" value="${esc(d.canonical_url || '')}" placeholder="https://yoursite.com"></div>
          <div><label class="lbl">OG Image URL (Social share image)</label><input class="input-field" name="og_image" value="${esc(d.og_image || '')}" placeholder="https://…/og-image.jpg"></div>
          <div><label class="lbl">Google Analytics ID</label><input class="input-field" name="ga_id" value="${esc(d.ga_id || '')}" placeholder="G-XXXXXXXXXX"></div>
          <div><label class="lbl">Google Search Console Verification</label><input class="input-field" name="gsc_verify" value="${esc(d.gsc_verify || '')}" placeholder="Verification meta tag content"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save SEO Settings</button>
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

// ══════════════════════════════════════════════════════════
//  15. EMAIL SETTINGS
// ══════════════════════════════════════════════════════════
async function renderEmail() {
  const content = document.getElementById('content');
  const { data: s } = await supabase.from('site_settings').select('*').limit(1).maybeSingle();
  const d = s || {};
  content.innerHTML = `
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">Email Settings</h2>
      <div class="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl text-xs text-blue-300">Email is handled by Supabase Auth's built-in SMTP. Configure SMTP in your Supabase project → Auth → SMTP Settings.</div>
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
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save Email Settings</button>
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

// ══════════════════════════════════════════════════════════
//  16. SECURITY  (2FA setup + login history + logout all)
// ══════════════════════════════════════════════════════════
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
            <p class="text-sm font-black ${is2FAEnrolled ? 'text-emerald-300' : 'text-amber-300'}">Two-Factor Authentication is ${is2FAEnrolled ? 'ENABLED ✓' : 'NOT ENABLED'}</p>
            <p class="text-xs text-gray-400 mt-0.5">${is2FAEnrolled ? `Backup codes available: ${backupCount} · Enrolled: ${fmtDate(twofa.created_at)}` : 'Enable 2FA to protect your admin account with an authenticator app.'}</p>
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
                <p class="text-[11px] text-gray-500">${esc(navigator.userAgent.slice(0, 60))}…</p>
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
                    const eventLabel = { login_success:'Login ✓', login_failed:'Failed Login ✗', login_denied:'Access Denied ✗', login_2fa_success:'2FA Verified ✓', login_backup_code_used:'Backup Code Used', logout:'Logged Out', logout_all_devices:'Logout All Devices' }[l.event_type] || l.event_type;
                    return `<tr>
                      <td><span class="text-xs font-bold ${eventColor}">${esc(eventLabel)}</span></td>
                      <td><span class="text-xs font-mono text-gray-300">${esc(l.ip_address || '—')}</span></td>
                      <td class="hidden sm:table-cell"><span class="text-xs text-gray-500 max-w-[160px] block truncate">${esc((l.user_agent || '—').slice(0, 50))}</span></td>
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

// ── 2FA Setup Flow ────────────────────────────────────────
window.setup2FAFlow = async function() {
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="shield-plus" class="w-5 h-5 text-emerald-400"></i> Enable Two-Factor Authentication</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
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
            <p class="text-xs text-red-400 font-bold">⚠ These will not be shown again!</p>
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

// ══════════════════════════════════════════════════════════
//  17. ACTIVITY LOGS
// ══════════════════════════════════════════════════════════
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
                    <td><span class="text-xs text-gray-400">${esc(l.entity_type || '—')} <span class="text-gray-600">${esc(l.entity_id?.slice(0, 8) || '')}</span></span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-blue-400">${esc(l.user_email || l.user_id?.slice(0, 8) || '—')}</span></td>
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

// ══════════════════════════════════════════════════════════
//  18. BACKUP & RESTORE
// ══════════════════════════════════════════════════════════
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

// ══════════════════════════════════════════════════════════
//  19. SETTINGS
// ══════════════════════════════════════════════════════════
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
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save Settings</button>
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

// ══════════════════════════════════════════════════════════
//  HOMEPAGE BRANDING  (banner image for the homepage header)
// ══════════════════════════════════════════════════════════
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
              <span id="homepage-banner-msg">Uploading…</span>
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

// ══════════════════════════════════════════════════════════
//  BRAND MANAGER  (name · slogan · logo · verified badge · live preview)
// ══════════════════════════════════════════════════════════
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
            ${hasImg ? `<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">✓ Uploaded</span>` : `<span class="text-[9px] text-gray-600">Empty</span>`}
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

        <!-- ── LIVE PREVIEW PANEL ── -->
        <div id="live-preview-panel" class="hidden glass-soft border border-violet-500/20 rounded-2xl p-5 space-y-3">
          <h3 class="text-xs font-black text-violet-300 uppercase tracking-wider flex items-center gap-2"><i data-lucide="eye" class="w-3.5 h-3.5"></i> Live Preview — updates as you type</h3>
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
              <span class="ml-3" style="color:${esc(d.brand_secondary_color||'#3b82f6')}">All Products →</span>
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
            <p class="ml-auto text-[10px] text-gray-600">© 2026 <span id="preview-copy-name">${esc(fallbackBrandName)}</span></p>
          </div>
          <p class="text-[10px] text-gray-500">This is how your brand will appear on every page. Click Save to apply everywhere.</p>
        </div>

        <form id="brand-form" onsubmit="saveBrandSettings(event)" class="space-y-5">

          <!-- ── Brand Identity ── -->
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
                <input class="input-field" name="brand_slogan" id="inp-brand-slogan" value="${esc(fallbackBrandSlogan)}" placeholder="e.g. Global Shopping • Worldwide Delivery" oninput="updateLivePreview()">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Brand Description</label>
                <textarea class="input-field" name="brand_description" rows="2" placeholder="Short description…">${esc(d.brand_description||'')}</textarea>
              </div>
            </div>
          </div>

          <!-- ── Brand Colors ── -->
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

          <!-- ── Brand Font ── -->
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
              <p id="font-sample" class="text-sm text-white font-bold" style="font-family:'${esc(d.brand_font||'Inter')}',sans-serif">The quick brown fox jumps — 0123456789 · Weverse Online Shop</p>
            </div>
          </div>

          <!-- ── Logo & Verified Badge ── -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="image" class="w-4 h-4 text-emerald-400"></i> Logos & Verified Badge</h3>
              <p class="text-[10px] text-gray-500">PNG, SVG, WebP</p>
            </div>
            <div id="brand-upload-status" class="hidden p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300 flex items-center gap-2">
              <i data-lucide="loader-2" class="w-4 h-4 animate-spin shrink-0"></i>
              <span id="brand-upload-msg">Uploading…</span>
            </div>

            <!-- Verified Badge — highlighted at top -->
            <div class="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl space-y-3">
              <div class="flex items-center gap-2 mb-1">
                <i data-lucide="badge-check" class="w-4 h-4 text-blue-400"></i>
                <p class="text-xs font-black text-white">Verified Badge</p>
                <span class="text-[9px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-full font-bold">Shows next to your brand name</span>
              </div>
              ${imgSlot('Verification Badge Image', 'brand_badge', d.brand_badge, 'Upload your blue checkmark or any verification badge. Recommended: 64×64px PNG with transparent background.', 'blue')}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              ${imgSlot('Brand Logo / Banner Image', 'brand_logo',        fallbackBrandLogo,   'Upload your image here. This changes only the logo/banner image and keeps the other brand fields as they are.')}
              ${imgSlot('Favicon / Tab Icon',   'brand_favicon',     d.brand_favicon,     'Browser tab icon. 32×32 or 64×64px.')}
              ${imgSlot('Mobile Logo',          'brand_mobile_logo', d.brand_mobile_logo, 'Smaller logo for phones. 120×40px.')}
              ${imgSlot('Header Logo',          'brand_header_logo', d.brand_header_logo, 'Top navigation bar.')}
              ${imgSlot('Footer Logo',          'brand_footer_logo', d.brand_footer_logo, 'Website footer.')}
              ${imgSlot('Login Page Logo',      'brand_login_logo',  d.brand_login_logo,  'Shown on auth/login page.')}
              ${imgSlot('Admin Dashboard Logo', 'brand_admin_logo',  d.brand_admin_logo,  'Admin sidebar header.')}
              ${imgSlot('OG / Social Image',    'brand_og_image',    d.brand_og_image,    '1200×630px — shown when sharing links.')}
            </div>
          </div>

          <!-- ── Contact ── -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="globe" class="w-4 h-4 text-blue-400"></i> Website & Contact</h3>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Website URL</label><input class="input-field" name="brand_website_url" value="${esc(d.brand_website_url||d.production_url||'https://weverseonlineshop.com')}" placeholder="https://…"></div>
              <div><label class="lbl">Support Email</label><input type="email" class="input-field" name="brand_email" value="${esc(d.brand_email||d.contact_email||'')}" placeholder="support@…"></div>
              <div><label class="lbl">Phone / WhatsApp</label><input class="input-field" name="brand_phone" value="${esc(d.brand_phone||d.contact_phone||'')}" placeholder="+1 234…"></div>
              <div><label class="lbl">Business Address</label><input class="input-field" name="brand_address" value="${esc(d.brand_address||d.contact_address||'')}" placeholder="City, Country"></div>
            </div>
          </div>

          <div class="p-4 bg-blue-500/5 border border-blue-500/15 rounded-xl text-xs text-blue-300 flex items-start gap-3">
            <i data-lucide="info" class="w-4 h-4 shrink-0 mt-0.5 text-blue-400"></i>
            <p>After saving, your brand name, logo image, slogan, and verified badge will automatically appear on <strong>every page</strong> — Header, Footer, Login, Checkout, Contact, Admin, and all future pages. Uploading the image does not change your other brand settings.</p>
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
  if (msgEl)    msgEl.textContent = `Uploading ${file.name}…`;
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
      if (msgEl) msgEl.textContent = `✓ ${file.name} uploaded`;
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
  if (btn) { btn.disabled = true; btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Saving…'; if (window.lucide) lucide.createIcons(); }

  const { data: existing } = await supabase.from('site_settings').select('id').limit(1).maybeSingle();
  let error;
  if (existing?.id) { ({ error } = await supabase.from('site_settings').update(payload).eq('id', existing.id)); }
  else              { ({ error } = await supabase.from('site_settings').insert(payload)); }

  if (error) {
    persistBrandState(payload);
    showToast('Brand saved locally because the live settings table rejected part of the update. The site now uses the override immediately.', 'success');
  } else {
    persistBrandState(payload);
    showToast('✅ Brand saved! All pages will now show your updated brand.', 'success');
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
    btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishing…';
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

//  PAYMENT SETTINGS
// ══════════════════════════════════════════════════════════
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
            ${d.payment_mode === 'live' ? '<span class="badge bg-red-500/10 text-red-400 border-red-500/20">🔴 LIVE MODE</span>' : '<span class="badge bg-blue-500/10 text-blue-400 border-blue-500/20">🔧 Test Mode</span>'}
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
                  <div><p class="text-xs font-black text-white">🔧 Test Mode</p><p class="text-[11px] text-gray-500">Use sandbox keys — no real money</p></div>
                </label>
                <label class="flex items-center gap-3 p-3 glass-soft border ${d.payment_mode==='live' ? 'border-red-500/40 bg-red-500/5' : 'border-blue-500/10'} rounded-xl cursor-pointer">
                  <input type="radio" name="payment_mode" value="live" ${d.payment_mode==='live'?'checked':''} class="accent-red-500">
                  <div><p class="text-xs font-black text-white">🔴 Live Mode</p><p class="text-[11px] text-red-400 font-bold">Real money — use production keys</p></div>
                </label>
              </div>
              <div class="form-grid form-grid-2">
                <div><label class="lbl">Public Key *</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_public_key" placeholder="${d.flutterwave_public_key ? '••••'+d.flutterwave_public_key.slice(-4) : 'FLWPUBK_TEST-… or FLWPUBK-…'}">${d.flutterwave_public_key ? '<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>' : ''}</div></div>
                <div><label class="lbl">Secret Key *</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_secret_key" placeholder="${d.flutterwave_secret_key ? '••••'+d.flutterwave_secret_key.slice(-4) : 'FLWSECK_TEST-… or FLWSECK-…'}">${d.flutterwave_secret_key ? '<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>' : ''}</div></div>
                <div><label class="lbl">Encryption Key</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_encryption_key" placeholder="${d.flutterwave_encryption_key ? '••••'+d.flutterwave_encryption_key.slice(-4) : 'Encryption key from dashboard'}">${d.flutterwave_encryption_key ? '<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>' : ''}</div></div>
                <div><label class="lbl">Webhook Secret</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_webhook_secret" placeholder="${d.flutterwave_webhook_secret ? '••••'+d.flutterwave_webhook_secret.slice(-4) : 'Secret hash for webhook verification'}">${d.flutterwave_webhook_secret ? '<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>' : ''}</div></div>
                <div><label class="lbl">Accepted Currency</label><select class="input-field" name="flutterwave_currency">${['NGN','USD','GBP','EUR','GHS','KES','ZAR','ZMW','TZS','UGX','XAF','XOF'].map(c=>`<option value="${c}" ${(d.flutterwave_currency||'NGN')===c?'selected':''}>${c}</option>`).join('')}</select></div>
                <div><label class="lbl">Redirect URL (after payment)</label><input class="input-field" name="flutterwave_redirect_url" value="${esc(d.flutterwave_redirect_url||'')}" placeholder="${window.location.origin}/payment.html"></div>
              </div>
              <div class="p-3 bg-amber-500/5 border border-amber-500/15 rounded-xl text-[11px] text-amber-300 space-y-1">
                <p><strong>Where to get keys:</strong> <a href="https://dashboard.flutterwave.com/dashboard/settings/apis" target="_blank" class="underline hover:text-amber-200">dashboard.flutterwave.com → Settings → API</a></p>
                <p><strong>Webhook URL to add in Flutterwave:</strong> <code class="bg-black/30 px-1 rounded">${window.location.origin}/api/flutterwave-webhook</code></p>
                <p>Test cards: Visa <code class="bg-black/30 px-1 rounded">4187 4274 1556 4246</code> · PIN: <code class="bg-black/30 px-1 rounded">3310</code> · OTP: <code class="bg-black/30 px-1 rounded">12345</code></p>
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
      if (v && !v.startsWith('••••') && v.trim() !== '') payload[k] = v.trim();
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
  showToast('✅ Payment settings saved successfully!', 'success');
  setTimeout(() => renderPaymentSettings(), 500);
};

window.testFlutterwaveKeys = async function() {
  const { data: s } = await supabase.from('site_settings').select('flutterwave_public_key').limit(1).maybeSingle();
  if (!s?.flutterwave_public_key) { showToast('Save your Flutterwave public key first', 'info'); return; }
  showToast('Flutterwave key is saved. Use test mode + test card to verify a payment flow.', 'info');
};

// ══════════════════════════════════════════════════════════
//  20. PUBLISH & DEPLOY  (GitHub + Payment + Webhooks)
// ══════════════════════════════════════════════════════════
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

          <!-- ── GitHub Integration ── -->
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
                  <input type="password" class="input-field pr-16" name="github_token" placeholder="${d.github_token ? '••••' + d.github_token.slice(-4) : 'ghp_…paste your token'}">
                  ${d.github_token ? '<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>' : ''}
                </div>
                <p class="text-[10px] text-gray-500 mt-1">Generate at: <a href="https://github.com/settings/tokens" target="_blank" class="text-blue-400 hover:underline">github.com/settings/tokens</a> (needs repo scope)</p>
              </div>
            </div>
            <button type="button" onclick="testGitHubConnection()" class="btn-press flex items-center gap-2 text-xs font-bold text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2 rounded-xl transition">
              <i data-lucide="plug" class="w-4 h-4"></i> Test GitHub Connection
            </button>
          </div>

          <!-- ── Hosting & Deploy Webhook ── -->
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
              <input class="input-field" name="deploy_webhook" value="${esc(d.deploy_webhook||'')}" placeholder="https://api.netlify.com/build_hooks/…">
              <p class="text-[10px] text-gray-500 mt-1">Netlify: Site Settings → Build hooks · Vercel: Project → Settings → Git → Deploy Hooks</p>
            </div>
            <div>
              <label class="lbl">Production URL</label>
              <input class="input-field" name="production_url" value="${esc(d.production_url||'')}" placeholder="https://yoursite.com">
            </div>
          </div>

          <!-- ── Payment Settings ── -->
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
                  <input type="password" class="input-field pr-16" name="payment_public_key" placeholder="${d.payment_public_key ? '••••' + d.payment_public_key.slice(-4) : 'Paste public key…'}">
                  ${d.payment_public_key ? '<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>' : ''}
                </div>
              </div>
              <div>
                <label class="lbl">Secret / Private Key</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="payment_secret_key" placeholder="${d.payment_secret_key ? '••••' + d.payment_secret_key.slice(-4) : 'Paste secret key…'}">
                  ${d.payment_secret_key ? '<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>' : ''}
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
                  <option value="test" ${(d.payment_mode||'test')==='test'?'selected':''}>🔧 Test Mode (sandbox)</option>
                  <option value="live" ${d.payment_mode==='live'?'selected':''}>🚀 Live Mode (real money)</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Webhook Secret (for payment verification)</label>
                <input type="password" class="input-field" name="payment_webhook_secret" placeholder="${d.payment_webhook_secret ? '••••' + d.payment_webhook_secret.slice(-4) : 'Paste webhook secret…'}">
              </div>
            </div>
            <div class="p-3 bg-amber-500/5 border border-amber-500/15 rounded-xl text-[11px] text-amber-300">
              <strong>Flutterwave:</strong> flutterwave.com → Dashboard → API Settings<br>
              <strong>Stripe:</strong> dashboard.stripe.com → Developers → API Keys<br>
              <strong>PayPal:</strong> developer.paypal.com → My Apps → Create App<br>
              <strong>Paystack:</strong> dashboard.paystack.com → Settings → API Keys
            </div>
          </div>

          <!-- ── Environment Variables Guide ── -->
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
              <p>VITE_FLUTTERWAVE_PUBLIC_KEY=<span class="text-amber-400">FLWPUBK_TEST-…</span></p>
              <p>VITE_STRIPE_PUBLIC_KEY=<span class="text-amber-400">pk_test_…</span></p>
              <p class="text-gray-600 mt-2"># AI (server-side only — Edge Functions)</p>
              <p>GEMINI_API_KEY=<span class="text-emerald-400">AIzaSy…</span></p>
              <p>GROQ_API_KEY=<span class="text-emerald-400">gsk_…</span></p>
            </div>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            💾 Save Deploy & Payment Settings
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
    submitBtn.innerHTML = 'Saving…';
  }
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  const payload = {};
  // Save all fields; only update secret fields if new non-masked value provided
  const secretFields = ['github_token','payment_public_key','payment_secret_key','payment_webhook_secret'];
  for (const [k, v] of Object.entries(data)) {
    if (secretFields.includes(k)) {
      if (v && !v.startsWith('•') && v.trim() !== '') payload[k] = v.trim();
    } else {
      payload[k] = v;
    }
  }
  const { error } = await supabase.from('site_settings').upsert({ id: 1, ...payload });
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '💾 Save Deploy & Payment Settings';
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
  setActionButtonBusy(btn, true, 'Deploying…', 'Deploy Now');
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
      showToast('🚀 Deployment triggered! Your site will be live in ~2 minutes.');
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
    setActionButtonBusy(btn, false, 'Deploying…', 'Deploy Now');
  }
};

window.triggerRebuild = async function(ev) {
  const btn = ev?.currentTarget || document.querySelector('[data-rebuild-btn]');
  setActionButtonBusy(btn, true, 'Rebuilding…', 'Rebuild Site');
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
      showToast('🔄 Rebuild triggered successfully.');
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
    setActionButtonBusy(btn, false, 'Rebuilding…', 'Rebuild Site');
  }
};

window.publishAndDeploy = async function(ev) {
  const btn = ev?.currentTarget || document.querySelector('[data-publish-easy-btn]');
  setActionButtonBusy(btn, true, 'Publishing…', 'One-Click Publish');
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
    setActionButtonBusy(btn, false, 'Publishing…', 'One-Click Publish');
  }
};

// ── Reindex Search ─────────────────────────────────────────
// Manually rebuilds the search index for all listings. The DB has an automatic
// AFTER INSERT/UPDATE/DELETE trigger (sync_search_index) on showroom_listings,
// so touching each row (updated_at) forces the index to rebuild for every item.
window.reindexSearch = async function() {
  const btn = document.querySelector('[data-publish-easy-btn]') || document.querySelector('[data-rebuild-btn]');
  const label = btn?.querySelector('p.text-xs.font-black');
  const origLabel = label?.textContent || '';
  if (label) label.textContent = 'Reindexing…';
  try {
    const { data: listings, error } = await supabase
      .from('showroom_listings')
      .select('id, updated_at')
      .order('updated_at', { ascending: false });

    if (error) {
      if (isRlsDenied(error)) return showToast('⚠️ Reindex blocked: database admin role rejected the read. Re-run the admin permission migration.', 'error');
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
      if (label) label.textContent = `Reindexing… ${Math.min(i + BATCH, ids.length)}/${ids.length}`;
    }

    if (denied) {
      showToast(`⚠️ Reindex partially blocked: database admin role rejected some writes. Re-run the admin permission migration. (${success}/${ids.length} done)`, 'error');
      return;
    }
    showToast(`Search index rebuilt for ${success} listing${success !== 1 ? 's' : ''}${failed ? ` (${failed} failed)` : ''}.`, failed ? 'error' : 'success');
  } catch (err) {
    showToast('Reindex failed: ' + err.message, 'error');
  } finally {
    if (label) label.textContent = origLabel;
  }
};

// ── Sync Showroom To DB ────────────────────────────────────
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
  if (label) label.textContent = 'Syncing…';
  try {
    // Load existing property_ids so we only insert missing items.
    const { data: existing, error: readErr } = await supabase
      .from('showroom_listings')
      .select('property_id');

    if (readErr) {
      if (isRlsDenied(readErr)) return showToast('⚠️ Sync blocked: database admin role rejected the read. Re-run the admin permission migration.', 'error');
      return showToast('Could not load existing listings: ' + readErr.message, 'error');
    }

    const existingIds = new Set((existing || []).map(r => r.property_id));
    const missing = SHOWROOM_LISTINGS.filter(item => item && item.property_id && !existingIds.has(item.property_id));

    if (!missing.length) {
      showToast('Showroom already in sync — no new listings to add.');
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
      if (label) label.textContent = `Syncing… ${Math.min(i + BATCH, missing.length)}/${missing.length}`;
    }

    if (denied) {
      showToast(`⚠️ Sync partially blocked: database admin role rejected some inserts. Re-run the admin permission migration. (${inserted}/${missing.length} added)`, 'error');
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
      showToast(`✓ Connected: ${data.full_name} (${data.visibility})`);
    } else if (res.status === 404) {
      showToast('Repository not found. Check username and repo name.', 'error');
    } else {
      showToast('GitHub API error: ' + res.status, 'error');
    }
  } catch { showToast('Could not reach GitHub API', 'error'); }
};

window.deployToProduction = window.triggerDeploy;
window.rebuildSite = window.triggerRebuild;

// ══════════════════════════════════════════════════════════
//  CATALOG MANAGER
// ══════════════════════════════════════════════════════════
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
        <p class="text-xs text-gray-500 mt-1">Deterministic storefront items. Hiding a listing removes it from the site everywhere — including direct links.</p>
      </div>
      <button onclick="catalogResetHidden()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition">Show All Hidden</button>
    </div>`;

  const pills = `
    <div class="flex flex-wrap gap-2">
      ${categories.map(c => `<button onclick="catalogSetCategory('${c.slug}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${catalogUi.category === c.slug ? 'bg-blue-500/20 text-blue-200 border-blue-500/40' : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'}">${esc(c.name)}</button>`).join('')}
    </div>`;

  const search = `
    <div class="flex flex-wrap items-center gap-2">
      <input id="catalog-search-input" class="input-field flex-1 min-w-[220px]" placeholder="Search title, id or subcategory…" value="${esc(catalogUi.query)}" onkeyup="if (event.key === 'Enter') catalogSearch()">
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
              <p class="text-[11px] text-gray-500 truncate">${esc(p.property_id)} · ${esc(p.subcategory || p.category || '')} · ${fmtMoney(p.price, 'USD')}</p>
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
      <p class="text-xs text-gray-500">${q ? `${filtered.length} match` : `${count.toLocaleString()} items in ${esc(def?.name || '')}`} · ${hidden.size} hidden</p>
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

// ══════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════
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

// ══════════════════════════════════════════════════════════
//  GENERAL AI ASSISTANT FUNCTIONS
// ══════════════════════════════════════════════════════════
window.aiChatHistory = [];
window.aiProductType = 'product';

async function aiGenerateProduct() {
  const prompt = document.getElementById('ai-prompt')?.value?.trim();
  const productType = document.getElementById('ai-product-type')?.value || 'product';
  const file = document.getElementById('ai-image-upload')?.files[0];
  
  if (!prompt && !file) {
    showToast('Please enter a prompt or upload an image');
    return;
  }
  
  // Add user message to chat
  window.aiChatHistory.push({
    type: 'user',
    sender: 'You',
    content: prompt || 'Uploaded image'
  });
  renderAiChatHistory();
  
  // Clear prompt
  const aiPromptEl = document.getElementById('ai-prompt');
  if (aiPromptEl) aiPromptEl.value = '';
  
  // Show loading
  showToast('AI is analyzing...');
  
  try {
    // Prepare image if uploaded
    let imageDataUrl = null;
    if (file) {
      imageDataUrl = await fileToDataUrl(file);
    }
    
    // Call AI edge function
    const body = {
      action: 'generate_product',
      prompt: prompt || 'Create a product listing',
      product_type: productType,
      image: imageDataUrl,
      catalog_context: await getProductContext()
    };
    
    const res = await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers: await getAuthHeaders(),
      body: JSON.stringify(body)
    });
    
    const data = await res.json();
    
    if (data.success && data.product) {
      // Show review card before saving
      openListingReviewCard(data.product, { source: 'ai_general' });
      showToast('Product generated! Review before saving.');
    } else {
      showToast(data.error || 'AI generation failed');
    }
  } catch (err) {
    showToast('Error: ' + err.message);
    console.error('[AI] Generate product error:', err);
  }
}

async function getProductContext() {
  try {
    const { data: products } = await supabase.from('showroom_listings')
      .select('*').neq('listing_type', 'property').limit(20);
    return products || [];
  } catch {
    return [];
  }
}

async function aiFixDuplicates() {
  showToast('AI is scanning for duplicates...');
  
  try {
    const { data: products } = await supabase.from('showroom_listings')
      .select('*').neq('listing_type', 'property');
    const items = data || [];
    
    // Simple dedup by title similarity
    const unique = [];
    const seenTitles = new Set();
    
    for (const product of items) {
      const titleLower = (product.title || '').toLowerCase().trim();
      if (!seenTitles.has(titleLower)) {
        seenTitles.add(titleLower);
        unique.push(product);
      }
    }
    
    // For duplicates, generate new ones
    const duplicates = items.length - unique.length;
    if (duplicates > 0) {
      window.aiChatHistory.push({
        type: 'ai',
        sender: 'General AI',
        content: `Found ${duplicates} duplicate products. I will generate ${duplicates} new unique items to replace them.`
      });
      renderAiChatHistory();
      
      // Generate new products for each duplicate slot
      for (let i = 0; i < duplicates; i++) {
        await aiGenerateProduct();
      }
    }
    
    showToast(`Fixed ${duplicates} duplicates. Generated ${duplicates} new products.`);
  } catch (err) {
    showToast('Error fixing duplicates: ' + err.message);
  }
}

async function aiCleanupNames() {
  showToast('AI is cleaning up product names...');
  
  try {
    const { data: products } = await supabase.from('showroom_listings')
      .select('*').neq('listing_type', 'property');
    const items = data || [];
    
    let fixed = 0;
    const updates = [];
    
    for (const product of items) {
      let name = product.title || '';
      // Basic cleanup: trim, fix common issues
      name = name.replace(/^['"]|['"]$/g, '').trim();
      name = name.replace(/\s+/g, ' ');
      name = name.charAt(0).toUpperCase() + name.slice(1);
      
      if (name !== (product.title || '')) {
        updates.push({
          id: product.property_id,
          updates: { title: name }
        });
        fixed++;
      }
    }
    
    // Apply fixes in batches
    for (const update of updates) {
      await supabase.from('showroom_listings')
        .update({ title: update.updates.title })
        .eq('property_id', update.id);
    }
    
    window.aiChatHistory.push({
      type: 'ai',
      sender: 'General AI',
      content: `Fixed names for ${fixed} products.`
    });
    renderAiChatHistory();
    
    showToast(`Fixed names for ${fixed} products`);
  } catch (err) {
    showToast('Error cleaning names: ' + err.message);
  }
}

async function aiCheckHealth() {
  showToast('AI is checking product health...');
  
  try {
    const { data: products } = await supabase.from('showroom_listings')
      .select('*').neq('listing_type', 'property');
    const items = data || [];
    
    let issues = 0;
    const issuesList = [];
    
    for (const product of items) {
      const title = product.title || '';
      const price = product.price || 0;
      const category = product.category || '';
      
      // Check for common issues
      if (!title || title.length < 5) {
        issuesList.push({ product: product.property_id, issue: 'Short title' });
        issues++;
      }
      if (price <= 0) {
        issuesList.push({ product: product.property_id, issue: 'Invalid price' });
        issues++;
      }
      if (!category) {
        issuesList.push({ product: product.property_id, issue: 'Missing category' });
        issues++;
      }
    }
    
    window.aiChatHistory.push({
      type: 'ai',
      sender: 'General AI',
      content: `Health check complete. Found ${issues} issues across ${items.length} products.`
    });
    renderAiChatHistory();
    
    showToast(`Health check: ${issues} issues found`);
  } catch (err) {
    showToast('Error checking health: ' + err.message);
  }
}

async function aiGenerateRandomProduct() {
  showToast('AI is generating a random product...');
  
  try {
    const productType = document.getElementById('ai-product-type')?.value || 'product';
    
    const body = {
      action: 'generate_product',
      prompt: 'Create a random ' + productType + ' product listing',
      product_type: productType,
      catalog_context: await getProductContext()
    };
    
    const res = await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers: await getAuthHeaders(),
      body: JSON.stringify(body)
    });
    
    const data = await res.json();
    
    if (data.success && data.product) {
      openListingReviewCard(data.product, { source: 'ai_general' });
      showToast('Random product generated! Review and save.');
    } else {
      showToast(data.error || 'Generation failed');
    }
  } catch (err) {
    showToast('Error: ' + err.message);
  }
}

async function aiOptimizePricing() {
  showToast('AI is optimizing prices...');
  
  try {
    const { data: products } = await supabase.from('showroom_listings')
      .select('*').neq('listing_type', 'property');
    const items = data || [];
    
    let optimized = 0;
    
    for (const product of items) {
      const title = product.title || '';
      const currentPrice = product.price || 0;
      const category = product.category || 'general';
      
      // Simple price optimization based on category
      let newPrice = currentPrice;
      if (category.toLowerCase().includes('electron') || category.toLowerCase().includes('gadget')) {
        newPrice = Math.round(currentPrice * 1.1); // 10% premium for tech
      } else if (category.toLowerCase().includes('fashion') || category.toLowerCase().includes('cloth')) {
        newPrice = Math.round(currentPrice * 0.9); // 10% discount for fashion
      } else if (currentPrice < 20) {
        newPrice = Math.round(currentPrice * 1.2); // Minimums
      }
      
      if (newPrice !== currentPrice) {
        await supabase.from('showroom_listings')
          .update({ price: newPrice })
          .eq('property_id', product.property_id);
        optimized++;
      }
    }
    
    window.aiChatHistory.push({
      type: 'ai',
      sender: 'General AI',
      content: `Optimized prices for ${optimized} products.`
    });
    renderAiChatHistory();
    
    showToast(`Optimized ${optimized} prices`);
  } catch (err) {
    showToast('Error optimizing prices: ' + err.message);
  }
}

async function aiRearrangeGallery() {
  showToast('AI is rearranging galleries...');
  
  try {
    const { data: products } = await supabase.from('showroom_listings')
      .select('*').neq('listing_type', 'property').limit(10);
    const items = data || [];
    
    let rearranged = 0;
    
    for (const product of items) {
      // Reorder images - just reassign (in real implementation, would use AI to reorder)
      if (product.images && product.images.length > 1) {
        // Shuffle images randomly as demo
        const shuffled = [...product.images].sort(() => Math.random() - 0.5);
        await supabase.from('showroom_listings')
          .update({ images: shuffled })
          .eq('property_id', product.property_id);
        rearranged++;
      }
    }
    
    window.aiChatHistory.push({
      type: 'ai',
      sender: 'General AI',
      content: `Rearranged galleries for ${rearranged} products.`
    });
    renderAiChatHistory();
    
    showToast(`Rearranged ${rearranged} galleries`);
  } catch (err) {
    showToast('Error rearranging galleries: ' + err.message);
  }
}

async function aiFullCleanup() {
  if (!confirm('AI will perform full showroom cleanup. This will: fix duplicates, rename products, optimize prices, and rearrange galleries. Continue?')) return;
  
  showToast('AI is performing full cleanup...');
  window.aiChatHistory.push({
    type: 'ai',
    sender: 'General AI',
    content: 'Starting full showroom cleanup...'
  });
  renderAiChatHistory();
  
  try {
    // Run all cleanup functions in sequence
    await aiFixDuplicates();
    await aiCleanupNames();
    await aiOptimizePricing();
    await aiRearrangeGallery();
    
    window.aiChatHistory.push({
      type: 'ai',
      sender: 'General AI',
      content: 'Full showroom cleanup complete!'
    });
    renderAiChatHistory();
    
    showToast('Full cleanup complete!');
  } catch (err) {
    showToast('Error during cleanup: ' + err.message);
  }
}

async function handleAiMessage(message) {
  const lower = message.toLowerCase();
  
  // Command handlers
  if (lower.includes('fix duplicate') || lower.includes('remove duplicate')) {
    aiFixDuplicates();
    return;
  }
  if (lower.includes('clean name') || lower.includes('fix name')) {
    aiCleanupNames();
    return;
  }
  if (lower.includes('health check') || lower.includes('check health')) {
    aiCheckHealth();
    return;
  }
  if (lower.includes('random product')) {
    aiGenerateRandomProduct();
    return;
  }
  if (lower.includes('optimize price') || lower.includes('price fix')) {
    aiOptimizePricing();
    return;
  }
  if (lower.includes('rearrange') || lower.includes('gallery')) {
    aiRearrangeGallery();
    return;
  }
  if (lower.includes('full cleanup') || lower.includes('clean up')) {
    aiFullCleanup();
    return;
  }
  if (lower.includes('generate product') || lower.includes('create product')) {
    aiGenerateProduct();
    return;
  }
  
  // Default: treat as a generation prompt
  document.getElementById('ai-prompt').value = message;
  aiGenerateProduct();
}

// Add event listener for chat input
document.getElementById('ai-prompt')?.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    aiGenerateProduct();
  }
});

// Update the navigate function to include general-ai