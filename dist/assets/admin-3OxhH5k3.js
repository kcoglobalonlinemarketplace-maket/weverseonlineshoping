import{supabase as c}from"./supabase-client-7_ZWSEp6.js";import{a as Dt,g as Ft,C as ae,A as Ut}from"./localization-11-DywLV.js";import{patchLocalShowroomListing as jt,upsertLocalShowroomListing as Y,getLocalShowroomListingById as ze,listLocalShowroomListings as We}from"./local-showroom-store-JrQn_yOW.js";import{L as Ie,s as Pe,a as Ot,l as qt,b as Nt,V as Ht}from"./live-control-store-DzHEnoMc.js";import{g as Ke,s as Gt,l as Vt,a as zt,b as Wt}from"./payment-settings-za8-1kWN.js";const E=1,B=5e6,Kt=[{id:"prod-smartphone",listingType:"product",category:"Phones",subcategory:"Smartphones",label:"Flagship Smartphone",brand:"Global Mobile",model:"X Pro",color:"Midnight Black",size:"6.7-inch",condition:"New",features:["5G connectivity","OLED display","Fast charging","Unlocked","Premium cameras"],highlights:["Retail-ready packaging","Strong search demand","Ideal for global shipping"],keywords:["smartphone","mobile phone","5g"],descriptionType:"phone"},{id:"prod-laptop",listingType:"product",category:"Computers & Laptops",subcategory:"Laptops",label:"Performance Laptop",brand:"NorthBridge",model:"Studio 14",color:"Silver",size:"14-inch",condition:"New",features:["Fast processor","SSD storage","Long battery life","Portable chassis","Business-ready design"],highlights:["Suitable for work and study","Premium margin band","Global audience appeal"],keywords:["laptop","notebook","computer"],descriptionType:"laptop"},{id:"prod-tv",listingType:"product",category:"Electronics",subcategory:"Smart TVs",label:"4K Smart TV",brand:"VistaHome",model:"UltraView",color:"Black",size:"65-inch",condition:"New",features:["4K panel","Streaming apps","HDR support","Voice control","Slim bezel"],highlights:["Living-room centerpiece","Popular premium electronics segment"],keywords:["tv","smart tv","home electronics"],descriptionType:"electronics"},{id:"prod-watch",listingType:"product",category:"Watches",subcategory:"Luxury Watches",label:"Luxury Wristwatch",brand:"Aurelius",model:"Chrono 8",color:"Gold / Black",size:"42mm",condition:"New",features:["Precision movement","Premium case","Gift-ready presentation","Water resistance","Collector appeal"],highlights:["High perceived value","Strong gifting category"],keywords:["watch","luxury watch","timepiece"],descriptionType:"luxury"},{id:"prod-jewelry",listingType:"product",category:"Jewelry",subcategory:"Fine Jewelry",label:"Fine Jewelry Set",brand:"Maison Valeur",model:"Signature Set",color:"Gold",size:"Adjustable",condition:"New",features:["Premium finish","Gift packaging","Occasion-ready","Elegant styling"],highlights:["High-value presentation","Wedding and celebration demand"],keywords:["jewelry","necklace","bracelet"],descriptionType:"luxury"},{id:"prod-handbag",listingType:"product",category:"Bags & Accessories",subcategory:"Designer Bags",label:"Designer Handbag",brand:"Rue Maison",model:"Carry All",color:"Tan",size:"Medium",condition:"New",features:["Structured silhouette","Premium hardware","Travel-friendly storage","Retail-ready finish"],highlights:["Fashion-forward listing","Broad international demand"],keywords:["handbag","designer bag","accessories"],descriptionType:"fashion"},{id:"prod-sneakers",listingType:"product",category:"Shoes",subcategory:"Premium Sneakers",label:"Premium Sneakers",brand:"RunNorth",model:"Air Flex",color:"White",size:"EU 42",condition:"New",features:["Comfort cushioning","Streetwear styling","Durable outsole","Daily wear ready"],highlights:["High-conversion category","Easy multi-country merchandising"],keywords:["sneakers","shoes","fashion"],descriptionType:"fashion"},{id:"prod-sofa",listingType:"product",category:"Furniture",subcategory:"Living Room",label:"Luxury Sofa Set",brand:"Grand Habitat",model:"Residence 3-Piece",color:"Sand Beige",size:"3-Piece Set",condition:"New",features:["Premium upholstery","Statement living-room piece","Comfort seating","Interior-ready styling"],highlights:["Large-ticket home category","Ideal for premium households"],keywords:["sofa","furniture","living room"],descriptionType:"home"},{id:"prod-generator",listingType:"product",category:"Home & Kitchen",subcategory:"Power Solutions",label:"Backup Power Generator",brand:"VoltWorks",model:"SilentMax",color:"Graphite",size:"7.5kVA",condition:"New",features:["Reliable backup power","Low-noise housing","Residential and business use","Heavy-duty build"],highlights:["Practical high-demand utility item","Useful in many markets"],keywords:["generator","power","backup power"],descriptionType:"industrial"},{id:"prod-drone",listingType:"product",category:"Cameras & Photography",subcategory:"Drones",label:"Pro Camera Drone",brand:"SkyFrame",model:"Aerial 4K",color:"Gray",size:"Foldable",condition:"New",features:["4K stabilized video","GPS return home","Portable folding frame","Creator-ready footage"],highlights:["Strong visual listing appeal","Premium creator equipment"],keywords:["drone","camera drone","aerial"],descriptionType:"electronics"},{id:"prod-grocery",listingType:"product",category:"Food & Groceries",subcategory:"Family Essentials",label:"Family Grocery Bundle",brand:"Market Select",model:"Household Pack",color:"Mixed",size:"Bulk Pack",condition:"New",features:["Everyday essentials","Bulk value","Family sized","Easy repeat orders"],highlights:["Fast-moving everyday goods","Useful across broad regions"],keywords:["groceries","food bundle","household essentials"],descriptionType:"daily"},{id:"prod-scale-house",listingType:"product",category:"Home & Kitchen",subcategory:"Model Houses",label:"Architectural Model House",brand:"Studio Form",model:"Estate Miniature",color:"Natural Wood",size:"1:50 Scale",condition:"New",features:["Collector display piece","Detailed craftsmanship","Interior decor appeal","Gift-ready packaging"],highlights:["Supports the model-house use case","Works for decor and collector audiences"],keywords:["model house","architectural model","collector decor"],descriptionType:"home"},{id:"veh-sedan",listingType:"product",category:"Cars",subcategory:"Sedans",label:"Executive Sedan",brand:"Summit Motors",model:"S Line",color:"Pearl White",size:"Mid-size",condition:"Used - Like New",features:["Comfortable cabin","Road-trip ready","Well-maintained presentation","Family and executive appeal"],highlights:["Vehicle posts support 24-image galleries","Map-ready listing"],keywords:["car","sedan","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-suv",listingType:"product",category:"Cars",subcategory:"SUVs",label:"Family SUV",brand:"Frontier Auto",model:"Terrain X",color:"Obsidian",size:"7-Seater",condition:"Used - Like New",features:["Spacious seating","Utility-focused cargo room","Suitable for families","Road and city versatility"],highlights:["High-demand automotive segment","Works well with showroom map"],keywords:["suv","family car","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-luxury",listingType:"product",category:"Luxury Cars",subcategory:"Luxury Vehicles",label:"Luxury Performance Car",brand:"Regal Automotive",model:"Imperium GT",color:"Metallic Black",size:"Coupe",condition:"Used - Like New",features:["Prestige brand positioning","Performance styling","Collector-level appeal","Premium interior"],highlights:["Supports the requested high-ticket range","Designed for showroom-style luxury listings"],keywords:["luxury car","sports car","supercar"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-motorcycle",listingType:"product",category:"Motorcycles",subcategory:"Street Bikes",label:"Sport Motorcycle",brand:"Velocity Moto",model:"R 900",color:"Red",size:"900cc",condition:"Used - Like New",features:["Agile handling","Performance design","Lifestyle buyer appeal","Weekend-ready machine"],highlights:["Automotive category with image-rich display"],keywords:["motorcycle","bike","sport bike"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-commercial",listingType:"product",category:"Commercial Vehicles",subcategory:"Utility Vehicles",label:"Commercial Utility Vehicle",brand:"FleetCore",model:"CargoPro",color:"White",size:"Long wheelbase",condition:"Used - Good",features:["Business-ready load space","Fleet-friendly purchase","Service history presentation","Commercial utility"],highlights:["Suitable for business buyers","Map-ready logistics listing"],keywords:["commercial vehicle","cargo van","fleet"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-boat",listingType:"product",category:"Boats & Marine",subcategory:"Leisure Boats",label:"Leisure Boat",brand:"BlueHarbor",model:"Coastline 28",color:"Navy / White",size:"28 ft",condition:"Used - Like New",features:["Marina-ready presentation","Leisure and charter appeal","Premium leisure category"],highlights:["Large-format gallery support","High-ticket recreational listing"],keywords:["boat","marine","yacht"],requiredImageCount:24,descriptionType:"vehicle"}],Qt=[{id:"prop-apartment",listingType:"property",category:"Real Estate",subcategory:"Apartments",label:"City Apartment",propertyType:"Apartment",bedrooms:2,bathrooms:2,buildingSize:"1,150 sqft",landSize:"",furnished:"Furnished",features:["Secure access","Modern kitchen","Prime urban access","Balcony or city views"],highlights:["Strong urban demand","Good for short and long stay buyers"],keywords:["apartment","real estate","city home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-condo",listingType:"property",category:"Real Estate",subcategory:"Condos",label:"Modern Condo",propertyType:"Condo",bedrooms:3,bathrooms:2,buildingSize:"1,450 sqft",landSize:"",furnished:"Furnished",features:["Managed building","Amenity access","Contemporary finish","Secure parking"],highlights:["Works across major global markets"],keywords:["condo","property","home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-townhouse",listingType:"property",category:"Real Estate",subcategory:"Townhouses",label:"Townhouse Residence",propertyType:"Townhouse",bedrooms:4,bathrooms:3,buildingSize:"2,000 sqft",landSize:"0.08 acres",furnished:"Unfurnished",features:["Multi-level layout","Family-ready plan","Private entry","Parking included"],highlights:["Popular residential ownership format"],keywords:["townhouse","residence","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-villa",listingType:"property",category:"Real Estate",subcategory:"Villas",label:"Private Villa",propertyType:"Villa",bedrooms:5,bathrooms:5,buildingSize:"4,800 sqft",landSize:"0.4 acres",furnished:"Furnished",features:["Private outdoor space","Premium architecture","Luxury entertaining zones","Prestige location potential"],highlights:["Premium property tier","Designed for international buyers"],keywords:["villa","luxury property","real estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-mansion",listingType:"property",category:"Real Estate",subcategory:"Mansions",label:"Luxury Mansion",propertyType:"Mansion",bedrooms:8,bathrooms:10,buildingSize:"12,000 sqft",landSize:"1.2 acres",furnished:"Furnished",features:["Grand entrance","High-end interior finishes","Staff or guest quarters","Statement curb appeal"],highlights:["Matches the mansion requirement directly","Supports high-ticket luxury listings"],keywords:["mansion","estate","luxury home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-beach",listingType:"property",category:"Real Estate",subcategory:"Beach Houses",label:"Beachfront House",propertyType:"Beach House",bedrooms:4,bathrooms:4,buildingSize:"3,600 sqft",landSize:"0.25 acres",furnished:"Furnished",features:["Waterfront views","Outdoor leisure space","Vacation-rental appeal","Premium lifestyle positioning"],highlights:["Ideal for tourism and lifestyle markets"],keywords:["beach house","waterfront home","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-farm",listingType:"property",category:"Real Estate",subcategory:"Farm Houses",label:"Farm House Estate",propertyType:"Farm House",bedrooms:4,bathrooms:3,buildingSize:"3,100 sqft",landSize:"5 acres",furnished:"Unfurnished",features:["Land-rich asset","Agricultural potential","Quiet residential use","Outbuilding opportunity"],highlights:["Suitable for rural and suburban regions"],keywords:["farm house","landed property","estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-commercial",listingType:"property",category:"Real Estate",subcategory:"Commercial Buildings",label:"Commercial Building",propertyType:"Commercial Building",bedrooms:0,bathrooms:4,buildingSize:"8,500 sqft",landSize:"0.35 acres",furnished:"Unfurnished",features:["Business district potential","Mixed-use flexibility","Visible frontage","Investor-ready asset class"],highlights:["Attractive for business buyers and investors"],keywords:["commercial building","office","investment property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-hotel",listingType:"property",category:"Real Estate",subcategory:"Hotels",label:"Boutique Hotel",propertyType:"Hotel",bedrooms:18,bathrooms:20,buildingSize:"15,000 sqft",landSize:"0.75 acres",furnished:"Furnished",features:["Hospitality-ready layout","Guest-focused amenities","Tourism and corporate appeal","Revenue asset potential"],highlights:["Supports hospitality listings globally"],keywords:["hotel","hospitality","investment"],requiredImageCount:24,descriptionType:"property"},{id:"prop-land",listingType:"property",category:"Real Estate",subcategory:"Land",label:"Development Land",propertyType:"Land",bedrooms:0,bathrooms:0,buildingSize:"",landSize:"10 acres",furnished:"",features:["Development potential","Flexible use case","Long-term investment appeal","Location-led value"],highlights:["Useful for land banking and development"],keywords:["land","plot","development"],requiredImageCount:24,descriptionType:"property"}],Qe=[...Kt,...Qt];function Ae(e){return Dt[e]||"USD"}function Je(e,t){return Qe.filter(a=>a.listingType!==e?!1:t?a.category===t:!0)}function Jt(e,t){const a=Math.max(E,Math.min(B,Number(e)||E));return new Intl.NumberFormat("en-US",{style:"currency",currency:t,maximumFractionDigits:0}).format(a)}function Yt(e,t,a,i,s){const o=Jt(i,a);return e.descriptionType==="vehicle"?`${e.label} listed at ${o}. This template is intended to present a complete automotive post with exterior, interior, condition, performance, and gallery details in a clean showroom-style format.`:e.descriptionType==="property"?`${e.label} located in ${s}. Offered at ${o}, this property template is designed for a complete real-estate presentation with map-ready location data, rich visual gallery coverage, and buyer-friendly highlights covering layout, lifestyle, and investment value.`:e.descriptionType==="phone"?`${e.label} listed at ${o}. The template focuses on a clean premium device presentation with brand, model, condition, core features, and strong online merchandising copy.`:e.descriptionType==="laptop"?`${e.label} listed at ${o}. Built for marketplace listings that need clear performance positioning, specification highlights, and an easy-to-scan description for students, professionals, and remote workers.`:e.descriptionType==="luxury"?`${e.label} listed at ${o}. This template supports high-value presentation with polished positioning, premium selling points, and a strong showroom-style description.`:e.descriptionType==="fashion"?`${e.label} listed at ${o}. This product template highlights styling, quality, and day-to-day appeal while keeping the listing easy to customize.`:e.descriptionType==="home"?`${e.label} listed at ${o}. The listing copy is structured for shoppers looking for quality presentation, reliable detail, and visual merchandising support.`:e.descriptionType==="industrial"?`${e.label} listed at ${o}. This template emphasizes practical use, dependable performance, and business or household value in a straightforward format.`:e.descriptionType==="daily"?`${e.label} listed at ${o}. The copy is designed for repeat-buy categories with clear value messaging and broad buyer appeal.`:`${e.label} listed at ${o}. This template generates a clean, marketable listing with ready-made highlights, keywords, and presentation details.`}function Ye({templateId:e,listingType:t,category:a,countryCode:i,currency:s,price:o}){const l=Qe.find(m=>m.id===e&&m.listingType===t);if(!l)return null;const r=Ft(i)||ae[0],d=s||Ae(r.code),u=[r.name].filter(Boolean).join(", "),b={category:l.category||a||(t==="property"?"Real Estate":"Other"),subcategory:l.subcategory||l.label,title:t==="property"?`${l.label} in ${r.name}`:l.label,description:Yt(l,r,d,o,u),currency:d,features:[...l.features],highlights:[...l.highlights||[]],seo_keywords:[...new Set([l.category,l.subcategory,l.label,...t==="property"?[r.name]:[],...l.keywords||[]].filter(Boolean))],requiredImageCount:l.requiredImageCount||0};return t==="property"?{...b,country:r.name,country_code:r.code,product_location:r.name,property_type:l.propertyType||l.label,bedrooms:l.bedrooms??null,bathrooms:l.bathrooms??null,building_size:l.buildingSize||"",land_size:l.landSize||"",furnished:l.furnished||""}:{...b,brand:l.brand||"",model:l.model||"",color:l.color||"",size:l.size||"",condition:l.condition||"New"}}const Xe="weverseonlineshop@gmail.com",Ze="kco_ai_ad_override_fallback_v1",et="Weverse Online Shop",tt="SHOP GLOBALLY, DELIVERED WORLDWIDE",Xt=[{group:"Main",items:[{id:"dashboard",label:"Dashboard",icon:"layout-dashboard"},{id:"products",label:"Products",icon:"package"},{id:"properties",label:"Properties",icon:"home"},{id:"orders",label:"Orders",icon:"shopping-bag"},{id:"customers",label:"Customers",icon:"users"},{id:"reviews",label:"Reviews",icon:"star"},{id:"messages",label:"Messages",icon:"message-circle"},{id:"coupons",label:"Coupons",icon:"ticket"},{id:"ads",label:"Advertisements",icon:"megaphone"},{id:"notifications",label:"Notifications",icon:"bell"},{id:"live-streaming",label:"Live Streaming",icon:"radio"},{id:"video-calls",label:"Video Calls",icon:"video"}]},{group:"Configuration",items:[{id:"ai",label:"AI Assistant",icon:"sparkles"},{id:"payment-settings",label:"Payment Settings",icon:"credit-card"},{id:"ai-settings",label:"AI Settings",icon:"bot"},{id:"ai-marketing",label:"AI Marketing Studio",icon:"sparkles"},{id:"homepage-branding",label:"Homepage Branding",icon:"image"},{id:"brand",label:"Brand Manager",icon:"palette"},{id:"content",label:"Content Manager",icon:"file-text"},{id:"seo",label:"SEO Manager",icon:"search"},{id:"email",label:"Email Settings",icon:"mail"},{id:"analytics",label:"Analytics",icon:"bar-chart-3"},{id:"security",label:"Security",icon:"shield"},{id:"activity",label:"Activity Logs",icon:"activity"},{id:"backup",label:"Backup & Restore",icon:"database"},{id:"settings",label:"Settings",icon:"settings"},{id:"publish",label:"Publish & Deploy",icon:"rocket"}]}],Zt={dashboard:"Dashboard",products:"Products Manager",properties:"Properties Manager",orders:"Orders Manager",customers:"Customers Manager",reviews:"Reviews Manager",messages:"Messages & Support",coupons:"Coupons Manager",ads:"Advertisement Manager",notifications:"Notifications","live-streaming":"Live Streaming Manager","video-calls":"Video Call Manager","ai-settings":"AI Settings",content:"Content Manager",ai:"AI Assistant","ai-marketing":"AI Marketing Studio","homepage-branding":"Homepage Branding",brand:"Brand Manager","payment-settings":"Payment Settings",seo:"SEO Manager",email:"Email Settings",analytics:"Analytics",security:"Security",activity:"Activity Logs",backup:"Backup & Restore",settings:"Settings",publish:"Publish & Deploy"},at=[...Ut].sort();let y={user:null,section:"dashboard"};function n(e){if(e==null)return"";const t=document.createElement("div");return t.textContent=String(e),t.innerHTML}function ea(e,t="USD"){return`${(parseFloat(e)||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})} ${t}`}function C(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"—"}function $(e){return e?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function Ee(){return"KCO-"+String(Date.now()).slice(-6)+Math.floor(Math.random()*1e3).toString().padStart(3,"0")}function p(e,t="success"){const a=document.getElementById("toast"),i=document.getElementById("toast-msg"),s=a.querySelector("i[data-lucide]");if(!a||!i)return;i.textContent=e;const o={success:"check-circle",error:"alert-circle",info:"info"},l={success:"text-emerald-400",error:"text-red-400",info:"text-blue-400"};s&&(s.setAttribute("data-lucide",o[t]||"info"),s.className=`w-4 h-4 shrink-0 ${l[t]||"text-blue-400"}`),a.style.transform="translateY(0)",a.style.opacity="1",window.lucide&&lucide.createIcons(),clearTimeout(a._t),a._t=setTimeout(()=>{a.style.transform="translateY(20px)",a.style.opacity="0"},3e3)}function _(e){const t={pending_verification:["bg-amber-500/10 text-amber-400 border-amber-500/20","Pending"],approved:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Approved"],rejected:["bg-red-500/10 text-red-400 border-red-500/20","Rejected"],payment_approved:["bg-blue-500/10 text-blue-400 border-blue-500/20","Paid"],order_placed:["bg-amber-500/10 text-amber-400 border-amber-500/20","Placed"],processing:["bg-indigo-500/10 text-indigo-400 border-indigo-500/20","Processing"],shipped:["bg-violet-500/10 text-violet-400 border-violet-500/20","Shipped"],in_transit:["bg-violet-500/10 text-violet-400 border-violet-500/20","In Transit"],out_for_delivery:["bg-cyan-500/10 text-cyan-400 border-cyan-500/20","Out for Delivery"],delivered:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Delivered"],cancelled:["bg-red-500/10 text-red-400 border-red-500/20","Cancelled"],active:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],inactive:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"],sale:["bg-blue-500/10 text-blue-400 border-blue-500/20","For Sale"],rent:["bg-violet-500/10 text-violet-400 border-violet-500/20","For Rent"],true:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],false:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"]},[a,i]=t[String(e)]||["bg-gray-500/10 text-gray-400 border-gray-500/20",n(e)||"—"];return`<span class="badge ${a}">${i}</span>`}function M(){document.getElementById("modal-container").innerHTML=""}function k(e){document.getElementById("modal-container").innerHTML=e,window.lucide&&lucide.createIcons()}function h(e,t,a,i,s=""){const o={blue:"bg-blue-500/10 text-blue-400 border-blue-500/15",amber:"bg-amber-500/10 text-amber-400 border-amber-500/15",emerald:"bg-emerald-500/10 text-emerald-400 border-emerald-500/15",red:"bg-red-500/10 text-red-400 border-red-500/15",violet:"bg-violet-500/10 text-violet-400 border-violet-500/15",orange:"bg-orange-500/10 text-orange-400 border-orange-500/15"};return`<div class="stat-card glass-soft border border-blue-500/15 rounded-2xl p-4">
    <div class="flex items-start justify-between mb-3">
      <div class="p-2 ${o[i]||o.blue} rounded-xl border"><i data-lucide="${a}" class="w-4 h-4"></i></div>
    </div>
    <p class="text-2xl font-black text-white">${n(t)}</p>
    <p class="text-[11px] text-gray-500 uppercase tracking-wide mt-0.5 font-bold">${n(e)}</p>
    ${s?`<p class="text-[10px] text-gray-600 mt-1">${n(s)}</p>`:""}
  </div>`}function R(){return'<div class="flex items-center justify-center py-24"><div class="flex items-center gap-3 text-gray-500 text-sm"><i data-lucide="loader-2" class="w-5 h-5 animate-spin text-blue-400"></i> Loading…</div></div>'}function H(e,t,a,i=""){return`<div class="flex flex-col items-center justify-center py-20 text-center"><div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4"><i data-lucide="${e}" class="w-8 h-8 text-blue-400"></i></div><h3 class="text-base font-black text-white mb-1">${n(t)}</h3><p class="text-sm text-gray-500 max-w-xs">${n(a)}</p>${i?`<div class="mt-5">${i}</div>`:""}</div>`}function it(){const e=document.getElementById("sidebar-nav");e&&(e.innerHTML=Xt.map(t=>`
    <div>
      <span class="section-label">${t.group}</span>
      ${t.items.map(a=>`
        <button class="nav-item ${y.section===a.id?"active":""} w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold rounded-xl" onclick="navigate('${a.id}')">
          <i data-lucide="${a.icon}" class="w-4 h-4 shrink-0"></i>
          <span>${a.label}</span>
        </button>`).join("")}
    </div>`).join(""),window.lucide&&lucide.createIcons())}window.navigate=function(e){y.section=e;const t=Zt[e]||e,a=document.getElementById("page-title");a&&(a.textContent=t),it(),closeSidebar();const i=document.getElementById("content");i&&(i.innerHTML=R()),window.lucide&&lucide.createIcons(),({dashboard:ga,products:S,properties:$t,orders:St,customers:Ca,reviews:Re,messages:It,coupons:re,ads:de,notifications:Ta,"live-streaming":V,"video-calls":Q,ai:ta,"ai-settings":Pt,"ai-marketing":ce,"homepage-branding":pe,content:Fa,seo:ja,email:Oa,analytics:Ua,security:ue,activity:qa,brand:be,"payment-settings":Se,backup:Na,settings:Ha,publish:me}[e]||(()=>{const l=document.getElementById("content");l&&(l.innerHTML=H("construction","Coming Soon",`${t} is being built.`))}))()};async function ta(){const e=document.getElementById("content");e&&(e.innerHTML=`
    <div class="space-y-4 fade-in">
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 class="text-xl font-black text-white">AI Assistant</h2>
          <p class="text-xs text-gray-500 mt-1">Use AI to manage products, including adding products after configuring your provider keys.</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="navigate('ai-settings')" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition">AI Settings</button>
          <a href="/admin-ai.html" target="_blank" rel="noopener" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition">Open Fullscreen</a>
        </div>
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
        <iframe src="/admin-ai.html" title="AI Assistant" class="w-full" style="height: calc(100vh - 230px); min-height: 680px; border: 0;"></iframe>
      </div>
    </div>`,window.lucide&&lucide.createIcons())}window.openSidebar=()=>{document.getElementById("sidebar").classList.add("open"),document.getElementById("sidebar-overlay").classList.remove("hidden")};window.closeSidebar=()=>{document.getElementById("sidebar").classList.remove("open"),document.getElementById("sidebar-overlay").classList.add("hidden")};document.getElementById("close-sidebar")?.addEventListener("click",closeSidebar);const O="kco_admin_remember",Ce="kco_login_attempts",ve=5,aa=15*60*1e3;function w(e){const t=document.getElementById("login-error"),a=document.getElementById("login-error-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-success")?.classList.add("hidden"),window.lucide&&lucide.createIcons())}function ia(e){const t=document.getElementById("login-success"),a=document.getElementById("login-success-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-error")?.classList.add("hidden"))}function ie(){document.getElementById("login-error")?.classList.add("hidden"),document.getElementById("login-success")?.classList.add("hidden")}function W(e){return String(e||"").trim().toLowerCase()}function sa(){try{const e=JSON.parse(localStorage.getItem(O)||"{}");e?.email&&!W(e.email)&&localStorage.removeItem(O)}catch{localStorage.removeItem(O)}}function oa(){try{const e=JSON.parse(localStorage.getItem(O)||"{}");return W(e?.email)}catch{return""}}function Le(){sa();const e=oa(),t=document.getElementById("login-email");t&&(t.value=e||t.value||Xe,t.removeAttribute("readonly"));const a=document.getElementById("reset-email");a&&(a.value=e||a.value||"",a.removeAttribute("readonly"))}function la(){return`${window.location.origin}/admin.html`}function D(e){const t=document.getElementById("login-header-title"),a=document.getElementById("login-header-icon");document.getElementById("login-form")?.classList.toggle("hidden",e!=="login"),document.getElementById("twofa-form")?.classList.toggle("hidden",e!=="2fa"),document.getElementById("forgot-form")?.classList.toggle("hidden",e!=="forgot"),ie(),e==="login"&&(t&&(t.textContent="Admin Access"),a&&a.setAttribute("data-lucide","shield-check")),e==="2fa"&&(t&&(t.textContent="Two-Factor Auth"),a&&a.setAttribute("data-lucide","smartphone")),e==="forgot"&&(t&&(t.textContent="Reset Password"),a&&a.setAttribute("data-lucide","mail")),window.lucide&&lucide.createIcons()}function x(e,t,a=""){const i=document.getElementById(e);i&&(i.disabled=t,t?i.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline-block mr-1"></i> Please wait…':a&&(i.innerHTML=a),window.lucide&&lucide.createIcons())}function st(){try{return JSON.parse(localStorage.getItem(Ce)||'{"count":0}')}catch{return{count:0}}}function ot(){const e=st();return e.count=(e.count||0)+1,e.count>=ve&&(e.lockedUntil=Date.now()+aa),localStorage.setItem(Ce,JSON.stringify(e)),e}function lt(){localStorage.removeItem(Ce)}function nt(){const e=st();if(!e.lockedUntil)return null;const t=e.lockedUntil-Date.now();return t<=0?(lt(),null):Math.ceil(t/6e4)}async function A(e,t,a={}){try{await c.from("admin_security_logs").insert({user_id:e,event_type:t,ip_address:await na(),user_agent:navigator.userAgent.slice(0,200),...a})}catch{}}async function na(){try{return(await(await fetch("https://api64.ipify.org?format=json",{signal:AbortSignal.timeout(3e3)})).json()).ip||"unknown"}catch{return"unknown"}}async function rt(e){if(!e)return!1;try{const{data:t}=await c.rpc("is_current_user_admin");if(t)return!0}catch{}return W(e.email)===Xe}async function ra(){const e=window.location.hash;if(e.includes("type=recovery")||e.includes("access_token")){X(),ma();return}const{data:{session:t}}=await c.auth.getSession();if(t?.user&&await rt(t.user)){const{data:{currentUser:i}}=await c.auth.getUser(),s=await c.auth.mfa.getAuthenticatorAssuranceLevel(),o=s.data?.currentLevel;if(s.data?.nextLevel==="aal2"&&o!=="aal2"){y.user=t.user,X(),D("2fa"),Te();return}y.user=t.user,se();return}da()}function X(){const e=document.getElementById("login-screen");e&&(e.style.display="flex")}function da(){X(),D("login"),Le(),dt(),ct(),Te(),ca();const e=nt();e&&(w(`Too many failed attempts. Try again in ${e} minute${e>1?"s":""}.`),document.getElementById("login-btn").disabled=!0)}function ca(){document.getElementById("toggle-pw")?.addEventListener("click",()=>{const e=document.getElementById("login-password"),t=document.querySelector("#toggle-pw i");e&&(e.type=e.type==="password"?"text":"password",t&&t.setAttribute("data-lucide",e.type==="password"?"eye":"eye-off"),window.lucide&&lucide.createIcons())})}function dt(){const e=document.getElementById("login-form");!e||e._bound||(e._bound=!0,e.addEventListener("submit",ua),document.getElementById("forgot-pw-btn")?.addEventListener("click",()=>D("forgot")))}async function ua(e){e.preventDefault();const t=nt();if(t){w(`Account locked. Try again in ${t} minute${t>1?"s":""}.`);return}const a=document.getElementById("login-email"),i=W(a?.value);if(!i){w("Enter your admin email address."),x("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const s=document.getElementById("login-password").value,o=document.getElementById("remember-me")?.checked;x("login-btn",!0),ie();const{data:l,error:r}=await c.auth.signInWithPassword({email:i,password:s});if(r||!l.user){const g=String(r?.message||"").toLowerCase();if(g.includes("missing supabase credentials")||g.includes("authentication service is unavailable")){w("Authentication is temporarily unavailable due to configuration. Please contact support."),x("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(g.includes("failed to fetch")||g.includes("network request failed")){w("Network error while signing in. Check your connection and try again."),x("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(g.includes("email not confirmed")){w("Your admin email is not confirmed yet. Open your verification email and confirm first."),x("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const L=ot(),z=ve-L.count,J=L.lockedUntil?`Account locked for 15 minutes after ${ve} failed attempts.`:`Invalid email or password. ${z>0?z+" attempt"+(z!==1?"s":"")+" remaining.":""}`;w(J),x("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),l?.user&&await A(l.user.id,"login_failed",{metadata:{reason:"wrong_password"}});return}if(!await rt(l.user)){await c.auth.signOut(),w(`Access denied for ${l.user.email}. This account is signed in but does not have administrator privileges.`),x("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),await A(l.user.id,"login_denied",{metadata:{reason:"not_admin"}});return}if(o?localStorage.setItem(O,JSON.stringify({email:i,ts:Date.now()})):localStorage.removeItem(O),lt(),y.user=l.user,(await c.auth.mfa.getAuthenticatorAssuranceLevel()).data?.nextLevel==="aal2"){x("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),D("2fa"),Te(),setTimeout(()=>document.getElementById("totp-code")?.focus(),100);return}await A(l.user.id,"login_success"),x("login-btn",!1),se()}function Te(){const e=document.getElementById("verify-2fa-btn");e&&!e._bound&&(e._bound=!0,e.addEventListener("click",Ne));const t=document.getElementById("totp-code");t&&!t._bound&&(t._bound=!0,t.addEventListener("input",i=>{i.target.value=i.target.value.replace(/\D/g,"").slice(0,6),i.target.value.length===6&&Ne()})),document.getElementById("cancel-2fa-btn")?.addEventListener("click",async()=>{await c.auth.signOut(),y.user=null,D("login")}),document.getElementById("use-backup-btn")?.addEventListener("click",()=>{document.getElementById("backup-code-wrap")?.classList.toggle("hidden");const s=document.getElementById("backup-code");s&&s.focus()});const a=document.getElementById("verify-backup-btn");a&&!a._bound&&(a._bound=!0,a.addEventListener("click",pa))}async function Ne(){const e=document.getElementById("totp-code")?.value?.trim();if(!e||e.length!==6){w("Enter the 6-digit code from your authenticator app.");return}x("verify-2fa-btn",!0),ie();try{const{data:t}=await c.auth.mfa.listFactors(),a=(t?.totp||[])[0];if(!a){w("No 2FA factor found. Please re-login."),x("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In');return}const{data:i,error:s}=await c.auth.mfa.challenge({factorId:a.id});if(s)throw s;const{error:o}=await c.auth.mfa.verify({factorId:a.id,challengeId:i.id,code:e});if(o)throw o;await A(y.user.id,"login_2fa_success"),x("verify-2fa-btn",!1),se()}catch(t){ot(),w(t.message?.includes("Invalid")?"Incorrect code. Check your authenticator and try again.":t.message),x("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In'),document.getElementById("totp-code").value="",document.getElementById("totp-code").focus()}}async function pa(){const e=document.getElementById("backup-code")?.value?.trim().toUpperCase().replace(/\s/g,"");if(!e){w("Enter a backup recovery code.");return}x("verify-backup-btn",!0);try{const{data:t}=await c.from("admin_2fa").select("backup_codes").eq("user_id",y.user.id).maybeSingle();if(!t?.backup_codes?.length){w("No backup codes found."),x("verify-backup-btn",!1,"Use Backup Code");return}if(!t.backup_codes.find(s=>(s.code||s).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")&&!s.used)){w("Backup code not found or already used."),x("verify-backup-btn",!1,"Use Backup Code");return}const i=t.backup_codes.map(s=>(s.code||s).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")?{...typeof s=="object"?s:{code:s},used:!0}:s);await c.from("admin_2fa").update({backup_codes:i}).eq("user_id",y.user.id),await A(y.user.id,"login_backup_code_used"),se()}catch(t){w(t.message),x("verify-backup-btn",!1,"Use Backup Code")}}function ct(){document.getElementById("back-to-login")?.addEventListener("click",()=>D("login")),document.getElementById("send-reset-btn")?.addEventListener("click",ba)}async function ba(){const e=document.getElementById("reset-email"),t=W(e?.value);if(!t){w("Enter your admin email address to receive a reset link.");return}x("send-reset-btn",!0),ie();const{error:a}=await c.auth.resetPasswordForEmail(t,{redirectTo:la()});if(x("send-reset-btn",!1,'<i data-lucide="mail" class="w-4 h-4 inline mr-1"></i> Send Reset Link'),a){w(a.message);return}ia("Reset link sent! Check your inbox and open it from this device to continue.")}function ma(){const e=document.getElementById("login-screen");if(!e)return;const t=e.querySelector(".login-card");t&&(t.innerHTML=`
    <div class="flex items-center gap-3 mb-6">
      <div class="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shrink-0"><i data-lucide="lock" class="w-5 h-5 text-white"></i></div>
      <div><h1 class="text-lg font-black text-white">Set New Password</h1><p class="text-[10px] text-blue-400 font-bold uppercase tracking-wider">KCO Admin</p></div>
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
    </div>`,window.lucide&&lucide.createIcons())}window.handlePasswordResetSubmit=async function(){const e=document.getElementById("new-pw-reset")?.value,t=document.getElementById("confirm-pw-reset")?.value,a=document.getElementById("reset-pw-error");if(e!==t){a&&(a.textContent="Passwords do not match.",a.classList.remove("hidden"));return}if((e||"").length<8){a&&(a.textContent="Password must be at least 8 characters.",a.classList.remove("hidden"));return}const{error:i}=await c.auth.updateUser({password:e});if(i){a&&(a.textContent=i.message,a.classList.remove("hidden"));return}p("Password updated! Please log in with your new password."),window.location.hash="",setTimeout(()=>window.location.reload(),1500)};function se(){const e=document.getElementById("login-screen");e&&(e.style.display="none");const t=document.getElementById("admin-user-email");t&&y.user&&(t.textContent=y.user.email||"Admin"),Le(),navigate("dashboard")}window.adminSignOut=async function(){y.user&&await A(y.user.id,"logout"),await c.auth.signOut(),y.user=null,X(),D("login"),Le(),dt(),ct()};window.logoutAllDevices=async function(){confirm("This will sign you out on ALL devices. Continue?")&&(y.user&&await A(y.user.id,"logout_all_devices"),await c.auth.signOut({scope:"global"}),y.user=null,p("Signed out from all devices."),setTimeout(()=>window.location.reload(),1200))};async function ga(){const e=document.getElementById("content");try{const[t,a,i,s]=await Promise.all([c.from("showroom_listings").select("id,listing_type,is_active,price",{count:"exact"}),c.from("payment_receipts").select("id,order_number,amount,status,created_at",{count:"exact"}).order("created_at",{ascending:!1}).limit(200),c.from("profiles").select("user_id,created_at",{count:"exact"}),c.from("product_reviews").select("id,is_approved",{count:"exact"})]),o=t.data||[],l=a.data||[],r=l.filter(v=>["approved","payment_approved","delivered"].includes(v.status)).reduce((v,F)=>v+(parseFloat(F.amount)||0),0),d=l.filter(v=>["pending","pending_verification","processing"].includes(v.status)).length,u=o.filter(v=>v.listing_type!=="property").length,b=o.filter(v=>v.listing_type==="property").length,m=o.filter(v=>v.listing_type!=="property"&&v.is_active).length,g=i.count||0,L=s.count||0,z=(s.data||[]).filter(v=>!v.is_approved).length,J=new Date,Rt=l.filter(v=>{const F=new Date(v.created_at);return F.getMonth()===J.getMonth()&&F.getFullYear()===J.getFullYear()}).filter(v=>["approved","payment_approved","delivered"].includes(v.status)).reduce((v,F)=>v+(parseFloat(F.amount)||0),0),qe=l.slice(0,6);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-black text-white">Good ${ha()}, Admin</h2>
            <p class="text-sm text-gray-500 mt-0.5">${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}</p>
          </div>
          <button onclick="navigate('products')" class="btn-press hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Product
          </button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          ${h("Total Revenue",`$${r.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald",`$${Rt.toLocaleString("en-US",{maximumFractionDigits:0})} this month`)}
          ${h("Total Orders",l.length,"shopping-bag","blue",`${d} pending`)}
          ${h("Customers",g,"users","violet")}
          ${h("Products",u,"package","amber",`${m} active`)}
          ${h("Properties",b,"home","blue")}
          ${h("Reviews",L,"star","orange",`${z} pending`)}
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
            ${qe.length===0?'<p class="text-xs text-gray-500 text-center py-8">No orders yet</p>':qe.map(v=>`
                <div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
                  <div class="min-w-0">
                    <p class="text-xs font-bold text-white truncate">${n(v.order_number||v.id?.slice(0,8))}</p>
                    <p class="text-[10px] text-gray-500">${$(v.created_at)}</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0 ml-2">
                    <span class="text-xs font-bold text-emerald-400">$${parseFloat(v.amount||0).toLocaleString("en-US",{maximumFractionDigits:0})}</span>
                    ${_(v.status)}
                  </div>
                </div>`).join("")}
          </div>
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="zap" class="w-4 h-4 text-amber-400"></i> Quick Actions</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            ${[{icon:"plus-circle",label:"Add Product",fn:"navigate('products')"},{icon:"home",label:"Add Property",fn:"navigate('properties')"},{icon:"shopping-bag",label:"View Orders",fn:"navigate('orders')"},{icon:"star",label:"Reviews",fn:"navigate('reviews')"},{icon:"ticket",label:"Coupons",fn:"navigate('coupons')"},{icon:"settings",label:"Settings",fn:"navigate('settings')"}].map(v=>`
              <button onclick="${v.fn}" class="btn-press flex flex-col items-center gap-2 p-3 glass-soft border border-blue-500/15 rounded-xl hover:border-blue-500/30 transition">
                <i data-lucide="${v.icon}" class="w-5 h-5 text-blue-400"></i>
                <span class="text-[11px] font-bold text-gray-300">${v.label}</span>
              </button>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),mt(l)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${n(t.message)}</div>`)}}async function S(){const e=document.getElementById("content");try{const{data:t,error:a}=await c.from("showroom_listings").select("*").neq("listing_type","property").order("created_at",{ascending:!1}),i=a?We().filter(l=>l.listing_type!=="property"):t||[],s=[...new Set(i.map(l=>l.category).filter(Boolean))].sort((l,r)=>l.localeCompare(r)),o=[...new Set(i.flatMap(l=>Array.isArray(l.tags)?l.tags:[]).filter(Boolean))].sort((l,r)=>l.localeCompare(r));window._productFilters||(window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"}),window._productSelection||(window._productSelection=new Set),e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="glass-soft border border-blue-500/20 rounded-2xl p-4 sm:p-5">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300/80">Product Showroom</p>
              <h2 class="text-2xl font-black text-white mt-1">Professional Product Showroom</h2>
              <p class="text-xs text-gray-400 mt-1">Unlimited products, smooth infinite scrolling layout, and clean auto-aligned cards.</p>
            </div>
            <button onclick="showAddProductStep1()" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-black px-6 py-3.5 rounded-2xl transition shadow-xl shadow-blue-700/25">
              <i data-lucide="plus" class="w-5 h-5"></i> Add Product
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3">
          ${h("Total Products",i.length,"package","blue")}
          ${h("Published",i.filter(l=>!!l.is_active).length,"badge-check","emerald")}
          ${h("Draft / Hidden",i.filter(l=>!l.is_active).length,"file-clock","amber")}
          ${h("Featured",i.filter(l=>!!l.is_featured).length,"sparkles","violet")}
          ${h("Inventory Units",i.reduce((l,r)=>l+(parseInt(r.stock_quantity,10)||0),0),"boxes","orange")}
          ${h("Avg Price",`$${Math.round(i.reduce((l,r)=>l+(parseFloat(r.price)||0),0)/Math.max(i.length,1)).toLocaleString()}`,"dollar-sign","blue")}
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 sm:p-4 space-y-3">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-2.5">
            <div class="xl:col-span-2 relative">
              <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
              <input id="prod-search" type="search" class="input-field pl-9" placeholder="Search by name, SKU, brand, category..." value="${n(window._productFilters.search||"")}" oninput="filterProducts()">
            </div>
            <select id="prod-cat-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Categories</option>
              ${(s.length?s:gt).map(l=>`<option value="${n(l)}" ${(window._productFilters.category||"")===l?"selected":""}>${n(l)}</option>`).join("")}
            </select>
            <select id="prod-tag-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Tags</option>
              ${o.map(l=>`<option value="${n(l)}" ${(window._productFilters.tag||"")===l?"selected":""}>${n(l)}</option>`).join("")}
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

          <div class="flex flex-wrap items-center gap-2">
            <button onclick="toggleSelectAllProducts(true)" class="btn-press px-3 py-1.5 text-xs font-bold rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-300 hover:bg-blue-500/15 transition">Select Visible</button>
            <button onclick="toggleSelectAllProducts(false)" class="btn-press px-3 py-1.5 text-xs font-bold rounded-lg border border-gray-500/20 bg-gray-500/10 text-gray-300 hover:bg-gray-500/15 transition">Clear Selection</button>
            <button onclick="resetProductFilters()" class="btn-press px-3 py-1.5 text-xs font-bold rounded-lg border border-gray-500/20 bg-transparent text-gray-300 hover:bg-white/5 transition">Reset Filters</button>
            <div class="ml-auto text-[11px] text-gray-400"><span id="products-result-count">0</span> products shown</div>
          </div>
        </div>

        <div id="bulk-actions" class="hidden items-center gap-2.5 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
          <span id="bulk-count" class="text-xs font-bold text-blue-300">0 selected</span>
          <button onclick="bulkToggleActive(true)" class="btn-press text-xs font-bold text-emerald-300 hover:text-emerald-200 px-3 py-1.5 rounded-lg bg-emerald-500/15 transition">Publish</button>
          <button onclick="bulkToggleActive(false)" class="btn-press text-xs font-bold text-amber-300 hover:text-amber-200 px-3 py-1.5 rounded-lg bg-amber-500/15 transition">Unpublish</button>
          <button onclick="bulkDuplicateProducts()" class="btn-press text-xs font-bold text-gray-200 hover:text-white px-3 py-1.5 rounded-lg bg-white/10 transition">Duplicate</button>
          <button onclick="bulkArchive()" class="btn-press text-xs font-bold text-red-300 hover:text-red-200 px-3 py-1.5 rounded-lg bg-red-500/15 transition">Archive</button>
          <button onclick="bulkDeleteProducts()" class="btn-press text-xs font-bold text-red-200 hover:text-white px-3 py-1.5 rounded-lg bg-red-600/20 transition">Delete</button>
        </div>

        <div class="space-y-4">
          <div id="products-grid" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 items-stretch"></div>
          <div id="products-empty" class="hidden">${H("package-search","No matching products","Try different filters or add a new product.",'<button onclick="showAddProductStep1()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl">Add Product</button>')}</div>
          <div class="text-center text-[11px] text-gray-500 py-2">Scroll to explore all products. Layout auto-rearranges as products are added, edited, moved, or removed.</div>
        </div>
      </div>`,window._productsData=i,bt(i),filterProducts(),updateBulkBar(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${n(t.message)}</div>`)}}function U(e){const t=parseFloat(e);return Number.isFinite(t)?t:0}function fe(e){return Array.isArray(e.tags)?e.tags.filter(Boolean):[]}function va(e){const t=parseFloat(e.discount_percent??e.discount??0);return Number.isFinite(t)&&t>0?`${Math.round(t)}% OFF`:"No discount"}function ut(e){return e.is_archived||e.availability_status==="Archived"?"archived":e.is_active?"active":"inactive"}function ye(e){return parseInt(e.views??e.view_count??0,10)||0}function he(e){return parseInt(e.sales??e.sales_count??0,10)||0}function pt(e){return e.sku||e.property_id||"N/A"}function fa(e){const t=e.images&&e.images[0]?e.images[0]:"/fallback.svg",a=fe(e),i=ut(e),s=window._productSelection?.has(e.property_id),o=_(i==="archived"?"inactive":i==="active"?"active":"inactive"),l=C(e.created_at),r=!!e.is_featured,d=e.is_active?`unpublishProduct('${e.property_id}')`:`publishProduct('${e.property_id}')`,u=e.is_active?"Unpublish":"Publish",b=e.is_active?"bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25";return`<article data-id="${e.property_id}" data-cat="${n(e.category||"")}" data-status="${i}" data-featured="${r?"featured":"standard"}" class="prod-card glass-soft border ${s?"border-blue-400/60":"border-blue-500/15"} rounded-2xl p-3.5 flex flex-col gap-3 transition hover:border-blue-400/35">
    <div class="flex items-start gap-3">
      <input type="checkbox" class="prod-check accent-blue-500 mt-1" value="${e.property_id}" ${s?"checked":""} onchange="toggleProductSelection('${e.property_id}', this.checked)">
      <div class="relative w-20 h-20 rounded-xl overflow-hidden border border-blue-500/20 shrink-0 bg-[#0b1124]">
        <img src="${n(t)}" alt="${n(e.title||"Product")}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'">
        ${r?'<span class="absolute top-1 left-1 text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-400 text-[#111827]">Featured</span>':""}
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="text-sm font-black text-white leading-snug line-clamp-2">${n(e.title||"Untitled Product")}</h3>
        <p class="text-[10px] text-gray-500 font-mono mt-0.5">SKU: ${n(pt(e))}</p>
        <div class="mt-1.5 flex items-center gap-1.5 flex-wrap">
          ${o}
          <span class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20">${n(e.category||"Uncategorized")}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2 text-[11px]">
      <div class="rounded-lg bg-white/5 border border-white/10 px-2 py-1.5"><span class="text-gray-400">Price</span><p class="text-emerald-300 font-black">$${U(e.price).toLocaleString()}</p></div>
      <div class="rounded-lg bg-white/5 border border-white/10 px-2 py-1.5"><span class="text-gray-400">Discount</span><p class="text-amber-300 font-bold">${n(va(e))}</p></div>
      <div class="rounded-lg bg-white/5 border border-white/10 px-2 py-1.5"><span class="text-gray-400">Stock</span><p class="text-gray-200 font-bold">${e.stock_quantity!=null?n(e.stock_quantity):"Unlimited"}</p></div>
      <div class="rounded-lg bg-white/5 border border-white/10 px-2 py-1.5"><span class="text-gray-400">Brand</span><p class="text-gray-200 font-bold truncate">${n(e.brand||"N/A")}</p></div>
      <div class="rounded-lg bg-white/5 border border-white/10 px-2 py-1.5"><span class="text-gray-400">Views</span><p class="text-blue-300 font-bold">${ye(e).toLocaleString()}</p></div>
      <div class="rounded-lg bg-white/5 border border-white/10 px-2 py-1.5"><span class="text-gray-400">Sales</span><p class="text-cyan-300 font-bold">${he(e).toLocaleString()}</p></div>
    </div>

    <div class="flex items-center justify-between text-[10px] text-gray-500 border-t border-blue-500/10 pt-2.5">
      <span>Date Added: ${n(l)}</span>
      <span>${(e.images||[]).length} images</span>
    </div>

    <div class="flex flex-wrap gap-1.5 mt-auto">
      <button onclick="editProduct('${e.property_id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-blue-500/15 text-blue-200 hover:bg-blue-500/25 transition">Edit</button>
      <button onclick="quickEditProduct('${e.property_id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-indigo-500/15 text-indigo-200 hover:bg-indigo-500/25 transition">Quick Edit</button>
      <button onclick="previewProduct('${e.property_id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-sky-500/15 text-sky-200 hover:bg-sky-500/25 transition">Preview</button>
      <button onclick="duplicateProduct('${e.property_id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-white/10 text-gray-200 hover:bg-white/20 transition">Duplicate</button>
      <button onclick="${d}" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold ${b} transition">${u}</button>
      <button onclick="archiveProduct('${e.property_id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-red-500/15 text-red-200 hover:bg-red-500/25 transition">Archive</button>
      <button onclick="shareProduct('${e.property_id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-violet-500/15 text-violet-200 hover:bg-violet-500/25 transition">Share</button>
      <button onclick="deleteProduct('${e.property_id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-rose-600/15 text-rose-200 hover:bg-rose-600/25 transition">Delete</button>
      <button onclick="openProductMoreActions('${e.property_id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-600/20 text-gray-200 hover:bg-gray-600/35 transition">More Actions</button>
    </div>

    ${a.length?`<div class="flex flex-wrap gap-1">${a.slice(0,6).map(m=>`<span class="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200">${n(m)}</span>`).join("")}</div>`:'<div class="text-[10px] text-gray-500">No tags</div>'}
  </article>`}function ya(e,t){const a=[...e],i=s=>new Date(s||0).getTime()||0;return t==="oldest"?a.sort((s,o)=>i(s.created_at)-i(o.created_at)):t==="price-high"?a.sort((s,o)=>U(o.price)-U(s.price)):t==="price-low"?a.sort((s,o)=>U(s.price)-U(o.price)):t==="sales-high"?a.sort((s,o)=>he(o)-he(s)):t==="views-high"?a.sort((s,o)=>ye(o)-ye(s)):a.sort((s,o)=>i(o.created_at)-i(s.created_at)),a}function bt(e){const t=document.getElementById("products-grid"),a=document.getElementById("products-empty"),i=document.getElementById("products-result-count");t&&(t.innerHTML=e.map(fa).join(""),i&&(i.textContent=String(e.length)),a&&a.classList.toggle("hidden",e.length>0),updateBulkBar(),window.lucide&&lucide.createIcons())}window.filterProducts=function(){const e=window._productFilters||{};e.search=(document.getElementById("prod-search")?.value||"").trim().toLowerCase(),e.category=document.getElementById("prod-cat-filter")?.value||"",e.tag=document.getElementById("prod-tag-filter")?.value||"",e.status=document.getElementById("prod-status-filter")?.value||"",e.featured=document.getElementById("prod-featured-filter")?.value||"",e.sort=document.getElementById("prod-sort")?.value||"newest",window._productFilters=e;const t=(window._productsData||[]).filter(i=>{const s=[i.title,i.brand,i.category,pt(i),fe(i).join(" "),i.description].join(" ").toLowerCase();return!(e.search&&!s.includes(e.search)||e.category&&(i.category||"")!==e.category||e.tag&&!fe(i).includes(e.tag)||e.status&&ut(i)!==e.status||e.featured&&e.featured==="featured"!=!!i.is_featured)}),a=ya(t,e.sort);bt(a)};window.resetProductFilters=function(){window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"},["prod-search","prod-cat-filter","prod-tag-filter","prod-status-filter","prod-featured-filter","prod-sort"].forEach(t=>{const a=document.getElementById(t);a&&(t==="prod-sort"?a.value="newest":a.value="")}),filterProducts()};window.toggleProductSelection=function(e,t){window._productSelection||(window._productSelection=new Set),t?window._productSelection.add(e):window._productSelection.delete(e),updateBulkBar()};window.toggleSelectAll=function(e,t){document.querySelectorAll("."+t).forEach(a=>{a.checked=e.checked;const i=a.value;window._productSelection||(window._productSelection=new Set),e.checked?window._productSelection.add(i):window._productSelection.delete(i)}),updateBulkBar()};window.toggleSelectAllProducts=function(e){document.querySelectorAll(".prod-check").forEach(t=>{t.checked=!!e,window._productSelection||(window._productSelection=new Set),e?window._productSelection.add(t.value):window._productSelection.delete(t.value)}),updateBulkBar()};window.updateBulkBar=function(){const e=window._productSelection?window._productSelection.size:0,t=document.getElementById("bulk-actions"),a=document.getElementById("bulk-count");t&&(t.classList.toggle("hidden",e===0),e>0&&t.classList.add("flex")),a&&(a.textContent=`${e} selected`)};function oe(){return window._productSelection?[...window._productSelection]:[]}window.bulkToggleActive=async function(e){const t=oe();t.length&&(await Promise.all(t.map(a=>c.from("showroom_listings").update({is_active:e}).eq("property_id",a))),p(`${t.length} products ${e?"published":"unpublished"}`),window._productSelection=new Set,S())};window.bulkDuplicateProducts=async function(){const e=oe();if(e.length){for(const t of e)await duplicateProduct(t,!0);p(`${e.length} products duplicated`),window._productSelection=new Set,S()}};window.bulkArchive=async function(){const e=oe();e.length&&confirm(`Archive ${e.length} products? They will be hidden but not deleted.`)&&(await Promise.all(e.map(t=>c.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",t))),p(`${e.length} products archived`),window._productSelection=new Set,S())};window.bulkDeleteProducts=async function(){const e=oe();e.length&&confirm(`Delete ${e.length} products permanently? This action cannot be undone.`)&&(await Promise.all(e.map(t=>c.from("showroom_listings").delete().eq("property_id",t))),p(`${e.length} products deleted`),window._productSelection=new Set,S())};window.previewProduct=async function(e){const t=await c.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(i=>i.property_id===e)||t.data;if(!a)return p("Product not found","error");k(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Product Live Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="space-y-2">
            <img src="${n((a.images||[])[0]||"/fallback.svg")}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
            <div class="flex flex-wrap gap-2">${(a.images||[]).slice(0,8).map(i=>`<img src="${n(i)}" class="w-12 h-12 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">`).join("")}</div>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-black text-white">${n(a.title||"Untitled Product")}</h4>
            <div class="flex items-center gap-2">${_(a.is_active?"active":"inactive")}${a.is_featured?'<span class="badge bg-amber-500/15 text-amber-200 border-amber-500/30">Featured</span>':""}</div>
            <p class="text-xs text-gray-400">${n(a.description||"No description")}</p>
            <div class="grid grid-cols-2 gap-2 text-xs mt-2">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">$${U(a.price).toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${a.stock_quantity!=null?n(a.stock_quantity):"Unlimited"}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${n(a.brand||"N/A")}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Category</span><p class="text-gray-200 font-bold">${n(a.category||"N/A")}</p></div>
            </div>
            <div class="pt-2 flex gap-2">
              <button onclick="editProduct('${a.property_id}');closeModal();" class="btn-press px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl">Edit</button>
              <button onclick="shareProduct('${a.property_id}')" class="btn-press px-3 py-2 bg-violet-600/70 hover:bg-violet-500 text-white text-xs font-bold rounded-xl">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.quickEditProduct=async function(e){const t=await c.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(i=>i.property_id===e)||t.data;if(!a)return p("Product not found","error");k(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Quick Edit Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <form onsubmit="saveQuickEditProduct(event,'${a.property_id}')" class="space-y-3">
          <div><label class="lbl">Title</label><input name="title" class="input-field" value="${n(a.title||"")}"></div>
          <div class="grid grid-cols-2 gap-2">
            <div><label class="lbl">Price</label><input type="number" step="0.01" name="price" class="input-field" value="${n(a.price||0)}"></div>
            <div><label class="lbl">Stock</label><input type="number" name="stock_quantity" class="input-field" value="${n(a.stock_quantity??"")}" placeholder="Unlimited"></div>
          </div>
          <div><label class="lbl">Availability</label><select name="availability_status" class="input-field">${["In Stock","Out of Stock","Pre-order","Limited Stock","Archived"].map(i=>`<option value="${i}" ${a.availability_status===i?"selected":""}>${i}</option>`).join("")}</select></div>
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10"><span class="text-xs text-gray-300">Featured</span><input type="checkbox" name="is_featured" ${a.is_featured?"checked":""} class="accent-blue-500"></div>
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10"><span class="text-xs text-gray-300">Published</span><input type="checkbox" name="is_active" ${a.is_active?"checked":""} class="accent-blue-500"></div>
          <button type="submit" class="btn-press w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold">Save Quick Edit</button>
        </form>
      </div>
    </div>`)};window.saveQuickEditProduct=async function(e,t){e.preventDefault();const a=new FormData(e.target),i={title:a.get("title")||"Untitled Product",price:Math.max(E,Math.min(B,parseFloat(a.get("price"))||0)),stock_quantity:a.get("stock_quantity")===""?null:parseInt(a.get("stock_quantity"),10),availability_status:a.get("availability_status")||"In Stock",is_featured:a.get("is_featured")==="on",is_active:a.get("is_active")==="on"},{error:s}=await c.from("showroom_listings").update(i).eq("property_id",t);s?(jt(t,i),p("Quick edit saved locally","info")):p("Quick edit saved"),M(),S()};window.publishProduct=function(e){return toggleProductActive(e,!0)};window.unpublishProduct=function(e){return toggleProductActive(e,!1)};window.shareProduct=async function(e){const t=`${window.location.origin}/details.html?id=${encodeURIComponent(e)}`;try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(t),p("Product link copied to clipboard");return}}catch{}window.prompt("Copy product link:",t)};window.deleteProduct=async function(e){if(!confirm("Delete this product permanently? This action cannot be undone."))return;const{error:t}=await c.from("showroom_listings").delete().eq("property_id",e);if(t)return p("Delete failed: "+t.message,"error");p("Product deleted"),S()};window.openProductMoreActions=function(e){k(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">More Actions</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <div class="grid grid-cols-1 gap-2">
          <button onclick="previewProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Live Preview</button>
          <button onclick="quickEditProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Quick Edit</button>
          <button onclick="duplicateProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Duplicate</button>
          <button onclick="archiveProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-sm font-semibold text-red-200">Archive</button>
        </div>
      </div>
    </div>`)};function ha(){const e=new Date().getHours();return e<12?"morning":e<17?"afternoon":"evening"}function mt(e){const t=document.getElementById("chart-revenue");if(!t)return;const a=[],i=new Date;for(let o=5;o>=0;o--){const l=new Date(i.getFullYear(),i.getMonth()-o,1);a.push({label:l.toLocaleString("default",{month:"short"}),month:l.getMonth(),year:l.getFullYear()})}const s=a.map(o=>e.filter(l=>{const r=new Date(l.created_at);return r.getMonth()===o.month&&r.getFullYear()===o.year&&["approved","payment_approved","delivered"].includes(l.status)}).reduce((l,r)=>l+(parseFloat(r.amount)||0),0));new Chart(t,{type:"bar",data:{labels:a.map(o=>o.label),datasets:[{label:"Revenue (USD)",data:s,backgroundColor:"rgba(59,130,246,.6)",borderColor:"rgb(59,130,246)",borderWidth:1,borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"#64748b",callback:o=>"$"+o.toLocaleString()},grid:{color:"rgba(59,130,246,.05)"}},x:{ticks:{color:"#64748b"},grid:{display:!1}}}}})}const gt=["Electronics","Phones","Computers & Laptops","Fashion","Men's Fashion","Women's Fashion","Shoes","Bags & Accessories","Jewelry","Beauty & Skincare","Home & Kitchen","Furniture","Garden & Outdoor","Toys & Games","Sports & Fitness","Food & Groceries","Baby & Kids","Health & Medical","Books & Education","Office & Stationery","Pet Supplies","Musical Instruments","Cameras & Photography","Watches","Gaming","Software & Digital","Services","Cars","Luxury Cars","Motorcycles","Commercial Vehicles","Boats & Marine","Social Media Accounts","Other"],Be=["Cars","Luxury Cars","Motorcycles","Commercial Vehicles","Boats & Marine"],Z={default:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Phones:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"storage",label:"Storage (e.g. 128GB)",type:"text"},{key:"ram",label:"RAM (e.g. 8GB)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],"Computers & Laptops":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"processor",label:"Processor (CPU)",type:"text"},{key:"ram",label:"RAM",type:"text"},{key:"storage",label:"Storage",type:"text"},{key:"display",label:"Display Size",type:"text"},{key:"graphics",label:"Graphics Card",type:"text"},{key:"os",label:"Operating System",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Electronics:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model Number",type:"text"},{key:"color",label:"Color",type:"text"},{key:"voltage",label:"Voltage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Shoes:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Jewelry:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"material",label:"Material (e.g. 14k Gold)",type:"text"},{key:"gemstone",label:"Gemstone",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Watches:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"movement",label:"Movement (Quartz/Automatic)",type:"text"},{key:"case_material",label:"Case Material",type:"text"},{key:"water_resistance",label:"Water Resistance",type:"text"},{key:"color",label:"Dial Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"description",label:"Description",type:"textarea",span:2}],Gaming:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"platform",label:"Platform (PS5, Xbox, PC…)",type:"text"},{key:"model",label:"Game / Model",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],"Sports & Fitness":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]};["Men's Fashion","Women's Fashion","Fashion"].forEach(e=>Z[e]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (T-Shirt, Dress…)",type:"text"},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]);Be.forEach(e=>Z[e]=[{key:"title",label:"Vehicle Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"color",label:"Color",type:"text"},{key:"size",label:"Body / Trim",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}]);function vt(e=""){return ae.map(t=>`<option value="${t.code}" ${e===t.code?"selected":""}>${t.flag} ${t.name}</option>`).join("")}function ft(e="USD"){return at.map(t=>`<option value="${t}" ${e===t?"selected":""}>${t}</option>`).join("")}function j(e){return String(e||"").split(",").map(t=>t.trim()).filter(Boolean)}function f(e,t){const a=document.querySelector(`[name="${e}"]`);!a||t==null||(a.value=t)}function yt(e){const t=document.getElementById(e);t&&(t.min=String(E),t.max=String(B),t.placeholder=`Price (${E} - ${B})`)}function He(e){const t=document.getElementById(`${e}-country_code`),a=document.getElementById(`${e}-country`),i=document.getElementById(`${e}-currency`);if(!t)return;const s=ae.find(o=>o.code===t.value);a&&s&&(a.value=s.name),i&&s&&(i.value=Ae(s.code))}function ee(e,t){const a=document.getElementById(`${e}-image-requirement`),i=document.getElementById(`${e}-required_image_count`);i&&(i.value=t?String(t):""),a&&(t>0?(a.textContent=`This listing template requires at least ${t} images.`,a.classList.remove("hidden")):(a.textContent="",a.classList.add("hidden")))}function ht(e,t,a){if(e>0&&t.length<e)throw new Error(`${a} needs at least ${e} images before publishing.`)}function xe(e,t="full"){const a=document.getElementById("pf-catalog_template_id")?.value||"",i=document.getElementById("pf-currency")?.value||"USD",s=parseFloat(document.getElementById("pf-price")?.value)||E,o=Ye({templateId:a,listingType:"product",category:e,countryCode:"US",currency:i,price:s});if(!o){ee("pf",Be.includes(e)?24:0);return}ee("pf",o.requiredImageCount||0),f("currency",o.currency),f("subcategory",o.subcategory),f("features_text",o.features.join(", ")),f("highlights_text",o.highlights.join(", ")),f("seo_keywords_text",o.seo_keywords.join(", ")),t==="full"?(f("title",o.title),f("description",o.description),f("brand",o.brand||""),f("model",o.model||""),f("color",o.color||""),f("size",o.size||""),f("condition",o.condition||"New")):f("description",o.description)}function we(e="full"){const t=document.getElementById("ppf-catalog_template_id")?.value||"",a=document.getElementById("ppf-country_code")?.value||"US",i=document.getElementById("ppf-currency")?.value||"USD",s=parseFloat(document.getElementById("ppf-price")?.value)||E,o=Ye({templateId:t,listingType:"property",category:"Real Estate",countryCode:a,currency:i,price:s});if(!o){ee("ppf",24);return}ee("ppf",o.requiredImageCount||24),f("country",o.country),f("country_code",o.country_code),f("currency",o.currency),f("subcategory",o.subcategory),f("product_location",o.product_location),f("features_text",o.features.join(", ")),f("highlights_text",o.highlights.join(", ")),f("seo_keywords_text",o.seo_keywords.join(", ")),e==="full"?(f("title",o.title),f("description",o.description),f("property_type",o.property_type||""),f("bedrooms",o.bedrooms??""),f("bathrooms",o.bathrooms??""),f("building_size",o.building_size||""),f("land_size",o.land_size||""),f("furnished",o.furnished||"")):f("description",o.description)}window.applyProductCatalogTemplate=function(e,t="full"){xe(e,t)};window.applyPropertyCatalogTemplate=function(e="full"){we(e)};function xa(e){return Z[e]||Z.default}function wa(e,t={}){return xa(e).map(i=>{const s=t[i.key]||"",o=i.span===2?"sm:col-span-2":"",l=i.required?"required":"";let r="";if(i.type==="select")r=`<select class="input-field" name="${i.key}" id="pf-${i.key}" ${l}>
        <option value="">Select…</option>
        ${i.options.map(d=>`<option value="${d}" ${s===d?"selected":""}>${d}</option>`).join("")}
      </select>`;else if(i.type==="textarea")r=`<textarea class="input-field" name="${i.key}" id="pf-${i.key}" rows="3" placeholder="Write a detailed description…">${n(s)}</textarea>`;else{const u=["brand","model","color","size","material","platform"].includes(i.key)?`pf-list-${i.key}`:"",m=({brand:["Apple","Samsung","Sony","LG","HP","Dell","Lenovo","Asus","Nike","Adidas","Puma","Gucci","Rolex","Toyota","Mercedes","BMW","Tesla"],model:["Pro","Ultra","Max","SE","Standard","Plus","Series 1","Series 2"],color:["Black","White","Silver","Blue","Red","Green","Gold","Gray","Pink","Brown"],size:["XS","S","M","L","XL","XXL","32","34","36","38","40","42"],material:["Cotton","Leather","Stainless Steel","Aluminum","Wood","Glass","Plastic"],platform:["PS5","Xbox Series X","Nintendo Switch","PC","Android","iOS"]}[i.key]||[]).map(g=>`<option value="${n(g)}"></option>`).join("");r=`<input type="${i.type}" class="input-field" name="${i.key}" id="pf-${i.key}" value="${n(s)}" placeholder="${i.label}" ${u?`list="${u}"`:""} ${l}>${u?`<datalist id="${u}">${m}</datalist>`:""}`}return`<div class="${o}"><label class="lbl">${i.label}${i.required?" *":""}</label>${r}</div>`}).join("")}window.showAddProductStep1=function(){k(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Select Product Category</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <p class="text-xs text-gray-400 mb-3">Choose the category that best matches your product. The form will show smart fields automatically.</p>
        <div class="relative mb-3">
          <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
          <input id="product-category-search" type="search" class="input-field pl-9" placeholder="Search category..." oninput="filterProductCategoryChoices(this.value)">
        </div>
        <div id="product-category-grid" class="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-80 overflow-y-auto scrollbar-thin pr-1">
          ${gt.map(e=>`
            <button data-category="${n(e).toLowerCase()}" onclick="showAddProductStep2('${e.replace(/'/g,"\\'")}')" class="btn-press flex items-center gap-2 p-3 glass-soft border border-blue-500/15 hover:border-blue-500/40 rounded-xl transition text-left">
              <i data-lucide="tag" class="w-4 h-4 text-blue-400 shrink-0"></i>
              <span class="text-xs font-semibold text-gray-200">${n(e)}</span>
            </button>`).join("")}
        </div>
      </div>
    </div>`)};window.filterProductCategoryChoices=function(e){const t=String(e||"").trim().toLowerCase();document.querySelectorAll("#product-category-grid [data-category]").forEach(a=>{const i=!t||a.dataset.category.includes(t);a.classList.toggle("hidden",!i)})};window.showAddProductStep2=function(e,t={}){const a=!!t.property_id,i=Je("product",e),s=t.currency||"USD";k(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <div>
            <h3 class="text-base font-black text-white">${a?"Edit":"Add"} Product — ${n(e)}</h3>
            <p class="text-xs text-gray-500 mt-0.5">${a?`Editing: ${n(t.property_id)}`:"Fill in the product details below"}</p>
          </div>
          <button onclick="${a?"closeModal()":"showAddProductStep1()"}" class="text-gray-500 hover:text-white transition">
            <i data-lucide="${a?"x":"arrow-left"}" class="w-5 h-5"></i>
          </button>
        </div>

        <form id="product-form" onsubmit="saveProduct(event,'${n(e)}','${a?t.property_id:""}')" class="space-y-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-3">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs font-bold text-white uppercase tracking-wide">Global Catalog Autofill</p>
                <p class="text-[11px] text-gray-500 mt-1">Pick a template, country, and currency to auto-build the listing title, description, and metadata.</p>
              </div>
              <button type="button" onclick="applyProductCatalogTemplate('${n(e)}')" class="btn-press px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold rounded-xl transition">Refresh Template</button>
            </div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Catalog Template</label><select class="input-field" name="catalog_template_id" id="pf-catalog_template_id" onchange="applyProductCatalogTemplate('${n(e)}')"><option value="">Choose a template...</option>${i.map(o=>`<option value="${o.id}">${n(o.label)} - ${n(o.subcategory||o.category)}</option>`).join("")}</select></div>
              <div class="sm:col-span-2"><label class="lbl">Currency</label><select class="input-field" name="currency" id="pf-currency" onchange="applyProductCatalogTemplate('${n(e)}')">${ft(s)}</select></div>
            </div>
            <p id="pf-image-requirement" class="hidden text-[11px] text-amber-300"></p>
            <input type="hidden" name="required_image_count" id="pf-required_image_count" value="">
          </div>

          <div id="product-autosave-note" class="hidden p-3 rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-[11px] text-emerald-200"></div>

          <!-- Step 1: Image Upload -->
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <label class="lbl !mb-0">Step 1: Upload Product Images</label>
              <span class="text-[10px] text-gray-500">Upload one or multiple images before publishing</span>
            </div>
            <div id="drop-zone" class="drop-zone" onclick="document.getElementById('img-upload').click()">
              <i data-lucide="image-plus" class="w-8 h-8 text-blue-400 mx-auto mb-2"></i>
              <p class="text-xs font-bold text-gray-300">Click or drag & drop images here</p>
              <p class="text-[11px] text-gray-500 mt-1">PNG, JPG, WEBP up to 5MB each. First image = cover.</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2 mt-3">
              ${(t.images||[]).map((o,l)=>le(o,l)).join("")}
            </div>
            <p class="text-[10px] text-gray-500 mt-1">Drag to reorder • Click X to remove • First image is cover • Vehicle templates require 24 images</p>
            <div id="image-url-inputs">
              ${(t.images||[]).map((o,l)=>`<input type="hidden" name="images" id="img-url-${l}" value="${n(o)}">`).join("")}
            </div>
          </div>

          <!-- Step 2: Product Details -->
          <div class="text-[11px] text-blue-200 font-bold uppercase tracking-wide">Step 2: Product Details</div>
          <div class="form-grid form-grid-2">
            ${wa(e,t)}
          </div>

          <div class="form-grid form-grid-2">
            <div class="sm:col-span-2"><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${n(t.subcategory||"")}" placeholder="e.g. Smartphones, SUVs, Model Houses"></div>
            <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${n((t.features||[]).join(", "))}" placeholder="5G connectivity, OLED display, fast charging"></div>
            <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${n((t.highlights||[]).join(", "))}" placeholder="Retail-ready packaging, premium demand, strong presentation"></div>
            <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${n((t.seo_keywords||[]).join(", "))}" placeholder="smartphone, unlocked, global shipping"></div>
          </div>

          <!-- Tags / Badges -->
          <div>
            <label class="lbl">Product Tags / Badges</label>
            <div class="flex flex-wrap gap-2">
              ${["New Arrival","Best Seller","Hot Deal","Featured","Limited Stock"].map(o=>`
                <label class="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" name="tags" value="${o}" ${(t.tags||[]).includes(o)?"checked":""} class="accent-blue-500">
                  <span class="text-xs text-gray-300">${o}</span>
                </label>`).join("")}
            </div>
          </div>

          <!-- Availability -->
          <div class="form-grid form-grid-2">
            <div>
              <label class="lbl">Availability Status</label>
              <select class="input-field" name="availability_status" id="pf-availability_status">
                ${["In Stock","Out of Stock","Pre-order","Limited Stock"].map(o=>`<option value="${o}" ${t.availability_status===o?"selected":""}>${o}</option>`).join("")}
              </select>
            </div>
            <div class="p-3 glass-soft border border-blue-500/15 rounded-xl">
              <p class="text-xs font-bold text-white">Global Price Range</p>
              <p class="text-[11px] text-gray-500 mt-1">Allowed price range is ${E} to ${B} in the selected currency.</p>
            </div>
          </div>

          <!-- Featured -->
          <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/15 rounded-xl">
            <div>
              <p class="text-xs font-bold text-white">Featured Product</p>
              <p class="text-[11px] text-gray-500">Show in featured sections</p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" name="is_featured" ${t.is_featured?"checked":""}>
              <span class="toggle-slider"></span>
            </label>
          </div>

          <!-- Active -->
          <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/15 rounded-xl">
            <div>
              <p class="text-xs font-bold text-white">Published / Active</p>
              <p class="text-[11px] text-gray-500">Visible to customers on the website</p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" name="is_active" ${a?t.is_active?"checked":"":"checked"}>
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-xl p-3" id="product-review-panel">
            <p class="text-xs font-bold text-white">Quick Review Before Publish</p>
            <div class="text-[11px] text-gray-400 mt-1" id="product-review-content">Fill in product details to preview your publish summary.</div>
          </div>

          <div class="flex gap-3 pt-2">
            <button type="button" onclick="previewProductDraft()" class="btn-press px-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2.5 rounded-xl text-sm transition">
              Live Preview
            </button>
            <button type="submit" name="action" value="publish" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-2.5 rounded-xl text-sm transition shadow-lg shadow-blue-600/15">
              ${a?"One-Click Publish Changes":"One-Click Publish Product"}
            </button>
            <button type="submit" name="action" value="draft" class="btn-press px-5 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2.5 rounded-xl text-sm transition">
              Save Draft
            </button>
          </div>
        </form>
      </div>
    </div>`),xt(),wt(),yt("pf-price"),xe(e,"pricing"),document.getElementById("pf-price")?.addEventListener("input",()=>xe(e,"pricing")),Ia(e,t.property_id||"")};function le(e,t){return`<div class="img-thumb ${t===0?"cover-img":""}" data-index="${t}" title="${t===0?"Cover Image":"Image "+(t+1)}">
    <img src="${n(e)}" onerror="this.src='/fallback.svg'">
    <button class="rm" onclick="removeImage(${t})" type="button">✕</button>
  </div>`}function xt(){const e=document.getElementById("drop-zone");e&&(e.addEventListener("dragover",t=>{t.preventDefault(),e.classList.add("drag-over")}),e.addEventListener("dragleave",()=>e.classList.remove("drag-over")),e.addEventListener("drop",t=>{t.preventDefault(),e.classList.remove("drag-over"),_a(t.dataTransfer.files)}))}function wt(){const e=document.getElementById("image-preview");!e||!window.Sortable||new Sortable(e,{animation:150,onEnd:()=>ne()})}window.handleImageUpload=async function(e){await _t(e.target.files)};async function _a(e){await _t(e)}async function _t(e){const t=document.getElementById("image-preview");if(t){for(const a of e){if(!a.type.startsWith("image/"))continue;const i=await ka(a);if(i){const s=t.children.length,o=document.createElement("div");o.innerHTML=le(i,s),t.appendChild(o.firstElementChild),ne()}}Me(),window.lucide&&lucide.createIcons()}}async function ka(e){try{const{data:{session:t}}=await c.auth.getSession();if(!t)return URL.createObjectURL(e);const a=e.name.split(".").pop(),i=`products/${Date.now()}-${Math.random().toString(36).slice(2)}.${a}`,{error:s}=await c.storage.from("product-images").upload(i,e,{contentType:e.type,upsert:!1});if(s)return URL.createObjectURL(e);const{data:o}=c.storage.from("product-images").getPublicUrl(i);return o.publicUrl}catch{return URL.createObjectURL(e)}}window.removeImage=function(e){const t=document.getElementById("image-preview");if(!t)return;const a=[...t.children];a[e]&&a[e].remove(),ne(),Me()};function ne(){const e=document.getElementById("image-preview"),t=document.getElementById("image-url-inputs");!e||!t||(t.innerHTML="",[...e.querySelectorAll(".img-thumb")].forEach((a,i)=>{const s=a.querySelector("img");if(!s)return;const o=document.createElement("input");o.type="hidden",o.name="images",o.id=`img-url-${i}`,o.value=s.src,t.appendChild(o),a.dataset.index=i;const l=a.querySelector(".rm");l&&l.setAttribute("onclick",`removeImage(${i})`)}))}function Me(){const e=document.getElementById("image-preview");e&&[...e.querySelectorAll(".img-thumb")].forEach((t,a)=>{t.classList.toggle("cover-img",a===0),t.title=a===0?"Cover Image":`Image ${a+1}`})}function kt(e,t){return`kco_product_form_autosave_${e}_${t||"new"}`}function $a(e){const t=new FormData(e),a={images:[],tags:[],fields:{}};for(const[i,s]of t.entries())i==="images"?s&&!String(s).startsWith("blob:")&&a.images.push(String(s)):i==="tags"?a.tags.push(String(s)):a.fields[i]=String(s);return a.fields.is_featured=e.querySelector('[name="is_featured"]')?.checked?"on":"",a.fields.is_active=e.querySelector('[name="is_active"]')?.checked?"on":"",a}function Sa(e,t){if(!t||typeof t!="object")return!1;const a=t.fields||{};Object.entries(a).forEach(([s,o])=>{const l=e.querySelector(`[name="${s}"]`);l&&(l.type==="checkbox"?l.checked=o==="on"||o===!0:l.value=o==null?"":String(o))});const i=Array.isArray(t.tags)?t.tags:[];if(e.querySelectorAll('input[name="tags"]').forEach(s=>{s.checked=i.includes(s.value)}),Array.isArray(t.images)){const s=document.getElementById("image-preview");s&&(s.innerHTML=t.images.map((o,l)=>le(o,l)).join(""),ne(),Me())}return!0}function Ge(){const e=document.getElementById("product-review-content"),t=document.getElementById("product-form");if(!e||!t)return;const a=t.querySelector('[name="title"]')?.value||"Untitled Product",i=t.querySelector('[name="brand"]')?.value||"N/A",s=parseFloat(t.querySelector('[name="price"]')?.value||"0")||0,o=t.querySelector('[name="stock_quantity"]')?.value,l=o===""||o==null?"Unlimited":o,r=y.section==="products"&&document.querySelector("#product-form")?.dataset?.category||"",d=[...t.querySelectorAll('input[name="tags"]:checked')].map(m=>m.value),u=document.querySelectorAll("#image-preview .img-thumb").length,b=t.querySelector('[name="is_active"]')?.checked;e.innerHTML=`
    <div class="grid grid-cols-2 gap-2">
      <div><span class="text-gray-500">Title</span><p class="text-white font-semibold">${n(a)}</p></div>
      <div><span class="text-gray-500">Brand</span><p class="text-white font-semibold">${n(i)}</p></div>
      <div><span class="text-gray-500">Price</span><p class="text-emerald-300 font-semibold">$${s.toLocaleString()}</p></div>
      <div><span class="text-gray-500">Stock</span><p class="text-white font-semibold">${n(l)}</p></div>
      <div><span class="text-gray-500">Images</span><p class="text-white font-semibold">${u}</p></div>
      <div><span class="text-gray-500">Status</span><p class="${b?"text-emerald-300":"text-amber-300"} font-semibold">${b?"Published":"Draft / Hidden"}</p></div>
    </div>
    <div class="mt-2 text-gray-400">Tags: ${d.length?n(d.join(", ")):"No tags selected"}</div>
    ${r?`<div class="text-gray-500 mt-1">Category: ${n(r)}</div>`:""}
  `}window.previewProductDraft=function(){const e=document.getElementById("product-form");if(!e)return;const t=document.querySelector("#image-preview img")?.src||"/fallback.svg",a=e.querySelector('[name="title"]')?.value||"Untitled Product",i=e.querySelector('[name="description"]')?.value||"No description yet.",s=e.querySelector('[name="brand"]')?.value||"N/A",o=parseFloat(e.querySelector('[name="price"]')?.value||"0")||0,l=e.dataset.category||"Product",r=e.querySelector('[name="stock_quantity"]')?.value||"Unlimited",d=e.querySelector('[name="is_active"]')?.checked;k(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Live Draft Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="${n(t)}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
          <div class="space-y-2">
            <h4 class="text-xl font-black text-white">${n(a)}</h4>
            <div class="flex items-center gap-2">${_(d?"active":"inactive")}<span class="badge bg-blue-500/10 text-blue-300 border-blue-500/20">${n(l)}</span></div>
            <p class="text-sm text-gray-400">${n(i)}</p>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">$${o.toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${n(r)}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2 col-span-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${n(s)}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>`)};function Ia(e,t){const a=document.getElementById("product-form");if(!a)return;a.dataset.category=e;const i=kt(e,t),s=document.getElementById("product-autosave-note");try{const d=localStorage.getItem(i);if(d){const u=JSON.parse(d);Sa(a,u)&&s&&(s.textContent="Autosave restored from your last session.",s.classList.remove("hidden"))}}catch{}const o=()=>{try{localStorage.setItem(i,JSON.stringify($a(a))),s&&(s.textContent=`Auto saved at ${new Date().toLocaleTimeString()}`,s.classList.remove("hidden"))}catch{}Ge()};let l;const r=()=>{clearTimeout(l),l=setTimeout(o,500)};a.querySelectorAll("input, textarea, select").forEach(d=>{d.addEventListener("input",r),d.addEventListener("change",r)}),Ge()}window.saveProduct=async function(e,t,a){e.preventDefault();const i=e.target,s=i.querySelector("[type=submit][name=action][value=publish]");s&&(s.disabled=!0,s.textContent="Saving…");try{const o=new FormData(i),l={};for(const[m,g]of o.entries())m==="images"?(l.images=l.images||[],g&&!g.startsWith("blob:")&&l.images.push(g)):m==="tags"?(l.tags=l.tags||[],l.tags.push(g)):l[m]=g;const r=parseInt(l.required_image_count||"0",10)||(Be.includes(t)?24:0);ht(r,l.images||[],"This listing");const d=o.get("action")==="draft",u={listing_type:"product",category:t,subcategory:l.subcategory||null,title:l.title||"Untitled Product",description:l.description||"",price:Math.max(E,Math.min(B,parseFloat(l.price)||0)),currency:l.currency||"USD",country:"",country_code:"",listing_status:"sale",state:"",city:"",product_location:"",latitude:null,longitude:null,is_active:d?!1:l.is_active==="on",is_featured:l.is_featured==="on",brand:l.brand||null,color:l.color||null,size:l.size||null,condition:l.condition||null,warranty:l.warranty||null,availability_status:l.availability_status||"In Stock",stock_quantity:l.stock_quantity?parseInt(l.stock_quantity):null,images:l.images||[],features:j(l.features_text).length?j(l.features_text):l.tags||[],tags:l.tags||[],highlights:j(l.highlights_text),seo_keywords:j(l.seo_keywords_text),is_ai_generated:!!l.catalog_template_id,ai_generated_fields:l.catalog_template_id?["title","description","features","highlights","seo_keywords"]:[],specifications:{model:l.model||null,storage:l.storage||null,ram:l.ram||null,processor:l.processor||null,display:l.display||null,material:l.material||null,gender:l.gender||null,platform:l.platform||null,voltage:l.voltage||null}};let b;if(a)({error:b}=await c.from("showroom_listings").update(u).eq("property_id",a)),b&&Y({...u,property_id:a});else{const m=Ee();u.property_id=m,{error:b}=await c.from("showroom_listings").insert(u),b&&Y(u)}if(b&&!/showroom_listings/i.test(b.message||""))throw b;p(d?"Draft saved!":a?"Product updated!":"Product published!");try{localStorage.removeItem(kt(t,a))}catch{}M(),S()}catch(o){p("Error: "+o.message,"error"),s&&(s.disabled=!1,s.textContent=a?"One-Click Publish Changes":"One-Click Publish Product")}};window.editProduct=async function(e){const{data:t,error:a}=await c.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),i=a?ze(e):t;if(!i)return p("Product not found","error");showAddProductStep2(i.category||"Other",i)};window.toggleProductActive=async function(e,t){await c.from("showroom_listings").update({is_active:t,availability_status:t?"In Stock":"Out of Stock"}).eq("property_id",e),p(t?"Product published":"Product unpublished"),S()};window.duplicateProduct=async function(e,t=!1){const{data:a}=await c.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();if(!a)return;const{id:i,property_id:s,created_at:o,updated_at:l,...r}=a,d=Ee();await c.from("showroom_listings").insert({...r,property_id:d,title:a.title+" (Copy)",is_active:!1}),t||(p("Product duplicated"),S())};window.archiveProduct=async function(e){confirm("Archive this product? It will be hidden from the website but can be restored.")&&(await c.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",e),p("Product archived"),S())};const Pa=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","Commercial Building","Hotel","Land","Other"];async function $t(){const e=document.getElementById("content");try{const{data:t,error:a}=await c.from("showroom_listings").select("*").eq("listing_type","property").order("created_at",{ascending:!1}),i=a?We().filter(s=>s.listing_type==="property"):t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex flex-wrap items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Properties Manager</h2>
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
                        <img src="${n((s.images||[])[0]||"/fallback.svg")}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
                        <div><p class="text-xs font-bold text-white truncate max-w-[160px]">${n(s.title)}</p><p class="text-[10px] font-mono text-gray-500">${n(s.property_id)}</p></div>
                      </div>
                    </td>
                    <td><span class="text-xs text-gray-300">${n(s.property_type||s.category)}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${n([s.city,s.state,s.country].filter(Boolean).join(", ")||"—")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(s.price||0).toLocaleString()}</span></td>
                    <td>${_(s.listing_status||"sale")} ${_(s.is_active?"active":"inactive")}</td>
                    <td>
                      <div class="flex gap-1">
                        <button onclick="editProperty('${s.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
                        <button onclick="archiveProduct('${s.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
                      </div>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.showAddPropertyModal=function(e={}){const t=!!e.property_id,a=Je("property","Real Estate"),i=e.country_code||"US",s=e.currency||Ae(i);k(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${t?"Edit":"Add"} Property</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
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
              <div class="sm:col-span-2"><label class="lbl">Property Template</label><select class="input-field" name="catalog_template_id" id="ppf-catalog_template_id" onchange="applyPropertyCatalogTemplate()"><option value="">Choose a property template...</option>${a.map(o=>`<option value="${o.id}">${n(o.label)} - ${n(o.propertyType||o.subcategory)}</option>`).join("")}</select></div>
              <div><label class="lbl">Country</label><select class="input-field" name="country_code" id="ppf-country_code" onchange="syncPropertyCountry(); applyPropertyCatalogTemplate()">${vt(i)}</select></div>
              <div><label class="lbl">Currency</label><select class="input-field" name="currency" id="ppf-currency" onchange="applyPropertyCatalogTemplate()">${ft(s)}</select></div>
            </div>
            <p id="ppf-image-requirement" class="text-[11px] text-amber-300">This property flow expects 24 images for a complete gallery.</p>
            <input type="hidden" name="required_image_count" id="ppf-required_image_count" value="24">
          </div>

          <div class="form-grid form-grid-2">
            <div class="sm:col-span-2"><label class="lbl">Property Title *</label><input class="input-field" name="title" value="${n(e.title||"")}" required placeholder="e.g. Cozy 3-Bedroom Family Home"></div>
            <div><label class="lbl">Property Type *</label><select class="input-field" name="property_type" required>
              ${Pa.map(o=>`<option value="${o}" ${e.property_type===o?"selected":""}>${o}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Listing Status</label><select class="input-field" name="listing_status">
              <option value="sale" ${e.listing_status!=="rent"?"selected":""}>For Sale</option>
              <option value="rent" ${e.listing_status==="rent"?"selected":""}>For Rent</option>
            </select></div>
            <div><label class="lbl">Price *</label><input type="number" class="input-field" id="ppf-price" name="price" value="${e.price||""}" required placeholder="0"></div>
            <div><label class="lbl">Country Name *</label><input class="input-field" id="ppf-country" name="country" value="${n(e.country||"")}" required placeholder="United States"></div>
            <div><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${n(e.subcategory||"")}" placeholder="e.g. Villas, Mansions, Hotels"></div>
            <div><label class="lbl">State / Province</label><input class="input-field" name="state" value="${n(e.state||"")}" placeholder="e.g. California"></div>
            <div><label class="lbl">City</label><input class="input-field" name="city" value="${n(e.city||"")}" placeholder="e.g. Los Angeles"></div>
            <div><label class="lbl">Town / Local Area</label><input class="input-field" name="town" value="${n(e.town||"")}" placeholder="Neighborhood or district"></div>
            <div><label class="lbl">Latitude</label><input type="number" step="any" class="input-field" name="latitude" value="${n(e.latitude||"")}" placeholder="40.7128"></div>
            <div><label class="lbl">Longitude</label><input type="number" step="any" class="input-field" name="longitude" value="${n(e.longitude||"")}" placeholder="-74.0060"></div>
            <div><label class="lbl">Bedrooms</label><input type="number" class="input-field" name="bedrooms" value="${e.bedrooms??""}" placeholder="3"></div>
            <div><label class="lbl">Bathrooms</label><input type="number" class="input-field" name="bathrooms" value="${e.bathrooms??""}" placeholder="2"></div>
            <div><label class="lbl">Building Size</label><input class="input-field" name="building_size" value="${n(e.building_size||"")}" placeholder="e.g. 2,500 sqft"></div>
            <div><label class="lbl">Land Size</label><input class="input-field" name="land_size" value="${n(e.land_size||"")}" placeholder="e.g. 0.5 acres"></div>
            <div><label class="lbl">Parking Spaces</label><input type="number" class="input-field" name="parking_spaces" value="${e.parking_spaces??""}"></div>
            <div><label class="lbl">Furnished</label><select class="input-field" name="furnished">
              <option value="">Not specified</option>
              <option value="Furnished" ${e.furnished==="Furnished"?"selected":""}>Furnished</option>
              <option value="Unfurnished" ${e.furnished==="Unfurnished"?"selected":""}>Unfurnished</option>
            </select></div>
            <div class="sm:col-span-2"><label class="lbl">Description</label><textarea class="input-field" name="description" rows="3" placeholder="Describe the property…">${n(e.description||"")}</textarea></div>
            <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${n((e.features||[]).join(", "))}" placeholder="Swimming Pool, Garden, Garage…"></div>
            <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${n((e.highlights||[]).join(", "))}" placeholder="Prime location, map-ready post, 24-image gallery"></div>
            <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${n((e.seo_keywords||[]).join(", "))}" placeholder="mansion, villa, property investment"></div>
            <div class="sm:col-span-2"><label class="lbl">Property Location</label><input class="input-field" name="product_location" value="${n(e.product_location||"")}" placeholder="Estate, district, city, landmark"></div>
          </div>

          <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/15 rounded-xl">
            <div><p class="text-xs font-bold text-white">Published / Active</p><p class="text-[11px] text-gray-500">Visible on the website</p></div>
            <label class="toggle-switch"><input type="checkbox" name="is_active" ${t?e.is_active?"checked":"":"checked"}><span class="toggle-slider"></span></label>
          </div>

          <div>
            <label class="lbl">Property Images</label>
            <div id="drop-zone" class="drop-zone" onclick="document.getElementById('img-upload').click()">
              <i data-lucide="image-plus" class="w-7 h-7 text-blue-400 mx-auto mb-2"></i>
              <p class="text-xs font-bold text-gray-300">Click or drag & drop images</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2 mt-3">
              ${(e.images||[]).map((o,l)=>le(o,l)).join("")}
            </div>
            <div id="image-url-inputs">
              ${(e.images||[]).map((o,l)=>`<input type="hidden" name="images" id="img-url-${l}" value="${n(o)}">`).join("")}
            </div>
          </div>

          <div class="flex gap-3 pt-2">
            <button type="submit" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition">${t?"💾 Save Changes":"🚀 Publish Property"}</button>
          </div>
        </form>
      </div>
    </div>`),xt(),wt(),yt("ppf-price"),window.syncPropertyCountry=function(){He("ppf")},He("ppf"),we("pricing"),document.getElementById("ppf-price")?.addEventListener("input",()=>we("pricing"))};window.saveProperty=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=Object.fromEntries(a.entries()),s=a.getAll("images").filter(u=>u&&!u.startsWith("blob:")),o=(i.features_text||"").split(",").map(u=>u.trim()).filter(Boolean),l=parseInt(i.required_image_count||"24",10)||24;ht(l,s,"This property");const r={listing_type:"property",category:i.property_type||"Real Estate",subcategory:i.subcategory||null,title:i.title,description:i.description||"",price:Math.max(E,Math.min(B,parseFloat(i.price)||0)),currency:i.currency||"USD",country:i.country||"",country_code:(i.country_code||"").toUpperCase(),state:i.state||"",city:i.city||"",town:i.town||"",product_location:i.product_location||"",latitude:i.latitude?parseFloat(i.latitude):null,longitude:i.longitude?parseFloat(i.longitude):null,property_type:i.property_type||"",listing_status:i.listing_status||"sale",bedrooms:i.bedrooms?parseInt(i.bedrooms):null,bathrooms:i.bathrooms?parseInt(i.bathrooms):null,building_size:i.building_size||"",land_size:i.land_size||"",parking_spaces:i.parking_spaces?parseInt(i.parking_spaces):null,furnished:i.furnished||"",features:o,images:s,highlights:j(i.highlights_text),seo_keywords:j(i.seo_keywords_text),is_ai_generated:!!i.catalog_template_id,ai_generated_fields:i.catalog_template_id?["title","description","features","highlights","seo_keywords","country","country_code","product_location"]:[],is_active:i.is_active==="on"};let d;if(t?({error:d}=await c.from("showroom_listings").update(r).eq("property_id",t),d&&Y({...r,property_id:t})):(r.property_id=Ee(),{error:d}=await c.from("showroom_listings").insert(r),d&&Y(r)),d&&!/showroom_listings/i.test(d.message||"")){p(d.message,"error");return}p(t?"Property updated!":"Property published!"),M(),$t()};window.editProperty=async function(e){const{data:t,error:a}=await c.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),i=a?ze(e):t;i&&showAddPropertyModal(i)};const Aa=["pending_verification","payment_received","payment_approved","processing","shipped","in_transit","out_for_delivery","delivered","cancelled","rejected"];async function St(){const e=document.getElementById("content");try{const{data:t}=await c.from("payment_receipts").select("*").order("created_at",{ascending:!1}).limit(300),a=t||[],i=["All","Pending","Paid","Processing","Shipped","Delivered","Cancelled"];let s="All";e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Orders Manager</h2>
        <div class="flex gap-2 flex-wrap" id="order-tabs">
          ${i.map(o=>`<button class="tab-btn ${o==="All"?"active":""}" onclick="filterOrders('${o}')">${o}</button>`).join("")}
        </div>
        <div class="flex gap-3">
          <div class="flex-1 relative">
            <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
            <input type="search" class="input-field pl-9" placeholder="Search order, email, name…" oninput="searchOrders(this.value)">
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
                ${a.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-12">No orders yet</td></tr>':a.map(o=>Ea(o)).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._ordersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}function Ea(e){return`<tr class="order-row" data-status="${e.status}" data-search="${n(e.order_number)} ${n(e.full_name)} ${n(e.email)}">
    <td><span class="font-mono text-xs text-blue-400 font-bold">${n(e.order_number||e.id?.slice(0,8))}</span></td>
    <td>
      <p class="text-xs font-bold text-white">${n(e.full_name||"Guest")}</p>
      <p class="text-[10px] text-gray-500">${n(e.email)}</p>
    </td>
    <td><p class="text-xs text-gray-300 truncate max-w-[140px]">${n(e.listing_title||e.listing_id||"—")}</p></td>
    <td class="hidden sm:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(e.amount||0).toLocaleString()}</span></td>
    <td>${_(e.status)}</td>
    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${C(e.created_at)}</span></td>
    <td>
      <button onclick="viewOrder('${e.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="View / Update">
        <i data-lucide="eye" class="w-3.5 h-3.5"></i>
      </button>
    </td>
  </tr>`}window.filterOrders=function(e){document.querySelectorAll("#order-tabs .tab-btn").forEach(t=>t.classList.toggle("active",t.textContent===e)),document.querySelectorAll(".order-row").forEach(t=>{const a=t.dataset.status||"",i=e==="All"||e==="Pending"&&["pending_verification","payment_received","order_placed"].includes(a)||e==="Paid"&&["payment_approved"].includes(a)||e==="Processing"&&["processing"].includes(a)||e==="Shipped"&&["shipped","in_transit","out_for_delivery"].includes(a)||e==="Delivered"&&a==="delivered"||e==="Cancelled"&&["cancelled","rejected"].includes(a);t.style.display=i?"":"none"})};window.searchOrders=function(e){const t=e.toLowerCase();document.querySelectorAll(".order-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewOrder=async function(e){const t=(window._ordersData||[]).find(a=>a.id===e);t&&k(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Order ${n(t.order_number)}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <div class="space-y-3 text-sm">
          <div class="grid grid-cols-2 gap-3">
            ${[["Customer",t.full_name],["Email",t.email],["Phone",t.phone],["Amount",ea(t.amount,t.currency)],["Product",t.listing_title||t.listing_id],["Date",$(t.created_at)]].map(([a,i])=>`<div><p class="text-[10px] text-gray-500 uppercase font-bold mb-0.5">${a}</p><p class="text-xs text-white font-medium">${n(i)||"—"}</p></div>`).join("")}
          </div>
          ${t.transaction_reference?`<div class="p-3 glass-soft border border-blue-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Transaction Reference</p><p class="text-xs font-mono text-blue-300">${n(t.transaction_reference)}</p></div>`:""}
          ${t.additional_notes?`<div class="p-3 glass-soft border border-amber-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Notes</p><p class="text-xs text-gray-300">${n(t.additional_notes)}</p></div>`:""}
          <div>
            <label class="lbl">Update Order Status</label>
            <div class="flex gap-2">
              <select id="order-status-select" class="input-field flex-1">
                ${Aa.map(a=>`<option value="${a}" ${t.status===a?"selected":""}>${a.replace(/_/g," ")}</option>`).join("")}
              </select>
              <button onclick="updateOrderStatus('${t.id}')" class="btn-press px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.updateOrderStatus=async function(e){const t=document.getElementById("order-status-select")?.value;if(!t)return;const{error:a}=await c.from("payment_receipts").update({status:t}).eq("id",e);if(a){p(a.message,"error");return}p("Order status updated"),M(),St()};async function Ca(){const e=document.getElementById("content");try{const{data:t}=await c.from("profiles").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Customers Manager</h2>
          <span class="text-sm text-gray-400 font-medium">${a.length} total</span>
        </div>
        <div class="relative">
          <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
          <input type="search" class="input-field pl-9" placeholder="Search customers…" oninput="searchCustomers(this.value)">
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Customer</th><th class="hidden sm:table-cell">Country</th><th class="hidden md:table-cell">Joined</th><th>Actions</th></tr></thead>
              <tbody id="customers-tbody">
                ${a.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-12">No customers yet</td></tr>':a.map(i=>`<tr class="cust-row" data-search="${n(i.display_name)} ${n(i.user_id)}">
                    <td>
                      <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                          <i data-lucide="user" class="w-4 h-4 text-blue-400"></i>
                        </div>
                        <div>
                          <p class="text-xs font-bold text-white">${n(i.display_name||"Anonymous")}</p>
                          <p class="text-[10px] font-mono text-gray-500">${n(i.user_id?.slice(0,12))}…</p>
                        </div>
                      </div>
                    </td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-300">${n(i.country_code||"—")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${C(i.created_at)}</span></td>
                    <td>
                      <button onclick="viewCustomer('${i.user_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="eye" class="w-3.5 h-3.5"></i></button>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._customersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.searchCustomers=function(e){const t=e.toLowerCase();document.querySelectorAll(".cust-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewCustomer=async function(e){const t=(window._customersData||[]).find(i=>i.user_id===e);if(!t)return;const{data:a}=await c.from("payment_receipts").select("order_number,amount,currency,status,created_at").eq("user_id",e).order("created_at",{ascending:!1}).limit(20);k(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Customer Profile</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <div class="flex items-center gap-4 mb-5 p-4 glass-soft border border-blue-500/15 rounded-xl">
          <div class="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
            <i data-lucide="user" class="w-6 h-6 text-blue-400"></i>
          </div>
          <div>
            <p class="font-black text-white">${n(t.display_name||"Anonymous")}</p>
            <p class="text-xs text-gray-400 mt-0.5">Joined ${C(t.created_at)} · ${n(t.country_code||"Unknown country")}</p>
          </div>
        </div>
        <h4 class="text-xs font-bold text-gray-400 uppercase mb-3">Purchase History</h4>
        ${(a||[]).length===0?'<p class="text-xs text-gray-500 py-4 text-center">No orders yet</p>':(a||[]).map(i=>`<div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
            <div><p class="text-xs font-bold text-white font-mono">${n(i.order_number)}</p><p class="text-[10px] text-gray-500">${$(i.created_at)}</p></div>
            <div class="flex items-center gap-2">${_(i.status)}<span class="text-xs font-bold text-emerald-400">$${parseFloat(i.amount).toLocaleString()}</span></div>
          </div>`).join("")}
      </div>
    </div>`)};async function Re(){const e=document.getElementById("content");try{const{data:t}=await c.from("product_reviews").select("*, showroom_listings(title, property_id)").order("created_at",{ascending:!1}).limit(200),a=t||[],i=a.filter(s=>!s.is_approved).length;e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Reviews Manager</h2>
          ${i>0?`<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">${i} pending</span>`:""}
        </div>
        <div class="flex gap-2">
          <button onclick="filterReviewTab('all')" class="tab-btn active" id="rtab-all">All Reviews</button>
          <button onclick="filterReviewTab('pending')" class="tab-btn" id="rtab-pending">Pending (${i})</button>
          <button onclick="filterReviewTab('approved')" class="tab-btn" id="rtab-approved">Approved</button>
        </div>
        <div class="space-y-3" id="reviews-list">
          ${a.length===0?H("star","No Reviews","Customer reviews will appear here."):a.map(s=>La(s)).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}function La(e){const t=Array.from({length:5},(a,i)=>i<e.rating?"★":"☆").join("");return`<div class="review-card glass-soft border ${e.is_approved?"border-blue-500/15":"border-amber-500/20"} rounded-xl p-4" data-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-amber-400 font-bold text-sm">${t}</span>
          <span class="text-xs text-gray-500">${C(e.created_at)}</span>
          ${e.is_approved?'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>':'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending Approval</span>'}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${n(e.review_text||"—")}</p>
        <p class="text-[11px] text-blue-400 mt-1.5">On: ${n(e.showroom_listings?.title||e.listing_id)}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${e.is_approved?"":`<button onclick="approveReview('${e.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>`}
        <button onclick="deleteReview('${e.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`}window.filterReviewTab=function(e){["all","pending","approved"].forEach(t=>document.getElementById(`rtab-${t}`)?.classList.toggle("active",t===e)),document.querySelectorAll(".review-card").forEach(t=>{const a=e==="all"||e==="pending"&&t.dataset.approved==="false"||e==="approved"&&t.dataset.approved==="true";t.style.display=a?"":"none"})};window.approveReview=async function(e){await c.from("product_reviews").update({is_approved:!0}).eq("id",e),p("Review approved"),Re()};window.deleteReview=async function(e){confirm("Delete this review permanently?")&&(await c.from("product_reviews").delete().eq("id",e),p("Review deleted"),Re())};async function It(){const e=document.getElementById("content");try{const{data:t}=await c.from("support_messages").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Messages & Support</h2>
        <div class="space-y-3">
          ${a.length===0?H("message-circle","No Messages","Customer support messages will appear here."):a.map(i=>`
              <div class="glass-soft border ${i.is_read?"border-blue-500/10":"border-blue-400/30"} rounded-xl p-4 ${i.is_read?"":"ring-1 ring-blue-500/10"}">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs font-black text-white">${n(i.full_name||i.name||"Anonymous")}</span>
                      ${i.is_read?"":'<span class="badge bg-blue-500/15 text-blue-400 border-blue-500/20">New</span>'}
                      <span class="text-[10px] text-gray-500 ml-auto">${$(i.created_at)}</span>
                    </div>
                    <p class="text-[11px] text-blue-400 mb-1">${n(i.email||"—")}</p>
                    <p class="text-xs text-gray-300">${n(i.message||i.body||"—")}</p>
                    ${i.subject?`<p class="text-[11px] text-gray-500 mt-1">Subject: ${n(i.subject)}</p>`:""}
                  </div>
                  <div class="flex gap-1 shrink-0">
                    <button onclick="markMsgRead('${i.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Mark Read"><i data-lucide="check" class="w-4 h-4"></i></button>
                  </div>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.markMsgRead=async function(e){await c.from("support_messages").update({is_read:!0}).eq("id",e),p("Marked as read"),It()};async function re(){const e=document.getElementById("content");try{const{data:t}=await c.from("coupons").select("*").order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
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
                    <td><code class="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">${n(i.code)}</code></td>
                    <td><span class="text-xs text-gray-300">${i.discount_type==="percent"?"Percentage":"Fixed Amount"}</span></td>
                    <td><span class="text-xs font-bold text-emerald-400">${i.discount_type==="percent"?i.discount_value+"%":"$"+i.discount_value}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${i.min_amount?"$"+i.min_amount:"—"}</span></td>
                    <td>${_(i.is_active?"active":"inactive")}</td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${C(i.expires_at)}</span></td>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.showAddCouponModal=function(){k(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Create Coupon</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
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
    </div>`)};window.saveCoupon=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={code:a.code.toUpperCase(),discount_type:a.discount_type,discount_value:parseFloat(a.discount_value),min_amount:a.min_amount?parseFloat(a.min_amount):null,usage_limit:a.usage_limit?parseInt(a.usage_limit):null,expires_at:a.expires_at||null,is_active:!0},{error:s}=await c.from("coupons").insert(i);if(s){p(s.message,"error");return}p("Coupon created!"),M(),re()};window.toggleCoupon=async function(e,t){await c.from("coupons").update({is_active:t}).eq("id",e),p(t?"Coupon activated":"Coupon deactivated"),re()};window.deleteCoupon=async function(e){confirm("Delete this coupon?")&&(await c.from("coupons").delete().eq("id",e),p("Coupon deleted"),re())};async function Ta(){const e=document.getElementById("content");try{const{data:t}=await c.from("notification_log").select("*").order("created_at",{ascending:!1}).limit(100),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Notifications</h2>
        <div class="space-y-2">
          ${a.length===0?H("bell","No Notifications","System notifications will appear here."):a.map(i=>`
              <div class="glass-soft border border-blue-500/10 rounded-xl p-3.5 flex items-start gap-3">
                <div class="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <i data-lucide="bell" class="w-4 h-4 text-blue-400"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-0.5">
                    <span class="text-xs font-bold text-white">${n(i.subject||i.event_type||"Notification")}</span>
                    ${_(i.status)}
                    <span class="text-[10px] text-gray-500 ml-auto">${$(i.created_at)}</span>
                  </div>
                  <p class="text-[11px] text-gray-400">${n(i.recipient||i.order_number)}</p>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}async function de(){const e=document.getElementById("content");try{const{data:t}=await c.from("promotions").select("*").order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Advertisement Manager</h2>
          <button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Promotion
          </button>
        </div>
        <div class="grid gap-3">
          ${a.length===0?H("megaphone","No Promotions","Create banners and promotions to advertise products.",'<button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"><i data-lucide="plus" class="w-4 h-4"></i> Add Promotion</button>'):a.map(i=>`
              <div class="glass-soft border border-blue-500/15 rounded-xl p-4 flex items-center gap-4">
                ${i.image_url?`<img src="${n(i.image_url)}" class="w-20 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" onerror="this.remove()">`:'<div class="w-20 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="megaphone" class="w-6 h-6 text-blue-400"></i></div>'}
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-black text-white">${n(i.title||i.name)}</p>
                  <p class="text-xs text-gray-400 mt-0.5">${n(i.description||"")}</p>
                  <div class="flex items-center gap-2 mt-1.5">${_(i.is_active?"active":"inactive")}<span class="text-[10px] text-gray-500">${C(i.start_date)} → ${C(i.end_date)}</span></div>
                </div>
                <div class="flex gap-1 shrink-0">
                  <button onclick="togglePromo('${i.id}',${!i.is_active})" class="btn-press p-1.5 ${i.is_active?"text-amber-400":"text-emerald-400"} rounded-lg transition"><i data-lucide="${i.is_active?"eye-off":"eye"}" class="w-4 h-4"></i></button>
                  <button onclick="deletePromo('${i.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.showAddAdModal=function(){k(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Add Promotion / Advertisement</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <form id="ad-form" onsubmit="saveAd(event)" class="space-y-4">
          <div><label class="lbl">Title *</label><input class="input-field" name="title" required placeholder="e.g. Summer Sale"></div>
          <div><label class="lbl">Description</label><textarea class="input-field" name="description" rows="2" placeholder="Short description…"></textarea></div>
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Start Date</label><input type="date" class="input-field" name="start_date"></div>
            <div><label class="lbl">End Date</label><input type="date" class="input-field" name="end_date"></div>
          </div>
          <div><label class="lbl">Banner Image URL</label><input class="input-field" name="image_url" placeholder="https://…"></div>
          <div><label class="lbl">Link URL</label><input class="input-field" name="link_url" placeholder="https://…"></div>
          <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/15 rounded-xl">
            <p class="text-xs font-bold text-white">Active</p>
            <label class="toggle-switch"><input type="checkbox" name="is_active" checked><span class="toggle-slider"></span></label>
          </div>
          <button type="submit" class="btn-press w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl text-sm transition">Create Promotion</button>
        </form>
      </div>
    </div>`)};window.saveAd=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={title:a.title,description:a.description||"",start_date:a.start_date||null,end_date:a.end_date||null,image_url:a.image_url||null,link_url:a.link_url||null,is_active:a.is_active==="on",promo_type:"banner"},{error:s}=await c.from("promotions").insert(i);if(s){p(s.message,"error");return}p("Promotion created!"),M(),de()};window.togglePromo=async function(e,t){await c.from("promotions").update({is_active:t}).eq("id",e),p(t?"Promotion activated":"Promotion deactivated"),de()};window.deletePromo=async function(e){confirm("Delete this promotion?")&&(await c.from("promotions").delete().eq("id",e),p("Promotion deleted"),de())};const q=[{id:"gemini",name:"Google Gemini",tag:"FREE",color:"blue",icon:"sparkles",kf:"gemini_key",ph:"AIzaSy…",signup:"https://aistudio.google.com/apikey",models:["gemini-2.0-flash","gemini-1.5-flash","gemini-1.5-pro","gemini-2.5-pro"],mf:"gemini_model",dm:"gemini-2.0-flash",desc:"Google's best free AI. Great for coding, writing apps & websites.",free_tier:"15 req/min · 1M tokens/day — Free forever"},{id:"groq",name:"Groq (Llama 3.3)",tag:"FREE",color:"orange",icon:"zap",kf:"groq_key",ph:"gsk_…",signup:"https://console.groq.com/keys",models:["llama-3.3-70b-versatile","llama-3.1-8b-instant","mixtral-8x7b-32768","gemma2-9b-it"],mf:"groq_model",dm:"llama-3.3-70b-versatile",desc:"Fastest free AI inference. Runs Llama 3.3 & Mixtral. Excellent for coding.",free_tier:"30 req/min · 6,000 req/day free"},{id:"deepseek",name:"DeepSeek Coder",tag:"FREE",color:"cyan",icon:"search",kf:"deepseek_key",ph:"sk-…",signup:"https://platform.deepseek.com/api_keys",models:["deepseek-coder","deepseek-chat","deepseek-reasoner"],mf:"deepseek_model",dm:"deepseek-coder",desc:"Top-ranked coding AI. DeepSeek Coder beats GPT-4 on code benchmarks.",free_tier:"$5 free credit on signup"},{id:"mistral",name:"Mistral / Codestral",tag:"FREE",color:"violet",icon:"wind",kf:"mistral_key",ph:"…key",signup:"https://console.mistral.ai/api-keys",models:["codestral-latest","mistral-small-latest","open-mistral-7b","open-mixtral-8x7b"],mf:"mistral_model",dm:"codestral-latest",desc:"Codestral is purpose-built for code. Free for open-source projects.",free_tier:"Free tier · Codestral free for open-source"},{id:"cohere",name:"Cohere",tag:"FREE",color:"emerald",icon:"cpu",kf:"cohere_key",ph:"…key",signup:"https://dashboard.cohere.com/api-keys",models:["command-r-plus","command-r","command-light"],mf:"cohere_model",dm:"command-r",desc:"Free trial API. Great for chat, code, and text generation.",free_tier:"Free trial · No credit card needed"},{id:"huggingface",name:"Hugging Face",tag:"FREE",color:"amber",icon:"box",kf:"hf_key",ph:"hf_…",signup:"https://huggingface.co/settings/tokens",models:["Qwen/Qwen2.5-Coder-32B-Instruct","meta-llama/Meta-Llama-3-8B-Instruct","mistralai/Mistral-7B-Instruct-v0.3"],mf:"hf_model",dm:"Qwen/Qwen2.5-Coder-32B-Instruct",desc:"500k+ open-source models free. Qwen 2.5 Coder is top-ranked for code.",free_tier:"Free Inference API on open models"},{id:"together",name:"Together AI",tag:"FREE",color:"pink",icon:"users",kf:"together_key",ph:"…key",signup:"https://api.together.ai/settings/api-keys",models:["Qwen/Qwen2.5-Coder-32B-Instruct","meta-llama/Llama-3.3-70B-Instruct-Turbo","deepseek-ai/DeepSeek-V3"],mf:"together_model",dm:"Qwen/Qwen2.5-Coder-32B-Instruct",desc:"$5 free credit. Runs DeepSeek V3 and Qwen 2.5 Coder at high speed.",free_tier:"$5 free credit on signup"},{id:"openrouter",name:"OpenRouter",tag:"FREE",color:"rose",icon:"git-branch",kf:"openrouter_key",ph:"sk-or-…",signup:"https://openrouter.ai/keys",models:["google/gemini-2.0-flash-exp:free","meta-llama/llama-3.3-70b-instruct:free","deepseek/deepseek-chat:free","qwen/qwen-2.5-coder-32b-instruct:free"],mf:"openrouter_model",dm:"google/gemini-2.0-flash-exp:free",desc:'Routes to ALL AI providers. Has 100% free ":free" models including Gemini & Llama.',free_tier:"Many completely FREE models with :free tag"},{id:"cerebras",name:"Cerebras",tag:"FREE",color:"teal",icon:"brain",kf:"cerebras_key",ph:"csk-…",signup:"https://cloud.cerebras.ai/",models:["llama3.3-70b","llama3.1-70b","llama3.1-8b"],mf:"cerebras_model",dm:"llama3.3-70b",desc:"World's fastest AI (2000+ tokens/sec). Free tier with Llama 3.3.",free_tier:"Free tier · 60 req/min"},{id:"fireworks",name:"Fireworks AI",tag:"FREE",color:"red",icon:"flame",kf:"fireworks_key",ph:"fw_…",signup:"https://fireworks.ai/api-keys",models:["accounts/fireworks/models/qwen2p5-coder-32b-instruct","accounts/fireworks/models/llama-v3p3-70b-instruct","accounts/fireworks/models/deepseek-v3"],mf:"fireworks_model",dm:"accounts/fireworks/models/qwen2p5-coder-32b-instruct",desc:"$1 free credit/month. DeepSeek V3, Qwen Coder, Llama 3.3 at ultra-fast speed.",free_tier:"$1 free credit every month"},{id:"github",name:"GitHub Models",tag:"FREE",color:"gray",icon:"github",kf:"github_key",ph:"ghp_…",signup:"https://github.com/marketplace/models",models:["meta-llama/Llama-3.3-70B-Instruct","mistral-ai/Mistral-7B-Instruct-v0.3","openai/gpt-4o","microsoft/Phi-3-mini-4k-instruct"],mf:"github_model",dm:"meta-llama/Llama-3.3-70B-Instruct",desc:"FREE with a GitHub account. Access Llama, Mistral, GPT-4o and Phi via your GitHub token.",free_tier:"Completely FREE with any GitHub account"},{id:"cloudflare",name:"Cloudflare Workers AI",tag:"FREE",color:"orange",icon:"cloud",kf:"cloudflare_key",ph:"…token",signup:"https://dash.cloudflare.com/profile/api-tokens",models:["@cf/meta/llama-3.3-70b-instruct","@cf/deepseek-ai/deepseek-r1-distill-llama-70b","@hf/thebloke/codellama-7b-instruct-awq"],mf:"cloudflare_model",dm:"@cf/meta/llama-3.3-70b-instruct",desc:"FREE 10,000 req/day. Runs Llama, CodeLlama, DeepSeek R1 on Cloudflare's global edge network.",free_tier:"10,000 requests/day FREE forever"},{id:"sambanova",name:"SambaNova Cloud",tag:"FREE",color:"violet",icon:"server",kf:"sambanova_key",ph:"…key",signup:"https://cloud.sambanova.ai/",models:["Meta-Llama-3.3-70B-Instruct","Meta-Llama-3.1-405B-Instruct","Meta-Llama-3.2-3B-Instruct"],mf:"sambanova_model",dm:"Meta-Llama-3.3-70B-Instruct",desc:"FREE fastest Llama 405B inference in the world. Purpose-built AI chips for maximum speed.",free_tier:"Free tier with Llama 3.1 405B"},{id:"hyperbolic",name:"Hyperbolic",tag:"FREE",color:"cyan",icon:"activity",kf:"hyperbolic_key",ph:"…key",signup:"https://app.hyperbolic.xyz/settings",models:["deepseek-ai/DeepSeek-V3","Qwen/Qwen2.5-Coder-32B-Instruct","meta-llama/Llama-3.3-70B-Instruct"],mf:"hyperbolic_model",dm:"Qwen/Qwen2.5-Coder-32B-Instruct",desc:"$10 FREE credit on signup. Run DeepSeek V3 and Qwen 2.5 Coder at competitive speed.",free_tier:"$10 free credit on signup"},{id:"novita",name:"Novita AI",tag:"FREE",color:"emerald",icon:"layers",kf:"novita_key",ph:"…key",signup:"https://novita.ai/settings#key-management",models:["qwen/qwen2.5-coder-32b-instruct","meta-llama/llama-3.3-70b-instruct","deepseek/deepseek-v3"],mf:"novita_model",dm:"qwen/qwen2.5-coder-32b-instruct",desc:"Free credits on signup. Runs Qwen Coder, DeepSeek V3, Llama 3.3 at affordable prices.",free_tier:"Free credits on signup"},{id:"perplexity",name:"Perplexity AI",tag:"FREE",color:"blue",icon:"search-code",kf:"perplexity_key",ph:"pplx-…",signup:"https://www.perplexity.ai/settings/api",models:["llama-3.1-sonar-small-128k-online","llama-3.1-sonar-large-128k-online","llama-3.1-8b-instruct"],mf:"perplexity_model",dm:"llama-3.1-sonar-small-128k-online",desc:"Online AI with real-time web search. Sonar model can search the web to answer coding questions.",free_tier:"Free tier available · $5 starting credit"},{id:"replicate",name:"Replicate",tag:"FREE",color:"amber",icon:"repeat",kf:"replicate_key",ph:"r8_…",signup:"https://replicate.com/account/api-tokens",models:["meta/codellama-70b-instruct","meta/llama-3.3-70b-instruct","deepseek-ai/deepseek-coder-v2"],mf:"replicate_model",dm:"meta/codellama-70b-instruct",desc:"$0.50 free credit. Thousands of open-source AI models including specialized coding models.",free_tier:"$0.50 free credit · No card for many models"},{id:"ai21",name:"AI21 Labs (Jamba)",tag:"FREE",color:"pink",icon:"wand-2",kf:"ai21_key",ph:"…key",signup:"https://studio.ai21.com/account/api-key",models:["jamba-1.5-large","jamba-1.5-mini","j2-ultra","j2-mid"],mf:"ai21_model",dm:"jamba-1.5-mini",desc:"Free tier with Jamba 1.5. Long context (256K tokens) model good for analyzing large codebases.",free_tier:"Free tier · No credit card required"},{id:"lepton",name:"Lepton AI",tag:"FREE",color:"teal",icon:"atom",kf:"lepton_key",ph:"…key",signup:"https://www.lepton.ai/login",models:["llama3-3-70b","deepseek-v3","qwen2-5-coder-32b-instruct","mistral-7b"],mf:"lepton_model",dm:"qwen2-5-coder-32b-instruct",desc:"Free credits. Runs Qwen Coder, DeepSeek V3, Llama 3.3 with fast inference.",free_tier:"Free credits on signup"},{id:"ollama",name:"Ollama (Local)",tag:"FREE",color:"gray",icon:"monitor",kf:"ollama_url",ph:"http://localhost:11434",signup:"https://ollama.ai/download",models:["codellama:13b","qwen2.5-coder:7b","deepseek-coder:6.7b","llama3.3:70b","phi3:mini"],mf:"ollama_model",dm:"qwen2.5-coder:7b",desc:"100% FREE — runs entirely on YOUR computer. No API key needed. No internet. No limits. Install Ollama app.",free_tier:"100% FREE forever — runs locally offline"}],P={border:{blue:"border-blue-500/50",orange:"border-orange-500/50",cyan:"border-cyan-500/50",violet:"border-violet-500/50",emerald:"border-emerald-500/50",amber:"border-amber-500/50",pink:"border-pink-500/50",rose:"border-rose-500/50",teal:"border-teal-500/50",red:"border-red-500/50",gray:"border-gray-500/50"},bg:{blue:"bg-blue-500/8",orange:"bg-orange-500/8",cyan:"bg-cyan-500/8",violet:"bg-violet-500/8",emerald:"bg-emerald-500/8",amber:"bg-amber-500/8",pink:"bg-pink-500/8",rose:"bg-rose-500/8",teal:"bg-teal-500/8",red:"bg-red-500/8",gray:"bg-gray-500/8"},text:{blue:"text-blue-400",orange:"text-orange-400",cyan:"text-cyan-400",violet:"text-violet-400",emerald:"text-emerald-400",amber:"text-amber-400",pink:"text-pink-400",rose:"text-rose-400",teal:"text-teal-400",red:"text-red-400",gray:"text-gray-400"},badge:{blue:"bg-blue-500/15 text-blue-300",orange:"bg-orange-500/15 text-orange-300",cyan:"bg-cyan-500/15 text-cyan-300",violet:"bg-violet-500/15 text-violet-300",emerald:"bg-emerald-500/15 text-emerald-300",amber:"bg-amber-500/15 text-amber-300",pink:"bg-pink-500/15 text-pink-300",rose:"bg-rose-500/15 text-rose-300",teal:"bg-teal-500/15 text-teal-300",red:"bg-red-500/15 text-red-300",gray:"bg-gray-500/15 text-gray-300"}};async function Pt(){const e=document.getElementById("content");try{let l=function(r){const d=i===r.id,u=a[r.kf],b=a[r.mf]||r.dm;return`
        <div class="glass-soft border ${d?P.border[r.color]+" "+P.bg[r.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard" id="apc-${r.id}">
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-8 h-8 ${P.bg[r.color]} rounded-lg flex items-center justify-center shrink-0">
                <i data-lucide="${r.icon}" class="w-4 h-4 ${P.text[r.color]}"></i>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h3 class="text-xs font-black text-white">${n(r.name)}</h3>
                  <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full ${P.badge[r.color]}">${r.tag}</span>
                </div>
                <p class="text-[9px] text-emerald-400 font-bold mt-0.5 leading-tight truncate">${n(r.free_tier)}</p>
              </div>
            </div>
            <label class="flex items-center gap-1 cursor-pointer shrink-0">
              <input type="radio" name="active_provider" value="${r.id}" ${d?"checked":""} class="accent-blue-500" onchange="highlightAI('${r.id}')">
              <span class="text-[9px] font-bold ${d?P.text[r.color]:"text-gray-600"}">USE</span>
            </label>
          </div>
          <p class="text-[11px] text-gray-400 leading-relaxed">${n(r.desc)}</p>
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="lbl mb-0">${r.id==="ollama"?"Ollama Server URL":"API Key"}</label>
              <a href="${r.signup}" target="_blank" rel="noopener" class="text-[10px] font-bold ${P.text[r.color]} hover:underline flex items-center gap-0.5">
                <i data-lucide="external-link" class="w-3 h-3"></i>${r.id==="ollama"?"Install Ollama":"Get Free Key"}
              </a>
            </div>
            <div class="relative">
              <input type="${r.id==="ollama"?"text":"password"}" class="input-field pr-16 text-xs" name="${r.kf}"
                placeholder="${u?"••••"+u.slice(-4):r.ph}">
              ${u?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>'}
            </div>
          </div>
          <div>
            <label class="lbl">Model</label>
            <select class="input-field text-xs" name="${r.mf}">
              ${r.models.map(m=>`<option value="${m}" ${b===m?"selected":""}>${m}</option>`).join("")}
            </select>
          </div>
        </div>`};const{data:t}=await c.from("ai_settings").select("*").limit(1).maybeSingle(),a=t||{},i=a.active_provider||"gemini",s=q.slice(0,10),o=q.slice(10);e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white">AI Settings</h2>
          <div class="flex items-center gap-2">
            <button onclick="showAiStatusModal()" class="btn-press flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition">
              <i data-lucide="activity" class="w-3.5 h-3.5"></i> Live Status & Test
            </button>
            <span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs px-3 py-1">20 Free Providers</span>
          </div>
        </div>

        <div class="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-xs text-emerald-300 flex items-start gap-3">
          <i data-lucide="gift" class="w-5 h-5 shrink-0 text-emerald-400 mt-0.5"></i>
          <div>
            <p class="font-black mb-0.5">All 20 providers have FREE tiers — no payment required to start!</p>
            <p class="text-emerald-400/70">Click "Get Free Key" → sign up on their website → paste key below → Save. Keys are stored securely in your database. Select one as your active provider.</p>
          </div>
        </div>

        <form id="ai-form" onsubmit="saveAiSettings(event)" class="space-y-5">

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4">
            <h3 class="text-sm font-black text-white mb-3 flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-blue-400"></i> Batch 1 — Original 10 Free AI Providers</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">${s.map(l).join("")}</div>
          </div>

          <div class="glass-soft border border-violet-500/15 rounded-2xl p-4">
            <h3 class="text-sm font-black text-white mb-3 flex items-center gap-2"><i data-lucide="plus-circle" class="w-4 h-4 text-violet-400"></i> Batch 2 — 10 More Free AI Providers</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">${o.map(l).join("")}</div>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="sliders" class="w-4 h-4 text-blue-400"></i> Feature Toggles</h3>
            ${[{key:"customer_ai_enabled",label:"Customer AI Chatbot",desc:"Customers can chat with AI on your website",val:a.customer_ai_enabled},{key:"product_ai_enabled",label:"AI Product Creation",desc:"AI auto-fills product descriptions",val:a.product_ai_enabled!==!1},{key:"ai_code_assist",label:"AI Code Assistant",desc:"AI helps build and edit your website code",val:a.ai_code_assist!==!1},{key:"ai_moderation",label:"AI Content Moderation",desc:"Auto-approve/reject customer reviews using AI",val:a.ai_moderation}].map(r=>`
              <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
                <div><p class="text-xs font-bold text-white">${r.label}</p><p class="text-[11px] text-gray-500">${r.desc}</p></div>
                <label class="toggle-switch"><input type="checkbox" name="${r.key}" ${r.val?"checked":""}><span class="toggle-slider"></span></label>
              </div>`).join("")}
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            💾 Save All AI Settings
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.highlightAI=function(e){q.forEach(t=>{const a=document.getElementById("apc-"+t.id);if(!a)return;const i=t.id===e;a.className=`glass-soft border ${i?P.border[t.color]+" "+P.bg[t.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard`;const s=a.querySelector("input[type=radio] + span");s&&(s.className=`text-[9px] font-bold ${i?P.text[t.color]:"text-gray-600"}`)})};window.saveAiSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={active_provider:a.active_provider||"gemini",customer_ai_enabled:a.customer_ai_enabled==="on",product_ai_enabled:a.product_ai_enabled==="on",ai_code_assist:a.ai_code_assist==="on",ai_moderation:a.ai_moderation==="on"};q.forEach(s=>{a[s.mf]&&(i[s.mf]=a[s.mf]);const o=(a[s.kf]||"").trim();o&&!o.startsWith("••••")&&o!==""&&(i[s.kf]=o)}),i.gemini_key&&(i.gemini_api_key=i.gemini_key),i.openai_key&&(i.openai_api_key=i.openai_key);try{const{data:s}=await c.from("ai_settings").select("id").limit(1).maybeSingle();let o;if(s?.id?{error:o}=await c.from("ai_settings").update(i).eq("id",s.id):{error:o}=await c.from("ai_settings").insert(i),o){p("Save failed: "+o.message,"error"),console.error("[AI Save]",o);return}await K.reload(),p("✅ AI settings saved! Keys are active and auto-switch is ON.","success"),setTimeout(()=>Pt(),600)}catch(s){p("Unexpected error: "+s.message,"error"),console.error("[AI Save]",s)}};const ge="kco_ai_cooldowns",Ba=60*1e3,K={_cfg:null,async reload(){const{data:e,error:t}=await c.from("ai_settings").select("*").limit(1).maybeSingle();if(t){console.warn("[aiClient] Could not load settings:",t.message),this._cfg={};return}const a=e||{};!a.openai_key&&a.openai_api_key&&(a.openai_key=a.openai_api_key),!a.gemini_key&&a.gemini_api_key&&(a.gemini_key=a.gemini_api_key),this._cfg=a},async getConfig(){return this._cfg||await this.reload(),this._cfg},async getOrderedProviders(){const e=await this.getConfig(),t=e.active_provider||"gemini",a=this._getCooldowns(),i=Date.now(),s=q.filter(d=>e[d.kf]&&e[d.kf].trim()),o=s.filter(d=>d.id===t),l=s.filter(d=>d.id!==t);return[...o,...l].sort((d,u)=>{const b=(a[d.id]||0)>i?1:0,m=(a[u.id]||0)>i?1:0;return b-m})},_getCooldowns(){try{return JSON.parse(localStorage.getItem(ge)||"{}")}catch{return{}}},_setCooldown(e){const t=this._getCooldowns();t[e]=Date.now()+Ba,localStorage.setItem(ge,JSON.stringify(t))},_clearCooldown(e){const t=this._getCooldowns();delete t[e],localStorage.setItem(ge,JSON.stringify(t))},_buildRequest(e,t,a,i){const s=t[e.kf],o=t[e.mf]||e.dm;switch(e.id){case"gemini":{const l=`https://generativelanguage.googleapis.com/v1beta/models/${o}:generateContent?key=${s}`,r={contents:a.map(d=>({role:d.role==="assistant"?"model":"user",parts:[{text:d.content}]}))};return{url:l,method:"POST",headers:{"Content-Type":"application/json"},body:r,parse:d=>d.candidates?.[0]?.content?.parts?.[0]?.text||""}}case"groq":{const l="https://api.groq.com/openai/v1/chat/completions",r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:r,parse:d=>d.choices?.[0]?.message?.content||""}}case"deepseek":{const l="https://api.deepseek.com/v1/chat/completions",r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:r,parse:d=>d.choices?.[0]?.message?.content||""}}case"mistral":{const l="https://api.mistral.ai/v1/chat/completions",r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:r,parse:d=>d.choices?.[0]?.message?.content||""}}case"cohere":{const l="https://api.cohere.com/v2/chat",r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:r,parse:d=>d.message?.content?.[0]?.text||d.text||""}}case"huggingface":{const l=`https://api-inference.huggingface.co/models/${o}/v1/chat/completions`,r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:r,parse:d=>d.choices?.[0]?.message?.content||""}}case"together":{const l="https://api.together.xyz/v1/chat/completions",r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:r,parse:d=>d.choices?.[0]?.message?.content||""}}case"openrouter":{const l="https://openrouter.ai/api/v1/chat/completions",r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`,"HTTP-Referer":window.location.origin},body:r,parse:d=>d.choices?.[0]?.message?.content||""}}case"cerebras":{const l="https://api.cerebras.ai/v1/chat/completions",r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:r,parse:d=>d.choices?.[0]?.message?.content||""}}case"fireworks":{const l="https://api.fireworks.ai/inference/v1/chat/completions",r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:r,parse:d=>d.choices?.[0]?.message?.content||""}}case"github":{const l="https://models.inference.ai.azure.com/chat/completions",r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:r,parse:d=>d.choices?.[0]?.message?.content||""}}case"cloudflare":{const[l,r]=(s||"").split("|"),d=`https://api.cloudflare.com/client/v4/accounts/${l}/ai/run/${o}`,u={messages:a};return{url:d,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r||s}`},body:u,parse:b=>b.result?.response||""}}case"sambanova":{const l="https://api.sambanova.ai/v1/chat/completions",r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:r,parse:d=>d.choices?.[0]?.message?.content||""}}case"hyperbolic":{const l="https://api.hyperbolic.xyz/v1/chat/completions",r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:r,parse:d=>d.choices?.[0]?.message?.content||""}}case"novita":{const l="https://api.novita.ai/v3/openai/chat/completions",r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:r,parse:d=>d.choices?.[0]?.message?.content||""}}case"perplexity":{const l="https://api.perplexity.ai/chat/completions",r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:r,parse:d=>d.choices?.[0]?.message?.content||""}}case"replicate":{const l="https://openai-compat.replicate.com/v1/chat/completions",r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:r,parse:d=>d.choices?.[0]?.message?.content||""}}case"ai21":{const l="https://api.ai21.com/studio/v1/chat/completions",r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:r,parse:d=>d.choices?.[0]?.message?.content||""}}case"lepton":{const l=`https://${o.replace(/[^a-z0-9-]/g,"")}.lepton.run/api/v1/chat/completions`,r={model:o,messages:a,max_tokens:i};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:r,parse:d=>d.choices?.[0]?.message?.content||""}}case"ollama":return{url:`${(s||"http://localhost:11434").replace(/\/$/,"")}/api/chat`,method:"POST",headers:{"Content-Type":"application/json"},body:{model:o,messages:a,stream:!1},parse:u=>u.message?.content||""};default:return null}},async chat(e,{maxTokens:t=2e3,onProviderSwitch:a=null}={}){const i=await this.getOrderedProviders(),s=await this.getConfig(),o=this._getCooldowns(),l=Date.now();if(i.length===0)throw new Error("No AI providers configured. Go to AI Settings and add at least one API key.");let r=null;for(const d of i){if((o[d.id]||0)>l){const b=Math.ceil(((o[d.id]||0)-l)/1e3);console.log(`[AI] Skipping ${d.name} — rate limited for ${b}s more`);continue}const u=this._buildRequest(d,s,e,t);if(u)try{a&&a(d.name);const b=await fetch(u.url,{method:u.method,headers:u.headers,body:JSON.stringify(u.body),signal:AbortSignal.timeout(3e4)});if(b.status===429||b.status===503){this._setCooldown(d.id),console.warn(`[AI] ${d.name} rate limited (${b.status}), switching to next provider…`),r=new Error(`${d.name} rate limited`);continue}if(!b.ok){const L=await b.text().catch(()=>"");r=new Error(`${d.name} error ${b.status}: ${L.slice(0,100)}`),console.warn(`[AI] ${d.name} failed:`,r.message);continue}const m=await b.json(),g=u.parse(m);if(!g){r=new Error(`${d.name} returned empty response`);continue}return this._clearCooldown(d.id),console.log(`[AI] ✓ Response from ${d.name}`),{text:g,provider:d.name,model:s[d.mf]||d.dm}}catch(b){b.name==="TimeoutError"?(this._setCooldown(d.id),r=new Error(`${d.name} timed out`)):r=b,console.warn(`[AI] ${d.name} exception:`,b.message)}}throw new Error(r?.message||"All AI providers failed or are rate limited. Add more API keys in AI Settings.")},async prompt(e,t={}){return this.chat([{role:"user",content:e}],t)},async getStatus(){const e=await this.getConfig(),t=this._getCooldowns(),a=Date.now();return q.map(i=>({id:i.id,name:i.name,color:i.color,hasKey:!!e[i.kf]?.trim(),isActive:e.active_provider===i.id,cooldownUntil:t[i.id]||0,isCoolingDown:(t[i.id]||0)>a,remainingSec:Math.max(0,Math.ceil(((t[i.id]||0)-a)/1e3))}))}};window.aiClient=K;window.showAiStatusModal=async function(){const e=await K.getStatus(),t=e.filter(a=>a.hasKey);k(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="activity" class="w-5 h-5 text-emerald-400"></i> AI Provider Status</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <div class="mb-4 p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300">
          ${t.length===0?"⚠ No keys configured. Go to AI Settings and add at least one API key.":`${t.length} provider${t.length>1?"s":""} configured. Auto-switch is <strong class="text-emerald-400">ON</strong> — will skip rate-limited providers automatically.`}
        </div>
        <div class="space-y-2">
          ${e.map(a=>`
            <div class="flex items-center gap-3 p-2.5 glass-soft border ${a.hasKey?"border-blue-500/15":"border-gray-800"} rounded-xl opacity-${a.hasKey?"100":"40"}">
              <span class="w-2.5 h-2.5 rounded-full shrink-0 ${a.isCoolingDown?"bg-red-500":a.hasKey?"bg-emerald-400":"bg-gray-600"}"></span>
              <span class="text-xs font-bold text-white flex-1">${n(a.name)}</span>
              ${a.isActive?'<span class="text-[9px] font-black text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-full">ACTIVE</span>':""}
              ${a.hasKey?"":'<span class="text-[9px] text-gray-600">No key</span>'}
              ${a.isCoolingDown?`<span class="text-[9px] text-red-400 font-bold">Rate limited — ${a.remainingSec}s</span>`:""}
              ${a.hasKey&&!a.isCoolingDown?'<span class="text-[9px] text-emerald-400">Ready ✓</span>':""}
            </div>`).join("")}
        </div>
        <div class="mt-4 p-3 bg-gray-900 rounded-xl">
          <p class="text-[10px] text-gray-400 font-bold uppercase mb-2">Test AI Response</p>
          <div class="flex gap-2">
            <input id="ai-test-input" class="input-field flex-1 text-xs" placeholder="Type anything, e.g. 'Write hello world in Python'">
            <button onclick="testAiCall()" class="btn-press px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5">
              <i data-lucide="send" class="w-3.5 h-3.5"></i> Test
            </button>
          </div>
          <div id="ai-test-output" class="hidden mt-3 p-3 bg-gray-950 border border-blue-500/15 rounded-xl text-xs text-gray-200 whitespace-pre-wrap max-h-48 overflow-y-auto"></div>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()};window.testAiCall=async function(){const e=document.getElementById("ai-test-input")?.value?.trim();if(!e)return;const t=document.getElementById("ai-test-output");t.classList.remove("hidden"),t.textContent="⏳ Trying providers…";try{const a=await K.prompt(e,{onProviderSwitch:i=>{t.textContent=`⚡ Using: ${i}…`}});t.textContent=`✓ [${a.provider} · ${a.model}]

${a.text}`}catch(a){t.textContent=`❌ ${a.message}`}};const De=[{id:"flow",name:"Flow"},{id:"veo",name:"Veo"},{id:"luma",name:"Luma"},{id:"runway",name:"Runway"},{id:"pika",name:"Pika"},{id:"kling",name:"Kling"},{id:"hailuo",name:"Hailuo"},{id:"pixverse",name:"PixVerse"},{id:"hedra",name:"Hedra"},{id:"heygen",name:"HeyGen"},{id:"tavus",name:"Tavus"}],Ma=["Product launch","Seasonal sale","Brand awareness","Lead generation","Live stream conversion","Retargeting"];function Fe(e){return Array.isArray(e)?e:[]}function At(e=[]){const t=new Map(Fe(e).map(a=>[a.id,a]));return De.map(a=>{const i=t.get(a.id)||{};return{id:a.id,name:a.name,enabled:!!i.enabled,apiKey:i.apiKey||"",model:i.model||"",baseUrl:i.baseUrl||""}})}async function Et(e){const{data:t}=await c.from("ai_settings").select("id").limit(1).maybeSingle();let a;if(t?.id?{error:a}=await c.from("ai_settings").update(e).eq("id",t.id):{error:a}=await c.from("ai_settings").insert(e),a)throw a}async function Ue(e){const{data:t}=await c.from("ai_settings").select("ai_ad_generation_history").limit(1).maybeSingle(),a=[e,...Fe(t?.ai_ad_generation_history)].slice(0,120);await Et({ai_ad_generation_history:a})}async function Ct(e){try{const{data:i,error:s}=await c.from("site_settings").select("id").limit(1).maybeSingle();if(s)throw s;let o;if(i?.id?{error:o}=await c.from("site_settings").update(e).eq("id",i.id):{error:o}=await c.from("site_settings").insert(e),o)throw o;return}catch{}const t={mode:"ai_ad",startsAt:e.ai_ad_starts_at||null,endsAt:e.ai_ad_ends_at||null,ctaLabel:e.ai_ad_cta_label||"Shop Now",muted:e.ai_ad_muted!==!1},a={is_live:!!e.ai_ad_enabled,badge_text:e.ai_ad_badge||"AI Advertisement",headline:e.ai_ad_title||"",embed_url:e.ai_ad_video_url||"",description:`AI_AD_META:${JSON.stringify(t)}`,stream_status:e.ai_ad_enabled?"ai_ad":"offline",started_at:e.ai_ad_starts_at||null,updated_at:new Date().toISOString()};try{const{data:i}=await c.from("public_live_state").select("id").limit(1).maybeSingle();let s;if(i?.id?{error:s}=await c.from("public_live_state").update(a).eq("id",i.id):{error:s}=await c.from("public_live_state").insert(a),!s)return}catch{}try{localStorage.setItem(Ze,JSON.stringify({ai_ad_enabled:!!e.ai_ad_enabled,ai_ad_video_url:e.ai_ad_video_url||"",ai_ad_badge:e.ai_ad_badge||"AI Advertisement",ai_ad_title:e.ai_ad_title||"",ai_ad_cta_label:e.ai_ad_cta_label||"Shop Now",ai_ad_muted:e.ai_ad_muted!==!1,ai_ad_starts_at:e.ai_ad_starts_at||null,ai_ad_ends_at:e.ai_ad_ends_at||null,ai_ad_duration_seconds:e.ai_ad_duration_seconds||30,ai_ad_updated_at:new Date().toISOString()}))}catch{}}function Ra(e){if(!e||typeof e!="string"||!e.startsWith("AI_AD_META:"))return null;try{return JSON.parse(e.slice(11))}catch{return null}}async function Da(){try{const{data:e,error:t}=await c.from("site_settings").select("*").limit(1).maybeSingle();if(!t&&e)return e}catch{}try{const{data:e,error:t}=await c.from("public_live_state").select("*").limit(1).maybeSingle();if(t||!e)throw new Error("public_live_state unavailable");const a=Ra(e.description),i=a?.startsAt||e.started_at||null,s=a?.endsAt||null;return{ai_ad_enabled:!!e.is_live&&e.stream_status==="ai_ad"&&!!e.embed_url,ai_ad_video_url:e.embed_url||"",ai_ad_badge:e.badge_text||"AI Advertisement",ai_ad_title:e.headline||"",ai_ad_cta_label:a?.ctaLabel||"Shop Now",ai_ad_muted:a?.muted!==!1,ai_ad_starts_at:i,ai_ad_ends_at:s,ai_ad_duration_seconds:s&&i?Math.max(5,Math.round((new Date(s).getTime()-new Date(i).getTime())/1e3)):30}}catch{try{const e=localStorage.getItem(Ze),t=e?JSON.parse(e):null;return t&&typeof t=="object"?t:{}}catch{return{}}}}async function ce(){const e=document.getElementById("content");if(e)try{const[{data:t},a]=await Promise.all([c.from("ai_settings").select("*").limit(1).maybeSingle(),Da()]),i=t||{},s=a||{},o=At(i.ai_ad_video_providers),l=Fe(i.ai_ad_generation_history).sort((d,u)=>new Date(u.created_at||0).getTime()-new Date(d.created_at||0).getTime()).slice(0,12),r=!!s.ai_ad_enabled&&!!s.ai_ad_video_url&&(!s.ai_ad_ends_at||new Date(s.ai_ad_ends_at).getTime()>Date.now());e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div class="flex items-start justify-between flex-wrap gap-3">
          <div>
            <h2 class="text-xl font-black text-white">AI Marketing Studio</h2>
            <p class="text-xs text-gray-500 mt-1">AI Advertisement Generator with live ad-slot takeover and automatic restore when campaign ends.</p>
          </div>
          ${r?'<button onclick="deactivateAiAdvertisement()" class="btn-press bg-red-600/90 hover:bg-red-500 text-white text-xs font-bold px-3 py-2 rounded-xl transition flex items-center gap-1.5"><i data-lucide="square" class="w-3.5 h-3.5"></i>Stop Active AI Ad</button>':'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">No active AI ad</span>'}
        </div>

        <div class="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl text-xs text-blue-200">
          <p class="font-bold mb-1">How this works in real playback</p>
          <p>When an AI campaign is active, the homepage pauses normal carousel ads, plays the AI video, and resumes normal ads after finish or end-time. Video generation happens through your configured providers and keys.</p>
        </div>

        <form id="ai-ad-provider-form" onsubmit="saveAiAdProviders(event)" class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="key-round" class="w-4 h-4 text-blue-400"></i>API Management</h3>
            <button type="submit" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition">Save Provider Keys</button>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
            ${o.map(d=>`
              <div class="glass-soft border border-blue-500/10 rounded-xl p-3 space-y-2">
                <div class="flex items-center justify-between">
                  <p class="text-xs font-bold text-white">${n(d.name)}</p>
                  <label class="flex items-center gap-1.5 text-[11px] text-gray-400">
                    <input type="checkbox" name="provider_${d.id}_enabled" ${d.enabled?"checked":""}>
                    Enabled
                  </label>
                </div>
                <div>
                  <label class="lbl">API Key</label>
                  <input type="password" class="input-field text-xs" name="provider_${d.id}_api_key" placeholder="${d.apiKey?"Saved key - leave blank to keep":"Paste API key"}">
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label class="lbl">Model</label>
                    <input type="text" class="input-field text-xs" name="provider_${d.id}_model" value="${n(d.model)}" placeholder="Optional model name">
                  </div>
                  <div>
                    <label class="lbl">Base URL</label>
                    <input type="url" class="input-field text-xs" name="provider_${d.id}_base_url" value="${n(d.baseUrl)}" placeholder="Optional custom API URL">
                  </div>
                </div>
              </div>`).join("")}
          </div>
        </form>

        <form id="ai-ad-generator-form" onsubmit="activateAiAdvertisement(event)" class="glass-soft border border-violet-500/20 rounded-2xl p-5 space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="clapperboard" class="w-4 h-4 text-violet-400"></i>AI Advertisement Generator</h3>
            <button type="button" onclick="generateAiAdScript()" class="btn-press bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition">Generate Script with AI</button>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div>
              <label class="lbl">Campaign Goal</label>
              <select id="ai-ad-goal" class="input-field text-xs" name="goal">
                ${Ma.map(d=>`<option value="${n(d)}">${n(d)}</option>`).join("")}
              </select>
            </div>
            <div>
              <label class="lbl">Provider Used for Video</label>
              <select id="ai-ad-provider" class="input-field text-xs" name="provider_id">
                ${o.map(d=>`<option value="${d.id}" ${d.enabled?"selected":""}>${n(d.name)}</option>`).join("")}
              </select>
            </div>
          </div>

          <div>
            <label class="lbl">Offer / Brief</label>
            <textarea id="ai-ad-brief" class="input-field text-xs" name="brief" rows="3" placeholder="Describe product, offer, target audience, and style."></textarea>
          </div>

          <div>
            <label class="lbl">Generated Script</label>
            <textarea id="ai-ad-script" class="input-field text-xs" name="script" rows="6" placeholder="Click Generate Script with AI, then edit if needed.">${n(l[0]?.script||"")}</textarea>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div>
              <label class="lbl">AI Video URL</label>
              <input id="ai-ad-video-url" type="url" class="input-field text-xs" name="video_url" placeholder="https://...mp4" value="${n(r&&s.ai_ad_video_url||"")}" required>
            </div>
            <div>
              <label class="lbl">Playback Duration (seconds)</label>
              <input id="ai-ad-duration" type="number" class="input-field text-xs" name="duration_seconds" min="5" max="900" value="${n(String(s.ai_ad_duration_seconds||30))}" required>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div>
              <label class="lbl">Badge</label>
              <input id="ai-ad-badge" type="text" class="input-field text-xs" name="badge" value="${n(s.ai_ad_badge||"AI Advertisement")}" placeholder="AI Advertisement">
            </div>
            <div>
              <label class="lbl">Headline</label>
              <input id="ai-ad-title" type="text" class="input-field text-xs" name="title" value="${n(s.ai_ad_title||"")}" placeholder="Campaign headline">
            </div>
            <div>
              <label class="lbl">CTA Label</label>
              <input id="ai-ad-cta" type="text" class="input-field text-xs" name="cta_label" value="${n(s.ai_ad_cta_label||"Shop Now")}" placeholder="Shop Now">
            </div>
          </div>

          <label class="flex items-center gap-2 text-xs text-gray-400">
            <input type="checkbox" name="muted" ${s.ai_ad_muted!==!1?"checked":""}>
            Play AI ad muted (recommended for autoplay)
          </label>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-bold py-3 rounded-xl text-sm transition">Activate AI Advertisement</button>
        </form>

        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="p-4 border-b border-blue-500/10 flex items-center justify-between">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="history" class="w-4 h-4 text-blue-400"></i>Recent AI Ad Jobs</h3>
            <span class="text-xs text-gray-500">${l.length} entries</span>
          </div>
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Time</th><th>Goal</th><th>Provider</th><th>Status</th><th>Video</th></tr></thead>
              <tbody>
                ${l.length===0?'<tr><td colspan="5" class="text-center text-gray-500 py-8">No AI ad jobs yet.</td></tr>':l.map(d=>`
                    <tr>
                      <td><span class="text-xs text-gray-400">${n($(d.created_at))}</span></td>
                      <td><span class="text-xs text-white">${n(d.goal||"General")}</span></td>
                      <td><span class="text-xs text-gray-300">${n(d.provider_name||d.provider_id||"N/A")}</span></td>
                      <td>${_(d.status||"active")}</td>
                      <td>${d.video_url?`<a href="${d.video_url}" target="_blank" rel="noopener" class="text-xs text-blue-400 hover:underline">Open</a>`:'<span class="text-xs text-gray-600">N/A</span>'}</td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`}}window.saveAiAdProviders=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries());try{const{data:i}=await c.from("ai_settings").select("ai_ad_video_providers").limit(1).maybeSingle(),s=At(i?.ai_ad_video_providers),o=new Map(s.map(r=>[r.id,r])),l=De.map(r=>{const d=r.id,u=o.get(d)||{},b=String(a[`provider_${d}_api_key`]||"").trim();return{id:d,name:r.name,enabled:t.get(`provider_${d}_enabled`)==="on",apiKey:b||u.apiKey||"",model:String(a[`provider_${d}_model`]||"").trim(),baseUrl:String(a[`provider_${d}_base_url`]||"").trim()}});await Et({ai_ad_video_providers:l}),p("AI advertisement provider settings saved.","success"),ce()}catch(i){p("Failed to save providers: "+i.message,"error")}};window.generateAiAdScript=async function(){const e=document.getElementById("ai-ad-brief")?.value?.trim(),t=document.getElementById("ai-ad-goal")?.value||"Product launch",a=document.getElementById("ai-ad-provider"),i=document.getElementById("ai-ad-script");if(!e){p("Enter campaign brief first.","error");return}if(i){i.value="Generating script...";try{const s=["Create a short video advertisement script for an ecommerce marketplace.",`Goal: ${t}`,`Brief: ${e}`,"Return only plain text in this exact structure:","Headline:","Voiceover:","On-screen text:","CTA:"].join(`
`),o=await K.prompt(s,{onProviderSwitch:l=>{i.value=`Generating with ${l}...`}});i.value=o.text||"",await Ue({created_at:new Date().toISOString(),goal:t,brief:e,provider_name:o.provider,provider_id:a?.value||"",status:"script_generated",script:o.text||"",video_url:null}),p(`Script generated with ${o.provider}.`,"success")}catch(s){i.value="",p("Script generation failed: "+s.message,"error")}}};window.activateAiAdvertisement=async function(e){e.preventDefault();const t=new FormData(e.target),a=String(t.get("goal")||"Product launch"),i=String(t.get("provider_id")||""),s=De.find(g=>g.id===i)?.name||i,o=String(t.get("brief")||"").trim(),l=String(t.get("script")||"").trim(),r=String(t.get("video_url")||"").trim(),d=Math.max(5,Math.min(900,parseInt(String(t.get("duration_seconds")||"30"),10)||30)),u=Date.now(),b=new Date(u).toISOString(),m=new Date(u+d*1e3).toISOString();if(!r){p("Video URL is required.","error");return}try{const g={ai_ad_enabled:!0,ai_ad_video_url:r,ai_ad_badge:String(t.get("badge")||"AI Advertisement").trim()||"AI Advertisement",ai_ad_title:String(t.get("title")||"").trim(),ai_ad_cta_label:String(t.get("cta_label")||"Shop Now").trim()||"Shop Now",ai_ad_duration_seconds:d,ai_ad_muted:t.get("muted")==="on",ai_ad_provider_id:i,ai_ad_starts_at:b,ai_ad_ends_at:m,ai_ad_updated_at:new Date().toISOString()};await Ct(g),await Ue({created_at:b,goal:a,brief:o,provider_name:s,provider_id:i,status:"active",script:l,video_url:r,ends_at:m}),p("AI advertisement activated. Homepage will switch to AI video now.","success"),ce()}catch(g){p("Failed to activate AI advertisement: "+g.message,"error")}};window.deactivateAiAdvertisement=async function(){try{await Ct({ai_ad_enabled:!1,ai_ad_updated_at:new Date().toISOString()}),await Ue({created_at:new Date().toISOString(),goal:"Manual stop",provider_name:"Admin",provider_id:"manual",status:"inactive",script:"",video_url:null}),p("AI advertisement stopped.","success"),ce()}catch(e){p("Failed to stop AI advertisement: "+e.message,"error")}};async function Fa(){const e=document.getElementById("content");try{const{data:t}=await c.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Website Content Manager</h2>
        <form id="content-form" onsubmit="saveContent(event)" class="space-y-5">
          ${[{section:"Site Identity",fields:[{key:"site_name",label:"Site Name",type:"text",placeholder:"KCO Global Online Marketplace"},{key:"site_tagline",label:"Tagline / Slogan",type:"text",placeholder:"Premium International Commerce"},{key:"site_description",label:"Site Description (SEO)",type:"textarea",placeholder:"Your trusted global shop…"}]},{section:"Contact Information",fields:[{key:"contact_email",label:"Contact Email",type:"email",placeholder:"support@example.com"},{key:"contact_phone",label:"Contact Phone",type:"tel",placeholder:"+1 234 567 8900"},{key:"contact_address",label:"Business Address",type:"textarea",placeholder:"123 Main St, City, Country"},{key:"whatsapp_number",label:"WhatsApp Number",type:"tel",placeholder:"+1 234 567 8900"}]},{section:"Hero Section",fields:[{key:"hero_headline",label:"Hero Headline",type:"text",placeholder:"Global Online Marketplace"},{key:"hero_subtext",label:"Hero Subtext",type:"textarea",placeholder:"Shop premium products…"},{key:"hero_cta_text",label:"CTA Button Text",type:"text",placeholder:"Shop Now"}]},{section:"Social Media",fields:[{key:"facebook_url",label:"Facebook URL",type:"url",placeholder:"https://facebook.com/…"},{key:"instagram_url",label:"Instagram URL",type:"url",placeholder:"https://instagram.com/…"},{key:"twitter_url",label:"Twitter / X URL",type:"url",placeholder:"https://twitter.com/…"},{key:"youtube_url",label:"YouTube URL",type:"url",placeholder:"https://youtube.com/…"},{key:"tiktok_url",label:"TikTok URL",type:"url",placeholder:"https://tiktok.com/…"}]}].map(i=>`
            <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
              <h3 class="text-sm font-black text-white mb-4">${i.section}</h3>
              <div class="form-grid form-grid-2">
                ${i.fields.map(s=>`
                  <div ${s.type==="textarea"?'class="sm:col-span-2"':""}>
                    <label class="lbl">${s.label}</label>
                    ${s.type==="textarea"?`<textarea class="input-field" name="${s.key}" placeholder="${n(s.placeholder)}" rows="2">${n(a[s.key]||"")}</textarea>`:`<input type="${s.type}" class="input-field" name="${s.key}" value="${n(a[s.key]||"")}" placeholder="${n(s.placeholder)}">`}
                  </div>`).join("")}
              </div>
            </div>`).join("")}
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save Content Settings</button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.saveContent=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),{error:i}=await c.from("site_settings").upsert({id:1,...a});if(i){p(i.message,"error");return}p("Content settings saved!")};async function Ua(){const e=document.getElementById("content");try{const[t,a,i]=await Promise.all([c.from("payment_receipts").select("amount,currency,status,created_at").order("created_at",{ascending:!1}).limit(500),c.from("showroom_listings").select("id,listing_type,category,is_active",{count:"exact"}),c.from("profiles").select("user_id,created_at",{count:"exact"})]),s=t.data||[],o=s.filter(u=>["approved","payment_approved","delivered"].includes(u.status)).reduce((u,b)=>u+(parseFloat(b.amount)||0),0),l=s.length>0?(s.filter(u=>u.status!=="cancelled").length/s.length*100).toFixed(1):0,r={};(a.data||[]).forEach(u=>{r[u.category]=(r[u.category]||0)+1});const d=Object.entries(r).sort((u,b)=>b[1]-u[1]).slice(0,8);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Analytics</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          ${h("Total Revenue",`$${o.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald")}
          ${h("Total Orders",s.length,"shopping-bag","blue")}
          ${h("Customers",i.count||0,"users","violet")}
          ${h("Conversion Rate",l+"%","trending-up","amber")}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="bar-chart-3" class="w-4 h-4 text-blue-400"></i> Revenue (Last 6 Months)</h3>
            <canvas id="analytics-chart" height="220"></canvas>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="pie-chart" class="w-4 h-4 text-violet-400"></i> Top Categories by Listings</h3>
            ${d.length===0?'<p class="text-xs text-gray-500 text-center py-8">No data</p>':d.map(([u,b])=>`
              <div class="flex items-center gap-3 py-1.5">
                <span class="text-xs text-gray-300 flex-1 truncate">${n(u)}</span>
                <div class="w-24 h-2 bg-blue-500/10 rounded-full overflow-hidden"><div class="h-full bg-blue-500 rounded-full" style="width:${Math.round(b/d[0][1]*100)}%"></div></div>
                <span class="text-xs font-bold text-white w-6 text-right">${b}</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),mt(s)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}async function ja(){const e=document.getElementById("content"),{data:t}=await c.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">SEO Manager</h2>
      <form id="seo-form" onsubmit="saveSeo(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Homepage SEO</h3>
          <div><label class="lbl">Meta Title</label><input class="input-field" name="meta_title" value="${n(a.meta_title||"")}" placeholder="KCO Global Online Marketplace | Premium International Commerce"></div>
          <div><label class="lbl">Meta Description</label><textarea class="input-field" name="meta_description" rows="2" placeholder="Your trusted global shop…">${n(a.meta_description||"")}</textarea></div>
          <div><label class="lbl">Meta Keywords (comma separated)</label><input class="input-field" name="meta_keywords" value="${n(a.meta_keywords||"")}" placeholder="global marketplace, online shopping, …"></div>
          <div><label class="lbl">Canonical URL</label><input class="input-field" name="canonical_url" value="${n(a.canonical_url||"")}" placeholder="https://yoursite.com"></div>
          <div><label class="lbl">OG Image URL (Social share image)</label><input class="input-field" name="og_image" value="${n(a.og_image||"")}" placeholder="https://…/og-image.jpg"></div>
          <div><label class="lbl">Google Analytics ID</label><input class="input-field" name="ga_id" value="${n(a.ga_id||"")}" placeholder="G-XXXXXXXXXX"></div>
          <div><label class="lbl">Google Search Console Verification</label><input class="input-field" name="gsc_verify" value="${n(a.gsc_verify||"")}" placeholder="Verification meta tag content"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save SEO Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSeo=async function(e){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());await c.from("site_settings").upsert({id:1,...t}),p("SEO settings saved!")};async function Oa(){const e=document.getElementById("content"),{data:t}=await c.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">Email Settings</h2>
      <div class="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl text-xs text-blue-300">Email is handled by Supabase Auth's built-in SMTP. Configure SMTP in your Supabase project → Auth → SMTP Settings.</div>
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
          <div><label class="lbl">Sender Name</label><input class="input-field" name="email_from_name" value="${n(a.email_from_name||"")}" placeholder="KCO Global Online Marketplace"></div>
          <div><label class="lbl">Reply-To Email</label><input type="email" class="input-field" name="email_reply_to" value="${n(a.email_reply_to||"")}" placeholder="support@example.com"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save Email Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveEmailSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,s]of t.entries())a[i]=s;["email_order_placed","email_order_shipped","email_order_delivered","email_review_request"].forEach(i=>{i in a?a[i]=!0:a[i]=!1}),await c.from("site_settings").upsert({id:1,...a}),p("Email settings saved!")};async function ue(){const e=document.getElementById("content");e&&(e.innerHTML=R());try{const[t,a,i]=await Promise.all([c.from("admin_security_logs").select("*").order("created_at",{ascending:!1}).limit(50),c.from("admin_2fa").select("enabled,backup_codes,created_at").eq("user_id",y.user?.id).maybeSingle(),c.auth.mfa.listFactors()]),s=t.data||[],o=a.data||{},l=(i.data?.totp||[])[0],r=!!l&&l.status==="verified",d=(o.backup_codes||[]).filter(u=>!u.used).length;e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Security</h2>

        <!-- 2FA STATUS BANNER -->
        <div class="p-4 rounded-xl border flex items-center gap-4 ${r?"bg-emerald-500/5 border-emerald-500/20":"bg-amber-500/5 border-amber-500/20"}">
          <div class="w-10 h-10 ${r?"bg-emerald-500/10":"bg-amber-500/10"} rounded-xl flex items-center justify-center shrink-0">
            <i data-lucide="${r?"shield-check":"shield-alert"}" class="w-5 h-5 ${r?"text-emerald-400":"text-amber-400"}"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm font-black ${r?"text-emerald-300":"text-amber-300"}">Two-Factor Authentication is ${r?"ENABLED ✓":"NOT ENABLED"}</p>
            <p class="text-xs text-gray-400 mt-0.5">${r?`Backup codes available: ${d} · Enrolled: ${C(o.created_at)}`:"Enable 2FA to protect your admin account with an authenticator app."}</p>
          </div>
          ${r?'<button onclick="disable2FA()" class="btn-press flex-shrink-0 text-xs font-bold text-red-400 bg-red-500/10 hover:bg-red-500/20 px-3 py-1.5 rounded-xl transition">Disable 2FA</button>':'<button onclick="setup2FAFlow()" class="btn-press flex-shrink-0 text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-1.5 rounded-xl transition"><i data-lucide="shield-plus" class="w-3.5 h-3.5 inline mr-1"></i>Enable 2FA</button>'}
        </div>

        <!-- BACKUP CODES (only if 2FA enabled) -->
        ${r?`
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="key" class="w-4 h-4 text-amber-400"></i> Backup Recovery Codes</h3>
            <button onclick="regenerateBackupCodes()" class="btn-press text-xs font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 px-3 py-1.5 rounded-xl transition">Regenerate</button>
          </div>
          <p class="text-xs text-gray-400 mb-3">Save these codes in a safe place. Use them if you lose access to your authenticator app. Each code works only once.</p>
          <div id="backup-codes-display" class="grid grid-cols-2 gap-2">
            ${(o.backup_codes||[]).length===0?'<p class="text-xs text-gray-500 col-span-2 text-center py-4">No backup codes generated. Click Regenerate to create them.</p>':(o.backup_codes||[]).map(u=>`<code class="font-mono text-xs px-3 py-2 ${u.used?"bg-gray-900 text-gray-600 line-through":"bg-blue-500/5 text-blue-300 border border-blue-500/15"} rounded-lg">${typeof u=="object"?u.code:u}</code>`).join("")}
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
                <p class="text-[11px] text-gray-500">${n(navigator.userAgent.slice(0,60))}…</p>
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
            <span class="text-xs text-gray-500">Last ${s.length} events</span>
          </div>
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Event</th><th>IP Address</th><th class="hidden sm:table-cell">Device</th><th>Date</th></tr></thead>
              <tbody>
                ${s.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No security events yet</td></tr>':s.map(u=>{const b=["login_success","login_2fa_success"].includes(u.event_type),m=["login_failed","login_denied","login_backup_code_used"].includes(u.event_type),g=b?"text-emerald-400":m?"text-red-400":"text-gray-300",L={login_success:"Login ✓",login_failed:"Failed Login ✗",login_denied:"Access Denied ✗",login_2fa_success:"2FA Verified ✓",login_backup_code_used:"Backup Code Used",logout:"Logged Out",logout_all_devices:"Logout All Devices"}[u.event_type]||u.event_type;return`<tr>
                      <td><span class="text-xs font-bold ${g}">${n(L)}</span></td>
                      <td><span class="text-xs font-mono text-gray-300">${n(u.ip_address||"—")}</span></td>
                      <td class="hidden sm:table-cell"><span class="text-xs text-gray-500 max-w-[160px] block truncate">${n((u.user_agent||"—").slice(0,50))}</span></td>
                      <td><span class="text-xs text-gray-500">${$(u.created_at)}</span></td>
                    </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,document.getElementById("new-pw")?.addEventListener("input",u=>{const b=u.target.value,m=[{label:"8+ characters",ok:b.length>=8},{label:"Uppercase letter",ok:/[A-Z]/.test(b)},{label:"Number",ok:/[0-9]/.test(b)},{label:"Special character",ok:/[^a-zA-Z0-9]/.test(b)}];document.getElementById("pw-strength").innerHTML=m.map(g=>`<div class="flex items-center gap-1.5 text-[10px] ${g.ok?"text-emerald-400":"text-gray-600"}">
          <i data-lucide="${g.ok?"check-circle":"circle"}" class="w-3 h-3"></i>${g.label}</div>`).join(""),window.lucide&&lucide.createIcons()}),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.changePassword=async function(e){e.preventDefault();const t=document.getElementById("current-pw").value,a=document.getElementById("new-pw").value,i=document.getElementById("confirm-pw").value;if(a!==i){p("Passwords do not match","error");return}if(a.length<8){p("Password must be at least 8 characters","error");return}const{error:s}=await c.auth.signInWithPassword({email:y.user.email,password:t});if(s){p("Current password is incorrect","error");return}const{error:o}=await c.auth.updateUser({password:a});if(o){p(o.message,"error");return}await A(y.user.id,"password_changed"),p("Password updated successfully!"),e.target.reset(),document.getElementById("pw-strength").innerHTML=""};window.setup2FAFlow=async function(){k(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="shield-plus" class="w-5 h-5 text-emerald-400"></i> Enable Two-Factor Authentication</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <div id="2fa-setup-content">
          <div class="flex items-center justify-center py-8"><i data-lucide="loader-2" class="w-6 h-6 animate-spin text-blue-400"></i></div>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons();try{const{data:e,error:t}=await c.auth.mfa.enroll({factorType:"totp",friendlyName:"KCO Admin"});if(t)throw t;const a=e.totp.qr_code,i=e.totp.secret,s=e.id;document.getElementById("2fa-setup-content").innerHTML=`
      <div class="space-y-5">
        <div class="p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300">
          <strong>Step 1:</strong> Open your authenticator app (Google Authenticator, Authy, or similar).<br>
          <strong>Step 2:</strong> Scan the QR code below or enter the secret manually.<br>
          <strong>Step 3:</strong> Enter the 6-digit code shown in your app.
        </div>
        <div class="flex flex-col items-center gap-4">
          <div class="bg-white p-3 rounded-xl">
            <img src="${n(a)}" alt="QR Code" class="w-44 h-44" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-500 w-44 text-center&quot;>QR code unavailable. Use the secret below.</p>'">
          </div>
          <div class="w-full">
            <label class="lbl">Or enter this secret manually</label>
            <div class="flex gap-2">
              <code class="flex-1 input-field font-mono text-xs text-emerald-300 select-all">${n(i)}</code>
              <button onclick="navigator.clipboard.writeText('${n(i)}').then(()=>showToast('Copied!'))" class="btn-press p-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl transition text-blue-400"><i data-lucide="copy" class="w-4 h-4"></i></button>
            </div>
          </div>
        </div>
        <div>
          <label class="lbl">Enter 6-digit code from app *</label>
          <input type="text" id="setup-totp-code" inputmode="numeric" maxlength="6" class="input-field text-center text-xl font-black tracking-[0.5em] py-3" placeholder="000000" autocomplete="one-time-code">
        </div>
        <div id="setup-2fa-error" class="hidden p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs"></div>
        <button onclick="confirm2FAEnrollment('${n(s)}')" class="btn-press w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2">
          <i data-lucide="shield-check" class="w-4 h-4"></i> Verify & Enable 2FA
        </button>
      </div>`,window.lucide&&lucide.createIcons(),setTimeout(()=>document.getElementById("setup-totp-code")?.focus(),100),document.getElementById("setup-totp-code")?.addEventListener("input",o=>{o.target.value=o.target.value.replace(/\D/g,"").slice(0,6)})}catch(e){document.getElementById("2fa-setup-content").innerHTML=`<div class="text-red-400 text-sm text-center py-4">${n(e.message)}</div>`}};window.confirm2FAEnrollment=async function(e){const t=document.getElementById("setup-totp-code")?.value?.trim(),a=document.getElementById("setup-2fa-error");if(!t||t.length!==6){a&&(a.textContent="Enter the 6-digit code.",a.classList.remove("hidden"));return}try{const{data:i,error:s}=await c.auth.mfa.challenge({factorId:e});if(s)throw s;const{error:o}=await c.auth.mfa.verify({factorId:e,challengeId:i.id,code:t});if(o)throw o;const l=Lt(10);await c.from("admin_2fa").upsert({user_id:y.user.id,enabled:!0,backup_codes:l}),await A(y.user.id,"2fa_enrolled"),M(),Tt(l.map(r=>r.code)),ue()}catch(i){const s=document.getElementById("setup-2fa-error");s&&(s.textContent=i.message?.includes("Invalid")?"Wrong code. Check your app and try again.":i.message,s.classList.remove("hidden")),document.getElementById("setup-totp-code").value="",document.getElementById("setup-totp-code").focus()}};function Lt(e){const t=[];for(let a=0;a<e;a++){const i=Array.from({length:16},()=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random()*32)]).join("");t.push({code:`${i.slice(0,4)}-${i.slice(4,8)}-${i.slice(8,12)}-${i.slice(12,16)}`,used:!1})}return t}function Tt(e){k(`
    <div class="modal-overlay">
      <div class="modal-box">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0"><i data-lucide="key" class="w-5 h-5 text-amber-400"></i></div>
          <div>
            <h3 class="text-base font-black text-white">Save Your Backup Codes</h3>
            <p class="text-xs text-red-400 font-bold">⚠ These will not be shown again!</p>
          </div>
        </div>
        <p class="text-xs text-gray-400 mb-4">Store these codes somewhere safe. If you lose your authenticator, use one of these to log in. Each code works once.</p>
        <div class="grid grid-cols-2 gap-2 mb-5">
          ${e.map(t=>`<code class="font-mono text-xs px-3 py-2 bg-blue-500/5 text-blue-300 border border-blue-500/15 rounded-lg text-center select-all">${n(t)}</code>`).join("")}
        </div>
        <div class="flex gap-3">
          <button onclick="copyBackupCodes([${e.map(t=>`'${t}'`).join(",")}])" class="btn-press flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-xl text-xs transition"><i data-lucide="copy" class="w-4 h-4"></i> Copy All</button>
          <button onclick="downloadBackupCodes([${e.map(t=>`'${t}'`).join(",")}])" class="btn-press flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded-xl text-xs transition"><i data-lucide="download" class="w-4 h-4"></i> Download</button>
          <button onclick="closeModal()" class="btn-press px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-xl text-xs transition">Done</button>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()}window.copyBackupCodes=function(e){navigator.clipboard.writeText(e.join(`
`)).then(()=>p("Backup codes copied!"))};window.downloadBackupCodes=function(e){const t=new Blob([`KCO Admin Backup Codes
Generated: ${new Date().toISOString()}

${e.join(`
`)}

Each code works once. Store securely.`],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download="kco-admin-backup-codes.txt",a.click()};window.regenerateBackupCodes=async function(){if(!confirm("This will invalidate ALL existing backup codes. Continue?"))return;const e=Lt(10);await c.from("admin_2fa").update({backup_codes:e}).eq("user_id",y.user.id),p("New backup codes generated"),Tt(e.map(t=>t.code)),ue()};window.disable2FA=async function(){if(confirm("Disable two-factor authentication? Your account will be less secure."))try{const{data:e}=await c.auth.mfa.listFactors(),t=(e?.totp||[])[0];if(t){const{error:a}=await c.auth.mfa.unenroll({factorId:t.id});if(a)throw a}await c.from("admin_2fa").update({enabled:!1}).eq("user_id",y.user.id),await A(y.user.id,"2fa_disabled"),p("2FA has been disabled"),ue()}catch(e){p(e.message,"error")}};async function qa(){const e=document.getElementById("content");try{const{data:t}=await c.from("admin_activity_logs").select("*").order("created_at",{ascending:!1}).limit(100);e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Activity Logs</h2>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Action</th><th>Entity</th><th class="hidden sm:table-cell">Admin</th><th>Date</th></tr></thead>
              <tbody>
                ${(t||[]).length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No activity yet</td></tr>':(t||[]).map(a=>`<tr>
                    <td><span class="text-xs font-bold text-white">${n(a.action)}</span></td>
                    <td><span class="text-xs text-gray-400">${n(a.entity_type||"—")} <span class="text-gray-600">${n(a.entity_id?.slice(0,8)||"")}</span></span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-blue-400">${n(a.user_email||a.user_id?.slice(0,8)||"—")}</span></td>
                    <td><span class="text-xs text-gray-500">${$(a.created_at)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}async function Na(){const e=document.getElementById("content");try{const{data:t}=await c.from("deployment_history").select("*").order("created_at",{ascending:!1}).limit(20);e.innerHTML=`
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
                <div class="flex-1"><p class="text-xs font-bold text-white">${n(a.version||a.id?.slice(0,8))}</p><p class="text-[10px] text-gray-500">${$(a.created_at)}</p></div>
                ${_(a.status||"completed")}
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.exportProducts=async function(){const{data:e}=await c.from("showroom_listings").select("*"),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download=`kco-products-${new Date().toISOString().slice(0,10)}.json`,a.click(),p("Products exported!")};window.exportOrders=async function(){const{data:e}=await c.from("payment_receipts").select("*").order("created_at",{ascending:!1});if(!e||!e.length){p("No orders to export","info");return}const t=Object.keys(e[0]).join(","),a=e.map(o=>Object.values(o).map(l=>`"${String(l||"").replace(/"/g,'""')}"`).join(",")).join(`
`),i=new Blob([t+`
`+a],{type:"text/csv"}),s=document.createElement("a");s.href=URL.createObjectURL(i),s.download=`kco-orders-${new Date().toISOString().slice(0,10)}.csv`,s.click(),p("Orders exported!")};async function Ha(){const e=document.getElementById("content"),{data:t}=await c.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
            <div><label class="lbl">Timezone</label><input class="input-field" name="timezone" value="${n(a.timezone||"UTC")}" placeholder="UTC"></div>
            <div><label class="lbl">Low Stock Threshold</label><input type="number" class="input-field" name="low_stock_threshold" value="${n(a.low_stock_threshold||10)}" min="1"></div>
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
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,s]of t.entries())a[i]=s;["maintenance_mode","reviews_enabled","wishlist_enabled","guest_checkout"].forEach(i=>{a[i]=i in a}),await c.from("site_settings").upsert({id:1,...a}),p("Settings saved!")};async function pe(){const e=document.getElementById("content");e&&(e.innerHTML=R());try{const{data:t}=await c.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{},i=a.homepage_banner_image||"",s=a.homepage_banner_alt||"Homepage header banner",o=i?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.";e.innerHTML=`
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
                ${i?`<img id="homepage-banner-preview-img" src="${n(i)}" alt="${n(s)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-off" class="mx-auto w-8 h-8 text-gray-500"></i><p class="mt-2 text-xs font-semibold text-gray-500">No banner selected</p></div></div>'}
              </div>
            </div>
            <div class="px-4 py-3 border-t border-white/5 bg-[#0b1020] flex items-center gap-2 text-[11px] text-gray-400">
              <i data-lucide="crop" class="w-3.5 h-3.5 text-blue-400"></i>
              <span>Crop / resize is previewed in a fixed banner frame. Wide images work best.</span>
            </div>
          </div>
          <p id="homepage-banner-preview-note" class="text-[10px] text-gray-500">${n(o)}</p>
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
              <span id="homepage-banner-msg">Uploading…</span>
            </div>

            <div class="grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
              <div class="space-y-3">
                <div class="group relative overflow-hidden rounded-2xl border border-dashed border-blue-500/25 bg-[#0b1020] transition hover:border-blue-500/50">
                  <div class="p-3 sm:p-4">
                    <div class="overflow-hidden rounded-xl border border-white/10 bg-[#111827]" style="aspect-ratio: 1600 / 320;">
                      ${i?`<img id="homepage-banner-image" src="${n(i)}" alt="${n(s)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-plus" class="mx-auto w-8 h-8 text-blue-400"></i><p class="mt-2 text-xs font-semibold text-gray-400">Upload a homepage banner</p></div></div>'}
                    </div>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <button type="button" onclick="triggerImgUpload('homepage_banner_image')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">${i?"Replace Image":"Upload Image"}</button>
                      <button type="button" onclick="clearHomepageBannerImg()" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove Image</button>
                      <button type="button" onclick="restoreHomepageBannerDefault()" class="text-xs font-bold text-white bg-slate-700 px-3 py-1.5 rounded-lg">Restore Default</button>
                    </div>
                  </div>
                </div>
                <input type="file" id="file-homepage_banner_image" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'homepage_banner_image')">
                <input type="hidden" name="homepage_banner_image" id="val-homepage_banner_image" value="${n(i)}">
                <input type="text" id="url-homepage_banner_image" value="${n(i)}" placeholder="Or paste image URL" oninput="document.getElementById('val-homepage_banner_image').value=this.value;updateHomepageBannerPreview()" class="input-field text-xs">
                <p class="text-[10px] text-gray-500">Use a wide image for the cleanest banner. The homepage frame will crop/resize it automatically.</p>
              </div>

              <div class="space-y-3">
                <div>
                  <label class="lbl">Banner Alt Text</label>
                  <textarea class="input-field" id="homepage_banner_alt" name="homepage_banner_alt" rows="4" placeholder="Accessible description for the banner image">${n(s)}</textarea>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}async function be(){const e=document.getElementById("content");e&&(e.innerHTML=R());try{let l=function(r,d,u,b="",m="blue"){const g=!!(u&&u.trim());return`
        <div class="glass-soft border border-${m}-500/15 rounded-xl p-4 space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-xs font-black text-white">${n(r)}</p>
            ${g?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">✓ Uploaded</span>':'<span class="text-[9px] text-gray-600">Empty</span>'}
          </div>
          ${g?`<div class="relative group w-full h-24 rounded-xl overflow-hidden bg-gray-900 border border-blue-500/10 flex items-center justify-center">
                <img src="${n(u)}" alt="${n(r)}" class="max-h-20 max-w-full object-contain p-2" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-600 text-center&quot;>Image broken</p>'">
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                  <button type="button" onclick="triggerImgUpload('${d}')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">Replace</button>
                  <button type="button" onclick="clearBrandImg('${d}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
                </div>
               </div>`:`<div class="w-full h-24 rounded-xl border-2 border-dashed border-${m}-500/25 hover:border-${m}-500/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition" onclick="triggerImgUpload('${d}')">
                <i data-lucide="image-plus" class="w-7 h-7 text-${m}-400"></i>
                <p class="text-[11px] text-gray-500">Click to upload</p>
               </div>`}
          ${b?`<p class="text-[10px] text-gray-500">${n(b)}</p>`:""}
          <input type="file" id="file-${d}" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'${d}')">
          <input type="hidden" name="${d}" id="val-${d}" value="${n(u||"")}">
          <div class="flex gap-2">
            <input class="input-field text-xs flex-1 ${g?"":"hidden"}" id="url-${d}" value="${n(u||"")}" placeholder="Or paste image URL" oninput="document.getElementById('val-${d}').value=this.value;updateLivePreview()">
            <button type="button" onclick="document.getElementById('url-${d}').classList.toggle('hidden')" class="text-[10px] text-${m}-400 hover:text-${m}-300 transition shrink-0">${g?"Edit URL":"Paste URL"}</button>
          </div>
        </div>`};const{data:t}=await c.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{},i=a.brand_name||a.site_name||et,s=a.brand_slogan||a.site_tagline||tt,o=a.brand_logo||a.brand_header_logo||"";e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white flex items-center gap-2"><i data-lucide="palette" class="w-5 h-5 text-blue-400"></i> Brand Manager</h2>
          <div class="flex items-center gap-2">
            <button type="button" onclick="toggleLivePreview()" class="btn-press flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> Live Preview
            </button>
          </div>
        </div>

        <!-- ── LIVE PREVIEW PANEL ── -->
        <div id="live-preview-panel" class="hidden glass-soft border border-violet-500/20 rounded-2xl p-5 space-y-3">
          <h3 class="text-xs font-black text-violet-300 uppercase tracking-wider flex items-center gap-2"><i data-lucide="eye" class="w-3.5 h-3.5"></i> Live Preview — updates as you type</h3>
          <!-- Header preview -->
          <div class="rounded-xl overflow-hidden border border-blue-500/10">
            <div id="preview-header" class="flex items-center gap-3 px-4 py-3" style="background:#0f172a">
              <div id="preview-logo-wrap" class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style="background:var(--preview-primary,#f97316)">
                ${o?`<img src="${n(o)}" alt="${n(i)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
              </div>
              <div>
                <p id="preview-name" class="text-sm font-black text-white leading-none">${n(i)}</p>
                <p id="preview-slogan" class="text-[10px] text-orange-400 font-semibold mt-0.5">${n(s)}</p>
              </div>
              <div id="preview-badge-wrap" class="ml-auto ${a.brand_badge?"":"hidden"}">
                <img id="preview-badge" src="${n(a.brand_badge||"")}" alt="Verified" class="w-6 h-6 object-contain">
              </div>
            </div>
            <div class="px-4 py-2 border-t border-gray-800 text-[11px] text-gray-500" style="background:#070b16">
              <span id="preview-btn" style="background:${n(a.brand_primary_color||"#f97316")};color:#000;padding:4px 12px;border-radius:8px;font-weight:700;font-size:11px">Shop Now</span>
              <span class="ml-3" style="color:${n(a.brand_secondary_color||"#3b82f6")}">All Products →</span>
            </div>
          </div>
          <!-- Footer preview -->
          <div id="preview-footer" class="rounded-xl px-4 py-3 border border-gray-800 flex items-center gap-3" style="background:#0f172a">
            <div id="preview-footer-logo-wrap" class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style="background:var(--preview-primary,#f97316)">
              ${o?`<img src="${n(o)}" alt="${n(i)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
            </div>
            <div>
              <p id="preview-footer-name" class="text-xs font-black text-white">${n(i)}</p>
              <p id="preview-footer-slogan" class="text-[10px] text-gray-500">${n(s)}</p>
            </div>
            <p class="ml-auto text-[10px] text-gray-600">© 2026 <span id="preview-copy-name">${n(i)}</span></p>
          </div>
          <p class="text-[10px] text-gray-500">This is how your brand will appear on every page. Click Save to apply everywhere.</p>
        </div>

        <form id="brand-form" onsubmit="saveBrandSettings(event)" class="space-y-5">

          <!-- ── Brand Identity ── -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="type" class="w-4 h-4 text-blue-400"></i> Brand Identity</h3>
            <div class="form-grid form-grid-2">
              <div>
                <label class="lbl">Brand Name *</label>
                <input class="input-field" name="brand_name" id="inp-brand-name" value="${n(i)}" placeholder="Your brand name" required oninput="updateLivePreview()">
              </div>
              <div>
                <label class="lbl">Short Name</label>
                <input class="input-field" name="brand_short_name" value="${n(a.brand_short_name||"")}" placeholder="e.g. Weverse">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Slogan / Tagline *</label>
                <input class="input-field" name="brand_slogan" id="inp-brand-slogan" value="${n(s)}" placeholder="e.g. Shop Globally, Delivered Worldwide" oninput="updateLivePreview()">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Brand Description</label>
                <textarea class="input-field" name="brand_description" rows="2" placeholder="Short description…">${n(a.brand_description||"")}</textarea>
              </div>
            </div>
          </div>

          <!-- ── Brand Colors ── -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="palette" class="w-4 h-4 text-violet-400"></i> Brand Colors</h3>
            <div class="form-grid form-grid-2">
              <div>
                <label class="lbl">Primary Color (buttons, accents)</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-primary" value="${n(a.brand_primary_color||"#f97316")}" oninput="document.getElementById('ct-primary').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-primary" name="brand_primary_color" value="${n(a.brand_primary_color||"#f97316")}" placeholder="#f97316" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-primary').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Secondary Color (links, highlights)</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-secondary" value="${n(a.brand_secondary_color||"#3b82f6")}" oninput="document.getElementById('ct-secondary').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-secondary" name="brand_secondary_color" value="${n(a.brand_secondary_color||"#3b82f6")}" placeholder="#3b82f6" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-secondary').value=this.value;updateLivePreview()">
                </div>
              </div>
            </div>
          </div>

          <!-- ── Brand Font ── -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="type" class="w-4 h-4 text-amber-400"></i> Brand Font</h3>
            <div class="form-grid form-grid-2">
              <div>
                <label class="lbl">Font Family</label>
                <select class="input-field" name="brand_font" id="brand-font-select" onchange="previewFont(this.value)">
                  ${["Inter","Poppins","Roboto","Montserrat","Nunito","Raleway","Lato","Open Sans","Outfit","Plus Jakarta Sans","DM Sans","Urbanist","Sora","Manrope","Work Sans","Space Grotesk"].map(r=>`<option value="${r}" ${(a.brand_font||"Inter")===r?"selected":""}>${r}</option>`).join("")}
                </select>
              </div>
              <div>
                <label class="lbl">Custom Google Font (overrides above)</label>
                <input class="input-field" name="brand_custom_font" value="${n(a.brand_custom_font||"")}" placeholder="e.g. Space Grotesk">
              </div>
            </div>
            <div id="font-preview" class="p-3 rounded-xl bg-gray-900 border border-blue-500/10">
              <p id="font-sample" class="text-sm text-white font-bold" style="font-family:'${n(a.brand_font||"Inter")}',sans-serif">The quick brown fox jumps — 0123456789 · Weverse Online Shop</p>
            </div>
          </div>

          <!-- ── Logo & Verified Badge ── -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="image" class="w-4 h-4 text-emerald-400"></i> Logos & Verified Badge</h3>
              <p class="text-[10px] text-gray-500">PNG, SVG, WebP</p>
            </div>
            <div id="brand-upload-status" class="hidden p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300 flex items-center gap-2">
              <i data-lucide="loader-2" class="w-4 h-4 animate-spin shrink-0"></i>
              <span id="brand-upload-msg">Uploading…</span>
            </div>

            <!-- Verified Badge — highlighted at top -->
            <div class="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl space-y-3">
              <div class="flex items-center gap-2 mb-1">
                <i data-lucide="badge-check" class="w-4 h-4 text-blue-400"></i>
                <p class="text-xs font-black text-white">Verified Badge</p>
                <span class="text-[9px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-full font-bold">Shows next to your brand name</span>
              </div>
              ${l("Verification Badge Image","brand_badge",a.brand_badge,"Upload your blue checkmark or any verification badge. Recommended: 64×64px PNG with transparent background.","blue")}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              ${l("Brand Logo / Banner Image","brand_logo",o,"Upload your image here. This changes only the logo/banner image and keeps the other brand fields as they are.")}
              ${l("Favicon / Tab Icon","brand_favicon",a.brand_favicon,"Browser tab icon. 32×32 or 64×64px.")}
              ${l("Mobile Logo","brand_mobile_logo",a.brand_mobile_logo,"Smaller logo for phones. 120×40px.")}
              ${l("Header Logo","brand_header_logo",a.brand_header_logo,"Top navigation bar.")}
              ${l("Footer Logo","brand_footer_logo",a.brand_footer_logo,"Website footer.")}
              ${l("Login Page Logo","brand_login_logo",a.brand_login_logo,"Shown on auth/login page.")}
              ${l("Admin Dashboard Logo","brand_admin_logo",a.brand_admin_logo,"Admin sidebar header.")}
              ${l("OG / Social Image","brand_og_image",a.brand_og_image,"1200×630px — shown when sharing links.")}
            </div>
          </div>

          <!-- ── Contact ── -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="globe" class="w-4 h-4 text-blue-400"></i> Website & Contact</h3>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Website URL</label><input class="input-field" name="brand_website_url" value="${n(a.brand_website_url||a.production_url||"https://weverseonlineshop.com")}" placeholder="https://…"></div>
              <div><label class="lbl">Support Email</label><input type="email" class="input-field" name="brand_email" value="${n(a.brand_email||a.contact_email||"")}" placeholder="support@…"></div>
              <div><label class="lbl">Phone / WhatsApp</label><input class="input-field" name="brand_phone" value="${n(a.brand_phone||a.contact_phone||"")}" placeholder="+1 234…"></div>
              <div><label class="lbl">Business Address</label><input class="input-field" name="brand_address" value="${n(a.brand_address||a.contact_address||"")}" placeholder="City, Country"></div>
            </div>
          </div>

          <div class="p-4 bg-blue-500/5 border border-blue-500/15 rounded-xl text-xs text-blue-300 flex items-start gap-3">
            <i data-lucide="info" class="w-4 h-4 shrink-0 mt-0.5 text-blue-400"></i>
            <p>After saving, your brand name, logo image, slogan, and verified badge will automatically appear on <strong>every page</strong> — Header, Footer, Login, Checkout, Contact, Admin, and all future pages. Uploading the image does not change your other brand settings.</p>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2">
            <i data-lucide="save" class="w-4 h-4"></i> Save Brand & Apply to All Pages
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.toggleLivePreview=function(){document.getElementById("live-preview-panel")?.classList.toggle("hidden"),updateLivePreview()};window.updateLivePreview=function(){const e=document.getElementById("live-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("inp-brand-name")?.value||et,a=document.getElementById("inp-brand-slogan")?.value||tt,i=document.getElementById("ct-primary")?.value||"#f97316",s=document.getElementById("ct-secondary")?.value||"#3b82f6",o=document.getElementById("val-brand_logo")?.value||DEFAULT_BRAND_LOGO,l=document.getElementById("val-brand_badge")?.value||"";["preview-name","preview-footer-name","preview-copy-name"].forEach(m=>{const g=document.getElementById(m);g&&(g.textContent=t)}),["preview-slogan","preview-footer-slogan"].forEach(m=>{const g=document.getElementById(m);g&&(g.textContent=a)});const r=document.getElementById("preview-btn");r&&(r.style.background=i);const d=e.querySelector('[style*="color:"]');d&&(d.style.color=s),["preview-logo-wrap","preview-footer-logo-wrap"].forEach(m=>{const g=document.getElementById(m);g&&(o?(g.innerHTML=`<img src="${o}" alt="${t}" class="w-full h-full object-contain p-1">`,g.style.background="transparent"):(g.innerHTML='<i data-lucide="globe" class="w-4 h-4 text-white"></i>',g.style.background=i,window.lucide&&lucide.createIcons()))});const u=document.getElementById("preview-badge-wrap"),b=document.getElementById("preview-badge");u&&b&&(l?(b.src=l,u.classList.remove("hidden")):u.classList.add("hidden"))};window.triggerImgUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearBrandImg=function(e){document.getElementById("val-"+e).value="";const t=document.getElementById("url-"+e);t&&(t.value=""),(e&&e.startsWith("homepage_")?pe:be)()};window.clearHomepageBannerImg=function(){const e=document.getElementById("val-homepage_banner_image"),t=document.getElementById("url-homepage_banner_image"),a=document.getElementById("homepage_banner_alt");e&&(e.value=""),t&&(t.value=""),a&&(a.value=""),pe()};window.restoreHomepageBannerDefault=function(){window.clearHomepageBannerImg()};window.syncColor=function(e,t){const a=document.getElementById("color-"+e);a&&/^#[0-9a-fA-F]{6}$/.test(t)&&(a.value=t)};window.previewFont=function(e){const t=document.getElementById("font-sample");t&&(t.style.fontFamily=`'${e}', sans-serif`);const a="gf-preview";let i=document.getElementById(a);i||(i=document.createElement("link"),i.id=a,i.rel="stylesheet",document.head.appendChild(i)),i.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(e)}:wght@400;700;900&display=swap`};const _e="weverse_brand_v1",ke="weverse_brand_override_v1";function $e(){try{const e=JSON.parse(localStorage.getItem(ke)||"null");if(e&&typeof e=="object")return e}catch{}try{const e=JSON.parse(localStorage.getItem(_e)||"null");if(e&&typeof e=="object")return e.data&&typeof e.data=="object"?e.data:e}catch{}return{}}function te(e){const t={...$e(),...e};try{localStorage.setItem(ke,JSON.stringify(t))}catch{}try{localStorage.setItem(_e,JSON.stringify({ts:Date.now(),data:t}))}catch{}return window.dispatchEvent(new StorageEvent("storage",{key:ke})),window.dispatchEvent(new StorageEvent("storage",{key:_e})),window.dispatchEvent(new CustomEvent("brand-updated",{detail:t})),t}window.handleBrandImgUpload=async function(e,t){const a=e.target.files?.[0];if(!a)return;const i=t&&t.startsWith("homepage_"),s=document.getElementById(i?"homepage-banner-status":"brand-upload-status"),o=document.getElementById(i?"homepage-banner-msg":"brand-upload-msg");s&&s.classList.remove("hidden"),o&&(o.textContent=`Uploading ${a.name}…`);try{const l=a.name.split(".").pop(),r=`brand/${t}-${Date.now()}.${l}`,{error:d}=await c.storage.from("product-images").upload(r,a,{contentType:a.type,upsert:!0});let u;if(d)u=URL.createObjectURL(a),o&&(o.textContent=`Preview only (storage: ${d.message})`);else{const{data:g}=c.storage.from("product-images").getPublicUrl(r);u=g.publicUrl,o&&(o.textContent=`✓ ${a.name} uploaded`)}const b=document.getElementById("val-"+t),m=document.getElementById("url-"+t);b&&(b.value=u),m&&(m.value=u,m.classList.remove("hidden")),i?updateHomepageBannerPreview():(updateLivePreview(),setTimeout(()=>be(),1e3))}catch(l){o&&(o.textContent=`Upload failed: ${l.message}`)}setTimeout(()=>s?.classList.add("hidden"),4e3)};window.saveBrandSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[r,d]of t.entries())r.endsWith("_url")||(a[r]=d);a.brand_name&&(a.site_name=a.brand_name),a.brand_slogan&&(a.site_tagline=a.brand_slogan),a.brand_description&&(a.site_description=a.brand_description),a.brand_email&&(a.contact_email=a.brand_email),a.brand_phone&&(a.contact_phone=a.brand_phone),a.brand_address&&(a.contact_address=a.brand_address),a.brand_website_url&&(a.production_url=a.brand_website_url);const i=a.brand_custom_font||a.brand_font;i&&previewFont(i);const s=e.target.querySelector("[type=submit]");s&&(s.disabled=!0,s.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Saving…',window.lucide&&lucide.createIcons());const{data:o}=await c.from("site_settings").select("id").limit(1).maybeSingle();let l;o?.id?{error:l}=await c.from("site_settings").update(a).eq("id",o.id):{error:l}=await c.from("site_settings").insert(a),l?(te(a),p("Brand saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(te(a),p("✅ Brand saved! All pages will now show your updated brand.","success")),setTimeout(()=>be(),500)};window.toggleHomepageBannerPreview=function(){document.getElementById("homepage-banner-preview-panel")?.classList.toggle("hidden"),updateHomepageBannerPreview()};window.updateHomepageBannerPreview=function(){const e=document.getElementById("homepage-banner-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("val-homepage_banner_image")?.value||"",a=document.getElementById("homepage_banner_alt")?.value||"Homepage header banner",i=document.getElementById("homepage-banner-image"),s=document.getElementById("homepage-banner-preview-img");[i,s].forEach(l=>{l&&(t?(l.src=t,l.alt=a,l.classList.remove("hidden")):l.classList.add("hidden"))});const o=document.getElementById("homepage-banner-preview-note");o&&(o.textContent=t?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.")};window.saveHomepageBranding=async function(e){e.preventDefault();const t={homepage_banner_image:document.getElementById("url-homepage_banner_image")?.value||"",homepage_banner_alt:document.getElementById("homepage_banner_alt")?.value||"Homepage header banner"},a=e.target.querySelector("[type=submit]");a&&(a.disabled=!0,a.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishing…',window.lucide&&lucide.createIcons());const{data:i}=await c.from("site_settings").select("id").limit(1).maybeSingle();let s;i?.id?{error:s}=await c.from("site_settings").update(t).eq("id",i.id):{error:s}=await c.from("site_settings").insert(t),s?(te({...$e(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),p("Homepage banner saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(te({...$e(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),p("Homepage banner published.","success")),setTimeout(()=>pe(),500)};window._manualPaymentAccounts=[];function je(e="USD"){return{id:`bank-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,currency:e,currencyName:e,flag:Ke("US"),country:"United States",country_code:"US",bankName:"",transferType:"Local & International",beneficiary:"",accountNumber:"",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:""}}function Oe(){const e=document.getElementById("manual-payment-accounts-json");e&&(e.value=JSON.stringify(window._manualPaymentAccounts||[]))}function Ga(e,t){const a=e.country_code||"US";return`
    <div class="p-4 glass-soft border border-blue-500/10 rounded-xl space-y-3">
      <div class="flex items-center justify-between gap-3">
        <h4 class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="building-2" class="w-3.5 h-3.5 text-blue-400"></i> Bank Account ${t+1}</h4>
        <button type="button" onclick="removeManualPaymentAccount(${t})" class="text-[11px] font-bold text-red-400 hover:text-red-300 transition">Remove</button>
      </div>
      <div class="form-grid form-grid-2">
        <div><label class="lbl">Currency *</label><select class="input-field" onchange="updateManualPaymentAccount(${t}, 'currency', this.value)">${at.map(i=>`<option value="${i}" ${e.currency===i?"selected":""}>${i}</option>`).join("")}</select></div>
        <div><label class="lbl">Country *</label><select class="input-field" onchange="updateManualPaymentCountry(${t}, this.value)">${vt(a)}</select></div>
        <div><label class="lbl">Beneficiary / Account Name *</label><input class="input-field" value="${n(e.beneficiary||"")}" placeholder="Full name on account" oninput="updateManualPaymentAccount(${t}, 'beneficiary', this.value)"></div>
        <div><label class="lbl">Bank Name *</label><input class="input-field" value="${n(e.bankName||"")}" placeholder="e.g. Citibank" oninput="updateManualPaymentAccount(${t}, 'bankName', this.value)"></div>
        <div><label class="lbl">Account Number</label><input class="input-field font-mono" value="${n(e.accountNumber||"")}" placeholder="Account number" oninput="updateManualPaymentAccount(${t}, 'accountNumber', this.value)"></div>
        <div><label class="lbl">Transfer Type</label><input class="input-field" value="${n(e.transferType||"")}" placeholder="Local & International" oninput="updateManualPaymentAccount(${t}, 'transferType', this.value)"></div>
        <div><label class="lbl">Account Type</label><input class="input-field" value="${n(e.accountType||"")}" placeholder="Checking, Savings..." oninput="updateManualPaymentAccount(${t}, 'accountType', this.value)"></div>
        <div><label class="lbl">IBAN</label><input class="input-field font-mono" value="${n(e.iban||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'iban', this.value)"></div>
        <div><label class="lbl">SWIFT / BIC</label><input class="input-field font-mono" value="${n(e.swift||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'swift', this.value)"></div>
        <div><label class="lbl">Routing / ABA</label><input class="input-field font-mono" value="${n(e.routing||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'routing', this.value)"></div>
        <div><label class="lbl">Sort Code</label><input class="input-field font-mono" value="${n(e.sortCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'sortCode', this.value)"></div>
        <div><label class="lbl">Bank Code</label><input class="input-field font-mono" value="${n(e.bankCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'bankCode', this.value)"></div>
        <div><label class="lbl">Branch Code</label><input class="input-field font-mono" value="${n(e.branchCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'branchCode', this.value)"></div>
        <div><label class="lbl">Institution Number</label><input class="input-field font-mono" value="${n(e.institutionNumber||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'institutionNumber', this.value)"></div>
        <div><label class="lbl">Transit Number</label><input class="input-field font-mono" value="${n(e.transitNumber||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'transitNumber', this.value)"></div>
        <div><label class="lbl">BSB Code</label><input class="input-field font-mono" value="${n(e.bsbCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'bsbCode', this.value)"></div>
        <div class="sm:col-span-2"><label class="lbl">Bank Address</label><input class="input-field" value="${n(e.address||"")}" placeholder="Branch or bank address" oninput="updateManualPaymentAccount(${t}, 'address', this.value)"></div>
      </div>
    </div>`}window.renderManualPaymentAccountsEditor=function(){const e=document.getElementById("manual-accounts-editor");e&&(window._manualPaymentAccounts?.length||(window._manualPaymentAccounts=[je()]),e.innerHTML=`
    <div class="space-y-4">
      ${window._manualPaymentAccounts.map((t,a)=>Ga(t,a)).join("")}
      <button type="button" onclick="addManualPaymentAccount()" class="btn-press w-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wide transition flex items-center justify-center gap-2">
        <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Another Bank Account
      </button>
    </div>`,Oe(),window.lucide&&lucide.createIcons())};window.addManualPaymentAccount=function(){window._manualPaymentAccounts.push(je()),renderManualPaymentAccountsEditor()};window.removeManualPaymentAccount=function(e){window._manualPaymentAccounts.splice(e,1),window._manualPaymentAccounts.length||(window._manualPaymentAccounts=[je()]),renderManualPaymentAccountsEditor()};window.updateManualPaymentAccount=function(e,t,a){const i=window._manualPaymentAccounts[e];i&&(i[t]=a,t==="currency"&&(i.currencyName=a),Oe())};window.updateManualPaymentCountry=function(e,t){const a=window._manualPaymentAccounts[e];if(!a)return;const i=ae.find(s=>s.code===t);a.country_code=t,a.country=i?.name||"",a.flag=i?.flag||Ke(t),Oe(),renderManualPaymentAccountsEditor()};async function Se(){const e=document.getElementById("content");e&&(e.innerHTML=R());try{const{data:t}=await c.from("site_settings").select("*").limit(1).maybeSingle(),i={...Vt()||{},...t||{}};window._manualPaymentAccounts=zt(i).map(s=>({...s})),e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white">Payment Settings</h2>
          <div class="flex items-center gap-2 flex-wrap">
            ${i.payment_gateway?`<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Active: ${n(i.payment_gateway)}</span>`:'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Not configured</span>'}
            ${i.payment_mode==="live"?'<span class="badge bg-red-500/10 text-red-400 border-red-500/20">🔴 LIVE MODE</span>':'<span class="badge bg-blue-500/10 text-blue-400 border-blue-500/20">🔧 Test Mode</span>'}
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
                  <p class="text-[11px] text-gray-500">Show the right receiving account based on the customer country and currency.</p>
                </div>
              </div>
              <label class="toggle-switch shrink-0">
                <input type="checkbox" name="manual_payment_enabled" id="manual-toggle" ${i.manual_payment_enabled!==!1?"checked":""}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="p-5 space-y-4">
              <input type="hidden" id="manual-payment-accounts-json" name="manual_payment_accounts_json" value="">
              <div id="manual-accounts-editor"></div>
              <div>
                <label class="lbl">Payment Instructions (shown to customer after checkout)</label>
                <textarea class="input-field" name="manual_payment_instructions" rows="4" placeholder="Explain how customers should pay and upload their receipt.">${n(Wt(i))}</textarea>
              </div>
              <div>
                <label class="lbl">ATM Transfer Instructions (optional, shown separately)</label>
                <textarea class="input-field" name="atm_transfer_instructions" rows="3" placeholder="Optional ATM-specific instructions.">${n(i.atm_transfer_instructions||"")}</textarea>
              </div>
              <div class="p-3 bg-blue-500/5 border border-blue-500/15 rounded-xl text-[11px] text-blue-300">
                <i data-lucide="info" class="w-3.5 h-3.5 inline mr-1"></i>
                Customers will see the account that matches their detected country currency. If no match exists, they will be guided to use your USD account and upload a receipt for quick verification and shipping.
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
                  <div><p class="text-xs font-black text-white">🔧 Test Mode</p><p class="text-[11px] text-gray-500">Use sandbox keys — no real money</p></div>
                </label>
                <label class="flex items-center gap-3 p-3 glass-soft border ${i.payment_mode==="live"?"border-red-500/40 bg-red-500/5":"border-blue-500/10"} rounded-xl cursor-pointer">
                  <input type="radio" name="payment_mode" value="live" ${i.payment_mode==="live"?"checked":""} class="accent-red-500">
                  <div><p class="text-xs font-black text-white">🔴 Live Mode</p><p class="text-[11px] text-red-400 font-bold">Real money — use production keys</p></div>
                </label>
              </div>
              <div class="form-grid form-grid-2">
                <div><label class="lbl">Public Key *</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_public_key" placeholder="${i.flutterwave_public_key?"••••"+i.flutterwave_public_key.slice(-4):"FLWPUBK_TEST-… or FLWPUBK-…"}">${i.flutterwave_public_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':""}</div></div>
                <div><label class="lbl">Secret Key *</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_secret_key" placeholder="${i.flutterwave_secret_key?"••••"+i.flutterwave_secret_key.slice(-4):"FLWSECK_TEST-… or FLWSECK-…"}">${i.flutterwave_secret_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':""}</div></div>
                <div><label class="lbl">Encryption Key</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_encryption_key" placeholder="${i.flutterwave_encryption_key?"••••"+i.flutterwave_encryption_key.slice(-4):"Encryption key from dashboard"}">${i.flutterwave_encryption_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':""}</div></div>
                <div><label class="lbl">Webhook Secret</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_webhook_secret" placeholder="${i.flutterwave_webhook_secret?"••••"+i.flutterwave_webhook_secret.slice(-4):"Secret hash for webhook verification"}">${i.flutterwave_webhook_secret?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':""}</div></div>
                <div><label class="lbl">Accepted Currency</label><select class="input-field" name="flutterwave_currency">${["NGN","USD","GBP","EUR","GHS","KES","ZAR","ZMW","TZS","UGX","XAF","XOF"].map(s=>`<option value="${s}" ${(i.flutterwave_currency||"NGN")===s?"selected":""}>${s}</option>`).join("")}</select></div>
                <div><label class="lbl">Redirect URL (after payment)</label><input class="input-field" name="flutterwave_redirect_url" value="${n(i.flutterwave_redirect_url||"")}" placeholder="${window.location.origin}/payment.html"></div>
              </div>
              <div class="p-3 bg-amber-500/5 border border-amber-500/15 rounded-xl text-[11px] text-amber-300 space-y-1">
                <p><strong>Where to get keys:</strong> <a href="https://dashboard.flutterwave.com/dashboard/settings/apis" target="_blank" class="underline hover:text-amber-200">dashboard.flutterwave.com → Settings → API</a></p>
                <p><strong>Webhook URL to add in Flutterwave:</strong> <code class="bg-black/30 px-1 rounded">${window.location.origin}/api/flutterwave-webhook</code></p>
                <p>Test cards: Visa <code class="bg-black/30 px-1 rounded">4187 4274 1556 4246</code> · PIN: <code class="bg-black/30 px-1 rounded">3310</code> · OTP: <code class="bg-black/30 px-1 rounded">12345</code></p>
              </div>
              <button type="button" onclick="testFlutterwaveKeys()" class="btn-press flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 px-4 py-2 rounded-xl transition"><i data-lucide="plug" class="w-4 h-4"></i> Test Flutterwave Connection</button>
            </div>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white mb-1">Which payment method is active on checkout?</h3>
            <p class="text-xs text-gray-400 mb-3">Select which method customers see when they go to pay.</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${[{id:"manual",label:"Manual / Bank Transfer",icon:"landmark",color:"blue"},{id:"flutterwave",label:"Flutterwave",icon:"zap",color:"amber"},{id:"both",label:"Both (customer chooses)",icon:"layers",color:"emerald"}].map(s=>`<label class="flex items-center gap-3 p-3 glass-soft border ${(i.payment_gateway||"manual")===s.id?"border-blue-500/40 bg-blue-500/5":"border-blue-500/10"} rounded-xl cursor-pointer hover:border-blue-500/30 transition"><input type="radio" name="payment_gateway" value="${s.id}" ${(i.payment_gateway||"manual")===s.id?"checked":""} class="accent-blue-500"><div><i data-lucide="${s.icon}" class="w-4 h-4 text-${s.color}-400 mb-0.5"></i><p class="text-xs font-bold text-white">${s.label}</p></div></label>`).join("")}
            </div>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2"><i data-lucide="save" class="w-4 h-4"></i> Save Payment Settings</button>
        </form>
      </div>`,renderManualPaymentAccountsEditor(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.savePaymentSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=["flutterwave_public_key","flutterwave_secret_key","flutterwave_encryption_key","flutterwave_webhook_secret"],s={};for(const[b,m]of Object.entries(a))i.includes(b)?m&&!m.startsWith("••••")&&m.trim()!==""&&(s[b]=m.trim()):s[b]=m;s.manual_payment_enabled=a.manual_payment_enabled==="on",s.flutterwave_enabled=a.flutterwave_enabled==="on";let o=[];try{o=JSON.parse(a.manual_payment_accounts_json||"[]")}catch{}s.manual_payment_accounts=o;const l=o[0]||{},r=o[1]||{};s.bank1_account_name=l.beneficiary||"",s.bank1_account_number=l.accountNumber||"",s.bank1_bank_name=l.bankName||"",s.bank1_transfer_type=l.transferType||"",s.bank1_sort_code=l.sortCode||l.routing||"",s.bank1_currency=l.currency||"USD",s.bank2_account_name=r.beneficiary||"",s.bank2_account_number=r.accountNumber||"",s.bank2_bank_name=r.bankName||"",s.bank2_transfer_type=r.transferType||"",s.bank2_sort_code=r.sortCode||r.routing||"",s.bank2_currency=r.currency||"USD",Gt(s);const{data:d}=await c.from("site_settings").select("id").limit(1).maybeSingle();let u;if(d?.id?{error:u}=await c.from("site_settings").update(s).eq("id",d.id):{error:u}=await c.from("site_settings").insert(s),u){const b=String(u.message||"");if(/manual_payment_accounts|column|schema cache/i.test(b)){p("Payment settings saved locally. Run the latest migration to persist them to Supabase.","info"),console.warn(u),setTimeout(()=>Se(),500);return}p("Save failed: "+u.message,"error"),console.error(u);return}p("✅ Payment settings saved successfully!","success"),setTimeout(()=>Se(),500)};window.testFlutterwaveKeys=async function(){const{data:e}=await c.from("site_settings").select("flutterwave_public_key").limit(1).maybeSingle();if(!e?.flutterwave_public_key){p("Save your Flutterwave public key first","info");return}p("Flutterwave key is saved. Use test mode + test card to verify a payment flow.","info")};async function me(){const e=document.getElementById("content");try{const{data:t}=await c.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white">Publish & Deploy</h2>

        <!-- Status Bar -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 flex flex-wrap items-center gap-4">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${a.github_repo?"bg-emerald-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${a.github_repo?"text-emerald-400":"text-gray-500"}">${a.github_repo?"GitHub Connected: "+n(a.github_repo):"GitHub Not Connected"}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${a.deploy_webhook?"bg-blue-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${a.deploy_webhook?"text-blue-400":"text-gray-500"}">${a.deploy_webhook?"Deploy Webhook Set":"No Webhook"}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${a.payment_gateway?"bg-amber-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${a.payment_gateway?"text-amber-400":"text-gray-500"}">${a.payment_gateway?"Payment: "+n(a.payment_gateway):"Payment Not Configured"}</span>
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

          <!-- ── GitHub Integration ── -->
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
                <input class="input-field" name="github_username" value="${n(a.github_username||"")}" placeholder="your-github-username">
              </div>
              <div>
                <label class="lbl">Repository Name</label>
                <input class="input-field" name="github_repo" value="${n(a.github_repo||"")}" placeholder="my-website-repo">
              </div>
              <div>
                <label class="lbl">Branch</label>
                <input class="input-field" name="github_branch" value="${n(a.github_branch||"main")}" placeholder="main">
              </div>
              <div>
                <label class="lbl">GitHub Personal Access Token</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="github_token" placeholder="${a.github_token?"••••"+a.github_token.slice(-4):"ghp_…paste your token"}">
                  ${a.github_token?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':""}
                </div>
                <p class="text-[10px] text-gray-500 mt-1">Generate at: <a href="https://github.com/settings/tokens" target="_blank" class="text-blue-400 hover:underline">github.com/settings/tokens</a> (needs repo scope)</p>
              </div>
            </div>
            <button type="button" onclick="testGitHubConnection()" class="btn-press flex items-center gap-2 text-xs font-bold text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2 rounded-xl transition">
              <i data-lucide="plug" class="w-4 h-4"></i> Test GitHub Connection
            </button>
          </div>

          <!-- ── Hosting & Deploy Webhook ── -->
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
              <input class="input-field" name="deploy_webhook" value="${n(a.deploy_webhook||"")}" placeholder="https://api.netlify.com/build_hooks/…">
              <p class="text-[10px] text-gray-500 mt-1">Netlify: Site Settings → Build hooks · Vercel: Project → Settings → Git → Deploy Hooks</p>
            </div>
            <div>
              <label class="lbl">Production URL</label>
              <input class="input-field" name="production_url" value="${n(a.production_url||"")}" placeholder="https://yoursite.com">
            </div>
          </div>

          <!-- ── Payment Settings ── -->
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
                  <input type="password" class="input-field pr-16" name="payment_public_key" placeholder="${a.payment_public_key?"••••"+a.payment_public_key.slice(-4):"Paste public key…"}">
                  ${a.payment_public_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':""}
                </div>
              </div>
              <div>
                <label class="lbl">Secret / Private Key</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="payment_secret_key" placeholder="${a.payment_secret_key?"••••"+a.payment_secret_key.slice(-4):"Paste secret key…"}">
                  ${a.payment_secret_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':""}
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
                  <option value="test" ${(a.payment_mode||"test")==="test"?"selected":""}>🔧 Test Mode (sandbox)</option>
                  <option value="live" ${a.payment_mode==="live"?"selected":""}>🚀 Live Mode (real money)</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Webhook Secret (for payment verification)</label>
                <input type="password" class="input-field" name="payment_webhook_secret" placeholder="${a.payment_webhook_secret?"••••"+a.payment_webhook_secret.slice(-4):"Paste webhook secret…"}">
              </div>
            </div>
            <div class="p-3 bg-amber-500/5 border border-amber-500/15 rounded-xl text-[11px] text-amber-300">
              <strong>Flutterwave:</strong> flutterwave.com → Dashboard → API Settings<br>
              <strong>Stripe:</strong> dashboard.stripe.com → Developers → API Keys<br>
              <strong>PayPal:</strong> developer.paypal.com → My Apps → Create App<br>
              <strong>Paystack:</strong> dashboard.paystack.com → Settings → API Keys
            </div>
          </div>

          <!-- ── Environment Variables Guide ── -->
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
              <p>VITE_FLUTTERWAVE_PUBLIC_KEY=<span class="text-amber-400">FLWPUBK_TEST-…</span></p>
              <p>VITE_STRIPE_PUBLIC_KEY=<span class="text-amber-400">pk_test_…</span></p>
              <p class="text-gray-600 mt-2"># AI (server-side only — Edge Functions)</p>
              <p>GEMINI_API_KEY=<span class="text-emerald-400">AIzaSy…</span></p>
              <p>GROQ_API_KEY=<span class="text-emerald-400">gsk_…</span></p>
            </div>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            💾 Save Deploy & Payment Settings
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.saveDeploySettings=async function(e){e.preventDefault();const t=e.target?.querySelector("[type=submit]");t&&(t.disabled=!0,t.innerHTML="Saving…");const a=new FormData(e.target),i=Object.fromEntries(a.entries()),s={},o=["github_token","payment_public_key","payment_secret_key","payment_webhook_secret"];for(const[r,d]of Object.entries(i))o.includes(r)?d&&!d.startsWith("•")&&d.trim()!==""&&(s[r]=d.trim()):s[r]=d;const{error:l}=await c.from("site_settings").upsert({id:1,...s});if(t&&(t.disabled=!1,t.innerHTML="💾 Save Deploy & Payment Settings"),l){p(l.message,"error");return}p("Deploy & payment settings saved!"),me()};async function Bt(e="deploy"){const{data:t}=await c.from("site_settings").select("deploy_webhook,production_url,github_repo").limit(1).maybeSingle();if(!t?.deploy_webhook)return p("No webhook URL set. Add your deploy webhook in the settings below.","info"),{ok:!1,reason:"missing_webhook"};let a=t.deploy_webhook;try{const i=new URL(a);e==="rebuild"&&i.searchParams.set("rebuild","1"),a=i.toString()}catch{e==="rebuild"&&(a+=(a.includes("?")?"&":"?")+"rebuild=1")}return{ok:!0,settings:t,hookUrl:a}}async function T(e,t={}){const a=t.version||new Date().toISOString(),i={source:"admin-dashboard",mode:t.mode||"deploy",production_url:t.productionUrl||null,github_repo:t.githubRepo||null,webhook:t.webhook||null,message:t.message||null},{data:s,error:o}=await c.from("deployment_history").insert({version:a,status:e,triggered_by_email:y.user?.email||null,metadata:i,error_message:t.errorMessage||null}).select("id").limit(1).maybeSingle();return{data:s,error:o}}function N(e,t,a,i){if(!e)return;e.disabled=t;const s=e.querySelector("p.text-xs.font-black");s&&(s.textContent=t?a:i)}window.triggerDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-deploy-btn]");N(t,!0,"Deploying…","Deploy Now");try{const a=await Bt("deploy");if(!a.ok)return;const{settings:i,hookUrl:s}=a;await T("preparing",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,message:"Deployment queued from admin UI"});const o=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"deploy",source:"admin-dashboard",at:new Date().toISOString()})});if(o.ok)p("🚀 Deployment triggered! Your site will be live in ~2 minutes."),await T("deploying",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,message:"Webhook accepted deployment request"}),setTimeout(()=>me(),400);else{const l=`Webhook returned error: ${o.status}`;p(l,"error"),await T("failed",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,errorMessage:l})}}catch(a){p("Deploy failed: "+a.message,"error"),await T("failed",{mode:"deploy",errorMessage:a.message})}finally{N(t,!1,"Deploying…","Deploy Now")}};window.triggerRebuild=async function(e){const t=e?.currentTarget||document.querySelector("[data-rebuild-btn]");N(t,!0,"Rebuilding…","Rebuild Site");try{const a=await Bt("rebuild");if(!a.ok)return;const{settings:i,hookUrl:s}=a;await T("building",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,message:"Rebuild requested from admin UI"});const o=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"rebuild",source:"admin-dashboard",at:new Date().toISOString()})});if(o.ok)p("🔄 Rebuild triggered successfully."),await T("deploying",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,message:"Webhook accepted rebuild request"}),setTimeout(()=>me(),400);else{const l=`Rebuild webhook error: ${o.status}`;p(l,"error"),await T("failed",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,errorMessage:l})}}catch(a){p("Rebuild failed: "+a.message,"error"),await T("failed",{mode:"rebuild",errorMessage:a.message})}finally{N(t,!1,"Rebuilding…","Rebuild Site")}};window.publishAndDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-publish-easy-btn]");N(t,!0,"Publishing…","One-Click Publish");try{const a=document.getElementById("deploy-form");if(!a){p("Deploy form is not available. Reload and try again.","error");return}await window.saveDeploySettings({preventDefault(){},target:a}),await window.triggerDeploy()}catch(a){p("Publish failed: "+a.message,"error")}finally{N(t,!1,"Publishing…","One-Click Publish")}};window.testGitHubConnection=async function(){const e=document.querySelector("[name=github_username]")?.value?.trim(),t=document.querySelector("[name=github_repo]")?.value?.trim();if(!e||!t){p("Enter your GitHub username and repo name first","info");return}try{const a=await fetch(`https://api.github.com/repos/${e}/${t}`);if(a.ok){const i=await a.json();p(`✓ Connected: ${i.full_name} (${i.visibility})`)}else a.status===404?p("Repository not found. Check username and repo name.","error"):p("GitHub API error: "+a.status,"error")}catch{p("Could not reach GitHub API","error")}};window.deployToProduction=window.triggerDeploy;window.rebuildSite=window.triggerRebuild;window._liveControlAdminState=null;window._livePublicState=null;async function G(){window._liveControlAdminState||(window._liveControlAdminState=await qt()),window._livePublicState||(window._livePublicState=await Nt())}function Va(e,t,a){const i=t.split(".");let s=e;for(let o=0;o<i.length-1;o++){const l=i[o];(!s[l]||typeof s[l]!="object")&&(s[l]={}),s=s[l]}s[i[i.length-1]]=a}function Mt(e,t,a){const i=s=>{const o=s.split(".");let l=e;for(const r of o)l=l?.[r];return l||""};return`
    <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-4">
      <div class="flex items-start justify-between gap-3">
        <div>
          <div class="flex items-center gap-2 mb-1"><i data-lucide="${t.icon}" class="w-4 h-4 text-blue-400"></i><h3 class="text-sm font-black text-white">${t.label}</h3></div>
          <p class="text-[11px] text-gray-500">${t.description}</p>
        </div>
        <label class="toggle-switch shrink-0"><input type="checkbox" ${e.enabled?"checked":""} onchange="toggleLivePlatformEnabled('${a}','${e.id}', this.checked)"><span class="toggle-slider"></span></label>
      </div>
      <div class="form-grid form-grid-2">
        ${t.fields.includes("apiKey")?`<div><label class="lbl">API Key</label><input class="input-field" type="password" value="${n(i("credentials.apiKey"))}" oninput="updateLivePlatformField('${a}','${e.id}','credentials.apiKey', this.value)" placeholder="Add API key later"></div>`:""}
        ${t.fields.includes("apiSecret")?`<div><label class="lbl">API Secret</label><input class="input-field" type="password" value="${n(i("credentials.apiSecret"))}" oninput="updateLivePlatformField('${a}','${e.id}','credentials.apiSecret', this.value)" placeholder="Add API secret later"></div>`:""}
        ${t.fields.includes("clientId")?`<div><label class="lbl">Client ID</label><input class="input-field" value="${n(i("credentials.clientId"))}" oninput="updateLivePlatformField('${a}','${e.id}','credentials.clientId', this.value)" placeholder="Client ID"></div>`:""}
        ${t.fields.includes("clientSecret")?`<div><label class="lbl">Client Secret</label><input class="input-field" type="password" value="${n(i("credentials.clientSecret"))}" oninput="updateLivePlatformField('${a}','${e.id}','credentials.clientSecret', this.value)" placeholder="Client secret"></div>`:""}
        ${t.fields.includes("sdkKey")?`<div><label class="lbl">SDK Key</label><input class="input-field" value="${n(i("credentials.sdkKey"))}" oninput="updateLivePlatformField('${a}','${e.id}','credentials.sdkKey', this.value)" placeholder="SDK key"></div>`:""}
        ${t.fields.includes("sdkSecret")?`<div><label class="lbl">SDK Secret</label><input class="input-field" type="password" value="${n(i("credentials.sdkSecret"))}" oninput="updateLivePlatformField('${a}','${e.id}','credentials.sdkSecret', this.value)" placeholder="SDK secret"></div>`:""}
        ${t.fields.includes("channelId")?`<div><label class="lbl">Channel ID</label><input class="input-field" value="${n(i("settings.channelId"))}" oninput="updateLivePlatformField('${a}','${e.id}','settings.channelId', this.value)" placeholder="Channel or creator ID"></div>`:""}
        ${t.fields.includes("pageId")?`<div><label class="lbl">Page ID</label><input class="input-field" value="${n(i("settings.pageId"))}" oninput="updateLivePlatformField('${a}','${e.id}','settings.pageId', this.value)" placeholder="Page ID"></div>`:""}
        ${t.fields.includes("meetingId")?`<div><label class="lbl">Meeting / Room ID</label><input class="input-field" value="${n(i("settings.meetingId"))}" oninput="updateLivePlatformField('${a}','${e.id}','settings.meetingId', this.value)" placeholder="Meeting or room ID"></div>`:""}
        ${t.fields.includes("tenantId")?`<div><label class="lbl">Tenant ID</label><input class="input-field" value="${n(i("settings.tenantId"))}" oninput="updateLivePlatformField('${a}','${e.id}','settings.tenantId', this.value)" placeholder="Tenant ID"></div>`:""}
        ${t.fields.includes("streamKey")?`<div><label class="lbl">Stream Key</label><input class="input-field font-mono" value="${n(i("settings.streamKey"))}" oninput="updateLivePlatformField('${a}','${e.id}','settings.streamKey', this.value)" placeholder="Stream key"></div>`:""}
        ${t.fields.includes("rtmpUrl")?`<div><label class="lbl">RTMP / Ingest URL</label><input class="input-field font-mono" value="${n(i("settings.rtmpUrl"))}" oninput="updateLivePlatformField('${a}','${e.id}','settings.rtmpUrl', this.value)" placeholder="rtmp://..."></div>`:""}
        ${t.fields.includes("hostUrl")?`<div><label class="lbl">Host / Control URL</label><input class="input-field" value="${n(i("links.hostUrl"))}" oninput="updateLivePlatformField('${a}','${e.id}','links.hostUrl', this.value)" placeholder="Host dashboard URL"></div>`:""}
        ${t.fields.includes("embedUrl")?`<div><label class="lbl">Embed URL</label><input class="input-field" value="${n(i("links.embedUrl"))}" oninput="updateLivePlatformField('${a}','${e.id}','links.embedUrl', this.value)" placeholder="Embeddable player URL"></div>`:""}
        ${t.fields.includes("joinUrl")?`<div><label class="lbl">Join URL</label><input class="input-field" value="${n(i("links.joinUrl"))}" oninput="updateLivePlatformField('${a}','${e.id}','links.joinUrl', this.value)" placeholder="Call join URL"></div>`:""}
        ${t.fields.includes("webhookSecret")?`<div><label class="lbl">Webhook Secret</label><input class="input-field" type="password" value="${n(i("settings.webhookSecret"))}" oninput="updateLivePlatformField('${a}','${e.id}','settings.webhookSecret', this.value)" placeholder="Webhook secret"></div>`:""}
      </div>
      <div class="text-[11px] text-gray-500">Keys are not hardcoded. Save your settings here and control them from the dashboard only.</div>
    </div>`}function za(e){return e.length?e.map(t=>`
    <div class="glass-soft border border-blue-500/10 rounded-xl p-4 flex flex-col gap-3 lg:flex-row lg:items-center">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1"><span class="text-sm font-black text-white">${n(t.title)}</span>${_(t.status)}</div>
        <p class="text-[11px] text-gray-500">Platforms: ${n(t.selectedPlatforms.join(", ")||"None")} ${t.scheduledAt?`• Scheduled: ${n($(t.scheduledAt))}`:""}</p>
        ${t.headline?`<p class="text-xs text-gray-400 mt-1">${n(t.headline)}</p>`:""}
      </div>
      <div class="flex flex-wrap gap-2">
        <button onclick="startLiveSession('${t.id}')" class="btn-press px-3 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-bold rounded-xl transition">Start</button>
        <button onclick="endLiveSession('${t.id}')" class="btn-press px-3 py-2 bg-gray-700/50 hover:bg-gray-700 text-gray-200 text-xs font-bold rounded-xl transition">End</button>
        <button onclick="removeLiveSession('${t.id}')" class="btn-press px-3 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs font-bold rounded-xl transition">Delete</button>
      </div>
    </div>`).join(""):'<p class="text-sm text-gray-500 text-center py-8">No live sessions created yet.</p>'}async function V(){const e=document.getElementById("content");e&&(e.innerHTML=R()),await G();const t=window._livePublicState||{},a=window._liveControlAdminState,i=a.streamingPlatforms.filter(l=>l.enabled).length,s=a.liveSessions,o=[...a.streamingPlatforms].sort((l,r)=>l.id==="tiktok-live"?-1:r.id==="tiktok-live"?1:0);e.innerHTML=`
    <div class="space-y-5 fade-in">
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex-1">
          <h2 class="text-xl font-black text-white">Live Streaming Manager</h2>
          <p class="text-sm text-gray-500 mt-1">Connect platforms, schedule streams, publish LIVE NOW on the homepage, and prepare multi-platform broadcasting without touching code.</p>
        </div>
        <button onclick="saveLiveStreamingSettings()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">Save Streaming Settings</button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        ${h("Enabled Platforms",i,"radio","red","Live destinations configured")}
        ${h("Scheduled Streams",s.filter(l=>l.status==="scheduled").length,"calendar","blue","Upcoming broadcasts")}
        ${h("Live Now",t.isLive?1:0,"signal","emerald",t.isLive?t.headline||"Active stream":"Offline")}
        ${h("Viewers Snapshot",t.viewerCount||0,"users","amber",`${t.commentCount||0} comments tracked`)}
      </div>

      <div class="glass-soft border border-red-500/20 rounded-2xl p-5 space-y-4">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0"><i data-lucide="smartphone" class="w-5 h-5 text-red-400"></i></div>
          <div>
            <h3 class="text-sm font-black text-white">TikTok Real Setup</h3>
            <p class="text-[11px] text-gray-400 mt-1">If your main goal is TikTok, the real external streaming workflow is RTMP-based. Do not rely on API key only.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
          <div class="rounded-2xl border border-blue-500/10 bg-blue-950/40 p-4">
            <p class="text-xs font-black uppercase tracking-wide text-blue-300 mb-2">Collect From TikTok</p>
            <div class="space-y-2 text-gray-300">
              <p>1. Open TikTok on your phone and confirm your account has LIVE access.</p>
              <p>2. If your account supports external streaming, open TikTok LIVE Center or TikTok LIVE Studio.</p>
              <p>3. Copy the RTMP server URL.</p>
              <p>4. Copy the stream key.</p>
              <p>5. If TikTok gives you a watch/share page, copy that into Embed URL or Host URL.</p>
            </div>
          </div>
          <div class="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-4">
            <p class="text-xs font-black uppercase tracking-wide text-emerald-300 mb-2">Put It Here In Admin</p>
            <div class="space-y-2 text-gray-300">
              <p>1. Enable <strong>TikTok Live</strong>.</p>
              <p>2. Paste the server URL into <strong>RTMP / Ingest URL</strong>.</p>
              <p>3. Paste the stream key into <strong>Stream Key</strong>.</p>
              <p>4. Add your TikTok page or watch link into <strong>Host / Control URL</strong>.</p>
              <p>5. Add an embeddable player URL if you have one. If not, use the homepage LIVE badge and a watch link.</p>
              <p>6. Save settings, then start streaming from your phone or encoder and click <strong>Start Live Now</strong> here to publish the site-wide live state.</p>
            </div>
          </div>
        </div>
        <div class="rounded-xl border border-amber-500/15 bg-amber-500/5 p-3 text-[11px] text-amber-200">
          TikTok only becomes truly real after you collect the live RTMP details from TikTok and start the broadcast from the TikTok-supported phone/app or encoder workflow. This admin page is where you save and manage those details.
        </div>
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
        <div class="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <h3 class="text-sm font-black text-white">Platform Connections</h3>
            <p class="text-[11px] text-gray-500">Add your API keys, stream keys, embed URLs, and host dashboards later. Each platform can be enabled or disabled independently.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
          ${o.map(l=>Mt(l,Ie.find(r=>r.id===l.id),"streamingPlatforms")).join("")}
        </div>
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
        <div>
          <h3 class="text-sm font-black text-white">Create or Schedule Live Stream</h3>
          <p class="text-[11px] text-gray-500 mt-1">Select one or more platforms, set the homepage embed URL, and publish a synchronized live status across the website and mobile app.</p>
        </div>
        <div class="form-grid form-grid-2">
          <div><label class="lbl">Stream Title</label><input id="live-session-title" class="input-field" placeholder="e.g. Friday Product Showcase"></div>
          <div><label class="lbl">Badge Text</label><input id="live-session-badge" class="input-field" value="${n(a.preferences.defaultBadgeText||"LIVE NOW")}" placeholder="LIVE NOW"></div>
          <div class="sm:col-span-2"><label class="lbl">Homepage Headline</label><input id="live-session-headline" class="input-field" placeholder="Tell visitors what is happening live"></div>
          <div class="sm:col-span-2"><label class="lbl">Description</label><textarea id="live-session-description" class="input-field" rows="3" placeholder="Stream summary, agenda, products, or event details"></textarea></div>
          <div><label class="lbl">Embed URL</label><input id="live-session-embed" class="input-field" placeholder="https://... embeddable live player"></div>
          <div><label class="lbl">Schedule Date & Time</label><input id="live-session-scheduled" type="datetime-local" class="input-field"></div>
        </div>
        <div>
          <label class="lbl">Stream To Platforms</label>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 mt-2">
            ${o.filter(l=>l.enabled).map(l=>`<label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2 text-xs text-gray-300"><input type="checkbox" class="accent-red-500" value="${l.id}" data-live-platform-select><span>${n(l.label)}</span></label>`).join("")||'<p class="text-xs text-gray-500">Enable at least one streaming platform above.</p>'}
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2 text-xs text-gray-300"><input id="live-notify-visitors" type="checkbox" class="accent-blue-500" checked><span>Notify visitors when live</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2 text-xs text-gray-300"><input id="live-show-badge" type="checkbox" class="accent-blue-500" checked><span>Show LIVE NOW badge on homepage</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2 text-xs text-gray-300"><input id="live-show-embed" type="checkbox" class="accent-blue-500" checked><span>Embed live player on homepage</span></label>
        </div>
        <div class="flex flex-wrap gap-3">
          <button onclick="createLiveSession('scheduled')" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">Schedule Stream</button>
          <button onclick="createLiveSession('live')" class="btn-press bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">Start Live Now</button>
          <button onclick="clearPublicLiveState()" class="btn-press bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">End Current Live</button>
        </div>
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
        <div class="flex items-center justify-between gap-3"><h3 class="text-sm font-black text-white">Live Stream Sessions</h3><span class="text-[11px] text-gray-500">Start, end, remove, or republish sessions instantly</span></div>
        ${za(s)}
      </div>
    </div>`,window.lucide&&lucide.createIcons()}function Wa(e){return e.length?e.map(t=>`
    <div class="glass-soft border border-blue-500/10 rounded-xl p-4 flex flex-col gap-3 lg:flex-row lg:items-center">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1"><span class="text-sm font-black text-white">${n(t.title)}</span>${_(t.status)}</div>
        <p class="text-[11px] text-gray-500">Provider: ${n(t.providerId)} • Type: ${n(t.callType)}${t.scheduledAt?` • Scheduled: ${n($(t.scheduledAt))}`:""}</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <button onclick="startVideoRoom('${t.id}')" class="btn-press px-3 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-xl transition">Start</button>
        <button onclick="endVideoRoom('${t.id}')" class="btn-press px-3 py-2 bg-gray-700/50 hover:bg-gray-700 text-gray-200 text-xs font-bold rounded-xl transition">End</button>
        <button onclick="removeVideoRoom('${t.id}')" class="btn-press px-3 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs font-bold rounded-xl transition">Delete</button>
      </div>
    </div>`).join(""):'<p class="text-sm text-gray-500 text-center py-8">No video call rooms created yet.</p>'}async function Q(){const e=document.getElementById("content");e&&(e.innerHTML=R()),await G();const t=window._liveControlAdminState,a=t.videoCallProviders.filter(s=>s.enabled).length,i=t.videoCallRooms.filter(s=>s.status==="live").length;e.innerHTML=`
    <div class="space-y-5 fade-in">
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex-1">
          <h2 class="text-xl font-black text-white">Video Call Manager</h2>
          <p class="text-sm text-gray-500 mt-1">Configure meeting providers, create one-to-one or group rooms, and manage screen sharing, recording, waiting rooms, moderation, and file sharing from the dashboard.</p>
        </div>
        <button onclick="saveVideoCallSettings()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">Save Video Call Settings</button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        ${h("Enabled Call Providers",a,"video","blue","Provider connections ready")}
        ${h("Active Calls",i,"video","emerald","Rooms currently running")}
        ${h("Scheduled Calls",t.videoCallRooms.filter(s=>s.status==="scheduled").length,"calendar","amber","Upcoming meetings")}
        ${h("Room Templates",t.videoCallRooms.length,"layers","violet","Saved one-to-one and group rooms")}
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
        <h3 class="text-sm font-black text-white">Provider Connections</h3>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
          ${t.videoCallProviders.map(s=>Mt(s,Ht.find(o=>o.id===s.id),"videoCallProviders")).join("")}
        </div>
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
        <div>
          <h3 class="text-sm font-black text-white">Create Video Call Room</h3>
          <p class="text-[11px] text-gray-500 mt-1">Prepare rooms for one-to-one calls, group calls, screen sharing, moderation, and recorded meetings.</p>
        </div>
        <div class="form-grid form-grid-2">
          <div><label class="lbl">Room Title</label><input id="video-room-title" class="input-field" placeholder="e.g. VIP Buyer Consultation"></div>
          <div><label class="lbl">Provider</label><select id="video-room-provider" class="input-field">${t.videoCallProviders.map(s=>`<option value="${s.id}">${n(s.label)}</option>`).join("")}</select></div>
          <div><label class="lbl">Room Type</label><select id="video-room-type" class="input-field"><option value="one_to_one">One-to-one</option><option value="group">Group</option></select></div>
          <div><label class="lbl">Schedule Date & Time</label><input id="video-room-scheduled" type="datetime-local" class="input-field"></div>
          <div><label class="lbl">Room Code / Meeting ID</label><input id="video-room-code" class="input-field" placeholder="Meeting ID or room code"></div>
          <div><label class="lbl">Max Participants</label><input id="video-room-max" type="number" class="input-field" value="25" min="2"></div>
          <div><label class="lbl">Host URL</label><input id="video-room-host" class="input-field" placeholder="Host start URL"></div>
          <div><label class="lbl">Join URL</label><input id="video-room-join" class="input-field" placeholder="Participant join URL"></div>
          <div class="sm:col-span-2"><label class="lbl">Embed URL</label><input id="video-room-embed" class="input-field" placeholder="Embeddable call URL for web/mobile"></div>
          <div class="sm:col-span-2"><label class="lbl">Notes</label><textarea id="video-room-notes" class="input-field" rows="3" placeholder="Call agenda, internal notes, participant instructions"></textarea></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 text-xs text-gray-300">
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2"><input id="video-waiting-room" type="checkbox" checked class="accent-blue-500"><span>Waiting room</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2"><input id="video-screen-share" type="checkbox" checked class="accent-blue-500"><span>Screen sharing</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2"><input id="video-recording" type="checkbox" class="accent-blue-500"><span>Call recording</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2"><input id="video-chat" type="checkbox" checked class="accent-blue-500"><span>Chat during call</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2"><input id="video-file-share" type="checkbox" checked class="accent-blue-500"><span>File sharing</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2"><input id="video-mute-entry" type="checkbox" class="accent-blue-500"><span>Mute on entry</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2"><input id="video-camera-control" type="checkbox" checked class="accent-blue-500"><span>Camera controls</span></label>
          <label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2"><input id="video-remove-participants" type="checkbox" checked class="accent-blue-500"><span>Mute / remove participants</span></label>
        </div>
        <div class="flex flex-wrap gap-3">
          <button onclick="createVideoRoom('scheduled')" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">Schedule Call</button>
          <button onclick="createVideoRoom('live')" class="btn-press bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">Start Call</button>
        </div>
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
        <div class="flex items-center justify-between gap-3"><h3 class="text-sm font-black text-white">Video Call Rooms</h3><span class="text-[11px] text-gray-500">Use host links, embed URLs, and moderation toggles without code changes</span></div>
        ${Wa(t.videoCallRooms)}
      </div>
    </div>`,window.lucide&&lucide.createIcons()}window.updateLivePlatformField=function(e,t,a,i){const o=(window._liveControlAdminState?.[e]||[]).find(l=>l.id===t);o&&Va(o,a,i)};window.toggleLivePlatformEnabled=function(e,t,a){const s=(window._liveControlAdminState?.[e]||[]).find(o=>o.id===t);s&&(s.enabled=a)};async function I(e=!0){const{error:t}=await Ot(window._liveControlAdminState);return t?(p("Saved locally. Run the live manager migration to persist provider settings.","info"),!1):(e&&p("Live manager settings saved"),!0)}window.saveLiveStreamingSettings=async function(){await I(!0)};window.saveVideoCallSettings=async function(){await I(!0)};window.createLiveSession=async function(e){await G();const t=[...document.querySelectorAll("[data-live-platform-select]:checked")].map(i=>i.value),a={id:`session-${Date.now()}`,title:document.getElementById("live-session-title")?.value?.trim()||"Live Stream",headline:document.getElementById("live-session-headline")?.value?.trim()||"",description:document.getElementById("live-session-description")?.value?.trim()||"",embedUrl:document.getElementById("live-session-embed")?.value?.trim()||"",badgeText:document.getElementById("live-session-badge")?.value?.trim()||"LIVE NOW",status:e==="live"?"live":"scheduled",scheduledAt:document.getElementById("live-session-scheduled")?.value||"",startedAt:e==="live"?new Date().toISOString():"",selectedPlatforms:t,notifyVisitors:document.getElementById("live-notify-visitors")?.checked!==!1,showHomepageBadge:document.getElementById("live-show-badge")?.checked!==!1,showHomepageEmbed:!!document.getElementById("live-show-embed")?.checked,viewerCount:0,commentCount:0,streamStatus:e==="live"?"live":"scheduled"};window._liveControlAdminState.liveSessions.unshift(a),e==="live"&&(window._livePublicState={isLive:!0,badgeText:a.badgeText,headline:a.headline||a.title,description:a.description,platformLabels:a.selectedPlatforms.map(i=>Ie.find(s=>s.id===i)?.label||i),embedUrl:a.showHomepageEmbed?a.embedUrl:"",viewerCount:a.viewerCount,commentCount:a.commentCount,streamStatus:"live",sessionId:a.id,notifyVisitors:a.notifyVisitors,startedAt:a.startedAt,updatedAt:new Date().toISOString()},await Pe(window._livePublicState)),await I(!1),p(e==="live"?"Live stream started":"Live stream scheduled"),V()};window.startLiveSession=async function(e){await G();const t=window._liveControlAdminState.liveSessions.find(a=>a.id===e);t&&(t.status="live",t.startedAt=new Date().toISOString(),t.streamStatus="live",window._livePublicState={isLive:!0,badgeText:t.badgeText||"LIVE NOW",headline:t.headline||t.title,description:t.description||"",platformLabels:t.selectedPlatforms.map(a=>Ie.find(i=>i.id===a)?.label||a),embedUrl:t.showHomepageEmbed?t.embedUrl:"",viewerCount:t.viewerCount||0,commentCount:t.commentCount||0,streamStatus:"live",sessionId:t.id,notifyVisitors:t.notifyVisitors!==!1,startedAt:t.startedAt,updatedAt:new Date().toISOString()},await Pe(window._livePublicState),await I(!1),p("Live session published"),V())};window.endLiveSession=async function(e){await G();const t=window._liveControlAdminState.liveSessions.find(a=>a.id===e);t&&(t.status="ended",t.streamStatus="ended",t.endedAt=new Date().toISOString(),window._livePublicState?.sessionId===e?await window.clearPublicLiveState():(await I(!1),p("Live session ended"),V()))};window.removeLiveSession=async function(e){window._liveControlAdminState.liveSessions=window._liveControlAdminState.liveSessions.filter(t=>t.id!==e),window._livePublicState?.sessionId===e&&await window.clearPublicLiveState(),await I(!1),p("Live session deleted"),V()};window.clearPublicLiveState=async function(){window._livePublicState={isLive:!1,badgeText:"LIVE NOW",headline:"",description:"",platformLabels:[],embedUrl:"",viewerCount:0,commentCount:0,streamStatus:"offline",sessionId:"",notifyVisitors:!0,startedAt:"",updatedAt:new Date().toISOString()},await Pe(window._livePublicState),await I(!1),p("Public live state cleared"),V()};window.createVideoRoom=async function(e){await G();const t={id:`room-${Date.now()}`,title:document.getElementById("video-room-title")?.value?.trim()||"Video Call Room",providerId:document.getElementById("video-room-provider")?.value||"zoom",callType:document.getElementById("video-room-type")?.value||"group",roomCode:document.getElementById("video-room-code")?.value?.trim()||"",hostUrl:document.getElementById("video-room-host")?.value?.trim()||"",joinUrl:document.getElementById("video-room-join")?.value?.trim()||"",embedUrl:document.getElementById("video-room-embed")?.value?.trim()||"",status:e==="live"?"live":"scheduled",scheduledAt:document.getElementById("video-room-scheduled")?.value||"",startedAt:e==="live"?new Date().toISOString():"",maxParticipants:parseInt(document.getElementById("video-room-max")?.value||"25",10)||25,waitingRoom:!!document.getElementById("video-waiting-room")?.checked,screenShare:!!document.getElementById("video-screen-share")?.checked,recording:!!document.getElementById("video-recording")?.checked,chatEnabled:!!document.getElementById("video-chat")?.checked,fileSharing:!!document.getElementById("video-file-share")?.checked,muteOnEntry:!!document.getElementById("video-mute-entry")?.checked,cameraControl:!!document.getElementById("video-camera-control")?.checked,removeParticipants:!!document.getElementById("video-remove-participants")?.checked,notes:document.getElementById("video-room-notes")?.value?.trim()||""};window._liveControlAdminState.videoCallRooms.unshift(t),await I(!1),e==="live"&&t.hostUrl&&window.open(t.hostUrl,"_blank","noopener"),p(e==="live"?"Video call started":"Video call scheduled"),Q()};window.startVideoRoom=async function(e){const t=window._liveControlAdminState.videoCallRooms.find(a=>a.id===e);t&&(t.status="live",t.startedAt=new Date().toISOString(),await I(!1),t.hostUrl&&window.open(t.hostUrl,"_blank","noopener"),p("Video room started"),Q())};window.endVideoRoom=async function(e){const t=window._liveControlAdminState.videoCallRooms.find(a=>a.id===e);t&&(t.status="ended",t.endedAt=new Date().toISOString(),await I(!1),p("Video room ended"),Q())};window.removeVideoRoom=async function(e){window._liveControlAdminState.videoCallRooms=window._liveControlAdminState.videoCallRooms.filter(t=>t.id!==e),await I(!1),p("Video room deleted"),Q()};async function Ve(){window.lucide&&lucide.createIcons(),it(),await ra(),c.auth.onAuthStateChange((e,t)=>{if(e==="SIGNED_OUT"){y.user=null;const a=document.getElementById("login-screen");a&&(a.style.display="flex")}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ve):Ve();
