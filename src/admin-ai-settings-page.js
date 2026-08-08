import { supabase } from './supabase-client.js';
import { getCurrentUser } from './auth.js';

const PROVIDERS = [
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
];

const LOCAL_AI_FIELDS = [
  { key: 'ollama_url', label: 'Ollama Server URL', placeholder: 'http://127.0.0.1:11434', default: 'http://127.0.0.1:11434' },
  { key: 'ollama_model', label: 'Chat Model', placeholder: 'llama3.2', default: '' },
  { key: 'ollama_image_model', label: 'Image Model', placeholder: 'llava', default: 'llava' },
  { key: 'comfyui_url', label: 'ComfyUI Server URL', placeholder: 'http://127.0.0.1:8188', default: 'http://127.0.0.1:8188' },
  { key: 'comfyui_workflow', label: 'Workflow JSON', placeholder: 'Paste your workflow JSON here (optional)', default: '' },
  { key: 'comfyui_input_node', label: 'Input Node ID', placeholder: 'image', default: 'image' },
  { key: 'comfyui_output_node', label: 'Output Node ID', placeholder: 'image', default: 'image' },
];

const LOCAL_DEV_HOSTS = new Set(['localhost', '127.0.0.1']);
const SUPABASE_BASE_URL = (import.meta.env.VITE_SUPABASE_URL || 'https://wttnvwpoqmbxryivcerf.supabase.co').replace(/\/$/, '');
const AI_FUNCTION_URL = LOCAL_DEV_HOSTS.has(window.location.hostname)
  ? '/_supabase/functions/v1/ai-admin-assistant'
  : `${SUPABASE_BASE_URL}/functions/v1/ai-admin-assistant`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

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

  root.innerHTML = `
    <div class="fade-in">
      <div class="mb-6">
<h1 class="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">AI Architecture Settings — 100% Free</h1>
        <p class="text-sm text-gray-500">All providers are completely free. The AI scans, understands, fixes, and builds the whole website autonomously — no n8n or paid services required.</p>
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
          <i data-lucide="network" class="w-4 h-4 text-blue-400"></i> AI Architecture — 100% Free
        </h3>
        <div class="glass-soft border border-emerald-500/20 rounded-xl p-4">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
              <i data-lucide="sparkles" class="w-4 h-4 text-emerald-400"></i>
            </div>
            <div>
              <p class="text-sm font-bold text-white">Free Autonomous Developer AI (no n8n dependency)</p>
              <p class="text-[10px] text-gray-500">Google Gemini · Groq · OpenRouter · Hugging Face</p>
            </div>
          </div>
          <div class="text-[10px] text-gray-600 mt-2">Scans the whole website, understands the codebase, fixes errors, and builds autonomously — 100% free, works without n8n.</div>
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

      <!-- Local AI: Ollama + ComfyUI -->
      <div class="glass border border-violet-500/30 rounded-2xl p-5 slide-up">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
            <div class="w-8 h-8 bg-violet-500/10 rounded-lg flex items-center justify-center">
              <i data-lucide="cpu" class="w-4 h-4 text-violet-400"></i>
            </div>
            Local AI — Ollama + ComfyUI
          </h3>
          <div class="flex items-center gap-2">
            <button onclick="testLocalAI()" id="local-test-btn" class="btn-press px-4 py-2 bg-violet-950/60 border border-violet-500/30 text-violet-400 font-bold rounded-lg text-xs uppercase tracking-wide transition hover:bg-violet-500/10 disabled:opacity-40 disabled:cursor-not-allowed">
              <i data-lucide="wifi" class="w-4 h-4 inline mr-1"></i> Test Local
            </button>
            <button onclick="toggleLocalAI()" id="local-ai-toggle" class="relative inline-flex h-8 w-14 items-center rounded-full transition ${s.local_ai_enabled !== false ? 'bg-emerald-500' : 'bg-gray-600'}">
              <span class="inline-block h-6 w-6 transform rounded-full bg-white transition ${s.local_ai_enabled !== false ? 'translate-x-7' : 'translate-x-1'}"></span>
            </button>
          </div>
        </div>
        <p class="text-xs text-gray-500 mb-4">Run the AI fully on your own machine. <strong>Ollama</strong> provides local chat + image models, <strong>ComfyUI</strong> provides local image generation. Requests go straight from the browser to your machine — nothing is stored or sent to the cloud.</p>
        ${LOCAL_AI_FIELDS.map((f) => {
          const isWorkflow = f.key === 'comfyui_workflow';
          const val = s[f.key] || f.default || '';
          return `
            <div class="mb-3">
              <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">${f.label}</label>
              ${isWorkflow
                ? `<textarea id="${f.key}" rows="5" placeholder="${f.placeholder}" class="input-field w-full bg-[#0a1124]/80 border border-violet-500/20 rounded-xl px-4 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-violet-500">${val}</textarea>`
                : `<input type="text" id="${f.key}" placeholder="${f.placeholder}" value="${val}" class="input-field w-full bg-[#0a1124]/80 border border-violet-500/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-violet-500">`}
            </div>`;
        }).join('')}
      </div>

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
          <li class="flex gap-2"><span class="text-blue-400 shrink-0">1.</span> <strong>All providers are 100% free</strong> — Google Gemini, Groq, OpenRouter, and Hugging Face. No payment needed.</li>
          <li class="flex gap-2"><span class="text-blue-400 shrink-0">2.</span> The free AI scans the whole website, understands the codebase, fixes errors, and builds autonomously — no n8n required.</li>
          <li class="flex gap-2"><span class="text-blue-400 shrink-0">3.</span> If one free provider is rate-limited, the AI automatically switches to the next free provider.</li>
          <li class="flex gap-2"><span class="text-blue-400 shrink-0">4.</span> API keys are stored securely in your database and never exposed to customers.</li>
          <li class="flex gap-2"><span class="text-blue-400 shrink-0">5.</span> Use "Test Connection" to verify your free API key works before saving.</li>
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

window.toggleLocalAI = async () => {
  const newVal = state.settings.local_ai_enabled !== false ? false : true;
  state.settings.local_ai_enabled = newVal;
  try {
    const { error } = await supabase.from('ai_settings').update({ local_ai_enabled: newVal }).eq('id', state.settings.id);
    if (error) throw error;
    showToast(newVal ? 'Local AI enabled.' : 'Local AI disabled.');
    render();
  } catch (err) {
    state.settings.local_ai_enabled = !newVal;
    showToast('Failed to toggle: ' + err.message);
    render();
  }
};

window.testLocalAI = async () => {
  const btn = document.getElementById('local-test-btn');
  if (!btn) return;
  const ollamaUrl = (document.getElementById('ollama_url')?.value || 'http://127.0.0.1:11434').replace(/\/$/, '');
  const comfyUrl = (document.getElementById('comfyui_url')?.value || 'http://127.0.0.1:8188').replace(/\/$/, '');
  btn.disabled = true;
  btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-1"></i> Testing...';
  if (window.lucide) lucide.createIcons();
  try {
    const ollamaRes = await fetch(`${ollamaUrl}/api/tags`, { signal: AbortSignal.timeout(5000) });
    const ollamaModels = await ollamaRes.json();
    const comfyRes = await fetch(`${comfyUrl}/system_stats`, { signal: AbortSignal.timeout(5000) });
    const ollamaOk = ollamaRes.ok && Array.isArray(ollamaModels?.models);
    const comfyOk = comfyRes.ok;
    if (ollamaOk && comfyOk) {
      showToast(`Local AI OK — Ollama (${ollamaModels.models.length} models) + ComfyUI reachable`, 'success');
    } else if (ollamaOk) {
      showToast(`Ollama OK (${ollamaModels.models.length} models), but ComfyUI unreachable`);
    } else if (comfyOk) {
      showToast(`ComfyUI reachable, but Ollama unreachable at ${ollamaUrl}`);
    } else {
      showToast('Neither Ollama nor ComfyUI is reachable. Is the app running over HTTPS?');
    }
  } catch (err) {
    showToast('Local AI unreachable: ' + err.message);
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i data-lucide="wifi" class="w-3 h-3 inline mr-1"></i> Test Local';
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
  // Local AI
  for (const f of LOCAL_AI_FIELDS) {
    const el = document.getElementById(f.key);
    if (el) updates[f.key] = el.value.trim() || (f.key === 'comfyui_workflow' ? null : f.default);
  }
  updates.local_ai_enabled = state.settings.local_ai_enabled !== false;
  // Rate limit
  updates.rate_limit_daily = state.settings.rate_limit_daily || 100;
// Mode toggles
  updates.customer_enabled = state.settings.customer_enabled !== false;
  updates.developer_enabled = state.settings.developer_enabled !== false;

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

init();
