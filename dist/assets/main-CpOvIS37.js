const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/catalog-hidden-store-Cc-A47vR.js","assets/scroll-progress-Hgfzz0FV.js","assets/special-order-XRn9Pv8P.js"])))=>i.map(i=>d[i]);
import{j as w,_ as x,l as Q,k as X,g as Z,e as L}from"./scroll-progress-Hgfzz0FV.js";import"./localization-BwnLBrky.js";import{f as ee,c as te,r as re}from"./showroom-cards-BpF0BDMM.js";import{c as se}from"./payment-settings-BMupBtVE.js";import"./native-bridge-CBuCEA-K.js";import"./localization-bootstrap-CVcSernT.js";import"./truck-data-DnyLExat.js";import"./motorhome-data-SSjGu6g8.js";import"./products-data-CGLFLAJM.js";import"./products-extra-DecCj9NU.js";import"./catalog-hidden-store-Cc-A47vR.js";import"./cart-DNy8CJA3.js";import"./supabase-client-nvpjTmO6.js";function T(){let e=localStorage.getItem("kco_search_session");return e||(e="sess_"+Date.now()+"_"+Math.random().toString(36).slice(2),localStorage.setItem("kco_search_session",e)),e}const ae=18e4,S=new Map;function N(e){const t=S.get(e);return t?Date.now()-t.ts>ae?(S.delete(e),null):(S.delete(e),S.set(e,t),t.data):null}function U(e,t){if(S.size>300){const r=S.keys().next().value;S.delete(r)}S.set(e,{data:t,ts:Date.now()})}const C=new Map;function q(e,t){if(C.has(e))return C.get(e);const r=t().finally(()=>C.delete(e));return C.set(e,r),r}const O={phone:["smartphone","mobile","cellphone"],laptop:["notebook","computer","macbook"],car:["vehicle","auto","sedan","suv"],house:["home","property","apartment","villa"],tv:["television","monitor"],headphones:["earphones","earbuds","headset"],shoes:["sneakers","footwear","boots"],watch:["smartwatch","timepiece"],bag:["handbag","purse","backpack"],camera:["dslr","mirrorless"],motorhome:["camper","rv","diesel pusher","class a","class b","class c"],truck:["pickup","lorry","semi"],suv:["crossover","jeep"],villa:["mansion","estate"],apartment:["condo","flat","studio"],furniture:["chair","table","sofa","desk"],jewellery:["jewelry","ring","necklace","bracelet"],fashion:["clothing","apparel","clothes"],electronics:["gadget","device","tech"],samsung:["galaxy"],apple:["iphone","macbook","ipad","airpods"],mercedes:["benz","amg"],bmw:["bimmer"],toyota:["camry","corolla","hilux"],honda:["civic","accord"]};function K(e){const t=e.toLowerCase().split(/\s+/).filter(Boolean),r=[...t];for(const s of t){const a=s.endsWith("s")?s.slice(0,-1):s;O[s]&&r.push(...O[s].slice(0,3)),O[a]&&a!==s&&r.push(...O[a].slice(0,2)),a!==s&&r.push(a)}return[...new Set(r)].join(" ")}let _=null,R=null;function ne(e){return[e.title||"",e.brand||"",e.category||"",e.subcategory||"",Array.isArray(e.features)?e.features.join(" "):"",Array.isArray(e.tags)?e.tags.join(" "):"",(e.description||"").slice(0,300)].join(" ").toLowerCase()}function B(){return _?Promise.resolve(_):R||(R=Promise.all([x(()=>import("./scroll-progress-Hgfzz0FV.js").then(e=>e.s),[]),x(()=>import("./products-data-CGLFLAJM.js"),[]),x(()=>import("./products-extra-DecCj9NU.js"),[]),x(()=>import("./truck-data-DnyLExat.js"),[]),x(()=>import("./motorhome-data-SSjGu6g8.js"),[])]).then(([e,t,r,s,a])=>(_=[...e.SHOWROOM_LISTINGS||[],...t.PRODUCT_LISTINGS||[],...r.PRODUCT_EXTRA_LISTINGS||[],...s.TRUCK_LISTINGS||[],...a.MOTORHOME_LISTINGS||[]].filter(n=>n&&n.property_id).map(n=>({p:n,hay:ne(n)})),_)).catch(()=>(_=[],_)),R)}function ie(){B().catch(()=>{})}function G(e,t){return Promise.race([e,new Promise(r=>setTimeout(()=>r(null),t))])}function oe(e){const t=Array.isArray(e.images)?e.images:[];return{listing_id:e.property_id,property_id:e.property_id,title:e.title||"Untitled",brand:e.brand,description:e.description,category:e.category,subcategory:e.subcategory,images:t,thumbnail:t[0]||null,price:Number(e.price)||0,currency:e.currency||"USD",entity_type:e.listing_type||"product",is_special_order:!1}}function j(e,t){if(!_||_.length===0)return[];const r=e.trim().toLowerCase();if(!r)return[];const s=r.split(/\s+/).filter(Boolean),a=[];for(const{p:n,hay:c}of _){const i=(n.title||"").toLowerCase(),d=i.includes(r),p=c.includes(r),l=s.every(g=>i.includes(g)||c.includes(g)),o=s.some(g=>i.includes(g)||c.includes(g));let m=0;i===r&&(m+=200),i.startsWith(r)&&(m+=150),d&&(m+=100),p&&(m+=60),l?m+=50:o&&(m+=25),m>0&&a.push({s:m,r:oe(n)})}return a.sort((n,c)=>c.s-n.s),a.slice(0,t).map(n=>n.r)}async function ce(e,t=30,r){if(!e||e.trim().length<1)return{results:[],count:0,marketplaceCount:0,supplierCount:0};const s=e.trim(),a=`search:${s}:${t}`,n=N(a);return n?(r&&r(n.results,n),n):q(a,async()=>{const c=await w(),i=K(s);s.toLowerCase(),B().then(()=>{const h=j(s,t);h.length>0&&r&&r(h,{count:h.length,marketplaceCount:h.length,supplierCount:0})}).catch(()=>{});const{data:d,error:p}=await c.rpc("smart_search_quick",{p_query:i,p_limit:t});let l=[];!p&&d&&d.length>0&&(l=d),await B().catch(()=>{});const o=j(s,t),m=new Set(l.map(h=>h.property_id||h.listing_id));for(const h of o)m.has(h.property_id)||(m.add(h.property_id),l.push(h));r&&l.length>0&&r(l,{count:l.length,marketplaceCount:l.length,supplierCount:0});let g=[];if(l.length<t)try{const{data:h,error:A}=await c.rpc("search_supplier_catalogue",{p_query:s,p_limit:t-l.length});!A&&h&&h.length>0&&(g=h.map(y=>({listing_id:null,supplier_item_id:y.id,title:y.title,brand:y.brand,description:y.description,category:y.category,images:y.images,thumbnail:Array.isArray(y.images)&&y.images.length>0?y.images[0]:null,price:y.selling_price,currency:y.supplier_currency,entity_type:"special_order",available_quantity:y.available_quantity,estimated_delivery_days:y.estimated_delivery_days,shipping_cost:y.shipping_cost,supplier_name:y.supplier_name,is_special_order:!0})),r&&g.length>0&&r([...l,...g],{count:l.length+g.length,marketplaceCount:l.length,supplierCount:g.length}))}catch{}try{const h=T();c.rpc("record_search",{p_query:s,p_result_count:l.length+g.length,p_session_key:h}).then(()=>{},()=>{})}catch{}const f={results:[...l,...g],count:l.length+g.length,marketplaceCount:l.length,supplierCount:g.length,_final:!0};return U(a,f),le(s,t),f})}async function le(e,t){const r=await w(),s=e.toLowerCase().split(/\s+/).filter(Boolean);if(s.length<2)return;const a=new Set;for(const n of s)n.endsWith("s")?a.add(n.slice(0,-1)):a.add(n+"s");for(const n of a){const c=`search:${n}:${t}`;!N(c)&&!C.has(c)&&q(c,()=>r.rpc("smart_search_quick",{p_query:n,p_limit:t}).then(({data:i,error:d})=>{!d&&i&&U(c,i)}).catch(()=>{}))}}async function de(e,t=8){if(!e||e.trim().length<1)return[];const r=e.trim(),s=`sugg:${r}:${t}`,a=N(s);return a||q(s,async()=>{const n=await w(),c=K(r);await B().catch(()=>{});const i=j(r,t).map(o=>({id:o.property_id,title:o.title,category:o.category,price:o.price,currency:o.currency,entity_type:o.entity_type,thumbnail:o.thumbnail})),d=new Set(i.map(o=>o.id||o.title)),p=await G(n.rpc("smart_search_quick",{p_query:c,p_limit:t}),2e3);let l=[];if(p&&!p.error&&p.data&&p.data.length>0)l=p.data;else if(p&&p.error){const o=await G(n.rpc("smart_search_fuzzy",{p_query:r.toLowerCase(),p_limit:t}),1500);o&&o.data&&(l=o.data)}for(const o of l)!d.has(o.listing_id)&&!d.has(o.title)&&(d.add(o.listing_id),i.push({id:o.listing_id,title:o.title,category:o.category,price:o.price,currency:o.currency,entity_type:o.entity_type,thumbnail:o.thumbnail}));return U(s,i),i})}async function ue(e=5){const t=T();try{const s=await w(),{data:a,error:n}=await s.from("search_history").select("query, created_at").eq("session_key",t).order("created_at",{ascending:!1}).limit(e);if(!n&&a){const c=new Set;return a.filter(i=>c.has(i.query.toLowerCase())?!1:(c.add(i.query.toLowerCase()),!0))}}catch{}return JSON.parse(localStorage.getItem("kco_recent_searches")||"[]").map(s=>({query:s,created_at:null}))}async function pe(e){if(!e||e.trim().length<1)return;const t=e.trim(),r=T();try{(await w()).from("search_history").insert({session_key:r,query:t}).then(()=>{},()=>{})}catch{}const a=JSON.parse(localStorage.getItem("kco_recent_searches")||"[]").filter(n=>n.toLowerCase()!==t.toLowerCase());a.unshift(t),localStorage.setItem("kco_recent_searches",JSON.stringify(a.slice(0,10)))}async function he(){const e=T();try{await(await w()).from("search_history").delete().eq("session_key",e)}catch{}localStorage.removeItem("kco_recent_searches")}async function me(e=8){try{const t=await w(),{data:r,error:s}=await t.rpc("smart_search_trending",{p_limit:e});if(!s&&r)return r.map(a=>a.query)}catch{}return["Samsung Galaxy","iPhone","Mercedes","Real Estate","Laptop","Villa","Beach House","Motorhome"]}let b=null,D=!1;function ge(e,t){const r=window.SpeechRecognition||window.webkitSpeechRecognition;return r?D&&b?(b.stop(),{supported:!0}):(b=new r,b.continuous=!1,b.interimResults=!0,b.lang="en-US",b.onstart=()=>{D=!0,t?.(!0)},b.onresult=s=>{let a="";for(let n=0;n<s.results.length;n++)a+=s.results[n][0].transcript;e?.(a)},b.onerror=()=>{t?.(!1)},b.onend=()=>{D=!1,t?.(!1)},b.start(),{supported:!0}):{supported:!1}}function fe(){return D}window._smartSearch=ce;window._getLiveSuggestions=de;window._getRecentSearches=ue;window._saveRecentSearch=pe;window._clearRecentSearches=he;window._getTrendingSearches=me;window._toggleVoiceSearch=ge;window._isVoiceListening=fe;window._getSessionKey=T;window._filterShowroomByCategory=ee;window._clearShowroomFilter=te;ie();window.dispatchEvent(new CustomEvent("smart-search-ready"));const ye="id,title,description,image_url,video_url,poster_url,link_type,link_target,ad_label,start_date,end_date,is_active,sort_order,created_at",we=["Featured","Sponsored","Featured Collection","Discover","Promotion"];function be(e){if(!e.is_active)return!1;const t=Date.now();return!(e.start_date&&new Date(e.start_date).getTime()>t||e.end_date&&new Date(e.end_date).getTime()<t)}function ve(e){const t=(e.title||"").trim().toLowerCase(),r=(e.description||"").trim().toLowerCase(),s=["home","house","apartment","villa","cottage","condo","townhouse","bungalow"].some(d=>t.includes(d)||r.includes(d)),a=["truck","trucks","pickup","delivery","freight"].some(d=>t.includes(d)||r.includes(d)),n=["motorhome","motor home","rv","recreational vehicle","camper","campervan"].some(d=>t.includes(d)||r.includes(d)),c=["car","cars","vehicle","vehicles","sedan","suv","coupe","hatchback"].some(d=>t.includes(d)||r.includes(d)),i=!["kitchen","cooking","culinary"].some(d=>t.includes(d)||r.includes(d));return(s||a||n||c)&&i}function _e(e){if(!e||!be(e)||!ve(e))return null;const t=(e.image_url||"").trim()||null,r=null,s=(e.poster_url||"").trim()||null;if(!t)return null;const a=(e.title||"Marketplace Promotion").trim(),n=(e.description||"").trim(),c=we.includes(e.ad_label)?e.ad_label:"Featured",i=["product","category","section","none"].includes(e.link_type)?e.link_type:"none";return{adId:e.id,isAd:!0,isLive:!1,badge:c,title:a,desc:n,titles:{en:a},descs:{en:n},image:t,video:r,poster:s,linkType:i,linkTarget:(e.link_target||"").trim()||null,sortOrder:Number(e.sort_order)||0}}async function xe(){try{const e=await w(),{data:t,error:r}=await e.from("promotions").select(ye).eq("is_active",!0).order("sort_order",{ascending:!0}).order("created_at",{ascending:!1});return r||!t?[]:t.map(_e).filter(Boolean)}catch{return[]}}async function z(){const e=await xe();return window._ads=e,window.dispatchEvent(new CustomEvent("ads-updated",{detail:e})),e}async function ke(){try{return(await w()).channel("public:promotions:ads").on("postgres_changes",{event:"*",schema:"public",table:"promotions"},()=>{z()}).subscribe()}catch{return null}}window._loadAds=z;window._subscribeAds=ke;window._ads=[];const I="/fallback.svg",Se=()=>document.getElementById("homepage-bottom");function u(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function $e(e){return Array.isArray(e.images)?e.images.filter(Boolean):typeof e.images=="string"?[e.images]:[]}function F(e){return $e(e)[0]||I}function $(e){const t=parseFloat(e.real_price),r=parseFloat(e.price);return!(t>0)||!(r>0)||t<=r?null:{real:t,price:r,pct:Math.round((1-r/t)*100)}}function v(e,t,r,s="blue"){const a=s==="amber";return`
    <div class="relative pt-2 pb-3">
      <div class="flex items-center gap-3.5">
        <div class="p-3 rounded-2xl border ${a?"border-amber-400/40":"border-blue-500/30"} ${a?"bg-amber-400/15":"bg-blue-500/10"} shrink-0" style="box-shadow:${a?"0 0 22px rgba(251,191,36,0.35)":"0 0 22px rgba(59,130,246,0.25)"}">
          <i data-lucide="${e}" class="w-6 h-6 ${a?"text-amber-300":"text-blue-300"}"></i>
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight">
            <span class="bg-gradient-to-r ${a?"from-amber-100 via-white to-orange-200":"from-blue-200 via-white to-blue-300"} bg-clip-text text-transparent">${u(t)}</span>
          </h3>
          ${r?`<p class="text-gray-400 text-xs sm:text-[13px] leading-tight mt-1 truncate">${u(r)}</p>`:""}
        </div>
      </div>
      <div class="mt-3 h-px bg-gradient-to-r ${a?"from-amber-400/60 via-orange-300/40":"from-blue-500/40 via-gray-700/40"} to-transparent"></div>
    </div>`}function Ce(e){const t=e.filter(a=>$(a)),r=(t.length?t:e).slice(0,3);if(!r.length)return"";const s=r.map((a,n)=>{const c=F(a),i=$(a),d=a.title||a.name||"Featured product",p=i?`Save ${i.pct}% — was ${L({price:i.real,currency:a.currency,price_period:a.price_period})}`:a.category||"Featured product",l=["from-blue-700 via-blue-500 to-cyan-400","from-violet-700 via-purple-500 to-pink-400","from-emerald-700 via-teal-500 to-cyan-300"][n%3];return`
      <a href="/details.html?id=${encodeURIComponent(a.property_id)}"
         class="group relative overflow-hidden rounded-2xl bg-gradient-to-br ${l} text-white block min-h-[220px] sm:min-h-[260px] shadow-lg shadow-blue-500/10 hover:shadow-xl transition">
        <div class="absolute inset-0 opacity-90">
          <img src="${u(c)}" alt="${u(d)}" loading="lazy" decoding="async"
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               onerror="this.onerror=null;this.src='${I}'">
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div class="absolute bottom-0 inset-x-0 p-4 sm:p-5">
          <span class="inline-block text-[10px] font-black uppercase tracking-wider bg-white/15 backdrop-blur rounded-full px-2.5 py-1 mb-2">Featured Promotion</span>
          <h4 class="font-black text-white text-lg sm:text-xl leading-tight line-clamp-2">${u(d)}</h4>
          <div class="flex items-center flex-wrap gap-2 mt-2">
            <span class="text-sm font-black text-white">${L(a)}</span>
            ${i?`<span class="text-xs text-white/70 line-through">${L({price:i.real,currency:a.currency,price_period:a.price_period})}</span>
            <span class="text-[10px] font-black bg-red-500 rounded-full px-2 py-0.5">-${i.pct}%</span>`:""}
          </div>
          <p class="text-[11px] text-white/70 mt-1 truncate">${u(p)}</p>
          <span class="inline-flex items-center gap-1.5 mt-3 bg-white text-gray-900 text-xs font-black px-4 py-2 rounded-full group-hover:gap-2.5 transition-all">
            Shop Now <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </span>
        </div>
      </a>`});return`
    <section class="showroom-section space-y-3">
      ${v("megaphone","Featured Promotions","Hand-picked real products with the best savings right now.")}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">${s.join("")}</div>
    </section>`}function Le(e){const t=e.filter(r=>$(r)).slice(0,10);return t.length?`
    <section class="showroom-section space-y-3" data-hb-rail="special-offers">
      ${v("percent","Special Offers","Genuinely discounted products — real savings on real items.","amber")}
      <div class="relative">
        <div class="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth no-scrollbar">
          ${t.map((r,s)=>`<div data-hb-card="${s}" class="w-[240px] sm:w-[260px] shrink-0 snap-start"></div>`).join("")}
        </div>
      </div>
    </section>`:""}function Ie(e,t){const r=new Set,s=c=>{const i=c&&(c.property_id||c.id);return!i||r.has(i)?!1:(r.add(i),!0)};let a=t.filter(s);const n=e.filter(c=>(c.category||"").toLowerCase()==="new arrivals"&&s(c));return a=[...a,...n].slice(0,10),a.length||(a=e.filter(s).slice(0,10)),a.length?`
    <section class="showroom-section space-y-3" data-hb-rail="new-arrivals">
      ${v("sparkles","New Arrivals","Freshly added products — newest listings first.")}
      <div class="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth no-scrollbar">
        ${a.map((c,i)=>`<div data-hb-card="${i}" class="w-[240px] sm:w-[260px] shrink-0 snap-start"></div>`).join("")}
      </div>
    </section>`:""}function Ee(){const e=[{icon:"search",title:"Browse Products",desc:"Explore the showroom or search for what you need."},{icon:"eye",title:"View Details",desc:"Check photos, price, description and availability."},{icon:"shopping-cart",title:"Add to Cart / Buy",desc:"Add items to your cart or buy now."},{icon:"credit-card",title:"Checkout",desc:"Enter your delivery details and proceed to payment."},{icon:"lock",title:"Payment",desc:"Pay securely with card or bank transfer."},{icon:"check-circle",title:"Order Confirmation",desc:"Get instant confirmation by email."},{icon:"package",title:"Delivery",desc:"Your order is packed, shipped and delivered to you."}];return`
    <section class="showroom-section space-y-3">
      ${v("list-ordered","How to Order","Ordering is simple — seven easy steps from browse to doorstep.")}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        ${e.map((t,r)=>`
          <div class="relative bg-white border border-gray-200 rounded-2xl p-4">
            <span class="absolute top-3 right-3 text-[10px] font-black text-gray-300">${String(r+1).padStart(2,"0")}</span>
            <div class="p-2.5 bg-blue-50 rounded-xl w-fit mb-3"><i data-lucide="${t.icon}" class="w-5 h-5 text-blue-600"></i></div>
            <h4 class="text-sm font-black text-gray-900">${u(t.title)}</h4>
            <p class="text-xs text-gray-500 mt-1 leading-relaxed">${u(t.desc)}</p>
          </div>`).join("")}
      </div>
    </section>`}function Te(e){const t=[{icon:"globe",title:"Free Worldwide Shipping",desc:"Standard shipping to any country is free on every order."},{icon:"truck",title:"Shipping Methods",desc:"Standard worldwide delivery — your order is packed and handed to our trusted courier."},{icon:"map-pin",title:"Delivery Areas",desc:"We ship internationally. Delivery details are confirmed from your address at checkout."},{icon:"package-search",title:"Order Tracking",desc:"Track your order any time from My Account → Orders, plus email updates at each stage."},{icon:"clock",title:"Estimated Delivery",desc:"Estimated delivery is shown at checkout based on your shipping country. Exact times depend on your location."},{icon:"rotate-ccw",title:"Returns & Refunds",desc:"Easy 14-day returns and a clear refund process for eligible orders."}];return`
    <section class="showroom-section space-y-3">
      ${v("truck","Delivery Information","How you receive your goods — based on the store’s actual shipping setup.")}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        ${t.map(r=>`
          <div class="bg-white border border-gray-200 rounded-2xl p-4">
            <div class="p-2.5 bg-blue-50 rounded-xl w-fit mb-3"><i data-lucide="${r.icon}" class="w-5 h-5 text-blue-600"></i></div>
            <h4 class="text-sm font-black text-gray-900">${u(r.title)}</h4>
            <p class="text-xs text-gray-500 mt-1 leading-relaxed">${u(r.desc)}</p>
          </div>`).join("")}
      </div>
      ${e&&e.payment_gateway?`<p class="text-[11px] text-gray-400 px-1">Payment gateway: ${u(e.payment_gateway)} · Mode: ${u(e.payment_mode||"test")}</p>`:""}
    </section>`}function Ae(e){const t=[],r=e?e.manual_payment_enabled!==!1:!0,s=e?!!e.flutterwave_enabled:!1;return r&&t.push({icon:"landmark",title:"Manual Bank / ATM Transfer",desc:"Pay by bank transfer or ATM using the store’s official receiving account, then upload your payment receipt for verification."}),s&&t.push({icon:"zap",title:"Flutterwave",desc:"Pay securely online with your ATM/debit card, bank transfer, or mobile money through Flutterwave."}),t.length?`
    <section class="showroom-section space-y-3">
      ${v("credit-card","Payment Methods","Only the payment methods actually accepted at checkout are shown.")}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${t.map(a=>`
          <div class="flex items-start gap-3 bg-white border border-gray-200 rounded-2xl p-4">
            <div class="p-2.5 bg-emerald-50 rounded-xl shrink-0"><i data-lucide="${a.icon}" class="w-5 h-5 text-emerald-600"></i></div>
            <div>
              <h4 class="text-sm font-black text-gray-900">${u(a.title)}</h4>
              <p class="text-xs text-gray-500 mt-1 leading-relaxed">${u(a.desc)}</p>
            </div>
          </div>`).join("")}
      </div>
    </section>`:""}function Oe(){const e=[{icon:"message-circle",title:"Contact Us",desc:"Send us a message any time — we reply fast.",href:"/contact.html",cta:"Go to Contact"},{icon:"life-buoy",title:"Help Center",desc:"Answers to common questions about orders and payments.",href:"/help.html",cta:"Browse Help"},{icon:"mail",title:"Email Support",desc:"Reach support directly at support@weverseonlineshop.com.",href:"mailto:support@weverseonlineshop.com",cta:"Email Us"},{icon:"user-check",title:"Track Your Order",desc:"Check the live status of any order from your account.",href:"/account.html",cta:"Track Order"}];return`
    <section class="showroom-section space-y-3">
      ${v("headset","Customer Support","We’re here to help with orders, payments and delivery.")}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        ${e.map(t=>`
          <a href="${t.href}" class="group bg-white border border-gray-200 rounded-2xl p-4 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition">
            <div class="p-2.5 bg-blue-50 rounded-xl w-fit mb-3"><i data-lucide="${t.icon}" class="w-5 h-5 text-blue-600"></i></div>
            <h4 class="text-sm font-black text-gray-900">${u(t.title)}</h4>
            <p class="text-xs text-gray-500 mt-1 leading-relaxed">${u(t.desc)}</p>
            <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-600 mt-3 group-hover:gap-2 transition-all">${u(t.cta)} <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></span>
          </a>`).join("")}
      </div>
    </section>`}function Re(){const e=[{icon:"lock",title:"Secure Checkout",desc:"Encrypted, protected payments — SSL secure and payment protection."},{icon:"package-search",title:"Order Tracking",desc:"Follow every order from processing to delivery."},{icon:"headset",title:"Customer Support",desc:"Friendly support for orders, payments and shipping."},{icon:"truck",title:"Worldwide Delivery",desc:"Free standard worldwide shipping on your order."},{icon:"rotate-ccw",title:"Easy Returns",desc:"Simple 14-day returns on eligible items."},{icon:"shield-check",title:"Trusted Marketplace",desc:"Real products, real sellers, verified every step of the way."}];return`
    <section class="showroom-section space-y-3">
      ${v("shield-check","Why Shop With Us","Legitimate benefits you can count on.")}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        ${e.map(t=>`
          <div class="bg-white border border-gray-200 rounded-2xl p-4 text-center">
            <div class="mx-auto p-2.5 bg-blue-50 rounded-xl w-fit mb-3"><i data-lucide="${t.icon}" class="w-5 h-5 text-blue-600"></i></div>
            <h4 class="text-xs font-black text-gray-900">${u(t.title)}</h4>
            <p class="text-[11px] text-gray-500 mt-1 leading-relaxed">${u(t.desc)}</p>
          </div>`).join("")}
      </div>
    </section>`}function De(e){const r=[{label:"Real Estate",icon:"home",keyword:"houses"},{label:"Cars",icon:"car-front",keyword:"cars"},{label:"Trucks",icon:"truck",keyword:"trucks"},{label:"Motorhomes",icon:"bus",keyword:"motorhomes"},{label:"Jewelry",icon:"gem",keyword:"jewel"},{label:"Watches",icon:"watch",keyword:"watch"},{label:"Fashion & Shoes",icon:"shirt",keyword:"fashion"},{label:"Electronics",icon:"smartphone",keyword:"electronic"},{label:"Home Appliances",icon:"washing-machine",keyword:"appliance"},{label:"Kitchen & Appliances",icon:"chef-hat",keyword:"kitchen"},{label:"Babies & Kids",icon:"baby",keyword:"kids"},{label:"Tools & Hardware",icon:"wrench",keyword:"tool"}].map(s=>{const a=e.find(i=>(i.title||"").toLowerCase().includes(s.keyword)||(i.category||"").toLowerCase().includes(s.keyword)),n=a?F(a):I,c=e.filter(i=>(i.title||"").toLowerCase().includes(s.keyword)||(i.category||"").toLowerCase().includes(s.keyword)).length;return`
      <a href="/details.html" onclick="event.preventDefault();window._filterShowroomByCategory && window._filterShowroomByCategory('${u(s.label)}');document.getElementById('showroom-directory') && document.getElementById('showroom-directory').scrollIntoView({behavior:'smooth'})"
         class="group relative overflow-hidden rounded-2xl bg-gray-100 block aspect-[4/3]">
        <img src="${u(n)}" alt="${u(s.label)}" loading="lazy" decoding="async"
             class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             onerror="this.onerror=null;this.src='${I}'">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div class="absolute bottom-0 inset-x-0 p-3">
          <div class="flex items-center gap-1.5 text-white font-black text-sm"><i data-lucide="${s.icon}" class="w-4 h-4"></i> ${u(s.label)}</div>
          <p class="text-[10px] text-white/80 mt-0.5">${c} items</p>
        </div>
      </a>`});return`
    <section class="showroom-section space-y-3">
      ${v("layout-grid","Shop by Category","Jump straight to the products you care about.")}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">${r.join("")}</div>
    </section>`}function Be(e){const t=e.slice(0,8);return t.length?`
    <section class="showroom-section space-y-3" data-hb-rail="more-products">
      ${v("package-plus","More Products","Keep browsing — plenty more real products to discover.")}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        ${t.map((r,s)=>`<div data-hb-card="${s}" class="w-full"></div>`).join("")}
      </div>
    </section>`:""}function Pe(e){const r=e.filter(n=>$(n))[0]||e[0];if(!r)return"";const s=F(r),a=$(r);return`
    <section class="showroom-section space-y-3">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-600 text-white text-center py-10 sm:py-14 px-5">
        <div class="absolute inset-0 opacity-20">
          <img src="${u(s)}" alt="" loading="lazy" decoding="async"
               class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${I}'">
        </div>
        <div class="relative max-w-2xl mx-auto">
          <span class="inline-block text-[10px] font-black uppercase tracking-[0.3em] bg-white/15 backdrop-blur rounded-full px-3 py-1 mb-3">Limited Time Offers</span>
          <h3 class="text-2xl sm:text-4xl font-black leading-tight">Big Savings on Real Products</h3>
          <p class="text-sm sm:text-base text-white/85 mt-3 max-w-xl mx-auto">Genuine discounts on genuine items — ${u(r.title||"our top products")} and more. Don’t miss out.</p>
          <div class="flex items-center justify-center gap-2 mt-4 text-sm">
            ${a?`<span class="text-white/70 line-through">${L({price:a.real,currency:r.currency,price_period:r.price_period})}</span>`:""}
            <span class="text-2xl font-black">${L(r)}</span>
            ${a?`<span class="text-[10px] font-black bg-red-500 rounded-full px-2 py-0.5">-${a.pct}%</span>`:""}
          </div>
          <a href="/details.html?id=${encodeURIComponent(r.property_id)}"
             class="inline-flex items-center gap-2 mt-6 bg-white text-blue-800 font-black text-sm px-7 py-3 rounded-full hover:gap-3 transition-all shadow-lg shadow-blue-900/30">
            SHOP NOW <i data-lucide="shopping-bag" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </section>`}async function V(){const e=Se();if(!e)return;let t={};try{t=await se()}catch{}let r=[],s=[];try{await Q(),r=X()||[],s=Z()||[],s.length||(s=r)}catch{}try{const{PRODUCT_LISTINGS:l}=await x(async()=>{const{PRODUCT_LISTINGS:f}=await import("./products-data-CGLFLAJM.js");return{PRODUCT_LISTINGS:f}},[]),{PRODUCT_EXTRA_LISTINGS:o}=await x(async()=>{const{PRODUCT_EXTRA_LISTINGS:f}=await import("./products-extra-DecCj9NU.js");return{PRODUCT_EXTRA_LISTINGS:f}},[]),m=[...l||[],...o||[]],g=new Set(s.map(f=>f.property_id||f.id));for(const f of m){const h=f.property_id||f.id;h&&!g.has(h)&&(g.add(h),s.push(f))}}catch{}try{const{isCatalogListingHidden:l}=await x(async()=>{const{isCatalogListingHidden:o}=await import("./catalog-hidden-store-Cc-A47vR.js");return{isCatalogListingHidden:o}},__vite__mapDeps([0,1]));s=s.filter(o=>{const m=o.property_id||o.id;if(!m)return!1;try{return!l(m)}catch{return!0}})}catch{}const a=[Ce(s),Le(s),Ie(s,r),Ee(),Te(t),Ae(t),Oe(),Re(),De(s),Be(s),Pe(s)].join("");if(!a.trim())return;e.innerHTML=a;const n=[{rail:"special-offers",items:s.filter(l=>$(l)).slice(0,10)},{rail:"more-products",items:s.slice(0,8)}],c=new Set,i=l=>{const o=l&&(l.property_id||l.id);return!o||c.has(o)?!1:(c.add(o),!0)},d=r.filter(i);let p=d;d.length?p=[...d,...s.filter(l=>(l.category||"").toLowerCase()==="new arrivals"&&i(l))].slice(0,10):p=s.filter(i).slice(0,10),n.push({rail:"new-arrivals",items:p});for(const{rail:l,items:o}of n){const m=e.querySelector(`[data-hb-rail="${l}"]`);if(!m||!o.length)continue;const g=m.querySelectorAll("[data-hb-card]");o.forEach((f,h)=>{const A=g[h];if(A)try{const y=re(f);if(A.replaceChildren(y),window.lucide)try{lucide.createIcons()}catch{}}catch{}})}if(window.lucide)try{lucide.createIcons()}catch{}window.dispatchEvent&&window.dispatchEvent(new CustomEvent("homepage-bottom-ready"))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",V):V();let k=null,E=null;function P(e){const t=document.createElement("div");return t.textContent=e==null?"":String(e),t.innerHTML}async function J(e){if(!e)return null;const t=await w(),{data:r}=await t.from("profiles").select("display_name, first_name, last_name, avatar_url").eq("user_id",e.id).maybeSingle();return r}function M(e,t){return e?t?.display_name?t.display_name:t?.first_name||t?.last_name?`${t.first_name||""} ${t.last_name||""}`.trim():e.email.split("@")[0]:"Guest User"}function H(e,t){const r=document.getElementById("hdr-signin-btn"),s=document.getElementById("hdr-account-btn"),a=document.getElementById("hdr-account-label");r&&s&&(e?(r.classList.add("hidden"),s.classList.remove("hidden"),a&&(a.textContent=M(e,t))):(r.classList.remove("hidden"),s.classList.add("hidden")));const n=document.getElementById("nav-user-name"),c=document.getElementById("nav-user-sub"),i=document.getElementById("nav-signout-row"),d=document.getElementById("nav-signin-btn"),p=document.getElementById("nav-user-strip");e?(n&&(n.textContent=M(e,t)),c&&(c.textContent=e.email),i&&i.classList.remove("hidden"),d&&d.classList.add("hidden"),p&&p.classList.remove("hidden")):(n&&(n.textContent="Guest User"),c&&(c.textContent="Tap to sign in"),i&&i.classList.add("hidden"),d&&d.classList.remove("hidden"),p&&p.classList.add("hidden"));const l=document.getElementById("more-signout");l&&l.classList.toggle("hidden",!e);const o=document.getElementById("more-account-card");if(o)if(e){const m=M(e,t),g=(m.replace(/[^a-zA-Z0-9 ]/g,"").trim().split(/\s+/).slice(0,2).map(f=>f[0]||"").join("")||"?").toUpperCase();o.innerHTML=`
        <button onclick="closeMoreMenu();window.location.href='/account.html'"
                class="w-full flex items-center gap-3 px-3 py-3 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-blue-500/40 transition text-left">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0 text-white text-sm font-black">${P(g)}</div>
          <div class="flex-1 min-w-0">
            <p class="text-[13px] font-bold text-gray-900 leading-none truncate">${P(m)}</p>
            <p class="text-[11px] text-gray-600 mt-0.5 leading-none truncate">${P(e.email||"")}</p>
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
        </button>`;window.lucide&&lucide.createIcons()}async function Y(){const e=await w(),{data:{session:t}}=await e.auth.getSession();k=t?.user||null,E=k?await J(k):null,H(k,E)}async function Me(){await(await w()).auth.signOut(),k=null,E=null,H(null,null),window.location.href="/"}(async()=>(await w()).auth.onAuthStateChange((t,r)=>{(async()=>(k=r?.user||null,E=k?await J(k):null,H(k,E)))()}))();window.refreshNavUserState=Y;window.signOutUser=Me;Y();function W(){x(()=>import("./special-order-XRn9Pv8P.js"),__vite__mapDeps([2,1]))}window.addEventListener("load",()=>{typeof requestIdleCallback=="function"?requestIdleCallback(W,{timeout:3e3}):setTimeout(W,3e3)});
