import{D as q,l as g,b as v}from"./promo-backgrounds-BZhAn4aI.js";import{d as H,W as G,D as B,l as j,a as F,g as P,p as D,e as p,c as w,b as k}from"./promo-pool-CZD5oU4b.js";import{D as x,l as S,g as I}from"./site-content-DxInYU0I.js";const b="support@weverseonlineshop.com",U="weverse_brand_v1";function o(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function O(){try{const e=JSON.parse(localStorage.getItem(U)||"{}"),t=e.data&&typeof e.data=="object"?e.data:e;if(t&&typeof t=="object"&&(t.brand_name||t.site_name||t.brand_logo))return t}catch{}return{}}function R(){const e=O(),t=e.brand_name||e.site_name||H;return`
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
            200+ countries worldwide — so shopping with ${o(t)} is always fast, safe and worry-free.
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
    </section>`}function N(){const e=t=>`
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
    </section>`}const _=[{id:"trust-shipping",icon:"package",tone:"blue",title:"Shipping & Delivery",body:`
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
      <p class="mt-3 text-xs text-gray-400">The Android app is in final review — the download link will appear here the moment it goes live.</p>`}],E={blue:"bg-blue-50 text-blue-600",emerald:"bg-emerald-50 text-emerald-600",amber:"bg-amber-50 text-amber-600",violet:"bg-violet-50 text-violet-600",sky:"bg-sky-50 text-sky-600",indigo:"bg-indigo-50 text-indigo-600",rose:"bg-rose-50 text-rose-600",slate:"bg-slate-100 text-slate-600",teal:"bg-teal-50 text-teal-600",cyan:"bg-cyan-50 text-cyan-600"};function K(e){const t=E[e.tone]||E.blue;return`
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
    </div>`}function Z(){const e=_.slice(0,6),t=_.slice(6),a=r=>r.map(K).join("");return`
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
    </section>`}const W=[{name:"Megan R.",country:"United States",text:"My order arrived ahead of schedule and the quality was exactly as described. I shop here without any doubt.",verified:!0},{name:"Sarah & James",country:"United Kingdom",text:"Ordered for our whole family and the tracking updates made it feel safe and reliable from checkout to delivery.",verified:!0},{name:"Oliver K.",country:"Germany",text:"The customer support team answered my questions in minutes. Genuinely trustworthy shopping experience.",verified:!0}];function V(e){return[1,2,3,4,5].map(t=>`<i data-lucide="star" class="w-3.5 h-3.5 ${t<=e?"fill-amber-400 text-amber-400":"text-slate-500"}"></i>`).join("")}function C(e){const t=String(e.name||"Verified shopper").trim()||"Verified shopper",a=(t.charAt(0)||"V").toUpperCase(),r=[e.country||"",e.verified?"Verified buyer":"",e.date||""].filter(Boolean).join(" · ");return`
    <div class="bg-white/[.07] border border-white/10 rounded-2xl p-4 backdrop-blur flex flex-col">
      <div class="flex items-center gap-1 mb-2.5">${V(e.rating||5)}</div>
      <p class="text-[13px] text-slate-200 leading-relaxed flex-1">“${o(e.text)}”</p>
      <div class="flex items-center gap-2.5 mt-3.5">
        <span class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white text-[11px] font-black">${o(a)}</span>
        <div class="min-w-0">
          <p class="text-xs font-black text-white truncate">${o(t)}</p>
          <p class="text-[10px] text-slate-400 truncate">${r}</p>
        </div>
      </div>
    </div>`}const J=[{name:"Emma W.",country:"United States",text:"Ordered a laptop and it arrived in under a week, perfectly packed. The tracking updates were accurate all the way to my door.",rating:5,verified:!0},{name:"Daniel R.",country:"United States",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Olivia H.",country:"United States",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Liam M.",country:"United States",text:"Had to arrange a return once and it was handled quickly with a full refund. That is how you keep customers happy.",rating:5,verified:!0},{name:"Sophia B.",country:"United States",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Noah T.",country:"United States",text:"Tracking updates at every step made the whole experience worry-free. The product arrived safely and on time.",rating:5,verified:!0},{name:"Isabella G.",country:"United States",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:4,verified:!0},{name:"Lucas P.",country:"United States",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:5,verified:!0},{name:"Mia C.",country:"United States",text:"The package arrived beautifully wrapped and matched the pictures perfectly. I will definitely be ordering again.",rating:5,verified:!0},{name:"Ethan F.",country:"United States",text:"First time shopping here and the whole experience felt premium. Live chat answered me in seconds.",rating:5,verified:!0},{name:"Charlotte D.",country:"Canada",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"James K.",country:"Canada",text:"The checkout process was smooth and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Amelia S.",country:"Canada",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Benjamin L.",country:"Canada",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Evelyn M.",country:"Canada",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Henry W.",country:"Canada",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:4,verified:!0},{name:"Emily R.",country:"United Kingdom",text:"The checkout process was smooth and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Oliver J.",country:"United Kingdom",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Amelia F.",country:"United Kingdom",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"George C.",country:"United Kingdom",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Harry B.",country:"United Kingdom",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Isla N.",country:"United Kingdom",text:"Tracking updates at every step made the whole experience worry-free. The product arrived safely and on time.",rating:5,verified:!0},{name:"Jack T.",country:"United Kingdom",text:"Had to arrange a return once and it was handled quickly with a full refund. That is how you keep customers happy.",rating:4,verified:!0},{name:"Grace P.",country:"United Kingdom",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:5,verified:!0},{name:"Aoife K.",country:"Ireland",text:"Delivery to Ireland was faster than I expected and everything was tracked the whole way.",rating:5,verified:!0},{name:"Sean O.",country:"Ireland",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Ciara M.",country:"Ireland",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Declan W.",country:"Ireland",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:4,verified:!0},{name:"Sophie L.",country:"France",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Louis V.",country:"France",text:"Tracking updates at every step made the whole experience worry-free. The product arrived safely and on time.",rating:5,verified:!0},{name:"Camille R.",country:"France",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:5,verified:!0},{name:"Hugo M.",country:"France",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Lena S.",country:"Germany",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Max B.",country:"Germany",text:"Tracking updates at every step made the whole experience worry-free. The product arrived safely and on time.",rating:5,verified:!0},{name:"Hannah K.",country:"Germany",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:5,verified:!0},{name:"Felix W.",country:"Germany",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Emma D.",country:"Germany",text:"Had to arrange a return once and it was handled quickly with a full refund. That is how you keep customers happy.",rating:4,verified:!0},{name:"Jonas H.",country:"Germany",text:"The package arrived beautifully wrapped and matched the pictures perfectly. I will definitely be ordering again.",rating:5,verified:!0},{name:"Fleur V.",country:"Netherlands",text:"Ordered a laptop and it arrived in under a week, perfectly packed. The tracking updates were accurate all the way to my door.",rating:5,verified:!0},{name:"Daan B.",country:"Netherlands",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Sanne D.",country:"Netherlands",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:4,verified:!0},{name:"Elise M.",country:"Belgium",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Pieter V.",country:"Belgium",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Lotte V.",country:"Belgium",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Anna S.",country:"Switzerland",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"Leon M.",country:"Switzerland",text:"The checkout process was smooth and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Nora K.",country:"Switzerland",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:4,verified:!0},{name:"Lukas H.",country:"Austria",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Julia W.",country:"Austria",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"David S.",country:"Austria",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Giulia R.",country:"Italy",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Matteo B.",country:"Italy",text:"Tracking updates at every step made the whole experience worry-free. The product arrived safely and on time.",rating:5,verified:!0},{name:"Francesca M.",country:"Italy",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:5,verified:!0},{name:"Alessandro F.",country:"Italy",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:4,verified:!0},{name:"Lucia G.",country:"Spain",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Diego S.",country:"Spain",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Martina P.",country:"Spain",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Pablo R.",country:"Spain",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Sofia C.",country:"Portugal",text:"The package arrived beautifully wrapped and matched the pictures perfectly. I will definitely be ordering again.",rating:5,verified:!0},{name:"Tomás A.",country:"Portugal",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Mariana L.",country:"Portugal",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:4,verified:!0},{name:"Ingrid N.",country:"Sweden",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Erik S.",country:"Sweden",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"Maja L.",country:"Sweden",text:"Tracking updates at every step made the whole experience worry-free. The product arrived safely and on time.",rating:5,verified:!0},{name:"Emil H.",country:"Norway",text:"My order arrived ahead of schedule, beautifully packed from Oslo. Could not have asked for a smoother delivery.",rating:5,verified:!0},{name:"Astrid K.",country:"Norway",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Magnus B.",country:"Norway",text:"The customer support team answered my questions in minutes. Genuinely trustworthy shopping experience.",rating:4,verified:!0},{name:"Freja N.",country:"Denmark",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"William P.",country:"Denmark",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:5,verified:!0},{name:"Clara M.",country:"Denmark",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Aino K.",country:"Finland",text:"Delivery to Finland was faster than I expected and everything was tracked the whole way.",rating:5,verified:!0},{name:"Onni V.",country:"Finland",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Riikka S.",country:"Finland",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:4,verified:!0},{name:"Sigrid J.",country:"Iceland",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"Björn L.",country:"Iceland",text:"The package arrived beautifully wrapped and matched the pictures perfectly. I will definitely be ordering again.",rating:5,verified:!0},{name:"Zofia W.",country:"Poland",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Jakub N.",country:"Poland",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Ola S.",country:"Poland",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:4,verified:!0},{name:"Klara V.",country:"Czech Republic",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Tomáš D.",country:"Czech Republic",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Adéla N.",country:"Czech Republic",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:5,verified:!0},{name:"Dimitra K.",country:"Greece",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Nikos P.",country:"Greece",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Eleni S.",country:"Greece",text:"Delivery arrived earlier than expected and the quality matched the pictures perfectly. Five stars from us.",rating:4,verified:!0},{name:"Sarah T.",country:"Australia",text:"Delivery to Australia was faster than I expected and everything was tracked the whole way.",rating:5,verified:!0},{name:"Jack M.",country:"Australia",text:"The checkout process was smooth and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Charlotte B.",country:"Australia",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"William H.",country:"Australia",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Olivia T.",country:"Australia",text:"Had to arrange a return once and it was handled quickly with a full refund. That is how you keep customers happy.",rating:4,verified:!0},{name:"Liam R.",country:"Australia",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Charlotte W.",country:"New Zealand",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"Oliver S.",country:"New Zealand",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Mia H.",country:"New Zealand",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Ethan L.",country:"Singapore",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Nora T.",country:"Singapore",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Ryan C.",country:"Singapore",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:4,verified:!0},{name:"Yuki T.",country:"Japan",text:"Packaging was meticulous and the quality exceeded expectations. The whole experience felt premium.",rating:5,verified:!0},{name:"Haruto S.",country:"Japan",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Aiko M.",country:"Japan",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"Minjun K.",country:"South Korea",text:"Delivery was quick and the package arrived in perfect condition. I will definitely be ordering again.",rating:5,verified:!0},{name:"Seo-yeon P.",country:"South Korea",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Jiwon L.",country:"South Korea",text:"The customer support team answered my questions in minutes. Genuinely trustworthy shopping experience.",rating:4,verified:!0},{name:"Layla A.",country:"United Arab Emirates",text:"Delivery to Dubai was faster than I expected and everything was tracked the whole way.",rating:5,verified:!0},{name:"Omar R.",country:"United Arab Emirates",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Mariam S.",country:"United Arab Emirates",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Khalid A.",country:"Qatar",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Noor H.",country:"Qatar",text:"Delivery arrived earlier than expected and the quality matched the pictures perfectly.",rating:5,verified:!0},{name:"Noam K.",country:"Israel",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Tamar L.",country:"Israel",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:4,verified:!0},{name:"Wei-cheng L.",country:"Taiwan",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Ting-wei C.",country:"Taiwan",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Ka-yan W.",country:"Hong Kong",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"Ho-man C.",country:"Hong Kong",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Harper A.",country:"United States",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Mason T.",country:"United States",text:"The package arrived beautifully wrapped and matched the pictures perfectly. I will definitely be ordering again.",rating:5,verified:!0},{name:"Abigail K.",country:"United States",text:"Ordered a few gifts and every one arrived on time, beautifully packed. Support was friendly and quick to help.",rating:5,verified:!0},{name:"Carter W.",country:"United States",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:4,verified:!0},{name:"Eliana J.",country:"United States",text:"First time ordering and the item matched the description perfectly. Delivery updates were spot on.",rating:5,verified:!0},{name:"Logan B.",country:"United States",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Chase R.",country:"Canada",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"Naomi B.",country:"Canada",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Chloe V.",country:"Canada",text:"The customer support team answered my questions in minutes. Genuinely trustworthy shopping experience.",rating:4,verified:!0},{name:"Rosalind M.",country:"United Kingdom",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Freddie P.",country:"United Kingdom",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Evie C.",country:"United Kingdom",text:"Tracking updates at every step made the whole experience worry-free. The product arrived safely and on time.",rating:5,verified:!0},{name:"Conor M.",country:"Ireland",text:"The checkout process was smooth and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Margaux B.",country:"France",text:"The package arrived beautifully wrapped and matched the pictures perfectly. I will definitely be ordering again.",rating:5,verified:!0},{name:"Tobias F.",country:"Germany",text:"Delivery to Germany was faster than I expected and everything was tracked the whole way.",rating:5,verified:!0},{name:"Lina M.",country:"Germany",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Marco N.",country:"Italy",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Valentina A.",country:"Italy",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Carmen I.",country:"Spain",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Javier G.",country:"Spain",text:"The package arrived beautifully wrapped and matched the pictures perfectly. I will definitely be ordering again.",rating:4,verified:!0},{name:"Inês R.",country:"Portugal",text:"Ordered several items for the family and every single one was packed with care and delivered on time.",rating:5,verified:!0},{name:"Thijs M.",country:"Netherlands",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Lieke V.",country:"Netherlands",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Emiel P.",country:"Belgium",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Lien V.",country:"Belgium",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Sabine G.",country:"Switzerland",text:"Tracked the whole way and it arrived exactly when promised. A very professional shopping experience.",rating:5,verified:!0},{name:"Alexandra H.",country:"Switzerland",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Paul K.",country:"Austria",text:"Ordered during the holidays and it still arrived on time, which impressed me the most.",rating:5,verified:!0},{name:"Katharina S.",country:"Austria",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Alva E.",country:"Sweden",text:"Delivery to Sweden was faster than I expected and everything was tracked the whole way.",rating:5,verified:!0},{name:"Nils H.",country:"Sweden",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"Ida L.",country:"Denmark",text:"The package arrived beautifully wrapped and matched the pictures perfectly. I will definitely be ordering again.",rating:5,verified:!0},{name:"Zoe F.",country:"Australia",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Cooper W.",country:"Australia",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:4,verified:!0},{name:"Ruby C.",country:"Australia",text:"Tracked the whole way and it arrived exactly when promised. A very professional shopping experience.",rating:5,verified:!0},{name:"Mei Lin T.",country:"Singapore",text:"Delivery was quick and the package arrived in perfect condition. I will definitely be ordering again.",rating:5,verified:!0},{name:"Kenji M.",country:"Japan",text:"Checked out in about two minutes and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0}];function z(){return`
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
          ${W.map(C).join("")}
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
                ${J.map(C).join("")}
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
    </section>`}function c(e,t){return`<li><a href="${e}" class="text-xs text-slate-400 hover:text-white transition">${t}</a></li>`}function $(e){const t={...x,...e||{}},a=O(),r=a.brand_name||a.site_name||H,i=a.brand_logo||a.brand_header_logo||a.brand_footer_logo||"/w-logo.svg",s=t.bottom_footer_text||a.brand_slogan||a.site_tagline||"GLOBAL SHOPPING · WORLDWIDE DELIVERY",l=t.bottom_copyright?t.bottom_copyright:`© ${new Date().getFullYear()} ${r}. All rights reserved.`;return`
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
            <img src="${o(i)}" alt="${o(r)}" class="w-10 h-10 object-contain" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex'">
            <span style="display:none">${G("w-9 h-9")}</span>
          </div>
          <p class="mt-4 text-[10px] font-black uppercase tracking-[0.28em] text-white">${o(s)}</p>
          <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.08] tracking-tight text-white">
            ${o(t.bottom_heading)}
          </h2>
          <p class="mt-4 text-[15px] sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            ${o(t.bottom_main_message)}
          </p>
          <p class="mt-5 text-lg sm:text-xl font-semibold text-cyan-200">${o(t.bottom_closing_message)}</p>
        </div>

        <!-- Customer Support area -->
        <div class="mt-12 max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[.05] backdrop-blur-md p-6 sm:p-8">
          <div class="flex flex-col lg:flex-row items-center gap-6 justify-between text-center lg:text-left">
            <div class="flex items-center gap-4">
              <div class="shrink-0 w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 flex items-center justify-center">
                <i data-lucide="headphones" class="w-6 h-6"></i>
              </div>
              <div>
                <h3 class="text-lg sm:text-xl font-black text-white tracking-tight">${o(t.bottom_support_heading)}</h3>
                <p class="text-sm text-slate-300 mt-1 max-w-md">${o(t.bottom_support_description)}</p>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href="mailto:${o(b)}" class="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-xl shadow-blue-900/30 hover:scale-[1.03] active:scale-[.98] transition">
                ${o(t.bottom_support_button_text)} <i data-lucide="message-circle" class="w-4 h-4"></i>
              </a>
              <a href="/contact.html" class="inline-flex items-center gap-2 border border-white/25 bg-white/10 text-white text-sm font-bold px-6 py-3.5 rounded-2xl backdrop-blur hover:bg-white/15 transition">
                Contact Us <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
          <div class="mt-6 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-[11px] text-slate-400">
            <span class="inline-flex items-center justify-center gap-1.5"><i data-lucide="mail" class="w-3.5 h-3.5 text-cyan-300"></i> ${o(b)}</span>
            <span class="inline-flex items-center justify-center gap-1.5"><i data-lucide="message-circle" class="w-3.5 h-3.5 text-cyan-300"></i> 24/7 live chat</span>
            <span class="inline-flex items-center justify-center gap-1.5"><i data-lucide="life-buoy" class="w-3.5 h-3.5 text-cyan-300"></i> <a href="/help.html" class="hover:text-white transition">Help Center</a></span>
          </div>
        </div>

        <!-- Professional footer links -->
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-9">
          <div>
            <h4 class="text-xs font-black text-white uppercase tracking-widest mb-3.5">Company</h4>
            <ul class="space-y-2.5">
              ${c("/about.html","About Us")}
              ${c("/team.html","Our Team")}
              ${c("/contact.html","Contact Us")}
              ${c("/help.html","Help Center")}
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-black text-white uppercase tracking-widest mb-3.5">Legal</h4>
            <ul class="space-y-2.5">
              ${c("/privacy.html","Privacy Policy")}
              ${c("/terms.html","Terms & Conditions")}
              ${c("/refund-policy.html","Refund Policy")}
              ${c("/shipping-policy.html","Shipping Policy")}
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-black text-white uppercase tracking-widest mb-3.5">Account</h4>
            <ul class="space-y-2.5">
              ${c("/account.html","My Account")}
              ${c("/auth.html","Sign In")}
              ${c("/auth.html","Register / Create Account")}
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-black text-white uppercase tracking-widest mb-3.5">Support</h4>
            <ul class="space-y-2.5">
              ${c("mailto:"+b,"Email Support")}
              ${c("/help.html","FAQ")}
              ${c("/contact.html","Contact Us")}
            </ul>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-[11px] text-slate-400 text-center sm:text-left">
            ${o(t.bottom_footer_closing)}
          </p>
          <div class="flex items-center gap-2 text-[11px] font-bold text-slate-400">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[.06] border border-white/10"><i data-lucide="lock" class="w-3.5 h-3.5 text-emerald-400"></i> SSL Secure</span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[.06] border border-white/10"><i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i> Secure Checkout</span>
          </div>
        </div>
        <p class="text-center text-[11px] text-slate-500 mt-4">${o(l)}</p>
      </div>
    </section>`}function Y(e){e.addEventListener("click",t=>{const a=t.target.closest("[data-acc]");if(!a)return;const r=a.dataset.acc,i=e.querySelector(`[data-acc-body="${r}"]`),s=e.querySelector(`[data-acc-icon="${r}"]`);if(!i)return;i.dataset.open==="1"?(i.style.maxHeight="0px",i.style.opacity="0",i.dataset.open="0",s.classList.remove("rotate-180"),a.setAttribute("aria-expanded","false")):(i.style.maxHeight=i.scrollHeight+"px",i.style.opacity="1",i.dataset.open="1",s.classList.add("rotate-180"),a.setAttribute("aria-expanded","true"))})}function T(e){const t=document.querySelectorAll("[data-bg-slot]");t.length&&t.forEach(a=>{const r=a.dataset.bgSlot;r==="trust_promo"?a.innerHTML=v(e.trust_promo_bg_image,e.trust_promo_bg_video):r==="reviews"&&(a.innerHTML=v(e.reviews_bg_image,e.reviews_bg_video))})}function Q(e){const t=e.querySelector("#fb-stars");t&&t.addEventListener("click",i=>{const s=i.target.closest(".fb-star");if(!s)return;const l=parseInt(s.dataset.star,10),n=e.querySelector("#fb-rating");n&&(n.value=String(l)),t.querySelectorAll(".fb-star").forEach((u,h)=>{const d=u.querySelector("i, svg");d&&(h<l?(d.classList.add("fill-amber-400","text-amber-400"),d.classList.remove("text-slate-500")):(d.classList.remove("fill-amber-400","text-amber-400"),d.classList.add("text-slate-500")))})});const a=e.querySelector("#fb-form");a&&a.addEventListener("submit",i=>{i.preventDefault(),X(a)});const r=e.querySelector("[data-feedback-backtop]");r&&r.addEventListener("click",()=>{const i=e.querySelector('[data-acc="trust-reviews-more"]');i&&i.click();const s=document.getElementById("customer-feedback");s&&s.scrollIntoView({behavior:"smooth",block:"start"})})}function f(e,t,a){const r=e.closest("#customer-feedback")?.querySelector("#fb-msg");r&&(r.textContent=t,r.classList.remove("hidden","text-emerald-300","text-amber-300"),a&&r.classList.add(a))}async function X(e){const a=(e.querySelector("#fb-text")?.value||"").trim();if(!a){f(e,"Please write your feedback first.","text-amber-300");return}const r=e.querySelector("[type=submit]"),i=r.innerHTML;if(r.disabled=!0,r.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Sending…',window.lucide)try{lucide.createIcons()}catch{}try{const s=await I();let l=null;try{l=(await s.auth.getUser()).data?.user?.id||null}catch{}if(!l){if(f(e,"Only account holders can submit feedback. Please sign in first.","text-amber-300"),r.disabled=!1,r.innerHTML=i,window.lucide)try{lucide.createIcons()}catch{}return}const{error:n}=await s.from("site_feedback").insert({user_id:l,name:e.querySelector("#fb-name")?.value.trim()||"Anonymous shopper",email:e.querySelector("#fb-email")?.value.trim()||"",rating:parseInt(e.querySelector("#fb-rating")?.value||"5",10),feedback:a,is_approved:!1});if(n)throw new Error(n.message);f(e,"✓ Thank you! Your feedback has been sent.","text-emerald-300"),e.reset();const u=e.closest("#customer-feedback")?.querySelector("#fb-stars");u&&u.querySelectorAll(".fb-star").forEach(h=>{const d=h.querySelector("i, svg");d&&(d.classList.remove("fill-amber-400","text-amber-400"),d.classList.add("text-slate-500"))})}catch{f(e,"Could not send your feedback right now. Please try again later.","text-amber-300")}if(r.disabled=!1,r.innerHTML=i,window.lucide)try{lucide.createIcons()}catch{}}async function ee(e){const t=e?.querySelector("#fb-more-list"),a=e?.querySelector("#fb-featured");if(!(!t&&!a))try{const r=await I(),{data:i,error:s}=await r.from("site_feedback").select("name,rating,feedback,created_at").eq("is_approved",!0).order("created_at",{ascending:!1}).limit(30);if(s||!i||!i.length)return;const l=i.map(n=>C({name:n.name||"Verified shopper",text:n.feedback||"",rating:n.rating||5,verified:!0,country:"Verified customer",date:n.created_at?new Date(n.created_at).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):""}));t&&(t.innerHTML=l.join("")+t.innerHTML),a&&l.length&&(a.innerHTML=l.slice(0,3).join(""))}catch{}}async function te(e){const t=e?.querySelector("#fb-form-holder"),a=e?.querySelector("#fb-signin-zone");if(!t||!a)return;let r=null;try{r=(await(await I()).auth.getUser()).data?.user||null}catch{}if(r){a.classList.add("hidden"),t.classList.remove("hidden");const i=r.user_metadata||{},s=i.name||i.full_name||(r.email?r.email.split("@")[0]:""),l=e.querySelector("#fb-name"),n=e.querySelector("#fb-email");l&&!l.value&&s&&(l.value=s),n&&!n.value&&r.email&&(n.value=r.email)}else t.classList.add("hidden"),a.classList.remove("hidden")}function ae(){if(document.getElementById("trust-info-style"))return;const e=document.createElement("style");e.id="trust-info-style",e.textContent=`
    .trust-acc-body{overflow:hidden;max-height:0;opacity:0;transition:max-height .38s cubic-bezier(.2,.8,.2,1),opacity .28s ease}
    .trust-acc-body[data-open="1"]{opacity:1}`,document.head.appendChild(e)}async function L(){if(document.body&&document.body.dataset.homepage==="true")return;const e=document.getElementById("trust-info-area");if(!e)return;ae();let t={...x};try{t=await S()}catch{}if(e.innerHTML=[R(),N(),Z(),z(),$(t)].join(""),window.lucide)try{lucide.createIcons()}catch{}Y(e),Q(e),te(e),ee(e);let a={...q};try{a=await g()}catch{}T(a),window.addEventListener("promo-backgrounds-updated",()=>{g().then(T).catch(()=>{})}),window.addEventListener("site-content-updated",()=>{S().then(r=>{const i=e.querySelector("#site-closing-section");if(i&&(i.outerHTML=$(r)),window.lucide)try{lucide.createIcons()}catch{}}).catch(()=>{})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",L):L();const re=()=>document.getElementById("app-promo-banner"),M="/fallback.svg";function ie(){return`
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
  </svg>`}function ne(){return`
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
  </svg>`}function se(e){const t=e[0],a=e[1],r=(i,s)=>{const l=p(w(i)),n=p((i.title||i.name||"").slice(0,34));return`
      <a href="/details.html?id=${encodeURIComponent(i.property_id||i.id)}"
         class="block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition active:scale-[.98]">
        <div class="aspect-square bg-gray-100 overflow-hidden">
          <img src="${l}" alt="${n}" loading="lazy" decoding="async"
               class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${M}'">
        </div>
        <div class="p-2">
          <p class="text-[10px] text-gray-700 font-bold leading-tight line-clamp-2 min-h-[26px]">${n}</p>
          <div class="flex items-center justify-between mt-1">
            <span class="text-[11px] text-blue-600 font-black">${k(i)}</span>
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
            ${G("w-4 h-4")}
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
        ${["All","Cars","Phones","Fashion","Homes","Electronics"].map((i,s)=>`
          <span class="shrink-0 px-2 py-1 rounded-full text-[8px] font-black ${s===0?"bg-blue-500 text-white":"bg-white border border-gray-200 text-gray-600"}">${i}</span>`).join("")}
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
    </div>`}function le(e){return`
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
          ${se(e)}
          <!-- glass reflection -->
          <div class="absolute inset-0 pointer-events-none" style="background:linear-gradient(135deg,rgba(255,255,255,.14) 0%,rgba(255,255,255,0) 34%,rgba(255,255,255,0) 78%,rgba(255,255,255,.06) 100%)"></div>
        </div>
      </div>
    </div>`}function oe(e,t,a){const r=D(t,e,12),i=(e.app_play_store_url||"").trim(),s={...x,...a||{}},l=(s.app_banner_title||e.app_banner_headline||B.app_banner_headline).trim(),n=s.app_banner_description,u=s.app_banner_button_text,h=s.app_banner_secondary_text,d=i?`<a href="${p(i)}" target="_blank" rel="noopener" class="inline-flex items-center gap-2.5 bg-white text-blue-900 font-black text-sm px-6 py-3.5 rounded-2xl shadow-xl shadow-blue-900/30 hover:scale-[1.03] active:scale-[.98] transition">
         <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none"><path d="M3 5.5v13c0 .8.5 1.5 1.2 1.8L13.5 12 4.2 3.7C3.5 4 3 4.7 3 5.5Z" fill="#34a853"/><path d="M21.4 11.2 17 8.5l-3.5 3.5L17 15.5l4.4-2.7c.8-.5.8-1.1 0-1.6Z" fill="#4285f4"/><path d="m13.5 12 1.2 1.2-5.4 5.2c.4.2.9.2 1.3 0l10.8-6.5c.4-.2.6-.6.6-.9h.1V5.5c0-.8-.5-1.5-1.2-1.8L13.5 12Z" fill="#fbbc04"/><path d="m6.1 3.6 7.4 8.4 2.5-2.5-8.7-5.3c-.4-.2-.9-.2-1.2-.6Z" fill="#ea4335"/></svg>
         <span>${p(u)}</span>
       </a>`:`<span class="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-sm font-bold px-6 py-3.5 rounded-2xl backdrop-blur cursor-default">
         <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none"><path d="M5 12l5 5 9-9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
         <span>${p(u)}</span>
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
              ${p(l.split(" — ")[0]||l)}
            </h2>
            <p class="text-[15px] sm:text-base text-slate-300 mt-4 leading-relaxed max-w-lg">
              ${p(n)}
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-7 max-w-lg">
              ${[{icon:"shopping-bag",label:"Shop Products"},{icon:"sparkles",label:"New Arrivals"},{icon:"package-search",label:"Manage Orders"},{icon:"heart",label:"Save Favorites"}].map(m=>`
                <div class="bg-white/[.06] border border-white/10 rounded-2xl px-3 py-3.5 text-center backdrop-blur">
                  <i data-lucide="${m.icon}" class="w-4.5 h-4.5 w-5 h-5 text-cyan-300 mx-auto"></i>
                  <p class="text-[10px] font-bold text-slate-200 mt-2">${m.label}</p>
                </div>`).join("")}
            </div>
            <div class="flex flex-wrap items-center gap-3.5 mt-8">
              ${d}
              <a href="/#showroom-directory" class="inline-flex items-center gap-2 text-sm font-bold text-cyan-200 hover:text-white transition">
                ${p(h)} <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
            ${i?"":'<p class="text-[11px] text-slate-500 mt-3">The Android app is in final review. We’ll publish the download link here the moment it is live.</p>'}
          </div>

          <!-- visual side: woman holding the phone (phone floats in front, fully visible) -->
          <div class="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[440px]">
            <div class="absolute inset-0 woman-back" aria-hidden="true">${ie()}</div>
            <div class="absolute inset-0 hands-front pointer-events-none" aria-hidden="true">${ne()}</div>
            <div class="relative flex justify-center pt-[30%] sm:pt-[27%] lg:pt-[26%]">
              <div class="scale-100 sm:scale-105 lg:scale-110">${le(r)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>`}let y=null;function de(e){y&&(clearInterval(y),y=null);const t=document.getElementById("promo-phone-screen"),a=document.getElementById("promo-phone-grid");if(!t||!a||!e.length)return;const r=e.slice();let i=0;const s=()=>{if(!a||!r.length)return;const l=r[i%r.length],n=r[(i+1)%r.length],u=p(w(l)),h=p(w(n)),d=p((l.title||l.name||"").slice(0,34)),m=p((n.title||n.name||"").slice(0,34));if(a.innerHTML=`
      <a href="/details.html?id=${encodeURIComponent(l.property_id||l.id)}" class="block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition active:scale-[.98]">
        <div class="aspect-square bg-gray-100 overflow-hidden"><img src="${u}" alt="${d}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${M}'"></div>
        <div class="p-2"><p class="text-[10px] text-gray-700 font-bold leading-tight line-clamp-2 min-h-[26px]">${d}</p>
        <div class="flex items-center justify-between mt-1"><span class="text-[11px] text-blue-600 font-black">${k(l)}</span><span class="bg-blue-500 text-white text-[9px] font-black px-2 py-1 rounded-lg">Buy</span></div></div>
      </a>
      <a href="/details.html?id=${encodeURIComponent(n.property_id||n.id)}" class="block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition active:scale-[.98]">
        <div class="aspect-square bg-gray-100 overflow-hidden"><img src="${h}" alt="${m}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${M}'"></div>
        <div class="p-2"><p class="text-[10px] text-gray-700 font-bold leading-tight line-clamp-2 min-h-[26px]">${m}</p>
        <div class="flex items-center justify-between mt-1"><span class="text-[11px] text-blue-600 font-black">${k(n)}</span><span class="bg-blue-500 text-white text-[9px] font-black px-2 py-1 rounded-lg">Buy</span></div></div>
      </a>`,window.lucide)try{lucide.createIcons()}catch{}};s(),y=setInterval(()=>{i+=2,s()},4500)}async function A(){if(document.body&&document.body.dataset.homepage==="true")return;const e=re();if(!e)return;let t={...B};try{t=await j()}catch{}if(t.app_banner_enabled===!1)return;let a=[];try{await F(),a=P()||[]}catch{}const r=a.length?a:[{property_id:"browse",title:"Browse the full Weverse Online Shop",price:0,currency:"USD",images:["/fallback.svg"]}];let i={...q};try{i=await g()}catch{}const s=n=>{const u=e.querySelector('[data-bg-slot="app_banner"]');u&&(u.innerHTML=v(n.app_banner_bg_image,n.app_banner_bg_video))};async function l(){let n={...x};try{n=await S()}catch{}if(e.innerHTML=oe(t,r,n),window.lucide)try{lucide.createIcons()}catch{}de(r),window.dispatchEvent(new CustomEvent("app-promo-banner-ready")),s(i)}await l(),s(i),window.addEventListener("site-content-updated",()=>{l().catch(()=>{})}),window.addEventListener("promo-backgrounds-updated",()=>{g().then(n=>{i=n,s(n)}).catch(()=>{})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",A):A();
