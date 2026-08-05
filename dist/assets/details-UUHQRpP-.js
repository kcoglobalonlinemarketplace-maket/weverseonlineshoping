import{supabase as v}from"./supabase-client-D1iyov-x.js";import"./localization-CfMNUAGI.js";import{S as j,l as q,f as A,a as C,b as R}from"./showroom-data-BQC62Qm8.js";import{g as H,f as F}from"./truck-data-CXeZJZHb.js";import{g as $,f as _}from"./auth-C_Eb0opg.js";import"./live-stream-mode-OR9ZxBS7.js";import"./customer-ai-widget-CLobUQM1.js";import"./brand-_M2LrXmp.js";import"./preload-helper-CLcXU_4U.js";const y="/fallback.svg";function S(e){return typeof e=="number"&&!isNaN(e)?e.toFixed(1):"0.0"}function T(e){return Array.isArray(e)&&e.length>0?e:[y]}function P(){return new URLSearchParams(window.location.search).get("id")}function D(e){const a=document.getElementById("details-content"),o=F(e),n=T(e.images).map((l,m)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${m===0?"active border-orange-500":"border-gray-800"} shrink-0" data-img="${r(l)}">
      <img src="${r(l)}" alt="View ${m+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${y}'">
    </button>`).join(""),c=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cargo Area / Truck Bed","Engine","Wheels / Tires","Additional View"],s=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"package",label:"Payload Capacity",value:e.payload_capacity},{icon:"link",label:"Towing Capacity",value:e.towing_capacity},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(l=>l.value!=null&&l.value!==""&&l.value!=="N/A"),d=e.features?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features</h3>
      <div class="flex flex-wrap gap-2">
        ${e.features.map(l=>`<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${r(l)}</span>`).join("")}
      </div>
    </div>`:"",p=`
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-orange-500 text-orange-500"></i>
        <span class="text-lg font-bold text-white">${S(e.rating)}</span>
        <span class="text-gray-500 text-sm">(${e.rating_count||0} ratings)</span>
      </div>
    </div>`;a.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${r(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-orange-500 font-mono font-bold">${r(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-400 font-mono">${r(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-orange-500">${o}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${r(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${p}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${y}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${c[0]}</span>
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
        <p class="text-gray-400 text-sm leading-relaxed">${r(e.description||"")}</p>
      </div>

      <!-- Truck Information -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Truck Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          ${s.map(l=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${l.icon}" class="w-3.5 h-3.5"></i>${l.label}</div>
              <div class="text-gray-200 font-medium text-sm">${r(l.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>

      ${d}
    </div>
  `;const b=document.getElementById("hero-image"),k=document.getElementById("gallery-label");a.querySelectorAll(".gallery-thumb").forEach((l,m)=>{l.addEventListener("click",()=>{a.querySelectorAll(".gallery-thumb").forEach(f=>f.classList.remove("active","border-orange-500")),a.querySelectorAll(".gallery-thumb").forEach(f=>f.classList.add("border-gray-800")),l.classList.add("active","border-orange-500"),l.classList.remove("border-gray-800"),b.src=l.dataset.img,k.textContent=c[m]||`View ${m+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await $()?window.location.href=`/checkout.html?id=${e.property_id}`:(_(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const l=window.location.href;try{if(navigator.share)await navigator.share({title:r(e.title),url:l});else{await navigator.clipboard.writeText(l);const m=document.getElementById("share-btn"),f=m.innerHTML;m.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{m.innerHTML=f,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),window.lucide&&lucide.createIcons()}function z(e){const a=document.getElementById("details-content"),o=e.listing_type==="property",u=C(e),n=R(e.country_code),c=e.listing_type==="product"?"Product ID":o?"Property ID":"Listing ID",d=T(e.images).map((i,t)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${t===0?"active border-orange-500":"border-gray-800"} shrink-0" data-img="${r(i)}">
      <img src="${r(i)}" alt="View ${t+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${y}'">
    </button>`).join("");let p="";o&&(p=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Location</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${[{icon:"globe",label:"Country",value:`${n} ${e.country}`},{icon:"map-pin",label:"State / Province",value:e.state},{icon:"building",label:"City",value:e.city},{icon:"navigation",label:"Town / Local Area",value:e.town}].filter(t=>t.value).map(t=>`
            <div class="flex items-center gap-2.5 text-sm">
              <div class="p-2 bg-gray-800 rounded-lg"><i data-lucide="${t.icon}" class="w-4 h-4 text-orange-500"></i></div>
              <div><div class="text-gray-500 text-xs">${t.label}</div><div class="text-gray-200 font-medium">${t.value}</div></div>
            </div>
          `).join("")}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-800" style="height:280px"></div>
      </div>`);let b="";o?b=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Property Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${[{icon:"bed-double",label:"Bedrooms",value:e.bedrooms},{icon:"bath",label:"Bathrooms",value:e.bathrooms},{icon:"building",label:"Building Size",value:e.building_size},{icon:"ruler",label:"Land Size",value:e.land_size},{icon:"car",label:"Parking Spaces",value:e.parking_spaces},{icon:"home",label:"Property Type",value:e.property_type},{icon:"sofa",label:"Furnished",value:e.furnished},{icon:"calendar",label:"Year Built",value:e.year_built},{icon:"tag",label:"Status",value:e.listing_status==="rent"?"For Rent":"For Sale"}].filter(t=>t.value!=null&&t.value!=="").map(t=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${t.icon}" class="w-3.5 h-3.5"></i>${t.label}</div>
              <div class="text-gray-200 font-medium text-sm">${r(t.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>`:e.category==="Motorhomes"?b=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Vehicle Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${[{icon:"factory",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank}].filter(t=>t.value!=null&&t.value!=="").map(t=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${t.icon}" class="w-3.5 h-3.5"></i>${t.label}</div>
              <div class="text-gray-200 font-medium text-sm">${r(t.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>`:e.listing_type==="product"&&(b=`
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Product Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${[{icon:"factory",label:"Brand",value:e.brand},{icon:"tag",label:"Subcategory",value:e.subcategory},{icon:"palette",label:"Colour",value:e.color},{icon:"ruler",label:"Size",value:e.size},{icon:"layers",label:"Material",value:e.material},{icon:"badge-check",label:"Condition",value:e.condition||"New"},{icon:"shield-check",label:"Warranty",value:e.warranty},{icon:"package-check",label:"Availability",value:e.availability_status}].filter(t=>t.value!=null&&t.value!=="").map(t=>`
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${t.icon}" class="w-3.5 h-3.5"></i>${t.label}</div>
              <div class="text-gray-200 font-medium text-sm">${r(t.value)}</div>
            </div>
          `).join("")}
        </div>
      </div>`);const k=e.features?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features & Amenities</h3>
      <div class="flex flex-wrap gap-2">
        ${e.features.map(i=>`<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${r(i)}</span>`).join("")}
      </div>
    </div>`:"",l=e.highlights?.length?`
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Highlights</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${e.highlights.map(i=>`<div class="flex items-start gap-2 text-sm text-gray-300"><i data-lucide="sparkles" class="w-4 h-4 text-orange-500 mt-0.5"></i><span>${r(i)}</span></div>`).join("")}
      </div>
    </div>`:"",m=`
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-orange-500 text-orange-500"></i>
        <span class="text-lg font-bold text-white">${S(e.rating)}</span>
        <span class="text-gray-500 text-sm">(${e.rating_count||0} ratings)</span>
      </div>
    </div>`;a.innerHTML=`
    <div class="fade-in">
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-orange-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>${e.category}</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-300 truncate">${r(e.title)}</span>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${r(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">${c}: <span class="text-orange-500 font-mono font-bold">${r(e.property_id)}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-orange-500">${u}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${e.listing_status==="rent"?"For Rent":"For Sale"}</span>
        </div>
      </div>

      ${m}

      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${y}'">
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${d}
      </div>

      <div class="flex gap-3 mb-8">
        <button id="buy-now-btn" class="flex-1 bg-orange-500 hover:bg-orange-600 text-black font-bold py-3.5 rounded-xl uppercase text-sm tracking-wider transition flex items-center justify-center gap-2">
          <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
        </button>
        <button id="share-btn" class="px-5 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Share">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-3">Description</h3>
        <p class="text-gray-400 text-sm leading-relaxed">${r(e.description||"")}</p>
      </div>

      ${p}
      ${b}
      ${k}
      ${l}

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
  `;const f=document.getElementById("hero-image");a.querySelectorAll(".gallery-thumb").forEach(i=>{i.addEventListener("click",()=>{a.querySelectorAll(".gallery-thumb").forEach(t=>t.classList.remove("active","border-orange-500")),a.querySelectorAll(".gallery-thumb").forEach(t=>t.classList.add("border-gray-800")),i.classList.add("active","border-orange-500"),i.classList.remove("border-gray-800"),f.src=i.dataset.img})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await $()?window.location.href=`/checkout.html?id=${e.property_id}`:(_(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const i=window.location.href;try{if(navigator.share)await navigator.share({title:r(e.title),url:i});else{await navigator.clipboard.writeText(i);const t=document.getElementById("share-btn"),w=t.innerHTML;t.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{t.innerHTML=w,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),V(e),N(e),M(e),U(e),window.lucide&&lucide.createIcons(),e.property_id,e.title,parseFloat(e.price),e.currency;const h=document.getElementById("listing-map");if(h&&window.L){const i=parseFloat(e.latitude)||null,t=parseFloat(e.longitude)||null,w=[e.town,e.city,e.state,e.country].filter(Boolean).join(", ");if(i&&t){const g=L.map(h).setView([i,t],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(g),L.marker([i,t]).addTo(g).bindPopup(e.title)}else w?fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(w)).then(g=>g.json()).then(g=>{if(g&&g[0]){const I=parseFloat(g[0].lat),E=parseFloat(g[0].lon),B=L.map(h).setView([I,E],12);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(B),L.marker([I,E]).addTo(B).bindPopup(e.title)}else h.style.display="none"}).catch(()=>{h.style.display="none"}):h.style.display="none"}}let x=0;async function V(e){const a=document.getElementById("wishlist-btn");if(!a)return;const o=await $();if(!o){a.addEventListener("click",()=>{_(window.location.pathname+window.location.search),window.location.href=`/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`});return}const{data:u,error:n}=await v.from("wishlist").select("id").eq("user_id",o.id).eq("listing_id",e.id).maybeSingle();if(n){console.error("Wishlist check failed:",n.message);return}u&&(a.innerHTML='<i data-lucide="heart" class="w-5 h-5 fill-red-500 text-red-500"></i>',a.classList.add("bg-red-500/10","border","border-red-500/20"),window.lucide&&lucide.createIcons()),a.addEventListener("click",async()=>{const{data:c,error:s}=await v.from("wishlist").select("id").eq("user_id",o.id).eq("listing_id",e.id).maybeSingle();if(s){console.error("Wishlist toggle failed:",s.message);return}if(c){const{error:d}=await v.from("wishlist").delete().eq("id",c.id);if(d){console.error("Wishlist delete failed:",d.message);return}a.innerHTML='<i data-lucide="heart" class="w-5 h-5"></i>',a.classList.remove("bg-red-500/10","border","border-red-500/20")}else{const{error:d}=await v.from("wishlist").insert({user_id:o.id,listing_id:e.id});if(d){console.error("Wishlist insert failed:",d.message);return}a.innerHTML='<i data-lucide="heart" class="w-5 h-5 fill-red-500 text-red-500"></i>',a.classList.add("bg-red-500/10","border","border-red-500/20")}window.lucide&&lucide.createIcons()})}async function N(e){const a=document.getElementById("review-form"),o=document.getElementById("review-login-msg"),u=await $();if(!u){a.classList.add("hidden"),o.classList.remove("hidden");return}document.querySelectorAll(".star-btn").forEach(n=>{n.addEventListener("click",()=>{x=parseInt(n.dataset.rating,10),document.querySelectorAll(".star-btn").forEach((c,s)=>{const d=c.querySelector("i");s<x?(d.classList.add("fill-orange-500","text-orange-500"),d.classList.remove("text-gray-600")):(d.classList.remove("fill-orange-500","text-orange-500"),d.classList.add("text-gray-600"))})})}),a.addEventListener("submit",async n=>{n.preventDefault();const c=document.getElementById("review-text").value.trim();if(!x){alert("Please select a rating.");return}if(!c){alert("Please write a review.");return}const{error:s}=await v.from("product_reviews").insert({listing_id:e.id,user_id:u.id,rating:x,review_text:c,is_approved:!1});if(s){alert("Error: "+s.message);return}document.getElementById("review-text").value="",x=0,document.querySelectorAll(".star-btn").forEach(d=>{const p=d.querySelector("i");p.classList.remove("fill-orange-500","text-orange-500"),p.classList.add("text-gray-600")}),alert("Review submitted! It will appear after admin approval."),M(e)})}async function M(e){const a=document.getElementById("reviews-list");if(!a||!e.id)return;const{data:o,error:u}=await v.from("product_reviews").select("*, profiles(full_name)").eq("listing_id",e.id).eq("is_approved",!0).order("created_at",{ascending:!1});if(u){a.innerHTML='<p class="text-gray-500 text-sm">Unable to load reviews.</p>';return}if(!o||o.length===0){a.innerHTML='<p class="text-gray-500 text-sm">No reviews yet. Be the first to review this product!</p>';return}a.innerHTML=o.map(n=>`
    <div class="border-b border-gray-800 pb-3 mb-3 last:border-0">
      <div class="flex items-center gap-2 mb-1">
        <div class="flex gap-0.5">${[1,2,3,4,5].map(c=>`<i data-lucide="star" class="w-3.5 h-3.5 ${c<=n.rating?"fill-orange-500 text-orange-500":"text-gray-600"}"></i>`).join("")}</div>
        <span class="text-xs text-gray-400 font-bold">${r(n.profiles?.full_name||"Anonymous")}</span>
        <span class="text-xs text-gray-600">${new Date(n.created_at).toLocaleDateString()}</span>
        ${n.is_verified_purchase?'<span class="text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">Verified Purchase</span>':""}
      </div>
      <p class="text-sm text-gray-300">${r(n.review_text||"")}</p>
      ${n.vendor_response?`<div class="mt-2 bg-gray-800/50 rounded-lg p-2 text-xs text-gray-400"><strong class="text-gray-300">Seller response:</strong> ${r(n.vendor_response)}</div>`:""}
    </div>`).join(""),window.lucide&&lucide.createIcons()}async function U(e){const a=document.getElementById("recommendations-section"),o=document.getElementById("recommendations-grid");if(!a||!o||!e.id)return;const{data:u,error:n}=await v.from("product_recommendations").select("recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)").eq("listing_id",e.id).order("score",{ascending:!1}).limit(4);if(n){console.error("Recommendations load failed:",n.message),a.classList.add("hidden");return}let c=(u||[]).map(s=>s.showroom_listings).filter(Boolean);if(c.length<4){const{data:s}=await v.from("showroom_listings").select("property_id, title, price, currency, images, listing_type").eq("category",e.category).neq("id",e.id).eq("is_active",!0).order("rating",{ascending:!1}).limit(4-c.length);c=[...c,...s||[]]}if(c.length===0){a.classList.add("hidden");return}a.classList.remove("hidden"),o.innerHTML=c.map(s=>{const d=s.images&&s.images[0]||"/fallback.svg",p=typeof s.price=="number"?s.price:parseFloat(s.price||0),b=s.currency||"USD";return`<a href="/details.html?id=${s.property_id}" class="block bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500/30 transition group">
      <div class="aspect-square overflow-hidden bg-gray-800"><img src="${r(d)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-white font-bold truncate">${r(s.title)}</p><p class="text-xs text-orange-500 font-bold mt-1">${b} ${p.toLocaleString()}</p></div>
    </a>`}).join("")}function r(e){return String(e||"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}async function W(){const e=P();if(!e){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}const a=H(e);if(a){document.title=`${a.title} | KCO Global Online Marketplace`,D(a);return}let o=j.find(u=>u.property_id===e);if(o||(await q(),o=A(e)),!o){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}document.title=`${o.title} | KCO Global Online Marketplace`,z(o)}W();
