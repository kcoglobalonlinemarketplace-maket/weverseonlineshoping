import{h as B,b as T,T as R,M as z,P as _,a as $,S as I,c as C,i as b,e as M,f as V,j as A,k as j}from"./catalog-hidden-store-Dx1aqBRS.js";const L="kco-hero-rows",O="/fallback.svg",D=new Set(["Cars","Cars & Vehicles","Trucks","Buses","Buses & Coaches","Motorhomes","Motorcycles","Marine & Boating","RV & Camper Accessories","Vehicles"]),u=new Set(["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","House","Homes","Duplex","Penthouse","Bungalow","Cottage","Chalet","Studio","Loft"]),F=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","House","Homes","Duplex","Penthouse","Bungalow","Cottage","Chalet","Studio","Loft"];function i(e,o){return e.specifications&&typeof e.specifications=="object"&&e.specifications[o]!=null?e.specifications[o]:e[o]}function k(e){return e.listing_type==="vehicle"||D.has(e.category)}function P(e){return e.listing_type==="property"?!e.property_type&&e.category==="Houses & Real Estate"?!0:u.has(e.property_type)||u.has(e.subcategory):e.listing_type==="product"?e.category==="Houses & Real Estate"||e.category==="Real Estate"||u.has(e.property_type||e.subcategory):!1}function N(e){const o=new Set,t=[];for(const r of e){if(!r)continue;const a=r.property_id||r.id;!a||o.has(a)||(o.add(a),t.push(r))}return t}function S(e){return N(e).filter(o=>b&&b(o.property_id)?!1:o.property_id&&String(o.property_id).startsWith("W")?!0:o.is_active!==!1).sort((o,t)=>{const r=Number.isFinite(parseFloat(o.price))?parseFloat(o.price):0;return(Number.isFinite(parseFloat(t.price))?parseFloat(t.price):0)-r})}function G(e){const o=e.property_type||e.subcategory||e.category;if(o&&!f.has(o)){const t=String(o).toLowerCase();for(const r of F)if(t===r.toLowerCase()||t.includes(r.toLowerCase())){f.set(o,r);break}f.has(o)||f.set(o,String(o))}return o?f.get(o):"Homes"}const f=new Map;function W(){return q().filter(e=>P(e))}function q(){const o=(C()||[]).filter(r=>r.listing_type==="property"||r.category==="Real Estate"||r.category==="Houses & Real Estate"||u.has(r.property_type)||u.has(r.subcategory)),t=[..._,...$,...I].filter(r=>r&&(r.category==="Houses & Real Estate"||r.category==="Real Estate"||u.has(r.property_type||r.subcategory)));return S([...o,...t])}function U(){const o=(C()||[]).filter(r=>k(r)),t=[...R,...z,..._,...$].filter(r=>r&&k(r));return S([...o,...t])}function s(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function X(){if(document.getElementById("kco-hero-styles"))return;const e=document.createElement("style");e.id="kco-hero-styles",e.textContent=`
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
`,document.head.appendChild(e)}function w(e,o,t){M(e);const r=t||"kco-hero-card",a=e.images&&e.images[0]||O,l=Y(e.property_id||e.id),c=o==="vehicle"&&e.category==="Trucks"?V(e):A(e);let n="",d="";if(o==="house"){const E=j(e.country_code),g=[e.city,e.state].filter(Boolean).join(", ")||e.country||"";g&&(d=`<span class="kco-hero-loc"><i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>${s(E+" "+g)}</span>`);const p=[];i(e,"bedrooms")!=null&&p.push(`<span class="kco-hero-chip"><i data-lucide="bed-double" class="w-3.5 h-3.5"></i>${s(i(e,"bedrooms"))} Beds</span>`),i(e,"bathrooms")!=null&&p.push(`<span class="kco-hero-chip"><i data-lucide="bath" class="w-3.5 h-3.5"></i>${s(i(e,"bathrooms"))} Baths</span>`),e.land_size&&p.push(`<span class="kco-hero-chip"><i data-lucide="ruler" class="w-3.5 h-3.5"></i>${s(e.land_size)}</span>`),i(e,"building_size")&&p.push(`<span class="kco-hero-chip"><i data-lucide="building-2" class="w-3.5 h-3.5"></i>${s(i(e,"building_size"))}</span>`),i(e,"year_built")&&p.push(`<span class="kco-hero-chip"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${s(i(e,"year_built"))}</span>`);const H=G(e);return n=p.join(""),d||(d=""),`
      <a href="/details.html?id=${l}" class="${r}">
        <div class="kco-hero-media">
          <img src="${s(a)}" alt="${s(e.title||"")}" loading="lazy">
          <span class="kco-hero-type"><i data-lucide="home" class="w-3 h-3"></i>${s(H)}</span>
          ${d}
        </div>
        <div class="kco-hero-body">
          <div class="kco-hero-price"><b>${c}</b><span>${e.listing_status==="rent"?"per month · for rent":"for sale"}</span></div>
          <p class="kco-hero-title">${s(e.title||"")}</p>
          ${n?`<div class="kco-hero-chips">${n}</div>`:""}
          <span class="kco-hero-btn">View Property <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>`}const h=[];return i(e,"model_year")&&h.push(`<span class="kco-hero-chip"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${s(i(e,"model_year"))}</span>`),i(e,"mileage")&&h.push(`<span class="kco-hero-chip"><i data-lucide="gauge" class="w-3.5 h-3.5"></i>${s(i(e,"mileage"))}</span>`),i(e,"fuel_type")&&h.push(`<span class="kco-hero-chip"><i data-lucide="fuel" class="w-3.5 h-3.5"></i>${s(i(e,"fuel_type"))}</span>`),i(e,"transmission")&&h.push(`<span class="kco-hero-chip"><i data-lucide="cog" class="w-3.5 h-3.5"></i>${s(i(e,"transmission"))}</span>`),i(e,"body_type")&&h.push(`<span class="kco-hero-chip"><i data-lucide="car-front" class="w-3.5 h-3.5"></i>${s(i(e,"body_type"))}</span>`),n=h.join(""),`
      <a href="/details.html?id=${l}" class="${r}">
        <div class="kco-hero-media">
          <img src="${s(a)}" alt="${s(e.title||"")}" loading="lazy">
          <span class="kco-hero-type"><i data-lucide="car-front" class="w-3 h-3"></i>${s(K(e))}</span>
        </div>
        <div class="kco-hero-body">
          <div class="kco-hero-price"><b>${c}</b><span>· ${s(i(e,"condition")||"ready")}</span></div>
          <p class="kco-hero-title">${s(e.title||"")}</p>
          ${n?`<div class="kco-hero-chips">${n}</div>`:""}
          <span class="kco-hero-btn">View Vehicle <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>`}function Y(e){return String(e??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function K(e){const o=String(e.category||""),t={Cars:"Car","Cars & Vehicles":"Car",Trucks:"Truck",Buses:"Bus","Buses & Coaches":"Bus",Motorhomes:"Motorhome / RV",Motorcycles:"Motorcycle","Marine & Boating":"Boat / Marine"};return t[o]?t[o]:i(e,"body_type")||o||"Vehicle"}function J(e){return`<i data-lucide="${e}" class="w-5 h-5 text-white"></i>`}function Q(e){let o=!1,t=!1,r=0,a=0;e.addEventListener("pointerdown",c=>{o=!0,t=!1,r=c.clientX,a=e.scrollLeft,e.classList.add("dragging");try{e.setPointerCapture(c.pointerId)}catch{}}),e.addEventListener("pointermove",c=>{if(!o)return;const n=c.clientX-r;Math.abs(n)>5&&(t=!0),e.scrollLeft=a-n});const l=()=>{o=!1,e.classList.remove("dragging")};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l),e.addEventListener("pointerleave",l),e.addEventListener("click",c=>{t&&(c.preventDefault(),c.stopPropagation())},!0)}function y(e){const o=document.createElement("section");o.className=`kco-hero-section ${e.kindCls}`,o.setAttribute("aria-label",e.title);const t=`
    <button class="kco-hero-arrow left" aria-label="Scroll ${e.title} left">${Z}</button>
    <button class="kco-hero-arrow right" aria-label="Scroll ${e.title} right">${ee}</button>`,r=`
    <div class="kco-hero-panel">
      <div class="kco-hero-head">
        <div class="kco-hero-headleft">
          <span class="kco-hero-ic">${J(e.icon)}</span>
          <div class="min-w-0">
            <h3>${s(e.title)}</h3>
            <p>${s(e.subtitle)}</p>
          </div>
        </div>
        <span class="kco-hero-count">${e.listings.length} Available</span>
        ${e.seeAll?`<a class="kco-hero-seeall" href="/showroom.html?cat=${e.cat}">See All <i data-lucide="arrow-up-right" class="w-4 h-4"></i></a>`:""}
      </div>
      <div class="kco-hero-hscroll">
        ${e.listings.length?e.listings.map(d=>e.card(d)).join(""):'<div class="kco-hero-empty">New listings will appear here as soon as they are published.</div>'}
      </div>
      ${t}
    </div>`;o.innerHTML=r;const a=o.querySelector(".kco-hero-hscroll");Q(a);const l=o.querySelector(".kco-hero-arrow.left"),c=o.querySelector(".kco-hero-arrow.right"),n=()=>{const d=a.scrollWidth-a.clientWidth-2;l.disabled=a.scrollLeft<=2,c.disabled=a.scrollLeft>=d};return l.addEventListener("click",()=>a.scrollBy({left:-a.clientWidth*.8,behavior:"smooth"})),c.addEventListener("click",()=>a.scrollBy({left:a.clientWidth*.8,behavior:"smooth"})),a.addEventListener("scroll",n,{passive:!0}),n(),o}const Z='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',ee='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';function m(){const e=document.getElementById(L);if(!e)return;X();const o=W(),t=U(),r=document.createDocumentFragment();r.appendChild(y({kindCls:"kco-hero-re",title:"Real Estate",subtitle:"Houses & homes from around the world",icon:"home",cat:"real-estate",seeAll:!0,listings:o,card:a=>w(a,"house")})),r.appendChild(y({kindCls:"kco-hero-veh",title:"Cars & Trucks",subtitle:"Vehicles, trucks, motorhomes and more",icon:"car-front",cat:"cars-trucks",seeAll:!0,listings:t,card:a=>w(a,"vehicle")})),e.replaceChildren(r),window.lucide&&lucide.createIcons()}let x=!1;function v(){x||(x=!0,document.getElementById(L)&&(B(),m(),T().then(()=>m()).catch(()=>{}),window.addEventListener("showroom-categories-ready",()=>m()),window.addEventListener("kco-db-refresh",()=>m())))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v();export{U as a,G as b,w as c,q as g,X as h,K as v};
