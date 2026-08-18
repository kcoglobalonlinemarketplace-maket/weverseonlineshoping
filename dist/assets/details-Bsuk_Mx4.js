const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/catalog-3IUO5W3L.js","assets/catalog-hidden-store-wpIcgcJZ.js","assets/live-promo-alerts-RK8Sva9W.js"])))=>i.map(i=>d[i]);
import{l as ye,f as fe,c as E,_ as ae,a as V,b as re,g as ve,S as xe}from"./live-promo-alerts-RK8Sva9W.js";import"./localization-DlHGBpdE.js";import{getCatalogCategory as we,getCatalogSample as ke}from"./catalog-3IUO5W3L.js";import{getTruckById as $e,formatTruckPrice as _e,TRUCK_LISTINGS as Le}from"./truck-data-DnyLExat.js";import{getMotorhomeById as Ie,MOTORHOME_LISTINGS as Se}from"./motorhome-data-SSjGu6g8.js";import{getCarById as Ee,CAR_LISTINGS as Te}from"./car-data-BE0Va4cl.js";import{getPhoneById as Be,PHONE_LISTINGS as Me}from"./phone-data-D3PvG27c.js";import{PET_LISTINGS as Ce}from"./pet-data-B7wfSbng.js";import{PRODUCT_LISTINGS as ue}from"./products-data-CGLFLAJM.js";import{PRODUCT_EXTRA_LISTINGS as pe}from"./products-extra-DecCj9NU.js";import{r as Ae}from"./showroom-cards-DT28myGc.js";import{getCurrentUser as A,setRedirectAfterAuth as q}from"./auth-C8sthrmE.js";import{supabase as $}from"./supabase-client-nvpjTmO6.js";import{b as je}from"./cart-DNy8CJA3.js";import"./localization-bootstrap-A8ahtMG1.js";import"./catalog-hidden-store-wpIcgcJZ.js";function oe(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return t>>>0}function He(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}const ie=["James","Emma","Liam","Olivia","Noah","Ava","Ethan","Sophia","Lucas","Mia","Daniel","Isabella","Matthew","Charlotte","Samuel","Amelia","Gabriel","Harper","Nathan","Evelyn","Caleb","Abigail","Adrian","Ella","Owen","Grace","Leo","Chloe","Julian","Nora","Mason","Aria","Elijah","Layla","Isaac","Zoe","Hunter","Scarlett","Christian","Lily","Aaron","Hannah","Dylan","Savannah","Andrew","Ruby","David","Elena"],le=["Anderson","Baker","Carter","Diaz","Evans","Foster","Garcia","Harris","Ingram","Johnson","Kelly","Lewis","Miller","Nelson","Ortiz","Parker","Quinn","Reed","Sanders","Turner","Underwood","Vaughn","Walker","Young","Zimmerman","Brooks","Coleman","Dunn","Fisher","Grant","Hayes","Jordan","Knight","Lopez","Morgan"],ne=[{city:"Austin",country:"United States"},{city:"London",country:"United Kingdom"},{city:"Toronto",country:"Canada"},{city:"Sydney",country:"Australia"},{city:"Dublin",country:"Ireland"},{city:"Berlin",country:"Germany"},{city:"Amsterdam",country:"Netherlands"},{city:"Auckland",country:"New Zealand"},{city:"Cape Town",country:"South Africa"},{city:"Lagos",country:"Nigeria"},{city:"Nairobi",country:"Kenya"},{city:"Accra",country:"Ghana"},{city:"Manchester",country:"United Kingdom"},{city:"Seattle",country:"United States"},{city:"Melbourne",country:"Australia"},{city:"Singapore",country:"Singapore"}],se=["Exactly as described","Very happy with my purchase","Great quality and fast shipping","Would definitely recommend","Better than expected","Solid purchase","Impressed with the quality","Worth every penny","Excellent experience from start to finish","Delivered quickly and carefully"],Re=["I was a little nervous ordering online, but the whole process was smooth and the item arrived in perfect condition. Exactly what I expected from the photos and description.","Quality is excellent for the price. Packaging was secure and it arrived a few days earlier than the estimated delivery window. Very happy with this buy.","The team kept me updated on shipping the entire way, which I really appreciated. The item matches the listing perfectly and I have no complaints at all.","Great communication throughout. Shipping was well within the promised window and everything was exactly as described. I would not hesitate to order again.","This is my second order from this shop and they never disappoint. Consistent quality, careful packaging, and honest product listings.","Took a little while to arrive but it was worth the wait. The quality is genuinely good and it looks just like the pictures. Very pleased overall.","Customer service was responsive and helpful when I had a quick question before ordering. The product itself is well made and does exactly what it should.","Everything was straightforward from payment to delivery. The item is sturdy, well finished, and matches the description. A really smooth experience.","I compared this with similar listings elsewhere and the price here was fair for the quality. Delivery was tracked and arrived on time. Recommended.","Arrived well packed and exactly as pictured. The listing was accurate on every detail, which made me trust the process. Five stars from me.","Solid build quality and exactly the size I expected. The estimated delivery was accurate and the item was in pristine condition on arrival.","Very professional transaction. Order confirmation, payment, and shipping updates all came through clearly. The product itself exceeded my expectations."],ce={vehicle:["The vehicle runs beautifully and the mileage matched the listing exactly. I had a thorough inspection done locally and everything checked out.","Mechanics checked it over and confirmed the condition matches what was described. Delivery was arranged smoothly and the paperwork was complete."],property:["The property is exactly as presented in the listing and the neighbourhood is quiet and well connected. The process was handled very professionally."],phone:["The phone arrived with battery health just as advertised and works flawlessly. All settings and the IMEI checked out. Genuinely impressed."],pet:["Our new family member is healthy, playful, and very well socialised. All vaccination records were provided and the seller was clearly caring."],product:["I have used it daily since it arrived and it performs exactly as described. Great attention to detail from the seller."]};function Ne(e,t={}){const a=String(e.property_id||e.id||"");if(!a)return[];const r=He(oe(a)),l=Math.min(5,Math.max(1,Number(e.rating)||0)),s=Number(e.rating_count||e.review_count||0),i=Math.max(s>0?s:0,0),p=oe(a)%2===0?5:4;let c=Math.max(.25,Math.min(.95,(l||4.5)/5)),g=1-c,o=.08,d=.05,b=.03;const v=1/(c+g+o+d+b);c*=v,g*=v,o*=v,d*=v,b*=v;const w=[c,g,o,d,b],x=[],S=new Set,H=new Set,M=e.listing_type==="vehicle"?"vehicle":e.listing_type==="property"?"property":e.listing_type==="pet"?"pet":String(e.category||"").toLowerCase().includes("phone")?"phone":"product";for(let y=0;y<p;y++){let _=r(),R=5,N=0;for(let k=5;k>=1;k--)if(N+=w[5-k],_<=N){R=k;break}let F="";for(let k=0;k<20&&(F=`${ie[Math.floor(r()*ie.length)]} ${le[Math.floor(r()*le.length)]}`,!!H.has(F));k++);H.add(F);let Z="";const Q=[...Re],me=ce[M]||ce.product;Q.push(...me);for(let k=0;k<30;k++){const W=Q[Math.floor(r()*Q.length)];if(!S.has(W)){Z=W,S.add(W);break}Z=W}const be=ne[Math.floor(r()*ne.length)],he=Math.floor(r()*400)+3,ge=new Date(Date.now()-he*864e5).toISOString();x.push({name:F,location:be.country,date:ge,rating:R,title:se[Math.floor(r()*se.length)],text:Z,verified:!1,seeded:!0})}const f={5:0,4:0,3:0,2:0,1:0};if(i>0){for(let _=5;_>=1;_--)f[_]=Math.round(i*w[5-_]);const y=f[5]+f[4]+f[3]+f[2]+f[1];y!==i&&(f[1]+=i-y)}else for(const y of x)f[y.rating]++;let h=0,m=0;for(let y=5;y>=1;y--)h+=y*f[y],m+=f[y];const C=m?h/m:0;return{reviews:x,breakdown:f,total:i,computedRating:C}}const I="/fallback.svg";function z(e){return Array.isArray(e)&&e.length>0?e:[I]}function Pe(e,t="w-4 h-4"){const a=Math.round(Number(e)||0);return[1,2,3,4,5].map(r=>`<i data-lucide="star" class="${t} ${r<=a?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}function j(e,t,a="blue"){const r={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"};return`
    <div class="flex items-center gap-2.5 mb-4">
      <div class="shrink-0 w-10 h-10 rounded-xl ${r[a]||r.blue} flex items-center justify-center"><i data-lucide="${e}" class="w-5 h-5"></i></div>
      <h3 class="text-lg font-black text-gray-900 tracking-tight">${t}</h3>
    </div>`}function qe(e){return`
    <div class="bg-gray-50 border border-gray-100 rounded-xl p-3.5">
      <div class="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5"><i data-lucide="${e.icon}" class="w-3.5 h-3.5"></i>${e.label}</div>
      <div class="text-gray-900 font-bold text-[15px] leading-snug">${u(e.value)}</div>
    </div>`}function T(e,t,a,r="blue"){return!a||!a.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${j(t,e,r)}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        ${a.map(qe).join("")}
      </div>
    </div>`}function U(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${j("list-checks","Features & Amenities","emerald")}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
            <span class="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
            <span class="text-[15px] text-gray-800 font-medium">${u(t)}</span>
          </div>`).join("")}
      </div>
    </div>`}function De(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${j("star","Highlights","amber")}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-start gap-2.5 bg-amber-50/60 border border-amber-100 rounded-xl px-3.5 py-2.5">
            <i data-lucide="badge-check" class="w-4 h-4 text-amber-500 mt-0.5 shrink-0"></i>
            <span class="text-[15px] text-gray-800 font-medium">${u(t)}</span>
          </div>`).join("")}
      </div>
    </div>`}function G(e){return`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${j("file-text","Description","blue")}
      <p class="text-[15px] sm:text-base text-gray-700 leading-relaxed">${u(e||"")}</p>
    </div>`}function Fe(e){const t=e.name||e.profiles?.full_name||"Anonymous",a=u(t.trim().charAt(0).toUpperCase()||"A"),r=e.location?`<span class="text-xs text-gray-400">&middot; ${u(e.location)}</span>`:"",l=e.title?`<p class="text-sm font-bold text-gray-900 mt-1">${u(e.title)}</p>`:"",s=e.review_photo?`<div class="mt-2.5"><img src="${u(e.review_photo)}" alt="Customer photo" class="w-28 h-28 object-cover rounded-xl border border-gray-100" loading="lazy" onerror="this.style.display='none'"></div>`:"";return`
    <div class="flex gap-3 py-4 border-b border-gray-100 last:border-0">
      <div class="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-black uppercase shadow-sm">${a}</div>
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-sm font-bold text-gray-900">${u(t)}</span>${r}
          ${e.verified?'<span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full"><i data-lucide="badge-check" class="w-3 h-3"></i> Verified Purchase</span>':""}
          <span class="text-xs text-gray-400">${new Date(e.date||e.created_at).toLocaleDateString()}</span>
        </div>
        <div class="flex gap-0.5 mt-1">${[1,2,3,4,5].map(i=>`<i data-lucide="star" class="w-3.5 h-3.5 ${i<=(e.rating||0)?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}</div>
        ${l}
        <p class="text-[15px] text-gray-700 leading-relaxed mt-1.5">${u(e.text||e.comment||"")}</p>
        ${s}
      </div>
    </div>`}function Y(e){const t=encodeURIComponent(window.location.pathname+window.location.search);return`
    <div id="reviews-section" class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${j("message-square-star","Customer Reviews","amber")}
      <div id="reviews-summary" class="mb-1"><div class="text-gray-500 text-sm py-3">Loading ratings…</div></div>
      <div id="reviews-breakdown" class="mb-3"></div>
      <div id="reviews-list"><div class="text-gray-500 text-sm py-4">Loading reviews…</div></div>
      <div id="review-form-wrapper" class="mt-5 pt-5 border-t border-gray-100">
        <h4 class="text-[15px] font-black text-gray-900 mb-3 flex items-center gap-2"><i data-lucide="pen-line" class="w-4 h-4 text-blue-500"></i> Write a Review</h4>
        <div id="review-login-msg" class="text-xs text-gray-500 hidden">Please <a href="/auth.html?redirect=${t}" class="text-blue-500 hover:underline">sign in</a> to write a review.</div>
        <form id="review-form" class="space-y-3">
          <div class="flex items-center gap-2">
            <label class="text-xs text-gray-600 font-bold uppercase">Rating</label>
            <div id="star-rating" class="flex gap-1">
              ${[1,2,3,4,5].map(a=>`<button type="button" data-rating="${a}" class="star-btn p-1"><i data-lucide="star" class="w-5 h-5 text-gray-300 hover:text-amber-400 transition"></i></button>`).join("")}
            </div>
          </div>
          <textarea id="review-text" rows="3" placeholder="Share your experience with this product..." class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-[15px] text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"></textarea>
          <div class="flex items-center gap-3">
            <label for="review-photo-input" class="inline-flex items-center gap-2 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 cursor-pointer hover:border-blue-300 hover:bg-blue-50/40 transition">
              <i data-lucide="camera" class="w-4 h-4 text-blue-500"></i> Add a photo
            </label>
            <input id="review-photo-input" type="file" accept="image/*" class="hidden">
            <div id="review-photo-preview" class="flex items-center gap-2"></div>
          </div>
          <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition">Submit Review</button>
          <div id="review-submit-msg" class="text-xs text-emerald-600 font-bold hidden"><i data-lucide="check-circle" class="w-3.5 h-3.5 inline"></i> Thank you! Your review is now live.</div>
        </form>
      </div>
    </div>`}function We(e,t,a){const r=Math.max(1,a);return`
    <div class="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-1 items-center bg-gray-50/70 border border-gray-100 rounded-2xl p-4">
      ${[5,4,3,2,1].map(l=>{const s=t[l]||0,i=Math.round(s/r*100);return`
        <div class="flex items-center gap-1.5 text-xs text-gray-500 font-medium"><i data-lucide="star" class="w-3 h-3 ${l<=5?"fill-amber-400 text-amber-400":""}"></i>${l}</div>
        <div class="flex items-center gap-2">
          <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden"><div class="h-full bg-amber-400 rounded-full" style="width:${i}%"></div></div>
          <span class="text-[11px] text-gray-500 w-8 text-right tabular-nums">${s.toLocaleString()}</span>
        </div>`}).join("")}
    </div>`}function Oe(){return new URLSearchParams(window.location.search).get("id")}const Ve=[...ue,...pe];function ze(e){return Ve.find(t=>t.property_id===e)||null}function Ue(e){const t=document.getElementById("details-content"),a=_e(e),l=z(e.images).map((o,d)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${d===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(o)}">
      <img src="${u(o)}" alt="View ${d+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${I}'">
    </button>`).join(""),s=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cargo Area / Truck Bed","Engine","Wheels / Tires","Additional View"],i=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"package",label:"Payload Capacity",value:e.payload_capacity},{icon:"link",label:"Towing Capacity",value:e.towing_capacity},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(o=>o.value!=null&&o.value!==""&&o.value!=="N/A"),p=U(e.features),n=Y();t.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${u(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${u(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${u(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${u(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${n}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${I}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${s[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${l}
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
      ${G(e.description)}

      <!-- Truck Information -->
      ${T("Truck Information","truck",i,"amber")}

      ${p}

      ${te(e)}

      ${K()}
    </div>
  `;const c=document.getElementById("hero-image"),g=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((o,d)=>{o.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(b=>b.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(b=>b.classList.add("border-gray-200")),o.classList.add("active","border-blue-500"),o.classList.remove("border-gray-200"),c.src=o.dataset.img,g.textContent=s[d]||`View ${d+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await A()?window.location.href=`/checkout.html?id=${e.property_id}`:(q(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const o=window.location.href;try{if(navigator.share)await navigator.share({title:u(e.title),url:o});else{await navigator.clipboard.writeText(o);const d=document.getElementById("share-btn"),b=d.innerHTML;d.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{d.innerHTML=b,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),B(e),J(e),D(e),window.lucide&&lucide.createIcons()}function Ge(e){const t=document.getElementById("details-content"),a=V(e),l=z(e.images).map((o,d)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${d===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(o)}">
      <img src="${u(o)}" alt="View ${d+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${I}'">
    </button>`).join(""),s=["Exterior Front","Exterior Side","Exterior Rear","Living Area","Kitchen","Bedroom","Bathroom","Additional View"],i=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(o=>o.value!=null&&o.value!==""&&o.value!=="N/A"),p=U(e.features),n=Y();t.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${u(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${u(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${u(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${u(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${n}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${I}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${s[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${l}
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
      ${G(e.description)}

      <!-- Motorhome Information -->
      ${T("Motorhome Information","bus",i,"violet")}

      ${p}

      ${te(e)}

      ${K()}
    </div>
  `;const c=document.getElementById("hero-image"),g=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((o,d)=>{o.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(b=>b.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(b=>b.classList.add("border-gray-200")),o.classList.add("active","border-blue-500"),o.classList.remove("border-gray-200"),c.src=o.dataset.img,g.textContent=s[d]||`View ${d+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await A()?window.location.href=`/checkout.html?id=${e.property_id}`:(q(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const o=window.location.href;try{if(navigator.share)await navigator.share({title:u(e.title),url:o});else{await navigator.clipboard.writeText(o);const d=document.getElementById("share-btn"),b=d.innerHTML;d.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{d.innerHTML=b,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),B(e),J(e),D(e),window.lucide&&lucide.createIcons()}function Ye(e){const t=document.getElementById("details-content"),a=V(e),l=z(e.images).map((o,d)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${d===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(o)}">
      <img src="${u(o)}" alt="View ${d+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${I}'">
    </button>`).join(""),s=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cabin / Interior","Wheels / Tires","Additional View"],i=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(o=>o.value!=null&&o.value!==""&&o.value!=="N/A"),p=U(e.features),n=Y();t.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${u(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${u(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${u(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${u(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${n}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${I}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${s[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${l}
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
      ${G(e.description)}

      <!-- Car Information -->
      ${T("Car Information","car",i,"amber")}

      ${p}

      ${te(e)}

      ${K()}
    </div>
  `;const c=document.getElementById("hero-image"),g=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((o,d)=>{o.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(b=>b.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(b=>b.classList.add("border-gray-200")),o.classList.add("active","border-blue-500"),o.classList.remove("border-gray-200"),c.src=o.dataset.img,g.textContent=s[d]||`View ${d+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await A()?window.location.href=`/checkout.html?id=${e.property_id}`:(q(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const o=window.location.href;try{if(navigator.share)await navigator.share({title:u(e.title),url:o});else{await navigator.clipboard.writeText(o);const d=document.getElementById("share-btn"),b=d.innerHTML;d.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{d.innerHTML=b,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),B(e),J(e),D(e),window.lucide&&lucide.createIcons()}function Ke(e){const a=e.listing_type==="property"?"Share Property":"Share";return`
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
  `}function te(e){const t=e.listing_type==="property",a=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`;return`
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
    </div>`}function K(){return`
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
      </div>`}function Je(e){const t=new Map,a=l=>(l||[]).forEach(s=>{s&&s.property_id&&t.set(s.property_id,s)});a(xe),a(Le),a(Se),a(Te),a(Me),a(Ce),a(ue),a(pe),a(ve());const r=we(e.category||e.subcategory);return r&&a(ke(r.slug,50)),[...t.values()].filter(l=>l.property_id!==e.property_id)}function Ze(e,t){let a=0;const r=c=>String(c||"").trim().toLowerCase();e.listing_type&&e.listing_type===t.listing_type&&(a+=40),e.category&&r(e.category)===r(t.category)&&(a+=30),e.subcategory&&r(e.subcategory)===r(t.subcategory)&&(a+=20),e.brand&&r(e.brand)===r(t.brand)&&(a+=15),e.breed&&r(e.breed)===r(t.breed)&&(a+=15),e.model&&r(e.model)===r(t.model)&&(a+=10),e.property_type&&r(e.property_type)===r(t.property_type)&&(a+=15);const l=parseFloat(e.price)||0,s=parseFloat(t.price)||0;if(l>0&&s>0){const c=Math.min(l,s)/Math.max(l,s);c>=.8?a+=10:c>=.6?a+=6:c>=.4&&(a+=3)}e.country_code&&e.country_code===t.country_code&&(a+=5);const i=new Set(r(e.title).split(/[^a-z0-9]+/).filter(c=>c.length>2)),p=new Set(r(t.title).split(/[^a-z0-9]+/).filter(c=>c.length>2));let n=0;return i.forEach(c=>{p.has(c)&&n++}),a+=Math.min(n*2,10),a}function X(e,t){const a=document.getElementById(e);if(!a)return;const r=a.querySelector(".rel-grid");if(!r)return;if(!t.length){a.classList.add("hidden");return}a.classList.remove("hidden"),r.innerHTML="";const l=document.createDocumentFragment();t.slice(0,10).forEach(s=>{const i=document.createElement("div");i.className="shrink-0 w-[260px] sm:w-[320px] snap-start";const p=Ae(s);p.style.width="100%",i.appendChild(p),l.appendChild(i)}),r.appendChild(l),window.lucide&&lucide.createIcons()}function B(e){const t=Je(e),a=t.map(n=>({item:n,score:Ze(e,n)})).sort((n,c)=>c.score-n.score||(c.item.rating||0)-(n.item.rating||0)),r=a.filter(n=>n.score>=35).map(n=>n.item),l=new Set(r.map(n=>n.property_id)),s=a.filter(n=>n.score>=15&&n.score<35&&!l.has(n.item.property_id)).map(n=>n.item),i=[...t].filter(n=>!l.has(n.property_id)).sort((n,c)=>(c.rating||0)-(n.rating||0)).slice(0,10),p=a.filter(n=>!l.has(n.item.property_id)).map(n=>n.item);X("similar-section",r.length?r:p.slice(0,10)),X("related-section",s.length?s:p.slice(0,10)),X("recommended-section",i.length?i:p.slice(0,10))}function O(e){const t=document.getElementById("details-content"),a=e.listing_type==="property",r=V(e),l=re(e.country_code),s=e.listing_type==="product"?"Product ID":a?"Property ID":"Listing ID";let i="",p="",n=parseFloat(e.real_price);if((!Number.isFinite(n)||n<=0)&&(n=parseFloat(e.compare_at_price??e.original_price)),Number.isFinite(n)&&n>0&&n>parseFloat(e.price)){const h=Math.round((1-parseFloat(e.price)/n)*100);i=`<span class="text-lg text-gray-400 price-strike line-through font-medium">${V({...e,price:n})}</span>`,p=`<span class="inline-flex items-center gap-1 text-xs font-black text-white bg-red-500 px-2 py-1 rounded-full">-${h}% OFF</span>`}const c=e.availability_status||(e.listing_type==="product"?"In Stock":"Available"),o=z(e.images).map((h,m)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${m===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(h)}">
      <img src="${u(h)}" alt="View ${m+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${I}'">
    </button>`).join("");let d="";if(a){const h=[{icon:"globe",label:"Country",value:`${l} ${e.country}`},{icon:"map-pin",label:"State / Province",value:e.state},{icon:"building",label:"City",value:e.city},{icon:"navigation",label:"Town / Local Area",value:e.town}].filter(m=>m.value);d=`
      <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
        ${j("map-pin","Location","rose")}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${h.map(m=>`
            <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
              <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="${m.icon}" class="w-4 h-4 text-blue-500"></i></div>
              <div><div class="text-gray-500 text-xs">${m.label}</div><div class="text-gray-900 font-bold text-[15px]">${m.value}</div></div>
            </div>
          `).join("")}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-200" style="height:280px"></div>
      </div>`}let b="";if(a){const h=[{icon:"bed-double",label:"Bedrooms",value:e.bedrooms},{icon:"bath",label:"Bathrooms",value:e.bathrooms},{icon:"building",label:"Building Size",value:e.building_size},{icon:"ruler",label:"Land Size",value:e.land_size},{icon:"car",label:"Parking Spaces",value:e.parking_spaces},{icon:"home",label:"Property Type",value:e.property_type},{icon:"sofa",label:"Furnished",value:e.furnished},{icon:"calendar",label:"Year Built",value:e.year_built},{icon:"tag",label:"Status",value:e.listing_status==="rent"?"For Rent":"For Sale"}].filter(m=>m.value!=null&&m.value!=="");b=T("Property Information","home",h)}else if(e.category==="Motorhomes"){const h=[{icon:"factory",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank}].filter(m=>m.value!=null&&m.value!=="");b=T("Vehicle Information","bus",h,"violet")}else if(e.listing_type==="product"){const h=[{icon:"factory",label:"Brand",value:e.brand},{icon:"tag",label:"Subcategory",value:e.subcategory},{icon:"palette",label:"Colour",value:e.color},{icon:"ruler",label:"Size",value:e.size},{icon:"layers",label:"Material",value:e.material},{icon:"badge-check",label:"Condition",value:e.condition||"New"},{icon:"shield-check",label:"Warranty",value:e.warranty},{icon:"package-check",label:"Availability",value:e.availability_status}].filter(m=>m.value!=null&&m.value!=="");b=T("Product Information","package",h)}else if(e.listing_type==="pet"){const h=[{icon:"paw-print",label:"Breed",value:e.breed},{icon:"calendar",label:"Age",value:e.age},{icon:"users",label:"Gender",value:e.gender},{icon:"palette",label:"Colour",value:e.color},{icon:"scale",label:"Weight",value:e.size},{icon:"globe",label:"Origin",value:`${re(e.country_code)} ${e.country}`},{icon:"badge-check",label:"Health",value:e.condition}].filter(m=>m.value!=null&&m.value!=="");b=T("Pet Information","paw-print",h,"amber")}const v=U(e.features),w=De(e.highlights),x=Y();t.innerHTML=`
    <div class="fade-in">
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>${e.category}</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${u(e.title)}</span>
      </div>

      <div class="mb-5">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">${u(e.title)}</h1>
        <div class="flex flex-wrap items-center gap-2 mt-2.5">
          <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified</span>
          <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full"><i data-lucide="box" class="w-3.5 h-3.5"></i> ${s}: <span class="font-mono">${u(e.property_id)}</span></span>
          <span class="inline-flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">${e.listing_status==="rent"?"For Rent":"For Sale"}</span>
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-4 bg-gradient-to-br from-blue-50 via-white to-white border border-blue-100 rounded-2xl p-5 mb-6">
        <div>
          <div class="flex items-baseline flex-wrap gap-2">
            ${i}
            <span class="text-4xl font-black text-blue-600">${r}</span>
          </div>
          <div class="flex items-center gap-2 mt-1.5">
            ${p}
            <span class="text-sm text-emerald-600 font-bold flex items-center gap-1"><i data-lucide="package-check" class="w-4 h-4"></i> ${c}</span>
          </div>
        </div>
        <div class="flex flex-col gap-1.5 text-sm">
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="truck" class="w-4 h-4 text-blue-500"></i> Free worldwide shipping</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="rotate-ccw" class="w-4 h-4 text-blue-500"></i> Easy returns within 14 days</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="lock" class="w-4 h-4 text-blue-500"></i> Secure payment protection</span>
        </div>
      </div>

      ${x}

      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${I}'">
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${o}
      </div>

      ${Ke(e)}

      <div id="listing-details">
        ${G(e.description)}
      </div>

      ${d}
      ${b}
      ${v}
      ${w}

      <div id="recommendations-section" class="hidden">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">You May Also Like</h3>
        <div id="recommendations-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>

      ${K()}
    </div>
  `;const S=document.getElementById("hero-image");t.querySelectorAll(".gallery-thumb").forEach(h=>{h.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(m=>m.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(m=>m.classList.add("border-gray-200")),h.classList.add("active","border-blue-500"),h.classList.remove("border-gray-200"),S.src=h.dataset.img})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await A()?window.location.href=`/checkout.html?id=${e.property_id}`:(q(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const h=window.location.href;try{if(navigator.share)await navigator.share({title:u(e.title),url:h});else{await navigator.clipboard.writeText(h);const m=document.getElementById("share-btn"),C=m.innerHTML;m.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{m.innerHTML=C,window.lucide&&lucide.createIcons()},2e3)}}catch{}});const H=document.getElementById("view-details-btn");H&&H.addEventListener("click",()=>{const h=document.getElementById("listing-details");h&&h.scrollIntoView({behavior:"smooth",block:"start"})});const M=document.getElementById("add-cart-btn");M&&M.addEventListener("click",()=>{je(e.property_id,1),M.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Added to Cart',window.lucide&&lucide.createIcons(),setTimeout(()=>{M.innerHTML='<i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart',window.lucide&&lucide.createIcons()},2e3)}),Xe(e),J(e),D(e),et(e),window.lucide&&lucide.createIcons(),e.property_id,e.title,parseFloat(e.price),e.currency;const f=document.getElementById("listing-map");if(f&&window.L){const h=parseFloat(e.latitude)||null,m=parseFloat(e.longitude)||null,C=[e.town,e.city,e.state,e.country].filter(Boolean).join(", ");if(h&&m){const y=L.map(f).setView([h,m],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(y),L.marker([h,m]).addTo(y).bindPopup(e.title)}else C?fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(C)).then(y=>y.json()).then(y=>{if(y&&y[0]){const _=parseFloat(y[0].lat),R=parseFloat(y[0].lon),N=L.map(f).setView([_,R],12);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(N),L.marker([_,R]).addTo(N).bindPopup(e.title)}else f.style.display="none"}).catch(()=>{f.style.display="none"}):f.style.display="none"}}let P=0,de=!1;function Qe(){if(de)return;de=!0;const e=document.createElement("style");e.textContent="@keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}",document.head.appendChild(e)}function ee(e,t){if(!e)return;Qe(),e.innerHTML=`<i data-lucide="heart" class="w-5 h-5 ${t?"fill-red-500 text-red-500":""}"></i>`,e.classList.toggle("bg-red-50",t),e.classList.toggle("border",t),e.classList.toggle("border-red-200",t);const a=e.querySelector("span");a&&(a.textContent=t?"Saved to Wishlist":"Add to Wishlist"),window.lucide&&lucide.createIcons();const r=e.querySelector("i");r&&(r.style.animation="none",r.offsetWidth,r.style.animation="kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)",setTimeout(()=>{r&&(r.style.animation="")},550))}async function Xe(e){const t=document.getElementById("wishlist-btn");if(!t)return;const a=await A();if(!a){t.addEventListener("click",()=>{q(window.location.pathname+window.location.search),window.location.href=`/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`});return}const{data:r,error:l}=await $.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(l){console.error("Wishlist check failed:",l.message);return}r&&ee(t,!0),t.addEventListener("click",async()=>{const{data:s,error:i}=await $.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(i){console.error("Wishlist toggle failed:",i.message);return}if(s){const{error:p}=await $.from("wishlist").delete().eq("id",s.id);if(p){console.error("Wishlist delete failed:",p.message);return}ee(t,!1)}else{const{error:p}=await $.from("wishlist").insert({user_id:a.id,listing_id:e.id});if(p){console.error("Wishlist insert failed:",p.message);return}ee(t,!0)}})}async function J(e){const t=document.getElementById("review-form"),a=document.getElementById("review-login-msg");if(!t)return;const r=await A();if(!r){t.classList.add("hidden"),a&&a.classList.remove("hidden");return}document.querySelectorAll(".star-btn").forEach(n=>{n.addEventListener("click",()=>{P=parseInt(n.dataset.rating,10),document.querySelectorAll(".star-btn").forEach((c,g)=>{const o=c.querySelector("i");g<P?(o.classList.add("fill-amber-400","text-amber-400"),o.classList.remove("text-gray-300")):(o.classList.remove("fill-amber-400","text-amber-400"),o.classList.add("text-gray-300"))})})});const l=document.getElementById("review-photo-input"),s=document.getElementById("review-photo-preview");let i=null;l&&l.addEventListener("change",()=>{if(i=l.files&&l.files[0],!!s&&(s.innerHTML="",i)){const n=URL.createObjectURL(i);s.innerHTML=`<span class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg px-2.5 py-1"><img src="${n}" alt="" class="w-5 h-5 rounded object-cover">${u(i.name)}</span>`}});const p=document.getElementById("review-submit-msg");t.addEventListener("submit",async n=>{n.preventDefault();const c=document.getElementById("review-text").value.trim();if(!P){alert("Please select a rating.");return}if(!c){alert("Please write a review.");return}const g=t.querySelector('button[type="submit"]'),o=g.innerHTML;g.disabled=!0,g.innerHTML='<span class="inline-block animate-spin">⏳</span> Submitting…';let d=null;if(i){const v=(i.name.split(".").pop()||"jpg").toLowerCase().replace(/[^a-z0-9]/g,"")||"jpg",w=`${r.id}/${Date.now()}_${String(Math.random()).slice(2)}.${v}`,{error:x}=await $.storage.from("review-photos").upload(w,i,{contentType:i.type||"image/jpeg",cacheControl:"3600",upsert:!1});if(x){g.disabled=!1,g.innerHTML=o,alert("Could not upload photo: "+x.message);return}const{data:S}=$.storage.from("review-photos").getPublicUrl(w);d=S?.publicUrl||null}const{error:b}=await $.from("product_reviews").insert({listing_id:e.id||null,property_id:e.property_id||e.id||"",user_id:r.id,rating:P,comment:c,review_photo:d,is_approved:!0});if(g.disabled=!1,g.innerHTML=o,b){alert("Error: "+b.message);return}document.getElementById("review-text").value="",P=0,i=null,l&&(l.value=""),s&&(s.innerHTML=""),document.querySelectorAll(".star-btn").forEach(v=>{const w=v.querySelector("i");w.classList.remove("fill-amber-400","text-amber-400"),w.classList.add("text-gray-300")}),p&&(p.classList.remove("hidden"),setTimeout(()=>{p&&p.classList.add("hidden")},4e3)),D(e)})}async function D(e){const t=document.getElementById("reviews-list"),a=document.getElementById("reviews-summary"),r=document.getElementById("reviews-breakdown");if(!t)return;const l=Ne(e),s={5:l.breakdown[5]||0,4:l.breakdown[4]||0,3:l.breakdown[3]||0,2:l.breakdown[2]||0,1:l.breakdown[1]||0};let i=Math.max(Number(l.total)||0,l.reviews.length);const p=[],n=e.property_id||e.id||"";if(n){const{data:v,error:w}=await $.from("product_reviews").select("*, profiles(full_name)").eq("property_id",n).eq("is_approved",!0).order("created_at",{ascending:!1});if(!w&&v)for(const x of v){p.push({...x,name:x.profiles?.full_name||"Anonymous",verified:x.is_verified_purchase});const S=Math.min(5,Math.max(1,Math.round(Number(x.rating)||0)));s[S]++,i++}}const c=l.computedRating||Number(e.rating)||0,g=Math.max(i,0),o=Number(c),d=`
    <div class="flex flex-wrap items-center gap-4 sm:gap-6">
      <div class="flex items-center gap-3">
        <div class="text-4xl font-black text-gray-900">${o>0?o.toFixed(1):"New"}</div>
        <div>
          <div class="flex gap-0.5">${Pe(o,"w-5 h-5")}</div>
          <div class="text-xs text-gray-500 mt-0.5">${g>0?g.toLocaleString()+" buyer ratings":"Be the first to review this item"}</div>
        </div>
      </div>
      <div class="hidden sm:block w-px h-10 bg-gray-200"></div>
      <div class="flex flex-wrap gap-2">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Listing</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1.5 rounded-full"><i data-lucide="truck" class="w-3.5 h-3.5"></i> Fast Worldwide Delivery</span>
      </div>
    </div>`;a&&(a.innerHTML=d),r&&(r.innerHTML=We(e,s,g));const b=[...p,...l.reviews];b.length?t.innerHTML=b.map(Fe).join(""):t.innerHTML='<p class="text-gray-500 text-sm py-2">No reviews yet. Be the first to review this product!</p>',window.lucide&&lucide.createIcons()}async function et(e){const t=document.getElementById("recommendations-section"),a=document.getElementById("recommendations-grid");if(!t||!a||!e.id)return;const{data:r,error:l}=await $.from("product_recommendations").select("recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)").eq("listing_id",e.id).order("score",{ascending:!1}).limit(4);if(l){console.error("Recommendations load failed:",l.message),t.classList.add("hidden");return}let s=(r||[]).map(i=>i.showroom_listings).filter(Boolean);if(s.length<4){const{data:i}=await $.from("showroom_listings").select("property_id, title, price, currency, images, listing_type").eq("category",e.category).neq("id",e.id).eq("is_active",!0).order("rating",{ascending:!1}).limit(4-s.length);s=[...s,...i||[]]}if(s.length===0){t.classList.add("hidden");return}t.classList.remove("hidden"),a.innerHTML=s.map(i=>{const p=i.images&&i.images[0]||"/fallback.svg",n=typeof i.price=="number"?i.price:parseFloat(i.price||0),c=i.currency||"USD";return`<a href="/details.html?id=${i.property_id}" class="block bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition group">
      <div class="aspect-square overflow-hidden bg-gray-100"><img src="${u(p)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-gray-900 font-bold truncate">${u(i.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${c} ${n.toLocaleString()}</p></div>
    </a>`}).join("")}function u(e){return String(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function tt(){const e=Oe();if(!e){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}await ye();const t=fe(e);if(t){E(t),document.title=`${t.title} | Weverse Online Shop`,O(t);try{B(t)}catch{}return}const a=$e(e);if(a){E(a),document.title=`${a.title} | Weverse Online Shop`,Ue(a);return}const r=Ie(e);if(r){E(r),document.title=`${r.title} | Weverse Online Shop`,Ge(r);return}const l=Ee(e);if(l){E(l),document.title=`${l.title} | Weverse Online Shop`,Ye(l);return}const s=Be(e);if(s){E(s),document.title=`${s.title} | Weverse Online Shop`,O(s);try{B(s)}catch{}return}const i=ze(e);if(i){E(i),document.title=`${i.title} | Weverse Online Shop`,O(i);try{B(i)}catch{}return}const[{generateListingById:p},{loadHiddenCatalogIds:n}]=await Promise.all([ae(()=>import("./catalog-3IUO5W3L.js"),__vite__mapDeps([0,1,2])),ae(()=>import("./catalog-hidden-store-wpIcgcJZ.js"),__vite__mapDeps([1,2]))]);await n();const c=p(e);if(!c){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}E(c),document.title=`${c.title} | Weverse Online Shop`,O(c);try{B(c)}catch{}}tt();
