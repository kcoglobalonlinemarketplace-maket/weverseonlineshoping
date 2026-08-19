(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=a(n);fetch(n.href,l)}})();const we="modulepreload",ve=function(e){return"/"+e},Z={},m=function(t,a,r){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=i?.nonce||i?.getAttribute("nonce");n=Promise.allSettled(a.map(c=>{if(c=ve(c),c in Z)return;Z[c]=!0;const d=c.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const s=document.createElement("link");if(s.rel=d?"stylesheet":we,d||(s.as="script"),s.crossOrigin="",s.href=c,o&&s.setAttribute("nonce",o),document.head.appendChild(s),d)return new Promise((g,y)=>{s.addEventListener("load",g),s.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function l(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return n.then(i=>{for(const o of i||[])o.status==="rejected"&&l(o.reason);return t().catch(l)})};let E=null;function F(){return E?Promise.resolve(E):m(()=>import("./supabase-client-nvpjTmO6.js"),[]).then(e=>(E=e.supabase,E))}const xe="/verified-badge.svg",N="Weverse Online Shop",_e="GLOBAL SHOPPING • WORLDWIDE DELIVERY",ke="/w-logo.svg",Se=(e="weverse-badge w-4 h-4 sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5 shrink-0")=>`<svg viewBox="0 0 24 24" class="${e}" aria-label="Verified" role="img" data-weverse-badge="true"><circle cx="12" cy="12" r="11" fill="#3b82f6"/><path d="M10.8 15.6 7.4 12.2l1.5-1.5 1.9 1.9 3.9-3.9 1.5 1.5-5.4 5.4z" fill="#fff"/></svg>`,oe=(e="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8")=>`  <svg viewBox="0 0 24 24" class="${e}" fill="none" aria-hidden="true"><path d="M3 5l4.5 14L12 8l4.5 11L21 5" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,O="weverse_brand_v1",Ce="weverse_brand_override_v1",Ae=5*60*1e3;async function q(){try{const e=JSON.parse(localStorage.getItem(Ce)||"null");if(e&&typeof e=="object")return e}catch{}try{const e=JSON.parse(localStorage.getItem(O)||"{}");if(e.ts&&Date.now()-e.ts<Ae&&e.data)return e.data}catch{}try{const e=await F(),{data:t}=await e.from("site_settings").select("brand_name,brand_slogan,brand_logo,brand_badge,brand_favicon,brand_mobile_logo,brand_header_logo,brand_footer_logo,brand_primary_color,brand_secondary_color,brand_tagline_color1,brand_tagline_color2,brand_font,brand_custom_font,brand_website_url,brand_email,site_name,site_tagline,homepage_banner_image,homepage_banner_alt").limit(1).maybeSingle(),a=t||{};return localStorage.setItem(O,JSON.stringify({ts:Date.now(),data:a})),a}catch{return{}}}function z(e){if(!e)return;const t=e.brand_name||e.site_name||N,a=e.brand_slogan||e.site_tagline||_e,r=e.brand_logo||e.brand_header_logo||ke,n=e.brand_badge||xe,l=e.brand_favicon||"",i=e.brand_custom_font||e.brand_font||"",o=e.brand_primary_color||"",c=e.brand_secondary_color||"",d=e.brand_tagline_color1||"",u=e.brand_tagline_color2||"";if(Te(e.homepage_banner_image||"",e.homepage_banner_alt||"Homepage header banner"),(d||u)&&(document.querySelectorAll(".brand-tagline-1").forEach(s=>{d&&(s.style.color=d)}),document.querySelectorAll(".brand-tagline-2").forEach(s=>{u&&(s.style.color=u)})),document.title&&!document.title.startsWith(t)&&(document.title=document.title.replace(/^[^|]+\|/,t+" |").replace(/^[^–]+–/,t+" – ")),l){let s=document.querySelector("link[rel~='icon']");s||(s=document.createElement("link"),s.rel="icon",document.head.appendChild(s)),s.href=l}if(o||c||i){const s=i?`'${i}'`:null,g=document.getElementById("brand-css-vars")||(()=>{const y=document.createElement("style");return y.id="brand-css-vars",document.head.appendChild(y),y})();if(g.textContent=`:root {
      ${o?`--brand-primary: ${o};`:""}
      ${c?`--brand-secondary: ${c};`:""}
      ${s?`--brand-font: ${s}, system-ui, sans-serif;`:""}
    }`,i){const y="brand-gf-link";if(!document.getElementById(y)){const T=document.createElement("link");T.id=y,T.rel="stylesheet",T.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(i)}:wght@400;600;700;900&display=swap`,document.head.appendChild(T)}}}document.querySelectorAll("[data-brand]").forEach(s=>{const g=s.dataset.brand;g==="name"&&(s.textContent=t,!s.querySelector("[data-weverse-badge]")&&!s.parentElement?.querySelector("[data-weverse-badge]")&&s.appendChild(Object.assign(document.createElement("span"),{className:"inline-flex items-center ml-1 align-middle",innerHTML:Se("weverse-badge w-4 h-4 sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5 shrink-0")}))),g==="slogan"&&(s.textContent=a),g==="logo"&&(s.src=r,s.alt=t,s.style.display=""),g==="badge"&&(s.src=n,s.alt="Verified",s.style.display=""),g==="tagline"&&(s.textContent=a),g==="footer-logo"&&(e.brand_footer_logo?(s.src=e.brand_footer_logo,s.alt=t):(s.src=r,s.alt=t)),g==="mobile-logo"&&(e.brand_mobile_logo?(s.src=e.brand_mobile_logo,s.alt=t):(s.src=r,s.alt=t))}),document.querySelectorAll('img[data-brand="logo"]').forEach(s=>{const y=s.closest(".text-center")?.querySelector('h1[data-brand="name"]');y&&(y.style.display="none")}),Ee(t,a,r,n),Le(t,a,r),B()}function Te(e,t){const a=document.getElementById("homepage-banner-shell"),r=document.getElementById("homepage-banner-image");if(!(!a||!r)){if(!e){r.removeAttribute("src"),r.alt=t,a.classList.add("hidden");return}r.alt=t,r.onload=()=>B(),r.onerror=()=>{a.classList.add("hidden"),B()},r.src!==e&&(r.src=e),a.classList.remove("hidden")}}function B(){const e=document.getElementById("site-header"),t=document.getElementById("site-categories-nav"),a=document.querySelector("main");if(!e||!t||!a)return;const r=Math.ceil(e.getBoundingClientRect().height||e.offsetHeight||0),n=Math.ceil(t.getBoundingClientRect().height||t.offsetHeight||0);t.style.top=`${r}px`;const l=window.innerWidth<640?20:12;a.style.paddingTop=`${r+n+l}px`}function Ee(e,t,a,r,n){document.querySelectorAll('header a[href="/"], header a[href="./"], header a[href="index.html"], .brand-link, #brand-link').forEach(i=>{se(i,e,t),i.querySelectorAll('img.brand-logo, img[data-brand="logo"]').forEach(o=>{o.src=a,o.alt=e})}),document.querySelectorAll("header span").forEach(i=>{if(i.classList.contains("brand-tagline-1")||i.classList.contains("brand-tagline-2"))return;const o=i.textContent.trim();(o==="Weverse Online Shop"||o==="KCO Global Online Marketplace"||i.classList.contains("brand-name"))&&(i.textContent=e),(o==="Your Trusted Global Shop"||o.includes("Globally")||o.includes("Worldwide")||i.classList.contains("brand-slogan"))&&(i.textContent=t)}),document.querySelectorAll('[data-brand="badge"], .brand-badge, #brand-badge').forEach(i=>{i.tagName==="IMG"&&(i.src=r,i.alt="Verified",i.style.display="")}),document.querySelectorAll("span").forEach(i=>{if(i.textContent.includes("Verified")&&!i.querySelector("img.brand-badge-img")){const o=document.createElement("img");o.src=r,o.alt="Verified",o.className="brand-badge-img w-4 h-4 inline-block ml-1",o.onerror=()=>o.remove(),i.appendChild(o)}}),document.querySelectorAll('header a[href="/"] .relative.shrink-0, header a .relative.w-7').forEach(i=>{if(!i.querySelector("img.injected-logo")){const o=document.createElement("img");o.src=a,o.alt=e,o.className="injected-logo w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-lg",o.onerror=()=>o.style.display="none",i.style.display="flex",i.style.alignItems="center",i.innerHTML="",i.appendChild(o)}})}function Le(e,t,a){document.querySelectorAll("footer").forEach(r=>{se(r,e,t),r.querySelectorAll("img.brand-logo, img[data-brand], .footer-logo img").forEach(n=>{n.src=a,n.alt=e})})}function se(e,t,a){const r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n=[];let l;for(;l=r.nextNode();){const i=l.textContent.trim();(i==="Weverse Online Shop"||i==="KCO Global Online Marketplace")&&n.push({node:l,value:t}),(i==="Your Trusted Global Shop"||i==="Global Shopping • Worldwide Delivery")&&n.push({node:l,value:a})}n.forEach(({node:i,value:o})=>{i.textContent=i.textContent.replace(i.textContent.trim(),o)})}q().then(z);window.addEventListener("load",()=>q().then(z));window.addEventListener("resize",()=>B());window.addEventListener("storage",e=>{e.key===O&&q().then(z)});const k={trust_promo_bg_image:"",trust_promo_bg_video:"",app_banner_bg_image:"",app_banner_bg_video:"",reviews_bg_image:"",reviews_bg_video:""},Be=Object.keys(k).join(","),j="kco_promo_backgrounds_v1",Ie=60*1e3;function Me(){try{const e=JSON.parse(localStorage.getItem(j)||"{}");if(e.ts&&Date.now()-e.ts<Ie&&e.data&&typeof e.data=="object")return e.data}catch{}return null}function Pe(e){try{localStorage.setItem(j,JSON.stringify({ts:Date.now(),data:e}))}catch{}}async function I(){const e=Me();if(e)return{...k,...e};try{const t=await F(),{data:a,error:r}=await t.from("site_settings").select(Be).limit(1).maybeSingle(),n={...k,...r||!a?{}:a};return Pe(n),n}catch{return{...k}}}function ht(){try{localStorage.removeItem(j)}catch{}window.dispatchEvent(new CustomEvent("promo-backgrounds-updated"))}function H(e,t){const a=(e||"").trim(),r=(t||"").trim(),n=[];return r&&n.push(`<video class="absolute inset-0 w-full h-full object-cover" autoplay muted loop playsinline webkit-playsinline preload="metadata" poster="${Y(a)}"><source src="${Y(r)}" type="video/mp4"></video>`),a&&n.push(`<div class="absolute inset-0 bg-cover bg-center" style="background-image:url('${$e(a)}')"></div>`),(r||a)&&n.push('<div class="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/45 to-slate-900/30"></div>'),n.join("")}function Y(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $e(e){return String(e).replace(/\\/g,"\\\\").replace(/'/g,"\\'")}const K="Weverse Online Shop",De="weverse_brand_v1";function w(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function le(){try{const e=JSON.parse(localStorage.getItem(De)||"{}"),t=e.data&&typeof e.data=="object"?e.data:e;if(t&&typeof t=="object"&&(t.brand_name||t.site_name||t.brand_logo))return t}catch{}return{}}function Oe(){const e=le(),t=e.brand_name||e.site_name||N;return`
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
        <div class="max-w-2xl">
          <span class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300 border border-cyan-400/30 bg-cyan-400/10 rounded-full px-3.5 py-1.5 mb-5">
            <i data-lucide="truck" class="w-3.5 h-3.5"></i> Worldwide Delivery
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.06] tracking-tight text-white">
            Happiness delivered to your door
          </h2>
          <p class="text-[15px] sm:text-base text-slate-300 mt-4 leading-relaxed max-w-xl">
            From our shop to your family — every order is packed with care, tracked in real time,
            and delivered reliably to ${w(t)} customers in 200+ countries.
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
    </section>`}function He(){const e=t=>`
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
    </section>`}const Q=[{id:"trust-shipping",icon:"package",tone:"blue",title:"Shipping & Delivery",body:`
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
      <p class="mt-3 text-xs text-gray-400">The Android app is in final review — the download link will appear here the moment it goes live.</p>`}],J={blue:"bg-blue-50 text-blue-600",emerald:"bg-emerald-50 text-emerald-600",amber:"bg-amber-50 text-amber-600",violet:"bg-violet-50 text-violet-600",sky:"bg-sky-50 text-sky-600",indigo:"bg-indigo-50 text-indigo-600",rose:"bg-rose-50 text-rose-600",slate:"bg-slate-100 text-slate-600",teal:"bg-teal-50 text-teal-600",cyan:"bg-cyan-50 text-cyan-600"};function We(e){const t=J[e.tone]||J.blue;return`
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
    </div>`}function Ue(){const e=Q.slice(0,6),t=Q.slice(6),a=r=>r.map(We).join("");return`
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
    </section>`}const Ge=[{name:"Amina K.",country:"Nigeria",text:"My order arrived ahead of schedule and the quality was exactly as described. I shop here without any doubt."},{name:"Sarah & James",country:"United States",text:"Ordered for our whole family — tracking updates made it feel safe and reliable from checkout to delivery."},{name:"Priya S.",country:"India",text:"The customer support team answered my questions in minutes. Genuinely trustworthy shopping experience."}];function Re(){return`
    <section class="relative overflow-hidden bg-slate-950 text-white">
      <div class="absolute inset-0" style="background:
        radial-gradient(800px 420px at 15% 20%, rgba(16,185,129,.25), transparent 60%),
        linear-gradient(160deg,#071a16 0%,#060c1c 60%,#0b1226 100%)"></div>
      <div class="absolute inset-0 opacity-[.06]" style="background-image:radial-gradient(#34d399 1px, transparent 1px);background-size:22px 22px"></div>
      <div class="absolute inset-0" data-bg-slot="reviews"></div>

      <div class="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/20 text-emerald-300 flex items-center justify-center"><i data-lucide="star" class="w-5 h-5"></i></div>
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-white tracking-tight">Customer Reviews & Trust</h2>
            <p class="text-xs text-slate-400 mt-0.5">Real shoppers, real orders, real peace of mind.</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-3 gap-4">
          ${Ge.map(e=>`
            <div class="bg-white/[.07] border border-white/10 rounded-2xl p-4 backdrop-blur flex flex-col">
              <div class="flex items-center gap-1 mb-2.5">
                ${[1,2,3,4,5].map(()=>'<i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>').join("")}
              </div>
              <p class="text-[13px] text-slate-200 leading-relaxed flex-1">“${w(e.text)}”</p>
              <div class="flex items-center gap-2.5 mt-3.5">
                <span class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white text-[11px] font-black">${w(e.name.split(" ")[0][0])}</span>
                <div>
                  <p class="text-xs font-black text-white">${w(e.name)}</p>
                  <p class="text-[10px] text-slate-400">${w(e.country)} · Verified buyer</p>
                </div>
              </div>
            </div>`).join("")}
        </div>

        <div class="mt-6 bg-white/[.06] border border-white/10 rounded-2xl overflow-hidden">
          <button type="button" data-acc="trust-reviews-more" aria-expanded="false" class="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-white/[.04] transition">
            <span class="flex items-center gap-2.5">
              <i data-lucide="message-circle-heart" class="w-5 h-5 text-emerald-300"></i>
              <span class="text-sm font-black text-white">Why thousands of families trust ${K}</span>
            </span>
            <span data-acc-icon="trust-reviews-more" class="shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300"><i data-lucide="chevron-down" class="w-5 h-5 text-slate-300"></i></span>
          </button>
          <div data-acc-body="trust-reviews-more" class="trust-acc-body" data-open="0">
            <div class="px-4 sm:px-5 pb-5 pt-1 border-t border-white/10 text-[13px] text-slate-300 leading-relaxed">
              <p class="mt-2">Every listing on ${K} comes with real product details, clear pricing, secure checkout and tracked worldwide delivery. We read and verify customer feedback continuously, and our team responds to every review — good or bad — to keep your shopping experience fair, honest and worry-free.</p>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                ${[{icon:"shield-check",v:"100%",l:"secure checkout"},{icon:"globe",v:"200+",l:"countries served"},{icon:"package-search",v:"Real-time",l:"order tracking"},{icon:"headphones",v:"24/7",l:"human support"}].map(e=>`
                  <div class="bg-white/[.05] border border-white/10 rounded-xl p-3 text-center">
                    <p class="text-base font-black text-emerald-300">${e.v}</p>
                    <p class="text-[10px] text-slate-400 mt-0.5">${e.l}</p>
                  </div>`).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`}function h(e,t,a){return`<li><a href="${e}"  class="text-xs text-gray-600 hover:text-blue-600 transition">${t}</a></li>`}function Fe(){const e=le(),t=e.brand_name||e.site_name||N,a=e.brand_logo||e.brand_header_logo||e.brand_footer_logo||"/w-logo.svg",r=e.brand_slogan||e.site_tagline||"GLOBAL SHOPPING · WORLDWIDE DELIVERY";return`
    <footer class="bg-gray-50 border-t border-gray-200">
      <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-9 pb-7 border-b border-gray-200">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
              <img src="${w(a)}" alt="${w(t)}" class="w-7 h-7 object-contain" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex'">
              <span style="display:none">${oe("w-7 h-7")}</span>
            </div>
            <div>
              <p class="text-sm font-black text-gray-900 leading-none">${w(t)}</p>
              <p class="text-[10px] text-gray-500 mt-1 font-semibold tracking-wide">${w(r)}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 text-[11px] font-bold text-gray-500">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200"><i data-lucide="lock" class="w-3.5 h-3.5 text-emerald-600"></i> SSL Secure</span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200"><i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-600"></i> Secure Checkout</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6 gap-y-9 sm:gap-x-10">
          <div>
            <h4 class="text-xs font-black text-gray-900 uppercase tracking-widest mb-3.5">Company</h4>
            <ul class="space-y-2.5">
              ${h("/about.html","About Us")}
              ${h("/team.html","Our Team")}
              ${h("/contact.html","Contact Us")}
              ${h("/help.html","Help Center")}
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-black text-gray-900 uppercase tracking-widest mb-3.5">Legal</h4>
            <ul class="space-y-2.5">
              ${h("/privacy.html","Privacy Policy")}
              ${h("/terms.html","Terms & Conditions")}
              ${h("/refund-policy.html","Refund Policy")}
              ${h("/shipping-policy.html","Shipping Policy")}
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-black text-gray-900 uppercase tracking-widest mb-3.5">Account</h4>
            <ul class="space-y-2.5">
              ${h("/account.html","My Account")}
              ${h("/auth.html","Sign In")}
              ${h("/auth.html","Register / Create Account")}
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-black text-gray-900 uppercase tracking-widest mb-3.5">Support</h4>
            <ul class="space-y-2.5">
              ${h("mailto:"+"support@weverseonlineshop.com","Email Support")}
              ${h("/help.html","FAQ")}
              ${h("/contact.html","Contact Us")}
            </ul>
          </div>
        </div>

        <p class="text-center text-[11px] text-gray-400 mt-10">© ${new Date().getFullYear()} ${w(t)}. All rights reserved.</p>
      </div>
    </footer>`}function Ne(e){e.addEventListener("click",t=>{const a=t.target.closest("[data-acc]");if(!a)return;const r=a.dataset.acc,n=e.querySelector(`[data-acc-body="${r}"]`),l=e.querySelector(`[data-acc-icon="${r}"]`);if(!n)return;n.dataset.open==="1"?(n.style.maxHeight="0px",n.style.opacity="0",n.dataset.open="0",l.classList.remove("rotate-180"),a.setAttribute("aria-expanded","false")):(n.style.maxHeight=n.scrollHeight+"px",n.style.opacity="1",n.dataset.open="1",l.classList.add("rotate-180"),a.setAttribute("aria-expanded","true"))})}function X(e){const t=document.querySelectorAll("[data-bg-slot]");t.length&&t.forEach(a=>{const r=a.dataset.bgSlot;r==="trust_promo"?a.innerHTML=H(e.trust_promo_bg_image,e.trust_promo_bg_video):r==="reviews"&&(a.innerHTML=H(e.reviews_bg_image,e.reviews_bg_video))})}function qe(){if(document.getElementById("trust-info-style"))return;const e=document.createElement("style");e.id="trust-info-style",e.textContent=`
    .trust-acc-body{overflow:hidden;max-height:0;opacity:0;transition:max-height .38s cubic-bezier(.2,.8,.2,1),opacity .28s ease}
    .trust-acc-body[data-open="1"]{opacity:1}`,document.head.appendChild(e)}async function ee(){const e=document.getElementById("trust-info-area");if(!e)return;if(qe(),e.innerHTML=[Oe(),He(),Ue(),Re(),Fe()].join(""),window.lucide)try{lucide.createIcons()}catch{}Ne(e);let t={...k};try{t=await I()}catch{}X(t),window.addEventListener("promo-backgrounds-updated",()=>{I().then(X).catch(()=>{})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ee):ee();const C=(e,t=800)=>`https://images.pexels.com/photos/${e}/pexels-photo-${e}.jpeg?auto=compress&cs=tinysrgb&w=${t}`,te={car:[10054672,11836424,30809411,31458555]};function p(e,t){const a=[];return e.forEach(r=>a.push(C(r,1200))),t.forEach(r=>a.push(C(r,1e3))),a}function ae(e,t=12){const a=[];for(let r=0;r<t;r++)a.push(C(e[r%e.length],1e3));return a}function b(e,t){const a=e.map((n,l)=>C(n,l<3?1200:1e3)),r=t.map(n=>C(n,1e3));return[...a,...r]}const $=[{property_id:"W10000",listing_type:"property",category:"Real Estate",title:"Cozy Starter Home with Updated Kitchen",description:"Perfect first home for a small family or couple starting out. This charming one-story house features a renovated kitchen with modern appliances, hardwood floors throughout, and a private backyard. The living room gets plenty of natural light through large windows. Located on a quiet street close to schools and a community park. Recently repainted exterior and a new roof installed two years ago. An excellent value in a growing neighborhood.",price:2e4,currency:"USD",country:"United States",country_code:"US",state:"Ohio",city:"Columbus",town:"Hilliard",bedrooms:2,bathrooms:1,building_size:"850 sqft",land_size:"0.15 acres",parking_spaces:1,property_type:"Single-Family Home",furnished:"Unfurnished",listing_status:"sale",images:p([8583638,31602311,3958958],[30386991,19836790,4940609,6663039,19846354,5900807,7546775,7167984,19916712,12908582]),features:["Updated Kitchen","Hardwood Floors","New Roof","Private Backyard","Near Schools","Quiet Street","Carport"]},{property_id:"W10001",listing_type:"property",category:"Real Estate",title:"Spacious Two-Storey Family Home with Garage",description:"A well-maintained two-storey family home in a friendly suburban neighborhood. The main floor features an open living and dining area, a practical kitchen with breakfast bar, and a half bath. Upstairs offers three comfortable bedrooms and a full bathroom. The finished basement provides extra living space or a home office. Two-car attached garage and a level backyard perfect for kids. Walk to elementary school and local shops.",price:4e4,currency:"USD",country:"United States",country_code:"US",state:"Texas",city:"Austin",town:"Round Rock",bedrooms:3,bathrooms:2,building_size:"1,750 sqft",land_size:"0.2 acres",parking_spaces:2,property_type:"Single-Family Home",furnished:"Unfurnished",listing_status:"sale",images:p([32802992,18098285,33388518],[7061677,5502219,17158647,37184182,36777913,7045947,27359993,18071801,35539075,10182862]),features:["2-Car Garage","Finished Basement","Open Floor Plan","Breakfast Bar","Level Backyard","Walk to School","Air Conditioning"]},{property_id:"W10002",listing_type:"property",category:"Real Estate",title:"Classic Cape Cod with Black Shutters",description:"A timeless Cape Cod-style home with white clapboard siding and classic black shutters. The cozy living room features a wood-burning fireplace and built-in bookshelves. The kitchen has been updated with granite countertops and stainless steel appliances. Two bedrooms on the main level and a finished attic space used as a third bedroom or office. A picket fence and mature landscaping give this home excellent curb appeal. Located in an established neighborhood close to downtown.",price:2e4,currency:"USD",country:"United States",country_code:"US",state:"Massachusetts",city:"Boston",town:"Quincy",bedrooms:3,bathrooms:1,building_size:"1,200 sqft",land_size:"0.12 acres",parking_spaces:1,property_type:"Cape Cod",furnished:"Unfurnished",listing_status:"sale",images:p([33607464,34933247,8031882],[12119320,8146322,36841749,31525131,28457986,5998031,5178059,10628459]),features:["Fireplace","Granite Countertops","Picket Fence","Mature Landscaping","Finished Attic","Built-in Bookshelves","Near Downtown"]},{property_id:"W10003",listing_type:"property",category:"Real Estate",title:"Income-Producing Duplex — Live in One, Rent the Other",description:"A solid two-family duplex offering excellent income potential. Each unit has two bedrooms, one bathroom, a living room, and a kitchen. Separate utilities and private entrances for each unit. The property has been well-maintained with updated electrical and a five-year-old roof. Both units are currently rented with reliable tenants. A great investment opportunity or house-hack setup for an owner-occupant. Conveniently located near public transit and shopping.",price:4e4,currency:"USD",country:"Canada",country_code:"CA",state:"Ontario",city:"Toronto",town:"Scarborough",bedrooms:4,bathrooms:2,building_size:"2,200 sqft",land_size:"0.18 acres",parking_spaces:4,property_type:"Duplex",furnished:"Unfurnished",listing_status:"sale",images:p([32622694,9869371,12577414],[8082242,6021777,28586197,3214064,4469177,9193637,7534282,19866415,9439256]),features:["Two Units","Separate Utilities","Private Entrances","Updated Electrical","New Roof","Rented Units","Near Transit","Investment Property"]},{property_id:"W10004",listing_type:"property",category:"Real Estate",title:"Fully Renovated Ranch House on Quiet Cul-de-Sac",description:"A beautifully renovated single-story ranch home on a desirable cul-de-sac. The renovation opened up the floor plan, creating a seamless flow between the living room, dining area, and kitchen. New kitchen includes soft-close cabinets, quartz countertops, and a tile backsplash. Both bathrooms have been completely updated. New flooring, fresh paint, and updated lighting throughout. The large backyard has a new patio and fire pit area. Move-in ready with nothing to do.",price:4e4,currency:"USD",country:"United States",country_code:"US",state:"North Carolina",city:"Charlotte",town:"Matthews",bedrooms:3,bathrooms:2,building_size:"1,500 sqft",land_size:"0.25 acres",parking_spaces:2,property_type:"Ranch House",furnished:"Unfurnished",listing_status:"sale",images:p([5785100,29350636,1396132],[19846360,37153440,29304261,7546556,29086916,36411723,27623999,15456260,8583822]),features:["Fully Renovated","Open Floor Plan","Quartz Countertops","New Flooring","Updated Bathrooms","Patio","Fire Pit","Cul-de-Sac"]},{property_id:"W10005",listing_type:"property",category:"Apartments",title:"Bright Two-Bedroom Apartment Near Riverfront",description:"A bright and airy two-bedroom apartment on the third floor of a well-managed building. The open-concept kitchen features modern appliances and a breakfast bar. Large windows in the living room offer pleasant city views. Both bedrooms are generously sized with good closet space. Building amenities include 24/7 concierge, fitness center, and rooftop terrace. Steps from the riverfront promenade, cafes, and public transit. Perfect for professionals seeking urban convenience.",price:1450,price_period:"month",currency:"USD",country:"United Kingdom",country_code:"GB",state:"England",city:"London",town:"Canary Wharf",bedrooms:2,bathrooms:2,building_size:"850 sqft",land_size:null,parking_spaces:1,property_type:"Apartment",furnished:"Furnished",listing_status:"rent",images:p([18729245,18587809,18153132],[20681936,7005291,17158655,29086914,6890406,7005268,11119777,28962508,36777945]),features:["Concierge","Fitness Center","Rooftop Terrace","Air Conditioning","Balcony","Pet Friendly","Elevator","Near Transit"]},{property_id:"W10006",listing_type:"property",category:"Villas",title:"Modern Villa with Garden and Terrace",description:"A contemporary villa offering comfortable family living at an accessible price point. The ground floor features an open-plan living and dining area with direct garden access. The kitchen is fully fitted with quality appliances. Upstairs, three bedrooms share a family bathroom, and the master has an en-suite. A covered terrace overlooks the landscaped garden with a lawn area. Located in a family-friendly development with shared playground and walking paths.",price:4e4,currency:"USD",country:"Spain",country_code:"ES",state:"Andalusia",city:"Marbella",town:"San Pedro de Alcántara",bedrooms:3,bathrooms:2,building_size:"1,800 sqft",land_size:"0.3 acres",parking_spaces:2,property_type:"Villa",furnished:"Unfurnished",listing_status:"sale",images:p([7031595,7031594,17174766],[28054895,6908561,12700442,34574606,30767888,38071642,31525748,20193734,8134745]),features:["Garden","Covered Terrace","Open Plan","En-suite Master","Family Bathroom","Playground Nearby","Air Conditioning"]},{property_id:"W10007",listing_type:"property",category:"Mansions",title:"Grand Estate with Private Gardens and Pool",description:"An impressive estate set on 1.5 acres of manicured grounds. The grand foyer leads to a formal living room with high ceilings and a fireplace. The gourmet kitchen features professional-grade appliances and a large island. The master suite includes a sitting area and spa-like bathroom. Additional amenities include a home gym, game room, and climate-controlled wine storage. The outdoor oasis includes a pool, spa, and outdoor kitchen. A rare offering in a prestigious neighborhood.",price:6e4,currency:"USD",country:"France",country_code:"FR",state:"Île-de-France",city:"Paris",town:"Neuilly-sur-Seine",bedrooms:6,bathrooms:5,building_size:"5,500 sqft",land_size:"1.5 acres",parking_spaces:4,property_type:"Mansion",furnished:"Unfurnished",listing_status:"sale",images:p([38255315,7045711,31685810],[37132127,6987730,18285887,10584374,18285944,4682136,35189677,16513601,16256067,19714324,37885738,30725657]),features:["Pool & Spa","Outdoor Kitchen","Wine Storage","Home Gym","Game Room","Fireplace","4-Car Garage","Smart Home"]},{property_id:"W10008",listing_type:"property",category:"Beach Houses",title:"Beachfront Cottage with Ocean Views",description:"A charming beachfront cottage with direct ocean access and stunning sea views. The open living area flows to a large deck perfect for entertaining or relaxing to the sound of waves. The kitchen features coastal-inspired cabinetry and stainless steel appliances. Two bedrooms and one bathroom with a walk-in shower. Steps from a pristine sandy beach and a short walk to local cafes. A turnkey coastal retreat with strong vacation rental potential.",price:2200,price_period:"month",currency:"USD",country:"Australia",country_code:"AU",state:"Queensland",city:"Gold Coast",town:"Burleigh Heads",bedrooms:2,bathrooms:1,building_size:"1,000 sqft",land_size:"0.1 acres",parking_spaces:1,property_type:"Beach Cottage",furnished:"Furnished",listing_status:"rent",images:p([34958535,35713601,28352505],[28862441,6908562,30070551,9890650,7534166,31466720,25972319]),features:["Ocean View","Direct Beach Access","Deck","Air Conditioning","Outdoor Shower","Furnished","Walk to Cafes","Pet Friendly"]},{property_id:"W10009",listing_type:"property",category:"Luxury Condominiums",title:"Skyline Condo with Floor-to-Ceiling Windows",description:"An ultra-modern luxury condominium on the 35th floor with breathtaking skyline views. The residence features an open floor plan, designer kitchen with quartz countertops, and spa-like bathrooms. Building amenities include a sky lounge, indoor pool, fitness center, and 24-hour valet. Steps from fine dining, luxury shopping, and the business district. A premier address for the discerning urbanite seeking a lock-and-leave lifestyle.",price:4200,price_period:"month",currency:"USD",country:"United Arab Emirates",country_code:"AE",state:"Dubai",city:"Dubai",town:"Downtown Dubai",bedrooms:2,bathrooms:2,building_size:"1,200 sqft",land_size:null,parking_spaces:1,property_type:"Condominium",furnished:"Furnished",listing_status:"rent",images:p([30506378,29560596,16110999],[29012619,6903160,34961617,18285949,13722861,33599113,5331349,9422447,2876753,11593501]),features:["Sky Lounge","Indoor Pool","Fitness Center","24h Valet","Concierge","Smart Home","Balcony","City View"]},{property_id:"W10010",listing_type:"property",category:"Farm Houses",title:"Restored Farmhouse with 5 Acres and Barn",description:"A beautifully restored 19th-century farmhouse on 5 acres of pastoral land. The home retains its original charm with exposed beams and stone fireplaces while offering modern comforts. The property includes a restored barn suitable for equestrian use, a chicken coop, and established vegetable gardens. Peaceful country living with easy access to the nearby town. Ideal for a hobby farm, equestrian setup, or those seeking space and tranquility.",price:4e4,currency:"USD",country:"Canada",country_code:"CA",state:"Ontario",city:"Ottawa",town:"Manotick",bedrooms:3,bathrooms:2,building_size:"2,200 sqft",land_size:"5 acres",parking_spaces:4,property_type:"Farmhouse",furnished:"Unfurnished",listing_status:"sale",images:p([32940727,17626748,7255464],[7746476,10772180,7167993,15456211,3999070,29887333,2058752,18093631]),features:["Barn","5 Acres","Fireplace","Garden","Chicken Coop","Equestrian Ready","Exposed Beams","Solar Panels"]},{property_id:"W10011",listing_type:"property",category:"Commercial Buildings",title:"Prime Retail Building on High-Traffic Avenue",description:"A strategically located commercial building on a high-traffic avenue with excellent visibility. The ground floor offers 2,500 sqft of retail space with large storefront windows. The upper floor features modern office space with a separate entrance. Ample parking for 20 vehicles and excellent signage opportunities. Strong rental history with a long-term tenant. A solid investment in a growing commercial corridor.",price:6e4,currency:"USD",country:"Germany",country_code:"DE",state:"Bavaria",city:"Munich",town:"Schwabing",bedrooms:null,bathrooms:2,building_size:"4,500 sqft",land_size:"0.3 acres",parking_spaces:20,property_type:"Commercial",furnished:"Unfurnished",listing_status:"sale",images:p([29854540,32367382,4889296],[32549955,37080685,36631701,18999482,5324874,6899357,11251672,8919461]),features:["High Traffic","Storefront Windows","Office Space","Parking 20","Signage Available","Separate Entrance","Long-Term Tenant"]},{property_id:"W10012",listing_type:"property",category:"Real Estate",title:"Affordable Brick Home with Large Backyard",description:"A solid brick home offering great value for a growing family. The main floor has a comfortable living room, formal dining room, and a practical kitchen with plenty of cabinet space. Three bedrooms upstairs with a shared full bathroom. The large fenced backyard is perfect for children and pets, with a storage shed and room for a garden. Attached single garage and a long driveway for extra parking. Located in an established neighborhood near parks and schools.",price:2e4,currency:"USD",country:"United States",country_code:"US",state:"Indiana",city:"Indianapolis",town:"Fishers",bedrooms:3,bathrooms:1,building_size:"1,400 sqft",land_size:"0.22 acres",parking_spaces:3,property_type:"Single-Family Home",furnished:"Unfurnished",listing_status:"sale",images:p([17086063,32972999,18480410],[6980724,8092433,12700430,12700517,19541364,11036444,18869571,18041828,9702373]),features:["Brick Construction","Fenced Yard","Attached Garage","Storage Shed","Near Parks","Near Schools","Formal Dining Room"]},{property_id:"W10013",listing_type:"property",category:"Hotels",title:"Boutique Hotel Near Historic City Center",description:"A charming 24-room boutique hotel steps from the historic city center. Each room is uniquely decorated with local art and premium furnishings. The property features a restaurant, bar, courtyard garden, and rooftop terrace. Strong occupancy rates and excellent reviews across all platforms. Turnkey operation with trained staff and established booking systems. A rare opportunity in a top tourist destination.",price:6e4,currency:"USD",country:"Italy",country_code:"IT",state:"Tuscany",city:"Florence",town:"Oltrarno",bedrooms:24,bathrooms:24,building_size:"10,000 sqft",land_size:"0.5 acres",parking_spaces:12,property_type:"Hotel",furnished:"Furnished",listing_status:"sale",images:p([34487094,33791950,28238364],[695193,34496701,36767624,32568165,4784165,33649128,30525944,7512139,14036253]),features:["Restaurant","Bar","Courtyard Garden","Rooftop Terrace","24 Rooms","Reception","Turnkey Operation","Laundry"]},{property_id:"W10014",listing_type:"property",category:"Beach Houses",title:"Modern Beach House with Wraparound Deck",description:"A modern beach house designed for indoor-outdoor coastal living. The open living area features vaulted ceilings and large windows capturing ocean views. The kitchen has been updated with coastal-inspired finishes and stainless steel appliances. Three bedrooms including a master suite with a private balcony. The wraparound deck is perfect for entertaining, with stairs leading directly to the beach. Hurricane-rated windows and a new roof provide peace of mind.",price:6e4,currency:"USD",country:"Australia",country_code:"AU",state:"Queensland",city:"Gold Coast",town:"Surfers Paradise",bedrooms:3,bathrooms:2,building_size:"1,800 sqft",land_size:"0.18 acres",parking_spaces:2,property_type:"Beach House",furnished:"Furnished",listing_status:"sale",images:p([29334715,32506603,36410769],[19899070,18033166,28054852,37436121,3144580,6394530,7031840,38188641,16974551]),features:["Ocean View","Wraparound Deck","Direct Beach Access","Hurricane Windows","Vaulted Ceilings","Master Balcony","Air Conditioning","Outdoor Shower"]},{property_id:"W10015",listing_type:"property",category:"Apartments",title:"Studio Apartment in Vibrant Arts District",description:"A stylish studio apartment in the vibrant arts district, perfect for first-time buyers or investors. The unit features an efficient layout with a modern kitchenette, updated bathroom, and a private balcony. The building offers a communal rooftop garden and secure bike storage. Walk to galleries, cafes, and public transit. Strong rental demand in this up-and-coming neighborhood makes it an excellent investment.",price:2e4,currency:"USD",country:"Netherlands",country_code:"NL",state:"North Holland",city:"Amsterdam",town:"Jordaan",bedrooms:1,bathrooms:1,building_size:"400 sqft",land_size:null,parking_spaces:0,property_type:"Studio Apartment",furnished:"Unfurnished",listing_status:"sale",images:p([28241644,31032064,16981072],[4208390,18897327,3701455,19857270,14343389,15241687]),features:["Balcony","Rooftop Garden","Bike Storage","Elevator","Near Transit","Walk to Cafes","Investment Potential"]},{property_id:"W10016",listing_type:"vehicle",category:"Cars",title:"Mercedes-Benz S-Class 2024 — Premium Sedan",description:"The 2024 Mercedes-Benz S-Class represents the pinnacle of luxury sedans. This flagship model features a 3.0L inline-6 turbo engine with EQ Boost delivering 429 horsepower. The cabin offers executive rear seating with massage, heated and ventilated Nappa leather seats, and a rear-seat entertainment system. The MBUX infotainment system includes a 12.8-inch OLED touchscreen with voice control. Advanced safety features include adaptive cruise control, lane-keeping assist, and a 360-degree camera. Immaculate condition with low mileage and full service history.",price:2e4,currency:"USD",country:"",country_code:"",state:null,city:null,town:null,bedrooms:null,bathrooms:null,building_size:null,land_size:null,parking_spaces:null,property_type:"Sedan",furnished:null,listing_status:"sale",images:ae(te.car),rating:4.9,rating_count:87,favorite_count:64,features:["3.0L Inline-6 Turbo","429 HP","Nappa Leather","MBUX System","Adaptive Cruise","360 Camera","Panoramic Roof","Low Mileage"]},{property_id:"W10017",listing_type:"vehicle",category:"Cars",title:"Mercedes-Benz GLE 450 2025 — Luxury SUV",description:"The 2025 Mercedes-Benz GLE 450 combines SUV capability with luxury refinement. Powered by a 3.0L inline-6 turbo engine with EQ Boost producing 375 horsepower and 4MATIC all-wheel drive. The spacious interior features MB-Tex upholstery, a 12.3-inch digital dashboard, and a Burmester sound system. Seven-seat configuration with power-folding third row. Includes trailer hitch, air suspension, and off-road driving modes. One owner, pristine condition, factory warranty active.",price:2e4,currency:"USD",country:"",country_code:"",state:null,city:null,town:null,bedrooms:null,bathrooms:null,building_size:null,land_size:null,parking_spaces:null,property_type:"SUV",furnished:null,listing_status:"sale",images:ae(te.car),rating:4.8,rating_count:65,favorite_count:48,features:["3.0L Inline-6 Turbo","375 HP","4MATIC AWD","7 Seats","Air Suspension","Burmester Audio","Trailer Hitch","Warranty Active"]},{property_id:"W10018",listing_type:"property",category:"International Homes",title:"Craftsman Bungalow with Covered Porch in Portland",description:"A charming 1928 Craftsman bungalow in the heart of Portland's Alberta Arts District. This lovingly maintained home features original hardwood floors, built-in bookshelves, and a wood-burning fireplace. The renovated kitchen opens to a cozy dining nook with garden views. Two main-floor bedrooms share a fully updated bathroom, with a third bedroom and second bathroom upstairs. The covered front porch is perfect for morning coffee, and the fenced backyard includes raised garden beds and a detached one-car garage. Walk to cafes, galleries, and weekly farmers market.",price:2e4,currency:"USD",country:"United States",country_code:"US",state:"Oregon",city:"Portland",town:"Alberta Arts District",bedrooms:3,bathrooms:2,building_size:"1,450 sqft",land_size:"0.12 acres",parking_spaces:1,property_type:"Craftsman Bungalow",furnished:"Unfurnished",listing_status:"sale",year_built:1928,images:b([5353939,6835077,5353946,15888628,5524205,12332182,8031883,35698264,33327061,12227640],[34963015,7168051,33693815,9102822,33054908,33994485]),rating:4.5,rating_count:38,favorite_count:25,features:["Hardwood Floors","Wood-Burning Fireplace","Covered Porch","Built-in Bookshelves","Detached Garage","Raised Garden Beds","Near Farmers Market","Updated Plumbing"]},{property_id:"W10019",listing_type:"property",category:"International Homes",title:"Restored Victorian Heritage Home in Vancouver",description:"A grand 1905 Victorian heritage home on a tree-lined street in Vancouver's Kitsilano neighbourhood. This meticulously restored home retains its original woodwork, stained glass windows, and ornate fireplaces while offering modern comforts. The main floor features a formal parlour, dining room, and a renovated chef's kitchen with butler's pantry. Four bedrooms across the upper two floors, including a master suite with sitting area. The landscaped garden includes a patio and detached two-car garage. Steps from Kitsilano Beach and West 4th Avenue shopping.",price:4e4,currency:"USD",country:"Canada",country_code:"CA",state:"British Columbia",city:"Vancouver",town:"Kitsilano",bedrooms:4,bathrooms:3,building_size:"2,400 sqft",land_size:"0.15 acres",parking_spaces:2,property_type:"Victorian Heritage Home",furnished:"Unfurnished",listing_status:"sale",year_built:1905,images:b([33835032,37091039,30419060,35107473,37091037,36770370,35014869,36022211,36770371,15875708],[6489441,36260762,3718434,36099150,8135289,37859439]),rating:4.7,rating_count:44,favorite_count:31,features:["Heritage Designation","Original Woodwork","Stained Glass Windows","Ornate Fireplaces","Butler's Pantry","Landscaped Garden","Detached Garage","Near Beach"]},{property_id:"W10020",listing_type:"property",category:"International Homes",title:"Victorian Terraced House Near Manchester City Centre",description:"A characterful 1895 Victorian terraced house in the popular Chorlton area of Manchester. This home has been thoughtfully updated while preserving period features including sash windows, high ceilings, and cast-iron fireplaces. The ground floor offers a bay-windowed living room, a separate dining room, and a modern galley kitchen leading to a compact rear courtyard garden. Two double bedrooms upstairs share a contemporary family bathroom. Excellent transport links with the Metrolink tram a three-minute walk away. Ideal for first-time buyers or as a city base.",price:2e4,currency:"USD",country:"United Kingdom",country_code:"GB",state:"England",city:"Manchester",town:"Chorlton",bedrooms:2,bathrooms:1,building_size:"850 sqft",land_size:"0.03 acres",parking_spaces:0,property_type:"Victorian Terraced House",furnished:"Unfurnished",listing_status:"sale",year_built:1895,images:b([35402056,30683472,30683465,35402058,37623595,29207330,37623824,15366525,13657362,16375856],[30992365,38688304,4906250,14613397,20053927,7031719]),rating:4.3,rating_count:27,favorite_count:18,features:["Period Features","Sash Windows","Cast-Iron Fireplaces","Rear Courtyard Garden","Near Metrolink","Walk to Cafes","Double Glazing","Central Heating"]},{property_id:"W10021",listing_type:"property",category:"International Homes",title:"Contemporary Family Home with Alfresco Dining in Melbourne",description:"A modern 2015 family home in Melbourne's thriving eastern suburb of Box Hill. The open-plan living and dining area flows seamlessly to an alfresco entertaining zone with a built-in BBQ and paved patio. The kitchen features stone benchtops, a walk-in pantry, and premium stainless steel appliances. Four bedrooms include a master retreat with walk-in robe and en-suite. Ducted air conditioning, solar panels, and a double remote garage with internal access. Walking distance to Box Hill Central shopping, top-rated schools, and parklands.",price:6e4,currency:"USD",country:"Australia",country_code:"AU",state:"Victoria",city:"Melbourne",town:"Box Hill",bedrooms:4,bathrooms:2,building_size:"2,100 sqft",land_size:"0.2 acres",parking_spaces:2,property_type:"Contemporary Family Home",furnished:"Unfurnished",listing_status:"sale",year_built:2015,images:b([30580640,20296321,7031405,18078684,27953061,32115995,7031411,1974596,7031581,15422346],[38369490,36511383,30816307,5178074,7031216,15657940]),rating:4.6,rating_count:52,favorite_count:36,features:["Open-Plan Living","Ducted Air Conditioning","Alfresco Dining","Solar Panels","Stone Benchtops","Walk-in Pantry","Double Garage","Near Top Schools"]},{property_id:"W10022",listing_type:"property",category:"International Homes",title:"Modern Energy-Efficient Apartment in Berlin Mitte",description:"A sleek 2018 apartment in a boutique energy-efficient development in Berlin's sought-after Mitte district. The residence features underfloor heating throughout, floor-to-ceiling windows with electric blinds, and a high-spec built-in kitchen with integrated appliances. Three bedrooms and two bathrooms, including an en-suite master. The private balcony overlooks a quiet inner courtyard. Building amenities include a lift, bicycle storage room, and a communal rooftop garden. Two minutes from the Rosenthaler Platz U-Bahn station and surrounded by galleries, restaurants, and shops.",price:6e4,currency:"USD",country:"Germany",country_code:"DE",state:"Berlin",city:"Berlin",town:"Mitte",bedrooms:3,bathrooms:2,building_size:"1,350 sqft",land_size:null,parking_spaces:1,property_type:"Modern Apartment",furnished:"Unfurnished",listing_status:"sale",year_built:2018,images:b([33244441,21071043,22927128,31656143,9170385,31656173,14424262,27459248,37224965,13812522],[7534560,7614540,7168026,31602336,19916748,28957826]),rating:4.6,rating_count:41,favorite_count:28,features:["Underfloor Heating","Floor-to-Ceiling Windows","Built-in Kitchen","Private Balcony","Elevator","Bicycle Storage","Rooftop Garden","Energy Efficient"]},{property_id:"W10023",listing_type:"property",category:"International Homes",title:"18th-Century Château with Vineyard Views in Provence",description:"A magnificent 1780 château set on 4.5 acres of manicured grounds in the heart of Provence. The grand entrance hall leads to formal reception rooms with original marble fireplaces, tall French windows, and parquet de chêne flooring. The gourmet kitchen opens to a shaded dining terrace overlooking the swimming pool and formal gardens. Eight bedrooms and six bathrooms across three floors, including a master wing with dressing room and private salon. The wine cellar is carved into the natural rock. Staff quarters and a helipad complete this exceptional estate. Thirty minutes from Avignon TGV station.",price:6e4,currency:"USD",country:"France",country_code:"FR",state:"Provence-Alpes-Côte d'Azur",city:"Avignon",town:"Saint-Rémy-de-Provence",bedrooms:8,bathrooms:6,building_size:"6,500 sqft",land_size:"4.5 acres",parking_spaces:6,property_type:"Château",furnished:"Partially Furnished",listing_status:"sale",year_built:1780,images:b([37305886,37437492,37878477,16754892,9088004,17987528,8143677,33738275,36794346,38021449],[14011664,36056363,18285884,36777559,36099777,7535063,8142046,6297086,12700519,30557566,34290550,15580470]),rating:4.9,rating_count:33,favorite_count:52,features:["Vineyard Views","Swimming Pool","Formal Gardens","Wine Cellar","Marble Fireplaces","Staff Quarters","Helipad","Smart Home System"]},{property_id:"W10024",listing_type:"property",category:"International Homes",title:"Restored Tuscan Farmhouse with Olive Grove",description:"A beautifully restored 1850 stone farmhouse nestled among 2.5 acres of olive groves in the Tuscan countryside near San Casciano. The home retains its authentic character with exposed chestnut beams, terracotta tile floors, and a wood-fired bread oven in the garden. The ground floor has a farmhouse kitchen with a stone sink, a dining room with fireplace, and a sitting room. Four bedrooms and three bathrooms, including a master with en-suite. The infinity-edge swimming pool overlooks rolling vineyards and the Chianti hills. An outdoor kitchen and dining area make this perfect for entertaining. Forty-five minutes from Florence.",price:4e4,currency:"USD",country:"Italy",country_code:"IT",state:"Tuscany",city:"Florence",town:"San Casciano in Val di Pesa",bedrooms:4,bathrooms:3,building_size:"2,800 sqft",land_size:"2.5 acres",parking_spaces:3,property_type:"Tuscan Farmhouse",furnished:"Partially Furnished",listing_status:"sale",year_built:1850,images:b([7455600,3714192,37553978,30259458,34828574,16879642,36883157,5063027,37760096,37436223],[27302957,2079246,7163654,30089083,20276493,30463423]),rating:4.8,rating_count:47,favorite_count:39,features:["Olive Grove","Stone Construction","Chestnut Beams","Terracotta Floors","Wood-fired Oven","Infinity Pool","Vineyard Views","Outdoor Kitchen"]},{property_id:"W10025",listing_type:"property",category:"International Homes",title:"Apartment with Catalan Vault Ceiling in Barcelona Gothic Quarter",description:"A distinctive apartment in Barcelona's Gothic Quarter, featuring original Catalan vault ceilings and exposed brick walls. The 750 sqft layout includes a bright living area with a small balcony overlooking a historic lane, a compact but fully equipped kitchen, and two comfortable bedrooms sharing one bathroom. The building has a restored lift and a communal rooftop terrace with city views. Steps from Las Ramblas, the Boqueria market, and Barcelona Cathedral. An excellent entry point into one of Europe's most vibrant neighbourhoods.",price:2e4,currency:"USD",country:"Spain",country_code:"ES",state:"Catalonia",city:"Barcelona",town:"Barri Gòtic",bedrooms:2,bathrooms:1,building_size:"750 sqft",land_size:null,parking_spaces:0,property_type:"Apartment",furnished:"Unfurnished",listing_status:"sale",year_built:1900,images:b([38510040,32770929,17274632,17159074,17159138,15949268,17274520,17274519,16674384,14917630],[33537442,12513477,31145676,57686,19866402,34266122]),rating:4.4,rating_count:35,favorite_count:22,features:["Catalan Vault Ceiling","Exposed Brick","Balcony","Rooftop Terrace","Near Las Ramblas","Walk to Beach","Air Conditioning","Elevator"]},{property_id:"W10026",listing_type:"property",category:"International Homes",title:"Alpine Chalet with Matterhorn Views in Zermatt",description:"An architect-designed 2020 chalet in the car-free alpine resort of Zermatt, offering uninterrupted views of the Matterhorn. The great room features floor-to-ceiling windows, a double-height stone fireplace, and an open chef's kitchen with Gaggenau appliances. Six en-suite bedrooms across three levels, each with mountain views. The lower level includes a wellness area with sauna, steam room, and a ski room with boot warmers. Underfloor heating throughout, triple-glazed windows, and a smart home system. A triple garage is accessible via the underground car park tunnel. A rare offering in one of the world's premier ski destinations.",price:6e4,currency:"USD",country:"Switzerland",country_code:"CH",state:"Valais",city:"Zermatt",town:"Winkelmatten",bedrooms:6,bathrooms:5,building_size:"4,200 sqft",land_size:"0.8 acres",parking_spaces:3,property_type:"Alpine Chalet",furnished:"Fully Furnished",listing_status:"sale",year_built:2020,images:b([38965501,38965502,31900824,32129370,34229769,16396624,8904544,30276941,33659164,17966432],[12713296,35189706,26886813,18285931,36420270,18285439]),rating:4.9,rating_count:29,favorite_count:44,features:["Matterhorn Views","Floor-to-Ceiling Windows","Double-Height Fireplace","Sauna & Steam Room","Ski Room","Underfloor Heating","Triple Garage","Smart Home System"]},{property_id:"W10027",listing_type:"property",category:"International Homes",title:"Waterfront Scandinavian Cabin in Stockholm Archipelago",description:"A contemporary 2010 Scandinavian cabin on the Stockholm archipelago island of Vaxholm. The open-plan living area features a wood-burning stove, large picture windows, and a designer kitchen with island. Three bedrooms and two bathrooms, with the master opening directly onto the deck. The 0.5-acre plot includes a private dock, a traditional wood-fired sauna by the water's edge, and mature pine forest surrounding the property. Triple-glazed windows and superior insulation ensure year-round comfort. A 30-minute ferry from Stockholm city centre. The perfect year-round retreat for nature lovers.",price:4e4,currency:"USD",country:"Sweden",country_code:"SE",state:"Stockholm",city:"Stockholm",town:"Vaxholm",bedrooms:3,bathrooms:2,building_size:"1,600 sqft",land_size:"0.5 acres",parking_spaces:1,property_type:"Scandinavian Cabin",furnished:"Partially Furnished",listing_status:"sale",year_built:2010,images:b([4406354,1365110,18274228,34164516,33143867,7911964,11642005,10608118,11539578,2294125],[29214399,10670947,2631746,8583816,6969997,7587477]),rating:4.6,rating_count:31,favorite_count:26,features:["Waterfront","Wood-fired Sauna","Wood-burning Stove","Private Dock","Large Deck","Triple-Glazed Windows","Forest Views","Ferry to City"]}],ze={W10000:[40.033,-83.1583],W10001:[30.5083,-97.6789],W10002:[42.2529,-71.0023],W10003:[43.7765,-79.2317],W10004:[35.1168,-80.7237],W10005:[51.5051,-.0196],W10006:[36.484,-4.9904],W10007:[48.8844,2.2691],W10008:[-28.089,153.4533],W10009:[25.1972,55.2744],W10010:[45.2269,-75.6831],W10011:[48.1615,11.578],W10012:[39.9556,-86.0139],W10013:[43.7666,11.2478],W10014:[-28.0027,153.4309],W10015:[52.3744,4.8821],W10018:[45.5615,-122.6501],W10019:[49.2643,-123.1542],W10020:[53.4431,-2.2729],W10021:[-37.8188,145.1252],W10022:[52.52,13.405],W10023:[43.7891,4.8317],W10024:[43.6586,11.1855],W10025:[41.3831,2.1767],W10026:[46.0207,7.7491],W10027:[59.4022,18.3533]};for(const e of $){const t=ze[e.property_id];t&&(e.latitude=t[0],e.longitude=t[1])}function W(e){const t=e.price.toLocaleString("en-US",{style:"currency",currency:e.currency||"USD",maximumFractionDigits:0});return e.price_period?`${t}/mo`:t}function je(e){if(!e||e.length!==2)return"";const t=e.toUpperCase().split("").map(a=>127462+a.charCodeAt(0)-65);return String.fromCodePoint(...t)}function v(e){if(e==null)return e;let t=String(e);return t=t.replace(/Stock\s+#?STK[-]?[\w-]*\.?/gi,""),t=t.replace(/\b(?:was\s+)?(?:curated|auto-created|created)\s+by\s+admin\s+ai(?:\s+on\s+[0-9TZ:.\-]+)?[^.]*\.?\s*/gi,""),t=t.replace(/\bscanned\s+by\s+[^.]*\.?\s*/gi,""),t=t.replace(/\bgenerated\s+by\s+ai\s+fallback\b/gi,"professionally prepared"),t=t.replace(/\b8K\s+AI[- ]?[Uu]pscaling(?:\s+[Ee]ngine)?\b/gi,"Neo Quantum Processor 8K"),t=t.replace(/\bAI[- ]?(?:managed|powered|curated|created|generated|product|listing|assistant|model|image|content|scan|repair|advertisement|marketing|architecture|automation|settings|chatbot|chat|upscaling)\b/gi,""),t=t.replace(/\bAdmin\s+AI\b/gi,""),t=t.replace(/\bAI\b/gi,""),t=t.replace(/\s{2,}/g," "),t=t.replace(/\s+([.,;:!?])/g,"$1"),t=t.replace(/^\s*[,.;:]+\s*|\s*[,.;:]+\s*$/g,""),t.trim()}function ce(e){return e&&(e.title=v(e.title),e.description=v(e.description),Array.isArray(e.features)&&(e.features=e.features.map(v).filter(Boolean)),Array.isArray(e.highlights)&&(e.highlights=e.highlights.map(v).filter(Boolean)),Array.isArray(e.tags)&&(e.tags=e.tags.map(v).filter(Boolean)),e)}const V=new Map($.map(e=>[e.property_id,e]));function Ve(e){return e.map(t=>V.get(t)).filter(Boolean)}let _=[],L=!1,S=null;function de(){return _}function Ze(){return L}const Ye=6e3;function Ke(e,t){return new Promise(a=>{const r=setTimeout(()=>a("__timeout__"),t);e.then(n=>{clearTimeout(r),a(n)},()=>{clearTimeout(r),a("__timeout__")})})}function pe(){return L?Promise.resolve(_):S||(S=(async()=>{try{const{supabase:e}=await m(async()=>{const{supabase:c}=await import("./supabase-client-nvpjTmO6.js");return{supabase:c}},[]),{listLocalShowroomListings:t}=await m(async()=>{const{listLocalShowroomListings:c}=await import("./local-showroom-store-JrQn_yOW.js");return{listLocalShowroomListings:c}},[]),a=await Ke(e.from("showroom_listings").select("*").eq("is_active",!0).order("created_at",{ascending:!1}),Ye),r=a==="__timeout__"?null:a.data,l=(a==="__timeout__"?null:a.error)||a==="__timeout__"?[]:r||[],i=new Set(l.map(c=>c.property_id));for(const c of t().filter(d=>d.is_active!==!1))c&&c.property_id&&!i.has(c.property_id)&&(i.add(c.property_id),l.push(c));_=l.map(c=>({...c,...c.specifications&&typeof c.specifications=="object"?c.specifications:{},images:Array.isArray(c.images)?c.images:[],features:Array.isArray(c.features)?c.features:[],highlights:Array.isArray(c.highlights)?c.highlights:[],rating:Number(c.rating)||0,rating_count:c.rating_count||0,favorite_count:c.favorite_count||0,price:Number(c.price)||0}));for(const c of _)V.set(c.property_id,c);return L=!0,_}catch{return L=!0,[]}finally{S=null}})(),S)}function ue(){const e=new Set,t=[];for(const a of _)e.has(a.property_id)||(e.add(a.property_id),t.push(a));for(const a of $)e.has(a.property_id)||(e.add(a.property_id),t.push(a));return t}function Qe(e){return V.get(e)||null}const gt=Object.freeze(Object.defineProperty({__proto__:null,SHOWROOM_LISTINGS:$,cleanListing:ce,cleanListingText:v,findListingById:Qe,flagEmoji:je,formatPrice:W,getAllListings:ue,getDBListings:de,getListingsByIds:Ve,isDBLoaded:Ze,loadDBListings:pe},Symbol.toStringTag,{value:"Module"})),Je="/fallback.svg";function f(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function he(e){return Array.isArray(e.images)?e.images.filter(Boolean):typeof e.images=="string"?[e.images]:[]}function M(e){return he(e)[0]||Je}function Xe(e){const t=parseFloat(e.real_price),a=parseFloat(e.price);return!(t>0)||!(a>0)||t<=a?null:{real:t,price:a,pct:Math.round((1-a/t)*100)}}function P(e){const t=Xe(e),a=W(e),r=t?W({price:t.real,currency:e.currency,price_period:e.price_period}):"",n=t?`<span class="text-gray-400 line-through">${r}</span> `:"",l=t?`<span class="inline-block bg-red-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">-${t.pct}%</span>`:"";return`${n}<span class="font-black">${a}</span> ${l}`}let x=[],D=!1;function et(e){const t=new Set,a=[];for(const r of e){if(!r)continue;const n=r.property_id||r.id;!n||t.has(n)||(t.add(n),a.push(r))}return a}async function ge(){if(D&&x.length)return x;try{let e=[];try{await pe(),e=de()||[]}catch{}const t=[];try{const{PRODUCT_LISTINGS:r}=await m(async()=>{const{PRODUCT_LISTINGS:s}=await import("./products-data-CGLFLAJM.js");return{PRODUCT_LISTINGS:s}},[]),{PRODUCT_EXTRA_LISTINGS:n}=await m(async()=>{const{PRODUCT_EXTRA_LISTINGS:s}=await import("./products-extra-DecCj9NU.js");return{PRODUCT_EXTRA_LISTINGS:s}},[]),{TRUCK_LISTINGS:l}=await m(async()=>{const{TRUCK_LISTINGS:s}=await import("./truck-data-DnyLExat.js");return{TRUCK_LISTINGS:s}},[]),{MOTORHOME_LISTINGS:i}=await m(async()=>{const{MOTORHOME_LISTINGS:s}=await import("./motorhome-data-SSjGu6g8.js");return{MOTORHOME_LISTINGS:s}},[]),{CAR_LISTINGS:o}=await m(async()=>{const{CAR_LISTINGS:s}=await import("./car-data-BE0Va4cl.js");return{CAR_LISTINGS:s}},[]),{PHONE_LISTINGS:c}=await m(async()=>{const{PHONE_LISTINGS:s}=await import("./phone-data-D3PvG27c.js");return{PHONE_LISTINGS:s}},[]),{PET_LISTINGS:d}=await m(async()=>{const{PET_LISTINGS:s}=await import("./pet-data-B7wfSbng.js");return{PET_LISTINGS:s}},[]),{NEW_DOG_LISTINGS:u}=await m(async()=>{const{NEW_DOG_LISTINGS:s}=await import("./dog-data-Bz5Toezr.js");return{NEW_DOG_LISTINGS:s}},[]);t.push(...r||[],...n||[],...l||[],...i||[],...o||[],...c||[],...d||[],...u||[])}catch{}let a=et([...e,...t,...ue()||[]]);a=a.map(r=>{try{return ce({...r})}catch{return r}});try{const{isCatalogListingHidden:r}=await m(async()=>{const{isCatalogListingHidden:n}=await import("./catalog-hidden-store-B4uVzRT8.js");return{isCatalogListingHidden:n}},[]);a=a.filter(n=>{const l=n.property_id||n.id;if(!l)return!1;try{return!r(l)}catch{return!0}})}catch{}return x=a.filter(r=>he(r).length>0&&(r.title||r.name)),D=!0,x}catch{return D=!0,x}}function U(){return x}const re="kco_promo_settings_v1",A={app_banner_enabled:!0,app_play_store_url:"",app_banner_headline:"Discover More with the Weverse Online Shop App",live_promo_enabled:!0,live_promo_interval_seconds:60,live_promo_first_delay_seconds:12,live_promo_product_ids:[],live_promo_use_owned_only:!1};async function me(){try{const t=JSON.parse(localStorage.getItem(re)||"{}");if(t.ts&&Date.now()-t.ts<60*1e3&&t.data)return{...A,...t.data}}catch{}const e={...A};try{const t=await F(),{data:a,error:r}=await t.from("site_settings").select("app_banner_enabled,app_play_store_url,app_banner_headline,live_promo_enabled,live_promo_interval_seconds,live_promo_first_delay_seconds,live_promo_product_ids,live_promo_use_owned_only").limit(1).maybeSingle();if(!r&&a){typeof a.app_banner_enabled=="boolean"&&(e.app_banner_enabled=a.app_banner_enabled),typeof a.app_play_store_url=="string"&&(e.app_play_store_url=a.app_play_store_url.trim()),typeof a.app_banner_headline=="string"&&a.app_banner_headline.trim()&&(e.app_banner_headline=a.app_banner_headline.trim()),typeof a.live_promo_enabled=="boolean"&&(e.live_promo_enabled=a.live_promo_enabled);const n=parseInt(a.live_promo_interval_seconds,10);n>0&&(e.live_promo_interval_seconds=n);const l=parseInt(a.live_promo_first_delay_seconds,10);l>=0&&(e.live_promo_first_delay_seconds=l),Array.isArray(a.live_promo_product_ids)&&(e.live_promo_product_ids=a.live_promo_product_ids.filter(Boolean)),typeof a.live_promo_use_owned_only=="boolean"&&(e.live_promo_use_owned_only=a.live_promo_use_owned_only)}}catch{}try{localStorage.setItem(re,JSON.stringify({ts:Date.now(),data:e}))}catch{}return e}function fe(e,t,a=12){const r=t&&Array.isArray(t.live_promo_product_ids)&&t.live_promo_product_ids.length?new Set(t.live_promo_product_ids):null;let n=r?e.filter(l=>r.has(l.property_id||l.id)):e.slice();return n.length||(n=e.slice()),n.slice(0,a)}const tt=()=>document.getElementById("app-promo-banner"),G="/fallback.svg";function at(){return`
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
  </svg>`}function rt(){return`
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
  </svg>`}function nt(e){const t=e[0],a=e[1],r=(n,l)=>{const i=f(M(n)),o=f((n.title||n.name||"").slice(0,34));return`
      <a href="/details.html?id=${encodeURIComponent(n.property_id||n.id)}"
         class="block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition active:scale-[.98]">
        <div class="aspect-square bg-gray-100 overflow-hidden">
          <img src="${i}" alt="${o}" loading="lazy" decoding="async"
               class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${G}'">
        </div>
        <div class="p-2">
          <p class="text-[10px] text-gray-700 font-bold leading-tight line-clamp-2 min-h-[26px]">${o}</p>
          <div class="flex items-center justify-between mt-1">
            <span class="text-[11px] text-blue-600 font-black">${P(n)}</span>
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
            ${oe("w-4 h-4")}
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
        ${["All","Cars","Phones","Fashion","Homes","Electronics"].map((n,l)=>`
          <span class="shrink-0 px-2 py-1 rounded-full text-[8px] font-black ${l===0?"bg-blue-500 text-white":"bg-white border border-gray-200 text-gray-600"}">${n}</span>`).join("")}
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
    </div>`}function it(e){return`
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
          ${nt(e)}
          <!-- glass reflection -->
          <div class="absolute inset-0 pointer-events-none" style="background:linear-gradient(135deg,rgba(255,255,255,.14) 0%,rgba(255,255,255,0) 34%,rgba(255,255,255,0) 78%,rgba(255,255,255,.06) 100%)"></div>
        </div>
      </div>
    </div>`}function ot(e,t){const a=fe(t,e,12),r=(e.app_play_store_url||"").trim(),n=(e.app_banner_headline||A.app_banner_headline).trim(),l=r?`<a href="${f(r)}" target="_blank" rel="noopener" class="inline-flex items-center gap-2.5 bg-white text-blue-900 font-black text-sm px-6 py-3.5 rounded-2xl shadow-xl shadow-blue-900/30 hover:scale-[1.03] active:scale-[.98] transition">
         <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none"><path d="M3 5.5v13c0 .8.5 1.5 1.2 1.8L13.5 12 4.2 3.7C3.5 4 3 4.7 3 5.5Z" fill="#34a853"/><path d="M21.4 11.2 17 8.5l-3.5 3.5L17 15.5l4.4-2.7c.8-.5.8-1.1 0-1.6Z" fill="#4285f4"/><path d="m13.5 12 1.2 1.2-5.4 5.2c.4.2.9.2 1.3 0l10.8-6.5c.4-.2.6-.6.6-.9h.1V5.5c0-.8-.5-1.5-1.2-1.8L13.5 12Z" fill="#fbbc04"/><path d="m6.1 3.6 7.4 8.4 2.5-2.5-8.7-5.3c-.4-.2-.9-.2-1.2-.6Z" fill="#ea4335"/></svg>
         <span>Get it on Google Play</span>
       </a>`:`<span class="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-sm font-bold px-6 py-3.5 rounded-2xl backdrop-blur cursor-default">
         <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none"><path d="M5 12l5 5 9-9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
         <span>Android App — Coming Soon</span>
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
              ${f(n.split(" — ")[0]||n)}
            </h2>
            <p class="text-[15px] sm:text-base text-slate-300 mt-4 leading-relaxed max-w-lg">
              Shop products, discover new arrivals, manage your orders, save favorites, and enjoy a smooth shopping experience wherever you go.
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-7 max-w-lg">
              ${[{icon:"shopping-bag",label:"Shop Products"},{icon:"sparkles",label:"New Arrivals"},{icon:"package-search",label:"Manage Orders"},{icon:"heart",label:"Save Favorites"}].map(i=>`
                <div class="bg-white/[.06] border border-white/10 rounded-2xl px-3 py-3.5 text-center backdrop-blur">
                  <i data-lucide="${i.icon}" class="w-4.5 h-4.5 w-5 h-5 text-cyan-300 mx-auto"></i>
                  <p class="text-[10px] font-bold text-slate-200 mt-2">${i.label}</p>
                </div>`).join("")}
            </div>
            <div class="flex flex-wrap items-center gap-3.5 mt-8">
              ${l}
              <a href="/#showroom-directory" class="inline-flex items-center gap-2 text-sm font-bold text-cyan-200 hover:text-white transition">
                Browse the Shop <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
            ${r?"":'<p class="text-[11px] text-slate-500 mt-3">The Android app is in final review. We’ll publish the download link here the moment it is live.</p>'}
          </div>

          <!-- visual side: woman holding the phone -->
          <div class="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[400px] aspect-[560/720]">
            <div class="absolute inset-0 woman-back" aria-hidden="true">${at()}</div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="translate-y-[34%] scale-[.92] sm:scale-100">${it(a)}</div>
            </div>
            <div class="absolute inset-0 hands-front pointer-events-none" aria-hidden="true">${rt()}</div>
          </div>
        </div>
      </div>
    </section>`}function st(e){const t=document.getElementById("promo-phone-screen"),a=document.getElementById("promo-phone-grid");if(!t||!a||!e.length)return;const r=e.slice();let n=0;const l=()=>{if(!a||!r.length)return;const i=r[n%r.length],o=r[(n+1)%r.length],c=f(M(i)),d=f(M(o)),u=f((i.title||i.name||"").slice(0,34)),s=f((o.title||o.name||"").slice(0,34));if(a.innerHTML=`
      <a href="/details.html?id=${encodeURIComponent(i.property_id||i.id)}" class="block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition active:scale-[.98]">
        <div class="aspect-square bg-gray-100 overflow-hidden"><img src="${c}" alt="${u}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${G}'"></div>
        <div class="p-2"><p class="text-[10px] text-gray-700 font-bold leading-tight line-clamp-2 min-h-[26px]">${u}</p>
        <div class="flex items-center justify-between mt-1"><span class="text-[11px] text-blue-600 font-black">${P(i)}</span><span class="bg-blue-500 text-white text-[9px] font-black px-2 py-1 rounded-lg">Buy</span></div></div>
      </a>
      <a href="/details.html?id=${encodeURIComponent(o.property_id||o.id)}" class="block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition active:scale-[.98]">
        <div class="aspect-square bg-gray-100 overflow-hidden"><img src="${d}" alt="${s}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${G}'"></div>
        <div class="p-2"><p class="text-[10px] text-gray-700 font-bold leading-tight line-clamp-2 min-h-[26px]">${s}</p>
        <div class="flex items-center justify-between mt-1"><span class="text-[11px] text-blue-600 font-black">${P(o)}</span><span class="bg-blue-500 text-white text-[9px] font-black px-2 py-1 rounded-lg">Buy</span></div></div>
      </a>`,window.lucide)try{lucide.createIcons()}catch{}};l(),setInterval(()=>{n+=2,l()},4500)}async function ne(){const e=tt();if(!e)return;let t={...A};try{t=await me()}catch{}if(t.app_banner_enabled===!1)return;let a=[];try{await ge(),a=U()||[]}catch{}const r=a.length?a:[{property_id:"browse",title:"Browse the full Weverse Online Shop",price:0,currency:"USD",images:["/fallback.svg"]}];if(e.innerHTML=ot(t,r),window.lucide)try{lucide.createIcons()}catch{}st(r),window.dispatchEvent(new CustomEvent("app-promo-banner-ready"));let n={...k};try{n=await I()}catch{}const l=i=>{const o=e.querySelector('[data-bg-slot="app_banner"]');o&&(o.innerHTML=H(i.app_banner_bg_image,i.app_banner_bg_video))};l(n),window.addEventListener("promo-backgrounds-updated",()=>{I().then(l).catch(()=>{})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ne):ne();const lt="/fallback.svg",R=()=>document.getElementById("live-promo-alerts"),ye="kco_live_promo_dismissed_v1";function be(){try{return JSON.parse(localStorage.getItem(ye)||"{}")}catch{return{}}}function ct(e){const a=be()[e];return a?Date.now()-a<2*60*60*1e3:!1}function dt(e){try{const t=be();t[e]=Date.now(),localStorage.setItem(ye,JSON.stringify(t))}catch{}}function pt(e){const t=f(e.title||e.name||"Featured product"),a=e.listing_type==="vehicle"?e.category||"Featured Vehicle":e.listing_type==="property"?"Featured Property":e.subcategory||e.category||"Featured Product";return`
    <div class="live-promo-toast pointer-events-auto flex items-center gap-3 bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-black/15 p-3 pr-4 cursor-pointer hover:shadow-black/25 transition" data-promo-id="${f(e.property_id||e.id||"")}">
      <div class="shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
        <img src="${f(M(e))}" alt="${t}" loading="lazy" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${lt}'">
      </div>
      <div class="min-w-0 flex-1">
        <p class="text-[9px] font-black uppercase tracking-wider text-blue-600 flex items-center gap-1">
          <i data-lucide="sparkles" class="w-3 h-3"></i> ${f(a)}
        </p>
        <p class="text-[12px] font-bold text-gray-900 leading-snug truncate mt-0.5">${t}</p>
        <div class="flex items-center justify-between mt-1">
          <span class="text-[12px] font-black text-blue-600">${P(e)}</span>
          <span class="text-[10px] font-black text-emerald-600 inline-flex items-center gap-0.5">View Product <i data-lucide="arrow-right" class="w-3 h-3"></i></span>
        </div>
      </div>
      <button class="live-promo-close shrink-0 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition" aria-label="Close">
        <i data-lucide="x" class="w-3.5 h-3.5"></i>
      </button>
    </div>`}function ut(e){const t=R();if(!t)return;const a=e.property_id||e.id;if(ct(a))return;t.querySelectorAll(".live-promo-toast").forEach(o=>o.remove()),t.insertAdjacentHTML("beforeend",pt(e));const r=t.querySelector(".live-promo-toast");if(!r)return;r.style.opacity="0",r.style.transform="translateY(14px)";const n=`/details.html?id=${encodeURIComponent(a)}`,l=r.querySelector(".live-promo-close"),i=o=>{o.preventDefault(),o.stopPropagation(),r.style.transform="translateY(12px)",r.style.opacity="0",setTimeout(()=>{r.remove()},220),window.location.href=n};if(l.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),a&&dt(a),r.style.transform="translateY(12px)",r.style.opacity="0",setTimeout(()=>r.remove(),220)}),r.addEventListener("click",i),window.lucide)try{lucide.createIcons()}catch{}requestAnimationFrame(()=>{r.style.transition="transform .35s ease, opacity .35s ease",r.style.transform="translateY(0)",r.style.opacity="1"}),setTimeout(()=>{r.isConnected&&(r.style.transform="translateY(12px)",r.style.opacity="0",setTimeout(()=>r.remove(),260))},7e3)}async function ie(){if(!R())return;let t={...A};try{t=await me()}catch{}if(t.live_promo_enabled===!1)return;let a=[];try{await ge(),a=U()||[]}catch{}if(!a.length)return;const r=fe(a,t,10);if(!r.length)return;let n=0;const l=Math.max(3,Number(t.live_promo_first_delay_seconds)||12)*1e3,i=Math.max(20,Number(t.live_promo_interval_seconds)||60)*1e3,o=()=>{if(R()&&U().length){const c=r[n%r.length];ut(c),n+=1}};setTimeout(()=>{o(),setInterval(o,i)},l)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ie):ie();(()=>{if(typeof window>"u"||document.getElementById("scroll-progress-rail"))return;const e=document.createElement("div");e.id="scroll-progress-rail",e.setAttribute("role","scrollbar"),e.setAttribute("aria-label","Scroll progress — tap to jump to top or down the page"),e.innerHTML=`
    <div id="scroll-progress-track"></div>
    <div id="scroll-progress-fill"></div>
    <button type="button" id="scroll-progress-top" aria-label="Back to top">
      <svg viewBox="0 0 24 24" fill="none"><path d="M6 14l6-6 6 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>`,document.body.appendChild(e);const t=e.querySelector("#scroll-progress-fill"),a=e.querySelector("#scroll-progress-top");let r=!1;const n=`
    #scroll-progress-rail{position:fixed;top:120px;right:6px;bottom:120px;width:14px;z-index:60;touch-action:none;display:flex;justify-content:center}
    #scroll-progress-track{position:absolute;top:0;bottom:0;width:8px;border-radius:999px;background:rgba(148,163,184,.35);border:1px solid rgba(148,163,184,.45);box-shadow:0 1px 3px rgba(2,8,30,.12)}
    #scroll-progress-fill{position:absolute;top:0;left:50%;transform:translateX(-50%);width:8px;height:0;background:linear-gradient(180deg,#3b82f6,#2563eb);border-radius:999px;box-shadow:0 0 12px rgba(37,99,235,.7)}
    #scroll-progress-top{position:absolute;top:-52px;left:50%;transform:translateX(-50%);width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:999px;border:1px solid #bfdbfe;background:#ffffff;color:#2563eb;box-shadow:0 6px 18px rgba(2,8,30,.22);cursor:pointer;transition:transform .15s ease,color .15s ease,opacity .2s ease;opacity:0}
    #scroll-progress-top:hover{color:#1d4ed8;transform:translateX(-50%) scale(1.06)}
    #scroll-progress-top:active{transform:translateX(-50%) scale(.92)}
    #scroll-progress-top svg{width:22px;height:22px;pointer-events:none}
    @media (min-width:641px){
      #scroll-progress-rail{right:10px;width:16px}
      #scroll-progress-track{width:10px}
      #scroll-progress-fill{width:10px}
    }`,l=document.createElement("style");l.textContent=n,document.head.appendChild(l);function i(){return Math.max(0,(document.documentElement.scrollHeight||document.body.scrollHeight||0)-window.innerHeight)}function o(){const d=i(),u=d>0?Math.min(1,window.scrollY/d):0;t&&(t.style.height=`${(u*100).toFixed(2)}%`),a.style.opacity=window.scrollY>300?"1":"0",a.style.pointerEvents=window.scrollY>300?"auto":"none"}function c(d){const u=e.getBoundingClientRect(),s=Math.min(1,Math.max(0,(d-u.top)/Math.max(1,u.height)));window.scrollTo({top:s*i(),behavior:"smooth"})}a.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),e.addEventListener("pointerdown",d=>{d.target!==a&&(r=!0,c(d.clientY),e.setPointerCapture(d.pointerId),d.preventDefault())}),e.addEventListener("pointermove",d=>{r&&c(d.clientY)}),["pointerup","pointercancel"].forEach(d=>{e.addEventListener(d,()=>{r=!1})}),o(),window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("resize",o,{passive:!0})})();export{$ as S,m as _,W as a,je as b,ce as c,F as d,de as e,Qe as f,ue as g,Ve as h,ht as i,pe as l,gt as s};
