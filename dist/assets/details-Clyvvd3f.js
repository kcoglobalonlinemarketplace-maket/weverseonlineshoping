const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/catalog-DZE9rOFe.js","assets/catalog-hidden-store-DbF0xVeS.js","assets/preload-helper-CLcXU_4U.js"])))=>i.map(i=>d[i]);
import{supabase as v}from"./supabase-client-7_ZWSEp6.js";import"./localization-D8zG2wD-.js";import{_ as C}from"./preload-helper-CLcXU_4U.js";import{S as H,l as P,f as F,a as M,b as D}from"./showroom-data-BrLq5AXT.js";import{g as V,f as z,T as U}from"./truck-data-CXeZJZHb.js";import{g as k,f as S}from"./auth-D3ZJ7kZA.js";import"./live-stream-mode-CQiuOo9o.js";import"./customer-ai-widget-D8Hn02p4.js";import"./brand-BhhjU3ex.js";const y="/fallback.svg";function A(e){return typeof e=="number"&&!isNaN(e)?e.toFixed(1):"0.0"}function R(e){return Array.isArray(e)&&e.length>0?e:[y]}function W(){return new URLSearchParams(window.location.search).get("id")}function N(e){const t=document.getElementById("details-content"),r=z(e),l=R(e.images).map((d,g)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${g===0?"active border-orange-500":"border-gray-800"} shrink-0" data-img="${s(d)}">
      <img src="${s(d)}" alt="View ${g+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${y}'">
    </button>`).join(""),o=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cargo Area / Truck Bed","Engine","Wheels / Tires","Additional View"],n=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"package",label:"Payload Capacity",value:e.payload_capacity},{icon:"link",label:"Towing Capacity",value:e.towing_capacity},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(d=>d.value!=null&&d.value!==""&&d.value!=="N/A"),u=e.features?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features</h3>
      <div class="flex flex-wrap gap-2">
        ${e.features.map(d=>`<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${s(d)}</span>`).join("")}
      </div>
    </div>`:"",p=`
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-orange-500 text-orange-500"></i>
        <span class="text-lg font-bold text-white">${A(e.rating)}</span>
        <span class="text-gray-500 text-sm">(${e.rating_count||0} ratings)</span>
      </div>
    </div>`;t.innerHTML=`
    <div class="fade-in">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-orange-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>Trucks</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-300 truncate">${e.title}</span>
      </div>

      <!-- Title & ID -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${s(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-orange-500 font-mono font-bold">${s(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-400 font-mono">${s(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-orange-500">${r}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${s(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${p}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${y}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${o[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${l}
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 mb-8">
        <button id="buy-now-btn" class="flex-1 bg-orange-500 hover:bg-orange-600 text-black font-bold py-3.5 rounded-xl uppercase text-sm tracking-wider transition flex items-center justify-center gap-2">
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
          ${n.map(d=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${d.icon}" class="w-3.5 h-3.5"></i>${d.label}</div>
              <div class="text-gray-200 font-medium text-sm">${s(d.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>

      ${u}

      ${G(e)}

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
  `;const b=document.getElementById("hero-image"),_=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((d,g)=>{d.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.remove("active","border-orange-500")),t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.add("border-gray-800")),d.classList.add("active","border-orange-500"),d.classList.remove("border-gray-800"),b.src=d.dataset.img,_.textContent=o[g]||`View ${g+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await k()?window.location.href=`/checkout.html?id=${e.property_id}`:(S(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const d=window.location.href;try{if(navigator.share)await navigator.share({title:s(e.title),url:d});else{await navigator.clipboard.writeText(d);const g=document.getElementById("share-btn"),h=g.innerHTML;g.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{g.innerHTML=h,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),K(e),window.lucide&&lucide.createIcons()}function O(e){const r=e.listing_type==="property"?"Share Property":"Share";return`
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
      <button type="button" id="view-details-btn" class="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="eye" class="w-5 h-5"></i> View Details
      </button>
      <button type="button" id="add-cart-btn" class="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart
      </button>
      <button type="button" id="buy-now-btn" class="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-bold py-3.5 rounded-xl transition text-sm uppercase tracking-wider">
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
        <i data-lucide="share-2" class="w-5 h-5"></i> ${r}
      </button>
    </div>
  `}function G(e){const t=e.listing_type==="property",r=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`;return`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
          <i data-lucide="store" class="w-5 h-5 text-orange-400"></i>
        </div>
        <div>
          <p class="text-sm font-bold text-white">Weverse Online Shop</p>
          <p class="text-xs text-emerald-400 flex items-center gap-1"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Seller</p>
        </div>
      </div>
      <p class="text-xs text-gray-500">${t?"Professional agent for this listing":"Trusted marketplace seller"} on Weverse Online Shop</p>
      <p class="text-xs text-gray-400 mt-2 flex items-center gap-1"><i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i> Secure checkout · Authentic listings</p>
      <div class="flex gap-2 mt-4">
        <a href="${r}" class="flex-1 bg-orange-500 hover:bg-orange-600 text-black font-bold py-2.5 rounded-xl text-xs text-center transition">Contact Seller</a>
        <a href="${r}&subject=Enquiry" class="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold py-2.5 rounded-xl text-xs text-center transition">Send Message</a>
      </div>
    </div>`}function Y(e){const t=e.images&&e.images[0]||"/fallback.svg";return`<a href="/details.html?id=${encodeURIComponent(e.property_id)}" class="block bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500/30 transition group">
      <div class="aspect-square overflow-hidden bg-gray-800"><img src="${s(t)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-white font-bold truncate">${s(e.title)}</p><p class="text-xs text-orange-500 font-bold mt-1">${M(e)}</p></div>
    </a>`}function I(e,t){const r=document.getElementById(e);if(!r)return;const c=r.querySelector(".rel-grid");if(c){if(!t.length){r.classList.add("hidden");return}r.classList.remove("hidden"),c.innerHTML=t.slice(0,4).map(Y).join("")}}function K(e){const t=U.filter(o=>o.property_id!==e.property_id),r=t.filter(o=>o.category===e.category),c=t.filter(o=>o.brand===e.brand),l=[...t].sort((o,n)=>(n.rating||0)-(o.rating||0));I("similar-section",r.length?r:l.slice(0,4)),I("related-section",c.length?c:l.slice(0,4)),I("recommended-section",l)}function J(e){const t=document.getElementById("details-content"),r=e.listing_type==="property",c=M(e),l=D(e.country_code),o=e.listing_type==="product"?"Product ID":r?"Property ID":"Listing ID",u=R(e.images).map((i,a)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${a===0?"active border-orange-500":"border-gray-800"} shrink-0" data-img="${s(i)}">
      <img src="${s(i)}" alt="View ${a+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${y}'">
    </button>`).join("");let p="";r&&(p=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Location</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${[{icon:"globe",label:"Country",value:`${l} ${e.country}`},{icon:"map-pin",label:"State / Province",value:e.state},{icon:"building",label:"City",value:e.city},{icon:"navigation",label:"Town / Local Area",value:e.town}].filter(a=>a.value).map(a=>`
            <div class="flex items-center gap-2.5 text-sm">
              <div class="p-2 bg-gray-800 rounded-lg"><i data-lucide="${a.icon}" class="w-4 h-4 text-orange-500"></i></div>
              <div><div class="text-gray-500 text-xs">${a.label}</div><div class="text-gray-200 font-medium">${a.value}</div></div>
            </div>
          `).join("")}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-800" style="height:280px"></div>
      </div>`);let b="";r?b=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Property Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${[{icon:"bed-double",label:"Bedrooms",value:e.bedrooms},{icon:"bath",label:"Bathrooms",value:e.bathrooms},{icon:"building",label:"Building Size",value:e.building_size},{icon:"ruler",label:"Land Size",value:e.land_size},{icon:"car",label:"Parking Spaces",value:e.parking_spaces},{icon:"home",label:"Property Type",value:e.property_type},{icon:"sofa",label:"Furnished",value:e.furnished},{icon:"calendar",label:"Year Built",value:e.year_built},{icon:"tag",label:"Status",value:e.listing_status==="rent"?"For Rent":"For Sale"}].filter(a=>a.value!=null&&a.value!=="").map(a=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${a.icon}" class="w-3.5 h-3.5"></i>${a.label}</div>
              <div class="text-gray-200 font-medium text-sm">${s(a.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>`:e.category==="Motorhomes"?b=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Vehicle Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${[{icon:"factory",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank}].filter(a=>a.value!=null&&a.value!=="").map(a=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${a.icon}" class="w-3.5 h-3.5"></i>${a.label}</div>
              <div class="text-gray-200 font-medium text-sm">${s(a.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>`:e.listing_type==="product"&&(b=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Product Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${[{icon:"factory",label:"Brand",value:e.brand},{icon:"tag",label:"Subcategory",value:e.subcategory},{icon:"palette",label:"Colour",value:e.color},{icon:"ruler",label:"Size",value:e.size},{icon:"layers",label:"Material",value:e.material},{icon:"badge-check",label:"Condition",value:e.condition||"New"},{icon:"shield-check",label:"Warranty",value:e.warranty},{icon:"package-check",label:"Availability",value:e.availability_status}].filter(a=>a.value!=null&&a.value!=="").map(a=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${a.icon}" class="w-3.5 h-3.5"></i>${a.label}</div>
              <div class="text-gray-200 font-medium text-sm">${s(a.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>`);const _=e.features?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features & Amenities</h3>
      <div class="flex flex-wrap gap-2">
        ${e.features.map(i=>`<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${s(i)}</span>`).join("")}
      </div>
    </div>`:"",d=e.highlights?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Highlights</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${e.highlights.map(i=>`<div class="flex items-start gap-2 text-sm text-gray-300"><i data-lucide="sparkles" class="w-4 h-4 text-orange-500 mt-0.5"></i><span>${s(i)}</span></div>`).join("")}
      </div>
    </div>`:"",g=`
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-orange-500 text-orange-500"></i>
        <span class="text-lg font-bold text-white">${A(e.rating)}</span>
        <span class="text-gray-500 text-sm">(${e.rating_count||0} ratings)</span>
      </div>
    </div>`;t.innerHTML=`
    <div class="fade-in">
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-orange-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>${e.category}</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-300 truncate">${s(e.title)}</span>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${s(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">${o}: <span class="text-orange-500 font-mono font-bold">${s(e.property_id)}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-orange-500">${c}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${e.listing_status==="rent"?"For Rent":"For Sale"}</span>
        </div>
      </div>

      ${g}

      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${y}'">
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${u}
      </div>

      ${O(e)}

      <div id="listing-details" class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-3">Description</h3>
        <p class="text-gray-400 text-sm leading-relaxed">${s(e.description||"")}</p>
      </div>

      ${p}
      ${b}
      ${_}
      ${d}

      <div id="reviews-section" class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Customer Reviews</h3>
        <div id="reviews-list"><p class="text-gray-500 text-sm">Loading reviews...</p></div>
        <div id="review-form-wrapper" class="mt-4 pt-4 border-t border-gray-800">
          <h4 class="text-sm font-bold text-white mb-3">Write a Review</h4>
          <div id="review-login-msg" class="text-xs text-gray-500 hidden">Please <a href="/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}" class="text-orange-500 hover:underline">sign in</a> to write a review.</div>
          <form id="review-form" class="space-y-3">
            <div class="flex items-center gap-2">
              <label class="text-xs text-gray-400 font-bold uppercase">Rating</label>
              <div id="star-rating" class="flex gap-1">
                ${[1,2,3,4,5].map(i=>`<button type="button" data-rating="${i}" class="star-btn p-1"><i data-lucide="star" class="w-5 h-5 text-gray-600 hover:text-orange-500 transition"></i></button>`).join("")}
              </div>
            </div>
            <textarea id="review-text" rows="3" placeholder="Share your experience with this product..." class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"></textarea>
            <button type="submit" class="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-5 rounded-xl text-sm transition">Submit Review</button>
          </form>
        </div>
      </div>

      <div id="recommendations-section" class="hidden">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">You May Also Like</h3>
        <div id="recommendations-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
    </div>
  `;const h=document.getElementById("hero-image");t.querySelectorAll(".gallery-thumb").forEach(i=>{i.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(a=>a.classList.remove("active","border-orange-500")),t.querySelectorAll(".gallery-thumb").forEach(a=>a.classList.add("border-gray-800")),i.classList.add("active","border-orange-500"),i.classList.remove("border-gray-800"),h.src=i.dataset.img})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await k()?window.location.href=`/checkout.html?id=${e.property_id}`:(S(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const i=window.location.href;try{if(navigator.share)await navigator.share({title:s(e.title),url:i});else{await navigator.clipboard.writeText(i);const a=document.getElementById("share-btn"),$=a.innerHTML;a.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{a.innerHTML=$,window.lucide&&lucide.createIcons()},2e3)}}catch{}});const E=document.getElementById("view-details-btn");E&&E.addEventListener("click",()=>{const i=document.getElementById("listing-details");i&&i.scrollIntoView({behavior:"smooth",block:"start"})});const w=document.getElementById("add-cart-btn");w&&w.addEventListener("click",()=>{let i=JSON.parse(localStorage.getItem("kco_cart")||"[]");i.includes(e.property_id)||(i.push(e.property_id),localStorage.setItem("kco_cart",JSON.stringify(i))),w.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Added to Cart',window.lucide&&lucide.createIcons(),setTimeout(()=>{w.innerHTML='<i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart',window.lucide&&lucide.createIcons()},2e3)}),Q(e),X(e),q(e),Z(e),window.lucide&&lucide.createIcons(),e.property_id,e.title,parseFloat(e.price),e.currency;const f=document.getElementById("listing-map");if(f&&window.L){const i=parseFloat(e.latitude)||null,a=parseFloat(e.longitude)||null,$=[e.town,e.city,e.state,e.country].filter(Boolean).join(", ");if(i&&a){const m=L.map(f).setView([i,a],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(m),L.marker([i,a]).addTo(m).bindPopup(e.title)}else $?fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent($)).then(m=>m.json()).then(m=>{if(m&&m[0]){const B=parseFloat(m[0].lat),T=parseFloat(m[0].lon),j=L.map(f).setView([B,T],12);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(j),L.marker([B,T]).addTo(j).bindPopup(e.title)}else f.style.display="none"}).catch(()=>{f.style.display="none"}):f.style.display="none"}}let x=0;async function Q(e){const t=document.getElementById("wishlist-btn");if(!t)return;const r=await k();if(!r){t.addEventListener("click",()=>{S(window.location.pathname+window.location.search),window.location.href=`/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`});return}const{data:c,error:l}=await v.from("wishlist").select("id").eq("user_id",r.id).eq("listing_id",e.id).maybeSingle();if(l){console.error("Wishlist check failed:",l.message);return}c&&(t.innerHTML='<i data-lucide="heart" class="w-5 h-5 fill-red-500 text-red-500"></i>',t.classList.add("bg-red-500/10","border","border-red-500/20"),window.lucide&&lucide.createIcons()),t.addEventListener("click",async()=>{const{data:o,error:n}=await v.from("wishlist").select("id").eq("user_id",r.id).eq("listing_id",e.id).maybeSingle();if(n){console.error("Wishlist toggle failed:",n.message);return}if(o){const{error:u}=await v.from("wishlist").delete().eq("id",o.id);if(u){console.error("Wishlist delete failed:",u.message);return}t.innerHTML='<i data-lucide="heart" class="w-5 h-5"></i>',t.classList.remove("bg-red-500/10","border","border-red-500/20")}else{const{error:u}=await v.from("wishlist").insert({user_id:r.id,listing_id:e.id});if(u){console.error("Wishlist insert failed:",u.message);return}t.innerHTML='<i data-lucide="heart" class="w-5 h-5 fill-red-500 text-red-500"></i>',t.classList.add("bg-red-500/10","border","border-red-500/20")}window.lucide&&lucide.createIcons()})}async function X(e){const t=document.getElementById("review-form"),r=document.getElementById("review-login-msg"),c=await k();if(!c){t.classList.add("hidden"),r.classList.remove("hidden");return}document.querySelectorAll(".star-btn").forEach(l=>{l.addEventListener("click",()=>{x=parseInt(l.dataset.rating,10),document.querySelectorAll(".star-btn").forEach((o,n)=>{const u=o.querySelector("i");n<x?(u.classList.add("fill-orange-500","text-orange-500"),u.classList.remove("text-gray-600")):(u.classList.remove("fill-orange-500","text-orange-500"),u.classList.add("text-gray-600"))})})}),t.addEventListener("submit",async l=>{l.preventDefault();const o=document.getElementById("review-text").value.trim();if(!x){alert("Please select a rating.");return}if(!o){alert("Please write a review.");return}const{error:n}=await v.from("product_reviews").insert({listing_id:e.id,user_id:c.id,rating:x,review_text:o,is_approved:!1});if(n){alert("Error: "+n.message);return}document.getElementById("review-text").value="",x=0,document.querySelectorAll(".star-btn").forEach(u=>{const p=u.querySelector("i");p.classList.remove("fill-orange-500","text-orange-500"),p.classList.add("text-gray-600")}),alert("Review submitted! It will appear after admin approval."),q(e)})}async function q(e){const t=document.getElementById("reviews-list");if(!t||!e.id)return;const{data:r,error:c}=await v.from("product_reviews").select("*, profiles(full_name)").eq("listing_id",e.id).eq("is_approved",!0).order("created_at",{ascending:!1});if(c){t.innerHTML='<p class="text-gray-500 text-sm">Unable to load reviews.</p>';return}if(!r||r.length===0){t.innerHTML='<p class="text-gray-500 text-sm">No reviews yet. Be the first to review this product!</p>';return}t.innerHTML=r.map(l=>`
    <div class="border-b border-gray-800 pb-3 mb-3 last:border-0">
      <div class="flex items-center gap-2 mb-1">
        <div class="flex gap-0.5">${[1,2,3,4,5].map(o=>`<i data-lucide="star" class="w-3.5 h-3.5 ${o<=l.rating?"fill-orange-500 text-orange-500":"text-gray-600"}"></i>`).join("")}</div>
        <span class="text-xs text-gray-400 font-bold">${s(l.profiles?.full_name||"Anonymous")}</span>
        <span class="text-xs text-gray-600">${new Date(l.created_at).toLocaleDateString()}</span>
        ${l.is_verified_purchase?'<span class="text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">Verified Purchase</span>':""}
      </div>
      <p class="text-sm text-gray-300">${s(l.review_text||"")}</p>
      ${l.vendor_response?`<div class="mt-2 bg-gray-800/50 rounded-lg p-2 text-xs text-gray-400"><strong class="text-gray-300">Seller response:</strong> ${s(l.vendor_response)}</div>`:""}
    </div>`).join(""),window.lucide&&lucide.createIcons()}async function Z(e){const t=document.getElementById("recommendations-section"),r=document.getElementById("recommendations-grid");if(!t||!r||!e.id)return;const{data:c,error:l}=await v.from("product_recommendations").select("recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)").eq("listing_id",e.id).order("score",{ascending:!1}).limit(4);if(l){console.error("Recommendations load failed:",l.message),t.classList.add("hidden");return}let o=(c||[]).map(n=>n.showroom_listings).filter(Boolean);if(o.length<4){const{data:n}=await v.from("showroom_listings").select("property_id, title, price, currency, images, listing_type").eq("category",e.category).neq("id",e.id).eq("is_active",!0).order("rating",{ascending:!1}).limit(4-o.length);o=[...o,...n||[]]}if(o.length===0){t.classList.add("hidden");return}t.classList.remove("hidden"),r.innerHTML=o.map(n=>{const u=n.images&&n.images[0]||"/fallback.svg",p=typeof n.price=="number"?n.price:parseFloat(n.price||0),b=n.currency||"USD";return`<a href="/details.html?id=${n.property_id}" class="block bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500/30 transition group">
      <div class="aspect-square overflow-hidden bg-gray-800"><img src="${s(u)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-white font-bold truncate">${s(n.title)}</p><p class="text-xs text-orange-500 font-bold mt-1">${b} ${p.toLocaleString()}</p></div>
    </a>`}).join("")}function s(e){return String(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function ee(){const e=W();if(!e){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}const t=V(e);if(t){document.title=`${t.title} | Weverse Online Shop`,N(t);return}let r=H.find(c=>c.property_id===e);if(!r){const[{generateListingById:c},{loadHiddenCatalogIds:l}]=await Promise.all([C(()=>import("./catalog-DZE9rOFe.js"),__vite__mapDeps([0,1,2])),C(()=>import("./catalog-hidden-store-DbF0xVeS.js"),__vite__mapDeps([1,2]))]);await l(),r=c(e)}if(r||(await P(),r=F(e)),!r){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}document.title=`${r.title} | Weverse Online Shop`,J(r)}ee();
