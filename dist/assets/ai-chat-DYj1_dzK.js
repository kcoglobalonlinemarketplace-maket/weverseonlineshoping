import{x as S,A as _}from"./supabase-client-BphhZcpj.js";const A=(S||"https://wttnvwpoqmbxryivcerf.supabase.co").replace(/\/$/,""),C=`${A}/functions/v1/customer-ai-chat`,x="kco_ai_chat_msgs",L=["Where can I track my order?","How long does shipping take?","How do refunds work?","Talk to a human"];let s={open:!1,busy:!1,inited:!1};function y(){try{const e=JSON.parse(localStorage.getItem(x)||"[]");if(Array.isArray(e))return e.filter(t=>t&&t.role&&t.content).slice(-20)}catch{}return[]}function h(e){try{localStorage.setItem(x,JSON.stringify(e.slice(-20)))}catch{}}function M(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function O(e){return M(e).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^[-•]\s+/gm,'<span class="kco-ai-bullet">•</span> ').replace(/\n/g,"<br>")}function f(e,t=20){const n={message:'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',send:'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',close:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',headset:'<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Z"/><path d="M21 11h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5Z"/><path d="M3 11v-1a9 9 0 0 1 18 0v1"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/>'};return`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${n[e]||n.message}</svg>`}function N(){if(document.getElementById("kco-ai-chat-style"))return;const e=document.createElement("style");e.id="kco-ai-chat-style",e.textContent=`
    #kco-ai-btn{position:fixed;right:1.1rem;bottom:1.1rem;z-index:95;width:56px;height:56px;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;background:linear-gradient(135deg,#3b82f6,#2563eb);box-shadow:0 10px 30px rgba(37,99,235,.45);transition:transform .18s ease,box-shadow .18s ease;-webkit-tap-highlight-color:transparent}
    #kco-ai-btn:hover{transform:scale(1.06);box-shadow:0 14px 38px rgba(37,99,235,.55)}
    #kco-ai-btn:active{transform:scale(.94)}
    #kco-ai-btn::before{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid rgba(59,130,246,.5);animation:kco-ai-ping 2s cubic-bezier(0,0,.2,1) infinite}
    @keyframes kco-ai-ping{0%{transform:scale(1);opacity:.7}70%,100%{transform:scale(1.65);opacity:0}}
    #kco-ai-panel{position:fixed;right:1.1rem;bottom:5.4rem;z-index:96;width:380px;max-width:calc(100vw - 1.6rem);height:560px;max-height:calc(100dvh - 7rem);display:flex;flex-direction:column;background:#fff;border:1px solid #e5e7eb;border-radius:1.25rem;box-shadow:0 24px 70px rgba(15,23,42,.28);overflow:hidden;opacity:0;transform:translateY(14px) scale(.97);pointer-events:none;transition:opacity .22s ease,transform .22s ease}
    #kco-ai-panel.kco-ai-open{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}
    .kco-ai-head{display:flex;align-items:center;gap:.75rem;padding:.9rem 1rem;color:#fff;background:linear-gradient(135deg,#2563eb,#3b82f6)}
    .kco-ai-avatar{width:38px;height:38px;flex-shrink:0;border-radius:50%;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.3);display:flex;align-items:center;justify-content:center}
    .kco-ai-title{font-size:14px;font-weight:800;line-height:1.1}
    .kco-ai-status{display:flex;align-items:center;gap:.35rem;font-size:11px;opacity:.92;margin-top:2px}
    .kco-ai-dot{width:7px;height:7px;border-radius:50%;background:#34d399;box-shadow:0 0 0 3px rgba(52,211,153,.25)}
    .kco-ai-close{margin-left:auto;width:30px;height:30px;flex-shrink:0;border:none;border-radius:9px;background:rgba(255,255,255,.15);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .15s}
    .kco-ai-close:hover{background:rgba(255,255,255,.3)}
    .kco-ai-body{flex:1;min-height:0;overflow-y:auto;padding:1rem;display:flex;flex-direction:column;gap:.6rem;background:#f8fafc;scroll-behavior:smooth}
    .kco-ai-msg{max-width:82%;padding:.55rem .8rem;border-radius:1rem;font-size:13px;line-height:1.5;word-break:break-word}
    .kco-ai-msg b{font-weight:700}
    .kco-ai-bullet{color:#3b82f6;margin-right:.25rem}
    .kco-ai-user{align-self:flex-end;color:#fff;background:linear-gradient(135deg,#3b82f6,#2563eb);border-bottom-right-radius:.25rem}
    .kco-ai-assistant{align-self:flex-start;color:#1e293b;background:#fff;border:1px solid #e2e8f0;border-bottom-left-radius:.25rem;box-shadow:0 1px 3px rgba(15,23,42,.06)}
    .kco-ai-typing{align-self:flex-start;display:inline-flex;align-items:center;gap:4px;padding:.7rem .9rem;border-radius:1rem;border-bottom-left-radius:.25rem;background:#fff;border:1px solid #e2e8f0}
    .kco-ai-typing span{width:6px;height:6px;border-radius:50%;background:#94a3b8;animation:kco-ai-bounce 1.2s infinite}
    .kco-ai-typing span:nth-child(2){animation-delay:.15s}
    .kco-ai-typing span:nth-child(3){animation-delay:.3s}
    @keyframes kco-ai-bounce{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-4px);opacity:1}}
    .kco-ai-chips{display:flex;flex-wrap:wrap;gap:.45rem;padding:.6rem 1rem .7rem;background:#f8fafc;border-top:1px solid #eef2f7}
    .kco-ai-chip{border:1px solid #dbe3f0;background:#fff;color:#2563eb;font-size:11.5px;font-weight:600;padding:.4rem .7rem;border-radius:999px;cursor:pointer;transition:all .15s}
    .kco-ai-chip:hover{background:#eff6ff;border-color:#93c5fd}
    .kco-ai-inputrow{display:flex;gap:.5rem;padding:.7rem .9rem .9rem;background:#fff;border-top:1px solid #eef2f7}
    .kco-ai-input{flex:1;min-width:0;border:1px solid #e2e8f0;border-radius:.9rem;padding:.6rem .8rem;font-size:13px;color:#1e293b;background:#fff;outline:none;transition:border-color .15s}
    .kco-ai-input:focus{border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.14)}
    .kco-ai-send{flex-shrink:0;width:40px;height:40px;border:none;border-radius:.9rem;color:#fff;background:linear-gradient(135deg,#3b82f6,#2563eb);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:opacity .15s,transform .15s}
    .kco-ai-send:hover{transform:scale(1.05)}
    .kco-ai-send:disabled{opacity:.5;cursor:not-allowed;transform:none}
    .kco-ai-foot{font-size:10px;color:#94a3b8;text-align:center;padding:.4rem 1rem .55rem;background:#fff;border-top:1px solid #f1f5f9}
    @media (max-width:480px){#kco-ai-panel{height:calc(100dvh - 7rem);bottom:5.2rem}}
  `,document.head.appendChild(e)}function T(){const e=document.createElement("button");e.id="kco-ai-btn",e.setAttribute("aria-label","Open chat"),e.innerHTML=f("message",24),e.addEventListener("click",()=>w());const t=document.createElement("div");t.id="kco-ai-panel",t.setAttribute("role","dialog"),t.setAttribute("aria-label","Weverse Online Shop assistant chat"),t.innerHTML=`
    <div class="kco-ai-head">
      <div class="kco-ai-avatar">${f("headset",20)}</div>
      <div>
        <div class="kco-ai-title">Weverse Online Shop</div>
        <div class="kco-ai-status"><span class="kco-ai-dot"></span> Online — replies instantly</div>
      </div>
      <button class="kco-ai-close" aria-label="Close chat">${f("close",16)}</button>
    </div>
    <div class="kco-ai-body"></div>
    <div class="kco-ai-chips"></div>
    <div class="kco-ai-inputrow">
      <input class="kco-ai-input" type="text" placeholder="Ask about products, orders, shipping…" maxlength="600" aria-label="Message">
      <button class="kco-ai-send" aria-label="Send message">${f("send",18)}</button>
    </div>
    <div class="kco-ai-foot">For urgent help, email support@weverseonlineshop.com</div>
  `;const n=t.querySelector(".kco-ai-body"),o=t.querySelector(".kco-ai-chips"),c=t.querySelector(".kco-ai-input"),d=t.querySelector(".kco-ai-send"),u=t.querySelector(".kco-ai-close");L.forEach(a=>{const r=document.createElement("button");r.className="kco-ai-chip",r.type="button",r.textContent=a,r.addEventListener("click",()=>{b(a),o.remove()}),o.appendChild(r)});const p=()=>{const a=c.value.trim();!a||s.busy||(c.value="",b(a))};return d.addEventListener("click",p),c.addEventListener("keydown",a=>{a.key==="Enter"&&p()}),u.addEventListener("click",m),document.body.appendChild(e),document.body.appendChild(t),{panel:t,body:n,input:c,sendBtn:d}}let i=null;function g(e){const t=document.createElement("div");return t.className="kco-ai-msg kco-ai-assistant",t.innerHTML=O(e),t}function H(){const e=document.createElement("div");return e.className="kco-ai-typing",e.innerHTML="<span></span><span></span><span></span>",e}function l(e){e.scrollTop=e.scrollHeight}function z(e){const t=y();for(const n of t){const o=document.createElement("div");o.className=n.role==="user"?"kco-ai-msg kco-ai-user":"kco-ai-msg kco-ai-assistant",o.textContent=n.content,e.appendChild(o)}l(e)}async function b(e){if(!i||s.busy)return;const{body:t,input:n}=i,o=y(),c=document.createElement("div");c.className="kco-ai-msg kco-ai-user",c.textContent=e,t.appendChild(c),l(t),o.push({role:"user",content:e}),h(o),s.busy=!0;const d=H();t.appendChild(d),l(t);const u=o.slice(0,-1).slice(-10);try{const a=await(await fetch(C,{method:"POST",headers:{Authorization:`Bearer ${_}`,"Content-Type":"application/json"},body:JSON.stringify({message:e,history:u})})).json(),r=String(a?.response||"").trim();if(!r)throw new Error(a?.error||"Empty reply");d.remove();const E=g(r);t.appendChild(E),l(t),o.push({role:"assistant",content:r}),h(o)}catch{d.remove();const a=g("I'm sorry — I couldn't reach the assistant just now. Please try again in a moment, or email support@weverseonlineshop.com and we'll reply within 24 hours.");t.appendChild(a),l(t)}s.busy=!1,n&&n.focus()}function v(){i&&(i.panel.classList.add("kco-ai-open"),s.open=!0,i.input&&setTimeout(()=>i.input.focus(),250))}function m(){i&&(i.panel.classList.remove("kco-ai-open"),s.open=!1)}function w(){s.open?m():v()}function $(){if(window.__KCO_ADMIN_PAGE__)return!0;const e=window.location.pathname||"";return/\/admin(-[a-z0-9]+)?(\.html)?$/.test(e)}function k(){s.inited||$()||(s.inited=!0,N(),i=T(),z(i.body),window.__kcoAiOpen=v,window.__kcoAiClose=m,window.__kcoAiToggle=w)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",k):k();
