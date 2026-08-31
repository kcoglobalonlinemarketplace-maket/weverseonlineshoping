import"./modulepreload-polyfill-B5Qt9EMX.js";import{l as ze,f as Lt,c as It,_ as Et,a as ge,b as We,g as Mt,S as Ct}from"./showroom-data-Twtp3Cz-.js";import{a as Bt,b as qt}from"./catalog-IZRZdLPY.js";import{loadHiddenCatalogIds as Ge,isCatalogListingHidden as At}from"./catalog-hidden-store-D-NiB69S.js";import{P as st,g as Ye,b as Ke,f as Tt,T as jt,M as Rt}from"./motorhome-data-CupbOvk0.js";import{s as Ht,a as ve,o as xe,w as we,b as Pt,r as Nt}from"./showroom-cards-4eStTdbr.js";import{getCurrentUser as F,setRedirectAfterAuth as le}from"./auth-DlKVuhCK.js";import{supabase as S}from"./supabase-client-nvpjTmO6.js";import{l as Dt,b as Vt}from"./promo-backgrounds-s1OvnE5F.js";import"./app-promo-banner-CafM14XI.js";/* empty css                                       */import"./categories-BEuiwWw5.js";import"./site-content-C2JSbfu8.js";import"./promo-pool-B4VHSULD.js";const it=[];function Je(e){return it.find(t=>t.property_id===e)||null}const lt=[];function Ft(e){return lt.find(t=>t.property_id===e)||null}const Ot=[];function be(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return t>>>0}function Ut(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}const Ae=["James","Emma","Liam","Olivia","Noah","Ava","Ethan","Sophia","Lucas","Mia","Daniel","Isabella","Matthew","Charlotte","Samuel","Amelia","Gabriel","Harper","Nathan","Evelyn","Caleb","Abigail","Adrian","Ella","Owen","Grace","Leo","Chloe","Julian","Nora","Mason","Aria","Elijah","Layla","Isaac","Zoe","Hunter","Scarlett","Christian","Lily","Aaron","Hannah","Dylan","Savannah","Andrew","Ruby","David","Elena","Ryan","Nina","Marcus","Priya","Kwame","Fatima","Andre","Yuki","Tomas","Ingrid","Mateo","Sofia","Omar","Zara","Felix","Amara","Jonas","Leila","Victor","Mila","Diego","Iris","Hugo","Camila","Adam","Freya","Oscar","Amina","Peter","Naomi","Elias","Lucia","Ray","Talia","Marco","Sienna","Joshua","Anya","Kofi","Petra"],ye=["Anderson","Baker","Carter","Diaz","Evans","Foster","Garcia","Harris","Ingram","Johnson","Kelly","Lewis","Miller","Nelson","Ortiz","Parker","Quinn","Reed","Sanders","Turner","Underwood","Vaughn","Walker","Young","Zimmerman","Brooks","Coleman","Dunn","Fisher","Grant","Hayes","Jordan","Knight","Lopez","Morgan","Nguyen","Okafor","Peterson","Romano","Silva","Thompson","Umeh","Volkov","Wang","Xu","Yates","Zhou","Bennett","Chukwu","Doyle","Eze","Ferreira","Gonzalez","Hansen","Ivanov","Jansen","Kumar","Larsen","Moreau","Novak","Osei","Patel","Quintero","Rossi","Schmidt","Tavares","Ueda","Vasquez","Weber","Xavier","Yamamoto","Ziegler","Adeyemi","Barlow","Costa","Diop","Eriksen","Fontaine","Gomez","Holmes","Ikram","Juma","Karlsson","Lawson","Mensah","Nilsson"],Ze=[{city:"Austin",country:"United States"},{city:"New York",country:"United States"},{city:"Seattle",country:"United States"},{city:"Los Angeles",country:"United States"},{city:"Chicago",country:"United States"},{city:"Boston",country:"United States"},{city:"San Diego",country:"United States"},{city:"Denver",country:"United States"},{city:"Miami",country:"United States"},{city:"Portland",country:"United States"},{city:"Toronto",country:"Canada"},{city:"Vancouver",country:"Canada"},{city:"Montreal",country:"Canada"},{city:"Calgary",country:"Canada"},{city:"Ottawa",country:"Canada"},{city:"London",country:"United Kingdom"},{city:"Manchester",country:"United Kingdom"},{city:"Birmingham",country:"United Kingdom"},{city:"Edinburgh",country:"United Kingdom"},{city:"Glasgow",country:"United Kingdom"},{city:"Bristol",country:"United Kingdom"},{city:"Liverpool",country:"United Kingdom"},{city:"Dublin",country:"Ireland"},{city:"Cork",country:"Ireland"},{city:"Paris",country:"France"},{city:"Lyon",country:"France"},{city:"Marseille",country:"France"},{city:"Berlin",country:"Germany"},{city:"Munich",country:"Germany"},{city:"Hamburg",country:"Germany"},{city:"Frankfurt",country:"Germany"},{city:"Amsterdam",country:"Netherlands"},{city:"Rotterdam",country:"Netherlands"},{city:"Brussels",country:"Belgium"},{city:"Antwerp",country:"Belgium"},{city:"Zurich",country:"Switzerland"},{city:"Geneva",country:"Switzerland"},{city:"Vienna",country:"Austria"},{city:"Rome",country:"Italy"},{city:"Milan",country:"Italy"},{city:"Florence",country:"Italy"},{city:"Madrid",country:"Spain"},{city:"Barcelona",country:"Spain"},{city:"Valencia",country:"Spain"},{city:"Lisbon",country:"Portugal"},{city:"Porto",country:"Portugal"},{city:"Stockholm",country:"Sweden"},{city:"Gothenburg",country:"Sweden"},{city:"Oslo",country:"Norway"},{city:"Copenhagen",country:"Denmark"},{city:"Helsinki",country:"Finland"},{city:"Reykjavik",country:"Iceland"},{city:"Warsaw",country:"Poland"},{city:"Krakow",country:"Poland"},{city:"Prague",country:"Czech Republic"},{city:"Athens",country:"Greece"},{city:"Sydney",country:"Australia"},{city:"Melbourne",country:"Australia"},{city:"Brisbane",country:"Australia"},{city:"Perth",country:"Australia"},{city:"Adelaide",country:"Australia"},{city:"Auckland",country:"New Zealand"},{city:"Wellington",country:"New Zealand"},{city:"Christchurch",country:"New Zealand"},{city:"Singapore",country:"Singapore"},{city:"Tokyo",country:"Japan"},{city:"Osaka",country:"Japan"},{city:"Kyoto",country:"Japan"},{city:"Seoul",country:"South Korea"},{city:"Busan",country:"South Korea"},{city:"Dubai",country:"United Arab Emirates"},{city:"Abu Dhabi",country:"United Arab Emirates"},{city:"Doha",country:"Qatar"},{city:"Tel Aviv",country:"Israel"},{city:"Taipei",country:"Taiwan"},{city:"Hong Kong",country:"Hong Kong"}],he=["just ordered from this shop and it was so easy fr","first time buying here and honestly impressed ngl","checked out in like 2 minutes, easiest thing ever","was a little skeptical at first but it all worked out","placed my order from my phone, super smooth","i've ordered here a few times and it never lets me down","took a chance on this store and zero regrets","signing up and ordering took no time at all","everything from picking to paying was really simple","first international order and it went perfectly 🙏","lowkey wasn't expecting much but it was great","order went through instantly, no drama","the site is so easy to use, even i managed it lol","been shopping online for years, this one stands out","quick and painless, just how online shopping should be","had a tiny doubt before ordering but it was fine","the whole process felt very professional","just what i needed, no stress, no hassle","my cousin recommended this shop and he was right","ordered without overthinking and it paid off"],P=["shipping was mad fast, arrived way earlier than expected","my package came in perfect condition 🔥","the delivery guy was super nice and careful","got updates the entire time, no guessing","tracking was accurate and it showed up on time","packaging was really solid, nothing was damaged","they answered my question in like 10 minutes","customer service was actually helpful, rare these days","everything arrived exactly as described","the parcel was wrapped so well, impressive","it showed up a day early, which was a nice surprise","payment was secure and confirmation came right away","kept me posted at every single step","dispatching was quick, shipped the same day","the item looked even better in person","my order was handled with so much care","they were super responsive whenever i messaged","the tracking link actually worked the whole way","delivery was on schedule, not a minute late","everything came neatly packed and in one piece","no issues at all, straight to my door","they followed up after delivery which i thought was nice","the whole team was polite and professional","my doubts disappeared once the package arrived","quality was clear as soon as i opened the box","support replied quickly even though it was late","well organized from start to finish","came when they said it would, no surprises","fast dispatch and smooth handling of my order","the notifications kept me calm the whole time lol","everything i ordered was in the box, nothing missing","the courier called before arriving, so professional","shipped in sturdy packaging, survived the trip perfectly","i could track it the whole way, very reassuring","they processed my order in record time","came in perfect shape and very well protected","every update they sent was accurate and clear","exactly the delivery experience you hope for","returns and support were straightforward too","very clean, well managed order, i was impressed"],Te=["100% ordering again fr","would recommend this shop to anyone","already told my friends about it","this is my new go to place now","can't recommend them enough","definitely coming back, no question","so glad i found this store","will 100% be back 💯","no complaints at all honestly","totally worth it, trust me","10/10 experience, easy","this shop is legit, trust","loyal customer for life now","five stars from me, easy","a real hidden gem honestly","can't wait for my next order"],Xe={vehicle:["my vehicle was delivered safe and sound, kept me updated the whole trip","the listing was exact and delivery was arranged super smoothly"],property:["the listing was spot on and they walked me through the whole process","all the paperwork was handled clean, very easy from start to finish"],phone:["the phone matched the photos exactly and shipped out quick","they double checked everything before sending, packaging was solid"],pet:["they handled everything so carefully, i felt reassured the whole way","all the paperwork was sorted out and the process was really easy"],product:["the item was exactly like the photos, arrived in great shape","order was processed fast and the packaging was really solid"]},Qe=["🔥","✨","😍","🙌","💯","😭","❤️","👍","🎯","👌","✅","⚡","📦","🙏"],ct=[{year:2018,w:3},{year:2019,w:7},{year:2020,w:11},{year:2021,w:13},{year:2022,w:15},{year:2023,w:16},{year:2024,w:15},{year:2025,w:12},{year:2026,w:8}],zt=ct.reduce((e,t)=>e+t.w,0);function Wt(e){let t=e()*zt;for(const a of ct){if(t<a.w)return a.year;t-=a.w}return 2024}function je(e,t,a,r){return(e+t*a)%r}function Gt(e,t={}){const a=String(e.property_id||e.id||"");if(!a)return{reviews:[],breakdown:{5:0,4:0,3:0,2:0,1:0},total:0,computedRating:0};const r=be(a),o=187+r%660,n=Math.min(5,Math.max(1,Number(e.rating)||0))||4.5;let l=Math.max(.3,Math.min(.9,n/5)),s=1-l,c=.07,d=.04,h=.03;const b=1/(l+s+c+d+h);l*=b,s*=b,c*=b,d*=b,h*=b;const g=[l,s,c,d,h],x=e.listing_type==="vehicle"?"vehicle":e.listing_type==="property"?"property":e.listing_type==="pet"?"pet":String(e.category||"").toLowerCase().includes("phone")?"phone":"product",f=Xe[x]||Xe.product,m=[],k=Ae.length*ye.length,_=he.length*P.length*P.length*Te.length,I=457,H=811;for(let w=0;w<o;w++){const R=Ut(be(a+"::"+w));let Y=R(),K=5,y=0;for(let me=5;me>=1;me--)if(y+=g[5-me],Y<=y){K=me;break}const $=je(r,w,I,k),U=Ae[Math.floor($/ye.length)%Ae.length],M=ye[$%ye.length],J=`${U} ${M}`;let v=je(r,w,H,_);const B=he[v%he.length];v=Math.floor(v/he.length);const ue=P[v%P.length];v=Math.floor(v/P.length);const qe=P[v%P.length];v=Math.floor(v/P.length);const pe=Te[v%Te.length];let ee=`${B} ${ue}`;w%3===0&&f.length&&(ee+=` ${f[w%f.length]}`),w%2===0&&(ee+=` ${qe}`),ee+=` ${pe}`,w%3===2&&(ee+=` ${Qe[(r+w*13)%Qe.length]}`);const gt=Ze[je(r,w,337,Ze.length)],ft=Date.now(),Ue=Wt(R),vt=Ue===2018?10+Math.floor(R()*3):1+Math.floor(R()*12),xt=1+Math.floor(R()*28),wt=Date.UTC(Ue,vt-1,xt),kt=new Date(Math.min(wt,ft)).toISOString(),$t=`@${U.toLowerCase()}${M.toLowerCase()}`,St=2+be(a+"::likes::"+w)%380,_t=w%7===0?1+be(a+"::rep::"+w)%4:0;m.push({name:J,handle:$t,location:gt.country,date:kt,rating:K,text:ee,likes:St,replies:_t,verified:!1,seeded:!0})}m.sort((w,R)=>w.date<R.date?1:-1);const T={5:0,4:0,3:0,2:0,1:0};let E=0;for(let w=5;w>=1;w--)T[w]=Math.round(o*g[5-w]),E+=T[w];const O=o-E;O!==0&&(T[O>0?5:1]+=O);let G=0;for(let w=5;w>=1;w--)G+=w*T[w];const de=G/o;return{reviews:m,breakdown:T,total:o,computedRating:de}}let te="pending",Z=null;const De=e=>`kco_review_likes_${e}`,Ve=e=>`kco_review_comments_${e}`;function W(e){try{return JSON.parse(localStorage.getItem(e)||"null")}catch{return null}}function ke(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}async function Fe(){try{Z||(Z=await F()||null)}catch{Z=null}if(Z&&Z.id)return"u:"+Z.id;try{let e=localStorage.getItem("kco_anon_id");return e||(e="anon-"+Math.random().toString(36).slice(2)+Date.now().toString(36),localStorage.setItem("kco_anon_id",e)),e}catch{return"anon-"+Math.random().toString(36).slice(2)+Date.now().toString(36)}}async function Oe(){if(te!=="pending")return te;try{const{error:e}=await S.from("review_likes").select("id").limit(1),{error:t}=await S.from("review_comments").select("id").limit(1);te=e||t?"local":"server"}catch{te="local"}return te}async function dt(e){const t=new Map,a=new Set,r=new Map,o=String(e||"");try{if(await Oe()==="server"){const[{data:i},{data:n}]=await Promise.all([S.from("review_likes").select("review_key, liker_id").eq("property_id",o),S.from("review_comments").select("*").eq("property_id",o).order("created_at",{ascending:!0})]),l=await Fe();for(const s of i||[])t.set(s.review_key,(t.get(s.review_key)||0)+1),s.liker_id===l&&a.add(s.review_key);for(const s of n||[]){const c=r.get(s.review_key)||[];c.push({id:s.id,author:s.author,body:s.body,created_at:s.created_at}),r.set(s.review_key,c)}}else{const i=W(De(o))||{},n=await Fe();for(const[s,c]of Object.entries(i)){const d=Array.isArray(c)?c:[];t.set(s,d.length),d.includes(n)&&a.add(s)}const l=W(Ve(o))||{};for(const[s,c]of Object.entries(l))Array.isArray(c)&&r.set(s,c)}}catch{}return{likes:t,liked:a,comments:r}}async function Yt(e,t){const a=String(e||""),r=!1;try{const o=await Fe();if(await Oe()==="server"){const{data:s}=await S.from("review_likes").select("id").eq("review_key",t).eq("liker_id",o).limit(1);if(s&&s.length){const{error:d}=await S.from("review_likes").delete().eq("review_key",t).eq("liker_id",o);return{liked:d?r:!1}}const{error:c}=await S.from("review_likes").insert({property_id:a,review_key:t,liker_id:o});return{liked:!c}}const i=W(De(a))||{},n=Array.isArray(i[t])?i[t]:[],l=n.indexOf(o);return l>=0?n.splice(l,1):n.push(o),i[t]=n,ke(De(a),i),{liked:l<0}}catch{return{liked:r}}}async function Kt(e,t,a,r){const o=String(e||""),i=String(r||"").trim().slice(0,1e3),n=String(a).trim().slice(0,40)||"Guest";if(!i)return null;try{if(await Oe()==="server"){const{data:d,error:h}=await S.from("review_comments").insert({property_id:o,review_key:t,author:n,body:i}).select("id, author, body, created_at").single();if(!h&&d)return d}}catch{}const l={id:"c_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,8),author:n,body:i,created_at:new Date().toISOString()},s=W(Ve(o))||{},c=Array.isArray(s[t])?s[t]:[];return c.push(l),s[t]=c,ke(Ve(o),s),l}const se=e=>`kco_guest_reviews_${e}`;function Jt(e){const t=String(e||""),a=W(se(t));return Array.isArray(a)?a.filter(r=>r&&r.rating>=1&&r.rating<=5&&(r.text||r.comment)).map(r=>({...r,_local:!0,comment:r.comment||r.text,text:r.text||r.comment,name:r.name||"",rating:Math.max(1,Math.min(5,Math.round(Number(r.rating)||0)))})).sort((r,o)=>new Date(o.created_at||0)-new Date(r.created_at||0)):[]}function Zt(e,t){const a=String(e||""),r=Math.max(1,Math.min(5,Math.round(Number(t&&t.rating)||0))),o=String(t&&t.text||"").trim().slice(0,2e3),i=String(t&&t.name||"").trim().slice(0,40);if(!r||!o)return null;const n={id:"gv_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,8),rating:r,text:o,comment:o,name:i,created_at:new Date().toISOString(),_local:!0},l=W(se(a));return Array.isArray(l)?(l.push(n),ke(se(a),l),n):null}function Xt(e,t){const a=String(e||""),r=Math.max(1,Math.min(5,Math.round(Number(t&&t.rating)||0))),o=String(t&&t.text||"").trim(),i=W(se(a));if(!Array.isArray(i))return;const n=i.filter(l=>!(Math.round(Number(l.rating))===r&&String(l.text||"").trim()===o));n.length!==i.length&&ke(se(a),n)}const j="/fallback.svg";let A={likes:new Map,liked:new Set,comments:new Map},V=null,ne="",re=[],oe=!1,ie="";function Qt(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function $e(e){return Array.isArray(e)&&e.length>0?e:[j]}function D(e){return!e||typeof e!="string"||e.startsWith("blob:")||e.startsWith("data:")?!1:/\.(mp4|webm|mov|avi|mkv)(\?|#|$)/i.test(e)}function ea(e,t="w-4 h-4"){const a=Math.round(Number(e)||0);return[1,2,3,4,5].map(r=>`<i data-lucide="star" class="${t} ${r<=a?"fill-amber-400 text-amber-400 drop-shadow-[0_1px_4px_rgba(0,0,0,.25)]":"text-gray-300"}"></i>`).join("")}function Q(e,t,a="blue"){const r={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"};return`
    <div class="flex items-center gap-2.5 mb-4">
      <div class="shrink-0 w-10 h-10 rounded-xl ${r[a]||r.blue} flex items-center justify-center"><i data-lucide="${e}" class="w-5 h-5"></i></div>
      <h3 class="text-lg font-black text-gray-900 tracking-tight">${t}</h3>
    </div>`}function ta(e){return`
    <div class="bg-gray-50 border border-gray-100 rounded-xl p-3.5">
      <div class="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5"><i data-lucide="${e.icon}" class="w-3.5 h-3.5"></i>${e.label}</div>
      <div class="text-gray-900 font-bold text-[15px] leading-snug">${u(e.value)}</div>
    </div>`}function ae(e,t,a,r="blue"){return!a||!a.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${Q(t,e,r)}
      ${ut(a)}
    </div>`}function ut(e){return!e||!e.length?"":`<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">${e.map(ta).join("")}</div>`}function Se(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${Q("list-checks","Features & Amenities","emerald")}
      ${pt(e)}
    </div>`}function pt(e){return!e||!e.length?"":`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
            <span class="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
            <span class="text-[15px] text-gray-800 font-medium">${u(t)}</span>
          </div>`).join("")}
      </div>`}function aa(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${Q("star","Highlights","amber")}
      ${mt(e)}
    </div>`}function mt(e){return!e||!e.length?"":`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-start gap-2.5 bg-amber-50/60 border border-amber-100 rounded-xl px-3.5 py-2.5">
            <i data-lucide="badge-check" class="w-4 h-4 text-amber-500 mt-0.5 shrink-0"></i>
            <span class="text-[15px] text-gray-800 font-medium">${u(t)}</span>
          </div>`).join("")}
      </div>`}function Re(e,t="emerald"){if(!e||!e.length)return"";const a={emerald:"bg-emerald-100 text-emerald-600",amber:"bg-amber-100 text-amber-600",blue:"bg-blue-100 text-blue-600",violet:"bg-violet-100 text-violet-600",rose:"bg-rose-100 text-rose-600"}[t]||"bg-emerald-100 text-emerald-600";return`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
    ${e.map(r=>`
      <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
        <span class="shrink-0 w-6 h-6 rounded-full ${a} flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
        <span class="text-[15px] text-gray-800 font-medium">${u(String(r))}</span>
      </div>`).join("")}
  </div>`}function ra(e){const t=e.floor_plan&&typeof e.floor_plan=="object"?e.floor_plan:{},a=Array.isArray(t.rooms)?t.rooms:[];if(!(t.image||t.levels||t.total_area||a.length))return"";const o=a.length?`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-3">
      ${a.map(n=>{const l=typeof n=="string"?n:n.name||"Room",s=typeof n=="string"?"":n.dimensions||"";return`<div class="bg-gray-50 border border-gray-100 rounded-xl p-3">
          <p class="text-[15px] font-bold text-gray-900">${u(String(l))}</p>
          ${s?`<p class="text-xs text-gray-500 mt-0.5">${u(String(s))}</p>`:""}
        </div>`}).join("")}
    </div>`:"",i=[t.levels?`Levels: ${t.levels}`:"",t.total_area?`Total area: ${t.total_area}`:""].filter(Boolean);return`
    <div class="space-y-3">
      ${t.image?`<img src="${u(String(t.image))}" alt="Floor plan" class="w-full rounded-xl border border-gray-200 bg-gray-50" loading="lazy" onerror="this.style.display='none'">`:""}
      ${i.length?`<div class="flex flex-wrap gap-2">${i.map(n=>`<span class="inline-flex items-center gap-1 text-xs font-bold text-gray-700 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-full">${u(String(n))}</span>`).join("")}</div>`:""}
      ${o}
    </div>`}function oa(e){const t=Array.isArray(e.legal_info)?e.legal_info:[],a=e.risk_notes;if(!t.length&&!a)return"";const r={"Seller provided":"bg-amber-50 text-amber-700 border-amber-200",Documented:"bg-blue-50 text-blue-700 border-blue-200","Not verified":"bg-gray-50 text-gray-600 border-gray-200"};return`
    <div class="space-y-2.5">
      ${t.map(i=>{const n=typeof i=="string"?i:i.label||"",l=typeof i=="string"?"":i.value||"",s=typeof i=="string"?"Not verified":i.source||"Not verified",c=r[s]||r["Not verified"],d=`${n}${l?": "+l:""}`;return`<div class="flex items-center justify-between gap-3 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
      <span class="text-[15px] text-gray-800 font-medium">${u(d)}</span>
      <span class="shrink-0 text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full border ${c}">${u(s)}</span>
    </div>`}).join("")||""}
      ${a?`<div class="bg-amber-50/60 border border-amber-200 rounded-xl p-3.5"><p class="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Condition / Risk Notes</p><p class="text-sm text-gray-700 leading-relaxed">${u(String(a))}</p></div>`:""}
      <p class="text-xs text-gray-400 leading-relaxed"><strong class="text-gray-500">Note:</strong> Legal and ownership details are provided by the seller for information only and have not been independently verified by the marketplace. Always confirm with the seller or a qualified professional before purchase.</p>
    </div>`}function na(e){const t=e.nearby_area&&typeof e.nearby_area=="object"?e.nearby_area:{},a=[{icon:"school",label:"Schools",items:t.schools},{icon:"cross",label:"Hospitals & Clinics",items:t.hospitals},{icon:"shopping-cart",label:"Shopping & Markets",items:t.shopping},{icon:"bus",label:"Transportation",items:t.transportation}].filter(o=>Array.isArray(o.items)&&o.items.length),r=Array.isArray(t.distances)?t.distances:[];return!a.length&&!r.length?"":`
    <div class="space-y-3">
      ${a.map(o=>`
        <div>
          <p class="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5"><i data-lucide="${o.icon}" class="w-3.5 h-3.5"></i> ${o.label}</p>
          <div class="flex flex-wrap gap-2">
            ${o.items.map(i=>`<span class="text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-full">${u(String(i))}</span>`).join("")}
          </div>
        </div>`).join("")}
      ${r.length?`<div><p class="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5"><i data-lucide="navigation" class="w-3.5 h-3.5"></i> Distances</p><div class="flex flex-wrap gap-2">${r.map(o=>`<span class="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full">${u(String(o))}</span>`).join("")}</div></div>`:""}
    </div>`}function sa(e){const t=e.verification_status||"Not verified",a={Verified:"bg-emerald-50 text-emerald-700 border-emerald-200","Pending verification":"bg-amber-50 text-amber-700 border-amber-200","Not verified":"bg-gray-50 text-gray-600 border-gray-200"}[t]||"bg-gray-50 text-gray-600 border-gray-200",r=Array.isArray(e.documents)?e.documents:[],o=[{icon:"shield-check",label:"Verification",value:t,badge:a},e.verification_date?{icon:"calendar-check",label:"Verification Date",value:e.verification_date}:null,e.inspection_info?{icon:"clipboard-check",label:"Inspection",value:e.inspection_info}:null].filter(Boolean);return`
    <div class="space-y-3">
      ${o.length?`<div class="space-y-2.5">${o.map(i=>`
        <div class="flex items-center justify-between gap-3 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
          <span class="flex items-center gap-2 text-sm text-gray-800 font-medium"><i data-lucide="${i.icon}" class="w-4 h-4 text-blue-500"></i> ${i.label}</span>
          ${i.badge?`<span class="shrink-0 text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full border ${i.badge}">${u(String(i.value))}</span>`:`<span class="text-sm text-gray-700 font-semibold">${u(String(i.value))}</span>`}
        </div>`).join("")}</div>`:""}
      ${r.length?`<div><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Documents</p><div class="space-y-1.5">${r.map(i=>`<a href="${u(String(i))}" target="_blank" rel="noopener" class="flex items-center gap-2 text-xs font-bold text-blue-600 hover:underline"><i data-lucide="file-text" class="w-3.5 h-3.5"></i> ${u(String(i))}</a>`).join("")}</div></div>`:""}
      <div class="flex flex-wrap gap-2">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full"><i data-lucide="lock" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Payment Protection</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-violet-700 bg-violet-50 border border-violet-200 px-2.5 py-1.5 rounded-full"><i data-lucide="file-check" class="w-3.5 h-3.5"></i> Purchase Agreement</span>
      </div>
      <p class="text-xs text-gray-400 leading-relaxed">Full purchase and booking terms are confirmed with the seller before any payment is completed.</p>
    </div>`}function ia(e){if(e.listing_type!=="property")return"";const t=[],a=Re(e.interior_features,"emerald"),r=Re(e.exterior_features,"blue"),o=Re(e.home_systems,"violet"),i=[a?`<div class="mb-4"><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Interior Features</p>${a}</div>`:"",r?`<div class="mb-4"><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Exterior Features</p>${r}</div>`:"",o?`<div><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Home Systems</p>${o}</div>`:""].filter(Boolean).join("");i&&t.push(q("acc-features","home","Features & Home Systems",i,!1,"emerald"));const n=ra(e);n&&t.push(q("acc-floorplan","layout-dashboard","Floor Plan",n,!1,"violet"));const l=oa(e);l&&t.push(q("acc-legal","scale","Legal & Financial",l,!1,"amber"));const s=na(e);s&&t.push(q("acc-nearby","map-pin","Nearby Area",s,!1,"rose"));const c=sa(e);return c&&t.push(q("acc-trust","shield-check","Verification & Trust",c,!1,"blue")),t.join("")}function p(e,t,a=""){const r=e[t];if(r!=null&&String(r).trim()!=="")return r;const o=e.specifications&&typeof e.specifications=="object"?e.specifications:{};return o[t]!=null?o[t]:a}const la=new Set(["Cars","Cars & Vehicles","Trucks","Buses","Buses & Coaches","Motorhomes","Motorcycles","Marine & Boating","RV & Camper Accessories","Vehicles","Luxury Cars","Commercial Vehicles"]);function fe(e){return e.listing_type==="vehicle"||la.has(e.category)}function ca(e){const t=String(p(e,"wheels_tires")||"");if(!t.trim())return"";t.split(",").map(o=>o.trim()).filter(Boolean);const a=String(t).match(/(?:[0-9]{2,4}\s*(?:\/[0-9]{2,3}\s*)?(?:R|ZR)[0-9]{1,2}|[0-9]{1,2}(?:\.|x|X)[0-9]{1,2}(?:\.|x|X)-?[0-9]+|[0-9]{2,3}\s*(?:\.[0-9]{1,2})?\s*(?:inches|inch|in|"))/),r=a?a[0]:"";return`
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
    </div>`}function da(e){if(!fe(e))return"";const t=[],a=(h,b,g)=>g!=null&&String(g)!==""?`<div class="bg-gray-50 border border-gray-100 rounded-xl p-3.5"><div class="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5"><i data-lucide="${h}" class="w-3.5 h-3.5"></i>${b}</div><div class="text-gray-900 font-bold text-[15px] leading-snug">${u(String(g))}</div></div>`:"",r=(h,b,g)=>g?`
    <div class="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3.5">
      <span class="shrink-0 w-7 h-7 rounded-lg bg-white border border-gray-100 flex items-center justify-center"><i data-lucide="${h}" class="w-4 h-4 text-emerald-600"></i></span>
      <div class="min-w-0"><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">${b}</p><p class="text-sm text-gray-700 leading-relaxed">${u(String(g))}</p></div>
    </div>`:"",o=[a("badge-check","Condition",p(e,"condition")),a("user-round","Previous Owners",p(e,"previous_owners")),a("clipboard-check","Registration",p(e,"registration_status")),a("shield-check","Inspection",p(e,"inspection_status")),a("badge-dollar-sign","Warranty",p(e,"warranty"))].filter(Boolean).join(""),i=[r("scroll-text","Ownership History",p(e,"ownership_history")),r("wrench","Service & Maintenance History",p(e,"service_history")),r("alert-triangle","Accident / Damage History",p(e,"accident_history"))].filter(Boolean).join("");(o||i)&&t.push(q("acc-vh-cond","shield-check","Condition & History",`
      ${o?`<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">${o}</div>`:""}
      ${i}`.trim(),!0,"emerald"));const n=ca(e);n&&t.push(q("acc-vh-wheels","circle-dot","Wheels & Tires",n,!0,"amber"));const l=(h,b,g)=>Array.isArray(h)&&h.length?`
    <div><p class="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5"><i data-lucide="${b}" class="w-3.5 h-3.5"></i> ${g}</p>
    <div class="flex flex-wrap gap-2">${h.map(x=>`<span class="text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-full">${u(String(x))}</span>`).join("")}</div></div>`:"",s=[l(p(e,"safety_features"),"shield","Safety Features"),l(p(e,"driver_assistance"),"radar","Driver Assistance"),l(p(e,"technology"),"cpu","Technology & Infotainment"),l(p(e,"interior"),"armchair","Interior & Comfort")].filter(Boolean).join("");s&&t.push(q("acc-vh-safety","cpu","Safety & Technology",s,!1,"rose"));const c=[a("ruler","Dimensions (L x W x H)",p(e,"dimensions")),a("package","Cargo Capacity",p(e,"cargo_capacity")),a("truck","Towing Capacity",p(e,"towing_capacity")),a("fuel","Fuel Economy",p(e,"fuel_economy")),a("users","Seats",p(e,"seating_capacity")),a("door-open","Doors",p(e,"doors"))].filter(Boolean).join("");c&&t.push(q("acc-vh-dims","ruler","Dimensions & Capacity",`<div class="grid grid-cols-2 sm:grid-cols-3 gap-3">${c}</div>`,!1,"sky"));const d=p(e,"location")||[p(e,"city"),p(e,"state"),p(e,"country")].filter(Boolean).join(", ");if(d){const h="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(d);t.push(q("acc-vh-loc","map-pin","Location & Availability",`
      <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3.5">
        <span class="shrink-0 w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center"><i data-lucide="map-pin" class="w-5 h-5"></i></span>
        <div class="min-w-0"><p class="text-[15px] text-gray-900 font-bold">${u(String(d))}</p>
        <a href="${h}" target="_blank" rel="noopener" class="text-xs font-bold text-blue-600 hover:underline">Open in Google Maps</a></div>
      </div>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <div class="bg-emerald-50 border border-emerald-100 rounded-xl p-3"><p class="text-xs text-gray-500">Availability</p><p class="text-sm font-black text-emerald-700">${u(e.availability_status||(e.stock_quantity>0?"In Stock":"Available"))}</p></div>
        <div class="bg-gray-50 border border-gray-100 rounded-xl p-3"><p class="text-xs text-gray-500">Seller Location</p><p class="text-sm font-black text-gray-900">${u(String(p(e,"location")||"Marketplace"))}</p></div>
      </div>`,!1,"sky"))}return t.join("")}function ua(e){const t=p(e,"seller_name")||p(e,"contact_name"),a=p(e,"seller_phone")||p(e,"contact_phone"),r=p(e,"seller_email")||p(e,"contact_email"),o=p(e,"location"),i=[];return t&&i.push({icon:"user-round",label:"Seller / Agent",value:t}),a&&i.push({icon:"phone",label:"Phone / WhatsApp",value:a,link:"tel:"+a.replace(/[^0-9+]/g,"")}),r&&i.push({icon:"mail",label:"Email",value:r,link:"mailto:"+r}),o&&i.push({icon:"map-pin",label:"Location",value:o}),`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${Q("contact-round","Buyer Information","emerald")}
      <div class="space-y-2.5">
        ${i.map(n=>`
          <div class="flex items-center justify-between gap-3 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
            <span class="flex items-center gap-2 text-sm text-gray-800 font-bold"><i data-lucide="${n.icon}" class="w-4 h-4 text-emerald-600"></i> ${n.label}</span>
            ${n.link?`<a href="${u(n.link)}" class="text-sm text-blue-600 font-bold hover:underline">${u(String(n.value))}</a>`:`<span class="text-sm text-gray-700 font-semibold">${u(String(n.value))}</span>`}
          </div>`).join("")}
        <div class="bg-emerald-50 border border-emerald-100 rounded-xl p-3.5 flex items-start gap-2.5">
          <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600 mt-0.5 shrink-0"></i>
          <p class="text-xs text-gray-600 leading-relaxed">Buy with confidence — secure checkout, payment protection and verified contact details. Questions about this ${e.listing_type==="property"?"property":"vehicle"}? Reach out before purchase, or open a live chat any time.</p>
        </div>
      </div>
    </div>`}function q(e,t,a,r,o=!1,i="blue"){const n={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"},l=n[i]||n.blue;return`
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
    </div>`}window.toggleAccordion=e=>{const t=document.querySelector(`[data-acc-body="${e}"]`),a=document.querySelector(`[data-acc-icon="${e}"]`);!t||!a||(t.classList.toggle("hidden"),a.classList.toggle("rotate-180"))};function pa(){return`
    <div class="space-y-3 text-[15px] text-gray-700 leading-relaxed">
      <p class="flex items-start gap-2.5"><i data-lucide="truck" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Shipping methods.</strong> Standard delivery is <strong>free worldwide</strong> (3–7 business days). Express (2–4 business days, $25) and Priority (1–2 business days, $50) are available at checkout.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Courier partners.</strong> We ship with trusted international couriers — DHL, FedEx, UPS and EMS. Every shipment gets a tracking number.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="clock" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Processing time.</strong> Orders are processed within 1–2 business days after payment confirmation. Bank-transfer orders are processed once the receipt is verified.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="globe" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">International delivery.</strong> We ship to over 200 countries. Customs duties and import taxes may apply and are the buyer's responsibility.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="search-check" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Tracking.</strong> You'll receive a shipping confirmation email with your tracking number. You can also track orders from your account dashboard.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="badge-help" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span>Questions? <a href="/shipping-policy.html" class="text-blue-600 font-bold hover:underline">Read the full Shipping Policy</a>.</span></p>
    </div>`}function ma(){return`
    <div class="space-y-3 text-[15px] text-gray-700 leading-relaxed">
      <p class="flex items-start gap-2.5"><i data-lucide="rotate-ccw" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">14-day easy returns.</strong> Items may be returned within 14 days of delivery. Refund requests must be submitted within 30 days of the order date.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="calendar-x" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Cancellation before shipment.</strong> Cancel before your order ships and a full refund is issued within 5–7 business days.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package-x" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Damaged or defective.</strong> If your item arrives damaged, contact us within 7 days with photos — we arrange a replacement or full refund, including return shipping.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package-search" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Non-delivery.</strong> If your order doesn't arrive within the estimated window plus 14 days, we investigate with the carrier and refund or resend at no cost.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="wallet" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Refund processing.</strong> Approved refunds are processed within 5–7 business days. Card refunds take 5–10 business days to appear, bank transfers 7–14, mobile money 3–5.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="circle-slash" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Non-refundable.</strong> Final-sale items, digital products, and items used or damaged by the customer are not eligible for refunds.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="badge-help" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span>Questions? <a href="/refund-policy.html" class="text-blue-600 font-bold hover:underline">Read the full Return &amp; Refund Policy</a>.</span></p>
    </div>`}function ba(){const e=[{q:"How do I track my order?",a:"Once your order ships you'll get a confirmation email with your tracking number. You can also track it anytime from your account dashboard under Shipping & Delivery."},{q:"Is shipping really free worldwide?",a:"Yes. Standard shipping to any country is free on every order. Express and Priority upgrades are available at checkout if you need it sooner."},{q:"How long does delivery take?",a:"Standard delivery takes 3–7 business days. Express takes 2–4 business days and Priority 1–2 business days. Processing adds 1–2 business days after payment is confirmed."},{q:"How do returns work?",a:"Items can be returned within 14 days of delivery. Refund requests must be submitted within 30 days of the order date — see the Return &amp; Refund Policy section above."}],t=[{q:"Is my payment secure?",a:"Yes. All payments are processed over SSL-encrypted connections through certified payment gateways. Your payment details are never stored on our servers in plain text."},{q:"Can I cancel my order before it ships?",a:"Absolutely. Cancel before shipment and a full refund is issued within 5–7 business days to your original payment method."},{q:"What if my item arrives damaged?",a:"Contact us within 7 days of delivery with photos and a description. We'll arrange a replacement or a full refund — including return shipping costs."},{q:"How do I contact customer support?",a:"Email us at support@weverseonlineshop.com or use the Contact page. Our team reviews every message within 48 hours."},{q:"Do you ship to my country?",a:"We ship to over 200 countries worldwide. Customs duties and import taxes, where applicable, are the buyer's responsibility."},{q:"How do I request a refund?",a:"Email support@weverseonlineshop.com with your order number, the reason, and any supporting documentation. Approved refunds are processed within 5–7 business days."}],a=r=>`
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
    </div>`}function _e(e,t,a,r,o,i=""){const n=e.listing_type==="property",l=`
    <p class="text-[15px] sm:text-base text-gray-700 leading-relaxed">${u(e.description||"")}</p>
    ${o||""}
    ${mt(r)}
    ${pt(a)}`;return`
    ${q("acc-details","file-text",n?"Property Details":fe(e)?"Vehicle Details":"Product Details",l,!0,"blue")}
    ${q("acc-specs","settings-2",n?"Property Specifications":fe(e)?"Vehicle Specifications":"Specifications",ut(t)||'<p class="text-sm text-gray-500">No specifications available for this listing.</p>',!0,"violet")}
    ${i||""}
    ${q("acc-shipping","truck","Shipping Information",pa(),!1,"emerald")}
    ${q("acc-refund","rotate-ccw","Return &amp; Refund Policy",ma(),!1,"rose")}
    ${q("acc-faq","circle-help","Frequently Asked Questions",ba(),!1,"amber")}`}function Le(){const e=document.getElementById("details-content");if(!e)return;e.querySelectorAll("[data-acc]").forEach(a=>{a.dataset.bound||(a.dataset.bound="1",a.addEventListener("click",()=>{const r=a.dataset.acc,o=e.querySelector(`[data-acc-body="${r}"]`),i=e.querySelector(`[data-acc-icon="${r}"]`);!o||!i||(o.classList.toggle("hidden"),i.classList.toggle("rotate-180"),window.lucide&&lucide.createIcons())}))}),e.querySelectorAll(".faq-q").forEach(a=>{a.dataset.bound||(a.dataset.bound="1",a.addEventListener("click",()=>{const r=a.querySelector("i, svg"),o=a.nextElementSibling;o&&(o.classList.toggle("hidden"),r&&r.classList.toggle("rotate-180"))}))});const t=e.querySelector("#faq-show-more");t&&!t.dataset.bound&&(t.dataset.bound="1",t.addEventListener("click",()=>{const a=e.querySelector(".faq-extra");if(!a)return;a.classList.toggle("hidden");const r=t.querySelector("i, svg");r&&r.classList.toggle("rotate-180"),t.innerHTML=a.classList.contains("hidden")?'Show more questions <i data-lucide="chevron-down" class="w-4 h-4"></i>':'Show fewer questions <i data-lucide="chevron-up" class="w-4 h-4"></i>',window.lucide&&lucide.createIcons()}))}function bt(e){if(!e)return"";const t=new Date(e);return!t.getTime()||isNaN(t.getTime())?"":t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function ya(e){if(typeof e.likes=="number"&&e.likes>0)return e.likes;const t=String(e.text||e.comment||e.created_at||e.name||"");let a=2166136261;for(let r=0;r<t.length;r++)a^=t.charCodeAt(r),a=Math.imul(a,16777619);return 2+(a>>>0)%140}function et(e){return e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"k":String(e)}function ha(e){return`
    <div class="flex gap-2.5 pl-0.5">
      <div class="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center text-[11px] font-black uppercase shadow-sm">${u(String(e.author||"Guest").trim().charAt(0).toUpperCase()||"G")}</div>
      <div class="min-w-0 flex-1 rounded-xl bg-gray-50 border border-gray-100 px-3 py-2">
        <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <span class="text-xs font-bold text-gray-900">${u(e.author||"Guest")}</span>
          <span class="text-[11px] text-gray-400">&middot; ${bt(e.created_at)}</span>
        </div>
        <p class="text-sm text-gray-700 mt-0.5 leading-relaxed break-words">${u(e.body||"")}</p>
      </div>
    </div>`}function ga(e){const t=e.author_name||e.name||e.profiles?.full_name||"Anonymous",a=u(t.trim().charAt(0).toUpperCase()||"A"),r=e.handle?`<span class="text-xs font-semibold text-gray-400">${u(e.handle)}</span>`:"",o=bt(e.date||e.created_at),i=o?`<span class="text-xs text-gray-400">&middot; ${o}</span>`:"",n=e.location&&!e.handle?`<span class="text-xs text-gray-400">&middot; ${u(e.location)}</span>`:"",l=e.title?`<p class="text-sm font-bold text-gray-900 mt-1">${u(e.title)}</p>`:"",s=e.verified?'<span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full"><i data-lucide="badge-check" class="w-3 h-3"></i> Verified Purchase</span>':"",c=e.review_photo?`<div class="mt-2.5"><img src="${u(e.review_photo)}" alt="Customer photo" class="w-28 h-28 object-cover rounded-xl border border-gray-200" loading="lazy" onerror="this.style.display='none'"></div>`:"",d=e._key||"",h=A.likes.get(d)||0,b=ya(e)+h,g=A.liked.has(d),x=A.comments.get(d)||[],f=(typeof e.replies=="number"&&e.replies>0?e.replies:0)+x.length,m=`
    <button type="button" class="review-like-btn btn-press inline-flex items-center gap-1.5 text-xs font-bold transition ${g?"text-[#fe2c55]":"text-gray-500 hover:text-[#fe2c55]"}" data-key="${d}">
      <i data-lucide="heart" class="w-4 h-4 ${g?"fill-[#fe2c55] text-[#fe2c55]":""}"></i> ${et(b)}
    </button>`,k=`
    <button type="button" class="review-reply-toggle btn-press inline-flex items-center gap-1.5 text-xs font-bold transition ${V===d?"text-blue-600":"text-gray-500 hover:text-blue-500"}" data-key="${d}">
      <i data-lucide="message-circle" class="w-4 h-4"></i> ${f>0?`${et(f)} replies`:"Reply"}
    </button>`;let _="";V===d&&(_=`
      <div class="review-reply-box mt-3 rounded-xl border border-gray-200 bg-gray-50/80 p-3 space-y-2">
        <input type="text" class="review-reply-name w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" placeholder="Your name (optional)" maxlength="40" value="${u(ne||"")}">
        <textarea class="review-reply-body w-full rounded-lg border border-gray-300 px-3 py-2 text-sm min-h-[74px] resize-y" placeholder="Write a comment..." maxlength="1000"></textarea>
        <div class="flex items-center justify-end gap-2">
          <button type="button" class="review-reply-cancel text-xs font-bold text-gray-500 hover:text-gray-700 px-3 py-2 transition">Cancel</button>
          <button type="button" data-key="${d}" class="review-reply-post btn-press inline-flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition shadow-sm shadow-blue-500/20"><i data-lucide="send" class="w-3.5 h-3.5"></i> Comment</button>
        </div>
      </div>`);const I=x.length?`<div class="mt-2.5 space-y-2.5">${x.map(ha).join("")}</div>`:"";return`
    <div class="flex gap-3 py-4 border-b border-gray-100 last:border-0">
      <div class="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-black uppercase shadow-sm">${a}</div>
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <span class="text-sm font-bold text-gray-900">${u(t)}</span>${r}${i}${n}
          ${s}
        </div>
        <div class="flex gap-0.5 mt-1">${[1,2,3,4,5].map(H=>`<i data-lucide="star" class="w-3.5 h-3.5 ${H<=(e.rating||0)?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}</div>
        ${l}
        <p class="text-[15px] text-gray-700 leading-relaxed mt-1.5">${u(e.text||e.comment||"")}</p>
        ${c}
        <div class="flex items-center gap-5 mt-2.5">
          ${m}
          ${k}
        </div>
        ${_}
        ${I}
      </div>
    </div>`}function Ie(e){return`
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
    </div>`}function fa(e,t,a){const r=Math.max(1,a);return`
    <div class="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 items-center bg-gray-50 border border-gray-100 rounded-2xl p-4">
      ${[5,4,3,2,1].map(o=>{const i=t[o]||0,n=Math.round(i/r*100);return`
        <div class="flex items-center gap-1.5 text-xs text-gray-600 font-semibold"><i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>${o}</div>
        <div class="flex items-center gap-2">
          <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden"><div class="h-full bg-amber-400 rounded-full" style="width:${n}%"></div></div>
          <span class="text-[11px] text-gray-400 w-9 text-right tabular-nums">${n}%</span>
        </div>`}).join("")}
    </div>`}function va(){return new URLSearchParams(window.location.search).get("id")}const X=[...st];function tt(e){return X.find(t=>t.property_id===e)||null}let He=null;function xa(){return He||(He=Et(()=>import("./motorhome-data-CupbOvk0.js").then(e=>e.c),[]).then(e=>{const t=e.PRODUCT_EXTRA_LISTINGS||[];for(const a of t)X.some(r=>r.property_id===a.property_id)||X.push(a);return X}).catch(()=>X)),He}function wa(e){const t=document.getElementById("details-content"),a=Tt(e),o=$e(e.images).map((d,h)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${h===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(d)}">
      <img src="${u(d)}" alt="View ${h+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${j}'">
    </button>`).join(""),i=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cargo Area / Truck Bed","Engine","Wheels / Tires","Additional View"],n=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"package",label:"Payload Capacity",value:e.payload_capacity},{icon:"link",label:"Towing Capacity",value:e.towing_capacity},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(d=>d.value!=null&&d.value!==""&&d.value!=="N/A");Se(e.features);const l=Ie();t.innerHTML=`
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
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-contain" onerror="this.onerror=null;this.src='${j}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${i[0]}</span>
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
      <div class="mb-8 pt-4 border-t border-gray-100" id="agent-buttons-block">${ve(e,{compact:!1})}</div>

      <!-- Description -->
      ${_e(e,n,e.features,null,null)}

      ${l}

      ${Ee(e)}

      ${Me()}
    </div>
  `;const s=document.getElementById("hero-image"),c=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((d,h)=>{d.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(b=>b.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(b=>b.classList.add("border-gray-200")),d.classList.add("active","border-blue-500"),d.classList.remove("border-gray-200"),s.src=d.dataset.img,c.textContent=i[h]||`View ${h+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await F()?window.location.href=`/checkout.html?id=${e.property_id}`:(le(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{xe(e)}),we(document.getElementById("agent-buttons-block"),()=>e),Ce(e),Be(e),ce(e),Le(),window.lucide&&lucide.createIcons()}function ka(e){const t=document.getElementById("details-content"),a=ge(e),o=$e(e.images).map((d,h)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${h===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(d)}">
      <img src="${u(d)}" alt="View ${h+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${j}'">
    </button>`).join(""),i=["Exterior Front","Exterior Side","Exterior Rear","Living Area","Kitchen","Bedroom","Bathroom","Additional View"],n=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(d=>d.value!=null&&d.value!==""&&d.value!=="N/A");Se(e.features);const l=Ie();t.innerHTML=`
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
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-contain" onerror="this.onerror=null;this.src='${j}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${i[0]}</span>
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
      <div class="mb-8 pt-4 border-t border-gray-100" id="agent-buttons-block">${ve(e,{compact:!1})}</div>

      <!-- Description -->
      ${_e(e,n,e.features,null,null)}

      ${l}

      ${Ee(e)}

      ${Me()}
    </div>
  `;const s=document.getElementById("hero-image"),c=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((d,h)=>{d.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(b=>b.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(b=>b.classList.add("border-gray-200")),d.classList.add("active","border-blue-500"),d.classList.remove("border-gray-200"),s.src=d.dataset.img,c.textContent=i[h]||`View ${h+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await F()?window.location.href=`/checkout.html?id=${e.property_id}`:(le(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{xe(e)}),we(document.getElementById("agent-buttons-block"),()=>e),Ce(e),Be(e),ce(e),Le(),window.lucide&&lucide.createIcons()}function $a(e){const t=document.getElementById("details-content"),a=ge(e),o=$e(e.images).map((d,h)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${h===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(d)}">
      <img src="${u(d)}" alt="View ${h+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${j}'">
    </button>`).join(""),i=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cabin / Interior","Wheels / Tires","Additional View"],n=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(d=>d.value!=null&&d.value!==""&&d.value!=="N/A");Se(e.features);const l=Ie();t.innerHTML=`
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
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-contain" onerror="this.onerror=null;this.src='${j}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${i[0]}</span>
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
      <div class="mb-8 pt-4 border-t border-gray-100" id="agent-buttons-block">${ve(e,{compact:!1})}</div>

      <!-- Description -->
      ${_e(e,n,e.features,null,null)}

      ${l}

      ${Ee(e)}

      ${Me()}
    </div>
  `;const s=document.getElementById("hero-image"),c=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((d,h)=>{d.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(b=>b.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(b=>b.classList.add("border-gray-200")),d.classList.add("active","border-blue-500"),d.classList.remove("border-gray-200"),s.src=d.dataset.img,c.textContent=i[h]||`View ${h+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await F()?window.location.href=`/checkout.html?id=${e.property_id}`:(le(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{xe(e)}),we(document.getElementById("agent-buttons-block"),()=>e),Ce(e),Be(e),ce(e),Le(),window.lucide&&lucide.createIcons()}function Sa(e){const t=e.listing_type==="property",a=t?"Share Property":"Share",r=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`,o=t?'<a href="#listing-map" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-bold py-3 rounded-xl transition text-sm"><i data-lucide="map-pin" class="w-5 h-5"></i> View Map</a>':"",i=t?`
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
      ${t?`<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">${i}</div>`:""}
      <div class="mt-4 pt-4 border-t border-gray-100" id="agent-buttons-block">${ve(e,{compact:!1})}</div>
    </div>
  `}function Ee(e){const t=e.listing_type==="property",a=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`;return`
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
    </div>`}function Me(){return`
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
      </div>`}function _a(e){const t=new Map,a=r=>(r||[]).forEach(o=>{o&&o.property_id&&t.set(o.property_id,o)});return a(Ct),a(jt),a(Rt),a(it),a(lt),a(Ot),a(st),a(X),a(Mt()),qt(e.category||e.subcategory),[...t.values()].filter(r=>r.property_id!==e.property_id)}function La(e,t){let a=0;const r=c=>String(c||"").trim().toLowerCase();e.listing_type&&e.listing_type===t.listing_type&&(a+=40),e.category&&r(e.category)===r(t.category)&&(a+=30),e.subcategory&&r(e.subcategory)===r(t.subcategory)&&(a+=20),e.brand&&r(e.brand)===r(t.brand)&&(a+=15),e.breed&&r(e.breed)===r(t.breed)&&(a+=15),e.model&&r(e.model)===r(t.model)&&(a+=10),e.property_type&&r(e.property_type)===r(t.property_type)&&(a+=15);const o=parseFloat(e.price)||0,i=parseFloat(t.price)||0;if(o>0&&i>0){const c=Math.min(o,i)/Math.max(o,i);c>=.8?a+=10:c>=.6?a+=6:c>=.4&&(a+=3)}e.country_code&&e.country_code===t.country_code&&(a+=5);const n=new Set(r(e.title).split(/[^a-z0-9]+/).filter(c=>c.length>2)),l=new Set(r(t.title).split(/[^a-z0-9]+/).filter(c=>c.length>2));let s=0;return n.forEach(c=>{l.has(c)&&s++}),a+=Math.min(s*2,10),a}function Pe(e,t){const a=document.getElementById(e);if(!a)return;const r=a.querySelector(".rel-grid");if(!r)return;if(!t.length){a.classList.add("hidden");return}a.classList.remove("hidden"),r.innerHTML="";const o=document.createDocumentFragment();t.slice(0,10).forEach(i=>{const n=document.createElement("div");n.className="shrink-0 w-[260px] sm:w-[320px] snap-start";const l=Nt(i);l.style.width="100%",n.appendChild(l),o.appendChild(n)}),r.appendChild(o),window.lucide&&lucide.createIcons()}function Ce(e){const t=_a(e),a=t.map(s=>({item:s,score:La(e,s)})).sort((s,c)=>c.score-s.score||(c.item.rating||0)-(s.item.rating||0)),r=a.filter(s=>s.score>=35).map(s=>s.item),o=new Set(r.map(s=>s.property_id)),i=a.filter(s=>s.score>=15&&s.score<35&&!o.has(s.item.property_id)).map(s=>s.item),n=[...t].filter(s=>!o.has(s.property_id)).sort((s,c)=>(c.rating||0)-(s.rating||0)).slice(0,10),l=a.filter(s=>!o.has(s.item.property_id)).map(s=>s.item);Pe("similar-section",r.length?r:l.slice(0,10)),Pe("related-section",i.length?i:l.slice(0,10)),Pe("recommended-section",n.length?n:l.slice(0,10))}function Ia(e){const t=document.getElementById("details-content"),a=e.listing_type==="property",r=fe(e),o=ge(e),i=We(e.country_code),n=e.listing_type==="product"?"Product ID":a?"Property ID":"Listing ID";let l="",s="",c=parseFloat(e.real_price);if((!Number.isFinite(c)||c<=0)&&(c=parseFloat(e.compare_at_price??e.original_price)),Number.isFinite(c)&&c>0&&c>parseFloat(e.price)){const y=Math.round((1-parseFloat(e.price)/c)*100);l=`<span class="text-lg text-gray-400 price-strike line-through font-medium">${ge({...e,price:c})}</span>`,s=`<span class="inline-flex items-center gap-1 text-xs font-black text-white bg-red-500 px-2 py-1 rounded-full">-${y}% OFF</span>`}const d=e.availability_status||(e.listing_type==="product"?"In Stock":"Available"),h=$e(e.images),b=[e.video,e.video_url].find(y=>y&&typeof y=="string"&&D(y)),g=[...h];b&&!g.includes(b)&&g.unshift(b);const x=g.findIndex(y=>D(y)),f=g.findIndex(y=>!D(y)),m=f>=0?f:x>=0?x:0,k=g[m],_=D(k),I=f>=0?g[f]:"",H=g.map((y,$)=>{const M=D(y)?`<video src="${u(y)}" muted preload="auto" playsinline class="w-20 h-16 object-cover"></video>
         <div class="absolute inset-0 flex items-center justify-center"><div class="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center"><svg class="w-2.5 h-2.5 text-gray-800 ml-px" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:`<img src="${u(y)}" alt="View ${$+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${j}'">`;return`<button class="gallery-thumb relative rounded-lg overflow-hidden border-2 ${$===m?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${u(y)}">
      ${M}
    </button>`}).join("");let T="";if(a){const y=[{icon:"globe",label:"Country",value:`${i} ${e.country}`},{icon:"map-pin",label:"State / Province",value:e.state},{icon:"building",label:"City",value:e.city},{icon:"navigation",label:"Town / Local Area",value:e.town},{icon:"signpost",label:"Neighborhood / District",value:p(e,"neighborhood")},{icon:"home",label:"Address",value:p(e,"address")}].filter($=>$.value);T=`
      <div class="mt-4">
        ${Q("map-pin","Location","rose")}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${y.map($=>`
            <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
              <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="${$.icon}" class="w-4 h-4 text-blue-500"></i></div>
              <div><div class="text-gray-500 text-xs">${$.label}</div><div class="text-gray-900 font-bold text-[15px]">${$.value}</div></div>
            </div>
          `).join("")}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-200" style="height:280px"></div>
      </div>`}else if(r){const y=p(e,"location")||[p(e,"city"),p(e,"state"),p(e,"country")].filter(Boolean).join(", ");if(y){const $="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(y);T=`
      <div class="mt-4">
        ${Q("map-pin","Location","rose")}
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="sm:col-span-2 flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
            <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="map-pin" class="w-4 h-4 text-blue-500"></i></div>
            <div><div class="text-gray-500 text-xs">Vehicle Location</div><div class="text-gray-900 font-bold text-[15px]">${u(String(y))}</div></div>
          </div>
          <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
            <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="navigation" class="w-4 h-4 text-blue-500"></i></div>
            <div><div class="text-gray-500 text-xs">View on Map</div><a href="${$}" target="_blank" rel="noopener" class="text-blue-600 font-bold text-sm hover:underline">Google Maps <i data-lucide="external-link" class="w-3.5 h-3.5 inline"></i></a></div>
          </div>
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-200" style="height:280px"></div>
      </div>`}}let E=[];a?(E=[{icon:"bed-double",label:"Bedrooms",value:e.bedrooms},{icon:"bath",label:"Bathrooms",value:e.bathrooms},{icon:"droplets",label:"Half Bathrooms",value:e.half_bathrooms},{icon:"building",label:"Building / Living Size",value:e.building_size},{icon:"ruler",label:"Land / Lot Size",value:e.land_size},{icon:"layers",label:"Floors / Levels",value:e.floors},{icon:"car-front",label:"Parking Spaces",value:e.parking_spaces},{icon:"warehouse",label:"Garage",value:e.garage},{icon:"home",label:"Property Type",value:e.property_type},{icon:"sofa",label:"Furnished",value:e.furnished},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"calendar",label:"Year Built",value:e.year_built},{icon:"paintbrush",label:"Year Renovated",value:e.year_renovated},{icon:"mail",label:"ZIP / Postal Code",value:e.zip_code},{icon:"tag",label:"Status",value:e.listing_status==="rent"?"For Rent":"For Sale"},{icon:"signpost",label:"Neighborhood",value:p(e,"neighborhood")},{icon:"sofa",label:"Living Areas",value:p(e,"living_areas")},{icon:"flame",label:"Kitchens",value:p(e,"kitchens")},{icon:"tree-pine",label:"Balconies",value:p(e,"balconies")},{icon:"leaf",label:"Garden / Yard",value:p(e,"garden")},{icon:"waves",label:"Pool",value:p(e,"pool")},{icon:"lock",label:"Security",value:p(e,"security")},{icon:"home",label:"Utilities & Heating",value:p(e,"utilities")},{icon:"hammer",label:"Construction Type",value:p(e,"construction_type")},{icon:"clipboard-check",label:"Construction Status",value:p(e,"construction_status")},{icon:"user-check",label:"Ownership Type",value:p(e,"ownership_type")}].filter(y=>y.value!=null&&y.value!==""),ae("Property Information","home",E)):e.category==="Motorhomes"?(E=[{icon:"factory",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank}].filter(y=>y.value!=null&&y.value!==""),ae("Vehicle Information","bus",E,"violet")):r?(E=[{icon:"tag",label:"Title / Listing",value:e.title},{icon:"car-front",label:"Vehicle / Body Type",value:p(e,"body_type")},{icon:"factory",label:"Make / Brand",value:p(e,"make")||e.brand},{icon:"car",label:"Model",value:p(e,"model")},{icon:"badge-award",label:"Trim / Edition",value:p(e,"trim")},{icon:"calendar",label:"Year",value:p(e,"model_year")},{icon:"gauge",label:"Mileage",value:p(e,"mileage")},{icon:"zap",label:"Engine",value:p(e,"engine")},{icon:"gauge",label:"Horsepower",value:p(e,"horsepower")},{icon:"cog",label:"Transmission",value:p(e,"transmission")},{icon:"route",label:"Drive Type",value:p(e,"drive_type")},{icon:"fuel",label:"Fuel Type",value:p(e,"fuel_type")},{icon:"fuel",label:"Fuel Economy",value:p(e,"fuel_economy")},{icon:"users",label:"Seating Capacity",value:p(e,"seating_capacity")},{icon:"door-open",label:"Doors",value:p(e,"doors")},{icon:"palette",label:"Color / Exterior",value:p(e,"color")},{icon:"fingerprint",label:"VIN",value:p(e,"vin")},{icon:"badge-check",label:"Condition",value:p(e,"condition")},{icon:"wrench",label:"Warranty",value:p(e,"warranty")}].filter(y=>y.value!=null&&y.value!==""),ae("Vehicle Specifications","car-front",E,"violet")):e.listing_type==="product"?(E=[{icon:"factory",label:"Brand",value:e.brand},{icon:"tag",label:"Subcategory",value:e.subcategory},{icon:"palette",label:"Colour",value:e.color},{icon:"ruler",label:"Size",value:e.size},{icon:"layers",label:"Material",value:e.material},{icon:"badge-check",label:"Condition",value:e.condition||"New"},{icon:"shield-check",label:"Warranty",value:e.warranty},{icon:"package-check",label:"Availability",value:e.availability_status}].filter(y=>y.value!=null&&y.value!==""),ae("Product Information","package",E)):e.listing_type==="pet"&&(E=[{icon:"paw-print",label:"Breed",value:e.breed},{icon:"calendar",label:"Age",value:e.age},{icon:"users",label:"Gender",value:e.gender},{icon:"palette",label:"Colour",value:e.color},{icon:"scale",label:"Weight",value:e.size},{icon:"globe",label:"Origin",value:`${We(e.country_code)} ${e.country}`},{icon:"badge-check",label:"Health",value:e.condition}].filter(y=>y.value!=null&&y.value!==""),ae("Pet Information","paw-print",E,"amber")),Se(e.features),aa(e.highlights);const O=Ie();t.innerHTML=`
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
          <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full"><i data-lucide="box" class="w-3.5 h-3.5"></i> ${n}: <span class="font-mono">${u(e.property_id)}</span></span>
          <span class="inline-flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">${e.listing_status==="rent"?"For Rent":"For Sale"}</span>
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-4 bg-gradient-to-br from-blue-50 via-white to-white border border-blue-100 rounded-2xl p-5 mb-6">
        <div>
          <div class="flex items-baseline flex-wrap gap-2">
            ${l}
            <span class="text-4xl font-black text-blue-600">${o}</span>
          </div>
          <div class="flex items-center gap-2 mt-1.5">
            ${s}
            <span class="text-sm text-emerald-600 font-bold flex items-center gap-1"><i data-lucide="package-check" class="w-4 h-4"></i> ${d}</span>
          </div>
        </div>
        <div class="flex flex-col gap-1.5 text-sm">
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="truck" class="w-4 h-4 text-blue-500"></i> Free worldwide shipping</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="rotate-ccw" class="w-4 h-4 text-blue-500"></i> Easy returns within 14 days</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="lock" class="w-4 h-4 text-blue-500"></i> Secure payment protection</span>
        </div>
      </div>

      <div id="hero-wrap" class="relative w-full h-[46vh] sm:h-[60vh] lg:h-[72vh] rounded-2xl overflow-hidden bg-gray-100 mb-3 cursor-zoom-in group flex items-center justify-center" role="button" tabindex="0" aria-label="Open image gallery">
        ${_?`<video id="hero-image" src="${u(k)}" ${I?`poster="${u(I)}"`:""} autoplay muted loop preload="metadata" playsinline controls class="w-full h-full object-contain" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"></video>
             <div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-lg"><svg class="w-7 h-7 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:`<img id="hero-image" src="${k}" alt="${e.title}" class="w-full h-full object-contain" onerror="this.onerror=null;this.src='${j}'">`}
        <div class="absolute inset-0 flex items-end justify-between p-3 opacity-0 group-hover:opacity-100 transition pointer-events-none">
          <span class="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-black/50 backdrop-blur px-3 py-1.5 rounded-full"><i data-lucide="expand" class="w-3.5 h-3.5"></i> Tap to enlarge</span>
        </div>
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${H}
      </div>

      ${Sa(e)}

      <div id="listing-details">
        ${_e(e,E,e.features,e.highlights,T,a?ia(e):r?da(e):"")}
      </div>

      ${O}

      ${a?Ee(e):r?ua(e):""}

      <div id="recommendations-section" class="hidden">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">You May Also Like</h3>
        <div id="recommendations-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>

      ${Me()}
    </div>
  `,document.getElementById("hero-image");const G=document.getElementById("hero-wrap");if(G){const y=()=>Ea(e,g);G.addEventListener("click",y),G.addEventListener("keydown",$=>{($.key==="Enter"||$.key===" ")&&($.preventDefault(),y())})}t.querySelectorAll(".gallery-thumb").forEach(y=>{y.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(v=>v.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(v=>v.classList.add("border-gray-200")),y.classList.add("active","border-blue-500"),y.classList.remove("border-gray-200");const $=y.dataset.img,U=D($),M=document.getElementById("hero-wrap");if(!M)return;const J=M.querySelector(".hero-video-overlay");J&&J.remove();const C=document.getElementById("hero-image");if(U)if(C&&C.tagName==="VIDEO")C.src=$;else{const v=document.createElement("video");v.id="hero-image",v.src=$,v.muted=!0,v.loop=!0,v.autoplay=!0,v.preload="metadata",v.playsInline=!0,v.controls=!0,I&&(v.poster=I),v.className="w-full h-full object-contain",M.insertBefore(v,M.firstChild),C&&C.remove&&C.remove();const B=document.createElement("div");B.className="hero-video-overlay absolute inset-0 flex items-center justify-center pointer-events-none",B.innerHTML='<div class="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-lg"><svg class="w-7 h-7 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>',M.insertBefore(B,M.firstChild?.nextSibling)}else if(C&&C.tagName==="IMG")C.src=$;else{const v=document.createElement("img");v.id="hero-image",v.src=$,v.alt=e.title,v.className="w-full h-full object-contain",v.onerror=function(){this.onerror=null,this.src=j},M.insertBefore(v,M.firstChild),C&&C.remove&&C.remove()}})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await F()?window.location.href=`/checkout.html?id=${e.property_id}`:(le(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{xe(e)});const de=document.getElementById("request-viewing-btn");de&&de.addEventListener("click",()=>at(e,"viewing"));const w=document.getElementById("request-info-btn");w&&w.addEventListener("click",()=>at(e,"info"));const R=document.getElementById("view-details-btn");R&&R.addEventListener("click",()=>{const y=document.getElementById("listing-details");y&&y.scrollIntoView({behavior:"smooth",block:"start"})});const Y=document.getElementById("add-cart-btn");Y&&Y.addEventListener("click",()=>{Pt(e.property_id,1),Y.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Added to Cart',window.lucide&&lucide.createIcons(),setTimeout(()=>{Y.innerHTML='<i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart',window.lucide&&lucide.createIcons()},2e3)}),Ca(e),we(document.getElementById("agent-buttons-block"),()=>e),Be(e),ce(e),ja(e),Le(),window.lucide&&lucide.createIcons(),e.property_id,e.title,parseFloat(e.price),e.currency;const K=document.getElementById("listing-map");if(K&&window.L){const y=parseFloat(e.latitude)||null,$=parseFloat(e.longitude)||null,U=[e.product_location,e.town,e.city,e.state,e.country].filter(Boolean).join(", ")||e.title,M=[e.product_location,e.town,e.city,e.state,e.country].filter(Boolean).join(", "),J="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(M||e.title),C=(B,ue,qe)=>{const pe=L.map(K).setView([B,ue],qe);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(pe),L.marker([B,ue]).addTo(pe).bindPopup(`<strong>${u(e.title)}</strong><br>${u(U)}`).openPopup()},v=()=>{K.innerHTML=`<div class="w-full h-full flex flex-col items-center justify-center gap-2 bg-gray-50 text-center p-4">
        <i data-lucide="map-pin" class="w-6 h-6 text-gray-400"></i>
        <p class="text-xs text-gray-500">Exact map position not available for this location.</p>
        <a href="${J}" target="_blank" rel="noopener" class="text-xs font-bold text-blue-600 hover:underline">Open location in Google Maps</a>
      </div>`,window.lucide&&lucide.createIcons()};y&&$?C(y,$,13):M?fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(M)).then(B=>B.json()).then(B=>{B&&B[0]?C(parseFloat(B[0].lat),parseFloat(B[0].lon),12):v()}).catch(v):v()}}function Ea(e,t){const a=(Array.isArray(t)&&t.length?t:[e.images?.[0]||j]).filter(Boolean);if(!a.length)return;let r=0;const o=document.createElement("div");o.id="gallery-lightbox",o.className="fixed inset-0 z-[500] bg-black/95 flex flex-col",o.innerHTML=`
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
  `,document.body.appendChild(o),document.body.style.overflow="hidden";const i=o.querySelector("#lb-media-container"),n=o.querySelector("#lb-count"),l=o.querySelector("#lb-thumbs");let s=null;const c=()=>{i.classList.add("lb-fade"),setTimeout(()=>{const f=a[r];if(D(f))i.innerHTML=`<video src="${u(f)}" controls playsinline preload="auto" class="lb-media max-w-full max-h-[70vh] object-contain rounded-lg"></video>`;else{const m=document.createElement("img");m.src=f,m.alt="Gallery",m.draggable=!1,m.className="lb-media max-w-full max-h-[70vh] object-contain",m.onerror=function(){this.onerror=null,this.src=j},i.innerHTML="",i.appendChild(m)}i.classList.remove("lb-fade"),n.textContent=`${r+1} / ${a.length}`,l.innerHTML=a.map((m,k)=>{const I=D(m)?'<div class="w-full h-full flex items-center justify-center bg-gray-800"><svg class="w-3 h-3 text-white ml-px" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>':`<img src="${u(m)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`;return`<button type="button" data-i="${k}" class="relative w-12 h-9 rounded-lg overflow-hidden border-2 ${k===r?"border-blue-500":"border-transparent"}" aria-label="Item ${k+1}">${I}</button>`}).join(""),l.querySelectorAll("[data-i]").forEach(m=>m.addEventListener("click",()=>{r=parseInt(m.dataset.i,10),c()}))},90)},d=()=>{r=(r-1+a.length)%a.length,c()},h=()=>{r=(r+1)%a.length,c()},b=()=>{o.remove(),document.body.style.overflow="",document.removeEventListener("keydown",g)},g=f=>{f.key==="Escape"?b():f.key==="ArrowLeft"?d():f.key==="ArrowRight"&&h()};o.querySelector("#lb-close").addEventListener("click",b),o.querySelector("#lb-prev").addEventListener("click",d),o.querySelector("#lb-next").addEventListener("click",h);const x=o.querySelector("#lb-viewport");x.addEventListener("touchstart",f=>{s=f.touches[0].clientX},{passive:!0}),x.addEventListener("touchend",f=>{if(s==null)return;const m=f.changedTouches[0].clientX-s;Math.abs(m)>40&&(m<0?h():d()),s=null},{passive:!0}),x.addEventListener("click",f=>{f.target===x&&b()}),document.addEventListener("keydown",g),c()}function at(e,t){const a=t==="viewing",r=e.property_id||e.id||"",o=document.createElement("div");o.id="property-request-modal",o.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-0 sm:p-4",o.innerHTML=`
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
  `,document.body.appendChild(o),document.body.style.overflow="hidden",F().then(n=>{if(n){const l=o.querySelector("#prq-name"),s=o.querySelector("#prq-email"),c=n.user_metadata||{};c?.full_name&&l&&!l.value&&(l.value=c.full_name),n.email&&s&&!s.value&&(s.value=n.email)}});const i=()=>{o.remove(),document.body.style.overflow=""};o.querySelectorAll("[data-req-close]").forEach(n=>n.addEventListener("click",i)),o.addEventListener("submit",async n=>{n.preventDefault();const l=o.querySelector("#prq-submit"),s=o.querySelector("#prq-status"),c=o.querySelector("#prq-name").value.trim(),d=o.querySelector("#prq-email").value.trim(),h=o.querySelector("#prq-phone")?.value.trim()||"",b=o.querySelector("#prq-date")?.value||"",g=o.querySelector("#prq-message").value.trim();l.disabled=!0,l.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i> Sending...',window.lucide&&lucide.createIcons();try{let x=null;try{x=(await S.auth.getUser()).data?.user?.id||null}catch{}const f=a?"Request Viewing":"Request More Information",m=[r&&`Property: ${r}`,h&&`Phone: ${h}`,b&&`Preferred date: ${b}`,g].filter(Boolean).join(" | "),{error:k}=await S.from("site_feedback").insert({user_id:x,name:c,email:d,rating:5,feedback:`${f} (${e.title}): ${m}`,is_approved:!1});if(k)throw new Error(k.message);try{await fetch("https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/send-auth-email",{method:"POST",headers:{Authorization:"Bearer sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa","Content-Type":"application/json"},body:JSON.stringify({type:"contact_form",name:c,email:d,subject:`${f} — ${e.title}`,message:m})})}catch{}s.className="text-center text-sm py-3 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200",s.textContent=a?"Viewing request sent! We'll confirm your appointment within 24 hours.":"Request sent! We'll get back to you within 24 hours.",s.classList.remove("hidden"),setTimeout(i,1800)}catch{s.className="text-center text-sm py-3 rounded-xl bg-red-50 text-red-600 border border-red-200",s.textContent="Failed to send. Please email support@weverseonlineshop.com directly.",s.classList.remove("hidden"),l.disabled=!1,l.innerHTML=a?"Request Viewing":"Send Request",window.lucide&&lucide.createIcons()}})}let N=0,rt=!1;function Ma(){if(rt)return;rt=!0;const e=document.createElement("style");e.textContent="@keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}",document.head.appendChild(e)}function Ne(e,t){if(!e)return;Ma(),e.innerHTML=`<i data-lucide="heart" class="w-5 h-5 ${t?"fill-red-500 text-red-500":""}"></i>`,e.classList.toggle("bg-red-50",t),e.classList.toggle("border",t),e.classList.toggle("border-red-200",t);const a=e.querySelector("span");a&&(a.textContent=t?"Saved to Wishlist":"Add to Wishlist"),window.lucide&&lucide.createIcons();const r=e.querySelector("i");r&&(r.style.animation="none",r.offsetWidth,r.style.animation="kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)",setTimeout(()=>{r&&(r.style.animation="")},550))}async function Ca(e){const t=document.getElementById("wishlist-btn");if(!t)return;const a=await F();if(!a){t.addEventListener("click",()=>{le(window.location.pathname+window.location.search),window.location.href=`/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`});return}const{data:r,error:o}=await S.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(o){console.error("Wishlist check failed:",o.message);return}r&&Ne(t,!0),t.addEventListener("click",async()=>{const{data:i,error:n}=await S.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(n){console.error("Wishlist toggle failed:",n.message);return}if(i){const{error:l}=await S.from("wishlist").delete().eq("id",i.id);if(l){console.error("Wishlist delete failed:",l.message);return}Ne(t,!1)}else{const{error:l}=await S.from("wishlist").insert({user_id:a.id,listing_id:e.id});if(l){console.error("Wishlist insert failed:",l.message);return}Ne(t,!0)}})}async function Be(e){const t=document.getElementById("review-form");if(!t)return;const a=await F(),r=e.property_id||e.id||"",o=document.getElementById("review-photo-row");o&&(a?o.classList.remove("hidden"):o.classList.add("hidden"));const i=document.getElementById("review-name");if(i){let b="";try{b=localStorage.getItem("kco_review_name")||""}catch{}i.value=b}document.querySelectorAll(".star-btn").forEach(b=>{b.addEventListener("click",()=>{N=parseInt(b.dataset.rating,10),document.querySelectorAll(".star-btn").forEach((g,x)=>{const f=g.querySelector("i, svg");f&&(x<N?(f.classList.add("fill-amber-400","text-amber-400"),f.classList.remove("text-gray-300")):(f.classList.remove("fill-amber-400","text-amber-400"),f.classList.add("text-gray-300")))})})});const n=document.getElementById("review-photo-input"),l=document.getElementById("review-photo-preview");let s=null;n&&n.addEventListener("change",()=>{if(s=n.files&&n.files[0],!!l&&(l.innerHTML="",s)){const b=URL.createObjectURL(s);l.innerHTML=`<span class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg px-2.5 py-1"><img src="${b}" alt="" class="w-5 h-5 rounded object-cover">${u(s.name)}</span>`}});const c=document.getElementById("review-submit-msg"),d=document.getElementById("review-error-msg"),h=b=>{if(d)if(b){d.classList.remove("hidden");const g=d.querySelector("span");g&&(g.textContent=b)}else d.classList.add("hidden")};t.addEventListener("submit",async b=>{b.preventDefault(),h("");const g=document.getElementById("review-text").value.trim();if(!N){alert("Please select a rating.");return}if(!g){alert("Please write a review.");return}const x=t.querySelector('button[type="submit"]'),f=x.innerHTML;x.disabled=!0,x.innerHTML='<span class="inline-block animate-spin">⏳</span> Submitting…';const m=(i?i.value:"").trim();if(m)try{localStorage.setItem("kco_review_name",m)}catch{}let k=!1;if(a){let _=null;if(s){const H=(s.name.split(".").pop()||"jpg").toLowerCase().replace(/[^a-z0-9]/g,"")||"jpg",T=`${a.id}/${Date.now()}_${String(Math.random()).slice(2)}.${H}`,{error:E}=await S.storage.from("review-photos").upload(T,s,{contentType:s.type||"image/jpeg",cacheControl:"3600",upsert:!1});if(E){x.disabled=!1,x.innerHTML=f,h("Could not upload photo: "+E.message);return}const{data:O}=S.storage.from("review-photos").getPublicUrl(T);_=O?.publicUrl||null}const{error:I}=await S.from("product_reviews").insert({listing_id:e.id||null,property_id:r,user_id:a.id,rating:N,comment:g,review_photo:_,is_approved:!0});I?h("Could not save your review: "+(I.message||"unknown error")):k=!0}else{try{const{error:_}=await S.from("product_reviews").insert({listing_id:e.id||null,property_id:r,rating:N,comment:g,author_name:m||null,is_approved:!0});_||(k=!0,Xt(r,{rating:N,text:g,name:m}))}catch{}k||(k=!!Zt(r,{rating:N,text:g,name:m})),k||h("Could not save your review right now — please try again.")}if(!k){x.disabled=!1,x.innerHTML=f;return}x.disabled=!1,x.innerHTML=f,document.getElementById("review-text").value="",i&&(i.value=m),N=0,s=null,n&&(n.value=""),l&&(l.innerHTML=""),document.querySelectorAll(".star-btn").forEach(_=>{const I=_.querySelector("i, svg");I&&(I.classList.remove("fill-amber-400","text-amber-400"),I.classList.add("text-gray-300"))}),c&&(c.classList.remove("hidden"),setTimeout(()=>{c&&c.classList.add("hidden")},4e3)),ce(e)})}async function ce(e){yt();const t=document.getElementById("reviews-list"),a=document.getElementById("reviews-summary"),r=document.getElementById("reviews-breakdown");if(!t)return;const o=Gt(e),i={5:o.breakdown[5]||0,4:o.breakdown[4]||0,3:o.breakdown[3]||0,2:o.breakdown[2]||0,1:o.breakdown[1]||0};let n=Math.max(Number(o.total)||0,o.reviews.length);const l=[],s=e.property_id||e.id||"";if(s){const{data:m,error:k}=await S.from("product_reviews").select("*, profiles(full_name)").eq("property_id",s).eq("is_approved",!0).order("created_at",{ascending:!1});if(!k&&m)for(const _ of m){l.push({..._,name:_.author_name||_.profiles?.full_name||"Anonymous",verified:_.is_verified_purchase});const I=Math.min(5,Math.max(1,Math.round(Number(_.rating)||0)));i[I]++,n++}}const c=Jt(s).filter(m=>!l.some(k=>Math.round(Number(k.rating))===Math.round(Number(m.rating))&&String(k.comment||"").trim()===String(m.text||"").trim()));for(const m of c){const k=Math.min(5,Math.max(1,Math.round(Number(m.rating)||0)));i[k]++,n++}let d=0;for(let m=5;m>=1;m--)d+=m*i[m];const b=(n?d/n:0)||Number(e.rating)||0,g=n,x=`
    <div class="flex flex-wrap items-center gap-x-6 gap-y-4">
      <div class="flex items-center gap-4 shrink-0">
        <div class="text-5xl sm:text-6xl font-black leading-none text-gray-900 tracking-tight">${b>0?b.toFixed(1):"New"}</div>
        <div class="shrink-0">
          <div class="flex gap-1">${ea(b,"w-5 h-5 sm:w-6 sm:h-6")}</div>
          <div class="text-[13px] sm:text-sm font-bold text-gray-500 mt-1.5 tracking-wide">Customer Reviews</div>
        </div>
      </div>
      <div class="hidden md:block w-px h-12 bg-gray-200"></div>
      <div class="flex flex-wrap items-center gap-2">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Listing</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1.5 rounded-full"><i data-lucide="truck" class="w-3.5 h-3.5"></i> Fast Worldwide Delivery</span>
      </div>
    </div>`;a&&(a.innerHTML=x),r&&(r.innerHTML=fa(e,i,g));const f=[...c,...l,...o.reviews];if(!f.length){t.innerHTML='<p class="text-gray-400 text-sm py-2">No reviews yet. Be the first to review this product!</p>',window.lucide&&lucide.createIcons();return}re=f.map(m=>(m._local?m._key="local-"+m.id:m.id?m._key="db-"+m.id:m._key="seed-"+Qt(String(s)+"||"+(m.date||"")+"||"+(m.text||"")),m)),ie=s;try{ne=localStorage.getItem("kco_reply_name")||""}catch{}if(s)try{A=await dt(s)}catch{A={likes:new Map,liked:new Set,comments:new Map}}else A={likes:new Map,liked:new Set,comments:new Map};V=null,oe=!1,Aa(t),z()}async function yt(){const e=document.querySelector('[data-bg-slot="reviews"]');if(e)try{const t=await Dt();e.innerHTML=Vt(t.reviews_bg_image,t.reviews_bg_video)}catch{}}document.addEventListener("promo-backgrounds-updated",()=>{try{yt()}catch{}});function z(){const e=document.getElementById("reviews-list");if(!e||!re.length)return;const t=oe?re:re.slice(0,3);if(e.innerHTML=t.map(ga).join(""),window.lucide&&lucide.createIcons(),oe)Ta(e,()=>{oe=!1,z()});else if(re.length>t.length){const a=document.createElement("div");a.className="mt-4 flex justify-center",a.innerHTML=`
      <button type="button" class="view-all-reviews-btn btn-press inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition shadow-sm shadow-blue-500/20">
        View All Customer Reviews
        <i data-lucide="chevron-down" class="w-4 h-4"></i>
      </button>`,e.appendChild(a),window.lucide&&lucide.createIcons(),a.querySelector(".view-all-reviews-btn").addEventListener("click",()=>{oe=!0,z()})}}async function Ba(){if(ie)try{A=await dt(ie)}catch{A={likes:new Map,liked:new Set,comments:new Map}}}function qa(){if(!V)return;const e=document.querySelector(".review-reply-box textarea.review-reply-body");e&&setTimeout(()=>{try{e.focus()}catch{}},60)}function Aa(e){!e||e.dataset.riBound==="1"||(e.dataset.riBound="1",e.addEventListener("click",async t=>{const a=t.target.closest(".review-like-btn");if(a){t.preventDefault();const n=a.dataset.key;if(!n)return;let s=!A.liked.has(n);try{const c=await Yt(ie,n);c&&typeof c.liked=="boolean"&&(s=c.liked)}catch{}s?A.liked.add(n):A.liked.delete(n),A.likes.set(n,Math.max(0,(A.likes.get(n)||0)+(s?1:-1))),z();return}const r=t.target.closest(".review-reply-toggle");if(r){t.preventDefault(),V=V===r.dataset.key?null:r.dataset.key,z(),qa();return}if(t.target.closest(".review-reply-cancel")){t.preventDefault(),V=null,z();return}const i=t.target.closest(".review-reply-post");if(i){t.preventDefault();const n=t.target.closest(".review-reply-box");if(!n)return;const l=n.querySelector(".review-reply-name"),s=n.querySelector(".review-reply-body"),c=(l&&l.value||"").trim(),d=(s&&s.value||"").trim();if(!d){s&&s.focus();return}ne=c||ne;try{await Kt(ie,i.dataset.key,c||"Guest",d)}catch{}try{localStorage.setItem("kco_reply_name",ne)}catch{}V=null,await Ba(),z()}}))}function Ta(e,t){if(!e)return;const a=document.getElementById("reviews-back-top");a&&a.remove();const r=document.createElement("button");r.type="button",r.id="reviews-back-top",r.setAttribute("aria-label","Back to product page"),r.className="btn-press fixed z-[90] bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white font-bold pl-3 pr-5 py-3 rounded-full text-xs shadow-xl shadow-slate-950/50 border border-white/10 backdrop-blur transition active:scale-95",r.innerHTML=`
    <span class="shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"><i data-lucide="chevron-up" class="w-4 h-4"></i></span>
    Back to product page`,document.body.appendChild(r),r.addEventListener("click",()=>{r.remove(),typeof t=="function"&&t();const o=document.getElementById("reviews-section");o&&o.scrollIntoView({behavior:"smooth",block:"start"})}),window.lucide&&lucide.createIcons()}async function ja(e){const t=document.getElementById("recommendations-section"),a=document.getElementById("recommendations-grid");if(!t||!a||!e.id)return;const{data:r,error:o}=await S.from("product_recommendations").select("recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)").eq("listing_id",e.id).order("score",{ascending:!1}).limit(4);if(o){console.error("Recommendations load failed:",o.message),t.classList.add("hidden");return}let i=(r||[]).map(n=>n.showroom_listings).filter(Boolean);if(i.length<4){const{data:n}=await S.from("showroom_listings").select("property_id, title, price, currency, images, listing_type").eq("category",e.category).neq("id",e.id).eq("is_active",!0).order("rating",{ascending:!1}).limit(4-i.length);i=[...i,...n||[]]}if(i.length===0){t.classList.add("hidden");return}t.classList.remove("hidden"),a.innerHTML=i.map(n=>{const l=n.images&&n.images[0]||"/fallback.svg",s=typeof n.price=="number"?n.price:parseFloat(n.price||0),c=n.currency||"USD";return`<a href="/details.html?id=${n.property_id}" class="block bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition group">
      <div class="aspect-square overflow-hidden bg-gray-100"><img src="${u(l)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-gray-900 font-bold truncate">${u(n.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${c} ${s.toLocaleString()}</p></div>
    </a>`}).join("")}function u(e){return String(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Ra(){const e=va();if(!e){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}const t=()=>{document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>'},a=()=>Ye(e)||Ke(e)||Je(e)||Ft(e)||tt(e)||Lt(e)||Bt(),r=l=>{if(It(l),document.title=`${l.title} | Weverse Online Shop`,Ht(l),l===Ye(e))wa(l);else if(l===Ke(e))ka(l);else if(l===Je(e))$a(l);else{Ia(l);try{Ce(l)}catch{}}},o=a();if(o){r(o),ze(e).then(l=>{Ge().then(()=>{if(At(e)){t();return}if(l&&l.property_id===e)try{r(l)}catch{}})});return}const i=await ze(e);if(i){r(i);return}await xa();const n=tt(e);if(n){r(n);return}await Ge();{t();return}}const ot=document.getElementById("details-content"),Ha=ot?ot.innerHTML:"";let nt=!1;function ht(e){if(e)try{console.error("[details] init failed:",e&&(e.stack||e.message||e))}catch{}if(!nt){nt=!0;try{const t=document.getElementById("details-content");if(!t||t.innerHTML!==Ha||t.querySelector(".fade-in, #reviews-section"))return;t.innerHTML='<div class="text-center py-20 text-gray-500">We couldn’t load this listing right now. Please check your connection and try again.</div>'}catch{}}}window.setTimeout(ht,12e3);Ra().catch(ht);
