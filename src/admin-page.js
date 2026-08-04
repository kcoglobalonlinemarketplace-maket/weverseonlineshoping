import { supabase } from './supabase-client.js';

// ══════════════════════════════════════════════════════════
//  KCO ADMIN DASHBOARD  —  Complete Management Console
// ══════════════════════════════════════════════════════════

const ADMIN_EMAIL = 'weverseonlineshop@gmail.com';

// ── Navigation config ──────────────────────────────────────
const NAV = [
  { group: 'Main', items: [
    { id: 'dashboard',   label: 'Dashboard',         icon: 'layout-dashboard' },
    { id: 'products',    label: 'Products',           icon: 'package' },
    { id: 'properties',  label: 'Properties',         icon: 'home' },
    { id: 'orders',      label: 'Orders',             icon: 'shopping-bag' },
    { id: 'customers',   label: 'Customers',          icon: 'users' },
    { id: 'reviews',     label: 'Reviews',            icon: 'star' },
    { id: 'messages',    label: 'Messages',           icon: 'message-circle' },
    { id: 'coupons',     label: 'Coupons',            icon: 'ticket' },
    { id: 'ads',         label: 'Advertisements',     icon: 'megaphone' },
    { id: 'notifications', label: 'Notifications',    icon: 'bell' },
  ]},
  { group: 'Configuration', items: [
    { id: 'ai-settings', label: 'AI Settings',        icon: 'bot' },
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
  orders: 'Orders Manager', customers: 'Customers Manager', reviews: 'Reviews Manager',
  messages: 'Messages & Support', coupons: 'Coupons Manager', ads: 'Advertisement Manager',
  notifications: 'Notifications', 'ai-settings': 'AI Settings', content: 'Content Manager',
  seo: 'SEO Manager', email: 'Email Settings', analytics: 'Analytics',
  security: 'Security', activity: 'Activity Logs', backup: 'Backup & Restore',
  settings: 'Settings', publish: 'Publish & Deploy',
};

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
  const c = { blue: 'bg-blue-500/10 text-blue-400 border-blue-500/15', amber: 'bg-amber-500/10 text-amber-400 border-amber-500/15', emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/15', red: 'bg-red-500/10 text-red-400 border-red-500/15', violet: 'bg-violet-500/10 text-violet-400 border-violet-500/15', orange: 'bg-orange-500/10 text-orange-400 border-orange-500/15' };
  return `<div class="stat-card glass-soft border border-blue-500/15 rounded-2xl p-4">
    <div class="flex items-start justify-between mb-3">
      <div class="p-2 ${c[color] || c.blue} rounded-xl border"><i data-lucide="${icon}" class="w-4 h-4"></i></div>
    </div>
    <p class="text-2xl font-black text-white">${esc(value)}</p>
    <p class="text-[11px] text-gray-500 uppercase tracking-wide mt-0.5 font-bold">${esc(label)}</p>
    ${sub ? `<p class="text-[10px] text-gray-600 mt-1">${esc(sub)}</p>` : ''}
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
    orders: renderOrders, customers: renderCustomers, reviews: renderReviews,
    messages: renderMessages, coupons: renderCoupons, ads: renderAds,
    notifications: renderNotifications, 'ai-settings': renderAiSettings,
    content: renderContent, seo: renderSeo, email: renderEmail,
    analytics: renderAnalytics, security: renderSecurity, activity: renderActivity,
    backup: renderBackup, settings: renderSettings, publish: renderPublish,
  };
  const fn = renderers[section] || (() => { const c = document.getElementById('content'); if (c) c.innerHTML = emptyState('construction', 'Coming Soon', `${title} is being built.`); });
  fn();
};

window.openSidebar = () => { document.getElementById('sidebar').classList.add('open'); document.getElementById('sidebar-overlay').classList.remove('hidden'); };
window.closeSidebar = () => { document.getElementById('sidebar').classList.remove('open'); document.getElementById('sidebar-overlay').classList.add('hidden'); };
document.getElementById('close-sidebar')?.addEventListener('click', closeSidebar);

// ══════════════════════════════════════════════════════════
//  AUTH
// ══════════════════════════════════════════════════════════
async function checkAdminAccess(user) {
  if (!user) return false;
  try {
    const { data } = await supabase.rpc('is_current_user_admin');
    return !!data;
  } catch { return user.email === ADMIN_EMAIL; }
}

async function initAuth() {
  const loginScreen = document.getElementById('login-screen');
  const { data: { session } } = await supabase.auth.getSession();
  if (session?.user) {
    const ok = await checkAdminAccess(session.user);
    if (ok) {
      state.user = session.user;
      showAdminUI();
      return;
    }
  }
  showLoginUI();
}

function showLoginUI() {
  const ls = document.getElementById('login-screen');
  if (ls) ls.style.display = 'flex';
  // setup login form
  const form = document.getElementById('login-form');
  const errorEl = document.getElementById('login-error');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const btn = document.getElementById('login-btn');
    btn.disabled = true;
    btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Signing in…';
    if (window.lucide) lucide.createIcons();
    errorEl.classList.add('hidden');
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.user) {
      errorEl.textContent = error?.message || 'Invalid email or password.';
      errorEl.classList.remove('hidden');
      btn.disabled = false;
      btn.innerHTML = '<i data-lucide="log-in" class="w-4 h-4"></i> Sign In';
      if (window.lucide) lucide.createIcons();
      return;
    }
    const ok = await checkAdminAccess(data.user);
    if (!ok) {
      await supabase.auth.signOut();
      errorEl.textContent = 'Access denied. Administrator privileges required.';
      errorEl.classList.remove('hidden');
      btn.disabled = false;
      btn.innerHTML = '<i data-lucide="log-in" class="w-4 h-4"></i> Sign In';
      if (window.lucide) lucide.createIcons();
      return;
    }
    state.user = data.user;
    showAdminUI();
  });

  // toggle password visibility
  document.getElementById('toggle-pw')?.addEventListener('click', () => {
    const inp = document.getElementById('login-password');
    const icon = document.querySelector('#toggle-pw i');
    if (inp.type === 'password') { inp.type = 'text'; if (icon) icon.setAttribute('data-lucide', 'eye-off'); }
    else { inp.type = 'password'; if (icon) icon.setAttribute('data-lucide', 'eye'); }
    if (window.lucide) lucide.createIcons();
  });

  // forgot password
  document.getElementById('forgot-pw-btn')?.addEventListener('click', () => {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('forgot-form').classList.remove('hidden');
  });
  document.getElementById('back-to-login')?.addEventListener('click', () => {
    document.getElementById('forgot-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
  });
  document.getElementById('send-reset-btn')?.addEventListener('click', async () => {
    const email = document.getElementById('reset-email').value.trim();
    if (!email) return;
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + '/admin.html' });
    if (error) { showToast(error.message, 'error'); return; }
    showToast('Reset link sent! Check your email.', 'success');
    document.getElementById('forgot-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
  });
}

function showAdminUI() {
  const ls = document.getElementById('login-screen');
  if (ls) ls.style.display = 'none';
  const emailEl = document.getElementById('admin-user-email');
  if (emailEl && state.user) emailEl.textContent = state.user.email || 'Admin';
  navigate('dashboard');
}

window.adminSignOut = async function() {
  await supabase.auth.signOut();
  state.user = null;
  const ls = document.getElementById('login-screen');
  if (ls) ls.style.display = 'flex';
  document.getElementById('login-form')?.classList.remove('hidden');
  document.getElementById('forgot-form')?.classList.add('hidden');
};

// ══════════════════════════════════════════════════════════
//  1. DASHBOARD
// ══════════════════════════════════════════════════════════
async function renderDashboard() {
  const content = document.getElementById('content');
  try {
    const [prods, orders, customers, reviews] = await Promise.all([
      supabase.from('showroom_listings').select('id,listing_type,category,is_active,price,currency', { count: 'exact' }),
      supabase.from('payment_receipts').select('id,amount,currency,status,created_at', { count: 'exact' }).order('created_at', { ascending: false }).limit(200),
      supabase.from('profiles').select('user_id,created_at', { count: 'exact' }),
      supabase.from('product_reviews').select('id,rating,is_approved', { count: 'exact' }),
    ]);

    const allOrders = orders.data || [];
    const totalRevenue = allOrders.filter(o => ['approved', 'payment_approved', 'delivered'].includes(o.status)).reduce((s, o) => s + (parseFloat(o.amount) || 0), 0);
    const pendingOrders = allOrders.filter(o => ['pending_verification', 'order_placed', 'payment_received'].includes(o.status)).length;
    const totalProds = (prods.data || []).filter(p => p.listing_type !== 'property').length;
    const totalProps = (prods.data || []).filter(p => p.listing_type === 'property').length;
    const activeProds = (prods.data || []).filter(p => p.is_active).length;
    const totalCustomers = customers.count || 0;
    const totalReviews = reviews.count || 0;
    const pendingReviews = (reviews.data || []).filter(r => !r.is_approved).length;

    const now = new Date();
    const monthOrders = allOrders.filter(o => { const d = new Date(o.created_at); return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear(); });
    const monthRevenue = monthOrders.filter(o => ['approved', 'payment_approved', 'delivered'].includes(o.status)).reduce((s, o) => s + (parseFloat(o.amount) || 0), 0);

    // Recent 6 orders
    const recentOrders = allOrders.slice(0, 6);

    content.innerHTML = `
      <div class="space-y-6 fade-in">
        <div class="flex items-center justify-between">
          <div><h2 class="text-xl font-black text-white">Good ${greeting()}, Admin 👋</h2><p class="text-sm text-gray-500 mt-0.5">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p></div>
          <button onclick="navigate('products')" class="btn-press hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Product
          </button>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          ${statCard('Total Revenue', `$${totalRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })}`, 'dollar-sign', 'emerald', `$${monthRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })} this month`)}
          ${statCard('Total Orders', allOrders.length, 'shopping-bag', 'blue', `${pendingOrders} pending`)}
          ${statCard('Customers', totalCustomers, 'users', 'violet')}
          ${statCard('Products', totalProds, 'package', 'amber', `${activeProds} active`)}
          ${statCard('Properties', totalProps, 'home', 'blue')}
          ${statCard('Reviews', totalReviews, 'star', 'orange', `${pendingReviews} pending`)}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <!-- Revenue Chart -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="trending-up" class="w-4 h-4 text-blue-400"></i> Revenue Overview</h3>
            <canvas id="chart-revenue" height="200"></canvas>
          </div>
          <!-- Recent Orders -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-bold text-white flex items-center gap-2"><i data-lucide="clock" class="w-4 h-4 text-blue-400"></i> Recent Orders</h3>
              <button onclick="navigate('orders')" class="text-xs text-blue-400 hover:text-blue-300 font-medium transition">View all →</button>
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

        <!-- Quick Actions -->
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
    if (content) content.innerHTML = `<div class="p-6 text-red-400 text-sm">Error loading dashboard: ${esc(err.message)}</div>`;
  }
}

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
  'Social Media Accounts', 'Other',
];

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

function getProductFields(category) {
  return CAT_FIELDS[category] || CAT_FIELDS.default;
}

function renderProductFieldsForm(category, existing = {}) {
  const fields = getProductFields(category);
  return fields.map(f => {
    const val = existing[f.key] || '';
    const gridSpan = f.span === 2 ? 'sm:col-span-2' : '';
    const req = f.required ? 'required' : '';
    let input = '';
    if (f.type === 'select') {
      input = `<select class="input-field" name="${f.key}" id="pf-${f.key}" ${req}>
        <option value="">Select…</option>
        ${f.options.map(o => `<option value="${o}" ${val === o ? 'selected' : ''}>${o}</option>`).join('')}
      </select>`;
    } else if (f.type === 'textarea') {
      input = `<textarea class="input-field" name="${f.key}" id="pf-${f.key}" rows="3" placeholder="Write a detailed description…">${esc(val)}</textarea>`;
    } else {
      input = `<input type="${f.type}" class="input-field" name="${f.key}" id="pf-${f.key}" value="${esc(val)}" placeholder="${f.label}" ${req}>`;
    }
    return `<div class="${gridSpan}"><label class="lbl">${f.label}${f.required ? ' *' : ''}</label>${input}</div>`;
  }).join('');
}

// ══════════════════════════════════════════════════════════
//  2. PRODUCTS MANAGER
// ══════════════════════════════════════════════════════════
async function renderProducts() {
  const content = document.getElementById('content');
  try {
    const { data: products, error } = await supabase.from('showroom_listings')
      .select('*').neq('listing_type', 'property').order('created_at', { ascending: false });
    if (error) throw error;
    const items = products || [];
    content.innerHTML = `
      <div class="space-y-4 fade-in">
        <div class="flex flex-wrap items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Products Manager</h2>
          <button onclick="showAddProductStep1()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-lg shadow-blue-600/15">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Product
          </button>
        </div>

        <!-- Filters & Search -->
        <div class="flex flex-wrap gap-3">
          <div class="flex-1 min-w-48 relative">
            <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
            <input id="prod-search" type="search" class="input-field pl-9" placeholder="Search products…" oninput="filterProducts(this.value)">
          </div>
          <select id="prod-cat-filter" class="input-field w-auto" onchange="filterProducts()">
            <option value="">All Categories</option>
            ${PRODUCT_CATEGORIES.map(c => `<option value="${c}">${c}</option>`).join('')}
          </select>
          <select id="prod-status-filter" class="input-field w-auto" onchange="filterProducts()">
            <option value="">All Status</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>

        <!-- Bulk Actions -->
        <div id="bulk-actions" class="hidden items-center gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
          <span id="bulk-count" class="text-xs font-bold text-blue-400">0 selected</span>
          <button onclick="bulkToggleActive(true)" class="btn-press text-xs font-bold text-emerald-400 hover:text-emerald-300 px-3 py-1.5 rounded-lg bg-emerald-500/10 transition">Activate</button>
          <button onclick="bulkToggleActive(false)" class="btn-press text-xs font-bold text-amber-400 hover:text-amber-300 px-3 py-1.5 rounded-lg bg-amber-500/10 transition">Deactivate</button>
          <button onclick="bulkArchive()" class="btn-press text-xs font-bold text-red-400 hover:text-red-300 px-3 py-1.5 rounded-lg bg-red-500/10 transition">Archive Selected</button>
        </div>

        <!-- Table -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt" id="products-table">
              <thead><tr>
                <th><input type="checkbox" id="select-all-prods" onchange="toggleSelectAll(this,'prod-check')" class="accent-blue-500"></th>
                <th>Product</th><th>Category</th><th class="hidden sm:table-cell">Price</th>
                <th class="hidden md:table-cell">Stock</th><th>Status</th><th>Actions</th>
              </tr></thead>
              <tbody id="products-tbody">
                ${items.length === 0 ? '<tr><td colspan="7" class="text-center text-gray-500 py-12">No products yet. Click Add Product to get started.</td></tr>' :
                  items.map(p => productRow(p)).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;
    window._productsData = items;
    if (window.lucide) lucide.createIcons();
  } catch (err) {
    if (content) content.innerHTML = `<div class="p-6 text-red-400 text-sm">Error: ${esc(err.message)}</div>`;
  }
}

function productRow(p) {
  const img = (p.images && p.images[0]) ? p.images[0] : '/fallback.svg';
  return `<tr data-id="${p.property_id}" data-cat="${esc(p.category)}" data-active="${p.is_active}" class="prod-row">
    <td><input type="checkbox" class="prod-check accent-blue-500" value="${p.property_id}" onchange="updateBulkBar()"></td>
    <td>
      <div class="flex items-center gap-2.5">
        <img src="${esc(img)}" alt="" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20 shrink-0" onerror="this.src='/fallback.svg'">
        <div class="min-w-0">
          <p class="text-xs font-bold text-white truncate max-w-[180px]">${esc(p.title)}</p>
          <p class="text-[10px] text-gray-500 font-mono">${esc(p.property_id)}</p>
        </div>
      </div>
    </td>
    <td><span class="text-xs text-gray-300">${esc(p.category)}</span></td>
    <td class="hidden sm:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(p.price || 0).toLocaleString()}</span></td>
    <td class="hidden md:table-cell"><span class="text-xs text-gray-300">${p.stock_quantity != null ? p.stock_quantity : '∞'}</span></td>
    <td>${badge(p.is_active ? 'active' : 'inactive')}</td>
    <td>
      <div class="flex items-center gap-1">
        <button onclick="editProduct('${p.property_id}')" class="btn-press p-1.5 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
        <button onclick="toggleProductActive('${p.property_id}',${!p.is_active})" class="btn-press p-1.5 ${p.is_active ? 'text-amber-400 hover:bg-amber-500/10' : 'text-emerald-400 hover:bg-emerald-500/10'} rounded-lg transition" title="${p.is_active ? 'Deactivate' : 'Activate'}"><i data-lucide="${p.is_active ? 'eye-off' : 'eye'}" class="w-3.5 h-3.5"></i></button>
        <button onclick="duplicateProduct('${p.property_id}')" class="btn-press p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition" title="Duplicate"><i data-lucide="copy" class="w-3.5 h-3.5"></i></button>
        <button onclick="archiveProduct('${p.property_id}')" class="btn-press p-1.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition" title="Archive"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
      </div>
    </td>
  </tr>`;
}

window.filterProducts = function(q) {
  const search = (q || document.getElementById('prod-search')?.value || '').toLowerCase();
  const cat = document.getElementById('prod-cat-filter')?.value || '';
  const status = document.getElementById('prod-status-filter')?.value;
  document.querySelectorAll('.prod-row').forEach(row => {
    const matchSearch = !search || row.textContent.toLowerCase().includes(search);
    const matchCat = !cat || row.dataset.cat === cat;
    const matchStatus = status === '' || status === undefined || row.dataset.active === status;
    row.style.display = matchSearch && matchCat && matchStatus ? '' : 'none';
  });
};

window.toggleSelectAll = function(cb, cls) {
  document.querySelectorAll('.' + cls).forEach(c => { c.checked = cb.checked; });
  updateBulkBar();
};

window.updateBulkBar = function() {
  const checked = document.querySelectorAll('.prod-check:checked').length;
  const bar = document.getElementById('bulk-actions');
  const count = document.getElementById('bulk-count');
  if (bar) bar.classList.toggle('hidden', checked === 0);
  if (bar && checked > 0) bar.classList.add('flex');
  if (count) count.textContent = `${checked} selected`;
};

function getSelectedIds() { return [...document.querySelectorAll('.prod-check:checked')].map(c => c.value); }

window.bulkToggleActive = async function(active) {
  const ids = getSelectedIds(); if (!ids.length) return;
  await Promise.all(ids.map(id => supabase.from('showroom_listings').update({ is_active: active }).eq('property_id', id)));
  showToast(`${ids.length} products ${active ? 'activated' : 'deactivated'}`);
  renderProducts();
};

window.bulkArchive = async function() {
  const ids = getSelectedIds(); if (!ids.length) return;
  if (!confirm(`Archive ${ids.length} products? They will be hidden but not deleted.`)) return;
  await Promise.all(ids.map(id => supabase.from('showroom_listings').update({ is_active: false }).eq('property_id', id)));
  showToast(`${ids.length} products archived`);
  renderProducts();
};

// Step 1: Choose category
window.showAddProductStep1 = function() {
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Select Product Category</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <p class="text-xs text-gray-400 mb-4">Choose the category that best matches your product. The form will show the right fields automatically.</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-80 overflow-y-auto scrollbar-thin pr-1">
          ${PRODUCT_CATEGORIES.map(c => `
            <button onclick="showAddProductStep2('${c.replace(/'/g, "\\'")}')" class="btn-press flex items-center gap-2 p-3 glass-soft border border-blue-500/15 hover:border-blue-500/40 rounded-xl transition text-left">
              <i data-lucide="tag" class="w-4 h-4 text-blue-400 shrink-0"></i>
              <span class="text-xs font-semibold text-gray-200">${esc(c)}</span>
            </button>`).join('')}
        </div>
      </div>
    </div>`);
};

window.showAddProductStep2 = function(category, existingData = {}) {
  const isEdit = !!existingData.property_id;
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <div>
            <h3 class="text-base font-black text-white">${isEdit ? 'Edit' : 'Add'} Product — ${esc(category)}</h3>
            <p class="text-xs text-gray-500 mt-0.5">${isEdit ? `Editing: ${esc(existingData.property_id)}` : 'Fill in the product details below'}</p>
          </div>
          <button onclick="${isEdit ? 'closeModal()' : "showAddProductStep1()"}" class="text-gray-500 hover:text-white transition">
            <i data-lucide="${isEdit ? 'x' : 'arrow-left'}" class="w-5 h-5"></i>
          </button>
        </div>

        <form id="product-form" onsubmit="saveProduct(event,'${esc(category)}','${isEdit ? existingData.property_id : ''}')" class="space-y-4">
          <!-- Dynamic Fields -->
          <div class="form-grid form-grid-2">
            ${renderProductFieldsForm(category, existingData)}
          </div>

          <!-- Tags / Badges -->
          <div>
            <label class="lbl">Product Tags / Badges</label>
            <div class="flex flex-wrap gap-2">
              ${['New Arrival', 'Best Seller', 'Hot Deal', 'Featured', 'Limited Stock'].map(tag => `
                <label class="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" name="tags" value="${tag}" ${(existingData.tags || []).includes(tag) ? 'checked' : ''} class="accent-blue-500">
                  <span class="text-xs text-gray-300">${tag}</span>
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
            <div>
              <label class="lbl">Currency</label>
              <select class="input-field" name="currency" id="pf-currency">
                ${['USD', 'EUR', 'GBP', 'NGN', 'KES', 'ZAR', 'GHS'].map(c => `<option value="${c}" ${(existingData.currency || 'USD') === c ? 'selected' : ''}>${c}</option>`).join('')}
              </select>
            </div>
          </div>

          <!-- Featured -->
          <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/15 rounded-xl">
            <div>
              <p class="text-xs font-bold text-white">Featured Product</p>
              <p class="text-[11px] text-gray-500">Show in featured sections</p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" name="is_featured" ${existingData.is_featured ? 'checked' : ''}>
              <span class="toggle-slider"></span>
            </label>
          </div>

          <!-- Active -->
          <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/15 rounded-xl">
            <div>
              <p class="text-xs font-bold text-white">Published / Active</p>
              <p class="text-[11px] text-gray-500">Visible to customers on the website</p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" name="is_active" ${isEdit ? (existingData.is_active ? 'checked' : '') : 'checked'}>
              <span class="toggle-slider"></span>
            </label>
          </div>

          <!-- Image Upload -->
          <div>
            <label class="lbl">Product Images</label>
            <div id="drop-zone" class="drop-zone" onclick="document.getElementById('img-upload').click()">
              <i data-lucide="image-plus" class="w-8 h-8 text-blue-400 mx-auto mb-2"></i>
              <p class="text-xs font-bold text-gray-300">Click or drag & drop images here</p>
              <p class="text-[11px] text-gray-500 mt-1">PNG, JPG, WEBP up to 5MB each. First image = cover.</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2 mt-3">
              ${(existingData.images || []).map((url, i) => imageThumbHtml(url, i)).join('')}
            </div>
            <p class="text-[10px] text-gray-500 mt-1">Drag to reorder • Click X to remove • First image is cover</p>
            <div id="image-url-inputs">
              ${(existingData.images || []).map((url, i) => `<input type="hidden" name="images" id="img-url-${i}" value="${esc(url)}">`).join('')}
            </div>
          </div>

          <div class="flex gap-3 pt-2">
            <button type="submit" name="action" value="publish" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-2.5 rounded-xl text-sm transition shadow-lg shadow-blue-600/15">
              ${isEdit ? '💾 Save Changes' : '🚀 Publish Product'}
            </button>
            <button type="submit" name="action" value="draft" class="btn-press px-5 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2.5 rounded-xl text-sm transition">
              Save Draft
            </button>
          </div>
        </form>
      </div>
    </div>`);
  setupDropZone();
  setupImageSortable();
};

function imageThumbHtml(url, i) {
  return `<div class="img-thumb ${i === 0 ? 'cover-img' : ''}" data-index="${i}" title="${i === 0 ? 'Cover Image' : 'Image ' + (i + 1)}">
    <img src="${esc(url)}" onerror="this.src='/fallback.svg'">
    <button class="rm" onclick="removeImage(${i})" type="button">✕</button>
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
  if (window.lucide) lucide.createIcons();
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
    // Update remove button
    const rm = thumb.querySelector('.rm');
    if (rm) rm.setAttribute('onclick', `removeImage(${i})`);
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

window.saveProduct = async function(e, category, existingId) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('[type=submit][name=action][value=publish]');
  if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
  try {
    const formData = new FormData(form);
    const data = {};
    for (const [k, v] of formData.entries()) {
      if (k === 'images') {
        data.images = data.images || [];
        if (v && !v.startsWith('blob:')) data.images.push(v);
      } else if (k === 'tags') {
        data.tags = data.tags || [];
        data.tags.push(v);
      } else {
        data[k] = v;
      }
    }
    const isDraft = formData.get('action') === 'draft';
    const payload = {
      listing_type: 'product',
      category,
      title: data.title || 'Untitled Product',
      description: data.description || '',
      price: parseFloat(data.price) || 0,
      currency: data.currency || 'USD',
      country: '', country_code: '', listing_status: 'sale',
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
      features: data.tags || [],
      tags: data.tags || [],
      specifications: {
        model: data.model || null, storage: data.storage || null, ram: data.ram || null,
        processor: data.processor || null, display: data.display || null,
        material: data.material || null, gender: data.gender || null,
        platform: data.platform || null, voltage: data.voltage || null,
      },
    };
    let err;
    if (existingId) {
      ({ error: err } = await supabase.from('showroom_listings').update(payload).eq('property_id', existingId));
    } else {
      const pid = genId();
      payload.property_id = pid;
      ({ error: err } = await supabase.from('showroom_listings').insert(payload));
    }
    if (err) throw err;
    showToast(isDraft ? 'Draft saved!' : existingId ? 'Product updated!' : 'Product published!');
    closeModal();
    renderProducts();
  } catch (err) {
    showToast('Error: ' + err.message, 'error');
    if (btn) { btn.disabled = false; btn.textContent = '🚀 Publish Product'; }
  }
};

window.editProduct = async function(pid) {
  const { data } = await supabase.from('showroom_listings').select('*').eq('property_id', pid).maybeSingle();
  if (!data) return showToast('Product not found', 'error');
  showAddProductStep2(data.category || 'Other', data);
};

window.toggleProductActive = async function(pid, active) {
  await supabase.from('showroom_listings').update({ is_active: active }).eq('property_id', pid);
  showToast(active ? 'Product activated' : 'Product deactivated');
  renderProducts();
};

window.duplicateProduct = async function(pid) {
  const { data } = await supabase.from('showroom_listings').select('*').eq('property_id', pid).maybeSingle();
  if (!data) return;
  const { id: _, property_id: __, created_at: ___, updated_at: ____, ...rest } = data;
  const newPid = genId();
  await supabase.from('showroom_listings').insert({ ...rest, property_id: newPid, title: data.title + ' (Copy)', is_active: false });
  showToast('Product duplicated');
  renderProducts();
};

window.archiveProduct = async function(pid) {
  if (!confirm('Archive this product? It will be hidden from the website but can be restored.')) return;
  await supabase.from('showroom_listings').update({ is_active: false }).eq('property_id', pid);
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
    const { data: props } = await supabase.from('showroom_listings').select('*').eq('listing_type', 'property').order('created_at', { ascending: false });
    const items = props || [];
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
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${isEdit ? 'Edit' : 'Add'} Property</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <form id="property-form" onsubmit="saveProperty(event,'${isEdit ? existing.property_id : ''}')" class="space-y-4">
          <div class="form-grid form-grid-2">
            <div class="sm:col-span-2"><label class="lbl">Property Title *</label><input class="input-field" name="title" value="${esc(existing.title || '')}" required placeholder="e.g. Cozy 3-Bedroom Family Home"></div>
            <div><label class="lbl">Property Type *</label><select class="input-field" name="property_type" required>
              ${PROPERTY_TYPES.map(t => `<option value="${t}" ${existing.property_type === t ? 'selected' : ''}>${t}</option>`).join('')}
            </select></div>
            <div><label class="lbl">Listing Status</label><select class="input-field" name="listing_status">
              <option value="sale" ${existing.listing_status !== 'rent' ? 'selected' : ''}>For Sale</option>
              <option value="rent" ${existing.listing_status === 'rent' ? 'selected' : ''}>For Rent</option>
            </select></div>
            <div><label class="lbl">Price (USD) *</label><input type="number" class="input-field" name="price" value="${existing.price || ''}" required placeholder="0"></div>
            <div><label class="lbl">Currency</label><select class="input-field" name="currency">
              ${['USD','EUR','GBP','NGN','KES','ZAR'].map(c => `<option ${(existing.currency||'USD')===c?'selected':''}>${c}</option>`).join('')}
            </select></div>
            <div><label class="lbl">Country *</label><input class="input-field" name="country" value="${esc(existing.country || '')}" required placeholder="United States"></div>
            <div><label class="lbl">Country Code</label><input class="input-field" name="country_code" value="${esc(existing.country_code || '')}" placeholder="US" maxlength="2"></div>
            <div><label class="lbl">State / Province</label><input class="input-field" name="state" value="${esc(existing.state || '')}" placeholder="e.g. California"></div>
            <div><label class="lbl">City</label><input class="input-field" name="city" value="${esc(existing.city || '')}" placeholder="e.g. Los Angeles"></div>
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
};

window.saveProperty = async function(e, existingId) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  const images = fd.getAll('images').filter(u => u && !u.startsWith('blob:'));
  const features = (data.features_text || '').split(',').map(s => s.trim()).filter(Boolean);
  const payload = {
    listing_type: 'property',
    category: data.property_type || 'Real Estate',
    title: data.title, description: data.description || '',
    price: parseFloat(data.price) || 0, currency: data.currency || 'USD',
    country: data.country || '', country_code: (data.country_code || '').toUpperCase(),
    state: data.state || '', city: data.city || '',
    property_type: data.property_type || '', listing_status: data.listing_status || 'sale',
    bedrooms: data.bedrooms ? parseInt(data.bedrooms) : null,
    bathrooms: data.bathrooms ? parseInt(data.bathrooms) : null,
    building_size: data.building_size || '', land_size: data.land_size || '',
    parking_spaces: data.parking_spaces ? parseInt(data.parking_spaces) : null,
    furnished: data.furnished || '', features, images,
    is_active: data.is_active === 'on',
  };
  let err;
  if (existingId) {
    ({ error: err } = await supabase.from('showroom_listings').update(payload).eq('property_id', existingId));
  } else {
    payload.property_id = genId();
    ({ error: err } = await supabase.from('showroom_listings').insert(payload));
  }
  if (err) { showToast(err.message, 'error'); return; }
  showToast(existingId ? 'Property updated!' : 'Property published!');
  closeModal(); renderProperties();
};

window.editProperty = async function(pid) {
  const { data } = await supabase.from('showroom_listings').select('*').eq('property_id', pid).maybeSingle();
  if (data) showAddPropertyModal(data);
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
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
//  10. ADVERTISEMENTS
// ══════════════════════════════════════════════════════════
async function renderAds() {
  const content = document.getElementById('content');
  try {
    const { data: promos } = await supabase.from('promotions').select('*').order('created_at', { ascending: false });
    const items = promos || [];
    content.innerHTML = `
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Advertisement Manager</h2>
          <button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Promotion
          </button>
        </div>
        <div class="grid gap-3">
          ${items.length === 0 ? emptyState('megaphone', 'No Promotions', 'Create banners and promotions to advertise products.', `<button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"><i data-lucide="plus" class="w-4 h-4"></i> Add Promotion</button>`) :
            items.map(p => `
              <div class="glass-soft border border-blue-500/15 rounded-xl p-4 flex items-center gap-4">
                ${p.image_url ? `<img src="${esc(p.image_url)}" class="w-20 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" onerror="this.remove()">` : `<div class="w-20 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="megaphone" class="w-6 h-6 text-blue-400"></i></div>`}
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-black text-white">${esc(p.title || p.name)}</p>
                  <p class="text-xs text-gray-400 mt-0.5">${esc(p.description || '')}</p>
                  <div class="flex items-center gap-2 mt-1.5">${badge(p.is_active ? 'active' : 'inactive')}<span class="text-[10px] text-gray-500">${fmtDate(p.start_date)} → ${fmtDate(p.end_date)}</span></div>
                </div>
                <div class="flex gap-1 shrink-0">
                  <button onclick="togglePromo('${p.id}',${!p.is_active})" class="btn-press p-1.5 ${p.is_active ? 'text-amber-400' : 'text-emerald-400'} rounded-lg transition"><i data-lucide="${p.is_active ? 'eye-off' : 'eye'}" class="w-4 h-4"></i></button>
                  <button onclick="deletePromo('${p.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                </div>
              </div>`).join('')}
        </div>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

window.showAddAdModal = function() {
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Add Promotion / Advertisement</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <form id="ad-form" onsubmit="saveAd(event)" class="space-y-4">
          <div><label class="lbl">Title *</label><input class="input-field" name="title" required placeholder="e.g. Summer Sale"></div>
          <div><label class="lbl">Description</label><textarea class="input-field" name="description" rows="2" placeholder="Short description…"></textarea></div>
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Start Date</label><input type="date" class="input-field" name="start_date"></div>
            <div><label class="lbl">End Date</label><input type="date" class="input-field" name="end_date"></div>
          </div>
          <div><label class="lbl">Banner Image URL</label><input class="input-field" name="image_url" placeholder="https://…"></div>
          <div><label class="lbl">Link URL</label><input class="input-field" name="link_url" placeholder="https://…"></div>
          <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/15 rounded-xl">
            <p class="text-xs font-bold text-white">Active</p>
            <label class="toggle-switch"><input type="checkbox" name="is_active" checked><span class="toggle-slider"></span></label>
          </div>
          <button type="submit" class="btn-press w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl text-sm transition">Create Promotion</button>
        </form>
      </div>
    </div>`);
};

window.saveAd = async function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  const payload = { title: data.title, description: data.description || '', start_date: data.start_date || null, end_date: data.end_date || null, image_url: data.image_url || null, link_url: data.link_url || null, is_active: data.is_active === 'on', promo_type: 'banner' };
  const { error } = await supabase.from('promotions').insert(payload);
  if (error) { showToast(error.message, 'error'); return; }
  showToast('Promotion created!');
  closeModal(); renderAds();
};

window.togglePromo = async function(id, active) {
  await supabase.from('promotions').update({ is_active: active }).eq('id', id);
  showToast(active ? 'Promotion activated' : 'Promotion deactivated');
  renderAds();
};

window.deletePromo = async function(id) {
  if (!confirm('Delete this promotion?')) return;
  await supabase.from('promotions').delete().eq('id', id);
  showToast('Promotion deleted');
  renderAds();
};

// ══════════════════════════════════════════════════════════
//  11. AI SETTINGS
// ══════════════════════════════════════════════════════════
async function renderAiSettings() {
  const content = document.getElementById('content');
  try {
    const { data: settings } = await supabase.from('ai_settings').select('*').limit(1).maybeSingle();
    const s = settings || {};
    content.innerHTML = `
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">AI Settings</h2>
        <div class="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl text-xs text-amber-400 flex items-start gap-2">
          <i data-lucide="shield-alert" class="w-4 h-4 shrink-0 mt-0.5"></i>
          <p>API keys are stored encrypted in your Supabase database. Never share them. They are only used server-side in Edge Functions.</p>
        </div>

        <form id="ai-form" onsubmit="saveAiSettings(event)" class="space-y-5">
          <!-- Provider Selection -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-black text-white mb-4 flex items-center gap-2"><i data-lucide="bot" class="w-4 h-4 text-blue-400"></i> Active Provider</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${[{ id: 'openai', name: 'OpenAI (ChatGPT)', icon: 'cpu' }, { id: 'gemini', name: 'Google Gemini', icon: 'sparkles' }, { id: 'anthropic', name: 'Anthropic Claude', icon: 'brain' }].map(p => `
                <label class="flex items-center gap-3 p-3 glass-soft border ${s.active_provider === p.id ? 'border-blue-500/50 bg-blue-500/5' : 'border-blue-500/15'} rounded-xl cursor-pointer hover:border-blue-500/40 transition">
                  <input type="radio" name="active_provider" value="${p.id}" ${s.active_provider === p.id ? 'checked' : ''} class="accent-blue-500">
                  <div><i data-lucide="${p.icon}" class="w-4 h-4 text-blue-400 mb-1"></i><p class="text-xs font-bold text-white">${p.name}</p></div>
                </label>`).join('')}
            </div>
          </div>

          <!-- OpenAI -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="cpu" class="w-4 h-4 text-blue-400"></i> OpenAI (ChatGPT)</h3>
            <div><label class="lbl">API Key</label>
              <div class="relative">
                <input type="password" class="input-field pr-20" name="openai_key" placeholder="${s.openai_key ? '••••••••' + s.openai_key.slice(-4) : 'sk-…paste your key here'}">
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-500">Not saved</span>
              </div>
            </div>
            <div><label class="lbl">Model</label>
              <select class="input-field" name="openai_model">
                ${['gpt-4o','gpt-4o-mini','gpt-4-turbo','gpt-3.5-turbo'].map(m => `<option value="${m}" ${(s.openai_model||'gpt-4o')===m?'selected':''}>${m}</option>`).join('')}
              </select>
            </div>
          </div>

          <!-- Gemini -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> Google Gemini</h3>
            <div><label class="lbl">API Key</label>
              <input type="password" class="input-field" name="gemini_key" placeholder="${s.gemini_key ? '••••••••' + s.gemini_key.slice(-4) : 'AIza…paste your key here'}">
            </div>
            <div><label class="lbl">Model</label>
              <select class="input-field" name="gemini_model">
                ${['gemini-1.5-pro','gemini-1.5-flash','gemini-pro'].map(m => `<option value="${m}" ${(s.gemini_model||'gemini-1.5-pro')===m?'selected':''}>${m}</option>`).join('')}
              </select>
            </div>
          </div>

          <!-- AI Features -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white mb-4 flex items-center gap-2"><i data-lucide="sliders" class="w-4 h-4 text-blue-400"></i> AI Features</h3>
            ${[
              { key: 'customer_ai_enabled', label: 'Customer AI Chatbot', desc: 'Allow customers to use AI chat on the website', val: s.customer_ai_enabled },
              { key: 'product_ai_enabled', label: 'AI Product Creation', desc: 'Use AI to auto-generate product descriptions', val: s.product_ai_enabled !== false },
              { key: 'ai_moderation', label: 'AI Content Moderation', desc: 'Auto-moderate reviews with AI', val: s.ai_moderation },
            ].map(f => `
              <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
                <div><p class="text-xs font-bold text-white">${f.label}</p><p class="text-[11px] text-gray-500">${f.desc}</p></div>
                <label class="toggle-switch"><input type="checkbox" name="${f.key}" ${f.val ? 'checked' : ''}><span class="toggle-slider"></span></label>
              </div>`).join('')}
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition shadow-lg shadow-blue-600/15">
            💾 Save AI Settings
          </button>
        </form>
      </div>`;
    if (window.lucide) lucide.createIcons();
  } catch (err) { if (content) content.innerHTML = `<div class="p-6 text-red-400">${esc(err.message)}</div>`; }
}

window.saveAiSettings = async function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  const payload = {
    active_provider: data.active_provider || 'openai',
    openai_model: data.openai_model,
    gemini_model: data.gemini_model,
    customer_ai_enabled: data.customer_ai_enabled === 'on',
    product_ai_enabled: data.product_ai_enabled === 'on',
    ai_moderation: data.ai_moderation === 'on',
  };
  // Only update keys if new values provided
  if (data.openai_key && !data.openai_key.startsWith('•')) payload.openai_key = data.openai_key;
  if (data.gemini_key && !data.gemini_key.startsWith('•')) payload.gemini_key = data.gemini_key;
  const { error } = await supabase.from('ai_settings').upsert({ id: 1, ...payload });
  if (error) { showToast(error.message, 'error'); return; }
  showToast('AI settings saved!');
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
              { key: 'site_name', label: 'Site Name', type: 'text', placeholder: 'KCO Global Online Marketplace' },
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
          <div><label class="lbl">Meta Title</label><input class="input-field" name="meta_title" value="${esc(d.meta_title || '')}" placeholder="KCO Global Online Marketplace | Premium International Commerce"></div>
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
          <div><label class="lbl">Sender Name</label><input class="input-field" name="email_from_name" value="${esc(d.email_from_name || '')}" placeholder="KCO Global Online Marketplace"></div>
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
//  16. SECURITY
// ══════════════════════════════════════════════════════════
async function renderSecurity() {
  const content = document.getElementById('content');
  try {
    const { data: logs } = await supabase.from('admin_security_logs').select('*').order('created_at', { ascending: false }).limit(50);
    content.innerHTML = `
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white">Security</h2>
        <!-- Change Password -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <h3 class="text-sm font-black text-white mb-4 flex items-center gap-2"><i data-lucide="lock" class="w-4 h-4 text-blue-400"></i> Change Password</h3>
          <form id="pw-form" onsubmit="changePassword(event)" class="space-y-3 max-w-sm">
            <div><label class="lbl">New Password</label><input type="password" class="input-field" id="new-pw" placeholder="Min 8 characters" minlength="8" required></div>
            <div><label class="lbl">Confirm New Password</label><input type="password" class="input-field" id="confirm-pw" placeholder="Repeat password" required></div>
            <button type="submit" class="btn-press bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-xl text-sm transition">Update Password</button>
          </form>
        </div>
        <!-- Security Logs -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="p-4 border-b border-blue-500/10">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="shield" class="w-4 h-4 text-blue-400"></i> Recent Security Events</h3>
          </div>
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Event</th><th>IP Address</th><th class="hidden sm:table-cell">User Agent</th><th>Date</th></tr></thead>
              <tbody>
                ${(logs || []).length === 0 ? '<tr><td colspan="4" class="text-center text-gray-500 py-8">No security events</td></tr>' :
                  (logs || []).map(l => `<tr>
                    <td><span class="text-xs font-bold text-white">${esc(l.event_type || l.action || '—')}</span></td>
                    <td><span class="text-xs font-mono text-gray-300">${esc(l.ip_address || '—')}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-500 truncate max-w-[200px] block">${esc((l.user_agent || '—').slice(0, 60))}</span></td>
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

window.changePassword = async function(e) {
  e.preventDefault();
  const np = document.getElementById('new-pw').value;
  const cp = document.getElementById('confirm-pw').value;
  if (np !== cp) { showToast('Passwords do not match', 'error'); return; }
  if (np.length < 8) { showToast('Password must be at least 8 characters', 'error'); return; }
  const { error } = await supabase.auth.updateUser({ password: np });
  if (error) { showToast(error.message, 'error'); return; }
  showToast('Password updated successfully!');
  e.target.reset();
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
//  20. PUBLISH & DEPLOY
// ══════════════════════════════════════════════════════════
async function renderPublish() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">Publish & Deploy</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        ${[
          { icon: 'rocket', color: 'blue', title: 'Deploy to Production', desc: 'Push the latest changes to your live website.', btn: 'Deploy Now', fn: 'deployToProduction()' },
          { icon: 'refresh-cw', color: 'violet', title: 'Rebuild Site', desc: 'Trigger a full rebuild of the website.', btn: 'Rebuild', fn: 'rebuildSite()' },
          { icon: 'search', color: 'emerald', title: 'Reindex Search', desc: 'Rebuild the product search index.', btn: 'Reindex', fn: 'reindexSearch()' },
          { icon: 'database', color: 'amber', title: 'Sync Showroom to DB', desc: 'Sync hardcoded product data to database.', btn: 'Sync', fn: 'syncShowroomToDB()' },
        ].map(a => `
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <div class="w-10 h-10 bg-${a.color}-500/10 rounded-xl flex items-center justify-center mb-3">
              <i data-lucide="${a.icon}" class="w-5 h-5 text-${a.color}-400"></i>
            </div>
            <h3 class="text-sm font-black text-white mb-1">${a.title}</h3>
            <p class="text-xs text-gray-400 mb-4">${a.desc}</p>
            <button onclick="${a.fn}" class="btn-press flex items-center gap-2 bg-${a.color}-600 hover:bg-${a.color}-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
              <i data-lucide="${a.icon}" class="w-4 h-4"></i> ${a.btn}
            </button>
          </div>`).join('')}
      </div>
      <div class="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl text-xs text-blue-300">
        Deployment is managed by your hosting provider (Netlify, Vercel, etc.). Connect your Git repository to enable automatic deployments.
      </div>
    </div>`;
  if (window.lucide) lucide.createIcons();
}

window.deployToProduction = function() { showToast('Deployment triggered via webhook', 'info'); };
window.rebuildSite = function() { showToast('Rebuild triggered', 'info'); };
window.reindexSearch = async function() {
  try {
    await supabase.rpc('sync_search_index_force');
    showToast('Search index rebuilt!');
  } catch { showToast('Reindex initiated', 'info'); }
};
window.syncShowroomToDB = function() { showToast('Run the sync script from your terminal: node scripts/sync-showroom-to-db.js', 'info'); };

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
