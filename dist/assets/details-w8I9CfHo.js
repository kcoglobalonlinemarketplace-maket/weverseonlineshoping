import"./modulepreload-polyfill-B5Qt9EMX.js";import{l as Xe,f as Mt,c as Ct,_ as At,a as $e,b as Ze,g as Bt,S as qt}from"./showroom-data-B_6YqRLg.js";import{a as jt,b as Tt}from"./catalog-CWML433J.js";import{loadHiddenCatalogIds as Qe,isCatalogListingHidden as Rt}from"./catalog-hidden-store-DROVVFIz.js";import{P as mt,g as et,b as tt,f as Nt,T as Ht,M as Pt}from"./motorhome-data-CupbOvk0.js";import{s as Dt,a as Le,o as Ie,w as Ee,b as Vt,r as Ft}from"./showroom-cards-DHBJRPz7.js";import{getCurrentUser as W,setRedirectAfterAuth as me}from"./auth-DlKVuhCK.js";import{supabase as M}from"./supabase-client-nvpjTmO6.js";import{l as Ot,b as Ut}from"./promo-backgrounds-BZhAn4aI.js";import"./app-promo-banner-DhPdMEhY.js";/* empty css                                       */import"./categories-5zVhBEjq.js";import"./site-content-DxInYU0I.js";import"./promo-pool-CZD5oU4b.js";const bt=[];function at(e){return bt.find(t=>t.property_id===e)||null}const yt=[];function zt(e){return yt.find(t=>t.property_id===e)||null}const Wt=[];function xe(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return t>>>0}function Gt(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}const De=["James","Emma","Liam","Olivia","Noah","Ava","Ethan","Sophia","Lucas","Mia","Daniel","Isabella","Matthew","Charlotte","Samuel","Amelia","Gabriel","Harper","Nathan","Evelyn","Caleb","Abigail","Adrian","Ella","Owen","Grace","Leo","Chloe","Julian","Nora","Mason","Aria","Elijah","Layla","Isaac","Zoe","Hunter","Scarlett","Christian","Lily","Aaron","Hannah","Dylan","Savannah","Andrew","Ruby","David","Elena","Ryan","Nina","Marcus","Priya","Kwame","Fatima","Andre","Yuki","Tomas","Ingrid","Mateo","Sofia","Omar","Zara","Felix","Amara","Jonas","Leila","Victor","Mila","Diego","Iris","Hugo","Camila","Adam","Freya","Oscar","Amina","Peter","Naomi","Elias","Lucia","Ray","Talia","Marco","Sienna","Joshua","Anya","Kofi","Petra"],we=["Anderson","Baker","Carter","Diaz","Evans","Foster","Garcia","Harris","Ingram","Johnson","Kelly","Lewis","Miller","Nelson","Ortiz","Parker","Quinn","Reed","Sanders","Turner","Underwood","Vaughn","Walker","Young","Zimmerman","Brooks","Coleman","Dunn","Fisher","Grant","Hayes","Jordan","Knight","Lopez","Morgan","Nguyen","Okafor","Peterson","Romano","Silva","Thompson","Umeh","Volkov","Wang","Xu","Yates","Zhou","Bennett","Chukwu","Doyle","Eze","Ferreira","Gonzalez","Hansen","Ivanov","Jansen","Kumar","Larsen","Moreau","Novak","Osei","Patel","Quintero","Rossi","Schmidt","Tavares","Ueda","Vasquez","Weber","Xavier","Yamamoto","Ziegler","Adeyemi","Barlow","Costa","Diop","Eriksen","Fontaine","Gomez","Holmes","Ikram","Juma","Karlsson","Lawson","Mensah","Nilsson"],rt=[{city:"Austin",country:"United States"},{city:"New York",country:"United States"},{city:"Seattle",country:"United States"},{city:"Los Angeles",country:"United States"},{city:"Chicago",country:"United States"},{city:"Boston",country:"United States"},{city:"San Diego",country:"United States"},{city:"Denver",country:"United States"},{city:"Miami",country:"United States"},{city:"Portland",country:"United States"},{city:"Toronto",country:"Canada"},{city:"Vancouver",country:"Canada"},{city:"Montreal",country:"Canada"},{city:"Calgary",country:"Canada"},{city:"Ottawa",country:"Canada"},{city:"London",country:"United Kingdom"},{city:"Manchester",country:"United Kingdom"},{city:"Birmingham",country:"United Kingdom"},{city:"Edinburgh",country:"United Kingdom"},{city:"Glasgow",country:"United Kingdom"},{city:"Bristol",country:"United Kingdom"},{city:"Liverpool",country:"United Kingdom"},{city:"Dublin",country:"Ireland"},{city:"Cork",country:"Ireland"},{city:"Paris",country:"France"},{city:"Lyon",country:"France"},{city:"Marseille",country:"France"},{city:"Berlin",country:"Germany"},{city:"Munich",country:"Germany"},{city:"Hamburg",country:"Germany"},{city:"Frankfurt",country:"Germany"},{city:"Amsterdam",country:"Netherlands"},{city:"Rotterdam",country:"Netherlands"},{city:"Brussels",country:"Belgium"},{city:"Antwerp",country:"Belgium"},{city:"Zurich",country:"Switzerland"},{city:"Geneva",country:"Switzerland"},{city:"Vienna",country:"Austria"},{city:"Rome",country:"Italy"},{city:"Milan",country:"Italy"},{city:"Florence",country:"Italy"},{city:"Madrid",country:"Spain"},{city:"Barcelona",country:"Spain"},{city:"Valencia",country:"Spain"},{city:"Lisbon",country:"Portugal"},{city:"Porto",country:"Portugal"},{city:"Stockholm",country:"Sweden"},{city:"Gothenburg",country:"Sweden"},{city:"Oslo",country:"Norway"},{city:"Copenhagen",country:"Denmark"},{city:"Helsinki",country:"Finland"},{city:"Reykjavik",country:"Iceland"},{city:"Warsaw",country:"Poland"},{city:"Krakow",country:"Poland"},{city:"Prague",country:"Czech Republic"},{city:"Athens",country:"Greece"},{city:"Sydney",country:"Australia"},{city:"Melbourne",country:"Australia"},{city:"Brisbane",country:"Australia"},{city:"Perth",country:"Australia"},{city:"Adelaide",country:"Australia"},{city:"Auckland",country:"New Zealand"},{city:"Wellington",country:"New Zealand"},{city:"Christchurch",country:"New Zealand"},{city:"Singapore",country:"Singapore"},{city:"Tokyo",country:"Japan"},{city:"Osaka",country:"Japan"},{city:"Kyoto",country:"Japan"},{city:"Seoul",country:"South Korea"},{city:"Busan",country:"South Korea"},{city:"Dubai",country:"United Arab Emirates"},{city:"Abu Dhabi",country:"United Arab Emirates"},{city:"Doha",country:"Qatar"},{city:"Tel Aviv",country:"Israel"},{city:"Taipei",country:"Taiwan"},{city:"Hong Kong",country:"Hong Kong"}],ke=["just ordered from this shop and it was so easy fr","first time buying here and honestly impressed ngl","checked out in like 2 minutes, easiest thing ever","was a little skeptical at first but it all worked out","placed my order from my phone, super smooth","i've ordered here a few times and it never lets me down","took a chance on this store and zero regrets","signing up and ordering took no time at all","everything from picking to paying was really simple","first international order and it went perfectly 🙏","lowkey wasn't expecting much but it was great","order went through instantly, no drama","the site is so easy to use, even i managed it lol","been shopping online for years, this one stands out","quick and painless, just how online shopping should be","had a tiny doubt before ordering but it was fine","the whole process felt very professional","just what i needed, no stress, no hassle","my cousin recommended this shop and he was right","ordered without overthinking and it paid off"],F=["shipping was mad fast, arrived way earlier than expected","my package came in perfect condition 🔥","the delivery guy was super nice and careful","got updates the entire time, no guessing","tracking was accurate and it showed up on time","packaging was really solid, nothing was damaged","they answered my question in like 10 minutes","customer service was actually helpful, rare these days","everything arrived exactly as described","the parcel was wrapped so well, impressive","it showed up a day early, which was a nice surprise","payment was secure and confirmation came right away","kept me posted at every single step","dispatching was quick, shipped the same day","the item looked even better in person","my order was handled with so much care","they were super responsive whenever i messaged","the tracking link actually worked the whole way","delivery was on schedule, not a minute late","everything came neatly packed and in one piece","no issues at all, straight to my door","they followed up after delivery which i thought was nice","the whole team was polite and professional","my doubts disappeared once the package arrived","quality was clear as soon as i opened the box","support replied quickly even though it was late","well organized from start to finish","came when they said it would, no surprises","fast dispatch and smooth handling of my order","the notifications kept me calm the whole time lol","everything i ordered was in the box, nothing missing","the courier called before arriving, so professional","shipped in sturdy packaging, survived the trip perfectly","i could track it the whole way, very reassuring","they processed my order in record time","came in perfect shape and very well protected","every update they sent was accurate and clear","exactly the delivery experience you hope for","returns and support were straightforward too","very clean, well managed order, i was impressed"],Ve=["100% ordering again fr","would recommend this shop to anyone","already told my friends about it","this is my new go to place now","can't recommend them enough","definitely coming back, no question","so glad i found this store","will 100% be back 💯","no complaints at all honestly","totally worth it, trust me","10/10 experience, easy","this shop is legit, trust","loyal customer for life now","five stars from me, easy","a real hidden gem honestly","can't wait for my next order"],ot={vehicle:["my vehicle was delivered safe and sound, kept me updated the whole trip","the listing was exact and delivery was arranged super smoothly"],property:["the listing was spot on and they walked me through the whole process","all the paperwork was handled clean, very easy from start to finish"],phone:["the phone matched the photos exactly and shipped out quick","they double checked everything before sending, packaging was solid"],pet:["they handled everything so carefully, i felt reassured the whole way","all the paperwork was sorted out and the process was really easy"],product:["the item was exactly like the photos, arrived in great shape","order was processed fast and the packaging was really solid"]},st=["🔥","✨","😍","🙌","💯","😭","❤️","👍","🎯","👌","✅","⚡","📦","🙏"],ht=[{year:2018,w:3},{year:2019,w:7},{year:2020,w:11},{year:2021,w:13},{year:2022,w:15},{year:2023,w:16},{year:2024,w:15},{year:2025,w:12},{year:2026,w:8}],Yt=ht.reduce((e,t)=>e+t.w,0);function Kt(e){let t=e()*Yt;for(const a of ht){if(t<a.w)return a.year;t-=a.w}return 2024}function Fe(e,t,a,r){return(e+t*a)%r}function Jt(e,t={}){const a=String(e.property_id||e.id||"");if(!a)return{reviews:[],breakdown:{5:0,4:0,3:0,2:0,1:0},total:0,computedRating:0};const r=xe(a),o=187+r%660,i=Math.min(5,Math.max(1,Number(e.rating)||0))||4.5;let l=Math.max(.3,Math.min(.9,i/5)),s=1-l,d=.07,c=.04,b=.03;const h=1/(l+s+d+c+b);l*=h,s*=h,d*=h,c*=h,b*=h;const y=[l,s,d,c,b],v=e.listing_type==="vehicle"?"vehicle":e.listing_type==="property"?"property":e.listing_type==="pet"?"pet":String(e.category||"").toLowerCase().includes("phone")?"phone":"product",g=ot[v]||ot.product,p=[],w=De.length*we.length,_=ke.length*F.length*F.length*Ve.length,I=457,x=811;for(let $=0;$<o;$++){const q=Gt(xe(a+"::"+$));let X=q(),re=5,Z=0;for(let ve=5;ve>=1;ve--)if(Z+=y[5-ve],X<=Z){re=ve;break}const Q=Fe(r,$,I,w),oe=De[Math.floor(Q/we.length)%De.length],se=we[Q%we.length],he=`${oe} ${se}`;let T=Fe(r,$,x,_);const f=ke[T%ke.length];T=Math.floor(T/ke.length);const k=F[T%F.length];T=Math.floor(T/F.length);const R=F[T%F.length];T=Math.floor(T/F.length);const E=Ve[T%Ve.length];let D=`${f} ${k}`;$%3===0&&g.length&&(D+=` ${g[$%g.length]}`),$%2===0&&(D+=` ${R}`),D+=` ${E}`,$%3===2&&(D+=` ${st[(r+$*13)%st.length]}`);const A=rt[Fe(r,$,337,rt.length)],S=Date.now(),B=Kt(q),fe=B===2018?10+Math.floor(q()*3):1+Math.floor(q()*12),Pe=1+Math.floor(q()*28),ge=Date.UTC(B,fe-1,Pe),_t=new Date(Math.min(ge,S)).toISOString(),Lt=`@${oe.toLowerCase()}${se.toLowerCase()}`,It=2+xe(a+"::likes::"+$)%380,Et=$%7===0?1+xe(a+"::rep::"+$)%4:0;p.push({name:he,handle:Lt,location:A.country,date:_t,rating:re,text:D,likes:It,replies:Et,verified:!1,seeded:!0})}p.sort(($,q)=>$.date<q.date?1:-1);const H={5:0,4:0,3:0,2:0,1:0};let C=0;for(let $=5;$>=1;$--)H[$]=Math.round(o*y[5-$]),C+=H[$];const G=o-C;G!==0&&(H[G>0?5:1]+=G);let V=0;for(let $=5;$>=1;$--)V+=$*H[$];const ye=V/o;return{reviews:p,breakdown:H,total:o,computedRating:ye}}let ie="pending",ee=null;const Ge=e=>`kco_review_likes_${e}`,Ye=e=>`kco_review_comments_${e}`;function J(e){try{return JSON.parse(localStorage.getItem(e)||"null")}catch{return null}}function Me(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}async function Ke(){try{ee||(ee=await W()||null)}catch{ee=null}if(ee&&ee.id)return"u:"+ee.id;try{let e=localStorage.getItem("kco_anon_id");return e||(e="anon-"+Math.random().toString(36).slice(2)+Date.now().toString(36),localStorage.setItem("kco_anon_id",e)),e}catch{return"anon-"+Math.random().toString(36).slice(2)+Date.now().toString(36)}}async function Je(){if(ie!=="pending")return ie;try{const{error:e}=await M.from("review_likes").select("id").limit(1),{error:t}=await M.from("review_comments").select("id").limit(1);ie=e||t?"local":"server"}catch{ie="local"}return ie}async function ft(e){const t=new Map,a=new Set,r=new Map,o=String(e||"");try{if(await Je()==="server"){const[{data:n},{data:i}]=await Promise.all([M.from("review_likes").select("review_key, liker_id").eq("property_id",o),M.from("review_comments").select("*").eq("property_id",o).order("created_at",{ascending:!0})]),l=await Ke();for(const s of n||[])t.set(s.review_key,(t.get(s.review_key)||0)+1),s.liker_id===l&&a.add(s.review_key);for(const s of i||[]){const d=r.get(s.review_key)||[];d.push({id:s.id,author:s.author,body:s.body,created_at:s.created_at}),r.set(s.review_key,d)}}else{const n=J(Ge(o))||{},i=await Ke();for(const[s,d]of Object.entries(n)){const c=Array.isArray(d)?d:[];t.set(s,c.length),c.includes(i)&&a.add(s)}const l=J(Ye(o))||{};for(const[s,d]of Object.entries(l))Array.isArray(d)&&r.set(s,d)}}catch{}return{likes:t,liked:a,comments:r}}async function Xt(e,t){const a=String(e||""),r=!1;try{const o=await Ke();if(await Je()==="server"){const{data:s}=await M.from("review_likes").select("id").eq("review_key",t).eq("liker_id",o).limit(1);if(s&&s.length){const{error:c}=await M.from("review_likes").delete().eq("review_key",t).eq("liker_id",o);return{liked:c?r:!1}}const{error:d}=await M.from("review_likes").insert({property_id:a,review_key:t,liker_id:o});return{liked:!d}}const n=J(Ge(a))||{},i=Array.isArray(n[t])?n[t]:[],l=i.indexOf(o);return l>=0?i.splice(l,1):i.push(o),n[t]=i,Me(Ge(a),n),{liked:l<0}}catch{return{liked:r}}}async function Zt(e,t,a,r){const o=String(e||""),n=String(r||"").trim().slice(0,1e3),i=String(a).trim().slice(0,40)||"Guest";if(!n)return null;try{if(await Je()==="server"){const{data:c,error:b}=await M.from("review_comments").insert({property_id:o,review_key:t,author:i,body:n}).select("id, author, body, created_at").single();if(!b&&c)return c}}catch{}const l={id:"c_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,8),author:i,body:n,created_at:new Date().toISOString()},s=J(Ye(o))||{},d=Array.isArray(s[t])?s[t]:[];return d.push(l),s[t]=d,Me(Ye(o),s),l}const ue=e=>`kco_guest_reviews_${e}`;function Qt(e){const t=String(e||""),a=J(ue(t));return Array.isArray(a)?a.filter(r=>r&&r.rating>=1&&r.rating<=5&&(r.text||r.comment)).map(r=>({...r,_local:!0,comment:r.comment||r.text,text:r.text||r.comment,name:r.name||"",rating:Math.max(1,Math.min(5,Math.round(Number(r.rating)||0)))})).sort((r,o)=>new Date(o.created_at||0)-new Date(r.created_at||0)):[]}function ea(e,t){const a=String(e||""),r=Math.max(1,Math.min(5,Math.round(Number(t&&t.rating)||0))),o=String(t&&t.text||"").trim().slice(0,2e3),n=String(t&&t.name||"").trim().slice(0,40);if(!r||!o)return null;const i={id:"gv_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,8),rating:r,text:o,comment:o,name:n,created_at:new Date().toISOString(),_local:!0},l=J(ue(a));return Array.isArray(l)?(l.push(i),Me(ue(a),l),i):null}function ta(e,t){const a=String(e||""),r=Math.max(1,Math.min(5,Math.round(Number(t&&t.rating)||0))),o=String(t&&t.text||"").trim(),n=J(ue(a));if(!Array.isArray(n))return;const i=n.filter(l=>!(Math.round(Number(l.rating))===r&&String(l.text||"").trim()===o));i.length!==n.length&&Me(ue(a),i)}const P="/fallback.svg";let nt=!1;function aa(){if(nt)return;nt=!0;const e=document.createElement("style");e.id="kco-temu-effects",e.textContent=`
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
  `,document.head.appendChild(e)}aa();let N={likes:new Map,liked:new Set,comments:new Map},z=null,de="",Y=[],ce=!1,pe="";function gt(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function Ce(e){return Array.isArray(e)&&e.length>0?e:[P]}function U(e){return!e||typeof e!="string"?!1:/^data:video\//i.test(e)?!0:e.startsWith("blob:")?!1:/\.(mp4|webm|mov|m4v|avi|mkv|ogv)(\?|#|$)/i.test(e)}function ra(e,t){const a=o=>{if(o.readyState>=2&&o.videoWidth)try{const n=document.createElement("canvas");n.width=o.videoWidth,n.height=o.videoHeight,n.getContext("2d").drawImage(o,0,0);const i=n.toDataURL("image/jpeg",.8);i&&i.length>100&&(e.poster=i)}catch{}},r=document.createElement("video");r.muted=!0,r.playsInline=!0,r.preload="auto",r.src=t,r.addEventListener("loadeddata",()=>a(r),{once:!0}),r.addEventListener("error",()=>{},{once:!0}),r.load(),setTimeout(()=>{try{r.removeAttribute("src"),r.load()}catch{}},12e3)}function vt(e,t="w-4 h-4"){const a=Math.round(Number(e)||0);return[1,2,3,4,5].map(r=>`<i data-lucide="star" class="${t} ${r<=a?"fill-amber-400 text-amber-400 drop-shadow-[0_1px_4px_rgba(0,0,0,.25)]":"text-gray-300"}"></i>`).join("")}function ae(e,t,a="blue"){const r={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"};return`
    <div class="flex items-center gap-2.5 mb-4">
      <div class="shrink-0 w-10 h-10 rounded-xl ${r[a]||r.blue} flex items-center justify-center"><i data-lucide="${e}" class="w-5 h-5"></i></div>
      <h3 class="text-lg font-black text-gray-900 tracking-tight">${t}</h3>
    </div>`}function oa(e){return`
    <div class="bg-gray-50 border border-gray-100 rounded-xl p-3.5">
      <div class="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5"><i data-lucide="${e.icon}" class="w-3.5 h-3.5"></i>${e.label}</div>
      <div class="text-gray-900 font-bold text-[15px] leading-snug">${u(e.value)}</div>
    </div>`}function le(e,t,a,r="blue"){return!a||!a.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${ae(t,e,r)}
      ${xt(a)}
    </div>`}function xt(e){return!e||!e.length?"":`<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">${e.map(oa).join("")}</div>`}function Ae(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${ae("list-checks","Features & Amenities","emerald")}
      ${wt(e)}
    </div>`}function wt(e){return!e||!e.length?"":`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
            <span class="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
            <span class="text-[15px] text-gray-800 font-medium">${u(t)}</span>
          </div>`).join("")}
      </div>`}function sa(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${ae("star","Highlights","amber")}
      ${kt(e)}
    </div>`}function kt(e){return!e||!e.length?"":`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-start gap-2.5 bg-amber-50/60 border border-amber-100 rounded-xl px-3.5 py-2.5">
            <i data-lucide="badge-check" class="w-4 h-4 text-amber-500 mt-0.5 shrink-0"></i>
            <span class="text-[15px] text-gray-800 font-medium">${u(t)}</span>
          </div>`).join("")}
      </div>`}function Oe(e,t="emerald"){if(!e||!e.length)return"";const a={emerald:"bg-emerald-100 text-emerald-600",amber:"bg-amber-100 text-amber-600",blue:"bg-blue-100 text-blue-600",violet:"bg-violet-100 text-violet-600",rose:"bg-rose-100 text-rose-600"}[t]||"bg-emerald-100 text-emerald-600";return`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
    ${e.map(r=>`
      <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
        <span class="shrink-0 w-6 h-6 rounded-full ${a} flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
        <span class="text-[15px] text-gray-800 font-medium">${u(String(r))}</span>
      </div>`).join("")}
  </div>`}function na(e){const t=e.floor_plan&&typeof e.floor_plan=="object"?e.floor_plan:{},a=Array.isArray(t.rooms)?t.rooms:[];if(!(t.image||t.levels||t.total_area||a.length))return"";const o=a.length?`
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
    </div>`}function ia(e){const t=Array.isArray(e.legal_info)?e.legal_info:[],a=e.risk_notes;if(!t.length&&!a)return"";const r={"Seller provided":"bg-amber-50 text-amber-700 border-amber-200",Documented:"bg-blue-50 text-blue-700 border-blue-200","Not verified":"bg-gray-50 text-gray-600 border-gray-200"};return`
    <div class="space-y-2.5">
      ${t.map(n=>{const i=typeof n=="string"?n:n.label||"",l=typeof n=="string"?"":n.value||"",s=typeof n=="string"?"Not verified":n.source||"Not verified",d=r[s]||r["Not verified"],c=`${i}${l?": "+l:""}`;return`<div class="flex items-center justify-between gap-3 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
      <span class="text-[15px] text-gray-800 font-medium">${u(c)}</span>
      <span class="shrink-0 text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full border ${d}">${u(s)}</span>
    </div>`}).join("")||""}
      ${a?`<div class="bg-amber-50/60 border border-amber-200 rounded-xl p-3.5"><p class="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Condition / Risk Notes</p><p class="text-sm text-gray-700 leading-relaxed">${u(String(a))}</p></div>`:""}
      <p class="text-xs text-gray-400 leading-relaxed"><strong class="text-gray-500">Note:</strong> Legal and ownership details are provided by the seller for information only and have not been independently verified by the marketplace. Always confirm with the seller or a qualified professional before purchase.</p>
    </div>`}function la(e){const t=e.nearby_area&&typeof e.nearby_area=="object"?e.nearby_area:{},a=[{icon:"school",label:"Schools",items:t.schools},{icon:"cross",label:"Hospitals & Clinics",items:t.hospitals},{icon:"shopping-cart",label:"Shopping & Markets",items:t.shopping},{icon:"bus",label:"Transportation",items:t.transportation}].filter(o=>Array.isArray(o.items)&&o.items.length),r=Array.isArray(t.distances)?t.distances:[];return!a.length&&!r.length?"":`
    <div class="space-y-3">
      ${a.map(o=>`
        <div>
          <p class="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5"><i data-lucide="${o.icon}" class="w-3.5 h-3.5"></i> ${o.label}</p>
          <div class="flex flex-wrap gap-2">
            ${o.items.map(n=>`<span class="text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-full">${u(String(n))}</span>`).join("")}
          </div>
        </div>`).join("")}
      ${r.length?`<div><p class="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5"><i data-lucide="navigation" class="w-3.5 h-3.5"></i> Distances</p><div class="flex flex-wrap gap-2">${r.map(o=>`<span class="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full">${u(String(o))}</span>`).join("")}</div></div>`:""}
    </div>`}function ca(e){const t=e.verification_status||"Not verified",a={Verified:"bg-emerald-50 text-emerald-700 border-emerald-200","Pending verification":"bg-amber-50 text-amber-700 border-amber-200","Not verified":"bg-gray-50 text-gray-600 border-gray-200"}[t]||"bg-gray-50 text-gray-600 border-gray-200",r=Array.isArray(e.documents)?e.documents:[],o=[{icon:"shield-check",label:"Verification",value:t,badge:a},e.verification_date?{icon:"calendar-check",label:"Verification Date",value:e.verification_date}:null,e.inspection_info?{icon:"clipboard-check",label:"Inspection",value:e.inspection_info}:null].filter(Boolean);return`
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
    </div>`}function da(e){if(e.listing_type!=="property")return"";const t=[],a=Oe(e.interior_features,"emerald"),r=Oe(e.exterior_features,"blue"),o=Oe(e.home_systems,"violet"),n=[a?`<div class="mb-4"><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Interior Features</p>${a}</div>`:"",r?`<div class="mb-4"><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Exterior Features</p>${r}</div>`:"",o?`<div><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Home Systems</p>${o}</div>`:""].filter(Boolean).join("");n&&t.push(j("acc-features","home","Features & Home Systems",n,!1,"emerald"));const i=na(e);i&&t.push(j("acc-floorplan","layout-dashboard","Floor Plan",i,!1,"violet"));const l=ia(e);l&&t.push(j("acc-legal","scale","Legal & Financial",l,!1,"amber"));const s=la(e);s&&t.push(j("acc-nearby","map-pin","Nearby Area",s,!1,"rose"));const d=ca(e);return d&&t.push(j("acc-trust","shield-check","Verification & Trust",d,!1,"blue")),t.join("")}function m(e,t,a=""){const r=e[t];if(r!=null&&String(r).trim()!=="")return r;const o=e.specifications&&typeof e.specifications=="object"?e.specifications:{};return o[t]!=null?o[t]:a}const ua=new Set(["Cars","Cars & Vehicles","Trucks","Buses","Buses & Coaches","Motorhomes","Motorcycles","Marine & Boating","RV & Camper Accessories","Vehicles","Luxury Cars","Commercial Vehicles"]);function Se(e){return e.listing_type==="vehicle"||ua.has(e.category)}function pa(e){const t=String(m(e,"wheels_tires")||"");if(!t.trim())return"";t.split(",").map(o=>o.trim()).filter(Boolean);const a=String(t).match(/(?:[0-9]{2,4}\s*(?:\/[0-9]{2,3}\s*)?(?:R|ZR)[0-9]{1,2}|[0-9]{1,2}(?:\.|x|X)[0-9]{1,2}(?:\.|x|X)-?[0-9]+|[0-9]{2,3}\s*(?:\.[0-9]{1,2})?\s*(?:inches|inch|in|"))/),r=a?a[0]:"";return`
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
    </div>`}function ma(e){if(!Se(e))return"";const t=[],a=(b,h,y)=>y!=null&&String(y)!==""?`<div class="bg-gray-50 border border-gray-100 rounded-xl p-3.5"><div class="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5"><i data-lucide="${b}" class="w-3.5 h-3.5"></i>${h}</div><div class="text-gray-900 font-bold text-[15px] leading-snug">${u(String(y))}</div></div>`:"",r=(b,h,y)=>y?`
    <div class="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3.5">
      <span class="shrink-0 w-7 h-7 rounded-lg bg-white border border-gray-100 flex items-center justify-center"><i data-lucide="${b}" class="w-4 h-4 text-emerald-600"></i></span>
      <div class="min-w-0"><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">${h}</p><p class="text-sm text-gray-700 leading-relaxed">${u(String(y))}</p></div>
    </div>`:"",o=[a("badge-check","Condition",m(e,"condition")),a("user-round","Previous Owners",m(e,"previous_owners")),a("clipboard-check","Registration",m(e,"registration_status")),a("shield-check","Inspection",m(e,"inspection_status")),a("badge-dollar-sign","Warranty",m(e,"warranty"))].filter(Boolean).join(""),n=[r("scroll-text","Ownership History",m(e,"ownership_history")),r("wrench","Service & Maintenance History",m(e,"service_history")),r("alert-triangle","Accident / Damage History",m(e,"accident_history"))].filter(Boolean).join("");(o||n)&&t.push(j("acc-vh-cond","shield-check","Condition & History",`
      ${o?`<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">${o}</div>`:""}
      ${n}`.trim(),!0,"emerald"));const i=pa(e);i&&t.push(j("acc-vh-wheels","circle-dot","Wheels & Tires",i,!0,"amber"));const l=(b,h,y)=>Array.isArray(b)&&b.length?`
    <div><p class="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5"><i data-lucide="${h}" class="w-3.5 h-3.5"></i> ${y}</p>
    <div class="flex flex-wrap gap-2">${b.map(v=>`<span class="text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-full">${u(String(v))}</span>`).join("")}</div></div>`:"",s=[l(m(e,"safety_features"),"shield","Safety Features"),l(m(e,"driver_assistance"),"radar","Driver Assistance"),l(m(e,"technology"),"cpu","Technology & Infotainment"),l(m(e,"interior"),"armchair","Interior & Comfort")].filter(Boolean).join("");s&&t.push(j("acc-vh-safety","cpu","Safety & Technology",s,!1,"rose"));const d=[a("ruler","Dimensions (L x W x H)",m(e,"dimensions")),a("package","Cargo Capacity",m(e,"cargo_capacity")),a("truck","Towing Capacity",m(e,"towing_capacity")),a("fuel","Fuel Economy",m(e,"fuel_economy")),a("users","Seats",m(e,"seating_capacity")),a("door-open","Doors",m(e,"doors"))].filter(Boolean).join("");d&&t.push(j("acc-vh-dims","ruler","Dimensions & Capacity",`<div class="grid grid-cols-2 sm:grid-cols-3 gap-3">${d}</div>`,!1,"sky"));const c=m(e,"location")||[m(e,"city"),m(e,"state"),m(e,"country")].filter(Boolean).join(", ");if(c){const b="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(c);t.push(j("acc-vh-loc","map-pin","Location & Availability",`
      <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3.5">
        <span class="shrink-0 w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center"><i data-lucide="map-pin" class="w-5 h-5"></i></span>
        <div class="min-w-0"><p class="text-[15px] text-gray-900 font-bold">${u(String(c))}</p>
        <a href="${b}" target="_blank" rel="noopener" class="text-xs font-bold text-blue-600 hover:underline">Open in Google Maps</a></div>
      </div>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <div class="bg-emerald-50 border border-emerald-100 rounded-xl p-3"><p class="text-xs text-gray-500">Availability</p><p class="text-sm font-black text-emerald-700">${u(e.availability_status||(e.stock_quantity>0?"In Stock":"Available"))}</p></div>
        <div class="bg-gray-50 border border-gray-100 rounded-xl p-3"><p class="text-xs text-gray-500">Seller Location</p><p class="text-sm font-black text-gray-900">${u(String(m(e,"location")||"Marketplace"))}</p></div>
      </div>`,!1,"sky"))}return t.join("")}function ba(e){const t=m(e,"seller_name")||m(e,"contact_name"),a=m(e,"seller_phone")||m(e,"contact_phone"),r=m(e,"seller_email")||m(e,"contact_email"),o=m(e,"location"),n=[];return t&&n.push({icon:"user-round",label:"Seller / Agent",value:t}),a&&n.push({icon:"phone",label:"Phone / WhatsApp",value:a,link:"tel:"+a.replace(/[^0-9+]/g,"")}),r&&n.push({icon:"mail",label:"Email",value:r,link:"mailto:"+r}),o&&n.push({icon:"map-pin",label:"Location",value:o}),`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${ae("contact-round","Buyer Information","emerald")}
      <div class="space-y-2.5">
        ${n.map(i=>`
          <div class="flex items-center justify-between gap-3 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
            <span class="flex items-center gap-2 text-sm text-gray-800 font-bold"><i data-lucide="${i.icon}" class="w-4 h-4 text-emerald-600"></i> ${i.label}</span>
            ${i.link?`<a href="${u(i.link)}" class="text-sm text-blue-600 font-bold hover:underline">${u(String(i.value))}</a>`:`<span class="text-sm text-gray-700 font-semibold">${u(String(i.value))}</span>`}
          </div>`).join("")}
        <div class="bg-emerald-50 border border-emerald-100 rounded-xl p-3.5 flex items-start gap-2.5">
          <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600 mt-0.5 shrink-0"></i>
          <p class="text-xs text-gray-600 leading-relaxed">Buy with confidence — secure checkout, payment protection and verified contact details. Questions about this ${e.listing_type==="property"?"property":"vehicle"}? Reach out before purchase, or open a live chat any time.</p>
        </div>
      </div>
    </div>`}function j(e,t,a,r,o=!1,n="blue"){const i={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"},l=i[n]||i.blue;return`
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
    </div>`}window.toggleAccordion=e=>{const t=document.querySelector(`[data-acc-body="${e}"]`),a=document.querySelector(`[data-acc-icon="${e}"]`);!t||!a||(t.classList.toggle("hidden"),a.classList.toggle("rotate-180"))};function ya(){return`
    <div class="space-y-3 text-[15px] text-gray-700 leading-relaxed">
      <p class="flex items-start gap-2.5"><i data-lucide="truck" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Shipping methods.</strong> Standard delivery is <strong>free worldwide</strong> (3–7 business days). Express (2–4 business days, $25) and Priority (1–2 business days, $50) are available at checkout.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Courier partners.</strong> We ship with trusted international couriers — DHL, FedEx, UPS and EMS. Every shipment gets a tracking number.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="clock" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Processing time.</strong> Orders are processed within 1–2 business days after payment confirmation. Bank-transfer orders are processed once the receipt is verified.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="globe" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">International delivery.</strong> We ship to over 200 countries. Customs duties and import taxes may apply and are the buyer's responsibility.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="search-check" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Tracking.</strong> You'll receive a shipping confirmation email with your tracking number. You can also track orders from your account dashboard.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="badge-help" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span>Questions? <a href="/shipping-policy.html" class="text-blue-600 font-bold hover:underline">Read the full Shipping Policy</a>.</span></p>
    </div>`}function ha(){return`
    <div class="space-y-3 text-[15px] text-gray-700 leading-relaxed">
      <p class="flex items-start gap-2.5"><i data-lucide="rotate-ccw" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">14-day easy returns.</strong> Items may be returned within 14 days of delivery. Refund requests must be submitted within 30 days of the order date.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="calendar-x" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Cancellation before shipment.</strong> Cancel before your order ships and a full refund is issued within 5–7 business days.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package-x" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Damaged or defective.</strong> If your item arrives damaged, contact us within 7 days with photos — we arrange a replacement or full refund, including return shipping.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package-search" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Non-delivery.</strong> If your order doesn't arrive within the estimated window plus 14 days, we investigate with the carrier and refund or resend at no cost.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="wallet" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Refund processing.</strong> Approved refunds are processed within 5–7 business days. Card refunds take 5–10 business days to appear, bank transfers 7–14, mobile money 3–5.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="circle-slash" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Non-refundable.</strong> Final-sale items, digital products, and items used or damaged by the customer are not eligible for refunds.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="badge-help" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span>Questions? <a href="/refund-policy.html" class="text-blue-600 font-bold hover:underline">Read the full Return &amp; Refund Policy</a>.</span></p>
    </div>`}function fa(){const e=[{q:"How do I track my order?",a:"Once your order ships you'll get a confirmation email with your tracking number. You can also track it anytime from your account dashboard under Shipping & Delivery."},{q:"Is shipping really free worldwide?",a:"Yes. Standard shipping to any country is free on every order. Express and Priority upgrades are available at checkout if you need it sooner."},{q:"How long does delivery take?",a:"Standard delivery takes 3–7 business days. Express takes 2–4 business days and Priority 1–2 business days. Processing adds 1–2 business days after payment is confirmed."},{q:"How do returns work?",a:"Items can be returned within 14 days of delivery. Refund requests must be submitted within 30 days of the order date — see the Return &amp; Refund Policy section above."}],t=[{q:"Is my payment secure?",a:"Yes. All payments are processed over SSL-encrypted connections through certified payment gateways. Your payment details are never stored on our servers in plain text."},{q:"Can I cancel my order before it ships?",a:"Absolutely. Cancel before shipment and a full refund is issued within 5–7 business days to your original payment method."},{q:"What if my item arrives damaged?",a:"Contact us within 7 days of delivery with photos and a description. We'll arrange a replacement or a full refund — including return shipping costs."},{q:"How do I contact customer support?",a:"Email us at support@weverseonlineshop.com or use the Contact page. Our team reviews every message within 48 hours."},{q:"Do you ship to my country?",a:"We ship to over 200 countries worldwide. Customs duties and import taxes, where applicable, are the buyer's responsibility."},{q:"How do I request a refund?",a:"Email support@weverseonlineshop.com with your order number, the reason, and any supporting documentation. Approved refunds are processed within 5–7 business days."}],a=r=>`
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
    </div>`}function ga(e){const t=(e.description||"").trim(),a="text-[15px] sm:text-[16px] text-gray-900 leading-[1.75] mb-3";if(t.length>140)return t.split(/\r?\n+/).filter(Boolean).map(x=>`<p class="${a}">${u(x)}</p>`).join("");(e.title||"this item").trim();const r=String(e.category||e.listing_type||"item").toLowerCase(),o=(e.brand||"").trim(),n=(e.color||"").trim(),i=(e.condition||"").trim(),l=(e.country||"").trim(),s=Array.isArray(e.features)&&e.features.length?e.features.map(x=>typeof x=="string"?x.trim():(x&&x.label||"").trim()).filter(Boolean):[],d=Array.isArray(e.tags)&&e.tags.length?e.tags.map(x=>typeof x=="string"?x.trim():String(x).trim()).filter(Boolean):[];let c=gt(String(e.property_id||e.id||"")+"::desc");const b=()=>{c|=0,c=c+1831565813|0;let x=Math.imul(c^c>>>15,1|c);return x=x+Math.imul(x^x>>>7,61|x)^x,((x^x>>>14)>>>0)/4294967296},h=x=>x[Math.floor(b()*x.length)%x.length],y=h(["This "+r+" is built around one simple idea: you get something genuinely useful that holds up to everyday use.","A practical, well-made "+r+" that fits right into your routine without overcomplicating things.","Thoughtfully put together and easy to live with, this "+r+" does exactly what it should, without fuss.","Made to be used, not just looked at — a dependable "+r+" that earns its place."]),v=h(["The materials and finish feel solid in person, so you can count on it for the long run.","Construction is clean and sturdy, and the details are finished with real care.","It is well assembled and holds up to regular use, with quality you can feel right away."]),g=h(["It is easy to use from the moment it arrives, with nothing complicated to figure out.","Everything is straightforward and practical — set it up and it just works.","Designed to be convenient day to day, it is simple to handle and a pleasure to use."]);let p=[];o&&p.push(`brand: ${o}`),i&&p.push(i.toLowerCase()==="new"?"brand new condition":`${i.toLowerCase()} condition`),n&&p.push(`colour: ${n}`),l&&p.push(`shipping from ${l}`),p=p.filter(Boolean);const w=p.length?`You can expect ${p.slice(0,3).join(" · ")}.`:"",_=d.length?d.slice(0,6).map(x=>`<span class="inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 mr-1.5 mb-1.5">${u(x)}</span>`).join(""):"",I=s.length?`
      <div class="mt-4">
        <h4 class="flex items-center gap-2 text-[13px] font-black uppercase tracking-wide text-gray-900 mb-2.5">
          <i data-lucide="list-checks" class="w-4 h-4 text-blue-500"></i> Key features
        </h4>
        <ul class="space-y-2.5">
          ${s.slice(0,6).map(x=>`
            <li class="flex items-start gap-2.5">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-blue-500 shrink-0 mt-0.5"></i>
              <span class="text-[15px] sm:text-[16px] text-gray-900 leading-relaxed">${u(x)}</span>
            </li>`).join("")}
        </ul>
      </div>`:"";return`
    <h4 class="flex items-center gap-2 text-[13px] font-black uppercase tracking-wide text-gray-900 mb-3">
      <i data-lucide="file-text" class="w-4 h-4 text-blue-500"></i> About this ${r}
    </h4>
    <p class="${a}">${u(y)}</p>
    <p class="${a}">${u(v)} ${u(g)}</p>
    ${t.trim()?`<p class="${a}">${u(t.trim())}</p>`:""}
    ${w?`<p class="${a}"><span class="font-bold text-gray-900">Details:</span> ${u(w)}</p>`:""}
    ${I}
    ${_?`<div class="mt-3 pt-3">${_}</div>`:""}
    <p class="${a} mt-3 border-t border-slate-100 pt-3">${u(h(["Order with confidence — the Weverse Online Shop team is here if you need anything along the way.","A dependable everyday choice, backed by our easy-returns promise if it is not quite right for you.","Great value for what you get, delivered to your door with secure checkout and helpful support."]))}</p>`}function Be(e,t,a,r,o,n=""){const i=e.listing_type==="property",l=`
    ${ga(e)}
    ${o||""}
    ${kt(r)}
    ${wt(a)}`;return`
    ${j("acc-details","file-text",i?"Property Details":Se(e)?"Vehicle Details":"Product Details",l,!0,"blue")}
    ${j("acc-specs","settings-2",i?"Property Specifications":Se(e)?"Vehicle Specifications":"Specifications",xt(t)||'<p class="text-sm text-gray-500">No specifications available for this listing.</p>',!0,"violet")}
    ${n||""}
    ${j("acc-shipping","truck","Shipping Information",ya(),!1,"emerald")}
    ${j("acc-refund","rotate-ccw","Return &amp; Refund Policy",ha(),!1,"rose")}
    ${j("acc-faq","circle-help","Frequently Asked Questions",fa(),!1,"amber")}`}function qe(){const e=document.getElementById("details-content");if(!e)return;e.querySelectorAll("[data-acc]").forEach(a=>{a.dataset.bound||(a.dataset.bound="1",a.addEventListener("click",()=>{const r=a.dataset.acc,o=e.querySelector(`[data-acc-body="${r}"]`),n=e.querySelector(`[data-acc-icon="${r}"]`);!o||!n||(o.classList.toggle("hidden"),n.classList.toggle("rotate-180"),window.lucide&&lucide.createIcons())}))}),e.querySelectorAll(".faq-q").forEach(a=>{a.dataset.bound||(a.dataset.bound="1",a.addEventListener("click",()=>{const r=a.querySelector("i, svg"),o=a.nextElementSibling;o&&(o.classList.toggle("hidden"),r&&r.classList.toggle("rotate-180"))}))});const t=e.querySelector("#faq-show-more");t&&!t.dataset.bound&&(t.dataset.bound="1",t.addEventListener("click",()=>{const a=e.querySelector(".faq-extra");if(!a)return;a.classList.toggle("hidden");const r=t.querySelector("i, svg");r&&r.classList.toggle("rotate-180"),t.innerHTML=a.classList.contains("hidden")?'Show more questions <i data-lucide="chevron-down" class="w-4 h-4"></i>':'Show fewer questions <i data-lucide="chevron-up" class="w-4 h-4"></i>',window.lucide&&lucide.createIcons()}))}function _e(e){if(!e)return"";const t=new Date(e);return!t.getTime()||isNaN(t.getTime())?"":t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function va(e){if(typeof e.likes=="number"&&e.likes>0)return e.likes;const t=String(e.text||e.comment||e.created_at||e.name||"");let a=2166136261;for(let r=0;r<t.length;r++)a^=t.charCodeAt(r),a=Math.imul(a,16777619);return 2+(a>>>0)%140}function it(e){return e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"k":String(e)}function xa(e){return`
    <div class="flex gap-2.5 pl-0.5">
      <div class="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center text-[11px] font-black uppercase shadow-sm">${u(String(e.author||"Guest").trim().charAt(0).toUpperCase()||"G")}</div>
      <div class="min-w-0 flex-1 rounded-xl bg-gray-50 border border-gray-100 px-3 py-2">
        <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <span class="text-xs font-bold text-gray-900">${u(e.author||"Guest")}</span>
          <span class="text-[11px] text-gray-400">&middot; ${_e(e.created_at)}</span>
        </div>
        <p class="text-sm text-gray-700 mt-0.5 leading-relaxed break-words">${u(e.body||"")}</p>
      </div>
    </div>`}function wa(e){const t=e.author_name||e.name||e.profiles?.full_name||"Anonymous",a=u(t.trim().charAt(0).toUpperCase()||"A"),r=e.handle?`<span class="text-xs font-semibold text-gray-400">${u(e.handle)}</span>`:"",o=_e(e.date||e.created_at),n=o?`<span class="text-xs text-gray-400">&middot; ${o}</span>`:"",i=e.location&&!e.handle?`<span class="text-xs text-gray-400">&middot; ${u(e.location)}</span>`:"",l=e.title?`<p class="text-sm font-bold text-gray-900 mt-1">${u(e.title)}</p>`:"",s=e.verified?'<span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full"><i data-lucide="badge-check" class="w-3 h-3"></i> Verified Purchase</span>':"",d=e.review_photo?`<div class="mt-2.5"><img src="${u(e.review_photo)}" alt="Customer photo" class="w-28 h-28 object-cover rounded-xl border border-gray-200" loading="lazy" onerror="this.style.display='none'"></div>`:"",c=e._key||"",b=N.likes.get(c)||0,h=va(e)+b,y=N.liked.has(c),v=N.comments.get(c)||[],g=(typeof e.replies=="number"&&e.replies>0?e.replies:0)+v.length,p=`
    <button type="button" class="review-like-btn btn-press inline-flex items-center gap-1.5 text-xs font-bold transition ${y?"text-[#fe2c55]":"text-gray-500 hover:text-[#fe2c55]"}" data-key="${c}">
      <i data-lucide="heart" class="w-4 h-4 ${y?"fill-[#fe2c55] text-[#fe2c55]":""}"></i> ${it(h)}
    </button>`,w=`
    <button type="button" class="review-reply-toggle btn-press inline-flex items-center gap-1.5 text-xs font-bold transition ${z===c?"text-blue-600":"text-gray-500 hover:text-blue-500"}" data-key="${c}">
      <i data-lucide="message-circle" class="w-4 h-4"></i> ${g>0?`${it(g)} replies`:"Reply"}
    </button>`;let _="";z===c&&(_=`
      <div class="review-reply-box mt-3 rounded-xl border border-gray-200 bg-gray-50/80 p-3 space-y-2">
        <input type="text" class="review-reply-name w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" placeholder="Your name (optional)" maxlength="40" value="${u(de||"")}">
        <textarea class="review-reply-body w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[74px] resize-y" placeholder="Write a comment..." maxlength="1000"></textarea>
        <div class="flex items-center justify-end gap-2">
          <button type="button" class="review-reply-cancel text-xs font-bold text-gray-500 hover:text-gray-700 px-3 py-2 transition">Cancel</button>
          <button type="button" data-key="${c}" class="review-reply-post btn-press inline-flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition shadow-sm shadow-blue-500/20"><i data-lucide="send" class="w-3.5 h-3.5"></i> Comment</button>
        </div>
      </div>`);const I=v.length?`<div class="mt-2.5 space-y-2.5">${v.map(xa).join("")}</div>`:"";return`
    <div class="flex gap-3 py-4 border-b border-gray-100 last:border-0">
      <button type="button" class="review-avatar shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-black uppercase shadow-sm transition hover:ring-2 hover:ring-blue-200" data-open-reviewer="${c}" title="View ${u(t)}'s profile">${a}</button>
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <button type="button" data-open-reviewer="${c}" class="review-author text-sm font-bold text-gray-900 hover:text-blue-600 hover:underline transition">${u(t)}</button>${r}${n}${i}
          ${s}
        </div>
        <div class="flex gap-0.5 mt-1">${[1,2,3,4,5].map(x=>`<i data-lucide="star" class="w-3.5 h-3.5 ${x<=(e.rating||0)?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}</div>
        ${l}
        <p class="text-[15px] text-gray-700 leading-relaxed mt-1.5">${u(e.text||e.comment||"")}</p>
        ${d}
        <div class="flex items-center gap-5 mt-2.5">
          ${p}
          ${w}
        </div>
        ${_}
        ${I}
      </div>
    </div>`}function je(e){return`
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
    </div>`}function ka(e,t,a){const r=Math.max(1,a);return`
    <div class="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 items-center bg-gray-50 border border-gray-100 rounded-2xl p-4">
      ${[5,4,3,2,1].map(o=>{const n=t[o]||0,i=Math.round(n/r*100);return`
        <div class="flex items-center gap-1.5 text-xs text-gray-600 font-semibold"><i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>${o}</div>
        <div class="flex items-center gap-2">
          <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden"><div class="h-full bg-amber-400 rounded-full" style="width:${i}%"></div></div>
          <span class="text-[11px] text-gray-400 w-9 text-right tabular-nums">${i}%</span>
        </div>`}).join("")}
    </div>`}function $a(){return new URLSearchParams(window.location.search).get("id")}const te=[...mt];function lt(e){return te.find(t=>t.property_id===e)||null}let Ue=null;function Sa(){return Ue||(Ue=At(()=>import("./motorhome-data-CupbOvk0.js").then(e=>e.c),[]).then(e=>{const t=e.PRODUCT_EXTRA_LISTINGS||[];for(const a of t)te.some(r=>r.property_id===a.property_id)||te.push(a);return te}).catch(()=>te)),Ue}function _a(e){const t=document.getElementById("details-content"),a=Nt(e),o=Ce(e.images).map((c,b)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${b===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(c)}">
      <img src="${u(c)}" alt="View ${b+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${P}'">
    </button>`).join(""),n=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cargo Area / Truck Bed","Engine","Wheels / Tires","Additional View"],i=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"package",label:"Payload Capacity",value:e.payload_capacity},{icon:"link",label:"Towing Capacity",value:e.towing_capacity},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(c=>c.value!=null&&c.value!==""&&c.value!=="N/A");Ae(e.features);const l=je();t.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${u(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${u(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${u(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${u(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      <!-- Main Image -->
      <div class="relative w-full h-[46vh] sm:h-[60vh] lg:h-[72vh] rounded-2xl overflow-hidden bg-gray-100 mb-3 hero-zoom flex items-center justify-center">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-contain" onerror="this.onerror=null;this.src='${P}'">
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

      <!-- Smart Agent Buttons -->
      <div class="mb-8 pt-4 border-t border-gray-100" id="agent-buttons-block">${Le(e,{compact:!1})}</div>

      <!-- Description -->
      ${Be(e,i,e.features,null,null)}

      ${l}

      ${Te(e)}

      ${Re()}
    </div>
  `;const s=document.getElementById("hero-image"),d=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((c,b)=>{c.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.add("border-gray-200")),c.classList.add("active","border-blue-500"),c.classList.remove("border-gray-200"),s.src=c.dataset.img,d.textContent=n[b]||`View ${b+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await W()?window.location.href=`/checkout.html?id=${e.property_id}`:(me(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Ie(e)}),Ee(document.getElementById("agent-buttons-block"),()=>e),Ne(e),He(e),be(e),qe(),window.lucide&&lucide.createIcons()}function La(e){const t=document.getElementById("details-content"),a=$e(e),o=Ce(e.images).map((c,b)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${b===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(c)}">
      <img src="${u(c)}" alt="View ${b+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${P}'">
    </button>`).join(""),n=["Exterior Front","Exterior Side","Exterior Rear","Living Area","Kitchen","Bedroom","Bathroom","Additional View"],i=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(c=>c.value!=null&&c.value!==""&&c.value!=="N/A");Ae(e.features);const l=je();t.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${u(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${u(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${u(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${u(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      <!-- Main Image -->
      <div class="relative w-full h-[46vh] sm:h-[60vh] lg:h-[72vh] rounded-2xl overflow-hidden bg-gray-100 mb-3 hero-zoom flex items-center justify-center">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-contain" onerror="this.onerror=null;this.src='${P}'">
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

      <!-- Smart Agent Buttons -->
      <div class="mb-8 pt-4 border-t border-gray-100" id="agent-buttons-block">${Le(e,{compact:!1})}</div>

      <!-- Description -->
      ${Be(e,i,e.features,null,null)}

      ${l}

      ${Te(e)}

      ${Re()}
    </div>
  `;const s=document.getElementById("hero-image"),d=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((c,b)=>{c.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.add("border-gray-200")),c.classList.add("active","border-blue-500"),c.classList.remove("border-gray-200"),s.src=c.dataset.img,d.textContent=n[b]||`View ${b+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await W()?window.location.href=`/checkout.html?id=${e.property_id}`:(me(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Ie(e)}),Ee(document.getElementById("agent-buttons-block"),()=>e),Ne(e),He(e),be(e),qe(),window.lucide&&lucide.createIcons()}function Ia(e){const t=document.getElementById("details-content"),a=$e(e),o=Ce(e.images).map((c,b)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${b===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(c)}">
      <img src="${u(c)}" alt="View ${b+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${P}'">
    </button>`).join(""),n=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cabin / Interior","Wheels / Tires","Additional View"],i=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(c=>c.value!=null&&c.value!==""&&c.value!=="N/A");Ae(e.features);const l=je();t.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${u(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${u(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${u(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${u(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      <!-- Main Image -->
      <div class="relative w-full h-[46vh] sm:h-[60vh] lg:h-[72vh] rounded-2xl overflow-hidden bg-gray-100 mb-3 hero-zoom flex items-center justify-center">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-contain" onerror="this.onerror=null;this.src='${P}'">
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

      <!-- Smart Agent Buttons -->
      <div class="mb-8 pt-4 border-t border-gray-100" id="agent-buttons-block">${Le(e,{compact:!1})}</div>

      <!-- Description -->
      ${Be(e,i,e.features,null,null)}

      ${l}

      ${Te(e)}

      ${Re()}
    </div>
  `;const s=document.getElementById("hero-image"),d=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((c,b)=>{c.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.add("border-gray-200")),c.classList.add("active","border-blue-500"),c.classList.remove("border-gray-200"),s.src=c.dataset.img,d.textContent=n[b]||`View ${b+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await W()?window.location.href=`/checkout.html?id=${e.property_id}`:(me(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Ie(e)}),Ee(document.getElementById("agent-buttons-block"),()=>e),Ne(e),He(e),be(e),qe(),window.lucide&&lucide.createIcons()}function Ea(e){const t=e.listing_type==="property",a=t?"Share Property":"Share",r=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`,o=t?'<a href="#listing-map" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-bold py-3 rounded-xl transition text-sm"><i data-lucide="map-pin" class="w-5 h-5"></i> View Map</a>':"",n=t?`
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
      <div class="mt-4 pt-4 border-t border-gray-100" id="agent-buttons-block">${Le(e,{compact:!1})}</div>
    </div>
  `}function Te(e){const t=e.listing_type==="property",a=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`;return`
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
    </div>`}function Re(){return`
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
      </div>`}function Ma(e){const t=new Map,a=r=>(r||[]).forEach(o=>{o&&o.property_id&&t.set(o.property_id,o)});return a(qt),a(Ht),a(Pt),a(bt),a(yt),a(Wt),a(mt),a(te),a(Bt()),Tt(e.category||e.subcategory),[...t.values()].filter(r=>r.property_id!==e.property_id)}function Ca(e,t){let a=0;const r=d=>String(d||"").trim().toLowerCase();e.listing_type&&e.listing_type===t.listing_type&&(a+=40),e.category&&r(e.category)===r(t.category)&&(a+=30),e.subcategory&&r(e.subcategory)===r(t.subcategory)&&(a+=20),e.brand&&r(e.brand)===r(t.brand)&&(a+=15),e.breed&&r(e.breed)===r(t.breed)&&(a+=15),e.model&&r(e.model)===r(t.model)&&(a+=10),e.property_type&&r(e.property_type)===r(t.property_type)&&(a+=15);const o=parseFloat(e.price)||0,n=parseFloat(t.price)||0;if(o>0&&n>0){const d=Math.min(o,n)/Math.max(o,n);d>=.8?a+=10:d>=.6?a+=6:d>=.4&&(a+=3)}e.country_code&&e.country_code===t.country_code&&(a+=5);const i=new Set(r(e.title).split(/[^a-z0-9]+/).filter(d=>d.length>2)),l=new Set(r(t.title).split(/[^a-z0-9]+/).filter(d=>d.length>2));let s=0;return i.forEach(d=>{l.has(d)&&s++}),a+=Math.min(s*2,10),a}function ze(e,t){const a=document.getElementById(e);if(!a)return;const r=a.querySelector(".rel-grid");if(!r)return;if(!t.length){a.classList.add("hidden");return}a.classList.remove("hidden"),r.innerHTML="";const o=document.createDocumentFragment();t.slice(0,10).forEach(n=>{const i=document.createElement("div");i.className="shrink-0 w-[260px] sm:w-[320px] snap-start relative";const l=Ft(n);l.style.width="100%",i.appendChild(l);const s=document.createElement("span");s.className="kco-live-dot absolute top-2.5 left-2.5 z-10 w-2.5 h-2.5 ring-2 ring-white/80",s.setAttribute("aria-hidden","true"),s.title="Available now",i.appendChild(s),o.appendChild(i)}),r.appendChild(o),window.lucide&&lucide.createIcons()}function Ne(e){const t=Ma(e),a=t.map(s=>({item:s,score:Ca(e,s)})).sort((s,d)=>d.score-s.score||(d.item.rating||0)-(s.item.rating||0)),r=a.filter(s=>s.score>=35).map(s=>s.item),o=new Set(r.map(s=>s.property_id)),n=a.filter(s=>s.score>=15&&s.score<35&&!o.has(s.item.property_id)).map(s=>s.item),i=[...t].filter(s=>!o.has(s.property_id)).sort((s,d)=>(d.rating||0)-(s.rating||0)).slice(0,10),l=a.filter(s=>!o.has(s.item.property_id)).map(s=>s.item);ze("similar-section",r.length?r:l.slice(0,10)),ze("related-section",n.length?n:l.slice(0,10)),ze("recommended-section",i.length?i:l.slice(0,10))}function Aa(e){const t=document.getElementById("details-content"),a=e.listing_type==="property",r=Se(e),o=$e(e),n=Ze(e.country_code),i=e.listing_type==="product"?"Product ID":a?"Property ID":"Listing ID";let l="",s="",d=parseFloat(e.real_price);if((!Number.isFinite(d)||d<=0)&&(d=parseFloat(e.compare_at_price??e.original_price)),Number.isFinite(d)&&d>0&&d>parseFloat(e.price)){const f=Math.round((1-parseFloat(e.price)/d)*100);l=`<span class="text-lg text-gray-400 price-strike line-through font-medium">${$e({...e,price:d})}</span>`,s=`<span class="kco-sale-pulse kco-glow inline-flex items-center gap-1 text-xs font-black text-white bg-red-500 px-2.5 py-1 rounded-full relative overflow-hidden">-${f}% OFF<span class="absolute inset-0 kco-shimmer pointer-events-none"></span></span>`}const c=e.availability_status||(e.listing_type==="product"?"In Stock":"Available"),b=Ce(e.images),h=[e.video,e.video_url].find(f=>f&&typeof f=="string"&&U(f)),y=[...b];h&&!y.includes(h)&&y.unshift(h);const v=y.findIndex(f=>U(f)),g=y.findIndex(f=>!U(f)),p=g>=0?g:v>=0?v:0,w=y[p],_=U(w),I=g>=0?y[g]:"",x=y.map((f,k)=>{const E=U(f)?`<video src="${u(f)}" muted preload="auto" playsinline class="w-20 h-16 object-cover"></video>
         <div class="absolute inset-0 flex items-center justify-center"><div class="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center"><svg class="w-2.5 h-2.5 text-gray-800 ml-px" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:`<img src="${u(f)}" alt="View ${k+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${P}'">`;return`<button class="gallery-thumb relative rounded-lg overflow-hidden border-2 ${k===p?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(f)}">
      ${E}
    </button>`}).join("");let H="";if(a){const f=[{icon:"globe",label:"Country",value:`${n} ${e.country}`},{icon:"map-pin",label:"State / Province",value:e.state},{icon:"building",label:"City",value:e.city},{icon:"navigation",label:"Town / Local Area",value:e.town},{icon:"signpost",label:"Neighborhood / District",value:m(e,"neighborhood")},{icon:"home",label:"Address",value:m(e,"address")}].filter(k=>k.value);H=`
      <div class="mt-4">
        ${ae("map-pin","Location","rose")}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${f.map(k=>`
            <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
              <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="${k.icon}" class="w-4 h-4 text-blue-500"></i></div>
              <div><div class="text-gray-500 text-xs">${k.label}</div><div class="text-gray-900 font-bold text-[15px]">${k.value}</div></div>
            </div>
          `).join("")}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-200" style="height:280px"></div>
      </div>`}else if(r){const f=m(e,"location")||[m(e,"city"),m(e,"state"),m(e,"country")].filter(Boolean).join(", ");if(f){const k="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(f);H=`
      <div class="mt-4">
        ${ae("map-pin","Location","rose")}
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="sm:col-span-2 flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
            <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="map-pin" class="w-4 h-4 text-blue-500"></i></div>
            <div><div class="text-gray-500 text-xs">Vehicle Location</div><div class="text-gray-900 font-bold text-[15px]">${u(String(f))}</div></div>
          </div>
          <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
            <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="navigation" class="w-4 h-4 text-blue-500"></i></div>
            <div><div class="text-gray-500 text-xs">View on Map</div><a href="${k}" target="_blank" rel="noopener" class="text-blue-600 font-bold text-sm hover:underline">Google Maps <i data-lucide="external-link" class="w-3.5 h-3.5 inline"></i></a></div>
          </div>
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-200" style="height:280px"></div>
      </div>`}}let C=[];a?(C=[{icon:"bed-double",label:"Bedrooms",value:e.bedrooms},{icon:"bath",label:"Bathrooms",value:e.bathrooms},{icon:"droplets",label:"Half Bathrooms",value:e.half_bathrooms},{icon:"building",label:"Building / Living Size",value:e.building_size},{icon:"ruler",label:"Land / Lot Size",value:e.land_size},{icon:"layers",label:"Floors / Levels",value:e.floors},{icon:"car-front",label:"Parking Spaces",value:e.parking_spaces},{icon:"warehouse",label:"Garage",value:e.garage},{icon:"home",label:"Property Type",value:e.property_type},{icon:"sofa",label:"Furnished",value:e.furnished},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"calendar",label:"Year Built",value:e.year_built},{icon:"paintbrush",label:"Year Renovated",value:e.year_renovated},{icon:"mail",label:"ZIP / Postal Code",value:e.zip_code},{icon:"tag",label:"Status",value:e.listing_status==="rent"?"For Rent":"For Sale"},{icon:"signpost",label:"Neighborhood",value:m(e,"neighborhood")},{icon:"sofa",label:"Living Areas",value:m(e,"living_areas")},{icon:"flame",label:"Kitchens",value:m(e,"kitchens")},{icon:"tree-pine",label:"Balconies",value:m(e,"balconies")},{icon:"leaf",label:"Garden / Yard",value:m(e,"garden")},{icon:"waves",label:"Pool",value:m(e,"pool")},{icon:"lock",label:"Security",value:m(e,"security")},{icon:"home",label:"Utilities & Heating",value:m(e,"utilities")},{icon:"hammer",label:"Construction Type",value:m(e,"construction_type")},{icon:"clipboard-check",label:"Construction Status",value:m(e,"construction_status")},{icon:"user-check",label:"Ownership Type",value:m(e,"ownership_type")}].filter(f=>f.value!=null&&f.value!==""),le("Property Information","home",C)):e.category==="Motorhomes"?(C=[{icon:"factory",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank}].filter(f=>f.value!=null&&f.value!==""),le("Vehicle Information","bus",C,"violet")):r?(C=[{icon:"tag",label:"Title / Listing",value:e.title},{icon:"car-front",label:"Vehicle / Body Type",value:m(e,"body_type")},{icon:"factory",label:"Make / Brand",value:m(e,"make")||e.brand},{icon:"car",label:"Model",value:m(e,"model")},{icon:"badge-award",label:"Trim / Edition",value:m(e,"trim")},{icon:"calendar",label:"Year",value:m(e,"model_year")},{icon:"gauge",label:"Mileage",value:m(e,"mileage")},{icon:"zap",label:"Engine",value:m(e,"engine")},{icon:"gauge",label:"Horsepower",value:m(e,"horsepower")},{icon:"cog",label:"Transmission",value:m(e,"transmission")},{icon:"route",label:"Drive Type",value:m(e,"drive_type")},{icon:"fuel",label:"Fuel Type",value:m(e,"fuel_type")},{icon:"fuel",label:"Fuel Economy",value:m(e,"fuel_economy")},{icon:"users",label:"Seating Capacity",value:m(e,"seating_capacity")},{icon:"door-open",label:"Doors",value:m(e,"doors")},{icon:"palette",label:"Color / Exterior",value:m(e,"color")},{icon:"fingerprint",label:"VIN",value:m(e,"vin")},{icon:"badge-check",label:"Condition",value:m(e,"condition")},{icon:"wrench",label:"Warranty",value:m(e,"warranty")}].filter(f=>f.value!=null&&f.value!==""),le("Vehicle Specifications","car-front",C,"violet")):e.listing_type==="product"?(C=[{icon:"factory",label:"Brand",value:e.brand},{icon:"tag",label:"Subcategory",value:e.subcategory},{icon:"palette",label:"Colour",value:e.color},{icon:"ruler",label:"Size",value:e.size},{icon:"layers",label:"Material",value:e.material},{icon:"badge-check",label:"Condition",value:e.condition||"New"},{icon:"shield-check",label:"Warranty",value:e.warranty},{icon:"package-check",label:"Availability",value:e.availability_status}].filter(f=>f.value!=null&&f.value!==""),le("Product Information","package",C)):e.listing_type==="pet"&&(C=[{icon:"paw-print",label:"Breed",value:e.breed},{icon:"calendar",label:"Age",value:e.age},{icon:"users",label:"Gender",value:e.gender},{icon:"palette",label:"Colour",value:e.color},{icon:"scale",label:"Weight",value:e.size},{icon:"globe",label:"Origin",value:`${Ze(e.country_code)} ${e.country}`},{icon:"badge-check",label:"Health",value:e.condition}].filter(f=>f.value!=null&&f.value!==""),le("Pet Information","paw-print",C,"amber")),Ae(e.features),sa(e.highlights);const G=je(),V=[];if(Number(e.rating)>0){const f=Math.max(0,Math.round(Number(e.rating_count)||0));V.push(`<span class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700"><span class="flex">${vt(e.rating,"w-4 h-4")}</span><span>${Number(e.rating).toFixed(1)}${f?` (${f} rated)`:""}</span></span>`)}Math.round(Number(e.review_count)||0)>0&&V.push(`<span class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700"><i data-lucide="message-square" class="w-4 h-4 text-blue-500"></i>${Math.round(Number(e.review_count))} reviews</span>`),Math.round(Number(e.favorite_count)||0)>0&&V.push(`<span class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700"><i data-lucide="heart" class="w-4 h-4 text-rose-500"></i>${Math.round(Number(e.favorite_count))} saved</span>`);const ye=Math.round(Number(e.sold_count)||Number(e.review_count)||0);ye>0&&V.push(`<span class="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700"><i data-lucide="shopping-bag" class="w-4 h-4"></i>${ye}+ shopped</span>`);const $=V.length?`<div class="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 pt-3 border-t border-gray-100">${V.join("")}</div>`:"",q=parseInt(e.stock_quantity,10);let X="";Number.isFinite(q)&&q>0&&q<=5?X=`<span class="kco-hurry inline-flex items-center gap-1.5 text-xs font-black text-amber-800 bg-amber-50 border-2 border-amber-300 px-2.5 py-1 rounded-full"><i data-lucide="flame" class="w-3.5 h-3.5 kco-blink-soft text-amber-500"></i> Hurry! Only ${q} left in stock</span>`:Number.isFinite(q)&&q>5&&(X=`<span class="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full"><i data-lucide="layers" class="w-3.5 h-3.5"></i> ${q} in stock</span>`);let re="";s&&(re=`
      <div class="mt-3 kco-glow relative overflow-hidden rounded-xl bg-white border border-blue-200 p-0">
        <div class="flex items-center gap-3 px-3 py-2">
          <span class="kco-live-dot shrink-0" aria-hidden="true"></span>
          <span class="text-xs font-black text-gray-900 uppercase tracking-wide">Live deal</span>
          <span class="text-xs font-black text-red-500 kco-blink-soft">Save ${Math.round((1-parseFloat(e.price)/d)*100)}%</span>
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
        </div>
        ${$}
      </div>

      <div class="flex flex-wrap items-center justify-between gap-4 bg-gradient-to-br from-blue-50 via-white to-white border border-blue-100 rounded-2xl p-5 mb-6">
        <div>
          <div class="flex items-baseline flex-wrap gap-2">
            ${l}
            <span class="text-4xl font-black text-blue-600">${o}</span>
          </div>
          <div class="flex items-center gap-2 mt-1.5">
            ${s}
            <span class="text-sm text-emerald-600 font-bold flex items-center gap-1"><i data-lucide="package-check" class="w-4 h-4"></i> ${c}</span>
          </div>
          ${X?`<div class="flex items-center gap-2 mt-1.5">${X}</div>`:""}
          ${re}
        </div>
        <div class="flex flex-col gap-1.5 text-sm">
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="truck" class="w-4 h-4 text-blue-500"></i> Free worldwide shipping</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="rotate-ccw" class="w-4 h-4 text-blue-500"></i> Easy returns within 14 days</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="lock" class="w-4 h-4 text-blue-500"></i> Secure payment protection</span>
        </div>
      </div>

      <div id="hero-wrap" class="relative w-full h-[46vh] sm:h-[60vh] lg:h-[72vh] rounded-2xl overflow-hidden bg-gray-100 mb-3 cursor-zoom-in group flex items-center justify-center" role="button" tabindex="0" aria-label="Open image gallery">
        ${_?`<video id="hero-image" src="${u(w)}" ${I?`poster="${u(I)}"`:""} autoplay muted loop playsinline preload="metadata" controls class="w-full h-full object-contain" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"></video>
             <div class="absolute inset-0 flex items-center justify-center pointer-events-none" style="display:${I?"none":"flex"}"><div class="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-lg"><svg class="w-7 h-7 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:`<img id="hero-image" src="${w}" alt="${e.title}" class="w-full h-full object-contain" onerror="this.onerror=null;this.src='${P}'">`}
        <div class="absolute inset-0 flex items-end justify-between p-3 opacity-0 group-hover:opacity-100 transition pointer-events-none">
          <span class="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-black/50 backdrop-blur px-3 py-1.5 rounded-full"><i data-lucide="expand" class="w-3.5 h-3.5"></i> Tap to enlarge</span>
        </div>
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${x}
      </div>

      ${Ea(e)}

      <div id="listing-details">
        ${Be(e,C,e.features,e.highlights,H,a?da(e):r?ma(e):"")}
      </div>

      ${G}

      ${a?Te(e):r?ba(e):""}

      <div id="recommendations-section" class="hidden">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">You May Also Like</h3>
        <div id="recommendations-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>

      ${Re()}
    </div>
  `;const Z=document.getElementById("hero-image"),Q=document.getElementById("hero-wrap");if(Z&&Z.tagName==="VIDEO"&&!I&&ra(Z,w),Q){const f=()=>Ba(e,y);Q.addEventListener("click",k=>{const R=document.getElementById("hero-image");if(R&&R.tagName==="VIDEO"){const E=R.getBoundingClientRect();if(E.width>0&&k.clientX>=E.left&&k.clientX<=E.right&&k.clientY>=E.top&&k.clientY<=E.bottom){if(R.paused&&R.readyState>=2){R.play().catch(()=>{});return}return R.paused,void 0}}f()}),Q.addEventListener("keydown",k=>{(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),f())})}t.querySelectorAll(".gallery-thumb").forEach(f=>{f.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(S=>S.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(S=>S.classList.add("border-gray-200")),f.classList.add("active","border-blue-500"),f.classList.remove("border-gray-200");const k=f.dataset.img,R=U(k),E=document.getElementById("hero-wrap");if(!E)return;const D=E.querySelector(".hero-video-overlay");D&&D.remove();const A=document.getElementById("hero-image");if(R)if(A&&A.tagName==="VIDEO")A.src=k;else{const S=document.createElement("video");S.id="hero-image",S.src=k,S.muted=!0,S.loop=!0,S.autoplay=!0,S.preload="metadata",S.playsInline=!0,S.controls=!0,I&&(S.poster=I),S.className="w-full h-full object-contain",E.insertBefore(S,E.firstChild),A&&A.remove&&A.remove();const B=document.createElement("div");B.className="hero-video-overlay absolute inset-0 flex items-center justify-center pointer-events-none",B.innerHTML='<div class="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-lg"><svg class="w-7 h-7 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>',E.insertBefore(B,E.firstChild?.nextSibling)}else if(A&&A.tagName==="IMG")A.src=k;else{const S=document.createElement("img");S.id="hero-image",S.src=k,S.alt=e.title,S.className="w-full h-full object-contain",S.onerror=function(){this.onerror=null,this.src=P},E.insertBefore(S,E.firstChild),A&&A.remove&&A.remove()}})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await W()?window.location.href=`/checkout.html?id=${e.property_id}`:(me(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Ie(e)});const oe=document.getElementById("request-viewing-btn");oe&&oe.addEventListener("click",()=>ct(e,"viewing"));const se=document.getElementById("request-info-btn");se&&se.addEventListener("click",()=>ct(e,"info"));const he=document.getElementById("view-details-btn");he&&he.addEventListener("click",()=>{const f=document.getElementById("listing-details");f&&f.scrollIntoView({behavior:"smooth",block:"start"})});const ne=document.getElementById("add-cart-btn");ne&&ne.addEventListener("click",()=>{Vt(e.property_id,1),ne.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Added to Cart',window.lucide&&lucide.createIcons(),setTimeout(()=>{ne.innerHTML='<i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart',window.lucide&&lucide.createIcons()},2e3)}),ja(e),Ee(document.getElementById("agent-buttons-block"),()=>e),He(e),be(e),Da(e),qe(),window.lucide&&lucide.createIcons(),e.property_id,e.title,parseFloat(e.price),e.currency;const T=document.getElementById("listing-map");if(T&&window.L){const f=parseFloat(e.latitude)||null,k=parseFloat(e.longitude)||null,R=[e.product_location,e.town,e.city,e.state,e.country].filter(Boolean).join(", ")||e.title,E=[e.product_location,e.town,e.city,e.state,e.country].filter(Boolean).join(", "),D="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(E||e.title),A=(B,fe,Pe)=>{const ge=L.map(T).setView([B,fe],Pe);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(ge),L.marker([B,fe]).addTo(ge).bindPopup(`<strong>${u(e.title)}</strong><br>${u(R)}`).openPopup()},S=()=>{T.innerHTML=`<div class="w-full h-full flex flex-col items-center justify-center gap-2 bg-gray-50 text-center p-4">
        <i data-lucide="map-pin" class="w-6 h-6 text-gray-400"></i>
        <p class="text-xs text-gray-500">Exact map position not available for this location.</p>
        <a href="${D}" target="_blank" rel="noopener" class="text-xs font-bold text-blue-600 hover:underline">Open location in Google Maps</a>
      </div>`,window.lucide&&lucide.createIcons()};f&&k?A(f,k,13):E?fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(E)).then(B=>B.json()).then(B=>{B&&B[0]?A(parseFloat(B[0].lat),parseFloat(B[0].lon),12):S()}).catch(S):S()}}function Ba(e,t){const a=(Array.isArray(t)&&t.length?t:[e.images?.[0]||P]).filter(Boolean);if(!a.length)return;let r=0;const o=document.createElement("div");o.id="gallery-lightbox",o.className="fixed inset-0 z-[500] bg-black/95 flex flex-col",o.innerHTML=`
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
  `,document.body.appendChild(o),document.body.style.overflow="hidden";const n=o.querySelector("#lb-media-container"),i=o.querySelector("#lb-count"),l=o.querySelector("#lb-thumbs");let s=null;const d=()=>{n.classList.add("lb-fade"),setTimeout(()=>{const g=a[r];if(U(g))n.innerHTML=`<video src="${u(g)}" controls playsinline preload="auto" class="lb-media max-w-full max-h-[70vh] object-contain rounded-lg"></video>`;else{const p=document.createElement("img");p.src=g,p.alt="Gallery",p.draggable=!1,p.className="lb-media max-w-full max-h-[70vh] object-contain",p.onerror=function(){this.onerror=null,this.src=P},n.innerHTML="",n.appendChild(p)}n.classList.remove("lb-fade"),i.textContent=`${r+1} / ${a.length}`,l.innerHTML=a.map((p,w)=>{const I=U(p)?'<div class="w-full h-full flex items-center justify-center bg-gray-800"><svg class="w-3 h-3 text-white ml-px" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>':`<img src="${u(p)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`;return`<button type="button" data-i="${w}" class="relative w-12 h-9 rounded-lg overflow-hidden border-2 ${w===r?"border-blue-500":"border-transparent"}" aria-label="Item ${w+1}">${I}</button>`}).join(""),l.querySelectorAll("[data-i]").forEach(p=>p.addEventListener("click",()=>{r=parseInt(p.dataset.i,10),d()}))},90)},c=()=>{r=(r-1+a.length)%a.length,d()},b=()=>{r=(r+1)%a.length,d()},h=()=>{o.remove(),document.body.style.overflow="",document.removeEventListener("keydown",y)},y=g=>{g.key==="Escape"?h():g.key==="ArrowLeft"?c():g.key==="ArrowRight"&&b()};o.querySelector("#lb-close").addEventListener("click",h),o.querySelector("#lb-prev").addEventListener("click",c),o.querySelector("#lb-next").addEventListener("click",b);const v=o.querySelector("#lb-viewport");v.addEventListener("touchstart",g=>{s=g.touches[0].clientX},{passive:!0}),v.addEventListener("touchend",g=>{if(s==null)return;const p=g.changedTouches[0].clientX-s;Math.abs(p)>40&&(p<0?b():c()),s=null},{passive:!0}),v.addEventListener("click",g=>{g.target===v&&h()}),document.addEventListener("keydown",y),d()}function ct(e,t){const a=t==="viewing",r=e.property_id||e.id||"",o=document.createElement("div");o.id="property-request-modal",o.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-0 sm:p-4",o.innerHTML=`
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
  `,document.body.appendChild(o),document.body.style.overflow="hidden",W().then(i=>{if(i){const l=o.querySelector("#prq-name"),s=o.querySelector("#prq-email"),d=i.user_metadata||{};d?.full_name&&l&&!l.value&&(l.value=d.full_name),i.email&&s&&!s.value&&(s.value=i.email)}});const n=()=>{o.remove(),document.body.style.overflow=""};o.querySelectorAll("[data-req-close]").forEach(i=>i.addEventListener("click",n)),o.addEventListener("submit",async i=>{i.preventDefault();const l=o.querySelector("#prq-submit"),s=o.querySelector("#prq-status"),d=o.querySelector("#prq-name").value.trim(),c=o.querySelector("#prq-email").value.trim(),b=o.querySelector("#prq-phone")?.value.trim()||"",h=o.querySelector("#prq-date")?.value||"",y=o.querySelector("#prq-message").value.trim();l.disabled=!0,l.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i> Sending...',window.lucide&&lucide.createIcons();try{let v=null;try{v=(await M.auth.getUser()).data?.user?.id||null}catch{}const g=a?"Request Viewing":"Request More Information",p=[r&&`Property: ${r}`,b&&`Phone: ${b}`,h&&`Preferred date: ${h}`,y].filter(Boolean).join(" | "),{error:w}=await M.from("site_feedback").insert({user_id:v,name:d,email:c,rating:5,feedback:`${g} (${e.title}): ${p}`,is_approved:!1});if(w)throw new Error(w.message);try{await fetch("https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/send-auth-email",{method:"POST",headers:{Authorization:"Bearer sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa","Content-Type":"application/json"},body:JSON.stringify({type:"contact_form",name:d,email:c,subject:`${g} — ${e.title}`,message:p})})}catch{}s.className="text-center text-sm py-3 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200",s.textContent=a?"Viewing request sent! We'll confirm your appointment within 24 hours.":"Request sent! We'll get back to you within 24 hours.",s.classList.remove("hidden"),setTimeout(n,1800)}catch{s.className="text-center text-sm py-3 rounded-xl bg-red-50 text-red-600 border border-red-200",s.textContent="Failed to send. Please email support@weverseonlineshop.com directly.",s.classList.remove("hidden"),l.disabled=!1,l.innerHTML=a?"Request Viewing":"Send Request",window.lucide&&lucide.createIcons()}})}let O=0,dt=!1;function qa(){if(dt)return;dt=!0;const e=document.createElement("style");e.textContent="@keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}",document.head.appendChild(e)}function We(e,t){if(!e)return;qa(),e.innerHTML=`<i data-lucide="heart" class="w-5 h-5 ${t?"fill-red-500 text-red-500":""}"></i>`,e.classList.toggle("bg-red-50",t),e.classList.toggle("border",t),e.classList.toggle("border-red-200",t);const a=e.querySelector("span");a&&(a.textContent=t?"Saved to Wishlist":"Add to Wishlist"),window.lucide&&lucide.createIcons();const r=e.querySelector("i");r&&(r.style.animation="none",r.offsetWidth,r.style.animation="kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)",setTimeout(()=>{r&&(r.style.animation="")},550))}async function ja(e){const t=document.getElementById("wishlist-btn");if(!t)return;const a=await W();if(!a){t.addEventListener("click",()=>{me(window.location.pathname+window.location.search),window.location.href=`/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`});return}const{data:r,error:o}=await M.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(o){console.error("Wishlist check failed:",o.message);return}r&&We(t,!0),t.addEventListener("click",async()=>{const{data:n,error:i}=await M.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(i){console.error("Wishlist toggle failed:",i.message);return}if(n){const{error:l}=await M.from("wishlist").delete().eq("id",n.id);if(l){console.error("Wishlist delete failed:",l.message);return}We(t,!1)}else{const{error:l}=await M.from("wishlist").insert({user_id:a.id,listing_id:e.id});if(l){console.error("Wishlist insert failed:",l.message);return}We(t,!0)}})}async function He(e){const t=document.getElementById("review-form");if(!t)return;const a=await W(),r=e.property_id||e.id||"",o=document.getElementById("review-photo-row");o&&(a?o.classList.remove("hidden"):o.classList.add("hidden"));const n=document.getElementById("review-name");if(n){let h="";try{h=localStorage.getItem("kco_review_name")||""}catch{}n.value=h}document.querySelectorAll(".star-btn").forEach(h=>{h.addEventListener("click",()=>{O=parseInt(h.dataset.rating,10),document.querySelectorAll(".star-btn").forEach((y,v)=>{const g=y.querySelector("i, svg");g&&(v<O?(g.classList.add("fill-amber-400","text-amber-400"),g.classList.remove("text-gray-300")):(g.classList.remove("fill-amber-400","text-amber-400"),g.classList.add("text-gray-300")))})})});const i=document.getElementById("review-photo-input"),l=document.getElementById("review-photo-preview");let s=null;i&&i.addEventListener("change",()=>{if(s=i.files&&i.files[0],!!l&&(l.innerHTML="",s)){const h=URL.createObjectURL(s);l.innerHTML=`<span class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg px-2.5 py-1"><img src="${h}" alt="" class="w-5 h-5 rounded object-cover">${u(s.name)}</span>`}});const d=document.getElementById("review-submit-msg"),c=document.getElementById("review-error-msg"),b=h=>{if(c)if(h){c.classList.remove("hidden");const y=c.querySelector("span");y&&(y.textContent=h)}else c.classList.add("hidden")};t.addEventListener("submit",async h=>{h.preventDefault(),b("");const y=document.getElementById("review-text").value.trim();if(!O){alert("Please select a rating.");return}if(!y){alert("Please write a review.");return}const v=t.querySelector('button[type="submit"]'),g=v.innerHTML;v.disabled=!0,v.innerHTML='<span class="inline-block animate-spin">⏳</span> Submitting…';const p=(n?n.value:"").trim();if(p)try{localStorage.setItem("kco_review_name",p)}catch{}let w=!1;if(a){let _=null;if(s){const x=(s.name.split(".").pop()||"jpg").toLowerCase().replace(/[^a-z0-9]/g,"")||"jpg",H=`${a.id}/${Date.now()}_${String(Math.random()).slice(2)}.${x}`,{error:C}=await M.storage.from("review-photos").upload(H,s,{contentType:s.type||"image/jpeg",cacheControl:"3600",upsert:!1});if(C){v.disabled=!1,v.innerHTML=g,b("Could not upload photo: "+C.message);return}const{data:G}=M.storage.from("review-photos").getPublicUrl(H);_=G?.publicUrl||null}const{error:I}=await M.from("product_reviews").insert({listing_id:e.id||null,property_id:r,user_id:a.id,rating:O,comment:y,review_photo:_,is_approved:!0});I?b("Could not save your review: "+(I.message||"unknown error")):w=!0}else{try{const{error:_}=await M.from("product_reviews").insert({listing_id:e.id||null,property_id:r,rating:O,comment:y,author_name:p||null,is_approved:!0});_||(w=!0,ta(r,{rating:O,text:y,name:p}))}catch{}w||(w=!!ea(r,{rating:O,text:y,name:p})),w||b("Could not save your review right now — please try again.")}if(!w){v.disabled=!1,v.innerHTML=g;return}v.disabled=!1,v.innerHTML=g,document.getElementById("review-text").value="",n&&(n.value=p),O=0,s=null,i&&(i.value=""),l&&(l.innerHTML=""),document.querySelectorAll(".star-btn").forEach(_=>{const I=_.querySelector("i, svg");I&&(I.classList.remove("fill-amber-400","text-amber-400"),I.classList.add("text-gray-300"))}),d&&(d.classList.remove("hidden"),setTimeout(()=>{d&&d.classList.add("hidden")},4e3)),be(e)})}async function be(e){$t();const t=document.getElementById("reviews-list"),a=document.getElementById("reviews-summary"),r=document.getElementById("reviews-breakdown");if(!t)return;const o=Jt(e),n={5:o.breakdown[5]||0,4:o.breakdown[4]||0,3:o.breakdown[3]||0,2:o.breakdown[2]||0,1:o.breakdown[1]||0};let i=Math.max(Number(o.total)||0,o.reviews.length);const l=[],s=e.property_id||e.id||"";if(s){const{data:p,error:w}=await M.from("product_reviews").select("*, profiles(full_name)").eq("property_id",s).eq("is_approved",!0).order("created_at",{ascending:!1});if(!w&&p)for(const _ of p){l.push({..._,name:_.author_name||_.profiles?.full_name||"Anonymous",verified:_.is_verified_purchase});const I=Math.min(5,Math.max(1,Math.round(Number(_.rating)||0)));n[I]++,i++}}const d=Qt(s).filter(p=>!l.some(w=>Math.round(Number(w.rating))===Math.round(Number(p.rating))&&String(w.comment||"").trim()===String(p.text||"").trim()));for(const p of d){const w=Math.min(5,Math.max(1,Math.round(Number(p.rating)||0)));n[w]++,i++}let c=0;for(let p=5;p>=1;p--)c+=p*n[p];const h=(i?c/i:0)||Number(e.rating)||0,y=i,v=`
    <div class="flex flex-wrap items-center gap-x-6 gap-y-4">
      <div class="flex items-center gap-4 shrink-0">
        <div class="text-5xl sm:text-6xl font-black leading-none text-gray-900 tracking-tight">${h>0?h.toFixed(1):"New"}</div>
        <div class="shrink-0">
          <div class="flex gap-1">${vt(h,"w-5 h-5 sm:w-6 sm:h-6")}</div>
          <div class="text-[13px] sm:text-sm font-bold text-gray-500 mt-1.5 tracking-wide">Customer Reviews</div>
        </div>
      </div>
      <div class="hidden md:block w-px h-12 bg-gray-200"></div>
      <div class="flex flex-wrap items-center gap-2">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Listing</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1.5 rounded-full"><i data-lucide="truck" class="w-3.5 h-3.5"></i> Fast Worldwide Delivery</span>
      </div>
    </div>`;a&&(a.innerHTML=v),r&&(r.innerHTML=ka(e,n,y));const g=[...d,...l,...o.reviews];if(!g.length){t.innerHTML='<p class="text-gray-400 text-sm py-2">No reviews yet. Be the first to review this product!</p>',window.lucide&&lucide.createIcons();return}Y=g.map(p=>(p._local?p._key="local-"+p.id:p.id?p._key="db-"+p.id:p._key="seed-"+gt(String(s)+"||"+(p.date||"")+"||"+(p.text||"")),p)),pe=s;try{de=localStorage.getItem("kco_reply_name")||""}catch{}if(s)try{N=await ft(s)}catch{N={likes:new Map,liked:new Set,comments:new Map}}else N={likes:new Map,liked:new Set,comments:new Map};z=null,ce=!1,Na(t),K()}async function $t(){const e=document.querySelector('[data-bg-slot="reviews"]');if(e)try{const t=await Ot();e.innerHTML=Ut(t.reviews_bg_image,t.reviews_bg_video)}catch{}}document.addEventListener("promo-backgrounds-updated",()=>{try{$t()}catch{}});function K(){const e=document.getElementById("reviews-list");if(!e||!Y.length)return;const t=ce?Y:Y.slice(0,3);if(e.innerHTML=t.map(wa).join(""),window.lucide&&lucide.createIcons(),ce)Pa(e,()=>{ce=!1,K()});else if(Y.length>t.length){const a=document.createElement("div");a.className="mt-4 flex justify-center",a.innerHTML=`
      <button type="button" class="view-all-reviews-btn btn-press inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition shadow-sm shadow-blue-500/20">
        View All Customer Reviews
        <i data-lucide="chevron-down" class="w-4 h-4"></i>
      </button>`,e.appendChild(a),window.lucide&&lucide.createIcons(),a.querySelector(".view-all-reviews-btn").addEventListener("click",()=>{ce=!0,K()})}}async function Ta(){if(pe)try{N=await ft(pe)}catch{N={likes:new Map,liked:new Set,comments:new Map}}}function Ra(){if(!z)return;const e=document.querySelector(".review-reply-box textarea.review-reply-body");e&&setTimeout(()=>{try{e.focus()}catch{}},60)}function Na(e){!e||e.dataset.riBound==="1"||(e.dataset.riBound="1",e.addEventListener("click",async t=>{const a=t.target.closest("[data-open-reviewer]");if(a){t.preventDefault();const l=a.dataset.openReviewer,s=Y.find(d=>d._key===l);s&&Ha(s);return}const r=t.target.closest(".review-like-btn");if(r){t.preventDefault();const l=r.dataset.key;if(!l)return;let d=!N.liked.has(l);try{const c=await Xt(pe,l);c&&typeof c.liked=="boolean"&&(d=c.liked)}catch{}d?N.liked.add(l):N.liked.delete(l),N.likes.set(l,Math.max(0,(N.likes.get(l)||0)+(d?1:-1))),K();return}const o=t.target.closest(".review-reply-toggle");if(o){t.preventDefault(),z=z===o.dataset.key?null:o.dataset.key,K(),Ra();return}if(t.target.closest(".review-reply-cancel")){t.preventDefault(),z=null,K();return}const i=t.target.closest(".review-reply-post");if(i){t.preventDefault();const l=t.target.closest(".review-reply-box");if(!l)return;const s=l.querySelector(".review-reply-name"),d=l.querySelector(".review-reply-body"),c=(s&&s.value||"").trim(),b=(d&&d.value||"").trim();if(!b){d&&d.focus();return}de=c||de;try{await Zt(pe,i.dataset.key,c||"Guest",b)}catch{}try{localStorage.setItem("kco_reply_name",de)}catch{}z=null,await Ta(),K()}}))}function Ha(e){const t=e.author_name||e.name||e.profiles?.full_name||"Anonymous",a=u(t.trim().charAt(0).toUpperCase()||"A"),r=e.location||e.profiles?.country||"",o=e.handle||"",n=e.date||e.created_at||"",i=Y.filter(y=>(y.author_name||y.name||y.profiles?.full_name||"")===t),l=i.length||1,s=l>0?i.reduce((y,v)=>y+(Number(v.rating)||0),0)/i.length:Number(e.rating)||0,d=i.reduce((y,v)=>{const g=v._key||"";return y+(v.likes||0)+(g&&N.likes.get(g)||0)},0),c=i.slice(0,4).map(y=>`
      <div class="rounded-xl border border-gray-100 bg-gray-50/70 p-3">
        <div class="flex items-center gap-1.5 mb-1">${[1,2,3,4,5].map(g=>`<i data-lucide="star" class="w-3 h-3 ${g<=(Number(y.rating)||0)?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}<span class="text-[11px] text-gray-400 ml-1">${_e(y.date||y.created_at)}</span></div>
        <p class="text-[13px] text-gray-700 leading-relaxed">${u(y.text||y.comment||"")}</p>
      </div>`).join(""),b=document.createElement("div");b.id="reviewer-profile-modal",b.className="fixed inset-0 z-[460] flex items-end sm:items-center justify-center p-0 sm:p-4",b.innerHTML=`
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
            ${n?`<div class="flex items-center gap-1 text-xs text-gray-400 mt-0.5"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>Reviewed ${_e(n)}</div>`:""}
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
            <div class="text-lg font-black text-gray-900">${s?Number(s).toFixed(1):"—"}</div>
            <div class="flex justify-center gap-0.5 mt-0.5">${[1,2,3,4,5].map(y=>`<i data-lucide="star" class="w-3 h-3 ${y<=Math.round(s)?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}</div>
            <div class="text-[11px] text-gray-400 mt-1">Avg rating</div>
          </div>
          <div class="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
            <div class="text-lg font-black text-gray-900">${l}</div>
            <div class="text-[11px] text-gray-400 mt-1">Reviews</div>
          </div>
          <div class="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
            <div class="text-lg font-black text-gray-900">${d}</div>
            <div class="text-[11px] text-gray-400 mt-1">Helpful votes</div>
          </div>
        </div>
        ${c?`
          <div>
            <h4 class="text-xs font-black uppercase tracking-wide text-gray-500 mb-2">Reviews on this listing</h4>
            <div class="space-y-2">${c}</div>
          </div>`:""}
        <p class="text-[11px] text-gray-400 leading-relaxed">Follower and activity counts shown are based on real reviews and reviews-likes on this listing.</p>
      </div>
    </div>
  `,document.body.appendChild(b),document.body.style.overflow="hidden",window.lucide&&lucide.createIcons();const h=()=>{b.remove(),document.body.style.overflow=""};b.querySelectorAll("[data-rp-close]").forEach(y=>y.addEventListener("click",h)),b.addEventListener("click",y=>{y.target===b&&h()})}function Pa(e,t){if(!e)return;const a=document.getElementById("reviews-back-top");a&&a.remove();const r=document.createElement("button");r.type="button",r.id="reviews-back-top",r.setAttribute("aria-label","Back to product page"),r.className="btn-press fixed z-[90] bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white font-bold pl-3 pr-5 py-3 rounded-full text-xs shadow-xl shadow-slate-950/50 border border-white/10 backdrop-blur transition active:scale-95",r.innerHTML=`
    <span class="shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"><i data-lucide="chevron-up" class="w-4 h-4"></i></span>
    Back to product page`,document.body.appendChild(r),r.addEventListener("click",()=>{r.remove(),typeof t=="function"&&t();const o=document.getElementById("reviews-section");o&&o.scrollIntoView({behavior:"smooth",block:"start"})}),window.lucide&&lucide.createIcons()}async function Da(e){const t=document.getElementById("recommendations-section"),a=document.getElementById("recommendations-grid");if(!t||!a||!e.id)return;const{data:r,error:o}=await M.from("product_recommendations").select("recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)").eq("listing_id",e.id).order("score",{ascending:!1}).limit(4);if(o){console.error("Recommendations load failed:",o.message),t.classList.add("hidden");return}let n=(r||[]).map(i=>i.showroom_listings).filter(Boolean);if(n.length<4){const{data:i}=await M.from("showroom_listings").select("property_id, title, price, currency, images, listing_type").eq("category",e.category).neq("id",e.id).eq("is_active",!0).order("rating",{ascending:!1}).limit(4-n.length);n=[...n,...i||[]]}if(n.length===0){t.classList.add("hidden");return}t.classList.remove("hidden"),a.innerHTML=n.map(i=>{const l=i.images&&i.images[0]||"/fallback.svg",s=typeof i.price=="number"?i.price:parseFloat(i.price||0),d=i.currency||"USD";return`<a href="/details.html?id=${i.property_id}" class="block bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition group">
      <div class="aspect-square overflow-hidden bg-gray-100"><img src="${u(l)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-gray-900 font-bold truncate">${u(i.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${d} ${s.toLocaleString()}</p></div>
    </a>`}).join("")}function u(e){return String(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Va(){const e=$a();if(!e){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}const t=()=>{document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>'},a=()=>et(e)||tt(e)||at(e)||zt(e)||lt(e)||Mt(e)||jt(),r=l=>{if(Ct(l),document.title=`${l.title} | Weverse Online Shop`,Dt(l),l===et(e))_a(l);else if(l===tt(e))La(l);else if(l===at(e))Ia(l);else{Aa(l);try{Ne(l)}catch{}}},o=a();if(o){r(o),Xe(e).then(l=>{Qe().then(()=>{if(Rt(e)){t();return}if(l&&l.property_id===e)try{r(l)}catch{}})});return}const n=await Xe(e);if(n){r(n);return}await Sa();const i=lt(e);if(i){r(i);return}await Qe();{t();return}}const ut=document.getElementById("details-content"),Fa=ut?ut.innerHTML:"";let pt=!1;function St(e){if(e)try{console.error("[details] init failed:",e&&(e.stack||e.message||e))}catch{}if(!pt){pt=!0;try{const t=document.getElementById("details-content");if(!t||t.innerHTML!==Fa||t.querySelector(".fade-in, #reviews-section"))return;t.innerHTML='<div class="text-center py-20 text-gray-500">We couldn’t load this listing right now. Please check your connection and try again.</div>'}catch{}}}window.setTimeout(St,12e3);Va().catch(St);
