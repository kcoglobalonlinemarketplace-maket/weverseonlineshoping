import { supabase } from './supabase-client.js';
import { COUNTRIES } from './country-data.js';
import { ALL_CURRENCIES } from './localization.js';
import { GLOBAL_PRICE_MAX, GLOBAL_PRICE_MIN, buildCatalogDraft, getDefaultCurrencyForCountry, getTemplatesForCategory } from './global-product-catalog.js';
import { getLocalShowroomListingById, listLocalShowroomListings, patchLocalShowroomListing, upsertLocalShowroomListing } from './local-showroom-store.js';
import { LIVE_STREAM_PLATFORM_DEFS, VIDEO_CALL_PROVIDER_DEFS, loadLiveControlAdminState, loadPublicLiveState, saveLiveControlAdminState, savePublicLiveState } from './live-control-store.js';
import { getFlagEmojiFromCountryCode, getManualPaymentAccounts, getPaymentInstructions, loadPaymentSettingsCache, savePaymentSettingsCache } from './payment-settings.js';

// ══════════════════════════════════════════════════════════
//  KCO ADMIN DASHBOARD  —  Complete Management Console
// ══════════════════════════════════════════════════════════

const ADMIN_EMAIL = 'weverseonlineshop@gmail.com';
const ADMIN_RESET_REDIRECT_URL = 'https://weverseonlineshop.com/admin.html';
const AI_AD_LOCAL_FALLBACK_KEY = 'kco_ai_ad_override_fallback_v1';

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
    { id: 'live-streaming', label: 'Live Streaming',  icon: 'radio' },
    { id: 'video-calls', label: 'Video Calls',        icon: 'video' },
  ]},
  { group: 'Configuration', items: [
    { id: 'payment-settings', label: 'Payment Settings',  icon: 'credit-card' },
    { id: 'ai-settings', label: 'AI Settings',        icon: 'bot' },
    { id: 'ai-marketing', label: 'AI Marketing Studio', icon: 'sparkles' },
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
  orders: 'Orders Manager', customers: 'Customers Manager', reviews: 'Reviews Manager',
  messages: 'Messages & Support', coupons: 'Coupons Manager', ads: 'Advertisement Manager',
  notifications: 'Notifications', 'live-streaming': 'Live Streaming Manager', 'video-calls': 'Video Call Manager', 'ai-settings': 'AI Settings', content: 'Content Manager',
  'ai-marketing': 'AI Marketing Studio',
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
    notifications: renderNotifications, 'live-streaming': renderLiveStreamingManager, 'video-calls': renderVideoCallManager, 'ai-settings': renderAiSettings,
    'ai-marketing': renderAiMarketingStudio,
    content: renderContent, seo: renderSeo, email: renderEmail,
    analytics: renderAnalytics, security: renderSecurity, activity: renderActivity,
    brand: renderBrandManager,
    'payment-settings': renderPaymentSettings,
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

function redirectLocalAdminToCanonicalHost() {
  const host = String(window.location.hostname || '').toLowerCase();
  const isLocalHost = host === 'localhost' || host === '127.0.0.1' || host === '::1';
  if (!isLocalHost) return false;

  const target = new URL(ADMIN_RESET_REDIRECT_URL);
  target.search = window.location.search;
  target.hash = window.location.hash;
  window.location.replace(target.toString());
  return true;
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
  try {
    const { data: isAdmin } = await supabase.rpc('is_current_user_admin');
    if (isAdmin) return true;
  } catch {
    // Fallback below keeps access for the legacy owner email if RPC is unavailable.
  }
  return normalizeEmail(user.email) === ADMIN_EMAIL;
}

// ── Init auth (called on page load) ──────────────────────
async function initAuth() {
  if (redirectLocalAdminToCanonicalHost()) return;

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
    const raw = String(error?.message || '').toLowerCase();
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
    redirectTo: ADMIN_RESET_REDIRECT_URL,
  });
  setLoginBusy('send-reset-btn', false, '<i data-lucide="mail" class="w-4 h-4 inline mr-1"></i> Send Reset Link');
  if (error) { loginError(error.message); return; }
  loginSuccess('Reset link sent! Check your inbox. The link opens your production admin page.');
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
      <div><h1 class="text-lg font-black text-white">Set New Password</h1><p class="text-[10px] text-blue-400 font-bold uppercase tracking-wider">KCO Admin</p></div>
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
  { key: 'title', label: 'Vehicle Title', type: 'text', required: true, span: 2 },
  { key: 'brand', label: 'Brand', type: 'text', required: true },
  { key: 'model', label: 'Model', type: 'text', required: true },
  { key: 'color', label: 'Color', type: 'text' },
  { key: 'size', label: 'Body / Trim', type: 'text' },
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
    const items = error ? listLocalShowroomListings().filter(item => item.listing_type !== 'property') : (products || []);
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
  const productTemplates = getTemplatesForCategory('product', category);
  const selectedCurrency = existingData.currency || 'USD';
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
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-3">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs font-bold text-white uppercase tracking-wide">Global Catalog Autofill</p>
                <p class="text-[11px] text-gray-500 mt-1">Pick a template, country, and currency to auto-build the listing title, description, and metadata.</p>
              </div>
              <button type="button" onclick="applyProductCatalogTemplate('${esc(category)}')" class="btn-press px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold rounded-xl transition">Refresh Template</button>
            </div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Catalog Template</label><select class="input-field" name="catalog_template_id" id="pf-catalog_template_id" onchange="applyProductCatalogTemplate('${esc(category)}')"><option value="">Choose a template...</option>${productTemplates.map(template => `<option value="${template.id}">${esc(template.label)} - ${esc(template.subcategory || template.category)}</option>`).join('')}</select></div>
              <div class="sm:col-span-2"><label class="lbl">Currency</label><select class="input-field" name="currency" id="pf-currency" onchange="applyProductCatalogTemplate('${esc(category)}')">${renderCurrencyOptions(selectedCurrency)}</select></div>
            </div>
            <p id="pf-image-requirement" class="hidden text-[11px] text-amber-300"></p>
            <input type="hidden" name="required_image_count" id="pf-required_image_count" value="">
          </div>

          <!-- Dynamic Fields -->
          <div class="form-grid form-grid-2">
            ${renderProductFieldsForm(category, existingData)}
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
            <div class="p-3 glass-soft border border-blue-500/15 rounded-xl">
              <p class="text-xs font-bold text-white">Global Price Range</p>
              <p class="text-[11px] text-gray-500 mt-1">Allowed price range is ${GLOBAL_PRICE_MIN} to ${GLOBAL_PRICE_MAX} in the selected currency.</p>
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
            <p class="text-[10px] text-gray-500 mt-1">Drag to reorder • Click X to remove • First image is cover • Vehicle templates require 24 images</p>
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
  configurePriceField('pf-price');
  applyCatalogDraftToProductForm(category, 'pricing');
  document.getElementById('pf-price')?.addEventListener('input', () => applyCatalogDraftToProductForm(category, 'pricing'));
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
    const requiredImageCount = parseInt(data.required_image_count || '0', 10) || (AUTOMOTIVE_CATEGORIES.includes(category) ? 24 : 0);
    validateImageRequirement(requiredImageCount, data.images || [], 'This listing');
    const isDraft = formData.get('action') === 'draft';
    const payload = {
      listing_type: 'product',
      category,
      subcategory: data.subcategory || null,
      title: data.title || 'Untitled Product',
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
      features: normalizeCommaList(data.features_text).length ? normalizeCommaList(data.features_text) : (data.tags || []),
      tags: data.tags || [],
      highlights: normalizeCommaList(data.highlights_text),
      seo_keywords: normalizeCommaList(data.seo_keywords_text),
      is_ai_generated: !!data.catalog_template_id,
      ai_generated_fields: data.catalog_template_id ? ['title', 'description', 'features', 'highlights', 'seo_keywords'] : [],
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
      if (err) upsertLocalShowroomListing({ ...payload, property_id: existingId });
    } else {
      const pid = genId();
      payload.property_id = pid;
      ({ error: err } = await supabase.from('showroom_listings').insert(payload));
      if (err) upsertLocalShowroomListing(payload);
    }
    if (err && !/showroom_listings/i.test(err.message || '')) throw err;
    showToast(isDraft ? 'Draft saved!' : existingId ? 'Product updated!' : 'Product published!');
    closeModal();
    renderProducts();
  } catch (err) {
    showToast('Error: ' + err.message, 'error');
    if (btn) { btn.disabled = false; btn.textContent = '🚀 Publish Product'; }
  }
};

window.editProduct = async function(pid) {
  const { data, error } = await supabase.from('showroom_listings').select('*').eq('property_id', pid).maybeSingle();
  const resolved = error ? getLocalShowroomListingById(pid) : data;
  if (!resolved) return showToast('Product not found', 'error');
  showAddProductStep2(resolved.category || 'Other', resolved);
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
    const { data: props, error } = await supabase.from('showroom_listings').select('*').eq('listing_type', 'property').order('created_at', { ascending: false });
    const items = error ? listLocalShowroomListings().filter(item => item.listing_type === 'property') : (props || []);
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
  const propertyTemplates = getTemplatesForCategory('property', 'Real Estate');
  const selectedCountryCode = existing.country_code || 'US';
  const selectedCurrency = existing.currency || getDefaultCurrencyForCountry(selectedCountryCode);
  openModal(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${isEdit ? 'Edit' : 'Add'} Property</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
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
  const requiredImageCount = parseInt(data.required_image_count || '24', 10) || 24;
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
    ({ error: err } = await supabase.from('showroom_listings').update(payload).eq('property_id', existingId));
    if (err) upsertLocalShowroomListing({ ...payload, property_id: existingId });
  } else {
    payload.property_id = genId();
    ({ error: err } = await supabase.from('showroom_listings').insert(payload));
    if (err) upsertLocalShowroomListing(payload);
  }
  if (err && !/showroom_listings/i.test(err.message || '')) { showToast(err.message, 'error'); return; }
  showToast(existingId ? 'Property updated!' : 'Property published!');
  closeModal(); renderProperties();
};

window.editProperty = async function(pid) {
  const { data, error } = await supabase.from('showroom_listings').select('*').eq('property_id', pid).maybeSingle();
  const resolved = error ? getLocalShowroomListingById(pid) : data;
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
//  11. AI SETTINGS  — 20 FREE coding AI providers
// ══════════════════════════════════════════════════════════

const ALL_AI_PROVIDERS = [
  // ── BATCH 1 (original 10) ──────────────────────────────
  { id:'gemini',      name:'Google Gemini',         tag:'FREE',  color:'blue',    icon:'sparkles',   kf:'gemini_key',      ph:'AIzaSy…',      signup:'https://aistudio.google.com/apikey',                        models:['gemini-2.0-flash','gemini-1.5-flash','gemini-1.5-pro','gemini-2.5-pro'],                                                    mf:'gemini_model',      dm:'gemini-2.0-flash',                  desc:'Google\'s best free AI. Great for coding, writing apps & websites.',                                free_tier:'15 req/min · 1M tokens/day — Free forever' },
  { id:'groq',        name:'Groq (Llama 3.3)',       tag:'FREE',  color:'orange',  icon:'zap',        kf:'groq_key',        ph:'gsk_…',        signup:'https://console.groq.com/keys',                             models:['llama-3.3-70b-versatile','llama-3.1-8b-instant','mixtral-8x7b-32768','gemma2-9b-it'],                                          mf:'groq_model',        dm:'llama-3.3-70b-versatile',           desc:'Fastest free AI inference. Runs Llama 3.3 & Mixtral. Excellent for coding.',                       free_tier:'30 req/min · 6,000 req/day free' },
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
  { id:'cloudflare',  name:'Cloudflare Workers AI',  tag:'FREE',  color:'orange',  icon:'cloud',      kf:'cloudflare_key',  ph:'…token',       signup:'https://dash.cloudflare.com/profile/api-tokens',            models:['@cf/meta/llama-3.3-70b-instruct','@cf/deepseek-ai/deepseek-r1-distill-llama-70b','@hf/thebloke/codellama-7b-instruct-awq'],   mf:'cloudflare_model',  dm:'@cf/meta/llama-3.3-70b-instruct',   desc:'FREE 10,000 req/day. Runs Llama, CodeLlama, DeepSeek R1 on Cloudflare\'s global edge network.',    free_tier:'10,000 requests/day FREE forever' },
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
  border: {blue:'border-blue-500/50',orange:'border-orange-500/50',cyan:'border-cyan-500/50',violet:'border-violet-500/50',emerald:'border-emerald-500/50',amber:'border-amber-500/50',pink:'border-pink-500/50',rose:'border-rose-500/50',teal:'border-teal-500/50',red:'border-red-500/50',gray:'border-gray-500/50'},
  bg:     {blue:'bg-blue-500/8',orange:'bg-orange-500/8',cyan:'bg-cyan-500/8',violet:'bg-violet-500/8',emerald:'bg-emerald-500/8',amber:'bg-amber-500/8',pink:'bg-pink-500/8',rose:'bg-rose-500/8',teal:'bg-teal-500/8',red:'bg-red-500/8',gray:'bg-gray-500/8'},
  text:   {blue:'text-blue-400',orange:'text-orange-400',cyan:'text-cyan-400',violet:'text-violet-400',emerald:'text-emerald-400',amber:'text-amber-400',pink:'text-pink-400',rose:'text-rose-400',teal:'text-teal-400',red:'text-red-400',gray:'text-gray-400'},
  badge:  {blue:'bg-blue-500/15 text-blue-300',orange:'bg-orange-500/15 text-orange-300',cyan:'bg-cyan-500/15 text-cyan-300',violet:'bg-violet-500/15 text-violet-300',emerald:'bg-emerald-500/15 text-emerald-300',amber:'bg-amber-500/15 text-amber-300',pink:'bg-pink-500/15 text-pink-300',rose:'bg-rose-500/15 text-rose-300',teal:'bg-teal-500/15 text-teal-300',red:'bg-red-500/15 text-red-300',gray:'bg-gray-500/15 text-gray-300'},
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

      const req = this._buildRequest(provider, cfg, messages, maxTokens);
      if (!req) continue;

      try {
        if (onProviderSwitch) onProviderSwitch(provider.name);

        const res = await fetch(req.url, {
          method: req.method,
          headers: req.headers,
          body: JSON.stringify(req.body),
          signal: AbortSignal.timeout(30000),
        });

        if (res.status === 429 || res.status === 503) {
          // Rate limited — put this provider in cooldown and try next
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

        // Success — clear any cooldown for this provider
        this._clearCooldown(provider.id);
        console.log(`[AI] ✓ Response from ${provider.name}`);
        return { text, provider: provider.name, model: cfg[provider.mf] || provider.dm };

      } catch (err) {
        if (err.name === 'TimeoutError') {
          this._setCooldown(provider.id);
          lastError = new Error(`${provider.name} timed out`);
        } else {
          lastError = err;
        }
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
};

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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
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
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <div id="2fa-setup-content">
          <div class="flex items-center justify-center py-8"><i data-lucide="loader-2" class="w-6 h-6 animate-spin text-blue-400"></i></div>
        </div>
      </div>
    </div>`);
  if (window.lucide) lucide.createIcons();
  try {
    const { data, error } = await supabase.auth.mfa.enroll({ factorType: 'totp', friendlyName: 'KCO Admin' });
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
  const blob = new Blob([`KCO Admin Backup Codes\nGenerated: ${new Date().toISOString()}\n\n${codes.join('\n')}\n\nEach code works once. Store securely.`], { type: 'text/plain' });
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
//  BRAND MANAGER  (name · slogan · logo · verified badge · live preview)
// ══════════════════════════════════════════════════════════
async function renderBrandManager() {
  const content = document.getElementById('content');
  if (content) content.innerHTML = loading();
  try {
    const { data: s } = await supabase.from('site_settings').select('*').limit(1).maybeSingle();
    const d = s || {};

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
                <i data-lucide="globe" class="w-4 h-4 text-white"></i>
              </div>
              <div>
                <p id="preview-name" class="text-sm font-black text-white leading-none">${esc(d.brand_name||'Weverse Online Shop')}</p>
                <p id="preview-slogan" class="text-[10px] text-orange-400 font-semibold mt-0.5">${esc(d.brand_slogan||'Shop Globally, Delivered Worldwide')}</p>
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
              <i data-lucide="globe" class="w-4 h-4 text-white"></i>
            </div>
            <div>
              <p id="preview-footer-name" class="text-xs font-black text-white">${esc(d.brand_name||'Weverse Online Shop')}</p>
              <p id="preview-footer-slogan" class="text-[10px] text-gray-500">${esc(d.brand_slogan||'Shop Globally, Delivered Worldwide')}</p>
            </div>
            <p class="ml-auto text-[10px] text-gray-600">© 2026 <span id="preview-copy-name">${esc(d.brand_name||'Weverse Online Shop')}</span></p>
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
                <input class="input-field" name="brand_name" id="inp-brand-name" value="${esc(d.brand_name||d.site_name||'Weverse Online Shop')}" placeholder="Your brand name" required oninput="updateLivePreview()">
              </div>
              <div>
                <label class="lbl">Short Name</label>
                <input class="input-field" name="brand_short_name" value="${esc(d.brand_short_name||'')}" placeholder="e.g. Weverse">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Slogan / Tagline *</label>
                <input class="input-field" name="brand_slogan" id="inp-brand-slogan" value="${esc(d.brand_slogan||d.site_tagline||'Shop Globally, Delivered Worldwide')}" placeholder="e.g. Shop Globally, Delivered Worldwide" oninput="updateLivePreview()">
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
              ${imgSlot('Main Logo',            'brand_logo',        d.brand_logo,        'Main logo shown across the website. 200×60px recommended.')}
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
            <p>After saving, your brand name, logo, slogan, and verified badge will automatically appear on <strong>every page</strong> — Header, Footer, Login, Checkout, Contact, Admin, and all future pages. No code changes needed.</p>
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
  const name   = document.getElementById('inp-brand-name')?.value   || 'Weverse Online Shop';
  const slogan = document.getElementById('inp-brand-slogan')?.value || 'Shop Globally, Delivered Worldwide';
  const primary   = document.getElementById('ct-primary')?.value   || '#f97316';
  const secondary = document.getElementById('ct-secondary')?.value || '#3b82f6';
  const logo  = document.getElementById('val-brand_logo')?.value   || '';
  const badge = document.getElementById('val-brand_badge')?.value  || '';

  // Update preview elements
  ['preview-name','preview-footer-name','preview-copy-name'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = name; });
  ['preview-slogan','preview-footer-slogan'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = slogan; });

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
  renderBrandManager();
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

window.handleBrandImgUpload = async function(e, field) {
  const file = e.target.files?.[0];
  if (!file) return;
  const statusEl = document.getElementById('brand-upload-status');
  const msgEl    = document.getElementById('brand-upload-msg');
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
    updateLivePreview();
    setTimeout(() => renderBrandManager(), 1000);
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
    showToast('Save failed: ' + error.message, 'error');
    if (btn) { btn.disabled = false; btn.innerHTML = '<i data-lucide="save" class="w-4 h-4 inline mr-2"></i>Save Brand & Apply to All Pages'; if (window.lucide) lucide.createIcons(); }
    return;
  }

  // Clear brand cache so all pages reload the new settings immediately
  try { localStorage.removeItem('weverse_brand_v1'); } catch {}

  showToast('✅ Brand saved! All pages will now show your updated brand.', 'success');
  setTimeout(() => renderBrandManager(), 500);
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
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button onclick="triggerDeploy()" class="btn-press glass-soft border border-blue-500/15 hover:border-blue-500/40 rounded-xl p-4 text-center transition">
            <i data-lucide="rocket" class="w-6 h-6 text-blue-400 mx-auto mb-2"></i>
            <p class="text-xs font-black text-white">Deploy Now</p>
            <p class="text-[10px] text-gray-500 mt-0.5">Push to live</p>
          </button>
          <button onclick="triggerRebuild()" class="btn-press glass-soft border border-violet-500/15 hover:border-violet-500/40 rounded-xl p-4 text-center transition">
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
  if (error) { showToast(error.message, 'error'); return; }
  showToast('Deploy & payment settings saved!');
  renderPublish();
};

window.triggerDeploy = async function() {
  const { data: s } = await supabase.from('site_settings').select('deploy_webhook,production_url,github_repo').limit(1).maybeSingle();
  if (!s?.deploy_webhook) {
    showToast('No webhook URL set. Add your deploy webhook in the settings below.', 'info');
    return;
  }
  try {
    const btn = event?.target;
    if (btn) { btn.disabled = true; btn.textContent = 'Deploying…'; }
    const res = await fetch(s.deploy_webhook, { method: 'POST' });
    if (res.ok) {
      showToast('🚀 Deployment triggered! Your site will be live in ~2 minutes.');
      await supabase.from('deployment_history').insert({ version: new Date().toISOString(), status: 'triggered', notes: 'Manual deploy from admin' });
    } else {
      showToast('Webhook returned error: ' + res.status, 'error');
    }
    if (btn) { btn.disabled = false; btn.textContent = '🚀 Deploy Now'; }
  } catch (err) { showToast('Deploy failed: ' + err.message, 'error'); }
};

window.triggerRebuild = function() { showToast('Rebuild triggered via webhook', 'info'); };

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
//  LIVE STREAMING & VIDEO CALL MANAGER
// ══════════════════════════════════════════════════════════
window._liveControlAdminState = null;
window._livePublicState = null;

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

async function ensureLiveControlLoaded() {
  if (!window._liveControlAdminState) window._liveControlAdminState = await loadLiveControlAdminState();
  if (!window._livePublicState) window._livePublicState = await loadPublicLiveState();
}

function setDeepValue(target, path, value) {
  const keys = path.split('.');
  let cursor = target;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!cursor[key] || typeof cursor[key] !== 'object') cursor[key] = {};
    cursor = cursor[key];
  }
  cursor[keys[keys.length - 1]] = value;
}

function livePlatformCard(platform, definition, collectionName) {
  const value = (path) => {
    const keys = path.split('.');
    let cursor = platform;
    for (const key of keys) cursor = cursor?.[key];
    return cursor || '';
  };
  return `
    <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-4">
      <div class="flex items-start justify-between gap-3">
        <div>
          <div class="flex items-center gap-2 mb-1"><i data-lucide="${definition.icon}" class="w-4 h-4 text-blue-400"></i><h3 class="text-sm font-black text-white">${definition.label}</h3></div>
          <p class="text-[11px] text-gray-500">${definition.description}</p>
        </div>
        <label class="toggle-switch shrink-0"><input type="checkbox" ${platform.enabled ? 'checked' : ''} onchange="toggleLivePlatformEnabled('${collectionName}','${platform.id}', this.checked)"><span class="toggle-slider"></span></label>
      </div>
      <div class="form-grid form-grid-2">
        ${definition.fields.includes('apiKey') ? `<div><label class="lbl">API Key</label><input class="input-field" type="password" value="${esc(value('credentials.apiKey'))}" oninput="updateLivePlatformField('${collectionName}','${platform.id}','credentials.apiKey', this.value)" placeholder="Add API key later"></div>` : ''}
        ${definition.fields.includes('apiSecret') ? `<div><label class="lbl">API Secret</label><input class="input-field" type="password" value="${esc(value('credentials.apiSecret'))}" oninput="updateLivePlatformField('${collectionName}','${platform.id}','credentials.apiSecret', this.value)" placeholder="Add API secret later"></div>` : ''}
        ${definition.fields.includes('clientId') ? `<div><label class="lbl">Client ID</label><input class="input-field" value="${esc(value('credentials.clientId'))}" oninput="updateLivePlatformField('${collectionName}','${platform.id}','credentials.clientId', this.value)" placeholder="Client ID"></div>` : ''}
        ${definition.fields.includes('clientSecret') ? `<div><label class="lbl">Client Secret</label><input class="input-field" type="password" value="${esc(value('credentials.clientSecret'))}" oninput="updateLivePlatformField('${collectionName}','${platform.id}','credentials.clientSecret', this.value)" placeholder="Client secret"></div>` : ''}
        ${definition.fields.includes('sdkKey') ? `<div><label class="lbl">SDK Key</label><input class="input-field" value="${esc(value('credentials.sdkKey'))}" oninput="updateLivePlatformField('${collectionName}','${platform.id}','credentials.sdkKey', this.value)" placeholder="SDK key"></div>` : ''}
        ${definition.fields.includes('sdkSecret') ? `<div><label class="lbl">SDK Secret</label><input class="input-field" type="password" value="${esc(value('credentials.sdkSecret'))}" oninput="updateLivePlatformField('${collectionName}','${platform.id}','credentials.sdkSecret', this.value)" placeholder="SDK secret"></div>` : ''}
        ${definition.fields.includes('channelId') ? `<div><label class="lbl">Channel ID</label><input class="input-field" value="${esc(value('settings.channelId'))}" oninput="updateLivePlatformField('${collectionName}','${platform.id}','settings.channelId', this.value)" placeholder="Channel or creator ID"></div>` : ''}
        ${definition.fields.includes('pageId') ? `<div><label class="lbl">Page ID</label><input class="input-field" value="${esc(value('settings.pageId'))}" oninput="updateLivePlatformField('${collectionName}','${platform.id}','settings.pageId', this.value)" placeholder="Page ID"></div>` : ''}
        ${definition.fields.includes('meetingId') ? `<div><label class="lbl">Meeting / Room ID</label><input class="input-field" value="${esc(value('settings.meetingId'))}" oninput="updateLivePlatformField('${collectionName}','${platform.id}','settings.meetingId', this.value)" placeholder="Meeting or room ID"></div>` : ''}
        ${definition.fields.includes('tenantId') ? `<div><label class="lbl">Tenant ID</label><input class="input-field" value="${esc(value('settings.tenantId'))}" oninput="updateLivePlatformField('${collectionName}','${platform.id}','settings.tenantId', this.value)" placeholder="Tenant ID"></div>` : ''}
        ${definition.fields.includes('streamKey') ? `<div><label class="lbl">Stream Key</label><input class="input-field font-mono" value="${esc(value('settings.streamKey'))}" oninput="updateLivePlatformField('${collectionName}','${platform.id}','settings.streamKey', this.value)" placeholder="Stream key"></div>` : ''}
        ${definition.fields.includes('rtmpUrl') ? `<div><label class="lbl">RTMP / Ingest URL</label><input class="input-field font-mono" value="${esc(value('settings.rtmpUrl'))}" oninput="updateLivePlatformField('${collectionName}','${platform.id}','settings.rtmpUrl', this.value)" placeholder="rtmp://..."></div>` : ''}
        ${definition.fields.includes('hostUrl') ? `<div><label class="lbl">Host / Control URL</label><input class="input-field" value="${esc(value('links.hostUrl'))}" oninput="updateLivePlatformField('${collectionName}','${platform.id}','links.hostUrl', this.value)" placeholder="Host dashboard URL"></div>` : ''}
        ${definition.fields.includes('embedUrl') ? `<div><label class="lbl">Embed URL</label><input class="input-field" value="${esc(value('links.embedUrl'))}" oninput="updateLivePlatformField('${collectionName}','${platform.id}','links.embedUrl', this.value)" placeholder="Embeddable player URL"></div>` : ''}
        ${definition.fields.includes('joinUrl') ? `<div><label class="lbl">Join URL</label><input class="input-field" value="${esc(value('links.joinUrl'))}" oninput="updateLivePlatformField('${collectionName}','${platform.id}','links.joinUrl', this.value)" placeholder="Call join URL"></div>` : ''}
        ${definition.fields.includes('webhookSecret') ? `<div><label class="lbl">Webhook Secret</label><input class="input-field" type="password" value="${esc(value('settings.webhookSecret'))}" oninput="updateLivePlatformField('${collectionName}','${platform.id}','settings.webhookSecret', this.value)" placeholder="Webhook secret"></div>` : ''}
      </div>
      <div class="text-[11px] text-gray-500">Keys are not hardcoded. Save your settings here and control them from the dashboard only.</div>
    </div>`;
}

function renderLiveSessionRows(sessions) {
  if (!sessions.length) return '<p class="text-sm text-gray-500 text-center py-8">No live sessions created yet.</p>';
  return sessions.map(session => `
    <div class="glass-soft border border-blue-500/10 rounded-xl p-4 flex flex-col gap-3 lg:flex-row lg:items-center">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1"><span class="text-sm font-black text-white">${esc(session.title)}</span>${badge(session.status)}</div>
        <p class="text-[11px] text-gray-500">Platforms: ${esc(session.selectedPlatforms.join(', ') || 'None')} ${session.scheduledAt ? `• Scheduled: ${esc(fmtDT(session.scheduledAt))}` : ''}</p>
        ${session.headline ? `<p class="text-xs text-gray-400 mt-1">${esc(session.headline)}</p>` : ''}
      </div>
      <div class="flex flex-wrap gap-2">
        <button onclick="startLiveSession('${session.id}')" class="btn-press px-3 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-bold rounded-xl transition">Start</button>
        <button onclick="endLiveSession('${session.id}')" class="btn-press px-3 py-2 bg-gray-700/50 hover:bg-gray-700 text-gray-200 text-xs font-bold rounded-xl transition">End</button>
        <button onclick="removeLiveSession('${session.id}')" class="btn-press px-3 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs font-bold rounded-xl transition">Delete</button>
      </div>
    </div>`).join('');
}

async function renderLiveStreamingManager() {
  const content = document.getElementById('content');
  if (content) content.innerHTML = loading();
  await ensureLiveControlLoaded();
  const liveState = window._livePublicState || {};
  const live = window._liveControlAdminState;
  const enabledPlatforms = live.streamingPlatforms.filter(platform => platform.enabled).length;
  const sessions = live.liveSessions;
  const orderedPlatforms = [...live.streamingPlatforms].sort((a, b) => {
    if (a.id === 'tiktok-live') return -1;
    if (b.id === 'tiktok-live') return 1;
    return 0;
  });
  content.innerHTML = `
    <div class="space-y-5 fade-in">
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex-1">
          <h2 class="text-xl font-black text-white">Live Streaming Manager</h2>
          <p class="text-sm text-gray-500 mt-1">Connect platforms, schedule streams, publish LIVE NOW on the homepage, and prepare multi-platform broadcasting without touching code.</p>
        </div>
        <button onclick="saveLiveStreamingSettings()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">Save Streaming Settings</button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        ${statCard('Enabled Platforms', enabledPlatforms, 'radio', 'red', 'Live destinations configured')}
        ${statCard('Scheduled Streams', sessions.filter(session => session.status === 'scheduled').length, 'calendar', 'blue', 'Upcoming broadcasts')}
        ${statCard('Live Now', liveState.isLive ? 1 : 0, 'signal', 'emerald', liveState.isLive ? liveState.headline || 'Active stream' : 'Offline')}
        ${statCard('Viewers Snapshot', liveState.viewerCount || 0, 'users', 'amber', `${liveState.commentCount || 0} comments tracked`) }
      </div>

      <div class="glass-soft border border-red-500/20 rounded-2xl p-5 space-y-4">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0"><i data-lucide="smartphone" class="w-5 h-5 text-red-400"></i></div>
          <div>
            <h3 class="text-sm font-black text-white">TikTok Real Setup</h3>
            <p class="text-[11px] text-gray-400 mt-1">If your main goal is TikTok, the real external streaming workflow is RTMP-based. Do not rely on API key only.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
          <div class="rounded-2xl border border-blue-500/10 bg-blue-950/40 p-4">
            <p class="text-xs font-black uppercase tracking-wide text-blue-300 mb-2">Collect From TikTok</p>
            <div class="space-y-2 text-gray-300">
              <p>1. Open TikTok on your phone and confirm your account has LIVE access.</p>
              <p>2. If your account supports external streaming, open TikTok LIVE Center or TikTok LIVE Studio.</p>
              <p>3. Copy the RTMP server URL.</p>
              <p>4. Copy the stream key.</p>
              <p>5. If TikTok gives you a watch/share page, copy that into Embed URL or Host URL.</p>
            </div>
          </div>
          <div class="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-4">
            <p class="text-xs font-black uppercase tracking-wide text-emerald-300 mb-2">Put It Here In Admin</p>
            <div class="space-y-2 text-gray-300">
              <p>1. Enable <strong>TikTok Live</strong>.</p>
              <p>2. Paste the server URL into <strong>RTMP / Ingest URL</strong>.</p>
              <p>3. Paste the stream key into <strong>Stream Key</strong>.</p>
              <p>4. Add your TikTok page or watch link into <strong>Host / Control URL</strong>.</p>
              <p>5. Add an embeddable player URL if you have one. If not, use the homepage LIVE badge and a watch link.</p>
              <p>6. Save settings, then start streaming from your phone or encoder and click <strong>Start Live Now</strong> here to publish the site-wide live state.</p>
            </div>
          </div>
        </div>
        <div class="rounded-xl border border-amber-500/15 bg-amber-500/5 p-3 text-[11px] text-amber-200">
          TikTok only becomes truly real after you collect the live RTMP details from TikTok and start the broadcast from the TikTok-supported phone/app or encoder workflow. This admin page is where you save and manage those details.
        </div>
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
        <div class="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <h3 class="text-sm font-black text-white">Platform Connections</h3>
            <p class="text-[11px] text-gray-500">Add your API keys, stream keys, embed URLs, and host dashboards later. Each platform can be enabled or disabled independently.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
          ${orderedPlatforms.map(platform => livePlatformCard(platform, LIVE_STREAM_PLATFORM_DEFS.find(def => def.id === platform.id), 'streamingPlatforms')).join('')}
        </div>
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
        <div>
          <h3 class="text-sm font-black text-white">Create or Schedule Live Stream</h3>
          <p class="text-[11px] text-gray-500 mt-1">Select one or more platforms, set the homepage embed URL, and publish a synchronized live status across the website and mobile app.</p>
        </div>
        <div class="form-grid form-grid-2">
          <div><label class="lbl">Stream Title</label><input id="live-session-title" class="input-field" placeholder="e.g. Friday Product Showcase"></div>
          <div><label class="lbl">Badge Text</label><input id="live-session-badge" class="input-field" value="${esc(live.preferences.defaultBadgeText || 'LIVE NOW')}" placeholder="LIVE NOW"></div>
          <div class="sm:col-span-2"><label class="lbl">Homepage Headline</label><input id="live-session-headline" class="input-field" placeholder="Tell visitors what is happening live"></div>
          <div class="sm:col-span-2"><label class="lbl">Description</label><textarea id="live-session-description" class="input-field" rows="3" placeholder="Stream summary, agenda, products, or event details"></textarea></div>
          <div><label class="lbl">Embed URL</label><input id="live-session-embed" class="input-field" placeholder="https://... embeddable live player"></div>
          <div><label class="lbl">Schedule Date & Time</label><input id="live-session-scheduled" type="datetime-local" class="input-field"></div>
        </div>
        <div>
          <label class="lbl">Stream To Platforms</label>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 mt-2">
            ${orderedPlatforms.filter(platform => platform.enabled).map(platform => `<label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2 text-xs text-gray-300"><input type="checkbox" class="accent-red-500" value="${platform.id}" data-live-platform-select><span>${esc(platform.label)}</span></label>`).join('') || '<p class="text-xs text-gray-500">Enable at least one streaming platform above.</p>'}
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2 text-xs text-gray-300"><input id="live-notify-visitors" type="checkbox" class="accent-blue-500" checked><span>Notify visitors when live</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2 text-xs text-gray-300"><input id="live-show-badge" type="checkbox" class="accent-blue-500" checked><span>Show LIVE NOW badge on homepage</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2 text-xs text-gray-300"><input id="live-show-embed" type="checkbox" class="accent-blue-500" checked><span>Embed live player on homepage</span></label>
        </div>
        <div class="flex flex-wrap gap-3">
          <button onclick="createLiveSession('scheduled')" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">Schedule Stream</button>
          <button onclick="createLiveSession('live')" class="btn-press bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">Start Live Now</button>
          <button onclick="clearPublicLiveState()" class="btn-press bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">End Current Live</button>
        </div>
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
        <div class="flex items-center justify-between gap-3"><h3 class="text-sm font-black text-white">Live Stream Sessions</h3><span class="text-[11px] text-gray-500">Start, end, remove, or republish sessions instantly</span></div>
        ${renderLiveSessionRows(sessions)}
      </div>
    </div>`;
  if (window.lucide) lucide.createIcons();
}

function renderRoomRows(rooms) {
  if (!rooms.length) return '<p class="text-sm text-gray-500 text-center py-8">No video call rooms created yet.</p>';
  return rooms.map(room => `
    <div class="glass-soft border border-blue-500/10 rounded-xl p-4 flex flex-col gap-3 lg:flex-row lg:items-center">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1"><span class="text-sm font-black text-white">${esc(room.title)}</span>${badge(room.status)}</div>
        <p class="text-[11px] text-gray-500">Provider: ${esc(room.providerId)} • Type: ${esc(room.callType)}${room.scheduledAt ? ` • Scheduled: ${esc(fmtDT(room.scheduledAt))}` : ''}</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <button onclick="startVideoRoom('${room.id}')" class="btn-press px-3 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-xl transition">Start</button>
        <button onclick="endVideoRoom('${room.id}')" class="btn-press px-3 py-2 bg-gray-700/50 hover:bg-gray-700 text-gray-200 text-xs font-bold rounded-xl transition">End</button>
        <button onclick="removeVideoRoom('${room.id}')" class="btn-press px-3 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs font-bold rounded-xl transition">Delete</button>
      </div>
    </div>`).join('');
}

async function renderVideoCallManager() {
  const content = document.getElementById('content');
  if (content) content.innerHTML = loading();
  await ensureLiveControlLoaded();
  const live = window._liveControlAdminState;
  const enabledProviders = live.videoCallProviders.filter(provider => provider.enabled).length;
  const activeRooms = live.videoCallRooms.filter(room => room.status === 'live').length;
  content.innerHTML = `
    <div class="space-y-5 fade-in">
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex-1">
          <h2 class="text-xl font-black text-white">Video Call Manager</h2>
          <p class="text-sm text-gray-500 mt-1">Configure meeting providers, create one-to-one or group rooms, and manage screen sharing, recording, waiting rooms, moderation, and file sharing from the dashboard.</p>
        </div>
        <button onclick="saveVideoCallSettings()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">Save Video Call Settings</button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        ${statCard('Enabled Call Providers', enabledProviders, 'video', 'blue', 'Provider connections ready')}
        ${statCard('Active Calls', activeRooms, 'video', 'emerald', 'Rooms currently running')}
        ${statCard('Scheduled Calls', live.videoCallRooms.filter(room => room.status === 'scheduled').length, 'calendar', 'amber', 'Upcoming meetings')}
        ${statCard('Room Templates', live.videoCallRooms.length, 'layers', 'violet', 'Saved one-to-one and group rooms')}
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
        <h3 class="text-sm font-black text-white">Provider Connections</h3>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
          ${live.videoCallProviders.map(provider => livePlatformCard(provider, VIDEO_CALL_PROVIDER_DEFS.find(def => def.id === provider.id), 'videoCallProviders')).join('')}
        </div>
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
        <div>
          <h3 class="text-sm font-black text-white">Create Video Call Room</h3>
          <p class="text-[11px] text-gray-500 mt-1">Prepare rooms for one-to-one calls, group calls, screen sharing, moderation, and recorded meetings.</p>
        </div>
        <div class="form-grid form-grid-2">
          <div><label class="lbl">Room Title</label><input id="video-room-title" class="input-field" placeholder="e.g. VIP Buyer Consultation"></div>
          <div><label class="lbl">Provider</label><select id="video-room-provider" class="input-field">${live.videoCallProviders.map(provider => `<option value="${provider.id}">${esc(provider.label)}</option>`).join('')}</select></div>
          <div><label class="lbl">Room Type</label><select id="video-room-type" class="input-field"><option value="one_to_one">One-to-one</option><option value="group">Group</option></select></div>
          <div><label class="lbl">Schedule Date & Time</label><input id="video-room-scheduled" type="datetime-local" class="input-field"></div>
          <div><label class="lbl">Room Code / Meeting ID</label><input id="video-room-code" class="input-field" placeholder="Meeting ID or room code"></div>
          <div><label class="lbl">Max Participants</label><input id="video-room-max" type="number" class="input-field" value="25" min="2"></div>
          <div><label class="lbl">Host URL</label><input id="video-room-host" class="input-field" placeholder="Host start URL"></div>
          <div><label class="lbl">Join URL</label><input id="video-room-join" class="input-field" placeholder="Participant join URL"></div>
          <div class="sm:col-span-2"><label class="lbl">Embed URL</label><input id="video-room-embed" class="input-field" placeholder="Embeddable call URL for web/mobile"></div>
          <div class="sm:col-span-2"><label class="lbl">Notes</label><textarea id="video-room-notes" class="input-field" rows="3" placeholder="Call agenda, internal notes, participant instructions"></textarea></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 text-xs text-gray-300">
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2"><input id="video-waiting-room" type="checkbox" checked class="accent-blue-500"><span>Waiting room</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2"><input id="video-screen-share" type="checkbox" checked class="accent-blue-500"><span>Screen sharing</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2"><input id="video-recording" type="checkbox" class="accent-blue-500"><span>Call recording</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2"><input id="video-chat" type="checkbox" checked class="accent-blue-500"><span>Chat during call</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2"><input id="video-file-share" type="checkbox" checked class="accent-blue-500"><span>File sharing</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2"><input id="video-mute-entry" type="checkbox" class="accent-blue-500"><span>Mute on entry</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2"><input id="video-camera-control" type="checkbox" checked class="accent-blue-500"><span>Camera controls</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2"><input id="video-remove-participants" type="checkbox" checked class="accent-blue-500"><span>Mute / remove participants</span></label>
        </div>
        <div class="flex flex-wrap gap-3">
          <button onclick="createVideoRoom('scheduled')" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">Schedule Call</button>
          <button onclick="createVideoRoom('live')" class="btn-press bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">Start Call</button>
        </div>
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
        <div class="flex items-center justify-between gap-3"><h3 class="text-sm font-black text-white">Video Call Rooms</h3><span class="text-[11px] text-gray-500">Use host links, embed URLs, and moderation toggles without code changes</span></div>
        ${renderRoomRows(live.videoCallRooms)}
      </div>
    </div>`;
  if (window.lucide) lucide.createIcons();
}

window.updateLivePlatformField = function(collectionName, platformId, path, value) {
  const collection = window._liveControlAdminState?.[collectionName] || [];
  const platform = collection.find(item => item.id === platformId);
  if (!platform) return;
  setDeepValue(platform, path, value);
};

window.toggleLivePlatformEnabled = function(collectionName, platformId, enabled) {
  const collection = window._liveControlAdminState?.[collectionName] || [];
  const platform = collection.find(item => item.id === platformId);
  if (!platform) return;
  platform.enabled = enabled;
};

async function persistLiveControl(showMessage = true) {
  const { error } = await saveLiveControlAdminState(window._liveControlAdminState);
  if (error) {
    showToast('Saved locally. Run the live manager migration to persist provider settings.', 'info');
    return false;
  }
  if (showMessage) showToast('Live manager settings saved');
  return true;
}

window.saveLiveStreamingSettings = async function() { await persistLiveControl(true); };
window.saveVideoCallSettings = async function() { await persistLiveControl(true); };

window.createLiveSession = async function(mode) {
  await ensureLiveControlLoaded();
  const selectedPlatforms = [...document.querySelectorAll('[data-live-platform-select]:checked')].map(input => input.value);
  const session = {
    id: `session-${Date.now()}`,
    title: document.getElementById('live-session-title')?.value?.trim() || 'Live Stream',
    headline: document.getElementById('live-session-headline')?.value?.trim() || '',
    description: document.getElementById('live-session-description')?.value?.trim() || '',
    embedUrl: document.getElementById('live-session-embed')?.value?.trim() || '',
    badgeText: document.getElementById('live-session-badge')?.value?.trim() || 'LIVE NOW',
    status: mode === 'live' ? 'live' : 'scheduled',
    scheduledAt: document.getElementById('live-session-scheduled')?.value || '',
    startedAt: mode === 'live' ? new Date().toISOString() : '',
    selectedPlatforms,
    notifyVisitors: document.getElementById('live-notify-visitors')?.checked !== false,
    showHomepageBadge: document.getElementById('live-show-badge')?.checked !== false,
    showHomepageEmbed: !!document.getElementById('live-show-embed')?.checked,
    viewerCount: 0,
    commentCount: 0,
    streamStatus: mode === 'live' ? 'live' : 'scheduled',
  };
  window._liveControlAdminState.liveSessions.unshift(session);
  if (mode === 'live') {
    window._livePublicState = {
      isLive: true,
      badgeText: session.badgeText,
      headline: session.headline || session.title,
      description: session.description,
      platformLabels: session.selectedPlatforms.map(id => LIVE_STREAM_PLATFORM_DEFS.find(def => def.id === id)?.label || id),
      embedUrl: session.showHomepageEmbed ? session.embedUrl : '',
      viewerCount: session.viewerCount,
      commentCount: session.commentCount,
      streamStatus: 'live',
      sessionId: session.id,
      notifyVisitors: session.notifyVisitors,
      startedAt: session.startedAt,
      updatedAt: new Date().toISOString(),
    };
    await savePublicLiveState(window._livePublicState);
  }
  await persistLiveControl(false);
  showToast(mode === 'live' ? 'Live stream started' : 'Live stream scheduled');
  renderLiveStreamingManager();
};

window.startLiveSession = async function(sessionId) {
  await ensureLiveControlLoaded();
  const session = window._liveControlAdminState.liveSessions.find(item => item.id === sessionId);
  if (!session) return;
  session.status = 'live';
  session.startedAt = new Date().toISOString();
  session.streamStatus = 'live';
  window._livePublicState = {
    isLive: true,
    badgeText: session.badgeText || 'LIVE NOW',
    headline: session.headline || session.title,
    description: session.description || '',
    platformLabels: session.selectedPlatforms.map(id => LIVE_STREAM_PLATFORM_DEFS.find(def => def.id === id)?.label || id),
    embedUrl: session.showHomepageEmbed ? session.embedUrl : '',
    viewerCount: session.viewerCount || 0,
    commentCount: session.commentCount || 0,
    streamStatus: 'live',
    sessionId: session.id,
    notifyVisitors: session.notifyVisitors !== false,
    startedAt: session.startedAt,
    updatedAt: new Date().toISOString(),
  };
  await savePublicLiveState(window._livePublicState);
  await persistLiveControl(false);
  showToast('Live session published');
  renderLiveStreamingManager();
};

window.endLiveSession = async function(sessionId) {
  await ensureLiveControlLoaded();
  const session = window._liveControlAdminState.liveSessions.find(item => item.id === sessionId);
  if (!session) return;
  session.status = 'ended';
  session.streamStatus = 'ended';
  session.endedAt = new Date().toISOString();
  if (window._livePublicState?.sessionId === sessionId) await window.clearPublicLiveState();
  else {
    await persistLiveControl(false);
    showToast('Live session ended');
    renderLiveStreamingManager();
  }
};

window.removeLiveSession = async function(sessionId) {
  window._liveControlAdminState.liveSessions = window._liveControlAdminState.liveSessions.filter(item => item.id !== sessionId);
  if (window._livePublicState?.sessionId === sessionId) await window.clearPublicLiveState();
  await persistLiveControl(false);
  showToast('Live session deleted');
  renderLiveStreamingManager();
};

window.clearPublicLiveState = async function() {
  window._livePublicState = {
    isLive: false,
    badgeText: 'LIVE NOW',
    headline: '',
    description: '',
    platformLabels: [],
    embedUrl: '',
    viewerCount: 0,
    commentCount: 0,
    streamStatus: 'offline',
    sessionId: '',
    notifyVisitors: true,
    startedAt: '',
    updatedAt: new Date().toISOString(),
  };
  await savePublicLiveState(window._livePublicState);
  await persistLiveControl(false);
  showToast('Public live state cleared');
  renderLiveStreamingManager();
};

window.createVideoRoom = async function(mode) {
  await ensureLiveControlLoaded();
  const room = {
    id: `room-${Date.now()}`,
    title: document.getElementById('video-room-title')?.value?.trim() || 'Video Call Room',
    providerId: document.getElementById('video-room-provider')?.value || 'zoom',
    callType: document.getElementById('video-room-type')?.value || 'group',
    roomCode: document.getElementById('video-room-code')?.value?.trim() || '',
    hostUrl: document.getElementById('video-room-host')?.value?.trim() || '',
    joinUrl: document.getElementById('video-room-join')?.value?.trim() || '',
    embedUrl: document.getElementById('video-room-embed')?.value?.trim() || '',
    status: mode === 'live' ? 'live' : 'scheduled',
    scheduledAt: document.getElementById('video-room-scheduled')?.value || '',
    startedAt: mode === 'live' ? new Date().toISOString() : '',
    maxParticipants: parseInt(document.getElementById('video-room-max')?.value || '25', 10) || 25,
    waitingRoom: !!document.getElementById('video-waiting-room')?.checked,
    screenShare: !!document.getElementById('video-screen-share')?.checked,
    recording: !!document.getElementById('video-recording')?.checked,
    chatEnabled: !!document.getElementById('video-chat')?.checked,
    fileSharing: !!document.getElementById('video-file-share')?.checked,
    muteOnEntry: !!document.getElementById('video-mute-entry')?.checked,
    cameraControl: !!document.getElementById('video-camera-control')?.checked,
    removeParticipants: !!document.getElementById('video-remove-participants')?.checked,
    notes: document.getElementById('video-room-notes')?.value?.trim() || '',
  };
  window._liveControlAdminState.videoCallRooms.unshift(room);
  await persistLiveControl(false);
  if (mode === 'live' && room.hostUrl) window.open(room.hostUrl, '_blank', 'noopener');
  showToast(mode === 'live' ? 'Video call started' : 'Video call scheduled');
  renderVideoCallManager();
};

window.startVideoRoom = async function(roomId) {
  const room = window._liveControlAdminState.videoCallRooms.find(item => item.id === roomId);
  if (!room) return;
  room.status = 'live';
  room.startedAt = new Date().toISOString();
  await persistLiveControl(false);
  if (room.hostUrl) window.open(room.hostUrl, '_blank', 'noopener');
  showToast('Video room started');
  renderVideoCallManager();
};

window.endVideoRoom = async function(roomId) {
  const room = window._liveControlAdminState.videoCallRooms.find(item => item.id === roomId);
  if (!room) return;
  room.status = 'ended';
  room.endedAt = new Date().toISOString();
  await persistLiveControl(false);
  showToast('Video room ended');
  renderVideoCallManager();
};

window.removeVideoRoom = async function(roomId) {
  window._liveControlAdminState.videoCallRooms = window._liveControlAdminState.videoCallRooms.filter(item => item.id !== roomId);
  await persistLiveControl(false);
  showToast('Video room deleted');
  renderVideoCallManager();
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