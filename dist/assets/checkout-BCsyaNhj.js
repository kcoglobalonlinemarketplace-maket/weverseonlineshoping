const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/catalog-DMzG21Ab.js","assets/catalog-hidden-store-A7rGgF0I.js","assets/supabase-lazy-BQT6Mc9B.js"])))=>i.map(i=>d[i]);
import{_ as m}from"./supabase-lazy-BQT6Mc9B.js";import{d as L,g as q,C as D}from"./localization-CiUggARN.js";import{supabase as y}from"./supabase-client-nvpjTmO6.js";import{getCurrentUser as O}from"./auth-C8sthrmE.js";import{f as k,l as $,g as U,a as F}from"./showroom-data-D4FAe61E.js";import{g as C,a as I,b as S}from"./car-data-BxYT2tBT.js";import{g as A}from"./phone-data-Db9w31Ye.js";import{c as G,a as R,b as H,d as B,r as z,e as V}from"./payment-settings-CU8ykkUw.js";import"./native-bridge-B8Ogoih_.js";import"./localization-bootstrap-Blj52KPd.js";import"./live-stream-mode-CtlZxsIl.js";import"./customer-ai-widget-C2vumjMW.js";import"./brand-QZwsptsl.js";const f="/fallback.svg";let e={user:null,isGuest:!1,listing:null,quantity:1,selectedCurrency:"USD",countryCode:"US",cartItems:[],step:1,paymentMethod:"flutterwave",addresses:[],selectedAddressId:null,billingSame:!0,billingAddress:"",fullName:"",email:"",phone:"",shippingAddr1:"",shippingAddr2:"",shippingCity:"",shippingState:"",shippingPostal:"",shippingCountry:"US",orderNumber:"",processing:!1,paymentSettings:null,manualPaymentAccounts:[],manualPaymentInstructions:"",paymentGateway:"both",autoDetectedCurrency:""};function J(){const t=Date.now().toString(36).toUpperCase().slice(-6),r=Math.random().toString(36).toUpperCase().slice(2,6);return`KCO-${t}${r}`}function g(t){const r=document.getElementById("toast");document.getElementById("toast-msg").textContent=t,r.classList.remove("translate-y-20","opacity-0"),clearTimeout(r._t),r._t=setTimeout(()=>r.classList.add("translate-y-20","opacity-0"),3e3),window.lucide&&lucide.createIcons()}function T(t){t.addEventListener("click",function(r){if(this.disabled)return;const a=this.getBoundingClientRect(),s=document.createElement("span");s.className="ripple";const n=Math.max(a.width,a.height);s.style.width=s.style.height=n+"px",s.style.left=r.clientX-a.left-n/2+"px",s.style.top=r.clientY-a.top-n/2+"px",this.appendChild(s),setTimeout(()=>s.remove(),600)})}function b(t,r){return`${(parseFloat(t)||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})} ${r}`}function X(t){const r=()=>{const a=document.createElement("textarea");a.value=t,document.body.appendChild(a),a.select();try{document.execCommand("copy")}catch{}document.body.removeChild(a)};navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(t).catch(()=>r()):r(),g("Copied to clipboard.")}function Y(){const t=e.selectedCurrency==="USD"&&!e.autoDetectedCurrency?"":e.selectedCurrency,r=z(e.manualPaymentAccounts,e.countryCode,t);return{...r,fallbackNotice:r.isFallback?V(r.account,e.countryCode,e.selectedCurrency,e.manualPaymentInstructions):null}}function Q(){const t=document.getElementById("particles");if(t)for(let r=0;r<12;r++){const a=document.createElement("div"),s=Math.random()*3+1;a.className="particle",a.style.width=a.style.height=s+"px",a.style.left=Math.random()*100+"%",a.style.bottom="-10px",a.style.background=Math.random()>.5?"rgba(59,130,246,.4)":"rgba(251,191,36,.3)",a.style.animationDuration=Math.random()*20+15+"s",a.style.animationDelay=Math.random()*20+"s",t.appendChild(a)}}Q();async function W(){const t=document.getElementById("checkout-root"),r=new URLSearchParams(window.location.search),a=r.get("status"),s=r.get("transaction_id"),n=r.get("tx_ref"),c=r.get("order_number");if(a==="verify"&&s){await le(s,n,c||localStorage.getItem("kco_pending_order"));return}if(e.isGuest=r.get("guest")==="1",!e.isGuest&&(e.user=await O(),!e.user)){window.location.href="/auth.html?redirect=/checkout.html";return}const i=r.get("id");if(i){if(e.listing=k(i)||C(i)||I(i)||S(i)||A(i),!e.listing){const[{generateListingById:o},{loadHiddenCatalogIds:l}]=await Promise.all([m(()=>import("./catalog-DMzG21Ab.js"),__vite__mapDeps([0,1,2])),m(()=>import("./catalog-hidden-store-A7rGgF0I.js"),__vite__mapDeps([1,2]))]);await l(),e.listing=o(i)}if(e.listing||(await $(),e.listing=k(i)),!e.listing){t.innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}e.cartItems=[{listing:e.listing,quantity:1}]}else{const o=JSON.parse(localStorage.getItem("kco_cart")||"[]");await $();const l=U(),[{generateListingById:d},{loadHiddenCatalogIds:v}]=await Promise.all([m(()=>import("./catalog-DMzG21Ab.js"),__vite__mapDeps([0,1,2])),m(()=>import("./catalog-hidden-store-A7rGgF0I.js"),__vite__mapDeps([1,2]))]);if(await v(),e.cartItems=o.map(p=>{const _=l.find(N=>N.property_id===p)||C(p)||I(p)||S(p)||A(p)||d(p);return _?{listing:_,quantity:1}:null}).filter(Boolean),e.cartItems.length===0){t.innerHTML=M(),window.lucide&&lucide.createIcons();return}e.listing=e.cartItems[0].listing}if(e.countryCode=localStorage.getItem("kco_country")||"US",e.user&&!e.isGuest){const{data:o}=await y.from("profiles").select("country_code").eq("user_id",e.user.id).maybeSingle();o?.country_code&&(e.countryCode=o.country_code)}if(e.autoDetectedCurrency=L(e.countryCode)||"",e.selectedCurrency=e.autoDetectedCurrency||"USD",e.paymentSettings=await G(),e.manualPaymentAccounts=R(e.paymentSettings),e.manualPaymentInstructions=H(e.paymentSettings),e.paymentGateway=e.paymentSettings.payment_gateway||"both",e.paymentGateway==="manual"&&(e.paymentMethod="manual_bank_transfer"),e.paymentGateway==="flutterwave"&&(e.paymentMethod="flutterwave"),B(e.manualPaymentAccounts).includes(e.selectedCurrency)||(e.selectedCurrency="USD"),e.user&&!e.isGuest){const{data:o}=await y.from("shipping_addresses").select("*").eq("user_id",e.user.id).order("created_at",{ascending:!1});e.addresses=o||[];const l=e.addresses.find(v=>v.is_default);l&&(e.selectedAddressId=l.id);const{data:d}=await y.from("profiles").select("*").eq("user_id",e.user.id).maybeSingle();d&&(e.fullName=d.display_name||`${d.first_name||""} ${d.last_name||""}`.trim(),e.email=e.user.email,e.phone=d.phone_code&&d.phone_number?`+${d.phone_code} ${d.phone_number}`:"",e.shippingCountry=d.country_code||e.countryCode)}e.orderNumber=J(),u()}function h(){return e.cartItems.reduce((t,r)=>t+r.listing.price*r.quantity,0)}function K(){return 0}function Z(){return 0}function w(){return Math.round(h()*Z()*100)/100}function x(){return h()+K()+w()}function u(){const t=document.getElementById("checkout-root");t.innerHTML=`
    <div class="fade-in">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-600 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-blue-600">Checkout</span>
      </div>

      <!-- Step indicator -->
      ${ee()}

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        <div class="lg:col-span-2 space-y-5">
          ${e.step===1?te():""}
          ${e.step===2?re():""}
          ${e.step===3?ae():""}
        </div>
        <div class="lg:col-span-1">
          ${ie()}
        </div>
      </div>
    </div>
  `,window.lucide&&lucide.createIcons(),document.querySelectorAll(".btn-press").forEach(T)}function ee(){const t=[{num:1,label:"Review Cart",icon:"shopping-cart"},{num:2,label:"Shipping & Billing",icon:"map-pin"},{num:3,label:"Payment",icon:"credit-card"}];return`
    <div class="flex items-center justify-center gap-2 sm:gap-4 mb-6">
      ${t.map((r,a)=>`
        <div class="flex items-center gap-2 sm:gap-4">
          <div class="flex items-center gap-2">
            <div class="step-bar w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${e.step>=r.num?"bg-blue-100 border border-blue-300 text-blue-600":"bg-gray-50 border border-blue-100 text-gray-600"} ${e.step===r.num?"pulse-glow":""}">
              ${e.step>r.num?'<i data-lucide="check" class="w-4 h-4 text-emerald-600"></i>':`<i data-lucide="${r.icon}" class="w-4 h-4"></i>`}
            </div>
            <span class="text-xs font-bold ${e.step>=r.num?"text-gray-900":"text-gray-600"} hidden sm:inline">${r.label}</span>
          </div>
          ${a<t.length-1?`<div class="step-bar w-8 sm:w-16 h-0.5 ${e.step>r.num?"bg-blue-500":"bg-blue-50"}"></div>`:""}
        </div>
      `).join("")}
    </div>
  `}function te(){return`
    <div class="glass border border-blue-200 rounded-2xl p-5 slide-up">
      <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide flex items-center gap-2 mb-4">
        <i data-lucide="shopping-cart" class="w-4 h-4 text-blue-600"></i> Shopping Cart (${e.cartItems.length})
      </h3>
      <div class="space-y-3">
        ${e.cartItems.map((t,r)=>`
            <div class="flex items-center gap-3 p-3 bg-gray-50 border border-blue-100 rounded-xl">
              <div class="w-16 h-16 rounded-lg bg-gray-50 overflow-hidden shrink-0 ring-1 ring-blue-500/10">
                <img src="${t.listing.images?.[0]||f}" class="w-full h-full object-cover" onerror="this.src='${f}'">
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-bold text-gray-900 truncate">${t.listing.title}</h4>
                <p class="text-xs text-gray-500">${t.listing.property_id}</p>
                <p class="text-sm font-bold text-amber-600 mt-1">${F(t.listing)}</p>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <button onclick="changeQty(${r}, -1)" class="w-9 h-9 bg-gray-100 hover:bg-blue-100 border border-blue-200 rounded-lg text-gray-600 hover:text-gray-900 transition flex items-center justify-center"><i data-lucide="minus" class="w-4 h-4"></i></button>
                <span class="text-sm font-bold text-gray-900 w-8 text-center">${t.quantity}</span>
                <button onclick="changeQty(${r}, 1)" class="w-9 h-9 bg-gray-100 hover:bg-blue-100 border border-blue-200 rounded-lg text-gray-600 hover:text-gray-900 transition flex items-center justify-center"><i data-lucide="plus" class="w-4 h-4"></i></button>
              </div>
              <button onclick="removeCartItem(${r})" class="p-2 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg text-red-600 transition shrink-0"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
            </div>
          `).join("")}
      </div>
    </div>

    <div class="flex justify-end">
      <button onclick="goToStep(2)" class="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-600/30 relative overflow-hidden">
        Continue to Shipping <i data-lucide="arrow-right" class="w-4 h-4"></i>
      </button>
    </div>
  `}function re(){const t=e.addresses.length>0&&!e.isGuest?`
    <div class="mb-5">
      <h4 class="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3">Saved Addresses</h4>
      <div class="space-y-2">
        ${e.addresses.map(a=>{const s=q(a.country_code);return`
            <div onclick="selectAddress('${a.id}')" class="cursor-pointer p-3 border rounded-xl transition ${e.selectedAddressId===a.id?"bg-blue-50 border-blue-300":"bg-gray-50 border-blue-100 hover:border-blue-200"}">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-sm font-bold text-gray-900">${a.label}</span>
                ${a.is_default?'<span class="text-[10px] text-emerald-600 font-bold uppercase">Default</span>':""}
              </div>
              <p class="text-xs text-gray-600">${a.full_name} · ${a.address_line1}, ${a.city}, ${a.state} ${a.postal_code} · ${s?s.flag+" "+s.name:a.country_code}</p>
              <p class="text-xs text-gray-500 mt-0.5">${a.phone}</p>
            </div>
          `}).join("")}
        <button onclick="selectAddress('')" class="w-full text-left p-3 border border-dashed border-blue-200 hover:border-blue-300 rounded-xl text-sm text-blue-600 font-bold transition flex items-center gap-2">
          <i data-lucide="plus" class="w-4 h-4"></i> Enter a new address
        </button>
      </div>
    </div>
  `:"",r=!e.selectedAddressId||e.isGuest;return`
    <div class="glass border border-blue-200 rounded-2xl p-5 slide-up">
      <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide flex items-center gap-2 mb-4">
        <i data-lucide="map-pin" class="w-4 h-4 text-blue-600"></i> Shipping Address
      </h3>
      ${t}
      ${r?`
        <div class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Full Name *</label>
              <input type="text" id="ship-name" value="${e.fullName}" required class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
            </div>
            <div>
              <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Phone *</label>
              <input type="tel" id="ship-phone" value="${e.phone}" required class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
            </div>
          </div>
          ${e.isGuest?`
            <div>
              <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Email *</label>
              <input type="email" id="ship-email" value="${e.email}" required class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
            </div>
          `:""}
          <div>
            <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Address Line 1 *</label>
            <input type="text" id="ship-addr1" value="${e.shippingAddr1}" required class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Address Line 2 (Optional)</label>
            <input type="text" id="ship-addr2" value="${e.shippingAddr2}" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div><label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">City *</label><input type="text" id="ship-city" value="${e.shippingCity}" required class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500"></div>
            <div><label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">State *</label><input type="text" id="ship-state" value="${e.shippingState}" required class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500"></div>
            <div><label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Postal *</label><input type="text" id="ship-postal" value="${e.shippingPostal}" required class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500"></div>
          </div>
          <div>
            <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Country *</label>
            <select id="ship-country" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
              ${D.map(a=>`<option value="${a.code}" ${e.shippingCountry===a.code?"selected":""}>${a.flag} ${a.name}</option>`).join("")}
            </select>
          </div>
        </div>
      `:""}
    </div>

    <!-- Billing -->
    <div class="glass border border-blue-200 rounded-2xl p-5 slide-up">
      <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide flex items-center gap-2 mb-4">
        <i data-lucide="file-text" class="w-4 h-4 text-blue-600"></i> Billing Information
      </h3>
      <label class="flex items-center gap-2 cursor-pointer mb-4">
        <input type="checkbox" id="billing-same" ${e.billingSame?"checked":""} onchange="toggleBilling()" class="w-4 h-4 rounded border-gray-300 bg-white text-blue-500 focus:ring-blue-500">
        <span class="text-sm text-gray-700">Billing address is the same as shipping address</span>
      </label>
      <div id="billing-fields" class="${e.billingSame?"hidden":""}">
        <textarea id="billing-address" rows="3" placeholder="Enter full billing address..." class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500 resize-none">${e.billingAddress}</textarea>
      </div>
    </div>

    <div class="flex justify-between">
      <button onclick="goToStep(1)" class="btn-press inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-100 border border-blue-200 text-gray-600 font-bold py-3 px-6 rounded-xl text-sm uppercase tracking-wide transition relative overflow-hidden">
        <i data-lucide="arrow-left" class="w-4 h-4"></i> Back
      </button>
      <button onclick="goToStep(3)" class="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-600/30 relative overflow-hidden">
        Continue to Payment <i data-lucide="arrow-right" class="w-4 h-4"></i>
      </button>
    </div>
  `}function ae(){const t=B(e.manualPaymentAccounts),r=Y(),a=e.paymentGateway==="both"||e.paymentGateway==="flutterwave",s=e.paymentGateway==="both"||e.paymentGateway==="manual";return`
    <!-- Payment method selection -->
    <div class="glass border border-blue-200 rounded-2xl p-5 slide-up">
      <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide flex items-center gap-2 mb-4">
        <i data-lucide="credit-card" class="w-4 h-4 text-blue-600"></i> Payment Method
      </h3>
      <div class="space-y-3">
        <!-- Flutterwave -->
        ${a?`<div onclick="selectPaymentMethod('flutterwave')" class="pay-method cursor-pointer p-4 border rounded-xl transition ${e.paymentMethod==="flutterwave"?"selected":"bg-gray-50 border-blue-100 hover:border-blue-200"}">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center"><i data-lucide="zap" class="w-5 h-5 text-blue-600"></i></div>
            <div class="flex-1">
              <h4 class="text-sm font-bold text-gray-900">Flutterwave</h4>
              <p class="text-xs text-gray-500">Pay with card, bank transfer, USSD, or mobile money</p>
            </div>
            <div class="w-5 h-5 rounded-full border-2 ${e.paymentMethod==="flutterwave"?"border-blue-500 bg-blue-500":"border-gray-300"} flex items-center justify-center">
              ${e.paymentMethod==="flutterwave"?'<div class="w-2 h-2 bg-white rounded-full"></div>':""}
            </div>
          </div>
        </div>`:""}

        <!-- Manual Bank Transfer -->
        ${s?`<div onclick="selectPaymentMethod('manual_bank_transfer')" class="pay-method cursor-pointer p-4 border rounded-xl transition ${e.paymentMethod==="manual_bank_transfer"?"selected":"bg-gray-50 border-blue-100 hover:border-blue-200"}">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center"><i data-lucide="landmark" class="w-5 h-5 text-blue-600"></i></div>
            <div class="flex-1">
              <h4 class="text-sm font-bold text-gray-900">Manual Bank Transfer</h4>
              <p class="text-xs text-gray-500">Pay to the matched country account and upload your receipt</p>
            </div>
            <div class="w-5 h-5 rounded-full border-2 ${e.paymentMethod==="manual_bank_transfer"?"border-blue-500 bg-blue-500":"border-gray-300"} flex items-center justify-center">
              ${e.paymentMethod==="manual_bank_transfer"?'<div class="w-2 h-2 bg-white rounded-full"></div>':""}
            </div>
          </div>
        </div>`:""}
      </div>
    </div>

    <!-- Currency selector -->
    <div class="glass border border-blue-200 rounded-2xl p-5 slide-up">
      <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide flex items-center gap-2 mb-3">
        <i data-lucide="globe" class="w-4 h-4 text-blue-600"></i> Payment Currency
      </h3>
      <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
        ${t.map(n=>{const c=e.manualPaymentAccounts.find(i=>i.currency===n);return c?`<button onclick="selectCurrency('${n}')" class="btn-press flex flex-col items-center gap-1 p-2.5 rounded-xl border transition relative overflow-hidden ${n===e.selectedCurrency?"bg-blue-50 border-blue-300 text-blue-600":"bg-gray-50 border-blue-100 text-gray-600 hover:border-blue-200"}">
            <span class="text-xl">${c.flag}</span><span class="text-xs font-bold">${n}</span>
          </button>`:""}).join("")}
      </div>
    </div>

    <!-- Bank account details (if manual) -->
    ${e.paymentMethod==="manual_bank_transfer"?se(r.account,r.fallbackNotice,e.manualPaymentInstructions):""}

    <!-- Place order button -->
    <div class="space-y-3">
      ${e.paymentMethod==="flutterwave"?`
        <button onclick="payWithFlutterwave()" id="flw-pay-btn" class="btn-press w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 relative overflow-hidden">
          <i data-lucide="zap" class="w-5 h-5"></i> Pay ${b(x(),e.selectedCurrency)} with Flutterwave
        </button>
      `:`
        <button onclick="placeOrderManual()" id="manual-pay-btn" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 relative overflow-hidden">
          <i data-lucide="check-circle" class="w-5 h-5"></i> Place Order & Upload Receipt
        </button>
      `}
      <button onclick="goToStep(2)" class="btn-press w-full bg-gray-100 hover:bg-gray-100 border border-blue-200 text-gray-600 font-bold py-3 rounded-xl text-sm uppercase tracking-wide transition relative overflow-hidden">
        <i data-lucide="arrow-left" class="w-4 h-4 inline mr-2"></i> Back to Shipping
      </button>
    </div>

    <p class="text-center text-xs text-gray-500 flex items-center justify-center gap-1.5 mt-3">
      <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i> Your payment is secured with SSL encryption.
    </p>
  `}function se(t,r,a){const s=[{label:"Beneficiary Name",value:t.beneficiary},{label:"Bank Name",value:t.bankName},{label:"Account Number",value:t.accountNumber},{label:"IBAN",value:t.iban},{label:"SWIFT / BIC",value:t.swift},{label:"Routing (ABA)",value:t.routing},{label:"Sort Code",value:t.sortCode},{label:"Bank Code",value:t.bankCode},{label:"Branch Code",value:t.branchCode},{label:"Institution Number",value:t.institutionNumber},{label:"Transit Number",value:t.transitNumber},{label:"BSB Code",value:t.bsbCode},{label:"Bank Address",value:t.address}].filter(n=>n.value&&n.value.trim()!=="");return`
    <div class="glass border border-blue-200 rounded-2xl p-5 slide-up">
      ${r?`<div class="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-700">${r.message}</div>`:""}
      <div class="flex items-center gap-3 mb-4">
        <div class="p-2.5 bg-blue-50 rounded-lg"><i data-lucide="landmark" class="w-5 h-5 text-blue-600"></i></div>
        <div class="flex-1">
          <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide">Receiving Bank Account</h3>
          <p class="text-gray-500 text-xs">${t.flag} ${t.currencyName} (${t.currency})</p>
        </div>
        <span class="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200"><i data-lucide="shield-check" class="w-3 h-3"></i> Verified</span>
      </div>
      <div class="space-y-2">
        ${s.map(n=>`
          <div class="flex items-center justify-between gap-3 bg-gray-50 border border-blue-100 rounded-xl px-4 py-2.5">
            <div class="min-w-0 flex-1"><div class="text-gray-500 text-[11px] uppercase tracking-wide">${n.label}</div><div class="text-gray-900 text-sm font-medium font-mono break-all">${n.value}</div></div>
            <button onclick="copyToClipboard('${n.value.replace(/'/g,"\\'")}')" class="shrink-0 p-2 bg-gray-100 hover:bg-blue-100 border border-blue-200 rounded-lg transition"><i data-lucide="copy" class="w-4 h-4 text-gray-600"></i></button>
          </div>
        `).join("")}
      </div>
      <div class="mt-4 p-3 bg-gray-50 border border-blue-100 rounded-xl text-xs text-gray-700 leading-relaxed">${a||"After payment, upload your receipt for verification so your goods can be shipped immediately."}</div>
    </div>
  `}function ie(){const t=h(),r=x();return`
    <div class="glass border border-blue-200 rounded-2xl p-5 slide-up lg:sticky lg:top-20">
      <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide flex items-center gap-2 mb-4">
        <i data-lucide="receipt" class="w-4 h-4 text-blue-600"></i> Order Summary
      </h3>
      <div class="space-y-3 mb-4">
        ${e.cartItems.map(a=>`
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-lg bg-gray-50 overflow-hidden shrink-0 ring-1 ring-blue-500/10">
                <img src="${a.listing.images?.[0]||f}" class="w-full h-full object-cover" onerror="this.src='${f}'">
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-bold text-gray-900 truncate">${a.listing.title}</p>
                <p class="text-xs text-gray-500">Qty: ${a.quantity}</p>
              </div>
              <p class="text-xs font-bold text-amber-600 shrink-0">${b(a.listing.price*a.quantity,a.listing.currency||"USD")}</p>
            </div>
          `).join("")}
      </div>
      <div class="space-y-2 pt-4 border-t border-blue-100">
        <div class="flex justify-between text-sm"><span class="text-gray-500">Subtotal</span><span class="text-gray-900 font-bold">${b(t,e.cartItems[0]?.listing?.currency||"USD")}</span></div>
        <div class="flex justify-between text-sm"><span class="text-gray-500">Shipping</span><span class="text-emerald-600 font-bold">Free</span></div>
        ${w()>0?`<div class="flex justify-between text-sm"><span class="text-gray-500">Tax</span><span class="text-gray-900 font-bold">${b(w(),e.cartItems[0]?.listing?.currency||"USD")}</span></div>`:""}
        <div class="flex justify-between text-lg pt-2 border-t border-blue-100"><span class="text-gray-900 font-bold">Total</span><span class="text-amber-600 font-black">${b(r,e.cartItems[0]?.listing?.currency||"USD")}</span></div>
      </div>
      <div class="mt-4 p-3 bg-gray-50 border border-blue-100 rounded-xl">
        <div class="flex items-center gap-2 text-xs text-gray-600">
          <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i>
          <span>Secured with SSL encryption</span>
        </div>
      </div>
      <div class="mt-3 p-3 bg-gray-50 border border-blue-100 rounded-xl">
        <div class="flex items-center gap-2 text-xs text-gray-600">
          <i data-lucide="package" class="w-4 h-4 text-blue-600"></i>
          <span>Order #: <span class="text-blue-600 font-mono font-bold">${e.orderNumber}</span></span>
        </div>
      </div>
      ${e.step<3?`
        <button onclick="goToStep(${e.step+1})" class="btn-press w-full mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 px-6 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-600/30 relative overflow-hidden">
          ${e.step===1?"Proceed to Checkout":"Continue to Payment"} <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      `:""}
    </div>
  `}function M(){return`
    <div class="glass border border-blue-200 rounded-2xl p-10 text-center slide-up">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-4"><i data-lucide="shopping-cart" class="w-8 h-8 text-blue-600"></i></div>
      <h3 class="text-lg font-bold text-gray-900 mb-2">Your Cart is Empty</h3>
      <p class="text-sm text-gray-500 mb-6">Add items to your cart before checking out.</p>
      <a href="/" class="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl uppercase text-sm tracking-wider transition shadow-lg shadow-blue-600/30 relative overflow-hidden"><i data-lucide="shopping-bag" class="w-4 h-4"></i> Browse Marketplace</a>
    </div>
  `}window.changeQty=(t,r)=>{e.cartItems[t].quantity=Math.max(1,e.cartItems[t].quantity+r),u()};window.removeCartItem=t=>{if(e.cartItems.splice(t,1),e.cartItems.length===0){document.getElementById("checkout-root").innerHTML=M(),window.lucide&&lucide.createIcons();return}u()};window.goToStep=t=>{t===3&&!ne()||(t===2&&E(),e.step=t,u(),window.scrollTo({top:0,behavior:"smooth"}))};function E(){(e.isGuest||!e.selectedAddressId)&&(e.fullName=document.getElementById("ship-name")?.value||e.fullName,e.phone=document.getElementById("ship-phone")?.value||e.phone,e.email=document.getElementById("ship-email")?.value||e.email||e.user?.email||"",e.shippingAddr1=document.getElementById("ship-addr1")?.value||"",e.shippingAddr2=document.getElementById("ship-addr2")?.value||"",e.shippingCity=document.getElementById("ship-city")?.value||"",e.shippingState=document.getElementById("ship-state")?.value||"",e.shippingPostal=document.getElementById("ship-postal")?.value||"",e.shippingCountry=document.getElementById("ship-country")?.value||e.shippingCountry),e.billingSame=document.getElementById("billing-same")?.checked??!0,e.billingSame||(e.billingAddress=document.getElementById("billing-address")?.value||"")}function ne(){return E(),e.selectedAddressId&&!e.isGuest?!0:!e.fullName||!e.phone||!e.shippingAddr1||!e.shippingCity||!e.shippingState||!e.shippingPostal?(g("Please fill in all required shipping fields."),!1):e.isGuest&&!e.email?(g("Please enter your email address."),!1):!0}window.selectAddress=t=>{if(e.selectedAddressId=t||null,t){const r=e.addresses.find(a=>a.id===t);r&&(e.fullName=r.full_name,e.phone=r.phone,e.shippingAddr1=r.address_line1,e.shippingAddr2=r.address_line2||"",e.shippingCity=r.city,e.shippingState=r.state,e.shippingPostal=r.postal_code,e.shippingCountry=r.country_code)}u()};window.toggleBilling=()=>{e.billingSame=document.getElementById("billing-same").checked,document.getElementById("billing-fields").classList.toggle("hidden",e.billingSame)};window.selectPaymentMethod=t=>{e.paymentMethod=t,u()};window.selectCurrency=t=>{e.selectedCurrency=t,u()};window.copyToClipboard=X;async function j(t,r={}){const a=h(),s=x(),n=e.selectedAddressId&&e.addresses.length?(()=>{const l=e.addresses.find(d=>d.id===e.selectedAddressId);return l?`${l.address_line1}, ${l.city}, ${l.state} ${l.postal_code}, ${l.country_code}`:""})():`${e.shippingAddr1}${e.shippingAddr2?", "+e.shippingAddr2:""}, ${e.shippingCity}, ${e.shippingState} ${e.shippingPostal}, ${e.shippingCountry}`,c=e.billingSame?n:e.billingAddress||n,i={order_number:e.orderNumber,listing_id:e.listing.property_id,listing_title:e.listing.title,amount:s,currency:e.selectedCurrency,full_name:e.fullName,email:e.email||e.user?.email||"",phone:e.phone,status:"order_placed",payment_method:t,subtotal:a,quantity:e.cartItems.reduce((l,d)=>l+d.quantity,0),billing_address:c,...r};e.isGuest?(i.is_guest=!0,i.user_id=null,i.guest_shipping_address=n,i.guest_country=e.shippingCountry,i.guest_state=e.shippingState,i.guest_city=e.shippingCity,i.guest_postal_code=e.shippingPostal):(i.user_id=e.user.id,e.selectedAddressId&&(i.shipping_address_id=e.selectedAddressId));const{error:o}=await y.from("payment_receipts").insert(i);if(o)throw new Error("Failed to create order: "+o.message);return i}window.payWithFlutterwave=async()=>{const t=document.getElementById("flw-pay-btn");t.disabled=!0,t.innerHTML='<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Initializing payment...',window.lucide&&lucide.createIcons();try{await j("flutterwave"),localStorage.setItem("kco_pending_order",e.orderNumber);const a=await fetch("https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/flutterwave-payment?action=initialize",{method:"POST",headers:{Authorization:"Bearer sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa","Content-Type":"application/json"},body:JSON.stringify({amount:x(),currency:e.selectedCurrency,customer_name:e.fullName,customer_email:e.email||e.user?.email,customer_phone:e.phone,order_number:e.orderNumber,redirect_url:`${window.location.origin}/checkout.html?status=verify&order_number=${e.orderNumber}`})}),s=await a.json();if(!a.ok||s.error)throw new Error(s.error||"Failed to initialize payment");window.location.href=s.payment_link}catch(r){t.disabled=!1,t.innerHTML='<i data-lucide="zap" class="w-5 h-5"></i> Pay with Flutterwave',window.lucide&&lucide.createIcons(),g(r.message||"Payment initialization failed.")}};async function le(t,r,a){const s=document.getElementById("checkout-root");s.innerHTML=`
    <div class="flex flex-col items-center justify-center py-20 fade-in">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-6 pulse-glow">
        <i data-lucide="loader-2" class="w-10 h-10 text-blue-600 animate-spin"></i>
      </div>
      <h1 class="text-2xl font-black text-gray-900 mb-2">Verifying Payment...</h1>
      <p class="text-gray-600 text-sm">Please wait while we confirm your payment.</p>
    </div>
  `,window.lucide&&lucide.createIcons();try{const c=await fetch("https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/flutterwave-payment?action=verify",{method:"POST",headers:{Authorization:"Bearer sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa","Content-Type":"application/json"},body:JSON.stringify({transaction_id:t,tx_ref:r,order_number:a})}),i=await c.json();if(!c.ok||i.error||i.status==="failed"){s.innerHTML=P(i.message||i.error||"Payment verification failed."),window.lucide&&lucide.createIcons();return}s.innerHTML=de(a),window.lucide&&lucide.createIcons(),document.querySelectorAll(".btn-press").forEach(T),localStorage.removeItem("kco_pending_order"),localStorage.removeItem("kco_cart")}catch(n){s.innerHTML=P(n.message),window.lucide&&lucide.createIcons()}}function de(t){return`
    <div class="fade-in text-center py-8 max-w-lg mx-auto">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-emerald-50 rounded-full mb-6 check-pop">
        <i data-lucide="check-circle" class="w-12 h-12 text-emerald-600"></i>
      </div>
      <h1 class="text-2xl font-black text-gray-900 mb-2">Payment Successful!</h1>
      <p class="text-gray-600 text-sm mb-6">Your order has been confirmed and an email receipt has been sent.</p>
      <div class="glass border border-blue-200 rounded-2xl p-5 mb-5 text-left">
        <div class="flex justify-between text-sm mb-2"><span class="text-gray-500">Order Number</span><span class="text-blue-600 font-mono font-bold">${t}</span></div>
        <div class="flex justify-between text-sm mb-2"><span class="text-gray-500">Status</span><span class="text-emerald-600 font-bold">Payment Received</span></div>
        <div class="border-t border-blue-100 pt-3 mt-3">
          <p class="text-xs text-gray-600">You will receive email notifications at each stage: processing, shipping, and delivery.</p>
        </div>
      </div>
      <div class="flex gap-3 justify-center">
        <a href="/account.html" class="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-600/30 relative overflow-hidden">
          <i data-lucide="package" class="w-4 h-4"></i> Track Order
        </a>
        <a href="/" class="btn-press inline-flex items-center gap-2 bg-gray-100 border border-blue-200 text-gray-600 font-bold py-3 px-6 rounded-xl text-sm uppercase tracking-wide transition relative overflow-hidden">
          Continue Shopping
        </a>
      </div>
    </div>
  `}function P(t){return`
    <div class="fade-in text-center py-8 max-w-lg mx-auto">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-full mb-6 check-pop">
        <i data-lucide="x-circle" class="w-12 h-12 text-red-600"></i>
      </div>
      <h1 class="text-2xl font-black text-gray-900 mb-2">Payment Failed</h1>
      <p class="text-gray-600 text-sm mb-2">${t}</p>
      <p class="text-gray-500 text-xs mb-6">Your order has been saved. You can retry payment from your account dashboard.</p>
      <div class="flex gap-3 justify-center">
        <a href="/checkout.html" class="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-6 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-600/30 relative overflow-hidden">
          <i data-lucide="refresh-cw" class="w-4 h-4"></i> Try Again
        </a>
        <a href="/account.html" class="btn-press inline-flex items-center gap-2 bg-gray-100 border border-blue-200 text-gray-600 font-bold py-3 px-6 rounded-xl text-sm uppercase tracking-wide transition relative overflow-hidden">
          View Orders
        </a>
      </div>
    </div>
  `}window.placeOrderManual=async()=>{const t=document.getElementById("manual-pay-btn");t.disabled=!0,t.innerHTML='<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Creating order...',window.lucide&&lucide.createIcons();try{await j("manual_bank_transfer");try{await fetch("https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/send-order-notification",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa"},body:JSON.stringify({order_number:e.orderNumber})})}catch{}const r=new URLSearchParams({id:e.listing.property_id,order:e.orderNumber});e.isGuest&&r.set("guest","1"),window.location.href=`/payment.html?${r.toString()}`}catch(r){t.disabled=!1,t.innerHTML='<i data-lucide="check-circle" class="w-5 h-5"></i> Place Order & Upload Receipt',window.lucide&&lucide.createIcons(),g(r.message||"Failed to create order.")}};W();
