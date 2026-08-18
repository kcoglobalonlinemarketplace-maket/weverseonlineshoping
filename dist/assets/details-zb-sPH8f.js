const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/catalog-3IUO5W3L.js","assets/catalog-hidden-store-wpIcgcJZ.js","assets/live-promo-alerts-RK8Sva9W.js"])))=>i.map(i=>d[i]);
import{l as te,f as ae,c as v,_ as z,a as M,b as U,g as re,S as oe}from"./live-promo-alerts-RK8Sva9W.js";import"./localization-Cy7nYYsK.js";import{getCatalogCategory as le,getCatalogSample as ie}from"./catalog-3IUO5W3L.js";import{getTruckById as se,formatTruckPrice as ne,TRUCK_LISTINGS as ce}from"./truck-data-DnyLExat.js";import{getMotorhomeById as de,MOTORHOME_LISTINGS as ue}from"./motorhome-data-SSjGu6g8.js";import{getCarById as pe,CAR_LISTINGS as be}from"./car-data-BE0Va4cl.js";import{getPhoneById as me,PHONE_LISTINGS as ge}from"./phone-data-D3PvG27c.js";import{PET_LISTINGS as he}from"./pet-data-B7wfSbng.js";import{PRODUCT_LISTINGS as Y}from"./products-data-CGLFLAJM.js";import{PRODUCT_EXTRA_LISTINGS as K}from"./products-extra-DecCj9NU.js";import{r as fe}from"./showroom-cards-DT28myGc.js";import{getCurrentUser as I,setRedirectAfterAuth as E}from"./auth-C8sthrmE.js";import{supabase as y}from"./supabase-client-nvpjTmO6.js";import{b as ye}from"./cart-DNy8CJA3.js";import"./localization-bootstrap-Bp1PVa51.js";import"./catalog-hidden-store-wpIcgcJZ.js";const f="/fallback.svg";function A(e){return Array.isArray(e)&&e.length>0?e:[f]}function ve(e,t="w-4 h-4"){const a=Math.round(Number(e)||0);return[1,2,3,4,5].map(r=>`<i data-lucide="star" class="${t} ${r<=a?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}function _(e,t,a="blue"){const r={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"};return`
    <div class="flex items-center gap-2.5 mb-4">
      <div class="shrink-0 w-10 h-10 rounded-xl ${r[a]||r.blue} flex items-center justify-center"><i data-lucide="${e}" class="w-5 h-5"></i></div>
      <h3 class="text-lg font-black text-gray-900 tracking-tight">${t}</h3>
    </div>`}function xe(e){return`
    <div class="bg-gray-50 border border-gray-100 rounded-xl p-3.5">
      <div class="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5"><i data-lucide="${e.icon}" class="w-3.5 h-3.5"></i>${e.label}</div>
      <div class="text-gray-900 font-bold text-[15px] leading-snug">${c(e.value)}</div>
    </div>`}function x(e,t,a,r="blue"){return!a||!a.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${_(t,e,r)}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        ${a.map(xe).join("")}
      </div>
    </div>`}function j(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${_("list-checks","Features & Amenities","emerald")}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
            <span class="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
            <span class="text-[15px] text-gray-800 font-medium">${c(t)}</span>
          </div>`).join("")}
      </div>
    </div>`}function we(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${_("star","Highlights","amber")}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-start gap-2.5 bg-amber-50/60 border border-amber-100 rounded-xl px-3.5 py-2.5">
            <i data-lucide="badge-check" class="w-4 h-4 text-amber-500 mt-0.5 shrink-0"></i>
            <span class="text-[15px] text-gray-800 font-medium">${c(t)}</span>
          </div>`).join("")}
      </div>
    </div>`}function H(e){return`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${_("file-text","Description","blue")}
      <p class="text-[15px] sm:text-base text-gray-700 leading-relaxed">${c(e||"")}</p>
    </div>`}function R(e){const t=Number(e.rating)||0,a=e.rating_count||e.review_count||0;return`
    <div class="flex flex-wrap items-center gap-4 sm:gap-6">
      <div class="flex items-center gap-3">
        <div class="text-4xl font-black text-gray-900">${t>0?t.toFixed(1):"New"}</div>
        <div>
          <div class="flex gap-0.5">${ve(t,"w-5 h-5")}</div>
          <div class="text-xs text-gray-500 mt-0.5">${a>0?a.toLocaleString()+" buyer ratings":"Be the first to review this item"}</div>
        </div>
      </div>
      <div class="hidden sm:block w-px h-10 bg-gray-200"></div>
      <div class="flex flex-wrap gap-2">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Listing</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1.5 rounded-full"><i data-lucide="truck" class="w-3.5 h-3.5"></i> Fast Worldwide Delivery</span>
      </div>
    </div>`}function $e(){return new URLSearchParams(window.location.search).get("id")}const ke=[...Y,...K];function _e(e){return ke.find(t=>t.property_id===e)||null}function Le(e){const t=document.getElementById("details-content"),a=ne(e),s=A(e.images).map((l,u)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${u===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${c(l)}">
      <img src="${c(l)}" alt="View ${u+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${f}'">
    </button>`).join(""),i=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cargo Area / Truck Bed","Engine","Wheels / Tires","Additional View"],n=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"package",label:"Payload Capacity",value:e.payload_capacity},{icon:"link",label:"Towing Capacity",value:e.towing_capacity},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(l=>l.value!=null&&l.value!==""&&l.value!=="N/A"),d=j(e.features),o=`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${R(e)}
    </div>`;t.innerHTML=`
    <div class="fade-in">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>Trucks</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${e.title}</span>
      </div>

      <!-- Title & ID -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${c(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${c(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${c(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${c(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${o}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${f}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${i[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${s}
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 mb-8">
        <button id="buy-now-btn" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl uppercase text-sm tracking-wider transition flex items-center justify-center gap-2">
          <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
        </button>
        <button id="wishlist-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="w-5 h-5"></i>
        </button>
        <button id="share-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Share">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Description -->
      ${H(e.description)}

      <!-- Truck Information -->
      ${x("Truck Information","truck",n,"amber")}

      ${d}

      ${W(e)}

      ${P()}
    </div>
  `;const b=document.getElementById("hero-image"),$=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((l,u)=>{l.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.add("border-gray-200")),l.classList.add("active","border-blue-500"),l.classList.remove("border-gray-200"),b.src=l.dataset.img,$.textContent=i[u]||`View ${u+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await I()?window.location.href=`/checkout.html?id=${e.property_id}`:(E(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const l=window.location.href;try{if(navigator.share)await navigator.share({title:c(e.title),url:l});else{await navigator.clipboard.writeText(l);const u=document.getElementById("share-btn"),g=u.innerHTML;u.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{u.innerHTML=g,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),w(e),window.lucide&&lucide.createIcons()}function Ie(e){const t=document.getElementById("details-content"),a=M(e),s=A(e.images).map((l,u)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${u===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${c(l)}">
      <img src="${c(l)}" alt="View ${u+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${f}'">
    </button>`).join(""),i=["Exterior Front","Exterior Side","Exterior Rear","Living Area","Kitchen","Bedroom","Bathroom","Additional View"],n=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(l=>l.value!=null&&l.value!==""&&l.value!=="N/A"),d=j(e.features),o=`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${R(e)}
    </div>`;t.innerHTML=`
    <div class="fade-in">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>Motorhomes</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${e.title}</span>
      </div>

      <!-- Title & ID -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${c(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${c(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${c(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${c(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${o}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${f}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${i[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${s}
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 mb-8">
        <button id="buy-now-btn" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl uppercase text-sm tracking-wider transition flex items-center justify-center gap-2">
          <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
        </button>
        <button id="wishlist-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="w-5 h-5"></i>
        </button>
        <button id="share-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Share">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Description -->
      ${H(e.description)}

      <!-- Motorhome Information -->
      ${x("Motorhome Information","bus",n,"violet")}

      ${d}

      ${W(e)}

      ${P()}
    </div>
  `;const b=document.getElementById("hero-image"),$=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((l,u)=>{l.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.add("border-gray-200")),l.classList.add("active","border-blue-500"),l.classList.remove("border-gray-200"),b.src=l.dataset.img,$.textContent=i[u]||`View ${u+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await I()?window.location.href=`/checkout.html?id=${e.property_id}`:(E(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const l=window.location.href;try{if(navigator.share)await navigator.share({title:c(e.title),url:l});else{await navigator.clipboard.writeText(l);const u=document.getElementById("share-btn"),g=u.innerHTML;u.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{u.innerHTML=g,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),w(e),window.lucide&&lucide.createIcons()}function Se(e){const t=document.getElementById("details-content"),a=M(e),s=A(e.images).map((l,u)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${u===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${c(l)}">
      <img src="${c(l)}" alt="View ${u+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${f}'">
    </button>`).join(""),i=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cabin / Interior","Wheels / Tires","Additional View"],n=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(l=>l.value!=null&&l.value!==""&&l.value!=="N/A"),d=j(e.features),o=`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${R(e)}
    </div>`;t.innerHTML=`
    <div class="fade-in">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>Cars</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${e.title}</span>
      </div>

      <!-- Title & ID -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${c(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${c(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${c(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${c(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${o}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${f}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${i[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${s}
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 mb-8">
        <button id="buy-now-btn" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl uppercase text-sm tracking-wider transition flex items-center justify-center gap-2">
          <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
        </button>
        <button id="wishlist-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="w-5 h-5"></i>
        </button>
        <button id="share-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Share">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Description -->
      ${H(e.description)}

      <!-- Car Information -->
      ${x("Car Information","car",n,"amber")}

      ${d}

      ${W(e)}

      ${P()}
    </div>
  `;const b=document.getElementById("hero-image"),$=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((l,u)=>{l.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.add("border-gray-200")),l.classList.add("active","border-blue-500"),l.classList.remove("border-gray-200"),b.src=l.dataset.img,$.textContent=i[u]||`View ${u+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await I()?window.location.href=`/checkout.html?id=${e.property_id}`:(E(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const l=window.location.href;try{if(navigator.share)await navigator.share({title:c(e.title),url:l});else{await navigator.clipboard.writeText(l);const u=document.getElementById("share-btn"),g=u.innerHTML;u.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{u.innerHTML=g,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),w(e),window.lucide&&lucide.createIcons()}function Ee(e){const a=e.listing_type==="property"?"Share Property":"Share";return`
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
      <button type="button" id="view-details-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="eye" class="w-5 h-5"></i> View Details
      </button>
      <button type="button" id="add-cart-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart
      </button>
      <button type="button" id="buy-now-btn" class="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition text-sm uppercase tracking-wider">
        <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
      </button>
      <a href="${`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`}" class="flex items-center justify-center gap-2 bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-700 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="badge-check" class="w-4 h-4"></i> Contact Us
        <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online</span>
      </a>
      <button type="button" id="wishlist-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-700 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="heart" class="w-5 h-5"></i> Add to Wishlist
      </button>
      <button type="button" id="share-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="share-2" class="w-5 h-5"></i> ${a}
      </button>
    </div>
  `}function W(e){const t=e.listing_type==="property",a=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`;return`
    <div class="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm">
      <div class="flex items-center gap-3 mb-4">
        <div class="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm">
          <img src="/w-logo.svg" alt="Weverse Online Shop" class="w-full h-full object-contain" onerror="this.onerror=null;this.style.display='none'">
        </div>
        <div class="min-w-0">
          <p class="text-[15px] font-black text-gray-900 flex items-center gap-1.5">Weverse Online Shop <i data-lucide="badge-check" class="w-4 h-4 fill-blue-600 text-white"></i></p>
          <p class="text-xs text-gray-500">${t?"Professional agent for this listing":"Trusted marketplace seller"}</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 mb-4">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full"><i data-lucide="truck" class="w-3.5 h-3.5"></i> Fast Worldwide Delivery</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-violet-700 bg-violet-50 border border-violet-200 px-2.5 py-1.5 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Authentic Listings</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1.5 rounded-full"><i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i> Easy Returns</span>
      </div>
      <div class="flex gap-2">
        <a href="${a}" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl text-sm text-center transition">Contact Seller</a>
        <a href="${a}&subject=Enquiry" class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-xl text-sm text-center transition">Send Message</a>
      </div>
    </div>`}function P(){return`
      <div id="similar-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Similar Products</h3>
        <div class="rel-grid flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-1 snap-x snap-mandatory"></div>
      </div>
      <div id="related-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Related Products</h3>
        <div class="rel-grid flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-1 snap-x snap-mandatory"></div>
      </div>
      <div id="recommended-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Recommended For You</h3>
        <div class="rel-grid flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-1 snap-x snap-mandatory"></div>
      </div>`}function Be(e){const t=new Map,a=s=>(s||[]).forEach(i=>{i&&i.property_id&&t.set(i.property_id,i)});a(oe),a(ce),a(ue),a(be),a(ge),a(he),a(Y),a(K),a(re());const r=le(e.category||e.subcategory);return r&&a(ie(r.slug,50)),[...t.values()].filter(s=>s.property_id!==e.property_id)}function Te(e,t){let a=0;const r=b=>String(b||"").trim().toLowerCase();e.listing_type&&e.listing_type===t.listing_type&&(a+=40),e.category&&r(e.category)===r(t.category)&&(a+=30),e.subcategory&&r(e.subcategory)===r(t.subcategory)&&(a+=20),e.brand&&r(e.brand)===r(t.brand)&&(a+=15),e.breed&&r(e.breed)===r(t.breed)&&(a+=15),e.model&&r(e.model)===r(t.model)&&(a+=10),e.property_type&&r(e.property_type)===r(t.property_type)&&(a+=15);const s=parseFloat(e.price)||0,i=parseFloat(t.price)||0;if(s>0&&i>0){const b=Math.min(s,i)/Math.max(s,i);b>=.8?a+=10:b>=.6?a+=6:b>=.4&&(a+=3)}e.country_code&&e.country_code===t.country_code&&(a+=5);const n=new Set(r(e.title).split(/[^a-z0-9]+/).filter(b=>b.length>2)),d=new Set(r(t.title).split(/[^a-z0-9]+/).filter(b=>b.length>2));let o=0;return n.forEach(b=>{d.has(b)&&o++}),a+=Math.min(o*2,10),a}function F(e,t){const a=document.getElementById(e);if(!a)return;const r=a.querySelector(".rel-grid");if(!r)return;if(!t.length){a.classList.add("hidden");return}a.classList.remove("hidden"),r.innerHTML="";const s=document.createDocumentFragment();t.slice(0,10).forEach(i=>{const n=document.createElement("div");n.className="shrink-0 w-[260px] sm:w-[320px] snap-start";const d=fe(i);d.style.width="100%",n.appendChild(d),s.appendChild(n)}),r.appendChild(s),window.lucide&&lucide.createIcons()}function w(e){const t=Be(e),a=t.map(o=>({item:o,score:Te(e,o)})).sort((o,b)=>b.score-o.score||(b.item.rating||0)-(o.item.rating||0)),r=a.filter(o=>o.score>=35).map(o=>o.item),s=new Set(r.map(o=>o.property_id)),i=a.filter(o=>o.score>=15&&o.score<35&&!s.has(o.item.property_id)).map(o=>o.item),n=[...t].filter(o=>!s.has(o.property_id)).sort((o,b)=>(b.rating||0)-(o.rating||0)).slice(0,10),d=a.filter(o=>!s.has(o.item.property_id)).map(o=>o.item);F("similar-section",r.length?r:d.slice(0,10)),F("related-section",i.length?i:d.slice(0,10)),F("recommended-section",n.length?n:d.slice(0,10))}function C(e){const t=document.getElementById("details-content"),a=e.listing_type==="property",r=M(e),s=U(e.country_code),i=e.listing_type==="product"?"Product ID":a?"Property ID":"Listing ID";let n="",d="",o=parseFloat(e.real_price);if((!Number.isFinite(o)||o<=0)&&(o=parseFloat(e.compare_at_price??e.original_price)),Number.isFinite(o)&&o>0&&o>parseFloat(e.price)){const m=Math.round((1-parseFloat(e.price)/o)*100);n=`<span class="text-lg text-gray-400 price-strike line-through font-medium">${M({...e,price:o})}</span>`,d=`<span class="inline-flex items-center gap-1 text-xs font-black text-white bg-red-500 px-2 py-1 rounded-full">-${m}% OFF</span>`}const b=e.availability_status||(e.listing_type==="product"?"In Stock":"Available"),l=A(e.images).map((m,p)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${p===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${c(m)}">
      <img src="${c(m)}" alt="View ${p+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${f}'">
    </button>`).join("");let u="";if(a){const m=[{icon:"globe",label:"Country",value:`${s} ${e.country}`},{icon:"map-pin",label:"State / Province",value:e.state},{icon:"building",label:"City",value:e.city},{icon:"navigation",label:"Town / Local Area",value:e.town}].filter(p=>p.value);u=`
      <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
        ${_("map-pin","Location","rose")}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${m.map(p=>`
            <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
              <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="${p.icon}" class="w-4 h-4 text-blue-500"></i></div>
              <div><div class="text-gray-500 text-xs">${p.label}</div><div class="text-gray-900 font-bold text-[15px]">${p.value}</div></div>
            </div>
          `).join("")}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-200" style="height:280px"></div>
      </div>`}let g="";if(a){const m=[{icon:"bed-double",label:"Bedrooms",value:e.bedrooms},{icon:"bath",label:"Bathrooms",value:e.bathrooms},{icon:"building",label:"Building Size",value:e.building_size},{icon:"ruler",label:"Land Size",value:e.land_size},{icon:"car",label:"Parking Spaces",value:e.parking_spaces},{icon:"home",label:"Property Type",value:e.property_type},{icon:"sofa",label:"Furnished",value:e.furnished},{icon:"calendar",label:"Year Built",value:e.year_built},{icon:"tag",label:"Status",value:e.listing_status==="rent"?"For Rent":"For Sale"}].filter(p=>p.value!=null&&p.value!=="");g=x("Property Information","home",m)}else if(e.category==="Motorhomes"){const m=[{icon:"factory",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank}].filter(p=>p.value!=null&&p.value!=="");g=x("Vehicle Information","bus",m,"violet")}else if(e.listing_type==="product"){const m=[{icon:"factory",label:"Brand",value:e.brand},{icon:"tag",label:"Subcategory",value:e.subcategory},{icon:"palette",label:"Colour",value:e.color},{icon:"ruler",label:"Size",value:e.size},{icon:"layers",label:"Material",value:e.material},{icon:"badge-check",label:"Condition",value:e.condition||"New"},{icon:"shield-check",label:"Warranty",value:e.warranty},{icon:"package-check",label:"Availability",value:e.availability_status}].filter(p=>p.value!=null&&p.value!=="");g=x("Product Information","package",m)}else if(e.listing_type==="pet"){const m=[{icon:"paw-print",label:"Breed",value:e.breed},{icon:"calendar",label:"Age",value:e.age},{icon:"users",label:"Gender",value:e.gender},{icon:"palette",label:"Colour",value:e.color},{icon:"scale",label:"Weight",value:e.size},{icon:"globe",label:"Origin",value:`${U(e.country_code)} ${e.country}`},{icon:"badge-check",label:"Health",value:e.condition}].filter(p=>p.value!=null&&p.value!=="");g=x("Pet Information","paw-print",m,"amber")}const J=j(e.features),Q=we(e.highlights),Z=`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${R(e)}
    </div>`;t.innerHTML=`
    <div class="fade-in">
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>${e.category}</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${c(e.title)}</span>
      </div>

      <div class="mb-5">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">${c(e.title)}</h1>
        <div class="flex flex-wrap items-center gap-2 mt-2.5">
          <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified</span>
          <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full"><i data-lucide="box" class="w-3.5 h-3.5"></i> ${i}: <span class="font-mono">${c(e.property_id)}</span></span>
          <span class="inline-flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">${e.listing_status==="rent"?"For Rent":"For Sale"}</span>
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-4 bg-gradient-to-br from-blue-50 via-white to-white border border-blue-100 rounded-2xl p-5 mb-6">
        <div>
          <div class="flex items-baseline flex-wrap gap-2">
            ${n}
            <span class="text-4xl font-black text-blue-600">${r}</span>
          </div>
          <div class="flex items-center gap-2 mt-1.5">
            ${d}
            <span class="text-sm text-emerald-600 font-bold flex items-center gap-1"><i data-lucide="package-check" class="w-4 h-4"></i> ${b}</span>
          </div>
        </div>
        <div class="flex flex-col gap-1.5 text-sm">
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="truck" class="w-4 h-4 text-blue-500"></i> Free worldwide shipping</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="rotate-ccw" class="w-4 h-4 text-blue-500"></i> Easy returns within 14 days</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="lock" class="w-4 h-4 text-blue-500"></i> Secure payment protection</span>
        </div>
      </div>

      ${Z}

      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${f}'">
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${l}
      </div>

      ${Ee(e)}

      <div id="listing-details">
        ${H(e.description)}
      </div>

      ${u}
      ${g}
      ${J}
      ${Q}

      <div id="reviews-section" class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
        ${_("message-square-star","Customer Reviews","amber")}
        <div id="reviews-list"><div class="text-gray-500 text-sm py-4">Loading reviews...</div></div>
        <div id="review-form-wrapper" class="mt-5 pt-5 border-t border-gray-100">
          <h4 class="text-[15px] font-black text-gray-900 mb-3 flex items-center gap-2"><i data-lucide="pen-line" class="w-4 h-4 text-blue-500"></i> Write a Review</h4>
          <div id="review-login-msg" class="text-xs text-gray-500 hidden">Please <a href="/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}" class="text-blue-500 hover:underline">sign in</a> to write a review.</div>
          <form id="review-form" class="space-y-3">
            <div class="flex items-center gap-2">
              <label class="text-xs text-gray-600 font-bold uppercase">Rating</label>
              <div id="star-rating" class="flex gap-1">
                ${[1,2,3,4,5].map(m=>`<button type="button" data-rating="${m}" class="star-btn p-1"><i data-lucide="star" class="w-5 h-5 text-gray-300 hover:text-amber-400 transition"></i></button>`).join("")}
              </div>
            </div>
            <textarea id="review-text" rows="3" placeholder="Share your experience with this product..." class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-[15px] text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"></textarea>
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition">Submit Review</button>
          </form>
        </div>
      </div>

      <div id="recommendations-section" class="hidden">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">You May Also Like</h3>
        <div id="recommendations-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>

      ${P()}
    </div>
  `;const ee=document.getElementById("hero-image");t.querySelectorAll(".gallery-thumb").forEach(m=>{m.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(p=>p.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(p=>p.classList.add("border-gray-200")),m.classList.add("active","border-blue-500"),m.classList.remove("border-gray-200"),ee.src=m.dataset.img})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await I()?window.location.href=`/checkout.html?id=${e.property_id}`:(E(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const m=window.location.href;try{if(navigator.share)await navigator.share({title:c(e.title),url:m});else{await navigator.clipboard.writeText(m);const p=document.getElementById("share-btn"),T=p.innerHTML;p.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{p.innerHTML=T,window.lucide&&lucide.createIcons()},2e3)}}catch{}});const N=document.getElementById("view-details-btn");N&&N.addEventListener("click",()=>{const m=document.getElementById("listing-details");m&&m.scrollIntoView({behavior:"smooth",block:"start"})});const B=document.getElementById("add-cart-btn");B&&B.addEventListener("click",()=>{ye(e.property_id,1),B.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Added to Cart',window.lucide&&lucide.createIcons(),setTimeout(()=>{B.innerHTML='<i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart',window.lucide&&lucide.createIcons()},2e3)}),Me(e),Ae(e),X(e),je(e),window.lucide&&lucide.createIcons(),e.property_id,e.title,parseFloat(e.price),e.currency;const k=document.getElementById("listing-map");if(k&&window.L){const m=parseFloat(e.latitude)||null,p=parseFloat(e.longitude)||null,T=[e.town,e.city,e.state,e.country].filter(Boolean).join(", ");if(m&&p){const h=L.map(k).setView([m,p],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(h),L.marker([m,p]).addTo(h).bindPopup(e.title)}else T?fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(T)).then(h=>h.json()).then(h=>{if(h&&h[0]){const D=parseFloat(h[0].lat),V=parseFloat(h[0].lon),O=L.map(k).setView([D,V],12);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(O),L.marker([D,V]).addTo(O).bindPopup(e.title)}else k.style.display="none"}).catch(()=>{k.style.display="none"}):k.style.display="none"}}let S=0,G=!1;function Ce(){if(G)return;G=!0;const e=document.createElement("style");e.textContent="@keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}",document.head.appendChild(e)}function q(e,t){if(!e)return;Ce(),e.innerHTML=`<i data-lucide="heart" class="w-5 h-5 ${t?"fill-red-500 text-red-500":""}"></i>`,e.classList.toggle("bg-red-50",t),e.classList.toggle("border",t),e.classList.toggle("border-red-200",t);const a=e.querySelector("span");a&&(a.textContent=t?"Saved to Wishlist":"Add to Wishlist"),window.lucide&&lucide.createIcons();const r=e.querySelector("i");r&&(r.style.animation="none",r.offsetWidth,r.style.animation="kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)",setTimeout(()=>{r&&(r.style.animation="")},550))}async function Me(e){const t=document.getElementById("wishlist-btn");if(!t)return;const a=await I();if(!a){t.addEventListener("click",()=>{E(window.location.pathname+window.location.search),window.location.href=`/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`});return}const{data:r,error:s}=await y.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(s){console.error("Wishlist check failed:",s.message);return}r&&q(t,!0),t.addEventListener("click",async()=>{const{data:i,error:n}=await y.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(n){console.error("Wishlist toggle failed:",n.message);return}if(i){const{error:d}=await y.from("wishlist").delete().eq("id",i.id);if(d){console.error("Wishlist delete failed:",d.message);return}q(t,!1)}else{const{error:d}=await y.from("wishlist").insert({user_id:a.id,listing_id:e.id});if(d){console.error("Wishlist insert failed:",d.message);return}q(t,!0)}})}async function Ae(e){const t=document.getElementById("review-form"),a=document.getElementById("review-login-msg"),r=await I();if(!r){t.classList.add("hidden"),a.classList.remove("hidden");return}document.querySelectorAll(".star-btn").forEach(s=>{s.addEventListener("click",()=>{S=parseInt(s.dataset.rating,10),document.querySelectorAll(".star-btn").forEach((i,n)=>{const d=i.querySelector("i");n<S?(d.classList.add("fill-blue-500","text-blue-500"),d.classList.remove("text-gray-600")):(d.classList.remove("fill-blue-500","text-blue-500"),d.classList.add("text-gray-600"))})})}),t.addEventListener("submit",async s=>{s.preventDefault();const i=document.getElementById("review-text").value.trim();if(!S){alert("Please select a rating.");return}if(!i){alert("Please write a review.");return}const{error:n}=await y.from("product_reviews").insert({listing_id:e.id,user_id:r.id,rating:S,review_text:i,is_approved:!1});if(n){alert("Error: "+n.message);return}document.getElementById("review-text").value="",S=0,document.querySelectorAll(".star-btn").forEach(d=>{const o=d.querySelector("i");o.classList.remove("fill-blue-500","text-blue-500"),o.classList.add("text-gray-600")}),alert("Review submitted! It will appear after admin approval."),X(e)})}async function X(e){const t=document.getElementById("reviews-list");if(!t||!e.id)return;const{data:a,error:r}=await y.from("product_reviews").select("*, profiles(full_name)").eq("listing_id",e.id).eq("is_approved",!0).order("created_at",{ascending:!1});if(r){t.innerHTML='<p class="text-gray-500 text-sm">Unable to load reviews.</p>';return}if(!a||a.length===0){t.innerHTML='<p class="text-gray-500 text-sm">No reviews yet. Be the first to review this product!</p>';return}t.innerHTML=a.map(s=>{const i=s.profiles?.full_name||"Anonymous";return`
    <div class="flex gap-3 py-4 border-b border-gray-100 last:border-0">
      <div class="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-black uppercase shadow-sm">${c(i.trim().charAt(0).toUpperCase()||"A")}</div>
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-sm font-bold text-gray-900">${c(i)}</span>
          ${s.is_verified_purchase?'<span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full"><i data-lucide="badge-check" class="w-3 h-3"></i> Verified Purchase</span>':""}
          <span class="text-xs text-gray-400">${new Date(s.created_at).toLocaleDateString()}</span>
        </div>
        <div class="flex gap-0.5 mt-1">${[1,2,3,4,5].map(d=>`<i data-lucide="star" class="w-3.5 h-3.5 ${d<=s.rating?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}</div>
        <p class="text-[15px] text-gray-700 leading-relaxed mt-1.5">${c(s.review_text||"")}</p>
        ${s.vendor_response?`<div class="mt-2.5 bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm text-gray-600"><span class="font-bold text-gray-800 flex items-center gap-1.5"><i data-lucide="badge-check" class="w-3.5 h-3.5 text-blue-500"></i> Seller Response</span><p class="mt-1">${c(s.vendor_response)}</p></div>`:""}
      </div>
    </div>`}).join(""),window.lucide&&lucide.createIcons()}async function je(e){const t=document.getElementById("recommendations-section"),a=document.getElementById("recommendations-grid");if(!t||!a||!e.id)return;const{data:r,error:s}=await y.from("product_recommendations").select("recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)").eq("listing_id",e.id).order("score",{ascending:!1}).limit(4);if(s){console.error("Recommendations load failed:",s.message),t.classList.add("hidden");return}let i=(r||[]).map(n=>n.showroom_listings).filter(Boolean);if(i.length<4){const{data:n}=await y.from("showroom_listings").select("property_id, title, price, currency, images, listing_type").eq("category",e.category).neq("id",e.id).eq("is_active",!0).order("rating",{ascending:!1}).limit(4-i.length);i=[...i,...n||[]]}if(i.length===0){t.classList.add("hidden");return}t.classList.remove("hidden"),a.innerHTML=i.map(n=>{const d=n.images&&n.images[0]||"/fallback.svg",o=typeof n.price=="number"?n.price:parseFloat(n.price||0),b=n.currency||"USD";return`<a href="/details.html?id=${n.property_id}" class="block bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition group">
      <div class="aspect-square overflow-hidden bg-gray-100"><img src="${c(d)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-gray-900 font-bold truncate">${c(n.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${b} ${o.toLocaleString()}</p></div>
    </a>`}).join("")}function c(e){return String(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function He(){const e=$e();if(!e){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}await te();const t=ae(e);if(t){v(t),document.title=`${t.title} | Weverse Online Shop`,C(t);try{w(t)}catch{}return}const a=se(e);if(a){v(a),document.title=`${a.title} | Weverse Online Shop`,Le(a);return}const r=de(e);if(r){v(r),document.title=`${r.title} | Weverse Online Shop`,Ie(r);return}const s=pe(e);if(s){v(s),document.title=`${s.title} | Weverse Online Shop`,Se(s);return}const i=me(e);if(i){v(i),document.title=`${i.title} | Weverse Online Shop`,C(i);try{w(i)}catch{}return}const n=_e(e);if(n){v(n),document.title=`${n.title} | Weverse Online Shop`,C(n);try{w(n)}catch{}return}const[{generateListingById:d},{loadHiddenCatalogIds:o}]=await Promise.all([z(()=>import("./catalog-3IUO5W3L.js"),__vite__mapDeps([0,1,2])),z(()=>import("./catalog-hidden-store-wpIcgcJZ.js"),__vite__mapDeps([1,2]))]);await o();const b=d(e);if(!b){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}v(b),document.title=`${b.title} | Weverse Online Shop`,C(b);try{w(b)}catch{}}He();
