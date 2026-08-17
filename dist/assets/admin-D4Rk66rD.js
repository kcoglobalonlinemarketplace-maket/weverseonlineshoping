import"./preload-helper-CS1eXPs2.js";import{a as Ma,g as Ra,C as _e,A as Da}from"./localization-Y5CYo-R4.js";import{supabase as p}from"./supabase-client-nvpjTmO6.js";import{patchLocalShowroomListing as ja,upsertLocalShowroomListing as Fe,getLocalShowroomListingById as Pt,listLocalShowroomListings as Et}from"./local-showroom-store-JrQn_yOW.js";import{g as Ct,s as Fa,l as Oa,a as Ua,b as qa}from"./payment-settings-BrR87n_k.js";import{S as U,P as Na,a as Ha,T as Ga,M as za}from"./motorhome-data-_WKsMac0.js";import{getCatalogCategory as Tt,getCatalogCategories as Wa,generateProduct as _t}from"./catalog-BzyCL9ZE.js";import{getHiddenCatalogIds as Bt,saveCatalogHidden as Va,resetHiddenCatalogIds as Ka,loadHiddenCatalogIds as Ja}from"./catalog-hidden-store-BJoPnRIT.js";const j=1,J=5e6,Qa=[{id:"prod-smartphone",listingType:"product",category:"Phones",subcategory:"Smartphones",label:"Flagship Smartphone",brand:"Global Mobile",model:"X Pro",color:"Midnight Black",size:"6.7-inch",condition:"New",features:["5G connectivity","OLED display","Fast charging","Unlocked","Premium cameras"],highlights:["Retail-ready packaging","Strong search demand","Ideal for global shipping"],keywords:["smartphone","mobile phone","5g"],descriptionType:"phone"},{id:"prod-laptop",listingType:"product",category:"Computers & Laptops",subcategory:"Laptops",label:"Performance Laptop",brand:"NorthBridge",model:"Studio 14",color:"Silver",size:"14-inch",condition:"New",features:["Fast processor","SSD storage","Long battery life","Portable chassis","Business-ready design"],highlights:["Suitable for work and study","Premium margin band","Global audience appeal"],keywords:["laptop","notebook","computer"],descriptionType:"laptop"},{id:"prod-tv",listingType:"product",category:"Electronics",subcategory:"Smart TVs",label:"4K Smart TV",brand:"VistaHome",model:"UltraView",color:"Black",size:"65-inch",condition:"New",features:["4K panel","Streaming apps","HDR support","Voice control","Slim bezel"],highlights:["Living-room centerpiece","Popular premium electronics segment"],keywords:["tv","smart tv","home electronics"],descriptionType:"electronics"},{id:"prod-watch",listingType:"product",category:"Watches",subcategory:"Luxury Watches",label:"Luxury Wristwatch",brand:"Aurelius",model:"Chrono 8",color:"Gold / Black",size:"42mm",condition:"New",features:["Precision movement","Premium case","Gift-ready presentation","Water resistance","Collector appeal"],highlights:["High perceived value","Strong gifting category"],keywords:["watch","luxury watch","timepiece"],descriptionType:"luxury"},{id:"prod-jewelry",listingType:"product",category:"Jewelry",subcategory:"Fine Jewelry",label:"Fine Jewelry Set",brand:"Maison Valeur",model:"Signature Set",color:"Gold",size:"Adjustable",condition:"New",features:["Premium finish","Gift packaging","Occasion-ready","Elegant styling"],highlights:["High-value presentation","Wedding and celebration demand"],keywords:["jewelry","necklace","bracelet"],descriptionType:"luxury"},{id:"prod-handbag",listingType:"product",category:"Bags & Accessories",subcategory:"Designer Bags",label:"Designer Handbag",brand:"Rue Maison",model:"Carry All",color:"Tan",size:"Medium",condition:"New",features:["Structured silhouette","Premium hardware","Travel-friendly storage","Retail-ready finish"],highlights:["Fashion-forward listing","Broad international demand"],keywords:["handbag","designer bag","accessories"],descriptionType:"fashion"},{id:"prod-sneakers",listingType:"product",category:"Shoes",subcategory:"Premium Sneakers",label:"Premium Sneakers",brand:"RunNorth",model:"Air Flex",color:"White",size:"EU 42",condition:"New",features:["Comfort cushioning","Streetwear styling","Durable outsole","Daily wear ready"],highlights:["High-conversion category","Easy multi-country merchandising"],keywords:["sneakers","shoes","fashion"],descriptionType:"fashion"},{id:"prod-sofa",listingType:"product",category:"Furniture",subcategory:"Living Room",label:"Luxury Sofa Set",brand:"Grand Habitat",model:"Residence 3-Piece",color:"Sand Beige",size:"3-Piece Set",condition:"New",features:["Premium upholstery","Statement living-room piece","Comfort seating","Interior-ready styling"],highlights:["Large-ticket home category","Ideal for premium households"],keywords:["sofa","furniture","living room"],descriptionType:"home"},{id:"prod-generator",listingType:"product",category:"Home & Kitchen",subcategory:"Power Solutions",label:"Backup Power Generator",brand:"VoltWorks",model:"SilentMax",color:"Graphite",size:"7.5kVA",condition:"New",features:["Reliable backup power","Low-noise housing","Residential and business use","Heavy-duty build"],highlights:["Practical high-demand utility item","Useful in many markets"],keywords:["generator","power","backup power"],descriptionType:"industrial"},{id:"prod-drone",listingType:"product",category:"Cameras & Photography",subcategory:"Drones",label:"Pro Camera Drone",brand:"SkyFrame",model:"Aerial 4K",color:"Gray",size:"Foldable",condition:"New",features:["4K stabilized video","GPS return home","Portable folding frame","Creator-ready footage"],highlights:["Strong visual listing appeal","Premium creator equipment"],keywords:["drone","camera drone","aerial"],descriptionType:"electronics"},{id:"prod-grocery",listingType:"product",category:"Food & Groceries",subcategory:"Family Essentials",label:"Family Grocery Bundle",brand:"Market Select",model:"Household Pack",color:"Mixed",size:"Bulk Pack",condition:"New",features:["Everyday essentials","Bulk value","Family sized","Easy repeat orders"],highlights:["Fast-moving everyday goods","Useful across broad regions"],keywords:["groceries","food bundle","household essentials"],descriptionType:"daily"},{id:"prod-scale-house",listingType:"product",category:"Home & Kitchen",subcategory:"Model Houses",label:"Architectural Model House",brand:"Studio Form",model:"Estate Miniature",color:"Natural Wood",size:"1:50 Scale",condition:"New",features:["Collector display piece","Detailed craftsmanship","Interior decor appeal","Gift-ready packaging"],highlights:["Supports the model-house use case","Works for decor and collector audiences"],keywords:["model house","architectural model","collector decor"],descriptionType:"home"},{id:"veh-sedan",listingType:"product",category:"Cars",subcategory:"Sedans",label:"Executive Sedan",brand:"Summit Motors",model:"S Line",color:"Pearl White",size:"Mid-size",condition:"Used - Like New",features:["Comfortable cabin","Road-trip ready","Well-maintained presentation","Family and executive appeal"],highlights:["Vehicle posts support 24-image galleries","Map-ready listing"],keywords:["car","sedan","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-suv",listingType:"product",category:"Cars",subcategory:"SUVs",label:"Family SUV",brand:"Frontier Auto",model:"Terrain X",color:"Obsidian",size:"7-Seater",condition:"Used - Like New",features:["Spacious seating","Utility-focused cargo room","Suitable for families","Road and city versatility"],highlights:["High-demand automotive segment","Works well with showroom map"],keywords:["suv","family car","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-luxury",listingType:"product",category:"Luxury Cars",subcategory:"Luxury Vehicles",label:"Luxury Performance Car",brand:"Regal Automotive",model:"Imperium GT",color:"Metallic Black",size:"Coupe",condition:"Used - Like New",features:["Prestige brand positioning","Performance styling","Collector-level appeal","Premium interior"],highlights:["Supports the requested high-ticket range","Designed for showroom-style luxury listings"],keywords:["luxury car","sports car","supercar"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-motorcycle",listingType:"product",category:"Motorcycles",subcategory:"Street Bikes",label:"Sport Motorcycle",brand:"Velocity Moto",model:"R 900",color:"Red",size:"900cc",condition:"Used - Like New",features:["Agile handling","Performance design","Lifestyle buyer appeal","Weekend-ready machine"],highlights:["Automotive category with image-rich display"],keywords:["motorcycle","bike","sport bike"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-commercial",listingType:"product",category:"Commercial Vehicles",subcategory:"Utility Vehicles",label:"Commercial Utility Vehicle",brand:"FleetCore",model:"CargoPro",color:"White",size:"Long wheelbase",condition:"Used - Good",features:["Business-ready load space","Fleet-friendly purchase","Service history presentation","Commercial utility"],highlights:["Suitable for business buyers","Map-ready logistics listing"],keywords:["commercial vehicle","cargo van","fleet"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-boat",listingType:"product",category:"Boats & Marine",subcategory:"Leisure Boats",label:"Leisure Boat",brand:"BlueHarbor",model:"Coastline 28",color:"Navy / White",size:"28 ft",condition:"Used - Like New",features:["Marina-ready presentation","Leisure and charter appeal","Premium leisure category"],highlights:["Large-format gallery support","High-ticket recreational listing"],keywords:["boat","marine","yacht"],requiredImageCount:24,descriptionType:"vehicle"}],Ya=[{id:"prop-apartment",listingType:"property",category:"Real Estate",subcategory:"Apartments",label:"City Apartment",propertyType:"Apartment",bedrooms:2,bathrooms:2,buildingSize:"1,150 sqft",landSize:"",furnished:"Furnished",features:["Secure access","Modern kitchen","Prime urban access","Balcony or city views"],highlights:["Strong urban demand","Good for short and long stay buyers"],keywords:["apartment","real estate","city home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-condo",listingType:"property",category:"Real Estate",subcategory:"Condos",label:"Modern Condo",propertyType:"Condo",bedrooms:3,bathrooms:2,buildingSize:"1,450 sqft",landSize:"",furnished:"Furnished",features:["Managed building","Amenity access","Contemporary finish","Secure parking"],highlights:["Works across major global markets"],keywords:["condo","property","home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-townhouse",listingType:"property",category:"Real Estate",subcategory:"Townhouses",label:"Townhouse Residence",propertyType:"Townhouse",bedrooms:4,bathrooms:3,buildingSize:"2,000 sqft",landSize:"0.08 acres",furnished:"Unfurnished",features:["Multi-level layout","Family-ready plan","Private entry","Parking included"],highlights:["Popular residential ownership format"],keywords:["townhouse","residence","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-villa",listingType:"property",category:"Real Estate",subcategory:"Villas",label:"Private Villa",propertyType:"Villa",bedrooms:5,bathrooms:5,buildingSize:"4,800 sqft",landSize:"0.4 acres",furnished:"Furnished",features:["Private outdoor space","Premium architecture","Luxury entertaining zones","Prestige location potential"],highlights:["Premium property tier","Designed for international buyers"],keywords:["villa","luxury property","real estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-mansion",listingType:"property",category:"Real Estate",subcategory:"Mansions",label:"Luxury Mansion",propertyType:"Mansion",bedrooms:8,bathrooms:10,buildingSize:"12,000 sqft",landSize:"1.2 acres",furnished:"Furnished",features:["Grand entrance","High-end interior finishes","Staff or guest quarters","Statement curb appeal"],highlights:["Matches the mansion requirement directly","Supports high-ticket luxury listings"],keywords:["mansion","estate","luxury home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-beach",listingType:"property",category:"Real Estate",subcategory:"Beach Houses",label:"Beachfront House",propertyType:"Beach House",bedrooms:4,bathrooms:4,buildingSize:"3,600 sqft",landSize:"0.25 acres",furnished:"Furnished",features:["Waterfront views","Outdoor leisure space","Vacation-rental appeal","Premium lifestyle positioning"],highlights:["Ideal for tourism and lifestyle markets"],keywords:["beach house","waterfront home","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-farm",listingType:"property",category:"Real Estate",subcategory:"Farm Houses",label:"Farm House Estate",propertyType:"Farm House",bedrooms:4,bathrooms:3,buildingSize:"3,100 sqft",landSize:"5 acres",furnished:"Unfurnished",features:["Land-rich asset","Agricultural potential","Quiet residential use","Outbuilding opportunity"],highlights:["Suitable for rural and suburban regions"],keywords:["farm house","landed property","estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-commercial",listingType:"property",category:"Real Estate",subcategory:"Commercial Buildings",label:"Commercial Building",propertyType:"Commercial Building",bedrooms:0,bathrooms:4,buildingSize:"8,500 sqft",landSize:"0.35 acres",furnished:"Unfurnished",features:["Business district potential","Mixed-use flexibility","Visible frontage","Investor-ready asset class"],highlights:["Attractive for business buyers and investors"],keywords:["commercial building","office","investment property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-hotel",listingType:"property",category:"Real Estate",subcategory:"Hotels",label:"Boutique Hotel",propertyType:"Hotel",bedrooms:18,bathrooms:20,buildingSize:"15,000 sqft",landSize:"0.75 acres",furnished:"Furnished",features:["Hospitality-ready layout","Guest-focused amenities","Tourism and corporate appeal","Revenue asset potential"],highlights:["Supports hospitality listings globally"],keywords:["hotel","hospitality","investment"],requiredImageCount:24,descriptionType:"property"},{id:"prop-land",listingType:"property",category:"Real Estate",subcategory:"Land",label:"Development Land",propertyType:"Land",bedrooms:0,bathrooms:0,buildingSize:"",landSize:"10 acres",furnished:"",features:["Development potential","Flexible use case","Long-term investment appeal","Location-led value"],highlights:["Useful for land banking and development"],keywords:["land","plot","development"],requiredImageCount:24,descriptionType:"property"}],Lt=[...Qa,...Ya];function Ze(e){return Ma[e]||"USD"}function Mt(e,t){return Lt.filter(a=>a.listingType!==e?!1:t?a.category===t:!0)}function Xa(e,t){const a=Math.max(j,Math.min(J,Number(e)||j));return new Intl.NumberFormat("en-US",{style:"currency",currency:t,maximumFractionDigits:0}).format(a)}function Za(e,t,a,i,s){const r=Xa(i,a);return e.descriptionType==="vehicle"?`${e.label} listed at ${r}. This template is intended to present a complete automotive post with exterior, interior, condition, performance, and gallery details in a clean showroom-style format.`:e.descriptionType==="property"?`${e.label} located in ${s}. Offered at ${r}, this property template is designed for a complete real-estate presentation with map-ready location data, rich visual gallery coverage, and buyer-friendly highlights covering layout, lifestyle, and investment value.`:e.descriptionType==="phone"?`${e.label} listed at ${r}. The template focuses on a clean premium device presentation with brand, model, condition, core features, and strong online merchandising copy.`:e.descriptionType==="laptop"?`${e.label} listed at ${r}. Built for marketplace listings that need clear performance positioning, specification highlights, and an easy-to-scan description for students, professionals, and remote workers.`:e.descriptionType==="luxury"?`${e.label} listed at ${r}. This template supports high-value presentation with polished positioning, premium selling points, and a strong showroom-style description.`:e.descriptionType==="fashion"?`${e.label} listed at ${r}. This product template highlights styling, quality, and day-to-day appeal while keeping the listing easy to customize.`:e.descriptionType==="home"?`${e.label} listed at ${r}. The listing copy is structured for shoppers looking for quality presentation, reliable detail, and visual merchandising support.`:e.descriptionType==="industrial"?`${e.label} listed at ${r}. This template emphasizes practical use, dependable performance, and business or household value in a straightforward format.`:e.descriptionType==="daily"?`${e.label} listed at ${r}. The copy is designed for repeat-buy categories with clear value messaging and broad buyer appeal.`:`${e.label} listed at ${r}. This template generates a clean, marketable listing with ready-made highlights, keywords, and presentation details.`}function Rt({templateId:e,listingType:t,category:a,countryCode:i,currency:s,price:r}){const n=Lt.find(h=>h.id===e&&h.listingType===t);if(!n)return null;const o=Ra(i)||_e[0],l=s||Ze(o.code),c=[o.name].filter(Boolean).join(", "),m={category:n.category||a||(t==="property"?"Real Estate":"Other"),subcategory:n.subcategory||n.label,title:t==="property"?`${n.label} in ${o.name}`:n.label,description:Za(n,o,l,r,c),currency:l,features:[...n.features],highlights:[...n.highlights||[]],seo_keywords:[...new Set([n.category,n.subcategory,n.label,...t==="property"?[o.name]:[],...n.keywords||[]].filter(Boolean))],requiredImageCount:n.requiredImageCount||0};return t==="property"?{...m,country:o.name,country_code:o.code,product_location:o.name,property_type:n.propertyType||n.label,bedrooms:n.bedrooms??null,bathrooms:n.bathrooms??null,building_size:n.buildingSize||"",land_size:n.landSize||"",furnished:n.furnished||""}:{...m,brand:n.brand||"",model:n.model||"",color:n.color||"",size:n.size||"",condition:n.condition||"New"}}const Dt="weverseonlineshop@gmail.com",jt="kco_ai_ad_override_fallback_v1",Ft="Weverse Online Shop",Ot="GLOBAL SHOPPING • WORLDWIDE DELIVERY",ei="https://wttnvwpoqmbxryivcerf.supabase.co".replace(/\/$/,""),ti=`${ei}/functions/v1/ai-admin-assistant`,ai=[{group:"Main",items:[{id:"dashboard",label:"Dashboard",icon:"layout-dashboard"},{id:"products",label:"Products",icon:"package"},{id:"general-ai",label:"General AI",icon:"sparkles"},{id:"properties",label:"Properties",icon:"home"},{id:"catalog",label:"Catalog Manager",icon:"boxes"},{id:"orders",label:"Orders",icon:"shopping-bag"},{id:"customers",label:"Customers",icon:"users"},{id:"reviews",label:"Reviews",icon:"star"},{id:"messages",label:"Messages",icon:"message-circle"},{id:"coupons",label:"Coupons",icon:"ticket"},{id:"ads",label:"Advertisements",icon:"megaphone"},{id:"notifications",label:"Notifications",icon:"bell"}]},{group:"Configuration",items:[{id:"ai",label:"AI Assistant",icon:"sparkles"},{id:"n8n",label:"n8n Automation",icon:"workflow"},{id:"payment-settings",label:"Payment Settings",icon:"credit-card"},{id:"ai-settings",label:"AI Settings",icon:"bot"},{id:"ai-marketing",label:"AI Marketing Studio",icon:"sparkles"},{id:"homepage-branding",label:"Homepage Branding",icon:"image"},{id:"brand",label:"Brand Manager",icon:"palette"},{id:"content",label:"Content Manager",icon:"file-text"},{id:"seo",label:"SEO Manager",icon:"search"},{id:"email",label:"Email Settings",icon:"mail"},{id:"analytics",label:"Analytics",icon:"bar-chart-3"},{id:"security",label:"Security",icon:"shield"},{id:"activity",label:"Activity Logs",icon:"activity"},{id:"backup",label:"Backup & Restore",icon:"database"},{id:"settings",label:"Settings",icon:"settings"},{id:"publish",label:"Publish & Deploy",icon:"rocket"}]}],ii={dashboard:"Dashboard",products:"Products Manager",properties:"Properties Manager",catalog:"Catalog Manager",orders:"Orders Manager",customers:"Customers Manager",reviews:"Reviews Manager",messages:"Messages & Support",coupons:"Coupons Manager",ads:"Advertisement Manager","ai-settings":"AI Settings",content:"Content Manager",n8n:"n8n Automation",ai:"AI Assistant","ai-marketing":"AI Marketing Studio","homepage-branding":"Homepage Branding",brand:"Brand Manager","payment-settings":"Payment Settings",seo:"SEO Manager",email:"Email Settings",analytics:"Analytics",security:"Security",activity:"Activity Logs",backup:"Backup & Restore",settings:"Settings",publish:"Publish & Deploy"},Ut=[...Da].sort();let k={user:null,section:"dashboard"};function d(e){if(e==null)return"";const t=document.createElement("div");return t.textContent=String(e),t.innerHTML}function qt(e,t="USD"){return`${(parseFloat(e)||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})} ${t}`}function N(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"—"}function W(e){return e?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function et(){return"KCO-"+String(Date.now()).slice(-6)+Math.floor(Math.random()*1e3).toString().padStart(3,"0")}const si=["id","property_id","listing_type","category","subcategory","title","description","price","price_period","currency","country","country_code","state","city","town","product_location","latitude","longitude","bedrooms","bathrooms","building_size","land_size","parking_spaces","property_type","furnished","listing_status","images","features","features_text","tags","highlights","seo_keywords","specifications","brand","color","size","condition","warranty","shipping_info","delivery_estimate","weight","dimensions","storage_options","ram_options","color_options","availability_status","stock_quantity","sku","is_active","is_featured","is_ai_generated","ai_generated_fields","rating","rating_count","favorite_count","review_count","video","video_url","approval_status","published_at","created_at","updated_at"];function Q(e){const t={};if(!e||typeof e!="object")return t;for(const a of si)a in e&&(t[a]=e[a]);return t}function u(e,t="success"){const a=document.getElementById("toast"),i=document.getElementById("toast-msg"),s=a.querySelector("i[data-lucide]");if(!a||!i)return;i.textContent=e;const r={success:"check-circle",error:"alert-circle",info:"info"},n={success:"text-emerald-400",error:"text-red-400",info:"text-blue-400"};s&&(s.setAttribute("data-lucide",r[t]||"info"),s.className=`w-4 h-4 shrink-0 ${n[t]||"text-blue-400"}`),a.style.transform="translateY(0)",a.style.opacity="1",window.lucide&&lucide.createIcons(),clearTimeout(a._t),a._t=setTimeout(()=>{a.style.transform="translateY(20px)",a.style.opacity="0"},3e3)}function R(e){const t={pending_verification:["bg-amber-500/10 text-amber-400 border-amber-500/20","Pending"],approved:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Approved"],rejected:["bg-red-500/10 text-red-400 border-red-500/20","Rejected"],payment_approved:["bg-blue-500/10 text-blue-400 border-blue-500/20","Paid"],order_placed:["bg-amber-500/10 text-amber-400 border-amber-500/20","Placed"],processing:["bg-indigo-500/10 text-indigo-400 border-indigo-500/20","Processing"],shipped:["bg-violet-500/10 text-violet-400 border-violet-500/20","Shipped"],in_transit:["bg-violet-500/10 text-violet-400 border-violet-500/20","In Transit"],out_for_delivery:["bg-cyan-500/10 text-cyan-400 border-cyan-500/20","Out for Delivery"],delivered:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Delivered"],cancelled:["bg-red-500/10 text-red-400 border-red-500/20","Cancelled"],active:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],inactive:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"],sale:["bg-blue-500/10 text-blue-400 border-blue-500/20","For Sale"],rent:["bg-violet-500/10 text-violet-400 border-violet-500/20","For Rent"],true:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],false:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"]},[a,i]=t[String(e)]||["bg-gray-500/10 text-gray-400 border-gray-500/20",d(e)||"—"];return`<span class="badge ${a}">${i}</span>`}function z(){document.getElementById("modal-container").innerHTML=""}function B(e){document.getElementById("modal-container").innerHTML=e,window.lucide&&lucide.createIcons()}function M(e,t,a,i,s=""){const r={blue:"bg-blue-500/10 text-blue-400 border-blue-500/15",amber:"bg-amber-500/10 text-amber-400 border-amber-500/15",emerald:"bg-emerald-500/10 text-emerald-400 border-emerald-500/15",red:"bg-red-500/10 text-red-400 border-red-500/15",violet:"bg-violet-500/10 text-violet-400 border-violet-500/15",blue:"bg-blue-500/10 text-blue-400 border-blue-500/15"};return`<div class="stat-card glass-soft border border-blue-500/15 rounded-3xl p-5">
    <div class="flex items-start justify-between mb-3">
      <div class="p-3 ${r[i]||r.blue} rounded-2xl border"><i data-lucide="${a}" class="w-5 h-5"></i></div>
    </div>
    <p class="text-3xl font-black text-white">${d(t)}</p>
    <p class="text-xs text-gray-500 uppercase tracking-wide mt-1 font-bold">${d(e)}</p>
    ${s?`<p class="text-xs text-gray-600 mt-1">${d(s)}</p>`:""}
  </div>`}function ue(){return'<div class="flex items-center justify-center py-24"><div class="flex items-center gap-3 text-gray-500 text-sm"><i data-lucide="loader-2" class="w-5 h-5 animate-spin text-blue-400"></i> Loading…</div></div>'}function se(e,t,a,i=""){return`<div class="flex flex-col items-center justify-center py-20 text-center"><div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4"><i data-lucide="${e}" class="w-8 h-8 text-blue-400"></i></div><h3 class="text-base font-black text-white mb-1">${d(t)}</h3><p class="text-sm text-gray-500 max-w-xs">${d(a)}</p>${i?`<div class="mt-5">${i}</div>`:""}</div>`}function Nt(){const e=document.getElementById("sidebar-nav");e&&(e.innerHTML=ai.map(t=>`
    <div>
      <span class="section-label">${t.group}</span>
      ${t.items.map(a=>`
        <button class="nav-item ${k.section===a.id?"active":""} w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold rounded-xl" onclick="navigate('${a.id}')">
          <i data-lucide="${a.icon}" class="w-4 h-4 shrink-0"></i>
          <span>${a.label}</span>
        </button>`).join("")}
    </div>`).join(""),window.lucide&&lucide.createIcons())}window.navigate=function(e){k.section=e;const t=ii[e]||e,a=document.getElementById("page-title");a&&(a.textContent=t),Nt(),closeSidebar();const i=document.getElementById("content");i&&(i.innerHTML=ue()),window.lucide&&lucide.createIcons(),({dashboard:_i,products:P,properties:Ae,catalog:le,orders:oa,customers:Wi,reviews:dt,messages:na,coupons:Ie,ads:oe,notifications:Ki,ai:ri,n8n:li,"ai-settings":ua,"ai-marketing":Te,"homepage-branding":Le,content:ks,seo:Ss,email:As,analytics:$s,security:Be,activity:Is,brand:Me,"payment-settings":Xe,backup:Ps,settings:Es,publish:Re,"general-ai":oi}[e]||(()=>{const n=document.getElementById("content");n&&(n.innerHTML=se("construction","Coming Soon",`${t} is being built.`))}))()};async function ri(){const e=document.getElementById("content");e&&(e.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}async function oi(){const e=document.getElementById("content");if(e)try{const{data:t,error:a}=await p.from("showroom_listings").select("*").neq("listing_type","property").order("created_at",{ascending:!1}),s=(t||[]).map(r=>({id:r.property_id,title:r.title,category:r.category,listing_type:r.listing_type,price:r.price,brand:r.brand,features:r.features,tags:r.tags,is_active:r.is_active,description:r.description,images:r.images})).slice(0,50);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div class="glass-soft border border-purple-500/20 rounded-2xl p-4 sm:p-5">
          <div class="flex flex-col gap-3">
            <h2 class="text-xl font-black text-white">General AI Assistant</h2>
            <p class="text-sm text-gray-500">Upload images and give instructions — AI will generate product cards, fix issues, and publish to your showroom automatically.</p>
          </div>
        </div>

        <!-- AI Chat Area -->
        <div class="glass-soft border border-purple-500/15 rounded-2xl p-3 sm:p-4 h-96 overflow-y-auto fade-in">
          <div id="ai-chat-history" class="h-64 overflow-y-auto space-y-2">
            <!-- Chat messages will appear here -->
          </div>
          <div class="p-2 border-t border-purple-500/20">
            <div class="flex gap-2">
              <input type="file" id="ai-image-upload" class="hidden" multiple />
              <button onclick="document.getElementById('ai-image-upload').click()" class="btn-press px-3 py-1.5 text-xs font-bold bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-lg hover:bg-purple-500/15 transition">
                <i data-lucide="upload" class="w-3.5 h-3.5 inline mr-1"></i> Upload Image
              </button>
              <select id="ai-product-type" class="input-field w-48 bg-[#0a1124]/80 border border-purple-500/20 rounded-xl px-2.5 py-1.5 text-sm text-white focus:outline-none focus:border-purple-500">
                <option value="product">Product (general item)</option>
                <option value="property">Property (house/land)</option>
                <option value="vehicle">Vehicle (car/motorcycle)</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion & Apparel</option>
                <option value="home-kitchen">Home & Kitchen</option>
              </select>
              <button onclick="aiGenerateProduct()" class="btn-press px-3 py-1.5 text-xs font-bold bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-lg hover:bg-purple-500/15 transition">
                <i data-lucide="sparkles" class="w-3.5 h-3.5 inline mr-1"></i> Generate
              </button>
              <input type="text" id="ai-prompt" class="input-field flex-1 bg-[#0a1124]/80 border border-purple-500/20 rounded-xl px-3 py-1.5 text-sm text-white focus:outline-none focus:border-purple-500" placeholder="Tell AI what to create..." onkeypress="if(event.key==='Enter')aiGenerateProduct()">
            </div>
          </div>
        </div>

        <!-- Showroom Status Monitor -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div class="glass-soft border border-purple-500/15 rounded-xl p-3">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <i data-lucide="eye" class="w-4 h-4 text-purple-400"></i>
              </div>
              <span class="text-sm font-bold text-purple-400">Showroom Total</span>
            </div>
            <p class="text-xl font-black text-white" id="ai-total-products">Loading...</p>
          </div>
          <div class="glass-soft border border-purple-500/15 rounded-xl p-3">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i>
              </div>
              <span class="text-sm font-bold text-emerald-400">Active</span>
            </div>
            <p class="text-xl font-black text-white" id="ai-active-products">Loading...</p>
          </div>
          <div class="glass-soft border border-purple-500/15 rounded-xl p-3">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-400"></i>
              </div>
              <span class="text-sm font-bold text-amber-400">Issues</span>
            </div>
            <p class="text-xl font-black text-white" id="ai-issue-count">Loading...</p>
          </div>
          <div class="glass-soft border border-purple-500/15 rounded-xl p-3">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <i data-lucide="history" class="w-4 h-4 text-blue-400"></i>
              </div>
              <span class="text-sm font-bold text-blue-400">Recent AI</span>
            </div>
            <p class="text-xs text-gray-400" id="ai-recent-ai">No activity yet</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div class="glass-soft border border-purple-500/15 rounded-2xl p-4">
            <h3 class="text-sm font-bold text-white mb-3 flex items-center gap-2"><i data-lucide="zap" class="w-4 h-4 text-purple-400"></i> Quick Commands</h3>
            <div class="space-y-2">
              <button onclick="aiFixDuplicates()" class="btn-press w-full text-xs font-bold text-purple-400 hover:text-purple-300 rounded-xl py-2.5 transition">
                <i data-lucide="rotate-cw" class="w-3.5 h-3.5 inline mr-1"></i> Fix Duplicate Products
              </button>
              <button onclick="aiCleanupNames()" class="btn-press w-full text-xs font-bold text-purple-400 hover:text-purple-300 rounded-xl py-2.5 transition">
                <i data-lucide="text-field" class="w-3.5 h-3.5 inline mr-1"></i> Fix Naming Issues
              </button>
              <button onclick="aiCheckHealth()" class="btn-press w-full text-xs font-bold text-purple-400 hover:text-purple-300 rounded-xl py-2.5 transition">
                <i data-lucide="heart" class="w-3.5 h-3.5 inline mr-1"></i> Check Product Health
              </button>
            </div>
          </div>
          <div class="glass-soft border border-purple-500/15 rounded-2xl p-4">
            <h3 class="text-sm font-bold text-white mb-3 flex items-center gap-2"><i data-lucide="magic-wand" class="w-4 h-4 text-purple-400"></i> AI Actions</h3>
            <div class="space-y-2">
              <button onclick="aiGenerateRandomProduct()" class="btn-press w-full text-xs font-bold text-purple-400 hover:text-purple-300 rounded-xl py-2.5 transition">
                <i data-lucide="sparkles" class="w-3.5 h-3.5 inline mr-1"></i> Generate Random Product
              </button>
              <button onclick="aiOptimizePricing()" class="btn-press w-full text-xs font-bold text-purple-400 hover:text-purple-300 rounded-xl py-2.5 transition">
                <i data-lucide="trending-up" class="w-3.5 h-3.5 inline mr-1"></i> Optimize Prices
              </button>
              <button onclick="aiRearrangeGallery()" class="btn-press w-full text-xs font-bold text-purple-400 hover:text-purple-300 rounded-xl py-2.5 transition">
                <i data-lucide="image" class="w-3.5 h-3.5 inline mr-1"></i> Rearrange Galleries
              </button>
            </div>
          </div>
          <div class="glass-soft border border-purple-500/15 rounded-2xl p-4">
            <h3 class="text-sm font-bold text-white mb-3 flex items-center gap-2"><i data-lucide="shield-check" class="w-4 h-4 text-purple-400"></i> Auto-Fix Power</h3>
            <p class="text-xs text-gray-500 mb-2">AI has permission to:</p>
            <ul class="text-xs text-gray-400 space-y-1">
              <li><i data-lucide="check-circle" class="w-3 h-3 text-emerald-400 inline mr-1"></i> Delete duplicates & generate new</li>
              <li><i data-lucide="check-circle" class="w-3 h-3 text-emerald-400 inline mr-1"></i> Fix naming & descriptions</li>
              <li><i data-lucide="check-circle" class="w-3 h-3 text-emerald-400 inline mr-1"></i> Reprice items competitively</li>
              <li><i data-lucide="check-circle" class="w-3 h-3 text-emerald-400 inline mr-1"></i> Relocate to proper categories</li>
              <li><i data-lucide="check-circle" class="w-3 h-3 text-emerald-400 inline mr-1"></i> Publish/unpublish as needed</li>
            </ul>
            <button onclick="aiFullCleanup()" class="btn-press w-full text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white py-2.5 rounded-lg mt-2 transition">
              <i data-lucide="trash" class="w-3.5 h-3.5 inline mr-1"></i> Full Showroom Cleanup
            </button>
          </div>
        </div>
      </div>`,window.aiChatHistory=[],Ht(),ni(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-purple-400 text-sm">Error: ${d(t.message)}</div>`)}}function Ht(){const e=document.getElementById("ai-chat-history");if(e){if(!window.aiChatHistory||window.aiChatHistory.length===0){e.innerHTML='<p class="text-gray-500 text-sm text-center py-8">Start by uploading an image or typing a command</p>';return}e.innerHTML=window.aiChatHistory.map((t,a)=>`
    <div class="p-3 rounded-xl ${t.type==="ai"?"bg-purple-500/10":"bg-blue-500/10"} ${t.type==="ai"?"right-0":"left-0"} ${t.type==="ai"?"":"mb-3"}">
      <p class="text-sm font-medium ${t.type==="ai"?"text-purple-300":"text-blue-300"}">${d(t.sender)}</p>
      <p class="text-[10px] ${t.type==="ai"?"text-purple-400":"text-gray-300"}">${d(t.content)}</p>
      <p class="text-[10px] text-gray-500">${new Date().toLocaleTimeString()}</p>
    </div>
  `).join(""),window.lucide&&lucide.createIcons()}}function ni(){const e=document.getElementById("ai-total-products"),t=document.getElementById("ai-active-products"),a=document.getElementById("ai-issue-count");e&&(e.textContent="..."),t&&(t.textContent="..."),a&&(a.textContent="...")}async function li(){const e=document.getElementById("content");e&&(e.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}window.openSidebar=()=>{document.getElementById("sidebar").classList.add("open"),document.getElementById("sidebar-overlay").classList.remove("hidden")};window.closeSidebar=()=>{document.getElementById("sidebar").classList.remove("open"),document.getElementById("sidebar-overlay").classList.add("hidden")};document.getElementById("close-sidebar")?.addEventListener("click",closeSidebar);const te="kco_admin_remember",tt="kco_login_attempts",Oe=5,di=15*60*1e3;function T(e){const t=document.getElementById("login-error"),a=document.getElementById("login-error-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-success")?.classList.add("hidden"),window.lucide&&lucide.createIcons())}function ci(e){const t=document.getElementById("login-success"),a=document.getElementById("login-success-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-error")?.classList.add("hidden"))}function ke(){document.getElementById("login-error")?.classList.add("hidden"),document.getElementById("login-success")?.classList.add("hidden")}function pe(e){return String(e||"").trim().toLowerCase()}function ui(){try{const e=JSON.parse(localStorage.getItem(te)||"{}");e?.email&&!pe(e.email)&&localStorage.removeItem(te)}catch{localStorage.removeItem(te)}}function pi(){try{const e=JSON.parse(localStorage.getItem(te)||"{}");return pe(e?.email)}catch{return""}}function at(){ui();const e=pi(),t=document.getElementById("login-email");t&&(t.value=e||t.value||Dt,t.removeAttribute("readonly"));const a=document.getElementById("reset-email");a&&(a.value=e||a.value||"",a.removeAttribute("readonly"))}function mi(){return`${window.location.origin}/admin.html`}function X(e){const t=document.getElementById("login-header-title"),a=document.getElementById("login-header-icon");document.getElementById("login-form")?.classList.toggle("hidden",e!=="login"),document.getElementById("twofa-form")?.classList.toggle("hidden",e!=="2fa"),document.getElementById("forgot-form")?.classList.toggle("hidden",e!=="forgot"),ke(),e==="login"&&(t&&(t.textContent="Admin Access"),a&&a.setAttribute("data-lucide","shield-check")),e==="2fa"&&(t&&(t.textContent="Two-Factor Auth"),a&&a.setAttribute("data-lucide","smartphone")),e==="forgot"&&(t&&(t.textContent="Reset Password"),a&&a.setAttribute("data-lucide","mail")),window.lucide&&lucide.createIcons()}function C(e,t,a=""){const i=document.getElementById(e);i&&(i.disabled=t,t?i.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline-block mr-1"></i> Please wait…':a&&(i.innerHTML=a),window.lucide&&lucide.createIcons())}function Gt(){try{return JSON.parse(localStorage.getItem(tt)||'{"count":0}')}catch{return{count:0}}}function zt(){const e=Gt();return e.count=(e.count||0)+1,e.count>=Oe&&(e.lockedUntil=Date.now()+di),localStorage.setItem(tt,JSON.stringify(e)),e}function Wt(){localStorage.removeItem(tt)}function Vt(){const e=Gt();if(!e.lockedUntil)return null;const t=e.lockedUntil-Date.now();return t<=0?(Wt(),null):Math.ceil(t/6e4)}async function q(e,t,a={}){try{await p.from("admin_security_logs").insert({user_id:e,event_type:t,ip_address:await gi(),user_agent:navigator.userAgent.slice(0,200),...a})}catch{}}async function gi(){try{return(await(await fetch("https://api64.ipify.org?format=json",{signal:AbortSignal.timeout(3e3)})).json()).ip||"unknown"}catch{return"unknown"}}async function Kt(e){if(!e)return!1;let t=!1,a=!1;try{const{data:i}=await p.rpc("is_current_user_admin");t=!0,a=!!i}catch{t=!1}return t?a:pe(e.email)===Dt}async function bi(){const e=window.location.hash;if(e.includes("type=recovery")||e.includes("access_token")){he(),xi();return}const{data:{session:t}}=await p.auth.getSession();if(t?.user&&await Kt(t.user)){const{data:{currentUser:i}}=await p.auth.getUser(),s=await p.auth.mfa.getAuthenticatorAssuranceLevel(),r=s.data?.currentLevel;if(s.data?.nextLevel==="aal2"&&r!=="aal2"){k.user=t.user,he(),X("2fa"),it();return}k.user=t.user,$e();return}hi()}function he(){const e=document.getElementById("login-screen");e&&(e.style.display="flex")}function hi(){he(),X("login"),at(),Jt(),Qt(),it(),fi();const e=Vt();e&&(T(`Too many failed attempts. Try again in ${e} minute${e>1?"s":""}.`),document.getElementById("login-btn").disabled=!0)}function fi(){document.getElementById("toggle-pw")?.addEventListener("click",()=>{const e=document.getElementById("login-password"),t=document.querySelector("#toggle-pw i");e&&(e.type=e.type==="password"?"text":"password",t&&t.setAttribute("data-lucide",e.type==="password"?"eye":"eye-off"),window.lucide&&lucide.createIcons())})}function Jt(){const e=document.getElementById("login-form");!e||e._bound||(e._bound=!0,e.addEventListener("submit",yi),document.getElementById("forgot-pw-btn")?.addEventListener("click",()=>X("forgot")))}async function yi(e){e.preventDefault();const t=Vt();if(t){T(`Account locked. Try again in ${t} minute${t>1?"s":""}.`);return}const a=document.getElementById("login-email"),i=pe(a?.value);if(!i){T("Enter your admin email address."),C("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const s=document.getElementById("login-password").value,r=document.getElementById("remember-me")?.checked;C("login-btn",!0),ke();const{data:n,error:o}=await p.auth.signInWithPassword({email:i,password:s});if(o||!n.user){const b=String(o?.message||"").toLowerCase();if(b.includes("missing supabase credentials")||b.includes("authentication service is unavailable")){T("Authentication is temporarily unavailable due to configuration. Please contact support."),C("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(b.includes("failed to fetch")||b.includes("network request failed")){T("Network error while signing in. Check your connection and try again."),C("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(b.includes("email not confirmed")){T("Your admin email is not confirmed yet. Open your verification email and confirm first."),C("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const f=zt(),g=Oe-f.count,v=f.lockedUntil?`Account locked for 15 minutes after ${Oe} failed attempts.`:`Invalid email or password. ${g>0?g+" attempt"+(g!==1?"s":"")+" remaining.":""}`;T(v),C("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),n?.user&&await q(n.user.id,"login_failed",{metadata:{reason:"wrong_password"}});return}if(!await Kt(n.user)){await p.auth.signOut(),T(`Access denied for ${n.user.email}. This account is signed in but does not have administrator privileges.`),C("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),await q(n.user.id,"login_denied",{metadata:{reason:"not_admin"}});return}if(r?localStorage.setItem(te,JSON.stringify({email:i,ts:Date.now()})):localStorage.removeItem(te),Wt(),k.user=n.user,(await p.auth.mfa.getAuthenticatorAssuranceLevel()).data?.nextLevel==="aal2"){C("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),X("2fa"),it(),setTimeout(()=>document.getElementById("totp-code")?.focus(),100);return}await q(n.user.id,"login_success"),C("login-btn",!1),$e()}function it(){const e=document.getElementById("verify-2fa-btn");e&&!e._bound&&(e._bound=!0,e.addEventListener("click",kt));const t=document.getElementById("totp-code");t&&!t._bound&&(t._bound=!0,t.addEventListener("input",i=>{i.target.value=i.target.value.replace(/\D/g,"").slice(0,6),i.target.value.length===6&&kt()})),document.getElementById("cancel-2fa-btn")?.addEventListener("click",async()=>{await p.auth.signOut(),k.user=null,X("login")}),document.getElementById("use-backup-btn")?.addEventListener("click",()=>{document.getElementById("backup-code-wrap")?.classList.toggle("hidden");const s=document.getElementById("backup-code");s&&s.focus()});const a=document.getElementById("verify-backup-btn");a&&!a._bound&&(a._bound=!0,a.addEventListener("click",vi))}async function kt(){const e=document.getElementById("totp-code")?.value?.trim();if(!e||e.length!==6){T("Enter the 6-digit code from your authenticator app.");return}C("verify-2fa-btn",!0),ke();try{const{data:t}=await p.auth.mfa.listFactors(),a=(t?.totp||[])[0];if(!a){T("No 2FA factor found. Please re-login."),C("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In');return}const{data:i,error:s}=await p.auth.mfa.challenge({factorId:a.id});if(s)throw s;const{error:r}=await p.auth.mfa.verify({factorId:a.id,challengeId:i.id,code:e});if(r)throw r;await q(k.user.id,"login_2fa_success"),C("verify-2fa-btn",!1),$e()}catch(t){zt(),T(t.message?.includes("Invalid")?"Incorrect code. Check your authenticator and try again.":t.message),C("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In'),document.getElementById("totp-code").value="",document.getElementById("totp-code").focus()}}async function vi(){const e=document.getElementById("backup-code")?.value?.trim().toUpperCase().replace(/\s/g,"");if(!e){T("Enter a backup recovery code.");return}C("verify-backup-btn",!0);try{const{data:t}=await p.from("admin_2fa").select("backup_codes").eq("user_id",k.user.id).maybeSingle();if(!t?.backup_codes?.length){T("No backup codes found."),C("verify-backup-btn",!1,"Use Backup Code");return}if(!t.backup_codes.find(s=>(s.code||s).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")&&!s.used)){T("Backup code not found or already used."),C("verify-backup-btn",!1,"Use Backup Code");return}const i=t.backup_codes.map(s=>(s.code||s).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")?{...typeof s=="object"?s:{code:s},used:!0}:s);await p.from("admin_2fa").update({backup_codes:i}).eq("user_id",k.user.id),await q(k.user.id,"login_backup_code_used"),$e()}catch(t){T(t.message),C("verify-backup-btn",!1,"Use Backup Code")}}function Qt(){document.getElementById("back-to-login")?.addEventListener("click",()=>X("login")),document.getElementById("send-reset-btn")?.addEventListener("click",wi)}async function wi(){const e=document.getElementById("reset-email"),t=pe(e?.value);if(!t){T("Enter your admin email address to receive a reset link.");return}C("send-reset-btn",!0),ke();const{error:a}=await p.auth.resetPasswordForEmail(t,{redirectTo:mi()});if(C("send-reset-btn",!1,'<i data-lucide="mail" class="w-4 h-4 inline mr-1"></i> Send Reset Link'),a){T(a.message);return}ci("Reset link sent! Check your inbox and open it from this device to continue.")}function xi(){const e=document.getElementById("login-screen");if(!e)return;const t=e.querySelector(".login-card");t&&(t.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}window.handlePasswordResetSubmit=async function(){const e=document.getElementById("new-pw-reset")?.value,t=document.getElementById("confirm-pw-reset")?.value,a=document.getElementById("reset-pw-error");if(e!==t){a&&(a.textContent="Passwords do not match.",a.classList.remove("hidden"));return}if((e||"").length<8){a&&(a.textContent="Password must be at least 8 characters.",a.classList.remove("hidden"));return}const{error:i}=await p.auth.updateUser({password:e});if(i){a&&(a.textContent=i.message,a.classList.remove("hidden"));return}u("Password updated! Please log in with your new password."),window.location.hash="",setTimeout(()=>window.location.reload(),1500)};function $e(){const e=document.getElementById("login-screen");e&&(e.style.display="none");const t=document.getElementById("admin-user-email");t&&k.user&&(t.textContent=k.user.email||"Admin"),at(),navigate("dashboard")}window.adminSignOut=async function(){k.user&&await q(k.user.id,"logout"),await p.auth.signOut(),k.user=null,he(),X("login"),at(),Jt(),Qt()};window.logoutAllDevices=async function(){confirm("This will sign you out on ALL devices. Continue?")&&(k.user&&await q(k.user.id,"logout_all_devices"),await p.auth.signOut({scope:"global"}),k.user=null,u("Signed out from all devices."),setTimeout(()=>window.location.reload(),1200))};async function _i(){const e=document.getElementById("content");try{const[t,a,i,s]=await Promise.all([p.from("showroom_listings").select("id,listing_type,is_active,price",{count:"exact"}),p.from("payment_receipts").select("id,order_number,amount,status,created_at",{count:"exact"}).order("created_at",{ascending:!1}).limit(200),p.from("profiles").select("user_id,created_at",{count:"exact"}),p.from("product_reviews").select("id,is_approved",{count:"exact"})]),r=t.data||[],n=a.data||[],o=n.filter(x=>["approved","payment_approved","delivered"].includes(x.status)).reduce((x,G)=>x+(parseFloat(G.amount)||0),0),l=n.filter(x=>["pending","pending_verification","processing"].includes(x.status)).length,c=r.filter(x=>x.listing_type!=="property").length,m=r.filter(x=>x.listing_type==="property").length,h=r.filter(x=>x.listing_type!=="property"&&x.is_active).length,b=i.count||0,f=s.count||0,g=(s.data||[]).filter(x=>!x.is_approved).length,v=new Date,H=n.filter(x=>{const G=new Date(x.created_at);return G.getMonth()===v.getMonth()&&G.getFullYear()===v.getFullYear()}).filter(x=>["approved","payment_approved","delivered"].includes(x.status)).reduce((x,G)=>x+(parseFloat(G.amount)||0),0),V=n.slice(0,6);e.innerHTML=`
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
          ${M("Total Revenue",`$${o.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald",`$${H.toLocaleString("en-US",{maximumFractionDigits:0})} this month`)}
          ${M("Total Orders",n.length,"shopping-bag","blue",`${l} pending`)}
          ${M("Customers",b,"users","violet")}
          ${M("Products",c,"package","amber",`${h} active`)}
          ${M("Properties",m,"home","blue")}
          ${M("Reviews",f,"star","blue",`${g} pending`)}
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
            ${V.length===0?'<p class="text-xs text-gray-500 text-center py-8">No orders yet</p>':V.map(x=>`
                <div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
                  <div class="min-w-0">
                    <p class="text-xs font-bold text-white truncate">${d(x.order_number||x.id?.slice(0,8))}</p>
                    <p class="text-[10px] text-gray-500">${W(x.created_at)}</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0 ml-2">
                    <span class="text-xs font-bold text-emerald-400">$${parseFloat(x.amount||0).toLocaleString("en-US",{maximumFractionDigits:0})}</span>
                    ${R(x.status)}
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
      </div>`,window.lucide&&lucide.createIcons(),Zt(n)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${d(t.message)}</div>`)}}async function P(){const e=document.getElementById("content");try{const{data:t,error:a}=await p.from("showroom_listings").select("*").neq("listing_type","property").order("created_at",{ascending:!1}),i=new Set,s=[];for(const l of a?[]:t||[])l&&l.property_id&&!i.has(l.property_id)&&(i.add(l.property_id),s.push(l));for(const l of Et().filter(c=>c.listing_type!=="property"))l&&l.property_id&&!i.has(l.property_id)&&(i.add(l.property_id),s.push(l));if(Array.isArray(U))for(const l of U.filter(c=>c.listing_type!=="property"&&c.property_id))i.has(l.property_id)||(i.add(l.property_id),s.push(l));const r=[...Na,...Ha,...Ga,...za];for(const l of r)l&&l.property_id&&l.listing_type!=="property"&&!i.has(l.property_id)&&(i.add(l.property_id),s.push(l));s.sort((l,c)=>new Date(c.created_at||0)-new Date(l.created_at||0));const n=[...new Set(s.map(l=>l.category).filter(Boolean))].sort((l,c)=>l.localeCompare(c)),o=[...new Set(s.flatMap(l=>Array.isArray(l.tags)?l.tags:[]).filter(Boolean))].sort((l,c)=>l.localeCompare(c));window._productFilters||(window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"}),window._productSelection||(window._productSelection=new Set),e.innerHTML=`
      <div class="space-y-5 fade-in">
        <!-- General AI — sits on top of the Product Manager -->
        <div class="glass-soft border border-sky-500/25 rounded-2xl overflow-hidden">
          <div class="px-4 py-3 flex items-center justify-between gap-3 border-b border-sky-500/15 bg-gradient-to-r from-sky-600/10 to-indigo-600/10">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-700 flex items-center justify-center shrink-0">
                <i data-lucide="sparkles" class="w-5 h-5 text-white"></i>
              </div>
              <div class="min-w-0">
                <span class="text-sm font-black text-white block truncate">General AI</span>
                <span class="text-[10px] text-sky-300/80 block truncate">Whole Showroom Assistant — scans your showroom and always writes the full brand, model &amp; year so customers feel confident</span>
              </div>
            </div>
            <button onclick="openGeneralAi()" class="btn-press shrink-0 text-[10px] font-bold text-sky-200 bg-sky-500/10 border border-sky-500/25 hover:bg-sky-500/20 px-2.5 py-1.5 rounded-lg transition">
              <i data-lucide="maximize" class="w-3 h-3 inline mr-1"></i> Fullscreen
            </button>
          </div>
          <div id="general-ai-embed-scroll" class="h-64 overflow-y-auto scrollbar-thin px-3 py-3 space-y-4"></div>
          <div class="px-3 pb-3 pt-1">
            <div id="general-ai-embed-thumbs" class="flex flex-wrap gap-2 pb-2"></div>
            <div class="glass border border-sky-500/25 rounded-2xl p-1.5 flex items-end gap-1.5">
              <button onclick="generalAiEmbedAttach()" class="btn-press w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/25 flex items-center justify-center shrink-0" title="Attach photo(s)">
                <i data-lucide="image-plus" class="w-5 h-5 text-sky-300"></i>
              </button>
              <textarea id="general-ai-embed-input" rows="1" class="flex-1 bg-transparent text-base text-white placeholder-gray-500 resize-none outline-none px-2 py-2.5 max-h-36 leading-relaxed scrollbar-thin" placeholder="Just upload a photo — I'll scan it and publish it automatically. Or tell me anything, like: fix my showroom…"></textarea>
              <button id="general-ai-embed-send-btn" onclick="runGeneralAiInstruction()" class="btn-press w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-700 hover:from-sky-400 hover:to-indigo-600 text-white flex items-center justify-center shrink-0 transition" title="Send">
                <i data-lucide="send" class="w-5 h-5"></i>
              </button>
            </div>
            <p class="text-xs text-gray-500 pt-2">Full permission over the whole showroom — it checks how your cards look before it publishes, and it always writes the complete brand, model, year and details of what you upload so customers feel comfortable.</p>
          </div>
          <input id="general-ai-embed-image" type="file" accept="image/*" multiple class="hidden" onchange="generalAiChatImagePicked(this)">
        </div>

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
          ${M("Total Products",s.length,"package","blue")}
          ${M("Published",s.filter(l=>!!l.is_active).length,"badge-check","emerald")}
          ${M("Draft / Hidden",s.filter(l=>!l.is_active).length,"file-clock","amber")}
          ${M("Featured",s.filter(l=>!!l.is_featured).length,"sparkles","violet")}
          ${M("Inventory Units",s.reduce((l,c)=>l+(parseInt(c.stock_quantity,10)||0),0),"boxes","blue")}
          ${M("Avg Price",`$${Math.round(s.reduce((l,c)=>l+(parseFloat(c.price)||0),0)/Math.max(s.length,1)).toLocaleString()}`,"dollar-sign","blue")}
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 sm:p-4 space-y-3">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-2.5">
            <div class="xl:col-span-2 relative">
              <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
              <input id="prod-search" type="search" class="input-field pl-9" placeholder="Search by name, SKU, brand, category..." value="${d(window._productFilters.search||"")}" oninput="filterProducts()">
            </div>
            <select id="prod-cat-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Categories</option>
              ${(n.length?n:ea).map(l=>`<option value="${d(l)}" ${(window._productFilters.category||"")===l?"selected":""}>${d(l)}</option>`).join("")}
            </select>
            <select id="prod-tag-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Tags</option>
              ${o.map(l=>`<option value="${d(l)}" ${(window._productFilters.tag||"")===l?"selected":""}>${d(l)}</option>`).join("")}
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
          <div id="products-empty" class="hidden">${se("package-search","No matching products","Try different filters or add a new product.",'<button onclick="showAddProductStep1()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl">Add Product</button>')}</div>
          <div class="text-center text-[11px] text-gray-500 py-2">Scroll to explore all products. Layout auto-rearranges as products are added, edited, moved, or removed.</div>
        </div>
      </div>`,window._productsData=s,window._productsCardLimit=60,Yt(s),filterProducts(),updateBulkBar(),fa(),_a(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${d(t.message)}</div>`)}}function Y(e){const t=parseFloat(e);return Number.isFinite(t)?t:0}function Ue(e){return Array.isArray(e.tags)?e.tags.filter(Boolean):[]}function ki(e){const t=parseFloat(e.discount_percent??e.discount??0);return Number.isFinite(t)&&t>0?`${Math.round(t)}% OFF`:"No discount"}function st(e){return e.is_archived||e.availability_status==="Archived"?"archived":e.is_active?"active":"inactive"}function qe(e){return parseInt(e.views??e.view_count??0,10)||0}function Ne(e){return parseInt(e.sales??e.sales_count??0,10)||0}function rt(e){return e.sku||e.property_id||"N/A"}function $i(e){const t=e.images&&e.images[0]?e.images[0]:"/fallback.svg",a=Ue(e),i=st(e),s=window._productSelection?.has(e.property_id),r=R(i==="archived"?"inactive":i==="active"?"active":"inactive"),n=N(e.created_at),o=!!e.is_featured,l=e.is_active?`unpublishProduct('${e.property_id}')`:`publishProduct('${e.property_id}')`,c=e.is_active?"Unpublish":"Publish",m=e.is_active?"bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25";return`<article data-id="${e.property_id}" data-cat="${d(e.category||"")}" data-status="${i}" data-featured="${o?"featured":"standard"}" onclick="editProduct('${e.property_id}')" title="Tap anywhere to edit this product" class="prod-card glass-soft border ${s?"border-blue-400/60":"border-blue-500/15"} rounded-3xl p-5 flex flex-col gap-4 transition hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer select-none active:scale-[.99]">
    <div class="flex items-start gap-4">
      <input type="checkbox" class="prod-check accent-blue-500 w-5 h-5 mt-1 shrink-0" value="${e.property_id}" ${s?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${e.property_id}', this.checked)">
      <div class="relative w-24 h-24 rounded-2xl overflow-hidden border border-blue-500/20 shrink-0 bg-[#0b1124]">
        <img src="${d(t)}" alt="${d(e.title||"Product")}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'">
        ${o?'<span class="absolute top-1.5 left-1.5 text-[10px] font-black px-2 py-0.5 rounded-lg bg-amber-400 text-[#111827]">Featured</span>':""}
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="text-lg font-black text-white leading-snug line-clamp-2">${d(e.title||"Untitled Product")}</h3>
        <p class="text-xs text-gray-500 font-mono mt-1">SKU: ${d(rt(e))}</p>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          ${r}
          <span class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20">${d(e.category||"Uncategorized")}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2.5 text-sm">
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Price</span><p class="text-emerald-300 font-black text-base">$${Y(e.price).toLocaleString()}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Discount</span><p class="text-amber-300 font-bold">${d(ki(e))}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Stock</span><p class="text-gray-200 font-bold">${e.stock_quantity!=null?d(e.stock_quantity):"Unlimited"}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Brand</span><p class="text-gray-200 font-bold truncate">${d(e.brand||"N/A")}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Views</span><p class="text-blue-300 font-bold">${qe(e).toLocaleString()}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Sales</span><p class="text-cyan-300 font-bold">${Ne(e).toLocaleString()}</p></div>
    </div>

    <div class="flex items-center justify-between text-xs text-gray-500 border-t border-blue-500/10 pt-3">
      <span>Date Added: ${d(n)}</span>
      <span>${(e.images||[]).length} images</span>
    </div>

    <div class="flex flex-wrap gap-2 mt-auto">
      <button onclick="event.stopPropagation();editProduct('${e.property_id}')" class="btn-press flex-1 min-w-[9.5rem] px-5 py-3.5 rounded-2xl text-sm font-black bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition shadow-lg shadow-blue-600/15">Edit Product</button>
      <button onclick="event.stopPropagation();openProductAiAssistant('${e.property_id}','products')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-fuchsia-500/15 text-fuchsia-200 hover:bg-fuchsia-500/25 transition">AI Assistant</button>
      <button onclick="event.stopPropagation();quickEditProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-indigo-500/15 text-indigo-200 hover:bg-indigo-500/25 transition">Quick Edit</button>
      <button onclick="event.stopPropagation();previewProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-sky-500/15 text-sky-200 hover:bg-sky-500/25 transition">Preview</button>
      <button onclick="event.stopPropagation();${l}" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold ${m} transition">${c}</button>
      <button onclick="event.stopPropagation();duplicateProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-white/10 text-gray-200 hover:bg-white/20 transition">Duplicate</button>
      <button onclick="event.stopPropagation();archiveProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-red-500/15 text-red-200 hover:bg-red-500/25 transition">Archive</button>
      <button onclick="event.stopPropagation();shareProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-violet-500/15 text-violet-200 hover:bg-violet-500/25 transition">Share</button>
      <button onclick="event.stopPropagation();deleteProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-rose-600/15 text-rose-200 hover:bg-rose-600/25 transition">Delete</button>
      <button onclick="event.stopPropagation();openProductMoreActions('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-gray-600/20 text-gray-200 hover:bg-gray-600/35 transition">More</button>
    </div>

    ${a.length?`<div class="flex flex-wrap gap-1.5">${a.slice(0,6).map(h=>`<span class="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200">${d(h)}</span>`).join("")}</div>`:'<div class="text-xs text-gray-500">No tags</div>'}
  </article>`}function Si(e,t){const a=[...e],i=s=>new Date(s||0).getTime()||0;return t==="oldest"?a.sort((s,r)=>i(s.created_at)-i(r.created_at)):t==="price-high"?a.sort((s,r)=>Y(r.price)-Y(s.price)):t==="price-low"?a.sort((s,r)=>Y(s.price)-Y(r.price)):t==="sales-high"?a.sort((s,r)=>Ne(r)-Ne(s)):t==="views-high"?a.sort((s,r)=>qe(r)-qe(s)):a.sort((s,r)=>i(r.created_at)-i(s.created_at)),a}function Yt(e){const t=document.getElementById("products-grid"),a=document.getElementById("products-empty"),i=document.getElementById("products-result-count");if(!t)return;const s=window._productsCardLimit||60,r=e.slice(0,s);t.innerHTML=r.map($i).join(""),i&&(i.textContent=String(e.length));const n=document.getElementById("products-more");if(n){const o=e.length-r.length;o>0?n.innerHTML=`<button onclick="loadMoreProducts()" class="btn-press px-8 py-4 rounded-2xl text-base font-black bg-blue-500/15 text-blue-200 hover:bg-blue-500/25 border border-blue-500/25 transition">Show ${Math.min(60,o)} more (${o} left)</button>`:n.innerHTML=e.length>60?'<span class="text-sm text-gray-500">All products shown</span>':""}a&&a.classList.toggle("hidden",e.length>0),updateBulkBar(),window.lucide&&lucide.createIcons()}window.loadMoreProducts=function(){window._productsCardLimit=(window._productsCardLimit||60)+60,filterProducts(!0)};function Xt(e){const t=document.getElementById("products-table-body"),a=document.getElementById("products-result-count");t&&(t.innerHTML=e.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-10">No products found.</td></tr>':e.map(i=>{const s=i.images&&i.images[0]?i.images[0]:"/fallback.svg",r=st(i),n=window._productSelection?.has(i.property_id),o=i.is_active?`unpublishProduct('${i.property_id}')`:`publishProduct('${i.property_id}')`,l=i.is_active?"Unpublish":"Publish";return`<tr class="prod-table-row" data-id="${i.property_id}" style="cursor:pointer">
          <td>
            <div class="flex items-center gap-2.5" onclick="editProduct('${i.property_id}')">
              <input type="checkbox" class="prod-check accent-blue-500" value="${i.property_id}" ${n?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${i.property_id}', this.checked)">
              <img src="${d(s)}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
              <div class="min-w-0">
                <p class="text-xs font-bold text-white truncate max-w-[160px]">${d(i.title||"Untitled Product")}</p>
                <p class="text-[10px] font-mono text-gray-500">${d(rt(i))}</p>
              </div>
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${d(i.category||"Uncategorized")}</span></td>
          <td><span class="text-xs font-bold text-emerald-400">$${Y(i.price).toLocaleString()}</span></td>
          <td><span class="text-xs text-gray-300">${i.stock_quantity!=null?d(i.stock_quantity):"Unlimited"}</span></td>
          <td>${R(r==="archived"?"inactive":r==="active"?"active":"inactive")}</td>
          <td><span class="text-xs text-gray-500">${N(i.created_at)}</span></td>
          <td>
            <div class="flex gap-1">
              <button onclick="editProduct('${i.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
              <button onclick="openProductAiAssistant('${i.property_id}','products')" class="btn-press p-1.5 text-fuchsia-400 hover:bg-fuchsia-500/10 rounded-lg transition" title="AI Assistant"><i data-lucide="sparkles" class="w-3.5 h-3.5"></i></button>
              <button onclick="quickEditProduct('${i.property_id}')" class="btn-press p-1.5 text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition" title="Quick Edit"><i data-lucide="sliders-horizontal" class="w-3.5 h-3.5"></i></button>
              <button onclick="${o}" class="btn-press p-1.5 ${i.is_active?"text-amber-400 hover:bg-amber-500/10":"text-emerald-400 hover:bg-emerald-500/10"} rounded-lg transition" title="${l}"><i data-lucide="${i.is_active?"eye-off":"eye"}" class="w-3.5 h-3.5"></i></button>
              <button onclick="archiveProduct('${i.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Archive"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
            </div>
          </td>
        </tr>`}).join(""),a&&(a.textContent=String(e.length)),window.lucide&&lucide.createIcons())}window.setProductView=function(e){window._productView=e==="table"?"table":"card";const t=document.getElementById("products-grid"),a=document.getElementById("products-table-wrap"),i=document.getElementById("view-card-btn"),s=document.getElementById("view-table-btn"),r=document.getElementById("products-empty"),n=window._productsData||[];t&&t.classList.toggle("hidden",e==="table"),a&&(a.classList.toggle("hidden",e!=="table"),e==="table"&&Xt(n)),i&&i.classList.toggle("active",e!=="table"),s&&s.classList.toggle("active",e==="table"),r&&r.classList.toggle("hidden",n.length>0)};window.filterProducts=function(e){const t=window._productFilters||{};t.search=(document.getElementById("prod-search")?.value||"").trim().toLowerCase(),t.category=document.getElementById("prod-cat-filter")?.value||"",t.tag=document.getElementById("prod-tag-filter")?.value||"",t.status=document.getElementById("prod-status-filter")?.value||"",t.featured=document.getElementById("prod-featured-filter")?.value||"",t.sort=document.getElementById("prod-sort")?.value||"newest",window._productFilters=t;const a=(window._productsData||[]).filter(s=>{const r=[s.title,s.brand,s.category,rt(s),Ue(s).join(" "),s.description].join(" ").toLowerCase();return!(t.search&&!r.includes(t.search)||t.category&&(s.category||"")!==t.category||t.tag&&!Ue(s).includes(t.tag)||t.status&&st(s)!==t.status||t.featured&&t.featured==="featured"!=!!s.is_featured)}),i=Si(a,t.sort);e||(window._productsCardLimit=60),Yt(i),window._productView==="table"&&Xt(i)};window.resetProductFilters=function(){window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"},["prod-search","prod-cat-filter","prod-tag-filter","prod-status-filter","prod-featured-filter","prod-sort"].forEach(t=>{const a=document.getElementById(t);a&&(t==="prod-sort"?a.value="newest":a.value="")}),filterProducts()};window.toggleProductSelection=function(e,t){window._productSelection||(window._productSelection=new Set),t?window._productSelection.add(e):window._productSelection.delete(e),updateBulkBar()};window.toggleSelectAll=function(e,t){document.querySelectorAll("."+t).forEach(a=>{a.checked=e.checked;const i=a.value;window._productSelection||(window._productSelection=new Set),e.checked?window._productSelection.add(i):window._productSelection.delete(i)}),updateBulkBar()};window.toggleSelectAllProducts=function(e){document.querySelectorAll(".prod-check").forEach(t=>{t.checked=!!e,window._productSelection||(window._productSelection=new Set),e?window._productSelection.add(t.value):window._productSelection.delete(t.value)}),updateBulkBar()};window.updateBulkBar=function(){const e=window._productSelection?window._productSelection.size:0,t=document.getElementById("bulk-actions"),a=document.getElementById("bulk-count");t&&(t.classList.toggle("hidden",e===0),e>0&&t.classList.add("flex")),a&&(a.textContent=`${e} selected`)};function Se(){return window._productSelection?[...window._productSelection]:[]}function D(e){const t=String(e?.message||e?.code||"").toLowerCase();return t.includes("row-level security")||t.includes("permission denied")||t.includes("permission denied for table")||t.includes("new row violates row-level security")||t.includes("not permitted")||t.includes("rls policy")||t.includes("duplicate key")||t.includes("violates foreign key")}function He(e,t,a){return e&&D(e)?(u(`⚠️ ${a} blocked: Your account is signed in but the database admin role is not active. Re-run the admin permission migration, or contact the owner.`,"error"),!0):e?(t&&t(),u(`${a} saved locally (DB unavailable): ${e.message||"unknown error"}`,"info"),!0):!1}window.bulkToggleActive=async function(e){const t=Se();if(!t.length)return;const a=await Promise.all(t.map(r=>{const n=Q((window._productsData||[]).find(o=>o.property_id===r));return p.from("showroom_listings").upsert({...n,property_id:r,is_active:e},{onConflict:"property_id"})}));if(a.some(r=>r.error&&D(r.error))){u(`⚠️ ${t.length} products NOT ${e?"published":"unpublished"}: database admin role blocked the write. Re-run the admin permission migration.`,"error"),window._productSelection=new Set,P();return}const s=a.filter(r=>r.error).length;u(`${t.length-s}/${t.length} products ${e?"published":"unpublished"}${s?` (${s} failed: ${a.find(r=>r.error)?.error?.message||"error"})`:""}`,s?"error":"success"),window._productSelection=new Set,P()};window.bulkDuplicateProducts=async function(){const e=Se();if(e.length){for(const t of e)await duplicateProduct(t,!0);u(`${e.length} products duplicated`),window._productSelection=new Set,P()}};window.bulkArchive=async function(){const e=Se();if(!e.length||!confirm(`Archive ${e.length} products? They will be hidden but not deleted.`))return;const t=await Promise.all(e.map(s=>p.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",s)));if(t.some(s=>s.error&&D(s.error))){u("⚠️ Archive blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,P();return}const i=t.filter(s=>s.error).length;u(`${e.length-i}/${e.length} products archived${i?` (${i} failed)`:""}`,i?"error":"success"),window._productSelection=new Set,P()};window.bulkDeleteProducts=async function(){const e=Se();if(!e.length||!confirm(`Delete ${e.length} products permanently? This action cannot be undone.`))return;const t=await Promise.all(e.map(s=>p.from("showroom_listings").delete().eq("property_id",s)));if(t.some(s=>s.error&&D(s.error))){u("⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,P();return}const i=t.filter(s=>s.error).length;u(`${e.length-i}/${e.length} products deleted${i?` (${i} failed)`:""}`,i?"error":"success"),window._productSelection=new Set,P()};window.previewProduct=async function(e){const t=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(i=>i.property_id===e)||t.data;if(!a)return u("Product not found","error");B(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Product Live Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">🔙 Back</button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="space-y-2">
            <img src="${d((a.images||[])[0]||"/fallback.svg")}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
            <div class="flex flex-wrap gap-2">${(a.images||[]).slice(0,8).map(i=>`<img src="${d(i)}" class="w-12 h-12 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">`).join("")}</div>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-black text-white">${d(a.title||"Untitled Product")}</h4>
            <div class="flex items-center gap-2">${R(a.is_active?"active":"inactive")}${a.is_featured?'<span class="badge bg-amber-500/15 text-amber-200 border-amber-500/30">Featured</span>':""}</div>
            <p class="text-xs text-gray-400">${d(a.description||"No description")}</p>
            <div class="grid grid-cols-2 gap-2 text-xs mt-2">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">$${Y(a.price).toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${a.stock_quantity!=null?d(a.stock_quantity):"Unlimited"}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${d(a.brand||"N/A")}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Category</span><p class="text-gray-200 font-bold">${d(a.category||"N/A")}</p></div>
            </div>
            <div class="pt-2 flex gap-2">
              <button onclick="editProduct('${a.property_id}');closeModal();" class="btn-press px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl">Edit</button>
              <button onclick="shareProduct('${a.property_id}')" class="btn-press px-3 py-2 bg-violet-600/70 hover:bg-violet-500 text-white text-xs font-bold rounded-xl">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.quickEditProduct=async function(e){const t=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(s=>s.property_id===e)||t.data;if(!a)return u("Product not found","error");const i=Array.isArray(a.images)?a.images:[];B(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-black text-white">Quick Edit Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">Back</button>
        </div>
        <form onsubmit="saveQuickEditProduct(event,'${a.property_id}')" class="space-y-4">
          <div><label class="lbl">Title</label><input name="title" class="input-field" value="${d(a.title||"")}"></div>
          <div class="grid grid-cols-2 gap-3">
            <div><label class="lbl">Price</label><input type="number" step="0.01" name="price" class="input-field" value="${d(a.price||0)}"></div>
            <div><label class="lbl">Stock</label><input type="number" name="stock_quantity" class="input-field" value="${d(a.stock_quantity??"")}" placeholder="Unlimited"></div>
          </div>
          <div><label class="lbl">Availability</label><select name="availability_status" class="input-field">${["In Stock","Out of Stock","Pre-order","Limited Stock","Archived"].map(s=>`<option value="${s}" ${a.availability_status===s?"selected":""}>${s}</option>`).join("")}</select></div>
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
              ${i.map((s,r)=>re(s,r)).join("")}
            </div>
            <div id="image-url-inputs">${i.map((s,r)=>`<input type="hidden" name="images" id="img-url-${r}" value="${d(s)}">`).join("")}</div>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
          </div>
          <button type="submit" class="btn-press w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-base font-bold">Save Quick Edit</button>
        </form>
      </div>
    </div>`),nt(),lt(),Z(),ee(),window.lucide&&lucide.createIcons()};window.saveQuickEditProduct=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=[...document.querySelectorAll("#image-preview .img-thumb img")].map(o=>o.getAttribute("src")).filter(o=>o&&!String(o).startsWith("blob:")),s={title:a.get("title")||"Untitled Product",price:Math.max(j,Math.min(J,parseFloat(a.get("price"))||0)),stock_quantity:a.get("stock_quantity")===""?null:parseInt(a.get("stock_quantity"),10),availability_status:a.get("availability_status")||"In Stock",is_featured:a.get("is_featured")==="on",is_active:a.get("is_active")==="on"||i.length>=24,images:i},r=Q((window._productsData||[]).find(o=>o.property_id===t)),{error:n}=await p.from("showroom_listings").upsert({...r,...s,property_id:t},{onConflict:"property_id"});if(n){if(D(n)){u("⚠️ Save blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),z(),P();return}ja(t,s),u("Quick edit saved locally","info")}else u(s.is_active?"Saved & published — your showroom shows it now":"Quick edit saved (draft)");z(),P()};window.publishProduct=function(e){return toggleProductActive(e,!0)};window.unpublishProduct=function(e){return toggleProductActive(e,!1)};window.shareProduct=async function(e){const t=`${window.location.origin}/details.html?id=${encodeURIComponent(e)}`;try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(t),u("Product link copied to clipboard");return}}catch{}window.prompt("Copy product link:",t)};window.deleteProduct=async function(e){if(!confirm("Delete this product permanently? This action cannot be undone."))return;const{error:t}=await p.from("showroom_listings").delete().eq("property_id",e);if(t)return D(t)?u("⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"):u("Delete failed: "+t.message,"error");u("Product deleted"),P()};window.clearAllProducts=async function(){const e=(window._productsData||[]).length;if(!confirm(`Delete ALL ${e} product(s) from the Product Manager and the database now?

This is permanent and cannot be undone. Your built-in showroom catalog will stay.`))return;const{error:t}=await p.from("showroom_listings").delete().neq("property_id","__none__");if(t)return D(t)?u("⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"):u("Clear failed: "+t.message,"error");try{localStorage.removeItem("kco_local_showroom_listings_v1")}catch{}u("All products deleted. The manager now shows your showroom catalog."),P()};window.openProductMoreActions=function(e){B(`
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
    </div>`)};function Ai(){const e=new Date().getHours();return e<12?"morning":e<17?"afternoon":"evening"}function Zt(e){const t=document.getElementById("chart-revenue");if(!t)return;const a=[],i=new Date;for(let r=5;r>=0;r--){const n=new Date(i.getFullYear(),i.getMonth()-r,1);a.push({label:n.toLocaleString("default",{month:"short"}),month:n.getMonth(),year:n.getFullYear()})}const s=a.map(r=>e.filter(n=>{const o=new Date(n.created_at);return o.getMonth()===r.month&&o.getFullYear()===r.year&&["approved","payment_approved","delivered"].includes(n.status)}).reduce((n,o)=>n+(parseFloat(o.amount)||0),0));new Chart(t,{type:"bar",data:{labels:a.map(r=>r.label),datasets:[{label:"Revenue (USD)",data:s,backgroundColor:"rgba(59,130,246,.6)",borderColor:"rgb(59,130,246)",borderWidth:1,borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"#64748b",callback:r=>"$"+r.toLocaleString()},grid:{color:"rgba(59,130,246,.05)"}},x:{ticks:{color:"#64748b"},grid:{display:!1}}}}})}const ea=["Electronics","Phones","Computers & Laptops","Fashion","Men's Fashion","Women's Fashion","Shoes","Bags & Accessories","Jewelry","Beauty & Skincare","Home & Kitchen","Furniture","Garden & Outdoor","Toys & Games","Sports & Fitness","Food & Groceries","Baby & Kids","Health & Medical","Books & Education","Office & Stationery","Pet Supplies","Musical Instruments","Cameras & Photography","Watches","Gaming","Software & Digital","Services","Cars","Luxury Cars","Motorcycles","Commercial Vehicles","Boats & Marine","Social Media Accounts","Other"],ot=["Cars","Luxury Cars","Motorcycles","Commercial Vehicles","Boats & Marine"],fe={default:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Phones:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"storage",label:"Storage (e.g. 128GB)",type:"text"},{key:"ram",label:"RAM (e.g. 8GB)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],"Computers & Laptops":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"processor",label:"Processor (CPU)",type:"text"},{key:"ram",label:"RAM",type:"text"},{key:"storage",label:"Storage",type:"text"},{key:"display",label:"Display Size",type:"text"},{key:"graphics",label:"Graphics Card",type:"text"},{key:"os",label:"Operating System",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Electronics:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model Number",type:"text"},{key:"color",label:"Color",type:"text"},{key:"voltage",label:"Voltage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Shoes:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Jewelry:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"material",label:"Material (e.g. 14k Gold)",type:"text"},{key:"gemstone",label:"Gemstone",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Watches:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"movement",label:"Movement (Quartz/Automatic)",type:"text"},{key:"case_material",label:"Case Material",type:"text"},{key:"water_resistance",label:"Water Resistance",type:"text"},{key:"color",label:"Dial Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"description",label:"Description",type:"textarea",span:2}],Gaming:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"platform",label:"Platform (PS5, Xbox, PC…)",type:"text"},{key:"model",label:"Game / Model",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],"Sports & Fitness":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]};["Men's Fashion","Women's Fashion","Fashion"].forEach(e=>fe[e]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (T-Shirt, Dress…)",type:"text"},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]);ot.forEach(e=>fe[e]=[{key:"title",label:"Vehicle Title",type:"text",required:!0,span:2,placeholder:"e.g. 2023 Toyota Land Cruiser V8 Turbo Diesel"},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"model_year",label:"Model Year",type:"text",placeholder:"e.g. 2023"},{key:"body_type",label:"Body Type",type:"select",options:["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"]},{key:"mileage",label:"Mileage",type:"text",placeholder:"e.g. 15,000 mi or 0 (new)"},{key:"engine",label:"Engine",type:"text",placeholder:"e.g. 4.0L V8 Turbo Diesel"},{key:"horsepower",label:"Horsepower (HP)",type:"text",placeholder:"e.g. 500 HP"},{key:"transmission",label:"Transmission",type:"select",options:["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"]},{key:"drive_type",label:"Drive Type",type:"select",options:["FWD","RWD","AWD","4WD"]},{key:"fuel_type",label:"Fuel Type",type:"select",options:["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"]},{key:"safety_features",label:"Safety Features (comma separated)",type:"text",placeholder:"ABS, Airbags, Lane Assist, Traction Control…"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}]);function ta(e=""){return _e.map(t=>`<option value="${t.code}" ${e===t.code?"selected":""}>${t.flag} ${t.name}</option>`).join("")}function aa(e="USD"){return Ut.map(t=>`<option value="${t}" ${e===t?"selected":""}>${t}</option>`).join("")}function Ge(e){return String(e||"").split(",").map(t=>t.trim()).filter(Boolean)}function _(e,t){const a=document.querySelector(`[name="${e}"]`);!a||t==null||(a.value=t)}function ia(e){const t=document.getElementById(e);t&&(t.min=String(j),t.max=String(J),t.placeholder=`Price (${j} - ${J})`)}function $t(e){const t=document.getElementById(`${e}-country_code`),a=document.getElementById(`${e}-country`),i=document.getElementById(`${e}-currency`);if(!t)return;const s=_e.find(r=>r.code===t.value);a&&s&&(a.value=s.name),i&&s&&(i.value=Ze(s.code))}function ye(e,t){const a=document.getElementById(`${e}-image-requirement`),i=document.getElementById(`${e}-required_image_count`);i&&(i.value=t?String(t):""),a&&(t>0?(a.textContent=`This listing template requires at least ${t} images.`,a.classList.remove("hidden")):(a.textContent="",a.classList.add("hidden")))}function sa(e,t,a){if(e>0&&t.length<e)throw new Error(`${a} needs at least ${e} images before publishing.`)}function ze(e,t="full"){const a=document.getElementById("pf-catalog_template_id")?.value||"",i=document.getElementById("pf-currency")?.value||"USD",s=parseFloat(document.getElementById("pf-price")?.value)||j,r=Rt({templateId:a,listingType:"product",category:e,countryCode:"US",currency:i,price:s});if(!r){ye("pf",ot.includes(e)?24:0);return}ye("pf",r.requiredImageCount||0),_("currency",r.currency),_("subcategory",r.subcategory),_("features_text",r.features.join(", ")),_("highlights_text",r.highlights.join(", ")),_("seo_keywords_text",r.seo_keywords.join(", ")),t==="full"?(_("title",r.title),_("description",r.description),_("brand",r.brand||""),_("model",r.model||""),_("color",r.color||""),_("size",r.size||""),_("condition",r.condition||"New")):_("description",r.description)}function We(e="full"){const t=document.getElementById("ppf-catalog_template_id")?.value||"",a=document.getElementById("ppf-country_code")?.value||"US",i=document.getElementById("ppf-currency")?.value||"USD",s=parseFloat(document.getElementById("ppf-price")?.value)||j,r=Rt({templateId:t,listingType:"property",category:"Real Estate",countryCode:a,currency:i,price:s});if(!r){ye("ppf",24);return}ye("ppf",r.requiredImageCount||24),_("country",r.country),_("country_code",r.country_code),_("currency",r.currency),_("subcategory",r.subcategory),_("product_location",r.product_location),_("features_text",r.features.join(", ")),_("highlights_text",r.highlights.join(", ")),_("seo_keywords_text",r.seo_keywords.join(", ")),e==="full"?(_("title",r.title),_("description",r.description),_("property_type",r.property_type||""),_("bedrooms",r.bedrooms??""),_("bathrooms",r.bathrooms??""),_("building_size",r.building_size||""),_("land_size",r.land_size||""),_("furnished",r.furnished||"")):_("description",r.description)}window.applyProductCatalogTemplate=function(e,t="full"){ze(e,t)};window.applyPropertyCatalogTemplate=function(e="full"){We(e)};function Ii(e){return fe[e]||fe.default}function Pi(e,t={},a=!1){return Ii(e).map(s=>{const r=t[s.key]||"",n=s.span===2?"sm:col-span-2":"",o=!a&&s.required?"required":"",l=s.placeholder||s.label;let c="";if(s.type==="select")c=`<select class="input-field" name="${s.key}" id="pf-${s.key}" ${o}>
        <option value="">Select…</option>
        ${s.options.map(m=>`<option value="${m}" ${r===m?"selected":""}>${m}</option>`).join("")}
      </select>`;else if(s.type==="textarea")c=`<textarea class="input-field" name="${s.key}" id="pf-${s.key}" rows="3" placeholder="Write a detailed description…">${d(r)}</textarea>`;else{const h=["brand","model","color","size","material","platform"].includes(s.key)?`pf-list-${s.key}`:"",f=({brand:["Apple","Samsung","Sony","LG","HP","Dell","Lenovo","Asus","Nike","Adidas","Puma","Gucci","Rolex","Toyota","Mercedes","BMW","Tesla"],model:["Pro","Ultra","Max","SE","Standard","Plus","Series 1","Series 2"],color:["Black","White","Silver","Blue","Red","Green","Gold","Gray","Pink","Brown"],size:["XS","S","M","L","XL","XXL","32","34","36","38","40","42"],material:["Cotton","Leather","Stainless Steel","Aluminum","Wood","Glass","Plastic"],platform:["PS5","Xbox Series X","Nintendo Switch","PC","Android","iOS"]}[s.key]||[]).map(g=>`<option value="${d(g)}"></option>`).join("");c=`<input type="${s.type}" class="input-field" name="${s.key}" id="pf-${s.key}" value="${d(r)}" placeholder="${l}" ${h?`list="${h}"`:""} ${o}>${h?`<datalist id="${h}">${f}</datalist>`:""}`}return`<div class="${n}"><label class="lbl">${s.label}${s.required?a?"":" *":""}</label>${c}</div>`}).join("")}window.showAddProductStep1=function(){B(`
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
          ${ea.map(e=>`
            <button data-category="${d(e).toLowerCase()}" onclick="showAddProductStep2('${e.replace(/'/g,"\\'")}')" class="btn-press flex items-center gap-3 p-4 glass-soft border border-blue-500/15 hover:border-blue-500/40 rounded-2xl transition text-left">
              <i data-lucide="tag" class="w-5 h-5 text-blue-400 shrink-0"></i>
              <span class="text-sm font-semibold text-gray-200">${d(e)}</span>
            </button>`).join("")}
        </div>
      </div>
    </div>`)};window.filterProductCategoryChoices=function(e){const t=String(e||"").trim().toLowerCase();document.querySelectorAll("#product-category-grid [data-category]").forEach(a=>{const i=!t||a.dataset.category.includes(t);a.classList.toggle("hidden",!i)})};window.showAddProductStep2=function(e,t={}){const a=!!t.property_id,i=Mt("product",e),s=t.currency||"USD";B(`
    <div class="modal-overlay" onclick="if(event.target===this)closeProductFormModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between gap-3 mb-6">
          <div class="min-w-0">
            <h3 class="text-2xl font-black text-white">${a?"Edit Product":"Add Product"} — ${d(e)}</h3>
            <p class="text-sm text-gray-500 mt-1 truncate">${a?`Editing: ${d(t.property_id)}`:"Fill in the product details below"}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${a?'<button type="button" onclick="closeProductFormModal()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Product Manager</button>':'<button type="button" onclick="showAddProductStep1()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5" title="Change category"><i data-lucide="arrow-left" class="w-4 h-4"></i> Category</button>'}
            <button type="button" onclick="closeProductFormModal()" class="btn-press px-4 h-11 flex items-center justify-center rounded-xl text-sm font-bold uppercase tracking-wide text-gray-400 hover:text-white hover:bg-gray-800 transition" title="Close (X) — return to Product Manager">
              Back
            </button>
          </div>
        </div>

        <form id="product-form" onsubmit="saveProduct(event,'${d(e)}','${a?t.property_id:""}')" class="space-y-6">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-sm font-bold text-white uppercase tracking-wide">Global Catalog Autofill</p>
                <p class="text-sm text-gray-500 mt-1">Pick a template, country, and currency to auto-build the listing title, description, and metadata.</p>
              </div>
              <button type="button" onclick="applyProductCatalogTemplate('${d(e)}')" class="btn-press px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition">Refresh Template</button>
            </div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Catalog Template</label><select class="input-field" name="catalog_template_id" id="pf-catalog_template_id" onchange="applyProductCatalogTemplate('${d(e)}')"><option value="">Choose a template...</option>${i.map(r=>`<option value="${r.id}">${d(r.label)} - ${d(r.subcategory||r.category)}</option>`).join("")}</select></div>
              <div class="sm:col-span-2"><label class="lbl">Currency</label><select class="input-field" name="currency" id="pf-currency" onchange="applyProductCatalogTemplate('${d(e)}')">${aa(s)}</select></div>
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
              ${(t.images||[]).map((r,n)=>re(r,n)).join("")}
            </div>
            <p class="text-sm text-gray-500 mt-1">Drag to reorder • Click X to remove • First image is cover • Upload up to 24 gallery images</p>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
            <div id="image-url-inputs">
              ${(t.images||[]).map((r,n)=>`<input type="hidden" name="images" id="img-url-${n}" value="${d(r)}">`).join("")}
            </div>
          </div>

          <!-- AI Auto-Listing: analyze images + expand gallery -->
          <div class="glass-soft border border-fuchsia-500/20 rounded-2xl p-5">
            <div class="flex items-start justify-between gap-3 mb-3">
              <div>
                <p class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-5 h-5 text-fuchsia-400"></i> AI Auto-Listing</p>
                <p class="text-sm text-gray-500 mt-1">AI looks at your photos, identifies the product, writes the title / description / specifications, detects the category, and can expand the gallery to 24 realistic images.</p>
              </div>
              <span id="pf-ai-badge" class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/25 hidden shrink-0"><i data-lucide="loader-2" class="w-3 h-3 animate-spin"></i> Working…</span>
            </div>
            <div class="flex flex-wrap items-center gap-2.5">
              <button type="button" onclick="runProductImageAnalysis()" class="btn-press px-5 py-3.5 bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-sm font-bold rounded-xl transition flex items-center gap-2">
                <i data-lucide="scan-face" class="w-4 h-4"></i> AI Analyze & Auto-Fill
              </button>
              <select id="pf-ai-expand-count" class="input-field !w-28 !py-3 text-sm" title="How many AI images to generate">
                <option value="12">12 images</option>
                <option value="18">18 images</option>
                <option value="24" selected>24 images</option>
              </select>
              <button type="button" onclick="expandProductGalleryAi()" class="btn-press px-5 py-3.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold rounded-xl transition flex items-center gap-2">
                <i data-lucide="wand-2" class="w-4 h-4"></i> AI Expand Images
              </button>
            </div>
            <p id="pf-ai-status" class="text-sm text-gray-500 mt-3"></p>
            <div id="pf-ai-detected" class="hidden mt-3"></div>
            <div id="pf-ai-generated" class="flex flex-wrap gap-2 mt-3"></div>
          </div>

          <!-- Step 2: Product Details -->
          <div class="text-sm text-blue-200 font-bold uppercase tracking-wide">Step 2: Product Details</div>
          <div class="form-grid form-grid-2">
            ${Pi(e,t,a)}
          </div>

          <div class="form-grid form-grid-2">
            <div class="sm:col-span-2"><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${d(t.subcategory||"")}" placeholder="e.g. Smartphones, SUVs, Model Houses"></div>
            <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${d((t.features||[]).join(", "))}" placeholder="5G connectivity, OLED display, fast charging"></div>
            <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${d((t.highlights||[]).join(", "))}" placeholder="Retail-ready packaging, premium demand, strong presentation"></div>
            <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${d((t.seo_keywords||[]).join(", "))}" placeholder="smartphone, unlocked, global shipping"></div>
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
              <p class="text-sm text-gray-500 mt-1">Allowed price range is ${j} to ${J} in the selected currency.</p>
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
    </div>`),nt(),lt(),ia("pf-price"),ze(e,"pricing"),document.getElementById("pf-price")?.addEventListener("input",()=>ze(e,"pricing")),Ni(e,t.property_id||""),window._pfEscapeHandler=r=>{r.key==="Escape"&&closeProductFormModal()},document.addEventListener("keydown",window._pfEscapeHandler)};window.closeProductFormModal=function(){window._pfEscapeHandler&&(document.removeEventListener("keydown",window._pfEscapeHandler),window._pfEscapeHandler=null),clearTimeout(window._pfAiTimer),z(),P()};const Ei=["Front view","Rear view","Left side","Right side","Interior","Dashboard","Steering wheel","Engine","Wheels and tires","Seats","Trunk","Headlights","Taillights","Roof","Door panels","Mirrors","Suspension","Exhaust","Gear selector","Infotainment screen","Brake system","Close-up details","Lifestyle shot","Three-quarter front angle"],Ci=["Front elevation","Back view","Living room","Kitchen","Dining room","Bedroom","Bathroom","Balcony","Garage","Garden","Swimming pool","Floor plan","Map location","Street view","Neighborhood","Interior detail","Exterior detail","Backyard","Staircase","Hallway","Home office","Playroom","Utility room","Landscaping"],Ti=["Front view","Back view","Left side","Right side","Fabric close-up","Collar detail","Sleeves","Buttons","Zipper","Pocket detail","Brand label","Model wearing it","Folded view","Hanging view","Color variation","Size detail","Matching accessories","Stitching detail","Hem detail","Care label","Style 1","Style 2","Packaging","On model back"],Bi=["Front view","Back view","Left side","Right side","Camera module close-up","Display close-up","Ports","Buttons","Box contents","Charging cable","Screen close-up","Sim tray","Speaker grille","Bottom view","Top view","Angled front","Angled back","With protective case","Retail box","Accessories","Held in hand","Lifestyle shot","Spec sheet","Package contents"],Li=["Front view","Back view","Left side","Right side","Top view","Bottom view","Close-up detail 1","Close-up detail 2","Material texture","Packaging","In use","Lifestyle shot","Scale reference","Color detail","Brand label","Model angle 1","Model angle 2","Accessories","Box contents","Back detail","Angled view 1","Angled view 2","Detail stitching","Complete product"];function Mi(e){const t=String(e||"").toLowerCase();return/(car|vehicle|boat|marine|motorcycle)/.test(t)?Ei:/(house|home|property|apartment|condo|villa|mansion|estate|land|real estate)/.test(t)?Ci:/(cloth|fashion|wear|shoe|bag|accessor)/.test(t)?Ti:/(phone|electronic|computer|laptop|tablet|camera|watch)/.test(t)?Bi:Li}function O(e,t="info"){const a=document.getElementById("pf-ai-status");a&&(a.textContent=e||"",a.className="text-[10px] mt-2 "+(t==="error"?"text-red-400":t==="ok"?"text-emerald-300":t==="warn"?"text-amber-300":"text-gray-500"))}function ve(e,t){const a=document.getElementById("pf-ai-badge");a&&a.classList.toggle("hidden",!e),t&&O(t)}function Ri(){clearTimeout(window._pfAiTimer),window._pfAiTimer=setTimeout(()=>{const e=document.getElementById("product-form");if(!e||e.dataset.aiBusy==="1")return;[...e.querySelectorAll('input[name="images"]')].some(a=>a.value&&!String(a.value).startsWith("blob:"))&&(O("AI detected new images — analyzing automatically…"),runProductImageAnalysis(!0))},900)}window.runProductImageAnalysis=async function(e=!1){const t=document.getElementById("product-form");if(!t||t.dataset.aiBusy==="1")return;const a=t.dataset.category||"",i=[...t.querySelectorAll('input[name="images"]')].map(s=>s.value).filter(s=>s&&!String(s).startsWith("blob:"));if(!i.length){e||O("Upload at least one image first, then AI can analyze it.","warn");return}t.dataset.aiBusy="1",ve(!0,"AI is analyzing your images…");try{const s=await S.analyzeImages(i,{category:a,existingTitle:t.querySelector('[name="title"]')?.value||""});if(!s){O("AI analysis unavailable — add a Gemini, Groq, or OpenRouter API key in AI Settings (or install Ollama locally).","warn");return}Di(s,a),O("AI analysis complete. The fields were auto-filled — review them and save.","ok"),e||u("AI analyzed your images and filled the listing.","success")}catch(s){O("AI analysis failed: "+(s.message||s),"error"),e||u("AI analysis failed: "+(s.message||s),"error")}finally{t.dataset.aiBusy="0",ve(!1)}};function Di(e,t){const a=document.getElementById("product-form");if(!a||!e)return;const i=(l,c)=>{if(c==null||String(c).trim()==="")return;const m=a.querySelector(`[name="${l}"]`);m&&(String(m.value||"").trim()||(m.value=c))},s=(l,c)=>{if(!Array.isArray(c)||!c.length)return;const m=a.querySelector(`[name="${l}"]`);m&&(String(m.value||"").trim()||(m.value=c.join(", ")))};i("title",e.title),i("description",e.description),i("subcategory",e.subcategory),i("brand",e.brand),i("model",e.model),i("color",e.color),i("size",e.size),i("material",e.material),i("storage",e.storage),i("ram",e.ram),i("processor",e.processor),String(a.querySelector('[name="condition"]')?.value||"").trim()||i("condition",e.condition),s("features_text",e.features),s("highlights_text",e.highlights),s("seo_keywords_text",e.seo_keywords);const r=e.specifications||{};["engine","transmission","fuel_type","horsepower","mileage","drive_type","body_type","model_year"].forEach(l=>{r[l]!=null&&String(r[l]).trim()!==""&&i(l,r[l])}),Array.isArray(r.safety_features)&&s("safety_features",r.safety_features);const n=e.category?String(e.category).trim():"",o=document.getElementById("pf-ai-detected");o&&n&&n.toLowerCase()!==String(t||"").toLowerCase()&&(o.classList.remove("hidden"),o.innerHTML=`<div class="flex items-center gap-2 p-2 rounded-lg bg-amber-500/10 border border-amber-500/25">
      <span class="text-[11px] text-amber-200">AI detected category: <b>${d(n)}</b></span>
      <button type="button" onclick="switchProductFormCategory('${d(n).replace(/'/g,"\\'")}')" class="btn-press px-2 py-1 rounded-lg text-[10px] font-bold bg-amber-500 text-[#111827] hover:bg-amber-400 transition">Switch category</button>
      <button type="button" onclick="document.getElementById('pf-ai-detected').classList.add('hidden')" class="text-amber-300 hover:text-white text-[10px] font-bold uppercase tracking-wide">🔙 Back</button>
    </div>`),window.lucide&&lucide.createIcons(),Ke()}window.switchProductFormCategory=function(e){const t=document.getElementById("product-form");if(!t)return;const a={},i=new FormData(t);for(const[s,r]of i.entries())s==="images"?(a.images=a.images||[],r&&!String(r).startsWith("blob:")&&a.images.push(String(r))):s==="tags"?(a.tags=a.tags||[],a.tags.push(r)):a[s]=r;a.is_featured=t.querySelector('[name="is_featured"]')?.checked||!1,a.is_active=t.querySelector('[name="is_active"]')?.checked||!1,a.property_id&&String(a.property_id).trim()?showAddProductStep2(e,a):showAddProductStep2(e,{images:a.images||[],...a})};window.expandProductGalleryAi=async function(){const e=document.getElementById("product-form");if(!e||e.dataset.aiBusy==="1")return;const t=e.dataset.category||"",a=document.getElementById("pf-ai-expand-count"),i=Math.min(24,Math.max(1,parseInt(a?.value||"24",10)||24)),r=[...e.querySelectorAll('input[name="images"]')].map(m=>m.value).filter(m=>m&&!String(m).startsWith("blob:"))[0]||document.querySelector("#image-preview img")?.src;if(!r||r==="/fallback.svg"){O("Upload at least one product image first, then AI can generate the full gallery.","warn");return}const n=Mi(t),o=Math.min(i,n.length);e.dataset.aiBusy="1";const l=document.getElementById("pf-ai-generated");l&&(l.innerHTML="");let c=0;try{for(let m=0;m<o;m++){ve(!0,`Generating ${m+1}/${o} — ${n[m]}…`);try{const h=await S.generateImages(`Generate a single high-quality, photorealistic marketplace photo of this EXACT product from this angle/perspective: ${n[m]}. Keep the product identical in design, color, and branding. Clean background, sharp focus, professional e-commerce product photography.`,r,1);if(h&&h[0]){const b=await Fi(h[0]);b&&(ji(b),c+=1)}}catch(h){O(`Stopped at ${m}/${o}: ${h.message||h}`,"error");break}}c?(O(`Generated ${c} image${c>1?"s":""}. They are added to your gallery — save the product to keep them.`,"ok"),u(`${c} AI image(s) generated and added.`,"success")):O("No images could be generated. Check the Gemini API key / image-model access.","error")}finally{e.dataset.aiBusy="0",ve(!1)}};function ji(e){const t=document.getElementById("image-preview");if(!t)return;const a=t.children.length,i=document.createElement("div");i.innerHTML=re(e,a),t.appendChild(i.firstElementChild),Z(),ge(),ee();const s=document.getElementById("pf-ai-generated");if(s){const r=document.createElement("div");r.className="w-14 h-14 rounded-lg overflow-hidden border border-fuchsia-500/30 relative",r.innerHTML=`<img src="${d(e)}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'"><span class="absolute bottom-0 inset-x-0 text-center text-[7px] font-black bg-fuchsia-600/80 text-white">AI</span>`,s.appendChild(r)}}async function Fi(e){try{const a=await(await fetch(e)).blob(),i=(a.type.split("/")[1]||"png").replace("jpeg","jpg"),s=`ai-${Date.now()}-${Math.random().toString(36).slice(2)}.${i}`;return await me(new File([a],s,{type:a.type}))}catch{return e}}function re(e,t){return`<div class="img-thumb ${t===0?"cover-img":""}" data-index="${t}" title="${t===0?"Cover Image":"Image "+(t+1)}">
    <img src="${d(e)}" onerror="this.src='/fallback.svg'">
    <button class="rp" onclick="document.getElementById('rp-input-${t}').click()" type="button" title="Replace image">↻</button>
    <input type="file" accept="image/*" class="rp-input" id="rp-input-${t}" onchange="replaceImage(${t}, this)">
    <button class="rm" onclick="removeImage(${t})" type="button">🔙</button>
  </div>`}function nt(){const e=document.getElementById("drop-zone");e&&(e.addEventListener("dragover",t=>{t.preventDefault(),e.classList.add("drag-over")}),e.addEventListener("dragleave",()=>e.classList.remove("drag-over")),e.addEventListener("drop",t=>{t.preventDefault(),e.classList.remove("drag-over"),Oi(t.dataTransfer.files)}))}function lt(){const e=document.getElementById("image-preview");!e||!window.Sortable||new Sortable(e,{animation:150,onEnd:()=>Z()})}window.handleImageUpload=async function(e){await ra(e.target.files)};async function Oi(e){await ra(e)}async function ra(e){const t=document.getElementById("image-preview");if(t){for(const a of e){if(!a.type.startsWith("image/"))continue;const i=await me(a);if(i){const s=t.children.length,r=document.createElement("div");r.innerHTML=re(i,s),t.appendChild(r.firstElementChild),Z()}}ge(),ee(),window.lucide&&lucide.createIcons(),Ri()}}async function me(e){try{const{data:{session:t}}=await p.auth.getSession();if(!t)return URL.createObjectURL(e);const a=e.name.split(".").pop(),i=`products/${Date.now()}-${Math.random().toString(36).slice(2)}.${a}`,{error:s}=await p.storage.from("product-images").upload(i,e,{contentType:e.type,upsert:!1});if(s)return URL.createObjectURL(e);const{data:r}=p.storage.from("product-images").getPublicUrl(i);return r.publicUrl}catch{return URL.createObjectURL(e)}}window.removeImage=function(e){const t=document.getElementById("image-preview");if(!t)return;const a=[...t.children];a[e]&&a[e].remove(),Z(),ge(),ee()};window.replaceImage=async function(e,t){const a=document.getElementById("image-preview");if(!a||!t||!t.files||!t.files[0])return;const i=t.files[0];if(!i.type.startsWith("image/")){u("Please choose an image file.","error");return}const s=await me(i);if(!s)return;const n=[...a.querySelectorAll(".img-thumb")][e];if(!n)return;const o=n.querySelector("img");o&&(o.src=s),Z(),ge(),ee(),u("Image replaced. Save changes to apply.","info")};function Z(){const e=document.getElementById("image-preview"),t=document.getElementById("image-url-inputs");!e||!t||(t.innerHTML="",[...e.querySelectorAll(".img-thumb")].forEach((a,i)=>{const s=a.querySelector("img");if(!s)return;const r=document.createElement("input");r.type="hidden",r.name="images",r.id=`img-url-${i}`,r.value=s.src,t.appendChild(r),a.dataset.index=i;const n=a.querySelector(".rm");n&&n.setAttribute("onclick",`removeImage(${i})`);const o=a.querySelector(".rp");o&&o.setAttribute("onclick",`document.getElementById('rp-input-${i}').click()`);const l=a.querySelector(".rp-input");l&&(l.id=`rp-input-${i}`,l.onchange=()=>replaceImage(i,l))}))}function ge(){const e=document.getElementById("image-preview");e&&[...e.querySelectorAll(".img-thumb")].forEach((t,a)=>{t.classList.toggle("cover-img",a===0),t.title=a===0?"Cover Image":`Image ${a+1}`})}function ee(){const e=document.getElementById("image-preview"),t=document.getElementById("gallery-counter");if(!e||!t)return;const a=e.querySelectorAll(".img-thumb").length,i=a>=24;t.textContent=i?"✓ "+a+" / 24 images — this product will auto-publish on save":a+" / 24 images"+(a>=12?" — almost there, keep going for a full gallery":""),t.className="text-sm mt-1 font-bold "+(i?"text-emerald-300":"text-gray-400");const s=document.querySelector('#product-form [name="is_active"]');i&&s&&!s.checked&&(s.checked=!0)}function Ve(e,t){return`kco_product_form_autosave_${e}_${t||"new"}`}function Ui(e){const t=new FormData(e),a={images:[],tags:[],fields:{}};for(const[i,s]of t.entries())i==="images"?s&&!String(s).startsWith("blob:")&&a.images.push(String(s)):i==="tags"?a.tags.push(String(s)):a.fields[i]=String(s);return a.fields.is_featured=e.querySelector('[name="is_featured"]')?.checked?"on":"",a.fields.is_active=e.querySelector('[name="is_active"]')?.checked?"on":"",a}function qi(e,t){if(!t||typeof t!="object")return!1;const a=t.fields||{};Object.entries(a).forEach(([s,r])=>{const n=e.querySelector(`[name="${s}"]`);n&&(n.type==="checkbox"?n.checked=r==="on"||r===!0:n.value=r==null?"":String(r))});const i=Array.isArray(t.tags)?t.tags:[];if(e.querySelectorAll('input[name="tags"]').forEach(s=>{s.checked=i.includes(s.value)}),Array.isArray(t.images)){const s=document.getElementById("image-preview");s&&(s.innerHTML=t.images.map((r,n)=>re(r,n)).join(""),Z(),ge(),ee())}return!0}function Ke(){const e=document.getElementById("product-review-content"),t=document.getElementById("product-form");if(!e||!t)return;const a=t.querySelector('[name="title"]')?.value||"Untitled Product",i=t.querySelector('[name="brand"]')?.value||"N/A",s=parseFloat(t.querySelector('[name="price"]')?.value||"0")||0,r=t.querySelector('[name="stock_quantity"]')?.value,n=r===""||r==null?"Unlimited":r,o=k.section==="products"&&document.querySelector("#product-form")?.dataset?.category||"",l=[...t.querySelectorAll('input[name="tags"]:checked')].map(h=>h.value),c=document.querySelectorAll("#image-preview .img-thumb").length,m=t.querySelector('[name="is_active"]')?.checked;e.innerHTML=`
    <div class="grid grid-cols-2 gap-2">
      <div><span class="text-gray-500">Title</span><p class="text-white font-semibold">${d(a)}</p></div>
      <div><span class="text-gray-500">Brand</span><p class="text-white font-semibold">${d(i)}</p></div>
      <div><span class="text-gray-500">Price</span><p class="text-emerald-300 font-semibold">$${s.toLocaleString()}</p></div>
      <div><span class="text-gray-500">Stock</span><p class="text-white font-semibold">${d(n)}</p></div>
      <div><span class="text-gray-500">Images</span><p class="text-white font-semibold">${c}</p></div>
      <div><span class="text-gray-500">Status</span><p class="${m?"text-emerald-300":"text-amber-300"} font-semibold">${m?"Published":"Draft / Hidden"}</p></div>
    </div>
    <div class="mt-2 text-gray-400">Tags: ${l.length?d(l.join(", ")):"No tags selected"}</div>
    ${o?`<div class="text-gray-500 mt-1">Category: ${d(o)}</div>`:""}
  `}window.previewProductDraft=function(){const e=document.getElementById("product-form");if(!e)return;const t=document.querySelector("#image-preview img")?.src||"/fallback.svg",a=e.querySelector('[name="title"]')?.value||"Untitled Product",i=e.querySelector('[name="description"]')?.value||"No description yet.",s=e.querySelector('[name="brand"]')?.value||"N/A",r=parseFloat(e.querySelector('[name="price"]')?.value||"0")||0,n=e.dataset.category||"Product",o=e.querySelector('[name="stock_quantity"]')?.value||"Unlimited",l=e.querySelector('[name="is_active"]')?.checked;B(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Live Draft Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">🔙 Back</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="${d(t)}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
          <div class="space-y-2">
            <h4 class="text-xl font-black text-white">${d(a)}</h4>
            <div class="flex items-center gap-2">${R(l?"active":"inactive")}<span class="badge bg-blue-500/10 text-blue-300 border-blue-500/20">${d(n)}</span></div>
            <p class="text-sm text-gray-400">${d(i)}</p>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">$${r.toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${d(o)}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2 col-span-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${d(s)}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>`)};function Ni(e,t){const a=document.getElementById("product-form");if(!a)return;a.dataset.category=e;const i=Ve(e,t),s=document.getElementById("product-autosave-note");if(!t)try{const l=localStorage.getItem(i);if(l){const c=JSON.parse(l);qi(a,c)&&s&&(s.textContent="Autosave restored from your last session.",s.classList.remove("hidden"))}}catch{}const r=()=>{try{localStorage.setItem(i,JSON.stringify(Ui(a))),s&&(s.textContent=`Auto saved at ${new Date().toLocaleTimeString()}`,s.classList.remove("hidden"))}catch{}Ke()};let n;const o=()=>{clearTimeout(n),n=setTimeout(r,500)};a.querySelectorAll("input, textarea, select").forEach(l=>{l.addEventListener("input",o),l.addEventListener("change",o)}),Ke(),ee()}window.saveProduct=async function(e,t,a){e.preventDefault();const i=e.target,s=i.querySelector("[type=submit][name=action][value=publish]"),r=a?"One-Click Publish Changes":"One-Click Publish Product";s&&(s.disabled=!0,s.textContent="Saving…");try{const n=new FormData(i),o={};for(const[b,f]of n.entries())b==="images"?(o.images=o.images||[],f&&!String(f).startsWith("blob:")&&o.images.push(String(f))):b==="tags"?(o.tags=o.tags||[],o.tags.push(f)):o[b]=f;o.is_featured=i.querySelector('[name="is_featured"]')?.checked?"on":"",o.is_active=i.querySelector('[name="is_active"]')?.checked?"on":"";const l=n.get("action")==="draft",c=b=>Ge(b),m=b=>{const f=["model","storage","ram","processor","display","material","gender","platform","voltage","engine","transmission","fuel_type","horsepower","mileage","drive_type","body_type","model_year"],g={};for(const v of f){const $=b[v];g[v]=$!=null&&String($).trim()!==""?$:null}if(b.safety_features){const v=c(b.safety_features);g.safety_features=v.length?v:null}return g};let h;if(a){let b=Q((window._productsData||[]).find(L=>L.property_id===a));if(!b){const{data:L}=await p.from("showroom_listings").select("*").eq("property_id",a).maybeSingle();b=L?Q(L):null}if(!b)throw new Error("Could not load the current product. Refresh the page and try again.");const f=(L,De)=>{const Ba=L===""||L==null?"":L,La=De===""||De==null?"":De;return String(Ba).trim()===String(La).trim()},g={};["title","description","currency","subcategory","brand","color","size","condition","warranty","availability_status","model_year","body_type","mileage","engine","horsepower","transmission","drive_type","fuel_type"].forEach(L=>{f(o[L],b[L])||(g[L]=o[L]==null||o[L]===""?null:o[L])});const v=o.price===""||o.price==null?null:parseFloat(o.price);f(v,b.price)||(g.price=v==null?b.price:Math.max(j,Math.min(J,v)));const $=o.stock_quantity===""||o.stock_quantity==null?null:parseInt(o.stock_quantity,10);f($,b.stock_quantity)||(g.stock_quantity=Number.isFinite($)?$:null);const H=c(o.features_text);f(H.join("||"),(Array.isArray(b.features)?b.features:[]).join("||"))||(g.features=H);const V=o.tags||[];f(V.join("||"),(Array.isArray(b.tags)?b.tags:[]).join("||"))||(g.tags=V);const x=c(o.highlights_text);f(x.join("||"),(Array.isArray(b.highlights)?b.highlights:[]).join("||"))||(g.highlights=x);const G=c(o.seo_keywords_text);f(G.join("||"),(Array.isArray(b.seo_keywords)?b.seo_keywords:[]).join("||"))||(g.seo_keywords=G);const ft=o.images||[];f(ft.join("||"),(Array.isArray(b.images)?b.images:[]).join("||"))||(g.images=ft);const yt=o.is_featured==="on";!!b.is_featured!==yt&&(g.is_featured=yt);const vt=l?!1:o.is_active==="on"||(o.images||[]).length>=24;!!b.is_active!==vt&&(g.is_active=vt);const Ta=m(o),wt={...b.specifications&&typeof b.specifications=="object"?b.specifications:{},...Ta};if(JSON.stringify(wt)!==JSON.stringify(b.specifications||{})&&(g.specifications=wt),Object.keys(g).length===0){u("No changes detected — nothing was saved.","info");try{localStorage.removeItem(Ve(t,a))}catch{}s&&(s.disabled=!1,s.textContent=r);return}const xt={...b,...g,property_id:a,updated_at:new Date().toISOString()};if({error:h}=await p.from("showroom_listings").upsert(xt,{onConflict:"property_id"}),h&&He(h,()=>Fe(xt),"Product update")){s&&(s.disabled=!1,s.textContent=r);return}u(l?"Draft saved!":`Saved & published — your showroom shows it now (${Object.keys(g).length} change${Object.keys(g).length>1?"s":""}).`)}else{const b=parseInt(o.required_image_count||"0",10)||(ot.includes(t)?24:0);if(sa(b,o.images||[],"This listing"),!o.title||!o.title.trim())throw new Error("A product title is required.");if(o.price===""||o.price==null||!isFinite(parseFloat(o.price)))throw new Error("A price is required.");if(!o.condition)throw new Error("Please choose the product condition.");const f={listing_type:"product",category:t,subcategory:o.subcategory||null,title:o.title.trim(),description:o.description||"",price:Math.max(j,Math.min(J,parseFloat(o.price)||0)),currency:o.currency||"USD",country:"",country_code:"",listing_status:"sale",state:"",city:"",product_location:"",latitude:null,longitude:null,is_active:l?!1:o.is_active==="on"||(o.images||[]).length>=24,is_featured:o.is_featured==="on",brand:o.brand||null,color:o.color||null,size:o.size||null,condition:o.condition||null,warranty:o.warranty||null,availability_status:o.availability_status||"In Stock",stock_quantity:o.stock_quantity?parseInt(o.stock_quantity):null,images:o.images||[],features:c(o.features_text).length?c(o.features_text):o.tags||[],tags:o.tags||[],highlights:c(o.highlights_text),seo_keywords:c(o.seo_keywords_text),is_ai_generated:!!o.catalog_template_id,ai_generated_fields:o.catalog_template_id?["title","description","features","highlights","seo_keywords"]:[],specifications:m(o)},g=et();if(f.property_id=g,{error:h}=await p.from("showroom_listings").insert(f),h&&He(h,()=>Fe({...f,property_id:f.property_id}),"Product publish")){s&&(s.disabled=!1,s.textContent=r);return}u(l?"Draft saved!":"Published! Your showroom shows this product now.")}try{localStorage.removeItem(Ve(t,a))}catch{}closeProductFormModal(),P()}catch(n){u("Error: "+n.message,"error"),s&&(s.disabled=!1,s.textContent=r)}};window.editProduct=async function(e){const{data:t,error:a}=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=a?null:t;if(i||(i=Pt(e)),i||(i=(window._productsData||[]).find(s=>s.property_id===e)||null),!i)return u("Product not found","error");showAddProductStep2(i.category||"Other",i)};window.toggleProductActive=async function(e,t){const a=Q((window._productsData||[]).find(s=>s.property_id===e)),{error:i}=await p.from("showroom_listings").upsert({...a,property_id:e,is_active:t,availability_status:t?"In Stock":"Out of Stock"},{onConflict:"property_id"});if(i)return D(i)?u(`⚠️ ${t?"Publish":"Unpublish"} blocked: database admin role rejected the write. Re-run the admin permission migration.`,"error"):u(`${t?"Publish":"Unpublish"} failed: ${i.message}`,"error");u(t?"Product published":"Product unpublished"),P()};window.duplicateProduct=async function(e,t=!1){const{data:a}=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();if(!a)return;const{id:i,property_id:s,created_at:r,updated_at:n,...o}=a,l=et();await p.from("showroom_listings").insert({...o,property_id:l,title:a.title+" (Copy)",is_active:!1}),t||(u("Product duplicated"),P())};window.archiveProduct=async function(e){confirm("Archive this product? It will be hidden from the website but can be restored.")&&(await p.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",e),u("Product archived"),P())};const Hi=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","Commercial Building","Hotel","Land","Other"];async function Ae(){const e=document.getElementById("content");try{const{data:t,error:a}=await p.from("showroom_listings").select("*").eq("listing_type","property").order("created_at",{ascending:!1});let i=a?Et().filter(s=>s.listing_type==="property"):t||[];if(Array.isArray(U)){const s=new Set(i.map(n=>n.property_id)),r=U.filter(n=>n.listing_type==="property"&&n.property_id&&!s.has(n.property_id));r.length&&(i=i.concat(r))}i.sort((s,r)=>new Date(r.created_at||0)-new Date(s.created_at||0)),window._propertiesData=i,e.innerHTML=`
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
                        <img src="${d((s.images||[])[0]||"/fallback.svg")}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
                        <div><p class="text-xs font-bold text-white truncate max-w-[160px]">${d(s.title)}</p><p class="text-[10px] font-mono text-gray-500">${d(s.property_id)}</p></div>
                      </div>
                    </td>
                    <td><span class="text-xs text-gray-300">${d(s.property_type||s.category)}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${d([s.city,s.state,s.country].filter(Boolean).join(", ")||"—")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(s.price||0).toLocaleString()}</span></td>
                    <td>${R(s.listing_status||"sale")} ${R(s.is_active?"active":"inactive")}</td>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.showAddPropertyModal=function(e={}){const t=!!e.property_id,a=Mt("property","Real Estate"),i=e.country_code||"US",s=e.currency||Ze(i);B(`
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
              <div class="sm:col-span-2"><label class="lbl">Property Template</label><select class="input-field" name="catalog_template_id" id="ppf-catalog_template_id" onchange="applyPropertyCatalogTemplate()"><option value="">Choose a property template...</option>${a.map(r=>`<option value="${r.id}">${d(r.label)} - ${d(r.propertyType||r.subcategory)}</option>`).join("")}</select></div>
              <div><label class="lbl">Country</label><select class="input-field" name="country_code" id="ppf-country_code" onchange="syncPropertyCountry(); applyPropertyCatalogTemplate()">${ta(i)}</select></div>
              <div><label class="lbl">Currency</label><select class="input-field" name="currency" id="ppf-currency" onchange="applyPropertyCatalogTemplate()">${aa(s)}</select></div>
            </div>
            <p id="ppf-image-requirement" class="text-[11px] text-amber-300">This property flow expects 24 images for a complete gallery.</p>
            <input type="hidden" name="required_image_count" id="ppf-required_image_count" value="24">
          </div>

          <div class="form-grid form-grid-2">
            <div class="sm:col-span-2"><label class="lbl">Property Title *</label><input class="input-field" name="title" value="${d(e.title||"")}" required placeholder="e.g. Cozy 3-Bedroom Family Home"></div>
            <div><label class="lbl">Property Type *</label><select class="input-field" name="property_type" required>
              ${Hi.map(r=>`<option value="${r}" ${e.property_type===r?"selected":""}>${r}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Listing Status</label><select class="input-field" name="listing_status">
              <option value="sale" ${e.listing_status!=="rent"?"selected":""}>For Sale</option>
              <option value="rent" ${e.listing_status==="rent"?"selected":""}>For Rent</option>
            </select></div>
            <div><label class="lbl">Price *</label><input type="number" class="input-field" id="ppf-price" name="price" value="${e.price||""}" required placeholder="0"></div>
            <div><label class="lbl">Country Name *</label><input class="input-field" id="ppf-country" name="country" value="${d(e.country||"")}" required placeholder="United States"></div>
            <div><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${d(e.subcategory||"")}" placeholder="e.g. Villas, Mansions, Hotels"></div>
            <div><label class="lbl">State / Province</label><input class="input-field" name="state" value="${d(e.state||"")}" placeholder="e.g. California"></div>
            <div><label class="lbl">City</label><input class="input-field" name="city" value="${d(e.city||"")}" placeholder="e.g. Los Angeles"></div>
            <div><label class="lbl">Town / Local Area</label><input class="input-field" name="town" value="${d(e.town||"")}" placeholder="Neighborhood or district"></div>
            <div><label class="lbl">Latitude</label><input type="number" step="any" class="input-field" name="latitude" value="${d(e.latitude||"")}" placeholder="40.7128"></div>
            <div><label class="lbl">Longitude</label><input type="number" step="any" class="input-field" name="longitude" value="${d(e.longitude||"")}" placeholder="-74.0060"></div>
            <div><label class="lbl">Bedrooms</label><input type="number" class="input-field" name="bedrooms" value="${e.bedrooms??""}" placeholder="3"></div>
            <div><label class="lbl">Bathrooms</label><input type="number" class="input-field" name="bathrooms" value="${e.bathrooms??""}" placeholder="2"></div>
            <div><label class="lbl">Building Size</label><input class="input-field" name="building_size" value="${d(e.building_size||"")}" placeholder="e.g. 2,500 sqft"></div>
            <div><label class="lbl">Land Size</label><input class="input-field" name="land_size" value="${d(e.land_size||"")}" placeholder="e.g. 0.5 acres"></div>
            <div><label class="lbl">Parking Spaces</label><input type="number" class="input-field" name="parking_spaces" value="${e.parking_spaces??""}"></div>
            <div><label class="lbl">Furnished</label><select class="input-field" name="furnished">
              <option value="">Not specified</option>
              <option value="Furnished" ${e.furnished==="Furnished"?"selected":""}>Furnished</option>
              <option value="Unfurnished" ${e.furnished==="Unfurnished"?"selected":""}>Unfurnished</option>
            </select></div>
            <div class="sm:col-span-2"><label class="lbl">Description</label><textarea class="input-field" name="description" rows="3" placeholder="Describe the property…">${d(e.description||"")}</textarea></div>
            <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${d((e.features||[]).join(", "))}" placeholder="Swimming Pool, Garden, Garage…"></div>
            <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${d((e.highlights||[]).join(", "))}" placeholder="Prime location, map-ready post, 24-image gallery"></div>
            <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${d((e.seo_keywords||[]).join(", "))}" placeholder="mansion, villa, property investment"></div>
            <div class="sm:col-span-2"><label class="lbl">Property Location</label><input class="input-field" name="product_location" value="${d(e.product_location||"")}" placeholder="Estate, district, city, landmark"></div>
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
              ${(e.images||[]).map((r,n)=>re(r,n)).join("")}
            </div>
            <div id="image-url-inputs">
              ${(e.images||[]).map((r,n)=>`<input type="hidden" name="images" id="img-url-${n}" value="${d(r)}">`).join("")}
            </div>
          </div>

          <div class="flex gap-3 pt-2">
            <button type="submit" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition">${t?"💾 Save Changes":"🚀 Publish Property"}</button>
          </div>
        </form>
      </div>
    </div>`),nt(),lt(),ia("ppf-price"),window.syncPropertyCountry=function(){$t("ppf")},$t("ppf"),We("pricing"),document.getElementById("ppf-price")?.addEventListener("input",()=>We("pricing"))};window.saveProperty=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=Object.fromEntries(a.entries()),s=a.getAll("images").filter(c=>c&&!c.startsWith("blob:")),r=(i.features_text||"").split(",").map(c=>c.trim()).filter(Boolean),n=t?0:parseInt(i.required_image_count||"24",10)||24;sa(n,s,"This property");const o={listing_type:"property",category:i.property_type||"Real Estate",subcategory:i.subcategory||null,title:i.title,description:i.description||"",price:Math.max(j,Math.min(J,parseFloat(i.price)||0)),currency:i.currency||"USD",country:i.country||"",country_code:(i.country_code||"").toUpperCase(),state:i.state||"",city:i.city||"",town:i.town||"",product_location:i.product_location||"",latitude:i.latitude?parseFloat(i.latitude):null,longitude:i.longitude?parseFloat(i.longitude):null,property_type:i.property_type||"",listing_status:i.listing_status||"sale",bedrooms:i.bedrooms?parseInt(i.bedrooms):null,bathrooms:i.bathrooms?parseInt(i.bathrooms):null,building_size:i.building_size||"",land_size:i.land_size||"",parking_spaces:i.parking_spaces?parseInt(i.parking_spaces):null,furnished:i.furnished||"",features:r,images:s,highlights:Ge(i.highlights_text),seo_keywords:Ge(i.seo_keywords_text),is_ai_generated:!!i.catalog_template_id,ai_generated_fields:i.catalog_template_id?["title","description","features","highlights","seo_keywords","country","country_code","product_location"]:[],is_active:i.is_active==="on"};let l;if(t){o.property_id=t;const c=Q((window._propertiesData||[]).find(m=>m.property_id===t)||(window._productsData||[]).find(m=>m.property_id===t));({error:l}=await p.from("showroom_listings").upsert({...c,...o},{onConflict:"property_id"}))}else o.property_id=et(),{error:l}=await p.from("showroom_listings").insert(o);l&&He(l,()=>Fe({...o,property_id:t||o.property_id}),t?"Property update":"Property publish")||(u(t?"Property updated!":"Property published!"),z(),Ae())};window.editProperty=async function(e){const{data:t,error:a}=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=a?null:t;i||(i=Pt(e)),i||(i=(Array.isArray(U)?U.find(s=>s.property_id===e):null)||null),i&&showAddPropertyModal(i)};const Gi=["pending_verification","payment_received","payment_approved","processing","shipped","in_transit","out_for_delivery","delivered","cancelled","rejected"];async function oa(){const e=document.getElementById("content");try{const{data:t}=await p.from("payment_receipts").select("*").order("created_at",{ascending:!1}).limit(300),a=t||[],i=["All","Pending","Paid","Processing","Shipped","Delivered","Cancelled"];let s="All";e.innerHTML=`
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
                ${a.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-12">No orders yet</td></tr>':a.map(r=>zi(r)).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._ordersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}function zi(e){return`<tr class="order-row" data-status="${e.status}" data-search="${d(e.order_number)} ${d(e.full_name)} ${d(e.email)}">
    <td><span class="font-mono text-xs text-blue-400 font-bold">${d(e.order_number||e.id?.slice(0,8))}</span></td>
    <td>
      <p class="text-xs font-bold text-white">${d(e.full_name||"Guest")}</p>
      <p class="text-[10px] text-gray-500">${d(e.email)}</p>
    </td>
    <td><p class="text-xs text-gray-300 truncate max-w-[140px]">${d(e.listing_title||e.listing_id||"—")}</p></td>
    <td class="hidden sm:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(e.amount||0).toLocaleString()}</span></td>
    <td>${R(e.status)}</td>
    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${N(e.created_at)}</span></td>
    <td>
      <button onclick="viewOrder('${e.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="View / Update">
        <i data-lucide="eye" class="w-3.5 h-3.5"></i>
      </button>
    </td>
  </tr>`}window.filterOrders=function(e){document.querySelectorAll("#order-tabs .tab-btn").forEach(t=>t.classList.toggle("active",t.textContent===e)),document.querySelectorAll(".order-row").forEach(t=>{const a=t.dataset.status||"",i=e==="All"||e==="Pending"&&["pending_verification","payment_received","order_placed"].includes(a)||e==="Paid"&&["payment_approved"].includes(a)||e==="Processing"&&["processing"].includes(a)||e==="Shipped"&&["shipped","in_transit","out_for_delivery"].includes(a)||e==="Delivered"&&a==="delivered"||e==="Cancelled"&&["cancelled","rejected"].includes(a);t.style.display=i?"":"none"})};window.searchOrders=function(e){const t=e.toLowerCase();document.querySelectorAll(".order-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewOrder=async function(e){const t=(window._ordersData||[]).find(a=>a.id===e);t&&B(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Order ${d(t.order_number)}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">🔙 Back</button>
        </div>
        <div class="space-y-3 text-sm">
          <div class="grid grid-cols-2 gap-3">
            ${[["Customer",t.full_name],["Email",t.email],["Phone",t.phone],["Amount",qt(t.amount,t.currency)],["Product",t.listing_title||t.listing_id],["Date",W(t.created_at)]].map(([a,i])=>`<div><p class="text-[10px] text-gray-500 uppercase font-bold mb-0.5">${a}</p><p class="text-xs text-white font-medium">${d(i)||"—"}</p></div>`).join("")}
          </div>
          ${t.transaction_reference?`<div class="p-3 glass-soft border border-blue-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Transaction Reference</p><p class="text-xs font-mono text-blue-300">${d(t.transaction_reference)}</p></div>`:""}
          ${t.additional_notes?`<div class="p-3 glass-soft border border-amber-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Notes</p><p class="text-xs text-gray-300">${d(t.additional_notes)}</p></div>`:""}
          <div>
            <label class="lbl">Update Order Status</label>
            <div class="flex gap-2">
              <select id="order-status-select" class="input-field flex-1">
                ${Gi.map(a=>`<option value="${a}" ${t.status===a?"selected":""}>${a.replace(/_/g," ")}</option>`).join("")}
              </select>
              <button onclick="updateOrderStatus('${t.id}')" class="btn-press px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.updateOrderStatus=async function(e){const t=document.getElementById("order-status-select")?.value;if(!t)return;const{error:a}=await p.from("payment_receipts").update({status:t}).eq("id",e);if(a){u(a.message,"error");return}u("Order status updated"),z(),oa()};async function Wi(){const e=document.getElementById("content");try{const{data:t}=await p.from("profiles").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
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
                ${a.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-12">No customers yet</td></tr>':a.map(i=>`<tr class="cust-row" data-search="${d(i.display_name)} ${d(i.user_id)}">
                    <td>
                      <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                          <i data-lucide="user" class="w-4 h-4 text-blue-400"></i>
                        </div>
                        <div>
                          <p class="text-xs font-bold text-white">${d(i.display_name||"Anonymous")}</p>
                          <p class="text-[10px] font-mono text-gray-500">${d(i.user_id?.slice(0,12))}…</p>
                        </div>
                      </div>
                    </td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-300">${d(i.country_code||"—")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${N(i.created_at)}</span></td>
                    <td>
                      <button onclick="viewCustomer('${i.user_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="eye" class="w-3.5 h-3.5"></i></button>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._customersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.searchCustomers=function(e){const t=e.toLowerCase();document.querySelectorAll(".cust-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewCustomer=async function(e){const t=(window._customersData||[]).find(i=>i.user_id===e);if(!t)return;const{data:a}=await p.from("payment_receipts").select("order_number,amount,currency,status,created_at").eq("user_id",e).order("created_at",{ascending:!1}).limit(20);B(`
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
            <p class="font-black text-white">${d(t.display_name||"Anonymous")}</p>
            <p class="text-xs text-gray-400 mt-0.5">Joined ${N(t.created_at)} · ${d(t.country_code||"Unknown country")}</p>
          </div>
        </div>
        <h4 class="text-xs font-bold text-gray-400 uppercase mb-3">Purchase History</h4>
        ${(a||[]).length===0?'<p class="text-xs text-gray-500 py-4 text-center">No orders yet</p>':(a||[]).map(i=>`<div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
            <div><p class="text-xs font-bold text-white font-mono">${d(i.order_number)}</p><p class="text-[10px] text-gray-500">${W(i.created_at)}</p></div>
            <div class="flex items-center gap-2">${R(i.status)}<span class="text-xs font-bold text-emerald-400">$${parseFloat(i.amount).toLocaleString()}</span></div>
          </div>`).join("")}
      </div>
    </div>`)};async function dt(){const e=document.getElementById("content");try{const{data:t}=await p.from("product_reviews").select("*, showroom_listings(title, property_id)").order("created_at",{ascending:!1}).limit(200),a=t||[],i=a.filter(s=>!s.is_approved).length;e.innerHTML=`
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
          ${a.length===0?se("star","No Reviews","Customer reviews will appear here."):a.map(s=>Vi(s)).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}function Vi(e){const t=Array.from({length:5},(a,i)=>i<e.rating?"★":"☆").join("");return`<div class="review-card glass-soft border ${e.is_approved?"border-blue-500/15":"border-amber-500/20"} rounded-xl p-4" data-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-amber-400 font-bold text-sm">${t}</span>
          <span class="text-xs text-gray-500">${N(e.created_at)}</span>
          ${e.is_approved?'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>':'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending Approval</span>'}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${d(e.review_text||"—")}</p>
        <p class="text-[11px] text-blue-400 mt-1.5">On: ${d(e.showroom_listings?.title||e.listing_id)}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${e.is_approved?"":`<button onclick="approveReview('${e.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>`}
        <button onclick="deleteReview('${e.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`}window.filterReviewTab=function(e){["all","pending","approved"].forEach(t=>document.getElementById(`rtab-${t}`)?.classList.toggle("active",t===e)),document.querySelectorAll(".review-card").forEach(t=>{const a=e==="all"||e==="pending"&&t.dataset.approved==="false"||e==="approved"&&t.dataset.approved==="true";t.style.display=a?"":"none"})};window.approveReview=async function(e){await p.from("product_reviews").update({is_approved:!0}).eq("id",e),u("Review approved"),dt()};window.deleteReview=async function(e){confirm("Delete this review permanently?")&&(await p.from("product_reviews").delete().eq("id",e),u("Review deleted"),dt())};async function na(){const e=document.getElementById("content");try{const{data:t}=await p.from("support_messages").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Messages & Support</h2>
        <div class="space-y-3">
          ${a.length===0?se("message-circle","No Messages","Customer support messages will appear here."):a.map(i=>`
              <div class="glass-soft border ${i.is_read?"border-blue-500/10":"border-blue-400/30"} rounded-xl p-4 ${i.is_read?"":"ring-1 ring-blue-500/10"}">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs font-black text-white">${d(i.full_name||i.name||"Anonymous")}</span>
                      ${i.is_read?"":'<span class="badge bg-blue-500/15 text-blue-400 border-blue-500/20">New</span>'}
                      <span class="text-[10px] text-gray-500 ml-auto">${W(i.created_at)}</span>
                    </div>
                    <p class="text-[11px] text-blue-400 mb-1">${d(i.email||"—")}</p>
                    <p class="text-xs text-gray-300">${d(i.message||i.body||"—")}</p>
                    ${i.subject?`<p class="text-[11px] text-gray-500 mt-1">Subject: ${d(i.subject)}</p>`:""}
                  </div>
                  <div class="flex gap-1 shrink-0">
                    <button onclick="markMsgRead('${i.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Mark Read"><i data-lucide="check" class="w-4 h-4"></i></button>
                  </div>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.markMsgRead=async function(e){await p.from("support_messages").update({is_read:!0}).eq("id",e),u("Marked as read"),na()};async function Ie(){const e=document.getElementById("content");try{const{data:t}=await p.from("coupons").select("*").order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
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
                    <td><code class="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">${d(i.code)}</code></td>
                    <td><span class="text-xs text-gray-300">${i.discount_type==="percent"?"Percentage":"Fixed Amount"}</span></td>
                    <td><span class="text-xs font-bold text-emerald-400">${i.discount_type==="percent"?i.discount_value+"%":"$"+i.discount_value}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${i.min_amount?"$"+i.min_amount:"—"}</span></td>
                    <td>${R(i.is_active?"active":"inactive")}</td>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.showAddCouponModal=function(){B(`
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
    </div>`)};window.saveCoupon=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={code:a.code.toUpperCase(),discount_type:a.discount_type,discount_value:parseFloat(a.discount_value),min_amount:a.min_amount?parseFloat(a.min_amount):null,usage_limit:a.usage_limit?parseInt(a.usage_limit):null,expires_at:a.expires_at||null,is_active:!0},{error:s}=await p.from("coupons").insert(i);if(s){u(s.message,"error");return}u("Coupon created!"),z(),Ie()};window.toggleCoupon=async function(e,t){await p.from("coupons").update({is_active:t}).eq("id",e),u(t?"Coupon activated":"Coupon deactivated"),Ie()};window.deleteCoupon=async function(e){confirm("Delete this coupon?")&&(await p.from("coupons").delete().eq("id",e),u("Coupon deleted"),Ie())};async function Ki(){const e=document.getElementById("content");try{const{data:t}=await p.from("notification_log").select("*").order("created_at",{ascending:!1}).limit(100),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Notifications</h2>
        <div class="space-y-2">
          ${a.length===0?se("bell","No Notifications","System notifications will appear here."):a.map(i=>`
              <div class="glass-soft border border-blue-500/10 rounded-xl p-3.5 flex items-start gap-3">
                <div class="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <i data-lucide="bell" class="w-4 h-4 text-blue-400"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-0.5">
                    <span class="text-xs font-bold text-white">${d(i.subject||i.event_type||"Notification")}</span>
                    ${R(i.status)}
                    <span class="text-[10px] text-gray-500 ml-auto">${W(i.created_at)}</span>
                  </div>
                  <p class="text-[11px] text-gray-400">${d(i.recipient||i.order_number)}</p>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}const la=["Featured","Sponsored","Featured Collection","Discover","Promotion"],Ji=[{id:"real-estate",name:"Real Estate & Properties"},{id:"marketplace",name:"Marketplace Showroom"}];let be=null;function Qi(e){const t={Featured:"bg-blue-500/10 text-blue-300 border-blue-500/30",Sponsored:"bg-violet-500/10 text-violet-300 border-violet-500/30","Featured Collection":"bg-amber-500/10 text-amber-300 border-amber-500/30",Discover:"bg-emerald-500/10 text-emerald-300 border-emerald-500/30",Promotion:"bg-blue-500/10 text-blue-300 border-blue-500/30"};return`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${t[e]||t.Featured}">${d(e)}</span>`}function Yi(e){return!e||!e.link_type||e.link_type==="none"?'<span class="text-[10px] text-gray-500">No link</span>':e.link_type==="product"?`<span class="text-[10px] text-blue-300"><i data-lucide="package" class="w-3 h-3 inline mr-1"></i>Product · ${d(e.link_target||"")}</span>`:e.link_type==="category"?`<span class="text-[10px] text-emerald-300"><i data-lucide="tag" class="w-3 h-3 inline mr-1"></i>Category · ${d(e.link_target||"")}</span>`:`<span class="text-[10px] text-amber-300"><i data-lucide="layout-grid" class="w-3 h-3 inline mr-1"></i>Section · ${d(e.link_target||"")}</span>`}function Xi(e){return e.video_url?`<video src="${d(e.video_url)}" ${e.poster_url?`poster="${d(e.poster_url)}"`:""} class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" muted preload="metadata"></video>`:e.image_url?`<img src="${d(e.image_url)}" class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" onerror="this.remove()">`:'<div class="w-24 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="megaphone" class="w-6 h-6 text-blue-400"></i></div>'}async function da(){if(be)return be;const e=[],t=new Set,a=[],i=r=>{if(!r||!r.property_id)return;e.push({id:r.property_id,title:r.title||r.property_id});const n=r.category||"";n&&!t.has(n)&&(t.add(n),a.push(n))};try{U.forEach(i)}catch{}try{const{data:r,error:n}=await p.from("showroom_listings").select("property_id,title,category").order("created_at",{ascending:!1});!n&&r&&r.forEach(i)}catch{}return["Women","Men","Kids","Home","Sports","Jewellery","Electronics","Cars","Motorcycles","Phones","Computers","Furniture","Beauty","Fashion","Real Estate","Bicycles","Trucks","Land","Kitchen","Food","Pets","Books","Toys","Services"].forEach(r=>{t.has(r)||(t.add(r),a.push(r))}),be={products:e,categories:a,sections:Ji},be}async function Zi(e){try{const{data:{session:t}}=await p.auth.getSession();if(!t)return u("Sign in to upload media","error"),null;const a=(e.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),i=/^(mp4|webm|mov|m4v)$/.test(a)||e.type.startsWith("video/"),s=`ads/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${a}`,{error:r}=await p.storage.from("advertisements").upload(s,e,{contentType:e.type,upsert:!1});if(r)return u("Upload failed: "+r.message,"error"),null;const{data:n}=p.storage.from("advertisements").getPublicUrl(s);return{url:n.publicUrl,isVideo:i}}catch{return u("Upload failed","error"),null}}function we(e,t){const a=document.getElementById("ad-media-preview");if(!a)return;const i=document.getElementById("ad-hidden-video"),s=document.getElementById("ad-hidden-image");i&&(i.value=t?e:""),s&&(s.value=t?"":e),a.innerHTML=t?`<video src="${d(e)}" class="w-full h-40 object-cover rounded-xl" controls muted playsinline></video>`:`<img src="${d(e)}" class="w-full h-40 object-cover rounded-xl">`,window.lucide&&lucide.createIcons()}window.onAdMediaPicked=async function(e){const t=e.files&&e.files[0];if(!t)return;if(!(t.type.startsWith("image/")||t.type.startsWith("video/"))){u("Choose an image or video file","error");return}const i=await Zi(t);if(!i){e.value="";return}we(i.url,i.isVideo);const s=document.getElementById("ad-media-url");s&&(s.value=i.url)};window.onAdMediaUrl=function(e){const t=(e.value||"").trim();if(!t)return;const a=/\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(t);we(t,a)};function ct(e,t,a){const i=document.getElementById("ad-link-target-wrap");if(!i)return;if(!t||t==="none"){i.innerHTML='<p class="text-[10px] text-gray-500">This ad is informational and will not be clickable.</p>';return}let s="";t==="product"?s='<option value="">Select a product…</option>'+e.products.map(r=>`<option value="${d(r.id)}" ${String(a)===String(r.id)?"selected":""}>${d(r.id)} — ${d((r.title||"").slice(0,60))}</option>`).join(""):t==="category"?s='<option value="">Select a category…</option>'+e.categories.map(r=>`<option value="${d(r)}" ${a===r?"selected":""}>${d(r)}</option>`).join(""):t==="section"&&(s='<option value="">Select a section…</option>'+e.sections.map(r=>`<option value="${d(r.id)}" ${a===r.id?"selected":""}>${d(r.name)}</option>`).join("")),i.innerHTML=`<label class="lbl">Target</label><select class="input-field" name="link_target">${s}</select>`}function ca(e){return`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${e?"Edit Advertisement":"Add Advertisement"}</h3>
          <button onclick="closeModal()" class="btn-press text-xs font-bold text-gray-400 hover:text-white transition">✕ Close</button>
        </div>
        <form id="ad-form" onsubmit="saveAd(event)" class="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          <input type="hidden" name="id" value="${e?e.id:""}">
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Title *</label><input class="input-field" name="title" required value="${d(e&&e.title?e.title:"")}" placeholder="e.g. Summer Sale 2026"></div>
            <div><label class="lbl">Ad Label</label>
              <select class="input-field" name="ad_label">
                ${la.map(t=>`<option value="${t}" ${e&&e.ad_label===t?"selected":""}>${t}</option>`).join("")}
              </select>
            </div>
          </div>
          <div><label class="lbl">Message</label><textarea class="input-field" name="description" rows="2" placeholder="Short message shown on the ad…">${d(e&&e.description?e.description:"")}</textarea></div>

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
    </div>`}window.onAdLinkTypeChange=function(){const e=window._adLinkCache||{products:[],categories:[],sections:[]},t=document.querySelector('#ad-form select[name="link_type"]'),a=t?t.value:"none";ct(e,a,"")};window.showAddAdModal=async function(){const e=await da();window._adLinkCache=e,B(ca(null)),ct(e,"none","")};window.showEditAdModal=async function(e){const t=await da();window._adLinkCache=t;const{data:a}=await p.from("promotions").select("*").eq("id",e).maybeSingle();if(!a){u("Ad not found","error");return}B(ca(a)),a.image_url?we(a.image_url,!1):a.video_url&&we(a.video_url,!0),ct(t,a.link_type||"none",a.link_target||"")};window.saveAd=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=a.id||"",s={title:a.title,description:a.description||"",ad_label:la.includes(a.ad_label)?a.ad_label:"Featured",image_url:a.image_url||null,video_url:a.video_url||null,link_type:["none","product","category","section"].includes(a.link_type)?a.link_type:"none",link_target:a.link_target||null,start_date:a.start_date?new Date(a.start_date+"T00:00:00").toISOString():null,end_date:a.end_date?new Date(a.end_date+"T23:59:59").toISOString():null,is_active:a.is_active==="on",promo_type:"banner"};if(!s.image_url&&!s.video_url){u("Add an image or video for the ad","error");return}const r=e.target.querySelector('button[type="submit"]');r&&(r.disabled=!0);try{if(i){const{error:n}=await p.from("promotions").update(s).eq("id",i);if(n)throw n;u("Ad updated!")}else{const{error:n}=await p.from("promotions").insert(s);if(n)throw n;u("Ad created!")}}catch(n){u(n.message||"Save failed","error"),r&&(r.disabled=!1);return}z(),oe()};window.togglePromo=async function(e,t){const{error:a}=await p.from("promotions").update({is_active:t}).eq("id",e);if(a){u(a.message,"error");return}u(t?"Ad activated":"Ad deactivated"),oe()};window.moveAd=async function(e,t){try{const{data:a,error:i}=await p.from("promotions").select("id,sort_order").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1});if(i)throw i;const s=a||[],r=s.findIndex(c=>c.id===e),n=r+t;if(r<0||n<0||n>=s.length){u("Already at the edge","info");return}const o=s[r],l=s[n];await p.from("promotions").update({sort_order:l.sort_order}).eq("id",o.id),await p.from("promotions").update({sort_order:o.sort_order}).eq("id",l.id),u("Order updated")}catch(a){u(a.message||"Reorder failed","error")}oe()};window.deletePromo=async function(e){if(confirm("Delete this ad? This cannot be undone.")){try{const{data:t}=await p.from("promotions").select("image_url,video_url,poster_url").eq("id",e).maybeSingle();if(t){const i=[t.image_url,t.video_url,t.poster_url].filter(Boolean).map(s=>{const r=/\/object\/public\/advertisements\/(.+)$/.exec(s);return r?decodeURIComponent(r[1]):null}).filter(Boolean);if(i.length)try{await p.storage.from("advertisements").remove(i)}catch{}}const{error:a}=await p.from("promotions").delete().eq("id",e);if(a)throw a;u("Ad deleted")}catch(t){u(t.message||"Delete failed","error")}oe()}};async function oe(){const e=document.getElementById("content");try{const{data:t}=await p.from("promotions").select("*").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
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
          ${a.length===0?se("megaphone","No Ads","Create your first showcase ad — add a title, image or video, label, and optional product link.",'<button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"><i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement</button>'):a.map((i,s)=>`
              <div class="glass-soft border border-blue-500/15 rounded-xl p-4 flex items-center gap-4">
                ${Xi(i)}
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap">
                    <p class="text-sm font-black text-white truncate">${d(i.title||i.name)}</p>
                    ${Qi(i.ad_label||"Featured")}
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${d(i.description||"")}</p>
                  <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${i.is_active?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":"bg-gray-500/10 text-gray-400 border-gray-500/20"}">${i.is_active?"Active":"Inactive"}</span>
                    ${Yi(i)}
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.renderAds=oe;const ae=[{id:"gemini",name:"Google Gemini",tag:"FREE",color:"blue",icon:"sparkles",kf:"gemini_key",ph:"AIzaSy…",signup:"https://aistudio.google.com/apikey",models:["gemini-3-flash-preview","gemini-3.1-flash-lite-preview"],mf:"gemini_model",dm:"gemini-3-flash-preview",desc:"Google's best free AI. Great for coding, writing apps & websites.",free_tier:"15 req/min · 1M tokens/day — Free forever"},{id:"groq",name:"Groq (Llama 3.3)",tag:"FREE",color:"blue",icon:"zap",kf:"groq_key",ph:"gsk_…",signup:"https://console.groq.com/keys",models:["llama-3.3-70b-versatile","llama-3.1-8b-instant","mixtral-8x7b-32768","gemma2-9b-it"],mf:"groq_model",dm:"llama-3.3-70b-versatile",desc:"Fastest free AI inference. Runs Llama 3.3 & Mixtral. Excellent for coding.",free_tier:"30 req/min · 6,000 req/day free"},{id:"deepseek",name:"DeepSeek Coder",tag:"FREE",color:"cyan",icon:"search",kf:"deepseek_key",ph:"sk-…",signup:"https://platform.deepseek.com/api_keys",models:["deepseek-coder","deepseek-chat","deepseek-reasoner"],mf:"deepseek_model",dm:"deepseek-coder",desc:"Top-ranked coding AI. DeepSeek Coder beats GPT-4 on code benchmarks.",free_tier:"$5 free credit on signup"},{id:"mistral",name:"Mistral / Codestral",tag:"FREE",color:"violet",icon:"wind",kf:"mistral_key",ph:"…key",signup:"https://console.mistral.ai/api-keys",models:["codestral-latest","mistral-small-latest","open-mistral-7b","open-mixtral-8x7b"],mf:"mistral_model",dm:"codestral-latest",desc:"Codestral is purpose-built for code. Free for open-source projects.",free_tier:"Free tier · Codestral free for open-source"},{id:"cohere",name:"Cohere",tag:"FREE",color:"emerald",icon:"cpu",kf:"cohere_key",ph:"…key",signup:"https://dashboard.cohere.com/api-keys",models:["command-r-plus","command-r","command-light"],mf:"cohere_model",dm:"command-r",desc:"Free trial API. Great for chat, code, and text generation.",free_tier:"Free trial · No credit card needed"},{id:"huggingface",name:"Hugging Face",tag:"FREE",color:"amber",icon:"box",kf:"hf_key",ph:"hf_…",signup:"https://huggingface.co/settings/tokens",models:["Qwen/Qwen2.5-Coder-32B-Instruct","meta-llama/Meta-Llama-3-8B-Instruct","mistralai/Mistral-7B-Instruct-v0.3"],mf:"hf_model",dm:"Qwen/Qwen2.5-Coder-32B-Instruct",desc:"500k+ open-source models free. Qwen 2.5 Coder is top-ranked for code.",free_tier:"Free Inference API on open models"},{id:"together",name:"Together AI",tag:"FREE",color:"pink",icon:"users",kf:"together_key",ph:"…key",signup:"https://api.together.ai/settings/api-keys",models:["Qwen/Qwen2.5-Coder-32B-Instruct","meta-llama/Llama-3.3-70B-Instruct-Turbo","deepseek-ai/DeepSeek-V3"],mf:"together_model",dm:"Qwen/Qwen2.5-Coder-32B-Instruct",desc:"$5 free credit. Runs DeepSeek V3 and Qwen 2.5 Coder at high speed.",free_tier:"$5 free credit on signup"},{id:"openrouter",name:"OpenRouter",tag:"FREE",color:"rose",icon:"git-branch",kf:"openrouter_key",ph:"sk-or-…",signup:"https://openrouter.ai/keys",models:["google/gemini-2.0-flash-exp:free","meta-llama/llama-3.3-70b-instruct:free","deepseek/deepseek-chat:free","qwen/qwen-2.5-coder-32b-instruct:free"],mf:"openrouter_model",dm:"google/gemini-2.0-flash-exp:free",desc:'Routes to ALL AI providers. Has 100% free ":free" models including Gemini & Llama.',free_tier:"Many completely FREE models with :free tag"},{id:"cerebras",name:"Cerebras",tag:"FREE",color:"teal",icon:"brain",kf:"cerebras_key",ph:"csk-…",signup:"https://cloud.cerebras.ai/",models:["llama3.3-70b","llama3.1-70b","llama3.1-8b"],mf:"cerebras_model",dm:"llama3.3-70b",desc:"World's fastest AI (2000+ tokens/sec). Free tier with Llama 3.3.",free_tier:"Free tier · 60 req/min"},{id:"fireworks",name:"Fireworks AI",tag:"FREE",color:"red",icon:"flame",kf:"fireworks_key",ph:"fw_…",signup:"https://fireworks.ai/api-keys",models:["accounts/fireworks/models/qwen2p5-coder-32b-instruct","accounts/fireworks/models/llama-v3p3-70b-instruct","accounts/fireworks/models/deepseek-v3"],mf:"fireworks_model",dm:"accounts/fireworks/models/qwen2p5-coder-32b-instruct",desc:"$1 free credit/month. DeepSeek V3, Qwen Coder, Llama 3.3 at ultra-fast speed.",free_tier:"$1 free credit every month"},{id:"github",name:"GitHub Models",tag:"FREE",color:"gray",icon:"github",kf:"github_key",ph:"ghp_…",signup:"https://github.com/marketplace/models",models:["meta-llama/Llama-3.3-70B-Instruct","mistral-ai/Mistral-7B-Instruct-v0.3","openai/gpt-4o","microsoft/Phi-3-mini-4k-instruct"],mf:"github_model",dm:"meta-llama/Llama-3.3-70B-Instruct",desc:"FREE with a GitHub account. Access Llama, Mistral, GPT-4o and Phi via your GitHub token.",free_tier:"Completely FREE with any GitHub account"},{id:"cloudflare",name:"Cloudflare Workers AI",tag:"FREE",color:"blue",icon:"cloud",kf:"cloudflare_key",ph:"…token",signup:"https://dash.cloudflare.com/profile/api-tokens",models:["@cf/meta/llama-3.3-70b-instruct","@cf/deepseek-ai/deepseek-r1-distill-llama-70b","@hf/thebloke/codellama-7b-instruct-awq"],mf:"cloudflare_model",dm:"@cf/meta/llama-3.3-70b-instruct",desc:"FREE 10,000 req/day. Runs Llama, CodeLlama, DeepSeek R1 on Cloudflare's global edge network.",free_tier:"10,000 requests/day FREE forever"},{id:"sambanova",name:"SambaNova Cloud",tag:"FREE",color:"violet",icon:"server",kf:"sambanova_key",ph:"…key",signup:"https://cloud.sambanova.ai/",models:["Meta-Llama-3.3-70B-Instruct","Meta-Llama-3.1-405B-Instruct","Meta-Llama-3.2-3B-Instruct"],mf:"sambanova_model",dm:"Meta-Llama-3.3-70B-Instruct",desc:"FREE fastest Llama 405B inference in the world. Purpose-built AI chips for maximum speed.",free_tier:"Free tier with Llama 3.1 405B"},{id:"hyperbolic",name:"Hyperbolic",tag:"FREE",color:"cyan",icon:"activity",kf:"hyperbolic_key",ph:"…key",signup:"https://app.hyperbolic.xyz/settings",models:["deepseek-ai/DeepSeek-V3","Qwen/Qwen2.5-Coder-32B-Instruct","meta-llama/Llama-3.3-70B-Instruct"],mf:"hyperbolic_model",dm:"Qwen/Qwen2.5-Coder-32B-Instruct",desc:"$10 FREE credit on signup. Run DeepSeek V3 and Qwen 2.5 Coder at competitive speed.",free_tier:"$10 free credit on signup"},{id:"novita",name:"Novita AI",tag:"FREE",color:"emerald",icon:"layers",kf:"novita_key",ph:"…key",signup:"https://novita.ai/settings#key-management",models:["qwen/qwen2.5-coder-32b-instruct","meta-llama/llama-3.3-70b-instruct","deepseek/deepseek-v3"],mf:"novita_model",dm:"qwen/qwen2.5-coder-32b-instruct",desc:"Free credits on signup. Runs Qwen Coder, DeepSeek V3, Llama 3.3 at affordable prices.",free_tier:"Free credits on signup"},{id:"perplexity",name:"Perplexity AI",tag:"FREE",color:"blue",icon:"search-code",kf:"perplexity_key",ph:"pplx-…",signup:"https://www.perplexity.ai/settings/api",models:["llama-3.1-sonar-small-128k-online","llama-3.1-sonar-large-128k-online","llama-3.1-8b-instruct"],mf:"perplexity_model",dm:"llama-3.1-sonar-small-128k-online",desc:"Online AI with real-time web search. Sonar model can search the web to answer coding questions.",free_tier:"Free tier available · $5 starting credit"},{id:"replicate",name:"Replicate",tag:"FREE",color:"amber",icon:"repeat",kf:"replicate_key",ph:"r8_…",signup:"https://replicate.com/account/api-tokens",models:["meta/codellama-70b-instruct","meta/llama-3.3-70b-instruct","deepseek-ai/deepseek-coder-v2"],mf:"replicate_model",dm:"meta/codellama-70b-instruct",desc:"$0.50 free credit. Thousands of open-source AI models including specialized coding models.",free_tier:"$0.50 free credit · No card for many models"},{id:"ai21",name:"AI21 Labs (Jamba)",tag:"FREE",color:"pink",icon:"wand-2",kf:"ai21_key",ph:"…key",signup:"https://studio.ai21.com/account/api-key",models:["jamba-1.5-large","jamba-1.5-mini","j2-ultra","j2-mid"],mf:"ai21_model",dm:"jamba-1.5-mini",desc:"Free tier with Jamba 1.5. Long context (256K tokens) model good for analyzing large codebases.",free_tier:"Free tier · No credit card required"},{id:"lepton",name:"Lepton AI",tag:"FREE",color:"teal",icon:"atom",kf:"lepton_key",ph:"…key",signup:"https://www.lepton.ai/login",models:["llama3-3-70b","deepseek-v3","qwen2-5-coder-32b-instruct","mistral-7b"],mf:"lepton_model",dm:"qwen2-5-coder-32b-instruct",desc:"Free credits. Runs Qwen Coder, DeepSeek V3, Llama 3.3 with fast inference.",free_tier:"Free credits on signup"},{id:"ollama",name:"Ollama (Local)",tag:"FREE",color:"gray",icon:"monitor",kf:"ollama_url",ph:"http://localhost:11434",signup:"https://ollama.ai/download",models:["codellama:13b","qwen2.5-coder:7b","deepseek-coder:6.7b","llama3.3:70b","phi3:mini"],mf:"ollama_model",dm:"qwen2.5-coder:7b",desc:"100% FREE — runs entirely on YOUR computer. No API key needed. No internet. No limits. Install Ollama app.",free_tier:"100% FREE forever — runs locally offline"}],F={border:{blue:"border-blue-500/50",blue:"border-blue-500/50",cyan:"border-cyan-500/50",violet:"border-violet-500/50",emerald:"border-emerald-500/50",amber:"border-amber-500/50",pink:"border-pink-500/50",rose:"border-rose-500/50",teal:"border-teal-500/50",red:"border-red-500/50",gray:"border-gray-500/50"},bg:{blue:"bg-blue-500/8",blue:"bg-blue-500/8",cyan:"bg-cyan-500/8",violet:"bg-violet-500/8",emerald:"bg-emerald-500/8",amber:"bg-amber-500/8",pink:"bg-pink-500/8",rose:"bg-rose-500/8",teal:"bg-teal-500/8",red:"bg-red-500/8",gray:"bg-gray-500/8"},text:{blue:"text-blue-400",blue:"text-blue-400",cyan:"text-cyan-400",violet:"text-violet-400",emerald:"text-emerald-400",amber:"text-amber-400",pink:"text-pink-400",rose:"text-rose-400",teal:"text-teal-400",red:"text-red-400",gray:"text-gray-400"},badge:{blue:"bg-blue-500/15 text-blue-300",blue:"bg-blue-500/15 text-blue-300",cyan:"bg-cyan-500/15 text-cyan-300",violet:"bg-violet-500/15 text-violet-300",emerald:"bg-emerald-500/15 text-emerald-300",amber:"bg-amber-500/15 text-amber-300",pink:"bg-pink-500/15 text-pink-300",rose:"bg-rose-500/15 text-rose-300",teal:"bg-teal-500/15 text-teal-300",red:"bg-red-500/15 text-red-300",gray:"bg-gray-500/15 text-gray-300"}};async function ua(){const e=document.getElementById("content");try{let t=function(o){const l=s===o.id,c=i[o.kf],m=i[o.mf]||o.dm;return`
        <div class="glass-soft border ${l?F.border[o.color]+" "+F.bg[o.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard" id="apc-${o.id}">
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-8 h-8 ${F.bg[o.color]} rounded-lg flex items-center justify-center shrink-0">
                <i data-lucide="${o.icon}" class="w-4 h-4 ${F.text[o.color]}"></i>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h3 class="text-xs font-black text-white">${d(o.name)}</h3>
                  <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full ${F.badge[o.color]}">${o.tag}</span>
                </div>
                <p class="text-[9px] text-emerald-400 font-bold mt-0.5 leading-tight truncate">${d(o.free_tier)}</p>
              </div>
            </div>
            <label class="flex items-center gap-1 cursor-pointer shrink-0">
              <input type="radio" name="active_provider" value="${o.id}" ${l?"checked":""} class="accent-blue-500" onchange="highlightAI('${o.id}')">
              <span class="text-[9px] font-bold ${l?F.text[o.color]:"text-gray-600"}">USE</span>
            </label>
          </div>
          <p class="text-[11px] text-gray-400 leading-relaxed">${d(o.desc)}</p>
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="lbl mb-0">${o.id==="ollama"?"Ollama Server URL":"API Key"}</label>
              <a href="${o.signup}" target="_blank" rel="noopener" class="text-[10px] font-bold ${F.text[o.color]} hover:underline flex items-center gap-0.5">
                <i data-lucide="external-link" class="w-3 h-3"></i>${o.id==="ollama"?"Install Ollama":"Get Free Key"}
              </a>
            </div>
            <div class="relative">
              <input type="${o.id==="ollama"?"text":"password"}" class="input-field pr-16 text-xs" name="${o.kf}"
                placeholder="${c?"••••"+c.slice(-4):o.ph}">
              ${c?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>'}
            </div>
          </div>
          <div>
            <label class="lbl">Model</label>
            <select class="input-field text-xs" name="${o.mf}">
              ${o.models.map(h=>`<option value="${h}" ${m===h?"selected":""}>${h}</option>`).join("")}
            </select>
          </div>
        </div>`};const{data:a}=await p.from("ai_settings").select("*").limit(1).maybeSingle(),i=a||{},s=i.active_provider||"gemini",r=ae.slice(0,10),n=ae.slice(10);e.innerHTML=`
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
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">${r.map(t).join("")}</div>
          </div>

          <div class="glass-soft border border-violet-500/15 rounded-2xl p-4">
            <h3 class="text-sm font-black text-white mb-3 flex items-center gap-2"><i data-lucide="plus-circle" class="w-4 h-4 text-violet-400"></i> Batch 2 — 10 More Free AI Providers</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">${n.map(t).join("")}</div>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="sliders" class="w-4 h-4 text-blue-400"></i> Feature Toggles</h3>
            ${[{key:"customer_ai_enabled",label:"Customer AI Chatbot",desc:"Customers can chat with AI on your website",val:i.customer_ai_enabled},{key:"product_ai_enabled",label:"AI Product Creation",desc:"AI auto-fills product descriptions",val:i.product_ai_enabled!==!1},{key:"ai_code_assist",label:"AI Code Assistant",desc:"AI helps build and edit your website code",val:i.ai_code_assist!==!1},{key:"ai_moderation",label:"AI Content Moderation",desc:"Auto-approve/reject customer reviews using AI",val:i.ai_moderation}].map(o=>`
              <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
                <div><p class="text-xs font-bold text-white">${o.label}</p><p class="text-[11px] text-gray-500">${o.desc}</p></div>
                <label class="toggle-switch"><input type="checkbox" name="${o.key}" ${o.val?"checked":""}><span class="toggle-slider"></span></label>
              </div>`).join("")}
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            💾 Save All AI Settings
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.highlightAI=function(e){ae.forEach(t=>{const a=document.getElementById("apc-"+t.id);if(!a)return;const i=t.id===e;a.className=`glass-soft border ${i?F.border[t.color]+" "+F.bg[t.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard`;const s=a.querySelector("input[type=radio] + span");s&&(s.className=`text-[9px] font-bold ${i?F.text[t.color]:"text-gray-600"}`)})};window.saveAiSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={active_provider:a.active_provider||"gemini",customer_ai_enabled:a.customer_ai_enabled==="on",product_ai_enabled:a.product_ai_enabled==="on",ai_code_assist:a.ai_code_assist==="on",ai_moderation:a.ai_moderation==="on"};ae.forEach(s=>{a[s.mf]&&(i[s.mf]=a[s.mf]);const r=(a[s.kf]||"").trim();r&&!r.startsWith("••••")&&r!==""&&(i[s.kf]=r)}),i.gemini_key&&(i.gemini_api_key=i.gemini_key),i.openai_key&&(i.openai_api_key=i.openai_key);try{const{data:s}=await p.from("ai_settings").select("id").limit(1).maybeSingle();let r;if(s?.id?{error:r}=await p.from("ai_settings").update(i).eq("id",s.id):{error:r}=await p.from("ai_settings").insert(i),r){u("Save failed: "+r.message,"error"),console.error("[AI Save]",r);return}await S.reload(),u("✅ AI settings saved! Keys are active and auto-switch is ON.","success"),setTimeout(()=>ua(),600)}catch(s){u("Unexpected error: "+s.message,"error"),console.error("[AI Save]",s)}};const je="kco_ai_cooldowns",es=60*1e3,S={_cfg:null,async reload(){const{data:e,error:t}=await p.from("ai_settings").select("*").limit(1).maybeSingle();if(t){console.warn("[aiClient] Could not load settings:",t.message),this._cfg={};return}const a=e||{};!a.openai_key&&a.openai_api_key&&(a.openai_key=a.openai_api_key),!a.gemini_key&&a.gemini_api_key&&(a.gemini_key=a.gemini_api_key),this._cfg=a},async getConfig(){return this._cfg||await this.reload(),this._cfg},async getOrderedProviders(){const e=await this.getConfig(),t=e.active_provider||"gemini",a=this._getCooldowns(),i=Date.now(),s=ae.filter(l=>e[l.kf]&&e[l.kf].trim()),r=s.filter(l=>l.id===t),n=s.filter(l=>l.id!==t);return[...r,...n].sort((l,c)=>{const m=(a[l.id]||0)>i?1:0,h=(a[c.id]||0)>i?1:0;return m-h})},_getCooldowns(){try{return JSON.parse(localStorage.getItem(je)||"{}")}catch{return{}}},_setCooldown(e){const t=this._getCooldowns();t[e]=Date.now()+es,localStorage.setItem(je,JSON.stringify(t))},_clearCooldown(e){const t=this._getCooldowns();delete t[e],localStorage.setItem(je,JSON.stringify(t))},_buildRequest(e,t,a,i){const s=t[e.kf],r=t[e.mf]||e.dm;switch(e.id){case"gemini":{const n=`https://generativelanguage.googleapis.com/v1beta/models/${r}:generateContent?key=${s}`,o={contents:a.map(l=>({role:l.role==="assistant"?"model":"user",parts:[{text:l.content}]}))};return{url:n,method:"POST",headers:{"Content-Type":"application/json"},body:o,parse:l=>l.candidates?.[0]?.content?.parts?.[0]?.text||""}}case"groq":{const n="https://api.groq.com/openai/v1/chat/completions",o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:o,parse:l=>l.choices?.[0]?.message?.content||""}}case"deepseek":{const n="https://api.deepseek.com/v1/chat/completions",o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:o,parse:l=>l.choices?.[0]?.message?.content||""}}case"mistral":{const n="https://api.mistral.ai/v1/chat/completions",o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:o,parse:l=>l.choices?.[0]?.message?.content||""}}case"cohere":{const n="https://api.cohere.com/v2/chat",o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:o,parse:l=>l.message?.content?.[0]?.text||l.text||""}}case"huggingface":{const n=`https://api-inference.huggingface.co/models/${r}/v1/chat/completions`,o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:o,parse:l=>l.choices?.[0]?.message?.content||""}}case"together":{const n="https://api.together.xyz/v1/chat/completions",o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:o,parse:l=>l.choices?.[0]?.message?.content||""}}case"openrouter":{const n="https://openrouter.ai/api/v1/chat/completions",o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`,"HTTP-Referer":window.location.origin},body:o,parse:l=>l.choices?.[0]?.message?.content||""}}case"cerebras":{const n="https://api.cerebras.ai/v1/chat/completions",o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:o,parse:l=>l.choices?.[0]?.message?.content||""}}case"fireworks":{const n="https://api.fireworks.ai/inference/v1/chat/completions",o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:o,parse:l=>l.choices?.[0]?.message?.content||""}}case"github":{const n="https://models.inference.ai.azure.com/chat/completions",o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:o,parse:l=>l.choices?.[0]?.message?.content||""}}case"cloudflare":{const[n,o]=(s||"").split("|"),l=`https://api.cloudflare.com/client/v4/accounts/${n}/ai/run/${r}`,c={messages:a};return{url:l,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o||s}`},body:c,parse:m=>m.result?.response||""}}case"sambanova":{const n="https://api.sambanova.ai/v1/chat/completions",o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:o,parse:l=>l.choices?.[0]?.message?.content||""}}case"hyperbolic":{const n="https://api.hyperbolic.xyz/v1/chat/completions",o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:o,parse:l=>l.choices?.[0]?.message?.content||""}}case"novita":{const n="https://api.novita.ai/v3/openai/chat/completions",o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:o,parse:l=>l.choices?.[0]?.message?.content||""}}case"perplexity":{const n="https://api.perplexity.ai/chat/completions",o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:o,parse:l=>l.choices?.[0]?.message?.content||""}}case"replicate":{const n="https://openai-compat.replicate.com/v1/chat/completions",o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:o,parse:l=>l.choices?.[0]?.message?.content||""}}case"ai21":{const n="https://api.ai21.com/studio/v1/chat/completions",o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:o,parse:l=>l.choices?.[0]?.message?.content||""}}case"lepton":{const n=`https://${r.replace(/[^a-z0-9-]/g,"")}.lepton.run/api/v1/chat/completions`,o={model:r,messages:a,max_tokens:i};return{url:n,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:o,parse:l=>l.choices?.[0]?.message?.content||""}}case"ollama":return{url:`${(s||"http://localhost:11434").replace(/\/$/,"")}/api/chat`,method:"POST",headers:{"Content-Type":"application/json"},body:{model:r,messages:a,stream:!1},parse:c=>c.message?.content||""};default:return null}},async chat(e,{maxTokens:t=2e3,onProviderSwitch:a=null}={}){const i=await this.getOrderedProviders(),s=await this.getConfig(),r=this._getCooldowns(),n=Date.now();if(i.length===0)throw new Error("No AI providers configured. Go to AI Settings and add at least one API key.");let o=null;for(const l of i){if((r[l.id]||0)>n){const c=Math.ceil(((r[l.id]||0)-n)/1e3);console.log(`[AI] Skipping ${l.name} — rate limited for ${c}s more`);continue}if(l.id==="ollama"){const c=this._buildRequest(l,s,e,t);if(!c)continue;try{a&&a(l.name);const m=await fetch(c.url,{method:c.method,headers:c.headers,body:JSON.stringify(c.body),signal:AbortSignal.timeout(6e4)});if(m.status===429||m.status===503){this._setCooldown(l.id),console.warn(`[AI] ${l.name} rate limited (${m.status}), switching to next provider…`),o=new Error(`${l.name} rate limited`);continue}if(!m.ok){const f=await m.text().catch(()=>"");o=new Error(`${l.name} error ${m.status}: ${f.slice(0,100)}`),console.warn(`[AI] ${l.name} failed:`,o.message);continue}const h=await m.json(),b=c.parse(h);if(!b){o=new Error(`${l.name} returned empty response`);continue}return this._clearCooldown(l.id),console.log(`[AI] ✓ Response from ${l.name}`),{text:b,provider:l.name,model:s[l.mf]||l.dm}}catch(m){m.name==="TimeoutError"?(this._setCooldown(l.id),o=new Error(`${l.name} timed out`)):o=m,console.warn(`[AI] ${l.name} exception:`,m.message)}continue}try{a&&a(l.name);const c=e[e.length-1],m={action:"chat",message:String(c?.content||"").trim(),history:e.slice(0,-1).map(g=>({role:g.role,content:String(g.content||"")})),provider_override:l.id,max_tokens:t},h=await this._callEdge(m);if(h&&h.response)return this._clearCooldown(l.id),console.log(`[AI] ✓ Response from ${l.name} (via edge function)`),{text:h.response,provider:l.name,model:h.model||s[l.mf]||l.dm};const b=String(h?.error||"empty response"),f=b.toLowerCase();f.includes("429")||f.includes("rate limit")||f.includes("quota")?(this._setCooldown(l.id),console.warn(`[AI] ${l.name} rate limited (${b.slice(0,80)}), switching to next provider…`),o=new Error(`${l.name} rate limited`)):(o=new Error(`${l.name} error: ${b.slice(0,200)}`),console.warn(`[AI] ${l.name} failed:`,o.message))}catch(c){c.name==="TimeoutError"?(this._setCooldown(l.id),o=new Error(`${l.name} timed out`)):o=c,console.warn(`[AI] ${l.name} exception:`,c.message)}}throw new Error(o?.message||"All AI providers failed or are rate limited. Add more API keys in AI Settings.")},async prompt(e,t={}){return this.chat([{role:"user",content:e}],t)},async getStatus(){const e=await this.getConfig(),t=this._getCooldowns(),a=Date.now();return ae.map(i=>({id:i.id,name:i.name,color:i.color,hasKey:!!e[i.kf]?.trim(),isActive:e.active_provider===i.id,cooldownUntil:t[i.id]||0,isCoolingDown:(t[i.id]||0)>a,remainingSec:Math.max(0,Math.ceil(((t[i.id]||0)-a)/1e3))}))},async analyzeImages(e,t={}){const a=`You are the AI listing expert for the Weverse Online Shop marketplace. Look carefully at the uploaded product photo(s) and identify exactly what the product is.

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
- Respond with valid JSON only.`,i=[];for(const s of(e||[]).slice(0,4)){const r=await this._fetchImageAsDataUrl(s);r&&i.push(r)}if(!i.length)throw new Error("Could not read the uploaded images.");try{const s=await this._callEdge({action:"vision",images:i,prompt:a,max_tokens:4096});if(s&&s.success&&s.text){const r=ce(s.text);if(r)return{...r,_aiProvider:s.provider,_aiModel:s.model};throw new Error("The AI returned no valid analysis for these images.")}throw new Error(s&&s.error||"Vision service unavailable.")}catch{try{const o=await this._tryLocalOllamaVision(a,i);if(o)return o}catch{}const r=`

(No image analysis is available right now. The product is currently categorized as "${t.category||"Unknown"}"${t.existingTitle?` and titled "${t.existingTitle}"`:""}. Base your content on that plus general knowledge of typical products in this category. Do not invent specific specs or prices you cannot know.)`,n=await this.chat([{role:"user",content:a+r}],{maxTokens:4e3});return ce(n.text)}},async _callEdge(e){let t="";try{t=(await p.auth.getSession())?.data?.session?.access_token||""}catch{}return await(await fetch(ti,{method:"POST",headers:{"Content-Type":"application/json",...t?{Authorization:`Bearer ${t}`}:{}},body:JSON.stringify(e),signal:AbortSignal.timeout(12e4)})).json().catch(()=>({}))},async _fetchImageAsDataUrl(e){try{const t=await fetch(e).then(a=>a.blob());return!t||!t.size?null:t.size<18e5?`data:${t.type||"image/jpeg"};base64,${await St(t)}`:await this._downscaleImage(t,1200)}catch{return null}},async _downscaleImage(e,t){const a=URL.createObjectURL(e);try{const i=new Image;await new Promise((l,c)=>{i.onload=l,i.onerror=c,i.src=a});const s=Math.min(1,t/Math.max(i.width,i.height)),r=Math.max(1,Math.round(i.width*s)),n=Math.max(1,Math.round(i.height*s)),o=document.createElement("canvas");return o.width=r,o.height=n,o.getContext("2d").drawImage(i,0,0,r,n),o.toDataURL("image/jpeg",.82)}finally{URL.revokeObjectURL(a)}},async _tryLocalOllamaVision(e,t){const a=await this.getConfig(),i=String(a.ollama_url||"http://localhost:11434").replace(/\/$/,""),s=[a.ollama_model,"llava","llama3.2-vision","moondream"].filter(Boolean);for(const r of s)try{const n=await fetch(`${i}/api/generate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:r,prompt:e,images:t.map(m=>String(m).split(",")[1]||m),stream:!1,options:{temperature:.3,num_predict:4096}}),signal:AbortSignal.timeout(12e4)});if(!n.ok)continue;const o=await n.json(),l=String(o?.response||"").trim();if(!l)continue;const c=ce(l);return c?{...c,_aiProvider:"Ollama (Local)",_aiModel:r}:{description:l,_aiProvider:"Ollama (Local)",_aiModel:r}}catch{}return null},async generateImages(e,t,a=1){let i=null;if(t)try{i=await this._fetchImageAsDataUrl(t)}catch{}try{const s=await this._callEdge({action:"generate_images",prompt:e,reference_url:i,count:a||1});if(s&&s.success&&Array.isArray(s.images)&&s.images.length)return s.images;throw new Error(s&&s.error||"Image generation service unavailable.")}catch(s){try{const r=await this._tryLocalComfyUI(e);if(r&&r.length)return r}catch{}try{const r=await this._tryLocalOllamaImage(e);if(r&&r.length)return r}catch{}throw new Error(`AI image generation failed: ${s.message||s}. Add a Google Gemini API key in AI Settings, or configure local ComfyUI/Ollama.`)}},async _tryLocalComfyUI(e){const t=await this.getConfig(),a=String(t.comfyui_workflow||"").trim();if(!a)return null;let i;try{i=JSON.parse(a)}catch{return null}const s=String(t.comfyui_url||"http://127.0.0.1:8188").replace(/\/$/,""),r=String(t.comfyui_input_node||"image");String(t.comfyui_output_node||"image");const n=i[r]||Object.values(i)[0];if(!n)return null;n.inputs={...n.inputs||{},text:e};const o=`web-${Date.now()}`,l=await fetch(`${s}/prompt`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:i,client_id:o}),signal:AbortSignal.timeout(6e4)});if(!l.ok)return null;const{prompt_id:c}=await l.json();if(!c)return null;const m=Date.now()+18e4;for(;Date.now()<m;){await new Promise(h=>setTimeout(h,1e3));try{const h=await fetch(`${s}/history/${c}`,{signal:AbortSignal.timeout(1e4)});if(!h.ok)continue;const f=(await h.json())[c];if(!f)continue;const v=Object.values(f.outputs||{}).flatMap($=>Array.isArray($.images)?$.images:[]);if(v.length)return Promise.all(v.slice(0,4).map(async $=>{const H=await fetch(`${s}/view?filename=${encodeURIComponent($.filename)}&subfolder=${encodeURIComponent($.subfolder||"")}&type=${encodeURIComponent($.type||"output")}`,{signal:AbortSignal.timeout(3e4)});if(!H.ok)return null;const V=await H.blob();return await St(V).then(x=>`data:${V.type||"image/png"};base64,${x}`)})).then($=>$.filter(Boolean))}catch{}}return null},async _tryLocalOllamaImage(e){const t=await this.getConfig(),a=String(t.ollama_url||"http://localhost:11434").replace(/\/$/,""),i=[t.ollama_image_model||t.ollama_model,"llava"].filter(Boolean);for(const s of i)try{const r=await fetch(`${a}/api/generate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:s,prompt:e,stream:!1,options:{num_predict:512}}),signal:AbortSignal.timeout(12e4)});if(!r.ok)continue;const n=await r.json(),o=String(n?.images?.[0]||"").trim();if(o)return[`data:image/png;base64,${o}`]}catch{}return null}};function St(e){return new Promise(t=>{const a=new FileReader;a.onload=()=>{const i=a.result;if(typeof i=="string"){const s=i.indexOf(",");t(s>=0?i.slice(s+1):i)}else t("")},a.onerror=()=>t(""),a.readAsDataURL(e)})}window.aiClient=S;window.showAiStatusModal=async function(){const e=await S.getStatus(),t=e.filter(a=>a.hasKey);B(`
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
              <span class="text-xs font-bold text-white flex-1">${d(a.name)}</span>
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
    </div>`),window.lucide&&lucide.createIcons()};window.testAiCall=async function(){const e=document.getElementById("ai-test-input")?.value?.trim();if(!e)return;const t=document.getElementById("ai-test-output");t.classList.remove("hidden"),t.textContent="⏳ Trying providers…";try{const a=await S.prompt(e,{onProviderSwitch:i=>{t.textContent=`⚡ Using: ${i}…`}});t.textContent=`✓ [${a.provider} · ${a.model}]

${a.text}`}catch(a){t.textContent=`❌ ${a.message}`}};let y=null;const pa=[{key:"rewrite",mode:"edit",label:"Rewrite Title & Description",icon:"pen-line",prompt:"Rewrite the title and description to be more professional, compelling, and conversion-focused. Keep all product facts accurate. The title must be a real, professional product name that matches the item and its category — never a generic placeholder."},{key:"name",mode:"edit",label:"Professional Name",icon:"badge-check",prompt:'Give this product a real, professional product name that accurately matches what it actually is and its category. Never use placeholder names like "AI Product", "AI Curated Product", or anything similar.'},{key:"price",mode:"edit",label:"Optimize Price & Stock",icon:"dollar-sign",prompt:"Suggest a competitive, realistic price and an optimal stock quantity for this product based on the category and current data."},{key:"category",mode:"edit",label:"Fix Category & Specs",icon:"tags",prompt:"Fix the category, subcategory, and specifications so they accurately describe this product. Use the category list if possible."},{key:"images",mode:"edit",label:"Clean Up Duplicate/Bad Images",icon:"images",prompt:"Identify duplicate, broken, or low-quality images among the CURRENT images list only, and list their exact URLs in images_to_remove. Do not invent any image URLs."},{key:"scan",mode:"scan",label:"Scan My Showroom",icon:"scan-search",prompt:"Scan the showroom and check this product against the other products so everything matches."},{key:"gen",mode:"gen",label:"Generate an Image",icon:"wand-sparkles",prompt:"Generate a new professional product image for this product."}];function ts(e){return[...window._productsData||[],...window._propertiesData||[]].find(a=>a.property_id===e)||null}function ma(e){const t=["property_id","listing_type","category","subcategory","title","description","price","currency","brand","color","size","condition","availability_status","stock_quantity","features","tags","highlights","seo_keywords","specifications","bedrooms","bathrooms","city","state","country","images"],a={};for(const i of t)i in e&&(a[i]=e[i]);return a}function ce(e){if(!e)return null;let t=String(e).trim();const a=t.match(/```(?:json)?\s*([\s\S]*?)```/i);a&&(t=a[1].trim());const i=t.indexOf("{"),s=t.lastIndexOf("}");if(i===-1||s===-1||s<=i)return null;const r=t.slice(i,s+1);try{return JSON.parse(r)}catch{return null}}function At(e){return Array.isArray(e)?e.length?e.join(" · "):"(empty)":e&&typeof e=="object"?JSON.stringify(e):e==null||e===""?"(empty)":String(e)}window.openProductAiAssistant=async function(e,t="products"){let a=ts(e);if(!a)try{const{data:i}=await p.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();i&&(a=i)}catch{}if(!a){u("Product not found.","error");return}y={pid:e,from:t==="properties"?"properties":"products",product:a,busy:!1,suggestions:null,approved:new Set,removedImages:new Set,addedImages:[],instruction:"",quickMode:"",chatImages:[],generatedImages:[],lastGenPrompt:"",lastGenReference:null,messages:[{role:"assistant",welcome:!0,content:`I'm your AI product manager for ${e}. We can chat about anything — or I can work on this card for you: rewrite copy, fix the price or category, clean images, scan the showroom to make sure it matches the other products, generate brand-new images, and look at any photos you attach. What do you need?`}]},A()};function A(){const e=y;if(!e)return;const t=e.product,a=t.images&&t.images[0]?t.images[0]:"/fallback.svg",i=e.busy===!0,r=(Array.isArray(e.messages)?e.messages:[]).map(f=>f.role==="user"?`
    <div class="flex justify-end">
      <div class="max-w-[85%] bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl rounded-tr-md px-5 py-3.5 text-[1.02rem] leading-relaxed whitespace-pre-wrap break-words shadow-lg shadow-blue-600/20">
        ${f.images&&f.images.length?`<div class="flex flex-wrap gap-2 mb-2">${f.images.map(g=>`<img src="${d(g)}" class="w-16 h-16 rounded-xl object-cover border border-white/20">`).join("")}</div>`:""}
        ${d(f.content)}
      </div>
    </div>`:`
    <div class="flex gap-3 items-start">
      <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-700 flex items-center justify-center shrink-0 shadow-md mt-0.5">
        <i data-lucide="sparkles" class="w-6 h-6 text-white"></i>
      </div>
      <div class="glass border border-fuchsia-500/20 rounded-3xl rounded-tl-md px-5 py-3.5 min-w-0 max-w-[85%]">
        <div class="text-[1.02rem] leading-relaxed text-gray-100 whitespace-pre-wrap break-words">${d(f.content)}</div>
        ${f.generated&&f.generated.length?`
          <div class="flex flex-wrap gap-2.5 mt-3">
            ${f.generated.map((g,v)=>`
              <div class="relative">
                <img src="${d(g)}" class="w-40 h-40 rounded-2xl object-cover border border-fuchsia-500/40 shadow-lg" onerror="this.src='/fallback.svg'">
                <button onclick="productAiUseGeneratedImage(${v})" class="absolute bottom-1.5 right-1.5 px-2 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-black shadow transition">Use on card</button>
                <button onclick="productAiReplaceMainImage(${v})" class="absolute top-1.5 right-1.5 px-2 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[9px] font-black shadow transition" title="Replace the current MAIN image with this one">Set as main</button>
              </div>`).join("")}
          </div>
          <div class="flex items-center gap-2 mt-2.5">
            <button onclick="productAiRegenerateImage()" class="btn-press px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-fuchsia-500/10 text-fuchsia-200 hover:bg-fuchsia-500/25 transition flex items-center gap-1"><i data-lucide="refresh-cw" class="w-3 h-3"></i> Regenerate</button>
            <button onclick="productAiUseAllGeneratedImages()" class="btn-press px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25 transition flex items-center gap-1"><i data-lucide="images" class="w-3 h-3"></i> Add all to card</button>
          </div>`:""}
        ${f.provider?`<p class="text-[9px] text-gray-600 mt-2">${d(f.provider)}</p>`:""}
      </div>
    </div>`).join(""),n=i?`
    <div class="flex gap-3 items-start">
      <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-700 flex items-center justify-center shrink-0 shadow-md mt-0.5">
        <i data-lucide="sparkles" class="w-6 h-6 text-white"></i>
      </div>
      <div class="glass border border-fuchsia-500/20 rounded-3xl rounded-tl-md px-5 py-4 flex items-center gap-1.5">
        <span class="typing-dot w-2.5 h-2.5 bg-fuchsia-400 rounded-full"></span>
        <span class="typing-dot w-2.5 h-2.5 bg-fuchsia-400 rounded-full"></span>
        <span class="typing-dot w-2.5 h-2.5 bg-fuchsia-400 rounded-full"></span>
      </div>
    </div>`:"",o=pa.map(f=>`
    <button onclick="productAiQuickAction('${f.key}')" class="btn-press px-3 py-2 rounded-xl text-[11px] font-bold bg-fuchsia-500/10 text-fuchsia-200 hover:bg-fuchsia-500/20 border border-fuchsia-500/15 transition flex items-center gap-1.5 shrink-0">
      <i data-lucide="${f.icon}" class="w-3.5 h-3.5"></i> ${f.label}
    </button>`).join(""),c=(Array.isArray(e.chatImages)?e.chatImages:[]).map((f,g)=>`
    <div class="relative w-14 h-14 rounded-xl overflow-hidden border border-blue-500/40 shrink-0">
      <img src="${d(f)}" class="w-full h-full object-cover">
      <button onclick="productAiRemoveChatImage(${g})" class="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-red-500 text-white text-xs leading-none flex items-center justify-center shadow" title="Remove image">✕</button>
    </div>`).join(""),m=e.suggestions?is():"",h=as();B(`
    <div class="fixed inset-0 z-[100] bg-[#030712]/92 backdrop-blur-sm flex flex-col" onclick="if(event.target===this)closeModal()">
      <div class="max-w-4xl mx-auto w-full h-full flex flex-col">
        <div class="px-3 sm:px-5 h-16 shrink-0 flex items-center justify-between gap-3 border-b border-fuchsia-500/15 bg-blue-950/40">
          <div class="flex items-center gap-3 min-w-0">
            <button onclick="closeModal()" class="btn-press w-11 h-11 rounded-2xl bg-blue-950/60 border border-blue-500/25 flex items-center justify-center shrink-0" title="Back to products">
              <i data-lucide="chevron-left" class="w-6 h-6 text-blue-300"></i>
            </button>
            <img src="${d(a)}" class="w-11 h-11 rounded-2xl object-cover border border-fuchsia-500/30" onerror="this.src='/fallback.svg'">
            <div class="min-w-0">
              <span class="text-lg font-black text-white block leading-tight truncate">${d(t.title||"Untitled")}</span>
              <span class="text-[11px] font-mono text-gray-500 block truncate">${d(t.property_id)} · ${d(t.category||"Uncategorized")}</span>
            </div>
          </div>
          <span class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/25 hidden sm:inline-flex shrink-0"><i data-lucide="sparkles" class="w-3 h-3"></i> AI Assistant</span>
        </div>

        <div id="product-ai-chat-scroll" class="flex-1 min-h-0 overflow-y-auto scrollbar-thin px-3 sm:px-5 py-4">
          <div class="space-y-4">
            <div class="glass-soft border border-blue-500/15 rounded-2xl p-4">
              <div class="flex flex-wrap gap-1.5 mb-3">${o}</div>
              ${h}
            </div>
            ${r}
            ${n}
            ${m}
          </div>
        </div>

        <div class="shrink-0 px-3 sm:px-5 pb-3 pt-2 bg-gradient-to-t from-[#070b16] via-[#070b16]/95 to-transparent">
          ${c?`<div class="flex flex-wrap gap-2.5 pb-2">${c}</div>`:""}
          <div class="glass border border-fuchsia-500/25 rounded-[1.6rem] p-2 flex items-end gap-1.5 shadow-2xl shadow-fuchsia-950/40">
            <button onclick="productAiChatAttach()" class="btn-press w-12 h-12 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/30 hover:bg-fuchsia-500/25 flex items-center justify-center shrink-0" title="Attach image(s)">
              <i data-lucide="image-plus" class="w-6 h-6 text-fuchsia-300"></i>
            </button>
            <textarea id="product-ai-input" rows="1" class="flex-1 bg-transparent text-lg text-white placeholder-gray-500 resize-none outline-none px-1 py-3 max-h-40 leading-relaxed scrollbar-thin" placeholder="Chat or ask the AI to fix this product…"></textarea>
            <button id="product-ai-send-btn" onclick="runProductAiInstruction()" class="btn-press w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-700 hover:from-fuchsia-400 hover:to-purple-600 text-white flex items-center justify-center shrink-0 transition shadow-lg shadow-fuchsia-600/30 ${i?"opacity-40 pointer-events-none":""}" title="Send">
              <i data-lucide="send" class="w-6 h-6"></i>
            </button>
          </div>
          <div class="flex items-center justify-between gap-3 pt-2.5">
            <p class="text-[11px] text-gray-500 min-w-0">Full Gemini chat. It can fix this card, scan the showroom, generate images, and manage this product's photos — you have full permission over everything here.</p>
            ${e.suggestions?'<button onclick="applyProductAiChanges()" class="btn-press px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-sm font-black rounded-xl transition flex items-center gap-1.5 shrink-0 shadow-lg shadow-emerald-600/30"><i data-lucide="database" class="w-4 h-4"></i> Save Approved</button>':""}
          </div>
        </div>
      </div>
      <input id="product-ai-chat-image" type="file" accept="image/*" multiple class="hidden" onchange="productAiChatImagePicked(this)">
    </div>`);const b=document.getElementById("product-ai-input");b&&(b.value=e.instruction||"",b.addEventListener("input",()=>{y&&(y.instruction=b.value)}),b.addEventListener("keydown",f=>{f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),runProductAiInstruction())})),window.lucide&&lucide.createIcons(),ga()}function ga(){const e=document.getElementById("product-ai-chat-scroll");e&&requestAnimationFrame(()=>{e.scrollTo({top:e.scrollHeight,behavior:"smooth"})})}window.productAiChatAttach=function(){document.getElementById("product-ai-chat-image")?.click()};window.productAiChatImagePicked=async function(e){if(!y||!e||!e.files||!e.files.length)return;const t=[...e.files].slice(0,4);let a=0;for(const i of t){if(!i.type.startsWith("image/"))continue;const s=await ba(i);s&&(y.chatImages.push(s),a+=1)}e.value="",a&&u(`${a} photo(s) attached. Send any message and the AI will look at them right away.`,"info"),A()};window.productAiRemoveChatImage=function(e){y&&(y.chatImages.splice(e,1),A())};function ba(e){return new Promise(t=>{const a=new FileReader;a.onload=()=>t(String(a.result||"")),a.onerror=()=>t(""),a.readAsDataURL(e)})}function as(){const e=y;if(!e)return"";const t=Array.isArray(e.product.images)?e.product.images:[],a=[...t,...e.addedImages],i={};t.forEach(n=>{i[n]=(i[n]||0)+1});const s=Object.keys(i).filter(n=>i[n]>1),r=a.map((n,o)=>{const l=o<t.length,c=l&&s.includes(n);return`
      <div class="relative group w-20 h-20 rounded-lg overflow-hidden border ${c?"border-amber-400/70":"border-white/10"}">
        <img src="${d(n)}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'">
        ${c?'<span class="absolute top-0.5 left-0.5 text-[8px] font-black px-1 rounded bg-amber-400 text-[#111827]">DUP</span>':o===0?'<span class="absolute top-0.5 left-0.5 text-[8px] font-black px-1 rounded bg-blue-500 text-white">MAIN</span>':""}
        ${l?`<button onclick="productAiRemoveImageNow(${o})" class="absolute top-0.5 right-0.5 w-5 h-5 rounded-full bg-black/70 hover:bg-red-600 text-white text-[10px] flex items-center justify-center" title="Remove this image from the card now">✕</button>`:""}
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
      ${r||'<p class="text-xs text-gray-500">No images yet.</p>'}
      <p class="text-[10px] text-gray-500 mt-2">Tap ✕ to delete an image, upload new ones, or generate with AI below — every image change is saved to the card immediately. The MAIN badge is the card cover; use "Set as main" on a generated image to replace it.</p>
    </div>`}function is(){const e=y;if(!e)return"";if(!e.suggestions)return`
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-4">
        <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="eye" class="w-4 h-4 text-blue-400"></i> Preview Changes</p>
        <p class="text-[11px] text-gray-500 mt-2">No suggestions yet. Use a quick action above or type an instruction, then review and approve changes before saving.</p>
      </div>`;const t=[],a={title:"Title",description:"Description",price:"Price",stock_quantity:"Stock",category:"Category",subcategory:"Subcategory",brand:"Brand",availability_status:"Availability",features:"Features",tags:"Tags",highlights:"Highlights",seo_keywords:"SEO Keywords"};for(const n of Object.keys(e.suggestions)){if(n==="images_to_remove"||n==="images_to_add"||n==="summary")continue;const o=At(e.product[n]),l=At(e.suggestions[n]);if(o===l)continue;const c=e.approved.has(n)?"checked":"";t.push(`
      <div class="flex items-start gap-3 p-3 rounded-xl bg-white/5 border ${c?"border-emerald-500/25":"border-white/10"}">
        <input type="checkbox" class="mt-0.5 accent-emerald-500" ${c} onchange="productAiToggleApproved('${n}', this.checked)">
        <div class="min-w-0 flex-1">
          <p class="text-[10px] font-black uppercase tracking-wide text-gray-400">${d(a[n]||n)}</p>
          <p class="text-[11px] text-gray-500 line-through decoration-red-400/60 mt-0.5 break-words">${d(o)}</p>
          <p class="text-[11px] text-emerald-300 font-semibold mt-1 break-words">${d(l)}</p>
        </div>
      </div>`)}const i=Array.isArray(e.product.images)?e.product.images:[],s=Array.isArray(e.suggestions.images_to_remove)?e.suggestions.images_to_remove.filter(n=>i.includes(n)):[],r=[...new Set([...e.removedImages,...s])];if(r.length){const n=e.approved.has("images_to_remove")?"checked":"";t.push(`
      <div class="flex items-start gap-3 p-3 rounded-xl bg-white/5 border ${n?"border-emerald-500/25":"border-white/10"}">
        <input type="checkbox" class="mt-0.5 accent-emerald-500" ${n} onchange="productAiToggleApproved('images_to_remove', this.checked)">
        <div class="min-w-0 flex-1">
          <p class="text-[10px] font-black uppercase tracking-wide text-gray-400">Remove ${r.length} image${r.length>1?"s":""}</p>
          <div class="flex flex-wrap gap-1.5 mt-1.5">${r.slice(0,12).map(o=>`<img src="${d(o)}" class="w-10 h-10 rounded-md object-cover border border-red-500/40" onerror="this.src='/fallback.svg'">`).join("")}</div>
        </div>
      </div>`)}return e.addedImages.length&&t.push(`
      <div class="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-emerald-500/25">
        <input type="checkbox" class="mt-0.5 accent-emerald-500" checked disabled>
        <div class="min-w-0 flex-1">
          <p class="text-[10px] font-black uppercase tracking-wide text-gray-400">Add ${e.addedImages.length} uploaded image${e.addedImages.length>1?"s":""}</p>
          <div class="flex flex-wrap gap-1.5 mt-1.5">${e.addedImages.map(n=>`<img src="${d(n)}" class="w-10 h-10 rounded-md object-cover border border-emerald-500/40" onerror="this.src='/fallback.svg'">`).join("")}</div>
        </div>
      </div>`),e.suggestions.summary&&t.unshift(`<p class="text-[11px] text-fuchsia-300 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-xl p-3">${d(e.suggestions.summary)}</p>`),t.length?`
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
      </div>`}window.productAiSyncInput=function(e){y&&(y.instruction=e)};window.productAiQuickAction=function(e){const t=pa.find(a=>a.key===e);!t||!y||(y.instruction=t.prompt,y.quickLabel=t.label,y.quickMode=t.mode||"edit",runProductAiInstruction())};window.productAiToggleApproved=function(e,t){y&&(t?y.approved.add(e):y.approved.delete(e),A())};window.productAiApproveAll=function(){if(!(!y||!y.suggestions)){for(const e of Object.keys(y.suggestions))y.approved.add(e);y.removedImages.size&&y.approved.add("images_to_remove"),A()}};window.productAiToggleRemoveImage=function(e){if(!y)return;const t=Array.isArray(y.product.images)?y.product.images:[],i=[...t,...y.addedImages][e];i&&(e<t.length?y.removedImages.has(i)?y.removedImages.delete(i):y.removedImages.add(i):y.addedImages=y.addedImages.filter(s=>s!==i),A())};window.productAiDetectDuplicates=async function(){if(!y)return;const e=y,t=Array.isArray(e.product.images)?e.product.images:[],a={};t.forEach(s=>{a[s]=(a[s]||0)+1});const i=t.filter((s,r)=>!(a[s]>1&&t.indexOf(s)!==r));if(i.length===t.length){u("No duplicate images found.","info");return}await ne(i,`Removed ${t.length-i.length} duplicate image(s) from the card.`)};window.productAiUploadImages=async function(e){if(!y||!e||!e.files||!e.files.length)return;const t=y,a=[...e.files];t.busy=!0,A();const s=[...Array.isArray(t.product.images)?t.product.images:[]];let r=0;for(const n of a){if(!n.type.startsWith("image/"))continue;const o=await me(n);o&&(s.push(o),r+=1)}if(e.value="",t.busy=!1,r){await ne(s,`${r} image(s) uploaded to the card.`);return}u("Upload failed.","error"),A()};function ss(e,t){const a=String(e).toLowerCase();if(/\b(generate|create|make|draw|produce|imagine)\b[\s\S]*\b(image|photo|picture|logo|thumbnail|background|banner)\b/.test(a)||/\b(change|swap|replace|edit|remove)\b[\s\S]*\b(background|color|colour)\b/.test(a))return"gen";if(/\bshowroom\b/.test(a)||/\bcompare\b[\s\S]*\b(showroom|product|other|card)\b/.test(a)||/\bscan\b[\s\S]*\b(showroom|product|card|listing|shop|match)\b/.test(a)||/\bmatch(es|ing)?\b/.test(a))return"scan";const i=/\b(rewrite|rephrase|update|fix|improve|optimize|change|make|rename|retitle|set|clean up|cleanup|remove|delete|add)\b/,s=/\b(title|description|price|stock|category|subcategory|brand|name|images?|features|tags|highlights|seo)\b/;return i.test(a)&&s.test(a)?"edit":t?"vision":"chat"}function rs(){const e=y;return(Array.isArray(e.messages)?e.messages:[]).slice(0,-1).filter(a=>!a.welcome).map(a=>{const i=a.images&&a.images.length?` [Sent ${a.images.length} photo(s)]`:"",s=`${a.content||""}${i}`.trim();return{role:a.role==="user"?"user":"assistant",content:s}}).filter(a=>a.content)}window.runProductAiInstruction=async function(){const e=y;if(!e||e.busy)return;const t=(e.instruction||"").trim(),a=e.quickLabel||"";e.quickLabel="";const i=e.quickMode||"";e.quickMode="";const s=(e.chatImages||[]).length>0;if(!t&&!a&&!i&&!s)return;const r=t||"Improve this product listing professionally.",n=a||t||(s?"Look at these photos and tell me what you see.":"Improve this product listing professionally."),o=[...e.chatImages||[]];e.chatImages=[],e.instruction="",e.messages.push({role:"user",content:n,images:o}),e.busy=!0,A();const l=i||ss(r,s);try{l==="gen"?await ha(r,o):l==="scan"?await cs():l==="edit"?await os(r,o):l==="vision"?await ls(r,o):await ns(r),ga()}catch(c){e.messages.push({role:"assistant",content:`⚠️ ${c.message}`}),u(`AI error: ${c.message}`,"error")}finally{e.busy=!1,A()}};async function os(e,t){const a=y,i=us(a,e);let s="";if(t&&t.length){const o=await S._callEdge({action:"vision",images:t.slice(0,4),prompt:i,max_tokens:4096});if(s=o&&o.text?String(o.text):"",!s)throw new Error(o&&o.error||"The AI could not read the attached photos.")}else s=(await S.prompt(i,{maxTokens:4e3,onProviderSwitch:()=>{}})).text;const r=ce(s);if(!r)throw new Error("The AI did not return valid JSON suggestions.");a.suggestions=r,a.approved=new Set(Object.keys(r)),a.approved.add("images_to_remove");const n=(r.summary||"Changes are ready for this product.").trim();a.messages.push({role:"assistant",content:`${n}

✅ Changes are ready below. Tick what you want, then press Save.`}),u("Suggestions ready — review and approve before saving.","info")}async function ns(e){const t=y,a=rs(),i=await S._callEdge({action:"chat",message:e,history:a,max_tokens:1200});if(i&&i.response){t.messages.push({role:"assistant",content:String(i.response)});return}throw new Error(i&&i.error||"The AI did not respond.")}async function ls(e,t){const a=y,i=`${e}

If you recognize the product in these photos, say yes and identify exactly what it is, give a typical price range for it, and offer to generate more product photos for this listing. Be friendly and helpful.`,s=await S._callEdge({action:"vision",images:(t||[]).slice(0,4),prompt:i,max_tokens:1200}),r=s&&s.text?String(s.text):"";if(!r)throw new Error(s&&s.error||"The AI could not read the attached photos.");a.messages.push({role:"assistant",content:r})}async function ds(){let e=Array.isArray(window._productsData)?window._productsData:[];if(!e.length)try{const{data:t,error:a}=await p.from("showroom_listings").select("*").limit(500);!a&&Array.isArray(t)&&(e=t)}catch{}return(e||[]).filter(t=>t&&t.property_id!==y.pid)}async function cs(){const e=y,t=await ds(),a=JSON.stringify(ma(e.product),null,2),i=t.slice(0,15).map(m=>({title:m.title,category:m.category,subcategory:m.subcategory,price:m.price,currency:m.currency,brand:m.brand,images:Array.isArray(m.images)?m.images.length:0,listing_type:m.listing_type})),s=`You are the AI product manager for the product ${e.pid} in the Weverse Online Shop showroom.
THIS PRODUCT (JSON):
${a}

OTHER PRODUCTS IN THE SAME SHOWROOM (${t.length} found, showing ${i.length}):
${JSON.stringify(i,null,2)}

Compare THIS product with the OTHER products in the showroom. Tell the admin whether everything matches (category, style, brand, price range, photo quality). If something does not match the showroom, say exactly what is wrong and how to fix it.

Return a single valid JSON object (no markdown, no extra text):
{
  "matches": ["what already matches the showroom"],
  "mismatches": [{ "field": "title", "current": "current value", "issue": "why it does not match", "suggested_value": "the fix" }],
  "summary": "one short sentence summarizing the showroom check"
}
Rules:
- Only list mismatches that are realistic and verifiable from the given data.
- Allowed fields: title, description, price, stock_quantity, category, subcategory, brand, availability_status, features, tags, highlights, seo_keywords, specifications.
- Respond with valid JSON only.`,r=await S._callEdge({action:"chat",message:s,history:[],max_tokens:3e3}),n=r&&r.response?String(r.response):"";if(!n)throw new Error(r&&r.error||"The showroom scan returned nothing.");const o=ce(n),l=Array.isArray(o&&o.mismatches)?o.mismatches:[],c=Array.isArray(o&&o.matches)?o.matches:[];if(o&&(l.length||c.length||o.summary)){const m={};l.forEach(b=>{b&&b.field&&b.suggested_value!==void 0&&b.suggested_value!==null&&(m[b.field]=b.suggested_value)});const h=["Showroom scan complete:"];c.length&&h.push(...c.map(b=>`✅ ${b}`)),l.length&&h.push(...l.map(b=>`⚠️ ${b.field}: ${b.issue}`)),l.length||h.push("✅ Everything matches the other products in this showroom."),l.length?(m.summary=o.summary||`${l.length} issue(s) found with the showroom.`,e.suggestions=m,e.approved=new Set(Object.keys(m)),e.approved.add("images_to_remove"),h.push("Fixes are ready below. Tick what you want, then press Save.")):e.suggestions=null,e.messages.push({role:"assistant",content:h.join(`
`)}),u("Showroom scan complete.","info");return}e.messages.push({role:"assistant",content:n||"Showroom scan complete."})}async function ha(e,t){const a=y,i=a.product,s=`${e}

(Generate a clean, professional product photo for "${String(i.title||"").trim()||"this product"}" in the Weverse Online Shop.)`;let r=null;t&&t.length?r=t[0]:Array.isArray(i.images)&&i.images[0]&&(r=await S._fetchImageAsDataUrl(i.images[0]));const n=await S._callEdge({action:"generate_images",prompt:s,reference_url:r,count:2});if(n&&Array.isArray(n.images)&&n.images.length){a.generatedImages=n.images,a.lastGenPrompt=e,a.lastGenReference=r,a.messages.push({role:"assistant",content:"Here are your generated images. Tap one to add it to the card, or Regenerate for new variations.",generated:n.images,provider:`${n.provider||"AI"}/${n.model||""}`});return}throw new Error(n&&n.error||"Image generation returned nothing.")}async function Pe(e){try{const t=await fetch(e).then(i=>i.blob());if(!t||!t.size)return null;const a=new File([t],`ai-${Date.now()}.png`,{type:t.type||"image/png"});return await me(a)}catch{return null}}window.productAiUseGeneratedImage=async function(e){const t=y;if(!t||t.busy||!Array.isArray(t.generatedImages))return;const a=t.generatedImages[e];if(!a)return;t.busy=!0,A();const i=await Pe(a);if(t.busy=!1,!i){u("Could not upload the generated image.","error"),A();return}const s=Array.isArray(t.product.images)?t.product.images:[];await ne([...s,i],"Generated image added to the card.")};window.productAiReplaceMainImage=async function(e){const t=y;if(!t||t.busy||!Array.isArray(t.generatedImages))return;const a=t.generatedImages[e];if(!a)return;t.busy=!0,A();const i=await Pe(a);if(t.busy=!1,!i){u("Could not upload the generated image.","error"),A();return}const s=Array.isArray(t.product.images)?t.product.images:[],r=s.length?[i,...s.slice(1)]:[i];await ne(r,"Old main image replaced with the generated one.")};window.productAiUseAllGeneratedImages=async function(){const e=y;if(!e||e.busy||!Array.isArray(e.generatedImages)||!e.generatedImages.length)return;e.busy=!0,A();const a=[...Array.isArray(e.product.images)?e.product.images:[]];let i=0;for(const s of e.generatedImages){const r=await Pe(s);r&&(a.push(r),i+=1)}if(e.busy=!1,i){e.generatedImages=[],await ne(a,`${i} generated image(s) added to the card.`);return}u("Upload failed.","error"),A()};window.productAiRemoveImageNow=async function(e){const t=y;if(!t||t.busy)return;const a=Array.isArray(t.product.images)?t.product.images:[];e<0||e>=a.length||await ne(a.filter((i,s)=>s!==e),"Image removed from the card.")};async function ne(e,t){const a=y;if(!a)return;a.busy=!0,A();const i=Q({...a.product,images:e,property_id:a.pid,updated_at:new Date().toISOString()});try{const{error:s}=await p.from("showroom_listings").upsert(i,{onConflict:"property_id"});if(s)throw s;a.product.images=e,a.removedImages.clear(),u(t,"success"),a.from==="properties"?Ae():P()}catch(s){s&&D(s)?u("⚠️ Save blocked: database admin role is not active. Re-run the admin permission migration.","error"):u(`Save failed: ${s&&s.message||"unknown error"}`,"error")}finally{a.busy=!1,A()}}window.productAiRegenerateImage=async function(){const e=y;if(!(!e||e.busy||!e.lastGenPrompt)){e.busy=!0,A();try{await ha(e.lastGenPrompt,e.lastGenReference?[e.lastGenReference]:[])}catch(t){e.messages.push({role:"assistant",content:`⚠️ ${t.message}`})}finally{e.busy=!1,A()}}};function us(e,t){const a=e.product;return`You are the AI product manager assistant for the Weverse Online Shop admin dashboard, working on ONE product.

You have FULL permission over the whole showroom. This is a REAL catalog managed by real store staff — always give real, usable data (real brand, realistic price, professional title). Never refuse or hedge; if something looks wrong, fix it directly. Edit the attached product, and never create or delete other products.

CURRENT PRODUCT DATA (JSON):
${JSON.stringify(ma(a),null,2)}

ADMIN INSTRUCTION:
${t}

Return a single valid JSON object (no markdown, no extra text) that proposes changes to the attached product. Allowed keys:
- title (string): a real, professional product name that matches the actual item and its category. NEVER use placeholders like "AI Product", "AI Curated Product", or similar.
- description (string)
- price (number): always give the item's real market value — a realistic number, never 0, never omitted.
- stock_quantity (number)
- category (string)
- subcategory (string)
- brand (string): ALWAYS the item's real brand when identifiable; for unbranded/artisan items, "Handmade", "Unbranded", or similar. Never leave blank.
- model (string)
- year (number)
- color (string)
- condition (string)
- mileage (string)
- property_type (string)
- listing_type (string)
- warranty (string)
- rating (number)
- rating_count (number)
- favorite_count (number)
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
- Respond with valid JSON only.`}window.applyProductAiChanges=async function(){const e=y;if(!e||e.busy)return;const t=[...e.approved].some(o=>o!=="images_to_remove"),a={};if(e.suggestions)for(const o of e.approved)o!=="images_to_remove"&&o in e.suggestions&&e.suggestions[o]!==void 0&&(a[o]=e.suggestions[o]);if(!t&&!e.removedImages.size&&!e.addedImages.length){u("Approve at least one change before saving.","error");return}const i=Array.isArray(e.product.images)?e.product.images:[],s=new Set(e.removedImages);e.approved.has("images_to_remove")&&Array.isArray(e.suggestions?.images_to_remove)&&e.suggestions.images_to_remove.forEach(o=>s.add(o));const r=[...i.filter(o=>!s.has(o)),...e.addedImages],n=Q({...e.product,...a,images:r,property_id:e.pid,updated_at:new Date().toISOString()});e.busy=!0,A();try{const{error:o}=await p.from("showroom_listings").upsert(n,{onConflict:"property_id"});if(o)throw o;u("Changes saved to Supabase.","success");const l=e.from;y=null,z(),l==="properties"?Ae():P()}catch(o){e.busy=!1,o&&D(o)?u("⚠️ Save blocked: database admin role is not active. Re-run the admin permission migration, or contact the owner.","error"):u(`Save failed: ${o&&o.message||"unknown error"}`,"error"),A()}};let w=null;const ut=[{key:"monitor",mode:"monitor",label:"Scan Showroom",icon:"scan-search",prompt:"Scan the whole showroom and tell me what is good and what is not good."},{key:"publish",mode:"publish",label:"Publish from Photo",icon:"image-up",prompt:"Scan this photo and publish it in the matching section of my showroom — show me a preview first so I can approve it."},{key:"gen",mode:"gen",label:"Generate an Image",icon:"wand-sparkles",prompt:"Generate a beautiful new image for me."},{key:"fix",mode:"fix",label:"Fix Everything",icon:"wrench",prompt:"Check the whole showroom and fix everything that is wrong so everything is proper."}];function ps(){const e=w;return e?(Array.isArray(e.messages)?e.messages:[]).slice(0,-1).filter(a=>!a.welcome).map(a=>{const i=a.images&&a.images.length?` [Sent ${a.images.length} photo(s)]`:"",s=`${a.content||""}${i}`.trim();return{role:a.role==="user"?"user":"assistant",content:s}}).filter(a=>a.content):[]}function ms(e,t){const a=String(e||"").toLowerCase();return/\bpublish\b/.test(a)||/\b(add|upload|put)\b[\s\S]*\b(showroom|store|site|listing|product|card|item)\b/.test(a)?"publish":/\b(generate|create|make|draw|produce|imagine|design)\b[\s\S]*\b(image|photo|picture|logo|thumbnail|background|banner|color|colour)\b/.test(a)?"gen":t?a?"vision":"execute":/\b(scan|monitor|health|good|bad|check)\b[\s\S]*\b(showroom|store|product|section|everything)\b/.test(a)||/\bshowroom\b/.test(a)?"monitor":"execute"}function gs(e){const t=e&&e.action,a=e&&e.params||{};switch(t){case"delete_duplicates":return`Delete duplicate products${a.category?` in the "${a.category}" section`:" in the whole showroom"}.`;case"delete_products":return`Delete ${(a.property_ids||[]).length} product(s).`;case"rename_category":return`Rename the section "${a.from}" to "${a.to}" everywhere.`;case"create_product":return`Create a new product: "${a.title}" in ${a.category||"General"}.`;case"regenerate_product":return`Generate a brand-new image and replace the current one on ${a.property_id}.`;default:return JSON.stringify(a||{})}}function fa(){return w||(w={busy:!1,messages:[{role:"assistant",welcome:!0,content:"I'm the General AI — I manage your WHOLE showroom, right here on top of the Product Manager. Upload a photo and tell me what you want: I'll scan it and list the brand, model, year and real details, generate a matching image, or publish it to the showroom (I'll always show you a preview and ask if it's good before publishing). I always scan your showroom first so trucks go where the trucks are, cars where the cars are, homes where the homes are — I never guess or make new sections unless you ask me to. I can also generate any image, chat friendly, learn from your corrections, monitor what's good and what's not, and fix everything without coding. Just tell me."}],chatImages:[],generatedImages:[],lastGenPrompt:"",lastGenReference:null,pendingPlan:null,pendingPublish:null},w)}window.openGeneralAi=async function(){fa(),I()};function bs(e){if(!e)return"";const t=(Number(e.price)||0)>0?`$${Number(e.price).toLocaleString()}`:"",a=Array.isArray(e.images)?e.images.slice(0,3):[],i=Array.isArray(e.features)?e.features.slice(0,8):[],s=[e.brand,e.model,e.year,e.property_type].filter(Boolean);return`
    <div class="mt-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4">
      <div class="flex items-center justify-between gap-2 mb-3">
        <p class="text-[10px] font-black text-emerald-300 uppercase tracking-wider flex items-center gap-1.5"><i data-lucide="eye" class="w-3.5 h-3.5"></i> Card preview — check before publishing</p>
        <span class="badge bg-emerald-500/15 text-emerald-300 border-emerald-500/25 text-[9px]">${d(e.category||"New section")}</span>
      </div>
      ${a.length?`<div class="flex flex-wrap gap-2 mb-3">${a.map(r=>`<img src="${d(r)}" class="w-28 h-28 rounded-xl object-cover border border-emerald-500/40 shadow-lg" onerror="this.src='/fallback.svg'">`).join("")}</div>`:""}
      <p class="text-base font-black text-white leading-tight">${d(e.title||"New Product")}</p>
      ${s.length?`<p class="text-[11px] font-bold text-emerald-300 mt-1">${s.map(r=>d(String(r))).join(" · ")}${t?` · ${t}`:""}</p>`:t?`<p class="text-[11px] font-bold text-emerald-300 mt-1">${t}</p>`:""}
      <p class="text-[11px] text-gray-300 mt-2 leading-relaxed whitespace-pre-wrap break-words">${d(e.description||"")}</p>
      ${i.length?`<div class="flex flex-wrap gap-1.5 mt-3">${i.map(r=>`<span class="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[9px] text-gray-200">${d(String(r))}</span>`).join("")}</div>`:""}
      <div class="flex flex-wrap items-center gap-2 mt-4">
        <button onclick="generalAiConfirmPublish()" class="btn-press px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-black rounded-xl transition flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5"></i> Yes, publish it</button>
        <button onclick="generalAiOpenPublishFix()" class="btn-press px-3 py-2 bg-white/10 hover:bg-white/20 text-gray-200 text-[11px] font-bold rounded-xl transition flex items-center gap-1.5"><i data-lucide="pen-line" class="w-3.5 h-3.5"></i> Not professional</button>
        <button onclick="generalAiCancelPublish()" class="btn-press px-3 py-2 bg-white/5 hover:bg-white/10 text-gray-400 text-[11px] font-bold rounded-xl transition">Cancel</button>
      </div>
      <div id="general-ai-publish-fix-box" class="hidden mt-3">
        <input id="general-ai-publish-fix-input" class="w-full px-3 py-2 rounded-xl bg-white/5 border border-amber-500/30 text-[11px] text-white placeholder-gray-400 focus:outline-none" placeholder="Tell the AI what to fix (e.g. make the title and price more professional)">
        <button onclick="generalAiRevisePublish()" class="btn-press mt-2 px-3 py-2 bg-amber-500 hover:bg-amber-400 text-black text-[11px] font-black rounded-xl transition flex items-center gap-1.5"><i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i> Make it professional</button>
      </div>
    </div>`}function ya(e){return e?e.role==="user"?`
    <div class="flex justify-end">
      <div class="max-w-[85%] bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl rounded-tr-md px-5 py-3.5 text-[1.02rem] leading-relaxed whitespace-pre-wrap break-words shadow-lg shadow-blue-600/20">
        ${e.images&&e.images.length?`<div class="flex flex-wrap gap-2 mb-2">${e.images.map(t=>`<img src="${d(t)}" class="w-16 h-16 rounded-xl object-cover border border-white/20">`).join("")}</div>`:""}
        ${d(e.content)}
      </div>
    </div>`:`
    <div class="flex gap-3 items-start">
      <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-700 flex items-center justify-center shrink-0 shadow-md mt-0.5">
        <i data-lucide="sparkles" class="w-6 h-6 text-white"></i>
      </div>
      <div class="glass border border-sky-500/20 rounded-3xl rounded-tl-md px-5 py-3.5 min-w-0 max-w-[85%]">
        <div class="text-[1.02rem] leading-relaxed text-gray-100 whitespace-pre-wrap break-words">${d(e.content)}</div>
        ${e.previewDraft?bs(e.previewDraft):""}
        ${e.images&&e.images.length?`
          <div class="flex flex-wrap gap-2.5 mt-3">
            ${e.images.map(t=>`<img src="${d(t)}" class="w-40 h-40 rounded-2xl object-cover border border-sky-500/40 shadow-lg" onerror="this.src='/fallback.svg'">`).join("")}
          </div>`:""}
        ${e.generated&&e.generated.length?`
          <div class="flex flex-wrap gap-2.5 mt-3">
            ${e.generated.map((t,a)=>`
              <div class="relative">
                <img src="${d(t)}" class="w-40 h-40 rounded-2xl object-cover border border-sky-500/40 shadow-lg" onerror="this.src='/fallback.svg'">
                <button onclick="generalAiUseGeneratedImage(${a})" class="absolute bottom-8 right-1.5 px-2 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-black shadow transition">Use on card</button>
                <button onclick="generalAiPublishGeneratedImage(${a})" class="absolute bottom-1.5 right-1.5 px-2 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-[10px] font-black shadow transition">Publish to showroom</button>
              </div>`).join("")}
          </div>
          <div class="flex items-center gap-2 mt-2.5">
            <button onclick="generalAiRegenerateImage()" class="btn-press px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-sky-500/10 text-sky-200 hover:bg-sky-500/25 transition flex items-center gap-1"><i data-lucide="refresh-cw" class="w-3 h-3"></i> Regenerate</button>
          </div>`:""}
        ${e.provider?`<p class="text-[9px] text-gray-600 mt-2">${d(e.provider)}</p>`:""}
      </div>
    </div>`:""}function va(){return`
    <div class="flex gap-3 items-start">
      <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-700 flex items-center justify-center shrink-0 shadow-md mt-0.5">
        <i data-lucide="sparkles" class="w-6 h-6 text-white"></i>
      </div>
      <div class="glass border border-sky-500/20 rounded-3xl rounded-tl-md px-5 py-4 flex items-center gap-1.5">
        <span class="typing-dot w-2.5 h-2.5 bg-sky-400 rounded-full"></span>
        <span class="typing-dot w-2.5 h-2.5 bg-sky-400 rounded-full"></span>
        <span class="typing-dot w-2.5 h-2.5 bg-sky-400 rounded-full"></span>
      </div>
    </div>`}function wa(){const e=w;return!e||!e.pendingPlan?"":`
    <div class="glass border border-amber-500/30 rounded-2xl p-4 bg-amber-500/5">
      <p class="text-xs font-black text-amber-200 flex items-center gap-2"><i data-lucide="shield-alert" class="w-4 h-4"></i> Confirm this action</p>
      <p class="text-[11px] text-gray-400 mt-1.5">${d(gs(e.pendingPlan))}</p>
      <div class="flex gap-2 mt-3">
        <button onclick="generalAiConfirmPlan()" class="btn-press px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-black rounded-xl transition flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5"></i> Do it</button>
        <button onclick="generalAiCancelPlan()" class="btn-press px-3 py-2 bg-white/10 hover:bg-white/20 text-gray-200 text-[11px] font-bold rounded-xl transition">Cancel</button>
      </div>
    </div>`}function xa(){const e=w;return e?(Array.isArray(e.chatImages)?e.chatImages:[]).map((a,i)=>`
    <div class="relative w-14 h-14 rounded-xl overflow-hidden border border-sky-500/40 shrink-0">
      <img src="${d(a)}" class="w-full h-full object-cover">
      <button onclick="generalAiRemoveChatImage(${i})" class="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-red-500 text-white text-xs leading-none flex items-center justify-center shadow" title="Remove image">✕</button>
    </div>`).join(""):""}function I(){document.getElementById("general-ai-embed-scroll")&&_a(),(document.getElementById("modal-container")?.innerHTML||"").trim().length>0&&hs(),Ee()}window.generalAiEmbedAttach=function(){document.getElementById("general-ai-embed-image")?.click()};function hs(){const e=w;if(!e)return;const t=e.busy===!0,i=(Array.isArray(e.messages)?e.messages:[]).map(c=>ya(c)).join(""),s=t?va():"",r=ut.map(c=>`
    <button onclick="generalAiQuickAction('${c.key}')" class="btn-press px-3 py-2 rounded-xl text-[11px] font-bold bg-sky-500/10 text-sky-200 hover:bg-sky-500/20 border border-sky-500/15 transition flex items-center gap-1.5 shrink-0">
      <i data-lucide="${c.icon}" class="w-3.5 h-3.5"></i> ${c.label}
    </button>`).join(""),n=xa(),o=wa();B(`
    <div class="fixed inset-0 z-[100] bg-[#030712]/92 backdrop-blur-sm flex flex-col" onclick="if(event.target===this)closeModal()">
      <div class="max-w-4xl mx-auto w-full h-full flex flex-col">
        <div class="px-3 sm:px-5 h-16 shrink-0 flex items-center justify-between gap-3 border-b border-sky-500/15 bg-blue-950/40">
          <div class="flex items-center gap-3 min-w-0">
            <button onclick="closeModal()" class="btn-press w-11 h-11 rounded-2xl bg-blue-950/60 border border-sky-500/25 flex items-center justify-center shrink-0" title="Back to products">
              <i data-lucide="chevron-left" class="w-6 h-6 text-sky-300"></i>
            </button>
            <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-700 flex items-center justify-center shrink-0">
              <i data-lucide="sparkles" class="w-6 h-6 text-white"></i>
            </div>
            <div class="min-w-0">
              <span class="text-lg font-black text-white block leading-tight">General AI</span>
              <span class="text-[11px] text-gray-500 block truncate">Whole Showroom Assistant</span>
            </div>
          </div>
          <span class="badge bg-sky-500/10 text-sky-300 border-sky-500/25 hidden sm:inline-flex shrink-0"><i data-lucide="globe" class="w-3 h-3"></i> Full showroom access</span>
        </div>

        <div id="general-ai-chat-scroll" class="flex-1 min-h-0 overflow-y-auto scrollbar-thin px-3 sm:px-5 py-4">
          <div class="space-y-4">
            <div class="glass-soft border border-sky-500/15 rounded-2xl p-4">
              <div class="flex flex-wrap gap-1.5 mb-2">${r}</div>
              <p class="text-[11px] text-gray-500">Upload a photo and tell me what to do — I'll scan it and list the real details (brand, model, year), generate a matching image, or publish it after you approve a preview. I always scan your showroom so every item goes in the right existing section, and I only create new sections when you ask. Or just chat and tell me what to fix.</p>
            </div>
            ${i}
            ${s}
            ${o}
          </div>
        </div>

        <div class="shrink-0 px-3 sm:px-5 pb-3 pt-2 bg-gradient-to-t from-[#070b16] via-[#070b16]/95 to-transparent">
          ${n?`<div class="flex flex-wrap gap-2.5 pb-2">${n}</div>`:""}
          <div class="glass border border-sky-500/25 rounded-[1.6rem] p-2 flex items-end gap-1.5 shadow-2xl shadow-sky-950/40">
            <button onclick="generalAiChatAttach()" class="btn-press w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/25 flex items-center justify-center shrink-0" title="Attach photo(s)">
              <i data-lucide="image-plus" class="w-6 h-6 text-sky-300"></i>
            </button>
            <textarea id="general-ai-input" rows="1" class="flex-1 bg-transparent text-lg text-white placeholder-gray-500 resize-none outline-none px-1 py-3 max-h-40 leading-relaxed scrollbar-thin" placeholder="Tell the General AI what to do for your showroom…"></textarea>
            <button id="general-ai-send-btn" onclick="runGeneralAiInstruction()" class="btn-press w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-700 hover:from-sky-400 hover:to-indigo-600 text-white flex items-center justify-center shrink-0 transition shadow-lg shadow-sky-600/30 ${t?"opacity-40 pointer-events-none":""}" title="Send">
              <i data-lucide="send" class="w-6 h-6"></i>
            </button>
          </div>
          <p class="text-[11px] text-gray-500 pt-2.5">Full permission over the whole showroom — it checks everything before it publishes, and it can fix anything without coding.</p>
        </div>
      </div>
      <input id="general-ai-chat-image" type="file" accept="image/*" multiple class="hidden" onchange="generalAiChatImagePicked(this)">
    </div>`);const l=document.getElementById("general-ai-input");l&&(l.value=e.instruction||"",l.addEventListener("input",()=>{w&&(w.instruction=l.value)}),l.addEventListener("keydown",c=>{c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),runGeneralAiInstruction())})),window.lucide&&lucide.createIcons(),Ee()}function _a(){const e=w,t=document.getElementById("general-ai-embed-scroll");if(!e||!t)return;const a=e.busy===!0,i=Array.isArray(e.messages)?e.messages:[],s=ut.map(l=>`
    <button onclick="generalAiQuickAction('${l.key}')" class="btn-press px-3 py-2 rounded-xl text-[11px] font-bold bg-sky-500/10 text-sky-200 hover:bg-sky-500/20 border border-sky-500/15 transition flex items-center gap-1.5 shrink-0">
      <i data-lucide="${l.icon}" class="w-3.5 h-3.5"></i> ${l.label}
    </button>`).join("");t.innerHTML=`
    <div class="flex flex-wrap gap-1.5">${s}</div>
    ${i.map(l=>ya(l)).join("")}
    ${a?va():""}
    ${wa()}
  `;const r=document.getElementById("general-ai-embed-thumbs");r&&(r.innerHTML=xa());const n=document.getElementById("general-ai-embed-send-btn");n&&(n.classList.toggle("opacity-40",a),n.classList.toggle("pointer-events-none",a));const o=document.getElementById("general-ai-embed-input");o&&(o.value=e.instruction||"",o.dataset.gaiBound||(o.dataset.gaiBound="1",o.addEventListener("input",()=>{w&&(w.instruction=o.value)}),o.addEventListener("keydown",l=>{l.key==="Enter"&&!l.shiftKey&&(l.preventDefault(),runGeneralAiInstruction())}))),window.lucide&&lucide.createIcons(),Ee()}function Ee(){const e=["general-ai-chat-scroll","general-ai-embed-scroll"];requestAnimationFrame(()=>{for(const t of e){const a=document.getElementById(t);a&&a.scrollTo({top:a.scrollHeight,behavior:"smooth"})}})}window.generalAiChatAttach=function(){document.getElementById("general-ai-chat-image")?.click()};window.generalAiChatImagePicked=async function(e){if(!w||!e||!e.files||!e.files.length)return;const t=[...e.files].slice(0,4);let a=0;for(const i of t){if(!i.type.startsWith("image/"))continue;const s=await ba(i);s&&(w.chatImages.push(s),a+=1)}if(e.value="",a){u(`${a} photo(s) attached. Now type what you want me to do with it (e.g. "scan this and list everything about it", "generate an image exactly like this", or "publish this to the showroom").`,"info");const i=document.getElementById("general-ai-embed-input")||document.getElementById("general-ai-input");i&&i.focus()}I()};window.generalAiRemoveChatImage=function(e){w&&(w.chatImages.splice(e,1),I())};window.generalAiQuickAction=function(e){const t=ut.find(a=>a.key===e);!t||!w||(w.instruction=t.prompt,w.quickLabel=t.label,w.quickMode=t.mode,runGeneralAiInstruction())};window.runGeneralAiInstruction=async function(){const e=w;if(!e||e.busy)return;const t=(e.instruction||"").trim(),a=e.quickLabel||"";e.quickLabel="";const i=e.quickMode||"";e.quickMode="";const s=(e.chatImages||[]).length>0;if(!t&&!a&&!i)return;const r=t||"",n=a||t||(s?"Photo attached — please scan it and list everything you can identify about it.":r),o=[...e.chatImages||[]];e.chatImages=[],e.instruction="",e.pendingPlan=null,e.messages.push({role:"user",content:n,images:o}),e.busy=!0,I();const l=i||ms(r,s);try{l==="publish"?await ka(r,o):l==="gen"?await $a(r,o):l==="monitor"?await fs():l==="vision"?await ys(r,o):await vs(r,o),Ee()}catch(c){e.messages.push({role:"assistant",content:`⚠️ ${c.message}`}),u(`General AI error: ${c.message}`,"error")}finally{e.busy=!1,I()}};async function ka(e,t){const a=w,i=await S._callEdge({action:"general_publish",message:e,images:t.slice(0,4),max_tokens:2048});if(!i||i.success!==!0)throw new Error(i&&i.error||"Could not prepare the product card.");if(i.pending&&i.draft){a.pendingPublish={draft:i.draft,instruction:e},a.messages.push({role:"assistant",content:String(i.response||"Here is the card I prepared. Is it good?"),previewDraft:i.preview||i.draft,images:(i.images||[]).slice(0,2)}),I();return}a.messages.push({role:"assistant",content:String(i.response||"Published."),images:(i.images||[]).slice(0,2)}),u("Product published to the showroom.","success"),Ce()}window.generalAiConfirmPublish=async function(){const e=w;if(!e||e.busy||!e.pendingPublish||!e.pendingPublish.draft)return;const t=e.pendingPublish.draft;e.pendingPublish=null,e.busy=!0,I();try{const a=await S._callEdge({action:"general_publish",mode:"publish",draft:t});if(!a||a.success!==!0)throw new Error(a&&a.error||"Could not publish the product.");e.messages.push({role:"assistant",content:`✅ ${String(a.response||"Published to the showroom.")}`,images:(a.images||[]).slice(0,2)}),u("Product published to the showroom.","success"),Ce()}catch(a){e.messages.push({role:"assistant",content:`⚠️ ${a.message}`})}finally{e.busy=!1,I()}};window.generalAiCancelPublish=function(){w&&(w.pendingPublish=null,w.messages.push({role:"assistant",content:"Cancelled — nothing was published."}),I())};window.generalAiOpenPublishFix=function(){const e=document.getElementById("general-ai-publish-fix-box");e&&e.classList.remove("hidden")};window.generalAiRevisePublish=async function(){const e=w;if(!e||e.busy||!e.pendingPublish||!e.pendingPublish.draft)return;const t=document.getElementById("general-ai-publish-fix-input"),a=t?String(t.value||"").trim():"",i=e.pendingPublish.draft,s=e.pendingPublish.instruction||"";e.pendingPublish=null,e.busy=!0,I();try{const r=await S._callEdge({action:"general_publish",mode:"preview",message:s,draft:i,feedback:a||"Make this card more professional and match the showroom style."});if(!r||r.success!==!0)throw new Error(r&&r.error||"Could not revise the card.");if(!r.pending||!r.draft)throw new Error("The AI could not produce a revised card.");e.pendingPublish={draft:r.draft,instruction:s},e.messages.push({role:"assistant",content:String(r.response||"Here is the revised card. Is it good now?"),previewDraft:r.preview||r.draft,images:(r.images||[]).slice(0,2)}),I()}catch(r){e.messages.push({role:"assistant",content:`⚠️ ${r.message}`})}finally{e.busy=!1,I()}};async function $a(e,t){const a=w;let i=null;t&&t.length&&(i=t[0]);const s=i?"The attached image is your SUBJECT — study it carefully and reproduce the SAME thing: the same type of object, subject, brand, model, look, colors, style and background. Keep the identical subject; only improve quality and lighting for a professional look. Do NOT change the subject and do NOT draw a person, woman, man, or face unless the attached image actually shows one. You must match what is in the reference photo.":`Generate a beautiful, high-quality image based on this request: "${e}". Follow the request exactly. If it asks for a specific object, product, vehicle, or scene, draw exactly that — never swap in a different subject, a person, or a random image.`,r=await S._callEdge({action:"generate_images",prompt:`${e}

${s}`,reference_url:i,count:2});if(!r||!Array.isArray(r.images)||!r.images.length)throw new Error(r&&r.error||"Image generation returned nothing.");a.generatedImages=r.images,a.lastGenPrompt=e,a.lastGenReference=i,a.messages.push({role:"assistant",content:"Here are your images — generated to match your reference photo. Tap one to save it to your showroom product images.",generated:r.images,provider:`${r.provider||"AI"}/${r.model||""}`})}async function fs(){const e=w,t=await S._callEdge({action:"general_monitor",max_tokens:3e3});if(!t||t.success!==!0||!t.report)throw new Error(t&&t.error||"Could not scan the showroom.");const a=t.report||{},i=["Showroom scan complete:"];(Array.isArray(a.good)?a.good:[]).forEach(s=>i.push(`✅ ${s}`)),(Array.isArray(a.issues)?a.issues:[]).forEach(s=>i.push(`⚠️ ${s.property_id} (${s.severity||"low"}): ${s.issue}`)),(Array.isArray(a.suggestions)?a.suggestions:[]).forEach(s=>i.push(`💡 ${s}`)),Array.isArray(a.issues)&&a.issues.length||i.push("Everything looks good."),e.messages.push({role:"assistant",content:i.join(`
`)})}async function ys(e,t){const a=w,i=`${e}

SCAN the attached photo(s) carefully and list every detail you can actually identify, one per line, in this exact order:
1. Brand / make
2. Model
3. Year
4. Body type (for vehicles: Sedan, SUV, Coupe, Truck, etc.)
5. Color
6. Engine / performance specs (if visible)
7. Mileage (if visible)
8. Condition (New / Used - Good / Used - Fair)
9. Visible features, badges, trims, interior, or accessories
10. Estimated market price range

Rules:
- Base every line ONLY on what you can see in the photo. Never invent specs.
- If a badge or emblem is readable, read it exactly.
- If you cannot identify a detail, write "Not visible" — do not guess.
- Keep it a clean, readable list. You manage the whole showroom, so stay professional and factual.`,s=await S._callEdge({action:"vision",images:(t||[]).slice(0,4),prompt:i,max_tokens:1500}),r=s&&s.text?String(s.text):"";if(!r)throw new Error(s&&s.error||"The AI could not read the attached photos.");a.messages.push({role:"assistant",content:r,provider:s.provider?`${s.provider}/${s.model}`:""})}async function vs(e,t){const a=w,i=ps(),s=await S._callEdge({action:"general_execute",message:e,images:(t||[]).slice(0,4),history:i,max_tokens:1200});if(!s||s.success!==!0)throw new Error(s&&s.error||"Could not handle that request.");if(s.needs_confirmation){a.pendingPlan=s.plan||null,a.messages.push({role:"assistant",content:String(s.response||"I found something I can fix.")});return}a.messages.push({role:"assistant",content:String(s.response||s.reply||"Done.")}),s.plan&&s.plan.action!=="chat"&&s.plan.action!=="monitor"&&Ce()}window.generalAiConfirmPlan=async function(){const e=w;if(!e||!e.pendingPlan||e.busy)return;const t=e.pendingPlan;e.pendingPlan=null,e.busy=!0,I();try{const a=await S._callEdge({action:"general_execute",confirm_plan:t,confirmed:!0});if(!a||a.success!==!0)throw new Error(a&&a.error||"The action failed.");e.messages.push({role:"assistant",content:`✅ ${String(a.response||a.reply||"Done.")}`}),Ce()}catch(a){e.messages.push({role:"assistant",content:`⚠️ ${a.message}`})}finally{e.busy=!1,I()}};window.generalAiCancelPlan=function(){w&&(w.pendingPlan=null,w.messages.push({role:"assistant",content:"Cancelled — nothing was changed."}),I())};window.generalAiUseGeneratedImage=async function(e){const t=w;if(!t||t.busy||!Array.isArray(t.generatedImages))return;const a=t.generatedImages[e];if(!a)return;t.busy=!0,I();const i=await Pe(a);if(t.busy=!1,!i){u("Could not upload the generated image.","error"),I();return}u("Image saved to showroom storage. Use it on any card or ask the AI to attach it.","success"),I()};window.generalAiPublishGeneratedImage=async function(e){const t=w;if(!t||t.busy||!Array.isArray(t.generatedImages))return;const a=t.generatedImages[e];a&&(t.instruction="Publish this generated image in the matching section of my showroom.",t.messages.push({role:"user",content:"Publish this generated image in the matching section of my showroom.",images:[a]}),t.chatImages=[],t.generatedImages=[],await ka("Publish this generated image in the matching section of my showroom.",[a]))};window.generalAiRegenerateImage=async function(){const e=w;if(!(!e||e.busy||!e.lastGenPrompt)){e.busy=!0,I();try{await $a(e.lastGenPrompt,e.lastGenReference?[e.lastGenReference]:[])}catch(t){e.messages.push({role:"assistant",content:`⚠️ ${t.message}`})}finally{e.busy=!1,I()}}};async function Ce(){try{await P()}catch{}}const pt=[{id:"flow",name:"Flow"},{id:"veo",name:"Veo"},{id:"luma",name:"Luma"},{id:"runway",name:"Runway"},{id:"pika",name:"Pika"},{id:"kling",name:"Kling"},{id:"hailuo",name:"Hailuo"},{id:"pixverse",name:"PixVerse"},{id:"hedra",name:"Hedra"},{id:"heygen",name:"HeyGen"},{id:"tavus",name:"Tavus"}],ws=["Product launch","Seasonal sale","Brand awareness","Lead generation","Live stream conversion","Retargeting"];function mt(e){return Array.isArray(e)?e:[]}function Sa(e=[]){const t=new Map(mt(e).map(a=>[a.id,a]));return pt.map(a=>{const i=t.get(a.id)||{};return{id:a.id,name:a.name,enabled:!!i.enabled,apiKey:i.apiKey||"",model:i.model||"",baseUrl:i.baseUrl||""}})}async function Aa(e){const{data:t}=await p.from("ai_settings").select("id").limit(1).maybeSingle();let a;if(t?.id?{error:a}=await p.from("ai_settings").update(e).eq("id",t.id):{error:a}=await p.from("ai_settings").insert(e),a)throw a}async function gt(e){const{data:t}=await p.from("ai_settings").select("ai_ad_generation_history").limit(1).maybeSingle(),a=[e,...mt(t?.ai_ad_generation_history)].slice(0,120);await Aa({ai_ad_generation_history:a})}async function Ia(e){try{const{data:i,error:s}=await p.from("site_settings").select("id").limit(1).maybeSingle();if(s)throw s;let r;if(i?.id?{error:r}=await p.from("site_settings").update(e).eq("id",i.id):{error:r}=await p.from("site_settings").insert(e),r)throw r;return}catch{}const t={mode:"ai_ad",startsAt:e.ai_ad_starts_at||null,endsAt:e.ai_ad_ends_at||null,ctaLabel:e.ai_ad_cta_label||"Shop Now",muted:e.ai_ad_muted!==!1},a={is_live:!!e.ai_ad_enabled,badge_text:e.ai_ad_badge||"AI Advertisement",headline:e.ai_ad_title||"",embed_url:e.ai_ad_video_url||"",description:`AI_AD_META:${JSON.stringify(t)}`,stream_status:e.ai_ad_enabled?"ai_ad":"offline",started_at:e.ai_ad_starts_at||null,updated_at:new Date().toISOString()};try{const{data:i}=await p.from("public_live_state").select("id").limit(1).maybeSingle();let s;if(i?.id?{error:s}=await p.from("public_live_state").update(a).eq("id",i.id):{error:s}=await p.from("public_live_state").insert(a),!s)return}catch{}try{localStorage.setItem(jt,JSON.stringify({ai_ad_enabled:!!e.ai_ad_enabled,ai_ad_video_url:e.ai_ad_video_url||"",ai_ad_badge:e.ai_ad_badge||"AI Advertisement",ai_ad_title:e.ai_ad_title||"",ai_ad_cta_label:e.ai_ad_cta_label||"Shop Now",ai_ad_muted:e.ai_ad_muted!==!1,ai_ad_starts_at:e.ai_ad_starts_at||null,ai_ad_ends_at:e.ai_ad_ends_at||null,ai_ad_duration_seconds:e.ai_ad_duration_seconds||30,ai_ad_updated_at:new Date().toISOString()}))}catch{}}function xs(e){if(!e||typeof e!="string"||!e.startsWith("AI_AD_META:"))return null;try{return JSON.parse(e.slice(11))}catch{return null}}async function _s(){try{const{data:e,error:t}=await p.from("site_settings").select("*").limit(1).maybeSingle();if(!t&&e)return e}catch{}try{const{data:e,error:t}=await p.from("public_live_state").select("*").limit(1).maybeSingle();if(t||!e)throw new Error("public_live_state unavailable");const a=xs(e.description),i=a?.startsAt||e.started_at||null,s=a?.endsAt||null;return{ai_ad_enabled:!!e.is_live&&e.stream_status==="ai_ad"&&!!e.embed_url,ai_ad_video_url:e.embed_url||"",ai_ad_badge:e.badge_text||"AI Advertisement",ai_ad_title:e.headline||"",ai_ad_cta_label:a?.ctaLabel||"Shop Now",ai_ad_muted:a?.muted!==!1,ai_ad_starts_at:i,ai_ad_ends_at:s,ai_ad_duration_seconds:s&&i?Math.max(5,Math.round((new Date(s).getTime()-new Date(i).getTime())/1e3)):30}}catch{try{const e=localStorage.getItem(jt),t=e?JSON.parse(e):null;return t&&typeof t=="object"?t:{}}catch{return{}}}}async function Te(){const e=document.getElementById("content");if(e)try{const[{data:t},a]=await Promise.all([p.from("ai_settings").select("*").limit(1).maybeSingle(),_s()]),i=t||{},s=a||{},r=Sa(i.ai_ad_video_providers),n=mt(i.ai_ad_generation_history).sort((l,c)=>new Date(c.created_at||0).getTime()-new Date(l.created_at||0).getTime()).slice(0,12),o=!!s.ai_ad_enabled&&!!s.ai_ad_video_url&&(!s.ai_ad_ends_at||new Date(s.ai_ad_ends_at).getTime()>Date.now());e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div class="flex items-start justify-between flex-wrap gap-3">
          <div>
            <h2 class="text-xl font-black text-white">AI Marketing Studio</h2>
            <p class="text-xs text-gray-500 mt-1">AI Advertisement Generator with live ad-slot takeover and automatic restore when campaign ends.</p>
          </div>
          ${o?'<button onclick="deactivateAiAdvertisement()" class="btn-press bg-red-600/90 hover:bg-red-500 text-white text-xs font-bold px-3 py-2 rounded-xl transition flex items-center gap-1.5"><i data-lucide="square" class="w-3.5 h-3.5"></i>Stop Active AI Ad</button>':'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">No active AI ad</span>'}
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
            ${r.map(l=>`
              <div class="glass-soft border border-blue-500/10 rounded-xl p-3 space-y-2">
                <div class="flex items-center justify-between">
                  <p class="text-xs font-bold text-white">${d(l.name)}</p>
                  <label class="flex items-center gap-1.5 text-[11px] text-gray-400">
                    <input type="checkbox" name="provider_${l.id}_enabled" ${l.enabled?"checked":""}>
                    Enabled
                  </label>
                </div>
                <div>
                  <label class="lbl">API Key</label>
                  <input type="password" class="input-field text-xs" name="provider_${l.id}_api_key" placeholder="${l.apiKey?"Saved key - leave blank to keep":"Paste API key"}">
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label class="lbl">Model</label>
                    <input type="text" class="input-field text-xs" name="provider_${l.id}_model" value="${d(l.model)}" placeholder="Optional model name">
                  </div>
                  <div>
                    <label class="lbl">Base URL</label>
                    <input type="url" class="input-field text-xs" name="provider_${l.id}_base_url" value="${d(l.baseUrl)}" placeholder="Optional custom API URL">
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
                ${ws.map(l=>`<option value="${d(l)}">${d(l)}</option>`).join("")}
              </select>
            </div>
            <div>
              <label class="lbl">Provider Used for Video</label>
              <select id="ai-ad-provider" class="input-field text-xs" name="provider_id">
                ${r.map(l=>`<option value="${l.id}" ${l.enabled?"selected":""}>${d(l.name)}</option>`).join("")}
              </select>
            </div>
          </div>

          <div>
            <label class="lbl">Offer / Brief</label>
            <textarea id="ai-ad-brief" class="input-field text-xs" name="brief" rows="3" placeholder="Describe product, offer, target audience, and style."></textarea>
          </div>

          <div>
            <label class="lbl">Generated Script</label>
            <textarea id="ai-ad-script" class="input-field text-xs" name="script" rows="6" placeholder="Click Generate Script with AI, then edit if needed.">${d(n[0]?.script||"")}</textarea>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div>
              <label class="lbl">AI Video URL</label>
              <input id="ai-ad-video-url" type="url" class="input-field text-xs" name="video_url" placeholder="https://...mp4" value="${d(o&&s.ai_ad_video_url||"")}" required>
            </div>
            <div>
              <label class="lbl">Playback Duration (seconds)</label>
              <input id="ai-ad-duration" type="number" class="input-field text-xs" name="duration_seconds" min="5" max="900" value="${d(String(s.ai_ad_duration_seconds||30))}" required>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div>
              <label class="lbl">Badge</label>
              <input id="ai-ad-badge" type="text" class="input-field text-xs" name="badge" value="${d(s.ai_ad_badge||"AI Advertisement")}" placeholder="AI Advertisement">
            </div>
            <div>
              <label class="lbl">Headline</label>
              <input id="ai-ad-title" type="text" class="input-field text-xs" name="title" value="${d(s.ai_ad_title||"")}" placeholder="Campaign headline">
            </div>
            <div>
              <label class="lbl">CTA Label</label>
              <input id="ai-ad-cta" type="text" class="input-field text-xs" name="cta_label" value="${d(s.ai_ad_cta_label||"Shop Now")}" placeholder="Shop Now">
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
            <span class="text-xs text-gray-500">${n.length} entries</span>
          </div>
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Time</th><th>Goal</th><th>Provider</th><th>Status</th><th>Video</th></tr></thead>
              <tbody>
                ${n.length===0?'<tr><td colspan="5" class="text-center text-gray-500 py-8">No AI ad jobs yet.</td></tr>':n.map(l=>`
                    <tr>
                      <td><span class="text-xs text-gray-400">${d(W(l.created_at))}</span></td>
                      <td><span class="text-xs text-white">${d(l.goal||"General")}</span></td>
                      <td><span class="text-xs text-gray-300">${d(l.provider_name||l.provider_id||"N/A")}</span></td>
                      <td>${R(l.status||"active")}</td>
                      <td>${l.video_url?`<a href="${l.video_url}" target="_blank" rel="noopener" class="text-xs text-blue-400 hover:underline">Open</a>`:'<span class="text-xs text-gray-600">N/A</span>'}</td>
                    </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`}}window.saveAiAdProviders=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries());try{const{data:i}=await p.from("ai_settings").select("ai_ad_video_providers").limit(1).maybeSingle(),s=Sa(i?.ai_ad_video_providers),r=new Map(s.map(o=>[o.id,o])),n=pt.map(o=>{const l=o.id,c=r.get(l)||{},m=String(a[`provider_${l}_api_key`]||"").trim();return{id:l,name:o.name,enabled:t.get(`provider_${l}_enabled`)==="on",apiKey:m||c.apiKey||"",model:String(a[`provider_${l}_model`]||"").trim(),baseUrl:String(a[`provider_${l}_base_url`]||"").trim()}});await Aa({ai_ad_video_providers:n}),u("AI advertisement provider settings saved.","success"),Te()}catch(i){u("Failed to save providers: "+i.message,"error")}};window.generateAiAdScript=async function(){const e=document.getElementById("ai-ad-brief")?.value?.trim(),t=document.getElementById("ai-ad-goal")?.value||"Product launch",a=document.getElementById("ai-ad-provider"),i=document.getElementById("ai-ad-script");if(!e){u("Enter campaign brief first.","error");return}if(i){i.value="Generating script...";try{const s=["Create a short video advertisement script for an ecommerce marketplace.",`Goal: ${t}`,`Brief: ${e}`,"Return only plain text in this exact structure:","Headline:","Voiceover:","On-screen text:","CTA:"].join(`
`),r=await S.prompt(s,{onProviderSwitch:n=>{i.value=`Generating with ${n}...`}});i.value=r.text||"",await gt({created_at:new Date().toISOString(),goal:t,brief:e,provider_name:r.provider,provider_id:a?.value||"",status:"script_generated",script:r.text||"",video_url:null}),u(`Script generated with ${r.provider}.`,"success")}catch(s){i.value="",u("Script generation failed: "+s.message,"error")}}};window.activateAiAdvertisement=async function(e){e.preventDefault();const t=new FormData(e.target),a=String(t.get("goal")||"Product launch"),i=String(t.get("provider_id")||""),s=pt.find(b=>b.id===i)?.name||i,r=String(t.get("brief")||"").trim(),n=String(t.get("script")||"").trim(),o=String(t.get("video_url")||"").trim(),l=Math.max(5,Math.min(900,parseInt(String(t.get("duration_seconds")||"30"),10)||30)),c=Date.now(),m=new Date(c).toISOString(),h=new Date(c+l*1e3).toISOString();if(!o){u("Video URL is required.","error");return}try{const b={ai_ad_enabled:!0,ai_ad_video_url:o,ai_ad_badge:String(t.get("badge")||"AI Advertisement").trim()||"AI Advertisement",ai_ad_title:String(t.get("title")||"").trim(),ai_ad_cta_label:String(t.get("cta_label")||"Shop Now").trim()||"Shop Now",ai_ad_duration_seconds:l,ai_ad_muted:t.get("muted")==="on",ai_ad_provider_id:i,ai_ad_starts_at:m,ai_ad_ends_at:h,ai_ad_updated_at:new Date().toISOString()};await Ia(b),await gt({created_at:m,goal:a,brief:r,provider_name:s,provider_id:i,status:"active",script:n,video_url:o,ends_at:h}),u("AI advertisement activated. Homepage will switch to AI video now.","success"),Te()}catch(b){u("Failed to activate AI advertisement: "+b.message,"error")}};window.deactivateAiAdvertisement=async function(){try{await Ia({ai_ad_enabled:!1,ai_ad_updated_at:new Date().toISOString()}),await gt({created_at:new Date().toISOString(),goal:"Manual stop",provider_name:"Admin",provider_id:"manual",status:"inactive",script:"",video_url:null}),u("AI advertisement stopped.","success"),Te()}catch(e){u("Failed to stop AI advertisement: "+e.message,"error")}};async function ks(){const e=document.getElementById("content");try{const{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
                    ${s.type==="textarea"?`<textarea class="input-field" name="${s.key}" placeholder="${d(s.placeholder)}" rows="2">${d(a[s.key]||"")}</textarea>`:`<input type="${s.type}" class="input-field" name="${s.key}" value="${d(a[s.key]||"")}" placeholder="${d(s.placeholder)}">`}
                  </div>`).join("")}
              </div>
            </div>`).join("")}
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save Content Settings</button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.saveContent=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),{error:i}=await p.from("site_settings").upsert({id:1,...a});if(i){u(i.message,"error");return}u("Content settings saved!")};async function $s(){const e=document.getElementById("content");try{const[t,a,i]=await Promise.all([p.from("payment_receipts").select("amount,currency,status,created_at").order("created_at",{ascending:!1}).limit(500),p.from("showroom_listings").select("id,listing_type,category,is_active",{count:"exact"}),p.from("profiles").select("user_id,created_at",{count:"exact"})]),s=t.data||[],r=s.filter(c=>["approved","payment_approved","delivered"].includes(c.status)).reduce((c,m)=>c+(parseFloat(m.amount)||0),0),n=s.length>0?(s.filter(c=>c.status!=="cancelled").length/s.length*100).toFixed(1):0,o={};(a.data||[]).forEach(c=>{o[c.category]=(o[c.category]||0)+1});const l=Object.entries(o).sort((c,m)=>m[1]-c[1]).slice(0,8);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Analytics</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          ${M("Total Revenue",`$${r.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald")}
          ${M("Total Orders",s.length,"shopping-bag","blue")}
          ${M("Customers",i.count||0,"users","violet")}
          ${M("Conversion Rate",n+"%","trending-up","amber")}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="bar-chart-3" class="w-4 h-4 text-blue-400"></i> Revenue (Last 6 Months)</h3>
            <canvas id="analytics-chart" height="220"></canvas>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="pie-chart" class="w-4 h-4 text-violet-400"></i> Top Categories by Listings</h3>
            ${l.length===0?'<p class="text-xs text-gray-500 text-center py-8">No data</p>':l.map(([c,m])=>`
              <div class="flex items-center gap-3 py-1.5">
                <span class="text-xs text-gray-300 flex-1 truncate">${d(c)}</span>
                <div class="w-24 h-2 bg-blue-500/10 rounded-full overflow-hidden"><div class="h-full bg-blue-500 rounded-full" style="width:${Math.round(m/l[0][1]*100)}%"></div></div>
                <span class="text-xs font-bold text-white w-6 text-right">${m}</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),Zt(s)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}async function Ss(){const e=document.getElementById("content"),{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">SEO Manager</h2>
      <form id="seo-form" onsubmit="saveSeo(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Homepage SEO</h3>
          <div><label class="lbl">Meta Title</label><input class="input-field" name="meta_title" value="${d(a.meta_title||"")}" placeholder="Weverse Online Shop | Premium International Commerce"></div>
          <div><label class="lbl">Meta Description</label><textarea class="input-field" name="meta_description" rows="2" placeholder="Your trusted global shop…">${d(a.meta_description||"")}</textarea></div>
          <div><label class="lbl">Meta Keywords (comma separated)</label><input class="input-field" name="meta_keywords" value="${d(a.meta_keywords||"")}" placeholder="global marketplace, online shopping, …"></div>
          <div><label class="lbl">Canonical URL</label><input class="input-field" name="canonical_url" value="${d(a.canonical_url||"")}" placeholder="https://yoursite.com"></div>
          <div><label class="lbl">OG Image URL (Social share image)</label><input class="input-field" name="og_image" value="${d(a.og_image||"")}" placeholder="https://…/og-image.jpg"></div>
          <div><label class="lbl">Google Analytics ID</label><input class="input-field" name="ga_id" value="${d(a.ga_id||"")}" placeholder="G-XXXXXXXXXX"></div>
          <div><label class="lbl">Google Search Console Verification</label><input class="input-field" name="gsc_verify" value="${d(a.gsc_verify||"")}" placeholder="Verification meta tag content"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save SEO Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSeo=async function(e){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());await p.from("site_settings").upsert({id:1,...t}),u("SEO settings saved!")};async function As(){const e=document.getElementById("content"),{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
          <div><label class="lbl">Sender Name</label><input class="input-field" name="email_from_name" value="${d(a.email_from_name||"")}" placeholder="Weverse Online Shop"></div>
          <div><label class="lbl">Reply-To Email</label><input type="email" class="input-field" name="email_reply_to" value="${d(a.email_reply_to||"")}" placeholder="support@example.com"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">💾 Save Email Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveEmailSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,s]of t.entries())a[i]=s;["email_order_placed","email_order_shipped","email_order_delivered","email_review_request"].forEach(i=>{i in a?a[i]=!0:a[i]=!1}),await p.from("site_settings").upsert({id:1,...a}),u("Email settings saved!")};async function Be(){const e=document.getElementById("content");e&&(e.innerHTML=ue());try{const[t,a,i]=await Promise.all([p.from("admin_security_logs").select("*").order("created_at",{ascending:!1}).limit(50),p.from("admin_2fa").select("enabled,backup_codes,created_at").eq("user_id",k.user?.id).maybeSingle(),p.auth.mfa.listFactors()]),s=t.data||[],r=a.data||{},n=(i.data?.totp||[])[0],o=!!n&&n.status==="verified",l=(r.backup_codes||[]).filter(c=>!c.used).length;e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Security</h2>

        <!-- 2FA STATUS BANNER -->
        <div class="p-4 rounded-xl border flex items-center gap-4 ${o?"bg-emerald-500/5 border-emerald-500/20":"bg-amber-500/5 border-amber-500/20"}">
          <div class="w-10 h-10 ${o?"bg-emerald-500/10":"bg-amber-500/10"} rounded-xl flex items-center justify-center shrink-0">
            <i data-lucide="${o?"shield-check":"shield-alert"}" class="w-5 h-5 ${o?"text-emerald-400":"text-amber-400"}"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm font-black ${o?"text-emerald-300":"text-amber-300"}">Two-Factor Authentication is ${o?"ENABLED ✓":"NOT ENABLED"}</p>
            <p class="text-xs text-gray-400 mt-0.5">${o?`Backup codes available: ${l} · Enrolled: ${N(r.created_at)}`:"Enable 2FA to protect your admin account with an authenticator app."}</p>
          </div>
          ${o?'<button onclick="disable2FA()" class="btn-press flex-shrink-0 text-xs font-bold text-red-400 bg-red-500/10 hover:bg-red-500/20 px-3 py-1.5 rounded-xl transition">Disable 2FA</button>':'<button onclick="setup2FAFlow()" class="btn-press flex-shrink-0 text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-1.5 rounded-xl transition"><i data-lucide="shield-plus" class="w-3.5 h-3.5 inline mr-1"></i>Enable 2FA</button>'}
        </div>

        <!-- BACKUP CODES (only if 2FA enabled) -->
        ${o?`
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="key" class="w-4 h-4 text-amber-400"></i> Backup Recovery Codes</h3>
            <button onclick="regenerateBackupCodes()" class="btn-press text-xs font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 px-3 py-1.5 rounded-xl transition">Regenerate</button>
          </div>
          <p class="text-xs text-gray-400 mb-3">Save these codes in a safe place. Use them if you lose access to your authenticator app. Each code works only once.</p>
          <div id="backup-codes-display" class="grid grid-cols-2 gap-2">
            ${(r.backup_codes||[]).length===0?'<p class="text-xs text-gray-500 col-span-2 text-center py-4">No backup codes generated. Click Regenerate to create them.</p>':(r.backup_codes||[]).map(c=>`<code class="font-mono text-xs px-3 py-2 ${c.used?"bg-gray-900 text-gray-600 line-through":"bg-blue-500/5 text-blue-300 border border-blue-500/15"} rounded-lg">${typeof c=="object"?c.code:c}</code>`).join("")}
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
                <p class="text-[11px] text-gray-500">${d(navigator.userAgent.slice(0,60))}…</p>
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
                ${s.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No security events yet</td></tr>':s.map(c=>{const m=["login_success","login_2fa_success"].includes(c.event_type),h=["login_failed","login_denied","login_backup_code_used"].includes(c.event_type),b=m?"text-emerald-400":h?"text-red-400":"text-gray-300",f={login_success:"Login ✓",login_failed:"Failed Login ✗",login_denied:"Access Denied ✗",login_2fa_success:"2FA Verified ✓",login_backup_code_used:"Backup Code Used",logout:"Logged Out",logout_all_devices:"Logout All Devices"}[c.event_type]||c.event_type;return`<tr>
                      <td><span class="text-xs font-bold ${b}">${d(f)}</span></td>
                      <td><span class="text-xs font-mono text-gray-300">${d(c.ip_address||"—")}</span></td>
                      <td class="hidden sm:table-cell"><span class="text-xs text-gray-500 max-w-[160px] block truncate">${d((c.user_agent||"—").slice(0,50))}</span></td>
                      <td><span class="text-xs text-gray-500">${W(c.created_at)}</span></td>
                    </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,document.getElementById("new-pw")?.addEventListener("input",c=>{const m=c.target.value,h=[{label:"8+ characters",ok:m.length>=8},{label:"Uppercase letter",ok:/[A-Z]/.test(m)},{label:"Number",ok:/[0-9]/.test(m)},{label:"Special character",ok:/[^a-zA-Z0-9]/.test(m)}];document.getElementById("pw-strength").innerHTML=h.map(b=>`<div class="flex items-center gap-1.5 text-[10px] ${b.ok?"text-emerald-400":"text-gray-600"}">
          <i data-lucide="${b.ok?"check-circle":"circle"}" class="w-3 h-3"></i>${b.label}</div>`).join(""),window.lucide&&lucide.createIcons()}),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.changePassword=async function(e){e.preventDefault();const t=document.getElementById("current-pw").value,a=document.getElementById("new-pw").value,i=document.getElementById("confirm-pw").value;if(a!==i){u("Passwords do not match","error");return}if(a.length<8){u("Password must be at least 8 characters","error");return}const{error:s}=await p.auth.signInWithPassword({email:k.user.email,password:t});if(s){u("Current password is incorrect","error");return}const{error:r}=await p.auth.updateUser({password:a});if(r){u(r.message,"error");return}await q(k.user.id,"password_changed"),u("Password updated successfully!"),e.target.reset(),document.getElementById("pw-strength").innerHTML=""};window.setup2FAFlow=async function(){B(`
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
            <img src="${d(a)}" alt="QR Code" class="w-44 h-44" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-500 w-44 text-center&quot;>QR code unavailable. Use the secret below.</p>'">
          </div>
          <div class="w-full">
            <label class="lbl">Or enter this secret manually</label>
            <div class="flex gap-2">
              <code class="flex-1 input-field font-mono text-xs text-emerald-300 select-all">${d(i)}</code>
              <button onclick="navigator.clipboard.writeText('${d(i)}').then(()=>showToast('Copied!'))" class="btn-press p-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl transition text-blue-400"><i data-lucide="copy" class="w-4 h-4"></i></button>
            </div>
          </div>
        </div>
        <div>
          <label class="lbl">Enter 6-digit code from app *</label>
          <input type="text" id="setup-totp-code" inputmode="numeric" maxlength="6" class="input-field text-center text-xl font-black tracking-[0.5em] py-3" placeholder="000000" autocomplete="one-time-code">
        </div>
        <div id="setup-2fa-error" class="hidden p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs"></div>
        <button onclick="confirm2FAEnrollment('${d(s)}')" class="btn-press w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2">
          <i data-lucide="shield-check" class="w-4 h-4"></i> Verify & Enable 2FA
        </button>
      </div>`,window.lucide&&lucide.createIcons(),setTimeout(()=>document.getElementById("setup-totp-code")?.focus(),100),document.getElementById("setup-totp-code")?.addEventListener("input",r=>{r.target.value=r.target.value.replace(/\D/g,"").slice(0,6)})}catch(e){document.getElementById("2fa-setup-content").innerHTML=`<div class="text-red-400 text-sm text-center py-4">${d(e.message)}</div>`}};window.confirm2FAEnrollment=async function(e){const t=document.getElementById("setup-totp-code")?.value?.trim(),a=document.getElementById("setup-2fa-error");if(!t||t.length!==6){a&&(a.textContent="Enter the 6-digit code.",a.classList.remove("hidden"));return}try{const{data:i,error:s}=await p.auth.mfa.challenge({factorId:e});if(s)throw s;const{error:r}=await p.auth.mfa.verify({factorId:e,challengeId:i.id,code:t});if(r)throw r;const n=Pa(10);await p.from("admin_2fa").upsert({user_id:k.user.id,enabled:!0,backup_codes:n}),await q(k.user.id,"2fa_enrolled"),z(),Ea(n.map(o=>o.code)),Be()}catch(i){const s=document.getElementById("setup-2fa-error");s&&(s.textContent=i.message?.includes("Invalid")?"Wrong code. Check your app and try again.":i.message,s.classList.remove("hidden")),document.getElementById("setup-totp-code").value="",document.getElementById("setup-totp-code").focus()}};function Pa(e){const t=[];for(let a=0;a<e;a++){const i=Array.from({length:16},()=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random()*32)]).join("");t.push({code:`${i.slice(0,4)}-${i.slice(4,8)}-${i.slice(8,12)}-${i.slice(12,16)}`,used:!1})}return t}function Ea(e){B(`
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
          ${e.map(t=>`<code class="font-mono text-xs px-3 py-2 bg-blue-500/5 text-blue-300 border border-blue-500/15 rounded-lg text-center select-all">${d(t)}</code>`).join("")}
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

Each code works once. Store securely.`],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download="kco-admin-backup-codes.txt",a.click()};window.regenerateBackupCodes=async function(){if(!confirm("This will invalidate ALL existing backup codes. Continue?"))return;const e=Pa(10);await p.from("admin_2fa").update({backup_codes:e}).eq("user_id",k.user.id),u("New backup codes generated"),Ea(e.map(t=>t.code)),Be()};window.disable2FA=async function(){if(confirm("Disable two-factor authentication? Your account will be less secure."))try{const{data:e}=await p.auth.mfa.listFactors(),t=(e?.totp||[])[0];if(t){const{error:a}=await p.auth.mfa.unenroll({factorId:t.id});if(a)throw a}await p.from("admin_2fa").update({enabled:!1}).eq("user_id",k.user.id),await q(k.user.id,"2fa_disabled"),u("2FA has been disabled"),Be()}catch(e){u(e.message,"error")}};async function Is(){const e=document.getElementById("content");try{const{data:t}=await p.from("admin_activity_logs").select("*").order("created_at",{ascending:!1}).limit(100);e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Activity Logs</h2>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Action</th><th>Entity</th><th class="hidden sm:table-cell">Admin</th><th>Date</th></tr></thead>
              <tbody>
                ${(t||[]).length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No activity yet</td></tr>':(t||[]).map(a=>`<tr>
                    <td><span class="text-xs font-bold text-white">${d(a.action)}</span></td>
                    <td><span class="text-xs text-gray-400">${d(a.entity_type||"—")} <span class="text-gray-600">${d(a.entity_id?.slice(0,8)||"")}</span></span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-blue-400">${d(a.user_email||a.user_id?.slice(0,8)||"—")}</span></td>
                    <td><span class="text-xs text-gray-500">${W(a.created_at)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}async function Ps(){const e=document.getElementById("content");try{const{data:t}=await p.from("deployment_history").select("*").order("created_at",{ascending:!1}).limit(20);e.innerHTML=`
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
                <div class="flex-1"><p class="text-xs font-bold text-white">${d(a.version||a.id?.slice(0,8))}</p><p class="text-[10px] text-gray-500">${W(a.created_at)}</p></div>
                ${R(a.status||"completed")}
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.exportProducts=async function(){const{data:e}=await p.from("showroom_listings").select("*"),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download=`kco-products-${new Date().toISOString().slice(0,10)}.json`,a.click(),u("Products exported!")};window.exportOrders=async function(){const{data:e}=await p.from("payment_receipts").select("*").order("created_at",{ascending:!1});if(!e||!e.length){u("No orders to export","info");return}const t=Object.keys(e[0]).join(","),a=e.map(r=>Object.values(r).map(n=>`"${String(n||"").replace(/"/g,'""')}"`).join(",")).join(`
`),i=new Blob([t+`
`+a],{type:"text/csv"}),s=document.createElement("a");s.href=URL.createObjectURL(i),s.download=`kco-orders-${new Date().toISOString().slice(0,10)}.csv`,s.click(),u("Orders exported!")};async function Es(){const e=document.getElementById("content"),{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
            <div><label class="lbl">Timezone</label><input class="input-field" name="timezone" value="${d(a.timezone||"UTC")}" placeholder="UTC"></div>
            <div><label class="lbl">Low Stock Threshold</label><input type="number" class="input-field" name="low_stock_threshold" value="${d(a.low_stock_threshold||10)}" min="1"></div>
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
    </div>`,window.lucide&&lucide.createIcons()}window.saveSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,s]of t.entries())a[i]=s;["maintenance_mode","reviews_enabled","wishlist_enabled","guest_checkout"].forEach(i=>{a[i]=i in a}),await p.from("site_settings").upsert({id:1,...a}),u("Settings saved!")};async function Le(){const e=document.getElementById("content");e&&(e.innerHTML=ue());try{const{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{},i=a.homepage_banner_image||"",s=a.homepage_banner_alt||"Homepage header banner",r=i?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.";e.innerHTML=`
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
                ${i?`<img id="homepage-banner-preview-img" src="${d(i)}" alt="${d(s)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-off" class="mx-auto w-8 h-8 text-gray-500"></i><p class="mt-2 text-xs font-semibold text-gray-500">No banner selected</p></div></div>'}
              </div>
            </div>
            <div class="px-4 py-3 border-t border-white/5 bg-[#0b1020] flex items-center gap-2 text-[11px] text-gray-400">
              <i data-lucide="crop" class="w-3.5 h-3.5 text-blue-400"></i>
              <span>Crop / resize is previewed in a fixed banner frame. Wide images work best.</span>
            </div>
          </div>
          <p id="homepage-banner-preview-note" class="text-[10px] text-gray-500">${d(r)}</p>
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
                      ${i?`<img id="homepage-banner-image" src="${d(i)}" alt="${d(s)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-plus" class="mx-auto w-8 h-8 text-blue-400"></i><p class="mt-2 text-xs font-semibold text-gray-400">Upload a homepage banner</p></div></div>'}
                    </div>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <button type="button" onclick="triggerImgUpload('homepage_banner_image')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">${i?"Replace Image":"Upload Image"}</button>
                      <button type="button" onclick="clearHomepageBannerImg()" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove Image</button>
                      <button type="button" onclick="restoreHomepageBannerDefault()" class="text-xs font-bold text-white bg-slate-700 px-3 py-1.5 rounded-lg">Restore Default</button>
                    </div>
                  </div>
                </div>
                <input type="file" id="file-homepage_banner_image" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'homepage_banner_image')">
                <input type="hidden" name="homepage_banner_image" id="val-homepage_banner_image" value="${d(i)}">
                <input type="text" id="url-homepage_banner_image" value="${d(i)}" placeholder="Or paste image URL" oninput="document.getElementById('val-homepage_banner_image').value=this.value;updateHomepageBannerPreview()" class="input-field text-xs">
                <p class="text-[10px] text-gray-500">Use a wide image for the cleanest banner. The homepage frame will crop/resize it automatically.</p>
              </div>

              <div class="space-y-3">
                <div>
                  <label class="lbl">Banner Alt Text</label>
                  <textarea class="input-field" id="homepage_banner_alt" name="homepage_banner_alt" rows="4" placeholder="Accessible description for the banner image">${d(s)}</textarea>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}async function Me(){const e=document.getElementById("content");e&&(e.innerHTML=ue());try{let t=function(o,l,c,m="",h="blue"){const b=!!(c&&c.trim());return`
        <div class="glass-soft border border-${h}-500/15 rounded-xl p-4 space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-xs font-black text-white">${d(o)}</p>
            ${b?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">✓ Uploaded</span>':'<span class="text-[9px] text-gray-600">Empty</span>'}
          </div>
          ${b?`<div class="relative group w-full h-24 rounded-xl overflow-hidden bg-gray-900 border border-blue-500/10 flex items-center justify-center">
                <img src="${d(c)}" alt="${d(o)}" class="max-h-20 max-w-full object-contain p-2" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-600 text-center&quot;>Image broken</p>'">
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                  <button type="button" onclick="triggerImgUpload('${l}')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">Replace</button>
                  <button type="button" onclick="clearBrandImg('${l}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
                </div>
               </div>`:`<div class="w-full h-24 rounded-xl border-2 border-dashed border-${h}-500/25 hover:border-${h}-500/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition" onclick="triggerImgUpload('${l}')">
                <i data-lucide="image-plus" class="w-7 h-7 text-${h}-400"></i>
                <p class="text-[11px] text-gray-500">Click to upload</p>
               </div>`}
          ${m?`<p class="text-[10px] text-gray-500">${d(m)}</p>`:""}
          <input type="file" id="file-${l}" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'${l}')">
          <input type="hidden" name="${l}" id="val-${l}" value="${d(c||"")}">
          <div class="flex gap-2">
            <input class="input-field text-xs flex-1 ${b?"":"hidden"}" id="url-${l}" value="${d(c||"")}" placeholder="Or paste image URL" oninput="document.getElementById('val-${l}').value=this.value;updateLivePreview()">
            <button type="button" onclick="document.getElementById('url-${l}').classList.toggle('hidden')" class="text-[10px] text-${h}-400 hover:text-${h}-300 transition shrink-0">${b?"Edit URL":"Paste URL"}</button>
          </div>
        </div>`};const{data:a}=await p.from("site_settings").select("*").limit(1).maybeSingle(),i=a||{},s=i.brand_name||i.site_name||Ft,r=i.brand_slogan||i.site_tagline||Ot,n=i.brand_logo||i.brand_header_logo||"";e.innerHTML=`
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
                ${n?`<img src="${d(n)}" alt="${d(s)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
              </div>
              <div>
                <p id="preview-name" class="text-sm font-black text-white leading-none">${d(s)}</p>
                <p id="preview-slogan" class="text-[10px] text-blue-400 font-semibold mt-0.5">${d(r)}</p>
              </div>
              <div id="preview-badge-wrap" class="ml-auto ${i.brand_badge?"":"hidden"}">
                <img id="preview-badge" src="${d(i.brand_badge||"")}" alt="Verified" class="w-6 h-6 object-contain">
              </div>
            </div>
            <div class="px-4 py-2 border-t border-gray-800 text-[11px] text-gray-500" style="background:#070b16">
              <span id="preview-btn" style="background:${d(i.brand_primary_color||"#f97316")};color:#000;padding:4px 12px;border-radius:8px;font-weight:700;font-size:11px">Shop Now</span>
              <span class="ml-3" style="color:${d(i.brand_secondary_color||"#3b82f6")}">All Products →</span>
            </div>
          </div>
          <!-- Footer preview -->
          <div id="preview-footer" class="rounded-xl px-4 py-3 border border-gray-800 flex items-center gap-3" style="background:#0f172a">
            <div id="preview-footer-logo-wrap" class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style="background:var(--preview-primary,#f97316)">
              ${n?`<img src="${d(n)}" alt="${d(s)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
            </div>
            <div>
              <p id="preview-footer-name" class="text-xs font-black text-white">${d(s)}</p>
              <p id="preview-footer-slogan" class="text-[10px] text-gray-500">${d(r)}</p>
            </div>
            <p class="ml-auto text-[10px] text-gray-600">© 2026 <span id="preview-copy-name">${d(s)}</span></p>
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
                <input class="input-field" name="brand_name" id="inp-brand-name" value="${d(s)}" placeholder="Your brand name" required oninput="updateLivePreview()">
              </div>
              <div>
                <label class="lbl">Short Name</label>
                <input class="input-field" name="brand_short_name" value="${d(i.brand_short_name||"")}" placeholder="e.g. Weverse">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Slogan / Tagline *</label>
                <input class="input-field" name="brand_slogan" id="inp-brand-slogan" value="${d(r)}" placeholder="e.g. Global Shopping • Worldwide Delivery" oninput="updateLivePreview()">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Brand Description</label>
                <textarea class="input-field" name="brand_description" rows="2" placeholder="Short description…">${d(i.brand_description||"")}</textarea>
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
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-primary" value="${d(i.brand_primary_color||"#f97316")}" oninput="document.getElementById('ct-primary').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-primary" name="brand_primary_color" value="${d(i.brand_primary_color||"#f97316")}" placeholder="#f97316" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-primary').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Secondary Color (links, highlights)</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-secondary" value="${d(i.brand_secondary_color||"#3b82f6")}" oninput="document.getElementById('ct-secondary').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-secondary" name="brand_secondary_color" value="${d(i.brand_secondary_color||"#3b82f6")}" placeholder="#3b82f6" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-secondary').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Tagline Color 1 (e.g. "GLOBAL SHOPPING")</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-tag1" value="${d(i.brand_tagline_color1||"#22d3ee")}" oninput="document.getElementById('ct-tag1').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-tag1" name="brand_tagline_color1" value="${d(i.brand_tagline_color1||"#22d3ee")}" placeholder="#22d3ee" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-tag1').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Tagline Color 2 (e.g. "WORLDWIDE DELIVERY")</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-tag2" value="${d(i.brand_tagline_color2||"#a3e635")}" oninput="document.getElementById('ct-tag2').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-tag2" name="brand_tagline_color2" value="${d(i.brand_tagline_color2||"#a3e635")}" placeholder="#a3e635" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-tag2').value=this.value;updateLivePreview()">
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
                  ${["Inter","Poppins","Roboto","Montserrat","Nunito","Raleway","Lato","Open Sans","Outfit","Plus Jakarta Sans","DM Sans","Urbanist","Sora","Manrope","Work Sans","Space Grotesk"].map(o=>`<option value="${o}" ${(i.brand_font||"Inter")===o?"selected":""}>${o}</option>`).join("")}
                </select>
              </div>
              <div>
                <label class="lbl">Custom Google Font (overrides above)</label>
                <input class="input-field" name="brand_custom_font" value="${d(i.brand_custom_font||"")}" placeholder="e.g. Space Grotesk">
              </div>
            </div>
            <div id="font-preview" class="p-3 rounded-xl bg-gray-900 border border-blue-500/10">
              <p id="font-sample" class="text-sm text-white font-bold" style="font-family:'${d(i.brand_font||"Inter")}',sans-serif">The quick brown fox jumps — 0123456789 · Weverse Online Shop</p>
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
              <div><label class="lbl">Website URL</label><input class="input-field" name="brand_website_url" value="${d(i.brand_website_url||i.production_url||"https://weverseonlineshop.com")}" placeholder="https://…"></div>
              <div><label class="lbl">Support Email</label><input type="email" class="input-field" name="brand_email" value="${d(i.brand_email||i.contact_email||"")}" placeholder="support@…"></div>
              <div><label class="lbl">Phone / WhatsApp</label><input class="input-field" name="brand_phone" value="${d(i.brand_phone||i.contact_phone||"")}" placeholder="+1 234…"></div>
              <div><label class="lbl">Business Address</label><input class="input-field" name="brand_address" value="${d(i.brand_address||i.contact_address||"")}" placeholder="City, Country"></div>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.toggleLivePreview=function(){document.getElementById("live-preview-panel")?.classList.toggle("hidden"),updateLivePreview()};window.updateLivePreview=function(){const e=document.getElementById("live-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("inp-brand-name")?.value||Ft,a=document.getElementById("inp-brand-slogan")?.value||Ot,i=document.getElementById("ct-primary")?.value||"#f97316",s=document.getElementById("ct-secondary")?.value||"#3b82f6",r=document.getElementById("ct-tag1")?.value||"#22d3ee",n=document.getElementById("ct-tag2")?.value||"#a3e635",o=document.getElementById("val-brand_logo")?.value||DEFAULT_BRAND_LOGO,l=document.getElementById("val-brand_badge")?.value||"";["preview-name","preview-footer-name","preview-copy-name"].forEach(g=>{const v=document.getElementById(g);v&&(v.textContent=t)}),["preview-slogan","preview-footer-slogan"].forEach(g=>{const v=document.getElementById(g);v&&(v.textContent=a)});const c=document.getElementById("preview-slogan");if(c&&a){const g=a,v=g.indexOf(","),$=v>-1?g.slice(0,v+1):g,H=v>-1?g.slice(v+1):"";c.innerHTML=`<span style="color:${r};font-weight:800">${d($)}</span><span style="color:${n};font-weight:700">${d(H)}</span>`}const m=document.getElementById("preview-btn");m&&(m.style.background=i);const h=e.querySelector('[style*="color:"]');h&&(h.style.color=s),["preview-logo-wrap","preview-footer-logo-wrap"].forEach(g=>{const v=document.getElementById(g);v&&(o?(v.innerHTML=`<img src="${o}" alt="${t}" class="w-full h-full object-contain p-1">`,v.style.background="transparent"):(v.innerHTML='<i data-lucide="globe" class="w-4 h-4 text-white"></i>',v.style.background=i,window.lucide&&lucide.createIcons()))});const b=document.getElementById("preview-badge-wrap"),f=document.getElementById("preview-badge");b&&f&&(l?(f.src=l,b.classList.remove("hidden")):b.classList.add("hidden"))};window.triggerImgUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearBrandImg=function(e){document.getElementById("val-"+e).value="";const t=document.getElementById("url-"+e);t&&(t.value=""),(e&&e.startsWith("homepage_")?Le:Me)()};window.clearHomepageBannerImg=function(){const e=document.getElementById("val-homepage_banner_image"),t=document.getElementById("url-homepage_banner_image"),a=document.getElementById("homepage_banner_alt");e&&(e.value=""),t&&(t.value=""),a&&(a.value=""),Le()};window.restoreHomepageBannerDefault=function(){window.clearHomepageBannerImg()};window.syncColor=function(e,t){const a=document.getElementById("color-"+e);a&&/^#[0-9a-fA-F]{6}$/.test(t)&&(a.value=t)};window.previewFont=function(e){const t=document.getElementById("font-sample");t&&(t.style.fontFamily=`'${e}', sans-serif`);const a="gf-preview";let i=document.getElementById(a);i||(i=document.createElement("link"),i.id=a,i.rel="stylesheet",document.head.appendChild(i)),i.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(e)}:wght@400;700;900&display=swap`};const Je="weverse_brand_v1",Qe="weverse_brand_override_v1";function Ye(){try{const e=JSON.parse(localStorage.getItem(Qe)||"null");if(e&&typeof e=="object")return e}catch{}try{const e=JSON.parse(localStorage.getItem(Je)||"null");if(e&&typeof e=="object")return e.data&&typeof e.data=="object"?e.data:e}catch{}return{}}function xe(e){const t={...Ye(),...e};try{localStorage.setItem(Qe,JSON.stringify(t))}catch{}try{localStorage.setItem(Je,JSON.stringify({ts:Date.now(),data:t}))}catch{}return window.dispatchEvent(new StorageEvent("storage",{key:Qe})),window.dispatchEvent(new StorageEvent("storage",{key:Je})),window.dispatchEvent(new CustomEvent("brand-updated",{detail:t})),t}window.handleBrandImgUpload=async function(e,t){const a=e.target.files?.[0];if(!a)return;const i=t&&t.startsWith("homepage_"),s=document.getElementById(i?"homepage-banner-status":"brand-upload-status"),r=document.getElementById(i?"homepage-banner-msg":"brand-upload-msg");s&&s.classList.remove("hidden"),r&&(r.textContent=`Uploading ${a.name}…`);try{const n=a.name.split(".").pop(),o=`brand/${t}-${Date.now()}.${n}`,{error:l}=await p.storage.from("product-images").upload(o,a,{contentType:a.type,upsert:!0});let c;if(l)c=URL.createObjectURL(a),r&&(r.textContent=`Preview only (storage: ${l.message})`);else{const{data:b}=p.storage.from("product-images").getPublicUrl(o);c=b.publicUrl,r&&(r.textContent=`✓ ${a.name} uploaded`)}const m=document.getElementById("val-"+t),h=document.getElementById("url-"+t);m&&(m.value=c),h&&(h.value=c,h.classList.remove("hidden")),i?updateHomepageBannerPreview():(updateLivePreview(),setTimeout(()=>Me(),1e3))}catch(n){r&&(r.textContent=`Upload failed: ${n.message}`)}setTimeout(()=>s?.classList.add("hidden"),4e3)};window.saveBrandSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[o,l]of t.entries())o.endsWith("_url")||(a[o]=l);a.brand_name&&(a.site_name=a.brand_name),a.brand_slogan&&(a.site_tagline=a.brand_slogan),a.brand_description&&(a.site_description=a.brand_description),a.brand_email&&(a.contact_email=a.brand_email),a.brand_phone&&(a.contact_phone=a.brand_phone),a.brand_address&&(a.contact_address=a.brand_address),a.brand_website_url&&(a.production_url=a.brand_website_url);const i=a.brand_custom_font||a.brand_font;i&&previewFont(i);const s=e.target.querySelector("[type=submit]");s&&(s.disabled=!0,s.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Saving…',window.lucide&&lucide.createIcons());const{data:r}=await p.from("site_settings").select("id").limit(1).maybeSingle();let n;r?.id?{error:n}=await p.from("site_settings").update(a).eq("id",r.id):{error:n}=await p.from("site_settings").insert(a),n?(xe(a),u("Brand saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(xe(a),u("✅ Brand saved! All pages will now show your updated brand.","success")),setTimeout(()=>Me(),500)};window.toggleHomepageBannerPreview=function(){document.getElementById("homepage-banner-preview-panel")?.classList.toggle("hidden"),updateHomepageBannerPreview()};window.updateHomepageBannerPreview=function(){const e=document.getElementById("homepage-banner-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("val-homepage_banner_image")?.value||"",a=document.getElementById("homepage_banner_alt")?.value||"Homepage header banner",i=document.getElementById("homepage-banner-image"),s=document.getElementById("homepage-banner-preview-img");[i,s].forEach(n=>{n&&(t?(n.src=t,n.alt=a,n.classList.remove("hidden")):n.classList.add("hidden"))});const r=document.getElementById("homepage-banner-preview-note");r&&(r.textContent=t?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.")};window.saveHomepageBranding=async function(e){e.preventDefault();const t={homepage_banner_image:document.getElementById("url-homepage_banner_image")?.value||"",homepage_banner_alt:document.getElementById("homepage_banner_alt")?.value||"Homepage header banner"},a=e.target.querySelector("[type=submit]");a&&(a.disabled=!0,a.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishing…',window.lucide&&lucide.createIcons());const{data:i}=await p.from("site_settings").select("id").limit(1).maybeSingle();let s;i?.id?{error:s}=await p.from("site_settings").update(t).eq("id",i.id):{error:s}=await p.from("site_settings").insert(t),s?(xe({...Ye(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),u("Homepage banner saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(xe({...Ye(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),u("Homepage banner published.","success")),setTimeout(()=>Le(),500)};window._manualPaymentAccounts=[];function bt(e="USD"){return{id:`bank-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,currency:e,currencyName:e,flag:Ct("US"),country:"United States",country_code:"US",bankName:"",transferType:"Local & International",beneficiary:"",accountNumber:"",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:""}}function ht(){const e=document.getElementById("manual-payment-accounts-json");e&&(e.value=JSON.stringify(window._manualPaymentAccounts||[]))}function Cs(e,t){const a=e.country_code||"US";return`
    <div class="p-4 glass-soft border border-blue-500/10 rounded-xl space-y-3">
      <div class="flex items-center justify-between gap-3">
        <h4 class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="building-2" class="w-3.5 h-3.5 text-blue-400"></i> Bank Account ${t+1}</h4>
        <button type="button" onclick="removeManualPaymentAccount(${t})" class="text-[11px] font-bold text-red-400 hover:text-red-300 transition">Remove</button>
      </div>
      <div class="form-grid form-grid-2">
        <div><label class="lbl">Currency *</label><select class="input-field" onchange="updateManualPaymentAccount(${t}, 'currency', this.value)">${Ut.map(i=>`<option value="${i}" ${e.currency===i?"selected":""}>${i}</option>`).join("")}</select></div>
        <div><label class="lbl">Country *</label><select class="input-field" onchange="updateManualPaymentCountry(${t}, this.value)">${ta(a)}</select></div>
        <div><label class="lbl">Beneficiary / Account Name *</label><input class="input-field" value="${d(e.beneficiary||"")}" placeholder="Full name on account" oninput="updateManualPaymentAccount(${t}, 'beneficiary', this.value)"></div>
        <div><label class="lbl">Bank Name *</label><input class="input-field" value="${d(e.bankName||"")}" placeholder="e.g. Citibank" oninput="updateManualPaymentAccount(${t}, 'bankName', this.value)"></div>
        <div><label class="lbl">Account Number</label><input class="input-field font-mono" value="${d(e.accountNumber||"")}" placeholder="Account number" oninput="updateManualPaymentAccount(${t}, 'accountNumber', this.value)"></div>
        <div><label class="lbl">Transfer Type</label><input class="input-field" value="${d(e.transferType||"")}" placeholder="Local & International" oninput="updateManualPaymentAccount(${t}, 'transferType', this.value)"></div>
        <div><label class="lbl">Account Type</label><input class="input-field" value="${d(e.accountType||"")}" placeholder="Checking, Savings..." oninput="updateManualPaymentAccount(${t}, 'accountType', this.value)"></div>
        <div><label class="lbl">IBAN</label><input class="input-field font-mono" value="${d(e.iban||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'iban', this.value)"></div>
        <div><label class="lbl">SWIFT / BIC</label><input class="input-field font-mono" value="${d(e.swift||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'swift', this.value)"></div>
        <div><label class="lbl">Routing / ABA</label><input class="input-field font-mono" value="${d(e.routing||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'routing', this.value)"></div>
        <div><label class="lbl">Sort Code</label><input class="input-field font-mono" value="${d(e.sortCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'sortCode', this.value)"></div>
        <div><label class="lbl">Bank Code</label><input class="input-field font-mono" value="${d(e.bankCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'bankCode', this.value)"></div>
        <div><label class="lbl">Branch Code</label><input class="input-field font-mono" value="${d(e.branchCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'branchCode', this.value)"></div>
        <div><label class="lbl">Institution Number</label><input class="input-field font-mono" value="${d(e.institutionNumber||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'institutionNumber', this.value)"></div>
        <div><label class="lbl">Transit Number</label><input class="input-field font-mono" value="${d(e.transitNumber||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'transitNumber', this.value)"></div>
        <div><label class="lbl">BSB Code</label><input class="input-field font-mono" value="${d(e.bsbCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${t}, 'bsbCode', this.value)"></div>
        <div class="sm:col-span-2"><label class="lbl">Bank Address</label><input class="input-field" value="${d(e.address||"")}" placeholder="Branch or bank address" oninput="updateManualPaymentAccount(${t}, 'address', this.value)"></div>
      </div>
    </div>`}window.renderManualPaymentAccountsEditor=function(){const e=document.getElementById("manual-accounts-editor");e&&(window._manualPaymentAccounts?.length||(window._manualPaymentAccounts=[bt()]),e.innerHTML=`
    <div class="space-y-4">
      ${window._manualPaymentAccounts.map((t,a)=>Cs(t,a)).join("")}
      <button type="button" onclick="addManualPaymentAccount()" class="btn-press w-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wide transition flex items-center justify-center gap-2">
        <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Another Bank Account
      </button>
    </div>`,ht(),window.lucide&&lucide.createIcons())};window.addManualPaymentAccount=function(){window._manualPaymentAccounts.push(bt()),renderManualPaymentAccountsEditor()};window.removeManualPaymentAccount=function(e){window._manualPaymentAccounts.splice(e,1),window._manualPaymentAccounts.length||(window._manualPaymentAccounts=[bt()]),renderManualPaymentAccountsEditor()};window.updateManualPaymentAccount=function(e,t,a){const i=window._manualPaymentAccounts[e];i&&(i[t]=a,t==="currency"&&(i.currencyName=a),ht())};window.updateManualPaymentCountry=function(e,t){const a=window._manualPaymentAccounts[e];if(!a)return;const i=_e.find(s=>s.code===t);a.country_code=t,a.country=i?.name||"",a.flag=i?.flag||Ct(t),ht(),renderManualPaymentAccountsEditor()};async function Xe(){const e=document.getElementById("content");e&&(e.innerHTML=ue());try{const{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),i={...Oa()||{},...t||{}};window._manualPaymentAccounts=Ua(i).map(s=>({...s})),e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white">Payment Settings</h2>
          <div class="flex items-center gap-2 flex-wrap">
            ${i.payment_gateway?`<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Active: ${d(i.payment_gateway)}</span>`:'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Not configured</span>'}
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
                <textarea class="input-field" name="manual_payment_instructions" rows="4" placeholder="Explain how customers should pay and upload their receipt.">${d(qa(i))}</textarea>
              </div>
              <div>
                <label class="lbl">ATM Transfer Instructions (optional, shown separately)</label>
                <textarea class="input-field" name="atm_transfer_instructions" rows="3" placeholder="Optional ATM-specific instructions.">${d(i.atm_transfer_instructions||"")}</textarea>
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
                <div><label class="lbl">Redirect URL (after payment)</label><input class="input-field" name="flutterwave_redirect_url" value="${d(i.flutterwave_redirect_url||"")}" placeholder="${window.location.origin}/payment.html"></div>
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
      </div>`,renderManualPaymentAccountsEditor(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.savePaymentSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=["flutterwave_public_key","flutterwave_secret_key","flutterwave_encryption_key","flutterwave_webhook_secret"],s={};for(const[m,h]of Object.entries(a))i.includes(m)?h&&!h.startsWith("••••")&&h.trim()!==""&&(s[m]=h.trim()):s[m]=h;s.manual_payment_enabled=a.manual_payment_enabled==="on",s.flutterwave_enabled=a.flutterwave_enabled==="on";let r=[];try{r=JSON.parse(a.manual_payment_accounts_json||"[]")}catch{}s.manual_payment_accounts=r;const n=r[0]||{},o=r[1]||{};s.bank1_account_name=n.beneficiary||"",s.bank1_account_number=n.accountNumber||"",s.bank1_bank_name=n.bankName||"",s.bank1_transfer_type=n.transferType||"",s.bank1_sort_code=n.sortCode||n.routing||"",s.bank1_currency=n.currency||"USD",s.bank2_account_name=o.beneficiary||"",s.bank2_account_number=o.accountNumber||"",s.bank2_bank_name=o.bankName||"",s.bank2_transfer_type=o.transferType||"",s.bank2_sort_code=o.sortCode||o.routing||"",s.bank2_currency=o.currency||"USD",Fa(s);const{data:l}=await p.from("site_settings").select("id").limit(1).maybeSingle();let c;if(l?.id?{error:c}=await p.from("site_settings").update(s).eq("id",l.id):{error:c}=await p.from("site_settings").insert(s),c){const m=String(c.message||"");if(/manual_payment_accounts|column|schema cache/i.test(m)){u("Payment settings saved locally. Run the latest migration to persist them to Supabase.","info"),console.warn(c),setTimeout(()=>Xe(),500);return}u("Save failed: "+c.message,"error"),console.error(c);return}u("✅ Payment settings saved successfully!","success"),setTimeout(()=>Xe(),500)};window.testFlutterwaveKeys=async function(){const{data:e}=await p.from("site_settings").select("flutterwave_public_key").limit(1).maybeSingle();if(!e?.flutterwave_public_key){u("Save your Flutterwave public key first","info");return}u("Flutterwave key is saved. Use test mode + test card to verify a payment flow.","info")};async function Re(){const e=document.getElementById("content");try{const{data:t}=await p.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white">Publish & Deploy</h2>

        <!-- Status Bar -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 flex flex-wrap items-center gap-4">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${a.github_repo?"bg-emerald-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${a.github_repo?"text-emerald-400":"text-gray-500"}">${a.github_repo?"GitHub Connected: "+d(a.github_repo):"GitHub Not Connected"}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${a.deploy_webhook?"bg-blue-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${a.deploy_webhook?"text-blue-400":"text-gray-500"}">${a.deploy_webhook?"Deploy Webhook Set":"No Webhook"}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${a.payment_gateway?"bg-amber-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${a.payment_gateway?"text-amber-400":"text-gray-500"}">${a.payment_gateway?"Payment: "+d(a.payment_gateway):"Payment Not Configured"}</span>
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
                <input class="input-field" name="github_username" value="${d(a.github_username||"")}" placeholder="your-github-username">
              </div>
              <div>
                <label class="lbl">Repository Name</label>
                <input class="input-field" name="github_repo" value="${d(a.github_repo||"")}" placeholder="my-website-repo">
              </div>
              <div>
                <label class="lbl">Branch</label>
                <input class="input-field" name="github_branch" value="${d(a.github_branch||"main")}" placeholder="main">
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
              <input class="input-field" name="deploy_webhook" value="${d(a.deploy_webhook||"")}" placeholder="https://api.netlify.com/build_hooks/…">
              <p class="text-[10px] text-gray-500 mt-1">Netlify: Site Settings → Build hooks · Vercel: Project → Settings → Git → Deploy Hooks</p>
            </div>
            <div>
              <label class="lbl">Production URL</label>
              <input class="input-field" name="production_url" value="${d(a.production_url||"")}" placeholder="https://yoursite.com">
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.saveDeploySettings=async function(e){e.preventDefault();const t=e.target?.querySelector("[type=submit]");t&&(t.disabled=!0,t.innerHTML="Saving…");const a=new FormData(e.target),i=Object.fromEntries(a.entries()),s={},r=["github_token","payment_public_key","payment_secret_key","payment_webhook_secret"];for(const[o,l]of Object.entries(i))r.includes(o)?l&&!l.startsWith("•")&&l.trim()!==""&&(s[o]=l.trim()):s[o]=l;const{error:n}=await p.from("site_settings").upsert({id:1,...s});if(t&&(t.disabled=!1,t.innerHTML="💾 Save Deploy & Payment Settings"),n){u(n.message,"error");return}u("Deploy & payment settings saved!"),Re()};async function Ca(e="deploy"){const{data:t}=await p.from("site_settings").select("deploy_webhook,production_url,github_repo").limit(1).maybeSingle();if(!t?.deploy_webhook)return u("No webhook URL set. Add your deploy webhook in the settings below.","info"),{ok:!1,reason:"missing_webhook"};let a=t.deploy_webhook;try{const i=new URL(a);e==="rebuild"&&i.searchParams.set("rebuild","1"),a=i.toString()}catch{e==="rebuild"&&(a+=(a.includes("?")?"&":"?")+"rebuild=1")}return{ok:!0,settings:t,hookUrl:a}}async function K(e,t={}){const a=t.version||new Date().toISOString(),i={source:"admin-dashboard",mode:t.mode||"deploy",production_url:t.productionUrl||null,github_repo:t.githubRepo||null,webhook:t.webhook||null,message:t.message||null},{data:s,error:r}=await p.from("deployment_history").insert({version:a,status:e,triggered_by_email:k.user?.email||null,metadata:i,error_message:t.errorMessage||null}).select("id").limit(1).maybeSingle();return{data:s,error:r}}function ie(e,t,a,i){if(!e)return;e.disabled=t;const s=e.querySelector("p.text-xs.font-black");s&&(s.textContent=t?a:i)}window.triggerDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-deploy-btn]");ie(t,!0,"Deploying…","Deploy Now");try{const a=await Ca("deploy");if(!a.ok)return;const{settings:i,hookUrl:s}=a;await K("preparing",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,message:"Deployment queued from admin UI"});const r=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"deploy",source:"admin-dashboard",at:new Date().toISOString()})});if(r.ok)u("🚀 Deployment triggered! Your site will be live in ~2 minutes."),await K("deploying",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,message:"Webhook accepted deployment request"}),setTimeout(()=>Re(),400);else{const n=`Webhook returned error: ${r.status}`;u(n,"error"),await K("failed",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,errorMessage:n})}}catch(a){u("Deploy failed: "+a.message,"error"),await K("failed",{mode:"deploy",errorMessage:a.message})}finally{ie(t,!1,"Deploying…","Deploy Now")}};window.triggerRebuild=async function(e){const t=e?.currentTarget||document.querySelector("[data-rebuild-btn]");ie(t,!0,"Rebuilding…","Rebuild Site");try{const a=await Ca("rebuild");if(!a.ok)return;const{settings:i,hookUrl:s}=a;await K("building",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,message:"Rebuild requested from admin UI"});const r=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"rebuild",source:"admin-dashboard",at:new Date().toISOString()})});if(r.ok)u("🔄 Rebuild triggered successfully."),await K("deploying",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,message:"Webhook accepted rebuild request"}),setTimeout(()=>Re(),400);else{const n=`Rebuild webhook error: ${r.status}`;u(n,"error"),await K("failed",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:s,errorMessage:n})}}catch(a){u("Rebuild failed: "+a.message,"error"),await K("failed",{mode:"rebuild",errorMessage:a.message})}finally{ie(t,!1,"Rebuilding…","Rebuild Site")}};window.publishAndDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-publish-easy-btn]");ie(t,!0,"Publishing…","One-Click Publish");try{const a=document.getElementById("deploy-form");if(!a){u("Deploy form is not available. Reload and try again.","error");return}await window.saveDeploySettings({preventDefault(){},target:a}),await window.triggerDeploy()}catch(a){u("Publish failed: "+a.message,"error")}finally{ie(t,!1,"Publishing…","One-Click Publish")}};window.reindexSearch=async function(){const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=t?.textContent||"";t&&(t.textContent="Reindexing…");try{const{data:i,error:s}=await p.from("showroom_listings").select("id, updated_at").order("updated_at",{ascending:!1});if(s)return D(s)?u("⚠️ Reindex blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):u("Could not load listings to reindex: "+s.message,"error");const r=i||[];if(!r.length){u("No listings to reindex.");return}let n=0,o=0,l=!1;const c=40;for(let m=0;m<r.length;m+=c){const h=r.slice(m,m+c),{error:b}=await p.from("showroom_listings").update({updated_at:new Date().toISOString()}).in("id",h.map(f=>f.id));b?(D(b)&&(l=!0),o+=h.length):n+=h.length,t&&(t.textContent=`Reindexing… ${Math.min(m+c,r.length)}/${r.length}`)}if(l){u(`⚠️ Reindex partially blocked: database admin role rejected some writes. Re-run the admin permission migration. (${n}/${r.length} done)`,"error");return}u(`Search index rebuilt for ${n} listing${n!==1?"s":""}${o?` (${o} failed)`:""}.`,o?"error":"success")}catch(i){u("Reindex failed: "+i.message,"error")}finally{t&&(t.textContent=a)}};window.syncShowroomToDB=async function(){if(!Array.isArray(U)||!U.length){u("No static showroom listings found to sync.","info");return}const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=t?.textContent||"";t&&(t.textContent="Syncing…");try{const{data:i,error:s}=await p.from("showroom_listings").select("property_id");if(s)return D(s)?u("⚠️ Sync blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):u("Could not load existing listings: "+s.message,"error");const r=new Set((i||[]).map(h=>h.property_id)),n=U.filter(h=>h&&h.property_id&&!r.has(h.property_id));if(!n.length){u("Showroom already in sync — no new listings to add.");return}let o=0,l=0,c=!1;const m=20;for(let h=0;h<n.length;h+=m){const b=n.slice(h,h+m).map(g=>({property_id:g.property_id,listing_type:g.listing_type||"product",category:g.category||null,subcategory:g.subcategory||null,title:g.title||"Untitled Listing",description:g.description||"",price:parseFloat(g.price)||0,currency:g.currency||"USD",country:g.country||"",country_code:g.country_code||"",state:g.state||"",city:g.city||"",town:g.town||"",product_location:g.product_location||"",latitude:g.latitude??null,longitude:g.longitude??null,property_type:g.property_type||null,listing_status:g.listing_status||"sale",bedrooms:g.bedrooms??null,bathrooms:g.bathrooms??null,building_size:g.building_size||"",land_size:g.land_size||"",parking_spaces:g.parking_spaces??null,furnished:g.furnished||"",features:Array.isArray(g.features)?g.features:[],tags:Array.isArray(g.tags)?g.tags:[],highlights:Array.isArray(g.highlights)?g.highlights:[],seo_keywords:Array.isArray(g.seo_keywords)?g.seo_keywords:[],images:Array.isArray(g.images)?g.images:[],brand:g.brand||null,color:g.color||null,size:g.size||null,condition:g.condition||null,warranty:g.warranty||null,availability_status:g.availability_status||"In Stock",stock_quantity:g.stock_quantity!=null?parseInt(g.stock_quantity,10):null,is_active:g.is_active!==!1,is_featured:!!g.is_featured,is_ai_generated:!!g.is_ai_generated,ai_generated_fields:Array.isArray(g.ai_generated_fields)?g.ai_generated_fields:[],specifications:g.specifications||{},created_at:g.created_at||new Date().toISOString()})),{error:f}=await p.from("showroom_listings").insert(b);f?(D(f)&&(c=!0),l+=b.length):o+=b.length,t&&(t.textContent=`Syncing… ${Math.min(h+m,n.length)}/${n.length}`)}if(c){u(`⚠️ Sync partially blocked: database admin role rejected some inserts. Re-run the admin permission migration. (${o}/${n.length} added)`,"error");return}u(`Showroom synced: ${o} new listing${o!==1?"s":""} added to the database${l?` (${l} failed)`:""}.`,l?"error":"success")}catch(i){u("Sync failed: "+i.message,"error")}finally{t&&(t.textContent=a)}};window.testGitHubConnection=async function(){const e=document.querySelector("[name=github_username]")?.value?.trim(),t=document.querySelector("[name=github_repo]")?.value?.trim();if(!e||!t){u("Enter your GitHub username and repo name first","info");return}try{const a=await fetch(`https://api.github.com/repos/${e}/${t}`);if(a.ok){const i=await a.json();u(`✓ Connected: ${i.full_name} (${i.visibility})`)}else a.status===404?u("Repository not found. Check username and repo name.","error"):u("GitHub API error: "+a.status,"error")}catch{u("Could not reach GitHub API","error")}};window.deployToProduction=window.triggerDeploy;window.rebuildSite=window.triggerRebuild;const de=30,E={category:null,page:0,query:""};async function le(){const e=document.getElementById("content");if(!e)return;await Ja();const t=new Set(Bt()),a=Wa();E.category||(E.category=a[0]?.slug||null);const i=Tt(E.category),s=i?i.count:0,r=E.query.trim().toLowerCase(),n=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-xl font-black text-white">Generated Catalog</h2>
        <p class="text-xs text-gray-500 mt-1">Deterministic storefront items. Hiding a listing removes it from the site everywhere — including direct links.</p>
      </div>
      <button onclick="catalogResetHidden()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition">Show All Hidden</button>
    </div>`,o=`
    <div class="flex flex-wrap gap-2">
      ${a.map(f=>`<button onclick="catalogSetCategory('${f.slug}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${E.category===f.slug?"bg-blue-500/20 text-blue-200 border-blue-500/40":"bg-white/5 text-gray-400 border-white/10 hover:text-white"}">${d(f.name)}</button>`).join("")}
    </div>`,l=`
    <div class="flex flex-wrap items-center gap-2">
      <input id="catalog-search-input" class="input-field flex-1 min-w-[220px]" placeholder="Search title, id or subcategory…" value="${d(E.query)}" onkeyup="if (event.key === 'Enter') catalogSearch()">
      <button onclick="catalogSearch()" class="btn-press px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition">Search</button>
    </div>`;let c=[];if(i)if(r){const f=Math.min(s,8e3);for(let g=0;g<f&&c.length<de;g++){const v=_t(i.slug,g);if(!v)continue;`${v.property_id} ${v.title} ${v.subcategory||""} ${v.category||""}`.toLowerCase().includes(r)&&c.push(v)}}else{const f=E.page*de,g=Math.min(f+de,s);for(let v=f;v<g;v++){const $=_t(i.slug,v);$&&c.push($)}}const m=c.length?c.map(f=>{const g=t.has(f.property_id),v=f.images&&f.images[0]||"/fallback.svg";return`
          <div class="flex items-center gap-3 p-3 rounded-xl border ${g?"border-red-500/25 bg-red-500/5":"border-white/10 bg-white/[0.02]"}">
            <img src="${d(v)}" alt="" class="w-12 h-12 rounded-lg object-cover bg-gray-800 shrink-0" loading="lazy">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-white truncate">${d(f.title)}</p>
              <p class="text-[11px] text-gray-500 truncate">${d(f.property_id)} · ${d(f.subcategory||f.category||"")} · ${qt(f.price,"USD")}</p>
            </div>
            ${R(!g)}
            <button onclick="catalogToggle('${d(f.property_id)}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${g?"bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25":"bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20"}">
              ${g?"Show":"Hide"}
            </button>
          </div>`}).join(""):'<div class="text-center py-16 text-gray-500 text-sm">No catalog items match.</div>',h=r?1:Math.max(1,Math.ceil(s/de)),b=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <p class="text-xs text-gray-500">${r?`${c.length} match`:`${s.toLocaleString()} items in ${d(i?.name||"")}`} · ${t.size} hidden</p>
      <div class="flex items-center gap-2">
        <button onclick="catalogPage(-1)" ${E.page<=0?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Prev</button>
        <span class="text-xs text-gray-500">Page ${E.page+1} / ${h}</span>
        <button onclick="catalogPage(1)" ${E.page>=h-1?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Next</button>
      </div>
    </div>`;e.innerHTML=`
    <div class="space-y-4 fade-in">
      ${n}
      ${o}
      ${l}
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 space-y-2">${m}</div>
      ${b}
    </div>`,window.lucide&&lucide.createIcons()}window.catalogSetCategory=function(e){E.category=e,E.page=0,E.query="",le()};window.catalogSearch=function(){const e=document.getElementById("catalog-search-input");E.query=e?e.value:"",E.page=0,le()};window.catalogPage=function(e){const t=Tt(E.category),a=t?t.count:0,i=E.query.trim()?1:Math.max(1,Math.ceil(a/de));E.page=Math.max(0,Math.min(i-1,E.page+e)),le()};window.catalogToggle=async function(e){const t=!Bt().includes(e),a=await Va(e,t);u(t?"Listing hidden from storefront":"Listing restored",a.ok?"success":"info"),le()};window.catalogResetHidden=async function(){await Ka(),u("All hidden catalog listings restored"),le()};async function It(){window.lucide&&lucide.createIcons(),Nt(),await bi(),p.auth.onAuthStateChange((e,t)=>{if(e==="SIGNED_OUT"){k.user=null;const a=document.getElementById("login-screen");a&&(a.style.display="flex")}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",It):It();window.aiChatHistory=[];window.aiProductType="product";async function Ts(){const e=document.getElementById("ai-prompt")?.value?.trim(),t=document.getElementById("ai-product-type")?.value||"product",a=document.getElementById("ai-image-upload")?.files[0];if(!e&&!a){u("Please enter a prompt or upload an image");return}window.aiChatHistory.push({type:"user",sender:"You",content:e||"Uploaded image"}),Ht();const i=document.getElementById("ai-prompt");i&&(i.value=""),u("AI is analyzing...");try{let s=null;a&&(s=await fileToDataUrl(a));const r={action:"generate_product",prompt:e||"Create a product listing",product_type:t,image:s,catalog_context:await Bs()},o=await(await fetch(AI_FUNCTION_URL,{method:"POST",headers:await getAuthHeaders(),body:JSON.stringify(r)})).json();o.success&&o.product?(openListingReviewCard(o.product,{source:"ai_general"}),u("Product generated! Review before saving.")):u(o.error||"AI generation failed")}catch(s){u("Error: "+s.message),console.error("[AI] Generate product error:",s)}}async function Bs(){try{const{data:e}=await p.from("showroom_listings").select("*").neq("listing_type","property").limit(20);return e||[]}catch{return[]}}document.getElementById("ai-prompt")?.addEventListener("keypress",function(e){e.key==="Enter"&&Ts()});
