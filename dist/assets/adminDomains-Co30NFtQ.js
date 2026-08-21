import{s as h}from"./supabase-client-CDm4AUL7.js";import{getCurrentUser as w}from"./auth-C74q9RIJ.js";import"./app-promo-banner-BXjUoacu.js";const y="https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/custom-domains";let m=null,c=[];function n(s){const t=document.getElementById("toast");document.getElementById("toast-msg").textContent=s,t.classList.remove("translate-y-20","opacity-0"),clearTimeout(t._t),t._t=setTimeout(()=>t.classList.add("translate-y-20","opacity-0"),3500),window.lucide&&lucide.createIcons()}function o(s){if(s==null)return"";const t=document.createElement("div");return t.textContent=String(s),t.innerHTML}function g(s){return s?new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"—"}function f(s){s&&s.target!==s.currentTarget||(document.getElementById("modal-container").innerHTML="")}window.closeModal=f;function p(s){s.addEventListener("click",function(t){const a=this.getBoundingClientRect(),e=document.createElement("span");e.className="ripple";const i=Math.max(a.width,a.height);e.style.width=e.style.height=i+"px",e.style.left=t.clientX-a.left-i/2+"px",e.style.top=t.clientY-a.top-i/2+"px",this.appendChild(e),setTimeout(()=>e.remove(),600)})}async function l(s,t={}){const a=await fetch(y,{method:"POST",headers:{Authorization:`Bearer ${m}`,"Content-Type":"application/json"},body:JSON.stringify({action:s,...t})}),e=await a.json();if(!a.ok)throw new Error(e.error||"Request failed");return e}function v(s){const t={pending:{cls:"bg-amber-500/10 text-amber-400 border-amber-500/20",icon:"clock",label:"DNS Pending"},dns_found:{cls:"bg-blue-500/10 text-blue-400 border-blue-500/20",icon:"search",label:"DNS Found"},ssl_installing:{cls:"bg-indigo-500/10 text-indigo-400 border-indigo-500/20",icon:"loader",label:"SSL Installing"},connected:{cls:"bg-emerald-500/10 text-emerald-400 border-emerald-500/20",icon:"check-circle",label:"Connected"},live:{cls:"bg-emerald-500/10 text-emerald-400 border-emerald-500/20",icon:"globe",label:"Live"},failed:{cls:"bg-red-500/10 text-red-400 border-red-500/20",icon:"x-circle",label:"Failed"}},a=t[s]||t.pending;return`<span class="inline-flex items-center gap-1 ${a.cls} border text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide"><i data-lucide="${a.icon}" class="w-3 h-3 ${s==="ssl_installing"?"animate-spin":""}"></i>${a.label}</span>`}function $(s){const t={none:{cls:"bg-gray-500/10 text-gray-400 border-gray-500/20",label:"No SSL"},pending:{cls:"bg-amber-500/10 text-amber-400 border-amber-500/20",label:"Pending"},active:{cls:"bg-emerald-500/10 text-emerald-400 border-emerald-500/20",label:"SSL Active"},failed:{cls:"bg-red-500/10 text-red-400 border-red-500/20",label:"SSL Failed"}},a=t[s]||t.none;return`<span class="inline-flex items-center gap-1 ${a.cls} border text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">${a.label}</span>`}function S(s){const t=[{id:"pending",label:"DNS Pending",icon:"clock"},{id:"dns_found",label:"DNS Found",icon:"search"},{id:"ssl_installing",label:"SSL Installing",icon:"loader"},{id:"connected",label:"Connected",icon:"check-circle"},{id:"live",label:"Live",icon:"globe"}],a=t.findIndex(e=>e.id===s);return`
        <div class="flex items-center gap-1 sm:gap-2 mt-4">
          ${t.map((e,i)=>{const r=a>i,u=a===i,b=i===t.length-1;return`
              <div class="flex items-center ${b?"":"flex-1"}">
                <div class="flex flex-col items-center gap-1 shrink-0">
                  <div class="progress-step w-8 h-8 rounded-full flex items-center justify-center border-2 ${r?"completed":u?"active":"border-gray-700 bg-gray-800/50 text-gray-600"}">
                    ${r?'<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i>':`<i data-lucide="${e.icon}" class="w-3.5 h-3.5 ${u?"text-blue-400":"text-gray-600"} ${u&&e.icon==="loader"?"animate-spin":""}"></i>`}
                  </div>
                  <span class="text-[9px] font-bold ${u?"text-blue-300":r?"text-emerald-400":"text-gray-600"} text-center leading-tight hidden sm:block">${e.label}</span>
                </div>
                ${b?"":`<div class="progress-line h-0.5 flex-1 mx-1 rounded ${r?"completed":"bg-gray-700/50"}"></div>`}
              </div>
            `}).join("")}
        </div>
      `}function k(){const s=document.getElementById("domains-list"),t=document.getElementById("primary-banner");if(c.length===0){s.innerHTML=`
          <div class="glass border border-blue-500/20 rounded-2xl p-8 text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mb-4">
              <i data-lucide="globe" class="w-8 h-8 text-blue-400"></i>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">No Custom Domains Yet</h3>
            <p class="text-sm text-gray-400 mb-4">Add your first custom domain to get started. We'll automatically generate the DNS records you need.</p>
            <button onclick="showAddDomainModal()" class="btn-press inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-blue-600/30">
              <i data-lucide="plus" class="w-4 h-4"></i> Add Your First Domain
            </button>
          </div>
        `,t.classList.add("hidden"),window.lucide&&lucide.createIcons(),document.querySelectorAll(".btn-press").forEach(p);return}const a=c.find(e=>e.is_primary);a?(t.classList.remove("hidden"),document.getElementById("primary-domain-name").textContent=a.domain):t.classList.add("hidden"),s.innerHTML=c.map(e=>`
        <div class="glass border ${e.is_primary?"border-emerald-500/30":"border-blue-500/20"} rounded-2xl p-5 slide-up">
          <!-- Domain header -->
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 ${e.is_primary?"bg-emerald-500/10":"bg-blue-500/10"} rounded-xl flex items-center justify-center shrink-0">
                <i data-lucide="${e.is_primary?"star":"globe"}" class="w-5 h-5 ${e.is_primary?"text-emerald-400":"text-blue-400"}"></i>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <h3 class="text-base font-bold text-white">${o(e.domain)}</h3>
                  ${e.is_primary?'<span class="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase">Primary</span>':""}
                </div>
                <div class="flex items-center gap-2 mt-1 flex-wrap">
                  ${v(e.status)}
                  ${$(e.ssl_status)}
                  ${e.registrar?`<span class="text-[10px] text-gray-500">· ${o(e.registrar)}</span>`:""}
                </div>
              </div>
            </div>
            <div class="flex flex-wrap gap-2 shrink-0">
              <button onclick="verifyDomain('${e.id}')" class="btn-press flex items-center gap-1.5 px-3 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 font-bold rounded-lg text-xs transition border border-blue-500/20">
                <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Verify Domain
              </button>
              ${!e.is_primary&&(e.status==="connected"||e.status==="live")?`
                <button onclick="setPrimary('${e.id}')" class="btn-press flex items-center gap-1.5 px-3 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold rounded-lg text-xs transition border border-emerald-500/20">
                  <i data-lucide="star" class="w-3.5 h-3.5"></i> Set Primary
                </button>
              `:""}
              ${e.ssl_status==="active"?`
                <button onclick="renewSsl('${e.id}')" class="btn-press flex items-center gap-1.5 px-3 py-2 bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 font-bold rounded-lg text-xs transition border border-violet-500/20">
                  <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i> Renew SSL
                </button>
              `:""}
              ${e.is_primary?"":`
                <button onclick="removeDomain('${e.id}')" class="btn-press flex items-center gap-1.5 px-3 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold rounded-lg text-xs transition border border-red-500/20">
                  <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Remove
                </button>
              `}
            </div>
          </div>

          <!-- Progress indicator -->
          ${S(e.status)}

          <!-- DNS Records -->
          <div class="mt-4 pt-4 border-t border-blue-500/10">
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-xs font-bold text-white uppercase tracking-wide flex items-center gap-1.5">
                <i data-lucide="list" class="w-3.5 h-3.5 text-blue-400"></i> DNS Records
              </h4>
              <button onclick="showDnsRecords('${e.id}')" class="text-xs font-bold text-blue-400 hover:text-blue-300 transition">Show Records</button>
            </div>
            <div id="dns-records-${e.id}" class="hidden space-y-2">
              ${(e.dns_records||[]).map(i=>`
                <div class="glass-soft border border-blue-500/10 rounded-lg p-3 grid grid-cols-12 gap-2 items-center text-xs">
                  <span class="col-span-2 sm:col-span-1 font-bold text-blue-400">${o(i.type)}</span>
                  <span class="col-span-3 sm:col-span-2 text-gray-400">${o(i.host)}</span>
                  <span class="col-span-5 sm:col-span-6 text-gray-300 font-mono break-all">${o(i.value)}</span>
                  <span class="col-span-2 text-gray-500 text-right">${i.ttl}s</span>
                </div>
              `).join("")}
              <p class="text-xs text-gray-500 mt-2">${o((e.dns_records||[])[0]?.description||"Add these records at your domain registrar.")}</p>
            </div>
          </div>

          <!-- Redirect toggle -->
          ${e.is_primary?"":`
            <div class="mt-4 pt-4 border-t border-blue-500/10 flex items-center justify-between">
              <div>
                <p class="text-xs font-bold text-white">Redirect to Primary Domain</p>
                <p class="text-[10px] text-gray-500">Permanent (301) redirect this domain to the primary domain</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" ${e.redirect_to_primary?"checked":""} onchange="toggleRedirect('${e.id}', this.checked)" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-blue-600 transition-all relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
              </label>
            </div>
          `}

          <!-- SSL info -->
          ${e.ssl_status==="active"?`
            <div class="mt-4 pt-4 border-t border-blue-500/10 flex flex-wrap items-center gap-4 text-xs text-gray-500">
              <span class="flex items-center gap-1.5"><i data-lucide="shield" class="w-3.5 h-3.5 text-emerald-400"></i> SSL Issued: ${g(e.ssl_issued_at)}</span>
              <span class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-3.5 h-3.5 text-amber-400"></i> SSL Expires: ${g(e.ssl_expires_at)}</span>
              <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-400"></i> Auto-renewal enabled</span>
            </div>
          `:""}

          <!-- Last verified -->
          ${e.last_verified_at?`
            <div class="mt-3 text-[10px] text-gray-600">Last verified: ${new Date(e.last_verified_at).toLocaleString()}</div>
          `:""}
        </div>
      `).join(""),window.lucide&&lucide.createIcons(),document.querySelectorAll(".btn-press").forEach(p)}window.showAddDomainModal=()=>{const s=document.getElementById("modal-container");s.innerHTML=`
        <div class="modal-overlay fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50" onclick="closeModal(event)">
          <div class="modal-content glass border border-blue-500/20 rounded-2xl p-6 max-w-md w-full">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-bold text-white flex items-center gap-2"><i data-lucide="plus-circle" class="w-5 h-5 text-blue-400"></i> Add Custom Domain</h3>
              <button onclick="closeModal()" class="text-gray-500 hover:text-white transition text-[10px] font-bold uppercase tracking-wide">🔙 Back</button>
            </div>
            <form id="add-domain-form" class="space-y-4">
              <div>
                <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">Domain Name</label>
                <input type="text" id="new-domain-name" placeholder="shop.example.com" required
                  class="input-field w-full bg-[#0a1124]/80 border border-blue-500/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500">
                <p class="text-[10px] text-gray-500 mt-1">Enter the full domain name without https://</p>
              </div>
              <div>
                <label class="block text-xs font-bold uppercase text-gray-400 mb-1.5">Domain Registrar (optional)</label>
                <select id="new-domain-registrar" class="input-field w-full bg-[#0a1124]/80 border border-blue-500/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500">
                  <option value="">Select registrar...</option>
                  <option value="Namecheap">Namecheap</option>
                  <option value="Cloudflare">Cloudflare</option>
                  <option value="GoDaddy">GoDaddy</option>
                  <option value="Google Domains">Google Domains (Squarespace)</option>
                  <option value="Porkbun">Porkbun</option>
                  <option value="Hostinger">Hostinger</option>
                  <option value="Squarespace">Squarespace</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
                <i data-lucide="plus" class="w-4 h-4"></i> Add Domain
              </button>
            </form>
          </div>
        </div>
      `,window.lucide&&lucide.createIcons(),document.querySelectorAll(".btn-press").forEach(p),document.getElementById("add-domain-form").addEventListener("submit",async t=>{t.preventDefault();const a=document.getElementById("new-domain-name").value.trim(),e=document.getElementById("new-domain-registrar").value;if(!a)return;const i=t.target.querySelector('button[type="submit"]');i.disabled=!0,i.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Adding...',window.lucide&&lucide.createIcons();try{const r=await l("add",{domain:a,registrar:e});n(r.message),f(),await d(),showDnsRecords(r.domain.id)}catch(r){n("Error: "+r.message),i.disabled=!1,i.innerHTML='<i data-lucide="plus" class="w-4 h-4"></i> Add Domain',window.lucide&&lucide.createIcons()}})};window.verifyDomain=async s=>{n("Checking DNS records...");try{const t=await l("verify",{domainId:s});n(t.message),await d()}catch(t){n("Error: "+t.message)}};window.removeDomain=async s=>{const t=c.find(a=>a.id===s);if(t&&confirm(`Are you sure you want to remove "${t.domain}"? This action cannot be undone.`))try{const a=await l("remove",{domainId:s});n(a.message),await d()}catch(a){n("Error: "+a.message)}};window.setPrimary=async s=>{try{const t=await l("set_primary",{domainId:s});n(t.message),await d()}catch(t){n("Error: "+t.message)}};window.renewSsl=async s=>{n("Renewing SSL certificate...");try{const t=await l("renew_ssl",{domainId:s});n(t.message),await d()}catch(t){n("Error: "+t.message)}};window.toggleRedirect=async(s,t)=>{try{const a=await l("set_redirect",{domainId:s,redirect_to_primary:t,redirect_type:301});n(a.message)}catch(a){n("Error: "+a.message),await d()}};window.showDnsRecords=s=>{const t=document.getElementById(`dns-records-${s}`);t&&t.classList.toggle("hidden")};let x=!1;window.toggleDnsInstructions=async()=>{const s=document.getElementById("dns-instructions"),t=document.getElementById("dns-toggle-text");if(s.classList.contains("hidden")){if(s.classList.remove("hidden"),t.textContent="Hide Instructions",!x)try{const a=await l("all_registrars");s.innerHTML=a.registrars.map(e=>`
              <div class="glass-soft border border-blue-500/10 rounded-xl p-4">
                <h4 class="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <i data-lucide="server" class="w-4 h-4 text-blue-400"></i> ${o(e.name)}
                </h4>
                <ol class="space-y-1.5">
                  ${e.steps.map((i,r)=>`<li class="text-xs text-gray-400 flex gap-2"><span class="text-blue-400 font-bold shrink-0">${r+1}.</span><span>${o(i)}</span></li>`).join("")}
                </ol>
              </div>
            `).join(""),x=!0,window.lucide&&lucide.createIcons()}catch{s.innerHTML='<p class="text-xs text-red-400">Failed to load instructions.</p>'}}else s.classList.add("hidden"),t.textContent="Show Instructions"};async function d(){try{c=(await l("list")).domains||[],k()}catch(s){n("Error loading domains: "+s.message)}}async function L(){try{if(!await w()){window.location.href="/auth.html?redirect=/admin-domains.html";return}const{data:t}=await h.auth.getSession();if(m=t?.session?.access_token,!m){window.location.href="/auth.html?redirect=/admin-domains.html";return}document.getElementById("loading").classList.add("hidden"),document.getElementById("main-content").classList.remove("hidden"),await d()}catch(s){n("Initialization error: "+s.message)}}L();
