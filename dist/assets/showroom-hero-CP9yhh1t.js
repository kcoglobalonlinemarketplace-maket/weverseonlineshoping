import{h as P,a as D,e as _,c as E,b as C,d as H,S as N}from"./showroom-data-Dx7pQsXv.js";import{T as W,M as q,P as B,a as z,f as G}from"./motorhome-data-CupbOvk0.js";import{isCatalogListingHidden as x}from"./catalog-hidden-store-CPivWtWH.js";const T="kco-hero-rows",A="/fallback.svg",U=new Set(["Cars","Cars & Vehicles","Trucks","Buses","Buses & Coaches","Motorhomes","Motorcycles","Marine & Boating","RV & Camper Accessories","Vehicles"]),v=new Set(["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","House","Homes","Duplex","Penthouse","Bungalow","Cottage","Chalet","Studio","Loft"]),X=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","House","Homes","Duplex","Penthouse","Bungalow","Cottage","Chalet","Studio","Loft"];function c(e,o){return e.specifications&&typeof e.specifications=="object"&&e.specifications[o]!=null?e.specifications[o]:e[o]}function $(e){return e.listing_type==="vehicle"||U.has(e.category)}function w(e){return!e||typeof e!="string"?!1:/^data:video\//i.test(e)?!0:e.startsWith("blob:")?!1:/\.(mp4|webm|mov|m4v|avi|mkv|ogv)(\?|#|$)/i.test(e)}function V(e){if(!e)return null;for(const o of[e.video,e.video_url])if(w(o))return o;if(Array.isArray(e.images)){for(const o of e.images)if(w(o))return o}return null}function K(e){if(Array.isArray(e.images)){for(const o of e.images)if(!w(o))return o}return A}function Y(){const e=new Set,o=new Set,t=[];for(const r of oe()){if(!r)continue;const a=r.property_id||r.id;if(!a||e.has(a))continue;const d=V(r);d&&(o.has(d)||(e.add(a),o.add(d),t.push(r)))}return t}function J(e){E(e);const o=R(e.property_id||e.id),t=V(e),r=K(e),a=C(e),d=M(e),n=H(e.country_code),s=[e.city,e.state].filter(Boolean).join(", ")||e.country||"",l=s?`<span class="kco-video-loc"><i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>${i(n?n+" "+s:s)}</span>`:"",h=e.listing_status==="rent",k=h?"kco-sale-rent":"kco-sale-buy",u=h?"For Rent":"For Sale",p=c(e,"bedrooms")!=null?`<span class="kco-hero-chip"><i data-lucide="bed-double" class="w-3.5 h-3.5"></i>${i(c(e,"bedrooms"))} Bed${Number(c(e,"bedrooms"))===1?"":"s"}</span>`:"",m=c(e,"bathrooms")!=null?`<span class="kco-hero-chip"><i data-lucide="bath" class="w-3.5 h-3.5"></i>${i(c(e,"bathrooms"))} Bath${Number(c(e,"bathrooms"))===1?"":"s"}</span>`:"",g=c(e,"building_size")?`<span class="kco-hero-chip"><i data-lucide="building-2" class="w-3.5 h-3.5"></i>${i(c(e,"building_size"))}</span>`:"",y=e.land_size?`<span class="kco-hero-chip"><i data-lucide="ruler" class="w-3.5 h-3.5"></i>${i(e.land_size)}</span>`:"";return`
    <a href="/product/${o}" class="kco-video-card">
      <div class="kco-video-media">
        <video src="${i(t)}" poster="${i(r)}" muted loop playsinline preload="metadata" class="kco-video-el" data-detail-href="/product/${o}" aria-label="${i(e.title||"")}">
          <source src="${i(t)}">
        </video>
        <div class="kco-video-bigplay"><span class="kco-video-playcircle"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></div>
        <span class="kco-hero-type"><i data-lucide="home" class="w-3 h-3"></i>${i(d)}</span>
        <span class="kco-video-badge ${k}">${u}</span>
        ${l}
      </div>
      <div class="kco-video-body">
        <div class="kco-hero-price"><b>${a}</b><span>${h?"per month · for rent":"for sale"}</span></div>
        <p class="kco-hero-title">${i(e.title||"")}</p>
        ${p||m||g||y?`<div class="kco-hero-chips">${p}${m}${g}${y}</div>`:""}
        <span class="kco-hero-btn">View Home &amp; Watch Tour <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
      </div>
    </a>`}function Q(e){const o="IntersectionObserver"in window?new IntersectionObserver(t=>{for(const r of t){const a=r.target;if(!(!a||typeof a.play!="function"))if(r.isIntersecting)a.play().catch(()=>{});else try{a.pause()}catch{}}},{rootMargin:"120px"}):null;e.querySelectorAll(".kco-video-el").forEach(t=>{t.addEventListener("click",r=>{t.paused&&(t.play().catch(()=>{}),r.preventDefault(),r.stopPropagation())}),o&&o.observe(t)}),Object.defineProperty(e,"_kcoVideoIO",{value:o,configurable:!0}),"_kcoVideoCleanup"in e||Object.defineProperty(e,"_kcoVideoCleanup",{value:()=>o&&o.disconnect(),configurable:!0})}function Z(){const e=Y();if(!e.length)return document.createDocumentFragment();const o=document.createElement("section");o.className="kco-hero-section kco-video-section",o.setAttribute("aria-label","Houses For Sale & Rent — Video Tours"),o.setAttribute("data-property-videos","true");const t=`
    <div class="kco-hero-panel kco-video-panel">
      <div class="kco-video-promo">
        <div class="kco-video-copy">
          <span class="kco-video-eyebrow"><i data-lucide="home" class="w-3 h-3"></i> Real Estate</span>
          <h3 class="kco-video-h3">HOUSES FOR SALE &amp; RENT</h3>
          <p>Find homes, apartments, and villas available for sale or rent directly from us. Many listings include a video tour so you can see the property clearly.</p>
        </div>
        <div class="kco-video-actions">
          <span class="kco-hero-count"><b>${e.length}</b> Listing${e.length===1?"":"s"}</span>
          <a class="kco-hero-seeall" href="/showroom.html?cat=real-estate">SEE MORE HOMES <i data-lucide="arrow-up-right" class="w-4 h-4"></i></a>
        </div>
      </div>
      <div class="kco-video-carousel">
        <div class="kco-video-hscroll">
          ${e.map(s=>J(s)).join("")}
        </div>
        <button class="kco-hero-arrow left" aria-label="Scroll Houses For Sale left">${F}</button>
        <button class="kco-hero-arrow right" aria-label="Scroll Houses For Sale right">${j}</button>
      </div>
    </div>`;o.innerHTML=t;const r=o.querySelector(".kco-video-hscroll");O(r);const a=o.querySelector(".kco-hero-arrow.left"),d=o.querySelector(".kco-hero-arrow.right"),n=()=>{const s=r.scrollWidth-r.clientWidth-2;a.disabled=r.scrollLeft<=2,d.disabled=r.scrollLeft>=s};return a.addEventListener("click",()=>r.scrollBy({left:-r.clientWidth*.8,behavior:"smooth"})),d.addEventListener("click",()=>r.scrollBy({left:r.clientWidth*.8,behavior:"smooth"})),r.addEventListener("scroll",n,{passive:!0}),n(),document.addEventListener("visibilitychange",()=>{document.hidden&&o.querySelectorAll(".kco-video-el").forEach(s=>{try{s.pause()}catch{}})}),requestAnimationFrame(()=>Q(o)),window.lucide&&lucide.createIcons(),o}function ee(e){const o=new Set,t=[];for(const r of e){if(!r)continue;const a=r.property_id||r.id;!a||o.has(a)||(o.add(a),t.push(r))}return t}function I(e){return ee(e).filter(o=>x&&x(o.property_id)?!1:o.property_id&&String(o.property_id).startsWith("W")?!0:o.is_active!==!1).sort((o,t)=>{const r=Number.isFinite(parseFloat(o.price))?parseFloat(o.price):0;return(Number.isFinite(parseFloat(t.price))?parseFloat(t.price):0)-r})}function M(e){const o=e.property_type||e.subcategory||e.category;if(o&&!f.has(o)){const t=String(o).toLowerCase();for(const r of X)if(t===r.toLowerCase()||t.includes(r.toLowerCase())){f.set(o,r);break}f.has(o)||f.set(o,String(o))}return o?f.get(o):"Homes"}const f=new Map;function oe(){const o=(_()||[]).filter(r=>r.listing_type==="property"||r.category==="Real Estate"||r.category==="Houses & Real Estate"||v.has(r.property_type)||v.has(r.subcategory)),t=[...B,...z,...N].filter(r=>r&&(r.category==="Houses & Real Estate"||r.category==="Real Estate"||v.has(r.property_type||r.subcategory)));return I([...o,...t])}function re(){const o=(_()||[]).filter(r=>$(r)),t=[...W,...q,...B,...z].filter(r=>r&&$(r));return I([...o,...t])}function i(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function te(){if(document.getElementById("kco-hero-styles"))return;const e=document.createElement("style");e.id="kco-hero-styles",e.textContent=`
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
`,document.head.appendChild(e)}function ae(e,o,t){E(e);const r=t||"kco-hero-card",a=e.images&&e.images[0]||A,d=R(e.property_id||e.id),n=o==="vehicle"&&e.category==="Trucks"?G(e):C(e);let s="",l="";if(o==="house"){const k=H(e.country_code),u=[e.city,e.state].filter(Boolean).join(", ")||e.country||"";u&&(l=`<span class="kco-hero-loc"><i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>${i(k+" "+u)}</span>`);const p=[];c(e,"bedrooms")!=null&&p.push(`<span class="kco-hero-chip"><i data-lucide="bed-double" class="w-3.5 h-3.5"></i>${i(c(e,"bedrooms"))} Beds</span>`),c(e,"bathrooms")!=null&&p.push(`<span class="kco-hero-chip"><i data-lucide="bath" class="w-3.5 h-3.5"></i>${i(c(e,"bathrooms"))} Baths</span>`),e.land_size&&p.push(`<span class="kco-hero-chip"><i data-lucide="ruler" class="w-3.5 h-3.5"></i>${i(e.land_size)}</span>`),c(e,"building_size")&&p.push(`<span class="kco-hero-chip"><i data-lucide="building-2" class="w-3.5 h-3.5"></i>${i(c(e,"building_size"))}</span>`),c(e,"year_built")&&p.push(`<span class="kco-hero-chip"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${i(c(e,"year_built"))}</span>`);const m=M(e);return s=p.join(""),l||(l=""),`
      <a href="/product/${d}" class="${r}">
        <div class="kco-hero-media">
          <img src="${i(a)}" alt="${i(e.title||"")}" loading="lazy">
          <span class="kco-hero-type"><i data-lucide="home" class="w-3 h-3"></i>${i(m)}</span>
          ${l}
        </div>
        <div class="kco-hero-body">
          <div class="kco-hero-price"><b>${n}</b><span>${e.listing_status==="rent"?"per month · for rent":"for sale"}</span></div>
          <p class="kco-hero-title">${i(e.title||"")}</p>
          ${s?`<div class="kco-hero-chips">${s}</div>`:""}
          <span class="kco-hero-btn">View Property <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>`}const h=[];return c(e,"model_year")&&h.push(`<span class="kco-hero-chip"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${i(c(e,"model_year"))}</span>`),c(e,"mileage")&&h.push(`<span class="kco-hero-chip"><i data-lucide="gauge" class="w-3.5 h-3.5"></i>${i(c(e,"mileage"))}</span>`),c(e,"fuel_type")&&h.push(`<span class="kco-hero-chip"><i data-lucide="fuel" class="w-3.5 h-3.5"></i>${i(c(e,"fuel_type"))}</span>`),c(e,"transmission")&&h.push(`<span class="kco-hero-chip"><i data-lucide="cog" class="w-3.5 h-3.5"></i>${i(c(e,"transmission"))}</span>`),c(e,"body_type")&&h.push(`<span class="kco-hero-chip"><i data-lucide="car-front" class="w-3.5 h-3.5"></i>${i(c(e,"body_type"))}</span>`),s=h.join(""),`
      <a href="/product/${d}" class="${r}">
        <div class="kco-hero-media">
          <img src="${i(a)}" alt="${i(e.title||"")}" loading="lazy">
          <span class="kco-hero-type"><i data-lucide="car-front" class="w-3 h-3"></i>${i(ie(e))}</span>
        </div>
        <div class="kco-hero-body">
          <div class="kco-hero-price"><b>${n}</b><span>· ${i(c(e,"condition")||"ready")}</span></div>
          <p class="kco-hero-title">${i(e.title||"")}</p>
          ${s?`<div class="kco-hero-chips">${s}</div>`:""}
          <span class="kco-hero-btn">View Vehicle <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>`}function R(e){return String(e??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ie(e){const o=String(e.category||""),t={Cars:"Car","Cars & Vehicles":"Car",Trucks:"Truck",Buses:"Bus","Buses & Coaches":"Bus",Motorhomes:"Motorhome / RV",Motorcycles:"Motorcycle","Marine & Boating":"Boat / Marine"};return t[o]?t[o]:c(e,"body_type")||o||"Vehicle"}function ce(e){return`<i data-lucide="${e}" class="w-5 h-5"></i>`}function O(e){let o=!1,t=!1,r=0,a=0;e.addEventListener("pointerdown",n=>{o=!0,t=!1,r=n.clientX,a=e.scrollLeft,e.classList.add("dragging");try{e.setPointerCapture(n.pointerId)}catch{}}),e.addEventListener("pointermove",n=>{if(!o)return;const s=n.clientX-r;Math.abs(s)>5&&(t=!0),e.scrollLeft=a-s});const d=()=>{o=!1,e.classList.remove("dragging")};e.addEventListener("pointerup",d),e.addEventListener("pointercancel",d),e.addEventListener("pointerleave",d),e.addEventListener("click",n=>{t&&(n.preventDefault(),n.stopPropagation())},!0)}function se(e){const o=document.createElement("section");o.className=`kco-hero-section ${e.kindCls}`,o.setAttribute("aria-label",e.title);const t=`
    <button class="kco-hero-arrow left" aria-label="Scroll ${e.title} left">${F}</button>
    <button class="kco-hero-arrow right" aria-label="Scroll ${e.title} right">${j}</button>`,r=`
    <div class="kco-hero-panel">
      <div class="kco-hero-head">
        <div class="kco-hero-headleft">
          ${e.icon?`<span class="kco-hero-ic">${ce(e.icon)}</span>`:""}
          <div class="min-w-0">
            <h3>${i(e.title)}</h3>
            <p>${i(e.subtitle)}</p>
          </div>
        </div>
        <span class="kco-hero-count">${e.listings.length} Listing${e.listings.length===1?"":"s"}</span>
        ${e.seeAll?`<a class="kco-hero-seeall" href="/showroom.html?cat=${e.cat}">${i(e.seeAllLabel||"See All")} <i data-lucide="arrow-up-right" class="w-4 h-4"></i></a>`:""}
      </div>
      <div class="kco-hero-hscroll">
        ${e.listings.length?e.listings.map(l=>e.card(l)).join(""):'<div class="kco-hero-empty">New listings will appear here as soon as they are published.</div>'}
      </div>
      ${t}
    </div>`;o.innerHTML=r;const a=o.querySelector(".kco-hero-hscroll");O(a);const d=o.querySelector(".kco-hero-arrow.left"),n=o.querySelector(".kco-hero-arrow.right"),s=()=>{const l=a.scrollWidth-a.clientWidth-2;d.disabled=a.scrollLeft<=2,n.disabled=a.scrollLeft>=l};return d.addEventListener("click",()=>a.scrollBy({left:-a.clientWidth*.8,behavior:"smooth"})),n.addEventListener("click",()=>a.scrollBy({left:a.clientWidth*.8,behavior:"smooth"})),a.addEventListener("scroll",s,{passive:!0}),s(),o}const F='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',j='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';function b(){const e=document.getElementById(T);if(!e)return;te();const o=re(),t=document.createDocumentFragment();t.appendChild(Z()),t.appendChild(se({kindCls:"kco-hero-veh",title:"Cars & Trucks",subtitle:"Browse new and used cars, trucks, buses and motorhomes listed by their sellers.",icon:"car-front",cat:"cars-trucks",seeAll:!0,seeAllLabel:"See All Vehicles",listings:o,card:r=>ae(r,"vehicle")})),e.replaceChildren(t),window.lucide&&lucide.createIcons()}let S=!1;function L(){S||(S=!0,document.getElementById(T)&&(P(),b(),D().then(()=>b()).catch(()=>{}),window.addEventListener("showroom-categories-ready",()=>b()),window.addEventListener("kco-db-refresh",()=>b())))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",L):L();export{re as a,M as b,ae as c,Z as d,oe as g,te as h,ie as v};
