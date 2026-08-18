const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/catalog-3IUO5W3L.js","assets/catalog-hidden-store-wpIcgcJZ.js","assets/live-promo-alerts-RK8Sva9W.js"])))=>i.map(i=>d[i]);
import{l as $,f as S,_ as y,g as D}from"./live-promo-alerts-RK8Sva9W.js";import{d as U,g as F,C as G}from"./localization-Cy7nYYsK.js";import{supabase as f}from"./supabase-client-nvpjTmO6.js";import{getCurrentUser as R}from"./auth-C8sthrmE.js";import{getTruckById as I}from"./truck-data-DnyLExat.js";import{getMotorhomeById as C}from"./motorhome-data-SSjGu6g8.js";import{getCarById as A}from"./car-data-BE0Va4cl.js";import{getPhoneById as P}from"./phone-data-D3PvG27c.js";import{PRODUCT_LISTINGS as H}from"./products-data-CGLFLAJM.js";import{PRODUCT_EXTRA_LISTINGS as z}from"./products-extra-DecCj9NU.js";import{c as J,a as V,b as X,d as E,r as Y,e as Q}from"./payment-settings-BNKKdvkF.js";import"./native-bridge-C-DsKkt8.js";import"./localization-bootstrap-Bp1PVa51.js";const W=[...H,...z];function B(t){return W.find(r=>r.property_id===t)||null}const h="/fallback.svg";let e={user:null,isGuest:!1,listing:null,quantity:1,selectedCurrency:"USD",countryCode:"US",cartItems:[],step:1,paymentMethod:"flutterwave",addresses:[],selectedAddressId:null,billingSame:!0,billingAddress:"",fullName:"",email:"",phone:"",shippingAddr1:"",shippingAddr2:"",shippingCity:"",shippingState:"",shippingPostal:"",shippingCountry:"US",orderNumber:"",processing:!1,paymentSettings:null,manualPaymentAccounts:[],manualPaymentInstructions:"",paymentGateway:"both",autoDetectedCurrency:""};function K(){const t=Date.now().toString(36).toUpperCase().slice(-6),r=Math.random().toString(36).toUpperCase().slice(2,6);return`W-${t}${r}`}function g(t){const r=document.getElementById("toast");document.getElementById("toast-msg").textContent=t,r.classList.remove("translate-y-20","opacity-0"),clearTimeout(r._t),r._t=setTimeout(()=>r.classList.add("translate-y-20","opacity-0"),3e3),window.lucide&&lucide.createIcons()}function N(t){t.addEventListener("click",function(r){if(this.disabled)return;const a=this.getBoundingClientRect(),s=document.createElement("span");s.className="ripple";const i=Math.max(a.width,a.height);s.style.width=s.style.height=i+"px",s.style.left=r.clientX-a.left-i/2+"px",s.style.top=r.clientY-a.top-i/2+"px",this.appendChild(s),setTimeout(()=>s.remove(),600)})}function m(t,r){return`${(parseFloat(t)||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})} ${r}`}function Z(t){const r=m(t.price,t.currency||"USD"),a=parseFloat(t.real_price);return Number.isFinite(a)&&a>0&&a>parseFloat(t.price)?`<span class="price-strike line-through text-gray-400 mr-1 text-xs">${m(a,t.currency||"USD")}</span><span class="text-amber-600 font-bold">${r}</span>`:r}function ee(t){const r=()=>{const a=document.createElement("textarea");a.value=t,document.body.appendChild(a),a.select();try{document.execCommand("copy")}catch{}document.body.removeChild(a)};navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(t).catch(()=>r()):r(),g("Copied to clipboard.")}function te(){const t=e.selectedCurrency==="USD"&&!e.autoDetectedCurrency?"":e.selectedCurrency,r=Y(e.manualPaymentAccounts,e.countryCode,t);return{...r,fallbackNotice:r.isFallback?Q(r.account,e.countryCode,e.selectedCurrency,e.manualPaymentInstructions):null}}function re(){const t=document.getElementById("particles");if(t)for(let r=0;r<12;r++){const a=document.createElement("div"),s=Math.random()*3+1;a.className="particle",a.style.width=a.style.height=s+"px",a.style.left=Math.random()*100+"%",a.style.bottom="-10px",a.style.background=Math.random()>.5?"rgba(59,130,246,.4)":"rgba(251,191,36,.3)",a.style.animationDuration=Math.random()*20+15+"s",a.style.animationDelay=Math.random()*20+"s",t.appendChild(a)}}re();async function ae(){const t=document.getElementById("checkout-root"),r=new URLSearchParams(window.location.search),a=r.get("status"),s=r.get("transaction_id"),i=r.get("tx_ref"),d=r.get("order_number");if(a==="verify"&&s){await be(s,i,d||localStorage.getItem("kco_pending_order"));return}if(e.isGuest=r.get("guest")==="1",!e.isGuest&&(e.user=await R(),!e.user)){window.location.href="/auth.html?redirect=/checkout.html";return}const n=r.get("id");if(n){if(await $(),e.listing=S(n)||I(n)||C(n)||A(n)||P(n)||B(n),!e.listing){const[{generateListingById:c},{loadHiddenCatalogIds:l}]=await Promise.all([y(()=>import("./catalog-3IUO5W3L.js"),__vite__mapDeps([0,1,2])),y(()=>import("./catalog-hidden-store-wpIcgcJZ.js"),__vite__mapDeps([1,2]))]);await l(),e.listing=c(n)}if(e.listing||(e.listing=S(n)),!e.listing){t.innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}e.cartItems=[{listing:e.listing,quantity:1}]}else{const c=JSON.parse(localStorage.getItem("kco_cart")||"[]");await $();const l=D(),[{generateListingById:o},{loadHiddenCatalogIds:w}]=await Promise.all([y(()=>import("./catalog-3IUO5W3L.js"),__vite__mapDeps([0,1,2])),y(()=>import("./catalog-hidden-store-wpIcgcJZ.js"),__vite__mapDeps([1,2]))]);if(await w(),e.cartItems=c.map(u=>{const p=typeof u=="string"?u:u&&u.id;if(!p)return null;const O=u&&typeof u=="object"&&u.qty?Math.max(1,parseInt(u.qty,10)||1):1,k=l.find(q=>q.property_id===p)||I(p)||C(p)||A(p)||P(p)||B(p)||o(p);return k?{listing:k,quantity:O}:null}).filter(Boolean),e.cartItems.length===0){t.innerHTML=M(),window.lucide&&lucide.createIcons();return}e.listing=e.cartItems[0].listing}if(e.countryCode=localStorage.getItem("kco_country")||"US",e.user&&!e.isGuest){const{data:c}=await f.from("profiles").select("country_code").eq("user_id",e.user.id).maybeSingle();c?.country_code&&(e.countryCode=c.country_code)}if(e.autoDetectedCurrency=U(e.countryCode)||"",e.selectedCurrency=e.autoDetectedCurrency||"USD",e.paymentSettings=await J(),e.manualPaymentAccounts=V(e.paymentSettings),e.manualPaymentInstructions=X(e.paymentSettings),e.paymentGateway=e.paymentSettings.payment_gateway||"both",e.paymentGateway==="manual"&&(e.paymentMethod="manual_bank_transfer"),e.paymentGateway==="flutterwave"&&(e.paymentMethod="flutterwave"),E(e.manualPaymentAccounts).includes(e.selectedCurrency)||(e.selectedCurrency="USD"),e.user&&!e.isGuest){const{data:c}=await f.from("shipping_addresses").select("*").eq("user_id",e.user.id).order("created_at",{ascending:!1});e.addresses=c||[];const l=e.addresses.find(w=>w.is_default);l&&(e.selectedAddressId=l.id);const{data:o}=await f.from("profiles").select("*").eq("user_id",e.user.id).maybeSingle();o&&(e.fullName=o.display_name||`${o.first_name||""} ${o.last_name||""}`.trim(),e.email=e.user.email,e.phone=o.phone_code&&o.phone_number?`+${o.phone_code} ${o.phone_number}`:"",e.shippingCountry=o.country_code||e.countryCode)}e.orderNumber=K(),b()}function x(){return e.cartItems.reduce((t,r)=>t+r.listing.price*r.quantity,0)}function se(){return 0}function ie(){return 0}function _(){return Math.round(x()*ie()*100)/100}function v(){return x()+se()+_()}function b(){const t=document.getElementById("checkout-root");t.innerHTML=`
    <div class="fade-in">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-600 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-blue-600">Checkout</span>
      </div>

      <!-- Step indicator -->
      ${ne()}

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        <div class="lg:col-span-2 space-y-5">
          ${e.step===1?le():""}
          ${e.step===2?oe():""}
          ${e.step===3?de():""}
        </div>
        <div class="lg:col-span-1">
          ${ue()}
        </div>
      </div>
    </div>
  `,window.lucide&&lucide.createIcons(),document.querySelectorAll(".btn-press").forEach(N)}function ne(){const t=[{num:1,label:"Review Cart",icon:"shopping-cart"},{num:2,label:"Shipping & Billing",icon:"map-pin"},{num:3,label:"Payment",icon:"credit-card"}];return`
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
  `}function le(){return`
    <div class="glass border border-blue-200 rounded-2xl p-5 slide-up">
      <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide flex items-center gap-2 mb-4">
        <i data-lucide="shopping-cart" class="w-4 h-4 text-blue-600"></i> Shopping Cart (${e.cartItems.length})
      </h3>
      <div class="space-y-3">
        ${e.cartItems.map((t,r)=>`
            <div class="flex items-center gap-3 p-3 bg-gray-50 border border-blue-100 rounded-xl">
              <div class="w-16 h-16 rounded-lg bg-gray-50 overflow-hidden shrink-0 ring-1 ring-blue-500/10">
                <img src="${t.listing.images?.[0]||h}" class="w-full h-full object-cover" onerror="this.src='${h}'">
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-bold text-gray-900 truncate">${t.listing.title}</h4>
                <p class="text-xs text-gray-500">${t.listing.property_id}</p>
                <p class="text-sm font-bold text-amber-600 mt-1">${Z(t.listing)}</p>
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
  `}function oe(){const t=e.addresses.length>0&&!e.isGuest?`
    <div class="mb-5">
      <h4 class="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3">Saved Addresses</h4>
      <div class="space-y-2">
        ${e.addresses.map(a=>{const s=F(a.country_code);return`
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
              ${G.map(a=>`<option value="${a.code}" ${e.shippingCountry===a.code?"selected":""}>${a.flag} ${a.name}</option>`).join("")}
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
  `}function de(){const t=E(e.manualPaymentAccounts),r=te(),a=e.paymentGateway==="both"||e.paymentGateway==="flutterwave",s=e.paymentGateway==="both"||e.paymentGateway==="manual";return`
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
        ${t.map(i=>{const d=e.manualPaymentAccounts.find(n=>n.currency===i);return d?`<button onclick="selectCurrency('${i}')" class="btn-press flex flex-col items-center gap-1 p-2.5 rounded-xl border transition relative overflow-hidden ${i===e.selectedCurrency?"bg-blue-50 border-blue-300 text-blue-600":"bg-gray-50 border-blue-100 text-gray-600 hover:border-blue-200"}">
            <span class="text-xl">${d.flag}</span><span class="text-xs font-bold">${i}</span>
          </button>`:""}).join("")}
      </div>
    </div>

    <!-- Bank account details (if manual) -->
    ${e.paymentMethod==="manual_bank_transfer"?ce(r.account,r.fallbackNotice,e.manualPaymentInstructions):""}

    <!-- Place order button -->
    <div class="space-y-3">
      ${e.paymentMethod==="flutterwave"?`
        <button onclick="payWithFlutterwave()" id="flw-pay-btn" class="btn-press w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 relative overflow-hidden">
          <i data-lucide="zap" class="w-5 h-5"></i> Pay ${m(v(),e.selectedCurrency)} with Flutterwave
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
  `}function ce(t,r,a){const s=[{label:"Beneficiary Name",value:t.beneficiary},{label:"Bank Name",value:t.bankName},{label:"Account Number",value:t.accountNumber},{label:"IBAN",value:t.iban},{label:"SWIFT / BIC",value:t.swift},{label:"Routing (ABA)",value:t.routing},{label:"Sort Code",value:t.sortCode},{label:"Bank Code",value:t.bankCode},{label:"Branch Code",value:t.branchCode},{label:"Institution Number",value:t.institutionNumber},{label:"Transit Number",value:t.transitNumber},{label:"BSB Code",value:t.bsbCode},{label:"Bank Address",value:t.address}].filter(i=>i.value&&i.value.trim()!=="");return`
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
        ${s.map(i=>`
          <div class="flex items-center justify-between gap-3 bg-gray-50 border border-blue-100 rounded-xl px-4 py-2.5">
            <div class="min-w-0 flex-1"><div class="text-gray-500 text-[11px] uppercase tracking-wide">${i.label}</div><div class="text-gray-900 text-sm font-medium font-mono break-all">${i.value}</div></div>
            <button onclick="copyToClipboard('${i.value.replace(/'/g,"\\'")}')" class="shrink-0 p-2 bg-gray-100 hover:bg-blue-100 border border-blue-200 rounded-lg transition"><i data-lucide="copy" class="w-4 h-4 text-gray-600"></i></button>
          </div>
        `).join("")}
      </div>
      <div class="mt-4 p-3 bg-gray-50 border border-blue-100 rounded-xl text-xs text-gray-700 leading-relaxed">${a||"After payment, upload your receipt for verification so your goods can be shipped immediately."}</div>
    </div>
  `}function ue(){const t=x(),r=v();return`
    <div class="glass border border-blue-200 rounded-2xl p-5 slide-up lg:sticky lg:top-20">
      <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide flex items-center gap-2 mb-4">
        <i data-lucide="receipt" class="w-4 h-4 text-blue-600"></i> Order Summary
      </h3>
      <div class="space-y-3 mb-4">
        ${e.cartItems.map(a=>`
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-lg bg-gray-50 overflow-hidden shrink-0 ring-1 ring-blue-500/10">
                <img src="${a.listing.images?.[0]||h}" class="w-full h-full object-cover" onerror="this.src='${h}'">
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-bold text-gray-900 truncate">${a.listing.title}</p>
                <p class="text-xs text-gray-500">Qty: ${a.quantity}</p>
              </div>
              <p class="text-xs font-bold text-amber-600 shrink-0">${m(a.listing.price*a.quantity,a.listing.currency||"USD")}</p>
            </div>
          `).join("")}
      </div>
      <div class="space-y-2 pt-4 border-t border-blue-100">
        <div class="flex justify-between text-sm"><span class="text-gray-500">Subtotal</span><span class="text-gray-900 font-bold">${m(t,e.cartItems[0]?.listing?.currency||"USD")}</span></div>
        <div class="flex justify-between text-sm"><span class="text-gray-500">Shipping</span><span class="text-emerald-600 font-bold">Free</span></div>
        ${_()>0?`<div class="flex justify-between text-sm"><span class="text-gray-500">Tax</span><span class="text-gray-900 font-bold">${m(_(),e.cartItems[0]?.listing?.currency||"USD")}</span></div>`:""}
        <div class="flex justify-between text-lg pt-2 border-t border-blue-100"><span class="text-gray-900 font-bold">Total</span><span class="text-amber-600 font-black">${m(r,e.cartItems[0]?.listing?.currency||"USD")}</span></div>
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
  `}window.changeQty=(t,r)=>{e.cartItems[t].quantity=Math.max(1,e.cartItems[t].quantity+r);try{const a=JSON.parse(localStorage.getItem("kco_cart")||"[]");if(!Array.isArray(a))return b();const s=e.cartItems[t].listing.property_id,i=a.find(d=>(typeof d=="string"?d:d&&d.id)===s);i&&typeof i=="object"&&i.id&&(i.qty=e.cartItems[t].quantity),localStorage.setItem("kco_cart",JSON.stringify(a)),window.dispatchEvent(new CustomEvent("kco-cart-changed"))}catch{}b()};window.removeCartItem=t=>{const r=e.cartItems[t].listing.property_id;e.cartItems.splice(t,1);try{const a=JSON.parse(localStorage.getItem("kco_cart")||"[]");if(Array.isArray(a)){const s=a.filter(i=>(typeof i=="string"?i:i&&i.id)!==r);localStorage.setItem("kco_cart",JSON.stringify(s)),window.dispatchEvent(new CustomEvent("kco-cart-changed"))}}catch{}if(e.cartItems.length===0){document.getElementById("checkout-root").innerHTML=M(),window.lucide&&lucide.createIcons();return}b()};window.goToStep=t=>{t===3&&!pe()||(t===2&&j(),e.step=t,b(),window.scrollTo({top:0,behavior:"smooth"}))};function j(){(e.isGuest||!e.selectedAddressId)&&(e.fullName=document.getElementById("ship-name")?.value||e.fullName,e.phone=document.getElementById("ship-phone")?.value||e.phone,e.email=document.getElementById("ship-email")?.value||e.email||e.user?.email||"",e.shippingAddr1=document.getElementById("ship-addr1")?.value||"",e.shippingAddr2=document.getElementById("ship-addr2")?.value||"",e.shippingCity=document.getElementById("ship-city")?.value||"",e.shippingState=document.getElementById("ship-state")?.value||"",e.shippingPostal=document.getElementById("ship-postal")?.value||"",e.shippingCountry=document.getElementById("ship-country")?.value||e.shippingCountry),e.billingSame=document.getElementById("billing-same")?.checked??!0,e.billingSame||(e.billingAddress=document.getElementById("billing-address")?.value||"")}function pe(){return j(),e.selectedAddressId&&!e.isGuest?!0:!e.fullName||!e.phone||!e.shippingAddr1||!e.shippingCity||!e.shippingState||!e.shippingPostal?(g("Please fill in all required shipping fields."),!1):e.isGuest&&!e.email?(g("Please enter your email address."),!1):!0}window.selectAddress=t=>{if(e.selectedAddressId=t||null,t){const r=e.addresses.find(a=>a.id===t);r&&(e.fullName=r.full_name,e.phone=r.phone,e.shippingAddr1=r.address_line1,e.shippingAddr2=r.address_line2||"",e.shippingCity=r.city,e.shippingState=r.state,e.shippingPostal=r.postal_code,e.shippingCountry=r.country_code)}b()};window.toggleBilling=()=>{e.billingSame=document.getElementById("billing-same").checked,document.getElementById("billing-fields").classList.toggle("hidden",e.billingSame)};window.selectPaymentMethod=t=>{e.paymentMethod=t,b()};window.selectCurrency=t=>{e.selectedCurrency=t,b()};window.copyToClipboard=ee;async function L(t,r={}){const a=x(),s=v(),i=e.selectedAddressId&&e.addresses.length?(()=>{const l=e.addresses.find(o=>o.id===e.selectedAddressId);return l?`${l.address_line1}, ${l.city}, ${l.state} ${l.postal_code}, ${l.country_code}`:""})():`${e.shippingAddr1}${e.shippingAddr2?", "+e.shippingAddr2:""}, ${e.shippingCity}, ${e.shippingState} ${e.shippingPostal}, ${e.shippingCountry}`,d=e.billingSame?i:e.billingAddress||i,n={order_number:e.orderNumber,listing_id:e.listing.property_id,listing_title:e.listing.title,amount:s,currency:e.selectedCurrency,full_name:e.fullName,email:e.email||e.user?.email||"",phone:e.phone,status:"order_placed",payment_method:t,subtotal:a,quantity:e.cartItems.reduce((l,o)=>l+o.quantity,0),billing_address:d,...r};e.isGuest?(n.is_guest=!0,n.user_id=null,n.guest_shipping_address=i,n.guest_country=e.shippingCountry,n.guest_state=e.shippingState,n.guest_city=e.shippingCity,n.guest_postal_code=e.shippingPostal):(n.user_id=e.user.id,e.selectedAddressId&&(n.shipping_address_id=e.selectedAddressId));const{error:c}=await f.from("payment_receipts").insert(n);if(c)throw new Error("Failed to create order: "+c.message);return n}window.payWithFlutterwave=async()=>{const t=document.getElementById("flw-pay-btn");t.disabled=!0,t.innerHTML='<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Initializing payment...',window.lucide&&lucide.createIcons();try{await L("flutterwave"),localStorage.setItem("kco_pending_order",e.orderNumber);const a=await fetch("https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/flutterwave-payment?action=initialize",{method:"POST",headers:{Authorization:"Bearer sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa","Content-Type":"application/json"},body:JSON.stringify({amount:v(),currency:e.selectedCurrency,customer_name:e.fullName,customer_email:e.email||e.user?.email,customer_phone:e.phone,order_number:e.orderNumber,redirect_url:`${window.location.origin}/checkout.html?status=verify&order_number=${e.orderNumber}`})}),s=await a.json();if(!a.ok||s.error)throw new Error(s.error||"Failed to initialize payment");window.location.href=s.payment_link}catch(r){t.disabled=!1,t.innerHTML='<i data-lucide="zap" class="w-5 h-5"></i> Pay with Flutterwave',window.lucide&&lucide.createIcons(),g(r.message||"Payment initialization failed.")}};async function be(t,r,a){const s=document.getElementById("checkout-root");s.innerHTML=`
    <div class="flex flex-col items-center justify-center py-20 fade-in">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-6 pulse-glow">
        <i data-lucide="loader-2" class="w-10 h-10 text-blue-600 animate-spin"></i>
      </div>
      <h1 class="text-2xl font-black text-gray-900 mb-2">Verifying Payment...</h1>
      <p class="text-gray-600 text-sm">Please wait while we confirm your payment.</p>
    </div>
  `,window.lucide&&lucide.createIcons();try{const d=await fetch("https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/flutterwave-payment?action=verify",{method:"POST",headers:{Authorization:"Bearer sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa","Content-Type":"application/json"},body:JSON.stringify({transaction_id:t,tx_ref:r,order_number:a})}),n=await d.json();if(!d.ok||n.error||n.status==="failed"){s.innerHTML=T(n.message||n.error||"Payment verification failed."),window.lucide&&lucide.createIcons();return}s.innerHTML=me(a),window.lucide&&lucide.createIcons(),document.querySelectorAll(".btn-press").forEach(N),localStorage.removeItem("kco_pending_order"),localStorage.removeItem("kco_cart")}catch(i){s.innerHTML=T(i.message),window.lucide&&lucide.createIcons()}}function me(t){return`
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
  `}function T(t){return`
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
  `}window.placeOrderManual=async()=>{const t=document.getElementById("manual-pay-btn");t.disabled=!0,t.innerHTML='<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Creating order...',window.lucide&&lucide.createIcons();try{await L("manual_bank_transfer");try{await fetch("https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/send-order-notification",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa"},body:JSON.stringify({order_number:e.orderNumber})})}catch{}const r=new URLSearchParams({id:e.listing.property_id,order:e.orderNumber});e.isGuest&&r.set("guest","1"),window.location.href=`/payment.html?${r.toString()}`}catch(r){t.disabled=!1,t.innerHTML='<i data-lucide="check-circle" class="w-5 h-5"></i> Place Order & Upload Receipt',window.lucide&&lucide.createIcons(),g(r.message||"Failed to create order.")}};ae();
