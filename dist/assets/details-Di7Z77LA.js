const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/catalog-CESpPuFx.js","assets/catalog-hidden-store-DbF0xVeS.js","assets/preload-helper-CLcXU_4U.js"])))=>i.map(i=>d[i]);
import{supabase as f}from"./supabase-client-7_ZWSEp6.js";import"./localization-DZro7UN4.js";import{_ as W}from"./preload-helper-CLcXU_4U.js";import{c as $,S as z,l as U,f as G,a as A,b as D,g as Y,P as K}from"./showroom-data-D-nP9j-R.js";import{getCatalogCategory as J,getCatalogSample as Q}from"./catalog-CESpPuFx.js";import{g as X,a as Z,b as ee,c as te,f as ae,T as re,M as oe,C as le,P as ie}from"./phone-data-CExU1cqD.js";import{r as se}from"./showroom-cards-Cd2KWGt3.js";import{g as w,f as I}from"./auth-D3ZJ7kZA.js";import"./live-stream-mode-fNPFq7rS.js";import"./customer-ai-widget-L9BHjKej.js";import"./brand-DYhAh01b.js";import"./catalog-hidden-store-DbF0xVeS.js";const v="/fallback.svg";function B(e){return typeof e=="number"&&!isNaN(e)?e.toFixed(1):"0.0"}function T(e){return Array.isArray(e)&&e.length>0?e:[v]}function ne(){return new URLSearchParams(window.location.search).get("id")}function ce(e){const t=document.getElementById("details-content"),a=ae(e),n=T(e.images).map((r,u)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${u===0?"active border-blue-500":"border-gray-800"} shrink-0" data-img="${s(r)}">
      <img src="${s(r)}" alt="View ${u+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${v}'">
    </button>`).join(""),l=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cargo Area / Truck Bed","Engine","Wheels / Tires","Additional View"],d=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"package",label:"Payload Capacity",value:e.payload_capacity},{icon:"link",label:"Towing Capacity",value:e.towing_capacity},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(r=>r.value!=null&&r.value!==""&&r.value!=="N/A"),p=e.features?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features</h3>
      <div class="flex flex-wrap gap-2">
        ${e.features.map(r=>`<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${s(r)}</span>`).join("")}
      </div>
    </div>`:"",c=`
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-amber-400 text-amber-400"></i>
        <span class="text-lg font-bold text-white">${B(e.rating)}</span>
        <span class="text-gray-500 text-sm">(${e.rating_count||0} ratings)</span>
      </div>
    </div>`;t.innerHTML=`
    <div class="fade-in">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>Trucks</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-300 truncate">${e.title}</span>
      </div>

      <!-- Title & ID -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${s(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${s(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-400 font-mono">${s(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${s(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${c}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${v}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${l[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${n}
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 mb-8">
        <button id="buy-now-btn" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl uppercase text-sm tracking-wider transition flex items-center justify-center gap-2">
          <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
        </button>
        <button id="wishlist-btn" class="px-5 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="w-5 h-5"></i>
        </button>
        <button id="share-btn" class="px-5 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Share">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Description -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-3">Description</h3>
        <p class="text-gray-400 text-sm leading-relaxed">${s(e.description||"")}</p>
      </div>

      <!-- Truck Information -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Truck Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          ${d.map(r=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${r.icon}" class="w-3.5 h-3.5"></i>${r.label}</div>
              <div class="text-gray-200 font-medium text-sm">${s(r.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>

      ${p}

      ${H(e)}

      ${C()}
    </div>
  `;const b=document.getElementById("hero-image"),x=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((r,u)=>{r.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.add("border-gray-800")),r.classList.add("active","border-blue-500"),r.classList.remove("border-gray-800"),b.src=r.dataset.img,x.textContent=l[u]||`View ${u+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await w()?window.location.href=`/checkout.html?id=${e.property_id}`:(I(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const r=window.location.href;try{if(navigator.share)await navigator.share({title:s(e.title),url:r});else{await navigator.clipboard.writeText(r);const u=document.getElementById("share-btn"),g=u.innerHTML;u.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{u.innerHTML=g,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),_(e),window.lucide&&lucide.createIcons()}function de(e){const t=document.getElementById("details-content"),a=A(e),n=T(e.images).map((r,u)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${u===0?"active border-blue-500":"border-gray-800"} shrink-0" data-img="${s(r)}">
      <img src="${s(r)}" alt="View ${u+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${v}'">
    </button>`).join(""),l=["Exterior Front","Exterior Side","Exterior Rear","Living Area","Kitchen","Bedroom","Bathroom","Additional View"],d=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(r=>r.value!=null&&r.value!==""&&r.value!=="N/A"),p=e.features?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features</h3>
      <div class="flex flex-wrap gap-2">
        ${e.features.map(r=>`<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${s(r)}</span>`).join("")}
      </div>
    </div>`:"",c=`
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-amber-400 text-amber-400"></i>
        <span class="text-lg font-bold text-white">${B(e.rating)}</span>
        <span class="text-gray-500 text-sm">(${e.rating_count||0} ratings)</span>
      </div>
    </div>`;t.innerHTML=`
    <div class="fade-in">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>Motorhomes</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-300 truncate">${e.title}</span>
      </div>

      <!-- Title & ID -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${s(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${s(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-400 font-mono">${s(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${s(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${c}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${v}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${l[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${n}
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 mb-8">
        <button id="buy-now-btn" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl uppercase text-sm tracking-wider transition flex items-center justify-center gap-2">
          <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
        </button>
        <button id="wishlist-btn" class="px-5 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="w-5 h-5"></i>
        </button>
        <button id="share-btn" class="px-5 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Share">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Description -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-3">Description</h3>
        <p class="text-gray-400 text-sm leading-relaxed">${s(e.description||"")}</p>
      </div>

      <!-- Motorhome Information -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Motorhome Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          ${d.map(r=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${r.icon}" class="w-3.5 h-3.5"></i>${r.label}</div>
              <div class="text-gray-200 font-medium text-sm">${s(r.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>

      ${p}

      ${H(e)}

      ${C()}
    </div>
  `;const b=document.getElementById("hero-image"),x=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((r,u)=>{r.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.add("border-gray-800")),r.classList.add("active","border-blue-500"),r.classList.remove("border-gray-800"),b.src=r.dataset.img,x.textContent=l[u]||`View ${u+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await w()?window.location.href=`/checkout.html?id=${e.property_id}`:(I(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const r=window.location.href;try{if(navigator.share)await navigator.share({title:s(e.title),url:r});else{await navigator.clipboard.writeText(r);const u=document.getElementById("share-btn"),g=u.innerHTML;u.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{u.innerHTML=g,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),_(e),window.lucide&&lucide.createIcons()}function ue(e){const t=document.getElementById("details-content"),a=A(e),n=T(e.images).map((r,u)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${u===0?"active border-blue-500":"border-gray-800"} shrink-0" data-img="${s(r)}">
      <img src="${s(r)}" alt="View ${u+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${v}'">
    </button>`).join(""),l=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cabin / Interior","Wheels / Tires","Additional View"],d=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(r=>r.value!=null&&r.value!==""&&r.value!=="N/A"),p=e.features?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features</h3>
      <div class="flex flex-wrap gap-2">
        ${e.features.map(r=>`<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${s(r)}</span>`).join("")}
      </div>
    </div>`:"",c=`
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-amber-400 text-amber-400"></i>
        <span class="text-lg font-bold text-white">${B(e.rating)}</span>
        <span class="text-gray-500 text-sm">(${e.rating_count||0} ratings)</span>
      </div>
    </div>`;t.innerHTML=`
    <div class="fade-in">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>Cars</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-300 truncate">${e.title}</span>
      </div>

      <!-- Title & ID -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${s(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${s(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-400 font-mono">${s(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${s(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${c}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${v}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${l[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${n}
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 mb-8">
        <button id="buy-now-btn" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl uppercase text-sm tracking-wider transition flex items-center justify-center gap-2">
          <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
        </button>
        <button id="wishlist-btn" class="px-5 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="w-5 h-5"></i>
        </button>
        <button id="share-btn" class="px-5 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Share">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Description -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-3">Description</h3>
        <p class="text-gray-400 text-sm leading-relaxed">${s(e.description||"")}</p>
      </div>

      <!-- Car Information -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Car Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          ${d.map(r=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${r.icon}" class="w-3.5 h-3.5"></i>${r.label}</div>
              <div class="text-gray-200 font-medium text-sm">${s(r.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>

      ${p}

      ${H(e)}

      ${C()}
    </div>
  `;const b=document.getElementById("hero-image"),x=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((r,u)=>{r.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.add("border-gray-800")),r.classList.add("active","border-blue-500"),r.classList.remove("border-gray-800"),b.src=r.dataset.img,x.textContent=l[u]||`View ${u+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await w()?window.location.href=`/checkout.html?id=${e.property_id}`:(I(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const r=window.location.href;try{if(navigator.share)await navigator.share({title:s(e.title),url:r});else{await navigator.clipboard.writeText(r);const u=document.getElementById("share-btn"),g=u.innerHTML;u.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{u.innerHTML=g,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),_(e),window.lucide&&lucide.createIcons()}function pe(e){const a=e.listing_type==="property"?"Share Property":"Share";return`
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
      <button type="button" id="view-details-btn" class="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="eye" class="w-5 h-5"></i> View Details
      </button>
      <button type="button" id="add-cart-btn" class="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart
      </button>
      <button type="button" id="buy-now-btn" class="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition text-sm uppercase tracking-wider">
        <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
      </button>
      <a href="${`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`}" class="flex items-center justify-center gap-2 bg-blue-600/10 border border-blue-500/30 hover:bg-blue-600/20 text-blue-300 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="badge-check" class="w-4 h-4"></i> Contact Us
        <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online</span>
      </a>
      <button type="button" id="wishlist-btn" class="flex items-center justify-center gap-2 bg-gray-800 hover:bg-red-500/20 hover:text-red-400 text-gray-300 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="heart" class="w-5 h-5"></i> Add to Wishlist
      </button>
      <button type="button" id="share-btn" class="flex items-center justify-center gap-2 bg-gray-800 hover:bg-blue-500/20 hover:text-blue-400 text-gray-300 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="share-2" class="w-5 h-5"></i> ${a}
      </button>
    </div>
  `}function H(e){const t=e.listing_type==="property",a=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`;return`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="shrink-0 w-11 h-11 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-gray-800">
          <img src="/brand-logo.jpeg" alt="Weverse Online Shop" class="w-full h-full object-contain" onerror="this.onerror=null;this.style.display='none'">
        </div>
        <div>
          <p class="text-sm font-bold text-white">Weverse Online Shop</p>
          <p class="text-xs text-emerald-400 flex items-center gap-1"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Seller</p>
        </div>
      </div>
      <p class="text-xs text-gray-500">${t?"Professional agent for this listing":"Trusted marketplace seller"} on Weverse Online Shop</p>
      <p class="text-xs text-gray-400 mt-2 flex items-center gap-1"><i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i> Secure checkout · Authentic listings</p>
      <div class="flex gap-2 mt-4">
        <a href="${a}" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 rounded-xl text-xs text-center transition">Contact Seller</a>
        <a href="${a}&subject=Enquiry" class="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold py-2.5 rounded-xl text-xs text-center transition">Send Message</a>
      </div>
    </div>`}function C(){return`
      <div id="similar-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Similar Products</h3>
        <div class="rel-grid flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-1 snap-x snap-mandatory"></div>
      </div>
      <div id="related-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Related Products</h3>
        <div class="rel-grid flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-1 snap-x snap-mandatory"></div>
      </div>
      <div id="recommended-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Recommended For You</h3>
        <div class="rel-grid flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-1 snap-x snap-mandatory"></div>
      </div>`}function me(e){const t=new Map,a=n=>(n||[]).forEach(l=>{l&&l.property_id&&t.set(l.property_id,l)});a(z),a(re),a(oe),a(le),a(ie),a(K),a(Y());const o=J(e.category||e.subcategory);return o&&a(Q(o.slug,50)),[...t.values()].filter(n=>n.property_id!==e.property_id)}function be(e,t){let a=0;const o=b=>String(b||"").trim().toLowerCase();e.listing_type&&e.listing_type===t.listing_type&&(a+=40),e.category&&o(e.category)===o(t.category)&&(a+=30),e.subcategory&&o(e.subcategory)===o(t.subcategory)&&(a+=20),e.brand&&o(e.brand)===o(t.brand)&&(a+=15),e.breed&&o(e.breed)===o(t.breed)&&(a+=15),e.model&&o(e.model)===o(t.model)&&(a+=10),e.property_type&&o(e.property_type)===o(t.property_type)&&(a+=15);const n=parseFloat(e.price)||0,l=parseFloat(t.price)||0;if(n>0&&l>0){const b=Math.min(n,l)/Math.max(n,l);b>=.8?a+=10:b>=.6?a+=6:b>=.4&&(a+=3)}e.country_code&&e.country_code===t.country_code&&(a+=5);const d=new Set(o(e.title).split(/[^a-z0-9]+/).filter(b=>b.length>2)),p=new Set(o(t.title).split(/[^a-z0-9]+/).filter(b=>b.length>2));let c=0;return d.forEach(b=>{p.has(b)&&c++}),a+=Math.min(c*2,10),a}function M(e,t){const a=document.getElementById(e);if(!a)return;const o=a.querySelector(".rel-grid");if(!o)return;if(!t.length){a.classList.add("hidden");return}a.classList.remove("hidden"),o.innerHTML="";const n=document.createDocumentFragment();t.slice(0,10).forEach(l=>{const d=document.createElement("div");d.className="shrink-0 w-[260px] sm:w-[320px] snap-start";const p=se(l);p.style.width="100%",d.appendChild(p),n.appendChild(d)}),o.appendChild(n),window.lucide&&lucide.createIcons()}function _(e){const t=me(e),a=t.map(c=>({item:c,score:be(e,c)})).sort((c,b)=>b.score-c.score||(b.item.rating||0)-(c.item.rating||0)),o=a.filter(c=>c.score>=35).map(c=>c.item),n=new Set(o.map(c=>c.property_id)),l=a.filter(c=>c.score>=15&&c.score<35&&!n.has(c.item.property_id)).map(c=>c.item),d=[...t].filter(c=>!n.has(c.property_id)).sort((c,b)=>(b.rating||0)-(c.rating||0)).slice(0,10),p=a.filter(c=>!n.has(c.item.property_id)).map(c=>c.item);M("similar-section",o.length?o:p.slice(0,10)),M("related-section",l.length?l:p.slice(0,10)),M("recommended-section",d.length?d:p.slice(0,10))}function N(e){const t=document.getElementById("details-content"),a=e.listing_type==="property",o=A(e),n=D(e.country_code),l=e.listing_type==="product"?"Product ID":a?"Property ID":"Listing ID",p=T(e.images).map((m,i)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${i===0?"active border-blue-500":"border-gray-800"} shrink-0" data-img="${s(m)}">
      <img src="${s(m)}" alt="View ${i+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${v}'">
    </button>`).join("");let c="";a&&(c=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Location</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${[{icon:"globe",label:"Country",value:`${n} ${e.country}`},{icon:"map-pin",label:"State / Province",value:e.state},{icon:"building",label:"City",value:e.city},{icon:"navigation",label:"Town / Local Area",value:e.town}].filter(i=>i.value).map(i=>`
            <div class="flex items-center gap-2.5 text-sm">
              <div class="p-2 bg-gray-800 rounded-lg"><i data-lucide="${i.icon}" class="w-4 h-4 text-blue-500"></i></div>
              <div><div class="text-gray-500 text-xs">${i.label}</div><div class="text-gray-200 font-medium">${i.value}</div></div>
            </div>
          `).join("")}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-800" style="height:280px"></div>
      </div>`);let b="";a?b=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Property Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${[{icon:"bed-double",label:"Bedrooms",value:e.bedrooms},{icon:"bath",label:"Bathrooms",value:e.bathrooms},{icon:"building",label:"Building Size",value:e.building_size},{icon:"ruler",label:"Land Size",value:e.land_size},{icon:"car",label:"Parking Spaces",value:e.parking_spaces},{icon:"home",label:"Property Type",value:e.property_type},{icon:"sofa",label:"Furnished",value:e.furnished},{icon:"calendar",label:"Year Built",value:e.year_built},{icon:"tag",label:"Status",value:e.listing_status==="rent"?"For Rent":"For Sale"}].filter(i=>i.value!=null&&i.value!=="").map(i=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${i.icon}" class="w-3.5 h-3.5"></i>${i.label}</div>
              <div class="text-gray-200 font-medium text-sm">${s(i.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>`:e.category==="Motorhomes"?b=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Vehicle Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${[{icon:"factory",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank}].filter(i=>i.value!=null&&i.value!=="").map(i=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${i.icon}" class="w-3.5 h-3.5"></i>${i.label}</div>
              <div class="text-gray-200 font-medium text-sm">${s(i.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>`:e.listing_type==="product"?b=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Product Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${[{icon:"factory",label:"Brand",value:e.brand},{icon:"tag",label:"Subcategory",value:e.subcategory},{icon:"palette",label:"Colour",value:e.color},{icon:"ruler",label:"Size",value:e.size},{icon:"layers",label:"Material",value:e.material},{icon:"badge-check",label:"Condition",value:e.condition||"New"},{icon:"shield-check",label:"Warranty",value:e.warranty},{icon:"package-check",label:"Availability",value:e.availability_status}].filter(i=>i.value!=null&&i.value!=="").map(i=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${i.icon}" class="w-3.5 h-3.5"></i>${i.label}</div>
              <div class="text-gray-200 font-medium text-sm">${s(i.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>`:e.listing_type==="pet"&&(b=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Pet Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${[{icon:"paw-print",label:"Breed",value:e.breed},{icon:"calendar",label:"Age",value:e.age},{icon:"users",label:"Gender",value:e.gender},{icon:"palette",label:"Colour",value:e.color},{icon:"scale",label:"Weight",value:e.size},{icon:"globe",label:"Origin",value:`${D(e.country_code)} ${e.country}`},{icon:"badge-check",label:"Health",value:e.condition}].filter(i=>i.value!=null&&i.value!=="").map(i=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${i.icon}" class="w-3.5 h-3.5"></i>${i.label}</div>
              <div class="text-gray-200 font-medium text-sm">${s(i.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>`);const x=e.features?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features & Amenities</h3>
      <div class="flex flex-wrap gap-2">
        ${e.features.map(m=>`<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${s(m)}</span>`).join("")}
      </div>
    </div>`:"",r=e.highlights?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Highlights</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${e.highlights.map(m=>`<div class="flex items-start gap-2 text-sm text-gray-300"><i data-lucide="sparkles" class="w-4 h-4 text-blue-500 mt-0.5"></i><span>${s(m)}</span></div>`).join("")}
      </div>
    </div>`:"",u=`
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-amber-400 text-amber-400"></i>
        <span class="text-lg font-bold text-white">${B(e.rating)}</span>
        <span class="text-gray-500 text-sm">(${e.rating_count||0} ratings)</span>
      </div>
    </div>`;t.innerHTML=`
    <div class="fade-in">
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>${e.category}</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-300 truncate">${s(e.title)}</span>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${s(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">${l}: <span class="text-blue-500 font-mono font-bold">${s(e.property_id)}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${o}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${e.listing_status==="rent"?"For Rent":"For Sale"}</span>
        </div>
      </div>

      ${u}

      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${v}'">
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${p}
      </div>

      ${pe(e)}

      <div id="listing-details" class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-3">Description</h3>
        <p class="text-gray-400 text-sm leading-relaxed">${s(e.description||"")}</p>
      </div>

      ${c}
      ${b}
      ${x}
      ${r}

      <div id="reviews-section" class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Customer Reviews</h3>
        <div id="reviews-list"><p class="text-gray-500 text-sm">Loading reviews...</p></div>
        <div id="review-form-wrapper" class="mt-4 pt-4 border-t border-gray-800">
          <h4 class="text-sm font-bold text-white mb-3">Write a Review</h4>
          <div id="review-login-msg" class="text-xs text-gray-500 hidden">Please <a href="/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}" class="text-blue-500 hover:underline">sign in</a> to write a review.</div>
          <form id="review-form" class="space-y-3">
            <div class="flex items-center gap-2">
              <label class="text-xs text-gray-400 font-bold uppercase">Rating</label>
              <div id="star-rating" class="flex gap-1">
                ${[1,2,3,4,5].map(m=>`<button type="button" data-rating="${m}" class="star-btn p-1"><i data-lucide="star" class="w-5 h-5 text-gray-600 hover:text-blue-500 transition"></i></button>`).join("")}
              </div>
            </div>
            <textarea id="review-text" rows="3" placeholder="Share your experience with this product..." class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"></textarea>
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-xl text-sm transition">Submit Review</button>
          </form>
        </div>
      </div>

      <div id="recommendations-section" class="hidden">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">You May Also Like</h3>
        <div id="recommendations-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>

      ${C()}
    </div>
  `;const g=document.getElementById("hero-image");t.querySelectorAll(".gallery-thumb").forEach(m=>{m.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(i=>i.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(i=>i.classList.add("border-gray-800")),m.classList.add("active","border-blue-500"),m.classList.remove("border-gray-800"),g.src=m.dataset.img})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await w()?window.location.href=`/checkout.html?id=${e.property_id}`:(I(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const m=window.location.href;try{if(navigator.share)await navigator.share({title:s(e.title),url:m});else{await navigator.clipboard.writeText(m);const i=document.getElementById("share-btn"),E=i.innerHTML;i.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{i.innerHTML=E,window.lucide&&lucide.createIcons()},2e3)}}catch{}});const R=document.getElementById("view-details-btn");R&&R.addEventListener("click",()=>{const m=document.getElementById("listing-details");m&&m.scrollIntoView({behavior:"smooth",block:"start"})});const S=document.getElementById("add-cart-btn");S&&S.addEventListener("click",()=>{let m=JSON.parse(localStorage.getItem("kco_cart")||"[]");m.includes(e.property_id)||(m.push(e.property_id),localStorage.setItem("kco_cart",JSON.stringify(m))),S.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Added to Cart',window.lucide&&lucide.createIcons(),setTimeout(()=>{S.innerHTML='<i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart',window.lucide&&lucide.createIcons()},2e3)}),he(e),ve(e),O(e),fe(e),window.lucide&&lucide.createIcons(),e.property_id,e.title,parseFloat(e.price),e.currency;const y=document.getElementById("listing-map");if(y&&window.L){const m=parseFloat(e.latitude)||null,i=parseFloat(e.longitude)||null,E=[e.town,e.city,e.state,e.country].filter(Boolean).join(", ");if(m&&i){const h=L.map(y).setView([m,i],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(h),L.marker([m,i]).addTo(h).bindPopup(e.title)}else E?fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(E)).then(h=>h.json()).then(h=>{if(h&&h[0]){const P=parseFloat(h[0].lat),q=parseFloat(h[0].lon),F=L.map(y).setView([P,q],12);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(F),L.marker([P,q]).addTo(F).bindPopup(e.title)}else y.style.display="none"}).catch(()=>{y.style.display="none"}):y.style.display="none"}}let k=0,V=!1;function ge(){if(V)return;V=!0;const e=document.createElement("style");e.textContent="@keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}",document.head.appendChild(e)}function j(e,t){if(!e)return;ge(),e.innerHTML=`<i data-lucide="heart" class="w-5 h-5 ${t?"fill-red-500 text-red-500":""}"></i>`,e.classList.toggle("bg-red-500/10",t),e.classList.toggle("border",t),e.classList.toggle("border-red-500/20",t);const a=e.querySelector("span");a&&(a.textContent=t?"Saved to Wishlist":"Add to Wishlist"),window.lucide&&lucide.createIcons();const o=e.querySelector("i");o&&(o.style.animation="none",o.offsetWidth,o.style.animation="kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)",setTimeout(()=>{o&&(o.style.animation="")},550))}async function he(e){const t=document.getElementById("wishlist-btn");if(!t)return;const a=await w();if(!a){t.addEventListener("click",()=>{I(window.location.pathname+window.location.search),window.location.href=`/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`});return}const{data:o,error:n}=await f.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(n){console.error("Wishlist check failed:",n.message);return}o&&j(t,!0),t.addEventListener("click",async()=>{const{data:l,error:d}=await f.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(d){console.error("Wishlist toggle failed:",d.message);return}if(l){const{error:p}=await f.from("wishlist").delete().eq("id",l.id);if(p){console.error("Wishlist delete failed:",p.message);return}j(t,!1)}else{const{error:p}=await f.from("wishlist").insert({user_id:a.id,listing_id:e.id});if(p){console.error("Wishlist insert failed:",p.message);return}j(t,!0)}})}async function ve(e){const t=document.getElementById("review-form"),a=document.getElementById("review-login-msg"),o=await w();if(!o){t.classList.add("hidden"),a.classList.remove("hidden");return}document.querySelectorAll(".star-btn").forEach(n=>{n.addEventListener("click",()=>{k=parseInt(n.dataset.rating,10),document.querySelectorAll(".star-btn").forEach((l,d)=>{const p=l.querySelector("i");d<k?(p.classList.add("fill-blue-500","text-blue-500"),p.classList.remove("text-gray-600")):(p.classList.remove("fill-blue-500","text-blue-500"),p.classList.add("text-gray-600"))})})}),t.addEventListener("submit",async n=>{n.preventDefault();const l=document.getElementById("review-text").value.trim();if(!k){alert("Please select a rating.");return}if(!l){alert("Please write a review.");return}const{error:d}=await f.from("product_reviews").insert({listing_id:e.id,user_id:o.id,rating:k,review_text:l,is_approved:!1});if(d){alert("Error: "+d.message);return}document.getElementById("review-text").value="",k=0,document.querySelectorAll(".star-btn").forEach(p=>{const c=p.querySelector("i");c.classList.remove("fill-blue-500","text-blue-500"),c.classList.add("text-gray-600")}),alert("Review submitted! It will appear after admin approval."),O(e)})}async function O(e){const t=document.getElementById("reviews-list");if(!t||!e.id)return;const{data:a,error:o}=await f.from("product_reviews").select("*, profiles(full_name)").eq("listing_id",e.id).eq("is_approved",!0).order("created_at",{ascending:!1});if(o){t.innerHTML='<p class="text-gray-500 text-sm">Unable to load reviews.</p>';return}if(!a||a.length===0){t.innerHTML='<p class="text-gray-500 text-sm">No reviews yet. Be the first to review this product!</p>';return}t.innerHTML=a.map(n=>`
    <div class="border-b border-gray-800 pb-3 mb-3 last:border-0">
      <div class="flex items-center gap-2 mb-1">
        <div class="flex gap-0.5">${[1,2,3,4,5].map(l=>`<i data-lucide="star" class="w-3.5 h-3.5 ${l<=n.rating?"fill-amber-400 text-amber-400":"text-gray-600"}"></i>`).join("")}</div>
        <span class="text-xs text-gray-400 font-bold">${s(n.profiles?.full_name||"Anonymous")}</span>
        <span class="text-xs text-gray-600">${new Date(n.created_at).toLocaleDateString()}</span>
        ${n.is_verified_purchase?'<span class="text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">Verified Purchase</span>':""}
      </div>
      <p class="text-sm text-gray-300">${s(n.review_text||"")}</p>
      ${n.vendor_response?`<div class="mt-2 bg-gray-800/50 rounded-lg p-2 text-xs text-gray-400"><strong class="text-gray-300">Seller response:</strong> ${s(n.vendor_response)}</div>`:""}
    </div>`).join(""),window.lucide&&lucide.createIcons()}async function fe(e){const t=document.getElementById("recommendations-section"),a=document.getElementById("recommendations-grid");if(!t||!a||!e.id)return;const{data:o,error:n}=await f.from("product_recommendations").select("recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)").eq("listing_id",e.id).order("score",{ascending:!1}).limit(4);if(n){console.error("Recommendations load failed:",n.message),t.classList.add("hidden");return}let l=(o||[]).map(d=>d.showroom_listings).filter(Boolean);if(l.length<4){const{data:d}=await f.from("showroom_listings").select("property_id, title, price, currency, images, listing_type").eq("category",e.category).neq("id",e.id).eq("is_active",!0).order("rating",{ascending:!1}).limit(4-l.length);l=[...l,...d||[]]}if(l.length===0){t.classList.add("hidden");return}t.classList.remove("hidden"),a.innerHTML=l.map(d=>{const p=d.images&&d.images[0]||"/fallback.svg",c=typeof d.price=="number"?d.price:parseFloat(d.price||0),b=d.currency||"USD";return`<a href="/details.html?id=${d.property_id}" class="block bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/30 transition group">
      <div class="aspect-square overflow-hidden bg-gray-800"><img src="${s(p)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-white font-bold truncate">${s(d.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${b} ${c.toLocaleString()}</p></div>
    </a>`}).join("")}function s(e){return String(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function xe(){const e=ne();if(!e){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}const t=X(e);if(t){$(t),document.title=`${t.title} | Weverse Online Shop`,ce(t);return}const a=Z(e);if(a){$(a),document.title=`${a.title} | Weverse Online Shop`,de(a);return}const o=ee(e);if(o){$(o),document.title=`${o.title} | Weverse Online Shop`,ue(o);return}const n=te(e);if(n){$(n),document.title=`${n.title} | Weverse Online Shop`,N(n);try{_(n)}catch{}return}let l=z.find(d=>d.property_id===e);if(!l){const[{generateListingById:d},{loadHiddenCatalogIds:p}]=await Promise.all([W(()=>import("./catalog-CESpPuFx.js"),__vite__mapDeps([0,1,2])),W(()=>import("./catalog-hidden-store-DbF0xVeS.js"),__vite__mapDeps([1,2]))]);await p(),l=d(e)}if(l||(await U(),l=G(e)),!l){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}$(l),document.title=`${l.title} | Weverse Online Shop`,N(l);try{_(l)}catch{}}xe();
