import"./modulepreload-polyfill-B5Qt9EMX.js";import{l as Ue,c as Rt,f as Nt,_ as Ht,b as _e,d as ot,g as Pt,S as Dt}from"./showroom-data-Db4XRqRK.js";import{generateListingById as Vt,getCatalogCategory as Ft}from"./catalog-Cgsinqhg.js";import{loadHiddenCatalogIds as st,isCatalogListingHidden as Ot}from"./catalog-hidden-store-D5ZSQTSm.js";import{P as vt,g as it,b as nt,f as Ut,T as zt,M as Wt}from"./motorhome-data-CupbOvk0.js";import{g as lt,a as Gt,C as Yt,P as Kt}from"./phone-data-Of7KtnOV.js";import{s as Jt,a as Ie,o as Ee,w as Me,b as Xt,r as wt}from"./showroom-cards-BRhW0dag.js";import{getCurrentUser as Y,setRedirectAfterAuth as he}from"./auth-DlKVuhCK.js";import{supabase as C}from"./supabase-client-nvpjTmO6.js";import{l as Zt,b as Qt}from"./promo-backgrounds-CNg9k5s9.js";import"./app-promo-banner-DCeFXYr1.js";/* empty css                                       */import"./categories-DacF4t8X.js";import"./site-content-DrsOBHLT.js";import"./promo-pool-DSyyI4Fx.js";const ea=[];function ke(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return t>>>0}function ta(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}const ze=["James","Emma","Liam","Olivia","Noah","Ava","Ethan","Sophia","Lucas","Mia","Daniel","Isabella","Matthew","Charlotte","Samuel","Amelia","Gabriel","Harper","Nathan","Evelyn","Caleb","Abigail","Adrian","Ella","Owen","Grace","Leo","Chloe","Julian","Nora","Mason","Aria","Elijah","Layla","Isaac","Zoe","Hunter","Scarlett","Christian","Lily","Aaron","Hannah","Dylan","Savannah","Andrew","Ruby","David","Elena","Ryan","Nina","Marcus","Priya","Kwame","Fatima","Andre","Yuki","Tomas","Ingrid","Mateo","Sofia","Omar","Zara","Felix","Amara","Jonas","Leila","Victor","Mila","Diego","Iris","Hugo","Camila","Adam","Freya","Oscar","Amina","Peter","Naomi","Elias","Lucia","Ray","Talia","Marco","Sienna","Joshua","Anya","Kofi","Petra"],$e=["Anderson","Baker","Carter","Diaz","Evans","Foster","Garcia","Harris","Ingram","Johnson","Kelly","Lewis","Miller","Nelson","Ortiz","Parker","Quinn","Reed","Sanders","Turner","Underwood","Vaughn","Walker","Young","Zimmerman","Brooks","Coleman","Dunn","Fisher","Grant","Hayes","Jordan","Knight","Lopez","Morgan","Nguyen","Okafor","Peterson","Romano","Silva","Thompson","Umeh","Volkov","Wang","Xu","Yates","Zhou","Bennett","Chukwu","Doyle","Eze","Ferreira","Gonzalez","Hansen","Ivanov","Jansen","Kumar","Larsen","Moreau","Novak","Osei","Patel","Quintero","Rossi","Schmidt","Tavares","Ueda","Vasquez","Weber","Xavier","Yamamoto","Ziegler","Adeyemi","Barlow","Costa","Diop","Eriksen","Fontaine","Gomez","Holmes","Ikram","Juma","Karlsson","Lawson","Mensah","Nilsson"],ct=[{city:"Austin",country:"United States"},{city:"New York",country:"United States"},{city:"Seattle",country:"United States"},{city:"Los Angeles",country:"United States"},{city:"Chicago",country:"United States"},{city:"Boston",country:"United States"},{city:"San Diego",country:"United States"},{city:"Denver",country:"United States"},{city:"Miami",country:"United States"},{city:"Portland",country:"United States"},{city:"Toronto",country:"Canada"},{city:"Vancouver",country:"Canada"},{city:"Montreal",country:"Canada"},{city:"Calgary",country:"Canada"},{city:"Ottawa",country:"Canada"},{city:"London",country:"United Kingdom"},{city:"Manchester",country:"United Kingdom"},{city:"Birmingham",country:"United Kingdom"},{city:"Edinburgh",country:"United Kingdom"},{city:"Glasgow",country:"United Kingdom"},{city:"Bristol",country:"United Kingdom"},{city:"Liverpool",country:"United Kingdom"},{city:"Dublin",country:"Ireland"},{city:"Cork",country:"Ireland"},{city:"Paris",country:"France"},{city:"Lyon",country:"France"},{city:"Marseille",country:"France"},{city:"Berlin",country:"Germany"},{city:"Munich",country:"Germany"},{city:"Hamburg",country:"Germany"},{city:"Frankfurt",country:"Germany"},{city:"Amsterdam",country:"Netherlands"},{city:"Rotterdam",country:"Netherlands"},{city:"Brussels",country:"Belgium"},{city:"Antwerp",country:"Belgium"},{city:"Zurich",country:"Switzerland"},{city:"Geneva",country:"Switzerland"},{city:"Vienna",country:"Austria"},{city:"Rome",country:"Italy"},{city:"Milan",country:"Italy"},{city:"Florence",country:"Italy"},{city:"Madrid",country:"Spain"},{city:"Barcelona",country:"Spain"},{city:"Valencia",country:"Spain"},{city:"Lisbon",country:"Portugal"},{city:"Porto",country:"Portugal"},{city:"Stockholm",country:"Sweden"},{city:"Gothenburg",country:"Sweden"},{city:"Oslo",country:"Norway"},{city:"Copenhagen",country:"Denmark"},{city:"Helsinki",country:"Finland"},{city:"Reykjavik",country:"Iceland"},{city:"Warsaw",country:"Poland"},{city:"Krakow",country:"Poland"},{city:"Prague",country:"Czech Republic"},{city:"Athens",country:"Greece"},{city:"Sydney",country:"Australia"},{city:"Melbourne",country:"Australia"},{city:"Brisbane",country:"Australia"},{city:"Perth",country:"Australia"},{city:"Adelaide",country:"Australia"},{city:"Auckland",country:"New Zealand"},{city:"Wellington",country:"New Zealand"},{city:"Christchurch",country:"New Zealand"},{city:"Singapore",country:"Singapore"},{city:"Tokyo",country:"Japan"},{city:"Osaka",country:"Japan"},{city:"Kyoto",country:"Japan"},{city:"Seoul",country:"South Korea"},{city:"Busan",country:"South Korea"},{city:"Dubai",country:"United Arab Emirates"},{city:"Abu Dhabi",country:"United Arab Emirates"},{city:"Doha",country:"Qatar"},{city:"Tel Aviv",country:"Israel"},{city:"Taipei",country:"Taiwan"},{city:"Hong Kong",country:"Hong Kong"}],Se=["just ordered from this shop and it was so easy fr","first time buying here and honestly impressed ngl","checked out in like 2 minutes, easiest thing ever","was a little skeptical at first but it all worked out","placed my order from my phone, super smooth","i've ordered here a few times and it never lets me down","took a chance on this store and zero regrets","signing up and ordering took no time at all","everything from picking to paying was really simple","first international order and it went perfectly 🙏","lowkey wasn't expecting much but it was great","order went through instantly, no drama","the site is so easy to use, even i managed it lol","been shopping online for years, this one stands out","quick and painless, just how online shopping should be","had a tiny doubt before ordering but it was fine","the whole process felt very professional","just what i needed, no stress, no hassle","my cousin recommended this shop and he was right","ordered without overthinking and it paid off"],U=["shipping was mad fast, arrived way earlier than expected","my package came in perfect condition 🔥","the delivery guy was super nice and careful","got updates the entire time, no guessing","tracking was accurate and it showed up on time","packaging was really solid, nothing was damaged","they answered my question in like 10 minutes","customer service was actually helpful, rare these days","everything arrived exactly as described","the parcel was wrapped so well, impressive","it showed up a day early, which was a nice surprise","payment was secure and confirmation came right away","kept me posted at every single step","dispatching was quick, shipped the same day","the item looked even better in person","my order was handled with so much care","they were super responsive whenever i messaged","the tracking link actually worked the whole way","delivery was on schedule, not a minute late","everything came neatly packed and in one piece","no issues at all, straight to my door","they followed up after delivery which i thought was nice","the whole team was polite and professional","my doubts disappeared once the package arrived","quality was clear as soon as i opened the box","support replied quickly even though it was late","well organized from start to finish","came when they said it would, no surprises","fast dispatch and smooth handling of my order","the notifications kept me calm the whole time lol","everything i ordered was in the box, nothing missing","the courier called before arriving, so professional","shipped in sturdy packaging, survived the trip perfectly","i could track it the whole way, very reassuring","they processed my order in record time","came in perfect shape and very well protected","every update they sent was accurate and clear","exactly the delivery experience you hope for","returns and support were straightforward too","very clean, well managed order, i was impressed"],We=["100% ordering again fr","would recommend this shop to anyone","already told my friends about it","this is my new go to place now","can't recommend them enough","definitely coming back, no question","so glad i found this store","will 100% be back 💯","no complaints at all honestly","totally worth it, trust me","10/10 experience, easy","this shop is legit, trust","loyal customer for life now","five stars from me, easy","a real hidden gem honestly","can't wait for my next order"],dt={vehicle:["my vehicle was delivered safe and sound, kept me updated the whole trip","the listing was exact and delivery was arranged super smoothly"],property:["the listing was spot on and they walked me through the whole process","all the paperwork was handled clean, very easy from start to finish"],phone:["the phone matched the photos exactly and shipped out quick","they double checked everything before sending, packaging was solid"],pet:["they handled everything so carefully, i felt reassured the whole way","all the paperwork was sorted out and the process was really easy"],product:["the item was exactly like the photos, arrived in great shape","order was processed fast and the packaging was really solid"]},ut=["🔥","✨","😍","🙌","💯","😭","❤️","👍","🎯","👌","✅","⚡","📦","🙏"],kt=[{year:2018,w:3},{year:2019,w:7},{year:2020,w:11},{year:2021,w:13},{year:2022,w:15},{year:2023,w:16},{year:2024,w:15},{year:2025,w:12},{year:2026,w:8}],aa=kt.reduce((e,t)=>e+t.w,0);function ra(e){let t=e()*aa;for(const a of kt){if(t<a.w)return a.year;t-=a.w}return 2024}function Ge(e,t,a,r){return(e+t*a)%r}function oa(e,t={}){const a=String(e.property_id||e.id||"");if(!a)return{reviews:[],breakdown:{5:0,4:0,3:0,2:0,1:0},total:0,computedRating:0};const r=ke(a),o=187+r%660,i=Math.min(5,Math.max(1,Number(e.rating)||0))||4.5;let l=Math.max(.3,Math.min(.9,i/5)),s=1-l,c=.07,d=.04,m=.03;const h=1/(l+s+c+d+m);l*=h,s*=h,c*=h,d*=h,m*=h;const b=[l,s,c,d,m],x=e.listing_type==="vehicle"?"vehicle":e.listing_type==="property"?"property":e.listing_type==="pet"?"pet":String(e.category||"").toLowerCase().includes("phone")?"phone":"product",v=dt[x]||dt.product,y=[],k=ze.length*$e.length,w=Se.length*U.length*U.length*We.length,E=457,g=811;for(let $=0;$<o;$++){const R=ta(ke(a+"::"+$));let Z=R(),oe=5,Q=0;for(let we=5;we>=1;we--)if(Q+=b[5-we],Z<=Q){oe=we;break}const ee=Ge(r,$,E,k),se=ze[Math.floor(ee/$e.length)%ze.length],ie=$e[ee%$e.length],ge=`${se} ${ie}`;let H=Ge(r,$,g,w);const f=Se[H%Se.length];H=Math.floor(H/Se.length);const _=U[H%U.length];H=Math.floor(H/U.length);const I=U[H%U.length];H=Math.floor(H/U.length);const M=We[H%We.length];let j=`${f} ${_}`;$%3===0&&v.length&&(j+=` ${v[$%v.length]}`),$%2===0&&(j+=` ${I}`),j+=` ${M}`,$%3===2&&(j+=` ${ut[(r+$*13)%ut.length]}`);const B=ct[Ge(r,$,337,ct.length)],S=Date.now(),T=ra(R),xe=T===2018?10+Math.floor(R()*3):1+Math.floor(R()*12),Oe=1+Math.floor(R()*28),ve=Date.UTC(T,xe-1,Oe),Bt=new Date(Math.min(ve,S)).toISOString(),qt=`@${se.toLowerCase()}${ie.toLowerCase()}`,jt=2+ke(a+"::likes::"+$)%380,Tt=$%7===0?1+ke(a+"::rep::"+$)%4:0;y.push({name:ge,handle:qt,location:B.country,date:Bt,rating:oe,text:j,likes:jt,replies:Tt,verified:!1,seeded:!0})}y.sort(($,R)=>$.date<R.date?1:-1);const q={5:0,4:0,3:0,2:0,1:0};let A=0;for(let $=5;$>=1;$--)q[$]=Math.round(o*b[5-$]),A+=q[$];const F=o-A;F!==0&&(q[F>0?5:1]+=F);let O=0;for(let $=5;$>=1;$--)O+=$*q[$];const ye=O/o;return{reviews:y,breakdown:q,total:o,computedRating:ye}}let le="pending",te=null;const Ze=e=>`kco_review_likes_${e}`,Qe=e=>`kco_review_comments_${e}`;function X(e){try{return JSON.parse(localStorage.getItem(e)||"null")}catch{return null}}function Ce(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}async function et(){try{te||(te=await Y()||null)}catch{te=null}if(te&&te.id)return"u:"+te.id;try{let e=localStorage.getItem("kco_anon_id");return e||(e="anon-"+Math.random().toString(36).slice(2)+Date.now().toString(36),localStorage.setItem("kco_anon_id",e)),e}catch{return"anon-"+Math.random().toString(36).slice(2)+Date.now().toString(36)}}async function tt(){if(le!=="pending")return le;try{const{error:e}=await C.from("review_likes").select("id").limit(1),{error:t}=await C.from("review_comments").select("id").limit(1);le=e||t?"local":"server"}catch{le="local"}return le}async function $t(e){const t=new Map,a=new Set,r=new Map,o=String(e||"");try{if(await tt()==="server"){const[{data:n},{data:i}]=await Promise.all([C.from("review_likes").select("review_key, liker_id").eq("property_id",o),C.from("review_comments").select("*").eq("property_id",o).order("created_at",{ascending:!0})]),l=await et();for(const s of n||[])t.set(s.review_key,(t.get(s.review_key)||0)+1),s.liker_id===l&&a.add(s.review_key);for(const s of i||[]){const c=r.get(s.review_key)||[];c.push({id:s.id,author:s.author,body:s.body,created_at:s.created_at}),r.set(s.review_key,c)}}else{const n=X(Ze(o))||{},i=await et();for(const[s,c]of Object.entries(n)){const d=Array.isArray(c)?c:[];t.set(s,d.length),d.includes(i)&&a.add(s)}const l=X(Qe(o))||{};for(const[s,c]of Object.entries(l))Array.isArray(c)&&r.set(s,c)}}catch{}return{likes:t,liked:a,comments:r}}async function sa(e,t){const a=String(e||""),r=!1;try{const o=await et();if(await tt()==="server"){const{data:s}=await C.from("review_likes").select("id").eq("review_key",t).eq("liker_id",o).limit(1);if(s&&s.length){const{error:d}=await C.from("review_likes").delete().eq("review_key",t).eq("liker_id",o);return{liked:d?r:!1}}const{error:c}=await C.from("review_likes").insert({property_id:a,review_key:t,liker_id:o});return{liked:!c}}const n=X(Ze(a))||{},i=Array.isArray(n[t])?n[t]:[],l=i.indexOf(o);return l>=0?i.splice(l,1):i.push(o),n[t]=i,Ce(Ze(a),n),{liked:l<0}}catch{return{liked:r}}}async function ia(e,t,a,r){const o=String(e||""),n=String(r||"").trim().slice(0,1e3),i=String(a).trim().slice(0,40)||"Guest";if(!n)return null;try{if(await tt()==="server"){const{data:d,error:m}=await C.from("review_comments").insert({property_id:o,review_key:t,author:i,body:n}).select("id, author, body, created_at").single();if(!m&&d)return d}}catch{}const l={id:"c_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,8),author:i,body:n,created_at:new Date().toISOString()},s=X(Qe(o))||{},c=Array.isArray(s[t])?s[t]:[];return c.push(l),s[t]=c,Ce(Qe(o),s),l}const pe=e=>`kco_guest_reviews_${e}`;function na(e){const t=String(e||""),a=X(pe(t));return Array.isArray(a)?a.filter(r=>r&&r.rating>=1&&r.rating<=5&&(r.text||r.comment)).map(r=>({...r,_local:!0,comment:r.comment||r.text,text:r.text||r.comment,name:r.name||"",rating:Math.max(1,Math.min(5,Math.round(Number(r.rating)||0)))})).sort((r,o)=>new Date(o.created_at||0)-new Date(r.created_at||0)):[]}function la(e,t){const a=String(e||""),r=Math.max(1,Math.min(5,Math.round(Number(t&&t.rating)||0))),o=String(t&&t.text||"").trim().slice(0,2e3),n=String(t&&t.name||"").trim().slice(0,40);if(!r||!o)return null;const i={id:"gv_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,8),rating:r,text:o,comment:o,name:n,created_at:new Date().toISOString(),_local:!0},l=X(pe(a));return Array.isArray(l)?(l.push(i),Ce(pe(a),l),i):null}function ca(e,t){const a=String(e||""),r=Math.max(1,Math.min(5,Math.round(Number(t&&t.rating)||0))),o=String(t&&t.text||"").trim(),n=X(pe(a));if(!Array.isArray(n))return;const i=n.filter(l=>!(Math.round(Number(l.rating))===r&&String(l.text||"").trim()===o));i.length!==n.length&&Ce(pe(a),i)}const D="/fallback.svg";let pt=!1;function da(){if(pt)return;pt=!0;const e=document.createElement("style");e.id="kco-temu-effects",e.textContent=`
    @keyframes kcoSalePulse{
      0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(239,68,68,.55)}
      50%{transform:scale(1.06);box-shadow:0 0 0 10px rgba(239,68,68,0)}
    }
    @keyframes kcoGlow{
      0%,100%{box-shadow:0 0 6px 1px rgba(59,130,246,.35);border-color:rgba(59,130,246,.5)}
      50%{box-shadow:0 0 16px 4px rgba(59,130,246,.5);border-color:rgba(59,130,246,.85)}
    }
    @keyframes kcoBlinkSoft{0%,100%{opacity:1}50%{opacity:.55}}
    @keyframes kcoHurry{
      0%,100%{transform:scale(1)}
      50%{transform:scale(1.03);background-color:rgba(251,191,36,.18)}
    }
    @keyframes kcoShimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
    @keyframes kcoLiveDot{0%,100%{opacity:.35;transform:scale(.85)}50%{opacity:1;transform:scale(1.25)}}
    .kco-sale-pulse{animation:kcoSalePulse 1.6s ease-in-out infinite}
    .kco-glow{animation:kcoGlow 2.2s ease-in-out infinite}
    .kco-blink-soft{animation:kcoBlinkSoft 1.8s ease-in-out infinite}
    .kco-hurry{animation:kcoHurry 1.4s ease-in-out infinite}
    .kco-shimmer{
      background:linear-gradient(90deg,rgba(255,255,255,0) 0,rgba(255,255,255,.55) 50%,rgba(255,255,255,0) 100%);
      background-size:200% 100%;animation:kcoShimmer 2.6s linear infinite
    }
    .kco-live-dot{width:8px;height:8px;border-radius:99px;background:#22c55e;display:inline-block;animation:kcoLiveDot 1.1s ease-in-out infinite}
  `,document.head.appendChild(e)}da();let P={likes:new Map,liked:new Set,comments:new Map},G=null,ue="",K=[],de=!1,me="";function St(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function Ae(e){return Array.isArray(e)&&e.length>0?e:[D]}function W(e){return!e||typeof e!="string"?!1:/^data:video\//i.test(e)?!0:e.startsWith("blob:")?!1:/\.(mp4|webm|mov|m4v|avi|mkv|ogv)(\?|#|$)/i.test(e)}function ua(e,t){const a=o=>{if(o.readyState>=2&&o.videoWidth)try{const n=document.createElement("canvas");n.width=o.videoWidth,n.height=o.videoHeight,n.getContext("2d").drawImage(o,0,0);const i=n.toDataURL("image/jpeg",.8);i&&i.length>100&&(e.poster=i)}catch{}},r=document.createElement("video");r.muted=!0,r.playsInline=!0,r.preload="auto",r.src=t,r.addEventListener("loadeddata",()=>a(r),{once:!0}),r.addEventListener("error",()=>{},{once:!0}),r.load(),setTimeout(()=>{try{r.removeAttribute("src"),r.load()}catch{}},12e3)}function _t(e,t="w-4 h-4"){const a=Math.round(Number(e)||0);return[1,2,3,4,5].map(r=>`<i data-lucide="star" class="${t} ${r<=a?"fill-amber-400 text-amber-400 drop-shadow-[0_1px_4px_rgba(0,0,0,.25)]":"text-gray-300"}"></i>`).join("")}function re(e,t,a="blue"){const r={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"};return`
    <div class="flex items-center gap-2.5 mb-4">
      <div class="shrink-0 w-10 h-10 rounded-xl ${r[a]||r.blue} flex items-center justify-center"><i data-lucide="${e}" class="w-5 h-5"></i></div>
      <h3 class="text-lg font-black text-gray-900 tracking-tight">${t}</h3>
    </div>`}function pa(e){return`
    <div class="bg-gray-50 border border-gray-100 rounded-xl p-3.5">
      <div class="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5"><i data-lucide="${e.icon}" class="w-3.5 h-3.5"></i>${e.label}</div>
      <div class="text-gray-900 font-bold text-[15px] leading-snug">${e.html||u(e.value)}</div>
    </div>`}function ce(e,t,a,r="blue"){return!a||!a.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${re(t,e,r)}
      ${Lt(a)}
    </div>`}function Lt(e){return!e||!e.length?"":`<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">${e.map(pa).join("")}</div>`}function Be(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${re("list-checks","Features & Amenities","emerald")}
      ${It(e)}
    </div>`}function It(e){return!e||!e.length?"":`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
            <span class="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
            <span class="text-[15px] text-gray-800 font-medium">${u(t)}</span>
          </div>`).join("")}
      </div>`}function ma(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${re("star","Highlights","amber")}
      ${Et(e)}
    </div>`}function Et(e){return!e||!e.length?"":`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-start gap-2.5 bg-amber-50/60 border border-amber-100 rounded-xl px-3.5 py-2.5">
            <i data-lucide="badge-check" class="w-4 h-4 text-amber-500 mt-0.5 shrink-0"></i>
            <span class="text-[15px] text-gray-800 font-medium">${u(t)}</span>
          </div>`).join("")}
      </div>`}function Ye(e,t="emerald"){if(!e||!e.length)return"";const a={emerald:"bg-emerald-100 text-emerald-600",amber:"bg-amber-100 text-amber-600",blue:"bg-blue-100 text-blue-600",violet:"bg-violet-100 text-violet-600",rose:"bg-rose-100 text-rose-600"}[t]||"bg-emerald-100 text-emerald-600";return`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
    ${e.map(r=>`
      <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
        <span class="shrink-0 w-6 h-6 rounded-full ${a} flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
        <span class="text-[15px] text-gray-800 font-medium">${u(String(r))}</span>
      </div>`).join("")}
  </div>`}function ba(e){const t=e.floor_plan&&typeof e.floor_plan=="object"?e.floor_plan:{},a=Array.isArray(t.rooms)?t.rooms:[];if(!(t.image||t.levels||t.total_area||a.length))return"";const o=a.length?`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-3">
      ${a.map(i=>{const l=typeof i=="string"?i:i.name||"Room",s=typeof i=="string"?"":i.dimensions||"";return`<div class="bg-gray-50 border border-gray-100 rounded-xl p-3">
          <p class="text-[15px] font-bold text-gray-900">${u(String(l))}</p>
          ${s?`<p class="text-xs text-gray-500 mt-0.5">${u(String(s))}</p>`:""}
        </div>`}).join("")}
    </div>`:"",n=[t.levels?`Levels: ${t.levels}`:"",t.total_area?`Total area: ${t.total_area}`:""].filter(Boolean);return`
    <div class="space-y-3">
      ${t.image?`<img src="${u(String(t.image))}" alt="Floor plan" class="w-full rounded-xl border border-gray-200 bg-gray-50" loading="lazy" onerror="this.style.display='none'">`:""}
      ${n.length?`<div class="flex flex-wrap gap-2">${n.map(i=>`<span class="inline-flex items-center gap-1 text-xs font-bold text-gray-700 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-full">${u(String(i))}</span>`).join("")}</div>`:""}
      ${o}
    </div>`}function ha(e){const t=Array.isArray(e.legal_info)?e.legal_info:[],a=e.risk_notes;if(!t.length&&!a)return"";const r={"Seller provided":"bg-amber-50 text-amber-700 border-amber-200",Documented:"bg-blue-50 text-blue-700 border-blue-200","Not verified":"bg-gray-50 text-gray-600 border-gray-200"};return`
    <div class="space-y-2.5">
      ${t.map(n=>{const i=typeof n=="string"?n:n.label||"",l=typeof n=="string"?"":n.value||"",s=typeof n=="string"?"Not verified":n.source||"Not verified",c=r[s]||r["Not verified"],d=`${i}${l?": "+l:""}`;return`<div class="flex items-center justify-between gap-3 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
      <span class="text-[15px] text-gray-800 font-medium">${u(d)}</span>
      <span class="shrink-0 text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full border ${c}">${u(s)}</span>
    </div>`}).join("")||""}
      ${a?`<div class="bg-amber-50/60 border border-amber-200 rounded-xl p-3.5"><p class="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Condition / Risk Notes</p><p class="text-sm text-gray-700 leading-relaxed">${u(String(a))}</p></div>`:""}
      <p class="text-xs text-gray-400 leading-relaxed"><strong class="text-gray-500">Note:</strong> Legal and ownership details are provided by the seller for information only and have not been independently verified by the marketplace. Always confirm with the seller or a qualified professional before purchase.</p>
    </div>`}function fa(e){const t=e.nearby_area&&typeof e.nearby_area=="object"?e.nearby_area:{},a=[{icon:"school",label:"Schools",items:t.schools},{icon:"cross",label:"Hospitals & Clinics",items:t.hospitals},{icon:"shopping-cart",label:"Shopping & Markets",items:t.shopping},{icon:"bus",label:"Transportation",items:t.transportation}].filter(o=>Array.isArray(o.items)&&o.items.length),r=Array.isArray(t.distances)?t.distances:[];return!a.length&&!r.length?"":`
    <div class="space-y-3">
      ${a.map(o=>`
        <div>
          <p class="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5"><i data-lucide="${o.icon}" class="w-3.5 h-3.5"></i> ${o.label}</p>
          <div class="flex flex-wrap gap-2">
            ${o.items.map(n=>`<span class="text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-full">${u(String(n))}</span>`).join("")}
          </div>
        </div>`).join("")}
      ${r.length?`<div><p class="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5"><i data-lucide="navigation" class="w-3.5 h-3.5"></i> Distances</p><div class="flex flex-wrap gap-2">${r.map(o=>`<span class="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full">${u(String(o))}</span>`).join("")}</div></div>`:""}
    </div>`}function ya(e){const t=e.verification_status||"Not verified",a={Verified:"bg-emerald-50 text-emerald-700 border-emerald-200","Pending verification":"bg-amber-50 text-amber-700 border-amber-200","Not verified":"bg-gray-50 text-gray-600 border-gray-200"}[t]||"bg-gray-50 text-gray-600 border-gray-200",r=Array.isArray(e.documents)?e.documents:[],o=[{icon:"shield-check",label:"Verification",value:t,badge:a},e.verification_date?{icon:"calendar-check",label:"Verification Date",value:e.verification_date}:null,e.inspection_info?{icon:"clipboard-check",label:"Inspection",value:e.inspection_info}:null].filter(Boolean);return`
    <div class="space-y-3">
      ${o.length?`<div class="space-y-2.5">${o.map(n=>`
        <div class="flex items-center justify-between gap-3 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
          <span class="flex items-center gap-2 text-sm text-gray-800 font-medium"><i data-lucide="${n.icon}" class="w-4 h-4 text-blue-500"></i> ${n.label}</span>
          ${n.badge?`<span class="shrink-0 text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full border ${n.badge}">${u(String(n.value))}</span>`:`<span class="text-sm text-gray-700 font-semibold">${u(String(n.value))}</span>`}
        </div>`).join("")}</div>`:""}
      ${r.length?`<div><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Documents</p><div class="space-y-1.5">${r.map(n=>`<a href="${u(String(n))}" target="_blank" rel="noopener" class="flex items-center gap-2 text-xs font-bold text-blue-600 hover:underline"><i data-lucide="file-text" class="w-3.5 h-3.5"></i> ${u(String(n))}</a>`).join("")}</div></div>`:""}
      <div class="flex flex-wrap gap-2">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full"><i data-lucide="lock" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Payment Protection</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-violet-700 bg-violet-50 border border-violet-200 px-2.5 py-1.5 rounded-full"><i data-lucide="file-check" class="w-3.5 h-3.5"></i> Purchase Agreement</span>
      </div>
      <p class="text-xs text-gray-400 leading-relaxed">Full purchase and booking terms are confirmed with the seller before any payment is completed.</p>
    </div>`}function ga(e){if(e.listing_type!=="property")return"";const t=[],a=Ye(e.interior_features,"emerald"),r=Ye(e.exterior_features,"blue"),o=Ye(e.home_systems,"violet"),n=[a?`<div class="mb-4"><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Interior Features</p>${a}</div>`:"",r?`<div class="mb-4"><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Exterior Features</p>${r}</div>`:"",o?`<div><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Home Systems</p>${o}</div>`:""].filter(Boolean).join("");n&&t.push(N("acc-features","home","Features & Home Systems",n,!1,"emerald"));const i=ba(e);i&&t.push(N("acc-floorplan","layout-dashboard","Floor Plan",i,!1,"violet"));const l=ha(e);l&&t.push(N("acc-legal","scale","Legal & Financial",l,!1,"amber"));const s=fa(e);s&&t.push(N("acc-nearby","map-pin","Nearby Area",s,!1,"rose"));const c=ya(e);return c&&t.push(N("acc-trust","shield-check","Verification & Trust",c,!1,"blue")),t.join("")}function p(e,t,a=""){const r=e[t];if(r!=null&&String(r).trim()!=="")return r;const o=e.specifications&&typeof e.specifications=="object"?e.specifications:{};return o[t]!=null?o[t]:a}function at(e){if(e==null)return!1;const t=String(e).trim();return!(!t||/requires?\s+verification|not\s+provided|not\s+specified|not\s+available|not\s+found|not\s+visible|not\s+applicable|not\s+listed|\bunknown\b|undisclosed|no\s+data|full\s+street\s+address|postal\s+code|local\s+area\s+details|to\s+be\s+(?:confirmed|verified|announced|updated)|^\s*n\/?a\s*$|^\s*none\s*$|^\s*null\s*$|^\s*-{1,}\s*$/i.test(t))}function rt(...e){const t=e.map(a=>a==null?"":String(a).trim()).filter(a=>a&&at(a));return t.length?"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(t.join(", ")):""}function V(e,t){const a=e==null?"":String(e).trim();if(!a)return"";if(!at(a))return`<span class="text-[15px] text-gray-400 font-semibold" title="Requires verification">${u(a)}</span>`;const r=rt(...t);return r?`<a href="${r}" target="_blank" rel="noopener" class="inline-flex flex-wrap items-center gap-1 text-[15px] text-blue-600 font-bold hover:text-blue-700 underline decoration-blue-300 underline-offset-2" title="Open in Google Maps">${u(a)} <i data-lucide="external-link" class="w-3.5 h-3.5 shrink-0"></i></a>`:`<span class="text-[15px] text-gray-400 font-semibold" title="Requires verification">${u(a)}</span>`}function xa(e){const t=[];for(const a of["address","neighborhood","product_location","location","town","city","state","country"]){const r=p(e,a);at(r)&&t.push(String(r).trim())}return t.join(", ")}const va=new Set(["Cars","Cars & Vehicles","Trucks","Buses","Buses & Coaches","Motorhomes","Motorcycles","Marine & Boating","RV & Camper Accessories","Vehicles","Luxury Cars","Commercial Vehicles"]);function be(e){return e.listing_type==="vehicle"||va.has(e.category)}function wa(e){const t=String(p(e,"wheels_tires")||"");if(!t.trim())return"";t.split(",").map(o=>o.trim()).filter(Boolean);const a=String(t).match(/(?:[0-9]{2,4}\s*(?:\/[0-9]{2,3}\s*)?(?:R|ZR)[0-9]{1,2}|[0-9]{1,2}(?:\.|x|X)[0-9]{1,2}(?:\.|x|X)-?[0-9]+|[0-9]{2,3}\s*(?:\.[0-9]{1,2})?\s*(?:inches|inch|in|"))/),r=a?a[0]:"";return`
    <div class="flex flex-col sm:flex-row items-center gap-5 bg-gradient-to-br from-amber-50 via-white to-orange-50 border border-amber-200 rounded-2xl p-5">
      <div class="relative shrink-0 w-36 h-36 sm:w-40 sm:h-40">
        <div class="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-gray-950 shadow-xl" style="background:radial-gradient(circle at 35% 30%, #4b5563, #111827 70%)"></div>
        <div class="absolute inset-[26%] rounded-full bg-white shadow-inner flex items-center justify-center">
          <div class="w-full h-full rounded-full border-[10px] border-gray-200"></div>
        </div>
        <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-black tracking-widest text-gray-500 uppercase">Tire</span>
      </div>
      <div class="flex-1 min-w-0 text-center sm:text-left">
        <p class="text-xs font-black text-amber-700 uppercase tracking-wide mb-1">Wheels & Tires</p>
        <p class="text-lg font-black text-gray-900 leading-snug">${u(t)}</p>
        ${r?`<div class="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-white border border-amber-200 px-3 py-1.5 rounded-full"><i data-lucide="ruler" class="w-3.5 h-3.5 text-amber-600"></i> Size: ${u(r)}</div>`:""}
        <div class="mt-3 rounded-xl bg-white/80 border border-amber-200 p-3.5 text-left">
          <p class="text-[11px] font-black text-gray-600 uppercase tracking-wide mb-1.5">What this means for you</p>
          <ul class="space-y-1 text-xs text-gray-600 leading-relaxed">
            <li class="flex items-start gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0"></i><span>Confirms the exact tire and wheel fitment — what the vehicle wears and whether spares match.</span></li>
            <li class="flex items-start gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0"></i><span>Fresh tires mean no surprise costs when you drive away — worn ones are called out up front.</span></li>
            <li class="flex items-start gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0"></i><span>Always confirm tread and condition in person or with the seller's inspection report.</span></li>
          </ul>
        </div>
      </div>
    </div>`}function ka(e){if(!be(e))return"";const t=[],a=(m,h,b)=>b!=null&&String(b)!==""?`<div class="bg-gray-50 border border-gray-100 rounded-xl p-3.5"><div class="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5"><i data-lucide="${m}" class="w-3.5 h-3.5"></i>${h}</div><div class="text-gray-900 font-bold text-[15px] leading-snug">${u(String(b))}</div></div>`:"",r=(m,h,b)=>b?`
    <div class="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3.5">
      <span class="shrink-0 w-7 h-7 rounded-lg bg-white border border-gray-100 flex items-center justify-center"><i data-lucide="${m}" class="w-4 h-4 text-emerald-600"></i></span>
      <div class="min-w-0"><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">${h}</p><p class="text-sm text-gray-700 leading-relaxed">${u(String(b))}</p></div>
    </div>`:"",o=[a("badge-check","Condition",p(e,"condition")),a("user-round","Previous Owners",p(e,"previous_owners")),a("clipboard-check","Registration",p(e,"registration_status")),a("shield-check","Inspection",p(e,"inspection_status")),a("badge-dollar-sign","Warranty",p(e,"warranty"))].filter(Boolean).join(""),n=[r("scroll-text","Ownership History",p(e,"ownership_history")),r("wrench","Service & Maintenance History",p(e,"service_history")),r("alert-triangle","Accident / Damage History",p(e,"accident_history"))].filter(Boolean).join("");(o||n)&&t.push(N("acc-vh-cond","shield-check","Condition & History",`
      ${o?`<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">${o}</div>`:""}
      ${n}`.trim(),!0,"emerald"));const i=wa(e);i&&t.push(N("acc-vh-wheels","circle-dot","Wheels & Tires",i,!0,"amber"));const l=(m,h,b)=>Array.isArray(m)&&m.length?`
    <div><p class="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5"><i data-lucide="${h}" class="w-3.5 h-3.5"></i> ${b}</p>
    <div class="flex flex-wrap gap-2">${m.map(x=>`<span class="text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-full">${u(String(x))}</span>`).join("")}</div></div>`:"",s=[l(p(e,"safety_features"),"shield","Safety Features"),l(p(e,"driver_assistance"),"radar","Driver Assistance"),l(p(e,"technology"),"cpu","Technology & Infotainment"),l(p(e,"interior"),"armchair","Interior & Comfort")].filter(Boolean).join("");s&&t.push(N("acc-vh-safety","cpu","Safety & Technology",s,!1,"rose"));const c=[a("ruler","Dimensions (L x W x H)",p(e,"dimensions")),a("package","Cargo Capacity",p(e,"cargo_capacity")),a("truck","Towing Capacity",p(e,"towing_capacity")),a("fuel","Fuel Economy",p(e,"fuel_economy")),a("users","Seats",p(e,"seating_capacity")),a("door-open","Doors",p(e,"doors"))].filter(Boolean).join("");c&&t.push(N("acc-vh-dims","ruler","Dimensions & Capacity",`<div class="grid grid-cols-2 sm:grid-cols-3 gap-3">${c}</div>`,!1,"sky"));const d=p(e,"location")||[p(e,"city"),p(e,"state"),p(e,"country")].filter(Boolean).join(", ");if(d){const m=rt(d);t.push(N("acc-vh-loc","map-pin","Location & Availability",`
      <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3.5">
        <span class="shrink-0 w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center"><i data-lucide="map-pin" class="w-5 h-5"></i></span>
        <div class="min-w-0"><p class="text-[15px] text-gray-900 font-bold">${V(d,[d])}</p>
        ${m?`<a href="${m}" target="_blank" rel="noopener" class="text-xs font-bold text-blue-600 hover:underline">Open in Google Maps</a>`:""}</div>
      </div>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <div class="bg-emerald-50 border border-emerald-100 rounded-xl p-3"><p class="text-xs text-gray-500">Availability</p><p class="text-sm font-black text-emerald-700">${u(e.availability_status||(e.stock_quantity>0?"In Stock":"Available"))}</p></div>
        <div class="bg-gray-50 border border-gray-100 rounded-xl p-3"><p class="text-xs text-gray-500">Listing Location</p><p class="text-sm font-black text-gray-900">${u(String(p(e,"location")||"Marketplace"))}</p></div>
      </div>`,!1,"sky"))}return t.join("")}function $a(e){const t=p(e,"seller_name")||p(e,"contact_name"),a=p(e,"seller_phone")||p(e,"contact_phone"),r=p(e,"seller_email")||p(e,"contact_email"),o=p(e,"location"),n=[];return t&&n.push({icon:"user-round",label:"Company / Contact",value:t}),a&&n.push({icon:"phone",label:"Phone / WhatsApp",value:a,link:"tel:"+a.replace(/[^0-9+]/g,"")}),r&&n.push({icon:"mail",label:"Email",value:r,link:"mailto:"+r}),o&&n.push({icon:"map-pin",label:"Location",html:V(o,[o])}),`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${re("contact-round","Buyer Information","emerald")}
      <div class="space-y-2.5">
        ${n.map(i=>`
          <div class="flex items-center justify-between gap-3 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
            <span class="flex items-center gap-2 text-sm text-gray-800 font-bold"><i data-lucide="${i.icon}" class="w-4 h-4 text-emerald-600"></i> ${i.label}</span>
            ${i.html?i.html:i.link?`<a href="${u(i.link)}" class="text-sm text-blue-600 font-bold hover:underline">${u(String(i.value))}</a>`:`<span class="text-sm text-gray-700 font-semibold">${u(String(i.value))}</span>`}
          </div>`).join("")}
        <div class="bg-emerald-50 border border-emerald-100 rounded-xl p-3.5 flex items-start gap-2.5">
          <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600 mt-0.5 shrink-0"></i>
          <p class="text-xs text-gray-600 leading-relaxed">Buy with confidence — secure checkout, payment protection and verified contact details. Questions about this ${e.listing_type==="property"?"property":"vehicle"}? Reach out before purchase, or open a live chat any time.</p>
        </div>
      </div>
    </div>`}function N(e,t,a,r,o=!1,n="blue"){const i={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"},l=i[n]||i.blue;return`
    <div class="bg-white border border-gray-200 rounded-2xl mb-3 overflow-hidden shadow-sm">
      <button type="button" data-acc="${e}" class="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left hover:bg-gray-50 transition active:bg-gray-100">
        <span class="flex items-center gap-3 min-w-0">
          <span class="shrink-0 w-10 h-10 rounded-xl ${l} flex items-center justify-center"><i data-lucide="${t}" class="w-5 h-5"></i></span>
          <span class="text-[15px] sm:text-base font-black text-gray-900 tracking-tight">${a}</span>
        </span>
        <span data-acc-icon="${e}" class="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${o?"rotate-180":""}">
          <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500"></i>
        </span>
      </button>
      <div data-acc-body="${e}" class="px-4 sm:px-5 pb-5 ${o?"":"hidden"}">
        ${r}
      </div>
    </div>`}window.toggleAccordion=e=>{const t=document.querySelector(`[data-acc-body="${e}"]`),a=document.querySelector(`[data-acc-icon="${e}"]`);!t||!a||(t.classList.toggle("hidden"),a.classList.toggle("rotate-180"))};function Sa(){return`
    <div class="space-y-3 text-[15px] text-gray-700 leading-relaxed">
      <p class="flex items-start gap-2.5"><i data-lucide="truck" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Shipping methods.</strong> Standard delivery is <strong>free worldwide</strong> (3–7 business days). Express (2–4 business days, $25) and Priority (1–2 business days, $50) are available at checkout.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Courier partners.</strong> We ship with trusted international couriers — DHL, FedEx, UPS and EMS. Every shipment gets a tracking number.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="clock" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Processing time.</strong> Orders are processed within 1–2 business days after payment confirmation. Bank-transfer orders are processed once the receipt is verified.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="globe" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">International delivery.</strong> We ship to over 200 countries. Customs duties and import taxes may apply and are the buyer's responsibility.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="search-check" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Tracking.</strong> You'll receive a shipping confirmation email with your tracking number. You can also track orders from your account dashboard.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="badge-help" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span>Questions? <a href="/shipping-policy.html" class="text-blue-600 font-bold hover:underline">Read the full Shipping Policy</a>.</span></p>
    </div>`}function _a(){return`
    <div class="space-y-3 text-[15px] text-gray-700 leading-relaxed">
      <p class="flex items-start gap-2.5"><i data-lucide="rotate-ccw" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">14-day easy returns.</strong> Items may be returned within 14 days of delivery. Refund requests must be submitted within 30 days of the order date.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="calendar-x" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Cancellation before shipment.</strong> Cancel before your order ships and a full refund is issued within 5–7 business days.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package-x" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Damaged or defective.</strong> If your item arrives damaged, contact us within 7 days with photos — we arrange a replacement or full refund, including return shipping.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package-search" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Non-delivery.</strong> If your order doesn't arrive within the estimated window plus 14 days, we investigate with the carrier and refund or resend at no cost.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="wallet" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Refund processing.</strong> Approved refunds are processed within 5–7 business days. Card refunds take 5–10 business days to appear, bank transfers 7–14, mobile money 3–5.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="circle-slash" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Non-refundable.</strong> Final-sale items, digital products, and items used or damaged by the customer are not eligible for refunds.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="badge-help" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span>Questions? <a href="/refund-policy.html" class="text-blue-600 font-bold hover:underline">Read the full Return &amp; Refund Policy</a>.</span></p>
    </div>`}function La(){const e=[{q:"How do I track my order?",a:"Once your order ships you'll get a confirmation email with your tracking number. You can also track it anytime from your account dashboard under Shipping & Delivery."},{q:"Is shipping really free worldwide?",a:"Yes. Standard shipping to any country is free on every order. Express and Priority upgrades are available at checkout if you need it sooner."},{q:"How long does delivery take?",a:"Standard delivery takes 3–7 business days. Express takes 2–4 business days and Priority 1–2 business days. Processing adds 1–2 business days after payment is confirmed."},{q:"How do returns work?",a:"Items can be returned within 14 days of delivery. Refund requests must be submitted within 30 days of the order date — see the Return &amp; Refund Policy section above."}],t=[{q:"Is my payment secure?",a:"Yes. All payments are processed over SSL-encrypted connections through certified payment gateways. Your payment details are never stored on our servers in plain text."},{q:"Can I cancel my order before it ships?",a:"Absolutely. Cancel before shipment and a full refund is issued within 5–7 business days to your original payment method."},{q:"What if my item arrives damaged?",a:"Contact us within 7 days of delivery with photos and a description. We'll arrange a replacement or a full refund — including return shipping costs."},{q:"How do I contact customer support?",a:"Email us at support@weverseonlineshop.com or use the Contact page. Our team reviews every message within 48 hours."},{q:"Do you ship to my country?",a:"We ship to over 200 countries worldwide. Customs duties and import taxes, where applicable, are the buyer's responsibility."},{q:"How do I request a refund?",a:"Email support@weverseonlineshop.com with your order number, the reason, and any supporting documentation. Approved refunds are processed within 5–7 business days."}],a=r=>`
    <div class="border border-gray-100 rounded-xl overflow-hidden">
      <button type="button" data-acc="faq" class="faq-q w-full flex items-center justify-between gap-3 p-3.5 text-left hover:bg-gray-50 transition">
        <span class="text-[14px] font-bold text-gray-900">${u(r.q)}</span>
        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300"></i>
      </button>
      <div class="faq-a hidden px-3.5 pb-3.5 text-sm text-gray-600 leading-relaxed">${u(r.a)}</div>
    </div>`;return`
    <div class="space-y-2">
      ${e.map(a).join("")}
      <div class="faq-extra hidden space-y-2">${t.map(a).join("")}</div>
      <button type="button" id="faq-show-more" class="mt-2 w-full inline-flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-blue-600 font-bold py-2.5 rounded-xl text-sm transition">
        Show more questions <i data-lucide="chevron-down" class="w-4 h-4"></i>
      </button>
    </div>`}function Ia(e){const t=(e.description||"").trim(),a="text-[15px] sm:text-[16px] text-gray-900 leading-[1.75] mb-3";if(t.length>140)return t.split(/\r?\n+/).filter(Boolean).map(g=>`<p class="${a}">${u(g)}</p>`).join("");(e.title||"this item").trim();const r=String(e.category||e.listing_type||"item").toLowerCase(),o=(e.brand||"").trim(),n=(e.color||"").trim(),i=(e.condition||"").trim(),l=(e.country||"").trim(),s=Array.isArray(e.features)&&e.features.length?e.features.map(g=>typeof g=="string"?g.trim():(g&&g.label||"").trim()).filter(Boolean):[],c=Array.isArray(e.tags)&&e.tags.length?e.tags.map(g=>typeof g=="string"?g.trim():String(g).trim()).filter(Boolean):[];let d=St(String(e.property_id||e.id||"")+"::desc");const m=()=>{d|=0,d=d+1831565813|0;let g=Math.imul(d^d>>>15,1|d);return g=g+Math.imul(g^g>>>7,61|g)^g,((g^g>>>14)>>>0)/4294967296},h=g=>g[Math.floor(m()*g.length)%g.length],b=h(["This "+r+" is built around one simple idea: you get something genuinely useful that holds up to everyday use.","A practical, well-made "+r+" that fits right into your routine without overcomplicating things.","Thoughtfully put together and easy to live with, this "+r+" does exactly what it should, without fuss.","Made to be used, not just looked at — a dependable "+r+" that earns its place."]),x=h(["The materials and finish feel solid in person, so you can count on it for the long run.","Construction is clean and sturdy, and the details are finished with real care.","It is well assembled and holds up to regular use, with quality you can feel right away."]),v=h(["It is easy to use from the moment it arrives, with nothing complicated to figure out.","Everything is straightforward and practical — set it up and it just works.","Designed to be convenient day to day, it is simple to handle and a pleasure to use."]);let y=[];o&&y.push(`brand: ${o}`),i&&y.push(i.toLowerCase()==="new"?"brand new condition":`${i.toLowerCase()} condition`),n&&y.push(`colour: ${n}`),l&&y.push(`shipping from ${l}`),y=y.filter(Boolean);const k=y.length?`You can expect ${y.slice(0,3).join(" · ")}.`:"",w=c.length?c.slice(0,6).map(g=>`<span class="inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 mr-1.5 mb-1.5">${u(g)}</span>`).join(""):"",E=s.length?`
      <div class="mt-4">
        <h4 class="flex items-center gap-2 text-[13px] font-black uppercase tracking-wide text-gray-900 mb-2.5">
          <i data-lucide="list-checks" class="w-4 h-4 text-blue-500"></i> Key features
        </h4>
        <ul class="space-y-2.5">
          ${s.slice(0,6).map(g=>`
            <li class="flex items-start gap-2.5">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-blue-500 shrink-0 mt-0.5"></i>
              <span class="text-[15px] sm:text-[16px] text-gray-900 leading-relaxed">${u(g)}</span>
            </li>`).join("")}
        </ul>
      </div>`:"";return`
    <h4 class="flex items-center gap-2 text-[13px] font-black uppercase tracking-wide text-gray-900 mb-3">
      <i data-lucide="file-text" class="w-4 h-4 text-blue-500"></i> About this ${r}
    </h4>
    <p class="${a}">${u(b)}</p>
    <p class="${a}">${u(x)} ${u(v)}</p>
    ${t.trim()?`<p class="${a}">${u(t.trim())}</p>`:""}
    ${k?`<p class="${a}"><span class="font-bold text-gray-900">Details:</span> ${u(k)}</p>`:""}
    ${E}
    ${w?`<div class="mt-3 pt-3">${w}</div>`:""}
    <p class="${a} mt-3 border-t border-slate-100 pt-3">${u(h(["Order with confidence — the Weverse Online Shop team is here if you need anything along the way.","A dependable everyday choice, backed by our easy-returns promise if it is not quite right for you.","Great value for what you get, delivered to your door with secure checkout and helpful support."]))}</p>`}function qe(e,t,a,r,o,n=""){const i=e.listing_type==="property",l=`
    ${Ia(e)}
    ${o||""}
    ${Et(r)}
    ${It(a)}`;return`
    ${N("acc-details","file-text",i?"Property Details":be(e)?"Vehicle Details":"Product Details",l,!0,"blue")}
    ${N("acc-specs","settings-2",i?"Property Specifications":be(e)?"Vehicle Specifications":"Specifications",Lt(t)||'<p class="text-sm text-gray-500">No specifications available for this listing.</p>',!0,"violet")}
    ${n||""}
    ${N("acc-shipping","truck","Shipping Information",Sa(),!1,"emerald")}
    ${N("acc-refund","rotate-ccw","Return &amp; Refund Policy",_a(),!1,"rose")}
    ${N("acc-faq","circle-help","Frequently Asked Questions",La(),!1,"amber")}`}function je(){const e=document.getElementById("details-content");if(!e)return;e.querySelectorAll("[data-acc]").forEach(a=>{a.dataset.bound||(a.dataset.bound="1",a.addEventListener("click",()=>{const r=a.dataset.acc,o=e.querySelector(`[data-acc-body="${r}"]`),n=e.querySelector(`[data-acc-icon="${r}"]`);!o||!n||(o.classList.toggle("hidden"),n.classList.toggle("rotate-180"),window.lucide&&lucide.createIcons())}))}),e.querySelectorAll(".faq-q").forEach(a=>{a.dataset.bound||(a.dataset.bound="1",a.addEventListener("click",()=>{const r=a.querySelector("i, svg"),o=a.nextElementSibling;o&&(o.classList.toggle("hidden"),r&&r.classList.toggle("rotate-180"))}))});const t=e.querySelector("#faq-show-more");t&&!t.dataset.bound&&(t.dataset.bound="1",t.addEventListener("click",()=>{const a=e.querySelector(".faq-extra");if(!a)return;a.classList.toggle("hidden");const r=t.querySelector("i, svg");r&&r.classList.toggle("rotate-180"),t.innerHTML=a.classList.contains("hidden")?'Show more questions <i data-lucide="chevron-down" class="w-4 h-4"></i>':'Show fewer questions <i data-lucide="chevron-up" class="w-4 h-4"></i>',window.lucide&&lucide.createIcons()}))}function Le(e){if(!e)return"";const t=new Date(e);return!t.getTime()||isNaN(t.getTime())?"":t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function Ea(e){if(typeof e.likes=="number"&&e.likes>0)return e.likes;const t=String(e.text||e.comment||e.created_at||e.name||"");let a=2166136261;for(let r=0;r<t.length;r++)a^=t.charCodeAt(r),a=Math.imul(a,16777619);return 2+(a>>>0)%140}function mt(e){return e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"k":String(e)}function Ma(e){return`
    <div class="flex gap-2.5 pl-0.5">
      <div class="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center text-[11px] font-black uppercase shadow-sm">${u(String(e.author||"Guest").trim().charAt(0).toUpperCase()||"G")}</div>
      <div class="min-w-0 flex-1 rounded-xl bg-gray-50 border border-gray-100 px-3 py-2">
        <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <span class="text-xs font-bold text-gray-900">${u(e.author||"Guest")}</span>
          <span class="text-[11px] text-gray-400">&middot; ${Le(e.created_at)}</span>
        </div>
        <p class="text-sm text-gray-700 mt-0.5 leading-relaxed break-words">${u(e.body||"")}</p>
      </div>
    </div>`}function Ca(e){const t=e.author_name||e.name||e.profiles?.full_name||"Anonymous",a=u(t.trim().charAt(0).toUpperCase()||"A"),r=e.handle?`<span class="text-xs font-semibold text-gray-400">${u(e.handle)}</span>`:"",o=Le(e.date||e.created_at),n=o?`<span class="text-xs text-gray-400">&middot; ${o}</span>`:"",i=e.location&&!e.handle?`<span class="text-xs text-gray-400">&middot; ${u(e.location)}</span>`:"",l=e.title?`<p class="text-sm font-bold text-gray-900 mt-1">${u(e.title)}</p>`:"",s=e.verified?'<span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full"><i data-lucide="badge-check" class="w-3 h-3"></i> Verified Purchase</span>':"",c=e.review_photo?`<div class="mt-2.5"><img src="${u(e.review_photo)}" alt="Customer photo" class="w-28 h-28 object-cover rounded-xl border border-gray-200" loading="lazy" onerror="this.style.display='none'"></div>`:"",d=e._key||"",m=P.likes.get(d)||0,h=Ea(e)+m,b=P.liked.has(d),x=P.comments.get(d)||[],v=(typeof e.replies=="number"&&e.replies>0?e.replies:0)+x.length,y=`
    <button type="button" class="review-like-btn btn-press inline-flex items-center gap-1.5 text-xs font-bold transition ${b?"text-[#fe2c55]":"text-gray-500 hover:text-[#fe2c55]"}" data-key="${d}">
      <i data-lucide="heart" class="w-4 h-4 ${b?"fill-[#fe2c55] text-[#fe2c55]":""}"></i> ${mt(h)}
    </button>`,k=`
    <button type="button" class="review-reply-toggle btn-press inline-flex items-center gap-1.5 text-xs font-bold transition ${G===d?"text-blue-600":"text-gray-500 hover:text-blue-500"}" data-key="${d}">
      <i data-lucide="message-circle" class="w-4 h-4"></i> ${v>0?`${mt(v)} replies`:"Reply"}
    </button>`;let w="";G===d&&(w=`
      <div class="review-reply-box mt-3 rounded-xl border border-gray-200 bg-gray-50/80 p-3 space-y-2">
        <input type="text" class="review-reply-name w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" placeholder="Your name (optional)" maxlength="40" value="${u(ue||"")}">
        <textarea class="review-reply-body w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[74px] resize-y" placeholder="Write a comment..." maxlength="1000"></textarea>
        <div class="flex items-center justify-end gap-2">
          <button type="button" class="review-reply-cancel text-xs font-bold text-gray-500 hover:text-gray-700 px-3 py-2 transition">Cancel</button>
          <button type="button" data-key="${d}" class="review-reply-post btn-press inline-flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition shadow-sm shadow-blue-500/20"><i data-lucide="send" class="w-3.5 h-3.5"></i> Comment</button>
        </div>
      </div>`);const E=x.length?`<div class="mt-2.5 space-y-2.5">${x.map(Ma).join("")}</div>`:"";return`
    <div class="flex gap-3 py-4 border-b border-gray-100 last:border-0">
      <button type="button" class="review-avatar shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-black uppercase shadow-sm transition hover:ring-2 hover:ring-blue-200" data-open-reviewer="${d}" title="View ${u(t)}'s profile">${a}</button>
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <button type="button" data-open-reviewer="${d}" class="review-author text-sm font-bold text-gray-900 hover:text-blue-600 hover:underline transition">${u(t)}</button>${r}${n}${i}
          ${s}
        </div>
        <div class="flex gap-0.5 mt-1">${[1,2,3,4,5].map(g=>`<i data-lucide="star" class="w-3.5 h-3.5 ${g<=(e.rating||0)?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}</div>
        ${l}
        <p class="text-[15px] text-gray-700 leading-relaxed mt-1.5">${u(e.text||e.comment||"")}</p>
        ${c}
        <div class="flex items-center gap-5 mt-2.5">
          ${y}
          ${k}
        </div>
        ${w}
        ${E}
      </div>
    </div>`}function Te(e){return`
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
            <h4 class="text-[15px] font-black text-gray-900 mb-0.5 flex items-center gap-2"><i data-lucide="pen-line" class="w-4 h-4 text-blue-500"></i> Write a Review</h4>
            <p class="text-xs text-gray-500 mb-3">Rate the product and share your experience — your review appears right at the top, newest first. No account needed.</p>
            <form id="review-form" class="space-y-3">
              <div class="flex items-center gap-2">
                <label class="text-xs text-gray-700 font-bold uppercase">Rating</label>
                <div id="star-rating" class="flex gap-1">
                  ${[1,2,3,4,5].map(t=>`<button type="button" data-rating="${t}" class="star-btn p-1"><i data-lucide="star" class="w-5 h-5 text-gray-300 hover:text-amber-400 transition"></i></button>`).join("")}
                </div>
              </div>
              <input id="review-name" type="text" maxlength="40" placeholder="Your name (optional)" class="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100">
              <textarea id="review-text" rows="3" placeholder="Share your experience with this product..." class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"></textarea>
              <div id="review-photo-row" class="flex items-center gap-3">
                <label for="review-photo-input" class="inline-flex items-center gap-2 text-xs font-bold text-gray-700 bg-gray-100 border border-gray-200 rounded-xl px-3.5 py-2.5 cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition">
                  <i data-lucide="camera" class="w-4 h-4 text-blue-500"></i> Add a photo
                </label>
                <input id="review-photo-input" type="file" accept="image/*" class="hidden">
                <div id="review-photo-preview" class="flex items-center gap-2"></div>
              </div>
              <div class="flex items-center gap-3">
                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition">Submit Review</button>
                <div id="review-submit-msg" class="text-xs text-emerald-600 font-bold hidden"><i data-lucide="check-circle" class="w-3.5 h-3.5 inline"></i> Thank you! Your review is now live.</div>
                <div id="review-error-msg" class="text-xs text-red-600 font-bold hidden"><i data-lucide="alert-circle" class="w-3.5 h-3.5 inline"></i> <span></span></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>`}function Aa(e,t,a){const r=Math.max(1,a);return`
    <div class="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 items-center bg-gray-50 border border-gray-100 rounded-2xl p-4">
      ${[5,4,3,2,1].map(o=>{const n=t[o]||0,i=Math.round(n/r*100);return`
        <div class="flex items-center gap-1.5 text-xs text-gray-600 font-semibold"><i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>${o}</div>
        <div class="flex items-center gap-2">
          <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden"><div class="h-full bg-amber-400 rounded-full" style="width:${i}%"></div></div>
          <span class="text-[11px] text-gray-400 w-9 text-right tabular-nums">${i}%</span>
        </div>`}).join("")}
    </div>`}function Ba(){const t=new URLSearchParams(window.location.search).get("id");if(t)return t;const a=window.location.pathname.match(/^\/product\/([^/]+)\/?$/);if(a&&a[1])try{return decodeURIComponent(a[1])}catch{return a[1]}return null}const ae=[...vt];function bt(e){return ae.find(t=>t.property_id===e)||null}let Ke=null;function qa(){return Ke||(Ke=Ht(()=>import("./motorhome-data-CupbOvk0.js").then(e=>e.c),[]).then(e=>{const t=e.PRODUCT_EXTRA_LISTINGS||[];for(const a of t)ae.some(r=>r.property_id===a.property_id)||ae.push(a);return ae}).catch(()=>ae)),Ke}function ja(e){const t=document.getElementById("details-content"),a=Ut(e),o=Ae(e.images).map((d,m)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${m===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(d)}">
      <img src="${u(d)}" alt="View ${m+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${D}'">
    </button>`).join(""),n=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cargo Area / Truck Bed","Engine","Wheels / Tires","Additional View"],i=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"package",label:"Payload Capacity",value:e.payload_capacity},{icon:"link",label:"Towing Capacity",value:e.towing_capacity},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(d=>d.value!=null&&d.value!==""&&d.value!=="N/A");Be(e.features);const l=Te();t.innerHTML=`
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
      <div class="relative overflow-hidden rounded-2xl border border-blue-100 mb-6 shadow-sm">
        <div class="absolute inset-0" style="background:
          radial-gradient(760px 300px at 92% -20%, rgba(59,130,246,.16), transparent 60%),
          radial-gradient(600px 260px at 0% 115%, rgba(16,185,129,.12), transparent 55%),
          linear-gradient(180deg,#ffffff 0%,#f7fbff 100%)"></div>
        <div class="absolute top-0 inset-x-0 h-1.5" style="background:linear-gradient(90deg,#2563eb,#0ea5e9,#10b981)" aria-hidden="true"></div>
        <div class="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 p-5 sm:p-6">
          <div>
            <span class="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-2"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> ${e.verification_status==="Verified"?"Verified listing":"Marketplace listing"}</span>
            <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${u(e.title)}</h1>
            <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${u(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${u(e.vin||"—")}</span></p>
          </div>
          <div class="text-right shrink-0">
            <div class="text-3xl font-black text-blue-600">${a}</div>
            <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${u(e.condition||"Used")} &middot; For Sale</span>
          </div>
        </div>
      </div>

      <!-- Main Image -->
      <div class="relative w-full h-[46vh] sm:h-[60vh] lg:h-[72vh] rounded-2xl overflow-hidden bg-gray-100 mb-3 hero-zoom flex items-center justify-center">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-contain" onerror="this.onerror=null;this.src='${D}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${n[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${o}
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

      ${He(e)}

      ${Pe()}

      <!-- Smart Agent Buttons -->
      <div class="mb-8 pt-4 border-t border-gray-100" id="agent-buttons-block">${Ie(e,{compact:!1})}</div>

      <!-- Description -->
      ${qe(e,i,e.features,null,null)}

      ${l}

      ${Re(e)}

      ${Ne()}
    </div>
  `;const s=document.getElementById("hero-image"),c=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((d,m)=>{d.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.add("border-gray-200")),d.classList.add("active","border-blue-500"),d.classList.remove("border-gray-200"),s.src=d.dataset.img,c.textContent=n[m]||`View ${m+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await Y()?window.location.href=`/checkout.html?id=${e.property_id}`:(he(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Ee(e)}),Me(document.getElementById("agent-buttons-block"),()=>e),Ve(e),De(e),Fe(e),fe(e),je(),window.lucide&&lucide.createIcons()}function Ta(e){const t=document.getElementById("details-content"),a=_e(e),o=Ae(e.images).map((d,m)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${m===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(d)}">
      <img src="${u(d)}" alt="View ${m+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${D}'">
    </button>`).join(""),n=["Exterior Front","Exterior Side","Exterior Rear","Living Area","Kitchen","Bedroom","Bathroom","Additional View"],i=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(d=>d.value!=null&&d.value!==""&&d.value!=="N/A");Be(e.features);const l=Te();t.innerHTML=`
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
      <div class="relative overflow-hidden rounded-2xl border border-blue-100 mb-6 shadow-sm">
        <div class="absolute inset-0" style="background:
          radial-gradient(760px 300px at 92% -20%, rgba(59,130,246,.16), transparent 60%),
          radial-gradient(600px 260px at 0% 115%, rgba(16,185,129,.12), transparent 55%),
          linear-gradient(180deg,#ffffff 0%,#f7fbff 100%)"></div>
        <div class="absolute top-0 inset-x-0 h-1.5" style="background:linear-gradient(90deg,#2563eb,#0ea5e9,#10b981)" aria-hidden="true"></div>
        <div class="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 p-5 sm:p-6">
          <div>
            <span class="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-2"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> ${e.verification_status==="Verified"?"Verified listing":"Marketplace listing"}</span>
            <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${u(e.title)}</h1>
            <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${u(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${u(e.vin||"—")}</span></p>
          </div>
          <div class="text-right shrink-0">
            <div class="text-3xl font-black text-blue-600">${a}</div>
            <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${u(e.condition||"Used")} &middot; For Sale</span>
          </div>
        </div>
      </div>

      <!-- Main Image -->
      <div class="relative w-full h-[46vh] sm:h-[60vh] lg:h-[72vh] rounded-2xl overflow-hidden bg-gray-100 mb-3 hero-zoom flex items-center justify-center">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-contain" onerror="this.onerror=null;this.src='${D}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${n[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${o}
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

      ${He(e)}

      ${Pe()}

      <!-- Smart Agent Buttons -->
      <div class="mb-8 pt-4 border-t border-gray-100" id="agent-buttons-block">${Ie(e,{compact:!1})}</div>

      <!-- Description -->
      ${qe(e,i,e.features,null,null)}

      ${l}

      ${Re(e)}

      ${Ne()}
    </div>
  `;const s=document.getElementById("hero-image"),c=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((d,m)=>{d.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.add("border-gray-200")),d.classList.add("active","border-blue-500"),d.classList.remove("border-gray-200"),s.src=d.dataset.img,c.textContent=n[m]||`View ${m+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await Y()?window.location.href=`/checkout.html?id=${e.property_id}`:(he(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Ee(e)}),Me(document.getElementById("agent-buttons-block"),()=>e),Ve(e),De(e),Fe(e),fe(e),je(),window.lucide&&lucide.createIcons()}function Ra(e){const t=document.getElementById("details-content"),a=_e(e),o=Ae(e.images).map((d,m)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${m===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(d)}">
      <img src="${u(d)}" alt="View ${m+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${D}'">
    </button>`).join(""),n=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cabin / Interior","Wheels / Tires","Additional View"],i=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(d=>d.value!=null&&d.value!==""&&d.value!=="N/A");Be(e.features);const l=Te();t.innerHTML=`
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
      <div class="relative overflow-hidden rounded-2xl border border-blue-100 mb-6 shadow-sm">
        <div class="absolute inset-0" style="background:
          radial-gradient(760px 300px at 92% -20%, rgba(59,130,246,.16), transparent 60%),
          radial-gradient(600px 260px at 0% 115%, rgba(16,185,129,.12), transparent 55%),
          linear-gradient(180deg,#ffffff 0%,#f7fbff 100%)"></div>
        <div class="absolute top-0 inset-x-0 h-1.5" style="background:linear-gradient(90deg,#2563eb,#0ea5e9,#10b981)" aria-hidden="true"></div>
        <div class="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 p-5 sm:p-6">
          <div>
            <span class="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-2"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> ${e.verification_status==="Verified"?"Verified listing":"Marketplace listing"}</span>
            <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${u(e.title)}</h1>
            <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${u(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${u(e.vin||"—")}</span></p>
          </div>
          <div class="text-right shrink-0">
            <div class="text-3xl font-black text-blue-600">${a}</div>
            <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${u(e.condition||"Used")} &middot; For Sale</span>
          </div>
        </div>
      </div>

      <!-- Main Image -->
      <div class="relative w-full h-[46vh] sm:h-[60vh] lg:h-[72vh] rounded-2xl overflow-hidden bg-gray-100 mb-3 hero-zoom flex items-center justify-center">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-contain" onerror="this.onerror=null;this.src='${D}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${n[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${o}
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

      ${He(e)}

      ${Pe()}

      <!-- Smart Agent Buttons -->
      <div class="mb-8 pt-4 border-t border-gray-100" id="agent-buttons-block">${Ie(e,{compact:!1})}</div>

      <!-- Description -->
      ${qe(e,i,e.features,null,null)}

      ${l}

      ${Re(e)}

      ${Ne()}
    </div>
  `;const s=document.getElementById("hero-image"),c=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((d,m)=>{d.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.add("border-gray-200")),d.classList.add("active","border-blue-500"),d.classList.remove("border-gray-200"),s.src=d.dataset.img,c.textContent=n[m]||`View ${m+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await Y()?window.location.href=`/checkout.html?id=${e.property_id}`:(he(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Ee(e)}),Me(document.getElementById("agent-buttons-block"),()=>e),Ve(e),De(e),Fe(e),fe(e),je(),window.lucide&&lucide.createIcons()}function Na(e){const t=e.listing_type==="property",a=t?"Share Property":"Share",r=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`,o=t?'<a href="#listing-map" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-bold py-3 rounded-xl transition text-sm"><i data-lucide="map-pin" class="w-5 h-5"></i> View Map</a>':"",n=t?`
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
        ${o}
      </div>
      ${t?`<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">${n}</div>`:""}
      <div class="mt-4 pt-4 border-t border-gray-100" id="agent-buttons-block">${Ie(e,{compact:!1})}</div>
    </div>
  `}function Re(e){const t=e.listing_type==="property",a=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`;return`
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
    </div>`}function Ne(){return`
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
      </div>`}function Ha(e){const t=e.listing_type==="property",a=be(e),r=[];return r.push({icon:"badge-check",title:t?"Managed & promoted by":"Sold & shipped by",sub:"Weverse Online Shop"}),t?(r.push({icon:"shield-check",title:"Verified listing",sub:"Checked before publish"}),r.push({icon:"calendar-check",title:"Viewing available",sub:"In-person or live video"})):a?(r.push({icon:"shield-check",title:"Inspected & verified",sub:"Condition confirmed"}),r.push({icon:"truck",title:"Delivery arranged",sub:"Door-to-door options"})):(r.push({icon:"clock",title:"Ships in 24 hours",sub:"Free worldwide 3–7 days"}),r.push({icon:"package-search",title:"Tracked every step",sub:"DHL · FedEx · UPS · EMS"})),`
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
      ${r.map(o=>`
        <div class="flex items-center gap-3 bg-white/75 border border-gray-200 rounded-xl px-3.5 py-3 shadow-sm">
          <span class="shrink-0 w-9 h-9 rounded-full ${o.icon==="badge-check"?"bg-blue-50 text-blue-600":o.icon==="shield-check"?"bg-emerald-50 text-emerald-600":"bg-violet-50 text-violet-600"} flex items-center justify-center"><i data-lucide="${o.icon}" class="w-4 h-4"></i></span>
          <div class="min-w-0">
            <p class="text-xs font-black text-gray-900 leading-tight">${o.title}</p>
            <p class="text-[11px] text-gray-500 leading-tight">${o.sub}</p>
          </div>
        </div>`).join("")}
    </div>`}function Pa(){return`
    <div class="mt-5">
      <p class="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wide text-gray-500 mb-3"><i data-lucide="route" class="w-3.5 h-3.5 text-blue-500"></i> From order to your door</p>
      <div class="relative flex justify-between">
        <span class="absolute top-[17px] left-[6%] right-[6%] h-[3px] bg-gradient-to-r from-blue-500 via-sky-400 to-sky-300 rounded-full" aria-hidden="true"></span>
        ${[{icon:"receipt-text",label:"Ordered"},{icon:"package",label:"Shipped"},{icon:"truck",label:"On the way"},{icon:"home",label:"Delivered"}].map(t=>`
          <div class="flex flex-col items-center gap-1.5 relative z-10">
            <span class="w-9 h-9 rounded-full bg-white text-blue-600 border-2 border-blue-500 flex items-center justify-center shadow-sm"><i data-lucide="${t.icon}" class="w-4 h-4"></i></span>
            <span class="text-[10px] sm:text-[11px] font-bold text-gray-700 text-center whitespace-nowrap">${t.label}</span>
          </div>`).join("")}
      </div>
    </div>`}function Da(){return`
    <div class="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      ${[{icon:"lock",label:"SSL Secure",sub:"Encrypted checkout"},{icon:"shield-check",label:"Buyer Protection",sub:"Payment protected"},{icon:"rotate-ccw",label:"14-day Returns",sub:"Easy & refundable"},{icon:"headphones",label:"24/7 Support",sub:"Real humans"}].map(e=>`
        <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5">
          <span class="shrink-0 w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><i data-lucide="${e.icon}" class="w-4 h-4"></i></span>
          <div class="min-w-0">
            <p class="text-[11px] font-black text-gray-900 leading-tight">${e.label}</p>
            <p class="text-[10px] text-gray-500 leading-tight">${e.sub}</p>
          </div>
        </div>`).join("")}
    </div>`}function He(e){return`
    <div class="mb-8 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div class="px-5 sm:px-6 py-5 sm:py-6">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h3 class="flex items-center gap-2 text-sm font-black text-gray-900 uppercase tracking-wide"><i data-lucide="shield-check" class="w-4 h-4 text-blue-600"></i> Buy with confidence</h3>
          <span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"><i data-lucide="badge-check" class="w-3 h-3"></i> Verified marketplace</span>
        </div>
        ${Ha(e)}
        ${Pa()}
        ${Da()}
        <p class="mt-4 text-[11px] text-gray-400 leading-relaxed">Every <strong class="text-gray-500">Weverse Online Shop</strong> order is packed with care, tracked in real time, and covered by buyer protection. Questions? Our USA, Europe &amp; UK support team is online 24/7 and replies fast.</p>
      </div>
    </div>`}function Pe(){return`
    <div id="hot-now-section" class="hidden mb-8">
      <div class="relative overflow-hidden rounded-2xl border border-blue-100 mb-4">
        <div class="absolute inset-0" style="background:
          radial-gradient(700px 260px at 88% -40%, rgba(59,130,246,.18), transparent 60%),
          radial-gradient(560px 240px at 0% 130%, rgba(16,185,129,.14), transparent 55%),
          linear-gradient(120deg,#eef6ff 0%,#ffffff 55%,#ebfdf7 100%)"></div>
        <div class="absolute top-0 inset-x-0 h-1" style="background:linear-gradient(90deg,#2563eb,#0ea5e9,#10b981)" aria-hidden="true"></div>
        <div class="relative p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-blue-700"><i data-lucide="flame" class="w-3.5 h-3.5 kco-blink-soft text-orange-500"></i> Hot right now</p>
            <h3 class="text-lg sm:text-xl font-black text-gray-900 tracking-tight mt-1">This week's most-wanted products</h3>
            <p class="text-sm text-gray-500 mt-0.5">Real customer favorites across the USA, Europe &amp; the UK — in stock and ready to ship.</p>
          </div>
          <a href="/#showroom-directory" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-3 rounded-xl transition shadow-md shadow-blue-600/20">See all products <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
        </div>
      </div>
      <div class="hot-grid flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-1 snap-x snap-mandatory"></div>
    </div>`}async function De(e){try{const t=document.getElementById("hot-now-section"),a=t&&t.querySelector(".hot-grid");if(!t||!a)return;const o=[...Mt(e)].sort((i,l)=>(Number(l.favorite_count)||0)+(Number(l.sold_count)||0)*2+(Number(l.rating)||0)*10-((Number(i.favorite_count)||0)+(Number(i.sold_count)||0)*2+(Number(i.rating)||0)*10)).slice(0,10);if(!o.length)return;t.classList.remove("hidden"),a.innerHTML="";const n=document.createDocumentFragment();o.forEach(i=>{const l=document.createElement("div");l.className="shrink-0 w-[220px] sm:w-[280px] snap-start relative";const s=wt(i);s.style.width="100%",l.appendChild(s);const c=document.createElement("span");c.className="kco-live-dot absolute top-2.5 left-2.5 z-10 w-2.5 h-2.5 ring-2 ring-white/80",c.setAttribute("aria-hidden","true"),c.title="Available now",l.appendChild(c),n.appendChild(l)}),a.appendChild(n),window.lucide&&lucide.createIcons()}catch{}}function Mt(e){const t=new Map,a=r=>(r||[]).forEach(o=>{o&&o.property_id&&t.set(o.property_id,o)});return a(Dt),a(zt),a(Wt),a(Yt),a(Kt),a(ea),a(vt),a(ae),a(Pt()),Ft(e.category||e.subcategory),[...t.values()].filter(r=>r.property_id!==e.property_id)}function Va(e,t){let a=0;const r=c=>String(c||"").trim().toLowerCase();e.listing_type&&e.listing_type===t.listing_type&&(a+=40),e.category&&r(e.category)===r(t.category)&&(a+=30),e.subcategory&&r(e.subcategory)===r(t.subcategory)&&(a+=20),e.brand&&r(e.brand)===r(t.brand)&&(a+=15),e.breed&&r(e.breed)===r(t.breed)&&(a+=15),e.model&&r(e.model)===r(t.model)&&(a+=10),e.property_type&&r(e.property_type)===r(t.property_type)&&(a+=15);const o=parseFloat(e.price)||0,n=parseFloat(t.price)||0;if(o>0&&n>0){const c=Math.min(o,n)/Math.max(o,n);c>=.8?a+=10:c>=.6?a+=6:c>=.4&&(a+=3)}e.country_code&&e.country_code===t.country_code&&(a+=5);const i=new Set(r(e.title).split(/[^a-z0-9]+/).filter(c=>c.length>2)),l=new Set(r(t.title).split(/[^a-z0-9]+/).filter(c=>c.length>2));let s=0;return i.forEach(c=>{l.has(c)&&s++}),a+=Math.min(s*2,10),a}function Je(e,t){const a=document.getElementById(e);if(!a)return;const r=a.querySelector(".rel-grid");if(!r)return;if(!t.length){a.classList.add("hidden");return}a.classList.remove("hidden"),r.innerHTML="";const o=document.createDocumentFragment();t.slice(0,10).forEach(n=>{const i=document.createElement("div");i.className="shrink-0 w-[260px] sm:w-[320px] snap-start relative";const l=wt(n);l.style.width="100%",i.appendChild(l);const s=document.createElement("span");s.className="kco-live-dot absolute top-2.5 left-2.5 z-10 w-2.5 h-2.5 ring-2 ring-white/80",s.setAttribute("aria-hidden","true"),s.title="Available now",i.appendChild(s),o.appendChild(i)}),r.appendChild(o),window.lucide&&lucide.createIcons()}function Ve(e){const t=Mt(e),a=t.map(s=>({item:s,score:Va(e,s)})).sort((s,c)=>c.score-s.score||(c.item.rating||0)-(s.item.rating||0)),r=a.filter(s=>s.score>=35).map(s=>s.item),o=new Set(r.map(s=>s.property_id)),n=a.filter(s=>s.score>=15&&s.score<35&&!o.has(s.item.property_id)).map(s=>s.item),i=[...t].filter(s=>!o.has(s.property_id)).sort((s,c)=>(c.rating||0)-(s.rating||0)).slice(0,10),l=a.filter(s=>!o.has(s.item.property_id)).map(s=>s.item);Je("similar-section",r.length?r:l.slice(0,10)),Je("related-section",n.length?n:l.slice(0,10)),Je("recommended-section",i.length?i:l.slice(0,10))}function Fa(e){const t=document.getElementById("details-content"),a=e.listing_type==="property",r=be(e),o=_e(e),n=ot(e.country_code),i=e.listing_type==="product"?"Product ID":a?"Property ID":"Listing ID";let l="",s="",c=parseFloat(e.real_price);if((!Number.isFinite(c)||c<=0)&&(c=parseFloat(e.compare_at_price??e.original_price)),Number.isFinite(c)&&c>0&&c>parseFloat(e.price)){const f=Math.round((1-parseFloat(e.price)/c)*100);l=`<span class="text-lg text-gray-400 price-strike line-through font-medium">${_e({...e,price:c})}</span>`,s=`<span class="kco-sale-pulse kco-glow inline-flex items-center gap-1 text-xs font-black text-white bg-red-500 px-2.5 py-1 rounded-full relative overflow-hidden">-${f}% OFF<span class="absolute inset-0 kco-shimmer pointer-events-none"></span></span>`}const d=e.availability_status||(e.listing_type==="product"?"In Stock":"Available"),m=Ae(e.images),h=[e.video,e.video_url].find(f=>f&&typeof f=="string"&&W(f)),b=[...m];h&&!b.includes(h)&&b.unshift(h);const x=b.findIndex(f=>W(f)),v=b.findIndex(f=>!W(f)),y=v>=0?v:x>=0?x:0,k=b[y],w=W(k),E=v>=0?b[v]:"",g=b.map((f,_)=>{const M=W(f)?`<video src="${u(f)}" muted preload="auto" playsinline class="w-20 h-16 object-cover"></video>
         <div class="absolute inset-0 flex items-center justify-center"><div class="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center"><svg class="w-2.5 h-2.5 text-gray-800 ml-px" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:`<img src="${u(f)}" alt="View ${_+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${D}'">`;return`<button class="gallery-thumb relative rounded-lg overflow-hidden border-2 ${_===y?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(f)}">
      ${M}
    </button>`}).join("");let q="";if(a){const f=[{icon:"globe",label:"Country",value:V(`${n} ${e.country}`,[e.country])},{icon:"map-pin",label:"State / Province",value:V(e.state,[e.state,e.country])},{icon:"building",label:"City",value:V(e.city,[e.city,e.state,e.country])},{icon:"navigation",label:"Town / Local Area",value:V(e.town,[e.town,e.city,e.state,e.country])},{icon:"signpost",label:"Neighborhood / District",value:V(p(e,"neighborhood"),[p(e,"neighborhood"),e.city,e.state,e.country])},{icon:"home",label:"Address",value:V(p(e,"address"),[p(e,"address"),e.city,e.state,e.country])}].filter(_=>_.value);q=`
      <div class="mt-4">
        ${re("map-pin","Location","rose")}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${f.map(_=>`
            <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
              <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="${_.icon}" class="w-4 h-4 text-blue-500"></i></div>
              <div class="min-w-0"><div class="text-gray-500 text-xs">${_.label}</div><div class="mt-0.5">${_.value}</div></div>
            </div>
          `).join("")}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-200" style="height:280px"></div>
      </div>`}else if(r){const _=[p(e,"location"),p(e,"city"),p(e,"state"),p(e,"country")].map(I=>I==null?"":String(I).trim()).filter(Boolean).join(", ");if(_){const I=rt(_);q=`
      <div class="mt-4">
        ${re("map-pin","Location","rose")}
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="sm:col-span-2 flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
            <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="map-pin" class="w-4 h-4 text-blue-500"></i></div>
            <div class="min-w-0"><div class="text-gray-500 text-xs">Vehicle Location</div><div class="mt-0.5">${V(_,[_])}</div></div>
          </div>
          ${I?`<div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
            <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="navigation" class="w-4 h-4 text-blue-500"></i></div>
            <div><div class="text-gray-500 text-xs">View on Map</div><a href="${I}" target="_blank" rel="noopener" class="text-blue-600 font-bold text-sm hover:underline">Google Maps <i data-lucide="external-link" class="w-3.5 h-3.5 inline"></i></a></div>
          </div>`:""}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-200" style="height:280px"></div>
      </div>`}}let A=[];a?(A=[{icon:"bed-double",label:"Bedrooms",value:e.bedrooms},{icon:"bath",label:"Bathrooms",value:e.bathrooms},{icon:"droplets",label:"Half Bathrooms",value:e.half_bathrooms},{icon:"building",label:"Building / Living Size",value:e.building_size},{icon:"ruler",label:"Land / Lot Size",value:e.land_size},{icon:"layers",label:"Floors / Levels",value:e.floors},{icon:"car-front",label:"Parking Spaces",value:e.parking_spaces},{icon:"warehouse",label:"Garage",value:e.garage},{icon:"home",label:"Property Type",value:e.property_type},{icon:"sofa",label:"Furnished",value:e.furnished},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"calendar",label:"Year Built",value:e.year_built},{icon:"paintbrush",label:"Year Renovated",value:e.year_renovated},{icon:"mail",label:"ZIP / Postal Code",value:e.zip_code},{icon:"tag",label:"Status",value:e.listing_status==="rent"?"For Rent":"For Sale"},{icon:"signpost",label:"Neighborhood",html:V(p(e,"neighborhood"),[p(e,"neighborhood"),e.city,e.state,e.country])},{icon:"sofa",label:"Living Areas",value:p(e,"living_areas")},{icon:"flame",label:"Kitchens",value:p(e,"kitchens")},{icon:"tree-pine",label:"Balconies",value:p(e,"balconies")},{icon:"leaf",label:"Garden / Yard",value:p(e,"garden")},{icon:"waves",label:"Pool",value:p(e,"pool")},{icon:"lock",label:"Security",value:p(e,"security")},{icon:"home",label:"Utilities & Heating",value:p(e,"utilities")},{icon:"hammer",label:"Construction Type",value:p(e,"construction_type")},{icon:"clipboard-check",label:"Construction Status",value:p(e,"construction_status")},{icon:"user-check",label:"Ownership Type",value:p(e,"ownership_type")}].filter(f=>f.html||f.value!=null&&f.value!==""),ce("Property Information","home",A)):e.category==="Motorhomes"?(A=[{icon:"factory",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank}].filter(f=>f.html||f.value!=null&&f.value!==""),ce("Vehicle Information","bus",A,"violet")):r?(A=[{icon:"tag",label:"Title / Listing",value:e.title},{icon:"car-front",label:"Vehicle / Body Type",value:p(e,"body_type")},{icon:"factory",label:"Make / Brand",value:p(e,"make")||e.brand},{icon:"car",label:"Model",value:p(e,"model")},{icon:"badge-award",label:"Trim / Edition",value:p(e,"trim")},{icon:"calendar",label:"Year",value:p(e,"model_year")},{icon:"gauge",label:"Mileage",value:p(e,"mileage")},{icon:"zap",label:"Engine",value:p(e,"engine")},{icon:"gauge",label:"Horsepower",value:p(e,"horsepower")},{icon:"cog",label:"Transmission",value:p(e,"transmission")},{icon:"route",label:"Drive Type",value:p(e,"drive_type")},{icon:"fuel",label:"Fuel Type",value:p(e,"fuel_type")},{icon:"fuel",label:"Fuel Economy",value:p(e,"fuel_economy")},{icon:"users",label:"Seating Capacity",value:p(e,"seating_capacity")},{icon:"door-open",label:"Doors",value:p(e,"doors")},{icon:"palette",label:"Color / Exterior",value:p(e,"color")},{icon:"fingerprint",label:"VIN",value:p(e,"vin")},{icon:"badge-check",label:"Condition",value:p(e,"condition")},{icon:"wrench",label:"Warranty",value:p(e,"warranty")}].filter(f=>f.html||f.value!=null&&f.value!==""),ce("Vehicle Specifications","car-front",A,"violet")):e.listing_type==="product"?(A=[{icon:"factory",label:"Brand",value:e.brand},{icon:"tag",label:"Subcategory",value:e.subcategory},{icon:"palette",label:"Colour",value:e.color},{icon:"ruler",label:"Size",value:e.size},{icon:"layers",label:"Material",value:e.material},{icon:"badge-check",label:"Condition",value:e.condition||"New"},{icon:"shield-check",label:"Warranty",value:e.warranty},{icon:"package-check",label:"Availability",value:e.availability_status}].filter(f=>f.html||f.value!=null&&f.value!==""),ce("Product Information","package",A)):e.listing_type==="pet"&&(A=[{icon:"paw-print",label:"Breed",value:e.breed},{icon:"calendar",label:"Age",value:e.age},{icon:"users",label:"Gender",value:e.gender},{icon:"palette",label:"Colour",value:e.color},{icon:"scale",label:"Weight",value:e.size},{icon:"globe",label:"Origin",html:V(`${ot(e.country_code)} ${e.country}`,[e.country])},{icon:"badge-check",label:"Health",value:e.condition}].filter(f=>f.html||f.value!=null&&f.value!==""),ce("Pet Information","paw-print",A,"amber")),Be(e.features),ma(e.highlights);const F=Te(),O=[];if(Number(e.rating)>0){const f=Math.max(0,Math.round(Number(e.rating_count)||0));O.push(`<span class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700"><span class="flex">${_t(e.rating,"w-4 h-4")}</span><span>${Number(e.rating).toFixed(1)}${f?` (${f} rated)`:""}</span></span>`)}Math.round(Number(e.review_count)||0)>0&&O.push(`<span class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700"><i data-lucide="message-square" class="w-4 h-4 text-blue-500"></i>${Math.round(Number(e.review_count))} reviews</span>`),Math.round(Number(e.favorite_count)||0)>0&&O.push(`<span class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700"><i data-lucide="heart" class="w-4 h-4 text-rose-500"></i>${Math.round(Number(e.favorite_count))} saved</span>`);const ye=Math.round(Number(e.sold_count)||Number(e.review_count)||0);ye>0&&O.push(`<span class="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700"><i data-lucide="shopping-bag" class="w-4 h-4"></i>${ye}+ shopped</span>`);const $=O.length?`<div class="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 pt-3 border-t border-gray-100">${O.join("")}</div>`:"",R=parseInt(e.stock_quantity,10);let Z="";Number.isFinite(R)&&R>0&&R<=5?Z=`<span class="kco-hurry inline-flex items-center gap-1.5 text-xs font-black text-amber-800 bg-amber-50 border-2 border-amber-300 px-2.5 py-1 rounded-full"><i data-lucide="flame" class="w-3.5 h-3.5 kco-blink-soft text-amber-500"></i> Hurry! Only ${R} left in stock</span>`:Number.isFinite(R)&&R>5&&(Z=`<span class="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full"><i data-lucide="layers" class="w-3.5 h-3.5"></i> ${R} in stock</span>`);let oe="";s&&(oe=`
      <div class="mt-3 kco-glow relative overflow-hidden rounded-xl bg-white border border-blue-200 p-0">
        <div class="flex items-center gap-3 px-3 py-2">
          <span class="kco-live-dot shrink-0" aria-hidden="true"></span>
          <span class="text-xs font-black text-gray-900 uppercase tracking-wide">Live deal</span>
          <span class="text-xs font-black text-red-500 kco-blink-soft">Save ${Math.round((1-parseFloat(e.price)/c)*100)}%</span>
          <span class="ml-auto hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700"><i data-lucide="tag" class="w-3 h-3"></i> Limited-time price</span>
        </div>
      </div>`),t.innerHTML=`
    <div class="fade-in">
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>${e.category}</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${u(e.title)}</span>
      </div>

      <div class="mb-5">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">${u(e.title)}</h1>
        <div class="flex flex-wrap items-center gap-2 mt-2.5">
          ${a?e.verification_status==="Verified"?'<span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified</span>':e.verification_status==="Pending verification"?'<span class="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full"><i data-lucide="clock" class="w-3.5 h-3.5"></i> Pending Verification</span>':'<span class="inline-flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full"><i data-lucide="shield-alert" class="w-3.5 h-3.5"></i> Not Verified</span>':'<span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified</span>'}
          <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full"><i data-lucide="box" class="w-3.5 h-3.5"></i> ${i}: <span class="font-mono">${u(e.property_id)}</span></span>
          <span class="inline-flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">${e.listing_status==="rent"?"For Rent":"For Sale"}</span>
          ${x>=0?'<span class="inline-flex items-center gap-1 text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full"><i data-lucide="video" class="w-3.5 h-3.5"></i> Video Tour</span>':""}
        </div>
        ${$}
      </div>

      <div class="relative overflow-hidden rounded-2xl border border-blue-100 mb-6 shadow-sm">
        <div class="absolute inset-0" style="background:
          radial-gradient(760px 300px at 92% -20%, rgba(59,130,246,.16), transparent 60%),
          radial-gradient(600px 260px at 0% 115%, rgba(16,185,129,.12), transparent 55%),
          linear-gradient(180deg,#ffffff 0%,#f7fbff 100%)"></div>
        <div class="absolute top-0 inset-x-0 h-1.5" style="background:linear-gradient(90deg,#2563eb,#0ea5e9,#10b981)" aria-hidden="true"></div>
        <div class="relative flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6">
        <div>
          <div class="flex items-baseline flex-wrap gap-2">
            ${l}
            <span class="text-4xl font-black text-blue-600">${o}</span>
          </div>
          <div class="flex items-center gap-2 mt-1.5">
            ${s}
            <span class="text-sm text-emerald-600 font-bold flex items-center gap-1"><i data-lucide="package-check" class="w-4 h-4"></i> ${d}</span>
          </div>
          ${Z?`<div class="flex items-center gap-2 mt-1.5">${Z}</div>`:""}
          ${oe}
        </div>
        <div class="flex flex-col gap-1.5 text-sm">
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="truck" class="w-4 h-4 text-blue-500"></i> Free worldwide shipping</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="rotate-ccw" class="w-4 h-4 text-blue-500"></i> Easy returns within 14 days</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="lock" class="w-4 h-4 text-blue-500"></i> Secure payment protection</span>
        </div>
        </div>
      </div>

      <div id="hero-wrap" class="relative w-full h-[46vh] sm:h-[60vh] lg:h-[72vh] rounded-2xl overflow-hidden bg-gray-100 mb-3 cursor-zoom-in group flex items-center justify-center" role="button" tabindex="0" aria-label="Open image gallery">
        ${w?`<video id="hero-image" src="${u(k)}" ${E?`poster="${u(E)}"`:""} autoplay muted loop playsinline preload="metadata" controls class="w-full h-full object-contain" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"></video>
             <div class="absolute inset-0 flex items-center justify-center pointer-events-none" style="display:${E?"none":"flex"}"><div class="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-lg"><svg class="w-7 h-7 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:`<img id="hero-image" src="${k}" alt="${e.title}" class="w-full h-full object-contain" onerror="this.onerror=null;this.src='${D}'">`}
        <div class="absolute inset-0 flex items-end justify-between p-3 opacity-0 group-hover:opacity-100 transition pointer-events-none">
          <span class="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-black/50 backdrop-blur px-3 py-1.5 rounded-full"><i data-lucide="expand" class="w-3.5 h-3.5"></i> Tap to enlarge</span>
        </div>
        ${x>=0?`
        <button type="button" id="hero-video-tour-btn" class="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white pl-2 pr-3 py-2 rounded-full text-xs font-bold shadow-lg shadow-blue-600/40 transition cursor-pointer">
          <span class="w-6 h-6 rounded-full bg-white flex items-center justify-center"><svg class="w-3.5 h-3.5 text-blue-700 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
          Watch Video Tour
        </button>`:""}
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${g}
      </div>

      ${Na(e)}

      ${He(e)}

      ${Pe()}

      <div id="listing-details">
        ${qe(e,A,e.features,e.highlights,q,a?ga(e):r?ka(e):"")}
      </div>

      ${F}

      ${a?Re(e):r?$a(e):""}

      <div id="recommendations-section" class="hidden">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">You May Also Like</h3>
        <div id="recommendations-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>

      ${Ne()}
    </div>
  `;const Q=document.getElementById("hero-image"),ee=document.getElementById("hero-wrap");if(Q&&Q.tagName==="VIDEO"&&!E&&ua(Q,k),ee){const f=()=>ht(e,b),_=document.getElementById("hero-video-tour-btn");_&&_.addEventListener("click",I=>{I.stopPropagation(),ht(e,b,{startIdx:x,autoplay:!0})}),ee.addEventListener("click",I=>{const M=document.getElementById("hero-image");if(M&&M.tagName==="VIDEO"){const j=M.getBoundingClientRect();if(j.width>0&&I.clientX>=j.left&&I.clientX<=j.right&&I.clientY>=j.top&&I.clientY<=j.bottom){if(M.paused&&M.readyState>=2){M.play().catch(()=>{});return}return M.paused,void 0}}f()}),ee.addEventListener("keydown",I=>{(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),f())})}t.querySelectorAll(".gallery-thumb").forEach(f=>{f.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(S=>S.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(S=>S.classList.add("border-gray-200")),f.classList.add("active","border-blue-500"),f.classList.remove("border-gray-200");const _=f.dataset.img,I=W(_),M=document.getElementById("hero-wrap");if(!M)return;const j=M.querySelector(".hero-video-overlay");j&&j.remove();const B=document.getElementById("hero-image");if(I)if(B&&B.tagName==="VIDEO")B.src=_;else{const S=document.createElement("video");S.id="hero-image",S.src=_,S.muted=!0,S.loop=!0,S.autoplay=!0,S.preload="metadata",S.playsInline=!0,S.controls=!0,E&&(S.poster=E),S.className="w-full h-full object-contain",M.insertBefore(S,M.firstChild),B&&B.remove&&B.remove();const T=document.createElement("div");T.className="hero-video-overlay absolute inset-0 flex items-center justify-center pointer-events-none",T.innerHTML='<div class="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-lg"><svg class="w-7 h-7 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>',M.insertBefore(T,M.firstChild?.nextSibling)}else if(B&&B.tagName==="IMG")B.src=_;else{const S=document.createElement("img");S.id="hero-image",S.src=_,S.alt=e.title,S.className="w-full h-full object-contain",S.onerror=function(){this.onerror=null,this.src=D},M.insertBefore(S,M.firstChild),B&&B.remove&&B.remove()}})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await Y()?window.location.href=`/checkout.html?id=${e.property_id}`:(he(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Ee(e)});const se=document.getElementById("request-viewing-btn");se&&se.addEventListener("click",()=>ft(e,"viewing"));const ie=document.getElementById("request-info-btn");ie&&ie.addEventListener("click",()=>ft(e,"info"));const ge=document.getElementById("view-details-btn");ge&&ge.addEventListener("click",()=>{const f=document.getElementById("listing-details");f&&f.scrollIntoView({behavior:"smooth",block:"start"})});const ne=document.getElementById("add-cart-btn");ne&&ne.addEventListener("click",()=>{Xt(e.property_id,1),ne.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Added to Cart',window.lucide&&lucide.createIcons(),setTimeout(()=>{ne.innerHTML='<i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart',window.lucide&&lucide.createIcons()},2e3)}),Ua(e),Me(document.getElementById("agent-buttons-block"),()=>e),Fe(e),fe(e),Ja(e),De(e),je(),window.lucide&&lucide.createIcons(),e.property_id,e.title,parseFloat(e.price),e.currency;const H=document.getElementById("listing-map");if(H&&window.L){const f=parseFloat(e.latitude)||null,_=parseFloat(e.longitude)||null,I=xa(e),M=I||e.title,j=I?"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(I):"",B=(T,xe,Oe)=>{const ve=L.map(H).setView([T,xe],Oe);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(ve),L.marker([T,xe]).addTo(ve).bindPopup(`<strong>${u(e.title)}</strong><br>${u(M)}`).openPopup()},S=()=>{H.innerHTML=`<div class="w-full h-full flex flex-col items-center justify-center gap-2 bg-gray-50 text-center p-4">
        <i data-lucide="map-pin" class="w-6 h-6 text-gray-400"></i>
        <p class="text-xs text-gray-500">Exact map position not available for this location.</p>
        <a href="${j}" target="_blank" rel="noopener" class="text-xs font-bold text-blue-600 hover:underline">Open location in Google Maps</a>
      </div>`,window.lucide&&lucide.createIcons()};f&&_?B(f,_,13):I?fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(I)).then(T=>T.json()).then(T=>{T&&T[0]?B(parseFloat(T[0].lat),parseFloat(T[0].lon),12):S()}).catch(S):S()}}function ht(e,t,a){const r=(Array.isArray(t)&&t.length?t:[e.images?.[0]||D]).filter(Boolean);if(!r.length)return;let n=a&&Number.isInteger(a.startIdx)&&a.startIdx>=0&&a.startIdx<r.length?a.startIdx:0,i=!!(a&&a.autoplay);const l=document.createElement("div");l.id="gallery-lightbox",l.className="fixed inset-0 z-[500] bg-black/95 flex flex-col",l.innerHTML=`
    <style>
      #gallery-lightbox .lb-media{transition:opacity .18s ease}
      #gallery-lightbox .lb-media.lb-fade{opacity:0}
    </style>
    <div class="flex items-center justify-between px-4 py-3 text-white">
      <span class="text-xs font-bold text-gray-300 truncate">${u(e.title)}</span>
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
  `,document.body.appendChild(l),document.body.style.overflow="hidden";const s=l.querySelector("#lb-media-container"),c=l.querySelector("#lb-count"),d=l.querySelector("#lb-thumbs");let m=null;const h=()=>{s.classList.add("lb-fade"),setTimeout(()=>{const w=r[n],E=i;if(i=!1,W(w))s.innerHTML=`<video src="${u(w)}" ${E?"autoplay ":""}controls playsinline preload="auto" class="lb-media max-w-full max-h-[70vh] object-contain rounded-lg"></video>`;else{const g=document.createElement("img");g.src=w,g.alt="Gallery",g.draggable=!1,g.className="lb-media max-w-full max-h-[70vh] object-contain",g.onerror=function(){this.onerror=null,this.src=D},s.innerHTML="",s.appendChild(g)}s.classList.remove("lb-fade"),c.textContent=`${n+1} / ${r.length}`,d.innerHTML=r.map((g,q)=>{const F=W(g)?'<div class="w-full h-full flex items-center justify-center bg-gray-800"><svg class="w-3 h-3 text-white ml-px" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>':`<img src="${u(g)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`;return`<button type="button" data-i="${q}" class="relative w-12 h-9 rounded-lg overflow-hidden border-2 ${q===n?"border-blue-500":"border-transparent"}" aria-label="Item ${q+1}">${F}</button>`}).join(""),d.querySelectorAll("[data-i]").forEach(g=>g.addEventListener("click",()=>{n=parseInt(g.dataset.i,10),h()}))},90)},b=()=>{n=(n-1+r.length)%r.length,h()},x=()=>{n=(n+1)%r.length,h()},v=()=>{l.remove(),document.body.style.overflow="",document.removeEventListener("keydown",y)},y=w=>{w.key==="Escape"?v():w.key==="ArrowLeft"?b():w.key==="ArrowRight"&&x()};l.querySelector("#lb-close").addEventListener("click",v),l.querySelector("#lb-prev").addEventListener("click",b),l.querySelector("#lb-next").addEventListener("click",x);const k=l.querySelector("#lb-viewport");k.addEventListener("touchstart",w=>{m=w.touches[0].clientX},{passive:!0}),k.addEventListener("touchend",w=>{if(m==null)return;const E=w.changedTouches[0].clientX-m;Math.abs(E)>40&&(E<0?x():b()),m=null},{passive:!0}),k.addEventListener("click",w=>{w.target===k&&v()}),document.addEventListener("keydown",y),h()}function ft(e,t){const a=t==="viewing",r=e.property_id||e.id||"",o=document.createElement("div");o.id="property-request-modal",o.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-0 sm:p-4",o.innerHTML=`
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
          <p class="text-xs text-gray-500 mt-0.5 truncate">${u(e.title)}</p>
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
  `,document.body.appendChild(o),document.body.style.overflow="hidden",Y().then(i=>{if(i){const l=o.querySelector("#prq-name"),s=o.querySelector("#prq-email"),c=i.user_metadata||{};c?.full_name&&l&&!l.value&&(l.value=c.full_name),i.email&&s&&!s.value&&(s.value=i.email)}});const n=()=>{o.remove(),document.body.style.overflow=""};o.querySelectorAll("[data-req-close]").forEach(i=>i.addEventListener("click",n)),o.addEventListener("submit",async i=>{i.preventDefault();const l=o.querySelector("#prq-submit"),s=o.querySelector("#prq-status"),c=o.querySelector("#prq-name").value.trim(),d=o.querySelector("#prq-email").value.trim(),m=o.querySelector("#prq-phone")?.value.trim()||"",h=o.querySelector("#prq-date")?.value||"",b=o.querySelector("#prq-message").value.trim();l.disabled=!0,l.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i> Sending...',window.lucide&&lucide.createIcons();try{let x=null;try{x=(await C.auth.getUser()).data?.user?.id||null}catch{}const v=a?"Request Viewing":"Request More Information",y=[r&&`Property: ${r}`,m&&`Phone: ${m}`,h&&`Preferred date: ${h}`,b].filter(Boolean).join(" | "),{error:k}=await C.from("site_feedback").insert({user_id:x,name:c,email:d,rating:5,feedback:`${v} (${e.title}): ${y}`,is_approved:!1});if(k)throw new Error(k.message);try{await fetch("https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/send-auth-email",{method:"POST",headers:{Authorization:"Bearer sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa","Content-Type":"application/json"},body:JSON.stringify({type:"contact_form",name:c,email:d,subject:`${v} — ${e.title}`,message:y})})}catch{}s.className="text-center text-sm py-3 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200",s.textContent=a?"Viewing request sent! We'll confirm your appointment within 24 hours.":"Request sent! We'll get back to you within 24 hours.",s.classList.remove("hidden"),setTimeout(n,1800)}catch{s.className="text-center text-sm py-3 rounded-xl bg-red-50 text-red-600 border border-red-200",s.textContent="Failed to send. Please email support@weverseonlineshop.com directly.",s.classList.remove("hidden"),l.disabled=!1,l.innerHTML=a?"Request Viewing":"Send Request",window.lucide&&lucide.createIcons()}})}let z=0,yt=!1;function Oa(){if(yt)return;yt=!0;const e=document.createElement("style");e.textContent="@keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}",document.head.appendChild(e)}function Xe(e,t){if(!e)return;Oa(),e.innerHTML=`<i data-lucide="heart" class="w-5 h-5 ${t?"fill-red-500 text-red-500":""}"></i>`,e.classList.toggle("bg-red-50",t),e.classList.toggle("border",t),e.classList.toggle("border-red-200",t);const a=e.querySelector("span");a&&(a.textContent=t?"Saved to Wishlist":"Add to Wishlist"),window.lucide&&lucide.createIcons();const r=e.querySelector("i");r&&(r.style.animation="none",r.offsetWidth,r.style.animation="kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)",setTimeout(()=>{r&&(r.style.animation="")},550))}async function Ua(e){const t=document.getElementById("wishlist-btn");if(!t)return;const a=await Y();if(!a){t.addEventListener("click",()=>{he(window.location.pathname+window.location.search),window.location.href=`/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`});return}const{data:r,error:o}=await C.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(o){console.error("Wishlist check failed:",o.message);return}r&&Xe(t,!0),t.addEventListener("click",async()=>{const{data:n,error:i}=await C.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(i){console.error("Wishlist toggle failed:",i.message);return}if(n){const{error:l}=await C.from("wishlist").delete().eq("id",n.id);if(l){console.error("Wishlist delete failed:",l.message);return}Xe(t,!1)}else{const{error:l}=await C.from("wishlist").insert({user_id:a.id,listing_id:e.id});if(l){console.error("Wishlist insert failed:",l.message);return}Xe(t,!0)}})}async function Fe(e){const t=document.getElementById("review-form");if(!t)return;const a=await Y(),r=e.property_id||e.id||"",o=document.getElementById("review-photo-row");o&&(a?o.classList.remove("hidden"):o.classList.add("hidden"));const n=document.getElementById("review-name");if(n){let h="";try{h=localStorage.getItem("kco_review_name")||""}catch{}n.value=h}document.querySelectorAll(".star-btn").forEach(h=>{h.addEventListener("click",()=>{z=parseInt(h.dataset.rating,10),document.querySelectorAll(".star-btn").forEach((b,x)=>{const v=b.querySelector("i, svg");v&&(x<z?(v.classList.add("fill-amber-400","text-amber-400"),v.classList.remove("text-gray-300")):(v.classList.remove("fill-amber-400","text-amber-400"),v.classList.add("text-gray-300")))})})});const i=document.getElementById("review-photo-input"),l=document.getElementById("review-photo-preview");let s=null;i&&i.addEventListener("change",()=>{if(s=i.files&&i.files[0],!!l&&(l.innerHTML="",s)){const h=URL.createObjectURL(s);l.innerHTML=`<span class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg px-2.5 py-1"><img src="${h}" alt="" class="w-5 h-5 rounded object-cover">${u(s.name)}</span>`}});const c=document.getElementById("review-submit-msg"),d=document.getElementById("review-error-msg"),m=h=>{if(d)if(h){d.classList.remove("hidden");const b=d.querySelector("span");b&&(b.textContent=h)}else d.classList.add("hidden")};t.addEventListener("submit",async h=>{h.preventDefault(),m("");const b=document.getElementById("review-text").value.trim();if(!z){alert("Please select a rating.");return}if(!b){alert("Please write a review.");return}const x=t.querySelector('button[type="submit"]'),v=x.innerHTML;x.disabled=!0,x.innerHTML='<span class="inline-block animate-spin">⏳</span> Submitting…';const y=(n?n.value:"").trim();if(y)try{localStorage.setItem("kco_review_name",y)}catch{}let k=!1;if(a){let w=null;if(s){const g=(s.name.split(".").pop()||"jpg").toLowerCase().replace(/[^a-z0-9]/g,"")||"jpg",q=`${a.id}/${Date.now()}_${String(Math.random()).slice(2)}.${g}`,{error:A}=await C.storage.from("review-photos").upload(q,s,{contentType:s.type||"image/jpeg",cacheControl:"3600",upsert:!1});if(A){x.disabled=!1,x.innerHTML=v,m("Could not upload photo: "+A.message);return}const{data:F}=C.storage.from("review-photos").getPublicUrl(q);w=F?.publicUrl||null}const{error:E}=await C.from("product_reviews").insert({listing_id:e.id||null,property_id:r,user_id:a.id,rating:z,comment:b,review_photo:w,is_approved:!0});E?m("Could not save your review: "+(E.message||"unknown error")):k=!0}else{try{const{error:w}=await C.from("product_reviews").insert({listing_id:e.id||null,property_id:r,rating:z,comment:b,author_name:y||null,is_approved:!0});w||(k=!0,ca(r,{rating:z,text:b,name:y}))}catch{}k||(k=!!la(r,{rating:z,text:b,name:y})),k||m("Could not save your review right now — please try again.")}if(!k){x.disabled=!1,x.innerHTML=v;return}x.disabled=!1,x.innerHTML=v,document.getElementById("review-text").value="",n&&(n.value=y),z=0,s=null,i&&(i.value=""),l&&(l.innerHTML=""),document.querySelectorAll(".star-btn").forEach(w=>{const E=w.querySelector("i, svg");E&&(E.classList.remove("fill-amber-400","text-amber-400"),E.classList.add("text-gray-300"))}),c&&(c.classList.remove("hidden"),setTimeout(()=>{c&&c.classList.add("hidden")},4e3)),fe(e)})}async function fe(e){Ct();const t=document.getElementById("reviews-list"),a=document.getElementById("reviews-summary"),r=document.getElementById("reviews-breakdown");if(!t)return;const o=oa(e),n={5:o.breakdown[5]||0,4:o.breakdown[4]||0,3:o.breakdown[3]||0,2:o.breakdown[2]||0,1:o.breakdown[1]||0};let i=Math.max(Number(o.total)||0,o.reviews.length);const l=[],s=e.property_id||e.id||"";if(s){const{data:y,error:k}=await C.from("product_reviews").select("*, profiles(full_name)").eq("property_id",s).eq("is_approved",!0).order("created_at",{ascending:!1});if(!k&&y)for(const w of y){l.push({...w,name:w.author_name||w.profiles?.full_name||"Anonymous",verified:w.is_verified_purchase});const E=Math.min(5,Math.max(1,Math.round(Number(w.rating)||0)));n[E]++,i++}}const c=na(s).filter(y=>!l.some(k=>Math.round(Number(k.rating))===Math.round(Number(y.rating))&&String(k.comment||"").trim()===String(y.text||"").trim()));for(const y of c){const k=Math.min(5,Math.max(1,Math.round(Number(y.rating)||0)));n[k]++,i++}let d=0;for(let y=5;y>=1;y--)d+=y*n[y];const h=(i?d/i:0)||Number(e.rating)||0,b=i,x=`
    <div class="flex flex-wrap items-center gap-x-6 gap-y-4">
      <div class="flex items-center gap-4 shrink-0">
        <div class="text-5xl sm:text-6xl font-black leading-none text-gray-900 tracking-tight">${h>0?h.toFixed(1):"New"}</div>
        <div class="shrink-0">
          <div class="flex gap-1">${_t(h,"w-5 h-5 sm:w-6 sm:h-6")}</div>
          <div class="text-[13px] sm:text-sm font-bold text-gray-500 mt-1.5 tracking-wide">Customer Reviews</div>
        </div>
      </div>
      <div class="hidden md:block w-px h-12 bg-gray-200"></div>
      <div class="flex flex-wrap items-center gap-2">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Listing</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1.5 rounded-full"><i data-lucide="truck" class="w-3.5 h-3.5"></i> Fast Worldwide Delivery</span>
      </div>
    </div>`;a&&(a.innerHTML=x),r&&(r.innerHTML=Aa(e,n,b));const v=[...c,...l,...o.reviews];if(!v.length){t.innerHTML='<p class="text-gray-400 text-sm py-2">No reviews yet. Be the first to review this product!</p>',window.lucide&&lucide.createIcons();return}K=v.map(y=>(y._local?y._key="local-"+y.id:y.id?y._key="db-"+y.id:y._key="seed-"+St(String(s)+"||"+(y.date||"")+"||"+(y.text||"")),y)),me=s;try{ue=localStorage.getItem("kco_reply_name")||""}catch{}if(s)try{P=await $t(s)}catch{P={likes:new Map,liked:new Set,comments:new Map}}else P={likes:new Map,liked:new Set,comments:new Map};G=null,de=!1,Ga(t),J()}async function Ct(){const e=document.querySelector('[data-bg-slot="reviews"]');if(e)try{const t=await Zt();e.innerHTML=Qt(t.reviews_bg_image,t.reviews_bg_video)}catch{}}document.addEventListener("promo-backgrounds-updated",()=>{try{Ct()}catch{}});function J(){const e=document.getElementById("reviews-list");if(!e||!K.length)return;const t=de?K:K.slice(0,3);if(e.innerHTML=t.map(Ca).join(""),window.lucide&&lucide.createIcons(),de)Ka(e,()=>{de=!1,J()});else if(K.length>t.length){const a=document.createElement("div");a.className="mt-4 flex justify-center",a.innerHTML=`
      <button type="button" class="view-all-reviews-btn btn-press inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition shadow-sm shadow-blue-500/20">
        View All Customer Reviews
        <i data-lucide="chevron-down" class="w-4 h-4"></i>
      </button>`,e.appendChild(a),window.lucide&&lucide.createIcons(),a.querySelector(".view-all-reviews-btn").addEventListener("click",()=>{de=!0,J()})}}async function za(){if(me)try{P=await $t(me)}catch{P={likes:new Map,liked:new Set,comments:new Map}}}function Wa(){if(!G)return;const e=document.querySelector(".review-reply-box textarea.review-reply-body");e&&setTimeout(()=>{try{e.focus()}catch{}},60)}function Ga(e){!e||e.dataset.riBound==="1"||(e.dataset.riBound="1",e.addEventListener("click",async t=>{const a=t.target.closest("[data-open-reviewer]");if(a){t.preventDefault();const l=a.dataset.openReviewer,s=K.find(c=>c._key===l);s&&Ya(s);return}const r=t.target.closest(".review-like-btn");if(r){t.preventDefault();const l=r.dataset.key;if(!l)return;let c=!P.liked.has(l);try{const d=await sa(me,l);d&&typeof d.liked=="boolean"&&(c=d.liked)}catch{}c?P.liked.add(l):P.liked.delete(l),P.likes.set(l,Math.max(0,(P.likes.get(l)||0)+(c?1:-1))),J();return}const o=t.target.closest(".review-reply-toggle");if(o){t.preventDefault(),G=G===o.dataset.key?null:o.dataset.key,J(),Wa();return}if(t.target.closest(".review-reply-cancel")){t.preventDefault(),G=null,J();return}const i=t.target.closest(".review-reply-post");if(i){t.preventDefault();const l=t.target.closest(".review-reply-box");if(!l)return;const s=l.querySelector(".review-reply-name"),c=l.querySelector(".review-reply-body"),d=(s&&s.value||"").trim(),m=(c&&c.value||"").trim();if(!m){c&&c.focus();return}ue=d||ue;try{await ia(me,i.dataset.key,d||"Guest",m)}catch{}try{localStorage.setItem("kco_reply_name",ue)}catch{}G=null,await za(),J()}}))}function Ya(e){const t=e.author_name||e.name||e.profiles?.full_name||"Anonymous",a=u(t.trim().charAt(0).toUpperCase()||"A"),r=e.location||e.profiles?.country||"",o=e.handle||"",n=e.date||e.created_at||"",i=K.filter(b=>(b.author_name||b.name||b.profiles?.full_name||"")===t),l=i.length||1,s=l>0?i.reduce((b,x)=>b+(Number(x.rating)||0),0)/i.length:Number(e.rating)||0,c=i.reduce((b,x)=>{const v=x._key||"";return b+(x.likes||0)+(v&&P.likes.get(v)||0)},0),d=i.slice(0,4).map(b=>`
      <div class="rounded-xl border border-gray-100 bg-gray-50/70 p-3">
        <div class="flex items-center gap-1.5 mb-1">${[1,2,3,4,5].map(v=>`<i data-lucide="star" class="w-3 h-3 ${v<=(Number(b.rating)||0)?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}<span class="text-[11px] text-gray-400 ml-1">${Le(b.date||b.created_at)}</span></div>
        <p class="text-[13px] text-gray-700 leading-relaxed">${u(b.text||b.comment||"")}</p>
      </div>`).join(""),m=document.createElement("div");m.id="reviewer-profile-modal",m.className="fixed inset-0 z-[460] flex items-end sm:items-center justify-center p-0 sm:p-4",m.innerHTML=`
    <style>
      @keyframes rp-up{from{transform:translateY(100%)}to{transform:translateY(0)}}
      @media (min-width:640px){@keyframes rp-up{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}}
      #reviewer-profile-modal .animate-rp-up{animation:rp-up .26s cubic-bezier(.2,.8,.2,1)}
      #reviewer-profile-modal::-webkit-scrollbar{display:none}
    </style>
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" data-rp-close></div>
    <div class="relative w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-rp-up">
      <div class="flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-100">
        <h3 class="text-base font-black text-gray-900 tracking-tight">Reviewer Profile</h3>
        <button type="button" data-rp-close class="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition" aria-label="Close">✕</button>
      </div>
      <div class="max-h-[70vh] overflow-y-auto px-5 py-5 space-y-4" style="-ms-overflow-style:none;scrollbar-width:none">
        <div class="flex items-center gap-3.5">
          <div class="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl font-black uppercase shadow">${a}</div>
          <div class="min-w-0">
            <div class="text-lg font-black text-gray-900 leading-tight">${u(t)}</div>
            ${o?`<div class="text-xs font-semibold text-blue-500">@${u(o)}</div>`:""}
            ${r?`<div class="flex items-center gap-1 text-xs text-gray-500 mt-0.5"><i data-lucide="map-pin" class="w-3.5 h-3.5"></i>${u(r)}</div>`:""}
            ${n?`<div class="flex items-center gap-1 text-xs text-gray-400 mt-0.5"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>Reviewed ${Le(n)}</div>`:""}
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
            <div class="text-lg font-black text-gray-900">${s?Number(s).toFixed(1):"—"}</div>
            <div class="flex justify-center gap-0.5 mt-0.5">${[1,2,3,4,5].map(b=>`<i data-lucide="star" class="w-3 h-3 ${b<=Math.round(s)?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}</div>
            <div class="text-[11px] text-gray-400 mt-1">Avg rating</div>
          </div>
          <div class="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
            <div class="text-lg font-black text-gray-900">${l}</div>
            <div class="text-[11px] text-gray-400 mt-1">Reviews</div>
          </div>
          <div class="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
            <div class="text-lg font-black text-gray-900">${c}</div>
            <div class="text-[11px] text-gray-400 mt-1">Helpful votes</div>
          </div>
        </div>
        ${d?`
          <div>
            <h4 class="text-xs font-black uppercase tracking-wide text-gray-500 mb-2">Reviews on this listing</h4>
            <div class="space-y-2">${d}</div>
          </div>`:""}
        <p class="text-[11px] text-gray-400 leading-relaxed">Follower and activity counts shown are based on real reviews and reviews-likes on this listing.</p>
      </div>
    </div>
  `,document.body.appendChild(m),document.body.style.overflow="hidden",window.lucide&&lucide.createIcons();const h=()=>{m.remove(),document.body.style.overflow=""};m.querySelectorAll("[data-rp-close]").forEach(b=>b.addEventListener("click",h)),m.addEventListener("click",b=>{b.target===m&&h()})}function Ka(e,t){if(!e)return;const a=document.getElementById("reviews-back-top");a&&a.remove();const r=document.createElement("button");r.type="button",r.id="reviews-back-top",r.setAttribute("aria-label","Back to product page"),r.className="btn-press fixed z-[90] bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white font-bold pl-3 pr-5 py-3 rounded-full text-xs shadow-xl shadow-slate-950/50 border border-white/10 backdrop-blur transition active:scale-95",r.innerHTML=`
    <span class="shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"><i data-lucide="chevron-up" class="w-4 h-4"></i></span>
    Back to product page`,document.body.appendChild(r),r.addEventListener("click",()=>{r.remove(),typeof t=="function"&&t();const o=document.getElementById("reviews-section");o&&o.scrollIntoView({behavior:"smooth",block:"start"})}),window.lucide&&lucide.createIcons()}async function Ja(e){const t=document.getElementById("recommendations-section"),a=document.getElementById("recommendations-grid");if(!t||!a||!e.id)return;const{data:r,error:o}=await C.from("product_recommendations").select("recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)").eq("listing_id",e.id).order("score",{ascending:!1}).limit(4);if(o){console.error("Recommendations load failed:",o.message),t.classList.add("hidden");return}let n=(r||[]).map(i=>i.showroom_listings).filter(Boolean);if(n.length<4){const{data:i}=await C.from("showroom_listings").select("property_id, title, price, currency, images, listing_type").eq("category",e.category).neq("id",e.id).eq("is_active",!0).order("rating",{ascending:!1}).limit(4-n.length);n=[...n,...i||[]]}if(n.length===0){t.classList.add("hidden");return}t.classList.remove("hidden"),a.innerHTML=n.map(i=>{const l=i.images&&i.images[0]||"/fallback.svg",s=typeof i.price=="number"?i.price:parseFloat(i.price||0),c=i.currency||"USD";return`<a href="/product/${i.property_id}" class="block bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition group">
      <div class="aspect-square overflow-hidden bg-gray-100"><img src="${u(l)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-gray-900 font-bold truncate">${u(i.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${c} ${s.toLocaleString()}</p></div>
    </a>`}).join("")}function u(e){return String(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Xa(){const e=Ba();if(!e){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}const t=()=>{document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>'},a=()=>it(e)||nt(e)||lt(e)||Gt(e)||bt(e)||Nt(e)||Vt(),r=c=>{if(Rt(c),document.title=`${c.title} | Weverse Online Shop`,Jt(c),c===it(e))ja(c);else if(c===nt(e))Ta(c);else if(c===lt(e))Ra(c);else{Fa(c);try{Ve(c)}catch{}}},n=document.getElementById("details-content")?.querySelector("[data-ssr-product]");if(n&&n.getAttribute("data-ssr-product")===e){Ue(e).then(c=>{if(c&&c.property_id===e)try{r(c)}catch{}}).catch(()=>{});return}const i=a();if(i){r(i),Ue(e).then(c=>{st().then(()=>{if(Ot(e)){t();return}if(c&&c.property_id===e)try{r(c)}catch{}})});return}const l=await Ue(e);if(l){r(l);return}await qa();const s=bt(e);if(s){r(s);return}await st();{t();return}}const gt=document.getElementById("details-content"),Za=gt?gt.innerHTML:"";let xt=!1;function At(e){if(e)try{console.error("[details] init failed:",e&&(e.stack||e.message||e))}catch{}if(!xt){xt=!0;try{const t=document.getElementById("details-content");if(!t||t.querySelector("[data-ssr-product]")||t.innerHTML!==Za||t.querySelector(".fade-in, #reviews-section"))return;t.innerHTML='<div class="text-center py-20 text-gray-500">We couldn’t load this listing right now. Please check your connection and try again.</div>'}catch{}}}window.setTimeout(At,12e3);Xa().catch(At);
