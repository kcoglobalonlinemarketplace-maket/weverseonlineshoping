import{d as y}from"./scroll-progress-DwT0zpoP.js";const h=["United States","United Kingdom","Canada","Australia","Germany","France","Spain","Italy","Netherlands","Belgium","Sweden","Norway","Denmark","Finland","Switzerland","Austria","Ireland","Portugal","Greece","Poland","Czech Republic","Hungary","Romania","Bulgaria","Croatia","Slovenia","Slovakia","Estonia","Latvia","Lithuania","Russia","Ukraine","Turkey","Israel","Saudi Arabia","UAE","Qatar","Kuwait","Bahrain","Oman","Egypt","South Africa","Nigeria","Kenya","Ghana","Ethiopia","Morocco","Algeria","Tunisia","Tanzania","Japan","South Korea","China","Hong Kong","Taiwan","Singapore","Malaysia","Indonesia","Thailand","Vietnam","Philippines","India","Pakistan","Bangladesh","Sri Lanka","Nepal","Cambodia","Mongolia","Kazakhstan","Uzbekistan","Brazil","Argentina","Mexico","Colombia","Chile","Peru","Ecuador","Venezuela","Uruguay","Paraguay","Bolivia","Costa Rica","Panama","Dominican Republic","Jamaica","Trinidad and Tobago","Guatemala","Honduras","El Salvador","Nicaragua","New Zealand","Fiji","Papua New Guinea","Iceland","Luxembourg","Malta","Cyprus","Andorra","Monaco","Liechtenstein"];let c="",n=null;async function x(){const e=await y(),{data:t}=await e.auth.getUser();return t?.user||null}function i(e){if(window._showToast){window._showToast(e);return}if(window.showToast){window.showToast(e);return}const t=document.createElement("div");t.className="fixed top-6 right-6 z-[100] bg-gray-900 border border-blue-500/30 text-white px-4 py-3 rounded-xl shadow-lg text-sm",t.textContent=e,document.body.appendChild(t),setTimeout(()=>t.remove(),3e3)}function o(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function p(e){return o(e)}function k(e){c=e||"",n=null,f()}function m(e,t,r,a,s){n={title:e,brand:t,category:r,price:a,currency:s},c=e||"",f()}async function f(){if(!await x()){sessionStorage.setItem("kco_auth_redirect",window.location.pathname),sessionStorage.setItem("kco_special_order_query",c),i("Please sign in to place a Special Order."),setTimeout(()=>{window.location.href="/auth.html"},800);return}v()}function v(e){let t=document.getElementById("special-order-overlay");t||(t=document.createElement("div"),t.id="special-order-overlay",t.className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-md overflow-y-auto",document.body.appendChild(t));const r=n?.title||c||"",a=n?.brand||"",s=n?.category||"",u=n?.price||"",l=n?.currency||"USD",w=h.map(g=>`<option value="${g}">${g}</option>`).join("");t.innerHTML=`
    <div class="max-w-2xl mx-auto px-4 py-6 sm:py-10">
      <div class="glass bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
        <div class="flex items-center justify-between p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-transparent">
          <div class="flex items-center gap-3">
            <div class="p-2.5 rounded-xl bg-blue-50 border border-blue-200">
              <i data-lucide="package-plus" class="w-5 h-5 text-blue-600"></i>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900">Special Order Request</h3>
              <p class="text-xs text-gray-600">We'll source this item for you</p>
            </div>
          </div>
          <button onclick="closeSpecialOrderModal()" class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition text-[10px] font-bold uppercase tracking-wide">
            🔙 Back
          </button>
        </div>

        <div class="flex items-center gap-2 px-5 pt-4">
          <div id="so-step-1" class="flex items-center gap-2 text-blue-600 text-xs font-bold">
            <span class="so-step-dot w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[11px] font-bold">1</span>
            <span>Product Details</span>
          </div>
          <div class="flex-1 h-px bg-gray-200"></div>
          <div id="so-step-2" class="flex items-center gap-2 text-gray-500 text-xs font-bold">
            <span class="so-step-dot w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[11px] font-bold">2</span>
            <span>Delivery Info</span>
          </div>
          <div class="flex-1 h-px bg-gray-200"></div>
          <div id="so-step-3" class="flex items-center gap-2 text-gray-500 text-xs font-bold">
            <span class="so-step-dot w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[11px] font-bold">3</span>
            <span>Review & Submit</span>
          </div>
        </div>

        <div id="so-panel-1" class="p-5 space-y-4">
          <div>
            <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Product Name *</label>
            <input id="so-title" type="text" value="${p(r)}" placeholder="What are you looking for?"
              class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition">
          </div>
          <div>
            <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Description / Specifications</label>
            <textarea id="so-desc" rows="3" placeholder="Describe the item, model, size, color, features..."
              class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition"></textarea>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Category</label>
              <input id="so-category" type="text" value="${p(s)}" placeholder="e.g. Electronics, Fashion"
                class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition">
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Preferred Brand</label>
              <input id="so-brand" type="text" value="${p(a)}" placeholder="e.g. Apple, Nike"
                class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition">
            </div>
          </div>
          <div class="grid grid-cols-3 gap-3">
            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Target Price</label>
              <input id="so-price" type="number" min="0" step="0.01" value="${u||""}" placeholder="0.00"
                class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition">
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Currency</label>
              <select id="so-currency" class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:border-blue-500 focus:outline-none transition">
                <option value="USD" ${l==="USD"?"selected":""}>USD</option><option value="EUR" ${l==="EUR"?"selected":""}>EUR</option><option value="GBP" ${l==="GBP"?"selected":""}>GBP</option>
                <option value="NGN" ${l==="NGN"?"selected":""}>NGN</option><option value="KES" ${l==="KES"?"selected":""}>KES</option><option value="GHS" ${l==="GHS"?"selected":""}>GHS</option>
                <option value="ZAR" ${l==="ZAR"?"selected":""}>ZAR</option><option value="JPY" ${l==="JPY"?"selected":""}>JPY</option><option value="CNY" ${l==="CNY"?"selected":""}>CNY</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Quantity</label>
              <input id="so-qty" type="number" min="1" value="1"
                class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition">
            </div>
          </div>
          <button onclick="specialOrderNext()" class="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
            Continue to Delivery <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>

        <div id="so-panel-2" class="p-5 space-y-4 hidden">
          <div>
            <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
            <input id="so-delivery-name" type="text" placeholder="Recipient full name"
              class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition">
          </div>
          <div>
            <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Street Address *</label>
            <input id="so-delivery-address" type="text" placeholder="House number, street name"
              class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition">
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">City *</label>
              <input id="so-delivery-city" type="text" placeholder="City"
                class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition">
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">State / Province</label>
              <input id="so-delivery-state" type="text" placeholder="State or province"
                class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition">
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Country *</label>
              <select id="so-delivery-country" class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:border-blue-500 focus:outline-none transition">
                ${w}
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Postal Code</label>
              <input id="so-delivery-postal" type="text" placeholder="ZIP / postal code"
                class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition">
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Phone Number *</label>
            <input id="so-delivery-phone" type="tel" placeholder="+1 234 567 890"
              class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition">
          </div>
          <div class="flex gap-3">
            <button onclick="specialOrderBack()" class="px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold rounded-xl text-sm uppercase tracking-wide transition flex items-center gap-2">
              <i data-lucide="arrow-left" class="w-4 h-4"></i> Back
            </button>
            <button onclick="specialOrderNext()" class="flex-1 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
              Review Request <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        </div>

        <div id="so-panel-3" class="p-5 space-y-4 hidden">
          <div id="so-review-content" class="space-y-3"></div>
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div class="flex items-start gap-3">
              <i data-lucide="info" class="w-4 h-4 text-blue-600 mt-0.5 shrink-0"></i>
              <p class="text-xs text-gray-600 leading-relaxed">By submitting, you agree that our team will review your request and provide a quote. No payment is required until your request is approved and a price is confirmed. You'll receive status updates via your account dashboard.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <button onclick="specialOrderBack()" class="px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold rounded-xl text-sm uppercase tracking-wide transition flex items-center gap-2">
              <i data-lucide="arrow-left" class="w-4 h-4"></i> Back
            </button>
            <button id="so-submit-btn" onclick="submitSpecialOrder()" class="flex-1 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
              <i data-lucide="send" class="w-4 h-4"></i> Submit Request
            </button>
          </div>
        </div>

        <div id="so-panel-success" class="p-8 text-center hidden">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 mb-4">
            <i data-lucide="check-circle" class="w-8 h-8 text-emerald-600"></i>
          </div>
          <h4 class="text-lg font-bold text-gray-900 mb-2">Request Submitted!</h4>
          <p class="text-sm text-gray-600 mb-5">Your Special Order request has been sent to our team. You'll receive updates in your account dashboard as we review and source your item.</p>
          <div class="flex gap-3 justify-center">
            <button onclick="closeSpecialOrderModal()" class="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold rounded-xl text-sm uppercase tracking-wide transition">Close</button>
            <a href="/account.html" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-500/30 flex items-center gap-2">
              <i data-lucide="layout-dashboard" class="w-4 h-4"></i> View My Requests
            </a>
          </div>
        </div>
      </div>
    </div>
  `,t.style.display="block",document.body.style.overflow="hidden",window.lucide&&lucide.createIcons()}let d=1;function b(e){d=e;for(let r=1;r<=3;r++){const a=document.getElementById(`so-panel-${r}`);a&&a.classList.toggle("hidden",r!==e)}for(let r=1;r<=3;r++){const a=document.getElementById(`so-step-${r}`);if(!a)continue;const s=a.querySelector(".so-step-dot");r<e?(a.className="flex items-center gap-2 text-emerald-600 text-xs font-bold",s.className="so-step-dot w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[11px] font-bold",s.innerHTML='<i data-lucide="check" class="w-3.5 h-3.5"></i>'):r===e?(a.className="flex items-center gap-2 text-blue-600 text-xs font-bold",s.className="so-step-dot w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[11px] font-bold",s.textContent=String(r)):(a.className="flex items-center gap-2 text-gray-500 text-xs font-bold",s.className="so-step-dot w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[11px] font-bold",s.textContent=String(r))}window.lucide&&lucide.createIcons();const t=document.getElementById("special-order-overlay");t&&t.scrollTo({top:0,behavior:"smooth"})}function S(){if(d===1){if(!document.getElementById("so-title").value.trim()){i("Please enter a product name.");return}b(2)}else if(d===2){const e=document.getElementById("so-delivery-name").value.trim(),t=document.getElementById("so-delivery-address").value.trim(),r=document.getElementById("so-delivery-city").value.trim(),a=document.getElementById("so-delivery-phone").value.trim();if(!e){i("Please enter recipient name.");return}if(!t){i("Please enter delivery address.");return}if(!r){i("Please enter city.");return}if(!a){i("Please enter phone number.");return}I(),b(3)}}function B(){d>1&&b(d-1)}function I(){const e=r=>(document.getElementById(r)?.value||"").trim()||"—",t=document.getElementById("so-review-content");t&&(t.innerHTML=`
    <div class="bg-gray-50 rounded-xl p-4 space-y-2.5 border border-gray-200">
      <div class="flex justify-between items-start"><span class="text-xs text-gray-500 uppercase font-bold">Product</span><span class="text-sm text-gray-900 font-semibold text-right">${o(e("so-title"))}</span></div>
      <div class="flex justify-between items-start"><span class="text-xs text-gray-500 uppercase font-bold">Category</span><span class="text-sm text-gray-700 text-right">${o(e("so-category"))}</span></div>
      <div class="flex justify-between items-start"><span class="text-xs text-gray-500 uppercase font-bold">Brand</span><span class="text-sm text-gray-700 text-right">${o(e("so-brand"))}</span></div>
      <div class="flex justify-between items-start"><span class="text-xs text-gray-500 uppercase font-bold">Target Price</span><span class="text-sm text-blue-600 font-bold text-right">${o(e("so-currency"))} ${o(e("so-price"))}</span></div>
      <div class="flex justify-between items-start"><span class="text-xs text-gray-500 uppercase font-bold">Quantity</span><span class="text-sm text-gray-700 text-right">${o(e("so-qty"))}</span></div>
      ${e("so-desc")!=="—"?`<div class="pt-2 border-t border-gray-200"><span class="text-xs text-gray-500 uppercase font-bold block mb-1">Description</span><p class="text-sm text-gray-700">${o(e("so-desc"))}</p></div>`:""}
    </div>
    <div class="bg-gray-50 rounded-xl p-4 space-y-2.5 border border-gray-200">
      <p class="text-xs text-gray-500 uppercase font-bold mb-1">Delivery To</p>
      <p class="text-sm text-gray-900 font-semibold">${o(e("so-delivery-name"))}</p>
      <p class="text-sm text-gray-600">${o(e("so-delivery-address"))}</p>
      <p class="text-sm text-gray-600">${o(e("so-delivery-city"))}, ${o(e("so-delivery-state"))}</p>
      <p class="text-sm text-gray-600">${o(e("so-delivery-postal"))} ${o(e("so-delivery-country"))}</p>
      <p class="text-sm text-gray-600"><i data-lucide="phone" class="w-3.5 h-3.5 inline mr-1"></i>${o(e("so-delivery-phone"))}</p>
    </div>
  `,window.lucide&&lucide.createIcons())}async function E(){const e=document.getElementById("so-submit-btn");e&&(e.disabled=!0,e.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Submitting...',window.lucide&&lucide.createIcons());const t={request_title:document.getElementById("so-title").value.trim(),request_description:document.getElementById("so-desc").value.trim()||null,category:document.getElementById("so-category").value.trim()||null,brand:document.getElementById("so-brand").value.trim()||null,target_price:parseFloat(document.getElementById("so-price").value)||null,currency:document.getElementById("so-currency").value,quantity:parseInt(document.getElementById("so-qty").value)||1,delivery_full_name:document.getElementById("so-delivery-name").value.trim(),delivery_address:document.getElementById("so-delivery-address").value.trim(),delivery_city:document.getElementById("so-delivery-city").value.trim(),delivery_state:document.getElementById("so-delivery-state").value.trim()||null,delivery_country:document.getElementById("so-delivery-country").value,delivery_postal_code:document.getElementById("so-delivery-postal").value.trim()||null,delivery_phone:document.getElementById("so-delivery-phone").value.trim()};try{const r=await y(),{data:a,error:s}=await r.from("product_requests").insert(t).select().single();if(s)throw s;a&&await r.from("product_request_status_updates").insert({request_id:a.id,status:"pending_review",message:"Your request has been received and is awaiting review."}),[1,2,3].forEach(u=>document.getElementById(`so-panel-${u}`)?.classList.add("hidden")),document.getElementById("so-panel-success")?.classList.remove("hidden"),window.lucide&&lucide.createIcons(),i("Special Order submitted successfully!")}catch(r){i("Failed to submit request: "+(r.message||"Unknown error")),e&&(e.disabled=!1,e.innerHTML='<i data-lucide="send" class="w-4 h-4"></i> Submit Request',window.lucide&&lucide.createIcons())}}function N(){const e=document.getElementById("special-order-overlay");e&&(e.style.display="none"),document.body.style.overflow=""}window.openSpecialOrderModal=k;window.openSpecialOrderFromSearch=m;window.closeSpecialOrderModal=N;window.specialOrderNext=S;window.specialOrderBack=B;window.submitSpecialOrder=E;window._openSpecialOrderFromSearch=m;(async()=>{const e=sessionStorage.getItem("kco_special_order_query");e&&(sessionStorage.removeItem("kco_special_order_query"),await x()&&(c=e,v()))})();export{m as openSpecialOrderFromSearch,k as openSpecialOrderModal};
