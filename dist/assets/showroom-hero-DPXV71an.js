import{h as A,a as M,S as O,c as R,b as V,d as D,e as $}from"./showroom-data-A4bpNOne.js";import{P as L,a as T,T as F,M as j,f as N}from"./motorhome-data-CupbOvk0.js";import{isCatalogListingHidden as y}from"./catalog-hidden-store-Br-Df_3h.js";const u=".showroom-card video, [data-showroom-grid] video, .kco-video-section video, .kco-video-el",P="#video-tour-modal video";function g(e){return!!(e&&e.matches&&e.matches(u)&&!e.closest(P))}function f(e){if(g(e)){if(e.setAttribute("muted",""),e.setAttribute("loop",""),e.setAttribute("autoplay",""),e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.loop=!0,e.playsInline=!0,e.autoplay=!0,e.ended)try{e.currentTime=0}catch{}e.paused&&e.play().catch(()=>{})}}function x(e){!e||!e.querySelectorAll||e.querySelectorAll(u).forEach(f)}document.addEventListener("ended",e=>{const o=e.target;if(o&&o.tagName==="VIDEO"&&g(o)){try{o.currentTime=0}catch{}o.play().catch(()=>{})}},!0);const v="MutationObserver"in window?new MutationObserver(e=>{for(const o of e)for(const t of o.addedNodes)!t||t.nodeType!==1||(t.matches&&g(t)&&f(t),t.querySelectorAll&&t.querySelectorAll(u).forEach(f))}):null;function S(){x(document),v&&document.body&&v.observe(document.body,{childList:!0,subtree:!0}),setInterval(()=>x(document),2e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",S):S();const z="kco-hero-rows",G="/fallback.svg",q=new Set(["Cars","Cars & Vehicles","Trucks","Buses","Buses & Coaches","Motorhomes","Motorcycles","Marine & Boating","RV & Camper Accessories","Vehicles"]),m=new Set(["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","House","Homes","Duplex","Penthouse","Bungalow","Cottage","Chalet","Studio","Loft"]),U=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","House","Homes","Duplex","Penthouse","Bungalow","Cottage","Chalet","Studio","Loft"];function i(e,o){return e.specifications&&typeof e.specifications=="object"&&e.specifications[o]!=null?e.specifications[o]:e[o]}function _(e){return e.listing_type==="vehicle"||q.has(e.category)}function W(e){const o=new Set,t=[];for(const r of e){if(!r)continue;const c=r.property_id||r.id;!c||o.has(c)||(o.add(c),t.push(r))}return t}function H(e){return W(e).filter(o=>y&&y(o.property_id)?!1:o.property_id&&String(o.property_id).startsWith("W")?!0:o.is_active!==!1).sort((o,t)=>{const r=Number.isFinite(parseFloat(o.price))?parseFloat(o.price):0;return(Number.isFinite(parseFloat(t.price))?parseFloat(t.price):0)-r})}function K(e){const o=e.property_type||e.subcategory||e.category;if(o&&!l.has(o)){const t=String(o).toLowerCase();for(const r of U)if(t===r.toLowerCase()||t.includes(r.toLowerCase())){l.set(o,r);break}l.has(o)||l.set(o,String(o))}return o?l.get(o):"Homes"}const l=new Map;function re(){const o=($()||[]).filter(r=>r.listing_type==="property"||r.category==="Real Estate"||r.category==="Houses & Real Estate"||m.has(r.property_type)||m.has(r.subcategory)),t=[...L,...T,...O].filter(r=>r&&(r.category==="Houses & Real Estate"||r.category==="Real Estate"||m.has(r.property_type||r.subcategory)));return H([...o,...t])}function te(){const o=($()||[]).filter(r=>_(r)),t=[...F,...j,...L,...T].filter(r=>r&&_(r));return H([...o,...t])}function a(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Y(){if(document.getElementById("kco-hero-styles"))return;const e=document.createElement("style");e.id="kco-hero-styles",e.textContent=`
#kco-hero-rows{display:block}
.kco-hero-section{position:relative;border-radius:1.25rem;overflow:hidden;background:#ffffff;border:1px solid #e2e8f0;box-shadow:0 1px 2px rgba(15,23,42,.05)}
.kco-hero-section+.kco-hero-section{margin-top:1.25rem}
.kco-hero-section::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#3b82f6,#60a5fa)}
.kco-hero-veh::before{background:linear-gradient(90deg,#475569,#94a3b8)}
.kco-video-section::before{background:linear-gradient(90deg,#059669,#34d399)}
.kco-hero-panel{position:relative;padding:1.35rem 1rem 1.5rem}
@media(min-width:640px){.kco-hero-panel{padding:1.6rem 1.5rem 1.7rem}}
.kco-hero-head{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1.1rem}
.kco-hero-headleft{display:flex;align-items:center;gap:.7rem;min-width:0}
.kco-hero-ic{flex:0 0 auto;width:2.5rem;height:2.5rem;border-radius:.75rem;display:flex;align-items:center;justify-content:center;background:#eff6ff;border:1px solid #bfdbfe}
.kco-hero-ic [data-lucide]{color:#2563eb !important}
.kco-hero-head h3{color:#0f172a;font-size:1.05rem;font-weight:900;letter-spacing:-.01em;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.kco-hero-head p{color:#64748b;font-size:.78rem;font-weight:600;margin:.18rem 0 0}
.kco-hero-count{font-size:.66rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:.34rem .7rem;border-radius:999px;background:#f1f5f9;border:1px solid #e2e8f0;color:#475569;white-space:nowrap;display:none;align-items:center;gap:.3rem}
@media(min-width:640px){.kco-hero-count{display:inline-flex}}
.kco-hero-count b,.kco-hero-count strong{color:#0f172a}
.kco-hero-seeall{flex:0 0 auto;display:inline-flex;align-items:center;gap:.4rem;padding:.5rem .95rem;border-radius:.75rem;background:#eff6ff;border:1px solid #bfdbfe;color:#2563eb;font-size:.78rem;font-weight:800;text-decoration:none;transition:background .15s ease,border-color .15s ease;white-space:nowrap}
.kco-hero-seeall:hover{background:#dbeafe;border-color:#93c5fd}
.kco-video-section{background:#ffffff;border-color:#e2e8f0;box-shadow:0 1px 2px rgba(15,23,42,.05)}
.kco-video-panel{padding:1.35rem 1rem 1.5rem}
@media(min-width:640px){.kco-video-panel{padding:1.6rem 1.5rem 1.7rem}}
.kco-video-promo{display:flex;align-items:flex-end;justify-content:space-between;gap:1rem 1.5rem;flex-wrap:wrap}
.kco-video-copy{flex:1 1 auto;min-width:0}
.kco-video-eyebrow{display:inline-flex;align-items:center;gap:.35rem;font-size:.66rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#047857;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:999px;padding:.3rem .7rem;margin-bottom:.55rem}
.kco-video-eyebrow [data-lucide]{width:.75rem;height:.75rem;color:#047857}
.kco-video-section .kco-video-h3{color:#0f172a;font-size:clamp(1.3rem,3vw,1.85rem);font-weight:900;letter-spacing:-.015em;line-height:1.15;margin:0}
.kco-video-copy p{color:#64748b;font-size:.85rem;font-weight:600;line-height:1.45;margin:.4rem 0 0}
.kco-video-actions{flex:0 0 auto;display:flex;flex-direction:row;align-items:center;gap:.6rem;padding-top:.1rem;flex-wrap:wrap}
.kco-video-carousel{position:relative;margin-top:1.25rem}
@media(max-width:380px){.kco-video-promo{flex-direction:column;align-items:stretch;gap:1rem}.kco-video-copy{max-width:none}}
.kco-hero-hscroll,.kco-video-hscroll{display:flex;gap:.85rem;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:.4rem 2px .7rem;cursor:grab}
.kco-hero-hscroll::-webkit-scrollbar,.kco-video-hscroll::-webkit-scrollbar{display:none}
.kco-hero-hscroll.dragging,.kco-video-hscroll.dragging{cursor:grabbing;scroll-snap-type:none;-webkit-user-select:none;user-select:none}
.kco-hero-arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:5;width:2.25rem;height:2.25rem;border-radius:999px;display:none;align-items:center;justify-content:center;background:#ffffff;color:#0f172a;border:1px solid #e2e8f0;box-shadow:0 4px 12px -2px rgba(15,23,42,.18);cursor:pointer;transition:background .15s ease,border-color .15s ease}
.kco-hero-arrow:hover{background:#f1f5f9;border-color:#cbd5e1}
.kco-hero-arrow svg{width:1.1rem;height:1.1rem}
@media(min-width:1024px){.kco-hero-arrow{display:flex}}
.kco-hero-arrow.left{left:.7rem}.kco-hero-arrow.right{right:.7rem}
.kco-hero-arrow:disabled{opacity:.35;pointer-events:none}
.kco-video-card,.kco-hero-card{flex:0 0 auto;scroll-snap-align:start;width:272px;min-width:272px;border-radius:1rem;overflow:hidden;background:#ffffff;border:1px solid #e2e8f0;box-shadow:0 1px 2px rgba(15,23,42,.06);transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease;text-decoration:none;display:flex;flex-direction:column}
@media(min-width:640px){.kco-video-card,.kco-hero-card{width:360px;min-width:360px}}
@media(min-width:1024px){.kco-video-card,.kco-hero-card{width:420px;min-width:420px}}
.kco-video-card:hover,.kco-hero-card:hover{transform:translateY(-2px);box-shadow:0 12px 26px -12px rgba(2,6,23,.2);border-color:#bfdbfe}
.kco-video-media,.kco-hero-media{position:relative;aspect-ratio:16/10;background:#f1f5f9;overflow:hidden}
.kco-video-media img,.kco-video-media video,.kco-hero-media img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s ease}
.kco-video-card:hover .kco-video-media img,.kco-video-card:hover .kco-video-media video,.kco-hero-card:hover .kco-hero-media img{transform:scale(1.03)}
.kco-hero-type{position:absolute;top:.65rem;left:.65rem;display:inline-flex;align-items:center;gap:.3rem;background:rgba(255,255,255,.96);backdrop-filter:blur(6px);color:#0f172a;font-size:10px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;padding:.28rem .6rem;border-radius:999px;border:1px solid #e2e8f0;box-shadow:0 2px 6px rgba(15,23,42,.12)}
.kco-hero-type svg{width:.8rem;height:.8rem;color:#475569}
.kco-hero-loc,.kco-video-loc{position:absolute;bottom:.65rem;left:.65rem;right:.65rem;display:flex;align-items:center;gap:.35rem;background:rgba(15,23,42,.62);backdrop-filter:blur(6px);color:#ffffff;font-size:11px;font-weight:600;padding:.32rem .65rem;border-radius:.7rem}
.kco-hero-loc svg,.kco-video-loc svg{width:.85rem;height:.85rem}
.kco-video-badge{position:absolute;top:.65rem;right:.65rem;display:inline-flex;align-items:center;gap:.3rem;font-size:10px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;padding:.28rem .6rem;border-radius:999px;box-shadow:0 2px 8px -2px rgba(0,0,0,.25)}
.kco-video-badge.kco-sale-buy{background:#059669;color:#ffffff}
.kco-video-badge.kco-sale-rent{background:#d97706;color:#ffffff}
.kco-video-badge svg{width:.8rem;height:.8rem}
.kco-video-bigplay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;opacity:1;transition:opacity .2s ease}
.kco-video-playcircle{width:2.75rem;height:2.75rem;border-radius:999px;background:rgba(255,255,255,.92);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;box-shadow:0 6px 16px -4px rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.8);transition:transform .18s ease}
.kco-video-playcircle svg{width:1.1rem;height:1.1rem;color:#2563eb;margin-left:.1rem}
.kco-video-card:hover .kco-video-bigplay,.kco-video-media.video-playing .kco-video-bigplay{opacity:0}
.kco-video-card:hover .kco-video-playcircle{transform:scale(1.08)}
.kco-video-body,.kco-hero-body{display:flex;flex-direction:column;gap:.5rem;padding:.85rem .9rem .95rem}
.kco-hero-price{display:flex;align-items:baseline;gap:.45rem;flex-wrap:wrap}
.kco-hero-price b{font-size:1.25rem;font-weight:900;color:#0f172a;line-height:1}
@media(min-width:640px){.kco-hero-price b{font-size:1.4rem}}
.kco-hero-price span{font-size:.72rem;font-weight:700;color:#64748b}
.kco-hero-title{font-size:.95rem;line-height:1.3;font-weight:700;color:#0f172a;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
@media(min-width:640px){.kco-hero-title{font-size:1.02rem}}
.kco-hero-chips{display:flex;flex-wrap:wrap;gap:.35rem}
.kco-hero-chip{display:inline-flex;align-items:center;gap:.3rem;font-size:10.5px;font-weight:700;color:#475569;background:#f8fafc;border:1px solid #e2e8f0;border-radius:.55rem;padding:.26rem .5rem}
.kco-hero-chip svg{width:.8rem;height:.8rem}
.kco-hero-btn{margin-top:.1rem;display:inline-flex;align-items:center;gap:.4rem;font-size:.8rem;font-weight:800;color:#2563eb;letter-spacing:.01em;text-decoration:none;align-self:flex-start;transition:color .15s ease}
.kco-hero-btn:hover{color:#1d4ed8}
.kco-hero-btn svg{width:.9rem;height:.9rem}
.kco-video-section .kco-video-body .kco-hero-price span{color:#059669;font-weight:800}
.kco-hero-empty{padding:1.2rem;text-align:center;color:#64748b;font-size:.85rem;font-weight:600;background:#f8fafc;border:1px dashed #cbd5e1;border-radius:1rem}
/* Explicit icon sizing — works even on pages without Tailwind (e.g. showroom.html) */
.kco-hero-section [data-lucide].w-3,.kco-video-section [data-lucide].w-3{width:.75rem;height:.75rem}
.kco-hero-section [data-lucide].w-3.5,.kco-video-section [data-lucide].w-3.5{width:.875rem;height:.875rem}
.kco-hero-section [data-lucide].w-4,.kco-video-section [data-lucide].w-4{width:1rem;height:1rem}
.kco-hero-section [data-lucide].w-5,.kco-video-section [data-lucide].w-5{width:1.25rem;height:1.25rem}
.kco-hero-section [data-lucide].shrink-0,.kco-video-section [data-lucide].shrink-0{flex-shrink:0}
`,document.head.appendChild(e)}function ae(e,o,t){R(e);const r=t,c=e.images&&e.images[0]||G,b=X(e.property_id||e.id),k=o==="vehicle"&&e.category==="Trucks"?N(e):V(e);let s="",p="";if(o==="house"){const B=D(e.country_code),w=[e.city,e.state].filter(Boolean).join(", ")||e.country||"";w&&(p=`<span class="kco-hero-loc"><i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>${a(B+" "+w)}</span>`);const d=[];i(e,"bedrooms")!=null&&d.push(`<span class="kco-hero-chip"><i data-lucide="bed-double" class="w-3.5 h-3.5"></i>${a(i(e,"bedrooms"))} Beds</span>`),i(e,"bathrooms")!=null&&d.push(`<span class="kco-hero-chip"><i data-lucide="bath" class="w-3.5 h-3.5"></i>${a(i(e,"bathrooms"))} Baths</span>`),e.land_size&&d.push(`<span class="kco-hero-chip"><i data-lucide="ruler" class="w-3.5 h-3.5"></i>${a(e.land_size)}</span>`),i(e,"building_size")&&d.push(`<span class="kco-hero-chip"><i data-lucide="building-2" class="w-3.5 h-3.5"></i>${a(i(e,"building_size"))}</span>`),i(e,"year_built")&&d.push(`<span class="kco-hero-chip"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${a(i(e,"year_built"))}</span>`);const I=K(e);return s=d.join(""),p||(p=""),`
      <a href="/product/${b}" class="${r}">
        <div class="kco-hero-media">
          <img src="${a(c)}" alt="${a(e.title||"")}" loading="lazy">
          <span class="kco-hero-type"><i data-lucide="home" class="w-3 h-3"></i>${a(I)}</span>
          ${p}
        </div>
        <div class="kco-hero-body">
          <div class="kco-hero-price"><b>${k}</b><span>${e.listing_status==="rent"?"per month · for rent":"for sale"}</span></div>
          <p class="kco-hero-title">${a(e.title||"")}</p>
          ${s?`<div class="kco-hero-chips">${s}</div>`:""}
          <span class="kco-hero-btn">View Property <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>`}const n=[];return i(e,"model_year")&&n.push(`<span class="kco-hero-chip"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${a(i(e,"model_year"))}</span>`),i(e,"mileage")&&n.push(`<span class="kco-hero-chip"><i data-lucide="gauge" class="w-3.5 h-3.5"></i>${a(i(e,"mileage"))}</span>`),i(e,"fuel_type")&&n.push(`<span class="kco-hero-chip"><i data-lucide="fuel" class="w-3.5 h-3.5"></i>${a(i(e,"fuel_type"))}</span>`),i(e,"transmission")&&n.push(`<span class="kco-hero-chip"><i data-lucide="cog" class="w-3.5 h-3.5"></i>${a(i(e,"transmission"))}</span>`),i(e,"body_type")&&n.push(`<span class="kco-hero-chip"><i data-lucide="car-front" class="w-3.5 h-3.5"></i>${a(i(e,"body_type"))}</span>`),s=n.join(""),`
      <a href="/product/${b}" class="${r}">
        <div class="kco-hero-media">
          <img src="${a(c)}" alt="${a(e.title||"")}" loading="lazy">
          <span class="kco-hero-type"><i data-lucide="car-front" class="w-3 h-3"></i>${a(J(e))}</span>
        </div>
        <div class="kco-hero-body">
          <div class="kco-hero-price"><b>${k}</b><span>· ${a(i(e,"condition")||"ready")}</span></div>
          <p class="kco-hero-title">${a(e.title||"")}</p>
          ${s?`<div class="kco-hero-chips">${s}</div>`:""}
          <span class="kco-hero-btn">View Vehicle <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>`}function X(e){return String(e??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function J(e){const o=String(e.category||""),t={Cars:"Car","Cars & Vehicles":"Car",Trucks:"Truck",Buses:"Bus","Buses & Coaches":"Bus",Motorhomes:"Motorhome / RV",Motorcycles:"Motorcycle","Marine & Boating":"Boat / Marine"};return t[o]?t[o]:i(e,"body_type")||o||"Vehicle"}function h(){const e=document.getElementById(z);if(!e)return;Y();const o=document.createDocumentFragment();e.replaceChildren(o),window.lucide&&lucide.createIcons()}let C=!1;function E(){C||(C=!0,document.getElementById(z)&&(A(),h(),M().then(()=>h()).catch(()=>{}),window.addEventListener("showroom-categories-ready",()=>h()),window.addEventListener("kco-db-refresh",()=>h())))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",E):E();export{te as a,K as b,ae as c,re as g,Y as h,J as v};
