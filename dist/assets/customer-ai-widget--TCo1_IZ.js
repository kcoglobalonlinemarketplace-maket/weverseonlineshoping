import{supabase as C}from"./supabase-client-7_ZWSEp6.js";import{b as $,c as L,e as _}from"./localization-Dp_e1Lz7.js";const W="https://wttnvwpoqmbxryivcerf.supabase.co".replace(/\/$/,""),j=`${W}/functions/v1/ai-customer-assistant`,q="sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa",U=window.self!==window.top||/\/admin(\-ai)?\.html$/i.test(window.location.pathname);let n={open:!1,history:[],sending:!1,voiceEnabled:localStorage.getItem("kco_voice")==="1",voiceAccent:localStorage.getItem("kco_voice_accent")||"US",welcomed:!1,proactiveShown:{},sessionId:null,attachments:[],recording:!1,mediaRecorder:null,mediaChunks:[],recordTimer:null,recordSeconds:0};function A(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function V(t){let e=A(t);return e=e.replace(/`([^`]+)`/g,"<code>$1</code>"),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/^\- (.+)$/gm,"<li>$1</li>"),e=e.replace(/^\d+\. (.+)$/gm,"<li>$1</li>"),e=e.replace(/(<li>.*<\/li>\n?)+/g,a=>`<ul>${a}</ul>`),e=e.replace(/\n\n/g,"</p><p>"),e=e.replace(/\n/g,"<br>"),e=`<p>${e}</p>`,e=e.replace(/<ul><br>/g,"<ul>").replace(/<br><\/ul>/g,"</ul>"),e}function g(){return $()||localStorage.getItem("kco_language")||"en"}function H(){const t=window.location.pathname;return t.includes("checkout")?"checkout":t.includes("payment")?"payment":t.includes("auth")?"sign-in":t.includes("account")?"account":t.includes("details")?"product-details":t.includes("contact")?"contact":t.includes("help")?"help":t.includes("about")?"about":"home"}function N(){try{return JSON.parse(localStorage.getItem("kco_cart")||"[]").map(e=>({title:e.title||e.name,price:e.price,quantity:e.quantity||1}))}catch{return[]}}function y(t){if(n.voiceEnabled&&"speechSynthesis"in window)try{window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance(t.replace(/[*#`]/g,"")),a=g(),o=L(a);a==="en"?e.lang=n.voiceAccent==="UK"?"en-GB":"en-US":e.lang=o.lang,e.rate=o.rate,e.pitch=o.pitch;const i=_(a==="en"?(n.voiceAccent==="UK"?"en-GB":"en-US").slice(0,2):a);i&&(e.voice=i),window.speechSynthesis.speak(e)}catch{}}function T(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}function P(){if(document.getElementById("kco-ai-styles"))return;const t=document.createElement("style");t.id="kco-ai-styles",t.textContent=`
    @keyframes kcoAiSlideUp { from { opacity:0; transform:translateY(20px) scale(0.97); } to { opacity:1; transform:translateY(0) scale(1); } }
    @keyframes kcoAiFadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes kcoAiTyping { 0%,60%,100% { opacity:0.3; transform:translateY(0); } 30% { opacity:1; transform:translateY(-4px); } }
    @keyframes kcoOnlinePulse { 0% { box-shadow:0 0 0 0 rgba(34,197,94,0.5); } 70% { box-shadow:0 0 0 6px rgba(34,197,94,0); } 100% { box-shadow:0 0 0 0 rgba(34,197,94,0); } }
    @keyframes kcoRecPulse { 0%,100% { box-shadow:0 0 0 0 rgba(239,68,68,0.55); } 50% { box-shadow:0 0 0 8px rgba(239,68,68,0); } }
    .kco-ai-msg-in { animation: kcoAiSlideUp 0.3s ease; }
    .kco-ai-fade { animation: kcoAiFadeIn 0.3s ease; }
    .kco-ai-typing-dot { animation: kcoAiTyping 1.2s infinite; }
    .kco-ai-typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .kco-ai-typing-dot:nth-child(3) { animation-delay: 0.4s; }
    #kco-ai-panel { transition: opacity 0.3s ease, transform 0.3s ease; }
    #kco-ai-panel.hidden-panel { opacity:0; transform:translateY(24px) scale(0.97); pointer-events:none; }
    .kco-ai-quick-btn { transition: all 0.2s ease; }
    .kco-ai-quick-btn:hover { transform: translateY(-1px); }
    .kco-ai-send-btn:disabled { opacity:0.5; }
    .kco-online-dot { animation: kcoOnlinePulse 2s infinite; }
    .kco-rec-pulse { animation: kcoRecPulse 1.2s infinite; }
    .kco-attach-chip { transition: all .2s ease; }
    .kco-attach-chip:hover { border-color: rgba(249,115,22,.5); }
    #kco-ai-input::-webkit-scrollbar{display:none}
    #kco-ai-input{-ms-overflow-style:none;scrollbar-width:none}
  `,document.head.appendChild(t)}const k='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C7.58 2 4 5.58 4 10v4a3 3 0 0 0 3 3h1v-6H6v-1a6 6 0 0 1 12 0v1h-2v6h1a3 3 0 0 0 3-3v-4c0-4.42-3.58-8-8-8z" fill="#60a5fa"/><path d="M12 2C7.58 2 4 5.58 4 10v4a3 3 0 0 0 3 3h1v-6H6v-1a6 6 0 0 1 12 0v1h-2v6h1a3 3 0 0 0 3-3v-4c0-4.42-3.58-8-8-8z" stroke="#3b82f6" stroke-width="0.5"/></svg>',D='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="#60a5fa"/><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="#3b82f6" stroke-width="0.5"/></svg>',F='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a1 1 0 0 0-1.39 1.21L4 12l-1.99 7.19a1 1 0 0 0 1.39 1.21z" fill="white"/></svg>',E='<svg viewBox="0 0 24 24" class="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 inline-block align-middle" aria-label="Verified" role="img"><circle cx="12" cy="12" r="11" fill="#3b82f6"/><path d="M10.8 15.6 7.4 12.2l1.5-1.5 1.9 1.9 3.9-3.9 1.5 1.5-5.4 5.4z" fill="#fff"/></svg>';function J(){P();const t=document.createElement("button");t.id="kco-ai-fab",t.setAttribute("aria-label","Contact us"),t.className="fixed bottom-5 right-5 z-[60] flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-2xl shadow-2xl transition-transform hover:scale-105 active:scale-95",t.style.background="linear-gradient(135deg,#1e1e2e 0%,#1a1a2e 50%,#16213e 100%)",t.style.border="1px solid rgba(59,130,246,0.35)",t.style.boxShadow="0 8px 24px rgba(59,130,246,0.25)",t.innerHTML=`
    <span class="relative shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style="background:rgba(59,130,246,0.15)">
      ${D}
    </span>
    <span class="text-left">
      <span class="text-sm font-bold text-white leading-tight tracking-wide flex items-center gap-1 whitespace-nowrap">Contact us ${E}</span>
      <span class="text-[10px] leading-tight flex items-center gap-1.5 mt-0.5">
        <span class="w-2 h-2 bg-emerald-400 rounded-full inline-block kco-online-dot"></span>
        <span class="text-emerald-400 font-medium">Online</span>
      </span>
    </span>
  `,t.onclick=()=>d(!0),document.body.appendChild(t);const e=document.createElement("div");e.id="kco-ai-panel",e.className="hidden-panel fixed z-[60] flex flex-col overflow-hidden w-full sm:w-[400px] h-[92dvh] sm:h-[640px] sm:max-h-[calc(100dvh-120px)] bottom-0 sm:bottom-[90px] right-0 sm:right-5 rounded-t-2xl sm:rounded-2xl bg-slate-900/97 border-t sm:border border-blue-500/25 shadow-2xl",e.style.backdropFilter="blur(20px)",e.innerHTML=`
    <!-- Header — messaging app style -->
    <div class="flex items-center justify-between px-3.5 py-3 border-b border-white/10 shrink-0" style="background:linear-gradient(135deg,#1e1e2e 0%,#1a1a2e 50%,#16213e 100%)">
      <div class="flex items-center gap-2.5 min-w-0">
        <div class="relative w-9 h-9 rounded-full flex items-center justify-center shrink-0" style="background:rgba(59,130,246,0.15)">
          ${k}
        </div>
        <div class="min-w-0">
          <p class="text-sm font-bold text-white leading-tight tracking-wide flex items-center gap-1 truncate">Contact us ${E}</p>
          <p class="text-[10px] leading-tight flex items-center gap-1.5 mt-0.5">
            <span class="w-2 h-2 bg-emerald-400 rounded-full inline-block kco-online-dot"></span>
            <span class="text-emerald-400 font-medium">Online</span>
          </p>
        </div>
      </div>
      <div class="flex items-center gap-0.5 shrink-0">
        <button id="kco-ai-voice-toggle" class="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-blue-100 transition" title="Toggle voice replies" aria-label="Toggle voice">
          <i data-lucide="volume-2" class="w-4 h-4"></i>
        </button>
        <button id="kco-ai-voice-accent" class="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-blue-100 transition text-[10px] font-bold" title="Switch voice accent" aria-label="Switch voice accent">
          ${n.voiceAccent}
        </button>
        <button id="kco-ai-clear" class="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-blue-100 transition" title="Clear conversation" aria-label="Clear conversation">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
        <button id="kco-ai-minimize" class="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-blue-100 transition" title="Minimize" aria-label="Minimize">
          <i data-lucide="minus" class="w-4 h-4"></i>
        </button>
        <button id="kco-ai-close" class="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-blue-100 transition" title="Close" aria-label="Close">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>
    </div>

    <!-- Recording banner -->
    <div id="kco-ai-recording" class="hidden shrink-0 flex items-center justify-center gap-2 px-4 py-1.5 bg-red-500/10 border-b border-red-500/20">
      <span class="w-2.5 h-2.5 rounded-full bg-red-500 kco-rec-pulse"></span>
      <span class="text-[11px] font-semibold text-red-300">Recording voice note...</span>
      <span id="kco-ai-rec-timer" class="text-[11px] font-mono text-red-200">0:00</span>
      <button id="kco-ai-rec-cancel" class="ml-1 text-[10px] font-bold uppercase tracking-wide text-gray-400 hover:text-white transition">Cancel</button>
    </div>

    <!-- Messages -->
    <div id="kco-ai-messages" class="flex-1 overflow-y-auto px-3.5 py-3 space-y-3 scroll-smooth"></div>

    <!-- Quick actions -->
    <div id="kco-ai-quick" class="px-3 pb-2 flex gap-2 overflow-x-auto scrollbar-none shrink-0">
      <button class="kco-ai-quick-btn shrink-0 text-[11px] px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20" data-q="Help me find a product">Find products</button>
      <button class="kco-ai-quick-btn shrink-0 text-[11px] px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20" data-q="How do I track my order?">Track order</button>
      <button class="kco-ai-quick-btn shrink-0 text-[11px] px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20" data-q="What payment methods are available?">Payments</button>
      <button class="kco-ai-quick-btn shrink-0 text-[11px] px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20" data-q="Explain shipping and delivery">Shipping</button>
      <button class="kco-ai-quick-btn shrink-0 text-[11px] px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20" data-q="How do returns and refunds work?">Returns</button>
    </div>

    <!-- Attachment previews -->
    <div id="kco-ai-attachments" class="hidden px-3 pb-2 flex gap-2 overflow-x-auto scrollbar-none shrink-0"></div>

    <!-- Input — messaging app style -->
    <div class="px-3 py-2.5 border-t border-blue-500/10 bg-slate-900/95 shrink-0">
      <div class="flex items-end gap-1.5">
        <button id="kco-ai-attach" class="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-300 hover:bg-white/5 transition shrink-0" title="Attach image" aria-label="Attach image">
          <i data-lucide="image-plus" class="w-5 h-5"></i>
        </button>
        <button id="kco-ai-mic" class="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-rose-300 hover:bg-rose-500/10 transition shrink-0" title="Record voice note" aria-label="Record voice note">
          <i data-lucide="mic" class="w-5 h-5"></i>
        </button>
        <input type="file" id="kco-ai-file" accept="image/*" class="hidden">
        <textarea id="kco-ai-input" rows="1" placeholder="Type a message..." class="flex-1 bg-slate-800/80 text-sm text-gray-200 placeholder-gray-500 rounded-2xl px-4 py-2.5 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500/40 border border-blue-500/15 max-h-24"></textarea>
        <button id="kco-ai-send" class="kco-ai-send-btn w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 hover:scale-110 transition-transform" style="background:linear-gradient(135deg,#3b82f6 0%,#2563eb 100%);box-shadow:0 2px 8px rgba(59,130,246,0.3)" aria-label="Send message">
          ${F}
        </button>
      </div>
      <p class="text-[10px] text-gray-600 mt-1.5 text-center">Contact us anytime · We respond to every message.</p>
    </div>
  `,document.body.appendChild(e),document.getElementById("kco-ai-close").onclick=()=>d(!1),document.getElementById("kco-ai-minimize").onclick=()=>d(!1),document.getElementById("kco-ai-clear").onclick=te,document.getElementById("kco-ai-voice-toggle").onclick=G,document.getElementById("kco-ai-voice-accent").onclick=Y,document.getElementById("kco-ai-send").onclick=p,document.getElementById("kco-ai-attach").onclick=()=>document.getElementById("kco-ai-file").click(),document.getElementById("kco-ai-file").onchange=X,document.getElementById("kco-ai-mic").onclick=Q,document.getElementById("kco-ai-rec-cancel").onclick=ee;const a=document.getElementById("kco-ai-input");a.addEventListener("keydown",o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),p())}),a.addEventListener("input",()=>{a.style.height="auto",a.style.height=Math.min(a.scrollHeight,96)+"px"}),document.querySelectorAll(".kco-ai-quick-btn").forEach(o=>{o.onclick=()=>{a.value=o.dataset.q,p()}}),z(),window.lucide&&lucide.createIcons()}function d(t){const e=document.getElementById("kco-ai-panel"),a=document.getElementById("kco-ai-fab");n.open=t!==void 0?t:e.classList.contains("hidden-panel"),n.open?(e.classList.remove("hidden-panel"),a.style.display="none",window.innerWidth<640&&(document.body.style.overflow="hidden"),n.welcomed||(O(),n.welcomed=!0),setTimeout(()=>document.getElementById("kco-ai-input")?.focus(),300)):(e.classList.add("hidden-panel"),a.style.display="flex",T(),b(),document.body.style.overflow="")}function G(){n.voiceEnabled=!n.voiceEnabled,localStorage.setItem("kco_voice",n.voiceEnabled?"1":"0"),n.voiceEnabled||T(),z(),n.voiceEnabled&&y("Voice assistance is now on.")}function Y(){n.voiceAccent=n.voiceAccent==="US"?"UK":"US",localStorage.setItem("kco_voice_accent",n.voiceAccent);const t=document.getElementById("kco-ai-voice-accent");t&&(t.textContent=n.voiceAccent);const e=n.voiceAccent==="UK"?"Voice accent switched to British English.":"Voice accent switched to American English.";y(e)}function z(){const t=document.getElementById("kco-ai-voice-toggle");if(!t)return;const e=n.voiceEnabled?"volume-2":"volume-x";t.title=n.voiceEnabled?"Voice is ON — click to mute":"Voice is OFF — click to enable",t.innerHTML=`<i data-lucide="${e}" class="w-4 h-4"></i>`,window.lucide&&lucide.createIcons()}function w(t){const e=Math.floor(t/60),a=String(Math.floor(t%60)).padStart(2,"0");return`${e}:${a}`}function f(){const t=document.getElementById("kco-ai-attachments");t&&(t.innerHTML=n.attachments.map((e,a)=>e.type==="image"?`<div class="kco-attach-chip relative shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-blue-500/30 bg-slate-800">
        <img src="${e.dataUrl}" class="w-full h-full object-cover" alt="Attachment">
        <button data-rm="${a}" class="absolute top-0.5 right-0.5 w-5 h-5 rounded-full bg-black/70 text-white text-[10px] flex items-center justify-center hover:bg-red-600 transition" aria-label="Remove image">✕</button>
      </div>`:`<div class="kco-attach-chip relative shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg border border-rose-500/30 bg-rose-500/10">
      <i data-lucide="mic" class="w-4 h-4 text-rose-300"></i>
      <span class="text-xs font-semibold text-rose-200 whitespace-nowrap">${w(e.duration)}</span>
      <button data-rm="${a}" class="w-5 h-5 rounded-full bg-black/50 text-white text-[10px] flex items-center justify-center hover:bg-red-600 transition" aria-label="Remove voice note">✕</button>
    </div>`).join(""),t.classList.toggle("hidden",n.attachments.length===0),window.lucide&&lucide.createIcons(),t.querySelectorAll("[data-rm]").forEach(e=>{e.onclick=()=>{n.attachments.splice(Number(e.dataset.rm),1),f()}}))}function M(t){if(n.attachments.length>=4){h("You can attach up to 4 items per message.");return}n.attachments.push(t),f()}function K(t,e=900,a=.72){return new Promise(o=>{const i=new FileReader;i.onload=()=>{const s=new Image;s.onload=()=>{const m=Math.min(1,e/Math.max(s.width,s.height)),r=document.createElement("canvas");r.width=Math.max(1,Math.round(s.width*m)),r.height=Math.max(1,Math.round(s.height*m)),r.getContext("2d").drawImage(s,0,0,r.width,r.height),o(r.toDataURL("image/jpeg",a))},s.onerror=()=>o(i.result),s.src=i.result},i.onerror=()=>o(null),i.readAsDataURL(t)})}function X(t){const e=t.target.files&&t.target.files[0];if(t.target.value="",!!e){if(!/^image\//.test(e.type)){h("Please choose an image file.");return}K(e).then(a=>{a&&M({type:"image",dataUrl:a,name:e.name})})}}function x(t){const e=document.getElementById("kco-ai-mic"),a=document.getElementById("kco-ai-recording");e&&(e.innerHTML=`<i data-lucide="${t?"square":"mic"}" class="w-5 h-5 ${t?"text-rose-400":""}"></i>`,e.title=t?"Stop recording":"Record voice note",e.style.color=t?"#fb7185":"",e.style.background=t?"rgba(244,63,94,0.15)":"",a&&a.classList.toggle("hidden",!t),window.lucide&&lucide.createIcons())}function Q(){if(n.recording){b();return}Z()}async function Z(){if(!navigator.mediaDevices||!window.MediaRecorder){h("Voice notes are not supported on this browser.");return}try{const t=await navigator.mediaDevices.getUserMedia({audio:!0});n.mediaChunks=[],n.recordSeconds=0;const e=MediaRecorder.isTypeSupported("audio/webm;codecs=opus")?"audio/webm;codecs=opus":"audio/webm";n.mediaRecorder=new MediaRecorder(t,e?{mimeType:e}:void 0),n.mediaRecorder.ondataavailable=o=>{o.data.size>0&&n.mediaChunks.push(o.data)},n.mediaRecorder.onstop=()=>{const o=new Blob(n.mediaChunks,{type:n.mediaRecorder.mimeType||"audio/webm"});t.getTracks().forEach(s=>s.stop());const i=new FileReader;i.onloadend=()=>M({type:"audio",dataUrl:i.result,duration:n.recordSeconds}),i.readAsDataURL(o)},n.recording=!0,x(!0);const a=document.getElementById("kco-ai-rec-timer");n.recordTimer=setInterval(()=>{if(n.recordSeconds+=1,n.recordSeconds>=60){b();return}a&&(a.textContent=w(n.recordSeconds))},1e3)}catch{h("Microphone access was denied.")}}function b(){if(!(!n.recording||!n.mediaRecorder)){try{n.mediaRecorder.stop()}catch{}clearInterval(n.recordTimer),n.recordTimer=null,n.recording=!1,x(!1)}}function ee(){if(clearInterval(n.recordTimer),n.recordTimer=null,n.mediaChunks=[],n.mediaRecorder&&n.mediaRecorder.state!=="inactive"){try{n.mediaRecorder.onstop=null,n.mediaRecorder.stop()}catch{}n.mediaRecorder.stream&&n.mediaRecorder.stream.getTracks().forEach(t=>t.stop())}n.recording=!1,n.mediaRecorder=null,x(!1)}function te(){const t=document.getElementById("kco-ai-messages");t&&(t.innerHTML=""),n.history=[],n.attachments=[],f(),b(),O(),ne("Conversation cleared")}function ne(t){const e=document.createElement("div");e.className="fixed top-16 left-1/2 -translate-x-1/2 z-[70] bg-gray-900 border border-blue-500/30 text-white text-xs font-medium px-4 py-2 rounded-full shadow-xl kco-ai-fade",e.textContent=t,document.body.appendChild(e),setTimeout(()=>e.remove(),2e3)}function h(t){const e=document.getElementById("kco-ai-input");e&&(e.placeholder=t,setTimeout(()=>{e.placeholder===t&&(e.placeholder="Type a message...")},2600))}function ae(t){return(t||[]).map(e=>e.type==="image"?`<img src="${e.dataUrl}" class="mt-2 w-full max-h-56 rounded-xl object-cover border border-white/10" alt="Shared image">`:e.type==="audio"?`<div class="mt-2 flex items-center gap-2">
        <span class="w-8 h-8 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center shrink-0"><i data-lucide="mic" class="w-4 h-4 text-rose-300"></i></span>
        <audio controls preload="metadata" src="${e.dataUrl}" class="h-9 w-44 max-w-full"></audio>
        <span class="text-[10px] text-rose-200/80 font-mono">${w(e.duration)}</span>
      </div>`:"").join("")}function u(t,e=!0){const a=document.getElementById("kco-ai-messages");if(!a)return;const o=t.role==="user",i=document.createElement("div");i.className=`flex ${o?"justify-end":"justify-start"} ${e?"kco-ai-msg-in":""}`,i.innerHTML=o?`
    <div class="max-w-[80%] text-white rounded-2xl rounded-tr-sm px-3.5 py-2.5 shadow-lg" style="background:linear-gradient(135deg,#3b82f6 0%,#2563eb 100%);box-shadow:0 2px 8px rgba(59,130,246,0.25)">
      <p class="text-sm leading-relaxed whitespace-pre-wrap break-words">${A(t.content)}</p>
      ${ae(t.attachments)}
    </div>
  `:`
    <div class="max-w-[88%] flex gap-2">
      <div class="w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-md mt-0.5" style="background:rgba(59,130,246,0.15)">
        ${k}
      </div>
      <div class="bg-slate-800/80 border border-white/10 rounded-2xl rounded-tl-sm px-3.5 py-2.5">
        <div class="text-sm text-gray-200 leading-relaxed">${V(t.content)}</div>
      </div>
    </div>
  `,a.appendChild(i),window.lucide&&lucide.createIcons(),R(),o||y(t.content)}function O(){const t=g(),e={en:`Welcome to Weverse Online Shop!

I'm here to help you with products, orders, payments, shipping, returns, and any questions you may have. You can also send photos or voice notes.

How can I help you today?`,es:`¡Bienvenido a Weverse Online Shop!

Estoy aquí para ayudarte con productos, pedidos, pagos, envíos, devoluciones y cualquier pregunta que tengas. También puedes enviarme fotos o notas de voz.

¿Cómo puedo ayudarte hoy?`,fr:`Bienvenue sur Weverse Online Shop !

Je suis là pour vous aider avec les produits, les commandes, les paiements, la livraison, les retours et toute question que vous pourriez avoir. Vous pouvez aussi m'envoyer des photos ou des notes vocales.

Comment puis-je vous aider aujourd'hui ?`,de:`Willkommen bei Weverse Online Shop!

Ich bin hier, um Ihnen bei Produkten, Bestellungen, Zahlungen, Versand, Rücksendungen und allen Fragen zu helfen. Sie können mir auch Fotos oder Sprachnotizen senden.

Wie kann ich Ihnen heute helfen?`,ar:`مرحباً بك في Weverse Online Shop!

أنا هنا لمساعدتك في المنتجات والطلبات والمدفوعات والشحن والإرجاع وأي أسئلة قد تكون لديك. يمكنك أيضاً إرسال الصور أو الملاحظات الصوتية.

كيف يمكنني مساعدتك اليوم؟`,pt:`Bem-vindo à Weverse Online Shop!

Estou aqui para ajudar com produtos, pedidos, pagamentos, envios, devoluções e qualquer pergunta que você tenha. Você também pode enviar fotos ou notas de voz.

Como posso ajudar você hoje?`,ja:`Weverse Online Shopへようこそ！

商品、ご注文、お支払い、配送、返品などについてご質問があればお手伝いします。写真や音声メモも送れます。

本日はいかがいたしましたか？`,zh:`欢迎来到 Weverse Online Shop！

我在这里帮助您解决产品、订单、付款、运输、退货以及您可能有的任何问题。您也可以发送照片或语音留言。

今天我能为您做些什么？`,hi:`Weverse Online Shop में आपका स्वागत है!

मैं आपको उत्पादों, ऑर्डर, भुगतान, शिपिंग, रिटर्न और आपके किसी भी प्रश्न में मदद करने के लिए यहाँ हूँ। आप फोटो या वॉइस नोट भी भेज सकते हैं।

आज मैं आपकी कैसे मदद कर सकता हूँ?`,ru:`Добро пожаловать в Weverse Online Shop!

Я здесь, чтобы помочь вам с товарами, заказами, оплатой, доставкой, возвратами и любыми вопросами. Вы также можете отправлять фотографии или голосовые сообщения.

Чем я могу помочь вам сегодня?`,it:`Benvenuto su Weverse Online Shop!

Sono qui per aiutarti con prodotti, ordini, pagamenti, spedizioni, resi e qualsiasi domanda tu possa avere. Puoi anche inviarmi foto o note vocali.

Come posso aiutarti oggi?`,nl:`Welkom bij Weverse Online Shop!

Ik ben hier om je te helpen met producten, bestellingen, betalingen, verzending, retouren en eventuele vragen. Je kunt ook foto's of spraaknotities sturen.

Hoe kan ik je vandaag helpen?`,tr:`Weverse Online Shop'e hoş geldiniz!

Ürünler, siparişler, ödemeler, kargo, iadeler ve herhangi bir sorunuzda size yardımcı olmak için buradayım. Fotoğraf veya sesli not da gönderebilirsiniz.

Bugün size nasıl yardımcı olabilirim?`,ko:`Weverse Online Shop에 오신 것을 환영합니다!

상품, 주문, 결제, 배송, 반품 및 궁금한 점을 도와드릴 수 있습니다. 사진이나 음성 메모도 보낼 수 있어요.

오늘 어떻게 도와드릴까요?`,id:`Selamat datang di Weverse Online Shop!

Saya di sini untuk membantu Anda dengan produk, pesanan, pembayaran, pengiriman, pengembalian, dan pertanyaan apa pun. Anda juga dapat mengirim foto atau catatan suara.

Bagaimana saya bisa membantu Anda hari ini?`,vi:`Chào mừng đến với Weverse Online Shop!

Tôi ở đây để giúp bạn với các sản phẩm, đơn hàng, thanh toán, vận chuyển, đổi trả và bất kỳ câu hỏi nào. Bạn cũng có thể gửi ảnh hoặc ghi âm.

Tôi có thể giúp gì cho bạn hôm nay?`,th:`ยินดีต้อนรับสู่ Weverse Online Shop!

ฉันพร้อมช่วยคุณเรื่องสินค้า คำสั่งซื้อ การชำระเงิน การจัดส่ง การคืนสินค้า และคำถามใดๆ คุณสามารถส่งรูปภาพหรือข้อความเสียงได้

วันนี้ฉันช่วยอะไรได้บ้าง?`,pl:`Witamy w Weverse Online Shop!

Jestem tutaj, aby pomóc Ci z produktami, zamówieniami, płatnościami, wysyłką, zwrotami i wszelkimi pytaniami. Możesz też wysyłać zdjęcia lub notatki głosowe.

Jak mogę Ci dzisiaj pomóc?`,uk:`Ласкаво просимо до Weverse Online Shop!

Я тут, щоб допомогти вам з товарами, замовленнями, оплатою, доставкою, поверненнями та будь-якими питаннями. Ви також можете надсилати фото або голосові повідомлення.

Чим я можу допомогти вам сьогодні?`,sv:`Välkommen till Weverse Online Shop!

Jag är här för att hjälpa dig med produkter, beställningar, betalningar, frakt, returer och frågor du kan ha. Du kan också skicka bilder eller röstmeddelanden.

Hur kan jag hjälpa dig idag?`,el:`Καλώς ήρθατε στο Weverse Online Shop!

Είμαι εδώ για να σας βοηθήσω με προϊόντα, παραγγελίες, πληρωμές, αποστολές, επιστροφές και οποιεσδήποτε ερωτήσεις. Μπορείτε επίσης να στείλετε φωτογραφίες ή φωνητικά μηνύματα.

Πώς μπορώ να σας βοηθήσω σήμερα;`,he:`ברוכים הבאים ל-Weverse Online Shop!

אני כאן כדי לעזור לך עם מוצרים, הזמנות, תשלומים, משלוחים, החזרות וכל שאלה שיש לך. ניתן גם לשלוח תמונות או הודעות קוליות.

איך אוכל לעזור לך היום?`,sw:`Karibu kwenye Weverse Online Shop!

Niko hapa kukusaidia na bidhaa, maagizo, malipo, usafirishaji, marejesho na maswali yoyote. Unaweza pia kutuma picha au ujumbe wa sauti.

Naweza kukusaidia vipi leo?`};u({role:"assistant",content:e[t]||e.en})}function oe(){const t=document.getElementById("kco-ai-messages");if(!t)return;const e=document.createElement("div");e.id="kco-ai-typing",e.className="flex justify-start kco-ai-fade",e.innerHTML=`
    <div class="flex gap-2">
      <div class="w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-md mt-0.5" style="background:rgba(59,130,246,0.15)">
        ${k}
      </div>
      <div class="bg-slate-800/80 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3.5 flex items-center gap-1.5">
        <span class="kco-ai-typing-dot w-2 h-2 rounded-full" style="background:#3b82f6"></span>
        <span class="kco-ai-typing-dot w-2 h-2 rounded-full" style="background:#3b82f6"></span>
        <span class="kco-ai-typing-dot w-2 h-2 rounded-full" style="background:#3b82f6"></span>
      </div>
    </div>`,t.appendChild(e),window.lucide&&lucide.createIcons(),R()}function R(){const t=document.getElementById("kco-ai-messages");t&&(t.scrollTop=t.scrollHeight)}async function ie(){const{data:t}=await C.auth.getSession();return{Authorization:`Bearer ${t.session?.access_token||q}`,"Content-Type":"application/json"}}async function p(){const t=document.getElementById("kco-ai-input");if(!t)return;const e=t.value.trim(),a=n.attachments.slice();if(!e&&a.length===0||n.sending)return;t.value="",t.style.height="auto",n.attachments=[],f(),n.sending=!0,document.getElementById("kco-ai-send").disabled=!0;const o=a.some(c=>c.type==="image"),i=a.some(c=>c.type==="audio"),s=[o&&"[Image attached]",i&&"[Voice note attached]"].filter(Boolean).join(" "),m=s?`${e?e+" ":""}${s}`.trim():e,r={role:"user",content:m,attachments:a};n.history.push(r),u(r),oe();try{const c=await ie(),S=await(await fetch(j,{method:"POST",headers:c,body:JSON.stringify({action:"chat",message:m,history:n.history.slice(-20,-1).map(l=>({role:l.role,content:l.content})),language:g(),page_context:H(),cart_items:N(),attachments:a.map(l=>({type:l.type,dataUrl:l.dataUrl,duration:l.duration||0}))})})).json();document.getElementById("kco-ai-typing")?.remove();const I={role:"assistant",content:S.response||S.error||"I'm sorry, I didn't catch that. Could you rephrase?"};n.history.push(I),u(I)}catch{document.getElementById("kco-ai-typing")?.remove();const v={role:"assistant",content:"I'm having trouble connecting right now. Please try again in a moment."};n.history.push(v),u(v)}finally{n.sending=!1,document.getElementById("kco-ai-send").disabled=!1,document.getElementById("kco-ai-input")?.focus()}}window.__kcoAiOpen=()=>d(!0);async function B(){if(!U){J();try{const{data:t}=await C.auth.getSession();if(t?.session?.access_token){const a=await(await fetch(j,{method:"POST",headers:{Authorization:`Bearer ${t.session.access_token}`,"Content-Type":"application/json"},body:JSON.stringify({action:"get_history"})})).json();if(a.history&&a.history.length>0){n.history=a.history.map(i=>({role:i.role,content:i.content}));const o=n.history.slice(-6);for(const i of o)u(i,!1)}}}catch{}window.addEventListener("kco-language-changed",()=>{if(n.open){const t=g(),e={en:"Language changed. I'll respond in your selected language from now on.",es:"Idioma cambiado. Responderé en tu idioma seleccionado.",fr:"Langue changée. Je répondrai dans votre langue sélectionnée.",de:"Sprache geändert. Ich werde in Ihrer gewählten Sprache antworten.",ar:"تم تغيير اللغة. سأرد بلغتك المختارة من الآن.",zh:"语言已更改。我将使用您选择的语言回复。",ja:"言語が変更されました。選択した言語で応答します。",hi:"भाषा बदल दी गई है। मैं अब से आपकी चुनी हुई भाषा में जवाब दूंगा।",ru:"Язык изменен. Я буду отвечать на выбранном вами языке."},a={role:"assistant",content:e[t]||e.en};u(a)}})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",B):B();window.kcoCustomerAI={open:()=>d(!0),close:()=>d(!1),send:t=>{const e=document.getElementById("kco-ai-input");e&&(e.value=t,p())}};
