import{s as p,S as K,D as Da,i as Ua}from"./supabase-client-DHpG6mRa.js";import{a as qa,g as ja,C as ye,A as Oa}from"./localization-BCkI4wXB.js";import{patchLocalShowroomListing as Ha,getLocalShowroomListingById as ht,removeLocalShowroomListing as Ga,upsertLocalShowroomListing as at,listLocalShowroomListings as je}from"./local-showroom-store-mzP0nSoS.js";import{g as Ht,s as za,l as Wa,a as Va,b as Ka}from"./payment-settings-D1RhLIA7.js";import{P as Gt,a as zt,T as Wt,M as Vt}from"./motorhome-data-CupbOvk0.js";import{getCatalogCategories as Ya}from"./catalog-CApdaOEp.js";import{i as Ja}from"./app-promo-banner-Ck4v7fRN.js";import{M as Qa,a as Xa,n as Za}from"./categories-BEuiwWw5.js";import{saveCatalogHidden as Kt,loadHiddenCatalogIds as vt,getHiddenCatalogIds as Oe,resetHiddenCatalogIds as ei}from"./catalog-hidden-store-K9HVnkqi.js";const D=1,H=5e6,ti=[{id:"prod-smartphone",listingType:"product",category:"Phones",subcategory:"Smartphones",label:"Flagship Smartphone",brand:"Global Mobile",model:"X Pro",color:"Midnight Black",size:"6.7-inch",condition:"New",features:["5G connectivity","OLED display","Fast charging","Unlocked","Premium cameras"],highlights:["Retail-ready packaging","Strong search demand","Ideal for global shipping"],keywords:["smartphone","mobile phone","5g"],descriptionType:"phone"},{id:"prod-laptop",listingType:"product",category:"Computers & Laptops",subcategory:"Laptops",label:"Performance Laptop",brand:"NorthBridge",model:"Studio 14",color:"Silver",size:"14-inch",condition:"New",features:["Fast processor","SSD storage","Long battery life","Portable chassis","Business-ready design"],highlights:["Suitable for work and study","Premium margin band","Global audience appeal"],keywords:["laptop","notebook","computer"],descriptionType:"laptop"},{id:"prod-tv",listingType:"product",category:"Electronics",subcategory:"Smart TVs",label:"4K Smart TV",brand:"VistaHome",model:"UltraView",color:"Black",size:"65-inch",condition:"New",features:["4K panel","Streaming apps","HDR support","Voice control","Slim bezel"],highlights:["Living-room centerpiece","Popular premium electronics segment"],keywords:["tv","smart tv","home electronics"],descriptionType:"electronics"},{id:"prod-watch",listingType:"product",category:"Watches",subcategory:"Luxury Watches",label:"Luxury Wristwatch",brand:"Aurelius",model:"Chrono 8",color:"Gold / Black",size:"42mm",condition:"New",features:["Precision movement","Premium case","Gift-ready presentation","Water resistance","Collector appeal"],highlights:["High perceived value","Strong gifting category"],keywords:["watch","luxury watch","timepiece"],descriptionType:"luxury"},{id:"prod-jewelry",listingType:"product",category:"Jewelry",subcategory:"Fine Jewelry",label:"Fine Jewelry Set",brand:"Maison Valeur",model:"Signature Set",color:"Gold",size:"Adjustable",condition:"New",features:["Premium finish","Gift packaging","Occasion-ready","Elegant styling"],highlights:["High-value presentation","Wedding and celebration demand"],keywords:["jewelry","necklace","bracelet"],descriptionType:"luxury"},{id:"prod-handbag",listingType:"product",category:"Bags & Accessories",subcategory:"Designer Bags",label:"Designer Handbag",brand:"Rue Maison",model:"Carry All",color:"Tan",size:"Medium",condition:"New",features:["Structured silhouette","Premium hardware","Travel-friendly storage","Retail-ready finish"],highlights:["Fashion-forward listing","Broad international demand"],keywords:["handbag","designer bag","accessories"],descriptionType:"fashion"},{id:"prod-sneakers",listingType:"product",category:"Shoes",subcategory:"Premium Sneakers",label:"Premium Sneakers",brand:"RunNorth",model:"Air Flex",color:"White",size:"EU 42",condition:"New",features:["Comfort cushioning","Streetwear styling","Durable outsole","Daily wear ready"],highlights:["High-conversion category","Easy multi-country merchandising"],keywords:["sneakers","shoes","fashion"],descriptionType:"fashion"},{id:"prod-sofa",listingType:"product",category:"Furniture",subcategory:"Living Room",label:"Luxury Sofa Set",brand:"Grand Habitat",model:"Residence 3-Piece",color:"Sand Beige",size:"3-Piece Set",condition:"New",features:["Premium upholstery","Statement living-room piece","Comfort seating","Interior-ready styling"],highlights:["Large-ticket home category","Ideal for premium households"],keywords:["sofa","furniture","living room"],descriptionType:"home"},{id:"prod-generator",listingType:"product",category:"Home & Kitchen",subcategory:"Power Solutions",label:"Backup Power Generator",brand:"VoltWorks",model:"SilentMax",color:"Graphite",size:"7.5kVA",condition:"New",features:["Reliable backup power","Low-noise housing","Residential and business use","Heavy-duty build"],highlights:["Practical high-demand utility item","Useful in many markets"],keywords:["generator","power","backup power"],descriptionType:"industrial"},{id:"prod-drone",listingType:"product",category:"Cameras & Photography",subcategory:"Drones",label:"Pro Camera Drone",brand:"SkyFrame",model:"Aerial 4K",color:"Gray",size:"Foldable",condition:"New",features:["4K stabilized video","GPS return home","Portable folding frame","Creator-ready footage"],highlights:["Strong visual listing appeal","Premium creator equipment"],keywords:["drone","camera drone","aerial"],descriptionType:"electronics"},{id:"prod-grocery",listingType:"product",category:"Food & Groceries",subcategory:"Family Essentials",label:"Family Grocery Bundle",brand:"Market Select",model:"Household Pack",color:"Mixed",size:"Bulk Pack",condition:"New",features:["Everyday essentials","Bulk value","Family sized","Easy repeat orders"],highlights:["Fast-moving everyday goods","Useful across broad regions"],keywords:["groceries","food bundle","household essentials"],descriptionType:"daily"},{id:"prod-scale-house",listingType:"product",category:"Home & Kitchen",subcategory:"Model Houses",label:"Architectural Model House",brand:"Studio Form",model:"Estate Miniature",color:"Natural Wood",size:"1:50 Scale",condition:"New",features:["Collector display piece","Detailed craftsmanship","Interior decor appeal","Gift-ready packaging"],highlights:["Supports the model-house use case","Works for decor and collector audiences"],keywords:["model house","architectural model","collector decor"],descriptionType:"home"},{id:"veh-sedan",listingType:"product",category:"Cars",subcategory:"Sedans",label:"Executive Sedan",brand:"Summit Motors",model:"S Line",color:"Pearl White",size:"Mid-size",condition:"Used - Like New",features:["Comfortable cabin","Road-trip ready","Well-maintained presentation","Family and executive appeal"],highlights:["Vehicle posts support 24-image galleries","Map-ready listing"],keywords:["car","sedan","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-suv",listingType:"product",category:"Cars",subcategory:"SUVs",label:"Family SUV",brand:"Frontier Auto",model:"Terrain X",color:"Obsidian",size:"7-Seater",condition:"Used - Like New",features:["Spacious seating","Utility-focused cargo room","Suitable for families","Road and city versatility"],highlights:["High-demand automotive segment","Works well with showroom map"],keywords:["suv","family car","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-luxury",listingType:"product",category:"Luxury Cars",subcategory:"Luxury Vehicles",label:"Luxury Performance Car",brand:"Regal Automotive",model:"Imperium GT",color:"Metallic Black",size:"Coupe",condition:"Used - Like New",features:["Prestige brand positioning","Performance styling","Collector-level appeal","Premium interior"],highlights:["Supports the requested high-ticket range","Designed for showroom-style luxury listings"],keywords:["luxury car","sports car","supercar"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-motorcycle",listingType:"product",category:"Motorcycles",subcategory:"Street Bikes",label:"Sport Motorcycle",brand:"Velocity Moto",model:"R 900",color:"Red",size:"900cc",condition:"Used - Like New",features:["Agile handling","Performance design","Lifestyle buyer appeal","Weekend-ready machine"],highlights:["Automotive category with image-rich display"],keywords:["motorcycle","bike","sport bike"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-commercial",listingType:"product",category:"Commercial Vehicles",subcategory:"Utility Vehicles",label:"Commercial Utility Vehicle",brand:"FleetCore",model:"CargoPro",color:"White",size:"Long wheelbase",condition:"Used - Good",features:["Business-ready load space","Fleet-friendly purchase","Service history presentation","Commercial utility"],highlights:["Suitable for business buyers","Map-ready logistics listing"],keywords:["commercial vehicle","cargo van","fleet"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-boat",listingType:"product",category:"Boats & Marine",subcategory:"Leisure Boats",label:"Leisure Boat",brand:"BlueHarbor",model:"Coastline 28",color:"Navy / White",size:"28 ft",condition:"Used - Like New",features:["Marina-ready presentation","Leisure and charter appeal","Premium leisure category"],highlights:["Large-format gallery support","High-ticket recreational listing"],keywords:["boat","marine","yacht"],requiredImageCount:24,descriptionType:"vehicle"}],ai=[{id:"prop-apartment",listingType:"property",category:"Real Estate",subcategory:"Apartments",label:"City Apartment",propertyType:"Apartment",bedrooms:2,bathrooms:2,buildingSize:"1,150 sqft",landSize:"",furnished:"Furnished",features:["Secure access","Modern kitchen","Prime urban access","Balcony or city views"],highlights:["Strong urban demand","Good for short and long stay buyers"],keywords:["apartment","real estate","city home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-condo",listingType:"property",category:"Real Estate",subcategory:"Condos",label:"Modern Condo",propertyType:"Condo",bedrooms:3,bathrooms:2,buildingSize:"1,450 sqft",landSize:"",furnished:"Furnished",features:["Managed building","Amenity access","Contemporary finish","Secure parking"],highlights:["Works across major global markets"],keywords:["condo","property","home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-townhouse",listingType:"property",category:"Real Estate",subcategory:"Townhouses",label:"Townhouse Residence",propertyType:"Townhouse",bedrooms:4,bathrooms:3,buildingSize:"2,000 sqft",landSize:"0.08 acres",furnished:"Unfurnished",features:["Multi-level layout","Family-ready plan","Private entry","Parking included"],highlights:["Popular residential ownership format"],keywords:["townhouse","residence","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-villa",listingType:"property",category:"Real Estate",subcategory:"Villas",label:"Private Villa",propertyType:"Villa",bedrooms:5,bathrooms:5,buildingSize:"4,800 sqft",landSize:"0.4 acres",furnished:"Furnished",features:["Private outdoor space","Premium architecture","Luxury entertaining zones","Prestige location potential"],highlights:["Premium property tier","Designed for international buyers"],keywords:["villa","luxury property","real estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-mansion",listingType:"property",category:"Real Estate",subcategory:"Mansions",label:"Luxury Mansion",propertyType:"Mansion",bedrooms:8,bathrooms:10,buildingSize:"12,000 sqft",landSize:"1.2 acres",furnished:"Furnished",features:["Grand entrance","High-end interior finishes","Staff or guest quarters","Statement curb appeal"],highlights:["Matches the mansion requirement directly","Supports high-ticket luxury listings"],keywords:["mansion","estate","luxury home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-beach",listingType:"property",category:"Real Estate",subcategory:"Beach Houses",label:"Beachfront House",propertyType:"Beach House",bedrooms:4,bathrooms:4,buildingSize:"3,600 sqft",landSize:"0.25 acres",furnished:"Furnished",features:["Waterfront views","Outdoor leisure space","Vacation-rental appeal","Premium lifestyle positioning"],highlights:["Ideal for tourism and lifestyle markets"],keywords:["beach house","waterfront home","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-farm",listingType:"property",category:"Real Estate",subcategory:"Farm Houses",label:"Farm House Estate",propertyType:"Farm House",bedrooms:4,bathrooms:3,buildingSize:"3,100 sqft",landSize:"5 acres",furnished:"Unfurnished",features:["Land-rich asset","Agricultural potential","Quiet residential use","Outbuilding opportunity"],highlights:["Suitable for rural and suburban regions"],keywords:["farm house","landed property","estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-commercial",listingType:"property",category:"Real Estate",subcategory:"Commercial Buildings",label:"Commercial Building",propertyType:"Commercial Building",bedrooms:0,bathrooms:4,buildingSize:"8,500 sqft",landSize:"0.35 acres",furnished:"Unfurnished",features:["Business district potential","Mixed-use flexibility","Visible frontage","Investor-ready asset class"],highlights:["Attractive for business buyers and investors"],keywords:["commercial building","office","investment property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-hotel",listingType:"property",category:"Real Estate",subcategory:"Hotels",label:"Boutique Hotel",propertyType:"Hotel",bedrooms:18,bathrooms:20,buildingSize:"15,000 sqft",landSize:"0.75 acres",furnished:"Furnished",features:["Hospitality-ready layout","Guest-focused amenities","Tourism and corporate appeal","Revenue asset potential"],highlights:["Supports hospitality listings globally"],keywords:["hotel","hospitality","investment"],requiredImageCount:24,descriptionType:"property"},{id:"prop-land",listingType:"property",category:"Real Estate",subcategory:"Land",label:"Development Land",propertyType:"Land",bedrooms:0,bathrooms:0,buildingSize:"",landSize:"10 acres",furnished:"",features:["Development potential","Flexible use case","Long-term investment appeal","Location-led value"],highlights:["Useful for land banking and development"],keywords:["land","plot","development"],requiredImageCount:24,descriptionType:"property"}],Yt=[...ti,...ai];function xt(e){return qa[e]||"USD"}function Jt(e,t){return Yt.filter(a=>a.listingType!==e?!1:t?a.category===t:!0)}function ii(e,t){const a=Math.max(D,Math.min(H,Number(e)||D));return new Intl.NumberFormat("en-US",{style:"currency",currency:t,maximumFractionDigits:0}).format(a)}function oi(e,t,a,i,o){const r=ii(i,a);return e.descriptionType==="vehicle"?`${e.label} listed at ${r}. This template is intended to present a complete automotive post with exterior, interior, condition, performance, and gallery details in a clean showroom-style format.`:e.descriptionType==="property"?`${e.label} located in ${o}. Offered at ${r}, this property template is designed for a complete real-estate presentation with map-ready location data, rich visual gallery coverage, and buyer-friendly highlights covering layout, lifestyle, and investment value.`:e.descriptionType==="phone"?`${e.label} listed at ${r}. The template focuses on a clean premium device presentation with brand, model, condition, core features, and strong online merchandising copy.`:e.descriptionType==="laptop"?`${e.label} listed at ${r}. Built for marketplace listings that need clear performance positioning, specification highlights, and an easy-to-scan description for students, professionals, and remote workers.`:e.descriptionType==="luxury"?`${e.label} listed at ${r}. This template supports high-value presentation with polished positioning, premium selling points, and a strong showroom-style description.`:e.descriptionType==="fashion"?`${e.label} listed at ${r}. This product template highlights styling, quality, and day-to-day appeal while keeping the listing easy to customize.`:e.descriptionType==="home"?`${e.label} listed at ${r}. The listing copy is structured for shoppers looking for quality presentation, reliable detail, and visual merchandising support.`:e.descriptionType==="industrial"?`${e.label} listed at ${r}. This template emphasizes practical use, dependable performance, and business or household value in a straightforward format.`:e.descriptionType==="daily"?`${e.label} listed at ${r}. The copy is designed for repeat-buy categories with clear value messaging and broad buyer appeal.`:`${e.label} listed at ${r}. This template generates a clean, marketable listing with ready-made highlights, keywords, and presentation details.`}function Qt({templateId:e,listingType:t,category:a,countryCode:i,currency:o,price:r}){const n=Yt.find(y=>y.id===e&&y.listingType===t);if(!n)return null;const l=ja(i)||ye[0],c=o||xt(l.code),d=[l.name].filter(Boolean).join(", "),m={category:n.category||a||(t==="property"?"Real Estate":"Other"),subcategory:n.subcategory||n.label,title:t==="property"?`${n.label} in ${l.name}`:n.label,description:oi(n,l,c,r,d),currency:c,features:[...n.features],highlights:[...n.highlights||[]],seo_keywords:[...new Set([n.category,n.subcategory,n.label,...t==="property"?[l.name]:[],...n.keywords||[]].filter(Boolean))],requiredImageCount:n.requiredImageCount||0};return t==="property"?{...m,country:l.name,country_code:l.code,product_location:l.name,property_type:n.propertyType||n.label,bedrooms:n.bedrooms??null,bathrooms:n.bathrooms??null,building_size:n.buildingSize||"",land_size:n.landSize||"",furnished:n.furnished||""}:{...m,brand:n.brand||"",model:n.model||"",color:n.color||"",size:n.size||"",condition:n.condition||"New"}}const Xt="weverseonlineshop@gmail.com",Zt="Weverse Online Shop",ea="GLOBAL SHOPPING • WORLDWIDE DELIVERY",ri="https://wttnvwpoqmbxryivcerf.supabase.co".replace(/\/$/,""),ni=`${ri}/functions/v1/ai-admin-assistant`,si=[{group:"Main",items:[{id:"dashboard",label:"Dashboard",icon:"layout-dashboard"},{id:"products",label:"Products",icon:"package"},{id:"properties",label:"Properties",icon:"home"},{id:"catalog",label:"Catalog Manager",icon:"boxes"},{id:"orders",label:"Orders",icon:"shopping-bag"},{id:"customers",label:"Customers",icon:"users"},{id:"reviews",label:"Reviews",icon:"star"},{id:"messages",label:"Messages",icon:"message-circle"},{id:"coupons",label:"Coupons",icon:"ticket"},{id:"ads",label:"Advertisements",icon:"megaphone"},{id:"notifications",label:"Notifications",icon:"bell"}]},{group:"Configuration",items:[{id:"ai",label:"AI Assistant",icon:"sparkles"},{id:"payment-settings",label:"Payment Settings",icon:"credit-card"},{id:"ai-settings",label:"AI Settings",icon:"bot"},{id:"homepage-branding",label:"Homepage Branding",icon:"image"},{id:"promo-bg",label:"Promo & Backgrounds",icon:"image"},{id:"brand",label:"Brand Manager",icon:"palette"},{id:"content",label:"Content Manager",icon:"file-text"},{id:"content-settings",label:"Content Settings",icon:"file-cog"},{id:"seo",label:"SEO Manager",icon:"search"},{id:"email",label:"Email Settings",icon:"mail"},{id:"analytics",label:"Analytics",icon:"bar-chart-3"},{id:"security",label:"Security",icon:"shield"},{id:"activity",label:"Activity Logs",icon:"activity"},{id:"backup",label:"Backup & Restore",icon:"database"},{id:"settings",label:"Settings",icon:"settings"},{id:"publish",label:"Publish & Deploy",icon:"rocket"}]}],li={dashboard:"Dashboard",products:"Products Manager",properties:"Properties Manager",catalog:"Catalog Manager",orders:"Orders Manager",customers:"Customers Manager",reviews:"Reviews Manager",messages:"Messages & Support",coupons:"Coupons Manager",ads:"Advertisement Manager","ai-settings":"AI Settings",content:"Content Manager","content-settings":"Content Settings",ai:"AI Assistant","homepage-branding":"Homepage Branding","promo-bg":"Promo & Backgrounds",brand:"Brand Manager","payment-settings":"Payment Settings",seo:"SEO Manager",email:"Email Settings",analytics:"Analytics",security:"Security",activity:"Activity Logs",backup:"Backup & Restore",settings:"Settings",publish:"Publish & Deploy"},ta=[...Oa].sort();let S={user:null,section:"dashboard"};function s(e){if(e==null)return"";const t=document.createElement("div");return t.textContent=String(e),t.innerHTML}function aa(e,t="USD"){return`${(parseFloat(e)||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})} ${t}`}function J(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"—"}function se(e){return e?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function wt(){return"W-"+String(Date.now()).slice(-6)+Math.floor(Math.random()*1e3).toString().padStart(3,"0")}const di=["id","property_id","listing_type","category","subcategory","title","description","price","price_period","currency","country","country_code","state","city","town","product_location","latitude","longitude","bedrooms","bathrooms","building_size","land_size","parking_spaces","property_type","furnished","listing_status","images","features","features_text","tags","highlights","seo_keywords","specifications","brand","color","size","condition","warranty","shipping_info","delivery_estimate","weight","dimensions","storage_options","ram_options","color_options","availability_status","stock_quantity","sku","is_active","is_featured","is_ai_generated","ai_generated_fields","rating","rating_count","favorite_count","review_count","video","video_url","approval_status","published_at","created_at","updated_at","real_price","year_built","year_renovated","half_bathrooms","floors","garage","zip_code","address","landmarks","interior_features","exterior_features","home_systems","legal_info","risk_notes","floor_plan","nearby_area","verification_status","verification_date","inspection_info","documents"];function be(e){const t={};if(!e||typeof e!="object")return t;for(const a of di)a in e&&(t[a]=e[a]);return t}function u(e,t="success"){const a=document.getElementById("toast"),i=document.getElementById("toast-msg"),o=a.querySelector("i[data-lucide]");if(!a||!i)return;i.textContent=e;const r={success:"check-circle",error:"alert-circle",info:"info"},n={success:"text-emerald-400",error:"text-red-400",info:"text-blue-400"};o&&(o.setAttribute("data-lucide",r[t]||"info"),o.className=`w-4 h-4 shrink-0 ${n[t]||"text-blue-400"}`),a.style.transform="translateY(0)",a.style.opacity="1",window.lucide&&lucide.createIcons(),clearTimeout(a._t),a._t=setTimeout(()=>{a.style.transform="translateY(20px)",a.style.opacity="0"},3e3)}function j(e){const t={pending_verification:["bg-amber-500/10 text-amber-400 border-amber-500/20","Pending"],approved:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Approved"],rejected:["bg-red-500/10 text-red-400 border-red-500/20","Rejected"],payment_approved:["bg-blue-500/10 text-blue-400 border-blue-500/20","Paid"],order_placed:["bg-amber-500/10 text-amber-400 border-amber-500/20","Placed"],processing:["bg-indigo-500/10 text-indigo-400 border-indigo-500/20","Processing"],shipped:["bg-violet-500/10 text-violet-400 border-violet-500/20","Shipped"],in_transit:["bg-violet-500/10 text-violet-400 border-violet-500/20","In Transit"],out_for_delivery:["bg-cyan-500/10 text-cyan-400 border-cyan-500/20","Out for Delivery"],delivered:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Delivered"],cancelled:["bg-red-500/10 text-red-400 border-red-500/20","Cancelled"],active:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],inactive:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"],sale:["bg-blue-500/10 text-blue-400 border-blue-500/20","For Sale"],rent:["bg-violet-500/10 text-violet-400 border-violet-500/20","For Rent"],true:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],false:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"]},[a,i]=t[String(e)]||["bg-gray-500/10 text-gray-400 border-gray-500/20",s(e)||"—"];return`<span class="badge ${a}">${i}</span>`}function ae(){document.getElementById("modal-container").innerHTML=""}function U(e){document.getElementById("modal-container").innerHTML=e,window.lucide&&lucide.createIcons()}function N(e,t,a,i,o=""){const r={blue:"bg-blue-500/10 text-blue-400 border-blue-500/15",amber:"bg-amber-500/10 text-amber-400 border-amber-500/15",emerald:"bg-emerald-500/10 text-emerald-400 border-emerald-500/15",red:"bg-red-500/10 text-red-400 border-red-500/15",violet:"bg-violet-500/10 text-violet-400 border-violet-500/15",blue:"bg-blue-500/10 text-blue-400 border-blue-500/15"};return`<div class="stat-card glass-soft border border-blue-500/15 rounded-3xl p-5">
    <div class="flex items-start justify-between mb-3">
      <div class="p-3 ${r[i]||r.blue} rounded-2xl border"><i data-lucide="${a}" class="w-5 h-5"></i></div>
    </div>
    <p class="text-3xl font-black text-white">${s(t)}</p>
    <p class="text-xs text-gray-500 uppercase tracking-wide mt-1 font-bold">${s(e)}</p>
    ${o?`<p class="text-xs text-gray-600 mt-1">${s(o)}</p>`:""}
  </div>`}function fe(){return'<div class="flex items-center justify-center py-24"><div class="flex items-center gap-3 text-gray-500 text-sm"><i data-lucide="loader-2" class="w-5 h-5 animate-spin text-blue-400"></i> Loading…</div></div>'}function de(e,t,a,i=""){return`<div class="flex flex-col items-center justify-center py-20 text-center"><div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4"><i data-lucide="${e}" class="w-8 h-8 text-blue-400"></i></div><h3 class="text-base font-black text-white mb-1">${s(t)}</h3><p class="text-sm text-gray-500 max-w-xs">${s(a)}</p>${i?`<div class="mt-5">${i}</div>`:""}</div>`}function ia(){const e=document.getElementById("sidebar-nav");e&&(e.innerHTML=si.map(t=>`
    <div>
      <span class="section-label">${t.group}</span>
      ${t.items.map(a=>`
        <button class="nav-item ${S.section===a.id?"active":""} w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold rounded-xl" onclick="navigate('${a.id}')">
          <i data-lucide="${a.icon}" class="w-4 h-4 shrink-0"></i>
          <span>${a.label}</span>
        </button>`).join("")}
    </div>`).join(""),window.lucide&&lucide.createIcons())}window.navigate=function(e){S.section=e;const t=li[e]||e,a=document.getElementById("page-title");a&&(a.textContent=t),ia(),closeSidebar();const i=document.getElementById("content");i&&(i.innerHTML=fe()),window.lucide&&lucide.createIcons(),({dashboard:Si,products:F,properties:We,catalog:we,orders:ka,customers:Xi,reviews:Ce,messages:Sa,coupons:Ve,ads:xe,notifications:to,ai:ci,"ai-settings":Ia,"homepage-branding":Je,"promo-bg":Pe,content:lo,"content-settings":Ca,seo:po,email:mo,analytics:uo,security:Ye,activity:bo,brand:Qe,"payment-settings":ft,backup:go,settings:yo,publish:Xe}[e]||(()=>{const n=document.getElementById("content");n&&(n.innerHTML=de("construction","Coming Soon",`${t} is being built.`))}))()};async function ci(){const e=document.getElementById("content");e&&(e.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}window.openSidebar=()=>{document.getElementById("sidebar").classList.add("open"),document.getElementById("sidebar-overlay").classList.remove("hidden")};window.closeSidebar=()=>{document.getElementById("sidebar").classList.remove("open"),document.getElementById("sidebar-overlay").classList.add("hidden")};document.getElementById("close-sidebar")?.addEventListener("click",closeSidebar);const me="kco_admin_remember",_t="kco_login_attempts",it=5,ui=15*60*1e3;function M(e){const t=document.getElementById("login-error"),a=document.getElementById("login-error-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-success")?.classList.add("hidden"),window.lucide&&lucide.createIcons())}function pi(e){const t=document.getElementById("login-success"),a=document.getElementById("login-success-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-error")?.classList.add("hidden"))}function He(){document.getElementById("login-error")?.classList.add("hidden"),document.getElementById("login-success")?.classList.add("hidden")}function Ee(e){return String(e||"").trim().toLowerCase()}function mi(){try{const e=JSON.parse(localStorage.getItem(me)||"{}");e?.email&&!Ee(e.email)&&localStorage.removeItem(me)}catch{localStorage.removeItem(me)}}function bi(){try{const e=JSON.parse(localStorage.getItem(me)||"{}");return Ee(e?.email)}catch{return""}}function kt(){mi();const e=bi(),t=document.getElementById("login-email");t&&(t.value=e||t.value||Xt,t.removeAttribute("readonly"));const a=document.getElementById("reset-email");a&&(a.value=e||a.value||"",a.removeAttribute("readonly"))}function gi(){return`${window.location.origin}/admin.html`}function ce(e){const t=document.getElementById("login-header-title"),a=document.getElementById("login-header-icon");document.getElementById("login-form")?.classList.toggle("hidden",e!=="login"),document.getElementById("twofa-form")?.classList.toggle("hidden",e!=="2fa"),document.getElementById("forgot-form")?.classList.toggle("hidden",e!=="forgot"),He(),e==="login"&&(t&&(t.textContent="Admin Access"),a&&a.setAttribute("data-lucide","shield-check")),e==="2fa"&&(t&&(t.textContent="Two-Factor Auth"),a&&a.setAttribute("data-lucide","smartphone")),e==="forgot"&&(t&&(t.textContent="Reset Password"),a&&a.setAttribute("data-lucide","mail")),window.lucide&&lucide.createIcons()}function B(e,t,a=""){const i=document.getElementById(e);i&&(i.disabled=t,t?i.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline-block mr-1"></i> Please wait…':a&&(i.innerHTML=a),window.lucide&&lucide.createIcons())}function oa(){try{return JSON.parse(localStorage.getItem(_t)||'{"count":0}')}catch{return{count:0}}}function ra(){const e=oa();return e.count=(e.count||0)+1,e.count>=it&&(e.lockedUntil=Date.now()+ui),localStorage.setItem(_t,JSON.stringify(e)),e}function na(){localStorage.removeItem(_t)}function sa(){const e=oa();if(!e.lockedUntil)return null;const t=e.lockedUntil-Date.now();return t<=0?(na(),null):Math.ceil(t/6e4)}async function ee(e,t,a={}){try{await p.from("admin_security_logs").insert({user_id:e,event_type:t,ip_address:await yi(),user_agent:navigator.userAgent.slice(0,200),...a})}catch{}}async function yi(){try{return(await(await fetch("https://api64.ipify.org?format=json",{signal:AbortSignal.timeout(3e3)})).json()).ip||"unknown"}catch{return"unknown"}}async function la(e){if(!e)return!1;let t=!1,a=!1;try{const{data:i}=await p.rpc("is_current_user_admin");t=!0,a=!!i}catch{t=!1}return t?a:Ee(e.email)===Xt}async function fi(){const e=window.location.hash;if(e.includes("type=recovery")||e.includes("access_token")){Fe(),ki();return}const{data:{session:t}}=await p.auth.getSession();if(t?.user&&await la(t.user)){const{data:{currentUser:i}}=await p.auth.getUser(),o=await p.auth.mfa.getAuthenticatorAssuranceLevel(),r=o.data?.currentLevel;if(o.data?.nextLevel==="aal2"&&r!=="aal2"){S.user=t.user,Fe(),ce("2fa"),St();return}S.user=t.user,Ge();return}hi()}function Fe(){const e=document.getElementById("login-screen");e&&(e.style.display="flex")}function hi(){Fe(),ce("login"),kt(),da(),ca(),St(),vi();const e=sa();e&&(M(`Too many failed attempts. Try again in ${e} minute${e>1?"s":""}.`),document.getElementById("login-btn").disabled=!0)}function vi(){document.getElementById("toggle-pw")?.addEventListener("click",()=>{const e=document.getElementById("login-password"),t=document.querySelector("#toggle-pw i");e&&(e.type=e.type==="password"?"text":"password",t&&t.setAttribute("data-lucide",e.type==="password"?"eye":"eye-off"),window.lucide&&lucide.createIcons())})}function da(){const e=document.getElementById("login-form");!e||e._bound||(e._bound=!0,e.addEventListener("submit",xi),document.getElementById("forgot-pw-btn")?.addEventListener("click",()=>ce("forgot")))}async function xi(e){e.preventDefault();const t=sa();if(t){M(`Account locked. Try again in ${t} minute${t>1?"s":""}.`);return}const a=document.getElementById("login-email"),i=Ee(a?.value);if(!i){M("Enter your admin email address."),B("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const o=document.getElementById("login-password").value,r=document.getElementById("remember-me")?.checked;B("login-btn",!0),He();const{data:n,error:l}=await p.auth.signInWithPassword({email:i,password:o});if(l||!n.user){const g=String(l?.message||"").toLowerCase();if(g.includes("missing supabase credentials")||g.includes("authentication service is unavailable")){M("Authentication is temporarily unavailable due to configuration. Please contact support."),B("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(g.includes("failed to fetch")||g.includes("network request failed")){M("Network error while signing in. Check your connection and try again."),B("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(g.includes("email not confirmed")){M("Your admin email is not confirmed yet. Open your verification email and confirm first."),B("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const f=ra(),b=it-f.count,v=f.lockedUntil?`Account locked for 15 minutes after ${it} failed attempts.`:`Invalid email or password. ${b>0?b+" attempt"+(b!==1?"s":"")+" remaining.":""}`;M(v),B("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),n?.user&&await ee(n.user.id,"login_failed",{metadata:{reason:"wrong_password"}});return}if(!await la(n.user)){await p.auth.signOut(),M(`Access denied for ${n.user.email}. This account is signed in but does not have administrator privileges.`),B("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),await ee(n.user.id,"login_denied",{metadata:{reason:"not_admin"}});return}if(r?localStorage.setItem(me,JSON.stringify({email:i,ts:Date.now()})):localStorage.removeItem(me),na(),S.user=n.user,(await p.auth.mfa.getAuthenticatorAssuranceLevel()).data?.nextLevel==="aal2"){B("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),ce("2fa"),St(),setTimeout(()=>document.getElementById("totp-code")?.focus(),100);return}await ee(n.user.id,"login_success"),B("login-btn",!1),Ge()}function St(){const e=document.getElementById("verify-2fa-btn");e&&!e._bound&&(e._bound=!0,e.addEventListener("click",Nt));const t=document.getElementById("totp-code");t&&!t._bound&&(t._bound=!0,t.addEventListener("input",i=>{i.target.value=i.target.value.replace(/\D/g,"").slice(0,6),i.target.value.length===6&&Nt()})),document.getElementById("cancel-2fa-btn")?.addEventListener("click",async()=>{await p.auth.signOut(),S.user=null,ce("login")}),document.getElementById("use-backup-btn")?.addEventListener("click",()=>{document.getElementById("backup-code-wrap")?.classList.toggle("hidden");const o=document.getElementById("backup-code");o&&o.focus()});const a=document.getElementById("verify-backup-btn");a&&!a._bound&&(a._bound=!0,a.addEventListener("click",wi))}async function Nt(){const e=document.getElementById("totp-code")?.value?.trim();if(!e||e.length!==6){M("Enter the 6-digit code from your authenticator app.");return}B("verify-2fa-btn",!0),He();try{const{data:t}=await p.auth.mfa.listFactors(),a=(t?.totp||[])[0];if(!a){M("No 2FA factor found. Please re-login."),B("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In');return}const{data:i,error:o}=await p.auth.mfa.challenge({factorId:a.id});if(o)throw o;const{error:r}=await p.auth.mfa.verify({factorId:a.id,challengeId:i.id,code:e});if(r)throw r;await ee(S.user.id,"login_2fa_success"),B("verify-2fa-btn",!1),Ge()}catch(t){ra(),M(t.message?.includes("Invalid")?"Incorrect code. Check your authenticator and try again.":t.message),B("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In'),document.getElementById("totp-code").value="",document.getElementById("totp-code").focus()}}async function wi(){const e=document.getElementById("backup-code")?.value?.trim().toUpperCase().replace(/\s/g,"");if(!e){M("Enter a backup recovery code.");return}B("verify-backup-btn",!0);try{const{data:t}=await p.from("admin_2fa").select("backup_codes").eq("user_id",S.user.id).maybeSingle();if(!t?.backup_codes?.length){M("No backup codes found."),B("verify-backup-btn",!1,"Use Backup Code");return}if(!t.backup_codes.find(o=>(o.code||o).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")&&!o.used)){M("Backup code not found or already used."),B("verify-backup-btn",!1,"Use Backup Code");return}const i=t.backup_codes.map(o=>(o.code||o).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")?{...typeof o=="object"?o:{code:o},used:!0}:o);await p.from("admin_2fa").update({backup_codes:i}).eq("user_id",S.user.id),await ee(S.user.id,"login_backup_code_used"),Ge()}catch(t){M(t.message),B("verify-backup-btn",!1,"Use Backup Code")}}function ca(){document.getElementById("back-to-login")?.addEventListener("click",()=>ce("login")),document.getElementById("send-reset-btn")?.addEventListener("click",_i)}async function _i(){const e=document.getElementById("reset-email"),t=Ee(e?.value);if(!t){M("Enter your admin email address to receive a reset link.");return}B("send-reset-btn",!0),He();const{error:a}=await p.auth.resetPasswordForEmail(t,{redirectTo:gi()});if(B("send-reset-btn",!1,'<i data-lucide="mail" class="w-4 h-4 inline mr-1"></i> Send Reset Link'),a){M(a.message);return}pi("Reset link sent! Check your inbox and open it from this device to continue.")}function ki(){const e=document.getElementById("login-screen");if(!e)return;const t=e.querySelector(".login-card");t&&(t.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}window.handlePasswordResetSubmit=async function(){const e=document.getElementById("new-pw-reset")?.value,t=document.getElementById("confirm-pw-reset")?.value,a=document.getElementById("reset-pw-error");if(e!==t){a&&(a.textContent="Passwords do not match.",a.classList.remove("hidden"));return}if((e||"").length<8){a&&(a.textContent="Password must be at least 8 characters.",a.classList.remove("hidden"));return}const{error:i}=await p.auth.updateUser({password:e});if(i){a&&(a.textContent=i.message,a.classList.remove("hidden"));return}u("Password updated! Please log in with your new password."),window.location.hash="",setTimeout(()=>window.location.reload(),1500)};function Ge(){const e=document.getElementById("login-screen");e&&(e.style.display="none");const t=document.getElementById("admin-user-email");t&&S.user&&(t.textContent=S.user.email||"Admin"),kt(),navigate("dashboard")}window.adminSignOut=async function(){S.user&&await ee(S.user.id,"logout"),await p.auth.signOut(),S.user=null,Fe(),ce("login"),kt(),da(),ca()};window.logoutAllDevices=async function(){confirm("This will sign you out on ALL devices. Continue?")&&(S.user&&await ee(S.user.id,"logout_all_devices"),await p.auth.signOut({scope:"global"}),S.user=null,u("Signed out from all devices."),setTimeout(()=>window.location.reload(),1200))};async function Si(){const e=document.getElementById("content");try{const[t,a,i,o]=await Promise.all([p.from("showroom_listings").select("id,listing_type,is_active,price",{count:"exact"}),p.from("payment_receipts").select("id,order_number,amount,status,created_at",{count:"exact"}).order("created_at",{ascending:!1}).limit(200),p.from("profiles").select("user_id,created_at",{count:"exact"}),p.from("product_reviews").select("id,is_approved",{count:"exact"})]),r=t.data||[],n=a.data||[],l=n.filter(h=>["approved","payment_approved","delivered"].includes(h.status)).reduce((h,I)=>h+(parseFloat(I.amount)||0),0),c=n.filter(h=>["pending","pending_verification","processing"].includes(h.status)).length,d=r.filter(h=>h.listing_type!=="property").length,m=r.filter(h=>h.listing_type==="property").length,y=r.filter(h=>h.listing_type!=="property"&&h.is_active).length,g=i.count||0,f=o.count||0,b=(o.data||[]).filter(h=>!h.is_approved).length,v=new Date,P=n.filter(h=>{const I=new Date(h.created_at);return I.getMonth()===v.getMonth()&&I.getFullYear()===v.getFullYear()}).filter(h=>["approved","payment_approved","delivered"].includes(h.status)).reduce((h,I)=>h+(parseFloat(I.amount)||0),0),x=n.slice(0,6);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-black text-white">Good ${Ai()}, Admin</h2>
            <p class="text-sm text-gray-500 mt-0.5">${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}</p>
          </div>
          <button onclick="navigate('products')" class="btn-press hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Product
          </button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          ${N("Total Revenue",`$${l.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald",`$${P.toLocaleString("en-US",{maximumFractionDigits:0})} this month`)}
          ${N("Total Orders",n.length,"shopping-bag","blue",`${c} pending`)}
          ${N("Customers",g,"users","violet")}
          ${N("Products",d,"package","amber",`${y} active`)}
          ${N("Properties",m,"home","blue")}
          ${N("Reviews",f,"star","blue",`${b} pending`)}
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
            ${x.length===0?'<p class="text-xs text-gray-500 text-center py-8">No orders yet</p>':x.map(h=>`
                <div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
                  <div class="min-w-0">
                    <p class="text-xs font-bold text-white truncate">${s(h.order_number||h.id?.slice(0,8))}</p>
                    <p class="text-[10px] text-gray-500">${se(h.created_at)}</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0 ml-2">
                    <span class="text-xs font-bold text-emerald-400">$${parseFloat(h.amount||0).toLocaleString("en-US",{maximumFractionDigits:0})}</span>
                    ${j(h.status)}
                  </div>
                </div>`).join("")}
          </div>
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="zap" class="w-4 h-4 text-amber-400"></i> Quick Actions</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            ${[{icon:"plus-circle",label:"Add Product",fn:"navigate('products')"},{icon:"home",label:"Add Property",fn:"navigate('properties')"},{icon:"shopping-bag",label:"View Orders",fn:"navigate('orders')"},{icon:"star",label:"Reviews",fn:"navigate('reviews')"},{icon:"ticket",label:"Coupons",fn:"navigate('coupons')"},{icon:"settings",label:"Settings",fn:"navigate('settings')"}].map(h=>`
              <button onclick="${h.fn}" class="btn-press flex flex-col items-center gap-2 p-3 glass-soft border border-blue-500/15 rounded-xl hover:border-blue-500/30 transition">
                <i data-lucide="${h.icon}" class="w-5 h-5 text-blue-400"></i>
                <span class="text-[11px] font-bold text-gray-300">${h.label}</span>
              </button>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),ma(n)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${s(t.message)}</div>`)}}async function F(){const e=document.getElementById("content");try{const{data:t,error:a}=await p.from("showroom_listings").select("*").neq("listing_type","property").order("created_at",{ascending:!1}),i=new Set,o=[];for(const d of a?[]:t||[])d&&d.property_id&&!i.has(d.property_id)&&(i.add(d.property_id),o.push(d));for(const d of je().filter(m=>m.listing_type!=="property"))d&&d.property_id&&!i.has(d.property_id)&&(i.add(d.property_id),o.push(d));if(Array.isArray(K))for(const d of K.filter(m=>m.listing_type!=="property"&&m.property_id))i.has(d.property_id)||(i.add(d.property_id),o.push(d));const r=[...Gt,...zt,...Wt,...Vt];for(const d of r)d&&d.property_id&&d.listing_type!=="property"&&!i.has(d.property_id)&&(i.add(d.property_id),o.push(d));o.sort((d,m)=>new Date(m.created_at||0)-new Date(d.created_at||0));try{await vt()}catch{}const n=new Set(Oe());if(n.size)for(let d=o.length-1;d>=0;d--)o[d]&&o[d].property_id&&n.has(o[d].property_id)&&o.splice(d,1);const l=[...new Set(o.map(d=>d.category).filter(Boolean))].sort((d,m)=>d.localeCompare(m)),c=[...new Set(o.flatMap(d=>Array.isArray(d.tags)?d.tags:[]).filter(Boolean))].sort((d,m)=>d.localeCompare(m));window._productFilters||(window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"}),window._productSelection||(window._productSelection=new Set),e.innerHTML=`
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
              <button onclick="openGeneralAiScanner()" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition shadow-xl shadow-violet-700/25" title="Scan product photos with AI — detect, analyze and add products to your manager">
                <i data-lucide="scan-search" class="w-5 h-5"></i> General AI Scanner
              </button>
              <button onclick="clearAllProducts()" class="btn-press flex items-center justify-center gap-2 bg-rose-600/90 hover:bg-rose-500 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition" title="Delete every product from the manager & database. Your showroom catalog stays.">
                <i data-lucide="trash-2" class="w-5 h-5"></i> Clear All Products
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3">
          ${N("Total Products",o.length,"package","blue")}
          ${N("Published",o.filter(d=>!!d.is_active).length,"badge-check","emerald")}
          ${N("Draft / Hidden",o.filter(d=>!d.is_active).length,"file-clock","amber")}
          ${N("Featured",o.filter(d=>!!d.is_featured).length,"sparkles","violet")}
          ${N("Inventory Units",o.reduce((d,m)=>d+(parseInt(m.stock_quantity,10)||0),0),"boxes","blue")}
          ${N("Avg Price",`$${Math.round(o.reduce((d,m)=>d+(parseFloat(m.price)||0),0)/Math.max(o.length,1)).toLocaleString()}`,"dollar-sign","blue")}
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 sm:p-4 space-y-3">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-2.5">
            <div class="xl:col-span-2 relative">
              <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
              <input id="prod-search" type="search" class="input-field pl-9" placeholder="Search by name, SKU, brand, category..." value="${s(window._productFilters.search||"")}" oninput="filterProducts()">
            </div>
            <select id="prod-cat-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Categories</option>
              ${(l.length?l:re).map(d=>`<option value="${s(d)}" ${(window._productFilters.category||"")===d?"selected":""}>${s(d)}</option>`).join("")}
            </select>
            <select id="prod-tag-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Tags</option>
              ${c.map(d=>`<option value="${s(d)}" ${(window._productFilters.tag||"")===d?"selected":""}>${s(d)}</option>`).join("")}
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
          <div id="products-empty" class="hidden">${de("package-search","No matching products","Try different filters or add a new product.",'<button onclick="showAddProductStep1()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl">Add Product</button>')}</div>
          <div class="text-center text-[11px] text-gray-500 py-2">Scroll to explore all products. Layout auto-rearranges as products are added, edited, moved, or removed.</div>
        </div>
      </div>`,window._productsData=o,window._productsCardLimit=60,ua(o),filterProducts(),updateBulkBar(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${s(t.message)}</div>`)}}function ie(e){const t=parseFloat(e);return Number.isFinite(t)?t:0}function ot(e){return Array.isArray(e.tags)?e.tags.filter(Boolean):[]}function $i(e){const t=ie(e.price),a=parseFloat(e.real_price);if(Number.isFinite(a)&&a>0&&a>t)return`${Math.round((1-t/a)*100)}% OFF`;const i=parseFloat(e.discount_percent??e.discount??0);return Number.isFinite(i)&&i>0?`${Math.round(i)}% OFF`:"No discount"}function Pi(e){const t=ie(e.price),a=parseFloat(e.real_price),i=`$${t.toLocaleString()}`;return Number.isFinite(a)&&a>0&&a>t?`<span class="block text-xs text-gray-400 price-strike line-through">$${a.toLocaleString()}</span><span class="text-emerald-300 font-black">$${t.toLocaleString()}</span>`:i}function $t(e){return e.is_archived||e.availability_status==="Archived"?"archived":e.is_active?"active":"inactive"}function rt(e){return parseInt(e.views??e.view_count??0,10)||0}function nt(e){return parseInt(e.sales??e.sales_count??0,10)||0}function Pt(e){return e.sku||e.property_id||"N/A"}function Ei(e){const t=e.images&&e.images[0]?e.images[0]:"/fallback.svg",a=ot(e),i=$t(e),o=window._productSelection?.has(e.property_id),r=j(i==="archived"?"inactive":i==="active"?"active":"inactive"),n=J(e.created_at),l=!!e.is_featured,c=e.is_active?`unpublishProduct('${e.property_id}')`:`publishProduct('${e.property_id}')`,d=e.is_active?"Unpublish":"Publish",m=e.is_active?"bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25";return`<article data-id="${e.property_id}" data-cat="${s(e.category||"")}" data-status="${i}" data-featured="${l?"featured":"standard"}" onclick="editProduct('${e.property_id}')" title="Tap anywhere to edit this product" class="prod-card glass-soft border ${o?"border-blue-400/60":"border-blue-500/15"} rounded-3xl p-5 flex flex-col gap-4 transition hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer select-none active:scale-[.99]">
    <div class="flex items-start gap-4">
      <input type="checkbox" class="prod-check accent-blue-500 w-5 h-5 mt-1 shrink-0" value="${e.property_id}" ${o?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${e.property_id}', this.checked)">
      <div class="relative w-24 h-24 rounded-2xl overflow-hidden border border-blue-500/20 shrink-0 bg-[#0b1124]">
        <img src="${s(t)}" alt="${s(e.title||"Product")}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'">
        ${l?'<span class="absolute top-1.5 left-1.5 text-[10px] font-black px-2 py-0.5 rounded-lg bg-amber-400 text-[#111827]">Featured</span>':""}
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="text-lg font-black text-white leading-snug line-clamp-2">${s(e.title||"Untitled Product")}</h3>
        <p class="text-xs text-gray-500 font-mono mt-1">SKU: ${s(Pt(e))}</p>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          ${r}
          <span class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20">${s(e.category||"Uncategorized")}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2.5 text-sm">
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5">
        <span class="text-gray-400 text-xs">Price</span>
        <p class="text-emerald-300 font-black text-base">
          ${Pi(e)}
        </p>
      </div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Discount</span><p class="text-amber-300 font-bold">${s($i(e))}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Stock</span><p class="text-gray-200 font-bold">${e.stock_quantity!=null?s(e.stock_quantity):"Unlimited"}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Brand</span><p class="text-gray-200 font-bold truncate">${s(e.brand||"N/A")}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Views</span><p class="text-blue-300 font-bold">${rt(e).toLocaleString()}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Sales</span><p class="text-cyan-300 font-bold">${nt(e).toLocaleString()}</p></div>
    </div>

    <div class="flex items-center justify-between text-xs text-gray-500 border-t border-blue-500/10 pt-3">
      <span>Date Added: ${s(n)}</span>
      <span>${(e.images||[]).length} images</span>
    </div>

    <div class="flex flex-wrap gap-2 mt-auto">
      <button onclick="event.stopPropagation();editProduct('${e.property_id}')" class="btn-press flex-1 min-w-[9.5rem] px-5 py-3.5 rounded-2xl text-sm font-black bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition shadow-lg shadow-blue-600/15">Edit Product</button>
      <button onclick="event.stopPropagation();quickEditProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-indigo-500/15 text-indigo-200 hover:bg-indigo-500/25 transition">Quick Edit</button>
      <button onclick="event.stopPropagation();previewProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-sky-500/15 text-sky-200 hover:bg-sky-500/25 transition">Preview</button>
      <button onclick="event.stopPropagation();${c}" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold ${m} transition">${d}</button>
      <button onclick="event.stopPropagation();duplicateProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-white/10 text-gray-200 hover:bg-white/20 transition">Duplicate</button>
      <button onclick="event.stopPropagation();archiveProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-red-500/15 text-red-200 hover:bg-red-500/25 transition">Archive</button>
      <button onclick="event.stopPropagation();shareProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-violet-500/15 text-violet-200 hover:bg-violet-500/25 transition">Share</button>
      <button onclick="event.stopPropagation();deleteProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-rose-600/15 text-rose-200 hover:bg-rose-600/25 transition">Delete</button>
      <button onclick="event.stopPropagation();openProductMoreActions('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-gray-600/20 text-gray-200 hover:bg-gray-600/35 transition">More</button>
    </div>

    ${a.length?`<div class="flex flex-wrap gap-1.5">${a.slice(0,6).map(y=>`<span class="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200">${s(y)}</span>`).join("")}</div>`:'<div class="text-xs text-gray-500">No tags</div>'}
  </article>`}function Ii(e,t){const a=[...e],i=o=>new Date(o||0).getTime()||0;return t==="oldest"?a.sort((o,r)=>i(o.created_at)-i(r.created_at)):t==="price-high"?a.sort((o,r)=>ie(r.price)-ie(o.price)):t==="price-low"?a.sort((o,r)=>ie(o.price)-ie(r.price)):t==="sales-high"?a.sort((o,r)=>nt(r)-nt(o)):t==="views-high"?a.sort((o,r)=>rt(r)-rt(o)):a.sort((o,r)=>i(r.created_at)-i(o.created_at)),a}function ua(e){const t=document.getElementById("products-grid"),a=document.getElementById("products-empty"),i=document.getElementById("products-result-count");if(!t)return;const o=window._productsCardLimit||60,r=e.slice(0,o);t.innerHTML=r.map(Ei).join(""),i&&(i.textContent=String(e.length));const n=document.getElementById("products-more");if(n){const l=e.length-r.length;l>0?n.innerHTML=`<button onclick="loadMoreProducts()" class="btn-press px-8 py-4 rounded-2xl text-base font-black bg-blue-500/15 text-blue-200 hover:bg-blue-500/25 border border-blue-500/25 transition">Show ${Math.min(60,l)} more (${l} left)</button>`:n.innerHTML=e.length>60?'<span class="text-sm text-gray-500">All products shown</span>':""}a&&a.classList.toggle("hidden",e.length>0),updateBulkBar(),window.lucide&&lucide.createIcons()}window.loadMoreProducts=function(){window._productsCardLimit=(window._productsCardLimit||60)+60,filterProducts(!0)};function pa(e){const t=document.getElementById("products-table-body"),a=document.getElementById("products-result-count");t&&(t.innerHTML=e.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-10">No products found.</td></tr>':e.map(i=>{const o=i.images&&i.images[0]?i.images[0]:"/fallback.svg",r=$t(i),n=window._productSelection?.has(i.property_id),l=i.is_active?`unpublishProduct('${i.property_id}')`:`publishProduct('${i.property_id}')`,c=i.is_active?"Unpublish":"Publish";return`<tr class="prod-table-row" data-id="${i.property_id}" style="cursor:pointer">
          <td>
            <div class="flex items-center gap-2.5" onclick="editProduct('${i.property_id}')">
              <input type="checkbox" class="prod-check accent-blue-500" value="${i.property_id}" ${n?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${i.property_id}', this.checked)">
              <img src="${s(o)}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
              <div class="min-w-0">
                <p class="text-xs font-bold text-white truncate max-w-[160px]">${s(i.title||"Untitled Product")}</p>
                <p class="text-[10px] font-mono text-gray-500">${s(Pt(i))}</p>
              </div>
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${s(i.category||"Uncategorized")}</span></td>
          <td>
            <div class="text-xs">
              ${(()=>{const d=ie(i.price),m=parseFloat(i.real_price);return Number.isFinite(m)&&m>0&&m>d?`<span class="text-[10px] text-gray-500 price-strike line-through block">$${m.toLocaleString()}</span><span class="font-bold text-emerald-400">$${d.toLocaleString()}</span>`:`<span class="font-bold text-emerald-400">$${d.toLocaleString()}</span>`})()}
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${i.stock_quantity!=null?s(i.stock_quantity):"Unlimited"}</span></td>
          <td>${j(r==="archived"?"inactive":r==="active"?"active":"inactive")}</td>
          <td><span class="text-xs text-gray-500">${J(i.created_at)}</span></td>
          <td>
            <div class="flex gap-1">
              <button onclick="editProduct('${i.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
              <button onclick="quickEditProduct('${i.property_id}')" class="btn-press p-1.5 text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition" title="Quick Edit"><i data-lucide="sliders-horizontal" class="w-3.5 h-3.5"></i></button>
              <button onclick="${l}" class="btn-press p-1.5 ${i.is_active?"text-amber-400 hover:bg-amber-500/10":"text-emerald-400 hover:bg-emerald-500/10"} rounded-lg transition" title="${c}"><i data-lucide="${i.is_active?"eye-off":"eye"}" class="w-3.5 h-3.5"></i></button>
              <button onclick="archiveProduct('${i.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Archive"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
            </div>
          </td>
        </tr>`}).join(""),a&&(a.textContent=String(e.length)),window.lucide&&lucide.createIcons())}window.setProductView=function(e){window._productView=e==="table"?"table":"card";const t=document.getElementById("products-grid"),a=document.getElementById("products-table-wrap"),i=document.getElementById("view-card-btn"),o=document.getElementById("view-table-btn"),r=document.getElementById("products-empty"),n=window._productsData||[];t&&t.classList.toggle("hidden",e==="table"),a&&(a.classList.toggle("hidden",e!=="table"),e==="table"&&pa(n)),i&&i.classList.toggle("active",e!=="table"),o&&o.classList.toggle("active",e==="table"),r&&r.classList.toggle("hidden",n.length>0)};window.filterProducts=function(e){const t=window._productFilters||{};t.search=(document.getElementById("prod-search")?.value||"").trim().toLowerCase(),t.category=document.getElementById("prod-cat-filter")?.value||"",t.tag=document.getElementById("prod-tag-filter")?.value||"",t.status=document.getElementById("prod-status-filter")?.value||"",t.featured=document.getElementById("prod-featured-filter")?.value||"",t.sort=document.getElementById("prod-sort")?.value||"newest",window._productFilters=t;const a=(window._productsData||[]).filter(o=>{const r=[o.title,o.brand,o.category,Pt(o),ot(o).join(" "),o.description].join(" ").toLowerCase();return!(t.search&&!r.includes(t.search)||t.category&&(o.category||"")!==t.category||t.tag&&!ot(o).includes(t.tag)||t.status&&$t(o)!==t.status||t.featured&&t.featured==="featured"!=!!o.is_featured)}),i=Ii(a,t.sort);e||(window._productsCardLimit=60),ua(i),window._productView==="table"&&pa(i)};window.resetProductFilters=function(){window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"},["prod-search","prod-cat-filter","prod-tag-filter","prod-status-filter","prod-featured-filter","prod-sort"].forEach(t=>{const a=document.getElementById(t);a&&(t==="prod-sort"?a.value="newest":a.value="")}),filterProducts()};window.toggleProductSelection=function(e,t){window._productSelection||(window._productSelection=new Set),t?window._productSelection.add(e):window._productSelection.delete(e),updateBulkBar()};window.toggleSelectAll=function(e,t){document.querySelectorAll("."+t).forEach(a=>{a.checked=e.checked;const i=a.value;window._productSelection||(window._productSelection=new Set),e.checked?window._productSelection.add(i):window._productSelection.delete(i)}),updateBulkBar()};window.toggleSelectAllProducts=function(e){document.querySelectorAll(".prod-check").forEach(t=>{t.checked=!!e,window._productSelection||(window._productSelection=new Set),e?window._productSelection.add(t.value):window._productSelection.delete(t.value)}),updateBulkBar()};window.updateBulkBar=function(){const e=window._productSelection?window._productSelection.size:0,t=document.getElementById("bulk-actions"),a=document.getElementById("bulk-count");t&&(t.classList.toggle("hidden",e===0),e>0&&t.classList.add("flex")),a&&(a.textContent=`${e} selected`)};function ze(){return window._productSelection?[...window._productSelection]:[]}function G(e){const t=String(e?.message||e?.code||"").toLowerCase();return t.includes("row-level security")||t.includes("permission denied")||t.includes("permission denied for table")||t.includes("new row violates row-level security")||t.includes("not permitted")||t.includes("rls policy")||t.includes("duplicate key")||t.includes("violates foreign key")}function st(e,t,a){return e&&G(e)?(u(`⚠️ ${a} blocked: Your account is signed in but the database admin role is not active. Re-run the admin permission migration, or contact the owner.`,"error"),!0):e?(t&&t(),u(`${a} saved locally (DB unavailable): ${e.message||"unknown error"}`,"info"),!0):!1}window.bulkToggleActive=async function(e){const t=ze();if(!t.length)return;const a=await Promise.all(t.map(r=>{const n=be((window._productsData||[]).find(l=>l.property_id===r));return p.from("showroom_listings").upsert({...n,property_id:r,is_active:e},{onConflict:"property_id"})}));if(a.some(r=>r.error&&G(r.error))){u(`⚠️ ${t.length} products NOT ${e?"published":"unpublished"}: database admin role blocked the write. Re-run the admin permission migration.`,"error"),window._productSelection=new Set,F();return}const o=a.filter(r=>r.error).length;u(`${t.length-o}/${t.length} products ${e?"published":"unpublished"}${o?` (${o} failed: ${a.find(r=>r.error)?.error?.message||"error"})`:""}`,o?"error":"success"),window._productSelection=new Set,F()};window.bulkDuplicateProducts=async function(){const e=ze();if(e.length){for(const t of e)await duplicateProduct(t,!0);u(`${e.length} products duplicated`),window._productSelection=new Set,F()}};window.bulkArchive=async function(){const e=ze();if(!e.length||!confirm(`Archive ${e.length} products? They will be hidden but not deleted.`))return;const t=await Promise.all(e.map(o=>p.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",o)));if(t.some(o=>o.error&&G(o.error))){u("⚠️ Archive blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,F();return}const i=t.filter(o=>o.error).length;u(`${e.length-i}/${e.length} products archived${i?` (${i} failed)`:""}`,i?"error":"success"),window._productSelection=new Set,F()};window.bulkDeleteProducts=async function(){const e=ze();if(!e.length||!confirm(`Delete ${e.length} products permanently? This action cannot be undone.`))return;const t=await Promise.all(e.map(o=>p.from("showroom_listings").delete().eq("property_id",o)));if(t.some(o=>o.error&&G(o.error))){u("⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,F();return}const i=t.filter(o=>o.error).length;u(`${e.length-i}/${e.length} products deleted${i?` (${i} failed)`:""}`,i?"error":"success"),window._productSelection=new Set,F()};window.previewProduct=async function(e){const t=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(i=>i.property_id===e)||t.data;if(!a)return u("Product not found","error");U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Product Live Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">🔙 Back</button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="space-y-2">
            <img src="${s((a.images||[])[0]||"/fallback.svg")}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
            <div class="flex flex-wrap gap-2">${(a.images||[]).slice(0,8).map(i=>`<img src="${s(i)}" class="w-12 h-12 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">`).join("")}</div>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-black text-white">${s(a.title||"Untitled Product")}</h4>
            <div class="flex items-center gap-2">${j(a.is_active?"active":"inactive")}${a.is_featured?'<span class="badge bg-amber-500/15 text-amber-200 border-amber-500/30">Featured</span>':""}</div>
            <p class="text-xs text-gray-400">${s(a.description||"No description")}</p>
            <div class="grid grid-cols-2 gap-2 text-xs mt-2">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">$${ie(a.price).toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${a.stock_quantity!=null?s(a.stock_quantity):"Unlimited"}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${s(a.brand||"N/A")}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Category</span><p class="text-gray-200 font-bold">${s(a.category||"N/A")}</p></div>
            </div>
            <div class="pt-2 flex gap-2">
              <button onclick="editProduct('${a.property_id}');closeModal();" class="btn-press px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl">Edit</button>
              <button onclick="shareProduct('${a.property_id}')" class="btn-press px-3 py-2 bg-violet-600/70 hover:bg-violet-500 text-white text-xs font-bold rounded-xl">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.quickEditProduct=async function(e){const t=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(o=>o.property_id===e)||t.data;if(!a)return u("Product not found","error");const i=Array.isArray(a.images)?a.images:[];U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-black text-white">Quick Edit Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">Back</button>
        </div>
        <form onsubmit="saveQuickEditProduct(event,'${a.property_id}')" class="space-y-4">
          <div><label class="lbl">Title</label><input name="title" class="input-field" value="${s(a.title||"")}"></div>
          <div class="grid grid-cols-2 gap-3">
            <div><label class="lbl">Real Price</label><input type="number" step="0.01" name="real_price" class="input-field" value="${s(a.real_price??a.specifications?.real_price??"")}" placeholder="Original price (crossed out)"></div>
            <div><label class="lbl">Discount Price</label><input type="number" step="0.01" name="price" class="input-field" value="${s(a.price||0)}" placeholder="Price customers pay"></div>
          </div>
          <div><label class="lbl">Availability</label><select name="availability_status" class="input-field">${["In Stock","Out of Stock","Pre-order","Limited Stock","Archived"].map(o=>`<option value="${o}" ${a.availability_status===o?"selected":""}>${o}</option>`).join("")}</select></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Featured</span><input type="checkbox" name="is_featured" ${a.is_featured?"checked":""} class="accent-blue-500 w-5 h-5"></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Published</span><input type="checkbox" name="is_active" ${a.is_active?"checked":""} class="accent-blue-500 w-5 h-5"></div>
          <div>
            <label class="lbl">Gallery Images (up to 24)</label>
            <div id="drop-zone" class="drop-zone" onclick="document.getElementById('img-upload').click()">
              <i data-lucide="image-plus" class="w-10 h-10 text-blue-400 mx-auto mb-2"></i>
              <p class="text-base font-bold text-gray-300">Tap to add photos (up to 24)</p>
              <p class="text-sm text-gray-500 mt-1">PNG, JPG, WEBP. First image is the cover. ✕ deletes any image (even the main/cover).</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${i.map((o,r)=>he(o,r)).join("")}
            </div>
            <div id="image-url-inputs">${i.map((o,r)=>`<input type="hidden" name="images" id="img-url-${r}" value="${s(o)}">`).join("")}</div>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
          </div>
          <button type="submit" class="btn-press w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-base font-bold">Save Quick Edit</button>
        </form>
      </div>
    </div>`),It(),At(),ve(),ue(),window.lucide&&lucide.createIcons()};window.saveQuickEditProduct=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=[...document.querySelectorAll("#image-preview .img-thumb img")].map(m=>m.getAttribute("src")).filter(m=>m&&!String(m).startsWith("blob:")),o={title:a.get("title")||"Untitled Product",price:Math.max(D,Math.min(H,parseFloat(a.get("price"))||0)),stock_quantity:a.get("stock_quantity")===""?null:parseInt(a.get("stock_quantity"),10),availability_status:a.get("availability_status")||"In Stock",is_featured:a.get("is_featured")==="on",is_active:a.get("is_active")==="on"||i.length>=24,images:i},r=String(a.get("real_price")||"").trim(),n=r===""?null:parseFloat(r);if(n!=null&&!Number.isFinite(n)){u("Real Price must be a number.","error");return}const l=be((window._productsData||[]).find(m=>m.property_id===t)),c=l.specifications&&typeof l.specifications=="object"?l.specifications:{};o.specifications={...c,real_price:n!=null&&n>0?Math.round(n):null};const{error:d}=await p.from("showroom_listings").upsert({...l,...o,property_id:t},{onConflict:"property_id"});if(d){if(G(d)){u("⚠️ Save blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),ae(),F();return}Ha(t,o),u("Quick edit saved locally","info")}else u(o.is_active?"Saved & published — your showroom shows it now":"Quick edit saved (draft)");ae(),F()};window.publishProduct=function(e){return toggleProductActive(e,!0)};window.unpublishProduct=function(e){return toggleProductActive(e,!1)};window.shareProduct=async function(e){const t=`${window.location.origin}/details.html?id=${encodeURIComponent(e)}`;try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(t),u("Product link copied to clipboard");return}}catch{}window.prompt("Copy product link:",t)};window.deleteProduct=async function(e){if(!confirm("Delete this product permanently? This action cannot be undone."))return;const t=(window._productsData||[]).find(i=>i.property_id===e)||(window._propertiesData||[]).find(i=>i.property_id===e)||ht(e),{error:a}=await p.from("showroom_listings").delete().eq("property_id",e);if(a&&!G(a))return u("Delete failed: "+a.message,"error");Ga(e);try{const i=await Kt(e,!0);i&&i.error&&G(i.error)?u("⚠️ Deleted, but the site-wide hidden list could not be saved: database admin role rejected the write. Re-run the admin permission migration.","error"):u("Product deleted")}catch{u("Product deleted")}t&&t.listing_type==="property"?We():F()};window.clearAllProducts=async function(){const e=(window._productsData||[]).length;if(!confirm(`Delete ALL ${e} product(s) from the Product Manager and the database now?

This is permanent and cannot be undone. Your built-in showroom catalog will stay.`))return;const{error:t}=await p.from("showroom_listings").delete().neq("property_id","__none__");if(t)return G(t)?u("⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"):u("Clear failed: "+t.message,"error");try{localStorage.removeItem("kco_local_showroom_listings_v1")}catch{}u("All products deleted. The manager now shows your showroom catalog."),F()};window.openProductMoreActions=function(e){U(`
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
    </div>`)};function Ai(){const e=new Date().getHours();return e<12?"morning":e<17?"afternoon":"evening"}function ma(e){const t=document.getElementById("chart-revenue");if(!t)return;const a=[],i=new Date;for(let r=5;r>=0;r--){const n=new Date(i.getFullYear(),i.getMonth()-r,1);a.push({label:n.toLocaleString("default",{month:"short"}),month:n.getMonth(),year:n.getFullYear()})}const o=a.map(r=>e.filter(n=>{const l=new Date(n.created_at);return l.getMonth()===r.month&&l.getFullYear()===r.year&&["approved","payment_approved","delivered"].includes(n.status)}).reduce((n,l)=>n+(parseFloat(l.amount)||0),0));new Chart(t,{type:"bar",data:{labels:a.map(r=>r.label),datasets:[{label:"Revenue (USD)",data:o,backgroundColor:"rgba(59,130,246,.6)",borderColor:"rgb(59,130,246)",borderWidth:1,borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"#64748b",callback:r=>"$"+r.toLocaleString()},grid:{color:"rgba(59,130,246,.05)"}},x:{ticks:{color:"#64748b"},grid:{display:!1}}}}})}const re=Qa.map(e=>e.name),Et=Xa,E={default:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Phones:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"storage",label:"Storage (e.g. 128GB)",type:"text"},{key:"ram",label:"RAM (e.g. 8GB)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],"Computers & Laptops":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"processor",label:"Processor (CPU)",type:"text"},{key:"ram",label:"RAM",type:"text"},{key:"storage",label:"Storage",type:"text"},{key:"display",label:"Display Size",type:"text"},{key:"graphics",label:"Graphics Card",type:"text"},{key:"os",label:"Operating System",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Electronics:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model Number",type:"text"},{key:"color",label:"Color",type:"text"},{key:"voltage",label:"Voltage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Shoes:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Jewelry:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"material",label:"Material (e.g. 14k Gold)",type:"text"},{key:"gemstone",label:"Gemstone",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Watches:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"movement",label:"Movement (Quartz/Automatic)",type:"text"},{key:"case_material",label:"Case Material",type:"text"},{key:"water_resistance",label:"Water Resistance",type:"text"},{key:"color",label:"Dial Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"description",label:"Description",type:"textarea",span:2}],Gaming:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"platform",label:"Platform (PS5, Xbox, PC…)",type:"text"},{key:"model",label:"Game / Model",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],"Sports & Fitness":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]};["Men's Fashion","Women's Fashion","Fashion"].forEach(e=>E[e]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (T-Shirt, Dress…)",type:"text"},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]);E["Bags & Accessories"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Handbag, Backpack, Luggage…)",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"material",label:"Material (e.g. Leather)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];E["Beauty & Skincare"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Serum, Cream, Makeup…)",type:"text"},{key:"size",label:"Size (ml / g)",type:"text"},{key:"skin_type",label:"Skin Type",type:"text"},{key:"ingredients",label:"Key Ingredients",type:"text"},{key:"color",label:"Color / Shade",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];E["Home & Kitchen"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"type",label:"Type (Appliance, Cookware, Decor…)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"voltage",label:"Voltage / Power",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];E.Furniture=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Sofa, Table, Chair…)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"assembly",label:"Assembly Required",type:"select",options:["","Yes","No"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];E["Garden & Outdoor"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Mower, Grill, Furniture…)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"weatherproof",label:"Weatherproof",type:"select",options:["","Yes","No"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];E["Toys & Games"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model / Set Name",type:"text"},{key:"age_range",label:"Age Range",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];E["Food & Groceries"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Snack, Beverage, Pantry…)",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"shelf_life",label:"Shelf Life",type:"text"},{key:"storage",label:"Storage Instructions",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","New (Sealed)","Open Box"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];E["Baby & Kids"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Stroller, Clothing, Toy…)",type:"text"},{key:"age_range",label:"Age Range",type:"text"},{key:"size",label:"Size",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];E["Health & Medical"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Device, Supplement, Care…)",type:"text"},{key:"size",label:"Size / Quantity",type:"text"},{key:"usage",label:"Usage / Dosage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];E["Books & Education"]=[{key:"title",label:"Title / Book Name",type:"text",required:!0,span:2},{key:"author",label:"Author",type:"text"},{key:"publisher",label:"Publisher",type:"text"},{key:"language",label:"Language",type:"text"},{key:"format",label:"Format (Hardcover, Paperback, E-book)",type:"text"},{key:"isbn",label:"ISBN",type:"text"},{key:"pages",label:"Pages",type:"text"},{key:"edition",label:"Edition",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Like New","Very Good","Good","Fair"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];E["Office & Stationery"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Notebook, Pen, Printer…)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"quantity",label:"Quantity / Pack Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];E["Pet Supplies"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Food, Toy, Bed, Collar…)",type:"text"},{key:"pet_type",label:"Pet Type (Dog, Cat, Bird…)",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];E["Musical Instruments"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"type",label:"Type (Guitar, Piano, Drums…)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color / Finish",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];E["Cameras & Photography"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"lens",label:"Lens",type:"text"},{key:"sensor",label:"Sensor",type:"text"},{key:"megapixels",label:"Megapixels",type:"text"},{key:"video",label:"Video Recording",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];E["Software & Digital"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand / Developer",type:"text"},{key:"type",label:"Type (Software, App, License…)",type:"text"},{key:"platform",label:"Platform",type:"text"},{key:"license",label:"License Type",type:"text"},{key:"version",label:"Version",type:"text"},{key:"language",label:"Language",type:"text"},{key:"format",label:"Format",type:"text"},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];E.Services=[{key:"title",label:"Service Title",type:"text",required:!0,span:2},{key:"type",label:"Service Type",type:"text"},{key:"duration",label:"Duration",type:"text"},{key:"location",label:"Location / Coverage",type:"text"},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];E["Social Media Accounts"]=[{key:"title",label:"Account Title",type:"text",required:!0,span:2},{key:"type",label:"Platform (Instagram, TikTok…)",type:"text"},{key:"followers",label:"Followers",type:"text"},{key:"engagement",label:"Engagement Rate",type:"text"},{key:"niche",label:"Niche",type:"text"},{key:"condition",label:"Status",type:"select",options:["Active","Verified","Suspended"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];Et.forEach(e=>E[e]=[{key:"title",label:"Vehicle Title",type:"text",required:!0,span:2,placeholder:"e.g. 2023 Toyota Land Cruiser V8 Turbo Diesel"},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"model_year",label:"Model Year",type:"text",placeholder:"e.g. 2023"},{key:"body_type",label:"Body Type",type:"select",options:["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"]},{key:"mileage",label:"Mileage",type:"text",placeholder:"e.g. 15,000 mi or 0 (new)"},{key:"engine",label:"Engine",type:"text",placeholder:"e.g. 4.0L V8 Turbo Diesel"},{key:"horsepower",label:"Horsepower (HP)",type:"text",placeholder:"e.g. 500 HP"},{key:"transmission",label:"Transmission",type:"select",options:["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"]},{key:"drive_type",label:"Drive Type",type:"select",options:["FWD","RWD","AWD","4WD"]},{key:"fuel_type",label:"Fuel Type",type:"select",options:["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"]},{key:"seating_capacity",label:"Seating Capacity",type:"text",placeholder:"e.g. 5 seats"},{key:"doors",label:"Number of Doors",type:"text",placeholder:"e.g. 4"},{key:"safety_features",label:"Safety Features (comma separated)",type:"text",placeholder:"ABS, Airbags, Lane Assist, Traction Control…"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}]);for(const e of Object.keys(E))E[e]=E[e].flatMap(t=>t.key!=="price"?[t]:[{key:"real_price",label:"Real Price (USD) — crossed out when a discount is active",type:"number",placeholder:"e.g. 250000 — original price before discount"},{...t,label:"Discount Price (USD) — the price customers pay",placeholder:"e.g. 200000 — the price customers actually pay"}]);function ba(e=""){return ye.map(t=>`<option value="${t.code}" ${e===t.code?"selected":""}>${t.flag} ${t.name}</option>`).join("")}function ga(e="USD"){return ta.map(t=>`<option value="${t}" ${e===t?"selected":""}>${t}</option>`).join("")}function lt(e){return String(e||"").split(",").map(t=>t.trim()).filter(Boolean)}function k(e,t){const a=document.querySelector(`[name="${e}"]`);!a||t==null||(a.value=t)}function dt(e){const t=document.getElementById(e);t&&(t.min=String(D),t.max=String(H),t.placeholder=`Price (${D} - ${H})`)}function Dt(e){const t=document.getElementById(`${e}-country_code`),a=document.getElementById(`${e}-country`),i=document.getElementById(`${e}-currency`);if(!t)return;const o=ye.find(r=>r.code===t.value);a&&o&&(a.value=o.name),i&&o&&(i.value=xt(o.code))}function Re(e,t){const a=document.getElementById(`${e}-image-requirement`),i=document.getElementById(`${e}-required_image_count`);i&&(i.value=t?String(t):""),a&&(t>0?(a.textContent=`This listing template requires at least ${t} images.`,a.classList.remove("hidden")):(a.textContent="",a.classList.add("hidden")))}function ya(e,t,a){if(e>0&&t.length<e)throw new Error(`${a} needs at least ${e} images before publishing.`)}function ct(e,t="full"){const a=document.getElementById("pf-catalog_template_id")?.value||"",i=document.getElementById("pf-currency")?.value||"USD",o=parseFloat(document.getElementById("pf-price")?.value)||D,r=Qt({templateId:a,listingType:"product",category:e,countryCode:"US",currency:i,price:o});if(!r){Re("pf",Et.includes(e)?24:0);return}Re("pf",r.requiredImageCount||0),k("currency",r.currency),k("subcategory",r.subcategory),k("features_text",r.features.join(", ")),k("highlights_text",r.highlights.join(", ")),k("seo_keywords_text",r.seo_keywords.join(", ")),t==="full"?(k("title",r.title),k("description",r.description),k("brand",r.brand||""),k("model",r.model||""),k("color",r.color||""),k("size",r.size||""),k("condition",r.condition||"New")):k("description",r.description)}function ut(e="full"){const t=document.getElementById("ppf-catalog_template_id")?.value||"",a=document.getElementById("ppf-country_code")?.value||"US",i=document.getElementById("ppf-currency")?.value||"USD",o=parseFloat(document.getElementById("ppf-price")?.value)||D,r=Qt({templateId:t,listingType:"property",category:"Real Estate",countryCode:a,currency:i,price:o});if(!r){Re("ppf",24);return}Re("ppf",r.requiredImageCount||24),k("country",r.country),k("country_code",r.country_code),k("currency",r.currency),k("subcategory",r.subcategory),k("product_location",r.product_location),k("features_text",r.features.join(", ")),k("highlights_text",r.highlights.join(", ")),k("seo_keywords_text",r.seo_keywords.join(", ")),e==="full"?(k("title",r.title),k("description",r.description),k("property_type",r.property_type||""),k("bedrooms",r.bedrooms??""),k("bathrooms",r.bathrooms??""),k("building_size",r.building_size||""),k("land_size",r.land_size||""),k("furnished",r.furnished||"")):k("description",r.description)}window.applyProductCatalogTemplate=function(e,t="full"){ct(e,t)};window.applyPropertyCatalogTemplate=function(e="full"){ut(e)};function Ci(e){return E[e]||E.default}function Ti(e,t={},a=!1){return Ci(e).map(o=>{const r=t[o.key]||"",n=o.span===2?"sm:col-span-2":"",l=!a&&o.required?"required":"",c=o.placeholder||o.label;let d="";if(o.type==="select")d=`<select class="input-field" name="${o.key}" id="pf-${o.key}" ${l}>
        <option value="">Select…</option>
        ${o.options.map(m=>`<option value="${m}" ${r===m?"selected":""}>${m}</option>`).join("")}
      </select>`;else if(o.type==="textarea")d=`<textarea class="input-field" name="${o.key}" id="pf-${o.key}" rows="3" placeholder="Write a detailed description…">${s(r)}</textarea>`;else{const y=["brand","model","color","size","material","platform"].includes(o.key)?`pf-list-${o.key}`:"",f=({brand:["Apple","Samsung","Sony","LG","HP","Dell","Lenovo","Asus","Nike","Adidas","Puma","Gucci","Rolex","Toyota","Mercedes","BMW","Tesla"],model:["Pro","Ultra","Max","SE","Standard","Plus","Series 1","Series 2"],color:["Black","White","Silver","Blue","Red","Green","Gold","Gray","Pink","Brown"],size:["XS","S","M","L","XL","XXL","32","34","36","38","40","42"],material:["Cotton","Leather","Stainless Steel","Aluminum","Wood","Glass","Plastic"],platform:["PS5","Xbox Series X","Nintendo Switch","PC","Android","iOS"]}[o.key]||[]).map(b=>`<option value="${s(b)}"></option>`).join("");d=`<input type="${o.type}" class="input-field" name="${o.key}" id="pf-${o.key}" value="${s(r)}" placeholder="${c}" ${y?`list="${y}"`:""} ${l}>${y?`<datalist id="${y}">${f}</datalist>`:""}`}return`<div class="${n}"><label class="lbl">${o.label}${o.required?a?"":" *":""}</label>${d}</div>`}).join("")}window.showAddProductStep1=function(){U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Add New Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">🔙 Back</button>
        </div>

        <!-- Scan first — let AI pick the category -->
        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3 mb-4">
          <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> Scan First — let AI pick the category</p>
          <p class="text-[11px] text-gray-500">Upload your product photos, press SCAN WITH AI. It detects EVERY distinct product (a photo with a bag + watch + shoes + phone gives four separate listings; several photos of the same product merge into one). Review each detection, then the correct category form opens filled for you. Nothing is published automatically.</p>
          <div id="s1-drop-zone" class="drop-zone" onclick="document.getElementById('s1-img-upload').click()">
            <i data-lucide="image-plus" class="w-6 h-6 text-blue-400 mx-auto mb-2"></i>
            <p class="text-xs font-bold text-gray-300">Click or drag & drop product images</p>
            <input type="file" id="s1-img-upload" class="hidden" multiple accept="image/*" onchange="handleStep1ImageUpload(event)">
          </div>
          <div id="s1-image-preview" class="flex flex-wrap gap-2"></div>
          <button type="button" id="btn-s1-scan" onclick="scanFirstWithAI()" disabled class="btn-press w-full px-4 py-3 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2" style="opacity:0.5">
            <i data-lucide="sparkles" class="w-4 h-4"></i> SCAN WITH AI
          </button>
          <div id="s1-scan-status" class="hidden text-xs font-medium"></div>
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
          ${re.map(e=>`
            <button data-category="${s(e).toLowerCase()}" onclick="showAddProductStep2('${e.replace(/'/g,"\\'")}')" class="btn-press flex items-center gap-3 p-4 glass-soft border border-blue-500/15 hover:border-blue-500/40 rounded-2xl transition text-left">
              <i data-lucide="tag" class="w-5 h-5 text-blue-400 shrink-0"></i>
              <span class="text-sm font-semibold text-gray-200">${s(e)}</span>
            </button>`).join("")}
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()};window.filterProductCategoryChoices=function(e){const t=String(e||"").trim().toLowerCase();document.querySelectorAll("#product-category-grid [data-category]").forEach(a=>{const i=!t||a.dataset.category.includes(t);a.classList.toggle("hidden",!i)})};window.showAddProductStep2=function(e,t={}){const a=!!t.property_id,i=Jt("product",e),o=t.currency||"USD";U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeProductFormModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between gap-3 mb-6">
          <div class="min-w-0">
            <h3 class="text-2xl font-black text-white">${a?"Edit Product":"Add Product"} — ${s(e)}</h3>
            <p class="text-sm text-gray-500 mt-1 truncate">${a?`Editing: ${s(t.property_id)}`:"Fill in the product details below"}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${a?'<button type="button" onclick="closeProductFormModal()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Product Manager</button>':'<button type="button" onclick="showAddProductStep1()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5" title="Change category"><i data-lucide="arrow-left" class="w-4 h-4"></i> Category</button>'}
            <button type="button" onclick="closeProductFormModal()" class="btn-press px-4 h-11 flex items-center justify-center rounded-xl text-sm font-bold uppercase tracking-wide text-gray-400 hover:text-white hover:bg-gray-800 transition" title="Close (X) — return to Product Manager">
              Back
            </button>
          </div>
        </div>

        <form id="product-form" onsubmit="saveProduct(event,'${s(e)}','${a?t.property_id:""}')" class="space-y-6">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-sm font-bold text-white uppercase tracking-wide">Global Catalog Autofill</p>
                <p class="text-sm text-gray-500 mt-1">Pick a template, country, and currency to auto-build the listing title, description, and metadata.</p>
              </div>
              <button type="button" onclick="applyProductCatalogTemplate('${s(e)}')" class="btn-press px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition">Refresh Template</button>
            </div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Catalog Template</label><select class="input-field" name="catalog_template_id" id="pf-catalog_template_id" onchange="applyProductCatalogTemplate('${s(e)}')"><option value="">Choose a template...</option>${i.map(r=>`<option value="${r.id}">${s(r.label)} - ${s(r.subcategory||r.category)}</option>`).join("")}</select></div>
              <div class="sm:col-span-2"><label class="lbl">Currency</label><select class="input-field" name="currency" id="pf-currency" onchange="applyProductCatalogTemplate('${s(e)}')">${ga(o)}</select></div>
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
              ${(t.images||[]).map((r,n)=>he(r,n)).join("")}
            </div>
            <p class="text-sm text-gray-500 mt-1">Drag to reorder • ✕ deletes any image (even the main/cover — the next image becomes the cover) • ↻ replaces • Upload up to 24 gallery images</p>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
            <div id="image-url-inputs">
              ${(t.images||[]).map((r,n)=>`<input type="hidden" name="images" id="img-url-${n}" value="${s(r)}">`).join("")}
            </div>
          </div>

          <!-- AI Product Scanner (manual only — never auto-scans on upload) -->
          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="min-w-0">
                <p class="text-sm font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> AI Product Scanner</p>
                <p class="text-xs text-gray-500 mt-1">Reads your uploaded images and fills the form for you. Detects every distinct product (multiple products in one photo = separate listings; several photos of the same product = one listing). Powered by Google Gemini free tier — add your FREE key in AI Settings if not set. Only runs when you press the button.</p>
              </div>
              <button type="button" id="btn-scan-ai" onclick="scanProductWithAI()" class="btn-press px-5 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold rounded-xl transition flex items-center gap-2 shrink-0">
                <i data-lucide="sparkles" class="w-4 h-4"></i> SCAN WITH AI
              </button>
            </div>
            <div id="scan-ai-status" class="hidden text-sm mt-3 font-medium"></div>
          </div>

          <!-- Step 2: Product Details -->
          <div class="text-sm text-blue-200 font-bold uppercase tracking-wide">Step 2: Product Details</div>
          <div class="form-grid form-grid-2">
            ${Ti(e,t,a)}
          </div>

          <div class="form-grid form-grid-2">
            <div class="sm:col-span-2"><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${s(t.subcategory||"")}" placeholder="e.g. Smartphones, SUVs, Model Houses"></div>
            <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${s((t.features||[]).join(", "))}" placeholder="5G connectivity, OLED display, fast charging"></div>
            <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${s((t.highlights||[]).join(", "))}" placeholder="Retail-ready packaging, premium demand, strong presentation"></div>
            <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${s((t.seo_keywords||[]).join(", "))}" placeholder="smartphone, unlocked, global shipping"></div>
          </div>

          <!-- Tags / Badges -->
          <div>
            <label class="lbl">Product Tags / Badges</label>
            <div class="flex flex-wrap gap-2.5">
              ${["New Arrival","Best Seller","Hot Deal","Featured","Limited Stock"].map(r=>`
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="tags" value="${r}" ${(t.tags||[]).includes(r)?"checked":""} class="accent-blue-500 w-5 h-5">
                  <span class="text-sm text-gray-300">${r}</span>
                </label>`).join("")}
            </div>
          </div>

          <!-- Availability -->
          <div class="form-grid form-grid-2">
            <div>
              <label class="lbl">Availability Status</label>
              <select class="input-field" name="availability_status" id="pf-availability_status">
                ${["In Stock","Out of Stock","Pre-order","Limited Stock"].map(r=>`<option value="${r}" ${t.availability_status===r?"selected":""}>${r}</option>`).join("")}
              </select>
            </div>
            <div class="p-4 glass-soft border border-blue-500/15 rounded-2xl">
              <p class="text-sm font-bold text-white">Global Price Range</p>
              <p class="text-sm text-gray-500 mt-1">Allowed price range is ${D} to ${H} in the selected currency.</p>
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
    </div>`),It(),At(),dt("pf-price"),dt("pf-real_price"),ct(e,"pricing"),document.getElementById("pf-price")?.addEventListener("input",()=>ct(e,"pricing")),Fi(e,t.property_id||""),window._pfEscapeHandler=r=>{r.key==="Escape"&&closeProductFormModal()},document.addEventListener("keydown",window._pfEscapeHandler)};window.closeProductFormModal=function(){window._pfEscapeHandler&&(document.removeEventListener("keydown",window._pfEscapeHandler),window._pfEscapeHandler=null),ae(),F()};window.switchProductFormCategory=function(e){const t=document.getElementById("product-form");if(!t)return;const a={},i=new FormData(t);for(const[o,r]of i.entries())o==="images"?(a.images=a.images||[],r&&!String(r).startsWith("blob:")&&a.images.push(String(r))):o==="tags"?(a.tags=a.tags||[],a.tags.push(r)):a[o]=r;a.is_featured=t.querySelector('[name="is_featured"]')?.checked||!1,a.is_active=t.querySelector('[name="is_active"]')?.checked||!1,a.property_id&&String(a.property_id).trim()?showAddProductStep2(e,a):showAddProductStep2(e,{images:a.images||[],...a})};function he(e,t){return`<div class="img-thumb ${t===0?"cover-img":""}" data-index="${t}" title="${t===0?"Cover Image (main photo)":"Image "+(t+1)}">
    <img src="${s(e)}" onerror="this.src='/fallback.svg'">
    <button class="rm" onclick="removeImage(${t})" type="button" title="Delete this image (cover can be deleted too)">✕</button>
    <button class="rp" onclick="document.getElementById('rp-input-${t}').click()" type="button" title="Replace image">↻</button>
    <input type="file" accept="image/*" class="rp-input" id="rp-input-${t}" onchange="replaceImage(${t}, this)">
  </div>`}function It(){const e=document.getElementById("drop-zone");e&&(e.addEventListener("dragover",t=>{t.preventDefault(),e.classList.add("drag-over")}),e.addEventListener("dragleave",()=>e.classList.remove("drag-over")),e.addEventListener("drop",t=>{t.preventDefault(),e.classList.remove("drag-over"),Li(t.dataTransfer.files)}))}function At(){const e=document.getElementById("image-preview");!e||!window.Sortable||new Sortable(e,{animation:150,onEnd:()=>ve()})}window.handleImageUpload=async function(e){await fa(e.target.files)};async function Li(e){await fa(e)}async function fa(e){const t=document.getElementById("image-preview");if(t){for(const a of e){if(!a.type.startsWith("image/"))continue;const i=await Ct(a);if(i){const o=t.children.length,r=document.createElement("div");r.innerHTML=he(i,o),t.appendChild(r.firstElementChild),ve()}}Ie(),ue(),window.lucide&&lucide.createIcons()}}async function Ct(e){try{const{data:{session:t}}=await p.auth.getSession();if(!t)return URL.createObjectURL(e);const a=e.name.split(".").pop(),i=`products/${Date.now()}-${Math.random().toString(36).slice(2)}.${a}`,{error:o}=await p.storage.from("product-images").upload(i,e,{contentType:e.type,upsert:!1});if(o)return URL.createObjectURL(e);const{data:r}=p.storage.from("product-images").getPublicUrl(i);return r.publicUrl}catch{return URL.createObjectURL(e)}}window.removeImage=function(e){const t=document.getElementById("image-preview");if(!t)return;const a=[...t.children];a[e]&&a[e].remove(),ve(),Ie(),ue()};window.replaceImage=async function(e,t){const a=document.getElementById("image-preview");if(!a||!t||!t.files||!t.files[0])return;const i=t.files[0];if(!i.type.startsWith("image/")){u("Please choose an image file.","error");return}const o=await Ct(i);if(!o)return;const n=[...a.querySelectorAll(".img-thumb")][e];if(!n)return;const l=n.querySelector("img");l&&(l.src=o),ve(),Ie(),ue(),u("Image replaced. Save changes to apply.","info")};function ve(){const e=document.getElementById("image-preview"),t=document.getElementById("image-url-inputs");!e||!t||(t.innerHTML="",[...e.querySelectorAll(".img-thumb")].forEach((a,i)=>{const o=a.querySelector("img");if(!o)return;const r=document.createElement("input");r.type="hidden",r.name="images",r.id=`img-url-${i}`,r.value=o.src,t.appendChild(r),a.dataset.index=i;const n=a.querySelector(".rm");n&&n.setAttribute("onclick",`removeImage(${i})`);const l=a.querySelector(".rp");l&&l.setAttribute("onclick",`document.getElementById('rp-input-${i}').click()`);const c=a.querySelector(".rp-input");c&&(c.id=`rp-input-${i}`,c.onchange=()=>replaceImage(i,c))}))}function Ie(){const e=document.getElementById("image-preview");e&&[...e.querySelectorAll(".img-thumb")].forEach((t,a)=>{t.classList.toggle("cover-img",a===0),t.title=a===0?"Cover Image":`Image ${a+1}`})}function ue(){const e=document.getElementById("image-preview"),t=document.getElementById("gallery-counter");if(!e||!t)return;const a=e.querySelectorAll(".img-thumb").length,i=a>=24;t.textContent=i?"✓ "+a+" / 24 images — this product will auto-publish on save":a+" / 24 images"+(a>=12?" — almost there, keep going for a full gallery":""),t.className="text-sm mt-1 font-bold "+(i?"text-emerald-300":"text-gray-400");const o=document.querySelector('#product-form [name="is_active"]');i&&o&&!o.checked&&(o.checked=!0)}function $e(e,t){return`kco_product_form_autosave_${e}_${t||"new"}`}function Bi(e){const t=new FormData(e),a={images:[],tags:[],fields:{}};for(const[i,o]of t.entries())i==="images"?o&&!String(o).startsWith("blob:")&&a.images.push(String(o)):i==="tags"?a.tags.push(String(o)):a.fields[i]=String(o);return a.fields.is_featured=e.querySelector('[name="is_featured"]')?.checked?"on":"",a.fields.is_active=e.querySelector('[name="is_active"]')?.checked?"on":"",a}function Mi(e,t){if(!t||typeof t!="object")return!1;const a=t.fields||{};Object.entries(a).forEach(([o,r])=>{const n=e.querySelector(`[name="${o}"]`);n&&(n.type==="checkbox"?n.checked=r==="on"||r===!0:n.value=r==null?"":String(r))});const i=Array.isArray(t.tags)?t.tags:[];if(e.querySelectorAll('input[name="tags"]').forEach(o=>{o.checked=i.includes(o.value)}),Array.isArray(t.images)){const o=document.getElementById("image-preview");o&&(o.innerHTML=t.images.map((r,n)=>he(r,n)).join(""),ve(),Ie(),ue())}return!0}function pt(){const e=document.getElementById("product-review-content"),t=document.getElementById("product-form");if(!e||!t)return;const a=t.querySelector('[name="title"]')?.value||"Untitled Product",i=t.querySelector('[name="brand"]')?.value||"N/A",o=parseFloat(t.querySelector('[name="price"]')?.value||"0")||0,r=parseFloat(t.querySelector('[name="real_price"]')?.value||"0")||0,n=t.querySelector('[name="stock_quantity"]')?.value,l=n===""||n==null?"Unlimited":n,c=S.section==="products"&&document.querySelector("#product-form")?.dataset?.category||"",d=[...t.querySelectorAll('input[name="tags"]:checked')].map(g=>g.value),m=document.querySelectorAll("#image-preview .img-thumb").length,y=t.querySelector('[name="is_active"]')?.checked;e.innerHTML=`
    <div class="grid grid-cols-2 gap-2">
      <div><span class="text-gray-500">Title</span><p class="text-white font-semibold">${s(a)}</p></div>
      <div><span class="text-gray-500">Brand</span><p class="text-white font-semibold">${s(i)}</p></div>
      <div><span class="text-gray-500">Price</span><p class="text-emerald-300 font-semibold">${r>o?`<span class="line-through text-gray-500 mr-1">$${r.toLocaleString()}</span>`:""}$${o.toLocaleString()}</p></div>
      <div><span class="text-gray-500">Stock</span><p class="text-white font-semibold">${s(l)}</p></div>
      <div><span class="text-gray-500">Images</span><p class="text-white font-semibold">${m}</p></div>
      <div><span class="text-gray-500">Status</span><p class="${y?"text-emerald-300":"text-amber-300"} font-semibold">${y?"Published":"Draft / Hidden"}</p></div>
    </div>
    <div class="mt-2 text-gray-400">Tags: ${d.length?s(d.join(", ")):"No tags selected"}</div>
    ${c?`<div class="text-gray-500 mt-1">Category: ${s(c)}</div>`:""}
  `}window.previewProductDraft=function(){const e=document.getElementById("product-form");if(!e)return;const t=document.querySelector("#image-preview img")?.src||"/fallback.svg",a=e.querySelector('[name="title"]')?.value||"Untitled Product",i=e.querySelector('[name="description"]')?.value||"No description yet.",o=e.querySelector('[name="brand"]')?.value||"N/A",r=parseFloat(e.querySelector('[name="price"]')?.value||"0")||0,n=parseFloat(e.querySelector('[name="real_price"]')?.value||"0")||0,l=e.dataset.category||"Product",c=e.querySelector('[name="stock_quantity"]')?.value||"Unlimited",d=e.querySelector('[name="is_active"]')?.checked;U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Live Draft Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">🔙 Back</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="${s(t)}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
          <div class="space-y-2">
            <h4 class="text-xl font-black text-white">${s(a)}</h4>
            <div class="flex items-center gap-2">${j(d?"active":"inactive")}<span class="badge bg-blue-500/10 text-blue-300 border-blue-500/20">${s(l)}</span></div>
            <p class="text-sm text-gray-400">${s(i)}</p>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">${n>r?`<span class="text-xs line-through text-gray-500 mr-1">$${n.toLocaleString()}</span>`:""}$${r.toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${s(c)}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2 col-span-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${s(o)}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>`)};function Fi(e,t){const a=document.getElementById("product-form");if(!a)return;a.dataset.category=e;const i=$e(e,t),o=document.getElementById("product-autosave-note");if(!t)try{const c=localStorage.getItem(i);if(c){const d=JSON.parse(c);Mi(a,d)&&o&&(o.textContent="Autosave restored from your last session.",o.classList.remove("hidden"))}}catch{}const r=()=>{try{localStorage.setItem(i,JSON.stringify(Bi(a))),o&&(o.textContent=`Auto saved at ${new Date().toLocaleTimeString()}`,o.classList.remove("hidden"))}catch{}pt()};let n;const l=()=>{clearTimeout(n),n=setTimeout(r,500)};a.querySelectorAll("input, textarea, select").forEach(c=>{c.addEventListener("input",l),c.addEventListener("change",l)}),pt(),ue()}const Ri=["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],Ni=["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"],Di=["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"],Ui=["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"],qi=["FWD","RWD","AWD","4WD"],Y={activeProvider:"gemini",maxImages:5,PROVIDERS:{gemini:{label:"Google Gemini (Free Tier)",scan:async(e,t)=>{const a=typeof t.onProgress=="function"?t.onProgress:()=>{};a(1,"Identifying the exact product from your images…");const i=await A.identifyProduct(e,t);if(!i||i.identified===!1)return{identification:i,specs:null,price:null};a(2,"Completing the standard specifications for that product…");const o=await A.completeProductSpecs(e,i,t);a(3,"Estimating a fair current market price…");let r=null;try{r=await A.estimateProductPrice(e,i,o,t)}catch{}return{identification:i,specs:o,price:r}}}},async scan(e,t){const a=this.PROVIDERS[this.activeProvider];if(!a)throw new Error(`Scanner provider "${this.activeProvider}" is not configured.`);return a.scan((e||[]).slice(0,this.maxImages),t)}};function ji(e,t){const a=[...e.options||[]].map(n=>n.value).filter(Boolean);if(a.includes(String(t)))return String(t);const i={petrol:"Gasoline",gas:"Gasoline",gasoline:"Gasoline",unleaded:"Gasoline",ev:"Electric",electric:"Electric","fully electric":"Electric",hybrid:"Hybrid","hybrid electric":"Hybrid","plug-in hybrid":"Plug-in Hybrid",phev:"Plug-in Hybrid",auto:"Automatic",automatic:"Automatic","automatic transmission":"Automatic",manual:"Manual","manual transmission":"Manual",cvt:"CVT","continuously variable":"CVT","dual clutch":"Dual-Clutch",dct:"Dual-Clutch",fwd:"FWD","front-wheel drive":"FWD","front wheel drive":"FWD",rwd:"RWD","rear-wheel drive":"RWD","rear wheel drive":"RWD",awd:"AWD","all-wheel drive":"AWD","all wheel drive":"AWD","4wd":"4WD","four-wheel drive":"4WD","four wheel drive":"4WD","4x4":"4WD",sedan:"Sedan",saloon:"Sedan",suv:"SUV",hatchback:"Hatchback",coupe:"Coupe",coupé:"Coupe",convertible:"Convertible",wagon:"Wagon",estate:"Wagon",pickup:"Pickup","pick up":"Pickup",van:"Van",truck:"Truck","sports car":"Sports Car",motorcycle:"Motorcycle",yacht:"Yacht","like new":"Used - Like New","used - like new":"Used - Like New"},o=String(t).toLowerCase().trim();return i[o]?i[o]:a.find(n=>n.toLowerCase().includes(o)||o.includes(n.toLowerCase()))||null}function Oi(e){const t=[];return e.year&&t.push(e.year),e.brand&&t.push(e.brand),e.model&&t.push(e.model),!e.model&&e.body_type&&t.push(e.body_type),t.join(" ")||e.detected_name||""}function Hi(e){const t=e&&e.identification&&e.identification.identified!==!1?e.identification:{},a=e&&e.specs?e.specs:{},i=e&&e.price?e.price:null,o=[],r=x=>Array.isArray(x)?x.join(", "):String(x??"").trim(),n=(x,h,I)=>{if(h==null||r([h])==="")return;const z=document.querySelector(`#product-form [name="${x}"]`);if(!z)return;let Q=String(h);if(I&&!I.includes(Q)){const le=ji(z,Q);if(le===null)return;Q=le}z.value=Q,o.push(x)};n("brand",t.brand),n("model",t.model),n("color",t.color),n("condition",t.condition,Ri),n("subcategory",t.subcategory),n("body_type",t.body_type||a.body_type,Ni),n("model_year",t.year||a.model_year),n("title",a.title||Oi(t)),n("description",a.description),n("engine",a.engine),n("transmission",a.transmission,Di),n("fuel_type",a.fuel_type,Ui),n("drive_type",a.drive_type,qi),n("horsepower",a.horsepower),n("mileage",a.mileage),n("seating_capacity",a.seating_capacity),n("doors",a.doors),n("safety_features",r(a.safety_features)),n("storage",a.storage),n("ram",a.ram),n("processor",a.processor),n("display",a.display),n("graphics",a.graphics),n("os",a.os),n("material",a.material),n("size",a.size),n("gender",a.gender),n("platform",a.platform),n("type",a.type||t.type),n("age_range",a.age_range),n("skin_type",a.skin_type),n("ingredients",a.ingredients),n("dimensions",a.dimensions),n("author",a.author),n("publisher",a.publisher),n("language",a.language),n("format",a.format),n("isbn",a.isbn),n("pages",a.pages),n("edition",a.edition),n("quantity",a.quantity),n("pet_type",a.pet_type),n("lens",a.lens),n("sensor",a.sensor),n("megapixels",a.megapixels),n("video",a.video),n("license",a.license),n("version",a.version),n("duration",a.duration),n("followers",a.followers),n("engagement",a.engagement),n("niche",a.niche),n("usage",a.usage),n("shelf_life",a.shelf_life),n("assembly",a.assembly),n("weatherproof",a.weatherproof),n("warranty",a.warranty||t.warranty),n("availability_status",a.availability_status),n("features_text",r(a.features)),n("highlights_text",r(t.highlights||a.highlights)),n("seo_keywords_text",r(a.seo_keywords));const l=new Set((Array.isArray(a.tags)?a.tags:[]).map(x=>String(x).trim()));document.querySelectorAll('#product-form input[name="tags"]').forEach(x=>{l.has(x.value)&&(x.checked=!0,o.push("tags"))});const c=Number(a.stock_quantity);Number.isFinite(c)&&c>0&&n("stock_quantity",c);const d=new Set((Array.isArray(a.missing_fields)?a.missing_fields:[]).map(x=>String(x))),m=new Set(["title","description","price","real_price","stock_quantity","images","features","highlights","seo_keywords","tags","safety_features"]);d.forEach(x=>{if(m.has(x))return;const h=document.querySelector(`#product-form [name="${x}"]`);if(!(!h||h.type==="checkbox"||h.type==="radio"||h.type==="number")&&String(h.value||"").trim()===""){if(h.tagName==="SELECT"&&![...h.options].some(I=>I.value==="Not specified")){const I=document.createElement("option");I.value="Not specified",I.textContent="Not specified",h.appendChild(I)}h.value="Not specified",o.push(`${x} (Not specified)`)}});const y=document.querySelector('#product-form [name="price"]'),g=document.querySelector('#product-form [name="real_price"]'),f=i?Number(i.estimated_price):NaN,b=i?Number(i.suggested_discount_price):NaN,v=Number.isFinite(Number(D))?Number(D):0,w=Number.isFinite(Number(H))?Number(H):999999999,P=x=>Math.max(v,Math.min(w,Math.round(x)));if(Number.isFinite(f)&&f>0){g&&(g.value=String(P(f)),o.push("real_price"));const x=Number.isFinite(b)&&b>0&&b<f?b:f;y&&(y.value=String(P(x)),o.push("price"))}return pt(),{filled:o}}function Tt(e){const t=String(e||"").trim().toLowerCase(),a=re.find(n=>n.toLowerCase()===t);if(a)return{category:a,listing_type:null};if(/(house|villa|apartment|condo|mansion|land|estate|real estate|property|building|bungalow|townhouse|ranch|farmhouse)/.test(t))return{category:null,listing_type:"property"};const i={bag:"Fashion",bags:"Fashion",handbag:"Fashion",handbags:"Fashion",backpack:"Fashion",backpacks:"Fashion",purse:"Fashion",wallet:"Fashion",wallets:"Fashion",luggage:"Travel & Luggage",sneaker:"Fashion",sneakers:"Fashion",shoe:"Fashion",shoes:"Fashion",boot:"Fashion",boots:"Fashion",footwear:"Fashion",sandal:"Fashion",sandals:"Fashion",heel:"Fashion",heels:"Fashion",phone:"Phones",smartphone:"Phones",smartphones:"Phones",iphone:"Phones","mobile phone":"Phones",laptop:"Computers",laptops:"Computers",computer:"Computers",notebook:"Computers",macbook:"Computers",pc:"Computers",desktop:"Computers",electronics:"Electronics",electronic:"Electronics",gadget:"Electronics",gadgets:"Electronics",tv:"Electronics",television:"Electronics",headphones:"Electronics",speaker:"Electronics",speakers:"Electronics",soundbar:"Electronics",tablet:"Electronics",earbuds:"Electronics",camera:"Cameras & Photography",cameras:"Cameras & Photography",dslr:"Cameras & Photography",drone:"Cameras & Photography",jewelry:"Jewelry",jewellery:"Jewelry",ring:"Jewelry",necklace:"Jewelry",earring:"Jewelry",earrings:"Jewelry",bracelet:"Jewelry",watch:"Watches & Accessories",watches:"Watches & Accessories",wristwatch:"Watches & Accessories","smart watch":"Watches & Accessories",clothing:"Fashion",clothes:"Fashion",fashion:"Fashion",shirt:"Fashion",shirts:"Fashion",dress:"Fashion",dresses:"Fashion",jacket:"Fashion",jackets:"Fashion",hoodie:"Fashion",jeans:"Fashion","t-shirt":"Fashion",tshirt:"Fashion",apparel:"Fashion","men's fashion":"Men","mens fashion":"Men","women's fashion":"Women","womens fashion":"Women",car:"Cars",cars:"Cars",vehicle:"Cars",vehicles:"Cars",automobile:"Cars",suv:"Cars",sedan:"Cars","luxury car":"Cars","luxury cars":"Cars",truck:"Trucks",trucks:"Trucks",trailer:"Trucks",bus:"Trucks",motorcycle:"Motorcycles",motorbike:"Motorcycles","motor bike":"Motorcycles",bicycle:"Bicycles",bicycles:"Bicycles",cycling:"Bicycles",bike:"Bicycles",motorhome:"RV & Camper Accessories",motorhomes:"RV & Camper Accessories",camper:"RV & Camper Accessories",rv:"RV & Camper Accessories",boat:"Marine & Boating",boats:"Marine & Boating",yacht:"Marine & Boating",jet:"Marine & Boating",beauty:"Beauty",skincare:"Beauty",cosmetics:"Beauty",makeup:"Beauty",perfume:"Beauty",kitchen:"Kitchen",appliance:"Home Appliances",appliances:"Home Appliances",blender:"Kitchen",kettle:"Kitchen",cookware:"Kitchen",vacuum:"Home Appliances",furniture:"Furniture",sofa:"Furniture",chair:"Furniture",chairs:"Furniture",table:"Furniture",tables:"Furniture",bed:"Furniture",mattress:"Furniture",desk:"Furniture",toy:"Toys & Hobbies",toys:"Toys & Hobbies",game:"Gaming",games:"Gaming",gaming:"Gaming",console:"Gaming",food:"Food & Groceries",groceries:"Food & Groceries",snack:"Food & Groceries",snacks:"Food & Groceries",beverage:"Food & Groceries",baby:"Baby",kids:"Kids",stroller:"Baby",health:"Health & Medical",medical:"Health & Medical",supplement:"Health & Medical",fitness:"Sports",sport:"Sports",sports:"Sports",gym:"Sports",dumbbell:"Sports",book:"Books",books:"Books",textbook:"Books",novel:"Books",stationery:"Office",office:"Office",printer:"Office",pen:"Office",pet:"Pets",pets:"Pets",dog:"Pets",cat:"Pets",musical:"Musical Instruments",guitar:"Musical Instruments",piano:"Musical Instruments",instrument:"Musical Instruments",drum:"Musical Instruments",software:"Software & Digital Products",digital:"Software & Digital Products",account:"Software & Digital Products",accounts:"Software & Digital Products",instagram:"Software & Digital Products",tiktok:"Software & Digital Products",camping:"Camping & Hiking",tent:"Camping & Hiking",hiking:"Camping & Hiking",flower:"Flowers & Gifts",flowers:"Flowers & Gifts",gift:"Flowers & Gifts",gifts:"Flowers & Gifts",wedding:"Wedding Supplies",party:"Party & Event Supplies",coin:"Coins & Bullion",coins:"Coins & Bullion",art:"Arts & Crafts",painting:"Arts & Crafts",craft:"Arts & Crafts"},o=i[t]||i[t.replace(/s$/,"")]||i[t.replace(/\s+/g," ")];if(o)return{category:o,listing_type:null};for(const n of re)if(t.includes(n.toLowerCase())||t.length>2&&n.toLowerCase().includes(t))return{category:n,listing_type:null};return{category:Za(t)||"Other",listing_type:null}}function Gi(e){const t=String(e||"").toLowerCase().trim();if(!t)return null;const a=mt.find(o=>o.toLowerCase()===t);return a||mt.find(o=>o.toLowerCase().includes(t)||t.includes(o.toLowerCase()))||null}let Ne=null;window._resolveScanConfirm=function(e,t){typeof Ne=="function"&&Ne({choice:e,category:t})};let V=[],Ae=[],Z="";function ha(e,t){const i=(Array.isArray(e.image_indices)?e.image_indices:[]).map(o=>t[o]).filter(Boolean);return i.length?i:t}function zi(e,t){const a=Tt(e.category),i=e.listing_type==="property"||a&&a.listing_type==="property",o=i?"Real Estate":a.category||e.category||"Other",r=e.confidence||"medium",n={high:"bg-emerald-500/10 text-emerald-400 border-emerald-500/20",medium:"bg-amber-500/10 text-amber-400 border-amber-500/20",low:"bg-red-500/10 text-red-400 border-red-500/20"}[r]||"bg-amber-500/10 text-amber-400 border-amber-500/20",l=ha(e,Ae).slice(0,3);return`
  <div class="scan-review-card rounded-xl border border-violet-500/30 bg-violet-500/10 p-3 space-y-2 fade-in" data-i="${t}">
    <div class="flex items-center justify-between gap-2 flex-wrap">
      <p class="text-xs font-bold text-white">${t+1}. ${s(e.detected_name||"Detected product")}</p>
      <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${n}">${s(r).toUpperCase()}</span>
    </div>
    <div class="flex items-center gap-2 flex-wrap">
      ${l.map(c=>`<img src="${s(c)}" class="w-10 h-10 rounded-lg object-cover border border-violet-500/20" onerror="this.src='/fallback.svg'">`).join("")}
      <span class="text-[11px] text-gray-400">${i?"Real Estate":s(o)} · ${(e.image_indices||[]).length||1} image(s)</span>
    </div>
    <div class="flex flex-wrap gap-2">
      <button type="button" onclick="scanReviewContinue(${t})" class="btn-press px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg transition">Continue to ${i?"Properties Manager":"its form"}</button>
      <button type="button" onclick="scanReviewEdit(${t})" class="btn-press px-4 py-2 bg-gray-700/60 hover:bg-gray-600 text-gray-200 text-xs font-bold rounded-lg transition">Edit</button>
      <button type="button" onclick="scanReviewRemove(${t})" class="btn-press px-4 py-2 bg-red-900/40 hover:bg-red-800/60 text-red-200 text-xs font-bold rounded-lg transition">Remove</button>
      <button type="button" onclick="scanReviewCancel()" class="btn-press px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 text-xs font-bold rounded-lg transition">Cancel</button>
    </div>
  </div>`}window.scanReviewRender=function(){const e=document.getElementById(Z);if(e){if(e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),!V.length){e.classList.add("text-gray-400"),e.textContent="All detected products were removed — nothing was changed.";return}e.classList.add("text-gray-100"),e.innerHTML=`
    <div class="space-y-3">
      <div>
        <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="list-checks" class="w-4 h-4 text-violet-400"></i> ${V.length} distinct product${V.length>1?"s":""} detected</p>
        <p class="text-[11px] text-gray-400 mt-1">Photos of the same product are grouped into one listing; different products stay separate. Review each one — edit, remove, or continue to its correct form. Nothing is saved or published automatically.</p>
      </div>
      ${V.map((t,a)=>zi(t,a)).join("")}
    </div>`,window.lucide&&lucide.createIcons()}};window.scanReviewContinue=async function(e){const t=V[e];if(!t)return;const a=ha(t,Ae),i=Tt(t.category);if(t.listing_type==="property"||i&&i.listing_type==="property"){(Z==="s1-scan-status"||Z==="scanner-scan-status")&&(ae(),ne=[]),Wi(t,a);return}const r=i.category||t.category||"Other";if(Z==="s1-scan-status"||Z==="scanner-scan-status"){try{localStorage.removeItem($e(r,""))}catch{}ne=[];let n=t.property_id?wa[t.property_id]:null;n&&n.specifications&&typeof n.specifications=="object"&&(n={...n,...n.specifications}),showAddProductStep2(r,n?{...n,images:a}:{images:a}),await Ut(t,a,r)}else{const n=document.getElementById("product-form"),l=n&&n.dataset.category||"";if(r!==l){try{localStorage.removeItem($e(r,""))}catch{}switchProductFormCategory(r);const c=document.getElementById(Z);c&&(c.classList.remove("hidden"),c.classList.add("text-blue-300"),c.textContent=`Category changed to ${r} — finishing the scan…`),window.lucide&&lucide.createIcons()}await Ut(t,a,r)}};window.scanReviewEdit=function(e){const t=V[e];if(!t)return;const a=document.querySelector(`.scan-review-card[data-i="${e}"]`);if(!a)return;const i=Tt(t.category),r=t.listing_type==="property"||i&&i.listing_type==="property"?"Real Estate":i.category||t.category||"Other",n=re.map(l=>`<option value="${s(l)}" ${l===r?"selected":""}>${s(l)}</option>`).join("");a.innerHTML=`
    <p class="text-xs font-bold text-white">Edit detected product #${e+1}</p>
    <div class="space-y-2">
      <input id="sr-name-${e}" class="input-field !py-2 !text-xs" value="${s(t.detected_name||"")}" placeholder="Product name">
      <input id="sr-brand-${e}" class="input-field !py-2 !text-xs" value="${s(t.brand||"")}" placeholder="Brand">
      <input id="sr-model-${e}" class="input-field !py-2 !text-xs" value="${s(t.model||"")}" placeholder="Model">
      <select id="sr-cat-${e}" class="input-field !py-2 !text-xs">${n}</select>
    </div>
    <div class="flex flex-wrap gap-2">
      <button type="button" onclick="scanReviewApplyEdit(${e})" class="btn-press px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition">Apply</button>
      <button type="button" onclick="scanReviewRender()" class="btn-press px-4 py-2 bg-gray-700/60 hover:bg-gray-600 text-gray-200 text-xs font-bold rounded-lg transition">Back</button>
    </div>`};window.scanReviewApplyEdit=function(e){const t=V[e];if(!t)return;const a=document.getElementById(`sr-name-${e}`)?.value,i=document.getElementById(`sr-brand-${e}`)?.value,o=document.getElementById(`sr-model-${e}`)?.value,r=document.getElementById(`sr-cat-${e}`)?.value;a&&(t.detected_name=a),i&&(t.brand=i),o&&(t.model=o),r&&(t.category=r),scanReviewRender()};window.scanReviewRemove=function(e){V.splice(e,1),scanReviewRender()};window.scanReviewCancel=function(){const e=document.getElementById(Z);e&&(e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300"),e.classList.add("text-gray-400"),e.textContent="Scan cancelled — nothing was changed.")};function va(e){const t=e&&e.identification&&e.identification.identified!==!1?e.identification:{},a=e&&e.specs?e.specs:{},i=e&&e.price?e.price:null,o=[],r=_=>Array.isArray(_)?_.join(", "):String(_??"").trim(),n=(_,$)=>{if($==null||r([$])==="")return;const q=document.querySelector(`#property-form [name="${_}"]`);q&&(q.value=String($),o.push(_))},l=t.property_type||a.property_type;if(l){const _=Gi(l);_&&n("property_type",_)}n("title",a.title||t.detected_name),n("description",a.description),n("subcategory",t.subcategory||a.subcategory);const c=t.bedrooms??a.bedrooms;c!=null&&c!==""&&n("bedrooms",parseInt(c,10)||c);const d=t.bathrooms??a.bathrooms;d!=null&&d!==""&&n("bathrooms",parseInt(d,10)||d),n("building_size",t.building_size||a.building_size),n("land_size",t.land_size||a.land_size);const m=t.parking_spaces??a.parking_spaces;m!=null&&m!==""&&n("parking_spaces",parseInt(m,10)||m);const y=String(t.furnished||a.furnished||"").toLowerCase();/furnished|yes/.test(y)?n("furnished","Furnished"):/unfurnished|no|empty/.test(y)&&n("furnished","Unfurnished");const g=String(t.listing_status||a.listing_status||"").toLowerCase();/rent|lease/.test(g)?n("listing_status","rent"):/sale|buy|purchase/.test(g)&&n("listing_status","sale");const f=t.area||a.area;f&&!(t.town||a.town)&&n("town",f),n("town",t.town||a.town),n("city",t.city||a.city),n("state",t.state||a.state);const b=t.country||a.country;if(n("country",b),b){const _=(ye||[]).find($=>String($.name||"").toLowerCase()===String(b).toLowerCase()||String($.code||"").toLowerCase()===String(b).toLowerCase());if(_&&_.code){const $=document.querySelector('#property-form [name="country_code"]');$&&($.value=_.code,o.push("country_code"))}}const v=t.address||a.address;n("product_location",v||[f||t.town||a.town,t.city||a.city,t.state||a.state,b].filter(Boolean).join(", ")),n("address",t.address||a.address),n("zip_code",t.zip_code||a.zip_code);const w=Number(t.latitude??a.latitude),P=Number(t.longitude??a.longitude);Number.isFinite(w)&&w>=-90&&w<=90&&w!==0&&n("latitude",String(w)),Number.isFinite(P)&&P>=-180&&P<=180&&P!==0&&n("longitude",String(P)),n("features_text",r(a.features)),n("highlights_text",r(t.highlights||a.highlights)),n("seo_keywords_text",r(a.seo_keywords));const x=t.half_bathrooms??a.half_bathrooms;x!=null&&x!==""&&n("half_bathrooms",parseInt(x,10)||x);const h=t.floors??a.floors;h!=null&&h!==""&&n("floors",parseInt(h,10)||h),n("garage",t.garage||a.garage);const I=t.year_built??a.year_built;I!=null&&I!==""&&n("year_built",parseInt(I,10)||I);const z=t.year_renovated??a.year_renovated;z!=null&&z!==""&&n("year_renovated",parseInt(z,10)||z);const Q=t.condition||a.condition,le=["New Construction","Like New","Excellent","Good","Fair","Needs Renovation"];if(Q){const _=String(Q).toLowerCase(),$=le.find(q=>_.includes(q.toLowerCase())||q.toLowerCase().includes(_));$&&n("condition",$)}n("interior_features_text",r(a.interior_features)),n("exterior_features_text",r(a.exterior_features)),n("home_systems_text",r(a.home_systems));const Te=r(t.landmarks||a.landmarks);Te&&n("landmarks_text",Te);const O=a.floor_plan;if(O&&typeof O=="object"){O.image&&n("floor_plan_image",O.image),O.levels&&n("floor_plan_levels",O.levels),O.total_area&&n("floor_plan_total_area",O.total_area);const _=Array.isArray(O.rooms)?O.rooms.map($=>{const q=String($).match(/^(.*?):\s*(.*)$/);return q?`${q[1].trim()}: ${q[2].trim()}`:String($)}):[];_.length&&n("floor_plan_rooms",_.join(", "))}const C=a.nearby_area;C&&typeof C=="object"&&(Array.isArray(C.schools)&&C.schools.length&&n("nearby_schools_text",C.schools.join(", ")),Array.isArray(C.hospitals)&&C.hospitals.length&&n("nearby_hospitals_text",C.hospitals.join(", ")),Array.isArray(C.shopping)&&C.shopping.length&&n("nearby_shopping_text",C.shopping.join(", ")),Array.isArray(C.transportation)&&C.transportation.length&&n("nearby_transportation_text",C.transportation.join(", ")),Array.isArray(C.distances)&&C.distances.length&&n("nearby_distances_text",C.distances.join(", ")));const T=Array.isArray(a.legal_info)?a.legal_info.join(", "):r(a.legal_info);T&&n("legal_info_text",T),a.inspection_info&&n("inspection_info",a.inspection_info),a.risk_notes&&n("risk_notes",a.risk_notes);const pe=document.querySelector('#property-form [name="verification_status"]');pe&&(pe.value="Not verified",o.push("verification_status"));const Ze=new Set((Array.isArray(a.missing_fields)?a.missing_fields:[]).map(_=>String(_))),et=new Set(["title","description","price","real_price","features","highlights","seo_keywords","country","country_code","state","city","town","product_location","area","address","zip_code","latitude","longitude","landmarks_text","interior_features_text","exterior_features_text","home_systems_text","floor_plan_image","floor_plan_levels","floor_plan_total_area","floor_plan_rooms","nearby_schools_text","nearby_hospitals_text","nearby_shopping_text","nearby_transportation_text","nearby_distances_text","legal_info_text","inspection_info","risk_notes","documents_text","verification_date","verification_status"]);Ze.forEach(_=>{if(et.has(_))return;const $=document.querySelector(`#property-form [name="${_}"]`);if(!(!$||$.type==="checkbox"||$.type==="radio"||$.type==="number")&&String($.value||"").trim()===""){if($.tagName==="SELECT"&&![...$.options].some(q=>q.value==="Not specified")){const q=document.createElement("option");q.value="Not specified",q.textContent="Not specified",$.appendChild(q)}$.value="Not specified",o.push(`${_} (Not specified)`)}});const Ra=Number.isFinite(Number(D))?Number(D):0,Na=Number.isFinite(Number(H))?Number(H):999999999,Rt=_=>Math.max(Ra,Math.min(Na,Math.round(_))),_e=i?Number(i.estimated_price):NaN,Le=i?Number(i.suggested_discount_price):NaN;if(Number.isFinite(_e)&&_e>0){const _=document.querySelector('#property-form [name="real_price"]');_&&(_.value=String(Rt(_e)),o.push("real_price"));const $=Number.isFinite(Le)&&Le>0&&Le<_e?Le:_e;n("price",String(Rt($)))}return typeof window.refreshPropertyMapFromForm=="function"&&window.refreshPropertyMapFromForm(),{filled:o}}async function Ut(e,t,a){const i=document.getElementById("scan-ai-status"),o=(r,n)=>{i&&(i.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),n&&i.classList.add(n),i.innerHTML=r)};try{o("Completing the standard specifications for that product…","text-blue-300");const r=await A.completeProductSpecs(t,e,{category:a||"",maxImages:Y.maxImages});let n=null;o("Estimating a fair current market price…","text-blue-300");try{n=await A.estimateProductPrice(t,e,r||{},{category:a||"",maxImages:Y.maxImages})}catch{}const l=Hi({identification:e,specs:r,price:n}),c=[e.year,e.brand,e.model].filter(Boolean).join(" ")||e.detected_name||"the product";let d=`${s(c)} — ${l.filled.length} field${l.filled.length>1?"s":""} ready for you (including the detailed description and suggested Real + Discount prices). Review and edit everything, then press SAVE / UPDATE.`;e.year_estimated&&(d+=" Confirm the model year before saving."),o(d,"text-emerald-300"),u(`Review ${c}, then press SAVE / UPDATE.`,"success")}catch(r){const n=String(r?.message||r),l=/key|api|configured|settings|vision/i.test(n);o(l?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${n}`,"text-red-400"),u("AI scan failed.","error")}window.lucide&&lucide.createIcons()}window.scanProductWithAI=async function(){const e=document.getElementById("product-form");if(!e){u("Open the product form first.","error");return}const t=document.getElementById("btn-scan-ai"),a=document.getElementById("scan-ai-status"),i=[...document.querySelectorAll('#image-url-inputs [name="images"]')||[]].map(c=>c.value).filter(Boolean);if(!i.length){u("Upload at least one product image before scanning.","error");return}const o=t?t.innerHTML:"",r=(c,d)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),d&&a.classList.add(d),a.innerHTML=c)};try{const c=await A.getConfig();if(!String(c.gemini_key||c.gemini_api_key||"").trim()){r("No Gemini key yet. Open AI Settings at the bottom of the Admin Home page, paste your FREE Gemini API key (aistudio.google.com/apikey — no credit card needed), then scan again.","text-amber-300"),u("Add your free Gemini key in AI Settings first.","error");return}}catch{}t&&(t.disabled=!0,t.innerHTML="Scanning…"),r("Detecting every distinct product in your images…","text-blue-300");let n;try{n=await A.detectProducts(i,{category:e.dataset.category||"",maxImages:Math.min(i.length,Y.maxImages)})}catch(c){const d=String(c?.message||c),m=/key|api|configured|settings|vision/i.test(d);r(m?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${d}`,"text-red-400"),u("AI scan failed.","error"),t&&(t.disabled=!1,t.innerHTML=o);return}t&&(t.disabled=!1,t.innerHTML=o);const l=n&&n.identified!==!1&&Array.isArray(n.products)&&n.products.length?n.products:[];if(!l.length){r(n&&n.reason?`Could not identify any product: ${s(n.reason)}`:"No product could be read from these images. Make sure the photos clearly show the product(s), then try again.","text-amber-300"),u("No products could be identified from the images.","error");return}V=l,Ae=i,Z="scan-ai-status",scanReviewRender(),u(`${l.length} distinct product${l.length>1?"s":""} detected — review each one, then continue.`,"info")};function Wi(e,t){window._pfEscapeHandler&&(document.removeEventListener("keydown",window._pfEscapeHandler),window._pfEscapeHandler=null),showAddPropertyModal();const a=document.getElementById("image-preview"),i=document.getElementById("image-url-inputs");a&&i&&(a.innerHTML=t.map((n,l)=>he(n,l)).join(""),i.innerHTML=t.map((n,l)=>`<input type="hidden" name="images" id="img-url-${l}" value="${s(n)}">`).join(""),Ie(),ue());const o=document.getElementById("scan-ai-prop-status"),r=(n,l)=>{o&&(o.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300"),l&&o.classList.add(l),o.innerHTML=n)};r("Completing the standard specifications for this property…","text-blue-300"),A.completeProductSpecs(t,e,{category:"Real Estate",maxImages:Y.maxImages}).then(n=>A.estimateProductPrice(t,e,n||{},{category:"Real Estate",maxImages:Y.maxImages}).then(l=>{const c=va({identification:e,specs:n,price:l});r(`${s(e.detected_name||"Property")} — ${c.filled.length} field${c.filled.length>1?"s":""} ready for you. Review and edit everything, then press Publish Property.`,"text-emerald-300"),u("Review the property details, then press Publish Property.","success"),window.lucide&&lucide.createIcons()}).catch(()=>r("Price estimate skipped — review the details and set a price manually.","text-amber-300"))).catch(n=>{const l=/key|api|configured|settings|vision/i.test(String(n?.message||n));r(l?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${String(n?.message||n)}`,"text-red-400"),u("AI scan failed.","error")})}window.scanPropertyWithAI=async function(){if(!document.getElementById("property-form")){u("Open the property form first.","error");return}const t=document.getElementById("btn-scan-ai-prop"),a=document.getElementById("scan-ai-prop-status"),i=[...document.querySelectorAll('#image-url-inputs [name="images"]')||[]].map(c=>c.value).filter(Boolean);if(!i.length){u("Upload at least one property image before scanning.","error");return}const o=t?t.innerHTML:"",r=(c,d)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),d&&a.classList.add(d),a.innerHTML=c)};try{const c=await A.getConfig();if(!String(c.gemini_key||c.gemini_api_key||"").trim()){r("No Gemini key yet. Open AI Settings at the bottom of the Admin Home page, paste your FREE Gemini API key (aistudio.google.com/apikey — no credit card needed), then scan again.","text-amber-300"),u("Add your free Gemini key in AI Settings first.","error");return}}catch{}t&&(t.disabled=!0,t.innerHTML="Scanning…"),r("Identifying this property from your images…","text-blue-300");let n;try{n=await A.identifyProduct(i,{category:"Real Estate",maxImages:Y.maxImages})}catch(c){const d=String(c?.message||c),m=/key|api|configured|settings|vision/i.test(d);r(m?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${d}`,"text-red-400"),u("AI scan failed.","error"),t&&(t.disabled=!1,t.innerHTML=o);return}if(!n||n.identified===!1){r(n&&n.reason?`Could not identify the property: ${s(n.reason)}`:"The property could not be read from these images. Make sure the photos clearly show it, then try again.","text-amber-300"),u("The property could not be identified from the images.","error"),t&&(t.disabled=!1,t.innerHTML=o);return}t&&(t.disabled=!1,t.innerHTML=o);const l=await new Promise(c=>{Ne=g=>{Ne=null,c(g)};const d=document.getElementById("scan-ai-prop-status");if(!d){c({choice:"continue"});return}if(!window._propFormDirty){c({choice:"continue"});return}d.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300");const m=n.confidence||"medium",y={high:"text-emerald-400 border-emerald-500/20",medium:"text-amber-400 border-amber-500/20",low:"text-red-400 border-red-500/20"}[m]||"text-amber-400 border-amber-500/20";d.innerHTML=`
      <div class="rounded-xl border border-violet-500/30 bg-violet-500/10 p-3 space-y-2 fade-in">
        <p class="text-xs font-bold text-white">AI identified: <span class="text-violet-300">${s(n.detected_name||"this property")}</span></p>
        <p class="text-[11px] text-gray-400">
          ${n.property_type?"Type: "+s(n.property_type)+" • ":""}${n.bedrooms?s(n.bedrooms)+" bed • ":""}${n.bathrooms?s(n.bathrooms)+" bath • ":""}${[n.city,n.state,n.country].filter(Boolean).join(", ")||"location not visible"}
          <span class="ml-1 inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${y}">${s(m).toUpperCase()} confidence</span>
        </p>
        <div class="flex flex-wrap gap-2">
          <button type="button" onclick="_resolveScanConfirm('continue')" class="btn-press px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg transition">Fill the property form</button>
          <button type="button" onclick="_resolveScanConfirm('cancel')" class="btn-press px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 text-xs font-bold rounded-lg transition">Cancel</button>
        </div>
      </div>`});if(!l||l.choice==="cancel"){r("Scan cancelled — nothing was changed.","text-gray-400"),u("Scan cancelled.","info");return}try{r("Completing the standard specifications for this property…","text-blue-300");const c=await A.completeProductSpecs(i,n,{category:"Real Estate",maxImages:Y.maxImages});let d=null;r("Estimating a fair market value…","text-blue-300");try{d=await A.estimateProductPrice(i,n,c||{},{category:"Real Estate",maxImages:Y.maxImages})}catch{}const m=va({identification:n,specs:c,price:d});r(`${s(n.detected_name||"Property")} — ${m.filled.length} field${m.filled.length>1?"s":""} ready for you. Review and edit everything, then press Publish Property.`,"text-emerald-300"),u("Review the property details, then press Publish Property.","success")}catch(c){const d=String(c?.message||c),m=/key|api|configured|settings|vision/i.test(d);r(m?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${d}`,"text-red-400"),u("AI scan failed.","error")}window.lucide&&lucide.createIcons()};let ne=[];window.handleStep1ImageUpload=async function(e){const t=Array.from(e.target.files||[]).slice(0,10);if(t.length){for(const a of t)try{const i=await Ct(a);i&&ne.push(i)}catch{}xa(),e.target.value=""}};window.removeStep1Image=function(e){ne.splice(e,1),xa()};function xa(){const e=document.getElementById("s1-image-preview");if(!e)return;e.innerHTML=ne.map((a,i)=>`
    <div class="img-thumb ${i===0?"cover-img":""}" data-index="${i}">
      <img src="${s(a)}" onerror="this.src='/fallback.svg'">
      <button class="rm" onclick="removeStep1Image(${i})" type="button">🔙</button>
    </div>`).join("");const t=document.getElementById("btn-s1-scan");t&&(t.disabled=ne.length===0,t.style.opacity=ne.length?"":"0.5"),window.lucide&&lucide.createIcons()}window.scanFirstWithAI=async function(){const e=ne.slice();if(!e.length){u("Upload at least one product image before scanning.","error");return}const t=document.getElementById("btn-s1-scan"),a=document.getElementById("s1-scan-status"),i=t?t.innerHTML:"",o=(l,c)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),c&&a.classList.add(c),a.innerHTML=l)};try{const l=await A.getConfig();if(!String(l.gemini_key||l.gemini_api_key||"").trim()){o("No Gemini key yet. Open AI Settings at the bottom of the Admin Home page, paste your FREE Gemini API key (aistudio.google.com/apikey — no credit card needed), then scan again.","text-amber-300"),u("Add your free Gemini key in AI Settings first.","error");return}}catch{}t&&(t.disabled=!0,t.innerHTML="Scanning…"),o("Detecting every distinct product in your images…","text-blue-300");let r;try{r=await A.detectProducts(e,{category:"",maxImages:Math.min(e.length,Y.maxImages)})}catch(l){const c=/key|api|configured|settings|vision/i.test(String(l?.message||l));o(c?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${String(l?.message||l)}`,"text-red-400"),t&&(t.disabled=!1,t.innerHTML=i);return}t&&(t.disabled=!1,t.innerHTML=i);const n=r&&r.identified!==!1&&Array.isArray(r.products)&&r.products.length?r.products:[];if(!n.length){o(r&&r.reason?`Could not identify any product: ${s(r.reason)}`:"No product could be read from these images. Make sure the photos clearly show the product(s), then try again.","text-amber-300"),u("No products could be identified from the images.","error");return}V=n,Ae=e,Z="s1-scan-status",scanReviewRender(),u(`${n.length} distinct product${n.length>1?"s":""} detected — review each one, then continue.`,"info")};let wa={};async function _a(){const e=new Set,t=[],a=i=>{!i||!i.property_id||i.listing_type==="property"||e.has(i.property_id)||!Array.isArray(i.images)||!i.images.length||(e.add(i.property_id),t.push(i))};try{const{data:i,error:o}=await p.from("showroom_listings").select("*").neq("listing_type","property");(o?[]:i||[]).forEach(a)}catch{}return je().forEach(a),t}window.openGeneralAiScanner=async function(){const e=await _a();U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="scan-search" class="w-5 h-5 text-violet-400"></i> General AI Scanner</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition" title="Close">✕ Close</button>
        </div>

        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3">
          <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> Scan your products with AI</p>
          <p class="text-[11px] text-gray-500">The scanner works on the products already in your Product Manager — no image upload needed. Press SCAN ALL WITH AI and it reads each product's existing photos to identify it, complete its specifications, write the description and features, pick the correct category, and suggest a fair price. Review every result, then continue to that product's form, already filled for you. Nothing is saved or published automatically.</p>
          <div class="flex items-center gap-2 text-[11px] font-bold text-gray-300 bg-white/5 border border-violet-500/20 rounded-xl px-3 py-2.5">
            <i data-lucide="package" class="w-4 h-4 text-violet-400 shrink-0"></i>
            <span>${e.length} product${e.length===1?"":"s"} ready to scan in the Product Manager.</span>
          </div>
          <button type="button" id="btn-scanner-scan" onclick="scanGeneralWithAI()" class="btn-press w-full px-4 py-3 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2">
            <i data-lucide="scan-search" class="w-4 h-4"></i> SCAN ALL WITH AI
          </button>
          <div id="scanner-scan-status" class="hidden text-xs font-medium"></div>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()};window.scanGeneralWithAI=async function(){const e=await _a();if(!e.length){u("No products with photos are in the Product Manager yet — add a product first.","error");return}const t=document.getElementById("btn-scanner-scan"),a=document.getElementById("scanner-scan-status"),i=t?t.innerHTML:"",o=(m,y)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),y&&a.classList.add(y),a.innerHTML=m)};try{const m=await A.getConfig();if(!String(m.gemini_key||m.gemini_api_key||"").trim()){o("No Gemini key yet. Open AI Settings at the bottom of the Admin Home page, paste your FREE Gemini API key (aistudio.google.com/apikey — no credit card needed), then scan again.","text-amber-300"),u("Add your free Gemini key in AI Settings first.","error");return}}catch{}t&&(t.disabled=!0,t.innerHTML="Scanning…"),o(`Detecting and completing ${e.length} product${e.length===1?"":"s"}…`,"text-blue-300");const r=[],n=[],l={};let c=0,d=0;for(const m of e){const y=(m.images||[]).slice(0,Y.maxImages);if(!y.length)continue;const g=r.length;r.push(...y);const f=y.map((b,v)=>g+v);try{const b=await A.detectProducts(y,{category:m.category||"",maxImages:Math.min(y.length,Y.maxImages)}),v=b&&b.identified!==!1&&Array.isArray(b.products)?b.products:[];if(!v.length)continue;c++,l[m.property_id]=m;for(const w of v)n.push({...w,property_id:m.property_id,image_indices:Array.isArray(w.image_indices)&&w.image_indices.length?w.image_indices.map(P=>f[Number(P)]).filter(P=>P!==void 0):f,detected_name:w.detected_name||m.title||m.property_id,category:w.category||m.category||"Other",listing_type:w.listing_type||m.listing_type||"product"})}catch{d++}}if(t&&(t.disabled=!1,t.innerHTML=i),!n.length){o(d?`The scanner could not read any product (${d} scan${d>1?"s":""} failed). Make sure your products have clear photos, then try again.`:"No product could be identified from the photos on your existing products. Make sure each product has clear photos, then try again.","text-amber-300"),u("No products could be scanned.","error");return}V=n,Ae=r,wa=l,Z="scanner-scan-status",scanReviewRender(),u(`${c} product${c>1?"s":""} scanned — review each one, then continue.`,"info")};window.saveProduct=async function(e,t,a){e.preventDefault();const i=e.target,o=i.querySelector("[type=submit][name=action][value=publish]"),r=a?"One-Click Publish Changes":"One-Click Publish Product";o&&(o.disabled=!0,o.textContent="Saving…");try{const n=new FormData(i),l={};for(const[g,f]of n.entries())g==="images"?(l.images=l.images||[],f&&!String(f).startsWith("blob:")&&l.images.push(String(f))):g==="tags"?(l.tags=l.tags||[],l.tags.push(f)):l[g]=f;l.is_featured=i.querySelector('[name="is_featured"]')?.checked?"on":"",l.is_active=i.querySelector('[name="is_active"]')?.checked?"on":"";const c=n.get("action")==="draft",d=g=>lt(g),m=g=>{const f=["model","storage","ram","processor","display","material","gender","platform","voltage","engine","transmission","fuel_type","horsepower","mileage","drive_type","body_type","model_year","seating_capacity","doors","real_price","type","size","age_range","skin_type","ingredients","dimensions","author","publisher","language","format","isbn","pages","edition","quantity","pet_type","lens","sensor","megapixels","video","license","version","duration","followers","engagement","niche","usage","shelf_life","assembly","weatherproof","movement","case_material","water_resistance","gemstone","movement_type","warranty_period"],b={};for(const v of f){const w=g[v];if(v==="real_price"){const P=w!=null&&String(w).trim()!==""?parseFloat(w):null;b[v]=P!=null&&Number.isFinite(P)&&P>0?Math.round(P):null;continue}b[v]=w!=null&&String(w).trim()!==""?w:null}if(g.safety_features){const v=d(g.safety_features);b.safety_features=v.length?v:null}return b};let y;if(a){let g=be((window._productsData||[]).find(T=>T.property_id===a));if(!g){const{data:T}=await p.from("showroom_listings").select("*").eq("property_id",a).maybeSingle();g=T?be(T):null}if(!g)throw new Error("Could not load the current product. Refresh the page and try again.");const f=(T,pe)=>{const Ze=T===""||T==null?"":T,et=pe===""||pe==null?"":pe;return String(Ze).trim()===String(et).trim()},b={};["title","description","currency","subcategory","brand","color","size","condition","warranty","availability_status"].forEach(T=>{f(l[T],g[T])||(b[T]=l[T]==null||l[T]===""?null:l[T])});const v=l.price===""||l.price==null?null:parseFloat(l.price);f(v,g.price)||(b.price=v==null?g.price:Math.max(D,Math.min(H,v)));const w=l.stock_quantity===""||l.stock_quantity==null?null:parseInt(l.stock_quantity,10);f(w,g.stock_quantity)||(b.stock_quantity=Number.isFinite(w)?w:null);const P=d(l.features_text);f(P.join("||"),(Array.isArray(g.features)?g.features:[]).join("||"))||(b.features=P);const x=l.tags||[];f(x.join("||"),(Array.isArray(g.tags)?g.tags:[]).join("||"))||(b.tags=x);const h=d(l.highlights_text);f(h.join("||"),(Array.isArray(g.highlights)?g.highlights:[]).join("||"))||(b.highlights=h);const I=d(l.seo_keywords_text);f(I.join("||"),(Array.isArray(g.seo_keywords)?g.seo_keywords:[]).join("||"))||(b.seo_keywords=I);const z=l.images||[];f(z.join("||"),(Array.isArray(g.images)?g.images:[]).join("||"))||(b.images=z);const Q=l.is_featured==="on";!!g.is_featured!==Q&&(b.is_featured=Q);const le=c?!1:l.is_active==="on"||(l.images||[]).length>=24;!!g.is_active!==le&&(b.is_active=le);const Te=m(l),O={...g.specifications&&typeof g.specifications=="object"?g.specifications:{},...Te};if(JSON.stringify(O)!==JSON.stringify(g.specifications||{})&&(b.specifications=O),Object.keys(b).length===0){u("No changes detected — nothing was saved.","info");try{localStorage.removeItem($e(t,a))}catch{}o&&(o.disabled=!1,o.textContent=r);return}const C={...g,...b,property_id:a,updated_at:new Date().toISOString()};if({error:y}=await p.from("showroom_listings").upsert(C,{onConflict:"property_id"}),y&&st(y,()=>at(C),"Product update")){o&&(o.disabled=!1,o.textContent=r);return}u(c?"Draft saved!":`Saved & published — your showroom shows it now (${Object.keys(b).length} change${Object.keys(b).length>1?"s":""}).`)}else{const g=parseInt(l.required_image_count||"0",10)||(Et.includes(t)?24:0);if(ya(g,l.images||[],"This listing"),!l.title||!l.title.trim())throw new Error("A product title is required.");if(l.price===""||l.price==null||!isFinite(parseFloat(l.price)))throw new Error("A price is required.");if(!!i.querySelector('[name="condition"]')&&!l.condition)throw new Error("Please choose the product condition.");const b={listing_type:"product",category:t,subcategory:l.subcategory||null,title:l.title.trim(),description:l.description||"",price:Math.max(D,Math.min(H,parseFloat(l.price)||0)),currency:l.currency||"USD",country:"",country_code:"",listing_status:"sale",state:"",city:"",product_location:"",latitude:null,longitude:null,is_active:c?!1:l.is_active==="on"||(l.images||[]).length>=24,is_featured:l.is_featured==="on",brand:l.brand||null,color:l.color||null,size:l.size||null,condition:l.condition||null,warranty:l.warranty||null,availability_status:l.availability_status||"In Stock",stock_quantity:l.stock_quantity?parseInt(l.stock_quantity):null,images:l.images||[],features:d(l.features_text).length?d(l.features_text):l.tags||[],tags:l.tags||[],highlights:d(l.highlights_text),seo_keywords:d(l.seo_keywords_text),is_ai_generated:!!l.catalog_template_id,ai_generated_fields:l.catalog_template_id?["title","description","features","highlights","seo_keywords"]:[],specifications:m(l)},v=wt();if(b.property_id=v,{error:y}=await p.from("showroom_listings").insert(b),y&&st(y,()=>at({...b,property_id:b.property_id}),"Product publish")){o&&(o.disabled=!1,o.textContent=r);return}u(c?"Draft saved!":"Published! Your showroom shows this product now.")}try{localStorage.removeItem($e(t,a))}catch{}closeProductFormModal(),F()}catch(n){u("Error: "+n.message,"error"),o&&(o.disabled=!1,o.textContent=r)}};window.editProduct=async function(e){const{data:t,error:a}=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=a?null:t;if(i||(i=ht(e)),i||(i=(window._productsData||[]).find(o=>o.property_id===e)||null),!i)return u("Product not found","error");i.specifications&&typeof i.specifications=="object"&&(i={...i,...i.specifications}),showAddProductStep2(i.category||"Other",i)};window.toggleProductActive=async function(e,t){const a=be((window._productsData||[]).find(o=>o.property_id===e)),{error:i}=await p.from("showroom_listings").upsert({...a,property_id:e,is_active:t,availability_status:t?"In Stock":"Out of Stock"},{onConflict:"property_id"});if(i)return G(i)?u(`⚠️ ${t?"Publish":"Unpublish"} blocked: database admin role rejected the write. Re-run the admin permission migration.`,"error"):u(`${t?"Publish":"Unpublish"} failed: ${i.message}`,"error");u(t?"Product published":"Product unpublished"),F()};window.duplicateProduct=async function(e,t=!1){const{data:a}=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();if(!a)return;const{id:i,property_id:o,created_at:r,updated_at:n,...l}=a,c=wt();await p.from("showroom_listings").insert({...l,property_id:c,title:a.title+" (Copy)",is_active:!1}),t||(u("Product duplicated"),F())};window.archiveProduct=async function(e){confirm("Archive this product? It will be hidden from the website but can be restored.")&&(await p.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",e),u("Product archived"),F())};const mt=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","Commercial Building","Hotel","Land","Other"];async function We(){const e=document.getElementById("content");try{const{data:t,error:a}=await p.from("showroom_listings").select("*").eq("listing_type","property").order("created_at",{ascending:!1});let i=a?je().filter(r=>r.listing_type==="property"):t||[];if(Array.isArray(K)){const r=new Set(i.map(l=>l.property_id)),n=K.filter(l=>l.listing_type==="property"&&l.property_id&&!r.has(l.property_id));n.length&&(i=i.concat(n))}i.sort((r,n)=>new Date(n.created_at||0)-new Date(r.created_at||0));try{await vt()}catch{}const o=new Set(Oe());i=i.filter(r=>!(r&&r.property_id&&o.has(r.property_id))),window._propertiesData=i,e.innerHTML=`
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
                ${i.length===0?'<tr><td colspan="6" class="text-center text-gray-500 py-12">No properties yet.</td></tr>':i.map(r=>`<tr>
                    <td>
                      <div class="flex items-center gap-2.5">
                        <img src="${s((r.images||[])[0]||"/fallback.svg")}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
                        <div><p class="text-xs font-bold text-white truncate max-w-[160px]">${s(r.title)}</p><p class="text-[10px] font-mono text-gray-500">${s(r.property_id)}</p></div>
                      </div>
                    </td>
                    <td><span class="text-xs text-gray-300">${s(r.property_type||r.category)}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${s([r.city,r.state,r.country].filter(Boolean).join(", ")||"—")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(r.price||0).toLocaleString()}</span></td>
                    <td>${j(r.listing_status||"sale")} ${j(r.is_active?"active":"inactive")}</td>
                    <td>
                      <div class="flex gap-1">
                        <button onclick="editProperty('${r.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
                        <button onclick="archiveProduct('${r.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
                        <button onclick="deleteProduct('${r.property_id}')" class="btn-press p-1.5 text-rose-400 hover:bg-rose-500/10 rounded-lg transition"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                      </div>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}window.showAddPropertyModal=function(e={}){const t=!!e.property_id,a=Jt("property","Real Estate"),i=e.country_code||"US",o=e.currency||xt(i);U(`
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
              <div class="sm:col-span-2"><label class="lbl">Property Template</label><select class="input-field" name="catalog_template_id" id="ppf-catalog_template_id" onchange="applyPropertyCatalogTemplate()"><option value="">Choose a property template...</option>${a.map(n=>`<option value="${n.id}">${s(n.label)} - ${s(n.propertyType||n.subcategory)}</option>`).join("")}</select></div>
              <div><label class="lbl">Country</label><select class="input-field" name="country_code" id="ppf-country_code" onchange="syncPropertyCountry(); applyPropertyCatalogTemplate()">${ba(i)}</select></div>
              <div><label class="lbl">Currency</label><select class="input-field" name="currency" id="ppf-currency" onchange="applyPropertyCatalogTemplate()">${ga(o)}</select></div>
            </div>
            <p id="ppf-image-requirement" class="text-[11px] text-amber-300">This property flow expects 24 images for a complete gallery.</p>
            <input type="hidden" name="required_image_count" id="ppf-required_image_count" value="24">
          </div>

          <div class="form-grid form-grid-2">
            <div class="sm:col-span-2"><label class="lbl">Property Title *</label><input class="input-field" name="title" value="${s(e.title||"")}" required placeholder="e.g. Cozy 3-Bedroom Family Home"></div>
            <div><label class="lbl">Property Type *</label><select class="input-field" name="property_type" required>
              ${mt.map(n=>`<option value="${n}" ${e.property_type===n?"selected":""}>${n}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Listing Status</label><select class="input-field" name="listing_status">
              <option value="sale" ${e.listing_status!=="rent"?"selected":""}>For Sale</option>
              <option value="rent" ${e.listing_status==="rent"?"selected":""}>For Rent</option>
            </select></div>
            <div><label class="lbl">Price *</label><input type="number" class="input-field" id="ppf-price" name="price" value="${e.price||""}" required placeholder="0"></div>
            <div><label class="lbl">Real Price (crossed out)</label><input type="number" class="input-field" id="ppf-real_price" name="real_price" value="${e.real_price??e.specifications?.real_price??""}" placeholder="Original price before discount"></div>
            <div><label class="lbl">Country Name *</label><input class="input-field" id="ppf-country" name="country" value="${s(e.country||"")}" required placeholder="United States"></div>
            <div><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${s(e.subcategory||"")}" placeholder="e.g. Villas, Mansions, Hotels"></div>
            <div><label class="lbl">State / Province</label><input class="input-field" name="state" value="${s(e.state||"")}" placeholder="e.g. California"></div>
            <div><label class="lbl">City</label><input class="input-field" name="city" value="${s(e.city||"")}" placeholder="e.g. Los Angeles"></div>
            <div><label class="lbl">Town / Local Area</label><input class="input-field" name="town" value="${s(e.town||"")}" placeholder="Neighborhood or district"></div>
            <div><label class="lbl">Latitude</label><input type="number" step="any" class="input-field" name="latitude" value="${s(e.latitude||"")}" placeholder="40.7128"></div>
            <div><label class="lbl">Longitude</label><input type="number" step="any" class="input-field" name="longitude" value="${s(e.longitude||"")}" placeholder="-74.0060"></div>
            <div class="sm:col-span-2">
              <div class="rounded-xl border border-gray-200 overflow-hidden" style="height:250px;background:#e2e8f0"><div id="property-map-preview" style="width:100%;height:100%"></div></div>
              <div class="flex flex-wrap items-center justify-between gap-2 mt-2">
                <div class="text-[11px] text-gray-500" id="property-map-status">Map preview — fill the location fields or click the map to drop a pin.</div>
                <div class="flex items-center gap-2">
                  <button type="button" id="btn-geocode-property" class="btn-press text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg px-2.5 py-1 hover:bg-blue-100 transition">Locate from fields</button>
                  <a id="btn-open-google-map" href="#" target="_blank" rel="noopener" class="text-[11px] font-bold text-gray-600 bg-gray-100 border border-gray-200 rounded-lg px-2.5 py-1 hover:bg-gray-200 transition">Open in Google Maps</a>
                </div>
              </div>
            </div>
            <div><label class="lbl">Bedrooms</label><input type="number" class="input-field" name="bedrooms" value="${e.bedrooms??""}" placeholder="3"></div>
            <div><label class="lbl">Bathrooms</label><input type="number" class="input-field" name="bathrooms" value="${e.bathrooms??""}" placeholder="2"></div>
            <div><label class="lbl">Building Size</label><input class="input-field" name="building_size" value="${s(e.building_size||"")}" placeholder="e.g. 2,500 sqft"></div>
            <div><label class="lbl">Land Size</label><input class="input-field" name="land_size" value="${s(e.land_size||"")}" placeholder="e.g. 0.5 acres"></div>
            <div><label class="lbl">Parking Spaces</label><input type="number" class="input-field" name="parking_spaces" value="${e.parking_spaces??""}"></div>
            <div><label class="lbl">Furnished</label><select class="input-field" name="furnished">
              <option value="">Not specified</option>
              <option value="Furnished" ${e.furnished==="Furnished"?"selected":""}>Furnished</option>
              <option value="Unfurnished" ${e.furnished==="Unfurnished"?"selected":""}>Unfurnished</option>
            </select></div>
            <div><label class="lbl">Condition</label><select class="input-field" name="condition">
              <option value="">Not specified</option>
              ${["New Construction","Like New","Excellent","Good","Fair","Needs Renovation"].map(n=>`<option value="${n}" ${e.condition===n?"selected":""}>${n}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Year Built</label><input type="number" class="input-field" name="year_built" value="${e.year_built??""}" placeholder="2015"></div>
            <div><label class="lbl">Year Renovated</label><input type="number" class="input-field" name="year_renovated" value="${e.year_renovated??""}" placeholder="2021"></div>
            <div><label class="lbl">Half Bathrooms</label><input type="number" class="input-field" name="half_bathrooms" value="${e.half_bathrooms??""}" placeholder="1"></div>
            <div><label class="lbl">Floors / Levels</label><input type="number" class="input-field" name="floors" value="${e.floors??""}" placeholder="2"></div>
            <div><label class="lbl">Garage</label><input class="input-field" name="garage" value="${s(e.garage||"")}" placeholder="e.g. 2-car attached, None"></div>
            <div class="sm:col-span-2"><label class="lbl">Description</label><textarea class="input-field" name="description" rows="3" placeholder="Describe the property…">${s(e.description||"")}</textarea></div>
            <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${s((e.features||[]).join(", "))}" placeholder="Swimming Pool, Garden, Garage…"></div>
            <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${s((e.highlights||[]).join(", "))}" placeholder="Prime location, map-ready post, 24-image gallery"></div>
            <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${s((e.seo_keywords||[]).join(", "))}" placeholder="mansion, villa, property investment"></div>
            <div class="sm:col-span-2"><label class="lbl">Property Location</label><input class="input-field" name="product_location" value="${s(e.product_location||"")}" placeholder="Estate, district, city, landmark"></div>
            <div class="sm:col-span-2"><label class="lbl">Street / Address</label><input class="input-field" name="address" value="${s(e.address||"")}" placeholder="Street and number, e.g. 123 Maple Street"></div>
            <div><label class="lbl">ZIP / Postal Code</label><input class="input-field" name="zip_code" value="${s(e.zip_code||"")}" placeholder="e.g. 10001"></div>
            <div><label class="lbl">Landmarks (comma separated)</label><input class="input-field" name="landmarks_text" value="${s((e.landmarks||[]).join(", "))}" placeholder="City Hall, Central Park, Main Station"></div>
          </div>

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="home" class="w-4 h-4 text-emerald-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Interior &amp; Exterior Features</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Interior Features (comma separated)</label><input class="input-field" name="interior_features_text" value="${s((e.interior_features||[]).join(", "))}" placeholder="Open plan kitchen, Walk-in closet, Fireplace…"></div>
              <div class="sm:col-span-2"><label class="lbl">Exterior Features (comma separated)</label><input class="input-field" name="exterior_features_text" value="${s((e.exterior_features||[]).join(", "))}" placeholder="Swimming pool, Garden, Balcony, Patio…"></div>
              <div class="sm:col-span-2"><label class="lbl">Home Systems (comma separated)</label><input class="input-field" name="home_systems_text" value="${s((e.home_systems||[]).join(", "))}" placeholder="Central heating, Air conditioning, Solar panels…"></div>
            </div>
          </div>

          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="layout-dashboard" class="w-4 h-4 text-violet-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Floor Plan</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Floor Plan Image URL</label><input class="input-field" name="floor_plan_image" value="${s(e.floor_plan?.image||"")}" placeholder="https://…/floor-plan.png"></div>
              <div><label class="lbl">Levels</label><input class="input-field" name="floor_plan_levels" value="${s(e.floor_plan?.levels||"")}" placeholder="e.g. Ground + 1"></div>
              <div><label class="lbl">Total Area</label><input class="input-field" name="floor_plan_total_area" value="${s(e.floor_plan?.total_area||"")}" placeholder="e.g. 2,500 sqft"></div>
              <div class="sm:col-span-2"><label class="lbl">Rooms (comma separated — Name: dimensions)</label><input class="input-field" name="floor_plan_rooms" value="${s((e.floor_plan?.rooms||[]).map(n=>(n.name||"")+(n.dimensions?": "+n.dimensions:"")).join(", "))}" placeholder="Living Room: 15x12, Kitchen: 10x10…"></div>
            </div>
          </div>

          <div class="glass-soft border border-amber-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="school" class="w-4 h-4 text-amber-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Nearby Area</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Schools (comma separated)</label><input class="input-field" name="nearby_schools_text" value="${s((e.nearby_area?.schools||[]).join(", "))}" placeholder="Riverside Elementary…"></div>
              <div><label class="lbl">Hospitals / Clinics</label><input class="input-field" name="nearby_hospitals_text" value="${s((e.nearby_area?.hospitals||[]).join(", "))}" placeholder="City General Hospital…"></div>
              <div><label class="lbl">Shopping / Markets</label><input class="input-field" name="nearby_shopping_text" value="${s((e.nearby_area?.shopping||[]).join(", "))}" placeholder="Maple Mall, Farmers Market…"></div>
              <div><label class="lbl">Transportation</label><input class="input-field" name="nearby_transportation_text" value="${s((e.nearby_area?.transportation||[]).join(", "))}" placeholder="Metro Station, Bus Stop…"></div>
              <div class="sm:col-span-2"><label class="lbl">Distances (comma separated)</label><input class="input-field" name="nearby_distances_text" value="${s((e.nearby_area?.distances||[]).join(", "))}" placeholder="0.5 mi to school, 1 mi to hospital…"></div>
            </div>
          </div>

          <div class="glass-soft border border-blue-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="shield-check" class="w-4 h-4 text-blue-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Legal, Verification &amp; Trust</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Legal / Financial Info (comma separated — add source tag)</label><input class="input-field" name="legal_info_text" value="${s((e.legal_info||[]).map(n=>(n.label||"")+(n.value?": "+n.value:"")+(n.source?` (${n.source})`:"")).join(", "))}" placeholder="Ownership: Clear title (Seller provided), Property taxes: (Not verified)…"></div>
              <div><label class="lbl">Verification Status</label><select class="input-field" name="verification_status">
                <option value="Not verified" ${(e.verification_status||"Not verified")==="Not verified"?"selected":""}>Not verified</option>
                <option value="Pending verification" ${e.verification_status==="Pending verification"?"selected":""}>Pending verification</option>
                <option value="Verified" ${e.verification_status==="Verified"?"selected":""}>Verified</option>
              </select></div>
              <div><label class="lbl">Verification Date</label><input type="date" class="input-field" name="verification_date" value="${s(e.verification_date||"")}"></div>
              <div class="sm:col-span-2"><label class="lbl">Inspection Info</label><input class="input-field" name="inspection_info" value="${s(e.inspection_info||"")}" placeholder="Inspected on date by company — result"></div>
              <div class="sm:col-span-2"><label class="lbl">Documents (comma separated URLs)</label><input class="input-field" name="documents_text" value="${s((e.documents||[]).join(", "))}" placeholder="https://…/title.pdf, https://…/inspection.pdf"></div>
              <div class="sm:col-span-2"><label class="lbl">Condition / Risk Notes</label><textarea class="input-field" name="risk_notes" rows="2" placeholder="Any known issues, renovation needs, or risk notes…">${s(e.risk_notes||"")}</textarea></div>
            </div>
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
              ${(e.images||[]).map((n,l)=>he(n,l)).join("")}
            </div>
            <div id="image-url-inputs">
              ${(e.images||[]).map((n,l)=>`<input type="hidden" name="images" id="img-url-${l}" value="${s(n)}">`).join("")}
            </div>
          </div>

          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="min-w-0">
                <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> AI Property Scanner</p>
                <p class="text-[11px] text-gray-500 mt-1">Reads your uploaded images and fills the property form for you. Only runs when you press the button — you review everything before publishing.</p>
              </div>
              <button type="button" id="btn-scan-ai-prop" onclick="scanPropertyWithAI()" class="btn-press px-4 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shrink-0">
                <i data-lucide="sparkles" class="w-4 h-4"></i> SCAN WITH AI
              </button>
            </div>
            <div id="scan-ai-prop-status" class="hidden text-xs mt-3 font-medium"></div>
          </div>

          <div class="flex gap-3 pt-2">
            <button type="submit" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition">${t?"💾 Save Changes":"🚀 Publish Property"}</button>
          </div>
        </form>
      </div>
    </div>`),It(),At(),dt("ppf-price"),window._propFormDirty=!!t;const r=document.getElementById("property-form");if(r){const n=()=>{window._propFormDirty=!0};r.addEventListener("input",n),r.addEventListener("change",n)}window.syncPropertyCountry=function(){Dt("ppf")},Dt("ppf"),ut("pricing"),document.getElementById("ppf-price")?.addEventListener("input",()=>ut("pricing")),Yi()};let W=null,Me=null,qt=null;function Vi(){const e=document.querySelector("#property-form");if(!e)return"";const t=a=>(e.querySelector(`[name="${a}"]`)?.value||"").trim();return[t("product_location"),t("town"),t("city"),t("state"),t("country")].filter(Boolean).join(", ")}function te(e,t){const a=document.getElementById("property-map-status");a&&(a.textContent=e,a.style.color=t?"#dc2626":"")}function Se(e,t,{reverse:a=!1}={}){if(!W||!Number.isFinite(e)||!Number.isFinite(t))return;const i=[e,t];Me?Me.setLatLng(i):Me=L.marker(i,{draggable:!0}).addTo(W),W.setView(i,Math.max(W.getZoom(),13));const o=document.querySelector('#property-form [name="latitude"]'),r=document.querySelector('#property-form [name="longitude"]');o&&(o.value=String(Number(e.toFixed(6)))),r&&(r.value=String(Number(t.toFixed(6)))),a&&Ki(e,t);const n=document.getElementById("btn-open-google-map");n&&(n.href=`https://www.google.com/maps?q=${e.toFixed(6)},${t.toFixed(6)}`)}async function ke(){const e=Vi();if(!e){te("Enter a location (address, area, city, state, country), then press Locate from fields.");return}te("Searching location…");try{const a=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(e))).json();a&&a[0]?(Se(parseFloat(a[0].lat),parseFloat(a[0].lon)),te("Located: "+a[0].display_name)):te("Could not find that location. Check the spelling or click the map to drop the pin.",!0)}catch{te("Map lookup failed. You can still drop the pin by clicking the map.",!0)}}async function Ki(e,t){const a=document.querySelector("#property-form");if(a)try{const o=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${t}&zoom=16`)).json(),r=o&&o.address||{},n=(f,b)=>{if(!b)return;const v=a.querySelector(`[name="${f}"]`);return v&&!String(v.value||"").trim()?(v.value=b,!0):!1},l=[r.road||"",r.house_number||""].filter(Boolean).join(" "),c=r.suburb||r.neighbourhood||r.quarter||r.district||r.borough||"",d=r.town||r.village||r.municipality||r.city_district||"",m=r.city||r.county||"",y=r.state||r.region||"",g=r.country||"";if(n("product_location",l||c||d),n("town",c||d),n("city",m),n("state",y),g){n("country",g);const f=a.querySelector('[name="country_code"]');if(f){const b=(ye||[]).find(v=>String(v.name||"").toLowerCase()===String(g).toLowerCase());b&&b.code&&!f.value&&(f.value=b.code)}}te("Pin set at "+e.toFixed(5)+", "+t.toFixed(5)+(o.display_name?" — "+o.display_name:""))}catch{te("Pin set. Could not reverse-geocode the address.",!0)}}window.refreshPropertyMapFromForm=function(){if(!W)return;const e=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),t=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);Number.isFinite(e)&&Number.isFinite(t)&&(e||t)?(Se(e,t),te("Map updated from coordinates.")):ke()};function Yi(){const e=document.getElementById("property-map-preview");if(!e||!window.L){te("Map unavailable right now — your location fields still save normally.");return}W&&(W.remove(),W=null,Me=null);const t=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),a=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value),i=Number.isFinite(t)&&Number.isFinite(a)&&(t||a);W=L.map(e,{scrollWheelZoom:!1}).setView(i?[t,a]:[20,0],i?13:2),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(W),W.on("click",o=>Se(o.latlng.lat,o.latlng.lng,{reverse:!0})),document.getElementById("btn-geocode-property")?.addEventListener("click",ke),["product_location","town","city","state","country","latitude","longitude"].forEach(o=>{const r=document.querySelector(`#property-form [name="${o}"]`);r&&(r.addEventListener("input",()=>{if(o==="latitude"||o==="longitude"){const n=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),l=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);Number.isFinite(n)&&Number.isFinite(l)&&(n||l)&&Se(n,l);return}clearTimeout(qt),qt=setTimeout(ke,900)}),r.addEventListener("change",()=>{o!=="latitude"&&o!=="longitude"&&ke()}))}),i?Se(t,a):ke()}window.fixPropertyMaps=async function(){const t=(window._propertiesData||[]).filter(o=>{const r=parseFloat(o.latitude),n=parseFloat(o.longitude),l=[o.product_location,o.town,o.city,o.state,o.country].filter(Boolean).join(", ");return!(Number.isFinite(r)&&Number.isFinite(n)&&(r!==0||n!==0))&&!!l});if(!t.length){u("All properties already have map coordinates.","success");return}u(`Fixing maps for ${t.length} propert${t.length>1?"ies":"y"}…`,"success");let a=0,i=0;for(const o of t){const r=[o.product_location,o.town,o.city,o.state,o.country].filter(Boolean).join(", ");try{const l=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(r))).json();if(l&&l[0]){const c={latitude:parseFloat(l[0].lat),longitude:parseFloat(l[0].lon)},{error:d}=await p.from("showroom_listings").update(c).eq("property_id",o.property_id);d?i++:(Object.assign(o,c),a++)}else i++}catch{i++}await new Promise(n=>setTimeout(n,1100))}u(`Map fix done: ${a} updated, ${i} failed.`,i?"error":"success"),We()};window.saveProperty=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=Object.fromEntries(a.entries()),o=a.getAll("images").filter(f=>f&&!f.startsWith("blob:")),r=(i.features_text||"").split(",").map(f=>f.trim()).filter(Boolean),n=t?0:parseInt(i.required_image_count||"24",10)||24;ya(n,o,"This property");const l=i.real_price===""||i.real_price==null?null:Math.max(D,Math.min(H,parseFloat(i.real_price)||0)),c=f=>(f||"").split(",").map(b=>b.trim()).filter(Boolean),d=f=>f===""||f==null||!isFinite(parseInt(f,10))?null:parseInt(f,10),m=c(i.floor_plan_rooms).map(f=>{const b=String(f).match(/^(.*?):\s*(.*)$/);return b?{name:b[1].trim(),dimensions:b[2].trim()}:{name:f,dimensions:""}}),y={listing_type:"property",category:i.property_type||"Real Estate",subcategory:i.subcategory||null,title:i.title,description:i.description||"",price:Math.max(D,Math.min(H,parseFloat(i.price)||0)),currency:i.currency||"USD",real_price:l,country:i.country||"",country_code:(i.country_code||"").toUpperCase(),state:i.state||"",city:i.city||"",town:i.town||"",address:i.address||"",zip_code:i.zip_code||"",product_location:i.product_location||"",latitude:i.latitude?parseFloat(i.latitude):null,longitude:i.longitude?parseFloat(i.longitude):null,property_type:i.property_type||"",listing_status:i.listing_status||"sale",condition:i.condition||null,bedrooms:i.bedrooms?parseInt(i.bedrooms):null,bathrooms:i.bathrooms?parseInt(i.bathrooms):null,half_bathrooms:d(i.half_bathrooms),building_size:i.building_size||"",land_size:i.land_size||"",floors:d(i.floors),garage:i.garage||"",parking_spaces:i.parking_spaces?parseInt(i.parking_spaces):null,furnished:i.furnished||"",year_built:d(i.year_built),year_renovated:d(i.year_renovated),landmarks:c(i.landmarks_text),interior_features:c(i.interior_features_text),exterior_features:c(i.exterior_features_text),home_systems:c(i.home_systems_text),legal_info:c(i.legal_info_text).map(f=>{const b=String(f).match(/^(.*?):\s*(.*?)\s*\((Seller provided|Not verified|Documented)\)\s*$/i);return b?{label:b[1].trim(),value:b[2].trim(),source:b[3]}:{label:f,value:"",source:"Not verified"}}),risk_notes:i.risk_notes||"",floor_plan:{image:i.floor_plan_image||"",rooms:m,levels:i.floor_plan_levels||"",total_area:i.floor_plan_total_area||""},nearby_area:{schools:c(i.nearby_schools_text),hospitals:c(i.nearby_hospitals_text),shopping:c(i.nearby_shopping_text),transportation:c(i.nearby_transportation_text),distances:c(i.nearby_distances_text)},verification_status:i.verification_status||"Not verified",verification_date:i.verification_date||"",inspection_info:i.inspection_info||"",documents:c(i.documents_text),features:r,images:o,highlights:lt(i.highlights_text),seo_keywords:lt(i.seo_keywords_text),is_ai_generated:!!i.catalog_template_id,ai_generated_fields:i.catalog_template_id?["title","description","features","highlights","seo_keywords","country","country_code","product_location"]:[],is_active:i.is_active==="on"};let g;if(t){y.property_id=t;const f=be((window._propertiesData||[]).find(b=>b.property_id===t)||(window._productsData||[]).find(b=>b.property_id===t));y.specifications={...f.specifications&&typeof f.specifications=="object"?f.specifications:{},real_price:l},{error:g}=await p.from("showroom_listings").upsert({...f,...y},{onConflict:"property_id"})}else y.property_id=wt(),y.specifications={real_price:l},{error:g}=await p.from("showroom_listings").insert(y);g&&st(g,()=>at({...y,property_id:t||y.property_id}),t?"Property update":"Property publish")||(u(t?"Property updated!":"Property published!"),ae(),We())};window.editProperty=async function(e){const{data:t,error:a}=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=a?null:t;i||(i=ht(e)),i||(i=(Array.isArray(K)?K.find(o=>o.property_id===e):null)||null),i&&showAddPropertyModal(i)};const Ji=["pending_verification","payment_received","payment_approved","processing","shipped","in_transit","out_for_delivery","delivered","cancelled","rejected"];async function ka(){const e=document.getElementById("content");try{const{data:t}=await p.from("payment_receipts").select("*").order("created_at",{ascending:!1}).limit(300),a=t||[],i=["All","Pending","Paid","Processing","Shipped","Delivered","Cancelled"];let o="All";e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Orders Manager</h2>
        <div class="flex gap-2 flex-wrap" id="order-tabs">
          ${i.map(r=>`<button class="tab-btn ${r==="All"?"active":""}" onclick="filterOrders('${r}')">${r}</button>`).join("")}
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
                ${a.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-12">No orders yet</td></tr>':a.map(r=>Qi(r)).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._ordersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}function Qi(e){return`<tr class="order-row" data-status="${e.status}" data-search="${s(e.order_number)} ${s(e.full_name)} ${s(e.email)}">
    <td><span class="font-mono text-xs text-blue-400 font-bold">${s(e.order_number||e.id?.slice(0,8))}</span></td>
    <td>
      <p class="text-xs font-bold text-white">${s(e.full_name||"Guest")}</p>
      <p class="text-[10px] text-gray-500">${s(e.email)}</p>
    </td>
    <td><p class="text-xs text-gray-300 truncate max-w-[140px]">${s(e.listing_title||e.listing_id||"—")}</p></td>
    <td class="hidden sm:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(e.amount||0).toLocaleString()}</span></td>
    <td>${j(e.status)}</td>
    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${J(e.created_at)}</span></td>
    <td>
      <button onclick="viewOrder('${e.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="View / Update">
        <i data-lucide="eye" class="w-3.5 h-3.5"></i>
      </button>
    </td>
  </tr>`}window.filterOrders=function(e){document.querySelectorAll("#order-tabs .tab-btn").forEach(t=>t.classList.toggle("active",t.textContent===e)),document.querySelectorAll(".order-row").forEach(t=>{const a=t.dataset.status||"",i=e==="All"||e==="Pending"&&["pending_verification","payment_received","order_placed"].includes(a)||e==="Paid"&&["payment_approved"].includes(a)||e==="Processing"&&["processing"].includes(a)||e==="Shipped"&&["shipped","in_transit","out_for_delivery"].includes(a)||e==="Delivered"&&a==="delivered"||e==="Cancelled"&&["cancelled","rejected"].includes(a);t.style.display=i?"":"none"})};window.searchOrders=function(e){const t=e.toLowerCase();document.querySelectorAll(".order-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewOrder=async function(e){const t=(window._ordersData||[]).find(a=>a.id===e);t&&U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Order ${s(t.order_number)}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
        </div>
        <div class="space-y-3 text-sm">
          <div class="grid grid-cols-2 gap-3">
            ${[["Customer",t.full_name],["Email",t.email],["Phone",t.phone],["Amount",aa(t.amount,t.currency)],["Product",t.listing_title||t.listing_id],["Date",se(t.created_at)]].map(([a,i])=>`<div><p class="text-[10px] text-gray-500 uppercase font-bold mb-0.5">${a}</p><p class="text-xs text-white font-medium">${s(i)||"—"}</p></div>`).join("")}
          </div>
          ${t.transaction_reference?`<div class="p-3 glass-soft border border-blue-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Transaction Reference</p><p class="text-xs font-mono text-blue-300">${s(t.transaction_reference)}</p></div>`:""}
          ${t.additional_notes?`<div class="p-3 glass-soft border border-amber-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Notes</p><p class="text-xs text-gray-300">${s(t.additional_notes)}</p></div>`:""}
          <div>
            <label class="lbl">Update Order Status</label>
            <div class="flex gap-2">
              <select id="order-status-select" class="input-field flex-1">
                ${Ji.map(a=>`<option value="${a}" ${t.status===a?"selected":""}>${a.replace(/_/g," ")}</option>`).join("")}
              </select>
              <button onclick="updateOrderStatus('${t.id}')" class="btn-press px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.updateOrderStatus=async function(e){const t=document.getElementById("order-status-select")?.value;if(!t)return;const{error:a}=await p.from("payment_receipts").update({status:t}).eq("id",e);if(a){u(a.message,"error");return}u("Order status updated"),ae(),ka()};async function Xi(){const e=document.getElementById("content");try{const{data:t}=await p.from("profiles").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
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
                ${a.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-12">No customers yet</td></tr>':a.map(i=>`<tr class="cust-row" data-search="${s(i.display_name)} ${s(i.user_id)}">
                    <td>
                      <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                          <i data-lucide="user" class="w-4 h-4 text-blue-400"></i>
                        </div>
                        <div>
                          <p class="text-xs font-bold text-white">${s(i.display_name||"Anonymous")}</p>
                          <p class="text-[10px] font-mono text-gray-500">${s(i.user_id?.slice(0,12))}…</p>
                        </div>
                      </div>
                    </td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-300">${s(i.country_code||"—")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${J(i.created_at)}</span></td>
                    <td>
                      <button onclick="viewCustomer('${i.user_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="eye" class="w-3.5 h-3.5"></i></button>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._customersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}window.searchCustomers=function(e){const t=e.toLowerCase();document.querySelectorAll(".cust-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewCustomer=async function(e){const t=(window._customersData||[]).find(i=>i.user_id===e);if(!t)return;const{data:a}=await p.from("payment_receipts").select("order_number,amount,currency,status,created_at").eq("user_id",e).order("created_at",{ascending:!1}).limit(20);U(`
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
            <p class="font-black text-white">${s(t.display_name||"Anonymous")}</p>
            <p class="text-xs text-gray-400 mt-0.5">Joined ${J(t.created_at)} · ${s(t.country_code||"Unknown country")}</p>
          </div>
        </div>
        <h4 class="text-xs font-bold text-gray-400 uppercase mb-3">Purchase History</h4>
        ${(a||[]).length===0?'<p class="text-xs text-gray-500 py-4 text-center">No orders yet</p>':(a||[]).map(i=>`<div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
            <div><p class="text-xs font-bold text-white font-mono">${s(i.order_number)}</p><p class="text-[10px] text-gray-500">${se(i.created_at)}</p></div>
            <div class="flex items-center gap-2">${j(i.status)}<span class="text-xs font-bold text-emerald-400">$${parseFloat(i.amount).toLocaleString()}</span></div>
          </div>`).join("")}
      </div>
    </div>`)};async function Ce(){const e=document.getElementById("content");try{const{data:t}=await p.from("product_reviews").select("*, showroom_listings(title, property_id)").order("created_at",{ascending:!1}).limit(200),a=t||[],i=a.filter(l=>!l.is_approved).length,{data:o}=await p.from("site_feedback").select("*").order("created_at",{ascending:!1}).limit(200),r=o||[],n=r.filter(l=>!l.is_approved).length;e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Reviews & Feedback Manager</h2>
          ${i+n>0?`<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">${i+n} pending</span>`:""}
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
            ${a.length===0?de("star","No Reviews","Customer reviews will appear here."):a.map(l=>eo(l)).join("")}
          </div>
        </div>

        <div class="glass-soft border border-emerald-500/15 rounded-2xl p-5 space-y-4">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="message-square-text" class="w-4 h-4 text-emerald-400"></i> Customer Feedback (site-wide)</h3>
            ${n>0?`<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">${n} pending</span>`:""}
          </div>
          <p class="text-[11px] text-gray-500">Feedback submitted from the "Feedback" form on every page. Approve to show it in the public "View more Feedback" list.</p>
          <div class="space-y-3" id="feedback-list">
            ${r.length===0?de("message-square","No Feedback Yet","Site feedback will appear here."):r.map(l=>Zi(l)).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}function Zi(e){const t=Array.from({length:5},(a,i)=>i<(e.rating||5)?"★":"☆").join("");return`<div class="glass-soft border ${e.is_approved?"border-emerald-500/15":"border-amber-500/20"} rounded-xl p-4" data-fb-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          <span class="text-amber-400 font-bold text-sm">${t}</span>
          <span class="text-xs font-black text-white">${s(e.name||"Anonymous shopper")}</span>
          <span class="text-xs text-gray-500">${s(e.email||"no email")} · ${J(e.created_at)}</span>
          ${e.is_approved?'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>':'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending</span>'}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${s(e.feedback||"—")}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${e.is_approved?"":`<button onclick="approveFeedback('${e.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>`}
        <button onclick="deleteFeedback('${e.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`}window.approveFeedback=async function(e){const{error:t}=await p.from("site_feedback").update({is_approved:!0}).eq("id",e);t?u(t.message,"error"):u("Feedback approved — it now shows on every page."),Ce()};window.deleteFeedback=async function(e){if(!confirm("Delete this feedback permanently?"))return;const{error:t}=await p.from("site_feedback").delete().eq("id",e);t?u(t.message,"error"):u("Feedback deleted."),Ce()};function eo(e){const t=Array.from({length:5},(a,i)=>i<e.rating?"★":"☆").join("");return`<div class="review-card glass-soft border ${e.is_approved?"border-blue-500/15":"border-amber-500/20"} rounded-xl p-4" data-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-amber-400 font-bold text-sm">${t}</span>
          <span class="text-xs text-gray-500">${J(e.created_at)}</span>
          ${e.is_approved?'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>':'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending Approval</span>'}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${s(e.comment||e.review_text||"—")}</p>
        <p class="text-[11px] text-blue-400 mt-1.5">On: ${s(e.showroom_listings?.title||e.listing_id)}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${e.is_approved?"":`<button onclick="approveReview('${e.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>`}
        <button onclick="deleteReview('${e.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`}window.filterReviewTab=function(e){["all","pending","approved"].forEach(t=>document.getElementById(`rtab-${t}`)?.classList.toggle("active",t===e)),document.querySelectorAll(".review-card").forEach(t=>{const a=e==="all"||e==="pending"&&t.dataset.approved==="false"||e==="approved"&&t.dataset.approved==="true";t.style.display=a?"":"none"})};window.approveReview=async function(e){await p.from("product_reviews").update({is_approved:!0}).eq("id",e),u("Review approved"),Ce()};window.deleteReview=async function(e){confirm("Delete this review permanently?")&&(await p.from("product_reviews").delete().eq("id",e),u("Review deleted"),Ce())};async function Sa(){const e=document.getElementById("content");try{const{data:t}=await p.from("support_messages").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Messages & Support</h2>
        <div class="space-y-3">
          ${a.length===0?de("message-circle","No Messages","Customer support messages will appear here."):a.map(i=>`
              <div class="glass-soft border ${i.is_read?"border-blue-500/10":"border-blue-400/30"} rounded-xl p-4 ${i.is_read?"":"ring-1 ring-blue-500/10"}">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs font-black text-white">${s(i.full_name||i.name||"Anonymous")}</span>
                      ${i.is_read?"":'<span class="badge bg-blue-500/15 text-blue-400 border-blue-500/20">New</span>'}
                      <span class="text-[10px] text-gray-500 ml-auto">${se(i.created_at)}</span>
                    </div>
                    <p class="text-[11px] text-blue-400 mb-1">${s(i.email||"—")}</p>
                    <p class="text-xs text-gray-300">${s(i.message||i.body||"—")}</p>
                    ${i.subject?`<p class="text-[11px] text-gray-500 mt-1">Subject: ${s(i.subject)}</p>`:""}
                  </div>
                  <div class="flex gap-1 shrink-0">
                    <button onclick="markMsgRead('${i.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Mark Read"><i data-lucide="check" class="w-4 h-4"></i></button>
                  </div>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}window.markMsgRead=async function(e){await p.from("support_messages").update({is_read:!0}).eq("id",e),u("Marked as read"),Sa()};async function Ve(){const e=document.getElementById("content");try{const{data:t}=await p.from("coupons").select("*").order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
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
                    <td><code class="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">${s(i.code)}</code></td>
                    <td><span class="text-xs text-gray-300">${i.discount_type==="percent"?"Percentage":"Fixed Amount"}</span></td>
                    <td><span class="text-xs font-bold text-emerald-400">${i.discount_type==="percent"?i.discount_value+"%":"$"+i.discount_value}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${i.min_amount?"$"+i.min_amount:"—"}</span></td>
                    <td>${j(i.is_active?"active":"inactive")}</td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${J(i.expires_at)}</span></td>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}window.showAddCouponModal=function(){U(`
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
    </div>`)};window.saveCoupon=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={code:a.code.toUpperCase(),discount_type:a.discount_type,discount_value:parseFloat(a.discount_value),min_amount:a.min_amount?parseFloat(a.min_amount):null,usage_limit:a.usage_limit?parseInt(a.usage_limit):null,expires_at:a.expires_at||null,is_active:!0},{error:o}=await p.from("coupons").insert(i);if(o){u(o.message,"error");return}u("Coupon created!"),ae(),Ve()};window.toggleCoupon=async function(e,t){await p.from("coupons").update({is_active:t}).eq("id",e),u(t?"Coupon activated":"Coupon deactivated"),Ve()};window.deleteCoupon=async function(e){confirm("Delete this coupon?")&&(await p.from("coupons").delete().eq("id",e),u("Coupon deleted"),Ve())};async function to(){const e=document.getElementById("content");try{const{data:t}=await p.from("notification_log").select("*").order("created_at",{ascending:!1}).limit(100),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Notifications</h2>
        <div class="space-y-2">
          ${a.length===0?de("bell","No Notifications","System notifications will appear here."):a.map(i=>`
              <div class="glass-soft border border-blue-500/10 rounded-xl p-3.5 flex items-start gap-3">
                <div class="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <i data-lucide="bell" class="w-4 h-4 text-blue-400"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-0.5">
                    <span class="text-xs font-bold text-white">${s(i.subject||i.event_type||"Notification")}</span>
                    ${j(i.status)}
                    <span class="text-[10px] text-gray-500 ml-auto">${se(i.created_at)}</span>
                  </div>
                  <p class="text-[11px] text-gray-400">${s(i.recipient||i.order_number)}</p>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}const $a=["Featured","Sponsored","Featured Collection","Discover","Promotion"],ao=[{id:"real-estate",name:"Real Estate & Properties"},{id:"marketplace",name:"Marketplace Showroom"}];let Be=null;function io(e){const t={Featured:"bg-blue-500/10 text-blue-300 border-blue-500/30",Sponsored:"bg-violet-500/10 text-violet-300 border-violet-500/30","Featured Collection":"bg-amber-500/10 text-amber-300 border-amber-500/30",Discover:"bg-emerald-500/10 text-emerald-300 border-emerald-500/30",Promotion:"bg-blue-500/10 text-blue-300 border-blue-500/30"};return`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${t[e]||t.Featured}">${s(e)}</span>`}function oo(e){return!e||!e.link_type||e.link_type==="none"?'<span class="text-[10px] text-gray-500">No link</span>':e.link_type==="product"?`<span class="text-[10px] text-blue-300"><i data-lucide="package" class="w-3 h-3 inline mr-1"></i>Product · ${s(e.link_target||"")}</span>`:e.link_type==="category"?`<span class="text-[10px] text-emerald-300"><i data-lucide="tag" class="w-3 h-3 inline mr-1"></i>Category · ${s(e.link_target||"")}</span>`:`<span class="text-[10px] text-amber-300"><i data-lucide="layout-grid" class="w-3 h-3 inline mr-1"></i>Section · ${s(e.link_target||"")}</span>`}function ro(e){return e.video_url?`<video src="${s(e.video_url)}" ${e.poster_url?`poster="${s(e.poster_url)}"`:""} class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" muted preload="metadata"></video>`:e.image_url?`<img src="${s(e.image_url)}" class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" onerror="this.remove()">`:'<div class="w-24 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="megaphone" class="w-6 h-6 text-blue-400"></i></div>'}async function Pa(){if(Be)return Be;const e=[],t=new Set,a=[],i=r=>{if(!r||!r.property_id)return;e.push({id:r.property_id,title:r.title||r.property_id});const n=r.category||"";n&&!t.has(n)&&(t.add(n),a.push(n))};try{K.forEach(i)}catch{}try{const{data:r,error:n}=await p.from("showroom_listings").select("property_id,title,category").order("created_at",{ascending:!1});!n&&r&&r.forEach(i)}catch{}return["Women","Men","Kids","Home","Sports","Jewellery","Electronics","Cars","Motorcycles","Phones","Computers","Furniture","Beauty","Fashion","Real Estate","Bicycles","Trucks","Land","Kitchen","Food","Pets","Books","Toys","Services"].forEach(r=>{t.has(r)||(t.add(r),a.push(r))}),Be={products:e,categories:a,sections:ao},Be}async function no(e){try{const{data:{session:t}}=await p.auth.getSession();if(!t)return u("Sign in to upload media","error"),null;const a=(e.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),i=/^(mp4|webm|mov|m4v)$/.test(a)||e.type.startsWith("video/"),o=`ads/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${a}`,{error:r}=await p.storage.from("advertisements").upload(o,e,{contentType:e.type,upsert:!1});if(r)return u("Upload failed: "+r.message,"error"),null;const{data:n}=p.storage.from("advertisements").getPublicUrl(o);return{url:n.publicUrl,isVideo:i}}catch{return u("Upload failed","error"),null}}function De(e,t){const a=document.getElementById("ad-media-preview");if(!a)return;const i=document.getElementById("ad-hidden-video"),o=document.getElementById("ad-hidden-image");i&&(i.value=t?e:""),o&&(o.value=t?"":e),a.innerHTML=t?`<video src="${s(e)}" class="w-full h-40 object-cover rounded-xl" controls muted playsinline></video>`:`<img src="${s(e)}" class="w-full h-40 object-cover rounded-xl">`,window.lucide&&lucide.createIcons()}window.onAdMediaPicked=async function(e){const t=e.files&&e.files[0];if(!t)return;if(!(t.type.startsWith("image/")||t.type.startsWith("video/"))){u("Choose an image or video file","error");return}const i=await no(t);if(!i){e.value="";return}De(i.url,i.isVideo);const o=document.getElementById("ad-media-url");o&&(o.value=i.url)};window.onAdMediaUrl=function(e){const t=(e.value||"").trim();if(!t)return;const a=/\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(t);De(t,a)};function Lt(e,t,a){const i=document.getElementById("ad-link-target-wrap");if(!i)return;if(!t||t==="none"){i.innerHTML='<p class="text-[10px] text-gray-500">This ad is informational and will not be clickable.</p>';return}let o="";t==="product"?o='<option value="">Select a product…</option>'+e.products.map(r=>`<option value="${s(r.id)}" ${String(a)===String(r.id)?"selected":""}>${s(r.id)} — ${s((r.title||"").slice(0,60))}</option>`).join(""):t==="category"?o='<option value="">Select a category…</option>'+e.categories.map(r=>`<option value="${s(r)}" ${a===r?"selected":""}>${s(r)}</option>`).join(""):t==="section"&&(o='<option value="">Select a section…</option>'+e.sections.map(r=>`<option value="${s(r.id)}" ${a===r.id?"selected":""}>${s(r.name)}</option>`).join("")),i.innerHTML=`<label class="lbl">Target</label><select class="input-field" name="link_target">${o}</select>`}function Ea(e){return`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${e?"Edit Advertisement":"Add Advertisement"}</h3>
          <button onclick="closeModal()" class="btn-press text-xs font-bold text-gray-400 hover:text-white transition">✕ Close</button>
        </div>
        <form id="ad-form" onsubmit="saveAd(event)" class="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          <input type="hidden" name="id" value="${e?e.id:""}">
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Title *</label><input class="input-field" name="title" required value="${s(e&&e.title?e.title:"")}" placeholder="e.g. Summer Sale 2026"></div>
            <div><label class="lbl">Ad Label</label>
              <select class="input-field" name="ad_label">
                ${$a.map(t=>`<option value="${t}" ${e&&e.ad_label===t?"selected":""}>${t}</option>`).join("")}
              </select>
            </div>
          </div>
          <div><label class="lbl">Message</label><textarea class="input-field" name="description" rows="2" placeholder="Short message shown on the ad…">${s(e&&e.description?e.description:"")}</textarea></div>

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
    </div>`}window.onAdLinkTypeChange=function(){const e=window._adLinkCache||{products:[],categories:[],sections:[]},t=document.querySelector('#ad-form select[name="link_type"]'),a=t?t.value:"none";Lt(e,a,"")};window.showAddAdModal=async function(){const e=await Pa();window._adLinkCache=e,U(Ea(null)),Lt(e,"none","")};window.showEditAdModal=async function(e){const t=await Pa();window._adLinkCache=t;const{data:a}=await p.from("promotions").select("*").eq("id",e).maybeSingle();if(!a){u("Ad not found","error");return}U(Ea(a)),a.image_url?De(a.image_url,!1):a.video_url&&De(a.video_url,!0),Lt(t,a.link_type||"none",a.link_target||"")};window.saveAd=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=a.id||"",o={title:a.title,description:a.description||"",ad_label:$a.includes(a.ad_label)?a.ad_label:"Featured",image_url:a.image_url||null,video_url:a.video_url||null,link_type:["none","product","category","section"].includes(a.link_type)?a.link_type:"none",link_target:a.link_target||null,start_date:a.start_date?new Date(a.start_date+"T00:00:00").toISOString():null,end_date:a.end_date?new Date(a.end_date+"T23:59:59").toISOString():null,is_active:a.is_active==="on",promo_type:"banner"};if(!o.image_url&&!o.video_url){u("Add an image or video for the ad","error");return}const r=e.target.querySelector('button[type="submit"]');r&&(r.disabled=!0);try{if(i){const{error:n}=await p.from("promotions").update(o).eq("id",i);if(n)throw n;u("Ad updated!")}else{const{error:n}=await p.from("promotions").insert(o);if(n)throw n;u("Ad created!")}}catch(n){u(n.message||"Save failed","error"),r&&(r.disabled=!1);return}ae(),xe()};window.togglePromo=async function(e,t){const{error:a}=await p.from("promotions").update({is_active:t}).eq("id",e);if(a){u(a.message,"error");return}u(t?"Ad activated":"Ad deactivated"),xe()};window.moveAd=async function(e,t){try{const{data:a,error:i}=await p.from("promotions").select("id,sort_order").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1});if(i)throw i;const o=a||[],r=o.findIndex(d=>d.id===e),n=r+t;if(r<0||n<0||n>=o.length){u("Already at the edge","info");return}const l=o[r],c=o[n];await p.from("promotions").update({sort_order:c.sort_order}).eq("id",l.id),await p.from("promotions").update({sort_order:l.sort_order}).eq("id",c.id),u("Order updated")}catch(a){u(a.message||"Reorder failed","error")}xe()};window.deletePromo=async function(e){if(confirm("Delete this ad? This cannot be undone.")){try{const{data:t}=await p.from("promotions").select("image_url,video_url,poster_url").eq("id",e).maybeSingle();if(t){const i=[t.image_url,t.video_url,t.poster_url].filter(Boolean).map(o=>{const r=/\/object\/public\/advertisements\/(.+)$/.exec(o);return r?decodeURIComponent(r[1]):null}).filter(Boolean);if(i.length)try{await p.storage.from("advertisements").remove(i)}catch{}}const{error:a}=await p.from("promotions").delete().eq("id",e);if(a)throw a;u("Ad deleted")}catch(t){u(t.message||"Delete failed","error")}xe()}};async function xe(){const e=document.getElementById("content");try{const{data:t}=await p.from("promotions").select("*").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
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
          ${a.length===0?de("megaphone","No Ads","Create your first showcase ad — add a title, image or video, label, and optional product link.",'<button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"><i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement</button>'):a.map((i,o)=>`
              <div class="glass-soft border border-blue-500/15 rounded-xl p-4 flex items-center gap-4">
                ${ro(i)}
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap">
                    <p class="text-sm font-black text-white truncate">${s(i.title||i.name)}</p>
                    ${io(i.ad_label||"Featured")}
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${s(i.description||"")}</p>
                  <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${i.is_active?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":"bg-gray-500/10 text-gray-400 border-gray-500/20"}">${i.is_active?"Active":"Inactive"}</span>
                    ${oo(i)}
                    <span class="text-[10px] text-gray-500">${J(i.start_date)}${i.start_date?" → ":""}${J(i.end_date)}</span>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}window.renderAds=xe;const Ke=[{id:"gemini",name:"Google Gemini",tag:"FREE",color:"blue",icon:"sparkles",kf:"gemini_key",ph:"AIzaSy…",signup:"https://aistudio.google.com/apikey",models:["gemini-3-flash-preview","gemini-3.1-flash-lite-preview"],mf:"gemini_model",dm:"gemini-3-flash-preview",desc:"Google's best free AI. Great for coding, writing apps & websites.",free_tier:"15 req/min · 1M tokens/day — Free forever"}],X={border:{blue:"border-blue-500/50"},bg:{blue:"bg-blue-500/8"},text:{blue:"text-blue-400"},badge:{blue:"bg-blue-500/15 text-blue-300"}};async function Ia(){const e=document.getElementById("content");try{let t=function(r){const n=o===r.id,l=i[r.kf],c=i[r.mf]||r.dm;return`
        <div class="glass-soft border ${n?X.border[r.color]+" "+X.bg[r.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard" id="apc-${r.id}">
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-8 h-8 ${X.bg[r.color]} rounded-lg flex items-center justify-center shrink-0">
                <i data-lucide="${r.icon}" class="w-4 h-4 ${X.text[r.color]}"></i>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h3 class="text-xs font-black text-white">${s(r.name)}</h3>
                  <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full ${X.badge[r.color]}">${r.tag}</span>
                </div>
                <p class="text-[9px] text-emerald-400 font-bold mt-0.5 leading-tight truncate">${s(r.free_tier)}</p>
              </div>
            </div>
            <label class="flex items-center gap-1 cursor-pointer shrink-0">
              <input type="radio" name="active_provider" value="${r.id}" ${n?"checked":""} class="accent-blue-500" onchange="highlightAI('${r.id}')">
              <span class="text-[9px] font-bold ${n?X.text[r.color]:"text-gray-600"}">USE</span>
            </label>
          </div>
          <p class="text-[11px] text-gray-400 leading-relaxed">${s(r.desc)}</p>
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="lbl mb-0">API Key</label>
              <a href="${r.signup}" target="_blank" rel="noopener" class="text-[10px] font-bold ${X.text[r.color]} hover:underline flex items-center gap-0.5">
                <i data-lucide="external-link" class="w-3 h-3"></i>Get Free Key
              </a>
            </div>
            <div class="relative">
              <input type="password" class="input-field pr-16 text-xs" name="${r.kf}"
                placeholder="${l?"••••"+l.slice(-4):r.ph}">
              ${l?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>'}
            </div>
          </div>
          <div>
            <label class="lbl">Model</label>
            <select class="input-field text-xs" name="${r.mf}">
              ${r.models.map(d=>`<option value="${d}" ${c===d?"selected":""}>${d}</option>`).join("")}
            </select>
          </div>
        </div>`};const{data:a}=await p.from("ai_settings").select("*").limit(1).maybeSingle(),i=a||{},o=i.active_provider||"gemini";e.innerHTML=`
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
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">${Ke.map(t).join("")}</div>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="sliders" class="w-4 h-4 text-blue-400"></i> Feature Toggles</h3>
            ${[{key:"product_ai_enabled",label:"AI Product Creation",desc:"AI auto-fills product descriptions",val:i.product_ai_enabled!==!1},{key:"ai_code_assist",label:"AI Code Assistant",desc:"AI helps build and edit your website code",val:i.ai_code_assist!==!1},{key:"ai_moderation",label:"AI Content Moderation",desc:"Auto-approve/reject customer reviews using AI",val:i.ai_moderation}].map(r=>`
              <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
                <div><p class="text-xs font-bold text-white">${r.label}</p><p class="text-[11px] text-gray-500">${r.desc}</p></div>
                <label class="toggle-switch"><input type="checkbox" name="${r.key}" ${r.val?"checked":""}><span class="toggle-slider"></span></label>
              </div>`).join("")}
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            💾 Save AI Settings
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}window.highlightAI=function(e){Ke.forEach(t=>{const a=document.getElementById("apc-"+t.id);if(!a)return;const i=t.id===e;a.className=`glass-soft border ${i?X.border[t.color]+" "+X.bg[t.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard`;const o=a.querySelector("input[type=radio] + span");o&&(o.className=`text-[9px] font-bold ${i?X.text[t.color]:"text-gray-600"}`)})};window.saveAiSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={active_provider:a.active_provider||"gemini",product_ai_enabled:a.product_ai_enabled==="on",ai_code_assist:a.ai_code_assist==="on",ai_moderation:a.ai_moderation==="on"};Ke.forEach(o=>{a[o.mf]&&(i[o.mf]=a[o.mf]);const r=(a[o.kf]||"").trim();r&&!r.startsWith("••••")&&r!==""&&(i[o.kf]=r)}),i.gemini_key&&(i.gemini_api_key=i.gemini_key);try{const{data:o}=await p.from("ai_settings").select("id").limit(1).maybeSingle();let r;if(o?.id?{error:r}=await p.from("ai_settings").update(i).eq("id",o.id):{error:r}=await p.from("ai_settings").insert(i),r){u("Save failed: "+r.message,"error"),console.error("[AI Save]",r);return}await A.reload(),u("✅ AI settings saved!","success"),setTimeout(()=>Ia(),600)}catch(o){u("Unexpected error: "+o.message,"error"),console.error("[AI Save]",o)}};const A={_cfg:null,async reload(){const{data:e,error:t}=await p.from("ai_settings").select("*").limit(1).maybeSingle();if(t){console.warn("[aiClient] Could not load settings:",t.message),this._cfg={};return}const a=e||{};!a.gemini_key&&a.gemini_api_key&&(a.gemini_key=a.gemini_api_key),this._cfg=a},async getConfig(){return this._cfg||await this.reload(),this._cfg},async chat(e,{maxTokens:t=2e3}={}){const a=await this.getConfig();if(!String(a.gemini_key||"").trim())throw new Error("No AI provider configured. Go to AI Settings and add your Gemini API key.");const i=e[e.length-1],o={action:"chat",message:String(i?.content||"").trim(),history:e.slice(0,-1).map(n=>({role:n.role,content:String(n.content||"")})),provider_override:"gemini",max_tokens:t},r=await this._callEdge(o);if(r&&r.response)return{text:r.response,provider:"Google Gemini",model:r.model||a.gemini_model};throw new Error(String(r?.error||"Gemini is unavailable."))},async prompt(e,t={}){return this.chat([{role:"user",content:e}],t)},async getStatus(){const e=await this.getConfig();return Ke.map(t=>({id:t.id,name:t.name,color:t.color,hasKey:!!e[t.kf]?.trim(),isActive:e.active_provider===t.id,isCoolingDown:!1,remainingSec:0}))},async analyzeImages(e,t={}){const a=`You are the AI listing expert for the Weverse Online Shop marketplace. Look carefully at the uploaded product photo(s) and identify exactly what the product is — the REAL brand, model and year that actually appear in the photos, never a guessed one.

IDENTIFY THE REAL BRAND & MODEL (most important):
- Find the brand badge, emblem, logo, nameplate or label in the photo and read its exact letters and symbols, character by character.
- For vehicles, cross-check the badge against the design: grille shape, headlight and taillight design, body lines, wheels, interior and steering wheel. A BMW grille/kidney badge, Mercedes three-pointed star, Audi four rings, Toyota, Honda, Ford, Tesla, etc. are visually distinct — match what you actually see.
- Use the EXACT brand name that is printed on the product. NEVER swap it for a different brand (e.g. never call a BMW a Mercedes-Benz, never call an iPhone a Samsung).
- If the exact model number is printed (e.g. "X5", "C300", "iPhone 15 Pro Max", "MacBook Pro"), use that exact text.
- The year must come from a visible printed date/serial when present; otherwise give your best estimate from the design era and never invent a specific year you cannot support.

Return a single valid JSON object (no markdown, no extra text) with these keys:
- title (string): a real, professional marketplace product title that matches the actual item (real brand + real model/type + key feature + category). Never use placeholders like "AI Product" or "Premium Item".
- description (string): a detailed, persuasive 2-4 sentence description.
- category (string): the best category from this list: ${re.join(", ")}.
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
- Respond with valid JSON only.`,i=[];for(const o of(e||[]).slice(0,t.maxImages||3)){const r=await this._fetchImageAsDataUrl(o,1024);r&&i.push(r)}if(!i.length)throw new Error("Could not read the uploaded images.");try{const o=await this._tryBrowserGeminiVision(a,i);if(o)return o}catch{}try{const o=await this._callEdge({action:"vision",images:i,prompt:a,max_tokens:4096});if(o&&o.success&&o.text){const r=tt(o.text);if(r)return{...r,_aiProvider:o.provider,_aiModel:o.model};throw new Error("The AI returned no valid analysis for these images.")}throw new Error(o&&o.error||"Vision service unavailable.")}catch{}return null},async _runVisionPrompt(e,t,{maxImages:a=3,maxTokens:i=4096}={}){const o=[];for(const r of(t||[]).slice(0,a)){const n=await this._fetchImageAsDataUrl(r,1024);n&&o.push(n)}if(!o.length)throw new Error("Could not read the uploaded images.");try{const r=await this._tryBrowserGeminiVision(e,o);if(r)return r}catch{}try{const r=await this._callEdge({action:"vision",images:o,prompt:e,max_tokens:i});if(r&&r.success&&r.text){const n=tt(r.text);if(n)return{...n,_aiProvider:r.provider,_aiModel:r.model};throw new Error("The AI returned no valid analysis for these images.")}throw new Error(r&&r.error||"Vision service unavailable.")}catch{}return null},async identifyProduct(e,t={}){const a=`STAGE 1 — IDENTIFY THE EXACT PRODUCT.
Look at the photo(s) and state exactly what product is shown. Identification ONLY — do not complete any specifications yet.

IDENTIFICATION RULES (accuracy over guesses — this is the most important step):
- Read the real brand badge / logo / emblem / nameplate / label in the photo character by character and use the EXACT brand that is printed. NEVER swap brands: a BMW must never be called Mercedes-Benz, an iPhone never Samsung, a Toyota never Honda or any other brand.
- The model must come from a visible nameplate / label / badging when present. Otherwise identify the exact design (grille, headlights, taillights, wheels, body lines, interior, silhouette, box, packaging) and give your best professional identification, or give the brand + product type (e.g. "BMW SUV" or "Levi's jeans") instead of inventing a specific model.
- year: only from a visible printed year, serial, badge or registration. Otherwise estimate from the design era and set "year_estimated": true.
- color: the dominant color clearly visible.
- body_type: only when clearly visible (Sedan, SUV, Hatchback, Coupe, Convertible, Wagon, Pickup, Truck, Van, Sports Car, Luxury Sedan, Motorcycle, Yacht, Other).
- condition: judge from what is visible (New, Refurbished, Used - Like New, Used - Good, Used - Fair).
- listing_type: "property" if the photo shows a house, villa, apartment, condo, mansion, land, estate or any building for sale; "vehicle" for cars, motorcycles, boats and other vehicles; otherwise "product".
- category (for products and vehicles): best match from this list: ${re.join(", ")}. For property photos set category to "Real Estate".
- For properties also give: property_type (House, Villa, Apartment, Condo, Land, Commercial, Farm, Other), bedrooms (number or null), bathrooms (number or null), half_bathrooms (number or null), building_size (string|null), land_size (string|null), floors (number|null), garage (string|null, e.g. "2-car attached"), parking_spaces (number|null), furnished ("Furnished"/"Unfurnished"/null), condition (string|null — only from a visible listing sign, seller notes or obvious visible state: "New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation"), year_built (number|null — only from a visible year, plaque, cornerstone or listing sign), year_renovated (number|null — only if visibly stated), area (neighborhood/district, string|null), address (street + number or landmark when visible in the photo or reliably known, string|null), zip_code (string|null — only if visibly printed), landmarks (string[]|null — only well-known landmarks visible in or clearly indicated by the photo), town (string|null), city (string|null), state (string|null), country (string|null), latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null).
- LOCATION RULES: use ONLY location information genuinely visible in the photo or reliably known from it (street signs, landmarks, real estate signs, watermarks). NEVER invent a street address, area, city or coordinates. If you cannot determine a location value, return null for that field — the owner will enter it. Latitude/longitude may be derived from a readable address (e.g. a visible street sign); otherwise null.
- confidence: how certain you are about what this is: "high" | "medium" | "low".
- alternate_categories: up to 2 other plausible category matches from the list above, or [].
- detected_name: a short plain label of what you actually see, e.g. "white Toyota Camry sedan", "black leather handbag", "modern 4-bedroom villa".
- If the photo does not clearly show a product, return { "identified": false, "detected_name": "what you see", "reason": "why you cannot identify it" }.

Return ONE valid JSON object (no markdown) with only these keys:
{ "identified": true, "listing_type": "product"|"vehicle"|"property", "brand": string|null, "model": string|null, "year": string|null, "year_estimated": boolean, "body_type": string|null, "color": string|null, "condition": string|null, "category": string|null, "subcategory": string|null, "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": string|null, "year_built": number|null, "year_renovated": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "confidence": "high"|"medium"|"low", "alternate_categories": string[], "detected_name": string }`;return this._runVisionPrompt(a,e,{maxImages:t.maxImages||5})},async detectProducts(e,t={}){const a=`STAGE 0 — DETECT EVERY DISTINCT PRODUCT.
Look carefully at ALL of the photo(s) uploaded and detect EVERY distinct product shown.

RULES:
- Every DIFFERENT product must be its own entry. If one photo shows a bag, a watch, shoes and a phone, that is FOUR separate products — one entry per product.
- Photos that show the SAME product from different angles / sides / details are ONE product: give them the same entry and list every image index in image_indices.
- A single photo can appear in several products' image_indices when it contains several different products.
- If a photo contains no recognizable product, ignore that photo.
- If NO product can be identified in any photo, return { "identified": false, "reason": "why you cannot identify anything" }.

For each distinct product include:
- image_indices: array of the photo indexes (0-based) that show THIS product (used as its own images later). Never combine different products under one entry.
- listing_type: "property" if it is a house, villa, apartment, condo, mansion, land, estate or building; "vehicle" for cars, motorcycles, boats; otherwise "product".
- brand: the real brand printed on the product when visible — never swap one brand for another.
- model: real model from a visible label when present, otherwise null.
- year: only from visible text; otherwise null with year_estimated true when estimated from the design.
- body_type, color, condition (New, Refurbished, Used - Like New, Used - Good, Used - Fair).
- category: best match from this list — ${re.join(", ")}. For properties set category to "Real Estate".
- subcategory, property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors (number|null), garage (string|null), parking_spaces (number|null), furnished ("Furnished"/"Unfurnished"/null), year_built (number|null — only if visible), area (neighborhood/district), address (street + number or landmark when visible/reliably known), zip_code (string|null — only if visible), landmarks (string[]|null — only well-known landmarks visible in or clearly indicated by the photo), town, city, state, country, latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null) for properties. LOCATION RULES: only use location genuinely visible in the photo — never invent an address or coordinates; return null when unknown.
- confidence: "high" | "medium" | "low" for each product.
- detected_name: a short plain label for each product, e.g. "black leather handbag", "silver wristwatch", "white Nike sneakers", "modern 3-bedroom villa".

Return ONE valid JSON object (no markdown):
{ "identified": true, "products": [ { "image_indices": number[], "listing_type": "product"|"vehicle"|"property", "brand": string|null, "model": string|null, "year": string|null, "year_estimated": boolean, "body_type": string|null, "color": string|null, "condition": string|null, "category": string|null, "subcategory": string|null, "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": string|null, "year_built": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "confidence": "high"|"medium"|"low", "detected_name": string } ] }`;return this._runVisionPrompt(a,e,{maxImages:t.maxImages||5})},async completeProductSpecs(e,t,a={}){const i=t||{},o=`STAGE 2 — COMPLETE THE STANDARD SPECIFICATIONS.
The product below was identified in STAGE 1 from the photos.

IDENTIFIED PRODUCT:
- listing_type: ${String(i.listing_type||"product")}
- brand: ${String(i.brand||"unknown")}
- model: ${String(i.model||"unknown")}
- year: ${String(i.year||"unknown")}
- body_type: ${String(i.body_type||"unknown")}
- category: ${String(i.category||"unknown")}
- detected_name: ${String(i.detected_name||"unknown")}

Look at the photo(s) again, then complete the standard specifications for THIS EXACT identified product using reliable product/vehicle/property data for that exact brand + model.

ALWAYS fill every relevant specification when you can determine it for the identified product:
- Vehicles: Engine, Transmission, Fuel, Drive type, Horsepower, Seats (seating capacity), Doors, Body type, Model year, Mileage (only if visible/known), Safety features.
- Phones/Computers: storage, ram, processor, display, graphics, os.
- Properties (house/villa/land): property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors, garage, parking_spaces, furnished ("Furnished"/"Unfurnished"/null), condition (string|null — "New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation"; only from visible state or a listing sign, never inferred as verified), year_built (number|null — only if visible/known), year_renovated (number|null — only if visible/known), area (neighborhood/district), address (street + number or landmark when visible/reliably known), zip_code (string|null — only if visibly printed), landmarks (string[]|null — only well-known landmarks visible in or clearly indicated by the photo), town, city, state, country, country_code, latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null), interior_features (string[]|null — only interior elements actually visible in the photos), exterior_features (string[]|null — only exterior elements actually visible), home_systems (string[]|null — only systems visibly present, e.g. air conditioning units, solar panels, radiators), nearby_area (only genuinely known from the photo/listing sign: schools/hospitals/shopping/transportation/distances — otherwise null), floor_plan (only if a floor plan is actually visible in the photos, otherwise null), legal_info (NEVER claim ownership/title/permits/taxes/legal status as verified from a photo — only mention something clearly printed on a visible listing/sign as source "Seller provided", otherwise null), inspection_info (string|null — only if visibly stated), verification_status (always null here — stays "Not verified" unless the owner verifies), risk_notes (string|null — only clearly visible issues). LOCATION RULES: only use location genuinely visible in the photo or reliably known — never invent an address, city, coordinates, landmarks or nearby places; return null (and list the key in "missing_fields") when you cannot determine it. latitude/longitude may be derived from a readable address; otherwise null.
- Other product types: fill whatever genuinely applies — type (e.g. Handbag, Sneaker, Textbook), material, size, color, brand, model, age_range, skin_type, ingredients, author, publisher, language, format, isbn, pages, edition, quantity, pet_type, lens, sensor, megapixels, video, platform, license, version, duration, followers, engagement, niche, usage, shelf_life, storage, assembly, weatherproof, warranty.
- Also complete the listing content for the exact identified product: highlights (3-6 genuine selling points), seo_keywords (6-10 relevant search keywords for the identified product), tags (from the allowed badge set — "New Arrival", "Best Seller", "Hot Deal", "Featured", "Limited Stock" — only the ones that genuinely apply to this exact product), warranty (only when the identified product type genuinely carries one, e.g. electronics, vehicles, appliances), availability_status ("In Stock" for a new product, otherwise null if not determinable), and stock_quantity (1 ONLY for unique one-of-a-kind items such as a vehicle, property or single specimen — otherwise null, because stock cannot be known from a photo).

HARD RULES:
- ONLY use specifications for the exact brand + model identified above. A Toyota photo must produce TOYOTA specifications. NEVER use specifications from a different brand or model (never a Toyota image → Mercedes specs, never an iPhone image → Samsung specs, never a bag image → car specs).
- If the exact year or trim is uncertain, use the most common / standard specification for that identified model and list that key in "estimated". Do not randomly invent values that are not reasonable for that model.
- Only return specs that exist for the product type: a bag has no engine/transmission/horsepower (leave those null); a phone has no transmission or doors (leave those null); a car has engine/transmission/fuel/drive/horsepower/seats/doors; a house has bedrooms/bathrooms/sizes but no engine or storage.
- Never return price in this stage — price is handled in a separate stage.
- "missing_fields" is the ONLY place where uncertainty is recorded: for every field in this JSON that APPLIES to the identified product type but that you genuinely cannot determine or reliably verify (from the photos or reliable product data), list that key in "missing_fields". NEVER guess a value for a field you cannot determine — put its key in "missing_fields" instead. NEVER list a field that does not apply to this product type. The owner will see "Not specified" for those fields and can review/edit them before publishing.

DESCRIPTION REQUIREMENTS (the description is a MAJOR part of the listing):
- Write a detailed, professional, natural, trustworthy and enjoyable marketplace description that is clearly about THIS exact identified product and nothing else.
- For vehicles, naturally explain the engine, performance, transmission, drivetrain, fuel type, comfort, interior, exterior, safety, technology and practicality — always grounded in the reliable specifications you returned above.
- For properties, describe the home/land, its layout, rooms, size, location, surroundings and notable features — grounded in the property details returned above.
- For other product types, cover the product's most relevant, genuine attributes (design, materials, build quality, usability, and key specs) based only on the identified product and its reliable specs.
- Write in smooth, complete sentences and short paragraphs (roughly 3-6 sentences / 60-140 words). Never sound robotic, never use bullet lists, never invent features, prices, bundles or promises that are not true of the identified product, and NEVER mention AI, scanning, estimates, specification lookup or any internal process.

Return ONE valid JSON object (no markdown):
{
  "title": string|null (professional listing title: year + real brand + real model + product type, e.g. "2023 Toyota Camry SE Sedan" or "Black Leather Crossbody Handbag"),
  "description": string|null (the detailed, professional description described above — based ONLY on the identified product and its standard specs),
  "engine": string|null, "transmission": string|null, "fuel_type": string|null, "drive_type": string|null,
  "horsepower": string|null, "mileage": string|null, "seating_capacity": string|null, "doors": string|null,
  "body_type": string|null, "model_year": string|null, "safety_features": string[]|null,
  "storage": string|null, "ram": string|null, "processor": string|null, "display": string|null, "graphics": string|null, "os": string|null,
  "material": string|null, "size": string|null, "gender": string|null, "platform": string|null,
  "type": string|null, "color": string|null, "brand": string|null, "model": string|null,
  "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": string|null, "condition": string|null, "year_built": number|null, "year_renovated": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "country_code": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "interior_features": string[]|null, "exterior_features": string[]|null, "home_systems": string[]|null, "nearby_area": { "schools": string[]|null, "hospitals": string[]|null, "shopping": string[]|null, "transportation": string[]|null, "distances": string[]|null }|null, "floor_plan": { "image": string|null, "rooms": string[]|null, "levels": string|null, "total_area": string|null }|null, "legal_info": string[]|null (each item like "Ownership: Clear title (Seller provided)" or "Property taxes (Not verified)" — NEVER verified from a photo), "inspection_info": string|null, "risk_notes": string|null,
  "author": string|null, "publisher": string|null, "language": string|null, "format": string|null, "isbn": string|null, "pages": string|null, "edition": string|null, "quantity": string|null, "age_range": string|null, "skin_type": string|null, "ingredients": string|null, "pet_type": string|null, "lens": string|null, "sensor": string|null, "megapixels": string|null, "video": string|null, "license": string|null, "version": string|null, "duration": string|null, "followers": string|null, "engagement": string|null, "niche": string|null, "usage": string|null, "shelf_life": string|null, "assembly": string|null, "weatherproof": string|null, "warranty": string|null,
  "features": string[]|null (notable features, e.g. ["OLED display","5G"] or ["Swimming pool","Double garage"]),
  "highlights": string[]|null (3-6 genuine selling points of this exact product),
  "seo_keywords": string[]|null (6-10 relevant search keywords for this exact product),
  "tags": string[]|null (only from: "New Arrival", "Best Seller", "Hot Deal", "Featured", "Limited Stock" — only ones that genuinely apply),
  "availability_status": "In Stock"|"Out of Stock"|"Pre-order"|"Limited Stock"|null,
  "stock_quantity": number|null (1 only for unique one-of-a-kind items, otherwise null),
  "estimated": string[] (keys above that are estimates, e.g. ["engine","horsepower"]),
  "missing_fields": string[] (keys above that APPLY to this product type but could not be determined — see HARD RULES)
}`;return this._runVisionPrompt(o,e,{maxImages:a.maxImages||5})},async estimateProductPrice(e,t,a={},i={}){const o=t||{},r=a||{},n=`STAGE 3 — ESTIMATE THE REAL MARKET PRICE AND A PROMOTIONAL DISCOUNT PRICE.
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
- engine: ${String(r.engine||"unknown")}
- transmission: ${String(r.transmission||"unknown")}
- fuel_type: ${String(r.fuel_type||"unknown")}
- drive_type: ${String(r.drive_type||"unknown")}
- horsepower: ${String(r.horsepower||"unknown")}
- mileage: ${String(r.mileage||"unknown")}
- storage/ram: ${String(r.storage||"")}${r.ram?" / "+r.ram:""}
- property: ${String(o.property_type||r.property_type||"")}${r.bedrooms?` ${r.bedrooms} beds`:""}${r.half_bathrooms?` / ${r.half_bathrooms} half baths`:""}${r.bathrooms?` / ${r.bathrooms} baths`:""}${r.building_size?` / ${r.building_size}`:""}${r.land_size?` / ${r.land_size} land`:""}${r.year_built?` / built ${r.year_built}`:""}${r.condition?` / ${r.condition}`:""}${r.city?` / ${r.city}`:""}

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
}`;return this._runVisionPrompt(n,e,{maxImages:i.maxImages||5})},async _callEdge(e){let t="";try{t=(await p.auth.getSession())?.data?.session?.access_token||""}catch{}return await(await fetch(ni,{method:"POST",headers:{"Content-Type":"application/json",...t?{Authorization:`Bearer ${t}`}:{}},body:JSON.stringify(e),signal:AbortSignal.timeout(12e4)})).json().catch(()=>({}))},async _fetchImageAsDataUrl(e,t=1200){try{const a=await fetch(e).then(i=>i.blob());return!a||!a.size?null:a.size<18e5?`data:${a.type||"image/jpeg"};base64,${await so(a)}`:await this._downscaleImage(a,t)}catch{return null}},async _downscaleImage(e,t){const a=URL.createObjectURL(e);try{const i=new Image;await new Promise((c,d)=>{i.onload=c,i.onerror=d,i.src=a});const o=Math.min(1,t/Math.max(i.width,i.height)),r=Math.max(1,Math.round(i.width*o)),n=Math.max(1,Math.round(i.height*o)),l=document.createElement("canvas");return l.width=r,l.height=n,l.getContext("2d").drawImage(i,0,0,r,n),l.toDataURL("image/jpeg",.82)}finally{URL.revokeObjectURL(a)}},async _tryBrowserGeminiVision(e,t){const a=await this.getConfig(),i=String(a.gemini_key||a.gemini_api_key||"").trim();if(!i)return null;const o=[a.gemini_vision_model||a.gemini_model,"gemini-2.5-flash","gemini-3-flash-preview","gemini-3.1-flash-lite-preview"].filter(Boolean);for(const r of o)try{const n=[{text:e}];for(const g of t){const f=String(g).match(/^data:([^;,]+)[;,]base64,(.+)$/s);f&&n.push({inlineData:{mimeType:f[1].trim(),data:f[2].trim()}})}if(n.length<2)return null;const l=`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(r)}:generateContent?key=${encodeURIComponent(i)}`,c=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:n}],generationConfig:{temperature:.2,maxOutputTokens:4096}}),signal:AbortSignal.timeout(4e4)});if(!c.ok)continue;const m=((await c.json())?.candidates?.[0]?.content?.parts||[]).map(g=>g?.text||"").join(`
`).trim();if(!m)continue;const y=tt(m);if(y)return{...y,_aiProvider:"Gemini (browser)",_aiModel:r}}catch{}return null}};function so(e){return new Promise(t=>{const a=new FileReader;a.onload=()=>{const i=a.result;if(typeof i=="string"){const o=i.indexOf(",");t(o>=0?i.slice(o+1):i)}else t("")},a.onerror=()=>t(""),a.readAsDataURL(e)})}window.aiClient=A;window.showAiStatusModal=async function(){const e=await A.getStatus(),t=e.filter(a=>a.hasKey);U(`
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
              <span class="text-xs font-bold text-white flex-1">${s(a.name)}</span>
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
    </div>`),window.lucide&&lucide.createIcons()};window.testAiCall=async function(){const e=document.getElementById("ai-test-input")?.value?.trim();if(!e)return;const t=document.getElementById("ai-test-output");t.classList.remove("hidden"),t.textContent="⏳ Asking Gemini…";try{const a=await A.prompt(e);t.textContent=`✓ [${a.provider} · ${a.model}]

${a.text}`}catch(a){t.textContent=`❌ ${a.message}`}};function tt(e){if(!e)return null;let t=String(e).trim();const a=t.match(/```(?:json)?\s*([\s\S]*?)```/i);a&&(t=a[1].trim());const i=t.indexOf("{"),o=t.lastIndexOf("}");if(i===-1||o===-1||o<=i)return null;const r=t.slice(i,o+1);try{return JSON.parse(r)}catch{return null}}async function lo(){const e=document.getElementById("content");try{const[{data:t},a]=await Promise.all([p.from("site_settings").select("*").limit(1).maybeSingle(),co()]),i=t||{},o=new Set(Array.isArray(i.live_promo_product_ids)?i.live_promo_product_ids:[]),r=a.length?`
        <div class="mt-4">
          <label class="lbl">Which products appear in the Live Promotions (Featured Product Alerts)?</label>
          <p class="text-[11px] text-gray-400 mb-2">Leave all unchecked to let the store pick real products automatically.</p>
          <input id="promo-picker-search" type="search" class="input-field mb-2" placeholder="Search products to choose…" oninput="filterPromoPicker(this.value)">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1.5 max-h-72 overflow-y-auto pr-1" id="promo-picker-list">
            ${a.map(n=>{const l=n.property_id||n.id,c=o.has(l)?"checked":"";return`<label class="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3 py-2 cursor-pointer hover:border-blue-400/40 transition" data-promo-search="${s((n.title||n.name||"")+" "+(n.category||""))}">
                <input type="checkbox" name="live_promo_product_ids" value="${s(l)}" ${c} class="accent-blue-500 w-4 h-4">
                <span class="min-w-0"><span class="block text-xs font-bold text-white truncate">${s(n.title||n.name||l)}</span><span class="block text-[10px] text-gray-400">${s(n.category||n.listing_type||"")} · ${s(l)}</span></span>
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
          ${[{section:"Site Identity",fields:[{key:"site_name",label:"Site Name",type:"text",placeholder:"Weverse Online Shop"},{key:"site_tagline",label:"Tagline / Slogan",type:"text",placeholder:"Premium International Commerce"},{key:"site_description",label:"Site Description (SEO)",type:"textarea",placeholder:"Your trusted global shop…"}]},{section:"Contact Information",fields:[{key:"contact_email",label:"Contact Email",type:"email",placeholder:"support@example.com"},{key:"contact_phone",label:"Contact Phone",type:"tel",placeholder:"+1 234 567 8900"},{key:"contact_address",label:"Business Address",type:"textarea",placeholder:"123 Main St, City, Country"},{key:"whatsapp_number",label:"WhatsApp Number",type:"tel",placeholder:"+1 234 567 8900"}]},{section:"Hero Section",fields:[{key:"hero_headline",label:"Hero Headline",type:"text",placeholder:"Weverse Online Shop"},{key:"hero_subtext",label:"Hero Subtext",type:"textarea",placeholder:"Shop premium products…"},{key:"hero_cta_text",label:"CTA Button Text",type:"text",placeholder:"Shop Now"}]},{section:"Social Media",fields:[{key:"facebook_url",label:"Facebook URL",type:"url",placeholder:"https://facebook.com/…"},{key:"instagram_url",label:"Instagram URL",type:"url",placeholder:"https://instagram.com/…"},{key:"twitter_url",label:"Twitter / X URL",type:"url",placeholder:"https://twitter.com/…"},{key:"youtube_url",label:"YouTube URL",type:"url",placeholder:"https://youtube.com/…"},{key:"tiktok_url",label:"TikTok URL",type:"url",placeholder:"https://tiktok.com/…"}]},{section:"Mobile App Promotion Banner",fields:[{key:"app_banner_enabled",label:"Show the App Promotion banner at the bottom of every page",type:"checkbox"},{key:"app_banner_headline",label:"Banner Headline",type:"text",placeholder:"Discover More with the Weverse Online Shop App"},{key:"app_play_store_url",label:"Google Play Store URL (real app listing — leave empty while unpublished)",type:"url",placeholder:"https://play.google.com/store/apps/details?id=…"}]},{section:"Live Product Promotions (Featured Product Alerts)",fields:[{key:"live_promo_enabled",label:"Show Live Product Promotions (small alerts at the bottom corner)",type:"checkbox"},{key:"live_promo_first_delay_seconds",label:"First alert after (seconds)",type:"number",placeholder:"12"},{key:"live_promo_interval_seconds",label:"Delay between alerts (seconds)",type:"number",placeholder:"60"}],extra:r}].map(n=>`
            <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
              <h3 class="text-sm font-black text-white mb-4">${n.section}</h3>
              <div class="form-grid form-grid-2">
                ${n.fields.map(l=>`
                  <div ${l.type==="textarea"||l.type==="checkbox"?'class="sm:col-span-2"':""}>
                    ${l.type==="checkbox"?`<label class="flex items-center gap-2.5 cursor-pointer"><input type="checkbox" name="${l.key}" class="accent-blue-500 w-4 h-4" ${i[l.key]?"checked":""}><span class="text-sm text-gray-300">${l.label}</span></label>`:l.type==="textarea"?`<label class="lbl">${l.label}</label><textarea class="input-field" name="${l.key}" placeholder="${s(l.placeholder)}" rows="2">${s(i[l.key]||"")}</textarea>`:`<label class="lbl">${l.label}</label><input type="${l.type}" class="input-field" name="${l.key}" value="${s(i[l.key]||"")}" placeholder="${s(l.placeholder||"")}">`}
                  </div>`).join("")}
              </div>
              ${n.extra||""}
            </div>`).join("")}
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save Content Settings</button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}async function co(){const e=new Set,t=[],a=i=>{for(const o of i||[]){const r=o&&(o.property_id||o.id);r&&!e.has(r)&&(e.add(r),t.push(o))}};try{const{data:i}=await p.from("showroom_listings").select("property_id,title,name,category,listing_type,images,is_active").order("created_at",{ascending:!1}).limit(500);a(i)}catch{}return a(je()),a(K),a(Gt),a(zt),a(Wt),a(Vt),t.slice(0,250)}window.filterPromoPicker=function(e){const t=document.getElementById("promo-picker-list");if(!t)return;const a=(e||"").trim().toLowerCase();t.querySelectorAll("[data-promo-search]").forEach(i=>{i.style.display=!a||i.dataset.promoSearch.toLowerCase().includes(a)?"":"none"})};window.selectAllPromoPicks=function(){document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(e=>{e.checked=!0})};window.clearAllPromoPicks=function(){document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(e=>{e.checked=!1})};window.saveContent=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=Array.from(new Set(t.getAll("live_promo_product_ids").map(r=>String(r).trim()).filter(Boolean)));i.length?a.live_promo_product_ids=i:a.live_promo_product_ids=[];const{error:o}=await p.from("site_settings").upsert({id:1,...a});if(o){u(o.message,"error");return}u("Content settings saved!")};const Bt=[{key:"banner",title:"ANDROID APP BANNER",desc:"The mobile-app promotion banner shown at the bottom of every page. Editing these words never changes the banner design, phone image, logo or buttons.",accent:"from-cyan-400 to-blue-500",fields:[{key:"app_banner_title",label:"App Banner Title",type:"text"},{key:"app_banner_description",label:"App Banner Description",type:"textarea"},{key:"app_banner_button_text",label:"App Banner Button Text",type:"text"},{key:"app_banner_secondary_text",label:"App Banner Secondary Text",type:"text"}]},{key:"bottom",title:"BOTTOM / END-OF-PAGE SECTION",desc:"The final professional closing area of the website — thank-you message, customer support, footer links and copyright. The polished design stays; only these words change.",accent:"from-emerald-400 to-cyan-500",fields:[{key:"bottom_heading",label:"Bottom Section Heading",type:"text"},{key:"bottom_main_message",label:"Main Bottom Message",type:"textarea"},{key:"bottom_closing_message",label:"Closing Message",type:"text"},{key:"bottom_support_heading",label:"Customer Support Heading",type:"text"},{key:"bottom_support_description",label:"Customer Support Description",type:"textarea"},{key:"bottom_support_button_text",label:"Support Button Text",type:"text"},{key:"bottom_footer_text",label:"Footer Section Text",type:"text"},{key:"bottom_footer_closing",label:"Footer Closing Message",type:"text"},{key:"bottom_copyright",label:"Copyright Text (empty = automatic “© year Brand” line)",type:"text"}]},{key:"promo_banner",title:"HOME PAGE PROMO BANNER",desc:"The main rotating banner at the top of the homepage. Upload your own image or video and write your own words — the clean design stays. If empty, the built-in image banners rotate.",accent:"from-fuchsia-400 to-purple-500",fields:[{key:"promo_banner_enabled",label:"Show my promo banner",type:"checkbox"},{key:"promo_banner_image",label:"Banner Image",type:"media",kind:"image"},{key:"promo_banner_video",label:"Banner Video (plays if no image)",type:"media",kind:"video"},{key:"promo_banner_title",label:"Banner Title",type:"text"},{key:"promo_banner_subtitle",label:"Banner Subtitle",type:"text"},{key:"promo_banner_button_text",label:"Button Text",type:"text"},{key:"promo_banner_button_link",label:"Button Link",type:"text"}]},{key:"video_ad",title:"HOME PAGE VIDEO ADVERTISEMENT",desc:"A separate video card below the promo banner. Upload your own video (and optional poster image) and write your own words. It plays muted with play/pause and a progress bar.",accent:"from-rose-400 to-orange-500",fields:[{key:"video_ad_enabled",label:"Show the video advertisement",type:"checkbox"},{key:"video_ad_video_url",label:"Video File",type:"media",kind:"video"},{key:"video_ad_poster_url",label:"Poster Image (shown before play)",type:"media",kind:"image"},{key:"video_ad_title",label:"Video Title",type:"text"},{key:"video_ad_subtitle",label:"Video Subtitle",type:"text"},{key:"video_ad_button_text",label:"Button Text",type:"text"},{key:"video_ad_button_link",label:"Button Link",type:"text"}]}];function Aa(e,t){const a=e.kind==="image",i=t||"",o=a?"image":"video",r="text-fuchsia-300",n=!!i;return`<div id="slot-${e.key}">
      ${n?`<div class="relative group w-full h-28 rounded-xl overflow-hidden bg-gray-900 border border-fuchsia-500/15 flex items-center justify-center">
             ${a?`<img src="${s(i)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`:`<video src="${s(i)}" class="w-full h-full object-cover" muted playsinline preload="metadata"></video>`}
             <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
               <button type="button" onclick="triggerContentMediaUpload('${e.key}')" class="text-xs font-bold text-white bg-fuchsia-600 px-3 py-1.5 rounded-lg">Replace</button>
               <button type="button" onclick="clearContentMedia('${e.key}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
             </div>
           </div>`:`<button type="button" onclick="triggerContentMediaUpload('${e.key}')" class="w-full h-28 rounded-xl border-2 border-dashed border-fuchsia-500/25 hover:border-fuchsia-500/50 flex flex-col items-center justify-center gap-1.5 transition">
             <i data-lucide="${o}" class="w-6 h-6 ${r}"></i>
             <p class="text-[10px] text-gray-500">Upload ${a?"Image":"Video"}</p>
           </button>`}
      <input type="file" id="file-${e.key}" class="hidden" accept="${a?"image/*":"video/*"}" onchange="handleContentMediaUpload(event,'${e.key}')">
      <input type="hidden" name="${e.key}" id="val-${e.key}" value="${s(i)}">
      <div class="flex gap-2 mt-1.5">
        <input class="input-field text-xs flex-1" id="url-${e.key}" value="${s(i)}" placeholder="Or paste ${a?"image":"video"} URL" oninput="document.getElementById('val-${e.key}').value=this.value">
      </div>
    </div>`}window.triggerContentMediaUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearContentMedia=function(e){const t=document.getElementById("val-"+e),a=document.getElementById("url-"+e);t&&(t.value=""),a&&(a.value=""),u("Cleared. Save to apply.","info"),Ca()};window.handleContentMediaUpload=async function(e,t){const a=e.target.files?.[0];if(a){a.type.startsWith("video/"),u(`Uploading ${a.name}…`,"info");try{const{data:{session:i}}=await p.auth.getSession();if(!i){u("Sign in to upload media","error");return}const o=(a.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),r=`content/${t}-${Date.now()}.${o}`,{error:n}=await p.storage.from("product-images").upload(r,a,{contentType:a.type,upsert:!1});if(n){u("Upload failed: "+n.message,"error");return}const{data:l}=p.storage.from("product-images").getPublicUrl(r),c=l.publicUrl,d=document.getElementById("val-"+t),m=document.getElementById("url-"+t);d&&(d.value=c),m&&(m.value=c);const y=document.getElementById("slot-"+t);if(y){const g=Bt.flatMap(f=>f.fields).find(f=>f.key===t);g&&(y.outerHTML=Aa(g,c))}u("✓ Uploaded — save to apply","success")}catch{u("Upload failed","error")}}};async function Ca(){const e=document.getElementById("content");try{const{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a={...Da,...t||{}};e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div>
          <h2 class="text-xl font-black text-white">Content Settings</h2>
          <p class="text-xs text-gray-400 mt-1">Edit the wording of the two shared sections below. Save once and every page updates automatically — no code needed. Your products, prices, reviews, orders and design are never touched.</p>
        </div>
        <form id="content-settings-form" onsubmit="saveContentSettings(event)" class="space-y-5">
          ${Bt.map(i=>`
            <div class="glass-soft border border-white/10 rounded-2xl p-5">
              <div class="flex items-center gap-2.5 mb-1">
                <span class="w-2 h-2 rounded-full bg-gradient-to-r ${i.accent}"></span>
                <h3 class="text-sm font-black text-white tracking-wide">${i.title}</h3>
              </div>
              <p class="text-[11px] text-gray-400 mb-4">${i.desc}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${i.fields.map(o=>`
                  <div class="${o.type==="textarea"||o.type==="media"?"sm:col-span-2":""}">
                    ${o.type==="checkbox"?`<label class="flex items-center gap-2.5 cursor-pointer select-none py-2">
                           <input id="cs-${o.key}" type="checkbox" name="${o.key}" ${a[o.key]?"checked":""} class="w-4 h-4 accent-blue-500 rounded">
                           <span class="text-sm font-bold text-gray-200">${o.label}</span>
                         </label>`:`<label class="lbl" for="cs-${o.key}">${o.label}</label>`}
                    ${o.type==="textarea"?`<textarea id="cs-${o.key}" name="${o.key}" rows="3" class="input-field w-full" placeholder="Enter the current wording…">${s(a[o.key]||"")}</textarea>`:o.type==="media"?Aa(o,a[o.key]||""):o.type==="checkbox"?"":`<input id="cs-${o.key}" type="text" name="${o.key}" value="${s(a[o.key]||"")}" class="input-field w-full" placeholder="Enter the current wording…">`}
                    ${o.type==="text"||o.type==="textarea"?`<p class="text-[10px] text-gray-500 mt-1">Current: ${s((a[o.key]||"").slice(0,80))}${(a[o.key]||"").length>80?"…":""}</p>`:""}
                  </div>`).join("")}
              </div>
            </div>`).join("")}
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save Content</button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}window.saveContentSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,o]of t.entries())a[i]=o;for(const i of Bt)for(const o of i.fields)o.type==="checkbox"&&!(o.key in a)?a[o.key]=!1:o.type==="checkbox"&&(a[o.key]=!0);try{const{data:i}=await p.from("site_settings").select("id").limit(1).maybeSingle();let o;if(i?.id?{error:o}=await p.from("site_settings").update(a).eq("id",i.id):{error:o}=await p.from("site_settings").insert({id:1,...a}),o)throw new Error(o.message);Ua(),u("Content updated — the banners now use your new words and uploads.","success")}catch(i){u(i.message||"Could not save content. Please try again.","error")}};async function uo(){const e=document.getElementById("content");try{const[t,a,i]=await Promise.all([p.from("payment_receipts").select("amount,currency,status,created_at").order("created_at",{ascending:!1}).limit(500),p.from("showroom_listings").select("id,listing_type,category,is_active",{count:"exact"}),p.from("profiles").select("user_id,created_at",{count:"exact"})]),o=t.data||[],r=o.filter(d=>["approved","payment_approved","delivered"].includes(d.status)).reduce((d,m)=>d+(parseFloat(m.amount)||0),0),n=o.length>0?(o.filter(d=>d.status!=="cancelled").length/o.length*100).toFixed(1):0,l={};(a.data||[]).forEach(d=>{l[d.category]=(l[d.category]||0)+1});const c=Object.entries(l).sort((d,m)=>m[1]-d[1]).slice(0,8);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Analytics</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          ${N("Total Revenue",`$${r.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald")}
          ${N("Total Orders",o.length,"shopping-bag","blue")}
          ${N("Customers",i.count||0,"users","violet")}
          ${N("Conversion Rate",n+"%","trending-up","amber")}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="bar-chart-3" class="w-4 h-4 text-blue-400"></i> Revenue (Last 6 Months)</h3>
            <canvas id="analytics-chart" height="220"></canvas>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="pie-chart" class="w-4 h-4 text-violet-400"></i> Top Categories by Listings</h3>
            ${c.length===0?'<p class="text-xs text-gray-500 text-center py-8">No data</p>':c.map(([d,m])=>`
              <div class="flex items-center gap-3 py-1.5">
                <span class="text-xs text-gray-300 flex-1 truncate">${s(d)}</span>
                <div class="w-24 h-2 bg-blue-500/10 rounded-full overflow-hidden"><div class="h-full bg-blue-500 rounded-full" style="width:${Math.round(m/c[0][1]*100)}%"></div></div>
                <span class="text-xs font-bold text-white w-6 text-right">${m}</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),ma(o)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}async function po(){const e=document.getElementById("content"),{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">SEO Manager</h2>
      <form id="seo-form" onsubmit="saveSeo(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Homepage SEO</h3>
          <div><label class="lbl">Meta Title</label><input class="input-field" name="meta_title" value="${s(a.meta_title||"")}" placeholder="Weverse Online Shop | Premium International Commerce"></div>
          <div><label class="lbl">Meta Description</label><textarea class="input-field" name="meta_description" rows="2" placeholder="Your trusted global shop…">${s(a.meta_description||"")}</textarea></div>
          <div><label class="lbl">Meta Keywords (comma separated)</label><input class="input-field" name="meta_keywords" value="${s(a.meta_keywords||"")}" placeholder="global marketplace, online shopping, …"></div>
          <div><label class="lbl">Canonical URL</label><input class="input-field" name="canonical_url" value="${s(a.canonical_url||"")}" placeholder="https://yoursite.com"></div>
          <div><label class="lbl">OG Image URL (Social share image)</label><input class="input-field" name="og_image" value="${s(a.og_image||"")}" placeholder="https://…/og-image.jpg"></div>
          <div><label class="lbl">Google Analytics ID</label><input class="input-field" name="ga_id" value="${s(a.ga_id||"")}" placeholder="G-XXXXXXXXXX"></div>
          <div><label class="lbl">Google Search Console Verification</label><input class="input-field" name="gsc_verify" value="${s(a.gsc_verify||"")}" placeholder="Verification meta tag content"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save SEO Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSeo=async function(e){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());await p.from("site_settings").upsert({id:1,...t}),u("SEO settings saved!")};async function mo(){const e=document.getElementById("content"),{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
          <div><label class="lbl">Sender Name</label><input class="input-field" name="email_from_name" value="${s(a.email_from_name||"")}" placeholder="Weverse Online Shop"></div>
          <div><label class="lbl">Reply-To Email</label><input type="email" class="input-field" name="email_reply_to" value="${s(a.email_reply_to||"")}" placeholder="support@example.com"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save Email Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveEmailSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,o]of t.entries())a[i]=o;["email_order_placed","email_order_shipped","email_order_delivered","email_review_request"].forEach(i=>{i in a?a[i]=!0:a[i]=!1}),await p.from("site_settings").upsert({id:1,...a}),u("Email settings saved!")};async function Ye(){const e=document.getElementById("content");e&&(e.innerHTML=fe());try{const[t,a,i]=await Promise.all([p.from("admin_security_logs").select("*").order("created_at",{ascending:!1}).limit(50),p.from("admin_2fa").select("enabled,backup_codes,created_at").eq("user_id",S.user?.id).maybeSingle(),p.auth.mfa.listFactors()]),o=t.data||[],r=a.data||{},n=(i.data?.totp||[])[0],l=!!n&&n.status==="verified",c=(r.backup_codes||[]).filter(d=>!d.used).length;e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Security</h2>

        <!-- 2FA STATUS BANNER -->
        <div class="p-4 rounded-xl border flex items-center gap-4 ${l?"bg-emerald-500/5 border-emerald-500/20":"bg-amber-500/5 border-amber-500/20"}">
          <div class="w-10 h-10 ${l?"bg-emerald-500/10":"bg-amber-500/10"} rounded-xl flex items-center justify-center shrink-0">
            <i data-lucide="${l?"shield-check":"shield-alert"}" class="w-5 h-5 ${l?"text-emerald-400":"text-amber-400"}"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm font-black ${l?"text-emerald-300":"text-amber-300"}">Two-Factor Authentication is ${l?"ENABLED ✓":"NOT ENABLED"}</p>
            <p class="text-xs text-gray-400 mt-0.5">${l?`Backup codes available: ${c} · Enrolled: ${J(r.created_at)}`:"Enable 2FA to protect your admin account with an authenticator app."}</p>
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
            ${(r.backup_codes||[]).length===0?'<p class="text-xs text-gray-500 col-span-2 text-center py-4">No backup codes generated. Click Regenerate to create them.</p>':(r.backup_codes||[]).map(d=>`<code class="font-mono text-xs px-3 py-2 ${d.used?"bg-gray-900 text-gray-600 line-through":"bg-blue-500/5 text-blue-300 border border-blue-500/15"} rounded-lg">${typeof d=="object"?d.code:d}</code>`).join("")}
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
                <p class="text-[11px] text-gray-500">${s(navigator.userAgent.slice(0,60))}…</p>
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
                ${o.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No security events yet</td></tr>':o.map(d=>{const m=["login_success","login_2fa_success"].includes(d.event_type),y=["login_failed","login_denied","login_backup_code_used"].includes(d.event_type),g=m?"text-emerald-400":y?"text-red-400":"text-gray-300",f={login_success:"Login ✓",login_failed:"Failed Login ✗",login_denied:"Access Denied ✗",login_2fa_success:"2FA Verified ✓",login_backup_code_used:"Backup Code Used",logout:"Logged Out",logout_all_devices:"Logout All Devices"}[d.event_type]||d.event_type;return`<tr>
                      <td><span class="text-xs font-bold ${g}">${s(f)}</span></td>
                      <td><span class="text-xs font-mono text-gray-300">${s(d.ip_address||"—")}</span></td>
                      <td class="hidden sm:table-cell"><span class="text-xs text-gray-500 max-w-[160px] block truncate">${s((d.user_agent||"—").slice(0,50))}</span></td>
                      <td><span class="text-xs text-gray-500">${se(d.created_at)}</span></td>
                    </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,document.getElementById("new-pw")?.addEventListener("input",d=>{const m=d.target.value,y=[{label:"8+ characters",ok:m.length>=8},{label:"Uppercase letter",ok:/[A-Z]/.test(m)},{label:"Number",ok:/[0-9]/.test(m)},{label:"Special character",ok:/[^a-zA-Z0-9]/.test(m)}];document.getElementById("pw-strength").innerHTML=y.map(g=>`<div class="flex items-center gap-1.5 text-[10px] ${g.ok?"text-emerald-400":"text-gray-600"}">
          <i data-lucide="${g.ok?"check-circle":"circle"}" class="w-3 h-3"></i>${g.label}</div>`).join(""),window.lucide&&lucide.createIcons()}),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}window.changePassword=async function(e){e.preventDefault();const t=document.getElementById("current-pw").value,a=document.getElementById("new-pw").value,i=document.getElementById("confirm-pw").value;if(a!==i){u("Passwords do not match","error");return}if(a.length<8){u("Password must be at least 8 characters","error");return}const{error:o}=await p.auth.signInWithPassword({email:S.user.email,password:t});if(o){u("Current password is incorrect","error");return}const{error:r}=await p.auth.updateUser({password:a});if(r){u(r.message,"error");return}await ee(S.user.id,"password_changed"),u("Password updated successfully!"),e.target.reset(),document.getElementById("pw-strength").innerHTML=""};window.setup2FAFlow=async function(){U(`
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
    </div>`),window.lucide&&lucide.createIcons();try{const{data:e,error:t}=await p.auth.mfa.enroll({factorType:"totp",friendlyName:"Weverse Admin"});if(t)throw t;const a=e.totp.qr_code,i=e.totp.secret,o=e.id;document.getElementById("2fa-setup-content").innerHTML=`
      <div class="space-y-5">
        <div class="p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300">
          <strong>Step 1:</strong> Open your authenticator app (Google Authenticator, Authy, or similar).<br>
          <strong>Step 2:</strong> Scan the QR code below or enter the secret manually.<br>
          <strong>Step 3:</strong> Enter the 6-digit code shown in your app.
        </div>
        <div class="flex flex-col items-center gap-4">
          <div class="bg-white p-3 rounded-xl">
            <img src="${s(a)}" alt="QR Code" class="w-44 h-44" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-500 w-44 text-center&quot;>QR code unavailable. Use the secret below.</p>'">
          </div>
          <div class="w-full">
            <label class="lbl">Or enter this secret manually</label>
            <div class="flex gap-2">
              <code class="flex-1 input-field font-mono text-xs text-emerald-300 select-all">${s(i)}</code>
              <button onclick="navigator.clipboard.writeText('${s(i)}').then(()=>showToast('Copied!'))" class="btn-press p-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl transition text-blue-400"><i data-lucide="copy" class="w-4 h-4"></i></button>
            </div>
          </div>
        </div>
        <div>
          <label class="lbl">Enter 6-digit code from app *</label>
          <input type="text" id="setup-totp-code" inputmode="numeric" maxlength="6" class="input-field text-center text-xl font-black tracking-[0.5em] py-3" placeholder="000000" autocomplete="one-time-code">
        </div>
        <div id="setup-2fa-error" class="hidden p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs"></div>
        <button onclick="confirm2FAEnrollment('${s(o)}')" class="btn-press w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2">
          <i data-lucide="shield-check" class="w-4 h-4"></i> Verify & Enable 2FA
        </button>
      </div>`,window.lucide&&lucide.createIcons(),setTimeout(()=>document.getElementById("setup-totp-code")?.focus(),100),document.getElementById("setup-totp-code")?.addEventListener("input",r=>{r.target.value=r.target.value.replace(/\D/g,"").slice(0,6)})}catch(e){document.getElementById("2fa-setup-content").innerHTML=`<div class="text-red-400 text-sm text-center py-4">${s(e.message)}</div>`}};window.confirm2FAEnrollment=async function(e){const t=document.getElementById("setup-totp-code")?.value?.trim(),a=document.getElementById("setup-2fa-error");if(!t||t.length!==6){a&&(a.textContent="Enter the 6-digit code.",a.classList.remove("hidden"));return}try{const{data:i,error:o}=await p.auth.mfa.challenge({factorId:e});if(o)throw o;const{error:r}=await p.auth.mfa.verify({factorId:e,challengeId:i.id,code:t});if(r)throw r;const n=Ta(10);await p.from("admin_2fa").upsert({user_id:S.user.id,enabled:!0,backup_codes:n}),await ee(S.user.id,"2fa_enrolled"),ae(),La(n.map(l=>l.code)),Ye()}catch(i){const o=document.getElementById("setup-2fa-error");o&&(o.textContent=i.message?.includes("Invalid")?"Wrong code. Check your app and try again.":i.message,o.classList.remove("hidden")),document.getElementById("setup-totp-code").value="",document.getElementById("setup-totp-code").focus()}};function Ta(e){const t=[];for(let a=0;a<e;a++){const i=Array.from({length:16},()=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random()*32)]).join("");t.push({code:`${i.slice(0,4)}-${i.slice(4,8)}-${i.slice(8,12)}-${i.slice(12,16)}`,used:!1})}return t}function La(e){U(`
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
          ${e.map(t=>`<code class="font-mono text-xs px-3 py-2 bg-blue-500/5 text-blue-300 border border-blue-500/15 rounded-lg text-center select-all">${s(t)}</code>`).join("")}
        </div>
        <div class="flex gap-3">
          <button onclick="copyBackupCodes([${e.map(t=>`'${t}'`).join(",")}])" class="btn-press flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-xl text-xs transition"><i data-lucide="copy" class="w-4 h-4"></i> Copy All</button>
          <button onclick="downloadBackupCodes([${e.map(t=>`'${t}'`).join(",")}])" class="btn-press flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded-xl text-xs transition"><i data-lucide="download" class="w-4 h-4"></i> Download</button>
          <button onclick="closeModal()" class="btn-press px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-xl text-xs transition">Done</button>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()}window.copyBackupCodes=function(e){navigator.clipboard.writeText(e.join(`
`)).then(()=>u("Backup codes copied!"))};window.downloadBackupCodes=function(e){const t=new Blob([`Weverse Admin Backup Codes
Generated: ${new Date().toISOString()}

${e.join(`
`)}

Each code works once. Store securely.`],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download="kco-admin-backup-codes.txt",a.click()};window.regenerateBackupCodes=async function(){if(!confirm("This will invalidate ALL existing backup codes. Continue?"))return;const e=Ta(10);await p.from("admin_2fa").update({backup_codes:e}).eq("user_id",S.user.id),u("New backup codes generated"),La(e.map(t=>t.code)),Ye()};window.disable2FA=async function(){if(confirm("Disable two-factor authentication? Your account will be less secure."))try{const{data:e}=await p.auth.mfa.listFactors(),t=(e?.totp||[])[0];if(t){const{error:a}=await p.auth.mfa.unenroll({factorId:t.id});if(a)throw a}await p.from("admin_2fa").update({enabled:!1}).eq("user_id",S.user.id),await ee(S.user.id,"2fa_disabled"),u("2FA has been disabled"),Ye()}catch(e){u(e.message,"error")}};async function bo(){const e=document.getElementById("content");try{const{data:t}=await p.from("admin_activity_logs").select("*").order("created_at",{ascending:!1}).limit(100);e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Activity Logs</h2>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Action</th><th>Entity</th><th class="hidden sm:table-cell">Admin</th><th>Date</th></tr></thead>
              <tbody>
                ${(t||[]).length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No activity yet</td></tr>':(t||[]).map(a=>`<tr>
                    <td><span class="text-xs font-bold text-white">${s(a.action)}</span></td>
                    <td><span class="text-xs text-gray-400">${s(a.entity_type||"—")} <span class="text-gray-600">${s(a.entity_id?.slice(0,8)||"")}</span></span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-blue-400">${s(a.user_email||a.user_id?.slice(0,8)||"—")}</span></td>
                    <td><span class="text-xs text-gray-500">${se(a.created_at)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}async function go(){const e=document.getElementById("content");try{const{data:t}=await p.from("deployment_history").select("*").order("created_at",{ascending:!1}).limit(20);e.innerHTML=`
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
                <div class="flex-1"><p class="text-xs font-bold text-white">${s(a.version||a.id?.slice(0,8))}</p><p class="text-[10px] text-gray-500">${se(a.created_at)}</p></div>
                ${j(a.status||"completed")}
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}window.exportProducts=async function(){const{data:e}=await p.from("showroom_listings").select("*"),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download=`kco-products-${new Date().toISOString().slice(0,10)}.json`,a.click(),u("Products exported!")};window.exportOrders=async function(){const{data:e}=await p.from("payment_receipts").select("*").order("created_at",{ascending:!1});if(!e||!e.length){u("No orders to export","info");return}const t=Object.keys(e[0]).join(","),a=e.map(r=>Object.values(r).map(n=>`"${String(n||"").replace(/"/g,'""')}"`).join(",")).join(`
`),i=new Blob([t+`
`+a],{type:"text/csv"}),o=document.createElement("a");o.href=URL.createObjectURL(i),o.download=`kco-orders-${new Date().toISOString().slice(0,10)}.csv`,o.click(),u("Orders exported!")};async function yo(){const e=document.getElementById("content"),{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
            <div><label class="lbl">Timezone</label><input class="input-field" name="timezone" value="${s(a.timezone||"UTC")}" placeholder="UTC"></div>
            <div><label class="lbl">Low Stock Threshold</label><input type="number" class="input-field" name="low_stock_threshold" value="${s(a.low_stock_threshold||10)}" min="1"></div>
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
    </div>`,window.lucide&&lucide.createIcons()}window.saveSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,o]of t.entries())a[i]=o;["maintenance_mode","reviews_enabled","wishlist_enabled","guest_checkout"].forEach(i=>{a[i]=i in a}),await p.from("site_settings").upsert({id:1,...a}),u("Settings saved!")};async function Je(){const e=document.getElementById("content");e&&(e.innerHTML=fe());try{const{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{},i=a.homepage_banner_image||"",o=a.homepage_banner_alt||"Homepage header banner",r=i?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.";e.innerHTML=`
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
                ${i?`<img id="homepage-banner-preview-img" src="${s(i)}" alt="${s(o)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-off" class="mx-auto w-8 h-8 text-gray-500"></i><p class="mt-2 text-xs font-semibold text-gray-500">No banner selected</p></div></div>'}
              </div>
            </div>
            <div class="px-4 py-3 border-t border-white/5 bg-[#0b1020] flex items-center gap-2 text-[11px] text-gray-400">
              <i data-lucide="crop" class="w-3.5 h-3.5 text-blue-400"></i>
              <span>Crop / resize is previewed in a fixed banner frame. Wide images work best.</span>
            </div>
          </div>
          <p id="homepage-banner-preview-note" class="text-[10px] text-gray-500">${s(r)}</p>
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
                      ${i?`<img id="homepage-banner-image" src="${s(i)}" alt="${s(o)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-plus" class="mx-auto w-8 h-8 text-blue-400"></i><p class="mt-2 text-xs font-semibold text-gray-400">Upload a homepage banner</p></div></div>'}
                    </div>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <button type="button" onclick="triggerImgUpload('homepage_banner_image')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">${i?"Replace Image":"Upload Image"}</button>
                      <button type="button" onclick="clearHomepageBannerImg()" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove Image</button>
                      <button type="button" onclick="restoreHomepageBannerDefault()" class="text-xs font-bold text-white bg-slate-700 px-3 py-1.5 rounded-lg">Restore Default</button>
                    </div>
                  </div>
                </div>
                <input type="file" id="file-homepage_banner_image" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'homepage_banner_image')">
                <input type="hidden" name="homepage_banner_image" id="val-homepage_banner_image" value="${s(i)}">
                <input type="text" id="url-homepage_banner_image" value="${s(i)}" placeholder="Or paste image URL" oninput="document.getElementById('val-homepage_banner_image').value=this.value;updateHomepageBannerPreview()" class="input-field text-xs">
                <p class="text-[10px] text-gray-500">Use a wide image for the cleanest banner. The homepage frame will crop/resize it automatically.</p>
              </div>

              <div class="space-y-3">
                <div>
                  <label class="lbl">Banner Alt Text</label>
                  <textarea class="input-field" id="homepage_banner_alt" name="homepage_banner_alt" rows="4" placeholder="Accessible description for the banner image">${s(o)}</textarea>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}async function Qe(){const e=document.getElementById("content");e&&(e.innerHTML=fe());try{let t=function(l,c,d,m="",y="blue"){const g=!!(d&&d.trim());return`
        <div class="glass-soft border border-${y}-500/15 rounded-xl p-4 space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-xs font-black text-white">${s(l)}</p>
            ${g?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">✓ Uploaded</span>':'<span class="text-[9px] text-gray-600">Empty</span>'}
          </div>
          ${g?`<div class="relative group w-full h-24 rounded-xl overflow-hidden bg-gray-900 border border-blue-500/10 flex items-center justify-center">
                <img src="${s(d)}" alt="${s(l)}" class="max-h-20 max-w-full object-contain p-2" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-600 text-center&quot;>Image broken</p>'">
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                  <button type="button" onclick="triggerImgUpload('${c}')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">Replace</button>
                  <button type="button" onclick="clearBrandImg('${c}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
                </div>
               </div>`:`<div class="w-full h-24 rounded-xl border-2 border-dashed border-${y}-500/25 hover:border-${y}-500/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition" onclick="triggerImgUpload('${c}')">
                <i data-lucide="image-plus" class="w-7 h-7 text-${y}-400"></i>
                <p class="text-[11px] text-gray-500">Click to upload</p>
               </div>`}
          ${m?`<p class="text-[10px] text-gray-500">${s(m)}</p>`:""}
          <input type="file" id="file-${c}" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'${c}')">
          <input type="hidden" name="${c}" id="val-${c}" value="${s(d||"")}">
          <div class="flex gap-2">
            <input class="input-field text-xs flex-1 ${g?"":"hidden"}" id="url-${c}" value="${s(d||"")}" placeholder="Or paste image URL" oninput="document.getElementById('val-${c}').value=this.value;updateLivePreview()">
            <button type="button" onclick="document.getElementById('url-${c}').classList.toggle('hidden')" class="text-[10px] text-${y}-400 hover:text-${y}-300 transition shrink-0">${g?"Edit URL":"Paste URL"}</button>
          </div>
        </div>`};const{data:a}=await p.from("site_settings").select("*").limit(1).maybeSingle(),i=a||{},o=i.brand_name||i.site_name||Zt,r=i.brand_slogan||i.site_tagline||ea,n=i.brand_logo||i.brand_header_logo||"";e.innerHTML=`
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
                ${n?`<img src="${s(n)}" alt="${s(o)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
              </div>
              <div>
                <p id="preview-name" class="text-sm font-black text-white leading-none">${s(o)}</p>
                <p id="preview-slogan" class="text-[10px] text-blue-400 font-semibold mt-0.5">${s(r)}</p>
              </div>
              <div id="preview-badge-wrap" class="ml-auto ${i.brand_badge?"":"hidden"}">
                <img id="preview-badge" src="${s(i.brand_badge||"")}" alt="Verified" class="w-6 h-6 object-contain">
              </div>
            </div>
            <div class="px-4 py-2 border-t border-gray-800 text-[11px] text-gray-500" style="background:#070b16">
              <span id="preview-btn" style="background:${s(i.brand_primary_color||"#f97316")};color:#000;padding:4px 12px;border-radius:8px;font-weight:700;font-size:11px">Shop Now</span>
              <span class="ml-3" style="color:${s(i.brand_secondary_color||"#3b82f6")}">All Products →</span>
            </div>
          </div>
          <!-- Footer preview -->
          <div id="preview-footer" class="rounded-xl px-4 py-3 border border-gray-800 flex items-center gap-3" style="background:#0f172a">
            <div id="preview-footer-logo-wrap" class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style="background:var(--preview-primary,#f97316)">
              ${n?`<img src="${s(n)}" alt="${s(o)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
            </div>
            <div>
              <p id="preview-footer-name" class="text-xs font-black text-white">${s(o)}</p>
              <p id="preview-footer-slogan" class="text-[10px] text-gray-500">${s(r)}</p>
            </div>
            <p class="ml-auto text-[10px] text-gray-600">© 2026 <span id="preview-copy-name">${s(o)}</span></p>
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
                <input class="input-field" name="brand_name" id="inp-brand-name" value="${s(o)}" placeholder="Your brand name" required oninput="updateLivePreview()">
              </div>
              <div>
                <label class="lbl">Short Name</label>
                <input class="input-field" name="brand_short_name" value="${s(i.brand_short_name||"")}" placeholder="e.g. Weverse">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Slogan / Tagline *</label>
                <input class="input-field" name="brand_slogan" id="inp-brand-slogan" value="${s(r)}" placeholder="e.g. Global Shopping • Worldwide Delivery" oninput="updateLivePreview()">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Brand Description</label>
                <textarea class="input-field" name="brand_description" rows="2" placeholder="Short description…">${s(i.brand_description||"")}</textarea>
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
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-primary" value="${s(i.brand_primary_color||"#f97316")}" oninput="document.getElementById('ct-primary').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-primary" name="brand_primary_color" value="${s(i.brand_primary_color||"#f97316")}" placeholder="#f97316" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-primary').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Secondary Color (links, highlights)</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-secondary" value="${s(i.brand_secondary_color||"#3b82f6")}" oninput="document.getElementById('ct-secondary').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-secondary" name="brand_secondary_color" value="${s(i.brand_secondary_color||"#3b82f6")}" placeholder="#3b82f6" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-secondary').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Tagline Color 1 (e.g. "GLOBAL SHOPPING")</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-tag1" value="${s(i.brand_tagline_color1||"#22d3ee")}" oninput="document.getElementById('ct-tag1').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-tag1" name="brand_tagline_color1" value="${s(i.brand_tagline_color1||"#22d3ee")}" placeholder="#22d3ee" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-tag1').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Tagline Color 2 (e.g. "WORLDWIDE DELIVERY")</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-tag2" value="${s(i.brand_tagline_color2||"#a3e635")}" oninput="document.getElementById('ct-tag2').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-tag2" name="brand_tagline_color2" value="${s(i.brand_tagline_color2||"#a3e635")}" placeholder="#a3e635" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-tag2').value=this.value;updateLivePreview()">
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
                <input class="input-field" name="brand_custom_font" value="${s(i.brand_custom_font||"")}" placeholder="e.g. Space Grotesk">
              </div>
            </div>
            <div id="font-preview" class="p-3 rounded-xl bg-gray-900 border border-blue-500/10">
              <p id="font-sample" class="text-sm text-white font-bold" style="font-family:'${s(i.brand_font||"Inter")}',sans-serif">The quick brown fox jumps — 0123456789 · Weverse Online Shop</p>
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
              ${t("Brand Logo / Banner Image","brand_logo",n,"Upload your image here. This changes only the logo/banner image and keeps the other brand fields as they are.")}
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
              <div><label class="lbl">Website URL</label><input class="input-field" name="brand_website_url" value="${s(i.brand_website_url||i.production_url||"https://weverseonlineshop.com")}" placeholder="https://…"></div>
              <div><label class="lbl">Support Email</label><input type="email" class="input-field" name="brand_email" value="${s(i.brand_email||i.contact_email||"")}" placeholder="support@…"></div>
              <div><label class="lbl">Phone / WhatsApp</label><input class="input-field" name="brand_phone" value="${s(i.brand_phone||i.contact_phone||"")}" placeholder="+1 234…"></div>
              <div><label class="lbl">Business Address</label><input class="input-field" name="brand_address" value="${s(i.brand_address||i.contact_address||"")}" placeholder="City, Country"></div>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}window.toggleLivePreview=function(){document.getElementById("live-preview-panel")?.classList.toggle("hidden"),updateLivePreview()};window.updateLivePreview=function(){const e=document.getElementById("live-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("inp-brand-name")?.value||Zt,a=document.getElementById("inp-brand-slogan")?.value||ea,i=document.getElementById("ct-primary")?.value||"#f97316",o=document.getElementById("ct-secondary")?.value||"#3b82f6",r=document.getElementById("ct-tag1")?.value||"#22d3ee",n=document.getElementById("ct-tag2")?.value||"#a3e635",l=document.getElementById("val-brand_logo")?.value||DEFAULT_BRAND_LOGO,c=document.getElementById("val-brand_badge")?.value||"";["preview-name","preview-footer-name","preview-copy-name"].forEach(b=>{const v=document.getElementById(b);v&&(v.textContent=t)}),["preview-slogan","preview-footer-slogan"].forEach(b=>{const v=document.getElementById(b);v&&(v.textContent=a)});const d=document.getElementById("preview-slogan");if(d&&a){const b=a,v=b.indexOf(","),w=v>-1?b.slice(0,v+1):b,P=v>-1?b.slice(v+1):"";d.innerHTML=`<span style="color:${r};font-weight:800">${s(w)}</span><span style="color:${n};font-weight:700">${s(P)}</span>`}const m=document.getElementById("preview-btn");m&&(m.style.background=i);const y=e.querySelector('[style*="color:"]');y&&(y.style.color=o),["preview-logo-wrap","preview-footer-logo-wrap"].forEach(b=>{const v=document.getElementById(b);v&&(l?(v.innerHTML=`<img src="${l}" alt="${t}" class="w-full h-full object-contain p-1">`,v.style.background="transparent"):(v.innerHTML='<i data-lucide="globe" class="w-4 h-4 text-white"></i>',v.style.background=i,window.lucide&&lucide.createIcons()))});const g=document.getElementById("preview-badge-wrap"),f=document.getElementById("preview-badge");g&&f&&(c?(f.src=c,g.classList.remove("hidden")):g.classList.add("hidden"))};window.triggerImgUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearBrandImg=function(e){document.getElementById("val-"+e).value="";const t=document.getElementById("url-"+e);t&&(t.value=""),(e&&e.startsWith("homepage_")?Je:Qe)()};window.clearHomepageBannerImg=function(){const e=document.getElementById("val-homepage_banner_image"),t=document.getElementById("url-homepage_banner_image"),a=document.getElementById("homepage_banner_alt");e&&(e.value=""),t&&(t.value=""),a&&(a.value=""),Je()};window.restoreHomepageBannerDefault=function(){window.clearHomepageBannerImg()};window.syncColor=function(e,t){const a=document.getElementById("color-"+e);a&&/^#[0-9a-fA-F]{6}$/.test(t)&&(a.value=t)};window.previewFont=function(e){const t=document.getElementById("font-sample");t&&(t.style.fontFamily=`'${e}', sans-serif`);const a="gf-preview";let i=document.getElementById(a);i||(i=document.createElement("link"),i.id=a,i.rel="stylesheet",document.head.appendChild(i)),i.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(e)}:wght@400;700;900&display=swap`};const bt="weverse_brand_v1",gt="weverse_brand_override_v1";function yt(){try{const e=JSON.parse(localStorage.getItem(gt)||"null");if(e&&typeof e=="object")return e}catch{}try{const e=JSON.parse(localStorage.getItem(bt)||"null");if(e&&typeof e=="object")return e.data&&typeof e.data=="object"?e.data:e}catch{}return{}}function Ue(e){const t={...yt(),...e};try{localStorage.setItem(gt,JSON.stringify(t))}catch{}try{localStorage.setItem(bt,JSON.stringify({ts:Date.now(),data:t}))}catch{}return window.dispatchEvent(new StorageEvent("storage",{key:gt})),window.dispatchEvent(new StorageEvent("storage",{key:bt})),window.dispatchEvent(new CustomEvent("brand-updated",{detail:t})),t}window.handleBrandImgUpload=async function(e,t){const a=e.target.files?.[0];if(!a)return;const i=t&&t.startsWith("homepage_"),o=document.getElementById(i?"homepage-banner-status":"brand-upload-status"),r=document.getElementById(i?"homepage-banner-msg":"brand-upload-msg");o&&o.classList.remove("hidden"),r&&(r.textContent=`Uploading ${a.name}…`);try{const n=a.name.split(".").pop(),l=`brand/${t}-${Date.now()}.${n}`,{error:c}=await p.storage.from("product-images").upload(l,a,{contentType:a.type,upsert:!0});let d;if(c)d=URL.createObjectURL(a),r&&(r.textContent=`Preview only (storage: ${c.message})`);else{const{data:g}=p.storage.from("product-images").getPublicUrl(l);d=g.publicUrl,r&&(r.textContent=`✓ ${a.name} uploaded`)}const m=document.getElementById("val-"+t),y=document.getElementById("url-"+t);m&&(m.value=d),y&&(y.value=d,y.classList.remove("hidden")),i?updateHomepageBannerPreview():(updateLivePreview(),setTimeout(()=>Qe(),1e3))}catch(n){r&&(r.textContent=`Upload failed: ${n.message}`)}setTimeout(()=>o?.classList.add("hidden"),4e3)};window.saveBrandSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[l,c]of t.entries())l.endsWith("_url")||(a[l]=c);a.brand_name&&(a.site_name=a.brand_name),a.brand_slogan&&(a.site_tagline=a.brand_slogan),a.brand_description&&(a.site_description=a.brand_description),a.brand_email&&(a.contact_email=a.brand_email),a.brand_phone&&(a.contact_phone=a.brand_phone),a.brand_address&&(a.contact_address=a.brand_address),a.brand_website_url&&(a.production_url=a.brand_website_url);const i=a.brand_custom_font||a.brand_font;i&&previewFont(i);const o=e.target.querySelector("[type=submit]");o&&(o.disabled=!0,o.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Saving…',window.lucide&&lucide.createIcons());const{data:r}=await p.from("site_settings").select("id").limit(1).maybeSingle();let n;r?.id?{error:n}=await p.from("site_settings").update(a).eq("id",r.id):{error:n}=await p.from("site_settings").insert(a),n?(Ue(a),u("Brand saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(Ue(a),u("✅ Brand saved! All pages will now show your updated brand.","success")),setTimeout(()=>Qe(),500)};window.toggleHomepageBannerPreview=function(){document.getElementById("homepage-banner-preview-panel")?.classList.toggle("hidden"),updateHomepageBannerPreview()};window.updateHomepageBannerPreview=function(){const e=document.getElementById("homepage-banner-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("val-homepage_banner_image")?.value||"",a=document.getElementById("homepage_banner_alt")?.value||"Homepage header banner",i=document.getElementById("homepage-banner-image"),o=document.getElementById("homepage-banner-preview-img");[i,o].forEach(n=>{n&&(t?(n.src=t,n.alt=a,n.classList.remove("hidden")):n.classList.add("hidden"))});const r=document.getElementById("homepage-banner-preview-note");r&&(r.textContent=t?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.")};window.saveHomepageBranding=async function(e){e.preventDefault();const t={homepage_banner_image:document.getElementById("url-homepage_banner_image")?.value||"",homepage_banner_alt:document.getElementById("homepage_banner_alt")?.value||"Homepage header banner"},a=e.target.querySelector("[type=submit]");a&&(a.disabled=!0,a.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishing…',window.lucide&&lucide.createIcons());const{data:i}=await p.from("site_settings").select("id").limit(1).maybeSingle();let o;i?.id?{error:o}=await p.from("site_settings").update(t).eq("id",i.id):{error:o}=await p.from("site_settings").insert(t),o?(Ue({...yt(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),u("Homepage banner saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(Ue({...yt(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),u("Homepage banner published.","success")),setTimeout(()=>Je(),500)};const qe=[{key:"trust_promo",label:"Promotional Hero (Trust & Info Area)",icon:"sparkles",desc:"The family-receives-orders section above the app banner. Show it as-is for the built-in design, or upload the real photo/video."},{key:"app_banner",label:"Weverse Mobile App Banner",icon:"smartphone",desc:"The dark app banner at the very bottom of every page."},{key:"reviews",label:"Customer Reviews & Trust",icon:"star",desc:"The customer reviews strip just below the accordions."}];async function Pe(e){const t=document.getElementById("content");t&&(t.innerHTML=fe());try{let a=e?{...e}:null;if(!a){const{data:i}=await p.from("site_settings").select("*").limit(1).maybeSingle(),o=i||{};a={};for(const r of qe)a[r.key+"_bg_image"]=o[r.key+"_bg_image"]||"",a[r.key+"_bg_video"]=o[r.key+"_bg_video"]||""}t.innerHTML=`
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white flex items-center gap-2"><i data-lucide="image" class="w-5 h-5 text-blue-400"></i> Promo & Backgrounds</h2>
        <p class="text-xs text-gray-500 max-w-2xl leading-relaxed">Choose an <b class="text-gray-300">image</b> and/or a <b class="text-gray-300">video</b> for each promotional section. When a video is set it plays automatically and the image acts as its poster. Leave a slot empty to keep that section’s built-in design. Changes appear instantly on every page after publishing.</p>

        <div id="promo-bg-status" class="hidden p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300 flex items-center gap-2">
          <i data-lucide="loader-2" class="w-4 h-4 animate-spin shrink-0"></i>
          <span id="promo-bg-msg">Uploading…</span>
        </div>

        <form id="promo-bg-form" onsubmit="savePromoBackgrounds(event)" class="space-y-5">
          ${qe.map(i=>fo(i,a)).join("")}

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 flex items-center gap-3">
            <i data-lucide="info" class="w-5 h-5 text-emerald-400 shrink-0"></i>
            <p class="text-[11px] text-gray-400 leading-relaxed">Published backgrounds are cached on visitor devices for up to a minute. Publishing clears the cache so everyone sees your new media immediately.</p>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">
            <i data-lucide="rocket" class="w-4 h-4 inline mr-2"></i>Publish Promo & Backgrounds
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(a){t&&(t.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}function fo(e,t){const a=e.key+"_bg_image",i=e.key+"_bg_video",o=t[a]||"",r=t[i]||"",n=!!(o&&o.trim()),l=!!(r&&r.trim());return`
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
          ${n?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">✓ Image</span>':""}
          ${l?'<span class="text-[9px] font-bold text-violet-500 bg-violet-500/10 px-1.5 py-0.5 rounded-full">✓ Video</span>':""}
          ${n||l?"":'<span class="text-[9px] text-gray-600">Built-in design</span>'}
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${jt(e,a,o,n,"image")}
        ${jt(e,i,r,l,"video")}
      </div>
    </div>`}function jt(e,t,a,i,o){const r=o==="image",n=r?"blue":"violet",l=r?"image-plus":"video",c=r?"text-blue-400":"text-violet-400";return`
    <div>
      <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5"><i data-lucide="${l}" class="w-3 h-3 ${c}"></i>${o}</p>
      ${i?`<div class="relative group w-full h-28 rounded-xl overflow-hidden bg-gray-900 border border-${n}-500/15 flex items-center justify-center">
             ${r?`<img src="${s(a)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`:`<video src="${s(a)}" class="w-full h-full object-cover" muted playsinline preload="metadata"></video>`}
             <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
               <button type="button" onclick="triggerPromoBgUpload('${t}')" class="text-xs font-bold text-white bg-${n}-600 px-3 py-1.5 rounded-lg">Replace</button>
               <button type="button" onclick="clearPromoBg('${t}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
             </div>
           </div>`:`<button type="button" onclick="triggerPromoBgUpload('${t}')" class="w-full h-28 rounded-xl border-2 border-dashed border-${n}-500/25 hover:border-${n}-500/50 flex flex-col items-center justify-center gap-1.5 transition">
             <i data-lucide="${l}" class="w-6 h-6 ${c}"></i>
             <p class="text-[10px] text-gray-500">Upload ${o}</p>
           </button>`}
      <input type="file" id="file-${t}" class="hidden" accept="${r?"image/*":"video/*"}" onchange="handlePromoBgUpload(event,'${t}')">
      <input type="hidden" name="${t}" id="val-${t}" value="${s(a)}">
      <div class="flex gap-2 mt-1.5">
        <input class="input-field text-xs flex-1" id="url-${t}" value="${s(a)}" placeholder="Or paste ${o} URL" oninput="document.getElementById('val-${t}').value=this.value">
        <button type="button" onclick="document.getElementById('url-${t}').classList.toggle('hidden')" class="text-[10px] text-${n}-400 hover:text-${n}-300 transition shrink-0">Edit URL</button>
      </div>
    </div>`}window.triggerPromoBgUpload=function(e){document.getElementById("file-"+e)?.click()};function Ba(){const e={};for(const t of qe)e[t.key+"_bg_image"]=document.getElementById("val-"+t.key+"_bg_image")?.value||"",e[t.key+"_bg_video"]=document.getElementById("val-"+t.key+"_bg_video")?.value||"";return e}window.clearPromoBg=function(e){const t=Ba();t[e]="";const a=document.getElementById("val-"+e),i=document.getElementById("url-"+e);a&&(a.value=""),i&&(i.value=""),Pe(t),u("Cleared. Publish to apply.","info")};window.handlePromoBgUpload=async function(e,t){const a=e.target.files?.[0];if(!a)return;const i=document.getElementById("promo-bg-status"),o=document.getElementById("promo-bg-msg");i&&i.classList.remove("hidden"),o&&(o.textContent=`Uploading ${a.name}…`);try{const r=(a.name.split(".").pop()||"bin").toLowerCase(),n=`promo/${t}-${Date.now()}.${r}`,{error:l}=await p.storage.from("product-images").upload(n,a,{contentType:a.type,upsert:!0});let c;if(l)c=URL.createObjectURL(a),o&&(o.textContent=`Preview only (storage: ${l.message})`);else{const{data:g}=p.storage.from("product-images").getPublicUrl(n);c=g.publicUrl,o&&(o.textContent=`✓ ${a.name} uploaded`)}const d=document.getElementById("val-"+t),m=document.getElementById("url-"+t);d&&(d.value=c),m&&(m.value=c,m.classList.remove("hidden"));const y=Ba();Pe(y)}catch(r){o&&(o.textContent=`Upload failed: ${r.message}`)}setTimeout(()=>i?.classList.add("hidden"),4e3)};window.savePromoBackgrounds=async function(e){e.preventDefault();const t={};for(const r of qe)t[r.key+"_bg_image"]=document.getElementById("val-"+r.key+"_bg_image")?.value||"",t[r.key+"_bg_video"]=document.getElementById("val-"+r.key+"_bg_video")?.value||"";const a=e.target.querySelector("[type=submit]");a&&(a.disabled=!0,a.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishing…',window.lucide&&lucide.createIcons());const{data:i}=await p.from("site_settings").select("id").limit(1).maybeSingle();let o;i?.id?{error:o}=await p.from("site_settings").update(t).eq("id",i.id):{error:o}=await p.from("site_settings").insert(t),Ja(),o?(u("Publish failed — the settings table rejected the update. Make sure the new promo-background columns are migrated, then try again.","error"),Pe(t)):(u("Promo & backgrounds published across all pages.","success"),setTimeout(()=>Pe(),500))};window._manualPaymentAccounts=[];function Mt(e="USD"){return{id:`bank-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,currency:e,currencyName:e,flag:Ht("US"),country:"United States",country_code:"US",bankName:"",transferType:"Local & International",beneficiary:"",accountNumber:"",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:""}}function Ft(){const e=document.getElementById("manual-payment-accounts-json");e&&(e.value=JSON.stringify(window._manualPaymentAccounts||[]))}function ho(e,t){const a=e.country_code||"US";return`
    <div class="p-4 glass-soft border border-blue-500/10 rounded-xl space-y-3">
      <div class="flex items-center justify-between gap-3">
        <h4 class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="building-2" class="w-3.5 h-3.5 text-blue-400"></i> Bank Account ${t+1}</h4>
        <button type="button" onclick="removeManualPaymentAccount(${t})" class="text-[11px] font-bold text-red-400 hover:text-red-300 transition">Remove</button>
      </div>
      <div class="form-grid form-grid-2">
        <div><label class="lbl">Currency *</label><select class="input-field" onchange="updateManualPaymentAccount(${t}, 'currency', this.value)">${ta.map(i=>`<option value="${i}" ${e.currency===i?"selected":""}>${i}</option>`).join("")}</select></div>
        <div><label class="lbl">Country *</label><select class="input-field" onchange="updateManualPaymentCountry(${t}, this.value)">${ba(a)}</select></div>
        <div><label class="lbl">Beneficiary / Account Name *</label><input class="input-field" value="${s(e.beneficiary||"")}" placeholder="Full name on account" oninput="updateManualPaymentAccount(${t}, 'beneficiary', this.value)"></div>
        <div><label class="lbl">Bank Name *</label><input class="input-field" value="${s(e.bankName||"")}" placeholder="e.g. Citibank" oninput="updateManualPaymentAccount(${t}, 'bankName', this.value)"></div>
        <div><label class="lbl">Account Number</label><input class="input-field font-mono" value="${s(e.accountNumber||"")}" placeholder="Account number" oninput="updateManualPaymentAccount(${t}, 'accountNumber', this.value)"></div>
        <div><label class="lbl">Transfer Type</label><input class="input-field" value="${s(e.transferType||"")}" placeholder="Local & International" oninput="updateManualPaymentAccount(${t}, 'transferType', this.value)"></div>
        <div><label class="lbl">Account Type</label><input class="input-field" value="${s(e.accountType||"")}" placeholder="Checking, Savings..." oninput="updateManualPaymentAccount(${t}, 'accountType', this.value)"></div>
        <div><label class="lbl">IBAN</label><input class="input-field font-mono" value="${s(e.iban||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'iban', this.value)"></div>
        <div><label class="lbl">SWIFT / BIC</label><input class="input-field font-mono" value="${s(e.swift||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'swift', this.value)"></div>
        <div><label class="lbl">Routing / ABA</label><input class="input-field font-mono" value="${s(e.routing||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'routing', this.value)"></div>
        <div><label class="lbl">Sort Code</label><input class="input-field font-mono" value="${s(e.sortCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'sortCode', this.value)"></div>
        <div><label class="lbl">Bank Code</label><input class="input-field font-mono" value="${s(e.bankCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'bankCode', this.value)"></div>
        <div><label class="lbl">Branch Code</label><input class="input-field font-mono" value="${s(e.branchCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'branchCode', this.value)"></div>
        <div><label class="lbl">Institution Number</label><input class="input-field font-mono" value="${s(e.institutionNumber||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'institutionNumber', this.value)"></div>
        <div><label class="lbl">Transit Number</label><input class="input-field font-mono" value="${s(e.transitNumber||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'transitNumber', this.value)"></div>
        <div><label class="lbl">BSB Code</label><input class="input-field font-mono" value="${s(e.bsbCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'bsbCode', this.value)"></div>
        <div class="sm:col-span-2"><label class="lbl">Bank Address</label><input class="input-field" value="${s(e.address||"")}" placeholder="Branch or bank address" oninput="updateManualPaymentAccount(${t}, 'address', this.value)"></div>
      </div>
    </div>`}window.renderManualPaymentAccountsEditor=function(){const e=document.getElementById("manual-accounts-editor");e&&(window._manualPaymentAccounts?.length||(window._manualPaymentAccounts=[Mt()]),e.innerHTML=`
    <div class="space-y-4">
      ${window._manualPaymentAccounts.map((t,a)=>ho(t,a)).join("")}
      <button type="button" onclick="addManualPaymentAccount()" class="btn-press w-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wide transition flex items-center justify-center gap-2">
        <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Another Bank Account
      </button>
    </div>`,Ft(),window.lucide&&lucide.createIcons())};window.addManualPaymentAccount=function(){window._manualPaymentAccounts.push(Mt()),renderManualPaymentAccountsEditor()};window.removeManualPaymentAccount=function(e){window._manualPaymentAccounts.splice(e,1),window._manualPaymentAccounts.length||(window._manualPaymentAccounts=[Mt()]),renderManualPaymentAccountsEditor()};window.updateManualPaymentAccount=function(e,t,a){const i=window._manualPaymentAccounts[e];i&&(i[t]=a,t==="currency"&&(i.currencyName=a),Ft())};window.updateManualPaymentCountry=function(e,t){const a=window._manualPaymentAccounts[e];if(!a)return;const i=ye.find(o=>o.code===t);a.country_code=t,a.country=i?.name||"",a.flag=i?.flag||Ht(t),Ft(),renderManualPaymentAccountsEditor()};async function ft(){const e=document.getElementById("content");e&&(e.innerHTML=fe());try{const{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),i={...Wa()||{},...t||{}};window._manualPaymentAccounts=Va(i).map(o=>({...o})),e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white">Payment Settings</h2>
          <div class="flex items-center gap-2 flex-wrap">
            ${i.payment_gateway?`<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Active: ${s(i.payment_gateway)}</span>`:'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Not configured</span>'}
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
                <textarea class="input-field" name="manual_payment_instructions" rows="4" placeholder="Explain how customers should pay and upload their receipt.">${s(Ka(i))}</textarea>
              </div>
              <div>
                <label class="lbl">ATM Transfer Instructions (optional, shown separately)</label>
                <textarea class="input-field" name="atm_transfer_instructions" rows="3" placeholder="Optional ATM-specific instructions.">${s(i.atm_transfer_instructions||"")}</textarea>
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
                <div><label class="lbl">Redirect URL (after payment)</label><input class="input-field" name="flutterwave_redirect_url" value="${s(i.flutterwave_redirect_url||"")}" placeholder="${window.location.origin}/payment.html"></div>
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
      </div>`,renderManualPaymentAccountsEditor(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}window.savePaymentSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=["flutterwave_public_key","flutterwave_secret_key","flutterwave_encryption_key","flutterwave_webhook_secret"],o={};for(const[m,y]of Object.entries(a))i.includes(m)?y&&!y.startsWith("••••")&&y.trim()!==""&&(o[m]=y.trim()):o[m]=y;o.manual_payment_enabled=a.manual_payment_enabled==="on",o.flutterwave_enabled=a.flutterwave_enabled==="on";let r=[];try{r=JSON.parse(a.manual_payment_accounts_json||"[]")}catch{}o.manual_payment_accounts=r;const n=r[0]||{},l=r[1]||{};o.bank1_account_name=n.beneficiary||"",o.bank1_account_number=n.accountNumber||"",o.bank1_bank_name=n.bankName||"",o.bank1_transfer_type=n.transferType||"",o.bank1_sort_code=n.sortCode||n.routing||"",o.bank1_currency=n.currency||"USD",o.bank2_account_name=l.beneficiary||"",o.bank2_account_number=l.accountNumber||"",o.bank2_bank_name=l.bankName||"",o.bank2_transfer_type=l.transferType||"",o.bank2_sort_code=l.sortCode||l.routing||"",o.bank2_currency=l.currency||"USD",za(o);const{data:c}=await p.from("site_settings").select("id").limit(1).maybeSingle();let d;if(c?.id?{error:d}=await p.from("site_settings").update(o).eq("id",c.id):{error:d}=await p.from("site_settings").insert(o),d){const m=String(d.message||"");if(/manual_payment_accounts|column|schema cache/i.test(m)){u("Payment settings saved locally. Run the latest migration to persist them to Supabase.","info"),console.warn(d),setTimeout(()=>ft(),500);return}u("Save failed: "+d.message,"error"),console.error(d);return}u("✅ Payment settings saved successfully!","success"),setTimeout(()=>ft(),500)};window.testFlutterwaveKeys=async function(){const{data:e}=await p.from("site_settings").select("flutterwave_public_key").limit(1).maybeSingle();if(!e?.flutterwave_public_key){u("Save your Flutterwave public key first","info");return}u("Flutterwave key is saved. Use test mode + test card to verify a payment flow.","info")};async function Xe(){const e=document.getElementById("content");try{const{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white">Publish & Deploy</h2>

        <!-- Status Bar -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 flex flex-wrap items-center gap-4">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${a.github_repo?"bg-emerald-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${a.github_repo?"text-emerald-400":"text-gray-500"}">${a.github_repo?"GitHub Connected: "+s(a.github_repo):"GitHub Not Connected"}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${a.deploy_webhook?"bg-blue-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${a.deploy_webhook?"text-blue-400":"text-gray-500"}">${a.deploy_webhook?"Deploy Webhook Set":"No Webhook"}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${a.payment_gateway?"bg-amber-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${a.payment_gateway?"text-amber-400":"text-gray-500"}">${a.payment_gateway?"Payment: "+s(a.payment_gateway):"Payment Not Configured"}</span>
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
                <input class="input-field" name="github_username" value="${s(a.github_username||"")}" placeholder="your-github-username">
              </div>
              <div>
                <label class="lbl">Repository Name</label>
                <input class="input-field" name="github_repo" value="${s(a.github_repo||"")}" placeholder="my-website-repo">
              </div>
              <div>
                <label class="lbl">Branch</label>
                <input class="input-field" name="github_branch" value="${s(a.github_branch||"main")}" placeholder="main">
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
              <input class="input-field" name="deploy_webhook" value="${s(a.deploy_webhook||"")}" placeholder="https://api.netlify.com/build_hooks/…">
              <p class="text-[10px] text-gray-500 mt-1">Netlify: Site Settings → Build hooks · Vercel: Project → Settings → Git → Deploy Hooks</p>
            </div>
            <div>
              <label class="lbl">Production URL</label>
              <input class="input-field" name="production_url" value="${s(a.production_url||"")}" placeholder="https://yoursite.com">
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}window.saveDeploySettings=async function(e){e.preventDefault();const t=e.target?.querySelector("[type=submit]");t&&(t.disabled=!0,t.innerHTML="Saving…");const a=new FormData(e.target),i=Object.fromEntries(a.entries()),o={},r=["github_token","payment_public_key","payment_secret_key","payment_webhook_secret"];for(const[l,c]of Object.entries(i))r.includes(l)?c&&!c.startsWith("•")&&c.trim()!==""&&(o[l]=c.trim()):o[l]=c;const{error:n}=await p.from("site_settings").upsert({id:1,...o});if(t&&(t.disabled=!1,t.innerHTML="💾 Save Deploy & Payment Settings"),n){u(n.message,"error");return}u("Deploy & payment settings saved!"),Xe()};async function Ma(e="deploy"){const{data:t}=await p.from("site_settings").select("deploy_webhook,production_url,github_repo").limit(1).maybeSingle();if(!t?.deploy_webhook)return u("No webhook URL set. Add your deploy webhook in the settings below.","info"),{ok:!1,reason:"missing_webhook"};let a=t.deploy_webhook;try{const i=new URL(a);e==="rebuild"&&i.searchParams.set("rebuild","1"),a=i.toString()}catch{e==="rebuild"&&(a+=(a.includes("?")?"&":"?")+"rebuild=1")}return{ok:!0,settings:t,hookUrl:a}}async function oe(e,t={}){const a=t.version||new Date().toISOString(),i={source:"admin-dashboard",mode:t.mode||"deploy",production_url:t.productionUrl||null,github_repo:t.githubRepo||null,webhook:t.webhook||null,message:t.message||null},{data:o,error:r}=await p.from("deployment_history").insert({version:a,status:e,triggered_by_email:S.user?.email||null,metadata:i,error_message:t.errorMessage||null}).select("id").limit(1).maybeSingle();return{data:o,error:r}}function ge(e,t,a,i){if(!e)return;e.disabled=t;const o=e.querySelector("p.text-xs.font-black");o&&(o.textContent=t?a:i)}window.triggerDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-deploy-btn]");ge(t,!0,"Deploying…","Deploy Now");try{const a=await Ma("deploy");if(!a.ok)return;const{settings:i,hookUrl:o}=a;await oe("preparing",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,message:"Deployment queued from admin UI"});const r=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"deploy",source:"admin-dashboard",at:new Date().toISOString()})});if(r.ok)u("🚀 Deployment triggered! Your site will be live in ~2 minutes."),await oe("deploying",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,message:"Webhook accepted deployment request"}),setTimeout(()=>Xe(),400);else{const n=`Webhook returned error: ${r.status}`;u(n,"error"),await oe("failed",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,errorMessage:n})}}catch(a){u("Deploy failed: "+a.message,"error"),await oe("failed",{mode:"deploy",errorMessage:a.message})}finally{ge(t,!1,"Deploying…","Deploy Now")}};window.triggerRebuild=async function(e){const t=e?.currentTarget||document.querySelector("[data-rebuild-btn]");ge(t,!0,"Rebuilding…","Rebuild Site");try{const a=await Ma("rebuild");if(!a.ok)return;const{settings:i,hookUrl:o}=a;await oe("building",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,message:"Rebuild requested from admin UI"});const r=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"rebuild",source:"admin-dashboard",at:new Date().toISOString()})});if(r.ok)u("🔄 Rebuild triggered successfully."),await oe("deploying",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,message:"Webhook accepted rebuild request"}),setTimeout(()=>Xe(),400);else{const n=`Rebuild webhook error: ${r.status}`;u(n,"error"),await oe("failed",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,errorMessage:n})}}catch(a){u("Rebuild failed: "+a.message,"error"),await oe("failed",{mode:"rebuild",errorMessage:a.message})}finally{ge(t,!1,"Rebuilding…","Rebuild Site")}};window.publishAndDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-publish-easy-btn]");ge(t,!0,"Publishing…","One-Click Publish");try{const a=document.getElementById("deploy-form");if(!a){u("Deploy form is not available. Reload and try again.","error");return}await window.saveDeploySettings({preventDefault(){},target:a}),await window.triggerDeploy()}catch(a){u("Publish failed: "+a.message,"error")}finally{ge(t,!1,"Publishing…","One-Click Publish")}};window.reindexSearch=async function(){const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=t?.textContent||"";t&&(t.textContent="Reindexing…");try{const{data:i,error:o}=await p.from("showroom_listings").select("id, updated_at").order("updated_at",{ascending:!1});if(o)return G(o)?u("⚠️ Reindex blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):u("Could not load listings to reindex: "+o.message,"error");const r=i||[];if(!r.length){u("No listings to reindex.");return}let n=0,l=0,c=!1;const d=40;for(let m=0;m<r.length;m+=d){const y=r.slice(m,m+d),{error:g}=await p.from("showroom_listings").update({updated_at:new Date().toISOString()}).in("id",y.map(f=>f.id));g?(G(g)&&(c=!0),l+=y.length):n+=y.length,t&&(t.textContent=`Reindexing… ${Math.min(m+d,r.length)}/${r.length}`)}if(c){u(`⚠️ Reindex partially blocked: database admin role rejected some writes. Re-run the admin permission migration. (${n}/${r.length} done)`,"error");return}u(`Search index rebuilt for ${n} listing${n!==1?"s":""}${l?` (${l} failed)`:""}.`,l?"error":"success")}catch(i){u("Reindex failed: "+i.message,"error")}finally{t&&(t.textContent=a)}};window.syncShowroomToDB=async function(){if(!Array.isArray(K)||!K.length){u("No static showroom listings found to sync.","info");return}const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=t?.textContent||"";t&&(t.textContent="Syncing…");try{const{data:i,error:o}=await p.from("showroom_listings").select("property_id");if(o)return G(o)?u("⚠️ Sync blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):u("Could not load existing listings: "+o.message,"error");const r=new Set((i||[]).map(y=>y.property_id)),n=K.filter(y=>y&&y.property_id&&!r.has(y.property_id));if(!n.length){u("Showroom already in sync — no new listings to add.");return}let l=0,c=0,d=!1;const m=20;for(let y=0;y<n.length;y+=m){const g=n.slice(y,y+m).map(b=>({property_id:b.property_id,listing_type:b.listing_type||"product",category:b.category||null,subcategory:b.subcategory||null,title:b.title||"Untitled Listing",description:b.description||"",price:parseFloat(b.price)||0,currency:b.currency||"USD",country:b.country||"",country_code:b.country_code||"",state:b.state||"",city:b.city||"",town:b.town||"",product_location:b.product_location||"",latitude:b.latitude??null,longitude:b.longitude??null,property_type:b.property_type||null,listing_status:b.listing_status||"sale",bedrooms:b.bedrooms??null,bathrooms:b.bathrooms??null,building_size:b.building_size||"",land_size:b.land_size||"",parking_spaces:b.parking_spaces??null,furnished:b.furnished||"",features:Array.isArray(b.features)?b.features:[],tags:Array.isArray(b.tags)?b.tags:[],highlights:Array.isArray(b.highlights)?b.highlights:[],seo_keywords:Array.isArray(b.seo_keywords)?b.seo_keywords:[],images:Array.isArray(b.images)?b.images:[],brand:b.brand||null,color:b.color||null,size:b.size||null,condition:b.condition||null,warranty:b.warranty||null,availability_status:b.availability_status||"In Stock",stock_quantity:b.stock_quantity!=null?parseInt(b.stock_quantity,10):null,is_active:b.is_active!==!1,is_featured:!!b.is_featured,is_ai_generated:!!b.is_ai_generated,ai_generated_fields:Array.isArray(b.ai_generated_fields)?b.ai_generated_fields:[],specifications:b.specifications||{},created_at:b.created_at||new Date().toISOString()})),{error:f}=await p.from("showroom_listings").insert(g);f?(G(f)&&(d=!0),c+=g.length):l+=g.length,t&&(t.textContent=`Syncing… ${Math.min(y+m,n.length)}/${n.length}`)}if(d){u(`⚠️ Sync partially blocked: database admin role rejected some inserts. Re-run the admin permission migration. (${l}/${n.length} added)`,"error");return}u(`Showroom synced: ${l} new listing${l!==1?"s":""} added to the database${c?` (${c} failed)`:""}.`,c?"error":"success")}catch(i){u("Sync failed: "+i.message,"error")}finally{t&&(t.textContent=a)}};window.testGitHubConnection=async function(){const e=document.querySelector("[name=github_username]")?.value?.trim(),t=document.querySelector("[name=github_repo]")?.value?.trim();if(!e||!t){u("Enter your GitHub username and repo name first","info");return}try{const a=await fetch(`https://api.github.com/repos/${e}/${t}`);if(a.ok){const i=await a.json();u(`✓ Connected: ${i.full_name} (${i.visibility})`)}else a.status===404?u("Repository not found. Check username and repo name.","error"):u("GitHub API error: "+a.status,"error")}catch{u("Could not reach GitHub API","error")}};window.deployToProduction=window.triggerDeploy;window.rebuildSite=window.triggerRebuild;const Fa=30,R={category:null,page:0,query:""};async function we(){const e=document.getElementById("content");if(!e)return;await vt();const t=new Set(Oe()),a=Ya();R.category||(R.category=a[0]?.slug||null);const i=0,o=R.query.trim().toLowerCase(),r=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-xl font-black text-white">Generated Catalog</h2>
        <p class="text-xs text-gray-500 mt-1">Deterministic storefront items. Hiding a listing removes it from the site everywhere — including direct links.</p>
      </div>
      <button onclick="catalogResetHidden()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition">Show All Hidden</button>
    </div>`,n=`
    <div class="flex flex-wrap gap-2">
      ${a.map(g=>`<button onclick="catalogSetCategory('${g.slug}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${R.category===g.slug?"bg-blue-500/20 text-blue-200 border-blue-500/40":"bg-white/5 text-gray-400 border-white/10 hover:text-white"}">${s(g.name)}</button>`).join("")}
    </div>`,l=`
    <div class="flex flex-wrap items-center gap-2">
      <input id="catalog-search-input" class="input-field flex-1 min-w-[220px]" placeholder="Search title, id or subcategory…" value="${s(R.query)}" onkeyup="if (event.key === 'Enter') catalogSearch()">
      <button onclick="catalogSearch()" class="btn-press px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition">Search</button>
    </div>`;let c=[];const d=c.length?c.map(g=>{const f=t.has(g.property_id),b=g.images&&g.images[0]||"/fallback.svg";return`
          <div class="flex items-center gap-3 p-3 rounded-xl border ${f?"border-red-500/25 bg-red-500/5":"border-white/10 bg-white/[0.02]"}">
            <img src="${s(b)}" alt="" class="w-12 h-12 rounded-lg object-cover bg-gray-800 shrink-0" loading="lazy">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-white truncate">${s(g.title)}</p>
              <p class="text-[11px] text-gray-500 truncate">${s(g.property_id)} · ${s(g.subcategory||g.category||"")} · ${aa(g.price,"USD")}</p>
            </div>
            ${j(!f)}
            <button onclick="catalogToggle('${s(g.property_id)}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${f?"bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25":"bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20"}">
              ${f?"Show":"Hide"}
            </button>
          </div>`}).join(""):'<div class="text-center py-16 text-gray-500 text-sm">No catalog items match.</div>',m=o?1:Math.max(1,Math.ceil(i/Fa)),y=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <p class="text-xs text-gray-500">${o?`${c.length} match`:`${i.toLocaleString()} items in ${s("")}`} · ${t.size} hidden</p>
      <div class="flex items-center gap-2">
        <button onclick="catalogPage(-1)" ${R.page<=0?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Prev</button>
        <span class="text-xs text-gray-500">Page ${R.page+1} / ${m}</span>
        <button onclick="catalogPage(1)" ${R.page>=m-1?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Next</button>
      </div>
    </div>`;e.innerHTML=`
    <div class="space-y-4 fade-in">
      ${r}
      ${n}
      ${l}
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 space-y-2">${d}</div>
      ${y}
    </div>`,window.lucide&&lucide.createIcons()}window.catalogSetCategory=function(e){R.category=e,R.page=0,R.query="",we()};window.catalogSearch=function(){const e=document.getElementById("catalog-search-input");R.query=e?e.value:"",R.page=0,we()};window.catalogPage=function(e){const a=R.query.trim()?1:Math.max(1,Math.ceil(0/Fa));R.page=Math.max(0,Math.min(a-1,R.page+e)),we()};window.catalogToggle=async function(e){const t=!Oe().includes(e),a=await Kt(e,t);u(t?"Listing hidden from storefront":"Listing restored",a.ok?"success":"info"),we()};window.catalogResetHidden=async function(){await ei(),u("All hidden catalog listings restored"),we()};async function Ot(){window.lucide&&lucide.createIcons(),ia(),await fi(),p.auth.onAuthStateChange((e,t)=>{if(e==="SIGNED_OUT"){S.user=null;const a=document.getElementById("login-screen");a&&(a.style.display="flex")}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ot):Ot();
