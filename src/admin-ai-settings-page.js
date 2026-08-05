import { supabase } from './supabase-client.js';
import { getCurrentUser } from './auth.js';

const PROVIDERS = [
  {
    id: 'openai',
    name: 'OpenAI (ChatGPT)',
    description: 'Powers the Customer Support AI',
    role: 'Customer Support AI',
    icon: 'bot',
    color: 'emerald',
    models: ['gpt-4o', 'gpt-4o-mini', 'gpt-4.1', 'gpt-4.1-mini', 'gpt-4-turbo', 'gpt-3.5-turbo', 'o1-mini', 'o1-preview'],
    keyField: 'openai_api_key',
    modelField: 'openai_model',
    keyPlaceholder: 'sk-...',
    signupUrl: 'https://platform.openai.com/api-keys',
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    description: 'Powers the Admin & Developer AI',
    role: 'Admin & Developer AI',
    icon: 'sparkles',
    color: 'amber',
    models: ['gemini-2.5-flash', 'gemini-2.5-pro', 'gemini-2.0-flash', 'gemini-2.0-flash-lite', 'gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-3-flash-preview', 'gemini-3.1-flash-lite-preview'],
    keyField: 'gemini_api_key',
    modelField: 'gemini_model',
    keyPlaceholder: 'AIza...',
    signupUrl: 'https://aistudio.google.com/app/apikey',
  },
  {
    id: 'groq',
    name: 'Groq (Free Tier)',
    description: 'Fast free-tier model API for admin tasks',
    role: 'Admin & Developer AI',
    icon: 'zap',
    color: 'violet',
    models: ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant'],
    keyField: 'groq_key',
    modelField: 'groq_model',
    keyPlaceholder: 'gsk_...',
    signupUrl: 'https://console.groq.com/keys',
  },
  {
    id: 'openrouter',
    name: 'OpenRouter (Free Models)',
    description: 'Use free community models through OpenRouter',
    role: 'Admin & Developer AI',
    icon: 'route',
    color: 'violet',
    models: ['google/gemini-2.0-flash-exp:free', 'meta-llama/llama-3.1-8b-instruct:free'],
    keyField: 'openrouter_key',
    modelField: 'openrouter_model',
    keyPlaceholder: 'sk-or-v1-...',
    signupUrl: 'https://openrouter.ai/keys',
  },
  {
    id: 'huggingface',
    name: 'Hugging Face (Free Tier)',
    description: 'Use free-tier inference router for assistant tasks',
    role: 'Admin & Developer AI',
    icon: 'cpu',
    color: 'violet',
    models: ['Qwen/Qwen2.5-Coder-32B-Instruct', 'mistralai/Mistral-7B-Instruct-v0.3'],
    keyField: 'hf_key',
    modelField: 'hf_model',
    keyPlaceholder: 'hf_...',
    signupUrl: 'https://huggingface.co/settings/tokens',
  },
  {
    id: 'flowise',
    name: 'Flowise AI',
    description: 'Connect your Flowise endpoint for automated workflows',
    role: 'Admin & Developer AI',
    icon: 'workflow',
    color: 'amber',
    models: [],
    keyField: 'flowise_api_url',
    modelField: 'flowise_api_key',
    keyPlaceholder: 'https://your-flowise-host/api/v1/prediction/your-flow-id',
    modelPlaceholder: 'Optional Flowise API key',
    keyLabel: 'Flowise Endpoint URL',
    modelLabel: 'Flowise API Key (optional)',
    signupUrl: 'https://flowiseai.com/',
  },
  {
    id: 'n8n',
    name: 'n8n AI Workflow',
    description: 'Use n8n webhook automation for website fixes/build steps',
    role: 'Admin & Developer AI',
    icon: 'git-branch-plus',
    color: 'amber',
    models: [],
    keyField: 'n8n_webhook_url',
    modelField: 'n8n_webhook_token',
    keyPlaceholder: 'https://your-n8n-host/webhook/admin-ai',
    modelPlaceholder: 'Optional n8n token/header secret',
    keyLabel: 'n8n Webhook URL',
    modelLabel: 'n8n Token (optional)',
    signupUrl: 'https://n8n.io/',
  },
];

const LOCAL_DEV_HOSTS = new Set(['localhost', '127.0.0.1']);
const SUPABASE_BASE_URL = (import.meta.env.VITE_SUPABASE_URL || 'https://wttnvwpoqmbxryivcerf.supabase.co').replace(/\/$/, '');
const AI_FUNCTION_URL = LOCAL_DEV_HOSTS.has(window.location.hostname)
  ? '/_supabase/functions/v1/ai-admin-assistant'
  : `${SUPABASE_BASE_URL}/functions/v1/ai-admin-assistant`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const N8N_ASSISTANTS = [
  { id: 'product_ai', label: 'Product AI', note: 'Create and structure product data.' },
  { id: 'writer_ai', label: 'Writer AI', note: 'Generate marketing copy and descriptions.' },
  { id: 'image_ai', label: 'Image AI', note: 'Image prompts, tags, and media instructions.' },
  { id: 'showroom_ai', label: 'Showroom AI', note: 'Publish items and align listing details.' },
  { id: 'seo_ai', label: 'SEO AI', note: 'Optimize metadata and search targeting.' },
  { id: 'customer_support_ai', label: 'Customer Support AI', note: 'Prepare customer-facing answers and FAQs.' },
  { id: 'website_builder_ai', label: 'Website Builder AI', note: 'Apply layout/build workflow steps.' },
  { id: 'ai_repair_assistant', label: 'AI Repair Assistant', note: 'Run verification and repair checks.' },
];

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

async function showBootstrapPrompt() {
  const denied = document.getElementById('access-denied');
  denied.classList.remove('hidden');
  denied.innerHTML = `
    <div class="glass border border-amber-500/20 rounded-2xl p-8 max-w-md w-full text-center slide-up">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-2xl mb-4">
        <i data-lucide="user-cog" class="w-8 h-8 text-amber-400"></i>
      </div>
      <h2 class="text-xl font-bold text-white mb-2">Become Admin</h2>
      <p class="text-sm text-gray-400 mb-6">No administrator has been set up yet. Promote your account to access AI Settings.</p>
      <button onclick="bootstrapAdmin()" id="bootstrap-btn" class="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-3 px-6 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-amber-600/30">
        <i data-lucide="shield" class="w-4 h-4"></i> Become Admin
      </button>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

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
      showToast('You are now an admin!');
      setTimeout(() => window.location.reload(), 1000);
    } else {
      showToast(data.error || 'Failed to become admin');
      btn.disabled = false;
      btn.innerHTML = '<i data-lucide="shield" class="w-4 h-4"></i> Become Admin';
      if (window.lucide) lucide.createIcons();
    }
  } catch (err) {
    showToast('Error: ' + err.message);
    btn.disabled = false;
    btn.innerHTML = '<i data-lucide="shield" class="w-4 h-4"></i> Become Admin';
    if (window.lucide) lucide.createIcons();
  }
};

let state = {
  user: null,
  isAdmin: false,
  settings: null,
  saving: false,
};

function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.remove('translate-y-20', 'opacity-0');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.add('translate-y-20', 'opacity-0'), 3000);
  if (window.lucide) lucide.createIcons();
}

function colorClasses(color) {
  const map = {
    emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30', ring: 'ring-emerald-500/20' },
    amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30', ring: 'ring-amber-500/20' },
    violet: { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/30', ring: 'ring-violet-500/20' },
  };
  return map[color] || map.emerald;
}

function render() {
  const root = document.getElementById('settings-root');
  const s = state.settings;
  s.n8n_assistant_enabled = normalizeAssistantToggles(s.n8n_assistant_enabled);
  s.n8n_assistant_webhooks = normalizeAssistantWebhooks(s.n8n_assistant_webhooks);

  root.innerHTML = `
    <div class="fade-in">
      <div class="mb-6">
        <h1 class="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">AI Architecture Settings</h1>
        <p class="text-sm text-gray-500">Configure AI providers for customer and admin/developer assistants. You can connect free providers and workflow engines.</p>
      </div>

      <div class="glass border border-blue-500/20 rounded-2xl p-5 slide-up mb-4">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-3 flex items-center gap-2">
          <i data-lucide="sliders-horizontal" class="w-4 h-4 text-blue-400"></i> Admin & Developer Provider
        </h3>
        <p class="text-xs text-gray-500 mb-3">Select which provider powers your Admin & Developer AI for building/fixing tasks.</p>
        <select id="active_provider" class="input-field w-full bg-[#0a1124]/80 border border-blue-500/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">
          ${PROVIDERS.filter((p) => p.id !== 'openai').map((p) => `<option value="${p.id}" ${s.active_provider === p.id ? 'selected' : ''}>${p.name}</option>`).join('')}
        </select>
      </div>

      <!-- Architecture diagram -->
      <div class="glass border border-blue-500/20 rounded-2xl p-5 slide-up mb-4">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4 flex items-center gap-2">
          <i data-lucide="network" class="w-4 h-4 text-blue-400"></i> AI Architecture
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="glass-soft border border-emerald-500/20 rounded-xl p-4">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <i data-lucide="bot" class="w-4 h-4 text-emerald-400"></i>
              </div>
              <div>
                <p class="text-sm font-bold text-white">OpenAI = Customer Support AI</p>
                <p class="text-[10px] text-gray-500">Answers customer questions only</p>
              </div>
            </div>
            <div class="text-[10px] text-gray-600 mt-2">No admin access, no file editing, no system settings</div>
          </div>
          <div class="glass-soft border border-amber-500/20 rounded-xl p-4">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center">
                <i data-lucide="sparkles" class="w-4 h-4 text-amber-400"></i>
              </div>
              <div>
                <p class="text-sm font-bold text-white">Google Gemini = Admin & Developer AI</p>
                <p class="text-[10px] text-gray-500">Full marketplace management + code</p>
              </div>
            </div>
            <div class="text-[10px] text-gray-600 mt-2">Products, orders, analytics, file editing, deployments</div>
          </div>
        </div>
      </div>

      <!-- Enable/Disable toggle -->
      <div class="glass border border-blue-500/20 rounded-2xl p-5 slide-up">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <i data-lucide="power" class="w-4 h-4 text-blue-400"></i> AI Assistant Status
            </h3>
            <p class="text-xs text-gray-500 mt-1">Enable or disable the AI assistant. When disabled, the chat and content generation tools stop responding.</p>
          </div>
          <button onclick="toggleEnabled()" id="enable-toggle" class="relative inline-flex h-8 w-14 items-center rounded-full transition ${s.is_enabled ? 'bg-emerald-500' : 'bg-gray-600'}">
            <span class="inline-block h-6 w-6 transform rounded-full bg-white transition ${s.is_enabled ? 'translate-x-7' : 'translate-x-1'}"></span>
          </button>
        </div>
        <div class="mt-2 text-xs font-bold ${s.is_enabled ? 'text-emerald-400' : 'text-gray-500'}">${s.is_enabled ? 'AI Assistant is ON' : 'AI Assistant is OFF'}</div>
      </div>



      <!-- Provider API keys -->
      ${PROVIDERS.map(p => {
        const c = colorClasses(p.color);
        const hasKey = s[p.keyField] && s[p.keyField].length > 0;
        const keyLabel = p.keyLabel || 'API Key';
        const modelLabel = p.modelLabel || 'Model';
        const modelControl = Array.isArray(p.models) && p.models.length > 0
          ? `<select id="${p.modelField}" class="input-field w-full bg-[#0a1124]/80 border border-blue-500/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">${p.models.map(m => `<option value="${m}" ${s[p.modelField] === m ? 'selected' : ''}>${m}</option>`).join('')}</select>`
          : `<input type="text" id="${p.modelField}" placeholder="${p.modelPlaceholder || 'Optional value'}" value="${s[p.modelField] || ''}" class="input-field w-full bg-[#0a1124]/80 border border-blue-500/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">`;
        return `
          <div class="glass border ${c.border} rounded-2xl p-5 slide-up" style="animation-delay: .1s">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
                <div class="w-8 h-8 ${c.bg} rounded-lg flex items-center justify-center">
                  <i data-lucide="${p.icon}" class="w-4 h-4 ${c.text}"></i>
                </div>
                ${p.name}
                ${hasKey ? `<span class="text-[10px] font-bold ${c.text} ${c.bg} px-2 py-0.5 rounded-full">Configured</span>` : `<span class="text-[10px] font-bold text-gray-600 bg-gray-500/10 px-2 py-0.5 rounded-full">Not Set</span>`}
              </h3>
              <a href="${p.signupUrl}" target="_blank" rel="noopener" class="text-[10px] text-gray-500 hover:text-blue-400 transition flex items-center gap-1">
                <i data-lucide="external-link" class="w-3 h-3"></i> Get API Key
              </a>
            </div>
            <div class="mb-3 text-xs text-gray-400">
              <span class="font-bold ${c.text}">Role: ${p.role}</span>
            </div>
            <div class="space-y-3">
              <div>
                <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">${keyLabel}</label>
                <div class="relative">
                  <input type="password" id="${p.keyField}" placeholder="${p.keyPlaceholder}" value="${s[p.keyField] || ''}" class="input-field w-full bg-[#0a1124]/80 border border-blue-500/20 rounded-xl pl-4 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">
                  <button onclick="togglePassword('${p.keyField}')" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition">
                    <i data-lucide="eye" class="w-4 h-4" id="${p.keyField}-eye"></i>
                  </button>
                </div>
              </div>
              <div>
                <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">${modelLabel}</label>
                ${modelControl}
              </div>
            </div>
          </div>
        `;
      }).join('')}

      <!-- Per-mode model overrides -->
      <div class="glass border border-blue-500/20 rounded-2xl p-5 slide-up">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4 flex items-center gap-2">
          <i data-lucide="layers" class="w-4 h-4 text-blue-400"></i> Per-Mode Model Overrides
        </h3>
        <p class="text-xs text-gray-500 mb-4">Optionally set a specific model for each AI mode. Leave blank to use the provider's default model above.</p>
        <div class="space-y-3">
          <div>
            <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">Customer AI Model</label>
            <input type="text" id="customer_model_override" placeholder="e.g. gpt-4o-mini (leave blank for default)" value="${s.customer_model_override || ''}" class="input-field w-full bg-[#0a1124]/80 border border-emerald-500/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500">
          </div>
          <div>
            <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">Admin AI Model</label>
            <input type="text" id="admin_model_override" placeholder="e.g. gemini-2.5-pro (leave blank for default)" value="${s.admin_model_override || ''}" class="input-field w-full bg-[#0a1124]/80 border border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
          </div>
          <div>
            <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">Developer AI Model</label>
            <input type="text" id="developer_model_override" placeholder="e.g. gemini-2.5-pro (leave blank for default)" value="${s.developer_model_override || ''}" class="input-field w-full bg-[#0a1124]/80 border border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
          </div>
        </div>
      </div>

      <!-- Mode toggles -->
      <div class="glass border border-blue-500/20 rounded-2xl p-5 slide-up">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4 flex items-center gap-2">
          <i data-lucide="toggle-left" class="w-4 h-4 text-blue-400"></i> AI Mode Toggles
        </h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-bold text-white">Customer AI</p>
              <p class="text-xs text-gray-500">Enable/disable the customer-facing shopping assistant</p>
            </div>
            <button onclick="toggleCustomerEnabled()" class="relative inline-flex h-8 w-14 items-center rounded-full transition ${s.customer_enabled !== false ? 'bg-emerald-500' : 'bg-gray-600'}">
              <span class="inline-block h-6 w-6 transform rounded-full bg-white transition ${s.customer_enabled !== false ? 'translate-x-7' : 'translate-x-1'}"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-bold text-white">Developer AI</p>
              <p class="text-xs text-gray-500">Enable/disable the developer mode for code editing</p>
            </div>
            <button onclick="toggleDeveloperEnabled()" class="relative inline-flex h-8 w-14 items-center rounded-full transition ${s.developer_enabled !== false ? 'bg-emerald-500' : 'bg-gray-600'}">
              <span class="inline-block h-6 w-6 transform rounded-full bg-white transition ${s.developer_enabled !== false ? 'translate-x-7' : 'translate-x-1'}"></span>
            </button>
          </div>
        </div>
      </div>

      <div class="glass border border-amber-500/20 rounded-2xl p-5 slide-up">
        <div class="flex items-center justify-between gap-3">
          <div>
            <h3 class="text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <i data-lucide="workflow" class="w-4 h-4 text-amber-400"></i> AI Automation Center (n8n)
            </h3>
            <p class="text-xs text-gray-500 mt-1">Central orchestration for all assistant modules. Each module can be toggled and mapped to its own webhook.</p>
          </div>
          <button onclick="toggleAutomationCenterEnabled()" class="relative inline-flex h-8 w-14 items-center rounded-full transition ${s.automation_center_enabled === true ? 'bg-emerald-500' : 'bg-gray-600'}">
            <span class="inline-block h-6 w-6 transform rounded-full bg-white transition ${s.automation_center_enabled === true ? 'translate-x-7' : 'translate-x-1'}"></span>
          </button>
        </div>
        <div class="mt-3 text-xs font-bold ${s.automation_center_enabled === true ? 'text-emerald-400' : 'text-gray-500'}">${s.automation_center_enabled === true ? 'Automation Center is ON' : 'Automation Center is OFF'}</div>
        <div class="mt-4 grid grid-cols-1 gap-3">
          ${N8N_ASSISTANTS.map((assistant) => {
            const enabled = s.n8n_assistant_enabled?.[assistant.id] !== false;
            const value = s.n8n_assistant_webhooks?.[assistant.id] || '';
            return `
            <div class="glass-soft border border-amber-500/15 rounded-xl p-3">
              <div class="flex items-center justify-between gap-2 mb-2">
                <div>
                  <p class="text-sm font-bold text-white">${assistant.label}</p>
                  <p class="text-[11px] text-gray-500">${assistant.note}</p>
                </div>
                <button onclick="toggleAssistantEnabled('${assistant.id}')" class="relative inline-flex h-7 w-12 items-center rounded-full transition ${enabled ? 'bg-emerald-500' : 'bg-gray-600'}">
                  <span class="inline-block h-5 w-5 transform rounded-full bg-white transition ${enabled ? 'translate-x-6' : 'translate-x-1'}"></span>
                </button>
              </div>
              <label class="block text-[11px] font-bold uppercase text-gray-400 mb-1">Webhook override (optional)</label>
              <input type="text" id="hook_${assistant.id}" value="${value}" placeholder="Use global n8n webhook when empty" class="input-field w-full bg-[#0a1124]/80 border border-amber-500/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500">
            </div>`;
          }).join('')}
        </div>

        <div class="mt-4 glass-soft border border-emerald-500/15 rounded-xl p-3">
          <h4 class="text-xs font-bold text-emerald-300 uppercase tracking-wide flex items-center gap-2 mb-2">
            <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> AI Repair Assistant (Priority #1)
          </h4>
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
              <input type="text" id="repair_ai_model" value="${s.repair_ai_model || 'google/gemini-2.0-flash-exp:free'}" placeholder="google/gemini-2.0-flash-exp:free" class="input-field w-full bg-[#0a1124]/80 border border-emerald-500/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500">
            </div>
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold uppercase text-gray-400 mb-1">Repair API key</label>
              <div class="relative">
                <input type="password" id="repair_ai_api_key" value="${s.repair_ai_api_key || ''}" placeholder="OpenRouter key preferred for free model" class="input-field w-full bg-[#0a1124]/80 border border-emerald-500/20 rounded-xl pl-3 pr-10 py-2 text-xs text-white focus:outline-none focus:border-emerald-500">
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
      </div>

      <!-- Test connection + Save buttons -->
      <div class="flex gap-3 slide-up">
        <button onclick="saveSettings()" id="save-btn" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-600/30 disabled:opacity-40 disabled:cursor-not-allowed">
          <i data-lucide="save" class="w-4 h-4 inline mr-2"></i> Save Settings
        </button>
        <button onclick="testConnection()" id="test-btn" class="btn-press px-6 bg-blue-950/60 border border-emerald-500/30 text-emerald-400 font-bold py-3 rounded-xl text-sm uppercase tracking-wide transition hover:bg-emerald-500/10 disabled:opacity-40 disabled:cursor-not-allowed">
          <i data-lucide="wifi" class="w-4 h-4 inline mr-2"></i> Test Connection
        </button>
        <a href="/admin-ai.html" class="btn-press px-6 py-3 bg-blue-950/60 border border-blue-500/20 text-gray-400 font-bold rounded-xl text-sm uppercase tracking-wide transition flex items-center gap-2">
          <i data-lucide="sparkles" class="w-4 h-4"></i> Back to Assistant
        </a>
      </div>

      <!-- Info box -->
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 slide-up">
        <h3 class="text-sm font-bold text-white mb-2 flex items-center gap-2"><i data-lucide="info" class="w-4 h-4 text-blue-400"></i> How it works</h3>
        <ul class="space-y-1.5 text-xs text-gray-400">
          <li class="flex gap-2"><span class="text-blue-400 shrink-0">1.</span> <strong>OpenAI</strong> powers the Customer Support AI — it answers customer questions, helps find products, and tracks orders.</li>
          <li class="flex gap-2"><span class="text-blue-400 shrink-0">2.</span> <strong>Google Gemini</strong> powers the Admin & Developer AI — it manages products, orders, analytics, and can edit code.</li>
          <li class="flex gap-2"><span class="text-blue-400 shrink-0">3.</span> The architecture is locked: OpenAI always serves customers, Gemini always serves admin. This cannot be changed.</li>
          <li class="flex gap-2"><span class="text-blue-400 shrink-0">4.</span> API keys are stored securely in your database and never exposed to customers.</li>
          <li class="flex gap-2"><span class="text-blue-400 shrink-0">5.</span> Use "Test Connection" to verify your API key works before saving.</li>
          <li class="flex gap-2"><span class="text-blue-400 shrink-0">6.</span> Toggle each AI mode on/off independently using the toggles above.</li>
        </ul>
      </div>

      <!-- Supported content types -->
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 slide-up">
        <h3 class="text-sm font-bold text-white mb-3 flex items-center gap-2"><i data-lucide="list-checks" class="w-4 h-4 text-blue-400"></i> AI Content Capabilities</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-400">
          <div class="flex items-center gap-1.5"><i data-lucide="check" class="w-3 h-3 text-emerald-400"></i> Product Titles</div>
          <div class="flex items-center gap-1.5"><i data-lucide="check" class="w-3 h-3 text-emerald-400"></i> Descriptions</div>
          <div class="flex items-center gap-1.5"><i data-lucide="check" class="w-3 h-3 text-emerald-400"></i> Specifications</div>
          <div class="flex items-center gap-1.5"><i data-lucide="check" class="w-3 h-3 text-emerald-400"></i> Categories</div>
          <div class="flex items-center gap-1.5"><i data-lucide="check" class="w-3 h-3 text-emerald-400"></i> Tags</div>
          <div class="flex items-center gap-1.5"><i data-lucide="check" class="w-3 h-3 text-emerald-400"></i> SEO Titles</div>
          <div class="flex items-center gap-1.5"><i data-lucide="check" class="w-3 h-3 text-emerald-400"></i> SEO Descriptions</div>
          <div class="flex items-center gap-1.5"><i data-lucide="check" class="w-3 h-3 text-emerald-400"></i> Product Highlights</div>
          <div class="flex items-center gap-1.5"><i data-lucide="check" class="w-3 h-3 text-emerald-400"></i> Pricing Suggestions</div>
          <div class="flex items-center gap-1.5"><i data-lucide="check" class="w-3 h-3 text-emerald-400"></i> Improvement Tips</div>
          <div class="flex items-center gap-1.5"><i data-lucide="check" class="w-3 h-3 text-emerald-400"></i> Image Descriptions</div>
          <div class="flex items-center gap-1.5"><i data-lucide="check" class="w-3 h-3 text-emerald-400"></i> Translation</div>
        </div>
      </div>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

window.selectProvider = (id) => {
  state.settings.active_provider = id;
  render();
  showToast(`Selected ${id} for Admin & Developer AI.`);
};

window.togglePassword = (fieldId) => {
  const input = document.getElementById(fieldId);
  const eye = document.getElementById(fieldId + '-eye');
  if (input.type === 'password') {
    input.type = 'text';
    eye.setAttribute('data-lucide', 'eye-off');
  } else {
    input.type = 'password';
    eye.setAttribute('data-lucide', 'eye');
  }
  if (window.lucide) lucide.createIcons();
};

window.toggleEnabled = async () => {
  const newVal = !state.settings.is_enabled;
  state.settings.is_enabled = newVal;
  try {
    const { error } = await supabase.from('ai_settings').update({ is_enabled: newVal }).eq('id', state.settings.id);
    if (error) throw error;
    showToast(newVal ? 'AI assistant enabled.' : 'AI assistant disabled.');
    render();
  } catch (err) {
    state.settings.is_enabled = !newVal;
    showToast('Failed to toggle: ' + err.message);
    render();
  }
};

window.testConnection = async () => {
  const btn = document.getElementById('test-btn');
  if (!btn) return;
  btn.disabled = true;
  btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i> Testing...';
  if (window.lucide) lucide.createIcons();
  try {
    const { data: { session } } = await supabase.auth.getSession();
    const selectedProvider = document.getElementById('active_provider')?.value || state.settings.active_provider || 'gemini';
    const res = await fetch(AI_FUNCTION_URL, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${session?.access_token || ANON_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'test_connection', provider_override: selectedProvider }),
    });
    const data = await res.json();
    if (data.success) {
      showToast(`Connection OK — ${data.provider_label} (${data.model})`);
    } else {
      showToast(`Connection failed: ${data.error || 'Unknown error'}`);
    }
  } catch (err) {
    showToast('Connection error: ' + err.message);
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i data-lucide="wifi" class="w-4 h-4 inline mr-2"></i> Test Connection';
    if (window.lucide) lucide.createIcons();
  }
};

window.saveSettings = async () => {
  if (state.saving) return;
  state.saving = true;
  const btn = document.getElementById('save-btn');
  btn.disabled = true;
  btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i> Saving...';
  if (window.lucide) lucide.createIcons();

  const updates = {
    active_provider: document.getElementById('active_provider')?.value || state.settings.active_provider || 'gemini',
  };
  for (const p of PROVIDERS) {
    const keyEl = document.getElementById(p.keyField);
    const modelEl = document.getElementById(p.modelField);
    const keyVal = keyEl ? keyEl.value.trim() : '';
    const modelVal = modelEl ? modelEl.value.trim() : '';
    updates[p.keyField] = keyVal || null;
    updates[p.modelField] = modelVal;
  }
  // Per-mode model overrides
  const cmo = document.getElementById('customer_model_override');
  const amo = document.getElementById('admin_model_override');
  const dmo = document.getElementById('developer_model_override');
  if (cmo) updates.customer_model_override = cmo.value.trim() || null;
  if (amo) updates.admin_model_override = amo.value.trim() || null;
  if (dmo) updates.developer_model_override = dmo.value.trim() || null;
  // Rate limit
  updates.rate_limit_daily = state.settings.rate_limit_daily || 100;
  // Mode toggles
  updates.customer_enabled = state.settings.customer_enabled !== false;
  updates.developer_enabled = state.settings.developer_enabled !== false;
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
    showToast('Settings saved successfully!');
    render();
  } catch (err) {
    showToast('Failed to save: ' + err.message);
  } finally {
    state.saving = false;
    btn.disabled = false;
    btn.innerHTML = '<i data-lucide="save" class="w-4 h-4 inline mr-2"></i> Save Settings';
    if (window.lucide) lucide.createIcons();
  }
};

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
    document.getElementById('settings-root').innerHTML = `<div class="glass border border-red-500/20 rounded-2xl p-6 text-center"><p class="text-sm text-red-400">Failed to load AI settings. Please try again.</p></div>`;
    return;
  }

  state.settings = settings;
  render();
}

window.toggleCustomerEnabled = () => {
  state.settings.customer_enabled = !state.settings.customer_enabled;
  saveSettings();
};

window.toggleDeveloperEnabled = () => {
  state.settings.developer_enabled = !state.settings.developer_enabled;
  saveSettings();
};

window.toggleAutomationCenterEnabled = () => {
  state.settings.automation_center_enabled = state.settings.automation_center_enabled !== true;
  saveSettings();
};

window.toggleAssistantEnabled = (assistantId) => {
  const toggles = normalizeAssistantToggles(state.settings.n8n_assistant_enabled);
  toggles[assistantId] = toggles[assistantId] !== true;
  state.settings.n8n_assistant_enabled = toggles;
  saveSettings();
};

init();
