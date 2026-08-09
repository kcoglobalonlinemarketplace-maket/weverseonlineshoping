import{f as d,C as E,L as I,A as C,h as z,i as B,j as S,k as T,l as M,m as N,o as j,n as $}from"./localization-BnqLMu3X.js";let u=!1;function A(){if(document.getElementById("kco-loc-styles"))return;const e=document.createElement("style");e.id="kco-loc-styles",e.textContent=`
    @keyframes kcoLocPulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
    @keyframes kcoLocSlideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
    @keyframes kcoLocFadeIn { from { opacity:0; } to { opacity:1; } }
    .kco-loc-fab { animation: kcoLocFadeIn 0.4s ease; }
    .kco-loc-modal { animation: kcoLocSlideUp 0.3s ease; }
    .kco-loc-overlay { animation: kcoLocFadeIn 0.2s ease; }
    .kco-loc-dot { animation: kcoLocPulse 2s ease-in-out infinite; }
    .kco-loc-search:focus { border-color: rgba(59,130,246,0.5); box-shadow: 0 0 0 2px rgba(59,130,246,0.15); }
    .kco-loc-list::-webkit-scrollbar { width: 6px; }
    .kco-loc-list::-webkit-scrollbar-track { background: transparent; }
    .kco-loc-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }
    .kco-loc-list::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.25); }
    .kco-loc-item:hover { background: rgba(59,130,246,0.1); }
    .kco-loc-tab { transition: all 0.2s ease; }
    .kco-loc-tab.active { background: rgba(59,130,246,0.15); border-color: rgba(59,130,246,0.4); color: #60a5fa; }
  `,document.head.appendChild(e)}function D(){if(document.getElementById("kco-loc-fab"))return;const e=document.createElement("button");e.id="kco-loc-fab",e.className="kco-loc-fab fixed bottom-5 left-5 z-[55] flex items-center gap-2 px-3 py-2.5 rounded-xl text-white text-xs font-semibold shadow-lg transition-all hover:scale-105",e.style.background="#1e293b",e.style.border="1px solid rgba(255,255,255,0.12)",e.setAttribute("aria-label","Change location, language, or currency"),e.innerHTML='<span id="kco-loc-flag" class="text-base leading-none">🇺🇸</span><span id="kco-loc-lang" class="text-[11px] uppercase tracking-wide text-gray-300">EN</span><i data-lucide="chevron-up" class="w-3.5 h-3.5 text-gray-500"></i>',e.onclick=_,document.body.appendChild(e),window.lucide&&lucide.createIcons()}function x(){const e=d(),o=document.getElementById("kco-loc-flag"),a=document.getElementById("kco-loc-lang");o&&(o.textContent=e.flag),a&&(a.textContent=e.language.toUpperCase())}function H(){if(document.getElementById("kco-loc-modal"))return;const e=document.createElement("div");e.id="kco-loc-modal",e.className="kco-loc-overlay fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4",e.style.display="none",e.innerHTML=`
    <div class="kco-loc-modal w-full sm:max-w-md bg-slate-900 border border-blue-500/20 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-3 border-b border-white/10" style="background:linear-gradient(135deg,#1e1e2e 0%,#1a1a2e 50%,#16213e 100%)">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:rgba(59,130,246,0.15)">
            <i data-lucide="globe" class="w-4 h-4 text-blue-400"></i>
          </div>
          <h3 class="text-sm font-bold text-white">Your Location</h3>
        </div>
        <button id="kco-loc-close" class="h-8 px-2 rounded-lg hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition text-[10px] font-bold uppercase tracking-wide" aria-label="Close">
          🔙 Back
        </button>
      </div>

      <!-- VPN notice -->
      <div id="kco-loc-vpn" class="px-4 py-2.5 bg-amber-500/10 border-b border-amber-500/20 hidden">
        <div class="flex items-start gap-2">
          <i data-lucide="shield-alert" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
          <p class="text-[11px] text-amber-200 leading-relaxed">We detected you may be using a VPN or proxy. Your detected location may differ from your actual location. Please confirm or manually select your preferred country, language, timezone, and currency.</p>
        </div>
      </div>

      <!-- Detected location info -->
      <div id="kco-loc-detected" class="px-4 py-3 border-b border-white/10">
        <div class="flex items-center gap-2 text-xs text-gray-400">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-blue-400"></i>
          <span id="kco-loc-detected-text">Detecting your location…</span>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-1.5 px-4 py-3 border-b border-white/10">
        <button class="kco-loc-tab active flex-1 text-[11px] font-semibold py-2 px-2 rounded-lg border border-blue-500/20 text-gray-300 flex items-center justify-center gap-1.5" data-tab="country"><i data-lucide="flag" class="w-3.5 h-3.5"></i>Country</button>
        <button class="kco-loc-tab flex-1 text-[11px] font-semibold py-2 px-2 rounded-lg border border-white/10 text-gray-300 flex items-center justify-center gap-1.5" data-tab="language"><i data-lucide="languages" class="w-3.5 h-3.5"></i>Language</button>
        <button class="kco-loc-tab flex-1 text-[11px] font-semibold py-2 px-2 rounded-lg border border-white/10 text-gray-300 flex items-center justify-center gap-1.5" data-tab="currency"><i data-lucide="dollar-sign" class="w-3.5 h-3.5"></i>Currency</button>
        <button class="kco-loc-tab flex-1 text-[11px] font-semibold py-2 px-2 rounded-lg border border-white/10 text-gray-300 flex items-center justify-center gap-1.5" data-tab="timezone"><i data-lucide="clock" class="w-3.5 h-3.5"></i>Timezone</button>
      </div>

      <!-- Search -->
      <div class="px-4 py-2.5 border-b border-white/10">
        <div class="relative">
          <i data-lucide="search" class="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"></i>
          <input id="kco-loc-search" type="text" placeholder="Search…" class="kco-loc-search w-full bg-slate-800/80 text-sm text-gray-200 placeholder-gray-500 rounded-lg pl-9 pr-3 py-2 border border-white/10 focus:outline-none transition">
        </div>
      </div>

      <!-- List -->
      <div id="kco-loc-list" class="kco-loc-list flex-1 overflow-y-auto px-2 py-2">
      </div>

      <!-- Live clock footer -->
      <div class="px-4 py-2.5 border-t border-white/10 bg-slate-900/80">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="kco-loc-dot w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
            <span id="kco-loc-clock" class="text-[11px] text-gray-400 font-mono"></span>
          </div>
          <span id="kco-loc-tz" class="text-[10px] text-gray-600"></span>
        </div>
      </div>
    </div>
  `,document.body.appendChild(e),window.lucide&&lucide.createIcons(),document.getElementById("kco-loc-close").onclick=y,e.addEventListener("click",a=>{a.target===e&&y()}),document.querySelectorAll(".kco-loc-tab").forEach(a=>{a.onclick=()=>v(a.dataset.tab)});const o=document.getElementById("kco-loc-search");o.addEventListener("input",()=>s(p,o.value))}let p="country";function v(e){p=e,document.querySelectorAll(".kco-loc-tab").forEach(a=>{a.classList.toggle("active",a.dataset.tab===e)});const o=document.getElementById("kco-loc-search");o&&(o.value=""),s(e,""),window.lucide&&lucide.createIcons()}function s(e,o){const a=document.getElementById("kco-loc-list");if(!a)return;const l=d(),n=o.toLowerCase().trim();a.innerHTML="";let i=[];e==="country"?(i=E.map(t=>({id:t.code,label:`${t.flag} ${t.name}`,sub:t.code,active:t.code===l.country})),n&&(i=i.filter(t=>t.label.toLowerCase().includes(n)||t.sub.toLowerCase().includes(n)))):e==="language"?(i=I.map(t=>({id:t.code,label:t.native,sub:t.name,active:t.code===l.language})),n&&(i=i.filter(t=>t.label.toLowerCase().includes(n)||t.sub.toLowerCase().includes(n)))):e==="currency"?(i=C.map(t=>{const c=B(t);return{id:t,label:`${c.symbol||t} ${t}`,sub:c.locale||"",active:t===l.currency}}),n&&(i=i.filter(t=>t.id.toLowerCase().includes(n)||t.label.toLowerCase().includes(n)))):e==="timezone"&&(i=z().map(c=>({id:c,label:c.replace(/_/g," "),sub:"",active:c===l.timezone})),n&&(i=i.filter(c=>c.label.toLowerCase().includes(n)))),i.forEach(t=>{const c=document.createElement("button");c.className=`kco-loc-item w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition ${t.active?"bg-blue-500/15 border border-blue-500/30":"border border-transparent"}`,c.innerHTML=`
      <div class="min-w-0">
        <p class="text-sm text-gray-200 truncate">${t.label}</p>
        ${t.sub?`<p class="text-[10px] text-gray-500 truncate">${t.sub}</p>`:""}
      </div>
      ${t.active?'<i data-lucide="check" class="w-4 h-4 text-blue-400 shrink-0"></i>':""}
    `,c.onclick=()=>P(e,t.id),a.appendChild(c)}),i.length||(a.innerHTML='<p class="text-center text-xs text-gray-500 py-8">No results found</p>'),window.lucide&&lucide.createIcons()}function P(e,o){e==="country"?S(o):e==="language"?T(o):e==="currency"?M(o):e==="timezone"&&N(o),s(e,document.getElementById("kco-loc-search")?.value||""),b()}function b(){const e=d(),o=document.getElementById("kco-loc-detected-text"),a=document.getElementById("kco-loc-vpn"),l=document.getElementById("kco-loc-tz");if(o){let n=[`${e.flag} ${e.countryName}`];e.city&&n.push(e.city),e.region&&n.push(e.region),o.textContent=n.join(" · ")}a&&a.classList.toggle("hidden",!e.isVPN),l&&(l.textContent=e.timezone?.replace(/_/g," ")||"")}let r=null;function F(){const e=document.getElementById("kco-loc-clock");if(!e)return;function o(){const a=d();try{e.textContent=new Intl.DateTimeFormat(a.language,{timeZone:a.timezone,weekday:"short",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}).format(new Date)}catch{e.textContent=new Date().toLocaleString()}}o(),r&&clearInterval(r),r=setInterval(o,1e3)}function U(){r&&(clearInterval(r),r=null)}function _(){H();const e=document.getElementById("kco-loc-modal");e.style.display="flex",u=!0,v("country"),b(),F(),setTimeout(()=>document.getElementById("kco-loc-search")?.focus(),200)}function y(){const e=document.getElementById("kco-loc-modal");e&&(e.style.display="none"),u=!1,U()}function G(){A(),D(),x(),j(()=>{x(),u&&(b(),s(p,document.getElementById("kco-loc-search")?.value||""))})}async function k(){try{await $(),G()}catch(e){console.warn("Localization init failed:",e)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",k):k();const g="kco_live_stream_mode";let m=!1;const O=`
/* ── Live Stream Mode: enlarged, broadcast-friendly ── */
body.kco-live-mode .showroom-card {
  border-width: 2px !important;
  border-radius: 16px !important;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5), 0 0 24px rgba(249,115,22,0.08) !important;
}
body.kco-live-mode .showroom-card:hover {
  border-color: rgba(249,115,22,0.6) !important;
  box-shadow: 0 12px 40px rgba(0,0,0,0.6), 0 0 32px rgba(249,115,22,0.15) !important;
}
body.kco-live-mode .showroom-card img {
  transition: transform 0.4s ease !important;
}
body.kco-live-mode .showroom-card:hover img {
  transform: scale(1.08) !important;
}
/* Larger card titles */
body.kco-live-mode .showroom-card h3 {
  font-size: 15px !important;
  line-height: 1.3 !important;
  margin-bottom: 6px !important;
}
/* Larger prices — most important for live viewers */
body.kco-live-mode .showroom-card .text-orange-500,
body.kco-live-mode .showroom-card [class*="text-orange"] {
  font-size: 20px !important;
  font-weight: 900 !important;
  text-shadow: 0 2px 8px rgba(249,115,22,0.3) !important;
}
/* Larger spec text */
body.kco-live-mode .showroom-card .text-gray-500,
body.kco-live-mode .showroom-card .text-gray-400 {
  font-size: 13px !important;
}
/* Larger status badges */
body.kco-live-mode .showroom-card .absolute.top-1.5 {
  font-size: 11px !important;
  padding: 3px 8px !important;
  border-radius: 8px !important;
}
/* Larger buttons */
body.kco-live-mode .showroom-card button {
  font-size: 13px !important;
  padding: 10px 12px !important;
  border-radius: 10px !important;
  font-weight: 800 !important;
}
body.kco-live-mode .showroom-card button i {
  width: 16px !important;
  height: 16px !important;
}
/* Larger rating stars */
body.kco-live-mode .showroom-card [class*="star"] {
  width: 16px !important;
  height: 16px !important;
}
body.kco-live-mode .showroom-card [class*="text-gray-300"],
body.kco-live-mode .showroom-card [class*="text-gray-600"] {
  font-size: 13px !important;
}

/* ── Section headers: bigger, bolder ── */
body.kco-live-mode .showroom-section h3 {
  font-size: 22px !important;
  font-weight: 900 !important;
  letter-spacing: -0.02em !important;
}
body.kco-live-mode .showroom-section h4 {
  font-size: 16px !important;
  font-weight: 700 !important;
}
body.kco-live-mode .showroom-section .text-gray-500 {
  font-size: 14px !important;
}

/* ── Search bar: bigger, more visible ── */
body.kco-live-mode #smart-search-container input {
  font-size: 16px !important;
  padding: 14px 12px !important;
}
body.kco-live-mode #smart-search-container button {
  font-size: 14px !important;
  padding: 10px 20px !important;
}

/* ── Category pills: larger touch targets ── */
body.kco-live-mode .category-pill,
body.kco-live-mode [class*="category"] button {
  font-size: 14px !important;
  padding: 10px 16px !important;
  border-radius: 12px !important;
}

/* ── Header brand: more prominent ── */
body.kco-live-mode header span.text-\\[13px\\],
body.kco-live-mode header span.text-\\[15px\\],
body.kco-live-mode header span.text-\\[17px\\] {
  font-size: 20px !important;
}

/* ── Footer: larger text ── */
body.kco-live-mode footer {
  font-size: 14px !important;
}
body.kco-live-mode footer a {
  font-size: 13px !important;
}

/* ── Details page: larger product info ── */
body.kco-live-mode .text-2xl,
body.kco-live-mode .text-3xl {
  font-size: 28px !important;
}
body.kco-live-mode .text-xl {
  font-size: 22px !important;
}

/* ── Smooth scroll for broadcast ── */
body.kco-live-mode {
  scroll-behavior: smooth !important;
}
body.kco-live-mode * {
  -webkit-tap-highlight-color: transparent;
}

/* ── LIVE badge overlay ── */
@keyframes kcoLivePulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
@keyframes kcoLiveRing {
  0% { box-shadow: 0 0 0 0 rgba(239,68,68,0.5); }
  70% { box-shadow: 0 0 0 8px rgba(239,68,68,0); }
  100% { box-shadow: 0 0 0 0 rgba(239,68,68,0); }
}
#kco-live-badge {
  animation: kcoLiveRing 2s infinite;
}
#kco-live-badge .kco-live-dot {
  animation: kcoLivePulse 1.5s ease-in-out infinite;
}

/* ── Live mode toggle button ── */
@keyframes kcoLiveBtnGlow {
  0%, 100% { box-shadow: 0 0 12px rgba(239,68,68,0.3); }
  50% { box-shadow: 0 0 20px rgba(239,68,68,0.5); }
}
#kco-live-toggle {
  animation: kcoLiveBtnGlow 3s ease-in-out infinite;
}
#kco-live-toggle.active {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%) !important;
  animation: kcoLiveBtnGlow 1.5s ease-in-out infinite;
}
`;function R(){if(document.getElementById("kco-live-styles"))return;const e=document.createElement("style");e.id="kco-live-styles",e.textContent=O,document.head.appendChild(e)}function q(){if(document.getElementById("kco-live-badge"))return;const e=document.createElement("div");e.id="kco-live-badge",e.className="fixed top-3 right-3 z-[80] hidden items-center gap-2 px-3 py-1.5 rounded-full bg-red-500 text-white text-xs font-black uppercase tracking-wider shadow-lg",e.innerHTML=`
    <span class="kco-live-dot w-2.5 h-2.5 bg-white rounded-full"></span>
    <span>LIVE</span>
  `,document.body.appendChild(e)}function V(){if(document.getElementById("kco-live-toggle"))return;const e=document.createElement("button");e.id="kco-live-toggle",e.className="fixed bottom-5 left-5 z-[55] hidden items-center gap-2 px-3 py-2.5 rounded-xl text-white text-xs font-bold shadow-lg transition-all hover:scale-105",e.style.background="#1e293b",e.style.border="1px solid rgba(239,68,68,0.3)",e.setAttribute("aria-label","Toggle Live Stream Mode"),e.innerHTML=`
    <span class="w-2 h-2 bg-red-500 rounded-full"></span>
    <span>Live Mode</span>
  `,e.onclick=L,document.body.appendChild(e)}function Y(){const e=window.location.pathname;return!(e.includes("admin")||e.includes("auth")||e.includes("privacy")||e.includes("terms")||e.includes("refund")||e.includes("shipping-policy"))}function f(){m=!0,document.body.classList.add("kco-live-mode"),localStorage.setItem(g,"1");const e=document.getElementById("kco-live-badge");e&&(e.style.display="flex");const o=document.getElementById("kco-live-toggle");o&&(o.classList.add("active"),o.querySelector("span:last-child").textContent="Live ON"),window.dispatchEvent(new CustomEvent("kco-live-mode",{detail:{active:!0}}))}function w(){m=!1,document.body.classList.remove("kco-live-mode"),localStorage.setItem(g,"0");const e=document.getElementById("kco-live-badge");e&&(e.style.display="none");const o=document.getElementById("kco-live-toggle");o&&(o.classList.remove("active"),o.querySelector("span:last-child").textContent="Live Mode"),window.dispatchEvent(new CustomEvent("kco-live-mode",{detail:{active:!1}}))}function L(){m?w():f()}function h(){if(R(),q(),V(),Y()){const e=document.getElementById("kco-live-toggle");e&&(e.style.display="flex")}localStorage.getItem(g)==="1"&&f()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h();window.kcoLiveStream={enable:f,disable:w,toggle:L,isActive:()=>m};
