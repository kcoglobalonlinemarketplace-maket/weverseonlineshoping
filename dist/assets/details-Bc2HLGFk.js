const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/catalog-DBQWiGKW.js","assets/catalog-hidden-store-DbF0xVeS.js","assets/preload-helper-CLcXU_4U.js"])))=>i.map(i=>d[i]);
import{supabase as f}from"./supabase-client-7_ZWSEp6.js";import"./localization-B1uQqmO-.js";import{_ as P}from"./preload-helper-CLcXU_4U.js";import{S as V,l as W,f as N,a as S,b as z}from"./showroom-data-BM43Rw3f.js";import{g as U,a as O,b as G,f as Y,T as K,M as J,C as Q}from"./car-data-BznJ4eS3.js";import{g as w,f as k}from"./auth-D3ZJ7kZA.js";import"./live-stream-mode-BV4Diyt0.js";import"./customer-ai-widget-DHsAzpRV.js";import"./brand-DYhAh01b.js";const v="/fallback.svg";function E(e){return typeof e=="number"&&!isNaN(e)?e.toFixed(1):"0.0"}function B(e){return Array.isArray(e)&&e.length>0?e:[v]}function X(){return new URLSearchParams(window.location.search).get("id")}function Z(e){const a=document.getElementById("details-content"),i=Y(e),o=B(e.images).map((t,n)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${n===0?"active border-blue-500":"border-gray-800"} shrink-0" data-img="${r(t)}">
      <img src="${r(t)}" alt="View ${n+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${v}'">
    </button>`).join(""),d=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cargo Area / Truck Bed","Engine","Wheels / Tires","Additional View"],s=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"package",label:"Payload Capacity",value:e.payload_capacity},{icon:"link",label:"Towing Capacity",value:e.towing_capacity},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(t=>t.value!=null&&t.value!==""&&t.value!=="N/A"),b=e.features?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features</h3>
      <div class="flex flex-wrap gap-2">
        ${e.features.map(t=>`<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${r(t)}</span>`).join("")}
      </div>
    </div>`:"",p=`
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-amber-400 text-amber-400"></i>
        <span class="text-lg font-bold text-white">${E(e.rating)}</span>
        <span class="text-gray-500 text-sm">(${e.rating_count||0} ratings)</span>
      </div>
    </div>`;a.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${r(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${r(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-400 font-mono">${r(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${i}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${r(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${p}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${v}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${d[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${o}
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
        <p class="text-gray-400 text-sm leading-relaxed">${r(e.description||"")}</p>
      </div>

      <!-- Truck Information -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Truck Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          ${s.map(t=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${t.icon}" class="w-3.5 h-3.5"></i>${t.label}</div>
              <div class="text-gray-200 font-medium text-sm">${r(t.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>

      ${b}

      ${j(e)}

      <div id="similar-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Similar Products</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
      <div id="related-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Related Products</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
      <div id="recommended-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Recommended For You</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
    </div>
  `;const g=document.getElementById("hero-image"),x=document.getElementById("gallery-label");a.querySelectorAll(".gallery-thumb").forEach((t,n)=>{t.addEventListener("click",()=>{a.querySelectorAll(".gallery-thumb").forEach(m=>m.classList.remove("active","border-blue-500")),a.querySelectorAll(".gallery-thumb").forEach(m=>m.classList.add("border-gray-800")),t.classList.add("active","border-blue-500"),t.classList.remove("border-gray-800"),g.src=t.dataset.img,x.textContent=d[n]||`View ${n+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await w()?window.location.href=`/checkout.html?id=${e.property_id}`:(k(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const t=window.location.href;try{if(navigator.share)await navigator.share({title:r(e.title),url:t});else{await navigator.clipboard.writeText(t);const n=document.getElementById("share-btn"),m=n.innerHTML;n.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{n.innerHTML=m,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),M(e),window.lucide&&lucide.createIcons()}function ee(e){const a=document.getElementById("details-content"),i=S(e),o=B(e.images).map((t,n)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${n===0?"active border-blue-500":"border-gray-800"} shrink-0" data-img="${r(t)}">
      <img src="${r(t)}" alt="View ${n+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${v}'">
    </button>`).join(""),d=["Exterior Front","Exterior Side","Exterior Rear","Living Area","Kitchen","Bedroom","Bathroom","Additional View"],s=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(t=>t.value!=null&&t.value!==""&&t.value!=="N/A"),b=e.features?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features</h3>
      <div class="flex flex-wrap gap-2">
        ${e.features.map(t=>`<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${r(t)}</span>`).join("")}
      </div>
    </div>`:"",p=`
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-amber-400 text-amber-400"></i>
        <span class="text-lg font-bold text-white">${E(e.rating)}</span>
        <span class="text-gray-500 text-sm">(${e.rating_count||0} ratings)</span>
      </div>
    </div>`;a.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${r(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${r(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-400 font-mono">${r(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${i}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${r(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${p}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${v}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${d[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${o}
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
        <p class="text-gray-400 text-sm leading-relaxed">${r(e.description||"")}</p>
      </div>

      <!-- Motorhome Information -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Motorhome Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          ${s.map(t=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${t.icon}" class="w-3.5 h-3.5"></i>${t.label}</div>
              <div class="text-gray-200 font-medium text-sm">${r(t.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>

      ${b}

      ${j(e)}

      <div id="similar-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Similar Products</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
      <div id="related-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Related Products</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
      <div id="recommended-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Recommended For You</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
    </div>
  `;const g=document.getElementById("hero-image"),x=document.getElementById("gallery-label");a.querySelectorAll(".gallery-thumb").forEach((t,n)=>{t.addEventListener("click",()=>{a.querySelectorAll(".gallery-thumb").forEach(m=>m.classList.remove("active","border-blue-500")),a.querySelectorAll(".gallery-thumb").forEach(m=>m.classList.add("border-gray-800")),t.classList.add("active","border-blue-500"),t.classList.remove("border-gray-800"),g.src=t.dataset.img,x.textContent=d[n]||`View ${n+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await w()?window.location.href=`/checkout.html?id=${e.property_id}`:(k(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const t=window.location.href;try{if(navigator.share)await navigator.share({title:r(e.title),url:t});else{await navigator.clipboard.writeText(t);const n=document.getElementById("share-btn"),m=n.innerHTML;n.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{n.innerHTML=m,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),M(e,J),window.lucide&&lucide.createIcons()}function te(e){const a=document.getElementById("details-content"),i=S(e),o=B(e.images).map((t,n)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${n===0?"active border-blue-500":"border-gray-800"} shrink-0" data-img="${r(t)}">
      <img src="${r(t)}" alt="View ${n+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${v}'">
    </button>`).join(""),d=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cabin / Interior","Wheels / Tires","Additional View"],s=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(t=>t.value!=null&&t.value!==""&&t.value!=="N/A"),b=e.features?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features</h3>
      <div class="flex flex-wrap gap-2">
        ${e.features.map(t=>`<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${r(t)}</span>`).join("")}
      </div>
    </div>`:"",p=`
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-amber-400 text-amber-400"></i>
        <span class="text-lg font-bold text-white">${E(e.rating)}</span>
        <span class="text-gray-500 text-sm">(${e.rating_count||0} ratings)</span>
      </div>
    </div>`;a.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${r(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${r(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-400 font-mono">${r(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${i}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${r(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${p}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${v}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${d[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${o}
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
        <p class="text-gray-400 text-sm leading-relaxed">${r(e.description||"")}</p>
      </div>

      <!-- Car Information -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Car Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          ${s.map(t=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${t.icon}" class="w-3.5 h-3.5"></i>${t.label}</div>
              <div class="text-gray-200 font-medium text-sm">${r(t.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>

      ${b}

      ${j(e)}

      <div id="similar-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Similar Products</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
      <div id="related-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Related Products</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
      <div id="recommended-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Recommended For You</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
    </div>
  `;const g=document.getElementById("hero-image"),x=document.getElementById("gallery-label");a.querySelectorAll(".gallery-thumb").forEach((t,n)=>{t.addEventListener("click",()=>{a.querySelectorAll(".gallery-thumb").forEach(m=>m.classList.remove("active","border-blue-500")),a.querySelectorAll(".gallery-thumb").forEach(m=>m.classList.add("border-gray-800")),t.classList.add("active","border-blue-500"),t.classList.remove("border-gray-800"),g.src=t.dataset.img,x.textContent=d[n]||`View ${n+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await w()?window.location.href=`/checkout.html?id=${e.property_id}`:(k(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const t=window.location.href;try{if(navigator.share)await navigator.share({title:r(e.title),url:t});else{await navigator.clipboard.writeText(t);const n=document.getElementById("share-btn"),m=n.innerHTML;n.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{n.innerHTML=m,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),M(e,Q),window.lucide&&lucide.createIcons()}function ae(e){const i=e.listing_type==="property"?"Share Property":"Share";return`
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
        <i data-lucide="share-2" class="w-5 h-5"></i> ${i}
      </button>
    </div>
  `}function j(e){const a=e.listing_type==="property",i=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`;return`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-amber-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
          <i data-lucide="store" class="w-5 h-5 text-blue-400"></i>
        </div>
        <div>
          <p class="text-sm font-bold text-white">Weverse Online Shop</p>
          <p class="text-xs text-emerald-400 flex items-center gap-1"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Seller</p>
        </div>
      </div>
      <p class="text-xs text-gray-500">${a?"Professional agent for this listing":"Trusted marketplace seller"} on Weverse Online Shop</p>
      <p class="text-xs text-gray-400 mt-2 flex items-center gap-1"><i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i> Secure checkout · Authentic listings</p>
      <div class="flex gap-2 mt-4">
        <a href="${i}" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 rounded-xl text-xs text-center transition">Contact Seller</a>
        <a href="${i}&subject=Enquiry" class="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold py-2.5 rounded-xl text-xs text-center transition">Send Message</a>
      </div>
    </div>`}function re(e){const a=e.images&&e.images[0]||"/fallback.svg";return`<a href="/details.html?id=${encodeURIComponent(e.property_id)}" class="block bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/30 transition group">
      <div class="aspect-square overflow-hidden bg-gray-800"><img src="${r(a)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-white font-bold truncate">${r(e.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${S(e)}</p></div>
    </a>`}function T(e,a){const i=document.getElementById(e);if(!i)return;const u=i.querySelector(".rel-grid");if(u){if(!a.length){i.classList.add("hidden");return}i.classList.remove("hidden"),u.innerHTML=a.slice(0,4).map(re).join("")}}function M(e,a=K){const i=a.filter(s=>s.property_id!==e.property_id),u=i.filter(s=>s.category===e.category),o=i.filter(s=>s.brand===e.brand),d=[...i].sort((s,b)=>(b.rating||0)-(s.rating||0));T("similar-section",u.length?u:d.slice(0,4)),T("related-section",o.length?o:d.slice(0,4)),T("recommended-section",d)}function ie(e){const a=document.getElementById("details-content"),i=e.listing_type==="property",u=S(e),o=z(e.country_code),d=e.listing_type==="product"?"Product ID":i?"Property ID":"Listing ID",b=B(e.images).map((c,l)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${l===0?"active border-blue-500":"border-gray-800"} shrink-0" data-img="${r(c)}">
      <img src="${r(c)}" alt="View ${l+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${v}'">
    </button>`).join("");let p="";i&&(p=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Location</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${[{icon:"globe",label:"Country",value:`${o} ${e.country}`},{icon:"map-pin",label:"State / Province",value:e.state},{icon:"building",label:"City",value:e.city},{icon:"navigation",label:"Town / Local Area",value:e.town}].filter(l=>l.value).map(l=>`
            <div class="flex items-center gap-2.5 text-sm">
              <div class="p-2 bg-gray-800 rounded-lg"><i data-lucide="${l.icon}" class="w-4 h-4 text-blue-500"></i></div>
              <div><div class="text-gray-500 text-xs">${l.label}</div><div class="text-gray-200 font-medium">${l.value}</div></div>
            </div>
          `).join("")}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-800" style="height:280px"></div>
      </div>`);let g="";i?g=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Property Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${[{icon:"bed-double",label:"Bedrooms",value:e.bedrooms},{icon:"bath",label:"Bathrooms",value:e.bathrooms},{icon:"building",label:"Building Size",value:e.building_size},{icon:"ruler",label:"Land Size",value:e.land_size},{icon:"car",label:"Parking Spaces",value:e.parking_spaces},{icon:"home",label:"Property Type",value:e.property_type},{icon:"sofa",label:"Furnished",value:e.furnished},{icon:"calendar",label:"Year Built",value:e.year_built},{icon:"tag",label:"Status",value:e.listing_status==="rent"?"For Rent":"For Sale"}].filter(l=>l.value!=null&&l.value!=="").map(l=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${l.icon}" class="w-3.5 h-3.5"></i>${l.label}</div>
              <div class="text-gray-200 font-medium text-sm">${r(l.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>`:e.category==="Motorhomes"?g=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Vehicle Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${[{icon:"factory",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank}].filter(l=>l.value!=null&&l.value!=="").map(l=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${l.icon}" class="w-3.5 h-3.5"></i>${l.label}</div>
              <div class="text-gray-200 font-medium text-sm">${r(l.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>`:e.listing_type==="product"&&(g=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Product Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${[{icon:"factory",label:"Brand",value:e.brand},{icon:"tag",label:"Subcategory",value:e.subcategory},{icon:"palette",label:"Colour",value:e.color},{icon:"ruler",label:"Size",value:e.size},{icon:"layers",label:"Material",value:e.material},{icon:"badge-check",label:"Condition",value:e.condition||"New"},{icon:"shield-check",label:"Warranty",value:e.warranty},{icon:"package-check",label:"Availability",value:e.availability_status}].filter(l=>l.value!=null&&l.value!=="").map(l=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${l.icon}" class="w-3.5 h-3.5"></i>${l.label}</div>
              <div class="text-gray-200 font-medium text-sm">${r(l.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>`);const x=e.features?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features & Amenities</h3>
      <div class="flex flex-wrap gap-2">
        ${e.features.map(c=>`<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${r(c)}</span>`).join("")}
      </div>
    </div>`:"",t=e.highlights?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Highlights</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${e.highlights.map(c=>`<div class="flex items-start gap-2 text-sm text-gray-300"><i data-lucide="sparkles" class="w-4 h-4 text-blue-500 mt-0.5"></i><span>${r(c)}</span></div>`).join("")}
      </div>
    </div>`:"",n=`
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-amber-400 text-amber-400"></i>
        <span class="text-lg font-bold text-white">${E(e.rating)}</span>
        <span class="text-gray-500 text-sm">(${e.rating_count||0} ratings)</span>
      </div>
    </div>`;a.innerHTML=`
    <div class="fade-in">
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>${e.category}</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-300 truncate">${r(e.title)}</span>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${r(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">${d}: <span class="text-blue-500 font-mono font-bold">${r(e.property_id)}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${u}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${e.listing_status==="rent"?"For Rent":"For Sale"}</span>
        </div>
      </div>

      ${n}

      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${v}'">
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${b}
      </div>

      ${ae(e)}

      <div id="listing-details" class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-3">Description</h3>
        <p class="text-gray-400 text-sm leading-relaxed">${r(e.description||"")}</p>
      </div>

      ${p}
      ${g}
      ${x}
      ${t}

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
                ${[1,2,3,4,5].map(c=>`<button type="button" data-rating="${c}" class="star-btn p-1"><i data-lucide="star" class="w-5 h-5 text-gray-600 hover:text-blue-500 transition"></i></button>`).join("")}
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
    </div>
  `;const m=document.getElementById("hero-image");a.querySelectorAll(".gallery-thumb").forEach(c=>{c.addEventListener("click",()=>{a.querySelectorAll(".gallery-thumb").forEach(l=>l.classList.remove("active","border-blue-500")),a.querySelectorAll(".gallery-thumb").forEach(l=>l.classList.add("border-gray-800")),c.classList.add("active","border-blue-500"),c.classList.remove("border-gray-800"),m.src=c.dataset.img})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await w()?window.location.href=`/checkout.html?id=${e.property_id}`:(k(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const c=window.location.href;try{if(navigator.share)await navigator.share({title:r(e.title),url:c});else{await navigator.clipboard.writeText(c);const l=document.getElementById("share-btn"),I=l.innerHTML;l.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{l.innerHTML=I,window.lucide&&lucide.createIcons()},2e3)}}catch{}});const A=document.getElementById("view-details-btn");A&&A.addEventListener("click",()=>{const c=document.getElementById("listing-details");c&&c.scrollIntoView({behavior:"smooth",block:"start"})});const _=document.getElementById("add-cart-btn");_&&_.addEventListener("click",()=>{let c=JSON.parse(localStorage.getItem("kco_cart")||"[]");c.includes(e.property_id)||(c.push(e.property_id),localStorage.setItem("kco_cart",JSON.stringify(c))),_.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Added to Cart',window.lucide&&lucide.createIcons(),setTimeout(()=>{_.innerHTML='<i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart',window.lucide&&lucide.createIcons()},2e3)}),oe(e),se(e),D(e),de(e),window.lucide&&lucide.createIcons(),e.property_id,e.title,parseFloat(e.price),e.currency;const y=document.getElementById("listing-map");if(y&&window.L){const c=parseFloat(e.latitude)||null,l=parseFloat(e.longitude)||null,I=[e.town,e.city,e.state,e.country].filter(Boolean).join(", ");if(c&&l){const h=L.map(y).setView([c,l],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(h),L.marker([c,l]).addTo(h).bindPopup(e.title)}else I?fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(I)).then(h=>h.json()).then(h=>{if(h&&h[0]){const R=parseFloat(h[0].lat),H=parseFloat(h[0].lon),q=L.map(y).setView([R,H],12);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(q),L.marker([R,H]).addTo(q).bindPopup(e.title)}else y.style.display="none"}).catch(()=>{y.style.display="none"}):y.style.display="none"}}let $=0,F=!1;function le(){if(F)return;F=!0;const e=document.createElement("style");e.textContent="@keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}",document.head.appendChild(e)}function C(e,a){if(!e)return;le(),e.innerHTML=`<i data-lucide="heart" class="w-5 h-5 ${a?"fill-red-500 text-red-500":""}"></i>`,e.classList.toggle("bg-red-500/10",a),e.classList.toggle("border",a),e.classList.toggle("border-red-500/20",a);const i=e.querySelector("span");i&&(i.textContent=a?"Saved to Wishlist":"Add to Wishlist"),window.lucide&&lucide.createIcons();const u=e.querySelector("i");u&&(u.style.animation="none",u.offsetWidth,u.style.animation="kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)",setTimeout(()=>{u&&(u.style.animation="")},550))}async function oe(e){const a=document.getElementById("wishlist-btn");if(!a)return;const i=await w();if(!i){a.addEventListener("click",()=>{k(window.location.pathname+window.location.search),window.location.href=`/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`});return}const{data:u,error:o}=await f.from("wishlist").select("id").eq("user_id",i.id).eq("listing_id",e.id).maybeSingle();if(o){console.error("Wishlist check failed:",o.message);return}u&&C(a,!0),a.addEventListener("click",async()=>{const{data:d,error:s}=await f.from("wishlist").select("id").eq("user_id",i.id).eq("listing_id",e.id).maybeSingle();if(s){console.error("Wishlist toggle failed:",s.message);return}if(d){const{error:b}=await f.from("wishlist").delete().eq("id",d.id);if(b){console.error("Wishlist delete failed:",b.message);return}C(a,!1)}else{const{error:b}=await f.from("wishlist").insert({user_id:i.id,listing_id:e.id});if(b){console.error("Wishlist insert failed:",b.message);return}C(a,!0)}})}async function se(e){const a=document.getElementById("review-form"),i=document.getElementById("review-login-msg"),u=await w();if(!u){a.classList.add("hidden"),i.classList.remove("hidden");return}document.querySelectorAll(".star-btn").forEach(o=>{o.addEventListener("click",()=>{$=parseInt(o.dataset.rating,10),document.querySelectorAll(".star-btn").forEach((d,s)=>{const b=d.querySelector("i");s<$?(b.classList.add("fill-blue-500","text-blue-500"),b.classList.remove("text-gray-600")):(b.classList.remove("fill-blue-500","text-blue-500"),b.classList.add("text-gray-600"))})})}),a.addEventListener("submit",async o=>{o.preventDefault();const d=document.getElementById("review-text").value.trim();if(!$){alert("Please select a rating.");return}if(!d){alert("Please write a review.");return}const{error:s}=await f.from("product_reviews").insert({listing_id:e.id,user_id:u.id,rating:$,review_text:d,is_approved:!1});if(s){alert("Error: "+s.message);return}document.getElementById("review-text").value="",$=0,document.querySelectorAll(".star-btn").forEach(b=>{const p=b.querySelector("i");p.classList.remove("fill-blue-500","text-blue-500"),p.classList.add("text-gray-600")}),alert("Review submitted! It will appear after admin approval."),D(e)})}async function D(e){const a=document.getElementById("reviews-list");if(!a||!e.id)return;const{data:i,error:u}=await f.from("product_reviews").select("*, profiles(full_name)").eq("listing_id",e.id).eq("is_approved",!0).order("created_at",{ascending:!1});if(u){a.innerHTML='<p class="text-gray-500 text-sm">Unable to load reviews.</p>';return}if(!i||i.length===0){a.innerHTML='<p class="text-gray-500 text-sm">No reviews yet. Be the first to review this product!</p>';return}a.innerHTML=i.map(o=>`
    <div class="border-b border-gray-800 pb-3 mb-3 last:border-0">
      <div class="flex items-center gap-2 mb-1">
        <div class="flex gap-0.5">${[1,2,3,4,5].map(d=>`<i data-lucide="star" class="w-3.5 h-3.5 ${d<=o.rating?"fill-amber-400 text-amber-400":"text-gray-600"}"></i>`).join("")}</div>
        <span class="text-xs text-gray-400 font-bold">${r(o.profiles?.full_name||"Anonymous")}</span>
        <span class="text-xs text-gray-600">${new Date(o.created_at).toLocaleDateString()}</span>
        ${o.is_verified_purchase?'<span class="text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">Verified Purchase</span>':""}
      </div>
      <p class="text-sm text-gray-300">${r(o.review_text||"")}</p>
      ${o.vendor_response?`<div class="mt-2 bg-gray-800/50 rounded-lg p-2 text-xs text-gray-400"><strong class="text-gray-300">Seller response:</strong> ${r(o.vendor_response)}</div>`:""}
    </div>`).join(""),window.lucide&&lucide.createIcons()}async function de(e){const a=document.getElementById("recommendations-section"),i=document.getElementById("recommendations-grid");if(!a||!i||!e.id)return;const{data:u,error:o}=await f.from("product_recommendations").select("recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)").eq("listing_id",e.id).order("score",{ascending:!1}).limit(4);if(o){console.error("Recommendations load failed:",o.message),a.classList.add("hidden");return}let d=(u||[]).map(s=>s.showroom_listings).filter(Boolean);if(d.length<4){const{data:s}=await f.from("showroom_listings").select("property_id, title, price, currency, images, listing_type").eq("category",e.category).neq("id",e.id).eq("is_active",!0).order("rating",{ascending:!1}).limit(4-d.length);d=[...d,...s||[]]}if(d.length===0){a.classList.add("hidden");return}a.classList.remove("hidden"),i.innerHTML=d.map(s=>{const b=s.images&&s.images[0]||"/fallback.svg",p=typeof s.price=="number"?s.price:parseFloat(s.price||0),g=s.currency||"USD";return`<a href="/details.html?id=${s.property_id}" class="block bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/30 transition group">
      <div class="aspect-square overflow-hidden bg-gray-800"><img src="${r(b)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-white font-bold truncate">${r(s.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${g} ${p.toLocaleString()}</p></div>
    </a>`}).join("")}function r(e){return String(e||"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}async function ne(){const e=X();if(!e){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}const a=U(e);if(a){document.title=`${a.title} | Weverse Online Shop`,Z(a);return}const i=O(e);if(i){document.title=`${i.title} | Weverse Online Shop`,ee(i);return}const u=G(e);if(u){document.title=`${u.title} | Weverse Online Shop`,te(u);return}let o=V.find(d=>d.property_id===e);if(!o){const[{generateListingById:d},{loadHiddenCatalogIds:s}]=await Promise.all([P(()=>import("./catalog-DBQWiGKW.js"),__vite__mapDeps([0,1,2])),P(()=>import("./catalog-hidden-store-DbF0xVeS.js"),__vite__mapDeps([1,2]))]);await s(),o=d(e)}if(o||(await W(),o=N(e)),!o){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}document.title=`${o.title} | Weverse Online Shop`,ie(o)}ne();
