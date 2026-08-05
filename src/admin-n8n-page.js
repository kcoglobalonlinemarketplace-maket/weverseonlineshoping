import { supabase } from './supabase-client.js';

const LOCAL_DEV_HOSTS = new Set(['localhost', '127.0.0.1']);
const SUPABASE_BASE_URL = (import.meta.env.VITE_SUPABASE_URL || 'https://wttnvwpoqmbxryivcerf.supabase.co').replace(/\/$/, '');
const AI_FUNCTION_URL = LOCAL_DEV_HOSTS.has(window.location.hostname)
  ? '/_supabase/functions/v1/ai-admin-assistant'
  : `${SUPABASE_BASE_URL}/functions/v1/ai-admin-assistant`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const N8N_ASSISTANTS = [
  { id: 'product_ai', label: 'Product AI', icon: 'package', note: 'Create and structure product data.' },
  { id: 'writer_ai', label: 'Writer AI', icon: 'pen-line', note: 'Generate marketing copy and descriptions.' },
  { id: 'image_ai', label: 'Image AI', icon: 'image', note: 'Image prompts, tags, and media instructions.' },
  { id: 'showroom_ai', label: 'Showroom AI', icon: 'store', note: 'Publish items and align listing details.' },
  { id: 'seo_ai', label: 'SEO AI', icon: 'search', note: 'Optimize metadata and search targeting.' },
  { id: 'customer_support_ai', label: 'Customer Support AI', icon: 'headphones', note: 'Prepare customer-facing answers and FAQs.' },
  { id: 'website_builder_ai', label: 'Website Builder AI', icon: 'code-2', note: 'Apply layout/build workflow steps.' },
  { id: 'ai_repair_assistant', label: 'AI Repair Assistant', icon: 'shield-check', note: 'Run verification and repair checks.' },
];

let state = {
  user: null,
  isAdmin: false,
  settings: null,
  saving: false,
};

function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-msg');
  const icon = toast?.querySelector('i[data-lucide]');
  if (!toast || !msgEl) return;
  msgEl.textContent = msg;
  const iconMap = { success: 'check-circle', error: 'alert-circle', info: 'info' };
  const colorMap = { success: 'text-emerald-400', error: 'text-red-400', info: 'text-amber-400' };
  if (icon) { icon.setAttribute('data-lucide', iconMap[type] || 'info'); icon.className = `w-4 h-4 shrink-0 ${colorMap[type] || 'text-amber-400'}`; }
  toast.classList.remove('translate-y-20', 'opacity-0');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.add('translate-y-20', 'opacity-0'), 3000);
  if (window.lucide) lucide.createIcons();
}

function esc(t) {
  if (t == null) return '';
  const d = document.createElement('div'); d.textContent = String(t); return d.innerHTML;
}

function defaultAssistantToggles() {
  const row = {};
  for (const assistant of N8N_ASSISTANTS) row[assistant.id] = true;
  return row;
}

function normalizeAssistantToggles(raw) {
  const base = defaultAssistantToggles();
  if (!raw || typeof raw !== 'object') return base;
  for (const assistant of N8N_ASSISTANTS) {
    if (typeof raw[assistant.id] === 'boolean') base[assistant.id] = raw[assistant.id];
  }
  return base;
}

function normalizeAssistantWebhooks(raw) {
  const base = {};
  if (!raw || typeof raw !== 'object') return base;
  for (const assistant of N8N_ASSISTANTS) {
    const value = raw[assistant.id];
    if (typeof value === 'string' && value.trim()) base[assistant.id] = value.trim();
  }
  return base;
}

window.togglePassword = (fieldId) => {
  const input = document.getElementById(fieldId);
  const eye = document.getElementById(fieldId + '-eye');
  if (!input) return;
  const isPass = input.type === 'password';
  input.type = isPass ? 'text' : 'password';
  if (eye) eye.setAttribute('data-lucide', isPass ? 'eye-off' : 'eye');
  if (window.lucide) lucide.createIcons();
};

window.toggleAutomationCenterEnabled = () => {
  if (!state.settings) return;
  state.settings.automation_center_enabled = state.settings.automation_center_enabled !== true;
  render();
  saveSettings();
};

window.toggleAssistantEnabled = (assistantId) => {
  if (!state.settings) return;
  const toggles = normalizeAssistantToggles(state.settings.n8n_assistant_enabled);
  toggles[assistantId] = toggles[assistantId] !== true;
  state.settings.n8n_assistant_enabled = toggles;
  render();
  saveSettings();
};

window.saveSettings = async () => {
  if (state.saving) return;
  state.saving = true;
  const btn = document.getElementById('save-btn');
  if (btn) { btn.disabled = true; btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i> Saving...'; }
  if (window.lucide) lucide.createIcons();

  const updates = {};

  const urlEl = document.getElementById('n8n_webhook_url');
  const tokenEl = document.getElementById('n8n_webhook_token');
  if (urlEl) updates.n8n_webhook_url = urlEl.value.trim() || null;
  if (tokenEl) updates.n8n_webhook_token = tokenEl.value.trim() || null;

  updates.automation_center_enabled = state.settings.automation_center_enabled === true;
  updates.n8n_assistant_enabled = normalizeAssistantToggles(state.settings.n8n_assistant_enabled);

  const webhookMap = {};
  for (const assistant of N8N_ASSISTANTS) {
    const hookEl = document.getElementById(`hook_${assistant.id}`);
    const hookVal = hookEl ? hookEl.value.trim() : '';
    if (hookVal) webhookMap[assistant.id] = hookVal;
  }
  updates.n8n_assistant_webhooks = webhookMap;

  updates.repair_ai_provider = (document.getElementById('repair_ai_provider')?.value || 'openrouter').trim();
  updates.repair_ai_model = (document.getElementById('repair_ai_model')?.value || 'google/gemini-2.0-flash-exp:free').trim();
  updates.repair_ai_api_key = document.getElementById('repair_ai_api_key')?.value.trim() || null;
  updates.repair_auto_apply_safe_fixes = document.getElementById('repair_auto_apply_safe_fixes')?.checked !== false;
  const scanMinutesRaw = Number(document.getElementById('repair_scan_interval_minutes')?.value || 15);
  updates.repair_scan_interval_minutes = Number.isFinite(scanMinutesRaw)
    ? Math.max(1, Math.min(1440, Math.round(scanMinutesRaw)))
    : 15;

  try {
    const { error } = await supabase.from('ai_settings').update(updates).eq('id', state.settings.id);
    if (error) throw error;
    Object.assign(state.settings, updates);
    showToast('n8n settings saved successfully!', 'success');
    render();
  } catch (err) {
    showToast('Failed to save: ' + err.message, 'error');
  } finally {
    state.saving = false;
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i data-lucide="save" class="w-4 h-4 inline mr-2"></i> Save Settings';
    }
    if (window.lucide) lucide.createIcons();
  }
};

window.testAutomationCenter = async () => {
  const btn = document.getElementById('test-btn');
  if (btn) { btn.disabled = true; btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i> Testing...'; }
  if (window.lucide) lucide.createIcons();
  try {
    const { data: { session } } = await supabase.auth.getSession();
    const res = await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${session?.access_token || ANON_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'test_automation_center', developer_mode: true }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success === false) {
      const detail = Array.isArray(data?.checks)
        ? data.checks.map((c) => `${c.assistant}: ${c.ok ? 'OK' : `FAIL (${c.detail})`}`).join('\n')
        : (data.error || `HTTP ${res.status}`);
      showToast('Automation test failed. Check the console.', 'error');
      console.error('[n8n] Automation test failed:', detail);
      return;
    }
    const checks = Array.isArray(data.checks) ? data.checks : [];
    const failed = checks.filter((c) => !c.ok);
    if (failed.length === 0) {
      showToast('Automation Center is healthy.', 'success');
    } else {
      showToast(`${failed.length} assistant(s) failed the health check.`, 'error');
    }
  } catch (err) {
    showToast('Automation test error: ' + err.message, 'error');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i data-lucide="activity" class="w-4 h-4 inline mr-2"></i> Test Automation Center';
    }
    if (window.lucide) lucide.createIcons();
  }
};

window.showBootstrapPrompt = () => {
  const denied = document.getElementById('access-denied');
  denied.classList.remove('hidden');
  denied.innerHTML = `
    <div class="glass border border-amber-500/20 rounded-2xl p-8 max-w-md w-full text-center slide-up">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-2xl mb-4">
        <i data-lucide="user-cog" class="w-8 h-8 text-amber-400"></i>
      </div>
      <h2 class="text-xl font-bold text-white mb-2">Become Admin</h2>
      <p class="text-sm text-gray-400 mb-6">No administrator has been set up yet. Promote your account to access n8n Automation settings.</p>
      <button onclick="bootstrapAdmin()" id="bootstrap-btn" class="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-3 px-6 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-amber-600/30">
        <i data-lucide="shield" class="w-4 h-4"></i> Become Admin
      </button>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
};

window.bootstrapAdmin = async () => {
  const btn = document.getElementById('bootstrap-btn');
  if (!btn) return;
  btn.disabled = true;
  btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Promoting...';
  if (window.lucide) lucide.createIcons();
  try {
    const { data: session } = await supabase.auth.getSession();
    const res = await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${session.session?.access_token || ANON_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'bootstrap_admin' }),
    });
    const data = await res.json();
    if (res.ok && data.success) {
      showToast('You are now an admin!', 'success');
      setTimeout(() => window.location.reload(), 1000);
    } else {
      showToast(data.error || 'Failed to become admin', 'error');
      btn.disabled = false;
      btn.innerHTML = '<i data-lucide="shield" class="w-4 h-4"></i> Become Admin';
      if (window.lucide) lucide.createIcons();
    }
  } catch (err) {
    showToast('Error: ' + err.message, 'error');
    btn.disabled = false;
    btn.innerHTML = '<i data-lucide="shield" class="w-4 h-4"></i> Become Admin';
    if (window.lucide) lucide.createIcons();
  }
};

function render() {
  const root = document.getElementById('n8n-root');
  if (!root || !state.settings) return;
  const s = state.settings;
  s.n8n_assistant_enabled = normalizeAssistantToggles(s.n8n_assistant_enabled);
  s.n8n_assistant_webhooks = normalizeAssistantWebhooks(s.n8n_assistant_webhooks);
  const automationEnabled = s.automation_center_enabled === true;

  root.innerHTML = `
    <div class="fade-in">
      <div class="mb-6">
        <h1 class="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">n8n AI Automation Center</h1>
        <p class="text-sm text-gray-500">Configure n8n webhooks, assistant modules, and the AI Repair Assistant — all in one organized place.</p>
      </div>

      <!-- Automation Center master toggle -->
      <div class="glass border border-amber-500/20 rounded-2xl p-5 slide-up mb-4">
        <div class="flex items-center justify-between gap-3">
          <div>
            <h3 class="text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <i data-lucide="workflow" class="w-4 h-4 text-amber-400"></i> AI Automation Center (n8n)
            </h3>
            <p class="text-xs text-gray-500 mt-1">Central orchestration for all assistant modules. Each module can be toggled and mapped to its own webhook.</p>
          </div>
          <button onclick="toggleAutomationCenterEnabled()" class="relative inline-flex h-8 w-14 items-center rounded-full transition ${automationEnabled ? 'bg-emerald-500' : 'bg-gray-600'}">
            <span class="inline-block h-6 w-6 transform rounded-full bg-white transition ${automationEnabled ? 'translate-x-7' : 'translate-x-1'}"></span>
          </button>
        </div>
        <div class="mt-3 text-xs font-bold ${automationEnabled ? 'text-emerald-400' : 'text-gray-500'}">${automationEnabled ? 'Automation Center is ON' : 'Automation Center is OFF'}</div>
      </div>

      <!-- n8n connection -->
      <div class="glass border border-amber-500/20 rounded-2xl p-5 slide-up mb-4">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-3 flex items-center gap-2">
          <i data-lucide="plug-zap" class="w-4 h-4 text-amber-400"></i> n8n Connection
        </h3>
        <div class="space-y-3">
          <div>
            <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">n8n Webhook URL</label>
            <div class="relative">
              <input type="text" id="n8n_webhook_url" placeholder="https://your-n8n-host/webhook/admin-ai" value="${esc(s.n8n_webhook_url || '')}" class="input-field w-full bg-[#0a1124]/80 border border-amber-500/20 rounded-xl pl-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">n8n Token (optional)</label>
            <div class="relative">
              <input type="password" id="n8n_webhook_token" placeholder="Optional n8n token/header secret" value="${esc(s.n8n_webhook_token || '')}" class="input-field w-full bg-[#0a1124]/80 border border-amber-500/20 rounded-xl pl-4 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
              <button onclick="togglePassword('n8n_webhook_token')" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition">
                <i data-lucide="eye" class="w-4 h-4" id="n8n_webhook_token-eye"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Assistant modules -->
      <div class="glass border border-blue-500/20 rounded-2xl p-5 slide-up mb-4">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4 flex items-center gap-2">
          <i data-lucide="boxes" class="w-4 h-4 text-blue-400"></i> Assistant Modules
        </h3>
        <div class="grid grid-cols-1 gap-3">
          ${N8N_ASSISTANTS.map((assistant) => {
            const enabled = s.n8n_assistant_enabled?.[assistant.id] !== false;
            const value = s.n8n_assistant_webhooks?.[assistant.id] || '';
            return `
            <div class="glass-soft border border-amber-500/15 rounded-xl p-3">
              <div class="flex items-center justify-between gap-2 mb-2">
                <div class="flex items-center gap-2.5 min-w-0">
                  <div class="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <i data-lucide="${assistant.icon}" class="w-4 h-4 text-amber-400"></i>
                  </div>
                  <div class="min-w-0">
                    <p class="text-sm font-bold text-white">${assistant.label}</p>
                    <p class="text-[11px] text-gray-500">${assistant.note}</p>
                  </div>
                </div>
                <button onclick="toggleAssistantEnabled('${assistant.id}')" class="relative inline-flex h-7 w-12 items-center rounded-full transition ${enabled ? 'bg-emerald-500' : 'bg-gray-600'} shrink-0">
                  <span class="inline-block h-5 w-5 transform rounded-full bg-white transition ${enabled ? 'translate-x-6' : 'translate-x-1'}"></span>
                </button>
              </div>
              <label class="block text-[11px] font-bold uppercase text-gray-400 mb-1">Webhook override (optional)</label>
              <input type="text" id="hook_${assistant.id}" value="${esc(value)}" placeholder="Use global n8n webhook when empty" class="input-field w-full bg-[#0a1124]/80 border border-amber-500/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500">
            </div>`;
          }).join('')}
        </div>
      </div>

      <!-- AI Repair Assistant -->
      <div class="glass border border-emerald-500/20 rounded-2xl p-5 slide-up mb-4">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-3 flex items-center gap-2">
          <i data-lucide="shield-check" class="w-4 h-4 text-emerald-400"></i> AI Repair Assistant (Priority #1)
        </h3>
        <p class="text-[11px] text-gray-500 mb-3">This assistant runs first in the automation pipeline and starts working after you set a repair API key.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-[11px] font-bold uppercase text-gray-400 mb-1">Repair provider</label>
            <select id="repair_ai_provider" class="input-field w-full bg-[#0a1124]/80 border border-emerald-500/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500">
              <option value="openrouter" ${String(s.repair_ai_provider || 'openrouter') === 'openrouter' ? 'selected' : ''}>OpenRouter (free)</option>
              <option value="huggingface" ${String(s.repair_ai_provider || '') === 'huggingface' ? 'selected' : ''}>Hugging Face</option>
              <option value="groq" ${String(s.repair_ai_provider || '') === 'groq' ? 'selected' : ''}>Groq</option>
              <option value="gemini" ${String(s.repair_ai_provider || '') === 'gemini' ? 'selected' : ''}>Gemini</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold uppercase text-gray-400 mb-1">Repair model</label>
            <input type="text" id="repair_ai_model" value="${esc(s.repair_ai_model || 'google/gemini-2.0-flash-exp:free')}" placeholder="google/gemini-2.0-flash-exp:free" class="input-field w-full bg-[#0a1124]/80 border border-emerald-500/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500">
          </div>
          <div class="sm:col-span-2">
            <label class="block text-[11px] font-bold uppercase text-gray-400 mb-1">Repair API key</label>
            <div class="relative">
              <input type="password" id="repair_ai_api_key" value="${esc(s.repair_ai_api_key || '')}" placeholder="OpenRouter key preferred for free model" class="input-field w-full bg-[#0a1124]/80 border border-emerald-500/20 rounded-xl pl-3 pr-10 py-2 text-xs text-white focus:outline-none focus:border-emerald-500">
              <button onclick="togglePassword('repair_ai_api_key')" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition">
                <i data-lucide="eye" class="w-4 h-4" id="repair_ai_api_key-eye"></i>
              </button>
            </div>
          </div>
          <div>
            <label class="block text-[11px] font-bold uppercase text-gray-400 mb-1">Scan interval (minutes)</label>
            <input type="number" id="repair_scan_interval_minutes" min="1" max="1440" value="${Number.isFinite(Number(s.repair_scan_interval_minutes)) ? Number(s.repair_scan_interval_minutes) : 15}" class="input-field w-full bg-[#0a1124]/80 border border-emerald-500/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500">
          </div>
          <div class="flex items-end">
            <label class="inline-flex items-center gap-2 text-xs text-gray-300 font-semibold">
              <input type="checkbox" id="repair_auto_apply_safe_fixes" class="accent-emerald-500" ${s.repair_auto_apply_safe_fixes !== false ? 'checked' : ''}>
              Auto-apply safe fixes only
            </label>
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex gap-3 slide-up">
        <button onclick="saveSettings()" id="save-btn" class="btn-press flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-amber-600/30 disabled:opacity-40 disabled:cursor-not-allowed">
          <i data-lucide="save" class="w-4 h-4 inline mr-2"></i> Save Settings
        </button>
        <button onclick="testAutomationCenter()" id="test-btn" class="btn-press px-6 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold py-3 rounded-xl text-sm uppercase tracking-wide transition hover:bg-emerald-500/20 disabled:opacity-40 disabled:cursor-not-allowed">
          <i data-lucide="activity" class="w-4 h-4 inline mr-2"></i> Test Center
        </button>
        <a href="/admin-ai.html" class="btn-press px-6 py-3 bg-blue-950/60 border border-blue-500/20 text-gray-400 font-bold rounded-xl text-sm uppercase tracking-wide transition flex items-center gap-2">
          <i data-lucide="sparkles" class="w-4 h-4"></i> Assistant
        </a>
      </div>

      <!-- Info box -->
      <div class="glass-soft border border-amber-500/15 rounded-2xl p-5 slide-up">
        <h3 class="text-sm font-bold text-white mb-2 flex items-center gap-2"><i data-lucide="info" class="w-4 h-4 text-amber-400"></i> How it works</h3>
        <ul class="space-y-1.5 text-xs text-gray-400">
          <li class="flex gap-2"><span class="text-amber-400 shrink-0">1.</span> <strong>Enable the Automation Center</strong> to activate the n8n orchestration system.</li>
          <li class="flex gap-2"><span class="text-amber-400 shrink-0">2.</span> Enter your <strong>n8n webhook URL</strong> (and optional token) to connect your n8n instance.</li>
          <li class="flex gap-2"><span class="text-amber-400 shrink-0">3.</span> Toggle which <strong>assistant modules</strong> are active and optionally give each its own webhook.</li>
          <li class="flex gap-2"><span class="text-amber-400 shrink-0">4.</span> Configure the <strong>AI Repair Assistant</strong> with a provider and API key — it runs first in the pipeline.</li>
          <li class="flex gap-2"><span class="text-amber-400 shrink-0">5.</span> Click <strong>Test Center</strong> to run a health check on all enabled assistants.</li>
          <li class="flex gap-2"><span class="text-amber-400 shrink-0">6.</span> Keys are stored securely in your database and never exposed to customers.</li>
        </ul>
      </div>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

async function init() {
  const { data: sessionData } = await supabase.auth.getSession();
  state.user = sessionData?.session?.user || null;

  if (!state.user) {
    const currentPath = window.location.pathname + window.location.search;
    window.location.href = `/auth.html?redirect=${encodeURIComponent(currentPath)}`;
    return;
  }

  const { data: isAdmin } = await supabase.rpc('is_current_user_admin');
  if (!isAdmin) {
    const { data: anyAdmin } = await supabase.rpc('has_any_admin');
    if (anyAdmin) {
      document.getElementById('access-denied').classList.remove('hidden');
      document.getElementById('access-denied-msg').textContent = 'You are signed in, but this account does not have administrator privileges.';
    } else {
      showBootstrapPrompt();
    }
    if (window.lucide) lucide.createIcons();
    return;
  }

  state.isAdmin = true;

  const { data: settings, error } = await supabase.from('ai_settings').select('*').limit(1).maybeSingle();
  if (error || !settings) {
    document.getElementById('n8n-root').innerHTML = `<div class="glass border border-red-500/20 rounded-2xl p-6 text-center"><p class="text-sm text-red-400">Failed to load n8n settings. Please try again.</p></div>`;
    return;
  }

  state.settings = settings;
  render();
}

init();
