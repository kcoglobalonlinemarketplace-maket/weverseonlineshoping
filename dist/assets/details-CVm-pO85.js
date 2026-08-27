import{_ as at}from"./preload-helper-CS1eXPs2.js";import{U as xe,b as ce,I as rt,z as it,_ as st,c as Z,$ as we,w,B as nt,S as lt,i as ot}from"./supabase-client-DvCmNkpI-BBtcpOs0-Btt9PamL.js";import"./localization-bootstrap-BhglmvwT-CYE5uVRZ-DCbiSmDU.js";import{generateListingById as dt,getCatalogCategory as ct}from"./catalog-qysuyAKK-CoyDMFKy-BRsyL22q.js";import{loadHiddenCatalogIds as ke,isCatalogListingHidden as ut}from"./catalog-hidden-store-BAMgfUuU-D15H80aw-C9Rgy81w.js";import{P as Be,g as $e,b as Se,f as pt,T as gt,M as mt}from"./motorhome-data-CupbOvk0--c7gbSNU--c7gbSNU.js";import{e as _e,i as bt,t as ht,o as yt}from"./phone-data-Of7KtnOV-OoM3wJJD-dTQdNoKz.js";import{Y as ft,U as Q,S as vt}from"./showroom-cards-C9JyXfym-DgM0QceI-CE-SIBb_.js";import{getCurrentUser as A,setRedirectAfterAuth as D}from"./auth-iMacRl0l-DlcadYa5-CE2dHBPh.js";import{s as xt}from"./cart-DNy8CJA3-Oz5JpZDi-B2DS8jkg.js";import{g as wt,S as kt}from"./app-promo-banner-VTpzwpvR-CiDTzVNv-CyjvARgA.js";import"./ai-chat-U-IZQEoO-DrOtSYGJ-DFOzupjr.js";import"./categories-BEuiwWw5-Dd8DYwb8-s64hQa3M.js";/* empty css                                       */const $t=[];function Le(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return t>>>0}function St(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}const ue=["James","Emma","Liam","Olivia","Noah","Ava","Ethan","Sophia","Lucas","Mia","Daniel","Isabella","Matthew","Charlotte","Samuel","Amelia","Gabriel","Harper","Nathan","Evelyn","Caleb","Abigail","Adrian","Ella","Owen","Grace","Leo","Chloe","Julian","Nora","Mason","Aria","Elijah","Layla","Isaac","Zoe","Hunter","Scarlett","Christian","Lily","Aaron","Hannah","Dylan","Savannah","Andrew","Ruby","David","Elena","Ryan","Nina","Marcus","Priya","Kwame","Fatima","Andre","Yuki","Tomas","Ingrid","Mateo","Sofia","Omar","Zara","Felix","Amara","Jonas","Leila","Victor","Mila","Diego","Iris","Hugo","Camila","Adam","Freya","Oscar","Amina","Peter","Naomi","Elias","Lucia","Ray","Talia","Marco","Sienna","Joshua","Anya","Kofi","Petra"],O=["Anderson","Baker","Carter","Diaz","Evans","Foster","Garcia","Harris","Ingram","Johnson","Kelly","Lewis","Miller","Nelson","Ortiz","Parker","Quinn","Reed","Sanders","Turner","Underwood","Vaughn","Walker","Young","Zimmerman","Brooks","Coleman","Dunn","Fisher","Grant","Hayes","Jordan","Knight","Lopez","Morgan","Nguyen","Okafor","Peterson","Romano","Silva","Thompson","Umeh","Volkov","Wang","Xu","Yates","Zhou","Bennett","Chukwu","Doyle","Eze","Ferreira","Gonzalez","Hansen","Ivanov","Jansen","Kumar","Larsen","Moreau","Novak","Osei","Patel","Quintero","Rossi","Schmidt","Tavares","Ueda","Vasquez","Weber","Xavier","Yamamoto","Ziegler","Adeyemi","Barlow","Costa","Diop","Eriksen","Fontaine","Gomez","Holmes","Ikram","Juma","Karlsson","Lawson","Mensah","Nilsson"],Ie=[{city:"Austin",country:"United States"},{city:"New York",country:"United States"},{city:"Seattle",country:"United States"},{city:"Los Angeles",country:"United States"},{city:"Chicago",country:"United States"},{city:"Boston",country:"United States"},{city:"San Diego",country:"United States"},{city:"Denver",country:"United States"},{city:"Miami",country:"United States"},{city:"Portland",country:"United States"},{city:"Toronto",country:"Canada"},{city:"Vancouver",country:"Canada"},{city:"Montreal",country:"Canada"},{city:"Calgary",country:"Canada"},{city:"Ottawa",country:"Canada"},{city:"London",country:"United Kingdom"},{city:"Manchester",country:"United Kingdom"},{city:"Birmingham",country:"United Kingdom"},{city:"Edinburgh",country:"United Kingdom"},{city:"Glasgow",country:"United Kingdom"},{city:"Bristol",country:"United Kingdom"},{city:"Liverpool",country:"United Kingdom"},{city:"Dublin",country:"Ireland"},{city:"Cork",country:"Ireland"},{city:"Paris",country:"France"},{city:"Lyon",country:"France"},{city:"Marseille",country:"France"},{city:"Berlin",country:"Germany"},{city:"Munich",country:"Germany"},{city:"Hamburg",country:"Germany"},{city:"Frankfurt",country:"Germany"},{city:"Amsterdam",country:"Netherlands"},{city:"Rotterdam",country:"Netherlands"},{city:"Brussels",country:"Belgium"},{city:"Antwerp",country:"Belgium"},{city:"Zurich",country:"Switzerland"},{city:"Geneva",country:"Switzerland"},{city:"Vienna",country:"Austria"},{city:"Rome",country:"Italy"},{city:"Milan",country:"Italy"},{city:"Florence",country:"Italy"},{city:"Madrid",country:"Spain"},{city:"Barcelona",country:"Spain"},{city:"Valencia",country:"Spain"},{city:"Lisbon",country:"Portugal"},{city:"Porto",country:"Portugal"},{city:"Stockholm",country:"Sweden"},{city:"Gothenburg",country:"Sweden"},{city:"Oslo",country:"Norway"},{city:"Copenhagen",country:"Denmark"},{city:"Helsinki",country:"Finland"},{city:"Reykjavik",country:"Iceland"},{city:"Warsaw",country:"Poland"},{city:"Krakow",country:"Poland"},{city:"Prague",country:"Czech Republic"},{city:"Athens",country:"Greece"},{city:"Sydney",country:"Australia"},{city:"Melbourne",country:"Australia"},{city:"Brisbane",country:"Australia"},{city:"Perth",country:"Australia"},{city:"Adelaide",country:"Australia"},{city:"Auckland",country:"New Zealand"},{city:"Wellington",country:"New Zealand"},{city:"Christchurch",country:"New Zealand"},{city:"Singapore",country:"Singapore"},{city:"Tokyo",country:"Japan"},{city:"Osaka",country:"Japan"},{city:"Kyoto",country:"Japan"},{city:"Seoul",country:"South Korea"},{city:"Busan",country:"South Korea"},{city:"Dubai",country:"United Arab Emirates"},{city:"Abu Dhabi",country:"United Arab Emirates"},{city:"Doha",country:"Qatar"},{city:"Tel Aviv",country:"Israel"},{city:"Taipei",country:"Taiwan"},{city:"Hong Kong",country:"Hong Kong"}],pe=["Great shopping experience","Easy checkout","Smooth ordering","Fast delivery","Excellent service","Very reliable store","Impressed with the site","Would shop again","Worth it","As advertised","Professional team","Quick response","Secure checkout","Clear communication","Trustworthy shop","Happy with my order","Simple and easy","Great customer service","Everything on time","No issues at all","Very professional","Highly recommended","Smooth transaction","Well organised","Pleasant experience","Top quality service","Efficient and quick","Great overall","Straightforward","Genuinely impressed","Seamless process","Responsive support","Delivered as promised","Exceptional experience","Reliable shipping","Five star service","Perfect order","Great communication","Honest shop","First class service","Very satisfied","Quick and easy","Professional all round","Better than expected","Zero hassle","A pleasure to shop","Consistently good","Outstanding support","Smooth all the way","Absolutely perfect"],G=[" shopping"," experience"," service"," process"," order"," delivery"," support"," checkout"," communication"," transaction"," shop"," site"," handling"," team"," packaging"," quality"," speed"," follow-up"," attention"," standard"," professionalism"," care"," results"," accuracy"," efficiency"," convenience"," presentation"," reliability"," trust"," customer care"," experience online"," store"," purchase"," every time"," overall"," end to end"," turnaround"," dealings"," execution"],Y=["Ordering on the website was straightforward and the checkout process went smoothly.","I placed my first order through the site and the whole experience was very pleasant.","The website was easy to use and placing the order took just a couple of minutes.","This was my first time shopping with them and I was genuinely impressed.","I ordered through the website and everything worked exactly as it should.","The online checkout was quick, secure, and completely painless.","I have ordered from many online shops and this experience stood out.","Setting up my account and placing the order was simple and clear.","The site made it very easy to find what I wanted and complete my purchase.","I was a little unsure at first, but the whole process turned out to be very professional.","From browsing to checkout, everything on the website was well organised.","I have used this online shop a few times now and it never disappoints.","The ordering process was quick and everything was confirmed instantly.","I appreciated how clear the website was about pricing, shipping, and delivery.","Placing my order was effortless and the confirmation came through right away.","The online shop handled my order professionally from start to finish.","It was my first international online order and it went perfectly.","The website checkout was smooth and I felt secure throughout.","I found the store easy to navigate and the order process very user friendly.","Everything from selection to payment was handled neatly and clearly."],T=["Shipping was faster than expected and the package arrived in perfect condition.","The parcel was well packed and arrived exactly when the tracking promised.","Customer service replied quickly and answered all my questions patiently.","Delivery was prompt and the courier was courteous and careful.","The order updates kept me informed at every stage of the journey.","My payment was processed securely and I received confirmation immediately.","The package arrived beautifully wrapped and completely intact.","I was kept updated throughout the whole delivery process.","The estimated delivery date was accurate and the order arrived on time.","Communication from the team was clear, friendly, and professional.","The packaging was sturdy and everything arrived in perfect shape.","It was dispatched quickly, well within the promised time.","The tracking worked perfectly and the delivery was smooth.","Customer support helped me quickly when I had a small question.","The whole transaction was handled efficiently and without any issues.","My order arrived earlier than the estimated date, which was a nice surprise.","The team processed my order quickly and kept me well informed.","The website kept me updated with clear order status throughout.","Delivery went exactly as scheduled and the item arrived safely.","I appreciated the fast dispatch and careful handling of my order.","Everything arrived as described and on the exact date promised.","The checkout confirmed my order instantly and the follow-up was excellent.","The support team responded to my query within minutes.","My package arrived in pristine condition with great packaging.","The order was handled with care from the moment I placed it.","Tracking updates were timely and the delivery was hassle free.","The team went out of their way to make sure everything was perfect.","It was a smooth, well managed order from start to finish.","The delivery arrived well within the window they promised.","Everything about the transaction was clear, honest, and professional.","My order was processed and shipped with impressive speed.","The customer service was responsive and genuinely helpful.","The package arrived exactly on schedule and in perfect condition.","They kept their promise on delivery time and the quality was clear.","The whole experience online was seamless and reassuring.","Every step, from payment to delivery, was handled perfectly.","The order status updates were clear and always accurate.","It was dispatched the same day and arrived quickly.","The shopping experience was smooth and completely trustworthy.","Their follow-up after delivery was thoughtful and professional."],ge=["I will definitely be shopping here again.","Would happily recommend this online shop to friends.","A five star experience from start to finish.","No hesitation in recommending them to others.","Very pleased with the whole experience.","I am glad I chose this shop for my order.","A really professional online store worth trusting.","Would not think twice about ordering again.","They have earned a loyal customer in me.","Highly recommended for anyone ordering online.","A great experience and I will be back.","Their service deserves every bit of praise.","I would confidently order from them again.","A genuinely pleasant shopping experience.","Five stars, no question about it.","They are now my go to online shop."],Ee={vehicle:["The vehicle was listed accurately and the delivery arrangement was handled very professionally by the shop.","The shop arranged safe delivery of the vehicle and kept me updated the whole way."],property:["The listing was accurate and the shop team guided me through the process smoothly.","The shop handled all the paperwork and communication professionally throughout."],phone:["The phone matched the description exactly and the shop dispatched it quickly and safely.","The shop confirmed all the device details before shipping and the packaging was excellent."],pet:["The shop handled the entire arrangement with care and kept me informed at every step.","All the paperwork was provided and the shop made the process very easy."],product:["The item matched the listing perfectly and the shop delivered it in great condition.","The shop processed and dispatched my order quickly with careful packaging."]},Pe=[{year:2018,w:3},{year:2019,w:7},{year:2020,w:11},{year:2021,w:13},{year:2022,w:15},{year:2023,w:16},{year:2024,w:15},{year:2025,w:12},{year:2026,w:8}],_t=Pe.reduce((e,t)=>e+t.w,0);function Lt(e){let t=e()*_t;for(const a of Pe){if(t<a.w)return a.year;t-=a.w}return 2024}function K(e,t,a,r){return(e+t*a)%r}function It(e,t={}){const a=String(e.property_id||e.id||"");if(!a)return{reviews:[],breakdown:{5:0,4:0,3:0,2:0,1:0},total:0,computedRating:0};const r=Le(a),i=187+r%660,s=Math.min(5,Math.max(1,Number(e.rating)||0))||4.5;let l=Math.max(.3,Math.min(.9,s/5)),d=1-l,o=.07,n=.04,u=.03;const g=1/(l+d+o+n+u);l*=g,d*=g,o*=g,n*=g,u*=g;const x=[l,d,o,n,u],y=e.listing_type==="vehicle"?"vehicle":e.listing_type==="property"?"property":e.listing_type==="pet"?"pet":String(e.category||"").toLowerCase().includes("phone")?"phone":"product",v=Ee[y]||Ee.product,m=[],b=ue.length*O.length,k=pe.length*G.length,q=Y.length*T.length*T.length*ge.length,M=137,C=457,P=811;for(let h=0;h<i;h++){const $=St(Le(a+"::"+h));let S=$(),H=5,U=0;for(let W=5;W>=1;W--)if(U+=x[5-W],S<=U){H=W;break}const F=K(r,h,C,b),Ve=ue[Math.floor(F/O.length)%ue.length],Ue=O[F%O.length],ze=`${Ve} ${Ue}`,fe=K(r,h,M,k),We=pe[Math.floor(fe/G.length)%pe.length]+G[fe%G.length];let I=K(r,h,P,q);const Oe=Y[I%Y.length];I=Math.floor(I/Y.length);const Ge=T[I%T.length];I=Math.floor(I/T.length);const Ye=T[I%T.length];I=Math.floor(I/T.length);const Ke=ge[I%ge.length];let z=`${Oe} ${Ge}`;h%3===0&&v.length&&(z+=` ${v[h%v.length]}`),h%2===0&&(z+=` ${Ye}`),z+=` ${Ke}`;const Je=Ie[K(r,h,337,Ie.length)],Ze=Date.now(),ve=Lt($),Qe=ve===2018?10+Math.floor($()*3):1+Math.floor($()*12),Xe=1+Math.floor($()*28),et=Date.UTC(ve,Qe-1,Xe),tt=new Date(Math.min(et,Ze)).toISOString();m.push({name:ze,location:Je.country,date:tt,rating:H,title:We,text:z,verified:!1,seeded:!0})}m.sort((h,$)=>h.date<$.date?1:-1);const p={5:0,4:0,3:0,2:0,1:0};let f=0;for(let h=5;h>=1;h--)p[h]=Math.round(i*x[5-h]),f+=p[h];const R=i-f;R!==0&&(p[R>0?5:1]+=R);let j=0;for(let h=5;h>=1;h--)j+=h*p[h];const de=j/i;return{reviews:m,breakdown:p,total:i,computedRating:de}}const _="/fallback.svg";function X(e){return Array.isArray(e)&&e.length>0?e:[_]}function Et(e,t="w-4 h-4"){const a=Math.round(Number(e)||0);return[1,2,3,4,5].map(r=>`<i data-lucide="star" class="${t} ${r<=a?"fill-amber-400 text-amber-400 drop-shadow-[0_1px_4px_rgba(0,0,0,.25)]":"text-gray-300"}"></i>`).join("")}function ee(e,t,a="blue"){const r={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"};return`
    <div class="flex items-center gap-2.5 mb-4">
      <div class="shrink-0 w-10 h-10 rounded-xl ${r[a]||r.blue} flex items-center justify-center"><i data-lucide="${e}" class="w-5 h-5"></i></div>
      <h3 class="text-lg font-black text-gray-900 tracking-tight">${t}</h3>
    </div>`}function qt(e){return`
    <div class="bg-gray-50 border border-gray-100 rounded-xl p-3.5">
      <div class="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5"><i data-lucide="${e.icon}" class="w-3.5 h-3.5"></i>${e.label}</div>
      <div class="text-gray-900 font-bold text-[15px] leading-snug">${c(e.value)}</div>
    </div>`}function J(e,t,a,r="blue"){return!a||!a.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${ee(t,e,r)}
      ${Re(a)}
    </div>`}function Re(e){return!e||!e.length?"":`<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">${e.map(qt).join("")}</div>`}function te(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${ee("list-checks","Features & Amenities","emerald")}
      ${He(e)}
    </div>`}function He(e){return!e||!e.length?"":`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
            <span class="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
            <span class="text-[15px] text-gray-800 font-medium">${c(t)}</span>
          </div>`).join("")}
      </div>`}function Tt(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${ee("star","Highlights","amber")}
      ${Fe(e)}
    </div>`}function Fe(e){return!e||!e.length?"":`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-start gap-2.5 bg-amber-50/60 border border-amber-100 rounded-xl px-3.5 py-2.5">
            <i data-lucide="badge-check" class="w-4 h-4 text-amber-500 mt-0.5 shrink-0"></i>
            <span class="text-[15px] text-gray-800 font-medium">${c(t)}</span>
          </div>`).join("")}
      </div>`}function me(e,t="emerald"){if(!e||!e.length)return"";const a={emerald:"bg-emerald-100 text-emerald-600",amber:"bg-amber-100 text-amber-600",blue:"bg-blue-100 text-blue-600",violet:"bg-violet-100 text-violet-600",rose:"bg-rose-100 text-rose-600"}[t]||"bg-emerald-100 text-emerald-600";return`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
    ${e.map(r=>`
      <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
        <span class="shrink-0 w-6 h-6 rounded-full ${a} flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
        <span class="text-[15px] text-gray-800 font-medium">${c(String(r))}</span>
      </div>`).join("")}
  </div>`}function At(e){const t=e.floor_plan&&typeof e.floor_plan=="object"?e.floor_plan:{},a=Array.isArray(t.rooms)?t.rooms:[];if(!(t.image||t.levels||t.total_area||a.length))return"";const r=a.length?`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-3">
      ${a.map(s=>{const l=typeof s=="string"?s:s.name||"Room",d=typeof s=="string"?"":s.dimensions||"";return`<div class="bg-gray-50 border border-gray-100 rounded-xl p-3">
          <p class="text-[15px] font-bold text-gray-900">${c(String(l))}</p>
          ${d?`<p class="text-xs text-gray-500 mt-0.5">${c(String(d))}</p>`:""}
        </div>`}).join("")}
    </div>`:"",i=[t.levels?`Levels: ${t.levels}`:"",t.total_area?`Total area: ${t.total_area}`:""].filter(Boolean);return`
    <div class="space-y-3">
      ${t.image?`<img src="${c(String(t.image))}" alt="Floor plan" class="w-full rounded-xl border border-gray-200 bg-gray-50" loading="lazy" onerror="this.style.display='none'">`:""}
      ${i.length?`<div class="flex flex-wrap gap-2">${i.map(s=>`<span class="inline-flex items-center gap-1 text-xs font-bold text-gray-700 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-full">${c(String(s))}</span>`).join("")}</div>`:""}
      ${r}
    </div>`}function Mt(e){const t=Array.isArray(e.legal_info)?e.legal_info:[],a=e.risk_notes;if(!t.length&&!a)return"";const r={"Seller provided":"bg-amber-50 text-amber-700 border-amber-200",Documented:"bg-blue-50 text-blue-700 border-blue-200","Not verified":"bg-gray-50 text-gray-600 border-gray-200"};return`
    <div class="space-y-2.5">
      ${t.map(i=>{const s=typeof i=="string"?i:i.label||"",l=typeof i=="string"?"":i.value||"",d=typeof i=="string"?"Not verified":i.source||"Not verified",o=r[d]||r["Not verified"],n=`${s}${l?": "+l:""}`;return`<div class="flex items-center justify-between gap-3 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
      <span class="text-[15px] text-gray-800 font-medium">${c(n)}</span>
      <span class="shrink-0 text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full border ${o}">${c(d)}</span>
    </div>`}).join("")||""}
      ${a?`<div class="bg-amber-50/60 border border-amber-200 rounded-xl p-3.5"><p class="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Condition / Risk Notes</p><p class="text-sm text-gray-700 leading-relaxed">${c(String(a))}</p></div>`:""}
      <p class="text-xs text-gray-400 leading-relaxed"><strong class="text-gray-500">Note:</strong> Legal and ownership details are provided by the seller for information only and have not been independently verified by the marketplace. Always confirm with the seller or a qualified professional before purchase.</p>
    </div>`}function Ct(e){const t=e.nearby_area&&typeof e.nearby_area=="object"?e.nearby_area:{},a=[{icon:"school",label:"Schools",items:t.schools},{icon:"cross",label:"Hospitals & Clinics",items:t.hospitals},{icon:"shopping-cart",label:"Shopping & Markets",items:t.shopping},{icon:"bus",label:"Transportation",items:t.transportation}].filter(i=>Array.isArray(i.items)&&i.items.length),r=Array.isArray(t.distances)?t.distances:[];return!a.length&&!r.length?"":`
    <div class="space-y-3">
      ${a.map(i=>`
        <div>
          <p class="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5"><i data-lucide="${i.icon}" class="w-3.5 h-3.5"></i> ${i.label}</p>
          <div class="flex flex-wrap gap-2">
            ${i.items.map(s=>`<span class="text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-full">${c(String(s))}</span>`).join("")}
          </div>
        </div>`).join("")}
      ${r.length?`<div><p class="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5"><i data-lucide="navigation" class="w-3.5 h-3.5"></i> Distances</p><div class="flex flex-wrap gap-2">${r.map(i=>`<span class="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full">${c(String(i))}</span>`).join("")}</div></div>`:""}
    </div>`}function jt(e){const t=e.verification_status||"Not verified",a={Verified:"bg-emerald-50 text-emerald-700 border-emerald-200","Pending verification":"bg-amber-50 text-amber-700 border-amber-200","Not verified":"bg-gray-50 text-gray-600 border-gray-200"}[t]||"bg-gray-50 text-gray-600 border-gray-200",r=Array.isArray(e.documents)?e.documents:[],i=[{icon:"shield-check",label:"Verification",value:t,badge:a},e.verification_date?{icon:"calendar-check",label:"Verification Date",value:e.verification_date}:null,e.inspection_info?{icon:"clipboard-check",label:"Inspection",value:e.inspection_info}:null].filter(Boolean);return`
    <div class="space-y-3">
      ${i.length?`<div class="space-y-2.5">${i.map(s=>`
        <div class="flex items-center justify-between gap-3 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
          <span class="flex items-center gap-2 text-sm text-gray-800 font-medium"><i data-lucide="${s.icon}" class="w-4 h-4 text-blue-500"></i> ${s.label}</span>
          ${s.badge?`<span class="shrink-0 text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full border ${s.badge}">${c(String(s.value))}</span>`:`<span class="text-sm text-gray-700 font-semibold">${c(String(s.value))}</span>`}
        </div>`).join("")}</div>`:""}
      ${r.length?`<div><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Documents</p><div class="space-y-1.5">${r.map(s=>`<a href="${c(String(s))}" target="_blank" rel="noopener" class="flex items-center gap-2 text-xs font-bold text-blue-600 hover:underline"><i data-lucide="file-text" class="w-3.5 h-3.5"></i> ${c(String(s))}</a>`).join("")}</div></div>`:""}
      <div class="flex flex-wrap gap-2">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full"><i data-lucide="lock" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Payment Protection</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-violet-700 bg-violet-50 border border-violet-200 px-2.5 py-1.5 rounded-full"><i data-lucide="file-check" class="w-3.5 h-3.5"></i> Purchase Agreement</span>
      </div>
      <p class="text-xs text-gray-400 leading-relaxed">Full purchase and booking terms are confirmed with the seller before any payment is completed.</p>
    </div>`}function Bt(e){if(e.listing_type!=="property")return"";const t=[],a=me(e.interior_features,"emerald"),r=me(e.exterior_features,"blue"),i=me(e.home_systems,"violet"),s=[a?`<div class="mb-4"><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Interior Features</p>${a}</div>`:"",r?`<div class="mb-4"><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Exterior Features</p>${r}</div>`:"",i?`<div><p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Home Systems</p>${i}</div>`:""].filter(Boolean).join("");s&&t.push(E("acc-features","home","Features & Home Systems",s,!1,"emerald"));const l=At(e);l&&t.push(E("acc-floorplan","layout-dashboard","Floor Plan",l,!1,"violet"));const d=Mt(e);d&&t.push(E("acc-legal","scale","Legal & Financial",d,!1,"amber"));const o=Ct(e);o&&t.push(E("acc-nearby","map-pin","Nearby Area",o,!1,"rose"));const n=jt(e);return n&&t.push(E("acc-trust","shield-check","Verification & Trust",n,!1,"blue")),t.join("")}function E(e,t,a,r,i=!1,s="blue"){const l={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"},d=l[s]||l.blue;return`
    <div class="bg-white border border-gray-200 rounded-2xl mb-3 overflow-hidden shadow-sm">
      <button type="button" data-acc="${e}" class="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left hover:bg-gray-50 transition active:bg-gray-100">
        <span class="flex items-center gap-3 min-w-0">
          <span class="shrink-0 w-10 h-10 rounded-xl ${d} flex items-center justify-center"><i data-lucide="${t}" class="w-5 h-5"></i></span>
          <span class="text-[15px] sm:text-base font-black text-gray-900 tracking-tight">${a}</span>
        </span>
        <span data-acc-icon="${e}" class="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${i?"rotate-180":""}">
          <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500"></i>
        </span>
      </button>
      <div data-acc-body="${e}" class="px-4 sm:px-5 pb-5 ${i?"":"hidden"}">
        ${r}
      </div>
    </div>`}window.toggleAccordion=e=>{const t=document.querySelector(`[data-acc-body="${e}"]`),a=document.querySelector(`[data-acc-icon="${e}"]`);!t||!a||(t.classList.toggle("hidden"),a.classList.toggle("rotate-180"))};function Pt(){return`
    <div class="space-y-3 text-[15px] text-gray-700 leading-relaxed">
      <p class="flex items-start gap-2.5"><i data-lucide="truck" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Shipping methods.</strong> Standard delivery is <strong>free worldwide</strong> (3–7 business days). Express (2–4 business days, $25) and Priority (1–2 business days, $50) are available at checkout.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Courier partners.</strong> We ship with trusted international couriers — DHL, FedEx, UPS and EMS. Every shipment gets a tracking number.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="clock" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Processing time.</strong> Orders are processed within 1–2 business days after payment confirmation. Bank-transfer orders are processed once the receipt is verified.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="globe" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">International delivery.</strong> We ship to over 200 countries. Customs duties and import taxes may apply and are the buyer's responsibility.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="search-check" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Tracking.</strong> You'll receive a shipping confirmation email with your tracking number. You can also track orders from your account dashboard.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="badge-help" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span>Questions? <a href="/shipping-policy.html" class="text-blue-600 font-bold hover:underline">Read the full Shipping Policy</a>.</span></p>
    </div>`}function Rt(){return`
    <div class="space-y-3 text-[15px] text-gray-700 leading-relaxed">
      <p class="flex items-start gap-2.5"><i data-lucide="rotate-ccw" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">14-day easy returns.</strong> Items may be returned within 14 days of delivery. Refund requests must be submitted within 30 days of the order date.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="calendar-x" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Cancellation before shipment.</strong> Cancel before your order ships and a full refund is issued within 5–7 business days.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package-x" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Damaged or defective.</strong> If your item arrives damaged, contact us within 7 days with photos — we arrange a replacement or full refund, including return shipping.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package-search" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Non-delivery.</strong> If your order doesn't arrive within the estimated window plus 14 days, we investigate with the carrier and refund or resend at no cost.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="wallet" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Refund processing.</strong> Approved refunds are processed within 5–7 business days. Card refunds take 5–10 business days to appear, bank transfers 7–14, mobile money 3–5.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="circle-slash" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Non-refundable.</strong> Final-sale items, digital products, and items used or damaged by the customer are not eligible for refunds.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="badge-help" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span>Questions? <a href="/refund-policy.html" class="text-blue-600 font-bold hover:underline">Read the full Return &amp; Refund Policy</a>.</span></p>
    </div>`}function Ht(){const e=[{q:"How do I track my order?",a:"Once your order ships you'll get a confirmation email with your tracking number. You can also track it anytime from your account dashboard under Shipping & Delivery."},{q:"Is shipping really free worldwide?",a:"Yes. Standard shipping to any country is free on every order. Express and Priority upgrades are available at checkout if you need it sooner."},{q:"How long does delivery take?",a:"Standard delivery takes 3–7 business days. Express takes 2–4 business days and Priority 1–2 business days. Processing adds 1–2 business days after payment is confirmed."},{q:"How do returns work?",a:"Items can be returned within 14 days of delivery. Refund requests must be submitted within 30 days of the order date — see the Return &amp; Refund Policy section above."}],t=[{q:"Is my payment secure?",a:"Yes. All payments are processed over SSL-encrypted connections through certified payment gateways. Your payment details are never stored on our servers in plain text."},{q:"Can I cancel my order before it ships?",a:"Absolutely. Cancel before shipment and a full refund is issued within 5–7 business days to your original payment method."},{q:"What if my item arrives damaged?",a:"Contact us within 7 days of delivery with photos and a description. We'll arrange a replacement or a full refund — including return shipping costs."},{q:"How do I contact customer support?",a:"Email us at support@weverseonlineshop.com or use the Contact page. Our team reviews every message within 48 hours."},{q:"Do you ship to my country?",a:"We ship to over 200 countries worldwide. Customs duties and import taxes, where applicable, are the buyer's responsibility."},{q:"How do I request a refund?",a:"Email support@weverseonlineshop.com with your order number, the reason, and any supporting documentation. Approved refunds are processed within 5–7 business days."}],a=r=>`
    <div class="border border-gray-100 rounded-xl overflow-hidden">
      <button type="button" data-acc="faq" class="faq-q w-full flex items-center justify-between gap-3 p-3.5 text-left hover:bg-gray-50 transition">
        <span class="text-[14px] font-bold text-gray-900">${c(r.q)}</span>
        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300"></i>
      </button>
      <div class="faq-a hidden px-3.5 pb-3.5 text-sm text-gray-600 leading-relaxed">${c(r.a)}</div>
    </div>`;return`
    <div class="space-y-2">
      ${e.map(a).join("")}
      <div class="faq-extra hidden space-y-2">${t.map(a).join("")}</div>
      <button type="button" id="faq-show-more" class="mt-2 w-full inline-flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-blue-600 font-bold py-2.5 rounded-xl text-sm transition">
        Show more questions <i data-lucide="chevron-down" class="w-4 h-4"></i>
      </button>
    </div>`}function ae(e,t,a,r,i,s=""){const l=e.listing_type==="property",d=`
    <p class="text-[15px] sm:text-base text-gray-700 leading-relaxed">${c(e.description||"")}</p>
    ${i||""}
    ${Fe(r)}
    ${He(a)}`;return`
    ${E("acc-details","file-text",l?"Property Details":"Product Details",d,!0,"blue")}
    ${E("acc-specs","settings-2",l?"Property Specifications":"Specifications",Re(t)||'<p class="text-sm text-gray-500">No specifications available for this listing.</p>',!0,"violet")}
    ${s||""}
    ${E("acc-shipping","truck","Shipping Information",Pt(),!1,"emerald")}
    ${E("acc-refund","rotate-ccw","Return &amp; Refund Policy",Rt(),!1,"rose")}
    ${E("acc-faq","circle-help","Frequently Asked Questions",Ht(),!1,"amber")}`}function re(){const e=document.getElementById("details-content");if(!e)return;e.querySelectorAll("[data-acc]").forEach(a=>{a.dataset.bound||(a.dataset.bound="1",a.addEventListener("click",()=>{const r=a.dataset.acc,i=e.querySelector(`[data-acc-body="${r}"]`),s=e.querySelector(`[data-acc-icon="${r}"]`);!i||!s||(i.classList.toggle("hidden"),s.classList.toggle("rotate-180"),window.lucide&&lucide.createIcons())}))}),e.querySelectorAll(".faq-q").forEach(a=>{a.dataset.bound||(a.dataset.bound="1",a.addEventListener("click",()=>{const r=a.querySelector("i, svg"),i=a.nextElementSibling;i&&(i.classList.toggle("hidden"),r&&r.classList.toggle("rotate-180"))}))});const t=e.querySelector("#faq-show-more");t&&!t.dataset.bound&&(t.dataset.bound="1",t.addEventListener("click",()=>{const a=e.querySelector(".faq-extra");if(!a)return;a.classList.toggle("hidden");const r=t.querySelector("i, svg");r&&r.classList.toggle("rotate-180"),t.innerHTML=a.classList.contains("hidden")?'Show more questions <i data-lucide="chevron-down" class="w-4 h-4"></i>':'Show fewer questions <i data-lucide="chevron-up" class="w-4 h-4"></i>',window.lucide&&lucide.createIcons()}))}function qe(e){const t=e.name||e.profiles?.full_name||"Anonymous",a=c(t.trim().charAt(0).toUpperCase()||"A"),r=e.location?`<span class="text-xs text-gray-400">&middot; ${c(e.location)}</span>`:"",i=e.title?`<p class="text-sm font-bold text-gray-900 mt-1">${c(e.title)}</p>`:"",s=e.verified?'<span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full"><i data-lucide="badge-check" class="w-3 h-3"></i> Verified Purchase</span>':"",l=e.review_photo?`<div class="mt-2.5"><img src="${c(e.review_photo)}" alt="Customer photo" class="w-28 h-28 object-cover rounded-xl border border-gray-200" loading="lazy" onerror="this.style.display='none'"></div>`:"";return`
    <div class="flex gap-3 py-4 border-b border-gray-100 last:border-0">
      <div class="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-black uppercase shadow-sm">${a}</div>
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-sm font-bold text-gray-900">${c(t)}</span>${r}
          ${s}
          <span class="text-xs text-gray-400">${new Date(e.date||e.created_at).toLocaleDateString()}</span>
        </div>
        <div class="flex gap-0.5 mt-1">${[1,2,3,4,5].map(d=>`<i data-lucide="star" class="w-3.5 h-3.5 ${d<=(e.rating||0)?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}</div>
        ${i}
        <p class="text-[15px] text-gray-700 leading-relaxed mt-1.5">${c(e.text||e.comment||"")}</p>
        ${l}
      </div>
    </div>`}function ie(e){const t=encodeURIComponent(window.location.pathname+window.location.search);return`
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
                <p class="text-xs text-amber-700 leading-relaxed">Only customers with a ${lt} account can post reviews — this keeps our reviews real and verified. It takes less than a minute, and once you're signed in you can rate the product, write your review and even add a photo.</p>
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
    </div>`}function Ft(e,t,a){const r=Math.max(1,a);return`
    <div class="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 items-center bg-gray-50 border border-gray-100 rounded-2xl p-4">
      ${[5,4,3,2,1].map(i=>{const s=t[i]||0,l=Math.round(s/r*100);return`
        <div class="flex items-center gap-1.5 text-xs text-gray-600 font-semibold"><i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>${i}</div>
        <div class="flex items-center gap-2">
          <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden"><div class="h-full bg-amber-400 rounded-full" style="width:${l}%"></div></div>
          <span class="text-[11px] text-gray-400 w-9 text-right tabular-nums">${l}%</span>
        </div>`}).join("")}
    </div>`}function Nt(){return new URLSearchParams(window.location.search).get("id")}const B=[...Be];function Te(e){return B.find(t=>t.property_id===e)||null}let be=null;function Dt(){return be||(be=it(()=>st(()=>at(()=>import("./motorhome-data-CupbOvk0--c7gbSNU--c7gbSNU.js"),[]),[]).then(e=>e.c),[]).then(e=>{const t=e.PRODUCT_EXTRA_LISTINGS||[];for(const a of t)B.some(r=>r.property_id===a.property_id)||B.push(a);return B}).catch(()=>B)),be}function Vt(e){const t=document.getElementById("details-content"),a=pt(e),r=X(e.images).map((n,u)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${u===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${c(n)}">
      <img src="${c(n)}" alt="View ${u+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${_}'">
    </button>`).join(""),i=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cargo Area / Truck Bed","Engine","Wheels / Tires","Additional View"],s=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"package",label:"Payload Capacity",value:e.payload_capacity},{icon:"link",label:"Towing Capacity",value:e.towing_capacity},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(n=>n.value!=null&&n.value!==""&&n.value!=="N/A");te(e.features);const l=ie();t.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${c(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${c(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${c(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${c(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${_}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${i[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${r}
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
      ${ae(e,s,e.features,null,null)}

      ${l}

      ${se(e)}

      ${ne()}
    </div>
  `;const d=document.getElementById("hero-image"),o=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((n,u)=>{n.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.add("border-gray-200")),n.classList.add("active","border-blue-500"),n.classList.remove("border-gray-200"),d.src=n.dataset.img,o.textContent=i[u]||`View ${u+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await A()?window.location.href=`/checkout.html?id=${e.property_id}`:(D(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Q(e)}),le(e),oe(e),V(e),re(),window.lucide&&lucide.createIcons()}function Ut(e){const t=document.getElementById("details-content"),a=Z(e),r=X(e.images).map((n,u)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${u===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${c(n)}">
      <img src="${c(n)}" alt="View ${u+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${_}'">
    </button>`).join(""),i=["Exterior Front","Exterior Side","Exterior Rear","Living Area","Kitchen","Bedroom","Bathroom","Additional View"],s=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(n=>n.value!=null&&n.value!==""&&n.value!=="N/A");te(e.features);const l=ie();t.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${c(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${c(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${c(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${c(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${_}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${i[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${r}
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
      ${ae(e,s,e.features,null,null)}

      ${l}

      ${se(e)}

      ${ne()}
    </div>
  `;const d=document.getElementById("hero-image"),o=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((n,u)=>{n.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.add("border-gray-200")),n.classList.add("active","border-blue-500"),n.classList.remove("border-gray-200"),d.src=n.dataset.img,o.textContent=i[u]||`View ${u+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await A()?window.location.href=`/checkout.html?id=${e.property_id}`:(D(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Q(e)}),le(e),oe(e),V(e),re(),window.lucide&&lucide.createIcons()}function zt(e){const t=document.getElementById("details-content"),a=Z(e),r=X(e.images).map((n,u)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${u===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${c(n)}">
      <img src="${c(n)}" alt="View ${u+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${_}'">
    </button>`).join(""),i=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cabin / Interior","Wheels / Tires","Additional View"],s=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(n=>n.value!=null&&n.value!==""&&n.value!=="N/A");te(e.features);const l=ie();t.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${c(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${c(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${c(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${c(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${_}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${i[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${r}
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
      ${ae(e,s,e.features,null,null)}

      ${l}

      ${se(e)}

      ${ne()}
    </div>
  `;const d=document.getElementById("hero-image"),o=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((n,u)=>{n.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.add("border-gray-200")),n.classList.add("active","border-blue-500"),n.classList.remove("border-gray-200"),d.src=n.dataset.img,o.textContent=i[u]||`View ${u+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await A()?window.location.href=`/checkout.html?id=${e.property_id}`:(D(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Q(e)}),le(e),oe(e),V(e),re(),window.lucide&&lucide.createIcons()}function Wt(e){const t=e.listing_type==="property",a=t?"Share Property":"Share",r=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`,i=t?'<a href="#listing-map" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-bold py-3 rounded-xl transition text-sm"><i data-lucide="map-pin" class="w-5 h-5"></i> View Map</a>':"",s=t?`
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
        ${i}
      </div>
      ${t?`<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">${s}</div>`:""}
    </div>
  `}function se(e){const t=e.listing_type==="property",a=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`;return`
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
    </div>`}function ne(){return`
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
      </div>`}function Ot(e){const t=new Map,a=r=>(r||[]).forEach(i=>{i&&i.property_id&&t.set(i.property_id,i)});return a(ot),a(gt),a(mt),a(ht),a(yt),a($t),a(Be),a(B),a(nt()),ct(e.category||e.subcategory),[...t.values()].filter(r=>r.property_id!==e.property_id)}function Gt(e,t){let a=0;const r=n=>String(n||"").trim().toLowerCase();e.listing_type&&e.listing_type===t.listing_type&&(a+=40),e.category&&r(e.category)===r(t.category)&&(a+=30),e.subcategory&&r(e.subcategory)===r(t.subcategory)&&(a+=20),e.brand&&r(e.brand)===r(t.brand)&&(a+=15),e.breed&&r(e.breed)===r(t.breed)&&(a+=15),e.model&&r(e.model)===r(t.model)&&(a+=10),e.property_type&&r(e.property_type)===r(t.property_type)&&(a+=15);const i=parseFloat(e.price)||0,s=parseFloat(t.price)||0;if(i>0&&s>0){const n=Math.min(i,s)/Math.max(i,s);n>=.8?a+=10:n>=.6?a+=6:n>=.4&&(a+=3)}e.country_code&&e.country_code===t.country_code&&(a+=5);const l=new Set(r(e.title).split(/[^a-z0-9]+/).filter(n=>n.length>2)),d=new Set(r(t.title).split(/[^a-z0-9]+/).filter(n=>n.length>2));let o=0;return l.forEach(n=>{d.has(n)&&o++}),a+=Math.min(o*2,10),a}function he(e,t){const a=document.getElementById(e);if(!a)return;const r=a.querySelector(".rel-grid");if(!r)return;if(!t.length){a.classList.add("hidden");return}a.classList.remove("hidden"),r.innerHTML="";const i=document.createDocumentFragment();t.slice(0,10).forEach(s=>{const l=document.createElement("div");l.className="shrink-0 w-[260px] sm:w-[320px] snap-start";const d=vt(s);d.style.width="100%",l.appendChild(d),i.appendChild(l)}),r.appendChild(i),window.lucide&&lucide.createIcons()}function le(e){const t=Ot(e),a=t.map(o=>({item:o,score:Gt(e,o)})).sort((o,n)=>n.score-o.score||(n.item.rating||0)-(o.item.rating||0)),r=a.filter(o=>o.score>=35).map(o=>o.item),i=new Set(r.map(o=>o.property_id)),s=a.filter(o=>o.score>=15&&o.score<35&&!i.has(o.item.property_id)).map(o=>o.item),l=[...t].filter(o=>!i.has(o.property_id)).sort((o,n)=>(n.rating||0)-(o.rating||0)).slice(0,10),d=a.filter(o=>!i.has(o.item.property_id)).map(o=>o.item);he("similar-section",r.length?r:d.slice(0,10)),he("related-section",s.length?s:d.slice(0,10)),he("recommended-section",l.length?l:d.slice(0,10))}function Yt(e){const t=document.getElementById("details-content"),a=e.listing_type==="property",r=Z(e),i=we(e.country_code),s=e.listing_type==="product"?"Product ID":a?"Property ID":"Listing ID";let l="",d="",o=parseFloat(e.real_price);if((!Number.isFinite(o)||o<=0)&&(o=parseFloat(e.compare_at_price??e.original_price)),Number.isFinite(o)&&o>0&&o>parseFloat(e.price)){const p=Math.round((1-parseFloat(e.price)/o)*100);l=`<span class="text-lg text-gray-400 price-strike line-through font-medium">${Z({...e,price:o})}</span>`,d=`<span class="inline-flex items-center gap-1 text-xs font-black text-white bg-red-500 px-2 py-1 rounded-full">-${p}% OFF</span>`}const n=e.availability_status||(e.listing_type==="product"?"In Stock":"Available"),u=X(e.images),g=u.map((p,f)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${f===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${c(p)}">
      <img src="${c(p)}" alt="View ${f+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${_}'">
    </button>`).join("");let x="";if(a){const p=[{icon:"globe",label:"Country",value:`${i} ${e.country}`},{icon:"map-pin",label:"State / Province",value:e.state},{icon:"building",label:"City",value:e.city},{icon:"navigation",label:"Town / Local Area",value:e.town}].filter(f=>f.value);x=`
      <div class="mt-4">
        ${ee("map-pin","Location","rose")}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${p.map(f=>`
            <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
              <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="${f.icon}" class="w-4 h-4 text-blue-500"></i></div>
              <div><div class="text-gray-500 text-xs">${f.label}</div><div class="text-gray-900 font-bold text-[15px]">${f.value}</div></div>
            </div>
          `).join("")}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-200" style="height:280px"></div>
      </div>`}let y=[];a?(y=[{icon:"bed-double",label:"Bedrooms",value:e.bedrooms},{icon:"bath",label:"Bathrooms",value:e.bathrooms},{icon:"droplets",label:"Half Bathrooms",value:e.half_bathrooms},{icon:"building",label:"Building / Living Size",value:e.building_size},{icon:"ruler",label:"Land / Lot Size",value:e.land_size},{icon:"layers",label:"Floors / Levels",value:e.floors},{icon:"car-front",label:"Parking Spaces",value:e.parking_spaces},{icon:"warehouse",label:"Garage",value:e.garage},{icon:"home",label:"Property Type",value:e.property_type},{icon:"sofa",label:"Furnished",value:e.furnished},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"calendar",label:"Year Built",value:e.year_built},{icon:"paintbrush",label:"Year Renovated",value:e.year_renovated},{icon:"mail",label:"ZIP / Postal Code",value:e.zip_code},{icon:"tag",label:"Status",value:e.listing_status==="rent"?"For Rent":"For Sale"}].filter(p=>p.value!=null&&p.value!==""),J("Property Information","home",y)):e.category==="Motorhomes"?(y=[{icon:"factory",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank}].filter(p=>p.value!=null&&p.value!==""),J("Vehicle Information","bus",y,"violet")):e.listing_type==="product"?(y=[{icon:"factory",label:"Brand",value:e.brand},{icon:"tag",label:"Subcategory",value:e.subcategory},{icon:"palette",label:"Colour",value:e.color},{icon:"ruler",label:"Size",value:e.size},{icon:"layers",label:"Material",value:e.material},{icon:"badge-check",label:"Condition",value:e.condition||"New"},{icon:"shield-check",label:"Warranty",value:e.warranty},{icon:"package-check",label:"Availability",value:e.availability_status}].filter(p=>p.value!=null&&p.value!==""),J("Product Information","package",y)):e.listing_type==="pet"&&(y=[{icon:"paw-print",label:"Breed",value:e.breed},{icon:"calendar",label:"Age",value:e.age},{icon:"users",label:"Gender",value:e.gender},{icon:"palette",label:"Colour",value:e.color},{icon:"scale",label:"Weight",value:e.size},{icon:"globe",label:"Origin",value:`${we(e.country_code)} ${e.country}`},{icon:"badge-check",label:"Health",value:e.condition}].filter(p=>p.value!=null&&p.value!==""),J("Pet Information","paw-print",y,"amber")),te(e.features),Tt(e.highlights);const v=ie();t.innerHTML=`
    <div class="fade-in">
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>${e.category}</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${c(e.title)}</span>
      </div>

      <div class="mb-5">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">${c(e.title)}</h1>
        <div class="flex flex-wrap items-center gap-2 mt-2.5">
          ${a?e.verification_status==="Verified"?'<span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified</span>':e.verification_status==="Pending verification"?'<span class="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full"><i data-lucide="clock" class="w-3.5 h-3.5"></i> Pending Verification</span>':'<span class="inline-flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full"><i data-lucide="shield-alert" class="w-3.5 h-3.5"></i> Not Verified</span>':'<span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified</span>'}
          <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full"><i data-lucide="box" class="w-3.5 h-3.5"></i> ${s}: <span class="font-mono">${c(e.property_id)}</span></span>
          <span class="inline-flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">${e.listing_status==="rent"?"For Rent":"For Sale"}</span>
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-4 bg-gradient-to-br from-blue-50 via-white to-white border border-blue-100 rounded-2xl p-5 mb-6">
        <div>
          <div class="flex items-baseline flex-wrap gap-2">
            ${l}
            <span class="text-4xl font-black text-blue-600">${r}</span>
          </div>
          <div class="flex items-center gap-2 mt-1.5">
            ${d}
            <span class="text-sm text-emerald-600 font-bold flex items-center gap-1"><i data-lucide="package-check" class="w-4 h-4"></i> ${n}</span>
          </div>
        </div>
        <div class="flex flex-col gap-1.5 text-sm">
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="truck" class="w-4 h-4 text-blue-500"></i> Free worldwide shipping</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="rotate-ccw" class="w-4 h-4 text-blue-500"></i> Easy returns within 14 days</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="lock" class="w-4 h-4 text-blue-500"></i> Secure payment protection</span>
        </div>
      </div>

      <div id="hero-wrap" class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 cursor-zoom-in group" role="button" tabindex="0" aria-label="Open image gallery">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${_}'">
        <div class="absolute inset-0 flex items-end justify-between p-3 opacity-0 group-hover:opacity-100 transition pointer-events-none">
          <span class="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-black/50 backdrop-blur px-3 py-1.5 rounded-full"><i data-lucide="expand" class="w-3.5 h-3.5"></i> Tap to enlarge</span>
        </div>
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${g}
      </div>

      ${Wt(e)}

      <div id="listing-details">
        ${ae(e,y,e.features,e.highlights,x,Bt(e))}
      </div>

      ${v}

      ${a?se(e):""}

      <div id="recommendations-section" class="hidden">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">You May Also Like</h3>
        <div id="recommendations-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>

      ${ne()}
    </div>
  `;const m=document.getElementById("hero-image"),b=document.getElementById("hero-wrap");if(b){const p=()=>Kt(e,u);b.addEventListener("click",p),b.addEventListener("keydown",f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),p())})}t.querySelectorAll(".gallery-thumb").forEach(p=>{p.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(f=>f.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(f=>f.classList.add("border-gray-200")),p.classList.add("active","border-blue-500"),p.classList.remove("border-gray-200"),m.src=p.dataset.img})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await A()?window.location.href=`/checkout.html?id=${e.property_id}`:(D(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Q(e)});const k=document.getElementById("request-viewing-btn");k&&k.addEventListener("click",()=>Ae(e,"viewing"));const q=document.getElementById("request-info-btn");q&&q.addEventListener("click",()=>Ae(e,"info"));const M=document.getElementById("view-details-btn");M&&M.addEventListener("click",()=>{const p=document.getElementById("listing-details");p&&p.scrollIntoView({behavior:"smooth",block:"start"})});const C=document.getElementById("add-cart-btn");C&&C.addEventListener("click",()=>{xt(e.property_id,1),C.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Added to Cart',window.lucide&&lucide.createIcons(),setTimeout(()=>{C.innerHTML='<i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart',window.lucide&&lucide.createIcons()},2e3)}),Zt(e),oe(e),V(e),Xt(e),re(),window.lucide&&lucide.createIcons(),e.property_id,e.title,parseFloat(e.price),e.currency;const P=document.getElementById("listing-map");if(P&&window.L){const p=parseFloat(e.latitude)||null,f=parseFloat(e.longitude)||null,R=[e.product_location,e.town,e.city,e.state,e.country].filter(Boolean).join(", ")||e.title,j=[e.product_location,e.town,e.city,e.state,e.country].filter(Boolean).join(", "),de="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(j||e.title),h=(S,H,U)=>{const F=L.map(P).setView([S,H],U);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(F),L.marker([S,H]).addTo(F).bindPopup(`<strong>${c(e.title)}</strong><br>${c(R)}`).openPopup()},$=()=>{P.innerHTML=`<div class="w-full h-full flex flex-col items-center justify-center gap-2 bg-gray-50 text-center p-4">
        <i data-lucide="map-pin" class="w-6 h-6 text-gray-400"></i>
        <p class="text-xs text-gray-500">Exact map position not available for this location.</p>
        <a href="${de}" target="_blank" rel="noopener" class="text-xs font-bold text-blue-600 hover:underline">Open location in Google Maps</a>
      </div>`,window.lucide&&lucide.createIcons()};p&&f?h(p,f,13):j?fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(j)).then(S=>S.json()).then(S=>{S&&S[0]?h(parseFloat(S[0].lat),parseFloat(S[0].lon),12):$()}).catch($):$()}}function Kt(e,t){const a=(Array.isArray(t)&&t.length?t:[e.images?.[0]||_]).filter(Boolean);if(!a.length)return;let r=0;const i=document.createElement("div");i.id="gallery-lightbox",i.className="fixed inset-0 z-[500] bg-black/95 flex flex-col",i.innerHTML=`
    <style>
      #gallery-lightbox .lb-img{transition:opacity .18s ease}
      #gallery-lightbox .lb-img.lb-fade{opacity:0}
    </style>
    <div class="flex items-center justify-between px-4 py-3 text-white">
      <span class="text-xs font-bold text-gray-300 truncate">${c(e.title)}</span>
      <button type="button" id="lb-close" class="shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white" aria-label="Close">✕</button>
    </div>
    <div id="lb-viewport" class="relative flex-1 flex items-center justify-center overflow-hidden select-none">
      <img id="lb-img" src="" alt="Gallery" class="lb-img max-w-full max-h-full object-contain px-4" draggable="false">
      <button type="button" id="lb-prev" class="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center text-2xl" aria-label="Previous">‹</button>
      <button type="button" id="lb-next" class="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center text-2xl" aria-label="Next">›</button>
    </div>
    <div class="px-4 py-3 flex items-center justify-between gap-3 text-white">
      <span id="lb-count" class="shrink-0 text-xs font-bold text-gray-300"></span>
      <div id="lb-thumbs" class="flex gap-1.5 overflow-x-auto scrollbar-none justify-end"></div>
    </div>
  `,document.body.appendChild(i),document.body.style.overflow="hidden";const s=i.querySelector("#lb-img"),l=i.querySelector("#lb-count"),d=i.querySelector("#lb-thumbs");let o=null;const n=()=>{s.classList.add("lb-fade"),setTimeout(()=>{s.src=a[r],s.onerror=()=>{s.onerror=null,s.src=_},s.classList.remove("lb-fade"),l.textContent=`${r+1} / ${a.length}`,d.innerHTML=a.map((m,b)=>`<button type="button" data-i="${b}" class="w-12 h-9 rounded-lg overflow-hidden border-2 ${b===r?"border-blue-500":"border-transparent"}" aria-label="Image ${b+1}"><img src="${c(m)}" class="w-full h-full object-cover" onerror="this.style.display='none'"></button>`).join(""),d.querySelectorAll("[data-i]").forEach(m=>m.addEventListener("click",()=>{r=parseInt(m.dataset.i,10),n()}))},90)},u=()=>{r=(r-1+a.length)%a.length,n()},g=()=>{r=(r+1)%a.length,n()},x=()=>{i.remove(),document.body.style.overflow="",document.removeEventListener("keydown",y)},y=m=>{m.key==="Escape"?x():m.key==="ArrowLeft"?u():m.key==="ArrowRight"&&g()};i.querySelector("#lb-close").addEventListener("click",x),i.querySelector("#lb-prev").addEventListener("click",u),i.querySelector("#lb-next").addEventListener("click",g);const v=i.querySelector("#lb-viewport");v.addEventListener("touchstart",m=>{o=m.touches[0].clientX},{passive:!0}),v.addEventListener("touchend",m=>{if(o==null)return;const b=m.changedTouches[0].clientX-o;Math.abs(b)>40&&(b<0?g():u()),o=null},{passive:!0}),v.addEventListener("click",m=>{m.target===v&&x()}),document.addEventListener("keydown",y),n()}function Ae(e,t){const a=t==="viewing",r=e.property_id||e.id||"",i=document.createElement("div");i.id="property-request-modal",i.className="fixed inset-0 z-[450] flex items-end sm:items-center justify-center p-0 sm:p-4",i.innerHTML=`
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
          <p class="text-xs text-gray-500 mt-0.5 truncate">${c(e.title)}</p>
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
  `,document.body.appendChild(i),document.body.style.overflow="hidden",A().then(l=>{if(l){const d=i.querySelector("#prq-name"),o=i.querySelector("#prq-email"),n=l.user_metadata||{};n?.full_name&&d&&!d.value&&(d.value=n.full_name),l.email&&o&&!o.value&&(o.value=l.email)}});const s=()=>{i.remove(),document.body.style.overflow=""};i.querySelectorAll("[data-req-close]").forEach(l=>l.addEventListener("click",s)),i.addEventListener("submit",async l=>{l.preventDefault();const d=i.querySelector("#prq-submit"),o=i.querySelector("#prq-status"),n=i.querySelector("#prq-name").value.trim(),u=i.querySelector("#prq-email").value.trim(),g=i.querySelector("#prq-phone")?.value.trim()||"",x=i.querySelector("#prq-date")?.value||"",y=i.querySelector("#prq-message").value.trim();d.disabled=!0,d.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i> Sending...',window.lucide&&lucide.createIcons();try{let v=null;try{v=(await w.auth.getUser()).data?.user?.id||null}catch{}const m=a?"Request Viewing":"Request More Information",b=[r&&`Property: ${r}`,g&&`Phone: ${g}`,x&&`Preferred date: ${x}`,y].filter(Boolean).join(" | "),{error:k}=await w.from("site_feedback").insert({user_id:v,name:n,email:u,rating:5,feedback:`${m} (${e.title}): ${b}`,is_approved:!1});if(k)throw new Error(k.message);try{await fetch("https://wttnvwpoqmbxryivcerf.supabase.co/functions/v1/send-auth-email",{method:"POST",headers:{Authorization:"Bearer sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa","Content-Type":"application/json"},body:JSON.stringify({type:"contact_form",name:n,email:u,subject:`${m} — ${e.title}`,message:b})})}catch{}o.className="text-center text-sm py-3 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200",o.textContent=a?"Viewing request sent! We'll confirm your appointment within 24 hours.":"Request sent! We'll get back to you within 24 hours.",o.classList.remove("hidden"),setTimeout(s,1800)}catch{o.className="text-center text-sm py-3 rounded-xl bg-red-50 text-red-600 border border-red-200",o.textContent="Failed to send. Please email support@weverseonlineshop.com directly.",o.classList.remove("hidden"),d.disabled=!1,d.innerHTML=a?"Request Viewing":"Send Request",window.lucide&&lucide.createIcons()}})}let N=0,Me=!1;function Jt(){if(Me)return;Me=!0;const e=document.createElement("style");e.textContent="@keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}",document.head.appendChild(e)}function ye(e,t){if(!e)return;Jt(),e.innerHTML=`<i data-lucide="heart" class="w-5 h-5 ${t?"fill-red-500 text-red-500":""}"></i>`,e.classList.toggle("bg-red-50",t),e.classList.toggle("border",t),e.classList.toggle("border-red-200",t);const a=e.querySelector("span");a&&(a.textContent=t?"Saved to Wishlist":"Add to Wishlist"),window.lucide&&lucide.createIcons();const r=e.querySelector("i");r&&(r.style.animation="none",r.offsetWidth,r.style.animation="kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)",setTimeout(()=>{r&&(r.style.animation="")},550))}async function Zt(e){const t=document.getElementById("wishlist-btn");if(!t)return;const a=await A();if(!a){t.addEventListener("click",()=>{D(window.location.pathname+window.location.search),window.location.href=`/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`});return}const{data:r,error:i}=await w.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(i){console.error("Wishlist check failed:",i.message);return}r&&ye(t,!0),t.addEventListener("click",async()=>{const{data:s,error:l}=await w.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(l){console.error("Wishlist toggle failed:",l.message);return}if(s){const{error:d}=await w.from("wishlist").delete().eq("id",s.id);if(d){console.error("Wishlist delete failed:",d.message);return}ye(t,!1)}else{const{error:d}=await w.from("wishlist").insert({user_id:a.id,listing_id:e.id});if(d){console.error("Wishlist insert failed:",d.message);return}ye(t,!0)}})}async function oe(e){const t=document.getElementById("review-form");if(!t)return;const a=await A();if(!a){t.classList.add("hidden");const o=document.getElementById("review-guest-box"),n=document.getElementById("review-guest-btn"),u=document.getElementById("review-guest-msg");o&&o.classList.remove("hidden"),n&&u&&n.addEventListener("click",()=>{u.classList.remove("hidden"),n.innerHTML='<i data-lucide="lock" class="w-4 h-4"></i> Sign in to write a review',window.lucide&&window.lucide.createIcons()});return}t.classList.remove("hidden");const r=document.getElementById("review-guest-box");r&&r.classList.add("hidden"),document.querySelectorAll(".star-btn").forEach(o=>{o.addEventListener("click",()=>{N=parseInt(o.dataset.rating,10),document.querySelectorAll(".star-btn").forEach((n,u)=>{const g=n.querySelector("i, svg");g&&(u<N?(g.classList.add("fill-amber-400","text-amber-400"),g.classList.remove("text-gray-300")):(g.classList.remove("fill-amber-400","text-amber-400"),g.classList.add("text-gray-300")))})})});const i=document.getElementById("review-photo-input"),s=document.getElementById("review-photo-preview");let l=null;i&&i.addEventListener("change",()=>{if(l=i.files&&i.files[0],!!s&&(s.innerHTML="",l)){const o=URL.createObjectURL(l);s.innerHTML=`<span class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg px-2.5 py-1"><img src="${o}" alt="" class="w-5 h-5 rounded object-cover">${c(l.name)}</span>`}});const d=document.getElementById("review-submit-msg");t.addEventListener("submit",async o=>{o.preventDefault();const n=document.getElementById("review-text").value.trim();if(!N){alert("Please select a rating.");return}if(!n){alert("Please write a review.");return}const u=t.querySelector('button[type="submit"]'),g=u.innerHTML;u.disabled=!0,u.innerHTML='<span class="inline-block animate-spin">⏳</span> Submitting…';let x=null;if(l){const v=(l.name.split(".").pop()||"jpg").toLowerCase().replace(/[^a-z0-9]/g,"")||"jpg",m=`${a.id}/${Date.now()}_${String(Math.random()).slice(2)}.${v}`,{error:b}=await w.storage.from("review-photos").upload(m,l,{contentType:l.type||"image/jpeg",cacheControl:"3600",upsert:!1});if(b){u.disabled=!1,u.innerHTML=g,alert("Could not upload photo: "+b.message);return}const{data:k}=w.storage.from("review-photos").getPublicUrl(m);x=k?.publicUrl||null}const{error:y}=await w.from("product_reviews").insert({listing_id:e.id||null,property_id:e.property_id||e.id||"",user_id:a.id,rating:N,comment:n,review_photo:x,is_approved:!0});if(u.disabled=!1,u.innerHTML=g,y){alert("Error: "+y.message);return}document.getElementById("review-text").value="",N=0,l=null,i&&(i.value=""),s&&(s.innerHTML=""),document.querySelectorAll(".star-btn").forEach(v=>{const m=v.querySelector("i, svg");m&&(m.classList.remove("fill-amber-400","text-amber-400"),m.classList.add("text-gray-300"))}),d&&(d.classList.remove("hidden"),setTimeout(()=>{d&&d.classList.add("hidden")},4e3)),V(e)})}async function V(e){Ne();const t=document.getElementById("reviews-list"),a=document.getElementById("reviews-summary"),r=document.getElementById("reviews-breakdown");if(!t)return;const i=It(e),s={5:i.breakdown[5]||0,4:i.breakdown[4]||0,3:i.breakdown[3]||0,2:i.breakdown[2]||0,1:i.breakdown[1]||0};let l=Math.max(Number(i.total)||0,i.reviews.length);const d=[],o=e.property_id||e.id||"";if(o){const{data:b,error:k}=await w.from("product_reviews").select("*, profiles(full_name)").eq("property_id",o).eq("is_approved",!0).order("created_at",{ascending:!1});if(!k&&b)for(const q of b){d.push({...q,name:q.profiles?.full_name||"Anonymous",verified:q.is_verified_purchase});const M=Math.min(5,Math.max(1,Math.round(Number(q.rating)||0)));s[M]++,l++}}let n=0;for(let b=5;b>=1;b--)n+=b*s[b];const u=(l?n/l:0)||Number(e.rating)||0,g=l,x=`
    <div class="flex flex-wrap items-center gap-x-6 gap-y-4">
      <div class="flex items-center gap-4 shrink-0">
        <div class="text-5xl sm:text-6xl font-black leading-none text-gray-900 tracking-tight">${u>0?u.toFixed(1):"New"}</div>
        <div class="shrink-0">
          <div class="flex gap-1">${Et(u,"w-5 h-5 sm:w-6 sm:h-6")}</div>
          <div class="text-[13px] sm:text-sm font-bold text-gray-500 mt-1.5 tracking-wide">Customer Reviews</div>
        </div>
      </div>
      <div class="hidden md:block w-px h-12 bg-gray-200"></div>
      <div class="flex flex-wrap items-center gap-2">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Listing</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1.5 rounded-full"><i data-lucide="truck" class="w-3.5 h-3.5"></i> Fast Worldwide Delivery</span>
      </div>
    </div>`;a&&(a.innerHTML=x),r&&(r.innerHTML=Ft(e,s,g));const y=[...d,...i.reviews];if(!y.length){t.innerHTML='<p class="text-gray-400 text-sm py-2">No reviews yet. Be the first to review this product!</p>',window.lucide&&lucide.createIcons();return}const v=y.slice(0,3),m=()=>{if(t.innerHTML=v.map(qe).join(""),y.length>v.length){const b=document.createElement("div");b.className="mt-4 flex justify-center",b.innerHTML=`
        <button type="button" class="view-all-reviews-btn btn-press inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition shadow-sm shadow-blue-500/20">
          View All Customer Reviews
          <i data-lucide="chevron-down" class="w-4 h-4"></i>
        </button>`,t.appendChild(b),window.lucide&&lucide.createIcons(),b.querySelector(".view-all-reviews-btn").addEventListener("click",()=>{t.innerHTML=y.map(qe).join(""),window.lucide&&lucide.createIcons(),Qt(t,m)})}};m(),window.lucide&&lucide.createIcons()}async function Ne(){const e=document.querySelector('[data-bg-slot="reviews"]');if(e)try{const t=await wt();e.innerHTML=kt(t.reviews_bg_image,t.reviews_bg_video)}catch{}}document.addEventListener("promo-backgrounds-updated",()=>{try{Ne()}catch{}});function Qt(e,t){if(!e)return;const a=document.getElementById("reviews-back-top");a&&a.remove();const r=document.createElement("button");r.type="button",r.id="reviews-back-top",r.setAttribute("aria-label","Back to product page"),r.className="btn-press fixed z-[90] bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white font-bold pl-3 pr-5 py-3 rounded-full text-xs shadow-xl shadow-slate-950/50 border border-white/10 backdrop-blur transition active:scale-95",r.innerHTML=`
    <span class="shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"><i data-lucide="chevron-up" class="w-4 h-4"></i></span>
    Back to product page`,document.body.appendChild(r),r.addEventListener("click",()=>{r.remove(),typeof t=="function"&&t();const i=document.getElementById("reviews-section");i&&i.scrollIntoView({behavior:"smooth",block:"start"})}),window.lucide&&lucide.createIcons()}async function Xt(e){const t=document.getElementById("recommendations-section"),a=document.getElementById("recommendations-grid");if(!t||!a||!e.id)return;const{data:r,error:i}=await w.from("product_recommendations").select("recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)").eq("listing_id",e.id).order("score",{ascending:!1}).limit(4);if(i){console.error("Recommendations load failed:",i.message),t.classList.add("hidden");return}let s=(r||[]).map(l=>l.showroom_listings).filter(Boolean);if(s.length<4){const{data:l}=await w.from("showroom_listings").select("property_id, title, price, currency, images, listing_type").eq("category",e.category).neq("id",e.id).eq("is_active",!0).order("rating",{ascending:!1}).limit(4-s.length);s=[...s,...l||[]]}if(s.length===0){t.classList.add("hidden");return}t.classList.remove("hidden"),a.innerHTML=s.map(l=>{const d=l.images&&l.images[0]||"/fallback.svg",o=typeof l.price=="number"?l.price:parseFloat(l.price||0),n=l.currency||"USD";return`<a href="/details.html?id=${l.property_id}" class="block bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition group">
      <div class="aspect-square overflow-hidden bg-gray-100"><img src="${c(d)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-gray-900 font-bold truncate">${c(l.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${n} ${o.toLocaleString()}</p></div>
    </a>`}).join("")}function c(e){return String(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function ea(){const e=Nt();if(!e){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}const t=()=>{document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>'},a=()=>$e(e)||Se(e)||_e(e)||bt(e)||Te(e)||ce(e)||dt(),r=d=>{if(rt(d),document.title=`${d.title} | Weverse Online Shop`,ft(d),d===$e(e))Vt(d);else if(d===Se(e))Ut(d);else if(d===_e(e))zt(d);else{Yt(d);try{le(d)}catch{}}},i=a();if(i){r(i),xe().then(()=>{ke().then(()=>{if(ut(e)){t();return}const d=ce(e);if(d&&d.property_id===e)try{r(d)}catch{}})});return}await xe();const s=ce(e);if(s){r(s);return}await Dt();const l=Te(e);if(l){r(l);return}await ke();{t();return}}const Ce=document.getElementById("details-content"),ta=Ce?Ce.innerHTML:"";let je=!1;function De(e){if(e)try{console.error("[details] init failed:",e&&(e.stack||e.message||e))}catch{}if(!je){je=!0;try{const t=document.getElementById("details-content");if(!t||t.innerHTML!==ta||t.querySelector(".fade-in, #reviews-section"))return;t.innerHTML='<div class="text-center py-20 text-gray-500">We couldn’t load this listing right now. Please check your connection and try again.</div>'}catch{}}}window.setTimeout(De,12e3);ea().catch(De);
