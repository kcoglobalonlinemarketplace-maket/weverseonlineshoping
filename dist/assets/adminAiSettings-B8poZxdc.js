import"./supabase-lazy-BQT6Mc9B.js";import"./localization-czOlrDT7.js";import"./localization-bootstrap-VU_dQ8-X.js";import"./live-stream-mode-CtlZxsIl.js";import{supabase as r}from"./supabase-client-nvpjTmO6.js";import"./brand-QZwsptsl.js";const b=[{id:"gemini",name:"Google Gemini",description:"Powers the Admin & Developer AI",role:"Admin & Developer AI",icon:"sparkles",color:"amber",models:["gemini-3-flash-preview","gemini-3.1-flash-lite-preview"],keyField:"gemini_api_key",modelField:"gemini_model",keyPlaceholder:"AIza...",signupUrl:"https://aistudio.google.com/app/apikey"},{id:"groq",name:"Groq (Free Tier)",description:"Fast free-tier model API for admin tasks",role:"Admin & Developer AI",icon:"zap",color:"violet",models:["llama-3.3-70b-versatile","llama-3.1-8b-instant"],keyField:"groq_key",modelField:"groq_model",keyPlaceholder:"gsk_...",signupUrl:"https://console.groq.com/keys"},{id:"openrouter",name:"OpenRouter (Free Models)",description:"Use free community models through OpenRouter",role:"Admin & Developer AI",icon:"route",color:"violet",models:["google/gemini-2.0-flash-exp:free","meta-llama/llama-3.1-8b-instruct:free"],keyField:"openrouter_key",modelField:"openrouter_model",keyPlaceholder:"sk-or-v1-...",signupUrl:"https://openrouter.ai/keys"},{id:"huggingface",name:"Hugging Face (Free Tier)",description:"Use free-tier inference router for assistant tasks",role:"Admin & Developer AI",icon:"cpu",color:"violet",models:["Qwen/Qwen2.5-Coder-32B-Instruct","mistralai/Mistral-7B-Instruct-v0.3"],keyField:"hf_key",modelField:"hf_model",keyPlaceholder:"hf_...",signupUrl:"https://huggingface.co/settings/tokens"}],p=[{key:"ollama_url",label:"Ollama Server URL",placeholder:"http://127.0.0.1:11434",default:"http://127.0.0.1:11434"},{key:"ollama_model",label:"Chat Model",placeholder:"llama3.2",default:""},{key:"ollama_image_model",label:"Image Model",placeholder:"llava",default:"llava"},{key:"comfyui_url",label:"ComfyUI Server URL",placeholder:"http://127.0.0.1:8188",default:"http://127.0.0.1:8188"},{key:"comfyui_workflow",label:"Workflow JSON",placeholder:"Paste your workflow JSON here (optional)",default:""},{key:"comfyui_input_node",label:"Input Node ID",placeholder:"image",default:"image"},{key:"comfyui_output_node",label:"Output Node ID",placeholder:"image",default:"image"}],h=new Set(["localhost","127.0.0.1"]),v="https://wttnvwpoqmbxryivcerf.supabase.co".replace(/\/$/,""),g=h.has(window.location.hostname)?"/_supabase/functions/v1/ai-admin-assistant":`${v}/functions/v1/ai-admin-assistant`,f="sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa";async function w(){const l=document.getElementById("access-denied");l.classList.remove("hidden"),l.innerHTML=`
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
  `,window.lucide&&lucide.createIcons()}window.bootstrapAdmin=async()=>{const l=document.getElementById("bootstrap-btn");if(l){l.disabled=!0,l.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Promoting...',window.lucide&&lucide.createIcons();try{const{data:e}=await r.auth.getSession(),t=await fetch(g,{method:"POST",headers:{Authorization:`Bearer ${e.session?.access_token||f}`,"Content-Type":"application/json"},body:JSON.stringify({action:"bootstrap_admin"})}),i=await t.json();t.ok&&i.success?(n("You are now an admin!"),setTimeout(()=>window.location.reload(),1e3)):(n(i.error||"Failed to become admin"),l.disabled=!1,l.innerHTML='<i data-lucide="shield" class="w-4 h-4"></i> Become Admin',window.lucide&&lucide.createIcons())}catch(e){n("Error: "+e.message),l.disabled=!1,l.innerHTML='<i data-lucide="shield" class="w-4 h-4"></i> Become Admin',window.lucide&&lucide.createIcons()}}};let s={user:null,isAdmin:!1,settings:null,saving:!1};function n(l,e="info"){const t=document.getElementById("toast");document.getElementById("toast-msg").textContent=l,t.classList.remove("translate-y-20","opacity-0"),clearTimeout(t._t),t._t=setTimeout(()=>t.classList.add("translate-y-20","opacity-0"),3e3),window.lucide&&lucide.createIcons()}function y(l){const e={emerald:{bg:"bg-emerald-500/10",text:"text-emerald-400",border:"border-emerald-500/30",ring:"ring-emerald-500/20"},amber:{bg:"bg-amber-500/10",text:"text-amber-400",border:"border-amber-500/30",ring:"ring-amber-500/20"},violet:{bg:"bg-violet-500/10",text:"text-violet-400",border:"border-violet-500/30",ring:"ring-violet-500/20"}};return e[l]||e.emerald}function u(){const l=document.getElementById("settings-root"),e=s.settings;l.innerHTML=`
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
          ${b.filter(t=>t.id!=="openai").map(t=>`<option value="${t.id}" ${e.active_provider===t.id?"selected":""}>${t.name}</option>`).join("")}
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
          <button onclick="toggleEnabled()" id="enable-toggle" class="relative inline-flex h-8 w-14 items-center rounded-full transition ${e.is_enabled?"bg-emerald-500":"bg-gray-600"}">
            <span class="inline-block h-6 w-6 transform rounded-full bg-white transition ${e.is_enabled?"translate-x-7":"translate-x-1"}"></span>
          </button>
        </div>
        <div class="mt-2 text-xs font-bold ${e.is_enabled?"text-emerald-400":"text-gray-500"}">${e.is_enabled?"AI Assistant is ON":"AI Assistant is OFF"}</div>
      </div>



      <!-- Provider API keys -->
      ${b.map(t=>{const i=y(t.color),a=e[t.keyField]&&e[t.keyField].length>0,o=t.keyLabel||"API Key",d=t.modelLabel||"Model",c=Array.isArray(t.models)&&t.models.length>0?`<select id="${t.modelField}" class="input-field w-full bg-[#0a1124]/80 border border-blue-500/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">${t.models.map(m=>`<option value="${m}" ${e[t.modelField]===m?"selected":""}>${m}</option>`).join("")}</select>`:`<input type="text" id="${t.modelField}" placeholder="${t.modelPlaceholder||"Optional value"}" value="${e[t.modelField]||""}" class="input-field w-full bg-[#0a1124]/80 border border-blue-500/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">`;return`
          <div class="glass border ${i.border} rounded-2xl p-5 slide-up" style="animation-delay: .1s">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
                <div class="w-8 h-8 ${i.bg} rounded-lg flex items-center justify-center">
                  <i data-lucide="${t.icon}" class="w-4 h-4 ${i.text}"></i>
                </div>
                ${t.name}
                ${a?`<span class="text-[10px] font-bold ${i.text} ${i.bg} px-2 py-0.5 rounded-full">Configured</span>`:'<span class="text-[10px] font-bold text-gray-600 bg-gray-500/10 px-2 py-0.5 rounded-full">Not Set</span>'}
              </h3>
              <a href="${t.signupUrl}" target="_blank" rel="noopener" class="text-[10px] text-gray-500 hover:text-blue-400 transition flex items-center gap-1">
                <i data-lucide="external-link" class="w-3 h-3"></i> Get API Key
              </a>
            </div>
            <div class="mb-3 text-xs text-gray-400">
              <span class="font-bold ${i.text}">Role: ${t.role}</span>
            </div>
            <div class="space-y-3">
              <div>
                <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">${o}</label>
                <div class="relative">
                  <input type="password" id="${t.keyField}" placeholder="${t.keyPlaceholder}" value="${e[t.keyField]||""}" class="input-field w-full bg-[#0a1124]/80 border border-blue-500/20 rounded-xl pl-4 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">
                  <button onclick="togglePassword('${t.keyField}')" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition">
                    <i data-lucide="eye" class="w-4 h-4" id="${t.keyField}-eye"></i>
                  </button>
                </div>
              </div>
              <div>
                <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">${d}</label>
                ${c}
              </div>
            </div>
          </div>
        `}).join("")}

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
            <button onclick="toggleLocalAI()" id="local-ai-toggle" class="relative inline-flex h-8 w-14 items-center rounded-full transition ${e.local_ai_enabled!==!1?"bg-emerald-500":"bg-gray-600"}">
              <span class="inline-block h-6 w-6 transform rounded-full bg-white transition ${e.local_ai_enabled!==!1?"translate-x-7":"translate-x-1"}"></span>
            </button>
          </div>
        </div>
        <p class="text-xs text-gray-500 mb-4">Run the AI fully on your own machine. <strong>Ollama</strong> provides local chat + image models, <strong>ComfyUI</strong> provides local image generation. Requests go straight from the browser to your machine — nothing is stored or sent to the cloud.</p>
        ${p.map(t=>{const i=t.key==="comfyui_workflow",a=e[t.key]||t.default||"";return`
            <div class="mb-3">
              <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">${t.label}</label>
              ${i?`<textarea id="${t.key}" rows="5" placeholder="${t.placeholder}" class="input-field w-full bg-[#0a1124]/80 border border-violet-500/20 rounded-xl px-4 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-violet-500">${a}</textarea>`:`<input type="text" id="${t.key}" placeholder="${t.placeholder}" value="${a}" class="input-field w-full bg-[#0a1124]/80 border border-violet-500/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-violet-500">`}
            </div>`}).join("")}
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
            <input type="text" id="customer_model_override" placeholder="e.g. gpt-4o-mini (leave blank for default)" value="${e.customer_model_override||""}" class="input-field w-full bg-[#0a1124]/80 border border-emerald-500/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500">
          </div>
          <div>
            <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">Admin AI Model</label>
            <input type="text" id="admin_model_override" placeholder="e.g. gemini-2.5-pro (leave blank for default)" value="${e.admin_model_override||""}" class="input-field w-full bg-[#0a1124]/80 border border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
          </div>
          <div>
            <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">Developer AI Model</label>
            <input type="text" id="developer_model_override" placeholder="e.g. gemini-2.5-pro (leave blank for default)" value="${e.developer_model_override||""}" class="input-field w-full bg-[#0a1124]/80 border border-amber-500/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
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
            <button onclick="toggleCustomerEnabled()" class="relative inline-flex h-8 w-14 items-center rounded-full transition ${e.customer_enabled!==!1?"bg-emerald-500":"bg-gray-600"}">
              <span class="inline-block h-6 w-6 transform rounded-full bg-white transition ${e.customer_enabled!==!1?"translate-x-7":"translate-x-1"}"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-bold text-white">Developer AI</p>
              <p class="text-xs text-gray-500">Enable/disable the developer mode for code editing</p>
            </div>
            <button onclick="toggleDeveloperEnabled()" class="relative inline-flex h-8 w-14 items-center rounded-full transition ${e.developer_enabled!==!1?"bg-emerald-500":"bg-gray-600"}">
              <span class="inline-block h-6 w-6 transform rounded-full bg-white transition ${e.developer_enabled!==!1?"translate-x-7":"translate-x-1"}"></span>
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
  `,window.lucide&&lucide.createIcons()}window.selectProvider=l=>{s.settings.active_provider=l,u(),n(`Selected ${l} for Admin & Developer AI.`)};window.togglePassword=l=>{const e=document.getElementById(l),t=document.getElementById(l+"-eye");e.type==="password"?(e.type="text",t.setAttribute("data-lucide","eye-off")):(e.type="password",t.setAttribute("data-lucide","eye")),window.lucide&&lucide.createIcons()};window.toggleEnabled=async()=>{const l=!s.settings.is_enabled;s.settings.is_enabled=l;try{const{error:e}=await r.from("ai_settings").update({is_enabled:l}).eq("id",s.settings.id);if(e)throw e;n(l?"AI assistant enabled.":"AI assistant disabled."),u()}catch(e){s.settings.is_enabled=!l,n("Failed to toggle: "+e.message),u()}};window.testConnection=async()=>{const l=document.getElementById("test-btn");if(l){l.disabled=!0,l.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i> Testing...',window.lucide&&lucide.createIcons();try{const{data:{session:e}}=await r.auth.getSession(),t=document.getElementById("active_provider")?.value||s.settings.active_provider||"gemini",a=await(await fetch(g,{method:"POST",headers:{Authorization:`Bearer ${e?.access_token||f}`,"Content-Type":"application/json"},body:JSON.stringify({action:"test_connection",provider_override:t})})).json();a.success?n(`Connection OK — ${a.provider_label} (${a.model})`):n(`Connection failed: ${a.error||"Unknown error"}`)}catch(e){n("Connection error: "+e.message)}finally{l.disabled=!1,l.innerHTML='<i data-lucide="wifi" class="w-4 h-4 inline mr-2"></i> Test Connection',window.lucide&&lucide.createIcons()}}};window.toggleLocalAI=async()=>{const l=s.settings.local_ai_enabled===!1;s.settings.local_ai_enabled=l;try{const{error:e}=await r.from("ai_settings").update({local_ai_enabled:l}).eq("id",s.settings.id);if(e)throw e;n(l?"Local AI enabled.":"Local AI disabled."),u()}catch(e){s.settings.local_ai_enabled=!l,n("Failed to toggle: "+e.message),u()}};window.testLocalAI=async()=>{const l=document.getElementById("local-test-btn");if(!l)return;const e=(document.getElementById("ollama_url")?.value||"http://127.0.0.1:11434").replace(/\/$/,""),t=(document.getElementById("comfyui_url")?.value||"http://127.0.0.1:8188").replace(/\/$/,"");l.disabled=!0,l.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-1"></i> Testing...',window.lucide&&lucide.createIcons();try{const i=await fetch(`${e}/api/tags`,{signal:AbortSignal.timeout(5e3)}),a=await i.json(),o=await fetch(`${t}/system_stats`,{signal:AbortSignal.timeout(5e3)}),d=i.ok&&Array.isArray(a?.models),c=o.ok;d&&c?n(`Local AI OK — Ollama (${a.models.length} models) + ComfyUI reachable`,"success"):n(d?`Ollama OK (${a.models.length} models), but ComfyUI unreachable`:c?`ComfyUI reachable, but Ollama unreachable at ${e}`:"Neither Ollama nor ComfyUI is reachable. Is the app running over HTTPS?")}catch(i){n("Local AI unreachable: "+i.message)}finally{l.disabled=!1,l.innerHTML='<i data-lucide="wifi" class="w-3 h-3 inline mr-1"></i> Test Local',window.lucide&&lucide.createIcons()}};window.saveSettings=async()=>{if(s.saving)return;s.saving=!0;const l=document.getElementById("save-btn");l.disabled=!0,l.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i> Saving...',window.lucide&&lucide.createIcons();const e={active_provider:document.getElementById("active_provider")?.value||s.settings.active_provider||"gemini"};for(const o of b){const d=document.getElementById(o.keyField),c=document.getElementById(o.modelField),m=d?d.value.trim():"",x=c?c.value.trim():"";e[o.keyField]=m||null,e[o.modelField]=x}const t=document.getElementById("customer_model_override"),i=document.getElementById("admin_model_override"),a=document.getElementById("developer_model_override");t&&(e.customer_model_override=t.value.trim()||null),i&&(e.admin_model_override=i.value.trim()||null),a&&(e.developer_model_override=a.value.trim()||null);for(const o of p){const d=document.getElementById(o.key);d&&(e[o.key]=d.value.trim()||(o.key==="comfyui_workflow"?null:o.default))}e.local_ai_enabled=s.settings.local_ai_enabled!==!1,e.rate_limit_daily=s.settings.rate_limit_daily||100,e.customer_enabled=s.settings.customer_enabled!==!1,e.developer_enabled=s.settings.developer_enabled!==!1;try{const{error:o}=await r.from("ai_settings").update(e).eq("id",s.settings.id);if(o)throw o;Object.assign(s.settings,e),n("Settings saved successfully!"),u()}catch(o){n("Failed to save: "+o.message)}finally{s.saving=!1,l.disabled=!1,l.innerHTML='<i data-lucide="save" class="w-4 h-4 inline mr-2"></i> Save Settings',window.lucide&&lucide.createIcons()}};async function k(){const{data:l}=await r.auth.getSession();if(s.user=l?.session?.user||null,!s.user){const a=window.location.pathname+window.location.search;window.location.href=`/auth.html?redirect=${encodeURIComponent(a)}`;return}const{data:e}=await r.rpc("is_current_user_admin");if(!e){const{data:a}=await r.rpc("has_any_admin");a?(document.getElementById("access-denied").classList.remove("hidden"),document.getElementById("access-denied-msg").textContent="You are signed in, but this account does not have administrator privileges."):w(),window.lucide&&lucide.createIcons();return}s.isAdmin=!0;const{data:t,error:i}=await r.from("ai_settings").select("*").limit(1).maybeSingle();if(i||!t){document.getElementById("settings-root").innerHTML='<div class="glass border border-red-500/20 rounded-2xl p-6 text-center"><p class="text-sm text-red-400">Failed to load AI settings. Please try again.</p></div>';return}s.settings=t,u()}window.toggleCustomerEnabled=()=>{s.settings.customer_enabled=!s.settings.customer_enabled,saveSettings()};window.toggleDeveloperEnabled=()=>{s.settings.developer_enabled=!s.settings.developer_enabled,saveSettings()};k();
