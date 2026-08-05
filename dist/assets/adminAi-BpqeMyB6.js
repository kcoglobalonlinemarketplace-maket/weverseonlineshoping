import{supabase as x}from"./supabase-client-D1iyov-x.js";import"./localization-CfMNUAGI.js";import"./live-stream-mode-OR9ZxBS7.js";import"./brand-_M2LrXmp.js";const m="https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/ai-admin-assistant",y="sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa";let r={user:null,isAdmin:!1,history:[],sending:!1,developerMode:!1};function l(t){const e=document.getElementById("toast");document.getElementById("toast-msg").textContent=t,e.classList.remove("translate-y-20","opacity-0"),clearTimeout(e._t),e._t=setTimeout(()=>e.classList.add("translate-y-20","opacity-0"),3e3),window.lucide&&lucide.createIcons()}function u(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function w(t){let e=u(t);return e=e.replace(/```(\w*)\n([\s\S]*?)```/g,(a,o,s)=>`<pre><code>${s.trim()}</code></pre>`),e=e.replace(/`([^`]+)`/g,"<code>$1</code>"),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/^\- (.+)$/gm,"<li>$1</li>"),e=e.replace(/^\d+\. (.+)$/gm,"<li>$1</li>"),e=e.replace(/(<li>.*<\/li>\n?)+/g,a=>`<ul>${a}</ul>`),e=e.replace(/\n\n/g,"</p><p>"),e=e.replace(/\n/g,"<br>"),e=`<p>${e}</p>`,e=e.replace(/<ul><br>/g,"<ul>").replace(/<br><\/ul>/g,"</ul>"),e}function _(t){const e=t.result;if(e.error)return`<div class="mt-2 text-xs bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2 text-red-400"><i data-lucide="alert-circle" class="w-3 h-3 inline mr-1"></i> ${u(e.error)}</div>`;if(e.results&&Array.isArray(e.results)){const a=e.results.slice(0,5).map(s=>s.property_id?`<div class="text-xs text-gray-400 py-1 border-b border-blue-500/5 last:border-0"><span class="font-mono text-blue-400">${s.property_id}</span> — ${u(s.title||"Untitled")} <span class="text-amber-400 font-bold">${s.price?parseFloat(s.price).toLocaleString():""} ${s.currency||""}</span>${s.stock_quantity!=null?` <span class="text-gray-500">(Stock: ${s.stock_quantity})</span>`:""}</div>`:s.order_number?`<div class="text-xs text-gray-400 py-1 border-b border-blue-500/5 last:border-0"><span class="font-mono text-blue-400">${s.order_number}</span> — ${u(s.full_name||s.customer_name||"Customer")} <span class="text-amber-400">${s.amount?parseFloat(s.amount).toLocaleString():""} ${s.currency||""}</span> <span class="text-gray-500">(${s.status||""})</span></div>`:s.display_name||s.user_id?`<div class="text-xs text-gray-400 py-1 border-b border-blue-500/5 last:border-0">${u(s.display_name||"Unknown")} <span class="text-gray-500">(${s.country_code||""})</span></div>`:`<div class="text-xs text-gray-400 py-1">${u(JSON.stringify(s).slice(0,100))}</div>`).join(""),o=e.count>5?`<div class="text-[10px] text-gray-600 mt-1">...and ${e.count-5} more</div>`:"";return`<div class="mt-2 glass-soft border border-blue-500/15 rounded-xl px-3 py-2"><div class="text-[10px] text-gray-500 uppercase font-bold mb-1">${t.tool} — ${e.count} result(s)</div>${a}${o}</div>`}return e.success&&e.message?`<div class="mt-2 text-xs bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-3 py-2 text-emerald-400"><i data-lucide="check-circle" class="w-3 h-3 inline mr-1"></i> ${u(e.message)}</div>`:e.generated_content?`<div class="mt-2 glass-soft border border-blue-500/15 rounded-xl px-3 py-2"><div class="text-[10px] text-gray-500 uppercase font-bold mb-1">Generated: ${t.args.content_type}</div><div class="text-xs text-gray-300 whitespace-pre-wrap">${u(e.generated_content)}</div></div>`:""}function c(t,e=!0){const a=document.getElementById("messages-container"),o=t.role==="user",s=document.createElement("div");s.className=`flex ${o?"justify-end":"justify-start"} ${e?"fade-in":""}`;const n=(t.tool_results||[]).map(_).join("");s.innerHTML=o?`
    <div class="max-w-[80%] bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-lg shadow-blue-600/20">
      <p class="text-sm leading-relaxed">${u(t.content)}</p>
    </div>
  `:`
    <div class="max-w-[85%] flex gap-3">
      <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-800 rounded-lg flex items-center justify-center shrink-0 shadow-md">
        <i data-lucide="sparkles" class="w-4 h-4 text-white"></i>
      </div>
      <div class="glass border border-blue-500/15 rounded-2xl rounded-tl-sm px-4 py-3">
        <div class="msg-content text-sm text-gray-200 leading-relaxed">${w(t.content)}</div>
        ${n}
      </div>
    </div>
  `,a.appendChild(s),window.lucide&&lucide.createIcons(),v()}function $(){const t=document.getElementById("messages-container"),e=document.createElement("div");e.id="typing-indicator",e.className="flex justify-start fade-in",e.innerHTML=`
    <div class="flex gap-3">
      <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-800 rounded-lg flex items-center justify-center shrink-0 shadow-md">
        <i data-lucide="sparkles" class="w-4 h-4 text-white"></i>
      </div>
      <div class="glass border border-blue-500/15 rounded-2xl rounded-tl-sm px-4 py-4 flex items-center gap-1.5">
        <span class="typing-dot w-2 h-2 bg-blue-400 rounded-full"></span>
        <span class="typing-dot w-2 h-2 bg-blue-400 rounded-full"></span>
        <span class="typing-dot w-2 h-2 bg-blue-400 rounded-full"></span>
      </div>
    </div>
  `,t.appendChild(e),window.lucide&&lucide.createIcons(),v()}function h(){document.getElementById("typing-indicator")?.remove()}function v(){const t=document.getElementById("chat-messages");t.scrollTop=t.scrollHeight}async function g(){const{data:t}=await x.auth.getSession();return{Authorization:`Bearer ${t.session?.access_token||y}`,"Content-Type":"application/json"}}window.sendMessage=async()=>{const t=document.getElementById("chat-input"),e=t.value.trim();if(!e||r.sending)return;t.value="",t.style.height="auto",r.sending=!0,document.getElementById("send-btn").disabled=!0;const a={role:"user",content:e};r.history.push(a),c(a),$();try{const o=await g(),s=await fetch(m,{method:"POST",headers:o,body:JSON.stringify({action:"chat",message:e,developer_mode:r.developerMode,history:r.history.slice(-20,-1).map(d=>({role:d.role,content:d.content}))})}),n=await s.json();if(h(),!s.ok||n.error){const d={role:"assistant",content:`⚠️ **Error:** ${n.error||"Request failed"}${n.provider?`

*Provider: ${n.provider}*`:""}`};r.history.push(d),c(d)}else{const d={role:"assistant",content:n.response,tool_results:n.tool_results};if(r.history.push(d),c(d),r.developerMode&&n.tool_results){const i=n.tool_results.filter(p=>p.result&&p.result.pending_approval);i.length>0&&A(i)}if(n.approval_executed){const i={role:"assistant",content:`✅ **Approved action executed:** ${n.approval_executed.action_type}

${n.approval_executed.result.message||n.approval_executed.result.error||"Done."}`};r.history.push(i),c(i)}}}catch(o){h();const s={role:"assistant",content:`⚠️ **Connection error:** ${o.message}`};r.history.push(s),c(s)}finally{r.sending=!1,document.getElementById("send-btn").disabled=!1,document.getElementById("chat-input").focus()}};window.quickAction=t=>{document.getElementById("chat-input").value=t,sendMessage()};window.clearHistory=async()=>{try{const t=await g();await fetch(m,{method:"POST",headers:t,body:JSON.stringify({action:"clear_history"})}),r.history=[],document.getElementById("messages-container").innerHTML="",b(),l("Chat history cleared.")}catch{l("Failed to clear history.")}};function b(){const t={role:"assistant",content:r.developerMode?`Hello! I'm your **Developer Agent** — a full software engineering assistant for the KCO Global project.

I can do everything the Marketplace AI does, PLUS:

- **Read any file** — "Show me the code in src/auth.js"
- **Search the codebase** — "Find where checkout is handled"
- **Find bugs** — "Why is the payment page throwing an error?"
- **Explain the architecture** — "How does the Flutter app connect to the backend?"
- **Edit code** — "Fix the bug in the checkout flow" (I'll ask your approval first)
- **Run commands** — "Run flutter pub get" (I'll ask your approval first)
- **Create files** — "Create a new component for the product gallery" (with approval)

I still have all marketplace tools too — products, orders, analytics, inventory, etc.

What would you like to work on?`:`Hello! I'm your Admin & Developer AI, powered by Google Gemini.

I can help you manage your marketplace and develop your project:

**Marketplace Management:**
- Add, edit, and delete products
- View and manage orders
- Check analytics and revenue
- Manage customers
- View and resolve customer escalations
- Update AI settings
- Trigger deployments

**Developer Mode (toggle above):**
- Read and analyze your entire codebase
- Create, edit, and delete files (with your approval)
- Run commands like npm build or flutter pub get (with your approval)
- Check git status and diffs
- Install packages
- Debug and fix bugs
- Build new features

What would you like to do?`};c(t)}async function I(){const t=document.getElementById("access-denied");t.classList.remove("hidden"),t.innerHTML=`
    <div class="glass border border-amber-500/20 rounded-2xl p-8 max-w-md w-full text-center slide-up">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-2xl mb-4">
        <i data-lucide="user-cog" class="w-8 h-8 text-amber-400"></i>
      </div>
      <h2 class="text-xl font-bold text-white mb-2">Become Admin</h2>
      <p class="text-sm text-gray-400 mb-6">No administrator has been set up yet. You can promote your account to admin to access the Admin & Developer AI.</p>
      <button onclick="bootstrapAdmin()" id="bootstrap-btn" class="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-3 px-6 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-amber-600/30">
        <i data-lucide="shield" class="w-4 h-4"></i> Become Admin
      </button>
    </div>
  `,window.lucide&&lucide.createIcons()}window.bootstrapAdmin=async()=>{const t=document.getElementById("bootstrap-btn");if(t){t.disabled=!0,t.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Promoting...',window.lucide&&lucide.createIcons();try{const{data:e}=await x.auth.getSession(),a=await fetch(m,{method:"POST",headers:{Authorization:`Bearer ${e.session?.access_token||y}`,"Content-Type":"application/json"},body:JSON.stringify({action:"bootstrap_admin"})}),o=await a.json();a.ok&&o.success?(l("You are now an admin!"),setTimeout(()=>window.location.reload(),1e3)):(l(o.error||"Failed to become admin"),t.disabled=!1,t.innerHTML='<i data-lucide="shield" class="w-4 h-4"></i> Become Admin',window.lucide&&lucide.createIcons())}catch(e){l("Error: "+e.message),t.disabled=!1,t.innerHTML='<i data-lucide="shield" class="w-4 h-4"></i> Become Admin',window.lucide&&lucide.createIcons()}}};async function k(){const{data:t}=await x.auth.getSession();if(r.user=t?.session?.user||null,!r.user){const n=window.location.pathname+window.location.search;window.location.href=`/auth.html?redirect=${encodeURIComponent(n)}`;return}const{data:e}=await x.rpc("is_current_user_admin");if(!e){const{data:n}=await x.rpc("has_any_admin");n?(document.getElementById("access-denied").classList.remove("hidden"),document.getElementById("access-denied-msg").textContent="You are signed in, but this account does not have administrator privileges."):I(),window.lucide&&lucide.createIcons();return}r.isAdmin=!0;const a=document.getElementById("provider-badge"),o=document.getElementById("provider-name");a&&o&&(a.classList.remove("hidden"),a.className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full",o.textContent="Google Gemini");try{const n=await g(),i=await(await fetch(m,{method:"POST",headers:n,body:JSON.stringify({action:"history"})})).json();i.history&&i.history.length>0?(r.history=i.history.map(p=>({role:p.role,content:p.content,tool_results:p.metadata?.tool_results})),r.history.forEach(p=>c(p,!1))):b()}catch{b()}try{const n=await g(),i=await(await fetch(m,{method:"POST",headers:n,body:JSON.stringify({action:"list_pending_approvals"})})).json();if(i.approvals&&i.approvals.length>0){const p={role:"assistant",content:`You have ${i.approvals.length} pending developer action(s) awaiting approval. Check the approval cards above.`};c(p);for(const f of i.approvals)E(f)}}catch{}M();const s=document.getElementById("chat-input");s.addEventListener("keydown",n=>{n.key==="Enter"&&!n.shiftKey&&(n.preventDefault(),sendMessage())}),s.addEventListener("input",()=>{s.style.height="auto",s.style.height=Math.min(s.scrollHeight,128)+"px"}),s.focus()}window.toggleDevMode=()=>{r.developerMode=!r.developerMode;const t=document.getElementById("dev-mode-indicator"),e=document.getElementById("dev-mode-toggle");r.developerMode?(t.classList.remove("bg-gray-600"),t.classList.add("bg-emerald-400"),e.classList.add("ring-2","ring-emerald-500/50"),l("Developer Mode enabled — AI can now read and modify code, run commands, and act as a software engineering assistant.")):(t.classList.add("bg-gray-600"),t.classList.remove("bg-emerald-400"),e.classList.remove("ring-2","ring-emerald-500/50"),l("Developer Mode disabled — AI is back to marketplace-only mode."))};function A(t){const e=document.getElementById("messages-container");for(const a of t){const o=document.createElement("div");o.className="flex justify-center mb-4";const s={file_create:"Create File",file_edit:"Edit File",file_delete:"Delete File",file_rename:"Rename File",run_command:"Run Command"}[a.result.action_type]||a.result.action_type;let n="";if(a.args.path&&(n+=`<div class="mt-2 text-xs text-gray-400">File: <code class="text-blue-300">${a.args.path}</code></div>`),a.args.old_path&&a.args.new_path&&(n+=`<div class="mt-1 text-xs text-gray-400">Rename: <code class="text-blue-300">${a.args.old_path}</code> → <code class="text-blue-300">${a.args.new_path}</code></div>`),a.args.command&&(n+=`<div class="mt-2 text-xs text-gray-400">Command: <code class="text-amber-300 font-mono">${a.args.command}</code></div>`),a.args.content){const d=a.args.content.length>300?a.args.content.slice(0,300)+"...":a.args.content;n+=`<div class="mt-2 text-xs text-gray-400">Content preview:</div><pre class="mt-1 text-xs bg-black/40 rounded-lg p-2 text-gray-300 overflow-x-auto max-h-32">${d.replace(/</g,"&lt;")}</pre>`}a.args.old_string&&(n+=`<div class="mt-2 text-xs text-gray-400">Replace:</div><pre class="mt-1 text-xs bg-red-950/40 rounded-lg p-2 text-red-300 overflow-x-auto max-h-24">${a.args.old_string.slice(0,200).replace(/</g,"&lt;")}</pre>`,n+=`<div class="mt-1 text-xs text-gray-400">With:</div><pre class="mt-1 text-xs bg-green-950/40 rounded-lg p-2 text-green-300 overflow-x-auto max-h-24">${a.args.new_string.slice(0,200).replace(/</g,"&lt;")}</pre>`),o.innerHTML=`
      <div class="glass border border-amber-500/30 rounded-2xl p-4 max-w-lg w-full slide-up">
        <div class="flex items-center gap-2 mb-2">
          <i data-lucide="shield-alert" class="w-5 h-5 text-amber-400"></i>
          <span class="font-bold text-amber-300 text-sm">Approval Required: ${s}</span>
        </div>
        ${n}
        <div class="mt-3 flex gap-2">
          <button onclick="approveDevAction('${a.result.approval_id}')" class="btn-press flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs px-4 py-2 rounded-lg transition hover:bg-emerald-500/30">
            <i data-lucide="check" class="w-4 h-4"></i> Approve & Execute
          </button>
          <button onclick="rejectDevAction('${a.result.approval_id}')" class="btn-press flex items-center gap-1.5 bg-red-500/20 border border-red-500/40 text-red-300 font-bold text-xs px-4 py-2 rounded-lg transition hover:bg-red-500/30">
            <i data-lucide="x" class="w-4 h-4"></i> Reject
          </button>
        </div>
      </div>
    `,e.appendChild(o),window.lucide&&lucide.createIcons(),e.scrollTop=e.scrollHeight}}window.approveDevAction=async t=>{try{const e=await g(),o=await(await fetch(m,{method:"POST",headers:e,body:JSON.stringify({action:"approve_dev_action",approval_id:t})})).json();if(o.success){l("Action approved and executed successfully.");const s={role:"assistant",content:`✅ **Action executed:** ${o.result.message||o.result.error||"Done."}`};r.history.push(s),c(s)}else{l(o.error||o.result?.error||"Execution failed.");const s={role:"assistant",content:`❌ **Execution failed:** ${o.result?.error||o.error||"Unknown error"}`};r.history.push(s),c(s)}}catch(e){l("Error: "+e.message)}};window.rejectDevAction=async t=>{try{const e=await g();await fetch(m,{method:"POST",headers:e,body:JSON.stringify({action:"reject_dev_action",approval_id:t})}),l("Action rejected.");const a={role:"assistant",content:"🚫 Action rejected by admin."};r.history.push(a),c(a)}catch(e){l("Error: "+e.message)}};function E(t){const e=document.getElementById("messages-container"),a=document.createElement("div");a.className="flex justify-center mb-4";const o={file_create:"Create File",file_edit:"Edit File",file_delete:"Delete File",file_rename:"Rename File",run_command:"Run Command"}[t.action_type]||t.action_type;let s="";if(t.file_path&&(s+=`<div class="mt-2 text-xs text-gray-400">File: <code class="text-blue-300">${t.file_path}</code></div>`),t.new_path&&(s+=`<div class="mt-1 text-xs text-gray-400">Rename to: <code class="text-blue-300">${t.new_path}</code></div>`),t.command&&(s+=`<div class="mt-2 text-xs text-gray-400">Command: <code class="text-amber-300 font-mono">${t.command}</code></div>`),t.content&&t.action_type==="file_create"){const n=t.content.length>300?t.content.slice(0,300)+"...":t.content;s+=`<div class="mt-2 text-xs text-gray-400">Content preview:</div><pre class="mt-1 text-xs bg-black/40 rounded-lg p-2 text-gray-300 overflow-x-auto max-h-32">${n.replace(/</g,"&lt;")}</pre>`}a.innerHTML=`
    <div class="glass border border-amber-500/30 rounded-2xl p-4 max-w-lg w-full slide-up">
      <div class="flex items-center gap-2 mb-2">
        <i data-lucide="shield-alert" class="w-5 h-5 text-amber-400"></i>
        <span class="font-bold text-amber-300 text-sm">Pending: ${o}</span>
      </div>
      ${s}
      <div class="mt-3 flex gap-2">
        <button onclick="approveDevAction('${t.id}')" class="btn-press flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs px-4 py-2 rounded-lg transition hover:bg-emerald-500/30">
          <i data-lucide="check" class="w-4 h-4"></i> Approve & Execute
        </button>
        <button onclick="rejectDevAction('${t.id}')" class="btn-press flex items-center gap-1.5 bg-red-500/20 border border-red-500/40 text-red-300 font-bold text-xs px-4 py-2 rounded-lg transition hover:bg-red-500/30">
          <i data-lucide="x" class="w-4 h-4"></i> Reject
        </button>
      </div>
    </div>
  `,e.appendChild(a),window.lucide&&lucide.createIcons(),e.scrollTop=e.scrollHeight}async function M(){try{const t=await g(),a=await(await fetch(m,{method:"POST",headers:t,body:JSON.stringify({action:"get_usage_stats",days:7})})).json();if(a.stats){const o=a.stats,s=document.getElementById("usage-stats");s&&(s.innerHTML=`
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div class="glass rounded-xl p-3 border border-blue-500/15">
              <p class="text-xs text-gray-500 uppercase">Requests (7d)</p>
              <p class="text-lg font-bold text-white">${o.total_requests}</p>
            </div>
            <div class="glass rounded-xl p-3 border border-blue-500/15">
              <p class="text-xs text-gray-500 uppercase">Tokens Used</p>
              <p class="text-lg font-bold text-white">${o.total_tokens.toLocaleString()}</p>
            </div>
            <div class="glass rounded-xl p-3 border border-blue-500/15">
              <p class="text-xs text-gray-500 uppercase">Est. Cost</p>
              <p class="text-lg font-bold text-white">${o.total_cost}</p>
            </div>
            <div class="glass rounded-xl p-3 border border-blue-500/15">
              <p class="text-xs text-gray-500 uppercase">Success Rate</p>
              <p class="text-lg font-bold text-emerald-400">${o.success_rate}%</p>
            </div>
          </div>
        `)}}catch{}}k();
