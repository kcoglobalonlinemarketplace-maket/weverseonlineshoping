const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/catalog-DMzG21Ab.js","assets/catalog-hidden-store-A7rGgF0I.js","assets/supabase-lazy-BQT6Mc9B.js"])))=>i.map(i=>d[i]);
import{_ as O}from"./supabase-lazy-BQT6Mc9B.js";import{g as q,d as K}from"./localization-B9dPwW8Z.js";import{f as R,l as Z,a as T,b as Q}from"./showroom-data-D4FAe61E.js";import{g as ee,a as te,b as le}from"./car-data-BxYT2tBT.js";import{g as re}from"./phone-data-Db9w31Ye.js";import{getCurrentUser as ae}from"./auth-C8sthrmE.js";import{supabase as L}from"./supabase-client-nvpjTmO6.js";import{c as ie,a as oe,b as se,d as H,r as ne,e as de}from"./payment-settings-COR8B_0s.js";import"./native-bridge-B8Ogoih_.js";import"./localization-bootstrap-5WVGdm8b.js";import"./live-stream-mode-CtlZxsIl.js";import"./customer-ai-widget-uo9U4VGt.js";import"./brand-QZwsptsl.js";const z="/fallback.svg";let P=null,k=[],I="",S="";const ce=[{name:"PayPal",icon:"wallet",color:"text-blue-600"},{name:"Stripe",icon:"credit-card",color:"text-violet-600"},{name:"Flutterwave",icon:"zap",color:"text-blue-600"},{name:"Paystack",icon:"layers",color:"text-cyan-600"},{name:"Apple Pay",icon:"smartphone",color:"text-gray-700"},{name:"Google Pay",icon:"smartphone",color:"text-green-600"},{name:"Visa",icon:"credit-card",color:"text-blue-500"},{name:"Mastercard",icon:"credit-card",color:"text-red-500"},{name:"American Express",icon:"credit-card",color:"text-blue-700"},{name:"Discover",icon:"credit-card",color:"text-blue-500"},{name:"Verve",icon:"credit-card",color:"text-green-500"},{name:"Bitcoin (BTC)",icon:"bitcoin",color:"text-yellow-500"},{name:"Ethereum (ETH)",icon:"bitcoin",color:"text-indigo-600"},{name:"USDT",icon:"bitcoin",color:"text-green-600"}],_=[{id:"placed",label:"Order Placed",icon:"shopping-bag",color:"text-blue-600",bg:"bg-blue-50"},{id:"submitted",label:"Payment Submitted",icon:"upload",color:"text-cyan-600",bg:"bg-cyan-50"},{id:"verification",label:"Pending Verification",icon:"loader",color:"text-amber-600",bg:"bg-amber-50"},{id:"approved",label:"Approved",icon:"check-circle",color:"text-emerald-600",bg:"bg-emerald-50"},{id:"processing",label:"Processing",icon:"package",color:"text-blue-600",bg:"bg-blue-50"},{id:"shipped",label:"Shipped",icon:"truck",color:"text-indigo-600",bg:"bg-indigo-50"},{id:"delivered",label:"Delivered",icon:"package-check",color:"text-emerald-600",bg:"bg-emerald-50"}];function ue(){return new URLSearchParams(window.location.search).get("id")}function pe(){return localStorage.getItem("kco_country")||"US"}function be(){const e=Date.now().toString(36).toUpperCase().slice(-6),l=Math.random().toString(36).toUpperCase().slice(2,6);return`KCO-${e}${l}`}function U(e,l){const t=()=>{const i=document.createElement("textarea");i.value=e,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select();try{document.execCommand("copy")}catch{}document.body.removeChild(i)};if(navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(e).catch(()=>t()):t(),l){const i=l.innerHTML;l.innerHTML='<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i>',window.lucide&&lucide.createIcons(),setTimeout(()=>{l.innerHTML=i,window.lucide&&lucide.createIcons()},1500)}J("Copied Successfully.")}function J(e){let l=document.getElementById("payment-toast");l||(l=document.createElement("div"),l.id="payment-toast",l.className="fixed bottom-5 right-5 z-[100] transform translate-y-20 opacity-0 bg-gray-900 border border-blue-500/30 text-white px-5 py-3 rounded-xl shadow-xl text-xs flex items-center gap-2 font-medium transition-all duration-300",l.innerHTML='<i data-lucide="info" class="w-4 h-4 text-blue-600"></i><span id="payment-toast-msg">Action</span>',document.body.appendChild(l)),l.querySelector("#payment-toast-msg").textContent=e,l.classList.remove("translate-y-20","opacity-0"),clearTimeout(l._t),l._t=setTimeout(()=>l.classList.add("translate-y-20","opacity-0"),3e3),window.lucide&&lucide.createIcons()}function V(e,l){const t=ne(k,e,l);return{...t,fallbackNotice:t.isFallback?de(t.account,e,l,I):null}}function me(){const e=document.getElementById("particles");if(e)for(let l=0;l<14;l++){const t=document.createElement("div"),i=Math.random()*3+1;t.className="particle",t.style.width=i+"px",t.style.height=i+"px",t.style.left=Math.random()*100+"%",t.style.bottom="-10px",t.style.background=Math.random()>.5?"rgba(59,130,246,.4)":"rgba(251,191,36,.3)",t.style.animationDuration=Math.random()*20+15+"s",t.style.animationDelay=Math.random()*20+"s",e.appendChild(t)}}me();function ge(e,l,t){const i=T(e);return`
    <div class="glass border border-blue-200 rounded-2xl p-5 mb-5 slide-up">
      <div class="flex items-center gap-2 mb-4">
        <div class="p-2 bg-blue-50 rounded-lg"><i data-lucide="shopping-bag" class="w-4 h-4 text-blue-600"></i></div>
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide">Order Summary</h3>
      </div>
      <div class="flex gap-4">
        <div class="w-24 h-24 rounded-xl overflow-hidden bg-gray-50 shrink-0 ring-1 ring-blue-500/10">
          <img src="${l}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${z}'">
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-bold text-gray-900 truncate">${e.title}</h4>
          <p class="text-gray-500 text-xs mt-0.5">ID: <span class="text-blue-600 font-mono">${e.property_id}</span></p>
          ${t&&e.city?`<p class="text-gray-600 text-xs mt-0.5">${Q(e.country_code)} ${e.city}, ${e.country}</p>`:""}
          <p class="text-2xl font-black text-blue-600 mt-2">${i}</p>
        </div>
      </div>
    </div>
  `}function A(e,l,t){const i=[{label:"Country",value:e.country},{label:"Bank Name",value:e.bankName},{label:"Transfer Type",value:e.transferType},{label:"Beneficiary Name",value:e.beneficiary},{label:"Account Number",value:e.accountNumber},{label:"Account Type",value:e.accountType},{label:"IBAN",value:e.iban},{label:"SWIFT / BIC Code",value:e.swift},{label:"Routing (ABA)",value:e.routing},{label:"Sort Code",value:e.sortCode},{label:"Bank Code",value:e.bankCode},{label:"Branch Code",value:e.branchCode},{label:"Institution Number",value:e.institutionNumber},{label:"Transit Number",value:e.transitNumber},{label:"BSB Code",value:e.bsbCode},{label:"Bank Address",value:e.address}].filter(r=>r.value&&r.value.trim()!==""),o=i.map(r=>({label:r.label,value:r.value}));return`
    <div class="glass border border-blue-200 rounded-2xl p-5 mb-5 slide-up">
      
      <div class="flex items-center gap-3 mb-5">
        <div class="p-2.5 bg-blue-50 rounded-lg"><i data-lucide="landmark" class="w-5 h-5 text-blue-600"></i></div>
        <div class="flex-1">
          <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide">Receiving Bank Account</h3>
          <p class="text-gray-500 text-xs">${e.flag} ${e.currencyName} (${e.currency})</p>
        </div>
        <span class="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
          <i data-lucide="shield-check" class="w-3 h-3"></i> Verified
        </span>
      </div>
      <div class="space-y-2">
        ${i.map(r=>`
          <div class="flex items-center justify-between gap-3 bg-gray-50 border border-blue-100 rounded-xl px-4 py-2.5">
            <div class="min-w-0 flex-1">
              <div class="text-gray-500 text-[11px] uppercase tracking-wide">${r.label}</div>
              <div class="text-gray-900 text-sm font-medium font-mono break-all">${r.value}</div>
            </div>
            <button onclick="copyToClipboard('${r.value.replace(/'/g,"\\'")}', this)" class="shrink-0 p-2 bg-gray-100 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 rounded-lg transition group" title="Copy ${r.label}">
              <i data-lucide="copy" class="w-4 h-4 text-gray-600 group-hover:text-blue-600"></i>
            </button>
          </div>
        `).join("")}
      </div>
      <button onclick='copyAllDetails(${JSON.stringify(o).replace(/'/g,"&#39;")})' class="btn-press w-full mt-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-600 font-bold py-2.5 rounded-xl uppercase text-xs tracking-wider transition flex items-center justify-center gap-2 relative overflow-hidden">
        <i data-lucide="copy-check" class="w-4 h-4"></i> Copy All Account Details
      </button>
      <div class="mt-4 p-3 bg-gray-50 border border-blue-100 rounded-xl text-xs text-gray-700 leading-relaxed">${t||"After payment, upload your receipt for verification so your goods can be shipped immediately."}</div>
    </div>
  `}function G(e){return`
    <div class="glass border border-amber-200 rounded-2xl p-5 mb-5 slide-up">
      <div class="flex items-start gap-3 mb-4">
        <div class="p-2.5 bg-amber-50 rounded-lg shrink-0"><i data-lucide="info" class="w-5 h-5 text-amber-600"></i></div>
        <div class="text-sm text-gray-700 leading-relaxed">
          <p class="font-bold text-amber-600 mb-2">Hello Customer,</p>
          <p class="mb-2">${e?.message||"Your local currency is not currently supported by our Manual Bank Transfer system."}</p>
          <p class="font-bold text-amber-600">Thank you for choosing Weverse Online Shop.</p>
        </div>
      </div>
    </div>
    ${A(e.account,null,e.instructions)}
  `}function xe(e,l,t){const i=H(k),o=t?q(t):null;return`
    <div class="glass border border-blue-200 rounded-2xl p-5 mb-5 slide-up">
      <div class="flex items-center gap-3 mb-4">
        <div class="p-2.5 bg-blue-50 rounded-lg"><i data-lucide="globe" class="w-5 h-5 text-blue-600"></i></div>
        <div class="flex-1">
          <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide">Payment Currency</h3>
          <p class="text-gray-500 text-xs">${o?o.flag+" "+l:l||"Select currency"} ${e?"→ "+e:"→ USD (default)"}</p>
        </div>
      </div>
      <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
        ${i.map(r=>{const n=k.find(u=>u.currency===r);return`
            <button onclick="selectCurrency('${r}')" class="btn-press flex flex-col items-center gap-1 p-3 rounded-xl border transition relative overflow-hidden ${r===e?"bg-blue-50 border-blue-300 text-blue-600 pulse-glow":"bg-gray-50 border-blue-100 text-gray-600 hover:border-blue-200 hover:text-gray-900"}">
              <span class="text-2xl">${n.flag}</span>
              <span class="text-xs font-bold">${r}</span>
              <span class="text-[10px] text-gray-500">${n.currencyName}</span>
            </button>
          `}).join("")}
      </div>
    </div>
  `}function fe(){return`
    <div class="glass border border-blue-200 rounded-2xl p-5 mb-5 slide-up">
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div class="flex items-center gap-3">
          <div class="p-2.5 bg-blue-50 rounded-lg"><i data-lucide="landmark" class="w-6 h-6 text-blue-600"></i></div>
          <div>
            <h3 class="text-sm font-bold text-gray-900">Manual Bank Transfer</h3>
            <p class="text-gray-500 text-xs">Pay directly to our bank account</p>
          </div>
        </div>
        <span class="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
          <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Available
        </span>
      </div>
    </div>
  `}function ye(){return`
    <div class="glass border border-blue-200 rounded-2xl p-5 mb-5 slide-up">
      <div class="flex items-center gap-3 mb-4">
        <div class="p-2.5 bg-gray-100 rounded-lg"><i data-lucide="lock" class="w-5 h-5 text-gray-500"></i></div>
        <div>
          <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide">More Payment Methods</h3>
          <p class="text-gray-500 text-xs">Coming soon to Weverse Online Shop</p>
        </div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        ${ce.map(e=>`
          <div class="relative bg-gray-50 border border-blue-100 rounded-xl p-3 opacity-50 cursor-not-allowed select-none">
            <span class="absolute top-1.5 right-1.5 bg-gray-200 text-gray-600 text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full">Soon</span>
            <div class="flex items-center gap-2 mb-0.5">
              <i data-lucide="${e.icon}" class="w-4 h-4 ${e.color}"></i>
              <span class="text-xs font-bold text-gray-600">${e.name}</span>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Y(e){const l=_.findIndex(t=>t.id===e);return`
    <div class="glass border border-blue-200 rounded-2xl p-5 mb-5 slide-up">
      <div class="flex items-center gap-2 mb-5">
        <div class="p-2 bg-blue-50 rounded-lg"><i data-lucide="git-branch" class="w-4 h-4 text-blue-600"></i></div>
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide">Order Progress</h3>
      </div>
      <div class="relative">
        <!-- Progress line -->
        <div class="absolute left-4 top-4 bottom-4 w-0.5 bg-blue-50"></div>
        <div class="absolute left-4 top-4 w-0.5 bg-blue-500 transition-all duration-500" style="height: ${l>=0?l/(_.length-1)*100:0}%; min-height: 0; max-height: calc(100% - 2rem)"></div>
        <div class="space-y-4">
          ${_.map((t,i)=>{const o=i<=l,r=i===l;return`
              <div class="flex items-center gap-3 relative">
                <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 transition-all duration-300 ${o?t.bg+" border border-blue-200":"bg-gray-50 border border-blue-100"} ${r?"pulse-glow":""}">
                  <i data-lucide="${t.icon}" class="w-4 h-4 ${o?t.color:"text-gray-600"} ${r?"animate-pulse":""}"></i>
                </div>
                <div class="flex-1">
                  <div class="text-sm font-medium ${o?"text-gray-900":"text-gray-600"}">${t.label}</div>
                </div>
                ${o&&!r?'<i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i>':""}
                ${r?'<span class="text-[10px] text-blue-600 font-bold uppercase shrink-0">Current</span>':""}
              </div>
            `}).join("")}
        </div>
      </div>
    </div>
  `}function ve(e,l,t,i,o){const r=o?`
        <div class="glass-soft border border-blue-100 rounded-xl p-4">
          <div class="flex items-center gap-2 mb-4">
            <div class="p-2 bg-blue-50 rounded-lg"><i data-lucide="truck" class="w-4 h-4 text-blue-600"></i></div>
            <h4 class="text-xs font-bold text-gray-900 uppercase tracking-wide">Shipping Information</h4>
            <span class="ml-auto bg-amber-50 text-amber-600 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">Guest Checkout</span>
          </div>
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Full Name *</label>
              <input type="text" id="form-full-name" required placeholder="John Doe" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Email Address *</label>
                <input type="email" id="form-email" required placeholder="you@example.com" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
              </div>
              <div>
                <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Phone Number *</label>
                <input type="tel" id="form-phone" required placeholder="+1 234 567 890" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
              </div>
            </div>
            <div>
              <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Shipping Address *</label>
              <input type="text" id="form-shipping-address" required placeholder="123 Main Street, Apt 4B" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Country *</label>
                <input type="text" id="form-guest-country" required placeholder="United States" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
              </div>
              <div>
                <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">State / Province *</label>
                <input type="text" id="form-guest-state" required placeholder="New York" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">City *</label>
                <input type="text" id="form-guest-city" required placeholder="New York City" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
              </div>
              <div>
                <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Postal Code *</label>
                <input type="text" id="form-guest-postal" required placeholder="10001" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
              </div>
            </div>
          </div>
        </div>
  `:"",n=o?"":`
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Full Name *</label>
            <input type="text" id="form-full-name" required placeholder="John Doe" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Phone Number *</label>
            <input type="tel" id="form-phone" required placeholder="+1 234 567 890" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
          </div>
        </div>
        <div>
          <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Email Address *</label>
          <input type="email" id="form-email" required placeholder="you@example.com" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
        </div>
  `;return`
    <div class="glass border border-blue-200 rounded-2xl p-5 mb-5 slide-up" id="upload-section">
      <div class="flex items-center gap-3 mb-5">
        <div class="p-2.5 bg-blue-50 rounded-lg"><i data-lucide="upload-cloud" class="w-5 h-5 text-blue-600"></i></div>
        <div>
          <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide">Upload Payment Receipt</h3>
          <p class="text-gray-500 text-xs">After making your payment, upload your receipt for verification.</p>
        </div>
      </div>

      <form id="receipt-form" class="space-y-4">
        <input type="hidden" id="form-order-number" value="${e}">
        <input type="hidden" id="form-listing-id" value="${l.property_id}">
        <input type="hidden" id="form-listing-title" value="${l.title}">
        <input type="hidden" id="form-amount" value="${t}">
        <input type="hidden" id="form-currency" value="${i}">
        <input type="hidden" id="form-is-guest" value="${o?"1":"0"}">

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Order Number</label>
            <input type="text" value="${e}" disabled class="w-full bg-white/80 border border-blue-100 rounded-xl px-4 py-2.5 text-sm text-blue-600 font-mono font-bold">
          </div>
          <div class="flex items-end">
            <div class="text-xs text-gray-500 pb-2">Save your order number to track your payment status.</div>
          </div>
        </div>

        ${r}
        ${n}

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Selected Currency</label>
            <input type="text" id="form-currency-display" value="${i}" disabled class="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 font-mono">
          </div>
          <div>
            <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Amount Paid *</label>
            <input type="number" id="form-amount-paid" required step="0.01" value="${t}" placeholder="0.00" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Payment Date *</label>
            <input type="date" id="form-payment-date" required value="${new Date().toISOString().slice(0,10)}" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Transaction Reference *</label>
          <input type="text" id="form-tx-ref" required placeholder="Bank transfer reference / confirmation number" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500">
        </div>

        <div>
          <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Additional Notes</label>
          <textarea id="form-notes" rows="2" placeholder="Any additional information about your payment (optional)" class="input-field w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500 resize-none"></textarea>
        </div>

        <div>
          <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Upload Receipt *</label>
          <div id="file-drop-zone" class="border-2 border-dashed border-blue-200 hover:border-blue-300 rounded-2xl p-8 text-center cursor-pointer transition group">
            <input type="file" id="form-receipt-file" accept=".jpg,.jpeg,.png,.webp,.pdf,image/jpeg,image/png,image/webp,application/pdf" capture="environment" class="hidden">
            <div id="file-prompt">
              <div class="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-2xl mb-3 group-hover:bg-blue-100 transition">
                <i data-lucide="upload-cloud" class="w-7 h-7 text-blue-600 group-hover:scale-110 transition"></i>
              </div>
              <p class="text-sm text-gray-700 font-medium">Click to upload, take a photo, or drag and drop</p>
              <p class="text-xs text-gray-600 mt-1">JPG, JPEG, PNG, WEBP, or PDF — Max 20 MB</p>
              <div class="flex items-center justify-center gap-2 mt-3">
                <button type="button" id="btn-take-photo" class="btn-press text-xs font-bold px-4 py-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition flex items-center gap-1.5">
                  <i data-lucide="camera" class="w-4 h-4"></i> Take Photo
                </button>
                <button type="button" id="btn-choose-file" class="btn-press text-xs font-bold px-4 py-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition flex items-center gap-1.5">
                  <i data-lucide="folder-open" class="w-4 h-4"></i> Choose File
                </button>
              </div>
            </div>
            <div id="file-info" class="hidden">
              <div class="flex flex-col items-center gap-3">
                <div id="file-preview-container" class="hidden">
                  <img id="file-preview-img" class="max-h-40 rounded-xl border border-blue-200 object-contain" alt="Receipt preview">
                </div>
                <div class="flex items-center justify-center gap-3">
                  <div class="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-xl check-pop">
                    <i data-lucide="file-text" class="w-6 h-6 text-emerald-600"></i>
                  </div>
                  <div class="text-left">
                    <p id="file-name-display" class="text-sm text-gray-900 font-medium truncate max-w-[200px]"></p>
                    <p id="file-size-display" class="text-xs text-gray-500"></p>
                  </div>
                  <button type="button" onclick="removeReceiptFile()" class="p-2 bg-gray-100 hover:bg-red-100 rounded-lg transition">
                    <i data-lucide="trash-2" class="w-4 h-4 text-gray-600 hover:text-red-600"></i>
                  </button>
                </div>
                <button type="button" onclick="removeReceiptFile();document.getElementById('form-receipt-file').click()" class="text-[11px] text-blue-600 hover:text-blue-700 font-bold uppercase tracking-wide flex items-center gap-1.5 transition">
                  <i data-lucide="refresh-cw" class="w-3 h-3"></i> Replace Receipt
                </button>
              </div>
            </div>
          </div>
          <div id="file-error" class="hidden text-xs text-red-600 mt-1.5"></div>
        </div>

        <div id="upload-progress" class="hidden">
          <div class="flex items-center gap-3 mb-2">
            <i data-lucide="loader-2" class="w-4 h-4 text-blue-600 animate-spin"></i>
            <span class="text-xs text-gray-600" id="upload-progress-text">Uploading receipt...</span>
          </div>
          <div class="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
            <div id="upload-progress-bar" class="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300" style="width:0%"></div>
          </div>
        </div>

        <button type="submit" id="submit-receipt-btn" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 rounded-xl uppercase text-sm tracking-wider transition shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden">
          <i data-lucide="send" class="w-5 h-5"></i> Submit Payment
        </button>
      </form>
    </div>
  `}function he(e,l,t,i){const o=T(l);return`
    <div class="fade-in text-center py-8">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-emerald-50 rounded-full mb-6 check-pop">
        <i data-lucide="check-circle" class="w-12 h-12 text-emerald-600"></i>
      </div>
      <h1 class="text-2xl font-black text-gray-900 mb-2">Receipt Submitted</h1>
      <p class="text-gray-600 text-sm mb-6">Your payment receipt has been received successfully.</p>

      <div class="glass border border-blue-200 rounded-2xl p-5 max-w-md mx-auto mb-5 text-left">
        <div class="flex justify-between text-sm mb-2"><span class="text-gray-500">Order Number</span><span class="text-blue-600 font-mono font-bold">${e}</span></div>
        <div class="flex justify-between text-sm mb-2"><span class="text-gray-500">Item</span><span class="text-gray-900 font-bold truncate ml-2">${l.title}</span></div>
        <div class="flex justify-between text-sm mb-2"><span class="text-gray-500">Amount</span><span class="text-gray-900 font-bold">${o}</span></div>
        <div class="flex justify-between text-sm mb-4"><span class="text-gray-500">Currency</span><span class="text-gray-900 font-bold">${i}</span></div>
        <div class="border-t border-blue-100 pt-3">
          <div class="flex items-center gap-2 text-sm">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
            <span class="text-amber-600 font-bold">Pending Verification</span>
          </div>
        </div>
      </div>

      ${Y("verification")}

      <div class="glass border border-blue-200 rounded-2xl p-5 max-w-md mx-auto mb-6 text-left">
        <div class="flex items-start gap-2.5">
          <i data-lucide="info" class="w-5 h-5 text-blue-600 shrink-0 mt-0.5"></i>
          <div class="text-sm text-gray-600 leading-relaxed">
            <p class="mb-2">Our finance team will verify your payment.</p>
            <p class="mb-2">Verification usually takes between a few minutes and 24 hours.</p>
            <p>You will receive a notification once your payment has been approved.</p>
          </div>
        </div>
      </div>

      <a href="/" class="btn-press inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-xl uppercase text-sm tracking-wider transition shadow-lg shadow-blue-600/30">Back to Marketplace</a>
    </div>
  `}async function we(){const e=document.getElementById("payment-content"),t=new URLSearchParams(window.location.search).get("guest")==="1",i=t?null:await ae();if(!i&&!t){window.location.href="/";return}const o=ue();let r=R(o)||ee(o)||te(o)||le(o)||re(o);if(!r){const[{generateListingById:w},{loadHiddenCatalogIds:a}]=await Promise.all([O(()=>import("./catalog-DMzG21Ab.js"),__vite__mapDeps([0,1,2])),O(()=>import("./catalog-hidden-store-A7rGgF0I.js"),__vite__mapDeps([1,2]))]);await a(),r=w(o)}if(r||(await Z(),r=R(o)),!r){e.innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}T(r);const n=r.listing_type==="property",v=r.images?.[0]||z;let u=pe();if(i&&!t){const{data:w}=await L.from("profiles").select("country_code").eq("user_id",i.id).maybeSingle();w?.country_code&&(u=w.country_code,localStorage.setItem("kco_country",u))}const $=q(u),E=$?$.name:u,p=K(u),f=new URLSearchParams(window.location.search).get("order")||be(),h=r.price;P=await ie(),k=oe(P),I=se(P),S=p||"";let x=S||"USD";H(k).includes(x)||(x="USD");const y=V(u,S||"");e.innerHTML=`
    <div class="fade-in">
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-600 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>Checkout</span>
      </div>

      <h1 class="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Secure Checkout</h1>
      <p class="text-gray-500 text-sm mb-6">Complete your purchase using manual bank transfer. Upload your receipt after payment for verification.</p>

      ${ge(r,v,n)}

      ${fe()}

      <div id="currency-selector-container">${xe(x,E,u)}</div>

      <div id="bank-account-container">${y.isFallback?G(y.fallbackNotice):A(y.account,null,I)}</div>

      <div id="upload-form-container">${ve(f,r,h,x,t)}</div>

      ${ye()}

      ${Y("submitted")}

      <p class="text-center text-xs text-gray-500 mb-6 flex items-center justify-center gap-1.5">
        <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i> Your payment is secured with SSL encryption. Manual verification by our finance team.
      </p>
    </div>
  `,window.lucide&&lucide.createIcons(),ke(r,h,f,i,t)}function ke(e,l,t,i,o){document.querySelectorAll(".btn-press").forEach(a=>{a.addEventListener("click",function(d){if(this.disabled)return;const s=this.getBoundingClientRect(),c=document.createElement("span");c.className="ripple";const b=Math.max(s.width,s.height);c.style.width=c.style.height=b+"px",c.style.left=d.clientX-s.left-b/2+"px",c.style.top=d.clientY-s.top-b/2+"px",this.appendChild(c),setTimeout(()=>c.remove(),600)})}),window.selectCurrency=a=>{const d=document.getElementById("bank-account-container"),s=V(countryCode,a);d.innerHTML=s.isFallback?G(s.fallbackNotice):A(s.account,null,I),document.querySelectorAll("#currency-selector-container button").forEach(m=>{m.getAttribute("onclick")?.includes(`'${a}'`)?m.className=m.className.replace("bg-gray-50 border-blue-100 text-gray-600 hover:border-blue-200 hover:text-gray-900","bg-blue-50 border-blue-300 text-blue-600 pulse-glow"):m.className=m.className.replace("bg-blue-50 border-blue-300 text-blue-600 pulse-glow","bg-gray-50 border-blue-100 text-gray-600 hover:border-blue-200 hover:text-gray-900")});const c=document.getElementById("form-currency-display");c&&(c.value=a);const b=document.getElementById("form-currency");b&&(b.value=a),window.lucide&&lucide.createIcons()},window.copyAllDetails=a=>{const d=a.map(s=>`${s.label}: ${s.value}`).join(`
`);U(d)},window.copyToClipboard=U;const r=document.getElementById("file-drop-zone"),n=document.getElementById("form-receipt-file"),v=document.getElementById("file-prompt"),u=document.getElementById("file-info"),$=document.getElementById("file-name-display"),E=document.getElementById("file-size-display"),p=document.getElementById("file-error");window.removeReceiptFile=()=>{n.value="",v.classList.remove("hidden"),u.classList.add("hidden"),p.classList.add("hidden"),f.classList.add("hidden")};const N=document.getElementById("file-preview-img"),f=document.getElementById("file-preview-container"),h=a=>{if(p.classList.add("hidden"),!a)return;const d=["image/jpeg","image/jpg","image/png","image/webp","application/pdf"],s=a.name.split(".").pop()?.toLowerCase(),c=["jpg","jpeg","png","webp","pdf"].includes(s);if(!d.includes(a.type)||!c){p.textContent="Please upload a JPG, JPEG, PNG, WEBP, or PDF file.",p.classList.remove("hidden");return}if(a.size>20*1024*1024){p.textContent="File size must be 20 MB or less.",p.classList.remove("hidden");return}if($.textContent=a.name,E.textContent=(a.size/1024/1024).toFixed(2)+" MB",v.classList.add("hidden"),u.classList.remove("hidden"),a.type.startsWith("image/")){const b=new FileReader;b.onload=m=>{N.src=m.target.result,f.classList.remove("hidden")},b.readAsDataURL(a)}else f.classList.add("hidden");window.lucide&&lucide.createIcons()},x=document.getElementById("btn-take-photo"),y=document.getElementById("btn-choose-file");r.addEventListener("click",a=>{a.target.closest("#btn-take-photo")||a.target.closest("#btn-choose-file")||a.target.closest("#file-info")||n.click()}),x&&x.addEventListener("click",a=>{a.stopPropagation(),n.setAttribute("capture","environment"),n.click()}),y&&y.addEventListener("click",a=>{a.stopPropagation(),n.removeAttribute("capture"),n.click()}),n.addEventListener("change",a=>h(a.target.files[0])),r.addEventListener("dragover",a=>{a.preventDefault(),r.classList.add("border-blue-300","bg-blue-50")}),r.addEventListener("dragleave",()=>{r.classList.remove("border-blue-300","bg-blue-50")}),r.addEventListener("drop",a=>{if(a.preventDefault(),r.classList.remove("border-blue-300","bg-blue-50"),a.dataTransfer.files.length){const d=new DataTransfer;d.items.add(a.dataTransfer.files[0]),n.files=d.files,h(a.dataTransfer.files[0])}}),document.getElementById("receipt-form").addEventListener("submit",async a=>{a.preventDefault();const d=document.getElementById("submit-receipt-btn"),s=n.files[0];if(!s){p.textContent="Please upload your payment receipt.",p.classList.remove("hidden");return}d.disabled=!0,d.innerHTML='<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Submitting...',window.lucide&&lucide.createIcons();const c=document.getElementById("upload-progress"),b=document.getElementById("upload-progress-bar"),m=document.getElementById("upload-progress-text");c.classList.remove("hidden");try{const C=s.name.split(".").pop(),M=`${o?"guest":i.id}/${t}-${Date.now()}.${C}`,{error:D}=await L.storage.from("payment-receipts").upload(M,s,{onUploadProgress:B=>{const F=Math.round(B.loaded/B.total*100);b.style.width=F+"%",m.textContent=`Uploading receipt... ${F}%`}});if(D)throw new Error("Failed to upload receipt: "+D.message);b.style.width="100%",m.textContent="Saving payment record...";const g={order_number:t,listing_id:document.getElementById("form-listing-id").value,listing_title:document.getElementById("form-listing-title").value,amount:parseFloat(document.getElementById("form-amount-paid").value),currency:document.getElementById("form-currency").value,full_name:document.getElementById("form-full-name").value,email:document.getElementById("form-email").value,phone:document.getElementById("form-phone").value,payment_date:document.getElementById("form-payment-date").value,transaction_reference:document.getElementById("form-tx-ref").value,receipt_file_path:M,receipt_file_name:s.name,additional_notes:document.getElementById("form-notes").value||null,status:"pending_verification"};o?(g.is_guest=!0,g.user_id=null,g.guest_shipping_address=document.getElementById("form-shipping-address")?.value||null,g.guest_country=document.getElementById("form-guest-country")?.value||null,g.guest_state=document.getElementById("form-guest-state")?.value||null,g.guest_city=document.getElementById("form-guest-city")?.value||null,g.guest_postal_code=document.getElementById("form-guest-postal")?.value||null):g.user_id=i.id;const{error:j}=await L.from("payment_receipts").insert(g);if(j)throw new Error("Failed to save payment: "+j.message);try{fetch("https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/send-order-notification",{method:"POST",headers:{Authorization:"Bearer sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa","Content-Type":"application/json"},body:JSON.stringify({order_number:t})}).catch(()=>{})}catch{}const W=document.getElementById("payment-content"),X=e;W.innerHTML=he(t,X,parseFloat(document.getElementById("form-amount-paid").value),document.getElementById("form-currency").value),window.lucide&&lucide.createIcons(),J("Payment receipt submitted successfully.")}catch(C){c.classList.add("hidden"),d.disabled=!1,d.innerHTML='<i data-lucide="send" class="w-5 h-5"></i> Submit Payment',window.lucide&&lucide.createIcons(),p.textContent=C.message||"Something went wrong. Please try again.",p.classList.remove("hidden")}})}we();
