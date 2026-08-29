import{h as B,l as z,S as T,g as $,c as R,f as I,b as A}from"./showroom-data-DP8yT9VT.js";import{T as M,M as j,P as L,a as S,f as V}from"./motorhome-data-CPe8TkO3.js";import{isCatalogListingHidden as g}from"./catalog-hidden-store-BUe_sEAx.js";const _="kco-hero-rows",D="/fallback.svg",F=new Set(["Cars","Cars & Vehicles","Trucks","Buses","Buses & Coaches","Motorhomes","Motorcycles","Marine & Boating","RV & Camper Accessories","Vehicles"]),u=new Set(["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","House","Homes","Duplex","Penthouse","Bungalow","Cottage","Chalet","Studio","Loft"]),O=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","House","Homes","Duplex","Penthouse","Bungalow","Cottage","Chalet","Studio","Loft"];function i(e,r){return e.specifications&&typeof e.specifications=="object"&&e.specifications[r]!=null?e.specifications[r]:e[r]}function k(e){return e.listing_type==="vehicle"||F.has(e.category)}function P(e){return e.listing_type==="property"?!e.property_type&&e.category==="Houses & Real Estate"?!0:u.has(e.property_type)||u.has(e.subcategory):e.listing_type==="product"?e.category==="Houses & Real Estate"||e.category==="Real Estate"||u.has(e.property_type||e.subcategory):!1}function N(e){const r=new Set,t=[];for(const o of e){if(!o)continue;const s=o.property_id||o.id;!s||r.has(s)||(r.add(s),t.push(o))}return t}function C(e){return N(e).filter(r=>g&&g(r.property_id)?!1:r.property_id&&String(r.property_id).startsWith("W")?!0:r.is_active!==!1).sort((r,t)=>{const o=Number.isFinite(parseFloat(r.price))?parseFloat(r.price):0;return(Number.isFinite(parseFloat(t.price))?parseFloat(t.price):0)-o})}function G(e){const r=e.property_type||e.subcategory||e.category;if(r&&!m.has(r)){const t=String(r).toLowerCase();for(const o of O)if(t===o.toLowerCase()||t.includes(o.toLowerCase())){m.set(r,o);break}m.has(r)||m.set(r,String(r))}return r?m.get(r):"Homes"}const m=new Map;function U(){return W().filter(e=>P(e))}function W(){const r=($()||[]).filter(o=>o.listing_type==="property"||o.category==="Real Estate"||o.category==="Houses & Real Estate"||u.has(o.property_type)||u.has(o.subcategory)),t=[...L,...S,...T].filter(o=>o&&(o.category==="Houses & Real Estate"||o.category==="Real Estate"||u.has(o.property_type||o.subcategory)));return C([...r,...t])}function Y(){const r=($()||[]).filter(o=>k(o)),t=[...M,...j,...L,...S].filter(o=>o&&k(o));return C([...r,...t])}function a(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function q(){if(document.getElementById("kco-hero-styles"))return;const e=document.createElement("style");e.id="kco-hero-styles",e.textContent=`
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
.kco-hero-brand{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1.1rem;padding:1.6rem 1.25rem .9rem;color:#fff}
@media(min-width:640px){.kco-hero-brand{padding:1.9rem 1.75rem .9rem}}
.kco-hero-brand-left{display:flex;align-items:center;gap:1rem;min-width:0;max-width:100%}
.kco-hero-brand-ic{flex:0 0 auto;width:3.5rem;height:3.5rem;border-radius:1.05rem;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.26);font-size:1.7rem;box-shadow:0 10px 24px -10px rgba(0,0,0,.4)}
.kco-hero-brand-kicker{font-size:.6rem;font-weight:900;letter-spacing:.22em;text-transform:uppercase;opacity:.85;margin:0}
.kco-hero-brand h2{font-size:1.75rem;font-weight:900;letter-spacing:-.02em;line-height:1.1;margin:.18rem 0 .12rem;text-shadow:0 2px 10px rgba(0,0,0,.25)}
@media(min-width:640px){.kco-hero-brand h2{font-size:2.15rem}}
.kco-hero-brand-tag{font-size:.82rem;font-weight:600;line-height:1.45;opacity:.82;max-width:36rem;margin:0}
.kco-hero-brand-stats{display:flex;gap:.6rem;flex-wrap:wrap}
.kco-hero-brand-stat{display:flex;flex-direction:column;gap:.12rem;min-width:5.8rem;padding:.6rem .85rem;border-radius:.95rem;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.22);transition:background .15s ease}
.kco-hero-brand-stat:hover{background:rgba(255,255,255,.2)}
.kco-hero-brand-stat b{font-size:1.1rem;font-weight:900;line-height:1}
.kco-hero-brand-stat span{font-size:.58rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;opacity:.75}
.kco-hero-re .kco-hero-brand{background:linear-gradient(120deg,rgba(6,78,59,.55),rgba(13,148,136,.18))}
.kco-hero-veh .kco-hero-brand{background:linear-gradient(120deg,rgba(31,41,55,.55),rgba(146,64,14,.22))}
`,document.head.appendChild(e)}function w(e,r,t){R(e);const o=t||"kco-hero-card",s=e.images&&e.images[0]||D,d=X(e.property_id||e.id),n=r==="vehicle"&&e.category==="Trucks"?V(e):I(e);let c="",l="";if(r==="house"){const E=A(e.country_code),b=[e.city,e.state].filter(Boolean).join(", ")||e.country||"";b&&(l=`<span class="kco-hero-loc"><i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>${a(E+" "+b)}</span>`);const p=[];i(e,"bedrooms")!=null&&p.push(`<span class="kco-hero-chip"><i data-lucide="bed-double" class="w-3.5 h-3.5"></i>${a(i(e,"bedrooms"))} Beds</span>`),i(e,"bathrooms")!=null&&p.push(`<span class="kco-hero-chip"><i data-lucide="bath" class="w-3.5 h-3.5"></i>${a(i(e,"bathrooms"))} Baths</span>`),e.land_size&&p.push(`<span class="kco-hero-chip"><i data-lucide="ruler" class="w-3.5 h-3.5"></i>${a(e.land_size)}</span>`),i(e,"building_size")&&p.push(`<span class="kco-hero-chip"><i data-lucide="building-2" class="w-3.5 h-3.5"></i>${a(i(e,"building_size"))}</span>`),i(e,"year_built")&&p.push(`<span class="kco-hero-chip"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${a(i(e,"year_built"))}</span>`);const H=G(e);return c=p.join(""),l||(l=""),`
      <a href="/details.html?id=${d}" class="${o}">
        <div class="kco-hero-media">
          <img src="${a(s)}" alt="${a(e.title||"")}" loading="lazy">
          <span class="kco-hero-type"><i data-lucide="home" class="w-3 h-3"></i>${a(H)}</span>
          ${l}
        </div>
        <div class="kco-hero-body">
          <div class="kco-hero-price"><b>${n}</b><span>${e.listing_status==="rent"?"per month · for rent":"for sale"}</span></div>
          <p class="kco-hero-title">${a(e.title||"")}</p>
          ${c?`<div class="kco-hero-chips">${c}</div>`:""}
          <span class="kco-hero-btn">View Property <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>`}const h=[];return i(e,"model_year")&&h.push(`<span class="kco-hero-chip"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${a(i(e,"model_year"))}</span>`),i(e,"mileage")&&h.push(`<span class="kco-hero-chip"><i data-lucide="gauge" class="w-3.5 h-3.5"></i>${a(i(e,"mileage"))}</span>`),i(e,"fuel_type")&&h.push(`<span class="kco-hero-chip"><i data-lucide="fuel" class="w-3.5 h-3.5"></i>${a(i(e,"fuel_type"))}</span>`),i(e,"transmission")&&h.push(`<span class="kco-hero-chip"><i data-lucide="cog" class="w-3.5 h-3.5"></i>${a(i(e,"transmission"))}</span>`),i(e,"body_type")&&h.push(`<span class="kco-hero-chip"><i data-lucide="car-front" class="w-3.5 h-3.5"></i>${a(i(e,"body_type"))}</span>`),c=h.join(""),`
      <a href="/details.html?id=${d}" class="${o}">
        <div class="kco-hero-media">
          <img src="${a(s)}" alt="${a(e.title||"")}" loading="lazy">
          <span class="kco-hero-type"><i data-lucide="car-front" class="w-3 h-3"></i>${a(K(e))}</span>
        </div>
        <div class="kco-hero-body">
          <div class="kco-hero-price"><b>${n}</b><span>· ${a(i(e,"condition")||"ready")}</span></div>
          <p class="kco-hero-title">${a(e.title||"")}</p>
          ${c?`<div class="kco-hero-chips">${c}</div>`:""}
          <span class="kco-hero-btn">View Vehicle <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>`}function X(e){return String(e??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function K(e){const r=String(e.category||""),t={Cars:"Car","Cars & Vehicles":"Car",Trucks:"Truck",Buses:"Bus","Buses & Coaches":"Bus",Motorhomes:"Motorhome / RV",Motorcycles:"Motorcycle","Marine & Boating":"Boat / Marine"};return t[r]?t[r]:i(e,"body_type")||r||"Vehicle"}function J(e){return`<i data-lucide="${e}" class="w-5 h-5 text-white"></i>`}function Q(e){let r=!1,t=!1,o=0,s=0;e.addEventListener("pointerdown",n=>{r=!0,t=!1,o=n.clientX,s=e.scrollLeft,e.classList.add("dragging");try{e.setPointerCapture(n.pointerId)}catch{}}),e.addEventListener("pointermove",n=>{if(!r)return;const c=n.clientX-o;Math.abs(c)>5&&(t=!0),e.scrollLeft=s-c});const d=()=>{r=!1,e.classList.remove("dragging")};e.addEventListener("pointerup",d),e.addEventListener("pointercancel",d),e.addEventListener("pointerleave",d),e.addEventListener("click",n=>{t&&(n.preventDefault(),n.stopPropagation())},!0)}function y(e){const r=document.createElement("section");r.className=`kco-hero-section ${e.kindCls}`,r.setAttribute("aria-label",e.title);const t=`
    <button class="kco-hero-arrow left" aria-label="Scroll ${e.title} left">${Z}</button>
    <button class="kco-hero-arrow right" aria-label="Scroll ${e.title} right">${ee}</button>`,o=`
    ${e.brand?`
    <div class="kco-hero-brand">
      <div class="kco-hero-brand-left">
        <span class="kco-hero-brand-ic">${e.brand.emoji}</span>
        <div class="min-w-0">
          <p class="kco-hero-brand-kicker">${a(e.brand.kicker)}</p>
          <h2>${a(e.brand.title)}</h2>
          <p class="kco-hero-brand-tag">${a(e.brand.tagline)}</p>
        </div>
      </div>
      <div class="kco-hero-brand-stats">
        ${e.brand.stats.map(l=>`<div class="kco-hero-brand-stat"><b>${a(String(l.value))}</b><span>${a(l.label)}</span></div>`).join("")}
      </div>
    </div>`:""}
    <div class="kco-hero-panel">
      <div class="kco-hero-head">
        <div class="kco-hero-headleft">
          <span class="kco-hero-ic">${J(e.icon)}</span>
          <div class="min-w-0">
            <h3>${a(e.title)}</h3>
            <p>${a(e.subtitle)}</p>
          </div>
        </div>
        <span class="kco-hero-count">${e.listings.length} Available</span>
        ${e.seeAll?`<a class="kco-hero-seeall" href="/showroom.html?cat=${e.cat}">See All <i data-lucide="arrow-up-right" class="w-4 h-4"></i></a>`:""}
      </div>
      <div class="kco-hero-hscroll">
        ${e.listings.length?e.listings.map(l=>e.card(l)).join(""):'<div class="kco-hero-empty">New listings will appear here as soon as they are published.</div>'}
      </div>
      ${t}
    </div>`;r.innerHTML=o;const s=r.querySelector(".kco-hero-hscroll");Q(s);const d=r.querySelector(".kco-hero-arrow.left"),n=r.querySelector(".kco-hero-arrow.right"),c=()=>{const l=s.scrollWidth-s.clientWidth-2;d.disabled=s.scrollLeft<=2,n.disabled=s.scrollLeft>=l};return d.addEventListener("click",()=>s.scrollBy({left:-s.clientWidth*.8,behavior:"smooth"})),n.addEventListener("click",()=>s.scrollBy({left:s.clientWidth*.8,behavior:"smooth"})),s.addEventListener("scroll",c,{passive:!0}),c(),r}const Z='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',ee='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';function f(){const e=document.getElementById(_);if(!e)return;q();const r=U(),t=Y(),o=document.createDocumentFragment();o.appendChild(y({kindCls:"kco-hero-re",title:"Real Estate",subtitle:"Houses & homes from around the world",icon:"home",cat:"real-estate",seeAll:!0,listings:r,card:s=>w(s,"house"),brand:{emoji:"🏡",kicker:"Property Brief — Houses & Real Estate",title:"Houses & Real Estate",tagline:"Your dream home started here. Every listing is presented like a professional brief — real rooms, land, history and a fair price.",stats:[{value:r.length,label:"Live Listings"},{value:"✓",label:"AI-Scanned Specs"},{value:"Live",label:"Updated Daily"}]}})),o.appendChild(y({kindCls:"kco-hero-veh",title:"Cars & Trucks",subtitle:"Vehicles, trucks, motorhomes and more",icon:"car-front",cat:"cars-trucks",seeAll:!0,listings:t,card:s=>w(s,"vehicle"),brand:{emoji:"🚗",kicker:"Auto Brief — Cars & Trucks",title:"Cars & Trucks",tagline:"Your next ride starts here. Full specifications, real mileage and history — every detail read from the photos and reviewed before publishing.",stats:[{value:t.length,label:"Live Listings"},{value:"✓",label:"AI-Scanned Specs"},{value:"Live",label:"Updated Daily"}]}})),e.replaceChildren(o),window.lucide&&lucide.createIcons()}let x=!1;function v(){x||(x=!0,document.getElementById(_)&&(B(),f(),z().then(()=>f()).catch(()=>{}),window.addEventListener("showroom-categories-ready",()=>f()),window.addEventListener("kco-db-refresh",()=>f())))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v();export{Y as a,G as b,w as c,W as g,q as h,K as v};
