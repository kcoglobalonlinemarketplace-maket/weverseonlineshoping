const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/promo-backgrounds-Cv2azssI.js","assets/preload-helper-CLcXU_4U.js","assets/site-content-DqnRA8M3.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{_ as pe}from"./preload-helper-CLcXU_4U.js";import{P as Ae,a as Me,S as Te,T as xt,M as oa,c as ce,d as K,h as rr,l as dt,e as ia,f as na,j as vt,k as ut,m as U,n as Se,D as la,o as de,p as $e,q as ca,t as Ke,u as Lt,v as It,w as sr,x as or}from"./promo-backgrounds-Cv2azssI.js";import{c as ir}from"./categories-BEuiwWw5.js";import{supabase as C,isSupabaseConfigured as nr,ANON_KEY as lr,SUPABASE_URL as cr}from"./supabase-client-nvpjTmO6.js";import{g as Be,D as qe,l as pt}from"./site-content-DqnRA8M3.js";/* empty css                                       */const dr="https://weverseonlineshop.com";function wt(){try{if(window.Capacitor?.isNativePlatform?.())return dr}catch{}return window.location.origin}async function W(){const{data:{session:e}}=await C.auth.getSession();return e?.user||null}async function ur(){if(!await W())return!1;const{data:t}=await C.rpc("is_current_user_admin");return!!t}async function pr(e,t){const a=`${wt()}/auth.html`;return C.auth.signUp({email:e,password:t,options:{emailRedirectTo:a}})}async function mr(e,t){return C.auth.signInWithPassword({email:e,password:t})}async function hr(){return C.auth.signOut()}async function fr(e){return C.auth.resetPasswordForEmail(e,{redirectTo:`${wt()}/auth.html?reset=1`})}async function br(e){return C.auth.updateUser({password:e})}async function gr(e){return C.auth.resend({type:"signup",email:e})}function yr(e){return C.auth.onAuthStateChange((t,a)=>{e(a?.user||null)})}function xr(){return sessionStorage.getItem("kco_auth_redirect")||null}function se(e){sessionStorage.setItem("kco_auth_redirect",e)}function vr(){sessionStorage.removeItem("kco_auth_redirect")}async function wr(e,t){if(!nr)return{ok:!1,error:"Supabase credentials are missing."};const a=`${cr}/functions/v1/send-auth-email`;try{const{data:{session:r}}=await C.auth.getSession(),s=r?.access_token||lr,o=await fetch(a,{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify({type:e,...t})});let i={};try{i=await o.json()}catch{i={}}return{ok:o.ok&&!i.error,error:i.error}}catch(r){return{ok:!1,error:String(r)}}}const kr=Object.freeze(Object.defineProperty({__proto__:null,appOrigin:wt,clearRedirectAfterAuth:vr,getCurrentUser:W,getRedirectAfterAuth:xr,isAdmin:ur,onAuthChange:yr,resendVerification:gr,resetPassword:fr,sendAuthEmail:wr,setRedirectAfterAuth:se,signIn:mr,signOut:hr,signUp:pr,updateUserPassword:br},Symbol.toStringTag,{value:"Module"})),da=[];function At(e){return da.find(t=>t.property_id===e)||null}const ua=[];function _r(e){return ua.find(t=>t.property_id===e)||null}const Sr=[];let Ze=null;function pa(){return Ze||(Ze=pe(()=>Promise.resolve().then(()=>kr),void 0)),Ze}async function kt(){return(await pa()).getCurrentUser()}async function $r(e){return(await pa()).setRedirectAfterAuth(e)}const ma="kco_cart";function ha(){try{const e=JSON.parse(localStorage.getItem(ma)||"[]");if(!Array.isArray(e))return[];const t=[];for(const a of e)typeof a=="string"?t.push({id:a,qty:1}):a&&typeof a=="object"&&a.id&&t.push({id:a.id,qty:Math.max(1,parseInt(a.qty,10)||1)});return t}catch{return[]}}function Cr(e){try{localStorage.setItem(ma,JSON.stringify(e))}catch{}Er()}function Er(){window.dispatchEvent(new CustomEvent("kco-cart-changed",{detail:{count:Lr()}}))}function Lr(){return ha().reduce((e,t)=>e+t.qty,0)}function fa(e,t=1){if(!e)return;const a=ha(),r=a.find(s=>s.id===e);r?r.qty=Math.min(99,r.qty+t):a.push({id:e,qty:t}),Cr(a)}const te="Weverse Online Shop",ba="/fallback.svg",Ir="https://weverseonlineshop.com/brand-logo.jpeg";function ga(e){return e?/^(https?:|data:)/i.test(e)?e:(window.location.origin||"")+e:""}function Ar(e){const t=e?.price,a=Number(t&&typeof t=="object"?t.price:t)||0,r=e?.currency||"USD";let s;try{s=a.toLocaleString("en-US",{style:"currency",currency:r,maximumFractionDigits:0})}catch{s="$"+a.toLocaleString("en-US")}return e?.price_period&&(s+="/"+e.price_period),s}function Mr(e){const t=e?.property_id||e?.id;return`${window.location.origin}/details.html?id=${encodeURIComponent(t)}`}function ya(e){const t=String(e?.title||"").trim()||te,a=Ar(e),r=Mr(e),s=ga(e?.images?.[0]||ba),o=a?`${t} — ${a}`:t,i=a?`${t}
${a}
${r}`:`${t}
${r}`;return{title:t,price:a,url:r,image:s,text:o,caption:i}}function Je(e){let t=document.getElementById("share-toast");t||(t=document.createElement("div"),t.id="share-toast",t.className="fixed bottom-24 left-1/2 z-[400] bg-gray-900 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-xl transition-all duration-300 pointer-events-none whitespace-nowrap",t.style.opacity="0",t.style.transform="translate(-50%, 10px)",document.body.appendChild(t)),t.textContent=e,t.style.opacity="1",t.style.transform="translate(-50%, 0)",clearTimeout(t._timer),t._timer=setTimeout(()=>{t.style.opacity="0",t.style.transform="translate(-50%, 10px)"},2600)}function Mt(e,t){try{const a=document.createElement("textarea");a.value=e,a.style.cssText="position:fixed;opacity:0;pointer-events:none",document.body.appendChild(a),a.focus(),a.select(),document.execCommand("copy"),a.remove(),t()}catch{t()}}function Xe(e){return new Promise(t=>{const a=()=>t(!0);navigator.clipboard?.writeText?navigator.clipboard.writeText(e).then(a).catch(()=>Mt(e,a)):Mt(e,a)})}function Qe(e){window.open(e,"_blank","noopener,noreferrer")}const X={whatsapp:'<svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C22 6.45 17.5 2 12.04 2zm5.8 14.32c-.25.7-1.44 1.35-2 1.4-.52.05-1.19.24-3.97-.83-3.33-1.31-5.45-4.7-5.61-4.92-.16-.22-1.34-1.79-1.34-3.41 0-1.62.85-2.41 1.15-2.74.3-.33.65-.41.87-.41.22 0 .43 0 .62.01.2.01.46-.07.72.55.27.63.92 2.16 1 2.31.08.15.13.33.03.53-.1.2-.15.32-.3.5-.15.18-.32.4-.45.53-.15.15-.31.31-.13.61.18.3.79 1.31 1.7 2.12 1.17 1.04 2.15 1.36 2.46 1.51.31.15.49.13.67-.08.18-.2.77-.9.98-1.21.2-.31.41-.25.69-.15.28.1 1.79.84 2.1 1 .31.15.51.23.58.35.08.13.08.73-.17 1.42z"/></svg>',facebook:'<svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z"/></svg>',x:'<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41z"/></svg>',tiktok:'<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 0 1-2.89 2.62 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 3.53-2.84V9.94a6.35 6.35 0 0 0-3.53 1.06 6.36 6.36 0 0 0-2.9 5.37 6.36 6.36 0 0 0 6.35 6.36c3.5 0 6.36-2.86 6.36-6.36V7.87a8.24 8.24 0 0 0 4.77 1.52V6.26a4.83 4.83 0 0 1-.5.03 4.87 4.87 0 0 1-1.12.4z"/></svg>',link:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',more:'<svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><circle cx="12" cy="12" r="2.2"/><circle cx="5" cy="12" r="2.2"/><circle cx="19" cy="12" r="2.2"/></svg>'},Tr=[{key:"whatsapp",label:"WhatsApp",color:"#25D366",icon:X.whatsapp},{key:"facebook",label:"Facebook",color:"#1877F2",icon:X.facebook},{key:"x",label:"X",color:"#000000",icon:X.x},{key:"tiktok",label:"TikTok",color:"#111111",icon:X.tiktok},{key:"copy",label:"Copy Link",color:"#64748B",icon:X.link},{key:"more",label:"More",color:"#334155",icon:X.more}];function Br(e){return`<button type="button" class="group flex flex-col items-center gap-2" data-share-action="${e.key}">
    <span class="w-14 h-14 rounded-2xl flex items-center justify-center text-white transition group-active:scale-95 shadow-md" style="background:${e.color}">${e.icon}</span>
    <span class="text-xs font-semibold text-gray-700">${e.label}</span>
  </button>`}function qr(){const e=document.createElement("div");return e.id="share-sheet",e.className="fixed inset-0 z-[350] hidden",e.innerHTML=`
    <style>
      @keyframes share-sheet-up{from{transform:translateY(100%)}to{transform:translateY(0)}}
      #share-sheet .animate-share-sheet{animation:share-sheet-up .28s cubic-bezier(.2,.8,.2,1)}
      #share-sheet .line-clamp-2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
    </style>
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" data-share-close></div>
    <div class="absolute bottom-0 left-0 right-0 max-w-lg mx-auto bg-white rounded-t-3xl shadow-2xl overflow-hidden animate-share-sheet">
      <div class="flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-100">
        <h3 class="text-base font-black text-gray-900 tracking-tight">Share</h3>
        <button type="button" data-share-close class="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="w-5 h-5"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="p-5 space-y-5">
        <div class="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-3">
          <img id="share-product-img" class="w-20 h-20 rounded-xl object-cover border border-gray-200 shrink-0" alt="Product" onerror="this.onerror=null;this.src='${ba}'">
          <div class="min-w-0">
            <div id="share-product-title" class="text-sm font-bold text-gray-900 leading-snug line-clamp-2"></div>
            <div id="share-product-price" class="mt-1 text-sm font-black text-blue-600"></div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-x-4 gap-y-5" id="share-platforms"></div>
        <p class="text-[11px] text-gray-400 text-center leading-relaxed">Shares this exact product with its image, name, price and link.</p>
      </div>
    </div>`,document.body.appendChild(e),e}function Tt(){const e=document.getElementById("share-sheet");e&&e.classList.add("hidden"),document.body.style.overflow=""}function xa(e){let t=document.getElementById("share-sheet");t||(t=qr()),t.querySelector("#share-product-title").textContent=e.title,t.querySelector("#share-product-price").textContent=e.price||"",t.querySelector("#share-product-img").src=e.image,t.querySelector("#share-platforms").innerHTML=Tr.map(Br).join(""),t.classList.remove("hidden"),document.body.style.overflow="hidden",t.querySelectorAll("[data-share-close]").forEach(a=>a.addEventListener("click",Tt)),t.querySelectorAll("[data-share-action]").forEach(a=>a.addEventListener("click",()=>{Tt(),jr(a.dataset.shareAction,e)}))}async function jr(e,t){switch(e){case"whatsapp":Qe(`https://api.whatsapp.com/send?text=${encodeURIComponent(t.caption)}`);break;case"facebook":Qe(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(t.url)}&quote=${encodeURIComponent(t.text)}`);break;case"x":Qe(`https://twitter.com/intent/tweet?text=${encodeURIComponent(t.text)}&url=${encodeURIComponent(t.url)}`);break;case"tiktok":if(navigator.share)try{await navigator.share({title:t.title,text:t.caption,url:t.url})}catch{}else await Xe(t.caption),Je("TikTok caption copied — paste to share");break;case"copy":await Xe(t.url),Je("Link copied to clipboard");break;case"more":if(navigator.share)try{await navigator.share({title:t.title,text:t.text,url:t.url})}catch{}else await Xe(t.url),Je("Link copied to clipboard");break}}function Z(e){e&&xa(ya(e))}function Rr(){const e=window.location.origin;xa({title:te,price:"",url:e,image:ga(Ir),text:`Check out ${te} — a trusted global marketplace for premium products with worldwide delivery.`,caption:`${te} — premium products, secure payments, worldwide delivery.
${e}`})}function Hr(e){if(!e)return;const t=ya(e),a=`${t.title}${t.price?` — ${t.price}`:""} — available at ${te}.`,r=(s,o,i)=>{let n=document.head.querySelector(`meta[${s}="${o}"]`);n||(n=document.createElement("meta"),n.setAttribute(s,o),document.head.appendChild(n)),n.setAttribute("content",i)};r("property","og:title",t.title),r("property","og:description",a),r("property","og:image",t.image),r("property","og:url",t.url),r("property","og:type","product"),r("name","twitter:title",t.title),r("name","twitter:description",a),r("name","twitter:image",t.image),document.title=`${t.title} | ${te}`}function Pr(e){Z(e)}typeof window<"u"&&(window.openShareSheet=Z,window.openWebsiteShareSheet=Rr,window.shareProduct=Pr);function Nr(e,t,a,r={}){if(!e||!Number.isFinite(t)||!Number.isFinite(a))return;const s=r.width||e.width||600,o=r.height||e.height||160,i=Math.max(3,Math.min(18,r.zoom||13));window.devicePixelRatio&&r.highDpi!==!1?(e.width=s*2,e.height=o*2):(e.width=s,e.height=o);const n=e.getContext("2d");n.setTransform(1,0,0,1,0,0),window.devicePixelRatio&&r.highDpi!==!1&&n.scale(2,2),n.fillStyle="#e5e7eb",n.fillRect(0,0,s,o);const l=256,c=Math.pow(2,i),u=l*c,d=t*Math.PI/180,p=(a+180)/360*u,y=(1-Math.log(Math.tan(d)+1/Math.cos(d))/Math.PI)/2*u,b=Math.floor((p-s/2)/l),g=Math.floor((y-o/2)/l),x=Math.floor((p+s/2)/l),v=Math.floor((y+o/2)/l);let E=0;const $=()=>{const I=s/2,f=o/2;n.save(),n.shadowColor="rgba(0,0,0,.4)",n.shadowBlur=6,n.shadowOffsetY=2,n.fillStyle="#ef4444",n.beginPath(),n.arc(I,f,9,0,Math.PI*2),n.fill(),n.restore(),n.fillStyle="#ffffff",n.beginPath(),n.arc(I,f,3.5,0,Math.PI*2),n.fill()};for(let I=b;I<=x;I++)for(let f=g;f<=v;f++){if(f<0||f>=c)continue;const P=(I%c+c)%c,A=new Image;A.crossOrigin="anonymous",A.decoding="async",A.src=`https://tile.openstreetmap.org/${i}/${P}/${f}.png`;const G=Math.round(I*l-(p-s/2)),J=Math.round(f*l-(y-o/2));E++,A.onload=()=>{try{n.drawImage(A,G,J,l,l)}catch{}E--,E===0&&$()},A.onerror=()=>{E--,E===0&&$()}}E===0&&$()}function va(e){const t=e.querySelectorAll("[data-static-map]");if(!t.length)return;const a=s=>{const o=parseFloat(s.dataset.lat),i=parseFloat(s.dataset.lng);!Number.isFinite(o)||!Number.isFinite(i)||Nr(s,o,i,{width:s.clientWidth||600,height:s.clientHeight||160,zoom:13})},r="IntersectionObserver"in window?new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&(a(o.target),r.unobserve(o.target))})},{rootMargin:"200px"}):null;t.forEach(s=>{r?r.observe(s):a(s)})}const _t="/fallback.svg";function Or(e){return!e||typeof e!="string"||e.startsWith("blob:")||e.startsWith("data:")?!1:/\.(mp4|webm|mov|avi|mkv)(\?|#|$)/i.test(e)}function Ce(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const wa="kco_showroom_view_mode";let re="grid";function Wr(){try{return localStorage.getItem(wa)==="line"?"line":"grid"}catch{return"grid"}}re=Wr();const ka=()=>re==="line";function Fr(e){re=e==="line"?"line":e==="feed"?"feed":"grid";try{localStorage.setItem(wa,re)}catch{}document.querySelectorAll("[data-showroom-grid]").forEach(t=>{delete t.dataset.initialized,delete t.dataset.prerendered,t.innerHTML=""}),_e(),window.lucide&&lucide.createIcons(),_a()}function _a(){const e=document.getElementById("view-mode-picker");e&&e.querySelectorAll("[data-view-mode]").forEach(t=>{const a=t.dataset.viewMode===re;t.classList.toggle("view-mode-active",a),t.setAttribute("aria-checked",a?"true":"false")})}function Vr(){const e=document.getElementById("view-mode-picker");e&&(e.querySelectorAll("[data-view-mode]").forEach(t=>{t.addEventListener("click",()=>Fr(t.dataset.viewMode))}),_a())}function Bt(e,t){const a=e.querySelector(".hscroll");a&&a.scrollBy({left:t*260*3,behavior:"smooth"})}const ae=[...Ae,...Me];function Sa(e){return e&&(K().find(a=>a.property_id===e.property_id)||e)}const Dr=["W10000","W10475","W11084","W11086","W11090"].map(e=>Te.find(t=>t.property_id===e)||Me.find(t=>t.property_id===e)).filter(Boolean),Ur=["W10379","W10382","W10383","W10422","W10425","W10449","W10468","W10600","W10994","W11001","W11002","W11022","W11023","W11028","W11030","W11033","W11034","W11037","W11040","W11049","W11054","W11055","W11062","W11065","W11094","W11107"].map(e=>Me.find(t=>t.property_id===e)).filter(Boolean),je=e=>ae.filter(t=>(t.category||"New Arrivals")===e),St=/\b(washer|washing|laundry|launder|dryer)\b/i,$a=ae.filter(e=>St.test(e.title||"")),Ca=new Set($a.map(e=>e.property_id||e.id)),qt=new Set,Re=e=>e.filter(t=>{const a=t.property_id||t.id;return!a||Ca.has(a)||qt.has(a)?!1:(qt.add(a),!0)}),Gr=Re([...Dr,...je("Houses & Real Estate")]),zr=Re([...Ur,...je("Cars & Vehicles")]),Yr=Re([...xt,...je("Trucks")]),Kr=Re([...oa,...je("Motorhomes")]),D=["Houses & Real Estate","Cars & Vehicles","Trucks","Motorhomes","Kitchen & Appliances","Home Appliances & Cleaning","Jewelry","Watches","Fashion & Shoes","Babies & Kids","Electronics","Tools & Hardware","Beauty & Personal Care","Home Decor & Storage","New Arrivals"],Ea={"Houses & Real Estate":"home","Cars & Vehicles":"car-front",Trucks:"truck",Motorhomes:"bus","Kitchen & Appliances":"chef-hat","Home Appliances & Cleaning":"washing-machine",Jewelry:"gem",Watches:"watch","Fashion & Shoes":"shirt","Babies & Kids":"baby",Electronics:"smartphone","Tools & Hardware":"wrench","Beauty & Personal Care":"sparkles","Home Decor & Storage":"lamp","New Arrivals":"package"};function La(e){return String(e).toLowerCase().replace(/[^a-z0-9]+/g,"-")}function Zr(e){const t=new Map;for(const r of e){const s=r.category||"New Arrivals";t.has(s)||t.set(s,[]),t.get(s).push(r.property_id||r.id)}return[...t.keys()].sort((r,s)=>{const o=D.indexOf(r),i=D.indexOf(s);return(o===-1?D.length:o)-(i===-1?D.length:i)}).map(r=>({id:`products-${La(r)}`,label:r,icon:Ea[r]||"package",productCategory:r})).filter(r=>(t.get(r.productCategory)||[]).length)}const Jr=Zr(ae.filter(e=>{const t=e.category||"New Arrivals",a=e.property_id||e.id;return!["Houses & Real Estate","Cars & Vehicles","Trucks","Motorhomes"].includes(t)&&!Ca.has(a)}));function Xr(){const e=K()||[],t=new Map;for(const r of e){const s=r.category||"New Arrivals",o=r.property_id||r.id;o&&(["Houses & Real Estate","Real Estate","Cars","Cars & Vehicles","Trucks","Motorhomes"].includes(s)||St.test(r.title||"")||(t.has(s)||t.set(s,[]),t.get(s).push(o)))}return[...t.keys()].sort((r,s)=>{const o=D.indexOf(r),i=D.indexOf(s);return(o===-1?D.length:o)-(i===-1?D.length:i)}).map(r=>({id:`products-${La(r)}`,label:r,icon:Ea[r]||"package",productCategory:r})).filter(r=>(t.get(r.productCategory)||[]).length)}const Ia="kco_wishlist_ids";let O=new Set,jt=!1;function Qr(){if(jt)return;jt=!0;const e=document.createElement("style");e.textContent=`
    @keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}
    .wish-pop i{animation:kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)}
  `,document.head.appendChild(e)}function es(){try{O=new Set(JSON.parse(localStorage.getItem(Ia)||"[]"))}catch{O=new Set}}function ts(){try{localStorage.setItem(Ia,JSON.stringify([...O]))}catch{}}async function as(){try{if(!await kt())return;const{supabase:t}=await pe(async()=>{const{supabase:r}=await import("./supabase-client-nvpjTmO6.js");return{supabase:r}},[]),{data:a}=await t.from("wishlist").select("listing_id, property_id");a&&a.forEach(r=>{r.listing_id?O.add(r.listing_id):r.property_id&&O.add(r.property_id)})}catch{}}function Aa(e){return O.has(e.id||e.property_id)}function rs(e,t){e&&(e.classList.toggle("saved",t),e.classList.toggle("text-red-400",t),e.classList.toggle("bg-red-500/20",t),e.classList.toggle("border",t),e.classList.toggle("border-red-500/40",t),e.setAttribute("aria-label",t?"Remove from wishlist":"Add to wishlist"),e.title=t?"Remove from wishlist":"Add to wishlist",e.innerHTML=`<i data-lucide="heart" class="w-4 h-4 ${t?"fill-red-500 text-red-500":""}"></i>`,e.classList.remove("wish-pop"),e.offsetWidth,e.classList.add("wish-pop"),window.lucide&&lucide.createIcons())}async function ss(e,t){const a=e.id||e.property_id,s=!O.has(a);s?O.add(a):O.delete(a),ts(),rs(t,s);const o=await kt();if(!o){le(s?"Saved to wishlist ♥":"Removed from wishlist"),s&&setTimeout(()=>le("Sign in to sync your wishlist across devices"),1400);return}try{const{supabase:i}=await pe(async()=>{const{supabase:l}=await import("./supabase-client-nvpjTmO6.js");return{supabase:l}},[]),{data:n}=await i.from("wishlist").select("id").eq("listing_id",a).eq("user_id",o.id).maybeSingle();s&&!n?await i.from("wishlist").insert({user_id:o.id,listing_id:a,property_id:e.property_id}):!s&&n&&await i.from("wishlist").delete().eq("id",n.id),le(s?"Added to wishlist ♥":"Removed from wishlist")}catch{le("Wishlist action failed")}}const ue=[{id:"local-houses",label:"Local Houses & Real Estate",icon:"home",subtitle:"Homes for sale or rent — scroll down to see them all, two at a time.",rows:[{id:"new-houses",label:"Houses",icon:"home",newHouses:!0}]},{id:"modern-luxury",label:"Modern Homes & Luxury Properties",icon:"building-2",subtitle:"Contemporary villas, mansions, and new-build family homes.",rows:[{id:"new-homes",label:"New Homes",icon:"home",ids:["W10018","W10019","W10020","W10021","W10022","W10023","W10024","W10025","W10026","W10027"]},{id:"modern-homes",label:"Modern Homes",icon:"building-2",ids:["W10006","W10009"]},{id:"mansion-homes",label:"Mansions",icon:"landmark",ids:["W10007"]},{id:"farm-house",label:"Farm Houses",icon:"wheat",ids:["W10010"]}]},{id:"commercial-land",label:"Commercial Properties & Land",icon:"briefcase",subtitle:"Retail buildings, hotels, and investment-grade commercial real estate.",rows:[{id:"commercial",label:"Commercial Buildings",icon:"store",ids:["W10011"]},{id:"hotels",label:"Hotels & Hospitality",icon:"bed-double",ids:["W10013"]}]},{id:"cars",label:"Cars",icon:"car-front",subtitle:"Brand new car arrivals — bright, shiny and ready to drive home. Scroll to see them all.",rows:[{id:"all-cars",label:"New Cars",icon:"car-front",allCars:!0}]},{id:"washing-machines",label:"Washing Machines",icon:"washing-machine",subtitle:"Every washer, dryer and laundry item, gathered in one long scroll.",rows:[{id:"all-washing-machines",label:"Washing Machines",icon:"washing-machine",allWashingMachines:!0}]},{id:"trucks-buses",label:"Trucks",icon:"truck",subtitle:"Heavy-duty trucks and commercial transport vehicles.",rows:[{id:"all-trucks",label:"All Trucks",icon:"truck",allTrucks:!0}]},{id:"motorhomes-boats",label:"Motorhomes",icon:"bus",subtitle:"Luxury motorhomes and RVs for travel and adventure — scroll down to see them all.",rows:[{id:"all-motorhomes",label:"All Motorhomes",icon:"bus",allMotorhomes:!0}]},{id:"products",label:"Products",icon:"package",subtitle:"Premium shop products — jewelry, watches, fashion and more.",rows:Jr}],os={"affordable-homes":"real-estate","apartment-homes":"real-estate","cape-cod":"real-estate","beach-houses":"real-estate","new-homes":"real-estate","modern-homes":"real-estate","mansion-homes":"real-estate","farm-house":"real-estate",commercial:"real-estate",hotels:"real-estate","all-cars":"cars","all-trucks":"trucks","all-motorhomes":"motorhomes"};function is(e,t){return os[e.id]?[]:[]}function Ma(e){vt(e);const t=e.listing_type==="property",a=e.listing_type==="pet",r=e.listing_type==="vehicle"&&e.category==="Trucks",s=e.listing_type==="vehicle"&&e.category==="Motorhomes",o=e.listing_type==="vehicle"&&e.category==="Cars",i=e.id||e.property_id,n=e.images?.[0]||_t,l=Or(n),c=r?ut(e):U(e),u=e.listing_type==="product"?"New":t||a?"For Sale":"",p=(e.rating_count||0)>0&&Number(e.rating)||0,y=e.review_count||e.rating_count||0;let b="";if(t){const f=Se(e.country_code),P=[e.city,e.state].filter(Boolean);b=`<div class="flex items-center gap-1 text-gray-400 text-xs mb-1.5"><i data-lucide="map" class="w-3.5 h-3.5 shrink-0"></i><span>${f} ${P.join(", ")||e.country}</span></div>`}else a&&(b=`<div class="flex items-center gap-1 text-gray-400 text-xs mb-1.5"><i data-lucide="paw-print" class="w-3.5 h-3.5 shrink-0"></i><span>${Se(e.country_code)} ${e.country}</span></div>`);let g="";if(t){const f=[];e.bedrooms!=null&&f.push(`<span class="flex items-center gap-0.5"><i data-lucide="bed-double" class="w-3.5 h-3.5"></i>${e.bedrooms}</span>`),e.bathrooms!=null&&f.push(`<span class="flex items-center gap-0.5"><i data-lucide="bath" class="w-3.5 h-3.5"></i>${e.bathrooms}</span>`),e.land_size&&f.push(`<span class="flex items-center gap-0.5"><i data-lucide="ruler" class="w-3.5 h-3.5"></i>${e.land_size}</span>`),e.year_built&&f.push(`<span class="flex items-center gap-0.5"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${e.year_built}</span>`),e.condition&&f.push(`<span class="flex items-center gap-0.5"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i>${e.condition}</span>`),f.length&&(g=`<div class="flex items-center gap-2 text-gray-400 text-xs mb-2">${f.join("")}</div>`)}else if(r||s||o){const f=[];f.push(`<span class="flex items-center gap-0.5"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${e.model_year}</span>`),f.push(`<span class="flex items-center gap-0.5"><i data-lucide="gauge" class="w-3.5 h-3.5"></i>${e.mileage}</span>`),s&&f.push(`<span class="flex items-center gap-0.5"><i data-lucide="moon" class="w-3.5 h-3.5"></i>Sleeps ${e.sleeping_capacity}</span>`),o&&f.push(`<span class="flex items-center gap-0.5"><i data-lucide="fuel" class="w-3.5 h-3.5"></i>${e.fuel_type}</span>`),f.length&&(g=`<div class="flex items-center gap-2 text-gray-400 text-xs mb-2">${f.join("")}</div>`)}let x="";p>0&&(x=`<a href="/details.html?id=${e.property_id}" class="flex items-center gap-0.5 text-xs no-underline hover:opacity-80 transition" title="View ratings & reviews"><i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i><span class="text-gray-800 font-semibold">${p.toFixed(1)}</span><span class="text-gray-500">(${y})</span></a>`);let v="",E="",$=parseFloat(e.real_price);if((!Number.isFinite($)||$<=0)&&($=parseFloat(e.compare_at_price??e.original_price)),Number.isFinite($)&&$>0&&$>parseFloat(e.price)){const f=Math.round((1-parseFloat(e.price)/$)*100),P=A=>r?ut({...e,price:A}):U({...e,price:A});v=`<span class="absolute bottom-2 left-2 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-full shadow-md shadow-red-500/30">-${f}%</span>`,E=`<span class="text-xs text-gray-400 price-strike line-through">${P($)}</span>`}let I="";return t&&e.latitude&&e.longitude&&(I=`
      <div class="relative mt-2.5 h-20 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
        <canvas data-static-map data-lat="${Ce(e.latitude)}" data-lng="${Ce(e.longitude)}" class="w-full h-full block"></canvas>
        <span class="absolute top-1 left-1 bg-black/70 backdrop-blur-sm text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full inline-flex items-center gap-1"><i data-lucide="map" class="w-3 h-3"></i>Map · ${e.city||e.town||""}</span>
      </div>`),{isProperty:t,isPet:a,isTruck:r,isMotorhome:s,isCar:o,listingId:i,cover:n,isCoverVideo:l,price:c,statusBadge:u,locationHtml:b,specsHtml:g,ratingStars:x,mapPreviewHtml:I,discountBadge:v,originalPriceHtml:E}}function mt(e){e=Sa(e);const t=Ma(e),a=document.createElement("div");a.className="showroom-card group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 flex flex-col cursor-pointer",a.dataset.id=t.listingId;const r=Aa(e);return a.innerHTML=`
    <div class="relative aspect-[6/5] overflow-hidden bg-gray-100">
      ${t.isCoverVideo?`<video src="${Ce(t.cover)}" muted loop autoplay playsinline preload="metadata" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.style.display='none'"></video>
           <div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-11 h-11 rounded-full bg-white/80 flex items-center justify-center shadow-lg"><svg class="w-5 h-5 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:`<img src="${t.cover}" alt="${e.title}" loading="lazy" decoding="async"
             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             onerror="this.onerror=null;this.src='${_t}'">`}
      ${t.statusBadge?`<span class="absolute top-2 left-2 bg-blue-500 text-white text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">${t.statusBadge}</span>`:""}
      ${t.discountBadge}
      <div class="absolute top-2 right-2 flex flex-col gap-1.5">
        <button class="share-btn shrink-0 w-9 h-9 bg-white/90 hover:bg-white text-gray-500 hover:text-blue-600 rounded-full shadow-sm transition flex items-center justify-center" title="Share product" aria-label="Share product">
          <i data-lucide="share-2" class="w-4 h-4"></i>
        </button>
        <button class="wishlist-btn ${r?"saved bg-red-500/15 text-red-500 border border-red-500/40":""} shrink-0 w-9 h-9 bg-white/90 hover:bg-white text-gray-500 hover:text-red-500 rounded-full shadow-sm transition flex items-center justify-center" title="${r?"Remove from wishlist":"Add to wishlist"}" aria-label="${r?"Remove from wishlist":"Add to wishlist"}">
          <i data-lucide="heart" class="w-4 h-4 ${r?"fill-red-500 text-red-500":""}"></i>
        </button>
      </div>
    </div>
    <div class="px-3.5 sm:px-4 pt-2.5 sm:pt-3 pb-3 sm:pb-3.5 flex flex-col flex-1">
      <h3 class="text-[15px] font-bold text-gray-900 leading-snug mb-1.5">${e.title}</h3>
      ${t.ratingStars}
      <div class="flex items-baseline flex-wrap gap-x-2 gap-y-0.5 mt-1.5">
        ${t.originalPriceHtml}
        <span class="text-lg font-black text-blue-600">${t.price}</span>
      </div>
      ${t.locationHtml}
      ${t.specsHtml}
      ${t.mapPreviewHtml}
      <div class="flex gap-2 mt-2.5 pt-2.5 border-t border-gray-100">
        <button class="buy-btn flex-1 min-w-0 bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-[0.97] text-white text-[13px] font-bold py-3 rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/30">
          <i data-lucide="shopping-bag" class="w-4 h-4 shrink-0"></i> <span class="truncate">Buy</span>
        </button>
        <button class="cart-btn flex-1 min-w-0 bg-white hover:bg-emerald-50 active:scale-[0.97] text-emerald-600 text-[13px] font-bold py-3 rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 border-2 border-emerald-400 shadow-sm">
          <i data-lucide="shopping-cart" class="w-4 h-4 shrink-0"></i> <span class="truncate">Cart</span>
        </button>
      </div>
      <button class="details-btn mt-2 w-full min-w-0 bg-white hover:bg-blue-50 active:scale-[0.97] text-blue-600 text-[13px] font-bold py-3 rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 border-2 border-blue-300 hover:border-blue-400 shadow-sm">
        <i data-lucide="eye" class="w-4 h-4 shrink-0"></i> <span class="truncate">View Details</span>
      </button>
    </div>
  `,Ee(a,e),va(a),a}function ns(e){e=Sa(e);const t=Ma(e),a=document.createElement("div");a.className="showroom-card showroom-feed-card group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 flex flex-col sm:flex-row cursor-pointer",a.dataset.id=t.listingId;const r=Aa(e);return a.innerHTML=`
    <div class="relative shrink-0 sm:w-[42%] lg:w-[38%] xl:w-[34%] aspect-[7/5] sm:aspect-auto sm:min-h-[300px] overflow-hidden bg-gray-100">
      ${t.isCoverVideo?`<video src="${Ce(t.cover)}" muted loop autoplay playsinline preload="metadata" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.style.display='none'"></video>
           <div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-11 h-11 rounded-full bg-white/80 flex items-center justify-center shadow-lg"><svg class="w-5 h-5 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:`<img src="${t.cover}" alt="${e.title}" loading="lazy" decoding="async"
             class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             onerror="this.onerror=null;this.src='${_t}'">`}
      ${t.statusBadge?`<span class="absolute top-2.5 left-2.5 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">${t.statusBadge}</span>`:""}
      ${t.discountBadge}
      <span class="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 bg-black/55 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <i data-lucide="expand" class="w-3.5 h-3.5"></i> View
      </span>
    </div>
    <div class="flex-1 px-4 pt-2.5 pb-4 sm:p-5 lg:p-6 flex flex-col min-w-0">
      <h3 class="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-1.5 line-clamp-2 group-hover:text-blue-700 transition-colors">${e.title}</h3>
      ${t.locationHtml}
      ${t.specsHtml}
      <div class="flex items-center justify-between gap-3 mt-auto pt-2">
        <span class="flex items-baseline flex-wrap gap-x-2">${t.originalPriceHtml}<span class="text-xl sm:text-2xl font-black text-blue-600">${t.price}</span></span>
        ${t.ratingStars}
      </div>
      ${t.mapPreviewHtml}
      <div class="flex items-center gap-1.5 mt-2.5 pt-2.5 border-t border-gray-100 justify-end">
        <button class="share-btn shrink-0 w-9 h-9 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-500 rounded-xl transition flex items-center justify-center" title="Share product" aria-label="Share product">
          <i data-lucide="share-2" class="w-4 h-4"></i>
        </button>
        <button class="wishlist-btn ${r?"saved bg-red-500/20 text-red-400 border border-red-500/40":""} shrink-0 w-9 h-9 bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-500 rounded-xl transition flex items-center justify-center" title="${r?"Remove from wishlist":"Add to wishlist"}" aria-label="${r?"Remove from wishlist":"Add to wishlist"}">
          <i data-lucide="heart" class="w-4 h-4 ${r?"fill-red-500 text-red-500":""}"></i>
        </button>
      </div>
      <div class="flex gap-2 mt-2.5 pt-2.5 border-t border-gray-100">
        <button class="buy-btn flex-1 min-w-0 bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-[0.97] text-white text-[13px] font-bold py-3 rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/30">
          <i data-lucide="shopping-bag" class="w-4 h-4 shrink-0"></i> <span class="truncate">Buy</span>
        </button>
        <button class="cart-btn flex-1 min-w-0 bg-white hover:bg-emerald-50 active:scale-[0.97] text-emerald-600 text-[13px] font-bold py-3 rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 border-2 border-emerald-400 shadow-sm">
          <i data-lucide="shopping-cart" class="w-4 h-4 shrink-0"></i> <span class="truncate">Cart</span>
        </button>
      </div>
      <button class="details-btn mt-2 w-full min-w-0 bg-white hover:bg-blue-50 active:scale-[0.97] text-blue-600 text-[13px] font-bold py-3 rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 border-2 border-blue-300 hover:border-blue-400 shadow-sm">
        <i data-lucide="eye" class="w-4 h-4 shrink-0"></i> <span class="truncate">View Details</span>
      </button>
    </div>
  `,Ee(a,e),va(a),a}function Ee(e,t){e.addEventListener("click",a=>{a.target.closest("button")||(window.location.href=`/details.html?id=${t.property_id}`)}),e.querySelector(".buy-btn").addEventListener("click",a=>{a.stopPropagation(),ls(t)}),e.querySelector(".wishlist-btn").addEventListener("click",a=>{a.stopPropagation(),ss(t,a.currentTarget)}),e.querySelector(".share-btn").addEventListener("click",a=>{a.stopPropagation(),ds(t)}),e.querySelector(".cart-btn")?.addEventListener("click",a=>{a.stopPropagation(),cs(t)}),e.querySelector(".details-btn")?.addEventListener("click",a=>{a.stopPropagation(),window.location.href=`/details.html?id=${t.property_id}`})}async function ls(e){await kt()?window.location.href=`/checkout.html?id=${e.property_id}`:($r(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}function cs(e){const t=e.property_id||e.id;fa(t,1),le("Added to cart")}function ds(e){Z(e)}function le(e){let t=document.getElementById("card-toast");t||(t=document.createElement("div"),t.id="card-toast",t.className="fixed bottom-5 right-5 z-[200] bg-gray-900 border border-blue-500/30 text-white px-4 py-2.5 rounded-xl shadow-xl text-xs font-medium transition-all duration-300 pointer-events-none",t.style.transform="translateY(20px)",t.style.opacity="0",document.body.appendChild(t)),t.textContent=e,t.style.transform="translateY(0)",t.style.opacity="1",clearTimeout(t._timer),t._timer=setTimeout(()=>{t.style.transform="translateY(20px)",t.style.opacity="0"},2500)}function us(e){const t=K()||[];return e.allTrucks?t.filter(a=>a.category==="Trucks"):e.allMotorhomes?t.filter(a=>a.category==="Motorhomes"):e.allCars?t.filter(a=>a.category==="Cars"||a.category==="Cars & Vehicles"):e.newHouses?t.filter(a=>a.listing_type==="property"||a.category==="Houses & Real Estate"||a.category==="Real Estate"):e.allWashingMachines?t.filter(a=>St.test(a.title||"")):e.productCategory?t.filter(a=>(a.category||"New Arrivals")===e.productCategory):e.allProducts?t:e.ids?ia(e.ids):[]}function me(e){let t;e.allTrucks?t=Yr:e.allMotorhomes?t=Kr:e.allCars?t=zr:e.newHouses?t=Gr:e.allWashingMachines?t=$a:e.productCategory?t=ae.filter(o=>(o.category||"New Arrivals")===e.productCategory):e.allProducts?t=e.productRange?ae.slice(e.productRange[0],e.productRange[1]):ae:t=ia(e.ids);const a=us(e),r=new Set(t.map(o=>o.property_id||o.id));for(const o of a){const i=o.property_id||o.id;!i||r.has(i)||(r.add(i),t=[...t,o])}let s=[];return!e.allTrucks&&!e.allMotorhomes&&!e.allCars&&!e.newHouses&&!e.allProducts&&!e.productCategory&&!e.allWashingMachines&&(s=is(e,t.map(o=>o.property_id))),s.length>0&&(t=[...t,...s]),t.filter(o=>o&&!na(o.property_id))}function ps(e){const t=me(e),a=t.length>0,r=re==="grid"||e.layout==="grid",s=ka()&&!r,o=document.createElement("div");o.className="showroom-row relative",o.dataset.rowId=e.id,r&&(o.dataset.layout="grid"),s&&(o.dataset.layout="line"),o.innerHTML=`
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2.5 min-w-0">
        <span class="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
          <i data-lucide="${e.icon}" class="w-4 h-4 text-blue-600"></i>
        </span>
        <h4 class="text-base font-bold text-gray-900 tracking-wide truncate">${e.label}</h4>
        ${a?`<span class="hidden sm:inline-flex shrink-0 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300">${t.length} Items</span>`:""}
      </div>
      <div class="flex items-center gap-1 ${a&&s?"":"hidden"}">
        <button class="scroll-left hscroll-btn p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition" aria-label="Scroll left">
          <i data-lucide="chevron-left" class="w-4 h-4"></i>
        </button>
        <button class="scroll-right hscroll-btn p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition" aria-label="Scroll right">
          <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
    <div class="${r?"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4":s?"hscroll flex gap-4 overflow-x-auto scrollbar-none pb-1":"showroom-feed flex flex-col gap-4 sm:gap-5"}"></div>
  `;const i=o.querySelector(r?".grid":s?".hscroll":".showroom-feed");if(a){const n=document.createDocumentFragment();t.forEach(l=>{try{n.appendChild(r||s?mt(l):ns(l))}catch{}}),i.appendChild(n)}else i.innerHTML=`<div class="flex items-center justify-center w-full py-6">
      <span class="inline-flex items-center gap-2 text-sm text-gray-500 uppercase tracking-widest border border-dashed border-gray-300 rounded-xl px-5 py-3">Coming Soon</span>
    </div>`;return o.querySelector(".scroll-left")?.addEventListener("click",()=>Bt(o,-1)),o.querySelector(".scroll-right")?.addEventListener("click",()=>Bt(o,1)),o}function Rt(e,t,a){const r=document.createElement("div");return r.className="showroom-section space-y-3",(a&&a>0?e.rows.slice(0,a):e.rows).filter(o=>(me(o)||[]).length>0).forEach(o=>{try{r.appendChild(ps(o))}catch{}}),r}const ms=new Set(["local-houses","modern-luxury","commercial-land"]),hs=new Set(["cars","trucks-buses"]);function Ht(e){return e.rows.some(t=>(me(t)||[]).length>0)}function fs(e){const t=document.querySelector(`[data-showroom-grid="${e}"]`);if(!t||t.dataset.initialized)return;t.dataset.initialized="true";const a=t.dataset.prerendered==="true";delete t.dataset.prerendered,a||(t.innerHTML=""),a&&t.querySelectorAll(".showroom-row[data-row-id]").forEach(n=>{const l=Ta(n.dataset.rowId);(!l||(me(l)||[]).length===0)&&n.remove()});const r=new Set;a&&t.querySelectorAll(".showroom-row[data-row-id]").forEach(n=>r.add(n.dataset.rowId));const s=n=>r.has(n),o=ue,i="blue";if(e==="real-estate"){const n=new Map(o.map(l=>[l.id,l]));for(const l of["local-houses","cars","washing-machines","trucks-buses","motorhomes-boats","products"]){const c=n.get(l);if(!c)continue;if(!c.rows.some(d=>s(d.id))&&Ht(c)){const d=ms.has(l)||hs.has(l);try{t.appendChild(Rt(c,i,d?1:void 0))}catch{}}}}else o.forEach(n=>{if(Ht(n))try{t.appendChild(Rt(n,i))}catch{}});window.lucide&&lucide.createIcons(),bs(t)}function Ta(e){for(const t of ue)for(const a of t.rows)if(a.id===e)return a;return null}function bs(e){e.querySelectorAll(".showroom-row[data-prerendered]").forEach(t=>{const a=Ta(t.dataset.rowId);if(!a)return;const r=me(a),s=t.querySelector(".showroom-feed, .grid");s&&s.querySelectorAll(".showroom-card").forEach(o=>{const i=o.dataset.id,n=r.find(l=>(l.id||l.property_id)===i);n?Ee(o,n):i&&Ee(o,{id:i,property_id:i,title:i})}),delete t.dataset.prerendered})}function _e(){const e=document.querySelectorAll("[data-showroom-grid]");ka()&&e.forEach(t=>{delete t.dataset.prerendered,t.innerHTML=""}),e.forEach((t,a)=>{const r=t.dataset.showroomGrid,s=()=>fs(r);a===0?s():window.requestIdleCallback?requestIdleCallback(s,{timeout:2e3}):setTimeout(s,0)})}function gs(){return ue.flatMap(e=>e.rows.map(t=>({section:e,row:t})))}function ys(e,t){const a=e.id||"";return a==="local-houses"||a==="modern-luxury"?["houses"]:a==="commercial-land"?["land"]:a==="cars"?["cars"]:a==="trucks-buses"?["trucks"]:a==="motorhomes-boats"?["rv & camper accessories"]:a==="washing-machines"?["home appliances"]:ir(t.label)}function Ba(e,t,a){const r=String(e||"").toLowerCase();return r==="all"||!r||ys(t,a).includes(r)?!0:String(a.label||"").toLowerCase()===r||String(t.label||"").toLowerCase()===r}function qa(e,t){const a=gs();let r=!1;a.forEach(({section:o,row:i})=>{const n=e.querySelector(`[data-row-id="${i.id}"]`);if(!n)return;const l=t(o,i);n.style.display=l?"":"none",l&&(r=!0)}),e.querySelectorAll(".showroom-section").forEach(o=>{const i=o.querySelectorAll('.showroom-row:not([style*="display: none"])');o.style.display=i.length>0?"":"none"});const s=e.querySelector("[data-category-empty]");r?s&&s.remove():s||(e.insertAdjacentHTML("beforeend",'<div data-category-empty class="category-empty flex flex-col items-center justify-center text-center py-16 px-4"><span class="w-14 h-14 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-4"><i data-lucide="package-open" class="w-7 h-7 text-gray-400"></i></span><p class="text-sm font-bold text-gray-700">No products available in this category yet</p><p class="text-xs text-gray-500 mt-1">Check back soon — new items are added regularly.</p></div>'),window.lucide&&window.lucide.createIcons())}function xs(e){const t=document.querySelector('[data-showroom-grid="real-estate"]');t&&(qa(t,(a,r)=>Ba(e,a,r)),t.scrollIntoView({behavior:"smooth",block:"start"}))}function vs(){document.querySelectorAll("[data-showroom-grid]").forEach(t=>{t.querySelectorAll(".showroom-row, .showroom-section").forEach(r=>{r.style.display=""});const a=t.querySelector("[data-category-empty]");a&&a.remove()})}const ws={fashion:["women","men","kids","fashion","beauty","jewel","watch","shoe","handbag","apparel","dress","baby"],electronics:["electronic","phone","computer","laptop","gaming","camera","software","digital","tv","audio","appliance"],realestate:["real estate","houses","homes","apartment","villa","mansion","land","commercial","hotel","condominium","property","beach house","farm house","estate"],home:["home","furniture","kitchen","garden","decor","pool","spa","cleaning","laundry","bedroom","bathroom"],vehicles:["car","motorcycle","truck","bicycle","marine","boating","rv","camper","auto","vehicle"],sports:["sport","fitness","camping","hiking","outdoor","gym","athletic","bike"],everyday:["food","grocer","pet","book","toy","office","health","medical","music","instrument","art","craft","service","travel","luggage","religious","flower","gift","party","wedding","costume","coin","funeral","packaging","safety","security","industrial","business","educational","collectible","fireplace","pharmacy"]};async function ja(){const e=new Map,t=(c,u,d=1)=>{if(!c)return;let p=String(c).trim();const y={"Cars & Vehicles":"Cars","Houses & Real Estate":"Houses","Real Estate":"Houses"};y[p]&&(p=y[p]),e.has(p)||e.set(p,{name:p,count:0,subs:new Set});const b=e.get(p);b.count+=d,u&&b.subs.add(String(u).trim())};[...Te,...K()].forEach(c=>t(c.category,c.subcategory)),xt.forEach(c=>t(c.category,c.subcategory)),Ae.forEach(c=>t(c.category,c.subcategory)),Me.forEach(c=>t(c.category,c.subcategory));const a=new Set((K()||[]).map(c=>String(c.category||"").trim()).filter(Boolean));e.forEach((c,u)=>{a.has(u)||(c.count||0)>0||e.delete(u)});const r={fashion:{label:"Fashion",icon:"shopping-bag",color:"pink"},electronics:{label:"Electronics",icon:"smartphone",color:"blue"},home:{label:"Home",icon:"home",color:"emerald"},vehicles:{label:"Vehicles",icon:"car-front",color:"red"},realestate:{label:"Real Estate",icon:"building-2",color:"slate"},sports:{label:"Sports",icon:"dumbbell",color:"lime"},everyday:{label:"Everyday",icon:"shopping-basket",color:"amber"}},o=["fashion","electronics","home","vehicles","realestate","sports","everyday"].map(c=>({id:c,...r[c],categories:[]})),i={id:"more",label:"More",icon:"grid",color:"gray",categories:[]},n=["fashion","electronics","realestate","home","vehicles","sports","everyday"];e.forEach((c,u)=>{const d=u.toLowerCase(),p=n.find(b=>ws[b].some(g=>d.includes(g)));(o.find(b=>b.id===p)||i).categories.push(c)});const l=o.map(c=>(c.categories.sort((u,d)=>d.count-u.count),c)).filter(c=>c.categories.length);return i.categories.length&&l.push(i),l}async function ks(e){const t=await ja();let a=[];t.forEach(r=>{r.id===e&&(a=r.categories.map(s=>s.name))}),Ra(a.length?a:[e])}function Ra(e){const t=document.querySelector('[data-showroom-grid="real-estate"]');if(!t)return;const a=(e||[]).map(r=>String(r).toLowerCase()).filter(Boolean);qa(t,(r,s)=>a.length===0?!0:a.some(o=>Ba(o,r,s)))}let Pt=!1;const Nt={"Real Estate":{section:"local-houses",row:"affordable-homes"},Apartments:{section:"local-houses",row:"apartment-homes"},Villas:{section:"modern-luxury",row:"modern-homes"},Mansions:{section:"modern-luxury",row:"mansion-homes"},"Beach Houses":{section:"local-houses",row:"beach-houses"},"Luxury Condominiums":{section:"modern-luxury",row:"modern-homes"},"Farm Houses":{section:"modern-luxury",row:"farm-house"},"Commercial Buildings":{section:"commercial-land",row:"commercial"},Hotels:{section:"commercial-land",row:"hotels"},Cars:{section:"cars",row:"all-cars"},Motorhomes:{section:"motorhomes-boats",row:"all-motorhomes"},Trucks:{section:"trucks-buses",row:"all-trucks"}},Ot=[{keywords:["car","vehicle","auto","sedan","suv"],target:{section:"cars",row:"all-cars"}},{keywords:["truck","pickup","lorry"],target:{section:"trucks-buses",row:"all-trucks"}},{keywords:["motorhome","camper","rv"],target:{section:"motorhomes-boats",row:"all-motorhomes"}},{keywords:["apartment","condo","flat"],target:{section:"local-houses",row:"apartment-homes"}},{keywords:["villa","luxury home"],target:{section:"modern-luxury",row:"modern-homes"}},{keywords:["mansion","estate"],target:{section:"modern-luxury",row:"mansion-homes"}},{keywords:["beach","coastal"],target:{section:"local-houses",row:"beach-houses"}},{keywords:["farm"],target:{section:"modern-luxury",row:"farm-house"}},{keywords:["commercial","retail","store"],target:{section:"commercial-land",row:"commercial"}},{keywords:["hotel","hospitality"],target:{section:"commercial-land",row:"hotels"}}];function _s(e,t){if(!e)return null;const a=Nt[e];if(a)return a;const r=e.toLowerCase();for(const[s,o]of Object.entries(Nt))if(s.toLowerCase()===r)return o;for(const{keywords:s,target:o}of Ot)if(s.some(i=>r.includes(i)))return o;if(t){const s=t.toLowerCase();for(const{keywords:o,target:i}of Ot)if(o.some(n=>s.includes(n)))return i}return null}async function Wt(){es(),Qr(),Vr(),rr(),_e();const e=Promise.all([ce(),dt()]).catch(()=>{});try{await e,await as();const t=K(),a=new Set(Te.map(s=>s.property_id)),r=t.filter(s=>!a.has(s.property_id));if(r.length>0&&!Pt){Pt=!0;for(const o of r){const i=_s(o.category,o.subcategory);if(!i)continue;const n=ue.find(c=>c.id===i.section);if(!n)continue;const l=n.rows.find(c=>c.id===i.row);l&&(l.ids||(l.ids=[]),l.ids.includes(o.property_id)||l.ids.push(o.property_id))}const s=ue.find(o=>o.id==="products");if(s){const o=Xr();o.length&&(s.rows=o)}}}catch{}document.querySelectorAll("[data-showroom-grid]").forEach(t=>{delete t.dataset.initialized,delete t.dataset.prerendered,t.innerHTML=""});try{_e()}catch{document.querySelectorAll("[data-showroom-grid]").forEach(t=>{delete t.dataset.initialized,delete t.dataset.prerendered,t.children.length===0&&(t.innerHTML="")}),_e()}window.dispatchEvent(new CustomEvent("showroom-categories-ready"))}window._filterShowroomByCategory=xs;window._clearShowroomFilter=vs;window._filterShowroomByDepartment=ks;window._filterShowroomByCategories=Ra;window._getShowroomCategoryInventory=ja;ce().catch(()=>{});document.querySelector("[data-showroom-grid]")&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>Wt()):Wt());const Ss="/verified-badge.svg",He="Weverse Online Shop",$s="GLOBAL SHOPPING • WORLDWIDE DELIVERY",Cs="/w-logo.svg",Es=(e="weverse-badge w-4 h-4 sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5 shrink-0")=>`<svg viewBox="0 0 24 24" class="${e}" aria-label="Verified" role="img" data-weverse-badge="true"><circle cx="12" cy="12" r="11" fill="#3b82f6"/><path d="M10.8 15.6 7.4 12.2l1.5-1.5 1.9 1.9 3.9-3.9 1.5 1.5-5.4 5.4z" fill="#fff"/></svg>`,Ha=(e="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8")=>`  <svg viewBox="0 0 24 24" class="${e}" fill="none" aria-hidden="true"><path d="M3 5l4.5 14L12 8l4.5 11L21 5" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,ht="weverse_brand_v1";(function(){if(document.getElementById("wv-brand-blue"))return;const t=document.createElement("style");t.id="wv-brand-blue",t.textContent=".brand-name{background:linear-gradient(135deg,#3b82f6,#2563eb)!important;-webkit-background-clip:text!important;background-clip:text!important;-webkit-text-fill-color:transparent!important;color:#2563eb!important}",(document.head||document.documentElement).appendChild(t)})();const Ls="weverse_brand_override_v1",Is=5*60*1e3;async function $t(){try{const e=JSON.parse(localStorage.getItem(Ls)||"null");if(e&&typeof e=="object")return e}catch{}try{const e=JSON.parse(localStorage.getItem(ht)||"{}");if(e.ts&&Date.now()-e.ts<Is&&e.data)return e.data}catch{}try{const e=await Be(),{data:t}=await e.from("site_settings").select("brand_name,brand_slogan,brand_logo,brand_badge,brand_favicon,brand_mobile_logo,brand_header_logo,brand_footer_logo,brand_primary_color,brand_secondary_color,brand_tagline_color1,brand_tagline_color2,brand_font,brand_custom_font,brand_website_url,brand_email,site_name,site_tagline,homepage_banner_image,homepage_banner_alt").limit(1).maybeSingle(),a=t||{};return localStorage.setItem(ht,JSON.stringify({ts:Date.now(),data:a})),a}catch{return{}}}function Ct(e){if(!e)return;const t=e.brand_name||e.site_name||He,a=e.brand_slogan||e.site_tagline||$s,r=e.brand_logo||e.brand_header_logo||Cs,s=e.brand_badge||Ss,o=e.brand_favicon||"",i=e.brand_custom_font||e.brand_font||"",n=e.brand_primary_color||"",l=e.brand_secondary_color||"",c=e.brand_tagline_color1||"",u=e.brand_tagline_color2||"";if(As(e.homepage_banner_image||"",e.homepage_banner_alt||"Homepage header banner"),(c||u)&&(document.querySelectorAll(".brand-tagline-1").forEach(d=>{c&&(d.style.color=c)}),document.querySelectorAll(".brand-tagline-2").forEach(d=>{u&&(d.style.color=u)})),document.title&&!document.title.startsWith(t)&&(document.title=document.title.replace(/^[^|]+\|/,t+" |").replace(/^[^–]+–/,t+" – ")),o){let d=document.querySelector("link[rel~='icon']");d||(d=document.createElement("link"),d.rel="icon",document.head.appendChild(d)),d.href=o}if(n||l||i){const d=i?`'${i}'`:null,p=document.getElementById("brand-css-vars")||(()=>{const y=document.createElement("style");return y.id="brand-css-vars",document.head.appendChild(y),y})();if(p.textContent=`:root {
      ${n?`--brand-primary: ${n};`:""}
      ${l?`--brand-secondary: ${l};`:""}
      ${d?`--brand-font: ${d}, system-ui, sans-serif;`:""}
    }`,i){const y="brand-gf-link";if(!document.getElementById(y)){const b=document.createElement("link");b.id=y,b.rel="stylesheet",b.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(i)}:wght@400;600;700;900&display=swap`,document.head.appendChild(b)}}}document.querySelectorAll("[data-brand]").forEach(d=>{const p=d.dataset.brand;p==="name"&&(d.textContent=t,!d.querySelector("[data-weverse-badge]")&&!d.parentElement?.querySelector("[data-weverse-badge]")&&d.appendChild(Object.assign(document.createElement("span"),{className:"inline-flex items-center ml-1 align-middle",innerHTML:Es("weverse-badge w-4 h-4 sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5 shrink-0")}))),p==="slogan"&&(d.textContent=a),p==="logo"&&(d.src=r,d.alt=t,d.style.display=""),p==="badge"&&(d.src=s,d.alt="Verified",d.style.display=""),p==="tagline"&&(d.textContent=a),p==="footer-logo"&&(e.brand_footer_logo?(d.src=e.brand_footer_logo,d.alt=t):(d.src=r,d.alt=t)),p==="mobile-logo"&&(e.brand_mobile_logo?(d.src=e.brand_mobile_logo,d.alt=t):(d.src=r,d.alt=t))}),document.querySelectorAll('img[data-brand="logo"]').forEach(d=>{const y=d.closest(".text-center")?.querySelector('h1[data-brand="name"]');y&&(y.style.display="none")}),Ms(t,a,r,s),Ts(t,a,r),Le()}function As(e,t){const a=document.getElementById("homepage-banner-shell"),r=document.getElementById("homepage-banner-image");if(!(!a||!r)){if(!e){r.removeAttribute("src"),r.alt=t,a.classList.add("hidden");return}r.alt=t,r.onload=()=>Le(),r.onerror=()=>{a.classList.add("hidden"),Le()},r.src!==e&&(r.src=e),a.classList.remove("hidden")}}function Le(){const e=document.getElementById("site-header"),t=document.getElementById("site-categories-nav"),a=document.querySelector("main");if(!e||!t||!a)return;const r=Math.ceil(e.getBoundingClientRect().height||e.offsetHeight||0),s=Math.ceil(t.getBoundingClientRect().height||t.offsetHeight||0);t.style.top=`${r}px`;const o=window.innerWidth<640?20:12;a.style.paddingTop=`${r+s+o}px`}function Ms(e,t,a,r,s){document.querySelectorAll('header a[href="/"], header a[href="./"], header a[href="index.html"], .brand-link, #brand-link').forEach(i=>{Pa(i,e,t),i.querySelectorAll('img.brand-logo, img[data-brand="logo"]').forEach(n=>{n.src=a,n.alt=e})}),document.querySelectorAll("header span").forEach(i=>{if(i.classList.contains("brand-tagline-1")||i.classList.contains("brand-tagline-2"))return;const n=i.textContent.trim();(n==="Weverse Online Shop"||n==="KCO Global Online Marketplace"||i.classList.contains("brand-name"))&&(i.textContent=e),(n==="Your Trusted Global Shop"||n.includes("Globally")||n.includes("Worldwide")||i.classList.contains("brand-slogan"))&&(i.textContent=t)}),document.querySelectorAll('[data-brand="badge"], .brand-badge, #brand-badge').forEach(i=>{i.tagName==="IMG"&&(i.src=r,i.alt="Verified",i.style.display="")}),document.querySelectorAll('header a[href="/"] .relative.shrink-0, header a .relative.w-7').forEach(i=>{if(!i.querySelector("img.injected-logo")){const n=document.createElement("img");n.src=a,n.alt=e,n.className="injected-logo w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-lg",n.onerror=()=>n.style.display="none",i.style.display="flex",i.style.alignItems="center",i.innerHTML="",i.appendChild(n)}})}function Ts(e,t,a){document.querySelectorAll("footer").forEach(r=>{Pa(r,e,t),r.querySelectorAll("img.brand-logo, img[data-brand], .footer-logo img").forEach(s=>{s.src=a,s.alt=e})})}function Pa(e,t,a){const r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),s=[];let o;for(;o=r.nextNode();){const i=o.textContent.trim();(i==="Weverse Online Shop"||i==="KCO Global Online Marketplace")&&s.push({node:o,value:t}),(i==="Your Trusted Global Shop"||i==="Global Shopping • Worldwide Delivery")&&s.push({node:o,value:a})}s.forEach(({node:i,value:n})=>{i.textContent=i.textContent.replace(i.textContent.trim(),n)})}$t().then(Ct);window.addEventListener("load",()=>$t().then(Ct));window.addEventListener("resize",()=>Le());window.addEventListener("storage",e=>{e.key===ht&&$t().then(Ct)});function ye(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return t>>>0}function Bs(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}const et=["James","Emma","Liam","Olivia","Noah","Ava","Ethan","Sophia","Lucas","Mia","Daniel","Isabella","Matthew","Charlotte","Samuel","Amelia","Gabriel","Harper","Nathan","Evelyn","Caleb","Abigail","Adrian","Ella","Owen","Grace","Leo","Chloe","Julian","Nora","Mason","Aria","Elijah","Layla","Isaac","Zoe","Hunter","Scarlett","Christian","Lily","Aaron","Hannah","Dylan","Savannah","Andrew","Ruby","David","Elena","Ryan","Nina","Marcus","Priya","Kwame","Fatima","Andre","Yuki","Tomas","Ingrid","Mateo","Sofia","Omar","Zara","Felix","Amara","Jonas","Leila","Victor","Mila","Diego","Iris","Hugo","Camila","Adam","Freya","Oscar","Amina","Peter","Naomi","Elias","Lucia","Ray","Talia","Marco","Sienna","Joshua","Anya","Kofi","Petra"],xe=["Anderson","Baker","Carter","Diaz","Evans","Foster","Garcia","Harris","Ingram","Johnson","Kelly","Lewis","Miller","Nelson","Ortiz","Parker","Quinn","Reed","Sanders","Turner","Underwood","Vaughn","Walker","Young","Zimmerman","Brooks","Coleman","Dunn","Fisher","Grant","Hayes","Jordan","Knight","Lopez","Morgan","Nguyen","Okafor","Peterson","Romano","Silva","Thompson","Umeh","Volkov","Wang","Xu","Yates","Zhou","Bennett","Chukwu","Doyle","Eze","Ferreira","Gonzalez","Hansen","Ivanov","Jansen","Kumar","Larsen","Moreau","Novak","Osei","Patel","Quintero","Rossi","Schmidt","Tavares","Ueda","Vasquez","Weber","Xavier","Yamamoto","Ziegler","Adeyemi","Barlow","Costa","Diop","Eriksen","Fontaine","Gomez","Holmes","Ikram","Juma","Karlsson","Lawson","Mensah","Nilsson"],Ft=[{city:"Austin",country:"United States"},{city:"New York",country:"United States"},{city:"Seattle",country:"United States"},{city:"Los Angeles",country:"United States"},{city:"Chicago",country:"United States"},{city:"Boston",country:"United States"},{city:"San Diego",country:"United States"},{city:"Denver",country:"United States"},{city:"Miami",country:"United States"},{city:"Portland",country:"United States"},{city:"Toronto",country:"Canada"},{city:"Vancouver",country:"Canada"},{city:"Montreal",country:"Canada"},{city:"Calgary",country:"Canada"},{city:"Ottawa",country:"Canada"},{city:"London",country:"United Kingdom"},{city:"Manchester",country:"United Kingdom"},{city:"Birmingham",country:"United Kingdom"},{city:"Edinburgh",country:"United Kingdom"},{city:"Glasgow",country:"United Kingdom"},{city:"Bristol",country:"United Kingdom"},{city:"Liverpool",country:"United Kingdom"},{city:"Dublin",country:"Ireland"},{city:"Cork",country:"Ireland"},{city:"Paris",country:"France"},{city:"Lyon",country:"France"},{city:"Marseille",country:"France"},{city:"Berlin",country:"Germany"},{city:"Munich",country:"Germany"},{city:"Hamburg",country:"Germany"},{city:"Frankfurt",country:"Germany"},{city:"Amsterdam",country:"Netherlands"},{city:"Rotterdam",country:"Netherlands"},{city:"Brussels",country:"Belgium"},{city:"Antwerp",country:"Belgium"},{city:"Zurich",country:"Switzerland"},{city:"Geneva",country:"Switzerland"},{city:"Vienna",country:"Austria"},{city:"Rome",country:"Italy"},{city:"Milan",country:"Italy"},{city:"Florence",country:"Italy"},{city:"Madrid",country:"Spain"},{city:"Barcelona",country:"Spain"},{city:"Valencia",country:"Spain"},{city:"Lisbon",country:"Portugal"},{city:"Porto",country:"Portugal"},{city:"Stockholm",country:"Sweden"},{city:"Gothenburg",country:"Sweden"},{city:"Oslo",country:"Norway"},{city:"Copenhagen",country:"Denmark"},{city:"Helsinki",country:"Finland"},{city:"Reykjavik",country:"Iceland"},{city:"Warsaw",country:"Poland"},{city:"Krakow",country:"Poland"},{city:"Prague",country:"Czech Republic"},{city:"Athens",country:"Greece"},{city:"Sydney",country:"Australia"},{city:"Melbourne",country:"Australia"},{city:"Brisbane",country:"Australia"},{city:"Perth",country:"Australia"},{city:"Adelaide",country:"Australia"},{city:"Auckland",country:"New Zealand"},{city:"Wellington",country:"New Zealand"},{city:"Christchurch",country:"New Zealand"},{city:"Singapore",country:"Singapore"},{city:"Tokyo",country:"Japan"},{city:"Osaka",country:"Japan"},{city:"Kyoto",country:"Japan"},{city:"Seoul",country:"South Korea"},{city:"Busan",country:"South Korea"},{city:"Dubai",country:"United Arab Emirates"},{city:"Abu Dhabi",country:"United Arab Emirates"},{city:"Doha",country:"Qatar"},{city:"Tel Aviv",country:"Israel"},{city:"Taipei",country:"Taiwan"},{city:"Hong Kong",country:"Hong Kong"}],ve=["just ordered from this shop and it was so easy fr","first time buying here and honestly impressed ngl","checked out in like 2 minutes, easiest thing ever","was a little skeptical at first but it all worked out","placed my order from my phone, super smooth","i've ordered here a few times and it never lets me down","took a chance on this store and zero regrets","signing up and ordering took no time at all","everything from picking to paying was really simple","first international order and it went perfectly 🙏","lowkey wasn't expecting much but it was great","order went through instantly, no drama","the site is so easy to use, even i managed it lol","been shopping online for years, this one stands out","quick and painless, just how online shopping should be","had a tiny doubt before ordering but it was fine","the whole process felt very professional","just what i needed, no stress, no hassle","my cousin recommended this shop and he was right","ordered without overthinking and it paid off"],F=["shipping was mad fast, arrived way earlier than expected","my package came in perfect condition 🔥","the delivery guy was super nice and careful","got updates the entire time, no guessing","tracking was accurate and it showed up on time","packaging was really solid, nothing was damaged","they answered my question in like 10 minutes","customer service was actually helpful, rare these days","everything arrived exactly as described","the parcel was wrapped so well, impressive","it showed up a day early, which was a nice surprise","payment was secure and confirmation came right away","kept me posted at every single step","dispatching was quick, shipped the same day","the item looked even better in person","my order was handled with so much care","they were super responsive whenever i messaged","the tracking link actually worked the whole way","delivery was on schedule, not a minute late","everything came neatly packed and in one piece","no issues at all, straight to my door","they followed up after delivery which i thought was nice","the whole team was polite and professional","my doubts disappeared once the package arrived","quality was clear as soon as i opened the box","support replied quickly even though it was late","well organized from start to finish","came when they said it would, no surprises","fast dispatch and smooth handling of my order","the notifications kept me calm the whole time lol","everything i ordered was in the box, nothing missing","the courier called before arriving, so professional","shipped in sturdy packaging, survived the trip perfectly","i could track it the whole way, very reassuring","they processed my order in record time","came in perfect shape and very well protected","every update they sent was accurate and clear","exactly the delivery experience you hope for","returns and support were straightforward too","very clean, well managed order, i was impressed"],tt=["100% ordering again fr","would recommend this shop to anyone","already told my friends about it","this is my new go to place now","can't recommend them enough","definitely coming back, no question","so glad i found this store","will 100% be back 💯","no complaints at all honestly","totally worth it, trust me","10/10 experience, easy","this shop is legit, trust","loyal customer for life now","five stars from me, easy","a real hidden gem honestly","can't wait for my next order"],Vt={vehicle:["my vehicle was delivered safe and sound, kept me updated the whole trip","the listing was exact and delivery was arranged super smoothly"],property:["the listing was spot on and they walked me through the whole process","all the paperwork was handled clean, very easy from start to finish"],phone:["the phone matched the photos exactly and shipped out quick","they double checked everything before sending, packaging was solid"],pet:["they handled everything so carefully, i felt reassured the whole way","all the paperwork was sorted out and the process was really easy"],product:["the item was exactly like the photos, arrived in great shape","order was processed fast and the packaging was really solid"]},Dt=["🔥","✨","😍","🙌","💯","😭","❤️","👍","🎯","👌","✅","⚡","📦","🙏"],Na=[{year:2018,w:3},{year:2019,w:7},{year:2020,w:11},{year:2021,w:13},{year:2022,w:15},{year:2023,w:16},{year:2024,w:15},{year:2025,w:12},{year:2026,w:8}],qs=Na.reduce((e,t)=>e+t.w,0);function js(e){let t=e()*qs;for(const a of Na){if(t<a.w)return a.year;t-=a.w}return 2024}function at(e,t,a,r){return(e+t*a)%r}function Rs(e,t={}){const a=String(e.property_id||e.id||"");if(!a)return{reviews:[],breakdown:{5:0,4:0,3:0,2:0,1:0},total:0,computedRating:0};const r=ye(a),s=187+r%660,i=Math.min(5,Math.max(1,Number(e.rating)||0))||4.5;let n=Math.max(.3,Math.min(.9,i/5)),l=1-n,c=.07,u=.04,d=.03;const p=1/(n+l+c+u+d);n*=p,l*=p,c*=p,u*=p,d*=p;const y=[n,l,c,u,d],b=e.listing_type==="vehicle"?"vehicle":e.listing_type==="property"?"property":e.listing_type==="pet"?"pet":String(e.category||"").toLowerCase().includes("phone")?"phone":"product",g=Vt[b]||Vt.product,x=[],v=et.length*xe.length,E=ve.length*F.length*F.length*tt.length,$=457,I=811;for(let w=0;w<s;w++){const j=Bs(ye(a+"::"+w));let oe=j(),h=5,_=0;for(let ge=5;ge>=1;ge--)if(_+=y[5-ge],oe<=_){h=ge;break}const z=at(r,w,$,v),M=et[Math.floor(z/xe.length)%et.length],Y=xe[z%xe.length],T=`${M} ${Y}`;let S=at(r,w,I,E);const fe=ve[S%ve.length];S=Math.floor(S/ve.length);const Ye=F[S%F.length];S=Math.floor(S/F.length);const be=F[S%F.length];S=Math.floor(S/F.length);const za=tt[S%tt.length];let ie=`${fe} ${Ye}`;w%3===0&&g.length&&(ie+=` ${g[w%g.length]}`),w%2===0&&(ie+=` ${be}`),ie+=` ${za}`,w%3===2&&(ie+=` ${Dt[(r+w*13)%Dt.length]}`);const Ya=Ft[at(r,w,337,Ft.length)],Ka=Date.now(),Et=js(j),Za=Et===2018?10+Math.floor(j()*3):1+Math.floor(j()*12),Ja=1+Math.floor(j()*28),Xa=Date.UTC(Et,Za-1,Ja),Qa=new Date(Math.min(Xa,Ka)).toISOString(),er=`@${M.toLowerCase()}${Y.toLowerCase()}`,tr=2+ye(a+"::likes::"+w)%380,ar=w%7===0?1+ye(a+"::rep::"+w)%4:0;x.push({name:T,handle:er,location:Ya.country,date:Qa,rating:h,text:ie,likes:tr,replies:ar,verified:!1,seeded:!0})}x.sort((w,j)=>w.date<j.date?1:-1);const f={5:0,4:0,3:0,2:0,1:0};let P=0;for(let w=5;w>=1;w--)f[w]=Math.round(s*y[5-w]),P+=f[w];const A=s-P;A!==0&&(f[A>0?5:1]+=A);let G=0;for(let w=5;w>=1;w--)G+=w*f[w];const J=G/s;return{reviews:x,breakdown:f,total:s,computedRating:J}}const rt="support@weverseonlineshop.com",Hs="weverse_brand_v1";function B(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Oa(){try{const e=JSON.parse(localStorage.getItem(Hs)||"{}"),t=e.data&&typeof e.data=="object"?e.data:e;if(t&&typeof t=="object"&&(t.brand_name||t.site_name||t.brand_logo))return t}catch{}return{}}function Ps(){const e=Oa(),t=e.brand_name||e.site_name||He;return`
    <section class="relative overflow-hidden bg-slate-950 text-white">
      <!-- built-in design (shown when no admin media is set) -->
      <div class="absolute inset-0" style="background:
        radial-gradient(900px 480px at 82% 12%, rgba(37,99,235,.40), transparent 62%),
        radial-gradient(720px 420px at 8% 92%, rgba(6,182,212,.26), transparent 60%),
        linear-gradient(160deg,#0b1226 0%,#060c1c 55%,#071523 100%)"></div>
      <div class="absolute inset-0 opacity-[.07]" style="background-image:radial-gradient(#7dd3fc 1px, transparent 1px);background-size:24px 24px"></div>
      <!-- admin-chosen background (image or video) -->
      <div class="absolute inset-0" data-bg-slot="trust_promo"></div>

      <div class="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div class="max-w-2xl relative rounded-3xl bg-slate-950/55 border border-white/10 p-6 sm:p-8 md:p-10 backdrop-blur-md shadow-2xl shadow-slate-950/50">
          <span class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300 border border-cyan-400/30 bg-cyan-400/10 rounded-full px-3.5 py-1.5 mb-5">
            <i data-lucide="truck" class="w-3.5 h-3.5"></i> Worldwide Delivery
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.06] tracking-tight text-white">
            Premium shopping, delivered right to your door
          </h2>
          <p class="text-[15px] sm:text-base text-slate-200 mt-4 leading-relaxed max-w-xl">
            Every order is packed with care, tracked in real time, and shipped securely to customers in
            200+ countries worldwide — so shopping with ${B(t)} is always fast, safe and worry-free.
          </p>
          <div class="flex flex-wrap items-center gap-3.5 mt-7">
            <a href="/#showroom-directory" class="inline-flex items-center gap-2 bg-white text-blue-900 font-black text-sm px-6 py-3.5 rounded-2xl shadow-xl shadow-slate-900/40 hover:scale-[1.03] active:scale-[.98] transition">
              Shop Now <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
            <a href="/account.html" class="inline-flex items-center gap-2 border border-white/25 bg-white/10 text-white text-sm font-bold px-6 py-3.5 rounded-2xl backdrop-blur hover:bg-white/15 transition">
              Track My Order <i data-lucide="package-search" class="w-4 h-4"></i>
            </a>
          </div>
          <div class="grid grid-cols-3 gap-2.5 mt-8 max-w-md">
            ${[{icon:"globe",label:"200+ countries",sub:"worldwide"},{icon:"shield-check",label:"Secure payments",sub:"protected"},{icon:"clock",label:"24/7 support",sub:"always here"}].map(a=>`
              <div class="bg-white/[.06] border border-white/10 rounded-2xl px-3 py-3.5 text-center backdrop-blur">
                <i data-lucide="${a.icon}" class="w-5 h-5 text-cyan-300 mx-auto"></i>
                <p class="text-[11px] font-black text-white mt-2">${a.label}</p>
                <p class="text-[9px] text-slate-400">${a.sub}</p>
              </div>`).join("")}
          </div>
        </div>
      </div>
    </section>`}function Ns(){const e=t=>`
    <div class="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3.5">
      ${t.map(a=>`
        <div class="flex items-start gap-3">
          <div class="shrink-0 w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <i data-lucide="${a.icon}" class="w-5 h-5"></i>
          </div>
          <div class="min-w-0">
            <p class="text-[13px] font-black text-gray-900 leading-tight">${a.title}</p>
            <p class="text-[11px] text-gray-500 mt-0.5">${a.sub}</p>
          </div>
        </div>`).join("")}
    </div>`;return`
    <section class="bg-gray-50 border-y border-gray-200">
      <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-7 sm:py-9">
        <div class="grid grid-cols-2 gap-3 sm:gap-5">
          ${e([{icon:"lock",title:"SSL Secure",sub:"Encrypted"},{icon:"globe",title:"Trusted Worldwide",sub:"200+ countries"},{icon:"package-search",title:"Order Tracking",sub:"Real-time updates"}])}
          ${e([{icon:"shield-check",title:"Secure Checkout",sub:"Protected"},{icon:"key-round",title:"Privacy Protected",sub:"Your data is safe"},{icon:"headphones",title:"24/7 Support",sub:"Always here"}])}
        </div>
      </div>
    </section>`}const Ut=[{id:"trust-shipping",icon:"package",tone:"blue",title:"Shipping & Delivery",body:`
      <p class="text-sm text-gray-600 leading-relaxed">Every order is packed securely and shipped through trusted, fully-tracked couriers. Delivery times depend on your location:</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span><b>Standard:</b> 5–10 business days</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span><b>Express:</b> 2–4 business days</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span><b>Worldwide:</b> tracked delivery to 200+ countries</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400">You will receive a tracking number the moment your order ships.</p>`},{id:"trust-checkout",icon:"lock",tone:"emerald",title:"Secure Checkout",body:`
      <p class="text-sm text-gray-600 leading-relaxed">Checkout is protected end-to-end with 256-bit SSL encryption. Your payment and personal details are processed securely and never shared with third parties.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>256-bit SSL encrypted connection</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Verified, trusted payment gateways</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>No card details stored on our servers</li>
      </ul>`},{id:"trust-returns",icon:"rotate-ccw",tone:"amber",title:"Returns & Refunds",body:`
      <p class="text-sm text-gray-600 leading-relaxed">Not happy with your order? We make returns simple and fair.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>30-day return window on eligible items</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Refunds processed within 3–7 business days</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Start a return from your account, anytime</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400">See our <a class="text-blue-600 font-semibold hover:underline" href="/refund-policy.html">Refund Policy</a> for full details.</p>`},{id:"trust-payment",icon:"credit-card",tone:"violet",title:"Payment Information",body:`
      <p class="text-sm text-gray-600 leading-relaxed">We accept a wide range of payment methods so everyone can shop with confidence:</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-violet-500"></span>Credit & debit cards (Visa, Mastercard, …)</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-violet-500"></span>Mobile money & bank transfer</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-violet-500"></span>Secure online payment gateways</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400">Available options are shown at checkout for your region.</p>`},{id:"trust-worldwide",icon:"globe",tone:"sky",title:"Worldwide Delivery",body:`
      <p class="text-sm text-gray-600 leading-relaxed">From one local shop to homes around the world — we deliver to 200+ countries and territories through reliable international couriers.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>International tracking on every order</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>Careful customs & import handling</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>Transparent delivery fees at checkout</li>
      </ul>`},{id:"trust-tracking",icon:"package-search",tone:"indigo",title:"Order Tracking",body:`
      <p class="text-sm text-gray-600 leading-relaxed">Follow your order from our shop to your door with real-time updates.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Instant tracking number when your order ships</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Live status in <b>My Account → Orders</b></li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>Email & SMS updates at every step</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400"><a class="text-blue-600 font-semibold hover:underline" href="/account.html">Track an order now</a></p>`},{id:"trust-privacy",icon:"shield",tone:"rose",title:"Privacy & Security",body:`
      <p class="text-sm text-gray-600 leading-relaxed">Your privacy matters to us. We protect your personal information with industry-standard security and never sell your data.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Encrypted storage of personal data</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Your data is never sold to third parties</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>You can request deletion at any time</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400">Read our <a class="text-blue-600 font-semibold hover:underline" href="/privacy.html">Privacy Policy</a>.</p>`},{id:"trust-faq",icon:"message-circle-question",tone:"slate",title:"Frequently Asked Questions",body:`
      <div class="space-y-4">
        <div><p class="text-sm font-black text-gray-900">How do I track my order?</p>
          <p class="text-sm text-gray-600 mt-1">Open <b>My Account → Orders</b> and select the order to see live tracking, or follow the link sent to your email.</p></div>
        <div><p class="text-sm font-black text-gray-900">Can I change or cancel an order?</p>
          <p class="text-sm text-gray-600 mt-1">Yes — contact support within 24 hours of ordering and we will do our best to update or cancel it before shipping.</p></div>
        <div><p class="text-sm font-black text-gray-900">How long do refunds take?</p>
          <p class="text-sm text-gray-600 mt-1">Once your return is received, refunds are processed within 3–7 business days to your original payment method.</p></div>
        <div><p class="text-sm font-black text-gray-900">Is my payment information safe?</p>
          <p class="text-sm text-gray-600 mt-1">Absolutely. Checkout runs over a 256-bit SSL encrypted connection and your card details are never stored by us.</p></div>
      </div>`},{id:"trust-support",icon:"headphones",tone:"teal",title:"Customer Support",body:`
      <p class="text-sm text-gray-600 leading-relaxed">Our support team is here for you 24/7, before and after every order.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-teal-500"></span><b>Email:</b> <a class="text-blue-600 hover:underline" href="mailto:support@weverseonlineshop.com">support@weverseonlineshop.com</a></li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-teal-500"></span><b>Chat:</b> the chat bubble in the corner of every page</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-teal-500"></span><b>Help Center:</b> guides & answers at <a class="text-blue-600 hover:underline" href="/help.html">our Help Center</a></li>
      </ul>`},{id:"trust-app",icon:"smartphone",tone:"cyan",title:"Weverse Mobile App",body:`
      <p class="text-sm text-gray-600 leading-relaxed">Take the whole shop with you. Browse products, manage orders, save favorites and enjoy a smooth shopping experience on the go.</p>
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Shop products anywhere, anytime</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Track orders & get instant updates</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Exclusive app offers & new arrivals</li>
      </ul>
      <p class="mt-3 text-xs text-gray-400">The Android app is in final review — the download link will appear here the moment it goes live.</p>`}],Gt={blue:"bg-blue-50 text-blue-600",emerald:"bg-emerald-50 text-emerald-600",amber:"bg-amber-50 text-amber-600",violet:"bg-violet-50 text-violet-600",sky:"bg-sky-50 text-sky-600",indigo:"bg-indigo-50 text-indigo-600",rose:"bg-rose-50 text-rose-600",slate:"bg-slate-100 text-slate-600",teal:"bg-teal-50 text-teal-600",cyan:"bg-cyan-50 text-cyan-600"};function Os(e){const t=Gt[e.tone]||Gt.blue;return`
    <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      <button type="button" data-acc="${e.id}" aria-expanded="false" class="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left hover:bg-gray-50 transition active:bg-gray-100">
        <span class="flex items-center gap-3 min-w-0">
          <span class="shrink-0 w-10 h-10 rounded-xl ${t} flex items-center justify-center"><i data-lucide="${e.icon}" class="w-5 h-5"></i></span>
          <span class="text-[15px] sm:text-base font-black text-gray-900 tracking-tight">${e.title}</span>
        </span>
        <span data-acc-icon="${e.id}" class="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300">
          <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500"></i>
        </span>
      </button>
      <div data-acc-body="${e.id}" class="trust-acc-body" data-open="0">
        <div class="px-4 sm:px-5 pb-5 pt-1 border-t border-gray-100">${e.body}</div>
      </div>
    </div>`}function Ws(){const e=Ut.slice(0,6),t=Ut.slice(6),a=r=>r.map(Os).join("");return`
    <section class="bg-white">
      <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><i data-lucide="info" class="w-5 h-5"></i></div>
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Shop with confidence</h2>
            <p class="text-xs text-gray-500 mt-0.5">Everything you need to know before you buy — tap any section to expand.</p>
          </div>
        </div>
        <div class="grid lg:grid-cols-2 gap-4">
          ${a(e)}
        </div>
        <div class="mt-4 grid lg:grid-cols-2 gap-4">
          ${a(t)}
        </div>
      </div>
    </section>`}const Fs=[{name:"Amina K.",country:"Nigeria",text:"My order arrived ahead of schedule and the quality was exactly as described. I shop here without any doubt.",verified:!0},{name:"Sarah & James",country:"United States",text:"Ordered for our whole family — tracking updates made it feel safe and reliable from checkout to delivery.",verified:!0},{name:"Priya S.",country:"India",text:"The customer support team answered my questions in minutes. Genuinely trustworthy shopping experience.",verified:!0}];function Vs(e){return[1,2,3,4,5].map(t=>`<i data-lucide="star" class="w-3.5 h-3.5 ${t<=e?"fill-amber-400 text-amber-400":"text-slate-500"}"></i>`).join("")}function ft(e){const t=String(e.name||"Verified shopper").trim()||"Verified shopper",a=(t.charAt(0)||"V").toUpperCase(),r=[e.country||"",e.verified?"Verified buyer":"",e.date||""].filter(Boolean).join(" · ");return`
    <div class="bg-white/[.07] border border-white/10 rounded-2xl p-4 backdrop-blur flex flex-col">
      <div class="flex items-center gap-1 mb-2.5">${Vs(e.rating||5)}</div>
      <p class="text-[13px] text-slate-200 leading-relaxed flex-1">“${B(e.text)}”</p>
      <div class="flex items-center gap-2.5 mt-3.5">
        <span class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white text-[11px] font-black">${B(a)}</span>
        <div class="min-w-0">
          <p class="text-xs font-black text-white truncate">${B(t)}</p>
          <p class="text-[10px] text-slate-400 truncate">${r}</p>
        </div>
      </div>
    </div>`}const Ds=[{name:"Daniel O.",country:"Ghana",text:"Ordered a laptop and it arrived in under a week, perfectly packed. The tracking updates were accurate all the way to my door.",rating:5,verified:!0},{name:"Emily R.",country:"Canada",text:"The checkout process was smooth and the payment felt very secure. Exactly the peace of mind you want when buying online.",rating:5,verified:!0},{name:"Kevin M.",country:"United Kingdom",text:"Support replied within minutes when I had a question about shipping. Genuinely impressed by how fast and kind they were.",rating:5,verified:!0},{name:"Grace A.",country:"Nigeria",text:"My order was well packaged and the quality matched the pictures perfectly. I will definitely be shopping here again.",rating:5,verified:!0},{name:"Lucas T.",country:"Brazil",text:"First international order for me and it went flawlessly. Real-time tracking from start to finish. Highly recommended.",rating:5,verified:!0},{name:"Fatima Z.",country:"United Arab Emirates",text:"Beautiful products, fair prices, and delivery arrived earlier than expected. A trusted place to shop.",rating:5,verified:!0},{name:"James H.",country:"Australia",text:"Had to arrange a return once and it was handled quickly with a full refund. That is how you keep customers happy.",rating:5,verified:!0},{name:"Amara N.",country:"Kenya",text:"The customer support team is available around the clock. I asked a question at midnight and still got a helpful reply.",rating:5,verified:!0},{name:"Sophie L.",country:"France",text:"Everything from ordering to delivery felt professional and secure. My favourite online shop so far.",rating:5,verified:!0},{name:"Ravi P.",country:"India",text:"Tracking updates at every step made the whole experience worry-free. The product arrived safely and on time.",rating:5,verified:!0},{name:"Maria S.",country:"Spain",text:"Secure checkout and fast worldwide shipping. I trust this shop with my money and my family.",rating:5,verified:!0},{name:"Ahmed B.",country:"Egypt",text:"Ordered several items for the family — every single one was packed with care and delivered on time. Five stars from us.",rating:5,verified:!0}];function Us(){return`
    <section id="customer-feedback" class="relative overflow-hidden bg-slate-950 text-white">
      <div class="absolute inset-0" style="background:
        radial-gradient(800px 420px at 15% 20%, rgba(16,185,129,.25), transparent 60%),
        linear-gradient(160deg,#071a16 0%,#060c1c 60%,#0b1226 100%)"></div>
      <div class="absolute inset-0 opacity-[.06]" style="background-image:radial-gradient(#34d399 1px, transparent 1px);background-size:22px 22px"></div>
      <div class="absolute inset-0" data-bg-slot="reviews"></div>

      <div class="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/20 text-emerald-300 flex items-center justify-center"><i data-lucide="message-square-text" class="w-5 h-5"></i></div>
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-white tracking-tight">Customer Feedback</h2>
            <p class="text-xs text-slate-400 mt-0.5">Real shoppers, real orders, real peace of mind.</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-3 gap-4" id="fb-featured">
          ${Fs.map(ft).join("")}
        </div>

        <!-- Feedback form -->
        <div class="mt-6 rounded-2xl border border-white/10 bg-white/[.06] backdrop-blur p-5 sm:p-6">
          <div class="flex items-center gap-2 mb-4">
            <i data-lucide="pen-line" class="w-4 h-4 text-emerald-300"></i>
            <p class="text-sm font-black text-white">Feedback</p>
            <span class="text-[10px] text-slate-400">Your experience helps us improve</span>
          </div>
          <form id="fb-form" class="space-y-3.5">
            <div class="grid sm:grid-cols-2 gap-3.5">
              <input id="fb-name" type="text" maxlength="60" placeholder="Your name" class="w-full rounded-xl border border-white/15 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-emerald-400/60">
              <input id="fb-email" type="email" maxlength="120" placeholder="Email (optional)" class="w-full rounded-xl border border-white/15 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-emerald-400/60">
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <p class="text-xs font-bold text-slate-300">Your rating:</p>
              <div class="flex gap-1" id="fb-stars">
                ${[1,2,3,4,5].map(e=>`<button type="button" data-star="${e}" class="fb-star text-slate-500 hover:text-amber-400 transition"><i data-lucide="star" class="w-6 h-6"></i></button>`).join("")}
              </div>
              <input type="hidden" id="fb-rating" value="5">
            </div>
            <textarea id="fb-text" rows="3" maxlength="1000" required placeholder="Write your feedback here…" class="w-full rounded-xl border border-white/15 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-emerald-400/60"></textarea>
            <div class="flex flex-wrap items-center gap-3">
              <button type="submit" class="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-xl text-sm transition hover:scale-[1.02] active:scale-[.98]">
                Submit Feedback <i data-lucide="send" class="w-4 h-4"></i>
              </button>
              <p id="fb-msg" class="text-xs font-bold hidden"></p>
            </div>
          </form>
        </div>

        <!-- View more Feedback (same banner background, separate comments) -->
        <div class="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-white/[.06] backdrop-blur">
          <button type="button" data-acc="trust-reviews-more" aria-expanded="false" class="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-white/[.04] transition">
            <span class="flex items-center gap-2.5">
              <i data-lucide="messages-square" class="w-5 h-5 text-emerald-300"></i>
              <span class="text-sm font-black text-white">View more Feedback</span>
            </span>
            <span data-acc-icon="trust-reviews-more" class="shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300"><i data-lucide="chevron-down" class="w-5 h-5 text-slate-300"></i></span>
          </button>
          <div data-acc-body="trust-reviews-more" class="trust-acc-body" data-open="0">
            <div class="border-t border-white/10 px-4 sm:px-5 pb-5 pt-4">
              <div id="fb-more-list" class="max-h-[26rem] overflow-y-auto pr-1 space-y-3">
                ${Ds.map(ft).join("")}
              </div>
              <div class="flex justify-center mt-4">
                <button type="button" data-feedback-backtop class="btn-press inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold py-2.5 px-5 rounded-full text-xs transition">
                  <i data-lucide="chevron-up" class="w-4 h-4"></i> Back to top
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`}function q(e,t){return`<li><a href="${e}" class="text-xs text-slate-400 hover:text-white transition">${t}</a></li>`}function zt(e){const t={...qe,...e||{}},a=Oa(),r=a.brand_name||a.site_name||He,s=a.brand_logo||a.brand_header_logo||a.brand_footer_logo||"/w-logo.svg",o=t.bottom_footer_text||a.brand_slogan||a.site_tagline||"GLOBAL SHOPPING · WORLDWIDE DELIVERY",i=t.bottom_copyright?t.bottom_copyright:`© ${new Date().getFullYear()} ${r}. All rights reserved.`;return`
    <section id="site-closing-section" class="relative overflow-hidden bg-[#060c1c] text-white">
      <!-- backdrop -->
      <div class="absolute inset-0" style="background:
        radial-gradient(900px 480px at 82% 10%, rgba(37,99,235,.32), transparent 62%),
        radial-gradient(720px 420px at 10% 94%, rgba(6,182,212,.20), transparent 60%),
        linear-gradient(180deg,#0a1128 0%,#060c1c 55%,#04101f 100%)"></div>
      <div class="absolute inset-0 opacity-[.05]" style="background-image:radial-gradient(#7dd3fc 1px, transparent 1px);background-size:24px 24px"></div>

      <div class="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-14 sm:pt-20 pb-8 sm:pb-10">
        <!-- Thank-you hero -->
        <div class="text-center max-w-3xl mx-auto">
          <div class="mx-auto w-16 h-16 rounded-2xl bg-white/[.07] border border-white/10 flex items-center justify-center overflow-hidden backdrop-blur">
            <img src="${B(s)}" alt="${B(r)}" class="w-10 h-10 object-contain" onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex'">
            <span style="display:none">${Ha("w-9 h-9")}</span>
          </div>
          <p class="mt-4 text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300">${B(o)}</p>
          <h2 class="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.08] tracking-tight text-white">
            ${B(t.bottom_heading)}
          </h2>
          <p class="mt-4 text-[15px] sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            ${B(t.bottom_main_message)}
          </p>
          <p class="mt-5 text-lg sm:text-xl font-semibold text-cyan-200">${B(t.bottom_closing_message)}</p>
        </div>

        <!-- Customer Support area -->
        <div class="mt-12 max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[.05] backdrop-blur-md p-6 sm:p-8">
          <div class="flex flex-col lg:flex-row items-center gap-6 justify-between text-center lg:text-left">
            <div class="flex items-center gap-4">
              <div class="shrink-0 w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 flex items-center justify-center">
                <i data-lucide="headphones" class="w-6 h-6"></i>
              </div>
              <div>
                <h3 class="text-lg sm:text-xl font-black text-white tracking-tight">${B(t.bottom_support_heading)}</h3>
                <p class="text-sm text-slate-300 mt-1 max-w-md">${B(t.bottom_support_description)}</p>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href="mailto:${B(rt)}" class="btn-press inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-xl shadow-blue-900/30 hover:scale-[1.03] active:scale-[.98] transition">
                ${B(t.bottom_support_button_text)} <i data-lucide="message-circle" class="w-4 h-4"></i>
              </a>
              <a href="/contact.html" class="inline-flex items-center gap-2 border border-white/25 bg-white/10 text-white text-sm font-bold px-6 py-3.5 rounded-2xl backdrop-blur hover:bg-white/15 transition">
                Contact Us <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
          <div class="mt-6 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-[11px] text-slate-400">
            <span class="inline-flex items-center justify-center gap-1.5"><i data-lucide="mail" class="w-3.5 h-3.5 text-cyan-300"></i> ${B(rt)}</span>
            <span class="inline-flex items-center justify-center gap-1.5"><i data-lucide="message-circle" class="w-3.5 h-3.5 text-cyan-300"></i> 24/7 live chat</span>
            <span class="inline-flex items-center justify-center gap-1.5"><i data-lucide="life-buoy" class="w-3.5 h-3.5 text-cyan-300"></i> <a href="/help.html" class="hover:text-white transition">Help Center</a></span>
          </div>
        </div>

        <!-- Professional footer links -->
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-9">
          <div>
            <h4 class="text-xs font-black text-white uppercase tracking-widest mb-3.5">Company</h4>
            <ul class="space-y-2.5">
              ${q("/about.html","About Us")}
              ${q("/team.html","Our Team")}
              ${q("/contact.html","Contact Us")}
              ${q("/help.html","Help Center")}
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-black text-white uppercase tracking-widest mb-3.5">Legal</h4>
            <ul class="space-y-2.5">
              ${q("/privacy.html","Privacy Policy")}
              ${q("/terms.html","Terms & Conditions")}
              ${q("/refund-policy.html","Refund Policy")}
              ${q("/shipping-policy.html","Shipping Policy")}
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-black text-white uppercase tracking-widest mb-3.5">Account</h4>
            <ul class="space-y-2.5">
              ${q("/account.html","My Account")}
              ${q("/auth.html","Sign In")}
              ${q("/auth.html","Register / Create Account")}
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-black text-white uppercase tracking-widest mb-3.5">Support</h4>
            <ul class="space-y-2.5">
              ${q("mailto:"+rt,"Email Support")}
              ${q("/help.html","FAQ")}
              ${q("/contact.html","Contact Us")}
            </ul>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-[11px] text-slate-400 text-center sm:text-left">
            ${B(t.bottom_footer_closing)}
          </p>
          <div class="flex items-center gap-2 text-[11px] font-bold text-slate-400">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[.06] border border-white/10"><i data-lucide="lock" class="w-3.5 h-3.5 text-emerald-400"></i> SSL Secure</span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[.06] border border-white/10"><i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i> Secure Checkout</span>
          </div>
        </div>
        <p class="text-center text-[11px] text-slate-500 mt-4">${B(i)}</p>
      </div>
    </section>`}function Gs(e){e.addEventListener("click",t=>{const a=t.target.closest("[data-acc]");if(!a)return;const r=a.dataset.acc,s=e.querySelector(`[data-acc-body="${r}"]`),o=e.querySelector(`[data-acc-icon="${r}"]`);if(!s)return;s.dataset.open==="1"?(s.style.maxHeight="0px",s.style.opacity="0",s.dataset.open="0",o.classList.remove("rotate-180"),a.setAttribute("aria-expanded","false")):(s.style.maxHeight=s.scrollHeight+"px",s.style.opacity="1",s.dataset.open="1",o.classList.add("rotate-180"),a.setAttribute("aria-expanded","true"))})}function Yt(e){const t=document.querySelectorAll("[data-bg-slot]");t.length&&t.forEach(a=>{const r=a.dataset.bgSlot;r==="trust_promo"?a.innerHTML=$e(e.trust_promo_bg_image,e.trust_promo_bg_video):r==="reviews"&&(a.innerHTML=$e(e.reviews_bg_image,e.reviews_bg_video))})}function zs(e){const t=e.querySelector("#fb-stars");t&&t.addEventListener("click",s=>{const o=s.target.closest(".fb-star");if(!o)return;const i=parseInt(o.dataset.star,10),n=e.querySelector("#fb-rating");n&&(n.value=String(i)),t.querySelectorAll(".fb-star").forEach((l,c)=>{const u=l.querySelector("i, svg");u&&(c<i?(u.classList.add("fill-amber-400","text-amber-400"),u.classList.remove("text-slate-500")):(u.classList.remove("fill-amber-400","text-amber-400"),u.classList.add("text-slate-500")))})});const a=e.querySelector("#fb-form");a&&a.addEventListener("submit",s=>{s.preventDefault(),Ys(a)});const r=e.querySelector("[data-feedback-backtop]");r&&r.addEventListener("click",()=>{const s=e.querySelector('[data-acc="trust-reviews-more"]');s&&s.click();const o=document.getElementById("customer-feedback");o&&o.scrollIntoView({behavior:"smooth",block:"start"})})}function st(e,t,a){const r=e.closest("#customer-feedback")?.querySelector("#fb-msg");r&&(r.textContent=t,r.classList.remove("hidden","text-emerald-300","text-amber-300"),a&&r.classList.add(a))}async function Ys(e){const a=(e.querySelector("#fb-text")?.value||"").trim();if(!a){st(e,"Please write your feedback first.","text-amber-300");return}const r=e.querySelector("[type=submit]"),s=r.innerHTML;if(r.disabled=!0,r.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Sending…',window.lucide)try{lucide.createIcons()}catch{}try{const o=await Be();let i=null;try{i=(await o.auth.getUser()).data?.user?.id||null}catch{}const{error:n}=await o.from("site_feedback").insert({user_id:i,name:e.querySelector("#fb-name")?.value.trim()||"Anonymous shopper",email:e.querySelector("#fb-email")?.value.trim()||"",rating:parseInt(e.querySelector("#fb-rating")?.value||"5",10),feedback:a,is_approved:!1});if(n)throw new Error(n.message);st(e,"✓ Thank you! Your feedback has been sent.","text-emerald-300"),e.reset();const l=e.closest("#customer-feedback")?.querySelector("#fb-stars");l&&l.querySelectorAll(".fb-star").forEach(c=>{const u=c.querySelector("i, svg");u&&(u.classList.remove("fill-amber-400","text-amber-400"),u.classList.add("text-slate-500"))})}catch{st(e,"Could not send your feedback right now. Please try again later.","text-amber-300")}if(r.disabled=!1,r.innerHTML=s,window.lucide)try{lucide.createIcons()}catch{}}async function Ks(e){const t=e?.querySelector("#fb-more-list");if(t)try{const a=await Be(),{data:r,error:s}=await a.from("site_feedback").select("name,rating,feedback,created_at").eq("is_approved",!0).order("created_at",{ascending:!1}).limit(30);if(s||!r||!r.length)return;const o=r.map(i=>ft({name:i.name||"Verified shopper",text:i.feedback||"",rating:i.rating||5,verified:!0,country:"Verified customer",date:i.created_at?new Date(i.created_at).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):""})).join("");t.innerHTML=o+t.innerHTML}catch{}}function Zs(){if(document.getElementById("trust-info-style"))return;const e=document.createElement("style");e.id="trust-info-style",e.textContent=`
    .trust-acc-body{overflow:hidden;max-height:0;opacity:0;transition:max-height .38s cubic-bezier(.2,.8,.2,1),opacity .28s ease}
    .trust-acc-body[data-open="1"]{opacity:1}`,document.head.appendChild(e)}async function Kt(){if(document.body&&document.body.dataset.homepage==="true")return;const e=document.getElementById("trust-info-area");if(!e)return;Zs();let t={...qe};try{t=await pt()}catch{}if(e.innerHTML=[Ps(),Ns(),Ws(),Us(),zt(t)].join(""),window.lucide)try{lucide.createIcons()}catch{}Gs(e),zs(e),Ks(e);let a={...la};try{a=await de()}catch{}Yt(a),window.addEventListener("promo-backgrounds-updated",()=>{de().then(Yt).catch(()=>{})}),window.addEventListener("site-content-updated",()=>{pt().then(r=>{const s=e.querySelector("#site-closing-section");if(s&&(s.outerHTML=zt(r)),window.lucide)try{lucide.createIcons()}catch{}}).catch(()=>{})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Kt):Kt();const Js="/fallback.svg";function R(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Wa(e){return Array.isArray(e.images)?e.images.filter(Boolean):typeof e.images=="string"?[e.images]:[]}function bt(e){return Wa(e)[0]||Js}function Xs(e){const t=parseFloat(e.real_price),a=parseFloat(e.price);return!(t>0)||!(a>0)||t<=a?null:{real:t,price:a,pct:Math.round((1-a/t)*100)}}function gt(e){const t=Xs(e),a=U(e),r=t?U({price:t.real,currency:e.currency,price_period:e.price_period}):"",s=t?`<span class="text-gray-400 line-through">${r}</span> `:"",o=t?`<span class="inline-block bg-red-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">-${t.pct}%</span>`:"";return`${s}<span class="font-black">${a}</span> ${o}`}let Q=[],ot=!1;function Qs(e){const t=new Set,a=[];for(const r of e){if(!r)continue;const s=r.property_id||r.id;!s||t.has(s)||(t.add(s),a.push(r))}return a}async function eo(){if(ot&&Q.length)return Q;try{let e=[];try{await ce(),e=K()||[]}catch{}let t=Qs([...e,...ca()||[]]);t=t.map(a=>{try{return vt({...a})}catch{return a}});try{const{isCatalogListingHidden:a}=await pe(async()=>{const{isCatalogListingHidden:r}=await import("./promo-backgrounds-Cv2azssI.js").then(s=>s.z);return{isCatalogListingHidden:r}},__vite__mapDeps([0,1,2]));t=t.filter(r=>{const s=r.property_id||r.id;if(!s)return!1;try{return!a(s)}catch{return!0}})}catch{}return Q=t.filter(a=>Wa(a).length>0&&(a.title||a.name)),ot=!0,Q}catch{return ot=!0,Q}}function to(){return Q}const Zt="kco_promo_settings_v1",Ie={app_banner_enabled:!0,app_play_store_url:"",app_banner_headline:"Discover More with the Weverse Online Shop App",live_promo_enabled:!0,live_promo_interval_seconds:60,live_promo_first_delay_seconds:12,live_promo_product_ids:[],live_promo_use_owned_only:!1};async function ao(){try{const t=JSON.parse(localStorage.getItem(Zt)||"{}");if(t.ts&&Date.now()-t.ts<60*1e3&&t.data)return{...Ie,...t.data}}catch{}const e={...Ie};try{const t=await Be(),{data:a,error:r}=await t.from("site_settings").select("app_banner_enabled,app_play_store_url,app_banner_headline,live_promo_enabled,live_promo_interval_seconds,live_promo_first_delay_seconds,live_promo_product_ids,live_promo_use_owned_only").limit(1).maybeSingle();if(!r&&a){typeof a.app_banner_enabled=="boolean"&&(e.app_banner_enabled=a.app_banner_enabled),typeof a.app_play_store_url=="string"&&(e.app_play_store_url=a.app_play_store_url.trim()),typeof a.app_banner_headline=="string"&&a.app_banner_headline.trim()&&(e.app_banner_headline=a.app_banner_headline.trim()),typeof a.live_promo_enabled=="boolean"&&(e.live_promo_enabled=a.live_promo_enabled);const s=parseInt(a.live_promo_interval_seconds,10);s>0&&(e.live_promo_interval_seconds=s);const o=parseInt(a.live_promo_first_delay_seconds,10);o>=0&&(e.live_promo_first_delay_seconds=o),Array.isArray(a.live_promo_product_ids)&&(e.live_promo_product_ids=a.live_promo_product_ids.filter(Boolean)),typeof a.live_promo_use_owned_only=="boolean"&&(e.live_promo_use_owned_only=a.live_promo_use_owned_only)}}catch{}try{localStorage.setItem(Zt,JSON.stringify({ts:Date.now(),data:e}))}catch{}return e}function ro(e,t,a=12){const r=t&&Array.isArray(t.live_promo_product_ids)&&t.live_promo_product_ids.length?new Set(t.live_promo_product_ids):null;let s=r?e.filter(o=>r.has(o.property_id||o.id)):e.slice();return s.length||(s=e.slice()),s.slice(0,a)}const so=()=>document.getElementById("app-promo-banner"),yt="/fallback.svg";function oo(){return`
  <svg viewBox="0 0 560 720" class="w-full h-full block" aria-hidden="true">
    <defs>
      <linearGradient id="wSkin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#f4c69b"/>
        <stop offset="1" stop-color="#dc9f72"/>
      </linearGradient>
      <linearGradient id="wSkinShade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#d99a6c"/>
        <stop offset="1" stop-color="#b57349"/>
      </linearGradient>
      <linearGradient id="wHair" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#4a2a1c"/>
        <stop offset="1" stop-color="#24120b"/>
      </linearGradient>
      <linearGradient id="wHair2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#5e3826"/>
        <stop offset="1" stop-color="#2c1710"/>
      </linearGradient>
      <linearGradient id="wBlouse" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1e3a5f"/>
        <stop offset="1" stop-color="#0f1e33"/>
      </linearGradient>
      <linearGradient id="wBlouseLite" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2c5282"/>
        <stop offset="1" stop-color="#16304f"/>
      </linearGradient>
      <radialGradient id="wGlow" cx="0.5" cy="0.32" r="0.7">
        <stop offset="0" stop-color="#3b82f6" stop-opacity="0.28"/>
        <stop offset="1" stop-color="#3b82f6" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <!-- soft glow behind the woman -->
    <ellipse cx="280" cy="200" rx="330" ry="360" fill="url(#wGlow)"/>

    <!-- hair back layer (big flowing mane) -->
    <path d="M250 78 C178 60 96 118 84 196 C70 290 118 360 176 398
             C210 416 240 430 258 468 L306 468 C320 428 348 412 386 398
             C442 360 478 294 474 204 C470 122 396 64 318 76
             C296 78 268 78 250 78 Z" fill="url(#wHair)"/>

    <!-- neck + collarbone -->
    <path d="M258 190 C254 226 258 250 274 262 L292 262 C308 250 312 226 308 190 Z" fill="url(#wSkinShade)"/>

    <!-- torso / blouse -->
    <path d="M110 320 C90 380 88 470 92 720 L468 720 C472 470 470 380 450 320
             C410 288 356 272 280 272 C204 272 150 288 110 320 Z" fill="url(#wBlouse)"/>
    <path d="M110 320 C130 300 160 290 190 288 L186 340 C150 332 128 322 110 320 Z" fill="url(#wBlouseLite)"/>
    <path d="M450 320 C430 300 400 290 370 288 L374 340 C410 332 432 322 450 320 Z" fill="url(#wBlouseLite)"/>

    <!-- head base -->
    <ellipse cx="282" cy="150" rx="54" ry="60" fill="url(#wSkin)"/>

    <!-- face -->
    <path d="M228 150 C228 104 256 74 282 74 C308 74 336 104 336 150
             C336 196 310 216 282 216 C254 216 228 196 228 150 Z" fill="url(#wSkin)"/>

    <!-- hair framing the face -->
    <path d="M228 150 C220 96 240 60 282 54 C326 50 352 84 348 150
             C346 196 330 224 314 234 C322 196 326 150 314 108
             C300 62 244 64 232 116 C226 128 228 140 228 150 Z" fill="url(#wHair2)"/>
    <path d="M226 140 C218 96 234 62 278 56 C304 52 326 66 336 92
             C322 66 296 56 278 58 C250 62 232 90 226 140 Z" fill="#6b4028"/>

    <!-- eyes -->
    <path d="M252 146 C258 138 270 138 276 146 C270 152 258 152 252 146 Z" fill="#24120b"/>
    <path d="M290 146 C296 138 308 138 314 146 C308 152 296 152 290 146 Z" fill="#24120b"/>
    <circle cx="264" cy="145" r="2.2" fill="#ffffff" opacity="0.9"/>
    <circle cx="302" cy="145" r="2.2" fill="#ffffff" opacity="0.9"/>

    <!-- brows -->
    <path d="M250 134 C258 128 272 128 278 134" stroke="#4a2a1c" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M288 134 C296 128 310 128 316 134" stroke="#4a2a1c" stroke-width="3" fill="none" stroke-linecap="round"/>

    <!-- nose -->
    <path d="M282 150 C282 162 280 168 274 170" stroke="#d99a6c" stroke-width="2.5" fill="none" stroke-linecap="round"/>

    <!-- lips -->
    <path d="M266 184 C274 190 290 190 298 184 C292 194 276 194 266 184 Z" fill="#c96f5c"/>
    <path d="M266 184 C274 188 290 188 298 184" stroke="#b55a48" stroke-width="1.5" fill="none"/>

    <!-- blush -->
    <ellipse cx="244" cy="176" rx="10" ry="6" fill="#e8a881" opacity="0.55"/>
    <ellipse cx="320" cy="176" rx="10" ry="6" fill="#e8a881" opacity="0.55"/>

    <!-- ears + earrings -->
    <ellipse cx="228" cy="158" rx="7" ry="12" fill="url(#wSkinShade)"/>
    <ellipse cx="336" cy="158" rx="7" ry="12" fill="url(#wSkinShade)"/>
    <circle cx="228" cy="176" r="4" fill="#e6c15a"/>
    <circle cx="336" cy="176" r="4" fill="#e6c15a"/>

    <!-- necklace -->
    <path d="M256 214 C264 232 268 240 282 244 C296 240 300 232 308 214" stroke="#e6c15a" stroke-width="2.5" fill="none"/>
    <circle cx="282" cy="246" r="4" fill="#e6c15a"/>

    <!-- subtle hair shine -->
    <path d="M282 60 C320 58 348 80 352 112 C344 80 316 64 282 62 Z" fill="#7a4c33" opacity="0.9"/>
  </svg>`}function io(){return`
  <svg viewBox="0 0 560 720" class="w-full h-full block" aria-hidden="true">
    <defs>
      <linearGradient id="hSkin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#f4c69b"/>
        <stop offset="1" stop-color="#dc9f72"/>
      </linearGradient>
      <linearGradient id="hSkinShade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#d99a6c"/>
        <stop offset="1" stop-color="#b57349"/>
      </linearGradient>
    </defs>

    <!-- LEFT hand: fingers wrapping the left edge + thumb over the screen -->
    <g>
      <!-- thumb over the screen -->
      <path d="M182 448 C168 452 158 468 160 488 C162 508 176 520 190 516
               C206 510 214 492 208 476 C204 462 194 448 182 448 Z" fill="url(#hSkin)"/>
      <!-- index finger -->
      <path d="M158 492 C144 490 134 502 136 518 C138 534 152 544 166 540
               C180 536 188 520 184 506 C180 496 170 494 158 492 Z" fill="url(#hSkin)"/>
      <!-- middle finger -->
      <path d="M150 518 C136 520 128 534 132 550 C136 566 152 574 166 568
               C180 562 186 546 180 532 C176 520 162 516 150 518 Z" fill="url(#hSkin)"/>
      <!-- ring finger -->
      <path d="M146 546 C132 550 126 564 132 580 C138 596 154 602 168 594
               C182 586 186 570 180 556 C176 546 158 542 146 546 Z" fill="url(#hSkin)"/>
      <!-- pinky -->
      <path d="M148 574 C138 580 134 594 140 608 C146 622 162 626 174 618
               C186 610 188 594 182 582 C178 572 158 568 148 574 Z" fill="url(#hSkinShade)"/>
      <!-- palm shadow -->
      <path d="M188 470 C196 492 200 520 198 548 C196 566 190 582 182 590
               C196 588 204 572 206 552 C208 516 200 486 188 470 Z" fill="url(#hSkinShade)"/>
    </g>

    <!-- RIGHT hand: fingers wrapping the right edge + thumb over the screen -->
    <g>
      <!-- thumb over the screen -->
      <path d="M378 448 C392 452 402 468 400 488 C398 508 384 520 370 516
               C354 510 346 492 352 476 C356 462 366 448 378 448 Z" fill="url(#hSkin)"/>
      <!-- index finger -->
      <path d="M402 492 C416 490 426 502 424 518 C422 534 408 544 394 540
               C380 536 372 520 376 506 C380 496 390 494 402 492 Z" fill="url(#hSkin)"/>
      <!-- middle finger -->
      <path d="M410 518 C424 520 432 534 428 550 C424 566 408 574 394 568
               C380 562 374 546 380 532 C384 520 398 516 410 518 Z" fill="url(#hSkin)"/>
      <!-- ring finger -->
      <path d="M414 546 C428 550 434 564 428 580 C422 596 406 602 392 594
               C378 586 374 570 380 556 C384 546 402 542 414 546 Z" fill="url(#hSkin)"/>
      <!-- pinky -->
      <path d="M412 574 C422 580 426 594 420 608 C414 622 398 626 386 618
               C374 610 372 594 378 582 C382 572 402 568 412 574 Z" fill="url(#hSkinShade)"/>
      <!-- palm shadow -->
      <path d="M372 470 C364 492 360 520 362 548 C364 566 370 582 378 590
               C364 588 356 572 354 552 C352 516 360 486 372 470 Z" fill="url(#hSkinShade)"/>
    </g>
  </svg>`}function no(e){const t=e[0],a=e[1],r=(s,o)=>{const i=R(bt(s)),n=R((s.title||s.name||"").slice(0,34));return`
      <a href="/details.html?id=${encodeURIComponent(s.property_id||s.id)}"
         class="block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition active:scale-[.98]">
        <div class="aspect-square bg-gray-100 overflow-hidden">
          <img src="${i}" alt="${n}" loading="lazy" decoding="async"
               class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${yt}'">
        </div>
        <div class="p-2">
          <p class="text-[10px] text-gray-700 font-bold leading-tight line-clamp-2 min-h-[26px]">${n}</p>
          <div class="flex items-center justify-between mt-1">
            <span class="text-[11px] text-blue-600 font-black">${gt(s)}</span>
            <span class="bg-blue-500 text-white text-[9px] font-black px-2 py-1 rounded-lg">Buy</span>
          </div>
        </div>
      </a>`};return`
    <div class="absolute inset-0 flex flex-col bg-[#f1f5f9] overflow-hidden" id="promo-phone-screen">
      <!-- status bar -->
      <div class="flex items-center justify-between px-4 pt-2 text-[9px] font-bold text-gray-700">
        <span>9:41</span>
        <div class="flex items-center gap-1">
          <span class="inline-block w-3.5 h-2 rounded-[2px] border border-gray-500 relative">
            <span class="absolute inset-y-[1px] left-[1px] w-2 bg-emerald-500 rounded-[1px]"></span>
          </span>
          <i data-lucide="wifi" class="w-3 h-3"></i>
        </div>
      </div>
      <!-- app header: W logo + name + cart -->
      <div class="flex items-center justify-between px-3 py-2 bg-white border-b border-gray-200">
        <div class="flex items-center gap-1.5 min-w-0">
          <div class="shrink-0 w-6 h-6 bg-black rounded-lg flex items-center justify-center">
            ${Ha("w-4 h-4")}
          </div>
          <span class="text-[10px] font-black text-gray-900 tracking-tight truncate">Weverse Online Shop</span>
        </div>
        <div class="flex items-center gap-2 text-gray-600">
          <i data-lucide="search" class="w-3.5 h-3.5"></i>
          <div class="relative">
            <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i>
            <span class="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full text-white text-[7px] font-black flex items-center justify-center">3</span>
          </div>
        </div>
      </div>
      <!-- search bar -->
      <div class="px-3 pt-2">
        <div class="flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 text-[9px] text-gray-400">
          <i data-lucide="search" class="w-3 h-3"></i>
          <span>Search products, cars, homes…</span>
        </div>
      </div>
      <!-- category chips -->
      <div class="flex gap-1.5 px-3 pt-2 overflow-hidden">
        ${["All","Cars","Phones","Fashion","Homes","Electronics"].map((s,o)=>`
          <span class="shrink-0 px-2 py-1 rounded-full text-[8px] font-black ${o===0?"bg-blue-500 text-white":"bg-white border border-gray-200 text-gray-600"}">${s}</span>`).join("")}
      </div>
      <!-- live product cards -->
      <div class="flex-1 overflow-hidden px-3 pt-2 pb-1">
        <div class="h-full grid grid-cols-2 gap-2" id="promo-phone-grid">
          ${t?r(t):""}
          ${a?r(a):""}
        </div>
      </div>
      <!-- bottom nav -->
      <div class="flex items-center justify-around bg-white border-t border-gray-200 py-2 text-gray-400">
        <i data-lucide="house" class="w-3.5 h-3.5 text-blue-500"></i>
        <i data-lucide="search" class="w-3.5 h-3.5"></i>
        <i data-lucide="heart" class="w-3.5 h-3.5"></i>
        <i data-lucide="user" class="w-3.5 h-3.5"></i>
      </div>
    </div>`}function lo(e){return`
    <div class="relative w-[220px] sm:w-[240px] aspect-[9/19.2] select-none" style="filter:drop-shadow(0 30px 50px rgba(2,8,30,.55))">
      <!-- Android body -->
      <div class="absolute inset-0 rounded-[2.4rem] bg-[#0b0e14] border-[6px] border-[#1c2230] shadow-2xl">
        <!-- punch-hole camera -->
        <span class="absolute top-[10px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black border border-gray-700"></span>
        <!-- side buttons -->
        <span class="absolute left-[-3px] top-[110px] w-[3px] h-10 bg-[#1c2230] rounded-l"></span>
        <span class="absolute left-[-3px] top-[160px] w-[3px] h-16 bg-[#1c2230] rounded-l"></span>
        <span class="absolute right-[-3px] top-[150px] w-[3px] h-20 bg-[#1c2230] rounded-r"></span>
        <!-- screen -->
        <div class="absolute inset-[5px] rounded-[2rem] overflow-hidden">
          ${no(e)}
          <!-- glass reflection -->
          <div class="absolute inset-0 pointer-events-none" style="background:linear-gradient(135deg,rgba(255,255,255,.14) 0%,rgba(255,255,255,0) 34%,rgba(255,255,255,0) 78%,rgba(255,255,255,.06) 100%)"></div>
        </div>
      </div>
    </div>`}function co(e,t,a){const r=ro(t,e,12),s=(e.app_play_store_url||"").trim(),o={...qe,...a||{}},i=(o.app_banner_title||e.app_banner_headline||Ie.app_banner_headline).trim(),n=o.app_banner_description,l=o.app_banner_button_text,c=o.app_banner_secondary_text,u=s?`<a href="${R(s)}" target="_blank" rel="noopener" class="inline-flex items-center gap-2.5 bg-white text-blue-900 font-black text-sm px-6 py-3.5 rounded-2xl shadow-xl shadow-blue-900/30 hover:scale-[1.03] active:scale-[.98] transition">
         <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none"><path d="M3 5.5v13c0 .8.5 1.5 1.2 1.8L13.5 12 4.2 3.7C3.5 4 3 4.7 3 5.5Z" fill="#34a853"/><path d="M21.4 11.2 17 8.5l-3.5 3.5L17 15.5l4.4-2.7c.8-.5.8-1.1 0-1.6Z" fill="#4285f4"/><path d="m13.5 12 1.2 1.2-5.4 5.2c.4.2.9.2 1.3 0l10.8-6.5c.4-.2.6-.6.6-.9h.1V5.5c0-.8-.5-1.5-1.2-1.8L13.5 12Z" fill="#fbbc04"/><path d="m6.1 3.6 7.4 8.4 2.5-2.5-8.7-5.3c-.4-.2-.9-.2-1.2-.6Z" fill="#ea4335"/></svg>
         <span>${R(l)}</span>
       </a>`:`<span class="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-sm font-bold px-6 py-3.5 rounded-2xl backdrop-blur cursor-default">
         <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none"><path d="M5 12l5 5 9-9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
         <span>${R(l)}</span>
       </span>`;return`
    <section class="relative overflow-hidden bg-[#060c1c] text-white">
      <!-- backdrop -->
      <div class="absolute inset-0" style="background:
        radial-gradient(1000px 500px at 85% 15%, rgba(37,99,235,.35), transparent 60%),
        radial-gradient(800px 420px at 10% 90%, rgba(6,182,212,.22), transparent 60%),
        linear-gradient(180deg,#0a1128 0%,#060c1c 60%,#04101f 100%)"></div>
      <div class="absolute inset-0 opacity-[.06]" style="background-image:radial-gradient(#7dd3fc 1px, transparent 1px);background-size:22px 22px"></div>
      <!-- admin-chosen background (image or video) — added at init -->
      <div class="absolute inset-0" data-bg-slot="app_banner"></div>

      <div class="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16">
        <div class="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-6 items-center">

          <!-- text side -->
          <div class="max-w-xl lg:pr-6">
            <span class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300 border border-cyan-400/30 bg-cyan-400/10 rounded-full px-3.5 py-1.5 mb-5">
              <i data-lucide="smartphone" class="w-3.5 h-3.5"></i> Weverse Mobile App
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-[2.9rem] font-black leading-[1.08] tracking-tight text-white">
              ${R(i.split(" — ")[0]||i)}
            </h2>
            <p class="text-[15px] sm:text-base text-slate-300 mt-4 leading-relaxed max-w-lg">
              ${R(n)}
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-7 max-w-lg">
              ${[{icon:"shopping-bag",label:"Shop Products"},{icon:"sparkles",label:"New Arrivals"},{icon:"package-search",label:"Manage Orders"},{icon:"heart",label:"Save Favorites"}].map(d=>`
                <div class="bg-white/[.06] border border-white/10 rounded-2xl px-3 py-3.5 text-center backdrop-blur">
                  <i data-lucide="${d.icon}" class="w-4.5 h-4.5 w-5 h-5 text-cyan-300 mx-auto"></i>
                  <p class="text-[10px] font-bold text-slate-200 mt-2">${d.label}</p>
                </div>`).join("")}
            </div>
            <div class="flex flex-wrap items-center gap-3.5 mt-8">
              ${u}
              <a href="/#showroom-directory" class="inline-flex items-center gap-2 text-sm font-bold text-cyan-200 hover:text-white transition">
                ${R(c)} <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
            ${s?"":'<p class="text-[11px] text-slate-500 mt-3">The Android app is in final review. We’ll publish the download link here the moment it is live.</p>'}
          </div>

          <!-- visual side: woman holding the phone (phone floats in front, fully visible) -->
          <div class="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[440px]">
            <div class="absolute inset-0 woman-back" aria-hidden="true">${oo()}</div>
            <div class="absolute inset-0 hands-front pointer-events-none" aria-hidden="true">${io()}</div>
            <div class="relative flex justify-center pt-[30%] sm:pt-[27%] lg:pt-[26%]">
              <div class="scale-100 sm:scale-105 lg:scale-110">${lo(r)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>`}let we=null;function uo(e){we&&(clearInterval(we),we=null);const t=document.getElementById("promo-phone-screen"),a=document.getElementById("promo-phone-grid");if(!t||!a||!e.length)return;const r=e.slice();let s=0;const o=()=>{if(!a||!r.length)return;const i=r[s%r.length],n=r[(s+1)%r.length],l=R(bt(i)),c=R(bt(n)),u=R((i.title||i.name||"").slice(0,34)),d=R((n.title||n.name||"").slice(0,34));if(a.innerHTML=`
      <a href="/details.html?id=${encodeURIComponent(i.property_id||i.id)}" class="block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition active:scale-[.98]">
        <div class="aspect-square bg-gray-100 overflow-hidden"><img src="${l}" alt="${u}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${yt}'"></div>
        <div class="p-2"><p class="text-[10px] text-gray-700 font-bold leading-tight line-clamp-2 min-h-[26px]">${u}</p>
        <div class="flex items-center justify-between mt-1"><span class="text-[11px] text-blue-600 font-black">${gt(i)}</span><span class="bg-blue-500 text-white text-[9px] font-black px-2 py-1 rounded-lg">Buy</span></div></div>
      </a>
      <a href="/details.html?id=${encodeURIComponent(n.property_id||n.id)}" class="block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition active:scale-[.98]">
        <div class="aspect-square bg-gray-100 overflow-hidden"><img src="${c}" alt="${d}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${yt}'"></div>
        <div class="p-2"><p class="text-[10px] text-gray-700 font-bold leading-tight line-clamp-2 min-h-[26px]">${d}</p>
        <div class="flex items-center justify-between mt-1"><span class="text-[11px] text-blue-600 font-black">${gt(n)}</span><span class="bg-blue-500 text-white text-[9px] font-black px-2 py-1 rounded-lg">Buy</span></div></div>
      </a>`,window.lucide)try{lucide.createIcons()}catch{}};o(),we=setInterval(()=>{s+=2,o()},4500)}async function Jt(){if(document.body&&document.body.dataset.homepage==="true")return;const e=so();if(!e)return;let t={...Ie};try{t=await ao()}catch{}if(t.app_banner_enabled===!1)return;let a=[];try{await eo(),a=to()||[]}catch{}const r=a.length?a:[{property_id:"browse",title:"Browse the full Weverse Online Shop",price:0,currency:"USD",images:["/fallback.svg"]}];let s={...la};try{s=await de()}catch{}const o=n=>{const l=e.querySelector('[data-bg-slot="app_banner"]');l&&(l.innerHTML=$e(n.app_banner_bg_image,n.app_banner_bg_video))};async function i(){let n={...qe};try{n=await pt()}catch{}if(e.innerHTML=co(t,r,n),window.lucide)try{lucide.createIcons()}catch{}uo(r),window.dispatchEvent(new CustomEvent("app-promo-banner-ready")),o(s)}await i(),o(s),window.addEventListener("site-content-updated",()=>{i().catch(()=>{})}),window.addEventListener("promo-backgrounds-updated",()=>{de().then(n=>{s=n,o(n)}).catch(()=>{})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Jt):Jt();const H="/fallback.svg";function Pe(e){return Array.isArray(e)&&e.length>0?e:[H]}function V(e){return!e||typeof e!="string"||e.startsWith("blob:")||e.startsWith("data:")?!1:/\.(mp4|webm|mov|avi|mkv)(\?|#|$)/i.test(e)}function po(e,t="w-4 h-4"){const a=Math.round(Number(e)||0);return[1,2,3,4,5].map(r=>`<i data-lucide="star" class="${t} ${r<=a?"fill-amber-400 text-amber-400 drop-shadow-[0_1px_4px_rgba(0,0,0,.25)]":"text-gray-300"}"></i>`).join("")}function Ne(e,t,a="blue"){const r={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"};return`
    <div class="flex items-center gap-2.5 mb-4">
      <div class="shrink-0 w-10 h-10 rounded-xl ${r[a]||r.blue} flex items-center justify-center"><i data-lucide="${e}" class="w-5 h-5"></i></div>
      <h3 class="text-lg font-black text-gray-900 tracking-tight">${t}</h3>
    </div>`}function mo(e){return`
    <div class="bg-gray-50 border border-gray-100 rounded-xl p-3.5">
      <div class="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5"><i data-lucide="${e.icon}" class="w-3.5 h-3.5"></i>${e.label}</div>
      <div class="text-gray-900 font-bold text-[15px] leading-snug">${m(e.value)}</div>
    </div>`}function ke(e,t,a,r="blue"){return!a||!a.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${Ne(t,e,r)}
      ${Fa(a)}
    </div>`}function Fa(e){return!e||!e.length?"":`<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">${e.map(mo).join("")}</div>`}function Oe(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${Ne("list-checks","Features & Amenities","emerald")}
      ${Va(e)}
    </div>`}function Va(e){return!e||!e.length?"":`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
            <span class="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
            <span class="text-[15px] text-gray-800 font-medium">${m(t)}</span>
          </div>`).join("")}
      </div>`}function ho(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${Ne("star","Highlights","amber")}
      ${Da(e)}
    </div>`}function Da(e){return!e||!e.length?"":`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-start gap-2.5 bg-amber-50/60 border border-amber-100 rounded-xl px-3.5 py-2.5">
            <i data-lucide="badge-check" class="w-4 h-4 text-amber-500 mt-0.5 shrink-0"></i>
            <span class="text-[15px] text-gray-800 font-medium">${m(t)}</span>
          </div>`).join("")}
      </div>`}function it(e,t="emerald"){if(!e||!e.length)return"";const a={emerald:"bg-emerald-100 text-emerald-600",amber:"bg-amber-100 text-amber-600",blue:"bg-blue-100 text-blue-600",violet:"bg-violet-100 text-violet-600",rose:"bg-rose-100 text-rose-600"}[t]||"bg-emerald-100 text-emerald-600";return`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
    ${e.map(r=>`
      <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
        <span class="shrink-0 w-6 h-6 rounded-full ${a} flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
        <span class="text-[15px] text-gray-800 font-medium">${m(String(r))}</span>
      </div>`).join("")}
  </div>`}function fo(e){const t=e.floor_plan&&typeof e.floor_plan=="object"?e.floor_plan:{},a=Array.isArray(t.rooms)?t.rooms:[];if(!(t.image||t.levels||t.total_area||a.length))return"";const s=a.length?`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-3">
      ${a.map(i=>{const n=typeof i=="string"?i:i.name||"Room",l=typeof i=="string"?"":i.dimensions||"";return`<div class="bg-gray-50 border border-gray-100 rounded-xl p-3">
          <p class="text-[15px] font-bold text-gray-900">${m(String(n))}</p>
          ${l?`<p class="text-xs text-gray-500 mt-0.5">${m(String(l))}</p>`:""}
        </div>`}).join("")}
    </div>`:"",o=[t.levels?`Levels: ${t.levels}`:"",t.total_area?`Total area: ${t.total_area}`:""].filter(Boolean);return`
    <div class="space-y-3">
      ${t.image?`<img src="${m(String(t.image))}" alt="Floor plan" class="w-full rounded-xl border border-gray-200 bg-gray-50" loading="lazy" onerror="this.style.display='none'">`:""}
      ${o.length?`<div class="flex flex-wrap gap-2">${o.map(i=>`<span class="inline-flex items-center gap-1 text-xs font-bold text-gray-700 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-full">${m(String(i))}</span>`).join("")}</div>`:""}
      ${s}
    </div>`}function bo(e){const t=Array.isArray(e.legal_info)?e.legal_info:[],a=e.risk_notes;if(!t.length&&!a)return"";const r={"Seller provided":"bg-amber-50 text-amber-700 border-amber-200",Documented:"bg-blue-50 text-blue-700 border-blue-200","Not verified":"bg-gray-50 text-gray-600 border-gray-200"};return`
    <div class="space-y-2.5">
      ${t.map(o=>{const i=typeof o=="string"?o:o.label||"",n=typeof o=="string"?"":o.value||"",l=typeof o=="string"?"Not verified":o.source||"Not verified",c=r[l]||r["Not verified"],u=`${i}${n?": "+n:""}`;return`<div class="flex items-center justify-between gap-3 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
      <span class="text-[15px] text-gray-800 font-medium">${m(u)}</span>
      <span class="shrink-0 text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full border ${c}">${m(l)}</span>
    </div>`}).join("")||""}
      ${a?`<div class="bg-amber-50/60 border border-amber-200 rounded-xl p-3.5"><p class="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Condition / Risk Notes</p><p class="text-sm text-gray-700 leading-relaxed">${m(String(a))}</p></div>`:""}
      <p class="text-xs text-gray-400 leading-relaxed"><strong class="text-gray-500">Note:</strong> Legal and ownership details are provided by the seller for information only and have not been independently verified by the marketplace. Always confirm with the seller or a qualified professional before purchase.</p>
    </div>`}function go(e){const t=e.nearby_area&&typeof e.nearby_area=="object"?e.nearby_area:{},a=[{icon:"school",label:"Schools",items:t.schools},{icon:"cross",label:"Hospitals & Clinics",items:t.hospitals},{icon:"shopping-cart",label:"Shopping & Markets",items:t.shopping},{icon:"bus",label:"Transportation",items:t.transportation}].filter(s=>Array.isArray(s.items)&&s.items.length),r=Array.isArray(t.distances)?t.distances:[];return!a.length&&!r.length?"":`
    <div class="space-y-3">
      ${a.map(s=>`
        <div>
          <p class="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5"><i data-lucide="${s.icon}" class="w-3.5 h-3.5"></i> ${s.label}</p>
          <div class="flex flex-wrap gap-2">
            ${s.items.map(o=>`<span class="text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-full">${m(String(o))}</span>`).join("")}
          </div>
        </div>`).join("")}
      ${r.length?`<div><p class="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5"><i data-lucide="navigation" class="w-3.5 h-3.5"></i> Distances</p><div class="flex flex-wrap gap-2">${r.map(s=>`<span class="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full">${m(String(s))}</span>`).join("")}</div></div>`:""}
    </div>`}function yo(e){const t=e.verification_status||"Not verified",a={Verified:"bg-emerald-50 text-emerald-700 border-emerald-200","Pending verification":"bg-amber-50 text-amber-700 border-amber-200","Not verified":"bg-gray-50 text-gray-600 border-gray-200"}[t]||"bg-gray-50 text-gray-600 border-gray-200",r=Array.isArray(e.documents)?e.documents:[],s=[{icon:"shield-check",label:"Verification",value:t,badge:a},e.verification_date?{icon:"calendar-check",label:"Verification Date",value:e.verification_date}:null,e.inspection_info?{icon:"clipboard-check",label:"Inspection",value:e.inspection_info}:null].filter(Boolean);return`
    <div class="space-y-3">
      ${s.length?`<div class="space-y-2.5">${s.map(o=>`
        <div class="flex items-center justify-between gap-3 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
          <span class="flex items-center gap-2 text-sm text-gray-800 font-medium"><i data-lucide="${o.icon}" class="w-4 h-4 text-blue-500"></i> ${o.label}</span>
          ${o.badge?`<span class="shrink-0 text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full border ${o.badge}">${m(String(o.value))}</span>`:`<span class="text-sm text-gray-700 font-semibold">${m(String(o.value))}</span>`}
        </div>`).join("")}</div>`:""}
      ${r.length?`<div><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Documents</p><div class="space-y-1.5">${r.map(o=>`<a href="${m(String(o))}" target="_blank" rel="noopener" class="flex items-center gap-2 text-xs font-bold text-blue-600 hover:underline"><i data-lucide="file-text" class="w-3.5 h-3.5"></i> ${m(String(o))}</a>`).join("")}</div></div>`:""}
      <div class="flex flex-wrap gap-2">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full"><i data-lucide="lock" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Payment Protection</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-violet-700 bg-violet-50 border border-violet-200 px-2.5 py-1.5 rounded-full"><i data-lucide="file-check" class="w-3.5 h-3.5"></i> Purchase Agreement</span>
      </div>
      <p class="text-xs text-gray-400 leading-relaxed">Full purchase and booking terms are confirmed with the seller before any payment is completed.</p>
    </div>`}function xo(e){if(e.listing_type!=="property")return"";const t=[],a=it(e.interior_features,"emerald"),r=it(e.exterior_features,"blue"),s=it(e.home_systems,"violet"),o=[a?`<div class="mb-4"><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Interior Features</p>${a}</div>`:"",r?`<div class="mb-4"><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Exterior Features</p>${r}</div>`:"",s?`<div><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Home Systems</p>${s}</div>`:""].filter(Boolean).join("");o&&t.push(N("acc-features","home","Features & Home Systems",o,!1,"emerald"));const i=fo(e);i&&t.push(N("acc-floorplan","layout-dashboard","Floor Plan",i,!1,"violet"));const n=bo(e);n&&t.push(N("acc-legal","scale","Legal & Financial",n,!1,"amber"));const l=go(e);l&&t.push(N("acc-nearby","map-pin","Nearby Area",l,!1,"rose"));const c=yo(e);return c&&t.push(N("acc-trust","shield-check","Verification & Trust",c,!1,"blue")),t.join("")}function N(e,t,a,r,s=!1,o="blue"){const i={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"},n=i[o]||i.blue;return`
    <div class="bg-white border border-gray-200 rounded-2xl mb-3 overflow-hidden shadow-sm">
      <button type="button" data-acc="${e}" class="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left hover:bg-gray-50 transition active:bg-gray-100">
        <span class="flex items-center gap-3 min-w-0">
          <span class="shrink-0 w-10 h-10 rounded-xl ${n} flex items-center justify-center"><i data-lucide="${t}" class="w-5 h-5"></i></span>
          <span class="text-[15px] sm:text-base font-black text-gray-900 tracking-tight">${a}</span>
        </span>
        <span data-acc-icon="${e}" class="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${s?"rotate-180":""}">
          <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500"></i>
        </span>
      </button>
      <div data-acc-body="${e}" class="px-4 sm:px-5 pb-5 ${s?"":"hidden"}">
        ${r}
      </div>
    </div>`}window.toggleAccordion=e=>{const t=document.querySelector(`[data-acc-body="${e}"]`),a=document.querySelector(`[data-acc-icon="${e}"]`);!t||!a||(t.classList.toggle("hidden"),a.classList.toggle("rotate-180"))};function vo(){return`
    <div class="space-y-3 text-[15px] text-gray-700 leading-relaxed">
      <p class="flex items-start gap-2.5"><i data-lucide="truck" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Shipping methods.</strong> Standard delivery is <strong>free worldwide</strong> (3–7 business days). Express (2–4 business days, $25) and Priority (1–2 business days, $50) are available at checkout.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Courier partners.</strong> We ship with trusted international couriers — DHL, FedEx, UPS and EMS. Every shipment gets a tracking number.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="clock" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Processing time.</strong> Orders are processed within 1–2 business days after payment confirmation. Bank-transfer orders are processed once the receipt is verified.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="globe" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">International delivery.</strong> We ship to over 200 countries. Customs duties and import taxes may apply and are the buyer's responsibility.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="search-check" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Tracking.</strong> You'll receive a shipping confirmation email with your tracking number. You can also track orders from your account dashboard.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="badge-help" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span>Questions? <a href="/shipping-policy.html" class="text-blue-600 font-bold hover:underline">Read the full Shipping Policy</a>.</span></p>
    </div>`}function wo(){return`
    <div class="space-y-3 text-[15px] text-gray-700 leading-relaxed">
      <p class="flex items-start gap-2.5"><i data-lucide="rotate-ccw" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">14-day easy returns.</strong> Items may be returned within 14 days of delivery. Refund requests must be submitted within 30 days of the order date.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="calendar-x" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Cancellation before shipment.</strong> Cancel before your order ships and a full refund is issued within 5–7 business days.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package-x" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Damaged or defective.</strong> If your item arrives damaged, contact us within 7 days with photos — we arrange a replacement or full refund, including return shipping.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package-search" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Non-delivery.</strong> If your order doesn't arrive within the estimated window plus 14 days, we investigate with the carrier and refund or resend at no cost.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="wallet" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Refund processing.</strong> Approved refunds are processed within 5–7 business days. Card refunds take 5–10 business days to appear, bank transfers 7–14, mobile money 3–5.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="circle-slash" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Non-refundable.</strong> Final-sale items, digital products, and items used or damaged by the customer are not eligible for refunds.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="badge-help" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span>Questions? <a href="/refund-policy.html" class="text-blue-600 font-bold hover:underline">Read the full Return &amp; Refund Policy</a>.</span></p>
    </div>`}function ko(){const e=[{q:"How do I track my order?",a:"Once your order ships you'll get a confirmation email with your tracking number. You can also track it anytime from your account dashboard under Shipping & Delivery."},{q:"Is shipping really free worldwide?",a:"Yes. Standard shipping to any country is free on every order. Express and Priority upgrades are available at checkout if you need it sooner."},{q:"How long does delivery take?",a:"Standard delivery takes 3–7 business days. Express takes 2–4 business days and Priority 1–2 business days. Processing adds 1–2 business days after payment is confirmed."},{q:"How do returns work?",a:"Items can be returned within 14 days of delivery. Refund requests must be submitted within 30 days of the order date — see the Return &amp; Refund Policy section above."}],t=[{q:"Is my payment secure?",a:"Yes. All payments are processed over SSL-encrypted connections through certified payment gateways. Your payment details are never stored on our servers in plain text."},{q:"Can I cancel my order before it ships?",a:"Absolutely. Cancel before shipment and a full refund is issued within 5–7 business days to your original payment method."},{q:"What if my item arrives damaged?",a:"Contact us within 7 days of delivery with photos and a description. We'll arrange a replacement or a full refund — including return shipping costs."},{q:"How do I contact customer support?",a:"Email us at support@weverseonlineshop.com or use the Contact page. Our team reviews every message within 48 hours."},{q:"Do you ship to my country?",a:"We ship to over 200 countries worldwide. Customs duties and import taxes, where applicable, are the buyer's responsibility."},{q:"How do I request a refund?",a:"Email support@weverseonlineshop.com with your order number, the reason, and any supporting documentation. Approved refunds are processed within 5–7 business days."}],a=r=>`
    <div class="border border-gray-100 rounded-xl overflow-hidden">
      <button type="button" data-acc="faq" class="faq-q w-full flex items-center justify-between gap-3 p-3.5 text-left hover:bg-gray-50 transition">
        <span class="text-[14px] font-bold text-gray-900">${m(r.q)}</span>
        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300"></i>
      </button>
      <div class="faq-a hidden px-3.5 pb-3.5 text-sm text-gray-600 leading-relaxed">${m(r.a)}</div>
    </div>`;return`
    <div class="space-y-2">
      ${e.map(a).join("")}
      <div class="faq-extra hidden space-y-2">${t.map(a).join("")}</div>
      <button type="button" id="faq-show-more" class="mt-2 w-full inline-flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-blue-600 font-bold py-2.5 rounded-xl text-sm transition">
        Show more questions <i data-lucide="chevron-down" class="w-4 h-4"></i>
      </button>
    </div>`}function We(e,t,a,r,s,o=""){const i=e.listing_type==="property",n=`
    <p class="text-[15px] sm:text-base text-gray-700 leading-relaxed">${m(e.description||"")}</p>
    ${s||""}
    ${Da(r)}
    ${Va(a)}`;return`
    ${N("acc-details","file-text",i?"Property Details":"Product Details",n,!0,"blue")}
    ${N("acc-specs","settings-2",i?"Property Specifications":"Specifications",Fa(t)||'<p class="text-sm text-gray-500">No specifications available for this listing.</p>',!0,"violet")}
    ${o||""}
    ${N("acc-shipping","truck","Shipping Information",vo(),!1,"emerald")}
    ${N("acc-refund","rotate-ccw","Return &amp; Refund Policy",wo(),!1,"rose")}
    ${N("acc-faq","circle-help","Frequently Asked Questions",ko(),!1,"amber")}`}function Fe(){const e=document.getElementById("details-content");if(!e)return;e.querySelectorAll("[data-acc]").forEach(a=>{a.dataset.bound||(a.dataset.bound="1",a.addEventListener("click",()=>{const r=a.dataset.acc,s=e.querySelector(`[data-acc-body="${r}"]`),o=e.querySelector(`[data-acc-icon="${r}"]`);!s||!o||(s.classList.toggle("hidden"),o.classList.toggle("rotate-180"),window.lucide&&lucide.createIcons())}))}),e.querySelectorAll(".faq-q").forEach(a=>{a.dataset.bound||(a.dataset.bound="1",a.addEventListener("click",()=>{const r=a.querySelector("i, svg"),s=a.nextElementSibling;s&&(s.classList.toggle("hidden"),r&&r.classList.toggle("rotate-180"))}))});const t=e.querySelector("#faq-show-more");t&&!t.dataset.bound&&(t.dataset.bound="1",t.addEventListener("click",()=>{const a=e.querySelector(".faq-extra");if(!a)return;a.classList.toggle("hidden");const r=t.querySelector("i, svg");r&&r.classList.toggle("rotate-180"),t.innerHTML=a.classList.contains("hidden")?'Show more questions <i data-lucide="chevron-down" class="w-4 h-4"></i>':'Show fewer questions <i data-lucide="chevron-up" class="w-4 h-4"></i>',window.lucide&&lucide.createIcons()}))}function _o(e){if(!e)return"";const t=new Date(e).getTime();if(!t||isNaN(t))return"";const a=Math.max(0,Date.now()-t),r=Math.floor(a/6e4);if(r<1)return"now";if(r<60)return`${r}m`;const s=Math.floor(r/60);if(s<24)return`${s}h`;const o=Math.floor(s/24);if(o<7)return`${o}d`;const i=Math.floor(o/7);if(i<5)return`${i}w`;const n=Math.floor(o/30);if(n<12)return`${n}mo`;const l=Math.floor(o/365);return l===1?"1y":`${l}y`}function So(e){if(typeof e.likes=="number"&&e.likes>0)return e.likes;const t=String(e.text||e.comment||e.created_at||e.name||"");let a=2166136261;for(let r=0;r<t.length;r++)a^=t.charCodeAt(r),a=Math.imul(a,16777619);return 2+(a>>>0)%140}function Xt(e){return e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"k":String(e)}function Qt(e){const t=e.name||e.profiles?.full_name||"Anonymous",a=m(t.trim().charAt(0).toUpperCase()||"A"),r=e.handle?`<span class="text-xs font-semibold text-gray-400">${m(e.handle)}</span>`:"",s=_o(e.date||e.created_at),o=s?`<span class="text-xs text-gray-400">&middot; ${s}</span>`:"",i=e.location&&!e.handle?`<span class="text-xs text-gray-400">&middot; ${m(e.location)}</span>`:"",n=e.title?`<p class="text-sm font-bold text-gray-900 mt-1">${m(e.title)}</p>`:"",l=e.verified?'<span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full"><i data-lucide="badge-check" class="w-3 h-3"></i> Verified Purchase</span>':"",c=e.review_photo?`<div class="mt-2.5"><img src="${m(e.review_photo)}" alt="Customer photo" class="w-28 h-28 object-cover rounded-xl border border-gray-200" loading="lazy" onerror="this.style.display='none'"></div>`:"",u=So(e),d=Xt(u),p=typeof e.replies=="number"&&e.replies>0?e.replies:0;return`
    <div class="flex gap-3 py-4 border-b border-gray-100 last:border-0">
      <div class="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-black uppercase shadow-sm">${a}</div>
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <span class="text-sm font-bold text-gray-900">${m(t)}</span>${r}${o}${i}
          ${l}
        </div>
        <div class="flex gap-0.5 mt-1">${[1,2,3,4,5].map(y=>`<i data-lucide="star" class="w-3.5 h-3.5 ${y<=(e.rating||0)?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}</div>
        ${n}
        <p class="text-[15px] text-gray-700 leading-relaxed mt-1.5">${m(e.text||e.comment||"")}</p>
        ${c}
        <div class="flex items-center gap-5 mt-2.5">
          <button type="button" class="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-rose-500 transition"><i data-lucide="heart" class="w-4 h-4"></i> ${d}</button>
          <button type="button" class="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-blue-500 transition"><i data-lucide="message-circle" class="w-4 h-4"></i> ${p>0?`${Xt(p)} replies`:"Reply"}</button>
        </div>
      </div>
    </div>`}function Ve(e){const t=encodeURIComponent(window.location.pathname+window.location.search);return`
    <div id="reviews-section" class="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm mb-8">
      <div class="absolute inset-0" data-bg-slot="reviews"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-white/95 via-white/92 to-white/95"></div>
      <div class="relative p-4 sm:p-6 lg:p-8">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div class="flex items-center gap-3">
            <div class="shrink-0 w-11 h-11 rounded-2xl bg-amber-400/15 text-amber-500 flex items-center justify-center"><i data-lucide="message-square-star" class="w-5 h-5"></i></div>
            <div>
              <h3 class="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Customer Reviews</h3>
              <p class="text-xs text-gray-500 mt-0.5">All reviews are from verified buyers only.</p>
            </div>
          </div>
          <span class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> 100% Verified Purchase Reviews</span>
        </div>

        <div class="rounded-2xl border border-gray-200 bg-white shadow-sm p-5 sm:p-6 mb-5">
          <div id="reviews-summary" class="mb-4"><div class="text-gray-400 text-sm py-3">Loading ratings…</div></div>
          <div id="reviews-breakdown"></div>
        </div>

        <div class="rounded-2xl border border-gray-200 bg-white shadow-sm p-5 sm:p-6 mb-5">
          <div class="flex items-center justify-between gap-3 mb-2">
            <h4 class="text-sm font-black text-gray-900 uppercase tracking-wide">What Buyers Say</h4>
            <span class="text-xs text-gray-400">Newest first</span>
          </div>
          <div id="reviews-list"><div class="text-gray-400 text-sm py-4">Loading reviews…</div></div>
        </div>

        <div class="rounded-2xl border border-gray-200 bg-white shadow-sm p-5 sm:p-6">
          <div id="review-form-wrapper">
            <h4 class="text-[15px] font-black text-gray-900 mb-3 flex items-center gap-2"><i data-lucide="pen-line" class="w-4 h-4 text-blue-500"></i> Write a Review</h4>

            <!-- GUESTS: locked state with a clear, PERSISTENT register prompt -->
            <div id="review-guest-box" class="hidden space-y-3">
              <button type="button" id="review-guest-btn" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition">
                <i data-lucide="pen-line" class="w-4 h-4"></i> Write a Review
              </button>
              <div id="review-guest-msg" class="hidden rounded-xl border border-amber-200 bg-amber-50 px-4 py-3.5 space-y-2.5">
                <p class="text-sm font-bold text-amber-800 flex items-center gap-2"><i data-lucide="shield-check" class="w-4 h-4 shrink-0"></i> Please register to give a review</p>
                <p class="text-xs text-amber-700 leading-relaxed">Only customers with a ${He} account can post reviews — this keeps our reviews real and verified. It takes less than a minute, and once you're signed in you can rate the product, write your review and even add a photo.</p>
                <div class="flex flex-wrap items-center gap-2.5 pt-0.5">
                  <a href="/auth.html?mode=register&redirect=${t}" class="inline-flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold rounded-lg px-4 py-2 transition"><i data-lucide="user-plus" class="w-3.5 h-3.5"></i> Create a free account</a>
                  <a href="/auth.html?redirect=${t}" class="inline-flex items-center gap-1.5 bg-white border border-gray-300 hover:border-blue-400 text-gray-700 text-xs font-bold rounded-lg px-4 py-2 transition"><i data-lucide="log-in" class="w-3.5 h-3.5"></i> I already have an account</a>
                </div>
              </div>
            </div>

            <!-- SIGNED-IN USERS: the full working review form -->
            <form id="review-form" class="space-y-3 hidden">
              <div class="flex items-center gap-2">
                <label class="text-xs text-gray-700 font-bold uppercase">Rating</label>
                <div id="star-rating" class="flex gap-1">
                  ${[1,2,3,4,5].map(a=>`<button type="button" data-rating="${a}" class="star-btn p-1"><i data-lucide="star" class="w-5 h-5 text-gray-300 hover:text-amber-400 transition"></i></button>`).join("")}
                </div>
              </div>
              <textarea id="review-text" rows="3" placeholder="Share your experience with this product..." class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"></textarea>
              <div class="flex items-center gap-3">
                <label for="review-photo-input" class="inline-flex items-center gap-2 text-xs font-bold text-gray-700 bg-gray-100 border border-gray-200 rounded-xl px-3.5 py-2.5 cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition">
                  <i data-lucide="camera" class="w-4 h-4 text-blue-500"></i> Add a photo
                </label>
                <input id="review-photo-input" type="file" accept="image/*" class="hidden">
                <div id="review-photo-preview" class="flex items-center gap-2"></div>
              </div>
              <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition">Submit Review</button>
              <div id="review-submit-msg" class="text-xs text-emerald-600 font-bold hidden"><i data-lucide="check-circle" class="w-3.5 h-3.5 inline"></i> Thank you! Your review is now live.</div>
            </form>
          </div>
        </div>
      </div>
    </div>`}function $o(e,t,a){const r=Math.max(1,a);return`
    <div class="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 items-center bg-gray-50 border border-gray-100 rounded-2xl p-4">
      ${[5,4,3,2,1].map(s=>{const o=t[s]||0,i=Math.round(o/r*100);return`
        <div class="flex items-center gap-1.5 text-xs text-gray-600 font-semibold"><i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>${s}</div>
        <div class="flex items-center gap-2">
          <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden"><div class="h-full bg-amber-400 rounded-full" style="width:${i}%"></div></div>
          <span class="text-[11px] text-gray-400 w-9 text-right tabular-nums">${i}%</span>
        </div>`}).join("")}
    </div>`}function Co(){return new URLSearchParams(window.location.search).get("id")}const ee=[...Ae];function ea(e){return ee.find(t=>t.property_id===e)||null}let nt=null;function Eo(){return nt||(nt=pe(()=>import("./promo-backgrounds-Cv2azssI.js").then(e=>e.y),__vite__mapDeps([0,1,2])).then(e=>{const t=e.PRODUCT_EXTRA_LISTINGS||[];for(const a of t)ee.some(r=>r.property_id===a.property_id)||ee.push(a);return ee}).catch(()=>ee)),nt}function Lo(e){const t=document.getElementById("details-content"),a=ut(e),s=Pe(e.images).map((u,d)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${d===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${m(u)}">
      <img src="${m(u)}" alt="View ${d+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${H}'">
    </button>`).join(""),o=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cargo Area / Truck Bed","Engine","Wheels / Tires","Additional View"],i=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"package",label:"Payload Capacity",value:e.payload_capacity},{icon:"link",label:"Towing Capacity",value:e.towing_capacity},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(u=>u.value!=null&&u.value!==""&&u.value!=="N/A");Oe(e.features);const n=Ve();t.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${m(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${m(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${m(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${m(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${H}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${o[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${s}
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
      ${We(e,i,e.features,null,null)}

      ${n}

      ${De(e)}

      ${Ue()}
    </div>
  `;const l=document.getElementById("hero-image"),c=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((u,d)=>{u.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(p=>p.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(p=>p.classList.add("border-gray-200")),u.classList.add("active","border-blue-500"),u.classList.remove("border-gray-200"),l.src=u.dataset.img,c.textContent=o[d]||`View ${d+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await W()?window.location.href=`/checkout.html?id=${e.property_id}`:(se(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Z(e)}),Ge(e),ze(e),he(e),Fe(),window.lucide&&lucide.createIcons()}function Io(e){const t=document.getElementById("details-content"),a=U(e),s=Pe(e.images).map((u,d)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${d===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${m(u)}">
      <img src="${m(u)}" alt="View ${d+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${H}'">
    </button>`).join(""),o=["Exterior Front","Exterior Side","Exterior Rear","Living Area","Kitchen","Bedroom","Bathroom","Additional View"],i=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(u=>u.value!=null&&u.value!==""&&u.value!=="N/A");Oe(e.features);const n=Ve();t.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${m(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${m(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${m(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${m(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${H}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${o[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${s}
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
      ${We(e,i,e.features,null,null)}

      ${n}

      ${De(e)}

      ${Ue()}
    </div>
  `;const l=document.getElementById("hero-image"),c=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((u,d)=>{u.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(p=>p.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(p=>p.classList.add("border-gray-200")),u.classList.add("active","border-blue-500"),u.classList.remove("border-gray-200"),l.src=u.dataset.img,c.textContent=o[d]||`View ${d+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await W()?window.location.href=`/checkout.html?id=${e.property_id}`:(se(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Z(e)}),Ge(e),ze(e),he(e),Fe(),window.lucide&&lucide.createIcons()}function Ao(e){const t=document.getElementById("details-content"),a=U(e),s=Pe(e.images).map((u,d)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${d===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${m(u)}">
      <img src="${m(u)}" alt="View ${d+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${H}'">
    </button>`).join(""),o=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cabin / Interior","Wheels / Tires","Additional View"],i=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(u=>u.value!=null&&u.value!==""&&u.value!=="N/A");Oe(e.features);const n=Ve();t.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${m(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${m(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${m(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${m(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${H}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${o[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${s}
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
      ${We(e,i,e.features,null,null)}

      ${n}

      ${De(e)}

      ${Ue()}
    </div>
  `;const l=document.getElementById("hero-image"),c=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((u,d)=>{u.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(p=>p.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(p=>p.classList.add("border-gray-200")),u.classList.add("active","border-blue-500"),u.classList.remove("border-gray-200"),l.src=u.dataset.img,c.textContent=o[d]||`View ${d+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await W()?window.location.href=`/checkout.html?id=${e.property_id}`:(se(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Z(e)}),Ge(e),ze(e),he(e),Fe(),window.lucide&&lucide.createIcons()}function Mo(e){const t=e.listing_type==="property",a=t?"Share Property":"Share",r=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`,s=t?'<a href="#listing-map" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-bold py-3 rounded-xl transition text-sm"><i data-lucide="map-pin" class="w-5 h-5"></i> View Map</a>':"",o=t?`
    <button type="button" id="request-viewing-btn" class="flex items-center justify-center gap-2 bg-amber-50 border border-amber-200 hover:bg-amber-100 text-amber-700 font-bold py-3 rounded-xl transition text-sm">
      <i data-lucide="eye" class="w-4 h-4"></i> Request Viewing
    </button>
    <button type="button" id="request-info-btn" class="flex items-center justify-center gap-2 bg-rose-50 border border-rose-200 hover:bg-rose-100 text-rose-700 font-bold py-3 rounded-xl transition text-sm">
      <i data-lucide="info" class="w-4 h-4"></i> Request More Information
    </button>
    <a href="${r}" class="flex items-center justify-center gap-2 bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-700 font-bold py-3 rounded-xl transition text-sm">
      <i data-lucide="badge-check" class="w-4 h-4"></i> Contact Us
      <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online</span>
    </a>
    <a href="${r}&subject=Message" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-xl transition text-sm">
      <i data-lucide="message-circle" class="w-5 h-5"></i> Send Message
    </a>
  `:`
    <a href="${r}" class="flex items-center justify-center gap-2 bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-700 font-bold py-3 rounded-xl transition text-sm">
      <i data-lucide="badge-check" class="w-4 h-4"></i> Contact Us
      <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online</span>
    </a>`;return`
    <div class="mb-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button type="button" id="buy-now-btn" class="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition text-sm uppercase tracking-wider">
          <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
        </button>
        <button type="button" id="add-cart-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition text-sm">
          <i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart
        </button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
        <button type="button" id="view-details-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 rounded-xl transition text-sm">
          <i data-lucide="eye" class="w-5 h-5"></i> View Details
        </button>
        <button type="button" id="wishlist-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-700 font-bold py-3 rounded-xl transition text-sm">
          <i data-lucide="heart" class="w-5 h-5"></i> Favorite
        </button>
        <button type="button" id="share-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-bold py-3 rounded-xl transition text-sm">
          <i data-lucide="share-2" class="w-5 h-5"></i> ${a}
        </button>
        ${s}
      </div>
      ${t?`<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">${o}</div>`:""}
    </div>
  `}function De(e){const t=e.listing_type==="property",a=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`;return`
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
    </div>`}function Ue(){return`
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
      </div>`}function To(e){const t=new Map,a=r=>(r||[]).forEach(s=>{s&&s.property_id&&t.set(s.property_id,s)});return a(Te),a(xt),a(oa),a(da),a(ua),a(Sr),a(Ae),a(ee),a(ca()),or(e.category||e.subcategory),[...t.values()].filter(r=>r.property_id!==e.property_id)}function Bo(e,t){let a=0;const r=c=>String(c||"").trim().toLowerCase();e.listing_type&&e.listing_type===t.listing_type&&(a+=40),e.category&&r(e.category)===r(t.category)&&(a+=30),e.subcategory&&r(e.subcategory)===r(t.subcategory)&&(a+=20),e.brand&&r(e.brand)===r(t.brand)&&(a+=15),e.breed&&r(e.breed)===r(t.breed)&&(a+=15),e.model&&r(e.model)===r(t.model)&&(a+=10),e.property_type&&r(e.property_type)===r(t.property_type)&&(a+=15);const s=parseFloat(e.price)||0,o=parseFloat(t.price)||0;if(s>0&&o>0){const c=Math.min(s,o)/Math.max(s,o);c>=.8?a+=10:c>=.6?a+=6:c>=.4&&(a+=3)}e.country_code&&e.country_code===t.country_code&&(a+=5);const i=new Set(r(e.title).split(/[^a-z0-9]+/).filter(c=>c.length>2)),n=new Set(r(t.title).split(/[^a-z0-9]+/).filter(c=>c.length>2));let l=0;return i.forEach(c=>{n.has(c)&&l++}),a+=Math.min(l*2,10),a}function lt(e,t){const a=document.getElementById(e);if(!a)return;const r=a.querySelector(".rel-grid");if(!r)return;if(!t.length){a.classList.add("hidden");return}a.classList.remove("hidden"),r.innerHTML="";const s=document.createDocumentFragment();t.slice(0,10).forEach(o=>{const i=document.createElement("div");i.className="shrink-0 w-[260px] sm:w-[320px] snap-start";const n=mt(o);n.style.width="100%",i.appendChild(n),s.appendChild(i)}),r.appendChild(s),window.lucide&&lucide.createIcons()}function Ge(e){const t=To(e),a=t.map(l=>({item:l,score:Bo(e,l)})).sort((l,c)=>c.score-l.score||(c.item.rating||0)-(l.item.rating||0)),r=a.filter(l=>l.score>=35).map(l=>l.item),s=new Set(r.map(l=>l.property_id)),o=a.filter(l=>l.score>=15&&l.score<35&&!s.has(l.item.property_id)).map(l=>l.item),i=[...t].filter(l=>!s.has(l.property_id)).sort((l,c)=>(c.rating||0)-(l.rating||0)).slice(0,10),n=a.filter(l=>!s.has(l.item.property_id)).map(l=>l.item);lt("similar-section",r.length?r:n.slice(0,10)),lt("related-section",o.length?o:n.slice(0,10)),lt("recommended-section",i.length?i:n.slice(0,10))}function qo(e){const t=document.getElementById("details-content"),a=e.listing_type==="property",r=U(e),s=Se(e.country_code),o=e.listing_type==="product"?"Product ID":a?"Property ID":"Listing ID";let i="",n="",l=parseFloat(e.real_price);if((!Number.isFinite(l)||l<=0)&&(l=parseFloat(e.compare_at_price??e.original_price)),Number.isFinite(l)&&l>0&&l>parseFloat(e.price)){const h=Math.round((1-parseFloat(e.price)/l)*100);i=`<span class="text-lg text-gray-400 price-strike line-through font-medium">${U({...e,price:l})}</span>`,n=`<span class="inline-flex items-center gap-1 text-xs font-black text-white bg-red-500 px-2 py-1 rounded-full">-${h}% OFF</span>`}const c=e.availability_status||(e.listing_type==="product"?"In Stock":"Available"),u=Pe(e.images),d=[e.video,e.video_url].find(h=>h&&typeof h=="string"&&V(h)),p=[...u];d&&!p.includes(d)&&p.unshift(d);const y=p.findIndex(h=>V(h)),b=p.findIndex(h=>!V(h)),g=b>=0?b:y>=0?y:0,x=p[g],v=V(x),E=b>=0?p[b]:"",$=p.map((h,_)=>{const M=V(h)?`<video src="${m(h)}" muted preload="auto" playsinline class="w-20 h-16 object-cover"></video>
         <div class="absolute inset-0 flex items-center justify-center"><div class="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center"><svg class="w-2.5 h-2.5 text-gray-800 ml-px" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:`<img src="${m(h)}" alt="View ${_+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${H}'">`;return`<button class="gallery-thumb relative rounded-lg overflow-hidden border-2 ${_===g?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${m(h)}">
      ${M}
    </button>`}).join("");let I="";if(a){const h=[{icon:"globe",label:"Country",value:`${s} ${e.country}`},{icon:"map-pin",label:"State / Province",value:e.state},{icon:"building",label:"City",value:e.city},{icon:"navigation",label:"Town / Local Area",value:e.town}].filter(_=>_.value);I=`
      <div class="mt-4">
        ${Ne("map-pin","Location","rose")}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${h.map(_=>`
            <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
              <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="${_.icon}" class="w-4 h-4 text-blue-500"></i></div>
              <div><div class="text-gray-500 text-xs">${_.label}</div><div class="text-gray-900 font-bold text-[15px]">${_.value}</div></div>
            </div>
          `).join("")}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-200" style="height:280px"></div>
      </div>`}let f=[];a?(f=[{icon:"bed-double",label:"Bedrooms",value:e.bedrooms},{icon:"bath",label:"Bathrooms",value:e.bathrooms},{icon:"droplets",label:"Half Bathrooms",value:e.half_bathrooms},{icon:"building",label:"Building / Living Size",value:e.building_size},{icon:"ruler",label:"Land / Lot Size",value:e.land_size},{icon:"layers",label:"Floors / Levels",value:e.floors},{icon:"car-front",label:"Parking Spaces",value:e.parking_spaces},{icon:"warehouse",label:"Garage",value:e.garage},{icon:"home",label:"Property Type",value:e.property_type},{icon:"sofa",label:"Furnished",value:e.furnished},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"calendar",label:"Year Built",value:e.year_built},{icon:"paintbrush",label:"Year Renovated",value:e.year_renovated},{icon:"mail",label:"ZIP / Postal Code",value:e.zip_code},{icon:"tag",label:"Status",value:e.listing_status==="rent"?"For Rent":"For Sale"}].filter(h=>h.value!=null&&h.value!==""),ke("Property Information","home",f)):e.category==="Motorhomes"?(f=[{icon:"factory",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank}].filter(h=>h.value!=null&&h.value!==""),ke("Vehicle Information","bus",f,"violet")):e.listing_type==="product"?(f=[{icon:"factory",label:"Brand",value:e.brand},{icon:"tag",label:"Subcategory",value:e.subcategory},{icon:"palette",label:"Colour",value:e.color},{icon:"ruler",label:"Size",value:e.size},{icon:"layers",label:"Material",value:e.material},{icon:"badge-check",label:"Condition",value:e.condition||"New"},{icon:"shield-check",label:"Warranty",value:e.warranty},{icon:"package-check",label:"Availability",value:e.availability_status}].filter(h=>h.value!=null&&h.value!==""),ke("Product Information","package",f)):e.listing_type==="pet"&&(f=[{icon:"paw-print",label:"Breed",value:e.breed},{icon:"calendar",label:"Age",value:e.age},{icon:"users",label:"Gender",value:e.gender},{icon:"palette",label:"Colour",value:e.color},{icon:"scale",label:"Weight",value:e.size},{icon:"globe",label:"Origin",value:`${Se(e.country_code)} ${e.country}`},{icon:"badge-check",label:"Health",value:e.condition}].filter(h=>h.value!=null&&h.value!==""),ke("Pet Information","paw-print",f,"amber")),Oe(e.features),ho(e.highlights);const P=Ve();t.innerHTML=`
    <div class="fade-in">
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>${e.category}</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${m(e.title)}</span>
      </div>

      <div class="mb-5">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">${m(e.title)}</h1>
        <div class="flex flex-wrap items-center gap-2 mt-2.5">
          ${a?e.verification_status==="Verified"?'<span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified</span>':e.verification_status==="Pending verification"?'<span class="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full"><i data-lucide="clock" class="w-3.5 h-3.5"></i> Pending Verification</span>':'<span class="inline-flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full"><i data-lucide="shield-alert" class="w-3.5 h-3.5"></i> Not Verified</span>':'<span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified</span>'}
          <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full"><i data-lucide="box" class="w-3.5 h-3.5"></i> ${o}: <span class="font-mono">${m(e.property_id)}</span></span>
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
            ${n}
            <span class="text-sm text-emerald-600 font-bold flex items-center gap-1"><i data-lucide="package-check" class="w-4 h-4"></i> ${c}</span>
          </div>
        </div>
        <div class="flex flex-col gap-1.5 text-sm">
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="truck" class="w-4 h-4 text-blue-500"></i> Free worldwide shipping</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="rotate-ccw" class="w-4 h-4 text-blue-500"></i> Easy returns within 14 days</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="lock" class="w-4 h-4 text-blue-500"></i> Secure payment protection</span>
        </div>
      </div>

      <div id="hero-wrap" class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 cursor-zoom-in group" role="button" tabindex="0" aria-label="Open image gallery">
        ${v?`<video id="hero-image" src="${m(x)}" ${E?`poster="${m(E)}"`:""} autoplay muted loop preload="metadata" playsinline controls class="w-full h-full object-cover" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"></video>
             <div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-lg"><svg class="w-7 h-7 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:`<img id="hero-image" src="${x}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${H}'">`}
        <div class="absolute inset-0 flex items-end justify-between p-3 opacity-0 group-hover:opacity-100 transition pointer-events-none">
          <span class="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-black/50 backdrop-blur px-3 py-1.5 rounded-full"><i data-lucide="expand" class="w-3.5 h-3.5"></i> Tap to enlarge</span>
        </div>
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${$}
      </div>

      ${Mo(e)}

      <div id="listing-details">
        ${We(e,f,e.features,e.highlights,I,xo(e))}
      </div>

      ${P}

      ${a?De(e):""}

      <div id="recommendations-section" class="hidden">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">You May Also Like</h3>
        <div id="recommendations-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>

      ${Ue()}
    </div>
  `,document.getElementById("hero-image");const A=document.getElementById("hero-wrap");if(A){const h=()=>jo(e,p);A.addEventListener("click",h),A.addEventListener("keydown",_=>{(_.key==="Enter"||_.key===" ")&&(_.preventDefault(),h())})}t.querySelectorAll(".gallery-thumb").forEach(h=>{h.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(k=>k.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(k=>k.classList.add("border-gray-200")),h.classList.add("active","border-blue-500"),h.classList.remove("border-gray-200");const _=h.dataset.img,z=V(_),M=document.getElementById("hero-wrap");if(!M)return;const Y=M.querySelector(".hero-video-overlay");Y&&Y.remove();const T=document.getElementById("hero-image");if(z)if(T&&T.tagName==="VIDEO")T.src=_;else{const k=document.createElement("video");k.id="hero-image",k.src=_,k.muted=!0,k.loop=!0,k.autoplay=!0,k.preload="metadata",k.playsInline=!0,k.controls=!0,E&&(k.poster=E),k.className="w-full h-full object-cover",M.insertBefore(k,M.firstChild),T&&T.remove&&T.remove();const S=document.createElement("div");S.className="hero-video-overlay absolute inset-0 flex items-center justify-center pointer-events-none",S.innerHTML='<div class="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-lg"><svg class="w-7 h-7 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>',M.insertBefore(S,M.firstChild?.nextSibling)}else if(T&&T.tagName==="IMG")T.src=_;else{const k=document.createElement("img");k.id="hero-image",k.src=_,k.alt=e.title,k.className="w-full h-full object-cover",k.onerror=function(){this.onerror=null,this.src=H},M.insertBefore(k,M.firstChild),T&&T.remove&&T.remove()}})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await W()?window.location.href=`/checkout.html?id=${e.property_id}`:(se(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Z(e)});const G=document.getElementById("request-viewing-btn");G&&G.addEventListener("click",()=>ta(e,"viewing"));const J=document.getElementById("request-info-btn");J&&J.addEventListener("click",()=>ta(e,"info"));const w=document.getElementById("view-details-btn");w&&w.addEventListener("click",()=>{const h=document.getElementById("listing-details");h&&h.scrollIntoView({behavior:"smooth",block:"start"})});const j=document.getElementById("add-cart-btn");j&&j.addEventListener("click",()=>{fa(e.property_id,1),j.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Added to Cart',window.lucide&&lucide.createIcons(),setTimeout(()=>{j.innerHTML='<i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart',window.lucide&&lucide.createIcons()},2e3)}),Ho(e),ze(e),he(e),No(e),Fe(),window.lucide&&lucide.createIcons(),e.property_id,e.title,parseFloat(e.price),e.currency;const oe=document.getElementById("listing-map");if(oe&&window.L){const h=parseFloat(e.latitude)||null,_=parseFloat(e.longitude)||null,z=[e.product_location,e.town,e.city,e.state,e.country].filter(Boolean).join(", ")||e.title,M=[e.product_location,e.town,e.city,e.state,e.country].filter(Boolean).join(", "),Y="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(M||e.title),T=(S,fe,Ye)=>{const be=L.map(oe).setView([S,fe],Ye);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(be),L.marker([S,fe]).addTo(be).bindPopup(`<strong>${m(e.title)}</strong><br>${m(z)}`).openPopup()},k=()=>{oe.innerHTML=`<div class="w-full h-full flex flex-col items-center justify-center gap-2 bg-gray-50 text-center p-4">
        <i data-lucide="map-pin" class="w-6 h-6 text-gray-400"></i>
        <p class="text-xs text-gray-500">Exact map position not available for this location.</p>
        <a href="${Y}" target="_blank" rel="noopener" class="text-xs font-bold text-blue-600 hover:underline">Open location in Google Maps</a>
      </div>`,window.lucide&&lucide.createIcons()};h&&_?T(h,_,13):M?fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(M)).then(S=>S.json()).then(S=>{S&&S[0]?T(parseFloat(S[0].lat),parseFloat(S[0].lon),12):k()}).catch(k):k()}}function jo(e,t){const a=(Array.isArray(t)&&t.length?t:[e.images?.[0]||H]).filter(Boolean);if(!a.length)return;let r=0;const s=document.createElement("div");s.id="gallery-lightbox",s.className="fixed inset-0 z-[500] bg-black/95 flex flex-col",s.innerHTML=`
    <style>
      #gallery-lightbox .lb-media{transition:opacity .18s ease}
      #gallery-lightbox .lb-media.lb-fade{opacity:0}
    </style>
    <div class="flex items-center justify-between px-4 py-3 text-white">
      <span class="text-xs font-bold text-gray-300 truncate">${m(e.title)}</span>
      <button type="button" id="lb-close" class="shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white" aria-label="Close">✕</button>
    </div>
    <div id="lb-viewport" class="relative flex-1 flex items-center justify-center overflow-hidden select-none">
      <div id="lb-media-container" class="max-w-full max-h-full px-4 flex items-center justify-center"></div>
      <button type="button" id="lb-prev" class="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center text-2xl" aria-label="Previous">‹</button>
      <button type="button" id="lb-next" class="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center text-2xl" aria-label="Next">›</button>
    </div>
    <div class="px-4 py-3 flex items-center justify-between gap-3 text-white">
      <span id="lb-count" class="shrink-0 text-xs font-bold text-gray-300"></span>
      <div id="lb-thumbs" class="flex gap-1.5 overflow-x-auto scrollbar-none justify-end"></div>
    </div>
  `,document.body.appendChild(s),document.body.style.overflow="hidden";const o=s.querySelector("#lb-media-container"),i=s.querySelector("#lb-count"),n=s.querySelector("#lb-thumbs");let l=null;const c=()=>{o.classList.add("lb-fade"),setTimeout(()=>{const g=a[r];if(V(g))o.innerHTML=`<video src="${m(g)}" controls playsinline preload="auto" class="lb-media max-w-full max-h-[70vh] object-contain rounded-lg"></video>`;else{const x=document.createElement("img");x.src=g,x.alt="Gallery",x.draggable=!1,x.className="lb-media max-w-full max-h-[70vh] object-contain",x.onerror=function(){this.onerror=null,this.src=H},o.innerHTML="",o.appendChild(x)}o.classList.remove("lb-fade"),i.textContent=`${r+1} / ${a.length}`,n.innerHTML=a.map((x,v)=>{const $=V(x)?'<div class="w-full h-full flex items-center justify-center bg-gray-800"><svg class="w-3 h-3 text-white ml-px" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>':`<img src="${m(x)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`;return`<button type="button" data-i="${v}" class="relative w-12 h-9 rounded-lg overflow-hidden border-2 ${v===r?"border-blue-500":"border-transparent"}" aria-label="Item ${v+1}">${$}</button>`}).join(""),n.querySelectorAll("[data-i]").forEach(x=>x.addEventListener("click",()=>{r=parseInt(x.dataset.i,10),c()}))},90)},u=()=>{r=(r-1+a.length)%a.length,c()},d=()=>{r=(r+1)%a.length,c()},p=()=>{s.remove(),document.body.style.overflow="",document.removeEventListener("keydown",y)},y=g=>{g.key==="Escape"?p():g.key==="ArrowLeft"?u():g.key==="ArrowRight"&&d()};s.querySelector("#lb-close").addEventListener("click",p),s.querySelector("#lb-prev").addEventListener("click",u),s.querySelector("#lb-next").addEventListener("click",d);const b=s.querySelector("#lb-viewport");b.addEventListener("touchstart",g=>{l=g.touches[0].clientX},{passive:!0}),b.addEventListener("touchend",g=>{if(l==null)return;const x=g.changedTouches[0].clientX-l;Math.abs(x)>40&&(x<0?d():u()),l=null},{passive:!0}),b.addEventListener("click",g=>{g.target===b&&p()}),document.addEventListener("keydown",y),c()}function ta(e,t){const a=t==="viewing",r=e.property_id||e.id||"",s=document.createElement("div");s.id="property-request-modal",s.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-0 sm:p-4",s.innerHTML=`
    <style>
      @keyframes req-up{from{transform:translateY(100%)}to{transform:translateY(0)}}
      @media (min-width:640px){@keyframes req-up{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}}
      #property-request-modal .animate-req-up{animation:req-up .26s cubic-bezier(.2,.8,.2,1)}
    </style>
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" data-req-close></div>
    <div class="relative w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-req-up">
      <div class="flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-100">
        <div>
          <h3 class="text-base font-black text-gray-900 tracking-tight">${a?"Request a Viewing":"Request More Information"}</h3>
          <p class="text-xs text-gray-500 mt-0.5 truncate">${m(e.title)}</p>
        </div>
        <button type="button" data-req-close class="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition" aria-label="Close">✕</button>
      </div>
      <form id="property-request-form" class="p-5 space-y-4">
        <input type="hidden" id="prq-kind" value="${a?"viewing":"info"}">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div><label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Your Name *</label><input type="text" id="prq-name" required placeholder="Full name" class="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500"></div>
          <div><label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Email Address *</label><input type="email" id="prq-email" required placeholder="you@email.com" class="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div><label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Phone (optional)</label><input type="tel" id="prq-phone" placeholder="+1 555 000 0000" class="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500"></div>
          ${a?'<div><label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Preferred Date</label><input type="date" id="prq-date" class="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500"></div>':""}
        </div>
        <div><label class="block text-xs font-bold uppercase text-gray-600 mb-1.5">Message</label><textarea id="prq-message" rows="3" placeholder="${a?"Preferred time, questions about the property…":"What would you like to know about this property?"}" class="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500 resize-none"></textarea></div>
        <button type="submit" id="prq-submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wide transition shadow-lg shadow-blue-600/30">${a?"Request Viewing":"Send Request"}</button>
        <div id="prq-status" class="hidden text-center text-sm py-2 rounded-xl"></div>
      </form>
    </div>
  `,document.body.appendChild(s),document.body.style.overflow="hidden",W().then(i=>{if(i){const n=s.querySelector("#prq-name"),l=s.querySelector("#prq-email"),c=i.user_metadata||{};c?.full_name&&n&&!n.value&&(n.value=c.full_name),i.email&&l&&!l.value&&(l.value=i.email)}});const o=()=>{s.remove(),document.body.style.overflow=""};s.querySelectorAll("[data-req-close]").forEach(i=>i.addEventListener("click",o)),s.addEventListener("submit",async i=>{i.preventDefault();const n=s.querySelector("#prq-submit"),l=s.querySelector("#prq-status"),c=s.querySelector("#prq-name").value.trim(),u=s.querySelector("#prq-email").value.trim(),d=s.querySelector("#prq-phone")?.value.trim()||"",p=s.querySelector("#prq-date")?.value||"",y=s.querySelector("#prq-message").value.trim();n.disabled=!0,n.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i> Sending...',window.lucide&&lucide.createIcons();try{let b=null;try{b=(await C.auth.getUser()).data?.user?.id||null}catch{}const g=a?"Request Viewing":"Request More Information",x=[r&&`Property: ${r}`,d&&`Phone: ${d}`,p&&`Preferred date: ${p}`,y].filter(Boolean).join(" | "),{error:v}=await C.from("site_feedback").insert({user_id:b,name:c,email:u,rating:5,feedback:`${g} (${e.title}): ${x}`,is_approved:!1});if(v)throw new Error(v.message);try{await fetch("https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/send-auth-email",{method:"POST",headers:{Authorization:"Bearer sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa","Content-Type":"application/json"},body:JSON.stringify({type:"contact_form",name:c,email:u,subject:`${g} — ${e.title}`,message:x})})}catch{}l.className="text-center text-sm py-3 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200",l.textContent=a?"Viewing request sent! We'll confirm your appointment within 24 hours.":"Request sent! We'll get back to you within 24 hours.",l.classList.remove("hidden"),setTimeout(o,1800)}catch{l.className="text-center text-sm py-3 rounded-xl bg-red-50 text-red-600 border border-red-200",l.textContent="Failed to send. Please email support@weverseonlineshop.com directly.",l.classList.remove("hidden"),n.disabled=!1,n.innerHTML=a?"Request Viewing":"Send Request",window.lucide&&lucide.createIcons()}})}let ne=0,aa=!1;function Ro(){if(aa)return;aa=!0;const e=document.createElement("style");e.textContent="@keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}",document.head.appendChild(e)}function ct(e,t){if(!e)return;Ro(),e.innerHTML=`<i data-lucide="heart" class="w-5 h-5 ${t?"fill-red-500 text-red-500":""}"></i>`,e.classList.toggle("bg-red-50",t),e.classList.toggle("border",t),e.classList.toggle("border-red-200",t);const a=e.querySelector("span");a&&(a.textContent=t?"Saved to Wishlist":"Add to Wishlist"),window.lucide&&lucide.createIcons();const r=e.querySelector("i");r&&(r.style.animation="none",r.offsetWidth,r.style.animation="kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)",setTimeout(()=>{r&&(r.style.animation="")},550))}async function Ho(e){const t=document.getElementById("wishlist-btn");if(!t)return;const a=await W();if(!a){t.addEventListener("click",()=>{se(window.location.pathname+window.location.search),window.location.href=`/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`});return}const{data:r,error:s}=await C.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(s){console.error("Wishlist check failed:",s.message);return}r&&ct(t,!0),t.addEventListener("click",async()=>{const{data:o,error:i}=await C.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(i){console.error("Wishlist toggle failed:",i.message);return}if(o){const{error:n}=await C.from("wishlist").delete().eq("id",o.id);if(n){console.error("Wishlist delete failed:",n.message);return}ct(t,!1)}else{const{error:n}=await C.from("wishlist").insert({user_id:a.id,listing_id:e.id});if(n){console.error("Wishlist insert failed:",n.message);return}ct(t,!0)}})}async function ze(e){const t=document.getElementById("review-form");if(!t)return;const a=await W();if(!a){t.classList.add("hidden");const l=document.getElementById("review-guest-box"),c=document.getElementById("review-guest-btn"),u=document.getElementById("review-guest-msg");l&&l.classList.remove("hidden"),c&&u&&c.addEventListener("click",()=>{u.classList.remove("hidden"),c.innerHTML='<i data-lucide="lock" class="w-4 h-4"></i> Sign in to write a review',window.lucide&&window.lucide.createIcons()});return}t.classList.remove("hidden");const r=document.getElementById("review-guest-box");r&&r.classList.add("hidden"),document.querySelectorAll(".star-btn").forEach(l=>{l.addEventListener("click",()=>{ne=parseInt(l.dataset.rating,10),document.querySelectorAll(".star-btn").forEach((c,u)=>{const d=c.querySelector("i, svg");d&&(u<ne?(d.classList.add("fill-amber-400","text-amber-400"),d.classList.remove("text-gray-300")):(d.classList.remove("fill-amber-400","text-amber-400"),d.classList.add("text-gray-300")))})})});const s=document.getElementById("review-photo-input"),o=document.getElementById("review-photo-preview");let i=null;s&&s.addEventListener("change",()=>{if(i=s.files&&s.files[0],!!o&&(o.innerHTML="",i)){const l=URL.createObjectURL(i);o.innerHTML=`<span class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg px-2.5 py-1"><img src="${l}" alt="" class="w-5 h-5 rounded object-cover">${m(i.name)}</span>`}});const n=document.getElementById("review-submit-msg");t.addEventListener("submit",async l=>{l.preventDefault();const c=document.getElementById("review-text").value.trim();if(!ne){alert("Please select a rating.");return}if(!c){alert("Please write a review.");return}const u=t.querySelector('button[type="submit"]'),d=u.innerHTML;u.disabled=!0,u.innerHTML='<span class="inline-block animate-spin">⏳</span> Submitting…';let p=null;if(i){const b=(i.name.split(".").pop()||"jpg").toLowerCase().replace(/[^a-z0-9]/g,"")||"jpg",g=`${a.id}/${Date.now()}_${String(Math.random()).slice(2)}.${b}`,{error:x}=await C.storage.from("review-photos").upload(g,i,{contentType:i.type||"image/jpeg",cacheControl:"3600",upsert:!1});if(x){u.disabled=!1,u.innerHTML=d,alert("Could not upload photo: "+x.message);return}const{data:v}=C.storage.from("review-photos").getPublicUrl(g);p=v?.publicUrl||null}const{error:y}=await C.from("product_reviews").insert({listing_id:e.id||null,property_id:e.property_id||e.id||"",user_id:a.id,rating:ne,comment:c,review_photo:p,is_approved:!0});if(u.disabled=!1,u.innerHTML=d,y){alert("Error: "+y.message);return}document.getElementById("review-text").value="",ne=0,i=null,s&&(s.value=""),o&&(o.innerHTML=""),document.querySelectorAll(".star-btn").forEach(b=>{const g=b.querySelector("i, svg");g&&(g.classList.remove("fill-amber-400","text-amber-400"),g.classList.add("text-gray-300"))}),n&&(n.classList.remove("hidden"),setTimeout(()=>{n&&n.classList.add("hidden")},4e3)),he(e)})}async function he(e){Ua();const t=document.getElementById("reviews-list"),a=document.getElementById("reviews-summary"),r=document.getElementById("reviews-breakdown");if(!t)return;const s=Rs(e),o={5:s.breakdown[5]||0,4:s.breakdown[4]||0,3:s.breakdown[3]||0,2:s.breakdown[2]||0,1:s.breakdown[1]||0};let i=Math.max(Number(s.total)||0,s.reviews.length);const n=[],l=e.property_id||e.id||"";if(l){const{data:v,error:E}=await C.from("product_reviews").select("*, profiles(full_name)").eq("property_id",l).eq("is_approved",!0).order("created_at",{ascending:!1});if(!E&&v)for(const $ of v){n.push({...$,name:$.profiles?.full_name||"Anonymous",verified:$.is_verified_purchase});const I=Math.min(5,Math.max(1,Math.round(Number($.rating)||0)));o[I]++,i++}}let c=0;for(let v=5;v>=1;v--)c+=v*o[v];const d=(i?c/i:0)||Number(e.rating)||0,p=i,y=`
    <div class="flex flex-wrap items-center gap-x-6 gap-y-4">
      <div class="flex items-center gap-4 shrink-0">
        <div class="text-5xl sm:text-6xl font-black leading-none text-gray-900 tracking-tight">${d>0?d.toFixed(1):"New"}</div>
        <div class="shrink-0">
          <div class="flex gap-1">${po(d,"w-5 h-5 sm:w-6 sm:h-6")}</div>
          <div class="text-[13px] sm:text-sm font-bold text-gray-500 mt-1.5 tracking-wide">Customer Reviews</div>
        </div>
      </div>
      <div class="hidden md:block w-px h-12 bg-gray-200"></div>
      <div class="flex flex-wrap items-center gap-2">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Listing</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1.5 rounded-full"><i data-lucide="truck" class="w-3.5 h-3.5"></i> Fast Worldwide Delivery</span>
      </div>
    </div>`;a&&(a.innerHTML=y),r&&(r.innerHTML=$o(e,o,p));const b=[...n,...s.reviews];if(!b.length){t.innerHTML='<p class="text-gray-400 text-sm py-2">No reviews yet. Be the first to review this product!</p>',window.lucide&&lucide.createIcons();return}const g=b.slice(0,3),x=()=>{if(t.innerHTML=g.map(Qt).join(""),b.length>g.length){const v=document.createElement("div");v.className="mt-4 flex justify-center",v.innerHTML=`
        <button type="button" class="view-all-reviews-btn btn-press inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition shadow-sm shadow-blue-500/20">
          View All Customer Reviews
          <i data-lucide="chevron-down" class="w-4 h-4"></i>
        </button>`,t.appendChild(v),window.lucide&&lucide.createIcons(),v.querySelector(".view-all-reviews-btn").addEventListener("click",()=>{t.innerHTML=b.map(Qt).join(""),window.lucide&&lucide.createIcons(),Po(t,x)})}};x(),window.lucide&&lucide.createIcons()}async function Ua(){const e=document.querySelector('[data-bg-slot="reviews"]');if(e)try{const t=await de();e.innerHTML=$e(t.reviews_bg_image,t.reviews_bg_video)}catch{}}document.addEventListener("promo-backgrounds-updated",()=>{try{Ua()}catch{}});function Po(e,t){if(!e)return;const a=document.getElementById("reviews-back-top");a&&a.remove();const r=document.createElement("button");r.type="button",r.id="reviews-back-top",r.setAttribute("aria-label","Back to product page"),r.className="btn-press fixed z-[90] bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white font-bold pl-3 pr-5 py-3 rounded-full text-xs shadow-xl shadow-slate-950/50 border border-white/10 backdrop-blur transition active:scale-95",r.innerHTML=`
    <span class="shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"><i data-lucide="chevron-up" class="w-4 h-4"></i></span>
    Back to product page`,document.body.appendChild(r),r.addEventListener("click",()=>{r.remove(),typeof t=="function"&&t();const s=document.getElementById("reviews-section");s&&s.scrollIntoView({behavior:"smooth",block:"start"})}),window.lucide&&lucide.createIcons()}async function No(e){const t=document.getElementById("recommendations-section"),a=document.getElementById("recommendations-grid");if(!t||!a||!e.id)return;const{data:r,error:s}=await C.from("product_recommendations").select("recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)").eq("listing_id",e.id).order("score",{ascending:!1}).limit(4);if(s){console.error("Recommendations load failed:",s.message),t.classList.add("hidden");return}let o=(r||[]).map(i=>i.showroom_listings).filter(Boolean);if(o.length<4){const{data:i}=await C.from("showroom_listings").select("property_id, title, price, currency, images, listing_type").eq("category",e.category).neq("id",e.id).eq("is_active",!0).order("rating",{ascending:!1}).limit(4-o.length);o=[...o,...i||[]]}if(o.length===0){t.classList.add("hidden");return}t.classList.remove("hidden"),a.innerHTML=o.map(i=>{const n=i.images&&i.images[0]||"/fallback.svg",l=typeof i.price=="number"?i.price:parseFloat(i.price||0),c=i.currency||"USD";return`<a href="/details.html?id=${i.property_id}" class="block bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition group">
      <div class="aspect-square overflow-hidden bg-gray-100"><img src="${m(n)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-gray-900 font-bold truncate">${m(i.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${c} ${l.toLocaleString()}</p></div>
    </a>`}).join("")}function m(e){return String(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Oo(){const e=Co();if(!e){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}const t=()=>{document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>'},a=()=>Lt(e)||It(e)||At(e)||_r(e)||ea(e)||Ke(e)||sr(),r=n=>{if(vt(n),document.title=`${n.title} | Weverse Online Shop`,Hr(n),n===Lt(e))Lo(n);else if(n===It(e))Io(n);else if(n===At(e))Ao(n);else{qo(n);try{Ge(n)}catch{}}},s=a();if(s){r(s),ce().then(()=>{dt().then(()=>{if(na(e)){t();return}const n=Ke(e);if(n&&n.property_id===e)try{r(n)}catch{}})});return}await ce();const o=Ke(e);if(o){r(o);return}await Eo();const i=ea(e);if(i){r(i);return}await dt();{t();return}}const ra=document.getElementById("details-content"),Wo=ra?ra.innerHTML:"";let sa=!1;function Ga(e){if(e)try{console.error("[details] init failed:",e&&(e.stack||e.message||e))}catch{}if(!sa){sa=!0;try{const t=document.getElementById("details-content");if(!t||t.innerHTML!==Wo||t.querySelector(".fade-in, #reviews-section"))return;t.innerHTML='<div class="text-center py-20 text-gray-500">We couldn’t load this listing right now. Please check your connection and try again.</div>'}catch{}}}window.setTimeout(Ga,12e3);Oo().catch(Ga);
