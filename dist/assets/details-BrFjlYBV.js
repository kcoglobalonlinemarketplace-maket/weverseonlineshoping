const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/catalog-3IUO5W3L.js","assets/catalog-hidden-store-wpIcgcJZ.js","assets/live-promo-alerts-RK8Sva9W.js"])))=>i.map(i=>d[i]);
import{l as qe,f as De,c as C,_ as ye,a as Z,b as be,g as Ue,S as We}from"./live-promo-alerts-RK8Sva9W.js";import"./localization-Bbto3BF8.js";import{getCatalogCategory as Oe,getCatalogSample as Ve}from"./catalog-3IUO5W3L.js";import{getTruckById as ze,formatTruckPrice as Ge,TRUCK_LISTINGS as Ke}from"./truck-data-DnyLExat.js";import{getMotorhomeById as Ye,MOTORHOME_LISTINGS as Je}from"./motorhome-data-SSjGu6g8.js";import{getCarById as Ze,CAR_LISTINGS as Qe}from"./car-data-BE0Va4cl.js";import{getPhoneById as Xe,PHONE_LISTINGS as et}from"./phone-data-D3PvG27c.js";import{PET_LISTINGS as tt}from"./pet-data-B7wfSbng.js";import{PRODUCT_LISTINGS as ke}from"./products-data-CGLFLAJM.js";import{PRODUCT_EXTRA_LISTINGS as $e}from"./products-extra-DecCj9NU.js";import{r as at}from"./showroom-cards-DT28myGc.js";import{getCurrentUser as j,setRedirectAfterAuth as D}from"./auth-C8sthrmE.js";import{supabase as T}from"./supabase-client-nvpjTmO6.js";import{b as rt}from"./cart-DNy8CJA3.js";import"./localization-bootstrap-imgFHnFE.js";import"./catalog-hidden-store-wpIcgcJZ.js";function ge(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return t>>>0}function ot(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}const oe=["James","Emma","Liam","Olivia","Noah","Ava","Ethan","Sophia","Lucas","Mia","Daniel","Isabella","Matthew","Charlotte","Samuel","Amelia","Gabriel","Harper","Nathan","Evelyn","Caleb","Abigail","Adrian","Ella","Owen","Grace","Leo","Chloe","Julian","Nora","Mason","Aria","Elijah","Layla","Isaac","Zoe","Hunter","Scarlett","Christian","Lily","Aaron","Hannah","Dylan","Savannah","Andrew","Ruby","David","Elena","Ryan","Nina","Marcus","Priya","Kwame","Fatima","Andre","Yuki","Tomas","Ingrid","Mateo","Sofia","Omar","Zara","Felix","Amara","Jonas","Leila","Victor","Mila","Diego","Iris","Hugo","Camila","Adam","Freya","Oscar","Amina","Peter","Naomi","Elias","Lucia","Ray","Talia","Marco","Sienna","Joshua","Anya","Kofi","Petra"],z=["Anderson","Baker","Carter","Diaz","Evans","Foster","Garcia","Harris","Ingram","Johnson","Kelly","Lewis","Miller","Nelson","Ortiz","Parker","Quinn","Reed","Sanders","Turner","Underwood","Vaughn","Walker","Young","Zimmerman","Brooks","Coleman","Dunn","Fisher","Grant","Hayes","Jordan","Knight","Lopez","Morgan","Nguyen","Okafor","Peterson","Romano","Silva","Thompson","Umeh","Volkov","Wang","Xu","Yates","Zhou","Bennett","Chukwu","Doyle","Eze","Ferreira","Gonzalez","Hansen","Ivanov","Jansen","Kumar","Larsen","Moreau","Novak","Osei","Patel","Quintero","Rossi","Schmidt","Tavares","Ueda","Vasquez","Weber","Xavier","Yamamoto","Ziegler","Adeyemi","Barlow","Costa","Diop","Eriksen","Fontaine","Gomez","Holmes","Ikram","Juma","Karlsson","Lawson","Mensah","Nilsson"],fe=[{city:"Austin",country:"United States"},{city:"New York",country:"United States"},{city:"Seattle",country:"United States"},{city:"Los Angeles",country:"United States"},{city:"Chicago",country:"United States"},{city:"Boston",country:"United States"},{city:"San Diego",country:"United States"},{city:"Denver",country:"United States"},{city:"Miami",country:"United States"},{city:"Portland",country:"United States"},{city:"Toronto",country:"Canada"},{city:"Vancouver",country:"Canada"},{city:"Montreal",country:"Canada"},{city:"Calgary",country:"Canada"},{city:"Ottawa",country:"Canada"},{city:"London",country:"United Kingdom"},{city:"Manchester",country:"United Kingdom"},{city:"Birmingham",country:"United Kingdom"},{city:"Edinburgh",country:"United Kingdom"},{city:"Glasgow",country:"United Kingdom"},{city:"Bristol",country:"United Kingdom"},{city:"Liverpool",country:"United Kingdom"},{city:"Dublin",country:"Ireland"},{city:"Cork",country:"Ireland"},{city:"Paris",country:"France"},{city:"Lyon",country:"France"},{city:"Marseille",country:"France"},{city:"Berlin",country:"Germany"},{city:"Munich",country:"Germany"},{city:"Hamburg",country:"Germany"},{city:"Frankfurt",country:"Germany"},{city:"Amsterdam",country:"Netherlands"},{city:"Rotterdam",country:"Netherlands"},{city:"Brussels",country:"Belgium"},{city:"Antwerp",country:"Belgium"},{city:"Zurich",country:"Switzerland"},{city:"Geneva",country:"Switzerland"},{city:"Vienna",country:"Austria"},{city:"Rome",country:"Italy"},{city:"Milan",country:"Italy"},{city:"Florence",country:"Italy"},{city:"Madrid",country:"Spain"},{city:"Barcelona",country:"Spain"},{city:"Valencia",country:"Spain"},{city:"Lisbon",country:"Portugal"},{city:"Porto",country:"Portugal"},{city:"Stockholm",country:"Sweden"},{city:"Gothenburg",country:"Sweden"},{city:"Oslo",country:"Norway"},{city:"Copenhagen",country:"Denmark"},{city:"Helsinki",country:"Finland"},{city:"Reykjavik",country:"Iceland"},{city:"Warsaw",country:"Poland"},{city:"Krakow",country:"Poland"},{city:"Prague",country:"Czech Republic"},{city:"Athens",country:"Greece"},{city:"Sydney",country:"Australia"},{city:"Melbourne",country:"Australia"},{city:"Brisbane",country:"Australia"},{city:"Perth",country:"Australia"},{city:"Adelaide",country:"Australia"},{city:"Auckland",country:"New Zealand"},{city:"Wellington",country:"New Zealand"},{city:"Christchurch",country:"New Zealand"},{city:"Singapore",country:"Singapore"},{city:"Tokyo",country:"Japan"},{city:"Osaka",country:"Japan"},{city:"Kyoto",country:"Japan"},{city:"Seoul",country:"South Korea"},{city:"Busan",country:"South Korea"},{city:"Dubai",country:"United Arab Emirates"},{city:"Abu Dhabi",country:"United Arab Emirates"},{city:"Doha",country:"Qatar"},{city:"Tel Aviv",country:"Israel"},{city:"Taipei",country:"Taiwan"},{city:"Hong Kong",country:"Hong Kong"}],ie=["Great shopping experience","Easy checkout","Smooth ordering","Fast delivery","Excellent service","Very reliable store","Impressed with the site","Would shop again","Worth it","As advertised","Professional team","Quick response","Secure checkout","Clear communication","Trustworthy shop","Happy with my order","Simple and easy","Great customer service","Everything on time","No issues at all","Very professional","Highly recommended","Smooth transaction","Well organised","Pleasant experience","Top quality service","Efficient and quick","Great overall","Straightforward","Genuinely impressed","Seamless process","Responsive support","Delivered as promised","Exceptional experience","Reliable shipping","Five star service","Perfect order","Great communication","Honest shop","First class service","Very satisfied","Quick and easy","Professional all round","Better than expected","Zero hassle","A pleasure to shop","Consistently good","Outstanding support","Smooth all the way","Absolutely perfect"],G=[" shopping"," experience"," service"," process"," order"," delivery"," support"," checkout"," communication"," transaction"," shop"," site"," handling"," team"," packaging"," quality"," speed"," follow-up"," attention"," standard"," professionalism"," care"," results"," accuracy"," efficiency"," convenience"," presentation"," reliability"," trust"," customer care"," experience online"," store"," purchase"," every time"," overall"," end to end"," turnaround"," dealings"," execution"],K=["Ordering on the website was straightforward and the checkout process went smoothly.","I placed my first order through the site and the whole experience was very pleasant.","The website was easy to use and placing the order took just a couple of minutes.","This was my first time shopping with them and I was genuinely impressed.","I ordered through the website and everything worked exactly as it should.","The online checkout was quick, secure, and completely painless.","I have ordered from many online shops and this experience stood out.","Setting up my account and placing the order was simple and clear.","The site made it very easy to find what I wanted and complete my purchase.","I was a little unsure at first, but the whole process turned out to be very professional.","From browsing to checkout, everything on the website was well organised.","I have used this online shop a few times now and it never disappoints.","The ordering process was quick and everything was confirmed instantly.","I appreciated how clear the website was about pricing, shipping, and delivery.","Placing my order was effortless and the confirmation came through right away.","The online shop handled my order professionally from start to finish.","It was my first international online order and it went perfectly.","The website checkout was smooth and I felt secure throughout.","I found the store easy to navigate and the order process very user friendly.","Everything from selection to payment was handled neatly and clearly."],B=["Shipping was faster than expected and the package arrived in perfect condition.","The parcel was well packed and arrived exactly when the tracking promised.","Customer service replied quickly and answered all my questions patiently.","Delivery was prompt and the courier was courteous and careful.","The order updates kept me informed at every stage of the journey.","My payment was processed securely and I received confirmation immediately.","The package arrived beautifully wrapped and completely intact.","I was kept updated throughout the whole delivery process.","The estimated delivery date was accurate and the order arrived on time.","Communication from the team was clear, friendly, and professional.","The packaging was sturdy and everything arrived in perfect shape.","It was dispatched quickly, well within the promised time.","The tracking worked perfectly and the delivery was smooth.","Customer support helped me quickly when I had a small question.","The whole transaction was handled efficiently and without any issues.","My order arrived earlier than the estimated date, which was a nice surprise.","The team processed my order quickly and kept me well informed.","The website kept me updated with clear order status throughout.","Delivery went exactly as scheduled and the item arrived safely.","I appreciated the fast dispatch and careful handling of my order.","Everything arrived as described and on the exact date promised.","The checkout confirmed my order instantly and the follow-up was excellent.","The support team responded to my query within minutes.","My package arrived in pristine condition with great packaging.","The order was handled with care from the moment I placed it.","Tracking updates were timely and the delivery was hassle free.","The team went out of their way to make sure everything was perfect.","It was a smooth, well managed order from start to finish.","The delivery arrived well within the window they promised.","Everything about the transaction was clear, honest, and professional.","My order was processed and shipped with impressive speed.","The customer service was responsive and genuinely helpful.","The package arrived exactly on schedule and in perfect condition.","They kept their promise on delivery time and the quality was clear.","The whole experience online was seamless and reassuring.","Every step, from payment to delivery, was handled perfectly.","The order status updates were clear and always accurate.","It was dispatched the same day and arrived quickly.","The shopping experience was smooth and completely trustworthy.","Their follow-up after delivery was thoughtful and professional."],ne=["I will definitely be shopping here again.","Would happily recommend this online shop to friends.","A five star experience from start to finish.","No hesitation in recommending them to others.","Very pleased with the whole experience.","I am glad I chose this shop for my order.","A really professional online store worth trusting.","Would not think twice about ordering again.","They have earned a loyal customer in me.","Highly recommended for anyone ordering online.","A great experience and I will be back.","Their service deserves every bit of praise.","I would confidently order from them again.","A genuinely pleasant shopping experience.","Five stars, no question about it.","They are now my go to online shop."],ve={vehicle:["The vehicle was listed accurately and the delivery arrangement was handled very professionally by the shop.","The shop arranged safe delivery of the vehicle and kept me updated the whole way."],property:["The listing was accurate and the shop team guided me through the process smoothly.","The shop handled all the paperwork and communication professionally throughout."],phone:["The phone matched the description exactly and the shop dispatched it quickly and safely.","The shop confirmed all the device details before shipping and the packaging was excellent."],pet:["The shop handled the entire arrangement with care and kept me informed at every step.","All the paperwork was provided and the shop made the process very easy."],product:["The item matched the listing perfectly and the shop delivered it in great condition.","The shop processed and dispatched my order quickly with careful packaging."]},Ie=[{year:2018,w:3},{year:2019,w:7},{year:2020,w:11},{year:2021,w:13},{year:2022,w:15},{year:2023,w:16},{year:2024,w:15},{year:2025,w:12},{year:2026,w:8}],it=Ie.reduce((e,t)=>e+t.w,0);function nt(e){let t=e()*it;for(const a of Ie){if(t<a.w)return a.year;t-=a.w}return 2024}function Y(e,t,a,r){return(e+t*a)%r}function lt(e,t={}){const a=String(e.property_id||e.id||"");if(!a)return{reviews:[],breakdown:{5:0,4:0,3:0,2:0,1:0},total:0,computedRating:0};const r=ge(a),i=187+r%660,n=Math.min(5,Math.max(1,Number(e.rating)||0))||4.5;let u=Math.max(.3,Math.min(.9,n/5)),l=1-u,d=.07,g=.04,o=.03;const c=1/(u+l+d+g+o);u*=c,l*=c,d*=c,g*=c,o*=c;const y=[u,l,d,g,o],w=e.listing_type==="vehicle"?"vehicle":e.listing_type==="property"?"property":e.listing_type==="pet"?"pet":String(e.category||"").toLowerCase().includes("phone")?"phone":"product",v=ve[w]||ve.product,f=[],$=oe.length*z.length,x=ie.length*G.length,E=K.length*B.length*B.length*ne.length,M=137,h=457,m=811;for(let b=0;b<i;b++){const A=ot(ge(a+"::"+b));let Se=A(),de=5,ue=0;for(let V=5;V>=1;V--)if(ue+=y[5-V],Se<=ue){de=V;break}const pe=Y(r,b,h,$),Te=oe[Math.floor(pe/z.length)%oe.length],Le=z[pe%z.length],_e=`${Te} ${Le}`,me=Y(r,b,M,x),Ee=ie[Math.floor(me/G.length)%ie.length]+G[me%G.length];let S=Y(r,b,m,E);const Me=K[S%K.length];S=Math.floor(S/K.length);const Be=B[S%B.length];S=Math.floor(S/B.length);const Ae=B[S%B.length];S=Math.floor(S/B.length);const Ce=ne[S%ne.length];let O=`${Me} ${Be}`;b%3===0&&v.length&&(O+=` ${v[b%v.length]}`),b%2===0&&(O+=` ${Ae}`),O+=` ${Ce}`;const He=fe[Y(r,b,337,fe.length)],Re=Date.now(),he=nt(A),Pe=he===2018?10+Math.floor(A()*3):1+Math.floor(A()*12),je=1+Math.floor(A()*28),Ne=Date.UTC(he,Pe-1,je),Fe=new Date(Math.min(Ne,Re)).toISOString();f.push({name:_e,location:He.country,date:Fe,rating:de,title:Ee,text:O,verified:!1,seeded:!0})}f.sort((b,A)=>b.date<A.date?1:-1);const I={5:0,4:0,3:0,2:0,1:0};let k=0;for(let b=5;b>=1;b--)I[b]=Math.round(i*y[5-b]),k+=I[b];const P=i-k;P!==0&&(I[P>0?5:1]+=P);let F=0;for(let b=5;b>=1;b--)F+=b*I[b];const W=F/i;return{reviews:f,breakdown:I,total:i,computedRating:W}}const _="/fallback.svg";function Q(e){return Array.isArray(e)&&e.length>0?e:[_]}function st(e,t="w-4 h-4"){const a=Math.round(Number(e)||0);return[1,2,3,4,5].map(r=>`<i data-lucide="star" class="${t} ${r<=a?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}function N(e,t,a="blue"){const r={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"};return`
    <div class="flex items-center gap-2.5 mb-4">
      <div class="shrink-0 w-10 h-10 rounded-xl ${r[a]||r.blue} flex items-center justify-center"><i data-lucide="${e}" class="w-5 h-5"></i></div>
      <h3 class="text-lg font-black text-gray-900 tracking-tight">${t}</h3>
    </div>`}function ct(e){return`
    <div class="bg-gray-50 border border-gray-100 rounded-xl p-3.5">
      <div class="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5"><i data-lucide="${e.icon}" class="w-3.5 h-3.5"></i>${e.label}</div>
      <div class="text-gray-900 font-bold text-[15px] leading-snug">${p(e.value)}</div>
    </div>`}function H(e,t,a,r="blue"){return!a||!a.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${N(t,e,r)}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        ${a.map(ct).join("")}
      </div>
    </div>`}function X(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${N("list-checks","Features & Amenities","emerald")}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
            <span class="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
            <span class="text-[15px] text-gray-800 font-medium">${p(t)}</span>
          </div>`).join("")}
      </div>
    </div>`}function dt(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${N("star","Highlights","amber")}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-start gap-2.5 bg-amber-50/60 border border-amber-100 rounded-xl px-3.5 py-2.5">
            <i data-lucide="badge-check" class="w-4 h-4 text-amber-500 mt-0.5 shrink-0"></i>
            <span class="text-[15px] text-gray-800 font-medium">${p(t)}</span>
          </div>`).join("")}
      </div>
    </div>`}function ee(e){return`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${N("file-text","Description","blue")}
      <p class="text-[15px] sm:text-base text-gray-700 leading-relaxed">${p(e||"")}</p>
    </div>`}function we(e){const t=e.name||e.profiles?.full_name||"Anonymous",a=p(t.trim().charAt(0).toUpperCase()||"A"),r=e.location?`<span class="text-xs text-gray-400">&middot; ${p(e.location)}</span>`:"",i=e.title?`<p class="text-sm font-bold text-gray-900 mt-1">${p(e.title)}</p>`:"",s=e.review_photo?`<div class="mt-2.5"><img src="${p(e.review_photo)}" alt="Customer photo" class="w-28 h-28 object-cover rounded-xl border border-gray-100" loading="lazy" onerror="this.style.display='none'"></div>`:"";return`
    <div class="flex gap-3 py-4 border-b border-gray-100 last:border-0">
      <div class="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-black uppercase shadow-sm">${a}</div>
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-sm font-bold text-gray-900">${p(t)}</span>${r}
          <span class="text-xs text-gray-400">${new Date(e.date||e.created_at).toLocaleDateString()}</span>
        </div>
        <div class="flex gap-0.5 mt-1">${[1,2,3,4,5].map(n=>`<i data-lucide="star" class="w-3.5 h-3.5 ${n<=(e.rating||0)?"fill-amber-400 text-amber-400":"text-gray-300"}"></i>`).join("")}</div>
        ${i}
        <p class="text-[15px] text-gray-700 leading-relaxed mt-1.5">${p(e.text||e.comment||"")}</p>
        ${s}
      </div>
    </div>`}function te(e){const t=encodeURIComponent(window.location.pathname+window.location.search);return`
    <div id="reviews-section" class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${N("message-square-star","Customer Reviews","amber")}
      <div id="reviews-summary" class="mb-1"><div class="text-gray-500 text-sm py-3">Loading ratings…</div></div>
      <div id="reviews-breakdown" class="mb-3"></div>
      <div id="reviews-list"><div class="text-gray-500 text-sm py-4">Loading reviews…</div></div>
      <div id="review-form-wrapper" class="mt-5 pt-5 border-t border-gray-100">
        <h4 class="text-[15px] font-black text-gray-900 mb-3 flex items-center gap-2"><i data-lucide="pen-line" class="w-4 h-4 text-blue-500"></i> Write a Review</h4>
        <div id="review-login-msg" class="text-xs text-gray-500 hidden">Please <a href="/auth.html?redirect=${t}" class="text-blue-500 hover:underline">sign in</a> to write a review.</div>
        <form id="review-form" class="space-y-3">
          <div class="flex items-center gap-2">
            <label class="text-xs text-gray-600 font-bold uppercase">Rating</label>
            <div id="star-rating" class="flex gap-1">
              ${[1,2,3,4,5].map(a=>`<button type="button" data-rating="${a}" class="star-btn p-1"><i data-lucide="star" class="w-5 h-5 text-gray-300 hover:text-amber-400 transition"></i></button>`).join("")}
            </div>
          </div>
          <textarea id="review-text" rows="3" placeholder="Share your experience with this product..." class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-[15px] text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"></textarea>
          <div class="flex items-center gap-3">
            <label for="review-photo-input" class="inline-flex items-center gap-2 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 cursor-pointer hover:border-blue-300 hover:bg-blue-50/40 transition">
              <i data-lucide="camera" class="w-4 h-4 text-blue-500"></i> Add a photo
            </label>
            <input id="review-photo-input" type="file" accept="image/*" class="hidden">
            <div id="review-photo-preview" class="flex items-center gap-2"></div>
          </div>
          <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition">Submit Review</button>
          <div id="review-submit-msg" class="text-xs text-emerald-600 font-bold hidden"><i data-lucide="check-circle" class="w-3.5 h-3.5 inline"></i> Thank you! Your review is now live.</div>
        </form>
      </div>
    </div>`}function ut(e,t,a){const r=Math.max(1,a);return`
    <div class="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-1 items-center bg-gray-50/70 border border-gray-100 rounded-2xl p-4">
      ${[5,4,3,2,1].map(i=>{const s=t[i]||0,n=Math.round(s/r*100);return`
        <div class="flex items-center gap-1.5 text-xs text-gray-500 font-medium"><i data-lucide="star" class="w-3 h-3 ${i<=5?"fill-amber-400 text-amber-400":""}"></i>${i}</div>
        <div class="flex items-center gap-2">
          <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden"><div class="h-full bg-amber-400 rounded-full" style="width:${n}%"></div></div>
          <span class="text-[11px] text-gray-400 w-9 text-right tabular-nums">${n}%</span>
        </div>`}).join("")}
    </div>`}function pt(){return new URLSearchParams(window.location.search).get("id")}const mt=[...ke,...$e];function ht(e){return mt.find(t=>t.property_id===e)||null}function yt(e){const t=document.getElementById("details-content"),a=Ge(e),i=Q(e.images).map((o,c)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${c===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${p(o)}">
      <img src="${p(o)}" alt="View ${c+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${_}'">
    </button>`).join(""),s=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cargo Area / Truck Bed","Engine","Wheels / Tires","Additional View"],n=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"package",label:"Payload Capacity",value:e.payload_capacity},{icon:"link",label:"Towing Capacity",value:e.towing_capacity},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(o=>o.value!=null&&o.value!==""&&o.value!=="N/A"),u=X(e.features),l=te();t.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${p(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${p(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${p(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${p(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${l}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${_}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${s[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${i}
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
      ${ee(e.description)}

      <!-- Truck Information -->
      ${H("Truck Information","truck",n,"amber")}

      ${u}

      ${ce(e)}

      ${ae()}
    </div>
  `;const d=document.getElementById("hero-image"),g=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((o,c)=>{o.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(y=>y.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(y=>y.classList.add("border-gray-200")),o.classList.add("active","border-blue-500"),o.classList.remove("border-gray-200"),d.src=o.dataset.img,g.textContent=s[c]||`View ${c+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await j()?window.location.href=`/checkout.html?id=${e.property_id}`:(D(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const o=window.location.href;try{if(navigator.share)await navigator.share({title:p(e.title),url:o});else{await navigator.clipboard.writeText(o);const c=document.getElementById("share-btn"),y=c.innerHTML;c.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{c.innerHTML=y,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),R(e),re(e),U(e),window.lucide&&lucide.createIcons()}function bt(e){const t=document.getElementById("details-content"),a=Z(e),i=Q(e.images).map((o,c)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${c===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${p(o)}">
      <img src="${p(o)}" alt="View ${c+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${_}'">
    </button>`).join(""),s=["Exterior Front","Exterior Side","Exterior Rear","Living Area","Kitchen","Bedroom","Bathroom","Additional View"],n=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(o=>o.value!=null&&o.value!==""&&o.value!=="N/A"),u=X(e.features),l=te();t.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${p(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${p(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${p(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${p(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${l}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${_}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${s[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${i}
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
      ${ee(e.description)}

      <!-- Motorhome Information -->
      ${H("Motorhome Information","bus",n,"violet")}

      ${u}

      ${ce(e)}

      ${ae()}
    </div>
  `;const d=document.getElementById("hero-image"),g=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((o,c)=>{o.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(y=>y.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(y=>y.classList.add("border-gray-200")),o.classList.add("active","border-blue-500"),o.classList.remove("border-gray-200"),d.src=o.dataset.img,g.textContent=s[c]||`View ${c+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await j()?window.location.href=`/checkout.html?id=${e.property_id}`:(D(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const o=window.location.href;try{if(navigator.share)await navigator.share({title:p(e.title),url:o});else{await navigator.clipboard.writeText(o);const c=document.getElementById("share-btn"),y=c.innerHTML;c.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{c.innerHTML=y,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),R(e),re(e),U(e),window.lucide&&lucide.createIcons()}function gt(e){const t=document.getElementById("details-content"),a=Z(e),i=Q(e.images).map((o,c)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${c===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${p(o)}">
      <img src="${p(o)}" alt="View ${c+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${_}'">
    </button>`).join(""),s=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cabin / Interior","Wheels / Tires","Additional View"],n=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(o=>o.value!=null&&o.value!==""&&o.value!=="N/A"),u=X(e.features),l=te();t.innerHTML=`
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
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${p(e.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${p(e.stock_number||"—")}</span> &middot; VIN: <span class="text-gray-600 font-mono">${p(e.vin||"—")}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${a}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${p(e.condition||"Used")} &middot; For Sale</span>
        </div>
      </div>

      ${l}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${_}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${s[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${i}
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
      ${ee(e.description)}

      <!-- Car Information -->
      ${H("Car Information","car",n,"amber")}

      ${u}

      ${ce(e)}

      ${ae()}
    </div>
  `;const d=document.getElementById("hero-image"),g=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((o,c)=>{o.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(y=>y.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(y=>y.classList.add("border-gray-200")),o.classList.add("active","border-blue-500"),o.classList.remove("border-gray-200"),d.src=o.dataset.img,g.textContent=s[c]||`View ${c+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await j()?window.location.href=`/checkout.html?id=${e.property_id}`:(D(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const o=window.location.href;try{if(navigator.share)await navigator.share({title:p(e.title),url:o});else{await navigator.clipboard.writeText(o);const c=document.getElementById("share-btn"),y=c.innerHTML;c.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{c.innerHTML=y,window.lucide&&lucide.createIcons()},2e3)}}catch{}}),R(e),re(e),U(e),window.lucide&&lucide.createIcons()}function ft(e){const a=e.listing_type==="property"?"Share Property":"Share";return`
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
      <button type="button" id="view-details-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="eye" class="w-5 h-5"></i> View Details
      </button>
      <button type="button" id="add-cart-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart
      </button>
      <button type="button" id="buy-now-btn" class="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition text-sm uppercase tracking-wider">
        <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
      </button>
      <a href="${`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`}" class="flex items-center justify-center gap-2 bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-700 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="badge-check" class="w-4 h-4"></i> Contact Us
        <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online</span>
      </a>
      <button type="button" id="wishlist-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-700 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="heart" class="w-5 h-5"></i> Add to Wishlist
      </button>
      <button type="button" id="share-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="share-2" class="w-5 h-5"></i> ${a}
      </button>
    </div>
  `}function ce(e){const t=e.listing_type==="property",a=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`;return`
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
    </div>`}function ae(){return`
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
      </div>`}function vt(e){const t=new Map,a=i=>(i||[]).forEach(s=>{s&&s.property_id&&t.set(s.property_id,s)});a(We),a(Ke),a(Je),a(Qe),a(et),a(tt),a(ke),a($e),a(Ue());const r=Oe(e.category||e.subcategory);return r&&a(Ve(r.slug,50)),[...t.values()].filter(i=>i.property_id!==e.property_id)}function wt(e,t){let a=0;const r=d=>String(d||"").trim().toLowerCase();e.listing_type&&e.listing_type===t.listing_type&&(a+=40),e.category&&r(e.category)===r(t.category)&&(a+=30),e.subcategory&&r(e.subcategory)===r(t.subcategory)&&(a+=20),e.brand&&r(e.brand)===r(t.brand)&&(a+=15),e.breed&&r(e.breed)===r(t.breed)&&(a+=15),e.model&&r(e.model)===r(t.model)&&(a+=10),e.property_type&&r(e.property_type)===r(t.property_type)&&(a+=15);const i=parseFloat(e.price)||0,s=parseFloat(t.price)||0;if(i>0&&s>0){const d=Math.min(i,s)/Math.max(i,s);d>=.8?a+=10:d>=.6?a+=6:d>=.4&&(a+=3)}e.country_code&&e.country_code===t.country_code&&(a+=5);const n=new Set(r(e.title).split(/[^a-z0-9]+/).filter(d=>d.length>2)),u=new Set(r(t.title).split(/[^a-z0-9]+/).filter(d=>d.length>2));let l=0;return n.forEach(d=>{u.has(d)&&l++}),a+=Math.min(l*2,10),a}function le(e,t){const a=document.getElementById(e);if(!a)return;const r=a.querySelector(".rel-grid");if(!r)return;if(!t.length){a.classList.add("hidden");return}a.classList.remove("hidden"),r.innerHTML="";const i=document.createDocumentFragment();t.slice(0,10).forEach(s=>{const n=document.createElement("div");n.className="shrink-0 w-[260px] sm:w-[320px] snap-start";const u=at(s);u.style.width="100%",n.appendChild(u),i.appendChild(n)}),r.appendChild(i),window.lucide&&lucide.createIcons()}function R(e){const t=vt(e),a=t.map(l=>({item:l,score:wt(e,l)})).sort((l,d)=>d.score-l.score||(d.item.rating||0)-(l.item.rating||0)),r=a.filter(l=>l.score>=35).map(l=>l.item),i=new Set(r.map(l=>l.property_id)),s=a.filter(l=>l.score>=15&&l.score<35&&!i.has(l.item.property_id)).map(l=>l.item),n=[...t].filter(l=>!i.has(l.property_id)).sort((l,d)=>(d.rating||0)-(l.rating||0)).slice(0,10),u=a.filter(l=>!i.has(l.item.property_id)).map(l=>l.item);le("similar-section",r.length?r:u.slice(0,10)),le("related-section",s.length?s:u.slice(0,10)),le("recommended-section",n.length?n:u.slice(0,10))}function J(e){const t=document.getElementById("details-content"),a=e.listing_type==="property",r=Z(e),i=be(e.country_code),s=e.listing_type==="product"?"Product ID":a?"Property ID":"Listing ID";let n="",u="",l=parseFloat(e.real_price);if((!Number.isFinite(l)||l<=0)&&(l=parseFloat(e.compare_at_price??e.original_price)),Number.isFinite(l)&&l>0&&l>parseFloat(e.price)){const h=Math.round((1-parseFloat(e.price)/l)*100);n=`<span class="text-lg text-gray-400 price-strike line-through font-medium">${Z({...e,price:l})}</span>`,u=`<span class="inline-flex items-center gap-1 text-xs font-black text-white bg-red-500 px-2 py-1 rounded-full">-${h}% OFF</span>`}const d=e.availability_status||(e.listing_type==="product"?"In Stock":"Available"),o=Q(e.images).map((h,m)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${m===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${p(h)}">
      <img src="${p(h)}" alt="View ${m+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${_}'">
    </button>`).join("");let c="";if(a){const h=[{icon:"globe",label:"Country",value:`${i} ${e.country}`},{icon:"map-pin",label:"State / Province",value:e.state},{icon:"building",label:"City",value:e.city},{icon:"navigation",label:"Town / Local Area",value:e.town}].filter(m=>m.value);c=`
      <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
        ${N("map-pin","Location","rose")}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${h.map(m=>`
            <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
              <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="${m.icon}" class="w-4 h-4 text-blue-500"></i></div>
              <div><div class="text-gray-500 text-xs">${m.label}</div><div class="text-gray-900 font-bold text-[15px]">${m.value}</div></div>
            </div>
          `).join("")}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-200" style="height:280px"></div>
      </div>`}let y="";if(a){const h=[{icon:"bed-double",label:"Bedrooms",value:e.bedrooms},{icon:"bath",label:"Bathrooms",value:e.bathrooms},{icon:"building",label:"Building Size",value:e.building_size},{icon:"ruler",label:"Land Size",value:e.land_size},{icon:"car",label:"Parking Spaces",value:e.parking_spaces},{icon:"home",label:"Property Type",value:e.property_type},{icon:"sofa",label:"Furnished",value:e.furnished},{icon:"calendar",label:"Year Built",value:e.year_built},{icon:"tag",label:"Status",value:e.listing_status==="rent"?"For Rent":"For Sale"}].filter(m=>m.value!=null&&m.value!=="");y=H("Property Information","home",h)}else if(e.category==="Motorhomes"){const h=[{icon:"factory",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank}].filter(m=>m.value!=null&&m.value!=="");y=H("Vehicle Information","bus",h,"violet")}else if(e.listing_type==="product"){const h=[{icon:"factory",label:"Brand",value:e.brand},{icon:"tag",label:"Subcategory",value:e.subcategory},{icon:"palette",label:"Colour",value:e.color},{icon:"ruler",label:"Size",value:e.size},{icon:"layers",label:"Material",value:e.material},{icon:"badge-check",label:"Condition",value:e.condition||"New"},{icon:"shield-check",label:"Warranty",value:e.warranty},{icon:"package-check",label:"Availability",value:e.availability_status}].filter(m=>m.value!=null&&m.value!=="");y=H("Product Information","package",h)}else if(e.listing_type==="pet"){const h=[{icon:"paw-print",label:"Breed",value:e.breed},{icon:"calendar",label:"Age",value:e.age},{icon:"users",label:"Gender",value:e.gender},{icon:"palette",label:"Colour",value:e.color},{icon:"scale",label:"Weight",value:e.size},{icon:"globe",label:"Origin",value:`${be(e.country_code)} ${e.country}`},{icon:"badge-check",label:"Health",value:e.condition}].filter(m=>m.value!=null&&m.value!=="");y=H("Pet Information","paw-print",h,"amber")}const w=X(e.features),v=dt(e.highlights),f=te();t.innerHTML=`
    <div class="fade-in">
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>${e.category}</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${p(e.title)}</span>
      </div>

      <div class="mb-5">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">${p(e.title)}</h1>
        <div class="flex flex-wrap items-center gap-2 mt-2.5">
          <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified</span>
          <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full"><i data-lucide="box" class="w-3.5 h-3.5"></i> ${s}: <span class="font-mono">${p(e.property_id)}</span></span>
          <span class="inline-flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">${e.listing_status==="rent"?"For Rent":"For Sale"}</span>
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-4 bg-gradient-to-br from-blue-50 via-white to-white border border-blue-100 rounded-2xl p-5 mb-6">
        <div>
          <div class="flex items-baseline flex-wrap gap-2">
            ${n}
            <span class="text-4xl font-black text-blue-600">${r}</span>
          </div>
          <div class="flex items-center gap-2 mt-1.5">
            ${u}
            <span class="text-sm text-emerald-600 font-bold flex items-center gap-1"><i data-lucide="package-check" class="w-4 h-4"></i> ${d}</span>
          </div>
        </div>
        <div class="flex flex-col gap-1.5 text-sm">
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="truck" class="w-4 h-4 text-blue-500"></i> Free worldwide shipping</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="rotate-ccw" class="w-4 h-4 text-blue-500"></i> Easy returns within 14 days</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="lock" class="w-4 h-4 text-blue-500"></i> Secure payment protection</span>
        </div>
      </div>

      ${f}

      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${_}'">
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${o}
      </div>

      ${ft(e)}

      <div id="listing-details">
        ${ee(e.description)}
      </div>

      ${c}
      ${y}
      ${w}
      ${v}

      <div id="recommendations-section" class="hidden">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">You May Also Like</h3>
        <div id="recommendations-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>

      ${ae()}
    </div>
  `;const $=document.getElementById("hero-image");t.querySelectorAll(".gallery-thumb").forEach(h=>{h.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(m=>m.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(m=>m.classList.add("border-gray-200")),h.classList.add("active","border-blue-500"),h.classList.remove("border-gray-200"),$.src=h.dataset.img})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await j()?window.location.href=`/checkout.html?id=${e.property_id}`:(D(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",async()=>{const h=window.location.href;try{if(navigator.share)await navigator.share({title:p(e.title),url:h});else{await navigator.clipboard.writeText(h);const m=document.getElementById("share-btn"),I=m.innerHTML;m.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Copied!',window.lucide&&lucide.createIcons(),setTimeout(()=>{m.innerHTML=I,window.lucide&&lucide.createIcons()},2e3)}}catch{}});const x=document.getElementById("view-details-btn");x&&x.addEventListener("click",()=>{const h=document.getElementById("listing-details");h&&h.scrollIntoView({behavior:"smooth",block:"start"})});const E=document.getElementById("add-cart-btn");E&&E.addEventListener("click",()=>{rt(e.property_id,1),E.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Added to Cart',window.lucide&&lucide.createIcons(),setTimeout(()=>{E.innerHTML='<i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart',window.lucide&&lucide.createIcons()},2e3)}),kt(e),re(e),U(e),It(e),window.lucide&&lucide.createIcons(),e.property_id,e.title,parseFloat(e.price),e.currency;const M=document.getElementById("listing-map");if(M&&window.L){const h=parseFloat(e.latitude)||null,m=parseFloat(e.longitude)||null,I=[e.town,e.city,e.state,e.country].filter(Boolean).join(", ");if(h&&m){const k=L.map(M).setView([h,m],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(k),L.marker([h,m]).addTo(k).bindPopup(e.title)}else I?fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(I)).then(k=>k.json()).then(k=>{if(k&&k[0]){const P=parseFloat(k[0].lat),F=parseFloat(k[0].lon),W=L.map(M).setView([P,F],12);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(W),L.marker([P,F]).addTo(W).bindPopup(e.title)}else M.style.display="none"}).catch(()=>{M.style.display="none"}):M.style.display="none"}}let q=0,xe=!1;function xt(){if(xe)return;xe=!0;const e=document.createElement("style");e.textContent="@keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}",document.head.appendChild(e)}function se(e,t){if(!e)return;xt(),e.innerHTML=`<i data-lucide="heart" class="w-5 h-5 ${t?"fill-red-500 text-red-500":""}"></i>`,e.classList.toggle("bg-red-50",t),e.classList.toggle("border",t),e.classList.toggle("border-red-200",t);const a=e.querySelector("span");a&&(a.textContent=t?"Saved to Wishlist":"Add to Wishlist"),window.lucide&&lucide.createIcons();const r=e.querySelector("i");r&&(r.style.animation="none",r.offsetWidth,r.style.animation="kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)",setTimeout(()=>{r&&(r.style.animation="")},550))}async function kt(e){const t=document.getElementById("wishlist-btn");if(!t)return;const a=await j();if(!a){t.addEventListener("click",()=>{D(window.location.pathname+window.location.search),window.location.href=`/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`});return}const{data:r,error:i}=await T.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(i){console.error("Wishlist check failed:",i.message);return}r&&se(t,!0),t.addEventListener("click",async()=>{const{data:s,error:n}=await T.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(n){console.error("Wishlist toggle failed:",n.message);return}if(s){const{error:u}=await T.from("wishlist").delete().eq("id",s.id);if(u){console.error("Wishlist delete failed:",u.message);return}se(t,!1)}else{const{error:u}=await T.from("wishlist").insert({user_id:a.id,listing_id:e.id});if(u){console.error("Wishlist insert failed:",u.message);return}se(t,!0)}})}async function re(e){const t=document.getElementById("review-form"),a=document.getElementById("review-login-msg");if(!t)return;const r=await j();if(!r){t.classList.add("hidden"),a&&a.classList.remove("hidden");return}document.querySelectorAll(".star-btn").forEach(l=>{l.addEventListener("click",()=>{q=parseInt(l.dataset.rating,10),document.querySelectorAll(".star-btn").forEach((d,g)=>{const o=d.querySelector("i");g<q?(o.classList.add("fill-amber-400","text-amber-400"),o.classList.remove("text-gray-300")):(o.classList.remove("fill-amber-400","text-amber-400"),o.classList.add("text-gray-300"))})})});const i=document.getElementById("review-photo-input"),s=document.getElementById("review-photo-preview");let n=null;i&&i.addEventListener("change",()=>{if(n=i.files&&i.files[0],!!s&&(s.innerHTML="",n)){const l=URL.createObjectURL(n);s.innerHTML=`<span class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg px-2.5 py-1"><img src="${l}" alt="" class="w-5 h-5 rounded object-cover">${p(n.name)}</span>`}});const u=document.getElementById("review-submit-msg");t.addEventListener("submit",async l=>{l.preventDefault();const d=document.getElementById("review-text").value.trim();if(!q){alert("Please select a rating.");return}if(!d){alert("Please write a review.");return}const g=t.querySelector('button[type="submit"]'),o=g.innerHTML;g.disabled=!0,g.innerHTML='<span class="inline-block animate-spin">⏳</span> Submitting…';let c=null;if(n){const w=(n.name.split(".").pop()||"jpg").toLowerCase().replace(/[^a-z0-9]/g,"")||"jpg",v=`${r.id}/${Date.now()}_${String(Math.random()).slice(2)}.${w}`,{error:f}=await T.storage.from("review-photos").upload(v,n,{contentType:n.type||"image/jpeg",cacheControl:"3600",upsert:!1});if(f){g.disabled=!1,g.innerHTML=o,alert("Could not upload photo: "+f.message);return}const{data:$}=T.storage.from("review-photos").getPublicUrl(v);c=$?.publicUrl||null}const{error:y}=await T.from("product_reviews").insert({listing_id:e.id||null,property_id:e.property_id||e.id||"",user_id:r.id,rating:q,comment:d,review_photo:c,is_approved:!0});if(g.disabled=!1,g.innerHTML=o,y){alert("Error: "+y.message);return}document.getElementById("review-text").value="",q=0,n=null,i&&(i.value=""),s&&(s.innerHTML=""),document.querySelectorAll(".star-btn").forEach(w=>{const v=w.querySelector("i");v.classList.remove("fill-amber-400","text-amber-400"),v.classList.add("text-gray-300")}),u&&(u.classList.remove("hidden"),setTimeout(()=>{u&&u.classList.add("hidden")},4e3)),U(e)})}async function U(e){const t=document.getElementById("reviews-list"),a=document.getElementById("reviews-summary"),r=document.getElementById("reviews-breakdown");if(!t)return;const i=lt(e),s={5:i.breakdown[5]||0,4:i.breakdown[4]||0,3:i.breakdown[3]||0,2:i.breakdown[2]||0,1:i.breakdown[1]||0};let n=Math.max(Number(i.total)||0,i.reviews.length);const u=[],l=e.property_id||e.id||"";if(l){const{data:f,error:$}=await T.from("product_reviews").select("*, profiles(full_name)").eq("property_id",l).eq("is_approved",!0).order("created_at",{ascending:!1});if(!$&&f)for(const x of f){u.push({...x,name:x.profiles?.full_name||"Anonymous",verified:x.is_verified_purchase});const E=Math.min(5,Math.max(1,Math.round(Number(x.rating)||0)));s[E]++,n++}}let d=0;for(let f=5;f>=1;f--)d+=f*s[f];const o=(n?d/n:0)||Number(e.rating)||0,c=n,y=`
    <div class="flex flex-wrap items-center gap-4 sm:gap-6">
      <div class="flex items-center gap-3">
        <div class="text-4xl font-black text-gray-900">${o>0?o.toFixed(1):"New"}</div>
        <div>
          <div class="flex gap-0.5">${st(o,"w-5 h-5")}</div>
          <div class="text-xs text-gray-500 mt-0.5">Customer Reviews</div>
        </div>
      </div>
      <div class="hidden sm:block w-px h-10 bg-gray-200"></div>
      <div class="flex flex-wrap gap-2">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Listing</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1.5 rounded-full"><i data-lucide="truck" class="w-3.5 h-3.5"></i> Fast Worldwide Delivery</span>
      </div>
    </div>`;a&&(a.innerHTML=y),r&&(r.innerHTML=ut(e,s,c));const w=[...u,...i.reviews];if(!w.length){t.innerHTML='<p class="text-gray-500 text-sm py-2">No reviews yet. Be the first to review this product!</p>',window.lucide&&lucide.createIcons();return}const v=w.slice(0,8);if(t.innerHTML=v.map(we).join(""),w.length>v.length){const f=document.createElement("div");f.className="mt-4 flex justify-center",f.innerHTML=`
      <button type="button" id="view-all-reviews-btn" class="btn-press inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition shadow-sm shadow-blue-500/20">
        View All Reviews
        <i data-lucide="chevron-down" class="w-4 h-4"></i>
      </button>`,t.appendChild(f);const $=f.querySelector("#view-all-reviews-btn");let x=!1;$.addEventListener("click",()=>{x||(x=!0,$.disabled=!0,t.innerHTML=w.map(we).join(""),window.lucide&&lucide.createIcons(),$t(t))})}window.lucide&&lucide.createIcons()}function $t(e){if(!e||document.getElementById("reviews-back-top"))return;const t=document.createElement("div");t.id="reviews-back-top",t.className="mt-5 flex justify-center",t.innerHTML=`
    <button type="button" class="btn-press inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-bold py-2.5 px-5 rounded-full text-xs transition shadow-sm">
      <i data-lucide="chevron-up" class="w-4 h-4"></i> Back to top
    </button>`,e.appendChild(t),t.querySelector("button").addEventListener("click",()=>{const a=document.getElementById("reviews-section");a&&a.scrollIntoView({behavior:"smooth",block:"start"})}),window.lucide&&lucide.createIcons()}async function It(e){const t=document.getElementById("recommendations-section"),a=document.getElementById("recommendations-grid");if(!t||!a||!e.id)return;const{data:r,error:i}=await T.from("product_recommendations").select("recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)").eq("listing_id",e.id).order("score",{ascending:!1}).limit(4);if(i){console.error("Recommendations load failed:",i.message),t.classList.add("hidden");return}let s=(r||[]).map(n=>n.showroom_listings).filter(Boolean);if(s.length<4){const{data:n}=await T.from("showroom_listings").select("property_id, title, price, currency, images, listing_type").eq("category",e.category).neq("id",e.id).eq("is_active",!0).order("rating",{ascending:!1}).limit(4-s.length);s=[...s,...n||[]]}if(s.length===0){t.classList.add("hidden");return}t.classList.remove("hidden"),a.innerHTML=s.map(n=>{const u=n.images&&n.images[0]||"/fallback.svg",l=typeof n.price=="number"?n.price:parseFloat(n.price||0),d=n.currency||"USD";return`<a href="/details.html?id=${n.property_id}" class="block bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition group">
      <div class="aspect-square overflow-hidden bg-gray-100"><img src="${p(u)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-gray-900 font-bold truncate">${p(n.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${d} ${l.toLocaleString()}</p></div>
    </a>`}).join("")}function p(e){return String(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function St(){const e=pt();if(!e){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}await qe();const t=De(e);if(t){C(t),document.title=`${t.title} | Weverse Online Shop`,J(t);try{R(t)}catch{}return}const a=ze(e);if(a){C(a),document.title=`${a.title} | Weverse Online Shop`,yt(a);return}const r=Ye(e);if(r){C(r),document.title=`${r.title} | Weverse Online Shop`,bt(r);return}const i=Ze(e);if(i){C(i),document.title=`${i.title} | Weverse Online Shop`,gt(i);return}const s=Xe(e);if(s){C(s),document.title=`${s.title} | Weverse Online Shop`,J(s);try{R(s)}catch{}return}const n=ht(e);if(n){C(n),document.title=`${n.title} | Weverse Online Shop`,J(n);try{R(n)}catch{}return}const[{generateListingById:u},{loadHiddenCatalogIds:l}]=await Promise.all([ye(()=>import("./catalog-3IUO5W3L.js"),__vite__mapDeps([0,1,2])),ye(()=>import("./catalog-hidden-store-wpIcgcJZ.js"),__vite__mapDeps([1,2]))]);await l();const d=u(e);if(!d){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}C(d),document.title=`${d.title} | Weverse Online Shop`,J(d);try{R(d)}catch{}}St();
