import"./preload-helper-CS1eXPs2.js";import"./localization-Y5CYo-R4.js";import"./localization-bootstrap-BFRre-y6.js";import{supabase as d}from"./supabase-client-nvpjTmO6.js";import"./brand-Ch4-wKat.js";const x=new Set(["localhost","127.0.0.1"]),w="https://wttnvwpoqmbxryivcerf.supabase.co".replace(/\/$/,""),f=x.has(window.location.hostname)?"/_supabase/functions/v1/ai-admin-assistant":`${w}/functions/v1/ai-admin-assistant`,h="sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa",p=[{id:"product_ai",label:"Product AI",icon:"package",note:"Create and structure product data."},{id:"writer_ai",label:"Writer AI",icon:"pen-line",note:"Generate marketing copy and descriptions."},{id:"image_ai",label:"Image AI",icon:"image",note:"Image prompts, tags, and media instructions."},{id:"showroom_ai",label:"Showroom AI",icon:"store",note:"Publish items and align listing details."},{id:"seo_ai",label:"SEO AI",icon:"search",note:"Optimize metadata and search targeting."},{id:"customer_support_ai",label:"Customer Support AI",icon:"headphones",note:"Prepare customer-facing answers and FAQs."},{id:"website_builder_ai",label:"Website Builder AI",icon:"code-2",note:"Apply layout/build workflow steps."},{id:"ai_repair_assistant",label:"AI Repair Assistant",icon:"shield-check",note:"Run verification and repair checks."}];let a={user:null,isAdmin:!1,settings:null,saving:!1};function l(t,e="info"){const s=document.getElementById("toast"),i=document.getElementById("toast-msg"),n=s?.querySelector("i[data-lucide]");if(!s||!i)return;i.textContent=t;const r={success:"check-circle",error:"alert-circle",info:"info"},o={success:"text-emerald-400",error:"text-red-400",info:"text-amber-400"};n&&(n.setAttribute("data-lucide",r[e]||"info"),n.className=`w-4 h-4 shrink-0 ${o[e]||"text-amber-400"}`),s.classList.remove("translate-y-20","opacity-0"),clearTimeout(s._t),s._t=setTimeout(()=>s.classList.add("translate-y-20","opacity-0"),3e3),window.lucide&&lucide.createIcons()}function u(t){if(t==null)return"";const e=document.createElement("div");return e.textContent=String(t),e.innerHTML}function _(){const t={};for(const e of p)t[e.id]=!0;return t}function b(t){const e=_();if(!t||typeof t!="object")return e;for(const s of p)typeof t[s.id]=="boolean"&&(e[s.id]=t[s.id]);return e}function y(t){const e={};if(!t||typeof t!="object")return e;for(const s of p){const i=t[s.id];typeof i=="string"&&i.trim()&&(e[s.id]=i.trim())}return e}window.togglePassword=t=>{const e=document.getElementById(t),s=document.getElementById(t+"-eye");if(!e)return;const i=e.type==="password";e.type=i?"text":"password",s&&s.setAttribute("data-lucide",i?"eye-off":"eye"),window.lucide&&lucide.createIcons()};window.toggleAutomationCenterEnabled=()=>{a.settings&&(a.settings.automation_center_enabled=a.settings.automation_center_enabled!==!0,m(),saveSettings())};window.toggleAssistantEnabled=t=>{if(!a.settings)return;const e=b(a.settings.n8n_assistant_enabled);e[t]=e[t]!==!0,a.settings.n8n_assistant_enabled=e,m(),saveSettings()};window.saveSettings=async()=>{if(a.saving)return;a.saving=!0;const t=document.getElementById("save-btn");t&&(t.disabled=!0,t.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i> Saving...'),window.lucide&&lucide.createIcons();const e={},s=document.getElementById("n8n_webhook_url"),i=document.getElementById("n8n_webhook_token");s&&(e.n8n_webhook_url=s.value.trim()||null),i&&(e.n8n_webhook_token=i.value.trim()||null),e.automation_center_enabled=a.settings.automation_center_enabled===!0,e.n8n_assistant_enabled=b(a.settings.n8n_assistant_enabled);const n={};for(const o of p){const c=document.getElementById(`hook_${o.id}`),g=c?c.value.trim():"";g&&(n[o.id]=g)}e.n8n_assistant_webhooks=n,e.repair_ai_provider=(document.getElementById("repair_ai_provider")?.value||"openrouter").trim(),e.repair_ai_model=(document.getElementById("repair_ai_model")?.value||"google/gemini-2.0-flash-exp:free").trim(),e.repair_ai_api_key=document.getElementById("repair_ai_api_key")?.value.trim()||null,e.repair_auto_apply_safe_fixes=document.getElementById("repair_auto_apply_safe_fixes")?.checked!==!1;const r=Number(document.getElementById("repair_scan_interval_minutes")?.value||15);e.repair_scan_interval_minutes=Number.isFinite(r)?Math.max(1,Math.min(1440,Math.round(r))):15;try{const{error:o}=await d.from("ai_settings").update(e).eq("id",a.settings.id);if(o)throw o;Object.assign(a.settings,e),l("n8n settings saved successfully!","success"),m()}catch(o){l("Failed to save: "+o.message,"error")}finally{a.saving=!1,t&&(t.disabled=!1,t.innerHTML='<i data-lucide="save" class="w-4 h-4 inline mr-2"></i> Save Settings'),window.lucide&&lucide.createIcons()}};window.testAutomationCenter=async()=>{const t=document.getElementById("test-btn");t&&(t.disabled=!0,t.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i> Testing...'),window.lucide&&lucide.createIcons();try{const{data:{session:e}}=await d.auth.getSession(),s=await fetch(f,{method:"POST",headers:{Authorization:`Bearer ${e?.access_token||h}`,"Content-Type":"application/json"},body:JSON.stringify({action:"test_automation_center",developer_mode:!0})}),i=await s.json().catch(()=>({}));if(!s.ok||i.success===!1){const o=Array.isArray(i?.checks)?i.checks.map(c=>`${c.assistant}: ${c.ok?"OK":`FAIL (${c.detail})`}`).join(`
`):i.error||`HTTP ${s.status}`;l("Automation test failed. Check the console.","error"),console.error("[n8n] Automation test failed:",o);return}const r=(Array.isArray(i.checks)?i.checks:[]).filter(o=>!o.ok);r.length===0?l("Automation Center is healthy.","success"):l(`${r.length} assistant(s) failed the health check.`,"error")}catch(e){l("Automation test error: "+e.message,"error")}finally{t&&(t.disabled=!1,t.innerHTML='<i data-lucide="activity" class="w-4 h-4 inline mr-2"></i> Test Automation Center'),window.lucide&&lucide.createIcons()}};window.showBootstrapPrompt=()=>{const t=document.getElementById("access-denied");t.classList.remove("hidden"),t.innerHTML=`
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
  `,window.lucide&&lucide.createIcons()};window.bootstrapAdmin=async()=>{const t=document.getElementById("bootstrap-btn");if(t){t.disabled=!0,t.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Promoting...',window.lucide&&lucide.createIcons();try{const{data:e}=await d.auth.getSession(),s=await fetch(f,{method:"POST",headers:{Authorization:`Bearer ${e.session?.access_token||h}`,"Content-Type":"application/json"},body:JSON.stringify({action:"bootstrap_admin"})}),i=await s.json();s.ok&&i.success?(l("You are now an admin!","success"),setTimeout(()=>window.location.reload(),1e3)):(l(i.error||"Failed to become admin","error"),t.disabled=!1,t.innerHTML='<i data-lucide="shield" class="w-4 h-4"></i> Become Admin',window.lucide&&lucide.createIcons())}catch(e){l("Error: "+e.message,"error"),t.disabled=!1,t.innerHTML='<i data-lucide="shield" class="w-4 h-4"></i> Become Admin',window.lucide&&lucide.createIcons()}}};function m(){const t=document.getElementById("n8n-root");if(!t||!a.settings)return;const e=a.settings;e.n8n_assistant_enabled=b(e.n8n_assistant_enabled),e.n8n_assistant_webhooks=y(e.n8n_assistant_webhooks);const s=e.automation_center_enabled===!0;t.innerHTML=`
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
          <button onclick="toggleAutomationCenterEnabled()" class="relative inline-flex h-8 w-14 items-center rounded-full transition ${s?"bg-emerald-500":"bg-gray-600"}">
            <span class="inline-block h-6 w-6 transform rounded-full bg-white transition ${s?"translate-x-7":"translate-x-1"}"></span>
          </button>
        </div>
        <div class="mt-3 text-xs font-bold ${s?"text-emerald-400":"text-gray-500"}">${s?"Automation Center is ON":"Automation Center is OFF"}</div>
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
              <input type="text" id="n8n_webhook_url" placeholder="https://your-n8n-host/webhook/admin-ai" value="${u(e.n8n_webhook_url||"")}" class="input-field w-full bg-[#0a1124]/80 border border-amber-500/20 rounded-xl pl-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">n8n Token (optional)</label>
            <div class="relative">
              <input type="password" id="n8n_webhook_token" placeholder="Optional n8n token/header secret" value="${u(e.n8n_webhook_token||"")}" class="input-field w-full bg-[#0a1124]/80 border border-amber-500/20 rounded-xl pl-4 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
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
          ${p.map(i=>{const n=e.n8n_assistant_enabled?.[i.id]!==!1,r=e.n8n_assistant_webhooks?.[i.id]||"";return`
            <div class="glass-soft border border-amber-500/15 rounded-xl p-3">
              <div class="flex items-center justify-between gap-2 mb-2">
                <div class="flex items-center gap-2.5 min-w-0">
                  <div class="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <i data-lucide="${i.icon}" class="w-4 h-4 text-amber-400"></i>
                  </div>
                  <div class="min-w-0">
                    <p class="text-sm font-bold text-white">${i.label}</p>
                    <p class="text-[11px] text-gray-500">${i.note}</p>
                  </div>
                </div>
                <button onclick="toggleAssistantEnabled('${i.id}')" class="relative inline-flex h-7 w-12 items-center rounded-full transition ${n?"bg-emerald-500":"bg-gray-600"} shrink-0">
                  <span class="inline-block h-5 w-5 transform rounded-full bg-white transition ${n?"translate-x-6":"translate-x-1"}"></span>
                </button>
              </div>
              <label class="block text-[11px] font-bold uppercase text-gray-400 mb-1">Webhook override (optional)</label>
              <input type="text" id="hook_${i.id}" value="${u(r)}" placeholder="Use global n8n webhook when empty" class="input-field w-full bg-[#0a1124]/80 border border-amber-500/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500">
            </div>`}).join("")}
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
              <option value="openrouter" ${String(e.repair_ai_provider||"openrouter")==="openrouter"?"selected":""}>OpenRouter (free)</option>
              <option value="huggingface" ${String(e.repair_ai_provider||"")==="huggingface"?"selected":""}>Hugging Face</option>
              <option value="groq" ${String(e.repair_ai_provider||"")==="groq"?"selected":""}>Groq</option>
              <option value="gemini" ${String(e.repair_ai_provider||"")==="gemini"?"selected":""}>Gemini</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-bold uppercase text-gray-400 mb-1">Repair model</label>
            <input type="text" id="repair_ai_model" value="${u(e.repair_ai_model||"google/gemini-2.0-flash-exp:free")}" placeholder="google/gemini-2.0-flash-exp:free" class="input-field w-full bg-[#0a1124]/80 border border-emerald-500/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500">
          </div>
          <div class="sm:col-span-2">
            <label class="block text-[11px] font-bold uppercase text-gray-400 mb-1">Repair API key</label>
            <div class="relative">
              <input type="password" id="repair_ai_api_key" value="${u(e.repair_ai_api_key||"")}" placeholder="OpenRouter key preferred for free model" class="input-field w-full bg-[#0a1124]/80 border border-emerald-500/20 rounded-xl pl-3 pr-10 py-2 text-xs text-white focus:outline-none focus:border-emerald-500">
              <button onclick="togglePassword('repair_ai_api_key')" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition">
                <i data-lucide="eye" class="w-4 h-4" id="repair_ai_api_key-eye"></i>
              </button>
            </div>
          </div>
          <div>
            <label class="block text-[11px] font-bold uppercase text-gray-400 mb-1">Scan interval (minutes)</label>
            <input type="number" id="repair_scan_interval_minutes" min="1" max="1440" value="${Number.isFinite(Number(e.repair_scan_interval_minutes))?Number(e.repair_scan_interval_minutes):15}" class="input-field w-full bg-[#0a1124]/80 border border-emerald-500/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500">
          </div>
          <div class="flex items-end">
            <label class="inline-flex items-center gap-2 text-xs text-gray-300 font-semibold">
              <input type="checkbox" id="repair_auto_apply_safe_fixes" class="accent-emerald-500" ${e.repair_auto_apply_safe_fixes!==!1?"checked":""}>
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
  `,window.lucide&&lucide.createIcons()}async function v(){const{data:t}=await d.auth.getSession();if(a.user=t?.session?.user||null,!a.user){const n=window.location.pathname+window.location.search;window.location.href=`/auth.html?redirect=${encodeURIComponent(n)}`;return}const{data:e}=await d.rpc("is_current_user_admin");if(!e){const{data:n}=await d.rpc("has_any_admin");n?(document.getElementById("access-denied").classList.remove("hidden"),document.getElementById("access-denied-msg").textContent="You are signed in, but this account does not have administrator privileges."):showBootstrapPrompt(),window.lucide&&lucide.createIcons();return}a.isAdmin=!0;const{data:s,error:i}=await d.from("ai_settings").select("*").limit(1).maybeSingle();if(i||!s){document.getElementById("n8n-root").innerHTML='<div class="glass border border-red-500/20 rounded-2xl p-6 text-center"><p class="text-sm text-red-400">Failed to load n8n settings. Please try again.</p></div>';return}a.settings=s,m()}v();
