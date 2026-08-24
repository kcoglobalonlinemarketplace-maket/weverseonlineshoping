import{_ as ai,s as b,a as ae,i as ra,D as ii}from"./supabase-client-DvCmNkpI.js";import{a as ni,g as oi,C as Ee,A as si}from"./localization-CErl0dkC.js";import{patchLocalShowroomListing as ri,getLocalShowroomListingById as Tt,removeLocalShowroomListing as li,upsertLocalShowroomListing as gt,listLocalShowroomListings as Qe}from"./local-showroom-store-mzP0nSoS.js";import{g as la,s as di,l as ci,a as ui,b as pi}from"./payment-settings-GaRYfsr3.js";import{P as da,a as ca,T as ua,M as pa}from"./motorhome-data-CupbOvk0.js";import{getCatalogCategories as mi}from"./catalog-qysuyAKK.js";import{i as gi}from"./app-promo-banner-VTpzwpvR.js";import{M as bi,n as yi,a as fi}from"./categories-BEuiwWw5.js";import{saveCatalogHidden as ma,loadHiddenCatalogIds as Lt,getHiddenCatalogIds as Xe,resetHiddenCatalogIds as hi}from"./catalog-hidden-store-BAMgfUuU.js";const F=1,K=5e6,vi=[{id:"prod-smartphone",listingType:"product",category:"Phones",subcategory:"Smartphones",label:"Flagship Smartphone",brand:"Global Mobile",model:"X Pro",color:"Midnight Black",size:"6.7-inch",condition:"New",features:["5G connectivity","OLED display","Fast charging","Unlocked","Premium cameras"],highlights:["Retail-ready packaging","Strong search demand","Ideal for global shipping"],keywords:["smartphone","mobile phone","5g"],descriptionType:"phone"},{id:"prod-laptop",listingType:"product",category:"Computers & Laptops",subcategory:"Laptops",label:"Performance Laptop",brand:"NorthBridge",model:"Studio 14",color:"Silver",size:"14-inch",condition:"New",features:["Fast processor","SSD storage","Long battery life","Portable chassis","Business-ready design"],highlights:["Suitable for work and study","Premium margin band","Global audience appeal"],keywords:["laptop","notebook","computer"],descriptionType:"laptop"},{id:"prod-tv",listingType:"product",category:"Electronics",subcategory:"Smart TVs",label:"4K Smart TV",brand:"VistaHome",model:"UltraView",color:"Black",size:"65-inch",condition:"New",features:["4K panel","Streaming apps","HDR support","Voice control","Slim bezel"],highlights:["Living-room centerpiece","Popular premium electronics segment"],keywords:["tv","smart tv","home electronics"],descriptionType:"electronics"},{id:"prod-watch",listingType:"product",category:"Watches",subcategory:"Luxury Watches",label:"Luxury Wristwatch",brand:"Aurelius",model:"Chrono 8",color:"Gold / Black",size:"42mm",condition:"New",features:["Precision movement","Premium case","Gift-ready presentation","Water resistance","Collector appeal"],highlights:["High perceived value","Strong gifting category"],keywords:["watch","luxury watch","timepiece"],descriptionType:"luxury"},{id:"prod-jewelry",listingType:"product",category:"Jewelry",subcategory:"Fine Jewelry",label:"Fine Jewelry Set",brand:"Maison Valeur",model:"Signature Set",color:"Gold",size:"Adjustable",condition:"New",features:["Premium finish","Gift packaging","Occasion-ready","Elegant styling"],highlights:["High-value presentation","Wedding and celebration demand"],keywords:["jewelry","necklace","bracelet"],descriptionType:"luxury"},{id:"prod-handbag",listingType:"product",category:"Bags & Accessories",subcategory:"Designer Bags",label:"Designer Handbag",brand:"Rue Maison",model:"Carry All",color:"Tan",size:"Medium",condition:"New",features:["Structured silhouette","Premium hardware","Travel-friendly storage","Retail-ready finish"],highlights:["Fashion-forward listing","Broad international demand"],keywords:["handbag","designer bag","accessories"],descriptionType:"fashion"},{id:"prod-sneakers",listingType:"product",category:"Shoes",subcategory:"Premium Sneakers",label:"Premium Sneakers",brand:"RunNorth",model:"Air Flex",color:"White",size:"EU 42",condition:"New",features:["Comfort cushioning","Streetwear styling","Durable outsole","Daily wear ready"],highlights:["High-conversion category","Easy multi-country merchandising"],keywords:["sneakers","shoes","fashion"],descriptionType:"fashion"},{id:"prod-sofa",listingType:"product",category:"Furniture",subcategory:"Living Room",label:"Luxury Sofa Set",brand:"Grand Habitat",model:"Residence 3-Piece",color:"Sand Beige",size:"3-Piece Set",condition:"New",features:["Premium upholstery","Statement living-room piece","Comfort seating","Interior-ready styling"],highlights:["Large-ticket home category","Ideal for premium households"],keywords:["sofa","furniture","living room"],descriptionType:"home"},{id:"prod-generator",listingType:"product",category:"Home & Kitchen",subcategory:"Power Solutions",label:"Backup Power Generator",brand:"VoltWorks",model:"SilentMax",color:"Graphite",size:"7.5kVA",condition:"New",features:["Reliable backup power","Low-noise housing","Residential and business use","Heavy-duty build"],highlights:["Practical high-demand utility item","Useful in many markets"],keywords:["generator","power","backup power"],descriptionType:"industrial"},{id:"prod-drone",listingType:"product",category:"Cameras & Photography",subcategory:"Drones",label:"Pro Camera Drone",brand:"SkyFrame",model:"Aerial 4K",color:"Gray",size:"Foldable",condition:"New",features:["4K stabilized video","GPS return home","Portable folding frame","Creator-ready footage"],highlights:["Strong visual listing appeal","Premium creator equipment"],keywords:["drone","camera drone","aerial"],descriptionType:"electronics"},{id:"prod-grocery",listingType:"product",category:"Food & Groceries",subcategory:"Family Essentials",label:"Family Grocery Bundle",brand:"Market Select",model:"Household Pack",color:"Mixed",size:"Bulk Pack",condition:"New",features:["Everyday essentials","Bulk value","Family sized","Easy repeat orders"],highlights:["Fast-moving everyday goods","Useful across broad regions"],keywords:["groceries","food bundle","household essentials"],descriptionType:"daily"},{id:"prod-scale-house",listingType:"product",category:"Home & Kitchen",subcategory:"Model Houses",label:"Architectural Model House",brand:"Studio Form",model:"Estate Miniature",color:"Natural Wood",size:"1:50 Scale",condition:"New",features:["Collector display piece","Detailed craftsmanship","Interior decor appeal","Gift-ready packaging"],highlights:["Supports the model-house use case","Works for decor and collector audiences"],keywords:["model house","architectural model","collector decor"],descriptionType:"home"},{id:"veh-sedan",listingType:"product",category:"Cars",subcategory:"Sedans",label:"Executive Sedan",brand:"Summit Motors",model:"S Line",color:"Pearl White",size:"Mid-size",condition:"Used - Like New",features:["Comfortable cabin","Road-trip ready","Well-maintained presentation","Family and executive appeal"],highlights:["Vehicle posts support 24-image galleries","Map-ready listing"],keywords:["car","sedan","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-suv",listingType:"product",category:"Cars",subcategory:"SUVs",label:"Family SUV",brand:"Frontier Auto",model:"Terrain X",color:"Obsidian",size:"7-Seater",condition:"Used - Like New",features:["Spacious seating","Utility-focused cargo room","Suitable for families","Road and city versatility"],highlights:["High-demand automotive segment","Works well with showroom map"],keywords:["suv","family car","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-luxury",listingType:"product",category:"Luxury Cars",subcategory:"Luxury Vehicles",label:"Luxury Performance Car",brand:"Regal Automotive",model:"Imperium GT",color:"Metallic Black",size:"Coupe",condition:"Used - Like New",features:["Prestige brand positioning","Performance styling","Collector-level appeal","Premium interior"],highlights:["Supports the requested high-ticket range","Designed for showroom-style luxury listings"],keywords:["luxury car","sports car","supercar"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-motorcycle",listingType:"product",category:"Motorcycles",subcategory:"Street Bikes",label:"Sport Motorcycle",brand:"Velocity Moto",model:"R 900",color:"Red",size:"900cc",condition:"Used - Like New",features:["Agile handling","Performance design","Lifestyle buyer appeal","Weekend-ready machine"],highlights:["Automotive category with image-rich display"],keywords:["motorcycle","bike","sport bike"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-commercial",listingType:"product",category:"Commercial Vehicles",subcategory:"Utility Vehicles",label:"Commercial Utility Vehicle",brand:"FleetCore",model:"CargoPro",color:"White",size:"Long wheelbase",condition:"Used - Good",features:["Business-ready load space","Fleet-friendly purchase","Service history presentation","Commercial utility"],highlights:["Suitable for business buyers","Map-ready logistics listing"],keywords:["commercial vehicle","cargo van","fleet"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-boat",listingType:"product",category:"Boats & Marine",subcategory:"Leisure Boats",label:"Leisure Boat",brand:"BlueHarbor",model:"Coastline 28",color:"Navy / White",size:"28 ft",condition:"Used - Like New",features:["Marina-ready presentation","Leisure and charter appeal","Premium leisure category"],highlights:["Large-format gallery support","High-ticket recreational listing"],keywords:["boat","marine","yacht"],requiredImageCount:24,descriptionType:"vehicle"}],xi=[{id:"prop-apartment",listingType:"property",category:"Real Estate",subcategory:"Apartments",label:"City Apartment",propertyType:"Apartment",bedrooms:2,bathrooms:2,buildingSize:"1,150 sqft",landSize:"",furnished:"Furnished",features:["Secure access","Modern kitchen","Prime urban access","Balcony or city views"],highlights:["Strong urban demand","Good for short and long stay buyers"],keywords:["apartment","real estate","city home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-condo",listingType:"property",category:"Real Estate",subcategory:"Condos",label:"Modern Condo",propertyType:"Condo",bedrooms:3,bathrooms:2,buildingSize:"1,450 sqft",landSize:"",furnished:"Furnished",features:["Managed building","Amenity access","Contemporary finish","Secure parking"],highlights:["Works across major global markets"],keywords:["condo","property","home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-townhouse",listingType:"property",category:"Real Estate",subcategory:"Townhouses",label:"Townhouse Residence",propertyType:"Townhouse",bedrooms:4,bathrooms:3,buildingSize:"2,000 sqft",landSize:"0.08 acres",furnished:"Unfurnished",features:["Multi-level layout","Family-ready plan","Private entry","Parking included"],highlights:["Popular residential ownership format"],keywords:["townhouse","residence","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-villa",listingType:"property",category:"Real Estate",subcategory:"Villas",label:"Private Villa",propertyType:"Villa",bedrooms:5,bathrooms:5,buildingSize:"4,800 sqft",landSize:"0.4 acres",furnished:"Furnished",features:["Private outdoor space","Premium architecture","Luxury entertaining zones","Prestige location potential"],highlights:["Premium property tier","Designed for international buyers"],keywords:["villa","luxury property","real estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-mansion",listingType:"property",category:"Real Estate",subcategory:"Mansions",label:"Luxury Mansion",propertyType:"Mansion",bedrooms:8,bathrooms:10,buildingSize:"12,000 sqft",landSize:"1.2 acres",furnished:"Furnished",features:["Grand entrance","High-end interior finishes","Staff or guest quarters","Statement curb appeal"],highlights:["Matches the mansion requirement directly","Supports high-ticket luxury listings"],keywords:["mansion","estate","luxury home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-beach",listingType:"property",category:"Real Estate",subcategory:"Beach Houses",label:"Beachfront House",propertyType:"Beach House",bedrooms:4,bathrooms:4,buildingSize:"3,600 sqft",landSize:"0.25 acres",furnished:"Furnished",features:["Waterfront views","Outdoor leisure space","Vacation-rental appeal","Premium lifestyle positioning"],highlights:["Ideal for tourism and lifestyle markets"],keywords:["beach house","waterfront home","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-farm",listingType:"property",category:"Real Estate",subcategory:"Farm Houses",label:"Farm House Estate",propertyType:"Farm House",bedrooms:4,bathrooms:3,buildingSize:"3,100 sqft",landSize:"5 acres",furnished:"Unfurnished",features:["Land-rich asset","Agricultural potential","Quiet residential use","Outbuilding opportunity"],highlights:["Suitable for rural and suburban regions"],keywords:["farm house","landed property","estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-commercial",listingType:"property",category:"Real Estate",subcategory:"Commercial Buildings",label:"Commercial Building",propertyType:"Commercial Building",bedrooms:0,bathrooms:4,buildingSize:"8,500 sqft",landSize:"0.35 acres",furnished:"Unfurnished",features:["Business district potential","Mixed-use flexibility","Visible frontage","Investor-ready asset class"],highlights:["Attractive for business buyers and investors"],keywords:["commercial building","office","investment property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-hotel",listingType:"property",category:"Real Estate",subcategory:"Hotels",label:"Boutique Hotel",propertyType:"Hotel",bedrooms:18,bathrooms:20,buildingSize:"15,000 sqft",landSize:"0.75 acres",furnished:"Furnished",features:["Hospitality-ready layout","Guest-focused amenities","Tourism and corporate appeal","Revenue asset potential"],highlights:["Supports hospitality listings globally"],keywords:["hotel","hospitality","investment"],requiredImageCount:24,descriptionType:"property"},{id:"prop-land",listingType:"property",category:"Real Estate",subcategory:"Land",label:"Development Land",propertyType:"Land",bedrooms:0,bathrooms:0,buildingSize:"",landSize:"10 acres",furnished:"",features:["Development potential","Flexible use case","Long-term investment appeal","Location-led value"],highlights:["Useful for land banking and development"],keywords:["land","plot","development"],requiredImageCount:24,descriptionType:"property"}],ga=[...vi,...xi];function Bt(e){return ni[e]||"USD"}function ba(e,t){return ga.filter(a=>a.listingType!==e?!1:t?a.category===t:!0)}function wi(e,t){const a=Math.max(F,Math.min(K,Number(e)||F));return new Intl.NumberFormat("en-US",{style:"currency",currency:t,maximumFractionDigits:0}).format(a)}function _i(e,t,a,i,n){const o=wi(i,a);return e.descriptionType==="vehicle"?`${e.label} listed at ${o}. This template is intended to present a complete automotive post with exterior, interior, condition, performance, and gallery details in a clean showroom-style format.`:e.descriptionType==="property"?`${e.label} located in ${n}. Offered at ${o}, this property template is designed for a complete real-estate presentation with map-ready location data, rich visual gallery coverage, and buyer-friendly highlights covering layout, lifestyle, and investment value.`:e.descriptionType==="phone"?`${e.label} listed at ${o}. The template focuses on a clean premium device presentation with brand, model, condition, core features, and strong online merchandising copy.`:e.descriptionType==="laptop"?`${e.label} listed at ${o}. Built for marketplace listings that need clear performance positioning, specification highlights, and an easy-to-scan description for students, professionals, and remote workers.`:e.descriptionType==="luxury"?`${e.label} listed at ${o}. This template supports high-value presentation with polished positioning, premium selling points, and a strong showroom-style description.`:e.descriptionType==="fashion"?`${e.label} listed at ${o}. This product template highlights styling, quality, and day-to-day appeal while keeping the listing easy to customize.`:e.descriptionType==="home"?`${e.label} listed at ${o}. The listing copy is structured for shoppers looking for quality presentation, reliable detail, and visual merchandising support.`:e.descriptionType==="industrial"?`${e.label} listed at ${o}. This template emphasizes practical use, dependable performance, and business or household value in a straightforward format.`:e.descriptionType==="daily"?`${e.label} listed at ${o}. The copy is designed for repeat-buy categories with clear value messaging and broad buyer appeal.`:`${e.label} listed at ${o}. This template generates a clean, marketable listing with ready-made highlights, keywords, and presentation details.`}function ya({templateId:e,listingType:t,category:a,countryCode:i,currency:n,price:o}){const s=ga.find(m=>m.id===e&&m.listingType===t);if(!s)return null;const r=oi(i)||Ee[0],u=n||Bt(r.code),d=[r.name].filter(Boolean).join(", "),c={category:s.category||a||(t==="property"?"Real Estate":"Other"),subcategory:s.subcategory||s.label,title:t==="property"?`${s.label} in ${r.name}`:s.label,description:_i(s,r,u,o,d),currency:u,features:[...s.features],highlights:[...s.highlights||[]],seo_keywords:[...new Set([s.category,s.subcategory,s.label,...t==="property"?[r.name]:[],...s.keywords||[]].filter(Boolean))],requiredImageCount:s.requiredImageCount||0};return t==="property"?{...c,country:r.name,country_code:r.code,product_location:r.name,property_type:s.propertyType||s.label,bedrooms:s.bedrooms??null,bathrooms:s.bathrooms??null,building_size:s.buildingSize||"",land_size:s.landSize||"",furnished:s.furnished||""}:{...c,brand:s.brand||"",model:s.model||"",color:s.color||"",size:s.size||"",condition:s.condition||"New"}}let pt=null;async function ki(){return pt||(pt=ai(()=>import("./pdf-ksa_hnld.js"),[]).then(e=>{try{e.GlobalWorkerOptions.workerSrc=new URL("/assets/pdf.worker.min-yatZIOMy.mjs",import.meta.url).toString()}catch{}return e})),pt}function Si(e,t){return e.toDataURL("image/jpeg",t)}async function $i(e,t){const a=e.getViewport({scale:1}),i=Math.min(3,Math.max(.5,t/Math.max(a.width,a.height))),n=e.getViewport({scale:i}),o=document.createElement("canvas");o.width=Math.max(1,Math.round(n.width)),o.height=Math.max(1,Math.round(n.height));const s=o.getContext("2d",{alpha:!1});return s.fillStyle="#ffffff",s.fillRect(0,0,o.width,o.height),await e.render({canvasContext:s,viewport:n}).promise,Si(o,.78)}async function Ei(e,{maxDim:t=1300,maxPages:a=0,onProgress:i=()=>{}}={}){const o=await(await ki()).getDocument({url:e,useSystemFonts:!0,isEvalSupported:!1}).promise,s=o.numPages,r=a>0?Math.min(s,a):s,u=[];try{for(let d=1;d<=r;d++){i(d,r);const c=await o.getPage(d);u.push(await $i(c,t))}}finally{try{await o.destroy()}catch{}}return u}function Ze(e){const t=String(e||"").toLowerCase();return t.endsWith(".pdf")||t.includes(".pdf?")||t.includes(".pdf#")}const fa="weverseonlineshop@gmail.com",ha="Weverse Online Shop",va="GLOBAL SHOPPING â€¢ WORLDWIDE DELIVERY",Pi="https://wttnvwpoqmbxryivcerf.supabase.co".replace(/\/$/,""),Ai=`${Pi}/functions/v1/ai-admin-assistant`,Ii=[{group:"Main",items:[{id:"dashboard",label:"Dashboard",icon:"layout-dashboard"},{id:"products",label:"Products",icon:"package"},{id:"content-settings",label:"Content Settings",icon:"file-cog"},{id:"properties",label:"Properties",icon:"home"},{id:"catalog",label:"Catalog Manager",icon:"boxes"},{id:"orders",label:"Orders",icon:"shopping-bag"},{id:"customers",label:"Customers",icon:"users"},{id:"reviews",label:"Reviews",icon:"star"},{id:"messages",label:"Messages",icon:"message-circle"},{id:"coupons",label:"Coupons",icon:"ticket"},{id:"ads",label:"Advertisements",icon:"megaphone"},{id:"notifications",label:"Notifications",icon:"bell"}]},{group:"Configuration",items:[{id:"ai",label:"AI Assistant",icon:"sparkles"},{id:"payment-settings",label:"Payment Settings",icon:"credit-card"},{id:"ai-settings",label:"AI Settings",icon:"bot"},{id:"homepage-branding",label:"Homepage Branding",icon:"image"},{id:"promo-bg",label:"Promo & Backgrounds",icon:"image"},{id:"brand",label:"Brand Manager",icon:"palette"},{id:"content",label:"Content Manager",icon:"file-text"},{id:"seo",label:"SEO Manager",icon:"search"},{id:"email",label:"Email Settings",icon:"mail"},{id:"analytics",label:"Analytics",icon:"bar-chart-3"},{id:"security",label:"Security",icon:"shield"},{id:"activity",label:"Activity Logs",icon:"activity"},{id:"backup",label:"Backup & Restore",icon:"database"},{id:"settings",label:"Settings",icon:"settings"},{id:"publish",label:"Publish & Deploy",icon:"rocket"}]}],Ci={dashboard:"Dashboard",products:"Products Manager",properties:"Properties Manager",catalog:"Catalog Manager",orders:"Orders Manager",customers:"Customers Manager",reviews:"Reviews Manager",messages:"Messages & Support",coupons:"Coupons Manager",ads:"Advertisement Manager","ai-settings":"AI Settings",content:"Content Manager","content-settings":"Content Settings",ai:"AI Assistant","homepage-branding":"Homepage Branding","promo-bg":"Promo & Backgrounds",brand:"Brand Manager","payment-settings":"Payment Settings",seo:"SEO Manager",email:"Email Settings",analytics:"Analytics",security:"Security",activity:"Activity Logs",backup:"Backup & Restore",settings:"Settings",publish:"Publish & Deploy"},xa=[...si].sort();let I={user:null,section:"dashboard"};function l(e){if(e==null)return"";const t=document.createElement("div");return t.textContent=String(e),t.innerHTML}function wa(e,t="USD"){return`${(parseFloat(e)||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})} ${t}`}function ie(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"â€”"}function be(e){return e?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"â€”"}function et(){return"W-"+String(Date.now()).slice(-6)+Math.floor(Math.random()*1e3).toString().padStart(3,"0")}const Ti=["id","property_id","listing_type","category","subcategory","title","description","price","price_period","currency","country","country_code","state","city","town","product_location","latitude","longitude","bedrooms","bathrooms","building_size","land_size","parking_spaces","property_type","furnished","listing_status","images","features","features_text","tags","highlights","seo_keywords","specifications","brand","color","size","condition","warranty","shipping_info","delivery_estimate","weight","dimensions","storage_options","ram_options","color_options","availability_status","stock_quantity","sku","is_active","is_featured","is_ai_generated","ai_generated_fields","rating","rating_count","favorite_count","review_count","video","video_url","approval_status","published_at","created_at","updated_at","real_price","year_built","year_renovated","half_bathrooms","floors","garage","zip_code","address","landmarks","interior_features","exterior_features","home_systems","legal_info","risk_notes","floor_plan","nearby_area","verification_status","verification_date","inspection_info","documents"];function ke(e){const t={};if(!e||typeof e!="object")return t;for(const a of Ti)a in e&&(t[a]=e[a]);return t}function p(e,t="success"){const a=document.getElementById("toast"),i=document.getElementById("toast-msg"),n=a.querySelector("i[data-lucide]");if(!a||!i)return;i.textContent=e;const o={success:"check-circle",error:"alert-circle",info:"info"},s={success:"text-emerald-400",error:"text-red-400",info:"text-blue-400"};n&&(n.setAttribute("data-lucide",o[t]||"info"),n.className=`w-4 h-4 shrink-0 ${s[t]||"text-blue-400"}`),a.style.transform="translateY(0)",a.style.opacity="1",window.lucide&&lucide.createIcons(),clearTimeout(a._t),a._t=setTimeout(()=>{a.style.transform="translateY(20px)",a.style.opacity="0"},3e3)}function Y(e){const t={pending_verification:["bg-amber-500/10 text-amber-400 border-amber-500/20","Pending"],approved:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Approved"],rejected:["bg-red-500/10 text-red-400 border-red-500/20","Rejected"],payment_approved:["bg-blue-500/10 text-blue-400 border-blue-500/20","Paid"],order_placed:["bg-amber-500/10 text-amber-400 border-amber-500/20","Placed"],processing:["bg-indigo-500/10 text-indigo-400 border-indigo-500/20","Processing"],shipped:["bg-violet-500/10 text-violet-400 border-violet-500/20","Shipped"],in_transit:["bg-violet-500/10 text-violet-400 border-violet-500/20","In Transit"],out_for_delivery:["bg-cyan-500/10 text-cyan-400 border-cyan-500/20","Out for Delivery"],delivered:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Delivered"],cancelled:["bg-red-500/10 text-red-400 border-red-500/20","Cancelled"],active:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],inactive:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"],sale:["bg-blue-500/10 text-blue-400 border-blue-500/20","For Sale"],rent:["bg-violet-500/10 text-violet-400 border-violet-500/20","For Rent"],true:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],false:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"]},[a,i]=t[String(e)]||["bg-gray-500/10 text-gray-400 border-gray-500/20",l(e)||"â€”"];return`<span class="badge ${a}">${i}</span>`}function ne(){document.getElementById("modal-container").innerHTML=""}function V(e){document.getElementById("modal-container").innerHTML=e,window.lucide&&lucide.createIcons()}function G(e,t,a,i,n=""){const o={blue:"bg-blue-500/10 text-blue-400 border-blue-500/15",amber:"bg-amber-500/10 text-amber-400 border-amber-500/15",emerald:"bg-emerald-500/10 text-emerald-400 border-emerald-500/15",red:"bg-red-500/10 text-red-400 border-red-500/15",violet:"bg-violet-500/10 text-violet-400 border-violet-500/15",blue:"bg-blue-500/10 text-blue-400 border-blue-500/15"};return`<div class="stat-card glass-soft border border-blue-500/15 rounded-3xl p-5">
    <div class="flex items-start justify-between mb-3">
      <div class="p-3 ${o[i]||o.blue} rounded-2xl border"><i data-lucide="${a}" class="w-5 h-5"></i></div>
    </div>
    <p class="text-3xl font-black text-white">${l(t)}</p>
    <p class="text-xs text-gray-500 uppercase tracking-wide mt-1 font-bold">${l(e)}</p>
    ${n?`<p class="text-xs text-gray-600 mt-1">${l(n)}</p>`:""}
  </div>`}function Pe(){return'<div class="flex items-center justify-center py-24"><div class="flex items-center gap-3 text-gray-500 text-sm"><i data-lucide="loader-2" class="w-5 h-5 animate-spin text-blue-400"></i> Loadingâ€¦</div></div>'}function ye(e,t,a,i=""){return`<div class="flex flex-col items-center justify-center py-20 text-center"><div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4"><i data-lucide="${e}" class="w-8 h-8 text-blue-400"></i></div><h3 class="text-base font-black text-white mb-1">${l(t)}</h3><p class="text-sm text-gray-500 max-w-xs">${l(a)}</p>${i?`<div class="mt-5">${i}</div>`:""}</div>`}function _a(){const e=document.getElementById("sidebar-nav");e&&(e.innerHTML=Ii.map(t=>`
    <div>
      <span class="section-label">${t.group}</span>
      ${t.items.map(a=>`
        <button class="nav-item ${I.section===a.id?"active":""} w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold rounded-xl" onclick="navigate('${a.id}')">
          <i data-lucide="${a.icon}" class="w-4 h-4 shrink-0"></i>
          <span>${a.label}</span>
        </button>`).join("")}
    </div>`).join(""),window.lucide&&lucide.createIcons())}window.navigate=function(e){I.section=e;const t=Ci[e]||e,a=document.getElementById("page-title");a&&(a.textContent=t),_a(),closeSidebar();const i=document.getElementById("content");i&&(i.innerHTML=Pe()),window.lucide&&lucide.createIcons(),({dashboard:zi,products:R,properties:ot,catalog:Ce,orders:qa,customers:_n,reviews:De,messages:Ha,coupons:st,ads:Ie,notifications:$n,ai:Li,"ai-settings":Wa,"homepage-branding":dt,"promo-bg":Ne,content:Ln,"content-settings":Ja,seo:On,email:jn,analytics:Un,security:lt,activity:qn,brand:ct,"payment-settings":Ct,backup:Hn,settings:Gn,publish:ut}[e]||(()=>{const s=document.getElementById("content");s&&(s.innerHTML=ye("construction","Coming Soon",`${t} is being built.`))}))()};async function Li(){const e=document.getElementById("content");e&&(e.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}window.openSidebar=()=>{document.getElementById("sidebar").classList.add("open"),document.getElementById("sidebar-overlay").classList.remove("hidden")};window.closeSidebar=()=>{document.getElementById("sidebar").classList.remove("open"),document.getElementById("sidebar-overlay").classList.add("hidden")};document.getElementById("close-sidebar")?.addEventListener("click",closeSidebar);const _e="kco_admin_remember",Mt="kco_login_attempts",bt=5,Bi=15*60*1e3;function j(e){const t=document.getElementById("login-error"),a=document.getElementById("login-error-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-success")?.classList.add("hidden"),window.lucide&&lucide.createIcons())}function Mi(e){const t=document.getElementById("login-success"),a=document.getElementById("login-success-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-error")?.classList.add("hidden"))}function tt(){document.getElementById("login-error")?.classList.add("hidden"),document.getElementById("login-success")?.classList.add("hidden")}function Re(e){return String(e||"").trim().toLowerCase()}function Ni(){try{const e=JSON.parse(localStorage.getItem(_e)||"{}");e?.email&&!Re(e.email)&&localStorage.removeItem(_e)}catch{localStorage.removeItem(_e)}}function Ri(){try{const e=JSON.parse(localStorage.getItem(_e)||"{}");return Re(e?.email)}catch{return""}}function Nt(){Ni();const e=Ri(),t=document.getElementById("login-email");t&&(t.value=e||t.value||fa,t.removeAttribute("readonly"));const a=document.getElementById("reset-email");a&&(a.value=e||a.value||"",a.removeAttribute("readonly"))}function Fi(){return`${window.location.origin}/admin.html`}function he(e){const t=document.getElementById("login-header-title"),a=document.getElementById("login-header-icon");document.getElementById("login-form")?.classList.toggle("hidden",e!=="login"),document.getElementById("twofa-form")?.classList.toggle("hidden",e!=="2fa"),document.getElementById("forgot-form")?.classList.toggle("hidden",e!=="forgot"),tt(),e==="login"&&(t&&(t.textContent="Admin Access"),a&&a.setAttribute("data-lucide","shield-check")),e==="2fa"&&(t&&(t.textContent="Two-Factor Auth"),a&&a.setAttribute("data-lucide","smartphone")),e==="forgot"&&(t&&(t.textContent="Reset Password"),a&&a.setAttribute("data-lucide","mail")),window.lucide&&lucide.createIcons()}function U(e,t,a=""){const i=document.getElementById(e);i&&(i.disabled=t,t?i.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline-block mr-1"></i> Please waitâ€¦':a&&(i.innerHTML=a),window.lucide&&lucide.createIcons())}function ka(){try{return JSON.parse(localStorage.getItem(Mt)||'{"count":0}')}catch{return{count:0}}}function Sa(){const e=ka();return e.count=(e.count||0)+1,e.count>=bt&&(e.lockedUntil=Date.now()+Bi),localStorage.setItem(Mt,JSON.stringify(e)),e}function $a(){localStorage.removeItem(Mt)}function Ea(){const e=ka();if(!e.lockedUntil)return null;const t=e.lockedUntil-Date.now();return t<=0?($a(),null):Math.ceil(t/6e4)}async function le(e,t,a={}){try{await b.from("admin_security_logs").insert({user_id:e,event_type:t,ip_address:await Di(),user_agent:navigator.userAgent.slice(0,200),...a})}catch{}}async function Di(){try{return(await(await fetch("https://api64.ipify.org?format=json",{signal:AbortSignal.timeout(3e3)})).json()).ip||"unknown"}catch{return"unknown"}}async function Pa(e){if(!e)return!1;let t=!1,a=!1;try{const{data:i}=await b.rpc("is_current_user_admin");t=!0,a=!!i}catch{t=!1}return t?a:Re(e.email)===fa}async function Ui(){const e=window.location.hash;if(e.includes("type=recovery")||e.includes("access_token")){Ge(),Vi();return}const{data:{session:t}}=await b.auth.getSession();if(t?.user&&await Pa(t.user)){const{data:{currentUser:i}}=await b.auth.getUser(),n=await b.auth.mfa.getAuthenticatorAssuranceLevel(),o=n.data?.currentLevel;if(n.data?.nextLevel==="aal2"&&o!=="aal2"){I.user=t.user,Ge(),he("2fa"),Rt();return}I.user=t.user,at();return}Oi()}function Ge(){const e=document.getElementById("login-screen");e&&(e.style.display="flex")}function Oi(){Ge(),he("login"),Nt(),Aa(),Ia(),Rt(),ji();const e=Ea();e&&(j(`Too many failed attempts. Try again in ${e} minute${e>1?"s":""}.`),document.getElementById("login-btn").disabled=!0)}function ji(){document.getElementById("toggle-pw")?.addEventListener("click",()=>{const e=document.getElementById("login-password"),t=document.querySelector("#toggle-pw i");e&&(e.type=e.type==="password"?"text":"password",t&&t.setAttribute("data-lucide",e.type==="password"?"eye":"eye-off"),window.lucide&&lucide.createIcons())})}function Aa(){const e=document.getElementById("login-form");!e||e._bound||(e._bound=!0,e.addEventListener("submit",qi),document.getElementById("forgot-pw-btn")?.addEventListener("click",()=>he("forgot")))}async function qi(e){e.preventDefault();const t=Ea();if(t){j(`Account locked. Try again in ${t} minute${t>1?"s":""}.`);return}const a=document.getElementById("login-email"),i=Re(a?.value);if(!i){j("Enter your admin email address."),U("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const n=document.getElementById("login-password").value,o=document.getElementById("remember-me")?.checked;U("login-btn",!0),tt();const{data:s,error:r}=await b.auth.signInWithPassword({email:i,password:n});if(r||!s.user){const f=String(r?.message||"").toLowerCase();if(f.includes("missing supabase credentials")||f.includes("authentication service is unavailable")){j("Authentication is temporarily unavailable due to configuration. Please contact support."),U("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(f.includes("failed to fetch")||f.includes("network request failed")){j("Network error while signing in. Check your connection and try again."),U("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(f.includes("email not confirmed")){j("Your admin email is not confirmed yet. Open your verification email and confirm first."),U("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const y=Sa(),g=bt-y.count,v=y.lockedUntil?`Account locked for 15 minutes after ${bt} failed attempts.`:`Invalid email or password. ${g>0?g+" attempt"+(g!==1?"s":"")+" remaining.":""}`;j(v),U("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),s?.user&&await le(s.user.id,"login_failed",{metadata:{reason:"wrong_password"}});return}if(!await Pa(s.user)){await b.auth.signOut(),j(`Access denied for ${s.user.email}. This account is signed in but does not have administrator privileges.`),U("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),await le(s.user.id,"login_denied",{metadata:{reason:"not_admin"}});return}if(o?localStorage.setItem(_e,JSON.stringify({email:i,ts:Date.now()})):localStorage.removeItem(_e),$a(),I.user=s.user,(await b.auth.mfa.getAuthenticatorAssuranceLevel()).data?.nextLevel==="aal2"){U("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),he("2fa"),Rt(),setTimeout(()=>document.getElementById("totp-code")?.focus(),100);return}await le(s.user.id,"login_success"),U("login-btn",!1),at()}function Rt(){const e=document.getElementById("verify-2fa-btn");e&&!e._bound&&(e._bound=!0,e.addEventListener("click",Qt));const t=document.getElementById("totp-code");t&&!t._bound&&(t._bound=!0,t.addEventListener("input",i=>{i.target.value=i.target.value.replace(/\D/g,"").slice(0,6),i.target.value.length===6&&Qt()})),document.getElementById("cancel-2fa-btn")?.addEventListener("click",async()=>{await b.auth.signOut(),I.user=null,he("login")}),document.getElementById("use-backup-btn")?.addEventListener("click",()=>{document.getElementById("backup-code-wrap")?.classList.toggle("hidden");const n=document.getElementById("backup-code");n&&n.focus()});const a=document.getElementById("verify-backup-btn");a&&!a._bound&&(a._bound=!0,a.addEventListener("click",Hi))}async function Qt(){const e=document.getElementById("totp-code")?.value?.trim();if(!e||e.length!==6){j("Enter the 6-digit code from your authenticator app.");return}U("verify-2fa-btn",!0),tt();try{const{data:t}=await b.auth.mfa.listFactors(),a=(t?.totp||[])[0];if(!a){j("No 2FA factor found. Please re-login."),U("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In');return}const{data:i,error:n}=await b.auth.mfa.challenge({factorId:a.id});if(n)throw n;const{error:o}=await b.auth.mfa.verify({factorId:a.id,challengeId:i.id,code:e});if(o)throw o;await le(I.user.id,"login_2fa_success"),U("verify-2fa-btn",!1),at()}catch(t){Sa(),j(t.message?.includes("Invalid")?"Incorrect code. Check your authenticator and try again.":t.message),U("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In'),document.getElementById("totp-code").value="",document.getElementById("totp-code").focus()}}async function Hi(){const e=document.getElementById("backup-code")?.value?.trim().toUpperCase().replace(/\s/g,"");if(!e){j("Enter a backup recovery code.");return}U("verify-backup-btn",!0);try{const{data:t}=await b.from("admin_2fa").select("backup_codes").eq("user_id",I.user.id).maybeSingle();if(!t?.backup_codes?.length){j("No backup codes found."),U("verify-backup-btn",!1,"Use Backup Code");return}if(!t.backup_codes.find(n=>(n.code||n).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")&&!n.used)){j("Backup code not found or already used."),U("verify-backup-btn",!1,"Use Backup Code");return}const i=t.backup_codes.map(n=>(n.code||n).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")?{...typeof n=="object"?n:{code:n},used:!0}:n);await b.from("admin_2fa").update({backup_codes:i}).eq("user_id",I.user.id),await le(I.user.id,"login_backup_code_used"),at()}catch(t){j(t.message),U("verify-backup-btn",!1,"Use Backup Code")}}function Ia(){document.getElementById("back-to-login")?.addEventListener("click",()=>he("login")),document.getElementById("send-reset-btn")?.addEventListener("click",Gi)}async function Gi(){const e=document.getElementById("reset-email"),t=Re(e?.value);if(!t){j("Enter your admin email address to receive a reset link.");return}U("send-reset-btn",!0),tt();const{error:a}=await b.auth.resetPasswordForEmail(t,{redirectTo:Fi()});if(U("send-reset-btn",!1,'<i data-lucide="mail" class="w-4 h-4 inline mr-1"></i> Send Reset Link'),a){j(a.message);return}Mi("Reset link sent! Check your inbox and open it from this device to continue.")}function Vi(){const e=document.getElementById("login-screen");if(!e)return;const t=e.querySelector(".login-card");t&&(t.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}window.handlePasswordResetSubmit=async function(){const e=document.getElementById("new-pw-reset")?.value,t=document.getElementById("confirm-pw-reset")?.value,a=document.getElementById("reset-pw-error");if(e!==t){a&&(a.textContent="Passwords do not match.",a.classList.remove("hidden"));return}if((e||"").length<8){a&&(a.textContent="Password must be at least 8 characters.",a.classList.remove("hidden"));return}const{error:i}=await b.auth.updateUser({password:e});if(i){a&&(a.textContent=i.message,a.classList.remove("hidden"));return}p("Password updated! Please log in with your new password."),window.location.hash="",setTimeout(()=>window.location.reload(),1500)};function at(){const e=document.getElementById("login-screen");e&&(e.style.display="none");const t=document.getElementById("admin-user-email");t&&I.user&&(t.textContent=I.user.email||"Admin"),Nt(),navigate("dashboard")}window.adminSignOut=async function(){I.user&&await le(I.user.id,"logout"),await b.auth.signOut(),I.user=null,Ge(),he("login"),Nt(),Aa(),Ia()};window.logoutAllDevices=async function(){confirm("This will sign you out on ALL devices. Continue?")&&(I.user&&await le(I.user.id,"logout_all_devices"),await b.auth.signOut({scope:"global"}),I.user=null,p("Signed out from all devices."),setTimeout(()=>window.location.reload(),1200))};async function zi(){const e=document.getElementById("content");try{const[t,a,i,n]=await Promise.all([b.from("showroom_listings").select("id,listing_type,is_active,price",{count:"exact"}),b.from("payment_receipts").select("id,order_number,amount,status,created_at",{count:"exact"}).order("created_at",{ascending:!1}).limit(200),b.from("profiles").select("user_id,created_at",{count:"exact"}),b.from("product_reviews").select("id,is_approved",{count:"exact"})]),o=t.data||[],s=a.data||[],r=s.filter(h=>["approved","payment_approved","delivered"].includes(h.status)).reduce((h,S)=>h+(parseFloat(S.amount)||0),0),u=s.filter(h=>["pending","pending_verification","processing"].includes(h.status)).length,d=o.filter(h=>h.listing_type!=="property").length,c=o.filter(h=>h.listing_type==="property").length,m=o.filter(h=>h.listing_type!=="property"&&h.is_active).length,f=i.count||0,y=n.count||0,g=(n.data||[]).filter(h=>!h.is_approved).length,v=new Date,_=s.filter(h=>{const S=new Date(h.created_at);return S.getMonth()===v.getMonth()&&S.getFullYear()===v.getFullYear()}).filter(h=>["approved","payment_approved","delivered"].includes(h.status)).reduce((h,S)=>h+(parseFloat(S.amount)||0),0),w=s.slice(0,6);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-black text-white">Good ${Qi()}, Admin</h2>
            <p class="text-sm text-gray-500 mt-0.5">${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}</p>
          </div>
          <button onclick="navigate('products')" class="btn-press hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Product
          </button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          ${G("Total Revenue",`$${r.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald",`$${_.toLocaleString("en-US",{maximumFractionDigits:0})} this month`)}
          ${G("Total Orders",s.length,"shopping-bag","blue",`${u} pending`)}
          ${G("Customers",f,"users","violet")}
          ${G("Products",d,"package","amber",`${m} active`)}
          ${G("Properties",c,"home","blue")}
          ${G("Reviews",y,"star","blue",`${g} pending`)}
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
            ${w.length===0?'<p class="text-xs text-gray-500 text-center py-8">No orders yet</p>':w.map(h=>`
                <div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
                  <div class="min-w-0">
                    <p class="text-xs font-bold text-white truncate">${l(h.order_number||h.id?.slice(0,8))}</p>
                    <p class="text-[10px] text-gray-500">${be(h.created_at)}</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0 ml-2">
                    <span class="text-xs font-bold text-emerald-400">$${parseFloat(h.amount||0).toLocaleString("en-US",{maximumFractionDigits:0})}</span>
                    ${Y(h.status)}
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
      </div>`,window.lucide&&lucide.createIcons(),La(s)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${l(t.message)}</div>`)}}async function R(){const e=document.getElementById("content");try{const{data:t,error:a}=await b.from("showroom_listings").select("*").neq("listing_type","property").order("created_at",{ascending:!1}),i=new Set,n=[];for(const d of a?[]:t||[])d&&d.property_id&&!i.has(d.property_id)&&(i.add(d.property_id),n.push(d));for(const d of Qe().filter(c=>c.listing_type!=="property"))d&&d.property_id&&!i.has(d.property_id)&&(i.add(d.property_id),n.push(d));if(Array.isArray(ae))for(const d of ae.filter(c=>c.listing_type!=="property"&&c.property_id))i.has(d.property_id)||(i.add(d.property_id),n.push(d));const o=[...da,...ca,...ua,...pa];for(const d of o)d&&d.property_id&&d.listing_type!=="property"&&!i.has(d.property_id)&&(i.add(d.property_id),n.push(d));n.sort((d,c)=>new Date(c.created_at||0)-new Date(d.created_at||0));try{await Lt()}catch{}const s=new Set(Xe());if(s.size)for(let d=n.length-1;d>=0;d--)n[d]&&n[d].property_id&&s.has(n[d].property_id)&&n.splice(d,1);const r=[...new Set(n.map(d=>d.category).filter(Boolean))].sort((d,c)=>d.localeCompare(c)),u=[...new Set(n.flatMap(d=>Array.isArray(d.tags)?d.tags:[]).filter(Boolean))].sort((d,c)=>d.localeCompare(c));window._productFilters||(window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"}),window._productSelection||(window._productSelection=new Set),e.innerHTML=`
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
              <button onclick="openGeneralAiScanner()" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition shadow-xl shadow-violet-700/25" title="Scan product photos with AI â€” detect, analyze and add products to your manager">
                <i data-lucide="scan-search" class="w-5 h-5"></i> General AI Scanner
              </button>
              <button onclick="clearAllProducts()" class="btn-press flex items-center justify-center gap-2 bg-rose-600/90 hover:bg-rose-500 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition" title="Delete every product from the manager & database. Your showroom catalog stays.">
                <i data-lucide="trash-2" class="w-5 h-5"></i> Clear All Products
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3">
          ${G("Total Products",n.length,"package","blue")}
          ${G("Published",n.filter(d=>!!d.is_active).length,"badge-check","emerald")}
          ${G("Draft / Hidden",n.filter(d=>!d.is_active).length,"file-clock","amber")}
          ${G("Featured",n.filter(d=>!!d.is_featured).length,"sparkles","violet")}
          ${G("Inventory Units",n.reduce((d,c)=>d+(parseInt(c.stock_quantity,10)||0),0),"boxes","blue")}
          ${G("Avg Price",`$${Math.round(n.reduce((d,c)=>d+(parseFloat(c.price)||0),0)/Math.max(n.length,1)).toLocaleString()}`,"dollar-sign","blue")}
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 sm:p-4 space-y-3">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-2.5">
            <div class="xl:col-span-2 relative">
              <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
              <input id="prod-search" type="search" class="input-field pl-9" placeholder="Search by name, SKU, brand, category..." value="${l(window._productFilters.search||"")}" oninput="filterProducts()">
            </div>
            <select id="prod-cat-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Categories</option>
              ${(r.length?r:pe).map(d=>`<option value="${l(d)}" ${(window._productFilters.category||"")===d?"selected":""}>${l(d)}</option>`).join("")}
            </select>
            <select id="prod-tag-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Tags</option>
              ${u.map(d=>`<option value="${l(d)}" ${(window._productFilters.tag||"")===d?"selected":""}>${l(d)}</option>`).join("")}
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
          <div id="products-empty" class="hidden">${ye("package-search","No matching products","Try different filters or add a new product.",'<button onclick="showAddProductStep1()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl">Add Product</button>')}</div>
          <div class="text-center text-[11px] text-gray-500 py-2">Scroll to explore all products. Layout auto-rearranges as products are added, edited, moved, or removed.</div>
        </div>
      </div>`,window._productsData=n,window._productsCardLimit=60,Ca(n),filterProducts(),updateBulkBar(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${l(t.message)}</div>`)}}function ce(e){const t=parseFloat(e);return Number.isFinite(t)?t:0}function yt(e){return Array.isArray(e.tags)?e.tags.filter(Boolean):[]}function Wi(e){const t=ce(e.price),a=parseFloat(e.real_price);if(Number.isFinite(a)&&a>0&&a>t)return`${Math.round((1-t/a)*100)}% OFF`;const i=parseFloat(e.discount_percent??e.discount??0);return Number.isFinite(i)&&i>0?`${Math.round(i)}% OFF`:"No discount"}function Ki(e){const t=ce(e.price),a=parseFloat(e.real_price),i=`$${t.toLocaleString()}`;return Number.isFinite(a)&&a>0&&a>t?`<span class="block text-xs text-gray-400 price-strike line-through">$${a.toLocaleString()}</span><span class="text-emerald-300 font-black">$${t.toLocaleString()}</span>`:i}function Ft(e){return e.is_archived||e.availability_status==="Archived"?"archived":e.is_active?"active":"inactive"}function ft(e){return parseInt(e.views??e.view_count??0,10)||0}function ht(e){return parseInt(e.sales??e.sales_count??0,10)||0}function Dt(e){return e.sku||e.property_id||"N/A"}function Yi(e){const t=e.images&&e.images[0]?e.images[0]:"/fallback.svg",a=yt(e),i=Ft(e),n=window._productSelection?.has(e.property_id),o=Y(i==="archived"?"inactive":i==="active"?"active":"inactive"),s=ie(e.created_at),r=!!e.is_featured,u=e.is_active?`unpublishProduct('${e.property_id}')`:`publishProduct('${e.property_id}')`,d=e.is_active?"Unpublish":"Publish",c=e.is_active?"bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25";return`<article data-id="${e.property_id}" data-cat="${l(e.category||"")}" data-status="${i}" data-featured="${r?"featured":"standard"}" onclick="editProduct('${e.property_id}')" title="Tap anywhere to edit this product" class="prod-card glass-soft border ${n?"border-blue-400/60":"border-blue-500/15"} rounded-3xl p-5 flex flex-col gap-4 transition hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer select-none active:scale-[.99]">
    <div class="flex items-start gap-4">
      <input type="checkbox" class="prod-check accent-blue-500 w-5 h-5 mt-1 shrink-0" value="${e.property_id}" ${n?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${e.property_id}', this.checked)">
      <div class="relative w-24 h-24 rounded-2xl overflow-hidden border border-blue-500/20 shrink-0 bg-[#0b1124]">
        <img src="${l(t)}" alt="${l(e.title||"Product")}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'">
        ${r?'<span class="absolute top-1.5 left-1.5 text-[10px] font-black px-2 py-0.5 rounded-lg bg-amber-400 text-[#111827]">Featured</span>':""}
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="text-lg font-black text-white leading-snug line-clamp-2">${l(e.title||"Untitled Product")}</h3>
        <p class="text-xs text-gray-500 font-mono mt-1">SKU: ${l(Dt(e))}</p>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          ${o}
          <span class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20">${l(e.category||"Uncategorized")}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2.5 text-sm">
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5">
        <span class="text-gray-400 text-xs">Price</span>
        <p class="text-emerald-300 font-black text-base">
          ${Ki(e)}
        </p>
      </div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Discount</span><p class="text-amber-300 font-bold">${l(Wi(e))}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Stock</span><p class="text-gray-200 font-bold">${e.stock_quantity!=null?l(e.stock_quantity):"Unlimited"}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Brand</span><p class="text-gray-200 font-bold truncate">${l(e.brand||"N/A")}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Views</span><p class="text-blue-300 font-bold">${ft(e).toLocaleString()}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Sales</span><p class="text-cyan-300 font-bold">${ht(e).toLocaleString()}</p></div>
    </div>

    <div class="flex items-center justify-between text-xs text-gray-500 border-t border-blue-500/10 pt-3">
      <span>Date Added: ${l(s)}</span>
      <span>${(e.images||[]).length} images</span>
    </div>

    <div class="flex flex-wrap gap-2 mt-auto">
      <button onclick="event.stopPropagation();editProduct('${e.property_id}')" class="btn-press flex-1 min-w-[9.5rem] px-5 py-3.5 rounded-2xl text-sm font-black bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition shadow-lg shadow-blue-600/15">Edit Product</button>
      <button onclick="event.stopPropagation();quickEditProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-indigo-500/15 text-indigo-200 hover:bg-indigo-500/25 transition">Quick Edit</button>
      <button onclick="event.stopPropagation();previewProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-sky-500/15 text-sky-200 hover:bg-sky-500/25 transition">Preview</button>
      <button onclick="event.stopPropagation();${u}" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold ${c} transition">${d}</button>
      <button onclick="event.stopPropagation();duplicateProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-white/10 text-gray-200 hover:bg-white/20 transition">Duplicate</button>
      <button onclick="event.stopPropagation();archiveProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-red-500/15 text-red-200 hover:bg-red-500/25 transition">Archive</button>
      <button onclick="event.stopPropagation();shareProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-violet-500/15 text-violet-200 hover:bg-violet-500/25 transition">Share</button>
      <button onclick="event.stopPropagation();deleteProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-rose-600/15 text-rose-200 hover:bg-rose-600/25 transition">Delete</button>
      <button onclick="event.stopPropagation();openProductMoreActions('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-gray-600/20 text-gray-200 hover:bg-gray-600/35 transition">More</button>
    </div>

    ${a.length?`<div class="flex flex-wrap gap-1.5">${a.slice(0,6).map(m=>`<span class="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200">${l(m)}</span>`).join("")}</div>`:'<div class="text-xs text-gray-500">No tags</div>'}
  </article>`}function Ji(e,t){const a=[...e],i=n=>new Date(n||0).getTime()||0;return t==="oldest"?a.sort((n,o)=>i(n.created_at)-i(o.created_at)):t==="price-high"?a.sort((n,o)=>ce(o.price)-ce(n.price)):t==="price-low"?a.sort((n,o)=>ce(n.price)-ce(o.price)):t==="sales-high"?a.sort((n,o)=>ht(o)-ht(n)):t==="views-high"?a.sort((n,o)=>ft(o)-ft(n)):a.sort((n,o)=>i(o.created_at)-i(n.created_at)),a}function Ca(e){const t=document.getElementById("products-grid"),a=document.getElementById("products-empty"),i=document.getElementById("products-result-count");if(!t)return;const n=window._productsCardLimit||60,o=e.slice(0,n);t.innerHTML=o.map(Yi).join(""),i&&(i.textContent=String(e.length));const s=document.getElementById("products-more");if(s){const r=e.length-o.length;r>0?s.innerHTML=`<button onclick="loadMoreProducts()" class="btn-press px-8 py-4 rounded-2xl text-base font-black bg-blue-500/15 text-blue-200 hover:bg-blue-500/25 border border-blue-500/25 transition">Show ${Math.min(60,r)} more (${r} left)</button>`:s.innerHTML=e.length>60?'<span class="text-sm text-gray-500">All products shown</span>':""}a&&a.classList.toggle("hidden",e.length>0),updateBulkBar(),window.lucide&&lucide.createIcons()}window.loadMoreProducts=function(){window._productsCardLimit=(window._productsCardLimit||60)+60,filterProducts(!0)};function Ta(e){const t=document.getElementById("products-table-body"),a=document.getElementById("products-result-count");t&&(t.innerHTML=e.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-10">No products found.</td></tr>':e.map(i=>{const n=i.images&&i.images[0]?i.images[0]:"/fallback.svg",o=Ft(i),s=window._productSelection?.has(i.property_id),r=i.is_active?`unpublishProduct('${i.property_id}')`:`publishProduct('${i.property_id}')`,u=i.is_active?"Unpublish":"Publish";return`<tr class="prod-table-row" data-id="${i.property_id}" style="cursor:pointer">
          <td>
            <div class="flex items-center gap-2.5" onclick="editProduct('${i.property_id}')">
              <input type="checkbox" class="prod-check accent-blue-500" value="${i.property_id}" ${s?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${i.property_id}', this.checked)">
              <img src="${l(n)}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
              <div class="min-w-0">
                <p class="text-xs font-bold text-white truncate max-w-[160px]">${l(i.title||"Untitled Product")}</p>
                <p class="text-[10px] font-mono text-gray-500">${l(Dt(i))}</p>
              </div>
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${l(i.category||"Uncategorized")}</span></td>
          <td>
            <div class="text-xs">
              ${(()=>{const d=ce(i.price),c=parseFloat(i.real_price);return Number.isFinite(c)&&c>0&&c>d?`<span class="text-[10px] text-gray-500 price-strike line-through block">$${c.toLocaleString()}</span><span class="font-bold text-emerald-400">$${d.toLocaleString()}</span>`:`<span class="font-bold text-emerald-400">$${d.toLocaleString()}</span>`})()}
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${i.stock_quantity!=null?l(i.stock_quantity):"Unlimited"}</span></td>
          <td>${Y(o==="archived"?"inactive":o==="active"?"active":"inactive")}</td>
          <td><span class="text-xs text-gray-500">${ie(i.created_at)}</span></td>
          <td>
            <div class="flex gap-1">
              <button onclick="editProduct('${i.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
              <button onclick="quickEditProduct('${i.property_id}')" class="btn-press p-1.5 text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition" title="Quick Edit"><i data-lucide="sliders-horizontal" class="w-3.5 h-3.5"></i></button>
              <button onclick="${r}" class="btn-press p-1.5 ${i.is_active?"text-amber-400 hover:bg-amber-500/10":"text-emerald-400 hover:bg-emerald-500/10"} rounded-lg transition" title="${u}"><i data-lucide="${i.is_active?"eye-off":"eye"}" class="w-3.5 h-3.5"></i></button>
              <button onclick="archiveProduct('${i.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Archive"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
            </div>
          </td>
        </tr>`}).join(""),a&&(a.textContent=String(e.length)),window.lucide&&lucide.createIcons())}window.setProductView=function(e){window._productView=e==="table"?"table":"card";const t=document.getElementById("products-grid"),a=document.getElementById("products-table-wrap"),i=document.getElementById("view-card-btn"),n=document.getElementById("view-table-btn"),o=document.getElementById("products-empty"),s=window._productsData||[];t&&t.classList.toggle("hidden",e==="table"),a&&(a.classList.toggle("hidden",e!=="table"),e==="table"&&Ta(s)),i&&i.classList.toggle("active",e!=="table"),n&&n.classList.toggle("active",e==="table"),o&&o.classList.toggle("hidden",s.length>0)};window.filterProducts=function(e){const t=window._productFilters||{};t.search=(document.getElementById("prod-search")?.value||"").trim().toLowerCase(),t.category=document.getElementById("prod-cat-filter")?.value||"",t.tag=document.getElementById("prod-tag-filter")?.value||"",t.status=document.getElementById("prod-status-filter")?.value||"",t.featured=document.getElementById("prod-featured-filter")?.value||"",t.sort=document.getElementById("prod-sort")?.value||"newest",window._productFilters=t;const a=(window._productsData||[]).filter(n=>{const o=[n.title,n.brand,n.category,Dt(n),yt(n).join(" "),n.description].join(" ").toLowerCase();return!(t.search&&!o.includes(t.search)||t.category&&(n.category||"")!==t.category||t.tag&&!yt(n).includes(t.tag)||t.status&&Ft(n)!==t.status||t.featured&&t.featured==="featured"!=!!n.is_featured)}),i=Ji(a,t.sort);e||(window._productsCardLimit=60),Ca(i),window._productView==="table"&&Ta(i)};window.resetProductFilters=function(){window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"},["prod-search","prod-cat-filter","prod-tag-filter","prod-status-filter","prod-featured-filter","prod-sort"].forEach(t=>{const a=document.getElementById(t);a&&(t==="prod-sort"?a.value="newest":a.value="")}),filterProducts()};window.toggleProductSelection=function(e,t){window._productSelection||(window._productSelection=new Set),t?window._productSelection.add(e):window._productSelection.delete(e),updateBulkBar()};window.toggleSelectAll=function(e,t){document.querySelectorAll("."+t).forEach(a=>{a.checked=e.checked;const i=a.value;window._productSelection||(window._productSelection=new Set),e.checked?window._productSelection.add(i):window._productSelection.delete(i)}),updateBulkBar()};window.toggleSelectAllProducts=function(e){document.querySelectorAll(".prod-check").forEach(t=>{t.checked=!!e,window._productSelection||(window._productSelection=new Set),e?window._productSelection.add(t.value):window._productSelection.delete(t.value)}),updateBulkBar()};window.updateBulkBar=function(){const e=window._productSelection?window._productSelection.size:0,t=document.getElementById("bulk-actions"),a=document.getElementById("bulk-count");t&&(t.classList.toggle("hidden",e===0),e>0&&t.classList.add("flex")),a&&(a.textContent=`${e} selected`)};function it(){return window._productSelection?[...window._productSelection]:[]}function Z(e){const t=String(e?.message||e?.code||"").toLowerCase();return t.includes("row-level security")||t.includes("permission denied")||t.includes("permission denied for table")||t.includes("new row violates row-level security")||t.includes("not permitted")||t.includes("rls policy")||t.includes("duplicate key")||t.includes("violates foreign key")}function vt(e,t,a){return e&&Z(e)?(p(`âš ï¸ ${a} blocked: Your account is signed in but the database admin role is not active. Re-run the admin permission migration, or contact the owner.`,"error"),!0):e?(t&&t(),p(`${a} saved locally (DB unavailable): ${e.message||"unknown error"}`,"info"),!0):!1}window.bulkToggleActive=async function(e){const t=it();if(!t.length)return;const a=await Promise.all(t.map(o=>{const s=ke((window._productsData||[]).find(r=>r.property_id===o));return b.from("showroom_listings").upsert({...s,property_id:o,is_active:e},{onConflict:"property_id"})}));if(a.some(o=>o.error&&Z(o.error))){p(`âš ï¸ ${t.length} products NOT ${e?"published":"unpublished"}: database admin role blocked the write. Re-run the admin permission migration.`,"error"),window._productSelection=new Set,R();return}const n=a.filter(o=>o.error).length;p(`${t.length-n}/${t.length} products ${e?"published":"unpublished"}${n?` (${n} failed: ${a.find(o=>o.error)?.error?.message||"error"})`:""}`,n?"error":"success"),window._productSelection=new Set,R()};window.bulkDuplicateProducts=async function(){const e=it();if(e.length){for(const t of e)await duplicateProduct(t,!0);p(`${e.length} products duplicated`),window._productSelection=new Set,R()}};window.bulkArchive=async function(){const e=it();if(!e.length||!confirm(`Archive ${e.length} products? They will be hidden but not deleted.`))return;const t=await Promise.all(e.map(n=>b.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",n)));if(t.some(n=>n.error&&Z(n.error))){p("âš ï¸ Archive blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,R();return}const i=t.filter(n=>n.error).length;p(`${e.length-i}/${e.length} products archived${i?` (${i} failed)`:""}`,i?"error":"success"),window._productSelection=new Set,R()};window.bulkDeleteProducts=async function(){const e=it();if(!e.length||!confirm(`Delete ${e.length} products permanently? This action cannot be undone.`))return;const t=await Promise.all(e.map(n=>b.from("showroom_listings").delete().eq("property_id",n)));if(t.some(n=>n.error&&Z(n.error))){p("âš ï¸ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,R();return}const i=t.filter(n=>n.error).length;p(`${e.length-i}/${e.length} products deleted${i?` (${i} failed)`:""}`,i?"error":"success"),window._productSelection=new Set,R()};window.previewProduct=async function(e){const t=await b.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(i=>i.property_id===e)||t.data;if(!a)return p("Product not found","error");V(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Product Live Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">ðŸ”™ Back</button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="space-y-2">
            <img src="${l((a.images||[])[0]||"/fallback.svg")}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
            <div class="flex flex-wrap gap-2">${(a.images||[]).slice(0,8).map(i=>`<img src="${l(i)}" class="w-12 h-12 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">`).join("")}</div>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-black text-white">${l(a.title||"Untitled Product")}</h4>
            <div class="flex items-center gap-2">${Y(a.is_active?"active":"inactive")}${a.is_featured?'<span class="badge bg-amber-500/15 text-amber-200 border-amber-500/30">Featured</span>':""}</div>
            <p class="text-xs text-gray-400">${l(a.description||"No description")}</p>
            <div class="grid grid-cols-2 gap-2 text-xs mt-2">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">$${ce(a.price).toLocaleString()}</p></div>
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
    </div>`)};window.quickEditProduct=async function(e){const t=await b.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(n=>n.property_id===e)||t.data;if(!a)return p("Product not found","error");const i=Array.isArray(a.images)?a.images:[];V(`
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
          <div><label class="lbl">Availability</label><select name="availability_status" class="input-field">${["In Stock","Out of Stock","Pre-order","Limited Stock","Archived"].map(n=>`<option value="${n}" ${a.availability_status===n?"selected":""}>${n}</option>`).join("")}</select></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Featured</span><input type="checkbox" name="is_featured" ${a.is_featured?"checked":""} class="accent-blue-500 w-5 h-5"></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Published</span><input type="checkbox" name="is_active" ${a.is_active?"checked":""} class="accent-blue-500 w-5 h-5"></div>
          <div>
            <label class="lbl">Gallery Images (up to 24)</label>
            <div id="drop-zone" class="drop-zone" onclick="document.getElementById('img-upload').click()">
              <i data-lucide="image-plus" class="w-10 h-10 text-blue-400 mx-auto mb-2"></i>
              <p class="text-base font-bold text-gray-300">Tap to add photos (up to 24)</p>
              <p class="text-sm text-gray-500 mt-1">PNG, JPG, WEBP. First image is the cover. âœ• deletes any image (even the main/cover).</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*,application/pdf" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${i.map((n,o)=>ve(n,o)).join("")}
            </div>
            <div id="image-url-inputs">${i.map((n,o)=>`<input type="hidden" name="images" id="img-url-${o}" value="${l(n)}">`).join("")}</div>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
          </div>
          <button type="submit" class="btn-press w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-base font-bold">Save Quick Edit</button>
        </form>
      </div>
    </div>`),Ut(),Ot(),Ae(),xe(),window.lucide&&lucide.createIcons()};window.saveQuickEditProduct=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=[...document.querySelectorAll("#image-preview .img-thumb")].map(c=>c.dataset.url||(c.querySelector("img")?c.querySelector("img").getAttribute("src"):"")).filter(c=>c&&!String(c).startsWith("blob:")),n={title:a.get("title")||"Untitled Product",price:Math.max(F,Math.min(K,parseFloat(a.get("price"))||0)),stock_quantity:a.get("stock_quantity")===""?null:parseInt(a.get("stock_quantity"),10),availability_status:a.get("availability_status")||"In Stock",is_featured:a.get("is_featured")==="on",is_active:a.get("is_active")==="on"||i.length>=24,images:i},o=String(a.get("real_price")||"").trim(),s=o===""?null:parseFloat(o);if(s!=null&&!Number.isFinite(s)){p("Real Price must be a number.","error");return}const r=ke((window._productsData||[]).find(c=>c.property_id===t)),u=r.specifications&&typeof r.specifications=="object"?r.specifications:{};n.specifications={...u,real_price:s!=null&&s>0?Math.round(s):null};const{error:d}=await b.from("showroom_listings").upsert({...r,...n,property_id:t},{onConflict:"property_id"});if(d){if(Z(d)){p("âš ï¸ Save blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),ne(),R();return}ri(t,n),p("Quick edit saved locally","info")}else p(n.is_active?"Saved & published â€” your showroom shows it now":"Quick edit saved (draft)");ne(),R()};window.publishProduct=function(e){return toggleProductActive(e,!0)};window.unpublishProduct=function(e){return toggleProductActive(e,!1)};window.shareProduct=async function(e){const t=`${window.location.origin}/details.html?id=${encodeURIComponent(e)}`;try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(t),p("Product link copied to clipboard");return}}catch{}window.prompt("Copy product link:",t)};window.deleteProduct=async function(e){if(!confirm("Delete this product permanently? This action cannot be undone."))return;const t=(window._productsData||[]).find(i=>i.property_id===e)||(window._propertiesData||[]).find(i=>i.property_id===e)||Tt(e),{error:a}=await b.from("showroom_listings").delete().eq("property_id",e);if(a&&!Z(a))return p("Delete failed: "+a.message,"error");li(e);try{const i=await ma(e,!0);i&&i.error&&Z(i.error)?p("âš ï¸ Deleted, but the site-wide hidden list could not be saved: database admin role rejected the write. Re-run the admin permission migration.","error"):p("Product deleted")}catch{p("Product deleted")}t&&t.listing_type==="property"?ot():R()};window.clearAllProducts=async function(){const e=(window._productsData||[]).length;if(!confirm(`Delete ALL ${e} product(s) from the Product Manager and the database now?

This is permanent and cannot be undone. Your built-in showroom catalog will stay.`))return;const{error:t}=await b.from("showroom_listings").delete().neq("property_id","__none__");if(t)return Z(t)?p("âš ï¸ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"):p("Clear failed: "+t.message,"error");try{localStorage.removeItem("kco_local_showroom_listings_v1")}catch{}p("All products deleted. The manager now shows your showroom catalog."),R()};window.openProductMoreActions=function(e){V(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">More Actions</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">ðŸ”™ Back</button>
        </div>
        <div class="grid grid-cols-1 gap-2">
          <button onclick="previewProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Live Preview</button>
          <button onclick="quickEditProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Quick Edit</button>
          <button onclick="duplicateProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-200">Duplicate</button>
          <button onclick="archiveProduct('${e}');closeModal();" class="btn-press text-left px-3 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-sm font-semibold text-red-200">Archive</button>
        </div>
      </div>
    </div>`)};function Qi(){const e=new Date().getHours();return e<12?"morning":e<17?"afternoon":"evening"}function La(e){const t=document.getElementById("chart-revenue");if(!t)return;const a=[],i=new Date;for(let o=5;o>=0;o--){const s=new Date(i.getFullYear(),i.getMonth()-o,1);a.push({label:s.toLocaleString("default",{month:"short"}),month:s.getMonth(),year:s.getFullYear()})}const n=a.map(o=>e.filter(s=>{const r=new Date(s.created_at);return r.getMonth()===o.month&&r.getFullYear()===o.year&&["approved","payment_approved","delivered"].includes(s.status)}).reduce((s,r)=>s+(parseFloat(r.amount)||0),0));new Chart(t,{type:"bar",data:{labels:a.map(o=>o.label),datasets:[{label:"Revenue (USD)",data:n,backgroundColor:"rgba(59,130,246,.6)",borderColor:"rgb(59,130,246)",borderWidth:1,borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"#64748b",callback:o=>"$"+o.toLocaleString()},grid:{color:"rgba(59,130,246,.05)"}},x:{ticks:{color:"#64748b"},grid:{display:!1}}}}})}const pe=bi.map(e=>e.name),Ba=fi,M={default:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Phones:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"storage",label:"Storage (e.g. 128GB)",type:"text"},{key:"ram",label:"RAM (e.g. 8GB)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],"Computers & Laptops":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"processor",label:"Processor (CPU)",type:"text"},{key:"ram",label:"RAM",type:"text"},{key:"storage",label:"Storage",type:"text"},{key:"display",label:"Display Size",type:"text"},{key:"graphics",label:"Graphics Card",type:"text"},{key:"os",label:"Operating System",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Electronics:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model Number",type:"text"},{key:"color",label:"Color",type:"text"},{key:"voltage",label:"Voltage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Shoes:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Jewelry:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"material",label:"Material (e.g. 14k Gold)",type:"text"},{key:"gemstone",label:"Gemstone",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Watches:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"movement",label:"Movement (Quartz/Automatic)",type:"text"},{key:"case_material",label:"Case Material",type:"text"},{key:"water_resistance",label:"Water Resistance",type:"text"},{key:"color",label:"Dial Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"description",label:"Description",type:"textarea",span:2}],Gaming:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"platform",label:"Platform (PS5, Xbox, PCâ€¦)",type:"text"},{key:"model",label:"Game / Model",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],"Sports & Fitness":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]};["Men's Fashion","Women's Fashion","Fashion"].forEach(e=>M[e]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (T-Shirt, Dressâ€¦)",type:"text"},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]);M["Bags & Accessories"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Handbag, Backpack, Luggageâ€¦)",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"material",label:"Material (e.g. Leather)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];M["Beauty & Skincare"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Serum, Cream, Makeupâ€¦)",type:"text"},{key:"size",label:"Size (ml / g)",type:"text"},{key:"skin_type",label:"Skin Type",type:"text"},{key:"ingredients",label:"Key Ingredients",type:"text"},{key:"color",label:"Color / Shade",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M["Home & Kitchen"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"type",label:"Type (Appliance, Cookware, Decorâ€¦)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"voltage",label:"Voltage / Power",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];M.Furniture=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Sofa, Table, Chairâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"assembly",label:"Assembly Required",type:"select",options:["","Yes","No"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];M["Garden & Outdoor"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Mower, Grill, Furnitureâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"weatherproof",label:"Weatherproof",type:"select",options:["","Yes","No"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M["Toys & Games"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model / Set Name",type:"text"},{key:"age_range",label:"Age Range",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M["Food & Groceries"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Snack, Beverage, Pantryâ€¦)",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"shelf_life",label:"Shelf Life",type:"text"},{key:"storage",label:"Storage Instructions",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","New (Sealed)","Open Box"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M["Baby & Kids"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Stroller, Clothing, Toyâ€¦)",type:"text"},{key:"age_range",label:"Age Range",type:"text"},{key:"size",label:"Size",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];M["Health & Medical"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Device, Supplement, Careâ€¦)",type:"text"},{key:"size",label:"Size / Quantity",type:"text"},{key:"usage",label:"Usage / Dosage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];M["Books & Education"]=[{key:"title",label:"Title / Book Name",type:"text",required:!0,span:2},{key:"author",label:"Author",type:"text"},{key:"publisher",label:"Publisher",type:"text"},{key:"language",label:"Language",type:"text"},{key:"format",label:"Format (Hardcover, Paperback, E-book)",type:"text"},{key:"isbn",label:"ISBN",type:"text"},{key:"pages",label:"Pages",type:"text"},{key:"edition",label:"Edition",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Like New","Very Good","Good","Fair"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M["Office & Stationery"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Notebook, Pen, Printerâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"quantity",label:"Quantity / Pack Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M["Pet Supplies"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Food, Toy, Bed, Collarâ€¦)",type:"text"},{key:"pet_type",label:"Pet Type (Dog, Cat, Birdâ€¦)",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M["Musical Instruments"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"type",label:"Type (Guitar, Piano, Drumsâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color / Finish",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];M["Cameras & Photography"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"lens",label:"Lens",type:"text"},{key:"sensor",label:"Sensor",type:"text"},{key:"megapixels",label:"Megapixels",type:"text"},{key:"video",label:"Video Recording",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];M["Software & Digital"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand / Developer",type:"text"},{key:"type",label:"Type (Software, App, Licenseâ€¦)",type:"text"},{key:"platform",label:"Platform",type:"text"},{key:"license",label:"License Type",type:"text"},{key:"version",label:"Version",type:"text"},{key:"language",label:"Language",type:"text"},{key:"format",label:"Format",type:"text"},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M.Services=[{key:"title",label:"Service Title",type:"text",required:!0,span:2},{key:"type",label:"Service Type",type:"text"},{key:"duration",label:"Duration",type:"text"},{key:"location",label:"Location / Coverage",type:"text"},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];M["Social Media Accounts"]=[{key:"title",label:"Account Title",type:"text",required:!0,span:2},{key:"type",label:"Platform (Instagram, TikTokâ€¦)",type:"text"},{key:"followers",label:"Followers",type:"text"},{key:"engagement",label:"Engagement Rate",type:"text"},{key:"niche",label:"Niche",type:"text"},{key:"condition",label:"Status",type:"select",options:["Active","Verified","Suspended"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];Ba.forEach(e=>M[e]=[{key:"title",label:"Vehicle Title",type:"text",required:!0,span:2,placeholder:"e.g. 2023 Toyota Land Cruiser V8 Turbo Diesel"},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"model_year",label:"Model Year",type:"text",placeholder:"e.g. 2023"},{key:"body_type",label:"Body Type",type:"select",options:["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"]},{key:"mileage",label:"Mileage",type:"text",placeholder:"e.g. 15,000 mi or 0 (new)"},{key:"engine",label:"Engine",type:"text",placeholder:"e.g. 4.0L V8 Turbo Diesel"},{key:"horsepower",label:"Horsepower (HP)",type:"text",placeholder:"e.g. 500 HP"},{key:"transmission",label:"Transmission",type:"select",options:["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"]},{key:"drive_type",label:"Drive Type",type:"select",options:["FWD","RWD","AWD","4WD"]},{key:"fuel_type",label:"Fuel Type",type:"select",options:["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"]},{key:"seating_capacity",label:"Seating Capacity",type:"text",placeholder:"e.g. 5 seats"},{key:"doors",label:"Number of Doors",type:"text",placeholder:"e.g. 4"},{key:"safety_features",label:"Safety Features (comma separated)",type:"text",placeholder:"ABS, Airbags, Lane Assist, Traction Controlâ€¦"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}]);for(const e of Object.keys(M))M[e]=M[e].flatMap(t=>t.key!=="price"?[t]:[{key:"real_price",label:"Real Price (USD) â€” crossed out when a discount is active",type:"number",placeholder:"e.g. 250000 â€” original price before discount"},{...t,label:"Discount Price (USD) â€” the price customers pay",placeholder:"e.g. 200000 â€” the price customers actually pay"}]);function Ma(e=""){return Ee.map(t=>`<option value="${t.code}" ${e===t.code?"selected":""}>${t.flag} ${t.name}</option>`).join("")}function Na(e="USD"){return xa.map(t=>`<option value="${t}" ${e===t?"selected":""}>${t}</option>`).join("")}function xt(e){return String(e||"").split(",").map(t=>t.trim()).filter(Boolean)}function A(e,t){const a=document.querySelector(`[name="${e}"]`);!a||t==null||(a.value=t)}function wt(e){const t=document.getElementById(e);t&&(t.min=String(F),t.max=String(K),t.placeholder=`Price (${F} - ${K})`)}function Xt(e){const t=document.getElementById(`${e}-country_code`),a=document.getElementById(`${e}-country`),i=document.getElementById(`${e}-currency`);if(!t)return;const n=Ee.find(o=>o.code===t.value);a&&n&&(a.value=n.name),i&&n&&(i.value=Bt(n.code))}function Ve(e,t){const a=document.getElementById(`${e}-image-requirement`),i=document.getElementById(`${e}-required_image_count`);i&&(i.value=t?String(t):""),a&&(t>0?(a.textContent=`This template fits up to ${t} images. Fewer images are perfectly fine â€” you can save and publish anytime.`,a.classList.remove("hidden")):(a.textContent="",a.classList.add("hidden")))}function _t(e,t="full"){const a=document.getElementById("pf-catalog_template_id")?.value||"",i=document.getElementById("pf-currency")?.value||"USD",n=parseFloat(document.getElementById("pf-price")?.value)||F,o=ya({templateId:a,listingType:"product",category:e,countryCode:"US",currency:i,price:n});if(!o){Ve("pf",Ba.includes(e)?24:0);return}Ve("pf",o.requiredImageCount||0),A("currency",o.currency),A("subcategory",o.subcategory),A("features_text",o.features.join(", ")),A("highlights_text",o.highlights.join(", ")),A("seo_keywords_text",o.seo_keywords.join(", ")),t==="full"?(A("title",o.title),A("description",o.description),A("brand",o.brand||""),A("model",o.model||""),A("color",o.color||""),A("size",o.size||""),A("condition",o.condition||"New")):A("description",o.description)}function kt(e="full"){const t=document.getElementById("ppf-catalog_template_id")?.value||"",a=document.getElementById("ppf-country_code")?.value||"US",i=document.getElementById("ppf-currency")?.value||"USD",n=parseFloat(document.getElementById("ppf-price")?.value)||F,o=ya({templateId:t,listingType:"property",category:"Real Estate",countryCode:a,currency:i,price:n});if(!o){Ve("ppf",0);return}Ve("ppf",o.requiredImageCount||0),A("country",o.country),A("country_code",o.country_code),A("currency",o.currency),A("subcategory",o.subcategory),A("product_location",o.product_location),A("features_text",o.features.join(", ")),A("highlights_text",o.highlights.join(", ")),A("seo_keywords_text",o.seo_keywords.join(", ")),e==="full"?(A("title",o.title),A("description",o.description),A("property_type",o.property_type||""),A("bedrooms",o.bedrooms??""),A("bathrooms",o.bathrooms??""),A("building_size",o.building_size||""),A("land_size",o.land_size||""),A("furnished",o.furnished||"")):A("description",o.description)}window.applyProductCatalogTemplate=function(e,t="full"){_t(e,t)};window.applyPropertyCatalogTemplate=function(e="full"){kt(e)};function Xi(e){return M[e]||M.default}function Zi(e,t={},a=!1){return Xi(e).map(n=>{const o=t[n.key]||"",s=n.span===2?"sm:col-span-2":"",r=!a&&n.required?"required":"",u=n.placeholder||n.label;let d="";if(n.type==="select")d=`<select class="input-field" name="${n.key}" id="pf-${n.key}" ${r}>
        <option value="">Selectâ€¦</option>
        ${n.options.map(c=>`<option value="${c}" ${o===c?"selected":""}>${c}</option>`).join("")}
      </select>`;else if(n.type==="textarea")d=`<textarea class="input-field" name="${n.key}" id="pf-${n.key}" rows="3" placeholder="Write a detailed descriptionâ€¦">${l(o)}</textarea>`;else{const m=["brand","model","color","size","material","platform"].includes(n.key)?`pf-list-${n.key}`:"",y=({brand:["Apple","Samsung","Sony","LG","HP","Dell","Lenovo","Asus","Nike","Adidas","Puma","Gucci","Rolex","Toyota","Mercedes","BMW","Tesla"],model:["Pro","Ultra","Max","SE","Standard","Plus","Series 1","Series 2"],color:["Black","White","Silver","Blue","Red","Green","Gold","Gray","Pink","Brown"],size:["XS","S","M","L","XL","XXL","32","34","36","38","40","42"],material:["Cotton","Leather","Stainless Steel","Aluminum","Wood","Glass","Plastic"],platform:["PS5","Xbox Series X","Nintendo Switch","PC","Android","iOS"]}[n.key]||[]).map(g=>`<option value="${l(g)}"></option>`).join("");d=`<input type="${n.type}" class="input-field" name="${n.key}" id="pf-${n.key}" value="${l(o)}" placeholder="${u}" ${m?`list="${m}"`:""} ${r}>${m?`<datalist id="${m}">${y}</datalist>`:""}`}return`<div class="${s}"><label class="lbl">${n.label}${n.required?a?"":" *":""}</label>${d}</div>`}).join("")}window.showAddProductStep1=function(){V(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Add New Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">ðŸ”™ Back</button>
        </div>

        <!-- Scan first â€” let AI pick the category -->
        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3 mb-4">
          <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> Scan First â€” let AI pick the category</p>
          <p class="text-[11px] text-gray-500">Upload your product photos, press SCAN WITH AI. It detects EVERY distinct product (a photo with a bag + watch + shoes + phone gives four separate listings; several photos of the same product merge into one). Review each detection, then the correct category form opens filled for you. Nothing is published automatically.</p>
          <div id="s1-drop-zone" class="drop-zone" onclick="document.getElementById('s1-img-upload').click()">
            <i data-lucide="image-plus" class="w-6 h-6 text-blue-400 mx-auto mb-2"></i>
            <p class="text-xs font-bold text-gray-300">Click or drag & drop product images</p>
            <input type="file" id="s1-img-upload" class="hidden" multiple accept="image/*,application/pdf" onchange="handleStep1ImageUpload(event)">
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
          ${pe.map(e=>`
            <button data-category="${l(e).toLowerCase()}" onclick="showAddProductStep2('${e.replace(/'/g,"\\'")}')" class="btn-press flex items-center gap-3 p-4 glass-soft border border-blue-500/15 hover:border-blue-500/40 rounded-2xl transition text-left">
              <i data-lucide="tag" class="w-5 h-5 text-blue-400 shrink-0"></i>
              <span class="text-sm font-semibold text-gray-200">${l(e)}</span>
            </button>`).join("")}
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()};window.filterProductCategoryChoices=function(e){const t=String(e||"").trim().toLowerCase();document.querySelectorAll("#product-category-grid [data-category]").forEach(a=>{const i=!t||a.dataset.category.includes(t);a.classList.toggle("hidden",!i)})};window.showAddProductStep2=function(e,t={}){const a=!!t.property_id,i=ba("product",e),n=t.currency||"USD";V(`
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
              Back
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
              <div class="sm:col-span-2"><label class="lbl">Catalog Template</label><select class="input-field" name="catalog_template_id" id="pf-catalog_template_id" onchange="applyProductCatalogTemplate('${l(e)}')"><option value="">Choose a template...</option>${i.map(o=>`<option value="${o.id}">${l(o.label)} - ${l(o.subcategory||o.category)}</option>`).join("")}</select></div>
              <div class="sm:col-span-2"><label class="lbl">Currency</label><select class="input-field" name="currency" id="pf-currency" onchange="applyProductCatalogTemplate('${l(e)}')">${Na(n)}</select></div>
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
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*,application/pdf" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${(t.images||[]).map((o,s)=>ve(o,s)).join("")}
            </div>
            <p class="text-sm text-gray-500 mt-1">Drag to reorder â€¢ âœ• deletes any image (even the main/cover â€” the next image becomes the cover) â€¢ â†» replaces â€¢ Upload up to 24 gallery images</p>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
            <div id="image-url-inputs">
              ${(t.images||[]).map((o,s)=>`<input type="hidden" name="images" id="img-url-${s}" value="${l(o)}">`).join("")}
            </div>
          </div>

          <!-- AI Product Scanner (manual only â€” never auto-scans on upload) -->
          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="min-w-0">
                <p class="text-sm font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> AI Product Scanner</p>
                <p class="text-xs text-gray-500 mt-1">Reads your uploaded images and fills the form for you. Detects every distinct product (multiple products in one photo = separate listings; several photos of the same product = one listing). Powered by Google Gemini free tier â€” add your FREE key in AI Settings if not set. Only runs when you press the button.</p>
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
            ${Zi(e,t,a)}
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
              ${["New Arrival","Best Seller","Hot Deal","Featured","Limited Stock"].map(o=>`
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="tags" value="${o}" ${(t.tags||[]).includes(o)?"checked":""} class="accent-blue-500 w-5 h-5">
                  <span class="text-sm text-gray-300">${o}</span>
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
            <div class="p-4 glass-soft border border-blue-500/15 rounded-2xl">
              <p class="text-sm font-bold text-white">Global Price Range</p>
              <p class="text-sm text-gray-500 mt-1">Allowed price range is ${F} to ${K} in the selected currency.</p>
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
    </div>`),Ut(),Ot(),wt("pf-price"),wt("pf-real_price"),_t(e,"pricing"),document.getElementById("pf-price")?.addEventListener("input",()=>_t(e,"pricing")),nn(e,t.property_id||""),window._pfEscapeHandler=o=>{o.key==="Escape"&&closeProductFormModal()},document.addEventListener("keydown",window._pfEscapeHandler)};window.closeProductFormModal=function(){window._pfEscapeHandler&&(document.removeEventListener("keydown",window._pfEscapeHandler),window._pfEscapeHandler=null),ne(),R()};window.switchProductFormCategory=function(e){const t=document.getElementById("product-form");if(!t)return;const a={},i=new FormData(t);for(const[n,o]of i.entries())n==="images"?(a.images=a.images||[],o&&!String(o).startsWith("blob:")&&a.images.push(String(o))):n==="tags"?(a.tags=a.tags||[],a.tags.push(o)):a[n]=o;a.is_featured=t.querySelector('[name="is_featured"]')?.checked||!1,a.is_active=t.querySelector('[name="is_active"]')?.checked||!1,a.property_id&&String(a.property_id).trim()?showAddProductStep2(e,a):showAddProductStep2(e,{images:a.images||[],...a})};function ve(e,t){const i=Ze(e)?'<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-300 select-none"><span class="text-2xl leading-none">📄</span><span class="text-[10px] font-bold mt-1">PDF</span></div>':`<img src="${l(e)}" onerror="this.src='/fallback.svg'">`;return`<div class="img-thumb ${t===0?"cover-img":""}" data-index="${t}" data-url="${l(e)}" title="${t===0?"Cover Image (main photo)":"Image "+(t+1)}">
    ${i}
    <button class="rm" onclick="removeImage(${t})" type="button" title="Delete this image (cover can be deleted too)">✕</button>
    <button class="rp" onclick="document.getElementById('rp-input-${t}').click()" type="button" title="Replace image">↻</button>
    <input type="file" accept="image/*,application/pdf" class="rp-input" id="rp-input-${t}" onchange="replaceImage(${t}, this)">
  </div>`}function Ut(){const e=document.getElementById("drop-zone");e&&(e.addEventListener("dragover",t=>{t.preventDefault(),e.classList.add("drag-over")}),e.addEventListener("dragleave",()=>e.classList.remove("drag-over")),e.addEventListener("drop",t=>{t.preventDefault(),e.classList.remove("drag-over"),en(t.dataTransfer.files)}))}function Ot(){const e=document.getElementById("image-preview");!e||!window.Sortable||new Sortable(e,{animation:150,onEnd:()=>Ae()})}window.handleImageUpload=async function(e){await Ra(e.target.files)};async function en(e){await Ra(e)}async function Ra(e){const t=document.getElementById("image-preview");if(t){for(const a of e){const i=a.type==="application/pdf"||Ze(a.name);if(!a.type.startsWith("image/")&&!i)continue;const n=await jt(a);if(n){const o=t.children.length,s=document.createElement("div");s.innerHTML=ve(n,o),t.appendChild(s.firstElementChild),Ae()}}Fe(),xe(),window.lucide&&lucide.createIcons()}}async function jt(e){try{const{data:{session:t}}=await b.auth.getSession(),a=(e.name||"photo.jpg").split(".").pop()||"jpg",i=`products/${Date.now()}-${Math.random().toString(36).slice(2)}`;for(let n=0;n<2;n++){const o=`${i}${n?"-"+Math.random().toString(36).slice(2,7):""}.${a}`,{error:s}=await b.storage.from("product-images").upload(o,e,{contentType:e.type,upsert:!1});if(s)console.warn("product-images upload failed (attempt "+(n+1)+"):",s.message||s);else{const{data:r}=b.storage.from("product-images").getPublicUrl(o);if(r&&r.publicUrl)return r.publicUrl}}try{const n=await N._downscaleImage(e,1200);if(n)return n}catch{}return URL.createObjectURL(e)}catch{return URL.createObjectURL(e)}}window.removeImage=function(e){const t=document.getElementById("image-preview");if(!t)return;const a=[...t.children];a[e]&&a[e].remove(),Ae(),Fe(),xe()};window.replaceImage=async function(e,t){const a=document.getElementById("image-preview");if(!a||!t||!t.files||!t.files[0])return;const i=t.files[0],n=i.type==="application/pdf"||Ze(i.name);if(!i.type.startsWith("image/")&&!n){p("Please choose an image or PDF file.","error");return}const o=await jt(i);if(!o)return;const r=[...a.querySelectorAll(".img-thumb")][e];r&&(r.outerHTML=ve(o,e),Ae(),Fe(),xe(),p(n?"Document replaced. Save changes to apply.":"Image replaced. Save changes to apply.","info"))};function Ae(){const e=document.getElementById("image-preview"),t=document.getElementById("image-url-inputs");!e||!t||(t.innerHTML="",[...e.querySelectorAll(".img-thumb")].forEach((a,i)=>{const n=a.dataset.url||(a.querySelector("img")?a.querySelector("img").src:"");if(!n)return;const o=document.createElement("input");o.type="hidden",o.name="images",o.id=`img-url-${i}`,o.value=n,t.appendChild(o),a.dataset.index=i;const s=a.querySelector(".rm");s&&s.setAttribute("onclick",`removeImage(${i})`);const r=a.querySelector(".rp");r&&r.setAttribute("onclick",`document.getElementById('rp-input-${i}').click()`);const u=a.querySelector(".rp-input");u&&(u.id=`rp-input-${i}`,u.onchange=()=>replaceImage(i,u))}))}function Fe(){const e=document.getElementById("image-preview");e&&[...e.querySelectorAll(".img-thumb")].forEach((t,a)=>{t.classList.toggle("cover-img",a===0),t.title=a===0?"Cover Image":`Image ${a+1}`})}function xe(){const e=document.getElementById("image-preview"),t=document.getElementById("gallery-counter");if(!e||!t)return;const a=e.querySelectorAll(".img-thumb").length;t.textContent=a?`${a} image${a>1?"s":""} â€” you can save and publish anytime`:"No images yet â€” you can still save and publish anytime",t.className="text-sm mt-1 font-bold text-gray-400"}function Me(e,t){return`kco_product_form_autosave_${e}_${t||"new"}`}function tn(e){const t=new FormData(e),a={images:[],tags:[],fields:{}};for(const[i,n]of t.entries())i==="images"?n&&!String(n).startsWith("blob:")&&a.images.push(String(n)):i==="tags"?a.tags.push(String(n)):a.fields[i]=String(n);return a.fields.is_featured=e.querySelector('[name="is_featured"]')?.checked?"on":"",a.fields.is_active=e.querySelector('[name="is_active"]')?.checked?"on":"",a}function an(e,t){if(!t||typeof t!="object")return!1;const a=t.fields||{};Object.entries(a).forEach(([n,o])=>{const s=e.querySelector(`[name="${n}"]`);s&&(s.type==="checkbox"?s.checked=o==="on"||o===!0:s.value=o==null?"":String(o))});const i=Array.isArray(t.tags)?t.tags:[];if(e.querySelectorAll('input[name="tags"]').forEach(n=>{n.checked=i.includes(n.value)}),Array.isArray(t.images)){const n=document.getElementById("image-preview");n&&(n.innerHTML=t.images.map((o,s)=>ve(o,s)).join(""),Ae(),Fe(),xe())}return!0}function St(){const e=document.getElementById("product-review-content"),t=document.getElementById("product-form");if(!e||!t)return;const a=t.querySelector('[name="title"]')?.value||"Untitled Product",i=t.querySelector('[name="brand"]')?.value||"N/A",n=parseFloat(t.querySelector('[name="price"]')?.value||"0")||0,o=parseFloat(t.querySelector('[name="real_price"]')?.value||"0")||0,s=t.querySelector('[name="stock_quantity"]')?.value,r=s===""||s==null?"Unlimited":s,u=I.section==="products"&&document.querySelector("#product-form")?.dataset?.category||"",d=[...t.querySelectorAll('input[name="tags"]:checked')].map(f=>f.value),c=document.querySelectorAll("#image-preview .img-thumb").length,m=t.querySelector('[name="is_active"]')?.checked;e.innerHTML=`
    <div class="grid grid-cols-2 gap-2">
      <div><span class="text-gray-500">Title</span><p class="text-white font-semibold">${l(a)}</p></div>
      <div><span class="text-gray-500">Brand</span><p class="text-white font-semibold">${l(i)}</p></div>
      <div><span class="text-gray-500">Price</span><p class="text-emerald-300 font-semibold">${o>n?`<span class="line-through text-gray-500 mr-1">$${o.toLocaleString()}</span>`:""}$${n.toLocaleString()}</p></div>
      <div><span class="text-gray-500">Stock</span><p class="text-white font-semibold">${l(r)}</p></div>
      <div><span class="text-gray-500">Images</span><p class="text-white font-semibold">${c}</p></div>
      <div><span class="text-gray-500">Status</span><p class="${m?"text-emerald-300":"text-amber-300"} font-semibold">${m?"Published":"Draft / Hidden"}</p></div>
    </div>
    <div class="mt-2 text-gray-400">Tags: ${d.length?l(d.join(", ")):"No tags selected"}</div>
    ${u?`<div class="text-gray-500 mt-1">Category: ${l(u)}</div>`:""}
  `}window.previewProductDraft=function(){const e=document.getElementById("product-form");if(!e)return;const t=document.querySelector("#image-preview img")?.src||"/fallback.svg",a=e.querySelector('[name="title"]')?.value||"Untitled Product",i=e.querySelector('[name="description"]')?.value||"No description yet.",n=e.querySelector('[name="brand"]')?.value||"N/A",o=parseFloat(e.querySelector('[name="price"]')?.value||"0")||0,s=parseFloat(e.querySelector('[name="real_price"]')?.value||"0")||0,r=e.dataset.category||"Product",u=e.querySelector('[name="stock_quantity"]')?.value||"Unlimited",d=e.querySelector('[name="is_active"]')?.checked;V(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Live Draft Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">ðŸ”™ Back</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="${l(t)}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
          <div class="space-y-2">
            <h4 class="text-xl font-black text-white">${l(a)}</h4>
            <div class="flex items-center gap-2">${Y(d?"active":"inactive")}<span class="badge bg-blue-500/10 text-blue-300 border-blue-500/20">${l(r)}</span></div>
            <p class="text-sm text-gray-400">${l(i)}</p>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">${s>o?`<span class="text-xs line-through text-gray-500 mr-1">$${s.toLocaleString()}</span>`:""}$${o.toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${l(u)}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2 col-span-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${l(n)}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>`)};function nn(e,t){const a=document.getElementById("product-form");if(!a)return;a.dataset.category=e;const i=Me(e,t),n=document.getElementById("product-autosave-note");if(!t)try{const u=localStorage.getItem(i);if(u){const d=JSON.parse(u);an(a,d)&&n&&(n.textContent="Autosave restored from your last session.",n.classList.remove("hidden"))}}catch{}const o=()=>{try{localStorage.setItem(i,JSON.stringify(tn(a))),n&&(n.textContent=`Auto saved at ${new Date().toLocaleTimeString()}`,n.classList.remove("hidden"))}catch{}St()};let s;const r=()=>{clearTimeout(s),s=setTimeout(o,500)};a.querySelectorAll("input, textarea, select").forEach(u=>{u.addEventListener("input",r),u.addEventListener("change",r)}),St(),xe()}const on=["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],sn=["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"],rn=["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"],ln=["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"],dn=["FWD","RWD","AWD","4WD"],mt=["title","description","brand","model","model_year","color","condition","subcategory","engine","transmission","fuel_type","drive_type","horsepower","mileage","seating_capacity","doors","body_type","safety_features","storage","ram","processor","display","graphics","os","material","size","gender","platform","voltage","type","dimensions","property_type","bedrooms","bathrooms","half_bathrooms","building_size","land_size","floors","garage","parking_spaces","furnished","year_built","year_renovated","area","address","zip_code","landmarks","town","city","state","country","country_code","latitude","longitude","listing_status","interior_features","exterior_features","home_systems","author","publisher","language","format","isbn","pages","edition","quantity","age_range","skin_type","ingredients","pet_type","lens","sensor","megapixels","video","license","version","duration","followers","engagement","niche","usage","shelf_life","assembly","weatherproof","warranty","availability_status"],ze=new Set(["price","real_price","stock_quantity","currency","images","tags","verification_status","is_featured","is_active","sku"]);function Zt(e){const t=e.id?`label[for="${e.id}"]`:null,a=t?document.querySelector(t):null;if(a)return a.textContent.replace(/\s+/g," ").trim().slice(0,60);const i=e.closest("div");if(i){const n=i.querySelector("label");if(n)return n.textContent.replace(/\s+/g," ").trim().slice(0,60)}return String(e.name||"").replace(/_/g," ")}function cn(e){const t=typeof e=="string"?document.querySelector(e):e;if(!t)return[];const a=new Set,i=[];return t.querySelectorAll("input[name], select[name], textarea[name]").forEach(n=>{const o=String(n.name||"");if(!o||o==="images"||a.has(o)||["hidden","file","submit","button"].includes(n.type))return;if(a.add(o),n.type==="checkbox"){const r=[...t.querySelectorAll(`input[name="${o}"]`)];i.push({key:o,label:Zt(n),type:"checkbox-group",options:r.map(u=>u.value).filter(Boolean),required:n.required});return}if(n.type==="radio")return;const s=n.tagName==="SELECT"?"select":n.tagName==="TEXTAREA"?"textarea":n.type==="number"?"number":"text";i.push({key:o,label:Zt(n),type:s,options:n.tagName==="SELECT"?[...n.options].map(r=>r.value).filter(Boolean):null,required:!!n.required})}),i}function un(e){return!e||!e.length?"":`
THE COMPLETE LIST OF FORM FIELDS (every single one MUST be accounted for):
${e.filter(a=>!ze.has(a.key)).map(a=>{let i=a.type;return a.type==="select"&&a.options&&a.options.length<=24?i+=` [options: ${a.options.join(" | ")}]`:a.type==="checkbox-group"&&a.options&&a.options.length?i+=` [multi-select: ${a.options.join(" | ")}]`:a.type==="number"?i="number":a.type==="textarea"&&(i="long text"),`- "${a.key}" (${a.label}) — ${i}`}).join(`
`)}
`}const Fa=/^(n\/?a|none|unknown|not (available|specified|found|visible|applicable)|null|undefined|-{1,}|no data)$/i;function ea(e,t){const a={...t||{}},i=new Set(Array.isArray(a.estimated)?a.estimated.map(c=>String(c)):[]),n=new Set(Array.isArray(a.missing_fields)?a.missing_fields.map(c=>String(c)):[]),o=[],s=[],r=c=>{if(c==null)return"";Array.isArray(c)&&(c=c.filter(f=>f!=null&&String(f).trim()!=="").join(", "));let m=String(c).replace(/\s+/g," ").trim();return m=m.replace(/^(answer|value|result|extracted)\s*[:\-]\s*/i,""),m},u=c=>{const m=r(c).replace(/[^0-9.,\-]/g,"").replace(/,(?=\d{3}\b)/g,"").replace(",","."),f=parseFloat(m);return Number.isFinite(f)?f:NaN};for(const c of e||[]){if(ze.has(c.key))continue;const m={key:c.key,label:c.label,status:"empty-ok",value:null,note:""};if(c.type==="checkbox-group"){const g=Array.isArray(a[c.key])?a[c.key].map(r).filter(Boolean):[],v=c.options&&c.options.length?g.filter(k=>c.options.includes(k)):g;v.length?(a[c.key]=v,m.status="filled",m.value=v.join(", ")):(delete a[c.key],g.length&&(m.status="flagged",m.note="values not in the allowed badge list were dropped",s.push(`${c.label}: invalid selection ignored`))),o.push(m);continue}if(!(a[c.key]!=null&&r(a[c.key])!=="")){m.status=n.has(c.key)?"missing":"empty-ok",o.push(m);continue}if(Fa.test(r(a[c.key]))){delete a[c.key],n.add(c.key),m.status="missing",m.note="document/AI said the value is unavailable",o.push(m);continue}if(c.type==="number"){const g=r(a[c.key]),v=u(a[c.key]);if(!Number.isFinite(v)){delete a[c.key],n.add(c.key),m.status="flagged",m.note=`"${g}" is not a valid number`,s.push(`${c.label}: not a valid number`),o.push(m);continue}if(/year/.test(c.key)&&(v<1800||v>new Date().getFullYear()+2)){delete a[c.key],n.add(c.key),m.status="flagged",m.note=`${v} is outside the plausible range`,s.push(`${c.label}: implausible value ${v}`),o.push(m);continue}a[c.key]=v,m.status="filled",m.value=String(v),i.has(c.key)&&(m.status="estimated",m.note="AI estimate â€” confirm"),o.push(m);continue}if(c.type==="select"&&c.options&&c.options.length){const g=Da({options:c.options.map(v=>({value:v}))},r(a[c.key]));if(g==null){m.status="flagged",m.note=`"${r(a[c.key])}" does not match any option â€” left empty`,s.push(`${c.label}: no matching option`),delete a[c.key],n.add(c.key),o.push(m);continue}a[c.key]=g,m.status="filled",m.value=g,g!==r(t?.[c.key])&&(m.note="matched to the closest option"),o.push(m);continue}let y=r(a[c.key]);c.type!=="textarea"&&c.type!=="text-long"&&y.length>120&&!["title"].includes(c.key)&&(m.status="flagged",m.note="unusually long â€” check it landed in the right field",s.push(`${c.label}: suspiciously long value`)),a[c.key]=y,m.status="filled",m.value=y.length>48?y.slice(0,48)+"â€¦":y,i.has(c.key)&&(m.status="estimated",m.note="AI estimate â€” confirm"),o.push(m)}if(e&&e.length){const c=new Set([...e.map(m=>m.key),"estimated","missing_fields","features","highlights","seo_keywords"]);Object.keys(a).forEach(m=>{c.has(m)||delete a[m]})}a.missing_fields=o.filter(c=>c.status==="missing").map(c=>c.key),a.estimated=o.filter(c=>c.status==="estimated").map(c=>c.key);const d={total:o.length,filled:o.filter(c=>c.status==="filled").length,estimated:o.filter(c=>c.status==="estimated").length,flagged:o.filter(c=>c.status==="flagged").length,missing:o.filter(c=>c.status==="missing").length};return{specs:a,checklist:o,flags:s,summary:d}}function qt(e,t){if(!e||!e.length)return"";const a={filled:'<span class="text-emerald-400 font-bold">âœ“</span>',estimated:'<span class="text-blue-300 font-bold">â‰ˆ</span>',flagged:'<span class="text-red-400 font-bold">!</span>',missing:'<span class="text-gray-500">â€”</span>',"empty-ok":'<span class="text-gray-700">Â·</span>'},i=e.filter(o=>o.status!=="empty-ok").map(o=>`<li class="flex items-start gap-2"><span class="shrink-0 w-4">${a[o.status]||""}</span><span><b>${l(o.label)}</b> <span class="text-gray-600">(${l(o.key)})</span>${o.value?` â€” <span class="text-gray-300">${l(String(o.value))}</span>`:""}${o.note?` <span class="text-gray-500">${l(o.note)}</span>`:""}</span></li>`).join(""),n=t.total-t.filled-t.estimated-t.flagged-t.missing;return`<details class="mt-2 rounded-xl border border-violet-500/20 bg-violet-500/5 p-3">
    <summary class="cursor-pointer text-[11px] font-bold text-violet-300 select-none">Field checklist â€” ${t.filled} filled Â· ${t.missing} not present in document Â· ${t.flagged} need review${t.estimated?` Â· ${t.estimated} estimates`:""}${n>0?` Â· ${n} not applicable to this listing type`:""}</summary>
    <ul class="mt-2 space-y-1.5 text-[11px] text-gray-300 max-h-64 overflow-y-auto pr-1">${i||'<li class="text-gray-500">No applicable fields found.</li>'}</ul>
  </details>`}const ge={activeProvider:"gemini",maxImages:4,PROVIDERS:{gemini:{label:"Google Gemini (Free Tier)",scan:async(e,t)=>{const a=typeof t.onProgress=="function"?t.onProgress:()=>{};a(1,"Identifying the exact product from your imagesâ€¦");const i=await N.identifyProduct(e,t);if(!i||i.identified===!1)return{identification:i,specs:null,price:null};a(2,"Completing specifications and estimating a fair market priceâ€¦");const n=await N.completeSpecsAndPrice(e,i,t).catch(()=>null);return{identification:i,specs:n?n.specs:null,price:n?n.price:null}}}},async scan(e,t){const a=this.PROVIDERS[this.activeProvider];if(!a)throw new Error(`Scanner provider "${this.activeProvider}" is not configured.`);return a.scan(e||[],t)}};function Da(e,t){const a=[...e.options||[]].map(s=>s.value).filter(Boolean);if(a.includes(String(t)))return String(t);const i={petrol:"Gasoline",gas:"Gasoline",gasoline:"Gasoline",unleaded:"Gasoline",ev:"Electric",electric:"Electric","fully electric":"Electric",hybrid:"Hybrid","hybrid electric":"Hybrid","plug-in hybrid":"Plug-in Hybrid",phev:"Plug-in Hybrid",auto:"Automatic",automatic:"Automatic","automatic transmission":"Automatic",manual:"Manual","manual transmission":"Manual",cvt:"CVT","continuously variable":"CVT","dual clutch":"Dual-Clutch",dct:"Dual-Clutch",fwd:"FWD","front-wheel drive":"FWD","front wheel drive":"FWD",rwd:"RWD","rear-wheel drive":"RWD","rear wheel drive":"RWD",awd:"AWD","all-wheel drive":"AWD","all wheel drive":"AWD","4wd":"4WD","four-wheel drive":"4WD","four wheel drive":"4WD","4x4":"4WD",sedan:"Sedan",saloon:"Sedan",suv:"SUV",hatchback:"Hatchback",coupe:"Coupe","coupÃ©":"Coupe",convertible:"Convertible",wagon:"Wagon",estate:"Wagon",pickup:"Pickup","pick up":"Pickup",van:"Van",truck:"Truck","sports car":"Sports Car",motorcycle:"Motorcycle",yacht:"Yacht","like new":"Used - Like New","used - like new":"Used - Like New"},n=String(t).toLowerCase().trim();return i[n]?i[n]:a.find(s=>s.toLowerCase().includes(n)||n.includes(s.toLowerCase()))||null}function pn(e){const t=[];return e.year&&t.push(e.year),e.brand&&t.push(e.brand),e.model&&t.push(e.model),!e.model&&e.body_type&&t.push(e.body_type),t.join(" ")||e.detected_name||""}function mn(e){const t=e&&e.identification&&e.identification.identified!==!1?e.identification:{},a=e&&e.specs?e.specs:{},i=e&&e.price?e.price:null,n=[],o=w=>Array.isArray(w)?w.join(", "):String(w??"").trim(),s=(w,h,S)=>{if(h==null||o([h])==="")return;const x=document.querySelector(`#product-form [name="${w}"]`);if(!x)return;let J=String(h);if(S&&!S.includes(J)){const Q=Da(x,J);if(Q===null)return;J=Q}x.value=J,n.push(w)};s("brand",t.brand),s("model",t.model),s("color",t.color),s("condition",t.condition,on),s("subcategory",t.subcategory),s("body_type",t.body_type||a.body_type,sn),s("model_year",a.model_year||t.year),s("title",a.title||pn(t)),s("description",a.description),s("engine",a.engine),s("transmission",a.transmission,rn),s("fuel_type",a.fuel_type,ln),s("drive_type",a.drive_type,dn),s("horsepower",a.horsepower),s("mileage",a.mileage),s("seating_capacity",a.seating_capacity),s("doors",a.doors),s("safety_features",o(a.safety_features)),s("storage",a.storage),s("ram",a.ram),s("processor",a.processor),s("display",a.display),s("graphics",a.graphics),s("os",a.os),s("material",a.material),s("size",a.size),s("gender",a.gender),s("platform",a.platform),s("type",a.type||t.type),s("age_range",a.age_range),s("skin_type",a.skin_type),s("ingredients",a.ingredients),s("dimensions",a.dimensions),s("author",a.author),s("publisher",a.publisher),s("language",a.language),s("format",a.format),s("isbn",a.isbn),s("pages",a.pages),s("edition",a.edition),s("quantity",a.quantity),s("pet_type",a.pet_type),s("lens",a.lens),s("sensor",a.sensor),s("megapixels",a.megapixels),s("video",a.video),s("license",a.license),s("version",a.version),s("duration",a.duration),s("followers",a.followers),s("engagement",a.engagement),s("niche",a.niche),s("usage",a.usage),s("shelf_life",a.shelf_life),s("assembly",a.assembly),s("weatherproof",a.weatherproof),s("warranty",a.warranty||t.warranty),s("availability_status",a.availability_status),s("features_text",o(a.features)),s("highlights_text",o(t.highlights||a.highlights)),s("seo_keywords_text",o(a.seo_keywords));const r=new Set((Array.isArray(a.tags)?a.tags:[]).map(w=>String(w).trim()));document.querySelectorAll('#product-form input[name="tags"]').forEach(w=>{r.has(w.value)&&(w.checked=!0,n.push("tags"))});const u=Number(a.stock_quantity);Number.isFinite(u)&&u>0&&s("stock_quantity",u);const d=new Set((Array.isArray(a.missing_fields)?a.missing_fields:[]).map(w=>String(w))),c=new Set(["title","description","price","real_price","stock_quantity","images","features","highlights","seo_keywords","tags","safety_features"]);d.forEach(w=>{if(c.has(w))return;const h=document.querySelector(`#product-form [name="${w}"]`);if(!(!h||h.type==="checkbox"||h.type==="radio"||h.type==="number")&&String(h.value||"").trim()===""){if(h.tagName==="SELECT"&&![...h.options].some(S=>S.value==="Not specified")){const S=document.createElement("option");S.value="Not specified",S.textContent="Not specified",h.appendChild(S)}h.value="Not specified",n.push(`${w} (Not specified)`)}});const m=document.querySelector('#product-form [name="price"]'),f=document.querySelector('#product-form [name="real_price"]'),y=i?Number(i.estimated_price):NaN,g=i?Number(i.suggested_discount_price):NaN,v=Number.isFinite(Number(F))?Number(F):0,k=Number.isFinite(Number(K))?Number(K):999999999,_=w=>Math.max(v,Math.min(k,Math.round(w)));if(Number.isFinite(y)&&y>0){f&&(f.value=String(_(y)),n.push("real_price"));const w=Number.isFinite(g)&&g>0&&g<y?g:y;m&&(m.value=String(_(w)),n.push("price"))}return St(),{filled:n}}function nt(e){const t=String(e||"").trim().toLowerCase(),a=pe.find(s=>s.toLowerCase()===t);if(a)return{category:a,listing_type:null};if(/(house|villa|apartment|condo|mansion|land|estate|real estate|property|building|bungalow|townhouse|ranch|farmhouse)/.test(t))return{category:null,listing_type:"property"};const i={bag:"Fashion",bags:"Fashion",handbag:"Fashion",handbags:"Fashion",backpack:"Fashion",backpacks:"Fashion",purse:"Fashion",wallet:"Fashion",wallets:"Fashion",luggage:"Travel & Luggage",sneaker:"Fashion",sneakers:"Fashion",shoe:"Fashion",shoes:"Fashion",boot:"Fashion",boots:"Fashion",footwear:"Fashion",sandal:"Fashion",sandals:"Fashion",heel:"Fashion",heels:"Fashion",phone:"Phones",smartphone:"Phones",smartphones:"Phones",iphone:"Phones","mobile phone":"Phones",laptop:"Computers",laptops:"Computers",computer:"Computers",notebook:"Computers",macbook:"Computers",pc:"Computers",desktop:"Computers",electronics:"Electronics",electronic:"Electronics",gadget:"Electronics",gadgets:"Electronics",tv:"Electronics",television:"Electronics",headphones:"Electronics",speaker:"Electronics",speakers:"Electronics",soundbar:"Electronics",tablet:"Electronics",earbuds:"Electronics",camera:"Cameras & Photography",cameras:"Cameras & Photography",dslr:"Cameras & Photography",drone:"Cameras & Photography",jewelry:"Jewelry",jewellery:"Jewelry",ring:"Jewelry",necklace:"Jewelry",earring:"Jewelry",earrings:"Jewelry",bracelet:"Jewelry",watch:"Watches & Accessories",watches:"Watches & Accessories",wristwatch:"Watches & Accessories","smart watch":"Watches & Accessories",clothing:"Fashion",clothes:"Fashion",fashion:"Fashion",shirt:"Fashion",shirts:"Fashion",dress:"Fashion",dresses:"Fashion",jacket:"Fashion",jackets:"Fashion",hoodie:"Fashion",jeans:"Fashion","t-shirt":"Fashion",tshirt:"Fashion",apparel:"Fashion","men's fashion":"Men","mens fashion":"Men","women's fashion":"Women","womens fashion":"Women",car:"Cars",cars:"Cars",vehicle:"Cars",vehicles:"Cars",automobile:"Cars",suv:"Cars",sedan:"Cars","luxury car":"Cars","luxury cars":"Cars",truck:"Trucks",trucks:"Trucks",trailer:"Trucks",bus:"Trucks",motorcycle:"Motorcycles",motorbike:"Motorcycles","motor bike":"Motorcycles",bicycle:"Bicycles",bicycles:"Bicycles",cycling:"Bicycles",bike:"Bicycles",motorhome:"RV & Camper Accessories",motorhomes:"RV & Camper Accessories",camper:"RV & Camper Accessories",rv:"RV & Camper Accessories",boat:"Marine & Boating",boats:"Marine & Boating",yacht:"Marine & Boating",jet:"Marine & Boating",beauty:"Beauty",skincare:"Beauty",cosmetics:"Beauty",makeup:"Beauty",perfume:"Beauty",kitchen:"Kitchen",appliance:"Home Appliances",appliances:"Home Appliances",blender:"Kitchen",kettle:"Kitchen",cookware:"Kitchen",vacuum:"Home Appliances",furniture:"Furniture",sofa:"Furniture",chair:"Furniture",chairs:"Furniture",table:"Furniture",tables:"Furniture",bed:"Furniture",mattress:"Furniture",desk:"Furniture",toy:"Toys & Hobbies",toys:"Toys & Hobbies",game:"Gaming",games:"Gaming",gaming:"Gaming",console:"Gaming",food:"Food & Groceries",groceries:"Food & Groceries",snack:"Food & Groceries",snacks:"Food & Groceries",beverage:"Food & Groceries",baby:"Baby",kids:"Kids",stroller:"Baby",health:"Health & Medical",medical:"Health & Medical",supplement:"Health & Medical",fitness:"Sports",sport:"Sports",sports:"Sports",gym:"Sports",dumbbell:"Sports",book:"Books",books:"Books",textbook:"Books",novel:"Books",stationery:"Office",office:"Office",printer:"Office",pen:"Office",pet:"Pets",pets:"Pets",dog:"Pets",cat:"Pets",musical:"Musical Instruments",guitar:"Musical Instruments",piano:"Musical Instruments",instrument:"Musical Instruments",drum:"Musical Instruments",software:"Software & Digital Products",digital:"Software & Digital Products",account:"Software & Digital Products",accounts:"Software & Digital Products",instagram:"Software & Digital Products",tiktok:"Software & Digital Products",camping:"Camping & Hiking",tent:"Camping & Hiking",hiking:"Camping & Hiking",flower:"Flowers & Gifts",flowers:"Flowers & Gifts",gift:"Flowers & Gifts",gifts:"Flowers & Gifts",wedding:"Wedding Supplies",party:"Party & Event Supplies",coin:"Coins & Bullion",coins:"Coins & Bullion",art:"Arts & Crafts",painting:"Arts & Crafts",craft:"Arts & Crafts"},n=i[t]||i[t.replace(/s$/,"")]||i[t.replace(/\s+/g," ")];if(n)return{category:n,listing_type:null};for(const s of pe)if(t.includes(s.toLowerCase())||t.length>2&&s.toLowerCase().includes(t))return{category:s,listing_type:null};return{category:yi(t)||"Other",listing_type:null}}function gn(e){const t=String(e||"").toLowerCase().trim();if(!t)return null;const a=Et.find(n=>n.toLowerCase()===t);return a||Et.find(n=>n.toLowerCase().includes(t)||t.includes(n.toLowerCase()))||null}let We=null;window._resolveScanConfirm=function(e,t){typeof We=="function"&&We({choice:e,category:t})};let q=[],fe=[],ee="";function Ht(e,t){const i=(Array.isArray(e.image_indices)?e.image_indices:[]).map(n=>t[n]).filter(Boolean);return i.length?i:t}function bn(e,t){const a=nt(e.category),i=e.listing_type==="property"||a&&a.listing_type==="property",n=i?"Real Estate":a.category||e.category||"Other",o=e.confidence||"medium",s={high:"bg-emerald-500/10 text-emerald-400 border-emerald-500/20",medium:"bg-amber-500/10 text-amber-400 border-amber-500/20",low:"bg-red-500/10 text-red-400 border-red-500/20"}[o]||"bg-amber-500/10 text-amber-400 border-amber-500/20",r=Ht(e,fe).slice(0,3);return`
  <div class="scan-review-card rounded-xl border border-violet-500/30 bg-violet-500/10 p-3 space-y-2 fade-in" data-i="${t}">
    <div class="flex items-center justify-between gap-2 flex-wrap">
      <p class="text-xs font-bold text-white">${t+1}. ${l(e.detected_name||"Detected product")}</p>
      <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${s}">${l(o).toUpperCase()}</span>
    </div>
    <div class="flex items-center gap-2 flex-wrap">
      ${r.map(u=>`<img src="${l(u)}" class="w-10 h-10 rounded-lg object-cover border border-violet-500/20" onerror="this.src='/fallback.svg'">`).join("")}
      <span class="text-[11px] text-gray-400">${i?"Real Estate":l(n)} Â· ${(e.image_indices||[]).length||1} image(s)</span>
    </div>
    <div class="flex flex-wrap gap-2">
      <button type="button" onclick="scanReviewContinue(${t})" class="btn-press px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg transition">Continue to ${i?"Properties Manager":"its form"}</button>
      <button type="button" onclick="scanReviewEdit(${t})" class="btn-press px-4 py-2 bg-gray-700/60 hover:bg-gray-600 text-gray-200 text-xs font-bold rounded-lg transition">Edit</button>
      <button type="button" onclick="scanReviewRemove(${t})" class="btn-press px-4 py-2 bg-red-900/40 hover:bg-red-800/60 text-red-200 text-xs font-bold rounded-lg transition">Remove</button>
      <button type="button" onclick="scanReviewCancel()" class="btn-press px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 text-xs font-bold rounded-lg transition">Cancel</button>
    </div>
  </div>`}window.scanReviewRender=function(){const e=document.getElementById(ee);if(e){if(e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),!q.length){e.classList.add("text-gray-400"),e.textContent="All detected products were removed â€” nothing was changed.";return}e.classList.add("text-gray-100"),e.innerHTML=`
    <div class="space-y-3">
      <div>
        <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="list-checks" class="w-4 h-4 text-violet-400"></i> ${q.length} distinct product${q.length>1?"s":""} detected</p>
        <p class="text-[11px] text-gray-400 mt-1">Photos of the same product are grouped into one listing; different products stay separate. Edit or remove cards as needed â€” then either Continue one-by-one, or press Continue with ALL to save & publish everything in one click.</p>
        <button type="button" id="btn-scan-continue-all" onclick="scanReviewContinueAll()" class="btn-press mt-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition flex items-center gap-2"><i data-lucide="rocket" class="w-4 h-4"></i> Continue with ALL â€” Save &amp; Publish Everything</button>
      </div>
      ${q.map((t,a)=>bn(t,a)).join("")}
    </div>`,window.lucide&&lucide.createIcons()}};window.scanReviewContinue=async function(e){const t=q[e];if(!t)return;const a=Ht(t,fe),i=nt(t.category);if(t.listing_type==="property"||i&&i.listing_type==="property"){(ee==="s1-scan-status"||ee==="scanner-scan-status")&&(ne(),me=[]),yn(t,a);return}const o=i.category||t.category||"Other";if(ee==="s1-scan-status"||ee==="scanner-scan-status"){try{localStorage.removeItem(Me(o,""))}catch{}me=[];let s=t.property_id?Se[t.property_id]:null;s&&s.specifications&&typeof s.specifications=="object"&&(s={...s,...s.specifications}),showAddProductStep2(o,s?{...s,images:a}:{images:a}),await ta(t,a,o)}else{const s=document.getElementById("product-form"),r=s&&s.dataset.category||"";if(o!==r){try{localStorage.removeItem(Me(o,""))}catch{}switchProductFormCategory(o);const u=document.getElementById(ee);u&&(u.classList.remove("hidden"),u.classList.add("text-blue-300"),u.textContent=`Category changed to ${o} â€” finishing the scanâ€¦`),window.lucide&&lucide.createIcons()}await ta(t,a,o)}};window.scanReviewEdit=function(e){const t=q[e];if(!t)return;const a=document.querySelector(`.scan-review-card[data-i="${e}"]`);if(!a)return;const i=nt(t.category),o=t.listing_type==="property"||i&&i.listing_type==="property"?"Real Estate":i.category||t.category||"Other",s=pe.map(r=>`<option value="${l(r)}" ${r===o?"selected":""}>${l(r)}</option>`).join("");a.innerHTML=`
    <p class="text-xs font-bold text-white">Edit detected product #${e+1}</p>
    <div class="space-y-2">
      <input id="sr-name-${e}" class="input-field !py-2 !text-xs" value="${l(t.detected_name||"")}" placeholder="Product name">
      <input id="sr-brand-${e}" class="input-field !py-2 !text-xs" value="${l(t.brand||"")}" placeholder="Brand">
      <input id="sr-model-${e}" class="input-field !py-2 !text-xs" value="${l(t.model||"")}" placeholder="Model">
      <select id="sr-cat-${e}" class="input-field !py-2 !text-xs">${s}</select>
    </div>
    <div class="flex flex-wrap gap-2">
      <button type="button" onclick="scanReviewApplyEdit(${e})" class="btn-press px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition">Apply</button>
      <button type="button" onclick="scanReviewRender()" class="btn-press px-4 py-2 bg-gray-700/60 hover:bg-gray-600 text-gray-200 text-xs font-bold rounded-lg transition">Back</button>
    </div>`};window.scanReviewApplyEdit=function(e){const t=q[e];if(!t)return;const a=document.getElementById(`sr-name-${e}`)?.value,i=document.getElementById(`sr-brand-${e}`)?.value,n=document.getElementById(`sr-model-${e}`)?.value,o=document.getElementById(`sr-cat-${e}`)?.value;a&&(t.detected_name=a),i&&(t.brand=i),n&&(t.model=n),o&&(t.category=o),scanReviewRender()};window.scanReviewRemove=function(e){q.splice(e,1),scanReviewRender()};window.scanReviewCancel=function(){const e=document.getElementById(ee);e&&(e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300"),e.classList.add("text-gray-400"),e.textContent="Scan cancelled â€” nothing was changed.")};window.scanReviewContinueAll=async function(){const e=document.getElementById(ee),t=(d,c)=>{e&&(e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400","text-gray-100"),c&&e.classList.add(c),e.innerHTML=d,window.lucide&&lucide.createIcons())};if(!q.length)return;const a=document.getElementById("btn-scan-continue-all");a&&(a.disabled=!0,a.textContent="Saving everythingâ€¦");const i=q.length;let n=0,o=0,s=0;const r=[];for(let d=0;d<i;d++){const c=q[d];if(!c)continue;const m=nt(c.category);if(c.listing_type==="property"||m&&m.listing_type==="property"){r.push(d);continue}const y=m.category||c.category||"Other",g=Ht(c,fe);t(`<p class="flex items-center gap-2"><i data-lucide="loader" class="w-4 h-4 animate-spin text-blue-300"></i> Completing ${d+1} of ${i}: <b>${l(c.detected_name||"product")}</b>â€¦</p>`,"text-blue-300");try{const v=await N.completeSpecsAndPrice(g,c,{category:y,maxImages:ge.maxImages}).catch(()=>null);let k=v&&v.specs||{},_=v?v.price:null;try{const C=await N.verifyExtraction(g,c,k,[],{maxImages:ge.maxImages});if(C&&C.corrections&&typeof C.corrections=="object"){for(const[O,E]of Object.entries(C.corrections))E==null||String(Array.isArray(E)?E.join(", "):E).trim()===""||mt.includes(O)&&(k[O]=E);for(const[O,E]of Array.isArray(C.wrong_mapping)?C.wrong_mapping:[])mt.includes(E)&&k[O]!=null&&(k[E]==null||String(k[E]).trim()==="")&&(k[E]=k[O],delete k[O])}}catch{}const w={};for(const[C,O]of Object.entries(k)){if(!mt.includes(C)||ze.has(C))continue;const E=Array.isArray(O)?O.map(se=>String(se??"").replace(/\s+/g," ").trim()).filter(Boolean):String(O??"").replace(/\s+/g," ").trim();if(!(!E.length||(Array.isArray(E)?E.join(" "):E).match(Fa))){if(/^(model_)?year/.test(C)){const se=parseInt(E,10);if(!Number.isFinite(se)||se<1800||se>new Date().getFullYear()+2)continue}w[C]=E}}k=w;const h=k||{},S=c.property_id&&Se[c.property_id]||null,x=S?S.specifications&&typeof S.specifications=="object"?{...S,...S.specifications}:S:null,J=[c.year||h.year,c.brand||h.brand,c.model||h.model].filter(Boolean).join(" ")||c.detected_name||"Product",Q=_?Number(_.estimated_price??_.price??_.estimate):NaN;let z=Number.isFinite(Q)&&Q>0?Q:x?Number(x.price):NaN;(!Number.isFinite(z)||z<=0)&&(z=F),z=Math.max(F,Math.min(K,z));const D=new Set(["title","description","brand","color","size","condition","warranty","availability_status"]),$={};for(const[C,O]of Object.entries({...Object.fromEntries($t.filter(E=>E!=="year_estimated"&&E!=="listing_status").map(E=>[E,c[E]??null])),...h})){if(D.has(C)||ze.has(C))continue;const E=Array.isArray(O)?O.filter(se=>se!=null&&String(se).trim()!==""):O;E==null||typeof E=="string"&&!E.trim()||($[C]=E)}const X={...x&&x.specifications&&typeof x.specifications=="object"?x.specifications:{},...$},B={listing_type:"product",category:y,subcategory:x?.subcategory||h.subcategory||null,title:h.title||x&&x.title||J,description:h.description||x&&x.description||"",price:z,currency:x&&x.currency||"USD",country:x&&x.country||"",country_code:x&&x.country_code||"",listing_status:"sale",state:"",city:"",product_location:"",latitude:null,longitude:null,is_active:!0,is_featured:!!(x&&x.is_featured),brand:c.brand||h.brand||x&&x.brand||null,color:h.color||x&&x.color||null,size:h.size||x&&x.size||null,condition:x&&x.condition||null,warranty:x&&x.warranty||null,availability_status:x&&x.availability_status||"In Stock",stock_quantity:x&&x.stock_quantity?parseInt(x.stock_quantity):null,images:g.length?g:x&&x.images||[],features:Array.isArray(h.features)&&h.features.length?h.features:x&&x.features||[],tags:Array.isArray(h.tags)&&h.tags.length?h.tags:x&&x.tags||[],highlights:Array.isArray(h.highlights)&&h.highlights.length?h.highlights:x&&x.highlights||[],seo_keywords:Array.isArray(h.seo_keywords)&&h.seo_keywords.length?h.seo_keywords:x&&x.seo_keywords||[],is_ai_generated:!0,ai_generated_fields:["title","description","specifications","price"],specifications:X,updated_at:new Date().toISOString()};if(x&&x.property_id){B.property_id=x.property_id;const{error:C}=await b.from("showroom_listings").upsert(B,{onConflict:"property_id"});if(C)throw C;o++}else{B.property_id=et();const{error:C}=await b.from("showroom_listings").insert(B);if(C)throw C;n++}}catch(v){s++,t(`<p class="text-amber-300">Could not save "${l(c.detected_name||"product")}": ${l(String(v?.message||v))} â€” continuing with the restâ€¦</p>`,"text-amber-300")}}q=q.filter((d,c)=>r.includes(c));const u=`${o} updated, ${n} new${s?`, ${s} failed`:""}`;if(!q.length)Se={},fe=[],t(`<div class="space-y-1">
      <p class="font-bold text-emerald-300 flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4"></i> Done â€” everything saved &amp; published: ${u}.</p>
      <p class="text-[11px] text-gray-400">Your products are live in the showroom. Use Publish &amp; Deploy to push the site.</p>
    </div>`,"text-emerald-300"),p(`All done â€” ${u} saved & published.`,"success");else{scanReviewRender();const d=document.getElementById(ee);if(d){const c=document.createElement("p");c.className="text-xs font-bold text-emerald-300",c.textContent=`Saved & published: ${u}. Property cards below still need Continue.`,d.prepend(c)}p(`Saved ${u}.`,s?"info":"success")}R()};function Ua(e){const t=e&&e.identification&&e.identification.identified!==!1?e.identification:{},a=e&&e.specs?e.specs:{},i=e&&e.price?e.price:null,n=[],o=P=>Array.isArray(P)?P.join(", "):String(P??"").trim(),s=(P,T)=>{if(T==null||o([T])==="")return;const W=document.querySelector(`#property-form [name="${P}"]`);W&&(W.value=String(T),n.push(P))},r=t.property_type||a.property_type;if(r){const P=gn(r);P&&s("property_type",P)}s("title",a.title||t.detected_name),s("description",a.description),s("subcategory",t.subcategory||a.subcategory);const u=t.bedrooms??a.bedrooms;u!=null&&u!==""&&s("bedrooms",parseInt(u,10)||u);const d=t.bathrooms??a.bathrooms;d!=null&&d!==""&&s("bathrooms",parseInt(d,10)||d),s("building_size",t.building_size||a.building_size),s("land_size",t.land_size||a.land_size);const c=t.parking_spaces??a.parking_spaces;c!=null&&c!==""&&s("parking_spaces",parseInt(c,10)||c);const m=String(t.furnished||a.furnished||"").toLowerCase();/furnished|yes/.test(m)?s("furnished","Furnished"):/unfurnished|no|empty/.test(m)&&s("furnished","Unfurnished");const f=String(t.listing_status||a.listing_status||"").toLowerCase();/rent|lease/.test(f)?s("listing_status","rent"):/sale|buy|purchase/.test(f)&&s("listing_status","sale");const y=t.area||a.area;y&&!(t.town||a.town)&&s("town",y),s("town",t.town||a.town),s("city",t.city||a.city),s("state",t.state||a.state);const g=t.country||a.country;if(s("country",g),g){const P=(Ee||[]).find(T=>String(T.name||"").toLowerCase()===String(g).toLowerCase()||String(T.code||"").toLowerCase()===String(g).toLowerCase());if(P&&P.code){const T=document.querySelector('#property-form [name="country_code"]');T&&(T.value=P.code,n.push("country_code"))}}const v=t.address||a.address;s("product_location",v||[y||t.town||a.town,t.city||a.city,t.state||a.state,g].filter(Boolean).join(", ")),s("address",t.address||a.address),s("zip_code",t.zip_code||a.zip_code);const k=Number(t.latitude??a.latitude),_=Number(t.longitude??a.longitude);Number.isFinite(k)&&k>=-90&&k<=90&&k!==0&&s("latitude",String(k)),Number.isFinite(_)&&_>=-180&&_<=180&&_!==0&&s("longitude",String(_)),s("features_text",o(a.features)),s("highlights_text",o(t.highlights||a.highlights)),s("seo_keywords_text",o(a.seo_keywords));const w=t.half_bathrooms??a.half_bathrooms;w!=null&&w!==""&&s("half_bathrooms",parseInt(w,10)||w);const h=t.floors??a.floors;h!=null&&h!==""&&s("floors",parseInt(h,10)||h),s("garage",t.garage||a.garage);const S=t.year_built??a.year_built;S!=null&&S!==""&&s("year_built",parseInt(S,10)||S);const x=t.year_renovated??a.year_renovated;x!=null&&x!==""&&s("year_renovated",parseInt(x,10)||x);const J=t.condition||a.condition,Q=["New Construction","Like New","Excellent","Good","Fair","Needs Renovation"];if(J){const P=String(J).toLowerCase(),T=Q.find(W=>P.includes(W.toLowerCase())||W.toLowerCase().includes(P));T&&s("condition",T)}s("interior_features_text",o(a.interior_features)),s("exterior_features_text",o(a.exterior_features)),s("home_systems_text",o(a.home_systems));const z=o(t.landmarks||a.landmarks);z&&s("landmarks_text",z);const D=a.floor_plan;if(D&&typeof D=="object"){D.image&&s("floor_plan_image",D.image),D.levels&&s("floor_plan_levels",D.levels),D.total_area&&s("floor_plan_total_area",D.total_area);const P=Array.isArray(D.rooms)?D.rooms.map(T=>{const W=String(T).match(/^(.*?):\s*(.*)$/);return W?`${W[1].trim()}: ${W[2].trim()}`:String(T)}):[];P.length&&s("floor_plan_rooms",P.join(", "))}const $=a.nearby_area;$&&typeof $=="object"&&(Array.isArray($.schools)&&$.schools.length&&s("nearby_schools_text",$.schools.join(", ")),Array.isArray($.hospitals)&&$.hospitals.length&&s("nearby_hospitals_text",$.hospitals.join(", ")),Array.isArray($.shopping)&&$.shopping.length&&s("nearby_shopping_text",$.shopping.join(", ")),Array.isArray($.transportation)&&$.transportation.length&&s("nearby_transportation_text",$.transportation.join(", ")),Array.isArray($.distances)&&$.distances.length&&s("nearby_distances_text",$.distances.join(", ")));const X=Array.isArray(a.legal_info)?a.legal_info.join(", "):o(a.legal_info);X&&s("legal_info_text",X),a.inspection_info&&s("inspection_info",a.inspection_info),a.risk_notes&&s("risk_notes",a.risk_notes);const B=document.querySelector('#property-form [name="verification_status"]');B&&(B.value="Not verified",n.push("verification_status"));const C=new Set((Array.isArray(a.missing_fields)?a.missing_fields:[]).map(P=>String(P))),O=new Set(["title","description","price","real_price","features","highlights","seo_keywords","country","country_code","state","city","town","product_location","area","address","zip_code","latitude","longitude","landmarks_text","interior_features_text","exterior_features_text","home_systems_text","floor_plan_image","floor_plan_levels","floor_plan_total_area","floor_plan_rooms","nearby_schools_text","nearby_hospitals_text","nearby_shopping_text","nearby_transportation_text","nearby_distances_text","legal_info_text","inspection_info","risk_notes","documents_text","verification_date","verification_status"]);C.forEach(P=>{if(O.has(P))return;const T=document.querySelector(`#property-form [name="${P}"]`);if(!(!T||T.type==="checkbox"||T.type==="radio"||T.type==="number")&&String(T.value||"").trim()===""){if(T.tagName==="SELECT"&&![...T.options].some(W=>W.value==="Not specified")){const W=document.createElement("option");W.value="Not specified",W.textContent="Not specified",T.appendChild(W)}T.value="Not specified",n.push(`${P} (Not specified)`)}});const E=Number.isFinite(Number(F))?Number(F):0,se=Number.isFinite(Number(K))?Number(K):999999999,Jt=P=>Math.max(E,Math.min(se,Math.round(P))),Te=i?Number(i.estimated_price):NaN,Oe=i?Number(i.suggested_discount_price):NaN;if(Number.isFinite(Te)&&Te>0){const P=document.querySelector('#property-form [name="real_price"]');P&&(P.value=String(Jt(Te)),n.push("real_price"));const T=Number.isFinite(Oe)&&Oe>0&&Oe<Te?Oe:Te;s("price",String(Jt(T)))}return typeof window.refreshPropertyMapFromForm=="function"&&window.refreshPropertyMapFromForm(),{filled:n}}const $t=["brand","model","year","year_estimated","body_type","color","condition","subcategory","property_type","bedrooms","bathrooms","half_bathrooms","building_size","land_size","floors","garage","parking_spaces","furnished","year_built","year_renovated","area","address","zip_code","landmarks","town","city","state","country","latitude","longitude","listing_status"];function Gt(){return Date.now()<(typeof N<"u"&&N._geminiQuotaUntil||0)?'<p class="text-[11px] text-amber-300 mt-1">⚠ Your Gemini key hit its FREE rate limit during this scan — parts were completed from saved details only. Wait ~1 minute and scan again for full AI reading.</p>':""}async function Vt({imageUrls:e,identification:t,category:a,formSelector:i}){const n=cn(i),o=un(n),s=await N.completeSpecsAndPrice(e,t,{category:a||"",maxImages:ge.maxImages,fieldsSchema:o}),r=s?s.price:null,u=s&&s.specs||{};let d={};for(const g of $t)t&&t[g]!=null&&t[g]!==""&&(d[g]=t[g]);d={...d,...u};let c=ea(n,d),m=!1;const f=`${s&&s.specs&&s.specs._aiProvider||""} ${s&&s.specs&&s.specs._aiModel||""}`;if(!/pollinations|free ai/i.test(f))try{const g=await N.verifyExtraction(e,t,c.specs,n,{maxImages:ge.maxImages});if(g){const v=g.corrections&&typeof g.corrections=="object"?g.corrections:{},k=Object.keys(v);if(k.length){const _={...c.specs};for(const[w,h]of Object.entries(v))n.some(S=>S.key===w)&&(h==null||String(Array.isArray(h)?h.join(", "):h).trim()===""||(_[w]=h));for(const[w,h]of Array.isArray(g.wrong_mapping)?g.wrong_mapping:[])_[w]!=null&&(_[h]==null||String(_[h]).trim()==="")&&(_[h]=_[w],delete _[w]);c=ea(n,_),t={...t};for(const w of k)$t.includes(w)&&c.specs[w]!=null&&(t[w]=c.specs[w])}m=!0,c.verificationNotes=Array.isArray(g.notes)?g.notes.slice(0,4):[]}}catch{}return{specs:c.specs,price:r,checklist:c.checklist,summary:c.summary,verified:m,verificationNotes:c.verificationNotes||[],identification:t}}async function ta(e,t,a){const i=document.getElementById("scan-ai-status"),n=(o,s)=>{i&&(i.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),s&&i.classList.add(s),i.innerHTML=o)};try{n("Reading every image/page, completing all specifications and pricesâ€¦","text-blue-300");let o=e;const s=await Vt({imageUrls:t,identification:o,category:a,formSelector:"#product-form"});o=s.identification||o;const r=mn({identification:o,specs:s.specs,price:s.price}),u=[o.year,o.brand,o.model].filter(Boolean).join(" ")||o.detected_name||"the product";let d=`${l(u)} â€” ${r.filled.length} field${r.filled.length>1?"s":""} ready for you (including the detailed description and suggested Real + Discount prices). Review and edit everything, then press SAVE / UPDATE.`;o.year_estimated&&(d+=" Confirm the model year before saving."),d+=s.verified?'<p class="text-[11px] text-gray-400 mt-1">âœ“ Second-pass verification completed â€” every value was re-checked against your document.</p>':'<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run â€” values come from the first pass.</p>',s.summary.flagged&&(d+=`<p class="text-[11px] text-red-300 mt-1">${s.summary.flagged} value${s.summary.flagged>1?"s need":" needs"} your attention below.</p>`),d+=Gt(),d+=qt(s.checklist,s.summary),n(d,"text-emerald-300"),p(`Review ${u}, then press SAVE / UPDATE.`,"success")}catch(o){const s=String(o?.message||o),r=/key|api|configured|settings|vision/i.test(s);n(r?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${s}`,"text-red-400"),p("AI scan failed.","error")}window.lucide&&lucide.createIcons()}window.scanProductWithAI=async function(){const e=document.getElementById("product-form");if(!e){p("Open the product form first.","error");return}const t=document.getElementById("btn-scan-ai"),a=document.getElementById("scan-ai-status"),i=[...document.querySelectorAll('#image-url-inputs [name="images"]')||[]].map(u=>u.value).filter(Boolean);if(!i.length){p("Upload at least one product image before scanning.","error");return}const n=t?t.innerHTML:"",o=(u,d)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),d&&a.classList.add(d),a.innerHTML=u)};try{const u=await N.getConfig();String(u.gemini_key||u.gemini_api_key||"").trim()||o("No Gemini key found â€” scanning anyway with the FREE built-in AI (no key needed). For the best photo recognition, add a FREE Gemini key in AI Settings (aistudio.google.com/apikey).","text-blue-300")}catch{}t&&(t.disabled=!0,t.innerHTML="Scanningâ€¦"),o("Detecting every distinct product in your imagesâ€¦","text-blue-300");let s;try{s=await N.detectProducts(i,{category:e.dataset.category||"",maxImages:ge.maxImages})}catch(u){const d=String(u?.message||u),c=/key|api|configured|settings|vision/i.test(d);o(c?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${d}`,"text-red-400"),p("AI scan failed.","error"),t&&(t.disabled=!1,t.innerHTML=n);return}t&&(t.disabled=!1,t.innerHTML=n);let r=s&&s.identified!==!1&&Array.isArray(s.products)&&s.products.length?s.products:[];r.length||(r=[{detected_name:"Product from your photos",category:e.dataset.category||"Other",listing_type:"product",confidence:"low",image_indices:i.map((u,d)=>d)}],o("The AI could not confidently read these photos â€” a card was created with all of them. Review, edit the details, then continue to save & publish.","text-amber-300")),q=r,fe=i,Se={},ee="scan-ai-status",scanReviewRender(),p(`${r.length} distinct product${r.length>1?"s":""} detected â€” review each one, then continue.`,"info")};function yn(e,t){window._pfEscapeHandler&&(document.removeEventListener("keydown",window._pfEscapeHandler),window._pfEscapeHandler=null),showAddPropertyModal();const a=document.getElementById("image-preview"),i=document.getElementById("image-url-inputs");a&&i&&(a.innerHTML=t.map((s,r)=>ve(s,r)).join(""),i.innerHTML=t.map((s,r)=>`<input type="hidden" name="images" id="img-url-${r}" value="${l(s)}">`).join(""),Fe(),xe());const n=document.getElementById("scan-ai-prop-status"),o=(s,r)=>{n&&(n.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300"),r&&n.classList.add(r),n.innerHTML=s)};o("Reading every page, completing property details and valueâ€¦","text-blue-300"),(async()=>{try{const s=await Vt({imageUrls:t,identification:e,category:"Real Estate",formSelector:"#property-form"}),r=s.identification||e,u=Ua({identification:r,specs:s.specs,price:s.price});let d;s.price?d=`${l(r.detected_name||"Property")} â€” ${u.filled.length} field${u.filled.length>1?"s":""} ready for you. Review and edit everything, then press Publish Property.`:d=`${l(r.detected_name||"Property")} â€” ${u.filled.length} fields ready. Price estimate skipped â€” set the price manually, then press Publish Property.`,d+=s.verified?'<p class="text-[11px] text-gray-400 mt-1">✓ Second-pass verification completed — every value was re-checked against your document.</p>':'<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run — values come from the first pass.</p>',d+=Gt(),d+=qt(s.checklist,s.summary),o(d,s.price?"text-emerald-300":"text-amber-300"),p("Review the property details, then press Publish Property.","success"),window.lucide&&lucide.createIcons()}catch(s){const r=/key|api|configured|settings|vision/i.test(String(s?.message||s));o(r?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${String(s?.message||s)}`,"text-red-400"),p("AI scan failed.","error")}})()}window.scanPropertyWithAI=async function(){if(!document.getElementById("property-form")){p("Open the property form first.","error");return}const t=document.getElementById("btn-scan-ai-prop"),a=document.getElementById("scan-ai-prop-status"),i=[...document.querySelectorAll('#image-url-inputs [name="images"]')||[]].map(u=>u.value).filter(Boolean);if(!i.length){p("Upload at least one property image before scanning.","error");return}const n=t?t.innerHTML:"",o=(u,d)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),d&&a.classList.add(d),a.innerHTML=u)};try{const u=await N.getConfig();String(u.gemini_key||u.gemini_api_key||"").trim()||o("No Gemini key found â€” scanning anyway with the FREE built-in AI (no key needed). For the best photo recognition, add a FREE Gemini key in AI Settings (aistudio.google.com/apikey).","text-blue-300")}catch{}t&&(t.disabled=!0,t.innerHTML="Scanningâ€¦"),o("Identifying this property from your imagesâ€¦","text-blue-300");let s;try{s=await N.identifyProduct(i,{category:"Real Estate",maxImages:ge.maxImages})}catch(u){const d=String(u?.message||u),c=/key|api|configured|settings|vision/i.test(d);o(c?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${d}`,"text-red-400"),p("AI scan failed.","error"),t&&(t.disabled=!1,t.innerHTML=n);return}if(!s||s.identified===!1){o(s&&s.reason?`Could not identify the property: ${l(s.reason)}`:"The property could not be read from these images. Make sure the photos clearly show it, then try again.","text-amber-300"),p("The property could not be identified from the images.","error"),t&&(t.disabled=!1,t.innerHTML=n);return}t&&(t.disabled=!1,t.innerHTML=n);const r=await new Promise(u=>{We=f=>{We=null,u(f)};const d=document.getElementById("scan-ai-prop-status");if(!d){u({choice:"continue"});return}if(!window._propFormDirty){u({choice:"continue"});return}d.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300");const c=s.confidence||"medium",m={high:"text-emerald-400 border-emerald-500/20",medium:"text-amber-400 border-amber-500/20",low:"text-red-400 border-red-500/20"}[c]||"text-amber-400 border-amber-500/20";d.innerHTML=`
      <div class="rounded-xl border border-violet-500/30 bg-violet-500/10 p-3 space-y-2 fade-in">
        <p class="text-xs font-bold text-white">AI identified: <span class="text-violet-300">${l(s.detected_name||"this property")}</span></p>
        <p class="text-[11px] text-gray-400">
          ${s.property_type?"Type: "+l(s.property_type)+" â€¢ ":""}${s.bedrooms?l(s.bedrooms)+" bed â€¢ ":""}${s.bathrooms?l(s.bathrooms)+" bath â€¢ ":""}${[s.city,s.state,s.country].filter(Boolean).join(", ")||"location not visible"}
          <span class="ml-1 inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${m}">${l(c).toUpperCase()} confidence</span>
        </p>
        <div class="flex flex-wrap gap-2">
          <button type="button" onclick="_resolveScanConfirm('continue')" class="btn-press px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg transition">Fill the property form</button>
          <button type="button" onclick="_resolveScanConfirm('cancel')" class="btn-press px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 text-xs font-bold rounded-lg transition">Cancel</button>
        </div>
      </div>`});if(!r||r.choice==="cancel"){o("Scan cancelled â€” nothing was changed.","text-gray-400"),p("Scan cancelled.","info");return}try{o("Reading every page, completing property details and market valueâ€¦","text-blue-300");const u=await Vt({imageUrls:i,identification:s,category:"Real Estate",formSelector:"#property-form"}),d=u.identification||s,c=Ua({identification:d,specs:u.specs,price:u.price});let m=`${l(d.detected_name||"Property")} â€” ${c.filled.length} field${c.filled.length>1?"s":""} ready for you. Review and edit everything, then press Publish Property.`;m+=u.verified?'<p class="text-[11px] text-gray-400 mt-1">âœ“ Second-pass verification completed â€” every value was re-checked against your document.</p>':'<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run â€” values come from the first pass.</p>',m+=Gt(),m+=qt(u.checklist,u.summary),o(m,"text-emerald-300"),p("Review the property details, then press Publish Property.","success")}catch(u){const d=String(u?.message||u),c=/key|api|configured|settings|vision/i.test(d);o(c?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${d}`,"text-red-400"),p("AI scan failed.","error")}window.lucide&&lucide.createIcons()};let me=[];window.handleStep1ImageUpload=async function(e){const t=Array.from(e.target.files||[]).slice(0,10);if(t.length){for(const a of t)try{const i=await jt(a);i&&me.push(i)}catch{}Oa(),e.target.value=""}};window.removeStep1Image=function(e){me.splice(e,1),Oa()};function Oa(){const e=document.getElementById("s1-image-preview");if(!e)return;e.innerHTML=me.map((a,i)=>`
    <div class="img-thumb ${i===0?"cover-img":""}" data-index="${i}">
      <img src="${l(a)}" onerror="this.src='/fallback.svg'">
      <button class="rm" onclick="removeStep1Image(${i})" type="button">ðŸ”™</button>
    </div>`).join("");const t=document.getElementById("btn-s1-scan");t&&(t.disabled=me.length===0,t.style.opacity=me.length?"":"0.5"),window.lucide&&lucide.createIcons()}window.scanFirstWithAI=async function(){const e=me.slice();if(!e.length){p("Upload at least one product image before scanning.","error");return}const t=document.getElementById("btn-s1-scan"),a=document.getElementById("s1-scan-status"),i=t?t.innerHTML:"",n=(r,u)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),u&&a.classList.add(u),a.innerHTML=r)};try{const r=await N.getConfig();String(r.gemini_key||r.gemini_api_key||"").trim()||n("No Gemini key found â€” scanning anyway with the FREE built-in AI (no key needed). For the best photo recognition, add a FREE Gemini key in AI Settings (aistudio.google.com/apikey).","text-blue-300")}catch{}t&&(t.disabled=!0,t.innerHTML="Scanningâ€¦"),n("Detecting every distinct product in your imagesâ€¦","text-blue-300");let o;try{o=await N.detectProducts(e,{category:"",maxImages:ge.maxImages})}catch(r){const u=/key|api|configured|settings|vision/i.test(String(r?.message||r));n(u?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${String(r?.message||r)}`,"text-red-400"),t&&(t.disabled=!1,t.innerHTML=i);return}t&&(t.disabled=!1,t.innerHTML=i);let s=o&&o.identified!==!1&&Array.isArray(o.products)&&o.products.length?o.products:[];s.length||(s=[{detected_name:"Product from your photos",category:"Other",listing_type:"product",confidence:"low",image_indices:e.map((r,u)=>u)}],n("The AI could not confidently read these photos â€” a card was created with all of them. Review, edit the details, then continue to save & publish.","text-amber-300")),q=s,fe=e,Se={},ee="s1-scan-status",scanReviewRender(),p(`${s.length} distinct product${s.length>1?"s":""} detected â€” review each one, then continue.`,"info")};let Se={};async function ja(){const e=new Set,t=[],a=i=>{!i||!i.property_id||i.listing_type==="property"||e.has(i.property_id)||!Array.isArray(i.images)||!i.images.length||(e.add(i.property_id),t.push(i))};try{const{data:i,error:n}=await b.from("showroom_listings").select("*").neq("listing_type","property");(n?[]:i||[]).forEach(a)}catch{}return Qe().forEach(a),t}window.openGeneralAiScanner=async function(){const e=await ja();V(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="scan-search" class="w-5 h-5 text-violet-400"></i> General AI Scanner</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition" title="Close">âœ• Close</button>
        </div>

        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3">
          <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> Scan your products with AI</p>
          <p class="text-[11px] text-gray-500">The scanner works on the products already in your Product Manager â€” no image upload needed. Press SCAN ALL WITH AI and it reads each product's existing photos to identify it, complete its specifications, write the description and features, pick the correct category, and suggest a fair price. Review every result, then continue to that product's form, already filled for you. Nothing is saved or published automatically.</p>
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
    </div>`),window.lucide&&lucide.createIcons()};function aa(e,t){const a=Symbol("ai-scan-timeout");return Promise.race([e,new Promise(i=>setTimeout(()=>i(a),t))]).then(i=>{if(i===a)throw new Error("A scan step took too long and timed out.");return i})}window.scanGeneralWithAI=async function(){let e=[];try{e=await aa(ja(),15e3)}catch{e=[]}if(!e.length){p("No products with photos are in the Product Manager yet â€” add a product first.","error");return}const t=document.getElementById("btn-scanner-scan"),a=document.getElementById("scanner-scan-status"),i=t?t.innerHTML:"",n=(h,S)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),S&&a.classList.add(S),a.innerHTML=h)};try{const h=await N.getConfig();String(h.gemini_key||h.gemini_api_key||"").trim()||n("No Gemini key found â€” scanning anyway with the FREE built-in AI (no key needed). Products whose photos cannot be read will still be filled from their saved details. For the best photo recognition, add a FREE Gemini key in AI Settings (aistudio.google.com/apikey).","text-blue-300")}catch{}t&&(t.disabled=!0,t.innerHTML="Scanningâ€¦"),n(`Detecting and completing ${e.length} product${e.length===1?"":"s"}â€¦`,"text-blue-300");const o=[],s=[],r={};let u=0;const d=e.length,c=new Set;let m=0,f=0;window.__scanDupContinue=function(){const h=window.__scanDupResolve;window.__scanDupResolve=null;const S=document.getElementById("btn-scan-dup-continue");S&&(S.disabled=!0),h&&h()};const y=2,g=12e4;let v=0,k=0;const _=async h=>{const S=(h.images||[]).filter(Boolean);if(!S.length)return;const x=S.map($=>String($||"").trim()).filter(Boolean),J=x.length>0&&x.every($=>c.has($));for(const $ of x)c.add($);if(J){m++;return}const Q=o.length;o.push(...S);const z=S.map(($,X)=>Q+X);let D=[];try{const $=await aa(N.detectProducts(S,{category:h.category||"",maxImages:ge.maxImages}),g);D=$&&$.identified!==!1&&Array.isArray($.products)?$.products:[]}catch{}D.length||(D=[{detected_name:h.title||h.property_id||"Product",category:h.category||"Other",listing_type:h.listing_type||"product",brand:h.brand||null,model:h.specifications&&h.specifications.model||h.model||null,confidence:"medium"}],f++),u++,r[h.property_id]=h;for(const $ of D)s.push({...$,property_id:h.property_id,image_indices:Array.isArray($.image_indices)&&$.image_indices.length?$.image_indices.map(X=>z[Number(X)]).filter(X=>X!==void 0):z,detected_name:$.detected_name||h.title||h.property_id,category:$.category||h.category||"Other",listing_type:$.listing_type||h.listing_type||"product"})},w=async()=>{for(;v<e.length;){const h=e[v++];n(`Scanning ${k+1} of ${d} product${d===1?"":"s"} (fast parallel mode)â€¦`,"text-blue-300"),await _(h),k++,k<d&&n(`Scanned ${k} of ${d} â€” continuingâ€¦`,"text-blue-300")}};if(await Promise.all(Array.from({length:Math.min(y,Math.max(1,e.length))},w)),t&&(t.disabled=!1,t.innerHTML=i),!s.length){n(`No product could be identified from the photos on your existing products${m?` (${m} duplicate product${m>1?"s":""} skipped)`:""}. Make sure each product has clear photos, then try again.`,"text-amber-300"),p("No products could be scanned.","error");return}q=s,fe=o,Se=r,ee="scanner-scan-status",scanReviewRender(),p(`Scan complete â€” ${u} product${u>1?"s":""} scanned${m?`, ${m} duplicate product${m>1?"s":""} skipped`:""}${f?`, ${f} completed from saved details (AI could not read the photo â€” review ${f>1?"those":"it"} and edit as needed)`:""}. Press "Continue with ALL" to save & publish everything at once.`,"success")};window.saveProduct=async function(e,t,a){e.preventDefault();const i=e.target,n=i.querySelector("[type=submit][name=action][value=publish]"),o=a?"One-Click Publish Changes":"One-Click Publish Product";n&&(n.disabled=!0,n.textContent="Savingâ€¦");try{const s=new FormData(i),r={};let u=0;for(const[y,g]of s.entries())if(y==="images"){r.images=r.images||[];const v=String(g);g&&!v.startsWith("blob:")?r.images.push(v):v.startsWith("blob:")&&u++}else y==="tags"?(r.tags=r.tags||[],r.tags.push(g)):r[y]=g;if(u&&!(r.images||[]).length){n&&(n.disabled=!1,n.textContent=o),p("Your images were still uploading â€” please wait a moment and press Publish again (the photos were not saved with the product).","error");return}r.is_featured=i.querySelector('[name="is_featured"]')?.checked?"on":"",r.is_active=i.querySelector('[name="is_active"]')?.checked?"on":"";const d=s.get("action")==="draft",c=y=>xt(y),m=y=>{const g=["model","storage","ram","processor","display","material","gender","platform","voltage","engine","transmission","fuel_type","horsepower","mileage","drive_type","body_type","model_year","seating_capacity","doors","real_price","type","size","age_range","skin_type","ingredients","dimensions","author","publisher","language","format","isbn","pages","edition","quantity","pet_type","lens","sensor","megapixels","video","license","version","duration","followers","engagement","niche","usage","shelf_life","assembly","weatherproof","movement","case_material","water_resistance","gemstone","movement_type","warranty_period"],v={};for(const k of g){const _=y[k];if(k==="real_price"){const w=_!=null&&String(_).trim()!==""?parseFloat(_):null;v[k]=w!=null&&Number.isFinite(w)&&w>0?Math.round(w):null;continue}v[k]=_!=null&&String(_).trim()!==""?_:null}if(y.safety_features){const k=c(y.safety_features);v.safety_features=k.length?k:null}return v};let f;if(a){let y=ke((window._productsData||[]).find(B=>B.property_id===a));if(!y){const{data:B}=await b.from("showroom_listings").select("*").eq("property_id",a).maybeSingle();y=B?ke(B):null}if(!y)throw new Error("Could not load the current product. Refresh the page and try again.");const g=(B,C)=>{const O=B===""||B==null?"":B,E=C===""||C==null?"":C;return String(O).trim()===String(E).trim()},v={};["title","description","currency","subcategory","brand","color","size","condition","warranty","availability_status"].forEach(B=>{g(r[B],y[B])||(v[B]=r[B]==null||r[B]===""?null:r[B])});const k=r.price===""||r.price==null?null:parseFloat(r.price);g(k,y.price)||(v.price=k==null?y.price:Math.max(F,Math.min(K,k)));const _=r.stock_quantity===""||r.stock_quantity==null?null:parseInt(r.stock_quantity,10);g(_,y.stock_quantity)||(v.stock_quantity=Number.isFinite(_)?_:null);const w=c(r.features_text);g(w.join("||"),(Array.isArray(y.features)?y.features:[]).join("||"))||(v.features=w);const h=r.tags||[];g(h.join("||"),(Array.isArray(y.tags)?y.tags:[]).join("||"))||(v.tags=h);const S=c(r.highlights_text);g(S.join("||"),(Array.isArray(y.highlights)?y.highlights:[]).join("||"))||(v.highlights=S);const x=c(r.seo_keywords_text);g(x.join("||"),(Array.isArray(y.seo_keywords)?y.seo_keywords:[]).join("||"))||(v.seo_keywords=x);const J=r.images||[];g(J.join("||"),(Array.isArray(y.images)?y.images:[]).join("||"))||(v.images=J);const Q=r.is_featured==="on";!!y.is_featured!==Q&&(v.is_featured=Q);const z=d?!1:r.is_active==="on";!!y.is_active!==z&&(v.is_active=z);const D=m(r),$={...y.specifications&&typeof y.specifications=="object"?y.specifications:{},...D};if(JSON.stringify($)!==JSON.stringify(y.specifications||{})&&(v.specifications=$),Object.keys(v).length===0){p("No changes detected â€” nothing was saved.","info");try{localStorage.removeItem(Me(t,a))}catch{}n&&(n.disabled=!1,n.textContent=o);return}const X={...y,...v,property_id:a,updated_at:new Date().toISOString()};if({error:f}=await b.from("showroom_listings").upsert(X,{onConflict:"property_id"}),f&&vt(f,()=>gt(X),"Product update")){n&&(n.disabled=!1,n.textContent=o),ne(),R();return}p(d?"Draft saved!":`Published Successfully â€” your product is updated and live in your showroom (${Object.keys(v).length} change${Object.keys(v).length>1?"s":""}).`)}else{if(!r.title||!r.title.trim())throw new Error("A product title is required.");if(r.price===""||r.price==null||!isFinite(parseFloat(r.price)))throw new Error("A price is required.");if(!!i.querySelector('[name="condition"]')&&!r.condition)throw new Error("Please choose the product condition.");const g={listing_type:"product",category:t,subcategory:r.subcategory||null,title:r.title.trim(),description:r.description||"",price:Math.max(F,Math.min(K,parseFloat(r.price)||0)),currency:r.currency||"USD",country:"",country_code:"",listing_status:"sale",state:"",city:"",product_location:"",latitude:null,longitude:null,is_active:d?!1:r.is_active==="on",is_featured:r.is_featured==="on",brand:r.brand||null,color:r.color||null,size:r.size||null,condition:r.condition||null,warranty:r.warranty||null,availability_status:r.availability_status||"In Stock",stock_quantity:r.stock_quantity?parseInt(r.stock_quantity):null,images:r.images||[],features:c(r.features_text).length?c(r.features_text):r.tags||[],tags:r.tags||[],highlights:c(r.highlights_text),seo_keywords:c(r.seo_keywords_text),is_ai_generated:!!r.catalog_template_id,ai_generated_fields:r.catalog_template_id?["title","description","features","highlights","seo_keywords"]:[],specifications:m(r)},v=et();if(g.property_id=v,{error:f}=await b.from("showroom_listings").insert(g),f&&vt(f,()=>gt({...g,property_id:g.property_id}),"Product publish")){n&&(n.disabled=!1,n.textContent=o),ne(),R();return}p(d?"Draft saved!":"Published Successfully! Your product is now live in your showroom.")}try{localStorage.removeItem(Me(t,a))}catch{}closeProductFormModal(),R()}catch(s){p("Error: "+s.message,"error"),n&&(n.disabled=!1,n.textContent=o)}};window.editProduct=async function(e){const{data:t,error:a}=await b.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=a?null:t;if(i||(i=Tt(e)),i||(i=(window._productsData||[]).find(n=>n.property_id===e)||null),!i)return p("Product not found","error");i.specifications&&typeof i.specifications=="object"&&(i={...i,...i.specifications}),showAddProductStep2(i.category||"Other",i)};window.toggleProductActive=async function(e,t){const a=ke((window._productsData||[]).find(n=>n.property_id===e)),{error:i}=await b.from("showroom_listings").upsert({...a,property_id:e,is_active:t,availability_status:t?"In Stock":"Out of Stock"},{onConflict:"property_id"});if(i)return Z(i)?p(`âš ï¸ ${t?"Publish":"Unpublish"} blocked: database admin role rejected the write. Re-run the admin permission migration.`,"error"):p(`${t?"Publish":"Unpublish"} failed: ${i.message}`,"error");p(t?"Product published":"Product unpublished"),R()};window.duplicateProduct=async function(e,t=!1){const{data:a}=await b.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();if(!a)return;const{id:i,property_id:n,created_at:o,updated_at:s,...r}=a,u=et();await b.from("showroom_listings").insert({...r,property_id:u,title:a.title+" (Copy)",is_active:!1}),t||(p("Product duplicated"),R())};window.archiveProduct=async function(e){confirm("Archive this product? It will be hidden from the website but can be restored.")&&(await b.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",e),p("Product archived"),R())};const Et=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","Commercial Building","Hotel","Land","Other"];async function ot(){const e=document.getElementById("content");try{const{data:t,error:a}=await b.from("showroom_listings").select("*").eq("listing_type","property").order("created_at",{ascending:!1});let i=a?Qe().filter(o=>o.listing_type==="property"):t||[];if(Array.isArray(ae)){const o=new Set(i.map(r=>r.property_id)),s=ae.filter(r=>r.listing_type==="property"&&r.property_id&&!o.has(r.property_id));s.length&&(i=i.concat(s))}i.sort((o,s)=>new Date(s.created_at||0)-new Date(o.created_at||0));try{await Lt()}catch{}const n=new Set(Xe());i=i.filter(o=>!(o&&o.property_id&&n.has(o.property_id))),window._propertiesData=i,e.innerHTML=`
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
                ${i.length===0?'<tr><td colspan="6" class="text-center text-gray-500 py-12">No properties yet.</td></tr>':i.map(o=>`<tr>
                    <td>
                      <div class="flex items-center gap-2.5">
                        <img src="${l((o.images||[])[0]||"/fallback.svg")}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
                        <div><p class="text-xs font-bold text-white truncate max-w-[160px]">${l(o.title)}</p><p class="text-[10px] font-mono text-gray-500">${l(o.property_id)}</p></div>
                      </div>
                    </td>
                    <td><span class="text-xs text-gray-300">${l(o.property_type||o.category)}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${l([o.city,o.state,o.country].filter(Boolean).join(", ")||"â€”")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(o.price||0).toLocaleString()}</span></td>
                    <td>${Y(o.listing_status||"sale")} ${Y(o.is_active?"active":"inactive")}</td>
                    <td>
                      <div class="flex gap-1">
                        <button onclick="editProperty('${o.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
                        <button onclick="archiveProduct('${o.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
                        <button onclick="deleteProduct('${o.property_id}')" class="btn-press p-1.5 text-rose-400 hover:bg-rose-500/10 rounded-lg transition"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                      </div>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.showAddPropertyModal=function(e={}){const t=!!e.property_id,a=ba("property","Real Estate"),i=e.country_code||"US",n=e.currency||Bt(i);V(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${t?"Edit":"Add"} Property</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">ðŸ”™ Back</button>
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
              <div class="sm:col-span-2"><label class="lbl">Property Template</label><select class="input-field" name="catalog_template_id" id="ppf-catalog_template_id" onchange="applyPropertyCatalogTemplate()"><option value="">Choose a property template...</option>${a.map(s=>`<option value="${s.id}">${l(s.label)} - ${l(s.propertyType||s.subcategory)}</option>`).join("")}</select></div>
              <div><label class="lbl">Country</label><select class="input-field" name="country_code" id="ppf-country_code" onchange="syncPropertyCountry(); applyPropertyCatalogTemplate()">${Ma(i)}</select></div>
              <div><label class="lbl">Currency</label><select class="input-field" name="currency" id="ppf-currency" onchange="applyPropertyCatalogTemplate()">${Na(n)}</select></div>
            </div>
            <p id="ppf-image-requirement" class="text-[11px] text-gray-400">Any number of images is fine â€” save and publish anytime.</p>
            <input type="hidden" name="required_image_count" id="ppf-required_image_count" value="">
          </div>

          <div class="form-grid form-grid-2">
            <div class="sm:col-span-2"><label class="lbl">Property Title *</label><input class="input-field" name="title" value="${l(e.title||"")}" required placeholder="e.g. Cozy 3-Bedroom Family Home"></div>
            <div><label class="lbl">Property Type *</label><select class="input-field" name="property_type" required>
              ${Et.map(s=>`<option value="${s}" ${e.property_type===s?"selected":""}>${s}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Listing Status</label><select class="input-field" name="listing_status">
              <option value="sale" ${e.listing_status!=="rent"?"selected":""}>For Sale</option>
              <option value="rent" ${e.listing_status==="rent"?"selected":""}>For Rent</option>
            </select></div>
            <div><label class="lbl">Price *</label><input type="number" class="input-field" id="ppf-price" name="price" value="${e.price||""}" required placeholder="0"></div>
            <div><label class="lbl">Real Price (crossed out)</label><input type="number" class="input-field" id="ppf-real_price" name="real_price" value="${e.real_price??e.specifications?.real_price??""}" placeholder="Original price before discount"></div>
            <div><label class="lbl">Country Name *</label><input class="input-field" id="ppf-country" name="country" value="${l(e.country||"")}" required placeholder="United States"></div>
            <div><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${l(e.subcategory||"")}" placeholder="e.g. Villas, Mansions, Hotels"></div>
            <div><label class="lbl">State / Province</label><input class="input-field" name="state" value="${l(e.state||"")}" placeholder="e.g. California"></div>
            <div><label class="lbl">City</label><input class="input-field" name="city" value="${l(e.city||"")}" placeholder="e.g. Los Angeles"></div>
            <div><label class="lbl">Town / Local Area</label><input class="input-field" name="town" value="${l(e.town||"")}" placeholder="Neighborhood or district"></div>
            <div><label class="lbl">Latitude</label><input type="number" step="any" class="input-field" name="latitude" value="${l(e.latitude||"")}" placeholder="40.7128"></div>
            <div><label class="lbl">Longitude</label><input type="number" step="any" class="input-field" name="longitude" value="${l(e.longitude||"")}" placeholder="-74.0060"></div>
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
            <div><label class="lbl">Bedrooms</label><input type="number" class="input-field" name="bedrooms" value="${e.bedrooms??""}" placeholder="3"></div>
            <div><label class="lbl">Bathrooms</label><input type="number" class="input-field" name="bathrooms" value="${e.bathrooms??""}" placeholder="2"></div>
            <div><label class="lbl">Building Size</label><input class="input-field" name="building_size" value="${l(e.building_size||"")}" placeholder="e.g. 2,500 sqft"></div>
            <div><label class="lbl">Land Size</label><input class="input-field" name="land_size" value="${l(e.land_size||"")}" placeholder="e.g. 0.5 acres"></div>
            <div><label class="lbl">Parking Spaces</label><input type="number" class="input-field" name="parking_spaces" value="${e.parking_spaces??""}"></div>
            <div><label class="lbl">Furnished</label><select class="input-field" name="furnished">
              <option value="">Not specified</option>
              <option value="Furnished" ${e.furnished==="Furnished"?"selected":""}>Furnished</option>
              <option value="Unfurnished" ${e.furnished==="Unfurnished"?"selected":""}>Unfurnished</option>
            </select></div>
            <div><label class="lbl">Condition</label><select class="input-field" name="condition">
              <option value="">Not specified</option>
              ${["New Construction","Like New","Excellent","Good","Fair","Needs Renovation"].map(s=>`<option value="${s}" ${e.condition===s?"selected":""}>${s}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Year Built</label><input type="number" class="input-field" name="year_built" value="${e.year_built??""}" placeholder="2015"></div>
            <div><label class="lbl">Year Renovated</label><input type="number" class="input-field" name="year_renovated" value="${e.year_renovated??""}" placeholder="2021"></div>
            <div><label class="lbl">Half Bathrooms</label><input type="number" class="input-field" name="half_bathrooms" value="${e.half_bathrooms??""}" placeholder="1"></div>
            <div><label class="lbl">Floors / Levels</label><input type="number" class="input-field" name="floors" value="${e.floors??""}" placeholder="2"></div>
            <div><label class="lbl">Garage</label><input class="input-field" name="garage" value="${l(e.garage||"")}" placeholder="e.g. 2-car attached, None"></div>
            <div class="sm:col-span-2"><label class="lbl">Description</label><textarea class="input-field" name="description" rows="3" placeholder="Describe the propertyâ€¦">${l(e.description||"")}</textarea></div>
            <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${l((e.features||[]).join(", "))}" placeholder="Swimming Pool, Garden, Garageâ€¦"></div>
            <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${l((e.highlights||[]).join(", "))}" placeholder="Prime location, map-ready post, 24-image gallery"></div>
            <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${l((e.seo_keywords||[]).join(", "))}" placeholder="mansion, villa, property investment"></div>
            <div class="sm:col-span-2"><label class="lbl">Property Location</label><input class="input-field" name="product_location" value="${l(e.product_location||"")}" placeholder="Estate, district, city, landmark"></div>
            <div class="sm:col-span-2"><label class="lbl">Street / Address</label><input class="input-field" name="address" value="${l(e.address||"")}" placeholder="Street and number, e.g. 123 Maple Street"></div>
            <div><label class="lbl">ZIP / Postal Code</label><input class="input-field" name="zip_code" value="${l(e.zip_code||"")}" placeholder="e.g. 10001"></div>
            <div><label class="lbl">Landmarks (comma separated)</label><input class="input-field" name="landmarks_text" value="${l((e.landmarks||[]).join(", "))}" placeholder="City Hall, Central Park, Main Station"></div>
          </div>

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="home" class="w-4 h-4 text-emerald-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Interior &amp; Exterior Features</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Interior Features (comma separated)</label><input class="input-field" name="interior_features_text" value="${l((e.interior_features||[]).join(", "))}" placeholder="Open plan kitchen, Walk-in closet, Fireplaceâ€¦"></div>
              <div class="sm:col-span-2"><label class="lbl">Exterior Features (comma separated)</label><input class="input-field" name="exterior_features_text" value="${l((e.exterior_features||[]).join(", "))}" placeholder="Swimming pool, Garden, Balcony, Patioâ€¦"></div>
              <div class="sm:col-span-2"><label class="lbl">Home Systems (comma separated)</label><input class="input-field" name="home_systems_text" value="${l((e.home_systems||[]).join(", "))}" placeholder="Central heating, Air conditioning, Solar panelsâ€¦"></div>
            </div>
          </div>

          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="layout-dashboard" class="w-4 h-4 text-violet-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Floor Plan</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Floor Plan Image URL</label><input class="input-field" name="floor_plan_image" value="${l(e.floor_plan?.image||"")}" placeholder="https://â€¦/floor-plan.png"></div>
              <div><label class="lbl">Levels</label><input class="input-field" name="floor_plan_levels" value="${l(e.floor_plan?.levels||"")}" placeholder="e.g. Ground + 1"></div>
              <div><label class="lbl">Total Area</label><input class="input-field" name="floor_plan_total_area" value="${l(e.floor_plan?.total_area||"")}" placeholder="e.g. 2,500 sqft"></div>
              <div class="sm:col-span-2"><label class="lbl">Rooms (comma separated â€” Name: dimensions)</label><input class="input-field" name="floor_plan_rooms" value="${l((e.floor_plan?.rooms||[]).map(s=>(s.name||"")+(s.dimensions?": "+s.dimensions:"")).join(", "))}" placeholder="Living Room: 15x12, Kitchen: 10x10â€¦"></div>
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
              <div class="sm:col-span-2"><label class="lbl">Legal / Financial Info (comma separated â€” add source tag)</label><input class="input-field" name="legal_info_text" value="${l((e.legal_info||[]).map(s=>(s.label||"")+(s.value?": "+s.value:"")+(s.source?` (${s.source})`:"")).join(", "))}" placeholder="Ownership: Clear title (Seller provided), Property taxes: (Not verified)â€¦"></div>
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
            <label class="lbl">Property Images</label>
            <div id="drop-zone" class="drop-zone" onclick="document.getElementById('img-upload').click()">
              <i data-lucide="image-plus" class="w-7 h-7 text-blue-400 mx-auto mb-2"></i>
              <p class="text-xs font-bold text-gray-300">Click or drag & drop images</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*,application/pdf" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2 mt-3">
              ${(e.images||[]).map((s,r)=>ve(s,r)).join("")}
            </div>
            <div id="image-url-inputs">
              ${(e.images||[]).map((s,r)=>`<input type="hidden" name="images" id="img-url-${r}" value="${l(s)}">`).join("")}
            </div>
          </div>

          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="min-w-0">
                <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> AI Property Scanner</p>
                <p class="text-[11px] text-gray-500 mt-1">Reads your uploaded images and fills the property form for you. Only runs when you press the button â€” you review everything before publishing.</p>
              </div>
              <button type="button" id="btn-scan-ai-prop" onclick="scanPropertyWithAI()" class="btn-press px-4 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shrink-0">
                <i data-lucide="sparkles" class="w-4 h-4"></i> SCAN WITH AI
              </button>
            </div>
            <div id="scan-ai-prop-status" class="hidden text-xs mt-3 font-medium"></div>
          </div>

          <div class="flex gap-3 pt-2">
            <button type="submit" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition">${t?"ðŸ’¾ Save Changes":"ðŸš€ Publish Property"}</button>
          </div>
        </form>
      </div>
    </div>`),Ut(),Ot(),wt("ppf-price"),window._propFormDirty=!!t;const o=document.getElementById("property-form");if(o){const s=()=>{window._propFormDirty=!0};o.addEventListener("input",s),o.addEventListener("change",s)}window.syncPropertyCountry=function(){Xt("ppf")},Xt("ppf"),kt("pricing"),document.getElementById("ppf-price")?.addEventListener("input",()=>kt("pricing")),vn()};let te=null,He=null,ia=null;function fn(){const e=document.querySelector("#property-form");if(!e)return"";const t=a=>(e.querySelector(`[name="${a}"]`)?.value||"").trim();return[t("product_location"),t("town"),t("city"),t("state"),t("country")].filter(Boolean).join(", ")}function de(e,t){const a=document.getElementById("property-map-status");a&&(a.textContent=e,a.style.color=t?"#dc2626":"")}function Be(e,t,{reverse:a=!1}={}){if(!te||!Number.isFinite(e)||!Number.isFinite(t))return;const i=[e,t];He?He.setLatLng(i):He=L.marker(i,{draggable:!0}).addTo(te),te.setView(i,Math.max(te.getZoom(),13));const n=document.querySelector('#property-form [name="latitude"]'),o=document.querySelector('#property-form [name="longitude"]');n&&(n.value=String(Number(e.toFixed(6)))),o&&(o.value=String(Number(t.toFixed(6)))),a&&hn(e,t);const s=document.getElementById("btn-open-google-map");s&&(s.href=`https://www.google.com/maps?q=${e.toFixed(6)},${t.toFixed(6)}`)}async function Le(){const e=fn();if(!e){de("Enter a location (address, area, city, state, country), then press Locate from fields.");return}de("Searching locationâ€¦");try{const a=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(e))).json();a&&a[0]?(Be(parseFloat(a[0].lat),parseFloat(a[0].lon)),de("Located: "+a[0].display_name)):de("Could not find that location. Check the spelling or click the map to drop the pin.",!0)}catch{de("Map lookup failed. You can still drop the pin by clicking the map.",!0)}}async function hn(e,t){const a=document.querySelector("#property-form");if(a)try{const n=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${t}&zoom=16`)).json(),o=n&&n.address||{},s=(y,g)=>{if(!g)return;const v=a.querySelector(`[name="${y}"]`);return v&&!String(v.value||"").trim()?(v.value=g,!0):!1},r=[o.road||"",o.house_number||""].filter(Boolean).join(" "),u=o.suburb||o.neighbourhood||o.quarter||o.district||o.borough||"",d=o.town||o.village||o.municipality||o.city_district||"",c=o.city||o.county||"",m=o.state||o.region||"",f=o.country||"";if(s("product_location",r||u||d),s("town",u||d),s("city",c),s("state",m),f){s("country",f);const y=a.querySelector('[name="country_code"]');if(y){const g=(Ee||[]).find(v=>String(v.name||"").toLowerCase()===String(f).toLowerCase());g&&g.code&&!y.value&&(y.value=g.code)}}de("Pin set at "+e.toFixed(5)+", "+t.toFixed(5)+(n.display_name?" â€” "+n.display_name:""))}catch{de("Pin set. Could not reverse-geocode the address.",!0)}}window.refreshPropertyMapFromForm=function(){if(!te)return;const e=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),t=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);Number.isFinite(e)&&Number.isFinite(t)&&(e||t)?(Be(e,t),de("Map updated from coordinates.")):Le()};function vn(){const e=document.getElementById("property-map-preview");if(!e||!window.L){de("Map unavailable right now â€” your location fields still save normally.");return}te&&(te.remove(),te=null,He=null);const t=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),a=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value),i=Number.isFinite(t)&&Number.isFinite(a)&&(t||a);te=L.map(e,{scrollWheelZoom:!1}).setView(i?[t,a]:[20,0],i?13:2),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(te),te.on("click",n=>Be(n.latlng.lat,n.latlng.lng,{reverse:!0})),document.getElementById("btn-geocode-property")?.addEventListener("click",Le),["product_location","town","city","state","country","latitude","longitude"].forEach(n=>{const o=document.querySelector(`#property-form [name="${n}"]`);o&&(o.addEventListener("input",()=>{if(n==="latitude"||n==="longitude"){const s=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),r=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);Number.isFinite(s)&&Number.isFinite(r)&&(s||r)&&Be(s,r);return}clearTimeout(ia),ia=setTimeout(Le,900)}),o.addEventListener("change",()=>{n!=="latitude"&&n!=="longitude"&&Le()}))}),i?Be(t,a):Le()}window.fixPropertyMaps=async function(){const t=(window._propertiesData||[]).filter(n=>{const o=parseFloat(n.latitude),s=parseFloat(n.longitude),r=[n.product_location,n.town,n.city,n.state,n.country].filter(Boolean).join(", ");return!(Number.isFinite(o)&&Number.isFinite(s)&&(o!==0||s!==0))&&!!r});if(!t.length){p("All properties already have map coordinates.","success");return}p(`Fixing maps for ${t.length} propert${t.length>1?"ies":"y"}â€¦`,"success");let a=0,i=0;for(const n of t){const o=[n.product_location,n.town,n.city,n.state,n.country].filter(Boolean).join(", ");try{const r=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(o))).json();if(r&&r[0]){const u={latitude:parseFloat(r[0].lat),longitude:parseFloat(r[0].lon)},{error:d}=await b.from("showroom_listings").update(u).eq("property_id",n.property_id);d?i++:(Object.assign(n,u),a++)}else i++}catch{i++}await new Promise(s=>setTimeout(s,1100))}p(`Map fix done: ${a} updated, ${i} failed.`,i?"error":"success"),ot()};window.saveProperty=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=Object.fromEntries(a.entries()),n=a.getAll("images").filter(f=>f&&!f.startsWith("blob:")),o=(i.features_text||"").split(",").map(f=>f.trim()).filter(Boolean),s=i.real_price===""||i.real_price==null?null:Math.max(F,Math.min(K,parseFloat(i.real_price)||0)),r=f=>(f||"").split(",").map(y=>y.trim()).filter(Boolean),u=f=>f===""||f==null||!isFinite(parseInt(f,10))?null:parseInt(f,10),d=r(i.floor_plan_rooms).map(f=>{const y=String(f).match(/^(.*?):\s*(.*)$/);return y?{name:y[1].trim(),dimensions:y[2].trim()}:{name:f,dimensions:""}}),c={listing_type:"property",category:i.property_type||"Real Estate",subcategory:i.subcategory||null,title:i.title,description:i.description||"",price:Math.max(F,Math.min(K,parseFloat(i.price)||0)),currency:i.currency||"USD",real_price:s,country:i.country||"",country_code:(i.country_code||"").toUpperCase(),state:i.state||"",city:i.city||"",town:i.town||"",address:i.address||"",zip_code:i.zip_code||"",product_location:i.product_location||"",latitude:i.latitude?parseFloat(i.latitude):null,longitude:i.longitude?parseFloat(i.longitude):null,property_type:i.property_type||"",listing_status:i.listing_status||"sale",condition:i.condition||null,bedrooms:i.bedrooms?parseInt(i.bedrooms):null,bathrooms:i.bathrooms?parseInt(i.bathrooms):null,half_bathrooms:u(i.half_bathrooms),building_size:i.building_size||"",land_size:i.land_size||"",floors:u(i.floors),garage:i.garage||"",parking_spaces:i.parking_spaces?parseInt(i.parking_spaces):null,furnished:i.furnished||"",year_built:u(i.year_built),year_renovated:u(i.year_renovated),landmarks:r(i.landmarks_text),interior_features:r(i.interior_features_text),exterior_features:r(i.exterior_features_text),home_systems:r(i.home_systems_text),legal_info:r(i.legal_info_text).map(f=>{const y=String(f).match(/^(.*?):\s*(.*?)\s*\((Seller provided|Not verified|Documented)\)\s*$/i);return y?{label:y[1].trim(),value:y[2].trim(),source:y[3]}:{label:f,value:"",source:"Not verified"}}),risk_notes:i.risk_notes||"",floor_plan:{image:i.floor_plan_image||"",rooms:d,levels:i.floor_plan_levels||"",total_area:i.floor_plan_total_area||""},nearby_area:{schools:r(i.nearby_schools_text),hospitals:r(i.nearby_hospitals_text),shopping:r(i.nearby_shopping_text),transportation:r(i.nearby_transportation_text),distances:r(i.nearby_distances_text)},verification_status:i.verification_status||"Not verified",verification_date:i.verification_date||"",inspection_info:i.inspection_info||"",documents:r(i.documents_text),features:o,images:n,highlights:xt(i.highlights_text),seo_keywords:xt(i.seo_keywords_text),is_ai_generated:!!i.catalog_template_id,ai_generated_fields:i.catalog_template_id?["title","description","features","highlights","seo_keywords","country","country_code","product_location"]:[],is_active:i.is_active==="on"};let m;if(t){c.property_id=t;const f=ke((window._propertiesData||[]).find(y=>y.property_id===t)||(window._productsData||[]).find(y=>y.property_id===t));c.specifications={...f.specifications&&typeof f.specifications=="object"?f.specifications:{},real_price:s},{error:m}=await b.from("showroom_listings").upsert({...f,...c},{onConflict:"property_id"})}else c.property_id=et(),c.specifications={real_price:s},{error:m}=await b.from("showroom_listings").insert(c);m&&vt(m,()=>gt({...c,property_id:t||c.property_id}),t?"Property update":"Property publish")||(p(t?"Property updated!":"Property published!"),ne(),ot())};window.editProperty=async function(e){const{data:t,error:a}=await b.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=a?null:t;i||(i=Tt(e)),i||(i=(Array.isArray(ae)?ae.find(n=>n.property_id===e):null)||null),i&&showAddPropertyModal(i)};const xn=["pending_verification","payment_received","payment_approved","processing","shipped","in_transit","out_for_delivery","delivered","cancelled","rejected"];async function qa(){const e=document.getElementById("content");try{const{data:t}=await b.from("payment_receipts").select("*").order("created_at",{ascending:!1}).limit(300),a=t||[],i=["All","Pending","Paid","Processing","Shipped","Delivered","Cancelled"];let n="All";e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Orders Manager</h2>
        <div class="flex gap-2 flex-wrap" id="order-tabs">
          ${i.map(o=>`<button class="tab-btn ${o==="All"?"active":""}" onclick="filterOrders('${o}')">${o}</button>`).join("")}
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
                ${a.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-12">No orders yet</td></tr>':a.map(o=>wn(o)).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._ordersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}function wn(e){return`<tr class="order-row" data-status="${e.status}" data-search="${l(e.order_number)} ${l(e.full_name)} ${l(e.email)}">
    <td><span class="font-mono text-xs text-blue-400 font-bold">${l(e.order_number||e.id?.slice(0,8))}</span></td>
    <td>
      <p class="text-xs font-bold text-white">${l(e.full_name||"Guest")}</p>
      <p class="text-[10px] text-gray-500">${l(e.email)}</p>
    </td>
    <td><p class="text-xs text-gray-300 truncate max-w-[140px]">${l(e.listing_title||e.listing_id||"â€”")}</p></td>
    <td class="hidden sm:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(e.amount||0).toLocaleString()}</span></td>
    <td>${Y(e.status)}</td>
    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${ie(e.created_at)}</span></td>
    <td>
      <button onclick="viewOrder('${e.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="View / Update">
        <i data-lucide="eye" class="w-3.5 h-3.5"></i>
      </button>
    </td>
  </tr>`}window.filterOrders=function(e){document.querySelectorAll("#order-tabs .tab-btn").forEach(t=>t.classList.toggle("active",t.textContent===e)),document.querySelectorAll(".order-row").forEach(t=>{const a=t.dataset.status||"",i=e==="All"||e==="Pending"&&["pending_verification","payment_received","order_placed"].includes(a)||e==="Paid"&&["payment_approved"].includes(a)||e==="Processing"&&["processing"].includes(a)||e==="Shipped"&&["shipped","in_transit","out_for_delivery"].includes(a)||e==="Delivered"&&a==="delivered"||e==="Cancelled"&&["cancelled","rejected"].includes(a);t.style.display=i?"":"none"})};window.searchOrders=function(e){const t=e.toLowerCase();document.querySelectorAll(".order-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewOrder=async function(e){const t=(window._ordersData||[]).find(a=>a.id===e);t&&V(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Order ${l(t.order_number)}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">ðŸ”™ Back</button>
        </div>
        <div class="space-y-3 text-sm">
          <div class="grid grid-cols-2 gap-3">
            ${[["Customer",t.full_name],["Email",t.email],["Phone",t.phone],["Amount",wa(t.amount,t.currency)],["Product",t.listing_title||t.listing_id],["Date",be(t.created_at)]].map(([a,i])=>`<div><p class="text-[10px] text-gray-500 uppercase font-bold mb-0.5">${a}</p><p class="text-xs text-white font-medium">${l(i)||"â€”"}</p></div>`).join("")}
          </div>
          ${t.transaction_reference?`<div class="p-3 glass-soft border border-blue-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Transaction Reference</p><p class="text-xs font-mono text-blue-300">${l(t.transaction_reference)}</p></div>`:""}
          ${t.additional_notes?`<div class="p-3 glass-soft border border-amber-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Notes</p><p class="text-xs text-gray-300">${l(t.additional_notes)}</p></div>`:""}
          <div>
            <label class="lbl">Update Order Status</label>
            <div class="flex gap-2">
              <select id="order-status-select" class="input-field flex-1">
                ${xn.map(a=>`<option value="${a}" ${t.status===a?"selected":""}>${a.replace(/_/g," ")}</option>`).join("")}
              </select>
              <button onclick="updateOrderStatus('${t.id}')" class="btn-press px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.updateOrderStatus=async function(e){const t=document.getElementById("order-status-select")?.value;if(!t)return;const{error:a}=await b.from("payment_receipts").update({status:t}).eq("id",e);if(a){p(a.message,"error");return}p("Order status updated"),ne(),qa()};async function _n(){const e=document.getElementById("content");try{const{data:t}=await b.from("profiles").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
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
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${ie(i.created_at)}</span></td>
                    <td>
                      <button onclick="viewCustomer('${i.user_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="eye" class="w-3.5 h-3.5"></i></button>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._customersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.searchCustomers=function(e){const t=e.toLowerCase();document.querySelectorAll(".cust-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewCustomer=async function(e){const t=(window._customersData||[]).find(i=>i.user_id===e);if(!t)return;const{data:a}=await b.from("payment_receipts").select("order_number,amount,currency,status,created_at").eq("user_id",e).order("created_at",{ascending:!1}).limit(20);V(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Customer Profile</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">ðŸ”™ Back</button>
        </div>
        <div class="flex items-center gap-4 mb-5 p-4 glass-soft border border-blue-500/15 rounded-xl">
          <div class="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
            <i data-lucide="user" class="w-6 h-6 text-blue-400"></i>
          </div>
          <div>
            <p class="font-black text-white">${l(t.display_name||"Anonymous")}</p>
            <p class="text-xs text-gray-400 mt-0.5">Joined ${ie(t.created_at)} Â· ${l(t.country_code||"Unknown country")}</p>
          </div>
        </div>
        <h4 class="text-xs font-bold text-gray-400 uppercase mb-3">Purchase History</h4>
        ${(a||[]).length===0?'<p class="text-xs text-gray-500 py-4 text-center">No orders yet</p>':(a||[]).map(i=>`<div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
            <div><p class="text-xs font-bold text-white font-mono">${l(i.order_number)}</p><p class="text-[10px] text-gray-500">${be(i.created_at)}</p></div>
            <div class="flex items-center gap-2">${Y(i.status)}<span class="text-xs font-bold text-emerald-400">$${parseFloat(i.amount).toLocaleString()}</span></div>
          </div>`).join("")}
      </div>
    </div>`)};async function De(){const e=document.getElementById("content");try{const{data:t}=await b.from("product_reviews").select("*, showroom_listings(title, property_id)").order("created_at",{ascending:!1}).limit(200),a=t||[],i=a.filter(r=>!r.is_approved).length,{data:n}=await b.from("site_feedback").select("*").order("created_at",{ascending:!1}).limit(200),o=n||[],s=o.filter(r=>!r.is_approved).length;e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Reviews & Feedback Manager</h2>
          ${i+s>0?`<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">${i+s} pending</span>`:""}
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
            ${a.length===0?ye("star","No Reviews","Customer reviews will appear here."):a.map(r=>Sn(r)).join("")}
          </div>
        </div>

        <div class="glass-soft border border-emerald-500/15 rounded-2xl p-5 space-y-4">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="message-square-text" class="w-4 h-4 text-emerald-400"></i> Customer Feedback (site-wide)</h3>
            ${s>0?`<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">${s} pending</span>`:""}
          </div>
          <p class="text-[11px] text-gray-500">Feedback submitted from the "Feedback" form on every page. Approve to show it in the public "View more Feedback" list.</p>
          <div class="space-y-3" id="feedback-list">
            ${o.length===0?ye("message-square","No Feedback Yet","Site feedback will appear here."):o.map(r=>kn(r)).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}function kn(e){const t=Array.from({length:5},(a,i)=>i<(e.rating||5)?"â˜…":"â˜†").join("");return`<div class="glass-soft border ${e.is_approved?"border-emerald-500/15":"border-amber-500/20"} rounded-xl p-4" data-fb-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          <span class="text-amber-400 font-bold text-sm">${t}</span>
          <span class="text-xs font-black text-white">${l(e.name||"Anonymous shopper")}</span>
          <span class="text-xs text-gray-500">${l(e.email||"no email")} Â· ${ie(e.created_at)}</span>
          ${e.is_approved?'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>':'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending</span>'}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${l(e.feedback||"â€”")}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${e.is_approved?"":`<button onclick="approveFeedback('${e.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>`}
        <button onclick="deleteFeedback('${e.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`}window.approveFeedback=async function(e){const{error:t}=await b.from("site_feedback").update({is_approved:!0}).eq("id",e);t?p(t.message,"error"):p("Feedback approved â€” it now shows on every page."),De()};window.deleteFeedback=async function(e){if(!confirm("Delete this feedback permanently?"))return;const{error:t}=await b.from("site_feedback").delete().eq("id",e);t?p(t.message,"error"):p("Feedback deleted."),De()};function Sn(e){const t=Array.from({length:5},(a,i)=>i<e.rating?"â˜…":"â˜†").join("");return`<div class="review-card glass-soft border ${e.is_approved?"border-blue-500/15":"border-amber-500/20"} rounded-xl p-4" data-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-amber-400 font-bold text-sm">${t}</span>
          <span class="text-xs text-gray-500">${ie(e.created_at)}</span>
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
  </div>`}window.filterReviewTab=function(e){["all","pending","approved"].forEach(t=>document.getElementById(`rtab-${t}`)?.classList.toggle("active",t===e)),document.querySelectorAll(".review-card").forEach(t=>{const a=e==="all"||e==="pending"&&t.dataset.approved==="false"||e==="approved"&&t.dataset.approved==="true";t.style.display=a?"":"none"})};window.approveReview=async function(e){await b.from("product_reviews").update({is_approved:!0}).eq("id",e),p("Review approved"),De()};window.deleteReview=async function(e){confirm("Delete this review permanently?")&&(await b.from("product_reviews").delete().eq("id",e),p("Review deleted"),De())};async function Ha(){const e=document.getElementById("content");try{const{data:t}=await b.from("support_messages").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Messages & Support</h2>
        <div class="space-y-3">
          ${a.length===0?ye("message-circle","No Messages","Customer support messages will appear here."):a.map(i=>`
              <div class="glass-soft border ${i.is_read?"border-blue-500/10":"border-blue-400/30"} rounded-xl p-4 ${i.is_read?"":"ring-1 ring-blue-500/10"}">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs font-black text-white">${l(i.full_name||i.name||"Anonymous")}</span>
                      ${i.is_read?"":'<span class="badge bg-blue-500/15 text-blue-400 border-blue-500/20">New</span>'}
                      <span class="text-[10px] text-gray-500 ml-auto">${be(i.created_at)}</span>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.markMsgRead=async function(e){await b.from("support_messages").update({is_read:!0}).eq("id",e),p("Marked as read"),Ha()};async function st(){const e=document.getElementById("content");try{const{data:t}=await b.from("coupons").select("*").order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
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
                    <td>${Y(i.is_active?"active":"inactive")}</td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${ie(i.expires_at)}</span></td>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.showAddCouponModal=function(){V(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Create Coupon</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">ðŸ”™ Back</button>
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
    </div>`)};window.saveCoupon=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={code:a.code.toUpperCase(),discount_type:a.discount_type,discount_value:parseFloat(a.discount_value),min_amount:a.min_amount?parseFloat(a.min_amount):null,usage_limit:a.usage_limit?parseInt(a.usage_limit):null,expires_at:a.expires_at||null,is_active:!0},{error:n}=await b.from("coupons").insert(i);if(n){p(n.message,"error");return}p("Coupon created!"),ne(),st()};window.toggleCoupon=async function(e,t){await b.from("coupons").update({is_active:t}).eq("id",e),p(t?"Coupon activated":"Coupon deactivated"),st()};window.deleteCoupon=async function(e){confirm("Delete this coupon?")&&(await b.from("coupons").delete().eq("id",e),p("Coupon deleted"),st())};async function $n(){const e=document.getElementById("content");try{const{data:t}=await b.from("notification_log").select("*").order("created_at",{ascending:!1}).limit(100),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Notifications</h2>
        <div class="space-y-2">
          ${a.length===0?ye("bell","No Notifications","System notifications will appear here."):a.map(i=>`
              <div class="glass-soft border border-blue-500/10 rounded-xl p-3.5 flex items-start gap-3">
                <div class="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <i data-lucide="bell" class="w-4 h-4 text-blue-400"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-0.5">
                    <span class="text-xs font-bold text-white">${l(i.subject||i.event_type||"Notification")}</span>
                    ${Y(i.status)}
                    <span class="text-[10px] text-gray-500 ml-auto">${be(i.created_at)}</span>
                  </div>
                  <p class="text-[11px] text-gray-400">${l(i.recipient||i.order_number)}</p>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}const Ga=["Featured","Sponsored","Featured Collection","Discover","Promotion"],En=[{id:"real-estate",name:"Real Estate & Properties"},{id:"marketplace",name:"Marketplace Showroom"}];let je=null;function Pn(e){const t={Featured:"bg-blue-500/10 text-blue-300 border-blue-500/30",Sponsored:"bg-violet-500/10 text-violet-300 border-violet-500/30","Featured Collection":"bg-amber-500/10 text-amber-300 border-amber-500/30",Discover:"bg-emerald-500/10 text-emerald-300 border-emerald-500/30",Promotion:"bg-blue-500/10 text-blue-300 border-blue-500/30"};return`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${t[e]||t.Featured}">${l(e)}</span>`}function An(e){return!e||!e.link_type||e.link_type==="none"?'<span class="text-[10px] text-gray-500">No link</span>':e.link_type==="product"?`<span class="text-[10px] text-blue-300"><i data-lucide="package" class="w-3 h-3 inline mr-1"></i>Product Â· ${l(e.link_target||"")}</span>`:e.link_type==="category"?`<span class="text-[10px] text-emerald-300"><i data-lucide="tag" class="w-3 h-3 inline mr-1"></i>Category Â· ${l(e.link_target||"")}</span>`:`<span class="text-[10px] text-amber-300"><i data-lucide="layout-grid" class="w-3 h-3 inline mr-1"></i>Section Â· ${l(e.link_target||"")}</span>`}function In(e){return e.video_url?`<video src="${l(e.video_url)}" ${e.poster_url?`poster="${l(e.poster_url)}"`:""} class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" muted preload="metadata"></video>`:e.image_url?`<img src="${l(e.image_url)}" class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" onerror="this.remove()">`:'<div class="w-24 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="megaphone" class="w-6 h-6 text-blue-400"></i></div>'}async function Va(){if(je)return je;const e=[],t=new Set,a=[],i=o=>{if(!o||!o.property_id)return;e.push({id:o.property_id,title:o.title||o.property_id});const s=o.category||"";s&&!t.has(s)&&(t.add(s),a.push(s))};try{ae.forEach(i)}catch{}try{const{data:o,error:s}=await b.from("showroom_listings").select("property_id,title,category").order("created_at",{ascending:!1});!s&&o&&o.forEach(i)}catch{}return["Women","Men","Kids","Home","Sports","Jewellery","Electronics","Cars","Motorcycles","Phones","Computers","Furniture","Beauty","Fashion","Real Estate","Bicycles","Trucks","Land","Kitchen","Food","Pets","Books","Toys","Services"].forEach(o=>{t.has(o)||(t.add(o),a.push(o))}),je={products:e,categories:a,sections:En},je}async function Cn(e){try{const{data:{session:t}}=await b.auth.getSession();if(!t)return p("Sign in to upload media","error"),null;const a=(e.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),i=/^(mp4|webm|mov|m4v)$/.test(a)||e.type.startsWith("video/"),n=`ads/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${a}`,{error:o}=await b.storage.from("advertisements").upload(n,e,{contentType:e.type,upsert:!1});if(o)return p("Upload failed: "+o.message,"error"),null;const{data:s}=b.storage.from("advertisements").getPublicUrl(n);return{url:s.publicUrl,isVideo:i}}catch{return p("Upload failed","error"),null}}function Ke(e,t){const a=document.getElementById("ad-media-preview");if(!a)return;const i=document.getElementById("ad-hidden-video"),n=document.getElementById("ad-hidden-image");i&&(i.value=t?e:""),n&&(n.value=t?"":e),a.innerHTML=t?`<video src="${l(e)}" class="w-full h-40 object-cover rounded-xl" controls muted playsinline></video>`:`<img src="${l(e)}" class="w-full h-40 object-cover rounded-xl">`,window.lucide&&lucide.createIcons()}window.onAdMediaPicked=async function(e){const t=e.files&&e.files[0];if(!t)return;if(!(t.type.startsWith("image/")||t.type.startsWith("video/"))){p("Choose an image or video file","error");return}const i=await Cn(t);if(!i){e.value="";return}Ke(i.url,i.isVideo);const n=document.getElementById("ad-media-url");n&&(n.value=i.url)};window.onAdMediaUrl=function(e){const t=(e.value||"").trim();if(!t)return;const a=/\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(t);Ke(t,a)};function zt(e,t,a){const i=document.getElementById("ad-link-target-wrap");if(!i)return;if(!t||t==="none"){i.innerHTML='<p class="text-[10px] text-gray-500">This ad is informational and will not be clickable.</p>';return}let n="";t==="product"?n='<option value="">Select a productâ€¦</option>'+e.products.map(o=>`<option value="${l(o.id)}" ${String(a)===String(o.id)?"selected":""}>${l(o.id)} â€” ${l((o.title||"").slice(0,60))}</option>`).join(""):t==="category"?n='<option value="">Select a categoryâ€¦</option>'+e.categories.map(o=>`<option value="${l(o)}" ${a===o?"selected":""}>${l(o)}</option>`).join(""):t==="section"&&(n='<option value="">Select a sectionâ€¦</option>'+e.sections.map(o=>`<option value="${l(o.id)}" ${a===o.id?"selected":""}>${l(o.name)}</option>`).join("")),i.innerHTML=`<label class="lbl">Target</label><select class="input-field" name="link_target">${n}</select>`}function za(e){return`
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
                ${Ga.map(t=>`<option value="${t}" ${e&&e.ad_label===t?"selected":""}>${t}</option>`).join("")}
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
    </div>`}window.onAdLinkTypeChange=function(){const e=window._adLinkCache||{products:[],categories:[],sections:[]},t=document.querySelector('#ad-form select[name="link_type"]'),a=t?t.value:"none";zt(e,a,"")};window.showAddAdModal=async function(){const e=await Va();window._adLinkCache=e,V(za(null)),zt(e,"none","")};window.showEditAdModal=async function(e){const t=await Va();window._adLinkCache=t;const{data:a}=await b.from("promotions").select("*").eq("id",e).maybeSingle();if(!a){p("Ad not found","error");return}V(za(a)),a.image_url?Ke(a.image_url,!1):a.video_url&&Ke(a.video_url,!0),zt(t,a.link_type||"none",a.link_target||"")};window.saveAd=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=a.id||"",n={title:a.title,description:a.description||"",ad_label:Ga.includes(a.ad_label)?a.ad_label:"Featured",image_url:a.image_url||null,video_url:a.video_url||null,link_type:["none","product","category","section"].includes(a.link_type)?a.link_type:"none",link_target:a.link_target||null,start_date:a.start_date?new Date(a.start_date+"T00:00:00").toISOString():null,end_date:a.end_date?new Date(a.end_date+"T23:59:59").toISOString():null,is_active:a.is_active==="on",promo_type:"banner"};if(!n.image_url&&!n.video_url){p("Add an image or video for the ad","error");return}const o=e.target.querySelector('button[type="submit"]');o&&(o.disabled=!0);try{if(i){const{error:s}=await b.from("promotions").update(n).eq("id",i);if(s)throw s;p("Ad updated!")}else{const{error:s}=await b.from("promotions").insert(n);if(s)throw s;p("Ad created!")}}catch(s){p(s.message||"Save failed","error"),o&&(o.disabled=!1);return}ne(),Ie()};window.togglePromo=async function(e,t){const{error:a}=await b.from("promotions").update({is_active:t}).eq("id",e);if(a){p(a.message,"error");return}p(t?"Ad activated":"Ad deactivated"),Ie()};window.moveAd=async function(e,t){try{const{data:a,error:i}=await b.from("promotions").select("id,sort_order").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1});if(i)throw i;const n=a||[],o=n.findIndex(d=>d.id===e),s=o+t;if(o<0||s<0||s>=n.length){p("Already at the edge","info");return}const r=n[o],u=n[s];await b.from("promotions").update({sort_order:u.sort_order}).eq("id",r.id),await b.from("promotions").update({sort_order:r.sort_order}).eq("id",u.id),p("Order updated")}catch(a){p(a.message||"Reorder failed","error")}Ie()};window.deletePromo=async function(e){if(confirm("Delete this ad? This cannot be undone.")){try{const{data:t}=await b.from("promotions").select("image_url,video_url,poster_url").eq("id",e).maybeSingle();if(t){const i=[t.image_url,t.video_url,t.poster_url].filter(Boolean).map(n=>{const o=/\/object\/public\/advertisements\/(.+)$/.exec(n);return o?decodeURIComponent(o[1]):null}).filter(Boolean);if(i.length)try{await b.storage.from("advertisements").remove(i)}catch{}}const{error:a}=await b.from("promotions").delete().eq("id",e);if(a)throw a;p("Ad deleted")}catch(t){p(t.message||"Delete failed","error")}Ie()}};async function Ie(){const e=document.getElementById("content");try{const{data:t}=await b.from("promotions").select("*").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
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
          ${a.length===0?ye("megaphone","No Ads","Create your first showcase ad â€” add a title, image or video, label, and optional product link.",'<button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"><i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement</button>'):a.map((i,n)=>`
              <div class="glass-soft border border-blue-500/15 rounded-xl p-4 flex items-center gap-4">
                ${In(i)}
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap">
                    <p class="text-sm font-black text-white truncate">${l(i.title||i.name)}</p>
                    ${Pn(i.ad_label||"Featured")}
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${l(i.description||"")}</p>
                  <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${i.is_active?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":"bg-gray-500/10 text-gray-400 border-gray-500/20"}">${i.is_active?"Active":"Inactive"}</span>
                    ${An(i)}
                    <span class="text-[10px] text-gray-500">${ie(i.start_date)}${i.start_date?" â†’ ":""}${ie(i.end_date)}</span>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.renderAds=Ie;const rt=[{id:"gemini",name:"Google Gemini",tag:"FREE",color:"blue",icon:"sparkles",kf:"gemini_key",ph:"AIzaSyâ€¦",signup:"https://aistudio.google.com/apikey",models:["gemini-3-flash-preview","gemini-3.1-flash-lite-preview"],mf:"gemini_model",dm:"gemini-3-flash-preview",desc:"Google's best free AI. Great for coding, writing apps & websites.",free_tier:"15 req/min Â· 1M tokens/day â€” Free forever"}],re={border:{blue:"border-blue-500/50"},bg:{blue:"bg-blue-500/8"},text:{blue:"text-blue-400"},badge:{blue:"bg-blue-500/15 text-blue-300"}};async function Wa(){const e=document.getElementById("content");try{let t=function(o){const s=n===o.id,r=i[o.kf],u=i[o.mf]||o.dm;return`
        <div class="glass-soft border ${s?re.border[o.color]+" "+re.bg[o.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard" id="apc-${o.id}">
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-8 h-8 ${re.bg[o.color]} rounded-lg flex items-center justify-center shrink-0">
                <i data-lucide="${o.icon}" class="w-4 h-4 ${re.text[o.color]}"></i>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h3 class="text-xs font-black text-white">${l(o.name)}</h3>
                  <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full ${re.badge[o.color]}">${o.tag}</span>
                </div>
                <p class="text-[9px] text-emerald-400 font-bold mt-0.5 leading-tight truncate">${l(o.free_tier)}</p>
              </div>
            </div>
            <label class="flex items-center gap-1 cursor-pointer shrink-0">
              <input type="radio" name="active_provider" value="${o.id}" ${s?"checked":""} class="accent-blue-500" onchange="highlightAI('${o.id}')">
              <span class="text-[9px] font-bold ${s?re.text[o.color]:"text-gray-600"}">USE</span>
            </label>
          </div>
          <p class="text-[11px] text-gray-400 leading-relaxed">${l(o.desc)}</p>
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="lbl mb-0">API Key</label>
              <a href="${o.signup}" target="_blank" rel="noopener" class="text-[10px] font-bold ${re.text[o.color]} hover:underline flex items-center gap-0.5">
                <i data-lucide="external-link" class="w-3 h-3"></i>Get Free Key
              </a>
            </div>
            <div class="relative">
              <input type="password" class="input-field pr-16 text-xs" name="${o.kf}"
                placeholder="${r?"â€¢â€¢â€¢â€¢"+r.slice(-4):o.ph}">
              ${r?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>'}
            </div>
          </div>
          <div>
            <label class="lbl">Model</label>
            <select class="input-field text-xs" name="${o.mf}">
              ${o.models.map(d=>`<option value="${d}" ${u===d?"selected":""}>${d}</option>`).join("")}
            </select>
          </div>
        </div>`};const{data:a}=await b.from("ai_settings").select("*").limit(1).maybeSingle(),i=a||{},n=i.active_provider||"gemini";e.innerHTML=`
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
            <p class="font-black mb-0.5">Google Gemini has a FREE tier â€” no payment required to start!</p>
            <p class="text-emerald-400/70">Click "Get Free Key" â†’ sign up at Google AI Studio â†’ paste key below â†’ Save. The key is stored securely in your database.</p>
          </div>
        </div>

        <form id="ai-form" onsubmit="saveAiSettings(event)" class="space-y-5">

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4">
            <h3 class="text-sm font-black text-white mb-3 flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-blue-400"></i> Google Gemini</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">${rt.map(t).join("")}</div>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="sliders" class="w-4 h-4 text-blue-400"></i> Feature Toggles</h3>
            ${[{key:"product_ai_enabled",label:"AI Product Creation",desc:"AI auto-fills product descriptions",val:i.product_ai_enabled!==!1},{key:"ai_code_assist",label:"AI Code Assistant",desc:"AI helps build and edit your website code",val:i.ai_code_assist!==!1},{key:"ai_moderation",label:"AI Content Moderation",desc:"Auto-approve/reject customer reviews using AI",val:i.ai_moderation}].map(o=>`
              <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
                <div><p class="text-xs font-bold text-white">${o.label}</p><p class="text-[11px] text-gray-500">${o.desc}</p></div>
                <label class="toggle-switch"><input type="checkbox" name="${o.key}" ${o.val?"checked":""}><span class="toggle-slider"></span></label>
              </div>`).join("")}
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            ðŸ’¾ Save AI Settings
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.highlightAI=function(e){rt.forEach(t=>{const a=document.getElementById("apc-"+t.id);if(!a)return;const i=t.id===e;a.className=`glass-soft border ${i?re.border[t.color]+" "+re.bg[t.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard`;const n=a.querySelector("input[type=radio] + span");n&&(n.className=`text-[9px] font-bold ${i?re.text[t.color]:"text-gray-600"}`)})};window.saveAiSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={active_provider:a.active_provider||"gemini",product_ai_enabled:a.product_ai_enabled==="on",ai_code_assist:a.ai_code_assist==="on",ai_moderation:a.ai_moderation==="on"};rt.forEach(n=>{a[n.mf]&&(i[n.mf]=a[n.mf]);const o=(a[n.kf]||"").trim();o&&!o.startsWith("â€¢â€¢â€¢â€¢")&&o!==""&&(i[n.kf]=o)}),i.gemini_key&&(i.gemini_api_key=i.gemini_key);try{const{data:n}=await b.from("ai_settings").select("id").limit(1).maybeSingle();let o;if(n?.id?{error:o}=await b.from("ai_settings").update(i).eq("id",n.id):{error:o}=await b.from("ai_settings").insert(i),o){p("Save failed: "+o.message,"error"),console.error("[AI Save]",o);return}await N.reload(),p("âœ… AI settings saved!","success"),setTimeout(()=>Wa(),600)}catch(n){p("Unexpected error: "+n.message,"error"),console.error("[AI Save]",n)}};const N={_cfg:null,async reload(){const{data:e,error:t}=await b.from("ai_settings").select("*").limit(1).maybeSingle();if(t){console.warn("[aiClient] Could not load settings:",t.message),this._cfg={};return}const a=e||{};!a.gemini_key&&a.gemini_api_key&&(a.gemini_key=a.gemini_api_key),this._cfg=a},async getConfig(){return this._cfg||await this.reload(),this._cfg},async freeChat(e,{maxTokens:t=2e3,timeoutMs:a=6e4}={}){const i=await fetch("https://text.pollinations.ai/openai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"openai",messages:e.map(s=>({role:s.role==="assistant"?"assistant":s.role==="system"?"system":"user",content:String(s.content||"").slice(0,12e3)})),max_tokens:t}),signal:AbortSignal.timeout(a)});if(!i.ok)throw new Error(`Free AI provider error (${i.status}).`);const n=await i.json(),o=String(n?.choices?.[0]?.message?.content||"").trim();if(!o)throw new Error("Free AI provider returned an empty reply.");return{text:o,provider:"Free AI (Pollinations)",model:String(n?.model||"openai-fast")}},async chat(e,{maxTokens:t=2e3}={}){const a=await this.getConfig();if(!String(a.gemini_key||"").trim())return this.freeChat(e,{maxTokens:t});const n=e[e.length-1],o={action:"chat",message:String(n?.content||"").trim(),history:e.slice(0,-1).map(s=>({role:s.role,content:String(s.content||"")})),provider_override:"gemini",max_tokens:t};try{const s=await this._callEdge(o);if(s&&s.response)return{text:s.response,provider:"Google Gemini",model:s.model||a.gemini_model};throw new Error(String(s?.error||"Gemini is unavailable."))}catch(s){try{const r=await this.freeChat(e,{maxTokens:t});return r.note="gemini-unavailable",r}catch{throw s}}},async prompt(e,t={}){return this.chat([{role:"user",content:e}],t)},async getStatus(){const e=await this.getConfig();return rt.map(t=>({id:t.id,name:t.name,color:t.color,hasKey:!!e[t.kf]?.trim(),isActive:e.active_provider===t.id,isCoolingDown:!1,remainingSec:0}))},async analyzeImages(e,t={}){const a=`You are the AI listing expert for the Weverse Online Shop marketplace. Look carefully at the uploaded product photo(s) and identify exactly what the product is â€” the REAL brand, model and year that actually appear in the photos, never a guessed one.

IDENTIFY THE REAL BRAND & MODEL (most important):
- Find the brand badge, emblem, logo, nameplate or label in the photo and read its exact letters and symbols, character by character.
- For vehicles, cross-check the badge against the design: grille shape, headlight and taillight design, body lines, wheels, interior and steering wheel. A BMW grille/kidney badge, Mercedes three-pointed star, Audi four rings, Toyota, Honda, Ford, Tesla, etc. are visually distinct â€” match what you actually see.
- Use the EXACT brand name that is printed on the product. NEVER swap it for a different brand (e.g. never call a BMW a Mercedes-Benz, never call an iPhone a Samsung).
- If the exact model number is printed (e.g. "X5", "C300", "iPhone 15 Pro Max", "MacBook Pro"), use that exact text.
- The year must come from a visible printed date/serial when present; otherwise give your best estimate from the design era and never invent a specific year you cannot support.

Return a single valid JSON object (no markdown, no extra text) with these keys:
- title (string): a real, professional marketplace product title that matches the actual item (real brand + real model/type + key feature + category). Never use placeholders like "AI Product" or "Premium Item".
- description (string): a detailed, persuasive 2-4 sentence description.
- category (string): the best category from this list: ${pe.join(", ")}.
- subcategory (string)
- brand (string): the EXACT brand name that appears on the product or badge â€” read the logo/emblem/nameplate and use that name. If none is readable, identify the make from the design and badge shape.
- model (string): the EXACT model name/number printed on the product or box when visible; otherwise your best professional identification from the design.
- year (string or null): the real model/manufacturing year â€” read the printed year/serial if visible, otherwise your best estimate from the design era. Only null for items with no meaningful year.
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
- Respond with valid JSON only.`,i=(await Promise.all((e||[]).slice(0,t.maxImages||3).map(n=>this._fetchImageAsDataUrl(n,768)))).filter(Boolean);if(!i.length)throw new Error("Could not read the uploaded images.");try{const n=await this._tryBrowserGeminiVision(a,i);if(n)return n}catch{}try{const n=await this._callEdge({action:"vision",images:i,prompt:a,max_tokens:4096});if(n&&n.success&&n.text){const o=qe(n.text);if(o)return{...o,_aiProvider:n.provider,_aiModel:n.model};throw new Error("The AI returned no valid analysis for these images.")}throw new Error(n&&n.error||"Vision service unavailable.")}catch{}return null},async _runVisionPrompt(e,t,{maxImages:a=5,maxTokens:i=4096,allowTextFallback:n=!1,mergeResults:o=null,onProgress:s=()=>{}}={}){const r=Math.max(1,Number(a)||5),u=await this._collectScanImages(t,{onProgress:s});if(!u.length)throw new Error("Could not read the uploaded images.");const d=async m=>this._runSingleVisionCall(e,m,{maxTokens:i,allowTextFallback:n});let c;if(u.length<=r)c=await d(u);else{const m=[];for(let _=0;_<u.length;_+=r)m.push(u.slice(_,_+r));s(0,m.length);const f=3,y=new Array(m.length).fill(null);let g=0;const v=async()=>{for(;g<m.length;){const _=g++;y[_]=await d(m[_]).catch(()=>null),s(Math.min(g,m.length),m.length)}};await Promise.all(Array.from({length:Math.min(f,m.length)},v));const k=[];if(y.forEach((_,w)=>{_&&k.push({result:_,startIndex:w*r})}),!k.length)return null;c=o?o(k,{batchSize:r,totalImages:u.length}):k.reduce((_,w)=>this._mergeJsonResults(_,w.result),null)}return c||null},async _runSingleVisionCall(e,t,{maxTokens:a=4096,allowTextFallback:i=!1}={}){const n=Date.now()<(this._geminiQuotaUntil||0);if(!n)try{const o=await this._tryBrowserGeminiVision(e,t);if(o)return o}catch{}if(!n)try{const o=await this._callEdge({action:"vision",images:t,prompt:e,max_tokens:a},3e4);if(o&&o.success&&o.text){const s=qe(o.text);if(s)return{...s,_aiProvider:o.provider,_aiModel:o.model};throw new Error("The AI returned no valid analysis for these images.")}throw new Error(o&&o.error||"Vision service unavailable.")}catch{}if(i)try{const o=await this.freeChat([{role:"system",content:"You complete marketplace listing data. Always reply with ONE valid JSON object only â€” no markdown, no extra text."},{role:"user",content:e}],{maxTokens:3e3,timeoutMs:3e4}),s=qe(o.text);if(s)return{...s,_aiProvider:o.provider,_aiModel:o.model}}catch{}return null},_pdfPageCache:new Map,async _collectScanImages(e,{onProgress:t=()=>{}}={}){const a=(Array.isArray(e)?e:[e]).map(o=>String(o||"")).filter(Boolean);if(!a.length)return[];const i=await Promise.all(a.map(async o=>{try{if(/^data:application\/pdf/.test(o)||Ze(o)){let r=this._pdfPageCache.get(o)||null;return r||(r=await Ei(o,{maxDim:1300}).catch(()=>[]),r.length&&this._pdfPageCache.set(o,r)),r}const s=await this._fetchImageAsDataUrl(o,1024);return s?[s]:[]}catch{return[]}})),n=[];for(const o of i)n.push(...o);return n},_mergeJsonResults(e,t){if(!e)return t?{...t}:null;if(!t)return e;const a={...e};for(const[i,n]of Object.entries(t))if(!i.startsWith("_")&&!(n==null||typeof n=="string"&&!n.trim())){if(!(i in a)||a[i]==null||a[i]===""){a[i]=n;continue}if(Array.isArray(a[i])||Array.isArray(n)){const o=[...Array.isArray(a[i])?a[i]:[a[i]],...Array.isArray(n)?n:[n]].map(s=>typeof s=="string"?s.trim():s).filter(s=>s!=null&&s!=="");a[i]=[...new Set(o)]}else typeof a[i]=="object"&&typeof n=="object"?a[i]={...a[i],...n}:(String(a[i]).trim(),String(n).trim())}return a},async identifyProduct(e,t={}){const a=`STAGE 1 â€” IDENTIFY THE EXACT PRODUCT.
Look at the photo(s) and state exactly what product is shown. Identification ONLY â€” do not complete any specifications yet.

IDENTIFICATION RULES (accuracy over guesses â€” this is the most important step):
- Read the real brand badge / logo / emblem / nameplate / label in the photo character by character and use the EXACT brand that is printed. NEVER swap brands: a BMW must never be called Mercedes-Benz, an iPhone never Samsung, a Toyota never Honda or any other brand.
- The model must come from a visible nameplate / label / badging when present. Otherwise identify the exact design (grille, headlights, taillights, wheels, body lines, interior, silhouette, box, packaging) and give your best professional identification, or give the brand + product type (e.g. "BMW SUV" or "Levi's jeans") instead of inventing a specific model.
- year: only from a visible printed year, serial, badge or registration. Otherwise estimate from the design era and set "year_estimated": true.
- color: the dominant color clearly visible.
- body_type: only when clearly visible (Sedan, SUV, Hatchback, Coupe, Convertible, Wagon, Pickup, Truck, Van, Sports Car, Luxury Sedan, Motorcycle, Yacht, Other).
- condition: judge from what is visible (New, Refurbished, Used - Like New, Used - Good, Used - Fair).
- listing_type: "property" if the photo shows a house, villa, apartment, condo, mansion, land, estate or any building for sale; "vehicle" for cars, motorcycles, boats and other vehicles; otherwise "product".
- category (for products and vehicles): best match from this list: ${pe.join(", ")}. For property photos set category to "Real Estate".
- For properties also give: property_type (House, Villa, Apartment, Condo, Land, Commercial, Farm, Other), bedrooms (number or null), bathrooms (number or null), half_bathrooms (number or null), building_size (string|null), land_size (string|null), floors (number|null), garage (string|null, e.g. "2-car attached"), parking_spaces (number|null), furnished ("Furnished"/"Unfurnished"/null), condition (string|null â€” only from a visible listing sign, seller notes or obvious visible state: "New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation"), year_built (number|null â€” only from a visible year, plaque, cornerstone or listing sign), year_renovated (number|null â€” only if visibly stated), area (neighborhood/district, string|null), address (street + number or landmark when visible in the photo or reliably known, string|null), zip_code (string|null â€” only if visibly printed), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town (string|null), city (string|null), state (string|null), country (string|null), latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null).
- LOCATION RULES: use ONLY location information genuinely visible in the photo or reliably known from it (street signs, landmarks, real estate signs, watermarks). NEVER invent a street address, area, city or coordinates. If you cannot determine a location value, return null for that field â€” the owner will enter it. Latitude/longitude may be derived from a readable address (e.g. a visible street sign); otherwise null.
- confidence: how certain you are about what this is: "high" | "medium" | "low".
- alternate_categories: up to 2 other plausible category matches from the list above, or [].
- detected_name: a short plain label of what you actually see, e.g. "white Toyota Camry sedan", "black leather handbag", "modern 4-bedroom villa".
- If the photo does not clearly show a product, return { "identified": false, "detected_name": "what you see", "reason": "why you cannot identify it" }.

Return ONE valid JSON object (no markdown) with only these keys:
{ "identified": true, "listing_type": "product"|"vehicle"|"property", "brand": string|null, "model": string|null, "year": string|null, "year_estimated": boolean, "body_type": string|null, "color": string|null, "condition": string|null, "category": string|null, "subcategory": string|null, "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": string|null, "year_built": number|null, "year_renovated": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "confidence": "high"|"medium"|"low", "alternate_categories": string[], "detected_name": string }`;return this._runVisionPrompt(a,e,{maxImages:t.maxImages||5})},async detectProducts(e,t={}){const a=`STAGE 0 â€” DETECT EVERY DISTINCT PRODUCT.
Look carefully at ALL of the photo(s) uploaded and detect EVERY distinct product shown.

RULES:
- Every DIFFERENT product must be its own entry. If one photo shows a bag, a watch, shoes and a phone, that is FOUR separate products â€” one entry per product.
- Photos that show the SAME product from different angles / sides / details are ONE product: give them the same entry and list every image index in image_indices.
- A single photo can appear in several products' image_indices when it contains several different products.
- If a photo contains no recognizable product, ignore that photo.
- NEVER reject the scan. Even when a photo is blurry, dark, partial or unusual, ALWAYS give your BEST identification of the most likely product in it and set "confidence" to "low" â€” the owner reviews and edits everything afterwards. Only return { "identified": false, "reason": ... } when every single photo truly contains no object at all.

For each distinct product include:
- image_indices: array of the photo indexes (0-based) that show THIS product (used as its own images later). Never combine different products under one entry.
- listing_type: "property" if it is a house, villa, apartment, condo, mansion, land, estate or building; "vehicle" for cars, motorcycles, boats; otherwise "product".
- brand: the real brand printed on the product when visible â€” never swap one brand for another.
- model: real model from a visible label when present, otherwise null.
- year: only from visible text; otherwise null with year_estimated true when estimated from the design.
- body_type, color, condition (New, Refurbished, Used - Like New, Used - Good, Used - Fair).
- category: best match from this list â€” ${pe.join(", ")}. For properties set category to "Real Estate".
- subcategory, property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors (number|null), garage (string|null), parking_spaces (number|null), furnished ("Furnished"/"Unfurnished"/null), year_built (number|null â€” only if visible), area (neighborhood/district), address (street + number or landmark when visible/reliably known), zip_code (string|null â€” only if visible), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town, city, state, country, latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null) for properties. LOCATION RULES: only use location genuinely visible in the photo â€” never invent an address or coordinates; return null when unknown.
- confidence: "high" | "medium" | "low" for each product.
- detected_name: a short plain label for each product, e.g. "black leather handbag", "silver wristwatch", "white Nike sneakers", "modern 3-bedroom villa".

Return ONE valid JSON object (no markdown):
{ "identified": true, "products": [ { "image_indices": number[], "listing_type": "product"|"vehicle"|"property", "brand": string|null, "model": string|null, "year": string|null, "year_estimated": boolean, "body_type": string|null, "color": string|null, "condition": string|null, "category": string|null, "subcategory": string|null, "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": "Furnished"|"Unfurnished"|null, "year_built": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "confidence": "high"|"medium"|"low", "detected_name": string } ] }`;return this._runVisionPrompt(a,e,{maxImages:t.maxImages||5,mergeResults:i=>{const n=[];for(const{result:o,startIndex:s}of i)for(const r of o&&Array.isArray(o.products)?o.products:[]){const u=Array.isArray(r.image_indices)?[...new Set(r.image_indices.map(c=>parseInt(c,10)).filter(Number.isFinite).map(c=>c+s))]:[s],d=n.find(c=>String(c.detected_name||"").toLowerCase()===String(r.detected_name||"").toLowerCase()&&String(c.brand||"").toLowerCase()===String(r.brand||"").toLowerCase()&&String(c.model||"").toLowerCase()===String(r.model||"").toLowerCase());if(d){d.image_indices=[...new Set([...d.image_indices||[],...u])],(r.confidence==="high"&&d.confidence!=="high"||!d.detected_name&&r.detected_name)&&(d.confidence=r.confidence,d.detected_name=r.detected_name||d.detected_name);continue}n.push({...r,image_indices:u})}return{identified:n.length>0,products:n}}})},async completeProductSpecs(e,t,a={}){const i=t||{},n=`STAGE 2 â€” COMPLETE THE STANDARD SPECIFICATIONS.
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
- Properties (house/villa/land): property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors, garage, parking_spaces, furnished ("Furnished"/"Unfurnished"/null), condition (string|null â€” "New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation"; only from visible state or a listing sign, never inferred as verified), year_built (number|null â€” only if visible/known), year_renovated (number|null â€” only if visible/known), area (neighborhood/district), address (street + number or landmark when visible/reliably known), zip_code (string|null â€” only if visibly printed), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town, city, state, country, country_code, latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null), interior_features (string[]|null â€” only interior elements actually visible in the photos), exterior_features (string[]|null â€” only exterior elements actually visible), home_systems (string[]|null â€” only systems visibly present, e.g. air conditioning units, solar panels, radiators), nearby_area (only genuinely known from the photo/listing sign: schools/hospitals/shopping/transportation/distances â€” otherwise null), floor_plan (only if a floor plan is actually visible in the photos, otherwise null), legal_info (NEVER claim ownership/title/permits/taxes/legal status as verified from a photo â€” only mention something clearly printed on a visible listing/sign as source "Seller provided", otherwise null), inspection_info (string|null â€” only if visibly stated), verification_status (always null here â€” stays "Not verified" unless the owner verifies), risk_notes (string|null â€” only clearly visible issues). LOCATION RULES: only use location genuinely visible in the photo or reliably known â€” never invent an address, city, coordinates, landmarks or nearby places; return null (and list the key in "missing_fields") when you cannot determine it. latitude/longitude may be derived from a readable address; otherwise null.
- Other product types: fill whatever genuinely applies â€” type (e.g. Handbag, Sneaker, Textbook), material, size, color, brand, model, age_range, skin_type, ingredients, author, publisher, language, format, isbn, pages, edition, quantity, pet_type, lens, sensor, megapixels, video, platform, license, version, duration, followers, engagement, niche, usage, shelf_life, storage, assembly, weatherproof, warranty.
- Also complete the listing content for the exact identified product: highlights (3-6 genuine selling points), seo_keywords (6-10 relevant search keywords for the identified product), tags (from the allowed badge set â€” "New Arrival", "Best Seller", "Hot Deal", "Featured", "Limited Stock" â€” only the ones that genuinely apply to this exact product), warranty (only when the identified product type genuinely carries one, e.g. electronics, vehicles, appliances), availability_status ("In Stock" for a new product, otherwise null if not determinable), and stock_quantity (1 ONLY for unique one-of-a-kind items such as a vehicle, property or single specimen â€” otherwise null, because stock cannot be known from a photo).

HARD RULES:
- ONLY use specifications for the exact brand + model identified above. A Toyota photo must produce TOYOTA specifications. NEVER use specifications from a different brand or model (never a Toyota image â†’ Mercedes specs, never an iPhone image â†’ Samsung specs, never a bag image â†’ car specs).
- If the exact year or trim is uncertain, use the most common / standard specification for that identified model and list that key in "estimated". Do not randomly invent values that are not reasonable for that model.
- Only return specs that exist for the product type: a bag has no engine/transmission/horsepower (leave those null); a phone has no transmission or doors (leave those null); a car has engine/transmission/fuel/drive/horsepower/seats/doors; a house has bedrooms/bathrooms/sizes but no engine or storage.
- Never return price in this stage â€” price is handled in a separate stage.
- "missing_fields" is the ONLY place where uncertainty is recorded: for every field in this JSON that APPLIES to the identified product type but that you genuinely cannot determine or reliably verify (from the photos or reliable product data), list that key in "missing_fields". NEVER guess a value for a field you cannot determine â€” put its key in "missing_fields" instead. NEVER list a field that does not apply to this product type. The owner will see "Not specified" for those fields and can review/edit them before publishing.

DESCRIPTION REQUIREMENTS (the description is a MAJOR part of the listing):
- Write a detailed, professional, natural, trustworthy and enjoyable marketplace description that is clearly about THIS exact identified product and nothing else.
- For vehicles, naturally explain the engine, performance, transmission, drivetrain, fuel type, comfort, interior, exterior, safety, technology and practicality â€” always grounded in the reliable specifications you returned above.
- For properties, describe the home/land, its layout, rooms, size, location, surroundings and notable features â€” grounded in the property details returned above.
- For other product types, cover the product's most relevant, genuine attributes (design, materials, build quality, usability, and key specs) based only on the identified product and its reliable specs.
- Write in smooth, complete sentences and short paragraphs (roughly 3-6 sentences / 60-140 words). Never sound robotic, never use bullet lists, never invent features, prices, bundles or promises that are not true of the identified product, and NEVER mention AI, scanning, estimates, specification lookup or any internal process.

Return ONE valid JSON object (no markdown):
{
  "title": string|null (professional listing title: year + real brand + real model + product type, e.g. "2023 Toyota Camry SE Sedan" or "Black Leather Crossbody Handbag"),
  "description": string|null (the detailed, professional description described above â€” based ONLY on the identified product and its standard specs),
  "engine": string|null, "transmission": string|null, "fuel_type": string|null, "drive_type": string|null,
  "horsepower": string|null, "mileage": string|null, "seating_capacity": string|null, "doors": string|null,
  "body_type": string|null, "model_year": string|null, "safety_features": string[]|null,
  "storage": string|null, "ram": string|null, "processor": string|null, "display": string|null, "graphics": string|null, "os": string|null,
  "material": string|null, "size": string|null, "gender": string|null, "platform": string|null,
  "type": string|null, "color": string|null, "brand": string|null, "model": string|null,
  "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": string|null, "condition": string|null, "year_built": number|null, "year_renovated": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "country_code": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "interior_features": string[]|null, "exterior_features": string[]|null, "home_systems": string[]|null, "nearby_area": { "schools": string[]|null, "hospitals": string[]|null, "shopping": string[]|null, "transportation": string[]|null, "distances": string[]|null }|null, "floor_plan": { "image": string|null, "rooms": string[]|null, "levels": string|null, "total_area": string|null }|null, "legal_info": string[]|null (each item like "Ownership: Clear title (Seller provided)" or "Property taxes (Not verified)" â€” NEVER verified from a photo), "inspection_info": string|null, "risk_notes": string|null,
  "author": string|null, "publisher": string|null, "language": string|null, "format": string|null, "isbn": string|null, "pages": string|null, "edition": string|null, "quantity": string|null, "age_range": string|null, "skin_type": string|null, "ingredients": string|null, "pet_type": string|null, "lens": string|null, "sensor": string|null, "megapixels": string|null, "video": string|null, "license": string|null, "version": string|null, "duration": string|null, "followers": string|null, "engagement": string|null, "niche": string|null, "usage": string|null, "shelf_life": string|null, "assembly": string|null, "weatherproof": string|null, "warranty": string|null,
  "features": string[]|null (notable features, e.g. ["OLED display","5G"] or ["Swimming pool","Double garage"]),
  "highlights": string[]|null (3-6 genuine selling points of this exact product),
  "seo_keywords": string[]|null (6-10 relevant search keywords for this exact product),
  "tags": string[]|null (only from: "New Arrival", "Best Seller", "Hot Deal", "Featured", "Limited Stock" â€” only ones that genuinely apply),
  "availability_status": "In Stock"|"Out of Stock"|"Pre-order"|"Limited Stock"|null,
  "stock_quantity": number|null (1 only for unique one-of-a-kind items, otherwise null),
  "estimated": string[] (keys above that are estimates, e.g. ["engine","horsepower"]),
  "missing_fields": string[] (keys above that APPLY to this product type but could not be determined â€” see HARD RULES)
}`;return this._runVisionPrompt(n,e,{maxImages:a.maxImages||5,allowTextFallback:!0})},async estimateProductPrice(e,t,a={},i={}){const n=t||{},o=a||{},s=`STAGE 3 â€” ESTIMATE THE REAL MARKET PRICE AND A PROMOTIONAL DISCOUNT PRICE.
The exact product below was identified from the photos in STAGE 1, and its standard specifications were completed in STAGE 2.

IDENTIFIED PRODUCT:
- brand: ${String(n.brand||"unknown")}
- model: ${String(n.model||"unknown")}
- year: ${String(n.year||"unknown")}
- body_type: ${String(n.body_type||"unknown")}
- condition: ${String(n.condition||"unknown")}
- category: ${String(n.category||"unknown")}
- detected_name: ${String(n.detected_name||"unknown")}

KNOWN SPECIFICATIONS:
- engine: ${String(o.engine||"unknown")}
- transmission: ${String(o.transmission||"unknown")}
- fuel_type: ${String(o.fuel_type||"unknown")}
- drive_type: ${String(o.drive_type||"unknown")}
- horsepower: ${String(o.horsepower||"unknown")}
- mileage: ${String(o.mileage||"unknown")}
- storage/ram: ${String(o.storage||"")}${o.ram?" / "+o.ram:""}
- property: ${String(n.property_type||o.property_type||"")}${o.bedrooms?` ${o.bedrooms} beds`:""}${o.half_bathrooms?` / ${o.half_bathrooms} half baths`:""}${o.bathrooms?` / ${o.bathrooms} baths`:""}${o.building_size?` / ${o.building_size}`:""}${o.land_size?` / ${o.land_size} land`:""}${o.year_built?` / built ${o.year_built}`:""}${o.condition?` / ${o.condition}`:""}${o.city?` / ${o.city}`:""}

Estimate the reasonable CURRENT MARKET SELLING PRICE (in USD) for THIS EXACT identified product â€” the price a real buyer would realistically pay for it today, in the condition shown in the photo. Use reliable current market data for that exact brand + model + year + condition + trim.

Then suggest a promotional DISCOUNT PRICE: a compelling sale price BELOW the real price (typically 5-20% off) that the customer would actually pay, to make the listing attractive. If a discount does not make sense for this product, set suggested_discount_price to null.

HARD RULES:
- ONLY price the exact product identified above. A Toyota photo must get a TOYOTA price, an iPhone photo an iPhone price, a Gucci bag a Gucci bag price. NEVER use the price of a different brand or model.
- Base the price on the identified product's real market value: for a car use current market value of that model/year/condition (consider trim, engine, mileage, condition); for a house/property use typical values for the identified property type and location when visible; for a bag use the market price of that brand/model/type/condition; for a phone use the current market price of that model/storage/condition.
- If the exact value cannot be determined, give the best reasonable market estimate â€” never 0, never a random invented number, and never a price for a different product.
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
}`;return this._runVisionPrompt(s,e,{maxImages:i.maxImages||5,allowTextFallback:!0})},async completeSpecsAndPrice(e,t,a={}){const i=t||{},n=`STAGES 2+3 â€” COMPLETE THE SPECIFICATIONS AND ESTIMATE THE PRICE IN ONE STEP.
The product below was identified from the photos.

IDENTIFIED PRODUCT:
- listing_type: ${String(i.listing_type||"product")}
- brand: ${String(i.brand||"unknown")}
- model: ${String(i.model||"unknown")}
- year: ${String(i.year||"unknown")}
- body_type: ${String(i.body_type||"unknown")}
- category: ${String(i.category||"unknown")}
- detected_name: ${String(i.detected_name||"unknown")}

Look at the photo(s), then do BOTH jobs for THIS EXACT identified product.

JOB A â€” COMPLETE THE STANDARD SPECIFICATIONS using reliable data for that exact brand + model:
- Vehicles: engine, transmission, fuel_type, drive_type, horsepower, seating_capacity, doors, body_type, model_year, mileage (only if visible/known), safety_features.
- Phones/Computers: storage, ram, processor, display, graphics, os.
- Properties: property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors, garage, parking_spaces, furnished ("Furnished"/"Unfurnished"/null), condition ("New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation" â€” only from visible state or a listing sign, never inferred as verified), year_built/year_renovated (only if visible/known), area, address (ONLY when genuinely visible/reliably known), zip_code (only if visibly printed), landmarks (only clearly indicated ones), town, city, state, country, country_code, latitude, longitude, listing_status ("sale"/"rent"/null). LOCATION RULES: never invent an address, city or coordinates; return null and list the key in "missing_fields" when undeterminable.
- Other product types: type, material, size, color, age_range, skin_type, ingredients, author, publisher, language, format, isbn, pages, edition, quantity, pet_type, lens, sensor, megapixels, video, platform, license, version, duration, followers, engagement, niche, usage, shelf_life, assembly, weatherproof, warranty.
- Listing content: highlights (3-6 genuine selling points), seo_keywords (6-10 keywords), tags (only from "New Arrival", "Best Seller", "Hot Deal", "Featured", "Limited Stock" â€” only ones that genuinely apply), availability_status ("In Stock" for a new product, otherwise null), stock_quantity (1 ONLY for unique one-of-a-kind items such as a vehicle or property, otherwise null).

HARD RULES:
- ONLY use specifications of the exact brand + model identified above. NEVER swap brands or models.
- Only return specs that exist for this product type (a bag has no engine; a phone has no transmission; a car has engine/transmission/fuel/drive/horsepower/seats/doors).
- If the exact year/trim is uncertain use the most common standard spec for that model and list the key in "estimated".
- "missing_fields": every field that APPLIES to this product type but cannot be determined â€” list the key there instead of guessing.
- DESCRIPTION: write a detailed, professional, natural marketplace description (3-6 sentences / 60-140 words) about THIS exact product only, grounded in its real specs. Smooth sentences, no bullet lists, no invented features, never mention AI/scanning/estimates.

JOB B â€” ESTIMATE THE PRICE: the reasonable CURRENT MARKET SELLING price in USD for this exact product today (brand + model + year + condition + trim), then a promotional DISCOUNT price typically 5-20% BELOW it (null when a discount makes no sense). Never 0, never another product's price, plain numbers without symbols or commas.

Return ONE valid JSON object (no markdown):
{
  "title": string|null,
  "description": string|null,
  "engine": string|null, "transmission": string|null, "fuel_type": string|null, "drive_type": string|null,
  "horsepower": string|null, "mileage": string|null, "seating_capacity": string|null, "doors": string|null,
  "body_type": string|null, "model_year": string|null, "safety_features": string[]|null,
  "storage": string|null, "ram": string|null, "processor": string|null, "display": string|null, "graphics": string|null, "os": string|null,
  "material": string|null, "size": string|null, "gender": string|null, "platform": string|null,
  "type": string|null, "color": string|null, "brand": string|null, "model": string|null,
  "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": string|null, "condition": string|null, "year_built": number|null, "year_renovated": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "country_code": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null,
  "author": string|null, "publisher": string|null, "language": string|null, "format": string|null, "isbn": string|null, "pages": string|null, "edition": string|null, "quantity": string|null, "age_range": string|null, "skin_type": string|null, "ingredients": string|null, "pet_type": string|null, "lens": string|null, "sensor": string|null, "megapixels": string|null, "video": string|null, "license": string|null, "version": string|null, "duration": string|null, "followers": string|null, "engagement": string|null, "niche": string|null, "usage": string|null, "shelf_life": string|null, "assembly": string|null, "weatherproof": string|null, "warranty": string|null,
  "features": string[]|null, "highlights": string[]|null, "seo_keywords": string[]|null, "tags": string[]|null,
  "availability_status": string|null, "stock_quantity": number|null,
  "estimated": string[],
  "missing_fields": string[],
  "price": { "currency": "USD", "estimated_price": number, "suggested_discount_price": number|null, "confidence": "high"|"medium"|"low", "reason": string }
}${a.fieldsSchema||""}${a.fieldsSchema?`
FORM-FIELD COMPLETENESS RULE: the form-field list above is binding. EVERY key in that list that is not already covered by the JSON keys above MUST also appear as a top-level key in your returned JSON with its extracted value (or null when genuinely not present anywhere in the document/photos â€” never guess). Use each field's exact quoted key. Match select options exactly.`:""}`,o=await this._runVisionPrompt(n,e,{maxImages:a.maxImages||5,allowTextFallback:!0});if(!o)return null;const{price:s,...r}=o,u=s&&typeof s=="object"?s:o.estimated_price!=null?{currency:o.currency||"USD",estimated_price:o.estimated_price,suggested_discount_price:o.suggested_discount_price??null,confidence:o.confidence??null,reason:o.reason??""}:null;if(u&&Number.isFinite(Number(u.estimated_price))){const d=Number(u.estimated_price);d<=0&&(u.estimated_price=F),u.estimated_price=Math.max(F,Math.min(K,d))}return{specs:Object.keys(r).length?r:null,price:u}},async verifyExtraction(e,t,a,i=[],n={}){if(Date.now()<(this._geminiQuotaUntil||0))return null;const o=t||{},s=(i||[]).map(d=>`- "${d.key}" (${d.label})`).join(`
`),r=Object.entries(a||{}).filter(([,d])=>d!=null&&String(Array.isArray(d)?d.join(", "):d).trim()!=="").map(([d,c])=>`"${d}": ${JSON.stringify(Array.isArray(c)?c.join(", "):String(c).slice(0,160))}`).join(`,
`),u=`VERIFICATION PASS â€” CHECK EVERY EXTRACTED VALUE AGAINST THE DOCUMENT.
A first extraction pass produced the values below from these same photo(s)/document page(s). Your job is to RE-READ every page carefully and audit EACH value.

IDENTIFIED ITEM: ${[o.year,o.brand,o.model].filter(Boolean).join(" ")||o.detected_name||"unknown"}

CURRENT EXTRACTED VALUES:
${r||"(none yet)"}

AUDIT INSTRUCTIONS â€” check all of these, one by one:
1. WRONG VALUES: any current value that contradicts what the document actually says (misread digit/letter, wrong model variant, wrong date format, swapped fields like engine size vs horsepower, price in the wrong currency) â†’ put the CORRECT value in "corrections" under that exact key.
2. MISSED VALUES: information present somewhere in the document (any page, including fine print, tables, stamps, serials, labels, footers) that has NO current value above but belongs to one of the known fields â†’ add it under that exact key in "corrections".
3. MISPLACED VALUES ("wrong_mapping"): a value that was put in the wrong FIELD (e.g. VIN stored as mileage, a person's name stored as publisher) â†’ list [wrong_key, right_key] pairs.
4. STILL MISSING: fields that genuinely apply to this item type but have no value and are nowhere in the document â†’ list their keys in "still_missing". NEVER invent or guess a value â€” only report what is actually written in the document.
${s?`
KNOWN FORM FIELDS:
${s}
Use ONLY these keys (or keys already present above) in corrections.
`:""}
Return ONE valid JSON object (no markdown):
{ "corrections": { "<key>": <corrected or newly found value â€” exact JSON type for that field> }, "still_missing": ["key"], "wrong_mapping": [["from_key","to_key"]], "notes": ["short factual observations, e.g. 'VIN appears on page 2 footer'"] }`;try{return await this._runVisionPrompt(u,e,{maxImages:n.maxImages||5,maxTokens:2500,allowTextFallback:!1,mergeResults:c=>{const m={corrections:{},still_missing:[],wrong_mapping:[],notes:[]};for(const{result:f}of c){const y=f||{};y.corrections&&typeof y.corrections=="object"&&Object.assign(m.corrections,y.corrections);for(const g of Array.isArray(y.still_missing)?y.still_missing:[]){const v=String(g);v&&!m.still_missing.includes(v)&&m.still_missing.push(v)}for(const g of Array.isArray(y.wrong_mapping)?y.wrong_mapping:[])Array.isArray(g)&&g.length>=2&&!m.wrong_mapping.some(v=>v[0]===g[0]&&v[1]===g[1])&&m.wrong_mapping.push([String(g[0]),String(g[1])]);for(const g of Array.isArray(y.notes)?y.notes:[]){const v=String(g||"").trim();v&&!m.notes.includes(v)&&m.notes.push(v)}}return m}})}catch{return null}},async _callEdge(e,t=6e4){let a="";try{a=(await b.auth.getSession())?.data?.session?.access_token||""}catch{}return await(await fetch(Ai,{method:"POST",headers:{"Content-Type":"application/json",...a?{Authorization:`Bearer ${a}`}:{}},body:JSON.stringify(e),signal:AbortSignal.timeout(t)})).json().catch(()=>({}))},_imageCache:new Map,async _fetchImageAsDataUrl(e,t=768){const a=String(e);if(this._imageCache.has(a))return this._imageCache.get(a);const i=(async()=>{try{const o=await fetch(e,{signal:AbortSignal.timeout(15e3)}).then(s=>s.blob());return!o||!o.size?null:o.size<15e4?`data:${o.type||"image/jpeg"};base64,${await Tn(o)}`:await this._downscaleImage(o,t)}catch{return null}})();this._imageCache.set(a,i);const n=await i;return n||this._imageCache.delete(a),n},async _downscaleImage(e,t){const a=URL.createObjectURL(e);try{const i=new Image;await new Promise((u,d)=>{i.onload=u,i.onerror=d,i.src=a});const n=Math.min(1,t/Math.max(i.width,i.height)),o=Math.max(1,Math.round(i.width*n)),s=Math.max(1,Math.round(i.height*n)),r=document.createElement("canvas");return r.width=o,r.height=s,r.getContext("2d").drawImage(i,0,0,o,s),r.toDataURL("image/jpeg",.72)}finally{URL.revokeObjectURL(a)}},_geminiCallChain:Promise.resolve(),_lastGeminiCallAt:0,_paceGeminiCall(e){const a=this._geminiCallChain.then(async()=>{const i=(this._lastGeminiCallAt||0)+6e3-Date.now();return i>0&&await new Promise(n=>setTimeout(n,i)),this._lastGeminiCallAt=Date.now(),e()});return this._geminiCallChain=a.then(()=>{},()=>{}),a},async _tryBrowserGeminiVision(e,t){if(Date.now()<(this._geminiQuotaUntil||0))return null;const a=await this.getConfig(),i=String(a.gemini_key||a.gemini_api_key||"").trim();if(!i)return null;const n=String(a.gemini_vision_model||"").trim(),o=[...new Set([n||"gemini-2.0-flash-lite","gemini-2.0-flash-lite",String(a.gemini_model||"").trim(),"gemini-2.5-flash"].filter(Boolean))];for(const s of o)try{const r=[{text:e}];for(const g of t){const v=String(g).match(/^data:([^;,]+)[;,]base64,(.+)$/s);v&&r.push({inlineData:{mimeType:v[1].trim(),data:v[2].trim()}})}if(r.length<2)return null;const u=`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(s)}:generateContent?key=${encodeURIComponent(i)}`,d=/2\.5|-3/.test(s),c=await this._paceGeminiCall(()=>fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:r}],generationConfig:{temperature:.2,maxOutputTokens:4096,...d?{thinkingConfig:{thinkingBudget:0}}:{}}}),signal:AbortSignal.timeout(2e4)}));if(c.status===429||c.status===403)return this._geminiQuotaUntil=Date.now()+65*1e3,null;if(!c.ok)continue;const f=((await c.json())?.candidates?.[0]?.content?.parts||[]).map(g=>g?.text||"").join(`
`).trim();if(!f)continue;const y=qe(f);if(y)return{...y,_aiProvider:"Gemini (browser)",_aiModel:s}}catch{}return null}};function Tn(e){return new Promise(t=>{const a=new FileReader;a.onload=()=>{const i=a.result;if(typeof i=="string"){const n=i.indexOf(",");t(n>=0?i.slice(n+1):i)}else t("")},a.onerror=()=>t(""),a.readAsDataURL(e)})}window.aiClient=N;window.showAiStatusModal=async function(){const e=await N.getStatus(),t=e.filter(a=>a.hasKey);V(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="activity" class="w-5 h-5 text-emerald-400"></i> AI Provider Status</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">ðŸ”™ Back</button>
        </div>
        <div class="mb-4 p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300">
          ${t.length===0?"âš  No key configured. Go to AI Settings and add your Google Gemini API key.":"Google Gemini is configured and ready."}
        </div>
        <div class="space-y-2">
          ${e.map(a=>`
            <div class="flex items-center gap-3 p-2.5 glass-soft border ${a.hasKey?"border-blue-500/15":"border-gray-800"} rounded-xl opacity-${a.hasKey?"100":"40"}">
              <span class="w-2.5 h-2.5 rounded-full shrink-0 ${a.hasKey?"bg-emerald-400":"bg-gray-600"}"></span>
              <span class="text-xs font-bold text-white flex-1">${l(a.name)}</span>
              ${a.isActive?'<span class="text-[9px] font-black text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-full">ACTIVE</span>':""}
              ${a.hasKey?"":'<span class="text-[9px] text-gray-600">No key</span>'}
              ${a.hasKey?'<span class="text-[9px] text-emerald-400">Ready âœ“</span>':""}
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
    </div>`),window.lucide&&lucide.createIcons()};window.testAiCall=async function(){const e=document.getElementById("ai-test-input")?.value?.trim();if(!e)return;const t=document.getElementById("ai-test-output");t.classList.remove("hidden"),t.textContent="â³ Asking Geminiâ€¦";try{const a=await N.prompt(e);t.textContent=`âœ“ [${a.provider} Â· ${a.model}]

${a.text}`}catch(a){t.textContent=`âŒ ${a.message}`}};function qe(e){if(!e)return null;let t=String(e).trim();const a=t.match(/```(?:json)?\s*([\s\S]*?)```/i);a&&(t=a[1].trim());const i=t.indexOf("{"),n=t.lastIndexOf("}");if(i===-1||n===-1||n<=i)return null;const o=t.slice(i,n+1);try{return JSON.parse(o)}catch{return null}}async function Ln(){const e=document.getElementById("content");try{const[{data:t},a]=await Promise.all([b.from("site_settings").select("*").limit(1).maybeSingle(),Bn()]),i=t||{},n=new Set(Array.isArray(i.live_promo_product_ids)?i.live_promo_product_ids:[]),o=a.length?`
        <div class="mt-4">
          <label class="lbl">Which products appear in the Live Promotions (Featured Product Alerts)?</label>
          <p class="text-[11px] text-gray-400 mb-2">Leave all unchecked to let the store pick real products automatically.</p>
          <input id="promo-picker-search" type="search" class="input-field mb-2" placeholder="Search products to chooseâ€¦" oninput="filterPromoPicker(this.value)">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1.5 max-h-72 overflow-y-auto pr-1" id="promo-picker-list">
            ${a.map(s=>{const r=s.property_id||s.id,u=n.has(r)?"checked":"";return`<label class="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3 py-2 cursor-pointer hover:border-blue-400/40 transition" data-promo-search="${l((s.title||s.name||"")+" "+(s.category||""))}">
                <input type="checkbox" name="live_promo_product_ids" value="${l(r)}" ${u} class="accent-blue-500 w-4 h-4">
                <span class="min-w-0"><span class="block text-xs font-bold text-white truncate">${l(s.title||s.name||r)}</span><span class="block text-[10px] text-gray-400">${l(s.category||s.listing_type||"")} Â· ${l(r)}</span></span>
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
          ${[{section:"Site Identity",fields:[{key:"site_name",label:"Site Name",type:"text",placeholder:"Weverse Online Shop"},{key:"site_tagline",label:"Tagline / Slogan",type:"text",placeholder:"Premium International Commerce"},{key:"site_description",label:"Site Description (SEO)",type:"textarea",placeholder:"Your trusted global shopâ€¦"}]},{section:"Contact Information",fields:[{key:"contact_email",label:"Contact Email",type:"email",placeholder:"support@example.com"},{key:"contact_phone",label:"Contact Phone",type:"tel",placeholder:"+1 234 567 8900"},{key:"contact_address",label:"Business Address",type:"textarea",placeholder:"123 Main St, City, Country"},{key:"whatsapp_number",label:"WhatsApp Number",type:"tel",placeholder:"+1 234 567 8900"}]},{section:"Hero Section",fields:[{key:"hero_headline",label:"Hero Headline",type:"text",placeholder:"Weverse Online Shop"},{key:"hero_subtext",label:"Hero Subtext",type:"textarea",placeholder:"Shop premium productsâ€¦"},{key:"hero_cta_text",label:"CTA Button Text",type:"text",placeholder:"Shop Now"}]},{section:"Social Media",fields:[{key:"facebook_url",label:"Facebook URL",type:"url",placeholder:"https://facebook.com/â€¦"},{key:"instagram_url",label:"Instagram URL",type:"url",placeholder:"https://instagram.com/â€¦"},{key:"twitter_url",label:"Twitter / X URL",type:"url",placeholder:"https://twitter.com/â€¦"},{key:"youtube_url",label:"YouTube URL",type:"url",placeholder:"https://youtube.com/â€¦"},{key:"tiktok_url",label:"TikTok URL",type:"url",placeholder:"https://tiktok.com/â€¦"}]},{section:"Mobile App Promotion Banner",fields:[{key:"app_banner_enabled",label:"Show the App Promotion banner at the bottom of every page",type:"checkbox"},{key:"app_banner_headline",label:"Banner Headline",type:"text",placeholder:"Discover More with the Weverse Online Shop App"},{key:"app_play_store_url",label:"Google Play Store URL (real app listing â€” leave empty while unpublished)",type:"url",placeholder:"https://play.google.com/store/apps/details?id=â€¦"}]},{section:"Live Product Promotions (Featured Product Alerts)",fields:[{key:"live_promo_enabled",label:"Show Live Product Promotions (small alerts at the bottom corner)",type:"checkbox"},{key:"live_promo_first_delay_seconds",label:"First alert after (seconds)",type:"number",placeholder:"12"},{key:"live_promo_interval_seconds",label:"Delay between alerts (seconds)",type:"number",placeholder:"60"}],extra:o}].map(s=>`
            <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
              <h3 class="text-sm font-black text-white mb-4">${s.section}</h3>
              <div class="form-grid form-grid-2">
                ${s.fields.map(r=>`
                  <div ${r.type==="textarea"||r.type==="checkbox"?'class="sm:col-span-2"':""}>
                    ${r.type==="checkbox"?`<label class="flex items-center gap-2.5 cursor-pointer"><input type="checkbox" name="${r.key}" class="accent-blue-500 w-4 h-4" ${i[r.key]?"checked":""}><span class="text-sm text-gray-300">${r.label}</span></label>`:r.type==="textarea"?`<label class="lbl">${r.label}</label><textarea class="input-field" name="${r.key}" placeholder="${l(r.placeholder)}" rows="2">${l(i[r.key]||"")}</textarea>`:`<label class="lbl">${r.label}</label><input type="${r.type}" class="input-field" name="${r.key}" value="${l(i[r.key]||"")}" placeholder="${l(r.placeholder||"")}">`}
                  </div>`).join("")}
              </div>
              ${s.extra||""}
            </div>`).join("")}
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Content Settings</button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}async function Bn(){const e=new Set,t=[],a=i=>{for(const n of i||[]){const o=n&&(n.property_id||n.id);o&&!e.has(o)&&(e.add(o),t.push(n))}};try{const{data:i}=await b.from("showroom_listings").select("property_id,title,name,category,listing_type,images,is_active").order("created_at",{ascending:!1}).limit(500);a(i)}catch{}return a(Qe()),a(ae),a(da),a(ca),a(ua),a(pa),t.slice(0,250)}window.filterPromoPicker=function(e){const t=document.getElementById("promo-picker-list");if(!t)return;const a=(e||"").trim().toLowerCase();t.querySelectorAll("[data-promo-search]").forEach(i=>{i.style.display=!a||i.dataset.promoSearch.toLowerCase().includes(a)?"":"none"})};window.selectAllPromoPicks=function(){document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(e=>{e.checked=!0})};window.clearAllPromoPicks=function(){document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(e=>{e.checked=!1})};window.saveContent=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=Array.from(new Set(t.getAll("live_promo_product_ids").map(o=>String(o).trim()).filter(Boolean)));i.length?a.live_promo_product_ids=i:a.live_promo_product_ids=[];const{error:n}=await b.from("site_settings").upsert({id:1,...a});if(n){p(n.message,"error");return}p("Content settings saved!")};const Wt=[{key:"hero_videos",custom:!0,title:"HERO VIDEO BANNER (ROTATING)",desc:"Upload your own promotional videos (MP4 & WebM) to the top homepage banner. Each saved slide becomes its own full-width hero with its title, subtitle and CTA over a soft dark overlay so the text always stays readable. Add one video, one poster, or many rotating slides. If no video is added here, the single promo banner and the built-in brand banner below are shown instead as fallbacks.",accent:"from-indigo-400 to-violet-500"},{key:"banner",title:"ANDROID APP BANNER",desc:"The mobile-app promotion banner shown at the bottom of every page. Editing these words never changes the banner design, phone image, logo or buttons.",accent:"from-cyan-400 to-blue-500",fields:[{key:"app_banner_title",label:"App Banner Title",type:"text"},{key:"app_banner_description",label:"App Banner Description",type:"textarea"},{key:"app_banner_button_text",label:"App Banner Button Text",type:"text"},{key:"app_banner_secondary_text",label:"App Banner Secondary Text",type:"text"}]},{key:"bottom",title:"BOTTOM / END-OF-PAGE SECTION",desc:"The final professional closing area of the website â€” thank-you message, customer support, footer links and copyright. The polished design stays; only these words change.",accent:"from-emerald-400 to-cyan-500",fields:[{key:"bottom_heading",label:"Bottom Section Heading",type:"text"},{key:"bottom_main_message",label:"Main Bottom Message",type:"textarea"},{key:"bottom_closing_message",label:"Closing Message",type:"text"},{key:"bottom_support_heading",label:"Customer Support Heading",type:"text"},{key:"bottom_support_description",label:"Customer Support Description",type:"textarea"},{key:"bottom_support_button_text",label:"Support Button Text",type:"text"},{key:"bottom_footer_text",label:"Footer Section Text",type:"text"},{key:"bottom_footer_closing",label:"Footer Closing Message",type:"text"},{key:"bottom_copyright",label:"Copyright Text (empty = automatic â€œÂ© year Brandâ€ line)",type:"text"}]},{key:"promo_banner",title:"HOME PAGE PROMO BANNER",desc:"The main rotating banner at the top of the homepage. Upload your own image or video and write your own words â€” the clean design stays. If empty, the built-in image banners rotate.",accent:"from-fuchsia-400 to-purple-500",fields:[{key:"promo_banner_enabled",label:"Show my promo banner",type:"checkbox"},{key:"promo_banner_image",label:"Banner Image",type:"media",kind:"image"},{key:"promo_banner_video",label:"Banner Video (plays if no image)",type:"media",kind:"video"},{key:"promo_banner_title",label:"Banner Title",type:"text"},{key:"promo_banner_subtitle",label:"Banner Subtitle",type:"text"},{key:"promo_banner_button_text",label:"Button Text",type:"text"},{key:"promo_banner_button_link",label:"Button Link",type:"text"}]},{key:"video_ad",title:"HOME PAGE VIDEO ADVERTISEMENT",desc:"A separate video card below the promo banner. Upload your own video (and optional poster image) and write your own words. It plays muted with play/pause and a progress bar.",accent:"from-rose-400 to-orange-500",fields:[{key:"video_ad_enabled",label:"Show the video advertisement",type:"checkbox"},{key:"video_ad_video_url",label:"Video File",type:"media",kind:"video"},{key:"video_ad_poster_url",label:"Poster Image (shown before play)",type:"media",kind:"image"},{key:"video_ad_title",label:"Video Title",type:"text"},{key:"video_ad_subtitle",label:"Video Subtitle",type:"text"},{key:"video_ad_button_text",label:"Button Text",type:"text"},{key:"video_ad_button_link",label:"Button Link",type:"text"}]}];function Ka(e,t){const a=e.kind==="image",i=t||"",n=a?"image":"video",o="text-fuchsia-300",s=!!i;return`<div id="slot-${e.key}">
      ${s?`<div class="relative group w-full h-28 rounded-xl overflow-hidden bg-gray-900 border border-fuchsia-500/15 flex items-center justify-center">
             ${a?`<img src="${l(i)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`:`<video src="${l(i)}" class="w-full h-full object-cover" muted playsinline preload="metadata"></video>`}
             <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
               <button type="button" onclick="triggerContentMediaUpload('${e.key}')" class="text-xs font-bold text-white bg-fuchsia-600 px-3 py-1.5 rounded-lg">Replace</button>
               <button type="button" onclick="clearContentMedia('${e.key}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
             </div>
           </div>`:`<button type="button" onclick="triggerContentMediaUpload('${e.key}')" class="w-full h-28 rounded-xl border-2 border-dashed border-fuchsia-500/25 hover:border-fuchsia-500/50 flex flex-col items-center justify-center gap-1.5 transition">
             <i data-lucide="${n}" class="w-6 h-6 ${o}"></i>
             <p class="text-[10px] text-gray-500">Upload ${a?"Image":"Video"}</p>
           </button>`}
      <input type="file" id="file-${e.key}" class="hidden" accept="${a?"image/*":"video/*"}" onchange="handleContentMediaUpload(event,'${e.key}')">
      <input type="hidden" name="${e.key}" id="val-${e.key}" value="${l(i)}">
      <div class="flex gap-2 mt-1.5">
        <input class="input-field text-xs flex-1" id="url-${e.key}" value="${l(i)}" placeholder="Or paste ${a?"image":"video"} URL" oninput="document.getElementById('val-${e.key}').value=this.value">
      </div>
    </div>`}window.triggerContentMediaUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearContentMedia=function(e){const t=document.getElementById("val-"+e),a=document.getElementById("url-"+e);t&&(t.value=""),a&&(a.value=""),p("Cleared. Save to apply.","info"),Ja()};window.handleContentMediaUpload=async function(e,t){const a=e.target.files?.[0];if(a){a.type.startsWith("video/"),p(`Uploading ${a.name}â€¦`,"info");try{const{data:{session:i}}=await b.auth.getSession();if(!i){p("Sign in to upload media","error");return}const n=(a.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),o=`content/${t}-${Date.now()}.${n}`,{error:s}=await b.storage.from("product-images").upload(o,a,{contentType:a.type,upsert:!1});if(s){p("Upload failed: "+s.message,"error");return}const{data:r}=b.storage.from("product-images").getPublicUrl(o),u=r.publicUrl,d=document.getElementById("val-"+t),c=document.getElementById("url-"+t);d&&(d.value=u),c&&(c.value=u);const m=document.getElementById("slot-"+t);if(m){const f=Wt.flatMap(y=>y.fields||[]).find(y=>y.key===t);f&&(m.outerHTML=Ka(f,u))}p("âœ“ Uploaded â€” save to apply","success")}catch{p("Upload failed","error")}}};const Mn=["SHOP NOW","EXPLORE DEALS","VIEW PRODUCTS","DISCOVER MORE","SEE OFFERS","SHOP THE LOOK"];window._heroVideoDraft=[];function oe(){return Array.isArray(window._heroVideoDraft)||(window._heroVideoDraft=[]),window._heroVideoDraft}function Ue(){const e=document.getElementById("hs-json");e&&(e.value=JSON.stringify(oe()))}function we(){Ue();const e=document.getElementById("hero-videos-manager");e&&(e.innerHTML=Ya(oe()),window.lucide&&lucide.createIcons())}function Nn(e,t){const a=String(e&&e.video||"").trim(),i=String(e&&e.poster||"").trim(),n=a&&na(a)||i&&na(i)?'<p class="mt-2 text-[11px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-2">âš  Temporary preview only â€” the upload FAILED, this will NOT be saved. Re-upload a smaller MP4/WebM.</p>':"";return`
    <div>
      <div class="w-full overflow-hidden rounded-xl bg-gray-950 border border-indigo-500/20 flex items-center justify-center">${a?`<video src="${l(a)}" ${i?`poster="${l(i)}"`:""} class="w-full h-40 object-cover" muted controls preload="metadata"></video>`:i?`<img src="${l(i)}" class="w-full h-40 object-cover" onerror="this.style.display='none'">`:'<div class="w-full h-40 flex items-center justify-center text-[11px] text-gray-500">No media yet â€” upload a video (MP4/WebM) or a poster below</div>'}</div>
      ${n}
      <div class="flex flex-wrap gap-1.5 mt-2 justify-end">
        <button type="button" onclick="heroVideoUpload(${t},'video')" class="px-3 py-1.5 rounded-lg ${a?"bg-white/10 text-gray-200 border border-white/10":"bg-indigo-600 text-white"} text-[10px] font-bold transition">${a?"Replace Video":"Upload Video"}</button>
        ${a?`<button type="button" onclick="heroVideoRemoveMedia(${t},'video')" class="px-3 py-1.5 rounded-lg bg-red-600/80 text-white text-[10px] font-bold">Remove Video</button>`:""}
        <button type="button" onclick="heroVideoUpload(${t},'poster')" class="px-3 py-1.5 rounded-lg bg-white/10 text-gray-200 text-[10px] font-bold border border-white/10 transition">${i?"Replace Poster":"Add Poster"}</button>
        ${i?`<button type="button" onclick="heroVideoRemoveMedia(${t},'poster')" class="px-3 py-1.5 rounded-lg bg-red-600/80 text-white text-[10px] font-bold">Remove Poster</button>`:""}
      </div>
    </div>`}function Ya(e){return(e||[]).map((t,a)=>{const i=String(t&&t.buttonText||"SHOP NOW"),n=Mn.map(o=>`<button type="button" onclick="heroVideoPreset(${a},'${o}')" class="px-2.5 py-1 rounded-full text-[9px] font-black ${i===o?"bg-indigo-600 text-white":"bg-white/5 text-gray-400"} border ${i===o?"border-indigo-500":"border-white/10"} transition">${o}</button>`).join("");return`
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
      ${Nn(t,a)}
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
        <div class="flex flex-wrap gap-1.5">${n}</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          <input type="text" value="${l(i)}" class="input-field w-full" placeholder="SHOP NOW" oninput="heroVideoField(${a},'buttonText',this.value)">
          <input type="text" value="${l(t.buttonLink||"/#showroom-directory")}" class="input-field w-full" placeholder="/#showroom-directory" oninput="heroVideoField(${a},'buttonLink',this.value)">
        </div>
      </div>
    </div>`}).join("")}window.heroVideoUpload=function(e,t){const a=document.createElement("input");a.type="file",a.accept=t==="video"?"video/mp4,video/webm,.mp4,.webm":"image/*",a.onchange=()=>{const i=a.files&&a.files[0];i&&Fn(e,t,i)},a.click()};window.heroVideoField=function(e,t,a){const i=oe();i[e]&&(i[e][t]=a,Ue())};window.heroVideoPreset=function(e,t){const a=oe();a[e]&&(a[e].buttonText=t,we())};window.heroVideoToggle=function(e){const t=oe();t[e]&&(t[e].enabled=t[e].enabled===!1,we())};window.heroVideoMove=function(e,t){const a=oe(),i=e+t;i<0||i>=a.length||([a[e],a[i]]=[a[i],a[e]],we())};window.heroVideoDelete=function(e){const t=oe();e<0||e>=t.length||confirm("Delete this hero video slide?")&&(t.splice(e,1),we())};window.heroVideoRemoveMedia=function(e,t){const a=oe();a[e]&&(t==="video"?a[e].video="":t==="poster"&&(a[e].poster=""),we())};window.addHeroVideoSlide=function(){oe().push({id:"hv"+Date.now()+Math.floor(Math.random()*999),enabled:!0,video:"",poster:"",title:"",subtitle:"",buttonText:"SHOP NOW",buttonLink:"/#showroom-directory"}),we(),p("New slide added â€” upload a video and press Save to show it.","info")};async function Rn(e,t){try{const{data:{session:a}}=await b.auth.getSession();if(!a)return{url:URL.createObjectURL(e),persisted:!1,error:"You are signed out â€” sign in again, then re-upload."};const i=(e.name.split(".").pop()||(t==="video"?"mp4":"jpg")).toLowerCase().replace(/[^a-z0-9]/g,""),n=`hero/${t}/${Date.now()}-${Math.random().toString(36).slice(2)}.${i}`,{error:o}=await b.storage.from("product-images").upload(n,e,{contentType:e.type,cacheControl:"3600",upsert:!0});if(o)return{url:URL.createObjectURL(e),persisted:!1,error:o.message};const{data:s}=b.storage.from("product-images").getPublicUrl(n),r=s&&s.publicUrl;return r?{url:r,persisted:!0,error:null}:{url:URL.createObjectURL(e),persisted:!1,error:"Storage did not return a public URL."}}catch(a){return{url:URL.createObjectURL(e),persisted:!1,error:String(a&&a.message||a)}}}function na(e){return/^blob:/i.test(String(e||""))}async function Fn(e,t,a){const i=oe();if(!a||!i[e])return;if(t==="video"){if(!/video\/(mp4|webm)|\.(mp4|webm)$/i.test(a.type+" "+a.name)){p("Please choose an MP4 or WebM video file.","error");return}}else if(!a.type.startsWith("image/")){p("Please choose an image for the poster.","error");return}p("â³ Uploading "+(t==="video"?"video":"poster")+"â€¦","info");const n=await Rn(a,t);t==="video"?i[e].video=n.url:i[e].poster=n.url,we(),n.persisted?p("âœ“ "+(t==="video"?"Video":"Poster")+" uploaded â€” press Save & Publish Hero Banner to go live.","success"):p("âš  UPLOAD FAILED: "+(n.error||"unknown reason")+" â€” this preview is TEMPORARY and will NOT be saved. Try a smaller MP4/WebM (keep videos under ~50 MB), then re-upload.","error")}function Dn(e){const t=Array.isArray(e)?e.map(i=>({...i})):[];return window._heroVideoDraft=t,Ue(),`
    <div class="space-y-3">
      <div id="hero-videos-manager" class="space-y-3">${t.length?"":`
    <div class="rounded-xl border-2 border-dashed border-indigo-500/30 bg-white/5 p-6 text-center">
      <i data-lucide="video" class="w-8 h-8 text-indigo-400 mx-auto"></i>
      <p class="text-xs text-gray-400 mt-2 font-bold">No hero videos yet</p>
      <p class="text-[11px] text-gray-500 mt-1">Add your first promotional video slide to turn the homepage banner into an auto-playing video hero. Until then, the built-in brand banner and any single promo banner below are used.</p>
    </div>`}${Ya(t)}</div>
      <button type="button" onclick="heroVideoSavePublish(this)" class="btn-press w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-black rounded-xl transition flex items-center justify-center gap-2">
        <i data-lucide="rocket" class="w-4 h-4"></i> Save &amp; Publish Hero Banner
      </button>
      <p class="text-[10px] text-gray-500 text-center">One video is enough â€” no minimum. Your banner goes live as soon as you press this button.</p>
      <button type="button" onclick="addHeroVideoSlide()" class="btn-press w-full px-4 py-3 border-2 border-dashed border-indigo-500/40 text-indigo-300 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2">
        <i data-lucide="plus" class="w-4 h-4"></i> Add Another Hero Video Slide
      </button>
    </div>`}window.heroVideoSavePublish=async function(e){const t=u=>/^blob:/i.test(String(u||"")),a=oe().filter(u=>u&&(u.video||u.poster||u.title||u.subtitle));if(!a.length){p("Add at least one video slide before publishing.","error");return}a.forEach(u=>{u.poster&&t(u.poster)&&(u.poster="")});const i=a.filter(u=>u.video&&t(u.video)),n=a.filter(u=>u.video&&!t(u.video));if(i.length&&!n.length){p(`Upload FAILED for your video${i.length>1?"s":""} â€” temporary previews cannot go live. Re-upload a smaller MP4/WebM (under ~50 MB), then press this button again.`,"error");return}if(i.length&&!confirm(`${i.length} slide${i.length>1?"s":""} had a FAILED upload and will be LEFT OUT. Publish the remaining ${n.length} slide${n.length===1?"":"s"} now?`))return;const o=n,s=o.filter(u=>u.video);if(!o.length){p("Please upload a video in at least one slide first.","error");return}const r=e?e.innerHTML:"";e&&(e.disabled=!0,e.innerHTML="â³ Publishingâ€¦");try{Ue();const{data:u}=await b.from("site_settings").select("id").limit(1).maybeSingle();let d;if(u?.id?{error:d}=await b.from("site_settings").update({hero_video_slides:o}).eq("id",u.id):{error:d}=await b.from("site_settings").insert({id:1,hero_video_slides:o}),d)throw new Error(d.message);ra(),p("âœ“ Hero video banner published! "+s.length+(s.length===1?" video is":" videos are")+" now live on your homepage.","success")}catch(u){p(u.message||"Could not publish the hero banner. Please try again.","error")}finally{e&&(e.disabled=!1,e.innerHTML=r,window.lucide&&lucide.createIcons())}};async function Ja(){const e=document.getElementById("content");try{const{data:t}=await b.from("site_settings").select("*").limit(1).maybeSingle(),a={...ii,...t||{}};e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div>
          <h2 class="text-xl font-black text-white">Content Settings</h2>
          <p class="text-xs text-gray-400 mt-1">Edit the wording of the two shared sections below. Save once and every page updates automatically â€” no code needed. Your products, prices, reviews, orders and design are never touched.</p>
        </div>
        <form id="content-settings-form" onsubmit="saveContentSettings(event)" class="space-y-5">
          ${Wt.map(i=>`
            <div class="glass-soft border border-white/10 rounded-2xl p-5">
              <div class="flex items-center gap-2.5 mb-1">
                <span class="w-2 h-2 rounded-full bg-gradient-to-r ${i.accent}"></span>
                <h3 class="text-sm font-black text-white tracking-wide">${i.title}</h3>
              </div>
              <p class="text-[11px] text-gray-400 mb-4">${i.desc}</p>
              ${i.key==="hero_videos"?Dn(a.hero_video_slides||[]):`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${i.fields.map(n=>`
                  <div class="${n.type==="textarea"||n.type==="media"?"sm:col-span-2":""}">
                    ${n.type==="checkbox"?`<label class="flex items-center gap-2.5 cursor-pointer select-none py-2">
                           <input id="cs-${n.key}" type="checkbox" name="${n.key}" ${a[n.key]?"checked":""} class="w-4 h-4 accent-blue-500 rounded">
                           <span class="text-sm font-bold text-gray-200">${n.label}</span>
                         </label>`:`<label class="lbl" for="cs-${n.key}">${n.label}</label>`}
                    ${n.type==="textarea"?`<textarea id="cs-${n.key}" name="${n.key}" rows="3" class="input-field w-full" placeholder="Enter the current wordingâ€¦">${l(a[n.key]||"")}</textarea>`:n.type==="media"?Ka(n,a[n.key]||""):n.type==="checkbox"?"":`<input id="cs-${n.key}" type="text" name="${n.key}" value="${l(a[n.key]||"")}" class="input-field w-full" placeholder="Enter the current wordingâ€¦">`}
                    ${n.type==="text"||n.type==="textarea"?`<p class="text-[10px] text-gray-500 mt-1">Current: ${l((a[n.key]||"").slice(0,80))}${(a[n.key]||"").length>80?"â€¦":""}</p>`:""}
                  </div>`).join("")}
              </div>`}
            </div>`).join("")}
          <input type="hidden" id="hs-json" name="hero_video_slides" value="">
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Content</button>
        </form>
      </div>`,Ue(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.saveContentSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[n,o]of t.entries())a[n]=o;for(const n of Wt)if(n.fields)for(const o of n.fields)o.type==="checkbox"&&!(o.key in a)?a[o.key]=!1:o.type==="checkbox"&&(a[o.key]=!0);let i=[];try{const n=t.get("hero_video_slides");if(String(n||"").trim()){const o=JSON.parse(n);Array.isArray(o)&&(i=o)}}catch{i=[]}a.hero_video_slides=i;try{const{data:n}=await b.from("site_settings").select("id").limit(1).maybeSingle();let o;if(n?.id?{error:o}=await b.from("site_settings").update(a).eq("id",n.id):{error:o}=await b.from("site_settings").insert({id:1,...a}),o)throw new Error(o.message);ra(),p("Content updated â€” the banners now use your new words and uploads.","success")}catch(n){p(n.message||"Could not save content. Please try again.","error")}};async function Un(){const e=document.getElementById("content");try{const[t,a,i]=await Promise.all([b.from("payment_receipts").select("amount,currency,status,created_at").order("created_at",{ascending:!1}).limit(500),b.from("showroom_listings").select("id,listing_type,category,is_active",{count:"exact"}),b.from("profiles").select("user_id,created_at",{count:"exact"})]),n=t.data||[],o=n.filter(d=>["approved","payment_approved","delivered"].includes(d.status)).reduce((d,c)=>d+(parseFloat(c.amount)||0),0),s=n.length>0?(n.filter(d=>d.status!=="cancelled").length/n.length*100).toFixed(1):0,r={};(a.data||[]).forEach(d=>{r[d.category]=(r[d.category]||0)+1});const u=Object.entries(r).sort((d,c)=>c[1]-d[1]).slice(0,8);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Analytics</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          ${G("Total Revenue",`$${o.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald")}
          ${G("Total Orders",n.length,"shopping-bag","blue")}
          ${G("Customers",i.count||0,"users","violet")}
          ${G("Conversion Rate",s+"%","trending-up","amber")}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="bar-chart-3" class="w-4 h-4 text-blue-400"></i> Revenue (Last 6 Months)</h3>
            <canvas id="analytics-chart" height="220"></canvas>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="pie-chart" class="w-4 h-4 text-violet-400"></i> Top Categories by Listings</h3>
            ${u.length===0?'<p class="text-xs text-gray-500 text-center py-8">No data</p>':u.map(([d,c])=>`
              <div class="flex items-center gap-3 py-1.5">
                <span class="text-xs text-gray-300 flex-1 truncate">${l(d)}</span>
                <div class="w-24 h-2 bg-blue-500/10 rounded-full overflow-hidden"><div class="h-full bg-blue-500 rounded-full" style="width:${Math.round(c/u[0][1]*100)}%"></div></div>
                <span class="text-xs font-bold text-white w-6 text-right">${c}</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),La(n)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}async function On(){const e=document.getElementById("content"),{data:t}=await b.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">SEO Manager</h2>
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
    </div>`,window.lucide&&lucide.createIcons()}window.saveSeo=async function(e){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());await b.from("site_settings").upsert({id:1,...t}),p("SEO settings saved!")};async function jn(){const e=document.getElementById("content"),{data:t}=await b.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons()}window.saveEmailSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,n]of t.entries())a[i]=n;["email_order_placed","email_order_shipped","email_order_delivered","email_review_request"].forEach(i=>{i in a?a[i]=!0:a[i]=!1}),await b.from("site_settings").upsert({id:1,...a}),p("Email settings saved!")};async function lt(){const e=document.getElementById("content");e&&(e.innerHTML=Pe());try{const[t,a,i]=await Promise.all([b.from("admin_security_logs").select("*").order("created_at",{ascending:!1}).limit(50),b.from("admin_2fa").select("enabled,backup_codes,created_at").eq("user_id",I.user?.id).maybeSingle(),b.auth.mfa.listFactors()]),n=t.data||[],o=a.data||{},s=(i.data?.totp||[])[0],r=!!s&&s.status==="verified",u=(o.backup_codes||[]).filter(d=>!d.used).length;e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Security</h2>

        <!-- 2FA STATUS BANNER -->
        <div class="p-4 rounded-xl border flex items-center gap-4 ${r?"bg-emerald-500/5 border-emerald-500/20":"bg-amber-500/5 border-amber-500/20"}">
          <div class="w-10 h-10 ${r?"bg-emerald-500/10":"bg-amber-500/10"} rounded-xl flex items-center justify-center shrink-0">
            <i data-lucide="${r?"shield-check":"shield-alert"}" class="w-5 h-5 ${r?"text-emerald-400":"text-amber-400"}"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm font-black ${r?"text-emerald-300":"text-amber-300"}">Two-Factor Authentication is ${r?"ENABLED âœ“":"NOT ENABLED"}</p>
            <p class="text-xs text-gray-400 mt-0.5">${r?`Backup codes available: ${u} Â· Enrolled: ${ie(o.created_at)}`:"Enable 2FA to protect your admin account with an authenticator app."}</p>
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
            ${(o.backup_codes||[]).length===0?'<p class="text-xs text-gray-500 col-span-2 text-center py-4">No backup codes generated. Click Regenerate to create them.</p>':(o.backup_codes||[]).map(d=>`<code class="font-mono text-xs px-3 py-2 ${d.used?"bg-gray-900 text-gray-600 line-through":"bg-blue-500/5 text-blue-300 border border-blue-500/15"} rounded-lg">${typeof d=="object"?d.code:d}</code>`).join("")}
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
            <span class="text-xs text-gray-500">Last ${n.length} events</span>
          </div>
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Event</th><th>IP Address</th><th class="hidden sm:table-cell">Device</th><th>Date</th></tr></thead>
              <tbody>
                ${n.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No security events yet</td></tr>':n.map(d=>{const c=["login_success","login_2fa_success"].includes(d.event_type),m=["login_failed","login_denied","login_backup_code_used"].includes(d.event_type),f=c?"text-emerald-400":m?"text-red-400":"text-gray-300",y={login_success:"Login âœ“",login_failed:"Failed Login âœ—",login_denied:"Access Denied âœ—",login_2fa_success:"2FA Verified âœ“",login_backup_code_used:"Backup Code Used",logout:"Logged Out",logout_all_devices:"Logout All Devices"}[d.event_type]||d.event_type;return`<tr>
                      <td><span class="text-xs font-bold ${f}">${l(y)}</span></td>
                      <td><span class="text-xs font-mono text-gray-300">${l(d.ip_address||"â€”")}</span></td>
                      <td class="hidden sm:table-cell"><span class="text-xs text-gray-500 max-w-[160px] block truncate">${l((d.user_agent||"â€”").slice(0,50))}</span></td>
                      <td><span class="text-xs text-gray-500">${be(d.created_at)}</span></td>
                    </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,document.getElementById("new-pw")?.addEventListener("input",d=>{const c=d.target.value,m=[{label:"8+ characters",ok:c.length>=8},{label:"Uppercase letter",ok:/[A-Z]/.test(c)},{label:"Number",ok:/[0-9]/.test(c)},{label:"Special character",ok:/[^a-zA-Z0-9]/.test(c)}];document.getElementById("pw-strength").innerHTML=m.map(f=>`<div class="flex items-center gap-1.5 text-[10px] ${f.ok?"text-emerald-400":"text-gray-600"}">
          <i data-lucide="${f.ok?"check-circle":"circle"}" class="w-3 h-3"></i>${f.label}</div>`).join(""),window.lucide&&lucide.createIcons()}),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.changePassword=async function(e){e.preventDefault();const t=document.getElementById("current-pw").value,a=document.getElementById("new-pw").value,i=document.getElementById("confirm-pw").value;if(a!==i){p("Passwords do not match","error");return}if(a.length<8){p("Password must be at least 8 characters","error");return}const{error:n}=await b.auth.signInWithPassword({email:I.user.email,password:t});if(n){p("Current password is incorrect","error");return}const{error:o}=await b.auth.updateUser({password:a});if(o){p(o.message,"error");return}await le(I.user.id,"password_changed"),p("Password updated successfully!"),e.target.reset(),document.getElementById("pw-strength").innerHTML=""};window.setup2FAFlow=async function(){V(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="shield-plus" class="w-5 h-5 text-emerald-400"></i> Enable Two-Factor Authentication</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">ðŸ”™ Back</button>
        </div>
        <div id="2fa-setup-content">
          <div class="flex items-center justify-center py-8"><i data-lucide="loader-2" class="w-6 h-6 animate-spin text-blue-400"></i></div>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons();try{const{data:e,error:t}=await b.auth.mfa.enroll({factorType:"totp",friendlyName:"Weverse Admin"});if(t)throw t;const a=e.totp.qr_code,i=e.totp.secret,n=e.id;document.getElementById("2fa-setup-content").innerHTML=`
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
        <button onclick="confirm2FAEnrollment('${l(n)}')" class="btn-press w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2">
          <i data-lucide="shield-check" class="w-4 h-4"></i> Verify & Enable 2FA
        </button>
      </div>`,window.lucide&&lucide.createIcons(),setTimeout(()=>document.getElementById("setup-totp-code")?.focus(),100),document.getElementById("setup-totp-code")?.addEventListener("input",o=>{o.target.value=o.target.value.replace(/\D/g,"").slice(0,6)})}catch(e){document.getElementById("2fa-setup-content").innerHTML=`<div class="text-red-400 text-sm text-center py-4">${l(e.message)}</div>`}};window.confirm2FAEnrollment=async function(e){const t=document.getElementById("setup-totp-code")?.value?.trim(),a=document.getElementById("setup-2fa-error");if(!t||t.length!==6){a&&(a.textContent="Enter the 6-digit code.",a.classList.remove("hidden"));return}try{const{data:i,error:n}=await b.auth.mfa.challenge({factorId:e});if(n)throw n;const{error:o}=await b.auth.mfa.verify({factorId:e,challengeId:i.id,code:t});if(o)throw o;const s=Qa(10);await b.from("admin_2fa").upsert({user_id:I.user.id,enabled:!0,backup_codes:s}),await le(I.user.id,"2fa_enrolled"),ne(),Xa(s.map(r=>r.code)),lt()}catch(i){const n=document.getElementById("setup-2fa-error");n&&(n.textContent=i.message?.includes("Invalid")?"Wrong code. Check your app and try again.":i.message,n.classList.remove("hidden")),document.getElementById("setup-totp-code").value="",document.getElementById("setup-totp-code").focus()}};function Qa(e){const t=[];for(let a=0;a<e;a++){const i=Array.from({length:16},()=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random()*32)]).join("");t.push({code:`${i.slice(0,4)}-${i.slice(4,8)}-${i.slice(8,12)}-${i.slice(12,16)}`,used:!1})}return t}function Xa(e){V(`
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

Each code works once. Store securely.`],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download="kco-admin-backup-codes.txt",a.click()};window.regenerateBackupCodes=async function(){if(!confirm("This will invalidate ALL existing backup codes. Continue?"))return;const e=Qa(10);await b.from("admin_2fa").update({backup_codes:e}).eq("user_id",I.user.id),p("New backup codes generated"),Xa(e.map(t=>t.code)),lt()};window.disable2FA=async function(){if(confirm("Disable two-factor authentication? Your account will be less secure."))try{const{data:e}=await b.auth.mfa.listFactors(),t=(e?.totp||[])[0];if(t){const{error:a}=await b.auth.mfa.unenroll({factorId:t.id});if(a)throw a}await b.from("admin_2fa").update({enabled:!1}).eq("user_id",I.user.id),await le(I.user.id,"2fa_disabled"),p("2FA has been disabled"),lt()}catch(e){p(e.message,"error")}};async function qn(){const e=document.getElementById("content");try{const{data:t}=await b.from("admin_activity_logs").select("*").order("created_at",{ascending:!1}).limit(100);e.innerHTML=`
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
                    <td><span class="text-xs text-gray-500">${be(a.created_at)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}async function Hn(){const e=document.getElementById("content");try{const{data:t}=await b.from("deployment_history").select("*").order("created_at",{ascending:!1}).limit(20);e.innerHTML=`
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
                <div class="flex-1"><p class="text-xs font-bold text-white">${l(a.version||a.id?.slice(0,8))}</p><p class="text-[10px] text-gray-500">${be(a.created_at)}</p></div>
                ${Y(a.status||"completed")}
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.exportProducts=async function(){const{data:e}=await b.from("showroom_listings").select("*"),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download=`kco-products-${new Date().toISOString().slice(0,10)}.json`,a.click(),p("Products exported!")};window.exportOrders=async function(){const{data:e}=await b.from("payment_receipts").select("*").order("created_at",{ascending:!1});if(!e||!e.length){p("No orders to export","info");return}const t=Object.keys(e[0]).join(","),a=e.map(o=>Object.values(o).map(s=>`"${String(s||"").replace(/"/g,'""')}"`).join(",")).join(`
`),i=new Blob([t+`
`+a],{type:"text/csv"}),n=document.createElement("a");n.href=URL.createObjectURL(i),n.download=`kco-orders-${new Date().toISOString().slice(0,10)}.csv`,n.click(),p("Orders exported!")};async function Gn(){const e=document.getElementById("content"),{data:t}=await b.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons()}window.saveSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,n]of t.entries())a[i]=n;["maintenance_mode","reviews_enabled","wishlist_enabled","guest_checkout"].forEach(i=>{a[i]=i in a}),await b.from("site_settings").upsert({id:1,...a}),p("Settings saved!")};async function dt(){const e=document.getElementById("content");e&&(e.innerHTML=Pe());try{const{data:t}=await b.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{},i=a.homepage_banner_image||"",n=a.homepage_banner_alt||"Homepage header banner",o=i?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.";e.innerHTML=`
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
                ${i?`<img id="homepage-banner-preview-img" src="${l(i)}" alt="${l(n)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-off" class="mx-auto w-8 h-8 text-gray-500"></i><p class="mt-2 text-xs font-semibold text-gray-500">No banner selected</p></div></div>'}
              </div>
            </div>
            <div class="px-4 py-3 border-t border-white/5 bg-[#0b1020] flex items-center gap-2 text-[11px] text-gray-400">
              <i data-lucide="crop" class="w-3.5 h-3.5 text-blue-400"></i>
              <span>Crop / resize is previewed in a fixed banner frame. Wide images work best.</span>
            </div>
          </div>
          <p id="homepage-banner-preview-note" class="text-[10px] text-gray-500">${l(o)}</p>
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
                      ${i?`<img id="homepage-banner-image" src="${l(i)}" alt="${l(n)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-plus" class="mx-auto w-8 h-8 text-blue-400"></i><p class="mt-2 text-xs font-semibold text-gray-400">Upload a homepage banner</p></div></div>'}
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
                  <textarea class="input-field" id="homepage_banner_alt" name="homepage_banner_alt" rows="4" placeholder="Accessible description for the banner image">${l(n)}</textarea>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}async function ct(){const e=document.getElementById("content");e&&(e.innerHTML=Pe());try{let t=function(r,u,d,c="",m="blue"){const f=!!(d&&d.trim());return`
        <div class="glass-soft border border-${m}-500/15 rounded-xl p-4 space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-xs font-black text-white">${l(r)}</p>
            ${f?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">âœ“ Uploaded</span>':'<span class="text-[9px] text-gray-600">Empty</span>'}
          </div>
          ${f?`<div class="relative group w-full h-24 rounded-xl overflow-hidden bg-gray-900 border border-blue-500/10 flex items-center justify-center">
                <img src="${l(d)}" alt="${l(r)}" class="max-h-20 max-w-full object-contain p-2" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-600 text-center&quot;>Image broken</p>'">
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                  <button type="button" onclick="triggerImgUpload('${u}')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">Replace</button>
                  <button type="button" onclick="clearBrandImg('${u}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
                </div>
               </div>`:`<div class="w-full h-24 rounded-xl border-2 border-dashed border-${m}-500/25 hover:border-${m}-500/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition" onclick="triggerImgUpload('${u}')">
                <i data-lucide="image-plus" class="w-7 h-7 text-${m}-400"></i>
                <p class="text-[11px] text-gray-500">Click to upload</p>
               </div>`}
          ${c?`<p class="text-[10px] text-gray-500">${l(c)}</p>`:""}
          <input type="file" id="file-${u}" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'${u}')">
          <input type="hidden" name="${u}" id="val-${u}" value="${l(d||"")}">
          <div class="flex gap-2">
            <input class="input-field text-xs flex-1 ${f?"":"hidden"}" id="url-${u}" value="${l(d||"")}" placeholder="Or paste image URL" oninput="document.getElementById('val-${u}').value=this.value;updateLivePreview()">
            <button type="button" onclick="document.getElementById('url-${u}').classList.toggle('hidden')" class="text-[10px] text-${m}-400 hover:text-${m}-300 transition shrink-0">${f?"Edit URL":"Paste URL"}</button>
          </div>
        </div>`};const{data:a}=await b.from("site_settings").select("*").limit(1).maybeSingle(),i=a||{},n=i.brand_name||i.site_name||ha,o=i.brand_slogan||i.site_tagline||va,s=i.brand_logo||i.brand_header_logo||"";e.innerHTML=`
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
                ${s?`<img src="${l(s)}" alt="${l(n)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
              </div>
              <div>
                <p id="preview-name" class="text-sm font-black text-white leading-none">${l(n)}</p>
                <p id="preview-slogan" class="text-[10px] text-blue-400 font-semibold mt-0.5">${l(o)}</p>
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
              ${s?`<img src="${l(s)}" alt="${l(n)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
            </div>
            <div>
              <p id="preview-footer-name" class="text-xs font-black text-white">${l(n)}</p>
              <p id="preview-footer-slogan" class="text-[10px] text-gray-500">${l(o)}</p>
            </div>
            <p class="ml-auto text-[10px] text-gray-600">Â© 2026 <span id="preview-copy-name">${l(n)}</span></p>
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
                <input class="input-field" name="brand_name" id="inp-brand-name" value="${l(n)}" placeholder="Your brand name" required oninput="updateLivePreview()">
              </div>
              <div>
                <label class="lbl">Short Name</label>
                <input class="input-field" name="brand_short_name" value="${l(i.brand_short_name||"")}" placeholder="e.g. Weverse">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Slogan / Tagline *</label>
                <input class="input-field" name="brand_slogan" id="inp-brand-slogan" value="${l(o)}" placeholder="e.g. Global Shopping â€¢ Worldwide Delivery" oninput="updateLivePreview()">
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
                  ${["Inter","Poppins","Roboto","Montserrat","Nunito","Raleway","Lato","Open Sans","Outfit","Plus Jakarta Sans","DM Sans","Urbanist","Sora","Manrope","Work Sans","Space Grotesk"].map(r=>`<option value="${r}" ${(i.brand_font||"Inter")===r?"selected":""}>${r}</option>`).join("")}
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
              ${t("Brand Logo / Banner Image","brand_logo",s,"Upload your image here. This changes only the logo/banner image and keeps the other brand fields as they are.")}
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.toggleLivePreview=function(){document.getElementById("live-preview-panel")?.classList.toggle("hidden"),updateLivePreview()};window.updateLivePreview=function(){const e=document.getElementById("live-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("inp-brand-name")?.value||ha,a=document.getElementById("inp-brand-slogan")?.value||va,i=document.getElementById("ct-primary")?.value||"#f97316",n=document.getElementById("ct-secondary")?.value||"#3b82f6",o=document.getElementById("ct-tag1")?.value||"#22d3ee",s=document.getElementById("ct-tag2")?.value||"#a3e635",r=document.getElementById("val-brand_logo")?.value||DEFAULT_BRAND_LOGO,u=document.getElementById("val-brand_badge")?.value||"";["preview-name","preview-footer-name","preview-copy-name"].forEach(g=>{const v=document.getElementById(g);v&&(v.textContent=t)}),["preview-slogan","preview-footer-slogan"].forEach(g=>{const v=document.getElementById(g);v&&(v.textContent=a)});const d=document.getElementById("preview-slogan");if(d&&a){const g=a,v=g.indexOf(","),k=v>-1?g.slice(0,v+1):g,_=v>-1?g.slice(v+1):"";d.innerHTML=`<span style="color:${o};font-weight:800">${l(k)}</span><span style="color:${s};font-weight:700">${l(_)}</span>`}const c=document.getElementById("preview-btn");c&&(c.style.background=i);const m=e.querySelector('[style*="color:"]');m&&(m.style.color=n),["preview-logo-wrap","preview-footer-logo-wrap"].forEach(g=>{const v=document.getElementById(g);v&&(r?(v.innerHTML=`<img src="${r}" alt="${t}" class="w-full h-full object-contain p-1">`,v.style.background="transparent"):(v.innerHTML='<i data-lucide="globe" class="w-4 h-4 text-white"></i>',v.style.background=i,window.lucide&&lucide.createIcons()))});const f=document.getElementById("preview-badge-wrap"),y=document.getElementById("preview-badge");f&&y&&(u?(y.src=u,f.classList.remove("hidden")):f.classList.add("hidden"))};window.triggerImgUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearBrandImg=function(e){document.getElementById("val-"+e).value="";const t=document.getElementById("url-"+e);t&&(t.value=""),(e&&e.startsWith("homepage_")?dt:ct)()};window.clearHomepageBannerImg=function(){const e=document.getElementById("val-homepage_banner_image"),t=document.getElementById("url-homepage_banner_image"),a=document.getElementById("homepage_banner_alt");e&&(e.value=""),t&&(t.value=""),a&&(a.value=""),dt()};window.restoreHomepageBannerDefault=function(){window.clearHomepageBannerImg()};window.syncColor=function(e,t){const a=document.getElementById("color-"+e);a&&/^#[0-9a-fA-F]{6}$/.test(t)&&(a.value=t)};window.previewFont=function(e){const t=document.getElementById("font-sample");t&&(t.style.fontFamily=`'${e}', sans-serif`);const a="gf-preview";let i=document.getElementById(a);i||(i=document.createElement("link"),i.id=a,i.rel="stylesheet",document.head.appendChild(i)),i.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(e)}:wght@400;700;900&display=swap`};const Pt="weverse_brand_v1",At="weverse_brand_override_v1";function It(){try{const e=JSON.parse(localStorage.getItem(At)||"null");if(e&&typeof e=="object")return e}catch{}try{const e=JSON.parse(localStorage.getItem(Pt)||"null");if(e&&typeof e=="object")return e.data&&typeof e.data=="object"?e.data:e}catch{}return{}}function Ye(e){const t={...It(),...e};try{localStorage.setItem(At,JSON.stringify(t))}catch{}try{localStorage.setItem(Pt,JSON.stringify({ts:Date.now(),data:t}))}catch{}return window.dispatchEvent(new StorageEvent("storage",{key:At})),window.dispatchEvent(new StorageEvent("storage",{key:Pt})),window.dispatchEvent(new CustomEvent("brand-updated",{detail:t})),t}window.handleBrandImgUpload=async function(e,t){const a=e.target.files?.[0];if(!a)return;const i=t&&t.startsWith("homepage_"),n=document.getElementById(i?"homepage-banner-status":"brand-upload-status"),o=document.getElementById(i?"homepage-banner-msg":"brand-upload-msg");n&&n.classList.remove("hidden"),o&&(o.textContent=`Uploading ${a.name}â€¦`);try{const s=a.name.split(".").pop(),r=`brand/${t}-${Date.now()}.${s}`,{error:u}=await b.storage.from("product-images").upload(r,a,{contentType:a.type,upsert:!0});let d;if(u)d=URL.createObjectURL(a),o&&(o.textContent=`Preview only (storage: ${u.message})`);else{const{data:f}=b.storage.from("product-images").getPublicUrl(r);d=f.publicUrl,o&&(o.textContent=`âœ“ ${a.name} uploaded`)}const c=document.getElementById("val-"+t),m=document.getElementById("url-"+t);c&&(c.value=d),m&&(m.value=d,m.classList.remove("hidden")),i?updateHomepageBannerPreview():(updateLivePreview(),setTimeout(()=>ct(),1e3))}catch(s){o&&(o.textContent=`Upload failed: ${s.message}`)}setTimeout(()=>n?.classList.add("hidden"),4e3)};window.saveBrandSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[r,u]of t.entries())r.endsWith("_url")||(a[r]=u);a.brand_name&&(a.site_name=a.brand_name),a.brand_slogan&&(a.site_tagline=a.brand_slogan),a.brand_description&&(a.site_description=a.brand_description),a.brand_email&&(a.contact_email=a.brand_email),a.brand_phone&&(a.contact_phone=a.brand_phone),a.brand_address&&(a.contact_address=a.brand_address),a.brand_website_url&&(a.production_url=a.brand_website_url);const i=a.brand_custom_font||a.brand_font;i&&previewFont(i);const n=e.target.querySelector("[type=submit]");n&&(n.disabled=!0,n.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Savingâ€¦',window.lucide&&lucide.createIcons());const{data:o}=await b.from("site_settings").select("id").limit(1).maybeSingle();let s;o?.id?{error:s}=await b.from("site_settings").update(a).eq("id",o.id):{error:s}=await b.from("site_settings").insert(a),s?(Ye(a),p("Brand saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(Ye(a),p("âœ… Brand saved! All pages will now show your updated brand.","success")),setTimeout(()=>ct(),500)};window.toggleHomepageBannerPreview=function(){document.getElementById("homepage-banner-preview-panel")?.classList.toggle("hidden"),updateHomepageBannerPreview()};window.updateHomepageBannerPreview=function(){const e=document.getElementById("homepage-banner-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("val-homepage_banner_image")?.value||"",a=document.getElementById("homepage_banner_alt")?.value||"Homepage header banner",i=document.getElementById("homepage-banner-image"),n=document.getElementById("homepage-banner-preview-img");[i,n].forEach(s=>{s&&(t?(s.src=t,s.alt=a,s.classList.remove("hidden")):s.classList.add("hidden"))});const o=document.getElementById("homepage-banner-preview-note");o&&(o.textContent=t?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.")};window.saveHomepageBranding=async function(e){e.preventDefault();const t={homepage_banner_image:document.getElementById("url-homepage_banner_image")?.value||"",homepage_banner_alt:document.getElementById("homepage_banner_alt")?.value||"Homepage header banner"},a=e.target.querySelector("[type=submit]");a&&(a.disabled=!0,a.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishingâ€¦',window.lucide&&lucide.createIcons());const{data:i}=await b.from("site_settings").select("id").limit(1).maybeSingle();let n;i?.id?{error:n}=await b.from("site_settings").update(t).eq("id",i.id):{error:n}=await b.from("site_settings").insert(t),n?(Ye({...It(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),p("Homepage banner saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(Ye({...It(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),p("Homepage banner published.","success")),setTimeout(()=>dt(),500)};const Je=[{key:"trust_promo",label:"Promotional Hero (Trust & Info Area)",icon:"sparkles",desc:"The family-receives-orders section above the app banner. Show it as-is for the built-in design, or upload the real photo/video."},{key:"app_banner",label:"Weverse Mobile App Banner",icon:"smartphone",desc:"The dark app banner at the very bottom of every page."},{key:"reviews",label:"Customer Reviews & Trust",icon:"star",desc:"The customer reviews strip just below the accordions."}];async function Ne(e){const t=document.getElementById("content");t&&(t.innerHTML=Pe());try{let a=e?{...e}:null;if(!a){const{data:i}=await b.from("site_settings").select("*").limit(1).maybeSingle(),n=i||{};a={};for(const o of Je)a[o.key+"_bg_image"]=n[o.key+"_bg_image"]||"",a[o.key+"_bg_video"]=n[o.key+"_bg_video"]||""}t.innerHTML=`
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white flex items-center gap-2"><i data-lucide="image" class="w-5 h-5 text-blue-400"></i> Promo & Backgrounds</h2>
        <p class="text-xs text-gray-500 max-w-2xl leading-relaxed">Choose an <b class="text-gray-300">image</b> and/or a <b class="text-gray-300">video</b> for each promotional section. When a video is set it plays automatically and the image acts as its poster. Leave a slot empty to keep that section’s built-in design. Changes appear instantly on every page after publishing.</p>

        <div id="promo-bg-status" class="hidden p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300 flex items-center gap-2">
          <i data-lucide="loader-2" class="w-4 h-4 animate-spin shrink-0"></i>
          <span id="promo-bg-msg">Uploadingâ€¦</span>
        </div>

        <form id="promo-bg-form" onsubmit="savePromoBackgrounds(event)" class="space-y-5">
          ${Je.map(i=>Vn(i,a)).join("")}

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 flex items-center gap-3">
            <i data-lucide="info" class="w-5 h-5 text-emerald-400 shrink-0"></i>
            <p class="text-[11px] text-gray-400 leading-relaxed">Published backgrounds are cached on visitor devices for up to a minute. Publishing clears the cache so everyone sees your new media immediately.</p>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">
            <i data-lucide="rocket" class="w-4 h-4 inline mr-2"></i>Publish Promo & Backgrounds
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(a){t&&(t.innerHTML=`<div class="p-6 text-red-400">${l(a.message)}</div>`)}}function Vn(e,t){const a=e.key+"_bg_image",i=e.key+"_bg_video",n=t[a]||"",o=t[i]||"",s=!!(n&&n.trim()),r=!!(o&&o.trim());return`
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
          ${s?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">âœ“ Image</span>':""}
          ${r?'<span class="text-[9px] font-bold text-violet-500 bg-violet-500/10 px-1.5 py-0.5 rounded-full">âœ“ Video</span>':""}
          ${s||r?"":'<span class="text-[9px] text-gray-600">Built-in design</span>'}
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${oa(e,a,n,s,"image")}
        ${oa(e,i,o,r,"video")}
      </div>
    </div>`}function oa(e,t,a,i,n){const o=n==="image",s=o?"blue":"violet",r=o?"image-plus":"video",u=o?"text-blue-400":"text-violet-400";return`
    <div>
      <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5"><i data-lucide="${r}" class="w-3 h-3 ${u}"></i>${n}</p>
      ${i?`<div class="relative group w-full h-28 rounded-xl overflow-hidden bg-gray-900 border border-${s}-500/15 flex items-center justify-center">
             ${o?`<img src="${l(a)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`:`<video src="${l(a)}" class="w-full h-full object-cover" muted playsinline preload="metadata"></video>`}
             <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
               <button type="button" onclick="triggerPromoBgUpload('${t}')" class="text-xs font-bold text-white bg-${s}-600 px-3 py-1.5 rounded-lg">Replace</button>
               <button type="button" onclick="clearPromoBg('${t}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
             </div>
           </div>`:`<button type="button" onclick="triggerPromoBgUpload('${t}')" class="w-full h-28 rounded-xl border-2 border-dashed border-${s}-500/25 hover:border-${s}-500/50 flex flex-col items-center justify-center gap-1.5 transition">
             <i data-lucide="${r}" class="w-6 h-6 ${u}"></i>
             <p class="text-[10px] text-gray-500">Upload ${n}</p>
           </button>`}
      <input type="file" id="file-${t}" class="hidden" accept="${o?"image/*":"video/*"}" onchange="handlePromoBgUpload(event,'${t}')">
      <input type="hidden" name="${t}" id="val-${t}" value="${l(a)}">
      <div class="flex gap-2 mt-1.5">
        <input class="input-field text-xs flex-1" id="url-${t}" value="${l(a)}" placeholder="Or paste ${n} URL" oninput="document.getElementById('val-${t}').value=this.value">
        <button type="button" onclick="document.getElementById('url-${t}').classList.toggle('hidden')" class="text-[10px] text-${s}-400 hover:text-${s}-300 transition shrink-0">Edit URL</button>
      </div>
    </div>`}window.triggerPromoBgUpload=function(e){document.getElementById("file-"+e)?.click()};function Za(){const e={};for(const t of Je)e[t.key+"_bg_image"]=document.getElementById("val-"+t.key+"_bg_image")?.value||"",e[t.key+"_bg_video"]=document.getElementById("val-"+t.key+"_bg_video")?.value||"";return e}window.clearPromoBg=function(e){const t=Za();t[e]="";const a=document.getElementById("val-"+e),i=document.getElementById("url-"+e);a&&(a.value=""),i&&(i.value=""),Ne(t),p("Cleared. Publish to apply.","info")};window.handlePromoBgUpload=async function(e,t){const a=e.target.files?.[0];if(!a)return;const i=document.getElementById("promo-bg-status"),n=document.getElementById("promo-bg-msg");i&&i.classList.remove("hidden"),n&&(n.textContent=`Uploading ${a.name}â€¦`);try{const o=(a.name.split(".").pop()||"bin").toLowerCase(),s=`promo/${t}-${Date.now()}.${o}`,{error:r}=await b.storage.from("product-images").upload(s,a,{contentType:a.type,upsert:!0});let u;if(r)u=URL.createObjectURL(a),n&&(n.textContent=`Preview only (storage: ${r.message})`);else{const{data:f}=b.storage.from("product-images").getPublicUrl(s);u=f.publicUrl,n&&(n.textContent=`âœ“ ${a.name} uploaded`)}const d=document.getElementById("val-"+t),c=document.getElementById("url-"+t);d&&(d.value=u),c&&(c.value=u,c.classList.remove("hidden"));const m=Za();Ne(m)}catch(o){n&&(n.textContent=`Upload failed: ${o.message}`)}setTimeout(()=>i?.classList.add("hidden"),4e3)};window.savePromoBackgrounds=async function(e){e.preventDefault();const t={};for(const o of Je)t[o.key+"_bg_image"]=document.getElementById("val-"+o.key+"_bg_image")?.value||"",t[o.key+"_bg_video"]=document.getElementById("val-"+o.key+"_bg_video")?.value||"";const a=e.target.querySelector("[type=submit]");a&&(a.disabled=!0,a.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishingâ€¦',window.lucide&&lucide.createIcons());const{data:i}=await b.from("site_settings").select("id").limit(1).maybeSingle();let n;i?.id?{error:n}=await b.from("site_settings").update(t).eq("id",i.id):{error:n}=await b.from("site_settings").insert(t),gi(),n?(p("Publish failed â€” the settings table rejected the update. Make sure the new promo-background columns are migrated, then try again.","error"),Ne(t)):(p("Promo & backgrounds published across all pages.","success"),setTimeout(()=>Ne(),500))};window._manualPaymentAccounts=[];function Kt(e="USD"){return{id:`bank-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,currency:e,currencyName:e,flag:la("US"),country:"United States",country_code:"US",bankName:"",transferType:"Local & International",beneficiary:"",accountNumber:"",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:""}}function Yt(){const e=document.getElementById("manual-payment-accounts-json");e&&(e.value=JSON.stringify(window._manualPaymentAccounts||[]))}function zn(e,t){const a=e.country_code||"US";return`
    <div class="p-4 glass-soft border border-blue-500/10 rounded-xl space-y-3">
      <div class="flex items-center justify-between gap-3">
        <h4 class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="building-2" class="w-3.5 h-3.5 text-blue-400"></i> Bank Account ${t+1}</h4>
        <button type="button" onclick="removeManualPaymentAccount(${t})" class="text-[11px] font-bold text-red-400 hover:text-red-300 transition">Remove</button>
      </div>
      <div class="form-grid form-grid-2">
        <div><label class="lbl">Currency *</label><select class="input-field" onchange="updateManualPaymentAccount(${t}, 'currency', this.value)">${xa.map(i=>`<option value="${i}" ${e.currency===i?"selected":""}>${i}</option>`).join("")}</select></div>
        <div><label class="lbl">Country *</label><select class="input-field" onchange="updateManualPaymentCountry(${t}, this.value)">${Ma(a)}</select></div>
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
    </div>`}window.renderManualPaymentAccountsEditor=function(){const e=document.getElementById("manual-accounts-editor");e&&(window._manualPaymentAccounts?.length||(window._manualPaymentAccounts=[Kt()]),e.innerHTML=`
    <div class="space-y-4">
      ${window._manualPaymentAccounts.map((t,a)=>zn(t,a)).join("")}
      <button type="button" onclick="addManualPaymentAccount()" class="btn-press w-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wide transition flex items-center justify-center gap-2">
        <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Another Bank Account
      </button>
    </div>`,Yt(),window.lucide&&lucide.createIcons())};window.addManualPaymentAccount=function(){window._manualPaymentAccounts.push(Kt()),renderManualPaymentAccountsEditor()};window.removeManualPaymentAccount=function(e){window._manualPaymentAccounts.splice(e,1),window._manualPaymentAccounts.length||(window._manualPaymentAccounts=[Kt()]),renderManualPaymentAccountsEditor()};window.updateManualPaymentAccount=function(e,t,a){const i=window._manualPaymentAccounts[e];i&&(i[t]=a,t==="currency"&&(i.currencyName=a),Yt())};window.updateManualPaymentCountry=function(e,t){const a=window._manualPaymentAccounts[e];if(!a)return;const i=Ee.find(n=>n.code===t);a.country_code=t,a.country=i?.name||"",a.flag=i?.flag||la(t),Yt(),renderManualPaymentAccountsEditor()};async function Ct(){const e=document.getElementById("content");e&&(e.innerHTML=Pe());try{const{data:t}=await b.from("site_settings").select("*").limit(1).maybeSingle(),i={...ci()||{},...t||{}};window._manualPaymentAccounts=ui(i).map(n=>({...n})),e.innerHTML=`
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
                <textarea class="input-field" name="manual_payment_instructions" rows="4" placeholder="Explain how customers should pay and upload their receipt.">${l(pi(i))}</textarea>
              </div>
              <div>
                <label class="lbl">ATM Transfer Instructions (optional, shown separately)</label>
                <textarea class="input-field" name="atm_transfer_instructions" rows="3" placeholder="Optional ATM-specific instructions.">${l(i.atm_transfer_instructions||"")}</textarea>
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
                <div><label class="lbl">Accepted Currency</label><select class="input-field" name="flutterwave_currency">${["NGN","USD","GBP","EUR","GHS","KES","ZAR","ZMW","TZS","UGX","XAF","XOF"].map(n=>`<option value="${n}" ${(i.flutterwave_currency||"NGN")===n?"selected":""}>${n}</option>`).join("")}</select></div>
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
              ${[{id:"manual",label:"Manual / Bank Transfer",icon:"landmark",color:"blue"},{id:"flutterwave",label:"Flutterwave",icon:"zap",color:"amber"},{id:"both",label:"Both (customer chooses)",icon:"layers",color:"emerald"}].map(n=>`<label class="flex items-center gap-3 p-3 glass-soft border ${(i.payment_gateway||"manual")===n.id?"border-blue-500/40 bg-blue-500/5":"border-blue-500/10"} rounded-xl cursor-pointer hover:border-blue-500/30 transition"><input type="radio" name="payment_gateway" value="${n.id}" ${(i.payment_gateway||"manual")===n.id?"checked":""} class="accent-blue-500"><div><i data-lucide="${n.icon}" class="w-4 h-4 text-${n.color}-400 mb-0.5"></i><p class="text-xs font-bold text-white">${n.label}</p></div></label>`).join("")}
            </div>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2"><i data-lucide="save" class="w-4 h-4"></i> Save Payment Settings</button>
        </form>
      </div>`,renderManualPaymentAccountsEditor(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.savePaymentSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=["flutterwave_public_key","flutterwave_secret_key","flutterwave_encryption_key","flutterwave_webhook_secret"],n={};for(const[c,m]of Object.entries(a))i.includes(c)?m&&!m.startsWith("â€¢â€¢â€¢â€¢")&&m.trim()!==""&&(n[c]=m.trim()):n[c]=m;n.manual_payment_enabled=a.manual_payment_enabled==="on",n.flutterwave_enabled=a.flutterwave_enabled==="on";let o=[];try{o=JSON.parse(a.manual_payment_accounts_json||"[]")}catch{}n.manual_payment_accounts=o;const s=o[0]||{},r=o[1]||{};n.bank1_account_name=s.beneficiary||"",n.bank1_account_number=s.accountNumber||"",n.bank1_bank_name=s.bankName||"",n.bank1_transfer_type=s.transferType||"",n.bank1_sort_code=s.sortCode||s.routing||"",n.bank1_currency=s.currency||"USD",n.bank2_account_name=r.beneficiary||"",n.bank2_account_number=r.accountNumber||"",n.bank2_bank_name=r.bankName||"",n.bank2_transfer_type=r.transferType||"",n.bank2_sort_code=r.sortCode||r.routing||"",n.bank2_currency=r.currency||"USD",di(n);const{data:u}=await b.from("site_settings").select("id").limit(1).maybeSingle();let d;if(u?.id?{error:d}=await b.from("site_settings").update(n).eq("id",u.id):{error:d}=await b.from("site_settings").insert(n),d){const c=String(d.message||"");if(/manual_payment_accounts|column|schema cache/i.test(c)){p("Payment settings saved locally. Run the latest migration to persist them to Supabase.","info"),console.warn(d),setTimeout(()=>Ct(),500);return}p("Save failed: "+d.message,"error"),console.error(d);return}p("âœ… Payment settings saved successfully!","success"),setTimeout(()=>Ct(),500)};window.testFlutterwaveKeys=async function(){const{data:e}=await b.from("site_settings").select("flutterwave_public_key").limit(1).maybeSingle();if(!e?.flutterwave_public_key){p("Save your Flutterwave public key first","info");return}p("Flutterwave key is saved. Use test mode + test card to verify a payment flow.","info")};async function ut(){const e=document.getElementById("content");try{const{data:t}=await b.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.saveDeploySettings=async function(e){e.preventDefault();const t=e.target?.querySelector("[type=submit]");t&&(t.disabled=!0,t.innerHTML="Savingâ€¦");const a=new FormData(e.target),i=Object.fromEntries(a.entries()),n={},o=["github_token","payment_public_key","payment_secret_key","payment_webhook_secret"];for(const[r,u]of Object.entries(i))o.includes(r)?u&&!u.startsWith("â€¢")&&u.trim()!==""&&(n[r]=u.trim()):n[r]=u;const{error:s}=await b.from("site_settings").upsert({id:1,...n});if(t&&(t.disabled=!1,t.innerHTML="ðŸ’¾ Save Deploy & Payment Settings"),s){p(s.message,"error");return}p("Deploy & payment settings saved!"),ut()};async function ei(e="deploy"){const{data:t}=await b.from("site_settings").select("deploy_webhook,production_url,github_repo").limit(1).maybeSingle();if(!t?.deploy_webhook)return p("No webhook URL set. Add your deploy webhook in the settings below.","info"),{ok:!1,reason:"missing_webhook"};let a=t.deploy_webhook;try{const i=new URL(a);e==="rebuild"&&i.searchParams.set("rebuild","1"),a=i.toString()}catch{e==="rebuild"&&(a+=(a.includes("?")?"&":"?")+"rebuild=1")}return{ok:!0,settings:t,hookUrl:a}}async function ue(e,t={}){const a=t.version||new Date().toISOString(),i={source:"admin-dashboard",mode:t.mode||"deploy",production_url:t.productionUrl||null,github_repo:t.githubRepo||null,webhook:t.webhook||null,message:t.message||null},{data:n,error:o}=await b.from("deployment_history").insert({version:a,status:e,triggered_by_email:I.user?.email||null,metadata:i,error_message:t.errorMessage||null}).select("id").limit(1).maybeSingle();return{data:n,error:o}}function $e(e,t,a,i){if(!e)return;e.disabled=t;const n=e.querySelector("p.text-xs.font-black");n&&(n.textContent=t?a:i)}window.triggerDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-deploy-btn]");$e(t,!0,"Deployingâ€¦","Deploy Now");try{const a=await ei("deploy");if(!a.ok)return;const{settings:i,hookUrl:n}=a;await ue("preparing",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,message:"Deployment queued from admin UI"});const o=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"deploy",source:"admin-dashboard",at:new Date().toISOString()})});if(o.ok)p("ðŸš€ Deployment triggered! Your site will be live in ~2 minutes."),await ue("deploying",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,message:"Webhook accepted deployment request"}),setTimeout(()=>ut(),400);else{const s=`Webhook returned error: ${o.status}`;p(s,"error"),await ue("failed",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,errorMessage:s})}}catch(a){p("Deploy failed: "+a.message,"error"),await ue("failed",{mode:"deploy",errorMessage:a.message})}finally{$e(t,!1,"Deployingâ€¦","Deploy Now")}};window.triggerRebuild=async function(e){const t=e?.currentTarget||document.querySelector("[data-rebuild-btn]");$e(t,!0,"Rebuildingâ€¦","Rebuild Site");try{const a=await ei("rebuild");if(!a.ok)return;const{settings:i,hookUrl:n}=a;await ue("building",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,message:"Rebuild requested from admin UI"});const o=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"rebuild",source:"admin-dashboard",at:new Date().toISOString()})});if(o.ok)p("ðŸ”„ Rebuild triggered successfully."),await ue("deploying",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,message:"Webhook accepted rebuild request"}),setTimeout(()=>ut(),400);else{const s=`Rebuild webhook error: ${o.status}`;p(s,"error"),await ue("failed",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,errorMessage:s})}}catch(a){p("Rebuild failed: "+a.message,"error"),await ue("failed",{mode:"rebuild",errorMessage:a.message})}finally{$e(t,!1,"Rebuildingâ€¦","Rebuild Site")}};window.publishAndDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-publish-easy-btn]");$e(t,!0,"Publishingâ€¦","One-Click Publish");try{const a=document.getElementById("deploy-form");if(!a){p("Deploy form is not available. Reload and try again.","error");return}await window.saveDeploySettings({preventDefault(){},target:a}),await window.triggerDeploy()}catch(a){p("Publish failed: "+a.message,"error")}finally{$e(t,!1,"Publishingâ€¦","One-Click Publish")}};window.reindexSearch=async function(){const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=t?.textContent||"";t&&(t.textContent="Reindexingâ€¦");try{const{data:i,error:n}=await b.from("showroom_listings").select("id, updated_at").order("updated_at",{ascending:!1});if(n)return Z(n)?p("âš ï¸ Reindex blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):p("Could not load listings to reindex: "+n.message,"error");const o=i||[];if(!o.length){p("No listings to reindex.");return}let s=0,r=0,u=!1;const d=40;for(let c=0;c<o.length;c+=d){const m=o.slice(c,c+d),{error:f}=await b.from("showroom_listings").update({updated_at:new Date().toISOString()}).in("id",m.map(y=>y.id));f?(Z(f)&&(u=!0),r+=m.length):s+=m.length,t&&(t.textContent=`Reindexingâ€¦ ${Math.min(c+d,o.length)}/${o.length}`)}if(u){p(`âš ï¸ Reindex partially blocked: database admin role rejected some writes. Re-run the admin permission migration. (${s}/${o.length} done)`,"error");return}p(`Search index rebuilt for ${s} listing${s!==1?"s":""}${r?` (${r} failed)`:""}.`,r?"error":"success")}catch(i){p("Reindex failed: "+i.message,"error")}finally{t&&(t.textContent=a)}};window.syncShowroomToDB=async function(){if(!Array.isArray(ae)||!ae.length){p("No static showroom listings found to sync.","info");return}const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=t?.textContent||"";t&&(t.textContent="Syncingâ€¦");try{const{data:i,error:n}=await b.from("showroom_listings").select("property_id");if(n)return Z(n)?p("âš ï¸ Sync blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):p("Could not load existing listings: "+n.message,"error");const o=new Set((i||[]).map(m=>m.property_id)),s=ae.filter(m=>m&&m.property_id&&!o.has(m.property_id));if(!s.length){p("Showroom already in sync â€” no new listings to add.");return}let r=0,u=0,d=!1;const c=20;for(let m=0;m<s.length;m+=c){const f=s.slice(m,m+c).map(g=>({property_id:g.property_id,listing_type:g.listing_type||"product",category:g.category||null,subcategory:g.subcategory||null,title:g.title||"Untitled Listing",description:g.description||"",price:parseFloat(g.price)||0,currency:g.currency||"USD",country:g.country||"",country_code:g.country_code||"",state:g.state||"",city:g.city||"",town:g.town||"",product_location:g.product_location||"",latitude:g.latitude??null,longitude:g.longitude??null,property_type:g.property_type||null,listing_status:g.listing_status||"sale",bedrooms:g.bedrooms??null,bathrooms:g.bathrooms??null,building_size:g.building_size||"",land_size:g.land_size||"",parking_spaces:g.parking_spaces??null,furnished:g.furnished||"",features:Array.isArray(g.features)?g.features:[],tags:Array.isArray(g.tags)?g.tags:[],highlights:Array.isArray(g.highlights)?g.highlights:[],seo_keywords:Array.isArray(g.seo_keywords)?g.seo_keywords:[],images:Array.isArray(g.images)?g.images:[],brand:g.brand||null,color:g.color||null,size:g.size||null,condition:g.condition||null,warranty:g.warranty||null,availability_status:g.availability_status||"In Stock",stock_quantity:g.stock_quantity!=null?parseInt(g.stock_quantity,10):null,is_active:g.is_active!==!1,is_featured:!!g.is_featured,is_ai_generated:!!g.is_ai_generated,ai_generated_fields:Array.isArray(g.ai_generated_fields)?g.ai_generated_fields:[],specifications:g.specifications||{},created_at:g.created_at||new Date().toISOString()})),{error:y}=await b.from("showroom_listings").insert(f);y?(Z(y)&&(d=!0),u+=f.length):r+=f.length,t&&(t.textContent=`Syncingâ€¦ ${Math.min(m+c,s.length)}/${s.length}`)}if(d){p(`âš ï¸ Sync partially blocked: database admin role rejected some inserts. Re-run the admin permission migration. (${r}/${s.length} added)`,"error");return}p(`Showroom synced: ${r} new listing${r!==1?"s":""} added to the database${u?` (${u} failed)`:""}.`,u?"error":"success")}catch(i){p("Sync failed: "+i.message,"error")}finally{t&&(t.textContent=a)}};window.testGitHubConnection=async function(){const e=document.querySelector("[name=github_username]")?.value?.trim(),t=document.querySelector("[name=github_repo]")?.value?.trim();if(!e||!t){p("Enter your GitHub username and repo name first","info");return}try{const a=await fetch(`https://api.github.com/repos/${e}/${t}`);if(a.ok){const i=await a.json();p(`âœ“ Connected: ${i.full_name} (${i.visibility})`)}else a.status===404?p("Repository not found. Check username and repo name.","error"):p("GitHub API error: "+a.status,"error")}catch{p("Could not reach GitHub API","error")}};window.deployToProduction=window.triggerDeploy;window.rebuildSite=window.triggerRebuild;const ti=30,H={category:null,page:0,query:""};async function Ce(){const e=document.getElementById("content");if(!e)return;await Lt();const t=new Set(Xe()),a=mi();H.category||(H.category=a[0]?.slug||null);const i=0,n=H.query.trim().toLowerCase(),o=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-xl font-black text-white">Generated Catalog</h2>
        <p class="text-xs text-gray-500 mt-1">Deterministic storefront items. Hiding a listing removes it from the site everywhere â€” including direct links.</p>
      </div>
      <button onclick="catalogResetHidden()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition">Show All Hidden</button>
    </div>`,s=`
    <div class="flex flex-wrap gap-2">
      ${a.map(f=>`<button onclick="catalogSetCategory('${f.slug}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${H.category===f.slug?"bg-blue-500/20 text-blue-200 border-blue-500/40":"bg-white/5 text-gray-400 border-white/10 hover:text-white"}">${l(f.name)}</button>`).join("")}
    </div>`,r=`
    <div class="flex flex-wrap items-center gap-2">
      <input id="catalog-search-input" class="input-field flex-1 min-w-[220px]" placeholder="Search title, id or subcategoryâ€¦" value="${l(H.query)}" onkeyup="if (event.key === 'Enter') catalogSearch()">
      <button onclick="catalogSearch()" class="btn-press px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition">Search</button>
    </div>`;let u=[];const d=u.length?u.map(f=>{const y=t.has(f.property_id),g=f.images&&f.images[0]||"/fallback.svg";return`
          <div class="flex items-center gap-3 p-3 rounded-xl border ${y?"border-red-500/25 bg-red-500/5":"border-white/10 bg-white/[0.02]"}">
            <img src="${l(g)}" alt="" class="w-12 h-12 rounded-lg object-cover bg-gray-800 shrink-0" loading="lazy">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-white truncate">${l(f.title)}</p>
              <p class="text-[11px] text-gray-500 truncate">${l(f.property_id)} Â· ${l(f.subcategory||f.category||"")} Â· ${wa(f.price,"USD")}</p>
            </div>
            ${Y(!y)}
            <button onclick="catalogToggle('${l(f.property_id)}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${y?"bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25":"bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20"}">
              ${y?"Show":"Hide"}
            </button>
          </div>`}).join(""):'<div class="text-center py-16 text-gray-500 text-sm">No catalog items match.</div>',c=n?1:Math.max(1,Math.ceil(i/ti)),m=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <p class="text-xs text-gray-500">${n?`${u.length} match`:`${i.toLocaleString()} items in ${l("")}`} Â· ${t.size} hidden</p>
      <div class="flex items-center gap-2">
        <button onclick="catalogPage(-1)" ${H.page<=0?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Prev</button>
        <span class="text-xs text-gray-500">Page ${H.page+1} / ${c}</span>
        <button onclick="catalogPage(1)" ${H.page>=c-1?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Next</button>
      </div>
    </div>`;e.innerHTML=`
    <div class="space-y-4 fade-in">
      ${o}
      ${s}
      ${r}
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 space-y-2">${d}</div>
      ${m}
    </div>`,window.lucide&&lucide.createIcons()}window.catalogSetCategory=function(e){H.category=e,H.page=0,H.query="",Ce()};window.catalogSearch=function(){const e=document.getElementById("catalog-search-input");H.query=e?e.value:"",H.page=0,Ce()};window.catalogPage=function(e){const a=H.query.trim()?1:Math.max(1,Math.ceil(0/ti));H.page=Math.max(0,Math.min(a-1,H.page+e)),Ce()};window.catalogToggle=async function(e){const t=!Xe().includes(e),a=await ma(e,t);p(t?"Listing hidden from storefront":"Listing restored",a.ok?"success":"info"),Ce()};window.catalogResetHidden=async function(){await hi(),p("All hidden catalog listings restored"),Ce()};(function(){if(!(!window.history||!window.history.pushState)){try{window.history.replaceState({adminGuard:1},document.title,window.location.href),window.history.pushState({adminGuard:2},document.title,window.location.href)}catch{return}window.addEventListener("popstate",function(t){t.state&&t.state.adminGuard===1&&window.location.replace("/")})}})();async function sa(){window.lucide&&lucide.createIcons(),_a(),await Ui(),b.auth.onAuthStateChange((e,t)=>{if(e==="SIGNED_OUT"){I.user=null;const a=document.getElementById("login-screen");a&&(a.style.display="flex")}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",sa):sa();
