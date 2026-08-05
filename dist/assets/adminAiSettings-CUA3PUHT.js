import{supabase as o}from"./supabase-client-7_ZWSEp6.js";import"./localization-DZas-9Er.js";import"./live-stream-mode-DdCoL3xA.js";import"./brand-BSNwarjw.js";const c=[{id:"openai",name:"OpenAI (ChatGPT)",description:"Powers the Customer Support AI",role:"Customer Support AI",icon:"bot",color:"emerald",models:["gpt-4o","gpt-4o-mini","gpt-4.1","gpt-4.1-mini","gpt-4-turbo","gpt-3.5-turbo","o1-mini","o1-preview"],keyField:"openai_api_key",modelField:"openai_model",keyPlaceholder:"sk-...",signupUrl:"https://platform.openai.com/api-keys"},{id:"gemini",name:"Google Gemini",description:"Powers the Admin & Developer AI",role:"Admin & Developer AI",icon:"sparkles",color:"amber",models:["gemini-2.5-flash","gemini-2.5-pro","gemini-2.0-flash","gemini-2.0-flash-lite","gemini-1.5-flash","gemini-1.5-pro","gemini-3-flash-preview","gemini-3.1-flash-lite-preview"],keyField:"gemini_api_key",modelField:"gemini_model",keyPlaceholder:"AIza...",signupUrl:"https://aistudio.google.com/app/apikey"}],m="https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/ai-admin-assistant",u="sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa";async function g(){const t=document.getElementById("access-denied");t.classList.remove("hidden"),t.innerHTML=`
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
  `,window.lucide&&lucide.createIcons()}window.bootstrapAdmin=async()=>{const t=document.getElementById("bootstrap-btn");if(t){t.disabled=!0,t.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Promoting...',window.lucide&&lucide.createIcons();try{const{data:e}=await o.auth.getSession(),s=await fetch(m,{method:"POST",headers:{Authorization:`Bearer ${e.session?.access_token||u}`,"Content-Type":"application/json"},body:JSON.stringify({action:"bootstrap_admin"})}),a=await s.json();s.ok&&a.success?(n("You are now an admin!"),setTimeout(()=>window.location.reload(),1e3)):(n(a.error||"Failed to become admin"),t.disabled=!1,t.innerHTML='<i data-lucide="shield" class="w-4 h-4"></i> Become Admin',window.lucide&&lucide.createIcons())}catch(e){n("Error: "+e.message),t.disabled=!1,t.innerHTML='<i data-lucide="shield" class="w-4 h-4"></i> Become Admin',window.lucide&&lucide.createIcons()}}};let i={user:null,isAdmin:!1,settings:null,saving:!1};function n(t,e="info"){const s=document.getElementById("toast");document.getElementById("toast-msg").textContent=t,s.classList.remove("translate-y-20","opacity-0"),clearTimeout(s._t),s._t=setTimeout(()=>s.classList.add("translate-y-20","opacity-0"),3e3),window.lucide&&lucide.createIcons()}function x(t){const e={emerald:{bg:"bg-emerald-500/10",text:"text-emerald-400",border:"border-emerald-500/30",ring:"ring-emerald-500/20"},amber:{bg:"bg-amber-500/10",text:"text-amber-400",border:"border-amber-500/30",ring:"ring-amber-500/20"},violet:{bg:"bg-violet-500/10",text:"text-violet-400",border:"border-violet-500/30",ring:"ring-violet-500/20"}};return e[t]||e.emerald}function r(){const t=document.getElementById("settings-root"),e=i.settings;t.innerHTML=`
    <div class="fade-in">
      <div class="mb-6">
        <h1 class="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">AI Architecture Settings</h1>
        <p class="text-sm text-gray-500">Each AI has a dedicated provider. OpenAI serves customers; Google Gemini serves admin and development. This architecture is locked for security.</p>
      </div>

      <!-- Architecture diagram -->
      <div class="glass border border-blue-500/20 rounded-2xl p-5 slide-up mb-4">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4 flex items-center gap-2">
          <i data-lucide="network" class="w-4 h-4 text-blue-400"></i> AI Architecture (Locked)
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
          <button onclick="toggleEnabled()" id="enable-toggle" class="relative inline-flex h-8 w-14 items-center rounded-full transition ${e.is_enabled?"bg-emerald-500":"bg-gray-600"}">
            <span class="inline-block h-6 w-6 transform rounded-full bg-white transition ${e.is_enabled?"translate-x-7":"translate-x-1"}"></span>
          </button>
        </div>
        <div class="mt-2 text-xs font-bold ${e.is_enabled?"text-emerald-400":"text-gray-500"}">${e.is_enabled?"AI Assistant is ON":"AI Assistant is OFF"}</div>
      </div>



      <!-- Provider API keys -->
      ${c.map(s=>{const a=x(s.color),d=e[s.keyField]&&e[s.keyField].length>0;return`
          <div class="glass border ${a.border} rounded-2xl p-5 slide-up" style="animation-delay: .1s">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
                <div class="w-8 h-8 ${a.bg} rounded-lg flex items-center justify-center">
                  <i data-lucide="${s.icon}" class="w-4 h-4 ${a.text}"></i>
                </div>
                ${s.name}
                ${d?`<span class="text-[10px] font-bold ${a.text} ${a.bg} px-2 py-0.5 rounded-full">Configured</span>`:'<span class="text-[10px] font-bold text-gray-600 bg-gray-500/10 px-2 py-0.5 rounded-full">Not Set</span>'}
              </h3>
              <a href="${s.signupUrl}" target="_blank" rel="noopener" class="text-[10px] text-gray-500 hover:text-blue-400 transition flex items-center gap-1">
                <i data-lucide="external-link" class="w-3 h-3"></i> Get API Key
              </a>
            </div>
            <div class="mb-3 text-xs text-gray-400">
              <span class="font-bold ${a.text}">Role: ${s.role}</span>
            </div>
            <div class="space-y-3">
              <div>
                <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">API Key</label>
                <div class="relative">
                  <input type="password" id="${s.keyField}" placeholder="${s.keyPlaceholder}" value="${e[s.keyField]||""}" class="input-field w-full bg-[#0a1124]/80 border border-blue-500/20 rounded-xl pl-4 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">
                  <button onclick="togglePassword('${s.keyField}')" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition">
                    <i data-lucide="eye" class="w-4 h-4" id="${s.keyField}-eye"></i>
                  </button>
                </div>
              </div>
              <div>
                <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">Model</label>
                <select id="${s.modelField}" class="input-field w-full bg-[#0a1124]/80 border border-blue-500/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">
                  ${s.models.map(l=>`<option value="${l}" ${e[s.modelField]===l?"selected":""}>${l}</option>`).join("")}
                </select>
              </div>
            </div>
          </div>
        `}).join("")}

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
  `,window.lucide&&lucide.createIcons()}window.selectProvider=t=>{n("Architecture is locked. OpenAI serves customers, Gemini serves admin.")};window.togglePassword=t=>{const e=document.getElementById(t),s=document.getElementById(t+"-eye");e.type==="password"?(e.type="text",s.setAttribute("data-lucide","eye-off")):(e.type="password",s.setAttribute("data-lucide","eye")),window.lucide&&lucide.createIcons()};window.toggleEnabled=async()=>{const t=!i.settings.is_enabled;i.settings.is_enabled=t;try{const{error:e}=await o.from("ai_settings").update({is_enabled:t}).eq("id",i.settings.id);if(e)throw e;n(t?"AI assistant enabled.":"AI assistant disabled."),r()}catch(e){i.settings.is_enabled=!t,n("Failed to toggle: "+e.message),r()}};window.testConnection=async()=>{const t=document.getElementById("test-btn");if(t){t.disabled=!0,t.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i> Testing...',window.lucide&&lucide.createIcons();try{const{data:{session:e}}=await o.auth.getSession(),a=await(await fetch(m,{method:"POST",headers:{Authorization:`Bearer ${e?.access_token||u}`,"Content-Type":"application/json"},body:JSON.stringify({action:"test_connection"})})).json();a.success?n(`Connection OK — ${a.provider_label} (${a.model})`):n(`Connection failed: ${a.error||"Unknown error"}`)}catch(e){n("Connection error: "+e.message)}finally{t.disabled=!1,t.innerHTML='<i data-lucide="wifi" class="w-4 h-4 inline mr-2"></i> Test Connection',window.lucide&&lucide.createIcons()}}};window.saveSettings=async()=>{if(i.saving)return;i.saving=!0;const t=document.getElementById("save-btn");t.disabled=!0,t.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i> Saving...',window.lucide&&lucide.createIcons();const e={active_provider:"gemini"};for(const l of c){const p=document.getElementById(l.keyField).value.trim(),b=document.getElementById(l.modelField).value;e[l.keyField]=p||null,e[l.modelField]=b}const s=document.getElementById("customer_model_override"),a=document.getElementById("admin_model_override"),d=document.getElementById("developer_model_override");s&&(e.customer_model_override=s.value.trim()||null),a&&(e.admin_model_override=a.value.trim()||null),d&&(e.developer_model_override=d.value.trim()||null),e.rate_limit_daily=i.settings.rate_limit_daily||100,e.customer_enabled=i.settings.customer_enabled!==!1,e.developer_enabled=i.settings.developer_enabled!==!1;try{const{error:l}=await o.from("ai_settings").update(e).eq("id",i.settings.id);if(l)throw l;Object.assign(i.settings,e),n("Settings saved successfully!"),r()}catch(l){n("Failed to save: "+l.message)}finally{i.saving=!1,t.disabled=!1,t.innerHTML='<i data-lucide="save" class="w-4 h-4 inline mr-2"></i> Save Settings',window.lucide&&lucide.createIcons()}};async function v(){const{data:t}=await o.auth.getSession();if(i.user=t?.session?.user||null,!i.user){const d=window.location.pathname+window.location.search;window.location.href=`/auth.html?redirect=${encodeURIComponent(d)}`;return}const{data:e}=await o.rpc("is_current_user_admin");if(!e){const{data:d}=await o.rpc("has_any_admin");d?(document.getElementById("access-denied").classList.remove("hidden"),document.getElementById("access-denied-msg").textContent="You are signed in, but this account does not have administrator privileges."):g(),window.lucide&&lucide.createIcons();return}i.isAdmin=!0;const{data:s,error:a}=await o.from("ai_settings").select("*").limit(1).maybeSingle();if(a||!s){document.getElementById("settings-root").innerHTML='<div class="glass border border-red-500/20 rounded-2xl p-6 text-center"><p class="text-sm text-red-400">Failed to load AI settings. Please try again.</p></div>';return}i.settings=s,r()}window.toggleCustomerEnabled=()=>{i.settings.customer_enabled=!i.settings.customer_enabled,saveSettings()};window.toggleDeveloperEnabled=()=>{i.settings.developer_enabled=!i.settings.developer_enabled,saveSettings()};v();
