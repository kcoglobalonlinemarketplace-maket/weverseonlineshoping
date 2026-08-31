import"./modulepreload-polyfill-B5Qt9EMX.js";import{U as y,I as x,b as h}from"./supabase-client-DvCmNkpI-BBtcpOs0-BQwwZOTM.js";import"./localization-bootstrap-BhglmvwT-CYE5uVRZ-79PKz_iD.js";import{l as f,a as b,e as w,i as v,n as k,c as $}from"./phone-data-Of7KtnOV-OoM3wJJD-Bxpirc4W.js";import{l as C,I as S}from"./auth-iMacRl0l-DlcadYa5-DThVjG6A.js";import"./native-bridge-z1PkSgfH-CV6U1YtG-cWH4xQ5V.js";import"./app-promo-banner-Bx7sV_xG.js";import"./ai-chat-U-IZQEoO-DrOtSYGJ-ndWWTHOz.js";/* empty css                                       */import"./showroom-data-B_6YqRLg.js";import"./promo-backgrounds-BZhAn4aI.js";import"./site-content-DxInYU0I.js";import"./promo-pool-CZD5oU4b.js";const u="kco_cart";function n(){try{const t=JSON.parse(localStorage.getItem(u)||"[]");if(!Array.isArray(t))return[];const e=[];for(const a of t)typeof a=="string"?e.push({id:a,qty:1}):a&&typeof a=="object"&&a.id&&e.push({id:a.id,qty:Math.max(1,parseInt(a.qty,10)||1)});return e}catch{return[]}}function l(t){try{localStorage.setItem(u,JSON.stringify(t))}catch{}o()}function o(){window.dispatchEvent(new CustomEvent("kco-cart-changed",{detail:{count:_()}}))}function _(){return n().reduce((t,e)=>t+e.qty,0)}function q(t,e){const a=n(),i=a.find(r=>r.id===t);i&&(i.qty=Math.max(1,Math.min(99,parseInt(e,10)||1)),l(a))}function I(t){l(n().filter(e=>e.id!==t))}function j(){l([])}const d="/fallback.svg";function P(t){return k.find(e=>e.id===t||e.property_id===t)||$.find(e=>e.id===t||e.property_id===t)}function T(t){return h(t)||f(t)||b(t)||w(t)||v(t)||P(t)}function s(t,e){return`${(parseFloat(t)||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})} ${e}`}function D(t){const e=s(t.price,t.currency||"USD"),a=parseFloat(t.real_price);return Number.isFinite(a)&&a>0&&a>parseFloat(t.price)?`<span class="price-strike line-through text-gray-400 mr-1 text-xs">${s(a,t.currency||"USD")}</span><span class="text-amber-600 font-bold">${e}</span>`:`<span class="text-amber-600 font-bold">${e}</span>`}function g(t){const e=document.getElementById("toast-msg"),a=document.getElementById("toast");!e||!a||(e.textContent=t,a.classList.remove("translate-y-20","opacity-0"),a.classList.add("translate-y-0","opacity-100"),clearTimeout(window.__cartToastT),window.__cartToastT=setTimeout(()=>{a.classList.add("translate-y-20","opacity-0"),a.classList.remove("translate-y-0","opacity-100")},2e3))}function p(){return`
    <div class="max-w-md mx-auto text-center py-16">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-5">
        <i data-lucide="shopping-cart" class="w-7 h-7 text-gray-400"></i>
      </div>
      <h1 class="text-2xl font-black text-gray-900 tracking-tight">Your cart is empty</h1>
      <p class="text-sm text-gray-500 mt-2 mb-6">Browse the marketplace and tap "Add to Cart" on items you love.</p>
      <a href="/" class="btn-press inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold py-3 px-6 rounded-xl transition"><i data-lucide="shopping-bag" class="w-4 h-4"></i> Browse Marketplace</a>
    </div>
  `}function F(t){const e=t.reduce((i,r)=>i+(parseFloat(r.listing.price)||0)*r.qty,0),a=t.map(i=>{const r=i.listing,m=r.images?.[0]||d;return`
      <div class="flex flex-wrap items-center gap-x-4 gap-y-3 p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-xl" data-cart-row="${r.property_id}">
        <a href="/details.html?id=${r.property_id}" class="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0 bg-gray-100 ring-1 ring-gray-200">
          <img src="${m}" alt="${r.title}" class="w-full h-full object-cover" loading="lazy" onerror="this.src='${d}'">
        </a>
        <div class="flex-1 min-w-[160px] flex flex-col gap-1.5">
          <a href="/details.html?id=${r.property_id}" class="text-sm font-bold text-gray-900 break-words hover:text-blue-600 transition">${r.title}</a>
          <p class="text-[10px] text-gray-400">${r.property_id}</p>
          <div class="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-sm leading-snug">${D(r)}</div>
        </div>
        <div class="flex items-center gap-3 sm:gap-2 shrink-0 ml-auto sm:ml-0">
          <div class="flex items-center gap-2">
            <button onclick="cartPageChangeQty('${r.property_id}', -1)" class="w-9 h-9 bg-white hover:bg-blue-100 border border-gray-300 rounded-lg text-gray-600 hover:text-gray-900 transition flex items-center justify-center shrink-0" aria-label="Decrease quantity"><i data-lucide="minus" class="w-4 h-4"></i></button>
            <span class="text-sm font-bold text-gray-900 w-8 text-center" data-qty="${r.property_id}">${i.qty}</span>
            <button onclick="cartPageChangeQty('${r.property_id}', 1)" class="w-9 h-9 bg-white hover:bg-blue-100 border border-gray-300 rounded-lg text-gray-600 hover:text-gray-900 transition flex items-center justify-center shrink-0" aria-label="Increase quantity"><i data-lucide="plus" class="w-4 h-4"></i></button>
          </div>
          <div class="text-right shrink-0 w-20 sm:w-24">
            <p class="text-sm font-black text-amber-600 whitespace-nowrap">${s((parseFloat(r.price)||0)*i.qty,r.currency||"USD")}</p>
          </div>
          <button onclick="cartPageRemove('${r.property_id}')" class="p-2 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg text-red-600 transition shrink-0" aria-label="Remove item"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
        </div>
      </div>
    `}).join("");return`
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Shopping Cart</h1>
      <span class="text-xs text-gray-500">${t.length} item${t.length===1?"":"s"}</span>
    </div>
    <div class="grid lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-3">
        ${a}
        <button onclick="cartPageClear()" class="text-xs text-red-500 hover:text-red-700 font-semibold transition flex items-center gap-1.5 mt-2"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Clear Cart</button>
      </div>
      <div class="lg:col-span-1">
        <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 sticky top-20">
          <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Order Summary</h3>
          <div class="flex justify-between text-sm mb-2"><span class="text-gray-500">Subtotal</span><span class="text-gray-900 font-bold">${s(e,t[0].listing.currency||"USD")}</span></div>
          <div class="flex justify-between text-sm mb-2"><span class="text-gray-500">Shipping</span><span class="text-emerald-600 font-bold">Calculated at checkout</span></div>
          <div class="flex justify-between text-sm mb-4"><span class="text-gray-500">Total</span><span class="text-amber-600 text-lg font-black">${s(e,t[0].listing.currency||"USD")}</span></div>
          <button onclick="cartPageCheckout()" class="btn-press w-full bg-blue-500 hover:bg-blue-600 active:scale-95 text-white text-sm font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2"><i data-lucide="lock" class="w-4 h-4"></i> Proceed to Checkout</button>
          <a href="/" class="block text-center text-xs text-gray-500 hover:text-gray-900 transition mt-3">Continue Shopping</a>
        </div>
      </div>
    </div>
  `}async function c(){const t=document.getElementById("cart-content");await y();const e=n();if(e.length===0){t.innerHTML=p(),window.lucide&&lucide.createIcons();return}const a=e.map(i=>{const r=T(i.id);return r?(x(r),{listing:r,qty:i.qty}):null}).filter(Boolean);if(a.length===0){t.innerHTML=p(),window.lucide&&lucide.createIcons();return}t.innerHTML=F(a),window.lucide&&lucide.createIcons()}window.cartPageChangeQty=(t,e)=>{const a=n().find(i=>i.id===t);a&&(q(t,a.qty+e),o(),c())};window.cartPageRemove=t=>{I(t),o(),c(),g("Removed from cart.")};window.cartPageClear=()=>{j(),o(),c(),g("Cart cleared.")};window.cartPageCheckout=async()=>{await C()?window.location.href="/checkout.html":(S("/checkout.html"),window.location.href="/auth.html?redirect=/checkout.html")};c();
