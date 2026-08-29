const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/catalog-hidden-store-BUe_sEAx.js","assets/showroom-data-DP8yT9VT.js"])))=>i.map(i=>d[i]);
import{D as W,l as k,b as L}from"./promo-backgrounds-CHsdWnwQ.js";import{g as x,D as C,l as M}from"./site-content-CTa4c51j.js";import{l as z,g as Q,e as X,c as ee,_ as te,f as D}from"./showroom-data-DP8yT9VT.js";const ae="/verified-badge.svg",O="Weverse Online Shop",re="GLOBAL SHOPPING • WORLDWIDE DELIVERY",ie="/w-logo.svg",ne=(e="weverse-badge w-4 h-4 sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5 shrink-0")=>`<svg viewBox="0 0 24 24" class="${e}" aria-label="Verified" role="img" data-weverse-badge="true"><circle cx="12" cy="12" r="11" fill="#3b82f6"/><path d="M10.8 15.6 7.4 12.2l1.5-1.5 1.9 1.9 3.9-3.9 1.5 1.5-5.4 5.4z" fill="#fff"/></svg>`,Z=(e="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8")=>`  <svg viewBox="0 0 24 24" class="${e}" fill="none" aria-hidden="true"><path d="M3 5l4.5 14L12 8l4.5 11L21 5" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,A="weverse_brand_v1";(function(){if(document.getElementById("wv-brand-blue"))return;const t=document.createElement("style");t.id="wv-brand-blue",t.textContent=".brand-name{background:linear-gradient(135deg,#3b82f6,#2563eb)!important;-webkit-background-clip:text!important;background-clip:text!important;-webkit-text-fill-color:transparent!important;color:#2563eb!important}",(document.head||document.documentElement).appendChild(t)})();const se="weverse_brand_override_v1",oe=5*60*1e3;async function H(){try{const e=JSON.parse(localStorage.getItem(se)||"null");if(e&&typeof e=="object")return e}catch{}try{const e=JSON.parse(localStorage.getItem(A)||"{}");if(e.ts&&Date.now()-e.ts<oe&&e.data)return e.data}catch{}try{const e=await x(),{data:t}=await e.from("site_settings").select("brand_name,brand_slogan,brand_logo,brand_badge,brand_favicon,brand_mobile_logo,brand_header_logo,brand_footer_logo,brand_primary_color,brand_secondary_color,brand_tagline_color1,brand_tagline_color2,brand_font,brand_custom_font,brand_website_url,brand_email,site_name,site_tagline,homepage_banner_image,homepage_banner_alt").limit(1).maybeSingle(),a=t||{};return localStorage.setItem(A,JSON.stringify({ts:Date.now(),data:a})),a}catch{return{}}}function G(e){if(!e)return;const t=e.brand_name||e.site_name||O,a=e.brand_slogan||e.site_tagline||re,r=e.brand_logo||e.brand_header_logo||ie,i=e.brand_badge||ae,o=e.brand_favicon||"",n=e.brand_custom_font||e.brand_font||"",s=e.brand_primary_color||"",u=e.brand_secondary_color||"",m=e.brand_tagline_color1||"",d=e.brand_tagline_color2||"";if(le(e.homepage_banner_image||"",e.homepage_banner_alt||"Homepage header banner"),(m||d)&&(document.querySelectorAll(".brand-tagline-1").forEach(l=>{m&&(l.style.color=m)}),document.querySelectorAll(".brand-tagline-2").forEach(l=>{d&&(l.style.color=d)})),document.title&&!document.title.startsWith(t)&&(document.title=document.title.replace(/^[^|]+\|/,t+" |").replace(/^[^–]+–/,t+" – ")),o){let l=document.querySelector("link[rel~='icon']");l||(l=document.createElement("link"),l.rel="icon",document.head.appendChild(l)),l.href=o}if(s||u||n){const l=n?`'${n}'`:null,f=document.getElementById("brand-css-vars")||(()=>{const y=document.createElement("style");return y.id="brand-css-vars",document.head.appendChild(y),y})();if(f.textContent=`:root {
      ${s?`--brand-primary: ${s};`:""}
      ${u?`--brand-secondary: ${u};`:""}
      ${l?`--brand-font: ${l}, system-ui, sans-serif;`:""}
    }`,n){const y="brand-gf-link";if(!document.getElementById(y)){const b=document.createElement("link");b.id=y,b.rel="stylesheet",b.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(n)}:wght@400;600;700;900&display=swap`,document.head.appendChild(b)}}}document.querySelectorAll("[data-brand]").forEach(l=>{const f=l.dataset.brand;f==="name"&&(l.textContent=t,!l.querySelector("[data-weverse-badge]")&&!l.parentElement?.querySelector("[data-weverse-badge]")&&l.appendChild(Object.assign(document.createElement("span"),{className:"inline-flex items-center ml-1 align-middle",innerHTML:ne("weverse-badge w-4 h-4 sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5 shrink-0")}))),f==="slogan"&&(l.textContent=a),f==="logo"&&(l.src=r,l.alt=t,l.style.display=""),f==="badge"&&(l.src=i,l.alt="Verified",l.style.display=""),f==="tagline"&&(l.textContent=a),f==="footer-logo"&&(e.brand_footer_logo?(l.src=e.brand_footer_logo,l.alt=t):(l.src=r,l.alt=t)),f==="mobile-logo"&&(e.brand_mobile_logo?(l.src=e.brand_mobile_logo,l.alt=t):(l.src=r,l.alt=t))}),document.querySelectorAll('img[data-brand="logo"]').forEach(l=>{const y=l.closest(".text-center")?.querySelector('h1[data-brand="name"]');y&&(y.style.display="none")}),de(t,a,r,i),ce(t,a,r),_()}function le(e,t){const a=document.getElementById("homepage-banner-shell"),r=document.getElementById("homepage-banner-image");if(!(!a||!r)){if(!e){r.removeAttribute("src"),r.alt=t,a.classList.add("hidden");return}r.alt=t,r.onload=()=>_(),r.onerror=()=>{a.classList.add("hidden"),_()},r.src!==e&&(r.src=e),a.classList.remove("hidden")}}function _(){const e=document.getElementById("site-header"),t=document.getElementById("site-categories-nav"),a=document.querySelector("main");if(!e||!t||!a)return;const r=Math.ceil(e.getBoundingClientRect().height||e.offsetHeight||0),i=Math.ceil(t.getBoundingClientRect().height||t.offsetHeight||0);t.style.top=`${r}px`;const o=window.innerWidth<640?20:12;a.style.paddingTop=`${r+i+o}px`}function de(e,t,a,r,i){document.querySelectorAll('header a[href="/"], header a[href="./"], header a[href="index.html"], .brand-link, #brand-link').forEach(n=>{V(n,e,t),n.querySelectorAll('img.brand-logo, img[data-brand="logo"]').forEach(s=>{s.src=a,s.alt=e})}),document.querySelectorAll("header span").forEach(n=>{if(n.classList.contains("brand-tagline-1")||n.classList.contains("brand-tagline-2"))return;const s=n.textContent.trim();(s==="Weverse Online Shop"||s==="KCO Global Online Marketplace"||n.classList.contains("brand-name"))&&(n.textContent=e),(s==="Your Trusted Global Shop"||s.includes("Globally")||s.includes("Worldwide")||n.classList.contains("brand-slogan"))&&(n.textContent=t)}),document.querySelectorAll('[data-brand="badge"], .brand-badge, #brand-badge').forEach(n=>{n.tagName==="IMG"&&(n.src=r,n.alt="Verified",n.style.display="")}),document.querySelectorAll('header a[href="/"] .relative.shrink-0, header a .relative.w-7').forEach(n=>{if(!n.querySelector("img.injected-logo")){const s=document.createElement("img");s.src=a,s.alt=e,s.className="injected-logo w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-lg",s.onerror=()=>s.style.display="none",n.style.display="flex",n.style.alignItems="center",n.innerHTML="",n.appendChild(s)}})}function ce(e,t,a){document.querySelectorAll("footer").forEach(r=>{V(r,e,t),r.querySelectorAll("img.brand-logo, img[data-brand], .footer-logo img").forEach(i=>{i.src=a,i.alt=e})})}function V(e,t,a){const r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),i=[];let o;for(;o=r.nextNode();){const n=o.textContent.trim();(n==="Weverse Online Shop"||n==="KCO Global Online Marketplace")&&i.push({node:o,value:t}),(n==="Your Trusted Global Shop"||n==="Global Shopping • Worldwide Delivery")&&i.push({node:o,value:a})}i.forEach(({node:n,value:s})=>{n.textContent=n.textContent.replace(n.textContent.trim(),s)})}H().then(G);window.addEventListener("load",()=>H().then(G));window.addEventListener("resize",()=>_());window.addEventListener("storage",e=>{e.key===A&&H().then(G)});const E="support@weverseonlineshop.com",ue="weverse_brand_v1";function c(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function J(){try{const e=JSON.parse(localStorage.getItem(ue)||"{}"),t=e.data&&typeof e.data=="object"?e.data:e;if(t&&typeof t=="object"&&(t.brand_name||t.site_name||t.brand_logo))return t}catch{}return{}}function pe(){const e=J(),t=e.brand_name||e.site_name||O;return`
    <section class="relative overflow-hidden bg-slate-950 text-white">
      <!-- built-in design (shown when no admin media is set) -->
      <div class="absolute inset-0" style="background:
        radial-gradient(900px 480px at 82% 12%, rgba(37,99,235,.40), transparent 62%),
        radial-gradient(720px 420px at 8% 92%, rgba(6,182,212,.26), transparent 60%),
        linear-gradient(160deg,#0b1226 0%,#060c1c 55%,#071523 100%)"></div>
      <div class="absolute inset-0 opacity-[.07]" style="background-image:radial-gradient(#7dd3fc 1px, transparent 1px);background-size:24px 24px"></div>
      <!-- admin-chosen background (image or video) -->
      <div class="absolute inset-0" data-bg-slot="trust_promo"></div>

      <div class="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div class="max-w-2xl relative rounded-3xl bg-slate-950/55 border border-white/10 p-6 sm:p-8 md:p-10 backdrop-blur-md shadow-2xl shadow-slate-950/50">
          <span class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300 border border-cyan-400/30 bg-cyan-400/10 rounded-full px-3.5 py-1.5 mb-5">
            <i data-lucide="truck" class="w-3.5 h-3.5"></i> Worldwide Delivery
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.06] tracking-tight text-white">
            Premium shopping, delivered right to your door
          </h2>
          <p class="text-[15px] sm:text-base text-slate-200 mt-4 leading-relaxed max-w-xl">
            Every order is packed with care, tracked in real time, and shipped securely to customers in
            200+ countries worldwide — so shopping with ${c(t)} is always fast, safe and worry-free.
          </p>
          <div class="flex flex-wrap items-center gap-3.5 mt-7">
            <a href="/#showroom-directory" class="inline-flex items-center gap-2 bg-white text-blue-900 font-black text-sm px-6 py-3.5 rounded-2xl shadow-xl shadow-slate-900/40 hover:scale-[1.03] active:scale-[.98] transition">
              Shop Now <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
            <a href="/account.html" class="inline-flex items-center gap-2 border border-white/25 bg-white/10 text-white text-sm font-bold px-6 py-3.5 rounded-2xl backdrop-blur hover:bg-white/15 transition">
              Track My Order <i data-lucide="package-search" class="w-4 h-4"></i>
            </a>
          </div>
          <div class="grid grid-cols-3 gap-2.5 mt-8 max-w-md">
            ${[{icon:"globe",label:"200+ countries",sub:"worldwide"},{icon:"shield-check",label:"Secure payments",sub:"protected"},{icon:"clock",label:"24/7 support",sub:"always here"}].map(a=>`
              <div class="bg-white/[.06] border border-white/10 rounded-2xl px-3 py-3.5 text-center backdrop-blur">
                <i data-lucide="${a.icon}" class="w-5 h-5 text-cyan-300 mx-auto"></i>
                <p class="text-[11px] font-black text-white mt-2">${a.label}</p>
                <p class="text-[9px] text-slate-400">${a.sub}</p>
              </div>`).join("")}
          </div>
        </div>
      </div>
    </section>`}function he(){const e=t=>`
    <div class="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3.5">
      ${t.map(a=>`
        <div class="flex items-start gap-3">
          <div class="shrink-0 w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <i data-lucide="${a.icon}" class="w-5 h-5"></i>
          </div>
          <div class="min-w-0">
            <p class="text-[13px] font-black text-gray-900 leading-tight">${a.title}</p>
            <p class="text-[11px] text-gray-500 mt-0.5">${a.sub}</p>
          </div>
        </div>`).join("")}
    </div>`;return`
    <section class="bg-gray-50 border-y border-gray-200">
      <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-7 sm:py-9">
        <div class="grid grid-cols-2 gap-3 sm:gap-5">
          ${e([{icon:"lock",title:"SSL Secure",sub:"Encrypted"},{icon:"globe",title:"Trusted Worldwide",sub:"200+ countries"},{icon:"package-search",title:"Order Tracking",sub:"Real-time updates"}])}
          ${e([{icon:"shield-check",title:"Secure Checkout",sub:"Protected"},{icon:"key-round",title:"Privacy Protected",sub:"Your data is safe"},{icon:"headphones",title:"24/7 Support",sub:"Always here"}])}
        </div>
      </div>
    </section>`}const j=[{id:"trust-shipping",icon:"package",tone:"blue",title:"Shipping & Delivery",body:`
      <p class="text-sm text-gray-600 leading-relaxed">Every order is packed securely and shipped through trusted, fully-tracked couriers. Delivery times depend on your location:</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span><b>Standard:</b> 5–10 business days</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span><b>Express:</b> 2–4 business days</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span><b>Worldwide:</b> tracked delivery to 200+ countries</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400">You will receive a tracking number the moment your order ships.</p>`},{id:"trust-checkout",icon:"lock",tone:"emerald",title:"Secure Checkout",body:`
      <p class="text-sm text-gray-600 leading-relaxed">Checkout is protected end-to-end with 256-bit SSL encryption. Your payment and personal details are processed securely and never shared with third parties.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>256-bit SSL encrypted connection</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Verified, trusted payment gateways</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>No card details stored on our servers</li>
      </ul>`},{id:"trust-returns",icon:"rotate-ccw",tone:"amber",title:"Returns & Refunds",body:`
      <p class="text-sm text-gray-600 leading-relaxed">Not happy with your order? We make returns simple and fair.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>30-day return window on eligible items</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Refunds processed within 3–7 business days</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Start a return from your account, anytime</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400">See our <a class="text-blue-600 font-semibold hover:underline" href="/refund-policy.html">Refund Policy</a> for full details.</p>`},{id:"trust-payment",icon:"credit-card",tone:"violet",title:"Payment Information",body:`
      <p class="text-sm text-gray-600 leading-relaxed">We accept a wide range of payment methods so everyone can shop with confidence:</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-violet-500"></span>Credit & debit cards (Visa, Mastercard, …)</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-violet-500"></span>Mobile money & bank transfer</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-violet-500"></span>Secure online payment gateways</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400">Available options are shown at checkout for your region.</p>`},{id:"trust-worldwide",icon:"globe",tone:"sky",title:"Worldwide Delivery",body:`
      <p class="text-sm text-gray-600 leading-relaxed">From one local shop to homes around the world — we deliver to 200+ countries and territories through reliable international couriers.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>International tracking on every order</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>Careful customs & import handling</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>Transparent delivery fees at checkout</li>
      </ul>`},{id:"trust-tracking",icon:"package-search",tone:"indigo",title:"Order Tracking",body:`
      <p class="text-sm text-gray-600 leading-relaxed">Follow your order from our shop to your door with real-time updates.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Instant tracking number when your order ships</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Live status in <b>My Account → Orders</b></li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Email & SMS updates at every step</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400"><a class="text-blue-600 font-semibold hover:underline" href="/account.html">Track an order now</a></p>`},{id:"trust-privacy",icon:"shield",tone:"rose",title:"Privacy & Security",body:`
      <p class="text-sm text-gray-600 leading-relaxed">Your privacy matters to us. We protect your personal information with industry-standard security and never sell your data.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Encrypted storage of personal data</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Your data is never sold to third parties</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>You can request deletion at any time</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400">Read our <a class="text-blue-600 font-semibold hover:underline" href="/privacy.html">Privacy Policy</a>.</p>`},{id:"trust-faq",icon:"message-circle-question",tone:"slate",title:"Frequently Asked Questions",body:`
      <div class="space-y-4">
        <div><p class="text-sm font-black text-gray-900">How do I track my order?</p>
          <p class="text-sm text-gray-600 mt-1">Open <b>My Account → Orders</b> and select the order to see live tracking, or follow the link sent to your email.</p></div>
        <div><p class="text-sm font-black text-gray-900">Can I change or cancel an order?</p>
          <p class="text-sm text-gray-600 mt-1">Yes — contact support within 24 hours of ordering and we will do our best to update or cancel it before shipping.</p></div>
        <div><p class="text-sm font-black text-gray-900">How long do refunds take?</p>
          <p class="text-sm text-gray-600 mt-1">Once your return is received, refunds are processed within 3–7 business days to your original payment method.</p></div>
        <div><p class="text-sm font-black text-gray-900">Is my payment information safe?</p>
          <p class="text-sm text-gray-600 mt-1">Absolutely. Checkout runs over a 256-bit SSL encrypted connection and your card details are never stored by us.</p></div>
      </div>`},{id:"trust-support",icon:"headphones",tone:"teal",title:"Customer Support",body:`
      <p class="text-sm text-gray-600 leading-relaxed">Our support team is here for you 24/7, before and after every order.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-teal-500"></span><b>Email:</b> <a class="text-blue-600 hover:underline" href="mailto:support@weverseonlineshop.com">support@weverseonlineshop.com</a></li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-teal-500"></span><b>Chat:</b> the chat bubble in the corner of every page</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-teal-500"></span><b>Help Center:</b> guides & answers at <a class="text-blue-600 hover:underline" href="/help.html">our Help Center</a></li>
      </ul>`},{id:"trust-app",icon:"smartphone",tone:"cyan",title:"Weverse Mobile App",body:`
      <p class="text-sm text-gray-600 leading-relaxed">Take the whole shop with you. Browse products, manage orders, save favorites and enjoy a smooth shopping experience on the go.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Shop products anywhere, anytime</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Track orders & get instant updates</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Exclusive app offers & new arrivals</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400">The Android app is in final review — the download link will appear here the moment it goes live.</p>`}],F={blue:"bg-blue-50 text-blue-600",emerald:"bg-emerald-50 text-emerald-600",amber:"bg-amber-50 text-amber-600",violet:"bg-violet-50 text-violet-600",sky:"bg-sky-50 text-sky-600",indigo:"bg-indigo-50 text-indigo-600",rose:"bg-rose-50 text-rose-600",slate:"bg-slate-100 text-slate-600",teal:"bg-teal-50 text-teal-600",cyan:"bg-cyan-50 text-cyan-600"};function me(e){const t=F[e.tone]||F.blue;return`
    <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      <button type="button" data-acc="${e.id}" aria-expanded="false" class="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left hover:bg-gray-50 transition active:bg-gray-100">
        <span class="flex items-center gap-3 min-w-0">
          <span class="shrink-0 w-10 h-10 rounded-xl ${t} flex items-center justify-center"><i data-lucide="${e.icon}" class="w-5 h-5"></i></span>
          <span class="text-[15px] sm:text-base font-black text-gray-900 tracking-tight">${e.title}</span>
        </span>
        <span data-acc-icon="${e.id}" class="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300">
          <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500"></i>
        </span>
      </button>
      <div data-acc-body="${e.id}" class="trust-acc-body" data-open="0">
        <div class="px-4 sm:px-5 pb-5 pt-1 border-t border-gray-100">${e.body}</div>
      </div>
    </div>`}function fe(){const e=j.slice(0,6),t=j.slice(6),a=r=>r.map(me).join("");return`
    <section class="bg-white">
      <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><i data-lucide="info" class="w-5 h-5"></i></div>
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Shop with confidence</h2>
            <p class="text-xs text-gray-500 mt-0.5">Everything you need to know before you buy — tap any section to expand.</p>
          </div>
        </div>
        <div class="grid lg:grid-cols-2 gap-4">
          ${a(e)}
        </div>
        <div class="mt-4 grid lg:grid-cols-2 gap-4">
          ${a(t)}
        </div>
      </div>
    </section>`}const ye=[{name:"Megan R.",country:"United States",text:"My order arrived ahead of schedule and the quality was exactly as described. I shop here without any doubt.",verified:!0},{name:"Sarah & James",country:"United Kingdom",text:"Ordered for our whole family and the tracking updates made it feel safe and reliable from checkout to delivery.",verified:!0},{name:"Oliver K.",country:"Germany",text:"The customer support team answered my questions in minutes. Genuinely trustworthy shopping experience.",verified:!0}];function ge(e){return[1,2,3,4,5].map(t=>`<i data-lucide="star" class="w-3.5 h-3.5 ${t<=e?"fill-amber-400 text-amber-400":"text-slate-500"}"></i>`).join("")}function $(e){const t=String(e.name||"Verified shopper").trim()||"Verified shopper",a=(t.charAt(0)||"V").toUpperCase(),r=[e.country||"",e.verified?"Verified buyer":"",e.date||""].filter(Boolean).join(" · ");return`
    <div class="bg-white/[.07] border border-white/10 rounded-2xl p-4 backdrop-blur flex flex-col">
      <div class="flex items-center gap-1 mb-2.5">${ge(e.rating||5)}</div>
      <p class="text-[13px] text-slate-200 leading-relaxed flex-1">“${c(e.text)}”</p>
      <div class="flex items-center gap-2.5 mt-3.5">
        <span class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white text-[11px] font-black">${c(a)}</span>
        <div class="min-w-0">
          <p class="text-xs font-black text-white truncate">${c(t)}</p>
          <p class="text-[10px] text-slate-400 truncate">${r}</p>
        </div>
      </div>
    </div>`}const xe=[{name:"Emma W.",country:"United States",text:"Ordered a laptop and it arrived in under a week, perfectly packed. The tracking updates were accurate all the way to my door.",rating:5,verified:!0},{name:"Daniel R.",country:"United States",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Olivia H.",country:"United States",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Liam M.",country:"United States",text:"Had to arrange a return once and it was handled quickly with a full refund. That is how you keep customers happy.",rating:5,verified:!0},{name:"Sophia B.",country:"United States",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Noah T.",country:"United States",text:"Tracking updates at every step made the whole experience worry-free. The product arrived safely and on time.",rating:5,verified:!0},{name:"Isabella G.",country:"United States",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:4,verified:!0},{name:"Lucas P.",country:"United States",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:5,verified:!0},{name:"Mia C.",country:"United States",text:"The package arrived beautifully wrapped and matched the pictures perfectly. I will definitely be ordering again.",rating:5,verified:!0},{name:"Ethan F.",country:"United States",text:"First time shopping here and the whole experience felt premium. Live chat answered me in seconds.",rating:5,verified:!0},{name:"Charlotte D.",country:"Canada",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"James K.",country:"Canada",text:"The checkout process was smooth and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Amelia S.",country:"Canada",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Benjamin L.",country:"Canada",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Evelyn M.",country:"Canada",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Henry W.",country:"Canada",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:4,verified:!0},{name:"Emily R.",country:"United Kingdom",text:"The checkout process was smooth and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Oliver J.",country:"United Kingdom",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Amelia F.",country:"United Kingdom",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"George C.",country:"United Kingdom",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Harry B.",country:"United Kingdom",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Isla N.",country:"United Kingdom",text:"Tracking updates at every step made the whole experience worry-free. The product arrived safely and on time.",rating:5,verified:!0},{name:"Jack T.",country:"United Kingdom",text:"Had to arrange a return once and it was handled quickly with a full refund. That is how you keep customers happy.",rating:4,verified:!0},{name:"Grace P.",country:"United Kingdom",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:5,verified:!0},{name:"Aoife K.",country:"Ireland",text:"Delivery to Ireland was faster than I expected and everything was tracked the whole way.",rating:5,verified:!0},{name:"Sean O.",country:"Ireland",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Ciara M.",country:"Ireland",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Declan W.",country:"Ireland",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:4,verified:!0},{name:"Sophie L.",country:"France",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Louis V.",country:"France",text:"Tracking updates at every step made the whole experience worry-free. The product arrived safely and on time.",rating:5,verified:!0},{name:"Camille R.",country:"France",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:5,verified:!0},{name:"Hugo M.",country:"France",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Lena S.",country:"Germany",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Max B.",country:"Germany",text:"Tracking updates at every step made the whole experience worry-free. The product arrived safely and on time.",rating:5,verified:!0},{name:"Hannah K.",country:"Germany",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:5,verified:!0},{name:"Felix W.",country:"Germany",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Emma D.",country:"Germany",text:"Had to arrange a return once and it was handled quickly with a full refund. That is how you keep customers happy.",rating:4,verified:!0},{name:"Jonas H.",country:"Germany",text:"The package arrived beautifully wrapped and matched the pictures perfectly. I will definitely be ordering again.",rating:5,verified:!0},{name:"Fleur V.",country:"Netherlands",text:"Ordered a laptop and it arrived in under a week, perfectly packed. The tracking updates were accurate all the way to my door.",rating:5,verified:!0},{name:"Daan B.",country:"Netherlands",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Sanne D.",country:"Netherlands",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:4,verified:!0},{name:"Elise M.",country:"Belgium",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Pieter V.",country:"Belgium",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Lotte V.",country:"Belgium",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Anna S.",country:"Switzerland",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"Leon M.",country:"Switzerland",text:"The checkout process was smooth and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Nora K.",country:"Switzerland",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:4,verified:!0},{name:"Lukas H.",country:"Austria",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Julia W.",country:"Austria",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"David S.",country:"Austria",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Giulia R.",country:"Italy",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Matteo B.",country:"Italy",text:"Tracking updates at every step made the whole experience worry-free. The product arrived safely and on time.",rating:5,verified:!0},{name:"Francesca M.",country:"Italy",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:5,verified:!0},{name:"Alessandro F.",country:"Italy",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:4,verified:!0},{name:"Lucia G.",country:"Spain",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Diego S.",country:"Spain",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Martina P.",country:"Spain",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Pablo R.",country:"Spain",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Sofia C.",country:"Portugal",text:"The package arrived beautifully wrapped and matched the pictures perfectly. I will definitely be ordering again.",rating:5,verified:!0},{name:"Tomás A.",country:"Portugal",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Mariana L.",country:"Portugal",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:4,verified:!0},{name:"Ingrid N.",country:"Sweden",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Erik S.",country:"Sweden",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"Maja L.",country:"Sweden",text:"Tracking updates at every step made the whole experience worry-free. The product arrived safely and on time.",rating:5,verified:!0},{name:"Emil H.",country:"Norway",text:"My order arrived ahead of schedule, beautifully packed from Oslo. Could not have asked for a smoother delivery.",rating:5,verified:!0},{name:"Astrid K.",country:"Norway",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Magnus B.",country:"Norway",text:"The customer support team answered my questions in minutes. Genuinely trustworthy shopping experience.",rating:4,verified:!0},{name:"Freja N.",country:"Denmark",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"William P.",country:"Denmark",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:5,verified:!0},{name:"Clara M.",country:"Denmark",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Aino K.",country:"Finland",text:"Delivery to Finland was faster than I expected and everything was tracked the whole way.",rating:5,verified:!0},{name:"Onni V.",country:"Finland",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Riikka S.",country:"Finland",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:4,verified:!0},{name:"Sigrid J.",country:"Iceland",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"Björn L.",country:"Iceland",text:"The package arrived beautifully wrapped and matched the pictures perfectly. I will definitely be ordering again.",rating:5,verified:!0},{name:"Zofia W.",country:"Poland",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Jakub N.",country:"Poland",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Ola S.",country:"Poland",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:4,verified:!0},{name:"Klara V.",country:"Czech Republic",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Tomáš D.",country:"Czech Republic",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Adéla N.",country:"Czech Republic",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:5,verified:!0},{name:"Dimitra K.",country:"Greece",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Nikos P.",country:"Greece",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Eleni S.",country:"Greece",text:"Delivery arrived earlier than expected and the quality matched the pictures perfectly. Five stars from us.",rating:4,verified:!0},{name:"Sarah T.",country:"Australia",text:"Delivery to Australia was faster than I expected and everything was tracked the whole way.",rating:5,verified:!0},{name:"Jack M.",country:"Australia",text:"The checkout process was smooth and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Charlotte B.",country:"Australia",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"William H.",country:"Australia",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Olivia T.",country:"Australia",text:"Had to arrange a return once and it was handled quickly with a full refund. That is how you keep customers happy.",rating:4,verified:!0},{name:"Liam R.",country:"Australia",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Charlotte W.",country:"New Zealand",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"Oliver S.",country:"New Zealand",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Mia H.",country:"New Zealand",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Ethan L.",country:"Singapore",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Nora T.",country:"Singapore",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Ryan C.",country:"Singapore",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:4,verified:!0},{name:"Yuki T.",country:"Japan",text:"Packaging was meticulous and the quality exceeded expectations. The whole experience felt premium.",rating:5,verified:!0},{name:"Haruto S.",country:"Japan",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Aiko M.",country:"Japan",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"Minjun K.",country:"South Korea",text:"Delivery was quick and the package arrived in perfect condition. I will definitely be ordering again.",rating:5,verified:!0},{name:"Seo-yeon P.",country:"South Korea",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Jiwon L.",country:"South Korea",text:"The customer support team answered my questions in minutes. Genuinely trustworthy shopping experience.",rating:4,verified:!0},{name:"Layla A.",country:"United Arab Emirates",text:"Delivery to Dubai was faster than I expected and everything was tracked the whole way.",rating:5,verified:!0},{name:"Omar R.",country:"United Arab Emirates",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Mariam S.",country:"United Arab Emirates",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Khalid A.",country:"Qatar",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Noor H.",country:"Qatar",text:"Delivery arrived earlier than expected and the quality matched the pictures perfectly.",rating:5,verified:!0},{name:"Noam K.",country:"Israel",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Tamar L.",country:"Israel",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:4,verified:!0},{name:"Wei-cheng L.",country:"Taiwan",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Ting-wei C.",country:"Taiwan",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Ka-yan W.",country:"Hong Kong",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"Ho-man C.",country:"Hong Kong",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Harper A.",country:"United States",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Mason T.",country:"United States",text:"The package arrived beautifully wrapped and matched the pictures perfectly. I will definitely be ordering again.",rating:5,verified:!0},{name:"Abigail K.",country:"United States",text:"Ordered a few gifts and every one arrived on time, beautifully packed. Support was friendly and quick to help.",rating:5,verified:!0},{name:"Carter W.",country:"United States",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:4,verified:!0},{name:"Eliana J.",country:"United States",text:"First time ordering and the item matched the description perfectly. Delivery updates were spot on.",rating:5,verified:!0},{name:"Logan B.",country:"United States",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Chase R.",country:"Canada",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"Naomi B.",country:"Canada",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Chloe V.",country:"Canada",text:"The customer support team answered my questions in minutes. Genuinely trustworthy shopping experience.",rating:4,verified:!0},{name:"Rosalind M.",country:"United Kingdom",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Freddie P.",country:"United Kingdom",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Evie C.",country:"United Kingdom",text:"Tracking updates at every step made the whole experience worry-free. The product arrived safely and on time.",rating:5,verified:!0},{name:"Conor M.",country:"Ireland",text:"The checkout process was smooth and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Margaux B.",country:"France",text:"The package arrived beautifully wrapped and matched the pictures perfectly. I will definitely be ordering again.",rating:5,verified:!0},{name:"Tobias F.",country:"Germany",text:"Delivery to Germany was faster than I expected and everything was tracked the whole way.",rating:5,verified:!0},{name:"Lina M.",country:"Germany",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Marco N.",country:"Italy",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Valentina A.",country:"Italy",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Carmen I.",country:"Spain",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Javier G.",country:"Spain",text:"The package arrived beautifully wrapped and matched the pictures perfectly. I will definitely be ordering again.",rating:4,verified:!0},{name:"Inês R.",country:"Portugal",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:5,verified:!0},{name:"Thijs M.",country:"Netherlands",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Lieke V.",country:"Netherlands",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Emiel P.",country:"Belgium",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Lien V.",country:"Belgium",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Sabine G.",country:"Switzerland",text:"Tracked the whole way and it arrived exactly when promised. A very professional shopping experience.",rating:5,verified:!0},{name:"Alexandra H.",country:"Switzerland",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Paul K.",country:"Austria",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"Katharina S.",country:"Austria",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Alva E.",country:"Sweden",text:"Delivery to Sweden was faster than I expected and everything was tracked the whole way.",rating:5,verified:!0},{name:"Nils H.",country:"Sweden",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Ida L.",country:"Denmark",text:"The package arrived beautifully wrapped and matched the pictures perfectly. I will definitely be ordering again.",rating:5,verified:!0},{name:"Zoe F.",country:"Australia",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Cooper W.",country:"Australia",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:4,verified:!0},{name:"Ruby C.",country:"Australia",text:"Tracked the whole way and it arrived exactly when promised. A very professional shopping experience.",rating:5,verified:!0},{name:"Mei Lin T.",country:"Singapore",text:"Delivery was quick and the package arrived in perfect condition. I will definitely be ordering again.",rating:5,verified:!0},{name:"Kenji M.",country:"Japan",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0}];function be(){return`
    <section id="customer-feedback" class="relative overflow-hidden bg-slate-950 text-white">
      <div class="absolute inset-0" style="background:
        radial-gradient(800px 420px at 15% 20%, rgba(16,185,129,.25), transparent 60%),
        linear-gradient(160deg,#071a16 0%,#060c1c 60%,#0b1226 100%)"></div>
      <div class="absolute inset-0 opacity-[.06]" style="background-image:radial-gradient(#34d399 1px, transparent 1px);background-size:22px 22px"></div>
      <div class="absolute inset-0" data-bg-slot="reviews"></div>

      <div class="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/20 text-emerald-300 flex items-center justify-center"><i data-lucide="message-square-text" class="w-5 h-5"></i></div>
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-white tracking-tight">Customer Feedback</h2>
            <p class="text-xs text-slate-400 mt-0.5">Real shoppers, real orders, real peace of mind.</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-3 gap-4" id="fb-featured">
          ${ye.map($).join("")}
        </div>

        <!-- Feedback form (signed-in account holders only) -->
        <div class="mt-6 rounded-2xl border border-white/10 bg-white/[.06] backdrop-blur p-5 sm:p-6">
          <div id="fb-form-holder">
            <div class="flex items-center gap-2 mb-4">
              <i data-lucide="pen-line" class="w-4 h-4 text-emerald-300"></i>
              <p class="text-sm font-black text-white">Feedback</p>
              <span class="text-[10px] text-slate-400">Your experience helps us improve</span>
            </div>
            <form id="fb-form" class="space-y-3.5">
            <div class="grid sm:grid-cols-2 gap-3.5">
              <input id="fb-name" type="text" maxlength="60" placeholder="Your name" class="w-full rounded-xl border border-white/15 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-emerald-400/60">
              <input id="fb-email" type="email" maxlength="120" placeholder="Email (optional)" class="w-full rounded-xl border border-white/15 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-emerald-400/60">
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <p class="text-xs font-bold text-slate-300">Your rating:</p>
              <div class="flex gap-1" id="fb-stars">
                ${[1,2,3,4,5].map(e=>`<button type="button" data-star="${e}" class="fb-star text-slate-500 hover:text-amber-400 transition"><i data-lucide="star" class="w-6 h-6"></i></button>`).join("")}
              </div>
              <input type="hidden" id="fb-rating" value="5">
            </div>
            <textarea id="fb-text" rows="3" maxlength="1000" required placeholder="Write your feedback here…" class="w-full rounded-xl border border-white/15 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-emerald-400/60"></textarea>
            <div class="flex flex-wrap items-center gap-3">
              <button type="submit" class="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-xl text-sm transition hover:scale-[1.02] active:scale-[.98]">
                Submit Feedback <i data-lucide="send" class="w-4 h-4"></i>
              </button>
              <p id="fb-msg" class="text-xs font-bold hidden"></p>
            </div>
          </form>
          </div>
          <!-- Guests are asked to create/sign in to an account first. -->
          <div id="fb-signin-zone" class="hidden">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <i data-lucide="lock" class="w-5 h-5 text-emerald-300 shrink-0"></i>
                <div>
                  <p class="text-sm font-black text-white">Accounts only</p>
                  <p class="text-xs text-slate-400">Only signed-in account holders can submit feedback.</p>
                </div>
              </div>
              <a href="/auth.html" class="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold py-2.5 px-5 rounded-xl text-xs transition hover:scale-[1.02] active:scale-[.98]">
                Sign in / Create account <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- View more Feedback (same banner background, separate comments) -->
        <div class="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-white/[.06] backdrop-blur">
          <button type="button" data-acc="trust-reviews-more" aria-expanded="false" class="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-white/[.04] transition">
            <span class="flex items-center gap-2.5">
              <i data-lucide="messages-square" class="w-5 h-5 text-emerald-300"></i>
              <span class="text-sm font-black text-white">View more Feedback</span>
            </span>
            <span data-acc-icon="trust-reviews-more" class="shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300"><i data-lucide="chevron-down" class="w-5 h-5 text-slate-300"></i></span>
          </button>
          <div data-acc-body="trust-reviews-more" class="trust-acc-body" data-open="0">
            <div class="border-t border-white/10 px-4 sm:px-5 pb-5 pt-4">
              <div id="fb-more-list" class="max-h-[26rem] overflow-y-auto pr-1 space-y-3">
                ${xe.map($).join("")}
              </div>
              <div class="flex justify-center mt-4">
                <button type="button" data-feedback-backtop class="btn-press inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold py-2.5 px-5 rounded-full text-xs transition">
                  <i data-lucide="chevron-up" class="w-4 h-4"></i> Back to top
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`}function p(e,t){return`<li><a href="${e}" class="text-xs text-slate-400 hover:text-white transition">${t}</a></li>`}function N(e){const t={...C,...e||{}},a=J(),r=a.brand_name||a.site_name||O,i=a.brand_logo||a.brand_header_logo||a.brand_footer_logo||"/w-logo.svg",o=t.bottom_footer_text||a.brand_slogan||a.site_tagline||"GLOBAL SHOPPING · WORLDWIDE DELIVERY",n=t.bottom_copyright?t.bottom_copyright:`© ${new Date().getFullYear()} ${r}. All rights reserved.`;return`
    <section id="site-closing-section" class="relative overflow-hidden bg-[#060c1c] text-white">
      <!-- backdrop -->
      <div class="absolute inset-0" style="background:
        radial-gradient(900px 480px at 82% 10%, rgba(37,99,235,.32), transparent 62%),
        radial-gradient(720px 420px at 10% 94%, rgba(6,182,212,.20), transparent 60%),
        linear-gradient(180deg,#0a1128 0%,#060c1c 55%,#04101f 100%)"></div>
      <div class="absolute inset-0 opacity-[.05]" style="background-image:radial-gradient(#7dd3fc 1px, transparent 1px);background-size:24px 24px"></div>

      <div class="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-14 sm:pt-20 pb-8 sm:pb-10">
        <!-- Thank-you hero -->
        <div class="text-center max-w-3xl mx-auto">
          <div class="mx-auto w-16 h-16 rounded-2xl bg-white/[.07] border border-white/10 flex items-center justify-center overflow-hidden backdrop-blur">
            <img src="${c(i)}" alt="${c(r)}" class="w-10 h-10 object-contain" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex'">
            <span style="display:none">${Z("w-9 h-9")}</span>
          </div>
          <p class="mt-4 text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300">${c(o)}</p>
          <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.08] tracking-tight text-white">
            ${c(t.bottom_heading)}
          </h2>
          <p class="mt-4 text-[15px] sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            ${c(t.bottom_main_message)}
          </p>
          <p class="mt-5 text-lg sm:text-xl font-semibold text-cyan-200">${c(t.bottom_closing_message)}</p>
        </div>

        <!-- Customer Support area -->
        <div class="mt-12 max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[.05] backdrop-blur-md p-6 sm:p-8">
          <div class="flex flex-col lg:flex-row items-center gap-6 justify-between text-center lg:text-left">
            <div class="flex items-center gap-4">
              <div class="shrink-0 w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 flex items-center justify-center">
                <i data-lucide="headphones" class="w-6 h-6"></i>
              </div>
              <div>
                <h3 class="text-lg sm:text-xl font-black text-white tracking-tight">${c(t.bottom_support_heading)}</h3>
                <p class="text-sm text-slate-300 mt-1 max-w-md">${c(t.bottom_support_description)}</p>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href="mailto:${c(E)}" class="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-xl shadow-blue-900/30 hover:scale-[1.03] active:scale-[.98] transition">
                ${c(t.bottom_support_button_text)} <i data-lucide="message-circle" class="w-4 h-4"></i>
              </a>
              <a href="/contact.html" class="inline-flex items-center gap-2 border border-white/25 bg-white/10 text-white text-sm font-bold px-6 py-3.5 rounded-2xl backdrop-blur hover:bg-white/15 transition">
                Contact Us <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
          <div class="mt-6 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-[11px] text-slate-400">
            <span class="inline-flex items-center justify-center gap-1.5"><i data-lucide="mail" class="w-3.5 h-3.5 text-cyan-300"></i> ${c(E)}</span>
            <span class="inline-flex items-center justify-center gap-1.5"><i data-lucide="message-circle" class="w-3.5 h-3.5 text-cyan-300"></i> 24/7 live chat</span>
            <span class="inline-flex items-center justify-center gap-1.5"><i data-lucide="life-buoy" class="w-3.5 h-3.5 text-cyan-300"></i> <a href="/help.html" class="hover:text-white transition">Help Center</a></span>
          </div>
        </div>

        <!-- Professional footer links -->
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-9">
          <div>
            <h4 class="text-xs font-black text-white uppercase tracking-widest mb-3.5">Company</h4>
            <ul class="space-y-2.5">
              ${p("/about.html","About Us")}
              ${p("/team.html","Our Team")}
              ${p("/contact.html","Contact Us")}
              ${p("/help.html","Help Center")}
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-black text-white uppercase tracking-widest mb-3.5">Legal</h4>
            <ul class="space-y-2.5">
              ${p("/privacy.html","Privacy Policy")}
              ${p("/terms.html","Terms & Conditions")}
              ${p("/refund-policy.html","Refund Policy")}
              ${p("/shipping-policy.html","Shipping Policy")}
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-black text-white uppercase tracking-widest mb-3.5">Account</h4>
            <ul class="space-y-2.5">
              ${p("/account.html","My Account")}
              ${p("/auth.html","Sign In")}
              ${p("/auth.html","Register / Create Account")}
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-black text-white uppercase tracking-widest mb-3.5">Support</h4>
            <ul class="space-y-2.5">
              ${p("mailto:"+E,"Email Support")}
              ${p("/help.html","FAQ")}
              ${p("/contact.html","Contact Us")}
            </ul>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-[11px] text-slate-400 text-center sm:text-left">
            ${c(t.bottom_footer_closing)}
          </p>
          <div class="flex items-center gap-2 text-[11px] font-bold text-slate-400">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[.06] border border-white/10"><i data-lucide="lock" class="w-3.5 h-3.5 text-emerald-400"></i> SSL Secure</span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[.06] border border-white/10"><i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i> Secure Checkout</span>
          </div>
        </div>
        <p class="text-center text-[11px] text-slate-500 mt-4">${c(n)}</p>
      </div>
    </section>`}function ve(e){e.addEventListener("click",t=>{const a=t.target.closest("[data-acc]");if(!a)return;const r=a.dataset.acc,i=e.querySelector(`[data-acc-body="${r}"]`),o=e.querySelector(`[data-acc-icon="${r}"]`);if(!i)return;i.dataset.open==="1"?(i.style.maxHeight="0px",i.style.opacity="0",i.dataset.open="0",o.classList.remove("rotate-180"),a.setAttribute("aria-expanded","false")):(i.style.maxHeight=i.scrollHeight+"px",i.style.opacity="1",i.dataset.open="1",o.classList.add("rotate-180"),a.setAttribute("aria-expanded","true"))})}function P(e){const t=document.querySelectorAll("[data-bg-slot]");t.length&&t.forEach(a=>{const r=a.dataset.bgSlot;r==="trust_promo"?a.innerHTML=L(e.trust_promo_bg_image,e.trust_promo_bg_video):r==="reviews"&&(a.innerHTML=L(e.reviews_bg_image,e.reviews_bg_video))})}function we(e){const t=e.querySelector("#fb-stars");t&&t.addEventListener("click",i=>{const o=i.target.closest(".fb-star");if(!o)return;const n=parseInt(o.dataset.star,10),s=e.querySelector("#fb-rating");s&&(s.value=String(n)),t.querySelectorAll(".fb-star").forEach((u,m)=>{const d=u.querySelector("i, svg");d&&(m<n?(d.classList.add("fill-amber-400","text-amber-400"),d.classList.remove("text-slate-500")):(d.classList.remove("fill-amber-400","text-amber-400"),d.classList.add("text-slate-500")))})});const a=e.querySelector("#fb-form");a&&a.addEventListener("submit",i=>{i.preventDefault(),ke(a)});const r=e.querySelector("[data-feedback-backtop]");r&&r.addEventListener("click",()=>{const i=e.querySelector('[data-acc="trust-reviews-more"]');i&&i.click();const o=document.getElementById("customer-feedback");o&&o.scrollIntoView({behavior:"smooth",block:"start"})})}function v(e,t,a){const r=e.closest("#customer-feedback")?.querySelector("#fb-msg");r&&(r.textContent=t,r.classList.remove("hidden","text-emerald-300","text-amber-300"),a&&r.classList.add(a))}async function ke(e){const a=(e.querySelector("#fb-text")?.value||"").trim();if(!a){v(e,"Please write your feedback first.","text-amber-300");return}const r=e.querySelector("[type=submit]"),i=r.innerHTML;if(r.disabled=!0,r.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Sending…',window.lucide)try{lucide.createIcons()}catch{}try{const o=await x();let n=null;try{n=(await o.auth.getUser()).data?.user?.id||null}catch{}if(!n){if(v(e,"Only account holders can submit feedback. Please sign in first.","text-amber-300"),r.disabled=!1,r.innerHTML=i,window.lucide)try{lucide.createIcons()}catch{}return}const{error:s}=await o.from("site_feedback").insert({user_id:n,name:e.querySelector("#fb-name")?.value.trim()||"Anonymous shopper",email:e.querySelector("#fb-email")?.value.trim()||"",rating:parseInt(e.querySelector("#fb-rating")?.value||"5",10),feedback:a,is_approved:!1});if(s)throw new Error(s.message);v(e,"✓ Thank you! Your feedback has been sent.","text-emerald-300"),e.reset();const u=e.closest("#customer-feedback")?.querySelector("#fb-stars");u&&u.querySelectorAll(".fb-star").forEach(m=>{const d=m.querySelector("i, svg");d&&(d.classList.remove("fill-amber-400","text-amber-400"),d.classList.add("text-slate-500"))})}catch{v(e,"Could not send your feedback right now. Please try again later.","text-amber-300")}if(r.disabled=!1,r.innerHTML=i,window.lucide)try{lucide.createIcons()}catch{}}async function _e(e){const t=e?.querySelector("#fb-more-list"),a=e?.querySelector("#fb-featured");if(!(!t&&!a))try{const r=await x(),{data:i,error:o}=await r.from("site_feedback").select("name,rating,feedback,created_at").eq("is_approved",!0).order("created_at",{ascending:!1}).limit(30);if(o||!i||!i.length)return;const n=i.map(s=>$({name:s.name||"Verified shopper",text:s.feedback||"",rating:s.rating||5,verified:!0,country:"Verified customer",date:s.created_at?new Date(s.created_at).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):""}));t&&(t.innerHTML=n.join("")+t.innerHTML),a&&n.length&&(a.innerHTML=n.slice(0,3).join(""))}catch{}}async function Se(e){const t=e?.querySelector("#fb-form-holder"),a=e?.querySelector("#fb-signin-zone");if(!t||!a)return;let r=null;try{r=(await(await x()).auth.getUser()).data?.user||null}catch{}if(r){a.classList.add("hidden"),t.classList.remove("hidden");const i=r.user_metadata||{},o=i.name||i.full_name||(r.email?r.email.split("@")[0]:""),n=e.querySelector("#fb-name"),s=e.querySelector("#fb-email");n&&!n.value&&o&&(n.value=o),s&&!s.value&&r.email&&(s.value=r.email)}else t.classList.add("hidden"),a.classList.remove("hidden")}function Ce(){if(document.getElementById("trust-info-style"))return;const e=document.createElement("style");e.id="trust-info-style",e.textContent=`
    .trust-acc-body{overflow:hidden;max-height:0;opacity:0;transition:max-height .38s cubic-bezier(.2,.8,.2,1),opacity .28s ease}
    .trust-acc-body[data-open="1"]{opacity:1}`,document.head.appendChild(e)}async function R(){if(document.body&&document.body.dataset.homepage==="true")return;const e=document.getElementById("trust-info-area");if(!e)return;Ce();let t={...C};try{t=await M()}catch{}if(e.innerHTML=[pe(),he(),fe(),be(),N(t)].join(""),window.lucide)try{lucide.createIcons()}catch{}ve(e),we(e),Se(e),_e(e);let a={...W};try{a=await k()}catch{}P(a),window.addEventListener("promo-backgrounds-updated",()=>{k().then(P).catch(()=>{})}),window.addEventListener("site-content-updated",()=>{M().then(r=>{const i=e.querySelector("#site-closing-section");if(i&&(i.outerHTML=N(r)),window.lucide)try{lucide.createIcons()}catch{}}).catch(()=>{})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",R):R();const Ee="/fallback.svg";function h(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Y(e){return Array.isArray(e.images)?e.images.filter(Boolean):typeof e.images=="string"?[e.images]:[]}function T(e){return Y(e)[0]||Ee}function Ie(e){const t=parseFloat(e.real_price),a=parseFloat(e.price);return!(t>0)||!(a>0)||t<=a?null:{real:t,price:a,pct:Math.round((1-a/t)*100)}}function q(e){const t=Ie(e),a=D(e),r=t?D({price:t.real,currency:e.currency,price_period:e.price_period}):"",i=t?`<span class="text-gray-400 line-through">${r}</span> `:"",o=t?`<span class="inline-block bg-red-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">-${t.pct}%</span>`:"";return`${i}<span class="font-black">${a}</span> ${o}`}let g=[],I=!1;function Le(e){const t=new Set,a=[];for(const r of e){if(!r)continue;const i=r.property_id||r.id;!i||t.has(i)||(t.add(i),a.push(r))}return a}async function Me(){if(I&&g.length)return g;try{let e=[];try{await z(),e=Q()||[]}catch{}let t=Le([...e,...X()||[]]);t=t.map(a=>{try{return ee({...a})}catch{return a}});try{const{isCatalogListingHidden:a}=await te(async()=>{const{isCatalogListingHidden:r}=await import("./catalog-hidden-store-BUe_sEAx.js");return{isCatalogListingHidden:r}},__vite__mapDeps([0,1]));t=t.filter(r=>{const i=r.property_id||r.id;if(!i)return!1;try{return!a(i)}catch{return!0}})}catch{}return g=t.filter(a=>Y(a).length>0&&(a.title||a.name)),I=!0,g}catch{return I=!0,g}}function Ae(){return g}const U="kco_promo_settings_v1",S={app_banner_enabled:!0,app_play_store_url:"",app_banner_headline:"Discover More with the Weverse Online Shop App",live_promo_enabled:!0,live_promo_interval_seconds:60,live_promo_first_delay_seconds:12,live_promo_product_ids:[],live_promo_use_owned_only:!1};async function $e(){try{const t=JSON.parse(localStorage.getItem(U)||"{}");if(t.ts&&Date.now()-t.ts<60*1e3&&t.data)return{...S,...t.data}}catch{}const e={...S};try{const t=await x(),{data:a,error:r}=await t.from("site_settings").select("app_banner_enabled,app_play_store_url,app_banner_headline,live_promo_enabled,live_promo_interval_seconds,live_promo_first_delay_seconds,live_promo_product_ids,live_promo_use_owned_only").limit(1).maybeSingle();if(!r&&a){typeof a.app_banner_enabled=="boolean"&&(e.app_banner_enabled=a.app_banner_enabled),typeof a.app_play_store_url=="string"&&(e.app_play_store_url=a.app_play_store_url.trim()),typeof a.app_banner_headline=="string"&&a.app_banner_headline.trim()&&(e.app_banner_headline=a.app_banner_headline.trim()),typeof a.live_promo_enabled=="boolean"&&(e.live_promo_enabled=a.live_promo_enabled);const i=parseInt(a.live_promo_interval_seconds,10);i>0&&(e.live_promo_interval_seconds=i);const o=parseInt(a.live_promo_first_delay_seconds,10);o>=0&&(e.live_promo_first_delay_seconds=o),Array.isArray(a.live_promo_product_ids)&&(e.live_promo_product_ids=a.live_promo_product_ids.filter(Boolean)),typeof a.live_promo_use_owned_only=="boolean"&&(e.live_promo_use_owned_only=a.live_promo_use_owned_only)}}catch{}try{localStorage.setItem(U,JSON.stringify({ts:Date.now(),data:e}))}catch{}return e}function Te(e,t,a=12){const r=t&&Array.isArray(t.live_promo_product_ids)&&t.live_promo_product_ids.length?new Set(t.live_promo_product_ids):null;let i=r?e.filter(o=>r.has(o.property_id||o.id)):e.slice();return i.length||(i=e.slice()),i.slice(0,a)}const qe=()=>document.getElementById("app-promo-banner"),B="/fallback.svg";function Be(){return`
  <svg viewBox="0 0 560 720" class="w-full h-full block" aria-hidden="true">
    <defs>
      <linearGradient id="wSkin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#f4c69b"/>
        <stop offset="1" stop-color="#dc9f72"/>
      </linearGradient>
      <linearGradient id="wSkinShade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#d99a6c"/>
        <stop offset="1" stop-color="#b57349"/>
      </linearGradient>
      <linearGradient id="wHair" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#4a2a1c"/>
        <stop offset="1" stop-color="#24120b"/>
      </linearGradient>
      <linearGradient id="wHair2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#5e3826"/>
        <stop offset="1" stop-color="#2c1710"/>
      </linearGradient>
      <linearGradient id="wBlouse" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1e3a5f"/>
        <stop offset="1" stop-color="#0f1e33"/>
      </linearGradient>
      <linearGradient id="wBlouseLite" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2c5282"/>
        <stop offset="1" stop-color="#16304f"/>
      </linearGradient>
      <radialGradient id="wGlow" cx="0.5" cy="0.32" r="0.7">
        <stop offset="0" stop-color="#3b82f6" stop-opacity="0.28"/>
        <stop offset="1" stop-color="#3b82f6" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <!-- soft glow behind the woman -->
    <ellipse cx="280" cy="200" rx="330" ry="360" fill="url(#wGlow)"/>

    <!-- hair back layer (big flowing mane) -->
    <path d="M250 78 C178 60 96 118 84 196 C70 290 118 360 176 398
             C210 416 240 430 258 468 L306 468 C320 428 348 412 386 398
             C442 360 478 294 474 204 C470 122 396 64 318 76
             C296 78 268 78 250 78 Z" fill="url(#wHair)"/>

    <!-- neck + collarbone -->
    <path d="M258 190 C254 226 258 250 274 262 L292 262 C308 250 312 226 308 190 Z" fill="url(#wSkinShade)"/>

    <!-- torso / blouse -->
    <path d="M110 320 C90 380 88 470 92 720 L468 720 C472 470 470 380 450 320
             C410 288 356 272 280 272 C204 272 150 288 110 320 Z" fill="url(#wBlouse)"/>
    <path d="M110 320 C130 300 160 290 190 288 L186 340 C150 332 128 322 110 320 Z" fill="url(#wBlouseLite)"/>
    <path d="M450 320 C430 300 400 290 370 288 L374 340 C410 332 432 322 450 320 Z" fill="url(#wBlouseLite)"/>

    <!-- head base -->
    <ellipse cx="282" cy="150" rx="54" ry="60" fill="url(#wSkin)"/>

    <!-- face -->
    <path d="M228 150 C228 104 256 74 282 74 C308 74 336 104 336 150
             C336 196 310 216 282 216 C254 216 228 196 228 150 Z" fill="url(#wSkin)"/>

    <!-- hair framing the face -->
    <path d="M228 150 C220 96 240 60 282 54 C326 50 352 84 348 150
             C346 196 330 224 314 234 C322 196 326 150 314 108
             C300 62 244 64 232 116 C226 128 228 140 228 150 Z" fill="url(#wHair2)"/>
    <path d="M226 140 C218 96 234 62 278 56 C304 52 326 66 336 92
             C322 66 296 56 278 58 C250 62 232 90 226 140 Z" fill="#6b4028"/>

    <!-- eyes -->
    <path d="M252 146 C258 138 270 138 276 146 C270 152 258 152 252 146 Z" fill="#24120b"/>
    <path d="M290 146 C296 138 308 138 314 146 C308 152 296 152 290 146 Z" fill="#24120b"/>
    <circle cx="264" cy="145" r="2.2" fill="#ffffff" opacity="0.9"/>
    <circle cx="302" cy="145" r="2.2" fill="#ffffff" opacity="0.9"/>

    <!-- brows -->
    <path d="M250 134 C258 128 272 128 278 134" stroke="#4a2a1c" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M288 134 C296 128 310 128 316 134" stroke="#4a2a1c" stroke-width="3" fill="none" stroke-linecap="round"/>

    <!-- nose -->
    <path d="M282 150 C282 162 280 168 274 170" stroke="#d99a6c" stroke-width="2.5" fill="none" stroke-linecap="round"/>

    <!-- lips -->
    <path d="M266 184 C274 190 290 190 298 184 C292 194 276 194 266 184 Z" fill="#c96f5c"/>
    <path d="M266 184 C274 188 290 188 298 184" stroke="#b55a48" stroke-width="1.5" fill="none"/>

    <!-- blush -->
    <ellipse cx="244" cy="176" rx="10" ry="6" fill="#e8a881" opacity="0.55"/>
    <ellipse cx="320" cy="176" rx="10" ry="6" fill="#e8a881" opacity="0.55"/>

    <!-- ears + earrings -->
    <ellipse cx="228" cy="158" rx="7" ry="12" fill="url(#wSkinShade)"/>
    <ellipse cx="336" cy="158" rx="7" ry="12" fill="url(#wSkinShade)"/>
    <circle cx="228" cy="176" r="4" fill="#e6c15a"/>
    <circle cx="336" cy="176" r="4" fill="#e6c15a"/>

    <!-- necklace -->
    <path d="M256 214 C264 232 268 240 282 244 C296 240 300 232 308 214" stroke="#e6c15a" stroke-width="2.5" fill="none"/>
    <circle cx="282" cy="246" r="4" fill="#e6c15a"/>

    <!-- subtle hair shine -->
    <path d="M282 60 C320 58 348 80 352 112 C344 80 316 64 282 62 Z" fill="#7a4c33" opacity="0.9"/>
  </svg>`}function Oe(){return`
  <svg viewBox="0 0 560 720" class="w-full h-full block" aria-hidden="true">
    <defs>
      <linearGradient id="hSkin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#f4c69b"/>
        <stop offset="1" stop-color="#dc9f72"/>
      </linearGradient>
      <linearGradient id="hSkinShade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#d99a6c"/>
        <stop offset="1" stop-color="#b57349"/>
      </linearGradient>
    </defs>

    <!-- LEFT hand: fingers wrapping the left edge + thumb over the screen -->
    <g>
      <!-- thumb over the screen -->
      <path d="M182 448 C168 452 158 468 160 488 C162 508 176 520 190 516
               C206 510 214 492 208 476 C204 462 194 448 182 448 Z" fill="url(#hSkin)"/>
      <!-- index finger -->
      <path d="M158 492 C144 490 134 502 136 518 C138 534 152 544 166 540
               C180 536 188 520 184 506 C180 496 170 494 158 492 Z" fill="url(#hSkin)"/>
      <!-- middle finger -->
      <path d="M150 518 C136 520 128 534 132 550 C136 566 152 574 166 568
               C180 562 186 546 180 532 C176 520 162 516 150 518 Z" fill="url(#hSkin)"/>
      <!-- ring finger -->
      <path d="M146 546 C132 550 126 564 132 580 C138 596 154 602 168 594
               C182 586 186 570 180 556 C176 546 158 542 146 546 Z" fill="url(#hSkin)"/>
      <!-- pinky -->
      <path d="M148 574 C138 580 134 594 140 608 C146 622 162 626 174 618
               C186 610 188 594 182 582 C178 572 158 568 148 574 Z" fill="url(#hSkinShade)"/>
      <!-- palm shadow -->
      <path d="M188 470 C196 492 200 520 198 548 C196 566 190 582 182 590
               C196 588 204 572 206 552 C208 516 200 486 188 470 Z" fill="url(#hSkinShade)"/>
    </g>

    <!-- RIGHT hand: fingers wrapping the right edge + thumb over the screen -->
    <g>
      <!-- thumb over the screen -->
      <path d="M378 448 C392 452 402 468 400 488 C398 508 384 520 370 516
               C354 510 346 492 352 476 C356 462 366 448 378 448 Z" fill="url(#hSkin)"/>
      <!-- index finger -->
      <path d="M402 492 C416 490 426 502 424 518 C422 534 408 544 394 540
               C380 536 372 520 376 506 C380 496 390 494 402 492 Z" fill="url(#hSkin)"/>
      <!-- middle finger -->
      <path d="M410 518 C424 520 432 534 428 550 C424 566 408 574 394 568
               C380 562 374 546 380 532 C384 520 398 516 410 518 Z" fill="url(#hSkin)"/>
      <!-- ring finger -->
      <path d="M414 546 C428 550 434 564 428 580 C422 596 406 602 392 594
               C378 586 374 570 380 556 C384 546 402 542 414 546 Z" fill="url(#hSkin)"/>
      <!-- pinky -->
      <path d="M412 574 C422 580 426 594 420 608 C414 622 398 626 386 618
               C374 610 372 594 378 582 C382 572 402 568 412 574 Z" fill="url(#hSkinShade)"/>
      <!-- palm shadow -->
      <path d="M372 470 C364 492 360 520 362 548 C364 566 370 582 378 590
               C364 588 356 572 354 552 C352 516 360 486 372 470 Z" fill="url(#hSkinShade)"/>
    </g>
  </svg>`}function He(e){const t=e[0],a=e[1],r=(i,o)=>{const n=h(T(i)),s=h((i.title||i.name||"").slice(0,34));return`
      <a href="/details.html?id=${encodeURIComponent(i.property_id||i.id)}"
         class="block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition active:scale-[.98]">
        <div class="aspect-square bg-gray-100 overflow-hidden">
          <img src="${n}" alt="${s}" loading="lazy" decoding="async"
               class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${B}'">
        </div>
        <div class="p-2">
          <p class="text-[10px] text-gray-700 font-bold leading-tight line-clamp-2 min-h-[26px]">${s}</p>
          <div class="flex items-center justify-between mt-1">
            <span class="text-[11px] text-blue-600 font-black">${q(i)}</span>
            <span class="bg-blue-500 text-white text-[9px] font-black px-2 py-1 rounded-lg">Buy</span>
          </div>
        </div>
      </a>`};return`
    <div class="absolute inset-0 flex flex-col bg-[#f1f5f9] overflow-hidden" id="promo-phone-screen">
      <!-- status bar -->
      <div class="flex items-center justify-between px-4 pt-2 text-[9px] font-bold text-gray-700">
        <span>9:41</span>
        <div class="flex items-center gap-1">
          <span class="inline-block w-3.5 h-2 rounded-[2px] border border-gray-500 relative">
            <span class="absolute inset-y-[1px] left-[1px] w-2 bg-emerald-500 rounded-[1px]"></span>
          </span>
          <i data-lucide="wifi" class="w-3 h-3"></i>
        </div>
      </div>
      <!-- app header: W logo + name + cart -->
      <div class="flex items-center justify-between px-3 py-2 bg-white border-b border-gray-200">
        <div class="flex items-center gap-1.5 min-w-0">
          <div class="shrink-0 w-6 h-6 bg-black rounded-lg flex items-center justify-center">
            ${Z("w-4 h-4")}
          </div>
          <span class="text-[10px] font-black text-gray-900 tracking-tight truncate">Weverse Online Shop</span>
        </div>
        <div class="flex items-center gap-2 text-gray-600">
          <i data-lucide="search" class="w-3.5 h-3.5"></i>
          <div class="relative">
            <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i>
            <span class="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full text-white text-[7px] font-black flex items-center justify-center">3</span>
          </div>
        </div>
      </div>
      <!-- search bar -->
      <div class="px-3 pt-2">
        <div class="flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 text-[9px] text-gray-400">
          <i data-lucide="search" class="w-3 h-3"></i>
          <span>Search products, cars, homes…</span>
        </div>
      </div>
      <!-- category chips -->
      <div class="flex gap-1.5 px-3 pt-2 overflow-hidden">
        ${["All","Cars","Phones","Fashion","Homes","Electronics"].map((i,o)=>`
          <span class="shrink-0 px-2 py-1 rounded-full text-[8px] font-black ${o===0?"bg-blue-500 text-white":"bg-white border border-gray-200 text-gray-600"}">${i}</span>`).join("")}
      </div>
      <!-- live product cards -->
      <div class="flex-1 overflow-hidden px-3 pt-2 pb-1">
        <div class="h-full grid grid-cols-2 gap-2" id="promo-phone-grid">
          ${t?r(t):""}
          ${a?r(a):""}
        </div>
      </div>
      <!-- bottom nav -->
      <div class="flex items-center justify-around bg-white border-t border-gray-200 py-2 text-gray-400">
        <i data-lucide="house" class="w-3.5 h-3.5 text-blue-500"></i>
        <i data-lucide="search" class="w-3.5 h-3.5"></i>
        <i data-lucide="heart" class="w-3.5 h-3.5"></i>
        <i data-lucide="user" class="w-3.5 h-3.5"></i>
      </div>
    </div>`}function Ge(e){return`
    <div class="relative w-[220px] sm:w-[240px] aspect-[9/19.2] select-none" style="filter:drop-shadow(0 30px 50px rgba(2,8,30,.55))">
      <!-- Android body -->
      <div class="absolute inset-0 rounded-[2.4rem] bg-[#0b0e14] border-[6px] border-[#1c2230] shadow-2xl">
        <!-- punch-hole camera -->
        <span class="absolute top-[10px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black border border-gray-700"></span>
        <!-- side buttons -->
        <span class="absolute left-[-3px] top-[110px] w-[3px] h-10 bg-[#1c2230] rounded-l"></span>
        <span class="absolute left-[-3px] top-[160px] w-[3px] h-16 bg-[#1c2230] rounded-l"></span>
        <span class="absolute right-[-3px] top-[150px] w-[3px] h-20 bg-[#1c2230] rounded-r"></span>
        <!-- screen -->
        <div class="absolute inset-[5px] rounded-[2rem] overflow-hidden">
          ${He(e)}
          <!-- glass reflection -->
          <div class="absolute inset-0 pointer-events-none" style="background:linear-gradient(135deg,rgba(255,255,255,.14) 0%,rgba(255,255,255,0) 34%,rgba(255,255,255,0) 78%,rgba(255,255,255,.06) 100%)"></div>
        </div>
      </div>
    </div>`}function De(e,t,a){const r=Te(t,e,12),i=(e.app_play_store_url||"").trim(),o={...C,...a||{}},n=(o.app_banner_title||e.app_banner_headline||S.app_banner_headline).trim(),s=o.app_banner_description,u=o.app_banner_button_text,m=o.app_banner_secondary_text,d=i?`<a href="${h(i)}" target="_blank" rel="noopener" class="inline-flex items-center gap-2.5 bg-white text-blue-900 font-black text-sm px-6 py-3.5 rounded-2xl shadow-xl shadow-blue-900/30 hover:scale-[1.03] active:scale-[.98] transition">
         <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none"><path d="M3 5.5v13c0 .8.5 1.5 1.2 1.8L13.5 12 4.2 3.7C3.5 4 3 4.7 3 5.5Z" fill="#34a853"/><path d="M21.4 11.2 17 8.5l-3.5 3.5L17 15.5l4.4-2.7c.8-.5.8-1.1 0-1.6Z" fill="#4285f4"/><path d="m13.5 12 1.2 1.2-5.4 5.2c.4.2.9.2 1.3 0l10.8-6.5c.4-.2.6-.6.6-.9h.1V5.5c0-.8-.5-1.5-1.2-1.8L13.5 12Z" fill="#fbbc04"/><path d="m6.1 3.6 7.4 8.4 2.5-2.5-8.7-5.3c-.4-.2-.9-.2-1.2-.6Z" fill="#ea4335"/></svg>
         <span>${h(u)}</span>
       </a>`:`<span class="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-sm font-bold px-6 py-3.5 rounded-2xl backdrop-blur cursor-default">
         <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none"><path d="M5 12l5 5 9-9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
         <span>${h(u)}</span>
       </span>`;return`
    <section class="relative overflow-hidden bg-[#060c1c] text-white">
      <!-- backdrop -->
      <div class="absolute inset-0" style="background:
        radial-gradient(1000px 500px at 85% 15%, rgba(37,99,235,.35), transparent 60%),
        radial-gradient(800px 420px at 10% 90%, rgba(6,182,212,.22), transparent 60%),
        linear-gradient(180deg,#0a1128 0%,#060c1c 60%,#04101f 100%)"></div>
      <div class="absolute inset-0 opacity-[.06]" style="background-image:radial-gradient(#7dd3fc 1px, transparent 1px);background-size:22px 22px"></div>
      <!-- admin-chosen background (image or video) — added at init -->
      <div class="absolute inset-0" data-bg-slot="app_banner"></div>

      <div class="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16">
        <div class="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-6 items-center">

          <!-- text side -->
          <div class="max-w-xl lg:pr-6">
            <span class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300 border border-cyan-400/30 bg-cyan-400/10 rounded-full px-3.5 py-1.5 mb-5">
              <i data-lucide="smartphone" class="w-3.5 h-3.5"></i> Weverse Mobile App
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-[2.9rem] font-black leading-[1.08] tracking-tight text-white">
              ${h(n.split(" — ")[0]||n)}
            </h2>
            <p class="text-[15px] sm:text-base text-slate-300 mt-4 leading-relaxed max-w-lg">
              ${h(s)}
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-7 max-w-lg">
              ${[{icon:"shopping-bag",label:"Shop Products"},{icon:"sparkles",label:"New Arrivals"},{icon:"package-search",label:"Manage Orders"},{icon:"heart",label:"Save Favorites"}].map(l=>`
                <div class="bg-white/[.06] border border-white/10 rounded-2xl px-3 py-3.5 text-center backdrop-blur">
                  <i data-lucide="${l.icon}" class="w-4.5 h-4.5 w-5 h-5 text-cyan-300 mx-auto"></i>
                  <p class="text-[10px] font-bold text-slate-200 mt-2">${l.label}</p>
                </div>`).join("")}
            </div>
            <div class="flex flex-wrap items-center gap-3.5 mt-8">
              ${d}
              <a href="/#showroom-directory" class="inline-flex items-center gap-2 text-sm font-bold text-cyan-200 hover:text-white transition">
                ${h(m)} <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
            ${i?"":'<p class="text-[11px] text-slate-500 mt-3">The Android app is in final review. We’ll publish the download link here the moment it is live.</p>'}
          </div>

          <!-- visual side: woman holding the phone (phone floats in front, fully visible) -->
          <div class="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[440px]">
            <div class="absolute inset-0 woman-back" aria-hidden="true">${Be()}</div>
            <div class="absolute inset-0 hands-front pointer-events-none" aria-hidden="true">${Oe()}</div>
            <div class="relative flex justify-center pt-[30%] sm:pt-[27%] lg:pt-[26%]">
              <div class="scale-100 sm:scale-105 lg:scale-110">${Ge(r)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>`}let w=null;function je(e){w&&(clearInterval(w),w=null);const t=document.getElementById("promo-phone-screen"),a=document.getElementById("promo-phone-grid");if(!t||!a||!e.length)return;const r=e.slice();let i=0;const o=()=>{if(!a||!r.length)return;const n=r[i%r.length],s=r[(i+1)%r.length],u=h(T(n)),m=h(T(s)),d=h((n.title||n.name||"").slice(0,34)),l=h((s.title||s.name||"").slice(0,34));if(a.innerHTML=`
      <a href="/details.html?id=${encodeURIComponent(n.property_id||n.id)}" class="block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition active:scale-[.98]">
        <div class="aspect-square bg-gray-100 overflow-hidden"><img src="${u}" alt="${d}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${B}'"></div>
        <div class="p-2"><p class="text-[10px] text-gray-700 font-bold leading-tight line-clamp-2 min-h-[26px]">${d}</p>
        <div class="flex items-center justify-between mt-1"><span class="text-[11px] text-blue-600 font-black">${q(n)}</span><span class="bg-blue-500 text-white text-[9px] font-black px-2 py-1 rounded-lg">Buy</span></div></div>
      </a>
      <a href="/details.html?id=${encodeURIComponent(s.property_id||s.id)}" class="block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition active:scale-[.98]">
        <div class="aspect-square bg-gray-100 overflow-hidden"><img src="${m}" alt="${l}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${B}'"></div>
        <div class="p-2"><p class="text-[10px] text-gray-700 font-bold leading-tight line-clamp-2 min-h-[26px]">${l}</p>
        <div class="flex items-center justify-between mt-1"><span class="text-[11px] text-blue-600 font-black">${q(s)}</span><span class="bg-blue-500 text-white text-[9px] font-black px-2 py-1 rounded-lg">Buy</span></div></div>
      </a>`,window.lucide)try{lucide.createIcons()}catch{}};o(),w=setInterval(()=>{i+=2,o()},4500)}async function K(){if(document.body&&document.body.dataset.homepage==="true")return;const e=qe();if(!e)return;let t={...S};try{t=await $e()}catch{}if(t.app_banner_enabled===!1)return;let a=[];try{await Me(),a=Ae()||[]}catch{}const r=a.length?a:[{property_id:"browse",title:"Browse the full Weverse Online Shop",price:0,currency:"USD",images:["/fallback.svg"]}];let i={...W};try{i=await k()}catch{}const o=s=>{const u=e.querySelector('[data-bg-slot="app_banner"]');u&&(u.innerHTML=L(s.app_banner_bg_image,s.app_banner_bg_video))};async function n(){let s={...C};try{s=await M()}catch{}if(e.innerHTML=De(t,r,s),window.lucide)try{lucide.createIcons()}catch{}je(r),window.dispatchEvent(new CustomEvent("app-promo-banner-ready")),o(i)}await n(),o(i),window.addEventListener("site-content-updated",()=>{n().catch(()=>{})}),window.addEventListener("promo-backgrounds-updated",()=>{k().then(s=>{i=s,o(s)}).catch(()=>{})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",K):K();
