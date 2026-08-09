const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/catalog-DZE9rOFe.js","assets/catalog-hidden-store-DbF0xVeS.js","assets/preload-helper-CLcXU_4U.js"])))=>i.map(i=>d[i]);
import{supabase as v}from"./supabase-client-7_ZWSEp6.js";import"./localization-BnqLMu3X.js";import{_ as A}from"./preload-helper-CLcXU_4U.js";import{S as W,l as F,f as D,a as R,b as z}from"./showroom-data-BoOhjLzR.js";import{g as V,f as U,T as N}from"./truck-data-CXeZJZHb.js";import{g as $,f as E}from"./auth-D3ZJ7kZA.js";import"./live-stream-mode-ClprOZXm.js";import"./customer-ai-widget-EHlUMHfz.js";import"./brand-B0kYkZun.js";const y="/fallback.svg";function P(e){return typeof e=="number"&&!isNaN(e)?e.toFixed(1):"0.0"}function q(e){return Array.isArray(e)&&e.length>0?e:[y]}function O(){return new URLSearchParams(window.location.search).get("id")}function G(e){const t=document.getElementById("details-content"),a=U(e),n=q(e.images).map((d,g)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${g===0?"active border-orange-500":"border-gray-800"} shrink-0" data-img="${l(d)}">
      <img src="${l(d)}" alt="View ${g+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${y}'">
    </button>`).join(""),s=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cargo Area / Truck Bed","Engine","Wheels / Tires","Additional View"],c=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"package",label:"Payload Capacity",value:e.payload_capacity},{icon:"link",label:"Towing Capacity",value:e.towing_capacity},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(d=>d.value!=null&&d.value!==""&&d.value!=="N/A"),u=e.features?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features</h3>
      <div class="flex flex-wrap gap-2">
        ${e.features.map(d=>`<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${l(d)}</span>`).join("")}
      </div>
    </div>`:"",p=`
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-orange-500 text-orange-500"></i>
        <span class="text-lg font-bold text-white">${P(e.rating)}</span>
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
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${l(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-orange-500 font-mono font-bold">${l(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-400 font-mono">${l(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-orange-500">${a}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${l(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${p}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${y}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${s[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${n}
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
        <p class="text-gray-400 text-sm leading-relaxed">${l(e.description||"")}</p>
      </div>

      <!-- Truck Information -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Truck Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          ${c.map(d=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${d.icon}" class="w-3.5 h-3.5"></i>${d.label}</div>
              <div class="text-gray-200 font-medium text-sm">${l(d.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>

      ${u}

      ${K(e)}

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
  `;const b=document.getElementById("hero-image"),_=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((d,g)=>{d.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(f=>f.classList.remove("active","border-orange-500")),t.querySelectorAll(".gallery-thumb").forEach(f=>f.classList.add("border-gray-800")),d.classList.add("active","border-orange-500"),d.classList.remove("border-gray-800"),b.src=d.dataset.img,_.textContent=s[g]||`View ${g+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await $()?window.location.href=`/checkout.html?id=${e.property_id}`:(E(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const d=window.location.href;try{if(navigator.share)await navigator.share({title:l(e.title),url:d});else{await navigator.clipboard.writeText(d);const g=document.getElementById("share-btn"),f=g.innerHTML;g.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{g.innerHTML=f,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),Q(e),window.lucide&&lucide.createIcons()}function Y(e){const a=e.listing_type==="property"?"Share Property":"Share";return`
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
        <i data-lucide="share-2" class="w-5 h-5"></i> ${a}
      </button>
    </div>
  `}function K(e){const t=e.listing_type==="property",a=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`;return`
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
        <a href="${a}" class="flex-1 bg-orange-500 hover:bg-orange-600 text-black font-bold py-2.5 rounded-xl text-xs text-center transition">Contact Seller</a>
        <a href="${a}&subject=Enquiry" class="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold py-2.5 rounded-xl text-xs text-center transition">Send Message</a>
      </div>
    </div>`}function J(e){const t=e.images&&e.images[0]||"/fallback.svg";return`<a href="/details.html?id=${encodeURIComponent(e.property_id)}" class="block bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500/30 transition group">
      <div class="aspect-square overflow-hidden bg-gray-800"><img src="${l(t)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-white font-bold truncate">${l(e.title)}</p><p class="text-xs text-orange-500 font-bold mt-1">${R(e)}</p></div>
    </a>`}function I(e,t){const a=document.getElementById(e);if(!a)return;const i=a.querySelector(".rel-grid");if(i){if(!t.length){a.classList.add("hidden");return}a.classList.remove("hidden"),i.innerHTML=t.slice(0,4).map(J).join("")}}function Q(e){const t=N.filter(s=>s.property_id!==e.property_id),a=t.filter(s=>s.category===e.category),i=t.filter(s=>s.brand===e.brand),n=[...t].sort((s,c)=>(c.rating||0)-(s.rating||0));I("similar-section",a.length?a:n.slice(0,4)),I("related-section",i.length?i:n.slice(0,4)),I("recommended-section",n)}function X(e){const t=document.getElementById("details-content"),a=e.listing_type==="property",i=R(e),n=z(e.country_code),s=e.listing_type==="product"?"Product ID":a?"Property ID":"Listing ID",u=q(e.images).map((o,r)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${r===0?"active border-orange-500":"border-gray-800"} shrink-0" data-img="${l(o)}">
      <img src="${l(o)}" alt="View ${r+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${y}'">
    </button>`).join("");let p="";a&&(p=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Location</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${[{icon:"globe",label:"Country",value:`${n} ${e.country}`},{icon:"map-pin",label:"State / Province",value:e.state},{icon:"building",label:"City",value:e.city},{icon:"navigation",label:"Town / Local Area",value:e.town}].filter(r=>r.value).map(r=>`
            <div class="flex items-center gap-2.5 text-sm">
              <div class="p-2 bg-gray-800 rounded-lg"><i data-lucide="${r.icon}" class="w-4 h-4 text-orange-500"></i></div>
              <div><div class="text-gray-500 text-xs">${r.label}</div><div class="text-gray-200 font-medium">${r.value}</div></div>
            </div>
          `).join("")}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-800" style="height:280px"></div>
      </div>`);let b="";a?b=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Property Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${[{icon:"bed-double",label:"Bedrooms",value:e.bedrooms},{icon:"bath",label:"Bathrooms",value:e.bathrooms},{icon:"building",label:"Building Size",value:e.building_size},{icon:"ruler",label:"Land Size",value:e.land_size},{icon:"car",label:"Parking Spaces",value:e.parking_spaces},{icon:"home",label:"Property Type",value:e.property_type},{icon:"sofa",label:"Furnished",value:e.furnished},{icon:"calendar",label:"Year Built",value:e.year_built},{icon:"tag",label:"Status",value:e.listing_status==="rent"?"For Rent":"For Sale"}].filter(r=>r.value!=null&&r.value!=="").map(r=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${r.icon}" class="w-3.5 h-3.5"></i>${r.label}</div>
              <div class="text-gray-200 font-medium text-sm">${l(r.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>`:e.category==="Motorhomes"?b=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Vehicle Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${[{icon:"factory",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank}].filter(r=>r.value!=null&&r.value!=="").map(r=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${r.icon}" class="w-3.5 h-3.5"></i>${r.label}</div>
              <div class="text-gray-200 font-medium text-sm">${l(r.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>`:e.listing_type==="product"&&(b=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Product Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${[{icon:"factory",label:"Brand",value:e.brand},{icon:"tag",label:"Subcategory",value:e.subcategory},{icon:"palette",label:"Colour",value:e.color},{icon:"ruler",label:"Size",value:e.size},{icon:"layers",label:"Material",value:e.material},{icon:"badge-check",label:"Condition",value:e.condition||"New"},{icon:"shield-check",label:"Warranty",value:e.warranty},{icon:"package-check",label:"Availability",value:e.availability_status}].filter(r=>r.value!=null&&r.value!=="").map(r=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${r.icon}" class="w-3.5 h-3.5"></i>${r.label}</div>
              <div class="text-gray-200 font-medium text-sm">${l(r.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>`);const _=e.features?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features & Amenities</h3>
      <div class="flex flex-wrap gap-2">
        ${e.features.map(o=>`<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${l(o)}</span>`).join("")}
      </div>
    </div>`:"",d=e.highlights?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Highlights</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${e.highlights.map(o=>`<div class="flex items-start gap-2 text-sm text-gray-300"><i data-lucide="sparkles" class="w-4 h-4 text-orange-500 mt-0.5"></i><span>${l(o)}</span></div>`).join("")}
      </div>
    </div>`:"",g=`
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-orange-500 text-orange-500"></i>
        <span class="text-lg font-bold text-white">${P(e.rating)}</span>
        <span class="text-gray-500 text-sm">(${e.rating_count||0} ratings)</span>
      </div>
    </div>`;t.innerHTML=`
    <div class="fade-in">
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-orange-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>${e.category}</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-300 truncate">${l(e.title)}</span>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${l(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">${s}: <span class="text-orange-500 font-mono font-bold">${l(e.property_id)}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-orange-500">${i}</div>
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

      ${Y(e)}

      <div id="listing-details" class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-3">Description</h3>
        <p class="text-gray-400 text-sm leading-relaxed">${l(e.description||"")}</p>
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
                ${[1,2,3,4,5].map(o=>`<button type="button" data-rating="${o}" class="star-btn p-1"><i data-lucide="star" class="w-5 h-5 text-gray-600 hover:text-orange-500 transition"></i></button>`).join("")}
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
  `;const f=document.getElementById("hero-image");t.querySelectorAll(".gallery-thumb").forEach(o=>{o.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(r=>r.classList.remove("active","border-orange-500")),t.querySelectorAll(".gallery-thumb").forEach(r=>r.classList.add("border-gray-800")),o.classList.add("active","border-orange-500"),o.classList.remove("border-gray-800"),f.src=o.dataset.img})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await $()?window.location.href=`/checkout.html?id=${e.property_id}`:(E(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const o=window.location.href;try{if(navigator.share)await navigator.share({title:l(e.title),url:o});else{await navigator.clipboard.writeText(o);const r=document.getElementById("share-btn"),k=r.innerHTML;r.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{r.innerHTML=k,window.lucide&&lucide.createIcons()},2e3)}}catch{}});const B=document.getElementById("view-details-btn");B&&B.addEventListener("click",()=>{const o=document.getElementById("listing-details");o&&o.scrollIntoView({behavior:"smooth",block:"start"})});const w=document.getElementById("add-cart-btn");w&&w.addEventListener("click",()=>{let o=JSON.parse(localStorage.getItem("kco_cart")||"[]");o.includes(e.property_id)||(o.push(e.property_id),localStorage.setItem("kco_cart",JSON.stringify(o))),w.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Added to Cart',window.lucide&&lucide.createIcons(),setTimeout(()=>{w.innerHTML='<i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart',window.lucide&&lucide.createIcons()},2e3)}),ee(e),te(e),H(e),ae(e),window.lucide&&lucide.createIcons(),e.property_id,e.title,parseFloat(e.price),e.currency;const h=document.getElementById("listing-map");if(h&&window.L){const o=parseFloat(e.latitude)||null,r=parseFloat(e.longitude)||null,k=[e.town,e.city,e.state,e.country].filter(Boolean).join(", ");if(o&&r){const m=L.map(h).setView([o,r],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(m),L.marker([o,r]).addTo(m).bindPopup(e.title)}else k?fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(k)).then(m=>m.json()).then(m=>{if(m&&m[0]){const T=parseFloat(m[0].lat),j=parseFloat(m[0].lon),C=L.map(h).setView([T,j],12);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(C),L.marker([T,j]).addTo(C).bindPopup(e.title)}else h.style.display="none"}).catch(()=>{h.style.display="none"}):h.style.display="none"}}let x=0,M=!1;function Z(){if(M)return;M=!0;const e=document.createElement("style");e.textContent="@keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}",document.head.appendChild(e)}function S(e,t){if(!e)return;Z(),e.innerHTML=`<i data-lucide="heart" class="w-5 h-5 ${t?"fill-red-500 text-red-500":""}"></i>`,e.classList.toggle("bg-red-500/10",t),e.classList.toggle("border",t),e.classList.toggle("border-red-500/20",t);const a=e.querySelector("span");a&&(a.textContent=t?"Saved to Wishlist":"Add to Wishlist"),window.lucide&&lucide.createIcons();const i=e.querySelector("i");i&&(i.style.animation="none",i.offsetWidth,i.style.animation="kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)",setTimeout(()=>{i&&(i.style.animation="")},550))}async function ee(e){const t=document.getElementById("wishlist-btn");if(!t)return;const a=await $();if(!a){t.addEventListener("click",()=>{E(window.location.pathname+window.location.search),window.location.href=`/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`});return}const{data:i,error:n}=await v.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(n){console.error("Wishlist check failed:",n.message);return}i&&S(t,!0),t.addEventListener("click",async()=>{const{data:s,error:c}=await v.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(c){console.error("Wishlist toggle failed:",c.message);return}if(s){const{error:u}=await v.from("wishlist").delete().eq("id",s.id);if(u){console.error("Wishlist delete failed:",u.message);return}S(t,!1)}else{const{error:u}=await v.from("wishlist").insert({user_id:a.id,listing_id:e.id});if(u){console.error("Wishlist insert failed:",u.message);return}S(t,!0)}})}async function te(e){const t=document.getElementById("review-form"),a=document.getElementById("review-login-msg"),i=await $();if(!i){t.classList.add("hidden"),a.classList.remove("hidden");return}document.querySelectorAll(".star-btn").forEach(n=>{n.addEventListener("click",()=>{x=parseInt(n.dataset.rating,10),document.querySelectorAll(".star-btn").forEach((s,c)=>{const u=s.querySelector("i");c<x?(u.classList.add("fill-orange-500","text-orange-500"),u.classList.remove("text-gray-600")):(u.classList.remove("fill-orange-500","text-orange-500"),u.classList.add("text-gray-600"))})})}),t.addEventListener("submit",async n=>{n.preventDefault();const s=document.getElementById("review-text").value.trim();if(!x){alert("Please select a rating.");return}if(!s){alert("Please write a review.");return}const{error:c}=await v.from("product_reviews").insert({listing_id:e.id,user_id:i.id,rating:x,review_text:s,is_approved:!1});if(c){alert("Error: "+c.message);return}document.getElementById("review-text").value="",x=0,document.querySelectorAll(".star-btn").forEach(u=>{const p=u.querySelector("i");p.classList.remove("fill-orange-500","text-orange-500"),p.classList.add("text-gray-600")}),alert("Review submitted! It will appear after admin approval."),H(e)})}async function H(e){const t=document.getElementById("reviews-list");if(!t||!e.id)return;const{data:a,error:i}=await v.from("product_reviews").select("*, profiles(full_name)").eq("listing_id",e.id).eq("is_approved",!0).order("created_at",{ascending:!1});if(i){t.innerHTML='<p class="text-gray-500 text-sm">Unable to load reviews.</p>';return}if(!a||a.length===0){t.innerHTML='<p class="text-gray-500 text-sm">No reviews yet. Be the first to review this product!</p>';return}t.innerHTML=a.map(n=>`
    <div class="border-b border-gray-800 pb-3 mb-3 last:border-0">
      <div class="flex items-center gap-2 mb-1">
        <div class="flex gap-0.5">${[1,2,3,4,5].map(s=>`<i data-lucide="star" class="w-3.5 h-3.5 ${s<=n.rating?"fill-orange-500 text-orange-500":"text-gray-600"}"></i>`).join("")}</div>
        <span class="text-xs text-gray-400 font-bold">${l(n.profiles?.full_name||"Anonymous")}</span>
        <span class="text-xs text-gray-600">${new Date(n.created_at).toLocaleDateString()}</span>
        ${n.is_verified_purchase?'<span class="text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">Verified Purchase</span>':""}
      </div>
      <p class="text-sm text-gray-300">${l(n.review_text||"")}</p>
      ${n.vendor_response?`<div class="mt-2 bg-gray-800/50 rounded-lg p-2 text-xs text-gray-400"><strong class="text-gray-300">Seller response:</strong> ${l(n.vendor_response)}</div>`:""}
    </div>`).join(""),window.lucide&&lucide.createIcons()}async function ae(e){const t=document.getElementById("recommendations-section"),a=document.getElementById("recommendations-grid");if(!t||!a||!e.id)return;const{data:i,error:n}=await v.from("product_recommendations").select("recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)").eq("listing_id",e.id).order("score",{ascending:!1}).limit(4);if(n){console.error("Recommendations load failed:",n.message),t.classList.add("hidden");return}let s=(i||[]).map(c=>c.showroom_listings).filter(Boolean);if(s.length<4){const{data:c}=await v.from("showroom_listings").select("property_id, title, price, currency, images, listing_type").eq("category",e.category).neq("id",e.id).eq("is_active",!0).order("rating",{ascending:!1}).limit(4-s.length);s=[...s,...c||[]]}if(s.length===0){t.classList.add("hidden");return}t.classList.remove("hidden"),a.innerHTML=s.map(c=>{const u=c.images&&c.images[0]||"/fallback.svg",p=typeof c.price=="number"?c.price:parseFloat(c.price||0),b=c.currency||"USD";return`<a href="/details.html?id=${c.property_id}" class="block bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500/30 transition group">
      <div class="aspect-square overflow-hidden bg-gray-800"><img src="${l(u)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-white font-bold truncate">${l(c.title)}</p><p class="text-xs text-orange-500 font-bold mt-1">${b} ${p.toLocaleString()}</p></div>
    </a>`}).join("")}function l(e){return String(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function re(){const e=O();if(!e){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}const t=V(e);if(t){document.title=`${t.title} | Weverse Online Shop`,G(t);return}let a=W.find(i=>i.property_id===e);if(!a){const[{generateListingById:i},{loadHiddenCatalogIds:n}]=await Promise.all([A(()=>import("./catalog-DZE9rOFe.js"),__vite__mapDeps([0,1,2])),A(()=>import("./catalog-hidden-store-DbF0xVeS.js"),__vite__mapDeps([1,2]))]);await n(),a=i(e)}if(a||(await F(),a=D(e)),!a){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}document.title=`${a.title} | Weverse Online Shop`,X(a)}re();
