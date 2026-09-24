import{h as W,a as G,S as U,c as q,b as Y,d as K,e as O}from"./showroom-data-pMxrWZ9A.js";import{P as V,a as B,T as X,M as J,f as Q}from"./motorhome-data-CupbOvk0.js";import{isCatalogListingHidden as E}from"./catalog-hidden-store-DQ-29SYy.js";const v=".showroom-card video, [data-showroom-grid] video, .kco-video-section video, .kco-video-el, .kco-hero-media video",Z="#video-tour-modal video";function m(e){return!!(e&&e.matches&&e.matches(v)&&!e.closest(Z))}const T=600;function R(e){if(m(e)){if(e.setAttribute("muted",""),e.setAttribute("loop",""),e.setAttribute("autoplay",""),e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.loop=!0,e.playsInline=!0,e.autoplay=!0,e.ended)try{e.currentTime=0}catch{}e.paused&&e.play().catch(()=>{})}}function ee(e){if(!e.paused)try{e.pause()}catch{}}const g=typeof WeakSet<"u"?new WeakSet:null,l=typeof WeakMap<"u"?new WeakMap:null;let h=null;function oe(){h||typeof IntersectionObserver>"u"||(h=new IntersectionObserver(e=>{for(const o of e){const r=o.target;m(r)&&(o.isIntersecting?(l&&l.set(r,!0),R(r)):(l&&l.set(r,!1),ee(r)))}},{rootMargin:`${T}px 0px ${T}px 0px`}))}function y(e){if(m(e)){if(oe(),!h){R(e);return}g&&g.has(e)||(g&&g.add(e),h.observe(e))}}function L(e){!e||!e.querySelectorAll||e.querySelectorAll(v).forEach(y)}document.addEventListener("ended",e=>{const o=e.target;if(o&&o.tagName==="VIDEO"&&m(o)&&h&&(l?l.get(o):!0)!==!1){try{o.currentTime=0}catch{}o.play().catch(()=>{})}},!0);const H="MutationObserver"in window?new MutationObserver(e=>{for(const o of e)for(const r of o.addedNodes)!r||r.nodeType!==1||(r.matches&&m(r)&&y(r),r.querySelectorAll&&r.querySelectorAll(v).forEach(y))}):null;function I(){if(typeof IntersectionObserver>"u"){const e=()=>{L(document),setTimeout(e,2e3)};e();return}L(document),H&&document.body&&H.observe(document.body,{childList:!0,subtree:!0})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",I):I();const j="kco-hero-rows",re=new Set(["Cars","Cars & Vehicles","Trucks","Buses","Buses & Coaches","Motorhomes","Motorcycles","Marine & Boating","RV & Camper Accessories","Vehicles"]),k=new Set(["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","House","Homes","Duplex","Penthouse","Bungalow","Cottage","Chalet","Studio","Loft"]),te=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","House","Homes","Duplex","Penthouse","Bungalow","Cottage","Chalet","Studio","Loft"];function i(e,o){return e.specifications&&typeof e.specifications=="object"&&e.specifications[o]!=null?e.specifications[o]:e[o]}function z(e){return e.listing_type==="vehicle"||re.has(e.category)}function f(e){return!e||typeof e!="string"?!1:/^data:video\//i.test(e)?!0:e.startsWith("blob:")?!1:/\.(mp4|webm|mov|m4v|avi|mkv|ogv)(\?|#|$)/i.test(e)}function ie(e){if(!e)return null;for(const o of[e.video,e.video_url])if(f(o))return o;if(Array.isArray(e.images)){for(const o of e.images)if(f(o))return o}return null}function ae(e){if(Array.isArray(e.images)){const o=e.images.find(r=>!f(r));if(o)return o}return""}function ce(e){const o=new Set,r=[];for(const t of e){if(!t)continue;const c=t.property_id||t.id;!c||o.has(c)||(o.add(c),r.push(t))}return r}function D(e){return ce(e).filter(o=>E&&E(o.property_id)?!1:o.property_id&&String(o.property_id).startsWith("W")?!0:o.is_active!==!1).sort((o,r)=>{const t=Number.isFinite(parseFloat(o.price))?parseFloat(o.price):0;return(Number.isFinite(parseFloat(r.price))?parseFloat(r.price):0)-t})}function se(e){const o=e.property_type||e.subcategory||e.category;if(o&&!p.has(o)){const r=String(o).toLowerCase();for(const t of te)if(r===t.toLowerCase()||r.includes(t.toLowerCase())){p.set(o,t);break}p.has(o)||p.set(o,String(o))}return o?p.get(o):"Homes"}const p=new Map;function me(){const o=(O()||[]).filter(t=>t.listing_type==="property"||t.category==="Real Estate"||t.category==="Houses & Real Estate"||k.has(t.property_type)||k.has(t.subcategory)),r=[...V,...B,...U].filter(t=>t&&(t.category==="Houses & Real Estate"||t.category==="Real Estate"||k.has(t.property_type||t.subcategory)));return D([...o,...r])}function ue(){const o=(O()||[]).filter(t=>z(t)),r=[...X,...J,...V,...B].filter(t=>t&&z(t));return D([...o,...r])}function a(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ne(){if(document.getElementById("kco-hero-styles"))return;const e=document.createElement("style");e.id="kco-hero-styles",e.textContent=`
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
.kco-video-media img,.kco-video-media video,.kco-hero-media img,.kco-hero-media video{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s ease}
.kco-video-card:hover .kco-video-media img,.kco-video-card:hover .kco-video-media video,.kco-hero-card:hover .kco-hero-media img,.kco-hero-card:hover .kco-hero-media video{transform:scale(1.03)}
.kco-hero-type{position:absolute;top:.65rem;left:.65rem;display:inline-flex;align-items:center;gap:.3rem;background:rgba(255,255,255,.96);backdrop-filter:blur(6px);color:#0f172a;font-size:10px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;padding:.28rem .6rem;border-radius:999px;border:1px solid #e2e8f0;box-shadow:0 2px 6px rgba(15,23,42,.12)}
.kco-hero-type svg{width:.8rem;height:.8rem;color:#475569}
.kco-hero-video-badge{position:absolute;top:.65rem;right:.65rem;display:inline-flex;align-items:center;gap:.3rem;background:rgba(239,68,68,.92);backdrop-filter:blur(6px);color:#ffffff;font-size:10px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;padding:.3rem .6rem;border-radius:999px;box-shadow:0 2px 8px rgba(239,68,68,.45)}
.kco-hero-video-badge svg{width:.75rem;height:.75rem}
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
`,document.head.appendChild(e)}function ge(e,o,r){q(e);const t=r,c=ie(e)||"",x=ae(e),S=x?` poster="${a(x)}"`:"",_=w(e.property_id||e.id),$=o==="vehicle"&&e.category==="Trucks"?Q(e):Y(e);let s="",u="";if(o==="house"){const P=K(e.country_code),C=[e.city,e.state].filter(Boolean).join(", ")||e.country||"";C&&(u=`<span class="kco-hero-loc"><i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>${a(P+" "+C)}</span>`);const d=[];i(e,"bedrooms")!=null&&d.push(`<span class="kco-hero-chip"><i data-lucide="bed-double" class="w-3.5 h-3.5"></i>${a(i(e,"bedrooms"))} Beds</span>`),i(e,"bathrooms")!=null&&d.push(`<span class="kco-hero-chip"><i data-lucide="bath" class="w-3.5 h-3.5"></i>${a(i(e,"bathrooms"))} Baths</span>`),e.land_size&&d.push(`<span class="kco-hero-chip"><i data-lucide="ruler" class="w-3.5 h-3.5"></i>${a(e.land_size)}</span>`),i(e,"building_size")&&d.push(`<span class="kco-hero-chip"><i data-lucide="building-2" class="w-3.5 h-3.5"></i>${a(i(e,"building_size"))}</span>`),i(e,"year_built")&&d.push(`<span class="kco-hero-chip"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${a(i(e,"year_built"))}</span>`);const F=se(e);return s=d.join(""),u||(u=""),`
      <a href="/details.html?id=${w(_)}" class="${t}">
        <div class="kco-hero-media">
          ${f(c)?`<video src="${a(c)}"${S} muted loop autoplay playsinline preload="metadata" class="kco-hero-media-video"></video><span class="kco-hero-video-badge"><i data-lucide="play" class="w-3 h-3"></i>Video Tour</span>`:'<div class="w-full h-full flex items-center justify-center bg-gray-100"><i data-lucide="video-off" class="w-8 h-8 text-gray-300"></i></div>'}
          <span class="kco-hero-type"><i data-lucide="home" class="w-3 h-3"></i>${a(F)}</span>
          ${u}
        </div>
        <div class="kco-hero-body">
          <div class="kco-hero-price"><b>${$}</b><span>${e.listing_status==="rent"?"per month · for rent":"for sale"}</span></div>
          <p class="kco-hero-title">${a(e.title||"")}</p>
          ${s?`<div class="kco-hero-chips">${s}</div>`:""}
          <span class="kco-hero-btn">View Property <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>`}const n=[];i(e,"model_year")&&n.push(`<span class="kco-hero-chip"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${a(i(e,"model_year"))}</span>`),i(e,"mileage")&&n.push(`<span class="kco-hero-chip"><i data-lucide="gauge" class="w-3.5 h-3.5"></i>${a(i(e,"mileage"))}</span>`),i(e,"fuel_type")&&n.push(`<span class="kco-hero-chip"><i data-lucide="fuel" class="w-3.5 h-3.5"></i>${a(i(e,"fuel_type"))}</span>`),i(e,"transmission")&&n.push(`<span class="kco-hero-chip"><i data-lucide="cog" class="w-3.5 h-3.5"></i>${a(i(e,"transmission"))}</span>`),i(e,"body_type")&&n.push(`<span class="kco-hero-chip"><i data-lucide="car-front" class="w-3.5 h-3.5"></i>${a(i(e,"body_type"))}</span>`),s=n.join("");const N=f(c)?`<video src="${a(c)}"${S} muted loop autoplay playsinline preload="metadata" class="kco-hero-media-video"></video><span class="kco-hero-video-badge"><i data-lucide="play" class="w-3 h-3"></i>Video Tour</span>`:'<div class="w-full h-full flex items-center justify-center bg-gray-100"><i data-lucide="video-off" class="w-8 h-8 text-gray-300"></i></div>';return`
      <a href="/details.html?id=${w(_)}" class="${t}">
        <div class="kco-hero-media">
          ${N}
          <span class="kco-hero-type"><i data-lucide="car-front" class="w-3 h-3"></i>${a(de(e))}</span>
        </div>
        <div class="kco-hero-body">
          <div class="kco-hero-price"><b>${$}</b><span>· ${a(i(e,"condition")||"ready")}</span></div>
          <p class="kco-hero-title">${a(e.title||"")}</p>
          ${s?`<div class="kco-hero-chips">${s}</div>`:""}
          <span class="kco-hero-btn">View Vehicle <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>`}function w(e){return String(e??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function de(e){const o=String(e.category||""),r={Cars:"Car","Cars & Vehicles":"Car",Trucks:"Truck",Buses:"Bus","Buses & Coaches":"Bus",Motorhomes:"Motorhome / RV",Motorcycles:"Motorcycle","Marine & Boating":"Boat / Marine"};return r[o]?r[o]:i(e,"body_type")||o||"Vehicle"}function b(){const e=document.getElementById(j);if(!e)return;ne();const o=document.createDocumentFragment();e.replaceChildren(o),window.lucide&&lucide.createIcons()}let A=!1;function M(){A||(A=!0,document.getElementById(j)&&(W(),b(),G().then(()=>b()).catch(()=>{}),window.addEventListener("showroom-categories-ready",()=>b()),window.addEventListener("kco-db-refresh",()=>b())))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",M):M();export{ue as a,se as b,ge as c,me as g,ne as h,de as v};
