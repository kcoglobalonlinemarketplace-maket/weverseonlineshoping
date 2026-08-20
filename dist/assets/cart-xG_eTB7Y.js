import{l as m,c as u,f as y}from"./supabase-client-Crqgup_-.js";import"./localization-CBQdIAKi.js";import{getTruckById as x}from"./truck-data-DnyLExat.js";import{getMotorhomeById as f}from"./motorhome-data-SSjGu6g8.js";import{getCarById as h}from"./car-data-BE0Va4cl.js";import{getPhoneById as b}from"./phone-data-D3PvG27c.js";import{PRODUCT_LISTINGS as w}from"./products-data-CGLFLAJM.js";import{PRODUCT_EXTRA_LISTINGS as v}from"./products-extra-DecCj9NU.js";import{getCurrentUser as k,setRedirectAfterAuth as C}from"./auth-BFHZZ4dA.js";import{r as d,s as $,e as o,a as _,c as I}from"./cart-DNy8CJA3.js";import"./native-bridge-DDjiHiPo.js";import"./localization-bootstrap-CDVi70Bk.js";import"./ai-chat-BdRMZUs0.js";const c="/fallback.svg";function T(t){return w.find(r=>r.id===t||r.property_id===t)||v.find(r=>r.id===t||r.property_id===t)}function L(t){return y(t)||x(t)||f(t)||h(t)||b(t)||T(t)}function n(t,r){return`${(parseFloat(t)||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})} ${r}`}function S(t){const r=n(t.price,t.currency||"USD"),a=parseFloat(t.real_price);return Number.isFinite(a)&&a>0&&a>parseFloat(t.price)?`<span class="price-strike line-through text-gray-400 mr-1 text-xs">${n(a,t.currency||"USD")}</span><span class="text-amber-600 font-bold">${r}</span>`:`<span class="text-amber-600 font-bold">${r}</span>`}function p(t){const r=document.getElementById("toast-msg"),a=document.getElementById("toast");!r||!a||(r.textContent=t,a.classList.remove("translate-y-20","opacity-0"),a.classList.add("translate-y-0","opacity-100"),clearTimeout(window.__cartToastT),window.__cartToastT=setTimeout(()=>{a.classList.add("translate-y-20","opacity-0"),a.classList.remove("translate-y-0","opacity-100")},2e3))}function l(){return`
    <div class="max-w-md mx-auto text-center py-16">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-5">
        <i data-lucide="shopping-cart" class="w-7 h-7 text-gray-400"></i>
      </div>
      <h1 class="text-2xl font-black text-gray-900 tracking-tight">Your cart is empty</h1>
      <p class="text-sm text-gray-500 mt-2 mb-6">Browse the marketplace and tap "Add to Cart" on items you love.</p>
      <a href="/" class="btn-press inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold py-3 px-6 rounded-xl transition"><i data-lucide="shopping-bag" class="w-4 h-4"></i> Browse Marketplace</a>
    </div>
  `}function B(t){const r=t.reduce((s,e)=>s+(parseFloat(e.listing.price)||0)*e.qty,0),a=t.map(s=>{const e=s.listing,g=e.images?.[0]||c;return`
      <div class="flex flex-wrap items-center gap-x-4 gap-y-3 p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-xl" data-cart-row="${e.property_id}">
        <a href="/details.html?id=${e.property_id}" class="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0 bg-gray-100 ring-1 ring-gray-200">
          <img src="${g}" alt="${e.title}" class="w-full h-full object-cover" loading="lazy" onerror="this.src='${c}'">
        </a>
        <div class="flex-1 min-w-[160px] flex flex-col gap-1.5">
          <a href="/details.html?id=${e.property_id}" class="text-sm font-bold text-gray-900 break-words hover:text-blue-600 transition">${e.title}</a>
          <p class="text-[10px] text-gray-400">${e.property_id}</p>
          <div class="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-sm leading-snug">${S(e)}</div>
        </div>
        <div class="flex items-center gap-3 sm:gap-2 shrink-0 ml-auto sm:ml-0">
          <div class="flex items-center gap-2">
            <button onclick="cartPageChangeQty('${e.property_id}', -1)" class="w-9 h-9 bg-white hover:bg-blue-100 border border-gray-300 rounded-lg text-gray-600 hover:text-gray-900 transition flex items-center justify-center shrink-0" aria-label="Decrease quantity"><i data-lucide="minus" class="w-4 h-4"></i></button>
            <span class="text-sm font-bold text-gray-900 w-8 text-center" data-qty="${e.property_id}">${s.qty}</span>
            <button onclick="cartPageChangeQty('${e.property_id}', 1)" class="w-9 h-9 bg-white hover:bg-blue-100 border border-gray-300 rounded-lg text-gray-600 hover:text-gray-900 transition flex items-center justify-center shrink-0" aria-label="Increase quantity"><i data-lucide="plus" class="w-4 h-4"></i></button>
          </div>
          <div class="text-right shrink-0 w-20 sm:w-24">
            <p class="text-sm font-black text-amber-600 whitespace-nowrap">${n((parseFloat(e.price)||0)*s.qty,e.currency||"USD")}</p>
          </div>
          <button onclick="cartPageRemove('${e.property_id}')" class="p-2 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg text-red-600 transition shrink-0" aria-label="Remove item"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
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
          <div class="flex justify-between text-sm mb-2"><span class="text-gray-500">Subtotal</span><span class="text-gray-900 font-bold">${n(r,t[0].listing.currency||"USD")}</span></div>
          <div class="flex justify-between text-sm mb-2"><span class="text-gray-500">Shipping</span><span class="text-emerald-600 font-bold">Calculated at checkout</span></div>
          <div class="flex justify-between text-sm mb-4"><span class="text-gray-500">Total</span><span class="text-amber-600 text-lg font-black">${n(r,t[0].listing.currency||"USD")}</span></div>
          <button onclick="cartPageCheckout()" class="btn-press w-full bg-blue-500 hover:bg-blue-600 active:scale-95 text-white text-sm font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2"><i data-lucide="lock" class="w-4 h-4"></i> Proceed to Checkout</button>
          <a href="/" class="block text-center text-xs text-gray-500 hover:text-gray-900 transition mt-3">Continue Shopping</a>
        </div>
      </div>
    </div>
  `}async function i(){const t=document.getElementById("cart-content");await m();const r=d();if(r.length===0){t.innerHTML=l(),window.lucide&&lucide.createIcons();return}const a=r.map(s=>{const e=L(s.id);return e?(u(e),{listing:e,qty:s.qty}):null}).filter(Boolean);if(a.length===0){t.innerHTML=l(),window.lucide&&lucide.createIcons();return}t.innerHTML=B(a),window.lucide&&lucide.createIcons()}window.cartPageChangeQty=(t,r)=>{const s=d().find(e=>e.id===t);s&&($(t,s.qty+r),o(),i())};window.cartPageRemove=t=>{_(t),o(),i(),p("Removed from cart.")};window.cartPageClear=()=>{I(),o(),i(),p("Cart cleared.")};window.cartPageCheckout=async()=>{await k()?window.location.href="/checkout.html":(C("/checkout.html"),window.location.href="/auth.html?redirect=/checkout.html")};i();
