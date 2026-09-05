import"./modulepreload-polyfill-B5Qt9EMX.js";import{l as Ue,c as Tt,f as Rt,_ as Nt,b as _e,d as ot,g as Ht,S as Pt}from"./showroom-data-Dx7pQsXv.js";import{generateListingById as Dt,getCatalogCategory as Vt}from"./catalog-BaQ2rKyX.js";import{loadHiddenCatalogIds as st,isCatalogListingHidden as Ft}from"./catalog-hidden-store-CPivWtWH.js";import{P as xt,g as it,b as nt,f as Ot,T as Ut,M as zt}from"./motorhome-data-CupbOvk0.js";import{g as lt,a as Wt,C as Gt,P as Yt}from"./phone-data-Of7KtnOV.js";import{s as Kt,a as Ee,o as Ie,w as Me,b as Jt,r as vt}from"./showroom-cards-ybHt6q7A.js";import{getCurrentUser as G,setRedirectAfterAuth as fe}from"./auth-DlKVuhCK.js";import{supabase as M}from"./supabase-client-nvpjTmO6.js";import{l as Xt,b as Zt}from"./promo-backgrounds-KEhHWHvl.js";import"./app-promo-banner-CbX28UQD.js";/* empty css                                       */import"./categories-5zVhBEjq.js";import"./site-content-CQxtbv3j.js";import"./promo-pool-DsCgPoCX.js";const Qt=[];function ke(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return t>>>0}function ea(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}const ze=["James","Emma","Liam","Olivia","Noah","Ava","Ethan","Sophia","Lucas","Mia","Daniel","Isabella","Matthew","Charlotte","Samuel","Amelia","Gabriel","Harper","Nathan","Evelyn","Caleb","Abigail","Adrian","Ella","Owen","Grace","Leo","Chloe","Julian","Nora","Mason","Aria","Elijah","Layla","Isaac","Zoe","Hunter","Scarlett","Christian","Lily","Aaron","Hannah","Dylan","Savannah","Andrew","Ruby","David","Elena","Ryan","Nina","Marcus","Priya","Kwame","Fatima","Andre","Yuki","Tomas","Ingrid","Mateo","Sofia","Omar","Zara","Felix","Amara","Jonas","Leila","Victor","Mila","Diego","Iris","Hugo","Camila","Adam","Freya","Oscar","Amina","Peter","Naomi","Elias","Lucia","Ray","Talia","Marco","Sienna","Joshua","Anya","Kofi","Petra"],$e=["Anderson","Baker","Carter","Diaz","Evans","Foster","Garcia","Harris","Ingram","Johnson","Kelly","Lewis","Miller","Nelson","Ortiz","Parker","Quinn","Reed","Sanders","Turner","Underwood","Vaughn","Walker","Young","Zimmerman","Brooks","Coleman","Dunn","Fisher","Grant","Hayes","Jordan","Knight","Lopez","Morgan","Nguyen","Okafor","Peterson","Romano","Silva","Thompson","Umeh","Volkov","Wang","Xu","Yates","Zhou","Bennett","Chukwu","Doyle","Eze","Ferreira","Gonzalez","Hansen","Ivanov","Jansen","Kumar","Larsen","Moreau","Novak","Osei","Patel","Quintero","Rossi","Schmidt","Tavares","Ueda","Vasquez","Weber","Xavier","Yamamoto","Ziegler","Adeyemi","Barlow","Costa","Diop","Eriksen","Fontaine","Gomez","Holmes","Ikram","Juma","Karlsson","Lawson","Mensah","Nilsson"],ct=[{city:"Austin",country:"United States"},{city:"New York",country:"United States"},{city:"Seattle",country:"United States"},{city:"Los Angeles",country:"United States"},{city:"Chicago",country:"United States"},{city:"Boston",country:"United States"},{city:"San Diego",country:"United States"},{city:"Denver",country:"United States"},{city:"Miami",country:"United States"},{city:"Portland",country:"United States"},{city:"Toronto",country:"Canada"},{city:"Vancouver",country:"Canada"},{city:"Montreal",country:"Canada"},{city:"Calgary",country:"Canada"},{city:"Ottawa",country:"Canada"},{city:"London",country:"United Kingdom"},{city:"Manchester",country:"United Kingdom"},{city:"Birmingham",country:"United Kingdom"},{city:"Edinburgh",country:"United Kingdom"},{city:"Glasgow",country:"United Kingdom"},{city:"Bristol",country:"United Kingdom"},{city:"Liverpool",country:"United Kingdom"},{city:"Dublin",country:"Ireland"},{city:"Cork",country:"Ireland"},{city:"Paris",country:"France"},{city:"Lyon",country:"France"},{city:"Marseille",country:"France"},{city:"Berlin",country:"Germany"},{city:"Munich",country:"Germany"},{city:"Hamburg",country:"Germany"},{city:"Frankfurt",country:"Germany"},{city:"Amsterdam",country:"Netherlands"},{city:"Rotterdam",country:"Netherlands"},{city:"Brussels",country:"Belgium"},{city:"Antwerp",country:"Belgium"},{city:"Zurich",country:"Switzerland"},{city:"Geneva",country:"Switzerland"},{city:"Vienna",country:"Austria"},{city:"Rome",country:"Italy"},{city:"Milan",country:"Italy"},{city:"Florence",country:"Italy"},{city:"Madrid",country:"Spain"},{city:"Barcelona",country:"Spain"},{city:"Valencia",country:"Spain"},{city:"Lisbon",country:"Portugal"},{city:"Porto",country:"Portugal"},{city:"Stockholm",country:"Sweden"},{city:"Gothenburg",country:"Sweden"},{city:"Oslo",country:"Norway"},{city:"Copenhagen",country:"Denmark"},{city:"Helsinki",country:"Finland"},{city:"Reykjavik",country:"Iceland"},{city:"Warsaw",country:"Poland"},{city:"Krakow",country:"Poland"},{city:"Prague",country:"Czech Republic"},{city:"Athens",country:"Greece"},{city:"Sydney",country:"Australia"},{city:"Melbourne",country:"Australia"},{city:"Brisbane",country:"Australia"},{city:"Perth",country:"Australia"},{city:"Adelaide",country:"Australia"},{city:"Auckland",country:"New Zealand"},{city:"Wellington",country:"New Zealand"},{city:"Christchurch",country:"New Zealand"},{city:"Singapore",country:"Singapore"},{city:"Tokyo",country:"Japan"},{city:"Osaka",country:"Japan"},{city:"Kyoto",country:"Japan"},{city:"Seoul",country:"South Korea"},{city:"Busan",country:"South Korea"},{city:"Dubai",country:"United Arab Emirates"},{city:"Abu Dhabi",country:"United Arab Emirates"},{city:"Doha",country:"Qatar"},{city:"Tel Aviv",country:"Israel"},{city:"Taipei",country:"Taiwan"},{city:"Hong Kong",country:"Hong Kong"}],Se=["just ordered from this shop and it was so easy fr","first time buying here and honestly impressed ngl","checked out in like 2 minutes, easiest thing ever","was a little skeptical at first but it all worked out","placed my order from my phone, super smooth","i've ordered here a few times and it never lets me down","took a chance on this store and zero regrets","signing up and ordering took no time at all","everything from picking to paying was really simple","first international order and it went perfectly 🙏","lowkey wasn't expecting much but it was great","order went through instantly, no drama","the site is so easy to use, even i managed it lol","been shopping online for years, this one stands out","quick and painless, just how online shopping should be","had a tiny doubt before ordering but it was fine","the whole process felt very professional","just what i needed, no stress, no hassle","my cousin recommended this shop and he was right","ordered without overthinking and it paid off"],O=["shipping was mad fast, arrived way earlier than expected","my package came in perfect condition 🔥","the delivery guy was super nice and careful","got updates the entire time, no guessing","tracking was accurate and it showed up on time","packaging was really solid, nothing was damaged","they answered my question in like 10 minutes","customer service was actually helpful, rare these days","everything arrived exactly as described","the parcel was wrapped so well, impressive","it showed up a day early, which was a nice surprise","payment was secure and confirmation came right away","kept me posted at every single step","dispatching was quick, shipped the same day","the item looked even better in person","my order was handled with so much care","they were super responsive whenever i messaged","the tracking link actually worked the whole way","delivery was on schedule, not a minute late","everything came neatly packed and in one piece","no issues at all, straight to my door","they followed up after delivery which i thought was nice","the whole team was polite and professional","my doubts disappeared once the package arrived","quality was clear as soon as i opened the box","support replied quickly even though it was late","well organized from start to finish","came when they said it would, no surprises","fast dispatch and smooth handling of my order","the notifications kept me calm the whole time lol","everything i ordered was in the box, nothing missing","the courier called before arriving, so professional","shipped in sturdy packaging, survived the trip perfectly","i could track it the whole way, very reassuring","they processed my order in record time","came in perfect shape and very well protected","every update they sent was accurate and clear","exactly the delivery experience you hope for","returns and support were straightforward too","very clean, well managed order, i was impressed"],We=["100% ordering again fr","would recommend this shop to anyone","already told my friends about it","this is my new go to place now","can't recommend them enough","definitely coming back, no question","so glad i found this store","will 100% be back 💯","no complaints at all honestly","totally worth it, trust me","10/10 experience, easy","this shop is legit, trust","loyal customer for life now","five stars from me, easy","a real hidden gem honestly","can't wait for my next order"],dt={vehicle:["my vehicle was delivered safe and sound, kept me updated the whole trip","the listing was exact and delivery was arranged super smoothly"],property:["the listing was spot on and they walked me through the whole process","all the paperwork was handled clean, very easy from start to finish"],phone:["the phone matched the photos exactly and shipped out quick","they double checked everything before sending, packaging was solid"],pet:["they handled everything so carefully, i felt reassured the whole way","all the paperwork was sorted out and the process was really easy"],product:["the item was exactly like the photos, arrived in great shape","order was processed fast and the packaging was really solid"]},ut=["🔥","✨","😍","🙌","💯","😭","❤️","👍","🎯","👌","✅","⚡","📦","🙏"],wt=[{year:2018,w:3},{year:2019,w:7},{year:2020,w:11},{year:2021,w:13},{year:2022,w:15},{year:2023,w:16},{year:2024,w:15},{year:2025,w:12},{year:2026,w:8}],ta=wt.reduce((e,t)=>e+t.w,0);function aa(e){let t=e()*ta;for(const a of wt){if(t<a.w)return a.year;t-=a.w}return 2024}function Ge(e,t,a,r){return(e+t*a)%r}function ra(e,t={}){const a=String(e.property_id||e.id||"");if(!a)return{reviews:[],breakdown:{5:0,4:0,3:0,2:0,1:0},total:0,computedRating:0};const r=ke(a),o=187+r%660,i=Math.min(5,Math.max(1,Number(e.rating)||0))||4.5;let c=Math.max(.3,Math.min(.9,i/5)),s=1-c,l=.07,d=.04,b=.03;const h=1/(c+s+l+d+b);c*=h,s*=h,l*=h,d*=h,b*=h;const f=[c,s,l,d,b],x=e.listing_type==="vehicle"?"vehicle":e.listing_type==="property"?"property":e.listing_type==="pet"?"pet":String(e.category||"").toLowerCase().includes("phone")?"phone":"product",g=dt[x]||dt.product,m=[],k=ze.length*$e.length,E=Se.length*O.length*O.length*We.length,I=457,v=811;for(let $=0;$<o;$++){const j=ea(ke(a+"::"+$));let Z=j(),oe=5,Q=0;for(let we=5;we>=1;we--)if(Q+=f[5-we],Z<=Q){oe=we;break}const ee=Ge(r,$,I,k),se=ze[Math.floor(ee/$e.length)%ze.length],ie=$e[ee%$e.length],ge=`${se} ${ie}`;let R=Ge(r,$,v,E);const y=Se[R%Se.length];R=Math.floor(R/Se.length);const w=O[R%O.length];R=Math.floor(R/O.length);const _=O[R%O.length];R=Math.floor(R/O.length);const C=We[R%We.length];let V=`${y} ${w}`;$%3===0&&g.length&&(V+=` ${g[$%g.length]}`),$%2===0&&(V+=` ${_}`),V+=` ${C}`,$%3===2&&(V+=` ${ut[(r+$*13)%ut.length]}`);const B=ct[Ge(r,$,337,ct.length)],S=Date.now(),q=aa(j),xe=q===2018?10+Math.floor(j()*3):1+Math.floor(j()*12),Oe=1+Math.floor(j()*28),ve=Date.UTC(q,xe-1,Oe),At=new Date(Math.min(ve,S)).toISOString(),Bt=`@${se.toLowerCase()}${ie.toLowerCase()}`,qt=2+ke(a+"::likes::"+$)%380,jt=$%7===0?1+ke(a+"::rep::"+$)%4:0;m.push({name:ge,handle:Bt,location:B.country,date:At,rating:oe,text:V,likes:qt,replies:jt,verified:!1,seeded:!0})}m.sort(($,j)=>$.date<j.date?1:-1);const H={5:0,4:0,3:0,2:0,1:0};let A=0;for(let $=5;$>=1;$--)H[$]=Math.round(o*f[5-$]),A+=H[$];const Y=o-A;Y!==0&&(H[Y>0?5:1]+=Y);let F=0;for(let $=5;$>=1;$--)F+=$*H[$];const ye=F/o;return{reviews:m,breakdown:H,total:o,computedRating:ye}}let le="pending",te=null;const Ze=e=>`kco_review_likes_${e}`,Qe=e=>`kco_review_comments_${e}`;function X(e){try{return JSON.parse(localStorage.getItem(e)||"null")}catch{return null}}function Ce(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}async function et(){try{te||(te=await G()||null)}catch{te=null}if(te&&te.id)return"u:"+te.id;try{let e=localStorage.getItem("kco_anon_id");return e||(e="anon-"+Math.random().toString(36).slice(2)+Date.now().toString(36),localStorage.setItem("kco_anon_id",e)),e}catch{return"anon-"+Math.random().toString(36).slice(2)+Date.now().toString(36)}}async function tt(){if(le!=="pending")return le;try{const{error:e}=await M.from("review_likes").select("id").limit(1),{error:t}=await M.from("review_comments").select("id").limit(1);le=e||t?"local":"server"}catch{le="local"}return le}async function kt(e){const t=new Map,a=new Set,r=new Map,o=String(e||"");try{if(await tt()==="server"){const[{data:n},{data:i}]=await Promise.all([M.from("review_likes").select("review_key, liker_id").eq("property_id",o),M.from("review_comments").select("*").eq("property_id",o).order("created_at",{ascending:!0})]),c=await et();for(const s of n||[])t.set(s.review_key,(t.get(s.review_key)||0)+1),s.liker_id===c&&a.add(s.review_key);for(const s of i||[]){const l=r.get(s.review_key)||[];l.push({id:s.id,author:s.author,body:s.body,created_at:s.created_at}),r.set(s.review_key,l)}}else{const n=X(Ze(o))||{},i=await et();for(const[s,l]of Object.entries(n)){const d=Array.isArray(l)?l:[];t.set(s,d.length),d.includes(i)&&a.add(s)}const c=X(Qe(o))||{};for(const[s,l]of Object.entries(c))Array.isArray(l)&&r.set(s,l)}}catch{}return{likes:t,liked:a,comments:r}}async function oa(e,t){const a=String(e||""),r=!1;try{const o=await et();if(await tt()==="server"){const{data:s}=await M.from("review_likes").select("id").eq("review_key",t).eq("liker_id",o).limit(1);if(s&&s.length){const{error:d}=await M.from("review_likes").delete().eq("review_key",t).eq("liker_id",o);return{liked:d?r:!1}}const{error:l}=await M.from("review_likes").insert({property_id:a,review_key:t,liker_id:o});return{liked:!l}}const n=X(Ze(a))||{},i=Array.isArray(n[t])?n[t]:[],c=i.indexOf(o);return c>=0?i.splice(c,1):i.push(o),n[t]=i,Ce(Ze(a),n),{liked:c<0}}catch{return{liked:r}}}async function sa(e,t,a,r){const o=String(e||""),n=String(r||"").trim().slice(0,1e3),i=String(a).trim().slice(0,40)||"Guest";if(!n)return null;try{if(await tt()==="server"){const{data:d,error:b}=await M.from("review_comments").insert({property_id:o,review_key:t,author:i,body:n}).select("id, author, body, created_at").single();if(!b&&d)return d}}catch{}const c={id:"c_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,8),author:i,body:n,created_at:new Date().toISOString()},s=X(Qe(o))||{},l=Array.isArray(s[t])?s[t]:[];return l.push(c),s[t]=l,Ce(Qe(o),s),c}const pe=e=>`kco_guest_reviews_${e}`;function ia(e){const t=String(e||""),a=X(pe(t));return Array.isArray(a)?a.filter(r=>r&&r.rating>=1&&r.rating<=5&&(r.text||r.comment)).map(r=>({...r,_local:!0,comment:r.comment||r.text,text:r.text||r.comment,name:r.name||"",rating:Math.max(1,Math.min(5,Math.round(Number(r.rating)||0)))})).sort((r,o)=>new Date(o.created_at||0)-new Date(r.created_at||0)):[]}function na(e,t){const a=String(e||""),r=Math.max(1,Math.min(5,Math.round(Number(t&&t.rating)||0))),o=String(t&&t.text||"").trim().slice(0,2e3),n=String(t&&t.name||"").trim().slice(0,40);if(!r||!o)return null;const i={id:"gv_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,8),rating:r,text:o,comment:o,name:n,created_at:new Date().toISOString(),_local:!0},c=X(pe(a));return Array.isArray(c)?(c.push(i),Ce(pe(a),c),i):null}function la(e,t){const a=String(e||""),r=Math.max(1,Math.min(5,Math.round(Number(t&&t.rating)||0))),o=String(t&&t.text||"").trim(),n=X(pe(a));if(!Array.isArray(n))return;const i=n.filter(c=>!(Math.round(Number(c.rating))===r&&String(c.text||"").trim()===o));i.length!==n.length&&Ce(pe(a),i)}const P="/fallback.svg";let pt=!1;function ca(){if(pt)return;pt=!0;const e=document.createElement("style");e.id="kco-temu-effects",e.textContent=`
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
  `,document.head.appendChild(e)}ca();let N={likes:new Map,liked:new Set,comments:new Map},W=null,ue="",K=[],de=!1,me="";function $t(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function Ae(e){return Array.isArray(e)&&e.length>0?e:[P]}function z(e){return!e||typeof e!="string"?!1:/^data:video\//i.test(e)?!0:e.startsWith("blob:")?!1:/\.(mp4|webm|mov|m4v|avi|mkv|ogv)(\?|#|$)/i.test(e)}function da(e,t){const a=o=>{if(o.readyState>=2&&o.videoWidth)try{const n=document.createElement("canvas");n.width=o.videoWidth,n.height=o.videoHeight,n.getContext("2d").drawImage(o,0,0);const i=n.toDataURL("image/jpeg",.8);i&&i.length>100&&(e.poster=i)}catch{}},r=document.createElement("video");r.muted=!0,r.playsInline=!0,r.preload="auto",r.src=t,r.addEventListener("loadeddata",()=>a(r),{once:!0}),r.addEventListener("error",()=>{},{once:!0}),r.load(),setTimeout(()=>{try{r.removeAttribute("src"),r.load()}catch{}},12e3)}function St(e,t="w-4 h-4"){const a=Math.round(Number(e)||0);return[1,2,3,4,5].map(r=>`<i data-lucide="star" class="${t} ${r<=a?"fill-amber-400 text-amber-400 drop-shadow-[0_1px_4px_rgba(0,0,0,.25)]":"text-gray-300"}"></i>`).join("")}function re(e,t,a="blue"){const r={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"};return`
    <div class="flex items-center gap-2.5 mb-4">
      <div class="shrink-0 w-10 h-10 rounded-xl ${r[a]||r.blue} flex items-center justify-center"><i data-lucide="${e}" class="w-5 h-5"></i></div>
      <h3 class="text-lg font-black text-gray-900 tracking-tight">${t}</h3>
    </div>`}function ua(e){return`
    <div class="bg-gray-50 border border-gray-100 rounded-xl p-3.5">
      <div class="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5"><i data-lucide="${e.icon}" class="w-3.5 h-3.5"></i>${e.label}</div>
      <div class="text-gray-900 font-bold text-[15px] leading-snug">${e.html||u(e.value)}</div>
    </div>`}function ce(e,t,a,r="blue"){return!a||!a.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${re(t,e,r)}
      ${_t(a)}
    </div>`}function _t(e){return!e||!e.length?"":`<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">${e.map(ua).join("")}</div>`}function Be(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${re("list-checks","Features & Amenities","emerald")}
      ${Lt(e)}
    </div>`}function Lt(e){return!e||!e.length?"":`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
            <span class="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
            <span class="text-[15px] text-gray-800 font-medium">${u(t)}</span>
          </div>`).join("")}
      </div>`}function pa(e){return!e||!e.length?"":`
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
  </div>`}function ma(e){const t=e.floor_plan&&typeof e.floor_plan=="object"?e.floor_plan:{},a=Array.isArray(t.rooms)?t.rooms:[];if(!(t.image||t.levels||t.total_area||a.length))return"";const o=a.length?`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-3">
      ${a.map(i=>{const c=typeof i=="string"?i:i.name||"Room",s=typeof i=="string"?"":i.dimensions||"";return`<div class="bg-gray-50 border border-gray-100 rounded-xl p-3">
          <p class="text-[15px] font-bold text-gray-900">${u(String(c))}</p>
          ${s?`<p class="text-xs text-gray-500 mt-0.5">${u(String(s))}</p>`:""}
        </div>`}).join("")}
    </div>`:"",n=[t.levels?`Levels: ${t.levels}`:"",t.total_area?`Total area: ${t.total_area}`:""].filter(Boolean);return`
    <div class="space-y-3">
      ${t.image?`<img src="${u(String(t.image))}" alt="Floor plan" class="w-full rounded-xl border border-gray-200 bg-gray-50" loading="lazy" onerror="this.style.display='none'">`:""}
      ${n.length?`<div class="flex flex-wrap gap-2">${n.map(i=>`<span class="inline-flex items-center gap-1 text-xs font-bold text-gray-700 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-full">${u(String(i))}</span>`).join("")}</div>`:""}
      ${o}
    </div>`}function ba(e){const t=Array.isArray(e.legal_info)?e.legal_info:[],a=e.risk_notes;if(!t.length&&!a)return"";const r={"Seller provided":"bg-amber-50 text-amber-700 border-amber-200",Documented:"bg-blue-50 text-blue-700 border-blue-200","Not verified":"bg-gray-50 text-gray-600 border-gray-200"};return`
    <div class="space-y-2.5">
      ${t.map(n=>{const i=typeof n=="string"?n:n.label||"",c=typeof n=="string"?"":n.value||"",s=typeof n=="string"?"Not verified":n.source||"Not verified",l=r[s]||r["Not verified"],d=`${i}${c?": "+c:""}`;return`<div class="flex items-center justify-between gap-3 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
      <span class="text-[15px] text-gray-800 font-medium">${u(d)}</span>
      <span class="shrink-0 text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full border ${l}">${u(s)}</span>
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
    </div>`}function ha(e){const t=e.verification_status||"Not verified",a={Verified:"bg-emerald-50 text-emerald-700 border-emerald-200","Pending verification":"bg-amber-50 text-amber-700 border-amber-200","Not verified":"bg-gray-50 text-gray-600 border-gray-200"}[t]||"bg-gray-50 text-gray-600 border-gray-200",r=Array.isArray(e.documents)?e.documents:[],o=[{icon:"shield-check",label:"Verification",value:t,badge:a},e.verification_date?{icon:"calendar-check",label:"Verification Date",value:e.verification_date}:null,e.inspection_info?{icon:"clipboard-check",label:"Inspection",value:e.inspection_info}:null].filter(Boolean);return`
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
    </div>`}function ya(e){if(e.listing_type!=="property")return"";const t=[],a=Ye(e.interior_features,"emerald"),r=Ye(e.exterior_features,"blue"),o=Ye(e.home_systems,"violet"),n=[a?`<div class="mb-4"><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Interior Features</p>${a}</div>`:"",r?`<div class="mb-4"><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Exterior Features</p>${r}</div>`:"",o?`<div><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Home Systems</p>${o}</div>`:""].filter(Boolean).join("");n&&t.push(T("acc-features","home","Features & Home Systems",n,!1,"emerald"));const i=ma(e);i&&t.push(T("acc-floorplan","layout-dashboard","Floor Plan",i,!1,"violet"));const c=ba(e);c&&t.push(T("acc-legal","scale","Legal & Financial",c,!1,"amber"));const s=fa(e);s&&t.push(T("acc-nearby","map-pin","Nearby Area",s,!1,"rose"));const l=ha(e);return l&&t.push(T("acc-trust","shield-check","Verification & Trust",l,!1,"blue")),t.join("")}function p(e,t,a=""){const r=e[t];if(r!=null&&String(r).trim()!=="")return r;const o=e.specifications&&typeof e.specifications=="object"?e.specifications:{};return o[t]!=null?o[t]:a}function at(e){if(e==null)return!1;const t=String(e).trim();return!(!t||/requires?\s+verification|not\s+provided|not\s+specified|not\s+available|not\s+found|not\s+visible|not\s+applicable|not\s+listed|\bunknown\b|undisclosed|no\s+data|full\s+street\s+address|postal\s+code|local\s+area\s+details|to\s+be\s+(?:confirmed|verified|announced|updated)|^\s*n\/?a\s*$|^\s*none\s*$|^\s*null\s*$|^\s*-{1,}\s*$/i.test(t))}function rt(...e){const t=e.map(a=>a==null?"":String(a).trim()).filter(a=>a&&at(a));return t.length?"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(t.join(", ")):""}function D(e,t){const a=e==null?"":String(e).trim();if(!a)return"";if(!at(a))return`<span class="text-[15px] text-gray-400 font-semibold" title="Requires verification">${u(a)}</span>`;const r=rt(...t);return r?`<a href="${r}" target="_blank" rel="noopener" class="inline-flex flex-wrap items-center gap-1 text-[15px] text-blue-600 font-bold hover:text-blue-700 underline decoration-blue-300 underline-offset-2" title="Open in Google Maps">${u(a)} <i data-lucide="external-link" class="w-3.5 h-3.5 shrink-0"></i></a>`:`<span class="text-[15px] text-gray-400 font-semibold" title="Requires verification">${u(a)}</span>`}function ga(e){const t=[];for(const a of["address","neighborhood","product_location","location","town","city","state","country"]){const r=p(e,a);at(r)&&t.push(String(r).trim())}return t.join(", ")}const xa=new Set(["Cars","Cars & Vehicles","Trucks","Buses","Buses & Coaches","Motorhomes","Motorcycles","Marine & Boating","RV & Camper Accessories","Vehicles","Luxury Cars","Commercial Vehicles"]);function be(e){return e.listing_type==="vehicle"||xa.has(e.category)}function va(e){const t=String(p(e,"wheels_tires")||"");if(!t.trim())return"";t.split(",").map(o=>o.trim()).filter(Boolean);const a=String(t).match(/(?:[0-9]{2,4}\s*(?:\/[0-9]{2,3}\s*)?(?:R|ZR)[0-9]{1,2}|[0-9]{1,2}(?:\.|x|X)[0-9]{1,2}(?:\.|x|X)-?[0-9]+|[0-9]{2,3}\s*(?:\.[0-9]{1,2})?\s*(?:inches|inch|in|"))/),r=a?a[0]:"";return`
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
    </div>`}function wa(e){if(!be(e))return"";const t=[],a=(b,h,f)=>f!=null&&String(f)!==""?`<div class="bg-gray-50 border border-gray-100 rounded-xl p-3.5"><div class="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5"><i data-lucide="${b}" class="w-3.5 h-3.5"></i>${h}</div><div class="text-gray-900 font-bold text-[15px] leading-snug">${u(String(f))}</div></div>`:"",r=(b,h,f)=>f?`
    <div class="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3.5">
      <span class="shrink-0 w-7 h-7 rounded-lg bg-white border border-gray-100 flex items-center justify-center"><i data-lucide="${b}" class="w-4 h-4 text-emerald-600"></i></span>
      <div class="min-w-0"><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">${h}</p><p class="text-sm text-gray-700 leading-relaxed">${u(String(f))}</p></div>
    </div>`:"",o=[a("badge-check","Condition",p(e,"condition")),a("user-round","Previous Owners",p(e,"previous_owners")),a("clipboard-check","Registration",p(e,"registration_status")),a("shield-check","Inspection",p(e,"inspection_status")),a("badge-dollar-sign","Warranty",p(e,"warranty"))].filter(Boolean).join(""),n=[r("scroll-text","Ownership History",p(e,"ownership_history")),r("wrench","Service & Maintenance History",p(e,"service_history")),r("alert-triangle","Accident / Damage History",p(e,"accident_history"))].filter(Boolean).join("");(o||n)&&t.push(T("acc-vh-cond","shield-check","Condition & History",`
      ${o?`<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">${o}</div>`:""}
      ${n}`.trim(),!0,"emerald"));const i=va(e);i&&t.push(T("acc-vh-wheels","circle-dot","Wheels & Tires",i,!0,"amber"));const c=(b,h,f)=>Array.isArray(b)&&b.length?`
    <div><p class="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5"><i data-lucide="${h}" class="w-3.5 h-3.5"></i> ${f}</p>
    <div class="flex flex-wrap gap-2">${b.map(x=>`<span class="text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-full">${u(String(x))}</span>`).join("")}</div></div>`:"",s=[c(p(e,"safety_features"),"shield","Safety Features"),c(p(e,"driver_assistance"),"radar","Driver Assistance"),c(p(e,"technology"),"cpu","Technology & Infotainment"),c(p(e,"interior"),"armchair","Interior & Comfort")].filter(Boolean).join("");s&&t.push(T("acc-vh-safety","cpu","Safety & Technology",s,!1,"rose"));const l=[a("ruler","Dimensions (L x W x H)",p(e,"dimensions")),a("package","Cargo Capacity",p(e,"cargo_capacity")),a("truck","Towing Capacity",p(e,"towing_capacity")),a("fuel","Fuel Economy",p(e,"fuel_economy")),a("users","Seats",p(e,"seating_capacity")),a("door-open","Doors",p(e,"doors"))].filter(Boolean).join("");l&&t.push(T("acc-vh-dims","ruler","Dimensions & Capacity",`<div class="grid grid-cols-2 sm:grid-cols-3 gap-3">${l}</div>`,!1,"sky"));const d=p(e,"location")||[p(e,"city"),p(e,"state"),p(e,"country")].filter(Boolean).join(", ");if(d){const b=rt(d);t.push(T("acc-vh-loc","map-pin","Location & Availability",`
      <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3.5">
        <span class="shrink-0 w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center"><i data-lucide="map-pin" class="w-5 h-5"></i></span>
        <div class="min-w-0"><p class="text-[15px] text-gray-900 font-bold">${D(d,[d])}</p>
        ${b?`<a href="${b}" target="_blank" rel="noopener" class="text-xs font-bold text-blue-600 hover:underline">Open in Google Maps</a>`:""}</div>
      </div>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <div class="bg-emerald-50 border border-emerald-100 rounded-xl p-3"><p class="text-xs text-gray-500">Availability</p><p class="text-sm font-black text-emerald-700">${u(e.availability_status||(e.stock_quantity>0?"In Stock":"Available"))}</p></div>
        <div class="bg-gray-50 border border-gray-100 rounded-xl p-3"><p class="text-xs text-gray-500">Listing Location</p><p class="text-sm font-black text-gray-900">${u(String(p(e,"location")||"Marketplace"))}</p></div>
      </div>`,!1,"sky"))}return t.join("")}function ka(e){const t=p(e,"seller_name")||p(e,"contact_name"),a=p(e,"seller_phone")||p(e,"contact_phone"),r=p(e,"seller_email")||p(e,"contact_email"),o=p(e,"location"),n=[];return t&&n.push({icon:"user-round",label:"Company / Contact",value:t}),a&&n.push({icon:"phone",label:"Phone / WhatsApp",value:a,link:"tel:"+a.replace(/[^0-9+]/g,"")}),r&&n.push({icon:"mail",label:"Email",value:r,link:"mailto:"+r}),o&&n.push({icon:"map-pin",label:"Location",html:D(o,[o])}),`
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
    </div>`}function T(e,t,a,r,o=!1,n="blue"){const i={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"},c=i[n]||i.blue;return`
    <div class="bg-white border border-gray-200 rounded-2xl mb-3 overflow-hidden shadow-sm">
      <button type="button" data-acc="${e}" class="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left hover:bg-gray-50 transition active:bg-gray-100">
        <span class="flex items-center gap-3 min-w-0">
          <span class="shrink-0 w-10 h-10 rounded-xl ${c} flex items-center justify-center"><i data-lucide="${t}" class="w-5 h-5"></i></span>
          <span class="text-[15px] sm:text-base font-black text-gray-900 tracking-tight">${a}</span>
        </span>
        <span data-acc-icon="${e}" class="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${o?"rotate-180":""}">
          <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500"></i>
        </span>
      </button>
      <div data-acc-body="${e}" class="px-4 sm:px-5 pb-5 ${o?"":"hidden"}">
        ${r}
      </div>
    </div>`}window.toggleAccordion=e=>{const t=document.querySelector(`[data-acc-body="${e}"]`),a=document.querySelector(`[data-acc-icon="${e}"]`);!t||!a||(t.classList.toggle("hidden"),a.classList.toggle("rotate-180"))};function $a(){return`
    <div class="space-y-3 text-[15px] text-gray-700 leading-relaxed">
      <p class="flex items-start gap-2.5"><i data-lucide="truck" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Shipping methods.</strong> Standard delivery is <strong>free worldwide</strong> (3–7 business days). Express (2–4 business days, $25) and Priority (1–2 business days, $50) are available at checkout.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Courier partners.</strong> We ship with trusted international couriers — DHL, FedEx, UPS and EMS. Every shipment gets a tracking number.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="clock" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Processing time.</strong> Orders are processed within 1–2 business days after payment confirmation. Bank-transfer orders are processed once the receipt is verified.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="globe" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">International delivery.</strong> We ship to over 200 countries. Customs duties and import taxes may apply and are the buyer's responsibility.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="search-check" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Tracking.</strong> You'll receive a shipping confirmation email with your tracking number. You can also track orders from your account dashboard.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="badge-help" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span>Questions? <a href="/shipping-policy.html" class="text-blue-600 font-bold hover:underline">Read the full Shipping Policy</a>.</span></p>
    </div>`}function Sa(){return`
    <div class="space-y-3 text-[15px] text-gray-700 leading-relaxed">
      <p class="flex items-start gap-2.5"><i data-lucide="rotate-ccw" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">14-day easy returns.</strong> Items may be returned within 14 days of delivery. Refund requests must be submitted within 30 days of the order date.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="calendar-x" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Cancellation before shipment.</strong> Cancel before your order ships and a full refund is issued within 5–7 business days.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package-x" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Damaged or defective.</strong> If your item arrives damaged, contact us within 7 days with photos — we arrange a replacement or full refund, including return shipping.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package-search" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Non-delivery.</strong> If your order doesn't arrive within the estimated window plus 14 days, we investigate with the carrier and refund or resend at no cost.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="wallet" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Refund processing.</strong> Approved refunds are processed within 5–7 business days. Card refunds take 5–10 business days to appear, bank transfers 7–14, mobile money 3–5.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="circle-slash" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Non-refundable.</strong> Final-sale items, digital products, and items used or damaged by the customer are not eligible for refunds.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="badge-help" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span>Questions? <a href="/refund-policy.html" class="text-blue-600 font-bold hover:underline">Read the full Return &amp; Refund Policy</a>.</span></p>
    </div>`}function _a(){const e=[{q:"How do I track my order?",a:"Once your order ships you'll get a confirmation email with your tracking number. You can also track it anytime from your account dashboard under Shipping & Delivery."},{q:"Is shipping really free worldwide?",a:"Yes. Standard shipping to any country is free on every order. Express and Priority upgrades are available at checkout if you need it sooner."},{q:"How long does delivery take?",a:"Standard delivery takes 3–7 business days. Express takes 2–4 business days and Priority 1–2 business days. Processing adds 1–2 business days after payment is confirmed."},{q:"How do returns work?",a:"Items can be returned within 14 days of delivery. Refund requests must be submitted within 30 days of the order date — see the Return &amp; Refund Policy section above."}],t=[{q:"Is my payment secure?",a:"Yes. All payments are processed over SSL-encrypted connections through certified payment gateways. Your payment details are never stored on our servers in plain text."},{q:"Can I cancel my order before it ships?",a:"Absolutely. Cancel before shipment and a full refund is issued within 5–7 business days to your original payment method."},{q:"What if my item arrives damaged?",a:"Contact us within 7 days of delivery with photos and a description. We'll arrange a replacement or a full refund — including return shipping costs."},{q:"How do I contact customer support?",a:"Email us at support@weverseonlineshop.com or use the Contact page. Our team reviews every message within 48 hours."},{q:"Do you ship to my country?",a:"We ship to over 200 countries worldwide. Customs duties and import taxes, where applicable, are the buyer's responsibility."},{q:"How do I request a refund?",a:"Email support@weverseonlineshop.com with your order number, the reason, and any supporting documentation. Approved refunds are processed within 5–7 business days."}],a=r=>`
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
    </div>`}function La(e){const t=(e.description||"").trim(),a="text-[15px] sm:text-[16px] text-gray-900 leading-[1.75] mb-3";if(t.length>140)return t.split(/\r?\n+/).filter(Boolean).map(v=>`<p class="${a}">${u(v)}</p>`).join("");(e.title||"this item").trim();const r=String(e.category||e.listing_type||"item").toLowerCase(),o=(e.brand||"").trim(),n=(e.color||"").trim(),i=(e.condition||"").trim(),c=(e.country||"").trim(),s=Array.isArray(e.features)&&e.features.length?e.features.map(v=>typeof v=="string"?v.trim():(v&&v.label||"").trim()).filter(Boolean):[],l=Array.isArray(e.tags)&&e.tags.length?e.tags.map(v=>typeof v=="string"?v.trim():String(v).trim()).filter(Boolean):[];let d=$t(String(e.property_id||e.id||"")+"::desc");const b=()=>{d|=0,d=d+1831565813|0;let v=Math.imul(d^d>>>15,1|d);return v=v+Math.imul(v^v>>>7,61|v)^v,((v^v>>>14)>>>0)/4294967296},h=v=>v[Math.floor(b()*v.length)%v.length],f=h(["This "+r+" is built around one simple idea: you get something genuinely useful that holds up to everyday use.","A practical, well-made "+r+" that fits right into your routine without overcomplicating things.","Thoughtfully put together and easy to live with, this "+r+" does exactly what it should, without fuss.","Made to be used, not just looked at — a dependable "+r+" that earns its place."]),x=h(["The materials and finish feel solid in person, so you can count on it for the long run.","Construction is clean and sturdy, and the details are finished with real care.","It is well assembled and holds up to regular use, with quality you can feel right away."]),g=h(["It is easy to use from the moment it arrives, with nothing complicated to figure out.","Everything is straightforward and practical — set it up and it just works.","Designed to be convenient day to day, it is simple to handle and a pleasure to use."]);let m=[];o&&m.push(`brand: ${o}`),i&&m.push(i.toLowerCase()==="new"?"brand new condition":`${i.toLowerCase()} condition`),n&&m.push(`colour: ${n}`),c&&m.push(`shipping from ${c}`),m=m.filter(Boolean);const k=m.length?`You can expect ${m.slice(0,3).join(" · ")}.`:"",E=l.length?l.slice(0,6).map(v=>`<span class="inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 mr-1.5 mb-1.5">${u(v)}</span>`).join(""):"",I=s.length?`
      <div class="mt-4">
        <h4 class="flex items-center gap-2 text-[13px] font-black uppercase tracking-wide text-gray-900 mb-2.5">
          <i data-lucide="list-checks" class="w-4 h-4 text-blue-500"></i> Key features
        </h4>
        <ul class="space-y-2.5">
          ${s.slice(0,6).map(v=>`
            <li class="flex items-start gap-2.5">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-blue-500 shrink-0 mt-0.5"></i>
              <span class="text-[15px] sm:text-[16px] text-gray-900 leading-relaxed">${u(v)}</span>
            </li>`).join("")}
        </ul>
      </div>`:"";return`
    <h4 class="flex items-center gap-2 text-[13px] font-black uppercase tracking-wide text-gray-900 mb-3">
      <i data-lucide="file-text" class="w-4 h-4 text-blue-500"></i> About this ${r}
    </h4>
    <p class="${a}">${u(f)}</p>
    <p class="${a}">${u(x)} ${u(g)}</p>
    ${t.trim()?`<p class="${a}">${u(t.trim())}</p>`:""}
    ${k?`<p class="${a}"><span class="font-bold text-gray-900">Details:</span> ${u(k)}</p>`:""}
    ${I}
    ${E?`<div class="mt-3 pt-3">${E}</div>`:""}
    <p class="${a} mt-3 border-t border-slate-100 pt-3">${u(h(["Order with confidence — the Weverse Online Shop team is here if you need anything along the way.","A dependable everyday choice, backed by our easy-returns promise if it is not quite right for you.","Great value for what you get, delivered to your door with secure checkout and helpful support."]))}</p>`}function qe(e,t,a,r,o,n=""){const i=e.listing_type==="property",c=`
    ${La(e)}
    ${o||""}
    ${Et(r)}
    ${Lt(a)}`;return`
    ${T("acc-details","file-text",i?"Property Details":be(e)?"Vehicle Details":"Product Details",c,!0,"blue")}
    ${T("acc-specs","settings-2",i?"Property Specifications":be(e)?"Vehicle Specifications":"Specifications",_t(t)||'<p class="text-sm text-gray-500">No specifications available for this listing.</p>',!0,"violet")}
    ${n||""}
    ${T("acc-shipping","truck","Shipping Information",$a(),!1,"emerald")}
    ${T("acc-refund","rotate-ccw","Return &amp; Refund Policy",Sa(),!1,"rose")}
    ${T("acc-faq","circle-help","Frequently Asked Questions",_a(),!1,"amber")}`}function je(){const e=document.getElementById("details-content");if(!e)return;e.querySelectorAll("[data-acc]").forEach(a=>{a.dataset.bound||(a.dataset.bound="1",a.addEventListener("click",()=>{const r=a.dataset.acc,o=e.querySelector(`[data-acc-body="${r}"]`),n=e.querySelector(`[data-acc-icon="${r}"]`);!o||!n||(o.classList.toggle("hidden"),n.classList.toggle("rotate-180"),window.lucide&&lucide.createIcons())}))}),e.querySelectorAll(".faq-q").forEach(a=>{a.dataset.bound||(a.dataset.bound="1",a.addEventListener("click",()=>{const r=a.querySelector("i, svg"),o=a.nextElementSibling;o&&(o.classList.toggle("hidden"),r&&r.classList.toggle("rotate-180"))}))});const t=e.querySelector("#faq-show-more");t&&!t.dataset.bound&&(t.dataset.bound="1",t.addEventListener("click",()=>{const a=e.querySelector(".faq-extra");if(!a)return;a.classList.toggle("hidden");const r=t.querySelector("i, svg");r&&r.classList.toggle("rotate-180"),t.innerHTML=a.classList.contains("hidden")?'Show more questions <i data-lucide="chevron-down" class="w-4 h-4"></i>':'Show fewer questions <i data-lucide="chevron-up" class="w-4 h-4"></i>',window.lucide&&lucide.createIcons()}))}function Le(e){if(!e)return"";const t=new Date(e);return!t.getTime()||isNaN(t.getTime())?"":t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function Ea(e){if(typeof e.likes=="number"&&e.likes>0)return e.likes;const t=String(e.text||e.comment||e.created_at||e.name||"");let a=2166136261;for(let r=0;r<t.length;r++)a^=t.charCodeAt(r),a=Math.imul(a,16777619);return 2+(a>>>0)%140}function mt(e){return e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"k":String(e)}function Ia(e){return`
    <div class="flex gap-2.5 pl-0.5">
      <div class="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center text-[11px] font-black uppercase shadow-sm">${u(String(e.author||"Guest").trim().charAt(0).toUpperCase()||"G")}</div>
      <div class="min-w-0 flex-1 rounded-xl bg-gray-50 border border-gray-100 px-3 py-2">
        <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <span class="text-xs font-bold text-gray-900">${u(e.author||"Guest")}</span>
          <span class="text-[11px] text-gray-400">&middot; ${Le(e.created_at)}</span>
        </div>
        <p class="text-sm text-gray-700 mt-0.5 leading-relaxed break-words">${u(e.body||"")}</p>
      </div>
    </div>`}function Ma(e){const t=e.author_name||e.name||e.profiles?.full_name||"Anonymous",a=u(t.trim().charAt(0).toUpperCase()||"A"),r=e.handle?`<span class="text-xs font-semibold text-gray-400">${u(e.handle)}</span>`:"",o=Le(e.date||e.created_at),n=o?`<span class="text-xs text-gray-400">&middot; ${o}</span>`:"",i=e.location&&!e.handle?`<span class="text-xs text-gray-400">&middot; ${u(e.location)}</span>`:"",c=e.title?`<p class="text-sm font-bold text-gray-900 mt-1">${u(e.title)}</p>`:"",s=e.verified?'<span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full"><i data-lucide="badge-check" class="w-3 h-3"></i> Verified Purchase</span>':"",l=e.review_photo?`<div class="mt-2.5"><img src="${u(e.review_photo)}" alt="Customer photo" class="w-28 h-28 object-cover rounded-xl border border-gray-200" loading="lazy" onerror="this.style.display='none'"></div>`:"",d=e._key||"",b=N.likes.get(d)||0,h=Ea(e)+b,f=N.liked.has(d),x=N.comments.get(d)||[],g=(typeof e.replies=="number"&&e.replies>0?e.replies:0)+x.length,m=`
    <button type="button" class="review-like-btn btn-press inline-flex items-center gap-1.5 text-xs font-bold transition ${f?"text-[#fe2c55]":"text-gray-500 hover:text-[#fe2c55]"}" data-key="${d}">
      <i data-lucide="heart" class="w-4 h-4 ${f?"fill-[#fe2c55] text-[#fe2c55]":""}"></i> ${mt(h)}
    </button>`,k=`
    <button type="button" class="review-reply-toggle btn-press inline-flex items-center gap-1.5 text-xs font-bold transition ${W===d?"text-blue-600":"text-gray-500 hover:text-blue-500"}" data-key="${d}">
      <i data-lucide="message-circle" class="w-4 h-4"></i> ${g>0?`${mt(g)} replies`:"Reply"}
    </button>`;let E="";W===d&&(E=`
      <div class="review-reply-box mt-3 rounded-xl border border-gray-200 bg-gray-50/80 p-3 space-y-2">
        <input type="text" class="review-reply-name w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" placeholder="Your name (optional)" maxlength="40" value="${u(ue||"")}">
        <textarea class="review-reply-body w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[74px] resize-y" placeholder="Write a comment..." maxlength="1000"></textarea>
        <div class="flex items-center justify-end gap-2">
          <button type="button" class="review-reply-cancel text-xs font-bold text-gray-500 hover:text-gray-700 px-3 py-2 transition">Cancel</button>
          <button type="button" data-key="${d}" class="review-reply-post btn-press inline-flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition shadow-sm shadow-blue-500/20"><i data-lucide="send" class="w-3.5 h-3.5"></i> Comment</button>
        </div>
      </div>`);const I=x.length?`<div class="mt-2.5 space-y-2.5">${x.map(Ia).join("")}</div>`:"";return`
    <div class="flex gap-3 py-4 border-b border-gray-100 last:border-0">
      <button type="button" class="review-avatar shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-black uppercase shadow-sm transition hover:ring-2 hover:ring-blue-200" data-open-reviewer="${d}" title="View ${u(t)}'s profile">${a}</button>
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <button type="button" data-open-reviewer="${d}" class="review-author text-sm font-bold text-gray-900 hover:text-blue-600 hover:underline transition">${u(t)}</button>${r}${n}${i}
          ${s}
        </div>
        <div class="flex gap-0.5 mt-1">${[1,2,3,4,5].map(v=>`<i data-lucide="star" class="w-3.5 h-3.5 ${v<=(e.rating||0)?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}</div>
        ${c}
        <p class="text-[15px] text-gray-700 leading-relaxed mt-1.5">${u(e.text||e.comment||"")}</p>
        ${l}
        <div class="flex items-center gap-5 mt-2.5">
          ${m}
          ${k}
        </div>
        ${E}
        ${I}
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
    </div>`}function Ca(e,t,a){const r=Math.max(1,a);return`
    <div class="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 items-center bg-gray-50 border border-gray-100 rounded-2xl p-4">
      ${[5,4,3,2,1].map(o=>{const n=t[o]||0,i=Math.round(n/r*100);return`
        <div class="flex items-center gap-1.5 text-xs text-gray-600 font-semibold"><i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>${o}</div>
        <div class="flex items-center gap-2">
          <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden"><div class="h-full bg-amber-400 rounded-full" style="width:${i}%"></div></div>
          <span class="text-[11px] text-gray-400 w-9 text-right tabular-nums">${i}%</span>
        </div>`}).join("")}
    </div>`}function Aa(){const t=new URLSearchParams(window.location.search).get("id");if(t)return t;const a=window.location.pathname.match(/^\/product\/([^/]+)\/?$/);if(a&&a[1])try{return decodeURIComponent(a[1])}catch{return a[1]}return null}const ae=[...xt];function bt(e){return ae.find(t=>t.property_id===e)||null}let Ke=null;function Ba(){return Ke||(Ke=Nt(()=>import("./motorhome-data-CupbOvk0.js").then(e=>e.c),[]).then(e=>{const t=e.PRODUCT_EXTRA_LISTINGS||[];for(const a of t)ae.some(r=>r.property_id===a.property_id)||ae.push(a);return ae}).catch(()=>ae)),Ke}function qa(e){const t=document.getElementById("details-content"),a=Ot(e),o=Ae(e.images).map((d,b)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${b===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(d)}">
      <img src="${u(d)}" alt="View ${b+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${P}'">
    </button>`).join(""),n=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cargo Area / Truck Bed","Engine","Wheels / Tires","Additional View"],i=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"package",label:"Payload Capacity",value:e.payload_capacity},{icon:"link",label:"Towing Capacity",value:e.towing_capacity},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(d=>d.value!=null&&d.value!==""&&d.value!=="N/A");Be(e.features);const c=Te();t.innerHTML=`
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

      ${He(e)}

      ${Pe()}

      <!-- Smart Agent Buttons -->
      <div class="mb-8 pt-4 border-t border-gray-100" id="agent-buttons-block">${Ee(e,{compact:!1})}</div>

      <!-- Description -->
      ${qe(e,i,e.features,null,null)}

      ${c}

      ${Re(e)}

      ${Ne()}
    </div>
  `;const s=document.getElementById("hero-image"),l=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((d,b)=>{d.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.add("border-gray-200")),d.classList.add("active","border-blue-500"),d.classList.remove("border-gray-200"),s.src=d.dataset.img,l.textContent=n[b]||`View ${b+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await G()?window.location.href=`/checkout.html?id=${e.property_id}`:(fe(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Ie(e)}),Me(document.getElementById("agent-buttons-block"),()=>e),Ve(e),De(e),Fe(e),he(e),je(),window.lucide&&lucide.createIcons()}function ja(e){const t=document.getElementById("details-content"),a=_e(e),o=Ae(e.images).map((d,b)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${b===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(d)}">
      <img src="${u(d)}" alt="View ${b+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${P}'">
    </button>`).join(""),n=["Exterior Front","Exterior Side","Exterior Rear","Living Area","Kitchen","Bedroom","Bathroom","Additional View"],i=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(d=>d.value!=null&&d.value!==""&&d.value!=="N/A");Be(e.features);const c=Te();t.innerHTML=`
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

      ${He(e)}

      ${Pe()}

      <!-- Smart Agent Buttons -->
      <div class="mb-8 pt-4 border-t border-gray-100" id="agent-buttons-block">${Ee(e,{compact:!1})}</div>

      <!-- Description -->
      ${qe(e,i,e.features,null,null)}

      ${c}

      ${Re(e)}

      ${Ne()}
    </div>
  `;const s=document.getElementById("hero-image"),l=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((d,b)=>{d.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.add("border-gray-200")),d.classList.add("active","border-blue-500"),d.classList.remove("border-gray-200"),s.src=d.dataset.img,l.textContent=n[b]||`View ${b+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await G()?window.location.href=`/checkout.html?id=${e.property_id}`:(fe(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Ie(e)}),Me(document.getElementById("agent-buttons-block"),()=>e),Ve(e),De(e),Fe(e),he(e),je(),window.lucide&&lucide.createIcons()}function Ta(e){const t=document.getElementById("details-content"),a=_e(e),o=Ae(e.images).map((d,b)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${b===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(d)}">
      <img src="${u(d)}" alt="View ${b+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${P}'">
    </button>`).join(""),n=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cabin / Interior","Wheels / Tires","Additional View"],i=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(d=>d.value!=null&&d.value!==""&&d.value!=="N/A");Be(e.features);const c=Te();t.innerHTML=`
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

      ${He(e)}

      ${Pe()}

      <!-- Smart Agent Buttons -->
      <div class="mb-8 pt-4 border-t border-gray-100" id="agent-buttons-block">${Ee(e,{compact:!1})}</div>

      <!-- Description -->
      ${qe(e,i,e.features,null,null)}

      ${c}

      ${Re(e)}

      ${Ne()}
    </div>
  `;const s=document.getElementById("hero-image"),l=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((d,b)=>{d.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.add("border-gray-200")),d.classList.add("active","border-blue-500"),d.classList.remove("border-gray-200"),s.src=d.dataset.img,l.textContent=n[b]||`View ${b+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await G()?window.location.href=`/checkout.html?id=${e.property_id}`:(fe(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Ie(e)}),Me(document.getElementById("agent-buttons-block"),()=>e),Ve(e),De(e),Fe(e),he(e),je(),window.lucide&&lucide.createIcons()}function Ra(e){const t=e.listing_type==="property",a=t?"Share Property":"Share",r=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`,o=t?'<a href="#listing-map" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-bold py-3 rounded-xl transition text-sm"><i data-lucide="map-pin" class="w-5 h-5"></i> View Map</a>':"",n=t?`
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
      <div class="mt-4 pt-4 border-t border-gray-100" id="agent-buttons-block">${Ee(e,{compact:!1})}</div>
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
      </div>`}function Na(e){const t=e.listing_type==="property",a=be(e),r=[];return r.push({icon:"badge-check",title:t?"Managed & promoted by":"Sold & shipped by",sub:"Weverse Online Shop"}),t?(r.push({icon:"shield-check",title:"Verified listing",sub:"Checked before publish"}),r.push({icon:"calendar-check",title:"Viewing available",sub:"In-person or live video"})):a?(r.push({icon:"shield-check",title:"Inspected & verified",sub:"Condition confirmed"}),r.push({icon:"truck",title:"Delivery arranged",sub:"Door-to-door options"})):(r.push({icon:"clock",title:"Ships in 24 hours",sub:"Free worldwide 3–7 days"}),r.push({icon:"package-search",title:"Tracked every step",sub:"DHL · FedEx · UPS · EMS"})),`
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
      ${r.map(o=>`
        <div class="flex items-center gap-3 bg-white/75 border border-gray-200 rounded-xl px-3.5 py-3 shadow-sm">
          <span class="shrink-0 w-9 h-9 rounded-full ${o.icon==="badge-check"?"bg-blue-50 text-blue-600":o.icon==="shield-check"?"bg-emerald-50 text-emerald-600":"bg-violet-50 text-violet-600"} flex items-center justify-center"><i data-lucide="${o.icon}" class="w-4 h-4"></i></span>
          <div class="min-w-0">
            <p class="text-xs font-black text-gray-900 leading-tight">${o.title}</p>
            <p class="text-[11px] text-gray-500 leading-tight">${o.sub}</p>
          </div>
        </div>`).join("")}
    </div>`}function Ha(){return`
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
    </div>`}function Pa(){return`
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
        ${Na(e)}
        ${Ha()}
        ${Pa()}
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
    </div>`}async function De(e){try{const t=document.getElementById("hot-now-section"),a=t&&t.querySelector(".hot-grid");if(!t||!a)return;const o=[...It(e)].sort((i,c)=>(Number(c.favorite_count)||0)+(Number(c.sold_count)||0)*2+(Number(c.rating)||0)*10-((Number(i.favorite_count)||0)+(Number(i.sold_count)||0)*2+(Number(i.rating)||0)*10)).slice(0,10);if(!o.length)return;t.classList.remove("hidden"),a.innerHTML="";const n=document.createDocumentFragment();o.forEach(i=>{const c=document.createElement("div");c.className="shrink-0 w-[220px] sm:w-[280px] snap-start relative";const s=vt(i);s.style.width="100%",c.appendChild(s);const l=document.createElement("span");l.className="kco-live-dot absolute top-2.5 left-2.5 z-10 w-2.5 h-2.5 ring-2 ring-white/80",l.setAttribute("aria-hidden","true"),l.title="Available now",c.appendChild(l),n.appendChild(c)}),a.appendChild(n),window.lucide&&lucide.createIcons()}catch{}}function It(e){const t=new Map,a=r=>(r||[]).forEach(o=>{o&&o.property_id&&t.set(o.property_id,o)});return a(Pt),a(Ut),a(zt),a(Gt),a(Yt),a(Qt),a(xt),a(ae),a(Ht()),Vt(e.category||e.subcategory),[...t.values()].filter(r=>r.property_id!==e.property_id)}function Da(e,t){let a=0;const r=l=>String(l||"").trim().toLowerCase();e.listing_type&&e.listing_type===t.listing_type&&(a+=40),e.category&&r(e.category)===r(t.category)&&(a+=30),e.subcategory&&r(e.subcategory)===r(t.subcategory)&&(a+=20),e.brand&&r(e.brand)===r(t.brand)&&(a+=15),e.breed&&r(e.breed)===r(t.breed)&&(a+=15),e.model&&r(e.model)===r(t.model)&&(a+=10),e.property_type&&r(e.property_type)===r(t.property_type)&&(a+=15);const o=parseFloat(e.price)||0,n=parseFloat(t.price)||0;if(o>0&&n>0){const l=Math.min(o,n)/Math.max(o,n);l>=.8?a+=10:l>=.6?a+=6:l>=.4&&(a+=3)}e.country_code&&e.country_code===t.country_code&&(a+=5);const i=new Set(r(e.title).split(/[^a-z0-9]+/).filter(l=>l.length>2)),c=new Set(r(t.title).split(/[^a-z0-9]+/).filter(l=>l.length>2));let s=0;return i.forEach(l=>{c.has(l)&&s++}),a+=Math.min(s*2,10),a}function Je(e,t){const a=document.getElementById(e);if(!a)return;const r=a.querySelector(".rel-grid");if(!r)return;if(!t.length){a.classList.add("hidden");return}a.classList.remove("hidden"),r.innerHTML="";const o=document.createDocumentFragment();t.slice(0,10).forEach(n=>{const i=document.createElement("div");i.className="shrink-0 w-[260px] sm:w-[320px] snap-start relative";const c=vt(n);c.style.width="100%",i.appendChild(c);const s=document.createElement("span");s.className="kco-live-dot absolute top-2.5 left-2.5 z-10 w-2.5 h-2.5 ring-2 ring-white/80",s.setAttribute("aria-hidden","true"),s.title="Available now",i.appendChild(s),o.appendChild(i)}),r.appendChild(o),window.lucide&&lucide.createIcons()}function Ve(e){const t=It(e),a=t.map(s=>({item:s,score:Da(e,s)})).sort((s,l)=>l.score-s.score||(l.item.rating||0)-(s.item.rating||0)),r=a.filter(s=>s.score>=35).map(s=>s.item),o=new Set(r.map(s=>s.property_id)),n=a.filter(s=>s.score>=15&&s.score<35&&!o.has(s.item.property_id)).map(s=>s.item),i=[...t].filter(s=>!o.has(s.property_id)).sort((s,l)=>(l.rating||0)-(s.rating||0)).slice(0,10),c=a.filter(s=>!o.has(s.item.property_id)).map(s=>s.item);Je("similar-section",r.length?r:c.slice(0,10)),Je("related-section",n.length?n:c.slice(0,10)),Je("recommended-section",i.length?i:c.slice(0,10))}function Va(e){const t=document.getElementById("details-content"),a=e.listing_type==="property",r=be(e),o=_e(e),n=ot(e.country_code),i=e.listing_type==="product"?"Product ID":a?"Property ID":"Listing ID";let c="",s="",l=parseFloat(e.real_price);if((!Number.isFinite(l)||l<=0)&&(l=parseFloat(e.compare_at_price??e.original_price)),Number.isFinite(l)&&l>0&&l>parseFloat(e.price)){const y=Math.round((1-parseFloat(e.price)/l)*100);c=`<span class="text-lg text-gray-400 price-strike line-through font-medium">${_e({...e,price:l})}</span>`,s=`<span class="kco-sale-pulse kco-glow inline-flex items-center gap-1 text-xs font-black text-white bg-red-500 px-2.5 py-1 rounded-full relative overflow-hidden">-${y}% OFF<span class="absolute inset-0 kco-shimmer pointer-events-none"></span></span>`}const d=e.availability_status||(e.listing_type==="product"?"In Stock":"Available"),b=Ae(e.images),h=[e.video,e.video_url].find(y=>y&&typeof y=="string"&&z(y)),f=[...b];h&&!f.includes(h)&&f.unshift(h);const x=f.findIndex(y=>z(y)),g=f.findIndex(y=>!z(y)),m=g>=0?g:x>=0?x:0,k=f[m],E=z(k),I=g>=0?f[g]:"",v=f.map((y,w)=>{const C=z(y)?`<video src="${u(y)}" muted preload="auto" playsinline class="w-20 h-16 object-cover"></video>
         <div class="absolute inset-0 flex items-center justify-center"><div class="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center"><svg class="w-2.5 h-2.5 text-gray-800 ml-px" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:`<img src="${u(y)}" alt="View ${w+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${P}'">`;return`<button class="gallery-thumb relative rounded-lg overflow-hidden border-2 ${w===m?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(y)}">
      ${C}
    </button>`}).join("");let H="";if(a){const y=[{icon:"globe",label:"Country",value:D(`${n} ${e.country}`,[e.country])},{icon:"map-pin",label:"State / Province",value:D(e.state,[e.state,e.country])},{icon:"building",label:"City",value:D(e.city,[e.city,e.state,e.country])},{icon:"navigation",label:"Town / Local Area",value:D(e.town,[e.town,e.city,e.state,e.country])},{icon:"signpost",label:"Neighborhood / District",value:D(p(e,"neighborhood"),[p(e,"neighborhood"),e.city,e.state,e.country])},{icon:"home",label:"Address",value:D(p(e,"address"),[p(e,"address"),e.city,e.state,e.country])}].filter(w=>w.value);H=`
      <div class="mt-4">
        ${re("map-pin","Location","rose")}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${y.map(w=>`
            <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
              <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="${w.icon}" class="w-4 h-4 text-blue-500"></i></div>
              <div class="min-w-0"><div class="text-gray-500 text-xs">${w.label}</div><div class="mt-0.5">${w.value}</div></div>
            </div>
          `).join("")}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-200" style="height:280px"></div>
      </div>`}else if(r){const w=[p(e,"location"),p(e,"city"),p(e,"state"),p(e,"country")].map(_=>_==null?"":String(_).trim()).filter(Boolean).join(", ");if(w){const _=rt(w);H=`
      <div class="mt-4">
        ${re("map-pin","Location","rose")}
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="sm:col-span-2 flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
            <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="map-pin" class="w-4 h-4 text-blue-500"></i></div>
            <div class="min-w-0"><div class="text-gray-500 text-xs">Vehicle Location</div><div class="mt-0.5">${D(w,[w])}</div></div>
          </div>
          ${_?`<div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
            <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="navigation" class="w-4 h-4 text-blue-500"></i></div>
            <div><div class="text-gray-500 text-xs">View on Map</div><a href="${_}" target="_blank" rel="noopener" class="text-blue-600 font-bold text-sm hover:underline">Google Maps <i data-lucide="external-link" class="w-3.5 h-3.5 inline"></i></a></div>
          </div>`:""}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-200" style="height:280px"></div>
      </div>`}}let A=[];a?(A=[{icon:"bed-double",label:"Bedrooms",value:e.bedrooms},{icon:"bath",label:"Bathrooms",value:e.bathrooms},{icon:"droplets",label:"Half Bathrooms",value:e.half_bathrooms},{icon:"building",label:"Building / Living Size",value:e.building_size},{icon:"ruler",label:"Land / Lot Size",value:e.land_size},{icon:"layers",label:"Floors / Levels",value:e.floors},{icon:"car-front",label:"Parking Spaces",value:e.parking_spaces},{icon:"warehouse",label:"Garage",value:e.garage},{icon:"home",label:"Property Type",value:e.property_type},{icon:"sofa",label:"Furnished",value:e.furnished},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"calendar",label:"Year Built",value:e.year_built},{icon:"paintbrush",label:"Year Renovated",value:e.year_renovated},{icon:"mail",label:"ZIP / Postal Code",value:e.zip_code},{icon:"tag",label:"Status",value:e.listing_status==="rent"?"For Rent":"For Sale"},{icon:"signpost",label:"Neighborhood",html:D(p(e,"neighborhood"),[p(e,"neighborhood"),e.city,e.state,e.country])},{icon:"sofa",label:"Living Areas",value:p(e,"living_areas")},{icon:"flame",label:"Kitchens",value:p(e,"kitchens")},{icon:"tree-pine",label:"Balconies",value:p(e,"balconies")},{icon:"leaf",label:"Garden / Yard",value:p(e,"garden")},{icon:"waves",label:"Pool",value:p(e,"pool")},{icon:"lock",label:"Security",value:p(e,"security")},{icon:"home",label:"Utilities & Heating",value:p(e,"utilities")},{icon:"hammer",label:"Construction Type",value:p(e,"construction_type")},{icon:"clipboard-check",label:"Construction Status",value:p(e,"construction_status")},{icon:"user-check",label:"Ownership Type",value:p(e,"ownership_type")}].filter(y=>y.html||y.value!=null&&y.value!==""),ce("Property Information","home",A)):e.category==="Motorhomes"?(A=[{icon:"factory",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank}].filter(y=>y.html||y.value!=null&&y.value!==""),ce("Vehicle Information","bus",A,"violet")):r?(A=[{icon:"tag",label:"Title / Listing",value:e.title},{icon:"car-front",label:"Vehicle / Body Type",value:p(e,"body_type")},{icon:"factory",label:"Make / Brand",value:p(e,"make")||e.brand},{icon:"car",label:"Model",value:p(e,"model")},{icon:"badge-award",label:"Trim / Edition",value:p(e,"trim")},{icon:"calendar",label:"Year",value:p(e,"model_year")},{icon:"gauge",label:"Mileage",value:p(e,"mileage")},{icon:"zap",label:"Engine",value:p(e,"engine")},{icon:"gauge",label:"Horsepower",value:p(e,"horsepower")},{icon:"cog",label:"Transmission",value:p(e,"transmission")},{icon:"route",label:"Drive Type",value:p(e,"drive_type")},{icon:"fuel",label:"Fuel Type",value:p(e,"fuel_type")},{icon:"fuel",label:"Fuel Economy",value:p(e,"fuel_economy")},{icon:"users",label:"Seating Capacity",value:p(e,"seating_capacity")},{icon:"door-open",label:"Doors",value:p(e,"doors")},{icon:"palette",label:"Color / Exterior",value:p(e,"color")},{icon:"fingerprint",label:"VIN",value:p(e,"vin")},{icon:"badge-check",label:"Condition",value:p(e,"condition")},{icon:"wrench",label:"Warranty",value:p(e,"warranty")}].filter(y=>y.html||y.value!=null&&y.value!==""),ce("Vehicle Specifications","car-front",A,"violet")):e.listing_type==="product"?(A=[{icon:"factory",label:"Brand",value:e.brand},{icon:"tag",label:"Subcategory",value:e.subcategory},{icon:"palette",label:"Colour",value:e.color},{icon:"ruler",label:"Size",value:e.size},{icon:"layers",label:"Material",value:e.material},{icon:"badge-check",label:"Condition",value:e.condition||"New"},{icon:"shield-check",label:"Warranty",value:e.warranty},{icon:"package-check",label:"Availability",value:e.availability_status}].filter(y=>y.html||y.value!=null&&y.value!==""),ce("Product Information","package",A)):e.listing_type==="pet"&&(A=[{icon:"paw-print",label:"Breed",value:e.breed},{icon:"calendar",label:"Age",value:e.age},{icon:"users",label:"Gender",value:e.gender},{icon:"palette",label:"Colour",value:e.color},{icon:"scale",label:"Weight",value:e.size},{icon:"globe",label:"Origin",html:D(`${ot(e.country_code)} ${e.country}`,[e.country])},{icon:"badge-check",label:"Health",value:e.condition}].filter(y=>y.html||y.value!=null&&y.value!==""),ce("Pet Information","paw-print",A,"amber")),Be(e.features),pa(e.highlights);const Y=Te(),F=[];if(Number(e.rating)>0){const y=Math.max(0,Math.round(Number(e.rating_count)||0));F.push(`<span class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700"><span class="flex">${St(e.rating,"w-4 h-4")}</span><span>${Number(e.rating).toFixed(1)}${y?` (${y} rated)`:""}</span></span>`)}Math.round(Number(e.review_count)||0)>0&&F.push(`<span class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700"><i data-lucide="message-square" class="w-4 h-4 text-blue-500"></i>${Math.round(Number(e.review_count))} reviews</span>`),Math.round(Number(e.favorite_count)||0)>0&&F.push(`<span class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700"><i data-lucide="heart" class="w-4 h-4 text-rose-500"></i>${Math.round(Number(e.favorite_count))} saved</span>`);const ye=Math.round(Number(e.sold_count)||Number(e.review_count)||0);ye>0&&F.push(`<span class="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700"><i data-lucide="shopping-bag" class="w-4 h-4"></i>${ye}+ shopped</span>`);const $=F.length?`<div class="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 pt-3 border-t border-gray-100">${F.join("")}</div>`:"",j=parseInt(e.stock_quantity,10);let Z="";Number.isFinite(j)&&j>0&&j<=5?Z=`<span class="kco-hurry inline-flex items-center gap-1.5 text-xs font-black text-amber-800 bg-amber-50 border-2 border-amber-300 px-2.5 py-1 rounded-full"><i data-lucide="flame" class="w-3.5 h-3.5 kco-blink-soft text-amber-500"></i> Hurry! Only ${j} left in stock</span>`:Number.isFinite(j)&&j>5&&(Z=`<span class="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full"><i data-lucide="layers" class="w-3.5 h-3.5"></i> ${j} in stock</span>`);let oe="";s&&(oe=`
      <div class="mt-3 kco-glow relative overflow-hidden rounded-xl bg-white border border-blue-200 p-0">
        <div class="flex items-center gap-3 px-3 py-2">
          <span class="kco-live-dot shrink-0" aria-hidden="true"></span>
          <span class="text-xs font-black text-gray-900 uppercase tracking-wide">Live deal</span>
          <span class="text-xs font-black text-red-500 kco-blink-soft">Save ${Math.round((1-parseFloat(e.price)/l)*100)}%</span>
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

      <div class="relative overflow-hidden rounded-2xl border border-blue-100 mb-6 shadow-sm">
        <div class="absolute inset-0" style="background:
          radial-gradient(760px 300px at 92% -20%, rgba(59,130,246,.16), transparent 60%),
          radial-gradient(600px 260px at 0% 115%, rgba(16,185,129,.12), transparent 55%),
          linear-gradient(180deg,#ffffff 0%,#f7fbff 100%)"></div>
        <div class="absolute top-0 inset-x-0 h-1.5" style="background:linear-gradient(90deg,#2563eb,#0ea5e9,#10b981)" aria-hidden="true"></div>
        <div class="relative flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6">
        <div>
          <div class="flex items-baseline flex-wrap gap-2">
            ${c}
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
        ${E?`<video id="hero-image" src="${u(k)}" ${I?`poster="${u(I)}"`:""} autoplay muted loop playsinline preload="metadata" controls class="w-full h-full object-contain" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"></video>
             <div class="absolute inset-0 flex items-center justify-center pointer-events-none" style="display:${I?"none":"flex"}"><div class="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-lg"><svg class="w-7 h-7 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:`<img id="hero-image" src="${k}" alt="${e.title}" class="w-full h-full object-contain" onerror="this.onerror=null;this.src='${P}'">`}
        <div class="absolute inset-0 flex items-end justify-between p-3 opacity-0 group-hover:opacity-100 transition pointer-events-none">
          <span class="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-black/50 backdrop-blur px-3 py-1.5 rounded-full"><i data-lucide="expand" class="w-3.5 h-3.5"></i> Tap to enlarge</span>
        </div>
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${v}
      </div>

      ${Ra(e)}

      ${He(e)}

      ${Pe()}

      <div id="listing-details">
        ${qe(e,A,e.features,e.highlights,H,a?ya(e):r?wa(e):"")}
      </div>

      ${Y}

      ${a?Re(e):r?ka(e):""}

      <div id="recommendations-section" class="hidden">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">You May Also Like</h3>
        <div id="recommendations-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>

      ${Ne()}
    </div>
  `;const Q=document.getElementById("hero-image"),ee=document.getElementById("hero-wrap");if(Q&&Q.tagName==="VIDEO"&&!I&&da(Q,k),ee){const y=()=>Fa(e,f);ee.addEventListener("click",w=>{const _=document.getElementById("hero-image");if(_&&_.tagName==="VIDEO"){const C=_.getBoundingClientRect();if(C.width>0&&w.clientX>=C.left&&w.clientX<=C.right&&w.clientY>=C.top&&w.clientY<=C.bottom){if(_.paused&&_.readyState>=2){_.play().catch(()=>{});return}return _.paused,void 0}}y()}),ee.addEventListener("keydown",w=>{(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),y())})}t.querySelectorAll(".gallery-thumb").forEach(y=>{y.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(S=>S.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(S=>S.classList.add("border-gray-200")),y.classList.add("active","border-blue-500"),y.classList.remove("border-gray-200");const w=y.dataset.img,_=z(w),C=document.getElementById("hero-wrap");if(!C)return;const V=C.querySelector(".hero-video-overlay");V&&V.remove();const B=document.getElementById("hero-image");if(_)if(B&&B.tagName==="VIDEO")B.src=w;else{const S=document.createElement("video");S.id="hero-image",S.src=w,S.muted=!0,S.loop=!0,S.autoplay=!0,S.preload="metadata",S.playsInline=!0,S.controls=!0,I&&(S.poster=I),S.className="w-full h-full object-contain",C.insertBefore(S,C.firstChild),B&&B.remove&&B.remove();const q=document.createElement("div");q.className="hero-video-overlay absolute inset-0 flex items-center justify-center pointer-events-none",q.innerHTML='<div class="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-lg"><svg class="w-7 h-7 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>',C.insertBefore(q,C.firstChild?.nextSibling)}else if(B&&B.tagName==="IMG")B.src=w;else{const S=document.createElement("img");S.id="hero-image",S.src=w,S.alt=e.title,S.className="w-full h-full object-contain",S.onerror=function(){this.onerror=null,this.src=P},C.insertBefore(S,C.firstChild),B&&B.remove&&B.remove()}})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await G()?window.location.href=`/checkout.html?id=${e.property_id}`:(fe(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Ie(e)});const se=document.getElementById("request-viewing-btn");se&&se.addEventListener("click",()=>ft(e,"viewing"));const ie=document.getElementById("request-info-btn");ie&&ie.addEventListener("click",()=>ft(e,"info"));const ge=document.getElementById("view-details-btn");ge&&ge.addEventListener("click",()=>{const y=document.getElementById("listing-details");y&&y.scrollIntoView({behavior:"smooth",block:"start"})});const ne=document.getElementById("add-cart-btn");ne&&ne.addEventListener("click",()=>{Jt(e.property_id,1),ne.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Added to Cart',window.lucide&&lucide.createIcons(),setTimeout(()=>{ne.innerHTML='<i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart',window.lucide&&lucide.createIcons()},2e3)}),Ua(e),Me(document.getElementById("agent-buttons-block"),()=>e),Fe(e),he(e),Ja(e),De(e),je(),window.lucide&&lucide.createIcons(),e.property_id,e.title,parseFloat(e.price),e.currency;const R=document.getElementById("listing-map");if(R&&window.L){const y=parseFloat(e.latitude)||null,w=parseFloat(e.longitude)||null,_=ga(e),C=_||e.title,V=_?"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(_):"",B=(q,xe,Oe)=>{const ve=L.map(R).setView([q,xe],Oe);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(ve),L.marker([q,xe]).addTo(ve).bindPopup(`<strong>${u(e.title)}</strong><br>${u(C)}`).openPopup()},S=()=>{R.innerHTML=`<div class="w-full h-full flex flex-col items-center justify-center gap-2 bg-gray-50 text-center p-4">
        <i data-lucide="map-pin" class="w-6 h-6 text-gray-400"></i>
        <p class="text-xs text-gray-500">Exact map position not available for this location.</p>
        <a href="${V}" target="_blank" rel="noopener" class="text-xs font-bold text-blue-600 hover:underline">Open location in Google Maps</a>
      </div>`,window.lucide&&lucide.createIcons()};y&&w?B(y,w,13):_?fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(_)).then(q=>q.json()).then(q=>{q&&q[0]?B(parseFloat(q[0].lat),parseFloat(q[0].lon),12):S()}).catch(S):S()}}function Fa(e,t){const a=(Array.isArray(t)&&t.length?t:[e.images?.[0]||P]).filter(Boolean);if(!a.length)return;let r=0;const o=document.createElement("div");o.id="gallery-lightbox",o.className="fixed inset-0 z-[500] bg-black/95 flex flex-col",o.innerHTML=`
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
  `,document.body.appendChild(o),document.body.style.overflow="hidden";const n=o.querySelector("#lb-media-container"),i=o.querySelector("#lb-count"),c=o.querySelector("#lb-thumbs");let s=null;const l=()=>{n.classList.add("lb-fade"),setTimeout(()=>{const g=a[r];if(z(g))n.innerHTML=`<video src="${u(g)}" controls playsinline preload="auto" class="lb-media max-w-full max-h-[70vh] object-contain rounded-lg"></video>`;else{const m=document.createElement("img");m.src=g,m.alt="Gallery",m.draggable=!1,m.className="lb-media max-w-full max-h-[70vh] object-contain",m.onerror=function(){this.onerror=null,this.src=P},n.innerHTML="",n.appendChild(m)}n.classList.remove("lb-fade"),i.textContent=`${r+1} / ${a.length}`,c.innerHTML=a.map((m,k)=>{const I=z(m)?'<div class="w-full h-full flex items-center justify-center bg-gray-800"><svg class="w-3 h-3 text-white ml-px" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>':`<img src="${u(m)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`;return`<button type="button" data-i="${k}" class="relative w-12 h-9 rounded-lg overflow-hidden border-2 ${k===r?"border-blue-500":"border-transparent"}" aria-label="Item ${k+1}">${I}</button>`}).join(""),c.querySelectorAll("[data-i]").forEach(m=>m.addEventListener("click",()=>{r=parseInt(m.dataset.i,10),l()}))},90)},d=()=>{r=(r-1+a.length)%a.length,l()},b=()=>{r=(r+1)%a.length,l()},h=()=>{o.remove(),document.body.style.overflow="",document.removeEventListener("keydown",f)},f=g=>{g.key==="Escape"?h():g.key==="ArrowLeft"?d():g.key==="ArrowRight"&&b()};o.querySelector("#lb-close").addEventListener("click",h),o.querySelector("#lb-prev").addEventListener("click",d),o.querySelector("#lb-next").addEventListener("click",b);const x=o.querySelector("#lb-viewport");x.addEventListener("touchstart",g=>{s=g.touches[0].clientX},{passive:!0}),x.addEventListener("touchend",g=>{if(s==null)return;const m=g.changedTouches[0].clientX-s;Math.abs(m)>40&&(m<0?b():d()),s=null},{passive:!0}),x.addEventListener("click",g=>{g.target===x&&h()}),document.addEventListener("keydown",f),l()}function ft(e,t){const a=t==="viewing",r=e.property_id||e.id||"",o=document.createElement("div");o.id="property-request-modal",o.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-0 sm:p-4",o.innerHTML=`
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
  `,document.body.appendChild(o),document.body.style.overflow="hidden",G().then(i=>{if(i){const c=o.querySelector("#prq-name"),s=o.querySelector("#prq-email"),l=i.user_metadata||{};l?.full_name&&c&&!c.value&&(c.value=l.full_name),i.email&&s&&!s.value&&(s.value=i.email)}});const n=()=>{o.remove(),document.body.style.overflow=""};o.querySelectorAll("[data-req-close]").forEach(i=>i.addEventListener("click",n)),o.addEventListener("submit",async i=>{i.preventDefault();const c=o.querySelector("#prq-submit"),s=o.querySelector("#prq-status"),l=o.querySelector("#prq-name").value.trim(),d=o.querySelector("#prq-email").value.trim(),b=o.querySelector("#prq-phone")?.value.trim()||"",h=o.querySelector("#prq-date")?.value||"",f=o.querySelector("#prq-message").value.trim();c.disabled=!0,c.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i> Sending...',window.lucide&&lucide.createIcons();try{let x=null;try{x=(await M.auth.getUser()).data?.user?.id||null}catch{}const g=a?"Request Viewing":"Request More Information",m=[r&&`Property: ${r}`,b&&`Phone: ${b}`,h&&`Preferred date: ${h}`,f].filter(Boolean).join(" | "),{error:k}=await M.from("site_feedback").insert({user_id:x,name:l,email:d,rating:5,feedback:`${g} (${e.title}): ${m}`,is_approved:!1});if(k)throw new Error(k.message);try{await fetch("https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/send-auth-email",{method:"POST",headers:{Authorization:"Bearer sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa","Content-Type":"application/json"},body:JSON.stringify({type:"contact_form",name:l,email:d,subject:`${g} — ${e.title}`,message:m})})}catch{}s.className="text-center text-sm py-3 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200",s.textContent=a?"Viewing request sent! We'll confirm your appointment within 24 hours.":"Request sent! We'll get back to you within 24 hours.",s.classList.remove("hidden"),setTimeout(n,1800)}catch{s.className="text-center text-sm py-3 rounded-xl bg-red-50 text-red-600 border border-red-200",s.textContent="Failed to send. Please email support@weverseonlineshop.com directly.",s.classList.remove("hidden"),c.disabled=!1,c.innerHTML=a?"Request Viewing":"Send Request",window.lucide&&lucide.createIcons()}})}let U=0,ht=!1;function Oa(){if(ht)return;ht=!0;const e=document.createElement("style");e.textContent="@keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}",document.head.appendChild(e)}function Xe(e,t){if(!e)return;Oa(),e.innerHTML=`<i data-lucide="heart" class="w-5 h-5 ${t?"fill-red-500 text-red-500":""}"></i>`,e.classList.toggle("bg-red-50",t),e.classList.toggle("border",t),e.classList.toggle("border-red-200",t);const a=e.querySelector("span");a&&(a.textContent=t?"Saved to Wishlist":"Add to Wishlist"),window.lucide&&lucide.createIcons();const r=e.querySelector("i");r&&(r.style.animation="none",r.offsetWidth,r.style.animation="kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)",setTimeout(()=>{r&&(r.style.animation="")},550))}async function Ua(e){const t=document.getElementById("wishlist-btn");if(!t)return;const a=await G();if(!a){t.addEventListener("click",()=>{fe(window.location.pathname+window.location.search),window.location.href=`/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`});return}const{data:r,error:o}=await M.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(o){console.error("Wishlist check failed:",o.message);return}r&&Xe(t,!0),t.addEventListener("click",async()=>{const{data:n,error:i}=await M.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(i){console.error("Wishlist toggle failed:",i.message);return}if(n){const{error:c}=await M.from("wishlist").delete().eq("id",n.id);if(c){console.error("Wishlist delete failed:",c.message);return}Xe(t,!1)}else{const{error:c}=await M.from("wishlist").insert({user_id:a.id,listing_id:e.id});if(c){console.error("Wishlist insert failed:",c.message);return}Xe(t,!0)}})}async function Fe(e){const t=document.getElementById("review-form");if(!t)return;const a=await G(),r=e.property_id||e.id||"",o=document.getElementById("review-photo-row");o&&(a?o.classList.remove("hidden"):o.classList.add("hidden"));const n=document.getElementById("review-name");if(n){let h="";try{h=localStorage.getItem("kco_review_name")||""}catch{}n.value=h}document.querySelectorAll(".star-btn").forEach(h=>{h.addEventListener("click",()=>{U=parseInt(h.dataset.rating,10),document.querySelectorAll(".star-btn").forEach((f,x)=>{const g=f.querySelector("i, svg");g&&(x<U?(g.classList.add("fill-amber-400","text-amber-400"),g.classList.remove("text-gray-300")):(g.classList.remove("fill-amber-400","text-amber-400"),g.classList.add("text-gray-300")))})})});const i=document.getElementById("review-photo-input"),c=document.getElementById("review-photo-preview");let s=null;i&&i.addEventListener("change",()=>{if(s=i.files&&i.files[0],!!c&&(c.innerHTML="",s)){const h=URL.createObjectURL(s);c.innerHTML=`<span class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg px-2.5 py-1"><img src="${h}" alt="" class="w-5 h-5 rounded object-cover">${u(s.name)}</span>`}});const l=document.getElementById("review-submit-msg"),d=document.getElementById("review-error-msg"),b=h=>{if(d)if(h){d.classList.remove("hidden");const f=d.querySelector("span");f&&(f.textContent=h)}else d.classList.add("hidden")};t.addEventListener("submit",async h=>{h.preventDefault(),b("");const f=document.getElementById("review-text").value.trim();if(!U){alert("Please select a rating.");return}if(!f){alert("Please write a review.");return}const x=t.querySelector('button[type="submit"]'),g=x.innerHTML;x.disabled=!0,x.innerHTML='<span class="inline-block animate-spin">⏳</span> Submitting…';const m=(n?n.value:"").trim();if(m)try{localStorage.setItem("kco_review_name",m)}catch{}let k=!1;if(a){let E=null;if(s){const v=(s.name.split(".").pop()||"jpg").toLowerCase().replace(/[^a-z0-9]/g,"")||"jpg",H=`${a.id}/${Date.now()}_${String(Math.random()).slice(2)}.${v}`,{error:A}=await M.storage.from("review-photos").upload(H,s,{contentType:s.type||"image/jpeg",cacheControl:"3600",upsert:!1});if(A){x.disabled=!1,x.innerHTML=g,b("Could not upload photo: "+A.message);return}const{data:Y}=M.storage.from("review-photos").getPublicUrl(H);E=Y?.publicUrl||null}const{error:I}=await M.from("product_reviews").insert({listing_id:e.id||null,property_id:r,user_id:a.id,rating:U,comment:f,review_photo:E,is_approved:!0});I?b("Could not save your review: "+(I.message||"unknown error")):k=!0}else{try{const{error:E}=await M.from("product_reviews").insert({listing_id:e.id||null,property_id:r,rating:U,comment:f,author_name:m||null,is_approved:!0});E||(k=!0,la(r,{rating:U,text:f,name:m}))}catch{}k||(k=!!na(r,{rating:U,text:f,name:m})),k||b("Could not save your review right now — please try again.")}if(!k){x.disabled=!1,x.innerHTML=g;return}x.disabled=!1,x.innerHTML=g,document.getElementById("review-text").value="",n&&(n.value=m),U=0,s=null,i&&(i.value=""),c&&(c.innerHTML=""),document.querySelectorAll(".star-btn").forEach(E=>{const I=E.querySelector("i, svg");I&&(I.classList.remove("fill-amber-400","text-amber-400"),I.classList.add("text-gray-300"))}),l&&(l.classList.remove("hidden"),setTimeout(()=>{l&&l.classList.add("hidden")},4e3)),he(e)})}async function he(e){Mt();const t=document.getElementById("reviews-list"),a=document.getElementById("reviews-summary"),r=document.getElementById("reviews-breakdown");if(!t)return;const o=ra(e),n={5:o.breakdown[5]||0,4:o.breakdown[4]||0,3:o.breakdown[3]||0,2:o.breakdown[2]||0,1:o.breakdown[1]||0};let i=Math.max(Number(o.total)||0,o.reviews.length);const c=[],s=e.property_id||e.id||"";if(s){const{data:m,error:k}=await M.from("product_reviews").select("*, profiles(full_name)").eq("property_id",s).eq("is_approved",!0).order("created_at",{ascending:!1});if(!k&&m)for(const E of m){c.push({...E,name:E.author_name||E.profiles?.full_name||"Anonymous",verified:E.is_verified_purchase});const I=Math.min(5,Math.max(1,Math.round(Number(E.rating)||0)));n[I]++,i++}}const l=ia(s).filter(m=>!c.some(k=>Math.round(Number(k.rating))===Math.round(Number(m.rating))&&String(k.comment||"").trim()===String(m.text||"").trim()));for(const m of l){const k=Math.min(5,Math.max(1,Math.round(Number(m.rating)||0)));n[k]++,i++}let d=0;for(let m=5;m>=1;m--)d+=m*n[m];const h=(i?d/i:0)||Number(e.rating)||0,f=i,x=`
    <div class="flex flex-wrap items-center gap-x-6 gap-y-4">
      <div class="flex items-center gap-4 shrink-0">
        <div class="text-5xl sm:text-6xl font-black leading-none text-gray-900 tracking-tight">${h>0?h.toFixed(1):"New"}</div>
        <div class="shrink-0">
          <div class="flex gap-1">${St(h,"w-5 h-5 sm:w-6 sm:h-6")}</div>
          <div class="text-[13px] sm:text-sm font-bold text-gray-500 mt-1.5 tracking-wide">Customer Reviews</div>
        </div>
      </div>
      <div class="hidden md:block w-px h-12 bg-gray-200"></div>
      <div class="flex flex-wrap items-center gap-2">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Listing</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1.5 rounded-full"><i data-lucide="truck" class="w-3.5 h-3.5"></i> Fast Worldwide Delivery</span>
      </div>
    </div>`;a&&(a.innerHTML=x),r&&(r.innerHTML=Ca(e,n,f));const g=[...l,...c,...o.reviews];if(!g.length){t.innerHTML='<p class="text-gray-400 text-sm py-2">No reviews yet. Be the first to review this product!</p>',window.lucide&&lucide.createIcons();return}K=g.map(m=>(m._local?m._key="local-"+m.id:m.id?m._key="db-"+m.id:m._key="seed-"+$t(String(s)+"||"+(m.date||"")+"||"+(m.text||"")),m)),me=s;try{ue=localStorage.getItem("kco_reply_name")||""}catch{}if(s)try{N=await kt(s)}catch{N={likes:new Map,liked:new Set,comments:new Map}}else N={likes:new Map,liked:new Set,comments:new Map};W=null,de=!1,Ga(t),J()}async function Mt(){const e=document.querySelector('[data-bg-slot="reviews"]');if(e)try{const t=await Xt();e.innerHTML=Zt(t.reviews_bg_image,t.reviews_bg_video)}catch{}}document.addEventListener("promo-backgrounds-updated",()=>{try{Mt()}catch{}});function J(){const e=document.getElementById("reviews-list");if(!e||!K.length)return;const t=de?K:K.slice(0,3);if(e.innerHTML=t.map(Ma).join(""),window.lucide&&lucide.createIcons(),de)Ka(e,()=>{de=!1,J()});else if(K.length>t.length){const a=document.createElement("div");a.className="mt-4 flex justify-center",a.innerHTML=`
      <button type="button" class="view-all-reviews-btn btn-press inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition shadow-sm shadow-blue-500/20">
        View All Customer Reviews
        <i data-lucide="chevron-down" class="w-4 h-4"></i>
      </button>`,e.appendChild(a),window.lucide&&lucide.createIcons(),a.querySelector(".view-all-reviews-btn").addEventListener("click",()=>{de=!0,J()})}}async function za(){if(me)try{N=await kt(me)}catch{N={likes:new Map,liked:new Set,comments:new Map}}}function Wa(){if(!W)return;const e=document.querySelector(".review-reply-box textarea.review-reply-body");e&&setTimeout(()=>{try{e.focus()}catch{}},60)}function Ga(e){!e||e.dataset.riBound==="1"||(e.dataset.riBound="1",e.addEventListener("click",async t=>{const a=t.target.closest("[data-open-reviewer]");if(a){t.preventDefault();const c=a.dataset.openReviewer,s=K.find(l=>l._key===c);s&&Ya(s);return}const r=t.target.closest(".review-like-btn");if(r){t.preventDefault();const c=r.dataset.key;if(!c)return;let l=!N.liked.has(c);try{const d=await oa(me,c);d&&typeof d.liked=="boolean"&&(l=d.liked)}catch{}l?N.liked.add(c):N.liked.delete(c),N.likes.set(c,Math.max(0,(N.likes.get(c)||0)+(l?1:-1))),J();return}const o=t.target.closest(".review-reply-toggle");if(o){t.preventDefault(),W=W===o.dataset.key?null:o.dataset.key,J(),Wa();return}if(t.target.closest(".review-reply-cancel")){t.preventDefault(),W=null,J();return}const i=t.target.closest(".review-reply-post");if(i){t.preventDefault();const c=t.target.closest(".review-reply-box");if(!c)return;const s=c.querySelector(".review-reply-name"),l=c.querySelector(".review-reply-body"),d=(s&&s.value||"").trim(),b=(l&&l.value||"").trim();if(!b){l&&l.focus();return}ue=d||ue;try{await sa(me,i.dataset.key,d||"Guest",b)}catch{}try{localStorage.setItem("kco_reply_name",ue)}catch{}W=null,await za(),J()}}))}function Ya(e){const t=e.author_name||e.name||e.profiles?.full_name||"Anonymous",a=u(t.trim().charAt(0).toUpperCase()||"A"),r=e.location||e.profiles?.country||"",o=e.handle||"",n=e.date||e.created_at||"",i=K.filter(f=>(f.author_name||f.name||f.profiles?.full_name||"")===t),c=i.length||1,s=c>0?i.reduce((f,x)=>f+(Number(x.rating)||0),0)/i.length:Number(e.rating)||0,l=i.reduce((f,x)=>{const g=x._key||"";return f+(x.likes||0)+(g&&N.likes.get(g)||0)},0),d=i.slice(0,4).map(f=>`
      <div class="rounded-xl border border-gray-100 bg-gray-50/70 p-3">
        <div class="flex items-center gap-1.5 mb-1">${[1,2,3,4,5].map(g=>`<i data-lucide="star" class="w-3 h-3 ${g<=(Number(f.rating)||0)?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}<span class="text-[11px] text-gray-400 ml-1">${Le(f.date||f.created_at)}</span></div>
        <p class="text-[13px] text-gray-700 leading-relaxed">${u(f.text||f.comment||"")}</p>
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
            ${n?`<div class="flex items-center gap-1 text-xs text-gray-400 mt-0.5"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>Reviewed ${Le(n)}</div>`:""}
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
            <div class="text-lg font-black text-gray-900">${s?Number(s).toFixed(1):"—"}</div>
            <div class="flex justify-center gap-0.5 mt-0.5">${[1,2,3,4,5].map(f=>`<i data-lucide="star" class="w-3 h-3 ${f<=Math.round(s)?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}</div>
            <div class="text-[11px] text-gray-400 mt-1">Avg rating</div>
          </div>
          <div class="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
            <div class="text-lg font-black text-gray-900">${c}</div>
            <div class="text-[11px] text-gray-400 mt-1">Reviews</div>
          </div>
          <div class="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
            <div class="text-lg font-black text-gray-900">${l}</div>
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
  `,document.body.appendChild(b),document.body.style.overflow="hidden",window.lucide&&lucide.createIcons();const h=()=>{b.remove(),document.body.style.overflow=""};b.querySelectorAll("[data-rp-close]").forEach(f=>f.addEventListener("click",h)),b.addEventListener("click",f=>{f.target===b&&h()})}function Ka(e,t){if(!e)return;const a=document.getElementById("reviews-back-top");a&&a.remove();const r=document.createElement("button");r.type="button",r.id="reviews-back-top",r.setAttribute("aria-label","Back to product page"),r.className="btn-press fixed z-[90] bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white font-bold pl-3 pr-5 py-3 rounded-full text-xs shadow-xl shadow-slate-950/50 border border-white/10 backdrop-blur transition active:scale-95",r.innerHTML=`
    <span class="shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"><i data-lucide="chevron-up" class="w-4 h-4"></i></span>
    Back to product page`,document.body.appendChild(r),r.addEventListener("click",()=>{r.remove(),typeof t=="function"&&t();const o=document.getElementById("reviews-section");o&&o.scrollIntoView({behavior:"smooth",block:"start"})}),window.lucide&&lucide.createIcons()}async function Ja(e){const t=document.getElementById("recommendations-section"),a=document.getElementById("recommendations-grid");if(!t||!a||!e.id)return;const{data:r,error:o}=await M.from("product_recommendations").select("recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)").eq("listing_id",e.id).order("score",{ascending:!1}).limit(4);if(o){console.error("Recommendations load failed:",o.message),t.classList.add("hidden");return}let n=(r||[]).map(i=>i.showroom_listings).filter(Boolean);if(n.length<4){const{data:i}=await M.from("showroom_listings").select("property_id, title, price, currency, images, listing_type").eq("category",e.category).neq("id",e.id).eq("is_active",!0).order("rating",{ascending:!1}).limit(4-n.length);n=[...n,...i||[]]}if(n.length===0){t.classList.add("hidden");return}t.classList.remove("hidden"),a.innerHTML=n.map(i=>{const c=i.images&&i.images[0]||"/fallback.svg",s=typeof i.price=="number"?i.price:parseFloat(i.price||0),l=i.currency||"USD";return`<a href="/product/${i.property_id}" class="block bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition group">
      <div class="aspect-square overflow-hidden bg-gray-100"><img src="${u(c)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-gray-900 font-bold truncate">${u(i.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${l} ${s.toLocaleString()}</p></div>
    </a>`}).join("")}function u(e){return String(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Xa(){const e=Aa();if(!e){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}const t=()=>{document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>'},a=()=>it(e)||nt(e)||lt(e)||Wt(e)||bt(e)||Rt(e)||Dt(),r=l=>{if(Tt(l),document.title=`${l.title} | Weverse Online Shop`,Kt(l),l===it(e))qa(l);else if(l===nt(e))ja(l);else if(l===lt(e))Ta(l);else{Va(l);try{Ve(l)}catch{}}},n=document.getElementById("details-content")?.querySelector("[data-ssr-product]");if(n&&n.getAttribute("data-ssr-product")===e){Ue(e).then(l=>{if(l&&l.property_id===e)try{r(l)}catch{}}).catch(()=>{});return}const i=a();if(i){r(i),Ue(e).then(l=>{st().then(()=>{if(Ft(e)){t();return}if(l&&l.property_id===e)try{r(l)}catch{}})});return}const c=await Ue(e);if(c){r(c);return}await Ba();const s=bt(e);if(s){r(s);return}await st();{t();return}}const yt=document.getElementById("details-content"),Za=yt?yt.innerHTML:"";let gt=!1;function Ct(e){if(e)try{console.error("[details] init failed:",e&&(e.stack||e.message||e))}catch{}if(!gt){gt=!0;try{const t=document.getElementById("details-content");if(!t||t.querySelector("[data-ssr-product]")||t.innerHTML!==Za||t.querySelector(".fade-in, #reviews-section"))return;t.innerHTML='<div class="text-center py-20 text-gray-500">We couldn’t load this listing right now. Please check your connection and try again.</div>'}catch{}}}window.setTimeout(Ct,12e3);Xa().catch(Ct);
