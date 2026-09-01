import{h as F,a as D,e as L,c as C,b as E,d as H,S as N}from"./showroom-data-Dx7pQsXv.js";import{T as W,M as q,P as z,a as B,f as G}from"./motorhome-data-CupbOvk0.js";import{isCatalogListingHidden as y}from"./catalog-hidden-store-CPivWtWH.js";const T="kco-hero-rows",V="/fallback.svg",U=new Set(["Cars","Cars & Vehicles","Trucks","Buses","Buses & Coaches","Motorhomes","Motorcycles","Marine & Boating","RV & Camper Accessories","Vehicles"]),v=new Set(["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","House","Homes","Duplex","Penthouse","Bungalow","Cottage","Chalet","Studio","Loft"]),Y=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","House","Homes","Duplex","Penthouse","Bungalow","Cottage","Chalet","Studio","Loft"];function s(e,o){return e.specifications&&typeof e.specifications=="object"&&e.specifications[o]!=null?e.specifications[o]:e[o]}function $(e){return e.listing_type==="vehicle"||U.has(e.category)}function w(e){return!e||typeof e!="string"?!1:/^data:video\//i.test(e)?!0:e.startsWith("blob:")?!1:/\.(mp4|webm|mov|m4v|avi|mkv|ogv)(\?|#|$)/i.test(e)}function A(e){if(!e)return null;for(const o of[e.video,e.video_url])if(w(o))return o;if(Array.isArray(e.images)){for(const o of e.images)if(w(o))return o}return null}function X(e){if(Array.isArray(e.images)){for(const o of e.images)if(!w(o))return o}return V}function K(){const e=new Set,o=new Set,t=[];for(const r of oe()){if(!r)continue;const a=r.property_id||r.id;if(!a||e.has(a))continue;const d=A(r);d&&(o.has(d)||(e.add(a),o.add(d),t.push(r)))}return t}function J(e){C(e);const o=M(e.property_id||e.id),t=A(e),r=X(e),a=E(e),d=R(e),n=H(e.country_code),c=[e.city,e.state].filter(Boolean).join(", ")||e.country||"",l=c?`<span class="kco-video-loc"><i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>${i(n?n+" "+c:c)}</span>`:"",p=e.listing_status==="rent",g=p?"kco-sale-rent":"kco-sale-buy",u=p?"For Rent":"For Sale",h=s(e,"bedrooms")!=null?`<span class="kco-hero-chip"><i data-lucide="bed-double" class="w-3.5 h-3.5"></i>${i(s(e,"bedrooms"))} Bed${Number(s(e,"bedrooms"))===1?"":"s"}</span>`:"",m=s(e,"bathrooms")!=null?`<span class="kco-hero-chip"><i data-lucide="bath" class="w-3.5 h-3.5"></i>${i(s(e,"bathrooms"))} Bath${Number(s(e,"bathrooms"))===1?"":"s"}</span>`:"",k=s(e,"building_size")?`<span class="kco-hero-chip"><i data-lucide="building-2" class="w-3.5 h-3.5"></i>${i(s(e,"building_size"))}</span>`:"",x=e.land_size?`<span class="kco-hero-chip"><i data-lucide="ruler" class="w-3.5 h-3.5"></i>${i(e.land_size)}</span>`:"";return`
    <a href="/details.html?id=${o}" class="kco-video-card">
      <div class="kco-video-media">
        <video src="${i(t)}" poster="${i(r)}" muted loop playsinline preload="metadata" class="kco-video-el" data-detail-href="/details.html?id=${o}" aria-label="${i(e.title||"")}">
          <source src="${i(t)}">
        </video>
        <div class="kco-video-bigplay"><span class="kco-video-playcircle"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></div>
        <span class="kco-hero-type"><i data-lucide="home" class="w-3 h-3"></i>${i(d)}</span>
        <span class="kco-video-badge ${g}">${u}</span>
        ${l}
      </div>
      <div class="kco-video-body">
        <div class="kco-hero-price"><b>${a}</b><span>${p?"per month · for rent":"for sale"}</span></div>
        <p class="kco-hero-title">${i(e.title||"")}</p>
        ${h||m||k||x?`<div class="kco-hero-chips">${h}${m}${k}${x}</div>`:""}
        <span class="kco-hero-btn">View Home &amp; Watch Tour <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
      </div>
    </a>`}function Q(e){const o="IntersectionObserver"in window?new IntersectionObserver(t=>{for(const r of t){const a=r.target;if(!(!a||typeof a.play!="function"))if(r.isIntersecting)a.play().catch(()=>{});else try{a.pause()}catch{}}},{rootMargin:"120px"}):null;e.querySelectorAll(".kco-video-el").forEach(t=>{t.addEventListener("click",r=>{t.paused&&(t.play().catch(()=>{}),r.preventDefault(),r.stopPropagation())}),o&&o.observe(t)}),Object.defineProperty(e,"_kcoVideoIO",{value:o,configurable:!0}),"_kcoVideoCleanup"in e||Object.defineProperty(e,"_kcoVideoCleanup",{value:()=>o&&o.disconnect(),configurable:!0})}function Z(){const e=K();if(!e.length)return document.createDocumentFragment();const o=document.createElement("section");o.className="kco-hero-section kco-video-section",o.setAttribute("aria-label","Houses and Real Estate Video Tours"),o.setAttribute("data-property-videos","true");const t=`
    <div class="kco-hero-panel kco-video-panel">
      <div class="kco-video-promo">
        <div class="kco-video-copy">
          <span class="kco-video-eyebrow">Real Estate</span>
          <h3 class="kco-video-h3">Houses and Real Estate Video Tours</h3>
          <p>Watch every home, apartment, villa &amp; mansion on video.</p>
        </div>
        <div class="kco-video-actions">
          <span class="kco-hero-count"><b>${e.length}</b> Homes</span>
          <a class="kco-hero-seeall" href="/showroom.html?cat=real-estate">See More Homes <i data-lucide="arrow-up-right" class="w-4 h-4"></i></a>
        </div>
      </div>
      <div class="kco-video-carousel">
        <div class="kco-video-hscroll">
          ${e.map(c=>J(c)).join("")}
        </div>
        <button class="kco-hero-arrow left" aria-label="Scroll Houses and Real Estate Video Tours left">${O}</button>
        <button class="kco-hero-arrow right" aria-label="Scroll Houses and Real Estate Video Tours right">${P}</button>
      </div>
    </div>`;o.innerHTML=t;const r=o.querySelector(".kco-video-hscroll");j(r);const a=o.querySelector(".kco-hero-arrow.left"),d=o.querySelector(".kco-hero-arrow.right"),n=()=>{const c=r.scrollWidth-r.clientWidth-2;a.disabled=r.scrollLeft<=2,d.disabled=r.scrollLeft>=c};return a.addEventListener("click",()=>r.scrollBy({left:-r.clientWidth*.8,behavior:"smooth"})),d.addEventListener("click",()=>r.scrollBy({left:r.clientWidth*.8,behavior:"smooth"})),r.addEventListener("scroll",n,{passive:!0}),n(),document.addEventListener("visibilitychange",()=>{document.hidden&&o.querySelectorAll(".kco-video-el").forEach(c=>{try{c.pause()}catch{}})}),requestAnimationFrame(()=>Q(o)),window.lucide&&lucide.createIcons(),o}function ee(e){const o=new Set,t=[];for(const r of e){if(!r)continue;const a=r.property_id||r.id;!a||o.has(a)||(o.add(a),t.push(r))}return t}function I(e){return ee(e).filter(o=>y&&y(o.property_id)?!1:o.property_id&&String(o.property_id).startsWith("W")?!0:o.is_active!==!1).sort((o,t)=>{const r=Number.isFinite(parseFloat(o.price))?parseFloat(o.price):0;return(Number.isFinite(parseFloat(t.price))?parseFloat(t.price):0)-r})}function R(e){const o=e.property_type||e.subcategory||e.category;if(o&&!f.has(o)){const t=String(o).toLowerCase();for(const r of Y)if(t===r.toLowerCase()||t.includes(r.toLowerCase())){f.set(o,r);break}f.has(o)||f.set(o,String(o))}return o?f.get(o):"Homes"}const f=new Map;function oe(){const o=(L()||[]).filter(r=>r.listing_type==="property"||r.category==="Real Estate"||r.category==="Houses & Real Estate"||v.has(r.property_type)||v.has(r.subcategory)),t=[...z,...B,...N].filter(r=>r&&(r.category==="Houses & Real Estate"||r.category==="Real Estate"||v.has(r.property_type||r.subcategory)));return I([...o,...t])}function re(){const o=(L()||[]).filter(r=>$(r)),t=[...W,...q,...z,...B].filter(r=>r&&$(r));return I([...o,...t])}function i(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function te(){if(document.getElementById("kco-hero-styles"))return;const e=document.createElement("style");e.id="kco-hero-styles",e.textContent=`
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
.kco-video-section{background:linear-gradient(135deg,#043a1c 0%,#0b6b3c 48%,#059669 100%);border:1px solid rgba(209,250,229,.22);box-shadow:0 18px 46px -22px rgba(4,58,28,.55)}
.kco-video-panel{padding:1.5rem 1.15rem 1.6rem}
@media(min-width:640px){.kco-video-panel{padding:1.7rem 1.75rem 1.8rem}}
.kco-video-promo{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem 1.5rem;flex-wrap:wrap}
.kco-video-copy{flex:1 1 auto;min-width:0;max-width:44ch}
.kco-video-eyebrow{display:inline-flex;align-items:center;font-size:.62rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#050505;background:#ffffff;border-radius:999px;padding:.24rem .65rem;margin-bottom:.45rem;box-shadow:0 4px 12px -4px rgba(0,0,0,.4)}
.kco-video-section .kco-video-h3{color:#ffffff;font-size:clamp(1.15rem,2.4vw,1.6rem);font-weight:900;letter-spacing:.02em;line-height:1.2;margin:0;text-shadow:0 2px 14px rgba(0,0,0,.35)}
.kco-video-copy p{color:#ffffff;font-size:.8rem;font-weight:600;line-height:1.5;margin:.35rem 0 0;text-shadow:0 1px 10px rgba(0,0,0,.3)}
.kco-video-actions{flex:0 0 auto;display:flex;flex-direction:column;align-items:flex-end;gap:.55rem;padding-top:.1rem}
.kco-video-section .kco-hero-count{background:#ffffff;border:none;color:#040a06;box-shadow:0 4px 14px -4px rgba(0,0,0,.35)}
.kco-video-section .kco-hero-count b,.kco-video-section .kco-hero-count strong{color:#065f46}
.kco-video-section .kco-hero-seeall{background:#050505;border:1.5px solid #ffffff;color:#ffffff;white-space:nowrap}
.kco-video-section .kco-hero-seeall:hover{background:#065f46;border-color:#ffffff;color:#ffffff}
.kco-video-carousel{position:relative;margin-top:1.35rem}
@media(max-width:640px){.kco-video-section .kco-hero-seeall{padding:.5rem .85rem;font-size:.74rem}}
@media(max-width:380px){
.kco-video-promo{flex-direction:column;align-items:stretch;gap:1rem}
.kco-video-copy{max-width:none}
.kco-video-actions{flex-direction:row;align-items:center;justify-content:space-between;padding-top:0}
}
.kco-video-hscroll{display:flex;gap:1rem;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:.4rem 2px .7rem;cursor:grab}
.kco-video-hscroll::-webkit-scrollbar{display:none}
.kco-video-hscroll.dragging{cursor:grabbing;scroll-snap-type:none;-webkit-user-select:none;user-select:none}
.kco-video-card{flex:0 0 auto;scroll-snap-align:start;width:272px;min-width:272px;border-radius:1.1rem;overflow:hidden;background:#fff;border:1px solid #e2e8f0;box-shadow:0 8px 22px -12px rgba(2,6,23,.18);transition:transform .18s ease,box-shadow .18s ease;text-decoration:none;display:flex;flex-direction:column}
@media(min-width:640px){.kco-video-card{width:372px;min-width:372px}}
@media(min-width:1024px){.kco-video-card{width:440px;min-width:440px}}
.kco-video-card:hover{transform:translateY(-4px);box-shadow:0 20px 38px -16px rgba(2,6,23,.32);border-color:#bfdbfe}
.kco-video-media{position:relative;aspect-ratio:16/10;background:#0b1120;overflow:hidden}
.kco-video-media video{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s ease}
.kco-video-card:hover .kco-video-media video{transform:scale(1.04)}
.kco-video-bigplay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;opacity:.95;transition:opacity .2s ease}
.kco-video-playcircle{width:3.4rem;height:3.4rem;border-radius:999px;background:rgba(255,255,255,.94);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px -6px rgba(0,0,0,.45);transition:transform .18s ease}
.kco-video-playcircle svg{width:1.5rem;height:1.5rem;color:#1e3a8a;margin-left:.15rem}
.kco-video-card:hover .kco-video-bigplay,.kco-video-media.video-playing .kco-video-bigplay{opacity:0}
.kco-video-card:hover .kco-video-playcircle{transform:scale(1.1)}
.kco-video-badge{position:absolute;top:.7rem;right:.7rem;display:inline-flex;align-items:center;gap:.3rem;font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:.3rem .6rem;border-radius:999px;box-shadow:0 4px 12px -2px rgba(0,0,0,.3)}
.kco-video-badge.kco-sale-buy{background:#059669;color:#fff;border:1px solid rgba(255,255,255,.25)}
.kco-video-badge.kco-sale-rent{background:#d97706;color:#fff;border:1px solid rgba(255,255,255,.25)}
.kco-video-badge svg{width:.8rem;height:.8rem}
.kco-video-loc{position:absolute;bottom:.7rem;left:.7rem;right:.7rem;display:flex;align-items:center;gap:.4rem;background:rgba(0,0,0,.55);backdrop-filter:blur(6px);color:#fff;font-size:11px;font-weight:600;padding:.35rem .7rem;border-radius:.8rem}
.kco-video-section .kco-video-loc{left:.7rem}
.kco-video-body{display:flex;flex-direction:column;gap:.55rem;padding:.9rem 1rem 1rem}
.kco-video-section .kco-video-body .kco-hero-price b{color:#0f172a;font-size:1.45rem}
.kco-video-section .kco-video-body .kco-hero-price span{color:#059669;font-weight:800}
.kco-video-section .kco-video-body .kco-hero-btn{background:linear-gradient(90deg,#1d4ed8,#2563eb);box-shadow:0 8px 16px -6px rgba(37,99,235,.45)}
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
`,document.head.appendChild(e)}function ae(e,o,t){C(e);const r=t||"kco-hero-card",a=e.images&&e.images[0]||V,d=M(e.property_id||e.id),n=o==="vehicle"&&e.category==="Trucks"?G(e):E(e);let c="",l="";if(o==="house"){const g=H(e.country_code),u=[e.city,e.state].filter(Boolean).join(", ")||e.country||"";u&&(l=`<span class="kco-hero-loc"><i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>${i(g+" "+u)}</span>`);const h=[];s(e,"bedrooms")!=null&&h.push(`<span class="kco-hero-chip"><i data-lucide="bed-double" class="w-3.5 h-3.5"></i>${i(s(e,"bedrooms"))} Beds</span>`),s(e,"bathrooms")!=null&&h.push(`<span class="kco-hero-chip"><i data-lucide="bath" class="w-3.5 h-3.5"></i>${i(s(e,"bathrooms"))} Baths</span>`),e.land_size&&h.push(`<span class="kco-hero-chip"><i data-lucide="ruler" class="w-3.5 h-3.5"></i>${i(e.land_size)}</span>`),s(e,"building_size")&&h.push(`<span class="kco-hero-chip"><i data-lucide="building-2" class="w-3.5 h-3.5"></i>${i(s(e,"building_size"))}</span>`),s(e,"year_built")&&h.push(`<span class="kco-hero-chip"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${i(s(e,"year_built"))}</span>`);const m=R(e);return c=h.join(""),l||(l=""),`
      <a href="/details.html?id=${d}" class="${r}">
        <div class="kco-hero-media">
          <img src="${i(a)}" alt="${i(e.title||"")}" loading="lazy">
          <span class="kco-hero-type"><i data-lucide="home" class="w-3 h-3"></i>${i(m)}</span>
          ${l}
        </div>
        <div class="kco-hero-body">
          <div class="kco-hero-price"><b>${n}</b><span>${e.listing_status==="rent"?"per month · for rent":"for sale"}</span></div>
          <p class="kco-hero-title">${i(e.title||"")}</p>
          ${c?`<div class="kco-hero-chips">${c}</div>`:""}
          <span class="kco-hero-btn">View Property <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>`}const p=[];return s(e,"model_year")&&p.push(`<span class="kco-hero-chip"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${i(s(e,"model_year"))}</span>`),s(e,"mileage")&&p.push(`<span class="kco-hero-chip"><i data-lucide="gauge" class="w-3.5 h-3.5"></i>${i(s(e,"mileage"))}</span>`),s(e,"fuel_type")&&p.push(`<span class="kco-hero-chip"><i data-lucide="fuel" class="w-3.5 h-3.5"></i>${i(s(e,"fuel_type"))}</span>`),s(e,"transmission")&&p.push(`<span class="kco-hero-chip"><i data-lucide="cog" class="w-3.5 h-3.5"></i>${i(s(e,"transmission"))}</span>`),s(e,"body_type")&&p.push(`<span class="kco-hero-chip"><i data-lucide="car-front" class="w-3.5 h-3.5"></i>${i(s(e,"body_type"))}</span>`),c=p.join(""),`
      <a href="/details.html?id=${d}" class="${r}">
        <div class="kco-hero-media">
          <img src="${i(a)}" alt="${i(e.title||"")}" loading="lazy">
          <span class="kco-hero-type"><i data-lucide="car-front" class="w-3 h-3"></i>${i(ie(e))}</span>
        </div>
        <div class="kco-hero-body">
          <div class="kco-hero-price"><b>${n}</b><span>· ${i(s(e,"condition")||"ready")}</span></div>
          <p class="kco-hero-title">${i(e.title||"")}</p>
          ${c?`<div class="kco-hero-chips">${c}</div>`:""}
          <span class="kco-hero-btn">View Vehicle <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>`}function M(e){return String(e??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ie(e){const o=String(e.category||""),t={Cars:"Car","Cars & Vehicles":"Car",Trucks:"Truck",Buses:"Bus","Buses & Coaches":"Bus",Motorhomes:"Motorhome / RV",Motorcycles:"Motorcycle","Marine & Boating":"Boat / Marine"};return t[o]?t[o]:s(e,"body_type")||o||"Vehicle"}function se(e){return`<i data-lucide="${e}" class="w-5 h-5 text-white"></i>`}function j(e){let o=!1,t=!1,r=0,a=0;e.addEventListener("pointerdown",n=>{o=!0,t=!1,r=n.clientX,a=e.scrollLeft,e.classList.add("dragging");try{e.setPointerCapture(n.pointerId)}catch{}}),e.addEventListener("pointermove",n=>{if(!o)return;const c=n.clientX-r;Math.abs(c)>5&&(t=!0),e.scrollLeft=a-c});const d=()=>{o=!1,e.classList.remove("dragging")};e.addEventListener("pointerup",d),e.addEventListener("pointercancel",d),e.addEventListener("pointerleave",d),e.addEventListener("click",n=>{t&&(n.preventDefault(),n.stopPropagation())},!0)}function ce(e){const o=document.createElement("section");o.className=`kco-hero-section ${e.kindCls}`,o.setAttribute("aria-label",e.title);const t=`
    <button class="kco-hero-arrow left" aria-label="Scroll ${e.title} left">${O}</button>
    <button class="kco-hero-arrow right" aria-label="Scroll ${e.title} right">${P}</button>`,r=`
    <div class="kco-hero-panel">
      <div class="kco-hero-head">
        <div class="kco-hero-headleft">
          ${e.icon?`<span class="kco-hero-ic">${se(e.icon)}</span>`:""}
          <div class="min-w-0">
            <h3>${i(e.title)}</h3>
            <p>${i(e.subtitle)}</p>
          </div>
        </div>
        <span class="kco-hero-count">${e.listings.length} Available</span>
        ${e.seeAll?`<a class="kco-hero-seeall" href="/showroom.html?cat=${e.cat}">See All <i data-lucide="arrow-up-right" class="w-4 h-4"></i></a>`:""}
      </div>
      <div class="kco-hero-hscroll">
        ${e.listings.length?e.listings.map(l=>e.card(l)).join(""):'<div class="kco-hero-empty">New listings will appear here as soon as they are published.</div>'}
      </div>
      ${t}
    </div>`;o.innerHTML=r;const a=o.querySelector(".kco-hero-hscroll");j(a);const d=o.querySelector(".kco-hero-arrow.left"),n=o.querySelector(".kco-hero-arrow.right"),c=()=>{const l=a.scrollWidth-a.clientWidth-2;d.disabled=a.scrollLeft<=2,n.disabled=a.scrollLeft>=l};return d.addEventListener("click",()=>a.scrollBy({left:-a.clientWidth*.8,behavior:"smooth"})),n.addEventListener("click",()=>a.scrollBy({left:a.clientWidth*.8,behavior:"smooth"})),a.addEventListener("scroll",c,{passive:!0}),c(),o}const O='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',P='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';function b(){const e=document.getElementById(T);if(!e)return;te();const o=re(),t=document.createDocumentFragment();t.appendChild(Z()),t.appendChild(ce({kindCls:"kco-hero-veh",title:"🚗 Cars & Trucks",subtitle:"Your next ride starts here.",icon:"",cat:"cars-trucks",seeAll:!0,listings:o,card:r=>ae(r,"vehicle")})),e.replaceChildren(t),window.lucide&&lucide.createIcons()}let S=!1;function _(){S||(S=!0,document.getElementById(T)&&(F(),b(),D().then(()=>b()).catch(()=>{}),window.addEventListener("showroom-categories-ready",()=>b()),window.addEventListener("kco-db-refresh",()=>b())))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_):_();export{re as a,R as b,ae as c,Z as d,oe as g,te as h,ie as v};
