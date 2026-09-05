const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/catalog-BaQ2rKyX.js","assets/catalog-hidden-store-CPivWtWH.js","assets/showroom-data-Dx7pQsXv.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{l as ae,f as z,_ as D,d as le}from"./showroom-data-Dx7pQsXv.js";import{P as re,a as ie,g as oe,b as se}from"./motorhome-data-CupbOvk0.js";import{g as ne,a as de}from"./phone-data-Of7KtnOV.js";import{getCurrentUser as ce}from"./auth-DlKVuhCK.js";import{supabase as L}from"./supabase-client-nvpjTmO6.js";import{g as V,d as ue}from"./country-data-BSZ5lE1h.js";import{c as pe,d as be,a as me,b as J,r as ge,e as fe}from"./payment-settings-Ch-OCLEx.js";import{p as xe,c as S,a as A}from"./fx-B0aevBpC.js";/* empty css                                       */const W="/fallback.svg",ye=[...re,...ie];function ve(e){return ye.find(l=>l.property_id===e)||null}let G=null,T=[],M="",R="";const O=[{id:"placed",label:"Order Placed",icon:"shopping-bag",color:"text-blue-600",bg:"bg-blue-50"},{id:"submitted",label:"Payment Submitted",icon:"upload",color:"text-cyan-600",bg:"bg-cyan-50"},{id:"verification",label:"Pending Verification",icon:"loader",color:"text-amber-600",bg:"bg-amber-50"},{id:"approved",label:"Approved",icon:"check-circle",color:"text-emerald-600",bg:"bg-emerald-50"},{id:"processing",label:"Processing",icon:"package",color:"text-blue-600",bg:"bg-blue-50"},{id:"shipped",label:"Shipped",icon:"truck",color:"text-indigo-600",bg:"bg-indigo-50"},{id:"delivered",label:"Delivered",icon:"package-check",color:"text-emerald-600",bg:"bg-emerald-50"}];function he(){return new URLSearchParams(window.location.search).get("id")}function we(){return localStorage.getItem("kco_country")||"US"}function ke(){const e=Date.now().toString(36).toUpperCase().slice(-6),l=Math.random().toString(36).toUpperCase().slice(2,6);return`W-${e}${l}`}function Y(e,l){const t=()=>{const r=document.createElement("textarea");r.value=e,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select();try{document.execCommand("copy")}catch{}document.body.removeChild(r)};if(navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(e).catch(()=>t()):t(),l){const r=l.innerHTML;l.innerHTML='<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i>',window.lucide&&lucide.createIcons(),setTimeout(()=>{l.innerHTML=r,window.lucide&&lucide.createIcons()},1500)}X("Copied Successfully.")}function X(e){let l=document.getElementById("payment-toast");l||(l=document.createElement("div"),l.id="payment-toast",l.className="fixed bottom-5 right-5 z-[100] transform translate-y-20 opacity-0 bg-gray-900 border border-blue-500/30 text-white px-5 py-3 rounded-xl shadow-xl text-xs flex items-center gap-2 font-medium transition-all duration-300",l.innerHTML='<i data-lucide="info" class="w-4 h-4 text-blue-600"></i><span id="payment-toast-msg">Action</span>',document.body.appendChild(l)),l.querySelector("#payment-toast-msg").textContent=e,l.classList.remove("translate-y-20","opacity-0"),clearTimeout(l._t),l._t=setTimeout(()=>l.classList.add("translate-y-20","opacity-0"),3e3),window.lucide&&lucide.createIcons()}function K(e,l){const t=ge(T,e,l);return{...t,fallbackNotice:t.isFallback?fe(t.account,e,l,M):null}}function Ie(){const e=document.getElementById("particles");if(e)for(let l=0;l<14;l++){const t=document.createElement("div"),r=Math.random()*3+1;t.className="particle",t.style.width=r+"px",t.style.height=r+"px",t.style.left=Math.random()*100+"%",t.style.bottom="-10px",t.style.background=Math.random()>.5?"rgba(59,130,246,.4)":"rgba(251,191,36,.3)",t.style.animationDuration=Math.random()*20+15+"s",t.style.animationDelay=Math.random()*20+"s",e.appendChild(t)}}Ie();function $e(e,l,t,r){const o=A(S(e.price,r),r);return`
    <div class="glass border border-blue-200 rounded-2xl p-5 mb-5 slide-up">
      <div class="flex items-center gap-2 mb-4">
        <div class="p-2 bg-blue-50 rounded-lg"><i data-lucide="shopping-bag" class="w-4 h-4 text-blue-600"></i></div>
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide">Order Summary</h3>
      </div>
      <div class="flex gap-4">
        <div class="w-24 h-24 rounded-xl overflow-hidden bg-gray-50 shrink-0 ring-1 ring-blue-500/10">
          <img src="${l}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${W}'">
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-bold text-gray-900 truncate">${e.title}</h4>
          <p class="text-gray-500 text-xs mt-0.5">ID: <span class="text-blue-600 font-mono">${e.property_id}</span></p>
          ${t&&e.city?`<p class="text-gray-600 text-xs mt-0.5">${le(e.country_code)} ${e.city}, ${e.country}</p>`:""}
          <p class="text-2xl font-black text-blue-600 mt-2">${o}</p>
        </div>
      </div>
    </div>
  `}function U(e,l,t,r={}){const o=[{label:"Beneficiary Name",value:e.beneficiary},{label:"Bank Name",value:e.bankName},{label:"Transfer Type",value:e.transferType}],i=[{label:"Account Number",value:e.accountNumber},{label:"Account Type",value:e.accountType},{label:"IBAN",value:e.iban},{label:"SWIFT / BIC Code",value:e.swift},{label:"Routing (ABA)",value:e.routing},{label:"Sort Code",value:e.sortCode},{label:"Bank Code",value:e.bankCode},{label:"Branch Code",value:e.branchCode},{label:"Institution Number",value:e.institutionNumber},{label:"Transit Number",value:e.transitNumber},{label:"BSB Code",value:e.bsbCode},{label:"Bank Address",value:e.address}].filter(b=>b.value&&b.value.trim()!==""),s=[...o,...i],v=s.map(b=>`${b.label}: ${b.value}`).join(`
`),p=r.amountLabel||"",I=r.orderNumber||"";return`
    <div class="glass border border-blue-200 rounded-2xl p-5 mb-5 slide-up">
      
      <div class="flex items-center gap-3 mb-3">
        <div class="p-2.5 bg-blue-50 rounded-lg"><i data-lucide="landmark" class="w-5 h-5 text-blue-600"></i></div>
        <div class="flex-1">
          <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide">Business Receiving Account</h3>
          <p class="text-gray-500 text-xs">${e.flag} ${e.currencyName} (${e.currency})</p>
        </div>
        <span class="inline-flex items-center gap-1 bg-blue-50 text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-full border border-blue-200">
          <i data-lucide="building-2" class="w-3 h-3"></i> Official Business
        </span>
      </div>

      <div class="bg-blue-600 text-white rounded-2xl p-4 mb-4 overflow-hidden relative">
        <div class="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
        <div class="absolute -bottom-8 -left-4 w-28 h-28 bg-white/10 rounded-full"></div>
        <div class="relative">
          <div class="text-[10px] uppercase tracking-widest text-blue-100">Amount to transfer (${e.currency})</div>
          <div class="text-2xl font-bold mt-0.5" id="bank-amount">${p}</div>
          <div class="mt-3 flex items-center justify-between gap-2 flex-wrap">
            <div>
              <div class="text-[10px] uppercase tracking-widest text-blue-100">Your order/reference number</div>
              <div class="text-sm font-bold font-mono mt-0.5" id="bank-ref">${I}</div>
            </div>
            <button onclick="copyToClipboard('${I}')" class="shrink-0 flex items-center gap-1.5 bg-white/20 hover:bg-white/30 rounded-lg px-3 py-1.5 text-xs font-bold transition">
              <i data-lucide="copy" class="w-3.5 h-3.5"></i> Copy reference
            </button>
          </div>
          <p class="text-[11px] text-blue-100 mt-2">Include this reference in your transfer so our team can match your payment instantly.</p>
        </div>
      </div>

      <div class="flex items-center justify-between gap-3 mb-2">
        <h4 class="text-xs font-bold text-gray-500 uppercase tracking-wide">Transfer to</h4>
        <button onclick="copyToClipboard(this.getAttribute('data-copy'))" data-copy="${v.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/\n/g,"&#10;")}" class="shrink-0 text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"><i data-lucide="copy" class="w-3.5 h-3.5"></i> Copy all details</button>
      </div>
      <div class="space-y-2">
        ${s.map(b=>`
          <div class="flex items-center justify-between gap-3 bg-gray-50 border border-blue-100 rounded-xl px-4 py-2.5">
            <div class="min-w-0 flex-1">
              <div class="text-gray-500 text-[11px] uppercase tracking-wide">${b.label}</div>
              <div class="text-gray-900 text-sm font-medium font-mono break-all">${b.value}</div>
            </div>
            <button onclick="copyToClipboard('${b.value.replace(/'/g,"\\'")}', this)" class="shrink-0 p-2 bg-gray-100 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 rounded-lg transition" title="Copy ${b.label}">
              <i data-lucide="copy" class="w-4 h-4 text-gray-600"></i>
            </button>
          </div>
        `).join("")}
      </div>
      <div class="mt-3 p-3 bg-blue-50 border border-blue-100 rounded-xl text-xs text-gray-700 leading-relaxed">${t||"After payment, upload your receipt for verification so your goods can be shipped immediately."}</div>
    </div>
  `}function Z(e){return`
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
    ${U(e.account,null,e.instructions)}
  `}function Be(e,l,t){const r=J(T),o=t?V(t):null;return`
    <div class="glass border border-blue-200 rounded-2xl p-5 mb-5 slide-up">
      <div class="flex items-center gap-3 mb-4">
        <div class="p-2.5 bg-blue-50 rounded-lg"><i data-lucide="globe" class="w-5 h-5 text-blue-600"></i></div>
        <div class="flex-1">
          <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide">Payment Currency</h3>
          <p class="text-gray-500 text-xs">${o?o.flag+" "+l:l||"Select currency"} ${e?"→ "+e:"→ USD (default)"}</p>
        </div>
      </div>
      <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
        ${r.map(i=>{const s=T.find(p=>p.currency===i);return`
            <button onclick="selectCurrency('${i}')" class="btn-press flex flex-col items-center gap-1 p-3 rounded-xl border transition relative overflow-hidden ${i===e?"bg-blue-50 border-blue-300 text-blue-600 pulse-glow":"bg-gray-50 border-blue-100 text-gray-600 hover:border-blue-200 hover:text-gray-900"}">
              <span class="text-2xl">${s.flag}</span>
              <span class="text-xs font-bold">${i}</span>
              <span class="text-[10px] text-gray-500">${s.currencyName}</span>
            </button>
          `}).join("")}
      </div>
    </div>
  `}function Ce(){return`
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
  `}function Q(e){const l=O.findIndex(t=>t.id===e);return`
    <div class="glass border border-blue-200 rounded-2xl p-5 mb-5 slide-up">
      <div class="flex items-center gap-2 mb-5">
        <div class="p-2 bg-blue-50 rounded-lg"><i data-lucide="git-branch" class="w-4 h-4 text-blue-600"></i></div>
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide">Order Progress</h3>
      </div>
      <div class="relative">
        <!-- Progress line -->
        <div class="absolute left-4 top-4 bottom-4 w-0.5 bg-blue-50"></div>
        <div class="absolute left-4 top-4 w-0.5 bg-blue-500 transition-all duration-500" style="height: ${l>=0?l/(O.length-1)*100:0}%; min-height: 0; max-height: calc(100% - 2rem)"></div>
        <div class="space-y-4">
          ${O.map((t,r)=>{const o=r<=l,i=r===l;return`
              <div class="flex items-center gap-3 relative">
                <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 transition-all duration-300 ${o?t.bg+" border border-blue-200":"bg-gray-50 border border-blue-100"} ${i?"pulse-glow":""}">
                  <i data-lucide="${t.icon}" class="w-4 h-4 ${o?t.color:"text-gray-600"} ${i?"animate-pulse":""}"></i>
                </div>
                <div class="flex-1">
                  <div class="text-sm font-medium ${o?"text-gray-900":"text-gray-600"}">${t.label}</div>
                </div>
                ${o&&!i?'<i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i>':""}
                ${i?'<span class="text-[10px] text-blue-600 font-bold uppercase shrink-0">Current</span>':""}
              </div>
            `}).join("")}
        </div>
      </div>
    </div>
  `}function Ee(e,l,t,r,o,i=""){const s=o?`
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
  `:"",v=o?"":`
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
        <input type="hidden" id="form-currency" value="${r}">
        <input type="hidden" id="form-is-guest" value="${o?"1":"0"}">

        <div class="bg-blue-600 text-white rounded-2xl p-4 overflow-hidden relative">
          <div class="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
          <div class="absolute -bottom-8 -left-4 w-28 h-28 bg-white/10 rounded-full"></div>
          <div class="relative">
            <div class="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <div class="text-[10px] uppercase tracking-widest text-blue-100">Amount to transfer (${r})</div>
                <div class="text-2xl font-bold mt-0.5" id="transfer-amount-display">${i}</div>
              </div>
              <div class="text-right">
                <div class="text-[10px] uppercase tracking-widest text-blue-100">Order / Reference number</div>
                <div class="text-sm font-bold font-mono mt-0.5">${e}</div>
              </div>
            </div>
            <p class="text-[11px] text-blue-100 mt-2">Transfer the exact amount above to the business account, then upload your receipt below.</p>
          </div>
        </div>

        <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 leading-relaxed">
          <p class="font-bold flex items-center gap-1.5"><i data-lucide="shield-alert" class="w-4 h-4"></i> Payment status: Documentation Pending</p>
          <p class="mt-1">Once you upload your receipt, our finance team will verify the payment against our business bank account before your order is approved. Your order stays pending until the payment is confirmed.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Order Number</label>
            <input type="text" value="${e}" disabled class="w-full bg-white/80 border border-blue-100 rounded-xl px-4 py-2.5 text-sm text-blue-600 font-mono font-bold">
          </div>
          <div class="flex items-end">
            <div class="text-xs text-gray-500 pb-2">Save your order number to track your payment status.</div>
          </div>
        </div>

        ${s}
        ${v}

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Selected Currency</label>
            <input type="text" id="form-currency-display" value="${r}" disabled class="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 font-mono">
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
            <input type="file" id="form-receipt-file" accept="image/*,.jpg,.jpeg,.png,.webp,.pdf" class="hidden">
            <div id="file-prompt">
              <div class="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-2xl mb-3 group-hover:bg-blue-100 transition">
                <i data-lucide="upload-cloud" class="w-7 h-7 text-blue-600 group-hover:scale-110 transition"></i>
              </div>
              <p class="text-sm text-gray-700 font-medium">Click to open Gallery, take a photo, or drag and drop</p>
              <p class="text-xs text-gray-600 mt-1">Photo or PDF receipt — Max 20 MB</p>
              <div class="flex items-center justify-center gap-2 mt-3 flex-wrap">
                <button type="button" id="btn-open-gallery" class="btn-press text-xs font-bold px-4 py-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition flex items-center gap-1.5">
                  <i data-lucide="images" class="w-4 h-4"></i> Open Gallery
                </button>
                <button type="button" id="btn-take-photo" class="btn-press text-xs font-bold px-4 py-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition flex items-center gap-1.5">
                  <i data-lucide="camera" class="w-4 h-4"></i> Take Photo
                </button>
                <button type="button" id="btn-choose-pdf" class="btn-press text-xs font-bold px-4 py-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition flex items-center gap-1.5">
                  <i data-lucide="file-text" class="w-4 h-4"></i> Choose PDF
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
  `}function Pe(e,l,t,r){const o=A(S(l.price,r),r);return`
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
        <div class="flex justify-between text-sm mb-4"><span class="text-gray-500">Currency</span><span class="text-gray-900 font-bold">${r}</span></div>
        <div class="border-t border-blue-100 pt-3">
          <div class="flex items-center gap-2 text-sm">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
            <span class="text-amber-600 font-bold">Pending Verification</span>
          </div>
        </div>
      </div>

      ${Q("verification")}

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
  `}async function _e(){const e=document.getElementById("payment-content"),t=new URLSearchParams(window.location.search).get("guest")==="1",r=t?null:await ce();if(!r&&!t){window.location.href="/";return}const o=he();let i=await ae(o)||z(o)||oe(o)||se(o)||ne(o)||de(o)||ve(o);if(!i){const[{generateListingById:C},{loadHiddenCatalogIds:N}]=await Promise.all([D(()=>import("./catalog-BaQ2rKyX.js"),__vite__mapDeps([0,1,2])),D(()=>import("./catalog-hidden-store-CPivWtWH.js"),__vite__mapDeps([1,2]))]);await N(),i=C(o)}if(i||(i=z(o)),!i){e.innerHTML=`
      <div class="text-center py-20 text-gray-500 fade-in">
        <i data-lucide="shopping-bag" class="w-12 h-12 text-gray-300 mx-auto mb-4"></i>
        <h2 class="text-xl font-bold text-gray-800 mb-2">No order selected</h2>
        <p class="text-sm mb-6 max-w-sm mx-auto">This page completes payment for a checkout. Please add a product to your cart and place your order first.</p>
        <a href="/" class="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-600/30">
          <i data-lucide="arrow-left" class="w-4 h-4"></i> Browse Marketplace
        </a>
      </div>`,window.lucide&&lucide.createIcons();return}const s=i.listing_type==="property",v=i.images?.[0]||W;let p=we();if(r&&!t){const{data:C}=await L.from("profiles").select("country_code").eq("user_id",r.id).maybeSingle();C?.country_code&&(p=C.country_code,localStorage.setItem("kco_country",p))}const I=V(p),b=I?I.name:p,m=ue(p),$=new URLSearchParams(window.location.search).get("order")||ke(),B=i.price;G=await pe(),T=await be(),M=me(G),await xe(),R=m||"";let f=R||"USD";J(T).includes(f)||(f="USD");const E=K(p,R||""),P=S(B,f);e.innerHTML=`
    <div class="fade-in">
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-600 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>Checkout</span>
      </div>

      <h1 class="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Secure Checkout</h1>
      <p class="text-gray-500 text-sm mb-6">Complete your purchase using manual bank transfer. Upload your receipt after payment for verification.</p>

      ${$e(i,v,s,f)}

      ${Ce()}

      <div id="currency-selector-container">${Be(f,b,p)}</div>

      <div id="bank-account-container">${E.isFallback?Z(E.fallbackNotice):U(E.account,null,M,{amountLabel:A(P,f),orderNumber:$})}</div>

      <div id="upload-form-container">${Ee($,i,P,f,t,A(P,f))}</div>

      ${Q("submitted")}

      <p class="text-center text-xs text-gray-500 mb-6 flex items-center justify-center gap-1.5">
        <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i> Your payment is secured with SSL encryption. Manual verification by our finance team.
      </p>
    </div>
  `,window.lucide&&lucide.createIcons(),Le(i,B,$,r,t)}function Le(e,l,t,r,o){document.querySelectorAll(".btn-press").forEach(a=>{a.addEventListener("click",function(n){if(this.disabled)return;const d=this.getBoundingClientRect(),c=document.createElement("span");c.className="ripple";const u=Math.max(d.width,d.height);c.style.width=c.style.height=u+"px",c.style.left=n.clientX-d.left-u/2+"px",c.style.top=n.clientY-d.top-u/2+"px",this.appendChild(c),setTimeout(()=>c.remove(),600)})}),window.selectCurrency=a=>{const n=document.getElementById("bank-account-container"),d=K(countryCode,a);n.innerHTML=d.isFallback?Z(d.fallbackNotice):U(d.account,null,M),document.querySelectorAll("#currency-selector-container button").forEach(x=>{x.getAttribute("onclick")?.includes(`'${a}'`)?x.className=x.className.replace("bg-gray-50 border-blue-100 text-gray-600 hover:border-blue-200 hover:text-gray-900","bg-blue-50 border-blue-300 text-blue-600 pulse-glow"):x.className=x.className.replace("bg-blue-50 border-blue-300 text-blue-600 pulse-glow","bg-gray-50 border-blue-100 text-gray-600 hover:border-blue-200 hover:text-gray-900")});const c=document.getElementById("form-currency-display");c&&(c.value=a);const u=document.getElementById("form-currency");u&&(u.value=a);const g=document.getElementById("form-amount-paid");g&&(g.value=S(e.price,a));const w=A(S(e.price,a),a),_=document.getElementById("bank-amount");_&&(_.textContent=w);const h=document.getElementById("transfer-amount-display");h&&(h.textContent=w),window.lucide&&lucide.createIcons()},window.copyAllDetails=a=>{const n=a.map(d=>`${d.label}: ${d.value}`).join(`
`);Y(n)},window.copyToClipboard=Y;const i=document.getElementById("file-drop-zone"),s=document.getElementById("form-receipt-file"),v=document.getElementById("file-prompt"),p=document.getElementById("file-info"),I=document.getElementById("file-name-display"),b=document.getElementById("file-size-display"),m=document.getElementById("file-error");window.removeReceiptFile=()=>{s.value="",v.classList.remove("hidden"),p.classList.add("hidden"),m.classList.add("hidden"),$.classList.add("hidden")};const q=document.getElementById("file-preview-img"),$=document.getElementById("file-preview-container"),B=a=>{if(m.classList.add("hidden"),!a)return;const n=["image/jpeg","image/jpg","image/png","image/webp","application/pdf"],d=a.name.split(".").pop()?.toLowerCase(),c=["jpg","jpeg","png","webp","pdf"].includes(d);if(!n.includes(a.type)||!c){m.textContent="Please upload a JPG, JPEG, PNG, WEBP, or PDF file.",m.classList.remove("hidden");return}if(a.size>20*1024*1024){m.textContent="File size must be 20 MB or less.",m.classList.remove("hidden");return}if(I.textContent=a.name,b.textContent=(a.size/1024/1024).toFixed(2)+" MB",v.classList.add("hidden"),p.classList.remove("hidden"),a.type.startsWith("image/")){const u=new FileReader;u.onload=g=>{q.src=g.target.result,$.classList.remove("hidden")},u.readAsDataURL(a)}else $.classList.add("hidden");window.lucide&&lucide.createIcons()},f=document.getElementById("btn-open-gallery"),E=document.getElementById("btn-take-photo"),P=document.getElementById("btn-choose-pdf"),C=!!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform()),N=async a=>{if(a&&a.stopPropagation(),C){try{const{Camera:n,MediaTypeSelection:d}=await D(async()=>{const{Camera:h,MediaTypeSelection:x}=await import("@capacitor/camera");return{Camera:h,MediaTypeSelection:x}},[]),{results:c}=await n.chooseFromGallery({mediaType:d.Images,allowMultipleSelection:!1}),u=c&&c[0];if(!u||!u.webPath)return;const g=await fetch(u.webPath).then(h=>h.blob()),w=((u.metadata&&u.metadata.format||"jpg")+"").toLowerCase().replace(/^jpeg$/,"jpg"),_=new File([g],`receipt-${Date.now()}.${w}`,{type:g.type||"image/jpeg"});B(_)}catch(n){console.warn("Native gallery picker unavailable:",n),s.setAttribute("accept","image/*"),s.removeAttribute("capture"),s.click()}return}s.setAttribute("accept","image/*,.jpg,.jpeg,.png,.webp"),s.removeAttribute("capture"),s.click()};i.addEventListener("click",a=>{a.target.closest("#btn-open-gallery")||a.target.closest("#btn-take-photo")||a.target.closest("#btn-choose-pdf")||a.target.closest("#file-info")||N(a)}),f&&f.addEventListener("click",a=>N(a)),E&&E.addEventListener("click",a=>{a.stopPropagation(),C?D(()=>import("@capacitor/camera"),[]).then(async({Camera:n,CameraSource:d})=>{const c=await n.getPhoto({source:d.Camera,quality:90,allowEditing:!1});if(c&&c.webPath){const u=await fetch(c.webPath).then(g=>g.blob());B(new File([u],`receipt-${Date.now()}.jpg`,{type:u.type||"image/jpeg"}))}}).catch(()=>{s.setAttribute("capture","environment"),s.setAttribute("accept","image/*"),s.click()}):(s.setAttribute("capture","environment"),s.setAttribute("accept","image/*"),s.click())}),P&&P.addEventListener("click",a=>{a.stopPropagation(),s.setAttribute("accept",".pdf,application/pdf"),s.removeAttribute("capture"),s.click()}),s.addEventListener("change",a=>B(a.target.files[0])),i.addEventListener("dragover",a=>{a.preventDefault(),i.classList.add("border-blue-300","bg-blue-50")}),i.addEventListener("dragleave",()=>{i.classList.remove("border-blue-300","bg-blue-50")}),i.addEventListener("drop",a=>{if(a.preventDefault(),i.classList.remove("border-blue-300","bg-blue-50"),a.dataTransfer.files.length){const n=new DataTransfer;n.items.add(a.dataTransfer.files[0]),s.files=n.files,B(a.dataTransfer.files[0])}}),document.getElementById("receipt-form").addEventListener("submit",async a=>{a.preventDefault();const n=document.getElementById("submit-receipt-btn"),d=s.files[0];if(!d){m.textContent="Please upload your payment receipt.",m.classList.remove("hidden");return}n.disabled=!0,n.innerHTML='<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Submitting...',window.lucide&&lucide.createIcons();const c=document.getElementById("upload-progress"),u=document.getElementById("upload-progress-bar"),g=document.getElementById("upload-progress-text");c.classList.remove("hidden");try{const w=d.name.split(".").pop(),h=`${o?"guest":r.id}/${t}-${Date.now()}.${w}`,{error:x}=await L.storage.from("payment-receipts").upload(h,d,{onUploadProgress:k=>{const H=Math.round(k.loaded/k.total*100);u.style.width=H+"%",g.textContent=`Uploading receipt... ${H}%`}});if(x)throw new Error("Failed to upload receipt: "+x.message);u.style.width="100%",g.textContent="Saving payment record...";const y={order_number:t,listing_id:document.getElementById("form-listing-id").value,listing_title:document.getElementById("form-listing-title").value,amount:parseFloat(document.getElementById("form-amount-paid").value),currency:document.getElementById("form-currency").value,full_name:document.getElementById("form-full-name").value,email:document.getElementById("form-email").value,phone:document.getElementById("form-phone").value,payment_date:document.getElementById("form-payment-date").value,transaction_reference:document.getElementById("form-tx-ref").value,receipt_file_path:h,receipt_file_name:d.name,additional_notes:document.getElementById("form-notes").value||null,status:"pending_verification"};o?(y.is_guest=!0,y.user_id=null,y.guest_shipping_address=document.getElementById("form-shipping-address")?.value||null,y.guest_country=document.getElementById("form-guest-country")?.value||null,y.guest_state=document.getElementById("form-guest-state")?.value||null,y.guest_city=document.getElementById("form-guest-city")?.value||null,y.guest_postal_code=document.getElementById("form-guest-postal")?.value||null):y.user_id=r.id;const{data:F}=await L.from("payment_receipts").select("id").eq("order_number",t).limit(1);let j=null;if(F&&F.length){const{error:k}=await L.from("payment_receipts").update(y).eq("id",F[0].id);j=k||null}else{const{error:k}=await L.from("payment_receipts").insert(y);j=k||null}if(j)throw new Error("Failed to save payment: "+j.message);try{fetch("https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/send-order-notification",{method:"POST",headers:{Authorization:"Bearer sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa","Content-Type":"application/json"},body:JSON.stringify({order_number:t})}).catch(()=>{})}catch{}const ee=document.getElementById("payment-content"),te=e;ee.innerHTML=Pe(t,te,parseFloat(document.getElementById("form-amount-paid").value),document.getElementById("form-currency").value),window.lucide&&lucide.createIcons(),X("Payment receipt submitted successfully.")}catch(w){c.classList.add("hidden"),n.disabled=!1,n.innerHTML='<i data-lucide="send" class="w-5 h-5"></i> Submit Payment',window.lucide&&lucide.createIcons(),m.textContent=w.message||"Something went wrong. Please try again.",m.classList.remove("hidden")}})}_e();
