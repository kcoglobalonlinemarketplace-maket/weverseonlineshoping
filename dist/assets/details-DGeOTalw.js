import{a as it,b as nt,l as fe,f as oe,c as ve,_ as st,d as K,e as we,g as lt,S as ct}from"./scroll-progress-C-Ryfqim.js";import"./localization-BMbVwnoo.js";import{generateListingById as xe,getCatalogCategory as dt,getCatalogSample as ut}from"./catalog-CwEqzDf2.js";import{loadHiddenCatalogIds as ke,isCatalogListingHidden as pt}from"./catalog-hidden-store-BDiDWf_C.js";import{getTruckById as Se,formatTruckPrice as mt,TRUCK_LISTINGS as ht}from"./truck-data-DnyLExat.js";import{getMotorhomeById as $e,MOTORHOME_LISTINGS as yt}from"./motorhome-data-SSjGu6g8.js";import{getCarById as Ie,CAR_LISTINGS as bt}from"./car-data-BE0Va4cl.js";import{getPhoneById as gt,PHONE_LISTINGS as ft}from"./phone-data-D3PvG27c.js";import{PET_LISTINGS as vt}from"./pet-data-B7wfSbng.js";import{PRODUCT_LISTINGS as Re}from"./products-data-CGLFLAJM.js";import{s as Le,o as Y,r as wt}from"./showroom-cards-OQXdtKhY.js";import{getCurrentUser as M,setRedirectAfterAuth as j}from"./auth-C8sthrmE.js";import{supabase as I}from"./supabase-client-nvpjTmO6.js";import{b as xt}from"./cart-DNy8CJA3.js";import"./localization-bootstrap-OCYar-RR.js";import"./products-extra-DecCj9NU.js";function _e(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return t>>>0}function kt(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}const ie=["James","Emma","Liam","Olivia","Noah","Ava","Ethan","Sophia","Lucas","Mia","Daniel","Isabella","Matthew","Charlotte","Samuel","Amelia","Gabriel","Harper","Nathan","Evelyn","Caleb","Abigail","Adrian","Ella","Owen","Grace","Leo","Chloe","Julian","Nora","Mason","Aria","Elijah","Layla","Isaac","Zoe","Hunter","Scarlett","Christian","Lily","Aaron","Hannah","Dylan","Savannah","Andrew","Ruby","David","Elena","Ryan","Nina","Marcus","Priya","Kwame","Fatima","Andre","Yuki","Tomas","Ingrid","Mateo","Sofia","Omar","Zara","Felix","Amara","Jonas","Leila","Victor","Mila","Diego","Iris","Hugo","Camila","Adam","Freya","Oscar","Amina","Peter","Naomi","Elias","Lucia","Ray","Talia","Marco","Sienna","Joshua","Anya","Kofi","Petra"],W=["Anderson","Baker","Carter","Diaz","Evans","Foster","Garcia","Harris","Ingram","Johnson","Kelly","Lewis","Miller","Nelson","Ortiz","Parker","Quinn","Reed","Sanders","Turner","Underwood","Vaughn","Walker","Young","Zimmerman","Brooks","Coleman","Dunn","Fisher","Grant","Hayes","Jordan","Knight","Lopez","Morgan","Nguyen","Okafor","Peterson","Romano","Silva","Thompson","Umeh","Volkov","Wang","Xu","Yates","Zhou","Bennett","Chukwu","Doyle","Eze","Ferreira","Gonzalez","Hansen","Ivanov","Jansen","Kumar","Larsen","Moreau","Novak","Osei","Patel","Quintero","Rossi","Schmidt","Tavares","Ueda","Vasquez","Weber","Xavier","Yamamoto","Ziegler","Adeyemi","Barlow","Costa","Diop","Eriksen","Fontaine","Gomez","Holmes","Ikram","Juma","Karlsson","Lawson","Mensah","Nilsson"],Ee=[{city:"Austin",country:"United States"},{city:"New York",country:"United States"},{city:"Seattle",country:"United States"},{city:"Los Angeles",country:"United States"},{city:"Chicago",country:"United States"},{city:"Boston",country:"United States"},{city:"San Diego",country:"United States"},{city:"Denver",country:"United States"},{city:"Miami",country:"United States"},{city:"Portland",country:"United States"},{city:"Toronto",country:"Canada"},{city:"Vancouver",country:"Canada"},{city:"Montreal",country:"Canada"},{city:"Calgary",country:"Canada"},{city:"Ottawa",country:"Canada"},{city:"London",country:"United Kingdom"},{city:"Manchester",country:"United Kingdom"},{city:"Birmingham",country:"United Kingdom"},{city:"Edinburgh",country:"United Kingdom"},{city:"Glasgow",country:"United Kingdom"},{city:"Bristol",country:"United Kingdom"},{city:"Liverpool",country:"United Kingdom"},{city:"Dublin",country:"Ireland"},{city:"Cork",country:"Ireland"},{city:"Paris",country:"France"},{city:"Lyon",country:"France"},{city:"Marseille",country:"France"},{city:"Berlin",country:"Germany"},{city:"Munich",country:"Germany"},{city:"Hamburg",country:"Germany"},{city:"Frankfurt",country:"Germany"},{city:"Amsterdam",country:"Netherlands"},{city:"Rotterdam",country:"Netherlands"},{city:"Brussels",country:"Belgium"},{city:"Antwerp",country:"Belgium"},{city:"Zurich",country:"Switzerland"},{city:"Geneva",country:"Switzerland"},{city:"Vienna",country:"Austria"},{city:"Rome",country:"Italy"},{city:"Milan",country:"Italy"},{city:"Florence",country:"Italy"},{city:"Madrid",country:"Spain"},{city:"Barcelona",country:"Spain"},{city:"Valencia",country:"Spain"},{city:"Lisbon",country:"Portugal"},{city:"Porto",country:"Portugal"},{city:"Stockholm",country:"Sweden"},{city:"Gothenburg",country:"Sweden"},{city:"Oslo",country:"Norway"},{city:"Copenhagen",country:"Denmark"},{city:"Helsinki",country:"Finland"},{city:"Reykjavik",country:"Iceland"},{city:"Warsaw",country:"Poland"},{city:"Krakow",country:"Poland"},{city:"Prague",country:"Czech Republic"},{city:"Athens",country:"Greece"},{city:"Sydney",country:"Australia"},{city:"Melbourne",country:"Australia"},{city:"Brisbane",country:"Australia"},{city:"Perth",country:"Australia"},{city:"Adelaide",country:"Australia"},{city:"Auckland",country:"New Zealand"},{city:"Wellington",country:"New Zealand"},{city:"Christchurch",country:"New Zealand"},{city:"Singapore",country:"Singapore"},{city:"Tokyo",country:"Japan"},{city:"Osaka",country:"Japan"},{city:"Kyoto",country:"Japan"},{city:"Seoul",country:"South Korea"},{city:"Busan",country:"South Korea"},{city:"Dubai",country:"United Arab Emirates"},{city:"Abu Dhabi",country:"United Arab Emirates"},{city:"Doha",country:"Qatar"},{city:"Tel Aviv",country:"Israel"},{city:"Taipei",country:"Taiwan"},{city:"Hong Kong",country:"Hong Kong"}],ne=["Great shopping experience","Easy checkout","Smooth ordering","Fast delivery","Excellent service","Very reliable store","Impressed with the site","Would shop again","Worth it","As advertised","Professional team","Quick response","Secure checkout","Clear communication","Trustworthy shop","Happy with my order","Simple and easy","Great customer service","Everything on time","No issues at all","Very professional","Highly recommended","Smooth transaction","Well organised","Pleasant experience","Top quality service","Efficient and quick","Great overall","Straightforward","Genuinely impressed","Seamless process","Responsive support","Delivered as promised","Exceptional experience","Reliable shipping","Five star service","Perfect order","Great communication","Honest shop","First class service","Very satisfied","Quick and easy","Professional all round","Better than expected","Zero hassle","A pleasure to shop","Consistently good","Outstanding support","Smooth all the way","Absolutely perfect"],O=[" shopping"," experience"," service"," process"," order"," delivery"," support"," checkout"," communication"," transaction"," shop"," site"," handling"," team"," packaging"," quality"," speed"," follow-up"," attention"," standard"," professionalism"," care"," results"," accuracy"," efficiency"," convenience"," presentation"," reliability"," trust"," customer care"," experience online"," store"," purchase"," every time"," overall"," end to end"," turnaround"," dealings"," execution"],V=["Ordering on the website was straightforward and the checkout process went smoothly.","I placed my first order through the site and the whole experience was very pleasant.","The website was easy to use and placing the order took just a couple of minutes.","This was my first time shopping with them and I was genuinely impressed.","I ordered through the website and everything worked exactly as it should.","The online checkout was quick, secure, and completely painless.","I have ordered from many online shops and this experience stood out.","Setting up my account and placing the order was simple and clear.","The site made it very easy to find what I wanted and complete my purchase.","I was a little unsure at first, but the whole process turned out to be very professional.","From browsing to checkout, everything on the website was well organised.","I have used this online shop a few times now and it never disappoints.","The ordering process was quick and everything was confirmed instantly.","I appreciated how clear the website was about pricing, shipping, and delivery.","Placing my order was effortless and the confirmation came through right away.","The online shop handled my order professionally from start to finish.","It was my first international online order and it went perfectly.","The website checkout was smooth and I felt secure throughout.","I found the store easy to navigate and the order process very user friendly.","Everything from selection to payment was handled neatly and clearly."],T=["Shipping was faster than expected and the package arrived in perfect condition.","The parcel was well packed and arrived exactly when the tracking promised.","Customer service replied quickly and answered all my questions patiently.","Delivery was prompt and the courier was courteous and careful.","The order updates kept me informed at every stage of the journey.","My payment was processed securely and I received confirmation immediately.","The package arrived beautifully wrapped and completely intact.","I was kept updated throughout the whole delivery process.","The estimated delivery date was accurate and the order arrived on time.","Communication from the team was clear, friendly, and professional.","The packaging was sturdy and everything arrived in perfect shape.","It was dispatched quickly, well within the promised time.","The tracking worked perfectly and the delivery was smooth.","Customer support helped me quickly when I had a small question.","The whole transaction was handled efficiently and without any issues.","My order arrived earlier than the estimated date, which was a nice surprise.","The team processed my order quickly and kept me well informed.","The website kept me updated with clear order status throughout.","Delivery went exactly as scheduled and the item arrived safely.","I appreciated the fast dispatch and careful handling of my order.","Everything arrived as described and on the exact date promised.","The checkout confirmed my order instantly and the follow-up was excellent.","The support team responded to my query within minutes.","My package arrived in pristine condition with great packaging.","The order was handled with care from the moment I placed it.","Tracking updates were timely and the delivery was hassle free.","The team went out of their way to make sure everything was perfect.","It was a smooth, well managed order from start to finish.","The delivery arrived well within the window they promised.","Everything about the transaction was clear, honest, and professional.","My order was processed and shipped with impressive speed.","The customer service was responsive and genuinely helpful.","The package arrived exactly on schedule and in perfect condition.","They kept their promise on delivery time and the quality was clear.","The whole experience online was seamless and reassuring.","Every step, from payment to delivery, was handled perfectly.","The order status updates were clear and always accurate.","It was dispatched the same day and arrived quickly.","The shopping experience was smooth and completely trustworthy.","Their follow-up after delivery was thoughtful and professional."],se=["I will definitely be shopping here again.","Would happily recommend this online shop to friends.","A five star experience from start to finish.","No hesitation in recommending them to others.","Very pleased with the whole experience.","I am glad I chose this shop for my order.","A really professional online store worth trusting.","Would not think twice about ordering again.","They have earned a loyal customer in me.","Highly recommended for anyone ordering online.","A great experience and I will be back.","Their service deserves every bit of praise.","I would confidently order from them again.","A genuinely pleasant shopping experience.","Five stars, no question about it.","They are now my go to online shop."],Te={vehicle:["The vehicle was listed accurately and the delivery arrangement was handled very professionally by the shop.","The shop arranged safe delivery of the vehicle and kept me updated the whole way."],property:["The listing was accurate and the shop team guided me through the process smoothly.","The shop handled all the paperwork and communication professionally throughout."],phone:["The phone matched the description exactly and the shop dispatched it quickly and safely.","The shop confirmed all the device details before shipping and the packaging was excellent."],pet:["The shop handled the entire arrangement with care and kept me informed at every step.","All the paperwork was provided and the shop made the process very easy."],product:["The item matched the listing perfectly and the shop delivered it in great condition.","The shop processed and dispatched my order quickly with careful packaging."]},He=[{year:2018,w:3},{year:2019,w:7},{year:2020,w:11},{year:2021,w:13},{year:2022,w:15},{year:2023,w:16},{year:2024,w:15},{year:2025,w:12},{year:2026,w:8}],St=He.reduce((e,t)=>e+t.w,0);function $t(e){let t=e()*St;for(const a of He){if(t<a.w)return a.year;t-=a.w}return 2024}function z(e,t,a,r){return(e+t*a)%r}function It(e,t={}){const a=String(e.property_id||e.id||"");if(!a)return{reviews:[],breakdown:{5:0,4:0,3:0,2:0,1:0},total:0,computedRating:0};const r=_e(a),i=187+r%660,n=Math.min(5,Math.max(1,Number(e.rating)||0))||4.5;let c=Math.max(.3,Math.min(.9,n/5)),o=1-c,d=.07,l=.04,m=.03;const h=1/(c+o+d+l+m);c*=h,o*=h,d*=h,l*=h,m*=h;const f=[c,o,d,l,m],w=e.listing_type==="vehicle"?"vehicle":e.listing_type==="property"?"property":e.listing_type==="pet"?"pet":String(e.category||"").toLowerCase().includes("phone")?"phone":"product",v=Te[w]||Te.product,x=[],b=ie.length*W.length,S=ne.length*O.length,u=V.length*T.length*T.length*se.length,g=137,F=457,k=811;for(let y=0;y<i;y++){const A=kt(_e(a+"::"+y));let Oe=A(),me=5,he=0;for(let U=5;U>=1;U--)if(he+=f[5-U],Oe<=he){me=U;break}const ye=z(r,y,F,b),Ve=ie[Math.floor(ye/W.length)%ie.length],ze=W[ye%W.length],Ge=`${Ve} ${ze}`,be=z(r,y,g,S),Ke=ne[Math.floor(be/O.length)%ne.length]+O[be%O.length];let $=z(r,y,k,u);const Ye=V[$%V.length];$=Math.floor($/V.length);const Je=T[$%T.length];$=Math.floor($/T.length);const Ze=T[$%T.length];$=Math.floor($/T.length);const Qe=se[$%se.length];let D=`${Ye} ${Je}`;y%3===0&&v.length&&(D+=` ${v[y%v.length]}`),y%2===0&&(D+=` ${Ze}`),D+=` ${Qe}`;const Xe=Ee[z(r,y,337,Ee.length)],et=Date.now(),ge=$t(A),tt=ge===2018?10+Math.floor(A()*3):1+Math.floor(A()*12),at=1+Math.floor(A()*28),rt=Date.UTC(ge,tt-1,at),ot=new Date(Math.min(rt,et)).toISOString();x.push({name:Ge,location:Xe.country,date:ot,rating:me,title:Ke,text:D,verified:!1,seeded:!0})}x.sort((y,A)=>y.date<A.date?1:-1);const E={5:0,4:0,3:0,2:0,1:0};let q=0;for(let y=5;y>=1;y--)E[y]=Math.round(i*f[5-y]),q+=E[y];const C=i-q;C!==0&&(E[C>0?5:1]+=C);let pe=0;for(let y=5;y>=1;y--)pe+=y*E[y];const We=pe/i;return{reviews:x,breakdown:E,total:i,computedRating:We}}const _="/fallback.svg";function J(e){return Array.isArray(e)&&e.length>0?e:[_]}function Lt(e,t="w-4 h-4"){const a=Math.round(Number(e)||0);return[1,2,3,4,5].map(r=>`<i data-lucide="star" class="${t} ${r<=a?"fill-amber-400 text-amber-400 drop-shadow-[0_1px_4px_rgba(0,0,0,.6)]":"text-white/40"}"></i>`).join("")}function Z(e,t,a="blue"){const r={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"};return`
    <div class="flex items-center gap-2.5 mb-4">
      <div class="shrink-0 w-10 h-10 rounded-xl ${r[a]||r.blue} flex items-center justify-center"><i data-lucide="${e}" class="w-5 h-5"></i></div>
      <h3 class="text-lg font-black text-gray-900 tracking-tight">${t}</h3>
    </div>`}function _t(e){return`
    <div class="bg-gray-50 border border-gray-100 rounded-xl p-3.5">
      <div class="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5"><i data-lucide="${e.icon}" class="w-3.5 h-3.5"></i>${e.label}</div>
      <div class="text-gray-900 font-bold text-[15px] leading-snug">${p(e.value)}</div>
    </div>`}function G(e,t,a,r="blue"){return!a||!a.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${Z(t,e,r)}
      ${je(a)}
    </div>`}function je(e){return!e||!e.length?"":`<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">${e.map(_t).join("")}</div>`}function Q(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${Z("list-checks","Features & Amenities","emerald")}
      ${Ne(e)}
    </div>`}function Ne(e){return!e||!e.length?"":`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5">
            <span class="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
            <span class="text-[15px] text-gray-800 font-medium">${p(t)}</span>
          </div>`).join("")}
      </div>`}function Et(e){return!e||!e.length?"":`
    <div class="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
      ${Z("star","Highlights","amber")}
      ${Fe(e)}
    </div>`}function Fe(e){return!e||!e.length?"":`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${e.map(t=>`
          <div class="flex items-start gap-2.5 bg-amber-50/60 border border-amber-100 rounded-xl px-3.5 py-2.5">
            <i data-lucide="badge-check" class="w-4 h-4 text-amber-500 mt-0.5 shrink-0"></i>
            <span class="text-[15px] text-gray-800 font-medium">${p(t)}</span>
          </div>`).join("")}
      </div>`}function P(e,t,a,r,i=!1,s="blue"){const n={blue:"bg-blue-50 text-blue-600",amber:"bg-amber-50 text-amber-600",emerald:"bg-emerald-50 text-emerald-600",violet:"bg-violet-50 text-violet-600",rose:"bg-rose-50 text-rose-600"},c=n[s]||n.blue;return`
    <div class="bg-white border border-gray-200 rounded-2xl mb-3 overflow-hidden shadow-sm">
      <button type="button" data-acc="${e}" class="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left hover:bg-gray-50 transition active:bg-gray-100">
        <span class="flex items-center gap-3 min-w-0">
          <span class="shrink-0 w-10 h-10 rounded-xl ${c} flex items-center justify-center"><i data-lucide="${t}" class="w-5 h-5"></i></span>
          <span class="text-[15px] sm:text-base font-black text-gray-900 tracking-tight">${a}</span>
        </span>
        <span data-acc-icon="${e}" class="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${i?"rotate-180":""}">
          <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500"></i>
        </span>
      </button>
      <div data-acc-body="${e}" class="px-4 sm:px-5 pb-5 ${i?"":"hidden"}">
        ${r}
      </div>
    </div>`}window.toggleAccordion=e=>{const t=document.querySelector(`[data-acc-body="${e}"]`),a=document.querySelector(`[data-acc-icon="${e}"]`);!t||!a||(t.classList.toggle("hidden"),a.classList.toggle("rotate-180"))};function Tt(){return`
    <div class="space-y-3 text-[15px] text-gray-700 leading-relaxed">
      <p class="flex items-start gap-2.5"><i data-lucide="truck" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Shipping methods.</strong> Standard delivery is <strong>free worldwide</strong> (3–7 business days). Express (2–4 business days, $25) and Priority (1–2 business days, $50) are available at checkout.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Courier partners.</strong> We ship with trusted international couriers — DHL, FedEx, UPS and EMS. Every shipment gets a tracking number.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="clock" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Processing time.</strong> Orders are processed within 1–2 business days after payment confirmation. Bank-transfer orders are processed once the receipt is verified.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="globe" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">International delivery.</strong> We ship to over 200 countries. Customs duties and import taxes may apply and are the buyer's responsibility.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="search-check" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Tracking.</strong> You'll receive a shipping confirmation email with your tracking number. You can also track orders from your account dashboard.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="badge-help" class="w-5 h-5 text-blue-500 mt-0.5 shrink-0"></i><span>Questions? <a href="/shipping-policy.html" class="text-blue-600 font-bold hover:underline">Read the full Shipping Policy</a>.</span></p>
    </div>`}function At(){return`
    <div class="space-y-3 text-[15px] text-gray-700 leading-relaxed">
      <p class="flex items-start gap-2.5"><i data-lucide="rotate-ccw" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">14-day easy returns.</strong> Items may be returned within 14 days of delivery. Refund requests must be submitted within 30 days of the order date.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="calendar-x" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Cancellation before shipment.</strong> Cancel before your order ships and a full refund is issued within 5–7 business days.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package-x" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Damaged or defective.</strong> If your item arrives damaged, contact us within 7 days with photos — we arrange a replacement or full refund, including return shipping.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="package-search" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Non-delivery.</strong> If your order doesn't arrive within the estimated window plus 14 days, we investigate with the carrier and refund or resend at no cost.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="wallet" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Refund processing.</strong> Approved refunds are processed within 5–7 business days. Card refunds take 5–10 business days to appear, bank transfers 7–14, mobile money 3–5.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="circle-slash" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span><strong class="text-gray-900">Non-refundable.</strong> Final-sale items, digital products, and items used or damaged by the customer are not eligible for refunds.</span></p>
      <p class="flex items-start gap-2.5"><i data-lucide="badge-help" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i><span>Questions? <a href="/refund-policy.html" class="text-blue-600 font-bold hover:underline">Read the full Return &amp; Refund Policy</a>.</span></p>
    </div>`}function Ct(){const e=[{q:"How do I track my order?",a:"Once your order ships you'll get a confirmation email with your tracking number. You can also track it anytime from your account dashboard under Shipping & Delivery."},{q:"Is shipping really free worldwide?",a:"Yes. Standard shipping to any country is free on every order. Express and Priority upgrades are available at checkout if you need it sooner."},{q:"How long does delivery take?",a:"Standard delivery takes 3–7 business days. Express takes 2–4 business days and Priority 1–2 business days. Processing adds 1–2 business days after payment is confirmed."},{q:"How do returns work?",a:"Items can be returned within 14 days of delivery. Refund requests must be submitted within 30 days of the order date — see the Return &amp; Refund Policy section above."}],t=[{q:"Is my payment secure?",a:"Yes. All payments are processed over SSL-encrypted connections through certified payment gateways. Your payment details are never stored on our servers in plain text."},{q:"Can I cancel my order before it ships?",a:"Absolutely. Cancel before shipment and a full refund is issued within 5–7 business days to your original payment method."},{q:"What if my item arrives damaged?",a:"Contact us within 7 days of delivery with photos and a description. We'll arrange a replacement or a full refund — including return shipping costs."},{q:"How do I contact customer support?",a:"Email us at support@weverseonlineshop.com or use the Contact page. Our team reviews every message within 48 hours."},{q:"Do you ship to my country?",a:"We ship to over 200 countries worldwide. Customs duties and import taxes, where applicable, are the buyer's responsibility."},{q:"How do I request a refund?",a:"Email support@weverseonlineshop.com with your order number, the reason, and any supporting documentation. Approved refunds are processed within 5–7 business days."}],a=r=>`
    <div class="border border-gray-100 rounded-xl overflow-hidden">
      <button type="button" data-acc="faq" class="faq-q w-full flex items-center justify-between gap-3 p-3.5 text-left hover:bg-gray-50 transition">
        <span class="text-[14px] font-bold text-gray-900">${p(r.q)}</span>
        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300"></i>
      </button>
      <div class="faq-a hidden px-3.5 pb-3.5 text-sm text-gray-600 leading-relaxed">${p(r.a)}</div>
    </div>`;return`
    <div class="space-y-2">
      ${e.map(a).join("")}
      <div class="faq-extra hidden space-y-2">${t.map(a).join("")}</div>
      <button type="button" id="faq-show-more" class="mt-2 w-full inline-flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-blue-600 font-bold py-2.5 rounded-xl text-sm transition">
        Show more questions <i data-lucide="chevron-down" class="w-4 h-4"></i>
      </button>
    </div>`}function X(e,t,a,r,i){const s=`
    <p class="text-[15px] sm:text-base text-gray-700 leading-relaxed">${p(e.description||"")}</p>
    ${i||""}
    ${Fe(r)}
    ${Ne(a)}`;return`
    ${P("acc-details","file-text","Product Details",s,!0,"blue")}
    ${P("acc-specs","settings-2","Specifications",je(t)||'<p class="text-sm text-gray-500">No specifications available for this listing.</p>',!0,"violet")}
    ${P("acc-shipping","truck","Shipping Information",Tt(),!1,"emerald")}
    ${P("acc-refund","rotate-ccw","Return &amp; Refund Policy",At(),!1,"rose")}
    ${P("acc-faq","circle-help","Frequently Asked Questions",Ct(),!1,"amber")}`}function ee(){const e=document.getElementById("details-content");if(!e)return;e.querySelectorAll("[data-acc]").forEach(a=>{a.dataset.bound||(a.dataset.bound="1",a.addEventListener("click",()=>{const r=a.dataset.acc,i=e.querySelector(`[data-acc-body="${r}"]`),s=e.querySelector(`[data-acc-icon="${r}"]`);!i||!s||(i.classList.toggle("hidden"),s.classList.toggle("rotate-180"),window.lucide&&lucide.createIcons())}))}),e.querySelectorAll(".faq-q").forEach(a=>{a.dataset.bound||(a.dataset.bound="1",a.addEventListener("click",()=>{const r=a.querySelector("i, svg"),i=a.nextElementSibling;i&&(i.classList.toggle("hidden"),r&&r.classList.toggle("rotate-180"))}))});const t=e.querySelector("#faq-show-more");t&&!t.dataset.bound&&(t.dataset.bound="1",t.addEventListener("click",()=>{const a=e.querySelector(".faq-extra");if(!a)return;a.classList.toggle("hidden");const r=t.querySelector("i, svg");r&&r.classList.toggle("rotate-180"),t.innerHTML=a.classList.contains("hidden")?'Show more questions <i data-lucide="chevron-down" class="w-4 h-4"></i>':'Show fewer questions <i data-lucide="chevron-up" class="w-4 h-4"></i>',window.lucide&&lucide.createIcons()}))}function Ae(e){const t=e.name||e.profiles?.full_name||"Anonymous",a=p(t.trim().charAt(0).toUpperCase()||"A"),r=e.location?`<span class="text-xs text-slate-300">&middot; ${p(e.location)}</span>`:"",i=e.title?`<p class="text-sm font-bold text-white mt-1">${p(e.title)}</p>`:"",s=e.review_photo?`<div class="mt-2.5"><img src="${p(e.review_photo)}" alt="Customer photo" class="w-28 h-28 object-cover rounded-xl border border-white/10" loading="lazy" onerror="this.style.display='none'"></div>`:"";return`
    <div class="flex gap-3 py-4 border-b border-white/10 last:border-0">
      <div class="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-black uppercase shadow-sm">${a}</div>
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-sm font-bold text-white">${p(t)}</span>${r}
          <span class="text-xs text-slate-300">${new Date(e.date||e.created_at).toLocaleDateString()}</span>
        </div>
        <div class="flex gap-0.5 mt-1">${[1,2,3,4,5].map(n=>`<i data-lucide="star" class="w-3.5 h-3.5 ${n<=(e.rating||0)?"fill-amber-400 text-amber-400":"text-white/40"}"></i>`).join("")}</div>
        ${i}
        <p class="text-[15px] text-slate-100 leading-relaxed mt-1.5">${p(e.text||e.comment||"")}</p>
        ${s}
      </div>
    </div>`}function te(e){return`
    <div id="reviews-section" class="relative overflow-hidden rounded-2xl mb-6 shadow-sm">
      <div class="absolute inset-0" data-bg-slot="reviews"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/90"></div>
      <div class="relative p-4 sm:p-6">
        <div class="flex items-center gap-2.5 mb-5">
          <div class="shrink-0 w-10 h-10 rounded-xl bg-amber-400/15 text-amber-300 flex items-center justify-center"><i data-lucide="message-square-star" class="w-5 h-5"></i></div>
          <h3 class="text-lg font-black text-white tracking-tight">Customer Reviews</h3>
        </div>
        <div class="rounded-2xl border border-white/10 bg-slate-950/55 backdrop-blur-md shadow-xl shadow-slate-950/40 p-5 mb-4">
          <div id="reviews-summary" class="mb-1"><div class="text-slate-400 text-sm py-3">Loading ratings…</div></div>
          <div id="reviews-breakdown"></div>
        </div>
        <div class="rounded-2xl border border-white/10 bg-slate-950/55 backdrop-blur-md shadow-xl shadow-slate-950/40 p-5 mb-4">
          <div id="reviews-list"><div class="text-slate-400 text-sm py-4">Loading reviews…</div></div>
        </div>
        <div class="rounded-2xl border border-white/10 bg-slate-950/55 backdrop-blur-md shadow-xl shadow-slate-950/40 p-5">
          <div id="review-form-wrapper">
            <h4 class="text-[15px] font-black text-white mb-3 flex items-center gap-2"><i data-lucide="pen-line" class="w-4 h-4 text-blue-400"></i> Write a Review</h4>
            <div id="review-login-msg" class="text-xs text-slate-300">Please <a href="/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}" class="text-blue-400 hover:underline">sign in</a> to write a review.</div>
            <form id="review-form" class="space-y-3 hidden">
              <div class="flex items-center gap-2">
                <label class="text-xs text-slate-300 font-bold uppercase">Rating</label>
                <div id="star-rating" class="flex gap-1">
                  ${[1,2,3,4,5].map(a=>`<button type="button" data-rating="${a}" class="star-btn p-1"><i data-lucide="star" class="w-5 h-5 text-gray-300 hover:text-amber-400 transition"></i></button>`).join("")}
                </div>
              </div>
              <textarea id="review-text" rows="3" placeholder="Share your experience with this product..." class="w-full bg-slate-950/50 border border-white/15 rounded-xl px-4 py-3 text-[15px] text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"></textarea>
              <div class="flex items-center gap-3">
                <label for="review-photo-input" class="inline-flex items-center gap-2 text-xs font-bold text-slate-200 bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 cursor-pointer hover:border-blue-300 hover:bg-white/15 transition">
                  <i data-lucide="camera" class="w-4 h-4 text-blue-400"></i> Add a photo
                </label>
                <input id="review-photo-input" type="file" accept="image/*" class="hidden">
                <div id="review-photo-preview" class="flex items-center gap-2"></div>
              </div>
              <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition">Submit Review</button>
              <div id="review-submit-msg" class="text-xs text-emerald-300 font-bold hidden"><i data-lucide="check-circle" class="w-3.5 h-3.5 inline"></i> Thank you! Your review is now live.</div>
            </form>
          </div>
        </div>
      </div>
    </div>`}function Bt(e,t,a){const r=Math.max(1,a);return`
    <div class="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-1 items-center bg-white/[.06] border border-white/10 rounded-2xl p-4 backdrop-blur">
      ${[5,4,3,2,1].map(i=>{const s=t[i]||0,n=Math.round(s/r*100);return`
        <div class="flex items-center gap-1.5 text-xs text-slate-300 font-medium"><i data-lucide="star" class="w-3 h-3 ${i<=5?"fill-amber-400 text-amber-400":""}"></i>${i}</div>
        <div class="flex items-center gap-2">
          <div class="flex-1 h-2 bg-white/15 rounded-full overflow-hidden"><div class="h-full bg-amber-400 rounded-full" style="width:${n}%"></div></div>
          <span class="text-[11px] text-slate-400 w-9 text-right tabular-nums">${n}%</span>
        </div>`}).join("")}
    </div>`}function Mt(){return new URLSearchParams(window.location.search).get("id")}const B=[...Re];function Ce(e){return B.find(t=>t.property_id===e)||null}let le=null;function qt(){return le||(le=st(()=>import("./products-extra-DecCj9NU.js"),[]).then(e=>{const t=e.PRODUCT_EXTRA_LISTINGS||[];for(const a of t)B.some(r=>r.property_id===a.property_id)||B.push(a);return B}).catch(()=>B)),le}function Pt(e){const t=document.getElementById("details-content"),a=mt(e),i=J(e.images).map((l,m)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${m===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${p(l)}">
      <img src="${p(l)}" alt="View ${m+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${_}'">
    </button>`).join(""),s=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cargo Area / Truck Bed","Engine","Wheels / Tires","Additional View"],n=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"package",label:"Payload Capacity",value:e.payload_capacity},{icon:"link",label:"Towing Capacity",value:e.towing_capacity},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(l=>l.value!=null&&l.value!==""&&l.value!=="N/A");Q(e.features);const c=te();t.innerHTML=`
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

      ${c}

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
      ${X(e,n,e.features,null,null)}

      ${ue(e)}

      ${ae()}
    </div>
  `;const o=document.getElementById("hero-image"),d=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((l,m)=>{l.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.add("border-gray-200")),l.classList.add("active","border-blue-500"),l.classList.remove("border-gray-200"),o.src=l.dataset.img,d.textContent=s[m]||`View ${m+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await M()?window.location.href=`/checkout.html?id=${e.property_id}`:(j(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Y(e)}),H(e),re(e),N(e),ee(),window.lucide&&lucide.createIcons()}function Rt(e){const t=document.getElementById("details-content"),a=K(e),i=J(e.images).map((l,m)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${m===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${p(l)}">
      <img src="${p(l)}" alt="View ${m+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${_}'">
    </button>`).join(""),s=["Exterior Front","Exterior Side","Exterior Rear","Living Area","Kitchen","Bedroom","Bathroom","Additional View"],n=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(l=>l.value!=null&&l.value!==""&&l.value!=="N/A");Q(e.features);const c=te();t.innerHTML=`
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

      ${c}

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
      ${X(e,n,e.features,null,null)}

      ${ue(e)}

      ${ae()}
    </div>
  `;const o=document.getElementById("hero-image"),d=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((l,m)=>{l.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.add("border-gray-200")),l.classList.add("active","border-blue-500"),l.classList.remove("border-gray-200"),o.src=l.dataset.img,d.textContent=s[m]||`View ${m+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await M()?window.location.href=`/checkout.html?id=${e.property_id}`:(j(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Y(e)}),H(e),re(e),N(e),ee(),window.lucide&&lucide.createIcons()}function Ht(e){const t=document.getElementById("details-content"),a=K(e),i=J(e.images).map((l,m)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${m===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${p(l)}">
      <img src="${p(l)}" alt="View ${m+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${_}'">
    </button>`).join(""),s=["Front View","Rear View","Left Side","Right Side","Interior Dashboard","Driver Seat","Cabin / Interior","Wheels / Tires","Additional View"],n=[{icon:"building-2",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Model Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"truck",label:"Drive Type",value:e.drive_type},{icon:"palette",label:"Colour",value:e.color},{icon:"barcode",label:"VIN",value:e.vin},{icon:"tag",label:"Stock Number",value:e.stock_number}].filter(l=>l.value!=null&&l.value!==""&&l.value!=="N/A");Q(e.features);const c=te();t.innerHTML=`
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

      ${c}

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
      ${X(e,n,e.features,null,null)}

      ${ue(e)}

      ${ae()}
    </div>
  `;const o=document.getElementById("hero-image"),d=document.getElementById("gallery-label");t.querySelectorAll(".gallery-thumb").forEach((l,m)=>{l.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(h=>h.classList.add("border-gray-200")),l.classList.add("active","border-blue-500"),l.classList.remove("border-gray-200"),o.src=l.dataset.img,d.textContent=s[m]||`View ${m+1}`})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await M()?window.location.href=`/checkout.html?id=${e.property_id}`:(j(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Y(e)}),H(e),re(e),N(e),ee(),window.lucide&&lucide.createIcons()}function jt(e){const a=e.listing_type==="property"?"Share Property":"Share";return`
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
  `}function ue(e){const t=e.listing_type==="property",a=`/contact.html?listing=${encodeURIComponent(e.property_id||"")}`;return`
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
      </div>`}function Nt(e){const t=new Map,a=i=>(i||[]).forEach(s=>{s&&s.property_id&&t.set(s.property_id,s)});a(ct),a(ht),a(yt),a(bt),a(ft),a(vt),a(Re),a(B),a(lt());const r=dt(e.category||e.subcategory);return r&&a(ut(r.slug,50)),[...t.values()].filter(i=>i.property_id!==e.property_id)}function Ft(e,t){let a=0;const r=d=>String(d||"").trim().toLowerCase();e.listing_type&&e.listing_type===t.listing_type&&(a+=40),e.category&&r(e.category)===r(t.category)&&(a+=30),e.subcategory&&r(e.subcategory)===r(t.subcategory)&&(a+=20),e.brand&&r(e.brand)===r(t.brand)&&(a+=15),e.breed&&r(e.breed)===r(t.breed)&&(a+=15),e.model&&r(e.model)===r(t.model)&&(a+=10),e.property_type&&r(e.property_type)===r(t.property_type)&&(a+=15);const i=parseFloat(e.price)||0,s=parseFloat(t.price)||0;if(i>0&&s>0){const d=Math.min(i,s)/Math.max(i,s);d>=.8?a+=10:d>=.6?a+=6:d>=.4&&(a+=3)}e.country_code&&e.country_code===t.country_code&&(a+=5);const n=new Set(r(e.title).split(/[^a-z0-9]+/).filter(d=>d.length>2)),c=new Set(r(t.title).split(/[^a-z0-9]+/).filter(d=>d.length>2));let o=0;return n.forEach(d=>{c.has(d)&&o++}),a+=Math.min(o*2,10),a}function ce(e,t){const a=document.getElementById(e);if(!a)return;const r=a.querySelector(".rel-grid");if(!r)return;if(!t.length){a.classList.add("hidden");return}a.classList.remove("hidden"),r.innerHTML="";const i=document.createDocumentFragment();t.slice(0,10).forEach(s=>{const n=document.createElement("div");n.className="shrink-0 w-[260px] sm:w-[320px] snap-start";const c=wt(s);c.style.width="100%",n.appendChild(c),i.appendChild(n)}),r.appendChild(i),window.lucide&&lucide.createIcons()}function H(e){const t=Nt(e),a=t.map(o=>({item:o,score:Ft(e,o)})).sort((o,d)=>d.score-o.score||(d.item.rating||0)-(o.item.rating||0)),r=a.filter(o=>o.score>=35).map(o=>o.item),i=new Set(r.map(o=>o.property_id)),s=a.filter(o=>o.score>=15&&o.score<35&&!i.has(o.item.property_id)).map(o=>o.item),n=[...t].filter(o=>!i.has(o.property_id)).sort((o,d)=>(d.rating||0)-(o.rating||0)).slice(0,10),c=a.filter(o=>!i.has(o.item.property_id)).map(o=>o.item);ce("similar-section",r.length?r:c.slice(0,10)),ce("related-section",s.length?s:c.slice(0,10)),ce("recommended-section",n.length?n:c.slice(0,10))}function Be(e){const t=document.getElementById("details-content"),a=e.listing_type==="property",r=K(e),i=we(e.country_code),s=e.listing_type==="product"?"Product ID":a?"Property ID":"Listing ID";let n="",c="",o=parseFloat(e.real_price);if((!Number.isFinite(o)||o<=0)&&(o=parseFloat(e.compare_at_price??e.original_price)),Number.isFinite(o)&&o>0&&o>parseFloat(e.price)){const u=Math.round((1-parseFloat(e.price)/o)*100);n=`<span class="text-lg text-gray-400 price-strike line-through font-medium">${K({...e,price:o})}</span>`,c=`<span class="inline-flex items-center gap-1 text-xs font-black text-white bg-red-500 px-2 py-1 rounded-full">-${u}% OFF</span>`}const d=e.availability_status||(e.listing_type==="product"?"In Stock":"Available"),m=J(e.images).map((u,g)=>`<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${g===0?"active border-blue-500":"border-gray-200"} shrink-0" data-img="${p(u)}">
      <img src="${p(u)}" alt="View ${g+1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${_}'">
    </button>`).join("");let h="";if(a){const u=[{icon:"globe",label:"Country",value:`${i} ${e.country}`},{icon:"map-pin",label:"State / Province",value:e.state},{icon:"building",label:"City",value:e.city},{icon:"navigation",label:"Town / Local Area",value:e.town}].filter(g=>g.value);h=`
      <div class="mt-4">
        ${Z("map-pin","Location","rose")}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${u.map(g=>`
            <div class="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
              <div class="p-2.5 bg-white border border-gray-100 rounded-lg"><i data-lucide="${g.icon}" class="w-4 h-4 text-blue-500"></i></div>
              <div><div class="text-gray-500 text-xs">${g.label}</div><div class="text-gray-900 font-bold text-[15px]">${g.value}</div></div>
            </div>
          `).join("")}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-200" style="height:280px"></div>
      </div>`}let f=[];a?(f=[{icon:"bed-double",label:"Bedrooms",value:e.bedrooms},{icon:"bath",label:"Bathrooms",value:e.bathrooms},{icon:"building",label:"Building Size",value:e.building_size},{icon:"ruler",label:"Land Size",value:e.land_size},{icon:"car",label:"Parking Spaces",value:e.parking_spaces},{icon:"home",label:"Property Type",value:e.property_type},{icon:"sofa",label:"Furnished",value:e.furnished},{icon:"calendar",label:"Year Built",value:e.year_built},{icon:"tag",label:"Status",value:e.listing_status==="rent"?"For Rent":"For Sale"}].filter(u=>u.value!=null&&u.value!==""),G("Property Information","home",f)):e.category==="Motorhomes"?(f=[{icon:"factory",label:"Brand",value:e.brand},{icon:"car",label:"Model",value:e.model},{icon:"calendar",label:"Year",value:e.model_year},{icon:"badge-check",label:"Condition",value:e.condition},{icon:"gauge",label:"Mileage",value:e.mileage},{icon:"cog",label:"Transmission",value:e.transmission},{icon:"fuel",label:"Fuel Type",value:e.fuel_type},{icon:"zap",label:"Engine",value:e.engine},{icon:"bus",label:"Type",value:e.property_type},{icon:"moon",label:"Sleeping Capacity",value:e.sleeping_capacity},{icon:"users",label:"Seating Capacity",value:e.seating_capacity},{icon:"shower-head",label:"Bathroom",value:e.bathroom},{icon:"utensils",label:"Kitchen",value:e.kitchen},{icon:"droplet",label:"Water Tank",value:e.water_tank}].filter(u=>u.value!=null&&u.value!==""),G("Vehicle Information","bus",f,"violet")):e.listing_type==="product"?(f=[{icon:"factory",label:"Brand",value:e.brand},{icon:"tag",label:"Subcategory",value:e.subcategory},{icon:"palette",label:"Colour",value:e.color},{icon:"ruler",label:"Size",value:e.size},{icon:"layers",label:"Material",value:e.material},{icon:"badge-check",label:"Condition",value:e.condition||"New"},{icon:"shield-check",label:"Warranty",value:e.warranty},{icon:"package-check",label:"Availability",value:e.availability_status}].filter(u=>u.value!=null&&u.value!==""),G("Product Information","package",f)):e.listing_type==="pet"&&(f=[{icon:"paw-print",label:"Breed",value:e.breed},{icon:"calendar",label:"Age",value:e.age},{icon:"users",label:"Gender",value:e.gender},{icon:"palette",label:"Colour",value:e.color},{icon:"scale",label:"Weight",value:e.size},{icon:"globe",label:"Origin",value:`${we(e.country_code)} ${e.country}`},{icon:"badge-check",label:"Health",value:e.condition}].filter(u=>u.value!=null&&u.value!==""),G("Pet Information","paw-print",f,"amber")),Q(e.features),Et(e.highlights);const w=te();t.innerHTML=`
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
            ${c}
            <span class="text-sm text-emerald-600 font-bold flex items-center gap-1"><i data-lucide="package-check" class="w-4 h-4"></i> ${d}</span>
          </div>
        </div>
        <div class="flex flex-col gap-1.5 text-sm">
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="truck" class="w-4 h-4 text-blue-500"></i> Free worldwide shipping</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="rotate-ccw" class="w-4 h-4 text-blue-500"></i> Easy returns within 14 days</span>
          <span class="inline-flex items-center gap-1.5 text-gray-600"><i data-lucide="lock" class="w-4 h-4 text-blue-500"></i> Secure payment protection</span>
        </div>
      </div>

      ${w}

      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${e.images[0]}" alt="${e.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${_}'">
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${m}
      </div>

      ${jt(e)}

      <div id="listing-details">
        ${X(e,f,e.features,e.highlights,h)}
      </div>

      <div id="recommendations-section" class="hidden">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">You May Also Like</h3>
        <div id="recommendations-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>

      ${ae()}
    </div>
  `;const v=document.getElementById("hero-image");t.querySelectorAll(".gallery-thumb").forEach(u=>{u.addEventListener("click",()=>{t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.remove("active","border-blue-500")),t.querySelectorAll(".gallery-thumb").forEach(g=>g.classList.add("border-gray-200")),u.classList.add("active","border-blue-500"),u.classList.remove("border-gray-200"),v.src=u.dataset.img})}),document.getElementById("buy-now-btn").addEventListener("click",async()=>{await M()?window.location.href=`/checkout.html?id=${e.property_id}`:(j(`/checkout.html?id=${e.property_id}`),window.location.href=`/auth.html?redirect=${encodeURIComponent("/checkout.html?id="+e.property_id)}`)}),document.getElementById("share-btn").addEventListener("click",()=>{Y(e)});const x=document.getElementById("view-details-btn");x&&x.addEventListener("click",()=>{const u=document.getElementById("listing-details");u&&u.scrollIntoView({behavior:"smooth",block:"start"})});const b=document.getElementById("add-cart-btn");b&&b.addEventListener("click",()=>{xt(e.property_id,1),b.innerHTML='<i data-lucide="check" class="w-5 h-5"></i> Added to Cart',window.lucide&&lucide.createIcons(),setTimeout(()=>{b.innerHTML='<i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart',window.lucide&&lucide.createIcons()},2e3)}),Ut(e),re(e),N(e),Ot(e),ee(),window.lucide&&lucide.createIcons(),e.property_id,e.title,parseFloat(e.price),e.currency;const S=document.getElementById("listing-map");if(S&&window.L){const u=parseFloat(e.latitude)||null,g=parseFloat(e.longitude)||null,F=[e.town,e.city,e.state,e.country].filter(Boolean).join(", ");if(u&&g){const k=L.map(S).setView([u,g],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(k),L.marker([u,g]).addTo(k).bindPopup(e.title)}else F?fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(F)).then(k=>k.json()).then(k=>{if(k&&k[0]){const E=parseFloat(k[0].lat),q=parseFloat(k[0].lon),C=L.map(S).setView([E,q],12);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(C),L.marker([E,q]).addTo(C).bindPopup(e.title)}else S.style.display="none"}).catch(()=>{S.style.display="none"}):S.style.display="none"}}let R=0,Me=!1;function Dt(){if(Me)return;Me=!0;const e=document.createElement("style");e.textContent="@keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}",document.head.appendChild(e)}function de(e,t){if(!e)return;Dt(),e.innerHTML=`<i data-lucide="heart" class="w-5 h-5 ${t?"fill-red-500 text-red-500":""}"></i>`,e.classList.toggle("bg-red-50",t),e.classList.toggle("border",t),e.classList.toggle("border-red-200",t);const a=e.querySelector("span");a&&(a.textContent=t?"Saved to Wishlist":"Add to Wishlist"),window.lucide&&lucide.createIcons();const r=e.querySelector("i");r&&(r.style.animation="none",r.offsetWidth,r.style.animation="kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)",setTimeout(()=>{r&&(r.style.animation="")},550))}async function Ut(e){const t=document.getElementById("wishlist-btn");if(!t)return;const a=await M();if(!a){t.addEventListener("click",()=>{j(window.location.pathname+window.location.search),window.location.href=`/auth.html?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`});return}const{data:r,error:i}=await I.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(i){console.error("Wishlist check failed:",i.message);return}r&&de(t,!0),t.addEventListener("click",async()=>{const{data:s,error:n}=await I.from("wishlist").select("id").eq("user_id",a.id).eq("listing_id",e.id).maybeSingle();if(n){console.error("Wishlist toggle failed:",n.message);return}if(s){const{error:c}=await I.from("wishlist").delete().eq("id",s.id);if(c){console.error("Wishlist delete failed:",c.message);return}de(t,!1)}else{const{error:c}=await I.from("wishlist").insert({user_id:a.id,listing_id:e.id});if(c){console.error("Wishlist insert failed:",c.message);return}de(t,!0)}})}async function re(e){const t=document.getElementById("review-form"),a=document.getElementById("review-login-msg");if(!t)return;const r=await M();if(!r){t.classList.add("hidden"),a&&a.classList.remove("hidden");return}document.querySelectorAll(".star-btn").forEach(o=>{o.addEventListener("click",()=>{R=parseInt(o.dataset.rating,10),document.querySelectorAll(".star-btn").forEach((d,l)=>{const m=d.querySelector("i, svg");m&&(l<R?(m.classList.add("fill-amber-400","text-amber-400"),m.classList.remove("text-gray-300")):(m.classList.remove("fill-amber-400","text-amber-400"),m.classList.add("text-gray-300")))})})});const i=document.getElementById("review-photo-input"),s=document.getElementById("review-photo-preview");let n=null;i&&i.addEventListener("change",()=>{if(n=i.files&&i.files[0],!!s&&(s.innerHTML="",n)){const o=URL.createObjectURL(n);s.innerHTML=`<span class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg px-2.5 py-1"><img src="${o}" alt="" class="w-5 h-5 rounded object-cover">${p(n.name)}</span>`}});const c=document.getElementById("review-submit-msg");t.addEventListener("submit",async o=>{o.preventDefault();const d=document.getElementById("review-text").value.trim();if(!R){alert("Please select a rating.");return}if(!d){alert("Please write a review.");return}const l=t.querySelector('button[type="submit"]'),m=l.innerHTML;l.disabled=!0,l.innerHTML='<span class="inline-block animate-spin">⏳</span> Submitting…';let h=null;if(n){const w=(n.name.split(".").pop()||"jpg").toLowerCase().replace(/[^a-z0-9]/g,"")||"jpg",v=`${r.id}/${Date.now()}_${String(Math.random()).slice(2)}.${w}`,{error:x}=await I.storage.from("review-photos").upload(v,n,{contentType:n.type||"image/jpeg",cacheControl:"3600",upsert:!1});if(x){l.disabled=!1,l.innerHTML=m,alert("Could not upload photo: "+x.message);return}const{data:b}=I.storage.from("review-photos").getPublicUrl(v);h=b?.publicUrl||null}const{error:f}=await I.from("product_reviews").insert({listing_id:e.id||null,property_id:e.property_id||e.id||"",user_id:r.id,rating:R,comment:d,review_photo:h,is_approved:!0});if(l.disabled=!1,l.innerHTML=m,f){alert("Error: "+f.message);return}document.getElementById("review-text").value="",R=0,n=null,i&&(i.value=""),s&&(s.innerHTML=""),document.querySelectorAll(".star-btn").forEach(w=>{const v=w.querySelector("i, svg");v&&(v.classList.remove("fill-amber-400","text-amber-400"),v.classList.add("text-gray-300"))}),c&&(c.classList.remove("hidden"),setTimeout(()=>{c&&c.classList.add("hidden")},4e3)),N(e)})}async function N(e){De();const t=document.getElementById("reviews-list"),a=document.getElementById("reviews-summary"),r=document.getElementById("reviews-breakdown");if(!t)return;const i=It(e),s={5:i.breakdown[5]||0,4:i.breakdown[4]||0,3:i.breakdown[3]||0,2:i.breakdown[2]||0,1:i.breakdown[1]||0};let n=Math.max(Number(i.total)||0,i.reviews.length);const c=[],o=e.property_id||e.id||"";if(o){const{data:b,error:S}=await I.from("product_reviews").select("*, profiles(full_name)").eq("property_id",o).eq("is_approved",!0).order("created_at",{ascending:!1});if(!S&&b)for(const u of b){c.push({...u,name:u.profiles?.full_name||"Anonymous",verified:u.is_verified_purchase});const g=Math.min(5,Math.max(1,Math.round(Number(u.rating)||0)));s[g]++,n++}}let d=0;for(let b=5;b>=1;b--)d+=b*s[b];const m=(n?d/n:0)||Number(e.rating)||0,h=n,f=`
    <div class="flex flex-wrap items-center gap-x-6 gap-y-4">
      <div class="flex items-center gap-4 shrink-0">
        <div class="text-5xl sm:text-6xl font-black leading-none text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,.55)]">${m>0?m.toFixed(1):"New"}</div>
        <div class="shrink-0">
          <div class="flex gap-1">${Lt(m,"w-5 h-5 sm:w-6 sm:h-6")}</div>
          <div class="text-[13px] sm:text-sm font-bold text-slate-100 mt-1.5 tracking-wide">Customer Reviews</div>
        </div>
      </div>
      <div class="hidden md:block w-px h-12 bg-white/25"></div>
      <div class="flex flex-wrap items-center gap-2">
        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1.5 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Listing</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-blue-300 bg-blue-400/10 border border-blue-400/20 px-2.5 py-1.5 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Secure Checkout</span>
        <span class="inline-flex items-center gap-1 text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1.5 rounded-full"><i data-lucide="truck" class="w-3.5 h-3.5"></i> Fast Worldwide Delivery</span>
      </div>
    </div>`;a&&(a.innerHTML=f),r&&(r.innerHTML=Bt(e,s,h));const w=[...c,...i.reviews];if(!w.length){t.innerHTML='<p class="text-slate-300 text-sm py-2">No reviews yet. Be the first to review this product!</p>',window.lucide&&lucide.createIcons();return}const v=w.slice(0,3),x=()=>{if(t.innerHTML=v.map(Ae).join(""),w.length>v.length){const b=document.createElement("div");b.className="mt-4 flex justify-center",b.innerHTML=`
        <button type="button" class="view-all-reviews-btn btn-press inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition shadow-sm shadow-blue-500/20">
          View All Customer Reviews
          <i data-lucide="chevron-down" class="w-4 h-4"></i>
        </button>`,t.appendChild(b),window.lucide&&lucide.createIcons(),b.querySelector(".view-all-reviews-btn").addEventListener("click",()=>{t.innerHTML=w.map(Ae).join(""),window.lucide&&lucide.createIcons(),Wt(t,x)})}};x(),window.lucide&&lucide.createIcons()}async function De(){const e=document.querySelector('[data-bg-slot="reviews"]');if(e)try{const t=await it();e.innerHTML=nt(t.reviews_bg_image,t.reviews_bg_video)}catch{}}document.addEventListener("promo-backgrounds-updated",()=>{try{De()}catch{}});function Wt(e,t){if(!e)return;const a=document.getElementById("reviews-back-top");a&&a.remove();const r=document.createElement("button");r.type="button",r.id="reviews-back-top",r.setAttribute("aria-label","Back to product page"),r.className="btn-press fixed z-[90] bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white font-bold pl-3 pr-5 py-3 rounded-full text-xs shadow-xl shadow-slate-950/50 border border-white/10 backdrop-blur transition active:scale-95",r.innerHTML=`
    <span class="shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"><i data-lucide="chevron-up" class="w-4 h-4"></i></span>
    Back to product page`,document.body.appendChild(r),r.addEventListener("click",()=>{r.remove(),typeof t=="function"&&t();const i=document.getElementById("reviews-section");i&&i.scrollIntoView({behavior:"smooth",block:"start"})}),window.lucide&&lucide.createIcons()}async function Ot(e){const t=document.getElementById("recommendations-section"),a=document.getElementById("recommendations-grid");if(!t||!a||!e.id)return;const{data:r,error:i}=await I.from("product_recommendations").select("recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)").eq("listing_id",e.id).order("score",{ascending:!1}).limit(4);if(i){console.error("Recommendations load failed:",i.message),t.classList.add("hidden");return}let s=(r||[]).map(n=>n.showroom_listings).filter(Boolean);if(s.length<4){const{data:n}=await I.from("showroom_listings").select("property_id, title, price, currency, images, listing_type").eq("category",e.category).neq("id",e.id).eq("is_active",!0).order("rating",{ascending:!1}).limit(4-s.length);s=[...s,...n||[]]}if(s.length===0){t.classList.add("hidden");return}t.classList.remove("hidden"),a.innerHTML=s.map(n=>{const c=n.images&&n.images[0]||"/fallback.svg",o=typeof n.price=="number"?n.price:parseFloat(n.price||0),d=n.currency||"USD";return`<a href="/details.html?id=${n.property_id}" class="block bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition group">
      <div class="aspect-square overflow-hidden bg-gray-100"><img src="${p(c)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-gray-900 font-bold truncate">${p(n.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${d} ${o.toLocaleString()}</p></div>
    </a>`}).join("")}function p(e){return String(e||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Vt(){const e=Mt();if(!e){document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>';return}const t=()=>{document.getElementById("details-content").innerHTML='<div class="text-center py-20 text-gray-500">Listing not found.</div>'},a=()=>Se(e)||$e(e)||Ie(e)||gt(e)||Ce(e)||oe(e)||xe(e),r=o=>{if(ve(o),document.title=`${o.title} | Weverse Online Shop`,Le(o),o===Se(e))Pt(o);else if(o===$e(e))Rt(o);else if(o===Ie(e))Ht(o);else{Be(o);try{H(o)}catch{}}},i=a();if(i){r(i),fe().then(()=>{ke().then(()=>{if(pt(e)){t();return}const o=oe(e);if(o&&o.property_id===e)try{r(o)}catch{}})});return}await fe();const s=oe(e);if(s){r(s);return}await qt();const n=Ce(e);if(n){r(n);return}await ke();const c=xe(e);if(!c){t();return}ve(c),document.title=`${c.title} | Weverse Online Shop`,Le(c),Be(c);try{H(c)}catch{}}const qe=document.getElementById("details-content"),zt=qe?qe.innerHTML:"";let Pe=!1;function Ue(e){if(e)try{console.error("[details] init failed:",e&&(e.stack||e.message||e))}catch{}if(!Pe){Pe=!0;try{const t=document.getElementById("details-content");if(!t||t.innerHTML!==zt||t.querySelector(".fade-in, #reviews-section"))return;t.innerHTML='<div class="text-center py-20 text-gray-500">We couldn’t load this listing right now. Please check your connection and try again.</div>'}catch{}}}window.setTimeout(Ue,12e3);Vt().catch(Ue);
