import{supabase as p}from"./supabase-client-7_ZWSEp6.js";import{a as xa,g as wa,C as we,A as _a}from"./localization-CI_oKvHA.js";import{patchLocalShowroomListing as ka,upsertLocalShowroomListing as Me,getLocalShowroomListingById as kt,listLocalShowroomListings as $t}from"./local-showroom-store-JrQn_yOW.js";import{L as Ke,s as Je,a as $a,l as Sa,b as Aa,V as Ia}from"./live-control-store-DzHEnoMc.js";import{g as St,s as Pa,l as Ea,a as Ca,b as La}from"./payment-settings-BW6UhpGf.js";import{S as T}from"./showroom-data-DPO_EY_W.js";import{getCatalogCategory as At,getCatalogCategories as Ta,generateProduct as yt}from"./catalog-BPD_6M9e.js";import{getHiddenCatalogIds as It,saveCatalogHidden as Ba,resetHiddenCatalogIds as Ma,loadHiddenCatalogIds as Ra}from"./catalog-hidden-store-DbF0xVeS.js";import"./preload-helper-CLcXU_4U.js";const M=1,W=5e6,Da=[{id:"prod-smartphone",listingType:"product",category:"Phones",subcategory:"Smartphones",label:"Flagship Smartphone",brand:"Global Mobile",model:"X Pro",color:"Midnight Black",size:"6.7-inch",condition:"New",features:["5G connectivity","OLED display","Fast charging","Unlocked","Premium cameras"],highlights:["Retail-ready packaging","Strong search demand","Ideal for global shipping"],keywords:["smartphone","mobile phone","5g"],descriptionType:"phone"},{id:"prod-laptop",listingType:"product",category:"Computers & Laptops",subcategory:"Laptops",label:"Performance Laptop",brand:"NorthBridge",model:"Studio 14",color:"Silver",size:"14-inch",condition:"New",features:["Fast processor","SSD storage","Long battery life","Portable chassis","Business-ready design"],highlights:["Suitable for work and study","Premium margin band","Global audience appeal"],keywords:["laptop","notebook","computer"],descriptionType:"laptop"},{id:"prod-tv",listingType:"product",category:"Electronics",subcategory:"Smart TVs",label:"4K Smart TV",brand:"VistaHome",model:"UltraView",color:"Black",size:"65-inch",condition:"New",features:["4K panel","Streaming apps","HDR support","Voice control","Slim bezel"],highlights:["Living-room centerpiece","Popular premium electronics segment"],keywords:["tv","smart tv","home electronics"],descriptionType:"electronics"},{id:"prod-watch",listingType:"product",category:"Watches",subcategory:"Luxury Watches",label:"Luxury Wristwatch",brand:"Aurelius",model:"Chrono 8",color:"Gold / Black",size:"42mm",condition:"New",features:["Precision movement","Premium case","Gift-ready presentation","Water resistance","Collector appeal"],highlights:["High perceived value","Strong gifting category"],keywords:["watch","luxury watch","timepiece"],descriptionType:"luxury"},{id:"prod-jewelry",listingType:"product",category:"Jewelry",subcategory:"Fine Jewelry",label:"Fine Jewelry Set",brand:"Maison Valeur",model:"Signature Set",color:"Gold",size:"Adjustable",condition:"New",features:["Premium finish","Gift packaging","Occasion-ready","Elegant styling"],highlights:["High-value presentation","Wedding and celebration demand"],keywords:["jewelry","necklace","bracelet"],descriptionType:"luxury"},{id:"prod-handbag",listingType:"product",category:"Bags & Accessories",subcategory:"Designer Bags",label:"Designer Handbag",brand:"Rue Maison",model:"Carry All",color:"Tan",size:"Medium",condition:"New",features:["Structured silhouette","Premium hardware","Travel-friendly storage","Retail-ready finish"],highlights:["Fashion-forward listing","Broad international demand"],keywords:["handbag","designer bag","accessories"],descriptionType:"fashion"},{id:"prod-sneakers",listingType:"product",category:"Shoes",subcategory:"Premium Sneakers",label:"Premium Sneakers",brand:"RunNorth",model:"Air Flex",color:"White",size:"EU 42",condition:"New",features:["Comfort cushioning","Streetwear styling","Durable outsole","Daily wear ready"],highlights:["High-conversion category","Easy multi-country merchandising"],keywords:["sneakers","shoes","fashion"],descriptionType:"fashion"},{id:"prod-sofa",listingType:"product",category:"Furniture",subcategory:"Living Room",label:"Luxury Sofa Set",brand:"Grand Habitat",model:"Residence 3-Piece",color:"Sand Beige",size:"3-Piece Set",condition:"New",features:["Premium upholstery","Statement living-room piece","Comfort seating","Interior-ready styling"],highlights:["Large-ticket home category","Ideal for premium households"],keywords:["sofa","furniture","living room"],descriptionType:"home"},{id:"prod-generator",listingType:"product",category:"Home & Kitchen",subcategory:"Power Solutions",label:"Backup Power Generator",brand:"VoltWorks",model:"SilentMax",color:"Graphite",size:"7.5kVA",condition:"New",features:["Reliable backup power","Low-noise housing","Residential and business use","Heavy-duty build"],highlights:["Practical high-demand utility item","Useful in many markets"],keywords:["generator","power","backup power"],descriptionType:"industrial"},{id:"prod-drone",listingType:"product",category:"Cameras & Photography",subcategory:"Drones",label:"Pro Camera Drone",brand:"SkyFrame",model:"Aerial 4K",color:"Gray",size:"Foldable",condition:"New",features:["4K stabilized video","GPS return home","Portable folding frame","Creator-ready footage"],highlights:["Strong visual listing appeal","Premium creator equipment"],keywords:["drone","camera drone","aerial"],descriptionType:"electronics"},{id:"prod-grocery",listingType:"product",category:"Food & Groceries",subcategory:"Family Essentials",label:"Family Grocery Bundle",brand:"Market Select",model:"Household Pack",color:"Mixed",size:"Bulk Pack",condition:"New",features:["Everyday essentials","Bulk value","Family sized","Easy repeat orders"],highlights:["Fast-moving everyday goods","Useful across broad regions"],keywords:["groceries","food bundle","household essentials"],descriptionType:"daily"},{id:"prod-scale-house",listingType:"product",category:"Home & Kitchen",subcategory:"Model Houses",label:"Architectural Model House",brand:"Studio Form",model:"Estate Miniature",color:"Natural Wood",size:"1:50 Scale",condition:"New",features:["Collector display piece","Detailed craftsmanship","Interior decor appeal","Gift-ready packaging"],highlights:["Supports the model-house use case","Works for decor and collector audiences"],keywords:["model house","architectural model","collector decor"],descriptionType:"home"},{id:"veh-sedan",listingType:"product",category:"Cars",subcategory:"Sedans",label:"Executive Sedan",brand:"Summit Motors",model:"S Line",color:"Pearl White",size:"Mid-size",condition:"Used - Like New",features:["Comfortable cabin","Road-trip ready","Well-maintained presentation","Family and executive appeal"],highlights:["Vehicle posts support 24-image galleries","Map-ready listing"],keywords:["car","sedan","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-suv",listingType:"product",category:"Cars",subcategory:"SUVs",label:"Family SUV",brand:"Frontier Auto",model:"Terrain X",color:"Obsidian",size:"7-Seater",condition:"Used - Like New",features:["Spacious seating","Utility-focused cargo room","Suitable for families","Road and city versatility"],highlights:["High-demand automotive segment","Works well with showroom map"],keywords:["suv","family car","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-luxury",listingType:"product",category:"Luxury Cars",subcategory:"Luxury Vehicles",label:"Luxury Performance Car",brand:"Regal Automotive",model:"Imperium GT",color:"Metallic Black",size:"Coupe",condition:"Used - Like New",features:["Prestige brand positioning","Performance styling","Collector-level appeal","Premium interior"],highlights:["Supports the requested high-ticket range","Designed for showroom-style luxury listings"],keywords:["luxury car","sports car","supercar"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-motorcycle",listingType:"product",category:"Motorcycles",subcategory:"Street Bikes",label:"Sport Motorcycle",brand:"Velocity Moto",model:"R 900",color:"Red",size:"900cc",condition:"Used - Like New",features:["Agile handling","Performance design","Lifestyle buyer appeal","Weekend-ready machine"],highlights:["Automotive category with image-rich display"],keywords:["motorcycle","bike","sport bike"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-commercial",listingType:"product",category:"Commercial Vehicles",subcategory:"Utility Vehicles",label:"Commercial Utility Vehicle",brand:"FleetCore",model:"CargoPro",color:"White",size:"Long wheelbase",condition:"Used - Good",features:["Business-ready load space","Fleet-friendly purchase","Service history presentation","Commercial utility"],highlights:["Suitable for business buyers","Map-ready logistics listing"],keywords:["commercial vehicle","cargo van","fleet"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-boat",listingType:"product",category:"Boats & Marine",subcategory:"Leisure Boats",label:"Leisure Boat",brand:"BlueHarbor",model:"Coastline 28",color:"Navy / White",size:"28 ft",condition:"Used - Like New",features:["Marina-ready presentation","Leisure and charter appeal","Premium leisure category"],highlights:["Large-format gallery support","High-ticket recreational listing"],keywords:["boat","marine","yacht"],requiredImageCount:24,descriptionType:"vehicle"}],Fa=[{id:"prop-apartment",listingType:"property",category:"Real Estate",subcategory:"Apartments",label:"City Apartment",propertyType:"Apartment",bedrooms:2,bathrooms:2,buildingSize:"1,150 sqft",landSize:"",furnished:"Furnished",features:["Secure access","Modern kitchen","Prime urban access","Balcony or city views"],highlights:["Strong urban demand","Good for short and long stay buyers"],keywords:["apartment","real estate","city home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-condo",listingType:"property",category:"Real Estate",subcategory:"Condos",label:"Modern Condo",propertyType:"Condo",bedrooms:3,bathrooms:2,buildingSize:"1,450 sqft",landSize:"",furnished:"Furnished",features:["Managed building","Amenity access","Contemporary finish","Secure parking"],highlights:["Works across major global markets"],keywords:["condo","property","home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-townhouse",listingType:"property",category:"Real Estate",subcategory:"Townhouses",label:"Townhouse Residence",propertyType:"Townhouse",bedrooms:4,bathrooms:3,buildingSize:"2,000 sqft",landSize:"0.08 acres",furnished:"Unfurnished",features:["Multi-level layout","Family-ready plan","Private entry","Parking included"],highlights:["Popular residential ownership format"],keywords:["townhouse","residence","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-villa",listingType:"property",category:"Real Estate",subcategory:"Villas",label:"Private Villa",propertyType:"Villa",bedrooms:5,bathrooms:5,buildingSize:"4,800 sqft",landSize:"0.4 acres",furnished:"Furnished",features:["Private outdoor space","Premium architecture","Luxury entertaining zones","Prestige location potential"],highlights:["Premium property tier","Designed for international buyers"],keywords:["villa","luxury property","real estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-mansion",listingType:"property",category:"Real Estate",subcategory:"Mansions",label:"Luxury Mansion",propertyType:"Mansion",bedrooms:8,bathrooms:10,buildingSize:"12,000 sqft",landSize:"1.2 acres",furnished:"Furnished",features:["Grand entrance","High-end interior finishes","Staff or guest quarters","Statement curb appeal"],highlights:["Matches the mansion requirement directly","Supports high-ticket luxury listings"],keywords:["mansion","estate","luxury home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-beach",listingType:"property",category:"Real Estate",subcategory:"Beach Houses",label:"Beachfront House",propertyType:"Beach House",bedrooms:4,bathrooms:4,buildingSize:"3,600 sqft",landSize:"0.25 acres",furnished:"Furnished",features:["Waterfront views","Outdoor leisure space","Vacation-rental appeal","Premium lifestyle positioning"],highlights:["Ideal for tourism and lifestyle markets"],keywords:["beach house","waterfront home","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-farm",listingType:"property",category:"Real Estate",subcategory:"Farm Houses",label:"Farm House Estate",propertyType:"Farm House",bedrooms:4,bathrooms:3,buildingSize:"3,100 sqft",landSize:"5 acres",furnished:"Unfurnished",features:["Land-rich asset","Agricultural potential","Quiet residential use","Outbuilding opportunity"],highlights:["Suitable for rural and suburban regions"],keywords:["farm house","landed property","estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-commercial",listingType:"property",category:"Real Estate",subcategory:"Commercial Buildings",label:"Commercial Building",propertyType:"Commercial Building",bedrooms:0,bathrooms:4,buildingSize:"8,500 sqft",landSize:"0.35 acres",furnished:"Unfurnished",features:["Business district potential","Mixed-use flexibility","Visible frontage","Investor-ready asset class"],highlights:["Attractive for business buyers and investors"],keywords:["commercial building","office","investment property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-hotel",listingType:"property",category:"Real Estate",subcategory:"Hotels",label:"Boutique Hotel",propertyType:"Hotel",bedrooms:18,bathrooms:20,buildingSize:"15,000 sqft",landSize:"0.75 acres",furnished:"Furnished",features:["Hospitality-ready layout","Guest-focused amenities","Tourism and corporate appeal","Revenue asset potential"],highlights:["Supports hospitality listings globally"],keywords:["hotel","hospitality","investment"],requiredImageCount:24,descriptionType:"property"},{id:"prop-land",listingType:"property",category:"Real Estate",subcategory:"Land",label:"Development Land",propertyType:"Land",bedrooms:0,bathrooms:0,buildingSize:"",landSize:"10 acres",furnished:"",features:["Development potential","Flexible use case","Long-term investment appeal","Location-led value"],highlights:["Useful for land banking and development"],keywords:["land","plot","development"],requiredImageCount:24,descriptionType:"property"}],Pt=[...Da,...Fa];function Qe(e){return xa[e]||"USD"}function Et(e,t){return Pt.filter(a=>a.listingType!==e?!1:t?a.category===t:!0)}function Ua(e,t){const a=Math.max(M,Math.min(W,Number(e)||M));return new Intl.NumberFormat("en-US",{style:"currency",currency:t,maximumFractionDigits:0}).format(a)}function ja(e,t,a,i,s){const o=Ua(i,a);return e.descriptionType==="vehicle"?`${e.label} listed at ${o}. This template is intended to present a complete automotive post with exterior, interior, condition, performance, and gallery details in a clean showroom-style format.`:e.descriptionType==="property"?`${e.label} located in ${s}. Offered at ${o}, this property template is designed for a complete real-estate presentation with map-ready location data, rich visual gallery coverage, and buyer-friendly highlights covering layout, lifestyle, and investment value.`:e.descriptionType==="phone"?`${e.label} listed at ${o}. The template focuses on a clean premium device presentation with brand, model, condition, core features, and strong online merchandising copy.`:e.descriptionType==="laptop"?`${e.label} listed at ${o}. Built for marketplace listings that need clear performance positioning, specification highlights, and an easy-to-scan description for students, professionals, and remote workers.`:e.descriptionType==="luxury"?`${e.label} listed at ${o}. This template supports high-value presentation with polished positioning, premium selling points, and a strong showroom-style description.`:e.descriptionType==="fashion"?`${e.label} listed at ${o}. This product template highlights styling, quality, and day-to-day appeal while keeping the listing easy to customize.`:e.descriptionType==="home"?`${e.label} listed at ${o}. The listing copy is structured for shoppers looking for quality presentation, reliable detail, and visual merchandising support.`:e.descriptionType==="industrial"?`${e.label} listed at ${o}. This template emphasizes practical use, dependable performance, and business or household value in a straightforward format.`:e.descriptionType==="daily"?`${e.label} listed at ${o}. The copy is designed for repeat-buy categories with clear value messaging and broad buyer appeal.`:`${e.label} listed at ${o}. This template generates a clean, marketable listing with ready-made highlights, keywords, and presentation details.`}function Ct({templateId:e,listingType:t,category:a,countryCode:i,currency:s,price:o}){const r=Pt.find(g=>g.id===e&&g.listingType===t);if(!r)return null;const n=wa(i)||we[0],d=s||Qe(n.code),c=[n.name].filter(Boolean).join(", "),m={category:r.category||a||(t==="property"?"Real Estate":"Other"),subcategory:r.subcategory||r.label,title:t==="property"?`${r.label} in ${n.name}`:r.label,description:ja(r,n,d,o,c),currency:d,features:[...r.features],highlights:[...r.highlights||[]],seo_keywords:[...new Set([r.category,r.subcategory,r.label,...t==="property"?[n.name]:[],...r.keywords||[]].filter(Boolean))],requiredImageCount:r.requiredImageCount||0};return t==="property"?{...m,country:n.name,country_code:n.code,product_location:n.name,property_type:r.propertyType||r.label,bedrooms:r.bedrooms??null,bathrooms:r.bathrooms??null,building_size:r.buildingSize||"",land_size:r.landSize||"",furnished:r.furnished||""}:{...m,brand:r.brand||"",model:r.model||"",color:r.color||"",size:r.size||"",condition:r.condition||"New"}}const Lt="weverseonlineshop@gmail.com",Tt="kco_ai_ad_override_fallback_v1",Bt="Weverse Online Shop",Mt="GLOBAL SHOPPING • WORLDWIDE DELIVERY",Oa="https://wttnvwpoqmbxryivcerf.supabase.co".replace(/\/$/,""),qa=`${Oa}/functions/v1/ai-admin-assistant`,Na=[{group:"Main",items:[{id:"dashboard",label:"Dashboard",icon:"layout-dashboard"},{id:"products",label:"Products",icon:"package"},{id:"properties",label:"Properties",icon:"home"},{id:"catalog",label:"Catalog Manager",icon:"boxes"},{id:"orders",label:"Orders",icon:"shopping-bag"},{id:"customers",label:"Customers",icon:"users"},{id:"reviews",label:"Reviews",icon:"star"},{id:"messages",label:"Messages",icon:"message-circle"},{id:"coupons",label:"Coupons",icon:"ticket"},{id:"ads",label:"Advertisements",icon:"megaphone"},{id:"notifications",label:"Notifications",icon:"bell"},{id:"live-streaming",label:"Live Streaming",icon:"radio"},{id:"video-calls",label:"Video Calls",icon:"video"}]},{group:"Configuration",items:[{id:"ai",label:"AI Assistant",icon:"sparkles"},{id:"n8n",label:"n8n Automation",icon:"workflow"},{id:"payment-settings",label:"Payment Settings",icon:"credit-card"},{id:"ai-settings",label:"AI Settings",icon:"bot"},{id:"ai-marketing",label:"AI Marketing Studio",icon:"sparkles"},{id:"homepage-branding",label:"Homepage Branding",icon:"image"},{id:"brand",label:"Brand Manager",icon:"palette"},{id:"content",label:"Content Manager",icon:"file-text"},{id:"seo",label:"SEO Manager",icon:"search"},{id:"email",label:"Email Settings",icon:"mail"},{id:"analytics",label:"Analytics",icon:"bar-chart-3"},{id:"security",label:"Security",icon:"shield"},{id:"activity",label:"Activity Logs",icon:"activity"},{id:"backup",label:"Backup & Restore",icon:"database"},{id:"settings",label:"Settings",icon:"settings"},{id:"publish",label:"Publish & Deploy",icon:"rocket"}]}],Ha={dashboard:"Dashboard",products:"Products Manager",properties:"Properties Manager",catalog:"Catalog Manager",orders:"Orders Manager",customers:"Customers Manager",reviews:"Reviews Manager",messages:"Messages & Support",coupons:"Coupons Manager",ads:"Advertisement Manager","ai-settings":"AI Settings",content:"Content Manager",n8n:"n8n Automation",ai:"AI Assistant","ai-marketing":"AI Marketing Studio","homepage-branding":"Homepage Branding",brand:"Brand Manager","payment-settings":"Payment Settings",seo:"SEO Manager",email:"Email Settings",analytics:"Analytics",security:"Security",activity:"Activity Logs",backup:"Backup & Restore",settings:"Settings",publish:"Publish & Deploy"},Rt=[..._a].sort();let _={user:null,section:"dashboard"};function l(e){if(e==null)return"";const t=document.createElement("div");return t.textContent=String(e),t.innerHTML}function Dt(e,t="USD"){return`${(parseFloat(e)||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})} ${t}`}function O(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"—"}function R(e){return e?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function Ye(){return"KCO-"+String(Date.now()).slice(-6)+Math.floor(Math.random()*1e3).toString().padStart(3,"0")}const Ga=["id","property_id","listing_type","category","subcategory","title","description","price","price_period","currency","country","country_code","state","city","town","product_location","latitude","longitude","bedrooms","bathrooms","building_size","land_size","parking_spaces","property_type","furnished","listing_status","images","features","features_text","tags","highlights","seo_keywords","specifications","brand","color","size","condition","warranty","shipping_info","delivery_estimate","weight","dimensions","storage_options","ram_options","color_options","availability_status","stock_quantity","sku","is_active","is_featured","is_ai_generated","ai_generated_fields","rating","rating_count","favorite_count","review_count","video","video_url","approval_status","published_at","created_at","updated_at"];function Q(e){const t={};if(!e||typeof e!="object")return t;for(const a of Ga)a in e&&(t[a]=e[a]);return t}function u(e,t="success"){const a=document.getElementById("toast"),i=document.getElementById("toast-msg"),s=a.querySelector("i[data-lucide]");if(!a||!i)return;i.textContent=e;const o={success:"check-circle",error:"alert-circle",info:"info"},r={success:"text-emerald-400",error:"text-red-400",info:"text-blue-400"};s&&(s.setAttribute("data-lucide",o[t]||"info"),s.className=`w-4 h-4 shrink-0 ${r[t]||"text-blue-400"}`),a.style.transform="translateY(0)",a.style.opacity="1",window.lucide&&lucide.createIcons(),clearTimeout(a._t),a._t=setTimeout(()=>{a.style.transform="translateY(20px)",a.style.opacity="0"},3e3)}function I(e){const t={pending_verification:["bg-amber-500/10 text-amber-400 border-amber-500/20","Pending"],approved:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Approved"],rejected:["bg-red-500/10 text-red-400 border-red-500/20","Rejected"],payment_approved:["bg-blue-500/10 text-blue-400 border-blue-500/20","Paid"],order_placed:["bg-amber-500/10 text-amber-400 border-amber-500/20","Placed"],processing:["bg-indigo-500/10 text-indigo-400 border-indigo-500/20","Processing"],shipped:["bg-violet-500/10 text-violet-400 border-violet-500/20","Shipped"],in_transit:["bg-violet-500/10 text-violet-400 border-violet-500/20","In Transit"],out_for_delivery:["bg-cyan-500/10 text-cyan-400 border-cyan-500/20","Out for Delivery"],delivered:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Delivered"],cancelled:["bg-red-500/10 text-red-400 border-red-500/20","Cancelled"],active:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],inactive:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"],sale:["bg-blue-500/10 text-blue-400 border-blue-500/20","For Sale"],rent:["bg-violet-500/10 text-violet-400 border-violet-500/20","For Rent"],true:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],false:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"]},[a,i]=t[String(e)]||["bg-gray-500/10 text-gray-400 border-gray-500/20",l(e)||"—"];return`<span class="badge ${a}">${i}</span>`}function G(){document.getElementById("modal-container").innerHTML=""}function L(e){document.getElementById("modal-container").innerHTML=e,window.lucide&&lucide.createIcons()}function k(e,t,a,i,s=""){const o={blue:"bg-blue-500/10 text-blue-400 border-blue-500/15",amber:"bg-amber-500/10 text-amber-400 border-amber-500/15",emerald:"bg-emerald-500/10 text-emerald-400 border-emerald-500/15",red:"bg-red-500/10 text-red-400 border-red-500/15",violet:"bg-violet-500/10 text-violet-400 border-violet-500/15",blue:"bg-blue-500/10 text-blue-400 border-blue-500/15"};return`<div class="stat-card glass-soft border border-blue-500/15 rounded-2xl p-4">
    <div class="flex items-start justify-between mb-3">
      <div class="p-2 ${o[i]||o.blue} rounded-xl border"><i data-lucide="${a}" class="w-4 h-4"></i></div>
    </div>
    <p class="text-2xl font-black text-white">${l(t)}</p>
    <p class="text-[11px] text-gray-500 uppercase tracking-wide mt-0.5 font-bold">${l(e)}</p>
    ${s?`<p class="text-[10px] text-gray-600 mt-1">${l(s)}</p>`:""}
  </div>`}function Y(){return'<div class="flex items-center justify-center py-24"><div class="flex items-center gap-3 text-gray-500 text-sm"><i data-lucide="loader-2" class="w-5 h-5 animate-spin text-blue-400"></i> Loading…</div></div>'}function ae(e,t,a,i=""){return`<div class="flex flex-col items-center justify-center py-20 text-center"><div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4"><i data-lucide="${e}" class="w-8 h-8 text-blue-400"></i></div><h3 class="text-base font-black text-white mb-1">${l(t)}</h3><p class="text-sm text-gray-500 max-w-xs">${l(a)}</p>${i?`<div class="mt-5">${i}</div>`:""}</div>`}function Ft(){const e=document.getElementById("sidebar-nav");e&&(e.innerHTML=Na.map(t=>`
    <div>
      <span class="section-label">${t.group}</span>
      ${t.items.map(a=>`
        <button class="nav-item ${_.section===a.id?"active":""} w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold rounded-xl" onclick="navigate('${a.id}')">
          <i data-lucide="${a.icon}" class="w-4 h-4 shrink-0"></i>
          <span>${a.label}</span>
        </button>`).join("")}
    </div>`).join(""),window.lucide&&lucide.createIcons())}window.navigate=function(e){_.section=e;const t=Ha[e]||e,a=document.getElementById("page-title");a&&(a.textContent=t),Ft(),closeSidebar();const i=document.getElementById("content");i&&(i.innerHTML=Y()),window.lucide&&lucide.createIcons(),({dashboard:ri,products:C,properties:st,catalog:ne,orders:ia,customers:Ci,reviews:ot,messages:sa,coupons:Ae,ads:se,notifications:Ti,"live-streaming":re,"video-calls":pe,ai:za,n8n:Va,"ai-settings":la,"ai-marketing":Ie,"homepage-branding":Ee,content:Ki,seo:Qi,email:Yi,analytics:Ji,security:Pe,activity:Xi,brand:Ce,"payment-settings":We,backup:Zi,settings:es,publish:Le}[e]||(()=>{const r=document.getElementById("content");r&&(r.innerHTML=ae("construction","Coming Soon",`${t} is being built.`))}))()};async function za(){const e=document.getElementById("content");e&&(e.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}async function Va(){const e=document.getElementById("content");e&&(e.innerHTML=`
    <div class="space-y-4 fade-in">
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 class="text-xl font-black text-white">n8n Automation</h2>
          <p class="text-xs text-gray-500 mt-1">Configure webhooks, automation center, and AI assistant triggers.</p>
        </div>
        <div class="flex items-center gap-2">
          <a href="/admin-n8n.html" target="_blank" rel="noopener" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition">Open Fullscreen</a>
        </div>
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
        <iframe src="/admin-n8n.html" title="n8n Automation" class="w-full" style="height: calc(100vh - 230px); min-height: 680px; border: 0;"></iframe>
      </div>
    </div>`,window.lucide&&lucide.createIcons())}window.openSidebar=()=>{document.getElementById("sidebar").classList.add("open"),document.getElementById("sidebar-overlay").classList.remove("hidden")};window.closeSidebar=()=>{document.getElementById("sidebar").classList.remove("open"),document.getElementById("sidebar-overlay").classList.add("hidden")};document.getElementById("close-sidebar")?.addEventListener("click",closeSidebar);const Z="kco_admin_remember",Xe="kco_login_attempts",Re=5,Wa=15*60*1e3;function P(e){const t=document.getElementById("login-error"),a=document.getElementById("login-error-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-success")?.classList.add("hidden"),window.lucide&&lucide.createIcons())}function Ka(e){const t=document.getElementById("login-success"),a=document.getElementById("login-success-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-error")?.classList.add("hidden"))}function _e(){document.getElementById("login-error")?.classList.add("hidden"),document.getElementById("login-success")?.classList.add("hidden")}function de(e){return String(e||"").trim().toLowerCase()}function Ja(){try{const e=JSON.parse(localStorage.getItem(Z)||"{}");e?.email&&!de(e.email)&&localStorage.removeItem(Z)}catch{localStorage.removeItem(Z)}}function Qa(){try{const e=JSON.parse(localStorage.getItem(Z)||"{}");return de(e?.email)}catch{return""}}function Ze(){Ja();const e=Qa(),t=document.getElementById("login-email");t&&(t.value=e||t.value||Lt,t.removeAttribute("readonly"));const a=document.getElementById("reset-email");a&&(a.value=e||a.value||"",a.removeAttribute("readonly"))}function Ya(){return`${window.location.origin}/admin.html`}function X(e){const t=document.getElementById("login-header-title"),a=document.getElementById("login-header-icon");document.getElementById("login-form")?.classList.toggle("hidden",e!=="login"),document.getElementById("twofa-form")?.classList.toggle("hidden",e!=="2fa"),document.getElementById("forgot-form")?.classList.toggle("hidden",e!=="forgot"),_e(),e==="login"&&(t&&(t.textContent="Admin Access"),a&&a.setAttribute("data-lucide","shield-check")),e==="2fa"&&(t&&(t.textContent="Two-Factor Auth"),a&&a.setAttribute("data-lucide","smartphone")),e==="forgot"&&(t&&(t.textContent="Reset Password"),a&&a.setAttribute("data-lucide","mail")),window.lucide&&lucide.createIcons()}function A(e,t,a=""){const i=document.getElementById(e);i&&(i.disabled=t,t?i.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline-block mr-1"></i> Please wait…':a&&(i.innerHTML=a),window.lucide&&lucide.createIcons())}function Ut(){try{return JSON.parse(localStorage.getItem(Xe)||'{"count":0}')}catch{return{count:0}}}function jt(){const e=Ut();return e.count=(e.count||0)+1,e.count>=Re&&(e.lockedUntil=Date.now()+Wa),localStorage.setItem(Xe,JSON.stringify(e)),e}function Ot(){localStorage.removeItem(Xe)}function qt(){const e=Ut();if(!e.lockedUntil)return null;const t=e.lockedUntil-Date.now();return t<=0?(Ot(),null):Math.ceil(t/6e4)}async function j(e,t,a={}){try{await p.from("admin_security_logs").insert({user_id:e,event_type:t,ip_address:await Xa(),user_agent:navigator.userAgent.slice(0,200),...a})}catch{}}async function Xa(){try{return(await(await fetch("https://api64.ipify.org?format=json",{signal:AbortSignal.timeout(3e3)})).json()).ip||"unknown"}catch{return"unknown"}}async function Nt(e){if(!e)return!1;let t=!1,a=!1;try{const{data:i}=await p.rpc("is_current_user_admin");t=!0,a=!!i}catch{t=!1}return t?a:de(e.email)===Lt}async function Za(){const e=window.location.hash;if(e.includes("type=recovery")||e.includes("access_token")){ge(),oi();return}const{data:{session:t}}=await p.auth.getSession();if(t?.user&&await Nt(t.user)){const{data:{currentUser:i}}=await p.auth.getUser(),s=await p.auth.mfa.getAuthenticatorAssuranceLevel(),o=s.data?.currentLevel;if(s.data?.nextLevel==="aal2"&&o!=="aal2"){_.user=t.user,ge(),X("2fa"),et();return}_.user=t.user,ke();return}ei()}function ge(){const e=document.getElementById("login-screen");e&&(e.style.display="flex")}function ei(){ge(),X("login"),Ze(),Ht(),Gt(),et(),ti();const e=qt();e&&(P(`Too many failed attempts. Try again in ${e} minute${e>1?"s":""}.`),document.getElementById("login-btn").disabled=!0)}function ti(){document.getElementById("toggle-pw")?.addEventListener("click",()=>{const e=document.getElementById("login-password"),t=document.querySelector("#toggle-pw i");e&&(e.type=e.type==="password"?"text":"password",t&&t.setAttribute("data-lucide",e.type==="password"?"eye":"eye-off"),window.lucide&&lucide.createIcons())})}function Ht(){const e=document.getElementById("login-form");!e||e._bound||(e._bound=!0,e.addEventListener("submit",ai),document.getElementById("forgot-pw-btn")?.addEventListener("click",()=>X("forgot")))}async function ai(e){e.preventDefault();const t=qt();if(t){P(`Account locked. Try again in ${t} minute${t>1?"s":""}.`);return}const a=document.getElementById("login-email"),i=de(a?.value);if(!i){P("Enter your admin email address."),A("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const s=document.getElementById("login-password").value,o=document.getElementById("remember-me")?.checked;A("login-btn",!0),_e();const{data:r,error:n}=await p.auth.signInWithPassword({email:i,password:s});if(n||!r.user){const f=String(n?.message||"").toLowerCase();if(f.includes("missing supabase credentials")||f.includes("authentication service is unavailable")){P("Authentication is temporarily unavailable due to configuration. Please contact support."),A("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(f.includes("failed to fetch")||f.includes("network request failed")){P("Network error while signing in. Check your connection and try again."),A("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(f.includes("email not confirmed")){P("Your admin email is not confirmed yet. Open your verification email and confirm first."),A("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const y=jt(),b=Re-y.count,h=y.lockedUntil?`Account locked for 15 minutes after ${Re} failed attempts.`:`Invalid email or password. ${b>0?b+" attempt"+(b!==1?"s":"")+" remaining.":""}`;P(h),A("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),r?.user&&await j(r.user.id,"login_failed",{metadata:{reason:"wrong_password"}});return}if(!await Nt(r.user)){await p.auth.signOut(),P(`Access denied for ${r.user.email}. This account is signed in but does not have administrator privileges.`),A("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),await j(r.user.id,"login_denied",{metadata:{reason:"not_admin"}});return}if(o?localStorage.setItem(Z,JSON.stringify({email:i,ts:Date.now()})):localStorage.removeItem(Z),Ot(),_.user=r.user,(await p.auth.mfa.getAuthenticatorAssuranceLevel()).data?.nextLevel==="aal2"){A("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),X("2fa"),et(),setTimeout(()=>document.getElementById("totp-code")?.focus(),100);return}await j(r.user.id,"login_success"),A("login-btn",!1),ke()}function et(){const e=document.getElementById("verify-2fa-btn");e&&!e._bound&&(e._bound=!0,e.addEventListener("click",ht));const t=document.getElementById("totp-code");t&&!t._bound&&(t._bound=!0,t.addEventListener("input",i=>{i.target.value=i.target.value.replace(/\D/g,"").slice(0,6),i.target.value.length===6&&ht()})),document.getElementById("cancel-2fa-btn")?.addEventListener("click",async()=>{await p.auth.signOut(),_.user=null,X("login")}),document.getElementById("use-backup-btn")?.addEventListener("click",()=>{document.getElementById("backup-code-wrap")?.classList.toggle("hidden");const s=document.getElementById("backup-code");s&&s.focus()});const a=document.getElementById("verify-backup-btn");a&&!a._bound&&(a._bound=!0,a.addEventListener("click",ii))}async function ht(){const e=document.getElementById("totp-code")?.value?.trim();if(!e||e.length!==6){P("Enter the 6-digit code from your authenticator app.");return}A("verify-2fa-btn",!0),_e();try{const{data:t}=await p.auth.mfa.listFactors(),a=(t?.totp||[])[0];if(!a){P("No 2FA factor found. Please re-login."),A("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In');return}const{data:i,error:s}=await p.auth.mfa.challenge({factorId:a.id});if(s)throw s;const{error:o}=await p.auth.mfa.verify({factorId:a.id,challengeId:i.id,code:e});if(o)throw o;await j(_.user.id,"login_2fa_success"),A("verify-2fa-btn",!1),ke()}catch(t){jt(),P(t.message?.includes("Invalid")?"Incorrect code. Check your authenticator and try again.":t.message),A("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In'),document.getElementById("totp-code").value="",document.getElementById("totp-code").focus()}}async function ii(){const e=document.getElementById("backup-code")?.value?.trim().toUpperCase().replace(/\s/g,"");if(!e){P("Enter a backup recovery code.");return}A("verify-backup-btn",!0);try{const{data:t}=await p.from("admin_2fa").select("backup_codes").eq("user_id",_.user.id).maybeSingle();if(!t?.backup_codes?.length){P("No backup codes found."),A("verify-backup-btn",!1,"Use Backup Code");return}if(!t.backup_codes.find(s=>(s.code||s).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")&&!s.used)){P("Backup code not found or already used."),A("verify-backup-btn",!1,"Use Backup Code");return}const i=t.backup_codes.map(s=>(s.code||s).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")?{...typeof s=="object"?s:{code:s},used:!0}:s);await p.from("admin_2fa").update({backup_codes:i}).eq("user_id",_.user.id),await j(_.user.id,"login_backup_code_used"),ke()}catch(t){P(t.message),A("verify-backup-btn",!1,"Use Backup Code")}}function Gt(){document.getElementById("back-to-login")?.addEventListener("click",()=>X("login")),document.getElementById("send-reset-btn")?.addEventListener("click",si)}async function si(){const e=document.getElementById("reset-email"),t=de(e?.value);if(!t){P("Enter your admin email address to receive a reset link.");return}A("send-reset-btn",!0),_e();const{error:a}=await p.auth.resetPasswordForEmail(t,{redirectTo:Ya()});if(A("send-reset-btn",!1,'<i data-lucide="mail" class="w-4 h-4 inline mr-1"></i> Send Reset Link'),a){P(a.message);return}Ka("Reset link sent! Check your inbox and open it from this device to continue.")}function oi(){const e=document.getElementById("login-screen");if(!e)return;const t=e.querySelector(".login-card");t&&(t.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}window.handlePasswordResetSubmit=async function(){const e=document.getElementById("new-pw-reset")?.value,t=document.getElementById("confirm-pw-reset")?.value,a=document.getElementById("reset-pw-error");if(e!==t){a&&(a.textContent="Passwords do not match.",a.classList.remove("hidden"));return}if((e||"").length<8){a&&(a.textContent="Password must be at least 8 characters.",a.classList.remove("hidden"));return}const{error:i}=await p.auth.updateUser({password:e});if(i){a&&(a.textContent=i.message,a.classList.remove("hidden"));return}u("Password updated! Please log in with your new password."),window.location.hash="",setTimeout(()=>window.location.reload(),1500)};function ke(){const e=document.getElementById("login-screen");e&&(e.style.display="none");const t=document.getElementById("admin-user-email");t&&_.user&&(t.textContent=_.user.email||"Admin"),Ze(),navigate("dashboard")}window.adminSignOut=async function(){_.user&&await j(_.user.id,"logout"),await p.auth.signOut(),_.user=null,ge(),X("login"),Ze(),Ht(),Gt()};window.logoutAllDevices=async function(){confirm("This will sign you out on ALL devices. Continue?")&&(_.user&&await j(_.user.id,"logout_all_devices"),await p.auth.signOut({scope:"global"}),_.user=null,u("Signed out from all devices."),setTimeout(()=>window.location.reload(),1200))};async function ri(){const e=document.getElementById("content");try{const[t,a,i,s]=await Promise.all([p.from("showroom_listings").select("id,listing_type,is_active,price",{count:"exact"}),p.from("payment_receipts").select("id,order_number,amount,status,created_at",{count:"exact"}).order("created_at",{ascending:!1}).limit(200),p.from("profiles").select("user_id,created_at",{count:"exact"}),p.from("product_reviews").select("id,is_approved",{count:"exact"})]),o=t.data||[],r=a.data||[],n=r.filter(x=>["approved","payment_approved","delivered"].includes(x.status)).reduce((x,H)=>x+(parseFloat(H.amount)||0),0),d=r.filter(x=>["pending","pending_verification","processing"].includes(x.status)).length,c=o.filter(x=>x.listing_type!=="property").length,m=o.filter(x=>x.listing_type==="property").length,g=o.filter(x=>x.listing_type!=="property"&&x.is_active).length,f=i.count||0,y=s.count||0,b=(s.data||[]).filter(x=>!x.is_approved).length,h=new Date,N=r.filter(x=>{const H=new Date(x.created_at);return H.getMonth()===h.getMonth()&&H.getFullYear()===h.getFullYear()}).filter(x=>["approved","payment_approved","delivered"].includes(x.status)).reduce((x,H)=>x+(parseFloat(H.amount)||0),0),z=r.slice(0,6);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-black text-white">Good ${ci()}, Admin</h2>
            <p class="text-sm text-gray-500 mt-0.5">${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}</p>
          </div>
          <button onclick="navigate('products')" class="btn-press hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Product
          </button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          ${k("Total Revenue",`$${n.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald",`$${N.toLocaleString("en-US",{maximumFractionDigits:0})} this month`)}
          ${k("Total Orders",r.length,"shopping-bag","blue",`${d} pending`)}
          ${k("Customers",f,"users","violet")}
          ${k("Products",c,"package","amber",`${g} active`)}
          ${k("Properties",m,"home","blue")}
          ${k("Reviews",y,"star","blue",`${b} pending`)}
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
            ${z.length===0?'<p class="text-xs text-gray-500 text-center py-8">No orders yet</p>':z.map(x=>`
                <div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
                  <div class="min-w-0">
                    <p class="text-xs font-bold text-white truncate">${l(x.order_number||x.id?.slice(0,8))}</p>
                    <p class="text-[10px] text-gray-500">${R(x.created_at)}</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0 ml-2">
                    <span class="text-xs font-bold text-emerald-400">$${parseFloat(x.amount||0).toLocaleString("en-US",{maximumFractionDigits:0})}</span>
                    ${I(x.status)}
                  </div>
                </div>`).join("")}
          </div>
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="zap" class="w-4 h-4 text-amber-400"></i> Quick Actions</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            ${[{icon:"plus-circle",label:"Add Product",fn:"navigate('products')"},{icon:"home",label:"Add Property",fn:"navigate('properties')"},{icon:"shopping-bag",label:"View Orders",fn:"navigate('orders')"},{icon:"star",label:"Reviews",fn:"navigate('reviews')"},{icon:"ticket",label:"Coupons",fn:"navigate('coupons')"},{icon:"settings",label:"Settings",fn:"navigate('settings')"}].map(x=>`
              <button onclick="${x.fn}" class="btn-press flex flex-col items-center gap-2 p-3 glass-soft border border-blue-500/15 rounded-xl hover:border-blue-500/30 transition">
                <i data-lucide="${x.icon}" class="w-5 h-5 text-blue-400"></i>
                <span class="text-[11px] font-bold text-gray-300">${x.label}</span>
              </button>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),Wt(r)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${l(t.message)}</div>`)}}async function C(){const e=document.getElementById("content");try{const{data:t,error:a}=await p.from("showroom_listings").select("*").neq("listing_type","property").order("created_at",{ascending:!1});let i=a?$t().filter(r=>r.listing_type!=="property"):t||[];if(Array.isArray(T)){const r=new Set(i.map(d=>d.property_id)),n=T.filter(d=>d.listing_type!=="property"&&d.property_id&&!r.has(d.property_id));n.length&&(i=i.concat(n))}i.sort((r,n)=>new Date(n.created_at||0)-new Date(r.created_at||0));const s=[...new Set(i.map(r=>r.category).filter(Boolean))].sort((r,n)=>r.localeCompare(n)),o=[...new Set(i.flatMap(r=>Array.isArray(r.tags)?r.tags:[]).filter(Boolean))].sort((r,n)=>r.localeCompare(n));window._productFilters||(window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"}),window._productSelection||(window._productSelection=new Set),e.innerHTML=`
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
          ${k("Total Products",i.length,"package","blue")}
          ${k("Published",i.filter(r=>!!r.is_active).length,"badge-check","emerald")}
          ${k("Draft / Hidden",i.filter(r=>!r.is_active).length,"file-clock","amber")}
          ${k("Featured",i.filter(r=>!!r.is_featured).length,"sparkles","violet")}
          ${k("Inventory Units",i.reduce((r,n)=>r+(parseInt(n.stock_quantity,10)||0),0),"boxes","blue")}
          ${k("Avg Price",`$${Math.round(i.reduce((r,n)=>r+(parseFloat(n.price)||0),0)/Math.max(i.length,1)).toLocaleString()}`,"dollar-sign","blue")}
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 sm:p-4 space-y-3">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-2.5">
            <div class="xl:col-span-2 relative">
              <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
              <input id="prod-search" type="search" class="input-field pl-9" placeholder="Search by name, SKU, brand, category..." value="${l(window._productFilters.search||"")}" oninput="filterProducts()">
            </div>
            <select id="prod-cat-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Categories</option>
              ${(s.length?s:Kt).map(r=>`<option value="${l(r)}" ${(window._productFilters.category||"")===r?"selected":""}>${l(r)}</option>`).join("")}
            </select>
            <select id="prod-tag-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Tags</option>
              ${o.map(r=>`<option value="${l(r)}" ${(window._productFilters.tag||"")===r?"selected":""}>${l(r)}</option>`).join("")}
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
            <div class="ml-auto flex items-center gap-1.5">
              <span class="text-[11px] text-gray-400">View:</span>
<button onclick="setProductView('card')" id="view-card-btn" class="view-toggle ${!window._productView||window._productView==="card"?"active":""}"><i data-lucide="layout-grid" class="w-3.5 h-3.5"></i> Cards</button>
              <button onclick="setProductView('table')" id="view-table-btn" class="view-toggle ${window._productView==="table"?"active":""}"><i data-lucide="table" class="w-3.5 h-3.5"></i> Table</button>
            </div>
            <span class="text-[11px] text-gray-400 ml-2"><span id="products-result-count">0</span> shown</span>
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
          <div id="products-table-wrap" class="hidden overflow-x-auto scrollbar-thin rounded-2xl border border-blue-500/15">
            <table class="w-full dt">
              <thead><tr>
                <th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th><th>Date</th><th>Actions</th>
              </tr></thead>
              <tbody id="products-table-body"></tbody>
            </table>
          </div>
          <div id="products-empty" class="hidden">${ae("package-search","No matching products","Try different filters or add a new product.",'<button onclick="showAddProductStep1()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl">Add Product</button>')}</div>
          <div class="text-center text-[11px] text-gray-500 py-2">Scroll to explore all products. Layout auto-rearranges as products are added, edited, moved, or removed.</div>
        </div>
      </div>`,window._productsData=i,zt(i),filterProducts(),updateBulkBar(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${l(t.message)}</div>`)}}function J(e){const t=parseFloat(e);return Number.isFinite(t)?t:0}function De(e){return Array.isArray(e.tags)?e.tags.filter(Boolean):[]}function ni(e){const t=parseFloat(e.discount_percent??e.discount??0);return Number.isFinite(t)&&t>0?`${Math.round(t)}% OFF`:"No discount"}function tt(e){return e.is_archived||e.availability_status==="Archived"?"archived":e.is_active?"active":"inactive"}function Fe(e){return parseInt(e.views??e.view_count??0,10)||0}function Ue(e){return parseInt(e.sales??e.sales_count??0,10)||0}function at(e){return e.sku||e.property_id||"N/A"}function li(e){const t=e.images&&e.images[0]?e.images[0]:"/fallback.svg",a=De(e),i=tt(e),s=window._productSelection?.has(e.property_id),o=I(i==="archived"?"inactive":i==="active"?"active":"inactive"),r=O(e.created_at),n=!!e.is_featured,d=e.is_active?`unpublishProduct('${e.property_id}')`:`publishProduct('${e.property_id}')`,c=e.is_active?"Unpublish":"Publish",m=e.is_active?"bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25";return`<article data-id="${e.property_id}" data-cat="${l(e.category||"")}" data-status="${i}" data-featured="${n?"featured":"standard"}" class="prod-card glass-soft border ${s?"border-blue-400/60":"border-blue-500/15"} rounded-2xl p-3.5 flex flex-col gap-3 transition hover:border-blue-400/35">
    <div class="flex items-start gap-3">
      <input type="checkbox" class="prod-check accent-blue-500 mt-1" value="${e.property_id}" ${s?"checked":""} onchange="toggleProductSelection('${e.property_id}', this.checked)">
      <div class="relative w-20 h-20 rounded-xl overflow-hidden border border-blue-500/20 shrink-0 bg-[#0b1124]">
        <img src="${l(t)}" alt="${l(e.title||"Product")}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'">
        ${n?'<span class="absolute top-1 left-1 text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-400 text-[#111827]">Featured</span>':""}
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="text-sm font-black text-white leading-snug line-clamp-2">${l(e.title||"Untitled Product")}</h3>
        <p class="text-[10px] text-gray-500 font-mono mt-0.5">SKU: ${l(at(e))}</p>
        <div class="mt-1.5 flex items-center gap-1.5 flex-wrap">
          ${o}
          <span class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20">${l(e.category||"Uncategorized")}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2 text-[11px]">
      <div class="rounded-lg bg-white/5 border border-white/10 px-2 py-1.5"><span class="text-gray-400">Price</span><p class="text-emerald-300 font-black">$${J(e.price).toLocaleString()}</p></div>
      <div class="rounded-lg bg-white/5 border border-white/10 px-2 py-1.5"><span class="text-gray-400">Discount</span><p class="text-amber-300 font-bold">${l(ni(e))}</p></div>
      <div class="rounded-lg bg-white/5 border border-white/10 px-2 py-1.5"><span class="text-gray-400">Stock</span><p class="text-gray-200 font-bold">${e.stock_quantity!=null?l(e.stock_quantity):"Unlimited"}</p></div>
      <div class="rounded-lg bg-white/5 border border-white/10 px-2 py-1.5"><span class="text-gray-400">Brand</span><p class="text-gray-200 font-bold truncate">${l(e.brand||"N/A")}</p></div>
      <div class="rounded-lg bg-white/5 border border-white/10 px-2 py-1.5"><span class="text-gray-400">Views</span><p class="text-blue-300 font-bold">${Fe(e).toLocaleString()}</p></div>
      <div class="rounded-lg bg-white/5 border border-white/10 px-2 py-1.5"><span class="text-gray-400">Sales</span><p class="text-cyan-300 font-bold">${Ue(e).toLocaleString()}</p></div>
    </div>

    <div class="flex items-center justify-between text-[10px] text-gray-500 border-t border-blue-500/10 pt-2.5">
      <span>Date Added: ${l(r)}</span>
      <span>${(e.images||[]).length} images</span>
    </div>

    <div class="flex flex-wrap gap-1.5 mt-auto">
      <button onclick="editProduct('${e.property_id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-blue-500/15 text-blue-200 hover:bg-blue-500/25 transition">Edit</button>
      <button onclick="openProductAiAssistant('${e.property_id}','products')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-fuchsia-500/15 text-fuchsia-200 hover:bg-fuchsia-500/25 transition">AI Assistant</button>
      <button onclick="quickEditProduct('${e.property_id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-indigo-500/15 text-indigo-200 hover:bg-indigo-500/25 transition">Quick Edit</button>
      <button onclick="previewProduct('${e.property_id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-sky-500/15 text-sky-200 hover:bg-sky-500/25 transition">Preview</button>
      <button onclick="duplicateProduct('${e.property_id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-white/10 text-gray-200 hover:bg-white/20 transition">Duplicate</button>
      <button onclick="${d}" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold ${m} transition">${c}</button>
      <button onclick="archiveProduct('${e.property_id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-red-500/15 text-red-200 hover:bg-red-500/25 transition">Archive</button>
      <button onclick="shareProduct('${e.property_id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-violet-500/15 text-violet-200 hover:bg-violet-500/25 transition">Share</button>
      <button onclick="deleteProduct('${e.property_id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-rose-600/15 text-rose-200 hover:bg-rose-600/25 transition">Delete</button>
      <button onclick="openProductMoreActions('${e.property_id}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-600/20 text-gray-200 hover:bg-gray-600/35 transition">More Actions</button>
    </div>

    ${a.length?`<div class="flex flex-wrap gap-1">${a.slice(0,6).map(g=>`<span class="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200">${l(g)}</span>`).join("")}</div>`:'<div class="text-[10px] text-gray-500">No tags</div>'}
  </article>`}function di(e,t){const a=[...e],i=s=>new Date(s||0).getTime()||0;return t==="oldest"?a.sort((s,o)=>i(s.created_at)-i(o.created_at)):t==="price-high"?a.sort((s,o)=>J(o.price)-J(s.price)):t==="price-low"?a.sort((s,o)=>J(s.price)-J(o.price)):t==="sales-high"?a.sort((s,o)=>Ue(o)-Ue(s)):t==="views-high"?a.sort((s,o)=>Fe(o)-Fe(s)):a.sort((s,o)=>i(o.created_at)-i(s.created_at)),a}function zt(e){const t=document.getElementById("products-grid"),a=document.getElementById("products-empty"),i=document.getElementById("products-result-count");t&&(t.innerHTML=e.map(li).join(""),i&&(i.textContent=String(e.length)),a&&a.classList.toggle("hidden",e.length>0),updateBulkBar(),window.lucide&&lucide.createIcons())}function Vt(e){const t=document.getElementById("products-table-body"),a=document.getElementById("products-result-count");t&&(t.innerHTML=e.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-10">No products found.</td></tr>':e.map(i=>{const s=i.images&&i.images[0]?i.images[0]:"/fallback.svg",o=tt(i),r=window._productSelection?.has(i.property_id),n=i.is_active?`unpublishProduct('${i.property_id}')`:`publishProduct('${i.property_id}')`,d=i.is_active?"Unpublish":"Publish";return`<tr class="prod-table-row" data-id="${i.property_id}" style="cursor:pointer">
          <td>
            <div class="flex items-center gap-2.5" onclick="editProduct('${i.property_id}')">
              <input type="checkbox" class="prod-check accent-blue-500" value="${i.property_id}" ${r?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${i.property_id}', this.checked)">
              <img src="${l(s)}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
              <div class="min-w-0">
                <p class="text-xs font-bold text-white truncate max-w-[160px]">${l(i.title||"Untitled Product")}</p>
                <p class="text-[10px] font-mono text-gray-500">${l(at(i))}</p>
              </div>
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${l(i.category||"Uncategorized")}</span></td>
          <td><span class="text-xs font-bold text-emerald-400">$${J(i.price).toLocaleString()}</span></td>
          <td><span class="text-xs text-gray-300">${i.stock_quantity!=null?l(i.stock_quantity):"Unlimited"}</span></td>
          <td>${I(o==="archived"?"inactive":o==="active"?"active":"inactive")}</td>
          <td><span class="text-xs text-gray-500">${O(i.created_at)}</span></td>
          <td>
            <div class="flex gap-1">
              <button onclick="editProduct('${i.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
              <button onclick="openProductAiAssistant('${i.property_id}','products')" class="btn-press p-1.5 text-fuchsia-400 hover:bg-fuchsia-500/10 rounded-lg transition" title="AI Assistant"><i data-lucide="sparkles" class="w-3.5 h-3.5"></i></button>
              <button onclick="quickEditProduct('${i.property_id}')" class="btn-press p-1.5 text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition" title="Quick Edit"><i data-lucide="sliders-horizontal" class="w-3.5 h-3.5"></i></button>
              <button onclick="${n}" class="btn-press p-1.5 ${i.is_active?"text-amber-400 hover:bg-amber-500/10":"text-emerald-400 hover:bg-emerald-500/10"} rounded-lg transition" title="${d}"><i data-lucide="${i.is_active?"eye-off":"eye"}" class="w-3.5 h-3.5"></i></button>
              <button onclick="archiveProduct('${i.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Archive"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
            </div>
          </td>
        </tr>`}).join(""),a&&(a.textContent=String(e.length)),window.lucide&&lucide.createIcons())}window.setProductView=function(e){window._productView=e==="table"?"table":"card";const t=document.getElementById("products-grid"),a=document.getElementById("products-table-wrap"),i=document.getElementById("view-card-btn"),s=document.getElementById("view-table-btn"),o=document.getElementById("products-empty"),r=window._productsData||[];t&&t.classList.toggle("hidden",e==="table"),a&&(a.classList.toggle("hidden",e!=="table"),e==="table"&&Vt(r)),i&&i.classList.toggle("active",e!=="table"),s&&s.classList.toggle("active",e==="table"),o&&o.classList.toggle("hidden",r.length>0)};window.filterProducts=function(){const e=window._productFilters||{};e.search=(document.getElementById("prod-search")?.value||"").trim().toLowerCase(),e.category=document.getElementById("prod-cat-filter")?.value||"",e.tag=document.getElementById("prod-tag-filter")?.value||"",e.status=document.getElementById("prod-status-filter")?.value||"",e.featured=document.getElementById("prod-featured-filter")?.value||"",e.sort=document.getElementById("prod-sort")?.value||"newest",window._productFilters=e;const t=(window._productsData||[]).filter(i=>{const s=[i.title,i.brand,i.category,at(i),De(i).join(" "),i.description].join(" ").toLowerCase();return!(e.search&&!s.includes(e.search)||e.category&&(i.category||"")!==e.category||e.tag&&!De(i).includes(e.tag)||e.status&&tt(i)!==e.status||e.featured&&e.featured==="featured"!=!!i.is_featured)}),a=di(t,e.sort);zt(a),window._productView==="table"&&Vt(a)};window.resetProductFilters=function(){window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"},["prod-search","prod-cat-filter","prod-tag-filter","prod-status-filter","prod-featured-filter","prod-sort"].forEach(t=>{const a=document.getElementById(t);a&&(t==="prod-sort"?a.value="newest":a.value="")}),filterProducts()};window.toggleProductSelection=function(e,t){window._productSelection||(window._productSelection=new Set),t?window._productSelection.add(e):window._productSelection.delete(e),updateBulkBar()};window.toggleSelectAll=function(e,t){document.querySelectorAll("."+t).forEach(a=>{a.checked=e.checked;const i=a.value;window._productSelection||(window._productSelection=new Set),e.checked?window._productSelection.add(i):window._productSelection.delete(i)}),updateBulkBar()};window.toggleSelectAllProducts=function(e){document.querySelectorAll(".prod-check").forEach(t=>{t.checked=!!e,window._productSelection||(window._productSelection=new Set),e?window._productSelection.add(t.value):window._productSelection.delete(t.value)}),updateBulkBar()};window.updateBulkBar=function(){const e=window._productSelection?window._productSelection.size:0,t=document.getElementById("bulk-actions"),a=document.getElementById("bulk-count");t&&(t.classList.toggle("hidden",e===0),e>0&&t.classList.add("flex")),a&&(a.textContent=`${e} selected`)};function $e(){return window._productSelection?[...window._productSelection]:[]}function B(e){const t=String(e?.message||e?.code||"").toLowerCase();return t.includes("row-level security")||t.includes("permission denied")||t.includes("permission denied for table")||t.includes("new row violates row-level security")||t.includes("not permitted")||t.includes("rls policy")||t.includes("duplicate key")||t.includes("violates foreign key")}function je(e,t,a){return e&&B(e)?(u(`⚠️ ${a} blocked: Your account is signed in but the database admin role is not active. Re-run the admin permission migration, or contact the owner.`,"error"),!0):e?(t&&t(),u(`${a} saved locally (DB unavailable): ${e.message||"unknown error"}`,"info"),!0):!1}window.bulkToggleActive=async function(e){const t=$e();if(!t.length)return;const a=await Promise.all(t.map(o=>{const r=Q((window._productsData||[]).find(n=>n.property_id===o));return p.from("showroom_listings").upsert({...r,property_id:o,is_active:e},{onConflict:"property_id"})}));if(a.some(o=>o.error&&B(o.error))){u(`⚠️ ${t.length} products NOT ${e?"published":"unpublished"}: database admin role blocked the write. Re-run the admin permission migration.`,"error"),window._productSelection=new Set,C();return}const s=a.filter(o=>o.error).length;u(`${t.length-s}/${t.length} products ${e?"published":"unpublished"}${s?` (${s} failed: ${a.find(o=>o.error)?.error?.message||"error"})`:""}`,s?"error":"success"),window._productSelection=new Set,C()};window.bulkDuplicateProducts=async function(){const e=$e();if(e.length){for(const t of e)await duplicateProduct(t,!0);u(`${e.length} products duplicated`),window._productSelection=new Set,C()}};window.bulkArchive=async function(){const e=$e();if(!e.length||!confirm(`Archive ${e.length} products? They will be hidden but not deleted.`))return;const t=await Promise.all(e.map(s=>p.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",s)));if(t.some(s=>s.error&&B(s.error))){u("⚠️ Archive blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,C();return}const i=t.filter(s=>s.error).length;u(`${e.length-i}/${e.length} products archived${i?` (${i} failed)`:""}`,i?"error":"success"),window._productSelection=new Set,C()};window.bulkDeleteProducts=async function(){const e=$e();if(!e.length||!confirm(`Delete ${e.length} products permanently? This action cannot be undone.`))return;const t=await Promise.all(e.map(s=>p.from("showroom_listings").delete().eq("property_id",s)));if(t.some(s=>s.error&&B(s.error))){u("⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,C();return}const i=t.filter(s=>s.error).length;u(`${e.length-i}/${e.length} products deleted${i?` (${i} failed)`:""}`,i?"error":"success"),window._productSelection=new Set,C()};window.previewProduct=async function(e){const t=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(i=>i.property_id===e)||t.data;if(!a)return u("Product not found","error");L(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Product Live Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">🔙 Back</button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="space-y-2">
            <img src="${l((a.images||[])[0]||"/fallback.svg")}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
            <div class="flex flex-wrap gap-2">${(a.images||[]).slice(0,8).map(i=>`<img src="${l(i)}" class="w-12 h-12 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">`).join("")}</div>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-black text-white">${l(a.title||"Untitled Product")}</h4>
            <div class="flex items-center gap-2">${I(a.is_active?"active":"inactive")}${a.is_featured?'<span class="badge bg-amber-500/15 text-amber-200 border-amber-500/30">Featured</span>':""}</div>
            <p class="text-xs text-gray-400">${l(a.description||"No description")}</p>
            <div class="grid grid-cols-2 gap-2 text-xs mt-2">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">$${J(a.price).toLocaleString()}</p></div>
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
    </div>`)};window.quickEditProduct=async function(e){const t=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(i=>i.property_id===e)||t.data;if(!a)return u("Product not found","error");L(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Quick Edit Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">🔙 Back</button>
        </div>
        <form onsubmit="saveQuickEditProduct(event,'${a.property_id}')" class="space-y-3">
          <div><label class="lbl">Title</label><input name="title" class="input-field" value="${l(a.title||"")}"></div>
          <div class="grid grid-cols-2 gap-2">
            <div><label class="lbl">Price</label><input type="number" step="0.01" name="price" class="input-field" value="${l(a.price||0)}"></div>
            <div><label class="lbl">Stock</label><input type="number" name="stock_quantity" class="input-field" value="${l(a.stock_quantity??"")}" placeholder="Unlimited"></div>
          </div>
          <div><label class="lbl">Availability</label><select name="availability_status" class="input-field">${["In Stock","Out of Stock","Pre-order","Limited Stock","Archived"].map(i=>`<option value="${i}" ${a.availability_status===i?"selected":""}>${i}</option>`).join("")}</select></div>
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10"><span class="text-xs text-gray-300">Featured</span><input type="checkbox" name="is_featured" ${a.is_featured?"checked":""} class="accent-blue-500"></div>
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10"><span class="text-xs text-gray-300">Published</span><input type="checkbox" name="is_active" ${a.is_active?"checked":""} class="accent-blue-500"></div>
          <button type="submit" class="btn-press w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold">Save Quick Edit</button>
        </form>
      </div>
    </div>`)};window.saveQuickEditProduct=async function(e,t){e.preventDefault();const a=new FormData(e.target),i={title:a.get("title")||"Untitled Product",price:Math.max(M,Math.min(W,parseFloat(a.get("price"))||0)),stock_quantity:a.get("stock_quantity")===""?null:parseInt(a.get("stock_quantity"),10),availability_status:a.get("availability_status")||"In Stock",is_featured:a.get("is_featured")==="on",is_active:a.get("is_active")==="on"},s=Q((window._productsData||[]).find(r=>r.property_id===t)),{error:o}=await p.from("showroom_listings").upsert({...s,...i,property_id:t},{onConflict:"property_id"});if(o){if(B(o)){u("⚠️ Save blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),G(),C();return}ka(t,i),u("Quick edit saved locally","info")}else u("Quick edit saved");G(),C()};window.publishProduct=function(e){return toggleProductActive(e,!0)};window.unpublishProduct=function(e){return toggleProductActive(e,!1)};window.shareProduct=async function(e){const t=`${window.location.origin}/details.html?id=${encodeURIComponent(e)}`;try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(t),u("Product link copied to clipboard");return}}catch{}window.prompt("Copy product link:",t)};window.deleteProduct=async function(e){if(!confirm("Delete this product permanently? This action cannot be undone."))return;const{error:t}=await p.from("showroom_listings").delete().eq("property_id",e);if(t)return B(t)?u("⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"):u("Delete failed: "+t.message,"error");u("Product deleted"),C()};window.openProductMoreActions=function(e){L(`
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
    </div>`)};function ci(){const e=new Date().getHours();return e<12?"morning":e<17?"afternoon":"evening"}function Wt(e){const t=document.getElementById("chart-revenue");if(!t)return;const a=[],i=new Date;for(let o=5;o>=0;o--){const r=new Date(i.getFullYear(),i.getMonth()-o,1);a.push({label:r.toLocaleString("default",{month:"short"}),month:r.getMonth(),year:r.getFullYear()})}const s=a.map(o=>e.filter(r=>{const n=new Date(r.created_at);return n.getMonth()===o.month&&n.getFullYear()===o.year&&["approved","payment_approved","delivered"].includes(r.status)}).reduce((r,n)=>r+(parseFloat(n.amount)||0),0));new Chart(t,{type:"bar",data:{labels:a.map(o=>o.label),datasets:[{label:"Revenue (USD)",data:s,backgroundColor:"rgba(59,130,246,.6)",borderColor:"rgb(59,130,246)",borderWidth:1,borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"#64748b",callback:o=>"$"+o.toLocaleString()},grid:{color:"rgba(59,130,246,.05)"}},x:{ticks:{color:"#64748b"},grid:{display:!1}}}}})}const Kt=["Electronics","Phones","Computers & Laptops","Fashion","Men's Fashion","Women's Fashion","Shoes","Bags & Accessories","Jewelry","Beauty & Skincare","Home & Kitchen","Furniture","Garden & Outdoor","Toys & Games","Sports & Fitness","Food & Groceries","Baby & Kids","Health & Medical","Books & Education","Office & Stationery","Pet Supplies","Musical Instruments","Cameras & Photography","Watches","Gaming","Software & Digital","Services","Cars","Luxury Cars","Motorcycles","Commercial Vehicles","Boats & Marine","Social Media Accounts","Other"],it=["Cars","Luxury Cars","Motorcycles","Commercial Vehicles","Boats & Marine"],fe={default:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Phones:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"storage",label:"Storage (e.g. 128GB)",type:"text"},{key:"ram",label:"RAM (e.g. 8GB)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],"Computers & Laptops":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"processor",label:"Processor (CPU)",type:"text"},{key:"ram",label:"RAM",type:"text"},{key:"storage",label:"Storage",type:"text"},{key:"display",label:"Display Size",type:"text"},{key:"graphics",label:"Graphics Card",type:"text"},{key:"os",label:"Operating System",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Electronics:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model Number",type:"text"},{key:"color",label:"Color",type:"text"},{key:"voltage",label:"Voltage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Shoes:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Jewelry:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"material",label:"Material (e.g. 14k Gold)",type:"text"},{key:"gemstone",label:"Gemstone",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Watches:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"movement",label:"Movement (Quartz/Automatic)",type:"text"},{key:"case_material",label:"Case Material",type:"text"},{key:"water_resistance",label:"Water Resistance",type:"text"},{key:"color",label:"Dial Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"description",label:"Description",type:"textarea",span:2}],Gaming:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"platform",label:"Platform (PS5, Xbox, PC…)",type:"text"},{key:"model",label:"Game / Model",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],"Sports & Fitness":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]};["Men's Fashion","Women's Fashion","Fashion"].forEach(e=>fe[e]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (T-Shirt, Dress…)",type:"text"},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]);it.forEach(e=>fe[e]=[{key:"title",label:"Vehicle Title",type:"text",required:!0,span:2,placeholder:"e.g. 2023 Toyota Land Cruiser V8 Turbo Diesel"},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"model_year",label:"Model Year",type:"text",placeholder:"e.g. 2023"},{key:"body_type",label:"Body Type",type:"select",options:["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"]},{key:"mileage",label:"Mileage",type:"text",placeholder:"e.g. 15,000 mi or 0 (new)"},{key:"engine",label:"Engine",type:"text",placeholder:"e.g. 4.0L V8 Turbo Diesel"},{key:"horsepower",label:"Horsepower (HP)",type:"text",placeholder:"e.g. 500 HP"},{key:"transmission",label:"Transmission",type:"select",options:["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"]},{key:"drive_type",label:"Drive Type",type:"select",options:["FWD","RWD","AWD","4WD"]},{key:"fuel_type",label:"Fuel Type",type:"select",options:["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"]},{key:"safety_features",label:"Safety Features (comma separated)",type:"text",placeholder:"ABS, Airbags, Lane Assist, Traction Control…"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}]);function Jt(e=""){return we.map(t=>`<option value="${t.code}" ${e===t.code?"selected":""}>${t.flag} ${t.name}</option>`).join("")}function Qt(e="USD"){return Rt.map(t=>`<option value="${t}" ${e===t?"selected":""}>${t}</option>`).join("")}function Oe(e){return String(e||"").split(",").map(t=>t.trim()).filter(Boolean)}function w(e,t){const a=document.querySelector(`[name="${e}"]`);!a||t==null||(a.value=t)}function Yt(e){const t=document.getElementById(e);t&&(t.min=String(M),t.max=String(W),t.placeholder=`Price (${M} - ${W})`)}function vt(e){const t=document.getElementById(`${e}-country_code`),a=document.getElementById(`${e}-country`),i=document.getElementById(`${e}-currency`);if(!t)return;const s=we.find(o=>o.code===t.value);a&&s&&(a.value=s.name),i&&s&&(i.value=Qe(s.code))}function ye(e,t){const a=document.getElementById(`${e}-image-requirement`),i=document.getElementById(`${e}-required_image_count`);i&&(i.value=t?String(t):""),a&&(t>0?(a.textContent=`This listing template requires at least ${t} images.`,a.classList.remove("hidden")):(a.textContent="",a.classList.add("hidden")))}function Xt(e,t,a){if(e>0&&t.length<e)throw new Error(`${a} needs at least ${e} images before publishing.`)}function qe(e,t="full"){const a=document.getElementById("pf-catalog_template_id")?.value||"",i=document.getElementById("pf-currency")?.value||"USD",s=parseFloat(document.getElementById("pf-price")?.value)||M,o=Ct({templateId:a,listingType:"product",category:e,countryCode:"US",currency:i,price:s});if(!o){ye("pf",it.includes(e)?24:0);return}ye("pf",o.requiredImageCount||0),w("currency",o.currency),w("subcategory",o.subcategory),w("features_text",o.features.join(", ")),w("highlights_text",o.highlights.join(", ")),w("seo_keywords_text",o.seo_keywords.join(", ")),t==="full"?(w("title",o.title),w("description",o.description),w("brand",o.brand||""),w("model",o.model||""),w("color",o.color||""),w("size",o.size||""),w("condition",o.condition||"New")):w("description",o.description)}function Ne(e="full"){const t=document.getElementById("ppf-catalog_template_id")?.value||"",a=document.getElementById("ppf-country_code")?.value||"US",i=document.getElementById("ppf-currency")?.value||"USD",s=parseFloat(document.getElementById("ppf-price")?.value)||M,o=Ct({templateId:t,listingType:"property",category:"Real Estate",countryCode:a,currency:i,price:s});if(!o){ye("ppf",24);return}ye("ppf",o.requiredImageCount||24),w("country",o.country),w("country_code",o.country_code),w("currency",o.currency),w("subcategory",o.subcategory),w("product_location",o.product_location),w("features_text",o.features.join(", ")),w("highlights_text",o.highlights.join(", ")),w("seo_keywords_text",o.seo_keywords.join(", ")),e==="full"?(w("title",o.title),w("description",o.description),w("property_type",o.property_type||""),w("bedrooms",o.bedrooms??""),w("bathrooms",o.bathrooms??""),w("building_size",o.building_size||""),w("land_size",o.land_size||""),w("furnished",o.furnished||"")):w("description",o.description)}window.applyProductCatalogTemplate=function(e,t="full"){qe(e,t)};window.applyPropertyCatalogTemplate=function(e="full"){Ne(e)};function ui(e){return fe[e]||fe.default}function pi(e,t={},a=!1){return ui(e).map(s=>{const o=t[s.key]||"",r=s.span===2?"sm:col-span-2":"",n=!a&&s.required?"required":"",d=s.placeholder||s.label;let c="";if(s.type==="select")c=`<select class="input-field" name="${s.key}" id="pf-${s.key}" ${n}>
        <option value="">Select…</option>
        ${s.options.map(m=>`<option value="${m}" ${o===m?"selected":""}>${m}</option>`).join("")}
      </select>`;else if(s.type==="textarea")c=`<textarea class="input-field" name="${s.key}" id="pf-${s.key}" rows="3" placeholder="Write a detailed description…">${l(o)}</textarea>`;else{const g=["brand","model","color","size","material","platform"].includes(s.key)?`pf-list-${s.key}`:"",y=({brand:["Apple","Samsung","Sony","LG","HP","Dell","Lenovo","Asus","Nike","Adidas","Puma","Gucci","Rolex","Toyota","Mercedes","BMW","Tesla"],model:["Pro","Ultra","Max","SE","Standard","Plus","Series 1","Series 2"],color:["Black","White","Silver","Blue","Red","Green","Gold","Gray","Pink","Brown"],size:["XS","S","M","L","XL","XXL","32","34","36","38","40","42"],material:["Cotton","Leather","Stainless Steel","Aluminum","Wood","Glass","Plastic"],platform:["PS5","Xbox Series X","Nintendo Switch","PC","Android","iOS"]}[s.key]||[]).map(b=>`<option value="${l(b)}"></option>`).join("");c=`<input type="${s.type}" class="input-field" name="${s.key}" id="pf-${s.key}" value="${l(o)}" placeholder="${d}" ${g?`list="${g}"`:""} ${n}>${g?`<datalist id="${g}">${y}</datalist>`:""}`}return`<div class="${r}"><label class="lbl">${s.label}${s.required?a?"":" *":""}</label>${c}</div>`}).join("")}window.showAddProductStep1=function(){L(`
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
        <div id="product-category-grid" class="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-80 overflow-y-auto scrollbar-thin pr-1">
          ${Kt.map(e=>`
            <button data-category="${l(e).toLowerCase()}" onclick="showAddProductStep2('${e.replace(/'/g,"\\'")}')" class="btn-press flex items-center gap-2 p-3 glass-soft border border-blue-500/15 hover:border-blue-500/40 rounded-xl transition text-left">
              <i data-lucide="tag" class="w-4 h-4 text-blue-400 shrink-0"></i>
              <span class="text-xs font-semibold text-gray-200">${l(e)}</span>
            </button>`).join("")}
        </div>
      </div>
    </div>`)};window.filterProductCategoryChoices=function(e){const t=String(e||"").trim().toLowerCase();document.querySelectorAll("#product-category-grid [data-category]").forEach(a=>{const i=!t||a.dataset.category.includes(t);a.classList.toggle("hidden",!i)})};window.showAddProductStep2=function(e,t={}){const a=!!t.property_id,i=Et("product",e),s=t.currency||"USD";L(`
    <div class="modal-overlay" onclick="if(event.target===this)closeProductFormModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between gap-3 mb-5">
          <div class="min-w-0">
            <h3 class="text-base font-black text-white">${a?"Edit":"Add"} Product — ${l(e)}</h3>
            <p class="text-xs text-gray-500 mt-0.5 truncate">${a?`Editing: ${l(t.property_id)}`:"Fill in the product details below"}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${a?'<button type="button" onclick="closeProductFormModal()" class="btn-press px-3 py-1.5 rounded-lg text-[11px] font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5"><i data-lucide="arrow-left" class="w-3.5 h-3.5"></i> Back to Product Manager</button>':'<button type="button" onclick="showAddProductStep1()" class="btn-press px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5" title="Change category"><i data-lucide="arrow-left" class="w-3.5 h-3.5"></i> Category</button>'}
            <button type="button" onclick="closeProductFormModal()" class="btn-press px-2.5 h-8 flex items-center justify-center rounded-lg text-[10px] font-bold uppercase tracking-wide text-gray-400 hover:text-white hover:bg-gray-800 transition" title="Close (X) — return to Product Manager">
              🔙 Back
            </button>
          </div>
        </div>

        <form id="product-form" onsubmit="saveProduct(event,'${l(e)}','${a?t.property_id:""}')" class="space-y-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-3">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs font-bold text-white uppercase tracking-wide">Global Catalog Autofill</p>
                <p class="text-[11px] text-gray-500 mt-1">Pick a template, country, and currency to auto-build the listing title, description, and metadata.</p>
              </div>
              <button type="button" onclick="applyProductCatalogTemplate('${l(e)}')" class="btn-press px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold rounded-xl transition">Refresh Template</button>
            </div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Catalog Template</label><select class="input-field" name="catalog_template_id" id="pf-catalog_template_id" onchange="applyProductCatalogTemplate('${l(e)}')"><option value="">Choose a template...</option>${i.map(o=>`<option value="${o.id}">${l(o.label)} - ${l(o.subcategory||o.category)}</option>`).join("")}</select></div>
              <div class="sm:col-span-2"><label class="lbl">Currency</label><select class="input-field" name="currency" id="pf-currency" onchange="applyProductCatalogTemplate('${l(e)}')">${Qt(s)}</select></div>
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
              ${(t.images||[]).map((o,r)=>ce(o,r)).join("")}
            </div>
            <p class="text-[10px] text-gray-500 mt-1">Drag to reorder • Click X to remove • First image is cover • Vehicle templates require 24 images</p>
            <div id="image-url-inputs">
              ${(t.images||[]).map((o,r)=>`<input type="hidden" name="images" id="img-url-${r}" value="${l(o)}">`).join("")}
            </div>
          </div>

          <!-- AI Auto-Listing: analyze images + expand gallery -->
          <div class="glass-soft border border-fuchsia-500/20 rounded-2xl p-4">
            <div class="flex items-start justify-between gap-3 mb-2">
              <div>
                <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-fuchsia-400"></i> AI Auto-Listing</p>
                <p class="text-[10px] text-gray-500 mt-0.5">AI looks at your photos, identifies the product, writes the title / description / specifications, detects the category, and can expand the gallery to 24 realistic images.</p>
              </div>
              <span id="pf-ai-badge" class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/25 hidden shrink-0"><i data-lucide="loader-2" class="w-3 h-3 animate-spin"></i> Working…</span>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <button type="button" onclick="runProductImageAnalysis()" class="btn-press px-3 py-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-[11px] font-bold rounded-xl transition flex items-center gap-1.5">
                <i data-lucide="scan-face" class="w-3.5 h-3.5"></i> AI Analyze & Auto-Fill
              </button>
              <select id="pf-ai-expand-count" class="input-field !w-24 !py-2 text-[11px]" title="How many AI images to generate">
                <option value="12">12 images</option>
                <option value="18">18 images</option>
                <option value="24" selected>24 images</option>
              </select>
              <button type="button" onclick="expandProductGalleryAi()" class="btn-press px-3 py-2 bg-violet-600 hover:bg-violet-500 text-white text-[11px] font-bold rounded-xl transition flex items-center gap-1.5">
                <i data-lucide="wand-2" class="w-3.5 h-3.5"></i> AI Expand Images
              </button>
            </div>
            <p id="pf-ai-status" class="text-[10px] text-gray-500 mt-2"></p>
            <div id="pf-ai-detected" class="hidden mt-2"></div>
            <div id="pf-ai-generated" class="flex flex-wrap gap-2 mt-2"></div>
          </div>

          <!-- Step 2: Product Details -->
          <div class="text-[11px] text-blue-200 font-bold uppercase tracking-wide">Step 2: Product Details</div>
          <div class="form-grid form-grid-2">
            ${pi(e,t,a)}
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
              <p class="text-[11px] text-gray-500 mt-1">Allowed price range is ${M} to ${W} in the selected currency.</p>
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
    </div>`),Zt(),ea(),Yt("pf-price"),qe(e,"pricing"),document.getElementById("pf-price")?.addEventListener("input",()=>qe(e,"pricing")),Ai(e,t.property_id||""),window._pfEscapeHandler=o=>{o.key==="Escape"&&closeProductFormModal()},document.addEventListener("keydown",window._pfEscapeHandler)};window.closeProductFormModal=function(){window._pfEscapeHandler&&(document.removeEventListener("keydown",window._pfEscapeHandler),window._pfEscapeHandler=null),clearTimeout(window._pfAiTimer),G(),C()};const mi=["Front view","Rear view","Left side","Right side","Interior","Dashboard","Steering wheel","Engine","Wheels and tires","Seats","Trunk","Headlights","Taillights","Roof","Door panels","Mirrors","Suspension","Exhaust","Gear selector","Infotainment screen","Brake system","Close-up details","Lifestyle shot","Three-quarter front angle"],bi=["Front elevation","Back view","Living room","Kitchen","Dining room","Bedroom","Bathroom","Balcony","Garage","Garden","Swimming pool","Floor plan","Map location","Street view","Neighborhood","Interior detail","Exterior detail","Backyard","Staircase","Hallway","Home office","Playroom","Utility room","Landscaping"],gi=["Front view","Back view","Left side","Right side","Fabric close-up","Collar detail","Sleeves","Buttons","Zipper","Pocket detail","Brand label","Model wearing it","Folded view","Hanging view","Color variation","Size detail","Matching accessories","Stitching detail","Hem detail","Care label","Style 1","Style 2","Packaging","On model back"],fi=["Front view","Back view","Left side","Right side","Camera module close-up","Display close-up","Ports","Buttons","Box contents","Charging cable","Screen close-up","Sim tray","Speaker grille","Bottom view","Top view","Angled front","Angled back","With protective case","Retail box","Accessories","Held in hand","Lifestyle shot","Spec sheet","Package contents"],yi=["Front view","Back view","Left side","Right side","Top view","Bottom view","Close-up detail 1","Close-up detail 2","Material texture","Packaging","In use","Lifestyle shot","Scale reference","Color detail","Brand label","Model angle 1","Model angle 2","Accessories","Box contents","Back detail","Angled view 1","Angled view 2","Detail stitching","Complete product"];function hi(e){const t=String(e||"").toLowerCase();return/(car|vehicle|boat|marine|motorcycle)/.test(t)?mi:/(house|home|property|apartment|condo|villa|mansion|estate|land|real estate)/.test(t)?bi:/(cloth|fashion|wear|shoe|bag|accessor)/.test(t)?gi:/(phone|electronic|computer|laptop|tablet|camera|watch)/.test(t)?fi:yi}function U(e,t="info"){const a=document.getElementById("pf-ai-status");a&&(a.textContent=e||"",a.className="text-[10px] mt-2 "+(t==="error"?"text-red-400":t==="ok"?"text-emerald-300":t==="warn"?"text-amber-300":"text-gray-500"))}function he(e,t){const a=document.getElementById("pf-ai-badge");a&&a.classList.toggle("hidden",!e),t&&U(t)}function vi(){clearTimeout(window._pfAiTimer),window._pfAiTimer=setTimeout(()=>{const e=document.getElementById("product-form");if(!e||e.dataset.aiBusy==="1")return;[...e.querySelectorAll('input[name="images"]')].some(a=>a.value&&!String(a.value).startsWith("blob:"))&&(U("AI detected new images — analyzing automatically…"),runProductImageAnalysis(!0))},900)}window.runProductImageAnalysis=async function(e=!1){const t=document.getElementById("product-form");if(!t||t.dataset.aiBusy==="1")return;const a=t.dataset.category||"",i=[...t.querySelectorAll('input[name="images"]')].map(s=>s.value).filter(s=>s&&!String(s).startsWith("blob:"));if(!i.length){e||U("Upload at least one image first, then AI can analyze it.","warn");return}t.dataset.aiBusy="1",he(!0,"AI is analyzing your images…");try{const s=await K.analyzeImages(i,{category:a,existingTitle:t.querySelector('[name="title"]')?.value||""});if(!s){U("AI analysis unavailable — add a Gemini, Groq, or OpenRouter API key in AI Settings (or install Ollama locally).","warn");return}xi(s,a),U("AI analysis complete. The fields were auto-filled — review them and save.","ok"),e||u("AI analyzed your images and filled the listing.","success")}catch(s){U("AI analysis failed: "+(s.message||s),"error"),e||u("AI analysis failed: "+(s.message||s),"error")}finally{t.dataset.aiBusy="0",he(!1)}};function xi(e,t){const a=document.getElementById("product-form");if(!a||!e)return;const i=(d,c)=>{if(c==null||String(c).trim()==="")return;const m=a.querySelector(`[name="${d}"]`);m&&(String(m.value||"").trim()||(m.value=c))},s=(d,c)=>{if(!Array.isArray(c)||!c.length)return;const m=a.querySelector(`[name="${d}"]`);m&&(String(m.value||"").trim()||(m.value=c.join(", ")))};i("title",e.title),i("description",e.description),i("subcategory",e.subcategory),i("brand",e.brand),i("model",e.model),i("color",e.color),i("size",e.size),i("material",e.material),i("storage",e.storage),i("ram",e.ram),i("processor",e.processor),String(a.querySelector('[name="condition"]')?.value||"").trim()||i("condition",e.condition),s("features_text",e.features),s("highlights_text",e.highlights),s("seo_keywords_text",e.seo_keywords);const o=e.specifications||{};["engine","transmission","fuel_type","horsepower","mileage","drive_type","body_type","model_year"].forEach(d=>{o[d]!=null&&String(o[d]).trim()!==""&&i(d,o[d])}),Array.isArray(o.safety_features)&&s("safety_features",o.safety_features);const r=e.category?String(e.category).trim():"",n=document.getElementById("pf-ai-detected");n&&r&&r.toLowerCase()!==String(t||"").toLowerCase()&&(n.classList.remove("hidden"),n.innerHTML=`<div class="flex items-center gap-2 p-2 rounded-lg bg-amber-500/10 border border-amber-500/25">
      <span class="text-[11px] text-amber-200">AI detected category: <b>${l(r)}</b></span>
      <button type="button" onclick="switchProductFormCategory('${l(r).replace(/'/g,"\\'")}')" class="btn-press px-2 py-1 rounded-lg text-[10px] font-bold bg-amber-500 text-[#111827] hover:bg-amber-400 transition">Switch category</button>
      <button type="button" onclick="document.getElementById('pf-ai-detected').classList.add('hidden')" class="text-amber-300 hover:text-white text-[10px] font-bold uppercase tracking-wide">🔙 Back</button>
    </div>`),window.lucide&&lucide.createIcons(),He()}window.switchProductFormCategory=function(e){const t=document.getElementById("product-form");if(!t)return;const a={},i=new FormData(t);for(const[s,o]of i.entries())s==="images"?(a.images=a.images||[],o&&!String(o).startsWith("blob:")&&a.images.push(String(o))):s==="tags"?(a.tags=a.tags||[],a.tags.push(o)):a[s]=o;a.is_featured=t.querySelector('[name="is_featured"]')?.checked||!1,a.is_active=t.querySelector('[name="is_active"]')?.checked||!1,a.property_id&&String(a.property_id).trim()?showAddProductStep2(e,a):showAddProductStep2(e,{images:a.images||[],...a})};window.expandProductGalleryAi=async function(){const e=document.getElementById("product-form");if(!e||e.dataset.aiBusy==="1")return;const t=e.dataset.category||"",a=document.getElementById("pf-ai-expand-count"),i=Math.min(24,Math.max(1,parseInt(a?.value||"24",10)||24)),o=[...e.querySelectorAll('input[name="images"]')].map(m=>m.value).filter(m=>m&&!String(m).startsWith("blob:"))[0]||document.querySelector("#image-preview img")?.src;if(!o||o==="/fallback.svg"){U("Upload at least one product image first, then AI can generate the full gallery.","warn");return}const r=hi(t),n=Math.min(i,r.length);e.dataset.aiBusy="1";const d=document.getElementById("pf-ai-generated");d&&(d.innerHTML="");let c=0;try{for(let m=0;m<n;m++){he(!0,`Generating ${m+1}/${n} — ${r[m]}…`);try{const g=await K.generateImages(`Generate a single high-quality, photorealistic marketplace photo of this EXACT product from this angle/perspective: ${r[m]}. Keep the product identical in design, color, and branding. Clean background, sharp focus, professional e-commerce product photography.`,o,1);if(g&&g[0]){const f=await _i(g[0]);f&&(wi(f),c+=1)}}catch(g){U(`Stopped at ${m}/${n}: ${g.message||g}`,"error");break}}c?(U(`Generated ${c} image${c>1?"s":""}. They are added to your gallery — save the product to keep them.`,"ok"),u(`${c} AI image(s) generated and added.`,"success")):U("No images could be generated. Check the Gemini API key / image-model access.","error")}finally{e.dataset.aiBusy="0",he(!1)}};function wi(e){const t=document.getElementById("image-preview");if(!t)return;const a=t.children.length,i=document.createElement("div");i.innerHTML=ce(e,a),t.appendChild(i.firstElementChild),ie(),ue();const s=document.getElementById("pf-ai-generated");if(s){const o=document.createElement("div");o.className="w-14 h-14 rounded-lg overflow-hidden border border-fuchsia-500/30 relative",o.innerHTML=`<img src="${l(e)}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'"><span class="absolute bottom-0 inset-x-0 text-center text-[7px] font-black bg-fuchsia-600/80 text-white">AI</span>`,s.appendChild(o)}}async function _i(e){try{const a=await(await fetch(e)).blob(),i=(a.type.split("/")[1]||"png").replace("jpeg","jpg"),s=`ai-${Date.now()}-${Math.random().toString(36).slice(2)}.${i}`;return await Se(new File([a],s,{type:a.type}))}catch{return e}}function ce(e,t){return`<div class="img-thumb ${t===0?"cover-img":""}" data-index="${t}" title="${t===0?"Cover Image":"Image "+(t+1)}">
    <img src="${l(e)}" onerror="this.src='/fallback.svg'">
    <button class="rp" onclick="document.getElementById('rp-input-${t}').click()" type="button" title="Replace image">↻</button>
    <input type="file" accept="image/*" class="rp-input" id="rp-input-${t}" onchange="replaceImage(${t}, this)">
    <button class="rm" onclick="removeImage(${t})" type="button">🔙</button>
  </div>`}function Zt(){const e=document.getElementById("drop-zone");e&&(e.addEventListener("dragover",t=>{t.preventDefault(),e.classList.add("drag-over")}),e.addEventListener("dragleave",()=>e.classList.remove("drag-over")),e.addEventListener("drop",t=>{t.preventDefault(),e.classList.remove("drag-over"),ki(t.dataTransfer.files)}))}function ea(){const e=document.getElementById("image-preview");!e||!window.Sortable||new Sortable(e,{animation:150,onEnd:()=>ie()})}window.handleImageUpload=async function(e){await ta(e.target.files)};async function ki(e){await ta(e)}async function ta(e){const t=document.getElementById("image-preview");if(t){for(const a of e){if(!a.type.startsWith("image/"))continue;const i=await Se(a);if(i){const s=t.children.length,o=document.createElement("div");o.innerHTML=ce(i,s),t.appendChild(o.firstElementChild),ie()}}ue(),window.lucide&&lucide.createIcons(),vi()}}async function Se(e){try{const{data:{session:t}}=await p.auth.getSession();if(!t)return URL.createObjectURL(e);const a=e.name.split(".").pop(),i=`products/${Date.now()}-${Math.random().toString(36).slice(2)}.${a}`,{error:s}=await p.storage.from("product-images").upload(i,e,{contentType:e.type,upsert:!1});if(s)return URL.createObjectURL(e);const{data:o}=p.storage.from("product-images").getPublicUrl(i);return o.publicUrl}catch{return URL.createObjectURL(e)}}window.removeImage=function(e){const t=document.getElementById("image-preview");if(!t)return;const a=[...t.children];a[e]&&a[e].remove(),ie(),ue()};window.replaceImage=async function(e,t){const a=document.getElementById("image-preview");if(!a||!t||!t.files||!t.files[0])return;const i=t.files[0];if(!i.type.startsWith("image/")){u("Please choose an image file.","error");return}const s=await Se(i);if(!s)return;const r=[...a.querySelectorAll(".img-thumb")][e];if(!r)return;const n=r.querySelector("img");n&&(n.src=s),ie(),ue(),u("Image replaced. Save changes to apply.","info")};function ie(){const e=document.getElementById("image-preview"),t=document.getElementById("image-url-inputs");!e||!t||(t.innerHTML="",[...e.querySelectorAll(".img-thumb")].forEach((a,i)=>{const s=a.querySelector("img");if(!s)return;const o=document.createElement("input");o.type="hidden",o.name="images",o.id=`img-url-${i}`,o.value=s.src,t.appendChild(o),a.dataset.index=i;const r=a.querySelector(".rm");r&&r.setAttribute("onclick",`removeImage(${i})`);const n=a.querySelector(".rp");n&&n.setAttribute("onclick",`document.getElementById('rp-input-${i}').click()`);const d=a.querySelector(".rp-input");d&&(d.id=`rp-input-${i}`,d.onchange=()=>replaceImage(i,d))}))}function ue(){const e=document.getElementById("image-preview");e&&[...e.querySelectorAll(".img-thumb")].forEach((t,a)=>{t.classList.toggle("cover-img",a===0),t.title=a===0?"Cover Image":`Image ${a+1}`})}function aa(e,t){return`kco_product_form_autosave_${e}_${t||"new"}`}function $i(e){const t=new FormData(e),a={images:[],tags:[],fields:{}};for(const[i,s]of t.entries())i==="images"?s&&!String(s).startsWith("blob:")&&a.images.push(String(s)):i==="tags"?a.tags.push(String(s)):a.fields[i]=String(s);return a.fields.is_featured=e.querySelector('[name="is_featured"]')?.checked?"on":"",a.fields.is_active=e.querySelector('[name="is_active"]')?.checked?"on":"",a}function Si(e,t){if(!t||typeof t!="object")return!1;const a=t.fields||{};Object.entries(a).forEach(([s,o])=>{const r=e.querySelector(`[name="${s}"]`);r&&(r.type==="checkbox"?r.checked=o==="on"||o===!0:r.value=o==null?"":String(o))});const i=Array.isArray(t.tags)?t.tags:[];if(e.querySelectorAll('input[name="tags"]').forEach(s=>{s.checked=i.includes(s.value)}),Array.isArray(t.images)){const s=document.getElementById("image-preview");s&&(s.innerHTML=t.images.map((o,r)=>ce(o,r)).join(""),ie(),ue())}return!0}function He(){const e=document.getElementById("product-review-content"),t=document.getElementById("product-form");if(!e||!t)return;const a=t.querySelector('[name="title"]')?.value||"Untitled Product",i=t.querySelector('[name="brand"]')?.value||"N/A",s=parseFloat(t.querySelector('[name="price"]')?.value||"0")||0,o=t.querySelector('[name="stock_quantity"]')?.value,r=o===""||o==null?"Unlimited":o,n=_.section==="products"&&document.querySelector("#product-form")?.dataset?.category||"",d=[...t.querySelectorAll('input[name="tags"]:checked')].map(g=>g.value),c=document.querySelectorAll("#image-preview .img-thumb").length,m=t.querySelector('[name="is_active"]')?.checked;e.innerHTML=`
    <div class="grid grid-cols-2 gap-2">
      <div><span class="text-gray-500">Title</span><p class="text-white font-semibold">${l(a)}</p></div>
      <div><span class="text-gray-500">Brand</span><p class="text-white font-semibold">${l(i)}</p></div>
      <div><span class="text-gray-500">Price</span><p class="text-emerald-300 font-semibold">$${s.toLocaleString()}</p></div>
      <div><span class="text-gray-500">Stock</span><p class="text-white font-semibold">${l(r)}</p></div>
      <div><span class="text-gray-500">Images</span><p class="text-white font-semibold">${c}</p></div>
      <div><span class="text-gray-500">Status</span><p class="${m?"text-emerald-300":"text-amber-300"} font-semibold">${m?"Published":"Draft / Hidden"}</p></div>
    </div>
    <div class="mt-2 text-gray-400">Tags: ${d.length?l(d.join(", ")):"No tags selected"}</div>
    ${n?`<div class="text-gray-500 mt-1">Category: ${l(n)}</div>`:""}
  `}window.previewProductDraft=function(){const e=document.getElementById("product-form");if(!e)return;const t=document.querySelector("#image-preview img")?.src||"/fallback.svg",a=e.querySelector('[name="title"]')?.value||"Untitled Product",i=e.querySelector('[name="description"]')?.value||"No description yet.",s=e.querySelector('[name="brand"]')?.value||"N/A",o=parseFloat(e.querySelector('[name="price"]')?.value||"0")||0,r=e.dataset.category||"Product",n=e.querySelector('[name="stock_quantity"]')?.value||"Unlimited",d=e.querySelector('[name="is_active"]')?.checked;L(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Live Draft Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">🔙 Back</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="${l(t)}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
          <div class="space-y-2">
            <h4 class="text-xl font-black text-white">${l(a)}</h4>
            <div class="flex items-center gap-2">${I(d?"active":"inactive")}<span class="badge bg-blue-500/10 text-blue-300 border-blue-500/20">${l(r)}</span></div>
            <p class="text-sm text-gray-400">${l(i)}</p>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">$${o.toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${l(n)}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2 col-span-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${l(s)}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>`)};function Ai(e,t){const a=document.getElementById("product-form");if(!a)return;a.dataset.category=e;const i=aa(e,t),s=document.getElementById("product-autosave-note");try{const d=localStorage.getItem(i);if(d){const c=JSON.parse(d);Si(a,c)&&s&&(s.textContent="Autosave restored from your last session.",s.classList.remove("hidden"))}}catch{}const o=()=>{try{localStorage.setItem(i,JSON.stringify($i(a))),s&&(s.textContent=`Auto saved at ${new Date().toLocaleTimeString()}`,s.classList.remove("hidden"))}catch{}He()};let r;const n=()=>{clearTimeout(r),r=setTimeout(o,500)};a.querySelectorAll("input, textarea, select").forEach(d=>{d.addEventListener("input",n),d.addEventListener("change",n)}),He()}window.saveProduct=async function(e,t,a){e.preventDefault();const i=e.target,s=i.querySelector("[type=submit][name=action][value=publish]"),o=a?"One-Click Publish Changes":"One-Click Publish Product";s&&(s.disabled=!0,s.textContent="Saving…");try{const r=new FormData(i),n={};for(const[f,y]of r.entries())f==="images"?(n.images=n.images||[],y&&!String(y).startsWith("blob:")&&n.images.push(String(y))):f==="tags"?(n.tags=n.tags||[],n.tags.push(y)):n[f]=y;n.is_featured=i.querySelector('[name="is_featured"]')?.checked?"on":"",n.is_active=i.querySelector('[name="is_active"]')?.checked?"on":"";const d=r.get("action")==="draft",c=f=>Oe(f),m=f=>{const y=["model","storage","ram","processor","display","material","gender","platform","voltage","engine","transmission","fuel_type","horsepower","mileage","drive_type","body_type","model_year"],b={};for(const h of y){const $=f[h];b[h]=$!=null&&String($).trim()!==""?$:null}if(f.safety_features){const h=c(f.safety_features);b.safety_features=h.length?h:null}return b};let g;if(a){let f=Q((window._productsData||[]).find(E=>E.property_id===a));if(!f){const{data:E}=await p.from("showroom_listings").select("*").eq("property_id",a).maybeSingle();f=E?Q(E):null}if(!f)throw new Error("Could not load the current product. Refresh the page and try again.");const y=(E,Te)=>{const ha=E===""||E==null?"":E,va=Te===""||Te==null?"":Te;return String(ha).trim()===String(va).trim()},b={};["title","description","currency","subcategory","brand","color","size","condition","warranty","availability_status","model_year","body_type","mileage","engine","horsepower","transmission","drive_type","fuel_type"].forEach(E=>{y(n[E],f[E])||(b[E]=n[E]==null||n[E]===""?null:n[E])});const h=n.price===""||n.price==null?null:parseFloat(n.price);y(h,f.price)||(b.price=h==null?f.price:Math.max(M,Math.min(W,h)));const $=n.stock_quantity===""||n.stock_quantity==null?null:parseInt(n.stock_quantity,10);y($,f.stock_quantity)||(b.stock_quantity=Number.isFinite($)?$:null);const N=c(n.features_text);y(N.join("||"),(Array.isArray(f.features)?f.features:[]).join("||"))||(b.features=N);const z=n.tags||[];y(z.join("||"),(Array.isArray(f.tags)?f.tags:[]).join("||"))||(b.tags=z);const x=c(n.highlights_text);y(x.join("||"),(Array.isArray(f.highlights)?f.highlights:[]).join("||"))||(b.highlights=x);const H=c(n.seo_keywords_text);y(H.join("||"),(Array.isArray(f.seo_keywords)?f.seo_keywords:[]).join("||"))||(b.seo_keywords=H);const pt=n.images||[];y(pt.join("||"),(Array.isArray(f.images)?f.images:[]).join("||"))||(b.images=pt);const mt=n.is_featured==="on";!!f.is_featured!==mt&&(b.is_featured=mt);const bt=d?!1:n.is_active==="on";!!f.is_active!==bt&&(b.is_active=bt);const ya=m(n),gt={...f.specifications&&typeof f.specifications=="object"?f.specifications:{},...ya};if(JSON.stringify(gt)!==JSON.stringify(f.specifications||{})&&(b.specifications=gt),Object.keys(b).length===0){u("No changes detected — nothing was saved.","info"),s&&(s.disabled=!1,s.textContent=o);return}const ft={...f,...b,property_id:a,updated_at:new Date().toISOString()};if({error:g}=await p.from("showroom_listings").upsert(ft,{onConflict:"property_id"}),g&&je(g,()=>Me(ft),"Product update")){s&&(s.disabled=!1,s.textContent=o);return}u(d?"Draft saved!":`Product updated — ${Object.keys(b).length} change(s) saved.`)}else{const f=parseInt(n.required_image_count||"0",10)||(it.includes(t)?24:0);if(Xt(f,n.images||[],"This listing"),!n.title||!n.title.trim())throw new Error("A product title is required.");if(n.price===""||n.price==null||!isFinite(parseFloat(n.price)))throw new Error("A price is required.");if(!n.condition)throw new Error("Please choose the product condition.");const y={listing_type:"product",category:t,subcategory:n.subcategory||null,title:n.title.trim(),description:n.description||"",price:Math.max(M,Math.min(W,parseFloat(n.price)||0)),currency:n.currency||"USD",country:"",country_code:"",listing_status:"sale",state:"",city:"",product_location:"",latitude:null,longitude:null,is_active:d?!1:n.is_active==="on",is_featured:n.is_featured==="on",brand:n.brand||null,color:n.color||null,size:n.size||null,condition:n.condition||null,warranty:n.warranty||null,availability_status:n.availability_status||"In Stock",stock_quantity:n.stock_quantity?parseInt(n.stock_quantity):null,images:n.images||[],features:c(n.features_text).length?c(n.features_text):n.tags||[],tags:n.tags||[],highlights:c(n.highlights_text),seo_keywords:c(n.seo_keywords_text),is_ai_generated:!!n.catalog_template_id,ai_generated_fields:n.catalog_template_id?["title","description","features","highlights","seo_keywords"]:[],specifications:m(n)},b=Ye();if(y.property_id=b,{error:g}=await p.from("showroom_listings").insert(y),g&&je(g,()=>Me({...y,property_id:y.property_id}),"Product publish")){s&&(s.disabled=!1,s.textContent=o);return}u(d?"Draft saved!":"Product published!")}try{localStorage.removeItem(aa(t,a))}catch{}closeProductFormModal()}catch(r){u("Error: "+r.message,"error"),s&&(s.disabled=!1,s.textContent=o)}};window.editProduct=async function(e){const{data:t,error:a}=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=a?null:t;if(i||(i=kt(e)),i||(i=(Array.isArray(T)?T.find(s=>s.property_id===e):null)||null),!i)return u("Product not found","error");showAddProductStep2(i.category||"Other",i)};window.toggleProductActive=async function(e,t){const a=Q((window._productsData||[]).find(s=>s.property_id===e)),{error:i}=await p.from("showroom_listings").upsert({...a,property_id:e,is_active:t,availability_status:t?"In Stock":"Out of Stock"},{onConflict:"property_id"});if(i)return B(i)?u(`⚠️ ${t?"Publish":"Unpublish"} blocked: database admin role rejected the write. Re-run the admin permission migration.`,"error"):u(`${t?"Publish":"Unpublish"} failed: ${i.message}`,"error");u(t?"Product published":"Product unpublished"),C()};window.duplicateProduct=async function(e,t=!1){const{data:a}=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();if(!a)return;const{id:i,property_id:s,created_at:o,updated_at:r,...n}=a,d=Ye();await p.from("showroom_listings").insert({...n,property_id:d,title:a.title+" (Copy)",is_active:!1}),t||(u("Product duplicated"),C())};window.archiveProduct=async function(e){confirm("Archive this product? It will be hidden from the website but can be restored.")&&(await p.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",e),u("Product archived"),C())};const Ii=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","Commercial Building","Hotel","Land","Other"];async function st(){const e=document.getElementById("content");try{const{data:t,error:a}=await p.from("showroom_listings").select("*").eq("listing_type","property").order("created_at",{ascending:!1});let i=a?$t().filter(s=>s.listing_type==="property"):t||[];if(Array.isArray(T)){const s=new Set(i.map(r=>r.property_id)),o=T.filter(r=>r.listing_type==="property"&&r.property_id&&!s.has(r.property_id));o.length&&(i=i.concat(o))}i.sort((s,o)=>new Date(o.created_at||0)-new Date(s.created_at||0)),window._propertiesData=i,e.innerHTML=`
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
                        <img src="${l((s.images||[])[0]||"/fallback.svg")}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
                        <div><p class="text-xs font-bold text-white truncate max-w-[160px]">${l(s.title)}</p><p class="text-[10px] font-mono text-gray-500">${l(s.property_id)}</p></div>
                      </div>
                    </td>
                    <td><span class="text-xs text-gray-300">${l(s.property_type||s.category)}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${l([s.city,s.state,s.country].filter(Boolean).join(", ")||"—")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(s.price||0).toLocaleString()}</span></td>
                    <td>${I(s.listing_status||"sale")} ${I(s.is_active?"active":"inactive")}</td>
                    <td>
                      <div class="flex gap-1">
                        <button onclick="editProperty('${s.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
                        <button onclick="openProductAiAssistant('${s.property_id}','properties')" class="btn-press p-1.5 text-fuchsia-400 hover:bg-fuchsia-500/10 rounded-lg transition" title="AI Assistant"><i data-lucide="sparkles" class="w-3.5 h-3.5"></i></button>
                        <button onclick="archiveProduct('${s.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
                      </div>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.showAddPropertyModal=function(e={}){const t=!!e.property_id,a=Et("property","Real Estate"),i=e.country_code||"US",s=e.currency||Qe(i);L(`
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
              <div class="sm:col-span-2"><label class="lbl">Property Template</label><select class="input-field" name="catalog_template_id" id="ppf-catalog_template_id" onchange="applyPropertyCatalogTemplate()"><option value="">Choose a property template...</option>${a.map(o=>`<option value="${o.id}">${l(o.label)} - ${l(o.propertyType||o.subcategory)}</option>`).join("")}</select></div>
              <div><label class="lbl">Country</label><select class="input-field" name="country_code" id="ppf-country_code" onchange="syncPropertyCountry(); applyPropertyCatalogTemplate()">${Jt(i)}</select></div>
              <div><label class="lbl">Currency</label><select class="input-field" name="currency" id="ppf-currency" onchange="applyPropertyCatalogTemplate()">${Qt(s)}</select></div>
            </div>
            <p id="ppf-image-requirement" class="text-[11px] text-amber-300">This property flow expects 24 images for a complete gallery.</p>
            <input type="hidden" name="required_image_count" id="ppf-required_image_count" value="24">
          </div>

          <div class="form-grid form-grid-2">
            <div class="sm:col-span-2"><label class="lbl">Property Title *</label><input class="input-field" name="title" value="${l(e.title||"")}" required placeholder="e.g. Cozy 3-Bedroom Family Home"></div>
            <div><label class="lbl">Property Type *</label><select class="input-field" name="property_type" required>
              ${Ii.map(o=>`<option value="${o}" ${e.property_type===o?"selected":""}>${o}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Listing Status</label><select class="input-field" name="listing_status">
              <option value="sale" ${e.listing_status!=="rent"?"selected":""}>For Sale</option>
              <option value="rent" ${e.listing_status==="rent"?"selected":""}>For Rent</option>
            </select></div>
            <div><label class="lbl">Price *</label><input type="number" class="input-field" id="ppf-price" name="price" value="${e.price||""}" required placeholder="0"></div>
            <div><label class="lbl">Country Name *</label><input class="input-field" id="ppf-country" name="country" value="${l(e.country||"")}" required placeholder="United States"></div>
            <div><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${l(e.subcategory||"")}" placeholder="e.g. Villas, Mansions, Hotels"></div>
            <div><label class="lbl">State / Province</label><input class="input-field" name="state" value="${l(e.state||"")}" placeholder="e.g. California"></div>
            <div><label class="lbl">City</label><input class="input-field" name="city" value="${l(e.city||"")}" placeholder="e.g. Los Angeles"></div>
            <div><label class="lbl">Town / Local Area</label><input class="input-field" name="town" value="${l(e.town||"")}" placeholder="Neighborhood or district"></div>
            <div><label class="lbl">Latitude</label><input type="number" step="any" class="input-field" name="latitude" value="${l(e.latitude||"")}" placeholder="40.7128"></div>
            <div><label class="lbl">Longitude</label><input type="number" step="any" class="input-field" name="longitude" value="${l(e.longitude||"")}" placeholder="-74.0060"></div>
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
            <div class="sm:col-span-2"><label class="lbl">Description</label><textarea class="input-field" name="description" rows="3" placeholder="Describe the property…">${l(e.description||"")}</textarea></div>
            <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${l((e.features||[]).join(", "))}" placeholder="Swimming Pool, Garden, Garage…"></div>
            <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${l((e.highlights||[]).join(", "))}" placeholder="Prime location, map-ready post, 24-image gallery"></div>
            <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${l((e.seo_keywords||[]).join(", "))}" placeholder="mansion, villa, property investment"></div>
            <div class="sm:col-span-2"><label class="lbl">Property Location</label><input class="input-field" name="product_location" value="${l(e.product_location||"")}" placeholder="Estate, district, city, landmark"></div>
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
              ${(e.images||[]).map((o,r)=>ce(o,r)).join("")}
            </div>
            <div id="image-url-inputs">
              ${(e.images||[]).map((o,r)=>`<input type="hidden" name="images" id="img-url-${r}" value="${l(o)}">`).join("")}
            </div>
          </div>

          <div class="flex gap-3 pt-2">
            <button type="submit" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition">${t?"💾 Save Changes":"🚀 Publish Property"}</button>
          </div>
        </form>
      </div>
    </div>`),Zt(),ea(),Yt("ppf-price"),window.syncPropertyCountry=function(){vt("ppf")},vt("ppf"),Ne("pricing"),document.getElementById("ppf-price")?.addEventListener("input",()=>Ne("pricing"))};window.saveProperty=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=Object.fromEntries(a.entries()),s=a.getAll("images").filter(c=>c&&!c.startsWith("blob:")),o=(i.features_text||"").split(",").map(c=>c.trim()).filter(Boolean),r=t?0:parseInt(i.required_image_count||"24",10)||24;Xt(r,s,"This property");const n={listing_type:"property",category:i.property_type||"Real Estate",subcategory:i.subcategory||null,title:i.title,description:i.description||"",price:Math.max(M,Math.min(W,parseFloat(i.price)||0)),currency:i.currency||"USD",country:i.country||"",country_code:(i.country_code||"").toUpperCase(),state:i.state||"",city:i.city||"",town:i.town||"",product_location:i.product_location||"",latitude:i.latitude?parseFloat(i.latitude):null,longitude:i.longitude?parseFloat(i.longitude):null,property_type:i.property_type||"",listing_status:i.listing_status||"sale",bedrooms:i.bedrooms?parseInt(i.bedrooms):null,bathrooms:i.bathrooms?parseInt(i.bathrooms):null,building_size:i.building_size||"",land_size:i.land_size||"",parking_spaces:i.parking_spaces?parseInt(i.parking_spaces):null,furnished:i.furnished||"",features:o,images:s,highlights:Oe(i.highlights_text),seo_keywords:Oe(i.seo_keywords_text),is_ai_generated:!!i.catalog_template_id,ai_generated_fields:i.catalog_template_id?["title","description","features","highlights","seo_keywords","country","country_code","product_location"]:[],is_active:i.is_active==="on"};let d;if(t){n.property_id=t;const c=Q((window._propertiesData||[]).find(m=>m.property_id===t)||(window._productsData||[]).find(m=>m.property_id===t));({error:d}=await p.from("showroom_listings").upsert({...c,...n},{onConflict:"property_id"}))}else n.property_id=Ye(),{error:d}=await p.from("showroom_listings").insert(n);d&&je(d,()=>Me({...n,property_id:t||n.property_id}),t?"Property update":"Property publish")||(u(t?"Property updated!":"Property published!"),G(),st())};window.editProperty=async function(e){const{data:t,error:a}=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=a?null:t;i||(i=kt(e)),i||(i=(Array.isArray(T)?T.find(s=>s.property_id===e):null)||null),i&&showAddPropertyModal(i)};const Pi=["pending_verification","payment_received","payment_approved","processing","shipped","in_transit","out_for_delivery","delivered","cancelled","rejected"];async function ia(){const e=document.getElementById("content");try{const{data:t}=await p.from("payment_receipts").select("*").order("created_at",{ascending:!1}).limit(300),a=t||[],i=["All","Pending","Paid","Processing","Shipped","Delivered","Cancelled"];let s="All";e.innerHTML=`
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
                ${a.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-12">No orders yet</td></tr>':a.map(o=>Ei(o)).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._ordersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}function Ei(e){return`<tr class="order-row" data-status="${e.status}" data-search="${l(e.order_number)} ${l(e.full_name)} ${l(e.email)}">
    <td><span class="font-mono text-xs text-blue-400 font-bold">${l(e.order_number||e.id?.slice(0,8))}</span></td>
    <td>
      <p class="text-xs font-bold text-white">${l(e.full_name||"Guest")}</p>
      <p class="text-[10px] text-gray-500">${l(e.email)}</p>
    </td>
    <td><p class="text-xs text-gray-300 truncate max-w-[140px]">${l(e.listing_title||e.listing_id||"—")}</p></td>
    <td class="hidden sm:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(e.amount||0).toLocaleString()}</span></td>
    <td>${I(e.status)}</td>
    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${O(e.created_at)}</span></td>
    <td>
      <button onclick="viewOrder('${e.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="View / Update">
        <i data-lucide="eye" class="w-3.5 h-3.5"></i>
      </button>
    </td>
  </tr>`}window.filterOrders=function(e){document.querySelectorAll("#order-tabs .tab-btn").forEach(t=>t.classList.toggle("active",t.textContent===e)),document.querySelectorAll(".order-row").forEach(t=>{const a=t.dataset.status||"",i=e==="All"||e==="Pending"&&["pending_verification","payment_received","order_placed"].includes(a)||e==="Paid"&&["payment_approved"].includes(a)||e==="Processing"&&["processing"].includes(a)||e==="Shipped"&&["shipped","in_transit","out_for_delivery"].includes(a)||e==="Delivered"&&a==="delivered"||e==="Cancelled"&&["cancelled","rejected"].includes(a);t.style.display=i?"":"none"})};window.searchOrders=function(e){const t=e.toLowerCase();document.querySelectorAll(".order-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewOrder=async function(e){const t=(window._ordersData||[]).find(a=>a.id===e);t&&L(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Order ${l(t.order_number)}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
        </div>
        <div class="space-y-3 text-sm">
          <div class="grid grid-cols-2 gap-3">
            ${[["Customer",t.full_name],["Email",t.email],["Phone",t.phone],["Amount",Dt(t.amount,t.currency)],["Product",t.listing_title||t.listing_id],["Date",R(t.created_at)]].map(([a,i])=>`<div><p class="text-[10px] text-gray-500 uppercase font-bold mb-0.5">${a}</p><p class="text-xs text-white font-medium">${l(i)||"—"}</p></div>`).join("")}
          </div>
          ${t.transaction_reference?`<div class="p-3 glass-soft border border-blue-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Transaction Reference</p><p class="text-xs font-mono text-blue-300">${l(t.transaction_reference)}</p></div>`:""}
          ${t.additional_notes?`<div class="p-3 glass-soft border border-amber-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Notes</p><p class="text-xs text-gray-300">${l(t.additional_notes)}</p></div>`:""}
          <div>
            <label class="lbl">Update Order Status</label>
            <div class="flex gap-2">
              <select id="order-status-select" class="input-field flex-1">
                ${Pi.map(a=>`<option value="${a}" ${t.status===a?"selected":""}>${a.replace(/_/g," ")}</option>`).join("")}
              </select>
              <button onclick="updateOrderStatus('${t.id}')" class="btn-press px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.updateOrderStatus=async function(e){const t=document.getElementById("order-status-select")?.value;if(!t)return;const{error:a}=await p.from("payment_receipts").update({status:t}).eq("id",e);if(a){u(a.message,"error");return}u("Order status updated"),G(),ia()};async function Ci(){const e=document.getElementById("content");try{const{data:t}=await p.from("profiles").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
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
                ${a.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-12">No customers yet</td></tr>':a.map(i=>`<tr class="cust-row" data-search="${l(i.display_name)} ${l(i.user_id)}">
                    <td>
                      <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                          <i data-lucide="user" class="w-4 h-4 text-blue-400"></i>
                        </div>
                        <div>
                          <p class="text-xs font-bold text-white">${l(i.display_name||"Anonymous")}</p>
                          <p class="text-[10px] font-mono text-gray-500">${l(i.user_id?.slice(0,12))}…</p>
                        </div>
                      </div>
                    </td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-300">${l(i.country_code||"—")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${O(i.created_at)}</span></td>
                    <td>
                      <button onclick="viewCustomer('${i.user_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="eye" class="w-3.5 h-3.5"></i></button>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._customersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.searchCustomers=function(e){const t=e.toLowerCase();document.querySelectorAll(".cust-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewCustomer=async function(e){const t=(window._customersData||[]).find(i=>i.user_id===e);if(!t)return;const{data:a}=await p.from("payment_receipts").select("order_number,amount,currency,status,created_at").eq("user_id",e).order("created_at",{ascending:!1}).limit(20);L(`
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
            <p class="font-black text-white">${l(t.display_name||"Anonymous")}</p>
            <p class="text-xs text-gray-400 mt-0.5">Joined ${O(t.created_at)} · ${l(t.country_code||"Unknown country")}</p>
          </div>
        </div>
        <h4 class="text-xs font-bold text-gray-400 uppercase mb-3">Purchase History</h4>
        ${(a||[]).length===0?'<p class="text-xs text-gray-500 py-4 text-center">No orders yet</p>':(a||[]).map(i=>`<div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
            <div><p class="text-xs font-bold text-white font-mono">${l(i.order_number)}</p><p class="text-[10px] text-gray-500">${R(i.created_at)}</p></div>
            <div class="flex items-center gap-2">${I(i.status)}<span class="text-xs font-bold text-emerald-400">$${parseFloat(i.amount).toLocaleString()}</span></div>
          </div>`).join("")}
      </div>
    </div>`)};async function ot(){const e=document.getElementById("content");try{const{data:t}=await p.from("product_reviews").select("*, showroom_listings(title, property_id)").order("created_at",{ascending:!1}).limit(200),a=t||[],i=a.filter(s=>!s.is_approved).length;e.innerHTML=`
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
          ${a.length===0?ae("star","No Reviews","Customer reviews will appear here."):a.map(s=>Li(s)).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}function Li(e){const t=Array.from({length:5},(a,i)=>i<e.rating?"★":"☆").join("");return`<div class="review-card glass-soft border ${e.is_approved?"border-blue-500/15":"border-amber-500/20"} rounded-xl p-4" data-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-amber-400 font-bold text-sm">${t}</span>
          <span class="text-xs text-gray-500">${O(e.created_at)}</span>
          ${e.is_approved?'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>':'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending Approval</span>'}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${l(e.review_text||"—")}</p>
        <p class="text-[11px] text-blue-400 mt-1.5">On: ${l(e.showroom_listings?.title||e.listing_id)}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${e.is_approved?"":`<button onclick="approveReview('${e.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>`}
        <button onclick="deleteReview('${e.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`}window.filterReviewTab=function(e){["all","pending","approved"].forEach(t=>document.getElementById(`rtab-${t}`)?.classList.toggle("active",t===e)),document.querySelectorAll(".review-card").forEach(t=>{const a=e==="all"||e==="pending"&&t.dataset.approved==="false"||e==="approved"&&t.dataset.approved==="true";t.style.display=a?"":"none"})};window.approveReview=async function(e){await p.from("product_reviews").update({is_approved:!0}).eq("id",e),u("Review approved"),ot()};window.deleteReview=async function(e){confirm("Delete this review permanently?")&&(await p.from("product_reviews").delete().eq("id",e),u("Review deleted"),ot())};async function sa(){const e=document.getElementById("content");try{const{data:t}=await p.from("support_messages").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Messages & Support</h2>
        <div class="space-y-3">
          ${a.length===0?ae("message-circle","No Messages","Customer support messages will appear here."):a.map(i=>`
              <div class="glass-soft border ${i.is_read?"border-blue-500/10":"border-blue-400/30"} rounded-xl p-4 ${i.is_read?"":"ring-1 ring-blue-500/10"}">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs font-black text-white">${l(i.full_name||i.name||"Anonymous")}</span>
                      ${i.is_read?"":'<span class="badge bg-blue-500/15 text-blue-400 border-blue-500/20">New</span>'}
                      <span class="text-[10px] text-gray-500 ml-auto">${R(i.created_at)}</span>
                    </div>
                    <p class="text-[11px] text-blue-400 mb-1">${l(i.email||"—")}</p>
                    <p class="text-xs text-gray-300">${l(i.message||i.body||"—")}</p>
                    ${i.subject?`<p class="text-[11px] text-gray-500 mt-1">Subject: ${l(i.subject)}</p>`:""}
                  </div>
                  <div class="flex gap-1 shrink-0">
                    <button onclick="markMsgRead('${i.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Mark Read"><i data-lucide="check" class="w-4 h-4"></i></button>
                  </div>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.markMsgRead=async function(e){await p.from("support_messages").update({is_read:!0}).eq("id",e),u("Marked as read"),sa()};async function Ae(){const e=document.getElementById("content");try{const{data:t}=await p.from("coupons").select("*").order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
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
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${i.min_amount?"$"+i.min_amount:"—"}</span></td>
                    <td>${I(i.is_active?"active":"inactive")}</td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${O(i.expires_at)}</span></td>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.showAddCouponModal=function(){L(`
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
    </div>`)};window.saveCoupon=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={code:a.code.toUpperCase(),discount_type:a.discount_type,discount_value:parseFloat(a.discount_value),min_amount:a.min_amount?parseFloat(a.min_amount):null,usage_limit:a.usage_limit?parseInt(a.usage_limit):null,expires_at:a.expires_at||null,is_active:!0},{error:s}=await p.from("coupons").insert(i);if(s){u(s.message,"error");return}u("Coupon created!"),G(),Ae()};window.toggleCoupon=async function(e,t){await p.from("coupons").update({is_active:t}).eq("id",e),u(t?"Coupon activated":"Coupon deactivated"),Ae()};window.deleteCoupon=async function(e){confirm("Delete this coupon?")&&(await p.from("coupons").delete().eq("id",e),u("Coupon deleted"),Ae())};async function Ti(){const e=document.getElementById("content");try{const{data:t}=await p.from("notification_log").select("*").order("created_at",{ascending:!1}).limit(100),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Notifications</h2>
        <div class="space-y-2">
          ${a.length===0?ae("bell","No Notifications","System notifications will appear here."):a.map(i=>`
              <div class="glass-soft border border-blue-500/10 rounded-xl p-3.5 flex items-start gap-3">
                <div class="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <i data-lucide="bell" class="w-4 h-4 text-blue-400"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-0.5">
                    <span class="text-xs font-bold text-white">${l(i.subject||i.event_type||"Notification")}</span>
                    ${I(i.status)}
                    <span class="text-[10px] text-gray-500 ml-auto">${R(i.created_at)}</span>
                  </div>
                  <p class="text-[11px] text-gray-400">${l(i.recipient||i.order_number)}</p>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}const oa=["Featured","Sponsored","Featured Collection","Discover","Promotion"],Bi=[{id:"real-estate",name:"Real Estate & Properties"},{id:"marketplace",name:"Marketplace Showroom"}];let me=null;function Mi(e){const t={Featured:"bg-blue-500/10 text-blue-300 border-blue-500/30",Sponsored:"bg-violet-500/10 text-violet-300 border-violet-500/30","Featured Collection":"bg-amber-500/10 text-amber-300 border-amber-500/30",Discover:"bg-emerald-500/10 text-emerald-300 border-emerald-500/30",Promotion:"bg-blue-500/10 text-blue-300 border-blue-500/30"};return`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${t[e]||t.Featured}">${l(e)}</span>`}function Ri(e){return!e||!e.link_type||e.link_type==="none"?'<span class="text-[10px] text-gray-500">No link</span>':e.link_type==="product"?`<span class="text-[10px] text-blue-300"><i data-lucide="package" class="w-3 h-3 inline mr-1"></i>Product · ${l(e.link_target||"")}</span>`:e.link_type==="category"?`<span class="text-[10px] text-emerald-300"><i data-lucide="tag" class="w-3 h-3 inline mr-1"></i>Category · ${l(e.link_target||"")}</span>`:`<span class="text-[10px] text-amber-300"><i data-lucide="layout-grid" class="w-3 h-3 inline mr-1"></i>Section · ${l(e.link_target||"")}</span>`}function Di(e){return e.video_url?`<video src="${l(e.video_url)}" ${e.poster_url?`poster="${l(e.poster_url)}"`:""} class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" muted preload="metadata"></video>`:e.image_url?`<img src="${l(e.image_url)}" class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" onerror="this.remove()">`:'<div class="w-24 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="megaphone" class="w-6 h-6 text-blue-400"></i></div>'}async function ra(){if(me)return me;const e=[],t=new Set,a=[],i=o=>{if(!o||!o.property_id)return;e.push({id:o.property_id,title:o.title||o.property_id});const r=o.category||"";r&&!t.has(r)&&(t.add(r),a.push(r))};try{T.forEach(i)}catch{}try{const{data:o,error:r}=await p.from("showroom_listings").select("property_id,title,category").order("created_at",{ascending:!1});!r&&o&&o.forEach(i)}catch{}return["Women","Men","Kids","Home","Sports","Jewellery","Electronics","Cars","Motorcycles","Phones","Computers","Furniture","Beauty","Fashion","Real Estate","Bicycles","Trucks","Land","Kitchen","Food","Pets","Books","Toys","Services"].forEach(o=>{t.has(o)||(t.add(o),a.push(o))}),me={products:e,categories:a,sections:Bi},me}async function Fi(e){try{const{data:{session:t}}=await p.auth.getSession();if(!t)return u("Sign in to upload media","error"),null;const a=(e.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),i=/^(mp4|webm|mov|m4v)$/.test(a)||e.type.startsWith("video/"),s=`ads/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${a}`,{error:o}=await p.storage.from("advertisements").upload(s,e,{contentType:e.type,upsert:!1});if(o)return u("Upload failed: "+o.message,"error"),null;const{data:r}=p.storage.from("advertisements").getPublicUrl(s);return{url:r.publicUrl,isVideo:i}}catch{return u("Upload failed","error"),null}}function ve(e,t){const a=document.getElementById("ad-media-preview");if(!a)return;const i=document.getElementById("ad-hidden-video"),s=document.getElementById("ad-hidden-image");i&&(i.value=t?e:""),s&&(s.value=t?"":e),a.innerHTML=t?`<video src="${l(e)}" class="w-full h-40 object-cover rounded-xl" controls muted playsinline></video>`:`<img src="${l(e)}" class="w-full h-40 object-cover rounded-xl">`,window.lucide&&lucide.createIcons()}window.onAdMediaPicked=async function(e){const t=e.files&&e.files[0];if(!t)return;if(!(t.type.startsWith("image/")||t.type.startsWith("video/"))){u("Choose an image or video file","error");return}const i=await Fi(t);if(!i){e.value="";return}ve(i.url,i.isVideo);const s=document.getElementById("ad-media-url");s&&(s.value=i.url)};window.onAdMediaUrl=function(e){const t=(e.value||"").trim();if(!t)return;const a=/\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(t);ve(t,a)};function rt(e,t,a){const i=document.getElementById("ad-link-target-wrap");if(!i)return;if(!t||t==="none"){i.innerHTML='<p class="text-[10px] text-gray-500">This ad is informational and will not be clickable.</p>';return}let s="";t==="product"?s='<option value="">Select a product…</option>'+e.products.map(o=>`<option value="${l(o.id)}" ${String(a)===String(o.id)?"selected":""}>${l(o.id)} — ${l((o.title||"").slice(0,60))}</option>`).join(""):t==="category"?s='<option value="">Select a category…</option>'+e.categories.map(o=>`<option value="${l(o)}" ${a===o?"selected":""}>${l(o)}</option>`).join(""):t==="section"&&(s='<option value="">Select a section…</option>'+e.sections.map(o=>`<option value="${l(o.id)}" ${a===o.id?"selected":""}>${l(o.name)}</option>`).join("")),i.innerHTML=`<label class="lbl">Target</label><select class="input-field" name="link_target">${s}</select>`}function na(e){return`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${e?"Edit Advertisement":"Add Advertisement"}</h3>
          <button onclick="closeModal()" class="btn-press text-xs font-bold text-gray-400 hover:text-white transition">✕ Close</button>
        </div>
        <form id="ad-form" onsubmit="saveAd(event)" class="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          <input type="hidden" name="id" value="${e?e.id:""}">
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Title *</label><input class="input-field" name="title" required value="${l(e&&e.title?e.title:"")}" placeholder="e.g. Summer Sale 2026"></div>
            <div><label class="lbl">Ad Label</label>
              <select class="input-field" name="ad_label">
                ${oa.map(t=>`<option value="${t}" ${e&&e.ad_label===t?"selected":""}>${t}</option>`).join("")}
              </select>
            </div>
          </div>
          <div><label class="lbl">Message</label><textarea class="input-field" name="description" rows="2" placeholder="Short message shown on the ad…">${l(e&&e.description?e.description:"")}</textarea></div>

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
    </div>`}window.onAdLinkTypeChange=function(){const e=window._adLinkCache||{products:[],categories:[],sections:[]},t=document.querySelector('#ad-form select[name="link_type"]'),a=t?t.value:"none";rt(e,a,"")};window.showAddAdModal=async function(){const e=await ra();window._adLinkCache=e,L(na(null)),rt(e,"none","")};window.showEditAdModal=async function(e){const t=await ra();window._adLinkCache=t;const{data:a}=await p.from("promotions").select("*").eq("id",e).maybeSingle();if(!a){u("Ad not found","error");return}L(na(a)),a.image_url?ve(a.image_url,!1):a.video_url&&ve(a.video_url,!0),rt(t,a.link_type||"none",a.link_target||"")};window.saveAd=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=a.id||"",s={title:a.title,description:a.description||"",ad_label:oa.includes(a.ad_label)?a.ad_label:"Featured",image_url:a.image_url||null,video_url:a.video_url||null,link_type:["none","product","category","section"].includes(a.link_type)?a.link_type:"none",link_target:a.link_target||null,start_date:a.start_date?new Date(a.start_date+"T00:00:00").toISOString():null,end_date:a.end_date?new Date(a.end_date+"T23:59:59").toISOString():null,is_active:a.is_active==="on",promo_type:"banner"};if(!s.image_url&&!s.video_url){u("Add an image or video for the ad","error");return}const o=e.target.querySelector('button[type="submit"]');o&&(o.disabled=!0);try{if(i){const{error:r}=await p.from("promotions").update(s).eq("id",i);if(r)throw r;u("Ad updated!")}else{const{error:r}=await p.from("promotions").insert(s);if(r)throw r;u("Ad created!")}}catch(r){u(r.message||"Save failed","error"),o&&(o.disabled=!1);return}G(),se()};window.togglePromo=async function(e,t){const{error:a}=await p.from("promotions").update({is_active:t}).eq("id",e);if(a){u(a.message,"error");return}u(t?"Ad activated":"Ad deactivated"),se()};window.moveAd=async function(e,t){try{const{data:a,error:i}=await p.from("promotions").select("id,sort_order").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1});if(i)throw i;const s=a||[],o=s.findIndex(c=>c.id===e),r=o+t;if(o<0||r<0||r>=s.length){u("Already at the edge","info");return}const n=s[o],d=s[r];await p.from("promotions").update({sort_order:d.sort_order}).eq("id",n.id),await p.from("promotions").update({sort_order:n.sort_order}).eq("id",d.id),u("Order updated")}catch(a){u(a.message||"Reorder failed","error")}se()};window.deletePromo=async function(e){if(confirm("Delete this ad? This cannot be undone.")){try{const{data:t}=await p.from("promotions").select("image_url,video_url,poster_url").eq("id",e).maybeSingle();if(t){const i=[t.image_url,t.video_url,t.poster_url].filter(Boolean).map(s=>{const o=/\/object\/public\/advertisements\/(.+)$/.exec(s);return o?decodeURIComponent(o[1]):null}).filter(Boolean);if(i.length)try{await p.storage.from("advertisements").remove(i)}catch{}}const{error:a}=await p.from("promotions").delete().eq("id",e);if(a)throw a;u("Ad deleted")}catch(t){u(t.message||"Delete failed","error")}se()}};async function se(){const e=document.getElementById("content");try{const{data:t}=await p.from("promotions").select("*").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
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
          ${a.length===0?ae("megaphone","No Ads","Create your first showcase ad — add a title, image or video, label, and optional product link.",'<button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"><i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement</button>'):a.map((i,s)=>`
              <div class="glass-soft border border-blue-500/15 rounded-xl p-4 flex items-center gap-4">
                ${Di(i)}
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap">
                    <p class="text-sm font-black text-white truncate">${l(i.title||i.name)}</p>
                    ${Mi(i.ad_label||"Featured")}
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${l(i.description||"")}</p>
                  <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${i.is_active?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":"bg-gray-500/10 text-gray-400 border-gray-500/20"}">${i.is_active?"Active":"Inactive"}</span>
                    ${Ri(i)}
                    <span class="text-[10px] text-gray-500">${O(i.start_date)}${i.start_date?" → ":""}${O(i.end_date)}</span>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.renderAds=se;const ee=[{id:"gemini",name:"Google Gemini",tag:"FREE",color:"blue",icon:"sparkles",kf:"gemini_key",ph:"AIzaSy…",signup:"https://aistudio.google.com/apikey",models:["gemini-3-flash-preview","gemini-3.1-flash-lite-preview"],mf:"gemini_model",dm:"gemini-3-flash-preview",desc:"Google's best free AI. Great for coding, writing apps & websites.",free_tier:"15 req/min · 1M tokens/day — Free forever"},{id:"groq",name:"Groq (Llama 3.3)",tag:"FREE",color:"blue",icon:"zap",kf:"groq_key",ph:"gsk_…",signup:"https://console.groq.com/keys",models:["llama-3.3-70b-versatile","llama-3.1-8b-instant","mixtral-8x7b-32768","gemma2-9b-it"],mf:"groq_model",dm:"llama-3.3-70b-versatile",desc:"Fastest free AI inference. Runs Llama 3.3 & Mixtral. Excellent for coding.",free_tier:"30 req/min · 6,000 req/day free"},{id:"deepseek",name:"DeepSeek Coder",tag:"FREE",color:"cyan",icon:"search",kf:"deepseek_key",ph:"sk-…",signup:"https://platform.deepseek.com/api_keys",models:["deepseek-coder","deepseek-chat","deepseek-reasoner"],mf:"deepseek_model",dm:"deepseek-coder",desc:"Top-ranked coding AI. DeepSeek Coder beats GPT-4 on code benchmarks.",free_tier:"$5 free credit on signup"},{id:"mistral",name:"Mistral / Codestral",tag:"FREE",color:"violet",icon:"wind",kf:"mistral_key",ph:"…key",signup:"https://console.mistral.ai/api-keys",models:["codestral-latest","mistral-small-latest","open-mistral-7b","open-mixtral-8x7b"],mf:"mistral_model",dm:"codestral-latest",desc:"Codestral is purpose-built for code. Free for open-source projects.",free_tier:"Free tier · Codestral free for open-source"},{id:"cohere",name:"Cohere",tag:"FREE",color:"emerald",icon:"cpu",kf:"cohere_key",ph:"…key",signup:"https://dashboard.cohere.com/api-keys",models:["command-r-plus","command-r","command-light"],mf:"cohere_model",dm:"command-r",desc:"Free trial API. Great for chat, code, and text generation.",free_tier:"Free trial · No credit card needed"},{id:"huggingface",name:"Hugging Face",tag:"FREE",color:"amber",icon:"box",kf:"hf_key",ph:"hf_…",signup:"https://huggingface.co/settings/tokens",models:["Qwen/Qwen2.5-Coder-32B-Instruct","meta-llama/Meta-Llama-3-8B-Instruct","mistralai/Mistral-7B-Instruct-v0.3"],mf:"hf_model",dm:"Qwen/Qwen2.5-Coder-32B-Instruct",desc:"500k+ open-source models free. Qwen 2.5 Coder is top-ranked for code.",free_tier:"Free Inference API on open models"},{id:"together",name:"Together AI",tag:"FREE",color:"pink",icon:"users",kf:"together_key",ph:"…key",signup:"https://api.together.ai/settings/api-keys",models:["Qwen/Qwen2.5-Coder-32B-Instruct","meta-llama/Llama-3.3-70B-Instruct-Turbo","deepseek-ai/DeepSeek-V3"],mf:"together_model",dm:"Qwen/Qwen2.5-Coder-32B-Instruct",desc:"$5 free credit. Runs DeepSeek V3 and Qwen 2.5 Coder at high speed.",free_tier:"$5 free credit on signup"},{id:"openrouter",name:"OpenRouter",tag:"FREE",color:"rose",icon:"git-branch",kf:"openrouter_key",ph:"sk-or-…",signup:"https://openrouter.ai/keys",models:["google/gemini-2.0-flash-exp:free","meta-llama/llama-3.3-70b-instruct:free","deepseek/deepseek-chat:free","qwen/qwen-2.5-coder-32b-instruct:free"],mf:"openrouter_model",dm:"google/gemini-2.0-flash-exp:free",desc:'Routes to ALL AI providers. Has 100% free ":free" models including Gemini & Llama.',free_tier:"Many completely FREE models with :free tag"},{id:"cerebras",name:"Cerebras",tag:"FREE",color:"teal",icon:"brain",kf:"cerebras_key",ph:"csk-…",signup:"https://cloud.cerebras.ai/",models:["llama3.3-70b","llama3.1-70b","llama3.1-8b"],mf:"cerebras_model",dm:"llama3.3-70b",desc:"World's fastest AI (2000+ tokens/sec). Free tier with Llama 3.3.",free_tier:"Free tier · 60 req/min"},{id:"fireworks",name:"Fireworks AI",tag:"FREE",color:"red",icon:"flame",kf:"fireworks_key",ph:"fw_…",signup:"https://fireworks.ai/api-keys",models:["accounts/fireworks/models/qwen2p5-coder-32b-instruct","accounts/fireworks/models/llama-v3p3-70b-instruct","accounts/fireworks/models/deepseek-v3"],mf:"fireworks_model",dm:"accounts/fireworks/models/qwen2p5-coder-32b-instruct",desc:"$1 free credit/month. DeepSeek V3, Qwen Coder, Llama 3.3 at ultra-fast speed.",free_tier:"$1 free credit every month"},{id:"github",name:"GitHub Models",tag:"FREE",color:"gray",icon:"github",kf:"github_key",ph:"ghp_…",signup:"https://github.com/marketplace/models",models:["meta-llama/Llama-3.3-70B-Instruct","mistral-ai/Mistral-7B-Instruct-v0.3","openai/gpt-4o","microsoft/Phi-3-mini-4k-instruct"],mf:"github_model",dm:"meta-llama/Llama-3.3-70B-Instruct",desc:"FREE with a GitHub account. Access Llama, Mistral, GPT-4o and Phi via your GitHub token.",free_tier:"Completely FREE with any GitHub account"},{id:"cloudflare",name:"Cloudflare Workers AI",tag:"FREE",color:"blue",icon:"cloud",kf:"cloudflare_key",ph:"…token",signup:"https://dash.cloudflare.com/profile/api-tokens",models:["@cf/meta/llama-3.3-70b-instruct","@cf/deepseek-ai/deepseek-r1-distill-llama-70b","@hf/thebloke/codellama-7b-instruct-awq"],mf:"cloudflare_model",dm:"@cf/meta/llama-3.3-70b-instruct",desc:"FREE 10,000 req/day. Runs Llama, CodeLlama, DeepSeek R1 on Cloudflare's global edge network.",free_tier:"10,000 requests/day FREE forever"},{id:"sambanova",name:"SambaNova Cloud",tag:"FREE",color:"violet",icon:"server",kf:"sambanova_key",ph:"…key",signup:"https://cloud.sambanova.ai/",models:["Meta-Llama-3.3-70B-Instruct","Meta-Llama-3.1-405B-Instruct","Meta-Llama-3.2-3B-Instruct"],mf:"sambanova_model",dm:"Meta-Llama-3.3-70B-Instruct",desc:"FREE fastest Llama 405B inference in the world. Purpose-built AI chips for maximum speed.",free_tier:"Free tier with Llama 3.1 405B"},{id:"hyperbolic",name:"Hyperbolic",tag:"FREE",color:"cyan",icon:"activity",kf:"hyperbolic_key",ph:"…key",signup:"https://app.hyperbolic.xyz/settings",models:["deepseek-ai/DeepSeek-V3","Qwen/Qwen2.5-Coder-32B-Instruct","meta-llama/Llama-3.3-70B-Instruct"],mf:"hyperbolic_model",dm:"Qwen/Qwen2.5-Coder-32B-Instruct",desc:"$10 FREE credit on signup. Run DeepSeek V3 and Qwen 2.5 Coder at competitive speed.",free_tier:"$10 free credit on signup"},{id:"novita",name:"Novita AI",tag:"FREE",color:"emerald",icon:"layers",kf:"novita_key",ph:"…key",signup:"https://novita.ai/settings#key-management",models:["qwen/qwen2.5-coder-32b-instruct","meta-llama/llama-3.3-70b-instruct","deepseek/deepseek-v3"],mf:"novita_model",dm:"qwen/qwen2.5-coder-32b-instruct",desc:"Free credits on signup. Runs Qwen Coder, DeepSeek V3, Llama 3.3 at affordable prices.",free_tier:"Free credits on signup"},{id:"perplexity",name:"Perplexity AI",tag:"FREE",color:"blue",icon:"search-code",kf:"perplexity_key",ph:"pplx-…",signup:"https://www.perplexity.ai/settings/api",models:["llama-3.1-sonar-small-128k-online","llama-3.1-sonar-large-128k-online","llama-3.1-8b-instruct"],mf:"perplexity_model",dm:"llama-3.1-sonar-small-128k-online",desc:"Online AI with real-time web search. Sonar model can search the web to answer coding questions.",free_tier:"Free tier available · $5 starting credit"},{id:"replicate",name:"Replicate",tag:"FREE",color:"amber",icon:"repeat",kf:"replicate_key",ph:"r8_…",signup:"https://replicate.com/account/api-tokens",models:["meta/codellama-70b-instruct","meta/llama-3.3-70b-instruct","deepseek-ai/deepseek-coder-v2"],mf:"replicate_model",dm:"meta/codellama-70b-instruct",desc:"$0.50 free credit. Thousands of open-source AI models including specialized coding models.",free_tier:"$0.50 free credit · No card for many models"},{id:"ai21",name:"AI21 Labs (Jamba)",tag:"FREE",color:"pink",icon:"wand-2",kf:"ai21_key",ph:"…key",signup:"https://studio.ai21.com/account/api-key",models:["jamba-1.5-large","jamba-1.5-mini","j2-ultra","j2-mid"],mf:"ai21_model",dm:"jamba-1.5-mini",desc:"Free tier with Jamba 1.5. Long context (256K tokens) model good for analyzing large codebases.",free_tier:"Free tier · No credit card required"},{id:"lepton",name:"Lepton AI",tag:"FREE",color:"teal",icon:"atom",kf:"lepton_key",ph:"…key",signup:"https://www.lepton.ai/login",models:["llama3-3-70b","deepseek-v3","qwen2-5-coder-32b-instruct","mistral-7b"],mf:"lepton_model",dm:"qwen2-5-coder-32b-instruct",desc:"Free credits. Runs Qwen Coder, DeepSeek V3, Llama 3.3 with fast inference.",free_tier:"Free credits on signup"},{id:"ollama",name:"Ollama (Local)",tag:"FREE",color:"gray",icon:"monitor",kf:"ollama_url",ph:"http://localhost:11434",signup:"https://ollama.ai/download",models:["codellama:13b","qwen2.5-coder:7b","deepseek-coder:6.7b","llama3.3:70b","phi3:mini"],mf:"ollama_model",dm:"qwen2.5-coder:7b",desc:"100% FREE — runs entirely on YOUR computer. No API key needed. No internet. No limits. Install Ollama app.",free_tier:"100% FREE forever — runs locally offline"}],F={border:{blue:"border-blue-500/50",blue:"border-blue-500/50",cyan:"border-cyan-500/50",violet:"border-violet-500/50",emerald:"border-emerald-500/50",amber:"border-amber-500/50",pink:"border-pink-500/50",rose:"border-rose-500/50",teal:"border-teal-500/50",red:"border-red-500/50",gray:"border-gray-500/50"},bg:{blue:"bg-blue-500/8",blue:"bg-blue-500/8",cyan:"bg-cyan-500/8",violet:"bg-violet-500/8",emerald:"bg-emerald-500/8",amber:"bg-amber-500/8",pink:"bg-pink-500/8",rose:"bg-rose-500/8",teal:"bg-teal-500/8",red:"bg-red-500/8",gray:"bg-gray-500/8"},text:{blue:"text-blue-400",blue:"text-blue-400",cyan:"text-cyan-400",violet:"text-violet-400",emerald:"text-emerald-400",amber:"text-amber-400",pink:"text-pink-400",rose:"text-rose-400",teal:"text-teal-400",red:"text-red-400",gray:"text-gray-400"},badge:{blue:"bg-blue-500/15 text-blue-300",blue:"bg-blue-500/15 text-blue-300",cyan:"bg-cyan-500/15 text-cyan-300",violet:"bg-violet-500/15 text-violet-300",emerald:"bg-emerald-500/15 text-emerald-300",amber:"bg-amber-500/15 text-amber-300",pink:"bg-pink-500/15 text-pink-300",rose:"bg-rose-500/15 text-rose-300",teal:"bg-teal-500/15 text-teal-300",red:"bg-red-500/15 text-red-300",gray:"bg-gray-500/15 text-gray-300"}};async function la(){const e=document.getElementById("content");try{let t=function(n){const d=s===n.id,c=i[n.kf],m=i[n.mf]||n.dm;return`
        <div class="glass-soft border ${d?F.border[n.color]+" "+F.bg[n.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard" id="apc-${n.id}">
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-8 h-8 ${F.bg[n.color]} rounded-lg flex items-center justify-center shrink-0">
                <i data-lucide="${n.icon}" class="w-4 h-4 ${F.text[n.color]}"></i>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h3 class="text-xs font-black text-white">${l(n.name)}</h3>
                  <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full ${F.badge[n.color]}">${n.tag}</span>
                </div>
                <p class="text-[9px] text-emerald-400 font-bold mt-0.5 leading-tight truncate">${l(n.free_tier)}</p>
              </div>
            </div>
            <label class="flex items-center gap-1 cursor-pointer shrink-0">
              <input type="radio" name="active_provider" value="${n.id}" ${d?"checked":""} class="accent-blue-500" onchange="highlightAI('${n.id}')">
              <span class="text-[9px] font-bold ${d?F.text[n.color]:"text-gray-600"}">USE</span>
            </label>
          </div>
          <p class="text-[11px] text-gray-400 leading-relaxed">${l(n.desc)}</p>
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="lbl mb-0">${n.id==="ollama"?"Ollama Server URL":"API Key"}</label>
              <a href="${n.signup}" target="_blank" rel="noopener" class="text-[10px] font-bold ${F.text[n.color]} hover:underline flex items-center gap-0.5">
                <i data-lucide="external-link" class="w-3 h-3"></i>${n.id==="ollama"?"Install Ollama":"Get Free Key"}
              </a>
            </div>
            <div class="relative">
              <input type="${n.id==="ollama"?"text":"password"}" class="input-field pr-16 text-xs" name="${n.kf}"
                placeholder="${c?"••••"+c.slice(-4):n.ph}">
              ${c?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>'}
            </div>
          </div>
          <div>
            <label class="lbl">Model</label>
            <select class="input-field text-xs" name="${n.mf}">
              ${n.models.map(g=>`<option value="${g}" ${m===g?"selected":""}>${g}</option>`).join("")}
            </select>
          </div>
        </div>`};const{data:a}=await p.from("ai_settings").select("*").limit(1).maybeSingle(),i=a||{},s=i.active_provider||"gemini",o=ee.slice(0,10),r=ee.slice(10);e.innerHTML=`
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
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">${o.map(t).join("")}</div>
          </div>

          <div class="glass-soft border border-violet-500/15 rounded-2xl p-4">
            <h3 class="text-sm font-black text-white mb-3 flex items-center gap-2"><i data-lucide="plus-circle" class="w-4 h-4 text-violet-400"></i> Batch 2 — 10 More Free AI Providers</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">${r.map(t).join("")}</div>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="sliders" class="w-4 h-4 text-blue-400"></i> Feature Toggles</h3>
            ${[{key:"customer_ai_enabled",label:"Customer AI Chatbot",desc:"Customers can chat with AI on your website",val:i.customer_ai_enabled},{key:"product_ai_enabled",label:"AI Product Creation",desc:"AI auto-fills product descriptions",val:i.product_ai_enabled!==!1},{key:"ai_code_assist",label:"AI Code Assistant",desc:"AI helps build and edit your website code",val:i.ai_code_assist!==!1},{key:"ai_moderation",label:"AI Content Moderation",desc:"Auto-approve/reject customer reviews using AI",val:i.ai_moderation}].map(n=>`
              <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
                <div><p class="text-xs font-bold text-white">${n.label}</p><p class="text-[11px] text-gray-500">${n.desc}</p></div>
                <label class="toggle-switch"><input type="checkbox" name="${n.key}" ${n.val?"checked":""}><span class="toggle-slider"></span></label>
              </div>`).join("")}
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            💾 Save All AI Settings
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.highlightAI=function(e){ee.forEach(t=>{const a=document.getElementById("apc-"+t.id);if(!a)return;const i=t.id===e;a.className=`glass-soft border ${i?F.border[t.color]+" "+F.bg[t.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard`;const s=a.querySelector("input[type=radio] + span");s&&(s.className=`text-[9px] font-bold ${i?F.text[t.color]:"text-gray-600"}`)})};window.saveAiSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={active_provider:a.active_provider||"gemini",customer_ai_enabled:a.customer_ai_enabled==="on",product_ai_enabled:a.product_ai_enabled==="on",ai_code_assist:a.ai_code_assist==="on",ai_moderation:a.ai_moderation==="on"};ee.forEach(s=>{a[s.mf]&&(i[s.mf]=a[s.mf]);const o=(a[s.kf]||"").trim();o&&!o.startsWith("••••")&&o!==""&&(i[s.kf]=o)}),i.gemini_key&&(i.gemini_api_key=i.gemini_key),i.openai_key&&(i.openai_api_key=i.openai_key);try{const{data:s}=await p.from("ai_settings").select("id").limit(1).maybeSingle();let o;if(s?.id?{error:o}=await p.from("ai_settings").update(i).eq("id",s.id):{error:o}=await p.from("ai_settings").insert(i),o){u("Save failed: "+o.message,"error"),console.error("[AI Save]",o);return}await K.reload(),u("✅ AI settings saved! Keys are active and auto-switch is ON.","success"),setTimeout(()=>la(),600)}catch(s){u("Unexpected error: "+s.message,"error"),console.error("[AI Save]",s)}};const Be="kco_ai_cooldowns",Ui=60*1e3,K={_cfg:null,async reload(){const{data:e,error:t}=await p.from("ai_settings").select("*").limit(1).maybeSingle();if(t){console.warn("[aiClient] Could not load settings:",t.message),this._cfg={};return}const a=e||{};!a.openai_key&&a.openai_api_key&&(a.openai_key=a.openai_api_key),!a.gemini_key&&a.gemini_api_key&&(a.gemini_key=a.gemini_api_key),this._cfg=a},async getConfig(){return this._cfg||await this.reload(),this._cfg},async getOrderedProviders(){const e=await this.getConfig(),t=e.active_provider||"gemini",a=this._getCooldowns(),i=Date.now(),s=ee.filter(d=>e[d.kf]&&e[d.kf].trim()),o=s.filter(d=>d.id===t),r=s.filter(d=>d.id!==t);return[...o,...r].sort((d,c)=>{const m=(a[d.id]||0)>i?1:0,g=(a[c.id]||0)>i?1:0;return m-g})},_getCooldowns(){try{return JSON.parse(localStorage.getItem(Be)||"{}")}catch{return{}}},_setCooldown(e){const t=this._getCooldowns();t[e]=Date.now()+Ui,localStorage.setItem(Be,JSON.stringify(t))},_clearCooldown(e){const t=this._getCooldowns();delete t[e],localStorage.setItem(Be,JSON.stringify(t))},_buildRequest(e,t,a,i){const s=t[e.kf],o=t[e.mf]||e.dm;switch(e.id){case"gemini":{const r=`https://generativelanguage.googleapis.com/v1beta/models/${o}:generateContent?key=${s}`,n={contents:a.map(d=>({role:d.role==="assistant"?"model":"user",parts:[{text:d.content}]}))};return{url:r,method:"POST",headers:{"Content-Type":"application/json"},body:n,parse:d=>d.candidates?.[0]?.content?.parts?.[0]?.text||""}}case"groq":{const r="https://api.groq.com/openai/v1/chat/completions",n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:n,parse:d=>d.choices?.[0]?.message?.content||""}}case"deepseek":{const r="https://api.deepseek.com/v1/chat/completions",n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:n,parse:d=>d.choices?.[0]?.message?.content||""}}case"mistral":{const r="https://api.mistral.ai/v1/chat/completions",n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:n,parse:d=>d.choices?.[0]?.message?.content||""}}case"cohere":{const r="https://api.cohere.com/v2/chat",n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:n,parse:d=>d.message?.content?.[0]?.text||d.text||""}}case"huggingface":{const r=`https://api-inference.huggingface.co/models/${o}/v1/chat/completions`,n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:n,parse:d=>d.choices?.[0]?.message?.content||""}}case"together":{const r="https://api.together.xyz/v1/chat/completions",n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:n,parse:d=>d.choices?.[0]?.message?.content||""}}case"openrouter":{const r="https://openrouter.ai/api/v1/chat/completions",n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`,"HTTP-Referer":window.location.origin},body:n,parse:d=>d.choices?.[0]?.message?.content||""}}case"cerebras":{const r="https://api.cerebras.ai/v1/chat/completions",n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:n,parse:d=>d.choices?.[0]?.message?.content||""}}case"fireworks":{const r="https://api.fireworks.ai/inference/v1/chat/completions",n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:n,parse:d=>d.choices?.[0]?.message?.content||""}}case"github":{const r="https://models.inference.ai.azure.com/chat/completions",n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:n,parse:d=>d.choices?.[0]?.message?.content||""}}case"cloudflare":{const[r,n]=(s||"").split("|"),d=`https://api.cloudflare.com/client/v4/accounts/${r}/ai/run/${o}`,c={messages:a};return{url:d,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n||s}`},body:c,parse:m=>m.result?.response||""}}case"sambanova":{const r="https://api.sambanova.ai/v1/chat/completions",n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:n,parse:d=>d.choices?.[0]?.message?.content||""}}case"hyperbolic":{const r="https://api.hyperbolic.xyz/v1/chat/completions",n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:n,parse:d=>d.choices?.[0]?.message?.content||""}}case"novita":{const r="https://api.novita.ai/v3/openai/chat/completions",n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:n,parse:d=>d.choices?.[0]?.message?.content||""}}case"perplexity":{const r="https://api.perplexity.ai/chat/completions",n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:n,parse:d=>d.choices?.[0]?.message?.content||""}}case"replicate":{const r="https://openai-compat.replicate.com/v1/chat/completions",n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:n,parse:d=>d.choices?.[0]?.message?.content||""}}case"ai21":{const r="https://api.ai21.com/studio/v1/chat/completions",n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:n,parse:d=>d.choices?.[0]?.message?.content||""}}case"lepton":{const r=`https://${o.replace(/[^a-z0-9-]/g,"")}.lepton.run/api/v1/chat/completions`,n={model:o,messages:a,max_tokens:i};return{url:r,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:n,parse:d=>d.choices?.[0]?.message?.content||""}}case"ollama":return{url:`${(s||"http://localhost:11434").replace(/\/$/,"")}/api/chat`,method:"POST",headers:{"Content-Type":"application/json"},body:{model:o,messages:a,stream:!1},parse:c=>c.message?.content||""};default:return null}},async chat(e,{maxTokens:t=2e3,onProviderSwitch:a=null}={}){const i=await this.getOrderedProviders(),s=await this.getConfig(),o=this._getCooldowns(),r=Date.now();if(i.length===0)throw new Error("No AI providers configured. Go to AI Settings and add at least one API key.");let n=null;for(const d of i){if((o[d.id]||0)>r){const c=Math.ceil(((o[d.id]||0)-r)/1e3);console.log(`[AI] Skipping ${d.name} — rate limited for ${c}s more`);continue}if(d.id==="ollama"){const c=this._buildRequest(d,s,e,t);if(!c)continue;try{a&&a(d.name);const m=await fetch(c.url,{method:c.method,headers:c.headers,body:JSON.stringify(c.body),signal:AbortSignal.timeout(6e4)});if(m.status===429||m.status===503){this._setCooldown(d.id),console.warn(`[AI] ${d.name} rate limited (${m.status}), switching to next provider…`),n=new Error(`${d.name} rate limited`);continue}if(!m.ok){const y=await m.text().catch(()=>"");n=new Error(`${d.name} error ${m.status}: ${y.slice(0,100)}`),console.warn(`[AI] ${d.name} failed:`,n.message);continue}const g=await m.json(),f=c.parse(g);if(!f){n=new Error(`${d.name} returned empty response`);continue}return this._clearCooldown(d.id),console.log(`[AI] ✓ Response from ${d.name}`),{text:f,provider:d.name,model:s[d.mf]||d.dm}}catch(m){m.name==="TimeoutError"?(this._setCooldown(d.id),n=new Error(`${d.name} timed out`)):n=m,console.warn(`[AI] ${d.name} exception:`,m.message)}continue}try{a&&a(d.name);const c=e[e.length-1],m={action:"chat",message:String(c?.content||"").trim(),history:e.slice(0,-1).map(b=>({role:b.role,content:String(b.content||"")})),provider_override:d.id,max_tokens:t},g=await this._callEdge(m);if(g&&g.response)return this._clearCooldown(d.id),console.log(`[AI] ✓ Response from ${d.name} (via edge function)`),{text:g.response,provider:d.name,model:g.model||s[d.mf]||d.dm};const f=String(g?.error||"empty response"),y=f.toLowerCase();y.includes("429")||y.includes("rate limit")||y.includes("quota")?(this._setCooldown(d.id),console.warn(`[AI] ${d.name} rate limited (${f.slice(0,80)}), switching to next provider…`),n=new Error(`${d.name} rate limited`)):(n=new Error(`${d.name} error: ${f.slice(0,200)}`),console.warn(`[AI] ${d.name} failed:`,n.message))}catch(c){c.name==="TimeoutError"?(this._setCooldown(d.id),n=new Error(`${d.name} timed out`)):n=c,console.warn(`[AI] ${d.name} exception:`,c.message)}}throw new Error(n?.message||"All AI providers failed or are rate limited. Add more API keys in AI Settings.")},async prompt(e,t={}){return this.chat([{role:"user",content:e}],t)},async getStatus(){const e=await this.getConfig(),t=this._getCooldowns(),a=Date.now();return ee.map(i=>({id:i.id,name:i.name,color:i.color,hasKey:!!e[i.kf]?.trim(),isActive:e.active_provider===i.id,cooldownUntil:t[i.id]||0,isCoolingDown:(t[i.id]||0)>a,remainingSec:Math.max(0,Math.ceil(((t[i.id]||0)-a)/1e3))}))},async analyzeImages(e,t={}){const a=`You are the AI listing expert for the Weverse Online Shop marketplace. Look carefully at the uploaded product photo(s) and identify exactly what the product is.

Return a single valid JSON object (no markdown, no extra text) with these keys:
- title (string): a real, professional marketplace product title that matches the actual item (brand + model/type + key feature + category). Never use placeholders like "AI Product" or "Premium Item".
- description (string): a detailed, persuasive 2-4 sentence description.
- category (string): the best category from this list: Electronics, Phones, Computers & Laptops, Fashion, Men's Fashion, Women's Fashion, Shoes, Bags & Accessories, Jewelry, Beauty & Skincare, Home & Kitchen, Furniture, Garden & Outdoor, Toys & Games, Sports & Fitness, Food & Groceries, Baby & Kids, Health & Medical, Books & Education, Office & Stationery, Pet Supplies, Musical Instruments, Cameras & Photography, Watches, Gaming, Software & Digital, Services, Cars, Luxury Cars, Motorcycles, Commercial Vehicles, Boats & Marine, Other.
- subcategory (string)
- brand, model, color, condition (strings; condition from: New, Refurbished, Used - Like New, Used - Good, Used - Fair)
- material, size, storage, ram, processor (strings, only if relevant)
- features (array of strings)
- highlights (array of strings)
- seo_keywords (array of strings)
- specifications (object with the relevant spec keys only, e.g. engine, transmission, fuel_type, horsepower, mileage, drive_type, body_type, model_year for vehicles; storage, ram, processor, display for electronics)
- detected_name (string): a short plain-language label of the product, e.g. "white sneakers".

Rules:
- Only include keys you can actually observe or reasonably infer from the photo(s). NEVER invent exact specs (price, storage size, RAM, horsepower, year, serial numbers) that are not visible or printed on the product.
- Respond with valid JSON only.`,i=[];for(const s of(e||[]).slice(0,4)){const o=await this._fetchImageAsDataUrl(s);o&&i.push(o)}if(!i.length)throw new Error("Could not read the uploaded images.");try{const s=await this._callEdge({action:"vision",images:i,prompt:a,max_tokens:4096});if(s&&s.success&&s.text){const o=be(s.text);if(o)return{...o,_aiProvider:s.provider,_aiModel:s.model};throw new Error("The AI returned no valid analysis for these images.")}throw new Error(s&&s.error||"Vision service unavailable.")}catch{try{const n=await this._tryLocalOllamaVision(a,i);if(n)return n}catch{}const o=`

(No image analysis is available right now. The product is currently categorized as "${t.category||"Unknown"}"${t.existingTitle?` and titled "${t.existingTitle}"`:""}. Base your content on that plus general knowledge of typical products in this category. Do not invent specific specs or prices you cannot know.)`,r=await this.chat([{role:"user",content:a+o}],{maxTokens:4e3});return be(r.text)}},async _callEdge(e){let t="";try{t=(await p.auth.getSession())?.data?.session?.access_token||""}catch{}return await(await fetch(qa,{method:"POST",headers:{"Content-Type":"application/json",...t?{Authorization:`Bearer ${t}`}:{}},body:JSON.stringify(e),signal:AbortSignal.timeout(12e4)})).json().catch(()=>({}))},async _fetchImageAsDataUrl(e){try{const t=await fetch(e).then(a=>a.blob());return!t||!t.size?null:t.size<18e5?`data:${t.type||"image/jpeg"};base64,${await xt(t)}`:await this._downscaleImage(t,1200)}catch{return null}},async _downscaleImage(e,t){const a=URL.createObjectURL(e);try{const i=new Image;await new Promise((d,c)=>{i.onload=d,i.onerror=c,i.src=a});const s=Math.min(1,t/Math.max(i.width,i.height)),o=Math.max(1,Math.round(i.width*s)),r=Math.max(1,Math.round(i.height*s)),n=document.createElement("canvas");return n.width=o,n.height=r,n.getContext("2d").drawImage(i,0,0,o,r),n.toDataURL("image/jpeg",.82)}finally{URL.revokeObjectURL(a)}},async _tryLocalOllamaVision(e,t){const a=await this.getConfig(),i=String(a.ollama_url||"http://localhost:11434").replace(/\/$/,""),s=[a.ollama_model,"llava","llama3.2-vision","moondream"].filter(Boolean);for(const o of s)try{const r=await fetch(`${i}/api/generate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:o,prompt:e,images:t.map(m=>String(m).split(",")[1]||m),stream:!1,options:{temperature:.3,num_predict:4096}}),signal:AbortSignal.timeout(12e4)});if(!r.ok)continue;const n=await r.json(),d=String(n?.response||"").trim();if(!d)continue;const c=be(d);return c?{...c,_aiProvider:"Ollama (Local)",_aiModel:o}:{description:d,_aiProvider:"Ollama (Local)",_aiModel:o}}catch{}return null},async generateImages(e,t,a=1){let i=null;if(t)try{i=await this._fetchImageAsDataUrl(t)}catch{}try{const s=await this._callEdge({action:"generate_images",prompt:e,reference_url:i,count:a||1});if(s&&s.success&&Array.isArray(s.images)&&s.images.length)return s.images;throw new Error(s&&s.error||"Image generation service unavailable.")}catch(s){try{const o=await this._tryLocalComfyUI(e);if(o&&o.length)return o}catch{}try{const o=await this._tryLocalOllamaImage(e);if(o&&o.length)return o}catch{}throw new Error(`AI image generation failed: ${s.message||s}. Add a Google Gemini API key in AI Settings, or configure local ComfyUI/Ollama.`)}},async _tryLocalComfyUI(e){const t=await this.getConfig(),a=String(t.comfyui_workflow||"").trim();if(!a)return null;let i;try{i=JSON.parse(a)}catch{return null}const s=String(t.comfyui_url||"http://127.0.0.1:8188").replace(/\/$/,""),o=String(t.comfyui_input_node||"image");String(t.comfyui_output_node||"image");const r=i[o]||Object.values(i)[0];if(!r)return null;r.inputs={...r.inputs||{},text:e};const n=`web-${Date.now()}`,d=await fetch(`${s}/prompt`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:i,client_id:n}),signal:AbortSignal.timeout(6e4)});if(!d.ok)return null;const{prompt_id:c}=await d.json();if(!c)return null;const m=Date.now()+18e4;for(;Date.now()<m;){await new Promise(g=>setTimeout(g,1e3));try{const g=await fetch(`${s}/history/${c}`,{signal:AbortSignal.timeout(1e4)});if(!g.ok)continue;const y=(await g.json())[c];if(!y)continue;const h=Object.values(y.outputs||{}).flatMap($=>Array.isArray($.images)?$.images:[]);if(h.length)return Promise.all(h.slice(0,4).map(async $=>{const N=await fetch(`${s}/view?filename=${encodeURIComponent($.filename)}&subfolder=${encodeURIComponent($.subfolder||"")}&type=${encodeURIComponent($.type||"output")}`,{signal:AbortSignal.timeout(3e4)});if(!N.ok)return null;const z=await N.blob();return await xt(z).then(x=>`data:${z.type||"image/png"};base64,${x}`)})).then($=>$.filter(Boolean))}catch{}}return null},async _tryLocalOllamaImage(e){const t=await this.getConfig(),a=String(t.ollama_url||"http://localhost:11434").replace(/\/$/,""),i=[t.ollama_image_model||t.ollama_model,"llava"].filter(Boolean);for(const s of i)try{const o=await fetch(`${a}/api/generate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:s,prompt:e,stream:!1,options:{num_predict:512}}),signal:AbortSignal.timeout(12e4)});if(!o.ok)continue;const r=await o.json(),n=String(r?.images?.[0]||"").trim();if(n)return[`data:image/png;base64,${n}`]}catch{}return null}};function xt(e){return new Promise(t=>{const a=new FileReader;a.onload=()=>{const i=a.result;if(typeof i=="string"){const s=i.indexOf(",");t(s>=0?i.slice(s+1):i)}else t("")},a.onerror=()=>t(""),a.readAsDataURL(e)})}window.aiClient=K;window.showAiStatusModal=async function(){const e=await K.getStatus(),t=e.filter(a=>a.hasKey);L(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="activity" class="w-5 h-5 text-emerald-400"></i> AI Provider Status</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
        </div>
        <div class="mb-4 p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300">
          ${t.length===0?"⚠ No keys configured. Go to AI Settings and add at least one API key.":`${t.length} provider${t.length>1?"s":""} configured. Auto-switch is <strong class="text-emerald-400">ON</strong> — will skip rate-limited providers automatically.`}
        </div>
        <div class="space-y-2">
          ${e.map(a=>`
            <div class="flex items-center gap-3 p-2.5 glass-soft border ${a.hasKey?"border-blue-500/15":"border-gray-800"} rounded-xl opacity-${a.hasKey?"100":"40"}">
              <span class="w-2.5 h-2.5 rounded-full shrink-0 ${a.isCoolingDown?"bg-red-500":a.hasKey?"bg-emerald-400":"bg-gray-600"}"></span>
              <span class="text-xs font-bold text-white flex-1">${l(a.name)}</span>
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

${a.text}`}catch(a){t.textContent=`❌ ${a.message}`}};let v=null;const da=[{key:"rewrite",label:"Rewrite Title & Description",icon:"pen-line",prompt:"Rewrite the title and description to be more professional, compelling, and conversion-focused. Keep all product facts accurate. The title must be a real, professional product name that matches the item and its category — never a generic placeholder."},{key:"name",label:"Professional Name",icon:"badge-check",prompt:'Give this product a real, professional product name that accurately matches what it actually is and its category. Never use placeholder names like "AI Product", "AI Curated Product", or anything similar.'},{key:"price",label:"Optimize Price & Stock",icon:"dollar-sign",prompt:"Suggest a competitive, realistic price and an optimal stock quantity for this product based on the category and current data."},{key:"category",label:"Fix Category & Specs",icon:"tags",prompt:"Fix the category, subcategory, and specifications so they accurately describe this product. Use the category list if possible."},{key:"images",label:"Clean Up Duplicate/Bad Images",icon:"images",prompt:"Identify duplicate, broken, or low-quality images among the CURRENT images list only, and list their exact URLs in images_to_remove. Do not invent any image URLs."}];function ji(e){return[...window._productsData||[],...window._propertiesData||[]].find(a=>a.property_id===e)||null}function Oi(e){const t=["property_id","listing_type","category","subcategory","title","description","price","currency","brand","color","size","condition","availability_status","stock_quantity","features","tags","highlights","seo_keywords","specifications","bedrooms","bathrooms","city","state","country","images"],a={};for(const i of t)i in e&&(a[i]=e[i]);return a}function be(e){if(!e)return null;let t=String(e).trim();const a=t.match(/```(?:json)?\s*([\s\S]*?)```/i);a&&(t=a[1].trim());const i=t.indexOf("{"),s=t.lastIndexOf("}");if(i===-1||s===-1||s<=i)return null;const o=t.slice(i,s+1);try{return JSON.parse(o)}catch{return null}}function wt(e){return Array.isArray(e)?e.length?e.join(" · "):"(empty)":e&&typeof e=="object"?JSON.stringify(e):e==null||e===""?"(empty)":String(e)}window.openProductAiAssistant=async function(e,t="products"){let a=ji(e);if(!a)try{const{data:i}=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();i&&(a=i)}catch{}if(!a){u("Product not found.","error");return}v={pid:e,from:t==="properties"?"properties":"products",product:a,busy:!1,suggestions:null,approved:new Set,removedImages:new Set,addedImages:[],instruction:""},q()};function q(){const e=v;if(!e)return;const t=e.product,a=t.images&&t.images[0]?t.images[0]:"/fallback.svg";L(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide max-h-[92vh] overflow-hidden flex flex-col">
        <div class="flex items-center justify-between mb-4 shrink-0">
          <div class="flex items-center gap-3 min-w-0">
            <img src="${l(a)}" class="w-11 h-11 rounded-xl object-cover border border-fuchsia-500/30" onerror="this.src='/fallback.svg'">
            <div class="min-w-0">
              <h3 class="text-sm font-black text-white truncate">${l(t.title||"Untitled")}</h3>
              <p class="text-[10px] font-mono text-gray-500">${l(t.property_id)} · ${l(t.category||"Uncategorized")}</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/25"><i data-lucide="sparkles" class="w-3 h-3"></i> AI Assistant</span>
            <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
          </div>
        </div>

        <div class="flex-1 overflow-y-auto scrollbar-thin pr-1 space-y-4">
          ${qi()}
          ${Ni()}
          ${Hi()}
        </div>

        <div class="shrink-0 pt-3 mt-3 border-t border-blue-500/10 flex items-center justify-between gap-3">
          <p class="text-[10px] text-gray-500">AI can only edit this product. Review changes, approve what you want, then save directly to Supabase.</p>
          <button onclick="applyProductAiChanges()" class="btn-press px-4 py-2.5 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white text-xs font-black rounded-xl transition flex items-center gap-1.5 shrink-0" ${e.busy?"disabled":""}>
            <i data-lucide="database" class="w-4 h-4"></i> Save Approved to Supabase
          </button>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()}function qi(){const e=v;if(!e)return"";const t=Array.isArray(e.product.images)?e.product.images:[],a=[...t,...e.addedImages],i={};t.forEach(r=>{i[r]=(i[r]||0)+1});const s=Object.keys(i).filter(r=>i[r]>1),o=a.map((r,n)=>{const d=n<t.length,c=d&&e.removedImages.has(r),m=d&&s.includes(r);return`
      <div class="relative group w-20 h-20 rounded-lg overflow-hidden border ${c?"border-red-500/60 opacity-50":m?"border-amber-400/70":"border-white/10"}">
        <img src="${l(r)}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'">
        ${m?'<span class="absolute top-0.5 left-0.5 text-[8px] font-black px-1 rounded bg-amber-400 text-[#111827]">DUP</span>':""}
        ${c?'<div class="absolute inset-0 flex items-center justify-center bg-red-950/70 text-[9px] font-black text-red-200">REMOVE</div>':""}
        <button onclick="productAiToggleRemoveImage(${n})" class="absolute top-0.5 right-0.5 w-5 h-5 rounded-full bg-black/70 hover:bg-red-600 text-white text-[10px] flex items-center justify-center" title="${c?"Keep image":"Remove image"}">${c?"↺":"✕"}</button>
      </div>`}).join("");return`
    <div class="glass-soft border border-blue-500/15 rounded-2xl p-4">
      <div class="flex items-center justify-between mb-3">
        <div>
          <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="images" class="w-4 h-4 text-fuchsia-400"></i> Product Images</p>
          <p class="text-[10px] text-gray-500 mt-0.5">${t.length} current ${e.addedImages.length?`+ ${e.addedImages.length} new`:""} ${e.removedImages.size?`· ${e.removedImages.size} to remove`:""}</p>
        </div>
        <div class="flex gap-2">
          <button onclick="productAiDetectDuplicates()" class="btn-press px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-amber-500/15 text-amber-200 hover:bg-amber-500/25 transition">Detect Duplicates</button>
          <label class="btn-press px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25 transition cursor-pointer flex items-center gap-1">
            <i data-lucide="upload" class="w-3.5 h-3.5"></i> Upload Better Images
            <input type="file" accept="image/*" multiple class="hidden" onchange="productAiUploadImages(this)">
          </label>
        </div>
      </div>
      ${o||'<p class="text-xs text-gray-500">No images yet.</p>'}
      <p class="text-[10px] text-gray-500 mt-2">Uploaded images are added to the product. Remove old ones with ✕, then ask the AI to rewrite copy or review the listing.</p>
    </div>`}function Ni(){const e=v;return e?`
    <div class="glass-soft border border-fuchsia-500/20 rounded-2xl p-4">
      <p class="text-xs font-black text-white flex items-center gap-2 mb-3"><i data-lucide="bot" class="w-4 h-4 text-fuchsia-400"></i> Ask the AI Assistant</p>
      <div class="flex flex-wrap gap-1.5 mb-3">${da.map(a=>`
    <button onclick="productAiQuickAction('${a.key}')" class="btn-press px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-fuchsia-500/10 text-fuchsia-200 hover:bg-fuchsia-500/20 border border-fuchsia-500/15 transition flex items-center gap-1.5">
      <i data-lucide="${a.icon}" class="w-3 h-3"></i> ${a.label}
    </button>`).join("")}</div>
      <div class="flex gap-2">
        <textarea id="product-ai-input" rows="2" class="input-field flex-1 text-xs resize-none" placeholder="e.g. Make the title more professional, rewrite the description, or suggest a better price…" oninput="productAiSyncInput(this.value)">${l(e.instruction)}</textarea>
        <button onclick="runProductAiInstruction()" class="btn-press px-3 py-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 self-start" ${e.busy?"disabled":""}>
          <i data-lucide="send" class="w-3.5 h-3.5"></i> Run
        </button>
      </div>
      ${e.busy?'<p class="text-[11px] text-fuchsia-300 mt-2 flex items-center gap-2"><i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Thinking… this product only.</p>':""}
    </div>`:""}function Hi(){const e=v;if(!e)return"";if(!e.suggestions)return`
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-4">
        <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="eye" class="w-4 h-4 text-blue-400"></i> Preview Changes</p>
        <p class="text-[11px] text-gray-500 mt-2">No suggestions yet. Use a quick action above or type an instruction, then review and approve changes before saving.</p>
      </div>`;const t=[],a={title:"Title",description:"Description",price:"Price",stock_quantity:"Stock",category:"Category",subcategory:"Subcategory",brand:"Brand",availability_status:"Availability",features:"Features",tags:"Tags",highlights:"Highlights",seo_keywords:"SEO Keywords"};for(const r of Object.keys(e.suggestions)){if(r==="images_to_remove"||r==="images_to_add"||r==="summary")continue;const n=wt(e.product[r]),d=wt(e.suggestions[r]);if(n===d)continue;const c=e.approved.has(r)?"checked":"";t.push(`
      <div class="flex items-start gap-3 p-3 rounded-xl bg-white/5 border ${c?"border-emerald-500/25":"border-white/10"}">
        <input type="checkbox" class="mt-0.5 accent-emerald-500" ${c} onchange="productAiToggleApproved('${r}', this.checked)">
        <div class="min-w-0 flex-1">
          <p class="text-[10px] font-black uppercase tracking-wide text-gray-400">${l(a[r]||r)}</p>
          <p class="text-[11px] text-gray-500 line-through decoration-red-400/60 mt-0.5 break-words">${l(n)}</p>
          <p class="text-[11px] text-emerald-300 font-semibold mt-1 break-words">${l(d)}</p>
        </div>
      </div>`)}const i=Array.isArray(e.product.images)?e.product.images:[],s=Array.isArray(e.suggestions.images_to_remove)?e.suggestions.images_to_remove.filter(r=>i.includes(r)):[],o=[...new Set([...e.removedImages,...s])];if(o.length){const r=e.approved.has("images_to_remove")?"checked":"";t.push(`
      <div class="flex items-start gap-3 p-3 rounded-xl bg-white/5 border ${r?"border-emerald-500/25":"border-white/10"}">
        <input type="checkbox" class="mt-0.5 accent-emerald-500" ${r} onchange="productAiToggleApproved('images_to_remove', this.checked)">
        <div class="min-w-0 flex-1">
          <p class="text-[10px] font-black uppercase tracking-wide text-gray-400">Remove ${o.length} image${o.length>1?"s":""}</p>
          <div class="flex flex-wrap gap-1.5 mt-1.5">${o.slice(0,12).map(n=>`<img src="${l(n)}" class="w-10 h-10 rounded-md object-cover border border-red-500/40" onerror="this.src='/fallback.svg'">`).join("")}</div>
        </div>
      </div>`)}return e.addedImages.length&&t.push(`
      <div class="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-emerald-500/25">
        <input type="checkbox" class="mt-0.5 accent-emerald-500" checked disabled>
        <div class="min-w-0 flex-1">
          <p class="text-[10px] font-black uppercase tracking-wide text-gray-400">Add ${e.addedImages.length} uploaded image${e.addedImages.length>1?"s":""}</p>
          <div class="flex flex-wrap gap-1.5 mt-1.5">${e.addedImages.map(r=>`<img src="${l(r)}" class="w-10 h-10 rounded-md object-cover border border-emerald-500/40" onerror="this.src='/fallback.svg'">`).join("")}</div>
        </div>
      </div>`),e.suggestions.summary&&t.unshift(`<p class="text-[11px] text-fuchsia-300 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-xl p-3">${l(e.suggestions.summary)}</p>`),t.length?`
    <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 space-y-2">
      <div class="flex items-center justify-between mb-1">
        <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="eye" class="w-4 h-4 text-emerald-400"></i> Review & Approve Changes</p>
        <button onclick="productAiApproveAll()" class="btn-press text-[10px] font-bold text-emerald-300 hover:text-emerald-200 px-2 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 transition">Approve all</button>
      </div>
      ${t.join("")}
    </div>`:`
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-4">
        <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="eye" class="w-4 h-4 text-blue-400"></i> Preview Changes</p>
        <p class="text-[11px] text-gray-500 mt-2">The AI had no new suggestions beyond what's already saved. Try a different instruction.</p>
      </div>`}window.productAiSyncInput=function(e){v&&(v.instruction=e)};window.productAiQuickAction=function(e){const t=da.find(a=>a.key===e);!t||!v||(v.instruction=t.prompt,runProductAiInstruction())};window.productAiToggleApproved=function(e,t){v&&(t?v.approved.add(e):v.approved.delete(e),q())};window.productAiApproveAll=function(){if(!(!v||!v.suggestions)){for(const e of Object.keys(v.suggestions))v.approved.add(e);v.removedImages.size&&v.approved.add("images_to_remove"),q()}};window.productAiToggleRemoveImage=function(e){if(!v)return;const t=Array.isArray(v.product.images)?v.product.images:[],i=[...t,...v.addedImages][e];i&&(e<t.length?v.removedImages.has(i)?v.removedImages.delete(i):v.removedImages.add(i):v.addedImages=v.addedImages.filter(s=>s!==i),q())};window.productAiDetectDuplicates=function(){if(!v)return;const e=Array.isArray(v.product.images)?v.product.images:[],t={};e.forEach(s=>{t[s]=(t[s]||0)+1});let a=0;const i=new Set;for(const s of e)t[s]>1&&(i.has(s)?(v.removedImages.has(s)||(a+=1),v.removedImages.add(s)):i.add(s));a?(v.approved.add("images_to_remove"),u(`Marked ${a} duplicate image(s) for removal.`,"info")):u("No duplicate images found.","info"),q()};window.productAiUploadImages=async function(e){if(!v||!e||!e.files||!e.files.length)return;const t=[...e.files];let a=0;for(const i of t){if(!i.type.startsWith("image/"))continue;const s=await Se(i);s&&(v.addedImages.push(s),a+=1)}e.value="",a?u(`${a} image(s) uploaded and staged.`,"success"):u("Upload failed.","error"),q()};window.runProductAiInstruction=async function(){const e=v;if(!e||e.busy)return;const t=(e.instruction||"").trim()||"Improve this product listing professionally.";e.busy=!0,q();const a=Gi(e,t);try{const i=await K.prompt(a,{maxTokens:4e3,onProviderSwitch:o=>{}}),s=be(i.text);if(!s)throw new Error("The AI did not return valid JSON suggestions.");e.suggestions=s,e.approved=new Set(Object.keys(s)),e.approved.add("images_to_remove"),u("Suggestions ready — review and approve before saving.","info")}catch(i){u(`AI error: ${i.message}`,"error")}finally{e.busy=!1,q()}};function Gi(e,t){const a=e.product,i=JSON.stringify(Oi(a),null,2);return`You are the AI product manager assistant for ONE product in the Weverse Online Shop admin dashboard.

You are attached to EXACTLY ONE product (property_id ${e.pid}). You may ONLY edit THIS product — never create, delete, or modify any other product.

CURRENT PRODUCT DATA (JSON):
${i}

ADMIN INSTRUCTION:
${t}

Return a single valid JSON object (no markdown, no extra text) that proposes changes to THIS product only. Allowed keys:
- title (string): a real, professional product name that matches the actual item and its category. NEVER use placeholders like "AI Product", "AI Curated Product", or similar.
- description (string)
- price (number)
- stock_quantity (number)
- category (string)
- subcategory (string)
- brand (string)
- availability_status (string)
- features (array of strings)
- tags (array of strings)
- highlights (array of strings)
- seo_keywords (array of strings)
- specifications (object)
- images_to_remove (array of EXACT URLs that already exist in the CURRENT product images list — only for duplicate, broken, or clearly low-quality images. Never invent URLs.)
- summary (string): one short sentence summarizing the proposed changes.

Rules:
- Only include keys you actually want to change. Omit unchanged keys.
- Do not change the property_id.
- Only list image URLs that are already in the CURRENT images array above.
- Respond with valid JSON only.`}window.applyProductAiChanges=async function(){const e=v;if(!e||e.busy)return;const t=[...e.approved].some(n=>n!=="images_to_remove"),a={};if(e.suggestions)for(const n of e.approved)n!=="images_to_remove"&&n in e.suggestions&&e.suggestions[n]!==void 0&&(a[n]=e.suggestions[n]);if(!t&&!e.removedImages.size&&!e.addedImages.length){u("Approve at least one change before saving.","error");return}const i=Array.isArray(e.product.images)?e.product.images:[],s=new Set(e.removedImages);e.approved.has("images_to_remove")&&Array.isArray(e.suggestions?.images_to_remove)&&e.suggestions.images_to_remove.forEach(n=>s.add(n));const o=[...i.filter(n=>!s.has(n)),...e.addedImages],r=Q({...e.product,...a,images:o,property_id:e.pid,updated_at:new Date().toISOString()});e.busy=!0,q();try{const{error:n}=await p.from("showroom_listings").upsert(r,{onConflict:"property_id"});if(n)throw n;u("Changes saved to Supabase.","success");const d=e.from;v=null,G(),d==="properties"?st():C()}catch(n){e.busy=!1,n&&B(n)?u("⚠️ Save blocked: database admin role is not active. Re-run the admin permission migration, or contact the owner.","error"):u(`Save failed: ${n&&n.message||"unknown error"}`,"error"),q()}};const nt=[{id:"flow",name:"Flow"},{id:"veo",name:"Veo"},{id:"luma",name:"Luma"},{id:"runway",name:"Runway"},{id:"pika",name:"Pika"},{id:"kling",name:"Kling"},{id:"hailuo",name:"Hailuo"},{id:"pixverse",name:"PixVerse"},{id:"hedra",name:"Hedra"},{id:"heygen",name:"HeyGen"},{id:"tavus",name:"Tavus"}],zi=["Product launch","Seasonal sale","Brand awareness","Lead generation","Live stream conversion","Retargeting"];function lt(e){return Array.isArray(e)?e:[]}function ca(e=[]){const t=new Map(lt(e).map(a=>[a.id,a]));return nt.map(a=>{const i=t.get(a.id)||{};return{id:a.id,name:a.name,enabled:!!i.enabled,apiKey:i.apiKey||"",model:i.model||"",baseUrl:i.baseUrl||""}})}async function ua(e){const{data:t}=await p.from("ai_settings").select("id").limit(1).maybeSingle();let a;if(t?.id?{error:a}=await p.from("ai_settings").update(e).eq("id",t.id):{error:a}=await p.from("ai_settings").insert(e),a)throw a}async function dt(e){const{data:t}=await p.from("ai_settings").select("ai_ad_generation_history").limit(1).maybeSingle(),a=[e,...lt(t?.ai_ad_generation_history)].slice(0,120);await ua({ai_ad_generation_history:a})}async function pa(e){try{const{data:i,error:s}=await p.from("site_settings").select("id").limit(1).maybeSingle();if(s)throw s;let o;if(i?.id?{error:o}=await p.from("site_settings").update(e).eq("id",i.id):{error:o}=await p.from("site_settings").insert(e),o)throw o;return}catch{}const t={mode:"ai_ad",startsAt:e.ai_ad_starts_at||null,endsAt:e.ai_ad_ends_at||null,ctaLabel:e.ai_ad_cta_label||"Shop Now",muted:e.ai_ad_muted!==!1},a={is_live:!!e.ai_ad_enabled,badge_text:e.ai_ad_badge||"AI Advertisement",headline:e.ai_ad_title||"",embed_url:e.ai_ad_video_url||"",description:`AI_AD_META:${JSON.stringify(t)}`,stream_status:e.ai_ad_enabled?"ai_ad":"offline",started_at:e.ai_ad_starts_at||null,updated_at:new Date().toISOString()};try{const{data:i}=await p.from("public_live_state").select("id").limit(1).maybeSingle();let s;if(i?.id?{error:s}=await p.from("public_live_state").update(a).eq("id",i.id):{error:s}=await p.from("public_live_state").insert(a),!s)return}catch{}try{localStorage.setItem(Tt,JSON.stringify({ai_ad_enabled:!!e.ai_ad_enabled,ai_ad_video_url:e.ai_ad_video_url||"",ai_ad_badge:e.ai_ad_badge||"AI Advertisement",ai_ad_title:e.ai_ad_title||"",ai_ad_cta_label:e.ai_ad_cta_label||"Shop Now",ai_ad_muted:e.ai_ad_muted!==!1,ai_ad_starts_at:e.ai_ad_starts_at||null,ai_ad_ends_at:e.ai_ad_ends_at||null,ai_ad_duration_seconds:e.ai_ad_duration_seconds||30,ai_ad_updated_at:new Date().toISOString()}))}catch{}}function Vi(e){if(!e||typeof e!="string"||!e.startsWith("AI_AD_META:"))return null;try{return JSON.parse(e.slice(11))}catch{return null}}async function Wi(){try{const{data:e,error:t}=await p.from("site_settings").select("*").limit(1).maybeSingle();if(!t&&e)return e}catch{}try{const{data:e,error:t}=await p.from("public_live_state").select("*").limit(1).maybeSingle();if(t||!e)throw new Error("public_live_state unavailable");const a=Vi(e.description),i=a?.startsAt||e.started_at||null,s=a?.endsAt||null;return{ai_ad_enabled:!!e.is_live&&e.stream_status==="ai_ad"&&!!e.embed_url,ai_ad_video_url:e.embed_url||"",ai_ad_badge:e.badge_text||"AI Advertisement",ai_ad_title:e.headline||"",ai_ad_cta_label:a?.ctaLabel||"Shop Now",ai_ad_muted:a?.muted!==!1,ai_ad_starts_at:i,ai_ad_ends_at:s,ai_ad_duration_seconds:s&&i?Math.max(5,Math.round((new Date(s).getTime()-new Date(i).getTime())/1e3)):30}}catch{try{const e=localStorage.getItem(Tt),t=e?JSON.parse(e):null;return t&&typeof t=="object"?t:{}}catch{return{}}}}async function Ie(){const e=document.getElementById("content");if(e)try{const[{data:t},a]=await Promise.all([p.from("ai_settings").select("*").limit(1).maybeSingle(),Wi()]),i=t||{},s=a||{},o=ca(i.ai_ad_video_providers),r=lt(i.ai_ad_generation_history).sort((d,c)=>new Date(c.created_at||0).getTime()-new Date(d.created_at||0).getTime()).slice(0,12),n=!!s.ai_ad_enabled&&!!s.ai_ad_video_url&&(!s.ai_ad_ends_at||new Date(s.ai_ad_ends_at).getTime()>Date.now());e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div class="flex items-start justify-between flex-wrap gap-3">
          <div>
            <h2 class="text-xl font-black text-white">AI Marketing Studio</h2>
            <p class="text-xs text-gray-500 mt-1">AI Advertisement Generator with live ad-slot takeover and automatic restore when campaign ends.</p>
          </div>
          ${n?'<button onclick="deactivateAiAdvertisement()" class="btn-press bg-red-600/90 hover:bg-red-500 text-white text-xs font-bold px-3 py-2 rounded-xl transition flex items-center gap-1.5"><i data-lucide="square" class="w-3.5 h-3.5"></i>Stop Active AI Ad</button>':'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">No active AI ad</span>'}
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
                  <p class="text-xs font-bold text-white">${l(d.name)}</p>
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
                    <input type="text" class="input-field text-xs" name="provider_${d.id}_model" value="${l(d.model)}" placeholder="Optional model name">
                  </div>
                  <div>
                    <label class="lbl">Base URL</label>
                    <input type="url" class="input-field text-xs" name="provider_${d.id}_base_url" value="${l(d.baseUrl)}" placeholder="Optional custom API URL">
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
                ${zi.map(d=>`<option value="${l(d)}">${l(d)}</option>`).join("")}
              </select>
            </div>
            <div>
              <label class="lbl">Provider Used for Video</label>
              <select id="ai-ad-provider" class="input-field text-xs" name="provider_id">
                ${o.map(d=>`<option value="${d.id}" ${d.enabled?"selected":""}>${l(d.name)}</option>`).join("")}
              </select>
            </div>
          </div>

          <div>
            <label class="lbl">Offer / Brief</label>
            <textarea id="ai-ad-brief" class="input-field text-xs" name="brief" rows="3" placeholder="Describe product, offer, target audience, and style."></textarea>
          </div>

          <div>
            <label class="lbl">Generated Script</label>
            <textarea id="ai-ad-script" class="input-field text-xs" name="script" rows="6" placeholder="Click Generate Script with AI, then edit if needed.">${l(r[0]?.script||"")}</textarea>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div>
              <label class="lbl">AI Video URL</label>
              <input id="ai-ad-video-url" type="url" class="input-field text-xs" name="video_url" placeholder="https://...mp4" value="${l(n&&s.ai_ad_video_url||"")}" required>
            </div>
            <div>
              <label class="lbl">Playback Duration (seconds)</label>
              <input id="ai-ad-duration" type="number" class="input-field text-xs" name="duration_seconds" min="5" max="900" value="${l(String(s.ai_ad_duration_seconds||30))}" required>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div>
              <label class="lbl">Badge</label>
              <input id="ai-ad-badge" type="text" class="input-field text-xs" name="badge" value="${l(s.ai_ad_badge||"AI Advertisement")}" placeholder="AI Advertisement">
            </div>
            <div>
              <label class="lbl">Headline</label>
              <input id="ai-ad-title" type="text" class="input-field text-xs" name="title" value="${l(s.ai_ad_title||"")}" placeholder="Campaign headline">
            </div>
            <div>
              <label class="lbl">CTA Label</label>
              <input id="ai-ad-cta" type="text" class="input-field text-xs" name="cta_label" value="${l(s.ai_ad_cta_label||"Shop Now")}" placeholder="Shop Now">
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
            <span class="text-xs text-gray-500">${r.length} entries</span>
          </div>
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Time</th><th>Goal</th><th>Provider</th><th>Status</th><th>Video</th></tr></thead>
              <tbody>
                ${r.length===0?'<tr><td colspan="5" class="text-center text-gray-500 py-8">No AI ad jobs yet.</td></tr>':r.map(d=>`
                    <tr>
                      <td><span class="text-xs text-gray-400">${l(R(d.created_at))}</span></td>
                      <td><span class="text-xs text-white">${l(d.goal||"General")}</span></td>
                      <td><span class="text-xs text-gray-300">${l(d.provider_name||d.provider_id||"N/A")}</span></td>
                      <td>${I(d.status||"active")}</td>
                      <td>${d.video_url?`<a href="${d.video_url}" target="_blank" rel="noopener" class="text-xs text-blue-400 hover:underline">Open</a>`:'<span class="text-xs text-gray-600">N/A</span>'}</td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`}}window.saveAiAdProviders=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries());try{const{data:i}=await p.from("ai_settings").select("ai_ad_video_providers").limit(1).maybeSingle(),s=ca(i?.ai_ad_video_providers),o=new Map(s.map(n=>[n.id,n])),r=nt.map(n=>{const d=n.id,c=o.get(d)||{},m=String(a[`provider_${d}_api_key`]||"").trim();return{id:d,name:n.name,enabled:t.get(`provider_${d}_enabled`)==="on",apiKey:m||c.apiKey||"",model:String(a[`provider_${d}_model`]||"").trim(),baseUrl:String(a[`provider_${d}_base_url`]||"").trim()}});await ua({ai_ad_video_providers:r}),u("AI advertisement provider settings saved.","success"),Ie()}catch(i){u("Failed to save providers: "+i.message,"error")}};window.generateAiAdScript=async function(){const e=document.getElementById("ai-ad-brief")?.value?.trim(),t=document.getElementById("ai-ad-goal")?.value||"Product launch",a=document.getElementById("ai-ad-provider"),i=document.getElementById("ai-ad-script");if(!e){u("Enter campaign brief first.","error");return}if(i){i.value="Generating script...";try{const s=["Create a short video advertisement script for an ecommerce marketplace.",`Goal: ${t}`,`Brief: ${e}`,"Return only plain text in this exact structure:","Headline:","Voiceover:","On-screen text:","CTA:"].join(`
`),o=await K.prompt(s,{onProviderSwitch:r=>{i.value=`Generating with ${r}...`}});i.value=o.text||"",await dt({created_at:new Date().toISOString(),goal:t,brief:e,provider_name:o.provider,provider_id:a?.value||"",status:"script_generated",script:o.text||"",video_url:null}),u(`Script generated with ${o.provider}.`,"success")}catch(s){i.value="",u("Script generation failed: "+s.message,"error")}}};window.activateAiAdvertisement=async function(e){e.preventDefault();const t=new FormData(e.target),a=String(t.get("goal")||"Product launch"),i=String(t.get("provider_id")||""),s=nt.find(f=>f.id===i)?.name||i,o=String(t.get("brief")||"").trim(),r=String(t.get("script")||"").trim(),n=String(t.get("video_url")||"").trim(),d=Math.max(5,Math.min(900,parseInt(String(t.get("duration_seconds")||"30"),10)||30)),c=Date.now(),m=new Date(c).toISOString(),g=new Date(c+d*1e3).toISOString();if(!n){u("Video URL is required.","error");return}try{const f={ai_ad_enabled:!0,ai_ad_video_url:n,ai_ad_badge:String(t.get("badge")||"AI Advertisement").trim()||"AI Advertisement",ai_ad_title:String(t.get("title")||"").trim(),ai_ad_cta_label:String(t.get("cta_label")||"Shop Now").trim()||"Shop Now",ai_ad_duration_seconds:d,ai_ad_muted:t.get("muted")==="on",ai_ad_provider_id:i,ai_ad_starts_at:m,ai_ad_ends_at:g,ai_ad_updated_at:new Date().toISOString()};await pa(f),await dt({created_at:m,goal:a,brief:o,provider_name:s,provider_id:i,status:"active",script:r,video_url:n,ends_at:g}),u("AI advertisement activated. Homepage will switch to AI video now.","success"),Ie()}catch(f){u("Failed to activate AI advertisement: "+f.message,"error")}};window.deactivateAiAdvertisement=async function(){try{await pa({ai_ad_enabled:!1,ai_ad_updated_at:new Date().toISOString()}),await dt({created_at:new Date().toISOString(),goal:"Manual stop",provider_name:"Admin",provider_id:"manual",status:"inactive",script:"",video_url:null}),u("AI advertisement stopped.","success"),Ie()}catch(e){u("Failed to stop AI advertisement: "+e.message,"error")}};async function Ki(){const e=document.getElementById("content");try{const{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Website Content Manager</h2>
        <form id="content-form" onsubmit="saveContent(event)" class="space-y-5">
          ${[{section:"Site Identity",fields:[{key:"site_name",label:"Site Name",type:"text",placeholder:"Weverse Online Shop"},{key:"site_tagline",label:"Tagline / Slogan",type:"text",placeholder:"Premium International Commerce"},{key:"site_description",label:"Site Description (SEO)",type:"textarea",placeholder:"Your trusted global shop…"}]},{section:"Contact Information",fields:[{key:"contact_email",label:"Contact Email",type:"email",placeholder:"support@example.com"},{key:"contact_phone",label:"Contact Phone",type:"tel",placeholder:"+1 234 567 8900"},{key:"contact_address",label:"Business Address",type:"textarea",placeholder:"123 Main St, City, Country"},{key:"whatsapp_number",label:"WhatsApp Number",type:"tel",placeholder:"+1 234 567 8900"}]},{section:"Hero Section",fields:[{key:"hero_headline",label:"Hero Headline",type:"text",placeholder:"Global Online Marketplace"},{key:"hero_subtext",label:"Hero Subtext",type:"textarea",placeholder:"Shop premium products…"},{key:"hero_cta_text",label:"CTA Button Text",type:"text",placeholder:"Shop Now"}]},{section:"Social Media",fields:[{key:"facebook_url",label:"Facebook URL",type:"url",placeholder:"https://facebook.com/…"},{key:"instagram_url",label:"Instagram URL",type:"url",placeholder:"https://instagram.com/…"},{key:"twitter_url",label:"Twitter / X URL",type:"url",placeholder:"https://twitter.com/…"},{key:"youtube_url",label:"YouTube URL",type:"url",placeholder:"https://youtube.com/…"},{key:"tiktok_url",label:"TikTok URL",type:"url",placeholder:"https://tiktok.com/…"}]}].map(i=>`
            <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
              <h3 class="text-sm font-black text-white mb-4">${i.section}</h3>
              <div class="form-grid form-grid-2">
                ${i.fields.map(s=>`
                  <div ${s.type==="textarea"?'class="sm:col-span-2"':""}>
                    <label class="lbl">${s.label}</label>
                    ${s.type==="textarea"?`<textarea class="input-field" name="${s.key}" placeholder="${l(s.placeholder)}" rows="2">${l(a[s.key]||"")}</textarea>`:`<input type="${s.type}" class="input-field" name="${s.key}" value="${l(a[s.key]||"")}" placeholder="${l(s.placeholder)}">`}
                  </div>`).join("")}
              </div>
            </div>`).join("")}
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save Content Settings</button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.saveContent=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),{error:i}=await p.from("site_settings").upsert({id:1,...a});if(i){u(i.message,"error");return}u("Content settings saved!")};async function Ji(){const e=document.getElementById("content");try{const[t,a,i]=await Promise.all([p.from("payment_receipts").select("amount,currency,status,created_at").order("created_at",{ascending:!1}).limit(500),p.from("showroom_listings").select("id,listing_type,category,is_active",{count:"exact"}),p.from("profiles").select("user_id,created_at",{count:"exact"})]),s=t.data||[],o=s.filter(c=>["approved","payment_approved","delivered"].includes(c.status)).reduce((c,m)=>c+(parseFloat(m.amount)||0),0),r=s.length>0?(s.filter(c=>c.status!=="cancelled").length/s.length*100).toFixed(1):0,n={};(a.data||[]).forEach(c=>{n[c.category]=(n[c.category]||0)+1});const d=Object.entries(n).sort((c,m)=>m[1]-c[1]).slice(0,8);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Analytics</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          ${k("Total Revenue",`$${o.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald")}
          ${k("Total Orders",s.length,"shopping-bag","blue")}
          ${k("Customers",i.count||0,"users","violet")}
          ${k("Conversion Rate",r+"%","trending-up","amber")}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="bar-chart-3" class="w-4 h-4 text-blue-400"></i> Revenue (Last 6 Months)</h3>
            <canvas id="analytics-chart" height="220"></canvas>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="pie-chart" class="w-4 h-4 text-violet-400"></i> Top Categories by Listings</h3>
            ${d.length===0?'<p class="text-xs text-gray-500 text-center py-8">No data</p>':d.map(([c,m])=>`
              <div class="flex items-center gap-3 py-1.5">
                <span class="text-xs text-gray-300 flex-1 truncate">${l(c)}</span>
                <div class="w-24 h-2 bg-blue-500/10 rounded-full overflow-hidden"><div class="h-full bg-blue-500 rounded-full" style="width:${Math.round(m/d[0][1]*100)}%"></div></div>
                <span class="text-xs font-bold text-white w-6 text-right">${m}</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),Wt(s)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}async function Qi(){const e=document.getElementById("content"),{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">SEO Manager</h2>
      <form id="seo-form" onsubmit="saveSeo(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Homepage SEO</h3>
          <div><label class="lbl">Meta Title</label><input class="input-field" name="meta_title" value="${l(a.meta_title||"")}" placeholder="Weverse Online Shop | Premium International Commerce"></div>
          <div><label class="lbl">Meta Description</label><textarea class="input-field" name="meta_description" rows="2" placeholder="Your trusted global shop…">${l(a.meta_description||"")}</textarea></div>
          <div><label class="lbl">Meta Keywords (comma separated)</label><input class="input-field" name="meta_keywords" value="${l(a.meta_keywords||"")}" placeholder="global marketplace, online shopping, …"></div>
          <div><label class="lbl">Canonical URL</label><input class="input-field" name="canonical_url" value="${l(a.canonical_url||"")}" placeholder="https://yoursite.com"></div>
          <div><label class="lbl">OG Image URL (Social share image)</label><input class="input-field" name="og_image" value="${l(a.og_image||"")}" placeholder="https://…/og-image.jpg"></div>
          <div><label class="lbl">Google Analytics ID</label><input class="input-field" name="ga_id" value="${l(a.ga_id||"")}" placeholder="G-XXXXXXXXXX"></div>
          <div><label class="lbl">Google Search Console Verification</label><input class="input-field" name="gsc_verify" value="${l(a.gsc_verify||"")}" placeholder="Verification meta tag content"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save SEO Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSeo=async function(e){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());await p.from("site_settings").upsert({id:1,...t}),u("SEO settings saved!")};async function Yi(){const e=document.getElementById("content"),{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
          <div><label class="lbl">Sender Name</label><input class="input-field" name="email_from_name" value="${l(a.email_from_name||"")}" placeholder="Weverse Online Shop"></div>
          <div><label class="lbl">Reply-To Email</label><input type="email" class="input-field" name="email_reply_to" value="${l(a.email_reply_to||"")}" placeholder="support@example.com"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save Email Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveEmailSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,s]of t.entries())a[i]=s;["email_order_placed","email_order_shipped","email_order_delivered","email_review_request"].forEach(i=>{i in a?a[i]=!0:a[i]=!1}),await p.from("site_settings").upsert({id:1,...a}),u("Email settings saved!")};async function Pe(){const e=document.getElementById("content");e&&(e.innerHTML=Y());try{const[t,a,i]=await Promise.all([p.from("admin_security_logs").select("*").order("created_at",{ascending:!1}).limit(50),p.from("admin_2fa").select("enabled,backup_codes,created_at").eq("user_id",_.user?.id).maybeSingle(),p.auth.mfa.listFactors()]),s=t.data||[],o=a.data||{},r=(i.data?.totp||[])[0],n=!!r&&r.status==="verified",d=(o.backup_codes||[]).filter(c=>!c.used).length;e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Security</h2>

        <!-- 2FA STATUS BANNER -->
        <div class="p-4 rounded-xl border flex items-center gap-4 ${n?"bg-emerald-500/5 border-emerald-500/20":"bg-amber-500/5 border-amber-500/20"}">
          <div class="w-10 h-10 ${n?"bg-emerald-500/10":"bg-amber-500/10"} rounded-xl flex items-center justify-center shrink-0">
            <i data-lucide="${n?"shield-check":"shield-alert"}" class="w-5 h-5 ${n?"text-emerald-400":"text-amber-400"}"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm font-black ${n?"text-emerald-300":"text-amber-300"}">Two-Factor Authentication is ${n?"ENABLED ✓":"NOT ENABLED"}</p>
            <p class="text-xs text-gray-400 mt-0.5">${n?`Backup codes available: ${d} · Enrolled: ${O(o.created_at)}`:"Enable 2FA to protect your admin account with an authenticator app."}</p>
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
            ${(o.backup_codes||[]).length===0?'<p class="text-xs text-gray-500 col-span-2 text-center py-4">No backup codes generated. Click Regenerate to create them.</p>':(o.backup_codes||[]).map(c=>`<code class="font-mono text-xs px-3 py-2 ${c.used?"bg-gray-900 text-gray-600 line-through":"bg-blue-500/5 text-blue-300 border border-blue-500/15"} rounded-lg">${typeof c=="object"?c.code:c}</code>`).join("")}
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
                <p class="text-[11px] text-gray-500">${l(navigator.userAgent.slice(0,60))}…</p>
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
                ${s.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No security events yet</td></tr>':s.map(c=>{const m=["login_success","login_2fa_success"].includes(c.event_type),g=["login_failed","login_denied","login_backup_code_used"].includes(c.event_type),f=m?"text-emerald-400":g?"text-red-400":"text-gray-300",y={login_success:"Login ✓",login_failed:"Failed Login ✗",login_denied:"Access Denied ✗",login_2fa_success:"2FA Verified ✓",login_backup_code_used:"Backup Code Used",logout:"Logged Out",logout_all_devices:"Logout All Devices"}[c.event_type]||c.event_type;return`<tr>
                      <td><span class="text-xs font-bold ${f}">${l(y)}</span></td>
                      <td><span class="text-xs font-mono text-gray-300">${l(c.ip_address||"—")}</span></td>
                      <td class="hidden sm:table-cell"><span class="text-xs text-gray-500 max-w-[160px] block truncate">${l((c.user_agent||"—").slice(0,50))}</span></td>
                      <td><span class="text-xs text-gray-500">${R(c.created_at)}</span></td>
                    </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,document.getElementById("new-pw")?.addEventListener("input",c=>{const m=c.target.value,g=[{label:"8+ characters",ok:m.length>=8},{label:"Uppercase letter",ok:/[A-Z]/.test(m)},{label:"Number",ok:/[0-9]/.test(m)},{label:"Special character",ok:/[^a-zA-Z0-9]/.test(m)}];document.getElementById("pw-strength").innerHTML=g.map(f=>`<div class="flex items-center gap-1.5 text-[10px] ${f.ok?"text-emerald-400":"text-gray-600"}">
          <i data-lucide="${f.ok?"check-circle":"circle"}" class="w-3 h-3"></i>${f.label}</div>`).join(""),window.lucide&&lucide.createIcons()}),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.changePassword=async function(e){e.preventDefault();const t=document.getElementById("current-pw").value,a=document.getElementById("new-pw").value,i=document.getElementById("confirm-pw").value;if(a!==i){u("Passwords do not match","error");return}if(a.length<8){u("Password must be at least 8 characters","error");return}const{error:s}=await p.auth.signInWithPassword({email:_.user.email,password:t});if(s){u("Current password is incorrect","error");return}const{error:o}=await p.auth.updateUser({password:a});if(o){u(o.message,"error");return}await j(_.user.id,"password_changed"),u("Password updated successfully!"),e.target.reset(),document.getElementById("pw-strength").innerHTML=""};window.setup2FAFlow=async function(){L(`
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
    </div>`),window.lucide&&lucide.createIcons();try{const{data:e,error:t}=await p.auth.mfa.enroll({factorType:"totp",friendlyName:"Weverse Admin"});if(t)throw t;const a=e.totp.qr_code,i=e.totp.secret,s=e.id;document.getElementById("2fa-setup-content").innerHTML=`
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
        <button onclick="confirm2FAEnrollment('${l(s)}')" class="btn-press w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2">
          <i data-lucide="shield-check" class="w-4 h-4"></i> Verify & Enable 2FA
        </button>
      </div>`,window.lucide&&lucide.createIcons(),setTimeout(()=>document.getElementById("setup-totp-code")?.focus(),100),document.getElementById("setup-totp-code")?.addEventListener("input",o=>{o.target.value=o.target.value.replace(/\D/g,"").slice(0,6)})}catch(e){document.getElementById("2fa-setup-content").innerHTML=`<div class="text-red-400 text-sm text-center py-4">${l(e.message)}</div>`}};window.confirm2FAEnrollment=async function(e){const t=document.getElementById("setup-totp-code")?.value?.trim(),a=document.getElementById("setup-2fa-error");if(!t||t.length!==6){a&&(a.textContent="Enter the 6-digit code.",a.classList.remove("hidden"));return}try{const{data:i,error:s}=await p.auth.mfa.challenge({factorId:e});if(s)throw s;const{error:o}=await p.auth.mfa.verify({factorId:e,challengeId:i.id,code:t});if(o)throw o;const r=ma(10);await p.from("admin_2fa").upsert({user_id:_.user.id,enabled:!0,backup_codes:r}),await j(_.user.id,"2fa_enrolled"),G(),ba(r.map(n=>n.code)),Pe()}catch(i){const s=document.getElementById("setup-2fa-error");s&&(s.textContent=i.message?.includes("Invalid")?"Wrong code. Check your app and try again.":i.message,s.classList.remove("hidden")),document.getElementById("setup-totp-code").value="",document.getElementById("setup-totp-code").focus()}};function ma(e){const t=[];for(let a=0;a<e;a++){const i=Array.from({length:16},()=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random()*32)]).join("");t.push({code:`${i.slice(0,4)}-${i.slice(4,8)}-${i.slice(8,12)}-${i.slice(12,16)}`,used:!1})}return t}function ba(e){L(`
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
          ${e.map(t=>`<code class="font-mono text-xs px-3 py-2 bg-blue-500/5 text-blue-300 border border-blue-500/15 rounded-lg text-center select-all">${l(t)}</code>`).join("")}
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

Each code works once. Store securely.`],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download="kco-admin-backup-codes.txt",a.click()};window.regenerateBackupCodes=async function(){if(!confirm("This will invalidate ALL existing backup codes. Continue?"))return;const e=ma(10);await p.from("admin_2fa").update({backup_codes:e}).eq("user_id",_.user.id),u("New backup codes generated"),ba(e.map(t=>t.code)),Pe()};window.disable2FA=async function(){if(confirm("Disable two-factor authentication? Your account will be less secure."))try{const{data:e}=await p.auth.mfa.listFactors(),t=(e?.totp||[])[0];if(t){const{error:a}=await p.auth.mfa.unenroll({factorId:t.id});if(a)throw a}await p.from("admin_2fa").update({enabled:!1}).eq("user_id",_.user.id),await j(_.user.id,"2fa_disabled"),u("2FA has been disabled"),Pe()}catch(e){u(e.message,"error")}};async function Xi(){const e=document.getElementById("content");try{const{data:t}=await p.from("admin_activity_logs").select("*").order("created_at",{ascending:!1}).limit(100);e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Activity Logs</h2>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Action</th><th>Entity</th><th class="hidden sm:table-cell">Admin</th><th>Date</th></tr></thead>
              <tbody>
                ${(t||[]).length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No activity yet</td></tr>':(t||[]).map(a=>`<tr>
                    <td><span class="text-xs font-bold text-white">${l(a.action)}</span></td>
                    <td><span class="text-xs text-gray-400">${l(a.entity_type||"—")} <span class="text-gray-600">${l(a.entity_id?.slice(0,8)||"")}</span></span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-blue-400">${l(a.user_email||a.user_id?.slice(0,8)||"—")}</span></td>
                    <td><span class="text-xs text-gray-500">${R(a.created_at)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}async function Zi(){const e=document.getElementById("content");try{const{data:t}=await p.from("deployment_history").select("*").order("created_at",{ascending:!1}).limit(20);e.innerHTML=`
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
                <div class="flex-1"><p class="text-xs font-bold text-white">${l(a.version||a.id?.slice(0,8))}</p><p class="text-[10px] text-gray-500">${R(a.created_at)}</p></div>
                ${I(a.status||"completed")}
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.exportProducts=async function(){const{data:e}=await p.from("showroom_listings").select("*"),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download=`kco-products-${new Date().toISOString().slice(0,10)}.json`,a.click(),u("Products exported!")};window.exportOrders=async function(){const{data:e}=await p.from("payment_receipts").select("*").order("created_at",{ascending:!1});if(!e||!e.length){u("No orders to export","info");return}const t=Object.keys(e[0]).join(","),a=e.map(o=>Object.values(o).map(r=>`"${String(r||"").replace(/"/g,'""')}"`).join(",")).join(`
`),i=new Blob([t+`
`+a],{type:"text/csv"}),s=document.createElement("a");s.href=URL.createObjectURL(i),s.download=`kco-orders-${new Date().toISOString().slice(0,10)}.csv`,s.click(),u("Orders exported!")};async function es(){const e=document.getElementById("content"),{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,s]of t.entries())a[i]=s;["maintenance_mode","reviews_enabled","wishlist_enabled","guest_checkout"].forEach(i=>{a[i]=i in a}),await p.from("site_settings").upsert({id:1,...a}),u("Settings saved!")};async function Ee(){const e=document.getElementById("content");e&&(e.innerHTML=Y());try{const{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{},i=a.homepage_banner_image||"",s=a.homepage_banner_alt||"Homepage header banner",o=i?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.";e.innerHTML=`
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
                ${i?`<img id="homepage-banner-preview-img" src="${l(i)}" alt="${l(s)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-off" class="mx-auto w-8 h-8 text-gray-500"></i><p class="mt-2 text-xs font-semibold text-gray-500">No banner selected</p></div></div>'}
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
              <span id="homepage-banner-msg">Uploading…</span>
            </div>

            <div class="grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
              <div class="space-y-3">
                <div class="group relative overflow-hidden rounded-2xl border border-dashed border-blue-500/25 bg-[#0b1020] transition hover:border-blue-500/50">
                  <div class="p-3 sm:p-4">
                    <div class="overflow-hidden rounded-xl border border-white/10 bg-[#111827]" style="aspect-ratio: 1600 / 320;">
                      ${i?`<img id="homepage-banner-image" src="${l(i)}" alt="${l(s)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-plus" class="mx-auto w-8 h-8 text-blue-400"></i><p class="mt-2 text-xs font-semibold text-gray-400">Upload a homepage banner</p></div></div>'}
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
                  <textarea class="input-field" id="homepage_banner_alt" name="homepage_banner_alt" rows="4" placeholder="Accessible description for the banner image">${l(s)}</textarea>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}async function Ce(){const e=document.getElementById("content");e&&(e.innerHTML=Y());try{let t=function(n,d,c,m="",g="blue"){const f=!!(c&&c.trim());return`
        <div class="glass-soft border border-${g}-500/15 rounded-xl p-4 space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-xs font-black text-white">${l(n)}</p>
            ${f?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">✓ Uploaded</span>':'<span class="text-[9px] text-gray-600">Empty</span>'}
          </div>
          ${f?`<div class="relative group w-full h-24 rounded-xl overflow-hidden bg-gray-900 border border-blue-500/10 flex items-center justify-center">
                <img src="${l(c)}" alt="${l(n)}" class="max-h-20 max-w-full object-contain p-2" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-600 text-center&quot;>Image broken</p>'">
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
          <input type="hidden" name="${d}" id="val-${d}" value="${l(c||"")}">
          <div class="flex gap-2">
            <input class="input-field text-xs flex-1 ${f?"":"hidden"}" id="url-${d}" value="${l(c||"")}" placeholder="Or paste image URL" oninput="document.getElementById('val-${d}').value=this.value;updateLivePreview()">
            <button type="button" onclick="document.getElementById('url-${d}').classList.toggle('hidden')" class="text-[10px] text-${g}-400 hover:text-${g}-300 transition shrink-0">${f?"Edit URL":"Paste URL"}</button>
          </div>
        </div>`};const{data:a}=await p.from("site_settings").select("*").limit(1).maybeSingle(),i=a||{},s=i.brand_name||i.site_name||Bt,o=i.brand_slogan||i.site_tagline||Mt,r=i.brand_logo||i.brand_header_logo||"";e.innerHTML=`
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
                ${r?`<img src="${l(r)}" alt="${l(s)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
              </div>
              <div>
                <p id="preview-name" class="text-sm font-black text-white leading-none">${l(s)}</p>
                <p id="preview-slogan" class="text-[10px] text-blue-400 font-semibold mt-0.5">${l(o)}</p>
              </div>
              <div id="preview-badge-wrap" class="ml-auto ${i.brand_badge?"":"hidden"}">
                <img id="preview-badge" src="${l(i.brand_badge||"")}" alt="Verified" class="w-6 h-6 object-contain">
              </div>
            </div>
            <div class="px-4 py-2 border-t border-gray-800 text-[11px] text-gray-500" style="background:#070b16">
              <span id="preview-btn" style="background:${l(i.brand_primary_color||"#f97316")};color:#000;padding:4px 12px;border-radius:8px;font-weight:700;font-size:11px">Shop Now</span>
              <span class="ml-3" style="color:${l(i.brand_secondary_color||"#3b82f6")}">All Products →</span>
            </div>
          </div>
          <!-- Footer preview -->
          <div id="preview-footer" class="rounded-xl px-4 py-3 border border-gray-800 flex items-center gap-3" style="background:#0f172a">
            <div id="preview-footer-logo-wrap" class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style="background:var(--preview-primary,#f97316)">
              ${r?`<img src="${l(r)}" alt="${l(s)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
            </div>
            <div>
              <p id="preview-footer-name" class="text-xs font-black text-white">${l(s)}</p>
              <p id="preview-footer-slogan" class="text-[10px] text-gray-500">${l(o)}</p>
            </div>
            <p class="ml-auto text-[10px] text-gray-600">© 2026 <span id="preview-copy-name">${l(s)}</span></p>
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
                <input class="input-field" name="brand_name" id="inp-brand-name" value="${l(s)}" placeholder="Your brand name" required oninput="updateLivePreview()">
              </div>
              <div>
                <label class="lbl">Short Name</label>
                <input class="input-field" name="brand_short_name" value="${l(i.brand_short_name||"")}" placeholder="e.g. Weverse">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Slogan / Tagline *</label>
                <input class="input-field" name="brand_slogan" id="inp-brand-slogan" value="${l(o)}" placeholder="e.g. Global Shopping • Worldwide Delivery" oninput="updateLivePreview()">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Brand Description</label>
                <textarea class="input-field" name="brand_description" rows="2" placeholder="Short description…">${l(i.brand_description||"")}</textarea>
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

          <!-- ── Brand Font ── -->
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
              <p id="font-sample" class="text-sm text-white font-bold" style="font-family:'${l(i.brand_font||"Inter")}',sans-serif">The quick brown fox jumps — 0123456789 · Weverse Online Shop</p>
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
              <div><label class="lbl">Website URL</label><input class="input-field" name="brand_website_url" value="${l(i.brand_website_url||i.production_url||"https://weverseonlineshop.com")}" placeholder="https://…"></div>
              <div><label class="lbl">Support Email</label><input type="email" class="input-field" name="brand_email" value="${l(i.brand_email||i.contact_email||"")}" placeholder="support@…"></div>
              <div><label class="lbl">Phone / WhatsApp</label><input class="input-field" name="brand_phone" value="${l(i.brand_phone||i.contact_phone||"")}" placeholder="+1 234…"></div>
              <div><label class="lbl">Business Address</label><input class="input-field" name="brand_address" value="${l(i.brand_address||i.contact_address||"")}" placeholder="City, Country"></div>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.toggleLivePreview=function(){document.getElementById("live-preview-panel")?.classList.toggle("hidden"),updateLivePreview()};window.updateLivePreview=function(){const e=document.getElementById("live-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("inp-brand-name")?.value||Bt,a=document.getElementById("inp-brand-slogan")?.value||Mt,i=document.getElementById("ct-primary")?.value||"#f97316",s=document.getElementById("ct-secondary")?.value||"#3b82f6",o=document.getElementById("ct-tag1")?.value||"#22d3ee",r=document.getElementById("ct-tag2")?.value||"#a3e635",n=document.getElementById("val-brand_logo")?.value||DEFAULT_BRAND_LOGO,d=document.getElementById("val-brand_badge")?.value||"";["preview-name","preview-footer-name","preview-copy-name"].forEach(b=>{const h=document.getElementById(b);h&&(h.textContent=t)}),["preview-slogan","preview-footer-slogan"].forEach(b=>{const h=document.getElementById(b);h&&(h.textContent=a)});const c=document.getElementById("preview-slogan");if(c&&a){const b=a,h=b.indexOf(","),$=h>-1?b.slice(0,h+1):b,N=h>-1?b.slice(h+1):"";c.innerHTML=`<span style="color:${o};font-weight:800">${l($)}</span><span style="color:${r};font-weight:700">${l(N)}</span>`}const m=document.getElementById("preview-btn");m&&(m.style.background=i);const g=e.querySelector('[style*="color:"]');g&&(g.style.color=s),["preview-logo-wrap","preview-footer-logo-wrap"].forEach(b=>{const h=document.getElementById(b);h&&(n?(h.innerHTML=`<img src="${n}" alt="${t}" class="w-full h-full object-contain p-1">`,h.style.background="transparent"):(h.innerHTML='<i data-lucide="globe" class="w-4 h-4 text-white"></i>',h.style.background=i,window.lucide&&lucide.createIcons()))});const f=document.getElementById("preview-badge-wrap"),y=document.getElementById("preview-badge");f&&y&&(d?(y.src=d,f.classList.remove("hidden")):f.classList.add("hidden"))};window.triggerImgUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearBrandImg=function(e){document.getElementById("val-"+e).value="";const t=document.getElementById("url-"+e);t&&(t.value=""),(e&&e.startsWith("homepage_")?Ee:Ce)()};window.clearHomepageBannerImg=function(){const e=document.getElementById("val-homepage_banner_image"),t=document.getElementById("url-homepage_banner_image"),a=document.getElementById("homepage_banner_alt");e&&(e.value=""),t&&(t.value=""),a&&(a.value=""),Ee()};window.restoreHomepageBannerDefault=function(){window.clearHomepageBannerImg()};window.syncColor=function(e,t){const a=document.getElementById("color-"+e);a&&/^#[0-9a-fA-F]{6}$/.test(t)&&(a.value=t)};window.previewFont=function(e){const t=document.getElementById("font-sample");t&&(t.style.fontFamily=`'${e}', sans-serif`);const a="gf-preview";let i=document.getElementById(a);i||(i=document.createElement("link"),i.id=a,i.rel="stylesheet",document.head.appendChild(i)),i.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(e)}:wght@400;700;900&display=swap`};const Ge="weverse_brand_v1",ze="weverse_brand_override_v1";function Ve(){try{const e=JSON.parse(localStorage.getItem(ze)||"null");if(e&&typeof e=="object")return e}catch{}try{const e=JSON.parse(localStorage.getItem(Ge)||"null");if(e&&typeof e=="object")return e.data&&typeof e.data=="object"?e.data:e}catch{}return{}}function xe(e){const t={...Ve(),...e};try{localStorage.setItem(ze,JSON.stringify(t))}catch{}try{localStorage.setItem(Ge,JSON.stringify({ts:Date.now(),data:t}))}catch{}return window.dispatchEvent(new StorageEvent("storage",{key:ze})),window.dispatchEvent(new StorageEvent("storage",{key:Ge})),window.dispatchEvent(new CustomEvent("brand-updated",{detail:t})),t}window.handleBrandImgUpload=async function(e,t){const a=e.target.files?.[0];if(!a)return;const i=t&&t.startsWith("homepage_"),s=document.getElementById(i?"homepage-banner-status":"brand-upload-status"),o=document.getElementById(i?"homepage-banner-msg":"brand-upload-msg");s&&s.classList.remove("hidden"),o&&(o.textContent=`Uploading ${a.name}…`);try{const r=a.name.split(".").pop(),n=`brand/${t}-${Date.now()}.${r}`,{error:d}=await p.storage.from("product-images").upload(n,a,{contentType:a.type,upsert:!0});let c;if(d)c=URL.createObjectURL(a),o&&(o.textContent=`Preview only (storage: ${d.message})`);else{const{data:f}=p.storage.from("product-images").getPublicUrl(n);c=f.publicUrl,o&&(o.textContent=`✓ ${a.name} uploaded`)}const m=document.getElementById("val-"+t),g=document.getElementById("url-"+t);m&&(m.value=c),g&&(g.value=c,g.classList.remove("hidden")),i?updateHomepageBannerPreview():(updateLivePreview(),setTimeout(()=>Ce(),1e3))}catch(r){o&&(o.textContent=`Upload failed: ${r.message}`)}setTimeout(()=>s?.classList.add("hidden"),4e3)};window.saveBrandSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[n,d]of t.entries())n.endsWith("_url")||(a[n]=d);a.brand_name&&(a.site_name=a.brand_name),a.brand_slogan&&(a.site_tagline=a.brand_slogan),a.brand_description&&(a.site_description=a.brand_description),a.brand_email&&(a.contact_email=a.brand_email),a.brand_phone&&(a.contact_phone=a.brand_phone),a.brand_address&&(a.contact_address=a.brand_address),a.brand_website_url&&(a.production_url=a.brand_website_url);const i=a.brand_custom_font||a.brand_font;i&&previewFont(i);const s=e.target.querySelector("[type=submit]");s&&(s.disabled=!0,s.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Saving…',window.lucide&&lucide.createIcons());const{data:o}=await p.from("site_settings").select("id").limit(1).maybeSingle();let r;o?.id?{error:r}=await p.from("site_settings").update(a).eq("id",o.id):{error:r}=await p.from("site_settings").insert(a),r?(xe(a),u("Brand saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(xe(a),u("✅ Brand saved! All pages will now show your updated brand.","success")),setTimeout(()=>Ce(),500)};window.toggleHomepageBannerPreview=function(){document.getElementById("homepage-banner-preview-panel")?.classList.toggle("hidden"),updateHomepageBannerPreview()};window.updateHomepageBannerPreview=function(){const e=document.getElementById("homepage-banner-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("val-homepage_banner_image")?.value||"",a=document.getElementById("homepage_banner_alt")?.value||"Homepage header banner",i=document.getElementById("homepage-banner-image"),s=document.getElementById("homepage-banner-preview-img");[i,s].forEach(r=>{r&&(t?(r.src=t,r.alt=a,r.classList.remove("hidden")):r.classList.add("hidden"))});const o=document.getElementById("homepage-banner-preview-note");o&&(o.textContent=t?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.")};window.saveHomepageBranding=async function(e){e.preventDefault();const t={homepage_banner_image:document.getElementById("url-homepage_banner_image")?.value||"",homepage_banner_alt:document.getElementById("homepage_banner_alt")?.value||"Homepage header banner"},a=e.target.querySelector("[type=submit]");a&&(a.disabled=!0,a.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishing…',window.lucide&&lucide.createIcons());const{data:i}=await p.from("site_settings").select("id").limit(1).maybeSingle();let s;i?.id?{error:s}=await p.from("site_settings").update(t).eq("id",i.id):{error:s}=await p.from("site_settings").insert(t),s?(xe({...Ve(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),u("Homepage banner saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(xe({...Ve(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),u("Homepage banner published.","success")),setTimeout(()=>Ee(),500)};window._manualPaymentAccounts=[];function ct(e="USD"){return{id:`bank-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,currency:e,currencyName:e,flag:St("US"),country:"United States",country_code:"US",bankName:"",transferType:"Local & International",beneficiary:"",accountNumber:"",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:""}}function ut(){const e=document.getElementById("manual-payment-accounts-json");e&&(e.value=JSON.stringify(window._manualPaymentAccounts||[]))}function ts(e,t){const a=e.country_code||"US";return`
    <div class="p-4 glass-soft border border-blue-500/10 rounded-xl space-y-3">
      <div class="flex items-center justify-between gap-3">
        <h4 class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="building-2" class="w-3.5 h-3.5 text-blue-400"></i> Bank Account ${t+1}</h4>
        <button type="button" onclick="removeManualPaymentAccount(${t})" class="text-[11px] font-bold text-red-400 hover:text-red-300 transition">Remove</button>
      </div>
      <div class="form-grid form-grid-2">
        <div><label class="lbl">Currency *</label><select class="input-field" onchange="updateManualPaymentAccount(${t}, 'currency', this.value)">${Rt.map(i=>`<option value="${i}" ${e.currency===i?"selected":""}>${i}</option>`).join("")}</select></div>
        <div><label class="lbl">Country *</label><select class="input-field" onchange="updateManualPaymentCountry(${t}, this.value)">${Jt(a)}</select></div>
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
    </div>`}window.renderManualPaymentAccountsEditor=function(){const e=document.getElementById("manual-accounts-editor");e&&(window._manualPaymentAccounts?.length||(window._manualPaymentAccounts=[ct()]),e.innerHTML=`
    <div class="space-y-4">
      ${window._manualPaymentAccounts.map((t,a)=>ts(t,a)).join("")}
      <button type="button" onclick="addManualPaymentAccount()" class="btn-press w-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wide transition flex items-center justify-center gap-2">
        <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Another Bank Account
      </button>
    </div>`,ut(),window.lucide&&lucide.createIcons())};window.addManualPaymentAccount=function(){window._manualPaymentAccounts.push(ct()),renderManualPaymentAccountsEditor()};window.removeManualPaymentAccount=function(e){window._manualPaymentAccounts.splice(e,1),window._manualPaymentAccounts.length||(window._manualPaymentAccounts=[ct()]),renderManualPaymentAccountsEditor()};window.updateManualPaymentAccount=function(e,t,a){const i=window._manualPaymentAccounts[e];i&&(i[t]=a,t==="currency"&&(i.currencyName=a),ut())};window.updateManualPaymentCountry=function(e,t){const a=window._manualPaymentAccounts[e];if(!a)return;const i=we.find(s=>s.code===t);a.country_code=t,a.country=i?.name||"",a.flag=i?.flag||St(t),ut(),renderManualPaymentAccountsEditor()};async function We(){const e=document.getElementById("content");e&&(e.innerHTML=Y());try{const{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),i={...Ea()||{},...t||{}};window._manualPaymentAccounts=Ca(i).map(s=>({...s})),e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white">Payment Settings</h2>
          <div class="flex items-center gap-2 flex-wrap">
            ${i.payment_gateway?`<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Active: ${l(i.payment_gateway)}</span>`:'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Not configured</span>'}
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
                <textarea class="input-field" name="manual_payment_instructions" rows="4" placeholder="Explain how customers should pay and upload their receipt.">${l(La(i))}</textarea>
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
                <div><label class="lbl">Redirect URL (after payment)</label><input class="input-field" name="flutterwave_redirect_url" value="${l(i.flutterwave_redirect_url||"")}" placeholder="${window.location.origin}/payment.html"></div>
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
      </div>`,renderManualPaymentAccountsEditor(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.savePaymentSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=["flutterwave_public_key","flutterwave_secret_key","flutterwave_encryption_key","flutterwave_webhook_secret"],s={};for(const[m,g]of Object.entries(a))i.includes(m)?g&&!g.startsWith("••••")&&g.trim()!==""&&(s[m]=g.trim()):s[m]=g;s.manual_payment_enabled=a.manual_payment_enabled==="on",s.flutterwave_enabled=a.flutterwave_enabled==="on";let o=[];try{o=JSON.parse(a.manual_payment_accounts_json||"[]")}catch{}s.manual_payment_accounts=o;const r=o[0]||{},n=o[1]||{};s.bank1_account_name=r.beneficiary||"",s.bank1_account_number=r.accountNumber||"",s.bank1_bank_name=r.bankName||"",s.bank1_transfer_type=r.transferType||"",s.bank1_sort_code=r.sortCode||r.routing||"",s.bank1_currency=r.currency||"USD",s.bank2_account_name=n.beneficiary||"",s.bank2_account_number=n.accountNumber||"",s.bank2_bank_name=n.bankName||"",s.bank2_transfer_type=n.transferType||"",s.bank2_sort_code=n.sortCode||n.routing||"",s.bank2_currency=n.currency||"USD",Pa(s);const{data:d}=await p.from("site_settings").select("id").limit(1).maybeSingle();let c;if(d?.id?{error:c}=await p.from("site_settings").update(s).eq("id",d.id):{error:c}=await p.from("site_settings").insert(s),c){const m=String(c.message||"");if(/manual_payment_accounts|column|schema cache/i.test(m)){u("Payment settings saved locally. Run the latest migration to persist them to Supabase.","info"),console.warn(c),setTimeout(()=>We(),500);return}u("Save failed: "+c.message,"error"),console.error(c);return}u("✅ Payment settings saved successfully!","success"),setTimeout(()=>We(),500)};window.testFlutterwaveKeys=async function(){const{data:e}=await p.from("site_settings").select("flutterwave_public_key").limit(1).maybeSingle();if(!e?.flutterwave_public_key){u("Save your Flutterwave public key first","info");return}u("Flutterwave key is saved. Use test mode + test card to verify a payment flow.","info")};async function Le(){const e=document.getElementById("content");try{const{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
              <input class="input-field" name="deploy_webhook" value="${l(a.deploy_webhook||"")}" placeholder="https://api.netlify.com/build_hooks/…">
              <p class="text-[10px] text-gray-500 mt-1">Netlify: Site Settings → Build hooks · Vercel: Project → Settings → Git → Deploy Hooks</p>
            </div>
            <div>
              <label class="lbl">Production URL</label>
              <input class="input-field" name="production_url" value="${l(a.production_url||"")}" placeholder="https://yoursite.com">
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${l(t.message)}</div>`)}}window.saveDeploySettings=async function(e){e.preventDefault();const t=e.target?.querySelector("[type=submit]");t&&(t.disabled=!0,t.innerHTML="Saving…");const a=new FormData(e.target),i=Object.fromEntries(a.entries()),s={},o=["github_token","payment_public_key","payment_secret_key","payment_webhook_secret"];for(const[n,d]of Object.entries(i))o.includes(n)?d&&!d.startsWith("•")&&d.trim()!==""&&(s[n]=d.trim()):s[n]=d;const{error:r}=await p.from("site_settings").upsert({id:1,...s});if(t&&(t.disabled=!1,t.innerHTML="💾 Save Deploy & Payment Settings"),r){u(r.message,"error");return}u("Deploy & payment settings saved!"),Le()};async function ga(e="deploy"){const{data:t}=await p.from("site_settings").select("deploy_webhook,production_url,github_repo").limit(1).maybeSingle();if(!t?.deploy_webhook)return u("No webhook URL set. Add your deploy webhook in the settings below.","info"),{ok:!1,reason:"missing_webhook"};let a=t.deploy_webhook;try{const i=new URL(a);e==="rebuild"&&i.searchParams.set("rebuild","1"),a=i.toString()}catch{e==="rebuild"&&(a+=(a.includes("?")?"&":"?")+"rebuild=1")}return{ok:!0,settings:t,hookUrl:a}}async function V(e,t={}){const a=t.version||new Date().toISOString(),i={source:"admin-dashboard",mode:t.mode||"deploy",production_url:t.productionUrl||null,github_repo:t.githubRepo||null,webhook:t.webhook||null,message:t.message||null},{data:s,error:o}=await p.from("deployment_history").insert({version:a,status:e,triggered_by_email:_.user?.email||null,metadata:i,error_message:t.errorMessage||null}).select("id").limit(1).maybeSingle();return{data:s,error:o}}function te(e,t,a,i){if(!e)return;e.disabled=t;const s=e.querySelector("p.text-xs.font-black");s&&(s.textContent=t?a:i)}window.triggerDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-deploy-btn]");te(t,!0,"Deploying…","Deploy Now");try{const a=await ga("deploy");if(!a.ok)return;const{settings:i,hookUrl:s}=a;await V("preparing",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,message:"Deployment queued from admin UI"});const o=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"deploy",source:"admin-dashboard",at:new Date().toISOString()})});if(o.ok)u("🚀 Deployment triggered! Your site will be live in ~2 minutes."),await V("deploying",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,message:"Webhook accepted deployment request"}),setTimeout(()=>Le(),400);else{const r=`Webhook returned error: ${o.status}`;u(r,"error"),await V("failed",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,errorMessage:r})}}catch(a){u("Deploy failed: "+a.message,"error"),await V("failed",{mode:"deploy",errorMessage:a.message})}finally{te(t,!1,"Deploying…","Deploy Now")}};window.triggerRebuild=async function(e){const t=e?.currentTarget||document.querySelector("[data-rebuild-btn]");te(t,!0,"Rebuilding…","Rebuild Site");try{const a=await ga("rebuild");if(!a.ok)return;const{settings:i,hookUrl:s}=a;await V("building",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,message:"Rebuild requested from admin UI"});const o=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"rebuild",source:"admin-dashboard",at:new Date().toISOString()})});if(o.ok)u("🔄 Rebuild triggered successfully."),await V("deploying",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,message:"Webhook accepted rebuild request"}),setTimeout(()=>Le(),400);else{const r=`Rebuild webhook error: ${o.status}`;u(r,"error"),await V("failed",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,errorMessage:r})}}catch(a){u("Rebuild failed: "+a.message,"error"),await V("failed",{mode:"rebuild",errorMessage:a.message})}finally{te(t,!1,"Rebuilding…","Rebuild Site")}};window.publishAndDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-publish-easy-btn]");te(t,!0,"Publishing…","One-Click Publish");try{const a=document.getElementById("deploy-form");if(!a){u("Deploy form is not available. Reload and try again.","error");return}await window.saveDeploySettings({preventDefault(){},target:a}),await window.triggerDeploy()}catch(a){u("Publish failed: "+a.message,"error")}finally{te(t,!1,"Publishing…","One-Click Publish")}};window.reindexSearch=async function(){const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=t?.textContent||"";t&&(t.textContent="Reindexing…");try{const{data:i,error:s}=await p.from("showroom_listings").select("id, updated_at").order("updated_at",{ascending:!1});if(s)return B(s)?u("⚠️ Reindex blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):u("Could not load listings to reindex: "+s.message,"error");const o=i||[];if(!o.length){u("No listings to reindex.");return}let r=0,n=0,d=!1;const c=40;for(let m=0;m<o.length;m+=c){const g=o.slice(m,m+c),{error:f}=await p.from("showroom_listings").update({updated_at:new Date().toISOString()}).in("id",g.map(y=>y.id));f?(B(f)&&(d=!0),n+=g.length):r+=g.length,t&&(t.textContent=`Reindexing… ${Math.min(m+c,o.length)}/${o.length}`)}if(d){u(`⚠️ Reindex partially blocked: database admin role rejected some writes. Re-run the admin permission migration. (${r}/${o.length} done)`,"error");return}u(`Search index rebuilt for ${r} listing${r!==1?"s":""}${n?` (${n} failed)`:""}.`,n?"error":"success")}catch(i){u("Reindex failed: "+i.message,"error")}finally{t&&(t.textContent=a)}};window.syncShowroomToDB=async function(){if(!Array.isArray(T)||!T.length){u("No static showroom listings found to sync.","info");return}const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=t?.textContent||"";t&&(t.textContent="Syncing…");try{const{data:i,error:s}=await p.from("showroom_listings").select("property_id");if(s)return B(s)?u("⚠️ Sync blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):u("Could not load existing listings: "+s.message,"error");const o=new Set((i||[]).map(g=>g.property_id)),r=T.filter(g=>g&&g.property_id&&!o.has(g.property_id));if(!r.length){u("Showroom already in sync — no new listings to add.");return}let n=0,d=0,c=!1;const m=20;for(let g=0;g<r.length;g+=m){const f=r.slice(g,g+m).map(b=>({property_id:b.property_id,listing_type:b.listing_type||"product",category:b.category||null,subcategory:b.subcategory||null,title:b.title||"Untitled Listing",description:b.description||"",price:parseFloat(b.price)||0,currency:b.currency||"USD",country:b.country||"",country_code:b.country_code||"",state:b.state||"",city:b.city||"",town:b.town||"",product_location:b.product_location||"",latitude:b.latitude??null,longitude:b.longitude??null,property_type:b.property_type||null,listing_status:b.listing_status||"sale",bedrooms:b.bedrooms??null,bathrooms:b.bathrooms??null,building_size:b.building_size||"",land_size:b.land_size||"",parking_spaces:b.parking_spaces??null,furnished:b.furnished||"",features:Array.isArray(b.features)?b.features:[],tags:Array.isArray(b.tags)?b.tags:[],highlights:Array.isArray(b.highlights)?b.highlights:[],seo_keywords:Array.isArray(b.seo_keywords)?b.seo_keywords:[],images:Array.isArray(b.images)?b.images:[],brand:b.brand||null,color:b.color||null,size:b.size||null,condition:b.condition||null,warranty:b.warranty||null,availability_status:b.availability_status||"In Stock",stock_quantity:b.stock_quantity!=null?parseInt(b.stock_quantity,10):null,is_active:b.is_active!==!1,is_featured:!!b.is_featured,is_ai_generated:!!b.is_ai_generated,ai_generated_fields:Array.isArray(b.ai_generated_fields)?b.ai_generated_fields:[],specifications:b.specifications||{},created_at:b.created_at||new Date().toISOString()})),{error:y}=await p.from("showroom_listings").insert(f);y?(B(y)&&(c=!0),d+=f.length):n+=f.length,t&&(t.textContent=`Syncing… ${Math.min(g+m,r.length)}/${r.length}`)}if(c){u(`⚠️ Sync partially blocked: database admin role rejected some inserts. Re-run the admin permission migration. (${n}/${r.length} added)`,"error");return}u(`Showroom synced: ${n} new listing${n!==1?"s":""} added to the database${d?` (${d} failed)`:""}.`,d?"error":"success")}catch(i){u("Sync failed: "+i.message,"error")}finally{t&&(t.textContent=a)}};window.testGitHubConnection=async function(){const e=document.querySelector("[name=github_username]")?.value?.trim(),t=document.querySelector("[name=github_repo]")?.value?.trim();if(!e||!t){u("Enter your GitHub username and repo name first","info");return}try{const a=await fetch(`https://api.github.com/repos/${e}/${t}`);if(a.ok){const i=await a.json();u(`✓ Connected: ${i.full_name} (${i.visibility})`)}else a.status===404?u("Repository not found. Check username and repo name.","error"):u("GitHub API error: "+a.status,"error")}catch{u("Could not reach GitHub API","error")}};window.deployToProduction=window.triggerDeploy;window.rebuildSite=window.triggerRebuild;window._liveControlAdminState=null;window._livePublicState=null;async function oe(){window._liveControlAdminState||(window._liveControlAdminState=await Sa()),window._livePublicState||(window._livePublicState=await Aa())}function as(e,t,a){const i=t.split(".");let s=e;for(let o=0;o<i.length-1;o++){const r=i[o];(!s[r]||typeof s[r]!="object")&&(s[r]={}),s=s[r]}s[i[i.length-1]]=a}function fa(e,t,a){const i=s=>{const o=s.split(".");let r=e;for(const n of o)r=r?.[n];return r||""};return`
    <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-4">
      <div class="flex items-start justify-between gap-3">
        <div>
          <div class="flex items-center gap-2 mb-1"><i data-lucide="${t.icon}" class="w-4 h-4 text-blue-400"></i><h3 class="text-sm font-black text-white">${t.label}</h3></div>
          <p class="text-[11px] text-gray-500">${t.description}</p>
        </div>
        <label class="toggle-switch shrink-0"><input type="checkbox" ${e.enabled?"checked":""} onchange="toggleLivePlatformEnabled('${a}','${e.id}', this.checked)"><span class="toggle-slider"></span></label>
      </div>
      <div class="form-grid form-grid-2">
        ${t.fields.includes("apiKey")?`<div><label class="lbl">API Key</label><input class="input-field" type="password" value="${l(i("credentials.apiKey"))}" oninput="updateLivePlatformField('${a}','${e.id}','credentials.apiKey', this.value)" placeholder="Add API key later"></div>`:""}
        ${t.fields.includes("apiSecret")?`<div><label class="lbl">API Secret</label><input class="input-field" type="password" value="${l(i("credentials.apiSecret"))}" oninput="updateLivePlatformField('${a}','${e.id}','credentials.apiSecret', this.value)" placeholder="Add API secret later"></div>`:""}
        ${t.fields.includes("clientId")?`<div><label class="lbl">Client ID</label><input class="input-field" value="${l(i("credentials.clientId"))}" oninput="updateLivePlatformField('${a}','${e.id}','credentials.clientId', this.value)" placeholder="Client ID"></div>`:""}
        ${t.fields.includes("clientSecret")?`<div><label class="lbl">Client Secret</label><input class="input-field" type="password" value="${l(i("credentials.clientSecret"))}" oninput="updateLivePlatformField('${a}','${e.id}','credentials.clientSecret', this.value)" placeholder="Client secret"></div>`:""}
        ${t.fields.includes("sdkKey")?`<div><label class="lbl">SDK Key</label><input class="input-field" value="${l(i("credentials.sdkKey"))}" oninput="updateLivePlatformField('${a}','${e.id}','credentials.sdkKey', this.value)" placeholder="SDK key"></div>`:""}
        ${t.fields.includes("sdkSecret")?`<div><label class="lbl">SDK Secret</label><input class="input-field" type="password" value="${l(i("credentials.sdkSecret"))}" oninput="updateLivePlatformField('${a}','${e.id}','credentials.sdkSecret', this.value)" placeholder="SDK secret"></div>`:""}
        ${t.fields.includes("channelId")?`<div><label class="lbl">Channel ID</label><input class="input-field" value="${l(i("settings.channelId"))}" oninput="updateLivePlatformField('${a}','${e.id}','settings.channelId', this.value)" placeholder="Channel or creator ID"></div>`:""}
        ${t.fields.includes("pageId")?`<div><label class="lbl">Page ID</label><input class="input-field" value="${l(i("settings.pageId"))}" oninput="updateLivePlatformField('${a}','${e.id}','settings.pageId', this.value)" placeholder="Page ID"></div>`:""}
        ${t.fields.includes("meetingId")?`<div><label class="lbl">Meeting / Room ID</label><input class="input-field" value="${l(i("settings.meetingId"))}" oninput="updateLivePlatformField('${a}','${e.id}','settings.meetingId', this.value)" placeholder="Meeting or room ID"></div>`:""}
        ${t.fields.includes("tenantId")?`<div><label class="lbl">Tenant ID</label><input class="input-field" value="${l(i("settings.tenantId"))}" oninput="updateLivePlatformField('${a}','${e.id}','settings.tenantId', this.value)" placeholder="Tenant ID"></div>`:""}
        ${t.fields.includes("streamKey")?`<div><label class="lbl">Stream Key</label><input class="input-field font-mono" value="${l(i("settings.streamKey"))}" oninput="updateLivePlatformField('${a}','${e.id}','settings.streamKey', this.value)" placeholder="Stream key"></div>`:""}
        ${t.fields.includes("rtmpUrl")?`<div><label class="lbl">RTMP / Ingest URL</label><input class="input-field font-mono" value="${l(i("settings.rtmpUrl"))}" oninput="updateLivePlatformField('${a}','${e.id}','settings.rtmpUrl', this.value)" placeholder="rtmp://..."></div>`:""}
        ${t.fields.includes("hostUrl")?`<div><label class="lbl">Host / Control URL</label><input class="input-field" value="${l(i("links.hostUrl"))}" oninput="updateLivePlatformField('${a}','${e.id}','links.hostUrl', this.value)" placeholder="Host dashboard URL"></div>`:""}
        ${t.fields.includes("embedUrl")?`<div><label class="lbl">Embed URL</label><input class="input-field" value="${l(i("links.embedUrl"))}" oninput="updateLivePlatformField('${a}','${e.id}','links.embedUrl', this.value)" placeholder="Embeddable player URL"></div>`:""}
        ${t.fields.includes("joinUrl")?`<div><label class="lbl">Join URL</label><input class="input-field" value="${l(i("links.joinUrl"))}" oninput="updateLivePlatformField('${a}','${e.id}','links.joinUrl', this.value)" placeholder="Call join URL"></div>`:""}
        ${t.fields.includes("webhookSecret")?`<div><label class="lbl">Webhook Secret</label><input class="input-field" type="password" value="${l(i("settings.webhookSecret"))}" oninput="updateLivePlatformField('${a}','${e.id}','settings.webhookSecret', this.value)" placeholder="Webhook secret"></div>`:""}
      </div>
      <div class="text-[11px] text-gray-500">Keys are not hardcoded. Save your settings here and control them from the dashboard only.</div>
    </div>`}function is(e){return e.length?e.map(t=>`
    <div class="glass-soft border border-blue-500/10 rounded-xl p-4 flex flex-col gap-3 lg:flex-row lg:items-center">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1"><span class="text-sm font-black text-white">${l(t.title)}</span>${I(t.status)}</div>
        <p class="text-[11px] text-gray-500">Platforms: ${l(t.selectedPlatforms.join(", ")||"None")} ${t.scheduledAt?`• Scheduled: ${l(R(t.scheduledAt))}`:""}</p>
        ${t.headline?`<p class="text-xs text-gray-400 mt-1">${l(t.headline)}</p>`:""}
      </div>
      <div class="flex flex-wrap gap-2">
        <button onclick="startLiveSession('${t.id}')" class="btn-press px-3 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-bold rounded-xl transition">Start</button>
        <button onclick="endLiveSession('${t.id}')" class="btn-press px-3 py-2 bg-gray-700/50 hover:bg-gray-700 text-gray-200 text-xs font-bold rounded-xl transition">End</button>
        <button onclick="removeLiveSession('${t.id}')" class="btn-press px-3 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs font-bold rounded-xl transition">Delete</button>
      </div>
    </div>`).join(""):'<p class="text-sm text-gray-500 text-center py-8">No live sessions created yet.</p>'}async function re(){const e=document.getElementById("content");e&&(e.innerHTML=Y()),await oe();const t=window._livePublicState||{},a=window._liveControlAdminState,i=a.streamingPlatforms.filter(r=>r.enabled).length,s=a.liveSessions,o=[...a.streamingPlatforms].sort((r,n)=>r.id==="tiktok-live"?-1:n.id==="tiktok-live"?1:0);e.innerHTML=`
    <div class="space-y-5 fade-in">
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex-1">
          <h2 class="text-xl font-black text-white">Live Streaming Manager</h2>
          <p class="text-sm text-gray-500 mt-1">Connect platforms, schedule streams, publish LIVE NOW on the homepage, and prepare multi-platform broadcasting without touching code.</p>
        </div>
        <button onclick="saveLiveStreamingSettings()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">Save Streaming Settings</button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        ${k("Enabled Platforms",i,"radio","red","Live destinations configured")}
        ${k("Scheduled Streams",s.filter(r=>r.status==="scheduled").length,"calendar","blue","Upcoming broadcasts")}
        ${k("Live Now",t.isLive?1:0,"signal","emerald",t.isLive?t.headline||"Active stream":"Offline")}
        ${k("Viewers Snapshot",t.viewerCount||0,"users","amber",`${t.commentCount||0} comments tracked`)}
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
          ${o.map(r=>fa(r,Ke.find(n=>n.id===r.id),"streamingPlatforms")).join("")}
        </div>
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
        <div>
          <h3 class="text-sm font-black text-white">Create or Schedule Live Stream</h3>
          <p class="text-[11px] text-gray-500 mt-1">Select one or more platforms, set the homepage embed URL, and publish a synchronized live status across the website and mobile app.</p>
        </div>
        <div class="form-grid form-grid-2">
          <div><label class="lbl">Stream Title</label><input id="live-session-title" class="input-field" placeholder="e.g. Friday Product Showcase"></div>
          <div><label class="lbl">Badge Text</label><input id="live-session-badge" class="input-field" value="${l(a.preferences.defaultBadgeText||"LIVE NOW")}" placeholder="LIVE NOW"></div>
          <div class="sm:col-span-2"><label class="lbl">Homepage Headline</label><input id="live-session-headline" class="input-field" placeholder="Tell visitors what is happening live"></div>
          <div class="sm:col-span-2"><label class="lbl">Description</label><textarea id="live-session-description" class="input-field" rows="3" placeholder="Stream summary, agenda, products, or event details"></textarea></div>
          <div><label class="lbl">Embed URL</label><input id="live-session-embed" class="input-field" placeholder="https://... embeddable live player"></div>
          <div><label class="lbl">Schedule Date & Time</label><input id="live-session-scheduled" type="datetime-local" class="input-field"></div>
        </div>
        <div>
          <label class="lbl">Stream To Platforms</label>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 mt-2">
            ${o.filter(r=>r.enabled).map(r=>`<label class="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-950/40 px-3 py-2 text-xs text-gray-300"><input type="checkbox" class="accent-red-500" value="${r.id}" data-live-platform-select><span>${l(r.label)}</span></label>`).join("")||'<p class="text-xs text-gray-500">Enable at least one streaming platform above.</p>'}
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
        ${is(s)}
      </div>
    </div>`,window.lucide&&lucide.createIcons()}function ss(e){return e.length?e.map(t=>`
    <div class="glass-soft border border-blue-500/10 rounded-xl p-4 flex flex-col gap-3 lg:flex-row lg:items-center">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1"><span class="text-sm font-black text-white">${l(t.title)}</span>${I(t.status)}</div>
        <p class="text-[11px] text-gray-500">Provider: ${l(t.providerId)} • Type: ${l(t.callType)}${t.scheduledAt?` • Scheduled: ${l(R(t.scheduledAt))}`:""}</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <button onclick="startVideoRoom('${t.id}')" class="btn-press px-3 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-xl transition">Start</button>
        <button onclick="endVideoRoom('${t.id}')" class="btn-press px-3 py-2 bg-gray-700/50 hover:bg-gray-700 text-gray-200 text-xs font-bold rounded-xl transition">End</button>
        <button onclick="removeVideoRoom('${t.id}')" class="btn-press px-3 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs font-bold rounded-xl transition">Delete</button>
      </div>
    </div>`).join(""):'<p class="text-sm text-gray-500 text-center py-8">No video call rooms created yet.</p>'}async function pe(){const e=document.getElementById("content");e&&(e.innerHTML=Y()),await oe();const t=window._liveControlAdminState,a=t.videoCallProviders.filter(s=>s.enabled).length,i=t.videoCallRooms.filter(s=>s.status==="live").length;e.innerHTML=`
    <div class="space-y-5 fade-in">
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex-1">
          <h2 class="text-xl font-black text-white">Video Call Manager</h2>
          <p class="text-sm text-gray-500 mt-1">Configure meeting providers, create one-to-one or group rooms, and manage screen sharing, recording, waiting rooms, moderation, and file sharing from the dashboard.</p>
        </div>
        <button onclick="saveVideoCallSettings()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">Save Video Call Settings</button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        ${k("Enabled Call Providers",a,"video","blue","Provider connections ready")}
        ${k("Active Calls",i,"video","emerald","Rooms currently running")}
        ${k("Scheduled Calls",t.videoCallRooms.filter(s=>s.status==="scheduled").length,"calendar","amber","Upcoming meetings")}
        ${k("Room Templates",t.videoCallRooms.length,"layers","violet","Saved one-to-one and group rooms")}
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
        <h3 class="text-sm font-black text-white">Provider Connections</h3>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
          ${t.videoCallProviders.map(s=>fa(s,Ia.find(o=>o.id===s.id),"videoCallProviders")).join("")}
        </div>
      </div>

      <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
        <div>
          <h3 class="text-sm font-black text-white">Create Video Call Room</h3>
          <p class="text-[11px] text-gray-500 mt-1">Prepare rooms for one-to-one calls, group calls, screen sharing, moderation, and recorded meetings.</p>
        </div>
        <div class="form-grid form-grid-2">
          <div><label class="lbl">Room Title</label><input id="video-room-title" class="input-field" placeholder="e.g. VIP Buyer Consultation"></div>
          <div><label class="lbl">Provider</label><select id="video-room-provider" class="input-field">${t.videoCallProviders.map(s=>`<option value="${s.id}">${l(s.label)}</option>`).join("")}</select></div>
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
        ${ss(t.videoCallRooms)}
      </div>
    </div>`,window.lucide&&lucide.createIcons()}window.updateLivePlatformField=function(e,t,a,i){const o=(window._liveControlAdminState?.[e]||[]).find(r=>r.id===t);o&&as(o,a,i)};window.toggleLivePlatformEnabled=function(e,t,a){const s=(window._liveControlAdminState?.[e]||[]).find(o=>o.id===t);s&&(s.enabled=a)};async function D(e=!0){const{error:t}=await $a(window._liveControlAdminState);return t?(u("Saved locally. Run the live manager migration to persist provider settings.","info"),!1):(e&&u("Live manager settings saved"),!0)}window.saveLiveStreamingSettings=async function(){await D(!0)};window.saveVideoCallSettings=async function(){await D(!0)};window.createLiveSession=async function(e){await oe();const t=[...document.querySelectorAll("[data-live-platform-select]:checked")].map(i=>i.value),a={id:`session-${Date.now()}`,title:document.getElementById("live-session-title")?.value?.trim()||"Live Stream",headline:document.getElementById("live-session-headline")?.value?.trim()||"",description:document.getElementById("live-session-description")?.value?.trim()||"",embedUrl:document.getElementById("live-session-embed")?.value?.trim()||"",badgeText:document.getElementById("live-session-badge")?.value?.trim()||"LIVE NOW",status:e==="live"?"live":"scheduled",scheduledAt:document.getElementById("live-session-scheduled")?.value||"",startedAt:e==="live"?new Date().toISOString():"",selectedPlatforms:t,notifyVisitors:document.getElementById("live-notify-visitors")?.checked!==!1,showHomepageBadge:document.getElementById("live-show-badge")?.checked!==!1,showHomepageEmbed:!!document.getElementById("live-show-embed")?.checked,viewerCount:0,commentCount:0,streamStatus:e==="live"?"live":"scheduled"};window._liveControlAdminState.liveSessions.unshift(a),e==="live"&&(window._livePublicState={isLive:!0,badgeText:a.badgeText,headline:a.headline||a.title,description:a.description,platformLabels:a.selectedPlatforms.map(i=>Ke.find(s=>s.id===i)?.label||i),embedUrl:a.showHomepageEmbed?a.embedUrl:"",viewerCount:a.viewerCount,commentCount:a.commentCount,streamStatus:"live",sessionId:a.id,notifyVisitors:a.notifyVisitors,startedAt:a.startedAt,updatedAt:new Date().toISOString()},await Je(window._livePublicState)),await D(!1),u(e==="live"?"Live stream started":"Live stream scheduled"),re()};window.startLiveSession=async function(e){await oe();const t=window._liveControlAdminState.liveSessions.find(a=>a.id===e);t&&(t.status="live",t.startedAt=new Date().toISOString(),t.streamStatus="live",window._livePublicState={isLive:!0,badgeText:t.badgeText||"LIVE NOW",headline:t.headline||t.title,description:t.description||"",platformLabels:t.selectedPlatforms.map(a=>Ke.find(i=>i.id===a)?.label||a),embedUrl:t.showHomepageEmbed?t.embedUrl:"",viewerCount:t.viewerCount||0,commentCount:t.commentCount||0,streamStatus:"live",sessionId:t.id,notifyVisitors:t.notifyVisitors!==!1,startedAt:t.startedAt,updatedAt:new Date().toISOString()},await Je(window._livePublicState),await D(!1),u("Live session published"),re())};window.endLiveSession=async function(e){await oe();const t=window._liveControlAdminState.liveSessions.find(a=>a.id===e);t&&(t.status="ended",t.streamStatus="ended",t.endedAt=new Date().toISOString(),window._livePublicState?.sessionId===e?await window.clearPublicLiveState():(await D(!1),u("Live session ended"),re()))};window.removeLiveSession=async function(e){window._liveControlAdminState.liveSessions=window._liveControlAdminState.liveSessions.filter(t=>t.id!==e),window._livePublicState?.sessionId===e&&await window.clearPublicLiveState(),await D(!1),u("Live session deleted"),re()};window.clearPublicLiveState=async function(){window._livePublicState={isLive:!1,badgeText:"LIVE NOW",headline:"",description:"",platformLabels:[],embedUrl:"",viewerCount:0,commentCount:0,streamStatus:"offline",sessionId:"",notifyVisitors:!0,startedAt:"",updatedAt:new Date().toISOString()},await Je(window._livePublicState),await D(!1),u("Public live state cleared"),re()};window.createVideoRoom=async function(e){await oe();const t={id:`room-${Date.now()}`,title:document.getElementById("video-room-title")?.value?.trim()||"Video Call Room",providerId:document.getElementById("video-room-provider")?.value||"zoom",callType:document.getElementById("video-room-type")?.value||"group",roomCode:document.getElementById("video-room-code")?.value?.trim()||"",hostUrl:document.getElementById("video-room-host")?.value?.trim()||"",joinUrl:document.getElementById("video-room-join")?.value?.trim()||"",embedUrl:document.getElementById("video-room-embed")?.value?.trim()||"",status:e==="live"?"live":"scheduled",scheduledAt:document.getElementById("video-room-scheduled")?.value||"",startedAt:e==="live"?new Date().toISOString():"",maxParticipants:parseInt(document.getElementById("video-room-max")?.value||"25",10)||25,waitingRoom:!!document.getElementById("video-waiting-room")?.checked,screenShare:!!document.getElementById("video-screen-share")?.checked,recording:!!document.getElementById("video-recording")?.checked,chatEnabled:!!document.getElementById("video-chat")?.checked,fileSharing:!!document.getElementById("video-file-share")?.checked,muteOnEntry:!!document.getElementById("video-mute-entry")?.checked,cameraControl:!!document.getElementById("video-camera-control")?.checked,removeParticipants:!!document.getElementById("video-remove-participants")?.checked,notes:document.getElementById("video-room-notes")?.value?.trim()||""};window._liveControlAdminState.videoCallRooms.unshift(t),await D(!1),e==="live"&&t.hostUrl&&window.open(t.hostUrl,"_blank","noopener"),u(e==="live"?"Video call started":"Video call scheduled"),pe()};window.startVideoRoom=async function(e){const t=window._liveControlAdminState.videoCallRooms.find(a=>a.id===e);t&&(t.status="live",t.startedAt=new Date().toISOString(),await D(!1),t.hostUrl&&window.open(t.hostUrl,"_blank","noopener"),u("Video room started"),pe())};window.endVideoRoom=async function(e){const t=window._liveControlAdminState.videoCallRooms.find(a=>a.id===e);t&&(t.status="ended",t.endedAt=new Date().toISOString(),await D(!1),u("Video room ended"),pe())};window.removeVideoRoom=async function(e){window._liveControlAdminState.videoCallRooms=window._liveControlAdminState.videoCallRooms.filter(t=>t.id!==e),await D(!1),u("Video room deleted"),pe()};const le=30,S={category:null,page:0,query:""};async function ne(){const e=document.getElementById("content");if(!e)return;await Ra();const t=new Set(It()),a=Ta();S.category||(S.category=a[0]?.slug||null);const i=At(S.category),s=i?i.count:0,o=S.query.trim().toLowerCase(),r=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-xl font-black text-white">Generated Catalog</h2>
        <p class="text-xs text-gray-500 mt-1">Deterministic storefront items. Hiding a listing removes it from the site everywhere — including direct links.</p>
      </div>
      <button onclick="catalogResetHidden()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition">Show All Hidden</button>
    </div>`,n=`
    <div class="flex flex-wrap gap-2">
      ${a.map(y=>`<button onclick="catalogSetCategory('${y.slug}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${S.category===y.slug?"bg-blue-500/20 text-blue-200 border-blue-500/40":"bg-white/5 text-gray-400 border-white/10 hover:text-white"}">${l(y.name)}</button>`).join("")}
    </div>`,d=`
    <div class="flex flex-wrap items-center gap-2">
      <input id="catalog-search-input" class="input-field flex-1 min-w-[220px]" placeholder="Search title, id or subcategory…" value="${l(S.query)}" onkeyup="if (event.key === 'Enter') catalogSearch()">
      <button onclick="catalogSearch()" class="btn-press px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition">Search</button>
    </div>`;let c=[];if(i)if(o){const y=Math.min(s,8e3);for(let b=0;b<y&&c.length<le;b++){const h=yt(i.slug,b);if(!h)continue;`${h.property_id} ${h.title} ${h.subcategory||""} ${h.category||""}`.toLowerCase().includes(o)&&c.push(h)}}else{const y=S.page*le,b=Math.min(y+le,s);for(let h=y;h<b;h++){const $=yt(i.slug,h);$&&c.push($)}}const m=c.length?c.map(y=>{const b=t.has(y.property_id),h=y.images&&y.images[0]||"/fallback.svg";return`
          <div class="flex items-center gap-3 p-3 rounded-xl border ${b?"border-red-500/25 bg-red-500/5":"border-white/10 bg-white/[0.02]"}">
            <img src="${l(h)}" alt="" class="w-12 h-12 rounded-lg object-cover bg-gray-800 shrink-0" loading="lazy">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-white truncate">${l(y.title)}</p>
              <p class="text-[11px] text-gray-500 truncate">${l(y.property_id)} · ${l(y.subcategory||y.category||"")} · ${Dt(y.price,"USD")}</p>
            </div>
            ${I(!b)}
            <button onclick="catalogToggle('${l(y.property_id)}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${b?"bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25":"bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20"}">
              ${b?"Show":"Hide"}
            </button>
          </div>`}).join(""):'<div class="text-center py-16 text-gray-500 text-sm">No catalog items match.</div>',g=o?1:Math.max(1,Math.ceil(s/le)),f=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <p class="text-xs text-gray-500">${o?`${c.length} match`:`${s.toLocaleString()} items in ${l(i?.name||"")}`} · ${t.size} hidden</p>
      <div class="flex items-center gap-2">
        <button onclick="catalogPage(-1)" ${S.page<=0?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Prev</button>
        <span class="text-xs text-gray-500">Page ${S.page+1} / ${g}</span>
        <button onclick="catalogPage(1)" ${S.page>=g-1?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Next</button>
      </div>
    </div>`;e.innerHTML=`
    <div class="space-y-4 fade-in">
      ${r}
      ${n}
      ${d}
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 space-y-2">${m}</div>
      ${f}
    </div>`,window.lucide&&lucide.createIcons()}window.catalogSetCategory=function(e){S.category=e,S.page=0,S.query="",ne()};window.catalogSearch=function(){const e=document.getElementById("catalog-search-input");S.query=e?e.value:"",S.page=0,ne()};window.catalogPage=function(e){const t=At(S.category),a=t?t.count:0,i=S.query.trim()?1:Math.max(1,Math.ceil(a/le));S.page=Math.max(0,Math.min(i-1,S.page+e)),ne()};window.catalogToggle=async function(e){const t=!It().includes(e),a=await Ba(e,t);u(t?"Listing hidden from storefront":"Listing restored",a.ok?"success":"info"),ne()};window.catalogResetHidden=async function(){await Ma(),u("All hidden catalog listings restored"),ne()};async function _t(){window.lucide&&lucide.createIcons(),Ft(),await Za(),p.auth.onAuthStateChange((e,t)=>{if(e==="SIGNED_OUT"){_.user=null;const a=document.getElementById("login-screen");a&&(a.style.display="flex")}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_t):_t();
