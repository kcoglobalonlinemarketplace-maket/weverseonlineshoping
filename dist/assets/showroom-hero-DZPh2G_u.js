import{h as F,a as W,S as N,e as S,c as C,b as L,d as E}from"./showroom-data-Dx7pQsXv.js";import{T as q,M as G,P as H,a as B,f as U}from"./motorhome-data-CupbOvk0.js";import{isCatalogListingHidden as v}from"./catalog-hidden-store-CPivWtWH.js";const V="kco-hero-rows",A="/fallback.svg",Y=new Set(["Cars","Cars & Vehicles","Trucks","Buses","Buses & Coaches","Motorhomes","Motorcycles","Marine & Boating","RV & Camper Accessories","Vehicles"]),u=new Set(["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","House","Homes","Duplex","Penthouse","Bungalow","Cottage","Chalet","Studio","Loft"]),X=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","House","Homes","Duplex","Penthouse","Bungalow","Cottage","Chalet","Studio","Loft"];function s(e,o){return e.specifications&&typeof e.specifications=="object"&&e.specifications[o]!=null?e.specifications[o]:e[o]}function w(e){return e.listing_type==="vehicle"||Y.has(e.category)}function K(e){return e.listing_type==="property"?!e.property_type&&e.category==="Houses & Real Estate"?!0:u.has(e.property_type)||u.has(e.subcategory):e.listing_type==="product"?e.category==="Houses & Real Estate"||e.category==="Real Estate"||u.has(e.property_type||e.subcategory):!1}function k(e){return!e||typeof e!="string"?!1:/^data:video\//i.test(e)?!0:e.startsWith("blob:")?!1:/\.(mp4|webm|mov|m4v|avi|mkv|ogv)(\?|#|$)/i.test(e)}function T(e){if(!e)return null;for(const o of[e.video,e.video_url])if(k(o))return o;if(Array.isArray(e.images)){for(const o of e.images)if(k(o))return o}return null}function J(e){if(Array.isArray(e.images)){for(const o of e.images)if(!k(o))return o}return A}function Q(){const e=new Set,o=new Set,t=[];for(const r of M()){if(!r)continue;const a=r.property_id||r.id;if(!a||e.has(a))continue;const l=T(r);l&&(o.has(l)||(e.add(a),o.add(l),t.push(r)))}return t}function Z(e){C(e);const o=P(e.property_id||e.id),t=T(e),r=J(e),a=L(e),l=I(e),n=E(e.country_code),c=[e.city,e.state].filter(Boolean).join(", ")||e.country||"",d=c?`<span class="kco-video-loc"><i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>${i(n?n+" "+c:c)}</span>`:"",p=s(e,"bedrooms")!=null?`<span class="kco-hero-chip"><i data-lucide="bed-double" class="w-3.5 h-3.5"></i>${i(s(e,"bedrooms"))} Beds</span>`:"",b=s(e,"bathrooms")!=null?`<span class="kco-hero-chip"><i data-lucide="bath" class="w-3.5 h-3.5"></i>${i(s(e,"bathrooms"))} Baths</span>`:"",f=e.land_size?`<span class="kco-hero-chip"><i data-lucide="ruler" class="w-3.5 h-3.5"></i>${i(e.land_size)}</span>`:"";return`
    <a href="/details.html?id=${o}" class="kco-video-card">
      <div class="kco-video-media">
        <video src="${i(t)}" poster="${i(r)}" muted loop playsinline preload="metadata" class="kco-video-el" data-detail-href="/details.html?id=${o}" aria-label="${i(e.title||"")}">
          <source src="${i(t)}">
        </video>
        <div class="kco-video-bigplay"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
        <span class="kco-hero-type"><i data-lucide="home" class="w-3 h-3"></i>${i(l)}</span>
        <span class="kco-video-badge"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Video</span>
        ${d}
      </div>
      <div class="kco-video-body">
        <div class="kco-hero-price"><b>${a}</b><span>${e.listing_status==="rent"?"per month · for rent":"for sale"}</span></div>
        <p class="kco-hero-title">${i(e.title||"")}</p>
        ${p||b||f?`<div class="kco-hero-chips">${p}${b}${f}</div>`:""}
        <span class="kco-hero-btn">Watch &amp; View Property <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
      </div>
    </a>`}function ee(e){const o="IntersectionObserver"in window?new IntersectionObserver(t=>{for(const r of t){const a=r.target;if(!(!a||typeof a.play!="function"))if(r.isIntersecting)a.play().catch(()=>{});else try{a.pause()}catch{}}},{rootMargin:"120px"}):null;e.querySelectorAll(".kco-video-el").forEach(t=>{t.addEventListener("click",r=>{t.paused&&(t.play().catch(()=>{}),r.preventDefault(),r.stopPropagation())}),o&&o.observe(t)}),Object.defineProperty(e,"_kcoVideoIO",{value:o,configurable:!0}),"_kcoVideoCleanup"in e||Object.defineProperty(e,"_kcoVideoCleanup",{value:()=>o&&o.disconnect(),configurable:!0})}function oe(){const e=Q();if(!e.length)return document.createDocumentFragment();const o=document.createElement("section");o.className="kco-hero-section kco-video-section",o.setAttribute("aria-label","Property Video Tours"),o.setAttribute("data-property-videos","true");const t=`
    <div class="kco-hero-panel">
      <div class="kco-hero-head">
        <div class="kco-hero-headleft">
          <span class="kco-hero-ic kco-video-ic"><i data-lucide="video" class="w-5 h-5 text-white"></i></span>
          <div class="min-w-0">
            <h3 class="kco-video-h3">Property Video Tours</h3>
            <p>Watch every home, apartment, villa &amp; mansion on video.</p>
          </div>
        </div>
        <span class="kco-hero-count">${e.length} Videos</span>
        <a class="kco-hero-seeall" href="/showroom.html?cat=real-estate">See All <i data-lucide="arrow-up-right" class="w-4 h-4"></i></a>
      </div>
      <div class="kco-video-hscroll">
        ${e.map(c=>Z(c)).join("")}
      </div>
      <button class="kco-hero-arrow left" aria-label="Scroll Property Videos left">${j}</button>
      <button class="kco-hero-arrow right" aria-label="Scroll Property Videos right">${O}</button>
    </div>`;o.innerHTML=t;const r=o.querySelector(".kco-video-hscroll");R(r);const a=o.querySelector(".kco-hero-arrow.left"),l=o.querySelector(".kco-hero-arrow.right"),n=()=>{const c=r.scrollWidth-r.clientWidth-2;a.disabled=r.scrollLeft<=2,l.disabled=r.scrollLeft>=c};return a.addEventListener("click",()=>r.scrollBy({left:-r.clientWidth*.8,behavior:"smooth"})),l.addEventListener("click",()=>r.scrollBy({left:r.clientWidth*.8,behavior:"smooth"})),r.addEventListener("scroll",n,{passive:!0}),n(),document.addEventListener("visibilitychange",()=>{document.hidden&&o.querySelectorAll(".kco-video-el").forEach(c=>{try{c.pause()}catch{}})}),requestAnimationFrame(()=>ee(o)),window.lucide&&lucide.createIcons(),o}function re(e){const o=new Set,t=[];for(const r of e){if(!r)continue;const a=r.property_id||r.id;!a||o.has(a)||(o.add(a),t.push(r))}return t}function z(e){return re(e).filter(o=>v&&v(o.property_id)?!1:o.property_id&&String(o.property_id).startsWith("W")?!0:o.is_active!==!1).sort((o,t)=>{const r=Number.isFinite(parseFloat(o.price))?parseFloat(o.price):0;return(Number.isFinite(parseFloat(t.price))?parseFloat(t.price):0)-r})}function I(e){const o=e.property_type||e.subcategory||e.category;if(o&&!m.has(o)){const t=String(o).toLowerCase();for(const r of X)if(t===r.toLowerCase()||t.includes(r.toLowerCase())){m.set(o,r);break}m.has(o)||m.set(o,String(o))}return o?m.get(o):"Homes"}const m=new Map;function te(){return M().filter(e=>K(e))}function M(){const o=(S()||[]).filter(r=>r.listing_type==="property"||r.category==="Real Estate"||r.category==="Houses & Real Estate"||u.has(r.property_type)||u.has(r.subcategory)),t=[...H,...B,...N].filter(r=>r&&(r.category==="Houses & Real Estate"||r.category==="Real Estate"||u.has(r.property_type||r.subcategory)));return z([...o,...t])}function ae(){const o=(S()||[]).filter(r=>w(r)),t=[...q,...G,...H,...B].filter(r=>r&&w(r));return z([...o,...t])}function i(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ie(){if(document.getElementById("kco-hero-styles"))return;const e=document.createElement("style");e.id="kco-hero-styles",e.textContent=`
#kco-hero-rows{display:block}
.kco-hero-section{position:relative;border-radius:1.5rem;overflow:hidden;box-shadow:0 10px 30px -12px rgba(2,6,23,.25)}
.kco-hero-section+.kco-hero-section{margin-top:1.5rem}
.kco-hero-panel{position:relative;padding:1.25rem 1rem 1.4rem}
@media(min-width:640px){.kco-hero-panel{padding:1.6rem 1.75rem 1.7rem}}
.kco-hero-re{background:linear-gradient(135deg,#022c22 0%,#064e3b 45%,#0d9488 130%)}
.kco-hero-veh{background:linear-gradient(135deg,#111827 0%,#1f2937 45%,#92400e 135%)}
.kco-hero-hscroll{display:flex;gap:.9rem;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:.4rem 2px .7rem;cursor:grab}
.kco-hero-hscroll::-webkit-scrollbar{display:none}
.kco-hero-hscroll.dragging{cursor:grabbing;scroll-snap-type:none;-webkit-user-select:none;user-select:none}
.kco-hero-card{flex:0 0 auto;scroll-snap-align:start;width:272px;min-width:272px;border-radius:1.25rem;overflow:hidden;background:#fff;border:1px solid rgba(255,255,255,.14);box-shadow:0 12px 26px -12px rgba(0,0,0,.45);transition:transform .18s ease,box-shadow .18s ease;text-decoration:none;display:flex;flex-direction:column}
@media(min-width:640px){.kco-hero-card{width:372px;min-width:372px}}
@media(min-width:1024px){.kco-hero-card{width:450px;min-width:450px}}
.kco-hero-card:hover{transform:translateY(-3px);box-shadow:0 20px 40px -14px rgba(0,0,0,.5)}
.kco-hero-media{position:relative;aspect-ratio:16/10;background:#0b1120;overflow:hidden}
.kco-hero-media img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s ease}
.kco-hero-card:hover .kco-hero-media img{transform:scale(1.04)}
.kco-hero-type{position:absolute;top:.7rem;left:.7rem;display:inline-flex;align-items:center;gap:.35rem;background:rgba(0,0,0,.68);backdrop-filter:blur(6px);color:#fff;font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:.3rem .65rem;border-radius:999px;border:1px solid rgba(255,255,255,.2)}
.kco-hero-loc{position:absolute;bottom:.7rem;left:.7rem;right:.7rem;display:flex;align-items:center;gap:.4rem;background:rgba(0,0,0,.55);backdrop-filter:blur(6px);color:#fff;font-size:11px;font-weight:600;padding:.35rem .7rem;border-radius:.8rem}
.kco-hero-body{display:flex;flex-direction:column;gap:.55rem;padding:.85rem .95rem 1rem}
.kco-hero-price{display:flex;align-items:baseline;gap:.5rem;flex-wrap:wrap}
.kco-hero-price b{font-size:1.35rem;font-weight:900;color:#0f172a;line-height:1}
@media(min-width:640px){.kco-hero-price b{font-size:1.55rem}}
.kco-hero-price span{font-size:.72rem;font-weight:700}
.kco-hero-title{font-size:.98rem;line-height:1.3;font-weight:800;color:#0f172a;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
@media(min-width:640px){.kco-hero-title{font-size:1.12rem}}
.kco-hero-chips{display:flex;flex-wrap:wrap;gap:.4rem}
.kco-hero-chip{display:inline-flex;align-items:center;gap:.3rem;font-size:10.5px;font-weight:700;color:#334155;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:.6rem;padding:.28rem .55rem}
.kco-hero-btn{margin-top:.15rem;display:inline-flex;align-items:center;justify-content:center;gap:.45rem;width:100%;border-radius:.9rem;padding:.6rem;font-size:.8rem;font-weight:900;color:#fff;letter-spacing:.02em;text-align:center;transition:filter .15s ease}
.kco-hero-btn:hover{filter:brightness(1.08)}
.kco-hero-re .kco-hero-btn{background:linear-gradient(90deg,#059669,#0d9488)}
.kco-hero-veh .kco-hero-btn{background:linear-gradient(90deg,#f59e0b,#ea580c)}
.kco-hero-empty{padding:1.2rem;text-align:center;color:rgba(255,255,255,.75);font-size:.85rem;font-weight:600;background:rgba(255,255,255,.06);border:1px dashed rgba(255,255,255,.25);border-radius:1rem}
.kco-video-section{background:linear-gradient(135deg,#0b1020 0%,#111a3a 45%,#1e3a8a 130%)}
.kco-video-ic{background:rgba(59,130,246,.28);border-color:rgba(96,165,250,.4)}
.kco-video-h3{color:#fff}
.kco-video-hscroll{display:flex;gap:1rem;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:.4rem 2px .7rem;cursor:grab}
.kco-video-hscroll::-webkit-scrollbar{display:none}
.kco-video-hscroll.dragging{cursor:grabbing;scroll-snap-type:none;-webkit-user-select:none;user-select:none}
.kco-video-card{flex:0 0 auto;scroll-snap-align:start;width:272px;min-width:272px;border-radius:1.25rem;overflow:hidden;background:#fff;border:1px solid rgba(255,255,255,.14);box-shadow:0 12px 26px -12px rgba(0,0,0,.45);transition:transform .18s ease,box-shadow .18s ease;text-decoration:none;display:flex;flex-direction:column}
@media(min-width:640px){.kco-video-card{width:372px;min-width:372px}}
@media(min-width:1024px){.kco-video-card{width:450px;min-width:450px}}
.kco-video-card:hover{transform:translateY(-3px);box-shadow:0 20px 40px -14px rgba(0,0,0,.5)}
.kco-video-media{position:relative;aspect-ratio:16/10;background:#0b1120;overflow:hidden}
.kco-video-media video{width:100%;height:100%;object-fit:cover;display:block}
.kco-video-bigplay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;opacity:.92;transition:opacity .2s ease}
.kco-video-bigplay svg{width:3.4rem;height:3.4rem;color:#fff;filter:drop-shadow(0 4px 14px rgba(0,0,0,.5))}
.kco-video-card:hover .kco-video-bigplay,.kco-video-media.video-playing .kco-video-bigplay{opacity:0}
.kco-video-badge{position:absolute;top:.7rem;right:.7rem;display:inline-flex;align-items:center;gap:.3rem;background:rgba(220,38,38,.92);color:#fff;font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:.3rem .6rem;border-radius:999px;border:1px solid rgba(255,255,255,.25);box-shadow:0 4px 12px -2px rgba(0,0,0,.4)}
.kco-video-badge svg{width:.8rem;height:.8rem}
.kco-video-loc{position:absolute;bottom:.7rem;left:.7rem;right:.7rem;display:flex;align-items:center;gap:.4rem;background:rgba(0,0,0,.55);backdrop-filter:blur(6px);color:#fff;font-size:11px;font-weight:600;padding:.35rem .7rem;border-radius:.8rem}
.kco-video-body{display:flex;flex-direction:column;gap:.55rem;padding:.85rem .95rem 1rem}
.kco-hero-head{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1rem}
.kco-hero-headleft{display:flex;align-items:center;gap:.7rem;min-width:0}
.kco-hero-ic{flex:0 0 auto;width:2.6rem;height:2.6rem;border-radius:.85rem;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.22)}
.kco-hero-head h3{color:#fff;font-size:1.05rem;font-weight:900;letter-spacing:.02em;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.kco-hero-head p{color:rgba(255,255,255,.72);font-size:.72rem;font-weight:600;margin:.12rem 0 0}
.kco-hero-count{display:none;font-size:.62rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding:.28rem .6rem;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.22);color:#fff;white-space:nowrap}
@media(min-width:640px){.kco-hero-count{display:inline-flex}}
.kco-hero-seeall{flex:0 0 auto;display:inline-flex;align-items:center;gap:.45rem;padding:.6rem 1.15rem;border-radius:.95rem;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.28);color:#fff;font-size:.78rem;font-weight:900;text-decoration:none;transition:background .15s ease,transform .15s ease;white-space:nowrap}
.kco-hero-seeall:hover{background:rgba(255,255,255,.26);transform:translateY(-1px)}
.kco-hero-arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:5;width:2.25rem;height:2.25rem;border-radius:999px;display:none;align-items:center;justify-content:center;background:rgba(255,255,255,.92);color:#0f172a;border:none;box-shadow:0 6px 16px -4px rgba(0,0,0,.35);cursor:pointer;transition:background .15s ease}
.kco-hero-arrow:hover{background:#fff}
.kco-hero-arrow svg{width:1.15rem;height:1.15rem}
@media(min-width:1024px){.kco-hero-arrow{display:flex}}
.kco-hero-arrow.left{left:.8rem}.kco-hero-arrow.right{right:.8rem}
.kco-hero-arrow:disabled{opacity:.35;pointer-events:none}
`,document.head.appendChild(e)}function y(e,o,t){C(e);const r=t||"kco-hero-card",a=e.images&&e.images[0]||A,l=P(e.property_id||e.id),n=o==="vehicle"&&e.category==="Trucks"?U(e):L(e);let c="",d="";if(o==="house"){const b=E(e.country_code),f=[e.city,e.state].filter(Boolean).join(", ")||e.country||"";f&&(d=`<span class="kco-hero-loc"><i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>${i(b+" "+f)}</span>`);const h=[];s(e,"bedrooms")!=null&&h.push(`<span class="kco-hero-chip"><i data-lucide="bed-double" class="w-3.5 h-3.5"></i>${i(s(e,"bedrooms"))} Beds</span>`),s(e,"bathrooms")!=null&&h.push(`<span class="kco-hero-chip"><i data-lucide="bath" class="w-3.5 h-3.5"></i>${i(s(e,"bathrooms"))} Baths</span>`),e.land_size&&h.push(`<span class="kco-hero-chip"><i data-lucide="ruler" class="w-3.5 h-3.5"></i>${i(e.land_size)}</span>`),s(e,"building_size")&&h.push(`<span class="kco-hero-chip"><i data-lucide="building-2" class="w-3.5 h-3.5"></i>${i(s(e,"building_size"))}</span>`),s(e,"year_built")&&h.push(`<span class="kco-hero-chip"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${i(s(e,"year_built"))}</span>`);const D=I(e);return c=h.join(""),d||(d=""),`
      <a href="/details.html?id=${l}" class="${r}">
        <div class="kco-hero-media">
          <img src="${i(a)}" alt="${i(e.title||"")}" loading="lazy">
          <span class="kco-hero-type"><i data-lucide="home" class="w-3 h-3"></i>${i(D)}</span>
          ${d}
        </div>
        <div class="kco-hero-body">
          <div class="kco-hero-price"><b>${n}</b><span>${e.listing_status==="rent"?"per month · for rent":"for sale"}</span></div>
          <p class="kco-hero-title">${i(e.title||"")}</p>
          ${c?`<div class="kco-hero-chips">${c}</div>`:""}
          <span class="kco-hero-btn">View Property <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>`}const p=[];return s(e,"model_year")&&p.push(`<span class="kco-hero-chip"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${i(s(e,"model_year"))}</span>`),s(e,"mileage")&&p.push(`<span class="kco-hero-chip"><i data-lucide="gauge" class="w-3.5 h-3.5"></i>${i(s(e,"mileage"))}</span>`),s(e,"fuel_type")&&p.push(`<span class="kco-hero-chip"><i data-lucide="fuel" class="w-3.5 h-3.5"></i>${i(s(e,"fuel_type"))}</span>`),s(e,"transmission")&&p.push(`<span class="kco-hero-chip"><i data-lucide="cog" class="w-3.5 h-3.5"></i>${i(s(e,"transmission"))}</span>`),s(e,"body_type")&&p.push(`<span class="kco-hero-chip"><i data-lucide="car-front" class="w-3.5 h-3.5"></i>${i(s(e,"body_type"))}</span>`),c=p.join(""),`
      <a href="/details.html?id=${l}" class="${r}">
        <div class="kco-hero-media">
          <img src="${i(a)}" alt="${i(e.title||"")}" loading="lazy">
          <span class="kco-hero-type"><i data-lucide="car-front" class="w-3 h-3"></i>${i(se(e))}</span>
        </div>
        <div class="kco-hero-body">
          <div class="kco-hero-price"><b>${n}</b><span>· ${i(s(e,"condition")||"ready")}</span></div>
          <p class="kco-hero-title">${i(e.title||"")}</p>
          ${c?`<div class="kco-hero-chips">${c}</div>`:""}
          <span class="kco-hero-btn">View Vehicle <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>`}function P(e){return String(e??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function se(e){const o=String(e.category||""),t={Cars:"Car","Cars & Vehicles":"Car",Trucks:"Truck",Buses:"Bus","Buses & Coaches":"Bus",Motorhomes:"Motorhome / RV",Motorcycles:"Motorcycle","Marine & Boating":"Boat / Marine"};return t[o]?t[o]:s(e,"body_type")||o||"Vehicle"}function ce(e){return`<i data-lucide="${e}" class="w-5 h-5 text-white"></i>`}function R(e){let o=!1,t=!1,r=0,a=0;e.addEventListener("pointerdown",n=>{o=!0,t=!1,r=n.clientX,a=e.scrollLeft,e.classList.add("dragging");try{e.setPointerCapture(n.pointerId)}catch{}}),e.addEventListener("pointermove",n=>{if(!o)return;const c=n.clientX-r;Math.abs(c)>5&&(t=!0),e.scrollLeft=a-c});const l=()=>{o=!1,e.classList.remove("dragging")};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l),e.addEventListener("pointerleave",l),e.addEventListener("click",n=>{t&&(n.preventDefault(),n.stopPropagation())},!0)}function x(e){const o=document.createElement("section");o.className=`kco-hero-section ${e.kindCls}`,o.setAttribute("aria-label",e.title);const t=`
    <button class="kco-hero-arrow left" aria-label="Scroll ${e.title} left">${j}</button>
    <button class="kco-hero-arrow right" aria-label="Scroll ${e.title} right">${O}</button>`,r=`
    <div class="kco-hero-panel">
      <div class="kco-hero-head">
        <div class="kco-hero-headleft">
          ${e.icon?`<span class="kco-hero-ic">${ce(e.icon)}</span>`:""}
          <div class="min-w-0">
            <h3>${i(e.title)}</h3>
            <p>${i(e.subtitle)}</p>
          </div>
        </div>
        <span class="kco-hero-count">${e.listings.length} Available</span>
        ${e.seeAll?`<a class="kco-hero-seeall" href="/showroom.html?cat=${e.cat}">See All <i data-lucide="arrow-up-right" class="w-4 h-4"></i></a>`:""}
      </div>
      <div class="kco-hero-hscroll">
        ${e.listings.length?e.listings.map(d=>e.card(d)).join(""):'<div class="kco-hero-empty">New listings will appear here as soon as they are published.</div>'}
      </div>
      ${t}
    </div>`;o.innerHTML=r;const a=o.querySelector(".kco-hero-hscroll");R(a);const l=o.querySelector(".kco-hero-arrow.left"),n=o.querySelector(".kco-hero-arrow.right"),c=()=>{const d=a.scrollWidth-a.clientWidth-2;l.disabled=a.scrollLeft<=2,n.disabled=a.scrollLeft>=d};return l.addEventListener("click",()=>a.scrollBy({left:-a.clientWidth*.8,behavior:"smooth"})),n.addEventListener("click",()=>a.scrollBy({left:a.clientWidth*.8,behavior:"smooth"})),a.addEventListener("scroll",c,{passive:!0}),c(),o}const j='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',O='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';function g(){const e=document.getElementById(V);if(!e)return;ie();const o=te(),t=ae(),r=document.createDocumentFragment();r.appendChild(oe()),r.appendChild(x({kindCls:"kco-hero-re",title:"🏡 Houses & Real Estate",subtitle:"Your dream home starts here.",icon:"",cat:"real-estate",seeAll:!0,listings:o,card:a=>y(a,"house")})),r.appendChild(x({kindCls:"kco-hero-veh",title:"🚗 Cars & Trucks",subtitle:"Your next ride starts here.",icon:"",cat:"cars-trucks",seeAll:!0,listings:t,card:a=>y(a,"vehicle")})),e.replaceChildren(r),window.lucide&&lucide.createIcons()}let $=!1;function _(){$||($=!0,document.getElementById(V)&&(F(),g(),W().then(()=>g()).catch(()=>{}),window.addEventListener("showroom-categories-ready",()=>g()),window.addEventListener("kco-db-refresh",()=>g())))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_):_();export{ae as a,I as b,y as c,oe as d,M as g,ie as h,se as v};
