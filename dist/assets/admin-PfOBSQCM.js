import"./modulepreload-polyfill-B5Qt9EMX.js";import{S as Q,_ as bi}from"./showroom-data-C8s3txE5.js";import{supabase as c}from"./supabase-client-DSkAnHxH.js";import{a as mi,g as gi,C as je}from"./country-data-BXM8T1RS.js";import{A as yi}from"./localization-CBo_e9qC.js";import{patchLocalShowroomListing as $t,getLocalShowroomListingById as ke,removeLocalShowroomListing as fi,upsertLocalShowroomListing as ze,listLocalShowroomListings as Ft}from"./local-showroom-store-mzP0nSoS.js";import{g as Ut,s as hi,l as vi,a as xi}from"./payment-settings-BZM-gsG8.js";import{P as ga,a as ya,T as fa,M as ha}from"./motorhome-data-CupbOvk0.js";import{getCatalogCategories as wi}from"./catalog-pfF1HJ-x.js";import{i as _i}from"./promo-backgrounds-C4TNWBGI.js";import{i as va,D as ki}from"./site-content-slMvSP6y.js";import{M as $i,a as Si}from"./categories-72WACZm8.js";import{saveCatalogHidden as xa,loadHiddenCatalogIds as Nt,getHiddenCatalogIds as Ze,resetHiddenCatalogIds as Pi}from"./catalog-hidden-store-Ci-G2dxV.js";/* empty css                                       */const V=1,J=5e6,Ei=[{id:"prod-smartphone",listingType:"product",category:"Phones",subcategory:"Smartphones",label:"Flagship Smartphone",brand:"Global Mobile",model:"X Pro",color:"Midnight Black",size:"6.7-inch",condition:"New",features:["5G connectivity","OLED display","Fast charging","Unlocked","Premium cameras"],highlights:["Retail-ready packaging","Strong search demand","Ideal for global shipping"],keywords:["smartphone","mobile phone","5g"],descriptionType:"phone"},{id:"prod-laptop",listingType:"product",category:"Computers & Laptops",subcategory:"Laptops",label:"Performance Laptop",brand:"NorthBridge",model:"Studio 14",color:"Silver",size:"14-inch",condition:"New",features:["Fast processor","SSD storage","Long battery life","Portable chassis","Business-ready design"],highlights:["Suitable for work and study","Premium margin band","Global audience appeal"],keywords:["laptop","notebook","computer"],descriptionType:"laptop"},{id:"prod-tv",listingType:"product",category:"Electronics",subcategory:"Smart TVs",label:"4K Smart TV",brand:"VistaHome",model:"UltraView",color:"Black",size:"65-inch",condition:"New",features:["4K panel","Streaming apps","HDR support","Voice control","Slim bezel"],highlights:["Living-room centerpiece","Popular premium electronics segment"],keywords:["tv","smart tv","home electronics"],descriptionType:"electronics"},{id:"prod-watch",listingType:"product",category:"Watches",subcategory:"Luxury Watches",label:"Luxury Wristwatch",brand:"Aurelius",model:"Chrono 8",color:"Gold / Black",size:"42mm",condition:"New",features:["Precision movement","Premium case","Gift-ready presentation","Water resistance","Collector appeal"],highlights:["High perceived value","Strong gifting category"],keywords:["watch","luxury watch","timepiece"],descriptionType:"luxury"},{id:"prod-jewelry",listingType:"product",category:"Jewelry",subcategory:"Fine Jewelry",label:"Fine Jewelry Set",brand:"Maison Valeur",model:"Signature Set",color:"Gold",size:"Adjustable",condition:"New",features:["Premium finish","Gift packaging","Occasion-ready","Elegant styling"],highlights:["High-value presentation","Wedding and celebration demand"],keywords:["jewelry","necklace","bracelet"],descriptionType:"luxury"},{id:"prod-handbag",listingType:"product",category:"Bags & Accessories",subcategory:"Designer Bags",label:"Designer Handbag",brand:"Rue Maison",model:"Carry All",color:"Tan",size:"Medium",condition:"New",features:["Structured silhouette","Premium hardware","Travel-friendly storage","Retail-ready finish"],highlights:["Fashion-forward listing","Broad international demand"],keywords:["handbag","designer bag","accessories"],descriptionType:"fashion"},{id:"prod-sneakers",listingType:"product",category:"Shoes",subcategory:"Premium Sneakers",label:"Premium Sneakers",brand:"RunNorth",model:"Air Flex",color:"White",size:"EU 42",condition:"New",features:["Comfort cushioning","Streetwear styling","Durable outsole","Daily wear ready"],highlights:["High-conversion category","Easy multi-country merchandising"],keywords:["sneakers","shoes","fashion"],descriptionType:"fashion"},{id:"prod-sofa",listingType:"product",category:"Furniture",subcategory:"Living Room",label:"Luxury Sofa Set",brand:"Grand Habitat",model:"Residence 3-Piece",color:"Sand Beige",size:"3-Piece Set",condition:"New",features:["Premium upholstery","Statement living-room piece","Comfort seating","Interior-ready styling"],highlights:["Large-ticket home category","Ideal for premium households"],keywords:["sofa","furniture","living room"],descriptionType:"home"},{id:"prod-generator",listingType:"product",category:"Home & Kitchen",subcategory:"Power Solutions",label:"Backup Power Generator",brand:"VoltWorks",model:"SilentMax",color:"Graphite",size:"7.5kVA",condition:"New",features:["Reliable backup power","Low-noise housing","Residential and business use","Heavy-duty build"],highlights:["Practical high-demand utility item","Useful in many markets"],keywords:["generator","power","backup power"],descriptionType:"industrial"},{id:"prod-drone",listingType:"product",category:"Cameras & Photography",subcategory:"Drones",label:"Pro Camera Drone",brand:"SkyFrame",model:"Aerial 4K",color:"Gray",size:"Foldable",condition:"New",features:["4K stabilized video","GPS return home","Portable folding frame","Creator-ready footage"],highlights:["Strong visual listing appeal","Premium creator equipment"],keywords:["drone","camera drone","aerial"],descriptionType:"electronics"},{id:"prod-grocery",listingType:"product",category:"Food & Groceries",subcategory:"Family Essentials",label:"Family Grocery Bundle",brand:"Market Select",model:"Household Pack",color:"Mixed",size:"Bulk Pack",condition:"New",features:["Everyday essentials","Bulk value","Family sized","Easy repeat orders"],highlights:["Fast-moving everyday goods","Useful across broad regions"],keywords:["groceries","food bundle","household essentials"],descriptionType:"daily"},{id:"prod-scale-house",listingType:"product",category:"Home & Kitchen",subcategory:"Model Houses",label:"Architectural Model House",brand:"Studio Form",model:"Estate Miniature",color:"Natural Wood",size:"1:50 Scale",condition:"New",features:["Collector display piece","Detailed craftsmanship","Interior decor appeal","Gift-ready packaging"],highlights:["Supports the model-house use case","Works for decor and collector audiences"],keywords:["model house","architectural model","collector decor"],descriptionType:"home"},{id:"veh-sedan",listingType:"product",category:"Cars",subcategory:"Sedans",label:"Executive Sedan",brand:"Summit Motors",model:"S Line",color:"Pearl White",size:"Mid-size",condition:"Used - Like New",features:["Comfortable cabin","Road-trip ready","Well-maintained presentation","Family and executive appeal"],highlights:["Vehicle posts support 24-image galleries","Map-ready listing"],keywords:["car","sedan","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-suv",listingType:"product",category:"Cars",subcategory:"SUVs",label:"Family SUV",brand:"Frontier Auto",model:"Terrain X",color:"Obsidian",size:"7-Seater",condition:"Used - Like New",features:["Spacious seating","Utility-focused cargo room","Suitable for families","Road and city versatility"],highlights:["High-demand automotive segment","Works well with showroom map"],keywords:["suv","family car","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-luxury",listingType:"product",category:"Luxury Cars",subcategory:"Luxury Vehicles",label:"Luxury Performance Car",brand:"Regal Automotive",model:"Imperium GT",color:"Metallic Black",size:"Coupe",condition:"Used - Like New",features:["Prestige brand positioning","Performance styling","Collector-level appeal","Premium interior"],highlights:["Supports the requested high-ticket range","Designed for showroom-style luxury listings"],keywords:["luxury car","sports car","supercar"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-motorcycle",listingType:"product",category:"Motorcycles",subcategory:"Street Bikes",label:"Sport Motorcycle",brand:"Velocity Moto",model:"R 900",color:"Red",size:"900cc",condition:"Used - Like New",features:["Agile handling","Performance design","Lifestyle buyer appeal","Weekend-ready machine"],highlights:["Automotive category with image-rich display"],keywords:["motorcycle","bike","sport bike"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-commercial",listingType:"product",category:"Commercial Vehicles",subcategory:"Utility Vehicles",label:"Commercial Utility Vehicle",brand:"FleetCore",model:"CargoPro",color:"White",size:"Long wheelbase",condition:"Used - Good",features:["Business-ready load space","Fleet-friendly purchase","Service history presentation","Commercial utility"],highlights:["Suitable for business buyers","Map-ready logistics listing"],keywords:["commercial vehicle","cargo van","fleet"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-boat",listingType:"product",category:"Boats & Marine",subcategory:"Leisure Boats",label:"Leisure Boat",brand:"BlueHarbor",model:"Coastline 28",color:"Navy / White",size:"28 ft",condition:"Used - Like New",features:["Marina-ready presentation","Leisure and charter appeal","Premium leisure category"],highlights:["Large-format gallery support","High-ticket recreational listing"],keywords:["boat","marine","yacht"],requiredImageCount:24,descriptionType:"vehicle"}],Ci=[{id:"prop-apartment",listingType:"property",category:"Real Estate",subcategory:"Apartments",label:"City Apartment",propertyType:"Apartment",bedrooms:2,bathrooms:2,buildingSize:"1,150 sqft",landSize:"",furnished:"Furnished",features:["Secure access","Modern kitchen","Prime urban access","Balcony or city views"],highlights:["Strong urban demand","Good for short and long stay buyers"],keywords:["apartment","real estate","city home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-condo",listingType:"property",category:"Real Estate",subcategory:"Condos",label:"Modern Condo",propertyType:"Condo",bedrooms:3,bathrooms:2,buildingSize:"1,450 sqft",landSize:"",furnished:"Furnished",features:["Managed building","Amenity access","Contemporary finish","Secure parking"],highlights:["Works across major global markets"],keywords:["condo","property","home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-townhouse",listingType:"property",category:"Real Estate",subcategory:"Townhouses",label:"Townhouse Residence",propertyType:"Townhouse",bedrooms:4,bathrooms:3,buildingSize:"2,000 sqft",landSize:"0.08 acres",furnished:"Unfurnished",features:["Multi-level layout","Family-ready plan","Private entry","Parking included"],highlights:["Popular residential ownership format"],keywords:["townhouse","residence","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-villa",listingType:"property",category:"Real Estate",subcategory:"Villas",label:"Private Villa",propertyType:"Villa",bedrooms:5,bathrooms:5,buildingSize:"4,800 sqft",landSize:"0.4 acres",furnished:"Furnished",features:["Private outdoor space","Premium architecture","Luxury entertaining zones","Prestige location potential"],highlights:["Premium property tier","Designed for international buyers"],keywords:["villa","luxury property","real estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-mansion",listingType:"property",category:"Real Estate",subcategory:"Mansions",label:"Luxury Mansion",propertyType:"Mansion",bedrooms:8,bathrooms:10,buildingSize:"12,000 sqft",landSize:"1.2 acres",furnished:"Furnished",features:["Grand entrance","High-end interior finishes","Staff or guest quarters","Statement curb appeal"],highlights:["Matches the mansion requirement directly","Supports high-ticket luxury listings"],keywords:["mansion","estate","luxury home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-beach",listingType:"property",category:"Real Estate",subcategory:"Beach Houses",label:"Beachfront House",propertyType:"Beach House",bedrooms:4,bathrooms:4,buildingSize:"3,600 sqft",landSize:"0.25 acres",furnished:"Furnished",features:["Waterfront views","Outdoor leisure space","Vacation-rental appeal","Premium lifestyle positioning"],highlights:["Ideal for tourism and lifestyle markets"],keywords:["beach house","waterfront home","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-farm",listingType:"property",category:"Real Estate",subcategory:"Farm Houses",label:"Farm House Estate",propertyType:"Farm House",bedrooms:4,bathrooms:3,buildingSize:"3,100 sqft",landSize:"5 acres",furnished:"Unfurnished",features:["Land-rich asset","Agricultural potential","Quiet residential use","Outbuilding opportunity"],highlights:["Suitable for rural and suburban regions"],keywords:["farm house","landed property","estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-commercial",listingType:"property",category:"Real Estate",subcategory:"Commercial Buildings",label:"Commercial Building",propertyType:"Commercial Building",bedrooms:0,bathrooms:4,buildingSize:"8,500 sqft",landSize:"0.35 acres",furnished:"Unfurnished",features:["Business district potential","Mixed-use flexibility","Visible frontage","Investor-ready asset class"],highlights:["Attractive for business buyers and investors"],keywords:["commercial building","office","investment property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-hotel",listingType:"property",category:"Real Estate",subcategory:"Hotels",label:"Boutique Hotel",propertyType:"Hotel",bedrooms:18,bathrooms:20,buildingSize:"15,000 sqft",landSize:"0.75 acres",furnished:"Furnished",features:["Hospitality-ready layout","Guest-focused amenities","Tourism and corporate appeal","Revenue asset potential"],highlights:["Supports hospitality listings globally"],keywords:["hotel","hospitality","investment"],requiredImageCount:24,descriptionType:"property"},{id:"prop-land",listingType:"property",category:"Real Estate",subcategory:"Land",label:"Development Land",propertyType:"Land",bedrooms:0,bathrooms:0,buildingSize:"",landSize:"10 acres",furnished:"",features:["Development potential","Flexible use case","Long-term investment appeal","Location-led value"],highlights:["Useful for land banking and development"],keywords:["land","plot","development"],requiredImageCount:24,descriptionType:"property"}],wa=[...Ei,...Ci];function Ot(e){return mi[e]||"USD"}function _a(e,t){return wa.filter(a=>a.listingType!==e?!1:t?a.category===t:!0)}function Ai(e,t){const a=Math.max(V,Math.min(J,Number(e)||V));return new Intl.NumberFormat("en-US",{style:"currency",currency:t,maximumFractionDigits:0}).format(a)}function Ii(e,t,a,i,o){const s=Ai(i,a);return e.descriptionType==="vehicle"?`${e.label} listed at ${s}. This template is intended to present a complete automotive post with exterior, interior, condition, performance, and gallery details in a clean showroom-style format.`:e.descriptionType==="property"?`${e.label} located in ${o}. Offered at ${s}, this property template is designed for a complete real-estate presentation with map-ready location data, rich visual gallery coverage, and buyer-friendly highlights covering layout, lifestyle, and investment value.`:e.descriptionType==="phone"?`${e.label} listed at ${s}. The template focuses on a clean premium device presentation with brand, model, condition, core features, and strong online merchandising copy.`:e.descriptionType==="laptop"?`${e.label} listed at ${s}. Built for marketplace listings that need clear performance positioning, specification highlights, and an easy-to-scan description for students, professionals, and remote workers.`:e.descriptionType==="luxury"?`${e.label} listed at ${s}. This template supports high-value presentation with polished positioning, premium selling points, and a strong showroom-style description.`:e.descriptionType==="fashion"?`${e.label} listed at ${s}. This product template highlights styling, quality, and day-to-day appeal while keeping the listing easy to customize.`:e.descriptionType==="home"?`${e.label} listed at ${s}. The listing copy is structured for shoppers looking for quality presentation, reliable detail, and visual merchandising support.`:e.descriptionType==="industrial"?`${e.label} listed at ${s}. This template emphasizes practical use, dependable performance, and business or household value in a straightforward format.`:e.descriptionType==="daily"?`${e.label} listed at ${s}. The copy is designed for repeat-buy categories with clear value messaging and broad buyer appeal.`:`${e.label} listed at ${s}. This template generates a clean, marketable listing with ready-made highlights, keywords, and presentation details.`}function ka({templateId:e,listingType:t,category:a,countryCode:i,currency:o,price:s}){const r=wa.find(g=>g.id===e&&g.listingType===t);if(!r)return null;const n=gi(i)||je[0],d=o||Ot(n.code),u=[n.name].filter(Boolean).join(", "),m={category:r.category||a||(t==="property"?"Real Estate":"Other"),subcategory:r.subcategory||r.label,title:t==="property"?`${r.label} in ${n.name}`:r.label,description:Ii(r,n,d,s,u),currency:d,features:[...r.features],highlights:[...r.highlights||[]],seo_keywords:[...new Set([r.category,r.subcategory,r.label,...t==="property"?[n.name]:[],...r.keywords||[]].filter(Boolean))],requiredImageCount:r.requiredImageCount||0};return t==="property"?{...m,country:n.name,country_code:n.code,product_location:n.name,property_type:r.propertyType||r.label,bedrooms:r.bedrooms??null,bathrooms:r.bathrooms??null,building_size:r.buildingSize||"",land_size:r.landSize||"",furnished:r.furnished||""}:{...m,brand:r.brand||"",model:r.model||"",color:r.color||"",size:r.size||"",condition:r.condition||"New"}}function $a(e){const t=String(e||"").toLowerCase();return t.endsWith(".pdf")||t.includes(".pdf?")||t.includes(".pdf#")}const Ht="".replace(/\/$/,""),St=[{id:"overview",label:"Overview",icon:"layout-dashboard"},{id:"accounts",label:"Connected Accounts",icon:"link-2"},{id:"auto",label:"Automatic Posting",icon:"bot"},{id:"manual",label:"Manual Posting",icon:"pen-line"},{id:"schedule",label:"Posting Schedule",icon:"calendar-clock"},{id:"queue",label:"Content Queue",icon:"list-checks"},{id:"published",label:"Published Posts",icon:"check-circle-2"},{id:"failed",label:"Failed Posts",icon:"alert-triangle"},{id:"logs",label:"Post Logs",icon:"scroll-text"},{id:"platforms",label:"Platform Settings",icon:"settings-2"},{id:"apistatus",label:"API Connection Status",icon:"server"}];let Ve="overview";function y(e){if(e==null)return"";const t=document.createElement("div");return t.textContent=String(e),t.innerHTML}function w(e,t="success"){const a=document.getElementById("toast"),i=document.getElementById("toast-msg");if(!a||!i){alert(e);return}i.textContent=e;const o=a.querySelector("i[data-lucide]"),s={success:"check-circle",error:"alert-circle",info:"info"},r={success:"text-emerald-400",error:"text-red-400",info:"text-blue-400"};o&&(o.setAttribute("data-lucide",s[t]||"info"),o.className=`w-4 h-4 shrink-0 ${r[t]||"text-blue-400"}`),a.style.transform="translateY(0)",a.style.opacity="1",window.lucide&&lucide.createIcons(),clearTimeout(a._t),a._t=setTimeout(()=>{a.style.transform="translateY(20px)",a.style.opacity="0"},3200)}function Ti(){return'<div class="flex items-center justify-center py-28"><div class="flex items-center gap-3 text-gray-400 text-sm"><i data-lucide="loader-2" class="w-5 h-5 animate-spin text-blue-400"></i> Loading…</div></div>'}function te(e,t="inbox"){return`<div class="flex flex-col items-center justify-center py-16 text-center"><div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4"><i data-lucide="${t}" class="w-8 h-8 text-blue-400"></i></div><p class="text-sm text-gray-500 max-w-xs">${y(e)}</p></div>`}function F(){if(window.lucide)try{lucide.createIcons()}catch{}}function se(e){return e?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}async function Sa(){const{data:e}=await c.auth.getSession();return e?.session?.access_token||""}async function de(e,t={}){const i={authorization:`Bearer ${await Sa()}`,"content-type":"application/json",...t.headers||{}},o=await fetch(`${Ht}${e}`,{...t,headers:i});let s={};try{s=await o.json()}catch{s={}}if(!o.ok)throw Object.assign(new Error(s?.error||`Request failed (HTTP ${o.status})`),{status:o.status,code:s.code});return s}async function Bi(e){const t=(e.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),a=`uploads/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${t}`,{error:i}=await c.storage.from("social-posts").upload(a,e,{contentType:e.type,upsert:!1,cacheControl:"3600"});if(i)throw i;const{data:o}=c.storage.from("social-posts").getPublicUrl(a),s=(e.type||"").startsWith("video/")||/\.(mp4|webm|mov|m4v)$/i.test(e.name);return{url:o.publicUrl,type:s?"video":"image"}}const G={tiktok:{label:"TikTok",icon:"music-2",tone:"text-white"},telegram:{label:"Telegram",icon:"send",tone:"text-sky-400"},facebook:{label:"Facebook Pages",icon:"thumbs-up",tone:"text-blue-400"},instagram:{label:"Instagram",icon:"camera",tone:"text-pink-400"},youtube:{label:"YouTube",icon:"youtube",tone:"text-red-400"},x:{label:"X (Twitter)",icon:"twitter",tone:"text-gray-300"},pinterest:{label:"Pinterest",icon:"pinterest",tone:"text-red-500"},linkedin:{label:"LinkedIn",icon:"linkedin",tone:"text-sky-500"},whatsapp:{label:"WhatsApp Channels",icon:"message-circle",tone:"text-emerald-400"}};function ae(e){return G[e]?.icon||"share-2"}function R(e){return G[e]?.label||e}function Li(e){const t={connected:"bg-emerald-500/15 text-emerald-300 border-emerald-500/30",disconnected:"bg-gray-500/15 text-gray-300 border-gray-500/30",error:"bg-red-500/15 text-red-300 border-red-500/30",revoked:"bg-red-500/15 text-red-300 border-red-500/30",requires_approval:"bg-amber-500/15 text-amber-300 border-amber-500/30",expired:"bg-amber-500/15 text-amber-300 border-amber-500/30",not_connected:"bg-gray-500/10 text-gray-400 border-gray-500/20",draft:"bg-gray-500/15 text-gray-300 border-gray-500/30",scheduled:"bg-amber-500/15 text-amber-300 border-amber-500/30",queued:"bg-sky-500/15 text-sky-300 border-sky-500/30",publishing:"bg-violet-500/15 text-violet-300 border-violet-500/30",published:"bg-emerald-500/15 text-emerald-300 border-emerald-500/30",failed:"bg-red-500/15 text-red-300 border-red-500/30",cancelled:"bg-gray-500/10 text-gray-400 border-gray-500/20",paused:"bg-amber-500/15 text-amber-300 border-amber-500/30",enabled:"bg-emerald-500/15 text-emerald-300 border-emerald-500/30",disabled:"bg-gray-500/15 text-gray-400 border-gray-500/25"};return t[e]||t.not_connected}function we(e){return`<span class="badge ${Li(e)}">${y(e.replace(/_/g," "))}</span>`}function Pt(e="overview"){Ve=St.find(a=>a.id===e)?e:"overview";const t=document.getElementById("content");t.innerHTML=`
    <div class="space-y-4 fade-in">
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 class="text-xl font-black text-white flex items-center gap-2"><i data-lucide="share-2" class="w-5 h-5 text-blue-400"></i> Social Media Automation</h2>
          <p class="text-xs text-gray-500 mt-1">Automatic posting runs from the server. Connect official accounts below — nothing posts until you authorize and connect.</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="window.socialRunScheduler()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition"><i data-lucide="zap" class="w-3.5 h-3.5 inline mr-1"></i>Run now</button>
        </div>
      </div>
      <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
        ${St.map(a=>`<button onclick="window.socialNav('${a.id}')" class="tab-btn ${Ve===a.id?"active":""}">${a.label}</button>`).join("")}
      </div>
      <div id="social-body"></div>
    </div>`,F(),et(Ve)}window.socialNav=async function(e){Ve=e,document.querySelectorAll("#content .tab-btn").forEach((t,a)=>t.classList.toggle("active",St[a]?.id===e)),await et(e)};async function et(e){const t=document.getElementById("social-body");if(!t)return;t.innerHTML=Ti(),F(),await({overview:sa,accounts:Re,auto:qe,manual:Ca,schedule:Ui,queue:Vt,published:Oi,failed:Vi,logs:Wi,platforms:at,apistatus:Xi}[e]||sa)(t)}async function be(){return await de("/api/social/status")}let Pa=null;async function sa(e){try{const t=await be();Pa=t;const a=t.settings||{},i=await c.from("social_automation_rules").select("*").order("created_at",{ascending:!1}),o=await c.from("social_posts").select("*").order("created_at",{ascending:!1}).limit(300),r=(o.data||[]).filter(m=>m.status==="scheduled"||m.status==="queued"&&m.created_at).sort((m,g)=>new Date(m.scheduled_for||m.created_at)-new Date(g.scheduled_for||g.created_at))[0]||null,n=(o.data||[]).reduce((m,g)=>(m[g.status]=(m[g.status]||0)+1,m),{}),d=(t.accounts||[]).filter(m=>m.status==="connected"),u=!!(i.data||[]).some(m=>m.approval_mode==="manual"||m.enabled&&a.require_approval);e.innerHTML=`
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        ${re("bot",a.auto_posting_enabled?"ON":"OFF","Automatic Posting",a.auto_posting_enabled?"text-emerald-300":"text-gray-300")}
        ${re("power",a.automation_paused?"Paused":"Running","Automation Status",a.automation_paused?"text-amber-300":"text-emerald-300")}
        ${re("link-2",String(d.length),"Connected Accounts","text-blue-300")}
        ${re("share-2",String(n.published||0),"Published Posts","text-emerald-300")}
        ${re("calendar-clock",String(n.scheduled||0),"Scheduled","text-amber-300")}
        ${re("list-checks",String(n.queued||0),"In Queue","text-sky-300")}
        ${re("alert-triangle",String(n.failed||0),"Failed","text-red-300")}
        ${re("hourglass",String(n.draft||0),"Awaiting Approval",u?"text-violet-300":"text-gray-300")}
      </div>

      <div class="grid lg:grid-cols-3 gap-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3 lg:col-span-2">
          <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="share-2" class="w-4 h-4 text-blue-400"></i> Platform Connection Status</h3>
          ${(t.platforms||[]).map(m=>`
            <div class="flex items-center gap-3 p-3 bg-white/[.03] border border-white/5 rounded-xl">
              <div class="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0"><i data-lucide="${ae(m.id)}" class="w-4 h-4 ${G[m.id]?.tone||"text-gray-300"}"></i></div>
              <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-white">${R(m.id)}</p>
                <p class="text-[11px] text-gray-500 truncate">${m.connected?m.accountName||"connected":m.configured?m.requiresApproval?"Requires approval":"Not connected":"API not configured"}</p>
              </div>
              <div class="flex items-center gap-2">
                ${m.configured?m.connected?we("connected"):m.requiresApproval?'<span class="badge bg-amber-500/15 text-amber-300 border-amber-500/30">approval</span>':we("not_connected"):'<span class="badge bg-amber-500/15 text-amber-300 border-amber-500/30">setup needed</span>'}
                <button onclick="window.socialNav('accounts')" class="btn-press text-[11px] font-bold text-blue-300 hover:text-white transition px-2 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">Manage</button>
              </div>
            </div>`).join("")||te("No platforms available.")}
        </div>

        <div class="space-y-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-black text-white flex items-center gap-2 mb-3"><i data-lucide="calendar-clock" class="w-4 h-4 text-amber-300"></i> Next Scheduled Post</h3>
            ${r?`
              <p class="text-xs text-gray-400 mb-1">${se(r.scheduled_for||r.created_at)}</p>
              <p class="text-sm text-white font-bold mb-2">${R(r.platform)}${r.caption?" · "+y(r.caption.slice(0,60)):""}</p>
              <div class="flex gap-1 flex-wrap">${we(r.status)}</div>`:te("No upcoming posts. Create one under Manual Posting or enable an automation rule.","hourglass")}
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-black text-white mb-3">Quick Actions</h3>
            <div class="grid grid-cols-2 gap-2">
              ${[{icon:"bot",label:"Automatic Posting",fn:"window.socialNav('auto')"},{icon:"pen-line",label:"Manual Posting",fn:"window.socialNav('manual')"},{icon:"list-checks",label:"Content Queue",fn:"window.socialNav('queue')"},{icon:"settings-2",label:"Platform Settings",fn:"window.socialNav('platforms')"}].map(m=>`<button onclick="${m.fn}" class="btn-press p-3 bg-white/[.03] border border-white/10 rounded-xl text-left hover:border-blue-500/40 transition"><i data-lucide="${m.icon}" class="w-4 h-4 text-blue-400 mb-1.5 inline-block"></i><p class="text-[11px] font-bold text-white">${m.label}</p></button>`).join("")}
            </div>
          </div>
        </div>
      </div>`,F(),e.querySelectorAll("#social-body")}catch(t){e.innerHTML=`<div class="glass-soft border border-red-500/20 rounded-2xl p-5 text-sm text-red-300">Could not load overview: ${y(t.message)}</div>`}}function re(e,t,a,i){return`<div class="stat-card glass-soft border border-blue-500/15 rounded-3xl p-5">
    <div class="flex items-center gap-3 mb-2"><i data-lucide="${e}" class="w-5 h-5 ${i}"></i></div>
    <p class="text-3xl font-black text-white">${y(t)}</p>
    <p class="text-xs text-gray-500 uppercase tracking-wide mt-1 font-bold">${y(a)}</p>
  </div>`}async function Re(e){try{const t=await de("/api/social/accounts"),i=(await be()).platforms||[],o=t.accounts||[];e.innerHTML=`
      <div class="space-y-3">
        <div class="flex items-center justify-between flex-wrap gap-2">
          <p class="text-xs text-gray-500">Official OAuth connections only. Accounts are stored server-side with encrypted tokens. No passwords are ever requested.</p>
          <div class="flex gap-2">
            <select id="acct-filter" onchange="window.socialAccountsFilter()" class="input-field !w-44 !py-2 !px-3 !text-xs">
              <option value="">All platforms</option>
              ${i.map(s=>`<option value="${s.id}">${y(s.label)}</option>`).join("")}
            </select>
            <button onclick="window.socialRefresh()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition"><i data-lucide="refresh-cw" class="w-3.5 h-3.5 inline mr-1"></i>Refresh</button>
          </div>
        </div>
        <div id="acct-grid" class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
          ${i.map(s=>Mi(s,o.find(r=>r.platform===s.id))).join("")}
        </div>
      </div>`,F()}catch(t){e.innerHTML=`<div class="glass-soft border border-red-500/20 rounded-2xl p-5 text-sm text-red-300">${y(t.message)}</div>`}}window.socialAccountsFilter=function(){const e=document.getElementById("acct-filter")?.value||"";document.querySelectorAll("#acct-grid > [data-platform]").forEach(t=>{t.style.display=!e||t.dataset.platform===e?"":"none"})};window.socialRefresh=()=>{Re(document.getElementById("social-body"))};function Mi(e,t){const a=t?.status==="connected";return`
    <div data-platform="${e.id}" class="glass-soft border ${a?"border-emerald-500/25":"border-blue-500/15"} rounded-2xl p-4 space-y-3">
      <div class="flex items-start justify-between gap-2">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0"><i data-lucide="${ae(e.id)}" class="w-5 h-5 ${G[e.id]?.tone||"text-gray-300"}"></i></div>
          <div class="min-w-0">
            <p class="text-xs font-black text-white truncate">${y(e.label)}</p>
            <p class="text-[11px] text-gray-500 truncate">${a?y(t.accountName||t.display_name||"Connected"):"Not connected"}</p>
          </div>
        </div>
        ${a?we("connected"):e.configured?we("not_connected"):'<span class="badge bg-amber-500/15 text-amber-300 border-amber-500/30">setup needed</span>'}
      </div>

      <p class="text-[11px] text-gray-500 leading-relaxed">${y(e.requirements?.note||e.approvalNote||"")}</p>

      ${e.requiresApproval?`<div class="flex items-start gap-2 p-2.5 bg-amber-500/10 border border-amber-500/25 rounded-xl"><i data-lucide="alert-circle" class="w-4 h-4 text-amber-300 shrink-0 mt-0.5"></i><p class="text-[11px] text-amber-200 leading-relaxed">${y(e.approvalNote||e.requirements?.note||"This platform may require app review / business verification / paid access before posting.")}</p></div>`:""}

      ${a?`
        <div class="grid grid-cols-2 gap-2">
          <button onclick="window.socialValidate('${t.id}')" class="btn-press py-2 rounded-xl text-[11px] font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition"><i data-lucide="shield-check" class="w-3.5 h-3.5 inline mr-1"></i>Validate</button>
          <button onclick="window.socialDisconnect('${t.id}','${e.id}')" class="btn-press py-2 rounded-xl text-[11px] font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition"><i data-lucide="unplug" class="w-3.5 h-3.5 inline mr-1"></i>Disconnect</button>
          <button onclick="window.socialReconnect('${e.id}')" class="btn-press py-2 rounded-xl text-[11px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/25 hover:bg-amber-500/20 transition col-span-2"><i data-lucide="rotate-cw" class="w-3.5 h-3.5 inline mr-1"></i>Reconnect</button>
        </div>
        ${t.last_error?`<p class="text-[11px] text-red-300 truncate" title="${y(t.last_error)}">Last error: ${y(t.last_error)}</p>`:""}`:`
        <button onclick="window.socialConnect('${e.id}')" class="btn-press w-full py-2.5 rounded-xl text-[11px] font-bold ${e.configured?"bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500":"bg-gray-500/15 text-gray-400 border border-gray-500/25 cursor-not-allowed"} transition" ${e.configured?"":"disabled"}><i data-lucide="plug" class="w-3.5 h-3.5 inline mr-1"></i>Connect ${y(e.label)}</button>
        ${e.configured?"":'<p class="text-[10px] text-amber-300/80">Set the server environment variables first (see .env.example).</p>'}`}
    </div>`}window.socialConnect=async function(e){try{const a=((await be()).platforms||[]).find(i=>i.id===e);if(!a?.configured){w("API credentials are not configured server-side.","error");return}if(a.usesOAuth){window.location.href=`${Ht}/api/social/oauth/start?platform=${encodeURIComponent(e)}`;return}await de("/api/social/accounts",{method:"POST",body:JSON.stringify({action:"connect",platform:e})}),w(`${R(e)} connected.`),Re(document.getElementById("social-body"))}catch(t){w(t.message,"error")}};window.socialValidate=async function(e){try{const t=await de("/api/social/accounts",{method:"POST",body:JSON.stringify({action:"validate",account_id:e})});w(t.note||"Connection is valid."),Re(document.getElementById("social-body"))}catch(t){w(t.message,"error")}};window.socialDisconnect=async function(e,t){if(confirm(`Disconnect your ${R(t)} account? Tokens will be wiped from the server.`))try{await de("/api/social/accounts",{method:"POST",body:JSON.stringify({action:"disconnect",account_id:e})}),w(`${R(t)} disconnected.`),Re(document.getElementById("social-body"))}catch(a){w(a.message,"error")}};window.socialReconnect=async function(e){window.socialConnect(e)};window.socialRunScheduler=async function(){try{const e=await Sa(),t=localStorage.getItem("kco_cron_secret")||"",a=await fetch(`${Ht}/api/social/scheduler`,{method:"POST",headers:{"content-type":"application/json",...t?{"x-cron-secret":t}:{}},body:JSON.stringify({})}),i=await a.json().catch(()=>({}));if(!a.ok){w(i?.error||"Scheduler requires the admin secret (set SCHEDULER_CRON_SECRET).","error");return}w(`Scheduler tick complete · ${i.published??0} published · ${i.scheduledEnqueued??0} enqueued`),et("overview")}catch(e){w(e.message,"error")}};let Te=[],Di={products:[],content:[],promos:[]};async function qe(e){try{const a=(await be()).settings||{};Te=(await c.from("social_automation_rules").select("*").order("created_at",{ascending:!1})).data||[];const o=`
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
        <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="settings" class="w-4 h-4 text-blue-400"></i> Global Automation Controls</h3>
        <div class="grid sm:grid-cols-2 gap-3">
          ${wt("Master switch","When ON, the server picks content and posts automatically to connected accounts.","auto_posting_enabled",a.auto_posting_enabled,"window.socialToggleGlobal('auto_posting_enabled')")}
          ${wt("Pause all automation","Temporarily stops ALL automatic and scheduled publishing. Resume anytime.","automation_paused",a.automation_paused,"window.socialToggleGlobal('automation_paused')")}
          ${wt("Approve posts before publishing","Auto-generated posts stay in the Content Queue as drafts until you approve them.","require_approval",a.require_approval,"window.socialToggleGlobal('require_approval')")}
          <div class="p-3 rounded-xl bg-white/[.03] border border-white/10 flex items-center justify-between gap-3">
            <div><p class="text-xs font-bold text-white">Schedule heartbeat</p><p class="text-[11px] text-gray-500">The server-side scheduler wakes every 15 minutes (Vercel Cron).</p></div>
            <span class="badge bg-sky-500/15 text-sky-300 border-sky-500/30">*/15 * * * *</span>
          </div>
        </div>
      </div>`,s=`
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
        <div class="flex items-center justify-between flex-wrap gap-2">
          <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="bot" class="w-4 h-4 text-blue-400"></i> Automation Rules</h3>
          <button onclick="window.socialRuleForm()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 transition"><i data-lucide="plus" class="w-3.5 h-3.5 inline mr-1"></i>New Rule</button>
        </div>
        ${Te.length?Te.map(ji).join(""):te("No automation rules yet. Create one to automatically publish products, promotions or news on a schedule.","bot")}
      </div>`;e.innerHTML=`${o}<div class="grid gap-4">${s}</div>`,F()}catch(t){e.innerHTML=`<div class="glass-soft border border-red-500/20 rounded-2xl p-5 text-sm text-red-300">${y(t.message)}</div>`}}function wt(e,t,a,i,o){return`<div class="p-3 rounded-xl bg-white/[.03] border border-white/10 flex items-center justify-between gap-3">
    <div><p class="text-xs font-bold text-white">${y(e)}</p><p class="text-[11px] text-gray-500">${y(t)}</p></div>
    <label class="toggle-switch"><input type="checkbox" ${i?"checked":""} onchange="${o}"><span class="toggle-slider"></span></label>
  </div>`}window.socialToggleGlobal=async function(e){try{const t=Pa?.settings||{},a={...t,[e]:!t[e]},{error:i}=await c.from("social_settings").upsert({id:1,...a});if(i)throw i;w(e==="automation_paused"?a[e]?"Automation paused.":"Automation resumed.":"Saved."),qe(document.getElementById("social-body"))}catch(t){w(t.message,"error")}};function ji(e){const t=e.enabled&&!e.paused?"enabled":e.paused?"paused":"disabled",a={products:"New products (auto-pick new arrivals)",selected_products:"Selected products",promotions:"Promotions",content_items:"News / articles (Content Items)"},i={mon:"M",tue:"T",wed:"W",thu:"T",fri:"F",sat:"S",sun:"S"},o=e.next_run_at?`Next run ${se(e.next_run_at)}`:"First run pending";return`
    <div data-rule="${e.id}" class="p-4 rounded-2xl bg-white/[.03] border border-white/10 space-y-3">
      <div class="flex items-start justify-between gap-2 flex-wrap">
        <div class="min-w-0">
          <p class="text-sm font-black text-white">${y(e.name)}</p>
          <p class="text-[11px] text-gray-500 mt-0.5">${y(a[e.content_type]||e.content_type)} · ${y((e.platforms||[]).map(R).join(", "))}</p>
        </div>
        <div class="flex items-center gap-2">${we(t)} <span class="badge bg-blue-500/10 text-blue-300 border-blue-500/20">${y(Ea(e))}</span></div>
      </div>
      <div class="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500">
        <span><i data-lucide="zap" class="w-3 h-3 inline mr-1 text-amber-300"></i>${y(e.max_posts_per_day??1)} /day max</span>
        <span><i data-lucide="send" class="w-3 h-3 inline mr-1 text-sky-300"></i>${e.approval_mode==="manual"?"Approval required":"Auto-publish"}</span>
        <span><i data-lucide="calendar-clock" class="w-3 h-3 inline mr-1 text-emerald-300"></i>${y(o)}</span>
        <span>${y((e.schedule_days||[]).length?(e.schedule_days||[]).map(s=>i[s]||s).join(" "):"daily")} ${y(e.schedule_time||"")}</span>
      </div>
      <div class="flex gap-2 flex-wrap">
        <button onclick="window.socialRuleForm('${e.id}')" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition"><i data-lucide="pencil" class="w-3 h-3 inline mr-1"></i>Edit</button>
        <button onclick="window.socialToggleRule('${e.id}')" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold ${e.paused?"bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25":"bg-amber-500/10 text-amber-300 border border-amber-500/25 hover:bg-amber-500/20"} transition">${e.paused?'<i data-lucide="play" class="w-3 h-3 inline mr-1"></i>Resume':e.enabled?'<i data-lucide="pause" class="w-3 h-3 inline mr-1"></i>Pause':'<i data-lucide="play" class="w-3 h-3 inline mr-1"></i>Enable'}</button>
        <button onclick="window.socialDeleteRule('${e.id}')" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition"><i data-lucide="trash-2" class="w-3 h-3 inline mr-1"></i>Delete</button>
      </div>
    </div>`}function Ea(e){const t=e.schedule_time||"";return e.schedule_type==="hourly"?"hourly":e.schedule_type==="interval"?`every ${e.interval_hours||24}h`:e.schedule_type==="weekly"?"weekly":e.schedule_type==="custom"?"custom":`daily ${t}`}window.socialToggleRule=async function(e){const t=Te.find(i=>i.id===e);if(!t)return;let a;t.paused?a={paused:!1,enabled:!0}:t.enabled?a={enabled:!1}:a={enabled:!0,paused:!1},await c.from("social_automation_rules").update(a).eq("id",e),w("Rule updated."),qe(document.getElementById("social-body"))};window.socialDeleteRule=async function(e){confirm("Delete this automation rule?")&&(await c.from("social_automation_rules").delete().eq("id",e),w("Rule deleted."),qe(document.getElementById("social-body")))};window.socialRuleForm=async function(e){let t=Te.find(o=>o.id===e);t||(t={id:"",name:"",enabled:!1,platforms:[],content_type:"products",selected_ids:[],schedule_type:"daily",schedule_time:"09:00",schedule_days:["mon","tue","wed","thu","fri","sat","sun"],interval_hours:24,max_posts_per_day:1,approval_mode:"auto",caption_template:`{{title}}
{{price}}
{{link}}`,include_price:!0,include_link:!0,hashtags:"",paused:!1});let a="";try{const{data:o}=await c.from("showroom_listings").select("property_id,title,listing_type,is_active").eq("is_active",!0).limit(400);Di.products=o||[],a=o.map(s=>`<div class="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5"><label class="flex items-center gap-2 text-xs text-gray-300 flex-1"><input type="checkbox" class="rule-sel" value="${y(s.property_id)}" ${(t.selected_ids||[]).includes(s.property_id)?"checked":""}><span class="truncate">${y(s.title)} ${s.listing_type==="property"?'<span class="text-amber-300">(property)</span>':""}</span></label></div>`).join("")}catch{a=""}const i=document.createElement("div");i.className="modal-overlay",i.innerHTML=`
    <div class="modal-box wide">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-base font-black text-white">${t.id?"Edit Automation Rule":"New Automation Rule"}</h3>
        <button onclick="document.querySelector('.modal-overlay').remove()" class="p-2 rounded-lg text-gray-400 hover:bg-white/5 transition"><i data-lucide="x" class="w-4 h-4"></i></button>
      </div>
      <div class="space-y-4 text-left max-h-[70vh] overflow-y-auto pr-1 scrollbar-thin">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="md:col-span-2"><label class="lbl">Rule name</label><input id="rule-name" class="input-field" value="${y(t.name||"")}" placeholder="e.g. Daily new arrivals → TikTok & Telegram"></div>
          <div><label class="lbl">Content type</label><select id="rule-content" class="input-field" onchange="window.socialRuleContentChange()">
            ${["products","selected_products","promotions","content_items"].map(o=>`<option value="${o}" ${t.content_type===o?"selected":""}>${y({products:"Auto-pick new products",selected_products:"Selected products",promotions:"Promotions",content_items:"News / articles (Content Items)"}[o])}</option>`).join("")}
          </select></div>
          <div><label class="lbl">Platforms</label><select id="rule-platforms" class="input-field" style="min-height:80px" multiple>
            ${G?Object.keys(G).filter(o=>o!=="whatsapp").map(o=>`<option value="${o}" ${(t.platforms||[]).includes(o)?"selected":""}>${y(R(o))}</option>`).join(""):""}
          </select><p class="text-[10px] text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple.</p></div>
          <div id="rule-period" class="grid grid-cols-2 gap-3">
            <div><label class="lbl">Schedule type</label><select id="rule-sched" class="input-field" onchange="window.socialRuleSchedChange()">
              ${["hourly","daily","weekly","interval","custom"].map(o=>`<option value="${o}" ${t.schedule_type===o?"selected":""}>${o}</option>`).join("")}
            </select></div>
            <div id="sched-time-wrap"><label class="lbl">Post time</label><input id="rule-time" type="time" class="input-field" value="${y(t.schedule_time||"09:00")}"></div>
          </div>
          <div id="sched-extra" class="md:col-span-2 grid grid-cols-2 gap-3">
            <div id="sched-days-wrap"><label class="lbl">Days</label><div class="flex gap-1 flex-wrap">
              ${["mon","tue","wed","thu","fri","sat","sun"].map(o=>`<label class="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-gray-300"><input type="checkbox" class="rule-day" value="${o}" ${(t.schedule_days||[]).includes(o)?"checked":""} style="accent-color:#2563eb">${o.toUpperCase()}</label>`).join("")}
            </div></div>
            <div id="sched-interval-wrap"><label class="lbl">Interval (hours)</label><input id="rule-interval" type="number" class="input-field" value="${y(t.interval_hours||24)}" min="1" max="720"></div>
          </div>
          <div><label class="lbl">Max posts per day</label><input id="rule-max" type="number" class="input-field" value="${y(t.max_posts_per_day??1)}" min="1" max="24"></div>
          <div><label class="lbl">Publishing</label><select id="rule-approval" class="input-field">
            <option value="auto" ${t.approval_mode!=="manual"?"selected":""}>Publish automatically without approval</option>
            <option value="manual" ${t.approval_mode==="manual"?"selected":""}>Require my approval (goes to Content Queue)</option>
          </select></div>
          <div id="rule-selected-wrap" class="md:col-span-2 hidden">
            <label class="lbl">Selected products (check to include)</label>
            <div class="grid grid-cols-1 sm:grid-cols-2 max-h-48 overflow-y-auto scrollbar-thin border border-white/10 rounded-xl p-2 bg-white/[.02]">${a||'<p class="text-xs text-gray-500 p-2">No active products found.</p>'}</div>
          </div>
          <div class="md:col-span-2"><label class="lbl">Caption template</label><textarea id="rule-caption" class="input-field" placeholder="{{title}} {{price}} {{link}}">${y(t.caption_template||`{{title}}
{{price}}
{{link}}`)}</textarea><p class="text-[10px] text-gray-500 mt-1">Variables: {{title}} {{price}} {{category}} {{brand}} {{site}} {{link}}</p></div>
          <div><label class="lbl">Hashtags</label><input id="rule-hashtags" class="input-field" value="${y(t.hashtags||"")}" placeholder="#marketplace #newarrival"></div>
          <div class="grid grid-cols-2 gap-3">
            <label class="flex items-center gap-2 text-xs text-gray-300"><input type="checkbox" id="rule-price" ${t.include_price!==!1?"checked":""} style="accent-color:#2563eb"> Include price</label>
            <label class="flex items-center gap-2 text-xs text-gray-300"><input type="checkbox" id="rule-link" ${t.include_link!==!1?"checked":""} style="accent-color:#2563eb"> Include product link</label>
          </div>
        </div>
        <div class="flex items-center justify-end gap-2 border-t border-white/10 pt-4">
          <button onclick="document.querySelector('.modal-overlay').remove()" class="btn-press px-4 py-2 rounded-xl text-xs font-bold text-gray-400 hover:bg-white/5 transition">Cancel</button>
          <button onclick="window.socialSaveRule('${t.id}')" class="btn-press px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 transition">Save Rule</button>
        </div>
      </div>
    </div>`,document.getElementById("modal-container").appendChild(i),socialRuleSchedChange(),socialRuleContentChange(),F()};window.socialRuleSchedChange=function(){const e=document.getElementById("rule-sched")?.value||"daily",t=document.getElementById("sched-days-wrap"),a=document.getElementById("sched-interval-wrap"),i=document.getElementById("sched-time-wrap");t.style.display=e==="weekly"?"block":"none",a.style.display=e==="interval"?"block":"none",i.style.display=e==="hourly"||e==="interval"||e==="custom"||e==="weekly"?"none":"block",e==="weekly"&&(t.style.display="block")};window.socialRuleContentChange=function(){const e=document.getElementById("rule-content")?.value||"products";document.getElementById("rule-selected-wrap").classList.toggle("hidden",e!=="selected_products")};window.socialSaveRule=async function(e){try{const t=Array.from(document.querySelectorAll("#rule-platforms option:checked")).map(d=>d.value),a=Array.from(document.querySelectorAll(".rule-day:checked")).map(d=>d.value),i=Array.from(document.querySelectorAll(".rule-sel:checked")).map(d=>d.value);if(!t.length)return w("Select at least one platform.","error");const o=document.getElementById("rule-sched").value;let s=document.getElementById("rule-time")?.value||"09:00",r=Number(document.getElementById("rule-interval")?.value)||24;const n={name:document.getElementById("rule-name").value.trim()||"Automation rule",enabled:!1,paused:!1,platforms:t,content_type:document.getElementById("rule-content").value,selected_ids:i,schedule_type:o,schedule_time:s,schedule_days:o==="weekly"?a:["mon","tue","wed","thu","fri","sat","sun"],interval_hours:r,max_posts_per_day:Number(document.getElementById("rule-max").value)||1,approval_mode:document.getElementById("rule-approval").value,caption_template:document.getElementById("rule-caption").value||`{{title}}
{{price}}
{{link}}`,hashtags:document.getElementById("rule-hashtags").value.trim(),include_price:document.getElementById("rule-price").checked,include_link:document.getElementById("rule-link").checked,next_run_at:new Date().toISOString()};e?await c.from("social_automation_rules").update(n).eq("id",e):await c.from("social_automation_rules").insert(n),document.querySelector(".modal-overlay")?.remove(),w("Rule saved. Enable it when ready."),qe(document.getElementById("social-body"))}catch(t){w(t.message,"error")}};let f={sourceType:"product",sourceId:"",caption:"",hashtags:"",platform:"",media:[],linkUrl:"",allowDuplicate:!1};async function Ca(e){try{const t=await be(),a=(t.platforms||[]).filter(d=>d.connected&&d.enabled),i=(t.accounts||[]).filter(d=>d.status==="connected"),{data:o}=await c.from("showroom_listings").select("property_id,title,category,price,currency,images,video_url,listing_type").eq("is_active",!0).limit(600),{data:s}=await c.from("promotions").select("id,title,image_url,video_url").eq("is_active",!0).limit(50),{data:r}=await c.from("social_content_items").select("*").order("created_at",{ascending:!1}).limit(50),{data:n}=await c.from("social_posts").select("*").eq("status","draft").order("created_at",{ascending:!1}).limit(40);f.platform=f.platform||a[0]?.id||"",f.sourceType=f.sourceType||(n?.length?"draft":"product"),e.innerHTML=`
      <div class="grid lg:grid-cols-3 gap-4">
        <div class="lg:col-span-1 glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
          <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="file-edit" class="w-4 h-4 text-blue-400"></i> 1 · Content</h3>

          <div><label class="lbl">Source</label>
            <select id="mp-source" onchange="window.socialManualSource()" class="input-field">
              <option value="product" ${f.sourceType==="product"?"selected":""}>Marketplace product</option>
              <option value="promo" ${f.sourceType==="promo"?"selected":""}>Promotion</option>
              <option value="content" ${f.sourceType==="content"?"selected":""}>News / article (Content Item)</option>
              <option value="text" ${f.sourceType==="text"?"selected":""}>Custom text / announcement</option>
              <option value="draft" ${f.sourceType==="draft"?"selected":""}>Saved draft</option>
            </select>
          </div>

          <div id="mp-source-picker">${Ri(f.sourceType,o,s,r,n)}</div>

          <div><label class="lbl">Caption</label><textarea id="mp-caption" class="input-field" placeholder="Write your post caption…">${y(f.caption)}</textarea></div>
          <div><label class="lbl">Hashtags</label><input id="mp-hashtags" class="input-field" value="${y(f.hashtags)}" placeholder="#newarrival #marketplace"></div>
          <div><label class="lbl">Link (optional)</label><input id="mp-link" class="input-field" value="${y(f.linkUrl)}" placeholder="https://…"></div>

          <div>
            <label class="lbl">Media</label>
            <div id="mp-media" class="space-y-2">${f.media.length?f.media.map((d,u)=>Aa(d,u)).join(""):'<p class="text-[11px] text-gray-500">Media auto-fills from the source. Add extra image/video below.</p>'}</div>
            <div class="flex gap-2 mt-2">
              <input id="mp-media-url" class="input-field !text-xs !py-2" placeholder="Image/video URL…">
              <button onclick="window.socialAddMediaUrl()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20 transition">Add</button>
            </div>
            <input type="file" id="mp-file" accept="image/*,video/*" class="hidden" onchange="window.socialAddMediaFile(event)">
            <button onclick="document.getElementById('mp-file').click()" class="btn-press w-full mt-2 py-2 rounded-xl text-xs font-bold bg-white/[.03] border border-white/10 text-gray-300 hover:border-blue-500/30 transition"><i data-lucide="upload" class="w-3.5 h-3.5 inline mr-1"></i>Upload image / video (stored in Secure Cloud Storage)</button>
          </div>
        </div>

        <div class="lg:col-span-1 glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
          <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="share-2" class="w-4 h-4 text-blue-400"></i> 2 · Platforms</h3>
          <p class="text-[11px] text-gray-500">Only connected accounts can receive posts.</p>
          <div id="mp-platforms" class="space-y-2">
            ${a.length?a.map(d=>`
              <label class="flex items-center gap-3 p-3 rounded-xl bg-white/[.03] border ${f.platform===d.id?"border-blue-500/50":"border-white/10"} cursor-pointer transition" onclick="window.socialManualPlatform('${d.id}')">
                <input type="radio" name="mp-p" class="accent-blue-600" ${f.platform===d.id?"checked":""}>
                <i data-lucide="${ae(d.id)}" class="w-4 h-4 ${G[d.id]?.tone||""}"></i>
                <span class="text-xs font-bold text-white flex-1">${y(R(d.id))}</span>
                <span class="text-[10px] text-gray-500">${y(d.capability)}</span>
              </label>`).join(""):te("Connect at least one account first.","plug-zap")}
          </div>
          <button onclick="window.socialNav('accounts')" class="btn-press w-full py-2.5 rounded-xl text-xs font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20 transition mt-2">Manage accounts</button>
        </div>

        <div class="lg:col-span-1 glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
          <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="eye" class="w-4 h-4 text-blue-400"></i> 3 · Preview & Publish</h3>
          <div id="mp-preview" class="border border-white/10 rounded-2xl overflow-hidden bg-black/30">
            ${Ia(f.media,f.caption,f.hashtags,f.platform)}
          </div>
          <label class="flex items-center gap-2 text-xs text-gray-300 mt-3"><input type="checkbox" id="mp-dup" ${f.allowDuplicate?"checked":""} style="accent-color:#2563eb"> Allow duplicate (bypass duplicate-post protection)</label>
          <div class="grid grid-cols-2 gap-2 mt-3">
            <button onclick="window.socialManualGo('publish_now')" class="btn-press py-3 rounded-xl text-xs font-black bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 transition"><i data-lucide="send" class="w-4 h-4 inline mr-1"></i>Publish Now</button>
            <button onclick="window.socialManualGo('draft')" class="btn-press py-3 rounded-xl text-xs font-bold bg-white/[.04] border border-white/10 text-gray-300 hover:border-blue-500/30 transition"><i data-lucide="save" class="w-4 h-4 inline mr-1"></i>Save Draft</button>
          </div>
          <button onclick="window.socialManualGo('schedule')" class="btn-press w-full py-3 rounded-xl text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 transition"><i data-lucide="calendar-clock" class="w-4 h-4 inline mr-1"></i>Schedule for Later
            <input id="mp-when" type="datetime-local" class="input-field !mt-2 !py-2 !text-xs"></button>
        </div>
      </div>`,F()}catch(t){e.innerHTML=`<div class="glass-soft border border-red-500/20 rounded-2xl p-5 text-sm text-red-300">${y(t.message)}</div>`}}function Ri(e,t,a,i,o){return e==="product"?`<div class="grid grid-cols-2 gap-2 max-h-44 overflow-y-auto scrollbar-thin border border-white/10 rounded-xl p-2 bg-white/[.02]">
      ${(t||[]).map(s=>`<button data-pid="${y(s.property_id)}" onclick="window.socialPickProduct('${y(s.property_id)}', this)" class="btn-press text-left p-2 rounded-lg text-[11px] text-gray-300 hover:bg-blue-500/10 hover:text-white border border-transparent hover:border-blue-500/30 transition truncate">${y(s.title)}</button>`).join("")||'<p class="text-xs text-gray-500 p-2">No active products.</p>'}
    </div>`:e==="promo"?`<div class="space-y-2 max-h-44 overflow-y-auto scrollbar-thin">
      ${(a||[]).map(s=>`<button data-pid="${y(s.id)}" onclick="window.socialPickPromo('${y(s.id)}', this)" class="btn-press w-full text-left p-2.5 rounded-lg text-[11px] text-gray-300 hover:bg-blue-500/10 transition border border-white/5">${y(s.title||s.id)}</button>`).join("")||'<p class="text-xs text-gray-500 p-2">No active promotions.</p>'}
    </div>`:e==="content"?`<div class="space-y-2 max-h-44 overflow-y-auto scrollbar-thin">
      ${(i||[]).map(s=>`<button data-pid="${y(s.id)}" onclick="window.socialPickContent('${y(s.id)}', this)" class="btn-press w-full text-left p-2.5 rounded-lg text-[11px] text-gray-300 hover:bg-blue-500/10 transition border border-white/5">${y(s.title)}</button>`).join("")||'<p class="text-xs text-gray-500 p-2">No content items. Add them under Platform Settings → News / Articles.</p>'}
    </div>`:e==="draft"?`<div class="space-y-2 max-h-44 overflow-y-auto scrollbar-thin">
      ${(o||[]).map(s=>`<button onclick="window.socialLoadDraft('${y(s.id)}')" class="btn-press w-full text-left p-2.5 rounded-lg text-[11px] text-gray-300 hover:bg-blue-500/10 transition border border-white/5"><b>${y(R(s.platform))}</b> · ${y((s.caption||"").slice(0,40))}</button>`).join("")||'<p class="text-xs text-gray-500 p-2">No drafts.</p>'}
    </div>`:`<p class="text-[11px] text-gray-500">Write a custom announcement — remember to comply with each platform's rules.</p>`}window.socialManualSource=function(){f.sourceType=document.getElementById("mp-source").value,f.caption="",f.linkUrl="",f.media=[],Ca(document.getElementById("social-body"))};window.socialPickProduct=function(e,t){c.from("showroom_listings").select("*").eq("property_id",e).maybeSingle().then(({data:a})=>{if(!a)return;f.sourceId=e,f.linkUrl=`${window.location.origin}/product/${encodeURIComponent(e)}`;const i=Array.isArray(a.images)?a.images.filter(r=>/^https?:\/\//i.test(r)).slice(0,6).map(r=>({url:r,type:"image"})):[];a.video_url&&/^https?:\/\//i.test(a.video_url)&&i.push({url:a.video_url,type:"video"}),f.media=i;const o=a.currency||"USD",s=a.price!=null?`${Number(a.price).toLocaleString("en-US")} ${o}`:"";f.caption=`${a.title}
${s?`${s}
`:""}${f.linkUrl}`,document.getElementById("mp-caption").value=f.caption,document.getElementById("mp-link").value=f.linkUrl,me(),ce(),document.querySelectorAll("#mp-source-picker button").forEach(r=>{r.classList.remove("bg-blue-500/10","text-white","border-blue-500/30"),r.classList.add("border-transparent")}),t&&(t.classList.add("bg-blue-500/10","text-white","border-blue-500/30"),t.classList.remove("border-transparent"))})};window.socialPickPromo=function(e,t){c.from("promotions").select("*").eq("id",e).maybeSingle().then(({data:a})=>{a&&(f.sourceType="promo",f.sourceId=e,f.media=[],a.image_url&&/^https?:\/\//i.test(a.image_url)&&f.media.push({url:a.image_url,type:"image"}),a.video_url&&/^https?:\/\//i.test(a.video_url)&&f.media.push({url:a.video_url,type:"video"}),f.caption=a.title||"Special offer",document.getElementById("mp-caption").value=f.caption,me(),ce())})};window.socialPickContent=function(e,t){c.from("social_content_items").select("*").eq("id",e).maybeSingle().then(({data:a})=>{a&&(f.sourceType="content",f.sourceId=e,f.media=[],a.image_url&&/^https?:\/\//i.test(a.image_url)&&f.media.push({url:a.image_url,type:"image"}),a.video_url&&/^https?:\/\//i.test(a.video_url)&&f.media.push({url:a.video_url,type:"video"}),f.caption=`${a.title}
${a.body||""}`.trim(),f.linkUrl=a.link_url||"",document.getElementById("mp-caption").value=f.caption,document.getElementById("mp-link").value=f.linkUrl,me(),ce())})};window.socialLoadDraft=async function(e){const{data:t}=await c.from("social_posts").select("*").eq("id",e).maybeSingle();t&&(window.socialNav("manual"),setTimeout(()=>{f={sourceType:"text",sourceId:t.id,caption:t.caption||"",hashtags:(t.hashtags||"").replace(/#/g,""),platform:t.platform,media:Array.isArray(t.media)?t.media:[],linkUrl:t.metadata?.link_url||"",allowDuplicate:!0},document.getElementById("mp-caption").value=f.caption,document.getElementById("mp-hashtags").value=f.hashtags,document.getElementById("mp-link").value=f.linkUrl,me(),ce()},200))};window.socialManualPlatform=function(e){f.platform=e,document.querySelectorAll("#mp-platforms label").forEach((a,i,o)=>{a.classList.toggle("border-blue-500/50",a.querySelector(".accent-blue-600")?.value===e)}),document.querySelectorAll("#mp-platforms label").forEach(a=>a.classList.remove("border-blue-500/50"));const t=Array.from(document.querySelectorAll("#mp-platforms label")).find(a=>a.textContent.includes(R(e)));t&&t.classList.add("border-blue-500/50"),ce()};window.socialAddMediaUrl=function(){const e=document.getElementById("mp-media-url").value.trim();if(!e)return;const t=/\.(mp4|webm|mov|m4v)(\?|$)/i.test(e)?"video":"image";f.media.push({url:e,type:t}),document.getElementById("mp-media-url").value="",me(),ce()};window.socialAddMediaFile=async function(e){const t=e.target.files?.[0];if(t){try{w("Uploading media…","info");const a=await Bi(t);f.media.push(a),me(),ce(),w("Media added.")}catch(a){w(a.message,"error")}e.target.value=""}};function Aa(e,t){return`<div class="flex items-center gap-2 p-2 rounded-lg bg-white/[.03] border border-white/10">
    ${e.type==="video"?'<i data-lucide="video" class="w-4 h-4 text-violet-300 shrink-0"></i>':'<i data-lucide="image" class="w-4 h-4 text-emerald-300 shrink-0"></i>'}
    <span class="text-[11px] text-gray-400 truncate flex-1">${y(e.url)}</span>
    <button onclick="window.socialRemoveMedia(${t})" class="p-1 text-red-400 hover:text-red-300"><i data-lucide="x" class="w-3.5 h-3.5"></i></button>
  </div>`}window.socialRemoveMedia=function(e){f.media.splice(e,1),me(),ce()};function me(){const e=document.getElementById("mp-media");e&&(e.innerHTML=f.media.length?f.media.map(Aa).join(""):'<p class="text-[11px] text-gray-500">No media. Add an image or video URL, or upload a file.</p>'),F()}function Ia(e,t,a,i){const o=e?.[0],s=[t,a?a.split(/[ ,]+/).map(r=>"#"+r.replace(/^#/,"")).join(" "):""].filter(Boolean).join(`
`);return`
    <div class="p-4 space-y-3">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center"><i data-lucide="${ae(i)}" class="w-4 h-4 text-blue-300"></i></div>
        <p class="text-[11px] font-bold text-gray-300">${y(R(i)||"Select a platform")}</p>
      </div>
      ${o?o.type==="video"?`<video src="${y(o.url)}" class="w-full rounded-xl max-h-40 object-cover" controls muted></video>`:`<img src="${y(o.url)}" class="w-full rounded-xl max-h-40 object-cover" onerror="this.style.display='none'">`:'<div class="w-full h-24 rounded-xl bg-white/5 flex items-center justify-center"><span class="text-[11px] text-gray-600">No media</span></div>'}
      <p class="text-xs text-gray-300 whitespace-pre-wrap break-words max-h-32 overflow-y-auto scrollbar-thin">${y(s||"Your caption will appear here…")}</p>
    </div>`}function ce(){f.caption=document.getElementById("mp-caption")?.value??f.caption,f.hashtags=document.getElementById("mp-hashtags")?.value??f.hashtags;const e=document.getElementById("mp-preview");e&&(e.innerHTML=Ia(f.media,f.caption,f.hashtags,f.platform)),F()}function qi(){f.caption=document.getElementById("mp-caption")?.value||"",f.hashtags=document.getElementById("mp-hashtags")?.value||"",f.linkUrl=document.getElementById("mp-link")?.value||"",f.allowDuplicate=document.getElementById("mp-dup")?.checked||!1;const e=f.hashtags.split(/[\s,]+/).filter(Boolean).map(t=>t.replace(/^#/,"")).filter(Boolean);return{platform:f.platform,caption:f.caption,hashtags:e,media:f.media,linkUrl:f.linkUrl,contentType:f.sourceType==="draft"?"manual":f.sourceType,sourceType:Fi(f.sourceType),sourceId:f.sourceId,allowDuplicate:f.allowDuplicate}}function Fi(e){return e==="promo"?"promotions":e==="content"?"social_content_item":e==="product"?"showroom_listing":null}window.socialManualGo=async function(e){const t=qi();if(!t.platform)return w("Select a platform first.","error");if(!t.caption.trim()&&t.sourceType==="text")return w("Write a caption.","error");if(t.sourceType==="showroom_listing"&&!t.sourceId)return w("Pick a product first.","error");if(f.sourceType==="draft"&&f.sourceId)try{await de("/api/social/posts",{method:"POST",body:JSON.stringify({action:"trigger",post_id:f.sourceId})}),w("Draft published."),window.socialNav("published");return}catch(a){return w(a.message,"error")}if(e==="schedule"){const a=document.getElementById("mp-when")?.value;if(!a)return w("Choose a date and time to schedule.","error");t.mode="schedule",t.scheduledFor=new Date(a).toISOString()}else e==="draft"?t.mode="draft":t.mode="publish_now";try{const a=document.getElementById("social-body")?.querySelector("button");a&&(a.disabled=!0);const i=await de("/api/social/publish",{method:"POST",body:JSON.stringify(t)});w(i.message||"Done."),f.media=[],window.socialNav(e==="publish_now"?"published":e==="schedule"?"schedule":"queue")}catch(a){w(a.message,"error")}};async function Ui(e){try{const[t,a]=await Promise.all([c.from("social_automation_rules").select("*").eq("enabled",!0).order("next_run_at"),c.from("social_posts").select("*").eq("status","scheduled").order("scheduled_for")]),i=t.data||[],o=a.data||[];e.innerHTML=`
      <div class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
          <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="bot" class="w-4 h-4 text-blue-400"></i> Automation Schedules (server-driven)</h3>
          ${i.length?i.map(s=>`
            <div class="flex items-center gap-3 p-3 bg-white/[.03] border border-white/10 rounded-xl">
              <i data-lucide="bot" class="w-4 h-4 text-blue-400"></i>
              <div class="flex-1 min-w-0"><p class="text-xs font-bold text-white truncate">${y(s.name)}</p><p class="text-[11px] text-gray-500">${y((s.platforms||[]).map(R).join(", "))} · ${y(Ea(s))}</p></div>
              <div class="text-right"><p class="text-[11px] font-bold text-emerald-300">${s.next_run_at?se(s.next_run_at):"pending"}</p><p class="text-[10px] text-gray-500">next run</p></div>
            </div>`).join(""):te("No enabled automation rules. Enable rules under Automatic Posting.","bot")}
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
          <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="calendar-clock" class="w-4 h-4 text-amber-300"></i> Manually Scheduled Posts</h3>
          ${o.length?o.map(s=>`
            <div class="flex items-center gap-3 p-3 bg-white/[.03] border border-white/10 rounded-xl">
              <i data-lucide="${ae(s.platform)}" class="w-4 h-4 ${G[s.platform]?.tone||""}"></i>
              <div class="flex-1 min-w-0"><p class="text-xs font-bold text-white truncate">${R(s.platform)}${s.caption?" · "+y(s.caption.slice(0,70)):""}</p><p class="text-[11px] text-gray-500">Scheduled ${se(s.scheduled_for)}</p></div>
              <div class="flex gap-2">
                <button onclick="window.socialPostAction('${s.id}','trigger')" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 transition">Publish now</button>
                <button onclick="window.socialPostAction('${s.id}','cancel')" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition">Cancel</button>
              </div>
            </div>`).join(""):te("Nothing scheduled yet. Use Manual Posting → Schedule for Later.","calendar-clock")}
        </div>
      </div>`,F()}catch(t){e.innerHTML=`<div class="glass-soft border border-red-500/20 rounded-2xl p-5 text-sm text-red-300">${y(t.message)}</div>`}}async function Vt(e){const{data:t}=await c.from("social_posts").select("*").in("status",["draft","queued","publishing"]).order("created_at",{ascending:!0}),a=t||[],i={draft:a.filter(o=>o.status==="draft"),queued:a.filter(o=>o.status==="queued"),publishing:a.filter(o=>o.status==="publishing")};e.innerHTML=`
    <div class="space-y-4">
      ${["publishing","queued","draft"].map(o=>`
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-2">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="${o==="draft"?"hourglass":o==="queued"?"list-checks":"loader-2"}" class="w-4 h-4 ${o==="draft"?"text-violet-300":o==="queued"?"text-sky-300":"text-violet-300"}"></i> ${o==="draft"?"Awaiting Approval (drafts)":o==="queued"?"Queued":"Publishing"}</h3>
            <span class="badge bg-blue-500/10 text-blue-300 border-blue-500/20">${i[o].length}</span>
          </div>
          ${i[o].length?i[o].map(s=>Ni(s)).join(""):'<p class="text-[11px] text-gray-600 py-2">Empty.</p>'}
        </div>`).join("")}
    </div>`,F()}function Ni(e){const t=e.status==="draft";return`
    <div class="flex items-center gap-3 p-3 bg-white/[.03] border border-white/10 rounded-xl">
      <i data-lucide="${ae(e.platform)}" class="w-4 h-4 ${G[e.platform]?.tone||""} shrink-0"></i>
      <div class="flex-1 min-w-0">
        <p class="text-xs font-bold text-white truncate">${R(e.platform)}${e.caption?" · "+y(e.caption.slice(0,60)):""}</p>
        <p class="text-[11px] text-gray-500">${y(e.source_type||"manual")} · ${t?"auto-generated, needs approval":e.auto_generated?"automatic":"manual"} · ${se(e.created_at)}</p>
      </div>
      <div class="flex gap-2 flex-wrap justify-end">
        ${e.scheduled_for?`<span class="badge bg-amber-500/15 text-amber-300 border-amber-500/30">${se(e.scheduled_for)}</span>`:""}
        ${t?`<button onclick="window.socialApprove('${e.id}')" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 transition">Approve & publish</button>`:""}
        ${!t&&e.status==="queued"?`<button onclick="window.socialPostAction('${e.id}','trigger')" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 transition">Publish now</button>`:""}
        <button onclick="window.socialPostAction('${e.id}','cancel')" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition">Cancel</button>
        <button onclick="window.socialPostAction('${e.id}','delete')" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold bg-gray-500/10 text-gray-400 border border-gray-500/25 hover:bg-gray-500/20 transition">Delete</button>
      </div>
    </div>`}window.socialApprove=async function(e){const{error:t}=await c.from("social_posts").update({status:"queued",updated_at:new Date().toISOString()}).eq("id",e);if(t)return w(t.message,"error");w("Approved. It will publish on the next scheduler tick (or click Publish now)."),Vt(document.getElementById("social-body"))};window.socialPostAction=async function(e,t){try{if(t==="delete"&&!confirm("Delete this post record?"))return;await de("/api/social/posts",{method:"POST",body:JSON.stringify({action:t,post_id:e})}),w({trigger:"Published!",retry:"Retried.",cancel:"Cancelled.",delete:"Deleted."}[t]||"Done.");const a=document.getElementById("social-body");a&&(t==="trigger"||t==="retry")?window.socialNav("published"):Vt(a)}catch(a){w(a.message,"error")}};async function Oi(e){const{data:t}=await c.from("social_posts").select("*").eq("status","published").order("published_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
    <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
      <div class="flex items-center justify-between"><h3 class="text-sm font-black text-white"><i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 inline mr-1.5"></i>Published Posts</h3><span class="badge bg-emerald-500/15 text-emerald-300 border-emerald-500/30">${a.length}</span></div>
      ${a.length?`<div class="space-y-2">${a.map(Hi).join("")}</div>`:te("No published posts yet. Post manually or enable automation.","check-circle-2")}
    </div>`,F()}function Hi(e){const t=(e.media||[])[0];return`
    <div class="flex items-center gap-3 p-3 bg-white/[.03] border border-white/10 rounded-xl">
      ${t?t.type==="video"?`<video src="${y(t.url)}" class="w-10 h-10 rounded-lg object-cover shrink-0"></video>`:`<img src="${y(t.url)}" class="w-10 h-10 rounded-lg object-cover shrink-0" onerror="this.style.display='none'">`:`<div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0"><i data-lucide="${ae(e.platform)}" class="w-4 h-4 ${G[e.platform]?.tone||""}"></i></div>`}
      <div class="flex-1 min-w-0">
        <p class="text-xs font-bold text-white truncate">${R(e.platform)} · ${e.auto_generated?"automatic":"manual"}${e.content_type!=="manual"?" · "+y(e.content_type):""}</p>
        <p class="text-[11px] text-gray-500 truncate">${y(e.caption||"(no caption)")}</p>
        <p class="text-[10px] text-gray-600">${se(e.published_at)}${e.platform_post_id?" · id "+y(e.platform_post_id):""}</p>
      </div>
      <div class="flex gap-2 flex-wrap justify-end">
        ${e.platform_post_url?`<a href="${y(e.platform_post_url)}" target="_blank" rel="noopener" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition">View</a>`:""}
        <button onclick="window.socialPostAction('${e.id}','delete')" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold bg-gray-500/10 text-gray-400 border border-gray-500/25 hover:bg-gray-500/20 transition">Delete</button>
      </div>
    </div>`}async function Vi(e){const{data:t}=await c.from("social_posts").select("*").eq("status","failed").order("updated_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
    <div class="glass-soft border border-red-500/20 rounded-2xl p-5 space-y-3">
      <div class="flex items-center justify-between"><h3 class="text-sm font-black text-white"><i data-lucide="alert-triangle" class="w-4 h-4 text-red-400 inline mr-1.5"></i>Failed Posts</h3><span class="badge bg-red-500/15 text-red-300 border-red-500/30">${a.length}</span></div>
      ${a.length?a.map(Gi).join(""):te("No failed posts.","check-circle-2")}
    </div>`,F()}function Gi(e){const t=e.next_retry_at;return`
    <div class="p-3 rounded-xl bg-red-500/[.04] border border-red-500/20 space-y-2">
      <div class="flex items-center gap-3">
        <i data-lucide="${ae(e.platform)}" class="w-4 h-4 ${G[e.platform]?.tone||""} shrink-0"></i>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold text-white truncate">${R(e.platform)} · attempt ${e.retry_count||0}${e.max_retries?" / "+e.max_retries:""}</p>
          <p class="text-[11px] text-gray-500 truncate">${y(e.caption||"(no caption)")}</p>
        </div>
        <div class="flex gap-2 flex-wrap justify-end">
          <button onclick="window.socialPostAction('${e.id}','retry')" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 transition">Retry now</button>
          <button onclick="window.socialPostAction('${e.id}','delete')" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold bg-gray-500/10 text-gray-400 border border-gray-500/25 hover:bg-gray-500/20 transition">Delete</button>
        </div>
      </div>
      <p class="text-[11px] text-red-300/90 break-words">${y(e.last_error||"Unknown error")}</p>
      ${t?`<p class="text-[10px] text-amber-300/80">Auto-retry scheduled: ${se(t)}.</p>`:""}
    </div>`}async function Wi(e){const[t,a]=await Promise.all([c.from("social_post_logs").select("*").order("created_at",{ascending:!1}).limit(300),c.from("social_posts").select("id,caption,platform")]),i=t.data||[],o=new Map((a.data||[]).map(r=>[r.id,r])),s={info:"text-sky-300",warn:"text-amber-300",error:"text-red-300"};e.innerHTML=`
    <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
      <div class="flex items-center justify-between"><h3 class="text-sm font-black text-white"><i data-lucide="scroll-text" class="w-4 h-4 text-blue-400 inline mr-1.5"></i>Post Logs</h3><span class="badge bg-blue-500/10 text-blue-300 border-blue-500/20">${i.length}</span></div>
      <div class="space-y-1.5 max-h-[65vh] overflow-y-auto scrollbar-thin">${i.map(r=>{const n=o.get(r.post_id);return`<div class="p-2.5 rounded-xl bg-white/[.02] border border-white/5 flex items-start gap-3">
          <span class="badge ${s[r.level]||s.info} border-transparent !text-[10px]">${y(r.level)}</span>
          <div class="flex-1 min-w-0">
            <p class="text-[11px] text-gray-300 break-words">${y(r.message)}</p>
            <p class="text-[10px] text-gray-600">${se(r.created_at)}${n?" · "+y(R(n.platform))+(n.caption?" · "+y(n.caption.slice(0,50)):""):""}</p>
          </div>
        </div>`}).join("")||te("No logs yet.","scroll-text")}</div>
    </div>`,F()}let tt=[];async function at(e){try{const t=await be(),{data:a}=await c.from("social_platform_settings").select("*").order("platform");tt=a||[];const{data:i}=await c.from("social_content_items").select("*").order("created_at",{ascending:!1});e.innerHTML=`
      ${Ki()}
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        ${(t.platforms||[]).map(o=>Yi(o)).join("")}
      </div>
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3 mt-4">
        <div class="flex items-center justify-between flex-wrap gap-2">
          <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="newspaper" class="w-4 h-4 text-blue-400"></i> News / Articles (Content Items for Auto Posting)</h3>
          <button onclick="window.socialNewContentItem()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 transition"><i data-lucide="plus" class="w-3.5 h-3.5 inline mr-1"></i>New item</button>
        </div>
        ${(i||[]).length?(i||[]).map(zi).join(""):te('Add news/article items to make them available for the automatic publisher (content type "News / articles").',"newspaper")}
      </div>`,F()}catch(t){e.innerHTML=`<div class="glass-soft border border-red-500/20 rounded-2xl p-5 text-sm text-red-300">${y(t.message)}</div>`}}function zi(e){return`<div class="flex items-center gap-3 p-3 bg-white/[.03] border border-white/10 rounded-xl">
    ${e.image_url?`<img src="${y(e.image_url)}" class="w-10 h-10 rounded-lg object-cover shrink-0" onerror="this.style.display='none'">`:'<i data-lucide="newspaper" class="w-4 h-4 text-blue-400 shrink-0"></i>'}
    <div class="flex-1 min-w-0"><p class="text-xs font-bold text-white truncate">${y(e.title)}</p><p class="text-[11px] text-gray-500 truncate">${y((e.body||"").slice(0,60))}</p></div>
    <span class="badge ${e.is_active?"bg-emerald-500/15 text-emerald-300 border-emerald-500/30":"bg-gray-500/15 text-gray-400 border-gray-500/30"}">${e.is_active?"active":"inactive"}</span>
    <button onclick="window.socialToggleContentItem('${e.id}')" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold ${e.is_active?"bg-amber-500/10 text-amber-300":"bg-emerald-500/15 text-emerald-300"} transition">${e.is_active?"Deactivate":"Activate"}</button>
    <button onclick="window.socialDeleteContentItem('${e.id}')" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition">Delete</button>
  </div>`}window.socialNewContentItem=function(){const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`<div class="modal-box">
    <div class="flex items-center justify-between mb-4"><h3 class="text-base font-black text-white">New News / Article Item</h3><button onclick="this.closest('.modal-overlay').remove()" class="p-2 rounded-lg text-gray-400 hover:bg-white/5"><i data-lucide="x" class="w-4 h-4"></i></button></div>
    <div class="space-y-3">
      <div><label class="lbl">Title *</label><input id="ci-title" class="input-field" placeholder="Article title"></div>
      <div><label class="lbl">Body</label><textarea id="ci-body" class="input-field" placeholder="Article summary / text…"></textarea></div>
      <div><label class="lbl">Image URL</label><input id="ci-image" class="input-field" placeholder="https://…"></div>
      <div><label class="lbl">Video URL</label><input id="ci-video" class="input-field" placeholder="https://…"></div>
      <div><label class="lbl">Link URL</label><input id="ci-link" class="input-field" placeholder="https://…"></div>
      <div class="flex justify-end gap-2 pt-3 border-t border-white/10">
        <button onclick="this.closest('.modal-overlay').remove()" class="btn-press px-4 py-2 rounded-xl text-xs font-bold text-gray-400 hover:bg-white/5">Cancel</button>
        <button onclick="window.socialSaveContentItem()" class="btn-press px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white">Save item</button>
      </div>
    </div></div>`,document.getElementById("modal-container").appendChild(e),F()};window.socialSaveContentItem=async function(){const e=document.getElementById("ci-title").value.trim();if(!e)return w("Title is required.","error");const{error:t}=await c.from("social_content_items").insert({title:e,body:document.getElementById("ci-body").value,image_url:document.getElementById("ci-image").value.trim(),video_url:document.getElementById("ci-video").value.trim(),link_url:document.getElementById("ci-link").value.trim(),is_active:!0});if(t)return w(t.message,"error");document.querySelector(".modal-overlay")?.remove(),w("Content item saved."),at(document.getElementById("social-body"))};window.socialToggleContentItem=async function(e){const{data:t}=await c.from("social_content_items").select("is_active").eq("id",e).maybeSingle();if(!t)return w("Item not found.","error");const{error:a}=await c.from("social_content_items").update({is_active:!t.is_active}).eq("id",e);if(a)return w(a.message,"error");w("Updated."),at(document.getElementById("social-body"))};window.socialDeleteContentItem=async function(e){confirm("Delete this content item?")&&(await c.from("social_content_items").delete().eq("id",e),w("Deleted."),at(document.getElementById("social-body")))};function Ki(){return`
    <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3 mb-4">
      <div class="flex items-start gap-3">
        <div class="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0"><i data-lucide="music-2" class="w-5 h-5 text-white"></i></div>
        <div class="min-w-0 flex-1">
          <h3 class="text-sm font-black text-white">TikTok Developer Connection — official setup</h3>
          <p class="text-xs text-gray-500 leading-relaxed mt-1">Create your TikTok app <b class="text-gray-300">externally</b> on the official <a href="https://developers.tiktok.com/app/" target="_blank" rel="noopener" class="text-blue-400 underline hover:text-blue-300">TikTok Developer Portal</a>. This dashboard then connects to it through the official API — no password collection, no fake developer tools.</p>
          <ol class="text-[11px] text-gray-400 space-y-1 mt-2 list-decimal list-inside">
            <li>Sign in at developers.tiktok.com → <b>Manage apps</b> → create your app (must contain your TikTok Business account).</li>
            <li>Under your app, enable the scopes <b>user.info.basic</b>, <b>video.upload</b> and <b>video.publish</b>.</li>
            <li>Add this exact redirect/callback URL to your app:</li>
          </ol>
          <div class="mt-2 flex items-center gap-2">
            <code class="text-[11px] text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2 flex-1 break-all">/api/social/oauth/callback?platform=tiktok</code>
            <button onclick="window.socialCopy(this)" data-text="${y(`${window.location.origin}/api/social/oauth/callback?platform=tiktok`)}" class="btn-press px-3 py-2 rounded-lg text-[11px] font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition">Copy</button>
          </div>
          <ol class="text-[11px] text-gray-400 space-y-1 mt-2 list-decimal list-inside" start="4">
            <li>Copy your <b>Client Key</b> and <b>Client Secret</b> into the server environment variables <code class="text-[11px] text-green-300">TIKTOK_CLIENT_KEY</code> and <code class="text-[11px] text-green-300">TIKTOK_CLIENT_SECRET</code> (Vercel → project → Settings → Environment Variables). Never put them in browser code.</li>
            <li>Submit your app for <b>Content Posting / app review</b> if you want public posting — until then TikTok publishes as <i>SELF_ONLY</i> and you control privacy below.</li>
            <li>Come back to <b>Connected Accounts</b> → <b>Connect TikTok</b> to authorize your account via official OAuth.</li>
          </ol>
          <p class="text-[10px] text-amber-300/90 mt-2"><i data-lucide="shield-check" class="w-3 h-3 inline mr-1"></i>Nothing is posted automatically until you connect an account, enable automation, and the server-side scheduler runs.</p>
        </div>
      </div>
    </div>`}function Yi(e){const t=tt.find(i=>i.platform===e.id)||{},a=t.config||{};return e.account,`
    <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-3">
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-2 min-w-0"><i data-lucide="${ae(e.id)}" class="w-4 h-4 ${G[e.id]?.tone||""}"></i><p class="text-xs font-black text-white truncate">${y(e.label)}</p></div>
        <label class="toggle-switch"><input type="checkbox" data-platform="ps-${e.id}" ${t.enabled===!1?"":"checked"} onchange="window.socialTogglePlatform('${e.id}', this.checked)"><span class="toggle-slider"></span></label>
      </div>
      ${e.requiresApproval?`<div class="flex items-start gap-2 p-2.5 bg-amber-500/10 border border-amber-500/25 rounded-xl"><i data-lucide="alert-triangle" class="w-4 h-4 text-amber-300 shrink-0 mt-0.5"></i><p class="text-[11px] text-amber-200 leading-relaxed">${y(e.approvalNote||"This platform requires approval / business verification / paid access.")}</p></div>`:""}
      ${e.configured?"":'<p class="text-[10px] text-amber-300/90">API credentials not configured server-side yet (see .env.example).</p>'}
      <div class="grid grid-cols-2 gap-2">
        <div><label class="lbl">Max / day</label><input type="number" class="input-field !text-xs !py-2" value="${y(t.max_posts_per_day??e.maxPostsPerDay??5)}" min="0" onchange="window.socialSavePlatform('${e.id}')" data-f="max_posts_per_day"></div>
        <div><label class="lbl">Min interval (min)</label><input type="number" class="input-field !text-xs !py-2" value="${y(t.min_interval_minutes??60)}" min="0" onchange="window.socialSavePlatform('${e.id}')" data-f="min_interval_minutes"></div>
      </div>
      ${Qi(e.id,a,e)}
      <div class="flex gap-2 flex-wrap">
        ${e.connected?'<span class="badge bg-emerald-500/15 text-emerald-300 border-emerald-500/30">connected</span>':e.usesOAuth?'<span class="badge bg-gray-500/10 text-gray-400 border-gray-500/20">not connected</span>':""}
        ${e.usesOAuth?`<button onclick="window.socialConnect('${e.id}')" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold ${e.connected?"bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20":"bg-gradient-to-r from-blue-600 to-blue-700 text-white"} transition">${e.connected?"Reconnect":"Connect account"}</button>`:`<button onclick="window.socialConnect('${e.id}')" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold ${e.connected?"bg-blue-500/10 text-blue-300":"bg-gradient-to-r from-blue-600 to-blue-700 text-white"} transition">${e.connected?"Reconnect":"Connect"}</button>`}
      </div>
    </div>`}function Qi(e,t,a){const i=[];if(e==="tiktok"&&i.push(`<div><label class="lbl">Post privacy</label><select class="input-field !text-xs !py-2" onchange="window.socialSavePlatform('${e}')" data-f="tiktok_privacy_level">
      <option value="SELF_ONLY" ${(t.tiktok_privacy_level||"SELF_ONLY")==="SELF_ONLY"?"selected":""}>SELF_ONLY (recommended until app approved)</option>
      <option value="PUBLIC_TO_EVERYONE" ${t.tiktok_privacy_level==="PUBLIC_TO_EVERYONE"?"selected":""}>PUBLIC (requires app approval)</option>
    </select></div>`),e==="telegram"&&i.push(`<div class="col-span-2"><label class="lbl">Destination chat / channel (@id or numeric)</label><input class="input-field !text-xs !py-2" value="${y(t.telegram_chat_id||"")}" onchange="window.socialSavePlatform('${e}')" data-f="telegram_chat_id" placeholder="@yourchannel"></div>`),e==="whatsapp"&&i.push(`
      <div><label class="lbl">Phone number ID</label><input class="input-field !text-xs !py-2" value="${y(t.whatsapp_phone_id||"")}" onchange="window.socialSavePlatform('${e}')" data-f="whatsapp_phone_id"></div>
      <div><label class="lbl">Recipient number</label><input class="input-field !text-xs !py-2" value="${y(t.whatsapp_recipient||"")}" onchange="window.socialSavePlatform('${e}')" data-f="whatsapp_recipient"></div>
      <div class="col-span-2"><label class="lbl">Channel id</label><input class="input-field !text-xs !py-2" value="${y(t.whatsapp_channel_id||"")}" onchange="window.socialSavePlatform('${e}')" data-f="whatsapp_channel_id"></div>`),e==="facebook"){const o=Array.isArray(a.account?.extra?.pages)?a.account.extra.pages:[];i.push(`<div class="col-span-2"><label class="lbl">Facebook Page to post to</label><select class="input-field !text-xs !py-2" onchange="window.socialSavePlatform('${e}')" data-f="facebook_page_id">
      <option value="">Select a page…</option>
      ${o.map(s=>`<option value="${y(s.id)}" ${t.facebook_page_id===s.id?"selected":""}>${y(s.name)}</option>`).join("")}
    </select>${o.length?"":'<p class="text-[10px] text-gray-500">Connect a Facebook account first.</p>'}</div>`)}if(e==="instagram"){const o=Array.isArray(a.account?.extra?.pages)?a.account.extra.pages:[];i.push(`<div class="col-span-2"><label class="lbl">Instagram account</label><select class="input-field !text-xs !py-2" onchange="window.socialSavePlatform('${e}')" data-f="instagram_ig_user_id">
      <option value="">Select an Instagram Business account…</option>
      ${o.map(s=>`<option value="${y(s.igUserId)}" ${t.instagram_ig_user_id===String(s.igUserId)?"selected":""}>@${y(s.username)}</option>`).join("")}
    </select>${o.length?"":'<p class="text-[10px] text-gray-500">Connect an Instagram business account first.</p>'}</div>`)}return e==="pinterest"&&i.push(`<div class="col-span-2"><label class="lbl">Board id</label><input class="input-field !text-xs !py-2" value="${y(t.pinterest_board_id||"")}" onchange="window.socialSavePlatform('${e}')" data-f="pinterest_board_id" placeholder="Paste a board id from Pinterest"></div>`),e==="youtube"&&i.push(`<div><label class="lbl">Privacy</label><select class="input-field !text-xs !py-2" onchange="window.socialSavePlatform('${e}')" data-f="youtube_privacy">
      <option value="private" ${(t.youtube_privacy||"private")==="private"?"selected":""}>Private</option>
      <option value="unlisted" ${t.youtube_privacy==="unlisted"?"selected":""}>Unlisted</option>
      <option value="public" ${t.youtube_privacy==="public"?"selected":""}>Public</option>
    </select></div>`),i.length?`<div class="grid grid-cols-2 gap-2">${i.join("")}</div>`:""}window.socialTogglePlatform=async function(e,t){await Ji(e,{enabled:t})};async function Ji(e,t){const a=tt.find(o=>o.platform===e),{error:i}=await c.from("social_platform_settings").upsert({id:a?.id,platform:e,...t,updated_at:new Date().toISOString()},{onConflict:"platform"});if(i){w(i.message,"error");return}w(`${R(e)} ${t.enabled!==void 0?t.enabled?"enabled":"disabled":"saved"}.`)}window.socialSavePlatform=async function(e){const t=Array.from(document.querySelectorAll(`[onchange="window.socialSavePlatform('${e}')"]`)),a={};for(const s of t){const r=s.dataset.f;r&&(a[r]=s.value)}const i=tt.find(s=>s.platform===e),{error:o}=await c.from("social_platform_settings").upsert({id:i?.id,platform:e,config:{...i?.config||{},...a},updated_at:new Date().toISOString()},{onConflict:"platform"});if(o){w(o.message,"error");return}w(`${R(e)} settings saved.`)};window.socialCopy=function(e){const t=e.dataset.text||"";navigator.clipboard?.writeText(t).then(()=>w("Copied.")).catch(()=>w("Copy failed.","error"))};async function Xi(e){try{const t=await be(),a=t.serverConfigured||{};e.innerHTML=`
      <div class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-2">
          <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="server" class="w-4 h-4 text-blue-400"></i> Server Configuration</h3>
          <div class="grid sm:grid-cols-3 gap-2">
            ${_t("Supabase service keys",a.supabase,"Needed for scheduler + token storage")}
            ${_t("Token encryption key",a.tokenEncryption,"SOCIAL_TOKEN_ENC_KEY (AES-256-GCM)")}
            ${_t("Scheduler secret",a.schedulerSecret,"SCHEDULER_CRON_SECRET for the 15-min cron")}
          </div>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-2">
          <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="plug" class="w-4 h-4 text-blue-400"></i> Platform API Ready Status</h3>
          <div class="grid md:grid-cols-2 gap-2">
            ${(t.platforms||[]).map(i=>`
              <div class="flex items-center gap-3 p-3 bg-white/[.03] border border-white/10 rounded-xl">
                <i data-lucide="${ae(i.id)}" class="w-4 h-4 ${G[i.id]?.tone||""} shrink-0"></i>
                <div class="flex-1 min-w-0">
                  <p class="text-xs font-bold text-white">${y(i.label)}</p>
                  <p class="text-[10px] text-gray-500 leading-relaxed">${y(i.requirements?.note||"")}</p>
                </div>
                <span class="badge ${i.configured?"bg-emerald-500/15 text-emerald-300 border-emerald-500/30":"bg-amber-500/15 text-amber-300 border-amber-500/30"}">${i.configured?"ready":"setup needed"}</span>
              </div>`).join("")}
          </div>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-2">
          <h3 class="text-sm font-black text-white">Security notes</h3>
          <ul class="text-[11px] text-gray-400 space-y-1.5 list-disc list-inside">
            <li>API keys and client secrets are only read from server environment variables — they never reach the browser or frontend code.</li>
            <li>Access / refresh tokens are encrypted with AES-256-GCM before storage and are decrypted only inside server functions.</li>
            <li>All social endpoints verify admin access; the scheduler additionally checks its cron secret.</li>
            <li>No TikTok passwords are collected. Only the official OAuth flow is used — no scraping, no unofficial bots.</li>
            <li>Public posting on TikTok / Meta / Google / X is subject to each platform's app review and its posting rules; the dashboard shows those requirements.</li>
          </ul>
        </div>
      </div>`,F()}catch(t){e.innerHTML=`<div class="glass-soft border border-red-500/20 rounded-2xl p-5 text-sm text-red-300">${y(t.message)}</div>`}}function _t(e,t,a){return`<div class="p-3 rounded-xl bg-white/[.03] border border-white/10">
    <div class="flex items-center justify-between gap-2"><p class="text-xs font-bold text-white">${y(e)}</p><span class="badge ${t?"bg-emerald-500/15 text-emerald-300 border-emerald-500/30":"bg-red-500/15 text-red-300 border-red-500/30"}">${t?"OK":"missing"}</span></div>
    <p class="text-[10px] text-gray-500 mt-1">${y(a)}</p>
  </div>`}window.social={renderSocialMedia:Pt,loadTab:et};const Ta="weverseonlineshop@gmail.com",Ba="Weverse Online Shop",La="GLOBAL SHOPPING â€¢ WORLDWIDE DELIVERY",Zi=[{group:"Main",items:[{id:"dashboard",label:"Dashboard",icon:"layout-dashboard"},{id:"products",label:"Products",icon:"package"},{id:"content-settings",label:"Content Settings",icon:"file-cog"},{id:"properties",label:"Properties",icon:"home"},{id:"catalog",label:"Catalog Manager",icon:"boxes"},{id:"orders",label:"Orders",icon:"shopping-bag"},{id:"customers",label:"Customers",icon:"users"},{id:"reviews",label:"Reviews",icon:"star"},{id:"messages",label:"Messages",icon:"message-circle"},{id:"coupons",label:"Coupons",icon:"ticket"},{id:"ads",label:"Advertisements",icon:"megaphone"},{id:"notifications",label:"Notifications",icon:"bell"}]},{group:"Marketing",items:[{id:"social",label:"Social Media Automation",icon:"share-2"}]},{group:"Configuration",items:[{id:"payment-settings",label:"Payment Settings",icon:"credit-card"},{id:"social-settings",label:"Social Media Integrations",icon:"plug"},{id:"homepage-branding",label:"Homepage Branding",icon:"image"},{id:"promo-bg",label:"Promo & Backgrounds",icon:"image"},{id:"brand",label:"Brand Manager",icon:"palette"},{id:"content",label:"Content Manager",icon:"file-text"},{id:"seo",label:"SEO Manager",icon:"search"},{id:"email",label:"Email Settings",icon:"mail"},{id:"analytics",label:"Analytics",icon:"bar-chart-3"},{id:"security",label:"Security",icon:"shield"},{id:"activity",label:"Activity Logs",icon:"activity"},{id:"backup",label:"Backup & Restore",icon:"database"},{id:"settings",label:"Settings",icon:"settings"},{id:"publish",label:"Publish & Deploy",icon:"rocket"}]}],eo={dashboard:"Dashboard",products:"Products Manager",properties:"Properties Manager",catalog:"Catalog Manager",orders:"Orders Manager",customers:"Customers Manager",reviews:"Reviews Manager",messages:"Messages & Support",coupons:"Coupons Manager",ads:"Advertisement Manager",content:"Content Manager","content-settings":"Content Settings","homepage-branding":"Homepage Branding","promo-bg":"Promo & Backgrounds",brand:"Brand Manager","payment-settings":"Payment Settings",seo:"SEO Manager",email:"Email Settings",analytics:"Analytics",security:"Security",activity:"Activity Logs",backup:"Backup & Restore",settings:"Settings",publish:"Publish & Deploy",social:"Social Media Automation","social-settings":"Social Media Integrations"},Gt=[...yi].sort();let P={user:null,section:"dashboard"};function l(e){if(e==null)return"";const t=document.createElement("div");return t.textContent=String(e),t.innerHTML}function Ma(e,t="USD"){return`${(parseFloat(e)||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})} ${t}`}function X(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"â€”"}function ue(e){return e?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"â€”"}function it(){return"W-"+String(Date.now()).slice(-6)+Math.floor(Math.random()*1e3).toString().padStart(3,"0")}const to=["id","property_id","listing_type","category","subcategory","title","description","price","price_period","currency","country","country_code","state","city","town","product_location","latitude","longitude","bedrooms","bathrooms","building_size","land_size","parking_spaces","property_type","furnished","listing_status","images","features","tags","highlights","seo_keywords","specifications","brand","color","size","condition","warranty","shipping_info","delivery_estimate","weight","dimensions","storage_options","ram_options","color_options","availability_status","stock_quantity","sku","is_active","is_featured","is_ai_generated","ai_generated_fields","rating","rating_count","favorite_count","review_count","video","video_url","approval_status","published_at","created_at","updated_at","real_price","year_built","year_renovated","half_bathrooms","floors","garage","zip_code","address","landmarks","interior_features","exterior_features","home_systems","legal_info","risk_notes","floor_plan","nearby_area","verification_status","verification_date","inspection_info","documents","language_info"];function oe(e){const t={};if(!e||typeof e!="object")return t;for(const a of to)a in e&&(t[a]=e[a]);return t}function p(e,t="success"){const a=document.getElementById("toast"),i=document.getElementById("toast-msg"),o=a.querySelector("i[data-lucide]");if(!a||!i)return;i.textContent=e;const s={success:"check-circle",error:"alert-circle",info:"info"},r={success:"text-emerald-400",error:"text-red-400",info:"text-blue-400"};o&&(o.setAttribute("data-lucide",s[t]||"info"),o.className=`w-4 h-4 shrink-0 ${r[t]||"text-blue-400"}`),a.style.transform="translateY(0)",a.style.opacity="1",window.lucide&&lucide.createIcons(),clearTimeout(a._t),a._t=setTimeout(()=>{a.style.transform="translateY(20px)",a.style.opacity="0"},3e3)}function T(e){return!e||typeof e!="string"?!1:/^data:video\//i.test(e)?!0:e.startsWith("blob:")?!1:/\.(mp4|webm|mov|m4v|avi|mkv|ogv)(\?|#|$)/i.test(e)}function Le(e){return e?e.type&&e.type.startsWith("video/")?!0:/\.(mp4|webm|mov|m4v|avi|mkv|ogv)$/i.test(String(e.name||"")):!1}function O(e){const t={pending_verification:["bg-amber-400/20 text-amber-300 border-amber-400/30","Pending Verification"],approved:["bg-emerald-400/20 text-emerald-300 border-emerald-400/30","Approved"],rejected:["bg-red-400/20 text-red-300 border-red-400/30","Payment Rejected"],payment_received:["bg-cyan-400/20 text-cyan-300 border-cyan-400/30","Payment Received"],payment_approved:["bg-emerald-400/20 text-emerald-300 border-emerald-400/30","Payment Approved"],payment_verified:["bg-emerald-400/20 text-emerald-300 border-emerald-400/30","Payment Verified"],paid:["bg-emerald-400/20 text-emerald-300 border-emerald-400/30","Paid"],payment_failed:["bg-red-400/20 text-red-300 border-red-400/30","Payment Failed"],documentation_pending:["bg-amber-400/20 text-amber-300 border-amber-400/30","Documentation Pending"],refund_processing:["bg-orange-400/20 text-orange-300 border-orange-400/30","Refund Processing"],order_completed:["bg-emerald-400/20 text-emerald-300 border-emerald-400/30","Order Completed"],order_placed:["bg-amber-400/20 text-amber-300 border-amber-400/30","Placed"],processing:["bg-indigo-400/20 text-indigo-300 border-indigo-400/30","Processing"],order_processing:["bg-indigo-400/20 text-indigo-300 border-indigo-400/30","Processing"],shipped:["bg-violet-400/20 text-violet-300 border-violet-400/30","Shipped"],order_shipped:["bg-violet-400/20 text-violet-300 border-violet-400/30","Shipped"],in_transit:["bg-violet-400/20 text-violet-300 border-violet-400/30","In Transit"],out_for_delivery:["bg-cyan-400/20 text-cyan-300 border-cyan-400/30","Out for Delivery"],delivered:["bg-emerald-400/20 text-emerald-300 border-emerald-400/30","Delivered"],order_delivered:["bg-emerald-400/20 text-emerald-300 border-emerald-400/30","Delivered"],cancelled:["bg-red-400/20 text-red-300 border-red-400/30","Cancelled"],active:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],inactive:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"],sale:["bg-blue-500/10 text-blue-400 border-blue-500/20","For Sale"],rent:["bg-violet-500/10 text-violet-400 border-violet-500/20","For Rent"],true:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],false:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"]},[a,i]=t[String(e)]||["bg-gray-500/10 text-gray-400 border-gray-500/20",l(e)||"â€”"];return`<span class="badge ${a}">${i}</span>`}function z(){document.getElementById("modal-container").innerHTML=""}function U(e){document.getElementById("modal-container").innerHTML=e,window.lucide&&lucide.createIcons()}window.closeModal=z;window.openModal=U;function M(e,t,a,i,o=""){const s={blue:"bg-blue-500/10 text-blue-400 border-blue-500/15",amber:"bg-amber-500/10 text-amber-400 border-amber-500/15",emerald:"bg-emerald-500/10 text-emerald-400 border-emerald-500/15",red:"bg-red-500/10 text-red-400 border-red-500/15",violet:"bg-violet-500/10 text-violet-400 border-violet-500/15",blue:"bg-blue-500/10 text-blue-400 border-blue-500/15"};return`<div class="stat-card glass-soft border border-blue-500/15 rounded-3xl p-5">
    <div class="flex items-start justify-between mb-3">
      <div class="p-3 ${s[i]||s.blue} rounded-2xl border"><i data-lucide="${a}" class="w-5 h-5"></i></div>
    </div>
    <p class="text-3xl font-black text-white">${l(t)}</p>
    <p class="text-xs text-gray-500 uppercase tracking-wide mt-1 font-bold">${l(e)}</p>
    ${o?`<p class="text-xs text-gray-600 mt-1">${l(o)}</p>`:""}
  </div>`}function Se(){return'<div class="flex items-center justify-center py-24"><div class="flex items-center gap-3 text-gray-500 text-sm"><i data-lucide="loader-2" class="w-5 h-5 animate-spin text-blue-400"></i> Loadingâ€¦</div></div>'}function pe(e,t,a,i=""){return`<div class="flex flex-col items-center justify-center py-20 text-center"><div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4"><i data-lucide="${e}" class="w-8 h-8 text-blue-400"></i></div><h3 class="text-base font-black text-white mb-1">${l(t)}</h3><p class="text-sm text-gray-500 max-w-xs">${l(a)}</p>${i?`<div class="mt-5">${i}</div>`:""}</div>`}function Da(){const e=document.getElementById("sidebar-nav");e&&(e.innerHTML=Zi.map(t=>`
    <div>
      <span class="section-label">${t.group}</span>
      ${t.items.map(a=>`
        <button class="nav-item ${P.section===a.id?"active":""} w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold rounded-xl" onclick="navigate('${a.id}')">
          <i data-lucide="${a.icon}" class="w-4 h-4 shrink-0"></i>
          <span>${a.label}</span>
        </button>`).join("")}
    </div>`).join(""),window.lucide&&lucide.createIcons())}window.navigate=function(e){P.section=e;const t=eo[e]||e,a=document.getElementById("page-title");a&&(a.textContent=t),Da(),closeSidebar();const i=document.getElementById("content");i&&(i.innerHTML=Se()),window.lucide&&lucide.createIcons(),({dashboard:yo,products:D,properties:mt,catalog:Ae,orders:Jt,customers:Fo,reviews:Ue,messages:Xa,coupons:gt,ads:Ce,notifications:Oo,"homepage-branding":ft,"promo-bg":De,content:Ko,"content-settings":oi,seo:as,email:is,analytics:ts,security:yt,activity:os,brand:ht,"payment-settings":qt,backup:ss,settings:rs,publish:xt,social:()=>Pt("overview"),"social-settings":()=>Pt("platforms")}[e]||(()=>{const r=document.getElementById("content");r&&(r.innerHTML=pe("construction","Coming Soon",`${t} is being built.`))}))()};window.openSidebar=()=>{document.getElementById("sidebar").classList.add("open"),document.getElementById("sidebar-overlay").classList.remove("hidden")};window.closeSidebar=()=>{document.getElementById("sidebar").classList.remove("open"),document.getElementById("sidebar-overlay").classList.add("hidden")};document.getElementById("close-sidebar")?.addEventListener("click",closeSidebar);const _e="kco_admin_remember",Wt="kco_login_attempts",Et=5,ao=15*60*1e3;function q(e){const t=document.getElementById("login-error"),a=document.getElementById("login-error-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-success")?.classList.add("hidden"),window.lucide&&lucide.createIcons())}function io(e){const t=document.getElementById("login-success"),a=document.getElementById("login-success-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-error")?.classList.add("hidden"))}function ot(){document.getElementById("login-error")?.classList.add("hidden"),document.getElementById("login-success")?.classList.add("hidden")}function Fe(e){return String(e||"").trim().toLowerCase()}function oo(){try{const e=JSON.parse(localStorage.getItem(_e)||"{}");e?.email&&!Fe(e.email)&&localStorage.removeItem(_e)}catch{localStorage.removeItem(_e)}}function so(){try{const e=JSON.parse(localStorage.getItem(_e)||"{}");return Fe(e?.email)}catch{return""}}function zt(){oo();const e=so(),t=document.getElementById("login-email");t&&(t.value=e||t.value||Ta,t.removeAttribute("readonly"));const a=document.getElementById("reset-email");a&&(a.value=e||a.value||"",a.removeAttribute("readonly"))}function ro(){return`${window.location.origin}/admin.html`}function ge(e){const t=document.getElementById("login-header-title"),a=document.getElementById("login-header-icon");document.getElementById("login-form")?.classList.toggle("hidden",e!=="login"),document.getElementById("twofa-form")?.classList.toggle("hidden",e!=="2fa"),document.getElementById("forgot-form")?.classList.toggle("hidden",e!=="forgot"),ot(),e==="login"&&(t&&(t.textContent="Admin Access"),a&&a.setAttribute("data-lucide","shield-check")),e==="2fa"&&(t&&(t.textContent="Two-Factor Auth"),a&&a.setAttribute("data-lucide","smartphone")),e==="forgot"&&(t&&(t.textContent="Reset Password"),a&&a.setAttribute("data-lucide","mail")),window.lucide&&lucide.createIcons()}function j(e,t,a=""){const i=document.getElementById(e);i&&(i.disabled=t,t?i.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline-block mr-1"></i> Please waitâ€¦':a&&(i.innerHTML=a),window.lucide&&lucide.createIcons())}function ja(){try{return JSON.parse(localStorage.getItem(Wt)||'{"count":0}')}catch{return{count:0}}}function Ra(){const e=ja();return e.count=(e.count||0)+1,e.count>=Et&&(e.lockedUntil=Date.now()+ao),localStorage.setItem(Wt,JSON.stringify(e)),e}function qa(){localStorage.removeItem(Wt)}function Fa(){const e=ja();if(!e.lockedUntil)return null;const t=e.lockedUntil-Date.now();return t<=0?(qa(),null):Math.ceil(t/6e4)}async function ee(e,t,a={}){try{await c.from("admin_security_logs").insert({user_id:e,event_type:t,ip_address:await lo(),user_agent:navigator.userAgent.slice(0,200),...a})}catch{}}async function lo(){try{return(await(await fetch("https://api64.ipify.org?format=json",{signal:AbortSignal.timeout(3e3)})).json()).ip||"unknown"}catch{return"unknown"}}async function Ua(e){if(!e)return!1;let t=!1,a=!1;try{const{data:i}=await c.rpc("is_current_user_admin");t=!0,a=!!i}catch{t=!1}return t?a:Fe(e.email)===Ta}async function no(){const e=window.location.hash;if(e.includes("type=recovery")||e.includes("access_token")){Ke(),go();return}const{data:{session:t}}=await c.auth.getSession();if(t?.user&&await Ua(t.user)){const{data:{currentUser:i}}=await c.auth.getUser(),o=await c.auth.mfa.getAuthenticatorAssuranceLevel(),s=o.data?.currentLevel;if(o.data?.nextLevel==="aal2"&&s!=="aal2"){P.user=t.user,Ke(),ge("2fa"),Kt();return}P.user=t.user,st();return}co()}function Ke(){const e=document.getElementById("login-screen");e&&(e.style.display="flex")}function co(){Ke(),ge("login"),zt(),Na(),Oa(),Kt(),uo();const e=Fa();e&&(q(`Too many failed attempts. Try again in ${e} minute${e>1?"s":""}.`),document.getElementById("login-btn").disabled=!0)}function uo(){document.getElementById("toggle-pw")?.addEventListener("click",()=>{const e=document.getElementById("login-password"),t=document.querySelector("#toggle-pw i");e&&(e.type=e.type==="password"?"text":"password",t&&t.setAttribute("data-lucide",e.type==="password"?"eye":"eye-off"),window.lucide&&lucide.createIcons())})}function Na(){const e=document.getElementById("login-form");!e||e._bound||(e._bound=!0,e.addEventListener("submit",po),document.getElementById("forgot-pw-btn")?.addEventListener("click",()=>ge("forgot")))}async function po(e){e.preventDefault();const t=Fa();if(t){q(`Account locked. Try again in ${t} minute${t>1?"s":""}.`);return}const a=document.getElementById("login-email"),i=Fe(a?.value);if(!i){q("Enter your admin email address."),j("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const o=document.getElementById("login-password").value,s=document.getElementById("remember-me")?.checked;j("login-btn",!0),ot();const{data:r,error:n}=await c.auth.signInWithPassword({email:i,password:o});if(n||!r.user){const x=String(n?.message||"").toLowerCase();if(x.includes("missing supabase credentials")||x.includes("authentication service is unavailable")){q("Authentication is temporarily unavailable due to configuration. Please contact support."),j("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(x.includes("failed to fetch")||x.includes("network request failed")){q("Network error while signing in. Check your connection and try again."),j("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(x.includes("email not confirmed")){q("Your admin email is not confirmed yet. Open your verification email and confirm first."),j("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const h=Ra(),b=Et-h.count,v=h.lockedUntil?`Account locked for 15 minutes after ${Et} failed attempts.`:`Invalid email or password. ${b>0?b+" attempt"+(b!==1?"s":"")+" remaining.":""}`;q(v),j("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),r?.user&&await ee(r.user.id,"login_failed",{metadata:{reason:"wrong_password"}});return}if(!await Ua(r.user)){await c.auth.signOut(),q(`Access denied for ${r.user.email}. This account is signed in but does not have administrator privileges.`),j("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),await ee(r.user.id,"login_denied",{metadata:{reason:"not_admin"}});return}if(s?localStorage.setItem(_e,JSON.stringify({email:i,ts:Date.now()})):localStorage.removeItem(_e),qa(),P.user=r.user,(await c.auth.mfa.getAuthenticatorAssuranceLevel()).data?.nextLevel==="aal2"){j("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),ge("2fa"),Kt(),setTimeout(()=>document.getElementById("totp-code")?.focus(),100);return}await ee(r.user.id,"login_success"),j("login-btn",!1),st()}function Kt(){const e=document.getElementById("verify-2fa-btn");e&&!e._bound&&(e._bound=!0,e.addEventListener("click",ra));const t=document.getElementById("totp-code");t&&!t._bound&&(t._bound=!0,t.addEventListener("input",i=>{i.target.value=i.target.value.replace(/\D/g,"").slice(0,6),i.target.value.length===6&&ra()})),document.getElementById("cancel-2fa-btn")?.addEventListener("click",async()=>{await c.auth.signOut(),P.user=null,ge("login")}),document.getElementById("use-backup-btn")?.addEventListener("click",()=>{document.getElementById("backup-code-wrap")?.classList.toggle("hidden");const o=document.getElementById("backup-code");o&&o.focus()});const a=document.getElementById("verify-backup-btn");a&&!a._bound&&(a._bound=!0,a.addEventListener("click",bo))}async function ra(){const e=document.getElementById("totp-code")?.value?.trim();if(!e||e.length!==6){q("Enter the 6-digit code from your authenticator app.");return}j("verify-2fa-btn",!0),ot();try{const{data:t}=await c.auth.mfa.listFactors(),a=(t?.totp||[])[0];if(!a){q("No 2FA factor found. Please re-login."),j("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In');return}const{data:i,error:o}=await c.auth.mfa.challenge({factorId:a.id});if(o)throw o;const{error:s}=await c.auth.mfa.verify({factorId:a.id,challengeId:i.id,code:e});if(s)throw s;await ee(P.user.id,"login_2fa_success"),j("verify-2fa-btn",!1),st()}catch(t){Ra(),q(t.message?.includes("Invalid")?"Incorrect code. Check your authenticator and try again.":t.message),j("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In'),document.getElementById("totp-code").value="",document.getElementById("totp-code").focus()}}async function bo(){const e=document.getElementById("backup-code")?.value?.trim().toUpperCase().replace(/\s/g,"");if(!e){q("Enter a backup recovery code.");return}j("verify-backup-btn",!0);try{const{data:t}=await c.from("admin_2fa").select("backup_codes").eq("user_id",P.user.id).maybeSingle();if(!t?.backup_codes?.length){q("No backup codes found."),j("verify-backup-btn",!1,"Use Backup Code");return}if(!t.backup_codes.find(o=>(o.code||o).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")&&!o.used)){q("Backup code not found or already used."),j("verify-backup-btn",!1,"Use Backup Code");return}const i=t.backup_codes.map(o=>(o.code||o).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")?{...typeof o=="object"?o:{code:o},used:!0}:o);await c.from("admin_2fa").update({backup_codes:i}).eq("user_id",P.user.id),await ee(P.user.id,"login_backup_code_used"),st()}catch(t){q(t.message),j("verify-backup-btn",!1,"Use Backup Code")}}function Oa(){document.getElementById("back-to-login")?.addEventListener("click",()=>ge("login")),document.getElementById("send-reset-btn")?.addEventListener("click",mo)}async function mo(){const e=document.getElementById("reset-email"),t=Fe(e?.value);if(!t){q("Enter your admin email address to receive a reset link.");return}j("send-reset-btn",!0),ot();const{error:a}=await c.auth.resetPasswordForEmail(t,{redirectTo:ro()});if(j("send-reset-btn",!1,'<i data-lucide="mail" class="w-4 h-4 inline mr-1"></i> Send Reset Link'),a){q(a.message);return}io("Reset link sent! Check your inbox and open it from this device to continue.")}function go(){const e=document.getElementById("login-screen");if(!e)return;const t=e.querySelector(".login-card");t&&(t.innerHTML=`
    <div class="flex items-center gap-3 mb-6">
      <div class="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shrink-0"><i data-lucide="lock" class="w-5 h-5 text-white"></i></div>
      <div><h1 class="text-lg font-black text-white">Set New Password</h1><p class="text-[10px] text-blue-400 font-bold uppercase tracking-wider">Weverse Admin</p></div>
    </div>
    <div id="reset-pw-error" class="hidden mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs"></div>
    <div class="space-y-4">
      <div>
        <label class="lbl">New Password</label>
        <input type="password" id="new-pw-reset" class="input-field" placeholder="At least 8 characters" minlength="8">
      </div>
      <div>
        <label class="lbl">Confirm New Password</label>
        <input type="password" id="confirm-pw-reset" class="input-field" placeholder="Repeat password">
      </div>
      <button id="set-pw-btn" onclick="handlePasswordResetSubmit()" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2">
        <i data-lucide="check" class="w-4 h-4"></i> Set New Password
      </button>
    </div>`,window.lucide&&lucide.createIcons())}window.handlePasswordResetSubmit=async function(){const e=document.getElementById("new-pw-reset")?.value,t=document.getElementById("confirm-pw-reset")?.value,a=document.getElementById("reset-pw-error");if(e!==t){a&&(a.textContent="Passwords do not match.",a.classList.remove("hidden"));return}if((e||"").length<8){a&&(a.textContent="Password must be at least 8 characters.",a.classList.remove("hidden"));return}const{error:i}=await c.auth.updateUser({password:e});if(i){a&&(a.textContent=i.message,a.classList.remove("hidden"));return}p("Password updated! Please log in with your new password."),window.location.hash="",setTimeout(()=>window.location.reload(),1500)};function st(){const e=document.getElementById("login-screen");e&&(e.style.display="none");const t=document.getElementById("admin-user-email");t&&P.user&&(t.textContent=P.user.email||"Admin"),zt();const a=(window.location.hash||"").replace(/^#/,"");a==="social"||a==="social-settings"?navigate(a):navigate("dashboard")}window.adminSignOut=async function(){P.user&&await ee(P.user.id,"logout"),await c.auth.signOut(),P.user=null,Ke(),ge("login"),zt(),Na(),Oa()};window.logoutAllDevices=async function(){confirm("This will sign you out on ALL devices. Continue?")&&(P.user&&await ee(P.user.id,"logout_all_devices"),await c.auth.signOut({scope:"global"}),P.user=null,p("Signed out from all devices."),setTimeout(()=>window.location.reload(),1200))};async function yo(){const e=document.getElementById("content");try{const[t,a,i,o]=await Promise.all([c.from("showroom_listings").select("id,listing_type,is_active,price",{count:"exact"}),c.from("payment_receipts").select("id,order_number,amount,status,created_at",{count:"exact"}).order("created_at",{ascending:!1}).limit(200),c.from("profiles").select("user_id,created_at",{count:"exact"}),c.from("product_reviews").select("id,is_approved",{count:"exact"})]),s=t.data||[],r=a.data||[],n=r.filter(_=>["approved","payment_approved","delivered"].includes(_.status)).reduce((_,k)=>_+(parseFloat(k.amount)||0),0),d=r.filter(_=>["pending","pending_verification","processing"].includes(_.status)).length,u=s.filter(_=>_.listing_type!=="property").length,m=s.filter(_=>_.listing_type==="property").length,g=s.filter(_=>_.listing_type!=="property"&&_.is_active).length,x=i.count||0,h=o.count||0,b=(o.data||[]).filter(_=>!_.is_approved).length,v=new Date,E=r.filter(_=>{const k=new Date(_.created_at);return k.getMonth()===v.getMonth()&&k.getFullYear()===v.getFullYear()}).filter(_=>["approved","payment_approved","delivered"].includes(_.status)).reduce((_,k)=>_+(parseFloat(k.amount)||0),0),C=r.slice(0,6);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-black text-white">Good ${_o()}, Admin</h2>
            <p class="text-sm text-gray-500 mt-0.5">${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}</p>
          </div>
          <button onclick="navigate('products')" class="btn-press hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Product
          </button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          ${M("Total Revenue",`$${n.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald",`$${E.toLocaleString("en-US",{maximumFractionDigits:0})} this month`)}
          ${M("Total Orders",r.length,"shopping-bag","blue",`${d} pending`)}
          ${M("Customers",x,"users","violet")}
          ${M("Products",u,"package","amber",`${g} active`)}
          ${M("Properties",m,"home","blue")}
          ${M("Reviews",h,"star","blue",`${b} pending`)}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="trending-up" class="w-4 h-4 text-blue-400"></i> Revenue Overview</h3>
            <canvas id="chart-revenue" height="200"></canvas>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-bold text-white flex items-center gap-2"><i data-lucide="clock" class="w-4 h-4 text-blue-400"></i> Recent Orders</h3>
              <button onclick="navigate('orders')" class="text-xs text-blue-400 hover:text-blue-300 font-medium transition">View all</button>
            </div>
            ${C.length===0?'<p class="text-xs text-gray-500 text-center py-8">No orders yet</p>':C.map(_=>`
                <div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
                  <div class="min-w-0">
                    <p class="text-xs font-bold text-white truncate">${l(_.order_number||_.id?.slice(0,8))}</p>
                    <p class="text-[10px] text-gray-500">${ue(_.created_at)}</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0 ml-2">
                    <span class="text-xs font-bold text-emerald-400">$${parseFloat(_.amount||0).toLocaleString("en-US",{maximumFractionDigits:0})}</span>
                    ${O(_.status)}
                  </div>
                </div>`).join("")}
          </div>
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="zap" class="w-4 h-4 text-amber-400"></i> Quick Actions</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            ${[{icon:"plus-circle",label:"Add Product",fn:"navigate('products')"},{icon:"home",label:"Add Property",fn:"navigate('properties')"},{icon:"shopping-bag",label:"View Orders",fn:"navigate('orders')"},{icon:"star",label:"Reviews",fn:"navigate('reviews')"},{icon:"ticket",label:"Coupons",fn:"navigate('coupons')"},{icon:"settings",label:"Settings",fn:"navigate('settings')"}].map(_=>`
              <button onclick="${_.fn}" class="btn-press flex flex-col items-center gap-2 p-3 glass-soft border border-blue-500/15 rounded-xl hover:border-blue-500/30 transition">
                <i data-lucide="${_.icon}" class="w-5 h-5 text-blue-400"></i>
                <span class="text-[11px] font-bold text-gray-300">${_.label}</span>
              </button>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),za(r)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${l(t.message)}</div>`)}}async function D(){const e=document.getElementById("content");try{const{data:t,error:a}=await c.from("showroom_listings").select("*").order("created_at",{ascending:!1}),i=new Set,o=[];for(const u of a?[]:t||[])u&&u.property_id&&!i.has(u.property_id)&&(i.add(u.property_id),o.push(u));for(const u of Ft())u&&u.property_id&&!i.has(u.property_id)&&(i.add(u.property_id),o.push(u));if(Array.isArray(Q))for(const u of Q.filter(m=>m.property_id))i.has(u.property_id)||(i.add(u.property_id),o.push(u));const s=[...ga,...ya,...fa,...ha];for(const u of s)u&&u.property_id&&!i.has(u.property_id)&&(i.add(u.property_id),o.push(u));o.sort((u,m)=>new Date(m.created_at||0)-new Date(u.created_at||0));try{await Nt()}catch{}const r=new Set(Ze());if(r.size)for(let u=o.length-1;u>=0;u--)o[u]&&o[u].property_id&&r.has(o[u].property_id)&&o.splice(u,1);for(let u=o.length-1;u>=0;u--){const m=o[u],g=Number(m&&m.price);Number.isFinite(g)&&g>=1&&g<=100&&o.splice(u,1)}const n=[...new Set(o.map(u=>u.category).filter(Boolean))].sort((u,m)=>u.localeCompare(m)),d=[...new Set(o.flatMap(u=>Array.isArray(u.tags)?u.tags:[]).filter(Boolean))].sort((u,m)=>u.localeCompare(m));window._productFilters||(window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"}),window._productSelection||(window._productSelection=new Set),e.innerHTML=`
      <div class="space-y-5 fade-in">

        <div class="glass-soft border border-blue-500/20 rounded-2xl p-5 sm:p-6">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-blue-300/80">Product Showroom</p>
              <h2 class="text-3xl font-black text-white mt-1">Professional Product Showroom</h2>
              <p class="text-sm text-gray-400 mt-1">Unlimited products, smooth infinite scrolling layout, and clean auto-aligned cards.</p>
            </div>
            <div class="flex items-center gap-2.5 flex-wrap">
              <button onclick="showAddPropertyModal()" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition shadow-xl shadow-emerald-700/25" title="Add a real estate property with a multi-country interactive map">
                <i data-lucide="home" class="w-5 h-5"></i> Add Real Estate
              </button>
              <button onclick="showAddVehicleModal()" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition shadow-xl shadow-orange-700/25" title="Add a car, truck, bus, motorhome, motorcycle or boat">
                <i data-lucide="car-front" class="w-5 h-5"></i> Add Cars &amp; Trucks
              </button>
              <button onclick="showAddProductStep1()" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-black px-6 py-3.5 rounded-2xl transition shadow-xl shadow-blue-700/25">
                <i data-lucide="plus" class="w-5 h-5"></i> Add Product
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3">
          ${M("Total Products",o.length,"package","blue")}
          ${M("Published",o.filter(u=>!!u.is_active).length,"badge-check","emerald")}
          ${M("Draft / Hidden",o.filter(u=>!u.is_active).length,"file-clock","amber")}
          ${M("Featured",o.filter(u=>!!u.is_featured).length,"sparkles","violet")}
          ${M("Inventory Units",o.reduce((u,m)=>u+(parseInt(m.stock_quantity,10)||0),0),"boxes","blue")}
          ${M("Avg Price",`$${Math.round(o.reduce((u,m)=>u+(parseFloat(m.price)||0),0)/Math.max(o.length,1)).toLocaleString()}`,"dollar-sign","blue")}
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 sm:p-4 space-y-3">
          <div class="relative">
            <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300"></i>
            <input id="prod-search" type="search" class="input-field pl-12 py-4 pr-28 text-base font-semibold !rounded-2xl border-blue-500/40 shadow-inner shadow-blue-900/20 focus:border-blue-400"
              placeholder="Search any product by name, SKU, brand, category, tag..." value="${l(window._productFilters.search||"")}"
              oninput="filterProducts()" onkeydown="productSearchKeydown(event)">
            <span class="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">Press Enter to open</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-2.5">
            <select id="prod-cat-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Categories</option>
              ${(n.length?n:Ka).map(u=>`<option value="${l(u)}" ${(window._productFilters.category||"")===u?"selected":""}>${l(u)}</option>`).join("")}
            </select>
            <select id="prod-tag-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Tags</option>
              ${d.map(u=>`<option value="${l(u)}" ${(window._productFilters.tag||"")===u?"selected":""}>${l(u)}</option>`).join("")}
            </select>
            <select id="prod-status-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Status</option>
              <option value="active" ${(window._productFilters.status||"")==="active"?"selected":""}>Published</option>
              <option value="inactive" ${(window._productFilters.status||"")==="inactive"?"selected":""}>Unpublished</option>
              <option value="archived" ${(window._productFilters.status||"")==="archived"?"selected":""}>Archived</option>
            </select>
            <select id="prod-featured-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Visibility</option>
              <option value="featured" ${(window._productFilters.featured||"")==="featured"?"selected":""}>Featured</option>
              <option value="standard" ${(window._productFilters.featured||"")==="standard"?"selected":""}>Standard</option>
            </select>
            <select id="prod-sort" class="input-field" onchange="filterProducts()">
              <option value="newest" ${(window._productFilters.sort||"")==="newest"?"selected":""}>Newest</option>
              <option value="oldest" ${(window._productFilters.sort||"")==="oldest"?"selected":""}>Oldest</option>
              <option value="price-high" ${(window._productFilters.sort||"")==="price-high"?"selected":""}>Price: High to Low</option>
              <option value="price-low" ${(window._productFilters.sort||"")==="price-low"?"selected":""}>Price: Low to High</option>
              <option value="sales-high" ${(window._productFilters.sort||"")==="sales-high"?"selected":""}>Sales: High to Low</option>
              <option value="views-high" ${(window._productFilters.sort||"")==="views-high"?"selected":""}>Views: High to Low</option>
            </select>
          </div>

<div class="flex flex-wrap items-center gap-2.5">
            <button onclick="toggleSelectAllProducts(true)" class="btn-press px-4 py-2.5 text-sm font-bold rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-300 hover:bg-blue-500/15 transition">Select Visible</button>
            <button onclick="toggleSelectAllProducts(false)" class="btn-press px-4 py-2.5 text-sm font-bold rounded-xl border border-gray-500/20 bg-gray-500/10 text-gray-300 hover:bg-gray-500/15 transition">Clear Selection</button>
            <button onclick="resetProductFilters()" class="btn-press px-4 py-2.5 text-sm font-bold rounded-xl border border-gray-500/20 bg-transparent text-gray-300 hover:bg-white/5 transition">Reset Filters</button>
            <div class="ml-auto flex items-center gap-1.5">
              <span class="text-sm text-gray-400">View:</span>
<button onclick="setProductView('card')" id="view-card-btn" class="view-toggle ${!window._productView||window._productView==="card"?"active":""}"><i data-lucide="layout-grid" class="w-4 h-4"></i> Cards</button>
              <button onclick="setProductView('table')" id="view-table-btn" class="view-toggle ${window._productView==="table"?"active":""}"><i data-lucide="table" class="w-4 h-4"></i> Table</button>
            </div>
            <span class="text-sm text-gray-400 ml-2"><span id="products-result-count">0</span> shown</span>
          </div>
        </div>

        <div id="bulk-actions" class="hidden items-center gap-2.5 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
          <span id="bulk-count" class="text-sm font-bold text-blue-300">0 selected</span>
          <button onclick="bulkToggleActive(true)" class="btn-press text-sm font-bold text-emerald-300 hover:text-emerald-200 px-4 py-2.5 rounded-xl bg-emerald-500/15 transition">Publish</button>
          <button onclick="bulkToggleActive(false)" class="btn-press text-sm font-bold text-amber-300 hover:text-amber-200 px-4 py-2.5 rounded-xl bg-amber-500/15 transition">Unpublish</button>
          <button onclick="bulkDuplicateProducts()" class="btn-press text-sm font-bold text-gray-200 hover:text-white px-4 py-2.5 rounded-xl bg-white/10 transition">Duplicate</button>
          <button onclick="bulkArchive()" class="btn-press text-sm font-bold text-red-300 hover:text-red-200 px-4 py-2.5 rounded-xl bg-red-500/15 transition">Archive</button>
          <button onclick="bulkDeleteProducts()" class="btn-press text-sm font-bold text-red-200 hover:text-white px-4 py-2.5 rounded-xl bg-red-600/20 transition">Delete</button>
        </div>

<div class="space-y-4">
          <div id="products-grid" class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 items-stretch"></div>
          <div id="products-more" class="flex justify-center pt-1"></div>
          <div id="products-table-wrap" class="hidden overflow-x-auto scrollbar-thin rounded-2xl border border-blue-500/15">
            <table class="w-full dt">
              <thead><tr>
                <th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th><th>Date</th><th>Actions</th>
              </tr></thead>
              <tbody id="products-table-body"></tbody>
            </table>
          </div>
          <div id="products-empty" class="hidden">${pe("package-search","No matching products","Try different filters or add a new product.",'<button onclick="showAddProductStep1()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl">Add Product</button>')}</div>
          <div class="text-center text-[11px] text-gray-500 py-2">Scroll to explore all products. Layout auto-rearranges as products are added, edited, moved, or removed.</div>
        </div>
      </div>`,window._productsData=o,window._productsCardLimit=60,Va(o),filterProducts(),updateBulkBar(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${l(t.message)}</div>`)}}function le(e){const t=parseFloat(e);return Number.isFinite(t)?t:0}function Me(e){return Array.isArray(e.tags)?e.tags.filter(Boolean):[]}function fo(e){const t=le(e.price),a=parseFloat(e.real_price);if(Number.isFinite(a)&&a>0&&a>t)return`${Math.round((1-t/a)*100)}% OFF`;const i=parseFloat(e.discount_percent??e.discount??0);return Number.isFinite(i)&&i>0?`${Math.round(i)}% OFF`:"No discount"}function ho(e){const t=le(e.price),a=parseFloat(e.real_price),i=`$${t.toLocaleString()}`;return Number.isFinite(a)&&a>0&&a>t?`<span class="block text-xs text-gray-400 price-strike line-through">$${a.toLocaleString()}</span><span class="text-emerald-300 font-black">$${t.toLocaleString()}</span>`:i}function rt(e){return e.is_archived||e.availability_status==="Archived"?"archived":e.is_active?"active":"inactive"}function Ct(e){return parseInt(e.views??e.view_count??0,10)||0}function At(e){return parseInt(e.sales??e.sales_count??0,10)||0}function lt(e){return e.sku||e.property_id||"N/A"}function nt(e){const a=(Array.isArray(e&&e.images)?e.images:[]).find(o=>typeof o=="string"&&T(o));if(a)return a;const i=e&&(e.video||e.video_url);return typeof i=="string"&&T(i)?i:""}function dt(e,t){return e?`<video src="${l(e)}" class="${t}" muted playsinline preload="metadata"></video>`:""}function ye(e,t){return`<div class="${e} flex items-center justify-center text-gray-600"><i data-lucide="video-off" class="w-6 h-6"></i></div>`}function vo(e){const t=nt(e),a=Me(e),i=rt(e),o=window._productSelection?.has(e.property_id),s=O(i==="archived"?"inactive":i==="active"?"active":"inactive"),r=X(e.created_at),n=!!e.is_featured,d=(Array.isArray(e.images)?e.images:[]).filter(T).length,u=t?dt(t,"w-full h-full object-cover"):ye("w-full h-full"),m=e.is_active?`unpublishProduct('${e.property_id}')`:`publishProduct('${e.property_id}')`,g=e.is_active?"Unpublish":"Publish",x=e.is_active?"bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25";return`<article data-id="${e.property_id}" data-cat="${l(e.category||"")}" data-status="${i}" data-featured="${n?"featured":"standard"}" onclick="editProduct('${e.property_id}')" title="Tap anywhere to edit this product" class="prod-card glass-soft border ${o?"border-blue-400/60":"border-blue-500/15"} rounded-3xl p-5 flex flex-col gap-4 transition hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer select-none active:scale-[.99]">
    <div class="flex items-start gap-4">
      <input type="checkbox" class="prod-check accent-blue-500 w-5 h-5 mt-1 shrink-0" value="${e.property_id}" ${o?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${e.property_id}', this.checked)">
      <div class="relative w-24 h-24 rounded-2xl overflow-hidden border border-blue-500/20 shrink-0 bg-[#0b1124]">
        ${u}${n?'<span class="absolute top-1.5 left-1.5 text-[10px] font-black px-2 py-0.5 rounded-lg bg-amber-400 text-[#111827]">Featured</span>':""}
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="text-lg font-black text-white leading-snug line-clamp-2">${l(e.title||"Untitled Product")}</h3>
        <p class="text-xs text-gray-500 font-mono mt-1">SKU: ${l(lt(e))}</p>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          ${s}
          <span class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20">${l(e.category||"Uncategorized")}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2.5 text-sm">
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5">
        <span class="text-gray-400 text-xs">Price</span>
        <p class="text-emerald-300 font-black text-base">
          ${ho(e)}
        </p>
      </div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Discount</span><p class="text-amber-300 font-bold">${l(fo(e))}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Stock</span><p class="text-gray-200 font-bold">${e.stock_quantity!=null?l(e.stock_quantity):"Unlimited"}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Brand</span><p class="text-gray-200 font-bold truncate">${l(e.brand||"N/A")}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Views</span><p class="text-blue-300 font-bold">${Ct(e).toLocaleString()}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Sales</span><p class="text-cyan-300 font-bold">${At(e).toLocaleString()}</p></div>
    </div>

    <div class="flex items-center justify-between text-xs text-gray-500 border-t border-blue-500/10 pt-3">
      <span>Date Added: ${l(r)}</span>
      <span>${d} video${d===1?"":"s"}</span>
    </div>

    <div class="flex flex-wrap gap-2 mt-auto">
      <button onclick="event.stopPropagation();editProduct('${e.property_id}')" class="btn-press flex-1 min-w-[9.5rem] px-5 py-3.5 rounded-2xl text-sm font-black bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition shadow-lg shadow-blue-600/15">Edit Product</button>
      <button onclick="event.stopPropagation();quickEditProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-indigo-500/15 text-indigo-200 hover:bg-indigo-500/25 transition">Quick Edit</button>
      <button onclick="event.stopPropagation();previewProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-sky-500/15 text-sky-200 hover:bg-sky-500/25 transition">Preview</button>
      <button onclick="event.stopPropagation();${m}" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold ${x} transition">${g}</button>
      <button onclick="event.stopPropagation();duplicateProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-white/10 text-gray-200 hover:bg-white/20 transition">Duplicate</button>
      <button onclick="event.stopPropagation();archiveProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-red-500/15 text-red-200 hover:bg-red-500/25 transition">Archive</button>
      <button onclick="event.stopPropagation();shareProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-violet-500/15 text-violet-200 hover:bg-violet-500/25 transition">Share</button>
      <button onclick="event.stopPropagation();deleteProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-rose-600/15 text-rose-200 hover:bg-rose-600/25 transition">Delete</button>
      <button onclick="event.stopPropagation();openProductMoreActions('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-gray-600/20 text-gray-200 hover:bg-gray-600/35 transition">More</button>
    </div>

    ${a.length?`<div class="flex flex-wrap gap-1.5">${a.slice(0,6).map(h=>`<span class="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200">${l(h)}</span>`).join("")}</div>`:'<div class="text-xs text-gray-500">No tags</div>'}
  </article>`}function Ha(e,t){const a=[...e],i=o=>new Date(o||0).getTime()||0;return t==="oldest"?a.sort((o,s)=>i(o.created_at)-i(s.created_at)):t==="price-high"?a.sort((o,s)=>le(s.price)-le(o.price)):t==="price-low"?a.sort((o,s)=>le(o.price)-le(s.price)):t==="sales-high"?a.sort((o,s)=>At(s)-At(o)):t==="views-high"?a.sort((o,s)=>Ct(s)-Ct(o)):a.sort((o,s)=>i(s.created_at)-i(o.created_at)),a}function Va(e){const t=document.getElementById("products-grid"),a=document.getElementById("products-empty"),i=document.getElementById("products-result-count");if(!t)return;const o=window._productsCardLimit||60,s=e.slice(0,o);t.innerHTML=s.map(vo).join(""),i&&(i.textContent=String(e.length));const r=document.getElementById("products-more");if(r){const n=e.length-s.length;n>0?r.innerHTML=`<button onclick="loadMoreProducts()" class="btn-press px-8 py-4 rounded-2xl text-base font-black bg-blue-500/15 text-blue-200 hover:bg-blue-500/25 border border-blue-500/25 transition">Show ${Math.min(60,n)} more (${n} left)</button>`:r.innerHTML=e.length>60?'<span class="text-sm text-gray-500">All products shown</span>':""}a&&a.classList.toggle("hidden",e.length>0),updateBulkBar(),window.lucide&&lucide.createIcons()}window.loadMoreProducts=function(){window._productsCardLimit=(window._productsCardLimit||60)+60,filterProducts(!0)};function Ga(e){const t=document.getElementById("products-table-body"),a=document.getElementById("products-result-count");t&&(t.innerHTML=e.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-10">No products found.</td></tr>':e.map(i=>{const o=nt(i),s=o?dt(o,"w-9 h-9 rounded-lg object-cover border border-blue-500/20 shrink-0"):ye("w-9 h-9 rounded-lg border border-blue-500/20 shrink-0"),r=rt(i),n=window._productSelection?.has(i.property_id),d=i.is_active?`unpublishProduct('${i.property_id}')`:`publishProduct('${i.property_id}')`,u=i.is_active?"Unpublish":"Publish";return`<tr class="prod-table-row" data-id="${i.property_id}" style="cursor:pointer">
          <td>
            <div class="flex items-center gap-2.5" onclick="editProduct('${i.property_id}')">
              <input type="checkbox" class="prod-check accent-blue-500" value="${i.property_id}" ${n?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${i.property_id}', this.checked)">
              ${s}
              <div class="min-w-0">
                <p class="text-xs font-bold text-white truncate max-w-[160px]">${l(i.title||"Untitled Product")}</p>
                <p class="text-[10px] font-mono text-gray-500">${l(lt(i))}</p>
              </div>
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${l(i.category||"Uncategorized")}</span></td>
          <td>
            <div class="text-xs">
              ${(()=>{const m=le(i.price),g=parseFloat(i.real_price);return Number.isFinite(g)&&g>0&&g>m?`<span class="text-[10px] text-gray-500 price-strike line-through block">$${g.toLocaleString()}</span><span class="font-bold text-emerald-400">$${m.toLocaleString()}</span>`:`<span class="font-bold text-emerald-400">$${m.toLocaleString()}</span>`})()}
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${i.stock_quantity!=null?l(i.stock_quantity):"Unlimited"}</span></td>
          <td>${O(r==="archived"?"inactive":r==="active"?"active":"inactive")}</td>
          <td><span class="text-xs text-gray-500">${X(i.created_at)}</span></td>
          <td>
            <div class="flex gap-1">
              <button onclick="editProduct('${i.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
              <button onclick="quickEditProduct('${i.property_id}')" class="btn-press p-1.5 text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition" title="Quick Edit"><i data-lucide="sliders-horizontal" class="w-3.5 h-3.5"></i></button>
              <button onclick="${d}" class="btn-press p-1.5 ${i.is_active?"text-amber-400 hover:bg-amber-500/10":"text-emerald-400 hover:bg-emerald-500/10"} rounded-lg transition" title="${u}"><i data-lucide="${i.is_active?"eye-off":"eye"}" class="w-3.5 h-3.5"></i></button>
              <button onclick="archiveProduct('${i.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Archive"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
            </div>
          </td>
        </tr>`}).join(""),a&&(a.textContent=String(e.length)),window.lucide&&lucide.createIcons())}window.setProductView=function(e){window._productView=e==="table"?"table":"card";const t=document.getElementById("products-grid"),a=document.getElementById("products-table-wrap"),i=document.getElementById("view-card-btn"),o=document.getElementById("view-table-btn"),s=document.getElementById("products-empty"),r=window._productsData||[];t&&t.classList.toggle("hidden",e==="table"),a&&(a.classList.toggle("hidden",e!=="table"),e==="table"&&Ga(r)),i&&i.classList.toggle("active",e!=="table"),o&&o.classList.toggle("active",e==="table"),s&&s.classList.toggle("hidden",r.length>0)};window.filterProducts=function(e){const t=window._productFilters||{};t.search=(document.getElementById("prod-search")?.value||"").trim().toLowerCase(),t.category=document.getElementById("prod-cat-filter")?.value||"",t.tag=document.getElementById("prod-tag-filter")?.value||"",t.status=document.getElementById("prod-status-filter")?.value||"",t.featured=document.getElementById("prod-featured-filter")?.value||"",t.sort=document.getElementById("prod-sort")?.value||"newest",window._productFilters=t;const a=(window._productsData||[]).filter(o=>{const s=[o.title,o.brand,o.category,lt(o),Me(o).join(" "),o.description].join(" ").toLowerCase();return!(t.search&&!s.includes(t.search)||t.category&&(o.category||"")!==t.category||t.tag&&!Me(o).includes(t.tag)||t.status&&rt(o)!==t.status||t.featured&&t.featured==="featured"!=!!o.is_featured)}),i=Ha(a,t.sort);e||(window._productsCardLimit=60),Va(i),window._productView==="table"&&Ga(i)};window.productSearchKeydown=function(e){if(e.key!=="Enter")return;const t=(document.getElementById("prod-search")?.value||"").trim().toLowerCase();if(!t)return;const a=window._productFilters||{},i=(window._productsData||[]).filter(s=>!(![s.title,s.brand,s.category,lt(s),Me(s).join(" "),s.description].join(" ").toLowerCase().includes(t)||a.category&&(s.category||"")!==a.category||a.tag&&!Me(s).includes(a.tag)||a.status&&rt(s)!==a.status||a.featured&&a.featured==="featured"!=!!s.is_featured)),o=Ha(i,a.sort||"newest")[0];o?editProduct(o.property_id):p("No product matched that search","error")};window.resetProductFilters=function(){window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"},["prod-search","prod-cat-filter","prod-tag-filter","prod-status-filter","prod-featured-filter","prod-sort"].forEach(t=>{const a=document.getElementById(t);a&&(t==="prod-sort"?a.value="newest":a.value="")}),filterProducts()};window.toggleProductSelection=function(e,t){window._productSelection||(window._productSelection=new Set),t?window._productSelection.add(e):window._productSelection.delete(e),updateBulkBar()};window.toggleSelectAll=function(e,t){document.querySelectorAll("."+t).forEach(a=>{a.checked=e.checked;const i=a.value;window._productSelection||(window._productSelection=new Set),e.checked?window._productSelection.add(i):window._productSelection.delete(i)}),updateBulkBar()};window.toggleSelectAllProducts=function(e){document.querySelectorAll(".prod-check").forEach(t=>{t.checked=!!e,window._productSelection||(window._productSelection=new Set),e?window._productSelection.add(t.value):window._productSelection.delete(t.value)}),updateBulkBar()};window.updateBulkBar=function(){const e=window._productSelection?window._productSelection.size:0,t=document.getElementById("bulk-actions"),a=document.getElementById("bulk-count");t&&(t.classList.toggle("hidden",e===0),e>0&&t.classList.add("flex")),a&&(a.textContent=`${e} selected`)};function ct(){return window._productSelection?[...window._productSelection]:[]}function W(e){const t=String(e?.message||e?.code||"").toLowerCase();return t.includes("row-level security")||t.includes("permission denied")||t.includes("permission denied for table")||t.includes("new row violates row-level security")||t.includes("not permitted")||t.includes("rls policy")}function Wa(e,t,a){return e&&W(e)?(p(`âš ï¸ ${a} blocked: Your account is signed in but the database admin role is not active. Re-run the admin permission migration, or contact the owner.`,"error"),!0):e?(t&&t(),p(`${a} saved locally (DB unavailable): ${e.message||"unknown error"}`,"info"),!0):!1}function kt(e,t){if(!e)return`${t} failed for an unknown reason. Please try again.`;const a=String(e.message||""),i=e.code||"";return W(e)?`${t} was BLOCKED: your account is signed in but the database admin role is not active. Re-run the admin permission migration (or contact the owner), then press Publish again.`:String(i)==="401"||/jwt|token|not authenticated|unauthorized|invalid api key/i.test(a)?`${t} failed: your sign-in session expired or is invalid. Please sign out and sign back in, then try again. Your changes are still in the form.`:String(i)==="23505"||/duplicate key|unique constraint/i.test(a)?`${t} failed: a duplicate-record conflict occurred in the database. Refresh the page and try again.`:String(i)==="23503"||/foreign key/i.test(a)?`${t} failed: the database rejected a reference (foreign key). Refresh the page, re-open the product and try again.`:String(i)==="42P01"||/column .* does not exist|relation .* does not exist/i.test(a)?`${t} failed: the database schema is out of date. Run the latest database migration, then try again.`:String(i)==="23502"||/null value in column .* violates/i.test(a)?`${t} failed: a required field was rejected by the database. Fill in every required field, then try again.`:/failed to fetch|networkerror|network request|fetch failed|load failed|offline|ERR_NAME|ERR_CONNECTION|timeout/i.test(a)?`${t} failed: no connection to the server. Check your internet connection and press Publish again. Your changes are still in the form.`:String(i)==="42501"||/permission denied|row-level security/i.test(a)?`${t} was BLOCKED by database permissions. Re-run the admin permission migration (or contact the owner), then try again.`:/rate limit|too many requests/i.test(a)?`${t} failed: too many requests were sent at once. Wait a few seconds and press Publish again.`:`${t} failed: ${a||"an unexpected database error occurred"}. Nothing was saved — your changes are still in the form, so you can press Publish again.`}function xo(e){const t=String(e?.title||"").trim();if(!t)return"";const a=e?.price&&typeof e.price=="object"?e.price.price:e?.price,i=Number(a)||0,o=[e?.city,e?.state,e?.country].filter(Boolean).join(", ")||String(e?.product_location||"").trim(),s=String(e?.availability_status||"").trim()||"In Stock";let r=t;if(i>0)try{r+=` for ${i.toLocaleString("en-US",{style:"currency",currency:e?.currency||"USD",maximumFractionDigits:0})}`}catch{r+=` for $${i.toLocaleString("en-US")}`}r+=` — ${s}.`,o&&(r+=` Located in ${o}.`);const n=String(e?.description||"").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();return n&&(r+=` ${n}`),r.length>235?r.slice(0,235).replace(/\s+\S*$/,"")+"…":r}async function la(e){try{let{data:{session:i}}=await c.auth.getSession();if(!i){const{data:r}=await c.auth.getSession();i=r?.session}if(!i)return{error:new Error("Your sign-in session has expired. Please sign out and sign back in, then press Publish again.")};const{data:{user:o},error:s}=await c.auth.getUser();if(s||!o)return{error:new Error("Your sign-in session is invalid. Please sign out and sign back in, then press Publish again.")}}catch(i){return console.error("[safePublishShowroom] Auth check failed:",i),{error:new Error("Could not verify your sign-in status. Check your internet connection and try again.")}}String(e?.meta_description||"").trim()||(e.meta_description=xo(e));const t={...e||{}};for(const i of["created_at","updated_at","published_at"]){const o=t[i];if(o==null||o===""){delete t[i];continue}if(typeof o=="string"){const s=new Date(o);t[i]=Number.isNaN(s.getTime())?new Date().toISOString():s.toISOString()}else o instanceof Date&&!Number.isNaN(o.getTime())?t[i]=o.toISOString():delete t[i]}const a={...e,...t,updated_at:new Date().toISOString()};if(a.property_id){const{error:i}=await c.from("showroom_listings").upsert(a,{onConflict:"property_id"});if(!i)return{error:null};console.warn("[safePublishShowroom] Direct upsert failed, trying RPC fallback:",i?.message||i)}else{const{error:i}=await c.from("showroom_listings").insert(a);if(!i)return{error:null};console.warn("[safePublishShowroom] Direct insert failed, trying RPC fallback:",i?.message||i)}try{const i={...a};delete i.id;const{data:o,error:s}=await c.rpc("publish_showroom_upsert",{p_data:[i]});return s?(console.error("[safePublishShowroom] RPC fallback also failed:",s),{error:new Error(`Database write failed: ${s.message||"unknown error"}. Your changes are preserved in the form — please try again.`)}):(console.log("[safePublishShowroom] RPC fallback succeeded, rows affected:",o),{error:null})}catch(i){return console.error("[safePublishShowroom] RPC exception:",i),{error:new Error(`Database write failed: ${i.message||"network error"}. Your changes are preserved in the form — please try again.`)}}}window.bulkToggleActive=async function(e){const t=ct();if(!t.length)return;const a=await Promise.all(t.map(s=>{const r=oe((window._productsData||[]).find(n=>n.property_id===s));return c.from("showroom_listings").upsert({...r,property_id:s,is_active:e},{onConflict:"property_id"})}));if(a.some(s=>s.error&&W(s.error))){p(`âš ï¸ ${t.length} products NOT ${e?"published":"unpublished"}: database admin role blocked the write. Re-run the admin permission migration.`,"error"),window._productSelection=new Set,D();return}const o=a.filter(s=>s.error).length;p(`${t.length-o}/${t.length} products ${e?"published":"unpublished"}${o?` (${o} failed: ${a.find(s=>s.error)?.error?.message||"error"})`:""}`,o?"error":"success"),window._productSelection=new Set,D()};window.bulkDuplicateProducts=async function(){const e=ct();if(e.length){for(const t of e)await duplicateProduct(t,!0);p(`${e.length} products duplicated`),window._productSelection=new Set,D()}};window.bulkArchive=async function(){const e=ct();if(!e.length||!confirm(`Archive ${e.length} products? They will be hidden but not deleted.`))return;const t=await Promise.all(e.map(o=>c.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",o)));if(t.some(o=>o.error&&W(o.error))){p("âš ï¸ Archive blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,D();return}const i=t.filter(o=>o.error).length;p(`${e.length-i}/${e.length} products archived${i?` (${i} failed)`:""}`,i?"error":"success"),window._productSelection=new Set,D()};window.bulkDeleteProducts=async function(){const e=ct();if(!e.length||!confirm(`Delete ${e.length} products permanently? This action cannot be undone.`))return;const t=await Promise.all(e.map(o=>c.from("showroom_listings").delete().eq("property_id",o)));if(t.some(o=>o.error&&W(o.error))){p("âš ï¸ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,D();return}const i=t.filter(o=>o.error).length;p(`${e.length-i}/${e.length} products deleted${i?` (${i} failed)`:""}`,i?"error":"success"),window._productSelection=new Set,D()};window.previewProduct=async function(e){const t=await c.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(i=>i.property_id===e)||t.data;if(!a)return p("Product not found","error");U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Product Live Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="space-y-2">
            ${(()=>{const i=(a.images||[]).filter(T).slice(0,8),o=i[0]||"",s=o?`<video src="${l(o)}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" muted playsinline preload="metadata"></video>`:ye("w-full h-64 rounded-xl border border-blue-500/20"),r=i.map((n,d)=>d===0?`<video src="${l(n)}" class="w-12 h-12 rounded-lg object-cover border border-blue-500/20 ring-2 ring-blue-400" muted playsinline preload="metadata"></video>`:`<video src="${l(n)}" class="w-12 h-12 rounded-lg object-cover border border-blue-500/20" muted playsinline preload="metadata"></video>`).join("");return`${s}<div class="flex flex-wrap gap-2">${r}</div>`})()}
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-black text-white">${l(a.title||"Untitled Product")}</h4>
            <div class="flex items-center gap-2">${O(a.is_active?"active":"inactive")}${a.is_featured?'<span class="badge bg-amber-500/15 text-amber-200 border-amber-500/30">Featured</span>':""}</div>
            <p class="text-xs text-gray-400">${l(a.description||"No description")}</p>
            <div class="grid grid-cols-2 gap-2 text-xs mt-2">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">$${le(a.price).toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${a.stock_quantity!=null?l(a.stock_quantity):"Unlimited"}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${l(a.brand||"N/A")}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Category</span><p class="text-gray-200 font-bold">${l(a.category||"N/A")}</p></div>
            </div>
            <div class="pt-2 flex gap-2">
              <button onclick="editProduct('${a.property_id}');closeModal();" class="btn-press px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl">Edit</button>
              <button onclick="shareProduct('${a.property_id}')" class="btn-press px-3 py-2 bg-violet-600/70 hover:bg-violet-500 text-white text-xs font-bold rounded-xl">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.quickEditProduct=async function(e){const t=await c.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(o=>o.property_id===e)||t.data;if(!a)return p("Product not found","error");const i=(Array.isArray(a.images)?a.images:[]).filter(T);U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-black text-white">Quick Edit Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">Back</button>
        </div>
        <form onsubmit="saveQuickEditProduct(event,'${a.property_id}')" class="space-y-4">
          <div><label class="lbl">Title</label><input name="title" class="input-field" value="${l(a.title||"")}"></div>
          <div class="grid grid-cols-2 gap-3">
            <div><label class="lbl">Real Price</label><input type="number" step="0.01" name="real_price" class="input-field" value="${l(a.real_price??a.specifications?.real_price??"")}" placeholder="Original price (crossed out)"></div>
            <div><label class="lbl">Discount Price</label><input type="number" step="0.01" name="price" class="input-field" value="${l(a.price||0)}" placeholder="Price customers pay"></div>
          </div>
          <div><label class="lbl">Availability</label><select name="availability_status" class="input-field">${["In Stock","Out of Stock","Pre-order","Limited Stock","Archived"].map(o=>`<option value="${o}" ${a.availability_status===o?"selected":""}>${o}</option>`).join("")}</select></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Featured</span><input type="checkbox" name="is_featured" ${a.is_featured?"checked":""} class="accent-blue-500 w-5 h-5"></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Published</span><input type="checkbox" name="is_active" ${a.is_active?"checked":""} class="accent-blue-500 w-5 h-5"></div>
          <div>
            <label class="lbl">Gallery Videos (up to 24)</label>
            <div id="drop-zone" class="drop-zone" onclick="pickMediaForForm('img-upload')">
              <i data-lucide="image-plus" class="w-10 h-10 text-blue-400 mx-auto mb-2"></i>
              <p class="text-base font-bold text-gray-300">Tap to add videos (up to 24)</p>
              <p class="text-sm text-gray-500 mt-1">MP4, WebM. First video is the cover.</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="video/mp4,video/webm,video/*" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${i.map((o,s)=>fe(o,s)).join("")}
            </div>
            <div id="image-url-inputs">${i.map((o,s)=>`<input type="hidden" name="images" id="img-url-${s}" value="${l(o)}">`).join("")}</div>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
          </div>
          <button type="submit" class="btn-press w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-base font-bold">Save Quick Edit</button>
        </form>
      </div>
    </div>`),ut(),pt(),Pe(),Ee(),window.lucide&&lucide.createIcons()};window.saveQuickEditProduct=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=[...document.querySelectorAll("#image-preview .img-thumb")].map(m=>m.dataset.url||(m.querySelector("video")?m.querySelector("video").getAttribute("src"):"")).filter(m=>m&&!String(m).startsWith("blob:")&&T(m)),o={title:a.get("title")||"Untitled Product",price:Math.max(V,Math.min(J,parseFloat(a.get("price"))||0)),stock_quantity:a.get("stock_quantity")===""?null:parseInt(a.get("stock_quantity"),10),availability_status:a.get("availability_status")||"In Stock",is_featured:a.get("is_featured")==="on",is_active:a.get("is_active")==="on"||i.length>=24,images:i},s=String(a.get("real_price")||"").trim(),r=s===""?null:parseFloat(s);if(r!=null&&!Number.isFinite(r)){p("Real Price must be a number.","error");return}const n=oe((window._productsData||[]).find(m=>m.property_id===t)),d=n.specifications&&typeof n.specifications=="object"?n.specifications:{};o.specifications={...d,real_price:r!=null&&r>0?Math.round(r):null};const{error:u}=await c.from("showroom_listings").upsert({...n,...o,property_id:t},{onConflict:"property_id"});if(u){if(W(u)){p("âš ï¸ Save blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),z(),D();return}$t(t,o),p("Quick edit saved locally","info")}else p(o.is_active?"Saved & published â€” your showroom shows it now":"Quick edit saved (draft)");z(),D()};window.publishProduct=function(e){return toggleProductActive(e,!0)};window.unpublishProduct=function(e){return toggleProductActive(e,!1)};window.shareProduct=async function(e){const t=`${window.location.origin}/product/${encodeURIComponent(e)}`,a=(window._productsData||[]).find(d=>d.property_id===e)||(window._propertiesData||[]).find(d=>d.property_id===e)||ke(e),i=a&&String(a.title||"").trim()||"Product on Weverse Online Shop",o=a&&Number(a.price||0)>0?`${i} — ${wo(a)}
${t}`:`${i}
${t}`,r=await(async()=>{try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(t),!0}catch{}try{const d=document.createElement("textarea");return d.value=t,d.style.cssText="position:fixed;opacity:0;pointer-events:none",document.body.appendChild(d),d.focus(),d.select(),document.execCommand("copy"),d.remove(),!0}catch{return!1}})();let n=!1;if(navigator.share)try{await navigator.share({title:i,text:o,url:t}),n=!0}catch{}n||p(r?"Product link copied to clipboard":"Product link: "+t)};function wo(e){const t=Number(e&&typeof e.price=="object"?e.price.price:e&&e.price)||0,a=e&&e.currency||"USD";let i;try{i=t.toLocaleString("en-US",{style:"currency",currency:a,maximumFractionDigits:0})}catch{i="$"+t.toLocaleString("en-US")}return e&&e.price_period&&(i+="/"+e.price_period),i}window.deleteProduct=async function(e){if(!confirm("Delete this product permanently? This action cannot be undone."))return;const t=(window._productsData||[]).find(i=>i.property_id===e)||(window._propertiesData||[]).find(i=>i.property_id===e)||ke(e),{error:a}=await c.from("showroom_listings").delete().eq("property_id",e);if(a&&!W(a))return p("Delete failed: "+a.message,"error");fi(e);try{const i=await xa(e,!0);i&&i.error&&W(i.error)?p("âš ï¸ Deleted, but the site-wide hidden list could not be saved: database admin role rejected the write. Re-run the admin permission migration.","error"):p("Product deleted")}catch{p("Product deleted")}t&&t.listing_type==="property"?mt():D()};window.openProductMoreActions=function(e){U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">More Actions</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="grid grid-cols-1 gap-2">
          <button onclick="previewProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Live Preview</button>
          <button onclick="quickEditProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Quick Edit</button>
          <button onclick="duplicateProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Duplicate</button>
          <button onclick="archiveProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-sm font-semibold text-red-200">Archive</button>
        </div>
      </div>
    </div>`)};function _o(){const e=new Date().getHours();return e<12?"morning":e<17?"afternoon":"evening"}function za(e){const t=document.getElementById("chart-revenue");if(!t)return;const a=[],i=new Date;for(let s=5;s>=0;s--){const r=new Date(i.getFullYear(),i.getMonth()-s,1);a.push({label:r.toLocaleString("default",{month:"short"}),month:r.getMonth(),year:r.getFullYear()})}const o=a.map(s=>e.filter(r=>{const n=new Date(r.created_at);return n.getMonth()===s.month&&n.getFullYear()===s.year&&["approved","payment_approved","delivered"].includes(r.status)}).reduce((r,n)=>r+(parseFloat(n.amount)||0),0));new Chart(t,{type:"bar",data:{labels:a.map(s=>s.label),datasets:[{label:"Revenue (USD)",data:o,backgroundColor:"rgba(59,130,246,.6)",borderColor:"rgb(59,130,246)",borderWidth:1,borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"#64748b",callback:s=>"$"+s.toLocaleString()},grid:{color:"rgba(59,130,246,.05)"}},x:{ticks:{color:"#64748b"},grid:{display:!1}}}}})}const Ka=$i.map(e=>e.name),Ya=Si,I={default:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Phones:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"storage",label:"Storage (e.g. 128GB)",type:"text"},{key:"ram",label:"RAM (e.g. 8GB)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],"Computers & Laptops":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"processor",label:"Processor (CPU)",type:"text"},{key:"ram",label:"RAM",type:"text"},{key:"storage",label:"Storage",type:"text"},{key:"display",label:"Display Size",type:"text"},{key:"graphics",label:"Graphics Card",type:"text"},{key:"os",label:"Operating System",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Electronics:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model Number",type:"text"},{key:"color",label:"Color",type:"text"},{key:"voltage",label:"Voltage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Shoes:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Jewelry:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"material",label:"Material (e.g. 14k Gold)",type:"text"},{key:"gemstone",label:"Gemstone",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Watches:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"movement",label:"Movement (Quartz/Automatic)",type:"text"},{key:"case_material",label:"Case Material",type:"text"},{key:"water_resistance",label:"Water Resistance",type:"text"},{key:"color",label:"Dial Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"description",label:"Description",type:"textarea",span:2}],Gaming:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"platform",label:"Platform (PS5, Xbox, PCâ€¦)",type:"text"},{key:"model",label:"Game / Model",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],"Sports & Fitness":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]};["Men's Fashion","Women's Fashion","Fashion"].forEach(e=>I[e]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (T-Shirt, Dressâ€¦)",type:"text"},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]);I["Bags & Accessories"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Handbag, Backpack, Luggageâ€¦)",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"material",label:"Material (e.g. Leather)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];I["Beauty & Skincare"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Serum, Cream, Makeupâ€¦)",type:"text"},{key:"size",label:"Size (ml / g)",type:"text"},{key:"skin_type",label:"Skin Type",type:"text"},{key:"ingredients",label:"Key Ingredients",type:"text"},{key:"color",label:"Color / Shade",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];I["Home & Kitchen"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"type",label:"Type (Appliance, Cookware, Decorâ€¦)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"voltage",label:"Voltage / Power",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];I.Furniture=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Sofa, Table, Chairâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"assembly",label:"Assembly Required",type:"select",options:["","Yes","No"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];I["Garden & Outdoor"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Mower, Grill, Furnitureâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"weatherproof",label:"Weatherproof",type:"select",options:["","Yes","No"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];I["Toys & Games"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model / Set Name",type:"text"},{key:"age_range",label:"Age Range",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];I["Food & Groceries"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Snack, Beverage, Pantryâ€¦)",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"shelf_life",label:"Shelf Life",type:"text"},{key:"storage",label:"Storage Instructions",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","New (Sealed)","Open Box"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];I["Baby & Kids"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Stroller, Clothing, Toyâ€¦)",type:"text"},{key:"age_range",label:"Age Range",type:"text"},{key:"size",label:"Size",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];I["Health & Medical"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Device, Supplement, Careâ€¦)",type:"text"},{key:"size",label:"Size / Quantity",type:"text"},{key:"usage",label:"Usage / Dosage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];I["Books & Education"]=[{key:"title",label:"Title / Book Name",type:"text",required:!0,span:2},{key:"author",label:"Author",type:"text"},{key:"publisher",label:"Publisher",type:"text"},{key:"language",label:"Language",type:"text"},{key:"format",label:"Format (Hardcover, Paperback, E-book)",type:"text"},{key:"isbn",label:"ISBN",type:"text"},{key:"pages",label:"Pages",type:"text"},{key:"edition",label:"Edition",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Like New","Very Good","Good","Fair"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];I["Office & Stationery"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Notebook, Pen, Printerâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"quantity",label:"Quantity / Pack Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];I["Pet Supplies"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Food, Toy, Bed, Collarâ€¦)",type:"text"},{key:"pet_type",label:"Pet Type (Dog, Cat, Birdâ€¦)",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];I["Musical Instruments"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"type",label:"Type (Guitar, Piano, Drumsâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color / Finish",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];I["Cameras & Photography"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"lens",label:"Lens",type:"text"},{key:"sensor",label:"Sensor",type:"text"},{key:"megapixels",label:"Megapixels",type:"text"},{key:"video",label:"Video Recording",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];I["Software & Digital"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand / Developer",type:"text"},{key:"type",label:"Type (Software, App, Licenseâ€¦)",type:"text"},{key:"platform",label:"Platform",type:"text"},{key:"license",label:"License Type",type:"text"},{key:"version",label:"Version",type:"text"},{key:"language",label:"Language",type:"text"},{key:"format",label:"Format",type:"text"},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];I.Services=[{key:"title",label:"Service Title",type:"text",required:!0,span:2},{key:"type",label:"Service Type",type:"text"},{key:"duration",label:"Duration",type:"text"},{key:"location",label:"Location / Coverage",type:"text"},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];I["Social Media Accounts"]=[{key:"title",label:"Account Title",type:"text",required:!0,span:2},{key:"type",label:"Platform (Instagram, TikTokâ€¦)",type:"text"},{key:"followers",label:"Followers",type:"text"},{key:"engagement",label:"Engagement Rate",type:"text"},{key:"niche",label:"Niche",type:"text"},{key:"condition",label:"Status",type:"select",options:["Active","Verified","Suspended"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];Ya.forEach(e=>I[e]=[{key:"title",label:"Vehicle Title",type:"text",required:!0,span:2,placeholder:"e.g. 2023 Toyota Land Cruiser V8 Turbo Diesel"},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"model_year",label:"Model Year",type:"text",placeholder:"e.g. 2023"},{key:"body_type",label:"Body Type",type:"select",options:["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"]},{key:"mileage",label:"Mileage",type:"text",placeholder:"e.g. 15,000 mi or 0 (new)"},{key:"engine",label:"Engine",type:"text",placeholder:"e.g. 4.0L V8 Turbo Diesel"},{key:"horsepower",label:"Horsepower (HP)",type:"text",placeholder:"e.g. 500 HP"},{key:"transmission",label:"Transmission",type:"select",options:["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"]},{key:"drive_type",label:"Drive Type",type:"select",options:["FWD","RWD","AWD","4WD"]},{key:"fuel_type",label:"Fuel Type",type:"select",options:["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"]},{key:"seating_capacity",label:"Seating Capacity",type:"text",placeholder:"e.g. 5 seats"},{key:"doors",label:"Number of Doors",type:"text",placeholder:"e.g. 4"},{key:"safety_features",label:"Safety Features (comma separated)",type:"text",placeholder:"ABS, Airbags, Lane Assist, Traction Controlâ€¦"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}]);for(const e of Object.keys(I))I[e]=I[e].flatMap(t=>t.key!=="price"?[t]:[{key:"real_price",label:"Real Price (USD) â€” crossed out when a discount is active",type:"number",placeholder:"e.g. 250000 â€” original price before discount"},{...t,label:"Discount Price (USD) â€” the price customers pay",placeholder:"e.g. 200000 â€” the price customers actually pay"}]);function Yt(e=""){return je.map(t=>`<option value="${t.code}" ${e===t.code?"selected":""}>${t.flag} ${t.name}</option>`).join("")}function Qa(e="USD"){return Gt.map(t=>`<option value="${t}" ${e===t?"selected":""}>${t}</option>`).join("")}function It(e){return String(e||"").split(",").map(t=>t.trim()).filter(Boolean)}function S(e,t){const a=document.querySelector(`[name="${e}"]`);!a||t==null||(a.value=t)}function Tt(e){const t=document.getElementById(e);t&&(t.min=String(V),t.max=String(J),t.placeholder=`Price (${V} - ${J})`)}function na(e){const t=document.getElementById(`${e}-country_code`),a=document.getElementById(`${e}-country`),i=document.getElementById(`${e}-currency`);if(!t)return;const o=je.find(s=>s.code===t.value);a&&o&&(a.value=o.name),i&&o&&(i.value=Ot(o.code))}function Ye(e,t){const a=document.getElementById(`${e}-image-requirement`),i=document.getElementById(`${e}-required_image_count`);i&&(i.value=t?String(t):""),a&&(t>0?(a.textContent=`This template fits up to ${t} images. Fewer images are perfectly fine â€” you can save and publish anytime.`,a.classList.remove("hidden")):(a.textContent="",a.classList.add("hidden")))}function Bt(e,t="full"){const a=document.getElementById("pf-catalog_template_id")?.value||"",i=document.getElementById("pf-currency")?.value||"USD",o=parseFloat(document.getElementById("pf-price")?.value)||V,s=ka({templateId:a,listingType:"product",category:e,countryCode:"US",currency:i,price:o});if(!s){Ye("pf",Ya.includes(e)?24:0);return}Ye("pf",s.requiredImageCount||0),S("currency",s.currency),S("subcategory",s.subcategory),S("features_text",s.features.join(", ")),S("highlights_text",s.highlights.join(", ")),S("seo_keywords_text",s.seo_keywords.join(", ")),t==="full"?(S("title",s.title),S("description",s.description),S("brand",s.brand||""),S("model",s.model||""),S("color",s.color||""),S("size",s.size||""),S("condition",s.condition||"New")):S("description",s.description)}function Lt(e="full"){const t=document.getElementById("ppf-catalog_template_id")?.value||"",a=document.getElementById("ppf-country_code")?.value||"US",i=document.getElementById("ppf-currency")?.value||"USD",o=parseFloat(document.getElementById("ppf-price")?.value)||V,s=ka({templateId:t,listingType:"property",category:"Real Estate",countryCode:a,currency:i,price:o});if(!s){Ye("ppf",0);return}Ye("ppf",s.requiredImageCount||0),S("country",s.country),S("country_code",s.country_code),S("currency",s.currency),S("subcategory",s.subcategory),S("product_location",s.product_location),S("features_text",s.features.join(", ")),S("highlights_text",s.highlights.join(", ")),S("seo_keywords_text",s.seo_keywords.join(", ")),e==="full"?(S("title",s.title),S("description",s.description),S("property_type",s.property_type||""),S("bedrooms",s.bedrooms??""),S("bathrooms",s.bathrooms??""),S("building_size",s.building_size||""),S("land_size",s.land_size||""),S("furnished",s.furnished||"")):S("description",s.description)}window.applyProductCatalogTemplate=function(e,t="full"){Bt(e,t)};window.applyPropertyCatalogTemplate=function(e="full"){Lt(e)};function ko(e){return I[e]||I.default}function $o(e,t={},a=!1){return ko(e).map(o=>{const s=t[o.key]||"",r=o.span===2?"sm:col-span-2":"",n=!a&&o.required?"required":"",d=o.placeholder||o.label;let u="";if(o.type==="select")u=`<select class="input-field" name="${o.key}" id="pf-${o.key}" ${n}>
        <option value="">Selectâ€¦</option>
        ${o.options.map(m=>`<option value="${m}" ${s===m?"selected":""}>${m}</option>`).join("")}
      </select>`;else if(o.type==="textarea")u=`<textarea class="input-field" name="${o.key}" id="pf-${o.key}" rows="3" placeholder="Write a detailed descriptionâ€¦">${l(s)}</textarea>`;else{const g=["brand","model","color","size","material","platform"].includes(o.key)?`pf-list-${o.key}`:"",h=({brand:["Apple","Samsung","Sony","LG","HP","Dell","Lenovo","Asus","Nike","Adidas","Puma","Gucci","Rolex","Toyota","Mercedes","BMW","Tesla"],model:["Pro","Ultra","Max","SE","Standard","Plus","Series 1","Series 2"],color:["Black","White","Silver","Blue","Red","Green","Gold","Gray","Pink","Brown"],size:["XS","S","M","L","XL","XXL","32","34","36","38","40","42"],material:["Cotton","Leather","Stainless Steel","Aluminum","Wood","Glass","Plastic"],platform:["PS5","Xbox Series X","Nintendo Switch","PC","Android","iOS"]}[o.key]||[]).map(b=>`<option value="${l(b)}"></option>`).join("");u=`<input type="${o.type}" class="input-field" name="${o.key}" id="pf-${o.key}" value="${l(s)}" placeholder="${d}" ${g?`list="${g}"`:""} ${n}>${g?`<datalist id="${g}">${h}</datalist>`:""}`}return`<div class="${r}"><label class="lbl">${o.label}${o.required?a?"":" *":""}</label>${u}</div>`}).join("")}window.showAddProductStep1=function(){U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Add New Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>


        <div class="flex items-center gap-3 mb-3">
          <div class="flex-1 h-px bg-gray-800"></div>
          <span class="text-[11px] font-bold text-gray-500 uppercase tracking-wide">or choose a category manually</span>
          <div class="flex-1 h-px bg-gray-800"></div>
        </div>

        <p class="text-xs text-gray-400 mb-3">Choose the category that best matches your product. The form will show smart fields automatically.</p>
        <div class="relative mb-3">
          <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
          <input id="product-category-search" type="search" class="input-field pl-9" placeholder="Search category..." oninput="filterProductCategoryChoices(this.value)">
        </div>
        <div id="product-category-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-96 overflow-y-auto scrollbar-thin pr-1">
          ${Ka.map(e=>`
            <button data-category="${l(e).toLowerCase()}" onclick="showAddProductStep2('${e.replace(/'/g,"\\'")}')" class="btn-press flex items-center gap-3 p-4 glass-soft border border-blue-500/15 hover:border-blue-500/40 rounded-2xl transition text-left">
              <i data-lucide="tag" class="w-5 h-5 text-blue-400 shrink-0"></i>
              <span class="text-sm font-semibold text-gray-200">${l(e)}</span>
            </button>`).join("")}
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()};window.filterProductCategoryChoices=function(e){const t=String(e||"").trim().toLowerCase();document.querySelectorAll("#product-category-grid [data-category]").forEach(a=>{const i=!t||a.dataset.category.includes(t);a.classList.toggle("hidden",!i)})};window.showAddProductStep2=function(e,t={}){const a=!!t.property_id,i=_a("product",e),o=t.currency||"USD";U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeProductFormModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between gap-3 mb-6">
          <div class="min-w-0">
            <h3 class="text-2xl font-black text-white">${a?"Edit Product":"Add Product"} â€” ${l(e)}</h3>
            <p class="text-sm text-gray-500 mt-1 truncate">${a?`Editing: ${l(t.property_id)}`:"Fill in the product details below"}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${a?'<button type="button" onclick="closeProductFormModal()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Product Manager</button>':'<button type="button" onclick="showAddProductStep1()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5" title="Change category"><i data-lucide="arrow-left" class="w-4 h-4"></i> Category</button>'}
            <button type="button" onclick="closeProductFormModal()" class="btn-press px-4 h-11 flex items-center justify-center rounded-xl text-sm font-bold uppercase tracking-wide text-gray-400 hover:text-white hover:bg-gray-800 transition" title="Close (X) â€” return to Product Manager">
              <i data-lucide="x" class="w-4 h-4 mr-1.5"></i>Back
            </button>
          </div>
        </div>

        <form id="product-form" onsubmit="saveProduct(event,'${l(e)}','${a?t.property_id:""}')" class="space-y-6">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-sm font-bold text-white uppercase tracking-wide">Global Catalog Autofill</p>
                <p class="text-sm text-gray-500 mt-1">Pick a template, country, and currency to auto-build the listing title, description, and metadata.</p>
              </div>
              <button type="button" onclick="applyProductCatalogTemplate('${l(e)}')" class="btn-press px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition">Refresh Template</button>
            </div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Catalog Template</label><select class="input-field" name="catalog_template_id" id="pf-catalog_template_id" onchange="applyProductCatalogTemplate('${l(e)}')"><option value="">Choose a template...</option>${i.map(s=>`<option value="${s.id}">${l(s.label)} - ${l(s.subcategory||s.category)}</option>`).join("")}</select></div>
              <div class="sm:col-span-2"><label class="lbl">Currency</label><select class="input-field" name="currency" id="pf-currency" onchange="applyProductCatalogTemplate('${l(e)}')">${Qa(o)}</select></div>
            </div>
            <p id="pf-image-requirement" class="hidden text-sm text-amber-300"></p>
            <input type="hidden" name="required_image_count" id="pf-required_image_count" value="">
          </div>

          <div id="product-autosave-note" class="hidden p-4 rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-sm text-emerald-200"></div>

          <!-- Step 1: Image Upload -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <label class="lbl !mb-0">Step 1: Upload Product Images or Videos</label>
              <span class="text-sm text-gray-500">Upload one or multiple images before publishing</span>
            </div>
            <div id="drop-zone" class="drop-zone" onclick="pickMediaForForm('img-upload')">
              <i data-lucide="image-plus" class="w-12 h-12 text-blue-400 mx-auto mb-3"></i>
              <p class="text-lg font-bold text-gray-300">Click or drag & drop product videos here</p>
              <p class="text-sm text-gray-500 mt-1">MP4, WebM. First video = cover.</p>
<input type="file" id="img-upload" class="hidden" multiple accept="video/mp4,video/webm,video/*" onclick="event.stopPropagation()" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${(t.images||[]).filter(T).map((s,r)=>fe(s,r)).join("")}
            </div>
            <p class="text-sm text-gray-500 mt-1">Drag to reorder â€¢ âœ• deletes any video (even the main/cover â€” the next video becomes the cover) â€¢ â†» replaces â€¢ Upload up to 24 gallery videos</p>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
            <div id="image-url-inputs">
              ${(t.images||[]).filter(T).map((s,r)=>`<input type="hidden" name="images" id="img-url-${r}" value="${l(s)}">`).join("")}
            </div>
          </div>


          <!-- Step 2: Product Details -->
          <div class="text-sm text-blue-200 font-bold uppercase tracking-wide">Step 2: Product Details</div>
          <div class="form-grid form-grid-2">
            ${$o(e,t,a)}
          </div>

          <div class="form-grid form-grid-2">
            <div class="sm:col-span-2"><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${l(t.subcategory||"")}" placeholder="e.g. Smartphones, SUVs, Model Houses"></div>
            <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${l((t.features||[]).join(", "))}" placeholder="5G connectivity, OLED display, fast charging"></div>
            <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${l((t.highlights||[]).join(", "))}" placeholder="Retail-ready packaging, premium demand, strong presentation"></div>
            <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${l((t.seo_keywords||[]).join(", "))}" placeholder="smartphone, unlocked, global shipping"></div>
          </div>

          <!-- Tags / Badges -->
          <div>
            <label class="lbl">Product Tags / Badges</label>
            <div class="flex flex-wrap gap-2.5">
              ${["New Arrival","Best Seller","Hot Deal","Featured","Limited Stock"].map(s=>`
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="tags" value="${s}" ${(t.tags||[]).includes(s)?"checked":""} class="accent-blue-500 w-5 h-5">
                  <span class="text-sm text-gray-300">${s}</span>
                </label>`).join("")}
            </div>
          </div>

          <!-- Availability -->
          <div class="form-grid form-grid-2">
            <div>
              <label class="lbl">Availability Status</label>
              <select class="input-field" name="availability_status" id="pf-availability_status">
                ${["In Stock","Out of Stock","Pre-order","Limited Stock"].map(s=>`<option value="${s}" ${t.availability_status===s?"selected":""}>${s}</option>`).join("")}
              </select>
            </div>
            <div class="p-4 glass-soft border border-blue-500/15 rounded-2xl">
              <p class="text-sm font-bold text-white">Global Price Range</p>
              <p class="text-sm text-gray-500 mt-1">Allowed price range is ${V} to ${J} in the selected currency.</p>
            </div>
          </div>

          <!-- Featured -->
          <div class="flex items-center justify-between p-4 glass-soft border border-blue-500/15 rounded-2xl">
            <div>
              <p class="text-sm font-bold text-white">Featured Product</p>
              <p class="text-sm text-gray-500">Show in featured sections</p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" name="is_featured" ${t.is_featured?"checked":""}>
              <span class="toggle-slider"></span>
            </label>
          </div>

          <!-- Active -->
          <div class="flex items-center justify-between p-4 glass-soft border border-blue-500/15 rounded-2xl">
            <div>
              <p class="text-sm font-bold text-white">Published / Active</p>
              <p class="text-sm text-gray-500">Visible to customers on the website</p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" name="is_active" ${a?t.is_active?"checked":"":"checked"}>
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4" id="product-review-panel">
            <p class="text-sm font-bold text-white">Quick Review Before Publish</p>
            <div class="text-sm text-gray-400 mt-1" id="product-review-content">Fill in product details to preview your publish summary.</div>
          </div>

          <div class="flex gap-3 pt-2">
            <button type="button" onclick="previewProductDraft()" class="btn-press px-6 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-2xl text-base transition">
              Live Preview
            </button>
            <button type="submit" name="action" value="publish" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 rounded-2xl text-base transition shadow-lg shadow-blue-600/15">
              ${a?"One-Click Publish Changes":"One-Click Publish Product"}
            </button>
            <button type="submit" name="action" value="draft" class="btn-press px-7 bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 rounded-2xl text-base transition">
              Save Draft
            </button>
          </div>
        </form>
      </div>
    </div>`),ut(),pt(),Tt("pf-price"),Tt("pf-real_price"),Bt(e,"pricing"),document.getElementById("pf-price")?.addEventListener("input",()=>Bt(e,"pricing")),To(e,t.property_id||""),window._pfEscapeHandler=s=>{s.key==="Escape"&&closeProductFormModal()},document.addEventListener("keydown",window._pfEscapeHandler)};window.closeProductFormModal=function(){window._pfEscapeHandler&&(document.removeEventListener("keydown",window._pfEscapeHandler),window._pfEscapeHandler=null),window._productPublishInFlight=!1,z(),D()};window.switchProductFormCategory=function(e){const t=document.getElementById("product-form");if(!t)return;const a={},i=new FormData(t);for(const[o,s]of i.entries())o==="images"?(a.images=a.images||[],s&&!String(s).startsWith("blob:")&&a.images.push(String(s))):o==="tags"?(a.tags=a.tags||[],a.tags.push(s)):a[o]=s;a.is_featured=t.querySelector('[name="is_featured"]')?.checked||!1,a.is_active=t.querySelector('[name="is_active"]')?.checked||!1,a.property_id&&String(a.property_id).trim()?showAddProductStep2(e,a):showAddProductStep2(e,{images:a.images||[],...a})};function fe(e,t){const a=$a(e),i=T(e);let o;return a?o='<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-300 select-none"><span class="text-2xl leading-none">📄</span><span class="text-[10px] font-bold mt-1">PDF</span></div>':i?o=`<video src="${l(e)}" muted loop preload="metadata" playsinline class="w-full h-full object-cover" onerror="this.style.display='none'"></video>
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow"><svg class="w-4 h-4 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:o=ye("w-full h-full"),`<div class="img-thumb ${t===0?"cover-img":""}" data-index="${t}" data-url="${l(e)}" title="${t===0?"Cover (main)":(i?"Video ":"Image ")+(t+1)}">
    ${o}
    <button class="rm" onclick="removeImage(${t})" type="button" title="Delete">✕</button>
    <button class="rp" onclick="document.getElementById('rp-input-${t}').click()" type="button" title="Replace">↻</button>
    <input type="file" accept="video/mp4,video/webm,video/*" class="rp-input" id="rp-input-${t}" onchange="replaceImage(${t}, this)">
  </div>`}function ut(){const e=document.getElementById("drop-zone");e&&(e.addEventListener("dragover",t=>{t.preventDefault(),e.classList.add("drag-over")}),e.addEventListener("dragleave",()=>e.classList.remove("drag-over")),e.addEventListener("drop",t=>{t.preventDefault(),e.classList.remove("drag-over"),So(t.dataTransfer.files)}))}function pt(){const e=document.getElementById("image-preview");!e||!window.Sortable||new Sortable(e,{animation:150,onEnd:()=>Pe()})}window.handleImageUpload=async function(e){await Qt(e.target.files)};async function So(e){await Qt(e)}async function Po(e,t,a){const i=new Array(e.length);let o=0;const s=Array.from({length:Math.min(Math.max(t,1),e.length)},async()=>{for(;o<e.length;){const r=o++;try{i[r]=await a(e[r],r)}catch{i[r]=null}}});return await Promise.all(s),i}function Eo(e,t,a,i,o=9e4){return new Promise(s=>{let r=!1;const n=setTimeout(()=>{r||(r=!0,s({error:{message:`Upload timed out after ${Math.round(o/1e3)}s — the network is too slow for this file size.`}}))},o);c.storage.from(e).upload(t,a,i).then(d=>{r||(r=!0,clearTimeout(n),s(d))})})}async function da(e,t=1920,a=.82){const i=URL.createObjectURL(e);try{const o=new Image;await new Promise((g,x)=>{o.onload=g,o.onerror=x,o.src=i});const s=Math.min(1,t/Math.max(o.width,o.height)),r=Math.max(1,Math.round(o.width*s)),n=Math.max(1,Math.round(o.height*s)),d=document.createElement("canvas");d.width=r,d.height=n,d.getContext("2d").drawImage(o,0,0,r,n);const u=await new Promise(g=>d.toBlob(g,"image/jpeg",a));if(!u||!u.size)return null;const m=(e.name||"photo.jpg").replace(/\.[^.]+$/i,"")+".jpg";return new File([u],m,{type:"image/jpeg"})}catch{return null}finally{URL.revokeObjectURL(i)}}async function Qt(e){const t=document.getElementById("image-preview");if(!t)return;const a=[];for(const o of e){if(!Le(o)){p("Images are removed - the Admin accepts videos only. Drop a product video instead.","error");continue}if(o.size>100*1024*1024){p("Video must be under 100 MB.","error");continue}a.push(o)}if(!a.length)return;const i=a.map(()=>{const o=document.createElement("div");return o.className="img-thumb uploading",o.style.cssText="min-width:90px;min-height:80px;",o.innerHTML='<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-400"><div class="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mb-1.5"></div><span class="text-[10px] font-bold">Uploading…</span></div>',t.appendChild(o),o});await Po(a,3,async(o,s)=>{const r=i[s],n=await Ja(o);setTimeout(()=>{if(!(!r||!r.isConnected)){if(r.remove(),n){const d=document.createElement("div");d.innerHTML=fe(n,s);const u=d.firstElementChild,m=r.nextSibling;m?t.insertBefore(u,m):t.appendChild(u)}else p(`Failed to upload ${Le(o)?"video":"image"}. Try a smaller file.`,"error");Pe(),bt(),Ee(),window.lucide&&lucide.createIcons()}},0)})}async function Ja(e){try{const{data:{session:t}}=await c.auth.getSession(),a=String(e.type||"").startsWith("image/"),i=Le(e);let o=e;if(a&&e.size>250*1024){const d=await da(e);d&&d.size&&(o=d)}const s=o.type==="image/jpeg"?"jpg":(e.name||"photo.jpg").split(".").pop()||"jpg",r=`products/${Date.now()}-${Math.random().toString(36).slice(2)}`,n=i?3e5:9e4;for(let d=0;d<2;d++){const u=`${r}${d?"-"+Math.random().toString(36).slice(2,7):""}.${s}`,{error:m}=await Eo("product-images",u,o,{contentType:o.type||e.type,upsert:!1},n);if(m)console.warn("product-images upload failed (attempt "+(d+1)+"):",m.message||m);else{const{data:g}=c.storage.from("product-images").getPublicUrl(u);if(g&&g.publicUrl)return g.publicUrl}}if(i)return null;try{const d=await da(o,1200,.72);if(d&&d.size){const u=new FileReader,m=await new Promise(g=>{u.onload=()=>g(u.result),u.onerror=()=>g(null),u.readAsDataURL(d)});if(m)return m}}catch{}return URL.createObjectURL(e)}catch{return Le(e)?null:URL.createObjectURL(e)}}async function Co(){if(!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform()))return null;try{const{Camera:e,MediaTypeSelection:t}=await bi(async()=>{const{Camera:o,MediaTypeSelection:s}=await import("@capacitor/camera");return{Camera:o,MediaTypeSelection:s}},[]),{results:a}=await e.chooseFromGallery({mediaType:t.All,allowMultipleSelection:!0,includeMetadata:!0}),i=[];for(const o of a||[])if(o.webPath)try{const s=o.type===1,r=(o.metadata&&o.metadata.format||(s?"mp4":"jpg")).toLowerCase().replace(/^jpeg$/,"jpg"),n=await fetch(o.webPath).then(d=>d.blob());i.push(new File([n],`gallery-${Date.now()}-${Math.random().toString(36).slice(2)}.${r}`,{type:n.type||(s?"video/mp4":"image/jpeg")}))}catch{}return i}catch(e){return console.warn("Native gallery picker unavailable:",e),null}}window.pickMediaForForm=async function(e){if(!!!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform())){document.getElementById(e)?.click();return}const a=await Co();!a||!a.length||await Qt(a)};window.removeImage=function(e){const t=document.getElementById("image-preview");if(!t)return;const a=[...t.children];a[e]&&a[e].remove(),Pe(),bt(),Ee()};window.replaceImage=async function(e,t){const a=document.getElementById("image-preview");if(!a||!t||!t.files||!t.files[0])return;const i=t.files[0],o=i.type==="application/pdf"||$a(i.name),s=Le(i);if(!i.type.startsWith("image/")&&!o&&!s){p("Please choose an image, video, or PDF file.","error");return}if(s&&i.size>100*1024*1024){p("Video must be under 100 MB.","error");return}const r=await Ja(i);if(!r)return;const d=[...a.querySelectorAll(".img-thumb")][e];d&&(d.outerHTML=fe(r,e),Pe(),bt(),Ee(),p(o?"Document replaced. Save to apply.":s?"Video replaced. Save to apply.":"Image replaced. Save to apply.","info"))};function Pe(){const e=document.getElementById("image-preview"),t=document.getElementById("image-url-inputs");!e||!t||(t.innerHTML="",[...e.querySelectorAll(".img-thumb")].forEach((a,i)=>{const o=a.dataset.url||(a.querySelector("img")?a.querySelector("img").src:"");if(!o)return;const s=document.createElement("input");s.type="hidden",s.name="images",s.id=`img-url-${i}`,s.value=o,t.appendChild(s),a.dataset.index=i;const r=a.querySelector(".rm");r&&r.setAttribute("onclick",`removeImage(${i})`);const n=a.querySelector(".rp");n&&n.setAttribute("onclick",`document.getElementById('rp-input-${i}').click()`);const d=a.querySelector(".rp-input");d&&(d.id=`rp-input-${i}`,d.onchange=()=>replaceImage(i,d))}))}function bt(){const e=document.getElementById("image-preview");e&&[...e.querySelectorAll(".img-thumb")].forEach((t,a)=>{t.classList.toggle("cover-img",a===0);const i=T(t.dataset.url);t.title=a===0?"Cover (main)":(i?"Video ":"Image ")+(a+1)})}function Ee(){const e=document.getElementById("image-preview"),t=document.getElementById("gallery-counter");if(!e||!t)return;const a=[...e.querySelectorAll(".img-thumb")],i=a.length,o=a.filter(r=>T(r.dataset.url)).length,s=i-o;if(i===0)t.textContent="No media yet — you can still save and publish anytime";else{const r=[];s>0&&r.push(`${s} image${s>1?"s":""}`),o>0&&r.push(`${o} video${o>1?"s":""}`),t.textContent=`${r.join(" + ")} — you can save and publish anytime`}t.className="text-sm mt-1 font-bold text-gray-400"}function Mt(e,t){return`kco_product_form_autosave_${e}_${t||"new"}`}function Ao(e){const t=new FormData(e),a={images:[],tags:[],fields:{}};for(const[i,o]of t.entries())i==="images"?o&&!String(o).startsWith("blob:")&&a.images.push(String(o)):i==="tags"?a.tags.push(String(o)):a.fields[i]=String(o);return a.fields.is_featured=e.querySelector('[name="is_featured"]')?.checked?"on":"",a.fields.is_active=e.querySelector('[name="is_active"]')?.checked?"on":"",a}function Io(e,t){if(!t||typeof t!="object")return!1;const a=t.fields||{};Object.entries(a).forEach(([o,s])=>{const r=e.querySelector(`[name="${o}"]`);r&&(r.type==="checkbox"?r.checked=s==="on"||s===!0:r.value=s==null?"":String(s))});const i=Array.isArray(t.tags)?t.tags:[];if(e.querySelectorAll('input[name="tags"]').forEach(o=>{o.checked=i.includes(o.value)}),Array.isArray(t.images)){const o=document.getElementById("image-preview");o&&(o.innerHTML=t.images.filter(T).map((s,r)=>fe(s,r)).join(""),Pe(),bt(),Ee())}return!0}function ca(){const e=document.getElementById("product-review-content"),t=document.getElementById("product-form");if(!e||!t)return;const a=t.querySelector('[name="title"]')?.value||"Untitled Product",i=t.querySelector('[name="brand"]')?.value||"N/A",o=parseFloat(t.querySelector('[name="price"]')?.value||"0")||0,s=parseFloat(t.querySelector('[name="real_price"]')?.value||"0")||0,r=t.querySelector('[name="stock_quantity"]')?.value,n=r===""||r==null?"Unlimited":r,d=P.section==="products"&&document.querySelector("#product-form")?.dataset?.category||"",u=[...t.querySelectorAll('input[name="tags"]:checked')].map(x=>x.value),m=document.querySelectorAll("#image-preview .img-thumb").length,g=t.querySelector('[name="is_active"]')?.checked;e.innerHTML=`
    <div class="grid grid-cols-2 gap-2">
      <div><span class="text-gray-500">Title</span><p class="text-white font-semibold">${l(a)}</p></div>
      <div><span class="text-gray-500">Brand</span><p class="text-white font-semibold">${l(i)}</p></div>
      <div><span class="text-gray-500">Price</span><p class="text-emerald-300 font-semibold">${s>o?`<span class="line-through text-gray-500 mr-1">$${s.toLocaleString()}</span>`:""}$${o.toLocaleString()}</p></div>
      <div><span class="text-gray-500">Stock</span><p class="text-white font-semibold">${l(n)}</p></div>
      <div><span class="text-gray-500">Media</span><p class="text-white font-semibold">${m}</p></div>
      <div><span class="text-gray-500">Status</span><p class="${g?"text-emerald-300":"text-amber-300"} font-semibold">${g?"Published":"Draft / Hidden"}</p></div>
    </div>
    <div class="mt-2 text-gray-400">Tags: ${u.length?l(u.join(", ")):"No tags selected"}</div>
    ${d?`<div class="text-gray-500 mt-1">Category: ${l(d)}</div>`:""}
  `}window.previewProductDraft=function(){const e=document.getElementById("product-form");if(!e)return;const t=document.querySelector("#image-preview video")?.getAttribute("src")||"",a=e.querySelector('[name="title"]')?.value||"Untitled Product",i=e.querySelector('[name="description"]')?.value||"No description yet.",o=e.querySelector('[name="brand"]')?.value||"N/A",s=parseFloat(e.querySelector('[name="price"]')?.value||"0")||0,r=parseFloat(e.querySelector('[name="real_price"]')?.value||"0")||0,n=e.dataset.category||"Product",d=e.querySelector('[name="stock_quantity"]')?.value||"Unlimited",u=e.querySelector('[name="is_active"]')?.checked;U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Live Draft Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${t?`<video src="${l(t)}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" muted playsinline preload="metadata"></video>`:ye("w-full h-64 rounded-xl border border-blue-500/20")}
          <div class="space-y-2">
            <h4 class="text-xl font-black text-white">${l(a)}</h4>
            <div class="flex items-center gap-2">${O(u?"active":"inactive")}<span class="badge bg-blue-500/10 text-blue-300 border-blue-500/20">${l(n)}</span></div>
            <p class="text-sm text-gray-400">${l(i)}</p>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">${r>s?`<span class="text-xs line-through text-gray-500 mr-1">$${r.toLocaleString()}</span>`:""}$${s.toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${l(d)}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2 col-span-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${l(o)}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>`)};function To(e,t){const a=document.getElementById("product-form");if(!a)return;a.dataset.category=e;const i=Mt(e,t),o=document.getElementById("product-autosave-note");if(!t)try{const d=localStorage.getItem(i);if(d){const u=JSON.parse(d);Io(a,u)&&o&&(o.textContent="Autosave restored from your last session.",o.classList.remove("hidden"))}}catch{}const s=()=>{try{localStorage.setItem(i,JSON.stringify(Ao(a))),o&&(o.textContent=`Auto saved at ${new Date().toLocaleTimeString()}`,o.classList.remove("hidden"))}catch{}ca()};let r;const n=()=>{clearTimeout(r),r=setTimeout(s,500)};a.querySelectorAll("input, textarea, select").forEach(d=>{d.addEventListener("input",n),d.addEventListener("change",n)}),ca(),Ee()}window.saveProduct=async function(e,t,a){e.preventDefault();const i=e.target,o=i.querySelector("[type=submit][name=action][value=publish]"),s=a?"One-Click Publish Changes":"One-Click Publish Product";if(window._productPublishInFlight)return;window._productPublishInFlight=!0,o&&(o.disabled=!0,o.style.opacity="0.75",o.innerHTML='<span style="display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:_pubspin .7s linear infinite;vertical-align:-2px;margin-right:8px;"></span>Publishing…');try{if(!document.getElementById("_pubspin-style")){const n=document.createElement("style");n.id="_pubspin-style",n.textContent="@keyframes _pubspin{to{transform:rotate(360deg)}}",document.head.appendChild(n)}}catch{}const r=()=>{window._productPublishInFlight=!1,o&&(o.disabled=!1,o.style.opacity="",o.textContent=s)};try{const n=new FormData(i),d={};let u=0;for(const[h,b]of n.entries())if(h==="images"){d.images=d.images||[];const v=String(b);b&&!v.startsWith("blob:")&&T(v)?d.images.push(v):v.startsWith("blob:")&&u++}else h==="tags"?(d.tags=d.tags||[],d.tags.push(b)):d[h]=b;if(u&&!(d.images||[]).length){r(),p("Your images were still uploading â€” please wait a moment and press Publish again (the photos were not saved with the product).","error");return}d.is_featured=i.querySelector('[name="is_featured"]')?.checked?"on":"",d.is_active=i.querySelector('[name="is_active"]')?.checked?"on":"";const m=n.get("action")==="draft",g=h=>It(h),x=h=>{const b=["model","storage","ram","processor","display","material","gender","platform","voltage","engine","transmission","fuel_type","horsepower","mileage","drive_type","body_type","model_year","seating_capacity","doors","real_price","type","size","age_range","skin_type","ingredients","dimensions","author","publisher","language","format","isbn","pages","edition","quantity","pet_type","lens","sensor","megapixels","video","license","version","duration","followers","engagement","niche","usage","shelf_life","assembly","weatherproof","movement","case_material","water_resistance","gemstone","movement_type","warranty_period"],v={};for(const B of b){const E=h[B];if(B==="real_price"){const C=E!=null&&String(E).trim()!==""?parseFloat(E):null;v[B]=C!=null&&Number.isFinite(C)&&C>0?Math.round(C):null;continue}v[B]=E!=null&&String(E).trim()!==""?E:null}if(h.safety_features){const B=g(h.safety_features);v.safety_features=B.length?B:null}return v};if(a){let h=null;try{const{data:A}=await c.from("showroom_listings").select("*").eq("property_id",a).maybeSingle();A&&(h=oe(A))}catch{}if(h||(h=oe((window._productsData||[]).find(A=>A.property_id===a))),h||(h=oe(ke?ke(a):null)),!h)throw new Error("Could not load the current product to compare your changes against. Refresh the page, re-open the product and try again.");const b=(A,K)=>{const ui=A===""||A==null?"":A,pi=K===""||K==null?"":K;return String(ui).trim()===String(pi).trim()},v={};["title","description","currency","subcategory","brand","color","size","condition","warranty","availability_status"].forEach(A=>{b(d[A],h[A])||(v[A]=d[A]==null||d[A]===""?null:d[A])});const B=d.price===""||d.price==null?null:parseFloat(d.price);b(B,h.price)||(v.price=B==null?h.price:Math.max(V,Math.min(J,B)));const E=d.stock_quantity===""||d.stock_quantity==null?null:parseInt(d.stock_quantity,10);b(E,h.stock_quantity)||(v.stock_quantity=Number.isFinite(E)?E:null);const C=g(d.features_text);b(C.join("||"),(Array.isArray(h.features)?h.features:[]).join("||"))||(v.features=C);const _=d.tags||[];b(_.join("||"),(Array.isArray(h.tags)?h.tags:[]).join("||"))||(v.tags=_);const k=g(d.highlights_text);b(k.join("||"),(Array.isArray(h.highlights)?h.highlights:[]).join("||"))||(v.highlights=k);const ve=g(d.seo_keywords_text);b(ve.join("||"),(Array.isArray(h.seo_keywords)?h.seo_keywords:[]).join("||"))||(v.seo_keywords=ve);const $=d.images||[];b($.join("||"),(Array.isArray(h.images)?h.images:[]).join("||"))||(v.images=$);const H=$.find(A=>typeof A=="string"&&T(A))||null;b(H,h.video_url)||(v.video_url=H);const xe=d.is_featured==="on";!!h.is_featured!==xe&&(v.is_featured=xe);const aa=m?!1:d.is_active==="on";!!h.is_active!==aa&&(v.is_active=aa);const ci=x(d),ia={...h.specifications&&typeof h.specifications=="object"?h.specifications:{},...ci};if(JSON.stringify(ia)!==JSON.stringify(h.specifications||{})&&(v.specifications=ia),Object.keys(v).length===0){p("No changes detected â€” nothing was saved.","info");try{localStorage.removeItem(Mt(t,a))}catch{}p("No changes were needed — this product is already published with exactly these details.","info"),r(),closeProductFormModal(),D();return}const Oe={...h,...v,property_id:a,updated_at:new Date().toISOString()};delete Oe.id;const oa=await la(Oe);if(oa.error){r();const A=kt(oa.error,m?"Draft save":"Product publish");p(A,"error");try{let K=i.querySelector(".__publish-error-banner");K||(K=document.createElement("div"),K.className="__publish-error-banner mb-3 p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-medium",i.prepend(K)),K.textContent=A}catch{}return}try{ze(Oe)}catch{}try{const A=(window._productsData||[]).findIndex(K=>K.property_id===a);A>=0&&(window._productsData[A]=Oe)}catch{}p(m?"Draft saved!":`Published Successfully â€” your product is updated and live in your showroom (${Object.keys(v).length} change${Object.keys(v).length>1?"s":""}).`)}else{if(!d.title||!d.title.trim())throw new Error("A product title is required.");if(d.price===""||d.price==null||!isFinite(parseFloat(d.price)))throw new Error("A price is required.");if(!!i.querySelector('[name="condition"]')&&!d.condition)throw new Error("Please choose the product condition.");const b={listing_type:"product",category:t,subcategory:d.subcategory||null,title:d.title.trim(),description:d.description||"",price:Math.max(V,Math.min(J,parseFloat(d.price)||0)),currency:d.currency||"USD",country:"",country_code:"",listing_status:"sale",state:"",city:"",product_location:"",latitude:null,longitude:null,is_active:m?!1:d.is_active==="on",is_featured:d.is_featured==="on",brand:d.brand||null,color:d.color||null,size:d.size||null,condition:d.condition||null,warranty:d.warranty||null,availability_status:d.availability_status||"In Stock",stock_quantity:d.stock_quantity?parseInt(d.stock_quantity):null,images:d.images||[],video_url:(d.images||[]).find(E=>typeof E=="string"&&T(E))||null,features:g(d.features_text).length?g(d.features_text):d.tags||[],tags:d.tags||[],highlights:g(d.highlights_text),seo_keywords:g(d.seo_keywords_text),is_ai_generated:!!d.catalog_template_id,ai_generated_fields:d.catalog_template_id?["title","description","features","highlights","seo_keywords"]:[],specifications:x(d)},v=it();b.property_id=v;const B=await la(b);if(B.error){r();const E=kt(B.error,"Product publish");p(E,"error");try{let C=i.querySelector(".__publish-error-banner");C||(C=document.createElement("div"),C.className="__publish-error-banner mb-3 p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-medium",i.prepend(C)),C.textContent=E}catch{}return}try{ze({...b,property_id:b.property_id})}catch{}try{(window._productsData=window._productsData||[]).unshift({...b})}catch{}p(m?"Draft saved!":"Published Successfully! Your product is now live in your showroom.")}r();try{localStorage.removeItem(Mt(t,a))}catch{}closeProductFormModal(),D()}catch(n){const d=n&&n.message&&!/failed to fetch|networkerror/i.test(String(n.message))?n.message:kt(n,"Product publish");r(),p(d,"error")}};window.editProduct=async function(e){const{data:t,error:a}=await c.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=a?null:t;if(i||(i=ke(e)),i||(i=(window._productsData||[]).find(o=>o.property_id===e)||null),!i)return p("Product not found","error");i.specifications&&typeof i.specifications=="object"&&(i={...i,...i.specifications}),showAddProductStep2(i.category||"Other",i)};window.toggleProductActive=async function(e,t){let a=null;try{const{data:o}=await c.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();o&&(a=oe(o))}catch{}if(a||(a=oe((window._productsData||[]).find(o=>o.property_id===e))),!a||!a.property_id){$t(e,{is_active:t,availability_status:t?"In Stock":"Out of Stock"}),p(t?"Product published locally":"Product unpublished locally","info"),D();return}delete a.id,a.property_id=e,a.is_active=t,a.availability_status=t?"In Stock":"Out of Stock";const{error:i}=await c.from("showroom_listings").upsert(a,{onConflict:"property_id"});if(i){if(W(i))return p(`âšï¸ ${t?"Publish":"Unpublish"} blocked: database admin role rejected the write. Re-run the admin permission migration.`,"error");$t(e,{is_active:t,availability_status:t?"In Stock":"Out of Stock"}),p(t?"Product published locally":"Product unpublished locally","info"),D();return}p(t?"Product published":"Product unpublished"),D()};window.duplicateProduct=async function(e,t=!1){const{data:a}=await c.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();if(!a)return;const{id:i,property_id:o,created_at:s,updated_at:r,...n}=a,d=it();await c.from("showroom_listings").insert({...n,property_id:d,title:a.title+" (Copy)",is_active:!1}),t||(p("Product duplicated"),D())};window.archiveProduct=async function(e){confirm("Archive this product? It will be hidden from the website but can be restored.")&&(await c.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",e),p("Product archived"),D())};const Bo=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","Commercial Building","Hotel","Land","Other"];async function mt(){const e=document.getElementById("content");try{const{data:t,error:a}=await c.from("showroom_listings").select("*").eq("listing_type","property").order("created_at",{ascending:!1});let i=a?Ft().filter(s=>s.listing_type==="property"):t||[];if(Array.isArray(Q)){const s=new Set(i.map(n=>n.property_id)),r=Q.filter(n=>n.listing_type==="property"&&n.property_id&&!s.has(n.property_id));r.length&&(i=i.concat(r))}i.sort((s,r)=>new Date(r.created_at||0)-new Date(s.created_at||0));try{await Nt()}catch{}const o=new Set(Ze());i=i.filter(s=>!(s&&s.property_id&&o.has(s.property_id))),window._propertiesData=i,e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex flex-wrap items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Properties Manager</h2>
          <button onclick="fixPropertyMaps()" class="btn-press flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition" title="Geocode any property that is missing its map coordinates and update its map">
            <i data-lucide="map-pin" class="w-4 h-4"></i> Fix Maps
          </button>
          <button onclick="showAddPropertyModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Property
          </button>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr>
                <th>Property</th><th>Type</th><th class="hidden sm:table-cell">Location</th>
                <th class="hidden md:table-cell">Price</th><th>Status</th><th>Actions</th>
              </tr></thead>
              <tbody>
                ${i.length===0?'<tr><td colspan="6" class="text-center text-gray-500 py-12">No properties yet.</td></tr>':i.map(s=>`<tr>
                    <td>
                      <div class="flex items-center gap-2.5">
                        ${(()=>{const r=nt(s);return r?dt(r,"w-9 h-9 rounded-lg object-cover border border-blue-500/20 shrink-0"):ye("w-9 h-9 rounded-lg border border-blue-500/20 shrink-0")})()}
                        <div><p class="text-xs font-bold text-white truncate max-w-[160px]">${l(s.title)}</p><p class="text-[10px] font-mono text-gray-500">${l(s.property_id)}</p></div>
                      </div>
                    </td>
                    <td><span class="text-xs text-gray-300">${l(s.property_type||s.category)}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${l([s.city,s.state,s.country].filter(Boolean).join(", ")||"â€”")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(s.price||0).toLocaleString()}</span></td>
                    <td>${O(s.listing_status||"sale")} ${O(s.is_active?"active":"inactive")}</td>
                    <td>
                      <div class="flex gap-1">
                        <button onclick="editProperty('${s.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
                        <button onclick="archiveProduct('${s.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
                        <button onclick="deleteProduct('${s.property_id}')" class="btn-press p-1.5 text-rose-400 hover:bg-rose-500/10 rounded-lg transition"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                      </div>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.showAddPropertyModal=function(e={}){const t=!!e.property_id,a=_a("property","Real Estate"),i=e.country_code||"US",o=e.currency||Ot(i);U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${t?"Edit":"Add"} Property</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <form id="property-form" onsubmit="saveProperty(event,'${t?e.property_id:""}')" class="space-y-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-3">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs font-bold text-white uppercase tracking-wide">Property Catalog Autofill</p>
                <p class="text-[11px] text-gray-500 mt-1">Choose a property template and country to generate a global real-estate listing with map-ready fields.</p>
              </div>
              <button type="button" onclick="applyPropertyCatalogTemplate()" class="btn-press px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold rounded-xl transition">Refresh Template</button>
            </div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Property Template</label><select class="input-field" name="catalog_template_id" id="ppf-catalog_template_id" onchange="applyPropertyCatalogTemplate()"><option value="">Choose a property template...</option>${a.map(r=>`<option value="${r.id}">${l(r.label)} - ${l(r.propertyType||r.subcategory)}</option>`).join("")}</select></div>
              <div><label class="lbl">Country</label><select class="input-field" name="country_code" id="ppf-country_code" onchange="syncPropertyCountry(); applyPropertyCatalogTemplate()">${Yt(i)}</select></div>
              <div><label class="lbl">Currency</label><select class="input-field" name="currency" id="ppf-currency" onchange="applyPropertyCatalogTemplate()">${Qa(o)}</select></div>
            </div>
            <p id="ppf-image-requirement" class="text-[11px] text-gray-400">Any number of images is fine â€” save and publish anytime.</p>
            <input type="hidden" name="required_image_count" id="ppf-required_image_count" value="">
          </div>


          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="home" class="w-4 h-4 text-blue-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Basic Information</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Property Title *</label><input class="input-field" name="title" value="${l(e.title||"")}" required placeholder="e.g. Cozy 3-Bedroom Family Home"></div>
              <div><label class="lbl">Property Type *</label><select class="input-field" name="property_type" required>
                ${Bo.map(r=>`<option value="${r}" ${e.property_type===r?"selected":""}>${r}</option>`).join("")}
              </select></div>
              <div><label class="lbl">Listing Status</label><select class="input-field" name="listing_status">
                <option value="sale" ${e.listing_status!=="rent"?"selected":""}>For Sale</option>
                <option value="rent" ${e.listing_status==="rent"?"selected":""}>For Rent</option>
              </select></div>
              <div><label class="lbl">Price *</label><input type="number" class="input-field" id="ppf-price" name="price" value="${e.price||""}" required placeholder="0"></div>
              <div><label class="lbl">Real Price (crossed out)</label><input type="number" class="input-field" id="ppf-real_price" name="real_price" value="${e.real_price??e.specifications?.real_price??""}" placeholder="Original price before discount"></div>
              <div><label class="lbl">Country Name *</label><input class="input-field" id="ppf-country" name="country" value="${l(e.country||"")}" required placeholder="United States"></div>
              <div><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${l(e.subcategory||"")}" placeholder="e.g. Villas, Mansions, Hotels"></div>
              <div><label class="lbl">Furnished</label><select class="input-field" name="furnished">
                <option value="">Not specified</option>
                <option value="Furnished" ${e.furnished==="Furnished"?"selected":""}>Furnished</option>
                <option value="Unfurnished" ${e.furnished==="Unfurnished"?"selected":""}>Unfurnished</option>
              </select></div>
              <div><label class="lbl">Condition</label><select class="input-field" name="condition">
                <option value="">Not specified</option>
                ${["New Construction","Like New","Excellent","Good","Fair","Needs Renovation"].map(r=>`<option value="${r}" ${e.condition===r?"selected":""}>${r}</option>`).join("")}
              </select></div>
              <div><label class="lbl">Year Built</label><input type="number" class="input-field" name="year_built" value="${e.year_built??""}" placeholder="2015"></div>
              <div><label class="lbl">Year Renovated</label><input type="number" class="input-field" name="year_renovated" value="${e.year_renovated??""}" placeholder="2021"></div>
            </div>
          </div>

          <div class="glass-soft border border-sky-500/15 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="map-pin" class="w-4 h-4 text-sky-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Location &amp; Map</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">State / Province</label><input class="input-field" name="state" value="${l(e.state||"")}" placeholder="e.g. California"></div>
              <div><label class="lbl">City</label><input class="input-field" name="city" value="${l(e.city||"")}" placeholder="e.g. Los Angeles"></div>
              <div><label class="lbl">Town / Local Area</label><input class="input-field" name="town" value="${l(e.town||"")}" placeholder="Neighborhood or district"></div>
              <div class="sm:col-span-2"><label class="lbl">Property Location</label><input class="input-field" name="product_location" value="${l(e.product_location||"")}" placeholder="Estate, district, city, landmark"></div>
              <div class="sm:col-span-2"><label class="lbl">Street / Address</label><input class="input-field" name="address" value="${l(e.address||"")}" placeholder="Street and number, e.g. 123 Maple Street"></div>
              <div><label class="lbl">ZIP / Postal Code</label><input class="input-field" name="zip_code" value="${l(e.zip_code||"")}" placeholder="e.g. 10001"></div>
              <div><label class="lbl">Neighborhood / District</label><input class="input-field" name="neighborhood" value="${l(e.neighborhood||"")}" placeholder="e.g. Beverly Hills, Riverside"></div>
              <div><label class="lbl">Latitude</label><input type="number" step="any" class="input-field" name="latitude" value="${l(e.latitude||"")}" placeholder="40.7128"></div>
              <div><label class="lbl">Longitude</label><input type="number" step="any" class="input-field" name="longitude" value="${l(e.longitude||"")}" placeholder="-74.0060"></div>
              <div class="sm:col-span-2"><label class="lbl">Landmarks (comma separated)</label><input class="input-field" name="landmarks_text" value="${l((e.landmarks||[]).join(", "))}" placeholder="City Hall, Central Park, Main Station"></div>
              <div class="sm:col-span-2">
                <div class="rounded-xl border border-gray-200 overflow-hidden" style="height:250px;background:#e2e8f0"><div id="property-map-preview" style="width:100%;height:100%"></div></div>
                <div class="flex flex-wrap items-center justify-between gap-2 mt-2">
                  <div class="text-[11px] text-gray-500" id="property-map-status">Map preview â€” fill the location fields or click the map to drop a pin.</div>
                  <div class="flex items-center gap-2">
                    <button type="button" id="btn-geocode-property" class="btn-press text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg px-2.5 py-1 hover:bg-blue-100 transition">Locate from fields</button>
                    <a id="btn-open-google-map" href="#" target="_blank" rel="noopener" class="text-[11px] font-bold text-gray-600 bg-gray-100 border border-gray-200 rounded-lg px-2.5 py-1 hover:bg-gray-200 transition">Open in Google Maps</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="ruler" class="w-4 h-4 text-emerald-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Size &amp; Layout</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Bedrooms</label><input type="number" class="input-field" name="bedrooms" value="${e.bedrooms??""}" placeholder="3"></div>
              <div><label class="lbl">Bathrooms</label><input type="number" class="input-field" name="bathrooms" value="${e.bathrooms??""}" placeholder="2"></div>
              <div><label class="lbl">Half Bathrooms</label><input type="number" class="input-field" name="half_bathrooms" value="${e.half_bathrooms??""}" placeholder="1"></div>
              <div><label class="lbl">Floors / Levels</label><input type="number" class="input-field" name="floors" value="${e.floors??""}" placeholder="2"></div>
              <div><label class="lbl">Building Size</label><input class="input-field" name="building_size" value="${l(e.building_size||"")}" placeholder="e.g. 2,500 sqft"></div>
              <div><label class="lbl">Land Size</label><input class="input-field" name="land_size" value="${l(e.land_size||"")}" placeholder="e.g. 0.5 acres"></div>
              <div><label class="lbl">Parking Spaces</label><input type="number" class="input-field" name="parking_spaces" value="${e.parking_spaces??""}"></div>
              <div><label class="lbl">Garage</label><input class="input-field" name="garage" value="${l(e.garage||"")}" placeholder="e.g. 2-car attached, None"></div>
              <div><label class="lbl">Living Areas</label><input class="input-field" name="living_areas" value="${l(e.living_areas||"")}" placeholder="Living room, Dining, Family room"></div>
              <div><label class="lbl">Kitchens</label><input type="number" class="input-field" name="kitchens" value="${e.kitchens??""}" placeholder="1"></div>
              <div><label class="lbl">Balconies</label><input type="number" class="input-field" name="balconies" value="${e.balconies??""}" placeholder="2"></div>
              <div><label class="lbl">Garden</label><input class="input-field" name="garden" value="${l(e.garden||"")}" placeholder="Private garden / Landscaped / None"></div>
              <div><label class="lbl">Pool</label><input class="input-field" name="pool" value="${l(e.pool||"")}" placeholder="Private pool / Community pool / None"></div>
              <div><label class="lbl">Security</label><input class="input-field" name="security" value="${l(e.security||"")}" placeholder="Gated community, CCTV, Alarm"></div>
              <div><label class="lbl">Utilities</label><input class="input-field" name="utilities" value="${l(e.utilities||"")}" placeholder="Water, electricity, gas, internet"></div>
            </div>
          </div>

          <div class="glass-soft border border-cyan-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="file-text" class="w-4 h-4 text-cyan-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Description, Features &amp; SEO</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Description</label><textarea class="input-field" name="description" rows="3" placeholder="Describe the propertyâ€¦">${l(e.description||"")}</textarea></div>
              <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${l((e.features||[]).join(", "))}" placeholder="Swimming Pool, Garden, Garageâ€¦"></div>
              <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${l((e.highlights||[]).join(", "))}" placeholder="Prime location, map-ready post, 24-image gallery"></div>
              <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${l((e.seo_keywords||[]).join(", "))}" placeholder="mansion, villa, property investment"></div>
            </div>
          </div>

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="home" class="w-4 h-4 text-emerald-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Interior &amp; Exterior Features</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Interior Features (comma separated)</label><input class="input-field" name="interior_features_text" value="${l((e.interior_features||[]).join(", "))}" placeholder="Open plan kitchen, Walk-in closet, Fireplace…"></div>
              <div class="sm:col-span-2"><label class="lbl">Exterior Features (comma separated)</label><input class="input-field" name="exterior_features_text" value="${l((e.exterior_features||[]).join(", "))}" placeholder="Swimming pool, Garden, Balcony, Patio…"></div>
              <div class="sm:col-span-2"><label class="lbl">Home Systems (comma separated)</label><input class="input-field" name="home_systems_text" value="${l((e.home_systems||[]).join(", "))}" placeholder="Central heating, Air conditioning, Solar panels…"></div>
            </div>
          </div>

          <div class="glass-soft border border-amber-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="hard-hat" class="w-4 h-4 text-amber-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Construction, Ownership &amp; Contact</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Construction Type</label><input class="input-field" name="construction_type" value="${l(e.construction_type||"")}" placeholder="Brick, Concrete, Timber…"></div>
              <div><label class="lbl">Construction Status</label><input class="input-field" name="construction_status" value="${l(e.construction_status||"")}" placeholder="Completed, Under construction"></div>
              <div><label class="lbl">Ownership Type</label><input class="input-field" name="ownership_type" value="${l(e.ownership_type||"")}" placeholder="Freehold, Leasehold, HOA…"></div>
              <div><label class="lbl">Contact / Agent Name</label><input class="input-field" name="contact_name" value="${l(e.contact_name||"")}" placeholder="Listing agent name"></div>
              <div><label class="lbl">Contact Phone / WhatsApp</label><input class="input-field" name="contact_phone" value="${l(e.contact_phone||"")}" placeholder="+1 555 010 2233"></div>
              <div><label class="lbl">Contact Email</label><input class="input-field" name="contact_email" value="${l(e.contact_email||"")}" placeholder="agent@example.com"></div>
            </div>
          </div>

          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="layout-dashboard" class="w-4 h-4 text-violet-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Floor Plan</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Floor Plan Image URL</label><input class="input-field" name="floor_plan_image" value="${l(e.floor_plan?.image||"")}" placeholder="https://â€¦/floor-plan.png"></div>
              <div><label class="lbl">Levels</label><input class="input-field" name="floor_plan_levels" value="${l(e.floor_plan?.levels||"")}" placeholder="e.g. Ground + 1"></div>
              <div><label class="lbl">Total Area</label><input class="input-field" name="floor_plan_total_area" value="${l(e.floor_plan?.total_area||"")}" placeholder="e.g. 2,500 sqft"></div>
              <div class="sm:col-span-2"><label class="lbl">Rooms (comma separated â€” Name: dimensions)</label><input class="input-field" name="floor_plan_rooms" value="${l((e.floor_plan?.rooms||[]).map(r=>(r.name||"")+(r.dimensions?": "+r.dimensions:"")).join(", "))}" placeholder="Living Room: 15x12, Kitchen: 10x10â€¦"></div>
            </div>
          </div>

          <div class="glass-soft border border-amber-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="school" class="w-4 h-4 text-amber-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Nearby Area</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Schools (comma separated)</label><input class="input-field" name="nearby_schools_text" value="${l((e.nearby_area?.schools||[]).join(", "))}" placeholder="Riverside Elementaryâ€¦"></div>
              <div><label class="lbl">Hospitals / Clinics</label><input class="input-field" name="nearby_hospitals_text" value="${l((e.nearby_area?.hospitals||[]).join(", "))}" placeholder="City General Hospitalâ€¦"></div>
              <div><label class="lbl">Shopping / Markets</label><input class="input-field" name="nearby_shopping_text" value="${l((e.nearby_area?.shopping||[]).join(", "))}" placeholder="Maple Mall, Farmers Marketâ€¦"></div>
              <div><label class="lbl">Transportation</label><input class="input-field" name="nearby_transportation_text" value="${l((e.nearby_area?.transportation||[]).join(", "))}" placeholder="Metro Station, Bus Stopâ€¦"></div>
              <div class="sm:col-span-2"><label class="lbl">Distances (comma separated)</label><input class="input-field" name="nearby_distances_text" value="${l((e.nearby_area?.distances||[]).join(", "))}" placeholder="0.5 mi to school, 1 mi to hospitalâ€¦"></div>
            </div>
          </div>

          <div class="glass-soft border border-blue-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="shield-check" class="w-4 h-4 text-blue-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Legal, Verification &amp; Trust</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Legal / Financial Info (comma separated â€” add source tag)</label><input class="input-field" name="legal_info_text" value="${l((e.legal_info||[]).map(r=>(r.label||"")+(r.value?": "+r.value:"")+(r.source?` (${r.source})`:"")).join(", "))}" placeholder="Ownership: Clear title (Seller provided), Property taxes: (Not verified)â€¦"></div>
              <div><label class="lbl">Verification Status</label><select class="input-field" name="verification_status">
                <option value="Not verified" ${(e.verification_status||"Not verified")==="Not verified"?"selected":""}>Not verified</option>
                <option value="Pending verification" ${e.verification_status==="Pending verification"?"selected":""}>Pending verification</option>
                <option value="Verified" ${e.verification_status==="Verified"?"selected":""}>Verified</option>
              </select></div>
              <div><label class="lbl">Verification Date</label><input type="date" class="input-field" name="verification_date" value="${l(e.verification_date||"")}"></div>
              <div class="sm:col-span-2"><label class="lbl">Inspection Info</label><input class="input-field" name="inspection_info" value="${l(e.inspection_info||"")}" placeholder="Inspected on date by company â€” result"></div>
              <div class="sm:col-span-2"><label class="lbl">Documents (comma separated URLs)</label><input class="input-field" name="documents_text" value="${l((e.documents||[]).join(", "))}" placeholder="https://â€¦/title.pdf, https://â€¦/inspection.pdf"></div>
              <div class="sm:col-span-2"><label class="lbl">Condition / Risk Notes</label><textarea class="input-field" name="risk_notes" rows="2" placeholder="Any known issues, renovation needs, or risk notesâ€¦">${l(e.risk_notes||"")}</textarea></div>
            </div>
          </div>

          <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/15 rounded-xl">
            <div><p class="text-xs font-bold text-white">Published / Active</p><p class="text-[11px] text-gray-500">Visible on the website</p></div>
            <label class="toggle-switch"><input type="checkbox" name="is_active" ${t?e.is_active?"checked":"":"checked"}><span class="toggle-slider"></span></label>
          </div>

          <div>
            <label class="lbl">Property Videos</label>
            <div id="drop-zone" class="drop-zone" onclick="pickMediaForForm('img-upload')">
              <i data-lucide="image-plus" class="w-7 h-7 text-blue-400 mx-auto mb-2"></i>
              <p class="text-xs font-bold text-gray-300">Click or drag & drop videos</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="video/mp4,video/webm,video/*" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2 mt-3">
              ${(e.images||[]).filter(T).map((r,n)=>fe(r,n)).join("")}
            </div>
            <div id="image-url-inputs">
              ${(e.images||[]).map((r,n)=>`<input type="hidden" name="images" id="img-url-${n}" value="${l(r)}">`).join("")}
            </div>
          </div>


          <div class="flex gap-3 pt-2">
            <button type="submit" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition">${t?"ðŸ’¾ Save Changes":"ðŸš€ Publish Property"}</button>
          </div>
        </form>
      </div>
    </div>`),ut(),pt(),Tt("ppf-price"),window._propFormDirty=!!t;const s=document.getElementById("property-form");if(s){const r=()=>{window._propFormDirty=!0};s.addEventListener("input",r),s.addEventListener("change",r)}window.syncPropertyCountry=function(){na("ppf")},na("ppf"),Lt("pricing"),document.getElementById("ppf-price")?.addEventListener("input",()=>Lt("pricing")),Do()};let Y=null,Ge=null,ua=null;function Lo(){const e=document.querySelector("#property-form");if(!e)return"";const t=a=>(e.querySelector(`[name="${a}"]`)?.value||"").trim();return[t("product_location"),t("town"),t("city"),t("state"),t("country")].filter(Boolean).join(", ")}function ie(e,t){const a=document.getElementById("property-map-status");a&&(a.textContent=e,a.style.color=t?"#dc2626":"")}function Be(e,t,{reverse:a=!1}={}){if(!Y||!Number.isFinite(e)||!Number.isFinite(t))return;const i=[e,t];Ge?Ge.setLatLng(i):Ge=L.marker(i,{draggable:!0}).addTo(Y),Y.setView(i,Math.max(Y.getZoom(),13));const o=document.querySelector('#property-form [name="latitude"]'),s=document.querySelector('#property-form [name="longitude"]');o&&(o.value=String(Number(e.toFixed(6)))),s&&(s.value=String(Number(t.toFixed(6)))),a&&Mo(e,t);const r=document.getElementById("btn-open-google-map");r&&(r.href=`https://www.google.com/maps?q=${e.toFixed(6)},${t.toFixed(6)}`)}async function Ie(){const e=Lo();if(!e){ie("Enter a location (address, area, city, state, country), then press Locate from fields.");return}ie("Searching locationâ€¦");try{const a=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(e))).json();a&&a[0]?(Be(parseFloat(a[0].lat),parseFloat(a[0].lon)),ie("Located: "+a[0].display_name)):ie("Could not find that location. Check the spelling or click the map to drop the pin.",!0)}catch{ie("Map lookup failed. You can still drop the pin by clicking the map.",!0)}}async function Mo(e,t){const a=document.querySelector("#property-form");if(a)try{const o=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${t}&zoom=16`)).json(),s=o&&o.address||{},r=(h,b)=>{if(!b)return;const v=a.querySelector(`[name="${h}"]`);return v&&!String(v.value||"").trim()?(v.value=b,!0):!1},n=[s.road||"",s.house_number||""].filter(Boolean).join(" "),d=s.suburb||s.neighbourhood||s.quarter||s.district||s.borough||"",u=s.town||s.village||s.municipality||s.city_district||"",m=s.city||s.county||"",g=s.state||s.region||"",x=s.country||"";if(r("product_location",n||d||u),r("town",d||u),r("city",m),r("state",g),x){r("country",x);const h=a.querySelector('[name="country_code"]');if(h){const b=(je||[]).find(v=>String(v.name||"").toLowerCase()===String(x).toLowerCase());b&&b.code&&!h.value&&(h.value=b.code)}}ie("Pin set at "+e.toFixed(5)+", "+t.toFixed(5)+(o.display_name?" â€” "+o.display_name:""))}catch{ie("Pin set. Could not reverse-geocode the address.",!0)}}window.refreshPropertyMapFromForm=function(){if(!Y)return;const e=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),t=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);Number.isFinite(e)&&Number.isFinite(t)&&(e||t)?(Be(e,t),ie("Map updated from coordinates.")):Ie()};function Do(){const e=document.getElementById("property-map-preview");if(!e||!window.L){ie("Map unavailable right now â€” your location fields still save normally.");return}Y&&(Y.remove(),Y=null,Ge=null);const t=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),a=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value),i=Number.isFinite(t)&&Number.isFinite(a)&&(t||a);Y=L.map(e,{scrollWheelZoom:!1}).setView(i?[t,a]:[20,0],i?13:2),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(Y),Y.on("click",o=>Be(o.latlng.lat,o.latlng.lng,{reverse:!0})),document.getElementById("btn-geocode-property")?.addEventListener("click",Ie),["product_location","town","city","state","country","latitude","longitude"].forEach(o=>{const s=document.querySelector(`#property-form [name="${o}"]`);s&&(s.addEventListener("input",()=>{if(o==="latitude"||o==="longitude"){const r=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),n=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);Number.isFinite(r)&&Number.isFinite(n)&&(r||n)&&Be(r,n);return}clearTimeout(ua),ua=setTimeout(Ie,900)}),s.addEventListener("change",()=>{o!=="latitude"&&o!=="longitude"&&Ie()}))}),i?Be(t,a):Ie()}window.fixPropertyMaps=async function(){const t=(window._propertiesData||[]).filter(o=>{const s=parseFloat(o.latitude),r=parseFloat(o.longitude),n=[o.product_location,o.town,o.city,o.state,o.country].filter(Boolean).join(", ");return!(Number.isFinite(s)&&Number.isFinite(r)&&(s!==0||r!==0))&&!!n});if(!t.length){p("All properties already have map coordinates.","success");return}p(`Fixing maps for ${t.length} propert${t.length>1?"ies":"y"}â€¦`,"success");let a=0,i=0;for(const o of t){const s=[o.product_location,o.town,o.city,o.state,o.country].filter(Boolean).join(", ");try{const n=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(s))).json();if(n&&n[0]){const d={latitude:parseFloat(n[0].lat),longitude:parseFloat(n[0].lon)},{error:u}=await c.from("showroom_listings").update(d).eq("property_id",o.property_id);u?i++:(Object.assign(o,d),a++)}else i++}catch{i++}await new Promise(r=>setTimeout(r,1100))}p(`Map fix done: ${a} updated, ${i} failed.`,i?"error":"success"),mt()};window.saveProperty=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=Object.fromEntries(a.entries()),o=a.getAll("images").filter(b=>b&&!b.startsWith("blob:")&&T(b)),s=(i.features_text||"").split(",").map(b=>b.trim()).filter(Boolean),r=i.real_price===""||i.real_price==null?null:Math.max(V,Math.min(J,parseFloat(i.real_price)||0)),n=b=>(b||"").split(",").map(v=>v.trim()).filter(Boolean),d=b=>b===""||b==null||!isFinite(parseInt(b,10))?null:parseInt(b,10),u=n(i.floor_plan_rooms).map(b=>{const v=String(b).match(/^(.*?):\s*(.*)$/);return v?{name:v[1].trim(),dimensions:v[2].trim()}:{name:b,dimensions:""}}),m={listing_type:"property",category:i.property_type||"Real Estate",subcategory:i.subcategory||null,title:i.title,description:i.description||"",price:Math.max(V,Math.min(J,parseFloat(i.price)||0)),currency:i.currency||"USD",real_price:r,country:i.country||"",country_code:(i.country_code||"").toUpperCase(),state:i.state||"",city:i.city||"",town:i.town||"",address:i.address||"",zip_code:i.zip_code||"",product_location:i.product_location||"",latitude:i.latitude?parseFloat(i.latitude):null,longitude:i.longitude?parseFloat(i.longitude):null,property_type:i.property_type||"",listing_status:i.listing_status||"sale",condition:i.condition||null,bedrooms:i.bedrooms?parseInt(i.bedrooms):null,bathrooms:i.bathrooms?parseInt(i.bathrooms):null,half_bathrooms:d(i.half_bathrooms),building_size:i.building_size||"",land_size:i.land_size||"",floors:d(i.floors),garage:i.garage||"",parking_spaces:i.parking_spaces?parseInt(i.parking_spaces):null,furnished:i.furnished||"",year_built:d(i.year_built),year_renovated:d(i.year_renovated),landmarks:n(i.landmarks_text),interior_features:n(i.interior_features_text),exterior_features:n(i.exterior_features_text),home_systems:n(i.home_systems_text),legal_info:n(i.legal_info_text).map(b=>{const v=String(b).match(/^(.*?):\s*(.*?)\s*\((Seller provided|Not verified|Documented)\)\s*$/i);return v?{label:v[1].trim(),value:v[2].trim(),source:v[3]}:{label:b,value:"",source:"Not verified"}}),risk_notes:i.risk_notes||"",floor_plan:{image:i.floor_plan_image||"",rooms:u,levels:i.floor_plan_levels||"",total_area:i.floor_plan_total_area||""},nearby_area:{schools:n(i.nearby_schools_text),hospitals:n(i.nearby_hospitals_text),shopping:n(i.nearby_shopping_text),transportation:n(i.nearby_transportation_text),distances:n(i.nearby_distances_text)},verification_status:i.verification_status||"Not verified",verification_date:i.verification_date||"",inspection_info:i.inspection_info||"",documents:n(i.documents_text),features:s,images:o,video_url:(o||[]).find(b=>typeof b=="string"&&T(b))||null,video:(o||[]).find(b=>typeof b=="string"&&T(b))||null,highlights:It(i.highlights_text),seo_keywords:It(i.seo_keywords_text),is_ai_generated:!!i.catalog_template_id,ai_generated_fields:i.catalog_template_id?["title","description","features","highlights","seo_keywords","country","country_code","product_location"]:[],is_active:i.is_active==="on"},g={neighborhood:i.neighborhood||"",living_areas:i.living_areas||"",kitchens:d(i.kitchens),balconies:d(i.balconies),garden:i.garden||"",pool:i.pool||"",security:i.security||"",utilities:i.utilities||"",construction_type:i.construction_type||"",construction_status:i.construction_status||"",ownership_type:i.ownership_type||"",contact_name:i.contact_name||"",contact_phone:i.contact_phone||"",contact_email:i.contact_email||""},x={};for(const[b,v]of Object.entries({...g,real_price:r}))v!=null&&String(v).trim()!==""&&(x[b]=v);let h;if(t){m.property_id=t;const b=oe((window._propertiesData||[]).find(v=>v.property_id===t)||(window._productsData||[]).find(v=>v.property_id===t));m.specifications={...b.specifications&&typeof b.specifications=="object"?b.specifications:{},...x},{error:h}=await c.from("showroom_listings").upsert({...b,...m},{onConflict:"property_id"})}else m.property_id=it(),m.specifications={...x},{error:h}=await c.from("showroom_listings").insert(m);h&&Wa(h,()=>ze({...m,property_id:t||m.property_id}),t?"Property update":"Property publish")||(p(t?"Property updated!":"Property published!"),z(),mt())};const We={Car:"Cars",Truck:"Trucks",Bus:"Buses","Motorhome / RV":"Motorhomes",Motorcycle:"Motorcycles","Boat / Marine":"Marine & Boating"},jo=["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Bus","Motorhome","Motorcycle","Yacht","Jet Ski","Other"];window.showAddVehicleModal=function(e={}){const t=!!e.property_id,a=Object.keys(We).find(n=>We[n]===e.category)||"Car",i=e.specifications&&typeof e.specifications=="object"?e.specifications:{},o=(n,d)=>e[n]??i[n]??d,s=(n,d="")=>Array.isArray(n)?n.join(", "):n??d;U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${t?"Edit":"Add"} Vehicle — Professional Listing</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <form id="vehicle-form" onsubmit="saveVehicle(event,'${t?e.property_id:""}')" class="space-y-4">
          <div class="glass-soft border border-amber-500/15 rounded-2xl p-4">
            <div class="flex items-start gap-3">
              <span class="shrink-0 w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center"><i data-lucide="car-front" class="w-4.5 h-4.5 text-amber-400"></i></span>
              <div>
                <p class="text-xs font-bold text-white uppercase tracking-wide">Cars &amp; Trucks — Direct seller listings</p>
                <p class="text-[11px] text-gray-500 mt-0.5">This professional listing lives in the Vehicles row above Real Estate. Fill in the vehicle details below — you review everything before publishing.</p>
              </div>
            </div>
          </div>

          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="car" class="w-4 h-4 text-violet-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Overview &amp; Identity</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Vehicle Type *</label><select class="input-field" name="vehicle_type" required>${Object.keys(We).map(n=>`<option value="${n}" ${a===n?"selected":""}>${n}</option>`).join("")}</select></div>
              <div><label class="lbl">Body Type</label><select class="input-field" name="body_type">${["",...jo].map(n=>`<option value="${n}" ${o("body_type","")===n?"selected":""}>${n||"General"}</option>`).join("")}</select></div>
              <div class="sm:col-span-2"><label class="lbl">Vehicle Title *</label><input class="input-field" name="title" value="${l(e.title||"")}" placeholder="e.g. 2023 Toyota Land Cruiser V8 Turbo Diesel"></div>
              <div><label class="lbl">Brand / Make *</label><input class="input-field" name="make" value="${l(o("make",o("brand","")))}" placeholder="e.g. Toyota"></div>
              <div><label class="lbl">Model *</label><input class="input-field" name="model" value="${l(i.model||e.model||"")}" placeholder="e.g. Land Cruiser"></div>
              <div><label class="lbl">Trim / Edition</label><input class="input-field" name="trim" value="${l(o("trim",""))}" placeholder="e.g. GXR V8, Platinum, LS"></div>
              <div><label class="lbl">Model Year</label><input class="input-field" name="model_year" value="${l(o("model_year",""))}" placeholder="e.g. 2023"></div>
              <div><label class="lbl">Doors</label><input class="input-field" name="doors" value="${l(o("doors",""))}" placeholder="e.g. 4"></div>
              <div><label class="lbl">Color (Exterior)</label><input class="input-field" name="color" value="${l(e.color||i.color||"")}" placeholder="e.g. Pearl White"></div>
              <div><label class="lbl">VIN / Serial</label><input class="input-field" name="vin" value="${l(o("vin",""))}" placeholder="Optional identification number"></div>
            </div>
          </div>

          <div class="glass-soft border border-amber-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="gauge" class="w-4 h-4 text-amber-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Performance &amp; Mechanical</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Mileage</label><input class="input-field" name="mileage" value="${l(o("mileage",""))}" placeholder="e.g. 15,000 mi or 0 (new)"></div>
              <div><label class="lbl">Engine</label><input class="input-field" name="engine" value="${l(o("engine",""))}" placeholder="e.g. 4.0L V8 Turbo Diesel"></div>
              <div><label class="lbl">Horsepower</label><input class="input-field" name="horsepower" value="${l(o("horsepower",""))}" placeholder="e.g. 400 hp"></div>
              <div><label class="lbl">Transmission</label><select class="input-field" name="transmission">${["","Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"].map(n=>`<option value="${n}" ${o("transmission","")===n?"selected":""}>${n||"Not specified"}</option>`).join("")}</select></div>
              <div><label class="lbl">Fuel Type</label><select class="input-field" name="fuel_type">${["","Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"].map(n=>`<option value="${n}" ${o("fuel_type","")===n?"selected":""}>${n||"Not specified"}</option>`).join("")}</select></div>
              <div><label class="lbl">Drive Type</label><select class="input-field" name="drive_type">${["","FWD","RWD","AWD","4WD"].map(n=>`<option value="${n}" ${o("drive_type","")===n?"selected":""}>${n||"Not specified"}</option>`).join("")}</select></div>
              <div><label class="lbl">Fuel Economy</label><input class="input-field" name="fuel_economy" value="${l(o("fuel_economy",""))}" placeholder="e.g. 25 mpg combined"></div>
              <div><label class="lbl">Towing Capacity</label><input class="input-field" name="towing_capacity" value="${l(o("towing_capacity",""))}" placeholder="e.g. 7,700 lbs"></div>
              <div><label class="lbl">(${o("sleeping_capacity","")?"Sleeps":"Seating Capacity"})</label><input class="input-field" name="seating_capacity" value="${l(o("seating_capacity",""))}" placeholder="e.g. 5 seats or Sleeps 6"></div>
              <div><label class="lbl">Wheels &amp; Tires</label><input class="input-field" name="wheels_tires" value="${l(o("wheels_tires",""))}" placeholder="e.g. 2 new front, 20" alloy, 265/65 R18"></div>
              <div><label class="lbl">Dimensions (L × W × H)</label><input class="input-field" name="dimensions" value="${l(o("dimensions",""))}" placeholder="e.g. 4,950 x 1,980 x 1,890 mm"></div>
              <div><label class="lbl">Cargo Capacity</label><input class="input-field" name="cargo_capacity" value="${l(o("cargo_capacity",""))}" placeholder="e.g. 2,000 L / 5 seats up"></div>
            </div>
          </div>

          <div class="glass-soft border border-emerald-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="shield-check" class="w-4 h-4 text-emerald-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Condition, History &amp; Ownership</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Condition *</label><select class="input-field" name="condition" required>${["","New","Used - Like New","Used - Good","Used - Fair","Refurbished"].map(n=>`<option value="${n}" ${o("condition","")===n?"selected":""}>${n||"Select condition"}</option>`).join("")}</select></div>
              <div><label class="lbl">Previous Owners</label><input class="input-field" name="previous_owners" value="${l(o("previous_owners",""))}" placeholder="e.g. 1 or None (new)"></div>
              <div class="sm:col-span-2"><label class="lbl">Ownership History</label><textarea class="input-field" name="ownership_history" rows="2" placeholder="e.g. Single owner, always garaged, clean title">${l(o("ownership_history",""))}</textarea></div>
              <div class="sm:col-span-2"><label class="lbl">Service / Maintenance History</label><textarea class="input-field" name="service_history" rows="2" placeholder="e.g. Full dealer service every 5,000 mi, new brakes 2024">${l(o("service_history",""))}</textarea></div>
              <div class="sm:col-span-2"><label class="lbl">Accident / Damage History</label><textarea class="input-field" name="accident_history" rows="2" placeholder="e.g. Accident-free, or: minor rear bumper repair 2022">${l(o("accident_history",""))}</textarea></div>
              <div><label class="lbl">Registration Status</label><select class="input-field" name="registration_status">${["","Registered","Unregistered","Registration Pending"].map(n=>`<option value="${n}" ${o("registration_status","")===n?"selected":""}>${n||"Not specified"}</option>`).join("")}</select></div>
              <div><label class="lbl">Inspection Status</label><select class="input-field" name="inspection_status">${["","Inspected & Certified","Inspected","Not Inspected","Under Inspection"].map(n=>`<option value="${n}" ${o("inspection_status","")===n?"selected":""}>${n||"Not specified"}</option>`).join("")}</select></div>
            </div>
          </div>

          <div class="glass-soft border border-rose-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="cpu" class="w-4 h-4 text-rose-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Safety, Technology &amp; Interior</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Safety Features (comma separated)</label><input class="input-field" name="safety_features" value="${l(typeof o("safety_features",[]).join=="function"?o("safety_features",[]).join(", "):o("safety_features",""))}" placeholder="ABS, Airbags, Lane Assist, Traction Control, 360 Camera"></div>
              <div class="sm:col-span-2"><label class="lbl">Driver Assistance</label><input class="input-field" name="driver_assistance" value="${l(s(o("driver_assistance","")))}" placeholder="Adaptive Cruise, Auto Emergency Braking, Blind-spot Monitor"></div>
              <div class="sm:col-span-2"><label class="lbl">Technology &amp; Infotainment</label><input class="input-field" name="technology" value="${l(s(o("technology","")))}" placeholder="Apple CarPlay, Navigation, BOSE sound, Reverse camera"></div>
              <div class="sm:col-span-2"><label class="lbl">Interior &amp; Comfort</label><input class="input-field" name="interior" value="${l(s(o("interior","")))}" placeholder="Leather seats, Heated front seats, Sunroof, AC"></div>
            </div>
          </div>

          <div class="glass-soft border border-sky-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="badge-dollar-sign" class="w-4 h-4 text-sky-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Price, Warranty, Location &amp; Seller</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Price (USD) *</label><input type="number" class="input-field" name="price" value="${e.price||""}" required placeholder="0"></div>
              <div><label class="lbl">Real Price (crossed out)</label><input type="number" class="input-field" name="real_price" value="${e.real_price??i.real_price??""}" placeholder="Original price before discount"></div>
              <div><label class="lbl">Stock Qty</label><input type="number" class="input-field" name="stock_quantity" value="${e.stock_quantity??"1"}"></div>
              <div><label class="lbl">Warranty</label><input class="input-field" name="warranty" value="${l(e.warranty||i.warranty||"")}" placeholder="e.g. 3-year manufacturer"></div>
              <div class="sm:col-span-2"><label class="lbl">Listing Location</label><input class="input-field" name="location" value="${l(o("location",""))}" placeholder="e.g. Houston, TX, United States"></div>
              <div><label class="lbl">Seller / Contact Name</label><input class="input-field" name="seller_name" value="${l(o("seller_name",""))}" placeholder="e.g. James Carter"></div>
              <div><label class="lbl">Seller Phone / WhatsApp</label><input class="input-field" name="seller_phone" value="${l(o("seller_phone",""))}" placeholder="e.g. +1 555 010 2233"></div>
              <div><label class="lbl">Seller Email</label><input class="input-field" name="seller_email" value="${l(o("seller_email",""))}" placeholder="e.g. james@example.com"></div>
            </div>
          </div>

          <div class="glass-soft border border-blue-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="photo" class="w-4 h-4 text-blue-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Description &amp; Media</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Description</label><textarea class="input-field" name="description" rows="4" placeholder="Clear, professional description of the vehicle, its condition, extras and service history...">${l(e.description||"")}</textarea></div>
              <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${l((e.features||[]).join(", "))}" placeholder="Leather seats, Sunroof, GPS, Heated seats, Roof rack"></div>
            </div>
            <div>
              <label class="lbl">Vehicle Videos</label>
              <div id="drop-zone" class="drop-zone" onclick="pickMediaForForm('img-upload')">
                <i data-lucide="image-plus" class="w-7 h-7 text-blue-400 mx-auto mb-2"></i>
                <p class="text-xs font-bold text-gray-300">Click or drag &amp; drop videos</p>
                <input type="file" id="img-upload" class="hidden" multiple accept="video/mp4,video/webm,video/*" onchange="handleImageUpload(event)">
              </div>
              <div id="image-preview" class="flex flex-wrap gap-2 mt-3">
                ${(e.images||[]).filter(T).map((n,d)=>fe(n,d)).join("")}
              </div>
              <div id="image-url-inputs">
                ${(e.images||[]).filter(T).map((n,d)=>`<input type="hidden" name="images" id="img-url-${d}" value="${l(n)}">`).join("")}
              </div>
            </div>
            <label class="flex items-center gap-2.5 cursor-pointer select-none mt-2"><input type="checkbox" name="is_active" ${e.is_active===!1?"":"checked"} class="w-4 h-4 accent-emerald-500"><span class="text-xs font-bold text-gray-300">Publish immediately</span></label>
          </div>

          <div class="flex items-center justify-between gap-3">
            <button type="button" onclick="closeModal()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition">Cancel</button>
            <button type="submit" class="btn-press flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-sm font-black px-7 py-3 rounded-2xl transition shadow-xl shadow-orange-700/25">Publish Vehicle</button>
          </div>
        </form>
      </div>
    </div>`),ut(),pt(),window._vehFormDirty=!!t;const r=document.getElementById("vehicle-form");if(r){const n=()=>{window._vehFormDirty=!0};r.addEventListener("input",n),r.addEventListener("change",n)}window.lucide&&lucide.createIcons()};window.saveVehicle=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=Object.fromEntries(a.entries()),o=[...a.getAll("images")].filter(k=>k&&!String(k).startsWith("blob:")&&T(k)).concat(String(i.images_text||"").split(/\r?\n/).map(k=>k.trim()).filter(T)),s=[...new Set(o)],r=(i.features_text||"").split(",").map(k=>k.trim()).filter(Boolean),n=(i.safety_features||"").split(",").map(k=>k.trim()).filter(Boolean),d=(i.driver_assistance||"").split(",").map(k=>k.trim()).filter(Boolean),u=(i.technology||"").split(",").map(k=>k.trim()).filter(Boolean),m=(i.interior||"").split(",").map(k=>k.trim()).filter(Boolean),g=i.real_price===""||i.real_price==null?null:Math.max(V,Math.min(J,parseFloat(i.real_price)||0)),x=We[i.vehicle_type]||"Cars",h=String(i.model_year||"").trim(),b=String(i.make||"").trim(),v=String(i.model||"").trim(),B=[h,b,v].filter(Boolean).join(" ")||String(i.title||"").trim(),E={make:b,model:v,model_year:h,body_type:i.body_type||null,trim:i.trim||"",mileage:i.mileage||"",engine:i.engine||"",horsepower:i.horsepower||"",transmission:i.transmission||null,drive_type:i.drive_type||null,fuel_type:i.fuel_type||null,fuel_economy:i.fuel_economy||"",towing_capacity:i.towing_capacity||"",seating_capacity:i.seating_capacity||null,sleeping_capacity:x==="Motorhomes"&&i.seating_capacity||null,doors:i.doors||null,safety_features:n,driver_assistance:d,technology:u,interior:m,wheels_tires:i.wheels_tires||"",dimensions:i.dimensions||"",cargo_capacity:i.cargo_capacity||"",ownership_history:i.ownership_history||"",service_history:i.service_history||"",accident_history:i.accident_history||"",previous_owners:i.previous_owners||"",registration_status:i.registration_status||null,inspection_status:i.inspection_status||null,color:i.color||"",vin:i.vin||"",warranty:i.warranty||"",condition:i.condition||"",location:i.location||"",seller_name:i.seller_name||"",seller_phone:i.seller_phone||"",seller_email:i.seller_email||"",product_location:i.location||""};for(const k of Object.keys(E))E[k]==null&&delete E[k];const C={listing_type:"vehicle",category:x,subcategory:i.body_type||i.vehicle_type||null,title:String(i.title||"").trim()||B,description:i.description||"",price:Math.max(V,Math.min(J,parseFloat(i.price)||0)),currency:"USD",real_price:g,images:s,features:r,brand:b||null,color:i.color||null,condition:i.condition||null,warranty:i.warranty||null,stock_quantity:parseInt(i.stock_quantity,10)||1,is_active:i.is_active==="on",is_featured:!1,specifications:{...E,real_price:g}};let _;if(t){C.property_id=t;const k=oe((window._productsData||[]).find(ve=>ve.property_id===t));C.specifications={...k.specifications&&typeof k.specifications=="object"?k.specifications:{},...E,real_price:g},{error:_}=await c.from("showroom_listings").upsert({...k||{},...C},{onConflict:"property_id"})}else C.property_id=it(),{error:_}=await c.from("showroom_listings").insert(C);_&&Wa(_,()=>ze({...C,property_id:t||C.property_id}),t?"Vehicle update":"Vehicle publish")||(p(t?"Vehicle updated!":"Vehicle published! It now appears in the Cars & Trucks row."),z(),D())};window.editProperty=async function(e){const{data:t,error:a}=await c.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=a?null:t;i||(i=ke(e)),i||(i=(Array.isArray(Q)?Q.find(o=>o.property_id===e):null)||null),i&&showAddPropertyModal(i)};const Ro=["pending_verification","payment_received","payment_approved","documentation_pending","refund_processing","processing","shipped","in_transit","out_for_delivery","delivered","order_completed","cancelled","rejected"];async function Jt(){const e=document.getElementById("content");try{const{data:t}=await c.from("payment_receipts").select("*").order("created_at",{ascending:!1}).limit(300),a=t||[],i=["All","Pending Verification","Paid","Documentation","Processing","Shipped","Delivered","Rejected"];let o="All";e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Orders Manager</h2>
        <div class="flex gap-2 flex-wrap" id="order-tabs">
          ${i.map(s=>`<button class="tab-btn ${s==="All"?"active":""}" onclick="filterOrders('${s}')">${s}</button>`).join("")}
        </div>
        <div class="flex gap-3">
          <div class="flex-1 relative">
            <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
            <input type="search" class="input-field pl-9" placeholder="Search order, email, nameâ€¦" oninput="searchOrders(this.value)">
          </div>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr>
                <th>Order #</th><th>Customer</th><th>Product</th>
                <th class="hidden sm:table-cell">Amount</th><th>Status</th>
                <th class="hidden md:table-cell">Date</th><th>Actions</th>
              </tr></thead>
              <tbody id="orders-tbody">
                ${a.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-12">No orders yet</td></tr>':a.map(s=>qo(s)).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._ordersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}function qo(e){return`<tr class="order-row" data-status="${e.status}" data-search="${l(e.order_number)} ${l(e.full_name)} ${l(e.email)}">
    <td><span class="font-mono text-xs text-blue-400 font-bold">${l(e.order_number||e.id?.slice(0,8))}</span></td>
    <td>
      <p class="text-xs font-bold text-white">${l(e.full_name||"Guest")}</p>
      <p class="text-[10px] text-gray-500">${l(e.email)}</p>
    </td>
    <td><p class="text-xs text-gray-300 truncate max-w-[140px]">${l(e.listing_title||e.listing_id||"â€”")}</p></td>
    <td class="hidden sm:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(e.amount||0).toLocaleString()}</span></td>
    <td>${O(e.status)}</td>
    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${X(e.created_at)}</span></td>
    <td>
      <button onclick="viewOrder('${e.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="View / Update">
        <i data-lucide="eye" class="w-3.5 h-3.5"></i>
      </button>
    </td>
  </tr>`}window.filterOrders=function(e){document.querySelectorAll("#order-tabs .tab-btn").forEach(t=>t.classList.toggle("active",t.textContent===e)),document.querySelectorAll(".order-row").forEach(t=>{const a=t.dataset.status||"",i=e==="All"||e==="Pending Verification"&&["pending_verification","payment_received","order_placed","receipt_requested"].includes(a)||e==="Paid"&&["payment_approved","payment_verified","paid","approved"].includes(a)||e==="Documentation"&&["documentation_pending"].includes(a)||e==="Processing"&&["processing","order_processing"].includes(a)||e==="Shipped"&&["shipped","order_shipped","in_transit","out_for_delivery"].includes(a)||e==="Delivered"&&["delivered","order_delivered","order_completed"].includes(a)||e==="Rejected"&&["cancelled","rejected","refund_processing","payment_failed"].includes(a);t.style.display=i?"":"none"})};window.searchOrders=function(e){const t=e.toLowerCase();document.querySelectorAll(".order-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewOrder=async function(e){const t=(window._ordersData||[]).find(i=>i.id===e);if(!t)return;let a="";if(t.receipt_file_path&&(a=`
      <div class="p-3 glass-soft border border-blue-500/15 rounded-xl">
        <p class="text-[10px] text-gray-500 font-bold uppercase mb-1.5 flex items-center justify-between">
          <span><i data-lucide="receipt" class="w-3.5 h-3.5 inline mr-1 align-[-2px]"></i> Payment Receipt ${t.receipt_file_name?"("+l(t.receipt_file_name)+")":""}</span>
          <a href="#" data-receipt-view="true" class="text-blue-400 hover:underline font-bold uppercase">View</a>
        </p>
        <iframe data-receipt-iframe="true" class="w-full h-40 rounded-lg bg-black/20 border border-blue-500/10 mt-1" title="Receipt preview"></iframe>
      </div>`),U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Order ${l(t.order_number)}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="space-y-3 text-sm">
          <div class="grid grid-cols-2 gap-3">
            ${[["Customer",t.full_name],["Email",t.email],["Phone",t.phone],["Amount",`${Ma(t.amount,t.currency||"USD")}`],["Product",t.listing_title||t.listing_id],["Date",ue(t.created_at)],["Method",t.payment_method==="flutterwave"?"Card / ATM (Flutterwave)":"Manual Bank Transfer"],["Qty",t.quantity||1]].map(([i,o])=>`<div><p class="text-[10px] text-gray-500 uppercase font-bold mb-0.5">${i}</p><p class="text-xs text-white font-medium">${l(o)||"—"}</p></div>`).join("")}
          </div>
          ${t.guest_shipping_address?`<div><p class="text-[10px] text-gray-500 uppercase font-bold mb-0.5">Shipping Address</p><p class="text-xs text-gray-300">${l(t.guest_shipping_address||t.billing_address)||"—"}</p></div>`:""}
          ${t.transaction_reference?`<div class="p-3 glass-soft border border-blue-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Transaction Reference</p><p class="text-xs font-mono text-blue-300">${l(t.transaction_reference)}</p></div>`:""}
          ${t.additional_notes?`<div class="p-3 glass-soft border border-amber-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Notes</p><p class="text-xs text-gray-300">${l(t.additional_notes)}</p></div>`:""}
          ${a}
          <div>
            <label class="lbl">Verification Actions</label>
            <div class="grid grid-cols-2 gap-2">
              <button onclick="quickOrderAction('${t.id}','payment_approved')" class="btn-press px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition"><i data-lucide="shield-check" class="w-3.5 h-3.5 inline mr-1 align-[-2px]"></i> Approve Payment</button>
              <button onclick="quickOrderAction('${t.id}','documentation_pending')" class="btn-press px-3 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-xl transition"><i data-lucide="file-question" class="w-3.5 h-3.5 inline mr-1 align-[-2px]"></i> Request Docs</button>
              <button onclick="quickOrderAction('${t.id}','rejected')" class="btn-press px-3 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl transition"><i data-lucide="x-circle" class="w-3.5 h-3.5 inline mr-1 align-[-2px]"></i> Reject Payment</button>
              <button onclick="quickOrderAction('${t.id}','refund_processing')" class="btn-press px-3 py-2 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded-xl transition"><i data-lucide="rotate-ccw" class="w-3.5 h-3.5 inline mr-1 align-[-2px]"></i> Refund Processing</button>
            </div>
          </div>
          <div>
            <label class="lbl">Update Order Status</label>
            <div class="flex gap-2">
              <select id="order-status-select" class="input-field flex-1">
                ${Ro.map(i=>`<option value="${i}" ${t.status===i?"selected":""}>${i.replace(/_/g," ")}</option>`).join("")}
              </select>
              <button onclick="updateOrderStatus('${t.id}')" class="btn-press px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition">Update</button>
            </div>
          </div>
          <div>
            <label class="lbl">Admin Notes</label>
            <textarea id="order-admin-notes" rows="2" class="input-field w-full" placeholder="Verification notes…">${l(t.admin_notes||"")}</textarea>
            <button onclick="saveOrderAdminNotes('${t.id}')" class="btn-press mt-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold rounded-xl transition">Save Notes</button>
          </div>
        </div>
      </div>
    </div>`),t.receipt_file_path)try{const{data:i,error:o}=await c.storage.from("payment-receipts").createSignedUrl(t.receipt_file_path,3600),s=!o&&i?.signedUrl?i.signedUrl:null,r=document.querySelector('[data-receipt-iframe="true"]'),n=document.querySelector('[data-receipt-view="true"]');r&&s&&(r.src=s),n&&s&&(n.href=s),n&&!s&&n.remove()}catch{}};window.saveOrderAdminNotes=async function(e){const t=document.getElementById("order-admin-notes")?.value,{error:a}=await c.from("payment_receipts").update({admin_notes:t||null,admin_reviewed_at:new Date().toISOString()}).eq("id",e);if(a){p(a.message,"error");return}p("Notes saved")};window.quickOrderAction=async function(e,t){const{error:a}=await c.from("payment_receipts").update({status:t,admin_reviewed_at:new Date().toISOString()}).eq("id",e);if(a){p(a.message,"error");return}p("Order updated to "+t.replace(/_/g," ")),z(),Jt()};window.updateOrderStatus=async function(e){const t=document.getElementById("order-status-select")?.value;if(!t)return;const{error:a}=await c.from("payment_receipts").update({status:t,admin_reviewed_at:new Date().toISOString()}).eq("id",e);if(a){p(a.message,"error");return}p("Order status updated"),z(),Jt()};async function Fo(){const e=document.getElementById("content");try{const{data:t}=await c.from("profiles").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Customers Manager</h2>
          <span class="text-sm text-gray-400 font-medium">${a.length} total</span>
        </div>
        <div class="relative">
          <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
          <input type="search" class="input-field pl-9" placeholder="Search customersâ€¦" oninput="searchCustomers(this.value)">
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Customer</th><th class="hidden sm:table-cell">Country</th><th class="hidden md:table-cell">Joined</th><th>Actions</th></tr></thead>
              <tbody id="customers-tbody">
                ${a.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-12">No customers yet</td></tr>':a.map(i=>`<tr class="cust-row" data-search="${l(i.display_name)} ${l(i.user_id)}">
                    <td>
                      <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                          <i data-lucide="user" class="w-4 h-4 text-blue-400"></i>
                        </div>
                        <div>
                          <p class="text-xs font-bold text-white">${l(i.display_name||"Anonymous")}</p>
                          <p class="text-[10px] font-mono text-gray-500">${l(i.user_id?.slice(0,12))}â€¦</p>
                        </div>
                      </div>
                    </td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-300">${l(i.country_code||"â€”")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${X(i.created_at)}</span></td>
                    <td>
                      <button onclick="viewCustomer('${i.user_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="eye" class="w-3.5 h-3.5"></i></button>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._customersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.searchCustomers=function(e){const t=e.toLowerCase();document.querySelectorAll(".cust-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewCustomer=async function(e){const t=(window._customersData||[]).find(i=>i.user_id===e);if(!t)return;const{data:a}=await c.from("payment_receipts").select("order_number,amount,currency,status,created_at").eq("user_id",e).order("created_at",{ascending:!1}).limit(20);U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Customer Profile</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="flex items-center gap-4 mb-5 p-4 glass-soft border border-blue-500/15 rounded-xl">
          <div class="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
            <i data-lucide="user" class="w-6 h-6 text-blue-400"></i>
          </div>
          <div>
            <p class="font-black text-white">${l(t.display_name||"Anonymous")}</p>
            <p class="text-xs text-gray-400 mt-0.5">Joined ${X(t.created_at)} Â· ${l(t.country_code||"Unknown country")}</p>
          </div>
        </div>
        <h4 class="text-xs font-bold text-gray-400 uppercase mb-3">Purchase History</h4>
        ${(a||[]).length===0?'<p class="text-xs text-gray-500 py-4 text-center">No orders yet</p>':(a||[]).map(i=>`<div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
            <div><p class="text-xs font-bold text-white font-mono">${l(i.order_number)}</p><p class="text-[10px] text-gray-500">${ue(i.created_at)}</p></div>
            <div class="flex items-center gap-2">${O(i.status)}<span class="text-xs font-bold text-emerald-400">$${parseFloat(i.amount).toLocaleString()}</span></div>
          </div>`).join("")}
      </div>
    </div>`)};async function Ue(){const e=document.getElementById("content");try{const{data:t}=await c.from("product_reviews").select("*, showroom_listings(title, property_id)").order("created_at",{ascending:!1}).limit(200),a=t||[],i=a.filter(n=>!n.is_approved).length,{data:o}=await c.from("site_feedback").select("*").order("created_at",{ascending:!1}).limit(200),s=o||[],r=s.filter(n=>!n.is_approved).length;e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Reviews & Feedback Manager</h2>
          ${i+r>0?`<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">${i+r} pending</span>`:""}
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="star" class="w-4 h-4 text-amber-400"></i> Product Reviews</h3>
            <div class="flex gap-2 ml-auto">
              <button onclick="filterReviewTab('all')" class="tab-btn active" id="rtab-all">All Reviews</button>
              <button onclick="filterReviewTab('pending')" class="tab-btn" id="rtab-pending">Pending (${i})</button>
              <button onclick="filterReviewTab('approved')" class="tab-btn" id="rtab-approved">Approved</button>
            </div>
          </div>
          <div class="space-y-3" id="reviews-list">
            ${a.length===0?pe("star","No Reviews","Customer reviews will appear here."):a.map(n=>No(n)).join("")}
          </div>
        </div>

        <div class="glass-soft border border-emerald-500/15 rounded-2xl p-5 space-y-4">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="message-square-text" class="w-4 h-4 text-emerald-400"></i> Customer Feedback (site-wide)</h3>
            ${r>0?`<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">${r} pending</span>`:""}
          </div>
          <p class="text-[11px] text-gray-500">Feedback submitted from the "Feedback" form on every page. Approve to show it in the public "View more Feedback" list.</p>
          <div class="space-y-3" id="feedback-list">
            ${s.length===0?pe("message-square","No Feedback Yet","Site feedback will appear here."):s.map(n=>Uo(n)).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}function Uo(e){const t=Array.from({length:5},(a,i)=>i<(e.rating||5)?"â˜…":"â˜†").join("");return`<div class="glass-soft border ${e.is_approved?"border-emerald-500/15":"border-amber-500/20"} rounded-xl p-4" data-fb-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          <span class="text-amber-400 font-bold text-sm">${t}</span>
          <span class="text-xs font-black text-white">${l(e.name||"Anonymous shopper")}</span>
          <span class="text-xs text-gray-500">${l(e.email||"no email")} Â· ${X(e.created_at)}</span>
          ${e.is_approved?'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>':'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending</span>'}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${l(e.feedback||"â€”")}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${e.is_approved?"":`<button onclick="approveFeedback('${e.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>`}
        <button onclick="deleteFeedback('${e.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`}window.approveFeedback=async function(e){const{error:t}=await c.from("site_feedback").update({is_approved:!0}).eq("id",e);t?p(t.message,"error"):p("Feedback approved â€” it now shows on every page."),Ue()};window.deleteFeedback=async function(e){if(!confirm("Delete this feedback permanently?"))return;const{error:t}=await c.from("site_feedback").delete().eq("id",e);t?p(t.message,"error"):p("Feedback deleted."),Ue()};function No(e){const t=Array.from({length:5},(a,i)=>i<e.rating?"â˜…":"â˜†").join("");return`<div class="review-card glass-soft border ${e.is_approved?"border-blue-500/15":"border-amber-500/20"} rounded-xl p-4" data-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-amber-400 font-bold text-sm">${t}</span>
          <span class="text-xs text-gray-500">${X(e.created_at)}</span>
          ${e.is_approved?'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>':'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending Approval</span>'}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${l(e.comment||e.review_text||"â€”")}</p>
        <p class="text-[11px] text-blue-400 mt-1.5">On: ${l(e.showroom_listings?.title||e.listing_id)}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${e.is_approved?"":`<button onclick="approveReview('${e.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>`}
        <button onclick="deleteReview('${e.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`}window.filterReviewTab=function(e){["all","pending","approved"].forEach(t=>document.getElementById(`rtab-${t}`)?.classList.toggle("active",t===e)),document.querySelectorAll(".review-card").forEach(t=>{const a=e==="all"||e==="pending"&&t.dataset.approved==="false"||e==="approved"&&t.dataset.approved==="true";t.style.display=a?"":"none"})};window.approveReview=async function(e){await c.from("product_reviews").update({is_approved:!0}).eq("id",e),p("Review approved"),Ue()};window.deleteReview=async function(e){confirm("Delete this review permanently?")&&(await c.from("product_reviews").delete().eq("id",e),p("Review deleted"),Ue())};async function Xa(){const e=document.getElementById("content");try{const{data:t}=await c.from("support_messages").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Messages & Support</h2>
        <div class="space-y-3">
          ${a.length===0?pe("message-circle","No Messages","Customer support messages will appear here."):a.map(i=>`
              <div class="glass-soft border ${i.is_read?"border-blue-500/10":"border-blue-400/30"} rounded-xl p-4 ${i.is_read?"":"ring-1 ring-blue-500/10"}">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs font-black text-white">${l(i.full_name||i.name||"Anonymous")}</span>
                      ${i.is_read?"":'<span class="badge bg-blue-500/15 text-blue-400 border-blue-500/20">New</span>'}
                      <span class="text-[10px] text-gray-500 ml-auto">${ue(i.created_at)}</span>
                    </div>
                    <p class="text-[11px] text-blue-400 mb-1">${l(i.email||"â€”")}</p>
                    <p class="text-xs text-gray-300">${l(i.message||i.body||"â€”")}</p>
                    ${i.subject?`<p class="text-[11px] text-gray-500 mt-1">Subject: ${l(i.subject)}</p>`:""}
                  </div>
                  <div class="flex gap-1 shrink-0">
                    <button onclick="markMsgRead('${i.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Mark Read"><i data-lucide="check" class="w-4 h-4"></i></button>
                  </div>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.markMsgRead=async function(e){await c.from("support_messages").update({is_read:!0}).eq("id",e),p("Marked as read"),Xa()};async function gt(){const e=document.getElementById("content");try{const{data:t}=await c.from("coupons").select("*").order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Coupons Manager</h2>
          <button onclick="showAddCouponModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Coupon
          </button>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Code</th><th>Type</th><th>Value</th><th class="hidden sm:table-cell">Min Amount</th><th>Status</th><th class="hidden md:table-cell">Expires</th><th>Actions</th></tr></thead>
              <tbody>
                ${a.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-12">No coupons yet</td></tr>':a.map(i=>`<tr>
                    <td><code class="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">${l(i.code)}</code></td>
                    <td><span class="text-xs text-gray-300">${i.discount_type==="percent"?"Percentage":"Fixed Amount"}</span></td>
                    <td><span class="text-xs font-bold text-emerald-400">${i.discount_type==="percent"?i.discount_value+"%":"$"+i.discount_value}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${i.min_amount?"$"+i.min_amount:"â€”"}</span></td>
                    <td>${O(i.is_active?"active":"inactive")}</td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${X(i.expires_at)}</span></td>
                    <td>
                      <div class="flex gap-1">
                        <button onclick="toggleCoupon('${i.id}',${!i.is_active})" class="btn-press p-1.5 ${i.is_active?"text-amber-400 hover:bg-amber-500/10":"text-emerald-400 hover:bg-emerald-500/10"} rounded-lg transition"><i data-lucide="${i.is_active?"eye-off":"eye"}" class="w-3.5 h-3.5"></i></button>
                        <button onclick="deleteCoupon('${i.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                      </div>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.showAddCouponModal=function(){U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Create Coupon</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <form id="coupon-form" onsubmit="saveCoupon(event)" class="space-y-4">
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Coupon Code *</label><input class="input-field uppercase" name="code" required placeholder="e.g. SAVE20" style="text-transform:uppercase"></div>
            <div><label class="lbl">Discount Type *</label><select class="input-field" name="discount_type" required>
              <option value="percent">Percentage (%)</option>
              <option value="fixed">Fixed Amount ($)</option>
            </select></div>
            <div><label class="lbl">Discount Value *</label><input type="number" class="input-field" name="discount_value" required min="0" step="0.01" placeholder="e.g. 20"></div>
            <div><label class="lbl">Minimum Order Amount</label><input type="number" class="input-field" name="min_amount" min="0" placeholder="0"></div>
            <div><label class="lbl">Usage Limit</label><input type="number" class="input-field" name="usage_limit" min="1" placeholder="Unlimited"></div>
            <div><label class="lbl">Expiry Date</label><input type="date" class="input-field" name="expires_at"></div>
          </div>
          <button type="submit" class="btn-press w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl text-sm transition">Create Coupon</button>
        </form>
      </div>
    </div>`)};window.saveCoupon=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={code:a.code.toUpperCase(),discount_type:a.discount_type,discount_value:parseFloat(a.discount_value),min_amount:a.min_amount?parseFloat(a.min_amount):null,usage_limit:a.usage_limit?parseInt(a.usage_limit):null,expires_at:a.expires_at||null,is_active:!0},{error:o}=await c.from("coupons").insert(i);if(o){p(o.message,"error");return}p("Coupon created!"),z(),gt()};window.toggleCoupon=async function(e,t){await c.from("coupons").update({is_active:t}).eq("id",e),p(t?"Coupon activated":"Coupon deactivated"),gt()};window.deleteCoupon=async function(e){confirm("Delete this coupon?")&&(await c.from("coupons").delete().eq("id",e),p("Coupon deleted"),gt())};async function Oo(){const e=document.getElementById("content");try{const{data:t}=await c.from("notification_log").select("*").order("created_at",{ascending:!1}).limit(100),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Notifications</h2>
        <div class="space-y-2">
          ${a.length===0?pe("bell","No Notifications","System notifications will appear here."):a.map(i=>`
              <div class="glass-soft border border-blue-500/10 rounded-xl p-3.5 flex items-start gap-3">
                <div class="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <i data-lucide="bell" class="w-4 h-4 text-blue-400"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-0.5">
                    <span class="text-xs font-bold text-white">${l(i.subject||i.event_type||"Notification")}</span>
                    ${O(i.status)}
                    <span class="text-[10px] text-gray-500 ml-auto">${ue(i.created_at)}</span>
                  </div>
                  <p class="text-[11px] text-gray-400">${l(i.recipient||i.order_number)}</p>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}const Za=["Featured","Sponsored","Featured Collection","Discover","Promotion"],Ho=[{id:"real-estate",name:"Real Estate & Properties"},{id:"marketplace",name:"Marketplace Showroom"}];let He=null;function Vo(e){const t={Featured:"bg-blue-500/10 text-blue-300 border-blue-500/30",Sponsored:"bg-violet-500/10 text-violet-300 border-violet-500/30","Featured Collection":"bg-amber-500/10 text-amber-300 border-amber-500/30",Discover:"bg-emerald-500/10 text-emerald-300 border-emerald-500/30",Promotion:"bg-blue-500/10 text-blue-300 border-blue-500/30"};return`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${t[e]||t.Featured}">${l(e)}</span>`}function Go(e){return!e||!e.link_type||e.link_type==="none"?'<span class="text-[10px] text-gray-500">No link</span>':e.link_type==="product"?`<span class="text-[10px] text-blue-300"><i data-lucide="package" class="w-3 h-3 inline mr-1"></i>Product Â· ${l(e.link_target||"")}</span>`:e.link_type==="category"?`<span class="text-[10px] text-emerald-300"><i data-lucide="tag" class="w-3 h-3 inline mr-1"></i>Category Â· ${l(e.link_target||"")}</span>`:`<span class="text-[10px] text-amber-300"><i data-lucide="layout-grid" class="w-3 h-3 inline mr-1"></i>Section Â· ${l(e.link_target||"")}</span>`}function Wo(e){return e.video_url?`<video src="${l(e.video_url)}" ${e.poster_url?`poster="${l(e.poster_url)}"`:""} class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" muted preload="metadata"></video>`:e.image_url?`<img src="${l(e.image_url)}" class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" onerror="this.remove()">`:'<div class="w-24 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="megaphone" class="w-6 h-6 text-blue-400"></i></div>'}async function ei(){if(He)return He;const e=[],t=new Set,a=[],i=s=>{if(!s||!s.property_id)return;e.push({id:s.property_id,title:s.title||s.property_id});const r=s.category||"";r&&!t.has(r)&&(t.add(r),a.push(r))};try{Q.forEach(i)}catch{}try{const{data:s,error:r}=await c.from("showroom_listings").select("property_id,title,category").order("created_at",{ascending:!1});!r&&s&&s.forEach(i)}catch{}return["Women","Men","Kids","Home","Sports","Jewellery","Electronics","Cars","Motorcycles","Phones","Computers","Furniture","Beauty","Fashion","Real Estate","Bicycles","Trucks","Land","Kitchen","Food","Pets","Books","Toys","Services"].forEach(s=>{t.has(s)||(t.add(s),a.push(s))}),He={products:e,categories:a,sections:Ho},He}async function zo(e){try{const{data:{session:t}}=await c.auth.getSession();if(!t)return p("Sign in to upload media","error"),null;const a=(e.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),i=/^(mp4|webm|mov|m4v)$/.test(a)||e.type.startsWith("video/"),o=`ads/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${a}`,{error:s}=await c.storage.from("advertisements").upload(o,e,{contentType:e.type,upsert:!1});if(s)return p("Upload failed: "+s.message,"error"),null;const{data:r}=c.storage.from("advertisements").getPublicUrl(o);return{url:r.publicUrl,isVideo:i}}catch{return p("Upload failed","error"),null}}function Qe(e,t){const a=document.getElementById("ad-media-preview");if(!a)return;const i=document.getElementById("ad-hidden-video"),o=document.getElementById("ad-hidden-image");i&&(i.value=t?e:""),o&&(o.value=t?"":e),a.innerHTML=t?`<video src="${l(e)}" class="w-full h-40 object-cover rounded-xl" controls muted playsinline></video>`:`<img src="${l(e)}" class="w-full h-40 object-cover rounded-xl">`,window.lucide&&lucide.createIcons()}window.onAdMediaPicked=async function(e){const t=e.files&&e.files[0];if(!t)return;if(!(t.type.startsWith("image/")||t.type.startsWith("video/"))){p("Choose an image or video file","error");return}const i=await zo(t);if(!i){e.value="";return}Qe(i.url,i.isVideo);const o=document.getElementById("ad-media-url");o&&(o.value=i.url)};window.onAdMediaUrl=function(e){const t=(e.value||"").trim();if(!t)return;const a=/\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(t);Qe(t,a)};function Xt(e,t,a){const i=document.getElementById("ad-link-target-wrap");if(!i)return;if(!t||t==="none"){i.innerHTML='<p class="text-[10px] text-gray-500">This ad is informational and will not be clickable.</p>';return}let o="";t==="product"?o='<option value="">Select a productâ€¦</option>'+e.products.map(s=>`<option value="${l(s.id)}" ${String(a)===String(s.id)?"selected":""}>${l(s.id)} â€” ${l((s.title||"").slice(0,60))}</option>`).join(""):t==="category"?o='<option value="">Select a categoryâ€¦</option>'+e.categories.map(s=>`<option value="${l(s)}" ${a===s?"selected":""}>${l(s)}</option>`).join(""):t==="section"&&(o='<option value="">Select a sectionâ€¦</option>'+e.sections.map(s=>`<option value="${l(s.id)}" ${a===s.id?"selected":""}>${l(s.name)}</option>`).join("")),i.innerHTML=`<label class="lbl">Target</label><select class="input-field" name="link_target">${o}</select>`}function ti(e){return`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${e?"Edit Advertisement":"Add Advertisement"}</h3>
          <button onclick="closeModal()" class="btn-press text-xs font-bold text-gray-400 hover:text-white transition">âœ• Close</button>
        </div>
        <form id="ad-form" onsubmit="saveAd(event)" class="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          <input type="hidden" name="id" value="${e?e.id:""}">
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Title *</label><input class="input-field" name="title" required value="${l(e&&e.title?e.title:"")}" placeholder="e.g. Summer Sale 2026"></div>
            <div><label class="lbl">Ad Label</label>
              <select class="input-field" name="ad_label">
                ${Za.map(t=>`<option value="${t}" ${e&&e.ad_label===t?"selected":""}>${t}</option>`).join("")}
              </select>
            </div>
          </div>
          <div><label class="lbl">Message</label><textarea class="input-field" name="description" rows="2" placeholder="Short message shown on the adâ€¦">${l(e&&e.description?e.description:"")}</textarea></div>

          <div class="glass-soft border border-blue-500/15 rounded-xl p-4 space-y-3">
            <label class="lbl">Image / Video</label>
            <div id="ad-media-preview" class="w-full h-40 rounded-xl bg-black/40 flex items-center justify-center text-gray-600 text-xs border border-dashed border-gray-700"></div>
            <div class="flex items-center gap-2 flex-wrap">
              <label class="btn-press cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
                <i data-lucide="upload" class="w-4 h-4"></i> Upload File
                <input type="file" accept="image/*,video/mp4,video/webm,video/quicktime" class="hidden" onchange="onAdMediaPicked(this)">
              </label>
              <input id="ad-media-url" class="input-field flex-1 min-w-[160px]" placeholder="â€¦or paste media URL" oninput="onAdMediaUrl(this)">
            </div>
            <p class="text-[10px] text-gray-500">Videos play muted in the showcase. Images are cropped to fill (object-fit: cover).</p>
            <input type="hidden" name="image_url" id="ad-hidden-image">
            <input type="hidden" name="video_url" id="ad-hidden-video">
          </div>

          <div class="form-grid form-grid-2">
            <div><label class="lbl">Start Date</label><input type="date" class="input-field" name="start_date" value="${e&&e.start_date?String(e.start_date).slice(0,10):""}"></div>
            <div><label class="lbl">End Date</label><input type="date" class="input-field" name="end_date" value="${e&&e.end_date?String(e.end_date).slice(0,10):""}"></div>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-xl p-4 space-y-3">
            <label class="lbl">Link Destination</label>
            <select class="input-field" name="link_type" onchange="onAdLinkTypeChange()">
              <option value="none" ${!e||!e.link_type||e.link_type==="none"?"selected":""}>No link</option>
              <option value="product" ${e&&e.link_type==="product"?"selected":""}>Link to a product</option>
              <option value="category" ${e&&e.link_type==="category"?"selected":""}>Link to a category</option>
              <option value="section" ${e&&e.link_type==="section"?"selected":""}>Link to a showroom section</option>
            </select>
            <div id="ad-link-target-wrap"></div>
          </div>

          <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/15 rounded-xl">
            <p class="text-xs font-bold text-white">Active</p>
            <label class="toggle-switch"><input type="checkbox" name="is_active" ${!e||e.is_active?"checked":""}><span class="toggle-slider"></span></label>
          </div>
          <button type="submit" class="btn-press w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl text-sm transition">${e?"Save Changes":"Create Advertisement"}</button>
        </form>
      </div>
    </div>`}window.onAdLinkTypeChange=function(){const e=window._adLinkCache||{products:[],categories:[],sections:[]},t=document.querySelector('#ad-form select[name="link_type"]'),a=t?t.value:"none";Xt(e,a,"")};window.showAddAdModal=async function(){const e=await ei();window._adLinkCache=e,U(ti(null)),Xt(e,"none","")};window.showEditAdModal=async function(e){const t=await ei();window._adLinkCache=t;const{data:a}=await c.from("promotions").select("*").eq("id",e).maybeSingle();if(!a){p("Ad not found","error");return}U(ti(a)),a.image_url?Qe(a.image_url,!1):a.video_url&&Qe(a.video_url,!0),Xt(t,a.link_type||"none",a.link_target||"")};window.saveAd=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=a.id||"",o={title:a.title,description:a.description||"",ad_label:Za.includes(a.ad_label)?a.ad_label:"Featured",image_url:a.image_url||null,video_url:a.video_url||null,link_type:["none","product","category","section"].includes(a.link_type)?a.link_type:"none",link_target:a.link_target||null,start_date:a.start_date?new Date(a.start_date+"T00:00:00").toISOString():null,end_date:a.end_date?new Date(a.end_date+"T23:59:59").toISOString():null,is_active:a.is_active==="on",promo_type:"banner"};if(!o.image_url&&!o.video_url){p("Add an image or video for the ad","error");return}const s=e.target.querySelector('button[type="submit"]');s&&(s.disabled=!0);try{if(i){const{error:r}=await c.from("promotions").update(o).eq("id",i);if(r)throw r;p("Ad updated!")}else{const{error:r}=await c.from("promotions").insert(o);if(r)throw r;p("Ad created!")}}catch(r){p(r.message||"Save failed","error"),s&&(s.disabled=!1);return}z(),Ce()};window.togglePromo=async function(e,t){const{error:a}=await c.from("promotions").update({is_active:t}).eq("id",e);if(a){p(a.message,"error");return}p(t?"Ad activated":"Ad deactivated"),Ce()};window.moveAd=async function(e,t){try{const{data:a,error:i}=await c.from("promotions").select("id,sort_order").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1});if(i)throw i;const o=a||[],s=o.findIndex(u=>u.id===e),r=s+t;if(s<0||r<0||r>=o.length){p("Already at the edge","info");return}const n=o[s],d=o[r];await c.from("promotions").update({sort_order:d.sort_order}).eq("id",n.id),await c.from("promotions").update({sort_order:n.sort_order}).eq("id",d.id),p("Order updated")}catch(a){p(a.message||"Reorder failed","error")}Ce()};window.deletePromo=async function(e){if(confirm("Delete this ad? This cannot be undone.")){try{const{data:t}=await c.from("promotions").select("image_url,video_url,poster_url").eq("id",e).maybeSingle();if(t){const i=[t.image_url,t.video_url,t.poster_url].filter(Boolean).map(o=>{const s=/\/object\/public\/advertisements\/(.+)$/.exec(o);return s?decodeURIComponent(s[1]):null}).filter(Boolean);if(i.length)try{await c.storage.from("advertisements").remove(i)}catch{}}const{error:a}=await c.from("promotions").delete().eq("id",e);if(a)throw a;p("Ad deleted")}catch(t){p(t.message||"Delete failed","error")}Ce()}};async function Ce(){const e=document.getElementById("content");try{const{data:t}=await c.from("promotions").select("*").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3 flex-wrap">
          <div class="flex-1 min-w-0">
            <h2 class="text-xl font-black text-white">Advertisement Manager</h2>
            <p class="text-xs text-gray-500 mt-0.5">Create professional showcase ads that appear on the homepage â€” with labels, media and product links.</p>
          </div>
          <button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement
          </button>
        </div>
        <div class="grid gap-3">
          ${a.length===0?pe("megaphone","No Ads","Create your first showcase ad â€” add a title, image or video, label, and optional product link.",'<button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"><i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement</button>'):a.map((i,o)=>`
              <div class="glass-soft border border-blue-500/15 rounded-xl p-4 flex items-center gap-4">
                ${Wo(i)}
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap">
                    <p class="text-sm font-black text-white truncate">${l(i.title||i.name)}</p>
                    ${Vo(i.ad_label||"Featured")}
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${l(i.description||"")}</p>
                  <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${i.is_active?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":"bg-gray-500/10 text-gray-400 border-gray-500/20"}">${i.is_active?"Active":"Inactive"}</span>
                    ${Go(i)}
                    <span class="text-[10px] text-gray-500">${X(i.start_date)}${i.start_date?" â†’ ":""}${X(i.end_date)}</span>
                  </div>
                </div>
                <div class="flex gap-1 shrink-0 flex-wrap justify-end">
                  <button onclick="moveAd('${i.id}',-1)" class="btn-press p-1.5 text-gray-400 hover:text-white rounded-lg transition" title="Move up"><i data-lucide="chevron-up" class="w-4 h-4"></i></button>
                  <button onclick="moveAd('${i.id}',1)" class="btn-press p-1.5 text-gray-400 hover:text-white rounded-lg transition" title="Move down"><i data-lucide="chevron-down" class="w-4 h-4"></i></button>
                  <button onclick="togglePromo('${i.id}',${i.is_active?"false":"true"})" class="btn-press p-1.5 ${i.is_active?"text-amber-400":"text-emerald-400"} rounded-lg transition" title="${i.is_active?"Deactivate":"Activate"}"><i data-lucide="${i.is_active?"eye-off":"eye"}" class="w-4 h-4"></i></button>
                  <button onclick="showEditAdModal('${i.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-4 h-4"></i></button>
                  <button onclick="deletePromo('${i.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.renderAds=Ce;async function Ko(){const e=document.getElementById("content");try{const[{data:t},a]=await Promise.all([c.from("site_settings").select("*").limit(1).maybeSingle(),Yo()]),i=t||{},o=new Set(Array.isArray(i.live_promo_product_ids)?i.live_promo_product_ids:[]),s=a.length?`
        <div class="mt-4">
          <label class="lbl">Which products appear in the Live Promotions (Featured Product Alerts)?</label>
          <p class="text-[11px] text-gray-400 mb-2">Leave all unchecked to let the store pick real products automatically.</p>
          <input id="promo-picker-search" type="search" class="input-field mb-2" placeholder="Search products to chooseâ€¦" oninput="filterPromoPicker(this.value)">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1.5 max-h-72 overflow-y-auto pr-1" id="promo-picker-list">
            ${a.map(r=>{const n=r.property_id||r.id,d=o.has(n)?"checked":"";return`<label class="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3 py-2 cursor-pointer hover:border-blue-400/40 transition" data-promo-search="${l((r.title||r.name||"")+" "+(r.category||""))}">
                <input type="checkbox" name="live_promo_product_ids" value="${l(n)}" ${d} class="accent-blue-500 w-4 h-4">
                <span class="min-w-0"><span class="block text-xs font-bold text-white truncate">${l(r.title||r.name||n)}</span><span class="block text-[10px] text-gray-400">${l(r.category||r.listing_type||"")} Â· ${l(n)}</span></span>
              </label>`}).join("")}
          </div>
          <div class="flex gap-2 mt-2">
            <button type="button" onclick="selectAllPromoPicks()" class="text-[11px] font-bold text-blue-400 hover:text-blue-300 transition">Select all</button>
            <button type="button" onclick="clearAllPromoPicks()" class="text-[11px] font-bold text-gray-400 hover:text-gray-200 transition">Clear all</button>
          </div>
        </div>`:"";e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Website Content Manager</h2>
        <form id="content-form" onsubmit="saveContent(event)" class="space-y-5">
          ${[{section:"Site Identity",fields:[{key:"site_name",label:"Site Name",type:"text",placeholder:"Weverse Online Shop"},{key:"site_tagline",label:"Tagline / Slogan",type:"text",placeholder:"Premium International Commerce"},{key:"site_description",label:"Site Description (SEO)",type:"textarea",placeholder:"Your trusted global shopâ€¦"}]},{section:"Contact Information",fields:[{key:"contact_email",label:"Contact Email",type:"email",placeholder:"support@example.com"},{key:"contact_phone",label:"Contact Phone",type:"tel",placeholder:"+1 234 567 8900"},{key:"contact_address",label:"Business Address",type:"textarea",placeholder:"123 Main St, City, Country"},{key:"whatsapp_number",label:"WhatsApp Number",type:"tel",placeholder:"+1 234 567 8900"}]},{section:"Hero Section",fields:[{key:"hero_headline",label:"Hero Headline",type:"text",placeholder:"Weverse Online Shop"},{key:"hero_subtext",label:"Hero Subtext",type:"textarea",placeholder:"Shop premium productsâ€¦"},{key:"hero_cta_text",label:"CTA Button Text",type:"text",placeholder:"Shop Now"}]},{section:"Social Media",fields:[{key:"facebook_url",label:"Facebook URL",type:"url",placeholder:"https://facebook.com/â€¦"},{key:"instagram_url",label:"Instagram URL",type:"url",placeholder:"https://instagram.com/â€¦"},{key:"twitter_url",label:"Twitter / X URL",type:"url",placeholder:"https://twitter.com/â€¦"},{key:"youtube_url",label:"YouTube URL",type:"url",placeholder:"https://youtube.com/â€¦"},{key:"tiktok_url",label:"TikTok URL",type:"url",placeholder:"https://tiktok.com/â€¦"}]},{section:"Mobile App Promotion Banner",fields:[{key:"app_banner_enabled",label:"Show the App Promotion banner at the bottom of every page",type:"checkbox"},{key:"app_banner_headline",label:"Banner Headline",type:"text",placeholder:"Discover More with the Weverse Online Shop App"},{key:"app_play_store_url",label:"Google Play Store URL (real app listing â€” leave empty while unpublished)",type:"url",placeholder:"https://play.google.com/store/apps/details?id=â€¦"}]},{section:"Live Product Promotions (Featured Product Alerts)",fields:[{key:"live_promo_enabled",label:"Show Live Product Promotions (small alerts at the bottom corner)",type:"checkbox"},{key:"live_promo_first_delay_seconds",label:"First alert after (seconds)",type:"number",placeholder:"12"},{key:"live_promo_interval_seconds",label:"Delay between alerts (seconds)",type:"number",placeholder:"60"}],extra:s}].map(r=>`
            <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
              <h3 class="text-sm font-black text-white mb-4">${r.section}</h3>
              <div class="form-grid form-grid-2">
                ${r.fields.map(n=>`
                  <div ${n.type==="textarea"||n.type==="checkbox"?'class="sm:col-span-2"':""}>
                    ${n.type==="checkbox"?`<label class="flex items-center gap-2.5 cursor-pointer"><input type="checkbox" name="${n.key}" class="accent-blue-500 w-4 h-4" ${i[n.key]?"checked":""}><span class="text-sm text-gray-300">${n.label}</span></label>`:n.type==="textarea"?`<label class="lbl">${n.label}</label><textarea class="input-field" name="${n.key}" placeholder="${l(n.placeholder)}" rows="2">${l(i[n.key]||"")}</textarea>`:`<label class="lbl">${n.label}</label><input type="${n.type}" class="input-field" name="${n.key}" value="${l(i[n.key]||"")}" placeholder="${l(n.placeholder||"")}">`}
                  </div>`).join("")}
              </div>
              ${r.extra||""}
            </div>`).join("")}
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Content Settings</button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}async function Yo(){const e=new Set,t=[],a=i=>{for(const o of i||[]){const s=o&&(o.property_id||o.id);s&&!e.has(s)&&(e.add(s),t.push(o))}};try{const{data:i}=await c.from("showroom_listings").select("property_id,title,name,category,listing_type,images,is_active").order("created_at",{ascending:!1}).limit(500);a(i)}catch{}return a(Ft()),a(Q),a(ga),a(ya),a(fa),a(ha),t.slice(0,250)}window.filterPromoPicker=function(e){const t=document.getElementById("promo-picker-list");if(!t)return;const a=(e||"").trim().toLowerCase();t.querySelectorAll("[data-promo-search]").forEach(i=>{i.style.display=!a||i.dataset.promoSearch.toLowerCase().includes(a)?"":"none"})};window.selectAllPromoPicks=function(){document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(e=>{e.checked=!0})};window.clearAllPromoPicks=function(){document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(e=>{e.checked=!1})};window.saveContent=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=Array.from(new Set(t.getAll("live_promo_product_ids").map(s=>String(s).trim()).filter(Boolean)));i.length?a.live_promo_product_ids=i:a.live_promo_product_ids=[];const{error:o}=await c.from("site_settings").upsert({id:1,...a});if(o){p(o.message,"error");return}p("Content settings saved!")};const Zt=[{key:"hero_videos",custom:!0,title:"HERO VIDEO BANNER (ROTATING)",desc:"Upload your own promotional videos (MP4 & WebM) to the top homepage banner. Each saved slide becomes its own full-width hero with its title, subtitle and CTA over a soft dark overlay so the text always stays readable. Add one video, one poster, or many rotating slides. If no video is added here, the single promo banner and the built-in brand banner below are shown instead as fallbacks.",accent:"from-indigo-400 to-violet-500"},{key:"banner",title:"ANDROID APP BANNER",desc:"The mobile-app promotion banner shown at the bottom of every page. Editing these words never changes the banner design, phone image, logo or buttons.",accent:"from-cyan-400 to-blue-500",fields:[{key:"app_banner_title",label:"App Banner Title",type:"text"},{key:"app_banner_description",label:"App Banner Description",type:"textarea"},{key:"app_banner_button_text",label:"App Banner Button Text",type:"text"},{key:"app_banner_secondary_text",label:"App Banner Secondary Text",type:"text"}]},{key:"bottom",title:"BOTTOM / END-OF-PAGE SECTION",desc:"The final professional closing area of the website â€” thank-you message, customer support, footer links and copyright. The polished design stays; only these words change.",accent:"from-emerald-400 to-cyan-500",fields:[{key:"bottom_heading",label:"Bottom Section Heading",type:"text"},{key:"bottom_main_message",label:"Main Bottom Message",type:"textarea"},{key:"bottom_closing_message",label:"Closing Message",type:"text"},{key:"bottom_support_heading",label:"Customer Support Heading",type:"text"},{key:"bottom_support_description",label:"Customer Support Description",type:"textarea"},{key:"bottom_support_button_text",label:"Support Button Text",type:"text"},{key:"bottom_footer_text",label:"Footer Section Text",type:"text"},{key:"bottom_footer_closing",label:"Footer Closing Message",type:"text"},{key:"bottom_copyright",label:"Copyright Text (empty = automatic â€œÂ© year Brandâ€ line)",type:"text"}]},{key:"promo_banner",title:"HOME PAGE PROMO BANNER",desc:"The main rotating banner at the top of the homepage. Upload your own image or video and write your own words â€” the clean design stays. If empty, the built-in image banners rotate.",accent:"from-fuchsia-400 to-purple-500",fields:[{key:"promo_banner_enabled",label:"Show my promo banner",type:"checkbox"},{key:"promo_banner_image",label:"Banner Image",type:"media",kind:"image"},{key:"promo_banner_video",label:"Banner Video (plays if no image)",type:"media",kind:"video"},{key:"promo_banner_title",label:"Banner Title",type:"text"},{key:"promo_banner_subtitle",label:"Banner Subtitle",type:"text"},{key:"promo_banner_button_text",label:"Button Text",type:"text"},{key:"promo_banner_button_link",label:"Button Link",type:"text"}]},{key:"video_ad",title:"HOME PAGE VIDEO ADVERTISEMENT",desc:"A separate video card below the promo banner. Upload your own video (and optional poster image) and write your own words. It plays muted with play/pause and a progress bar.",accent:"from-rose-400 to-orange-500",fields:[{key:"video_ad_enabled",label:"Show the video advertisement",type:"checkbox"},{key:"video_ad_video_url",label:"Video File",type:"media",kind:"video"},{key:"video_ad_poster_url",label:"Poster Image (shown before play)",type:"media",kind:"image"},{key:"video_ad_title",label:"Video Title",type:"text"},{key:"video_ad_subtitle",label:"Video Subtitle",type:"text"},{key:"video_ad_button_text",label:"Button Text",type:"text"},{key:"video_ad_button_link",label:"Button Link",type:"text"}]}];function ai(e,t){const a=e.kind==="image",i=t||"",o=a?"image":"video",s="text-fuchsia-300",r=!!i;return`<div id="slot-${e.key}">
      ${r?`<div class="relative group w-full h-28 rounded-xl overflow-hidden bg-gray-900 border border-fuchsia-500/15 flex items-center justify-center">
             ${a?`<img src="${l(i)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`:`<video src="${l(i)}" class="w-full h-full object-cover" muted playsinline preload="metadata"></video>`}
             <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
               <button type="button" onclick="triggerContentMediaUpload('${e.key}')" class="text-xs font-bold text-white bg-fuchsia-600 px-3 py-1.5 rounded-lg">Replace</button>
               <button type="button" onclick="clearContentMedia('${e.key}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
             </div>
           </div>`:`<button type="button" onclick="triggerContentMediaUpload('${e.key}')" class="w-full h-28 rounded-xl border-2 border-dashed border-fuchsia-500/25 hover:border-fuchsia-500/50 flex flex-col items-center justify-center gap-1.5 transition">
             <i data-lucide="${o}" class="w-6 h-6 ${s}"></i>
             <p class="text-[10px] text-gray-500">Upload ${a?"Image":"Video"}</p>
           </button>`}
      <input type="file" id="file-${e.key}" class="hidden" accept="${a?"image/*":"video/*"}" onchange="handleContentMediaUpload(event,'${e.key}')">
      <input type="hidden" name="${e.key}" id="val-${e.key}" value="${l(i)}">
      <div class="flex gap-2 mt-1.5">
        <input class="input-field text-xs flex-1" id="url-${e.key}" value="${l(i)}" placeholder="Or paste ${a?"image":"video"} URL" oninput="document.getElementById('val-${e.key}').value=this.value">
      </div>
    </div>`}window.triggerContentMediaUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearContentMedia=function(e){const t=document.getElementById("val-"+e),a=document.getElementById("url-"+e);t&&(t.value=""),a&&(a.value=""),p("Cleared. Save to apply.","info"),oi()};window.handleContentMediaUpload=async function(e,t){const a=e.target.files?.[0];if(a){a.type.startsWith("video/"),p(`Uploading ${a.name}â€¦`,"info");try{const{data:{session:i}}=await c.auth.getSession();if(!i){p("Sign in to upload media","error");return}const o=(a.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),s=`content/${t}-${Date.now()}.${o}`,{error:r}=await c.storage.from("product-images").upload(s,a,{contentType:a.type,upsert:!1});if(r){p("Upload failed: "+r.message,"error");return}const{data:n}=c.storage.from("product-images").getPublicUrl(s),d=n.publicUrl,u=document.getElementById("val-"+t),m=document.getElementById("url-"+t);u&&(u.value=d),m&&(m.value=d);const g=document.getElementById("slot-"+t);if(g){const x=Zt.flatMap(h=>h.fields||[]).find(h=>h.key===t);x&&(g.outerHTML=ai(x,d))}p("âœ“ Uploaded â€” save to apply","success")}catch{p("Upload failed","error")}}};const Qo=["SHOP NOW","EXPLORE DEALS","VIEW PRODUCTS","DISCOVER MORE","SEE OFFERS","SHOP THE LOOK"];window._heroVideoDraft=[];function Z(){return Array.isArray(window._heroVideoDraft)||(window._heroVideoDraft=[]),window._heroVideoDraft}function Ne(){const e=document.getElementById("hs-json");e&&(e.value=JSON.stringify(Z()))}function he(){Ne();const e=document.getElementById("hero-videos-manager");e&&(e.innerHTML=ii(Z()),window.lucide&&lucide.createIcons())}function Jo(e,t){const a=String(e&&e.video||"").trim(),i=String(e&&e.poster||"").trim(),o=a&&pa(a)||i&&pa(i)?'<p class="mt-2 text-[11px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-2">âš  Temporary preview only â€” the upload FAILED, this will NOT be saved. Re-upload a smaller MP4/WebM.</p>':"";return`
    <div>
      <div class="w-full overflow-hidden rounded-xl bg-gray-950 border border-indigo-500/20 flex items-center justify-center">${a?`<video src="${l(a)}" ${i?`poster="${l(i)}"`:""} class="w-full h-40 object-cover" muted controls preload="metadata"></video>`:i?`<img src="${l(i)}" class="w-full h-40 object-cover" onerror="this.style.display='none'">`:'<div class="w-full h-40 flex items-center justify-center text-[11px] text-gray-500">No media yet â€” upload a video (MP4/WebM) or a poster below</div>'}</div>
      ${o}
      <div class="flex flex-wrap gap-1.5 mt-2 justify-end">
        <button type="button" onclick="heroVideoUpload(${t},'video')" class="px-3 py-1.5 rounded-lg ${a?"bg-white/10 text-gray-200 border border-white/10":"bg-indigo-600 text-white"} text-[10px] font-bold transition">${a?"Replace Video":"Upload Video"}</button>
        ${a?`<button type="button" onclick="heroVideoRemoveMedia(${t},'video')" class="px-3 py-1.5 rounded-lg bg-red-600/80 text-white text-[10px] font-bold">Remove Video</button>`:""}
        <button type="button" onclick="heroVideoUpload(${t},'poster')" class="px-3 py-1.5 rounded-lg bg-white/10 text-gray-200 text-[10px] font-bold border border-white/10 transition">${i?"Replace Poster":"Add Poster"}</button>
        ${i?`<button type="button" onclick="heroVideoRemoveMedia(${t},'poster')" class="px-3 py-1.5 rounded-lg bg-red-600/80 text-white text-[10px] font-bold">Remove Poster</button>`:""}
      </div>
    </div>`}function ii(e){return(e||[]).map((t,a)=>{const i=String(t&&t.buttonText||"SHOP NOW"),o=Qo.map(s=>`<button type="button" onclick="heroVideoPreset(${a},'${s}')" class="px-2.5 py-1 rounded-full text-[9px] font-black ${i===s?"bg-indigo-600 text-white":"bg-white/5 text-gray-400"} border ${i===s?"border-indigo-500":"border-white/10"} transition">${s}</button>`).join("");return`
    <div class="rounded-xl border border-indigo-500/25 bg-violet-500/8 p-4 space-y-3">
      <div class="flex items-center justify-between gap-2 flex-wrap">
        <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="video" class="w-4 h-4 text-indigo-400"></i> Slide ${a+1}</p>
        <div class="flex items-center gap-1.5">
          <button type="button" onclick="heroVideoToggle(${a})" class="text-[10px] font-bold px-2.5 py-1.5 rounded-lg ${t&&t.enabled===!1?"bg-gray-700 text-gray-400":"bg-emerald-600 text-white"} transition">${t&&t.enabled===!1?"Disabled":"Enabled"}</button>
          <button type="button" onclick="heroVideoMove(${a},-1)" class="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10" title="Move up"><i data-lucide="arrow-up" class="w-3.5 h-3.5 text-gray-300"></i></button>
          <button type="button" onclick="heroVideoMove(${a},1)" class="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10" title="Move down"><i data-lucide="arrow-down" class="w-3.5 h-3.5 text-gray-300"></i></button>
          <button type="button" onclick="heroVideoDelete(${a})" class="px-2 py-1 rounded-lg bg-red-600/80 hover:bg-red-600" title="Delete"><i data-lucide="trash-2" class="w-3.5 h-3.5 text-white"></i></button>
        </div>
      </div>
      ${Jo(t,a)}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label class="lbl">Title</label>
          <input type="text" value="${l(t.title||"")}" class="input-field w-full" placeholder="e.g. Season Sale is Live" oninput="heroVideoField(${a},'title',this.value)">
        </div>
        <div>
          <label class="lbl">Subtitle</label>
          <input type="text" value="${l(t.subtitle||"")}" class="input-field w-full" placeholder="e.g. Up to 50% off top brands" oninput="heroVideoField(${a},'subtitle',this.value)">
        </div>
      </div>
      <div>
        <label class="lbl">Button</label>
        <div class="flex flex-wrap gap-1.5">${o}</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          <input type="text" value="${l(i)}" class="input-field w-full" placeholder="SHOP NOW" oninput="heroVideoField(${a},'buttonText',this.value)">
          <input type="text" value="${l(t.buttonLink||"/#showroom-directory")}" class="input-field w-full" placeholder="/#showroom-directory" oninput="heroVideoField(${a},'buttonLink',this.value)">
        </div>
      </div>
    </div>`}).join("")}window.heroVideoUpload=function(e,t){const a=document.createElement("input");a.type="file",a.accept=t==="video"?"video/mp4,video/webm,.mp4,.webm":"image/*",a.onchange=()=>{const i=a.files&&a.files[0];i&&Zo(e,t,i)},a.click()};window.heroVideoField=function(e,t,a){const i=Z();i[e]&&(i[e][t]=a,Ne())};window.heroVideoPreset=function(e,t){const a=Z();a[e]&&(a[e].buttonText=t,he())};window.heroVideoToggle=function(e){const t=Z();t[e]&&(t[e].enabled=t[e].enabled===!1,he())};window.heroVideoMove=function(e,t){const a=Z(),i=e+t;i<0||i>=a.length||([a[e],a[i]]=[a[i],a[e]],he())};window.heroVideoDelete=function(e){const t=Z();e<0||e>=t.length||confirm("Delete this hero video slide?")&&(t.splice(e,1),he())};window.heroVideoRemoveMedia=function(e,t){const a=Z();a[e]&&(t==="video"?a[e].video="":t==="poster"&&(a[e].poster=""),he())};window.addHeroVideoSlide=function(){Z().push({id:"hv"+Date.now()+Math.floor(Math.random()*999),enabled:!0,video:"",poster:"",title:"",subtitle:"",buttonText:"SHOP NOW",buttonLink:"/#showroom-directory"}),he(),p("New slide added â€” upload a video and press Save to show it.","info")};async function Xo(e,t){try{const{data:{session:a}}=await c.auth.getSession();if(!a)return{url:URL.createObjectURL(e),persisted:!1,error:"You are signed out â€” sign in again, then re-upload."};const i=(e.name.split(".").pop()||(t==="video"?"mp4":"jpg")).toLowerCase().replace(/[^a-z0-9]/g,""),o=`hero/${t}/${Date.now()}-${Math.random().toString(36).slice(2)}.${i}`,{error:s}=await c.storage.from("product-images").upload(o,e,{contentType:e.type,cacheControl:"3600",upsert:!0});if(s)return{url:URL.createObjectURL(e),persisted:!1,error:s.message};const{data:r}=c.storage.from("product-images").getPublicUrl(o),n=r&&r.publicUrl;return n?{url:n,persisted:!0,error:null}:{url:URL.createObjectURL(e),persisted:!1,error:"Storage did not return a public URL."}}catch(a){return{url:URL.createObjectURL(e),persisted:!1,error:String(a&&a.message||a)}}}function pa(e){return/^blob:/i.test(String(e||""))}async function Zo(e,t,a){const i=Z();if(!a||!i[e])return;if(t==="video"){if(!/video\/(mp4|webm)|\.(mp4|webm)$/i.test(a.type+" "+a.name)){p("Please choose an MP4 or WebM video file.","error");return}}else if(!a.type.startsWith("image/")){p("Please choose an image for the poster.","error");return}p("â³ Uploading "+(t==="video"?"video":"poster")+"â€¦","info");const o=await Xo(a,t);t==="video"?i[e].video=o.url:i[e].poster=o.url,he(),o.persisted?p("âœ“ "+(t==="video"?"Video":"Poster")+" uploaded â€” press Save & Publish Hero Banner to go live.","success"):p("âš  UPLOAD FAILED: "+(o.error||"unknown reason")+" â€” this preview is TEMPORARY and will NOT be saved. Try a smaller MP4/WebM (keep videos under ~50 MB), then re-upload.","error")}function es(e){const t=Array.isArray(e)?e.map(i=>({...i})):[];return window._heroVideoDraft=t,Ne(),`
    <div class="space-y-3">
      <div id="hero-videos-manager" class="space-y-3">${t.length?"":`
    <div class="rounded-xl border-2 border-dashed border-indigo-500/30 bg-white/5 p-6 text-center">
      <i data-lucide="video" class="w-8 h-8 text-indigo-400 mx-auto"></i>
      <p class="text-xs text-gray-400 mt-2 font-bold">No hero videos yet</p>
      <p class="text-[11px] text-gray-500 mt-1">Add your first promotional video slide to turn the homepage banner into an auto-playing video hero. Until then, the built-in brand banner and any single promo banner below are used.</p>
    </div>`}${ii(t)}</div>
      <button type="button" onclick="heroVideoSavePublish(this)" class="btn-press w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-black rounded-xl transition flex items-center justify-center gap-2">
        <i data-lucide="rocket" class="w-4 h-4"></i> Save &amp; Publish Hero Banner
      </button>
      <p class="text-[10px] text-gray-500 text-center">One video is enough â€” no minimum. Your banner goes live as soon as you press this button.</p>
      <button type="button" onclick="addHeroVideoSlide()" class="btn-press w-full px-4 py-3 border-2 border-dashed border-indigo-500/40 text-indigo-300 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2">
        <i data-lucide="plus" class="w-4 h-4"></i> Add Another Hero Video Slide
      </button>
    </div>`}window.heroVideoSavePublish=async function(e){const t=d=>/^blob:/i.test(String(d||"")),a=Z().filter(d=>d&&(d.video||d.poster||d.title||d.subtitle));if(!a.length){p("Add at least one video slide before publishing.","error");return}a.forEach(d=>{d.poster&&t(d.poster)&&(d.poster="")});const i=a.filter(d=>d.video&&t(d.video)),o=a.filter(d=>d.video&&!t(d.video));if(i.length&&!o.length){p(`Upload FAILED for your video${i.length>1?"s":""} â€” temporary previews cannot go live. Re-upload a smaller MP4/WebM (under ~50 MB), then press this button again.`,"error");return}if(i.length&&!confirm(`${i.length} slide${i.length>1?"s":""} had a FAILED upload and will be LEFT OUT. Publish the remaining ${o.length} slide${o.length===1?"":"s"} now?`))return;const s=o,r=s.filter(d=>d.video);if(!s.length){p("Please upload a video in at least one slide first.","error");return}const n=e?e.innerHTML:"";e&&(e.disabled=!0,e.innerHTML="â³ Publishingâ€¦");try{Ne();const{data:d}=await c.from("site_settings").select("id").limit(1).maybeSingle();let u;if(d?.id?{error:u}=await c.from("site_settings").update({hero_video_slides:s}).eq("id",d.id):{error:u}=await c.from("site_settings").insert({id:crypto.randomUUID(),hero_video_slides:s}),u)throw new Error(u.message);va(),p("âœ“ Hero video banner published! "+r.length+(r.length===1?" video is":" videos are")+" now live on your homepage.","success")}catch(d){p(d.message||"Could not publish the hero banner. Please try again.","error")}finally{e&&(e.disabled=!1,e.innerHTML=n,window.lucide&&lucide.createIcons())}};async function oi(){const e=document.getElementById("content");try{const{data:t}=await c.from("site_settings").select("*").limit(1).maybeSingle(),a={...ki,...t||{}};e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div>
          <h2 class="text-xl font-black text-white">Content Settings</h2>
          <p class="text-xs text-gray-400 mt-1">Edit the wording of the two shared sections below. Save once and every page updates automatically â€” no code needed. Your products, prices, reviews, orders and design are never touched.</p>
        </div>
        <form id="content-settings-form" onsubmit="saveContentSettings(event)" class="space-y-5">
          ${Zt.map(i=>`
            <div class="glass-soft border border-white/10 rounded-2xl p-5">
              <div class="flex items-center gap-2.5 mb-1">
                <span class="w-2 h-2 rounded-full bg-gradient-to-r ${i.accent}"></span>
                <h3 class="text-sm font-black text-white tracking-wide">${i.title}</h3>
              </div>
              <p class="text-[11px] text-gray-400 mb-4">${i.desc}</p>
              ${i.key==="hero_videos"?es(a.hero_video_slides||[]):`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${i.fields.map(o=>`
                  <div class="${o.type==="textarea"||o.type==="media"?"sm:col-span-2":""}">
                    ${o.type==="checkbox"?`<label class="flex items-center gap-2.5 cursor-pointer select-none py-2">
                           <input id="cs-${o.key}" type="checkbox" name="${o.key}" ${a[o.key]?"checked":""} class="w-4 h-4 accent-blue-500 rounded">
                           <span class="text-sm font-bold text-gray-200">${o.label}</span>
                         </label>`:`<label class="lbl" for="cs-${o.key}">${o.label}</label>`}
                    ${o.type==="textarea"?`<textarea id="cs-${o.key}" name="${o.key}" rows="3" class="input-field w-full" placeholder="Enter the current wordingâ€¦">${l(a[o.key]||"")}</textarea>`:o.type==="media"?ai(o,a[o.key]||""):o.type==="checkbox"?"":`<input id="cs-${o.key}" type="text" name="${o.key}" value="${l(a[o.key]||"")}" class="input-field w-full" placeholder="Enter the current wordingâ€¦">`}
                    ${o.type==="text"||o.type==="textarea"?`<p class="text-[10px] text-gray-500 mt-1">Current: ${l((a[o.key]||"").slice(0,80))}${(a[o.key]||"").length>80?"â€¦":""}</p>`:""}
                  </div>`).join("")}
              </div>`}
            </div>`).join("")}
          <input type="hidden" id="hs-json" name="hero_video_slides" value="">
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Content</button>
        </form>
      </div>`,Ne(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.saveContentSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[o,s]of t.entries())a[o]=s;for(const o of Zt)if(o.fields)for(const s of o.fields)s.type==="checkbox"&&!(s.key in a)?a[s.key]=!1:s.type==="checkbox"&&(a[s.key]=!0);let i=[];try{const o=t.get("hero_video_slides");if(String(o||"").trim()){const s=JSON.parse(o);Array.isArray(s)&&(i=s)}}catch{i=[]}a.hero_video_slides=i;try{const{data:o}=await c.from("site_settings").select("id").limit(1).maybeSingle();let s;if(o?.id?{error:s}=await c.from("site_settings").update(a).eq("id",o.id):{error:s}=await c.from("site_settings").insert({id:crypto.randomUUID(),...a}),s)throw new Error(s.message);va(),p("Content updated â€” the banners now use your new words and uploads.","success")}catch(o){p(o.message||"Could not save content. Please try again.","error")}};async function ts(){const e=document.getElementById("content");try{const[t,a,i]=await Promise.all([c.from("payment_receipts").select("amount,currency,status,created_at").order("created_at",{ascending:!1}).limit(500),c.from("showroom_listings").select("id,listing_type,category,is_active",{count:"exact"}),c.from("profiles").select("user_id,created_at",{count:"exact"})]),o=t.data||[],s=o.filter($=>["approved","payment_approved","delivered"].includes($.status)).reduce(($,H)=>$+(parseFloat(H.amount)||0),0),r=o.length>0?(o.filter($=>$.status!=="cancelled").length/o.length*100).toFixed(1):0,n={};(a.data||[]).forEach($=>{n[$.category]=(n[$.category]||0)+1});const d=Object.entries(n).sort(($,H)=>H[1]-$[1]).slice(0,8),u=$=>new Date($.getTime()-$.getTimezoneOffset()*6e4).toISOString().slice(0,10),m=u(new Date),g=u(new Date(Date.now()-6*864e5)),{data:x,error:h}=await c.from("visitor_analytics").select("visit_date,page_views,device_type").order("visit_date",{ascending:!1}).limit(1e3),b=x||[],v=$=>$.reduce((H,xe)=>H+(parseInt(xe.page_views,10)||1),0),B=v(b.filter($=>$.visit_date===m)),E=v(b.filter($=>$.visit_date>=g)),C=v(b),_=b.length>0?Math.round(b.filter($=>$.device_type==="mobile").length/b.length*100):0,k=[];for(let $=13;$>=0;$--){const H=u(new Date(Date.now()-$*864e5));k.push({d:H,n:v(b.filter(xe=>xe.visit_date===H))})}const ve=Math.max(1,...k.map($=>$.n));e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Analytics</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          ${M("Total Revenue",`$${s.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald")}
          ${M("Total Orders",o.length,"shopping-bag","blue")}
          ${M("Customers",i.count||0,"users","violet")}
          ${M("Conversion Rate",r+"%","trending-up","amber")}
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          ${M("Visits Today",B,"eye","blue")}
          ${M("Visits (7 Days)",E,"users","violet")}
          ${M("Total Visits",C,"globe","amber")}
          ${M("Mobile Share",_+"%","smartphone","emerald")}
        </div>
        ${h?`<p class="text-xs text-red-400">${l(h.message)}</p>`:""}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="bar-chart-3" class="w-4 h-4 text-blue-400"></i> Revenue (Last 6 Months)</h3>
            <canvas id="analytics-chart" height="220"></canvas>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="activity" class="w-4 h-4 text-emerald-400"></i> Public Visitors (Last 14 Days)</h3>
            <p class="text-[11px] text-gray-500 mb-3">One row per public page load — collected invisibly on product, hub, and home pages; shown only here.</p>
            <div class="flex items-end gap-1 h-32">
              ${k.map($=>`<div class="flex-1 flex flex-col items-center justify-end gap-1"><div class="w-full rounded-t bg-emerald-500/70 hover:bg-emerald-400 transition" style="height:${Math.round($.n/ve*100)+2}px" title="${$.d}: ${$.n} visit(s)"></div><span class="text-[9px] text-gray-500">${$.d.slice(5)}</span></div>`).join("")}
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="pie-chart" class="w-4 h-4 text-violet-400"></i> Top Categories by Listings</h3>
            ${d.length===0?'<p class="text-xs text-gray-500 text-center py-8">No data</p>':d.map(([$,H])=>`
              <div class="flex items-center gap-3 py-1.5">
                <span class="text-xs text-gray-300 flex-1 truncate">${l($)}</span>
                <div class="w-24 h-2 bg-blue-500/10 rounded-full overflow-hidden"><div class="h-full bg-blue-500 rounded-full" style="width:${Math.round(H/d[0][1]*100)}%"></div></div>
                <span class="text-xs font-bold text-white w-6 text-right">${H}</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),za(o)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}async function as(){const e=document.getElementById("content"),{data:t}=await c.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">SEO Manager</h2>
      <a href="/seo-audit" target="_blank" rel="noopener" class="block p-4 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 transition">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-black text-emerald-300">SEO Audit Dashboard</p>
            <p class="text-xs text-emerald-200/70 mt-1">Live 20-point audit of every product page, duplicate detection, and one-click revive of missing titles.</p>
          </div>
          <span class="text-emerald-300 font-black text-xl">&rarr;</span>
        </div>
      </a>
      <form id="seo-form" onsubmit="saveSeo(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Homepage SEO</h3>
          <div><label class="lbl">Meta Title</label><input class="input-field" name="meta_title" value="${l(a.meta_title||"")}" placeholder="Weverse Online Shop | Premium International Commerce"></div>
          <div><label class="lbl">Meta Description</label><textarea class="input-field" name="meta_description" rows="2" placeholder="Your trusted global shopâ€¦">${l(a.meta_description||"")}</textarea></div>
          <div><label class="lbl">Meta Keywords (comma separated)</label><input class="input-field" name="meta_keywords" value="${l(a.meta_keywords||"")}" placeholder="global marketplace, online shopping, â€¦"></div>
          <div><label class="lbl">Canonical URL</label><input class="input-field" name="canonical_url" value="${l(a.canonical_url||"")}" placeholder="https://yoursite.com"></div>
          <div><label class="lbl">OG Image URL (Social share image)</label><input class="input-field" name="og_image" value="${l(a.og_image||"")}" placeholder="https://â€¦/og-image.jpg"></div>
          <div><label class="lbl">Google Analytics ID</label><input class="input-field" name="ga_id" value="${l(a.ga_id||"")}" placeholder="G-XXXXXXXXXX"></div>
          <div><label class="lbl">Google Search Console Verification</label><input class="input-field" name="gsc_verify" value="${l(a.gsc_verify||"")}" placeholder="Verification meta tag content"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save SEO Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSeo=async function(e){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());await c.from("site_settings").upsert({id:1,...t}),p("SEO settings saved!")};async function is(){const e=document.getElementById("content"),{data:t}=await c.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">Email Settings</h2>
      <div class="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl text-xs text-blue-300">Email is handled by Supabase Auth's built-in SMTP. Configure SMTP in your Supabase project â†’ Auth â†’ SMTP Settings.</div>
      <form id="email-form" onsubmit="saveEmailSettings(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Email Notifications</h3>
          ${[{key:"email_order_placed",label:"Order Confirmation Email",desc:"Send confirmation when order is placed"},{key:"email_order_shipped",label:"Shipping Notification",desc:"Notify customer when order is shipped"},{key:"email_order_delivered",label:"Delivery Confirmation",desc:"Confirm when order is delivered"},{key:"email_review_request",label:"Review Request",desc:"Ask for review after delivery"}].map(i=>`
            <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
              <div><p class="text-xs font-bold text-white">${i.label}</p><p class="text-[11px] text-gray-500">${i.desc}</p></div>
              <label class="toggle-switch"><input type="checkbox" name="${i.key}" ${a[i.key]!==!1?"checked":""}><span class="toggle-slider"></span></label>
            </div>`).join("")}
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Sender Information</h3>
          <div><label class="lbl">Sender Name</label><input class="input-field" name="email_from_name" value="${l(a.email_from_name||"")}" placeholder="Weverse Online Shop"></div>
          <div><label class="lbl">Reply-To Email</label><input type="email" class="input-field" name="email_reply_to" value="${l(a.email_reply_to||"")}" placeholder="support@example.com"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Email Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveEmailSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,o]of t.entries())a[i]=o;["email_order_placed","email_order_shipped","email_order_delivered","email_review_request"].forEach(i=>{i in a?a[i]=!0:a[i]=!1}),await c.from("site_settings").upsert({id:1,...a}),p("Email settings saved!")};async function yt(){const e=document.getElementById("content");e&&(e.innerHTML=Se());try{const[t,a,i]=await Promise.all([c.from("admin_security_logs").select("*").order("created_at",{ascending:!1}).limit(50),c.from("admin_2fa").select("enabled,backup_codes,created_at").eq("user_id",P.user?.id).maybeSingle(),c.auth.mfa.listFactors()]),o=t.data||[],s=a.data||{},r=(i.data?.totp||[])[0],n=!!r&&r.status==="verified",d=(s.backup_codes||[]).filter(u=>!u.used).length;e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Security</h2>

        <!-- 2FA STATUS BANNER -->
        <div class="p-4 rounded-xl border flex items-center gap-4 ${n?"bg-emerald-500/5 border-emerald-500/20":"bg-amber-500/5 border-amber-500/20"}">
          <div class="w-10 h-10 ${n?"bg-emerald-500/10":"bg-amber-500/10"} rounded-xl flex items-center justify-center shrink-0">
            <i data-lucide="${n?"shield-check":"shield-alert"}" class="w-5 h-5 ${n?"text-emerald-400":"text-amber-400"}"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm font-black ${n?"text-emerald-300":"text-amber-300"}">Two-Factor Authentication is ${n?"ENABLED âœ“":"NOT ENABLED"}</p>
            <p class="text-xs text-gray-400 mt-0.5">${n?`Backup codes available: ${d} Â· Enrolled: ${X(s.created_at)}`:"Enable 2FA to protect your admin account with an authenticator app."}</p>
          </div>
          ${n?'<button onclick="disable2FA()" class="btn-press flex-shrink-0 text-xs font-bold text-red-400 bg-red-500/10 hover:bg-red-500/20 px-3 py-1.5 rounded-xl transition">Disable 2FA</button>':'<button onclick="setup2FAFlow()" class="btn-press flex-shrink-0 text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-1.5 rounded-xl transition"><i data-lucide="shield-plus" class="w-3.5 h-3.5 inline mr-1"></i>Enable 2FA</button>'}
        </div>

        <!-- BACKUP CODES (only if 2FA enabled) -->
        ${n?`
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="key" class="w-4 h-4 text-amber-400"></i> Backup Recovery Codes</h3>
            <button onclick="regenerateBackupCodes()" class="btn-press text-xs font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 px-3 py-1.5 rounded-xl transition">Regenerate</button>
          </div>
          <p class="text-xs text-gray-400 mb-3">Save these codes in a safe place. Use them if you lose access to your authenticator app. Each code works only once.</p>
          <div id="backup-codes-display" class="grid grid-cols-2 gap-2">
            ${(s.backup_codes||[]).length===0?'<p class="text-xs text-gray-500 col-span-2 text-center py-4">No backup codes generated. Click Regenerate to create them.</p>':(s.backup_codes||[]).map(u=>`<code class="font-mono text-xs px-3 py-2 ${u.used?"bg-gray-900 text-gray-600 line-through":"bg-blue-500/5 text-blue-300 border border-blue-500/15"} rounded-lg">${typeof u=="object"?u.code:u}</code>`).join("")}
          </div>
        </div>`:""}

        <!-- CHANGE PASSWORD -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <h3 class="text-sm font-black text-white mb-4 flex items-center gap-2"><i data-lucide="lock" class="w-4 h-4 text-blue-400"></i> Change Password</h3>
          <form id="pw-form" onsubmit="changePassword(event)" class="space-y-3 max-w-sm">
            <div>
              <label class="lbl">Current Password</label>
              <input type="password" class="input-field" id="current-pw" placeholder="Current password" required>
            </div>
            <div>
              <label class="lbl">New Password</label>
              <input type="password" class="input-field" id="new-pw" placeholder="Min 8 characters" minlength="8" required>
              <div id="pw-strength" class="mt-1.5 space-y-1"></div>
            </div>
            <div>
              <label class="lbl">Confirm New Password</label>
              <input type="password" class="input-field" id="confirm-pw" placeholder="Repeat password" required>
            </div>
            <button type="submit" class="btn-press bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-5 rounded-xl text-sm transition flex items-center gap-2">
              <i data-lucide="check" class="w-4 h-4"></i> Update Password
            </button>
          </form>
        </div>

        <!-- SESSION MANAGEMENT -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <h3 class="text-sm font-black text-white mb-4 flex items-center gap-2"><i data-lucide="monitor-smartphone" class="w-4 h-4 text-blue-400"></i> Session Management</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
              <div>
                <p class="text-xs font-bold text-white">Current Session</p>
                <p class="text-[11px] text-gray-500">${l(navigator.userAgent.slice(0,60))}â€¦</p>
              </div>
              <span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Active</span>
            </div>
            <button onclick="logoutAllDevices()" class="btn-press w-full flex items-center justify-center gap-2 text-xs font-bold text-red-400 bg-red-500/10 hover:bg-red-500/20 border border-red-500/15 py-2.5 rounded-xl transition">
              <i data-lucide="log-out" class="w-4 h-4"></i> Sign Out from ALL Devices
            </button>
          </div>
        </div>

        <!-- LOGIN HISTORY -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="p-4 border-b border-blue-500/10 flex items-center justify-between">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="history" class="w-4 h-4 text-blue-400"></i> Login History</h3>
            <span class="text-xs text-gray-500">Last ${o.length} events</span>
          </div>
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Event</th><th>IP Address</th><th class="hidden sm:table-cell">Device</th><th>Date</th></tr></thead>
              <tbody>
                ${o.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No security events yet</td></tr>':o.map(u=>{const m=["login_success","login_2fa_success"].includes(u.event_type),g=["login_failed","login_denied","login_backup_code_used"].includes(u.event_type),x=m?"text-emerald-400":g?"text-red-400":"text-gray-300",h={login_success:"Login âœ“",login_failed:"Failed Login âœ—",login_denied:"Access Denied âœ—",login_2fa_success:"2FA Verified âœ“",login_backup_code_used:"Backup Code Used",logout:"Logged Out",logout_all_devices:"Logout All Devices"}[u.event_type]||u.event_type;return`<tr>
                      <td><span class="text-xs font-bold ${x}">${l(h)}</span></td>
                      <td><span class="text-xs font-mono text-gray-300">${l(u.ip_address||"â€”")}</span></td>
                      <td class="hidden sm:table-cell"><span class="text-xs text-gray-500 max-w-[160px] block truncate">${l((u.user_agent||"â€”").slice(0,50))}</span></td>
                      <td><span class="text-xs text-gray-500">${ue(u.created_at)}</span></td>
                    </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,document.getElementById("new-pw")?.addEventListener("input",u=>{const m=u.target.value,g=[{label:"8+ characters",ok:m.length>=8},{label:"Uppercase letter",ok:/[A-Z]/.test(m)},{label:"Number",ok:/[0-9]/.test(m)},{label:"Special character",ok:/[^a-zA-Z0-9]/.test(m)}];document.getElementById("pw-strength").innerHTML=g.map(x=>`<div class="flex items-center gap-1.5 text-[10px] ${x.ok?"text-emerald-400":"text-gray-600"}">
          <i data-lucide="${x.ok?"check-circle":"circle"}" class="w-3 h-3"></i>${x.label}</div>`).join(""),window.lucide&&lucide.createIcons()}),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.changePassword=async function(e){e.preventDefault();const t=document.getElementById("current-pw").value,a=document.getElementById("new-pw").value,i=document.getElementById("confirm-pw").value;if(a!==i){p("Passwords do not match","error");return}if(a.length<8){p("Password must be at least 8 characters","error");return}const{error:o}=await c.auth.signInWithPassword({email:P.user.email,password:t});if(o){p("Current password is incorrect","error");return}const{error:s}=await c.auth.updateUser({password:a});if(s){p(s.message,"error");return}await ee(P.user.id,"password_changed"),p("Password updated successfully!"),e.target.reset(),document.getElementById("pw-strength").innerHTML=""};window.setup2FAFlow=async function(){U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="shield-plus" class="w-5 h-5 text-emerald-400"></i> Enable Two-Factor Authentication</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div id="2fa-setup-content">
          <div class="flex items-center justify-center py-8"><i data-lucide="loader-2" class="w-6 h-6 animate-spin text-blue-400"></i></div>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons();try{const{data:e,error:t}=await c.auth.mfa.enroll({factorType:"totp",friendlyName:"Weverse Admin"});if(t)throw t;const a=e.totp.qr_code,i=e.totp.secret,o=e.id;document.getElementById("2fa-setup-content").innerHTML=`
      <div class="space-y-5">
        <div class="p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300">
          <strong>Step 1:</strong> Open your authenticator app (Google Authenticator, Authy, or similar).<br>
          <strong>Step 2:</strong> Scan the QR code below or enter the secret manually.<br>
          <strong>Step 3:</strong> Enter the 6-digit code shown in your app.
        </div>
        <div class="flex flex-col items-center gap-4">
          <div class="bg-white p-3 rounded-xl">
            <img src="${l(a)}" alt="QR Code" class="w-44 h-44" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-500 w-44 text-center&quot;>QR code unavailable. Use the secret below.</p>'">
          </div>
          <div class="w-full">
            <label class="lbl">Or enter this secret manually</label>
            <div class="flex gap-2">
              <code class="flex-1 input-field font-mono text-xs text-emerald-300 select-all">${l(i)}</code>
              <button onclick="navigator.clipboard.writeText('${l(i)}').then(()=>showToast('Copied!'))" class="btn-press p-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl transition text-blue-400"><i data-lucide="copy" class="w-4 h-4"></i></button>
            </div>
          </div>
        </div>
        <div>
          <label class="lbl">Enter 6-digit code from app *</label>
          <input type="text" id="setup-totp-code" inputmode="numeric" maxlength="6" class="input-field text-center text-xl font-black tracking-[0.5em] py-3" placeholder="000000" autocomplete="one-time-code">
        </div>
        <div id="setup-2fa-error" class="hidden p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs"></div>
        <button onclick="confirm2FAEnrollment('${l(o)}')" class="btn-press w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2">
          <i data-lucide="shield-check" class="w-4 h-4"></i> Verify & Enable 2FA
        </button>
      </div>`,window.lucide&&lucide.createIcons(),setTimeout(()=>document.getElementById("setup-totp-code")?.focus(),100),document.getElementById("setup-totp-code")?.addEventListener("input",s=>{s.target.value=s.target.value.replace(/\D/g,"").slice(0,6)})}catch(e){document.getElementById("2fa-setup-content").innerHTML=`<div class="text-red-400 text-sm text-center py-4">${l(e.message)}</div>`}};window.confirm2FAEnrollment=async function(e){const t=document.getElementById("setup-totp-code")?.value?.trim(),a=document.getElementById("setup-2fa-error");if(!t||t.length!==6){a&&(a.textContent="Enter the 6-digit code.",a.classList.remove("hidden"));return}try{const{data:i,error:o}=await c.auth.mfa.challenge({factorId:e});if(o)throw o;const{error:s}=await c.auth.mfa.verify({factorId:e,challengeId:i.id,code:t});if(s)throw s;const r=si(10);await c.from("admin_2fa").upsert({user_id:P.user.id,enabled:!0,backup_codes:r}),await ee(P.user.id,"2fa_enrolled"),z(),ri(r.map(n=>n.code)),yt()}catch(i){const o=document.getElementById("setup-2fa-error");o&&(o.textContent=i.message?.includes("Invalid")?"Wrong code. Check your app and try again.":i.message,o.classList.remove("hidden")),document.getElementById("setup-totp-code").value="",document.getElementById("setup-totp-code").focus()}};function si(e){const t=[];for(let a=0;a<e;a++){const i=Array.from({length:16},()=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random()*32)]).join("");t.push({code:`${i.slice(0,4)}-${i.slice(4,8)}-${i.slice(8,12)}-${i.slice(12,16)}`,used:!1})}return t}function ri(e){U(`
    <div class="modal-overlay">
      <div class="modal-box">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0"><i data-lucide="key" class="w-5 h-5 text-amber-400"></i></div>
          <div>
            <h3 class="text-base font-black text-white">Save Your Backup Codes</h3>
            <p class="text-xs text-red-400 font-bold">âš  These will not be shown again!</p>
          </div>
        </div>
        <p class="text-xs text-gray-400 mb-4">Store these codes somewhere safe. If you lose your authenticator, use one of these to log in. Each code works once.</p>
        <div class="grid grid-cols-2 gap-2 mb-5">
          ${e.map(t=>`<code class="font-mono text-xs px-3 py-2 bg-blue-500/5 text-blue-300 border border-blue-500/15 rounded-lg text-center select-all">${l(t)}</code>`).join("")}
        </div>
        <div class="flex gap-3">
          <button onclick="copyBackupCodes([${e.map(t=>`'${t}'`).join(",")}])" class="btn-press flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-xl text-xs transition"><i data-lucide="copy" class="w-4 h-4"></i> Copy All</button>
          <button onclick="downloadBackupCodes([${e.map(t=>`'${t}'`).join(",")}])" class="btn-press flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded-xl text-xs transition"><i data-lucide="download" class="w-4 h-4"></i> Download</button>
          <button onclick="closeModal()" class="btn-press px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-xl text-xs transition">Done</button>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()}window.copyBackupCodes=function(e){navigator.clipboard.writeText(e.join(`
`)).then(()=>p("Backup codes copied!"))};window.downloadBackupCodes=function(e){const t=new Blob([`Weverse Admin Backup Codes
Generated: ${new Date().toISOString()}

${e.join(`
`)}

Each code works once. Store securely.`],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download="kco-admin-backup-codes.txt",a.click()};window.regenerateBackupCodes=async function(){if(!confirm("This will invalidate ALL existing backup codes. Continue?"))return;const e=si(10);await c.from("admin_2fa").update({backup_codes:e}).eq("user_id",P.user.id),p("New backup codes generated"),ri(e.map(t=>t.code)),yt()};window.disable2FA=async function(){if(confirm("Disable two-factor authentication? Your account will be less secure."))try{const{data:e}=await c.auth.mfa.listFactors(),t=(e?.totp||[])[0];if(t){const{error:a}=await c.auth.mfa.unenroll({factorId:t.id});if(a)throw a}await c.from("admin_2fa").update({enabled:!1}).eq("user_id",P.user.id),await ee(P.user.id,"2fa_disabled"),p("2FA has been disabled"),yt()}catch(e){p(e.message,"error")}};async function os(){const e=document.getElementById("content");try{const{data:t}=await c.from("admin_activity_logs").select("*").order("created_at",{ascending:!1}).limit(100);e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Activity Logs</h2>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Action</th><th>Entity</th><th class="hidden sm:table-cell">Admin</th><th>Date</th></tr></thead>
              <tbody>
                ${(t||[]).length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No activity yet</td></tr>':(t||[]).map(a=>`<tr>
                    <td><span class="text-xs font-bold text-white">${l(a.action)}</span></td>
                    <td><span class="text-xs text-gray-400">${l(a.entity_type||"â€”")} <span class="text-gray-600">${l(a.entity_id?.slice(0,8)||"")}</span></span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-blue-400">${l(a.user_email||a.user_id?.slice(0,8)||"â€”")}</span></td>
                    <td><span class="text-xs text-gray-500">${ue(a.created_at)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}async function ss(){const e=document.getElementById("content");try{const{data:t}=await c.from("deployment_history").select("*").order("created_at",{ascending:!1}).limit(20);e.innerHTML=`
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white">Backup & Restore</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <div class="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-3"><i data-lucide="download" class="w-5 h-5 text-blue-400"></i></div>
            <h3 class="text-sm font-black text-white mb-1">Export Products</h3>
            <p class="text-xs text-gray-400 mb-4">Download all products and properties as a JSON file.</p>
            <button onclick="exportProducts()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
              <i data-lucide="download" class="w-4 h-4"></i> Download JSON
            </button>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <div class="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center mb-3"><i data-lucide="database" class="w-5 h-5 text-violet-400"></i></div>
            <h3 class="text-sm font-black text-white mb-1">Export Orders</h3>
            <p class="text-xs text-gray-400 mb-4">Download all order data as a CSV file.</p>
            <button onclick="exportOrders()" class="btn-press flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
              <i data-lucide="file-down" class="w-4 h-4"></i> Download CSV
            </button>
          </div>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="p-4 border-b border-blue-500/10"><h3 class="text-sm font-black text-white">Deployment History</h3></div>
          <div class="divide-y divide-blue-500/5">
            ${(t||[]).length===0?'<p class="text-xs text-gray-500 text-center py-8">No deployment history</p>':(t||[]).map(a=>`<div class="flex items-center gap-3 px-4 py-3">
                <div class="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="rocket" class="w-4 h-4 text-emerald-400"></i></div>
                <div class="flex-1"><p class="text-xs font-bold text-white">${l(a.version||a.id?.slice(0,8))}</p><p class="text-[10px] text-gray-500">${ue(a.created_at)}</p></div>
                ${O(a.status||"completed")}
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.exportProducts=async function(){const{data:e}=await c.from("showroom_listings").select("*"),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download=`kco-products-${new Date().toISOString().slice(0,10)}.json`,a.click(),p("Products exported!")};window.exportOrders=async function(){const{data:e}=await c.from("payment_receipts").select("*").order("created_at",{ascending:!1});if(!e||!e.length){p("No orders to export","info");return}const t=Object.keys(e[0]).join(","),a=e.map(s=>Object.values(s).map(r=>`"${String(r||"").replace(/"/g,'""')}"`).join(",")).join(`
`),i=new Blob([t+`
`+a],{type:"text/csv"}),o=document.createElement("a");o.href=URL.createObjectURL(i),o.download=`kco-orders-${new Date().toISOString().slice(0,10)}.csv`,o.click(),p("Orders exported!")};async function rs(){const e=document.getElementById("content"),{data:t}=await c.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">Settings</h2>
      <form id="settings-form" onsubmit="saveSettings(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">General Settings</h3>
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Default Currency</label><select class="input-field" name="default_currency">
              ${["USD","EUR","GBP","NGN","KES","ZAR","GHS"].map(i=>`<option value="${i}" ${(a.default_currency||"USD")===i?"selected":""}>${i}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Default Language</label><select class="input-field" name="default_language">
              ${["en","fr","es","de","pt","ar","sw"].map(i=>`<option value="${i}" ${(a.default_language||"en")===i?"selected":""}>${i}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Timezone</label><input class="input-field" name="timezone" value="${l(a.timezone||"UTC")}" placeholder="UTC"></div>
            <div><label class="lbl">Low Stock Threshold</label><input type="number" class="input-field" name="low_stock_threshold" value="${l(a.low_stock_threshold||10)}" min="1"></div>
          </div>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
          <h3 class="text-sm font-black text-white">Feature Toggles</h3>
          ${[{key:"maintenance_mode",label:"Maintenance Mode",desc:"Show a maintenance page to visitors"},{key:"reviews_enabled",label:"Reviews Enabled",desc:"Allow customers to leave reviews",default:!0},{key:"wishlist_enabled",label:"Wishlist Enabled",desc:"Allow customers to save products",default:!0},{key:"guest_checkout",label:"Guest Checkout",desc:"Allow checkout without an account",default:!0}].map(i=>`
            <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
              <div><p class="text-xs font-bold text-white">${i.label}</p><p class="text-[11px] text-gray-500">${i.desc}</p></div>
              <label class="toggle-switch"><input type="checkbox" name="${i.key}" ${a[i.key]!==!1&&(a[i.key]||i.default)?"checked":""}><span class="toggle-slider"></span></label>
            </div>`).join("")}
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,o]of t.entries())a[i]=o;["maintenance_mode","reviews_enabled","wishlist_enabled","guest_checkout"].forEach(i=>{a[i]=i in a}),await c.from("site_settings").upsert({id:1,...a}),p("Settings saved!")};async function ft(){const e=document.getElementById("content");e&&(e.innerHTML=Se());try{const{data:t}=await c.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{},i=a.homepage_banner_image||"",o=a.homepage_banner_alt||"Homepage header banner",s=i?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.";e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 class="text-xl font-black text-white flex items-center gap-2"><i data-lucide="image" class="w-5 h-5 text-blue-400"></i> Homepage Branding</h2>
            <p class="text-xs text-gray-500 mt-1">Upload a header banner for the homepage. This does not change your logo, text, colors, or verification badge.</p>
          </div>
          <button type="button" onclick="toggleHomepageBannerPreview()" class="btn-press flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition">
            <i data-lucide="eye" class="w-3.5 h-3.5"></i> Live Preview
          </button>
        </div>

        <div id="homepage-banner-preview-panel" class="glass-soft border border-violet-500/20 rounded-2xl p-5 space-y-3 hidden">
          <h3 class="text-xs font-black text-violet-300 uppercase tracking-wider flex items-center gap-2"><i data-lucide="eye" class="w-3.5 h-3.5"></i> Live Preview</h3>
          <div class="rounded-2xl overflow-hidden border border-blue-500/10 bg-[#0f172a]">
            <div class="px-4 py-3 border-b border-white/5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
              <i data-lucide="layout-panel-top" class="w-3.5 h-3.5 text-blue-400"></i>
              Homepage header banner
            </div>
            <div class="bg-[#070b16] p-3 sm:p-4">
              <div class="overflow-hidden rounded-xl border border-white/10 bg-[#111827] shadow-2xl shadow-black/20" style="aspect-ratio: 1600 / 320;">
                ${i?`<img id="homepage-banner-preview-img" src="${l(i)}" alt="${l(o)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-off" class="mx-auto w-8 h-8 text-gray-500"></i><p class="mt-2 text-xs font-semibold text-gray-500">No banner selected</p></div></div>'}
              </div>
            </div>
            <div class="px-4 py-3 border-t border-white/5 bg-[#0b1020] flex items-center gap-2 text-[11px] text-gray-400">
              <i data-lucide="crop" class="w-3.5 h-3.5 text-blue-400"></i>
              <span>Crop / resize is previewed in a fixed banner frame. Wide images work best.</span>
            </div>
          </div>
          <p id="homepage-banner-preview-note" class="text-[10px] text-gray-500">${l(s)}</p>
        </div>

        <form id="homepage-branding-form" onsubmit="saveHomepageBranding(event)" class="space-y-5">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <div class="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="image-plus" class="w-4 h-4 text-blue-400"></i> Header Banner Image</h3>
                <p class="text-[11px] text-gray-500 mt-1">PNG, JPG, WEBP. The banner is stored permanently and published instantly after saving.</p>
              </div>
              <span class="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full font-bold">Homepage only</span>
            </div>

            <div id="homepage-banner-status" class="hidden p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300 flex items-center gap-2">
              <i data-lucide="loader-2" class="w-4 h-4 animate-spin shrink-0"></i>
              <span id="homepage-banner-msg">Uploadingâ€¦</span>
            </div>

            <div class="grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
              <div class="space-y-3">
                <div class="group relative overflow-hidden rounded-2xl border border-dashed border-blue-500/25 bg-[#0b1020] transition hover:border-blue-500/50">
                  <div class="p-3 sm:p-4">
                    <div class="overflow-hidden rounded-xl border border-white/10 bg-[#111827]" style="aspect-ratio: 1600 / 320;">
                      ${i?`<img id="homepage-banner-image" src="${l(i)}" alt="${l(o)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-plus" class="mx-auto w-8 h-8 text-blue-400"></i><p class="mt-2 text-xs font-semibold text-gray-400">Upload a homepage banner</p></div></div>'}
                    </div>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <button type="button" onclick="triggerImgUpload('homepage_banner_image')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">${i?"Replace Image":"Upload Image"}</button>
                      <button type="button" onclick="clearHomepageBannerImg()" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove Image</button>
                      <button type="button" onclick="restoreHomepageBannerDefault()" class="text-xs font-bold text-white bg-slate-700 px-3 py-1.5 rounded-lg">Restore Default</button>
                    </div>
                  </div>
                </div>
                <input type="file" id="file-homepage_banner_image" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'homepage_banner_image')">
                <input type="hidden" name="homepage_banner_image" id="val-homepage_banner_image" value="${l(i)}">
                <input type="text" id="url-homepage_banner_image" value="${l(i)}" placeholder="Or paste image URL" oninput="document.getElementById('val-homepage_banner_image').value=this.value;updateHomepageBannerPreview()" class="input-field text-xs">
                <p class="text-[10px] text-gray-500">Use a wide image for the cleanest banner. The homepage frame will crop/resize it automatically.</p>
              </div>

              <div class="space-y-3">
                <div>
                  <label class="lbl">Banner Alt Text</label>
                  <textarea class="input-field" id="homepage_banner_alt" name="homepage_banner_alt" rows="4" placeholder="Accessible description for the banner image">${l(o)}</textarea>
                </div>
                <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-2">
                  <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> Publish Controls</p>
                  <p class="text-[11px] text-gray-500">Click Publish Changes to save the banner permanently. Remove Image clears it from the homepage.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 bg-blue-500/5 border border-blue-500/15 rounded-xl text-xs text-blue-300 flex items-start gap-3">
            <i data-lucide="info" class="w-4 h-4 shrink-0 mt-0.5 text-blue-400"></i>
            <p>The homepage banner is separate from your brand logo and brand text. It only affects the top homepage header area.</p>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2">
            <i data-lucide="upload" class="w-4 h-4"></i> Publish Changes
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}async function ht(){const e=document.getElementById("content");e&&(e.innerHTML=Se());try{let t=function(n,d,u,m="",g="blue"){const x=!!(u&&u.trim());return`
        <div class="glass-soft border border-${g}-500/15 rounded-xl p-4 space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-xs font-black text-white">${l(n)}</p>
            ${x?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">âœ“ Uploaded</span>':'<span class="text-[9px] text-gray-600">Empty</span>'}
          </div>
          ${x?`<div class="relative group w-full h-24 rounded-xl overflow-hidden bg-gray-900 border border-blue-500/10 flex items-center justify-center">
                <img src="${l(u)}" alt="${l(n)}" class="max-h-20 max-w-full object-contain p-2" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-600 text-center&quot;>Image broken</p>'">
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                  <button type="button" onclick="triggerImgUpload('${d}')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">Replace</button>
                  <button type="button" onclick="clearBrandImg('${d}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
                </div>
               </div>`:`<div class="w-full h-24 rounded-xl border-2 border-dashed border-${g}-500/25 hover:border-${g}-500/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition" onclick="triggerImgUpload('${d}')">
                <i data-lucide="image-plus" class="w-7 h-7 text-${g}-400"></i>
                <p class="text-[11px] text-gray-500">Click to upload</p>
               </div>`}
          ${m?`<p class="text-[10px] text-gray-500">${l(m)}</p>`:""}
          <input type="file" id="file-${d}" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'${d}')">
          <input type="hidden" name="${d}" id="val-${d}" value="${l(u||"")}">
          <div class="flex gap-2">
            <input class="input-field text-xs flex-1 ${x?"":"hidden"}" id="url-${d}" value="${l(u||"")}" placeholder="Or paste image URL" oninput="document.getElementById('val-${d}').value=this.value;updateLivePreview()">
            <button type="button" onclick="document.getElementById('url-${d}').classList.toggle('hidden')" class="text-[10px] text-${g}-400 hover:text-${g}-300 transition shrink-0">${x?"Edit URL":"Paste URL"}</button>
          </div>
        </div>`};const{data:a}=await c.from("site_settings").select("*").limit(1).maybeSingle(),i=a||{},o=i.brand_name||i.site_name||Ba,s=i.brand_slogan||i.site_tagline||La,r=i.brand_logo||i.brand_header_logo||"";e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white flex items-center gap-2"><i data-lucide="palette" class="w-5 h-5 text-blue-400"></i> Brand Manager</h2>
          <div class="flex items-center gap-2">
            <button type="button" onclick="toggleLivePreview()" class="btn-press flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> Live Preview
            </button>
          </div>
        </div>

        <!-- â”€â”€ LIVE PREVIEW PANEL â”€â”€ -->
        <div id="live-preview-panel" class="hidden glass-soft border border-violet-500/20 rounded-2xl p-5 space-y-3">
          <h3 class="text-xs font-black text-violet-300 uppercase tracking-wider flex items-center gap-2"><i data-lucide="eye" class="w-3.5 h-3.5"></i> Live Preview â€” updates as you type</h3>
          <!-- Header preview -->
          <div class="rounded-xl overflow-hidden border border-blue-500/10">
            <div id="preview-header" class="flex items-center gap-3 px-4 py-3" style="background:#0f172a">
              <div id="preview-logo-wrap" class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style="background:var(--preview-primary,#f97316)">
                ${r?`<img src="${l(r)}" alt="${l(o)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
              </div>
              <div>
                <p id="preview-name" class="text-sm font-black text-white leading-none">${l(o)}</p>
                <p id="preview-slogan" class="text-[10px] text-blue-400 font-semibold mt-0.5">${l(s)}</p>
              </div>
              <div id="preview-badge-wrap" class="ml-auto ${i.brand_badge?"":"hidden"}">
                <img id="preview-badge" src="${l(i.brand_badge||"")}" alt="Verified" class="w-6 h-6 object-contain">
              </div>
            </div>
            <div class="px-4 py-2 border-t border-gray-800 text-[11px] text-gray-500" style="background:#070b16">
              <span id="preview-btn" style="background:${l(i.brand_primary_color||"#f97316")};color:#000;padding:4px 12px;border-radius:8px;font-weight:700;font-size:11px">Shop Now</span>
              <span class="ml-3" style="color:${l(i.brand_secondary_color||"#3b82f6")}">All Products â†’</span>
            </div>
          </div>
          <!-- Footer preview -->
          <div id="preview-footer" class="rounded-xl px-4 py-3 border border-gray-800 flex items-center gap-3" style="background:#0f172a">
            <div id="preview-footer-logo-wrap" class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style="background:var(--preview-primary,#f97316)">
              ${r?`<img src="${l(r)}" alt="${l(o)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
            </div>
            <div>
              <p id="preview-footer-name" class="text-xs font-black text-white">${l(o)}</p>
              <p id="preview-footer-slogan" class="text-[10px] text-gray-500">${l(s)}</p>
            </div>
            <p class="ml-auto text-[10px] text-gray-600">Â© 2026 <span id="preview-copy-name">${l(o)}</span></p>
          </div>
          <p class="text-[10px] text-gray-500">This is how your brand will appear on every page. Click Save to apply everywhere.</p>
        </div>

        <form id="brand-form" onsubmit="saveBrandSettings(event)" class="space-y-5">

          <!-- â”€â”€ Brand Identity â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="type" class="w-4 h-4 text-blue-400"></i> Brand Identity</h3>
            <div class="form-grid form-grid-2">
              <div>
                <label class="lbl">Brand Name *</label>
                <input class="input-field" name="brand_name" id="inp-brand-name" value="${l(o)}" placeholder="Your brand name" required oninput="updateLivePreview()">
              </div>
              <div>
                <label class="lbl">Short Name</label>
                <input class="input-field" name="brand_short_name" value="${l(i.brand_short_name||"")}" placeholder="e.g. Weverse">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Slogan / Tagline *</label>
                <input class="input-field" name="brand_slogan" id="inp-brand-slogan" value="${l(s)}" placeholder="e.g. Global Shopping â€¢ Worldwide Delivery" oninput="updateLivePreview()">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Brand Description</label>
                <textarea class="input-field" name="brand_description" rows="2" placeholder="Short descriptionâ€¦">${l(i.brand_description||"")}</textarea>
              </div>
            </div>
          </div>

          <!-- â”€â”€ Brand Colors â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="palette" class="w-4 h-4 text-violet-400"></i> Brand Colors</h3>
            <div class="form-grid form-grid-2">
              <div>
                <label class="lbl">Primary Color (buttons, accents)</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-primary" value="${l(i.brand_primary_color||"#f97316")}" oninput="document.getElementById('ct-primary').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-primary" name="brand_primary_color" value="${l(i.brand_primary_color||"#f97316")}" placeholder="#f97316" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-primary').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Secondary Color (links, highlights)</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-secondary" value="${l(i.brand_secondary_color||"#3b82f6")}" oninput="document.getElementById('ct-secondary').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-secondary" name="brand_secondary_color" value="${l(i.brand_secondary_color||"#3b82f6")}" placeholder="#3b82f6" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-secondary').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Tagline Color 1 (e.g. "GLOBAL SHOPPING")</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-tag1" value="${l(i.brand_tagline_color1||"#22d3ee")}" oninput="document.getElementById('ct-tag1').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-tag1" name="brand_tagline_color1" value="${l(i.brand_tagline_color1||"#22d3ee")}" placeholder="#22d3ee" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-tag1').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Tagline Color 2 (e.g. "WORLDWIDE DELIVERY")</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-tag2" value="${l(i.brand_tagline_color2||"#a3e635")}" oninput="document.getElementById('ct-tag2').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-tag2" name="brand_tagline_color2" value="${l(i.brand_tagline_color2||"#a3e635")}" placeholder="#a3e635" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-tag2').value=this.value;updateLivePreview()">
                </div>
              </div>
            </div>
          </div>

          <!-- â”€â”€ Brand Font â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="type" class="w-4 h-4 text-amber-400"></i> Brand Font</h3>
            <div class="form-grid form-grid-2">
              <div>
                <label class="lbl">Font Family</label>
                <select class="input-field" name="brand_font" id="brand-font-select" onchange="previewFont(this.value)">
                  ${["Inter","Poppins","Roboto","Montserrat","Nunito","Raleway","Lato","Open Sans","Outfit","Plus Jakarta Sans","DM Sans","Urbanist","Sora","Manrope","Work Sans","Space Grotesk"].map(n=>`<option value="${n}" ${(i.brand_font||"Inter")===n?"selected":""}>${n}</option>`).join("")}
                </select>
              </div>
              <div>
                <label class="lbl">Custom Google Font (overrides above)</label>
                <input class="input-field" name="brand_custom_font" value="${l(i.brand_custom_font||"")}" placeholder="e.g. Space Grotesk">
              </div>
            </div>
            <div id="font-preview" class="p-3 rounded-xl bg-gray-900 border border-blue-500/10">
              <p id="font-sample" class="text-sm text-white font-bold" style="font-family:'${l(i.brand_font||"Inter")}',sans-serif">The quick brown fox jumps â€” 0123456789 Â· Weverse Online Shop</p>
            </div>
          </div>

          <!-- â”€â”€ Logo & Verified Badge â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="image" class="w-4 h-4 text-emerald-400"></i> Logos & Verified Badge</h3>
              <p class="text-[10px] text-gray-500">PNG, SVG, WebP</p>
            </div>
            <div id="brand-upload-status" class="hidden p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300 flex items-center gap-2">
              <i data-lucide="loader-2" class="w-4 h-4 animate-spin shrink-0"></i>
              <span id="brand-upload-msg">Uploadingâ€¦</span>
            </div>

            <!-- Verified Badge â€” highlighted at top -->
            <div class="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl space-y-3">
              <div class="flex items-center gap-2 mb-1">
                <i data-lucide="badge-check" class="w-4 h-4 text-blue-400"></i>
                <p class="text-xs font-black text-white">Verified Badge</p>
                <span class="text-[9px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-full font-bold">Shows next to your brand name</span>
              </div>
              ${t("Verification Badge Image","brand_badge",i.brand_badge,"Upload your blue checkmark or any verification badge. Recommended: 64Ã—64px PNG with transparent background.","blue")}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              ${t("Brand Logo / Banner Image","brand_logo",r,"Upload your image here. This changes only the logo/banner image and keeps the other brand fields as they are.")}
              ${t("Favicon / Tab Icon","brand_favicon",i.brand_favicon,"Browser tab icon. 32Ã—32 or 64Ã—64px.")}
              ${t("Mobile Logo","brand_mobile_logo",i.brand_mobile_logo,"Smaller logo for phones. 120Ã—40px.")}
              ${t("Header Logo","brand_header_logo",i.brand_header_logo,"Top navigation bar.")}
              ${t("Footer Logo","brand_footer_logo",i.brand_footer_logo,"Website footer.")}
              ${t("Login Page Logo","brand_login_logo",i.brand_login_logo,"Shown on auth/login page.")}
              ${t("Admin Dashboard Logo","brand_admin_logo",i.brand_admin_logo,"Admin sidebar header.")}
              ${t("OG / Social Image","brand_og_image",i.brand_og_image,"1200Ã—630px â€” shown when sharing links.")}
            </div>
          </div>

          <!-- â”€â”€ Contact â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="globe" class="w-4 h-4 text-blue-400"></i> Website & Contact</h3>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Website URL</label><input class="input-field" name="brand_website_url" value="${l(i.brand_website_url||i.production_url||"https://weverseonlineshop.com")}" placeholder="https://â€¦"></div>
              <div><label class="lbl">Support Email</label><input type="email" class="input-field" name="brand_email" value="${l(i.brand_email||i.contact_email||"")}" placeholder="support@â€¦"></div>
              <div><label class="lbl">Phone / WhatsApp</label><input class="input-field" name="brand_phone" value="${l(i.brand_phone||i.contact_phone||"")}" placeholder="+1 234â€¦"></div>
              <div><label class="lbl">Business Address</label><input class="input-field" name="brand_address" value="${l(i.brand_address||i.contact_address||"")}" placeholder="City, Country"></div>
            </div>
          </div>

          <div class="p-4 bg-blue-500/5 border border-blue-500/15 rounded-xl text-xs text-blue-300 flex items-start gap-3">
            <i data-lucide="info" class="w-4 h-4 shrink-0 mt-0.5 text-blue-400"></i>
            <p>After saving, your brand name, logo image, slogan, and verified badge will automatically appear on <strong>every page</strong> â€” Header, Footer, Login, Checkout, Contact, Admin, and all future pages. Uploading the image does not change your other brand settings.</p>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2">
            <i data-lucide="save" class="w-4 h-4"></i> Save Brand & Apply to All Pages
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.toggleLivePreview=function(){document.getElementById("live-preview-panel")?.classList.toggle("hidden"),updateLivePreview()};window.updateLivePreview=function(){const e=document.getElementById("live-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("inp-brand-name")?.value||Ba,a=document.getElementById("inp-brand-slogan")?.value||La,i=document.getElementById("ct-primary")?.value||"#f97316",o=document.getElementById("ct-secondary")?.value||"#3b82f6",s=document.getElementById("ct-tag1")?.value||"#22d3ee",r=document.getElementById("ct-tag2")?.value||"#a3e635",n=document.getElementById("val-brand_logo")?.value||DEFAULT_BRAND_LOGO,d=document.getElementById("val-brand_badge")?.value||"";["preview-name","preview-footer-name","preview-copy-name"].forEach(b=>{const v=document.getElementById(b);v&&(v.textContent=t)}),["preview-slogan","preview-footer-slogan"].forEach(b=>{const v=document.getElementById(b);v&&(v.textContent=a)});const u=document.getElementById("preview-slogan");if(u&&a){const b=a,v=b.indexOf(","),B=v>-1?b.slice(0,v+1):b,E=v>-1?b.slice(v+1):"";u.innerHTML=`<span style="color:${s};font-weight:800">${l(B)}</span><span style="color:${r};font-weight:700">${l(E)}</span>`}const m=document.getElementById("preview-btn");m&&(m.style.background=i);const g=e.querySelector('[style*="color:"]');g&&(g.style.color=o),["preview-logo-wrap","preview-footer-logo-wrap"].forEach(b=>{const v=document.getElementById(b);v&&(n?(v.innerHTML=`<img src="${n}" alt="${t}" class="w-full h-full object-contain p-1">`,v.style.background="transparent"):(v.innerHTML='<i data-lucide="globe" class="w-4 h-4 text-white"></i>',v.style.background=i,window.lucide&&lucide.createIcons()))});const x=document.getElementById("preview-badge-wrap"),h=document.getElementById("preview-badge");x&&h&&(d?(h.src=d,x.classList.remove("hidden")):x.classList.add("hidden"))};window.triggerImgUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearBrandImg=function(e){document.getElementById("val-"+e).value="";const t=document.getElementById("url-"+e);t&&(t.value=""),(e&&e.startsWith("homepage_")?ft:ht)()};window.clearHomepageBannerImg=function(){const e=document.getElementById("val-homepage_banner_image"),t=document.getElementById("url-homepage_banner_image"),a=document.getElementById("homepage_banner_alt");e&&(e.value=""),t&&(t.value=""),a&&(a.value=""),ft()};window.restoreHomepageBannerDefault=function(){window.clearHomepageBannerImg()};window.syncColor=function(e,t){const a=document.getElementById("color-"+e);a&&/^#[0-9a-fA-F]{6}$/.test(t)&&(a.value=t)};window.previewFont=function(e){const t=document.getElementById("font-sample");t&&(t.style.fontFamily=`'${e}', sans-serif`);const a="gf-preview";let i=document.getElementById(a);i||(i=document.createElement("link"),i.id=a,i.rel="stylesheet",document.head.appendChild(i)),i.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(e)}:wght@400;700;900&display=swap`};const Dt="weverse_brand_v1",jt="weverse_brand_override_v1";function Rt(){try{const e=JSON.parse(localStorage.getItem(jt)||"null");if(e&&typeof e=="object")return e}catch{}try{const e=JSON.parse(localStorage.getItem(Dt)||"null");if(e&&typeof e=="object")return e.data&&typeof e.data=="object"?e.data:e}catch{}return{}}function Je(e){const t={...Rt(),...e};try{localStorage.setItem(jt,JSON.stringify(t))}catch{}try{localStorage.setItem(Dt,JSON.stringify({ts:Date.now(),data:t}))}catch{}return window.dispatchEvent(new StorageEvent("storage",{key:jt})),window.dispatchEvent(new StorageEvent("storage",{key:Dt})),window.dispatchEvent(new CustomEvent("brand-updated",{detail:t})),t}window.handleBrandImgUpload=async function(e,t){const a=e.target.files?.[0];if(!a)return;const i=t&&t.startsWith("homepage_"),o=document.getElementById(i?"homepage-banner-status":"brand-upload-status"),s=document.getElementById(i?"homepage-banner-msg":"brand-upload-msg");o&&o.classList.remove("hidden"),s&&(s.textContent=`Uploading ${a.name}â€¦`);try{const r=a.name.split(".").pop(),n=`brand/${t}-${Date.now()}.${r}`,{error:d}=await c.storage.from("product-images").upload(n,a,{contentType:a.type,upsert:!0});let u;if(d)u=URL.createObjectURL(a),s&&(s.textContent=`Preview only (storage: ${d.message})`);else{const{data:x}=c.storage.from("product-images").getPublicUrl(n);u=x.publicUrl,s&&(s.textContent=`âœ“ ${a.name} uploaded`)}const m=document.getElementById("val-"+t),g=document.getElementById("url-"+t);m&&(m.value=u),g&&(g.value=u,g.classList.remove("hidden")),i?updateHomepageBannerPreview():(updateLivePreview(),setTimeout(()=>ht(),1e3))}catch(r){s&&(s.textContent=`Upload failed: ${r.message}`)}setTimeout(()=>o?.classList.add("hidden"),4e3)};window.saveBrandSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[n,d]of t.entries())n.endsWith("_url")||(a[n]=d);a.brand_slogan&&(a.site_tagline=a.brand_slogan),a.brand_description&&(a.site_description=a.brand_description),a.brand_email&&(a.contact_email=a.brand_email),a.brand_phone&&(a.contact_phone=a.brand_phone),a.brand_address&&(a.contact_address=a.brand_address),a.brand_website_url&&(a.production_url=a.brand_website_url);const i=a.brand_custom_font||a.brand_font;i&&previewFont(i);const o=e.target.querySelector("[type=submit]");o&&(o.disabled=!0,o.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Savingâ€¦',window.lucide&&lucide.createIcons());const{data:s}=await c.from("site_settings").select("id").limit(1).maybeSingle();let r;s?.id?{error:r}=await c.from("site_settings").update(a).eq("id",s.id):{error:r}=await c.from("site_settings").insert(a),r?(Je(a),p("Brand saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(Je(a),p("âœ… Brand saved! All pages will now show your updated brand.","success")),setTimeout(()=>ht(),500)};window.toggleHomepageBannerPreview=function(){document.getElementById("homepage-banner-preview-panel")?.classList.toggle("hidden"),updateHomepageBannerPreview()};window.updateHomepageBannerPreview=function(){const e=document.getElementById("homepage-banner-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("val-homepage_banner_image")?.value||"",a=document.getElementById("homepage_banner_alt")?.value||"Homepage header banner",i=document.getElementById("homepage-banner-image"),o=document.getElementById("homepage-banner-preview-img");[i,o].forEach(r=>{r&&(t?(r.src=t,r.alt=a,r.classList.remove("hidden")):r.classList.add("hidden"))});const s=document.getElementById("homepage-banner-preview-note");s&&(s.textContent=t?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.")};window.saveHomepageBranding=async function(e){e.preventDefault();const t={homepage_banner_image:document.getElementById("url-homepage_banner_image")?.value||"",homepage_banner_alt:document.getElementById("homepage_banner_alt")?.value||"Homepage header banner"},a=e.target.querySelector("[type=submit]");a&&(a.disabled=!0,a.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishingâ€¦',window.lucide&&lucide.createIcons());const{data:i}=await c.from("site_settings").select("id").limit(1).maybeSingle();let o;i?.id?{error:o}=await c.from("site_settings").update(t).eq("id",i.id):{error:o}=await c.from("site_settings").insert(t),o?(Je({...Rt(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),p("Homepage banner saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(Je({...Rt(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),p("Homepage banner published.","success")),setTimeout(()=>ft(),500)};const Xe=[{key:"trust_promo",label:"Promotional Hero (Trust & Info Area)",icon:"sparkles",desc:"The family-receives-orders section above the app banner. Show it as-is for the built-in design, or upload the real photo/video."},{key:"app_banner",label:"Weverse Mobile App Banner",icon:"smartphone",desc:"The dark app banner at the very bottom of every page."},{key:"reviews",label:"Customer Reviews & Trust",icon:"star",desc:"The customer reviews strip just below the accordions."}];async function De(e){const t=document.getElementById("content");t&&(t.innerHTML=Se());try{let a=e?{...e}:null;if(!a){const{data:i}=await c.from("site_settings").select("*").limit(1).maybeSingle(),o=i||{};a={};for(const s of Xe)a[s.key+"_bg_image"]=o[s.key+"_bg_image"]||"",a[s.key+"_bg_video"]=o[s.key+"_bg_video"]||""}t.innerHTML=`
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white flex items-center gap-2"><i data-lucide="image" class="w-5 h-5 text-blue-400"></i> Promo & Backgrounds</h2>
        <p class="text-xs text-gray-500 max-w-2xl leading-relaxed">Choose an <b class="text-gray-300">image</b> and/or a <b class="text-gray-300">video</b> for each promotional section. When a video is set it plays automatically and the image acts as its poster. Leave a slot empty to keep that section’s built-in design. Changes appear instantly on every page after publishing.</p>

        <div id="promo-bg-status" class="hidden p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300 flex items-center gap-2">
          <i data-lucide="loader-2" class="w-4 h-4 animate-spin shrink-0"></i>
          <span id="promo-bg-msg">Uploadingâ€¦</span>
        </div>

        <form id="promo-bg-form" onsubmit="savePromoBackgrounds(event)" class="space-y-5">
          ${Xe.map(i=>ls(i,a)).join("")}

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 flex items-center gap-3">
            <i data-lucide="info" class="w-5 h-5 text-emerald-400 shrink-0"></i>
            <p class="text-[11px] text-gray-400 leading-relaxed">Published backgrounds are cached on visitor devices for up to a minute. Publishing clears the cache so everyone sees your new media immediately.</p>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">
            <i data-lucide="rocket" class="w-4 h-4 inline mr-2"></i>Publish Promo & Backgrounds
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(a){t&&(t.innerHTML=`<div class="p-6 text-red-400">${l(a.message)}</div>`)}}function ls(e,t){const a=e.key+"_bg_image",i=e.key+"_bg_video",o=t[a]||"",s=t[i]||"",r=!!(o&&o.trim()),n=!!(s&&s.trim());return`
    <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center gap-3">
          <div class="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20"><i data-lucide="${e.icon}" class="w-4 h-4 text-blue-400"></i></div>
          <div>
            <p class="text-xs font-black text-white">${e.label}</p>
            <p class="text-[10px] text-gray-500 mt-0.5 max-w-xl">${e.desc}</p>
          </div>
        </div>
        <div class="flex gap-1.5">
          ${r?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">âœ“ Image</span>':""}
          ${n?'<span class="text-[9px] font-bold text-violet-500 bg-violet-500/10 px-1.5 py-0.5 rounded-full">âœ“ Video</span>':""}
          ${r||n?"":'<span class="text-[9px] text-gray-600">Built-in design</span>'}
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${ba(e,a,o,r,"image")}
        ${ba(e,i,s,n,"video")}
      </div>
    </div>`}function ba(e,t,a,i,o){const s=o==="image",r=s?"blue":"violet",n=s?"image-plus":"video",d=s?"text-blue-400":"text-violet-400";return`
    <div>
      <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5"><i data-lucide="${n}" class="w-3 h-3 ${d}"></i>${o}</p>
      ${i?`<div class="relative group w-full h-28 rounded-xl overflow-hidden bg-gray-900 border border-${r}-500/15 flex items-center justify-center">
             ${s?`<img src="${l(a)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`:`<video src="${l(a)}" class="w-full h-full object-cover" muted playsinline preload="metadata"></video>`}
             <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
               <button type="button" onclick="triggerPromoBgUpload('${t}')" class="text-xs font-bold text-white bg-${r}-600 px-3 py-1.5 rounded-lg">Replace</button>
               <button type="button" onclick="clearPromoBg('${t}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
             </div>
           </div>`:`<button type="button" onclick="triggerPromoBgUpload('${t}')" class="w-full h-28 rounded-xl border-2 border-dashed border-${r}-500/25 hover:border-${r}-500/50 flex flex-col items-center justify-center gap-1.5 transition">
             <i data-lucide="${n}" class="w-6 h-6 ${d}"></i>
             <p class="text-[10px] text-gray-500">Upload ${o}</p>
           </button>`}
      <input type="file" id="file-${t}" class="hidden" accept="${s?"image/*":"video/*"}" onchange="handlePromoBgUpload(event,'${t}')">
      <input type="hidden" name="${t}" id="val-${t}" value="${l(a)}">
      <div class="flex gap-2 mt-1.5">
        <input class="input-field text-xs flex-1" id="url-${t}" value="${l(a)}" placeholder="Or paste ${o} URL" oninput="document.getElementById('val-${t}').value=this.value">
        <button type="button" onclick="document.getElementById('url-${t}').classList.toggle('hidden')" class="text-[10px] text-${r}-400 hover:text-${r}-300 transition shrink-0">Edit URL</button>
      </div>
    </div>`}window.triggerPromoBgUpload=function(e){document.getElementById("file-"+e)?.click()};function li(){const e={};for(const t of Xe)e[t.key+"_bg_image"]=document.getElementById("val-"+t.key+"_bg_image")?.value||"",e[t.key+"_bg_video"]=document.getElementById("val-"+t.key+"_bg_video")?.value||"";return e}window.clearPromoBg=function(e){const t=li();t[e]="";const a=document.getElementById("val-"+e),i=document.getElementById("url-"+e);a&&(a.value=""),i&&(i.value=""),De(t),p("Cleared. Publish to apply.","info")};window.handlePromoBgUpload=async function(e,t){const a=e.target.files?.[0];if(!a)return;const i=document.getElementById("promo-bg-status"),o=document.getElementById("promo-bg-msg");i&&i.classList.remove("hidden"),o&&(o.textContent=`Uploading ${a.name}â€¦`);try{const s=(a.name.split(".").pop()||"bin").toLowerCase(),r=`promo/${t}-${Date.now()}.${s}`,{error:n}=await c.storage.from("product-images").upload(r,a,{contentType:a.type,upsert:!0});let d;if(n)d=URL.createObjectURL(a),o&&(o.textContent=`Preview only (storage: ${n.message})`);else{const{data:x}=c.storage.from("product-images").getPublicUrl(r);d=x.publicUrl,o&&(o.textContent=`âœ“ ${a.name} uploaded`)}const u=document.getElementById("val-"+t),m=document.getElementById("url-"+t);u&&(u.value=d),m&&(m.value=d,m.classList.remove("hidden"));const g=li();De(g)}catch(s){o&&(o.textContent=`Upload failed: ${s.message}`)}setTimeout(()=>i?.classList.add("hidden"),4e3)};window.savePromoBackgrounds=async function(e){e.preventDefault();const t={};for(const s of Xe)t[s.key+"_bg_image"]=document.getElementById("val-"+s.key+"_bg_image")?.value||"",t[s.key+"_bg_video"]=document.getElementById("val-"+s.key+"_bg_video")?.value||"";const a=e.target.querySelector("[type=submit]");a&&(a.disabled=!0,a.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishingâ€¦',window.lucide&&lucide.createIcons());const{data:i}=await c.from("site_settings").select("id").limit(1).maybeSingle();let o;i?.id?{error:o}=await c.from("site_settings").update(t).eq("id",i.id):{error:o}=await c.from("site_settings").insert(t),_i(),o?(p("Publish failed â€” the settings table rejected the update. Make sure the new promo-background columns are migrated, then try again.","error"),De(t)):(p("Promo & backgrounds published across all pages.","success"),setTimeout(()=>De(),500))};window._manualPaymentAccounts=[];function ea(e="USD"){return{id:`bank-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,currency:e,currencyName:e,flag:Ut("US"),country:"United States",country_code:"US",bankName:"",transferType:"Local & International",beneficiary:"",accountNumber:"",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:""}}function ta(){const e=document.getElementById("manual-payment-accounts-json");e&&(e.value=JSON.stringify(window._manualPaymentAccounts||[]))}function ns(e,t){const a=e.country_code||"US";return`
    <div class="p-4 glass-soft border border-blue-500/10 rounded-xl space-y-3">
      <div class="flex items-center justify-between gap-3">
        <h4 class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="building-2" class="w-3.5 h-3.5 text-blue-400"></i> Bank Account ${t+1}</h4>
        <button type="button" onclick="removeManualPaymentAccount(${t})" class="text-[11px] font-bold text-red-400 hover:text-red-300 transition">Remove</button>
      </div>
      <div class="form-grid form-grid-2">
        <div><label class="lbl">Currency *</label><select class="input-field" onchange="updateManualPaymentAccount(${t}, 'currency', this.value)">${Gt.map(i=>`<option value="${i}" ${e.currency===i?"selected":""}>${i}</option>`).join("")}</select></div>
        <div><label class="lbl">Country *</label><select class="input-field" onchange="updateManualPaymentCountry(${t}, this.value)">${Yt(a)}</select></div>
        <div><label class="lbl">Beneficiary / Account Name *</label><input class="input-field" value="${l(e.beneficiary||"")}" placeholder="Full name on account" oninput="updateManualPaymentAccount(${t}, 'beneficiary', this.value)"></div>
        <div><label class="lbl">Bank Name *</label><input class="input-field" value="${l(e.bankName||"")}" placeholder="e.g. Citibank" oninput="updateManualPaymentAccount(${t}, 'bankName', this.value)"></div>
        <div><label class="lbl">Account Number</label><input class="input-field font-mono" value="${l(e.accountNumber||"")}" placeholder="Account number" oninput="updateManualPaymentAccount(${t}, 'accountNumber', this.value)"></div>
        <div><label class="lbl">Transfer Type</label><input class="input-field" value="${l(e.transferType||"")}" placeholder="Local & International" oninput="updateManualPaymentAccount(${t}, 'transferType', this.value)"></div>
        <div><label class="lbl">Account Type</label><input class="input-field" value="${l(e.accountType||"")}" placeholder="Checking, Savings..." oninput="updateManualPaymentAccount(${t}, 'accountType', this.value)"></div>
        <div><label class="lbl">IBAN</label><input class="input-field font-mono" value="${l(e.iban||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'iban', this.value)"></div>
        <div><label class="lbl">SWIFT / BIC</label><input class="input-field font-mono" value="${l(e.swift||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'swift', this.value)"></div>
        <div><label class="lbl">Routing / ABA</label><input class="input-field font-mono" value="${l(e.routing||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'routing', this.value)"></div>
        <div><label class="lbl">Sort Code</label><input class="input-field font-mono" value="${l(e.sortCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'sortCode', this.value)"></div>
        <div><label class="lbl">Bank Code</label><input class="input-field font-mono" value="${l(e.bankCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'bankCode', this.value)"></div>
        <div><label class="lbl">Branch Code</label><input class="input-field font-mono" value="${l(e.branchCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'branchCode', this.value)"></div>
        <div><label class="lbl">Institution Number</label><input class="input-field font-mono" value="${l(e.institutionNumber||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'institutionNumber', this.value)"></div>
        <div><label class="lbl">Transit Number</label><input class="input-field font-mono" value="${l(e.transitNumber||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'transitNumber', this.value)"></div>
        <div><label class="lbl">BSB Code</label><input class="input-field font-mono" value="${l(e.bsbCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'bsbCode', this.value)"></div>
        <div class="sm:col-span-2"><label class="lbl">Bank Address</label><input class="input-field" value="${l(e.address||"")}" placeholder="Branch or bank address" oninput="updateManualPaymentAccount(${t}, 'address', this.value)"></div>
      </div>
    </div>`}window.renderManualPaymentAccountsEditor=function(){const e=document.getElementById("manual-accounts-editor");e&&(window._manualPaymentAccounts?.length||(window._manualPaymentAccounts=[ea()]),e.innerHTML=`
    <div class="space-y-4">
      ${window._manualPaymentAccounts.map((t,a)=>ns(t,a)).join("")}
      <button type="button" onclick="addManualPaymentAccount()" class="btn-press w-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wide transition flex items-center justify-center gap-2">
        <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Another Bank Account
      </button>
    </div>`,ta(),window.lucide&&lucide.createIcons())};window.addManualPaymentAccount=function(){window._manualPaymentAccounts.push(ea()),renderManualPaymentAccountsEditor()};window.removeManualPaymentAccount=function(e){window._manualPaymentAccounts.splice(e,1),window._manualPaymentAccounts.length||(window._manualPaymentAccounts=[ea()]),renderManualPaymentAccountsEditor()};window.updateManualPaymentAccount=function(e,t,a){const i=window._manualPaymentAccounts[e];i&&(i[t]=a,t==="currency"&&(i.currencyName=a),ta())};window.updateManualPaymentCountry=function(e,t){const a=window._manualPaymentAccounts[e];if(!a)return;const i=je.find(o=>o.code===t);a.country_code=t,a.country=i?.name||"",a.flag=i?.flag||Ut(t),ta(),renderManualPaymentAccountsEditor()};window._bankAccounts=[];async function ds(){try{const{data:e,error:t}=await c.from("bank_accounts").select("*").order("sort_order",{ascending:!0}).order("currency",{ascending:!0});if(t)return p(t.message,"error"),[];window._bankAccounts=e||[]}catch{window._bankAccounts=[]}return window._bankAccounts}async function vt(){const e=document.getElementById("bank-accounts-manager");e&&(e.innerHTML='<div class="flex items-center justify-center py-6 text-blue-300 text-sm"><i data-lucide="loader-2" class="w-4 h-4 animate-spin mr-2"></i> Loading accounts…</div>',window.lucide&&lucide.createIcons(),await ds(),e.innerHTML=`
    <div class="space-y-3">
      <div class="flex items-center justify-between">
        <h4 class="text-xs font-black text-white uppercase tracking-wide">Receiving Accounts</h4>
        <span class="badge bg-blue-500/10 text-blue-400 border-blue-500/20">${window._bankAccounts.length} total</span>
      </div>
      <div class="space-y-2">
        ${window._bankAccounts.length===0?'<div class="p-4 glass-soft border border-blue-500/10 rounded-xl text-xs text-gray-400">No receiving accounts yet — add your first one.</div>':window._bankAccounts.map(t=>`
          <div class="flex items-center gap-3 p-3 glass-soft border ${t.is_active!==!1?"border-blue-500/20":"border-red-500/20 opacity-60"} rounded-xl">
            <span class="text-xl">${t.flag||Ut(t.country_code||(t.currency==="EUR"?"EU":"US"))}</span>
            <div class="flex-1 min-w-0">
              <p class="text-xs font-black text-white flex items-center gap-2">${l(t.display_name||t.currency+" Receiving Account")} <span class="text-[10px] text-blue-400 font-bold">${l(t.currency||"")}</span></p>
              <p class="text-[10px] text-gray-500 truncate font-mono">${l(t.bank_name||"")} · ${l(t.beneficiary||"")}</p>
            </div>
            <button onclick="toggleBankAccount('${t.id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[10px] font-bold ${t.is_active!==!1?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-red-500/10 text-red-400 border border-red-500/20"} transition">${t.is_active!==!1?"Active":"Inactive"}</button>
            <button onclick="editBankAccount('${t.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
            <button onclick="deleteBankAccount('${t.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
          </div>
        `).join("")}
      </div>
      <button onclick="editBankAccount(null)" class="btn-press w-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wide transition flex items-center justify-center gap-2 relative overflow-hidden">
        <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Receiving Account
      </button>
    </div>`,window.lucide&&lucide.createIcons())}window.editBankAccount=function(e){const a={display_name:"",currency:"USD",currency_name:"United States Dollar",flag:"",country:"United States",country_code:"US",bank_name:"",transfer_type:"Local & International",beneficiary:"",account_number:"",account_type:"",iban:"",swift:"",routing:"",sort_code:"",bank_code:"",branch_code:"",institution_number:"",transit_number:"",bsb_code:"",address:"",is_active:!0,...(e?(window._bankAccounts||[]).find(o=>o.id===e):null)||{}},i=(o,s,r="",n="")=>`
    <div>
      <label class="lbl">${o}</label>
      <input class="input-field ${r.includes("mono")?"font-mono":""}" id="ba-${s}" value="${l(a[s]||"")}" placeholder="${r.replace(/"/g,"&quot;")}" ${n}>
    </div>`;U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box max-w-2xl max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${e?"Edit Receiving Account":"Add Receiving Account"}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="form-grid form-grid-2 space-y-3">
          ${i("Display Name","display_name","e.g. USD Receiving Account")}
          <div><label class="lbl">Currency *</label><select class="input-field" id="ba-currency" onchange="document.getElementById('ba-currency_name').value=this.value">${Gt.map(o=>`<option value="${o}" ${a.currency===o?"selected":""}>${o}</option>`).join("")}</select></div>
          ${i("Beneficiary / Account Name *","beneficiary","Full legal name on the account")}
          ${i("Bank Name *","bank_name","e.g. Citibank")}
          ${i("Country","country")}
          <div class="flex items-end"><div class="flex-1"><label class="lbl">Country Code</label><select class="input-field" id="ba-country_code">${Yt(l(a.country_code||"US"))}</select></div></div>
          <div class="flex items-end"><div class="flex-1"><label class="lbl">Active</label><div class="flex items-center gap-2 pt-2"><input type="checkbox" id="ba-is_active" class="accent-blue-500" ${a.is_active!==!1?"checked":""}><span class="text-xs text-gray-400">Visible at checkout</span></div></div></div>
          ${i("Account Number","account_number","mono")}
          ${i("Account Type","account_type","Checking, Savings…")}
          ${i("Transfer Type","transfer_type")}
          ${i("IBAN","iban","mono")}
          ${i("SWIFT / BIC","swift","mono")}
          ${i("Routing (ABA)","routing","mono")}
          ${i("Sort Code","sort_code","mono")}
          ${i("Bank Code","bank_code","mono")}
          ${i("Branch Code","branch_code","mono")}
          ${i("Institution Number","institution_number","mono")}
          ${i("Transit Number","transit_number","mono")}
          ${i("BSB Code","bsb_code","mono")}
          <div class="sm:col-span-2">${i("Bank Address","address")}</div>
        </div>
        <div class="flex gap-2 mt-5">
          <button onclick="saveBankAccount('${e||""}')" class="btn-press flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wide transition"><i data-lucide="save" class="w-4 h-4 inline mr-1 align-[-2px]"></i> Save Account</button>
          <button onclick="closeModal()" class="btn-press px-4 bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold py-3 rounded-xl text-xs transition flex items-center gap-1.5"><i data-lucide="x" class="w-4 h-4"></i> Cancel</button>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()};window.saveBankAccount=async function(e){const t=o=>(document.getElementById("ba-"+o)||{}).value||"",a={display_name:t("display_name"),currency:(t("currency")||"USD").toUpperCase(),currency_name:t("currency_name")||t("currency"),flag:t("flag"),country:t("country"),country_code:t("country_code"),bank_name:t("bank_name"),transfer_type:t("transfer_type"),beneficiary:t("beneficiary"),account_number:t("account_number"),account_type:t("account_type"),iban:t("iban"),swift:t("swift"),routing:t("routing"),sort_code:t("sort_code"),bank_code:t("bank_code"),branch_code:t("branch_code"),institution_number:t("institution_number"),transit_number:t("transit_number"),bsb_code:t("bsb_code"),address:t("address"),is_active:!!(document.getElementById("ba-is_active")||{}).checked};if(!a.currency||!a.beneficiary||!a.bank_name){p("Currency, beneficiary and bank name are required.","error");return}const{error:i}=e?await c.from("bank_accounts").update(a).eq("id",e):await c.from("bank_accounts").insert(a);if(i){p(i.message,"error");return}z(),p("Receiving account saved"),vt()};window.toggleBankAccount=async function(e){const t=(window._bankAccounts||[]).find(i=>i.id===e);if(!t)return;const{error:a}=await c.from("bank_accounts").update({is_active:t.is_active===!1}).eq("id",e);if(a){p(a.message,"error");return}p(t.is_active!==!1?"Account deactivated — hidden from checkout.":"Account activated — visible at checkout."),vt()};window.deleteBankAccount=async function(e){if(!window.confirm("Delete this receiving account permanently?"))return;const{error:t}=await c.from("bank_accounts").delete().eq("id",e);if(t){p(t.message,"error");return}p("Receiving account deleted"),vt()};async function qt(){const e=document.getElementById("content");e&&(e.innerHTML=Se());try{const{data:t}=await c.from("site_settings").select("*").limit(1).maybeSingle(),i={...vi()||{},...t||{}};window._bankAccounts=(window._bankAccounts||[]).map(o=>({...o})),e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white">Payment Settings</h2>
          <div class="flex items-center gap-2 flex-wrap">
            ${i.payment_gateway?`<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Active: ${l(i.payment_gateway)}</span>`:'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Not configured</span>'}
            ${i.payment_mode==="live"?'<span class="badge bg-red-500/10 text-red-400 border-red-500/20">ðŸ”´ LIVE MODE</span>':'<span class="badge bg-blue-500/10 text-blue-400 border-blue-500/20">ðŸ”§ Test Mode</span>'}
          </div>
        </div>

        <form id="payment-form" onsubmit="savePaymentSettings(event)" class="space-y-5">
          <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
            <div class="flex items-center justify-between p-4 border-b border-blue-500/10">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <i data-lucide="landmark" class="w-5 h-5 text-blue-400"></i>
                </div>
                <div>
                  <h3 class="text-sm font-black text-white">Manual Payment (Bank / ATM Transfer)</h3>
                  <p class="text-[11px] text-gray-500">Store the real receiving accounts below — these are hidden from the public site and shown to customers at checkout only from the database.</p>
                </div>
              </div>
              <label class="toggle-switch shrink-0">
                <input type="checkbox" name="manual_payment_enabled" id="manual-toggle" ${i.manual_payment_enabled!==!1?"checked":""}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="p-5 space-y-4">
              <div id="bank-accounts-manager"></div>
              <div>
                <label class="lbl">Payment Instructions (shown to customer after checkout)</label>
                <textarea class="input-field" name="manual_payment_instructions" rows="4" placeholder="Explain how customers should pay and upload their receipt.">${l(xi(i))}</textarea>
              </div>
              <div>
                <label class="lbl">ATM Transfer Instructions (optional, shown separately)</label>
                <textarea class="input-field" name="atm_transfer_instructions" rows="3" placeholder="Optional ATM-specific instructions.">${l(i.atm_transfer_instructions||"")}</textarea>
              </div>
              <div class="p-3 bg-blue-500/5 border border-blue-500/15 rounded-xl text-[11px] text-blue-300">
                <i data-lucide="info" class="w-3.5 h-3.5 inline mr-1"></i>
                Only currencies with an <em>active</em> receiving account are offered at checkout. A transfer of 1,000 USD (or equivalent) or more must be paid by manual bank transfer — card/ATM is reserved for smaller orders.
              </div>
            </div>
          </div>

          <div class="glass-soft border border-amber-500/15 rounded-2xl overflow-hidden">
            <div class="flex items-center justify-between p-4 border-b border-amber-500/10">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <i data-lucide="zap" class="w-5 h-5 text-amber-400"></i>
                </div>
                <div>
                  <h3 class="text-sm font-black text-white">Flutterwave</h3>
                  <p class="text-[11px] text-gray-500">Accept cards, mobile money, bank transfers online</p>
                </div>
              </div>
              <label class="toggle-switch shrink-0">
                <input type="checkbox" name="flutterwave_enabled" ${i.flutterwave_enabled?"checked":""}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="p-5 space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex items-center gap-3 p-3 glass-soft border ${(i.payment_mode||"test")==="test"?"border-blue-500/40 bg-blue-500/5":"border-blue-500/10"} rounded-xl cursor-pointer">
                  <input type="radio" name="payment_mode" value="test" ${(i.payment_mode||"test")==="test"?"checked":""} class="accent-blue-500">
                  <div><p class="text-xs font-black text-white">ðŸ”§ Test Mode</p><p class="text-[11px] text-gray-500">Use sandbox keys â€” no real money</p></div>
                </label>
                <label class="flex items-center gap-3 p-3 glass-soft border ${i.payment_mode==="live"?"border-red-500/40 bg-red-500/5":"border-blue-500/10"} rounded-xl cursor-pointer">
                  <input type="radio" name="payment_mode" value="live" ${i.payment_mode==="live"?"checked":""} class="accent-red-500">
                  <div><p class="text-xs font-black text-white">ðŸ”´ Live Mode</p><p class="text-[11px] text-red-400 font-bold">Real money â€” use production keys</p></div>
                </label>
              </div>
              <div class="form-grid form-grid-2">
                <div><label class="lbl">Public Key *</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_public_key" placeholder="${i.flutterwave_public_key?"â€¢â€¢â€¢â€¢"+i.flutterwave_public_key.slice(-4):"FLWPUBK_TEST-â€¦ or FLWPUBK-â€¦"}">${i.flutterwave_public_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}</div></div>
                <div><label class="lbl">Secret Key *</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_secret_key" placeholder="${i.flutterwave_secret_key?"â€¢â€¢â€¢â€¢"+i.flutterwave_secret_key.slice(-4):"FLWSECK_TEST-â€¦ or FLWSECK-â€¦"}">${i.flutterwave_secret_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}</div></div>
                <div><label class="lbl">Encryption Key</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_encryption_key" placeholder="${i.flutterwave_encryption_key?"â€¢â€¢â€¢â€¢"+i.flutterwave_encryption_key.slice(-4):"Encryption key from dashboard"}">${i.flutterwave_encryption_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}</div></div>
                <div><label class="lbl">Webhook Secret</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_webhook_secret" placeholder="${i.flutterwave_webhook_secret?"â€¢â€¢â€¢â€¢"+i.flutterwave_webhook_secret.slice(-4):"Secret hash for webhook verification"}">${i.flutterwave_webhook_secret?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}</div></div>
                <div><label class="lbl">Accepted Currency</label><select class="input-field" name="flutterwave_currency">${["NGN","USD","GBP","EUR","GHS","KES","ZAR","ZMW","TZS","UGX","XAF","XOF"].map(o=>`<option value="${o}" ${(i.flutterwave_currency||"NGN")===o?"selected":""}>${o}</option>`).join("")}</select></div>
                <div><label class="lbl">Redirect URL (after payment)</label><input class="input-field" name="flutterwave_redirect_url" value="${l(i.flutterwave_redirect_url||"")}" placeholder="${window.location.origin}/payment.html"></div>
              </div>
              <div class="p-3 bg-amber-500/5 border border-amber-500/15 rounded-xl text-[11px] text-amber-300 space-y-1">
                <p><strong>Where to get keys:</strong> <a href="https://dashboard.flutterwave.com/dashboard/settings/apis" target="_blank" class="underline hover:text-amber-200">dashboard.flutterwave.com â†’ Settings â†’ API</a></p>
                <p><strong>Webhook URL to add in Flutterwave:</strong> <code class="bg-black/30 px-1 rounded">${window.location.origin}/api/flutterwave-webhook</code></p>
                <p>Test cards: Visa <code class="bg-black/30 px-1 rounded">4187 4274 1556 4246</code> Â· PIN: <code class="bg-black/30 px-1 rounded">3310</code> Â· OTP: <code class="bg-black/30 px-1 rounded">12345</code></p>
              </div>
              <button type="button" onclick="testFlutterwaveKeys()" class="btn-press flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 px-4 py-2 rounded-xl transition"><i data-lucide="plug" class="w-4 h-4"></i> Test Flutterwave Connection</button>
            </div>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white mb-1">Which payment method is active on checkout?</h3>
            <p class="text-xs text-gray-400 mb-3">Select which method customers see when they go to pay.</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${[{id:"manual",label:"Manual / Bank Transfer",icon:"landmark",color:"blue"},{id:"flutterwave",label:"Flutterwave",icon:"zap",color:"amber"},{id:"both",label:"Both (customer chooses)",icon:"layers",color:"emerald"}].map(o=>`<label class="flex items-center gap-3 p-3 glass-soft border ${(i.payment_gateway||"manual")===o.id?"border-blue-500/40 bg-blue-500/5":"border-blue-500/10"} rounded-xl cursor-pointer hover:border-blue-500/30 transition"><input type="radio" name="payment_gateway" value="${o.id}" ${(i.payment_gateway||"manual")===o.id?"checked":""} class="accent-blue-500"><div><i data-lucide="${o.icon}" class="w-4 h-4 text-${o.color}-400 mb-0.5"></i><p class="text-xs font-bold text-white">${o.label}</p></div></label>`).join("")}
            </div>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2"><i data-lucide="save" class="w-4 h-4"></i> Save Payment Settings</button>
        </form>
      </div>`,vt(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.savePaymentSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=["flutterwave_public_key","flutterwave_secret_key","flutterwave_encryption_key","flutterwave_webhook_secret"],o={};for(const[n,d]of Object.entries(a))i.includes(n)?d&&!d.startsWith("â€¢â€¢â€¢â€¢")&&d.trim()!==""&&(o[n]=d.trim()):o[n]=d;o.manual_payment_enabled=a.manual_payment_enabled==="on",o.flutterwave_enabled=a.flutterwave_enabled==="on",hi(o);const{data:s}=await c.from("site_settings").select("id").limit(1).maybeSingle();let r;if(s?.id?{error:r}=await c.from("site_settings").update(o).eq("id",s.id):{error:r}=await c.from("site_settings").insert(o),r){const n=String(r.message||"");if(/manual_payment_accounts|column|schema cache/i.test(n)){p("Payment settings saved locally. Run the latest migration to persist them to Supabase.","info"),console.warn(r),setTimeout(()=>qt(),500);return}p("Save failed: "+r.message,"error"),console.error(r);return}p("âœ… Payment settings saved successfully!","success"),setTimeout(()=>qt(),500)};window.testFlutterwaveKeys=async function(){const{data:e}=await c.from("site_settings").select("flutterwave_public_key").limit(1).maybeSingle();if(!e?.flutterwave_public_key){p("Save your Flutterwave public key first","info");return}p("Flutterwave key is saved. Use test mode + test card to verify a payment flow.","info")};async function xt(){const e=document.getElementById("content");try{const{data:t}=await c.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white">Publish & Deploy</h2>

        <!-- Status Bar -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 flex flex-wrap items-center gap-4">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${a.github_repo?"bg-emerald-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${a.github_repo?"text-emerald-400":"text-gray-500"}">${a.github_repo?"GitHub Connected: "+l(a.github_repo):"GitHub Not Connected"}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${a.deploy_webhook?"bg-blue-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${a.deploy_webhook?"text-blue-400":"text-gray-500"}">${a.deploy_webhook?"Deploy Webhook Set":"No Webhook"}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${a.payment_gateway?"bg-amber-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${a.payment_gateway?"text-amber-400":"text-gray-500"}">${a.payment_gateway?"Payment: "+l(a.payment_gateway):"Payment Not Configured"}</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <button onclick="publishAndDeploy(event)" class="btn-press glass-soft border border-emerald-500/20 hover:border-emerald-500/40 rounded-xl p-4 text-center transition" data-publish-easy-btn>
            <i data-lucide="wand-sparkles" class="w-6 h-6 text-emerald-400 mx-auto mb-2"></i>
            <p class="text-xs font-black text-white">One-Click Publish</p>
            <p class="text-[10px] text-gray-500 mt-0.5">Save + Deploy</p>
          </button>
          <button onclick="triggerDeploy(event)" class="btn-press glass-soft border border-blue-500/15 hover:border-blue-500/40 rounded-xl p-4 text-center transition" data-deploy-btn>
            <i data-lucide="rocket" class="w-6 h-6 text-blue-400 mx-auto mb-2"></i>
            <p class="text-xs font-black text-white">Deploy Now</p>
            <p class="text-[10px] text-gray-500 mt-0.5">Push to live</p>
          </button>
          <button onclick="triggerRebuild(event)" class="btn-press glass-soft border border-violet-500/15 hover:border-violet-500/40 rounded-xl p-4 text-center transition" data-rebuild-btn>
            <i data-lucide="refresh-cw" class="w-6 h-6 text-violet-400 mx-auto mb-2"></i>
            <p class="text-xs font-black text-white">Rebuild Site</p>
            <p class="text-[10px] text-gray-500 mt-0.5">Full rebuild</p>
          </button>
          <button onclick="reindexSearch()" class="btn-press glass-soft border border-emerald-500/15 hover:border-emerald-500/40 rounded-xl p-4 text-center transition">
            <i data-lucide="search" class="w-6 h-6 text-emerald-400 mx-auto mb-2"></i>
            <p class="text-xs font-black text-white">Reindex Search</p>
            <p class="text-[10px] text-gray-500 mt-0.5">Update index</p>
          </button>
          <button onclick="syncShowroomToDB()" class="btn-press glass-soft border border-amber-500/15 hover:border-amber-500/40 rounded-xl p-4 text-center transition">
            <i data-lucide="database" class="w-6 h-6 text-amber-400 mx-auto mb-2"></i>
            <p class="text-xs font-black text-white">Sync Products</p>
            <p class="text-[10px] text-gray-500 mt-0.5">DB sync</p>
          </button>
        </div>

        <!-- Settings Form -->
        <form id="deploy-form" onsubmit="saveDeploySettings(event)" class="space-y-5">

          <!-- â”€â”€ GitHub Integration â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2">
              <i data-lucide="github" class="w-4 h-4 text-white"></i> GitHub Integration
            </h3>
            <div class="p-3 bg-blue-500/5 border border-blue-500/20 rounded-xl text-xs text-blue-300">
              Connect your GitHub account so every deployment pushes your code to GitHub automatically.
              When you click <strong>Deploy Now</strong>, the site builds and commits to your repository.
            </div>
            <div class="form-grid form-grid-2">
              <div>
                <label class="lbl">GitHub Username</label>
                <input class="input-field" name="github_username" value="${l(a.github_username||"")}" placeholder="your-github-username">
              </div>
              <div>
                <label class="lbl">Repository Name</label>
                <input class="input-field" name="github_repo" value="${l(a.github_repo||"")}" placeholder="my-website-repo">
              </div>
              <div>
                <label class="lbl">Branch</label>
                <input class="input-field" name="github_branch" value="${l(a.github_branch||"main")}" placeholder="main">
              </div>
              <div>
                <label class="lbl">GitHub Personal Access Token</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="github_token" placeholder="${a.github_token?"â€¢â€¢â€¢â€¢"+a.github_token.slice(-4):"ghp_â€¦paste your token"}">
                  ${a.github_token?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}
                </div>
                <p class="text-[10px] text-gray-500 mt-1">Generate at: <a href="https://github.com/settings/tokens" target="_blank" class="text-blue-400 hover:underline">github.com/settings/tokens</a> (needs repo scope)</p>
              </div>
            </div>
            <button type="button" onclick="testGitHubConnection()" class="btn-press flex items-center gap-2 text-xs font-bold text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2 rounded-xl transition">
              <i data-lucide="plug" class="w-4 h-4"></i> Test GitHub Connection
            </button>
          </div>

          <!-- â”€â”€ Hosting & Deploy Webhook â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2">
              <i data-lucide="cloud-upload" class="w-4 h-4 text-blue-400"></i> Hosting & Auto-Deploy
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${[{id:"netlify",name:"Netlify",icon:"cloud",color:"teal"},{id:"vercel",name:"Vercel",icon:"triangle",color:"white"},{id:"github-pages",name:"GitHub Pages",icon:"github",color:"gray"},{id:"railway",name:"Railway",icon:"train",color:"violet"},{id:"render",name:"Render",icon:"server",color:"blue"}].map(i=>`
                <label class="flex items-center gap-2 p-3 glass-soft border ${(a.hosting_provider||"netlify")===i.id?"border-blue-500/40 bg-blue-500/5":"border-blue-500/10"} rounded-xl cursor-pointer hover:border-blue-500/30 transition">
                  <input type="radio" name="hosting_provider" value="${i.id}" ${(a.hosting_provider||"netlify")===i.id?"checked":""} class="accent-blue-500">
                  <i data-lucide="${i.icon}" class="w-4 h-4 text-gray-400"></i>
                  <span class="text-xs font-bold text-white">${i.name}</span>
                </label>`).join("")}
            </div>
            <div>
              <label class="lbl">Deploy Webhook URL</label>
              <input class="input-field" name="deploy_webhook" value="${l(a.deploy_webhook||"")}" placeholder="https://api.netlify.com/build_hooks/â€¦">
              <p class="text-[10px] text-gray-500 mt-1">Netlify: Site Settings â†’ Build hooks Â· Vercel: Project â†’ Settings â†’ Git â†’ Deploy Hooks</p>
            </div>
            <div>
              <label class="lbl">Production URL</label>
              <input class="input-field" name="production_url" value="${l(a.production_url||"")}" placeholder="https://yoursite.com">
            </div>
          </div>

          <!-- â”€â”€ Payment Settings â”€â”€ -->
          <div class="glass-soft border border-amber-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2">
              <i data-lucide="credit-card" class="w-4 h-4 text-amber-400"></i> Payment Gateway Settings
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${[{id:"flutterwave",name:"Flutterwave",color:"amber"},{id:"stripe",name:"Stripe",color:"blue"},{id:"paypal",name:"PayPal",color:"blue"},{id:"paystack",name:"Paystack",color:"blue"},{id:"razorpay",name:"Razorpay",color:"blue"},{id:"manual",name:"Manual Bank Transfer",color:"gray"}].map(i=>`
                <label class="flex items-center gap-2 p-2.5 glass-soft border ${(a.payment_gateway||"flutterwave")===i.id?"border-amber-500/40 bg-amber-500/5":"border-blue-500/10"} rounded-xl cursor-pointer hover:border-amber-500/30 transition">
                  <input type="radio" name="payment_gateway" value="${i.id}" ${(a.payment_gateway||"flutterwave")===i.id?"checked":""} class="accent-amber-500">
                  <span class="text-xs font-bold text-white">${i.name}</span>
                </label>`).join("")}
            </div>
            <div id="payment-key-fields" class="form-grid form-grid-2">
              <div>
                <label class="lbl">Public / Publishable Key</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="payment_public_key" placeholder="${a.payment_public_key?"â€¢â€¢â€¢â€¢"+a.payment_public_key.slice(-4):"Paste public keyâ€¦"}">
                  ${a.payment_public_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}
                </div>
              </div>
              <div>
                <label class="lbl">Secret / Private Key</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="payment_secret_key" placeholder="${a.payment_secret_key?"â€¢â€¢â€¢â€¢"+a.payment_secret_key.slice(-4):"Paste secret keyâ€¦"}">
                  ${a.payment_secret_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}
                </div>
              </div>
              <div>
                <label class="lbl">Currency</label>
                <select class="input-field" name="payment_currency">
                  ${["USD","EUR","GBP","NGN","KES","ZAR","GHS","ZMW","TZS","UGX"].map(i=>`<option value="${i}" ${(a.payment_currency||"USD")===i?"selected":""}>${i}</option>`).join("")}
                </select>
              </div>
              <div>
                <label class="lbl">Test / Live Mode</label>
                <select class="input-field" name="payment_mode">
                  <option value="test" ${(a.payment_mode||"test")==="test"?"selected":""}>ðŸ”§ Test Mode (sandbox)</option>
                  <option value="live" ${a.payment_mode==="live"?"selected":""}>ðŸš€ Live Mode (real money)</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Webhook Secret (for payment verification)</label>
                <input type="password" class="input-field" name="payment_webhook_secret" placeholder="${a.payment_webhook_secret?"â€¢â€¢â€¢â€¢"+a.payment_webhook_secret.slice(-4):"Paste webhook secretâ€¦"}">
              </div>
            </div>
            <div class="p-3 bg-amber-500/5 border border-amber-500/15 rounded-xl text-[11px] text-amber-300">
              <strong>Flutterwave:</strong> flutterwave.com â†’ Dashboard â†’ API Settings<br>
              <strong>Stripe:</strong> dashboard.stripe.com â†’ Developers â†’ API Keys<br>
              <strong>PayPal:</strong> developer.paypal.com â†’ My Apps â†’ Create App<br>
              <strong>Paystack:</strong> dashboard.paystack.com â†’ Settings â†’ API Keys
            </div>
          </div>

          <!-- â”€â”€ Environment Variables Guide â”€â”€ -->
          <div class="glass-soft border border-gray-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-black text-white mb-3 flex items-center gap-2">
              <i data-lucide="terminal" class="w-4 h-4 text-gray-400"></i> Environment Variables (.env)
            </h3>
            <p class="text-xs text-gray-400 mb-3">Add these to your <code class="text-blue-300 bg-blue-500/10 px-1.5 py-0.5 rounded">.env</code> file in your project root (never commit to GitHub):</p>
            <div class="bg-gray-950 border border-gray-800 rounded-xl p-4 font-mono text-[11px] text-gray-300 space-y-1 overflow-x-auto">
              <p class="text-gray-600"># Supabase (required)</p>
              <p>VITE_SUPABASE_URL=<span class="text-blue-400">https://your-project.supabase.co</span></p>
              <p>VITE_SUPABASE_ANON_KEY=<span class="text-blue-400">your-anon-key</span></p>
              <p class="text-gray-600 mt-2"># Payment</p>
              <p>VITE_FLUTTERWAVE_PUBLIC_KEY=<span class="text-amber-400">FLWPUBK_TEST-â€¦</span></p>
              <p>VITE_STRIPE_PUBLIC_KEY=<span class="text-amber-400">pk_test_â€¦</span></p>
              <p class="text-gray-600 mt-2"># AI (server-side only â€” Edge Functions)</p>
              <p>GEMINI_API_KEY=<span class="text-emerald-400">AIzaSyâ€¦</span></p>
            </div>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            ðŸ’¾ Save Deploy & Payment Settings
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.saveDeploySettings=async function(e){e.preventDefault();const t=e.target?.querySelector("[type=submit]");t&&(t.disabled=!0,t.innerHTML="Savingâ€¦");const a=new FormData(e.target),i=Object.fromEntries(a.entries()),o={},s=["github_token","payment_public_key","payment_secret_key","payment_webhook_secret"];for(const[n,d]of Object.entries(i))s.includes(n)?d&&!d.startsWith("â€¢")&&d.trim()!==""&&(o[n]=d.trim()):o[n]=d;const{error:r}=await c.from("site_settings").upsert({id:1,...o});if(t&&(t.disabled=!1,t.innerHTML="ðŸ’¾ Save Deploy & Payment Settings"),r){p(r.message,"error");return}p("Deploy & payment settings saved!"),xt()};async function ni(e="deploy"){const{data:t}=await c.from("site_settings").select("deploy_webhook,production_url,github_repo").limit(1).maybeSingle();if(!t?.deploy_webhook)return p("No webhook URL set. Add your deploy webhook in the settings below.","info"),{ok:!1,reason:"missing_webhook"};let a=t.deploy_webhook;try{const i=new URL(a);e==="rebuild"&&i.searchParams.set("rebuild","1"),a=i.toString()}catch{e==="rebuild"&&(a+=(a.includes("?")?"&":"?")+"rebuild=1")}return{ok:!0,settings:t,hookUrl:a}}async function ne(e,t={}){const a=t.version||new Date().toISOString(),i={source:"admin-dashboard",mode:t.mode||"deploy",production_url:t.productionUrl||null,github_repo:t.githubRepo||null,webhook:t.webhook||null,message:t.message||null},{data:o,error:s}=await c.from("deployment_history").insert({version:a,status:e,triggered_by_email:P.user?.email||null,metadata:i,error_message:t.errorMessage||null}).select("id").limit(1).maybeSingle();return{data:o,error:s}}function $e(e,t,a,i){if(!e)return;e.disabled=t;const o=e.querySelector("p.text-xs.font-black");o&&(o.textContent=t?a:i)}window.triggerDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-deploy-btn]");$e(t,!0,"Deployingâ€¦","Deploy Now");try{const a=await ni("deploy");if(!a.ok)return;const{settings:i,hookUrl:o}=a;await ne("preparing",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,message:"Deployment queued from admin UI"});const s=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"deploy",source:"admin-dashboard",at:new Date().toISOString()})});if(s.ok)p("ðŸš€ Deployment triggered! Your site will be live in ~2 minutes."),await ne("deploying",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,message:"Webhook accepted deployment request"}),setTimeout(()=>xt(),400);else{const r=`Webhook returned error: ${s.status}`;p(r,"error"),await ne("failed",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,errorMessage:r})}}catch(a){p("Deploy failed: "+a.message,"error"),await ne("failed",{mode:"deploy",errorMessage:a.message})}finally{$e(t,!1,"Deployingâ€¦","Deploy Now")}};window.triggerRebuild=async function(e){const t=e?.currentTarget||document.querySelector("[data-rebuild-btn]");$e(t,!0,"Rebuildingâ€¦","Rebuild Site");try{const a=await ni("rebuild");if(!a.ok)return;const{settings:i,hookUrl:o}=a;await ne("building",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,message:"Rebuild requested from admin UI"});const s=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"rebuild",source:"admin-dashboard",at:new Date().toISOString()})});if(s.ok)p("ðŸ”„ Rebuild triggered successfully."),await ne("deploying",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,message:"Webhook accepted rebuild request"}),setTimeout(()=>xt(),400);else{const r=`Rebuild webhook error: ${s.status}`;p(r,"error"),await ne("failed",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,errorMessage:r})}}catch(a){p("Rebuild failed: "+a.message,"error"),await ne("failed",{mode:"rebuild",errorMessage:a.message})}finally{$e(t,!1,"Rebuildingâ€¦","Rebuild Site")}};window.publishAndDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-publish-easy-btn]");$e(t,!0,"Publishingâ€¦","One-Click Publish");try{const a=document.getElementById("deploy-form");if(!a){p("Deploy form is not available. Reload and try again.","error");return}await window.saveDeploySettings({preventDefault(){},target:a}),await window.triggerDeploy()}catch(a){p("Publish failed: "+a.message,"error")}finally{$e(t,!1,"Publishingâ€¦","One-Click Publish")}};window.reindexSearch=async function(){const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=t?.textContent||"";t&&(t.textContent="Reindexingâ€¦");try{const{data:i,error:o}=await c.from("showroom_listings").select("id, updated_at").order("updated_at",{ascending:!1});if(o)return W(o)?p("âš ï¸ Reindex blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):p("Could not load listings to reindex: "+o.message,"error");const s=i||[];if(!s.length){p("No listings to reindex.");return}let r=0,n=0,d=!1;const u=40;for(let m=0;m<s.length;m+=u){const g=s.slice(m,m+u),{error:x}=await c.from("showroom_listings").update({updated_at:new Date().toISOString()}).in("id",g.map(h=>h.id));x?(W(x)&&(d=!0),n+=g.length):r+=g.length,t&&(t.textContent=`Reindexingâ€¦ ${Math.min(m+u,s.length)}/${s.length}`)}if(d){p(`âš ï¸ Reindex partially blocked: database admin role rejected some writes. Re-run the admin permission migration. (${r}/${s.length} done)`,"error");return}p(`Search index rebuilt for ${r} listing${r!==1?"s":""}${n?` (${n} failed)`:""}.`,n?"error":"success")}catch(i){p("Reindex failed: "+i.message,"error")}finally{t&&(t.textContent=a)}};window.syncShowroomToDB=async function(){if(!Array.isArray(Q)||!Q.length){p("No static showroom listings found to sync.","info");return}const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=t?.textContent||"";t&&(t.textContent="Syncingâ€¦");try{const{data:i,error:o}=await c.from("showroom_listings").select("property_id");if(o)return W(o)?p("âš ï¸ Sync blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):p("Could not load existing listings: "+o.message,"error");const s=new Set((i||[]).map(g=>g.property_id)),r=Q.filter(g=>g&&g.property_id&&!s.has(g.property_id));if(!r.length){p("Showroom already in sync â€” no new listings to add.");return}let n=0,d=0,u=!1;const m=20;for(let g=0;g<r.length;g+=m){const x=r.slice(g,g+m).map(b=>({property_id:b.property_id,listing_type:b.listing_type||"product",category:b.category||null,subcategory:b.subcategory||null,title:b.title||"Untitled Listing",description:b.description||"",price:parseFloat(b.price)||0,currency:b.currency||"USD",country:b.country||"",country_code:b.country_code||"",state:b.state||"",city:b.city||"",town:b.town||"",product_location:b.product_location||"",latitude:b.latitude??null,longitude:b.longitude??null,property_type:b.property_type||null,listing_status:b.listing_status||"sale",bedrooms:b.bedrooms??null,bathrooms:b.bathrooms??null,building_size:b.building_size||"",land_size:b.land_size||"",parking_spaces:b.parking_spaces??null,furnished:b.furnished||"",features:Array.isArray(b.features)?b.features:[],tags:Array.isArray(b.tags)?b.tags:[],highlights:Array.isArray(b.highlights)?b.highlights:[],seo_keywords:Array.isArray(b.seo_keywords)?b.seo_keywords:[],images:Array.isArray(b.images)?b.images:[],brand:b.brand||null,color:b.color||null,size:b.size||null,condition:b.condition||null,warranty:b.warranty||null,availability_status:b.availability_status||"In Stock",stock_quantity:b.stock_quantity!=null?parseInt(b.stock_quantity,10):null,is_active:b.is_active!==!1,is_featured:!!b.is_featured,is_ai_generated:!!b.is_ai_generated,ai_generated_fields:Array.isArray(b.ai_generated_fields)?b.ai_generated_fields:[],specifications:b.specifications||{},created_at:b.created_at||new Date().toISOString()})),{error:h}=await c.from("showroom_listings").insert(x);h?(W(h)&&(u=!0),d+=x.length):n+=x.length,t&&(t.textContent=`Syncingâ€¦ ${Math.min(g+m,r.length)}/${r.length}`)}if(u){p(`âš ï¸ Sync partially blocked: database admin role rejected some inserts. Re-run the admin permission migration. (${n}/${r.length} added)`,"error");return}p(`Showroom synced: ${n} new listing${n!==1?"s":""} added to the database${d?` (${d} failed)`:""}.`,d?"error":"success")}catch(i){p("Sync failed: "+i.message,"error")}finally{t&&(t.textContent=a)}};window.testGitHubConnection=async function(){const e=document.querySelector("[name=github_username]")?.value?.trim(),t=document.querySelector("[name=github_repo]")?.value?.trim();if(!e||!t){p("Enter your GitHub username and repo name first","info");return}try{const a=await fetch(`https://api.github.com/repos/${e}/${t}`);if(a.ok){const i=await a.json();p(`âœ“ Connected: ${i.full_name} (${i.visibility})`)}else a.status===404?p("Repository not found. Check username and repo name.","error"):p("GitHub API error: "+a.status,"error")}catch{p("Could not reach GitHub API","error")}};window.deployToProduction=window.triggerDeploy;window.rebuildSite=window.triggerRebuild;const di=30,N={category:null,page:0,query:""};async function Ae(){const e=document.getElementById("content");if(!e)return;await Nt();const t=new Set(Ze()),a=wi();N.category||(N.category=a[0]?.slug||null);const i=0,o=N.query.trim().toLowerCase(),s=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-xl font-black text-white">Generated Catalog</h2>
        <p class="text-xs text-gray-500 mt-1">Deterministic storefront items. Hiding a listing removes it from the site everywhere â€” including direct links.</p>
      </div>
      <button onclick="catalogResetHidden()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition">Show All Hidden</button>
    </div>`,r=`
    <div class="flex flex-wrap gap-2">
      ${a.map(x=>`<button onclick="catalogSetCategory('${x.slug}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${N.category===x.slug?"bg-blue-500/20 text-blue-200 border-blue-500/40":"bg-white/5 text-gray-400 border-white/10 hover:text-white"}">${l(x.name)}</button>`).join("")}
    </div>`,n=`
    <div class="flex flex-wrap items-center gap-2">
      <input id="catalog-search-input" class="input-field flex-1 min-w-[220px]" placeholder="Search title, id or subcategoryâ€¦" value="${l(N.query)}" onkeyup="if (event.key === 'Enter') catalogSearch()">
      <button onclick="catalogSearch()" class="btn-press px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition">Search</button>
    </div>`;let d=[];const u=d.length?d.map(x=>{const h=t.has(x.property_id),b=nt(x);return`
          <div class="flex items-center gap-3 p-3 rounded-xl border ${h?"border-red-500/25 bg-red-500/5":"border-white/10 bg-white/[0.02]"}">
            ${b?dt(b,"w-12 h-12 rounded-lg object-cover bg-gray-800 shrink-0"):ye("w-12 h-12 rounded-lg bg-gray-800 shrink-0")}
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-white truncate">${l(x.title)}</p>
              <p class="text-[11px] text-gray-500 truncate">${l(x.property_id)} Â· ${l(x.subcategory||x.category||"")} Â· ${Ma(x.price,"USD")}</p>
            </div>
            ${O(!h)}
            <button onclick="catalogToggle('${l(x.property_id)}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${h?"bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25":"bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20"}">
              ${h?"Show":"Hide"}
            </button>
          </div>`}).join(""):'<div class="text-center py-16 text-gray-500 text-sm">No catalog items match.</div>',m=o?1:Math.max(1,Math.ceil(i/di)),g=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <p class="text-xs text-gray-500">${o?`${d.length} match`:`${i.toLocaleString()} items in ${l("")}`} Â· ${t.size} hidden</p>
      <div class="flex items-center gap-2">
        <button onclick="catalogPage(-1)" ${N.page<=0?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Prev</button>
        <span class="text-xs text-gray-500">Page ${N.page+1} / ${m}</span>
        <button onclick="catalogPage(1)" ${N.page>=m-1?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Next</button>
      </div>
    </div>`;e.innerHTML=`
    <div class="space-y-4 fade-in">
      ${s}
      ${r}
      ${n}
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 space-y-2">${u}</div>
      ${g}
    </div>`,window.lucide&&lucide.createIcons()}window.catalogSetCategory=function(e){N.category=e,N.page=0,N.query="",Ae()};window.catalogSearch=function(){const e=document.getElementById("catalog-search-input");N.query=e?e.value:"",N.page=0,Ae()};window.catalogPage=function(e){const a=N.query.trim()?1:Math.max(1,Math.ceil(0/di));N.page=Math.max(0,Math.min(a-1,N.page+e)),Ae()};window.catalogToggle=async function(e){const t=!Ze().includes(e),a=await xa(e,t);p(t?"Listing hidden from storefront":"Listing restored",a.ok?"success":"info"),Ae()};window.catalogResetHidden=async function(){await Pi(),p("All hidden catalog listings restored"),Ae()};(function(){if(!(!window.history||!window.history.pushState)){try{window.history.replaceState({adminGuard:1},document.title,window.location.href),window.history.pushState({adminGuard:2},document.title,window.location.href)}catch{return}window.addEventListener("popstate",function(t){t.state&&t.state.adminGuard===1&&window.location.replace("/")})}})();async function ma(){window.lucide&&lucide.createIcons(),Da(),await no(),c.auth.onAuthStateChange((e,t)=>{if(e==="SIGNED_OUT"){P.user=null;const a=document.getElementById("login-screen");a&&(a.style.display="flex")}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ma):ma();
