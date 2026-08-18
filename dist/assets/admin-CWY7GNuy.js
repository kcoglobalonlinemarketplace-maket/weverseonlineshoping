import{S as M}from"./scroll-progress-CkGCpybk.js";import{a as aa,g as ia,C as ue,A as oa}from"./localization-DSrvpU6C.js";import{supabase as u}from"./supabase-client-nvpjTmO6.js";import{patchLocalShowroomListing as sa,upsertLocalShowroomListing as Se,getLocalShowroomListingById as ct,listLocalShowroomListings as je}from"./local-showroom-store-JrQn_yOW.js";import{g as ut,s as ra,l as na,a as la,b as da}from"./payment-settings-BAzqgJsF.js";import{PRODUCT_LISTINGS as pt}from"./products-data-CGLFLAJM.js";import{PRODUCT_EXTRA_LISTINGS as mt}from"./products-extra-DecCj9NU.js";import{TRUCK_LISTINGS as bt}from"./truck-data-DnyLExat.js";import{MOTORHOME_LISTINGS as gt}from"./motorhome-data-SSjGu6g8.js";import{getCatalogCategory as yt,getCatalogCategories as ca,generateProduct as rt}from"./catalog-DL8HBuCi.js";import{getHiddenCatalogIds as ft,saveCatalogHidden as ua,resetHiddenCatalogIds as pa,loadHiddenCatalogIds as ma}from"./catalog-hidden-store-l9NLQqfP.js";const L=1,U=5e6,ba=[{id:"prod-smartphone",listingType:"product",category:"Phones",subcategory:"Smartphones",label:"Flagship Smartphone",brand:"Global Mobile",model:"X Pro",color:"Midnight Black",size:"6.7-inch",condition:"New",features:["5G connectivity","OLED display","Fast charging","Unlocked","Premium cameras"],highlights:["Retail-ready packaging","Strong search demand","Ideal for global shipping"],keywords:["smartphone","mobile phone","5g"],descriptionType:"phone"},{id:"prod-laptop",listingType:"product",category:"Computers & Laptops",subcategory:"Laptops",label:"Performance Laptop",brand:"NorthBridge",model:"Studio 14",color:"Silver",size:"14-inch",condition:"New",features:["Fast processor","SSD storage","Long battery life","Portable chassis","Business-ready design"],highlights:["Suitable for work and study","Premium margin band","Global audience appeal"],keywords:["laptop","notebook","computer"],descriptionType:"laptop"},{id:"prod-tv",listingType:"product",category:"Electronics",subcategory:"Smart TVs",label:"4K Smart TV",brand:"VistaHome",model:"UltraView",color:"Black",size:"65-inch",condition:"New",features:["4K panel","Streaming apps","HDR support","Voice control","Slim bezel"],highlights:["Living-room centerpiece","Popular premium electronics segment"],keywords:["tv","smart tv","home electronics"],descriptionType:"electronics"},{id:"prod-watch",listingType:"product",category:"Watches",subcategory:"Luxury Watches",label:"Luxury Wristwatch",brand:"Aurelius",model:"Chrono 8",color:"Gold / Black",size:"42mm",condition:"New",features:["Precision movement","Premium case","Gift-ready presentation","Water resistance","Collector appeal"],highlights:["High perceived value","Strong gifting category"],keywords:["watch","luxury watch","timepiece"],descriptionType:"luxury"},{id:"prod-jewelry",listingType:"product",category:"Jewelry",subcategory:"Fine Jewelry",label:"Fine Jewelry Set",brand:"Maison Valeur",model:"Signature Set",color:"Gold",size:"Adjustable",condition:"New",features:["Premium finish","Gift packaging","Occasion-ready","Elegant styling"],highlights:["High-value presentation","Wedding and celebration demand"],keywords:["jewelry","necklace","bracelet"],descriptionType:"luxury"},{id:"prod-handbag",listingType:"product",category:"Bags & Accessories",subcategory:"Designer Bags",label:"Designer Handbag",brand:"Rue Maison",model:"Carry All",color:"Tan",size:"Medium",condition:"New",features:["Structured silhouette","Premium hardware","Travel-friendly storage","Retail-ready finish"],highlights:["Fashion-forward listing","Broad international demand"],keywords:["handbag","designer bag","accessories"],descriptionType:"fashion"},{id:"prod-sneakers",listingType:"product",category:"Shoes",subcategory:"Premium Sneakers",label:"Premium Sneakers",brand:"RunNorth",model:"Air Flex",color:"White",size:"EU 42",condition:"New",features:["Comfort cushioning","Streetwear styling","Durable outsole","Daily wear ready"],highlights:["High-conversion category","Easy multi-country merchandising"],keywords:["sneakers","shoes","fashion"],descriptionType:"fashion"},{id:"prod-sofa",listingType:"product",category:"Furniture",subcategory:"Living Room",label:"Luxury Sofa Set",brand:"Grand Habitat",model:"Residence 3-Piece",color:"Sand Beige",size:"3-Piece Set",condition:"New",features:["Premium upholstery","Statement living-room piece","Comfort seating","Interior-ready styling"],highlights:["Large-ticket home category","Ideal for premium households"],keywords:["sofa","furniture","living room"],descriptionType:"home"},{id:"prod-generator",listingType:"product",category:"Home & Kitchen",subcategory:"Power Solutions",label:"Backup Power Generator",brand:"VoltWorks",model:"SilentMax",color:"Graphite",size:"7.5kVA",condition:"New",features:["Reliable backup power","Low-noise housing","Residential and business use","Heavy-duty build"],highlights:["Practical high-demand utility item","Useful in many markets"],keywords:["generator","power","backup power"],descriptionType:"industrial"},{id:"prod-drone",listingType:"product",category:"Cameras & Photography",subcategory:"Drones",label:"Pro Camera Drone",brand:"SkyFrame",model:"Aerial 4K",color:"Gray",size:"Foldable",condition:"New",features:["4K stabilized video","GPS return home","Portable folding frame","Creator-ready footage"],highlights:["Strong visual listing appeal","Premium creator equipment"],keywords:["drone","camera drone","aerial"],descriptionType:"electronics"},{id:"prod-grocery",listingType:"product",category:"Food & Groceries",subcategory:"Family Essentials",label:"Family Grocery Bundle",brand:"Market Select",model:"Household Pack",color:"Mixed",size:"Bulk Pack",condition:"New",features:["Everyday essentials","Bulk value","Family sized","Easy repeat orders"],highlights:["Fast-moving everyday goods","Useful across broad regions"],keywords:["groceries","food bundle","household essentials"],descriptionType:"daily"},{id:"prod-scale-house",listingType:"product",category:"Home & Kitchen",subcategory:"Model Houses",label:"Architectural Model House",brand:"Studio Form",model:"Estate Miniature",color:"Natural Wood",size:"1:50 Scale",condition:"New",features:["Collector display piece","Detailed craftsmanship","Interior decor appeal","Gift-ready packaging"],highlights:["Supports the model-house use case","Works for decor and collector audiences"],keywords:["model house","architectural model","collector decor"],descriptionType:"home"},{id:"veh-sedan",listingType:"product",category:"Cars",subcategory:"Sedans",label:"Executive Sedan",brand:"Summit Motors",model:"S Line",color:"Pearl White",size:"Mid-size",condition:"Used - Like New",features:["Comfortable cabin","Road-trip ready","Well-maintained presentation","Family and executive appeal"],highlights:["Vehicle posts support 24-image galleries","Map-ready listing"],keywords:["car","sedan","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-suv",listingType:"product",category:"Cars",subcategory:"SUVs",label:"Family SUV",brand:"Frontier Auto",model:"Terrain X",color:"Obsidian",size:"7-Seater",condition:"Used - Like New",features:["Spacious seating","Utility-focused cargo room","Suitable for families","Road and city versatility"],highlights:["High-demand automotive segment","Works well with showroom map"],keywords:["suv","family car","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-luxury",listingType:"product",category:"Luxury Cars",subcategory:"Luxury Vehicles",label:"Luxury Performance Car",brand:"Regal Automotive",model:"Imperium GT",color:"Metallic Black",size:"Coupe",condition:"Used - Like New",features:["Prestige brand positioning","Performance styling","Collector-level appeal","Premium interior"],highlights:["Supports the requested high-ticket range","Designed for showroom-style luxury listings"],keywords:["luxury car","sports car","supercar"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-motorcycle",listingType:"product",category:"Motorcycles",subcategory:"Street Bikes",label:"Sport Motorcycle",brand:"Velocity Moto",model:"R 900",color:"Red",size:"900cc",condition:"Used - Like New",features:["Agile handling","Performance design","Lifestyle buyer appeal","Weekend-ready machine"],highlights:["Automotive category with image-rich display"],keywords:["motorcycle","bike","sport bike"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-commercial",listingType:"product",category:"Commercial Vehicles",subcategory:"Utility Vehicles",label:"Commercial Utility Vehicle",brand:"FleetCore",model:"CargoPro",color:"White",size:"Long wheelbase",condition:"Used - Good",features:["Business-ready load space","Fleet-friendly purchase","Service history presentation","Commercial utility"],highlights:["Suitable for business buyers","Map-ready logistics listing"],keywords:["commercial vehicle","cargo van","fleet"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-boat",listingType:"product",category:"Boats & Marine",subcategory:"Leisure Boats",label:"Leisure Boat",brand:"BlueHarbor",model:"Coastline 28",color:"Navy / White",size:"28 ft",condition:"Used - Like New",features:["Marina-ready presentation","Leisure and charter appeal","Premium leisure category"],highlights:["Large-format gallery support","High-ticket recreational listing"],keywords:["boat","marine","yacht"],requiredImageCount:24,descriptionType:"vehicle"}],ga=[{id:"prop-apartment",listingType:"property",category:"Real Estate",subcategory:"Apartments",label:"City Apartment",propertyType:"Apartment",bedrooms:2,bathrooms:2,buildingSize:"1,150 sqft",landSize:"",furnished:"Furnished",features:["Secure access","Modern kitchen","Prime urban access","Balcony or city views"],highlights:["Strong urban demand","Good for short and long stay buyers"],keywords:["apartment","real estate","city home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-condo",listingType:"property",category:"Real Estate",subcategory:"Condos",label:"Modern Condo",propertyType:"Condo",bedrooms:3,bathrooms:2,buildingSize:"1,450 sqft",landSize:"",furnished:"Furnished",features:["Managed building","Amenity access","Contemporary finish","Secure parking"],highlights:["Works across major global markets"],keywords:["condo","property","home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-townhouse",listingType:"property",category:"Real Estate",subcategory:"Townhouses",label:"Townhouse Residence",propertyType:"Townhouse",bedrooms:4,bathrooms:3,buildingSize:"2,000 sqft",landSize:"0.08 acres",furnished:"Unfurnished",features:["Multi-level layout","Family-ready plan","Private entry","Parking included"],highlights:["Popular residential ownership format"],keywords:["townhouse","residence","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-villa",listingType:"property",category:"Real Estate",subcategory:"Villas",label:"Private Villa",propertyType:"Villa",bedrooms:5,bathrooms:5,buildingSize:"4,800 sqft",landSize:"0.4 acres",furnished:"Furnished",features:["Private outdoor space","Premium architecture","Luxury entertaining zones","Prestige location potential"],highlights:["Premium property tier","Designed for international buyers"],keywords:["villa","luxury property","real estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-mansion",listingType:"property",category:"Real Estate",subcategory:"Mansions",label:"Luxury Mansion",propertyType:"Mansion",bedrooms:8,bathrooms:10,buildingSize:"12,000 sqft",landSize:"1.2 acres",furnished:"Furnished",features:["Grand entrance","High-end interior finishes","Staff or guest quarters","Statement curb appeal"],highlights:["Matches the mansion requirement directly","Supports high-ticket luxury listings"],keywords:["mansion","estate","luxury home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-beach",listingType:"property",category:"Real Estate",subcategory:"Beach Houses",label:"Beachfront House",propertyType:"Beach House",bedrooms:4,bathrooms:4,buildingSize:"3,600 sqft",landSize:"0.25 acres",furnished:"Furnished",features:["Waterfront views","Outdoor leisure space","Vacation-rental appeal","Premium lifestyle positioning"],highlights:["Ideal for tourism and lifestyle markets"],keywords:["beach house","waterfront home","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-farm",listingType:"property",category:"Real Estate",subcategory:"Farm Houses",label:"Farm House Estate",propertyType:"Farm House",bedrooms:4,bathrooms:3,buildingSize:"3,100 sqft",landSize:"5 acres",furnished:"Unfurnished",features:["Land-rich asset","Agricultural potential","Quiet residential use","Outbuilding opportunity"],highlights:["Suitable for rural and suburban regions"],keywords:["farm house","landed property","estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-commercial",listingType:"property",category:"Real Estate",subcategory:"Commercial Buildings",label:"Commercial Building",propertyType:"Commercial Building",bedrooms:0,bathrooms:4,buildingSize:"8,500 sqft",landSize:"0.35 acres",furnished:"Unfurnished",features:["Business district potential","Mixed-use flexibility","Visible frontage","Investor-ready asset class"],highlights:["Attractive for business buyers and investors"],keywords:["commercial building","office","investment property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-hotel",listingType:"property",category:"Real Estate",subcategory:"Hotels",label:"Boutique Hotel",propertyType:"Hotel",bedrooms:18,bathrooms:20,buildingSize:"15,000 sqft",landSize:"0.75 acres",furnished:"Furnished",features:["Hospitality-ready layout","Guest-focused amenities","Tourism and corporate appeal","Revenue asset potential"],highlights:["Supports hospitality listings globally"],keywords:["hotel","hospitality","investment"],requiredImageCount:24,descriptionType:"property"},{id:"prop-land",listingType:"property",category:"Real Estate",subcategory:"Land",label:"Development Land",propertyType:"Land",bedrooms:0,bathrooms:0,buildingSize:"",landSize:"10 acres",furnished:"",features:["Development potential","Flexible use case","Long-term investment appeal","Location-led value"],highlights:["Useful for land banking and development"],keywords:["land","plot","development"],requiredImageCount:24,descriptionType:"property"}],ht=[...ba,...ga];function Oe(e){return aa[e]||"USD"}function vt(e,t){return ht.filter(a=>a.listingType!==e?!1:t?a.category===t:!0)}function ya(e,t){const a=Math.max(L,Math.min(U,Number(e)||L));return new Intl.NumberFormat("en-US",{style:"currency",currency:t,maximumFractionDigits:0}).format(a)}function fa(e,t,a,i,o){const s=ya(i,a);return e.descriptionType==="vehicle"?`${e.label} listed at ${s}. This template is intended to present a complete automotive post with exterior, interior, condition, performance, and gallery details in a clean showroom-style format.`:e.descriptionType==="property"?`${e.label} located in ${o}. Offered at ${s}, this property template is designed for a complete real-estate presentation with map-ready location data, rich visual gallery coverage, and buyer-friendly highlights covering layout, lifestyle, and investment value.`:e.descriptionType==="phone"?`${e.label} listed at ${s}. The template focuses on a clean premium device presentation with brand, model, condition, core features, and strong online merchandising copy.`:e.descriptionType==="laptop"?`${e.label} listed at ${s}. Built for marketplace listings that need clear performance positioning, specification highlights, and an easy-to-scan description for students, professionals, and remote workers.`:e.descriptionType==="luxury"?`${e.label} listed at ${s}. This template supports high-value presentation with polished positioning, premium selling points, and a strong showroom-style description.`:e.descriptionType==="fashion"?`${e.label} listed at ${s}. This product template highlights styling, quality, and day-to-day appeal while keeping the listing easy to customize.`:e.descriptionType==="home"?`${e.label} listed at ${s}. The listing copy is structured for shoppers looking for quality presentation, reliable detail, and visual merchandising support.`:e.descriptionType==="industrial"?`${e.label} listed at ${s}. This template emphasizes practical use, dependable performance, and business or household value in a straightforward format.`:e.descriptionType==="daily"?`${e.label} listed at ${s}. The copy is designed for repeat-buy categories with clear value messaging and broad buyer appeal.`:`${e.label} listed at ${s}. This template generates a clean, marketable listing with ready-made highlights, keywords, and presentation details.`}function xt({templateId:e,listingType:t,category:a,countryCode:i,currency:o,price:s}){const r=ht.find(y=>y.id===e&&y.listingType===t);if(!r)return null;const l=ia(i)||ue[0],d=o||Oe(l.code),c=[l.name].filter(Boolean).join(", "),b={category:r.category||a||(t==="property"?"Real Estate":"Other"),subcategory:r.subcategory||r.label,title:t==="property"?`${r.label} in ${l.name}`:r.label,description:fa(r,l,d,s,c),currency:d,features:[...r.features],highlights:[...r.highlights||[]],seo_keywords:[...new Set([r.category,r.subcategory,r.label,...t==="property"?[l.name]:[],...r.keywords||[]].filter(Boolean))],requiredImageCount:r.requiredImageCount||0};return t==="property"?{...b,country:l.name,country_code:l.code,product_location:l.name,property_type:r.propertyType||r.label,bedrooms:r.bedrooms??null,bathrooms:r.bathrooms??null,building_size:r.buildingSize||"",land_size:r.landSize||"",furnished:r.furnished||""}:{...b,brand:r.brand||"",model:r.model||"",color:r.color||"",size:r.size||"",condition:r.condition||"New"}}const wt="weverseonlineshop@gmail.com",_t="Weverse Online Shop",kt="GLOBAL SHOPPING • WORLDWIDE DELIVERY",ha="https://wttnvwpoqmbxryivcerf.supabase.co".replace(/\/$/,""),va=`${ha}/functions/v1/ai-admin-assistant`,xa=[{group:"Main",items:[{id:"dashboard",label:"Dashboard",icon:"layout-dashboard"},{id:"products",label:"Products",icon:"package"},{id:"properties",label:"Properties",icon:"home"},{id:"catalog",label:"Catalog Manager",icon:"boxes"},{id:"orders",label:"Orders",icon:"shopping-bag"},{id:"customers",label:"Customers",icon:"users"},{id:"reviews",label:"Reviews",icon:"star"},{id:"messages",label:"Messages",icon:"message-circle"},{id:"coupons",label:"Coupons",icon:"ticket"},{id:"ads",label:"Advertisements",icon:"megaphone"},{id:"notifications",label:"Notifications",icon:"bell"}]},{group:"Configuration",items:[{id:"ai",label:"AI Assistant",icon:"sparkles"},{id:"payment-settings",label:"Payment Settings",icon:"credit-card"},{id:"ai-settings",label:"AI Settings",icon:"bot"},{id:"homepage-branding",label:"Homepage Branding",icon:"image"},{id:"brand",label:"Brand Manager",icon:"palette"},{id:"content",label:"Content Manager",icon:"file-text"},{id:"seo",label:"SEO Manager",icon:"search"},{id:"email",label:"Email Settings",icon:"mail"},{id:"analytics",label:"Analytics",icon:"bar-chart-3"},{id:"security",label:"Security",icon:"shield"},{id:"activity",label:"Activity Logs",icon:"activity"},{id:"backup",label:"Backup & Restore",icon:"database"},{id:"settings",label:"Settings",icon:"settings"},{id:"publish",label:"Publish & Deploy",icon:"rocket"}]}],wa={dashboard:"Dashboard",products:"Products Manager",properties:"Properties Manager",catalog:"Catalog Manager",orders:"Orders Manager",customers:"Customers Manager",reviews:"Reviews Manager",messages:"Messages & Support",coupons:"Coupons Manager",ads:"Advertisement Manager","ai-settings":"AI Settings",content:"Content Manager",ai:"AI Assistant","homepage-branding":"Homepage Branding",brand:"Brand Manager","payment-settings":"Payment Settings",seo:"SEO Manager",email:"Email Settings",analytics:"Analytics",security:"Security",activity:"Activity Logs",backup:"Backup & Restore",settings:"Settings",publish:"Publish & Deploy"},St=[...oa].sort();let w={user:null,section:"dashboard"};function n(e){if(e==null)return"";const t=document.createElement("div");return t.textContent=String(e),t.innerHTML}function $t(e,t="USD"){return`${(parseFloat(e)||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})} ${t}`}function N(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"—"}function W(e){return e?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function qe(){return"W-"+String(Date.now()).slice(-6)+Math.floor(Math.random()*1e3).toString().padStart(3,"0")}const _a=["id","property_id","listing_type","category","subcategory","title","description","price","price_period","currency","country","country_code","state","city","town","product_location","latitude","longitude","bedrooms","bathrooms","building_size","land_size","parking_spaces","property_type","furnished","listing_status","images","features","features_text","tags","highlights","seo_keywords","specifications","brand","color","size","condition","warranty","shipping_info","delivery_estimate","weight","dimensions","storage_options","ram_options","color_options","availability_status","stock_quantity","sku","is_active","is_featured","is_ai_generated","ai_generated_fields","rating","rating_count","favorite_count","review_count","video","video_url","approval_status","published_at","created_at","updated_at"];function Y(e){const t={};if(!e||typeof e!="object")return t;for(const a of _a)a in e&&(t[a]=e[a]);return t}function p(e,t="success"){const a=document.getElementById("toast"),i=document.getElementById("toast-msg"),o=a.querySelector("i[data-lucide]");if(!a||!i)return;i.textContent=e;const s={success:"check-circle",error:"alert-circle",info:"info"},r={success:"text-emerald-400",error:"text-red-400",info:"text-blue-400"};o&&(o.setAttribute("data-lucide",s[t]||"info"),o.className=`w-4 h-4 shrink-0 ${r[t]||"text-blue-400"}`),a.style.transform="translateY(0)",a.style.opacity="1",window.lucide&&lucide.createIcons(),clearTimeout(a._t),a._t=setTimeout(()=>{a.style.transform="translateY(20px)",a.style.opacity="0"},3e3)}function C(e){const t={pending_verification:["bg-amber-500/10 text-amber-400 border-amber-500/20","Pending"],approved:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Approved"],rejected:["bg-red-500/10 text-red-400 border-red-500/20","Rejected"],payment_approved:["bg-blue-500/10 text-blue-400 border-blue-500/20","Paid"],order_placed:["bg-amber-500/10 text-amber-400 border-amber-500/20","Placed"],processing:["bg-indigo-500/10 text-indigo-400 border-indigo-500/20","Processing"],shipped:["bg-violet-500/10 text-violet-400 border-violet-500/20","Shipped"],in_transit:["bg-violet-500/10 text-violet-400 border-violet-500/20","In Transit"],out_for_delivery:["bg-cyan-500/10 text-cyan-400 border-cyan-500/20","Out for Delivery"],delivered:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Delivered"],cancelled:["bg-red-500/10 text-red-400 border-red-500/20","Cancelled"],active:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],inactive:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"],sale:["bg-blue-500/10 text-blue-400 border-blue-500/20","For Sale"],rent:["bg-violet-500/10 text-violet-400 border-violet-500/20","For Rent"],true:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],false:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"]},[a,i]=t[String(e)]||["bg-gray-500/10 text-gray-400 border-gray-500/20",n(e)||"—"];return`<span class="badge ${a}">${i}</span>`}function G(){document.getElementById("modal-container").innerHTML=""}function T(e){document.getElementById("modal-container").innerHTML=e,window.lucide&&lucide.createIcons()}function E(e,t,a,i,o=""){const s={blue:"bg-blue-500/10 text-blue-400 border-blue-500/15",amber:"bg-amber-500/10 text-amber-400 border-amber-500/15",emerald:"bg-emerald-500/10 text-emerald-400 border-emerald-500/15",red:"bg-red-500/10 text-red-400 border-red-500/15",violet:"bg-violet-500/10 text-violet-400 border-violet-500/15",blue:"bg-blue-500/10 text-blue-400 border-blue-500/15"};return`<div class="stat-card glass-soft border border-blue-500/15 rounded-3xl p-5">
    <div class="flex items-start justify-between mb-3">
      <div class="p-3 ${s[i]||s.blue} rounded-2xl border"><i data-lucide="${a}" class="w-5 h-5"></i></div>
    </div>
    <p class="text-3xl font-black text-white">${n(t)}</p>
    <p class="text-xs text-gray-500 uppercase tracking-wide mt-1 font-bold">${n(e)}</p>
    ${o?`<p class="text-xs text-gray-600 mt-1">${n(o)}</p>`:""}
  </div>`}function ie(){return'<div class="flex items-center justify-center py-24"><div class="flex items-center gap-3 text-gray-500 text-sm"><i data-lucide="loader-2" class="w-5 h-5 animate-spin text-blue-400"></i> Loading…</div></div>'}function X(e,t,a,i=""){return`<div class="flex flex-col items-center justify-center py-20 text-center"><div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4"><i data-lucide="${e}" class="w-8 h-8 text-blue-400"></i></div><h3 class="text-base font-black text-white mb-1">${n(t)}</h3><p class="text-sm text-gray-500 max-w-xs">${n(a)}</p>${i?`<div class="mt-5">${i}</div>`:""}</div>`}function Pt(){const e=document.getElementById("sidebar-nav");e&&(e.innerHTML=xa.map(t=>`
    <div>
      <span class="section-label">${t.group}</span>
      ${t.items.map(a=>`
        <button class="nav-item ${w.section===a.id?"active":""} w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold rounded-xl" onclick="navigate('${a.id}')">
          <i data-lucide="${a.icon}" class="w-4 h-4 shrink-0"></i>
          <span>${a.label}</span>
        </button>`).join("")}
    </div>`).join(""),window.lucide&&lucide.createIcons())}window.navigate=function(e){w.section=e;const t=wa[e]||e,a=document.getElementById("page-title");a&&(a.textContent=t),Pt(),closeSidebar();const i=document.getElementById("content");i&&(i.innerHTML=ie()),window.lucide&&lucide.createIcons(),({dashboard:Fa,products:P,properties:Ht,catalog:te,orders:Gt,customers:ni,reviews:Xe,messages:Wt,coupons:ye,ads:ee,notifications:di,ai:ka,"ai-settings":Yt,"homepage-branding":ve,content:yi,seo:vi,email:xi,analytics:hi,security:he,activity:wi,brand:xe,"payment-settings":Ne,backup:_i,settings:ki,publish:we}[e]||(()=>{const r=document.getElementById("content");r&&(r.innerHTML=X("construction","Coming Soon",`${t} is being built.`))}))()};async function ka(){const e=document.getElementById("content");e&&(e.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}window.openSidebar=()=>{document.getElementById("sidebar").classList.add("open"),document.getElementById("sidebar-overlay").classList.remove("hidden")};window.closeSidebar=()=>{document.getElementById("sidebar").classList.remove("open"),document.getElementById("sidebar-overlay").classList.add("hidden")};document.getElementById("close-sidebar")?.addEventListener("click",closeSidebar);const K="kco_admin_remember",He="kco_login_attempts",$e=5,Sa=15*60*1e3;function $(e){const t=document.getElementById("login-error"),a=document.getElementById("login-error-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-success")?.classList.add("hidden"),window.lucide&&lucide.createIcons())}function $a(e){const t=document.getElementById("login-success"),a=document.getElementById("login-success-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-error")?.classList.add("hidden"))}function pe(){document.getElementById("login-error")?.classList.add("hidden"),document.getElementById("login-success")?.classList.add("hidden")}function oe(e){return String(e||"").trim().toLowerCase()}function Pa(){try{const e=JSON.parse(localStorage.getItem(K)||"{}");e?.email&&!oe(e.email)&&localStorage.removeItem(K)}catch{localStorage.removeItem(K)}}function Aa(){try{const e=JSON.parse(localStorage.getItem(K)||"{}");return oe(e?.email)}catch{return""}}function Ge(){Pa();const e=Aa(),t=document.getElementById("login-email");t&&(t.value=e||t.value||wt,t.removeAttribute("readonly"));const a=document.getElementById("reset-email");a&&(a.value=e||a.value||"",a.removeAttribute("readonly"))}function Ea(){return`${window.location.origin}/admin.html`}function V(e){const t=document.getElementById("login-header-title"),a=document.getElementById("login-header-icon");document.getElementById("login-form")?.classList.toggle("hidden",e!=="login"),document.getElementById("twofa-form")?.classList.toggle("hidden",e!=="2fa"),document.getElementById("forgot-form")?.classList.toggle("hidden",e!=="forgot"),pe(),e==="login"&&(t&&(t.textContent="Admin Access"),a&&a.setAttribute("data-lucide","shield-check")),e==="2fa"&&(t&&(t.textContent="Two-Factor Auth"),a&&a.setAttribute("data-lucide","smartphone")),e==="forgot"&&(t&&(t.textContent="Reset Password"),a&&a.setAttribute("data-lucide","mail")),window.lucide&&lucide.createIcons()}function S(e,t,a=""){const i=document.getElementById(e);i&&(i.disabled=t,t?i.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline-block mr-1"></i> Please wait…':a&&(i.innerHTML=a),window.lucide&&lucide.createIcons())}function At(){try{return JSON.parse(localStorage.getItem(He)||'{"count":0}')}catch{return{count:0}}}function Et(){const e=At();return e.count=(e.count||0)+1,e.count>=$e&&(e.lockedUntil=Date.now()+Sa),localStorage.setItem(He,JSON.stringify(e)),e}function It(){localStorage.removeItem(He)}function Ct(){const e=At();if(!e.lockedUntil)return null;const t=e.lockedUntil-Date.now();return t<=0?(It(),null):Math.ceil(t/6e4)}async function F(e,t,a={}){try{await u.from("admin_security_logs").insert({user_id:e,event_type:t,ip_address:await Ia(),user_agent:navigator.userAgent.slice(0,200),...a})}catch{}}async function Ia(){try{return(await(await fetch("https://api64.ipify.org?format=json",{signal:AbortSignal.timeout(3e3)})).json()).ip||"unknown"}catch{return"unknown"}}async function Tt(e){if(!e)return!1;let t=!1,a=!1;try{const{data:i}=await u.rpc("is_current_user_admin");t=!0,a=!!i}catch{t=!1}return t?a:oe(e.email)===wt}async function Ca(){const e=window.location.hash;if(e.includes("type=recovery")||e.includes("access_token")){ne(),Ra();return}const{data:{session:t}}=await u.auth.getSession();if(t?.user&&await Tt(t.user)){const{data:{currentUser:i}}=await u.auth.getUser(),o=await u.auth.mfa.getAuthenticatorAssuranceLevel(),s=o.data?.currentLevel;if(o.data?.nextLevel==="aal2"&&s!=="aal2"){w.user=t.user,ne(),V("2fa"),We();return}w.user=t.user,me();return}Ta()}function ne(){const e=document.getElementById("login-screen");e&&(e.style.display="flex")}function Ta(){ne(),V("login"),Ge(),Lt(),Bt(),We(),La();const e=Ct();e&&($(`Too many failed attempts. Try again in ${e} minute${e>1?"s":""}.`),document.getElementById("login-btn").disabled=!0)}function La(){document.getElementById("toggle-pw")?.addEventListener("click",()=>{const e=document.getElementById("login-password"),t=document.querySelector("#toggle-pw i");e&&(e.type=e.type==="password"?"text":"password",t&&t.setAttribute("data-lucide",e.type==="password"?"eye":"eye-off"),window.lucide&&lucide.createIcons())})}function Lt(){const e=document.getElementById("login-form");!e||e._bound||(e._bound=!0,e.addEventListener("submit",Ba),document.getElementById("forgot-pw-btn")?.addEventListener("click",()=>V("forgot")))}async function Ba(e){e.preventDefault();const t=Ct();if(t){$(`Account locked. Try again in ${t} minute${t>1?"s":""}.`);return}const a=document.getElementById("login-email"),i=oe(a?.value);if(!i){$("Enter your admin email address."),S("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const o=document.getElementById("login-password").value,s=document.getElementById("remember-me")?.checked;S("login-btn",!0),pe();const{data:r,error:l}=await u.auth.signInWithPassword({email:i,password:o});if(l||!r.user){const g=String(l?.message||"").toLowerCase();if(g.includes("missing supabase credentials")||g.includes("authentication service is unavailable")){$("Authentication is temporarily unavailable due to configuration. Please contact support."),S("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(g.includes("failed to fetch")||g.includes("network request failed")){$("Network error while signing in. Check your connection and try again."),S("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(g.includes("email not confirmed")){$("Your admin email is not confirmed yet. Open your verification email and confirm first."),S("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const f=Et(),m=$e-f.count,h=f.lockedUntil?`Account locked for 15 minutes after ${$e} failed attempts.`:`Invalid email or password. ${m>0?m+" attempt"+(m!==1?"s":"")+" remaining.":""}`;$(h),S("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),r?.user&&await F(r.user.id,"login_failed",{metadata:{reason:"wrong_password"}});return}if(!await Tt(r.user)){await u.auth.signOut(),$(`Access denied for ${r.user.email}. This account is signed in but does not have administrator privileges.`),S("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),await F(r.user.id,"login_denied",{metadata:{reason:"not_admin"}});return}if(s?localStorage.setItem(K,JSON.stringify({email:i,ts:Date.now()})):localStorage.removeItem(K),It(),w.user=r.user,(await u.auth.mfa.getAuthenticatorAssuranceLevel()).data?.nextLevel==="aal2"){S("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),V("2fa"),We(),setTimeout(()=>document.getElementById("totp-code")?.focus(),100);return}await F(r.user.id,"login_success"),S("login-btn",!1),me()}function We(){const e=document.getElementById("verify-2fa-btn");e&&!e._bound&&(e._bound=!0,e.addEventListener("click",nt));const t=document.getElementById("totp-code");t&&!t._bound&&(t._bound=!0,t.addEventListener("input",i=>{i.target.value=i.target.value.replace(/\D/g,"").slice(0,6),i.target.value.length===6&&nt()})),document.getElementById("cancel-2fa-btn")?.addEventListener("click",async()=>{await u.auth.signOut(),w.user=null,V("login")}),document.getElementById("use-backup-btn")?.addEventListener("click",()=>{document.getElementById("backup-code-wrap")?.classList.toggle("hidden");const o=document.getElementById("backup-code");o&&o.focus()});const a=document.getElementById("verify-backup-btn");a&&!a._bound&&(a._bound=!0,a.addEventListener("click",Ma))}async function nt(){const e=document.getElementById("totp-code")?.value?.trim();if(!e||e.length!==6){$("Enter the 6-digit code from your authenticator app.");return}S("verify-2fa-btn",!0),pe();try{const{data:t}=await u.auth.mfa.listFactors(),a=(t?.totp||[])[0];if(!a){$("No 2FA factor found. Please re-login."),S("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In');return}const{data:i,error:o}=await u.auth.mfa.challenge({factorId:a.id});if(o)throw o;const{error:s}=await u.auth.mfa.verify({factorId:a.id,challengeId:i.id,code:e});if(s)throw s;await F(w.user.id,"login_2fa_success"),S("verify-2fa-btn",!1),me()}catch(t){Et(),$(t.message?.includes("Invalid")?"Incorrect code. Check your authenticator and try again.":t.message),S("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In'),document.getElementById("totp-code").value="",document.getElementById("totp-code").focus()}}async function Ma(){const e=document.getElementById("backup-code")?.value?.trim().toUpperCase().replace(/\s/g,"");if(!e){$("Enter a backup recovery code.");return}S("verify-backup-btn",!0);try{const{data:t}=await u.from("admin_2fa").select("backup_codes").eq("user_id",w.user.id).maybeSingle();if(!t?.backup_codes?.length){$("No backup codes found."),S("verify-backup-btn",!1,"Use Backup Code");return}if(!t.backup_codes.find(o=>(o.code||o).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")&&!o.used)){$("Backup code not found or already used."),S("verify-backup-btn",!1,"Use Backup Code");return}const i=t.backup_codes.map(o=>(o.code||o).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")?{...typeof o=="object"?o:{code:o},used:!0}:o);await u.from("admin_2fa").update({backup_codes:i}).eq("user_id",w.user.id),await F(w.user.id,"login_backup_code_used"),me()}catch(t){$(t.message),S("verify-backup-btn",!1,"Use Backup Code")}}function Bt(){document.getElementById("back-to-login")?.addEventListener("click",()=>V("login")),document.getElementById("send-reset-btn")?.addEventListener("click",Da)}async function Da(){const e=document.getElementById("reset-email"),t=oe(e?.value);if(!t){$("Enter your admin email address to receive a reset link.");return}S("send-reset-btn",!0),pe();const{error:a}=await u.auth.resetPasswordForEmail(t,{redirectTo:Ea()});if(S("send-reset-btn",!1,'<i data-lucide="mail" class="w-4 h-4 inline mr-1"></i> Send Reset Link'),a){$(a.message);return}$a("Reset link sent! Check your inbox and open it from this device to continue.")}function Ra(){const e=document.getElementById("login-screen");if(!e)return;const t=e.querySelector(".login-card");t&&(t.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}window.handlePasswordResetSubmit=async function(){const e=document.getElementById("new-pw-reset")?.value,t=document.getElementById("confirm-pw-reset")?.value,a=document.getElementById("reset-pw-error");if(e!==t){a&&(a.textContent="Passwords do not match.",a.classList.remove("hidden"));return}if((e||"").length<8){a&&(a.textContent="Password must be at least 8 characters.",a.classList.remove("hidden"));return}const{error:i}=await u.auth.updateUser({password:e});if(i){a&&(a.textContent=i.message,a.classList.remove("hidden"));return}p("Password updated! Please log in with your new password."),window.location.hash="",setTimeout(()=>window.location.reload(),1500)};function me(){const e=document.getElementById("login-screen");e&&(e.style.display="none");const t=document.getElementById("admin-user-email");t&&w.user&&(t.textContent=w.user.email||"Admin"),Ge(),navigate("dashboard")}window.adminSignOut=async function(){w.user&&await F(w.user.id,"logout"),await u.auth.signOut(),w.user=null,ne(),V("login"),Ge(),Lt(),Bt()};window.logoutAllDevices=async function(){confirm("This will sign you out on ALL devices. Continue?")&&(w.user&&await F(w.user.id,"logout_all_devices"),await u.auth.signOut({scope:"global"}),w.user=null,p("Signed out from all devices."),setTimeout(()=>window.location.reload(),1200))};async function Fa(){const e=document.getElementById("content");try{const[t,a,i,o]=await Promise.all([u.from("showroom_listings").select("id,listing_type,is_active,price",{count:"exact"}),u.from("payment_receipts").select("id,order_number,amount,status,created_at",{count:"exact"}).order("created_at",{ascending:!1}).limit(200),u.from("profiles").select("user_id,created_at",{count:"exact"}),u.from("product_reviews").select("id,is_approved",{count:"exact"})]),s=t.data||[],r=a.data||[],l=r.filter(v=>["approved","payment_approved","delivered"].includes(v.status)).reduce((v,j)=>v+(parseFloat(j.amount)||0),0),d=r.filter(v=>["pending","pending_verification","processing"].includes(v.status)).length,c=s.filter(v=>v.listing_type!=="property").length,b=s.filter(v=>v.listing_type==="property").length,y=s.filter(v=>v.listing_type!=="property"&&v.is_active).length,g=i.count||0,f=o.count||0,m=(o.data||[]).filter(v=>!v.is_approved).length,h=new Date,I=r.filter(v=>{const j=new Date(v.created_at);return j.getMonth()===h.getMonth()&&j.getFullYear()===h.getFullYear()}).filter(v=>["approved","payment_approved","delivered"].includes(v.status)).reduce((v,j)=>v+(parseFloat(j.amount)||0),0),D=r.slice(0,6);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-black text-white">Good ${qa()}, Admin</h2>
            <p class="text-sm text-gray-500 mt-0.5">${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}</p>
          </div>
          <button onclick="navigate('products')" class="btn-press hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Product
          </button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          ${E("Total Revenue",`$${l.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald",`$${I.toLocaleString("en-US",{maximumFractionDigits:0})} this month`)}
          ${E("Total Orders",r.length,"shopping-bag","blue",`${d} pending`)}
          ${E("Customers",g,"users","violet")}
          ${E("Products",c,"package","amber",`${y} active`)}
          ${E("Properties",b,"home","blue")}
          ${E("Reviews",f,"star","blue",`${m} pending`)}
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
            ${D.length===0?'<p class="text-xs text-gray-500 text-center py-8">No orders yet</p>':D.map(v=>`
                <div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
                  <div class="min-w-0">
                    <p class="text-xs font-bold text-white truncate">${n(v.order_number||v.id?.slice(0,8))}</p>
                    <p class="text-[10px] text-gray-500">${W(v.created_at)}</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0 ml-2">
                    <span class="text-xs font-bold text-emerald-400">$${parseFloat(v.amount||0).toLocaleString("en-US",{maximumFractionDigits:0})}</span>
                    ${C(v.status)}
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
      </div>`,window.lucide&&lucide.createIcons(),Rt(r)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${n(t.message)}</div>`)}}async function P(){const e=document.getElementById("content");try{const{data:t,error:a}=await u.from("showroom_listings").select("*").neq("listing_type","property").order("created_at",{ascending:!1}),i=new Set,o=[];for(const d of a?[]:t||[])d&&d.property_id&&!i.has(d.property_id)&&(i.add(d.property_id),o.push(d));for(const d of je().filter(c=>c.listing_type!=="property"))d&&d.property_id&&!i.has(d.property_id)&&(i.add(d.property_id),o.push(d));if(Array.isArray(M))for(const d of M.filter(c=>c.listing_type!=="property"&&c.property_id))i.has(d.property_id)||(i.add(d.property_id),o.push(d));const s=[...pt,...mt,...bt,...gt];for(const d of s)d&&d.property_id&&d.listing_type!=="property"&&!i.has(d.property_id)&&(i.add(d.property_id),o.push(d));o.sort((d,c)=>new Date(c.created_at||0)-new Date(d.created_at||0));const r=[...new Set(o.map(d=>d.category).filter(Boolean))].sort((d,c)=>d.localeCompare(c)),l=[...new Set(o.flatMap(d=>Array.isArray(d.tags)?d.tags:[]).filter(Boolean))].sort((d,c)=>d.localeCompare(c));window._productFilters||(window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"}),window._productSelection||(window._productSelection=new Set),e.innerHTML=`
      <div class="space-y-5 fade-in">

        <div class="glass-soft border border-blue-500/20 rounded-2xl p-5 sm:p-6">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-blue-300/80">Product Showroom</p>
              <h2 class="text-3xl font-black text-white mt-1">Professional Product Showroom</h2>
              <p class="text-sm text-gray-400 mt-1">Unlimited products, smooth infinite scrolling layout, and clean auto-aligned cards.</p>
            </div>
            <div class="flex items-center gap-2.5 flex-wrap">
              <button onclick="showAddProductStep1()" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-black px-6 py-3.5 rounded-2xl transition shadow-xl shadow-blue-700/25">
                <i data-lucide="plus" class="w-5 h-5"></i> Add Product
              </button>
              <button onclick="clearAllProducts()" class="btn-press flex items-center justify-center gap-2 bg-rose-600/90 hover:bg-rose-500 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition" title="Delete every product from the manager & database. Your showroom catalog stays.">
                <i data-lucide="trash-2" class="w-5 h-5"></i> Clear All Products
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3">
          ${E("Total Products",o.length,"package","blue")}
          ${E("Published",o.filter(d=>!!d.is_active).length,"badge-check","emerald")}
          ${E("Draft / Hidden",o.filter(d=>!d.is_active).length,"file-clock","amber")}
          ${E("Featured",o.filter(d=>!!d.is_featured).length,"sparkles","violet")}
          ${E("Inventory Units",o.reduce((d,c)=>d+(parseInt(c.stock_quantity,10)||0),0),"boxes","blue")}
          ${E("Avg Price",`$${Math.round(o.reduce((d,c)=>d+(parseFloat(c.price)||0),0)/Math.max(o.length,1)).toLocaleString()}`,"dollar-sign","blue")}
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 sm:p-4 space-y-3">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-2.5">
            <div class="xl:col-span-2 relative">
              <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
              <input id="prod-search" type="search" class="input-field pl-9" placeholder="Search by name, SKU, brand, category..." value="${n(window._productFilters.search||"")}" oninput="filterProducts()">
            </div>
            <select id="prod-cat-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Categories</option>
              ${(r.length?r:Ft).map(d=>`<option value="${n(d)}" ${(window._productFilters.category||"")===d?"selected":""}>${n(d)}</option>`).join("")}
            </select>
            <select id="prod-tag-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Tags</option>
              ${l.map(d=>`<option value="${n(d)}" ${(window._productFilters.tag||"")===d?"selected":""}>${n(d)}</option>`).join("")}
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
          <div id="products-empty" class="hidden">${X("package-search","No matching products","Try different filters or add a new product.",'<button onclick="showAddProductStep1()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl">Add Product</button>')}</div>
          <div class="text-center text-[11px] text-gray-500 py-2">Scroll to explore all products. Layout auto-rearranges as products are added, edited, moved, or removed.</div>
        </div>
      </div>`,window._productsData=o,window._productsCardLimit=60,Mt(o),filterProducts(),updateBulkBar(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${n(t.message)}</div>`)}}function O(e){const t=parseFloat(e);return Number.isFinite(t)?t:0}function Pe(e){return Array.isArray(e.tags)?e.tags.filter(Boolean):[]}function Ua(e){const t=O(e.price),a=parseFloat(e.real_price);if(Number.isFinite(a)&&a>0&&a>t)return`${Math.round((1-t/a)*100)}% OFF`;const i=parseFloat(e.discount_percent??e.discount??0);return Number.isFinite(i)&&i>0?`${Math.round(i)}% OFF`:"No discount"}function Na(e){const t=O(e.price),a=parseFloat(e.real_price),i=`$${t.toLocaleString()}`;return Number.isFinite(a)&&a>0&&a>t?`<span class="block text-xs text-gray-400 price-strike line-through">$${a.toLocaleString()}</span><span class="text-emerald-300 font-black">$${t.toLocaleString()}</span>`:i}function ze(e){return e.is_archived||e.availability_status==="Archived"?"archived":e.is_active?"active":"inactive"}function Ae(e){return parseInt(e.views??e.view_count??0,10)||0}function Ee(e){return parseInt(e.sales??e.sales_count??0,10)||0}function Ve(e){return e.sku||e.property_id||"N/A"}function ja(e){const t=e.images&&e.images[0]?e.images[0]:"/fallback.svg",a=Pe(e),i=ze(e),o=window._productSelection?.has(e.property_id),s=C(i==="archived"?"inactive":i==="active"?"active":"inactive"),r=N(e.created_at),l=!!e.is_featured,d=e.is_active?`unpublishProduct('${e.property_id}')`:`publishProduct('${e.property_id}')`,c=e.is_active?"Unpublish":"Publish",b=e.is_active?"bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25";return`<article data-id="${e.property_id}" data-cat="${n(e.category||"")}" data-status="${i}" data-featured="${l?"featured":"standard"}" onclick="editProduct('${e.property_id}')" title="Tap anywhere to edit this product" class="prod-card glass-soft border ${o?"border-blue-400/60":"border-blue-500/15"} rounded-3xl p-5 flex flex-col gap-4 transition hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer select-none active:scale-[.99]">
    <div class="flex items-start gap-4">
      <input type="checkbox" class="prod-check accent-blue-500 w-5 h-5 mt-1 shrink-0" value="${e.property_id}" ${o?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${e.property_id}', this.checked)">
      <div class="relative w-24 h-24 rounded-2xl overflow-hidden border border-blue-500/20 shrink-0 bg-[#0b1124]">
        <img src="${n(t)}" alt="${n(e.title||"Product")}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'">
        ${l?'<span class="absolute top-1.5 left-1.5 text-[10px] font-black px-2 py-0.5 rounded-lg bg-amber-400 text-[#111827]">Featured</span>':""}
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="text-lg font-black text-white leading-snug line-clamp-2">${n(e.title||"Untitled Product")}</h3>
        <p class="text-xs text-gray-500 font-mono mt-1">SKU: ${n(Ve(e))}</p>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          ${s}
          <span class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20">${n(e.category||"Uncategorized")}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2.5 text-sm">
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5">
        <span class="text-gray-400 text-xs">Price</span>
        <p class="text-emerald-300 font-black text-base">
          ${Na(e)}
        </p>
      </div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Discount</span><p class="text-amber-300 font-bold">${n(Ua(e))}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Stock</span><p class="text-gray-200 font-bold">${e.stock_quantity!=null?n(e.stock_quantity):"Unlimited"}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Brand</span><p class="text-gray-200 font-bold truncate">${n(e.brand||"N/A")}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Views</span><p class="text-blue-300 font-bold">${Ae(e).toLocaleString()}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Sales</span><p class="text-cyan-300 font-bold">${Ee(e).toLocaleString()}</p></div>
    </div>

    <div class="flex items-center justify-between text-xs text-gray-500 border-t border-blue-500/10 pt-3">
      <span>Date Added: ${n(r)}</span>
      <span>${(e.images||[]).length} images</span>
    </div>

    <div class="flex flex-wrap gap-2 mt-auto">
      <button onclick="event.stopPropagation();editProduct('${e.property_id}')" class="btn-press flex-1 min-w-[9.5rem] px-5 py-3.5 rounded-2xl text-sm font-black bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition shadow-lg shadow-blue-600/15">Edit Product</button>
      <button onclick="event.stopPropagation();quickEditProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-indigo-500/15 text-indigo-200 hover:bg-indigo-500/25 transition">Quick Edit</button>
      <button onclick="event.stopPropagation();previewProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-sky-500/15 text-sky-200 hover:bg-sky-500/25 transition">Preview</button>
      <button onclick="event.stopPropagation();${d}" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold ${b} transition">${c}</button>
      <button onclick="event.stopPropagation();duplicateProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-white/10 text-gray-200 hover:bg-white/20 transition">Duplicate</button>
      <button onclick="event.stopPropagation();archiveProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-red-500/15 text-red-200 hover:bg-red-500/25 transition">Archive</button>
      <button onclick="event.stopPropagation();shareProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-violet-500/15 text-violet-200 hover:bg-violet-500/25 transition">Share</button>
      <button onclick="event.stopPropagation();deleteProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-rose-600/15 text-rose-200 hover:bg-rose-600/25 transition">Delete</button>
      <button onclick="event.stopPropagation();openProductMoreActions('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-gray-600/20 text-gray-200 hover:bg-gray-600/35 transition">More</button>
    </div>

    ${a.length?`<div class="flex flex-wrap gap-1.5">${a.slice(0,6).map(y=>`<span class="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200">${n(y)}</span>`).join("")}</div>`:'<div class="text-xs text-gray-500">No tags</div>'}
  </article>`}function Oa(e,t){const a=[...e],i=o=>new Date(o||0).getTime()||0;return t==="oldest"?a.sort((o,s)=>i(o.created_at)-i(s.created_at)):t==="price-high"?a.sort((o,s)=>O(s.price)-O(o.price)):t==="price-low"?a.sort((o,s)=>O(o.price)-O(s.price)):t==="sales-high"?a.sort((o,s)=>Ee(s)-Ee(o)):t==="views-high"?a.sort((o,s)=>Ae(s)-Ae(o)):a.sort((o,s)=>i(s.created_at)-i(o.created_at)),a}function Mt(e){const t=document.getElementById("products-grid"),a=document.getElementById("products-empty"),i=document.getElementById("products-result-count");if(!t)return;const o=window._productsCardLimit||60,s=e.slice(0,o);t.innerHTML=s.map(ja).join(""),i&&(i.textContent=String(e.length));const r=document.getElementById("products-more");if(r){const l=e.length-s.length;l>0?r.innerHTML=`<button onclick="loadMoreProducts()" class="btn-press px-8 py-4 rounded-2xl text-base font-black bg-blue-500/15 text-blue-200 hover:bg-blue-500/25 border border-blue-500/25 transition">Show ${Math.min(60,l)} more (${l} left)</button>`:r.innerHTML=e.length>60?'<span class="text-sm text-gray-500">All products shown</span>':""}a&&a.classList.toggle("hidden",e.length>0),updateBulkBar(),window.lucide&&lucide.createIcons()}window.loadMoreProducts=function(){window._productsCardLimit=(window._productsCardLimit||60)+60,filterProducts(!0)};function Dt(e){const t=document.getElementById("products-table-body"),a=document.getElementById("products-result-count");t&&(t.innerHTML=e.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-10">No products found.</td></tr>':e.map(i=>{const o=i.images&&i.images[0]?i.images[0]:"/fallback.svg",s=ze(i),r=window._productSelection?.has(i.property_id),l=i.is_active?`unpublishProduct('${i.property_id}')`:`publishProduct('${i.property_id}')`,d=i.is_active?"Unpublish":"Publish";return`<tr class="prod-table-row" data-id="${i.property_id}" style="cursor:pointer">
          <td>
            <div class="flex items-center gap-2.5" onclick="editProduct('${i.property_id}')">
              <input type="checkbox" class="prod-check accent-blue-500" value="${i.property_id}" ${r?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${i.property_id}', this.checked)">
              <img src="${n(o)}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
              <div class="min-w-0">
                <p class="text-xs font-bold text-white truncate max-w-[160px]">${n(i.title||"Untitled Product")}</p>
                <p class="text-[10px] font-mono text-gray-500">${n(Ve(i))}</p>
              </div>
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${n(i.category||"Uncategorized")}</span></td>
          <td>
            <div class="text-xs">
              ${(()=>{const c=O(i.price),b=parseFloat(i.real_price);return Number.isFinite(b)&&b>0&&b>c?`<span class="text-[10px] text-gray-500 price-strike line-through block">$${b.toLocaleString()}</span><span class="font-bold text-emerald-400">$${c.toLocaleString()}</span>`:`<span class="font-bold text-emerald-400">$${c.toLocaleString()}</span>`})()}
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${i.stock_quantity!=null?n(i.stock_quantity):"Unlimited"}</span></td>
          <td>${C(s==="archived"?"inactive":s==="active"?"active":"inactive")}</td>
          <td><span class="text-xs text-gray-500">${N(i.created_at)}</span></td>
          <td>
            <div class="flex gap-1">
              <button onclick="editProduct('${i.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
              <button onclick="quickEditProduct('${i.property_id}')" class="btn-press p-1.5 text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition" title="Quick Edit"><i data-lucide="sliders-horizontal" class="w-3.5 h-3.5"></i></button>
              <button onclick="${l}" class="btn-press p-1.5 ${i.is_active?"text-amber-400 hover:bg-amber-500/10":"text-emerald-400 hover:bg-emerald-500/10"} rounded-lg transition" title="${d}"><i data-lucide="${i.is_active?"eye-off":"eye"}" class="w-3.5 h-3.5"></i></button>
              <button onclick="archiveProduct('${i.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Archive"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
            </div>
          </td>
        </tr>`}).join(""),a&&(a.textContent=String(e.length)),window.lucide&&lucide.createIcons())}window.setProductView=function(e){window._productView=e==="table"?"table":"card";const t=document.getElementById("products-grid"),a=document.getElementById("products-table-wrap"),i=document.getElementById("view-card-btn"),o=document.getElementById("view-table-btn"),s=document.getElementById("products-empty"),r=window._productsData||[];t&&t.classList.toggle("hidden",e==="table"),a&&(a.classList.toggle("hidden",e!=="table"),e==="table"&&Dt(r)),i&&i.classList.toggle("active",e!=="table"),o&&o.classList.toggle("active",e==="table"),s&&s.classList.toggle("hidden",r.length>0)};window.filterProducts=function(e){const t=window._productFilters||{};t.search=(document.getElementById("prod-search")?.value||"").trim().toLowerCase(),t.category=document.getElementById("prod-cat-filter")?.value||"",t.tag=document.getElementById("prod-tag-filter")?.value||"",t.status=document.getElementById("prod-status-filter")?.value||"",t.featured=document.getElementById("prod-featured-filter")?.value||"",t.sort=document.getElementById("prod-sort")?.value||"newest",window._productFilters=t;const a=(window._productsData||[]).filter(o=>{const s=[o.title,o.brand,o.category,Ve(o),Pe(o).join(" "),o.description].join(" ").toLowerCase();return!(t.search&&!s.includes(t.search)||t.category&&(o.category||"")!==t.category||t.tag&&!Pe(o).includes(t.tag)||t.status&&ze(o)!==t.status||t.featured&&t.featured==="featured"!=!!o.is_featured)}),i=Oa(a,t.sort);e||(window._productsCardLimit=60),Mt(i),window._productView==="table"&&Dt(i)};window.resetProductFilters=function(){window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"},["prod-search","prod-cat-filter","prod-tag-filter","prod-status-filter","prod-featured-filter","prod-sort"].forEach(t=>{const a=document.getElementById(t);a&&(t==="prod-sort"?a.value="newest":a.value="")}),filterProducts()};window.toggleProductSelection=function(e,t){window._productSelection||(window._productSelection=new Set),t?window._productSelection.add(e):window._productSelection.delete(e),updateBulkBar()};window.toggleSelectAll=function(e,t){document.querySelectorAll("."+t).forEach(a=>{a.checked=e.checked;const i=a.value;window._productSelection||(window._productSelection=new Set),e.checked?window._productSelection.add(i):window._productSelection.delete(i)}),updateBulkBar()};window.toggleSelectAllProducts=function(e){document.querySelectorAll(".prod-check").forEach(t=>{t.checked=!!e,window._productSelection||(window._productSelection=new Set),e?window._productSelection.add(t.value):window._productSelection.delete(t.value)}),updateBulkBar()};window.updateBulkBar=function(){const e=window._productSelection?window._productSelection.size:0,t=document.getElementById("bulk-actions"),a=document.getElementById("bulk-count");t&&(t.classList.toggle("hidden",e===0),e>0&&t.classList.add("flex")),a&&(a.textContent=`${e} selected`)};function be(){return window._productSelection?[...window._productSelection]:[]}function B(e){const t=String(e?.message||e?.code||"").toLowerCase();return t.includes("row-level security")||t.includes("permission denied")||t.includes("permission denied for table")||t.includes("new row violates row-level security")||t.includes("not permitted")||t.includes("rls policy")||t.includes("duplicate key")||t.includes("violates foreign key")}function Ie(e,t,a){return e&&B(e)?(p(`⚠️ ${a} blocked: Your account is signed in but the database admin role is not active. Re-run the admin permission migration, or contact the owner.`,"error"),!0):e?(t&&t(),p(`${a} saved locally (DB unavailable): ${e.message||"unknown error"}`,"info"),!0):!1}window.bulkToggleActive=async function(e){const t=be();if(!t.length)return;const a=await Promise.all(t.map(s=>{const r=Y((window._productsData||[]).find(l=>l.property_id===s));return u.from("showroom_listings").upsert({...r,property_id:s,is_active:e},{onConflict:"property_id"})}));if(a.some(s=>s.error&&B(s.error))){p(`⚠️ ${t.length} products NOT ${e?"published":"unpublished"}: database admin role blocked the write. Re-run the admin permission migration.`,"error"),window._productSelection=new Set,P();return}const o=a.filter(s=>s.error).length;p(`${t.length-o}/${t.length} products ${e?"published":"unpublished"}${o?` (${o} failed: ${a.find(s=>s.error)?.error?.message||"error"})`:""}`,o?"error":"success"),window._productSelection=new Set,P()};window.bulkDuplicateProducts=async function(){const e=be();if(e.length){for(const t of e)await duplicateProduct(t,!0);p(`${e.length} products duplicated`),window._productSelection=new Set,P()}};window.bulkArchive=async function(){const e=be();if(!e.length||!confirm(`Archive ${e.length} products? They will be hidden but not deleted.`))return;const t=await Promise.all(e.map(o=>u.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",o)));if(t.some(o=>o.error&&B(o.error))){p("⚠️ Archive blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,P();return}const i=t.filter(o=>o.error).length;p(`${e.length-i}/${e.length} products archived${i?` (${i} failed)`:""}`,i?"error":"success"),window._productSelection=new Set,P()};window.bulkDeleteProducts=async function(){const e=be();if(!e.length||!confirm(`Delete ${e.length} products permanently? This action cannot be undone.`))return;const t=await Promise.all(e.map(o=>u.from("showroom_listings").delete().eq("property_id",o)));if(t.some(o=>o.error&&B(o.error))){p("⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,P();return}const i=t.filter(o=>o.error).length;p(`${e.length-i}/${e.length} products deleted${i?` (${i} failed)`:""}`,i?"error":"success"),window._productSelection=new Set,P()};window.previewProduct=async function(e){const t=await u.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(i=>i.property_id===e)||t.data;if(!a)return p("Product not found","error");T(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Product Live Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">🔙 Back</button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="space-y-2">
            <img src="${n((a.images||[])[0]||"/fallback.svg")}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
            <div class="flex flex-wrap gap-2">${(a.images||[]).slice(0,8).map(i=>`<img src="${n(i)}" class="w-12 h-12 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">`).join("")}</div>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-black text-white">${n(a.title||"Untitled Product")}</h4>
            <div class="flex items-center gap-2">${C(a.is_active?"active":"inactive")}${a.is_featured?'<span class="badge bg-amber-500/15 text-amber-200 border-amber-500/30">Featured</span>':""}</div>
            <p class="text-xs text-gray-400">${n(a.description||"No description")}</p>
            <div class="grid grid-cols-2 gap-2 text-xs mt-2">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">$${O(a.price).toLocaleString()}</p></div>
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
    </div>`)};window.quickEditProduct=async function(e){const t=await u.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(o=>o.property_id===e)||t.data;if(!a)return p("Product not found","error");const i=Array.isArray(a.images)?a.images:[];T(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-black text-white">Quick Edit Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">Back</button>
        </div>
        <form onsubmit="saveQuickEditProduct(event,'${a.property_id}')" class="space-y-4">
          <div><label class="lbl">Title</label><input name="title" class="input-field" value="${n(a.title||"")}"></div>
          <div class="grid grid-cols-2 gap-3">
            <div><label class="lbl">Real Price</label><input type="number" step="0.01" name="real_price" class="input-field" value="${n(a.real_price??a.specifications?.real_price??"")}" placeholder="Original price (crossed out)"></div>
            <div><label class="lbl">Discount Price</label><input type="number" step="0.01" name="price" class="input-field" value="${n(a.price||0)}" placeholder="Price customers pay"></div>
          </div>
          <div><label class="lbl">Availability</label><select name="availability_status" class="input-field">${["In Stock","Out of Stock","Pre-order","Limited Stock","Archived"].map(o=>`<option value="${o}" ${a.availability_status===o?"selected":""}>${o}</option>`).join("")}</select></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Featured</span><input type="checkbox" name="is_featured" ${a.is_featured?"checked":""} class="accent-blue-500 w-5 h-5"></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Published</span><input type="checkbox" name="is_active" ${a.is_active?"checked":""} class="accent-blue-500 w-5 h-5"></div>
          <div>
            <label class="lbl">Gallery Images (up to 24)</label>
            <div id="drop-zone" class="drop-zone" onclick="document.getElementById('img-upload').click()">
              <i data-lucide="image-plus" class="w-10 h-10 text-blue-400 mx-auto mb-2"></i>
              <p class="text-base font-bold text-gray-300">Tap to add photos (up to 24)</p>
              <p class="text-sm text-gray-500 mt-1">PNG, JPG, WEBP. First image is the cover.</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${i.map((o,s)=>se(o,s)).join("")}
            </div>
            <div id="image-url-inputs">${i.map((o,s)=>`<input type="hidden" name="images" id="img-url-${s}" value="${n(o)}">`).join("")}</div>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
          </div>
          <button type="submit" class="btn-press w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-base font-bold">Save Quick Edit</button>
        </form>
      </div>
    </div>`),Ye(),Je(),Q(),Z(),window.lucide&&lucide.createIcons()};window.saveQuickEditProduct=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=[...document.querySelectorAll("#image-preview .img-thumb img")].map(b=>b.getAttribute("src")).filter(b=>b&&!String(b).startsWith("blob:")),o={title:a.get("title")||"Untitled Product",price:Math.max(L,Math.min(U,parseFloat(a.get("price"))||0)),stock_quantity:a.get("stock_quantity")===""?null:parseInt(a.get("stock_quantity"),10),availability_status:a.get("availability_status")||"In Stock",is_featured:a.get("is_featured")==="on",is_active:a.get("is_active")==="on"||i.length>=24,images:i},s=String(a.get("real_price")||"").trim(),r=s===""?null:parseFloat(s);if(r!=null&&!Number.isFinite(r)){p("Real Price must be a number.","error");return}const l=Y((window._productsData||[]).find(b=>b.property_id===t)),d=l.specifications&&typeof l.specifications=="object"?l.specifications:{};o.specifications={...d,real_price:r!=null&&r>0?Math.round(r):null};const{error:c}=await u.from("showroom_listings").upsert({...l,...o,property_id:t},{onConflict:"property_id"});if(c){if(B(c)){p("⚠️ Save blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),G(),P();return}sa(t,o),p("Quick edit saved locally","info")}else p(o.is_active?"Saved & published — your showroom shows it now":"Quick edit saved (draft)");G(),P()};window.publishProduct=function(e){return toggleProductActive(e,!0)};window.unpublishProduct=function(e){return toggleProductActive(e,!1)};window.shareProduct=async function(e){const t=`${window.location.origin}/details.html?id=${encodeURIComponent(e)}`;try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(t),p("Product link copied to clipboard");return}}catch{}window.prompt("Copy product link:",t)};window.deleteProduct=async function(e){if(!confirm("Delete this product permanently? This action cannot be undone."))return;const{error:t}=await u.from("showroom_listings").delete().eq("property_id",e);if(t)return B(t)?p("⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"):p("Delete failed: "+t.message,"error");p("Product deleted"),P()};window.clearAllProducts=async function(){const e=(window._productsData||[]).length;if(!confirm(`Delete ALL ${e} product(s) from the Product Manager and the database now?

This is permanent and cannot be undone. Your built-in showroom catalog will stay.`))return;const{error:t}=await u.from("showroom_listings").delete().neq("property_id","__none__");if(t)return B(t)?p("⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"):p("Clear failed: "+t.message,"error");try{localStorage.removeItem("kco_local_showroom_listings_v1")}catch{}p("All products deleted. The manager now shows your showroom catalog."),P()};window.openProductMoreActions=function(e){T(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">More Actions</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">🔙 Back</button>
        </div>
        <div class="grid grid-cols-1 gap-2">
          <button onclick="previewProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Live Preview</button>
          <button onclick="quickEditProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Quick Edit</button>
          <button onclick="duplicateProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Duplicate</button>
          <button onclick="archiveProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-sm font-semibold text-red-200">Archive</button>
        </div>
      </div>
    </div>`)};function qa(){const e=new Date().getHours();return e<12?"morning":e<17?"afternoon":"evening"}function Rt(e){const t=document.getElementById("chart-revenue");if(!t)return;const a=[],i=new Date;for(let s=5;s>=0;s--){const r=new Date(i.getFullYear(),i.getMonth()-s,1);a.push({label:r.toLocaleString("default",{month:"short"}),month:r.getMonth(),year:r.getFullYear()})}const o=a.map(s=>e.filter(r=>{const l=new Date(r.created_at);return l.getMonth()===s.month&&l.getFullYear()===s.year&&["approved","payment_approved","delivered"].includes(r.status)}).reduce((r,l)=>r+(parseFloat(l.amount)||0),0));new Chart(t,{type:"bar",data:{labels:a.map(s=>s.label),datasets:[{label:"Revenue (USD)",data:o,backgroundColor:"rgba(59,130,246,.6)",borderColor:"rgb(59,130,246)",borderWidth:1,borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"#64748b",callback:s=>"$"+s.toLocaleString()},grid:{color:"rgba(59,130,246,.05)"}},x:{ticks:{color:"#64748b"},grid:{display:!1}}}}})}const Ft=["Electronics","Phones","Computers & Laptops","Fashion","Men's Fashion","Women's Fashion","Shoes","Bags & Accessories","Jewelry","Beauty & Skincare","Home & Kitchen","Furniture","Garden & Outdoor","Toys & Games","Sports & Fitness","Food & Groceries","Baby & Kids","Health & Medical","Books & Education","Office & Stationery","Pet Supplies","Musical Instruments","Cameras & Photography","Watches","Gaming","Software & Digital","Services","Cars","Luxury Cars","Motorcycles","Commercial Vehicles","Boats & Marine","Social Media Accounts","Other"],Ke=["Cars","Luxury Cars","Motorcycles","Commercial Vehicles","Boats & Marine"],z={default:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Phones:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"storage",label:"Storage (e.g. 128GB)",type:"text"},{key:"ram",label:"RAM (e.g. 8GB)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],"Computers & Laptops":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"processor",label:"Processor (CPU)",type:"text"},{key:"ram",label:"RAM",type:"text"},{key:"storage",label:"Storage",type:"text"},{key:"display",label:"Display Size",type:"text"},{key:"graphics",label:"Graphics Card",type:"text"},{key:"os",label:"Operating System",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Electronics:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model Number",type:"text"},{key:"color",label:"Color",type:"text"},{key:"voltage",label:"Voltage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Shoes:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Jewelry:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"material",label:"Material (e.g. 14k Gold)",type:"text"},{key:"gemstone",label:"Gemstone",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Watches:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"movement",label:"Movement (Quartz/Automatic)",type:"text"},{key:"case_material",label:"Case Material",type:"text"},{key:"water_resistance",label:"Water Resistance",type:"text"},{key:"color",label:"Dial Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"description",label:"Description",type:"textarea",span:2}],Gaming:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"platform",label:"Platform (PS5, Xbox, PC…)",type:"text"},{key:"model",label:"Game / Model",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],"Sports & Fitness":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]};["Men's Fashion","Women's Fashion","Fashion"].forEach(e=>z[e]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (T-Shirt, Dress…)",type:"text"},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]);Ke.forEach(e=>z[e]=[{key:"title",label:"Vehicle Title",type:"text",required:!0,span:2,placeholder:"e.g. 2023 Toyota Land Cruiser V8 Turbo Diesel"},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"model_year",label:"Model Year",type:"text",placeholder:"e.g. 2023"},{key:"body_type",label:"Body Type",type:"select",options:["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"]},{key:"mileage",label:"Mileage",type:"text",placeholder:"e.g. 15,000 mi or 0 (new)"},{key:"engine",label:"Engine",type:"text",placeholder:"e.g. 4.0L V8 Turbo Diesel"},{key:"horsepower",label:"Horsepower (HP)",type:"text",placeholder:"e.g. 500 HP"},{key:"transmission",label:"Transmission",type:"select",options:["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"]},{key:"drive_type",label:"Drive Type",type:"select",options:["FWD","RWD","AWD","4WD"]},{key:"fuel_type",label:"Fuel Type",type:"select",options:["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"]},{key:"seating_capacity",label:"Seating Capacity",type:"text",placeholder:"e.g. 5 seats"},{key:"doors",label:"Number of Doors",type:"text",placeholder:"e.g. 4"},{key:"safety_features",label:"Safety Features (comma separated)",type:"text",placeholder:"ABS, Airbags, Lane Assist, Traction Control…"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}]);for(const e of Object.keys(z))z[e]=z[e].flatMap(t=>t.key!=="price"?[t]:[{key:"real_price",label:"Real Price (USD) — crossed out when a discount is active",type:"number",placeholder:"e.g. 250000 — original price before discount"},{...t,label:"Discount Price (USD) — the price customers pay",placeholder:"e.g. 200000 — the price customers actually pay"}]);function Ut(e=""){return ue.map(t=>`<option value="${t.code}" ${e===t.code?"selected":""}>${t.flag} ${t.name}</option>`).join("")}function Nt(e="USD"){return St.map(t=>`<option value="${t}" ${e===t?"selected":""}>${t}</option>`).join("")}function Ce(e){return String(e||"").split(",").map(t=>t.trim()).filter(Boolean)}function x(e,t){const a=document.querySelector(`[name="${e}"]`);!a||t==null||(a.value=t)}function Te(e){const t=document.getElementById(e);t&&(t.min=String(L),t.max=String(U),t.placeholder=`Price (${L} - ${U})`)}function lt(e){const t=document.getElementById(`${e}-country_code`),a=document.getElementById(`${e}-country`),i=document.getElementById(`${e}-currency`);if(!t)return;const o=ue.find(s=>s.code===t.value);a&&o&&(a.value=o.name),i&&o&&(i.value=Oe(o.code))}function le(e,t){const a=document.getElementById(`${e}-image-requirement`),i=document.getElementById(`${e}-required_image_count`);i&&(i.value=t?String(t):""),a&&(t>0?(a.textContent=`This listing template requires at least ${t} images.`,a.classList.remove("hidden")):(a.textContent="",a.classList.add("hidden")))}function jt(e,t,a){if(e>0&&t.length<e)throw new Error(`${a} needs at least ${e} images before publishing.`)}function Le(e,t="full"){const a=document.getElementById("pf-catalog_template_id")?.value||"",i=document.getElementById("pf-currency")?.value||"USD",o=parseFloat(document.getElementById("pf-price")?.value)||L,s=xt({templateId:a,listingType:"product",category:e,countryCode:"US",currency:i,price:o});if(!s){le("pf",Ke.includes(e)?24:0);return}le("pf",s.requiredImageCount||0),x("currency",s.currency),x("subcategory",s.subcategory),x("features_text",s.features.join(", ")),x("highlights_text",s.highlights.join(", ")),x("seo_keywords_text",s.seo_keywords.join(", ")),t==="full"?(x("title",s.title),x("description",s.description),x("brand",s.brand||""),x("model",s.model||""),x("color",s.color||""),x("size",s.size||""),x("condition",s.condition||"New")):x("description",s.description)}function Be(e="full"){const t=document.getElementById("ppf-catalog_template_id")?.value||"",a=document.getElementById("ppf-country_code")?.value||"US",i=document.getElementById("ppf-currency")?.value||"USD",o=parseFloat(document.getElementById("ppf-price")?.value)||L,s=xt({templateId:t,listingType:"property",category:"Real Estate",countryCode:a,currency:i,price:o});if(!s){le("ppf",24);return}le("ppf",s.requiredImageCount||24),x("country",s.country),x("country_code",s.country_code),x("currency",s.currency),x("subcategory",s.subcategory),x("product_location",s.product_location),x("features_text",s.features.join(", ")),x("highlights_text",s.highlights.join(", ")),x("seo_keywords_text",s.seo_keywords.join(", ")),e==="full"?(x("title",s.title),x("description",s.description),x("property_type",s.property_type||""),x("bedrooms",s.bedrooms??""),x("bathrooms",s.bathrooms??""),x("building_size",s.building_size||""),x("land_size",s.land_size||""),x("furnished",s.furnished||"")):x("description",s.description)}window.applyProductCatalogTemplate=function(e,t="full"){Le(e,t)};window.applyPropertyCatalogTemplate=function(e="full"){Be(e)};function Ha(e){return z[e]||z.default}function Ga(e,t={},a=!1){return Ha(e).map(o=>{const s=t[o.key]||"",r=o.span===2?"sm:col-span-2":"",l=!a&&o.required?"required":"",d=o.placeholder||o.label;let c="";if(o.type==="select")c=`<select class="input-field" name="${o.key}" id="pf-${o.key}" ${l}>
        <option value="">Select…</option>
        ${o.options.map(b=>`<option value="${b}" ${s===b?"selected":""}>${b}</option>`).join("")}
      </select>`;else if(o.type==="textarea")c=`<textarea class="input-field" name="${o.key}" id="pf-${o.key}" rows="3" placeholder="Write a detailed description…">${n(s)}</textarea>`;else{const y=["brand","model","color","size","material","platform"].includes(o.key)?`pf-list-${o.key}`:"",f=({brand:["Apple","Samsung","Sony","LG","HP","Dell","Lenovo","Asus","Nike","Adidas","Puma","Gucci","Rolex","Toyota","Mercedes","BMW","Tesla"],model:["Pro","Ultra","Max","SE","Standard","Plus","Series 1","Series 2"],color:["Black","White","Silver","Blue","Red","Green","Gold","Gray","Pink","Brown"],size:["XS","S","M","L","XL","XXL","32","34","36","38","40","42"],material:["Cotton","Leather","Stainless Steel","Aluminum","Wood","Glass","Plastic"],platform:["PS5","Xbox Series X","Nintendo Switch","PC","Android","iOS"]}[o.key]||[]).map(m=>`<option value="${n(m)}"></option>`).join("");c=`<input type="${o.type}" class="input-field" name="${o.key}" id="pf-${o.key}" value="${n(s)}" placeholder="${d}" ${y?`list="${y}"`:""} ${l}>${y?`<datalist id="${y}">${f}</datalist>`:""}`}return`<div class="${r}"><label class="lbl">${o.label}${o.required?a?"":" *":""}</label>${c}</div>`}).join("")}window.showAddProductStep1=function(){T(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Select Product Category</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">🔙 Back</button>
        </div>
        <p class="text-xs text-gray-400 mb-3">Choose the category that best matches your product. The form will show smart fields automatically.</p>
        <div class="relative mb-3">
          <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
          <input id="product-category-search" type="search" class="input-field pl-9" placeholder="Search category..." oninput="filterProductCategoryChoices(this.value)">
        </div>
        <div id="product-category-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-96 overflow-y-auto scrollbar-thin pr-1">
          ${Ft.map(e=>`
            <button data-category="${n(e).toLowerCase()}" onclick="showAddProductStep2('${e.replace(/'/g,"\\'")}')" class="btn-press flex items-center gap-3 p-4 glass-soft border border-blue-500/15 hover:border-blue-500/40 rounded-2xl transition text-left">
              <i data-lucide="tag" class="w-5 h-5 text-blue-400 shrink-0"></i>
              <span class="text-sm font-semibold text-gray-200">${n(e)}</span>
            </button>`).join("")}
        </div>
      </div>
    </div>`)};window.filterProductCategoryChoices=function(e){const t=String(e||"").trim().toLowerCase();document.querySelectorAll("#product-category-grid [data-category]").forEach(a=>{const i=!t||a.dataset.category.includes(t);a.classList.toggle("hidden",!i)})};window.showAddProductStep2=function(e,t={}){const a=!!t.property_id,i=vt("product",e),o=t.currency||"USD";T(`
    <div class="modal-overlay" onclick="if(event.target===this)closeProductFormModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between gap-3 mb-6">
          <div class="min-w-0">
            <h3 class="text-2xl font-black text-white">${a?"Edit Product":"Add Product"} — ${n(e)}</h3>
            <p class="text-sm text-gray-500 mt-1 truncate">${a?`Editing: ${n(t.property_id)}`:"Fill in the product details below"}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${a?'<button type="button" onclick="closeProductFormModal()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Product Manager</button>':'<button type="button" onclick="showAddProductStep1()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5" title="Change category"><i data-lucide="arrow-left" class="w-4 h-4"></i> Category</button>'}
            <button type="button" onclick="closeProductFormModal()" class="btn-press px-4 h-11 flex items-center justify-center rounded-xl text-sm font-bold uppercase tracking-wide text-gray-400 hover:text-white hover:bg-gray-800 transition" title="Close (X) — return to Product Manager">
              Back
            </button>
          </div>
        </div>

        <form id="product-form" onsubmit="saveProduct(event,'${n(e)}','${a?t.property_id:""}')" class="space-y-6">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-sm font-bold text-white uppercase tracking-wide">Global Catalog Autofill</p>
                <p class="text-sm text-gray-500 mt-1">Pick a template, country, and currency to auto-build the listing title, description, and metadata.</p>
              </div>
              <button type="button" onclick="applyProductCatalogTemplate('${n(e)}')" class="btn-press px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition">Refresh Template</button>
            </div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Catalog Template</label><select class="input-field" name="catalog_template_id" id="pf-catalog_template_id" onchange="applyProductCatalogTemplate('${n(e)}')"><option value="">Choose a template...</option>${i.map(s=>`<option value="${s.id}">${n(s.label)} - ${n(s.subcategory||s.category)}</option>`).join("")}</select></div>
              <div class="sm:col-span-2"><label class="lbl">Currency</label><select class="input-field" name="currency" id="pf-currency" onchange="applyProductCatalogTemplate('${n(e)}')">${Nt(o)}</select></div>
            </div>
            <p id="pf-image-requirement" class="hidden text-sm text-amber-300"></p>
            <input type="hidden" name="required_image_count" id="pf-required_image_count" value="">
          </div>

          <div id="product-autosave-note" class="hidden p-4 rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-sm text-emerald-200"></div>

          <!-- Step 1: Image Upload -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <label class="lbl !mb-0">Step 1: Upload Product Images</label>
              <span class="text-sm text-gray-500">Upload one or multiple images before publishing</span>
            </div>
            <div id="drop-zone" class="drop-zone" onclick="document.getElementById('img-upload').click()">
              <i data-lucide="image-plus" class="w-12 h-12 text-blue-400 mx-auto mb-3"></i>
              <p class="text-lg font-bold text-gray-300">Click or drag & drop images here</p>
              <p class="text-sm text-gray-500 mt-1">PNG, JPG, WEBP up to 5MB each. First image = cover.</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${(t.images||[]).map((s,r)=>se(s,r)).join("")}
            </div>
            <p class="text-sm text-gray-500 mt-1">Drag to reorder • Click X to remove • First image is cover • Upload up to 24 gallery images</p>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
            <div id="image-url-inputs">
              ${(t.images||[]).map((s,r)=>`<input type="hidden" name="images" id="img-url-${r}" value="${n(s)}">`).join("")}
            </div>
          </div>

          <!-- AI Product Scanner (manual only — never auto-scans on upload) -->
          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="min-w-0">
                <p class="text-sm font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> AI Product Scanner</p>
                <p class="text-xs text-gray-500 mt-1">Reads your uploaded images and fills the form for you. Powered by Google Gemini free tier — add your FREE key in AI Settings if not set. Only runs when you press the button.</p>
              </div>
              <button type="button" id="btn-scan-ai" onclick="scanProductWithAI()" class="btn-press px-5 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold rounded-xl transition flex items-center gap-2 shrink-0">
                <i data-lucide="sparkles" class="w-4 h-4"></i> SCAN WITH AI
              </button>
            </div>
            <p id="scan-ai-status" class="hidden text-sm mt-3 font-medium"></p>
          </div>

          <!-- Step 2: Product Details -->
          <div class="text-sm text-blue-200 font-bold uppercase tracking-wide">Step 2: Product Details</div>
          <div class="form-grid form-grid-2">
            ${Ga(e,t,a)}
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
              <p class="text-sm text-gray-500 mt-1">Allowed price range is ${L} to ${U} in the selected currency.</p>
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
    </div>`),Ye(),Je(),Te("pf-price"),Te("pf-real_price"),Le(e,"pricing"),document.getElementById("pf-price")?.addEventListener("input",()=>Le(e,"pricing")),Ka(e,t.property_id||""),window._pfEscapeHandler=s=>{s.key==="Escape"&&closeProductFormModal()},document.addEventListener("keydown",window._pfEscapeHandler)};window.closeProductFormModal=function(){window._pfEscapeHandler&&(document.removeEventListener("keydown",window._pfEscapeHandler),window._pfEscapeHandler=null),G(),P()};window.switchProductFormCategory=function(e){const t=document.getElementById("product-form");if(!t)return;const a={},i=new FormData(t);for(const[o,s]of i.entries())o==="images"?(a.images=a.images||[],s&&!String(s).startsWith("blob:")&&a.images.push(String(s))):o==="tags"?(a.tags=a.tags||[],a.tags.push(s)):a[o]=s;a.is_featured=t.querySelector('[name="is_featured"]')?.checked||!1,a.is_active=t.querySelector('[name="is_active"]')?.checked||!1,a.property_id&&String(a.property_id).trim()?showAddProductStep2(e,a):showAddProductStep2(e,{images:a.images||[],...a})};function se(e,t){return`<div class="img-thumb ${t===0?"cover-img":""}" data-index="${t}" title="${t===0?"Cover Image":"Image "+(t+1)}">
    <img src="${n(e)}" onerror="this.src='/fallback.svg'">
    <button class="rp" onclick="document.getElementById('rp-input-${t}').click()" type="button" title="Replace image">↻</button>
    <input type="file" accept="image/*" class="rp-input" id="rp-input-${t}" onchange="replaceImage(${t}, this)">
    <button class="rm" onclick="removeImage(${t})" type="button">🔙</button>
  </div>`}function Ye(){const e=document.getElementById("drop-zone");e&&(e.addEventListener("dragover",t=>{t.preventDefault(),e.classList.add("drag-over")}),e.addEventListener("dragleave",()=>e.classList.remove("drag-over")),e.addEventListener("drop",t=>{t.preventDefault(),e.classList.remove("drag-over"),Wa(t.dataTransfer.files)}))}function Je(){const e=document.getElementById("image-preview");!e||!window.Sortable||new Sortable(e,{animation:150,onEnd:()=>Q()})}window.handleImageUpload=async function(e){await Ot(e.target.files)};async function Wa(e){await Ot(e)}async function Ot(e){const t=document.getElementById("image-preview");if(t){for(const a of e){if(!a.type.startsWith("image/"))continue;const i=await qt(a);if(i){const o=t.children.length,s=document.createElement("div");s.innerHTML=se(i,o),t.appendChild(s.firstElementChild),Q()}}ge(),Z(),window.lucide&&lucide.createIcons()}}async function qt(e){try{const{data:{session:t}}=await u.auth.getSession();if(!t)return URL.createObjectURL(e);const a=e.name.split(".").pop(),i=`products/${Date.now()}-${Math.random().toString(36).slice(2)}.${a}`,{error:o}=await u.storage.from("product-images").upload(i,e,{contentType:e.type,upsert:!1});if(o)return URL.createObjectURL(e);const{data:s}=u.storage.from("product-images").getPublicUrl(i);return s.publicUrl}catch{return URL.createObjectURL(e)}}window.removeImage=function(e){const t=document.getElementById("image-preview");if(!t)return;const a=[...t.children];a[e]&&a[e].remove(),Q(),ge(),Z()};window.replaceImage=async function(e,t){const a=document.getElementById("image-preview");if(!a||!t||!t.files||!t.files[0])return;const i=t.files[0];if(!i.type.startsWith("image/")){p("Please choose an image file.","error");return}const o=await qt(i);if(!o)return;const r=[...a.querySelectorAll(".img-thumb")][e];if(!r)return;const l=r.querySelector("img");l&&(l.src=o),Q(),ge(),Z(),p("Image replaced. Save changes to apply.","info")};function Q(){const e=document.getElementById("image-preview"),t=document.getElementById("image-url-inputs");!e||!t||(t.innerHTML="",[...e.querySelectorAll(".img-thumb")].forEach((a,i)=>{const o=a.querySelector("img");if(!o)return;const s=document.createElement("input");s.type="hidden",s.name="images",s.id=`img-url-${i}`,s.value=o.src,t.appendChild(s),a.dataset.index=i;const r=a.querySelector(".rm");r&&r.setAttribute("onclick",`removeImage(${i})`);const l=a.querySelector(".rp");l&&l.setAttribute("onclick",`document.getElementById('rp-input-${i}').click()`);const d=a.querySelector(".rp-input");d&&(d.id=`rp-input-${i}`,d.onchange=()=>replaceImage(i,d))}))}function ge(){const e=document.getElementById("image-preview");e&&[...e.querySelectorAll(".img-thumb")].forEach((t,a)=>{t.classList.toggle("cover-img",a===0),t.title=a===0?"Cover Image":`Image ${a+1}`})}function Z(){const e=document.getElementById("image-preview"),t=document.getElementById("gallery-counter");if(!e||!t)return;const a=e.querySelectorAll(".img-thumb").length,i=a>=24;t.textContent=i?"✓ "+a+" / 24 images — this product will auto-publish on save":a+" / 24 images"+(a>=12?" — almost there, keep going for a full gallery":""),t.className="text-sm mt-1 font-bold "+(i?"text-emerald-300":"text-gray-400");const o=document.querySelector('#product-form [name="is_active"]');i&&o&&!o.checked&&(o.checked=!0)}function Me(e,t){return`kco_product_form_autosave_${e}_${t||"new"}`}function za(e){const t=new FormData(e),a={images:[],tags:[],fields:{}};for(const[i,o]of t.entries())i==="images"?o&&!String(o).startsWith("blob:")&&a.images.push(String(o)):i==="tags"?a.tags.push(String(o)):a.fields[i]=String(o);return a.fields.is_featured=e.querySelector('[name="is_featured"]')?.checked?"on":"",a.fields.is_active=e.querySelector('[name="is_active"]')?.checked?"on":"",a}function Va(e,t){if(!t||typeof t!="object")return!1;const a=t.fields||{};Object.entries(a).forEach(([o,s])=>{const r=e.querySelector(`[name="${o}"]`);r&&(r.type==="checkbox"?r.checked=s==="on"||s===!0:r.value=s==null?"":String(s))});const i=Array.isArray(t.tags)?t.tags:[];if(e.querySelectorAll('input[name="tags"]').forEach(o=>{o.checked=i.includes(o.value)}),Array.isArray(t.images)){const o=document.getElementById("image-preview");o&&(o.innerHTML=t.images.map((s,r)=>se(s,r)).join(""),Q(),ge(),Z())}return!0}function De(){const e=document.getElementById("product-review-content"),t=document.getElementById("product-form");if(!e||!t)return;const a=t.querySelector('[name="title"]')?.value||"Untitled Product",i=t.querySelector('[name="brand"]')?.value||"N/A",o=parseFloat(t.querySelector('[name="price"]')?.value||"0")||0,s=parseFloat(t.querySelector('[name="real_price"]')?.value||"0")||0,r=t.querySelector('[name="stock_quantity"]')?.value,l=r===""||r==null?"Unlimited":r,d=w.section==="products"&&document.querySelector("#product-form")?.dataset?.category||"",c=[...t.querySelectorAll('input[name="tags"]:checked')].map(g=>g.value),b=document.querySelectorAll("#image-preview .img-thumb").length,y=t.querySelector('[name="is_active"]')?.checked;e.innerHTML=`
    <div class="grid grid-cols-2 gap-2">
      <div><span class="text-gray-500">Title</span><p class="text-white font-semibold">${n(a)}</p></div>
      <div><span class="text-gray-500">Brand</span><p class="text-white font-semibold">${n(i)}</p></div>
      <div><span class="text-gray-500">Price</span><p class="text-emerald-300 font-semibold">${s>o?`<span class="line-through text-gray-500 mr-1">$${s.toLocaleString()}</span>`:""}$${o.toLocaleString()}</p></div>
      <div><span class="text-gray-500">Stock</span><p class="text-white font-semibold">${n(l)}</p></div>
      <div><span class="text-gray-500">Images</span><p class="text-white font-semibold">${b}</p></div>
      <div><span class="text-gray-500">Status</span><p class="${y?"text-emerald-300":"text-amber-300"} font-semibold">${y?"Published":"Draft / Hidden"}</p></div>
    </div>
    <div class="mt-2 text-gray-400">Tags: ${c.length?n(c.join(", ")):"No tags selected"}</div>
    ${d?`<div class="text-gray-500 mt-1">Category: ${n(d)}</div>`:""}
  `}window.previewProductDraft=function(){const e=document.getElementById("product-form");if(!e)return;const t=document.querySelector("#image-preview img")?.src||"/fallback.svg",a=e.querySelector('[name="title"]')?.value||"Untitled Product",i=e.querySelector('[name="description"]')?.value||"No description yet.",o=e.querySelector('[name="brand"]')?.value||"N/A",s=parseFloat(e.querySelector('[name="price"]')?.value||"0")||0,r=parseFloat(e.querySelector('[name="real_price"]')?.value||"0")||0,l=e.dataset.category||"Product",d=e.querySelector('[name="stock_quantity"]')?.value||"Unlimited",c=e.querySelector('[name="is_active"]')?.checked;T(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Live Draft Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">🔙 Back</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="${n(t)}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
          <div class="space-y-2">
            <h4 class="text-xl font-black text-white">${n(a)}</h4>
            <div class="flex items-center gap-2">${C(c?"active":"inactive")}<span class="badge bg-blue-500/10 text-blue-300 border-blue-500/20">${n(l)}</span></div>
            <p class="text-sm text-gray-400">${n(i)}</p>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">${r>s?`<span class="text-xs line-through text-gray-500 mr-1">$${r.toLocaleString()}</span>`:""}$${s.toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${n(d)}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2 col-span-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${n(o)}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>`)};function Ka(e,t){const a=document.getElementById("product-form");if(!a)return;a.dataset.category=e;const i=Me(e,t),o=document.getElementById("product-autosave-note");if(!t)try{const d=localStorage.getItem(i);if(d){const c=JSON.parse(d);Va(a,c)&&o&&(o.textContent="Autosave restored from your last session.",o.classList.remove("hidden"))}}catch{}const s=()=>{try{localStorage.setItem(i,JSON.stringify(za(a))),o&&(o.textContent=`Auto saved at ${new Date().toLocaleTimeString()}`,o.classList.remove("hidden"))}catch{}De()};let r;const l=()=>{clearTimeout(r),r=setTimeout(s,500)};a.querySelectorAll("input, textarea, select").forEach(d=>{d.addEventListener("input",l),d.addEventListener("change",l)}),De(),Z()}const Ya=["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],Ja=["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"],Xa=["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"],Qa=["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"],Za=["FWD","RWD","AWD","4WD"],ei={activeProvider:"gemini",maxImages:5,PROVIDERS:{gemini:{label:"Google Gemini (Free Tier)",scan:async(e,t)=>{const a=typeof t.onProgress=="function"?t.onProgress:()=>{};a(1,"Identifying the exact product from your images…");const i=await H.identifyProduct(e,t);if(!i||i.identified===!1)return{identification:i,specs:null,price:null};a(2,"Completing the standard specifications for that product…");const o=await H.completeProductSpecs(e,i,t);a(3,"Estimating a fair current market price…");let s=null;try{s=await H.estimateProductPrice(e,i,o,t)}catch{}return{identification:i,specs:o,price:s}}}},async scan(e,t){const a=this.PROVIDERS[this.activeProvider];if(!a)throw new Error(`Scanner provider "${this.activeProvider}" is not configured.`);return a.scan((e||[]).slice(0,this.maxImages),t)}};function ti(e,t){const a=[...e.options||[]].map(r=>r.value).filter(Boolean);if(a.includes(String(t)))return String(t);const i={petrol:"Gasoline",gas:"Gasoline",gasoline:"Gasoline",unleaded:"Gasoline",ev:"Electric",electric:"Electric","fully electric":"Electric",hybrid:"Hybrid","hybrid electric":"Hybrid","plug-in hybrid":"Plug-in Hybrid",phev:"Plug-in Hybrid",auto:"Automatic",automatic:"Automatic","automatic transmission":"Automatic",manual:"Manual","manual transmission":"Manual",cvt:"CVT","continuously variable":"CVT","dual clutch":"Dual-Clutch",dct:"Dual-Clutch",fwd:"FWD","front-wheel drive":"FWD","front wheel drive":"FWD",rwd:"RWD","rear-wheel drive":"RWD","rear wheel drive":"RWD",awd:"AWD","all-wheel drive":"AWD","all wheel drive":"AWD","4wd":"4WD","four-wheel drive":"4WD","four wheel drive":"4WD","4x4":"4WD",sedan:"Sedan",saloon:"Sedan",suv:"SUV",hatchback:"Hatchback",coupe:"Coupe",coupé:"Coupe",convertible:"Convertible",wagon:"Wagon",estate:"Wagon",pickup:"Pickup","pick up":"Pickup",van:"Van",truck:"Truck","sports car":"Sports Car",motorcycle:"Motorcycle",yacht:"Yacht","like new":"Used - Like New","used - like new":"Used - Like New"},o=String(t).toLowerCase().trim();return i[o]?i[o]:a.find(r=>r.toLowerCase().includes(o)||o.includes(r.toLowerCase()))||null}function ai(e){const t=[];return e.year&&t.push(e.year),e.brand&&t.push(e.brand),e.model&&t.push(e.model),!e.model&&e.body_type&&t.push(e.body_type),t.join(" ")||e.detected_name||""}function ii(e){const t=e&&e.identification&&e.identification.identified!==!1?e.identification:{},a=e&&e.specs?e.specs:{},i=e&&e.price?e.price:null,o=[],s=m=>Array.isArray(m)?m.join(", "):String(m??"").trim(),r=(m,h,_)=>{if(h==null||s([h])==="")return;const I=document.querySelector(`#product-form [name="${m}"]`);if(!I)return;let D=String(h);if(_&&!_.includes(D)){const v=ti(I,D);if(v===null)return;D=v}I.value=D,o.push(m)};r("brand",t.brand),r("model",t.model),r("color",t.color),r("condition",t.condition,Ya),r("subcategory",t.subcategory),r("body_type",t.body_type||a.body_type,Ja),r("model_year",t.year||a.model_year),r("title",a.title||ai(t)),r("description",a.description),r("engine",a.engine),r("transmission",a.transmission,Xa),r("fuel_type",a.fuel_type,Qa),r("drive_type",a.drive_type,Za),r("horsepower",a.horsepower),r("mileage",a.mileage),r("seating_capacity",a.seating_capacity),r("doors",a.doors),r("safety_features",s(a.safety_features)),r("storage",a.storage),r("ram",a.ram),r("processor",a.processor),r("display",a.display),r("graphics",a.graphics),r("os",a.os),r("material",a.material),r("size",a.size),r("gender",a.gender),r("platform",a.platform);const l=document.querySelector('#product-form [name="price"]'),d=document.querySelector('#product-form [name="real_price"]'),c=i?Number(i.estimated_price):NaN,b=i?Number(i.suggested_discount_price):NaN,y=Number.isFinite(Number(L))?Number(L):0,g=Number.isFinite(Number(U))?Number(U):999999999,f=m=>Math.max(y,Math.min(g,Math.round(m)));if(Number.isFinite(c)&&c>0){d&&(d.value=String(f(c)),o.push("real_price"));const m=Number.isFinite(b)&&b>0&&b<c?b:c;l&&(l.value=String(f(m)),o.push("price"))}return De(),{filled:o}}window.scanProductWithAI=async function(){const e=document.getElementById("product-form");if(!e){p("Open the product form first.","error");return}const t=document.getElementById("btn-scan-ai"),a=document.getElementById("scan-ai-status"),i=[...document.querySelectorAll('#image-url-inputs [name="images"]')||[]].map(r=>r.value).filter(Boolean);if(!i.length){p("Upload at least one product image before scanning.","error");return}const o=t?t.innerHTML:"",s=(r,l)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300"),l&&a.classList.add(l),a.textContent=r)};try{const r=await H.getConfig();if(!String(r.gemini_key||r.gemini_api_key||"").trim()){s("No Gemini key yet. Open AI Settings at the bottom of the Admin Home page, paste your FREE Gemini API key (aistudio.google.com/apikey — no credit card needed), then scan again.","text-amber-300"),p("Add your free Gemini key in AI Settings first.","error");return}}catch{}t&&(t.disabled=!0,t.innerHTML="Scanning…"),s("Reading your uploaded images…","text-blue-300");try{const r=await ei.scan(i,{category:e.dataset.category||"",onProgress:(g,f)=>s(f,"text-blue-300")}),l=r?r.identification:null;if(!l||l.identified===!1){s(l&&l.reason?`Could not identify the product: ${n(l.reason)}`:"The product could not be read from these images. Make sure the photos clearly show it, then try again.","text-amber-300"),p("The product could not be identified from the images.","error");return}const d=[l.year,l.brand,l.model].filter(Boolean).join(" ")||l.detected_name||"the product",b=ii(r).filled;let y=`${n(d)} — ${b.length} field${b.length>1?"s":""} ready for you (including the detailed description and suggested Real + Discount prices). Review and edit everything, then press SAVE / UPDATE.`;l.year_estimated&&(y+=" Confirm the model year before saving."),s(y,"text-emerald-300"),p(`Review ${d}, then press SAVE / UPDATE.`,"success")}catch(r){const l=String(r?.message||r),d=/key|api|configured|settings|vision/i.test(l);s(d?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${l}`,"text-red-400"),p("AI scan failed.","error")}finally{t&&(t.disabled=!1,t.innerHTML=o),window.lucide&&lucide.createIcons()}};window.saveProduct=async function(e,t,a){e.preventDefault();const i=e.target,o=i.querySelector("[type=submit][name=action][value=publish]"),s=a?"One-Click Publish Changes":"One-Click Publish Product";o&&(o.disabled=!0,o.textContent="Saving…");try{const r=new FormData(i),l={};for(const[g,f]of r.entries())g==="images"?(l.images=l.images||[],f&&!String(f).startsWith("blob:")&&l.images.push(String(f))):g==="tags"?(l.tags=l.tags||[],l.tags.push(f)):l[g]=f;l.is_featured=i.querySelector('[name="is_featured"]')?.checked?"on":"",l.is_active=i.querySelector('[name="is_active"]')?.checked?"on":"";const d=r.get("action")==="draft",c=g=>Ce(g),b=g=>{const f=["model","storage","ram","processor","display","material","gender","platform","voltage","engine","transmission","fuel_type","horsepower","mileage","drive_type","body_type","model_year","seating_capacity","doors","real_price"],m={};for(const h of f){const _=g[h];if(h==="real_price"){const I=_!=null&&String(_).trim()!==""?parseFloat(_):null;m[h]=I!=null&&Number.isFinite(I)&&I>0?Math.round(I):null;continue}m[h]=_!=null&&String(_).trim()!==""?_:null}if(g.safety_features){const h=c(g.safety_features);m.safety_features=h.length?h:null}return m};let y;if(a){let g=Y((window._productsData||[]).find(A=>A.property_id===a));if(!g){const{data:A}=await u.from("showroom_listings").select("*").eq("property_id",a).maybeSingle();g=A?Y(A):null}if(!g)throw new Error("Could not load the current product. Refresh the page and try again.");const f=(A,_e)=>{const ea=A===""||A==null?"":A,ta=_e===""||_e==null?"":_e;return String(ea).trim()===String(ta).trim()},m={};["title","description","currency","subcategory","brand","color","size","condition","warranty","availability_status"].forEach(A=>{f(l[A],g[A])||(m[A]=l[A]==null||l[A]===""?null:l[A])});const h=l.price===""||l.price==null?null:parseFloat(l.price);f(h,g.price)||(m.price=h==null?g.price:Math.max(L,Math.min(U,h)));const _=l.stock_quantity===""||l.stock_quantity==null?null:parseInt(l.stock_quantity,10);f(_,g.stock_quantity)||(m.stock_quantity=Number.isFinite(_)?_:null);const I=c(l.features_text);f(I.join("||"),(Array.isArray(g.features)?g.features:[]).join("||"))||(m.features=I);const D=l.tags||[];f(D.join("||"),(Array.isArray(g.tags)?g.tags:[]).join("||"))||(m.tags=D);const v=c(l.highlights_text);f(v.join("||"),(Array.isArray(g.highlights)?g.highlights:[]).join("||"))||(m.highlights=v);const j=c(l.seo_keywords_text);f(j.join("||"),(Array.isArray(g.seo_keywords)?g.seo_keywords:[]).join("||"))||(m.seo_keywords=j);const tt=l.images||[];f(tt.join("||"),(Array.isArray(g.images)?g.images:[]).join("||"))||(m.images=tt);const at=l.is_featured==="on";!!g.is_featured!==at&&(m.is_featured=at);const it=d?!1:l.is_active==="on"||(l.images||[]).length>=24;!!g.is_active!==it&&(m.is_active=it);const Zt=b(l),ot={...g.specifications&&typeof g.specifications=="object"?g.specifications:{},...Zt};if(JSON.stringify(ot)!==JSON.stringify(g.specifications||{})&&(m.specifications=ot),Object.keys(m).length===0){p("No changes detected — nothing was saved.","info");try{localStorage.removeItem(Me(t,a))}catch{}o&&(o.disabled=!1,o.textContent=s);return}const st={...g,...m,property_id:a,updated_at:new Date().toISOString()};if({error:y}=await u.from("showroom_listings").upsert(st,{onConflict:"property_id"}),y&&Ie(y,()=>Se(st),"Product update")){o&&(o.disabled=!1,o.textContent=s);return}p(d?"Draft saved!":`Saved & published — your showroom shows it now (${Object.keys(m).length} change${Object.keys(m).length>1?"s":""}).`)}else{const g=parseInt(l.required_image_count||"0",10)||(Ke.includes(t)?24:0);if(jt(g,l.images||[],"This listing"),!l.title||!l.title.trim())throw new Error("A product title is required.");if(l.price===""||l.price==null||!isFinite(parseFloat(l.price)))throw new Error("A price is required.");if(!l.condition)throw new Error("Please choose the product condition.");const f={listing_type:"product",category:t,subcategory:l.subcategory||null,title:l.title.trim(),description:l.description||"",price:Math.max(L,Math.min(U,parseFloat(l.price)||0)),currency:l.currency||"USD",country:"",country_code:"",listing_status:"sale",state:"",city:"",product_location:"",latitude:null,longitude:null,is_active:d?!1:l.is_active==="on"||(l.images||[]).length>=24,is_featured:l.is_featured==="on",brand:l.brand||null,color:l.color||null,size:l.size||null,condition:l.condition||null,warranty:l.warranty||null,availability_status:l.availability_status||"In Stock",stock_quantity:l.stock_quantity?parseInt(l.stock_quantity):null,images:l.images||[],features:c(l.features_text).length?c(l.features_text):l.tags||[],tags:l.tags||[],highlights:c(l.highlights_text),seo_keywords:c(l.seo_keywords_text),is_ai_generated:!!l.catalog_template_id,ai_generated_fields:l.catalog_template_id?["title","description","features","highlights","seo_keywords"]:[],specifications:b(l)},m=qe();if(f.property_id=m,{error:y}=await u.from("showroom_listings").insert(f),y&&Ie(y,()=>Se({...f,property_id:f.property_id}),"Product publish")){o&&(o.disabled=!1,o.textContent=s);return}p(d?"Draft saved!":"Published! Your showroom shows this product now.")}try{localStorage.removeItem(Me(t,a))}catch{}closeProductFormModal(),P()}catch(r){p("Error: "+r.message,"error"),o&&(o.disabled=!1,o.textContent=s)}};window.editProduct=async function(e){const{data:t,error:a}=await u.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=a?null:t;if(i||(i=ct(e)),i||(i=(window._productsData||[]).find(o=>o.property_id===e)||null),!i)return p("Product not found","error");i.specifications&&typeof i.specifications=="object"&&(i={...i,...i.specifications}),showAddProductStep2(i.category||"Other",i)};window.toggleProductActive=async function(e,t){const a=Y((window._productsData||[]).find(o=>o.property_id===e)),{error:i}=await u.from("showroom_listings").upsert({...a,property_id:e,is_active:t,availability_status:t?"In Stock":"Out of Stock"},{onConflict:"property_id"});if(i)return B(i)?p(`⚠️ ${t?"Publish":"Unpublish"} blocked: database admin role rejected the write. Re-run the admin permission migration.`,"error"):p(`${t?"Publish":"Unpublish"} failed: ${i.message}`,"error");p(t?"Product published":"Product unpublished"),P()};window.duplicateProduct=async function(e,t=!1){const{data:a}=await u.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();if(!a)return;const{id:i,property_id:o,created_at:s,updated_at:r,...l}=a,d=qe();await u.from("showroom_listings").insert({...l,property_id:d,title:a.title+" (Copy)",is_active:!1}),t||(p("Product duplicated"),P())};window.archiveProduct=async function(e){confirm("Archive this product? It will be hidden from the website but can be restored.")&&(await u.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",e),p("Product archived"),P())};const oi=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","Commercial Building","Hotel","Land","Other"];async function Ht(){const e=document.getElementById("content");try{const{data:t,error:a}=await u.from("showroom_listings").select("*").eq("listing_type","property").order("created_at",{ascending:!1});let i=a?je().filter(o=>o.listing_type==="property"):t||[];if(Array.isArray(M)){const o=new Set(i.map(r=>r.property_id)),s=M.filter(r=>r.listing_type==="property"&&r.property_id&&!o.has(r.property_id));s.length&&(i=i.concat(s))}i.sort((o,s)=>new Date(s.created_at||0)-new Date(o.created_at||0)),window._propertiesData=i,e.innerHTML=`
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
                ${i.length===0?'<tr><td colspan="6" class="text-center text-gray-500 py-12">No properties yet.</td></tr>':i.map(o=>`<tr>
                    <td>
                      <div class="flex items-center gap-2.5">
                        <img src="${n((o.images||[])[0]||"/fallback.svg")}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
                        <div><p class="text-xs font-bold text-white truncate max-w-[160px]">${n(o.title)}</p><p class="text-[10px] font-mono text-gray-500">${n(o.property_id)}</p></div>
                      </div>
                    </td>
                    <td><span class="text-xs text-gray-300">${n(o.property_type||o.category)}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${n([o.city,o.state,o.country].filter(Boolean).join(", ")||"—")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(o.price||0).toLocaleString()}</span></td>
                    <td>${C(o.listing_status||"sale")} ${C(o.is_active?"active":"inactive")}</td>
                    <td>
                      <div class="flex gap-1">
                        <button onclick="editProperty('${o.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
                        <button onclick="archiveProduct('${o.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
                      </div>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.showAddPropertyModal=function(e={}){const t=!!e.property_id,a=vt("property","Real Estate"),i=e.country_code||"US",o=e.currency||Oe(i);T(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${t?"Edit":"Add"} Property</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
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
              <div class="sm:col-span-2"><label class="lbl">Property Template</label><select class="input-field" name="catalog_template_id" id="ppf-catalog_template_id" onchange="applyPropertyCatalogTemplate()"><option value="">Choose a property template...</option>${a.map(s=>`<option value="${s.id}">${n(s.label)} - ${n(s.propertyType||s.subcategory)}</option>`).join("")}</select></div>
              <div><label class="lbl">Country</label><select class="input-field" name="country_code" id="ppf-country_code" onchange="syncPropertyCountry(); applyPropertyCatalogTemplate()">${Ut(i)}</select></div>
              <div><label class="lbl">Currency</label><select class="input-field" name="currency" id="ppf-currency" onchange="applyPropertyCatalogTemplate()">${Nt(o)}</select></div>
            </div>
            <p id="ppf-image-requirement" class="text-[11px] text-amber-300">This property flow expects 24 images for a complete gallery.</p>
            <input type="hidden" name="required_image_count" id="ppf-required_image_count" value="24">
          </div>

          <div class="form-grid form-grid-2">
            <div class="sm:col-span-2"><label class="lbl">Property Title *</label><input class="input-field" name="title" value="${n(e.title||"")}" required placeholder="e.g. Cozy 3-Bedroom Family Home"></div>
            <div><label class="lbl">Property Type *</label><select class="input-field" name="property_type" required>
              ${oi.map(s=>`<option value="${s}" ${e.property_type===s?"selected":""}>${s}</option>`).join("")}
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
              ${(e.images||[]).map((s,r)=>se(s,r)).join("")}
            </div>
            <div id="image-url-inputs">
              ${(e.images||[]).map((s,r)=>`<input type="hidden" name="images" id="img-url-${r}" value="${n(s)}">`).join("")}
            </div>
          </div>

          <div class="flex gap-3 pt-2">
            <button type="submit" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition">${t?"💾 Save Changes":"🚀 Publish Property"}</button>
          </div>
        </form>
      </div>
    </div>`),Ye(),Je(),Te("ppf-price"),window.syncPropertyCountry=function(){lt("ppf")},lt("ppf"),Be("pricing"),document.getElementById("ppf-price")?.addEventListener("input",()=>Be("pricing"))};window.saveProperty=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=Object.fromEntries(a.entries()),o=a.getAll("images").filter(c=>c&&!c.startsWith("blob:")),s=(i.features_text||"").split(",").map(c=>c.trim()).filter(Boolean),r=t?0:parseInt(i.required_image_count||"24",10)||24;jt(r,o,"This property");const l={listing_type:"property",category:i.property_type||"Real Estate",subcategory:i.subcategory||null,title:i.title,description:i.description||"",price:Math.max(L,Math.min(U,parseFloat(i.price)||0)),currency:i.currency||"USD",country:i.country||"",country_code:(i.country_code||"").toUpperCase(),state:i.state||"",city:i.city||"",town:i.town||"",product_location:i.product_location||"",latitude:i.latitude?parseFloat(i.latitude):null,longitude:i.longitude?parseFloat(i.longitude):null,property_type:i.property_type||"",listing_status:i.listing_status||"sale",bedrooms:i.bedrooms?parseInt(i.bedrooms):null,bathrooms:i.bathrooms?parseInt(i.bathrooms):null,building_size:i.building_size||"",land_size:i.land_size||"",parking_spaces:i.parking_spaces?parseInt(i.parking_spaces):null,furnished:i.furnished||"",features:s,images:o,highlights:Ce(i.highlights_text),seo_keywords:Ce(i.seo_keywords_text),is_ai_generated:!!i.catalog_template_id,ai_generated_fields:i.catalog_template_id?["title","description","features","highlights","seo_keywords","country","country_code","product_location"]:[],is_active:i.is_active==="on"};let d;if(t){l.property_id=t;const c=Y((window._propertiesData||[]).find(b=>b.property_id===t)||(window._productsData||[]).find(b=>b.property_id===t));({error:d}=await u.from("showroom_listings").upsert({...c,...l},{onConflict:"property_id"}))}else l.property_id=qe(),{error:d}=await u.from("showroom_listings").insert(l);d&&Ie(d,()=>Se({...l,property_id:t||l.property_id}),t?"Property update":"Property publish")||(p(t?"Property updated!":"Property published!"),G(),Ht())};window.editProperty=async function(e){const{data:t,error:a}=await u.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=a?null:t;i||(i=ct(e)),i||(i=(Array.isArray(M)?M.find(o=>o.property_id===e):null)||null),i&&showAddPropertyModal(i)};const si=["pending_verification","payment_received","payment_approved","processing","shipped","in_transit","out_for_delivery","delivered","cancelled","rejected"];async function Gt(){const e=document.getElementById("content");try{const{data:t}=await u.from("payment_receipts").select("*").order("created_at",{ascending:!1}).limit(300),a=t||[],i=["All","Pending","Paid","Processing","Shipped","Delivered","Cancelled"];let o="All";e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Orders Manager</h2>
        <div class="flex gap-2 flex-wrap" id="order-tabs">
          ${i.map(s=>`<button class="tab-btn ${s==="All"?"active":""}" onclick="filterOrders('${s}')">${s}</button>`).join("")}
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
                ${a.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-12">No orders yet</td></tr>':a.map(s=>ri(s)).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._ordersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}function ri(e){return`<tr class="order-row" data-status="${e.status}" data-search="${n(e.order_number)} ${n(e.full_name)} ${n(e.email)}">
    <td><span class="font-mono text-xs text-blue-400 font-bold">${n(e.order_number||e.id?.slice(0,8))}</span></td>
    <td>
      <p class="text-xs font-bold text-white">${n(e.full_name||"Guest")}</p>
      <p class="text-[10px] text-gray-500">${n(e.email)}</p>
    </td>
    <td><p class="text-xs text-gray-300 truncate max-w-[140px]">${n(e.listing_title||e.listing_id||"—")}</p></td>
    <td class="hidden sm:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(e.amount||0).toLocaleString()}</span></td>
    <td>${C(e.status)}</td>
    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${N(e.created_at)}</span></td>
    <td>
      <button onclick="viewOrder('${e.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="View / Update">
        <i data-lucide="eye" class="w-3.5 h-3.5"></i>
      </button>
    </td>
  </tr>`}window.filterOrders=function(e){document.querySelectorAll("#order-tabs .tab-btn").forEach(t=>t.classList.toggle("active",t.textContent===e)),document.querySelectorAll(".order-row").forEach(t=>{const a=t.dataset.status||"",i=e==="All"||e==="Pending"&&["pending_verification","payment_received","order_placed"].includes(a)||e==="Paid"&&["payment_approved"].includes(a)||e==="Processing"&&["processing"].includes(a)||e==="Shipped"&&["shipped","in_transit","out_for_delivery"].includes(a)||e==="Delivered"&&a==="delivered"||e==="Cancelled"&&["cancelled","rejected"].includes(a);t.style.display=i?"":"none"})};window.searchOrders=function(e){const t=e.toLowerCase();document.querySelectorAll(".order-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewOrder=async function(e){const t=(window._ordersData||[]).find(a=>a.id===e);t&&T(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Order ${n(t.order_number)}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
        </div>
        <div class="space-y-3 text-sm">
          <div class="grid grid-cols-2 gap-3">
            ${[["Customer",t.full_name],["Email",t.email],["Phone",t.phone],["Amount",$t(t.amount,t.currency)],["Product",t.listing_title||t.listing_id],["Date",W(t.created_at)]].map(([a,i])=>`<div><p class="text-[10px] text-gray-500 uppercase font-bold mb-0.5">${a}</p><p class="text-xs text-white font-medium">${n(i)||"—"}</p></div>`).join("")}
          </div>
          ${t.transaction_reference?`<div class="p-3 glass-soft border border-blue-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Transaction Reference</p><p class="text-xs font-mono text-blue-300">${n(t.transaction_reference)}</p></div>`:""}
          ${t.additional_notes?`<div class="p-3 glass-soft border border-amber-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Notes</p><p class="text-xs text-gray-300">${n(t.additional_notes)}</p></div>`:""}
          <div>
            <label class="lbl">Update Order Status</label>
            <div class="flex gap-2">
              <select id="order-status-select" class="input-field flex-1">
                ${si.map(a=>`<option value="${a}" ${t.status===a?"selected":""}>${a.replace(/_/g," ")}</option>`).join("")}
              </select>
              <button onclick="updateOrderStatus('${t.id}')" class="btn-press px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.updateOrderStatus=async function(e){const t=document.getElementById("order-status-select")?.value;if(!t)return;const{error:a}=await u.from("payment_receipts").update({status:t}).eq("id",e);if(a){p(a.message,"error");return}p("Order status updated"),G(),Gt()};async function ni(){const e=document.getElementById("content");try{const{data:t}=await u.from("profiles").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
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
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${N(i.created_at)}</span></td>
                    <td>
                      <button onclick="viewCustomer('${i.user_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="eye" class="w-3.5 h-3.5"></i></button>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._customersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.searchCustomers=function(e){const t=e.toLowerCase();document.querySelectorAll(".cust-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewCustomer=async function(e){const t=(window._customersData||[]).find(i=>i.user_id===e);if(!t)return;const{data:a}=await u.from("payment_receipts").select("order_number,amount,currency,status,created_at").eq("user_id",e).order("created_at",{ascending:!1}).limit(20);T(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Customer Profile</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
        </div>
        <div class="flex items-center gap-4 mb-5 p-4 glass-soft border border-blue-500/15 rounded-xl">
          <div class="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
            <i data-lucide="user" class="w-6 h-6 text-blue-400"></i>
          </div>
          <div>
            <p class="font-black text-white">${n(t.display_name||"Anonymous")}</p>
            <p class="text-xs text-gray-400 mt-0.5">Joined ${N(t.created_at)} · ${n(t.country_code||"Unknown country")}</p>
          </div>
        </div>
        <h4 class="text-xs font-bold text-gray-400 uppercase mb-3">Purchase History</h4>
        ${(a||[]).length===0?'<p class="text-xs text-gray-500 py-4 text-center">No orders yet</p>':(a||[]).map(i=>`<div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
            <div><p class="text-xs font-bold text-white font-mono">${n(i.order_number)}</p><p class="text-[10px] text-gray-500">${W(i.created_at)}</p></div>
            <div class="flex items-center gap-2">${C(i.status)}<span class="text-xs font-bold text-emerald-400">$${parseFloat(i.amount).toLocaleString()}</span></div>
          </div>`).join("")}
      </div>
    </div>`)};async function Xe(){const e=document.getElementById("content");try{const{data:t}=await u.from("product_reviews").select("*, showroom_listings(title, property_id)").order("created_at",{ascending:!1}).limit(200),a=t||[],i=a.filter(o=>!o.is_approved).length;e.innerHTML=`
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
          ${a.length===0?X("star","No Reviews","Customer reviews will appear here."):a.map(o=>li(o)).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}function li(e){const t=Array.from({length:5},(a,i)=>i<e.rating?"★":"☆").join("");return`<div class="review-card glass-soft border ${e.is_approved?"border-blue-500/15":"border-amber-500/20"} rounded-xl p-4" data-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-amber-400 font-bold text-sm">${t}</span>
          <span class="text-xs text-gray-500">${N(e.created_at)}</span>
          ${e.is_approved?'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>':'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending Approval</span>'}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${n(e.comment||e.review_text||"—")}</p>
        <p class="text-[11px] text-blue-400 mt-1.5">On: ${n(e.showroom_listings?.title||e.listing_id)}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${e.is_approved?"":`<button onclick="approveReview('${e.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>`}
        <button onclick="deleteReview('${e.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`}window.filterReviewTab=function(e){["all","pending","approved"].forEach(t=>document.getElementById(`rtab-${t}`)?.classList.toggle("active",t===e)),document.querySelectorAll(".review-card").forEach(t=>{const a=e==="all"||e==="pending"&&t.dataset.approved==="false"||e==="approved"&&t.dataset.approved==="true";t.style.display=a?"":"none"})};window.approveReview=async function(e){await u.from("product_reviews").update({is_approved:!0}).eq("id",e),p("Review approved"),Xe()};window.deleteReview=async function(e){confirm("Delete this review permanently?")&&(await u.from("product_reviews").delete().eq("id",e),p("Review deleted"),Xe())};async function Wt(){const e=document.getElementById("content");try{const{data:t}=await u.from("support_messages").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Messages & Support</h2>
        <div class="space-y-3">
          ${a.length===0?X("message-circle","No Messages","Customer support messages will appear here."):a.map(i=>`
              <div class="glass-soft border ${i.is_read?"border-blue-500/10":"border-blue-400/30"} rounded-xl p-4 ${i.is_read?"":"ring-1 ring-blue-500/10"}">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs font-black text-white">${n(i.full_name||i.name||"Anonymous")}</span>
                      ${i.is_read?"":'<span class="badge bg-blue-500/15 text-blue-400 border-blue-500/20">New</span>'}
                      <span class="text-[10px] text-gray-500 ml-auto">${W(i.created_at)}</span>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.markMsgRead=async function(e){await u.from("support_messages").update({is_read:!0}).eq("id",e),p("Marked as read"),Wt()};async function ye(){const e=document.getElementById("content");try{const{data:t}=await u.from("coupons").select("*").order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
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
                    <td>${C(i.is_active?"active":"inactive")}</td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${N(i.expires_at)}</span></td>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.showAddCouponModal=function(){T(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Create Coupon</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
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
    </div>`)};window.saveCoupon=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={code:a.code.toUpperCase(),discount_type:a.discount_type,discount_value:parseFloat(a.discount_value),min_amount:a.min_amount?parseFloat(a.min_amount):null,usage_limit:a.usage_limit?parseInt(a.usage_limit):null,expires_at:a.expires_at||null,is_active:!0},{error:o}=await u.from("coupons").insert(i);if(o){p(o.message,"error");return}p("Coupon created!"),G(),ye()};window.toggleCoupon=async function(e,t){await u.from("coupons").update({is_active:t}).eq("id",e),p(t?"Coupon activated":"Coupon deactivated"),ye()};window.deleteCoupon=async function(e){confirm("Delete this coupon?")&&(await u.from("coupons").delete().eq("id",e),p("Coupon deleted"),ye())};async function di(){const e=document.getElementById("content");try{const{data:t}=await u.from("notification_log").select("*").order("created_at",{ascending:!1}).limit(100),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Notifications</h2>
        <div class="space-y-2">
          ${a.length===0?X("bell","No Notifications","System notifications will appear here."):a.map(i=>`
              <div class="glass-soft border border-blue-500/10 rounded-xl p-3.5 flex items-start gap-3">
                <div class="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <i data-lucide="bell" class="w-4 h-4 text-blue-400"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-0.5">
                    <span class="text-xs font-bold text-white">${n(i.subject||i.event_type||"Notification")}</span>
                    ${C(i.status)}
                    <span class="text-[10px] text-gray-500 ml-auto">${W(i.created_at)}</span>
                  </div>
                  <p class="text-[11px] text-gray-400">${n(i.recipient||i.order_number)}</p>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}const zt=["Featured","Sponsored","Featured Collection","Discover","Promotion"],ci=[{id:"real-estate",name:"Real Estate & Properties"},{id:"marketplace",name:"Marketplace Showroom"}];let re=null;function ui(e){const t={Featured:"bg-blue-500/10 text-blue-300 border-blue-500/30",Sponsored:"bg-violet-500/10 text-violet-300 border-violet-500/30","Featured Collection":"bg-amber-500/10 text-amber-300 border-amber-500/30",Discover:"bg-emerald-500/10 text-emerald-300 border-emerald-500/30",Promotion:"bg-blue-500/10 text-blue-300 border-blue-500/30"};return`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${t[e]||t.Featured}">${n(e)}</span>`}function pi(e){return!e||!e.link_type||e.link_type==="none"?'<span class="text-[10px] text-gray-500">No link</span>':e.link_type==="product"?`<span class="text-[10px] text-blue-300"><i data-lucide="package" class="w-3 h-3 inline mr-1"></i>Product · ${n(e.link_target||"")}</span>`:e.link_type==="category"?`<span class="text-[10px] text-emerald-300"><i data-lucide="tag" class="w-3 h-3 inline mr-1"></i>Category · ${n(e.link_target||"")}</span>`:`<span class="text-[10px] text-amber-300"><i data-lucide="layout-grid" class="w-3 h-3 inline mr-1"></i>Section · ${n(e.link_target||"")}</span>`}function mi(e){return e.video_url?`<video src="${n(e.video_url)}" ${e.poster_url?`poster="${n(e.poster_url)}"`:""} class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" muted preload="metadata"></video>`:e.image_url?`<img src="${n(e.image_url)}" class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" onerror="this.remove()">`:'<div class="w-24 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="megaphone" class="w-6 h-6 text-blue-400"></i></div>'}async function Vt(){if(re)return re;const e=[],t=new Set,a=[],i=s=>{if(!s||!s.property_id)return;e.push({id:s.property_id,title:s.title||s.property_id});const r=s.category||"";r&&!t.has(r)&&(t.add(r),a.push(r))};try{M.forEach(i)}catch{}try{const{data:s,error:r}=await u.from("showroom_listings").select("property_id,title,category").order("created_at",{ascending:!1});!r&&s&&s.forEach(i)}catch{}return["Women","Men","Kids","Home","Sports","Jewellery","Electronics","Cars","Motorcycles","Phones","Computers","Furniture","Beauty","Fashion","Real Estate","Bicycles","Trucks","Land","Kitchen","Food","Pets","Books","Toys","Services"].forEach(s=>{t.has(s)||(t.add(s),a.push(s))}),re={products:e,categories:a,sections:ci},re}async function bi(e){try{const{data:{session:t}}=await u.auth.getSession();if(!t)return p("Sign in to upload media","error"),null;const a=(e.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),i=/^(mp4|webm|mov|m4v)$/.test(a)||e.type.startsWith("video/"),o=`ads/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${a}`,{error:s}=await u.storage.from("advertisements").upload(o,e,{contentType:e.type,upsert:!1});if(s)return p("Upload failed: "+s.message,"error"),null;const{data:r}=u.storage.from("advertisements").getPublicUrl(o);return{url:r.publicUrl,isVideo:i}}catch{return p("Upload failed","error"),null}}function de(e,t){const a=document.getElementById("ad-media-preview");if(!a)return;const i=document.getElementById("ad-hidden-video"),o=document.getElementById("ad-hidden-image");i&&(i.value=t?e:""),o&&(o.value=t?"":e),a.innerHTML=t?`<video src="${n(e)}" class="w-full h-40 object-cover rounded-xl" controls muted playsinline></video>`:`<img src="${n(e)}" class="w-full h-40 object-cover rounded-xl">`,window.lucide&&lucide.createIcons()}window.onAdMediaPicked=async function(e){const t=e.files&&e.files[0];if(!t)return;if(!(t.type.startsWith("image/")||t.type.startsWith("video/"))){p("Choose an image or video file","error");return}const i=await bi(t);if(!i){e.value="";return}de(i.url,i.isVideo);const o=document.getElementById("ad-media-url");o&&(o.value=i.url)};window.onAdMediaUrl=function(e){const t=(e.value||"").trim();if(!t)return;const a=/\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(t);de(t,a)};function Qe(e,t,a){const i=document.getElementById("ad-link-target-wrap");if(!i)return;if(!t||t==="none"){i.innerHTML='<p class="text-[10px] text-gray-500">This ad is informational and will not be clickable.</p>';return}let o="";t==="product"?o='<option value="">Select a product…</option>'+e.products.map(s=>`<option value="${n(s.id)}" ${String(a)===String(s.id)?"selected":""}>${n(s.id)} — ${n((s.title||"").slice(0,60))}</option>`).join(""):t==="category"?o='<option value="">Select a category…</option>'+e.categories.map(s=>`<option value="${n(s)}" ${a===s?"selected":""}>${n(s)}</option>`).join(""):t==="section"&&(o='<option value="">Select a section…</option>'+e.sections.map(s=>`<option value="${n(s.id)}" ${a===s.id?"selected":""}>${n(s.name)}</option>`).join("")),i.innerHTML=`<label class="lbl">Target</label><select class="input-field" name="link_target">${o}</select>`}function Kt(e){return`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${e?"Edit Advertisement":"Add Advertisement"}</h3>
          <button onclick="closeModal()" class="btn-press text-xs font-bold text-gray-400 hover:text-white transition">✕ Close</button>
        </div>
        <form id="ad-form" onsubmit="saveAd(event)" class="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          <input type="hidden" name="id" value="${e?e.id:""}">
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Title *</label><input class="input-field" name="title" required value="${n(e&&e.title?e.title:"")}" placeholder="e.g. Summer Sale 2026"></div>
            <div><label class="lbl">Ad Label</label>
              <select class="input-field" name="ad_label">
                ${zt.map(t=>`<option value="${t}" ${e&&e.ad_label===t?"selected":""}>${t}</option>`).join("")}
              </select>
            </div>
          </div>
          <div><label class="lbl">Message</label><textarea class="input-field" name="description" rows="2" placeholder="Short message shown on the ad…">${n(e&&e.description?e.description:"")}</textarea></div>

          <div class="glass-soft border border-blue-500/15 rounded-xl p-4 space-y-3">
            <label class="lbl">Image / Video</label>
            <div id="ad-media-preview" class="w-full h-40 rounded-xl bg-black/40 flex items-center justify-center text-gray-600 text-xs border border-dashed border-gray-700"></div>
            <div class="flex items-center gap-2 flex-wrap">
              <label class="btn-press cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
                <i data-lucide="upload" class="w-4 h-4"></i> Upload File
                <input type="file" accept="image/*,video/mp4,video/webm,video/quicktime" class="hidden" onchange="onAdMediaPicked(this)">
              </label>
              <input id="ad-media-url" class="input-field flex-1 min-w-[160px]" placeholder="…or paste media URL" oninput="onAdMediaUrl(this)">
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
    </div>`}window.onAdLinkTypeChange=function(){const e=window._adLinkCache||{products:[],categories:[],sections:[]},t=document.querySelector('#ad-form select[name="link_type"]'),a=t?t.value:"none";Qe(e,a,"")};window.showAddAdModal=async function(){const e=await Vt();window._adLinkCache=e,T(Kt(null)),Qe(e,"none","")};window.showEditAdModal=async function(e){const t=await Vt();window._adLinkCache=t;const{data:a}=await u.from("promotions").select("*").eq("id",e).maybeSingle();if(!a){p("Ad not found","error");return}T(Kt(a)),a.image_url?de(a.image_url,!1):a.video_url&&de(a.video_url,!0),Qe(t,a.link_type||"none",a.link_target||"")};window.saveAd=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=a.id||"",o={title:a.title,description:a.description||"",ad_label:zt.includes(a.ad_label)?a.ad_label:"Featured",image_url:a.image_url||null,video_url:a.video_url||null,link_type:["none","product","category","section"].includes(a.link_type)?a.link_type:"none",link_target:a.link_target||null,start_date:a.start_date?new Date(a.start_date+"T00:00:00").toISOString():null,end_date:a.end_date?new Date(a.end_date+"T23:59:59").toISOString():null,is_active:a.is_active==="on",promo_type:"banner"};if(!o.image_url&&!o.video_url){p("Add an image or video for the ad","error");return}const s=e.target.querySelector('button[type="submit"]');s&&(s.disabled=!0);try{if(i){const{error:r}=await u.from("promotions").update(o).eq("id",i);if(r)throw r;p("Ad updated!")}else{const{error:r}=await u.from("promotions").insert(o);if(r)throw r;p("Ad created!")}}catch(r){p(r.message||"Save failed","error"),s&&(s.disabled=!1);return}G(),ee()};window.togglePromo=async function(e,t){const{error:a}=await u.from("promotions").update({is_active:t}).eq("id",e);if(a){p(a.message,"error");return}p(t?"Ad activated":"Ad deactivated"),ee()};window.moveAd=async function(e,t){try{const{data:a,error:i}=await u.from("promotions").select("id,sort_order").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1});if(i)throw i;const o=a||[],s=o.findIndex(c=>c.id===e),r=s+t;if(s<0||r<0||r>=o.length){p("Already at the edge","info");return}const l=o[s],d=o[r];await u.from("promotions").update({sort_order:d.sort_order}).eq("id",l.id),await u.from("promotions").update({sort_order:l.sort_order}).eq("id",d.id),p("Order updated")}catch(a){p(a.message||"Reorder failed","error")}ee()};window.deletePromo=async function(e){if(confirm("Delete this ad? This cannot be undone.")){try{const{data:t}=await u.from("promotions").select("image_url,video_url,poster_url").eq("id",e).maybeSingle();if(t){const i=[t.image_url,t.video_url,t.poster_url].filter(Boolean).map(o=>{const s=/\/object\/public\/advertisements\/(.+)$/.exec(o);return s?decodeURIComponent(s[1]):null}).filter(Boolean);if(i.length)try{await u.storage.from("advertisements").remove(i)}catch{}}const{error:a}=await u.from("promotions").delete().eq("id",e);if(a)throw a;p("Ad deleted")}catch(t){p(t.message||"Delete failed","error")}ee()}};async function ee(){const e=document.getElementById("content");try{const{data:t}=await u.from("promotions").select("*").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3 flex-wrap">
          <div class="flex-1 min-w-0">
            <h2 class="text-xl font-black text-white">Advertisement Manager</h2>
            <p class="text-xs text-gray-500 mt-0.5">Create professional showcase ads that appear on the homepage — with labels, media and product links.</p>
          </div>
          <button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement
          </button>
        </div>
        <div class="grid gap-3">
          ${a.length===0?X("megaphone","No Ads","Create your first showcase ad — add a title, image or video, label, and optional product link.",'<button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"><i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement</button>'):a.map((i,o)=>`
              <div class="glass-soft border border-blue-500/15 rounded-xl p-4 flex items-center gap-4">
                ${mi(i)}
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap">
                    <p class="text-sm font-black text-white truncate">${n(i.title||i.name)}</p>
                    ${ui(i.ad_label||"Featured")}
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${n(i.description||"")}</p>
                  <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${i.is_active?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":"bg-gray-500/10 text-gray-400 border-gray-500/20"}">${i.is_active?"Active":"Inactive"}</span>
                    ${pi(i)}
                    <span class="text-[10px] text-gray-500">${N(i.start_date)}${i.start_date?" → ":""}${N(i.end_date)}</span>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.renderAds=ee;const fe=[{id:"gemini",name:"Google Gemini",tag:"FREE",color:"blue",icon:"sparkles",kf:"gemini_key",ph:"AIzaSy…",signup:"https://aistudio.google.com/apikey",models:["gemini-3-flash-preview","gemini-3.1-flash-lite-preview"],mf:"gemini_model",dm:"gemini-3-flash-preview",desc:"Google's best free AI. Great for coding, writing apps & websites.",free_tier:"15 req/min · 1M tokens/day — Free forever"}],R={border:{blue:"border-blue-500/50"},bg:{blue:"bg-blue-500/8"},text:{blue:"text-blue-400"},badge:{blue:"bg-blue-500/15 text-blue-300"}};async function Yt(){const e=document.getElementById("content");try{let t=function(s){const r=o===s.id,l=i[s.kf],d=i[s.mf]||s.dm;return`
        <div class="glass-soft border ${r?R.border[s.color]+" "+R.bg[s.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard" id="apc-${s.id}">
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-8 h-8 ${R.bg[s.color]} rounded-lg flex items-center justify-center shrink-0">
                <i data-lucide="${s.icon}" class="w-4 h-4 ${R.text[s.color]}"></i>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h3 class="text-xs font-black text-white">${n(s.name)}</h3>
                  <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full ${R.badge[s.color]}">${s.tag}</span>
                </div>
                <p class="text-[9px] text-emerald-400 font-bold mt-0.5 leading-tight truncate">${n(s.free_tier)}</p>
              </div>
            </div>
            <label class="flex items-center gap-1 cursor-pointer shrink-0">
              <input type="radio" name="active_provider" value="${s.id}" ${r?"checked":""} class="accent-blue-500" onchange="highlightAI('${s.id}')">
              <span class="text-[9px] font-bold ${r?R.text[s.color]:"text-gray-600"}">USE</span>
            </label>
          </div>
          <p class="text-[11px] text-gray-400 leading-relaxed">${n(s.desc)}</p>
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="lbl mb-0">API Key</label>
              <a href="${s.signup}" target="_blank" rel="noopener" class="text-[10px] font-bold ${R.text[s.color]} hover:underline flex items-center gap-0.5">
                <i data-lucide="external-link" class="w-3 h-3"></i>Get Free Key
              </a>
            </div>
            <div class="relative">
              <input type="password" class="input-field pr-16 text-xs" name="${s.kf}"
                placeholder="${l?"••••"+l.slice(-4):s.ph}">
              ${l?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>'}
            </div>
          </div>
          <div>
            <label class="lbl">Model</label>
            <select class="input-field text-xs" name="${s.mf}">
              ${s.models.map(c=>`<option value="${c}" ${d===c?"selected":""}>${c}</option>`).join("")}
            </select>
          </div>
        </div>`};const{data:a}=await u.from("ai_settings").select("*").limit(1).maybeSingle(),i=a||{},o=i.active_provider||"gemini";e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white">AI Settings</h2>
          <div class="flex items-center gap-2">
            <button onclick="showAiStatusModal()" class="btn-press flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition">
              <i data-lucide="activity" class="w-3.5 h-3.5"></i> Live Status & Test
            </button>
            <span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs px-3 py-1">Gemini Free</span>
          </div>
        </div>

        <div class="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-xs text-emerald-300 flex items-start gap-3">
          <i data-lucide="gift" class="w-5 h-5 shrink-0 text-emerald-400 mt-0.5"></i>
          <div>
            <p class="font-black mb-0.5">Google Gemini has a FREE tier — no payment required to start!</p>
            <p class="text-emerald-400/70">Click "Get Free Key" → sign up at Google AI Studio → paste key below → Save. The key is stored securely in your database.</p>
          </div>
        </div>

        <form id="ai-form" onsubmit="saveAiSettings(event)" class="space-y-5">

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4">
            <h3 class="text-sm font-black text-white mb-3 flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-blue-400"></i> Google Gemini</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">${fe.map(t).join("")}</div>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="sliders" class="w-4 h-4 text-blue-400"></i> Feature Toggles</h3>
            ${[{key:"product_ai_enabled",label:"AI Product Creation",desc:"AI auto-fills product descriptions",val:i.product_ai_enabled!==!1},{key:"ai_code_assist",label:"AI Code Assistant",desc:"AI helps build and edit your website code",val:i.ai_code_assist!==!1},{key:"ai_moderation",label:"AI Content Moderation",desc:"Auto-approve/reject customer reviews using AI",val:i.ai_moderation}].map(s=>`
              <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
                <div><p class="text-xs font-bold text-white">${s.label}</p><p class="text-[11px] text-gray-500">${s.desc}</p></div>
                <label class="toggle-switch"><input type="checkbox" name="${s.key}" ${s.val?"checked":""}><span class="toggle-slider"></span></label>
              </div>`).join("")}
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            💾 Save AI Settings
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.highlightAI=function(e){fe.forEach(t=>{const a=document.getElementById("apc-"+t.id);if(!a)return;const i=t.id===e;a.className=`glass-soft border ${i?R.border[t.color]+" "+R.bg[t.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard`;const o=a.querySelector("input[type=radio] + span");o&&(o.className=`text-[9px] font-bold ${i?R.text[t.color]:"text-gray-600"}`)})};window.saveAiSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={active_provider:a.active_provider||"gemini",product_ai_enabled:a.product_ai_enabled==="on",ai_code_assist:a.ai_code_assist==="on",ai_moderation:a.ai_moderation==="on"};fe.forEach(o=>{a[o.mf]&&(i[o.mf]=a[o.mf]);const s=(a[o.kf]||"").trim();s&&!s.startsWith("••••")&&s!==""&&(i[o.kf]=s)}),i.gemini_key&&(i.gemini_api_key=i.gemini_key);try{const{data:o}=await u.from("ai_settings").select("id").limit(1).maybeSingle();let s;if(o?.id?{error:s}=await u.from("ai_settings").update(i).eq("id",o.id):{error:s}=await u.from("ai_settings").insert(i),s){p("Save failed: "+s.message,"error"),console.error("[AI Save]",s);return}await H.reload(),p("✅ AI settings saved!","success"),setTimeout(()=>Yt(),600)}catch(o){p("Unexpected error: "+o.message,"error"),console.error("[AI Save]",o)}};const H={_cfg:null,async reload(){const{data:e,error:t}=await u.from("ai_settings").select("*").limit(1).maybeSingle();if(t){console.warn("[aiClient] Could not load settings:",t.message),this._cfg={};return}const a=e||{};!a.gemini_key&&a.gemini_api_key&&(a.gemini_key=a.gemini_api_key),this._cfg=a},async getConfig(){return this._cfg||await this.reload(),this._cfg},async chat(e,{maxTokens:t=2e3}={}){const a=await this.getConfig();if(!String(a.gemini_key||"").trim())throw new Error("No AI provider configured. Go to AI Settings and add your Gemini API key.");const i=e[e.length-1],o={action:"chat",message:String(i?.content||"").trim(),history:e.slice(0,-1).map(r=>({role:r.role,content:String(r.content||"")})),provider_override:"gemini",max_tokens:t},s=await this._callEdge(o);if(s&&s.response)return{text:s.response,provider:"Google Gemini",model:s.model||a.gemini_model};throw new Error(String(s?.error||"Gemini is unavailable."))},async prompt(e,t={}){return this.chat([{role:"user",content:e}],t)},async getStatus(){const e=await this.getConfig();return fe.map(t=>({id:t.id,name:t.name,color:t.color,hasKey:!!e[t.kf]?.trim(),isActive:e.active_provider===t.id,isCoolingDown:!1,remainingSec:0}))},async analyzeImages(e,t={}){const a=`You are the AI listing expert for the Weverse Online Shop marketplace. Look carefully at the uploaded product photo(s) and identify exactly what the product is — the REAL brand, model and year that actually appear in the photos, never a guessed one.

IDENTIFY THE REAL BRAND & MODEL (most important):
- Find the brand badge, emblem, logo, nameplate or label in the photo and read its exact letters and symbols, character by character.
- For vehicles, cross-check the badge against the design: grille shape, headlight and taillight design, body lines, wheels, interior and steering wheel. A BMW grille/kidney badge, Mercedes three-pointed star, Audi four rings, Toyota, Honda, Ford, Tesla, etc. are visually distinct — match what you actually see.
- Use the EXACT brand name that is printed on the product. NEVER swap it for a different brand (e.g. never call a BMW a Mercedes-Benz, never call an iPhone a Samsung).
- If the exact model number is printed (e.g. "X5", "C300", "iPhone 15 Pro Max", "MacBook Pro"), use that exact text.
- The year must come from a visible printed date/serial when present; otherwise give your best estimate from the design era and never invent a specific year you cannot support.

Return a single valid JSON object (no markdown, no extra text) with these keys:
- title (string): a real, professional marketplace product title that matches the actual item (real brand + real model/type + key feature + category). Never use placeholders like "AI Product" or "Premium Item".
- description (string): a detailed, persuasive 2-4 sentence description.
- category (string): the best category from this list: Electronics, Phones, Computers & Laptops, Fashion, Men's Fashion, Women's Fashion, Shoes, Bags & Accessories, Jewelry, Beauty & Skincare, Home & Kitchen, Furniture, Garden & Outdoor, Toys & Games, Sports & Fitness, Food & Groceries, Baby & Kids, Health & Medical, Books & Education, Office & Stationery, Pet Supplies, Musical Instruments, Cameras & Photography, Watches, Gaming, Software & Digital, Services, Cars, Luxury Cars, Motorcycles, Commercial Vehicles, Boats & Marine, Other.
- subcategory (string)
- brand (string): the EXACT brand name that appears on the product or badge — read the logo/emblem/nameplate and use that name. If none is readable, identify the make from the design and badge shape.
- model (string): the EXACT model name/number printed on the product or box when visible; otherwise your best professional identification from the design.
- year (string or null): the real model/manufacturing year — read the printed year/serial if visible, otherwise your best estimate from the design era. Only null for items with no meaningful year.
- model_year (string or null): same as year when the product has a model year.
- color (string): ALWAYS the dominant color of the item.
- condition (string; from: New, Refurbished, Used - Like New, Used - Good, Used - Fair)
- material, size, storage, ram, processor, display (strings, only if relevant)
- features (array of strings)
- highlights (array of strings)
- seo_keywords (array of strings)
- specifications (object with the relevant spec keys only, e.g. engine, transmission, fuel_type, horsepower, mileage, drive_type, body_type, model_year for vehicles; storage, ram, processor, display for electronics)
- detected_name (string): a short plain-language label of the product, e.g. "white sneakers".

Rules:
- ACCURACY OVER GUESSES: Only state a brand/model/year you can actually see or confidently identify from the design. If you cannot identify the exact model, give the brand and a general body type (e.g. "BMW SUV") instead of inventing a specific model.
- NEVER invent exact specs (price, storage size, RAM, horsepower, serial numbers) that are not visible or printed on the product.
- Respond with valid JSON only.`,i=[];for(const o of(e||[]).slice(0,t.maxImages||3)){const s=await this._fetchImageAsDataUrl(o,1024);s&&i.push(s)}if(!i.length)throw new Error("Could not read the uploaded images.");try{const o=await this._tryBrowserGeminiVision(a,i);if(o)return o}catch{}try{const o=await this._callEdge({action:"vision",images:i,prompt:a,max_tokens:4096});if(o&&o.success&&o.text){const s=ke(o.text);if(s)return{...s,_aiProvider:o.provider,_aiModel:o.model};throw new Error("The AI returned no valid analysis for these images.")}throw new Error(o&&o.error||"Vision service unavailable.")}catch{}return null},async _runVisionPrompt(e,t,{maxImages:a=3,maxTokens:i=4096}={}){const o=[];for(const s of(t||[]).slice(0,a)){const r=await this._fetchImageAsDataUrl(s,1024);r&&o.push(r)}if(!o.length)throw new Error("Could not read the uploaded images.");try{const s=await this._tryBrowserGeminiVision(e,o);if(s)return s}catch{}try{const s=await this._callEdge({action:"vision",images:o,prompt:e,max_tokens:i});if(s&&s.success&&s.text){const r=ke(s.text);if(r)return{...r,_aiProvider:s.provider,_aiModel:s.model};throw new Error("The AI returned no valid analysis for these images.")}throw new Error(s&&s.error||"Vision service unavailable.")}catch{}return null},async identifyProduct(e,t={}){return this._runVisionPrompt(`STAGE 1 — IDENTIFY THE EXACT PRODUCT.
Look at the photo(s) and state exactly what product is shown. Identification ONLY — do not complete any specifications yet.

IDENTIFICATION RULES (accuracy over guesses — this is the most important step):
- Read the real brand badge / logo / emblem / nameplate in the photo character by character and use the EXACT brand that is printed. NEVER swap brands: a BMW must never be called Mercedes-Benz, an iPhone never Samsung, a Toyota never Honda or any other brand.
- The model must come from a visible nameplate / label / badging when present. Otherwise identify the exact design (grille, headlights, taillights, wheels, body lines, interior, silhouette) and give your best professional identification, or give the brand + body type (e.g. "BMW SUV") instead of inventing a specific model.
- year: only from a visible printed year, serial, badge or registration. Otherwise estimate from the design era and set "year_estimated": true.
- color: the dominant color clearly visible.
- body_type: only when clearly visible (Sedan, SUV, Hatchback, Coupe, Convertible, Wagon, Pickup, Truck, Van, Sports Car, Luxury Sedan, Motorcycle, Yacht, Other).
- condition: judge from what is visible (New, Refurbished, Used - Like New, Used - Good, Used - Fair).
- category: best match from this list: Electronics, Phones, Computers & Laptops, Fashion, Men's Fashion, Women's Fashion, Shoes, Bags & Accessories, Jewelry, Beauty & Skincare, Home & Kitchen, Furniture, Garden & Outdoor, Toys & Games, Sports & Fitness, Food & Groceries, Baby & Kids, Health & Medical, Books & Education, Office & Stationery, Pet Supplies, Musical Instruments, Cameras & Photography, Watches, Gaming, Software & Digital, Services, Cars, Luxury Cars, Motorcycles, Commercial Vehicles, Boats & Marine, Other.
- detected_name: a short plain label of what you actually see, e.g. "white Toyota Camry sedan" or "black leather handbag".
- If the photo does not clearly show a product, return { "identified": false, "detected_name": "what you see", "reason": "why you cannot identify it" }.

Return ONE valid JSON object (no markdown) with only these keys:
{ "identified": true, "brand": string|null, "model": string|null, "year": string|null, "year_estimated": boolean, "body_type": string|null, "color": string|null, "condition": string|null, "category": string|null, "subcategory": string|null, "detected_name": string }`,e,{maxImages:t.maxImages||5})},async completeProductSpecs(e,t,a={}){const i=t||{},o=`STAGE 2 — COMPLETE THE STANDARD SPECIFICATIONS.
The product below was identified in STAGE 1 from the photos.

IDENTIFIED PRODUCT:
- brand: ${String(i.brand||"unknown")}
- model: ${String(i.model||"unknown")}
- year: ${String(i.year||"unknown")}
- body_type: ${String(i.body_type||"unknown")}
- category: ${String(i.category||"unknown")}
- detected_name: ${String(i.detected_name||"unknown")}

Look at the photo(s) again, then complete the standard specifications for THIS EXACT identified product using reliable product/vehicle specification data for that exact brand + model.

ALWAYS fill every relevant specification when you can determine it for the identified model: Engine, Transmission, Fuel, Drive type, Horsepower, Seats (seating capacity), Doors, Body type, Model year, Mileage (only if visible/known), Safety features, plus other relevant standard specs for the product type.

HARD RULES:
- ONLY use specifications for the exact brand + model identified above. A Toyota photo must produce TOYOTA specifications. NEVER use specifications from a different brand or model (never a Toyota image → Mercedes specs, never an iPhone image → Samsung specs, never a bag image → car specs).
- If the exact year or trim is uncertain, use the most common / standard specification for that identified model and list that key in "estimated". Do not randomly invent values that are not reasonable for that model.
- Only return specs that exist for the product type: a bag has no engine/transmission/horsepower (leave those null); a phone has no transmission or doors (leave those null); a car has engine/transmission/fuel/drive/horsepower/seats/doors.
- Never return price or stock_quantity in this stage — price is handled in a separate stage.

DESCRIPTION REQUIREMENTS (the description is a MAJOR part of the listing):
- Write a detailed, professional, natural, trustworthy and enjoyable marketplace description that is clearly about THIS exact identified product and nothing else.
- For vehicles, naturally explain the engine, performance, transmission, drivetrain, fuel type, comfort, interior, exterior, safety, technology and practicality — always grounded in the reliable specifications you returned above.
- For other product types, cover the product's most relevant, genuine attributes (design, materials, build quality, usability, and key specs) based only on the identified product and its reliable specs.
- Write in smooth, complete sentences and short paragraphs (roughly 3-6 sentences / 60-140 words). Never sound robotic, never use bullet lists, never invent features, prices, bundles or promises that are not true of the identified product, and NEVER mention AI, scanning, estimates, specification lookup or any internal process.

Return ONE valid JSON object (no markdown):
{
  "title": string|null (professional listing title: year + real brand + real model + body type, e.g. "2023 Toyota Camry SE Sedan"),
  "description": string|null (the detailed, professional description described above — based ONLY on the identified product and its standard specs),
  "engine": string|null, "transmission": string|null, "fuel_type": string|null, "drive_type": string|null,
  "horsepower": string|null, "mileage": string|null, "seating_capacity": string|null, "doors": string|null,
  "body_type": string|null, "model_year": string|null, "safety_features": string[]|null,
  "storage": string|null, "ram": string|null, "processor": string|null, "display": string|null, "graphics": string|null, "os": string|null,
  "material": string|null, "size": string|null, "gender": string|null, "platform": string|null,
  "estimated": string[] (keys above that are estimates, e.g. ["engine","horsepower"])
}`;return this._runVisionPrompt(o,e,{maxImages:a.maxImages||5})},async estimateProductPrice(e,t,a={},i={}){const o=t||{},s=a||{},r=`STAGE 3 — ESTIMATE THE REAL MARKET PRICE AND A PROMOTIONAL DISCOUNT PRICE.
The exact product below was identified from the photos in STAGE 1, and its standard specifications were completed in STAGE 2.

IDENTIFIED PRODUCT:
- brand: ${String(o.brand||"unknown")}
- model: ${String(o.model||"unknown")}
- year: ${String(o.year||"unknown")}
- body_type: ${String(o.body_type||"unknown")}
- condition: ${String(o.condition||"unknown")}
- category: ${String(o.category||"unknown")}
- detected_name: ${String(o.detected_name||"unknown")}

KNOWN SPECIFICATIONS:
- engine: ${String(s.engine||"unknown")}
- transmission: ${String(s.transmission||"unknown")}
- fuel_type: ${String(s.fuel_type||"unknown")}
- drive_type: ${String(s.drive_type||"unknown")}
- horsepower: ${String(s.horsepower||"unknown")}
- mileage: ${String(s.mileage||"unknown")}
- storage/ram: ${String(s.storage||"")}${s.ram?" / "+s.ram:""}

Estimate the reasonable CURRENT MARKET SELLING PRICE (in USD) for THIS EXACT identified product — the price a real buyer would realistically pay for it today, in the condition shown in the photo. Use reliable current market data for that exact brand + model + year + condition + trim.

Then suggest a promotional DISCOUNT PRICE: a compelling sale price BELOW the real price (typically 5-20% off) that the customer would actually pay, to make the listing attractive. If a discount does not make sense for this product, set suggested_discount_price to null.

HARD RULES:
- ONLY price the exact product identified above. A Toyota photo must get a TOYOTA price, an iPhone photo an iPhone price, a Gucci bag a Gucci bag price. NEVER use the price of a different brand or model.
- Base the price on the identified product's real market value: for a car use current market value of that model/year/condition (consider trim, engine, mileage, condition); for a house/property use typical values for the identified property type and location when visible; for a bag use the market price of that brand/model/type/condition; for a phone use the current market price of that model/storage/condition.
- If the exact value cannot be determined, give the best reasonable market estimate — never 0, never a random invented number, and never a price for a different product.
- Never include currency symbols or commas in the numbers; both prices must be plain numbers (e.g. 24500).
- Never return a price range as the main value.
- suggested_discount_price must be strictly LESS than estimated_price, or null when no discount applies.

Return ONE valid JSON object (no markdown):
{
  "currency": "USD",
  "estimated_price": number (the real market price of this exact product),
  "suggested_discount_price": number|null (the promotional price the customer pays, below the real price),
  "price_range_min": number|null,
  "price_range_max": number|null,
  "confidence": "high" | "medium" | "low",
  "reason": string (one short sentence explaining the estimate)
}`;return this._runVisionPrompt(r,e,{maxImages:i.maxImages||5})},async _callEdge(e){let t="";try{t=(await u.auth.getSession())?.data?.session?.access_token||""}catch{}return await(await fetch(va,{method:"POST",headers:{"Content-Type":"application/json",...t?{Authorization:`Bearer ${t}`}:{}},body:JSON.stringify(e),signal:AbortSignal.timeout(12e4)})).json().catch(()=>({}))},async _fetchImageAsDataUrl(e,t=1200){try{const a=await fetch(e).then(i=>i.blob());return!a||!a.size?null:a.size<18e5?`data:${a.type||"image/jpeg"};base64,${await gi(a)}`:await this._downscaleImage(a,t)}catch{return null}},async _downscaleImage(e,t){const a=URL.createObjectURL(e);try{const i=new Image;await new Promise((d,c)=>{i.onload=d,i.onerror=c,i.src=a});const o=Math.min(1,t/Math.max(i.width,i.height)),s=Math.max(1,Math.round(i.width*o)),r=Math.max(1,Math.round(i.height*o)),l=document.createElement("canvas");return l.width=s,l.height=r,l.getContext("2d").drawImage(i,0,0,s,r),l.toDataURL("image/jpeg",.82)}finally{URL.revokeObjectURL(a)}},async _tryBrowserGeminiVision(e,t){const a=await this.getConfig(),i=String(a.gemini_key||a.gemini_api_key||"").trim();if(!i)return null;const o=[a.gemini_vision_model||a.gemini_model,"gemini-2.5-flash","gemini-3-flash-preview","gemini-3.1-flash-lite-preview"].filter(Boolean);for(const s of o)try{const r=[{text:e}];for(const g of t){const f=String(g).match(/^data:([^;,]+)[;,]base64,(.+)$/s);f&&r.push({inlineData:{mimeType:f[1].trim(),data:f[2].trim()}})}if(r.length<2)return null;const l=`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(s)}:generateContent?key=${encodeURIComponent(i)}`,d=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:r}],generationConfig:{temperature:.2,maxOutputTokens:4096}}),signal:AbortSignal.timeout(4e4)});if(!d.ok)continue;const b=((await d.json())?.candidates?.[0]?.content?.parts||[]).map(g=>g?.text||"").join(`
`).trim();if(!b)continue;const y=ke(b);if(y)return{...y,_aiProvider:"Gemini (browser)",_aiModel:s}}catch{}return null}};function gi(e){return new Promise(t=>{const a=new FileReader;a.onload=()=>{const i=a.result;if(typeof i=="string"){const o=i.indexOf(",");t(o>=0?i.slice(o+1):i)}else t("")},a.onerror=()=>t(""),a.readAsDataURL(e)})}window.aiClient=H;window.showAiStatusModal=async function(){const e=await H.getStatus(),t=e.filter(a=>a.hasKey);T(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="activity" class="w-5 h-5 text-emerald-400"></i> AI Provider Status</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
        </div>
        <div class="mb-4 p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300">
          ${t.length===0?"⚠ No key configured. Go to AI Settings and add your Google Gemini API key.":"Google Gemini is configured and ready."}
        </div>
        <div class="space-y-2">
          ${e.map(a=>`
            <div class="flex items-center gap-3 p-2.5 glass-soft border ${a.hasKey?"border-blue-500/15":"border-gray-800"} rounded-xl opacity-${a.hasKey?"100":"40"}">
              <span class="w-2.5 h-2.5 rounded-full shrink-0 ${a.hasKey?"bg-emerald-400":"bg-gray-600"}"></span>
              <span class="text-xs font-bold text-white flex-1">${n(a.name)}</span>
              ${a.isActive?'<span class="text-[9px] font-black text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-full">ACTIVE</span>':""}
              ${a.hasKey?"":'<span class="text-[9px] text-gray-600">No key</span>'}
              ${a.hasKey?'<span class="text-[9px] text-emerald-400">Ready ✓</span>':""}
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
    </div>`),window.lucide&&lucide.createIcons()};window.testAiCall=async function(){const e=document.getElementById("ai-test-input")?.value?.trim();if(!e)return;const t=document.getElementById("ai-test-output");t.classList.remove("hidden"),t.textContent="⏳ Asking Gemini…";try{const a=await H.prompt(e);t.textContent=`✓ [${a.provider} · ${a.model}]

${a.text}`}catch(a){t.textContent=`❌ ${a.message}`}};function ke(e){if(!e)return null;let t=String(e).trim();const a=t.match(/```(?:json)?\s*([\s\S]*?)```/i);a&&(t=a[1].trim());const i=t.indexOf("{"),o=t.lastIndexOf("}");if(i===-1||o===-1||o<=i)return null;const s=t.slice(i,o+1);try{return JSON.parse(s)}catch{return null}}async function yi(){const e=document.getElementById("content");try{const[{data:t},a]=await Promise.all([u.from("site_settings").select("*").limit(1).maybeSingle(),fi()]),i=t||{},o=new Set(Array.isArray(i.live_promo_product_ids)?i.live_promo_product_ids:[]),s=a.length?`
        <div class="mt-4">
          <label class="lbl">Which products appear in the Live Promotions (Featured Product Alerts)?</label>
          <p class="text-[11px] text-gray-400 mb-2">Leave all unchecked to let the store pick real products automatically.</p>
          <input id="promo-picker-search" type="search" class="input-field mb-2" placeholder="Search products to choose…" oninput="filterPromoPicker(this.value)">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1.5 max-h-72 overflow-y-auto pr-1" id="promo-picker-list">
            ${a.map(r=>{const l=r.property_id||r.id,d=o.has(l)?"checked":"";return`<label class="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3 py-2 cursor-pointer hover:border-blue-400/40 transition" data-promo-search="${n((r.title||r.name||"")+" "+(r.category||""))}">
                <input type="checkbox" name="live_promo_product_ids" value="${n(l)}" ${d} class="accent-blue-500 w-4 h-4">
                <span class="min-w-0"><span class="block text-xs font-bold text-white truncate">${n(r.title||r.name||l)}</span><span class="block text-[10px] text-gray-400">${n(r.category||r.listing_type||"")} · ${n(l)}</span></span>
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
          ${[{section:"Site Identity",fields:[{key:"site_name",label:"Site Name",type:"text",placeholder:"Weverse Online Shop"},{key:"site_tagline",label:"Tagline / Slogan",type:"text",placeholder:"Premium International Commerce"},{key:"site_description",label:"Site Description (SEO)",type:"textarea",placeholder:"Your trusted global shop…"}]},{section:"Contact Information",fields:[{key:"contact_email",label:"Contact Email",type:"email",placeholder:"support@example.com"},{key:"contact_phone",label:"Contact Phone",type:"tel",placeholder:"+1 234 567 8900"},{key:"contact_address",label:"Business Address",type:"textarea",placeholder:"123 Main St, City, Country"},{key:"whatsapp_number",label:"WhatsApp Number",type:"tel",placeholder:"+1 234 567 8900"}]},{section:"Hero Section",fields:[{key:"hero_headline",label:"Hero Headline",type:"text",placeholder:"Global Online Marketplace"},{key:"hero_subtext",label:"Hero Subtext",type:"textarea",placeholder:"Shop premium products…"},{key:"hero_cta_text",label:"CTA Button Text",type:"text",placeholder:"Shop Now"}]},{section:"Social Media",fields:[{key:"facebook_url",label:"Facebook URL",type:"url",placeholder:"https://facebook.com/…"},{key:"instagram_url",label:"Instagram URL",type:"url",placeholder:"https://instagram.com/…"},{key:"twitter_url",label:"Twitter / X URL",type:"url",placeholder:"https://twitter.com/…"},{key:"youtube_url",label:"YouTube URL",type:"url",placeholder:"https://youtube.com/…"},{key:"tiktok_url",label:"TikTok URL",type:"url",placeholder:"https://tiktok.com/…"}]},{section:"Mobile App Promotion Banner",fields:[{key:"app_banner_enabled",label:"Show the App Promotion banner at the bottom of every page",type:"checkbox"},{key:"app_banner_headline",label:"Banner Headline",type:"text",placeholder:"Discover More with the Weverse Online Shop App"},{key:"app_play_store_url",label:"Google Play Store URL (real app listing — leave empty while unpublished)",type:"url",placeholder:"https://play.google.com/store/apps/details?id=…"}]},{section:"Live Product Promotions (Featured Product Alerts)",fields:[{key:"live_promo_enabled",label:"Show Live Product Promotions (small alerts at the bottom corner)",type:"checkbox"},{key:"live_promo_first_delay_seconds",label:"First alert after (seconds)",type:"number",placeholder:"12"},{key:"live_promo_interval_seconds",label:"Delay between alerts (seconds)",type:"number",placeholder:"60"}],extra:s}].map(r=>`
            <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
              <h3 class="text-sm font-black text-white mb-4">${r.section}</h3>
              <div class="form-grid form-grid-2">
                ${r.fields.map(l=>`
                  <div ${l.type==="textarea"||l.type==="checkbox"?'class="sm:col-span-2"':""}>
                    ${l.type==="checkbox"?`<label class="flex items-center gap-2.5 cursor-pointer"><input type="checkbox" name="${l.key}" class="accent-blue-500 w-4 h-4" ${i[l.key]?"checked":""}><span class="text-sm text-gray-300">${l.label}</span></label>`:l.type==="textarea"?`<label class="lbl">${l.label}</label><textarea class="input-field" name="${l.key}" placeholder="${n(l.placeholder)}" rows="2">${n(i[l.key]||"")}</textarea>`:`<label class="lbl">${l.label}</label><input type="${l.type}" class="input-field" name="${l.key}" value="${n(i[l.key]||"")}" placeholder="${n(l.placeholder||"")}">`}
                  </div>`).join("")}
              </div>
              ${r.extra||""}
            </div>`).join("")}
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save Content Settings</button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}async function fi(){const e=new Set,t=[],a=i=>{for(const o of i||[]){const s=o&&(o.property_id||o.id);s&&!e.has(s)&&(e.add(s),t.push(o))}};try{const{data:i}=await u.from("showroom_listings").select("property_id,title,name,category,listing_type,images,is_active").order("created_at",{ascending:!1}).limit(500);a(i)}catch{}return a(je()),a(M),a(pt),a(mt),a(bt),a(gt),t.slice(0,250)}window.filterPromoPicker=function(e){const t=document.getElementById("promo-picker-list");if(!t)return;const a=(e||"").trim().toLowerCase();t.querySelectorAll("[data-promo-search]").forEach(i=>{i.style.display=!a||i.dataset.promoSearch.toLowerCase().includes(a)?"":"none"})};window.selectAllPromoPicks=function(){document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(e=>{e.checked=!0})};window.clearAllPromoPicks=function(){document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(e=>{e.checked=!1})};window.saveContent=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=Array.from(new Set(t.getAll("live_promo_product_ids").map(s=>String(s).trim()).filter(Boolean)));i.length?a.live_promo_product_ids=i:a.live_promo_product_ids=[];const{error:o}=await u.from("site_settings").upsert({id:1,...a});if(o){p(o.message,"error");return}p("Content settings saved!")};async function hi(){const e=document.getElementById("content");try{const[t,a,i]=await Promise.all([u.from("payment_receipts").select("amount,currency,status,created_at").order("created_at",{ascending:!1}).limit(500),u.from("showroom_listings").select("id,listing_type,category,is_active",{count:"exact"}),u.from("profiles").select("user_id,created_at",{count:"exact"})]),o=t.data||[],s=o.filter(c=>["approved","payment_approved","delivered"].includes(c.status)).reduce((c,b)=>c+(parseFloat(b.amount)||0),0),r=o.length>0?(o.filter(c=>c.status!=="cancelled").length/o.length*100).toFixed(1):0,l={};(a.data||[]).forEach(c=>{l[c.category]=(l[c.category]||0)+1});const d=Object.entries(l).sort((c,b)=>b[1]-c[1]).slice(0,8);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Analytics</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          ${E("Total Revenue",`$${s.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald")}
          ${E("Total Orders",o.length,"shopping-bag","blue")}
          ${E("Customers",i.count||0,"users","violet")}
          ${E("Conversion Rate",r+"%","trending-up","amber")}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="bar-chart-3" class="w-4 h-4 text-blue-400"></i> Revenue (Last 6 Months)</h3>
            <canvas id="analytics-chart" height="220"></canvas>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="pie-chart" class="w-4 h-4 text-violet-400"></i> Top Categories by Listings</h3>
            ${d.length===0?'<p class="text-xs text-gray-500 text-center py-8">No data</p>':d.map(([c,b])=>`
              <div class="flex items-center gap-3 py-1.5">
                <span class="text-xs text-gray-300 flex-1 truncate">${n(c)}</span>
                <div class="w-24 h-2 bg-blue-500/10 rounded-full overflow-hidden"><div class="h-full bg-blue-500 rounded-full" style="width:${Math.round(b/d[0][1]*100)}%"></div></div>
                <span class="text-xs font-bold text-white w-6 text-right">${b}</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),Rt(o)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}async function vi(){const e=document.getElementById("content"),{data:t}=await u.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">SEO Manager</h2>
      <form id="seo-form" onsubmit="saveSeo(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Homepage SEO</h3>
          <div><label class="lbl">Meta Title</label><input class="input-field" name="meta_title" value="${n(a.meta_title||"")}" placeholder="Weverse Online Shop | Premium International Commerce"></div>
          <div><label class="lbl">Meta Description</label><textarea class="input-field" name="meta_description" rows="2" placeholder="Your trusted global shop…">${n(a.meta_description||"")}</textarea></div>
          <div><label class="lbl">Meta Keywords (comma separated)</label><input class="input-field" name="meta_keywords" value="${n(a.meta_keywords||"")}" placeholder="global marketplace, online shopping, …"></div>
          <div><label class="lbl">Canonical URL</label><input class="input-field" name="canonical_url" value="${n(a.canonical_url||"")}" placeholder="https://yoursite.com"></div>
          <div><label class="lbl">OG Image URL (Social share image)</label><input class="input-field" name="og_image" value="${n(a.og_image||"")}" placeholder="https://…/og-image.jpg"></div>
          <div><label class="lbl">Google Analytics ID</label><input class="input-field" name="ga_id" value="${n(a.ga_id||"")}" placeholder="G-XXXXXXXXXX"></div>
          <div><label class="lbl">Google Search Console Verification</label><input class="input-field" name="gsc_verify" value="${n(a.gsc_verify||"")}" placeholder="Verification meta tag content"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save SEO Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSeo=async function(e){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());await u.from("site_settings").upsert({id:1,...t}),p("SEO settings saved!")};async function xi(){const e=document.getElementById("content"),{data:t}=await u.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
          <div><label class="lbl">Sender Name</label><input class="input-field" name="email_from_name" value="${n(a.email_from_name||"")}" placeholder="Weverse Online Shop"></div>
          <div><label class="lbl">Reply-To Email</label><input type="email" class="input-field" name="email_reply_to" value="${n(a.email_reply_to||"")}" placeholder="support@example.com"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save Email Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveEmailSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,o]of t.entries())a[i]=o;["email_order_placed","email_order_shipped","email_order_delivered","email_review_request"].forEach(i=>{i in a?a[i]=!0:a[i]=!1}),await u.from("site_settings").upsert({id:1,...a}),p("Email settings saved!")};async function he(){const e=document.getElementById("content");e&&(e.innerHTML=ie());try{const[t,a,i]=await Promise.all([u.from("admin_security_logs").select("*").order("created_at",{ascending:!1}).limit(50),u.from("admin_2fa").select("enabled,backup_codes,created_at").eq("user_id",w.user?.id).maybeSingle(),u.auth.mfa.listFactors()]),o=t.data||[],s=a.data||{},r=(i.data?.totp||[])[0],l=!!r&&r.status==="verified",d=(s.backup_codes||[]).filter(c=>!c.used).length;e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Security</h2>

        <!-- 2FA STATUS BANNER -->
        <div class="p-4 rounded-xl border flex items-center gap-4 ${l?"bg-emerald-500/5 border-emerald-500/20":"bg-amber-500/5 border-amber-500/20"}">
          <div class="w-10 h-10 ${l?"bg-emerald-500/10":"bg-amber-500/10"} rounded-xl flex items-center justify-center shrink-0">
            <i data-lucide="${l?"shield-check":"shield-alert"}" class="w-5 h-5 ${l?"text-emerald-400":"text-amber-400"}"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm font-black ${l?"text-emerald-300":"text-amber-300"}">Two-Factor Authentication is ${l?"ENABLED ✓":"NOT ENABLED"}</p>
            <p class="text-xs text-gray-400 mt-0.5">${l?`Backup codes available: ${d} · Enrolled: ${N(s.created_at)}`:"Enable 2FA to protect your admin account with an authenticator app."}</p>
          </div>
          ${l?'<button onclick="disable2FA()" class="btn-press flex-shrink-0 text-xs font-bold text-red-400 bg-red-500/10 hover:bg-red-500/20 px-3 py-1.5 rounded-xl transition">Disable 2FA</button>':'<button onclick="setup2FAFlow()" class="btn-press flex-shrink-0 text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-1.5 rounded-xl transition"><i data-lucide="shield-plus" class="w-3.5 h-3.5 inline mr-1"></i>Enable 2FA</button>'}
        </div>

        <!-- BACKUP CODES (only if 2FA enabled) -->
        ${l?`
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="key" class="w-4 h-4 text-amber-400"></i> Backup Recovery Codes</h3>
            <button onclick="regenerateBackupCodes()" class="btn-press text-xs font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 px-3 py-1.5 rounded-xl transition">Regenerate</button>
          </div>
          <p class="text-xs text-gray-400 mb-3">Save these codes in a safe place. Use them if you lose access to your authenticator app. Each code works only once.</p>
          <div id="backup-codes-display" class="grid grid-cols-2 gap-2">
            ${(s.backup_codes||[]).length===0?'<p class="text-xs text-gray-500 col-span-2 text-center py-4">No backup codes generated. Click Regenerate to create them.</p>':(s.backup_codes||[]).map(c=>`<code class="font-mono text-xs px-3 py-2 ${c.used?"bg-gray-900 text-gray-600 line-through":"bg-blue-500/5 text-blue-300 border border-blue-500/15"} rounded-lg">${typeof c=="object"?c.code:c}</code>`).join("")}
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
            <span class="text-xs text-gray-500">Last ${o.length} events</span>
          </div>
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Event</th><th>IP Address</th><th class="hidden sm:table-cell">Device</th><th>Date</th></tr></thead>
              <tbody>
                ${o.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No security events yet</td></tr>':o.map(c=>{const b=["login_success","login_2fa_success"].includes(c.event_type),y=["login_failed","login_denied","login_backup_code_used"].includes(c.event_type),g=b?"text-emerald-400":y?"text-red-400":"text-gray-300",f={login_success:"Login ✓",login_failed:"Failed Login ✗",login_denied:"Access Denied ✗",login_2fa_success:"2FA Verified ✓",login_backup_code_used:"Backup Code Used",logout:"Logged Out",logout_all_devices:"Logout All Devices"}[c.event_type]||c.event_type;return`<tr>
                      <td><span class="text-xs font-bold ${g}">${n(f)}</span></td>
                      <td><span class="text-xs font-mono text-gray-300">${n(c.ip_address||"—")}</span></td>
                      <td class="hidden sm:table-cell"><span class="text-xs text-gray-500 max-w-[160px] block truncate">${n((c.user_agent||"—").slice(0,50))}</span></td>
                      <td><span class="text-xs text-gray-500">${W(c.created_at)}</span></td>
                    </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,document.getElementById("new-pw")?.addEventListener("input",c=>{const b=c.target.value,y=[{label:"8+ characters",ok:b.length>=8},{label:"Uppercase letter",ok:/[A-Z]/.test(b)},{label:"Number",ok:/[0-9]/.test(b)},{label:"Special character",ok:/[^a-zA-Z0-9]/.test(b)}];document.getElementById("pw-strength").innerHTML=y.map(g=>`<div class="flex items-center gap-1.5 text-[10px] ${g.ok?"text-emerald-400":"text-gray-600"}">
          <i data-lucide="${g.ok?"check-circle":"circle"}" class="w-3 h-3"></i>${g.label}</div>`).join(""),window.lucide&&lucide.createIcons()}),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.changePassword=async function(e){e.preventDefault();const t=document.getElementById("current-pw").value,a=document.getElementById("new-pw").value,i=document.getElementById("confirm-pw").value;if(a!==i){p("Passwords do not match","error");return}if(a.length<8){p("Password must be at least 8 characters","error");return}const{error:o}=await u.auth.signInWithPassword({email:w.user.email,password:t});if(o){p("Current password is incorrect","error");return}const{error:s}=await u.auth.updateUser({password:a});if(s){p(s.message,"error");return}await F(w.user.id,"password_changed"),p("Password updated successfully!"),e.target.reset(),document.getElementById("pw-strength").innerHTML=""};window.setup2FAFlow=async function(){T(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="shield-plus" class="w-5 h-5 text-emerald-400"></i> Enable Two-Factor Authentication</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
        </div>
        <div id="2fa-setup-content">
          <div class="flex items-center justify-center py-8"><i data-lucide="loader-2" class="w-6 h-6 animate-spin text-blue-400"></i></div>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons();try{const{data:e,error:t}=await u.auth.mfa.enroll({factorType:"totp",friendlyName:"Weverse Admin"});if(t)throw t;const a=e.totp.qr_code,i=e.totp.secret,o=e.id;document.getElementById("2fa-setup-content").innerHTML=`
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
        <button onclick="confirm2FAEnrollment('${n(o)}')" class="btn-press w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2">
          <i data-lucide="shield-check" class="w-4 h-4"></i> Verify & Enable 2FA
        </button>
      </div>`,window.lucide&&lucide.createIcons(),setTimeout(()=>document.getElementById("setup-totp-code")?.focus(),100),document.getElementById("setup-totp-code")?.addEventListener("input",s=>{s.target.value=s.target.value.replace(/\D/g,"").slice(0,6)})}catch(e){document.getElementById("2fa-setup-content").innerHTML=`<div class="text-red-400 text-sm text-center py-4">${n(e.message)}</div>`}};window.confirm2FAEnrollment=async function(e){const t=document.getElementById("setup-totp-code")?.value?.trim(),a=document.getElementById("setup-2fa-error");if(!t||t.length!==6){a&&(a.textContent="Enter the 6-digit code.",a.classList.remove("hidden"));return}try{const{data:i,error:o}=await u.auth.mfa.challenge({factorId:e});if(o)throw o;const{error:s}=await u.auth.mfa.verify({factorId:e,challengeId:i.id,code:t});if(s)throw s;const r=Jt(10);await u.from("admin_2fa").upsert({user_id:w.user.id,enabled:!0,backup_codes:r}),await F(w.user.id,"2fa_enrolled"),G(),Xt(r.map(l=>l.code)),he()}catch(i){const o=document.getElementById("setup-2fa-error");o&&(o.textContent=i.message?.includes("Invalid")?"Wrong code. Check your app and try again.":i.message,o.classList.remove("hidden")),document.getElementById("setup-totp-code").value="",document.getElementById("setup-totp-code").focus()}};function Jt(e){const t=[];for(let a=0;a<e;a++){const i=Array.from({length:16},()=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random()*32)]).join("");t.push({code:`${i.slice(0,4)}-${i.slice(4,8)}-${i.slice(8,12)}-${i.slice(12,16)}`,used:!1})}return t}function Xt(e){T(`
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
`)).then(()=>p("Backup codes copied!"))};window.downloadBackupCodes=function(e){const t=new Blob([`Weverse Admin Backup Codes
Generated: ${new Date().toISOString()}

${e.join(`
`)}

Each code works once. Store securely.`],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download="kco-admin-backup-codes.txt",a.click()};window.regenerateBackupCodes=async function(){if(!confirm("This will invalidate ALL existing backup codes. Continue?"))return;const e=Jt(10);await u.from("admin_2fa").update({backup_codes:e}).eq("user_id",w.user.id),p("New backup codes generated"),Xt(e.map(t=>t.code)),he()};window.disable2FA=async function(){if(confirm("Disable two-factor authentication? Your account will be less secure."))try{const{data:e}=await u.auth.mfa.listFactors(),t=(e?.totp||[])[0];if(t){const{error:a}=await u.auth.mfa.unenroll({factorId:t.id});if(a)throw a}await u.from("admin_2fa").update({enabled:!1}).eq("user_id",w.user.id),await F(w.user.id,"2fa_disabled"),p("2FA has been disabled"),he()}catch(e){p(e.message,"error")}};async function wi(){const e=document.getElementById("content");try{const{data:t}=await u.from("admin_activity_logs").select("*").order("created_at",{ascending:!1}).limit(100);e.innerHTML=`
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
                    <td><span class="text-xs text-gray-500">${W(a.created_at)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}async function _i(){const e=document.getElementById("content");try{const{data:t}=await u.from("deployment_history").select("*").order("created_at",{ascending:!1}).limit(20);e.innerHTML=`
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
                <div class="flex-1"><p class="text-xs font-bold text-white">${n(a.version||a.id?.slice(0,8))}</p><p class="text-[10px] text-gray-500">${W(a.created_at)}</p></div>
                ${C(a.status||"completed")}
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.exportProducts=async function(){const{data:e}=await u.from("showroom_listings").select("*"),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download=`kco-products-${new Date().toISOString().slice(0,10)}.json`,a.click(),p("Products exported!")};window.exportOrders=async function(){const{data:e}=await u.from("payment_receipts").select("*").order("created_at",{ascending:!1});if(!e||!e.length){p("No orders to export","info");return}const t=Object.keys(e[0]).join(","),a=e.map(s=>Object.values(s).map(r=>`"${String(r||"").replace(/"/g,'""')}"`).join(",")).join(`
`),i=new Blob([t+`
`+a],{type:"text/csv"}),o=document.createElement("a");o.href=URL.createObjectURL(i),o.download=`kco-orders-${new Date().toISOString().slice(0,10)}.csv`,o.click(),p("Orders exported!")};async function ki(){const e=document.getElementById("content"),{data:t}=await u.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons()}window.saveSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,o]of t.entries())a[i]=o;["maintenance_mode","reviews_enabled","wishlist_enabled","guest_checkout"].forEach(i=>{a[i]=i in a}),await u.from("site_settings").upsert({id:1,...a}),p("Settings saved!")};async function ve(){const e=document.getElementById("content");e&&(e.innerHTML=ie());try{const{data:t}=await u.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{},i=a.homepage_banner_image||"",o=a.homepage_banner_alt||"Homepage header banner",s=i?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.";e.innerHTML=`
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
                ${i?`<img id="homepage-banner-preview-img" src="${n(i)}" alt="${n(o)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-off" class="mx-auto w-8 h-8 text-gray-500"></i><p class="mt-2 text-xs font-semibold text-gray-500">No banner selected</p></div></div>'}
              </div>
            </div>
            <div class="px-4 py-3 border-t border-white/5 bg-[#0b1020] flex items-center gap-2 text-[11px] text-gray-400">
              <i data-lucide="crop" class="w-3.5 h-3.5 text-blue-400"></i>
              <span>Crop / resize is previewed in a fixed banner frame. Wide images work best.</span>
            </div>
          </div>
          <p id="homepage-banner-preview-note" class="text-[10px] text-gray-500">${n(s)}</p>
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
                      ${i?`<img id="homepage-banner-image" src="${n(i)}" alt="${n(o)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-plus" class="mx-auto w-8 h-8 text-blue-400"></i><p class="mt-2 text-xs font-semibold text-gray-400">Upload a homepage banner</p></div></div>'}
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
                  <textarea class="input-field" id="homepage_banner_alt" name="homepage_banner_alt" rows="4" placeholder="Accessible description for the banner image">${n(o)}</textarea>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}async function xe(){const e=document.getElementById("content");e&&(e.innerHTML=ie());try{let t=function(l,d,c,b="",y="blue"){const g=!!(c&&c.trim());return`
        <div class="glass-soft border border-${y}-500/15 rounded-xl p-4 space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-xs font-black text-white">${n(l)}</p>
            ${g?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">✓ Uploaded</span>':'<span class="text-[9px] text-gray-600">Empty</span>'}
          </div>
          ${g?`<div class="relative group w-full h-24 rounded-xl overflow-hidden bg-gray-900 border border-blue-500/10 flex items-center justify-center">
                <img src="${n(c)}" alt="${n(l)}" class="max-h-20 max-w-full object-contain p-2" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-600 text-center&quot;>Image broken</p>'">
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                  <button type="button" onclick="triggerImgUpload('${d}')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">Replace</button>
                  <button type="button" onclick="clearBrandImg('${d}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
                </div>
               </div>`:`<div class="w-full h-24 rounded-xl border-2 border-dashed border-${y}-500/25 hover:border-${y}-500/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition" onclick="triggerImgUpload('${d}')">
                <i data-lucide="image-plus" class="w-7 h-7 text-${y}-400"></i>
                <p class="text-[11px] text-gray-500">Click to upload</p>
               </div>`}
          ${b?`<p class="text-[10px] text-gray-500">${n(b)}</p>`:""}
          <input type="file" id="file-${d}" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'${d}')">
          <input type="hidden" name="${d}" id="val-${d}" value="${n(c||"")}">
          <div class="flex gap-2">
            <input class="input-field text-xs flex-1 ${g?"":"hidden"}" id="url-${d}" value="${n(c||"")}" placeholder="Or paste image URL" oninput="document.getElementById('val-${d}').value=this.value;updateLivePreview()">
            <button type="button" onclick="document.getElementById('url-${d}').classList.toggle('hidden')" class="text-[10px] text-${y}-400 hover:text-${y}-300 transition shrink-0">${g?"Edit URL":"Paste URL"}</button>
          </div>
        </div>`};const{data:a}=await u.from("site_settings").select("*").limit(1).maybeSingle(),i=a||{},o=i.brand_name||i.site_name||_t,s=i.brand_slogan||i.site_tagline||kt,r=i.brand_logo||i.brand_header_logo||"";e.innerHTML=`
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
                ${r?`<img src="${n(r)}" alt="${n(o)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
              </div>
              <div>
                <p id="preview-name" class="text-sm font-black text-white leading-none">${n(o)}</p>
                <p id="preview-slogan" class="text-[10px] text-blue-400 font-semibold mt-0.5">${n(s)}</p>
              </div>
              <div id="preview-badge-wrap" class="ml-auto ${i.brand_badge?"":"hidden"}">
                <img id="preview-badge" src="${n(i.brand_badge||"")}" alt="Verified" class="w-6 h-6 object-contain">
              </div>
            </div>
            <div class="px-4 py-2 border-t border-gray-800 text-[11px] text-gray-500" style="background:#070b16">
              <span id="preview-btn" style="background:${n(i.brand_primary_color||"#f97316")};color:#000;padding:4px 12px;border-radius:8px;font-weight:700;font-size:11px">Shop Now</span>
              <span class="ml-3" style="color:${n(i.brand_secondary_color||"#3b82f6")}">All Products →</span>
            </div>
          </div>
          <!-- Footer preview -->
          <div id="preview-footer" class="rounded-xl px-4 py-3 border border-gray-800 flex items-center gap-3" style="background:#0f172a">
            <div id="preview-footer-logo-wrap" class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style="background:var(--preview-primary,#f97316)">
              ${r?`<img src="${n(r)}" alt="${n(o)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
            </div>
            <div>
              <p id="preview-footer-name" class="text-xs font-black text-white">${n(o)}</p>
              <p id="preview-footer-slogan" class="text-[10px] text-gray-500">${n(s)}</p>
            </div>
            <p class="ml-auto text-[10px] text-gray-600">© 2026 <span id="preview-copy-name">${n(o)}</span></p>
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
                <input class="input-field" name="brand_name" id="inp-brand-name" value="${n(o)}" placeholder="Your brand name" required oninput="updateLivePreview()">
              </div>
              <div>
                <label class="lbl">Short Name</label>
                <input class="input-field" name="brand_short_name" value="${n(i.brand_short_name||"")}" placeholder="e.g. Weverse">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Slogan / Tagline *</label>
                <input class="input-field" name="brand_slogan" id="inp-brand-slogan" value="${n(s)}" placeholder="e.g. Global Shopping • Worldwide Delivery" oninput="updateLivePreview()">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Brand Description</label>
                <textarea class="input-field" name="brand_description" rows="2" placeholder="Short description…">${n(i.brand_description||"")}</textarea>
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
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-primary" value="${n(i.brand_primary_color||"#f97316")}" oninput="document.getElementById('ct-primary').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-primary" name="brand_primary_color" value="${n(i.brand_primary_color||"#f97316")}" placeholder="#f97316" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-primary').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Secondary Color (links, highlights)</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-secondary" value="${n(i.brand_secondary_color||"#3b82f6")}" oninput="document.getElementById('ct-secondary').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-secondary" name="brand_secondary_color" value="${n(i.brand_secondary_color||"#3b82f6")}" placeholder="#3b82f6" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-secondary').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Tagline Color 1 (e.g. "GLOBAL SHOPPING")</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-tag1" value="${n(i.brand_tagline_color1||"#22d3ee")}" oninput="document.getElementById('ct-tag1').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-tag1" name="brand_tagline_color1" value="${n(i.brand_tagline_color1||"#22d3ee")}" placeholder="#22d3ee" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-tag1').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Tagline Color 2 (e.g. "WORLDWIDE DELIVERY")</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-tag2" value="${n(i.brand_tagline_color2||"#a3e635")}" oninput="document.getElementById('ct-tag2').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-tag2" name="brand_tagline_color2" value="${n(i.brand_tagline_color2||"#a3e635")}" placeholder="#a3e635" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-tag2').value=this.value;updateLivePreview()">
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
                  ${["Inter","Poppins","Roboto","Montserrat","Nunito","Raleway","Lato","Open Sans","Outfit","Plus Jakarta Sans","DM Sans","Urbanist","Sora","Manrope","Work Sans","Space Grotesk"].map(l=>`<option value="${l}" ${(i.brand_font||"Inter")===l?"selected":""}>${l}</option>`).join("")}
                </select>
              </div>
              <div>
                <label class="lbl">Custom Google Font (overrides above)</label>
                <input class="input-field" name="brand_custom_font" value="${n(i.brand_custom_font||"")}" placeholder="e.g. Space Grotesk">
              </div>
            </div>
            <div id="font-preview" class="p-3 rounded-xl bg-gray-900 border border-blue-500/10">
              <p id="font-sample" class="text-sm text-white font-bold" style="font-family:'${n(i.brand_font||"Inter")}',sans-serif">The quick brown fox jumps — 0123456789 · Weverse Online Shop</p>
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
              ${t("Verification Badge Image","brand_badge",i.brand_badge,"Upload your blue checkmark or any verification badge. Recommended: 64×64px PNG with transparent background.","blue")}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              ${t("Brand Logo / Banner Image","brand_logo",r,"Upload your image here. This changes only the logo/banner image and keeps the other brand fields as they are.")}
              ${t("Favicon / Tab Icon","brand_favicon",i.brand_favicon,"Browser tab icon. 32×32 or 64×64px.")}
              ${t("Mobile Logo","brand_mobile_logo",i.brand_mobile_logo,"Smaller logo for phones. 120×40px.")}
              ${t("Header Logo","brand_header_logo",i.brand_header_logo,"Top navigation bar.")}
              ${t("Footer Logo","brand_footer_logo",i.brand_footer_logo,"Website footer.")}
              ${t("Login Page Logo","brand_login_logo",i.brand_login_logo,"Shown on auth/login page.")}
              ${t("Admin Dashboard Logo","brand_admin_logo",i.brand_admin_logo,"Admin sidebar header.")}
              ${t("OG / Social Image","brand_og_image",i.brand_og_image,"1200×630px — shown when sharing links.")}
            </div>
          </div>

          <!-- ── Contact ── -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="globe" class="w-4 h-4 text-blue-400"></i> Website & Contact</h3>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Website URL</label><input class="input-field" name="brand_website_url" value="${n(i.brand_website_url||i.production_url||"https://weverseonlineshop.com")}" placeholder="https://…"></div>
              <div><label class="lbl">Support Email</label><input type="email" class="input-field" name="brand_email" value="${n(i.brand_email||i.contact_email||"")}" placeholder="support@…"></div>
              <div><label class="lbl">Phone / WhatsApp</label><input class="input-field" name="brand_phone" value="${n(i.brand_phone||i.contact_phone||"")}" placeholder="+1 234…"></div>
              <div><label class="lbl">Business Address</label><input class="input-field" name="brand_address" value="${n(i.brand_address||i.contact_address||"")}" placeholder="City, Country"></div>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.toggleLivePreview=function(){document.getElementById("live-preview-panel")?.classList.toggle("hidden"),updateLivePreview()};window.updateLivePreview=function(){const e=document.getElementById("live-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("inp-brand-name")?.value||_t,a=document.getElementById("inp-brand-slogan")?.value||kt,i=document.getElementById("ct-primary")?.value||"#f97316",o=document.getElementById("ct-secondary")?.value||"#3b82f6",s=document.getElementById("ct-tag1")?.value||"#22d3ee",r=document.getElementById("ct-tag2")?.value||"#a3e635",l=document.getElementById("val-brand_logo")?.value||DEFAULT_BRAND_LOGO,d=document.getElementById("val-brand_badge")?.value||"";["preview-name","preview-footer-name","preview-copy-name"].forEach(m=>{const h=document.getElementById(m);h&&(h.textContent=t)}),["preview-slogan","preview-footer-slogan"].forEach(m=>{const h=document.getElementById(m);h&&(h.textContent=a)});const c=document.getElementById("preview-slogan");if(c&&a){const m=a,h=m.indexOf(","),_=h>-1?m.slice(0,h+1):m,I=h>-1?m.slice(h+1):"";c.innerHTML=`<span style="color:${s};font-weight:800">${n(_)}</span><span style="color:${r};font-weight:700">${n(I)}</span>`}const b=document.getElementById("preview-btn");b&&(b.style.background=i);const y=e.querySelector('[style*="color:"]');y&&(y.style.color=o),["preview-logo-wrap","preview-footer-logo-wrap"].forEach(m=>{const h=document.getElementById(m);h&&(l?(h.innerHTML=`<img src="${l}" alt="${t}" class="w-full h-full object-contain p-1">`,h.style.background="transparent"):(h.innerHTML='<i data-lucide="globe" class="w-4 h-4 text-white"></i>',h.style.background=i,window.lucide&&lucide.createIcons()))});const g=document.getElementById("preview-badge-wrap"),f=document.getElementById("preview-badge");g&&f&&(d?(f.src=d,g.classList.remove("hidden")):g.classList.add("hidden"))};window.triggerImgUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearBrandImg=function(e){document.getElementById("val-"+e).value="";const t=document.getElementById("url-"+e);t&&(t.value=""),(e&&e.startsWith("homepage_")?ve:xe)()};window.clearHomepageBannerImg=function(){const e=document.getElementById("val-homepage_banner_image"),t=document.getElementById("url-homepage_banner_image"),a=document.getElementById("homepage_banner_alt");e&&(e.value=""),t&&(t.value=""),a&&(a.value=""),ve()};window.restoreHomepageBannerDefault=function(){window.clearHomepageBannerImg()};window.syncColor=function(e,t){const a=document.getElementById("color-"+e);a&&/^#[0-9a-fA-F]{6}$/.test(t)&&(a.value=t)};window.previewFont=function(e){const t=document.getElementById("font-sample");t&&(t.style.fontFamily=`'${e}', sans-serif`);const a="gf-preview";let i=document.getElementById(a);i||(i=document.createElement("link"),i.id=a,i.rel="stylesheet",document.head.appendChild(i)),i.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(e)}:wght@400;700;900&display=swap`};const Re="weverse_brand_v1",Fe="weverse_brand_override_v1";function Ue(){try{const e=JSON.parse(localStorage.getItem(Fe)||"null");if(e&&typeof e=="object")return e}catch{}try{const e=JSON.parse(localStorage.getItem(Re)||"null");if(e&&typeof e=="object")return e.data&&typeof e.data=="object"?e.data:e}catch{}return{}}function ce(e){const t={...Ue(),...e};try{localStorage.setItem(Fe,JSON.stringify(t))}catch{}try{localStorage.setItem(Re,JSON.stringify({ts:Date.now(),data:t}))}catch{}return window.dispatchEvent(new StorageEvent("storage",{key:Fe})),window.dispatchEvent(new StorageEvent("storage",{key:Re})),window.dispatchEvent(new CustomEvent("brand-updated",{detail:t})),t}window.handleBrandImgUpload=async function(e,t){const a=e.target.files?.[0];if(!a)return;const i=t&&t.startsWith("homepage_"),o=document.getElementById(i?"homepage-banner-status":"brand-upload-status"),s=document.getElementById(i?"homepage-banner-msg":"brand-upload-msg");o&&o.classList.remove("hidden"),s&&(s.textContent=`Uploading ${a.name}…`);try{const r=a.name.split(".").pop(),l=`brand/${t}-${Date.now()}.${r}`,{error:d}=await u.storage.from("product-images").upload(l,a,{contentType:a.type,upsert:!0});let c;if(d)c=URL.createObjectURL(a),s&&(s.textContent=`Preview only (storage: ${d.message})`);else{const{data:g}=u.storage.from("product-images").getPublicUrl(l);c=g.publicUrl,s&&(s.textContent=`✓ ${a.name} uploaded`)}const b=document.getElementById("val-"+t),y=document.getElementById("url-"+t);b&&(b.value=c),y&&(y.value=c,y.classList.remove("hidden")),i?updateHomepageBannerPreview():(updateLivePreview(),setTimeout(()=>xe(),1e3))}catch(r){s&&(s.textContent=`Upload failed: ${r.message}`)}setTimeout(()=>o?.classList.add("hidden"),4e3)};window.saveBrandSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[l,d]of t.entries())l.endsWith("_url")||(a[l]=d);a.brand_name&&(a.site_name=a.brand_name),a.brand_slogan&&(a.site_tagline=a.brand_slogan),a.brand_description&&(a.site_description=a.brand_description),a.brand_email&&(a.contact_email=a.brand_email),a.brand_phone&&(a.contact_phone=a.brand_phone),a.brand_address&&(a.contact_address=a.brand_address),a.brand_website_url&&(a.production_url=a.brand_website_url);const i=a.brand_custom_font||a.brand_font;i&&previewFont(i);const o=e.target.querySelector("[type=submit]");o&&(o.disabled=!0,o.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Saving…',window.lucide&&lucide.createIcons());const{data:s}=await u.from("site_settings").select("id").limit(1).maybeSingle();let r;s?.id?{error:r}=await u.from("site_settings").update(a).eq("id",s.id):{error:r}=await u.from("site_settings").insert(a),r?(ce(a),p("Brand saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(ce(a),p("✅ Brand saved! All pages will now show your updated brand.","success")),setTimeout(()=>xe(),500)};window.toggleHomepageBannerPreview=function(){document.getElementById("homepage-banner-preview-panel")?.classList.toggle("hidden"),updateHomepageBannerPreview()};window.updateHomepageBannerPreview=function(){const e=document.getElementById("homepage-banner-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("val-homepage_banner_image")?.value||"",a=document.getElementById("homepage_banner_alt")?.value||"Homepage header banner",i=document.getElementById("homepage-banner-image"),o=document.getElementById("homepage-banner-preview-img");[i,o].forEach(r=>{r&&(t?(r.src=t,r.alt=a,r.classList.remove("hidden")):r.classList.add("hidden"))});const s=document.getElementById("homepage-banner-preview-note");s&&(s.textContent=t?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.")};window.saveHomepageBranding=async function(e){e.preventDefault();const t={homepage_banner_image:document.getElementById("url-homepage_banner_image")?.value||"",homepage_banner_alt:document.getElementById("homepage_banner_alt")?.value||"Homepage header banner"},a=e.target.querySelector("[type=submit]");a&&(a.disabled=!0,a.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishing…',window.lucide&&lucide.createIcons());const{data:i}=await u.from("site_settings").select("id").limit(1).maybeSingle();let o;i?.id?{error:o}=await u.from("site_settings").update(t).eq("id",i.id):{error:o}=await u.from("site_settings").insert(t),o?(ce({...Ue(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),p("Homepage banner saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(ce({...Ue(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),p("Homepage banner published.","success")),setTimeout(()=>ve(),500)};window._manualPaymentAccounts=[];function Ze(e="USD"){return{id:`bank-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,currency:e,currencyName:e,flag:ut("US"),country:"United States",country_code:"US",bankName:"",transferType:"Local & International",beneficiary:"",accountNumber:"",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:""}}function et(){const e=document.getElementById("manual-payment-accounts-json");e&&(e.value=JSON.stringify(window._manualPaymentAccounts||[]))}function Si(e,t){const a=e.country_code||"US";return`
    <div class="p-4 glass-soft border border-blue-500/10 rounded-xl space-y-3">
      <div class="flex items-center justify-between gap-3">
        <h4 class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="building-2" class="w-3.5 h-3.5 text-blue-400"></i> Bank Account ${t+1}</h4>
        <button type="button" onclick="removeManualPaymentAccount(${t})" class="text-[11px] font-bold text-red-400 hover:text-red-300 transition">Remove</button>
      </div>
      <div class="form-grid form-grid-2">
        <div><label class="lbl">Currency *</label><select class="input-field" onchange="updateManualPaymentAccount(${t}, 'currency', this.value)">${St.map(i=>`<option value="${i}" ${e.currency===i?"selected":""}>${i}</option>`).join("")}</select></div>
        <div><label class="lbl">Country *</label><select class="input-field" onchange="updateManualPaymentCountry(${t}, this.value)">${Ut(a)}</select></div>
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
    </div>`}window.renderManualPaymentAccountsEditor=function(){const e=document.getElementById("manual-accounts-editor");e&&(window._manualPaymentAccounts?.length||(window._manualPaymentAccounts=[Ze()]),e.innerHTML=`
    <div class="space-y-4">
      ${window._manualPaymentAccounts.map((t,a)=>Si(t,a)).join("")}
      <button type="button" onclick="addManualPaymentAccount()" class="btn-press w-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wide transition flex items-center justify-center gap-2">
        <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Another Bank Account
      </button>
    </div>`,et(),window.lucide&&lucide.createIcons())};window.addManualPaymentAccount=function(){window._manualPaymentAccounts.push(Ze()),renderManualPaymentAccountsEditor()};window.removeManualPaymentAccount=function(e){window._manualPaymentAccounts.splice(e,1),window._manualPaymentAccounts.length||(window._manualPaymentAccounts=[Ze()]),renderManualPaymentAccountsEditor()};window.updateManualPaymentAccount=function(e,t,a){const i=window._manualPaymentAccounts[e];i&&(i[t]=a,t==="currency"&&(i.currencyName=a),et())};window.updateManualPaymentCountry=function(e,t){const a=window._manualPaymentAccounts[e];if(!a)return;const i=ue.find(o=>o.code===t);a.country_code=t,a.country=i?.name||"",a.flag=i?.flag||ut(t),et(),renderManualPaymentAccountsEditor()};async function Ne(){const e=document.getElementById("content");e&&(e.innerHTML=ie());try{const{data:t}=await u.from("site_settings").select("*").limit(1).maybeSingle(),i={...na()||{},...t||{}};window._manualPaymentAccounts=la(i).map(o=>({...o})),e.innerHTML=`
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
                <textarea class="input-field" name="manual_payment_instructions" rows="4" placeholder="Explain how customers should pay and upload their receipt.">${n(da(i))}</textarea>
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
                <div><label class="lbl">Accepted Currency</label><select class="input-field" name="flutterwave_currency">${["NGN","USD","GBP","EUR","GHS","KES","ZAR","ZMW","TZS","UGX","XAF","XOF"].map(o=>`<option value="${o}" ${(i.flutterwave_currency||"NGN")===o?"selected":""}>${o}</option>`).join("")}</select></div>
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
              ${[{id:"manual",label:"Manual / Bank Transfer",icon:"landmark",color:"blue"},{id:"flutterwave",label:"Flutterwave",icon:"zap",color:"amber"},{id:"both",label:"Both (customer chooses)",icon:"layers",color:"emerald"}].map(o=>`<label class="flex items-center gap-3 p-3 glass-soft border ${(i.payment_gateway||"manual")===o.id?"border-blue-500/40 bg-blue-500/5":"border-blue-500/10"} rounded-xl cursor-pointer hover:border-blue-500/30 transition"><input type="radio" name="payment_gateway" value="${o.id}" ${(i.payment_gateway||"manual")===o.id?"checked":""} class="accent-blue-500"><div><i data-lucide="${o.icon}" class="w-4 h-4 text-${o.color}-400 mb-0.5"></i><p class="text-xs font-bold text-white">${o.label}</p></div></label>`).join("")}
            </div>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2"><i data-lucide="save" class="w-4 h-4"></i> Save Payment Settings</button>
        </form>
      </div>`,renderManualPaymentAccountsEditor(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.savePaymentSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=["flutterwave_public_key","flutterwave_secret_key","flutterwave_encryption_key","flutterwave_webhook_secret"],o={};for(const[b,y]of Object.entries(a))i.includes(b)?y&&!y.startsWith("••••")&&y.trim()!==""&&(o[b]=y.trim()):o[b]=y;o.manual_payment_enabled=a.manual_payment_enabled==="on",o.flutterwave_enabled=a.flutterwave_enabled==="on";let s=[];try{s=JSON.parse(a.manual_payment_accounts_json||"[]")}catch{}o.manual_payment_accounts=s;const r=s[0]||{},l=s[1]||{};o.bank1_account_name=r.beneficiary||"",o.bank1_account_number=r.accountNumber||"",o.bank1_bank_name=r.bankName||"",o.bank1_transfer_type=r.transferType||"",o.bank1_sort_code=r.sortCode||r.routing||"",o.bank1_currency=r.currency||"USD",o.bank2_account_name=l.beneficiary||"",o.bank2_account_number=l.accountNumber||"",o.bank2_bank_name=l.bankName||"",o.bank2_transfer_type=l.transferType||"",o.bank2_sort_code=l.sortCode||l.routing||"",o.bank2_currency=l.currency||"USD",ra(o);const{data:d}=await u.from("site_settings").select("id").limit(1).maybeSingle();let c;if(d?.id?{error:c}=await u.from("site_settings").update(o).eq("id",d.id):{error:c}=await u.from("site_settings").insert(o),c){const b=String(c.message||"");if(/manual_payment_accounts|column|schema cache/i.test(b)){p("Payment settings saved locally. Run the latest migration to persist them to Supabase.","info"),console.warn(c),setTimeout(()=>Ne(),500);return}p("Save failed: "+c.message,"error"),console.error(c);return}p("✅ Payment settings saved successfully!","success"),setTimeout(()=>Ne(),500)};window.testFlutterwaveKeys=async function(){const{data:e}=await u.from("site_settings").select("flutterwave_public_key").limit(1).maybeSingle();if(!e?.flutterwave_public_key){p("Save your Flutterwave public key first","info");return}p("Flutterwave key is saved. Use test mode + test card to verify a payment flow.","info")};async function we(){const e=document.getElementById("content");try{const{data:t}=await u.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
            </div>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            💾 Save Deploy & Payment Settings
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${n(t.message)}</div>`)}}window.saveDeploySettings=async function(e){e.preventDefault();const t=e.target?.querySelector("[type=submit]");t&&(t.disabled=!0,t.innerHTML="Saving…");const a=new FormData(e.target),i=Object.fromEntries(a.entries()),o={},s=["github_token","payment_public_key","payment_secret_key","payment_webhook_secret"];for(const[l,d]of Object.entries(i))s.includes(l)?d&&!d.startsWith("•")&&d.trim()!==""&&(o[l]=d.trim()):o[l]=d;const{error:r}=await u.from("site_settings").upsert({id:1,...o});if(t&&(t.disabled=!1,t.innerHTML="💾 Save Deploy & Payment Settings"),r){p(r.message,"error");return}p("Deploy & payment settings saved!"),we()};async function Qt(e="deploy"){const{data:t}=await u.from("site_settings").select("deploy_webhook,production_url,github_repo").limit(1).maybeSingle();if(!t?.deploy_webhook)return p("No webhook URL set. Add your deploy webhook in the settings below.","info"),{ok:!1,reason:"missing_webhook"};let a=t.deploy_webhook;try{const i=new URL(a);e==="rebuild"&&i.searchParams.set("rebuild","1"),a=i.toString()}catch{e==="rebuild"&&(a+=(a.includes("?")?"&":"?")+"rebuild=1")}return{ok:!0,settings:t,hookUrl:a}}async function q(e,t={}){const a=t.version||new Date().toISOString(),i={source:"admin-dashboard",mode:t.mode||"deploy",production_url:t.productionUrl||null,github_repo:t.githubRepo||null,webhook:t.webhook||null,message:t.message||null},{data:o,error:s}=await u.from("deployment_history").insert({version:a,status:e,triggered_by_email:w.user?.email||null,metadata:i,error_message:t.errorMessage||null}).select("id").limit(1).maybeSingle();return{data:o,error:s}}function J(e,t,a,i){if(!e)return;e.disabled=t;const o=e.querySelector("p.text-xs.font-black");o&&(o.textContent=t?a:i)}window.triggerDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-deploy-btn]");J(t,!0,"Deploying…","Deploy Now");try{const a=await Qt("deploy");if(!a.ok)return;const{settings:i,hookUrl:o}=a;await q("preparing",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,message:"Deployment queued from admin UI"});const s=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"deploy",source:"admin-dashboard",at:new Date().toISOString()})});if(s.ok)p("🚀 Deployment triggered! Your site will be live in ~2 minutes."),await q("deploying",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,message:"Webhook accepted deployment request"}),setTimeout(()=>we(),400);else{const r=`Webhook returned error: ${s.status}`;p(r,"error"),await q("failed",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,errorMessage:r})}}catch(a){p("Deploy failed: "+a.message,"error"),await q("failed",{mode:"deploy",errorMessage:a.message})}finally{J(t,!1,"Deploying…","Deploy Now")}};window.triggerRebuild=async function(e){const t=e?.currentTarget||document.querySelector("[data-rebuild-btn]");J(t,!0,"Rebuilding…","Rebuild Site");try{const a=await Qt("rebuild");if(!a.ok)return;const{settings:i,hookUrl:o}=a;await q("building",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,message:"Rebuild requested from admin UI"});const s=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"rebuild",source:"admin-dashboard",at:new Date().toISOString()})});if(s.ok)p("🔄 Rebuild triggered successfully."),await q("deploying",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,message:"Webhook accepted rebuild request"}),setTimeout(()=>we(),400);else{const r=`Rebuild webhook error: ${s.status}`;p(r,"error"),await q("failed",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,errorMessage:r})}}catch(a){p("Rebuild failed: "+a.message,"error"),await q("failed",{mode:"rebuild",errorMessage:a.message})}finally{J(t,!1,"Rebuilding…","Rebuild Site")}};window.publishAndDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-publish-easy-btn]");J(t,!0,"Publishing…","One-Click Publish");try{const a=document.getElementById("deploy-form");if(!a){p("Deploy form is not available. Reload and try again.","error");return}await window.saveDeploySettings({preventDefault(){},target:a}),await window.triggerDeploy()}catch(a){p("Publish failed: "+a.message,"error")}finally{J(t,!1,"Publishing…","One-Click Publish")}};window.reindexSearch=async function(){const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=t?.textContent||"";t&&(t.textContent="Reindexing…");try{const{data:i,error:o}=await u.from("showroom_listings").select("id, updated_at").order("updated_at",{ascending:!1});if(o)return B(o)?p("⚠️ Reindex blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):p("Could not load listings to reindex: "+o.message,"error");const s=i||[];if(!s.length){p("No listings to reindex.");return}let r=0,l=0,d=!1;const c=40;for(let b=0;b<s.length;b+=c){const y=s.slice(b,b+c),{error:g}=await u.from("showroom_listings").update({updated_at:new Date().toISOString()}).in("id",y.map(f=>f.id));g?(B(g)&&(d=!0),l+=y.length):r+=y.length,t&&(t.textContent=`Reindexing… ${Math.min(b+c,s.length)}/${s.length}`)}if(d){p(`⚠️ Reindex partially blocked: database admin role rejected some writes. Re-run the admin permission migration. (${r}/${s.length} done)`,"error");return}p(`Search index rebuilt for ${r} listing${r!==1?"s":""}${l?` (${l} failed)`:""}.`,l?"error":"success")}catch(i){p("Reindex failed: "+i.message,"error")}finally{t&&(t.textContent=a)}};window.syncShowroomToDB=async function(){if(!Array.isArray(M)||!M.length){p("No static showroom listings found to sync.","info");return}const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=t?.textContent||"";t&&(t.textContent="Syncing…");try{const{data:i,error:o}=await u.from("showroom_listings").select("property_id");if(o)return B(o)?p("⚠️ Sync blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):p("Could not load existing listings: "+o.message,"error");const s=new Set((i||[]).map(y=>y.property_id)),r=M.filter(y=>y&&y.property_id&&!s.has(y.property_id));if(!r.length){p("Showroom already in sync — no new listings to add.");return}let l=0,d=0,c=!1;const b=20;for(let y=0;y<r.length;y+=b){const g=r.slice(y,y+b).map(m=>({property_id:m.property_id,listing_type:m.listing_type||"product",category:m.category||null,subcategory:m.subcategory||null,title:m.title||"Untitled Listing",description:m.description||"",price:parseFloat(m.price)||0,currency:m.currency||"USD",country:m.country||"",country_code:m.country_code||"",state:m.state||"",city:m.city||"",town:m.town||"",product_location:m.product_location||"",latitude:m.latitude??null,longitude:m.longitude??null,property_type:m.property_type||null,listing_status:m.listing_status||"sale",bedrooms:m.bedrooms??null,bathrooms:m.bathrooms??null,building_size:m.building_size||"",land_size:m.land_size||"",parking_spaces:m.parking_spaces??null,furnished:m.furnished||"",features:Array.isArray(m.features)?m.features:[],tags:Array.isArray(m.tags)?m.tags:[],highlights:Array.isArray(m.highlights)?m.highlights:[],seo_keywords:Array.isArray(m.seo_keywords)?m.seo_keywords:[],images:Array.isArray(m.images)?m.images:[],brand:m.brand||null,color:m.color||null,size:m.size||null,condition:m.condition||null,warranty:m.warranty||null,availability_status:m.availability_status||"In Stock",stock_quantity:m.stock_quantity!=null?parseInt(m.stock_quantity,10):null,is_active:m.is_active!==!1,is_featured:!!m.is_featured,is_ai_generated:!!m.is_ai_generated,ai_generated_fields:Array.isArray(m.ai_generated_fields)?m.ai_generated_fields:[],specifications:m.specifications||{},created_at:m.created_at||new Date().toISOString()})),{error:f}=await u.from("showroom_listings").insert(g);f?(B(f)&&(c=!0),d+=g.length):l+=g.length,t&&(t.textContent=`Syncing… ${Math.min(y+b,r.length)}/${r.length}`)}if(c){p(`⚠️ Sync partially blocked: database admin role rejected some inserts. Re-run the admin permission migration. (${l}/${r.length} added)`,"error");return}p(`Showroom synced: ${l} new listing${l!==1?"s":""} added to the database${d?` (${d} failed)`:""}.`,d?"error":"success")}catch(i){p("Sync failed: "+i.message,"error")}finally{t&&(t.textContent=a)}};window.testGitHubConnection=async function(){const e=document.querySelector("[name=github_username]")?.value?.trim(),t=document.querySelector("[name=github_repo]")?.value?.trim();if(!e||!t){p("Enter your GitHub username and repo name first","info");return}try{const a=await fetch(`https://api.github.com/repos/${e}/${t}`);if(a.ok){const i=await a.json();p(`✓ Connected: ${i.full_name} (${i.visibility})`)}else a.status===404?p("Repository not found. Check username and repo name.","error"):p("GitHub API error: "+a.status,"error")}catch{p("Could not reach GitHub API","error")}};window.deployToProduction=window.triggerDeploy;window.rebuildSite=window.triggerRebuild;const ae=30,k={category:null,page:0,query:""};async function te(){const e=document.getElementById("content");if(!e)return;await ma();const t=new Set(ft()),a=ca();k.category||(k.category=a[0]?.slug||null);const i=yt(k.category),o=i?i.count:0,s=k.query.trim().toLowerCase(),r=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-xl font-black text-white">Generated Catalog</h2>
        <p class="text-xs text-gray-500 mt-1">Deterministic storefront items. Hiding a listing removes it from the site everywhere — including direct links.</p>
      </div>
      <button onclick="catalogResetHidden()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition">Show All Hidden</button>
    </div>`,l=`
    <div class="flex flex-wrap gap-2">
      ${a.map(f=>`<button onclick="catalogSetCategory('${f.slug}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${k.category===f.slug?"bg-blue-500/20 text-blue-200 border-blue-500/40":"bg-white/5 text-gray-400 border-white/10 hover:text-white"}">${n(f.name)}</button>`).join("")}
    </div>`,d=`
    <div class="flex flex-wrap items-center gap-2">
      <input id="catalog-search-input" class="input-field flex-1 min-w-[220px]" placeholder="Search title, id or subcategory…" value="${n(k.query)}" onkeyup="if (event.key === 'Enter') catalogSearch()">
      <button onclick="catalogSearch()" class="btn-press px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition">Search</button>
    </div>`;let c=[];if(i)if(s){const f=Math.min(o,8e3);for(let m=0;m<f&&c.length<ae;m++){const h=rt(i.slug,m);if(!h)continue;`${h.property_id} ${h.title} ${h.subcategory||""} ${h.category||""}`.toLowerCase().includes(s)&&c.push(h)}}else{const f=k.page*ae,m=Math.min(f+ae,o);for(let h=f;h<m;h++){const _=rt(i.slug,h);_&&c.push(_)}}const b=c.length?c.map(f=>{const m=t.has(f.property_id),h=f.images&&f.images[0]||"/fallback.svg";return`
          <div class="flex items-center gap-3 p-3 rounded-xl border ${m?"border-red-500/25 bg-red-500/5":"border-white/10 bg-white/[0.02]"}">
            <img src="${n(h)}" alt="" class="w-12 h-12 rounded-lg object-cover bg-gray-800 shrink-0" loading="lazy">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-white truncate">${n(f.title)}</p>
              <p class="text-[11px] text-gray-500 truncate">${n(f.property_id)} · ${n(f.subcategory||f.category||"")} · ${$t(f.price,"USD")}</p>
            </div>
            ${C(!m)}
            <button onclick="catalogToggle('${n(f.property_id)}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${m?"bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25":"bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20"}">
              ${m?"Show":"Hide"}
            </button>
          </div>`}).join(""):'<div class="text-center py-16 text-gray-500 text-sm">No catalog items match.</div>',y=s?1:Math.max(1,Math.ceil(o/ae)),g=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <p class="text-xs text-gray-500">${s?`${c.length} match`:`${o.toLocaleString()} items in ${n(i?.name||"")}`} · ${t.size} hidden</p>
      <div class="flex items-center gap-2">
        <button onclick="catalogPage(-1)" ${k.page<=0?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Prev</button>
        <span class="text-xs text-gray-500">Page ${k.page+1} / ${y}</span>
        <button onclick="catalogPage(1)" ${k.page>=y-1?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Next</button>
      </div>
    </div>`;e.innerHTML=`
    <div class="space-y-4 fade-in">
      ${r}
      ${l}
      ${d}
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 space-y-2">${b}</div>
      ${g}
    </div>`,window.lucide&&lucide.createIcons()}window.catalogSetCategory=function(e){k.category=e,k.page=0,k.query="",te()};window.catalogSearch=function(){const e=document.getElementById("catalog-search-input");k.query=e?e.value:"",k.page=0,te()};window.catalogPage=function(e){const t=yt(k.category),a=t?t.count:0,i=k.query.trim()?1:Math.max(1,Math.ceil(a/ae));k.page=Math.max(0,Math.min(i-1,k.page+e)),te()};window.catalogToggle=async function(e){const t=!ft().includes(e),a=await ua(e,t);p(t?"Listing hidden from storefront":"Listing restored",a.ok?"success":"info"),te()};window.catalogResetHidden=async function(){await pa(),p("All hidden catalog listings restored"),te()};async function dt(){window.lucide&&lucide.createIcons(),Pt(),await Ca(),u.auth.onAuthStateChange((e,t)=>{if(e==="SIGNED_OUT"){w.user=null;const a=document.getElementById("login-screen");a&&(a.style.display="flex")}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",dt):dt();
