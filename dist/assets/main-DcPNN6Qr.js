const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/catalog-hidden-store-CaPr0Ta1.js","assets/supabase-client-Crqgup_-.js","assets/special-order-D93RR85t.js"])))=>i.map(i=>d[i]);
import{k as b,_ as x,m as Z,D as ee,l as ae,n as ie,g as oe,h as E}from"./supabase-client-Crqgup_-.js";import"./localization-DgakrzLg.js";import{f as ce,c as le,r as de}from"./showroom-cards-BCzyq7zC.js";import{d as ue}from"./payment-settings-DPfk_c7P.js";import"./native-bridge-DDjiHiPo.js";import"./localization-bootstrap-CFsgEacE.js";import"./ai-chat-BdRMZUs0.js";import"./truck-data-DnyLExat.js";import"./motorhome-data-SSjGu6g8.js";import"./products-data-CGLFLAJM.js";import"./products-extra-DecCj9NU.js";import"./catalog-hidden-store-CaPr0Ta1.js";import"./cart-DNy8CJA3.js";function A(){let e=localStorage.getItem("kco_search_session");return e||(e="sess_"+Date.now()+"_"+Math.random().toString(36).slice(2),localStorage.setItem("kco_search_session",e)),e}const pe=18e4,S=new Map;function U(e){const t=S.get(e);return t?Date.now()-t.ts>pe?(S.delete(e),null):(S.delete(e),S.set(e,t),t.data):null}function H(e,t){if(S.size>300){const r=S.keys().next().value;S.delete(r)}S.set(e,{data:t,ts:Date.now()})}const C=new Map;function q(e,t){if(C.has(e))return C.get(e);const r=t().finally(()=>C.delete(e));return C.set(e,r),r}const B={phone:["smartphone","mobile","cellphone"],laptop:["notebook","computer","macbook"],car:["vehicle","auto","sedan","suv"],house:["home","property","apartment","villa"],tv:["television","monitor"],headphones:["earphones","earbuds","headset"],shoes:["sneakers","footwear","boots"],watch:["smartwatch","timepiece"],bag:["handbag","purse","backpack"],camera:["dslr","mirrorless"],motorhome:["camper","rv","diesel pusher","class a","class b","class c"],truck:["pickup","lorry","semi"],suv:["crossover","jeep"],villa:["mansion","estate"],apartment:["condo","flat","studio"],furniture:["chair","table","sofa","desk"],jewellery:["jewelry","ring","necklace","bracelet"],fashion:["clothing","apparel","clothes"],electronics:["gadget","device","tech"],samsung:["galaxy"],apple:["iphone","macbook","ipad","airpods"],mercedes:["benz","amg"],bmw:["bimmer"],toyota:["camry","corolla","hilux"],honda:["civic","accord"]};function te(e){const t=e.toLowerCase().split(/\s+/).filter(Boolean),r=[...t];for(const n of t){const s=n.endsWith("s")?n.slice(0,-1):n;B[n]&&r.push(...B[n].slice(0,3)),B[s]&&s!==n&&r.push(...B[s].slice(0,2)),s!==n&&r.push(s)}return[...new Set(r)].join(" ")}let _=null,M=null;function me(e){return[e.title||"",e.brand||"",e.category||"",e.subcategory||"",Array.isArray(e.features)?e.features.join(" "):"",Array.isArray(e.tags)?e.tags.join(" "):"",(e.description||"").slice(0,300)].join(" ").toLowerCase()}function P(){return _?Promise.resolve(_):M||(M=Promise.all([x(()=>import("./supabase-client-Crqgup_-.js").then(e=>e.q),[]),x(()=>import("./products-data-CGLFLAJM.js"),[]),x(()=>import("./products-extra-DecCj9NU.js"),[]),x(()=>import("./truck-data-DnyLExat.js"),[]),x(()=>import("./motorhome-data-SSjGu6g8.js"),[])]).then(([e,t,r,n,s])=>(_=[...e.SHOWROOM_LISTINGS||[],...t.PRODUCT_LISTINGS||[],...r.PRODUCT_EXTRA_LISTINGS||[],...n.TRUCK_LISTINGS||[],...s.MOTORHOME_LISTINGS||[]].filter(a=>a&&a.property_id).map(a=>({p:a,hay:me(a)})),_)).catch(()=>(_=[],_)),M)}function he(){P().catch(()=>{})}function V(e,t){return Promise.race([e,new Promise(r=>setTimeout(()=>r(null),t))])}function ge(e){const t=Array.isArray(e.images)?e.images:[];return{listing_id:e.property_id,property_id:e.property_id,title:e.title||"Untitled",brand:e.brand,description:e.description,category:e.category,subcategory:e.subcategory,images:t,thumbnail:t[0]||null,price:Number(e.price)||0,currency:e.currency||"USD",entity_type:e.listing_type||"product",is_special_order:!1}}function N(e,t){if(!_||_.length===0)return[];const r=e.trim().toLowerCase();if(!r)return[];const n=r.split(/\s+/).filter(Boolean),s=[];for(const{p:a,hay:c}of _){const i=(a.title||"").toLowerCase(),d=i.includes(r),u=c.includes(r),l=n.every(p=>i.includes(p)||c.includes(p)),o=n.some(p=>i.includes(p)||c.includes(p));let h=0;i===r&&(h+=200),i.startsWith(r)&&(h+=150),d&&(h+=100),u&&(h+=60),l?h+=50:o&&(h+=25),h>0&&s.push({s:h,r:ge(a)})}return s.sort((a,c)=>c.s-a.s),s.slice(0,t).map(a=>a.r)}async function fe(e,t=30,r){if(!e||e.trim().length<1)return{results:[],count:0,marketplaceCount:0,supplierCount:0};const n=e.trim(),s=`search:${n}:${t}`,a=U(s);return a?(r&&r(a.results,a),a):q(s,async()=>{const c=await b(),i=te(n);n.toLowerCase(),P().then(()=>{const g=N(n,t);g.length>0&&r&&r(g,{count:g.length,marketplaceCount:g.length,supplierCount:0})}).catch(()=>{});const{data:d,error:u}=await c.rpc("smart_search_quick",{p_query:i,p_limit:t});let l=[];!u&&d&&d.length>0&&(l=d),await P().catch(()=>{});const o=N(n,t),h=new Set(l.map(g=>g.property_id||g.listing_id));for(const g of o)h.has(g.property_id)||(h.add(g.property_id),l.push(g));r&&l.length>0&&r(l,{count:l.length,marketplaceCount:l.length,supplierCount:0});let p=[];if(l.length<t)try{const{data:g,error:O}=await c.rpc("search_supplier_catalogue",{p_query:n,p_limit:t-l.length});!O&&g&&g.length>0&&(p=g.map(y=>({listing_id:null,supplier_item_id:y.id,title:y.title,brand:y.brand,description:y.description,category:y.category,images:y.images,thumbnail:Array.isArray(y.images)&&y.images.length>0?y.images[0]:null,price:y.selling_price,currency:y.supplier_currency,entity_type:"special_order",available_quantity:y.available_quantity,estimated_delivery_days:y.estimated_delivery_days,shipping_cost:y.shipping_cost,supplier_name:y.supplier_name,is_special_order:!0})),r&&p.length>0&&r([...l,...p],{count:l.length+p.length,marketplaceCount:l.length,supplierCount:p.length}))}catch{}try{const g=A();c.rpc("record_search",{p_query:n,p_result_count:l.length+p.length,p_session_key:g}).then(()=>{},()=>{})}catch{}const f={results:[...l,...p],count:l.length+p.length,marketplaceCount:l.length,supplierCount:p.length,_final:!0};return H(s,f),ye(n,t),f})}async function ye(e,t){const r=await b(),n=e.toLowerCase().split(/\s+/).filter(Boolean);if(n.length<2)return;const s=new Set;for(const a of n)a.endsWith("s")?s.add(a.slice(0,-1)):s.add(a+"s");for(const a of s){const c=`search:${a}:${t}`;!U(c)&&!C.has(c)&&q(c,()=>r.rpc("smart_search_quick",{p_query:a,p_limit:t}).then(({data:i,error:d})=>{!d&&i&&H(c,i)}).catch(()=>{}))}}async function be(e,t=8){if(!e||e.trim().length<1)return[];const r=e.trim(),n=`sugg:${r}:${t}`,s=U(n);return s||q(n,async()=>{const a=await b(),c=te(r);await P().catch(()=>{});const i=N(r,t).map(o=>({id:o.property_id,title:o.title,category:o.category,price:o.price,currency:o.currency,entity_type:o.entity_type,thumbnail:o.thumbnail})),d=new Set(i.map(o=>o.id||o.title)),u=await V(a.rpc("smart_search_quick",{p_query:c,p_limit:t}),2e3);let l=[];if(u&&!u.error&&u.data&&u.data.length>0)l=u.data;else if(u&&u.error){const o=await V(a.rpc("smart_search_fuzzy",{p_query:r.toLowerCase(),p_limit:t}),1500);o&&o.data&&(l=o.data)}for(const o of l)!d.has(o.listing_id)&&!d.has(o.title)&&(d.add(o.listing_id),i.push({id:o.listing_id,title:o.title,category:o.category,price:o.price,currency:o.currency,entity_type:o.entity_type,thumbnail:o.thumbnail}));return H(n,i),i})}async function ve(e=5){const t=A();try{const n=await b(),{data:s,error:a}=await n.from("search_history").select("query, created_at").eq("session_key",t).order("created_at",{ascending:!1}).limit(e);if(!a&&s){const c=new Set;return s.filter(i=>c.has(i.query.toLowerCase())?!1:(c.add(i.query.toLowerCase()),!0))}}catch{}return JSON.parse(localStorage.getItem("kco_recent_searches")||"[]").map(n=>({query:n,created_at:null}))}async function we(e){if(!e||e.trim().length<1)return;const t=e.trim(),r=A();try{(await b()).from("search_history").insert({session_key:r,query:t}).then(()=>{},()=>{})}catch{}const s=JSON.parse(localStorage.getItem("kco_recent_searches")||"[]").filter(a=>a.toLowerCase()!==t.toLowerCase());s.unshift(t),localStorage.setItem("kco_recent_searches",JSON.stringify(s.slice(0,10)))}async function _e(){const e=A();try{await(await b()).from("search_history").delete().eq("session_key",e)}catch{}localStorage.removeItem("kco_recent_searches")}async function xe(e=8){try{const t=await b(),{data:r,error:n}=await t.rpc("smart_search_trending",{p_limit:e});if(!n&&r)return r.map(s=>s.query)}catch{}return["Samsung Galaxy","iPhone","Mercedes","Real Estate","Laptop","Villa","Beach House","Motorhome"]}let v=null,D=!1;function ke(e,t){const r=window.SpeechRecognition||window.webkitSpeechRecognition;return r?D&&v?(v.stop(),{supported:!0}):(v=new r,v.continuous=!1,v.interimResults=!0,v.lang="en-US",v.onstart=()=>{D=!0,t?.(!0)},v.onresult=n=>{let s="";for(let a=0;a<n.results.length;a++)s+=n.results[a][0].transcript;e?.(s)},v.onerror=()=>{t?.(!1)},v.onend=()=>{D=!1,t?.(!1)},v.start(),{supported:!0}):{supported:!1}}function Se(){return D}window._smartSearch=fe;window._getLiveSuggestions=be;window._getRecentSearches=ve;window._saveRecentSearch=we;window._clearRecentSearches=_e;window._getTrendingSearches=xe;window._toggleVoiceSearch=ke;window._isVoiceListening=Se;window._getSessionKey=A;window._filterShowroomByCategory=ce;window._clearShowroomFilter=le;he();window.dispatchEvent(new CustomEvent("smart-search-ready"));const $e="id,title,description,image_url,video_url,poster_url,link_type,link_target,ad_label,start_date,end_date,is_active,sort_order,created_at",Le=["Featured","Sponsored","Featured Collection","Discover","Promotion"];function Ce(e){if(!e.is_active)return!1;const t=Date.now();return!(e.start_date&&new Date(e.start_date).getTime()>t||e.end_date&&new Date(e.end_date).getTime()<t)}function Ee(e){const t=(e.title||"").trim().toLowerCase(),r=(e.description||"").trim().toLowerCase(),n=["home","house","apartment","villa","cottage","condo","townhouse","bungalow"].some(d=>t.includes(d)||r.includes(d)),s=["truck","trucks","pickup","delivery","freight"].some(d=>t.includes(d)||r.includes(d)),a=["motorhome","motor home","rv","recreational vehicle","camper","campervan"].some(d=>t.includes(d)||r.includes(d)),c=["car","cars","vehicle","vehicles","sedan","suv","coupe","hatchback"].some(d=>t.includes(d)||r.includes(d)),i=!["kitchen","cooking","culinary"].some(d=>t.includes(d)||r.includes(d));return(n||s||a||c)&&i}function Ie(e){if(!e||!Ce(e)||!Ee(e))return null;const t=(e.image_url||"").trim()||null,r=null,n=(e.poster_url||"").trim()||null;if(!t)return null;const s=(e.title||"Marketplace Promotion").trim(),a=(e.description||"").trim(),c=Le.includes(e.ad_label)?e.ad_label:"Featured",i=["product","category","section","none"].includes(e.link_type)?e.link_type:"none";return{adId:e.id,isAd:!0,isLive:!1,badge:c,title:s,desc:a,titles:{en:s},descs:{en:a},image:t,video:r,poster:n,linkType:i,linkTarget:(e.link_target||"").trim()||null,sortOrder:Number(e.sort_order)||0}}async function Te(){try{const e=await b(),{data:t,error:r}=await e.from("promotions").select($e).eq("is_active",!0).order("sort_order",{ascending:!0}).order("created_at",{ascending:!1});return r||!t?[]:t.map(Ie).filter(Boolean)}catch{return[]}}async function re(){const e=await Te();return window._ads=e,window.dispatchEvent(new CustomEvent("ads-updated",{detail:e})),e}async function Ae(){try{return(await b()).channel("public:promotions:ads").on("postgres_changes",{event:"*",schema:"public",table:"promotions"},()=>{re()}).subscribe()}catch{return null}}window._loadAds=re;window._subscribeAds=Ae;window._ads=[];function Oe(e){const t={...ee,...e||{}};if(t.promo_banner_enabled===!1)return null;const r=(t.promo_banner_image||"").trim(),n=(t.promo_banner_video||"").trim();if(!r&&!n)return null;const s={promoBanner:!0,badge:(t.promo_banner_title||"Promo Banner").trim(),title:(t.promo_banner_title||"Weverse Online Shop").trim(),subtitle:(t.promo_banner_subtitle||"").trim(),buttonText:(t.promo_banner_button_text||"").trim(),buttonLink:(t.promo_banner_button_link||"/#showroom-directory").trim()};return n?(s.video=n,r&&(s.poster=r)):r&&(s.image=r),s}async function W(){let e={};try{e=await Z()}catch{}const t=Oe(e);window._promoBannerSlide=t,window.dispatchEvent(new CustomEvent("promo-banner-updated",{detail:t}))}function z(){W().catch(()=>{}),window.addEventListener("site-content-updated",()=>{W().catch(()=>{})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",z):z();const Be=()=>document.getElementById("video-advertisement");function $(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Me(e){return`
    <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div class="absolute inset-0 opacity-20" style="background-image:radial-gradient(#38bdf8 1px, transparent 1px);background-size:24px 24px"></div>
      <div class="relative flex items-center justify-center gap-3 py-10 sm:py-12 px-6 text-center">
        <span class="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20">
          <svg viewBox="0 0 24 24" class="w-6 h-6 text-sky-300" fill="none"><path d="M6 4.5v15a1 1 0 0 0 1.5.9l12-7.5a1 1 0 0 0 0-1.8l-12-7.5A1 1 0 0 0 6 4.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
        </span>
        <div class="text-left">
          <p class="text-sm font-black tracking-wide">${$(e||"Video Advertisement")}</p>
          <p class="text-[11px] text-slate-400 mt-0.5">Add your video from Content Settings in the admin.</p>
        </div>
      </div>
    </div>`}function De(e){const t=(e.video_ad_video_url||"").trim(),r=(e.video_ad_poster_url||"").trim(),n=(e.video_ad_title||"Weverse Online Shop").trim(),s=(e.video_ad_subtitle||"").trim(),a=(e.video_ad_button_text||"").trim(),c=(e.video_ad_button_link||"/#showroom-directory").trim(),i=`
      <div class="absolute inset-x-0 top-0 z-10 flex items-end justify-between p-4 sm:p-6 bg-gradient-to-b from-black/70 via-black/25 to-transparent">
        <div class="min-w-0 pr-4">
          <span class="inline-block text-[10px] font-black uppercase tracking-widest text-sky-300 mb-1">Video Ad</span>
          <h3 class="text-white font-black text-lg sm:text-xl leading-tight truncate">${$(n)}</h3>
          ${s?`<p class="text-white/85 text-xs sm:text-sm mt-0.5 line-clamp-2">${$(s)}</p>`:""}
        </div>
        ${a?`<a href="${$(c)}" class="shrink-0 inline-flex items-center gap-1.5 bg-white text-gray-900 text-xs font-black px-4 py-2 rounded-full hover:gap-2.5 transition-all shadow-lg">${$(a)} <svg viewBox="0 0 24 24" class="w-3.5 h-3.5" fill="none"><path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`:""}
      </div>`;return`
    <div class="relative overflow-hidden rounded-2xl bg-black shadow-xl shadow-black/20" id="vad-card">
      <video id="vad-video" class="w-full aspect-[16/7] sm:aspect-[21/8] max-h-[480px] object-cover" muted loop playsinline webkit-playsinline preload="metadata"${r?` poster="${$(r)}"`:""}>
        <source src="${$(t)}" type="video/mp4">
      </video>
      ${i}
      
      <div class="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
        <div class="flex items-center gap-3">
          <button id="vad-play" type="button" aria-label="Play / Pause" class="shrink-0 w-9 h-9 rounded-full bg-white/95 text-gray-900 flex items-center justify-center transition active:scale-95">
            <svg id="vad-pause-icon" viewBox="0 0 24 24" class="w-4 h-4 hidden" fill="currentColor"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/></svg>
            <svg id="vad-play-icon" viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor"><path d="M7 4.8v14.4a.8.8 0 0 0 1.22.68l11.4-7.2a.8.8 0 0 0 0-1.36L8.22 4.12A.8.8 0 0 0 7 4.8Z"/></svg>
          </button>
          <div class="flex-1 h-1.5 rounded-full bg-white/25 overflow-hidden cursor-pointer" id="vad-track">
            <div id="vad-progress" class="h-full bg-sky-400 rounded-full" style="width:0%"></div>
          </div>
          <span id="vad-time" class="text-white/80 text-[11px] font-bold tabular-nums">0:00 / 0:00</span>
        </div>
      </div>
    </div>`}function K(e){(!isFinite(e)||e<0)&&(e=0);const t=Math.floor(e/60),r=Math.floor(e%60);return`${t}:${String(r).padStart(2,"0")}`}function Pe(){if(!document.getElementById("vad-card"))return;const t=document.getElementById("vad-video"),r=document.getElementById("vad-play"),n=document.getElementById("vad-play-icon"),s=document.getElementById("vad-pause-icon"),a=document.getElementById("vad-track"),c=document.getElementById("vad-progress"),i=document.getElementById("vad-time");if(!t||!r||!a)return;let d=!1;const u=()=>{n&&n.classList.toggle("hidden",!t.paused),s&&s.classList.toggle("hidden",t.paused)},l=()=>{i&&(i.textContent=`${K(t.currentTime)} / ${K(t.duration)}`),c&&(c.style.width=`${t.duration?t.currentTime/t.duration*100:0}%`)};t.addEventListener("loadedmetadata",l),t.addEventListener("timeupdate",l),t.addEventListener("play",u),t.addEventListener("pause",u),t.addEventListener("ended",()=>{t.currentTime=0,t.play().catch(()=>{})}),r.addEventListener("click",()=>{t.paused?(d=!1,t.play().catch(()=>{})):(d=!0,t.pause())}),a.addEventListener("click",h=>{const p=a.getBoundingClientRect();if(!t.duration)return;const f=(h.clientX-p.left)/p.width;t.currentTime=f*t.duration,t.paused&&!d&&t.play().catch(()=>{})});const o=()=>{t.play().catch(()=>{})};document.readyState==="complete"?o():window.addEventListener("load",o,{once:!0})}async function J(){const e=Be();if(!e)return;let t={};try{t=await Z()}catch{}const r={...ee,...t||{}};if(r.video_ad_enabled===!1){e.innerHTML="";return}if(!(r.video_ad_video_url||"").trim()){e.innerHTML=Me(r.video_ad_title);return}if(e.innerHTML=De(r),Pe(),window.lucide)try{lucide.createIcons()}catch{}window.dispatchEvent(new CustomEvent("video-advertisement-ready"))}function X(){J().catch(()=>{}),window.addEventListener("site-content-updated",()=>{J().catch(()=>{})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",X):X();const I="/fallback.svg",Re=()=>document.getElementById("homepage-bottom");function m(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function je(e){return Array.isArray(e.images)?e.images.filter(Boolean):typeof e.images=="string"?[e.images]:[]}function F(e){return je(e)[0]||I}function L(e){const t=parseFloat(e.real_price),r=parseFloat(e.price);return!(t>0)||!(r>0)||t<=r?null:{real:t,price:r,pct:Math.round((1-r/t)*100)}}function w(e,t,r,n="blue"){const s=n==="amber";return`
    <div class="relative pt-2 pb-3">
      <div class="flex items-center gap-3.5">
        <div class="p-3 rounded-2xl border ${s?"border-amber-400/40":"border-blue-500/30"} ${s?"bg-amber-400/15":"bg-blue-500/10"} shrink-0" style="box-shadow:${s?"0 0 22px rgba(251,191,36,0.35)":"0 0 22px rgba(59,130,246,0.25)"}">
          <i data-lucide="${e}" class="w-6 h-6 ${s?"text-amber-300":"text-blue-300"}"></i>
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight">
            <span class="bg-gradient-to-r ${s?"from-amber-100 via-white to-orange-200":"from-blue-200 via-white to-blue-300"} bg-clip-text text-transparent">${m(t)}</span>
          </h3>
          ${r?`<p class="text-gray-400 text-xs sm:text-[13px] leading-tight mt-1 truncate">${m(r)}</p>`:""}
        </div>
      </div>
      <div class="mt-3 h-px bg-gradient-to-r ${s?"from-amber-400/60 via-orange-300/40":"from-blue-500/40 via-gray-700/40"} to-transparent"></div>
    </div>`}function Ne(e){const t=e.filter(s=>L(s)),r=(t.length?t:e).slice(0,3);if(!r.length)return"";const n=r.map((s,a)=>{const c=F(s),i=L(s),d=s.title||s.name||"Featured product",u=i?`Save ${i.pct}% — was ${E({price:i.real,currency:s.currency,price_period:s.price_period})}`:s.category||"Featured product",l=["from-blue-700 via-blue-500 to-cyan-400","from-violet-700 via-purple-500 to-pink-400","from-emerald-700 via-teal-500 to-cyan-300"][a%3];return`
      <a href="/details.html?id=${encodeURIComponent(s.property_id)}"
         class="group relative overflow-hidden rounded-2xl bg-gradient-to-br ${l} text-white block min-h-[220px] sm:min-h-[260px] shadow-lg shadow-blue-500/10 hover:shadow-xl transition">
        <div class="absolute inset-0 opacity-90">
          <img src="${m(c)}" alt="${m(d)}" loading="lazy" decoding="async"
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               onerror="this.onerror=null;this.src='${I}'">
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div class="absolute bottom-0 inset-x-0 p-4 sm:p-5">
          <span class="inline-block text-[10px] font-black uppercase tracking-wider bg-white/15 backdrop-blur rounded-full px-2.5 py-1 mb-2">Featured Promotion</span>
          <h4 class="font-black text-white text-lg sm:text-xl leading-tight line-clamp-2">${m(d)}</h4>
          <div class="flex items-center flex-wrap gap-2 mt-2">
            <span class="text-sm font-black text-white">${E(s)}</span>
            ${i?`<span class="text-xs text-white/70 line-through">${E({price:i.real,currency:s.currency,price_period:s.price_period})}</span>
            <span class="text-[10px] font-black bg-red-500 rounded-full px-2 py-0.5">-${i.pct}%</span>`:""}
          </div>
          <p class="text-[11px] text-white/70 mt-1 truncate">${m(u)}</p>
          <span class="inline-flex items-center gap-1.5 mt-3 bg-white text-gray-900 text-xs font-black px-4 py-2 rounded-full group-hover:gap-2.5 transition-all">
            Shop Now <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </span>
        </div>
      </a>`});return`
    <section class="showroom-section space-y-3">
      ${w("megaphone","Featured Promotions","Hand-picked real products with the best savings right now.")}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">${n.join("")}</div>
    </section>`}function Ue(e){const t=e.filter(r=>L(r)).slice(0,10);return t.length?`
    <section class="showroom-section space-y-3" data-hb-rail="special-offers">
      ${w("percent","Special Offers","Genuinely discounted products — real savings on real items.","amber")}
      <div class="relative">
        <div class="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth no-scrollbar">
          ${t.map((r,n)=>`<div data-hb-card="${n}" class="w-[240px] sm:w-[260px] shrink-0 snap-start"></div>`).join("")}
        </div>
      </div>
    </section>`:""}function He(e,t){const r=new Set,n=c=>{const i=c&&(c.property_id||c.id);return!i||r.has(i)?!1:(r.add(i),!0)};let s=t.filter(n);const a=e.filter(c=>(c.category||"").toLowerCase()==="new arrivals"&&n(c));return s=[...s,...a].slice(0,10),s.length||(s=e.filter(n).slice(0,10)),s.length?`
    <section class="showroom-section space-y-3" data-hb-rail="new-arrivals">
      ${w("sparkles","New Arrivals","Freshly added products — newest listings first.")}
      <div class="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth no-scrollbar">
        ${s.map((c,i)=>`<div data-hb-card="${i}" class="w-[240px] sm:w-[260px] shrink-0 snap-start"></div>`).join("")}
      </div>
    </section>`:""}function qe(){const e=[{icon:"search",title:"Browse Products",desc:"Explore the showroom or search for what you need."},{icon:"eye",title:"View Details",desc:"Check photos, price, description and availability."},{icon:"shopping-cart",title:"Add to Cart / Buy",desc:"Add items to your cart or buy now."},{icon:"credit-card",title:"Checkout",desc:"Enter your delivery details and proceed to payment."},{icon:"lock",title:"Payment",desc:"Pay securely with card or bank transfer."},{icon:"check-circle",title:"Order Confirmation",desc:"Get instant confirmation by email."},{icon:"package",title:"Delivery",desc:"Your order is packed, shipped and delivered to you."}];return`
    <section class="showroom-section space-y-3">
      ${w("list-ordered","How to Order","Ordering is simple — seven easy steps from browse to doorstep.")}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        ${e.map((t,r)=>`
          <div class="relative bg-white border border-gray-200 rounded-2xl p-4">
            <span class="absolute top-3 right-3 text-[10px] font-black text-gray-300">${String(r+1).padStart(2,"0")}</span>
            <div class="p-2.5 bg-blue-50 rounded-xl w-fit mb-3"><i data-lucide="${t.icon}" class="w-5 h-5 text-blue-600"></i></div>
            <h4 class="text-sm font-black text-gray-900">${m(t.title)}</h4>
            <p class="text-xs text-gray-500 mt-1 leading-relaxed">${m(t.desc)}</p>
          </div>`).join("")}
      </div>
    </section>`}function Fe(e){const t=[{icon:"globe",title:"Free Worldwide Shipping",desc:"Standard shipping to any country is free on every order."},{icon:"truck",title:"Shipping Methods",desc:"Standard worldwide delivery — your order is packed and handed to our trusted courier."},{icon:"map-pin",title:"Delivery Areas",desc:"We ship internationally. Delivery details are confirmed from your address at checkout."},{icon:"package-search",title:"Order Tracking",desc:"Track your order any time from My Account → Orders, plus email updates at each stage."},{icon:"clock",title:"Estimated Delivery",desc:"Estimated delivery is shown at checkout based on your shipping country. Exact times depend on your location."},{icon:"rotate-ccw",title:"Returns & Refunds",desc:"Easy 14-day returns and a clear refund process for eligible orders."}];return`
    <section class="showroom-section space-y-3">
      ${w("truck","Delivery Information","How you receive your goods — based on the store’s actual shipping setup.")}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        ${t.map(r=>`
          <div class="bg-white border border-gray-200 rounded-2xl p-4">
            <div class="p-2.5 bg-blue-50 rounded-xl w-fit mb-3"><i data-lucide="${r.icon}" class="w-5 h-5 text-blue-600"></i></div>
            <h4 class="text-sm font-black text-gray-900">${m(r.title)}</h4>
            <p class="text-xs text-gray-500 mt-1 leading-relaxed">${m(r.desc)}</p>
          </div>`).join("")}
      </div>
      ${e&&e.payment_gateway?`<p class="text-[11px] text-gray-400 px-1">Payment gateway: ${m(e.payment_gateway)} · Mode: ${m(e.payment_mode||"test")}</p>`:""}
    </section>`}function Ge(e){const t=[],r=e?e.manual_payment_enabled!==!1:!0,n=e?!!e.flutterwave_enabled:!1;return r&&t.push({icon:"landmark",title:"Manual Bank / ATM Transfer",desc:"Pay by bank transfer or ATM using the store’s official receiving account, then upload your payment receipt for verification."}),n&&t.push({icon:"zap",title:"Flutterwave",desc:"Pay securely online with your ATM/debit card, bank transfer, or mobile money through Flutterwave."}),t.length?`
    <section class="showroom-section space-y-3">
      ${w("credit-card","Payment Methods","Only the payment methods actually accepted at checkout are shown.")}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${t.map(s=>`
          <div class="flex items-start gap-3 bg-white border border-gray-200 rounded-2xl p-4">
            <div class="p-2.5 bg-emerald-50 rounded-xl shrink-0"><i data-lucide="${s.icon}" class="w-5 h-5 text-emerald-600"></i></div>
            <div>
              <h4 class="text-sm font-black text-gray-900">${m(s.title)}</h4>
              <p class="text-xs text-gray-500 mt-1 leading-relaxed">${m(s.desc)}</p>
            </div>
          </div>`).join("")}
      </div>
    </section>`:""}function Ve(){const e=[{icon:"message-circle",title:"Contact Us",desc:"Send us a message any time — we reply fast.",href:"/contact.html",cta:"Go to Contact"},{icon:"life-buoy",title:"Help Center",desc:"Answers to common questions about orders and payments.",href:"/help.html",cta:"Browse Help"},{icon:"mail",title:"Email Support",desc:"Reach support directly at support@weverseonlineshop.com.",href:"mailto:support@weverseonlineshop.com",cta:"Email Us"},{icon:"user-check",title:"Track Your Order",desc:"Check the live status of any order from your account.",href:"/account.html",cta:"Track Order"}];return`
    <section class="showroom-section space-y-3">
      ${w("headset","Customer Support","We’re here to help with orders, payments and delivery.")}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        ${e.map(t=>`
          <a href="${t.href}" class="group bg-white border border-gray-200 rounded-2xl p-4 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition">
            <div class="p-2.5 bg-blue-50 rounded-xl w-fit mb-3"><i data-lucide="${t.icon}" class="w-5 h-5 text-blue-600"></i></div>
            <h4 class="text-sm font-black text-gray-900">${m(t.title)}</h4>
            <p class="text-xs text-gray-500 mt-1 leading-relaxed">${m(t.desc)}</p>
            <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-600 mt-3 group-hover:gap-2 transition-all">${m(t.cta)} <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></span>
          </a>`).join("")}
      </div>
    </section>`}function We(){const e=[{icon:"lock",title:"Secure Checkout",desc:"Encrypted, protected payments — SSL secure and payment protection."},{icon:"package-search",title:"Order Tracking",desc:"Follow every order from processing to delivery."},{icon:"headset",title:"Customer Support",desc:"Friendly support for orders, payments and shipping."},{icon:"truck",title:"Worldwide Delivery",desc:"Free standard worldwide shipping on your order."},{icon:"rotate-ccw",title:"Easy Returns",desc:"Simple 14-day returns on eligible items."},{icon:"shield-check",title:"Trusted Marketplace",desc:"Real products, real sellers, verified every step of the way."}];return`
    <section class="showroom-section space-y-3">
      ${w("shield-check","Why Shop With Us","Legitimate benefits you can count on.")}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        ${e.map(t=>`
          <div class="bg-white border border-gray-200 rounded-2xl p-4 text-center">
            <div class="mx-auto p-2.5 bg-blue-50 rounded-xl w-fit mb-3"><i data-lucide="${t.icon}" class="w-5 h-5 text-blue-600"></i></div>
            <h4 class="text-xs font-black text-gray-900">${m(t.title)}</h4>
            <p class="text-[11px] text-gray-500 mt-1 leading-relaxed">${m(t.desc)}</p>
          </div>`).join("")}
      </div>
    </section>`}function ze(e){const r=[{label:"Real Estate",icon:"home",keyword:"houses"},{label:"Cars",icon:"car-front",keyword:"cars"},{label:"Trucks",icon:"truck",keyword:"trucks"},{label:"Motorhomes",icon:"bus",keyword:"motorhomes"},{label:"Jewelry",icon:"gem",keyword:"jewel"},{label:"Watches",icon:"watch",keyword:"watch"},{label:"Fashion & Shoes",icon:"shirt",keyword:"fashion"},{label:"Electronics",icon:"smartphone",keyword:"electronic"},{label:"Home Appliances",icon:"washing-machine",keyword:"appliance"},{label:"Kitchen & Appliances",icon:"chef-hat",keyword:"kitchen"},{label:"Babies & Kids",icon:"baby",keyword:"kids"},{label:"Tools & Hardware",icon:"wrench",keyword:"tool"}].map(n=>{const s=e.find(i=>(i.title||"").toLowerCase().includes(n.keyword)||(i.category||"").toLowerCase().includes(n.keyword)),a=s?F(s):I,c=e.filter(i=>(i.title||"").toLowerCase().includes(n.keyword)||(i.category||"").toLowerCase().includes(n.keyword)).length;return`
      <a href="/details.html" onclick="event.preventDefault();window._filterShowroomByCategory && window._filterShowroomByCategory('${m(n.label)}');document.getElementById('showroom-directory') && document.getElementById('showroom-directory').scrollIntoView({behavior:'smooth'})"
         class="group relative overflow-hidden rounded-2xl bg-gray-100 block aspect-[4/3]">
        <img src="${m(a)}" alt="${m(n.label)}" loading="lazy" decoding="async"
             class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             onerror="this.onerror=null;this.src='${I}'">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div class="absolute bottom-0 inset-x-0 p-3">
          <div class="flex items-center gap-1.5 text-white font-black text-sm"><i data-lucide="${n.icon}" class="w-4 h-4"></i> ${m(n.label)}</div>
          <p class="text-[10px] text-white/80 mt-0.5">${c} items</p>
        </div>
      </a>`});return`
    <section class="showroom-section space-y-3">
      ${w("layout-grid","Shop by Category","Jump straight to the products you care about.")}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">${r.join("")}</div>
    </section>`}function Ke(e){const t=e.slice(0,8);return t.length?`
    <section class="showroom-section space-y-3" data-hb-rail="more-products">
      ${w("package-plus","More Products","Keep browsing — plenty more real products to discover.")}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        ${t.map((r,n)=>`<div data-hb-card="${n}" class="w-full"></div>`).join("")}
      </div>
    </section>`:""}function Je(e){const r=e.filter(a=>L(a))[0]||e[0];if(!r)return"";const n=F(r),s=L(r);return`
    <section class="showroom-section space-y-3">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-600 text-white text-center py-10 sm:py-14 px-5">
        <div class="absolute inset-0 opacity-20">
          <img src="${m(n)}" alt="" loading="lazy" decoding="async"
               class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${I}'">
        </div>
        <div class="relative max-w-2xl mx-auto">
          <span class="inline-block text-[10px] font-black uppercase tracking-[0.3em] bg-white/15 backdrop-blur rounded-full px-3 py-1 mb-3">Limited Time Offers</span>
          <h3 class="text-2xl sm:text-4xl font-black leading-tight">Big Savings on Real Products</h3>
          <p class="text-sm sm:text-base text-white/85 mt-3 max-w-xl mx-auto">Genuine discounts on genuine items — ${m(r.title||"our top products")} and more. Don’t miss out.</p>
          <div class="flex items-center justify-center gap-2 mt-4 text-sm">
            ${s?`<span class="text-white/70 line-through">${E({price:s.real,currency:r.currency,price_period:r.price_period})}</span>`:""}
            <span class="text-2xl font-black">${E(r)}</span>
            ${s?`<span class="text-[10px] font-black bg-red-500 rounded-full px-2 py-0.5">-${s.pct}%</span>`:""}
          </div>
          <a href="/details.html?id=${encodeURIComponent(r.property_id)}"
             class="inline-flex items-center gap-2 mt-6 bg-white text-blue-800 font-black text-sm px-7 py-3 rounded-full hover:gap-3 transition-all shadow-lg shadow-blue-900/30">
            SHOP NOW <i data-lucide="shopping-bag" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </section>`}async function Y(){const e=Re();if(!e)return;let t={};try{t=await ue()}catch{}let r=[],n=[];try{await ae(),r=ie()||[],n=oe()||[],n.length||(n=r)}catch{}try{const{PRODUCT_LISTINGS:l}=await x(async()=>{const{PRODUCT_LISTINGS:f}=await import("./products-data-CGLFLAJM.js");return{PRODUCT_LISTINGS:f}},[]),{PRODUCT_EXTRA_LISTINGS:o}=await x(async()=>{const{PRODUCT_EXTRA_LISTINGS:f}=await import("./products-extra-DecCj9NU.js");return{PRODUCT_EXTRA_LISTINGS:f}},[]),h=[...l||[],...o||[]],p=new Set(n.map(f=>f.property_id||f.id));for(const f of h){const g=f.property_id||f.id;g&&!p.has(g)&&(p.add(g),n.push(f))}}catch{}try{const{isCatalogListingHidden:l}=await x(async()=>{const{isCatalogListingHidden:o}=await import("./catalog-hidden-store-CaPr0Ta1.js");return{isCatalogListingHidden:o}},__vite__mapDeps([0,1]));n=n.filter(o=>{const h=o.property_id||o.id;if(!h)return!1;try{return!l(h)}catch{return!0}})}catch{}const s=[Ne(n),Ue(n),He(n,r),qe(),Fe(t),Ge(t),Ve(),We(),ze(n),Ke(n),Je(n)].join("");if(!s.trim())return;e.innerHTML=s;const a=[{rail:"special-offers",items:n.filter(l=>L(l)).slice(0,10)},{rail:"more-products",items:n.slice(0,8)}],c=new Set,i=l=>{const o=l&&(l.property_id||l.id);return!o||c.has(o)?!1:(c.add(o),!0)},d=r.filter(i);let u=d;d.length?u=[...d,...n.filter(l=>(l.category||"").toLowerCase()==="new arrivals"&&i(l))].slice(0,10):u=n.filter(i).slice(0,10),a.push({rail:"new-arrivals",items:u});for(const{rail:l,items:o}of a){const h=e.querySelector(`[data-hb-rail="${l}"]`);if(!h||!o.length)continue;const p=h.querySelectorAll("[data-hb-card]");o.forEach((f,g)=>{const O=p[g];if(O)try{const y=de(f);if(O.replaceChildren(y),window.lucide)try{lucide.createIcons()}catch{}}catch{}})}if(window.lucide)try{lucide.createIcons()}catch{}window.dispatchEvent&&window.dispatchEvent(new CustomEvent("homepage-bottom-ready"))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Y):Y();let k=null,T=null;function R(e){const t=document.createElement("div");return t.textContent=e==null?"":String(e),t.innerHTML}async function ne(e){if(!e)return null;const t=await b(),{data:r}=await t.from("profiles").select("display_name, first_name, last_name, avatar_url").eq("user_id",e.id).maybeSingle();return r}function j(e,t){return e?t?.display_name?t.display_name:t?.first_name||t?.last_name?`${t.first_name||""} ${t.last_name||""}`.trim():e.email.split("@")[0]:"Guest User"}function G(e,t){const r=document.getElementById("hdr-signin-btn"),n=document.getElementById("hdr-account-btn"),s=document.getElementById("hdr-account-label");r&&n&&(e?(r.classList.add("hidden"),n.classList.remove("hidden"),s&&(s.textContent=j(e,t))):(r.classList.remove("hidden"),n.classList.add("hidden")));const a=document.getElementById("nav-user-name"),c=document.getElementById("nav-user-sub"),i=document.getElementById("nav-signout-row"),d=document.getElementById("nav-signin-btn"),u=document.getElementById("nav-user-strip");e?(a&&(a.textContent=j(e,t)),c&&(c.textContent=e.email),i&&i.classList.remove("hidden"),d&&d.classList.add("hidden"),u&&u.classList.remove("hidden")):(a&&(a.textContent="Guest User"),c&&(c.textContent="Tap to sign in"),i&&i.classList.add("hidden"),d&&d.classList.remove("hidden"),u&&u.classList.add("hidden"));const l=document.getElementById("more-signout");l&&l.classList.toggle("hidden",!e);const o=document.getElementById("more-account-card");if(o)if(e){const h=j(e,t),p=(h.replace(/[^a-zA-Z0-9 ]/g,"").trim().split(/\s+/).slice(0,2).map(f=>f[0]||"").join("")||"?").toUpperCase();o.innerHTML=`
        <button onclick="closeMoreMenu();window.location.href='/account.html'"
                class="w-full flex items-center gap-3 px-3 py-3 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-blue-500/40 transition text-left">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0 text-white text-sm font-black">${R(p)}</div>
          <div class="flex-1 min-w-0">
            <p class="text-[13px] font-bold text-gray-900 leading-none truncate">${R(h)}</p>
            <p class="text-[11px] text-gray-600 mt-0.5 leading-none truncate">${R(e.email||"")}</p>
          </div>
          <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 shrink-0"><i data-lucide="shield-check" class="w-3 h-3"></i>Account</span>
        </button>`}else o.innerHTML=`
        <button onclick="closeMoreMenu();openAuthModal();"
                class="w-full flex items-center gap-3 px-3 py-3 rounded-xl bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 hover:border-blue-400/60 hover:bg-blue-100 transition text-left active:scale-[0.99]">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0 shadow-md shadow-blue-500/30">
            <i data-lucide="user-round" class="w-5 h-5 text-white"></i>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-[13px] font-bold text-gray-900 leading-none">Sign In / Create Account</p>
            <p class="text-[11px] text-gray-600 mt-0.5 leading-none">Orders, wishlist &amp; more</p>
          </div>
          <i data-lucide="chevron-right" class="w-4 h-4 text-gray-500 shrink-0"></i>
        </button>`;window.lucide&&lucide.createIcons()}async function se(){const e=await b(),{data:{session:t}}=await e.auth.getSession();k=t?.user||null,T=k?await ne(k):null,G(k,T)}async function Xe(){await(await b()).auth.signOut(),k=null,T=null,G(null,null),window.location.href="/"}(async()=>(await b()).auth.onAuthStateChange((t,r)=>{(async()=>(k=r?.user||null,T=k?await ne(k):null,G(k,T)))()}))();window.refreshNavUserState=se;window.signOutUser=Xe;se();function Q(){x(()=>import("./special-order-D93RR85t.js"),__vite__mapDeps([2,1]))}window.addEventListener("load",()=>{typeof requestIdleCallback=="function"?requestIdleCallback(Q,{timeout:3e3}):setTimeout(Q,3e3)});
