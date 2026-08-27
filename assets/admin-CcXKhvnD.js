import{w as m,i as ie,E as ba,V as pi,z as mi,_ as gi}from"./supabase-client-DvCmNkpI-BBtcpOs0.js";import{E as Ee,C as bi,v as yi,D as hi}from"./localization-B_HxL1KQ-Do35V_4n.js";import{listLocalShowroomListings as tt,patchLocalShowroomListing as vt,getLocalShowroomListingById as Ne,removeLocalShowroomListing as fi,upsertLocalShowroomListing as xt}from"./local-showroom-store-mzP0nSoS-DaE1u71h.js";import{f as ya,C as vi,I as xi,S as wi,_ as _i}from"./payment-settings-DAIw4D2k-BaImmvy0.js";import{P as ha,a as fa,T as va,M as xa}from"./motorhome-data-CupbOvk0--c7gbSNU.js";import{getCatalogCategories as ki}from"./catalog-qysuyAKK-CoyDMFKy.js";import{g as $i}from"./app-promo-banner-VTpzwpvR-CiDTzVNv.js";import{i as Si,t as Pi,m as Ei}from"./categories-BEuiwWw5-Dd8DYwb8.js";import{loadHiddenCatalogIds as Dt,getHiddenCatalogIds as at,saveCatalogHidden as wa,resetHiddenCatalogIds as Ii}from"./catalog-hidden-store-BAMgfUuU-D15H80aw.js";const H=1,X=5e6,Ai=[{id:"prod-smartphone",listingType:"product",category:"Phones",subcategory:"Smartphones",label:"Flagship Smartphone",brand:"Global Mobile",model:"X Pro",color:"Midnight Black",size:"6.7-inch",condition:"New",features:["5G connectivity","OLED display","Fast charging","Unlocked","Premium cameras"],highlights:["Retail-ready packaging","Strong search demand","Ideal for global shipping"],keywords:["smartphone","mobile phone","5g"],descriptionType:"phone"},{id:"prod-laptop",listingType:"product",category:"Computers & Laptops",subcategory:"Laptops",label:"Performance Laptop",brand:"NorthBridge",model:"Studio 14",color:"Silver",size:"14-inch",condition:"New",features:["Fast processor","SSD storage","Long battery life","Portable chassis","Business-ready design"],highlights:["Suitable for work and study","Premium margin band","Global audience appeal"],keywords:["laptop","notebook","computer"],descriptionType:"laptop"},{id:"prod-tv",listingType:"product",category:"Electronics",subcategory:"Smart TVs",label:"4K Smart TV",brand:"VistaHome",model:"UltraView",color:"Black",size:"65-inch",condition:"New",features:["4K panel","Streaming apps","HDR support","Voice control","Slim bezel"],highlights:["Living-room centerpiece","Popular premium electronics segment"],keywords:["tv","smart tv","home electronics"],descriptionType:"electronics"},{id:"prod-watch",listingType:"product",category:"Watches",subcategory:"Luxury Watches",label:"Luxury Wristwatch",brand:"Aurelius",model:"Chrono 8",color:"Gold / Black",size:"42mm",condition:"New",features:["Precision movement","Premium case","Gift-ready presentation","Water resistance","Collector appeal"],highlights:["High perceived value","Strong gifting category"],keywords:["watch","luxury watch","timepiece"],descriptionType:"luxury"},{id:"prod-jewelry",listingType:"product",category:"Jewelry",subcategory:"Fine Jewelry",label:"Fine Jewelry Set",brand:"Maison Valeur",model:"Signature Set",color:"Gold",size:"Adjustable",condition:"New",features:["Premium finish","Gift packaging","Occasion-ready","Elegant styling"],highlights:["High-value presentation","Wedding and celebration demand"],keywords:["jewelry","necklace","bracelet"],descriptionType:"luxury"},{id:"prod-handbag",listingType:"product",category:"Bags & Accessories",subcategory:"Designer Bags",label:"Designer Handbag",brand:"Rue Maison",model:"Carry All",color:"Tan",size:"Medium",condition:"New",features:["Structured silhouette","Premium hardware","Travel-friendly storage","Retail-ready finish"],highlights:["Fashion-forward listing","Broad international demand"],keywords:["handbag","designer bag","accessories"],descriptionType:"fashion"},{id:"prod-sneakers",listingType:"product",category:"Shoes",subcategory:"Premium Sneakers",label:"Premium Sneakers",brand:"RunNorth",model:"Air Flex",color:"White",size:"EU 42",condition:"New",features:["Comfort cushioning","Streetwear styling","Durable outsole","Daily wear ready"],highlights:["High-conversion category","Easy multi-country merchandising"],keywords:["sneakers","shoes","fashion"],descriptionType:"fashion"},{id:"prod-sofa",listingType:"product",category:"Furniture",subcategory:"Living Room",label:"Luxury Sofa Set",brand:"Grand Habitat",model:"Residence 3-Piece",color:"Sand Beige",size:"3-Piece Set",condition:"New",features:["Premium upholstery","Statement living-room piece","Comfort seating","Interior-ready styling"],highlights:["Large-ticket home category","Ideal for premium households"],keywords:["sofa","furniture","living room"],descriptionType:"home"},{id:"prod-generator",listingType:"product",category:"Home & Kitchen",subcategory:"Power Solutions",label:"Backup Power Generator",brand:"VoltWorks",model:"SilentMax",color:"Graphite",size:"7.5kVA",condition:"New",features:["Reliable backup power","Low-noise housing","Residential and business use","Heavy-duty build"],highlights:["Practical high-demand utility item","Useful in many markets"],keywords:["generator","power","backup power"],descriptionType:"industrial"},{id:"prod-drone",listingType:"product",category:"Cameras & Photography",subcategory:"Drones",label:"Pro Camera Drone",brand:"SkyFrame",model:"Aerial 4K",color:"Gray",size:"Foldable",condition:"New",features:["4K stabilized video","GPS return home","Portable folding frame","Creator-ready footage"],highlights:["Strong visual listing appeal","Premium creator equipment"],keywords:["drone","camera drone","aerial"],descriptionType:"electronics"},{id:"prod-grocery",listingType:"product",category:"Food & Groceries",subcategory:"Family Essentials",label:"Family Grocery Bundle",brand:"Market Select",model:"Household Pack",color:"Mixed",size:"Bulk Pack",condition:"New",features:["Everyday essentials","Bulk value","Family sized","Easy repeat orders"],highlights:["Fast-moving everyday goods","Useful across broad regions"],keywords:["groceries","food bundle","household essentials"],descriptionType:"daily"},{id:"prod-scale-house",listingType:"product",category:"Home & Kitchen",subcategory:"Model Houses",label:"Architectural Model House",brand:"Studio Form",model:"Estate Miniature",color:"Natural Wood",size:"1:50 Scale",condition:"New",features:["Collector display piece","Detailed craftsmanship","Interior decor appeal","Gift-ready packaging"],highlights:["Supports the model-house use case","Works for decor and collector audiences"],keywords:["model house","architectural model","collector decor"],descriptionType:"home"},{id:"veh-sedan",listingType:"product",category:"Cars",subcategory:"Sedans",label:"Executive Sedan",brand:"Summit Motors",model:"S Line",color:"Pearl White",size:"Mid-size",condition:"Used - Like New",features:["Comfortable cabin","Road-trip ready","Well-maintained presentation","Family and executive appeal"],highlights:["Vehicle posts support 24-image galleries","Map-ready listing"],keywords:["car","sedan","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-suv",listingType:"product",category:"Cars",subcategory:"SUVs",label:"Family SUV",brand:"Frontier Auto",model:"Terrain X",color:"Obsidian",size:"7-Seater",condition:"Used - Like New",features:["Spacious seating","Utility-focused cargo room","Suitable for families","Road and city versatility"],highlights:["High-demand automotive segment","Works well with showroom map"],keywords:["suv","family car","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-luxury",listingType:"product",category:"Luxury Cars",subcategory:"Luxury Vehicles",label:"Luxury Performance Car",brand:"Regal Automotive",model:"Imperium GT",color:"Metallic Black",size:"Coupe",condition:"Used - Like New",features:["Prestige brand positioning","Performance styling","Collector-level appeal","Premium interior"],highlights:["Supports the requested high-ticket range","Designed for showroom-style luxury listings"],keywords:["luxury car","sports car","supercar"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-motorcycle",listingType:"product",category:"Motorcycles",subcategory:"Street Bikes",label:"Sport Motorcycle",brand:"Velocity Moto",model:"R 900",color:"Red",size:"900cc",condition:"Used - Like New",features:["Agile handling","Performance design","Lifestyle buyer appeal","Weekend-ready machine"],highlights:["Automotive category with image-rich display"],keywords:["motorcycle","bike","sport bike"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-commercial",listingType:"product",category:"Commercial Vehicles",subcategory:"Utility Vehicles",label:"Commercial Utility Vehicle",brand:"FleetCore",model:"CargoPro",color:"White",size:"Long wheelbase",condition:"Used - Good",features:["Business-ready load space","Fleet-friendly purchase","Service history presentation","Commercial utility"],highlights:["Suitable for business buyers","Map-ready logistics listing"],keywords:["commercial vehicle","cargo van","fleet"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-boat",listingType:"product",category:"Boats & Marine",subcategory:"Leisure Boats",label:"Leisure Boat",brand:"BlueHarbor",model:"Coastline 28",color:"Navy / White",size:"28 ft",condition:"Used - Like New",features:["Marina-ready presentation","Leisure and charter appeal","Premium leisure category"],highlights:["Large-format gallery support","High-ticket recreational listing"],keywords:["boat","marine","yacht"],requiredImageCount:24,descriptionType:"vehicle"}],Ci=[{id:"prop-apartment",listingType:"property",category:"Real Estate",subcategory:"Apartments",label:"City Apartment",propertyType:"Apartment",bedrooms:2,bathrooms:2,buildingSize:"1,150 sqft",landSize:"",furnished:"Furnished",features:["Secure access","Modern kitchen","Prime urban access","Balcony or city views"],highlights:["Strong urban demand","Good for short and long stay buyers"],keywords:["apartment","real estate","city home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-condo",listingType:"property",category:"Real Estate",subcategory:"Condos",label:"Modern Condo",propertyType:"Condo",bedrooms:3,bathrooms:2,buildingSize:"1,450 sqft",landSize:"",furnished:"Furnished",features:["Managed building","Amenity access","Contemporary finish","Secure parking"],highlights:["Works across major global markets"],keywords:["condo","property","home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-townhouse",listingType:"property",category:"Real Estate",subcategory:"Townhouses",label:"Townhouse Residence",propertyType:"Townhouse",bedrooms:4,bathrooms:3,buildingSize:"2,000 sqft",landSize:"0.08 acres",furnished:"Unfurnished",features:["Multi-level layout","Family-ready plan","Private entry","Parking included"],highlights:["Popular residential ownership format"],keywords:["townhouse","residence","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-villa",listingType:"property",category:"Real Estate",subcategory:"Villas",label:"Private Villa",propertyType:"Villa",bedrooms:5,bathrooms:5,buildingSize:"4,800 sqft",landSize:"0.4 acres",furnished:"Furnished",features:["Private outdoor space","Premium architecture","Luxury entertaining zones","Prestige location potential"],highlights:["Premium property tier","Designed for international buyers"],keywords:["villa","luxury property","real estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-mansion",listingType:"property",category:"Real Estate",subcategory:"Mansions",label:"Luxury Mansion",propertyType:"Mansion",bedrooms:8,bathrooms:10,buildingSize:"12,000 sqft",landSize:"1.2 acres",furnished:"Furnished",features:["Grand entrance","High-end interior finishes","Staff or guest quarters","Statement curb appeal"],highlights:["Matches the mansion requirement directly","Supports high-ticket luxury listings"],keywords:["mansion","estate","luxury home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-beach",listingType:"property",category:"Real Estate",subcategory:"Beach Houses",label:"Beachfront House",propertyType:"Beach House",bedrooms:4,bathrooms:4,buildingSize:"3,600 sqft",landSize:"0.25 acres",furnished:"Furnished",features:["Waterfront views","Outdoor leisure space","Vacation-rental appeal","Premium lifestyle positioning"],highlights:["Ideal for tourism and lifestyle markets"],keywords:["beach house","waterfront home","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-farm",listingType:"property",category:"Real Estate",subcategory:"Farm Houses",label:"Farm House Estate",propertyType:"Farm House",bedrooms:4,bathrooms:3,buildingSize:"3,100 sqft",landSize:"5 acres",furnished:"Unfurnished",features:["Land-rich asset","Agricultural potential","Quiet residential use","Outbuilding opportunity"],highlights:["Suitable for rural and suburban regions"],keywords:["farm house","landed property","estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-commercial",listingType:"property",category:"Real Estate",subcategory:"Commercial Buildings",label:"Commercial Building",propertyType:"Commercial Building",bedrooms:0,bathrooms:4,buildingSize:"8,500 sqft",landSize:"0.35 acres",furnished:"Unfurnished",features:["Business district potential","Mixed-use flexibility","Visible frontage","Investor-ready asset class"],highlights:["Attractive for business buyers and investors"],keywords:["commercial building","office","investment property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-hotel",listingType:"property",category:"Real Estate",subcategory:"Hotels",label:"Boutique Hotel",propertyType:"Hotel",bedrooms:18,bathrooms:20,buildingSize:"15,000 sqft",landSize:"0.75 acres",furnished:"Furnished",features:["Hospitality-ready layout","Guest-focused amenities","Tourism and corporate appeal","Revenue asset potential"],highlights:["Supports hospitality listings globally"],keywords:["hotel","hospitality","investment"],requiredImageCount:24,descriptionType:"property"},{id:"prop-land",listingType:"property",category:"Real Estate",subcategory:"Land",label:"Development Land",propertyType:"Land",bedrooms:0,bathrooms:0,buildingSize:"",landSize:"10 acres",furnished:"",features:["Development potential","Flexible use case","Long-term investment appeal","Location-led value"],highlights:["Useful for land banking and development"],keywords:["land","plot","development"],requiredImageCount:24,descriptionType:"property"}],_a=[...Ai,...Ci];function Rt(e){return bi[e]||"USD"}function ka(e,a){return _a.filter(t=>t.listingType!==e?!1:a?t.category===a:!0)}function Ti(e,a){const t=Math.max(H,Math.min(X,Number(e)||H));return new Intl.NumberFormat("en-US",{style:"currency",currency:a,maximumFractionDigits:0}).format(t)}function Li(e,a,t,i,o){const n=Ti(i,t);return e.descriptionType==="vehicle"?`${e.label} listed at ${n}. This template is intended to present a complete automotive post with exterior, interior, condition, performance, and gallery details in a clean showroom-style format.`:e.descriptionType==="property"?`${e.label} located in ${o}. Offered at ${n}, this property template is designed for a complete real-estate presentation with map-ready location data, rich visual gallery coverage, and buyer-friendly highlights covering layout, lifestyle, and investment value.`:e.descriptionType==="phone"?`${e.label} listed at ${n}. The template focuses on a clean premium device presentation with brand, model, condition, core features, and strong online merchandising copy.`:e.descriptionType==="laptop"?`${e.label} listed at ${n}. Built for marketplace listings that need clear performance positioning, specification highlights, and an easy-to-scan description for students, professionals, and remote workers.`:e.descriptionType==="luxury"?`${e.label} listed at ${n}. This template supports high-value presentation with polished positioning, premium selling points, and a strong showroom-style description.`:e.descriptionType==="fashion"?`${e.label} listed at ${n}. This product template highlights styling, quality, and day-to-day appeal while keeping the listing easy to customize.`:e.descriptionType==="home"?`${e.label} listed at ${n}. The listing copy is structured for shoppers looking for quality presentation, reliable detail, and visual merchandising support.`:e.descriptionType==="industrial"?`${e.label} listed at ${n}. This template emphasizes practical use, dependable performance, and business or household value in a straightforward format.`:e.descriptionType==="daily"?`${e.label} listed at ${n}. The copy is designed for repeat-buy categories with clear value messaging and broad buyer appeal.`:`${e.label} listed at ${n}. This template generates a clean, marketable listing with ready-made highlights, keywords, and presentation details.`}function $a({templateId:e,listingType:a,category:t,countryCode:i,currency:o,price:n}){const r=_a.find(g=>g.id===e&&g.listingType===a);if(!r)return null;const l=yi(i)||Ee[0],d=o||Rt(l.code),c=[l.name].filter(Boolean).join(", "),u={category:r.category||t||(a==="property"?"Real Estate":"Other"),subcategory:r.subcategory||r.label,title:a==="property"?`${r.label} in ${l.name}`:r.label,description:Li(r,l,d,n,c),currency:d,features:[...r.features],highlights:[...r.highlights||[]],seo_keywords:[...new Set([r.category,r.subcategory,r.label,...a==="property"?[l.name]:[],...r.keywords||[]].filter(Boolean))],requiredImageCount:r.requiredImageCount||0};return a==="property"?{...u,country:l.name,country_code:l.code,product_location:l.name,property_type:r.propertyType||r.label,bedrooms:r.bedrooms??null,bathrooms:r.bathrooms??null,building_size:r.buildingSize||"",land_size:r.landSize||"",furnished:r.furnished||""}:{...u,brand:r.brand||"",model:r.model||"",color:r.color||"",size:r.size||"",condition:r.condition||"New"}}let yt=null;async function Bi(){return yt||(yt=mi(()=>gi(()=>import("./pdf-ksa_hnld-e4gfyq7P.js"),[]),[]).then(e=>{try{e.GlobalWorkerOptions.workerSrc=new URL("/assets/pdf.worker.min-yatZIOMy-yatZIOMy.mjs",import.meta.url).toString()}catch{}return e})),yt}function Mi(e,a){return e.toDataURL("image/jpeg",a)}async function Ni(e,a){const t=e.getViewport({scale:1}),i=Math.min(3,Math.max(.5,a/Math.max(t.width,t.height))),o=e.getViewport({scale:i}),n=document.createElement("canvas");n.width=Math.max(1,Math.round(o.width)),n.height=Math.max(1,Math.round(o.height));const r=n.getContext("2d",{alpha:!1});return r.fillStyle="#ffffff",r.fillRect(0,0,n.width,n.height),await e.render({canvasContext:r,viewport:o}).promise,Mi(n,.78)}async function Di(e,{maxDim:a=1300,maxPages:t=0,onProgress:i=()=>{}}={}){const o=await(await Bi()).getDocument({url:e,useSystemFonts:!0,isEvalSupported:!1}).promise,n=o.numPages,r=t>0?Math.min(n,t):n,l=[];try{for(let d=1;d<=r;d++){i(d,r);const c=await o.getPage(d);l.push(await Ni(c,a))}}finally{try{await o.destroy()}catch{}}return l}function it(e){const a=String(e||"").toLowerCase();return a.endsWith(".pdf")||a.includes(".pdf?")||a.includes(".pdf#")}const Sa="weverseonlineshop@gmail.com",Pa="Weverse Online Shop",Ea="GLOBAL SHOPPING â€¢ WORLDWIDE DELIVERY",Ri="https://wttnvwpoqmbxryivcerf.supabase.co".replace(/\/$/,""),Fi=`${Ri}/functions/v1/ai-admin-assistant`,qi=[{group:"Main",items:[{id:"dashboard",label:"Dashboard",icon:"layout-dashboard"},{id:"products",label:"Products",icon:"package"},{id:"content-settings",label:"Content Settings",icon:"file-cog"},{id:"properties",label:"Properties",icon:"home"},{id:"catalog",label:"Catalog Manager",icon:"boxes"},{id:"orders",label:"Orders",icon:"shopping-bag"},{id:"customers",label:"Customers",icon:"users"},{id:"reviews",label:"Reviews",icon:"star"},{id:"messages",label:"Messages",icon:"message-circle"},{id:"coupons",label:"Coupons",icon:"ticket"},{id:"ads",label:"Advertisements",icon:"megaphone"},{id:"notifications",label:"Notifications",icon:"bell"}]},{group:"Configuration",items:[{id:"ai",label:"AI Assistant",icon:"sparkles"},{id:"payment-settings",label:"Payment Settings",icon:"credit-card"},{id:"ai-settings",label:"AI Settings",icon:"bot"},{id:"homepage-branding",label:"Homepage Branding",icon:"image"},{id:"promo-bg",label:"Promo & Backgrounds",icon:"image"},{id:"brand",label:"Brand Manager",icon:"palette"},{id:"content",label:"Content Manager",icon:"file-text"},{id:"seo",label:"SEO Manager",icon:"search"},{id:"email",label:"Email Settings",icon:"mail"},{id:"analytics",label:"Analytics",icon:"bar-chart-3"},{id:"security",label:"Security",icon:"shield"},{id:"activity",label:"Activity Logs",icon:"activity"},{id:"backup",label:"Backup & Restore",icon:"database"},{id:"settings",label:"Settings",icon:"settings"},{id:"publish",label:"Publish & Deploy",icon:"rocket"}]}],Ui={dashboard:"Dashboard",products:"Products Manager",properties:"Properties Manager",catalog:"Catalog Manager",orders:"Orders Manager",customers:"Customers Manager",reviews:"Reviews Manager",messages:"Messages & Support",coupons:"Coupons Manager",ads:"Advertisement Manager","ai-settings":"AI Settings",content:"Content Manager","content-settings":"Content Settings",ai:"AI Assistant","homepage-branding":"Homepage Branding","promo-bg":"Promo & Backgrounds",brand:"Brand Manager","payment-settings":"Payment Settings",seo:"SEO Manager",email:"Email Settings",analytics:"Analytics",security:"Security",activity:"Activity Logs",backup:"Backup & Restore",settings:"Settings",publish:"Publish & Deploy"},Ia=[...hi].sort();let B={user:null,section:"dashboard"};function s(e){if(e==null)return"";const a=document.createElement("div");return a.textContent=String(e),a.innerHTML}function Aa(e,a="USD"){return`${(parseFloat(e)||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})} ${a}`}function ne(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"â€”"}function fe(e){return e?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"â€”"}function nt(){return"W-"+String(Date.now()).slice(-6)+Math.floor(Math.random()*1e3).toString().padStart(3,"0")}const ji=["id","property_id","listing_type","category","subcategory","title","description","price","price_period","currency","country","country_code","state","city","town","product_location","latitude","longitude","bedrooms","bathrooms","building_size","land_size","parking_spaces","property_type","furnished","listing_status","images","features","tags","highlights","seo_keywords","specifications","brand","color","size","condition","warranty","shipping_info","delivery_estimate","weight","dimensions","storage_options","ram_options","color_options","availability_status","stock_quantity","sku","is_active","is_featured","is_ai_generated","ai_generated_fields","rating","rating_count","favorite_count","review_count","video","video_url","approval_status","published_at","created_at","updated_at","real_price","year_built","year_renovated","half_bathrooms","floors","garage","zip_code","address","landmarks","interior_features","exterior_features","home_systems","legal_info","risk_notes","floor_plan","nearby_area","verification_status","verification_date","inspection_info","documents","language_info"];function me(e){const a={};if(!e||typeof e!="object")return a;for(const t of ji)t in e&&(a[t]=e[t]);return a}function p(e,a="success"){const t=document.getElementById("toast"),i=document.getElementById("toast-msg"),o=t.querySelector("i[data-lucide]");if(!t||!i)return;i.textContent=e;const n={success:"check-circle",error:"alert-circle",info:"info"},r={success:"text-emerald-400",error:"text-red-400",info:"text-blue-400"};o&&(o.setAttribute("data-lucide",n[a]||"info"),o.className=`w-4 h-4 shrink-0 ${r[a]||"text-blue-400"}`),t.style.transform="translateY(0)",t.style.opacity="1",window.lucide&&lucide.createIcons(),clearTimeout(t._t),t._t=setTimeout(()=>{t.style.transform="translateY(20px)",t.style.opacity="0"},3e3)}function ee(e){const a={pending_verification:["bg-amber-500/10 text-amber-400 border-amber-500/20","Pending"],approved:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Approved"],rejected:["bg-red-500/10 text-red-400 border-red-500/20","Rejected"],payment_approved:["bg-blue-500/10 text-blue-400 border-blue-500/20","Paid"],order_placed:["bg-amber-500/10 text-amber-400 border-amber-500/20","Placed"],processing:["bg-indigo-500/10 text-indigo-400 border-indigo-500/20","Processing"],shipped:["bg-violet-500/10 text-violet-400 border-violet-500/20","Shipped"],in_transit:["bg-violet-500/10 text-violet-400 border-violet-500/20","In Transit"],out_for_delivery:["bg-cyan-500/10 text-cyan-400 border-cyan-500/20","Out for Delivery"],delivered:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Delivered"],cancelled:["bg-red-500/10 text-red-400 border-red-500/20","Cancelled"],active:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],inactive:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"],sale:["bg-blue-500/10 text-blue-400 border-blue-500/20","For Sale"],rent:["bg-violet-500/10 text-violet-400 border-violet-500/20","For Rent"],true:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],false:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"]},[t,i]=a[String(e)]||["bg-gray-500/10 text-gray-400 border-gray-500/20",s(e)||"â€”"];return`<span class="badge ${t}">${i}</span>`}function ce(){document.getElementById("modal-container").innerHTML=""}function W(e){document.getElementById("modal-container").innerHTML=e,window.lucide&&lucide.createIcons()}function K(e,a,t,i,o=""){const n={blue:"bg-blue-500/10 text-blue-400 border-blue-500/15",amber:"bg-amber-500/10 text-amber-400 border-amber-500/15",emerald:"bg-emerald-500/10 text-emerald-400 border-emerald-500/15",red:"bg-red-500/10 text-red-400 border-red-500/15",violet:"bg-violet-500/10 text-violet-400 border-violet-500/15",blue:"bg-blue-500/10 text-blue-400 border-blue-500/15"};return`<div class="stat-card glass-soft border border-blue-500/15 rounded-3xl p-5">
    <div class="flex items-start justify-between mb-3">
      <div class="p-3 ${n[i]||n.blue} rounded-2xl border"><i data-lucide="${t}" class="w-5 h-5"></i></div>
    </div>
    <p class="text-3xl font-black text-white">${s(a)}</p>
    <p class="text-xs text-gray-500 uppercase tracking-wide mt-1 font-bold">${s(e)}</p>
    ${o?`<p class="text-xs text-gray-600 mt-1">${s(o)}</p>`:""}
  </div>`}function Ie(){return'<div class="flex items-center justify-center py-24"><div class="flex items-center gap-3 text-gray-500 text-sm"><i data-lucide="loader-2" class="w-5 h-5 animate-spin text-blue-400"></i> Loadingâ€¦</div></div>'}function ve(e,a,t,i=""){return`<div class="flex flex-col items-center justify-center py-20 text-center"><div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4"><i data-lucide="${e}" class="w-8 h-8 text-blue-400"></i></div><h3 class="text-base font-black text-white mb-1">${s(a)}</h3><p class="text-sm text-gray-500 max-w-xs">${s(t)}</p>${i?`<div class="mt-5">${i}</div>`:""}</div>`}function Ca(){const e=document.getElementById("sidebar-nav");e&&(e.innerHTML=qi.map(a=>`
    <div>
      <span class="section-label">${a.group}</span>
      ${a.items.map(t=>`
        <button class="nav-item ${B.section===t.id?"active":""} w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold rounded-xl" onclick="navigate('${t.id}')">
          <i data-lucide="${t.icon}" class="w-4 h-4 shrink-0"></i>
          <span>${t.label}</span>
        </button>`).join("")}
    </div>`).join(""),window.lucide&&lucide.createIcons())}window.navigate=function(e){B.section=e;const a=Ui[e]||e,t=document.getElementById("page-title");t&&(t.textContent=a),Ca(),closeSidebar();const i=document.getElementById("content");i&&(i.innerHTML=Ie()),window.lucide&&lucide.createIcons(),({dashboard:an,products:O,properties:dt,catalog:Te,orders:Qa,customers:Mn,reviews:Oe,messages:Xa,coupons:ct,ads:Ce,notifications:Rn,ai:Oi,"ai-settings":ai,"homepage-branding":mt,"promo-bg":Fe,content:Gn,"content-settings":oi,seo:Xn,email:Zn,analytics:Qn,security:pt,activity:eo,brand:gt,"payment-settings":Nt,backup:to,settings:ao,publish:bt}[e]||(()=>{const o=document.getElementById("content");o&&(o.innerHTML=ve("construction","Coming Soon",`${a} is being built.`))}))()};async function Oi(){const e=document.getElementById("content");e&&(e.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}window.openSidebar=()=>{document.getElementById("sidebar").classList.add("open"),document.getElementById("sidebar-overlay").classList.remove("hidden")};window.closeSidebar=()=>{document.getElementById("sidebar").classList.remove("open"),document.getElementById("sidebar-overlay").classList.add("hidden")};document.getElementById("close-sidebar")?.addEventListener("click",closeSidebar);const Se="kco_admin_remember",Ft="kco_login_attempts",wt=5,Hi=15*60*1e3;function V(e){const a=document.getElementById("login-error"),t=document.getElementById("login-error-text");!a||!t||(t.textContent=e,a.classList.remove("hidden"),document.getElementById("login-success")?.classList.add("hidden"),window.lucide&&lucide.createIcons())}function Gi(e){const a=document.getElementById("login-success"),t=document.getElementById("login-success-text");!a||!t||(t.textContent=e,a.classList.remove("hidden"),document.getElementById("login-error")?.classList.add("hidden"))}function ot(){document.getElementById("login-error")?.classList.add("hidden"),document.getElementById("login-success")?.classList.add("hidden")}function qe(e){return String(e||"").trim().toLowerCase()}function zi(){try{const e=JSON.parse(localStorage.getItem(Se)||"{}");e?.email&&!qe(e.email)&&localStorage.removeItem(Se)}catch{localStorage.removeItem(Se)}}function Vi(){try{const e=JSON.parse(localStorage.getItem(Se)||"{}");return qe(e?.email)}catch{return""}}function qt(){zi();const e=Vi(),a=document.getElementById("login-email");a&&(a.value=e||a.value||Sa,a.removeAttribute("readonly"));const t=document.getElementById("reset-email");t&&(t.value=e||t.value||"",t.removeAttribute("readonly"))}function Wi(){return`${window.location.origin}/admin.html`}function we(e){const a=document.getElementById("login-header-title"),t=document.getElementById("login-header-icon");document.getElementById("login-form")?.classList.toggle("hidden",e!=="login"),document.getElementById("twofa-form")?.classList.toggle("hidden",e!=="2fa"),document.getElementById("forgot-form")?.classList.toggle("hidden",e!=="forgot"),ot(),e==="login"&&(a&&(a.textContent="Admin Access"),t&&t.setAttribute("data-lucide","shield-check")),e==="2fa"&&(a&&(a.textContent="Two-Factor Auth"),t&&t.setAttribute("data-lucide","smartphone")),e==="forgot"&&(a&&(a.textContent="Reset Password"),t&&t.setAttribute("data-lucide","mail")),window.lucide&&lucide.createIcons()}function z(e,a,t=""){const i=document.getElementById(e);i&&(i.disabled=a,a?i.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline-block mr-1"></i> Please waitâ€¦':t&&(i.innerHTML=t),window.lucide&&lucide.createIcons())}function Ta(){try{return JSON.parse(localStorage.getItem(Ft)||'{"count":0}')}catch{return{count:0}}}function La(){const e=Ta();return e.count=(e.count||0)+1,e.count>=wt&&(e.lockedUntil=Date.now()+Hi),localStorage.setItem(Ft,JSON.stringify(e)),e}function Ba(){localStorage.removeItem(Ft)}function Ma(){const e=Ta();if(!e.lockedUntil)return null;const a=e.lockedUntil-Date.now();return a<=0?(Ba(),null):Math.ceil(a/6e4)}async function le(e,a,t={}){try{await m.from("admin_security_logs").insert({user_id:e,event_type:a,ip_address:await Yi(),user_agent:navigator.userAgent.slice(0,200),...t})}catch{}}async function Yi(){try{return(await(await fetch("https://api64.ipify.org?format=json",{signal:AbortSignal.timeout(3e3)})).json()).ip||"unknown"}catch{return"unknown"}}async function Na(e){if(!e)return!1;let a=!1,t=!1;try{const{data:i}=await m.rpc("is_current_user_admin");a=!0,t=!!i}catch{a=!1}return a?t:qe(e.email)===Sa}async function Ki(){const e=window.location.hash;if(e.includes("type=recovery")||e.includes("access_token")){We(),tn();return}const{data:{session:a}}=await m.auth.getSession();if(a?.user&&await Na(a.user)){const{data:{currentUser:t}}=await m.auth.getUser(),i=await m.auth.mfa.getAuthenticatorAssuranceLevel(),o=i.data?.currentLevel;if(i.data?.nextLevel==="aal2"&&o!=="aal2"){B.user=a.user,We(),we("2fa"),Ut();return}B.user=a.user,rt();return}Ji()}function We(){const e=document.getElementById("login-screen");e&&(e.style.display="flex")}function Ji(){We(),we("login"),qt(),Da(),Ra(),Ut(),Qi();const e=Ma();e&&(V(`Too many failed attempts. Try again in ${e} minute${e>1?"s":""}.`),document.getElementById("login-btn").disabled=!0)}function Qi(){document.getElementById("toggle-pw")?.addEventListener("click",()=>{const e=document.getElementById("login-password"),a=document.querySelector("#toggle-pw i");e&&(e.type=e.type==="password"?"text":"password",a&&a.setAttribute("data-lucide",e.type==="password"?"eye":"eye-off"),window.lucide&&lucide.createIcons())})}function Da(){const e=document.getElementById("login-form");!e||e._bound||(e._bound=!0,e.addEventListener("submit",Xi),document.getElementById("forgot-pw-btn")?.addEventListener("click",()=>we("forgot")))}async function Xi(e){e.preventDefault();const a=Ma();if(a){V(`Account locked. Try again in ${a} minute${a>1?"s":""}.`);return}const t=document.getElementById("login-email"),i=qe(t?.value);if(!i){V("Enter your admin email address."),z("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const o=document.getElementById("login-password").value,n=document.getElementById("remember-me")?.checked;z("login-btn",!0),ot();const{data:r,error:l}=await m.auth.signInWithPassword({email:i,password:o});if(l||!r.user){const d=String(l?.message||"").toLowerCase();if(d.includes("missing supabase credentials")||d.includes("authentication service is unavailable")){V("Authentication is temporarily unavailable due to configuration. Please contact support."),z("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(d.includes("failed to fetch")||d.includes("network request failed")){V("Network error while signing in. Check your connection and try again."),z("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(d.includes("email not confirmed")){V("Your admin email is not confirmed yet. Open your verification email and confirm first."),z("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const c=La(),u=wt-c.count,g=c.lockedUntil?`Account locked for 15 minutes after ${wt} failed attempts.`:`Invalid email or password. ${u>0?u+" attempt"+(u!==1?"s":"")+" remaining.":""}`;V(g),z("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),r?.user&&await le(r.user.id,"login_failed",{metadata:{reason:"wrong_password"}});return}if(!await Na(r.user)){await m.auth.signOut(),V(`Access denied for ${r.user.email}. This account is signed in but does not have administrator privileges.`),z("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),await le(r.user.id,"login_denied",{metadata:{reason:"not_admin"}});return}if(n?localStorage.setItem(Se,JSON.stringify({email:i,ts:Date.now()})):localStorage.removeItem(Se),Ba(),B.user=r.user,(await m.auth.mfa.getAuthenticatorAssuranceLevel()).data?.nextLevel==="aal2"){z("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),we("2fa"),Ut(),setTimeout(()=>document.getElementById("totp-code")?.focus(),100);return}await le(r.user.id,"login_success"),z("login-btn",!1),rt()}function Ut(){const e=document.getElementById("verify-2fa-btn");e&&!e._bound&&(e._bound=!0,e.addEventListener("click",ia));const a=document.getElementById("totp-code");a&&!a._bound&&(a._bound=!0,a.addEventListener("input",i=>{i.target.value=i.target.value.replace(/\D/g,"").slice(0,6),i.target.value.length===6&&ia()})),document.getElementById("cancel-2fa-btn")?.addEventListener("click",async()=>{await m.auth.signOut(),B.user=null,we("login")}),document.getElementById("use-backup-btn")?.addEventListener("click",()=>{document.getElementById("backup-code-wrap")?.classList.toggle("hidden");const i=document.getElementById("backup-code");i&&i.focus()});const t=document.getElementById("verify-backup-btn");t&&!t._bound&&(t._bound=!0,t.addEventListener("click",Zi))}async function ia(){const e=document.getElementById("totp-code")?.value?.trim();if(!e||e.length!==6){V("Enter the 6-digit code from your authenticator app.");return}z("verify-2fa-btn",!0),ot();try{const{data:a}=await m.auth.mfa.listFactors(),t=(a?.totp||[])[0];if(!t){V("No 2FA factor found. Please re-login."),z("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In');return}const{data:i,error:o}=await m.auth.mfa.challenge({factorId:t.id});if(o)throw o;const{error:n}=await m.auth.mfa.verify({factorId:t.id,challengeId:i.id,code:e});if(n)throw n;await le(B.user.id,"login_2fa_success"),z("verify-2fa-btn",!1),rt()}catch(a){La(),V(a.message?.includes("Invalid")?"Incorrect code. Check your authenticator and try again.":a.message),z("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In'),document.getElementById("totp-code").value="",document.getElementById("totp-code").focus()}}async function Zi(){const e=document.getElementById("backup-code")?.value?.trim().toUpperCase().replace(/\s/g,"");if(!e){V("Enter a backup recovery code.");return}z("verify-backup-btn",!0);try{const{data:a}=await m.from("admin_2fa").select("backup_codes").eq("user_id",B.user.id).maybeSingle();if(!a?.backup_codes?.length){V("No backup codes found."),z("verify-backup-btn",!1,"Use Backup Code");return}if(!a.backup_codes.find(i=>(i.code||i).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")&&!i.used)){V("Backup code not found or already used."),z("verify-backup-btn",!1,"Use Backup Code");return}const t=a.backup_codes.map(i=>(i.code||i).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")?{...typeof i=="object"?i:{code:i},used:!0}:i);await m.from("admin_2fa").update({backup_codes:t}).eq("user_id",B.user.id),await le(B.user.id,"login_backup_code_used"),rt()}catch(a){V(a.message),z("verify-backup-btn",!1,"Use Backup Code")}}function Ra(){document.getElementById("back-to-login")?.addEventListener("click",()=>we("login")),document.getElementById("send-reset-btn")?.addEventListener("click",en)}async function en(){const e=document.getElementById("reset-email"),a=qe(e?.value);if(!a){V("Enter your admin email address to receive a reset link.");return}z("send-reset-btn",!0),ot();const{error:t}=await m.auth.resetPasswordForEmail(a,{redirectTo:Wi()});if(z("send-reset-btn",!1,'<i data-lucide="mail" class="w-4 h-4 inline mr-1"></i> Send Reset Link'),t){V(t.message);return}Gi("Reset link sent! Check your inbox and open it from this device to continue.")}function tn(){const e=document.getElementById("login-screen");if(!e)return;const a=e.querySelector(".login-card");a&&(a.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}window.handlePasswordResetSubmit=async function(){const e=document.getElementById("new-pw-reset")?.value,a=document.getElementById("confirm-pw-reset")?.value,t=document.getElementById("reset-pw-error");if(e!==a){t&&(t.textContent="Passwords do not match.",t.classList.remove("hidden"));return}if((e||"").length<8){t&&(t.textContent="Password must be at least 8 characters.",t.classList.remove("hidden"));return}const{error:i}=await m.auth.updateUser({password:e});if(i){t&&(t.textContent=i.message,t.classList.remove("hidden"));return}p("Password updated! Please log in with your new password."),window.location.hash="",setTimeout(()=>window.location.reload(),1500)};function rt(){const e=document.getElementById("login-screen");e&&(e.style.display="none");const a=document.getElementById("admin-user-email");a&&B.user&&(a.textContent=B.user.email||"Admin"),qt(),navigate("dashboard")}window.adminSignOut=async function(){B.user&&await le(B.user.id,"logout"),await m.auth.signOut(),B.user=null,We(),we("login"),qt(),Da(),Ra()};window.logoutAllDevices=async function(){confirm("This will sign you out on ALL devices. Continue?")&&(B.user&&await le(B.user.id,"logout_all_devices"),await m.auth.signOut({scope:"global"}),B.user=null,p("Signed out from all devices."),setTimeout(()=>window.location.reload(),1200))};async function an(){const e=document.getElementById("content");try{const[a,t,i,o]=await Promise.all([m.from("showroom_listings").select("id,listing_type,is_active,price",{count:"exact"}),m.from("payment_receipts").select("id,order_number,amount,status,created_at",{count:"exact"}).order("created_at",{ascending:!1}).limit(200),m.from("profiles").select("user_id,created_at",{count:"exact"}),m.from("product_reviews").select("id,is_approved",{count:"exact"})]),n=a.data||[],r=t.data||[],l=r.filter(f=>["approved","payment_approved","delivered"].includes(f.status)).reduce((f,$)=>f+(parseFloat($.amount)||0),0),d=r.filter(f=>["pending","pending_verification","processing"].includes(f.status)).length,c=n.filter(f=>f.listing_type!=="property").length,u=n.filter(f=>f.listing_type==="property").length,g=n.filter(f=>f.listing_type!=="property"&&f.is_active).length,y=i.count||0,b=o.count||0,h=(o.data||[]).filter(f=>!f.is_approved).length,v=new Date,_=r.filter(f=>{const $=new Date(f.created_at);return $.getMonth()===v.getMonth()&&$.getFullYear()===v.getFullYear()}).filter(f=>["approved","payment_approved","delivered"].includes(f.status)).reduce((f,$)=>f+(parseFloat($.amount)||0),0),k=r.slice(0,6);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-black text-white">Good ${dn()}, Admin</h2>
            <p class="text-sm text-gray-500 mt-0.5">${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}</p>
          </div>
          <button onclick="navigate('products')" class="btn-press hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Product
          </button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          ${K("Total Revenue",`$${l.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald",`$${_.toLocaleString("en-US",{maximumFractionDigits:0})} this month`)}
          ${K("Total Orders",r.length,"shopping-bag","blue",`${d} pending`)}
          ${K("Customers",y,"users","violet")}
          ${K("Products",c,"package","amber",`${g} active`)}
          ${K("Properties",u,"home","blue")}
          ${K("Reviews",b,"star","blue",`${h} pending`)}
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
            ${k.length===0?'<p class="text-xs text-gray-500 text-center py-8">No orders yet</p>':k.map(f=>`
                <div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
                  <div class="min-w-0">
                    <p class="text-xs font-bold text-white truncate">${s(f.order_number||f.id?.slice(0,8))}</p>
                    <p class="text-[10px] text-gray-500">${fe(f.created_at)}</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0 ml-2">
                    <span class="text-xs font-bold text-emerald-400">$${parseFloat(f.amount||0).toLocaleString("en-US",{maximumFractionDigits:0})}</span>
                    ${ee(f.status)}
                  </div>
                </div>`).join("")}
          </div>
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="zap" class="w-4 h-4 text-amber-400"></i> Quick Actions</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            ${[{icon:"plus-circle",label:"Add Product",fn:"navigate('products')"},{icon:"home",label:"Add Property",fn:"navigate('properties')"},{icon:"shopping-bag",label:"View Orders",fn:"navigate('orders')"},{icon:"star",label:"Reviews",fn:"navigate('reviews')"},{icon:"ticket",label:"Coupons",fn:"navigate('coupons')"},{icon:"settings",label:"Settings",fn:"navigate('settings')"}].map(f=>`
              <button onclick="${f.fn}" class="btn-press flex flex-col items-center gap-2 p-3 glass-soft border border-blue-500/15 rounded-xl hover:border-blue-500/30 transition">
                <i data-lucide="${f.icon}" class="w-5 h-5 text-blue-400"></i>
                <span class="text-[11px] font-bold text-gray-300">${f.label}</span>
              </button>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),Ua(r)}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${s(a.message)}</div>`)}}async function O(){const e=document.getElementById("content");try{const{data:a,error:t}=await m.from("showroom_listings").select("*").neq("listing_type","property").order("created_at",{ascending:!1}),i=new Set,o=[];for(const c of t?[]:a||[])c&&c.property_id&&!i.has(c.property_id)&&(i.add(c.property_id),o.push(c));for(const c of tt().filter(u=>u.listing_type!=="property"))c&&c.property_id&&!i.has(c.property_id)&&(i.add(c.property_id),o.push(c));if(Array.isArray(ie))for(const c of ie.filter(u=>u.listing_type!=="property"&&u.property_id))i.has(c.property_id)||(i.add(c.property_id),o.push(c));const n=[...ha,...fa,...va,...xa];for(const c of n)c&&c.property_id&&c.listing_type!=="property"&&!i.has(c.property_id)&&(i.add(c.property_id),o.push(c));o.sort((c,u)=>new Date(u.created_at||0)-new Date(c.created_at||0));try{await Dt()}catch{}const r=new Set(at());if(r.size)for(let c=o.length-1;c>=0;c--)o[c]&&o[c].property_id&&r.has(o[c].property_id)&&o.splice(c,1);const l=[...new Set(o.map(c=>c.category).filter(Boolean))].sort((c,u)=>c.localeCompare(u)),d=[...new Set(o.flatMap(c=>Array.isArray(c.tags)?c.tags:[]).filter(Boolean))].sort((c,u)=>c.localeCompare(u));window._productFilters||(window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"}),window._productSelection||(window._productSelection=new Set),e.innerHTML=`
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
          ${K("Total Products",o.length,"package","blue")}
          ${K("Published",o.filter(c=>!!c.is_active).length,"badge-check","emerald")}
          ${K("Draft / Hidden",o.filter(c=>!c.is_active).length,"file-clock","amber")}
          ${K("Featured",o.filter(c=>!!c.is_featured).length,"sparkles","violet")}
          ${K("Inventory Units",o.reduce((c,u)=>c+(parseInt(u.stock_quantity,10)||0),0),"boxes","blue")}
          ${K("Avg Price",`$${Math.round(o.reduce((c,u)=>c+(parseFloat(u.price)||0),0)/Math.max(o.length,1)).toLocaleString()}`,"dollar-sign","blue")}
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 sm:p-4 space-y-3">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-2.5">
            <div class="xl:col-span-2 relative">
              <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></i>
              <input id="prod-search" type="search" class="input-field pl-9" placeholder="Search by name, SKU, brand, category..." value="${s(window._productFilters.search||"")}" oninput="filterProducts()">
            </div>
            <select id="prod-cat-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Categories</option>
              ${(l.length?l:ge).map(c=>`<option value="${s(c)}" ${(window._productFilters.category||"")===c?"selected":""}>${s(c)}</option>`).join("")}
            </select>
            <select id="prod-tag-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Tags</option>
              ${d.map(c=>`<option value="${s(c)}" ${(window._productFilters.tag||"")===c?"selected":""}>${s(c)}</option>`).join("")}
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
          <div id="products-empty" class="hidden">${ve("package-search","No matching products","Try different filters or add a new product.",'<button onclick="showAddProductStep1()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl">Add Product</button>')}</div>
          <div class="text-center text-[11px] text-gray-500 py-2">Scroll to explore all products. Layout auto-rearranges as products are added, edited, moved, or removed.</div>
        </div>
      </div>`,window._productsData=o,window._productsCardLimit=60,Fa(o),filterProducts(),updateBulkBar(),window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${s(a.message)}</div>`)}}function ue(e){const a=parseFloat(e);return Number.isFinite(a)?a:0}function _t(e){return Array.isArray(e.tags)?e.tags.filter(Boolean):[]}function nn(e){const a=ue(e.price),t=parseFloat(e.real_price);if(Number.isFinite(t)&&t>0&&t>a)return`${Math.round((1-a/t)*100)}% OFF`;const i=parseFloat(e.discount_percent??e.discount??0);return Number.isFinite(i)&&i>0?`${Math.round(i)}% OFF`:"No discount"}function on(e){const a=ue(e.price),t=parseFloat(e.real_price),i=`$${a.toLocaleString()}`;return Number.isFinite(t)&&t>0&&t>a?`<span class="block text-xs text-gray-400 price-strike line-through">$${t.toLocaleString()}</span><span class="text-emerald-300 font-black">$${a.toLocaleString()}</span>`:i}function jt(e){return e.is_archived||e.availability_status==="Archived"?"archived":e.is_active?"active":"inactive"}function kt(e){return parseInt(e.views??e.view_count??0,10)||0}function $t(e){return parseInt(e.sales??e.sales_count??0,10)||0}function Ot(e){return e.sku||e.property_id||"N/A"}function rn(e){const a=e.images&&e.images[0]?e.images[0]:"/fallback.svg",t=_t(e),i=jt(e),o=window._productSelection?.has(e.property_id),n=ee(i==="archived"?"inactive":i==="active"?"active":"inactive"),r=ne(e.created_at),l=!!e.is_featured,d=e.is_active?`unpublishProduct('${e.property_id}')`:`publishProduct('${e.property_id}')`,c=e.is_active?"Unpublish":"Publish",u=e.is_active?"bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25";return`<article data-id="${e.property_id}" data-cat="${s(e.category||"")}" data-status="${i}" data-featured="${l?"featured":"standard"}" onclick="editProduct('${e.property_id}')" title="Tap anywhere to edit this product" class="prod-card glass-soft border ${o?"border-blue-400/60":"border-blue-500/15"} rounded-3xl p-5 flex flex-col gap-4 transition hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer select-none active:scale-[.99]">
    <div class="flex items-start gap-4">
      <input type="checkbox" class="prod-check accent-blue-500 w-5 h-5 mt-1 shrink-0" value="${e.property_id}" ${o?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${e.property_id}', this.checked)">
      <div class="relative w-24 h-24 rounded-2xl overflow-hidden border border-blue-500/20 shrink-0 bg-[#0b1124]">
        <img src="${s(a)}" alt="${s(e.title||"Product")}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'">
        ${l?'<span class="absolute top-1.5 left-1.5 text-[10px] font-black px-2 py-0.5 rounded-lg bg-amber-400 text-[#111827]">Featured</span>':""}
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="text-lg font-black text-white leading-snug line-clamp-2">${s(e.title||"Untitled Product")}</h3>
        <p class="text-xs text-gray-500 font-mono mt-1">SKU: ${s(Ot(e))}</p>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          ${n}
          <span class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20">${s(e.category||"Uncategorized")}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2.5 text-sm">
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5">
        <span class="text-gray-400 text-xs">Price</span>
        <p class="text-emerald-300 font-black text-base">
          ${on(e)}
        </p>
      </div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Discount</span><p class="text-amber-300 font-bold">${s(nn(e))}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Stock</span><p class="text-gray-200 font-bold">${e.stock_quantity!=null?s(e.stock_quantity):"Unlimited"}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Brand</span><p class="text-gray-200 font-bold truncate">${s(e.brand||"N/A")}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Views</span><p class="text-blue-300 font-bold">${kt(e).toLocaleString()}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Sales</span><p class="text-cyan-300 font-bold">${$t(e).toLocaleString()}</p></div>
    </div>

    <div class="flex items-center justify-between text-xs text-gray-500 border-t border-blue-500/10 pt-3">
      <span>Date Added: ${s(r)}</span>
      <span>${(e.images||[]).length} images</span>
    </div>

    <div class="flex flex-wrap gap-2 mt-auto">
      <button onclick="event.stopPropagation();editProduct('${e.property_id}')" class="btn-press flex-1 min-w-[9.5rem] px-5 py-3.5 rounded-2xl text-sm font-black bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition shadow-lg shadow-blue-600/15">Edit Product</button>
      <button onclick="event.stopPropagation();quickEditProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-indigo-500/15 text-indigo-200 hover:bg-indigo-500/25 transition">Quick Edit</button>
      <button onclick="event.stopPropagation();previewProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-sky-500/15 text-sky-200 hover:bg-sky-500/25 transition">Preview</button>
      <button onclick="event.stopPropagation();${d}" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold ${u} transition">${c}</button>
      <button onclick="event.stopPropagation();duplicateProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-white/10 text-gray-200 hover:bg-white/20 transition">Duplicate</button>
      <button onclick="event.stopPropagation();archiveProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-red-500/15 text-red-200 hover:bg-red-500/25 transition">Archive</button>
      <button onclick="event.stopPropagation();shareProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-violet-500/15 text-violet-200 hover:bg-violet-500/25 transition">Share</button>
      <button onclick="event.stopPropagation();deleteProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-rose-600/15 text-rose-200 hover:bg-rose-600/25 transition">Delete</button>
      <button onclick="event.stopPropagation();openProductMoreActions('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-gray-600/20 text-gray-200 hover:bg-gray-600/35 transition">More</button>
    </div>

    ${t.length?`<div class="flex flex-wrap gap-1.5">${t.slice(0,6).map(g=>`<span class="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200">${s(g)}</span>`).join("")}</div>`:'<div class="text-xs text-gray-500">No tags</div>'}
  </article>`}function sn(e,a){const t=[...e],i=o=>new Date(o||0).getTime()||0;return a==="oldest"?t.sort((o,n)=>i(o.created_at)-i(n.created_at)):a==="price-high"?t.sort((o,n)=>ue(n.price)-ue(o.price)):a==="price-low"?t.sort((o,n)=>ue(o.price)-ue(n.price)):a==="sales-high"?t.sort((o,n)=>$t(n)-$t(o)):a==="views-high"?t.sort((o,n)=>kt(n)-kt(o)):t.sort((o,n)=>i(n.created_at)-i(o.created_at)),t}function Fa(e){const a=document.getElementById("products-grid"),t=document.getElementById("products-empty"),i=document.getElementById("products-result-count");if(!a)return;const o=window._productsCardLimit||60,n=e.slice(0,o);a.innerHTML=n.map(rn).join(""),i&&(i.textContent=String(e.length));const r=document.getElementById("products-more");if(r){const l=e.length-n.length;l>0?r.innerHTML=`<button onclick="loadMoreProducts()" class="btn-press px-8 py-4 rounded-2xl text-base font-black bg-blue-500/15 text-blue-200 hover:bg-blue-500/25 border border-blue-500/25 transition">Show ${Math.min(60,l)} more (${l} left)</button>`:r.innerHTML=e.length>60?'<span class="text-sm text-gray-500">All products shown</span>':""}t&&t.classList.toggle("hidden",e.length>0),updateBulkBar(),window.lucide&&lucide.createIcons()}window.loadMoreProducts=function(){window._productsCardLimit=(window._productsCardLimit||60)+60,filterProducts(!0)};function qa(e){const a=document.getElementById("products-table-body"),t=document.getElementById("products-result-count");a&&(a.innerHTML=e.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-10">No products found.</td></tr>':e.map(i=>{const o=i.images&&i.images[0]?i.images[0]:"/fallback.svg",n=jt(i),r=window._productSelection?.has(i.property_id),l=i.is_active?`unpublishProduct('${i.property_id}')`:`publishProduct('${i.property_id}')`,d=i.is_active?"Unpublish":"Publish";return`<tr class="prod-table-row" data-id="${i.property_id}" style="cursor:pointer">
          <td>
            <div class="flex items-center gap-2.5" onclick="editProduct('${i.property_id}')">
              <input type="checkbox" class="prod-check accent-blue-500" value="${i.property_id}" ${r?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${i.property_id}', this.checked)">
              <img src="${s(o)}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
              <div class="min-w-0">
                <p class="text-xs font-bold text-white truncate max-w-[160px]">${s(i.title||"Untitled Product")}</p>
                <p class="text-[10px] font-mono text-gray-500">${s(Ot(i))}</p>
              </div>
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${s(i.category||"Uncategorized")}</span></td>
          <td>
            <div class="text-xs">
              ${(()=>{const c=ue(i.price),u=parseFloat(i.real_price);return Number.isFinite(u)&&u>0&&u>c?`<span class="text-[10px] text-gray-500 price-strike line-through block">$${u.toLocaleString()}</span><span class="font-bold text-emerald-400">$${c.toLocaleString()}</span>`:`<span class="font-bold text-emerald-400">$${c.toLocaleString()}</span>`})()}
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${i.stock_quantity!=null?s(i.stock_quantity):"Unlimited"}</span></td>
          <td>${ee(n==="archived"?"inactive":n==="active"?"active":"inactive")}</td>
          <td><span class="text-xs text-gray-500">${ne(i.created_at)}</span></td>
          <td>
            <div class="flex gap-1">
              <button onclick="editProduct('${i.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
              <button onclick="quickEditProduct('${i.property_id}')" class="btn-press p-1.5 text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition" title="Quick Edit"><i data-lucide="sliders-horizontal" class="w-3.5 h-3.5"></i></button>
              <button onclick="${l}" class="btn-press p-1.5 ${i.is_active?"text-amber-400 hover:bg-amber-500/10":"text-emerald-400 hover:bg-emerald-500/10"} rounded-lg transition" title="${d}"><i data-lucide="${i.is_active?"eye-off":"eye"}" class="w-3.5 h-3.5"></i></button>
              <button onclick="archiveProduct('${i.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Archive"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
            </div>
          </td>
        </tr>`}).join(""),t&&(t.textContent=String(e.length)),window.lucide&&lucide.createIcons())}window.setProductView=function(e){window._productView=e==="table"?"table":"card";const a=document.getElementById("products-grid"),t=document.getElementById("products-table-wrap"),i=document.getElementById("view-card-btn"),o=document.getElementById("view-table-btn"),n=document.getElementById("products-empty"),r=window._productsData||[];a&&a.classList.toggle("hidden",e==="table"),t&&(t.classList.toggle("hidden",e!=="table"),e==="table"&&qa(r)),i&&i.classList.toggle("active",e!=="table"),o&&o.classList.toggle("active",e==="table"),n&&n.classList.toggle("hidden",r.length>0)};window.filterProducts=function(e){const a=window._productFilters||{};a.search=(document.getElementById("prod-search")?.value||"").trim().toLowerCase(),a.category=document.getElementById("prod-cat-filter")?.value||"",a.tag=document.getElementById("prod-tag-filter")?.value||"",a.status=document.getElementById("prod-status-filter")?.value||"",a.featured=document.getElementById("prod-featured-filter")?.value||"",a.sort=document.getElementById("prod-sort")?.value||"newest",window._productFilters=a;const t=(window._productsData||[]).filter(o=>{const n=[o.title,o.brand,o.category,Ot(o),_t(o).join(" "),o.description].join(" ").toLowerCase();return!(a.search&&!n.includes(a.search)||a.category&&(o.category||"")!==a.category||a.tag&&!_t(o).includes(a.tag)||a.status&&jt(o)!==a.status||a.featured&&a.featured==="featured"!=!!o.is_featured)}),i=sn(t,a.sort);e||(window._productsCardLimit=60),Fa(i),window._productView==="table"&&qa(i)};window.resetProductFilters=function(){window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"},["prod-search","prod-cat-filter","prod-tag-filter","prod-status-filter","prod-featured-filter","prod-sort"].forEach(e=>{const a=document.getElementById(e);a&&(e==="prod-sort"?a.value="newest":a.value="")}),filterProducts()};window.toggleProductSelection=function(e,a){window._productSelection||(window._productSelection=new Set),a?window._productSelection.add(e):window._productSelection.delete(e),updateBulkBar()};window.toggleSelectAll=function(e,a){document.querySelectorAll("."+a).forEach(t=>{t.checked=e.checked;const i=t.value;window._productSelection||(window._productSelection=new Set),e.checked?window._productSelection.add(i):window._productSelection.delete(i)}),updateBulkBar()};window.toggleSelectAllProducts=function(e){document.querySelectorAll(".prod-check").forEach(a=>{a.checked=!!e,window._productSelection||(window._productSelection=new Set),e?window._productSelection.add(a.value):window._productSelection.delete(a.value)}),updateBulkBar()};window.updateBulkBar=function(){const e=window._productSelection?window._productSelection.size:0,a=document.getElementById("bulk-actions"),t=document.getElementById("bulk-count");a&&(a.classList.toggle("hidden",e===0),e>0&&a.classList.add("flex")),t&&(t.textContent=`${e} selected`)};function st(){return window._productSelection?[...window._productSelection]:[]}function J(e){const a=String(e?.message||e?.code||"").toLowerCase();return a.includes("row-level security")||a.includes("permission denied")||a.includes("permission denied for table")||a.includes("new row violates row-level security")||a.includes("not permitted")||a.includes("rls policy")}function ln(e,a,t){return e&&J(e)?(p(`âš ï¸ ${t} blocked: Your account is signed in but the database admin role is not active. Re-run the admin permission migration, or contact the owner.`,"error"),!0):e?(a&&a(),p(`${t} saved locally (DB unavailable): ${e.message||"unknown error"}`,"info"),!0):!1}function ht(e,a){if(!e)return`${a} failed for an unknown reason. Please try again.`;const t=String(e.message||""),i=e.code||"";return J(e)?`${a} was BLOCKED: your account is signed in but the database admin role is not active. Re-run the admin permission migration (or contact the owner), then press Publish again.`:String(i)==="401"||/jwt|token|not authenticated|unauthorized|invalid api key/i.test(t)?`${a} failed: your sign-in session expired or is invalid. Please sign out and sign back in, then try again. Your changes are still in the form.`:String(i)==="23505"||/duplicate key|unique constraint/i.test(t)?`${a} failed: a duplicate-record conflict occurred in the database. Refresh the page and try again.`:String(i)==="23503"||/foreign key/i.test(t)?`${a} failed: the database rejected a reference (foreign key). Refresh the page, re-open the product and try again.`:String(i)==="42P01"||/column .* does not exist|relation .* does not exist/i.test(t)?`${a} failed: the database schema is out of date. Run the latest database migration, then try again.`:String(i)==="23502"||/null value in column .* violates/i.test(t)?`${a} failed: a required field was rejected by the database. Fill in every required field, then try again.`:/failed to fetch|networkerror|network request|fetch failed|load failed|offline|ERR_NAME|ERR_CONNECTION|timeout/i.test(t)?`${a} failed: no connection to the server. Check your internet connection and press Publish again. Your changes are still in the form.`:String(i)==="42501"||/permission denied|row-level security/i.test(t)?`${a} was BLOCKED by database permissions. Re-run the admin permission migration (or contact the owner), then try again.`:/rate limit|too many requests/i.test(t)?`${a} failed: too many requests were sent at once. Wait a few seconds and press Publish again.`:`${a} failed: ${t||"an unexpected database error occurred"}. Nothing was saved — your changes are still in the form, so you can press Publish again.`}async function Ye(e){try{let{data:{session:t}}=await m.auth.getSession();if(!t){const{data:n}=await m.auth.getSession();t=n?.session}if(!t)return{error:new Error("Your sign-in session has expired. Please sign out and sign back in, then press Publish again.")};const{data:{user:i},error:o}=await m.auth.getUser();if(o||!i)return{error:new Error("Your sign-in session is invalid. Please sign out and sign back in, then press Publish again.")}}catch(t){return console.error("[safePublishShowroom] Auth check failed:",t),{error:new Error("Could not verify your sign-in status. Check your internet connection and try again.")}}const a={...e,updated_at:new Date().toISOString()};if(a.property_id){const{error:t}=await m.from("showroom_listings").upsert(a,{onConflict:"property_id"});if(!t)return{error:null};if(!J(t))return console.error("[safePublishShowroom] Direct upsert failed (non-RLS):",t),{error:t};console.warn("[safePublishShowroom] RLS blocked direct upsert, falling back to RPC...")}else{const{error:t}=await m.from("showroom_listings").insert(a);if(!t)return{error:null};if(!J(t))return console.error("[safePublishShowroom] Direct insert failed (non-RLS):",t),{error:t};console.warn("[safePublishShowroom] RLS blocked direct insert, falling back to RPC...")}try{const t={...a};delete t.id;const{data:i,error:o}=await m.rpc("publish_showroom_upsert",{p_data:[t]});return o?(console.error("[safePublishShowroom] RPC fallback also failed:",o),{error:new Error(`Database write failed: ${o.message||"unknown error"}. Your changes are preserved in the form — please try again.`)}):(console.log("[safePublishShowroom] RPC fallback succeeded, rows affected:",i),{error:null})}catch(t){return console.error("[safePublishShowroom] RPC exception:",t),{error:new Error(`Database write failed: ${t.message||"network error"}. Your changes are preserved in the form — please try again.`)}}}window.bulkToggleActive=async function(e){const a=st();if(!a.length)return;const t=await Promise.all(a.map(o=>{const n=me((window._productsData||[]).find(r=>r.property_id===o));return m.from("showroom_listings").upsert({...n,property_id:o,is_active:e},{onConflict:"property_id"})}));if(t.some(o=>o.error&&J(o.error))){p(`âš ï¸ ${a.length} products NOT ${e?"published":"unpublished"}: database admin role blocked the write. Re-run the admin permission migration.`,"error"),window._productSelection=new Set,O();return}const i=t.filter(o=>o.error).length;p(`${a.length-i}/${a.length} products ${e?"published":"unpublished"}${i?` (${i} failed: ${t.find(o=>o.error)?.error?.message||"error"})`:""}`,i?"error":"success"),window._productSelection=new Set,O()};window.bulkDuplicateProducts=async function(){const e=st();if(e.length){for(const a of e)await duplicateProduct(a,!0);p(`${e.length} products duplicated`),window._productSelection=new Set,O()}};window.bulkArchive=async function(){const e=st();if(!e.length||!confirm(`Archive ${e.length} products? They will be hidden but not deleted.`))return;const a=await Promise.all(e.map(i=>m.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",i)));if(a.some(i=>i.error&&J(i.error))){p("âš ï¸ Archive blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,O();return}const t=a.filter(i=>i.error).length;p(`${e.length-t}/${e.length} products archived${t?` (${t} failed)`:""}`,t?"error":"success"),window._productSelection=new Set,O()};window.bulkDeleteProducts=async function(){const e=st();if(!e.length||!confirm(`Delete ${e.length} products permanently? This action cannot be undone.`))return;const a=await Promise.all(e.map(i=>m.from("showroom_listings").delete().eq("property_id",i)));if(a.some(i=>i.error&&J(i.error))){p("âš ï¸ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,O();return}const t=a.filter(i=>i.error).length;p(`${e.length-t}/${e.length} products deleted${t?` (${t} failed)`:""}`,t?"error":"success"),window._productSelection=new Set,O()};window.previewProduct=async function(e){const a=await m.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),t=(window._productsData||[]).find(i=>i.property_id===e)||a.data;if(!t)return p("Product not found","error");W(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Product Live Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">ðŸ”™ Back</button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="space-y-2">
            <img src="${s((t.images||[])[0]||"/fallback.svg")}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
            <div class="flex flex-wrap gap-2">${(t.images||[]).slice(0,8).map(i=>`<img src="${s(i)}" class="w-12 h-12 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">`).join("")}</div>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-black text-white">${s(t.title||"Untitled Product")}</h4>
            <div class="flex items-center gap-2">${ee(t.is_active?"active":"inactive")}${t.is_featured?'<span class="badge bg-amber-500/15 text-amber-200 border-amber-500/30">Featured</span>':""}</div>
            <p class="text-xs text-gray-400">${s(t.description||"No description")}</p>
            <div class="grid grid-cols-2 gap-2 text-xs mt-2">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">$${ue(t.price).toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${t.stock_quantity!=null?s(t.stock_quantity):"Unlimited"}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${s(t.brand||"N/A")}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Category</span><p class="text-gray-200 font-bold">${s(t.category||"N/A")}</p></div>
            </div>
            <div class="pt-2 flex gap-2">
              <button onclick="editProduct('${t.property_id}');closeModal();" class="btn-press px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl">Edit</button>
              <button onclick="shareProduct('${t.property_id}')" class="btn-press px-3 py-2 bg-violet-600/70 hover:bg-violet-500 text-white text-xs font-bold rounded-xl">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.quickEditProduct=async function(e){const a=await m.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),t=(window._productsData||[]).find(o=>o.property_id===e)||a.data;if(!t)return p("Product not found","error");const i=Array.isArray(t.images)?t.images:[];W(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-black text-white">Quick Edit Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">Back</button>
        </div>
        <form onsubmit="saveQuickEditProduct(event,'${t.property_id}')" class="space-y-4">
          <div><label class="lbl">Title</label><input name="title" class="input-field" value="${s(t.title||"")}"></div>
          <div class="grid grid-cols-2 gap-3">
            <div><label class="lbl">Real Price</label><input type="number" step="0.01" name="real_price" class="input-field" value="${s(t.real_price??t.specifications?.real_price??"")}" placeholder="Original price (crossed out)"></div>
            <div><label class="lbl">Discount Price</label><input type="number" step="0.01" name="price" class="input-field" value="${s(t.price||0)}" placeholder="Price customers pay"></div>
          </div>
          <div><label class="lbl">Availability</label><select name="availability_status" class="input-field">${["In Stock","Out of Stock","Pre-order","Limited Stock","Archived"].map(o=>`<option value="${o}" ${t.availability_status===o?"selected":""}>${o}</option>`).join("")}</select></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Featured</span><input type="checkbox" name="is_featured" ${t.is_featured?"checked":""} class="accent-blue-500 w-5 h-5"></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Published</span><input type="checkbox" name="is_active" ${t.is_active?"checked":""} class="accent-blue-500 w-5 h-5"></div>
          <div>
            <label class="lbl">Gallery Images (up to 24)</label>
            <div id="drop-zone" class="drop-zone" onclick="document.getElementById('img-upload').click()">
              <i data-lucide="image-plus" class="w-10 h-10 text-blue-400 mx-auto mb-2"></i>
              <p class="text-base font-bold text-gray-300">Tap to add photos (up to 24)</p>
              <p class="text-sm text-gray-500 mt-1">PNG, JPG, WEBP. First image is the cover. âœ• deletes any image (even the main/cover).</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*,application/pdf" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${i.map((o,n)=>_e(o,n)).join("")}
            </div>
            <div id="image-url-inputs">${i.map((o,n)=>`<input type="hidden" name="images" id="img-url-${n}" value="${s(o)}">`).join("")}</div>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
          </div>
          <button type="submit" class="btn-press w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-base font-bold">Save Quick Edit</button>
        </form>
      </div>
    </div>`),Ht(),Gt(),Ae(),ke(),window.lucide&&lucide.createIcons()};window.saveQuickEditProduct=async function(e,a){e.preventDefault();const t=new FormData(e.target),i=[...document.querySelectorAll("#image-preview .img-thumb")].map(u=>u.dataset.url||(u.querySelector("img")?u.querySelector("img").getAttribute("src"):"")).filter(u=>u&&!String(u).startsWith("blob:")),o={title:t.get("title")||"Untitled Product",price:Math.max(H,Math.min(X,parseFloat(t.get("price"))||0)),stock_quantity:t.get("stock_quantity")===""?null:parseInt(t.get("stock_quantity"),10),availability_status:t.get("availability_status")||"In Stock",is_featured:t.get("is_featured")==="on",is_active:t.get("is_active")==="on"||i.length>=24,images:i},n=String(t.get("real_price")||"").trim(),r=n===""?null:parseFloat(n);if(r!=null&&!Number.isFinite(r)){p("Real Price must be a number.","error");return}const l=me((window._productsData||[]).find(u=>u.property_id===a)),d=l.specifications&&typeof l.specifications=="object"?l.specifications:{};o.specifications={...d,real_price:r!=null&&r>0?Math.round(r):null};const{error:c}=await m.from("showroom_listings").upsert({...l,...o,property_id:a},{onConflict:"property_id"});if(c){if(J(c)){p("âš ï¸ Save blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),ce(),O();return}vt(a,o),p("Quick edit saved locally","info")}else p(o.is_active?"Saved & published â€” your showroom shows it now":"Quick edit saved (draft)");ce(),O()};window.publishProduct=function(e){return toggleProductActive(e,!0)};window.unpublishProduct=function(e){return toggleProductActive(e,!1)};window.shareProduct=async function(e){const a=`${window.location.origin}/details.html?id=${encodeURIComponent(e)}`;try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(a),p("Product link copied to clipboard");return}}catch{}window.prompt("Copy product link:",a)};window.deleteProduct=async function(e){if(!confirm("Delete this product permanently? This action cannot be undone."))return;const a=(window._productsData||[]).find(i=>i.property_id===e)||(window._propertiesData||[]).find(i=>i.property_id===e)||Ne(e),{error:t}=await m.from("showroom_listings").delete().eq("property_id",e);if(t&&!J(t))return p("Delete failed: "+t.message,"error");fi(e);try{const i=await wa(e,!0);i&&i.error&&J(i.error)?p("âš ï¸ Deleted, but the site-wide hidden list could not be saved: database admin role rejected the write. Re-run the admin permission migration.","error"):p("Product deleted")}catch{p("Product deleted")}a&&a.listing_type==="property"?dt():O()};window.clearAllProducts=async function(){const e=(window._productsData||[]).length;if(!confirm(`Delete ALL ${e} product(s) from the Product Manager and the database now?

This is permanent and cannot be undone. Your built-in showroom catalog will stay.`))return;const{error:a}=await m.from("showroom_listings").delete().neq("property_id","__none__");if(a)return J(a)?p("âš ï¸ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"):p("Clear failed: "+a.message,"error");try{localStorage.removeItem("kco_local_showroom_listings_v1")}catch{}p("All products deleted. The manager now shows your showroom catalog."),O()};window.openProductMoreActions=function(e){W(`
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
    </div>`)};function dn(){const e=new Date().getHours();return e<12?"morning":e<17?"afternoon":"evening"}function Ua(e){const a=document.getElementById("chart-revenue");if(!a)return;const t=[],i=new Date;for(let n=5;n>=0;n--){const r=new Date(i.getFullYear(),i.getMonth()-n,1);t.push({label:r.toLocaleString("default",{month:"short"}),month:r.getMonth(),year:r.getFullYear()})}const o=t.map(n=>e.filter(r=>{const l=new Date(r.created_at);return l.getMonth()===n.month&&l.getFullYear()===n.year&&["approved","payment_approved","delivered"].includes(r.status)}).reduce((r,l)=>r+(parseFloat(l.amount)||0),0));new Chart(a,{type:"bar",data:{labels:t.map(n=>n.label),datasets:[{label:"Revenue (USD)",data:o,backgroundColor:"rgba(59,130,246,.6)",borderColor:"rgb(59,130,246)",borderWidth:1,borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"#64748b",callback:n=>"$"+n.toLocaleString()},grid:{color:"rgba(59,130,246,.05)"}},x:{ticks:{color:"#64748b"},grid:{display:!1}}}}})}const ge=Si.map(e=>e.name),ja=Ei,F={default:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Phones:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"storage",label:"Storage (e.g. 128GB)",type:"text"},{key:"ram",label:"RAM (e.g. 8GB)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],"Computers & Laptops":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"processor",label:"Processor (CPU)",type:"text"},{key:"ram",label:"RAM",type:"text"},{key:"storage",label:"Storage",type:"text"},{key:"display",label:"Display Size",type:"text"},{key:"graphics",label:"Graphics Card",type:"text"},{key:"os",label:"Operating System",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Electronics:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model Number",type:"text"},{key:"color",label:"Color",type:"text"},{key:"voltage",label:"Voltage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Shoes:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Jewelry:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"material",label:"Material (e.g. 14k Gold)",type:"text"},{key:"gemstone",label:"Gemstone",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Watches:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"movement",label:"Movement (Quartz/Automatic)",type:"text"},{key:"case_material",label:"Case Material",type:"text"},{key:"water_resistance",label:"Water Resistance",type:"text"},{key:"color",label:"Dial Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"description",label:"Description",type:"textarea",span:2}],Gaming:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"platform",label:"Platform (PS5, Xbox, PCâ€¦)",type:"text"},{key:"model",label:"Game / Model",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],"Sports & Fitness":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]};["Men's Fashion","Women's Fashion","Fashion"].forEach(e=>F[e]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (T-Shirt, Dressâ€¦)",type:"text"},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]);F["Bags & Accessories"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Handbag, Backpack, Luggageâ€¦)",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"material",label:"Material (e.g. Leather)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];F["Beauty & Skincare"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Serum, Cream, Makeupâ€¦)",type:"text"},{key:"size",label:"Size (ml / g)",type:"text"},{key:"skin_type",label:"Skin Type",type:"text"},{key:"ingredients",label:"Key Ingredients",type:"text"},{key:"color",label:"Color / Shade",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];F["Home & Kitchen"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"type",label:"Type (Appliance, Cookware, Decorâ€¦)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"voltage",label:"Voltage / Power",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];F.Furniture=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Sofa, Table, Chairâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"assembly",label:"Assembly Required",type:"select",options:["","Yes","No"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];F["Garden & Outdoor"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Mower, Grill, Furnitureâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"weatherproof",label:"Weatherproof",type:"select",options:["","Yes","No"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];F["Toys & Games"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model / Set Name",type:"text"},{key:"age_range",label:"Age Range",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];F["Food & Groceries"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Snack, Beverage, Pantryâ€¦)",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"shelf_life",label:"Shelf Life",type:"text"},{key:"storage",label:"Storage Instructions",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","New (Sealed)","Open Box"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];F["Baby & Kids"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Stroller, Clothing, Toyâ€¦)",type:"text"},{key:"age_range",label:"Age Range",type:"text"},{key:"size",label:"Size",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];F["Health & Medical"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Device, Supplement, Careâ€¦)",type:"text"},{key:"size",label:"Size / Quantity",type:"text"},{key:"usage",label:"Usage / Dosage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];F["Books & Education"]=[{key:"title",label:"Title / Book Name",type:"text",required:!0,span:2},{key:"author",label:"Author",type:"text"},{key:"publisher",label:"Publisher",type:"text"},{key:"language",label:"Language",type:"text"},{key:"format",label:"Format (Hardcover, Paperback, E-book)",type:"text"},{key:"isbn",label:"ISBN",type:"text"},{key:"pages",label:"Pages",type:"text"},{key:"edition",label:"Edition",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Like New","Very Good","Good","Fair"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];F["Office & Stationery"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Notebook, Pen, Printerâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"quantity",label:"Quantity / Pack Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];F["Pet Supplies"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Food, Toy, Bed, Collarâ€¦)",type:"text"},{key:"pet_type",label:"Pet Type (Dog, Cat, Birdâ€¦)",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];F["Musical Instruments"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"type",label:"Type (Guitar, Piano, Drumsâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color / Finish",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];F["Cameras & Photography"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"lens",label:"Lens",type:"text"},{key:"sensor",label:"Sensor",type:"text"},{key:"megapixels",label:"Megapixels",type:"text"},{key:"video",label:"Video Recording",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];F["Software & Digital"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand / Developer",type:"text"},{key:"type",label:"Type (Software, App, Licenseâ€¦)",type:"text"},{key:"platform",label:"Platform",type:"text"},{key:"license",label:"License Type",type:"text"},{key:"version",label:"Version",type:"text"},{key:"language",label:"Language",type:"text"},{key:"format",label:"Format",type:"text"},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];F.Services=[{key:"title",label:"Service Title",type:"text",required:!0,span:2},{key:"type",label:"Service Type",type:"text"},{key:"duration",label:"Duration",type:"text"},{key:"location",label:"Location / Coverage",type:"text"},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];F["Social Media Accounts"]=[{key:"title",label:"Account Title",type:"text",required:!0,span:2},{key:"type",label:"Platform (Instagram, TikTokâ€¦)",type:"text"},{key:"followers",label:"Followers",type:"text"},{key:"engagement",label:"Engagement Rate",type:"text"},{key:"niche",label:"Niche",type:"text"},{key:"condition",label:"Status",type:"select",options:["Active","Verified","Suspended"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];ja.forEach(e=>F[e]=[{key:"title",label:"Vehicle Title",type:"text",required:!0,span:2,placeholder:"e.g. 2023 Toyota Land Cruiser V8 Turbo Diesel"},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"model_year",label:"Model Year",type:"text",placeholder:"e.g. 2023"},{key:"body_type",label:"Body Type",type:"select",options:["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"]},{key:"mileage",label:"Mileage",type:"text",placeholder:"e.g. 15,000 mi or 0 (new)"},{key:"engine",label:"Engine",type:"text",placeholder:"e.g. 4.0L V8 Turbo Diesel"},{key:"horsepower",label:"Horsepower (HP)",type:"text",placeholder:"e.g. 500 HP"},{key:"transmission",label:"Transmission",type:"select",options:["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"]},{key:"drive_type",label:"Drive Type",type:"select",options:["FWD","RWD","AWD","4WD"]},{key:"fuel_type",label:"Fuel Type",type:"select",options:["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"]},{key:"seating_capacity",label:"Seating Capacity",type:"text",placeholder:"e.g. 5 seats"},{key:"doors",label:"Number of Doors",type:"text",placeholder:"e.g. 4"},{key:"safety_features",label:"Safety Features (comma separated)",type:"text",placeholder:"ABS, Airbags, Lane Assist, Traction Controlâ€¦"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}]);for(const e of Object.keys(F))F[e]=F[e].flatMap(a=>a.key!=="price"?[a]:[{key:"real_price",label:"Real Price (USD) â€” crossed out when a discount is active",type:"number",placeholder:"e.g. 250000 â€” original price before discount"},{...a,label:"Discount Price (USD) â€” the price customers pay",placeholder:"e.g. 200000 â€” the price customers actually pay"}]);function Oa(e=""){return Ee.map(a=>`<option value="${a.code}" ${e===a.code?"selected":""}>${a.flag} ${a.name}</option>`).join("")}function Ha(e="USD"){return Ia.map(a=>`<option value="${a}" ${e===a?"selected":""}>${a}</option>`).join("")}function St(e){return String(e||"").split(",").map(a=>a.trim()).filter(Boolean)}function T(e,a){const t=document.querySelector(`[name="${e}"]`);!t||a==null||(t.value=a)}function Pt(e){const a=document.getElementById(e);a&&(a.min=String(H),a.max=String(X),a.placeholder=`Price (${H} - ${X})`)}function na(e){const a=document.getElementById(`${e}-country_code`),t=document.getElementById(`${e}-country`),i=document.getElementById(`${e}-currency`);if(!a)return;const o=Ee.find(n=>n.code===a.value);t&&o&&(t.value=o.name),i&&o&&(i.value=Rt(o.code))}function Ke(e,a){const t=document.getElementById(`${e}-image-requirement`),i=document.getElementById(`${e}-required_image_count`);i&&(i.value=a?String(a):""),t&&(a>0?(t.textContent=`This template fits up to ${a} images. Fewer images are perfectly fine â€” you can save and publish anytime.`,t.classList.remove("hidden")):(t.textContent="",t.classList.add("hidden")))}function Et(e,a="full"){const t=document.getElementById("pf-catalog_template_id")?.value||"",i=document.getElementById("pf-currency")?.value||"USD",o=parseFloat(document.getElementById("pf-price")?.value)||H,n=$a({templateId:t,listingType:"product",category:e,countryCode:"US",currency:i,price:o});if(!n){Ke("pf",ja.includes(e)?24:0);return}Ke("pf",n.requiredImageCount||0),T("currency",n.currency),T("subcategory",n.subcategory),T("features_text",n.features.join(", ")),T("highlights_text",n.highlights.join(", ")),T("seo_keywords_text",n.seo_keywords.join(", ")),a==="full"?(T("title",n.title),T("description",n.description),T("brand",n.brand||""),T("model",n.model||""),T("color",n.color||""),T("size",n.size||""),T("condition",n.condition||"New")):T("description",n.description)}function It(e="full"){const a=document.getElementById("ppf-catalog_template_id")?.value||"",t=document.getElementById("ppf-country_code")?.value||"US",i=document.getElementById("ppf-currency")?.value||"USD",o=parseFloat(document.getElementById("ppf-price")?.value)||H,n=$a({templateId:a,listingType:"property",category:"Real Estate",countryCode:t,currency:i,price:o});if(!n){Ke("ppf",0);return}Ke("ppf",n.requiredImageCount||0),T("country",n.country),T("country_code",n.country_code),T("currency",n.currency),T("subcategory",n.subcategory),T("product_location",n.product_location),T("features_text",n.features.join(", ")),T("highlights_text",n.highlights.join(", ")),T("seo_keywords_text",n.seo_keywords.join(", ")),e==="full"?(T("title",n.title),T("description",n.description),T("property_type",n.property_type||""),T("bedrooms",n.bedrooms??""),T("bathrooms",n.bathrooms??""),T("building_size",n.building_size||""),T("land_size",n.land_size||""),T("furnished",n.furnished||"")):T("description",n.description)}window.applyProductCatalogTemplate=function(e,a="full"){Et(e,a)};window.applyPropertyCatalogTemplate=function(e="full"){It(e)};function cn(e){return F[e]||F.default}function un(e,a={},t=!1){return cn(e).map(i=>{const o=a[i.key]||"",n=i.span===2?"sm:col-span-2":"",r=!t&&i.required?"required":"",l=i.placeholder||i.label;let d="";if(i.type==="select")d=`<select class="input-field" name="${i.key}" id="pf-${i.key}" ${r}>
        <option value="">Selectâ€¦</option>
        ${i.options.map(c=>`<option value="${c}" ${o===c?"selected":""}>${c}</option>`).join("")}
      </select>`;else if(i.type==="textarea")d=`<textarea class="input-field" name="${i.key}" id="pf-${i.key}" rows="3" placeholder="Write a detailed descriptionâ€¦">${s(o)}</textarea>`;else{const c=["brand","model","color","size","material","platform"].includes(i.key)?`pf-list-${i.key}`:"",u=({brand:["Apple","Samsung","Sony","LG","HP","Dell","Lenovo","Asus","Nike","Adidas","Puma","Gucci","Rolex","Toyota","Mercedes","BMW","Tesla"],model:["Pro","Ultra","Max","SE","Standard","Plus","Series 1","Series 2"],color:["Black","White","Silver","Blue","Red","Green","Gold","Gray","Pink","Brown"],size:["XS","S","M","L","XL","XXL","32","34","36","38","40","42"],material:["Cotton","Leather","Stainless Steel","Aluminum","Wood","Glass","Plastic"],platform:["PS5","Xbox Series X","Nintendo Switch","PC","Android","iOS"]}[i.key]||[]).map(g=>`<option value="${s(g)}"></option>`).join("");d=`<input type="${i.type}" class="input-field" name="${i.key}" id="pf-${i.key}" value="${s(o)}" placeholder="${l}" ${c?`list="${c}"`:""} ${r}>${c?`<datalist id="${c}">${u}</datalist>`:""}`}return`<div class="${n}"><label class="lbl">${i.label}${i.required?t?"":" *":""}</label>${d}</div>`}).join("")}window.showAddProductStep1=function(){W(`
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
          ${ge.map(e=>`
            <button data-category="${s(e).toLowerCase()}" onclick="showAddProductStep2('${e.replace(/'/g,"\\'")}')" class="btn-press flex items-center gap-3 p-4 glass-soft border border-blue-500/15 hover:border-blue-500/40 rounded-2xl transition text-left">
              <i data-lucide="tag" class="w-5 h-5 text-blue-400 shrink-0"></i>
              <span class="text-sm font-semibold text-gray-200">${s(e)}</span>
            </button>`).join("")}
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()};window.filterProductCategoryChoices=function(e){const a=String(e||"").trim().toLowerCase();document.querySelectorAll("#product-category-grid [data-category]").forEach(t=>{const i=!a||t.dataset.category.includes(a);t.classList.toggle("hidden",!i)})};window.showAddProductStep2=function(e,a={}){const t=!!a.property_id,i=ka("product",e),o=a.currency||"USD";W(`
    <div class="modal-overlay" onclick="if(event.target===this)closeProductFormModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between gap-3 mb-6">
          <div class="min-w-0">
            <h3 class="text-2xl font-black text-white">${t?"Edit Product":"Add Product"} â€” ${s(e)}</h3>
            <p class="text-sm text-gray-500 mt-1 truncate">${t?`Editing: ${s(a.property_id)}`:"Fill in the product details below"}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${t?'<button type="button" onclick="closeProductFormModal()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Product Manager</button>':'<button type="button" onclick="showAddProductStep1()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5" title="Change category"><i data-lucide="arrow-left" class="w-4 h-4"></i> Category</button>'}
            <button type="button" onclick="closeProductFormModal()" class="btn-press px-4 h-11 flex items-center justify-center rounded-xl text-sm font-bold uppercase tracking-wide text-gray-400 hover:text-white hover:bg-gray-800 transition" title="Close (X) â€” return to Product Manager">
              Back
            </button>
          </div>
        </div>

        <form id="product-form" onsubmit="saveProduct(event,'${s(e)}','${t?a.property_id:""}')" class="space-y-6">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-sm font-bold text-white uppercase tracking-wide">Global Catalog Autofill</p>
                <p class="text-sm text-gray-500 mt-1">Pick a template, country, and currency to auto-build the listing title, description, and metadata.</p>
              </div>
              <button type="button" onclick="applyProductCatalogTemplate('${s(e)}')" class="btn-press px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition">Refresh Template</button>
            </div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Catalog Template</label><select class="input-field" name="catalog_template_id" id="pf-catalog_template_id" onchange="applyProductCatalogTemplate('${s(e)}')"><option value="">Choose a template...</option>${i.map(n=>`<option value="${n.id}">${s(n.label)} - ${s(n.subcategory||n.category)}</option>`).join("")}</select></div>
              <div class="sm:col-span-2"><label class="lbl">Currency</label><select class="input-field" name="currency" id="pf-currency" onchange="applyProductCatalogTemplate('${s(e)}')">${Ha(o)}</select></div>
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
              ${(a.images||[]).map((n,r)=>_e(n,r)).join("")}
            </div>
            <p class="text-sm text-gray-500 mt-1">Drag to reorder â€¢ âœ• deletes any image (even the main/cover â€” the next image becomes the cover) â€¢ â†» replaces â€¢ Upload up to 24 gallery images</p>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
            <div id="image-url-inputs">
              ${(a.images||[]).map((n,r)=>`<input type="hidden" name="images" id="img-url-${r}" value="${s(n)}">`).join("")}
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
            ${un(e,a,t)}
          </div>

          <div class="form-grid form-grid-2">
            <div class="sm:col-span-2"><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${s(a.subcategory||"")}" placeholder="e.g. Smartphones, SUVs, Model Houses"></div>
            <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${s((a.features||[]).join(", "))}" placeholder="5G connectivity, OLED display, fast charging"></div>
            <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${s((a.highlights||[]).join(", "))}" placeholder="Retail-ready packaging, premium demand, strong presentation"></div>
            <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${s((a.seo_keywords||[]).join(", "))}" placeholder="smartphone, unlocked, global shipping"></div>
          </div>

          <!-- Tags / Badges -->
          <div>
            <label class="lbl">Product Tags / Badges</label>
            <div class="flex flex-wrap gap-2.5">
              ${["New Arrival","Best Seller","Hot Deal","Featured","Limited Stock"].map(n=>`
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="tags" value="${n}" ${(a.tags||[]).includes(n)?"checked":""} class="accent-blue-500 w-5 h-5">
                  <span class="text-sm text-gray-300">${n}</span>
                </label>`).join("")}
            </div>
          </div>

          <!-- Availability -->
          <div class="form-grid form-grid-2">
            <div>
              <label class="lbl">Availability Status</label>
              <select class="input-field" name="availability_status" id="pf-availability_status">
                ${["In Stock","Out of Stock","Pre-order","Limited Stock"].map(n=>`<option value="${n}" ${a.availability_status===n?"selected":""}>${n}</option>`).join("")}
              </select>
            </div>
            <div class="p-4 glass-soft border border-blue-500/15 rounded-2xl">
              <p class="text-sm font-bold text-white">Global Price Range</p>
              <p class="text-sm text-gray-500 mt-1">Allowed price range is ${H} to ${X} in the selected currency.</p>
            </div>
          </div>

          <!-- Featured -->
          <div class="flex items-center justify-between p-4 glass-soft border border-blue-500/15 rounded-2xl">
            <div>
              <p class="text-sm font-bold text-white">Featured Product</p>
              <p class="text-sm text-gray-500">Show in featured sections</p>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" name="is_featured" ${a.is_featured?"checked":""}>
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
              <input type="checkbox" name="is_active" ${t?a.is_active?"checked":"":"checked"}>
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
              ${t?"One-Click Publish Changes":"One-Click Publish Product"}
            </button>
            <button type="submit" name="action" value="draft" class="btn-press px-7 bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 rounded-2xl text-base transition">
              Save Draft
            </button>
          </div>
        </form>
      </div>
    </div>`),Ht(),Gt(),Pt("pf-price"),Pt("pf-real_price"),Et(e,"pricing"),document.getElementById("pf-price")?.addEventListener("input",()=>Et(e,"pricing")),bn(e,a.property_id||""),window._pfEscapeHandler=n=>{n.key==="Escape"&&closeProductFormModal()},document.addEventListener("keydown",window._pfEscapeHandler)};window.closeProductFormModal=function(){window._pfEscapeHandler&&(document.removeEventListener("keydown",window._pfEscapeHandler),window._pfEscapeHandler=null),window._productPublishInFlight=!1,Re=-1,ce(),O()};window.switchProductFormCategory=function(e){const a=document.getElementById("product-form");if(!a)return;const t={},i=new FormData(a);for(const[o,n]of i.entries())o==="images"?(t.images=t.images||[],n&&!String(n).startsWith("blob:")&&t.images.push(String(n))):o==="tags"?(t.tags=t.tags||[],t.tags.push(n)):t[o]=n;t.is_featured=a.querySelector('[name="is_featured"]')?.checked||!1,t.is_active=a.querySelector('[name="is_active"]')?.checked||!1,t.property_id&&String(t.property_id).trim()?showAddProductStep2(e,t):showAddProductStep2(e,{images:t.images||[],...t})};function _e(e,a){const t=it(e)?'<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-300 select-none"><span class="text-2xl leading-none">📄</span><span class="text-[10px] font-bold mt-1">PDF</span></div>':`<img src="${s(e)}" onerror="this.src='/fallback.svg'">`;return`<div class="img-thumb ${a===0?"cover-img":""}" data-index="${a}" data-url="${s(e)}" title="${a===0?"Cover Image (main photo)":"Image "+(a+1)}">
    ${t}
    <button class="rm" onclick="removeImage(${a})" type="button" title="Delete this image (cover can be deleted too)">✕</button>
    <button class="rp" onclick="document.getElementById('rp-input-${a}').click()" type="button" title="Replace image">↻</button>
    <input type="file" accept="image/*,application/pdf" class="rp-input" id="rp-input-${a}" onchange="replaceImage(${a}, this)">
  </div>`}function Ht(){const e=document.getElementById("drop-zone");e&&(e.addEventListener("dragover",a=>{a.preventDefault(),e.classList.add("drag-over")}),e.addEventListener("dragleave",()=>e.classList.remove("drag-over")),e.addEventListener("drop",a=>{a.preventDefault(),e.classList.remove("drag-over"),pn(a.dataTransfer.files)}))}function Gt(){const e=document.getElementById("image-preview");!e||!window.Sortable||new Sortable(e,{animation:150,onEnd:()=>Ae()})}window.handleImageUpload=async function(e){await Ga(e.target.files)};async function pn(e){await Ga(e)}async function Ga(e){const a=document.getElementById("image-preview");if(a){for(const t of e){const i=t.type==="application/pdf"||it(t.name);if(!t.type.startsWith("image/")&&!i)continue;const o=await zt(t);if(o){const n=a.children.length,r=document.createElement("div");r.innerHTML=_e(o,n),a.appendChild(r.firstElementChild),Ae()}}Ue(),ke(),window.lucide&&lucide.createIcons()}}async function zt(e){try{const{data:{session:a}}=await m.auth.getSession(),t=(e.name||"photo.jpg").split(".").pop()||"jpg",i=`products/${Date.now()}-${Math.random().toString(36).slice(2)}`;for(let o=0;o<2;o++){const n=`${i}${o?"-"+Math.random().toString(36).slice(2,7):""}.${t}`,{error:r}=await m.storage.from("product-images").upload(n,e,{contentType:e.type,upsert:!1});if(r)console.warn("product-images upload failed (attempt "+(o+1)+"):",r.message||r);else{const{data:l}=m.storage.from("product-images").getPublicUrl(n);if(l&&l.publicUrl)return l.publicUrl}}try{const o=await U._downscaleImage(e,1200);if(o)return o}catch{}return URL.createObjectURL(e)}catch{return URL.createObjectURL(e)}}window.removeImage=function(e){const a=document.getElementById("image-preview");if(!a)return;const t=[...a.children];t[e]&&t[e].remove(),Ae(),Ue(),ke()};window.replaceImage=async function(e,a){const t=document.getElementById("image-preview");if(!t||!a||!a.files||!a.files[0])return;const i=a.files[0],o=i.type==="application/pdf"||it(i.name);if(!i.type.startsWith("image/")&&!o){p("Please choose an image or PDF file.","error");return}const n=await zt(i);if(!n)return;const r=[...t.querySelectorAll(".img-thumb")][e];r&&(r.outerHTML=_e(n,e),Ae(),Ue(),ke(),p(o?"Document replaced. Save changes to apply.":"Image replaced. Save changes to apply.","info"))};function Ae(){const e=document.getElementById("image-preview"),a=document.getElementById("image-url-inputs");!e||!a||(a.innerHTML="",[...e.querySelectorAll(".img-thumb")].forEach((t,i)=>{const o=t.dataset.url||(t.querySelector("img")?t.querySelector("img").src:"");if(!o)return;const n=document.createElement("input");n.type="hidden",n.name="images",n.id=`img-url-${i}`,n.value=o,a.appendChild(n),t.dataset.index=i;const r=t.querySelector(".rm");r&&r.setAttribute("onclick",`removeImage(${i})`);const l=t.querySelector(".rp");l&&l.setAttribute("onclick",`document.getElementById('rp-input-${i}').click()`);const d=t.querySelector(".rp-input");d&&(d.id=`rp-input-${i}`,d.onchange=()=>replaceImage(i,d))}))}function Ue(){const e=document.getElementById("image-preview");e&&[...e.querySelectorAll(".img-thumb")].forEach((a,t)=>{a.classList.toggle("cover-img",t===0),a.title=t===0?"Cover Image":`Image ${t+1}`})}function ke(){const e=document.getElementById("image-preview"),a=document.getElementById("gallery-counter");if(!e||!a)return;const t=e.querySelectorAll(".img-thumb").length;a.textContent=t?`${t} image${t>1?"s":""} â€” you can save and publish anytime`:"No images yet â€” you can still save and publish anytime",a.className="text-sm mt-1 font-bold text-gray-400"}function De(e,a){return`kco_product_form_autosave_${e}_${a||"new"}`}function mn(e){const a=new FormData(e),t={images:[],tags:[],fields:{}};for(const[i,o]of a.entries())i==="images"?o&&!String(o).startsWith("blob:")&&t.images.push(String(o)):i==="tags"?t.tags.push(String(o)):t.fields[i]=String(o);return t.fields.is_featured=e.querySelector('[name="is_featured"]')?.checked?"on":"",t.fields.is_active=e.querySelector('[name="is_active"]')?.checked?"on":"",t}function gn(e,a){if(!a||typeof a!="object")return!1;const t=a.fields||{};Object.entries(t).forEach(([o,n])=>{const r=e.querySelector(`[name="${o}"]`);r&&(r.type==="checkbox"?r.checked=n==="on"||n===!0:r.value=n==null?"":String(n))});const i=Array.isArray(a.tags)?a.tags:[];if(e.querySelectorAll('input[name="tags"]').forEach(o=>{o.checked=i.includes(o.value)}),Array.isArray(a.images)){const o=document.getElementById("image-preview");o&&(o.innerHTML=a.images.map((n,r)=>_e(n,r)).join(""),Ae(),Ue(),ke())}return!0}function At(){const e=document.getElementById("product-review-content"),a=document.getElementById("product-form");if(!e||!a)return;const t=a.querySelector('[name="title"]')?.value||"Untitled Product",i=a.querySelector('[name="brand"]')?.value||"N/A",o=parseFloat(a.querySelector('[name="price"]')?.value||"0")||0,n=parseFloat(a.querySelector('[name="real_price"]')?.value||"0")||0,r=a.querySelector('[name="stock_quantity"]')?.value,l=r===""||r==null?"Unlimited":r,d=B.section==="products"&&document.querySelector("#product-form")?.dataset?.category||"",c=[...a.querySelectorAll('input[name="tags"]:checked')].map(y=>y.value),u=document.querySelectorAll("#image-preview .img-thumb").length,g=a.querySelector('[name="is_active"]')?.checked;e.innerHTML=`
    <div class="grid grid-cols-2 gap-2">
      <div><span class="text-gray-500">Title</span><p class="text-white font-semibold">${s(t)}</p></div>
      <div><span class="text-gray-500">Brand</span><p class="text-white font-semibold">${s(i)}</p></div>
      <div><span class="text-gray-500">Price</span><p class="text-emerald-300 font-semibold">${n>o?`<span class="line-through text-gray-500 mr-1">$${n.toLocaleString()}</span>`:""}$${o.toLocaleString()}</p></div>
      <div><span class="text-gray-500">Stock</span><p class="text-white font-semibold">${s(l)}</p></div>
      <div><span class="text-gray-500">Images</span><p class="text-white font-semibold">${u}</p></div>
      <div><span class="text-gray-500">Status</span><p class="${g?"text-emerald-300":"text-amber-300"} font-semibold">${g?"Published":"Draft / Hidden"}</p></div>
    </div>
    <div class="mt-2 text-gray-400">Tags: ${c.length?s(c.join(", ")):"No tags selected"}</div>
    ${d?`<div class="text-gray-500 mt-1">Category: ${s(d)}</div>`:""}
  `}window.previewProductDraft=function(){const e=document.getElementById("product-form");if(!e)return;const a=document.querySelector("#image-preview img")?.src||"/fallback.svg",t=e.querySelector('[name="title"]')?.value||"Untitled Product",i=e.querySelector('[name="description"]')?.value||"No description yet.",o=e.querySelector('[name="brand"]')?.value||"N/A",n=parseFloat(e.querySelector('[name="price"]')?.value||"0")||0,r=parseFloat(e.querySelector('[name="real_price"]')?.value||"0")||0,l=e.dataset.category||"Product",d=e.querySelector('[name="stock_quantity"]')?.value||"Unlimited",c=e.querySelector('[name="is_active"]')?.checked;W(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Live Draft Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">ðŸ”™ Back</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="${s(a)}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
          <div class="space-y-2">
            <h4 class="text-xl font-black text-white">${s(t)}</h4>
            <div class="flex items-center gap-2">${ee(c?"active":"inactive")}<span class="badge bg-blue-500/10 text-blue-300 border-blue-500/20">${s(l)}</span></div>
            <p class="text-sm text-gray-400">${s(i)}</p>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">${r>n?`<span class="text-xs line-through text-gray-500 mr-1">$${r.toLocaleString()}</span>`:""}$${n.toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${s(d)}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2 col-span-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${s(o)}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>`)};function bn(e,a){const t=document.getElementById("product-form");if(!t)return;t.dataset.category=e;const i=De(e,a),o=document.getElementById("product-autosave-note");if(!a)try{const d=localStorage.getItem(i);if(d){const c=JSON.parse(d);gn(t,c)&&o&&(o.textContent="Autosave restored from your last session.",o.classList.remove("hidden"))}}catch{}const n=()=>{try{localStorage.setItem(i,JSON.stringify(mn(t))),o&&(o.textContent=`Auto saved at ${new Date().toLocaleTimeString()}`,o.classList.remove("hidden"))}catch{}At()};let r;const l=()=>{clearTimeout(r),r=setTimeout(n,500)};t.querySelectorAll("input, textarea, select").forEach(d=>{d.addEventListener("input",l),d.addEventListener("change",l)}),At(),ke()}const yn=["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],hn=["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"],fn=["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"],vn=["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"],xn=["FWD","RWD","AWD","4WD"],ft=["title","description","brand","model","model_year","color","condition","subcategory","engine","transmission","fuel_type","drive_type","horsepower","mileage","seating_capacity","doors","body_type","safety_features","storage","ram","processor","display","graphics","os","material","size","gender","platform","voltage","type","dimensions","property_type","bedrooms","bathrooms","half_bathrooms","building_size","land_size","floors","garage","parking_spaces","furnished","year_built","year_renovated","area","address","zip_code","landmarks","town","city","state","country","country_code","latitude","longitude","listing_status","interior_features","exterior_features","home_systems","author","publisher","language","format","isbn","pages","edition","quantity","age_range","skin_type","ingredients","pet_type","lens","sensor","megapixels","video","license","version","duration","followers","engagement","niche","usage","shelf_life","assembly","weatherproof","warranty","availability_status"],Je=new Set(["price","real_price","stock_quantity","currency","images","tags","verification_status","is_featured","is_active","sku"]);function oa(e){const a=e.id?`label[for="${e.id}"]`:null,t=a?document.querySelector(a):null;if(t)return t.textContent.replace(/\s+/g," ").trim().slice(0,60);const i=e.closest("div");if(i){const o=i.querySelector("label");if(o)return o.textContent.replace(/\s+/g," ").trim().slice(0,60)}return String(e.name||"").replace(/_/g," ")}function wn(e){const a=typeof e=="string"?document.querySelector(e):e;if(!a)return[];const t=new Set,i=[];return a.querySelectorAll("input[name], select[name], textarea[name]").forEach(o=>{const n=String(o.name||"");if(!n||n==="images"||t.has(n)||["hidden","file","submit","button"].includes(o.type))return;if(t.add(n),o.type==="checkbox"){const l=[...a.querySelectorAll(`input[name="${n}"]`)];i.push({key:n,label:oa(o),type:"checkbox-group",options:l.map(d=>d.value).filter(Boolean),required:o.required});return}if(o.type==="radio")return;const r=o.tagName==="SELECT"?"select":o.tagName==="TEXTAREA"?"textarea":o.type==="number"?"number":"text";i.push({key:n,label:oa(o),type:r,options:o.tagName==="SELECT"?[...o.options].map(l=>l.value).filter(Boolean):null,required:!!o.required})}),i}function _n(e){return!e||!e.length?"":`
THE COMPLETE LIST OF FORM FIELDS (every single one MUST be accounted for):
${e.filter(a=>!Je.has(a.key)).map(a=>{let t=a.type;return a.type==="select"&&a.options&&a.options.length<=24?t+=` [options: ${a.options.join(" | ")}]`:a.type==="checkbox-group"&&a.options&&a.options.length?t+=` [multi-select: ${a.options.join(" | ")}]`:a.type==="number"?t="number":a.type==="textarea"&&(t="long text"),`- "${a.key}" (${a.label}) — ${t}`}).join(`
`)}
`}const za=/^(n\/?a|none|unknown|not (available|specified|found|visible|applicable)|null|undefined|-{1,}|no data)$/i;function ra(e,a){const t={...a||{}},i=new Set(Array.isArray(t.estimated)?t.estimated.map(u=>String(u)):[]),o=new Set(Array.isArray(t.missing_fields)?t.missing_fields.map(u=>String(u)):[]),n=[],r=[],l=u=>{if(u==null)return"";Array.isArray(u)&&(u=u.filter(y=>y!=null&&String(y).trim()!=="").join(", "));let g=String(u).replace(/\s+/g," ").trim();return g=g.replace(/^(answer|value|result|extracted)\s*[:\-]\s*/i,""),g},d=u=>{const g=l(u).replace(/[^0-9.,\-]/g,"").replace(/,(?=\d{3}\b)/g,"").replace(",","."),y=parseFloat(g);return Number.isFinite(y)?y:NaN};for(const u of e||[]){if(Je.has(u.key))continue;const g={key:u.key,label:u.label,status:"empty-ok",value:null,note:""};if(u.type==="checkbox-group"){const b=Array.isArray(t[u.key])?t[u.key].map(l).filter(Boolean):[],h=u.options&&u.options.length?b.filter(v=>u.options.includes(v)):b;h.length?(t[u.key]=h,g.status="filled",g.value=h.join(", ")):(delete t[u.key],b.length&&(g.status="flagged",g.note="values not in the allowed badge list were dropped",r.push(`${u.label}: invalid selection ignored`))),n.push(g);continue}if(!(t[u.key]!=null&&l(t[u.key])!=="")){g.status=o.has(u.key)?"missing":"empty-ok",n.push(g);continue}if(za.test(l(t[u.key]))){delete t[u.key],o.add(u.key),g.status="missing",g.note="document/AI said the value is unavailable",n.push(g);continue}if(u.type==="number"){const b=l(t[u.key]),h=d(t[u.key]);if(!Number.isFinite(h)){delete t[u.key],o.add(u.key),g.status="flagged",g.note=`"${b}" is not a valid number`,r.push(`${u.label}: not a valid number`),n.push(g);continue}if(/year/.test(u.key)&&(h<1800||h>new Date().getFullYear()+2)){delete t[u.key],o.add(u.key),g.status="flagged",g.note=`${h} is outside the plausible range`,r.push(`${u.label}: implausible value ${h}`),n.push(g);continue}t[u.key]=h,g.status="filled",g.value=String(h),i.has(u.key)&&(g.status="estimated",g.note="AI estimate â€” confirm"),n.push(g);continue}if(u.type==="select"&&u.options&&u.options.length){const b=Va({options:u.options.map(h=>({value:h}))},l(t[u.key]));if(b==null){g.status="flagged",g.note=`"${l(t[u.key])}" does not match any option â€” left empty`,r.push(`${u.label}: no matching option`),delete t[u.key],o.add(u.key),n.push(g);continue}t[u.key]=b,g.status="filled",g.value=b,b!==l(a?.[u.key])&&(g.note="matched to the closest option"),n.push(g);continue}let y=l(t[u.key]);u.type!=="textarea"&&u.type!=="text-long"&&y.length>120&&!["title"].includes(u.key)&&(g.status="flagged",g.note="unusually long â€” check it landed in the right field",r.push(`${u.label}: suspiciously long value`)),t[u.key]=y,g.status="filled",g.value=y.length>48?y.slice(0,48)+"â€¦":y,i.has(u.key)&&(g.status="estimated",g.note="AI estimate â€” confirm"),n.push(g)}if(e&&e.length){const u=new Set([...e.map(g=>g.key),"estimated","missing_fields","features","highlights","seo_keywords"]);Object.keys(t).forEach(g=>{u.has(g)||delete t[g]})}t.missing_fields=n.filter(u=>u.status==="missing").map(u=>u.key),t.estimated=n.filter(u=>u.status==="estimated").map(u=>u.key);const c={total:n.length,filled:n.filter(u=>u.status==="filled").length,estimated:n.filter(u=>u.status==="estimated").length,flagged:n.filter(u=>u.status==="flagged").length,missing:n.filter(u=>u.status==="missing").length};return{specs:t,checklist:n,flags:r,summary:c}}function Vt(e,a){if(!e||!e.length)return"";const t={filled:'<span class="text-emerald-400 font-bold">âœ“</span>',estimated:'<span class="text-blue-300 font-bold">â‰ˆ</span>',flagged:'<span class="text-red-400 font-bold">!</span>',missing:'<span class="text-gray-500">â€”</span>',"empty-ok":'<span class="text-gray-700">Â·</span>'},i=e.filter(n=>n.status!=="empty-ok").map(n=>`<li class="flex items-start gap-2"><span class="shrink-0 w-4">${t[n.status]||""}</span><span><b>${s(n.label)}</b> <span class="text-gray-600">(${s(n.key)})</span>${n.value?` â€” <span class="text-gray-300">${s(String(n.value))}</span>`:""}${n.note?` <span class="text-gray-500">${s(n.note)}</span>`:""}</span></li>`).join(""),o=a.total-a.filled-a.estimated-a.flagged-a.missing;return`<details class="mt-2 rounded-xl border border-violet-500/20 bg-violet-500/5 p-3">
    <summary class="cursor-pointer text-[11px] font-bold text-violet-300 select-none">Field checklist â€” ${a.filled} filled Â· ${a.missing} not present in document Â· ${a.flagged} need review${a.estimated?` Â· ${a.estimated} estimates`:""}${o>0?` Â· ${o} not applicable to this listing type`:""}</summary>
    <ul class="mt-2 space-y-1.5 text-[11px] text-gray-300 max-h-64 overflow-y-auto pr-1">${i||'<li class="text-gray-500">No applicable fields found.</li>'}</ul>
  </details>`}const ye={activeProvider:"gemini",maxImages:4,PROVIDERS:{gemini:{label:"Google Gemini (Free Tier)",scan:async(e,a)=>{const t=typeof a.onProgress=="function"?a.onProgress:()=>{};t(1,"Identifying the exact product from your imagesâ€¦");const i=await U.identifyProduct(e,a);if(!i||i.identified===!1)return{identification:i,specs:null,price:null};t(2,"Completing specifications and estimating a fair market priceâ€¦");const o=await U.completeSpecsAndPrice(e,i,a).catch(()=>null);return{identification:i,specs:o?o.specs:null,price:o?o.price:null}}}},async scan(e,a){const t=this.PROVIDERS[this.activeProvider];if(!t)throw new Error(`Scanner provider "${this.activeProvider}" is not configured.`);return t.scan(e||[],a)}};function Va(e,a){const t=[...e.options||[]].map(n=>n.value).filter(Boolean);if(t.includes(String(a)))return String(a);const i={petrol:"Gasoline",gas:"Gasoline",gasoline:"Gasoline",unleaded:"Gasoline",ev:"Electric",electric:"Electric","fully electric":"Electric",hybrid:"Hybrid","hybrid electric":"Hybrid","plug-in hybrid":"Plug-in Hybrid",phev:"Plug-in Hybrid",auto:"Automatic",automatic:"Automatic","automatic transmission":"Automatic",manual:"Manual","manual transmission":"Manual",cvt:"CVT","continuously variable":"CVT","dual clutch":"Dual-Clutch",dct:"Dual-Clutch",fwd:"FWD","front-wheel drive":"FWD","front wheel drive":"FWD",rwd:"RWD","rear-wheel drive":"RWD","rear wheel drive":"RWD",awd:"AWD","all-wheel drive":"AWD","all wheel drive":"AWD","4wd":"4WD","four-wheel drive":"4WD","four wheel drive":"4WD","4x4":"4WD",sedan:"Sedan",saloon:"Sedan",suv:"SUV",hatchback:"Hatchback",coupe:"Coupe","coupÃ©":"Coupe",convertible:"Convertible",wagon:"Wagon",estate:"Wagon",pickup:"Pickup","pick up":"Pickup",van:"Van",truck:"Truck","sports car":"Sports Car",motorcycle:"Motorcycle",yacht:"Yacht","like new":"Used - Like New","used - like new":"Used - Like New"},o=String(a).toLowerCase().trim();return i[o]?i[o]:t.find(n=>n.toLowerCase().includes(o)||o.includes(n.toLowerCase()))||null}function sa(e){const a=[];return e.year&&a.push(e.year),e.brand&&a.push(e.brand),e.model&&a.push(e.model),!e.model&&e.body_type&&a.push(e.body_type),a.join(" ")||e.detected_name||""}const kn=new Set(["images","tags","currency","catalog_template_id","country_code","listing_type","category","property_id","id","slug","user_id","latitude","longitude","cover_image","video_url"]);function Wa(e,{titleFallback:a="Product",descriptionFallback:t=""}={}){const i=document.querySelector(e);if(!i)return 0;let o=0;return i.querySelectorAll("input, textarea, select").forEach(n=>{const r=String(n.name||"").trim();if(!r||kn.has(r))return;const l=String(n.type||"").toLowerCase();if(!["hidden","checkbox","radio","file","submit","button","image","password"].includes(l)&&!n.disabled&&String(n.value||"").trim()===""){if(r==="price"||r==="real_price"){const d=Number.isFinite(Number(H))?Number(H):1;n.value=String(d),o++;return}if(r==="stock_quantity"){n.value="1",o++;return}if(r==="title"){n.value=a,o++;return}if(r==="description"){n.value=t||`${a} â€” full details to be confirmed by the seller. Review and edit everything before publishing.`,o++;return}if(l==="number"||l==="range"||l==="tel"){n.value="0",o++;return}if(n.tagName==="SELECT"&&![...n.options].some(d=>d.value==="Not specified")){const d=document.createElement("option");d.value="Not specified",d.textContent="Not specified",n.appendChild(d)}n.value="Not specified",o++}}),o}function $n(e){const a=e&&e.identification&&e.identification.identified!==!1?e.identification:{},t=e&&e.specs?e.specs:{},i=e&&e.price?e.price:null,o=[],n=P=>Array.isArray(P)?P.join(", "):String(P??"").trim(),r=(P,A,q)=>{if(A==null||n([A])==="")return;const S=document.querySelector(`#product-form [name="${P}"]`);if(!S)return;let E=String(A);if(q&&!q.includes(E)){const M=Va(S,E);if(M===null)return;E=M}S.value=E,o.push(P)};r("brand",a.brand),r("model",a.model),r("color",a.color),r("condition",a.condition,yn),r("subcategory",a.subcategory),r("body_type",a.body_type||t.body_type,hn),r("model_year",t.model_year||a.year),r("title",t.title||sa(a)),r("description",t.description),r("engine",t.engine),r("transmission",t.transmission,fn),r("fuel_type",t.fuel_type,vn),r("drive_type",t.drive_type,xn),r("horsepower",t.horsepower),r("mileage",t.mileage),r("seating_capacity",t.seating_capacity),r("doors",t.doors),r("safety_features",n(t.safety_features)),r("storage",t.storage),r("ram",t.ram),r("processor",t.processor),r("display",t.display),r("graphics",t.graphics),r("os",t.os),r("material",t.material),r("size",t.size),r("gender",t.gender),r("platform",t.platform),r("type",t.type||a.type),r("age_range",t.age_range),r("skin_type",t.skin_type),r("ingredients",t.ingredients),r("dimensions",t.dimensions),r("author",t.author),r("publisher",t.publisher),r("language",t.language),r("format",t.format),r("isbn",t.isbn),r("pages",t.pages),r("edition",t.edition),r("quantity",t.quantity),r("pet_type",t.pet_type),r("lens",t.lens),r("sensor",t.sensor),r("megapixels",t.megapixels),r("video",t.video),r("license",t.license),r("version",t.version),r("duration",t.duration),r("followers",t.followers),r("engagement",t.engagement),r("niche",t.niche),r("usage",t.usage),r("shelf_life",t.shelf_life),r("assembly",t.assembly),r("weatherproof",t.weatherproof),r("warranty",t.warranty||a.warranty),r("availability_status",t.availability_status),r("features_text",n(t.features)),r("highlights_text",n(a.highlights||t.highlights)),r("seo_keywords_text",n(t.seo_keywords));const l=new Set((Array.isArray(t.tags)?t.tags:[]).map(P=>String(P).trim()));document.querySelectorAll('#product-form input[name="tags"]').forEach(P=>{l.has(P.value)&&(P.checked=!0,o.push("tags"))});const d=Number(t.stock_quantity);Number.isFinite(d)&&d>0&&r("stock_quantity",d);const c=new Set((Array.isArray(t.missing_fields)?t.missing_fields:[]).map(P=>String(P))),u=new Set(["title","description","price","real_price","stock_quantity","images","features","highlights","seo_keywords","tags","safety_features"]);c.forEach(P=>{if(u.has(P))return;const A=document.querySelector(`#product-form [name="${P}"]`);if(!(!A||A.type==="checkbox"||A.type==="radio"||A.type==="number")&&String(A.value||"").trim()===""){if(A.tagName==="SELECT"&&![...A.options].some(q=>q.value==="Not specified")){const q=document.createElement("option");q.value="Not specified",q.textContent="Not specified",A.appendChild(q)}A.value="Not specified",o.push(`${P} (Not specified)`)}});const g=document.querySelector('#product-form [name="price"]'),y=document.querySelector('#product-form [name="real_price"]'),b=i?Number(i.estimated_price):NaN,h=i?Number(i.suggested_discount_price):NaN,v=Number.isFinite(Number(H))?Number(H):0,_=Number.isFinite(Number(X))?Number(X):999999999,k=P=>Math.max(v,Math.min(_,Math.round(P)));if(Number.isFinite(b)&&b>0){y&&(y.value=String(k(b)),o.push("real_price"));const P=Number.isFinite(h)&&h>0&&h<b?h:b;g&&(g.value=String(k(P)),o.push("price"))}const f=sa(a)||a.detected_name||"Product",$=t.description||`${f} for sale on Weverse Online Shop. Review the details below and edit anything before publishing.`,x=Wa("#product-form",{titleFallback:f,descriptionFallback:$});return x&&o.push(`${x} auto-completed (Not specified / safe defaults)`),At(),{filled:o}}function lt(e){const a=String(e||"").trim().toLowerCase(),t=ge.find(n=>n.toLowerCase()===a);if(t)return{category:t,listing_type:null};if(/(house|villa|apartment|condo|mansion|land|estate|real estate|property|building|bungalow|townhouse|ranch|farmhouse)/.test(a))return{category:null,listing_type:"property"};const i={bag:"Fashion",bags:"Fashion",handbag:"Fashion",handbags:"Fashion",backpack:"Fashion",backpacks:"Fashion",purse:"Fashion",wallet:"Fashion",wallets:"Fashion",luggage:"Travel & Luggage",sneaker:"Fashion",sneakers:"Fashion",shoe:"Fashion",shoes:"Fashion",boot:"Fashion",boots:"Fashion",footwear:"Fashion",sandal:"Fashion",sandals:"Fashion",heel:"Fashion",heels:"Fashion",phone:"Phones",smartphone:"Phones",smartphones:"Phones",iphone:"Phones","mobile phone":"Phones",laptop:"Computers",laptops:"Computers",computer:"Computers",notebook:"Computers",macbook:"Computers",pc:"Computers",desktop:"Computers",electronics:"Electronics",electronic:"Electronics",gadget:"Electronics",gadgets:"Electronics",tv:"Electronics",television:"Electronics",headphones:"Electronics",speaker:"Electronics",speakers:"Electronics",soundbar:"Electronics",tablet:"Electronics",earbuds:"Electronics",camera:"Cameras & Photography",cameras:"Cameras & Photography",dslr:"Cameras & Photography",drone:"Cameras & Photography",jewelry:"Jewelry",jewellery:"Jewelry",ring:"Jewelry",necklace:"Jewelry",earring:"Jewelry",earrings:"Jewelry",bracelet:"Jewelry",watch:"Watches & Accessories",watches:"Watches & Accessories",wristwatch:"Watches & Accessories","smart watch":"Watches & Accessories",clothing:"Fashion",clothes:"Fashion",fashion:"Fashion",shirt:"Fashion",shirts:"Fashion",dress:"Fashion",dresses:"Fashion",jacket:"Fashion",jackets:"Fashion",hoodie:"Fashion",jeans:"Fashion","t-shirt":"Fashion",tshirt:"Fashion",apparel:"Fashion","men's fashion":"Men","mens fashion":"Men","women's fashion":"Women","womens fashion":"Women",car:"Cars",cars:"Cars",vehicle:"Cars",vehicles:"Cars",automobile:"Cars",suv:"Cars",sedan:"Cars","luxury car":"Cars","luxury cars":"Cars",truck:"Trucks",trucks:"Trucks",trailer:"Trucks",bus:"Trucks",motorcycle:"Motorcycles",motorbike:"Motorcycles","motor bike":"Motorcycles",bicycle:"Bicycles",bicycles:"Bicycles",cycling:"Bicycles",bike:"Bicycles",motorhome:"RV & Camper Accessories",motorhomes:"RV & Camper Accessories",camper:"RV & Camper Accessories",rv:"RV & Camper Accessories",boat:"Marine & Boating",boats:"Marine & Boating",yacht:"Marine & Boating",jet:"Marine & Boating",beauty:"Beauty",skincare:"Beauty",cosmetics:"Beauty",makeup:"Beauty",perfume:"Beauty",kitchen:"Kitchen",appliance:"Home Appliances",appliances:"Home Appliances",blender:"Kitchen",kettle:"Kitchen",cookware:"Kitchen",vacuum:"Home Appliances",furniture:"Furniture",sofa:"Furniture",chair:"Furniture",chairs:"Furniture",table:"Furniture",tables:"Furniture",bed:"Furniture",mattress:"Furniture",desk:"Furniture",toy:"Toys & Hobbies",toys:"Toys & Hobbies",game:"Gaming",games:"Gaming",gaming:"Gaming",console:"Gaming",food:"Food & Groceries",groceries:"Food & Groceries",snack:"Food & Groceries",snacks:"Food & Groceries",beverage:"Food & Groceries",baby:"Baby",kids:"Kids",stroller:"Baby",health:"Health & Medical",medical:"Health & Medical",supplement:"Health & Medical",fitness:"Sports",sport:"Sports",sports:"Sports",gym:"Sports",dumbbell:"Sports",book:"Books",books:"Books",textbook:"Books",novel:"Books",stationery:"Office",office:"Office",printer:"Office",pen:"Office",pet:"Pets",pets:"Pets",dog:"Pets",cat:"Pets",musical:"Musical Instruments",guitar:"Musical Instruments",piano:"Musical Instruments",instrument:"Musical Instruments",drum:"Musical Instruments",software:"Software & Digital Products",digital:"Software & Digital Products",account:"Software & Digital Products",accounts:"Software & Digital Products",instagram:"Software & Digital Products",tiktok:"Software & Digital Products",camping:"Camping & Hiking",tent:"Camping & Hiking",hiking:"Camping & Hiking",flower:"Flowers & Gifts",flowers:"Flowers & Gifts",gift:"Flowers & Gifts",gifts:"Flowers & Gifts",wedding:"Wedding Supplies",party:"Party & Event Supplies",coin:"Coins & Bullion",coins:"Coins & Bullion",art:"Arts & Crafts",painting:"Arts & Crafts",craft:"Arts & Crafts"},o=i[a]||i[a.replace(/s$/,"")]||i[a.replace(/\s+/g," ")];if(o)return{category:o,listing_type:null};for(const n of ge)if(a.includes(n.toLowerCase())||a.length>2&&n.toLowerCase().includes(a))return{category:n,listing_type:null};return{category:Pi(a)||"Other",listing_type:null}}function Sn(e){const a=String(e||"").toLowerCase().trim();return a&&(Tt.find(i=>i.toLowerCase()===a)||Tt.find(i=>i.toLowerCase().includes(a)||a.includes(i.toLowerCase())))||null}let Qe=null;window._resolveScanConfirm=function(e,a){typeof Qe=="function"&&Qe({choice:e,category:a})};let G=[],he=[],Z="",Re=-1;function Wt(e,a){const t=(Array.isArray(e.image_indices)?e.image_indices:[]).map(i=>a[i]).filter(Boolean);return t.length?t:a}function Pn(e,a){const t=lt(e.category),i=e.listing_type==="property"||t&&t.listing_type==="property",o=i?"Real Estate":t.category||e.category||"Other",n=e.confidence||"medium",r={high:"bg-emerald-500/10 text-emerald-400 border-emerald-500/20",medium:"bg-amber-500/10 text-amber-400 border-amber-500/20",low:"bg-red-500/10 text-red-400 border-red-500/20"}[n]||"bg-amber-500/10 text-amber-400 border-amber-500/20",l=Wt(e,he).slice(0,3);return`
  <div class="scan-review-card rounded-xl border border-violet-500/30 bg-violet-500/10 p-3 space-y-2 fade-in" data-i="${a}">
    <div class="flex items-center justify-between gap-2 flex-wrap">
      <p class="text-xs font-bold text-white">${a+1}. ${s(e.detected_name||"Detected product")}</p>
      <span class="inline-flex items-center gap-1">
        ${e._photoNotRead?'<span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border bg-red-500/10 text-red-300 border-red-500/20" title="The AI could not read the photos for this card - it was created from saved details only.">PHOTO NOT READ</span>':""}
        <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${r}">${s(n).toUpperCase()}</span>
      </span>
    </div>
    <div class="flex items-center gap-2 flex-wrap">
      ${l.map(d=>`<img src="${s(d)}" class="w-10 h-10 rounded-lg object-cover border border-violet-500/20" onerror="this.src='/fallback.svg'">`).join("")}
      <span class="text-[11px] text-gray-400">${i?"Real Estate":s(o)} Â· ${(e.image_indices||[]).length||1} image(s)</span>
    </div>
    <div class="flex flex-wrap gap-2">
      <button type="button" onclick="scanReviewContinue(${a})" class="btn-press px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg transition">Continue to ${i?"Properties Manager":"its form"}</button>
      <button type="button" onclick="scanReviewEdit(${a})" class="btn-press px-4 py-2 bg-gray-700/60 hover:bg-gray-600 text-gray-200 text-xs font-bold rounded-lg transition">Edit</button>
      <button type="button" onclick="scanReviewRemove(${a})" class="btn-press px-4 py-2 bg-red-900/40 hover:bg-red-800/60 text-red-200 text-xs font-bold rounded-lg transition">Remove</button>
      <button type="button" onclick="scanReviewCancel()" class="btn-press px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 text-xs font-bold rounded-lg transition">Cancel</button>
    </div>
  </div>`}window.scanReviewRender=function(){const e=document.getElementById(Z);if(e){if(e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),!G.length){e.classList.add("text-gray-400"),e.textContent="All detected products were removed â€” nothing was changed.";return}e.classList.add("text-gray-100"),e.innerHTML=`
    <div class="space-y-3">
      <div>
        <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="list-checks" class="w-4 h-4 text-violet-400"></i> ${G.length} distinct product${G.length>1?"s":""} detected</p>
        <p class="text-[11px] text-gray-400 mt-1">Photos of the same product are grouped into one listing; different products stay separate. Edit or remove cards as needed â€” then either Continue one-by-one, or press Continue with ALL to save & publish everything in one click.</p>
        <button type="button" id="btn-scan-continue-all" onclick="scanReviewContinueAll()" class="btn-press mt-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition flex items-center gap-2"><i data-lucide="rocket" class="w-4 h-4"></i> Continue with ALL â€” Save &amp; Publish Everything</button>
      </div>
      ${G.map((a,t)=>Pn(a,t)).join("")}
    </div>`,window.lucide&&lucide.createIcons()}};window.scanReviewContinue=async function(e){const a=G[e];if(!a)return;Re=e;const t=Wt(a,he),i=lt(a.category);if(a.listing_type==="property"||i&&i.listing_type==="property"){(Z==="s1-scan-status"||Z==="scanner-scan-status")&&(ce(),be=[]),In(a,t);return}const o=i.category||a.category||"Other";if(Z==="s1-scan-status"||Z==="scanner-scan-status"){try{localStorage.removeItem(De(o,""))}catch{}be=[];let n=a.property_id?xe[a.property_id]:null;n&&n.specifications&&typeof n.specifications=="object"&&(n={...n,...n.specifications}),showAddProductStep2(o,n?{...n,images:t}:{images:t}),await la(a,t,o)}else{const n=document.getElementById("product-form"),r=n&&n.dataset.category||"";if(o!==r){try{localStorage.removeItem(De(o,""))}catch{}switchProductFormCategory(o);const l=document.getElementById(Z);l&&(l.classList.remove("hidden"),l.classList.add("text-blue-300"),l.textContent=`Category changed to ${o} â€” finishing the scanâ€¦`),window.lucide&&lucide.createIcons()}await la(a,t,o)}};window.scanReviewEdit=function(e){const a=G[e];if(!a)return;const t=document.querySelector(`.scan-review-card[data-i="${e}"]`);if(!t)return;const i=lt(a.category),o=a.listing_type==="property"||i&&i.listing_type==="property"?"Real Estate":i.category||a.category||"Other",n=ge.map(r=>`<option value="${s(r)}" ${r===o?"selected":""}>${s(r)}</option>`).join("");t.innerHTML=`
    <p class="text-xs font-bold text-white">Edit detected product #${e+1}</p>
    <div class="space-y-2">
      <input id="sr-name-${e}" class="input-field !py-2 !text-xs" value="${s(a.detected_name||"")}" placeholder="Product name">
      <input id="sr-brand-${e}" class="input-field !py-2 !text-xs" value="${s(a.brand||"")}" placeholder="Brand">
      <input id="sr-model-${e}" class="input-field !py-2 !text-xs" value="${s(a.model||"")}" placeholder="Model">
      <select id="sr-cat-${e}" class="input-field !py-2 !text-xs">${n}</select>
    </div>
    <div class="flex flex-wrap gap-2">
      <button type="button" onclick="scanReviewApplyEdit(${e})" class="btn-press px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition">Apply</button>
      <button type="button" onclick="scanReviewRender()" class="btn-press px-4 py-2 bg-gray-700/60 hover:bg-gray-600 text-gray-200 text-xs font-bold rounded-lg transition">Back</button>
    </div>`};window.scanReviewApplyEdit=function(e){const a=G[e];if(!a)return;const t=document.getElementById(`sr-name-${e}`)?.value,i=document.getElementById(`sr-brand-${e}`)?.value,o=document.getElementById(`sr-model-${e}`)?.value,n=document.getElementById(`sr-cat-${e}`)?.value;t&&(a.detected_name=t),i&&(a.brand=i),o&&(a.model=o),n&&(a.category=n),scanReviewRender()};window.scanReviewRemove=function(e){G.splice(e,1),scanReviewRender()};window.scanReviewCancel=function(){const e=document.getElementById(Z);e&&(e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300"),e.classList.add("text-gray-400"),e.textContent="Scan cancelled â€” nothing was changed.")};window.scanReviewContinueAll=async function(){const e=document.getElementById(Z),a=(c,u)=>{e&&(e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400","text-gray-100"),u&&e.classList.add(u),e.innerHTML=c,window.lucide&&lucide.createIcons())};if(!G.length)return;const t=document.getElementById("btn-scan-continue-all");t&&(t.disabled=!0,t.textContent="Saving everythingâ€¦");const i=G.length;let o=0,n=0,r=0;const l=[];for(let c=0;c<i;c++){const u=G[c];if(!u)continue;const g=lt(u.category);if(u.listing_type==="property"||g&&g.listing_type==="property"){l.push(c);continue}const y=g.category||u.category||"Other",b=Wt(u,he);a(`<p class="flex items-center gap-2"><i data-lucide="loader" class="w-4 h-4 animate-spin text-blue-300"></i> Completing ${c+1} of ${i}: <b>${s(u.detected_name||"product")}</b>â€¦</p>`,"text-blue-300");try{const h=await U.completeSpecsAndPrice(b,u,{category:y,maxImages:ye.maxImages}).catch(()=>null);let v=h&&h.specs||{},_=h?h.price:null;if(je()){const I=await U.verifyExtraction(b,u,v,[],{maxImages:ye.maxImages}).catch(()=>null);if(I&&I.corrections&&typeof I.corrections=="object"){for(const[j,w]of Object.entries(I.corrections))w==null||String(Array.isArray(w)?w.join(", "):w).trim()===""||ft.includes(j)&&(v[j]=w);for(const[j,w]of Array.isArray(I.wrong_mapping)?I.wrong_mapping:[])ft.includes(w)&&v[j]!=null&&(v[w]==null||String(v[w]).trim()==="")&&(v[w]=v[j],delete v[j])}}const k={};for(const[I,j]of Object.entries(v)){if(!ft.includes(I)||Je.has(I))continue;const w=Array.isArray(j)?j.map(D=>String(D??"").replace(/\s+/g," ").trim()).filter(Boolean):String(j??"").replace(/\s+/g," ").trim();if(!(!w.length||(Array.isArray(w)?w.join(" "):w).match(za))){if(/^(model_)?year/.test(I)){const D=parseInt(w,10);if(!Number.isFinite(D)||D<1800||D>new Date().getFullYear()+2)continue}k[I]=w}}v=k;const f=v||{},$=u.property_id&&xe[u.property_id]||null,x=$?$.specifications&&typeof $.specifications=="object"?{...$,...$.specifications}:$:null,P=[u.year||f.year,u.brand||f.brand,u.model||f.model].filter(Boolean).join(" ")||u.detected_name||"Product",A=_?Number(_.estimated_price??_.price??_.estimate):NaN;let q=Number.isFinite(A)&&A>0?A:x?Number(x.price):NaN;(!Number.isFinite(q)||q<=0)&&(q=H),q=Math.max(H,Math.min(X,q));const S=new Set(["title","description","brand","color","size","condition","warranty","availability_status"]),E={};for(const[I,j]of Object.entries({...Object.fromEntries(Ct.filter(w=>w!=="year_estimated"&&w!=="listing_status").map(w=>[w,u[w]??null])),...f})){if(S.has(I)||Je.has(I))continue;const w=Array.isArray(j)?j.filter(D=>D!=null&&String(D).trim()!==""):j;w==null||typeof w=="string"&&!w.trim()||(E[I]=w)}const M={...x&&x.specifications&&typeof x.specifications=="object"?x.specifications:{},...E},te={listing_type:"product",category:y,subcategory:x?.subcategory||f.subcategory||null,title:f.title||x&&x.title||P,description:f.description||x&&x.description||"",price:q,currency:x&&x.currency||"USD",country:x&&x.country||"",country_code:x&&x.country_code||"",listing_status:"sale",state:"",city:"",product_location:"",latitude:null,longitude:null,is_active:!0,is_featured:!!(x&&x.is_featured),brand:u.brand||f.brand||x&&x.brand||null,color:f.color||x&&x.color||null,size:f.size||x&&x.size||null,condition:x&&x.condition||null,warranty:x&&x.warranty||null,availability_status:x&&x.availability_status||"In Stock",stock_quantity:x&&x.stock_quantity?parseInt(x.stock_quantity):null,images:b.length?b:x&&x.images||[],features:Array.isArray(f.features)&&f.features.length?f.features:x&&x.features||[],tags:Array.isArray(f.tags)&&f.tags.length?f.tags:x&&x.tags||[],highlights:Array.isArray(f.highlights)&&f.highlights.length?f.highlights:x&&x.highlights||[],seo_keywords:Array.isArray(f.seo_keywords)&&f.seo_keywords.length?f.seo_keywords:x&&x.seo_keywords||[],is_ai_generated:!0,ai_generated_fields:["title","description","specifications","price"],specifications:M,updated_at:new Date().toISOString()};if(x&&x.property_id){te.property_id=x.property_id;const{error:I}=await Ye(te);if(I)throw I;n++}else{te.property_id=nt();const{error:I}=await Ye(te);if(I)throw I;o++}}catch(h){r++,a(`<p class="text-amber-300">Could not save "${s(u.detected_name||"product")}": ${s(String(h?.message||h))} â€” continuing with the restâ€¦</p>`,"text-amber-300")}}G=G.filter((c,u)=>l.includes(u));const d=`${n} updated, ${o} new${r?`, ${r} failed`:""}`;if(!G.length)xe={},he=[],a(`<div class="space-y-1">
      <p class="font-bold text-emerald-300 flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4"></i> Done â€” everything saved &amp; published: ${d}.</p>
      <p class="text-[11px] text-gray-400">Your products are live in the showroom. Use Publish &amp; Deploy to push the site.</p>
    </div>`,"text-emerald-300"),p(`All done â€” ${d} saved & published.`,"success");else{scanReviewRender();const c=document.getElementById(Z);if(c){const u=document.createElement("p");u.className="text-xs font-bold text-emerald-300",u.textContent=`Saved & published: ${d}. Property cards below still need Continue.`,c.prepend(u)}p(`Saved ${d}.`,r?"info":"success")}O()};function Ya(e){const a=e&&e.identification&&e.identification.identified!==!1?e.identification:{},t=e&&e.specs?e.specs:{},i=e&&e.price?e.price:null,o=[],n=C=>Array.isArray(C)?C.join(", "):String(C??"").trim(),r=(C,N)=>{if(N==null||n([N])==="")return;const Q=document.querySelector(`#property-form [name="${C}"]`);Q&&(Q.value=String(N),o.push(C))},l=a.property_type||t.property_type;if(l){const C=Sn(l);C&&r("property_type",C)}r("title",t.title||a.detected_name),r("description",t.description),r("subcategory",a.subcategory||t.subcategory);const d=a.bedrooms??t.bedrooms;d!=null&&d!==""&&r("bedrooms",parseInt(d,10)||d);const c=a.bathrooms??t.bathrooms;c!=null&&c!==""&&r("bathrooms",parseInt(c,10)||c),r("building_size",a.building_size||t.building_size),r("land_size",a.land_size||t.land_size);const u=a.parking_spaces??t.parking_spaces;u!=null&&u!==""&&r("parking_spaces",parseInt(u,10)||u);const g=String(a.furnished||t.furnished||"").toLowerCase();/furnished|yes/.test(g)?r("furnished","Furnished"):/unfurnished|no|empty/.test(g)&&r("furnished","Unfurnished");const y=String(a.listing_status||t.listing_status||"").toLowerCase();/rent|lease/.test(y)?r("listing_status","rent"):/sale|buy|purchase/.test(y)&&r("listing_status","sale");const b=a.area||t.area;b&&!(a.town||t.town)&&r("town",b),r("town",a.town||t.town),r("city",a.city||t.city),r("state",a.state||t.state);const h=a.country||t.country;if(r("country",h),h){const C=(Ee||[]).find(N=>String(N.name||"").toLowerCase()===String(h).toLowerCase()||String(N.code||"").toLowerCase()===String(h).toLowerCase());if(C&&C.code){const N=document.querySelector('#property-form [name="country_code"]');N&&(N.value=C.code,o.push("country_code"))}}const v=a.address||t.address;r("product_location",v||[b||a.town||t.town,a.city||t.city,a.state||t.state,h].filter(Boolean).join(", ")),r("address",a.address||t.address),r("zip_code",a.zip_code||t.zip_code);const _=Number(a.latitude??t.latitude),k=Number(a.longitude??t.longitude);Number.isFinite(_)&&_>=-90&&_<=90&&_!==0&&r("latitude",String(_)),Number.isFinite(k)&&k>=-180&&k<=180&&k!==0&&r("longitude",String(k)),r("features_text",n(t.features)),r("highlights_text",n(a.highlights||t.highlights)),r("seo_keywords_text",n(t.seo_keywords));const f=a.half_bathrooms??t.half_bathrooms;f!=null&&f!==""&&r("half_bathrooms",parseInt(f,10)||f);const $=a.floors??t.floors;$!=null&&$!==""&&r("floors",parseInt($,10)||$),r("garage",a.garage||t.garage);const x=a.year_built??t.year_built;x!=null&&x!==""&&r("year_built",parseInt(x,10)||x);const P=a.year_renovated??t.year_renovated;P!=null&&P!==""&&r("year_renovated",parseInt(P,10)||P);const A=a.condition||t.condition,q=["New Construction","Like New","Excellent","Good","Fair","Needs Renovation"];if(A){const C=String(A).toLowerCase(),N=q.find(Q=>C.includes(Q.toLowerCase())||Q.toLowerCase().includes(C));N&&r("condition",N)}r("interior_features_text",n(t.interior_features)),r("exterior_features_text",n(t.exterior_features)),r("home_systems_text",n(t.home_systems));const S=n(a.landmarks||t.landmarks);S&&r("landmarks_text",S);const E=t.floor_plan;if(E&&typeof E=="object"){E.image&&r("floor_plan_image",E.image),E.levels&&r("floor_plan_levels",E.levels),E.total_area&&r("floor_plan_total_area",E.total_area);const C=Array.isArray(E.rooms)?E.rooms.map(N=>{const Q=String(N).match(/^(.*?):\s*(.*)$/);return Q?`${Q[1].trim()}: ${Q[2].trim()}`:String(N)}):[];C.length&&r("floor_plan_rooms",C.join(", "))}const M=t.nearby_area;M&&typeof M=="object"&&(Array.isArray(M.schools)&&M.schools.length&&r("nearby_schools_text",M.schools.join(", ")),Array.isArray(M.hospitals)&&M.hospitals.length&&r("nearby_hospitals_text",M.hospitals.join(", ")),Array.isArray(M.shopping)&&M.shopping.length&&r("nearby_shopping_text",M.shopping.join(", ")),Array.isArray(M.transportation)&&M.transportation.length&&r("nearby_transportation_text",M.transportation.join(", ")),Array.isArray(M.distances)&&M.distances.length&&r("nearby_distances_text",M.distances.join(", ")));const te=Array.isArray(t.legal_info)?t.legal_info.join(", "):n(t.legal_info);te&&r("legal_info_text",te),t.inspection_info&&r("inspection_info",t.inspection_info),t.risk_notes&&r("risk_notes",t.risk_notes);const I=document.querySelector('#property-form [name="verification_status"]');I&&(I.value="Not verified",o.push("verification_status"));const j=new Set((Array.isArray(t.missing_fields)?t.missing_fields:[]).map(C=>String(C))),w=new Set(["title","description","price","real_price","features","highlights","seo_keywords","country","country_code","state","city","town","product_location","area","address","zip_code","latitude","longitude","landmarks_text","interior_features_text","exterior_features_text","home_systems_text","floor_plan_image","floor_plan_levels","floor_plan_total_area","floor_plan_rooms","nearby_schools_text","nearby_hospitals_text","nearby_shopping_text","nearby_transportation_text","nearby_distances_text","legal_info_text","inspection_info","risk_notes","documents_text","verification_date","verification_status"]);j.forEach(C=>{if(w.has(C))return;const N=document.querySelector(`#property-form [name="${C}"]`);if(!(!N||N.type==="checkbox"||N.type==="radio"||N.type==="number")&&String(N.value||"").trim()===""){if(N.tagName==="SELECT"&&![...N.options].some(Q=>Q.value==="Not specified")){const Q=document.createElement("option");Q.value="Not specified",Q.textContent="Not specified",N.appendChild(Q)}N.value="Not specified",o.push(`${C} (Not specified)`)}});const D=Number.isFinite(Number(H))?Number(H):0,R=Number.isFinite(Number(X))?Number(X):999999999,re=C=>Math.max(D,Math.min(R,Math.round(C))),Le=i?Number(i.estimated_price):NaN,Ge=i?Number(i.suggested_discount_price):NaN;if(Number.isFinite(Le)&&Le>0){const C=document.querySelector('#property-form [name="real_price"]');C&&(C.value=String(re(Le)),o.push("real_price"));const N=Number.isFinite(Ge)&&Ge>0&&Ge<Le?Ge:Le;r("price",String(re(N)))}const ta=String(t.title||a.detected_name||"Property").trim()||"Property",ui=t.description||`${ta} available on Weverse Online Shop. Review the details below and edit anything before publishing.`,aa=Wa("#property-form",{titleFallback:ta,descriptionFallback:ui});return aa&&o.push(`${aa} auto-completed (Not specified / safe defaults)`),typeof window.refreshPropertyMapFromForm=="function"&&window.refreshPropertyMapFromForm(),{filled:o}}const Ct=["brand","model","year","year_estimated","body_type","color","condition","subcategory","property_type","bedrooms","bathrooms","half_bathrooms","building_size","land_size","floors","garage","parking_spaces","furnished","year_built","year_renovated","area","address","zip_code","landmarks","town","city","state","country","latitude","longitude","listing_status"];function Yt(){return Date.now()<(typeof U<"u"&&U._geminiQuotaUntil||0)?'<p class="text-[11px] text-amber-300 mt-1">⚠ Your Gemini key hit its FREE rate limit during this scan — parts were completed from saved details only. Wait ~1 minute and scan again for full AI reading.</p>':""}function je(){try{return localStorage.getItem("weverse_scan_verify")==="on"}catch{return!1}}function En(e){try{localStorage.setItem("weverse_scan_verify",e?"on":"off")}catch{}}window.scanVerifyPassEnabled=je;window.setScanVerifyPass=En;async function Kt(e){U.beginScanSession();try{const a=await U.preflight(),t=a.gemini,i=a.groq;t&&t.ok&&i&&i.ok?e(`<span class="inline-flex items-center gap-1"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-300"></i> AI ready — Gemini primary + Groq backup verified (${s(t.model||"")}).</span>`,"text-emerald-300"):t&&t.ok?e(`AI ready via Gemini${t.model?` (${s(t.model)})`:""}. Groq backup not available${i&&i.error?": "+s(i.error):"."} Scans continue on Gemini alone.`,"text-emerald-300"):i&&i.ok?e(`Gemini unavailable${t&&t.error?" ("+s(t.error)+")":""} — scans will run on the Groq backup only.`,"text-amber-300"):a.error?e(`AI service unreachable (${s(a.error)}) — results will be filled from saved details only, clearly marked.`,"text-red-400"):e("No working vision provider found. Add a Google Gemini key (primary) and optionally a Groq key (backup) in AI Settings.","text-red-400")}catch{e("AI preflight failed — continuing anyway.","text-amber-300")}}async function Jt({imageUrls:e,identification:a,category:t,formSelector:i,verify:o=je()}){const n=wn(i),r=_n(n),l=await U.completeSpecsAndPrice(e,a,{category:t||"",maxImages:ye.maxImages,fieldsSchema:r}),d=l?l.price:null,c=l&&l.specs||{};let u={};for(const v of Ct)a&&a[v]!=null&&a[v]!==""&&(u[v]=a[v]);u={...u,...c};let g=ra(n,u),y=!1;const b=`${l&&l.specs&&l.specs._aiProvider||""} ${l&&l.specs&&l.specs._aiModel||""}`,h=!/pollinations|free ai/i.test(b);if(o&&h)try{const v=await U.verifyExtraction(e,a,g.specs,n,{maxImages:ye.maxImages});if(v){const _=v.corrections&&typeof v.corrections=="object"?v.corrections:{},k=Object.keys(_);if(k.length){const f={...g.specs};for(const[$,x]of Object.entries(_))n.some(P=>P.key===$)&&(x==null||String(Array.isArray(x)?x.join(", "):x).trim()===""||(f[$]=x));for(const[$,x]of Array.isArray(v.wrong_mapping)?v.wrong_mapping:[])f[$]!=null&&(f[x]==null||String(f[x]).trim()==="")&&(f[x]=f[$],delete f[$]);g=ra(n,f),a={...a};for(const $ of k)Ct.includes($)&&g.specs[$]!=null&&(a[$]=g.specs[$])}y=!0,g.verificationNotes=Array.isArray(v.notes)?v.notes.slice(0,4):[]}}catch{}return{specs:g.specs,price:d,checklist:g.checklist,summary:g.summary,verified:y,verificationNotes:g.verificationNotes||[],identification:a,visionUsed:h,verifyRequested:!!o,providerLabel:b.trim()||"unknown"}}async function la(e,a,t){const i=document.getElementById("scan-ai-status"),o=(n,r)=>{i&&(i.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),r&&i.classList.add(r),i.innerHTML=n)};try{o("Reading every image/page, completing all specifications and pricesâ€¦","text-blue-300");let n=e;const r=await Jt({imageUrls:a,identification:n,category:t,formSelector:"#product-form"});n=r.identification||n;const l=$n({identification:n,specs:r.specs,price:r.price}),d=[n.year,n.brand,n.model].filter(Boolean).join(" ")||n.detected_name||"the product";let c=`${s(d)} â€” ${l.filled.length} field${l.filled.length>1?"s":""} ready for you (including the detailed description and suggested Real + Discount prices). Review and edit everything, then press SAVE / UPDATE.`;n.year_estimated&&(c+=" Confirm the model year before saving."),r.visionUsed?r.verifyRequested&&(c+=r.verified?'<p class="text-[11px] text-gray-400 mt-1">✓ Second-pass verification completed — every value was re-checked against your document.</p>':'<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run — values come from the first pass.</p>'):c+=`<p class="text-[11px] text-red-300 mt-1">⚠ Photo was NOT read by AI (${s(r.providerLabel||"text fallback")}) — the values below did NOT come from your images. Re-scan when the key/quota is available.</p>`,r.summary.flagged&&(c+=`<p class="text-[11px] text-red-300 mt-1">${r.summary.flagged} value${r.summary.flagged>1?"s need":" needs"} your attention below.</p>`),c+=Yt(),c+=Vt(r.checklist,r.summary),o(c,"text-emerald-300"),p(`Review ${d}, then press SAVE / UPDATE.`,"success")}catch(n){const r=String(n?.message||n),l=/key|api|configured|settings|vision/i.test(r);o(l?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${r}`,"text-red-400"),p("AI scan failed.","error")}window.lucide&&lucide.createIcons()}window.scanProductWithAI=async function(){const e=document.getElementById("product-form");if(!e){p("Open the product form first.","error");return}const a=document.getElementById("btn-scan-ai"),t=document.getElementById("scan-ai-status"),i=[...document.querySelectorAll('#image-url-inputs [name="images"]')||[]].map(d=>d.value).filter(Boolean);if(!i.length){p("Upload at least one product image before scanning.","error");return}const o=a?a.innerHTML:"",n=(d,c)=>{t&&(t.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),c&&t.classList.add(c),t.innerHTML=d)};await Kt(n),a&&(a.disabled=!0,a.innerHTML="Scanningâ€¦"),n("Detecting every distinct product in your imagesâ€¦","text-blue-300");let r;try{r=await U.detectProducts(i,{category:e.dataset.category||"",maxImages:ye.maxImages})}catch(d){const c=String(d?.message||d),u=/key|api|configured|settings|vision/i.test(c);n(u?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${c}`,"text-red-400"),p("AI scan failed.","error"),a&&(a.disabled=!1,a.innerHTML=o);return}a&&(a.disabled=!1,a.innerHTML=o);let l=r&&r.identified!==!1&&Array.isArray(r.products)&&r.products.length?r.products:[];l.length||(l=[{detected_name:"Product from your photos",category:e.dataset.category||"Other",listing_type:"product",confidence:"low",image_indices:i.map((d,c)=>c)}],n("The AI could not confidently read these photos â€” a card was created with all of them. Review, edit the details, then continue to save & publish.","text-amber-300")),G=l,he=i,xe={},Z="scan-ai-status",scanReviewRender(),p(`${l.length} distinct product${l.length>1?"s":""} detected â€” review each one, then continue.`,"info")};function In(e,a){window._pfEscapeHandler&&(document.removeEventListener("keydown",window._pfEscapeHandler),window._pfEscapeHandler=null),showAddPropertyModal();const t=document.getElementById("image-preview"),i=document.getElementById("image-url-inputs");t&&i&&(t.innerHTML=a.map((r,l)=>_e(r,l)).join(""),i.innerHTML=a.map((r,l)=>`<input type="hidden" name="images" id="img-url-${l}" value="${s(r)}">`).join(""),Ue(),ke());const o=document.getElementById("scan-ai-prop-status"),n=(r,l)=>{o&&(o.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300"),l&&o.classList.add(l),o.innerHTML=r)};n("Reading every page, completing property details and valueâ€¦","text-blue-300"),(async()=>{try{const r=await Jt({imageUrls:a,identification:e,category:"Real Estate",formSelector:"#property-form"}),l=r.identification||e,d=Ya({identification:l,specs:r.specs,price:r.price});let c;r.price?c=`${s(l.detected_name||"Property")} â€” ${d.filled.length} field${d.filled.length>1?"s":""} ready for you. Review and edit everything, then press Publish Property.`:c=`${s(l.detected_name||"Property")} â€” ${d.filled.length} fields ready. Price estimate skipped â€” set the price manually, then press Publish Property.`,r.visionUsed?r.verifyRequested&&(c+=r.verified?'<p class="text-[11px] text-gray-400 mt-1">✓ Second-pass verification completed — every value was re-checked against your document.</p>':'<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run — values come from the first pass.</p>'):c+=`<p class="text-[11px] text-red-300 mt-1">⚠ Photo was NOT read by AI (${s(r.providerLabel||"text fallback")}) — these values did NOT come from your images.</p>`,c+=Yt(),c+=Vt(r.checklist,r.summary),n(c,r.price?"text-emerald-300":"text-amber-300"),p("Review the property details, then press Publish Property.","success"),window.lucide&&lucide.createIcons()}catch(r){const l=/key|api|configured|settings|vision/i.test(String(r?.message||r));n(l?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${String(r?.message||r)}`,"text-red-400"),p("AI scan failed.","error")}})()}window.scanPropertyWithAI=async function(){if(!document.getElementById("property-form")){p("Open the property form first.","error");return}const e=document.getElementById("btn-scan-ai-prop"),a=document.getElementById("scan-ai-prop-status"),t=[...document.querySelectorAll('#image-url-inputs [name="images"]')||[]].map(l=>l.value).filter(Boolean);if(!t.length){p("Upload at least one property image before scanning.","error");return}const i=e?e.innerHTML:"",o=(l,d)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),d&&a.classList.add(d),a.innerHTML=l)};await Kt(o),e&&(e.disabled=!0,e.innerHTML="Scanningâ€¦"),o("Identifying this property from your imagesâ€¦","text-blue-300");let n;try{n=await U.identifyProduct(t,{category:"Real Estate",maxImages:ye.maxImages})}catch(l){const d=String(l?.message||l),c=/key|api|configured|settings|vision/i.test(d);o(c?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${d}`,"text-red-400"),p("AI scan failed.","error"),e&&(e.disabled=!1,e.innerHTML=i);return}if(!n||n.identified===!1){o(n&&n.reason?`Could not identify the property: ${s(n.reason)}`:"The property could not be read from these images. Make sure the photos clearly show it, then try again.","text-amber-300"),p("The property could not be identified from the images.","error"),e&&(e.disabled=!1,e.innerHTML=i);return}e&&(e.disabled=!1,e.innerHTML=i);const r=await new Promise(l=>{Qe=g=>{Qe=null,l(g)};const d=document.getElementById("scan-ai-prop-status");if(!d){l({choice:"continue"});return}if(!window._propFormDirty){l({choice:"continue"});return}d.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300");const c=n.confidence||"medium",u={high:"text-emerald-400 border-emerald-500/20",medium:"text-amber-400 border-amber-500/20",low:"text-red-400 border-red-500/20"}[c]||"text-amber-400 border-amber-500/20";d.innerHTML=`
      <div class="rounded-xl border border-violet-500/30 bg-violet-500/10 p-3 space-y-2 fade-in">
        <p class="text-xs font-bold text-white">AI identified: <span class="text-violet-300">${s(n.detected_name||"this property")}</span></p>
        <p class="text-[11px] text-gray-400">
          ${n.property_type?"Type: "+s(n.property_type)+" â€¢ ":""}${n.bedrooms?s(n.bedrooms)+" bed â€¢ ":""}${n.bathrooms?s(n.bathrooms)+" bath â€¢ ":""}${[n.city,n.state,n.country].filter(Boolean).join(", ")||"location not visible"}
          <span class="ml-1 inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${u}">${s(c).toUpperCase()} confidence</span>
        </p>
        <div class="flex flex-wrap gap-2">
          <button type="button" onclick="_resolveScanConfirm('continue')" class="btn-press px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg transition">Fill the property form</button>
          <button type="button" onclick="_resolveScanConfirm('cancel')" class="btn-press px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 text-xs font-bold rounded-lg transition">Cancel</button>
        </div>
      </div>`});if(!r||r.choice==="cancel"){o("Scan cancelled â€” nothing was changed.","text-gray-400"),p("Scan cancelled.","info");return}try{o("Reading every page, completing property details and market valueâ€¦","text-blue-300");const l=await Jt({imageUrls:t,identification:n,category:"Real Estate",formSelector:"#property-form"}),d=l.identification||n,c=Ya({identification:d,specs:l.specs,price:l.price});let u=`${s(d.detected_name||"Property")} â€” ${c.filled.length} field${c.filled.length>1?"s":""} ready for you. Review and edit everything, then press Publish Property.`;l.visionUsed?l.verifyRequested&&(u+=l.verified?'<p class="text-[11px] text-gray-400 mt-1">âœ“ Second-pass verification completed â€” every value was re-checked against your document.</p>':'<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run â€” values come from the first pass.</p>'):u+=`<p class="text-[11px] text-red-300 mt-1">⚠ Photo was NOT read by AI (${s(l.providerLabel||"text fallback")}) — these values did NOT come from your images.</p>`,u+=Yt(),u+=Vt(l.checklist,l.summary),o(u,"text-emerald-300"),p("Review the property details, then press Publish Property.","success")}catch(l){const d=String(l?.message||l),c=/key|api|configured|settings|vision/i.test(d);o(c?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${d}`,"text-red-400"),p("AI scan failed.","error")}window.lucide&&lucide.createIcons()};let be=[];window.handleStep1ImageUpload=async function(e){const a=Array.from(e.target.files||[]).slice(0,10);if(a.length){for(const t of a)try{const i=await zt(t);i&&be.push(i)}catch{}Ka(),e.target.value=""}};window.removeStep1Image=function(e){be.splice(e,1),Ka()};function Ka(){const e=document.getElementById("s1-image-preview");if(!e)return;e.innerHTML=be.map((t,i)=>`
    <div class="img-thumb ${i===0?"cover-img":""}" data-index="${i}">
      <img src="${s(t)}" onerror="this.src='/fallback.svg'">
      <button class="rm" onclick="removeStep1Image(${i})" type="button">ðŸ”™</button>
    </div>`).join("");const a=document.getElementById("btn-s1-scan");a&&(a.disabled=be.length===0,a.style.opacity=be.length?"":"0.5"),window.lucide&&lucide.createIcons()}window.scanFirstWithAI=async function(){const e=be.slice();if(!e.length){p("Upload at least one product image before scanning.","error");return}const a=document.getElementById("btn-s1-scan"),t=document.getElementById("s1-scan-status"),i=a?a.innerHTML:"",o=(l,d)=>{t&&(t.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),d&&t.classList.add(d),t.innerHTML=l)};await Kt(o),a&&(a.disabled=!0,a.innerHTML="Scanningâ€¦"),o("Detecting every distinct product in your imagesâ€¦","text-blue-300");let n;try{n=await U.detectProducts(e,{category:"",maxImages:ye.maxImages})}catch(l){const d=/key|api|configured|settings|vision/i.test(String(l?.message||l));o(d?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${String(l?.message||l)}`,"text-red-400"),a&&(a.disabled=!1,a.innerHTML=i);return}a&&(a.disabled=!1,a.innerHTML=i);let r=n&&n.identified!==!1&&Array.isArray(n.products)&&n.products.length?n.products:[];r.length||(r=[{detected_name:"Product from your photos",category:"Other",listing_type:"product",confidence:"low",image_indices:e.map((l,d)=>d)}],o("The AI could not confidently read these photos â€” a card was created with all of them. Review, edit the details, then continue to save & publish.","text-amber-300")),G=r,he=e,xe={},Z="s1-scan-status",scanReviewRender(),p(`${r.length} distinct product${r.length>1?"s":""} detected â€” review each one, then continue.`,"info")};let xe={};async function Ja(){const e=new Set,a=[],t=i=>{!i||!i.property_id||i.listing_type==="property"||e.has(i.property_id)||!Array.isArray(i.images)||!i.images.length||(e.add(i.property_id),a.push(i))};try{const{data:i,error:o}=await m.from("showroom_listings").select("*").neq("listing_type","property");(o?[]:i||[]).forEach(t)}catch{}return tt().forEach(t),a}window.returnToScanReviewAfterSave=function(e=Re){return Re=-1,G.length?(Number.isInteger(e)&&e>=0&&e<G.length&&G.splice(e,1),G.length?(Z="scanner-scan-status",W(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="scan-search" class="w-5 h-5 text-violet-400"></i> General AI Scanner</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition" title="Close">âœ• Close</button>
        </div>
        <div class="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-3 mb-3">
          <p class="text-xs font-bold text-emerald-300 flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4"></i> Saved & published! Select the next product below to keep going.</p>
        </div>
        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3">
          <label class="flex items-start gap-2 text-[11px] text-gray-400 select-none cursor-pointer">
            <input type="checkbox" class="accent-violet-500 mt-0.5" ${je()?"checked":""} onchange="setScanVerifyPass(this.checked)">
            <span>Second-pass verification for remaining saves — more accurate, uses about twice the free AI quota.</span>
          </label>
          <div id="scanner-scan-status" class="hidden text-xs font-medium"></div>
        </div>
      </div>
    </div>`),scanReviewRender(),window.lucide&&lucide.createIcons(),!0):(he=[],xe={},!1)):!1};window.openGeneralAiScanner=async function(){const e=await Ja();W(`
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
          <label class="flex items-start gap-2 text-[11px] text-gray-400 select-none cursor-pointer">
            <input type="checkbox" class="accent-violet-500 mt-0.5" ${je()?"checked":""} onchange="setScanVerifyPass(this.checked)">
            <span>Second-pass verification — more accurate, uses about twice the free AI quota.</span>
          </label>
          <div id="scanner-scan-status" class="hidden text-xs font-medium"></div>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()};function da(e,a){const t=Symbol("ai-scan-timeout");return Promise.race([e,new Promise(i=>setTimeout(()=>i(t),a))]).then(i=>{if(i===t)throw new Error("A scan step took too long and timed out.");return i})}window.scanGeneralWithAI=async function(){let e=[];try{e=await da(Ja(),15e3)}catch{e=[]}if(!e.length){p("No products with photos are in the Product Manager yet â€” add a product first.","error");return}const a=document.getElementById("btn-scanner-scan"),t=document.getElementById("scanner-scan-status"),i=a?a.innerHTML:"",o=(S,E)=>{t&&(t.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),E&&t.classList.add(E),t.innerHTML=S)};try{const S=await U.getConfig();String(S.gemini_key||S.gemini_api_key||"").trim()||o("No Gemini key found â€” scanning anyway with the FREE built-in AI (no key needed). Products whose photos cannot be read will still be filled from their saved details. For the best photo recognition, add a FREE Gemini key in AI Settings (aistudio.google.com/apikey).","text-blue-300")}catch{}a&&(a.disabled=!0,a.innerHTML="Scanningâ€¦"),o(`Detecting and completing ${e.length} product${e.length===1?"":"s"}â€¦`,"text-blue-300");const n=[],r=[],l={};let d=0,c=0;const u=e.length,g=new Set;let y=0,b=0;window.__scanDupContinue=function(){const S=window.__scanDupResolve;window.__scanDupResolve=null;const E=document.getElementById("btn-scan-dup-continue");E&&(E.disabled=!0),S&&S()};const h=2,v=12e4;let _=0,k=0;const f=async S=>{const E=(S.images||[]).filter(Boolean);if(!E.length)return;const M=E.map(R=>String(R||"").trim()).filter(Boolean),te=M.length>0&&M.every(R=>g.has(R));for(const R of M)g.add(R);if(te){y++;return}const I=n.length;n.push(...E);const j=E.map((R,re)=>I+re);let w=[],D=null;try{const R=await da(U.detectProducts(E,{category:S.category||"",maxImages:ye.maxImages}),v);w=R&&R.identified!==!1&&Array.isArray(R.products)?R.products:[]}catch(R){D=R}w.length||(D&&c++,w=[{detected_name:S.title||S.property_id||"Product",category:S.category||"Other",listing_type:S.listing_type||"product",brand:S.brand||null,model:S.specifications&&S.specifications.model||S.model||null,confidence:"medium",_photoNotRead:!0,_fallbackReason:D?"scan-failed":"no-identification"}],b++),d++,l[S.property_id]=S;for(const R of w)r.push({...R,property_id:S.property_id,image_indices:Array.isArray(R.image_indices)&&R.image_indices.length?R.image_indices.map(re=>j[Number(re)]).filter(re=>re!==void 0):j,detected_name:R.detected_name||S.title||S.property_id,category:R.category||S.category||"Other",listing_type:R.listing_type||S.listing_type||"product"})},$=async()=>{for(;_<e.length;){const S=e[_++];o(`Scanning ${k+1} of ${u} product${u===1?"":"s"} (fast parallel mode)â€¦`,"text-blue-300"),await f(S),k++,k<u&&o(`Scanned ${k} of ${u} â€” continuingâ€¦`,"text-blue-300")}};if(await Promise.all(Array.from({length:Math.min(h,Math.max(1,e.length))},$)),a&&(a.disabled=!1,a.innerHTML=i),!r.length){o(c?`The scan could not read any product (${c} scan${c>1?"s":""} failed or timed out${y?`; ${y} duplicate product${y>1?"s":""} skipped`:""}). Make sure your products have clear photos and that your free Gemini key is active in AI Settings, then try again.`:`No product could be identified from the photos on your existing products${y?` (${y} duplicate product${y>1?"s":""} skipped)`:""}. Make sure each product has clear photos, then try again.`,"text-amber-300"),p("No products could be scanned.","error");return}G=r,he=n,xe=l,Z="scanner-scan-status",scanReviewRender();const x=U.sessionReport(),P=Date.now()<(U._geminiQuotaUntil||0),A=x.issues.length?x.issues[x.issues.length-1]:null,q=[`${d} product${d===1?"":"s"} processed`,y?`${y} duplicate${y>1?"s":""} skipped`:"",b?`${b} filled from saved details (photo NOT read)`:"",c?`${c} scan error${c>1?"s":""}`:"",x.providers.map(S=>`${S.count} by ${S.name}`).join(", ")].filter(Boolean);o(`
    <p class="font-bold ${c?"text-amber-300":"text-emerald-300"}">Scan finished: ${q.join(" · ")}.</p>
    ${P?'<p class="text-[11px] text-amber-300 mt-1">⚠ Your Gemini key hit its FREE rate limit mid-scan. Wait about a minute — the scanner now WAITS OUT short limits and retries instead of skipping.</p>':""}
    ${A?`<p class="text-[11px] text-gray-500 mt-1">Last issue: ${s(A.reason)}${A.count>1?` (×${A.count})`:""}</p>`:""}
    <p class="text-[11px] text-gray-400 mt-1">Review each card below (cards marked PHOTO NOT READ used only saved details), then Continue to save &amp; publish.</p>
  `,c||P?"text-amber-300":"text-emerald-300"),p(`Scan complete â€” ${q.join(", ")}.${P?" Gemini free limit hit mid-scan; the scanner will wait out short limits and retry.":""}${A?` Last issue: ${A.reason}.`:""} Press "Continue with ALL" to save & publish everything at once.`,b||c?"info":"success")};window.saveProduct=async function(e,a,t){e.preventDefault();const i=e.target,o=i.querySelector("[type=submit][name=action][value=publish]"),n=t?"One-Click Publish Changes":"One-Click Publish Product";if(window._productPublishInFlight)return;window._productPublishInFlight=!0,o&&(o.disabled=!0,o.style.opacity="0.75",o.innerHTML='<span style="display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:_pubspin .7s linear infinite;vertical-align:-2px;margin-right:8px;"></span>Publishing…');try{if(!document.getElementById("_pubspin-style")){const l=document.createElement("style");l.id="_pubspin-style",l.textContent="@keyframes _pubspin{to{transform:rotate(360deg)}}",document.head.appendChild(l)}}catch{}const r=()=>{window._productPublishInFlight=!1,o&&(o.disabled=!1,o.style.opacity="",o.textContent=n)};try{const l=new FormData(i),d={};let c=0;for(const[h,v]of l.entries())if(h==="images"){d.images=d.images||[];const _=String(v);v&&!_.startsWith("blob:")?d.images.push(_):_.startsWith("blob:")&&c++}else h==="tags"?(d.tags=d.tags||[],d.tags.push(v)):d[h]=v;if(c&&!(d.images||[]).length){r(),p("Your images were still uploading â€” please wait a moment and press Publish again (the photos were not saved with the product).","error");return}d.is_featured=i.querySelector('[name="is_featured"]')?.checked?"on":"",d.is_active=i.querySelector('[name="is_active"]')?.checked?"on":"";const u=l.get("action")==="draft",g=h=>St(h),y=h=>{const v=["model","storage","ram","processor","display","material","gender","platform","voltage","engine","transmission","fuel_type","horsepower","mileage","drive_type","body_type","model_year","seating_capacity","doors","real_price","type","size","age_range","skin_type","ingredients","dimensions","author","publisher","language","format","isbn","pages","edition","quantity","pet_type","lens","sensor","megapixels","video","license","version","duration","followers","engagement","niche","usage","shelf_life","assembly","weatherproof","movement","case_material","water_resistance","gemstone","movement_type","warranty_period"],_={};for(const k of v){const f=h[k];if(k==="real_price"){const $=f!=null&&String(f).trim()!==""?parseFloat(f):null;_[k]=$!=null&&Number.isFinite($)&&$>0?Math.round($):null;continue}_[k]=f!=null&&String(f).trim()!==""?f:null}if(h.safety_features){const k=g(h.safety_features);_.safety_features=k.length?k:null}return _};if(t){let h=null;try{const{data:w}=await m.from("showroom_listings").select("*").eq("property_id",t).maybeSingle();w&&(h=me(w))}catch{}if(h||(h=me((window._productsData||[]).find(w=>w.property_id===t))),h||(h=me(Ne?Ne(t):null)),!h)throw new Error("Could not load the current product to compare your changes against. Refresh the page, re-open the product and try again.");const v=(w,D)=>{const R=w===""||w==null?"":w,re=D===""||D==null?"":D;return String(R).trim()===String(re).trim()},_={};["title","description","currency","subcategory","brand","color","size","condition","warranty","availability_status"].forEach(w=>{v(d[w],h[w])||(_[w]=d[w]==null||d[w]===""?null:d[w])});const k=d.price===""||d.price==null?null:parseFloat(d.price);v(k,h.price)||(_.price=k==null?h.price:Math.max(H,Math.min(X,k)));const f=d.stock_quantity===""||d.stock_quantity==null?null:parseInt(d.stock_quantity,10);v(f,h.stock_quantity)||(_.stock_quantity=Number.isFinite(f)?f:null);const $=g(d.features_text);v($.join("||"),(Array.isArray(h.features)?h.features:[]).join("||"))||(_.features=$);const x=d.tags||[];v(x.join("||"),(Array.isArray(h.tags)?h.tags:[]).join("||"))||(_.tags=x);const P=g(d.highlights_text);v(P.join("||"),(Array.isArray(h.highlights)?h.highlights:[]).join("||"))||(_.highlights=P);const A=g(d.seo_keywords_text);v(A.join("||"),(Array.isArray(h.seo_keywords)?h.seo_keywords:[]).join("||"))||(_.seo_keywords=A);const q=d.images||[];v(q.join("||"),(Array.isArray(h.images)?h.images:[]).join("||"))||(_.images=q);const S=d.is_featured==="on";!!h.is_featured!==S&&(_.is_featured=S);const E=u?!1:d.is_active==="on";!!h.is_active!==E&&(_.is_active=E);const M=y(d),te={...h.specifications&&typeof h.specifications=="object"?h.specifications:{},...M};if(JSON.stringify(te)!==JSON.stringify(h.specifications||{})&&(_.specifications=te),Object.keys(_).length===0){p("No changes detected â€” nothing was saved.","info");try{localStorage.removeItem(De(a,t))}catch{}p("No changes were needed — this product is already published with exactly these details.","info"),r(),closeProductFormModal(),O();return}const I={...h,..._,property_id:t,updated_at:new Date().toISOString()};delete I.id;const j=await Ye(I);if(j.error){r();const w=ht(j.error,u?"Draft save":"Product publish");p(w,"error");try{let D=i.querySelector(".__publish-error-banner");D||(D=document.createElement("div"),D.className="__publish-error-banner mb-3 p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-medium",i.prepend(D)),D.textContent=w}catch{}return}try{xt(I)}catch{}try{const w=(window._productsData||[]).findIndex(D=>D.property_id===t);w>=0&&(window._productsData[w]=I)}catch{}p(u?"Draft saved!":`Published Successfully â€” your product is updated and live in your showroom (${Object.keys(_).length} change${Object.keys(_).length>1?"s":""}).`)}else{if(!d.title||!d.title.trim())throw new Error("A product title is required.");if(d.price===""||d.price==null||!isFinite(parseFloat(d.price)))throw new Error("A price is required.");if(i.querySelector('[name="condition"]')&&!d.condition)throw new Error("Please choose the product condition.");const h={listing_type:"product",category:a,subcategory:d.subcategory||null,title:d.title.trim(),description:d.description||"",price:Math.max(H,Math.min(X,parseFloat(d.price)||0)),currency:d.currency||"USD",country:"",country_code:"",listing_status:"sale",state:"",city:"",product_location:"",latitude:null,longitude:null,is_active:u?!1:d.is_active==="on",is_featured:d.is_featured==="on",brand:d.brand||null,color:d.color||null,size:d.size||null,condition:d.condition||null,warranty:d.warranty||null,availability_status:d.availability_status||"In Stock",stock_quantity:d.stock_quantity?parseInt(d.stock_quantity):null,images:d.images||[],features:g(d.features_text).length?g(d.features_text):d.tags||[],tags:d.tags||[],highlights:g(d.highlights_text),seo_keywords:g(d.seo_keywords_text),is_ai_generated:!!d.catalog_template_id,ai_generated_fields:d.catalog_template_id?["title","description","features","highlights","seo_keywords"]:[],specifications:y(d)},v=nt();h.property_id=v;const _=await Ye(h);if(_.error){r();const k=ht(_.error,"Product publish");p(k,"error");try{let f=i.querySelector(".__publish-error-banner");f||(f=document.createElement("div"),f.className="__publish-error-banner mb-3 p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-medium",i.prepend(f)),f.textContent=k}catch{}return}try{xt({...h,property_id:h.property_id})}catch{}try{(window._productsData=window._productsData||[]).unshift({...h})}catch{}p(u?"Draft saved!":"Published Successfully! Your product is now live in your showroom.")}r();try{localStorage.removeItem(De(a,t))}catch{}const b=Re;if(closeProductFormModal(),typeof window.returnToScanReviewAfterSave=="function"&&window.returnToScanReviewAfterSave(b)){O();return}O()}catch(l){const d=l&&l.message&&!/failed to fetch|networkerror/i.test(String(l.message))?l.message:ht(l,"Product publish");r(),p(d,"error")}};window.editProduct=async function(e){const{data:a,error:t}=await m.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=t?null:a;if(i||(i=Ne(e)),i||(i=(window._productsData||[]).find(o=>o.property_id===e)||null),!i)return p("Product not found","error");i.specifications&&typeof i.specifications=="object"&&(i={...i,...i.specifications}),showAddProductStep2(i.category||"Other",i)};window.toggleProductActive=async function(e,a){let t=null;try{const{data:o}=await m.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();o&&(t=me(o))}catch{}if(t||(t=me((window._productsData||[]).find(o=>o.property_id===e))),!t||!t.property_id){vt(e,{is_active:a,availability_status:a?"In Stock":"Out of Stock"}),p(a?"Product published locally":"Product unpublished locally","info"),O();return}delete t.id,t.property_id=e,t.is_active=a,t.availability_status=a?"In Stock":"Out of Stock";const{error:i}=await m.from("showroom_listings").upsert(t,{onConflict:"property_id"});if(i){if(J(i))return p(`âšï¸ ${a?"Publish":"Unpublish"} blocked: database admin role rejected the write. Re-run the admin permission migration.`,"error");vt(e,{is_active:a,availability_status:a?"In Stock":"Out of Stock"}),p(a?"Product published locally":"Product unpublished locally","info"),O();return}p(a?"Product published":"Product unpublished"),O()};window.duplicateProduct=async function(e,a=!1){const{data:t}=await m.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();if(!t)return;const{id:i,property_id:o,created_at:n,updated_at:r,...l}=t,d=nt();await m.from("showroom_listings").insert({...l,property_id:d,title:t.title+" (Copy)",is_active:!1}),a||(p("Product duplicated"),O())};window.archiveProduct=async function(e){confirm("Archive this product? It will be hidden from the website but can be restored.")&&(await m.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",e),p("Product archived"),O())};const Tt=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","Commercial Building","Hotel","Land","Other"];async function dt(){const e=document.getElementById("content");try{const{data:a,error:t}=await m.from("showroom_listings").select("*").eq("listing_type","property").order("created_at",{ascending:!1});let i=t?tt().filter(n=>n.listing_type==="property"):a||[];if(Array.isArray(ie)){const n=new Set(i.map(l=>l.property_id)),r=ie.filter(l=>l.listing_type==="property"&&l.property_id&&!n.has(l.property_id));r.length&&(i=i.concat(r))}i.sort((n,r)=>new Date(r.created_at||0)-new Date(n.created_at||0));try{await Dt()}catch{}const o=new Set(at());i=i.filter(n=>!(n&&n.property_id&&o.has(n.property_id))),window._propertiesData=i,e.innerHTML=`
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
                ${i.length===0?'<tr><td colspan="6" class="text-center text-gray-500 py-12">No properties yet.</td></tr>':i.map(n=>`<tr>
                    <td>
                      <div class="flex items-center gap-2.5">
                        <img src="${s((n.images||[])[0]||"/fallback.svg")}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
                        <div><p class="text-xs font-bold text-white truncate max-w-[160px]">${s(n.title)}</p><p class="text-[10px] font-mono text-gray-500">${s(n.property_id)}</p></div>
                      </div>
                    </td>
                    <td><span class="text-xs text-gray-300">${s(n.property_type||n.category)}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${s([n.city,n.state,n.country].filter(Boolean).join(", ")||"â€”")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(n.price||0).toLocaleString()}</span></td>
                    <td>${ee(n.listing_status||"sale")} ${ee(n.is_active?"active":"inactive")}</td>
                    <td>
                      <div class="flex gap-1">
                        <button onclick="editProperty('${n.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
                        <button onclick="archiveProduct('${n.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
                        <button onclick="deleteProduct('${n.property_id}')" class="btn-press p-1.5 text-rose-400 hover:bg-rose-500/10 rounded-lg transition"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                      </div>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}window.showAddPropertyModal=function(e={}){const a=!!e.property_id,t=ka("property","Real Estate"),i=e.country_code||"US",o=e.currency||Rt(i);W(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${a?"Edit":"Add"} Property</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">ðŸ”™ Back</button>
        </div>
        <form id="property-form" onsubmit="saveProperty(event,'${a?e.property_id:""}')" class="space-y-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-3">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs font-bold text-white uppercase tracking-wide">Property Catalog Autofill</p>
                <p class="text-[11px] text-gray-500 mt-1">Choose a property template and country to generate a global real-estate listing with map-ready fields.</p>
              </div>
              <button type="button" onclick="applyPropertyCatalogTemplate()" class="btn-press px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold rounded-xl transition">Refresh Template</button>
            </div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Property Template</label><select class="input-field" name="catalog_template_id" id="ppf-catalog_template_id" onchange="applyPropertyCatalogTemplate()"><option value="">Choose a property template...</option>${t.map(r=>`<option value="${r.id}">${s(r.label)} - ${s(r.propertyType||r.subcategory)}</option>`).join("")}</select></div>
              <div><label class="lbl">Country</label><select class="input-field" name="country_code" id="ppf-country_code" onchange="syncPropertyCountry(); applyPropertyCatalogTemplate()">${Oa(i)}</select></div>
              <div><label class="lbl">Currency</label><select class="input-field" name="currency" id="ppf-currency" onchange="applyPropertyCatalogTemplate()">${Ha(o)}</select></div>
            </div>
            <p id="ppf-image-requirement" class="text-[11px] text-gray-400">Any number of images is fine â€” save and publish anytime.</p>
            <input type="hidden" name="required_image_count" id="ppf-required_image_count" value="">
          </div>

          <div class="form-grid form-grid-2">
            <div class="sm:col-span-2"><label class="lbl">Property Title *</label><input class="input-field" name="title" value="${s(e.title||"")}" required placeholder="e.g. Cozy 3-Bedroom Family Home"></div>
            <div><label class="lbl">Property Type *</label><select class="input-field" name="property_type" required>
              ${Tt.map(r=>`<option value="${r}" ${e.property_type===r?"selected":""}>${r}</option>`).join("")}
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
                <div class="text-[11px] text-gray-500" id="property-map-status">Map preview â€” fill the location fields or click the map to drop a pin.</div>
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
              ${["New Construction","Like New","Excellent","Good","Fair","Needs Renovation"].map(r=>`<option value="${r}" ${e.condition===r?"selected":""}>${r}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Year Built</label><input type="number" class="input-field" name="year_built" value="${e.year_built??""}" placeholder="2015"></div>
            <div><label class="lbl">Year Renovated</label><input type="number" class="input-field" name="year_renovated" value="${e.year_renovated??""}" placeholder="2021"></div>
            <div><label class="lbl">Half Bathrooms</label><input type="number" class="input-field" name="half_bathrooms" value="${e.half_bathrooms??""}" placeholder="1"></div>
            <div><label class="lbl">Floors / Levels</label><input type="number" class="input-field" name="floors" value="${e.floors??""}" placeholder="2"></div>
            <div><label class="lbl">Garage</label><input class="input-field" name="garage" value="${s(e.garage||"")}" placeholder="e.g. 2-car attached, None"></div>
            <div class="sm:col-span-2"><label class="lbl">Description</label><textarea class="input-field" name="description" rows="3" placeholder="Describe the propertyâ€¦">${s(e.description||"")}</textarea></div>
            <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${s((e.features||[]).join(", "))}" placeholder="Swimming Pool, Garden, Garageâ€¦"></div>
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
              <div class="sm:col-span-2"><label class="lbl">Interior Features (comma separated)</label><input class="input-field" name="interior_features_text" value="${s((e.interior_features||[]).join(", "))}" placeholder="Open plan kitchen, Walk-in closet, Fireplaceâ€¦"></div>
              <div class="sm:col-span-2"><label class="lbl">Exterior Features (comma separated)</label><input class="input-field" name="exterior_features_text" value="${s((e.exterior_features||[]).join(", "))}" placeholder="Swimming pool, Garden, Balcony, Patioâ€¦"></div>
              <div class="sm:col-span-2"><label class="lbl">Home Systems (comma separated)</label><input class="input-field" name="home_systems_text" value="${s((e.home_systems||[]).join(", "))}" placeholder="Central heating, Air conditioning, Solar panelsâ€¦"></div>
            </div>
          </div>

          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="layout-dashboard" class="w-4 h-4 text-violet-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Floor Plan</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Floor Plan Image URL</label><input class="input-field" name="floor_plan_image" value="${s(e.floor_plan?.image||"")}" placeholder="https://â€¦/floor-plan.png"></div>
              <div><label class="lbl">Levels</label><input class="input-field" name="floor_plan_levels" value="${s(e.floor_plan?.levels||"")}" placeholder="e.g. Ground + 1"></div>
              <div><label class="lbl">Total Area</label><input class="input-field" name="floor_plan_total_area" value="${s(e.floor_plan?.total_area||"")}" placeholder="e.g. 2,500 sqft"></div>
              <div class="sm:col-span-2"><label class="lbl">Rooms (comma separated â€” Name: dimensions)</label><input class="input-field" name="floor_plan_rooms" value="${s((e.floor_plan?.rooms||[]).map(r=>(r.name||"")+(r.dimensions?": "+r.dimensions:"")).join(", "))}" placeholder="Living Room: 15x12, Kitchen: 10x10â€¦"></div>
            </div>
          </div>

          <div class="glass-soft border border-amber-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="school" class="w-4 h-4 text-amber-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Nearby Area</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Schools (comma separated)</label><input class="input-field" name="nearby_schools_text" value="${s((e.nearby_area?.schools||[]).join(", "))}" placeholder="Riverside Elementaryâ€¦"></div>
              <div><label class="lbl">Hospitals / Clinics</label><input class="input-field" name="nearby_hospitals_text" value="${s((e.nearby_area?.hospitals||[]).join(", "))}" placeholder="City General Hospitalâ€¦"></div>
              <div><label class="lbl">Shopping / Markets</label><input class="input-field" name="nearby_shopping_text" value="${s((e.nearby_area?.shopping||[]).join(", "))}" placeholder="Maple Mall, Farmers Marketâ€¦"></div>
              <div><label class="lbl">Transportation</label><input class="input-field" name="nearby_transportation_text" value="${s((e.nearby_area?.transportation||[]).join(", "))}" placeholder="Metro Station, Bus Stopâ€¦"></div>
              <div class="sm:col-span-2"><label class="lbl">Distances (comma separated)</label><input class="input-field" name="nearby_distances_text" value="${s((e.nearby_area?.distances||[]).join(", "))}" placeholder="0.5 mi to school, 1 mi to hospitalâ€¦"></div>
            </div>
          </div>

          <div class="glass-soft border border-blue-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="shield-check" class="w-4 h-4 text-blue-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Legal, Verification &amp; Trust</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Legal / Financial Info (comma separated â€” add source tag)</label><input class="input-field" name="legal_info_text" value="${s((e.legal_info||[]).map(r=>(r.label||"")+(r.value?": "+r.value:"")+(r.source?` (${r.source})`:"")).join(", "))}" placeholder="Ownership: Clear title (Seller provided), Property taxes: (Not verified)â€¦"></div>
              <div><label class="lbl">Verification Status</label><select class="input-field" name="verification_status">
                <option value="Not verified" ${(e.verification_status||"Not verified")==="Not verified"?"selected":""}>Not verified</option>
                <option value="Pending verification" ${e.verification_status==="Pending verification"?"selected":""}>Pending verification</option>
                <option value="Verified" ${e.verification_status==="Verified"?"selected":""}>Verified</option>
              </select></div>
              <div><label class="lbl">Verification Date</label><input type="date" class="input-field" name="verification_date" value="${s(e.verification_date||"")}"></div>
              <div class="sm:col-span-2"><label class="lbl">Inspection Info</label><input class="input-field" name="inspection_info" value="${s(e.inspection_info||"")}" placeholder="Inspected on date by company â€” result"></div>
              <div class="sm:col-span-2"><label class="lbl">Documents (comma separated URLs)</label><input class="input-field" name="documents_text" value="${s((e.documents||[]).join(", "))}" placeholder="https://â€¦/title.pdf, https://â€¦/inspection.pdf"></div>
              <div class="sm:col-span-2"><label class="lbl">Condition / Risk Notes</label><textarea class="input-field" name="risk_notes" rows="2" placeholder="Any known issues, renovation needs, or risk notesâ€¦">${s(e.risk_notes||"")}</textarea></div>
            </div>
          </div>

          <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/15 rounded-xl">
            <div><p class="text-xs font-bold text-white">Published / Active</p><p class="text-[11px] text-gray-500">Visible on the website</p></div>
            <label class="toggle-switch"><input type="checkbox" name="is_active" ${a?e.is_active?"checked":"":"checked"}><span class="toggle-slider"></span></label>
          </div>

          <div>
            <label class="lbl">Property Images</label>
            <div id="drop-zone" class="drop-zone" onclick="document.getElementById('img-upload').click()">
              <i data-lucide="image-plus" class="w-7 h-7 text-blue-400 mx-auto mb-2"></i>
              <p class="text-xs font-bold text-gray-300">Click or drag & drop images</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*,application/pdf" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2 mt-3">
              ${(e.images||[]).map((r,l)=>_e(r,l)).join("")}
            </div>
            <div id="image-url-inputs">
              ${(e.images||[]).map((r,l)=>`<input type="hidden" name="images" id="img-url-${l}" value="${s(r)}">`).join("")}
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
            <button type="submit" class="btn-press flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2.5 rounded-xl text-sm transition">${a?"ðŸ’¾ Save Changes":"ðŸš€ Publish Property"}</button>
          </div>
        </form>
      </div>
    </div>`),Ht(),Gt(),Pt("ppf-price"),window._propFormDirty=!!a;const n=document.getElementById("property-form");if(n){const r=()=>{window._propFormDirty=!0};n.addEventListener("input",r),n.addEventListener("change",r)}window.syncPropertyCountry=function(){na("ppf")},na("ppf"),It("pricing"),document.getElementById("ppf-price")?.addEventListener("input",()=>It("pricing")),Tn()};let ae=null,Ve=null,ca=null;function An(){const e=document.querySelector("#property-form");if(!e)return"";const a=t=>(e.querySelector(`[name="${t}"]`)?.value||"").trim();return[a("product_location"),a("town"),a("city"),a("state"),a("country")].filter(Boolean).join(", ")}function de(e,a){const t=document.getElementById("property-map-status");t&&(t.textContent=e,t.style.color=a?"#dc2626":"")}function Me(e,a,{reverse:t=!1}={}){if(!ae||!Number.isFinite(e)||!Number.isFinite(a))return;const i=[e,a];Ve?Ve.setLatLng(i):Ve=L.marker(i,{draggable:!0}).addTo(ae),ae.setView(i,Math.max(ae.getZoom(),13));const o=document.querySelector('#property-form [name="latitude"]'),n=document.querySelector('#property-form [name="longitude"]');o&&(o.value=String(Number(e.toFixed(6)))),n&&(n.value=String(Number(a.toFixed(6)))),t&&Cn(e,a);const r=document.getElementById("btn-open-google-map");r&&(r.href=`https://www.google.com/maps?q=${e.toFixed(6)},${a.toFixed(6)}`)}async function Be(){const e=An();if(!e){de("Enter a location (address, area, city, state, country), then press Locate from fields.");return}de("Searching locationâ€¦");try{const a=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(e))).json();a&&a[0]?(Me(parseFloat(a[0].lat),parseFloat(a[0].lon)),de("Located: "+a[0].display_name)):de("Could not find that location. Check the spelling or click the map to drop the pin.",!0)}catch{de("Map lookup failed. You can still drop the pin by clicking the map.",!0)}}async function Cn(e,a){const t=document.querySelector("#property-form");if(t)try{const i=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${a}&zoom=16`)).json(),o=i&&i.address||{},n=(y,b)=>{if(!b)return;const h=t.querySelector(`[name="${y}"]`);return h&&!String(h.value||"").trim()?(h.value=b,!0):!1},r=[o.road||"",o.house_number||""].filter(Boolean).join(" "),l=o.suburb||o.neighbourhood||o.quarter||o.district||o.borough||"",d=o.town||o.village||o.municipality||o.city_district||"",c=o.city||o.county||"",u=o.state||o.region||"",g=o.country||"";if(n("product_location",r||l||d),n("town",l||d),n("city",c),n("state",u),g){n("country",g);const y=t.querySelector('[name="country_code"]');if(y){const b=(Ee||[]).find(h=>String(h.name||"").toLowerCase()===String(g).toLowerCase());b&&b.code&&!y.value&&(y.value=b.code)}}de("Pin set at "+e.toFixed(5)+", "+a.toFixed(5)+(i.display_name?" â€” "+i.display_name:""))}catch{de("Pin set. Could not reverse-geocode the address.",!0)}}window.refreshPropertyMapFromForm=function(){if(!ae)return;const e=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),a=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);Number.isFinite(e)&&Number.isFinite(a)&&(e||a)?(Me(e,a),de("Map updated from coordinates.")):Be()};function Tn(){const e=document.getElementById("property-map-preview");if(!e||!window.L){de("Map unavailable right now â€” your location fields still save normally.");return}ae&&(ae.remove(),ae=null,Ve=null);const a=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),t=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value),i=Number.isFinite(a)&&Number.isFinite(t)&&(a||t);ae=L.map(e,{scrollWheelZoom:!1}).setView(i?[a,t]:[20,0],i?13:2),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(ae),ae.on("click",o=>Me(o.latlng.lat,o.latlng.lng,{reverse:!0})),document.getElementById("btn-geocode-property")?.addEventListener("click",Be),["product_location","town","city","state","country","latitude","longitude"].forEach(o=>{const n=document.querySelector(`#property-form [name="${o}"]`);n&&(n.addEventListener("input",()=>{if(o==="latitude"||o==="longitude"){const r=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),l=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);Number.isFinite(r)&&Number.isFinite(l)&&(r||l)&&Me(r,l);return}clearTimeout(ca),ca=setTimeout(Be,900)}),n.addEventListener("change",()=>{o!=="latitude"&&o!=="longitude"&&Be()}))}),i?Me(a,t):Be()}window.fixPropertyMaps=async function(){const e=(window._propertiesData||[]).filter(i=>{const o=parseFloat(i.latitude),n=parseFloat(i.longitude),r=[i.product_location,i.town,i.city,i.state,i.country].filter(Boolean).join(", ");return!(Number.isFinite(o)&&Number.isFinite(n)&&(o!==0||n!==0))&&!!r});if(!e.length){p("All properties already have map coordinates.","success");return}p(`Fixing maps for ${e.length} propert${e.length>1?"ies":"y"}â€¦`,"success");let a=0,t=0;for(const i of e){const o=[i.product_location,i.town,i.city,i.state,i.country].filter(Boolean).join(", ");try{const n=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(o))).json();if(n&&n[0]){const r={latitude:parseFloat(n[0].lat),longitude:parseFloat(n[0].lon)},{error:l}=await m.from("showroom_listings").update(r).eq("property_id",i.property_id);l?t++:(Object.assign(i,r),a++)}else t++}catch{t++}await new Promise(n=>setTimeout(n,1100))}p(`Map fix done: ${a} updated, ${t} failed.`,t?"error":"success"),dt()};window.saveProperty=async function(e,a){e.preventDefault();const t=new FormData(e.target),i=Object.fromEntries(t.entries()),o=t.getAll("images").filter(y=>y&&!y.startsWith("blob:")),n=(i.features_text||"").split(",").map(y=>y.trim()).filter(Boolean),r=i.real_price===""||i.real_price==null?null:Math.max(H,Math.min(X,parseFloat(i.real_price)||0)),l=y=>(y||"").split(",").map(b=>b.trim()).filter(Boolean),d=y=>y===""||y==null||!isFinite(parseInt(y,10))?null:parseInt(y,10),c=l(i.floor_plan_rooms).map(y=>{const b=String(y).match(/^(.*?):\s*(.*)$/);return b?{name:b[1].trim(),dimensions:b[2].trim()}:{name:y,dimensions:""}}),u={listing_type:"property",category:i.property_type||"Real Estate",subcategory:i.subcategory||null,title:i.title,description:i.description||"",price:Math.max(H,Math.min(X,parseFloat(i.price)||0)),currency:i.currency||"USD",real_price:r,country:i.country||"",country_code:(i.country_code||"").toUpperCase(),state:i.state||"",city:i.city||"",town:i.town||"",address:i.address||"",zip_code:i.zip_code||"",product_location:i.product_location||"",latitude:i.latitude?parseFloat(i.latitude):null,longitude:i.longitude?parseFloat(i.longitude):null,property_type:i.property_type||"",listing_status:i.listing_status||"sale",condition:i.condition||null,bedrooms:i.bedrooms?parseInt(i.bedrooms):null,bathrooms:i.bathrooms?parseInt(i.bathrooms):null,half_bathrooms:d(i.half_bathrooms),building_size:i.building_size||"",land_size:i.land_size||"",floors:d(i.floors),garage:i.garage||"",parking_spaces:i.parking_spaces?parseInt(i.parking_spaces):null,furnished:i.furnished||"",year_built:d(i.year_built),year_renovated:d(i.year_renovated),landmarks:l(i.landmarks_text),interior_features:l(i.interior_features_text),exterior_features:l(i.exterior_features_text),home_systems:l(i.home_systems_text),legal_info:l(i.legal_info_text).map(y=>{const b=String(y).match(/^(.*?):\s*(.*?)\s*\((Seller provided|Not verified|Documented)\)\s*$/i);return b?{label:b[1].trim(),value:b[2].trim(),source:b[3]}:{label:y,value:"",source:"Not verified"}}),risk_notes:i.risk_notes||"",floor_plan:{image:i.floor_plan_image||"",rooms:c,levels:i.floor_plan_levels||"",total_area:i.floor_plan_total_area||""},nearby_area:{schools:l(i.nearby_schools_text),hospitals:l(i.nearby_hospitals_text),shopping:l(i.nearby_shopping_text),transportation:l(i.nearby_transportation_text),distances:l(i.nearby_distances_text)},verification_status:i.verification_status||"Not verified",verification_date:i.verification_date||"",inspection_info:i.inspection_info||"",documents:l(i.documents_text),features:n,images:o,highlights:St(i.highlights_text),seo_keywords:St(i.seo_keywords_text),is_ai_generated:!!i.catalog_template_id,ai_generated_fields:i.catalog_template_id?["title","description","features","highlights","seo_keywords","country","country_code","product_location"]:[],is_active:i.is_active==="on"};let g;if(a){u.property_id=a;const y=me((window._propertiesData||[]).find(b=>b.property_id===a)||(window._productsData||[]).find(b=>b.property_id===a));u.specifications={...y.specifications&&typeof y.specifications=="object"?y.specifications:{},real_price:r},{error:g}=await m.from("showroom_listings").upsert({...y,...u},{onConflict:"property_id"})}else u.property_id=nt(),u.specifications={real_price:r},{error:g}=await m.from("showroom_listings").insert(u);g&&ln(g,()=>xt({...u,property_id:a||u.property_id}),a?"Property update":"Property publish")||(p(a?"Property updated!":"Property published!"),ce(),dt())};window.editProperty=async function(e){const{data:a,error:t}=await m.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=t?null:a;i||(i=Ne(e)),i||(i=(Array.isArray(ie)?ie.find(o=>o.property_id===e):null)||null),i&&showAddPropertyModal(i)};const Ln=["pending_verification","payment_received","payment_approved","processing","shipped","in_transit","out_for_delivery","delivered","cancelled","rejected"];async function Qa(){const e=document.getElementById("content");try{const{data:a}=await m.from("payment_receipts").select("*").order("created_at",{ascending:!1}).limit(300),t=a||[],i=["All","Pending","Paid","Processing","Shipped","Delivered","Cancelled"];let o="All";e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Orders Manager</h2>
        <div class="flex gap-2 flex-wrap" id="order-tabs">
          ${i.map(n=>`<button class="tab-btn ${n==="All"?"active":""}" onclick="filterOrders('${n}')">${n}</button>`).join("")}
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
                ${t.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-12">No orders yet</td></tr>':t.map(n=>Bn(n)).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._ordersData=t,window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}function Bn(e){return`<tr class="order-row" data-status="${e.status}" data-search="${s(e.order_number)} ${s(e.full_name)} ${s(e.email)}">
    <td><span class="font-mono text-xs text-blue-400 font-bold">${s(e.order_number||e.id?.slice(0,8))}</span></td>
    <td>
      <p class="text-xs font-bold text-white">${s(e.full_name||"Guest")}</p>
      <p class="text-[10px] text-gray-500">${s(e.email)}</p>
    </td>
    <td><p class="text-xs text-gray-300 truncate max-w-[140px]">${s(e.listing_title||e.listing_id||"â€”")}</p></td>
    <td class="hidden sm:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(e.amount||0).toLocaleString()}</span></td>
    <td>${ee(e.status)}</td>
    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${ne(e.created_at)}</span></td>
    <td>
      <button onclick="viewOrder('${e.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="View / Update">
        <i data-lucide="eye" class="w-3.5 h-3.5"></i>
      </button>
    </td>
  </tr>`}window.filterOrders=function(e){document.querySelectorAll("#order-tabs .tab-btn").forEach(a=>a.classList.toggle("active",a.textContent===e)),document.querySelectorAll(".order-row").forEach(a=>{const t=a.dataset.status||"",i=e==="All"||e==="Pending"&&["pending_verification","payment_received","order_placed"].includes(t)||e==="Paid"&&["payment_approved"].includes(t)||e==="Processing"&&["processing"].includes(t)||e==="Shipped"&&["shipped","in_transit","out_for_delivery"].includes(t)||e==="Delivered"&&t==="delivered"||e==="Cancelled"&&["cancelled","rejected"].includes(t);a.style.display=i?"":"none"})};window.searchOrders=function(e){const a=e.toLowerCase();document.querySelectorAll(".order-row").forEach(t=>{t.style.display=!a||t.dataset.search.toLowerCase().includes(a)?"":"none"})};window.viewOrder=async function(e){const a=(window._ordersData||[]).find(t=>t.id===e);a&&W(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Order ${s(a.order_number)}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">ðŸ”™ Back</button>
        </div>
        <div class="space-y-3 text-sm">
          <div class="grid grid-cols-2 gap-3">
            ${[["Customer",a.full_name],["Email",a.email],["Phone",a.phone],["Amount",Aa(a.amount,a.currency)],["Product",a.listing_title||a.listing_id],["Date",fe(a.created_at)]].map(([t,i])=>`<div><p class="text-[10px] text-gray-500 uppercase font-bold mb-0.5">${t}</p><p class="text-xs text-white font-medium">${s(i)||"â€”"}</p></div>`).join("")}
          </div>
          ${a.transaction_reference?`<div class="p-3 glass-soft border border-blue-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Transaction Reference</p><p class="text-xs font-mono text-blue-300">${s(a.transaction_reference)}</p></div>`:""}
          ${a.additional_notes?`<div class="p-3 glass-soft border border-amber-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Notes</p><p class="text-xs text-gray-300">${s(a.additional_notes)}</p></div>`:""}
          <div>
            <label class="lbl">Update Order Status</label>
            <div class="flex gap-2">
              <select id="order-status-select" class="input-field flex-1">
                ${Ln.map(t=>`<option value="${t}" ${a.status===t?"selected":""}>${t.replace(/_/g," ")}</option>`).join("")}
              </select>
              <button onclick="updateOrderStatus('${a.id}')" class="btn-press px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.updateOrderStatus=async function(e){const a=document.getElementById("order-status-select")?.value;if(!a)return;const{error:t}=await m.from("payment_receipts").update({status:a}).eq("id",e);if(t){p(t.message,"error");return}p("Order status updated"),ce(),Qa()};async function Mn(){const e=document.getElementById("content");try{const{data:a}=await m.from("profiles").select("*").order("created_at",{ascending:!1}).limit(200),t=a||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Customers Manager</h2>
          <span class="text-sm text-gray-400 font-medium">${t.length} total</span>
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
                ${t.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-12">No customers yet</td></tr>':t.map(i=>`<tr class="cust-row" data-search="${s(i.display_name)} ${s(i.user_id)}">
                    <td>
                      <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                          <i data-lucide="user" class="w-4 h-4 text-blue-400"></i>
                        </div>
                        <div>
                          <p class="text-xs font-bold text-white">${s(i.display_name||"Anonymous")}</p>
                          <p class="text-[10px] font-mono text-gray-500">${s(i.user_id?.slice(0,12))}â€¦</p>
                        </div>
                      </div>
                    </td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-300">${s(i.country_code||"â€”")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${ne(i.created_at)}</span></td>
                    <td>
                      <button onclick="viewCustomer('${i.user_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="eye" class="w-3.5 h-3.5"></i></button>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._customersData=t,window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}window.searchCustomers=function(e){const a=e.toLowerCase();document.querySelectorAll(".cust-row").forEach(t=>{t.style.display=!a||t.dataset.search.toLowerCase().includes(a)?"":"none"})};window.viewCustomer=async function(e){const a=(window._customersData||[]).find(i=>i.user_id===e);if(!a)return;const{data:t}=await m.from("payment_receipts").select("order_number,amount,currency,status,created_at").eq("user_id",e).order("created_at",{ascending:!1}).limit(20);W(`
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
            <p class="font-black text-white">${s(a.display_name||"Anonymous")}</p>
            <p class="text-xs text-gray-400 mt-0.5">Joined ${ne(a.created_at)} Â· ${s(a.country_code||"Unknown country")}</p>
          </div>
        </div>
        <h4 class="text-xs font-bold text-gray-400 uppercase mb-3">Purchase History</h4>
        ${(t||[]).length===0?'<p class="text-xs text-gray-500 py-4 text-center">No orders yet</p>':(t||[]).map(i=>`<div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
            <div><p class="text-xs font-bold text-white font-mono">${s(i.order_number)}</p><p class="text-[10px] text-gray-500">${fe(i.created_at)}</p></div>
            <div class="flex items-center gap-2">${ee(i.status)}<span class="text-xs font-bold text-emerald-400">$${parseFloat(i.amount).toLocaleString()}</span></div>
          </div>`).join("")}
      </div>
    </div>`)};async function Oe(){const e=document.getElementById("content");try{const{data:a}=await m.from("product_reviews").select("*, showroom_listings(title, property_id)").order("created_at",{ascending:!1}).limit(200),t=a||[],i=t.filter(l=>!l.is_approved).length,{data:o}=await m.from("site_feedback").select("*").order("created_at",{ascending:!1}).limit(200),n=o||[],r=n.filter(l=>!l.is_approved).length;e.innerHTML=`
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
            ${t.length===0?ve("star","No Reviews","Customer reviews will appear here."):t.map(l=>Dn(l)).join("")}
          </div>
        </div>

        <div class="glass-soft border border-emerald-500/15 rounded-2xl p-5 space-y-4">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="message-square-text" class="w-4 h-4 text-emerald-400"></i> Customer Feedback (site-wide)</h3>
            ${r>0?`<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">${r} pending</span>`:""}
          </div>
          <p class="text-[11px] text-gray-500">Feedback submitted from the "Feedback" form on every page. Approve to show it in the public "View more Feedback" list.</p>
          <div class="space-y-3" id="feedback-list">
            ${n.length===0?ve("message-square","No Feedback Yet","Site feedback will appear here."):n.map(l=>Nn(l)).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}function Nn(e){const a=Array.from({length:5},(t,i)=>i<(e.rating||5)?"â˜…":"â˜†").join("");return`<div class="glass-soft border ${e.is_approved?"border-emerald-500/15":"border-amber-500/20"} rounded-xl p-4" data-fb-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          <span class="text-amber-400 font-bold text-sm">${a}</span>
          <span class="text-xs font-black text-white">${s(e.name||"Anonymous shopper")}</span>
          <span class="text-xs text-gray-500">${s(e.email||"no email")} Â· ${ne(e.created_at)}</span>
          ${e.is_approved?'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>':'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending</span>'}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${s(e.feedback||"â€”")}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${e.is_approved?"":`<button onclick="approveFeedback('${e.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>`}
        <button onclick="deleteFeedback('${e.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`}window.approveFeedback=async function(e){const{error:a}=await m.from("site_feedback").update({is_approved:!0}).eq("id",e);a?p(a.message,"error"):p("Feedback approved â€” it now shows on every page."),Oe()};window.deleteFeedback=async function(e){if(!confirm("Delete this feedback permanently?"))return;const{error:a}=await m.from("site_feedback").delete().eq("id",e);a?p(a.message,"error"):p("Feedback deleted."),Oe()};function Dn(e){const a=Array.from({length:5},(t,i)=>i<e.rating?"â˜…":"â˜†").join("");return`<div class="review-card glass-soft border ${e.is_approved?"border-blue-500/15":"border-amber-500/20"} rounded-xl p-4" data-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-amber-400 font-bold text-sm">${a}</span>
          <span class="text-xs text-gray-500">${ne(e.created_at)}</span>
          ${e.is_approved?'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>':'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending Approval</span>'}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${s(e.comment||e.review_text||"â€”")}</p>
        <p class="text-[11px] text-blue-400 mt-1.5">On: ${s(e.showroom_listings?.title||e.listing_id)}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${e.is_approved?"":`<button onclick="approveReview('${e.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>`}
        <button onclick="deleteReview('${e.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`}window.filterReviewTab=function(e){["all","pending","approved"].forEach(a=>document.getElementById(`rtab-${a}`)?.classList.toggle("active",a===e)),document.querySelectorAll(".review-card").forEach(a=>{const t=e==="all"||e==="pending"&&a.dataset.approved==="false"||e==="approved"&&a.dataset.approved==="true";a.style.display=t?"":"none"})};window.approveReview=async function(e){await m.from("product_reviews").update({is_approved:!0}).eq("id",e),p("Review approved"),Oe()};window.deleteReview=async function(e){confirm("Delete this review permanently?")&&(await m.from("product_reviews").delete().eq("id",e),p("Review deleted"),Oe())};async function Xa(){const e=document.getElementById("content");try{const{data:a}=await m.from("support_messages").select("*").order("created_at",{ascending:!1}).limit(200),t=a||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Messages & Support</h2>
        <div class="space-y-3">
          ${t.length===0?ve("message-circle","No Messages","Customer support messages will appear here."):t.map(i=>`
              <div class="glass-soft border ${i.is_read?"border-blue-500/10":"border-blue-400/30"} rounded-xl p-4 ${i.is_read?"":"ring-1 ring-blue-500/10"}">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs font-black text-white">${s(i.full_name||i.name||"Anonymous")}</span>
                      ${i.is_read?"":'<span class="badge bg-blue-500/15 text-blue-400 border-blue-500/20">New</span>'}
                      <span class="text-[10px] text-gray-500 ml-auto">${fe(i.created_at)}</span>
                    </div>
                    <p class="text-[11px] text-blue-400 mb-1">${s(i.email||"â€”")}</p>
                    <p class="text-xs text-gray-300">${s(i.message||i.body||"â€”")}</p>
                    ${i.subject?`<p class="text-[11px] text-gray-500 mt-1">Subject: ${s(i.subject)}</p>`:""}
                  </div>
                  <div class="flex gap-1 shrink-0">
                    <button onclick="markMsgRead('${i.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Mark Read"><i data-lucide="check" class="w-4 h-4"></i></button>
                  </div>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}window.markMsgRead=async function(e){await m.from("support_messages").update({is_read:!0}).eq("id",e),p("Marked as read"),Xa()};async function ct(){const e=document.getElementById("content");try{const{data:a}=await m.from("coupons").select("*").order("created_at",{ascending:!1}),t=a||[];e.innerHTML=`
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
                ${t.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-12">No coupons yet</td></tr>':t.map(i=>`<tr>
                    <td><code class="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">${s(i.code)}</code></td>
                    <td><span class="text-xs text-gray-300">${i.discount_type==="percent"?"Percentage":"Fixed Amount"}</span></td>
                    <td><span class="text-xs font-bold text-emerald-400">${i.discount_type==="percent"?i.discount_value+"%":"$"+i.discount_value}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${i.min_amount?"$"+i.min_amount:"â€”"}</span></td>
                    <td>${ee(i.is_active?"active":"inactive")}</td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${ne(i.expires_at)}</span></td>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}window.showAddCouponModal=function(){W(`
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
    </div>`)};window.saveCoupon=async function(e){e.preventDefault();const a=new FormData(e.target),t=Object.fromEntries(a.entries()),i={code:t.code.toUpperCase(),discount_type:t.discount_type,discount_value:parseFloat(t.discount_value),min_amount:t.min_amount?parseFloat(t.min_amount):null,usage_limit:t.usage_limit?parseInt(t.usage_limit):null,expires_at:t.expires_at||null,is_active:!0},{error:o}=await m.from("coupons").insert(i);if(o){p(o.message,"error");return}p("Coupon created!"),ce(),ct()};window.toggleCoupon=async function(e,a){await m.from("coupons").update({is_active:a}).eq("id",e),p(a?"Coupon activated":"Coupon deactivated"),ct()};window.deleteCoupon=async function(e){confirm("Delete this coupon?")&&(await m.from("coupons").delete().eq("id",e),p("Coupon deleted"),ct())};async function Rn(){const e=document.getElementById("content");try{const{data:a}=await m.from("notification_log").select("*").order("created_at",{ascending:!1}).limit(100),t=a||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Notifications</h2>
        <div class="space-y-2">
          ${t.length===0?ve("bell","No Notifications","System notifications will appear here."):t.map(i=>`
              <div class="glass-soft border border-blue-500/10 rounded-xl p-3.5 flex items-start gap-3">
                <div class="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <i data-lucide="bell" class="w-4 h-4 text-blue-400"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-0.5">
                    <span class="text-xs font-bold text-white">${s(i.subject||i.event_type||"Notification")}</span>
                    ${ee(i.status)}
                    <span class="text-[10px] text-gray-500 ml-auto">${fe(i.created_at)}</span>
                  </div>
                  <p class="text-[11px] text-gray-400">${s(i.recipient||i.order_number)}</p>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}const Za=["Featured","Sponsored","Featured Collection","Discover","Promotion"],Fn=[{id:"real-estate",name:"Real Estate & Properties"},{id:"marketplace",name:"Marketplace Showroom"}];let ze=null;function qn(e){const a={Featured:"bg-blue-500/10 text-blue-300 border-blue-500/30",Sponsored:"bg-violet-500/10 text-violet-300 border-violet-500/30","Featured Collection":"bg-amber-500/10 text-amber-300 border-amber-500/30",Discover:"bg-emerald-500/10 text-emerald-300 border-emerald-500/30",Promotion:"bg-blue-500/10 text-blue-300 border-blue-500/30"};return`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${a[e]||a.Featured}">${s(e)}</span>`}function Un(e){return!e||!e.link_type||e.link_type==="none"?'<span class="text-[10px] text-gray-500">No link</span>':e.link_type==="product"?`<span class="text-[10px] text-blue-300"><i data-lucide="package" class="w-3 h-3 inline mr-1"></i>Product Â· ${s(e.link_target||"")}</span>`:e.link_type==="category"?`<span class="text-[10px] text-emerald-300"><i data-lucide="tag" class="w-3 h-3 inline mr-1"></i>Category Â· ${s(e.link_target||"")}</span>`:`<span class="text-[10px] text-amber-300"><i data-lucide="layout-grid" class="w-3 h-3 inline mr-1"></i>Section Â· ${s(e.link_target||"")}</span>`}function jn(e){return e.video_url?`<video src="${s(e.video_url)}" ${e.poster_url?`poster="${s(e.poster_url)}"`:""} class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" muted preload="metadata"></video>`:e.image_url?`<img src="${s(e.image_url)}" class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" onerror="this.remove()">`:'<div class="w-24 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="megaphone" class="w-6 h-6 text-blue-400"></i></div>'}async function ei(){if(ze)return ze;const e=[],a=new Set,t=[],i=o=>{if(!o||!o.property_id)return;e.push({id:o.property_id,title:o.title||o.property_id});const n=o.category||"";n&&!a.has(n)&&(a.add(n),t.push(n))};try{ie.forEach(i)}catch{}try{const{data:o,error:n}=await m.from("showroom_listings").select("property_id,title,category").order("created_at",{ascending:!1});!n&&o&&o.forEach(i)}catch{}return["Women","Men","Kids","Home","Sports","Jewellery","Electronics","Cars","Motorcycles","Phones","Computers","Furniture","Beauty","Fashion","Real Estate","Bicycles","Trucks","Land","Kitchen","Food","Pets","Books","Toys","Services"].forEach(o=>{a.has(o)||(a.add(o),t.push(o))}),ze={products:e,categories:t,sections:Fn},ze}async function On(e){try{const{data:{session:a}}=await m.auth.getSession();if(!a)return p("Sign in to upload media","error"),null;const t=(e.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),i=/^(mp4|webm|mov|m4v)$/.test(t)||e.type.startsWith("video/"),o=`ads/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${t}`,{error:n}=await m.storage.from("advertisements").upload(o,e,{contentType:e.type,upsert:!1});if(n)return p("Upload failed: "+n.message,"error"),null;const{data:r}=m.storage.from("advertisements").getPublicUrl(o);return{url:r.publicUrl,isVideo:i}}catch{return p("Upload failed","error"),null}}function Xe(e,a){const t=document.getElementById("ad-media-preview");if(!t)return;const i=document.getElementById("ad-hidden-video"),o=document.getElementById("ad-hidden-image");i&&(i.value=a?e:""),o&&(o.value=a?"":e),t.innerHTML=a?`<video src="${s(e)}" class="w-full h-40 object-cover rounded-xl" controls muted playsinline></video>`:`<img src="${s(e)}" class="w-full h-40 object-cover rounded-xl">`,window.lucide&&lucide.createIcons()}window.onAdMediaPicked=async function(e){const a=e.files&&e.files[0];if(!a)return;if(!(a.type.startsWith("image/")||a.type.startsWith("video/"))){p("Choose an image or video file","error");return}const t=await On(a);if(!t){e.value="";return}Xe(t.url,t.isVideo);const i=document.getElementById("ad-media-url");i&&(i.value=t.url)};window.onAdMediaUrl=function(e){const a=(e.value||"").trim();if(!a)return;const t=/\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(a);Xe(a,t)};function Qt(e,a,t){const i=document.getElementById("ad-link-target-wrap");if(!i)return;if(!a||a==="none"){i.innerHTML='<p class="text-[10px] text-gray-500">This ad is informational and will not be clickable.</p>';return}let o="";a==="product"?o='<option value="">Select a productâ€¦</option>'+e.products.map(n=>`<option value="${s(n.id)}" ${String(t)===String(n.id)?"selected":""}>${s(n.id)} â€” ${s((n.title||"").slice(0,60))}</option>`).join(""):a==="category"?o='<option value="">Select a categoryâ€¦</option>'+e.categories.map(n=>`<option value="${s(n)}" ${t===n?"selected":""}>${s(n)}</option>`).join(""):a==="section"&&(o='<option value="">Select a sectionâ€¦</option>'+e.sections.map(n=>`<option value="${s(n.id)}" ${t===n.id?"selected":""}>${s(n.name)}</option>`).join("")),i.innerHTML=`<label class="lbl">Target</label><select class="input-field" name="link_target">${o}</select>`}function ti(e){return`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${e?"Edit Advertisement":"Add Advertisement"}</h3>
          <button onclick="closeModal()" class="btn-press text-xs font-bold text-gray-400 hover:text-white transition">âœ• Close</button>
        </div>
        <form id="ad-form" onsubmit="saveAd(event)" class="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          <input type="hidden" name="id" value="${e?e.id:""}">
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Title *</label><input class="input-field" name="title" required value="${s(e&&e.title?e.title:"")}" placeholder="e.g. Summer Sale 2026"></div>
            <div><label class="lbl">Ad Label</label>
              <select class="input-field" name="ad_label">
                ${Za.map(a=>`<option value="${a}" ${e&&e.ad_label===a?"selected":""}>${a}</option>`).join("")}
              </select>
            </div>
          </div>
          <div><label class="lbl">Message</label><textarea class="input-field" name="description" rows="2" placeholder="Short message shown on the adâ€¦">${s(e&&e.description?e.description:"")}</textarea></div>

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
    </div>`}window.onAdLinkTypeChange=function(){const e=window._adLinkCache||{products:[],categories:[],sections:[]},a=document.querySelector('#ad-form select[name="link_type"]'),t=a?a.value:"none";Qt(e,t,"")};window.showAddAdModal=async function(){const e=await ei();window._adLinkCache=e,W(ti(null)),Qt(e,"none","")};window.showEditAdModal=async function(e){const a=await ei();window._adLinkCache=a;const{data:t}=await m.from("promotions").select("*").eq("id",e).maybeSingle();if(!t){p("Ad not found","error");return}W(ti(t)),t.image_url?Xe(t.image_url,!1):t.video_url&&Xe(t.video_url,!0),Qt(a,t.link_type||"none",t.link_target||"")};window.saveAd=async function(e){e.preventDefault();const a=new FormData(e.target),t=Object.fromEntries(a.entries()),i=t.id||"",o={title:t.title,description:t.description||"",ad_label:Za.includes(t.ad_label)?t.ad_label:"Featured",image_url:t.image_url||null,video_url:t.video_url||null,link_type:["none","product","category","section"].includes(t.link_type)?t.link_type:"none",link_target:t.link_target||null,start_date:t.start_date?new Date(t.start_date+"T00:00:00").toISOString():null,end_date:t.end_date?new Date(t.end_date+"T23:59:59").toISOString():null,is_active:t.is_active==="on",promo_type:"banner"};if(!o.image_url&&!o.video_url){p("Add an image or video for the ad","error");return}const n=e.target.querySelector('button[type="submit"]');n&&(n.disabled=!0);try{if(i){const{error:r}=await m.from("promotions").update(o).eq("id",i);if(r)throw r;p("Ad updated!")}else{const{error:r}=await m.from("promotions").insert(o);if(r)throw r;p("Ad created!")}}catch(r){p(r.message||"Save failed","error"),n&&(n.disabled=!1);return}ce(),Ce()};window.togglePromo=async function(e,a){const{error:t}=await m.from("promotions").update({is_active:a}).eq("id",e);if(t){p(t.message,"error");return}p(a?"Ad activated":"Ad deactivated"),Ce()};window.moveAd=async function(e,a){try{const{data:t,error:i}=await m.from("promotions").select("id,sort_order").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1});if(i)throw i;const o=t||[],n=o.findIndex(c=>c.id===e),r=n+a;if(n<0||r<0||r>=o.length){p("Already at the edge","info");return}const l=o[n],d=o[r];await m.from("promotions").update({sort_order:d.sort_order}).eq("id",l.id),await m.from("promotions").update({sort_order:l.sort_order}).eq("id",d.id),p("Order updated")}catch(t){p(t.message||"Reorder failed","error")}Ce()};window.deletePromo=async function(e){if(confirm("Delete this ad? This cannot be undone.")){try{const{data:a}=await m.from("promotions").select("image_url,video_url,poster_url").eq("id",e).maybeSingle();if(a){const i=[a.image_url,a.video_url,a.poster_url].filter(Boolean).map(o=>{const n=/\/object\/public\/advertisements\/(.+)$/.exec(o);return n?decodeURIComponent(n[1]):null}).filter(Boolean);if(i.length)try{await m.storage.from("advertisements").remove(i)}catch{}}const{error:t}=await m.from("promotions").delete().eq("id",e);if(t)throw t;p("Ad deleted")}catch(a){p(a.message||"Delete failed","error")}Ce()}};async function Ce(){const e=document.getElementById("content");try{const{data:a}=await m.from("promotions").select("*").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1}),t=a||[];e.innerHTML=`
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
          ${t.length===0?ve("megaphone","No Ads","Create your first showcase ad â€” add a title, image or video, label, and optional product link.",'<button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"><i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement</button>'):t.map((i,o)=>`
              <div class="glass-soft border border-blue-500/15 rounded-xl p-4 flex items-center gap-4">
                ${jn(i)}
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap">
                    <p class="text-sm font-black text-white truncate">${s(i.title||i.name)}</p>
                    ${qn(i.ad_label||"Featured")}
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${s(i.description||"")}</p>
                  <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${i.is_active?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":"bg-gray-500/10 text-gray-400 border-gray-500/20"}">${i.is_active?"Active":"Inactive"}</span>
                    ${Un(i)}
                    <span class="text-[10px] text-gray-500">${ne(i.start_date)}${i.start_date?" â†’ ":""}${ne(i.end_date)}</span>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}window.renderAds=Ce;const ut=[{id:"gemini",name:"Google Gemini",tag:"FREE",color:"blue",icon:"sparkles",kf:"gemini_key",ph:"AIzaSyâ€¦",signup:"https://aistudio.google.com/apikey",models:["gemini-3-flash-preview","gemini-3.1-flash-lite-preview"],mf:"gemini_model",dm:"gemini-3-flash-preview",desc:"Google's best free AI. Great for coding, writing apps & websites.",free_tier:"15 req/min Â· 1M tokens/day â€” Free forever"}],se={border:{blue:"border-blue-500/50"},bg:{blue:"bg-blue-500/8"},text:{blue:"text-blue-400"},badge:{blue:"bg-blue-500/15 text-blue-300"}};async function ai(){const e=document.getElementById("content");try{let a=function(n){const r=o===n.id,l=i[n.kf],d=i[n.mf]||n.dm;return`
        <div class="glass-soft border ${r?se.border[n.color]+" "+se.bg[n.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard" id="apc-${n.id}">
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-8 h-8 ${se.bg[n.color]} rounded-lg flex items-center justify-center shrink-0">
                <i data-lucide="${n.icon}" class="w-4 h-4 ${se.text[n.color]}"></i>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h3 class="text-xs font-black text-white">${s(n.name)}</h3>
                  <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full ${se.badge[n.color]}">${n.tag}</span>
                </div>
                <p class="text-[9px] text-emerald-400 font-bold mt-0.5 leading-tight truncate">${s(n.free_tier)}</p>
              </div>
            </div>
            <label class="flex items-center gap-1 cursor-pointer shrink-0">
              <input type="radio" name="active_provider" value="${n.id}" ${r?"checked":""} class="accent-blue-500" onchange="highlightAI('${n.id}')">
              <span class="text-[9px] font-bold ${r?se.text[n.color]:"text-gray-600"}">USE</span>
            </label>
          </div>
          <p class="text-[11px] text-gray-400 leading-relaxed">${s(n.desc)}</p>
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="lbl mb-0">API Key</label>
              <a href="${n.signup}" target="_blank" rel="noopener" class="text-[10px] font-bold ${se.text[n.color]} hover:underline flex items-center gap-0.5">
                <i data-lucide="external-link" class="w-3 h-3"></i>Get Free Key
              </a>
            </div>
            <div class="relative">
              <input type="password" class="input-field pr-16 text-xs" name="${n.kf}"
                placeholder="${l?"â€¢â€¢â€¢â€¢"+l.slice(-4):n.ph}">
              ${l?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>'}
            </div>
          </div>
          <div>
            <label class="lbl">Model</label>
            <select class="input-field text-xs" name="${n.mf}">
              ${n.models.map(c=>`<option value="${c}" ${d===c?"selected":""}>${c}</option>`).join("")}
            </select>
          </div>
        </div>`};const{data:t}=await m.from("ai_settings").select("*").limit(1).maybeSingle(),i=t||{},o=i.active_provider||"gemini";e.innerHTML=`
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
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">${ut.map(a).join("")}</div>
          </div>

          <div class="glass-soft border border-orange-500/15 rounded-2xl p-4 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2 flex-wrap">
              <i data-lucide="shield-check" class="w-4 h-4 text-orange-400"></i> Groq Vision
              <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full bg-orange-500/15 text-orange-300">Backup</span>
            </h3>
            <p class="text-[11px] text-gray-400 leading-relaxed">Optional safety net for the Product Scanner. When Gemini fails, times out or hits its free limit, that one request is retried on Groq's vision model — so scans keep producing real photo data instead of empty forms.</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <label class="lbl">Groq API Key</label>
                <input type="password" class="input-field text-xs" name="groq_key"
                  placeholder="${i.groq_key?"••••"+String(i.groq_key).slice(-4):"gsk_…"}">
                ${i.groq_key?'<p class="text-[9px] font-bold text-emerald-500 mt-1">✓ Saved</p>':""}
              </div>
              <div>
                <label class="lbl">Vision Model</label>
                <select class="input-field text-xs" name="groq_vision_model">
                  ${["meta-llama/llama-4-scout-17b-16e-instruct","qwen/qwen3.6-27b"].map(n=>`<option value="${n}" ${(i.groq_vision_model||"meta-llama/llama-4-scout-17b-16e-instruct")===n?"selected":""}>${n}</option>`).join("")}
                </select>
              </div>
            </div>
            <a href="https://console.groq.com/keys" target="_blank" rel="noopener" class="inline-flex items-center gap-0.5 text-[10px] font-bold text-orange-400 hover:underline">
              <i data-lucide="external-link" class="w-3 h-3"></i>Get a free Groq key (generous free tier)
            </a>
          </div>

          <div class="glass-soft border border-purple-500/15 rounded-2xl p-4 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2 flex-wrap">
              <i data-lucide="hard-drive" class="w-4 h-4 text-purple-400"></i> General AI Scanner
              <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300">uses Gemini / Groq</span>
            </h3>
            <p class="text-[11px] text-gray-400 leading-relaxed">The General AI Scanner processes product photos through your Gemini key (primary) with Groq backup — no local software needed. Both keys are already saved above. Works from any device.</p>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="sliders" class="w-4 h-4 text-blue-400"></i> Feature Toggles</h3>
            ${[{key:"product_ai_enabled",label:"AI Product Creation",desc:"AI auto-fills product descriptions",val:i.product_ai_enabled!==!1},{key:"ai_code_assist",label:"AI Code Assistant",desc:"AI helps build and edit your website code",val:i.ai_code_assist!==!1},{key:"ai_moderation",label:"AI Content Moderation",desc:"Auto-approve/reject customer reviews using AI",val:i.ai_moderation}].map(n=>`
              <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
                <div><p class="text-xs font-bold text-white">${n.label}</p><p class="text-[11px] text-gray-500">${n.desc}</p></div>
                <label class="toggle-switch"><input type="checkbox" name="${n.key}" ${n.val?"checked":""}><span class="toggle-slider"></span></label>
              </div>`).join("")}
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            ðŸ’¾ Save AI Settings
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}window.highlightAI=function(e){ut.forEach(a=>{const t=document.getElementById("apc-"+a.id);if(!t)return;const i=a.id===e;t.className=`glass-soft border ${i?se.border[a.color]+" "+se.bg[a.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard`;const o=t.querySelector("input[type=radio] + span");o&&(o.className=`text-[9px] font-bold ${i?se.text[a.color]:"text-gray-600"}`)})};window.saveAiSettings=async function(e){e.preventDefault();const a=new FormData(e.target),t=Object.fromEntries(a.entries()),i={active_provider:t.active_provider||"gemini",product_ai_enabled:t.product_ai_enabled==="on",ai_code_assist:t.ai_code_assist==="on",ai_moderation:t.ai_moderation==="on"};ut.forEach(n=>{t[n.mf]&&(i[n.mf]=t[n.mf]);const r=(t[n.kf]||"").trim();r&&!r.startsWith("â€¢â€¢â€¢â€¢")&&r!==""&&(i[n.kf]=r)}),i.gemini_key&&(i.gemini_api_key=i.gemini_key),t.groq_vision_model&&(i.groq_vision_model=t.groq_vision_model);const o=(t.groq_key||"").trim();o&&!/^[•\u2022]{4}/.test(o)&&(i.groq_key=o);try{const{data:n}=await m.from("ai_settings").select("id").limit(1).maybeSingle();let r;if(n?.id?{error:r}=await m.from("ai_settings").update(i).eq("id",n.id):{error:r}=await m.from("ai_settings").insert(i),r){p("Save failed: "+r.message,"error"),console.error("[AI Save]",r);return}await U.reload(),p("âœ… AI settings saved!","success"),setTimeout(()=>ai(),600)}catch(n){p("Unexpected error: "+n.message,"error"),console.error("[AI Save]",n)}};const U={_cfg:null,async reload(){const{data:e,error:a}=await m.from("ai_settings").select("*").limit(1).maybeSingle();if(a){console.warn("[aiClient] Could not load settings:",a.message),this._cfg={};return}const t=e||{};!t.gemini_key&&t.gemini_api_key&&(t.gemini_key=t.gemini_api_key),this._cfg=t},async getConfig(){return this._cfg||await this.reload(),this._cfg},async freeChat(e,{maxTokens:a=2e3,timeoutMs:t=6e4}={}){const i=await fetch("https://text.pollinations.ai/openai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"openai",messages:e.map(r=>({role:r.role==="assistant"?"assistant":r.role==="system"?"system":"user",content:String(r.content||"").slice(0,12e3)})),max_tokens:a}),signal:AbortSignal.timeout(t)});if(!i.ok)throw new Error(`Free AI provider error (${i.status}).`);const o=await i.json(),n=String(o?.choices?.[0]?.message?.content||"").trim();if(!n)throw new Error("Free AI provider returned an empty reply.");return{text:n,provider:"Free AI (Pollinations)",model:String(o?.model||"openai-fast")}},async chat(e,{maxTokens:a=2e3}={}){const t=await this.getConfig();if(!String(t.gemini_key||"").trim())return this.freeChat(e,{maxTokens:a});const i=e[e.length-1],o={action:"chat",message:String(i?.content||"").trim(),history:e.slice(0,-1).map(n=>({role:n.role,content:String(n.content||"")})),provider_override:"gemini",max_tokens:a};try{const n=await this._callEdge(o);if(n&&n.response)return{text:n.response,provider:"Google Gemini",model:n.model||t.gemini_model};throw new Error(String(n?.error||"Gemini is unavailable."))}catch(n){try{const r=await this.freeChat(e,{maxTokens:a});return r.note="gemini-unavailable",r}catch{throw n}}},async prompt(e,a={}){return this.chat([{role:"user",content:e}],a)},async getStatus(){const e=await this.getConfig();return ut.map(a=>({id:a.id,name:a.name,color:a.color,hasKey:!!e[a.kf]?.trim(),isActive:e.active_provider===a.id,isCoolingDown:!1,remainingSec:0}))},async analyzeImages(e,a={}){const t=`You are the AI listing expert for the Weverse Online Shop marketplace. Look carefully at the uploaded product photo(s) and identify exactly what the product is â€” the REAL brand, model and year that actually appear in the photos, never a guessed one.

IDENTIFY THE REAL BRAND & MODEL (most important):
- Find the brand badge, emblem, logo, nameplate or label in the photo and read its exact letters and symbols, character by character.
- For vehicles, cross-check the badge against the design: grille shape, headlight and taillight design, body lines, wheels, interior and steering wheel. A BMW grille/kidney badge, Mercedes three-pointed star, Audi four rings, Toyota, Honda, Ford, Tesla, etc. are visually distinct â€” match what you actually see.
- Use the EXACT brand name that is printed on the product. NEVER swap it for a different brand (e.g. never call a BMW a Mercedes-Benz, never call an iPhone a Samsung).
- If the exact model number is printed (e.g. "X5", "C300", "iPhone 15 Pro Max", "MacBook Pro"), use that exact text.
- The year must come from a visible printed date/serial when present; otherwise give your best estimate from the design era and never invent a specific year you cannot support.

Return a single valid JSON object (no markdown, no extra text) with these keys:
- title (string): a real, professional marketplace product title that matches the actual item (real brand + real model/type + key feature + category). Never use placeholders like "AI Product" or "Premium Item".
- description (string): a detailed, persuasive 2-4 sentence description.
- category (string): the best category from this list: ${ge.join(", ")}.
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
- Respond with valid JSON only.`,i=(await Promise.all((e||[]).slice(0,a.maxImages||3).map(o=>this._fetchImageAsDataUrl(o,768)))).filter(Boolean);if(!i.length)throw new Error("Could not read the uploaded images.");try{const o=await this._callEdge({action:"vision",images:i,prompt:t,max_tokens:4096});if(o&&o.success&&o.text){const n=ua(o.text);if(n)return o.provider&&this._noteProvider(o.provider),{...n,_aiProvider:o.provider==="groq"?"Groq vision (backup)":"Gemini vision",_aiModel:o.model};throw new Error("The AI returned no valid analysis for these images.")}throw new Error(o&&o.error||"Vision service unavailable.")}catch(o){this._noteIssue("identify",`server vision: ${o&&o.message||o}`)}return null},async _runVisionPrompt(e,a,{maxImages:t=5,maxTokens:i=4096,mergeResults:o=null,onProgress:n=()=>{},stageLabel:r="vision"}={}){const l=Math.max(1,Number(t)||5),d=await this._collectScanImages(a,{onProgress:n});if(!d.length)throw new Error("Could not read the uploaded images.");const c=async g=>this._runSingleVisionCall(e,g,{maxTokens:i,stageLabel:r});let u;if(d.length<=l)u=await c(d);else{const g=[];for(let k=0;k<d.length;k+=l)g.push(d.slice(k,k+l));n(0,g.length);const y=3,b=new Array(g.length).fill(null);let h=0;const v=async()=>{for(;h<g.length;){const k=h++;b[k]=await c(g[k]).catch(()=>null),n(Math.min(h,g.length),g.length)}};await Promise.all(Array.from({length:Math.min(y,g.length)},v));const _=[];if(b.forEach((k,f)=>{k&&_.push({result:k,startIndex:f*l})}),!_.length)return null;u=o?o(_,{batchSize:l,totalImages:d.length}):_.reduce((k,f)=>this._mergeJsonResults(k,f.result),null)}return u||null},async _runSingleVisionCall(e,a,{maxTokens:t=4096,stageLabel:i="vision"}={}){if(!await this._waitForQuotaWindow(7e4,i))return null;try{const o=await this._paceGeminiCall(()=>this._callEdge({action:"vision",images:a,prompt:e,max_tokens:t},45e3));if(o&&o.success&&o.text){const n=ua(o.text);if(n)return o.provider&&this._noteProvider(o.provider),{...n,_aiProvider:o.provider==="groq"?"Groq vision (backup)":"Gemini vision",_aiModel:o.model};throw new Error("The AI returned no valid analysis for these images.")}throw new Error(o&&o.error||"Vision service unavailable.")}catch(o){this._noteIssue(i,`vision: ${o&&o.message||o}`)}return null},_pdfPageCache:new Map,async _collectScanImages(e,{onProgress:a=()=>{}}={}){const t=(Array.isArray(e)?e:[e]).map(n=>String(n||"")).filter(Boolean);if(!t.length)return[];const i=await Promise.all(t.map(async n=>{try{if(/^data:application\/pdf/.test(n)||it(n)){let l=this._pdfPageCache.get(n)||null;return l||(l=await Di(n,{maxDim:1300}).catch(()=>[]),l.length&&this._pdfPageCache.set(n,l)),l}const r=await this._fetchImageAsDataUrl(n,1024);return r?[r]:[]}catch{return[]}})),o=[];for(const n of i)o.push(...n);return o},_mergeJsonResults(e,a){if(!e)return a?{...a}:null;if(!a)return e;const t={...e};for(const[i,o]of Object.entries(a))if(!i.startsWith("_")&&!(o==null||typeof o=="string"&&!o.trim())){if(!(i in t)||t[i]==null||t[i]===""){t[i]=o;continue}if(Array.isArray(t[i])||Array.isArray(o)){const n=[...Array.isArray(t[i])?t[i]:[t[i]],...Array.isArray(o)?o:[o]].map(r=>typeof r=="string"?r.trim():r).filter(r=>r!=null&&r!=="");t[i]=[...new Set(n)]}else typeof t[i]=="object"&&typeof o=="object"?t[i]={...t[i],...o}:(String(t[i]).trim(),String(o).trim())}return t},async identifyProduct(e,a={}){const t=`STAGE 1 â€” IDENTIFY THE EXACT PRODUCT.
Look at the photo(s) and state exactly what product is shown. Identification ONLY â€” do not complete any specifications yet.

IDENTIFICATION RULES (accuracy over guesses â€” this is the most important step):
- Read the real brand badge / logo / emblem / nameplate / label in the photo character by character and use the EXACT brand that is printed. NEVER swap brands: a BMW must never be called Mercedes-Benz, an iPhone never Samsung, a Toyota never Honda or any other brand.
- The model must come from a visible nameplate / label / badging when present. Otherwise identify the exact design (grille, headlights, taillights, wheels, body lines, interior, silhouette, box, packaging) and give your best professional identification, or give the brand + product type (e.g. "BMW SUV" or "Levi's jeans") instead of inventing a specific model.
- year: only from a visible printed year, serial, badge or registration. Otherwise estimate from the design era and set "year_estimated": true.
- color: the dominant color clearly visible.
- body_type: only when clearly visible (Sedan, SUV, Hatchback, Coupe, Convertible, Wagon, Pickup, Truck, Van, Sports Car, Luxury Sedan, Motorcycle, Yacht, Other).
- condition: judge from what is visible (New, Refurbished, Used - Like New, Used - Good, Used - Fair).
- listing_type: "property" if the photo shows a house, villa, apartment, condo, mansion, land, estate or any building for sale; "vehicle" for cars, motorcycles, boats and other vehicles; otherwise "product".
- category (for products and vehicles): best match from this list: ${ge.join(", ")}. For property photos set category to "Real Estate".
- For properties also give: property_type (House, Villa, Apartment, Condo, Land, Commercial, Farm, Other), bedrooms (number or null), bathrooms (number or null), half_bathrooms (number or null), building_size (string|null), land_size (string|null), floors (number|null), garage (string|null, e.g. "2-car attached"), parking_spaces (number|null), furnished ("Furnished"/"Unfurnished"/null), condition (string|null â€” only from a visible listing sign, seller notes or obvious visible state: "New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation"), year_built (number|null â€” only from a visible year, plaque, cornerstone or listing sign), year_renovated (number|null â€” only if visibly stated), area (neighborhood/district, string|null), address (street + number or landmark when visible in the photo or reliably known, string|null), zip_code (string|null â€” only if visibly printed), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town (string|null), city (string|null), state (string|null), country (string|null), latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null).
- LOCATION RULES: use ONLY location information genuinely visible in the photo or reliably known from it (street signs, landmarks, real estate signs, watermarks). NEVER invent a street address, area, city or coordinates. If you cannot determine a location value, return null for that field â€” the owner will enter it. Latitude/longitude may be derived from a readable address (e.g. a visible street sign); otherwise null.
- confidence: how certain you are about what this is: "high" | "medium" | "low".
- alternate_categories: up to 2 other plausible category matches from the list above, or [].
- detected_name: a short plain label of what you actually see, e.g. "white Toyota Camry sedan", "black leather handbag", "modern 4-bedroom villa".
- If the photo does not clearly show a product, return { "identified": false, "detected_name": "what you see", "reason": "why you cannot identify it" }.

Return ONE valid JSON object (no markdown) with only these keys:
{ "identified": true, "listing_type": "product"|"vehicle"|"property", "brand": string|null, "model": string|null, "year": string|null, "year_estimated": boolean, "body_type": string|null, "color": string|null, "condition": string|null, "category": string|null, "subcategory": string|null, "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": string|null, "year_built": number|null, "year_renovated": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "confidence": "high"|"medium"|"low", "alternate_categories": string[], "detected_name": string }`;return this._runVisionPrompt(t,e,{maxImages:a.maxImages||5,stageLabel:"identify"})},async detectProducts(e,a={}){const t=`STAGE 0 â€” DETECT EVERY DISTINCT PRODUCT.
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
- category: best match from this list â€” ${ge.join(", ")}. For properties set category to "Real Estate".
- subcategory, property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors (number|null), garage (string|null), parking_spaces (number|null), furnished ("Furnished"/"Unfurnished"/null), year_built (number|null â€” only if visible), area (neighborhood/district), address (street + number or landmark when visible/reliably known), zip_code (string|null â€” only if visible), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town, city, state, country, latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null) for properties. LOCATION RULES: only use location genuinely visible in the photo â€” never invent an address or coordinates; return null when unknown.
- confidence: "high" | "medium" | "low" for each product.
- detected_name: a short plain label for each product, e.g. "black leather handbag", "silver wristwatch", "white Nike sneakers", "modern 3-bedroom villa".

Return ONE valid JSON object (no markdown):
{ "identified": true, "products": [ { "image_indices": number[], "listing_type": "product"|"vehicle"|"property", "brand": string|null, "model": string|null, "year": string|null, "year_estimated": boolean, "body_type": string|null, "color": string|null, "condition": string|null, "category": string|null, "subcategory": string|null, "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": "Furnished"|"Unfurnished"|null, "year_built": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "confidence": "high"|"medium"|"low", "detected_name": string } ] }`;return this._runVisionPrompt(t,e,{maxImages:a.maxImages||5,stageLabel:"detect",mergeResults:i=>{const o=[];for(const{result:n,startIndex:r}of i)for(const l of n&&Array.isArray(n.products)?n.products:[]){const d=Array.isArray(l.image_indices)?[...new Set(l.image_indices.map(u=>parseInt(u,10)).filter(Number.isFinite).map(u=>u+r))]:[r],c=o.find(u=>String(u.detected_name||"").toLowerCase()===String(l.detected_name||"").toLowerCase()&&String(u.brand||"").toLowerCase()===String(l.brand||"").toLowerCase()&&String(u.model||"").toLowerCase()===String(l.model||"").toLowerCase());if(c){c.image_indices=[...new Set([...c.image_indices||[],...d])],(l.confidence==="high"&&c.confidence!=="high"||!c.detected_name&&l.detected_name)&&(c.confidence=l.confidence,c.detected_name=l.detected_name||c.detected_name);continue}o.push({...l,image_indices:d})}return{identified:o.length>0,products:o}}})},async completeProductSpecs(e,a,t={}){const i=a||{},o=`STAGE 2 â€” COMPLETE THE STANDARD SPECIFICATIONS.
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
}`;return this._runVisionPrompt(o,e,{maxImages:t.maxImages||5,stageLabel:"specs"})},async estimateProductPrice(e,a,t={},i={}){const o=a||{},n=t||{},r=`STAGE 3 â€” ESTIMATE THE REAL MARKET PRICE AND A PROMOTIONAL DISCOUNT PRICE.
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
- engine: ${String(n.engine||"unknown")}
- transmission: ${String(n.transmission||"unknown")}
- fuel_type: ${String(n.fuel_type||"unknown")}
- drive_type: ${String(n.drive_type||"unknown")}
- horsepower: ${String(n.horsepower||"unknown")}
- mileage: ${String(n.mileage||"unknown")}
- storage/ram: ${String(n.storage||"")}${n.ram?" / "+n.ram:""}
- property: ${String(o.property_type||n.property_type||"")}${n.bedrooms?` ${n.bedrooms} beds`:""}${n.half_bathrooms?` / ${n.half_bathrooms} half baths`:""}${n.bathrooms?` / ${n.bathrooms} baths`:""}${n.building_size?` / ${n.building_size}`:""}${n.land_size?` / ${n.land_size} land`:""}${n.year_built?` / built ${n.year_built}`:""}${n.condition?` / ${n.condition}`:""}${n.city?` / ${n.city}`:""}

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
}`;return this._runVisionPrompt(r,e,{maxImages:i.maxImages||5,stageLabel:"price"})},async completeSpecsAndPrice(e,a,t={}){const i=a||{},o=`STAGES 2+3 â€” COMPLETE THE SPECIFICATIONS AND ESTIMATE THE PRICE IN ONE STEP.
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
}${t.fieldsSchema||""}${t.fieldsSchema?`
FORM-FIELD COMPLETENESS RULE: the form-field list above is binding. EVERY key in that list that is not already covered by the JSON keys above MUST also appear as a top-level key in your returned JSON with its extracted value (or null when genuinely not present anywhere in the document/photos â€” never guess). Use each field's exact quoted key. Match select options exactly.`:""}`,n=await this._runVisionPrompt(o,e,{maxImages:t.maxImages||5,stageLabel:"specs-price"});if(!n)return null;const{price:r,...l}=n,d=r&&typeof r=="object"?r:n.estimated_price!=null?{currency:n.currency||"USD",estimated_price:n.estimated_price,suggested_discount_price:n.suggested_discount_price??null,confidence:n.confidence??null,reason:n.reason??""}:null;if(d&&Number.isFinite(Number(d.estimated_price))){const c=Number(d.estimated_price);c<=0&&(d.estimated_price=H),d.estimated_price=Math.max(H,Math.min(X,c))}return{specs:Object.keys(l).length?l:null,price:d}},async verifyExtraction(e,a,t,i=[],o={}){if(!await this._waitForQuotaWindow(2e4,"verify"))return null;const n=a||{},r=(i||[]).map(c=>`- "${c.key}" (${c.label})`).join(`
`),l=Object.entries(t||{}).filter(([,c])=>c!=null&&String(Array.isArray(c)?c.join(", "):c).trim()!=="").map(([c,u])=>`"${c}": ${JSON.stringify(Array.isArray(u)?u.join(", "):String(u).slice(0,160))}`).join(`,
`),d=`VERIFICATION PASS â€” CHECK EVERY EXTRACTED VALUE AGAINST THE DOCUMENT.
A first extraction pass produced the values below from these same photo(s)/document page(s). Your job is to RE-READ every page carefully and audit EACH value.

IDENTIFIED ITEM: ${[n.year,n.brand,n.model].filter(Boolean).join(" ")||n.detected_name||"unknown"}

CURRENT EXTRACTED VALUES:
${l||"(none yet)"}

AUDIT INSTRUCTIONS â€” check all of these, one by one:
1. WRONG VALUES: any current value that contradicts what the document actually says (misread digit/letter, wrong model variant, wrong date format, swapped fields like engine size vs horsepower, price in the wrong currency) â†’ put the CORRECT value in "corrections" under that exact key.
2. MISSED VALUES: information present somewhere in the document (any page, including fine print, tables, stamps, serials, labels, footers) that has NO current value above but belongs to one of the known fields â†’ add it under that exact key in "corrections".
3. MISPLACED VALUES ("wrong_mapping"): a value that was put in the wrong FIELD (e.g. VIN stored as mileage, a person's name stored as publisher) â†’ list [wrong_key, right_key] pairs.
4. STILL MISSING: fields that genuinely apply to this item type but have no value and are nowhere in the document â†’ list their keys in "still_missing". NEVER invent or guess a value â€” only report what is actually written in the document.
${r?`
KNOWN FORM FIELDS:
${r}
Use ONLY these keys (or keys already present above) in corrections.
`:""}
Return ONE valid JSON object (no markdown):
{ "corrections": { "<key>": <corrected or newly found value â€” exact JSON type for that field> }, "still_missing": ["key"], "wrong_mapping": [["from_key","to_key"]], "notes": ["short factual observations, e.g. 'VIN appears on page 2 footer'"] }`;try{return await this._runVisionPrompt(d,e,{maxImages:o.maxImages||5,maxTokens:2500,stageLabel:"verify",mergeResults:c=>{const u={corrections:{},still_missing:[],wrong_mapping:[],notes:[]};for(const{result:g}of c){const y=g||{};y.corrections&&typeof y.corrections=="object"&&Object.assign(u.corrections,y.corrections);for(const b of Array.isArray(y.still_missing)?y.still_missing:[]){const h=String(b);h&&!u.still_missing.includes(h)&&u.still_missing.push(h)}for(const b of Array.isArray(y.wrong_mapping)?y.wrong_mapping:[])Array.isArray(b)&&b.length>=2&&!u.wrong_mapping.some(h=>h[0]===b[0]&&h[1]===b[1])&&u.wrong_mapping.push([String(b[0]),String(b[1])]);for(const b of Array.isArray(y.notes)?y.notes:[]){const h=String(b||"").trim();h&&!u.notes.includes(h)&&u.notes.push(h)}}return u}})}catch{return null}},async _callEdge(e,a=6e4){let t="";try{t=(await m.auth.getSession())?.data?.session?.access_token||""}catch{}return await(await fetch(Fi,{method:"POST",headers:{"Content-Type":"application/json",...t?{Authorization:`Bearer ${t}`}:{}},body:JSON.stringify(e),signal:AbortSignal.timeout(a)})).json().catch(()=>({}))},_imageCache:new Map,async _fetchImageAsDataUrl(e,a=768){const t=String(e);if(this._imageCache.has(t))return this._imageCache.get(t);const i=(async()=>{try{const n=await fetch(e,{signal:AbortSignal.timeout(15e3)}).then(r=>r.blob());return!n||!n.size?null:n.size<15e4?`data:${n.type||"image/jpeg"};base64,${await Hn(n)}`:await this._downscaleImage(n,a)}catch{return null}})();this._imageCache.set(t,i);const o=await i;return o||this._imageCache.delete(t),o},async _downscaleImage(e,a){const t=URL.createObjectURL(e);try{const i=new Image;await new Promise((d,c)=>{i.onload=d,i.onerror=c,i.src=t});const o=Math.min(1,a/Math.max(i.width,i.height)),n=Math.max(1,Math.round(i.width*o)),r=Math.max(1,Math.round(i.height*o)),l=document.createElement("canvas");return l.width=n,l.height=r,l.getContext("2d").drawImage(i,0,0,n,r),l.toDataURL("image/jpeg",.72)}finally{URL.revokeObjectURL(t)}},_visionIssues:[],_providerCounts:{},beginScanSession(){this._visionIssues=[],this._providerCounts={},this._lastGoodModel=""},_noteProvider(e){const a=String(e||"").toLowerCase().includes("groq")?"groq":"gemini";this._providerCounts[a]=(this._providerCounts[a]||0)+1,a==="groq"&&this._noteIssue("vision","Gemini did not answer — Groq vision backup handled this request")},_noteIssue(e,a){const t=String(a||"").slice(0,220);if(!t)return;const i=this._visionIssues||(this._visionIssues=[]),o=i[i.length-1];if(o&&o.stage===e&&o.reason===t){o.count=(o.count||1)+1;return}i.push({stage:e,reason:t,count:1})},sessionReport(){return{providers:Object.entries(this._providerCounts||{}).map(([e,a])=>({name:e,count:a})),issues:(this._visionIssues||[]).slice(),lastGoodModel:this._lastGoodModel||""}},async _waitForQuotaWindow(e=7e4,a="vision"){const t=(this._geminiQuotaUntil||0)-Date.now();return t<=0?!0:t>e?(this._noteIssue(a,`quota cooldown ${Math.round(t/1e3)}s > ${Math.round(e/1e3)}s budget — completed without photo reading`),!1):(await new Promise(i=>setTimeout(i,t+300)),!0)},async preflight(){const e={gemini:null,groq:null,error:null};try{const a=await this._callEdge({action:"test_providers"},25e3);a&&a.providers?(e.gemini=a.providers.gemini||null,e.groq=a.providers.groq||null):e.error=a&&a.error||"Unexpected response from the AI service."}catch(a){e.error=String(a&&a.message||a)}return e},_geminiCallChain:Promise.resolve(),_lastGeminiCallAt:0,_paceGeminiCall(e){const a=this._geminiCallChain.then(async()=>{const t=(this._lastGeminiCallAt||0)+6e3-Date.now();return t>0&&await new Promise(i=>setTimeout(i,t)),this._lastGeminiCallAt=Date.now(),e()});return this._geminiCallChain=a.then(()=>{},()=>{}),a}};function Hn(e){return new Promise(a=>{const t=new FileReader;t.onload=()=>{const i=t.result;if(typeof i=="string"){const o=i.indexOf(",");a(o>=0?i.slice(o+1):i)}else a("")},t.onerror=()=>a(""),t.readAsDataURL(e)})}window.aiClient=U;window.showAiStatusModal=async function(){const e=await U.getStatus(),a=e.filter(t=>t.hasKey);W(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="activity" class="w-5 h-5 text-emerald-400"></i> AI Provider Status</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white">ðŸ”™ Back</button>
        </div>
        <div class="mb-4 p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300">
          ${a.length===0?"âš  No key configured. Go to AI Settings and add your Google Gemini API key.":"Google Gemini is configured and ready."}
        </div>
        <div class="space-y-2">
          ${e.map(t=>`
            <div class="flex items-center gap-3 p-2.5 glass-soft border ${t.hasKey?"border-blue-500/15":"border-gray-800"} rounded-xl opacity-${t.hasKey?"100":"40"}">
              <span class="w-2.5 h-2.5 rounded-full shrink-0 ${t.hasKey?"bg-emerald-400":"bg-gray-600"}"></span>
              <span class="text-xs font-bold text-white flex-1">${s(t.name)}</span>
              ${t.isActive?'<span class="text-[9px] font-black text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-full">ACTIVE</span>':""}
              ${t.hasKey?"":'<span class="text-[9px] text-gray-600">No key</span>'}
              ${t.hasKey?'<span class="text-[9px] text-emerald-400">Ready âœ“</span>':""}
            </div>`).join("")}
        </div>
        <div class="mt-4 p-3 bg-gray-900 rounded-xl">
          <p class="text-[10px] text-gray-400 font-bold uppercase mb-2">Test All Providers</p>
          <button onclick="testScanProviders()" id="btn-test-providers" class="btn-press w-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold py-2 rounded-xl transition flex items-center justify-center gap-1.5">
            <i data-lucide="stethoscope" class="w-3.5 h-3.5"></i> Test Gemini / Groq now
          </button>
          <div id="provider-test-output" class="hidden mt-3 space-y-1.5"></div>
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
    </div>`),window.lucide&&lucide.createIcons()};window.testAiCall=async function(){const e=document.getElementById("ai-test-input")?.value?.trim();if(!e)return;const a=document.getElementById("ai-test-output");a.classList.remove("hidden"),a.textContent="⏳ Asking Gemini…";try{const t=await U.prompt(e);a.textContent=`✓ [${t.provider} · ${t.model}]

${t.text}`}catch(t){a.textContent=`✖ ${t.message}`}};window.testScanProviders=async function(){const e=document.getElementById("provider-test-output"),a=document.getElementById("btn-test-providers");if(!e)return;e.classList.remove("hidden"),a.disabled=!0;const t=(o,n,r,l)=>`
    <div class="flex items-start gap-2 p-2 glass-soft border border-gray-800 rounded-lg">
      <span class="w-2 h-2 rounded-full shrink-0 mt-1 ${n}"></span>
      <div class="min-w-0">
        <p class="text-[11px] font-bold text-white">${o} ${s(r)}</p>
        <p class="text-[10px] ${n==="bg-emerald-400"?"text-emerald-300":n==="bg-red-500"?"text-red-400":"text-amber-300"} break-words">${s(l)}</p>
      </div>
    </div>`;e.innerHTML='<p class="text-[11px] text-gray-400">Testing providers…</p>';let i="";try{const o=await U.preflight(),n=o.gemini||{};i+=n.ok?t("✓","bg-emerald-400","Gemini (Product Scanner — primary)",`Working${n.model?" · "+n.model:""}`):t("✖","bg-red-500","Gemini (Product Scanner — primary)",n.error||o.error||"Not working");const r=o.groq||{};i+=r.ok?t("✓","bg-emerald-400","Groq (Product Scanner — backup)",`Working · ${r.model||"vision model found"}`):r.configured?t("✖","bg-red-500","Groq (Product Scanner — backup)",r.error||"Key saved but not usable"):t("—","bg-yellow-400","Groq (Product Scanner — backup)","Optional backup not configured (no key)")}catch(o){i+=t("✖","bg-red-500","Cloud providers (server test)",String(o&&o.message||o))}i+=t("✓","bg-purple-400","General AI Scanner (via edge function)","Uses Gemini primary + Groq backup through server — no local install needed."),e.innerHTML=i,a.disabled=!1,window.lucide&&lucide.createIcons()};function ua(e){if(!e)return null;let a=String(e).trim();const t=a.match(/```(?:json)?\s*([\s\S]*?)```/i);t&&(a=t[1].trim());const i=a.indexOf("{"),o=a.lastIndexOf("}");if(i===-1||o===-1||o<=i)return null;const n=a.slice(i,o+1);try{return JSON.parse(n)}catch{return null}}async function Gn(){const e=document.getElementById("content");try{const[{data:a},t]=await Promise.all([m.from("site_settings").select("*").limit(1).maybeSingle(),zn()]),i=a||{},o=new Set(Array.isArray(i.live_promo_product_ids)?i.live_promo_product_ids:[]),n=t.length?`
        <div class="mt-4">
          <label class="lbl">Which products appear in the Live Promotions (Featured Product Alerts)?</label>
          <p class="text-[11px] text-gray-400 mb-2">Leave all unchecked to let the store pick real products automatically.</p>
          <input id="promo-picker-search" type="search" class="input-field mb-2" placeholder="Search products to chooseâ€¦" oninput="filterPromoPicker(this.value)">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1.5 max-h-72 overflow-y-auto pr-1" id="promo-picker-list">
            ${t.map(r=>{const l=r.property_id||r.id,d=o.has(l)?"checked":"";return`<label class="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3 py-2 cursor-pointer hover:border-blue-400/40 transition" data-promo-search="${s((r.title||r.name||"")+" "+(r.category||""))}">
                <input type="checkbox" name="live_promo_product_ids" value="${s(l)}" ${d} class="accent-blue-500 w-4 h-4">
                <span class="min-w-0"><span class="block text-xs font-bold text-white truncate">${s(r.title||r.name||l)}</span><span class="block text-[10px] text-gray-400">${s(r.category||r.listing_type||"")} Â· ${s(l)}</span></span>
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
          ${[{section:"Site Identity",fields:[{key:"site_name",label:"Site Name",type:"text",placeholder:"Weverse Online Shop"},{key:"site_tagline",label:"Tagline / Slogan",type:"text",placeholder:"Premium International Commerce"},{key:"site_description",label:"Site Description (SEO)",type:"textarea",placeholder:"Your trusted global shopâ€¦"}]},{section:"Contact Information",fields:[{key:"contact_email",label:"Contact Email",type:"email",placeholder:"support@example.com"},{key:"contact_phone",label:"Contact Phone",type:"tel",placeholder:"+1 234 567 8900"},{key:"contact_address",label:"Business Address",type:"textarea",placeholder:"123 Main St, City, Country"},{key:"whatsapp_number",label:"WhatsApp Number",type:"tel",placeholder:"+1 234 567 8900"}]},{section:"Hero Section",fields:[{key:"hero_headline",label:"Hero Headline",type:"text",placeholder:"Weverse Online Shop"},{key:"hero_subtext",label:"Hero Subtext",type:"textarea",placeholder:"Shop premium productsâ€¦"},{key:"hero_cta_text",label:"CTA Button Text",type:"text",placeholder:"Shop Now"}]},{section:"Social Media",fields:[{key:"facebook_url",label:"Facebook URL",type:"url",placeholder:"https://facebook.com/â€¦"},{key:"instagram_url",label:"Instagram URL",type:"url",placeholder:"https://instagram.com/â€¦"},{key:"twitter_url",label:"Twitter / X URL",type:"url",placeholder:"https://twitter.com/â€¦"},{key:"youtube_url",label:"YouTube URL",type:"url",placeholder:"https://youtube.com/â€¦"},{key:"tiktok_url",label:"TikTok URL",type:"url",placeholder:"https://tiktok.com/â€¦"}]},{section:"Mobile App Promotion Banner",fields:[{key:"app_banner_enabled",label:"Show the App Promotion banner at the bottom of every page",type:"checkbox"},{key:"app_banner_headline",label:"Banner Headline",type:"text",placeholder:"Discover More with the Weverse Online Shop App"},{key:"app_play_store_url",label:"Google Play Store URL (real app listing â€” leave empty while unpublished)",type:"url",placeholder:"https://play.google.com/store/apps/details?id=â€¦"}]},{section:"Live Product Promotions (Featured Product Alerts)",fields:[{key:"live_promo_enabled",label:"Show Live Product Promotions (small alerts at the bottom corner)",type:"checkbox"},{key:"live_promo_first_delay_seconds",label:"First alert after (seconds)",type:"number",placeholder:"12"},{key:"live_promo_interval_seconds",label:"Delay between alerts (seconds)",type:"number",placeholder:"60"}],extra:n}].map(r=>`
            <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
              <h3 class="text-sm font-black text-white mb-4">${r.section}</h3>
              <div class="form-grid form-grid-2">
                ${r.fields.map(l=>`
                  <div ${l.type==="textarea"||l.type==="checkbox"?'class="sm:col-span-2"':""}>
                    ${l.type==="checkbox"?`<label class="flex items-center gap-2.5 cursor-pointer"><input type="checkbox" name="${l.key}" class="accent-blue-500 w-4 h-4" ${i[l.key]?"checked":""}><span class="text-sm text-gray-300">${l.label}</span></label>`:l.type==="textarea"?`<label class="lbl">${l.label}</label><textarea class="input-field" name="${l.key}" placeholder="${s(l.placeholder)}" rows="2">${s(i[l.key]||"")}</textarea>`:`<label class="lbl">${l.label}</label><input type="${l.type}" class="input-field" name="${l.key}" value="${s(i[l.key]||"")}" placeholder="${s(l.placeholder||"")}">`}
                  </div>`).join("")}
              </div>
              ${r.extra||""}
            </div>`).join("")}
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Content Settings</button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}async function zn(){const e=new Set,a=[],t=i=>{for(const o of i||[]){const n=o&&(o.property_id||o.id);n&&!e.has(n)&&(e.add(n),a.push(o))}};try{const{data:i}=await m.from("showroom_listings").select("property_id,title,name,category,listing_type,images,is_active").order("created_at",{ascending:!1}).limit(500);t(i)}catch{}return t(tt()),t(ie),t(ha),t(fa),t(va),t(xa),a.slice(0,250)}window.filterPromoPicker=function(e){const a=document.getElementById("promo-picker-list");if(!a)return;const t=(e||"").trim().toLowerCase();a.querySelectorAll("[data-promo-search]").forEach(i=>{i.style.display=!t||i.dataset.promoSearch.toLowerCase().includes(t)?"":"none"})};window.selectAllPromoPicks=function(){document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(e=>{e.checked=!0})};window.clearAllPromoPicks=function(){document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(e=>{e.checked=!1})};window.saveContent=async function(e){e.preventDefault();const a=new FormData(e.target),t=Object.fromEntries(a.entries()),i=Array.from(new Set(a.getAll("live_promo_product_ids").map(n=>String(n).trim()).filter(Boolean)));i.length?t.live_promo_product_ids=i:t.live_promo_product_ids=[];const{error:o}=await m.from("site_settings").upsert({id:1,...t});if(o){p(o.message,"error");return}p("Content settings saved!")};const Xt=[{key:"hero_videos",custom:!0,title:"HERO VIDEO BANNER (ROTATING)",desc:"Upload your own promotional videos (MP4 & WebM) to the top homepage banner. Each saved slide becomes its own full-width hero with its title, subtitle and CTA over a soft dark overlay so the text always stays readable. Add one video, one poster, or many rotating slides. If no video is added here, the single promo banner and the built-in brand banner below are shown instead as fallbacks.",accent:"from-indigo-400 to-violet-500"},{key:"banner",title:"ANDROID APP BANNER",desc:"The mobile-app promotion banner shown at the bottom of every page. Editing these words never changes the banner design, phone image, logo or buttons.",accent:"from-cyan-400 to-blue-500",fields:[{key:"app_banner_title",label:"App Banner Title",type:"text"},{key:"app_banner_description",label:"App Banner Description",type:"textarea"},{key:"app_banner_button_text",label:"App Banner Button Text",type:"text"},{key:"app_banner_secondary_text",label:"App Banner Secondary Text",type:"text"}]},{key:"bottom",title:"BOTTOM / END-OF-PAGE SECTION",desc:"The final professional closing area of the website â€” thank-you message, customer support, footer links and copyright. The polished design stays; only these words change.",accent:"from-emerald-400 to-cyan-500",fields:[{key:"bottom_heading",label:"Bottom Section Heading",type:"text"},{key:"bottom_main_message",label:"Main Bottom Message",type:"textarea"},{key:"bottom_closing_message",label:"Closing Message",type:"text"},{key:"bottom_support_heading",label:"Customer Support Heading",type:"text"},{key:"bottom_support_description",label:"Customer Support Description",type:"textarea"},{key:"bottom_support_button_text",label:"Support Button Text",type:"text"},{key:"bottom_footer_text",label:"Footer Section Text",type:"text"},{key:"bottom_footer_closing",label:"Footer Closing Message",type:"text"},{key:"bottom_copyright",label:"Copyright Text (empty = automatic â€œÂ© year Brandâ€ line)",type:"text"}]},{key:"promo_banner",title:"HOME PAGE PROMO BANNER",desc:"The main rotating banner at the top of the homepage. Upload your own image or video and write your own words â€” the clean design stays. If empty, the built-in image banners rotate.",accent:"from-fuchsia-400 to-purple-500",fields:[{key:"promo_banner_enabled",label:"Show my promo banner",type:"checkbox"},{key:"promo_banner_image",label:"Banner Image",type:"media",kind:"image"},{key:"promo_banner_video",label:"Banner Video (plays if no image)",type:"media",kind:"video"},{key:"promo_banner_title",label:"Banner Title",type:"text"},{key:"promo_banner_subtitle",label:"Banner Subtitle",type:"text"},{key:"promo_banner_button_text",label:"Button Text",type:"text"},{key:"promo_banner_button_link",label:"Button Link",type:"text"}]},{key:"video_ad",title:"HOME PAGE VIDEO ADVERTISEMENT",desc:"A separate video card below the promo banner. Upload your own video (and optional poster image) and write your own words. It plays muted with play/pause and a progress bar.",accent:"from-rose-400 to-orange-500",fields:[{key:"video_ad_enabled",label:"Show the video advertisement",type:"checkbox"},{key:"video_ad_video_url",label:"Video File",type:"media",kind:"video"},{key:"video_ad_poster_url",label:"Poster Image (shown before play)",type:"media",kind:"image"},{key:"video_ad_title",label:"Video Title",type:"text"},{key:"video_ad_subtitle",label:"Video Subtitle",type:"text"},{key:"video_ad_button_text",label:"Button Text",type:"text"},{key:"video_ad_button_link",label:"Button Link",type:"text"}]}];function ii(e,a){const t=e.kind==="image",i=a||"",o=t?"image":"video",n="text-fuchsia-300",r=!!i;return`<div id="slot-${e.key}">
      ${r?`<div class="relative group w-full h-28 rounded-xl overflow-hidden bg-gray-900 border border-fuchsia-500/15 flex items-center justify-center">
             ${t?`<img src="${s(i)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`:`<video src="${s(i)}" class="w-full h-full object-cover" muted playsinline preload="metadata"></video>`}
             <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
               <button type="button" onclick="triggerContentMediaUpload('${e.key}')" class="text-xs font-bold text-white bg-fuchsia-600 px-3 py-1.5 rounded-lg">Replace</button>
               <button type="button" onclick="clearContentMedia('${e.key}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
             </div>
           </div>`:`<button type="button" onclick="triggerContentMediaUpload('${e.key}')" class="w-full h-28 rounded-xl border-2 border-dashed border-fuchsia-500/25 hover:border-fuchsia-500/50 flex flex-col items-center justify-center gap-1.5 transition">
             <i data-lucide="${o}" class="w-6 h-6 ${n}"></i>
             <p class="text-[10px] text-gray-500">Upload ${t?"Image":"Video"}</p>
           </button>`}
      <input type="file" id="file-${e.key}" class="hidden" accept="${t?"image/*":"video/*"}" onchange="handleContentMediaUpload(event,'${e.key}')">
      <input type="hidden" name="${e.key}" id="val-${e.key}" value="${s(i)}">
      <div class="flex gap-2 mt-1.5">
        <input class="input-field text-xs flex-1" id="url-${e.key}" value="${s(i)}" placeholder="Or paste ${t?"image":"video"} URL" oninput="document.getElementById('val-${e.key}').value=this.value">
      </div>
    </div>`}window.triggerContentMediaUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearContentMedia=function(e){const a=document.getElementById("val-"+e),t=document.getElementById("url-"+e);a&&(a.value=""),t&&(t.value=""),p("Cleared. Save to apply.","info"),oi()};window.handleContentMediaUpload=async function(e,a){const t=e.target.files?.[0];if(t){t.type.startsWith("video/"),p(`Uploading ${t.name}â€¦`,"info");try{const{data:{session:i}}=await m.auth.getSession();if(!i){p("Sign in to upload media","error");return}const o=(t.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),n=`content/${a}-${Date.now()}.${o}`,{error:r}=await m.storage.from("product-images").upload(n,t,{contentType:t.type,upsert:!1});if(r){p("Upload failed: "+r.message,"error");return}const{data:l}=m.storage.from("product-images").getPublicUrl(n),d=l.publicUrl,c=document.getElementById("val-"+a),u=document.getElementById("url-"+a);c&&(c.value=d),u&&(u.value=d);const g=document.getElementById("slot-"+a);if(g){const y=Xt.flatMap(b=>b.fields||[]).find(b=>b.key===a);y&&(g.outerHTML=ii(y,d))}p("âœ“ Uploaded â€” save to apply","success")}catch{p("Upload failed","error")}}};const Vn=["SHOP NOW","EXPLORE DEALS","VIEW PRODUCTS","DISCOVER MORE","SEE OFFERS","SHOP THE LOOK"];window._heroVideoDraft=[];function oe(){return Array.isArray(window._heroVideoDraft)||(window._heroVideoDraft=[]),window._heroVideoDraft}function He(){const e=document.getElementById("hs-json");e&&(e.value=JSON.stringify(oe()))}function $e(){He();const e=document.getElementById("hero-videos-manager");e&&(e.innerHTML=ni(oe()),window.lucide&&lucide.createIcons())}function Wn(e,a){const t=String(e&&e.video||"").trim(),i=String(e&&e.poster||"").trim(),o=t&&pa(t)||i&&pa(i)?'<p class="mt-2 text-[11px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-2">âš  Temporary preview only â€” the upload FAILED, this will NOT be saved. Re-upload a smaller MP4/WebM.</p>':"";return`
    <div>
      <div class="w-full overflow-hidden rounded-xl bg-gray-950 border border-indigo-500/20 flex items-center justify-center">${t?`<video src="${s(t)}" ${i?`poster="${s(i)}"`:""} class="w-full h-40 object-cover" muted controls preload="metadata"></video>`:i?`<img src="${s(i)}" class="w-full h-40 object-cover" onerror="this.style.display='none'">`:'<div class="w-full h-40 flex items-center justify-center text-[11px] text-gray-500">No media yet â€” upload a video (MP4/WebM) or a poster below</div>'}</div>
      ${o}
      <div class="flex flex-wrap gap-1.5 mt-2 justify-end">
        <button type="button" onclick="heroVideoUpload(${a},'video')" class="px-3 py-1.5 rounded-lg ${t?"bg-white/10 text-gray-200 border border-white/10":"bg-indigo-600 text-white"} text-[10px] font-bold transition">${t?"Replace Video":"Upload Video"}</button>
        ${t?`<button type="button" onclick="heroVideoRemoveMedia(${a},'video')" class="px-3 py-1.5 rounded-lg bg-red-600/80 text-white text-[10px] font-bold">Remove Video</button>`:""}
        <button type="button" onclick="heroVideoUpload(${a},'poster')" class="px-3 py-1.5 rounded-lg bg-white/10 text-gray-200 text-[10px] font-bold border border-white/10 transition">${i?"Replace Poster":"Add Poster"}</button>
        ${i?`<button type="button" onclick="heroVideoRemoveMedia(${a},'poster')" class="px-3 py-1.5 rounded-lg bg-red-600/80 text-white text-[10px] font-bold">Remove Poster</button>`:""}
      </div>
    </div>`}function ni(e){return(e||[]).map((a,t)=>{const i=String(a&&a.buttonText||"SHOP NOW"),o=Vn.map(n=>`<button type="button" onclick="heroVideoPreset(${t},'${n}')" class="px-2.5 py-1 rounded-full text-[9px] font-black ${i===n?"bg-indigo-600 text-white":"bg-white/5 text-gray-400"} border ${i===n?"border-indigo-500":"border-white/10"} transition">${n}</button>`).join("");return`
    <div class="rounded-xl border border-indigo-500/25 bg-violet-500/8 p-4 space-y-3">
      <div class="flex items-center justify-between gap-2 flex-wrap">
        <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="video" class="w-4 h-4 text-indigo-400"></i> Slide ${t+1}</p>
        <div class="flex items-center gap-1.5">
          <button type="button" onclick="heroVideoToggle(${t})" class="text-[10px] font-bold px-2.5 py-1.5 rounded-lg ${a&&a.enabled===!1?"bg-gray-700 text-gray-400":"bg-emerald-600 text-white"} transition">${a&&a.enabled===!1?"Disabled":"Enabled"}</button>
          <button type="button" onclick="heroVideoMove(${t},-1)" class="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10" title="Move up"><i data-lucide="arrow-up" class="w-3.5 h-3.5 text-gray-300"></i></button>
          <button type="button" onclick="heroVideoMove(${t},1)" class="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10" title="Move down"><i data-lucide="arrow-down" class="w-3.5 h-3.5 text-gray-300"></i></button>
          <button type="button" onclick="heroVideoDelete(${t})" class="px-2 py-1 rounded-lg bg-red-600/80 hover:bg-red-600" title="Delete"><i data-lucide="trash-2" class="w-3.5 h-3.5 text-white"></i></button>
        </div>
      </div>
      ${Wn(a,t)}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label class="lbl">Title</label>
          <input type="text" value="${s(a.title||"")}" class="input-field w-full" placeholder="e.g. Season Sale is Live" oninput="heroVideoField(${t},'title',this.value)">
        </div>
        <div>
          <label class="lbl">Subtitle</label>
          <input type="text" value="${s(a.subtitle||"")}" class="input-field w-full" placeholder="e.g. Up to 50% off top brands" oninput="heroVideoField(${t},'subtitle',this.value)">
        </div>
      </div>
      <div>
        <label class="lbl">Button</label>
        <div class="flex flex-wrap gap-1.5">${o}</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          <input type="text" value="${s(i)}" class="input-field w-full" placeholder="SHOP NOW" oninput="heroVideoField(${t},'buttonText',this.value)">
          <input type="text" value="${s(a.buttonLink||"/#showroom-directory")}" class="input-field w-full" placeholder="/#showroom-directory" oninput="heroVideoField(${t},'buttonLink',this.value)">
        </div>
      </div>
    </div>`}).join("")}window.heroVideoUpload=function(e,a){const t=document.createElement("input");t.type="file",t.accept=a==="video"?"video/mp4,video/webm,.mp4,.webm":"image/*",t.onchange=()=>{const i=t.files&&t.files[0];i&&Kn(e,a,i)},t.click()};window.heroVideoField=function(e,a,t){const i=oe();i[e]&&(i[e][a]=t,He())};window.heroVideoPreset=function(e,a){const t=oe();t[e]&&(t[e].buttonText=a,$e())};window.heroVideoToggle=function(e){const a=oe();a[e]&&(a[e].enabled=a[e].enabled===!1,$e())};window.heroVideoMove=function(e,a){const t=oe(),i=e+a;i<0||i>=t.length||([t[e],t[i]]=[t[i],t[e]],$e())};window.heroVideoDelete=function(e){const a=oe();e<0||e>=a.length||confirm("Delete this hero video slide?")&&(a.splice(e,1),$e())};window.heroVideoRemoveMedia=function(e,a){const t=oe();t[e]&&(a==="video"?t[e].video="":a==="poster"&&(t[e].poster=""),$e())};window.addHeroVideoSlide=function(){oe().push({id:"hv"+Date.now()+Math.floor(Math.random()*999),enabled:!0,video:"",poster:"",title:"",subtitle:"",buttonText:"SHOP NOW",buttonLink:"/#showroom-directory"}),$e(),p("New slide added â€” upload a video and press Save to show it.","info")};async function Yn(e,a){try{const{data:{session:t}}=await m.auth.getSession();if(!t)return{url:URL.createObjectURL(e),persisted:!1,error:"You are signed out â€” sign in again, then re-upload."};const i=(e.name.split(".").pop()||(a==="video"?"mp4":"jpg")).toLowerCase().replace(/[^a-z0-9]/g,""),o=`hero/${a}/${Date.now()}-${Math.random().toString(36).slice(2)}.${i}`,{error:n}=await m.storage.from("product-images").upload(o,e,{contentType:e.type,cacheControl:"3600",upsert:!0});if(n)return{url:URL.createObjectURL(e),persisted:!1,error:n.message};const{data:r}=m.storage.from("product-images").getPublicUrl(o),l=r&&r.publicUrl;return l?{url:l,persisted:!0,error:null}:{url:URL.createObjectURL(e),persisted:!1,error:"Storage did not return a public URL."}}catch(t){return{url:URL.createObjectURL(e),persisted:!1,error:String(t&&t.message||t)}}}function pa(e){return/^blob:/i.test(String(e||""))}async function Kn(e,a,t){const i=oe();if(!t||!i[e])return;if(a==="video"){if(!/video\/(mp4|webm)|\.(mp4|webm)$/i.test(t.type+" "+t.name)){p("Please choose an MP4 or WebM video file.","error");return}}else if(!t.type.startsWith("image/")){p("Please choose an image for the poster.","error");return}p("â³ Uploading "+(a==="video"?"video":"poster")+"â€¦","info");const o=await Yn(t,a);a==="video"?i[e].video=o.url:i[e].poster=o.url,$e(),o.persisted?p("âœ“ "+(a==="video"?"Video":"Poster")+" uploaded â€” press Save & Publish Hero Banner to go live.","success"):p("âš  UPLOAD FAILED: "+(o.error||"unknown reason")+" â€” this preview is TEMPORARY and will NOT be saved. Try a smaller MP4/WebM (keep videos under ~50 MB), then re-upload.","error")}function Jn(e){const a=Array.isArray(e)?e.map(t=>({...t})):[];return window._heroVideoDraft=a,He(),`
    <div class="space-y-3">
      <div id="hero-videos-manager" class="space-y-3">${a.length?"":`
    <div class="rounded-xl border-2 border-dashed border-indigo-500/30 bg-white/5 p-6 text-center">
      <i data-lucide="video" class="w-8 h-8 text-indigo-400 mx-auto"></i>
      <p class="text-xs text-gray-400 mt-2 font-bold">No hero videos yet</p>
      <p class="text-[11px] text-gray-500 mt-1">Add your first promotional video slide to turn the homepage banner into an auto-playing video hero. Until then, the built-in brand banner and any single promo banner below are used.</p>
    </div>`}${ni(a)}</div>
      <button type="button" onclick="heroVideoSavePublish(this)" class="btn-press w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-black rounded-xl transition flex items-center justify-center gap-2">
        <i data-lucide="rocket" class="w-4 h-4"></i> Save &amp; Publish Hero Banner
      </button>
      <p class="text-[10px] text-gray-500 text-center">One video is enough â€” no minimum. Your banner goes live as soon as you press this button.</p>
      <button type="button" onclick="addHeroVideoSlide()" class="btn-press w-full px-4 py-3 border-2 border-dashed border-indigo-500/40 text-indigo-300 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2">
        <i data-lucide="plus" class="w-4 h-4"></i> Add Another Hero Video Slide
      </button>
    </div>`}window.heroVideoSavePublish=async function(e){const a=d=>/^blob:/i.test(String(d||"")),t=oe().filter(d=>d&&(d.video||d.poster||d.title||d.subtitle));if(!t.length){p("Add at least one video slide before publishing.","error");return}t.forEach(d=>{d.poster&&a(d.poster)&&(d.poster="")});const i=t.filter(d=>d.video&&a(d.video)),o=t.filter(d=>d.video&&!a(d.video));if(i.length&&!o.length){p(`Upload FAILED for your video${i.length>1?"s":""} â€” temporary previews cannot go live. Re-upload a smaller MP4/WebM (under ~50 MB), then press this button again.`,"error");return}if(i.length&&!confirm(`${i.length} slide${i.length>1?"s":""} had a FAILED upload and will be LEFT OUT. Publish the remaining ${o.length} slide${o.length===1?"":"s"} now?`))return;const n=o,r=n.filter(d=>d.video);if(!n.length){p("Please upload a video in at least one slide first.","error");return}const l=e?e.innerHTML:"";e&&(e.disabled=!0,e.innerHTML="â³ Publishingâ€¦");try{He();const{data:d}=await m.from("site_settings").select("id").limit(1).maybeSingle();let c;if(d?.id?{error:c}=await m.from("site_settings").update({hero_video_slides:n}).eq("id",d.id):{error:c}=await m.from("site_settings").insert({id:1,hero_video_slides:n}),c)throw new Error(c.message);ba(),p("âœ“ Hero video banner published! "+r.length+(r.length===1?" video is":" videos are")+" now live on your homepage.","success")}catch(d){p(d.message||"Could not publish the hero banner. Please try again.","error")}finally{e&&(e.disabled=!1,e.innerHTML=l,window.lucide&&lucide.createIcons())}};async function oi(){const e=document.getElementById("content");try{const{data:a}=await m.from("site_settings").select("*").limit(1).maybeSingle(),t={...pi,...a||{}};e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div>
          <h2 class="text-xl font-black text-white">Content Settings</h2>
          <p class="text-xs text-gray-400 mt-1">Edit the wording of the two shared sections below. Save once and every page updates automatically â€” no code needed. Your products, prices, reviews, orders and design are never touched.</p>
        </div>
        <form id="content-settings-form" onsubmit="saveContentSettings(event)" class="space-y-5">
          ${Xt.map(i=>`
            <div class="glass-soft border border-white/10 rounded-2xl p-5">
              <div class="flex items-center gap-2.5 mb-1">
                <span class="w-2 h-2 rounded-full bg-gradient-to-r ${i.accent}"></span>
                <h3 class="text-sm font-black text-white tracking-wide">${i.title}</h3>
              </div>
              <p class="text-[11px] text-gray-400 mb-4">${i.desc}</p>
              ${i.key==="hero_videos"?Jn(t.hero_video_slides||[]):`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${i.fields.map(o=>`
                  <div class="${o.type==="textarea"||o.type==="media"?"sm:col-span-2":""}">
                    ${o.type==="checkbox"?`<label class="flex items-center gap-2.5 cursor-pointer select-none py-2">
                           <input id="cs-${o.key}" type="checkbox" name="${o.key}" ${t[o.key]?"checked":""} class="w-4 h-4 accent-blue-500 rounded">
                           <span class="text-sm font-bold text-gray-200">${o.label}</span>
                         </label>`:`<label class="lbl" for="cs-${o.key}">${o.label}</label>`}
                    ${o.type==="textarea"?`<textarea id="cs-${o.key}" name="${o.key}" rows="3" class="input-field w-full" placeholder="Enter the current wordingâ€¦">${s(t[o.key]||"")}</textarea>`:o.type==="media"?ii(o,t[o.key]||""):o.type==="checkbox"?"":`<input id="cs-${o.key}" type="text" name="${o.key}" value="${s(t[o.key]||"")}" class="input-field w-full" placeholder="Enter the current wordingâ€¦">`}
                    ${o.type==="text"||o.type==="textarea"?`<p class="text-[10px] text-gray-500 mt-1">Current: ${s((t[o.key]||"").slice(0,80))}${(t[o.key]||"").length>80?"â€¦":""}</p>`:""}
                  </div>`).join("")}
              </div>`}
            </div>`).join("")}
          <input type="hidden" id="hs-json" name="hero_video_slides" value="">
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Content</button>
        </form>
      </div>`,He(),window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}window.saveContentSettings=async function(e){e.preventDefault();const a=new FormData(e.target),t={};for(const[o,n]of a.entries())t[o]=n;for(const o of Xt)if(o.fields)for(const n of o.fields)n.type==="checkbox"&&!(n.key in t)?t[n.key]=!1:n.type==="checkbox"&&(t[n.key]=!0);let i=[];try{const o=a.get("hero_video_slides");if(String(o||"").trim()){const n=JSON.parse(o);Array.isArray(n)&&(i=n)}}catch{i=[]}t.hero_video_slides=i;try{const{data:o}=await m.from("site_settings").select("id").limit(1).maybeSingle();let n;if(o?.id?{error:n}=await m.from("site_settings").update(t).eq("id",o.id):{error:n}=await m.from("site_settings").insert({id:1,...t}),n)throw new Error(n.message);ba(),p("Content updated â€” the banners now use your new words and uploads.","success")}catch(o){p(o.message||"Could not save content. Please try again.","error")}};async function Qn(){const e=document.getElementById("content");try{const[a,t,i]=await Promise.all([m.from("payment_receipts").select("amount,currency,status,created_at").order("created_at",{ascending:!1}).limit(500),m.from("showroom_listings").select("id,listing_type,category,is_active",{count:"exact"}),m.from("profiles").select("user_id,created_at",{count:"exact"})]),o=a.data||[],n=o.filter(c=>["approved","payment_approved","delivered"].includes(c.status)).reduce((c,u)=>c+(parseFloat(u.amount)||0),0),r=o.length>0?(o.filter(c=>c.status!=="cancelled").length/o.length*100).toFixed(1):0,l={};(t.data||[]).forEach(c=>{l[c.category]=(l[c.category]||0)+1});const d=Object.entries(l).sort((c,u)=>u[1]-c[1]).slice(0,8);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Analytics</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          ${K("Total Revenue",`$${n.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald")}
          ${K("Total Orders",o.length,"shopping-bag","blue")}
          ${K("Customers",i.count||0,"users","violet")}
          ${K("Conversion Rate",r+"%","trending-up","amber")}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="bar-chart-3" class="w-4 h-4 text-blue-400"></i> Revenue (Last 6 Months)</h3>
            <canvas id="analytics-chart" height="220"></canvas>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="pie-chart" class="w-4 h-4 text-violet-400"></i> Top Categories by Listings</h3>
            ${d.length===0?'<p class="text-xs text-gray-500 text-center py-8">No data</p>':d.map(([c,u])=>`
              <div class="flex items-center gap-3 py-1.5">
                <span class="text-xs text-gray-300 flex-1 truncate">${s(c)}</span>
                <div class="w-24 h-2 bg-blue-500/10 rounded-full overflow-hidden"><div class="h-full bg-blue-500 rounded-full" style="width:${Math.round(u/d[0][1]*100)}%"></div></div>
                <span class="text-xs font-bold text-white w-6 text-right">${u}</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),Ua(o)}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}async function Xn(){const e=document.getElementById("content"),{data:a}=await m.from("site_settings").select("*").limit(1).maybeSingle(),t=a||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">SEO Manager</h2>
      <form id="seo-form" onsubmit="saveSeo(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Homepage SEO</h3>
          <div><label class="lbl">Meta Title</label><input class="input-field" name="meta_title" value="${s(t.meta_title||"")}" placeholder="Weverse Online Shop | Premium International Commerce"></div>
          <div><label class="lbl">Meta Description</label><textarea class="input-field" name="meta_description" rows="2" placeholder="Your trusted global shopâ€¦">${s(t.meta_description||"")}</textarea></div>
          <div><label class="lbl">Meta Keywords (comma separated)</label><input class="input-field" name="meta_keywords" value="${s(t.meta_keywords||"")}" placeholder="global marketplace, online shopping, â€¦"></div>
          <div><label class="lbl">Canonical URL</label><input class="input-field" name="canonical_url" value="${s(t.canonical_url||"")}" placeholder="https://yoursite.com"></div>
          <div><label class="lbl">OG Image URL (Social share image)</label><input class="input-field" name="og_image" value="${s(t.og_image||"")}" placeholder="https://â€¦/og-image.jpg"></div>
          <div><label class="lbl">Google Analytics ID</label><input class="input-field" name="ga_id" value="${s(t.ga_id||"")}" placeholder="G-XXXXXXXXXX"></div>
          <div><label class="lbl">Google Search Console Verification</label><input class="input-field" name="gsc_verify" value="${s(t.gsc_verify||"")}" placeholder="Verification meta tag content"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save SEO Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSeo=async function(e){e.preventDefault();const a=Object.fromEntries(new FormData(e.target).entries());await m.from("site_settings").upsert({id:1,...a}),p("SEO settings saved!")};async function Zn(){const e=document.getElementById("content"),{data:a}=await m.from("site_settings").select("*").limit(1).maybeSingle(),t=a||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">Email Settings</h2>
      <div class="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl text-xs text-blue-300">Email is handled by Supabase Auth's built-in SMTP. Configure SMTP in your Supabase project â†’ Auth â†’ SMTP Settings.</div>
      <form id="email-form" onsubmit="saveEmailSettings(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Email Notifications</h3>
          ${[{key:"email_order_placed",label:"Order Confirmation Email",desc:"Send confirmation when order is placed"},{key:"email_order_shipped",label:"Shipping Notification",desc:"Notify customer when order is shipped"},{key:"email_order_delivered",label:"Delivery Confirmation",desc:"Confirm when order is delivered"},{key:"email_review_request",label:"Review Request",desc:"Ask for review after delivery"}].map(i=>`
            <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
              <div><p class="text-xs font-bold text-white">${i.label}</p><p class="text-[11px] text-gray-500">${i.desc}</p></div>
              <label class="toggle-switch"><input type="checkbox" name="${i.key}" ${t[i.key]!==!1?"checked":""}><span class="toggle-slider"></span></label>
            </div>`).join("")}
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Sender Information</h3>
          <div><label class="lbl">Sender Name</label><input class="input-field" name="email_from_name" value="${s(t.email_from_name||"")}" placeholder="Weverse Online Shop"></div>
          <div><label class="lbl">Reply-To Email</label><input type="email" class="input-field" name="email_reply_to" value="${s(t.email_reply_to||"")}" placeholder="support@example.com"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Email Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveEmailSettings=async function(e){e.preventDefault();const a=new FormData(e.target),t={};for(const[i,o]of a.entries())t[i]=o;["email_order_placed","email_order_shipped","email_order_delivered","email_review_request"].forEach(i=>{i in t?t[i]=!0:t[i]=!1}),await m.from("site_settings").upsert({id:1,...t}),p("Email settings saved!")};async function pt(){const e=document.getElementById("content");e&&(e.innerHTML=Ie());try{const[a,t,i]=await Promise.all([m.from("admin_security_logs").select("*").order("created_at",{ascending:!1}).limit(50),m.from("admin_2fa").select("enabled,backup_codes,created_at").eq("user_id",B.user?.id).maybeSingle(),m.auth.mfa.listFactors()]),o=a.data||[],n=t.data||{},r=(i.data?.totp||[])[0],l=!!r&&r.status==="verified",d=(n.backup_codes||[]).filter(c=>!c.used).length;e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Security</h2>

        <!-- 2FA STATUS BANNER -->
        <div class="p-4 rounded-xl border flex items-center gap-4 ${l?"bg-emerald-500/5 border-emerald-500/20":"bg-amber-500/5 border-amber-500/20"}">
          <div class="w-10 h-10 ${l?"bg-emerald-500/10":"bg-amber-500/10"} rounded-xl flex items-center justify-center shrink-0">
            <i data-lucide="${l?"shield-check":"shield-alert"}" class="w-5 h-5 ${l?"text-emerald-400":"text-amber-400"}"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm font-black ${l?"text-emerald-300":"text-amber-300"}">Two-Factor Authentication is ${l?"ENABLED âœ“":"NOT ENABLED"}</p>
            <p class="text-xs text-gray-400 mt-0.5">${l?`Backup codes available: ${d} Â· Enrolled: ${ne(n.created_at)}`:"Enable 2FA to protect your admin account with an authenticator app."}</p>
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
            ${(n.backup_codes||[]).length===0?'<p class="text-xs text-gray-500 col-span-2 text-center py-4">No backup codes generated. Click Regenerate to create them.</p>':(n.backup_codes||[]).map(c=>`<code class="font-mono text-xs px-3 py-2 ${c.used?"bg-gray-900 text-gray-600 line-through":"bg-blue-500/5 text-blue-300 border border-blue-500/15"} rounded-lg">${typeof c=="object"?c.code:c}</code>`).join("")}
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
                <p class="text-[11px] text-gray-500">${s(navigator.userAgent.slice(0,60))}â€¦</p>
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
                ${o.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No security events yet</td></tr>':o.map(c=>{const u=["login_success","login_2fa_success"].includes(c.event_type),g=["login_failed","login_denied","login_backup_code_used"].includes(c.event_type),y=u?"text-emerald-400":g?"text-red-400":"text-gray-300",b={login_success:"Login âœ“",login_failed:"Failed Login âœ—",login_denied:"Access Denied âœ—",login_2fa_success:"2FA Verified âœ“",login_backup_code_used:"Backup Code Used",logout:"Logged Out",logout_all_devices:"Logout All Devices"}[c.event_type]||c.event_type;return`<tr>
                      <td><span class="text-xs font-bold ${y}">${s(b)}</span></td>
                      <td><span class="text-xs font-mono text-gray-300">${s(c.ip_address||"â€”")}</span></td>
                      <td class="hidden sm:table-cell"><span class="text-xs text-gray-500 max-w-[160px] block truncate">${s((c.user_agent||"â€”").slice(0,50))}</span></td>
                      <td><span class="text-xs text-gray-500">${fe(c.created_at)}</span></td>
                    </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,document.getElementById("new-pw")?.addEventListener("input",c=>{const u=c.target.value,g=[{label:"8+ characters",ok:u.length>=8},{label:"Uppercase letter",ok:/[A-Z]/.test(u)},{label:"Number",ok:/[0-9]/.test(u)},{label:"Special character",ok:/[^a-zA-Z0-9]/.test(u)}];document.getElementById("pw-strength").innerHTML=g.map(y=>`<div class="flex items-center gap-1.5 text-[10px] ${y.ok?"text-emerald-400":"text-gray-600"}">
          <i data-lucide="${y.ok?"check-circle":"circle"}" class="w-3 h-3"></i>${y.label}</div>`).join(""),window.lucide&&lucide.createIcons()}),window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}window.changePassword=async function(e){e.preventDefault();const a=document.getElementById("current-pw").value,t=document.getElementById("new-pw").value,i=document.getElementById("confirm-pw").value;if(t!==i){p("Passwords do not match","error");return}if(t.length<8){p("Password must be at least 8 characters","error");return}const{error:o}=await m.auth.signInWithPassword({email:B.user.email,password:a});if(o){p("Current password is incorrect","error");return}const{error:n}=await m.auth.updateUser({password:t});if(n){p(n.message,"error");return}await le(B.user.id,"password_changed"),p("Password updated successfully!"),e.target.reset(),document.getElementById("pw-strength").innerHTML=""};window.setup2FAFlow=async function(){W(`
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
    </div>`),window.lucide&&lucide.createIcons();try{const{data:e,error:a}=await m.auth.mfa.enroll({factorType:"totp",friendlyName:"Weverse Admin"});if(a)throw a;const t=e.totp.qr_code,i=e.totp.secret,o=e.id;document.getElementById("2fa-setup-content").innerHTML=`
      <div class="space-y-5">
        <div class="p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300">
          <strong>Step 1:</strong> Open your authenticator app (Google Authenticator, Authy, or similar).<br>
          <strong>Step 2:</strong> Scan the QR code below or enter the secret manually.<br>
          <strong>Step 3:</strong> Enter the 6-digit code shown in your app.
        </div>
        <div class="flex flex-col items-center gap-4">
          <div class="bg-white p-3 rounded-xl">
            <img src="${s(t)}" alt="QR Code" class="w-44 h-44" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-500 w-44 text-center&quot;>QR code unavailable. Use the secret below.</p>'">
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
      </div>`,window.lucide&&lucide.createIcons(),setTimeout(()=>document.getElementById("setup-totp-code")?.focus(),100),document.getElementById("setup-totp-code")?.addEventListener("input",n=>{n.target.value=n.target.value.replace(/\D/g,"").slice(0,6)})}catch(e){document.getElementById("2fa-setup-content").innerHTML=`<div class="text-red-400 text-sm text-center py-4">${s(e.message)}</div>`}};window.confirm2FAEnrollment=async function(e){const a=document.getElementById("setup-totp-code")?.value?.trim(),t=document.getElementById("setup-2fa-error");if(!a||a.length!==6){t&&(t.textContent="Enter the 6-digit code.",t.classList.remove("hidden"));return}try{const{data:i,error:o}=await m.auth.mfa.challenge({factorId:e});if(o)throw o;const{error:n}=await m.auth.mfa.verify({factorId:e,challengeId:i.id,code:a});if(n)throw n;const r=ri(10);await m.from("admin_2fa").upsert({user_id:B.user.id,enabled:!0,backup_codes:r}),await le(B.user.id,"2fa_enrolled"),ce(),si(r.map(l=>l.code)),pt()}catch(i){const o=document.getElementById("setup-2fa-error");o&&(o.textContent=i.message?.includes("Invalid")?"Wrong code. Check your app and try again.":i.message,o.classList.remove("hidden")),document.getElementById("setup-totp-code").value="",document.getElementById("setup-totp-code").focus()}};function ri(e){const a=[];for(let t=0;t<e;t++){const i=Array.from({length:16},()=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random()*32)]).join("");a.push({code:`${i.slice(0,4)}-${i.slice(4,8)}-${i.slice(8,12)}-${i.slice(12,16)}`,used:!1})}return a}function si(e){W(`
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
          ${e.map(a=>`<code class="font-mono text-xs px-3 py-2 bg-blue-500/5 text-blue-300 border border-blue-500/15 rounded-lg text-center select-all">${s(a)}</code>`).join("")}
        </div>
        <div class="flex gap-3">
          <button onclick="copyBackupCodes([${e.map(a=>`'${a}'`).join(",")}])" class="btn-press flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-xl text-xs transition"><i data-lucide="copy" class="w-4 h-4"></i> Copy All</button>
          <button onclick="downloadBackupCodes([${e.map(a=>`'${a}'`).join(",")}])" class="btn-press flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded-xl text-xs transition"><i data-lucide="download" class="w-4 h-4"></i> Download</button>
          <button onclick="closeModal()" class="btn-press px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-xl text-xs transition">Done</button>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()}window.copyBackupCodes=function(e){navigator.clipboard.writeText(e.join(`
`)).then(()=>p("Backup codes copied!"))};window.downloadBackupCodes=function(e){const a=new Blob([`Weverse Admin Backup Codes
Generated: ${new Date().toISOString()}

${e.join(`
`)}

Each code works once. Store securely.`],{type:"text/plain"}),t=document.createElement("a");t.href=URL.createObjectURL(a),t.download="kco-admin-backup-codes.txt",t.click()};window.regenerateBackupCodes=async function(){if(!confirm("This will invalidate ALL existing backup codes. Continue?"))return;const e=ri(10);await m.from("admin_2fa").update({backup_codes:e}).eq("user_id",B.user.id),p("New backup codes generated"),si(e.map(a=>a.code)),pt()};window.disable2FA=async function(){if(confirm("Disable two-factor authentication? Your account will be less secure."))try{const{data:e}=await m.auth.mfa.listFactors(),a=(e?.totp||[])[0];if(a){const{error:t}=await m.auth.mfa.unenroll({factorId:a.id});if(t)throw t}await m.from("admin_2fa").update({enabled:!1}).eq("user_id",B.user.id),await le(B.user.id,"2fa_disabled"),p("2FA has been disabled"),pt()}catch(e){p(e.message,"error")}};async function eo(){const e=document.getElementById("content");try{const{data:a}=await m.from("admin_activity_logs").select("*").order("created_at",{ascending:!1}).limit(100);e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Activity Logs</h2>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Action</th><th>Entity</th><th class="hidden sm:table-cell">Admin</th><th>Date</th></tr></thead>
              <tbody>
                ${(a||[]).length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No activity yet</td></tr>':(a||[]).map(t=>`<tr>
                    <td><span class="text-xs font-bold text-white">${s(t.action)}</span></td>
                    <td><span class="text-xs text-gray-400">${s(t.entity_type||"â€”")} <span class="text-gray-600">${s(t.entity_id?.slice(0,8)||"")}</span></span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-blue-400">${s(t.user_email||t.user_id?.slice(0,8)||"â€”")}</span></td>
                    <td><span class="text-xs text-gray-500">${fe(t.created_at)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}async function to(){const e=document.getElementById("content");try{const{data:a}=await m.from("deployment_history").select("*").order("created_at",{ascending:!1}).limit(20);e.innerHTML=`
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
            ${(a||[]).length===0?'<p class="text-xs text-gray-500 text-center py-8">No deployment history</p>':(a||[]).map(t=>`<div class="flex items-center gap-3 px-4 py-3">
                <div class="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="rocket" class="w-4 h-4 text-emerald-400"></i></div>
                <div class="flex-1"><p class="text-xs font-bold text-white">${s(t.version||t.id?.slice(0,8))}</p><p class="text-[10px] text-gray-500">${fe(t.created_at)}</p></div>
                ${ee(t.status||"completed")}
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}window.exportProducts=async function(){const{data:e}=await m.from("showroom_listings").select("*"),a=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(a),t.download=`kco-products-${new Date().toISOString().slice(0,10)}.json`,t.click(),p("Products exported!")};window.exportOrders=async function(){const{data:e}=await m.from("payment_receipts").select("*").order("created_at",{ascending:!1});if(!e||!e.length){p("No orders to export","info");return}const a=Object.keys(e[0]).join(","),t=e.map(n=>Object.values(n).map(r=>`"${String(r||"").replace(/"/g,'""')}"`).join(",")).join(`
`),i=new Blob([a+`
`+t],{type:"text/csv"}),o=document.createElement("a");o.href=URL.createObjectURL(i),o.download=`kco-orders-${new Date().toISOString().slice(0,10)}.csv`,o.click(),p("Orders exported!")};async function ao(){const e=document.getElementById("content"),{data:a}=await m.from("site_settings").select("*").limit(1).maybeSingle(),t=a||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">Settings</h2>
      <form id="settings-form" onsubmit="saveSettings(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">General Settings</h3>
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Default Currency</label><select class="input-field" name="default_currency">
              ${["USD","EUR","GBP","NGN","KES","ZAR","GHS"].map(i=>`<option value="${i}" ${(t.default_currency||"USD")===i?"selected":""}>${i}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Default Language</label><select class="input-field" name="default_language">
              ${["en","fr","es","de","pt","ar","sw"].map(i=>`<option value="${i}" ${(t.default_language||"en")===i?"selected":""}>${i}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Timezone</label><input class="input-field" name="timezone" value="${s(t.timezone||"UTC")}" placeholder="UTC"></div>
            <div><label class="lbl">Low Stock Threshold</label><input type="number" class="input-field" name="low_stock_threshold" value="${s(t.low_stock_threshold||10)}" min="1"></div>
          </div>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
          <h3 class="text-sm font-black text-white">Feature Toggles</h3>
          ${[{key:"maintenance_mode",label:"Maintenance Mode",desc:"Show a maintenance page to visitors"},{key:"reviews_enabled",label:"Reviews Enabled",desc:"Allow customers to leave reviews",default:!0},{key:"wishlist_enabled",label:"Wishlist Enabled",desc:"Allow customers to save products",default:!0},{key:"guest_checkout",label:"Guest Checkout",desc:"Allow checkout without an account",default:!0}].map(i=>`
            <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
              <div><p class="text-xs font-bold text-white">${i.label}</p><p class="text-[11px] text-gray-500">${i.desc}</p></div>
              <label class="toggle-switch"><input type="checkbox" name="${i.key}" ${t[i.key]!==!1&&(t[i.key]||i.default)?"checked":""}><span class="toggle-slider"></span></label>
            </div>`).join("")}
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSettings=async function(e){e.preventDefault();const a=new FormData(e.target),t={};for(const[i,o]of a.entries())t[i]=o;["maintenance_mode","reviews_enabled","wishlist_enabled","guest_checkout"].forEach(i=>{t[i]=i in t}),await m.from("site_settings").upsert({id:1,...t}),p("Settings saved!")};async function mt(){const e=document.getElementById("content");e&&(e.innerHTML=Ie());try{const{data:a}=await m.from("site_settings").select("*").limit(1).maybeSingle(),t=a||{},i=t.homepage_banner_image||"",o=t.homepage_banner_alt||"Homepage header banner",n=i?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.";e.innerHTML=`
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
          <p id="homepage-banner-preview-note" class="text-[10px] text-gray-500">${s(n)}</p>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}async function gt(){const e=document.getElementById("content");e&&(e.innerHTML=Ie());try{let a=function(l,d,c,u="",g="blue"){const y=!!(c&&c.trim());return`
        <div class="glass-soft border border-${g}-500/15 rounded-xl p-4 space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-xs font-black text-white">${s(l)}</p>
            ${y?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">âœ“ Uploaded</span>':'<span class="text-[9px] text-gray-600">Empty</span>'}
          </div>
          ${y?`<div class="relative group w-full h-24 rounded-xl overflow-hidden bg-gray-900 border border-blue-500/10 flex items-center justify-center">
                <img src="${s(c)}" alt="${s(l)}" class="max-h-20 max-w-full object-contain p-2" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-600 text-center&quot;>Image broken</p>'">
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                  <button type="button" onclick="triggerImgUpload('${d}')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">Replace</button>
                  <button type="button" onclick="clearBrandImg('${d}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
                </div>
               </div>`:`<div class="w-full h-24 rounded-xl border-2 border-dashed border-${g}-500/25 hover:border-${g}-500/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition" onclick="triggerImgUpload('${d}')">
                <i data-lucide="image-plus" class="w-7 h-7 text-${g}-400"></i>
                <p class="text-[11px] text-gray-500">Click to upload</p>
               </div>`}
          ${u?`<p class="text-[10px] text-gray-500">${s(u)}</p>`:""}
          <input type="file" id="file-${d}" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'${d}')">
          <input type="hidden" name="${d}" id="val-${d}" value="${s(c||"")}">
          <div class="flex gap-2">
            <input class="input-field text-xs flex-1 ${y?"":"hidden"}" id="url-${d}" value="${s(c||"")}" placeholder="Or paste image URL" oninput="document.getElementById('val-${d}').value=this.value;updateLivePreview()">
            <button type="button" onclick="document.getElementById('url-${d}').classList.toggle('hidden')" class="text-[10px] text-${g}-400 hover:text-${g}-300 transition shrink-0">${y?"Edit URL":"Paste URL"}</button>
          </div>
        </div>`};const{data:t}=await m.from("site_settings").select("*").limit(1).maybeSingle(),i=t||{},o=i.brand_name||i.site_name||Pa,n=i.brand_slogan||i.site_tagline||Ea,r=i.brand_logo||i.brand_header_logo||"";e.innerHTML=`
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
                ${r?`<img src="${s(r)}" alt="${s(o)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
              </div>
              <div>
                <p id="preview-name" class="text-sm font-black text-white leading-none">${s(o)}</p>
                <p id="preview-slogan" class="text-[10px] text-blue-400 font-semibold mt-0.5">${s(n)}</p>
              </div>
              <div id="preview-badge-wrap" class="ml-auto ${i.brand_badge?"":"hidden"}">
                <img id="preview-badge" src="${s(i.brand_badge||"")}" alt="Verified" class="w-6 h-6 object-contain">
              </div>
            </div>
            <div class="px-4 py-2 border-t border-gray-800 text-[11px] text-gray-500" style="background:#070b16">
              <span id="preview-btn" style="background:${s(i.brand_primary_color||"#f97316")};color:#000;padding:4px 12px;border-radius:8px;font-weight:700;font-size:11px">Shop Now</span>
              <span class="ml-3" style="color:${s(i.brand_secondary_color||"#3b82f6")}">All Products â†’</span>
            </div>
          </div>
          <!-- Footer preview -->
          <div id="preview-footer" class="rounded-xl px-4 py-3 border border-gray-800 flex items-center gap-3" style="background:#0f172a">
            <div id="preview-footer-logo-wrap" class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style="background:var(--preview-primary,#f97316)">
              ${r?`<img src="${s(r)}" alt="${s(o)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
            </div>
            <div>
              <p id="preview-footer-name" class="text-xs font-black text-white">${s(o)}</p>
              <p id="preview-footer-slogan" class="text-[10px] text-gray-500">${s(n)}</p>
            </div>
            <p class="ml-auto text-[10px] text-gray-600">Â© 2026 <span id="preview-copy-name">${s(o)}</span></p>
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
                <input class="input-field" name="brand_name" id="inp-brand-name" value="${s(o)}" placeholder="Your brand name" required oninput="updateLivePreview()">
              </div>
              <div>
                <label class="lbl">Short Name</label>
                <input class="input-field" name="brand_short_name" value="${s(i.brand_short_name||"")}" placeholder="e.g. Weverse">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Slogan / Tagline *</label>
                <input class="input-field" name="brand_slogan" id="inp-brand-slogan" value="${s(n)}" placeholder="e.g. Global Shopping â€¢ Worldwide Delivery" oninput="updateLivePreview()">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Brand Description</label>
                <textarea class="input-field" name="brand_description" rows="2" placeholder="Short descriptionâ€¦">${s(i.brand_description||"")}</textarea>
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

          <!-- â”€â”€ Brand Font â”€â”€ -->
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
              <p id="font-sample" class="text-sm text-white font-bold" style="font-family:'${s(i.brand_font||"Inter")}',sans-serif">The quick brown fox jumps â€” 0123456789 Â· Weverse Online Shop</p>
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
              ${a("Verification Badge Image","brand_badge",i.brand_badge,"Upload your blue checkmark or any verification badge. Recommended: 64Ã—64px PNG with transparent background.","blue")}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              ${a("Brand Logo / Banner Image","brand_logo",r,"Upload your image here. This changes only the logo/banner image and keeps the other brand fields as they are.")}
              ${a("Favicon / Tab Icon","brand_favicon",i.brand_favicon,"Browser tab icon. 32Ã—32 or 64Ã—64px.")}
              ${a("Mobile Logo","brand_mobile_logo",i.brand_mobile_logo,"Smaller logo for phones. 120Ã—40px.")}
              ${a("Header Logo","brand_header_logo",i.brand_header_logo,"Top navigation bar.")}
              ${a("Footer Logo","brand_footer_logo",i.brand_footer_logo,"Website footer.")}
              ${a("Login Page Logo","brand_login_logo",i.brand_login_logo,"Shown on auth/login page.")}
              ${a("Admin Dashboard Logo","brand_admin_logo",i.brand_admin_logo,"Admin sidebar header.")}
              ${a("OG / Social Image","brand_og_image",i.brand_og_image,"1200Ã—630px â€” shown when sharing links.")}
            </div>
          </div>

          <!-- â”€â”€ Contact â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="globe" class="w-4 h-4 text-blue-400"></i> Website & Contact</h3>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Website URL</label><input class="input-field" name="brand_website_url" value="${s(i.brand_website_url||i.production_url||"https://weverseonlineshop.com")}" placeholder="https://â€¦"></div>
              <div><label class="lbl">Support Email</label><input type="email" class="input-field" name="brand_email" value="${s(i.brand_email||i.contact_email||"")}" placeholder="support@â€¦"></div>
              <div><label class="lbl">Phone / WhatsApp</label><input class="input-field" name="brand_phone" value="${s(i.brand_phone||i.contact_phone||"")}" placeholder="+1 234â€¦"></div>
              <div><label class="lbl">Business Address</label><input class="input-field" name="brand_address" value="${s(i.brand_address||i.contact_address||"")}" placeholder="City, Country"></div>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}window.toggleLivePreview=function(){document.getElementById("live-preview-panel")?.classList.toggle("hidden"),updateLivePreview()};window.updateLivePreview=function(){const e=document.getElementById("live-preview-panel");if(!e||e.classList.contains("hidden"))return;const a=document.getElementById("inp-brand-name")?.value||Pa,t=document.getElementById("inp-brand-slogan")?.value||Ea,i=document.getElementById("ct-primary")?.value||"#f97316",o=document.getElementById("ct-secondary")?.value||"#3b82f6",n=document.getElementById("ct-tag1")?.value||"#22d3ee",r=document.getElementById("ct-tag2")?.value||"#a3e635",l=document.getElementById("val-brand_logo")?.value||DEFAULT_BRAND_LOGO,d=document.getElementById("val-brand_badge")?.value||"";["preview-name","preview-footer-name","preview-copy-name"].forEach(h=>{const v=document.getElementById(h);v&&(v.textContent=a)}),["preview-slogan","preview-footer-slogan"].forEach(h=>{const v=document.getElementById(h);v&&(v.textContent=t)});const c=document.getElementById("preview-slogan");if(c&&t){const h=t,v=h.indexOf(","),_=v>-1?h.slice(0,v+1):h,k=v>-1?h.slice(v+1):"";c.innerHTML=`<span style="color:${n};font-weight:800">${s(_)}</span><span style="color:${r};font-weight:700">${s(k)}</span>`}const u=document.getElementById("preview-btn");u&&(u.style.background=i);const g=e.querySelector('[style*="color:"]');g&&(g.style.color=o),["preview-logo-wrap","preview-footer-logo-wrap"].forEach(h=>{const v=document.getElementById(h);v&&(l?(v.innerHTML=`<img src="${l}" alt="${a}" class="w-full h-full object-contain p-1">`,v.style.background="transparent"):(v.innerHTML='<i data-lucide="globe" class="w-4 h-4 text-white"></i>',v.style.background=i,window.lucide&&lucide.createIcons()))});const y=document.getElementById("preview-badge-wrap"),b=document.getElementById("preview-badge");y&&b&&(d?(b.src=d,y.classList.remove("hidden")):y.classList.add("hidden"))};window.triggerImgUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearBrandImg=function(e){document.getElementById("val-"+e).value="";const a=document.getElementById("url-"+e);a&&(a.value=""),(e&&e.startsWith("homepage_")?mt:gt)()};window.clearHomepageBannerImg=function(){const e=document.getElementById("val-homepage_banner_image"),a=document.getElementById("url-homepage_banner_image"),t=document.getElementById("homepage_banner_alt");e&&(e.value=""),a&&(a.value=""),t&&(t.value=""),mt()};window.restoreHomepageBannerDefault=function(){window.clearHomepageBannerImg()};window.syncColor=function(e,a){const t=document.getElementById("color-"+e);t&&/^#[0-9a-fA-F]{6}$/.test(a)&&(t.value=a)};window.previewFont=function(e){const a=document.getElementById("font-sample");a&&(a.style.fontFamily=`'${e}', sans-serif`);const t="gf-preview";let i=document.getElementById(t);i||(i=document.createElement("link"),i.id=t,i.rel="stylesheet",document.head.appendChild(i)),i.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(e)}:wght@400;700;900&display=swap`};const Lt="weverse_brand_v1",Bt="weverse_brand_override_v1";function Mt(){try{const e=JSON.parse(localStorage.getItem(Bt)||"null");if(e&&typeof e=="object")return e}catch{}try{const e=JSON.parse(localStorage.getItem(Lt)||"null");if(e&&typeof e=="object")return e.data&&typeof e.data=="object"?e.data:e}catch{}return{}}function Ze(e){const a={...Mt(),...e};try{localStorage.setItem(Bt,JSON.stringify(a))}catch{}try{localStorage.setItem(Lt,JSON.stringify({ts:Date.now(),data:a}))}catch{}return window.dispatchEvent(new StorageEvent("storage",{key:Bt})),window.dispatchEvent(new StorageEvent("storage",{key:Lt})),window.dispatchEvent(new CustomEvent("brand-updated",{detail:a})),a}window.handleBrandImgUpload=async function(e,a){const t=e.target.files?.[0];if(!t)return;const i=a&&a.startsWith("homepage_"),o=document.getElementById(i?"homepage-banner-status":"brand-upload-status"),n=document.getElementById(i?"homepage-banner-msg":"brand-upload-msg");o&&o.classList.remove("hidden"),n&&(n.textContent=`Uploading ${t.name}â€¦`);try{const r=t.name.split(".").pop(),l=`brand/${a}-${Date.now()}.${r}`,{error:d}=await m.storage.from("product-images").upload(l,t,{contentType:t.type,upsert:!0});let c;if(d)c=URL.createObjectURL(t),n&&(n.textContent=`Preview only (storage: ${d.message})`);else{const{data:y}=m.storage.from("product-images").getPublicUrl(l);c=y.publicUrl,n&&(n.textContent=`âœ“ ${t.name} uploaded`)}const u=document.getElementById("val-"+a),g=document.getElementById("url-"+a);u&&(u.value=c),g&&(g.value=c,g.classList.remove("hidden")),i?updateHomepageBannerPreview():(updateLivePreview(),setTimeout(()=>gt(),1e3))}catch(r){n&&(n.textContent=`Upload failed: ${r.message}`)}setTimeout(()=>o?.classList.add("hidden"),4e3)};window.saveBrandSettings=async function(e){e.preventDefault();const a=new FormData(e.target),t={};for(const[l,d]of a.entries())l.endsWith("_url")||(t[l]=d);t.brand_name&&(t.site_name=t.brand_name),t.brand_slogan&&(t.site_tagline=t.brand_slogan),t.brand_description&&(t.site_description=t.brand_description),t.brand_email&&(t.contact_email=t.brand_email),t.brand_phone&&(t.contact_phone=t.brand_phone),t.brand_address&&(t.contact_address=t.brand_address),t.brand_website_url&&(t.production_url=t.brand_website_url);const i=t.brand_custom_font||t.brand_font;i&&previewFont(i);const o=e.target.querySelector("[type=submit]");o&&(o.disabled=!0,o.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Savingâ€¦',window.lucide&&lucide.createIcons());const{data:n}=await m.from("site_settings").select("id").limit(1).maybeSingle();let r;n?.id?{error:r}=await m.from("site_settings").update(t).eq("id",n.id):{error:r}=await m.from("site_settings").insert(t),r?(Ze(t),p("Brand saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(Ze(t),p("âœ… Brand saved! All pages will now show your updated brand.","success")),setTimeout(()=>gt(),500)};window.toggleHomepageBannerPreview=function(){document.getElementById("homepage-banner-preview-panel")?.classList.toggle("hidden"),updateHomepageBannerPreview()};window.updateHomepageBannerPreview=function(){const e=document.getElementById("homepage-banner-preview-panel");if(!e||e.classList.contains("hidden"))return;const a=document.getElementById("val-homepage_banner_image")?.value||"",t=document.getElementById("homepage_banner_alt")?.value||"Homepage header banner",i=document.getElementById("homepage-banner-image"),o=document.getElementById("homepage-banner-preview-img");[i,o].forEach(r=>{r&&(a?(r.src=a,r.alt=t,r.classList.remove("hidden")):r.classList.add("hidden"))});const n=document.getElementById("homepage-banner-preview-note");n&&(n.textContent=a?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.")};window.saveHomepageBranding=async function(e){e.preventDefault();const a={homepage_banner_image:document.getElementById("url-homepage_banner_image")?.value||"",homepage_banner_alt:document.getElementById("homepage_banner_alt")?.value||"Homepage header banner"},t=e.target.querySelector("[type=submit]");t&&(t.disabled=!0,t.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishingâ€¦',window.lucide&&lucide.createIcons());const{data:i}=await m.from("site_settings").select("id").limit(1).maybeSingle();let o;i?.id?{error:o}=await m.from("site_settings").update(a).eq("id",i.id):{error:o}=await m.from("site_settings").insert(a),o?(Ze({...Mt(),homepage_banner_image:a.homepage_banner_image,homepage_banner_alt:a.homepage_banner_alt}),p("Homepage banner saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(Ze({...Mt(),homepage_banner_image:a.homepage_banner_image,homepage_banner_alt:a.homepage_banner_alt}),p("Homepage banner published.","success")),setTimeout(()=>mt(),500)};const et=[{key:"trust_promo",label:"Promotional Hero (Trust & Info Area)",icon:"sparkles",desc:"The family-receives-orders section above the app banner. Show it as-is for the built-in design, or upload the real photo/video."},{key:"app_banner",label:"Weverse Mobile App Banner",icon:"smartphone",desc:"The dark app banner at the very bottom of every page."},{key:"reviews",label:"Customer Reviews & Trust",icon:"star",desc:"The customer reviews strip just below the accordions."}];async function Fe(e){const a=document.getElementById("content");a&&(a.innerHTML=Ie());try{let t=e?{...e}:null;if(!t){const{data:i}=await m.from("site_settings").select("*").limit(1).maybeSingle(),o=i||{};t={};for(const n of et)t[n.key+"_bg_image"]=o[n.key+"_bg_image"]||"",t[n.key+"_bg_video"]=o[n.key+"_bg_video"]||""}a.innerHTML=`
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white flex items-center gap-2"><i data-lucide="image" class="w-5 h-5 text-blue-400"></i> Promo & Backgrounds</h2>
        <p class="text-xs text-gray-500 max-w-2xl leading-relaxed">Choose an <b class="text-gray-300">image</b> and/or a <b class="text-gray-300">video</b> for each promotional section. When a video is set it plays automatically and the image acts as its poster. Leave a slot empty to keep that section’s built-in design. Changes appear instantly on every page after publishing.</p>

        <div id="promo-bg-status" class="hidden p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300 flex items-center gap-2">
          <i data-lucide="loader-2" class="w-4 h-4 animate-spin shrink-0"></i>
          <span id="promo-bg-msg">Uploadingâ€¦</span>
        </div>

        <form id="promo-bg-form" onsubmit="savePromoBackgrounds(event)" class="space-y-5">
          ${et.map(i=>io(i,t)).join("")}

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 flex items-center gap-3">
            <i data-lucide="info" class="w-5 h-5 text-emerald-400 shrink-0"></i>
            <p class="text-[11px] text-gray-400 leading-relaxed">Published backgrounds are cached on visitor devices for up to a minute. Publishing clears the cache so everyone sees your new media immediately.</p>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">
            <i data-lucide="rocket" class="w-4 h-4 inline mr-2"></i>Publish Promo & Backgrounds
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){a&&(a.innerHTML=`<div class="p-6 text-red-400">${s(t.message)}</div>`)}}function io(e,a){const t=e.key+"_bg_image",i=e.key+"_bg_video",o=a[t]||"",n=a[i]||"",r=!!(o&&o.trim()),l=!!(n&&n.trim());return`
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
          ${l?'<span class="text-[9px] font-bold text-violet-500 bg-violet-500/10 px-1.5 py-0.5 rounded-full">âœ“ Video</span>':""}
          ${r||l?"":'<span class="text-[9px] text-gray-600">Built-in design</span>'}
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${ma(e,t,o,r,"image")}
        ${ma(e,i,n,l,"video")}
      </div>
    </div>`}function ma(e,a,t,i,o){const n=o==="image",r=n?"blue":"violet",l=n?"image-plus":"video",d=n?"text-blue-400":"text-violet-400";return`
    <div>
      <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5"><i data-lucide="${l}" class="w-3 h-3 ${d}"></i>${o}</p>
      ${i?`<div class="relative group w-full h-28 rounded-xl overflow-hidden bg-gray-900 border border-${r}-500/15 flex items-center justify-center">
             ${n?`<img src="${s(t)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`:`<video src="${s(t)}" class="w-full h-full object-cover" muted playsinline preload="metadata"></video>`}
             <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
               <button type="button" onclick="triggerPromoBgUpload('${a}')" class="text-xs font-bold text-white bg-${r}-600 px-3 py-1.5 rounded-lg">Replace</button>
               <button type="button" onclick="clearPromoBg('${a}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
             </div>
           </div>`:`<button type="button" onclick="triggerPromoBgUpload('${a}')" class="w-full h-28 rounded-xl border-2 border-dashed border-${r}-500/25 hover:border-${r}-500/50 flex flex-col items-center justify-center gap-1.5 transition">
             <i data-lucide="${l}" class="w-6 h-6 ${d}"></i>
             <p class="text-[10px] text-gray-500">Upload ${o}</p>
           </button>`}
      <input type="file" id="file-${a}" class="hidden" accept="${n?"image/*":"video/*"}" onchange="handlePromoBgUpload(event,'${a}')">
      <input type="hidden" name="${a}" id="val-${a}" value="${s(t)}">
      <div class="flex gap-2 mt-1.5">
        <input class="input-field text-xs flex-1" id="url-${a}" value="${s(t)}" placeholder="Or paste ${o} URL" oninput="document.getElementById('val-${a}').value=this.value">
        <button type="button" onclick="document.getElementById('url-${a}').classList.toggle('hidden')" class="text-[10px] text-${r}-400 hover:text-${r}-300 transition shrink-0">Edit URL</button>
      </div>
    </div>`}window.triggerPromoBgUpload=function(e){document.getElementById("file-"+e)?.click()};function li(){const e={};for(const a of et)e[a.key+"_bg_image"]=document.getElementById("val-"+a.key+"_bg_image")?.value||"",e[a.key+"_bg_video"]=document.getElementById("val-"+a.key+"_bg_video")?.value||"";return e}window.clearPromoBg=function(e){const a=li();a[e]="";const t=document.getElementById("val-"+e),i=document.getElementById("url-"+e);t&&(t.value=""),i&&(i.value=""),Fe(a),p("Cleared. Publish to apply.","info")};window.handlePromoBgUpload=async function(e,a){const t=e.target.files?.[0];if(!t)return;const i=document.getElementById("promo-bg-status"),o=document.getElementById("promo-bg-msg");i&&i.classList.remove("hidden"),o&&(o.textContent=`Uploading ${t.name}â€¦`);try{const n=(t.name.split(".").pop()||"bin").toLowerCase(),r=`promo/${a}-${Date.now()}.${n}`,{error:l}=await m.storage.from("product-images").upload(r,t,{contentType:t.type,upsert:!0});let d;if(l)d=URL.createObjectURL(t),o&&(o.textContent=`Preview only (storage: ${l.message})`);else{const{data:y}=m.storage.from("product-images").getPublicUrl(r);d=y.publicUrl,o&&(o.textContent=`âœ“ ${t.name} uploaded`)}const c=document.getElementById("val-"+a),u=document.getElementById("url-"+a);c&&(c.value=d),u&&(u.value=d,u.classList.remove("hidden"));const g=li();Fe(g)}catch(n){o&&(o.textContent=`Upload failed: ${n.message}`)}setTimeout(()=>i?.classList.add("hidden"),4e3)};window.savePromoBackgrounds=async function(e){e.preventDefault();const a={};for(const n of et)a[n.key+"_bg_image"]=document.getElementById("val-"+n.key+"_bg_image")?.value||"",a[n.key+"_bg_video"]=document.getElementById("val-"+n.key+"_bg_video")?.value||"";const t=e.target.querySelector("[type=submit]");t&&(t.disabled=!0,t.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishingâ€¦',window.lucide&&lucide.createIcons());const{data:i}=await m.from("site_settings").select("id").limit(1).maybeSingle();let o;i?.id?{error:o}=await m.from("site_settings").update(a).eq("id",i.id):{error:o}=await m.from("site_settings").insert(a),$i(),o?(p("Publish failed â€” the settings table rejected the update. Make sure the new promo-background columns are migrated, then try again.","error"),Fe(a)):(p("Promo & backgrounds published across all pages.","success"),setTimeout(()=>Fe(),500))};window._manualPaymentAccounts=[];function Zt(e="USD"){return{id:`bank-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,currency:e,currencyName:e,flag:ya("US"),country:"United States",country_code:"US",bankName:"",transferType:"Local & International",beneficiary:"",accountNumber:"",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:""}}function ea(){const e=document.getElementById("manual-payment-accounts-json");e&&(e.value=JSON.stringify(window._manualPaymentAccounts||[]))}function no(e,a){const t=e.country_code||"US";return`
    <div class="p-4 glass-soft border border-blue-500/10 rounded-xl space-y-3">
      <div class="flex items-center justify-between gap-3">
        <h4 class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="building-2" class="w-3.5 h-3.5 text-blue-400"></i> Bank Account ${a+1}</h4>
        <button type="button" onclick="removeManualPaymentAccount(${a})" class="text-[11px] font-bold text-red-400 hover:text-red-300 transition">Remove</button>
      </div>
      <div class="form-grid form-grid-2">
        <div><label class="lbl">Currency *</label><select class="input-field" onchange="updateManualPaymentAccount(${a}, 'currency', this.value)">${Ia.map(i=>`<option value="${i}" ${e.currency===i?"selected":""}>${i}</option>`).join("")}</select></div>
        <div><label class="lbl">Country *</label><select class="input-field" onchange="updateManualPaymentCountry(${a}, this.value)">${Oa(t)}</select></div>
        <div><label class="lbl">Beneficiary / Account Name *</label><input class="input-field" value="${s(e.beneficiary||"")}" placeholder="Full name on account" oninput="updateManualPaymentAccount(${a}, 'beneficiary', this.value)"></div>
        <div><label class="lbl">Bank Name *</label><input class="input-field" value="${s(e.bankName||"")}" placeholder="e.g. Citibank" oninput="updateManualPaymentAccount(${a}, 'bankName', this.value)"></div>
        <div><label class="lbl">Account Number</label><input class="input-field font-mono" value="${s(e.accountNumber||"")}" placeholder="Account number" oninput="updateManualPaymentAccount(${a}, 'accountNumber', this.value)"></div>
        <div><label class="lbl">Transfer Type</label><input class="input-field" value="${s(e.transferType||"")}" placeholder="Local & International" oninput="updateManualPaymentAccount(${a}, 'transferType', this.value)"></div>
        <div><label class="lbl">Account Type</label><input class="input-field" value="${s(e.accountType||"")}" placeholder="Checking, Savings..." oninput="updateManualPaymentAccount(${a}, 'accountType', this.value)"></div>
        <div><label class="lbl">IBAN</label><input class="input-field font-mono" value="${s(e.iban||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${a}, 'iban', this.value)"></div>
        <div><label class="lbl">SWIFT / BIC</label><input class="input-field font-mono" value="${s(e.swift||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${a}, 'swift', this.value)"></div>
        <div><label class="lbl">Routing / ABA</label><input class="input-field font-mono" value="${s(e.routing||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${a}, 'routing', this.value)"></div>
        <div><label class="lbl">Sort Code</label><input class="input-field font-mono" value="${s(e.sortCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${a}, 'sortCode', this.value)"></div>
        <div><label class="lbl">Bank Code</label><input class="input-field font-mono" value="${s(e.bankCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${a}, 'bankCode', this.value)"></div>
        <div><label class="lbl">Branch Code</label><input class="input-field font-mono" value="${s(e.branchCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${a}, 'branchCode', this.value)"></div>
        <div><label class="lbl">Institution Number</label><input class="input-field font-mono" value="${s(e.institutionNumber||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${a}, 'institutionNumber', this.value)"></div>
        <div><label class="lbl">Transit Number</label><input class="input-field font-mono" value="${s(e.transitNumber||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${a}, 'transitNumber', this.value)"></div>
        <div><label class="lbl">BSB Code</label><input class="input-field font-mono" value="${s(e.bsbCode||"")}" placeholder="Optional" oninput="updateManualPaymentAccount(${a}, 'bsbCode', this.value)"></div>
        <div class="sm:col-span-2"><label class="lbl">Bank Address</label><input class="input-field" value="${s(e.address||"")}" placeholder="Branch or bank address" oninput="updateManualPaymentAccount(${a}, 'address', this.value)"></div>
      </div>
    </div>`}window.renderManualPaymentAccountsEditor=function(){const e=document.getElementById("manual-accounts-editor");e&&(window._manualPaymentAccounts?.length||(window._manualPaymentAccounts=[Zt()]),e.innerHTML=`
    <div class="space-y-4">
      ${window._manualPaymentAccounts.map((a,t)=>no(a,t)).join("")}
      <button type="button" onclick="addManualPaymentAccount()" class="btn-press w-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wide transition flex items-center justify-center gap-2">
        <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Another Bank Account
      </button>
    </div>`,ea(),window.lucide&&lucide.createIcons())};window.addManualPaymentAccount=function(){window._manualPaymentAccounts.push(Zt()),renderManualPaymentAccountsEditor()};window.removeManualPaymentAccount=function(e){window._manualPaymentAccounts.splice(e,1),window._manualPaymentAccounts.length||(window._manualPaymentAccounts=[Zt()]),renderManualPaymentAccountsEditor()};window.updateManualPaymentAccount=function(e,a,t){const i=window._manualPaymentAccounts[e];i&&(i[a]=t,a==="currency"&&(i.currencyName=t),ea())};window.updateManualPaymentCountry=function(e,a){const t=window._manualPaymentAccounts[e];if(!t)return;const i=Ee.find(o=>o.code===a);t.country_code=a,t.country=i?.name||"",t.flag=i?.flag||ya(a),ea(),renderManualPaymentAccountsEditor()};async function Nt(){const e=document.getElementById("content");e&&(e.innerHTML=Ie());try{const{data:a}=await m.from("site_settings").select("*").limit(1).maybeSingle(),t={...vi()||{},...a||{}};window._manualPaymentAccounts=xi(t).map(i=>({...i})),e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white">Payment Settings</h2>
          <div class="flex items-center gap-2 flex-wrap">
            ${t.payment_gateway?`<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Active: ${s(t.payment_gateway)}</span>`:'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Not configured</span>'}
            ${t.payment_mode==="live"?'<span class="badge bg-red-500/10 text-red-400 border-red-500/20">ðŸ”´ LIVE MODE</span>':'<span class="badge bg-blue-500/10 text-blue-400 border-blue-500/20">ðŸ”§ Test Mode</span>'}
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
                <input type="checkbox" name="manual_payment_enabled" id="manual-toggle" ${t.manual_payment_enabled!==!1?"checked":""}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="p-5 space-y-4">
              <input type="hidden" id="manual-payment-accounts-json" name="manual_payment_accounts_json" value="">
              <div id="manual-accounts-editor"></div>
              <div>
                <label class="lbl">Payment Instructions (shown to customer after checkout)</label>
                <textarea class="input-field" name="manual_payment_instructions" rows="4" placeholder="Explain how customers should pay and upload their receipt.">${s(wi(t))}</textarea>
              </div>
              <div>
                <label class="lbl">ATM Transfer Instructions (optional, shown separately)</label>
                <textarea class="input-field" name="atm_transfer_instructions" rows="3" placeholder="Optional ATM-specific instructions.">${s(t.atm_transfer_instructions||"")}</textarea>
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
                <input type="checkbox" name="flutterwave_enabled" ${t.flutterwave_enabled?"checked":""}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="p-5 space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex items-center gap-3 p-3 glass-soft border ${(t.payment_mode||"test")==="test"?"border-blue-500/40 bg-blue-500/5":"border-blue-500/10"} rounded-xl cursor-pointer">
                  <input type="radio" name="payment_mode" value="test" ${(t.payment_mode||"test")==="test"?"checked":""} class="accent-blue-500">
                  <div><p class="text-xs font-black text-white">ðŸ”§ Test Mode</p><p class="text-[11px] text-gray-500">Use sandbox keys â€” no real money</p></div>
                </label>
                <label class="flex items-center gap-3 p-3 glass-soft border ${t.payment_mode==="live"?"border-red-500/40 bg-red-500/5":"border-blue-500/10"} rounded-xl cursor-pointer">
                  <input type="radio" name="payment_mode" value="live" ${t.payment_mode==="live"?"checked":""} class="accent-red-500">
                  <div><p class="text-xs font-black text-white">ðŸ”´ Live Mode</p><p class="text-[11px] text-red-400 font-bold">Real money â€” use production keys</p></div>
                </label>
              </div>
              <div class="form-grid form-grid-2">
                <div><label class="lbl">Public Key *</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_public_key" placeholder="${t.flutterwave_public_key?"â€¢â€¢â€¢â€¢"+t.flutterwave_public_key.slice(-4):"FLWPUBK_TEST-â€¦ or FLWPUBK-â€¦"}">${t.flutterwave_public_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}</div></div>
                <div><label class="lbl">Secret Key *</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_secret_key" placeholder="${t.flutterwave_secret_key?"â€¢â€¢â€¢â€¢"+t.flutterwave_secret_key.slice(-4):"FLWSECK_TEST-â€¦ or FLWSECK-â€¦"}">${t.flutterwave_secret_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}</div></div>
                <div><label class="lbl">Encryption Key</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_encryption_key" placeholder="${t.flutterwave_encryption_key?"â€¢â€¢â€¢â€¢"+t.flutterwave_encryption_key.slice(-4):"Encryption key from dashboard"}">${t.flutterwave_encryption_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}</div></div>
                <div><label class="lbl">Webhook Secret</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_webhook_secret" placeholder="${t.flutterwave_webhook_secret?"â€¢â€¢â€¢â€¢"+t.flutterwave_webhook_secret.slice(-4):"Secret hash for webhook verification"}">${t.flutterwave_webhook_secret?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}</div></div>
                <div><label class="lbl">Accepted Currency</label><select class="input-field" name="flutterwave_currency">${["NGN","USD","GBP","EUR","GHS","KES","ZAR","ZMW","TZS","UGX","XAF","XOF"].map(i=>`<option value="${i}" ${(t.flutterwave_currency||"NGN")===i?"selected":""}>${i}</option>`).join("")}</select></div>
                <div><label class="lbl">Redirect URL (after payment)</label><input class="input-field" name="flutterwave_redirect_url" value="${s(t.flutterwave_redirect_url||"")}" placeholder="${window.location.origin}/payment.html"></div>
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
              ${[{id:"manual",label:"Manual / Bank Transfer",icon:"landmark",color:"blue"},{id:"flutterwave",label:"Flutterwave",icon:"zap",color:"amber"},{id:"both",label:"Both (customer chooses)",icon:"layers",color:"emerald"}].map(i=>`<label class="flex items-center gap-3 p-3 glass-soft border ${(t.payment_gateway||"manual")===i.id?"border-blue-500/40 bg-blue-500/5":"border-blue-500/10"} rounded-xl cursor-pointer hover:border-blue-500/30 transition"><input type="radio" name="payment_gateway" value="${i.id}" ${(t.payment_gateway||"manual")===i.id?"checked":""} class="accent-blue-500"><div><i data-lucide="${i.icon}" class="w-4 h-4 text-${i.color}-400 mb-0.5"></i><p class="text-xs font-bold text-white">${i.label}</p></div></label>`).join("")}
            </div>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2"><i data-lucide="save" class="w-4 h-4"></i> Save Payment Settings</button>
        </form>
      </div>`,renderManualPaymentAccountsEditor(),window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}window.savePaymentSettings=async function(e){e.preventDefault();const a=new FormData(e.target),t=Object.fromEntries(a.entries()),i=["flutterwave_public_key","flutterwave_secret_key","flutterwave_encryption_key","flutterwave_webhook_secret"],o={};for(const[u,g]of Object.entries(t))i.includes(u)?g&&!g.startsWith("â€¢â€¢â€¢â€¢")&&g.trim()!==""&&(o[u]=g.trim()):o[u]=g;o.manual_payment_enabled=t.manual_payment_enabled==="on",o.flutterwave_enabled=t.flutterwave_enabled==="on";let n=[];try{n=JSON.parse(t.manual_payment_accounts_json||"[]")}catch{}o.manual_payment_accounts=n;const r=n[0]||{},l=n[1]||{};o.bank1_account_name=r.beneficiary||"",o.bank1_account_number=r.accountNumber||"",o.bank1_bank_name=r.bankName||"",o.bank1_transfer_type=r.transferType||"",o.bank1_sort_code=r.sortCode||r.routing||"",o.bank1_currency=r.currency||"USD",o.bank2_account_name=l.beneficiary||"",o.bank2_account_number=l.accountNumber||"",o.bank2_bank_name=l.bankName||"",o.bank2_transfer_type=l.transferType||"",o.bank2_sort_code=l.sortCode||l.routing||"",o.bank2_currency=l.currency||"USD",_i(o);const{data:d}=await m.from("site_settings").select("id").limit(1).maybeSingle();let c;if(d?.id?{error:c}=await m.from("site_settings").update(o).eq("id",d.id):{error:c}=await m.from("site_settings").insert(o),c){const u=String(c.message||"");if(/manual_payment_accounts|column|schema cache/i.test(u)){p("Payment settings saved locally. Run the latest migration to persist them to Supabase.","info"),console.warn(c),setTimeout(()=>Nt(),500);return}p("Save failed: "+c.message,"error"),console.error(c);return}p("âœ… Payment settings saved successfully!","success"),setTimeout(()=>Nt(),500)};window.testFlutterwaveKeys=async function(){const{data:e}=await m.from("site_settings").select("flutterwave_public_key").limit(1).maybeSingle();if(!e?.flutterwave_public_key){p("Save your Flutterwave public key first","info");return}p("Flutterwave key is saved. Use test mode + test card to verify a payment flow.","info")};async function bt(){const e=document.getElementById("content");try{const{data:a}=await m.from("site_settings").select("*").limit(1).maybeSingle(),t=a||{};e.innerHTML=`
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white">Publish & Deploy</h2>

        <!-- Status Bar -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 flex flex-wrap items-center gap-4">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${t.github_repo?"bg-emerald-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${t.github_repo?"text-emerald-400":"text-gray-500"}">${t.github_repo?"GitHub Connected: "+s(t.github_repo):"GitHub Not Connected"}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${t.deploy_webhook?"bg-blue-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${t.deploy_webhook?"text-blue-400":"text-gray-500"}">${t.deploy_webhook?"Deploy Webhook Set":"No Webhook"}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${t.payment_gateway?"bg-amber-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${t.payment_gateway?"text-amber-400":"text-gray-500"}">${t.payment_gateway?"Payment: "+s(t.payment_gateway):"Payment Not Configured"}</span>
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
                <input class="input-field" name="github_username" value="${s(t.github_username||"")}" placeholder="your-github-username">
              </div>
              <div>
                <label class="lbl">Repository Name</label>
                <input class="input-field" name="github_repo" value="${s(t.github_repo||"")}" placeholder="my-website-repo">
              </div>
              <div>
                <label class="lbl">Branch</label>
                <input class="input-field" name="github_branch" value="${s(t.github_branch||"main")}" placeholder="main">
              </div>
              <div>
                <label class="lbl">GitHub Personal Access Token</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="github_token" placeholder="${t.github_token?"â€¢â€¢â€¢â€¢"+t.github_token.slice(-4):"ghp_â€¦paste your token"}">
                  ${t.github_token?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}
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
                <label class="flex items-center gap-2 p-3 glass-soft border ${(t.hosting_provider||"netlify")===i.id?"border-blue-500/40 bg-blue-500/5":"border-blue-500/10"} rounded-xl cursor-pointer hover:border-blue-500/30 transition">
                  <input type="radio" name="hosting_provider" value="${i.id}" ${(t.hosting_provider||"netlify")===i.id?"checked":""} class="accent-blue-500">
                  <i data-lucide="${i.icon}" class="w-4 h-4 text-gray-400"></i>
                  <span class="text-xs font-bold text-white">${i.name}</span>
                </label>`).join("")}
            </div>
            <div>
              <label class="lbl">Deploy Webhook URL</label>
              <input class="input-field" name="deploy_webhook" value="${s(t.deploy_webhook||"")}" placeholder="https://api.netlify.com/build_hooks/â€¦">
              <p class="text-[10px] text-gray-500 mt-1">Netlify: Site Settings â†’ Build hooks Â· Vercel: Project â†’ Settings â†’ Git â†’ Deploy Hooks</p>
            </div>
            <div>
              <label class="lbl">Production URL</label>
              <input class="input-field" name="production_url" value="${s(t.production_url||"")}" placeholder="https://yoursite.com">
            </div>
          </div>

          <!-- â”€â”€ Payment Settings â”€â”€ -->
          <div class="glass-soft border border-amber-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2">
              <i data-lucide="credit-card" class="w-4 h-4 text-amber-400"></i> Payment Gateway Settings
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${[{id:"flutterwave",name:"Flutterwave",color:"amber"},{id:"stripe",name:"Stripe",color:"blue"},{id:"paypal",name:"PayPal",color:"blue"},{id:"paystack",name:"Paystack",color:"blue"},{id:"razorpay",name:"Razorpay",color:"blue"},{id:"manual",name:"Manual Bank Transfer",color:"gray"}].map(i=>`
                <label class="flex items-center gap-2 p-2.5 glass-soft border ${(t.payment_gateway||"flutterwave")===i.id?"border-amber-500/40 bg-amber-500/5":"border-blue-500/10"} rounded-xl cursor-pointer hover:border-amber-500/30 transition">
                  <input type="radio" name="payment_gateway" value="${i.id}" ${(t.payment_gateway||"flutterwave")===i.id?"checked":""} class="accent-amber-500">
                  <span class="text-xs font-bold text-white">${i.name}</span>
                </label>`).join("")}
            </div>
            <div id="payment-key-fields" class="form-grid form-grid-2">
              <div>
                <label class="lbl">Public / Publishable Key</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="payment_public_key" placeholder="${t.payment_public_key?"â€¢â€¢â€¢â€¢"+t.payment_public_key.slice(-4):"Paste public keyâ€¦"}">
                  ${t.payment_public_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}
                </div>
              </div>
              <div>
                <label class="lbl">Secret / Private Key</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="payment_secret_key" placeholder="${t.payment_secret_key?"â€¢â€¢â€¢â€¢"+t.payment_secret_key.slice(-4):"Paste secret keyâ€¦"}">
                  ${t.payment_secret_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}
                </div>
              </div>
              <div>
                <label class="lbl">Currency</label>
                <select class="input-field" name="payment_currency">
                  ${["USD","EUR","GBP","NGN","KES","ZAR","GHS","ZMW","TZS","UGX"].map(i=>`<option value="${i}" ${(t.payment_currency||"USD")===i?"selected":""}>${i}</option>`).join("")}
                </select>
              </div>
              <div>
                <label class="lbl">Test / Live Mode</label>
                <select class="input-field" name="payment_mode">
                  <option value="test" ${(t.payment_mode||"test")==="test"?"selected":""}>ðŸ”§ Test Mode (sandbox)</option>
                  <option value="live" ${t.payment_mode==="live"?"selected":""}>ðŸš€ Live Mode (real money)</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Webhook Secret (for payment verification)</label>
                <input type="password" class="input-field" name="payment_webhook_secret" placeholder="${t.payment_webhook_secret?"â€¢â€¢â€¢â€¢"+t.payment_webhook_secret.slice(-4):"Paste webhook secretâ€¦"}">
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
      </div>`,window.lucide&&lucide.createIcons()}catch(a){e&&(e.innerHTML=`<div class="p-6 text-red-400">${s(a.message)}</div>`)}}window.saveDeploySettings=async function(e){e.preventDefault();const a=e.target?.querySelector("[type=submit]");a&&(a.disabled=!0,a.innerHTML="Savingâ€¦");const t=new FormData(e.target),i=Object.fromEntries(t.entries()),o={},n=["github_token","payment_public_key","payment_secret_key","payment_webhook_secret"];for(const[l,d]of Object.entries(i))n.includes(l)?d&&!d.startsWith("â€¢")&&d.trim()!==""&&(o[l]=d.trim()):o[l]=d;const{error:r}=await m.from("site_settings").upsert({id:1,...o});if(a&&(a.disabled=!1,a.innerHTML="ðŸ’¾ Save Deploy & Payment Settings"),r){p(r.message,"error");return}p("Deploy & payment settings saved!"),bt()};async function di(e="deploy"){const{data:a}=await m.from("site_settings").select("deploy_webhook,production_url,github_repo").limit(1).maybeSingle();if(!a?.deploy_webhook)return p("No webhook URL set. Add your deploy webhook in the settings below.","info"),{ok:!1,reason:"missing_webhook"};let t=a.deploy_webhook;try{const i=new URL(t);e==="rebuild"&&i.searchParams.set("rebuild","1"),t=i.toString()}catch{e==="rebuild"&&(t+=(t.includes("?")?"&":"?")+"rebuild=1")}return{ok:!0,settings:a,hookUrl:t}}async function pe(e,a={}){const t=a.version||new Date().toISOString(),i={source:"admin-dashboard",mode:a.mode||"deploy",production_url:a.productionUrl||null,github_repo:a.githubRepo||null,webhook:a.webhook||null,message:a.message||null},{data:o,error:n}=await m.from("deployment_history").insert({version:t,status:e,triggered_by_email:B.user?.email||null,metadata:i,error_message:a.errorMessage||null}).select("id").limit(1).maybeSingle();return{data:o,error:n}}function Pe(e,a,t,i){if(!e)return;e.disabled=a;const o=e.querySelector("p.text-xs.font-black");o&&(o.textContent=a?t:i)}window.triggerDeploy=async function(e){const a=e?.currentTarget||document.querySelector("[data-deploy-btn]");Pe(a,!0,"Deployingâ€¦","Deploy Now");try{const t=await di("deploy");if(!t.ok)return;const{settings:i,hookUrl:o}=t;await pe("preparing",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,message:"Deployment queued from admin UI"});const n=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"deploy",source:"admin-dashboard",at:new Date().toISOString()})});if(n.ok)p("ðŸš€ Deployment triggered! Your site will be live in ~2 minutes."),await pe("deploying",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,message:"Webhook accepted deployment request"}),setTimeout(()=>bt(),400);else{const r=`Webhook returned error: ${n.status}`;p(r,"error"),await pe("failed",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,errorMessage:r})}}catch(t){p("Deploy failed: "+t.message,"error"),await pe("failed",{mode:"deploy",errorMessage:t.message})}finally{Pe(a,!1,"Deployingâ€¦","Deploy Now")}};window.triggerRebuild=async function(e){const a=e?.currentTarget||document.querySelector("[data-rebuild-btn]");Pe(a,!0,"Rebuildingâ€¦","Rebuild Site");try{const t=await di("rebuild");if(!t.ok)return;const{settings:i,hookUrl:o}=t;await pe("building",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,message:"Rebuild requested from admin UI"});const n=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"rebuild",source:"admin-dashboard",at:new Date().toISOString()})});if(n.ok)p("ðŸ”„ Rebuild triggered successfully."),await pe("deploying",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,message:"Webhook accepted rebuild request"}),setTimeout(()=>bt(),400);else{const r=`Rebuild webhook error: ${n.status}`;p(r,"error"),await pe("failed",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:o,errorMessage:r})}}catch(t){p("Rebuild failed: "+t.message,"error"),await pe("failed",{mode:"rebuild",errorMessage:t.message})}finally{Pe(a,!1,"Rebuildingâ€¦","Rebuild Site")}};window.publishAndDeploy=async function(e){const a=e?.currentTarget||document.querySelector("[data-publish-easy-btn]");Pe(a,!0,"Publishingâ€¦","One-Click Publish");try{const t=document.getElementById("deploy-form");if(!t){p("Deploy form is not available. Reload and try again.","error");return}await window.saveDeploySettings({preventDefault(){},target:t}),await window.triggerDeploy()}catch(t){p("Publish failed: "+t.message,"error")}finally{Pe(a,!1,"Publishingâ€¦","One-Click Publish")}};window.reindexSearch=async function(){const e=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=e?.textContent||"";e&&(e.textContent="Reindexingâ€¦");try{const{data:t,error:i}=await m.from("showroom_listings").select("id, updated_at").order("updated_at",{ascending:!1});if(i)return J(i)?p("âš ï¸ Reindex blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):p("Could not load listings to reindex: "+i.message,"error");const o=t||[];if(!o.length){p("No listings to reindex.");return}let n=0,r=0,l=!1;const d=40;for(let c=0;c<o.length;c+=d){const u=o.slice(c,c+d),{error:g}=await m.from("showroom_listings").update({updated_at:new Date().toISOString()}).in("id",u.map(y=>y.id));g?(J(g)&&(l=!0),r+=u.length):n+=u.length,e&&(e.textContent=`Reindexingâ€¦ ${Math.min(c+d,o.length)}/${o.length}`)}if(l){p(`âš ï¸ Reindex partially blocked: database admin role rejected some writes. Re-run the admin permission migration. (${n}/${o.length} done)`,"error");return}p(`Search index rebuilt for ${n} listing${n!==1?"s":""}${r?` (${r} failed)`:""}.`,r?"error":"success")}catch(t){p("Reindex failed: "+t.message,"error")}finally{e&&(e.textContent=a)}};window.syncShowroomToDB=async function(){if(!Array.isArray(ie)||!ie.length){p("No static showroom listings found to sync.","info");return}const e=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=e?.textContent||"";e&&(e.textContent="Syncingâ€¦");try{const{data:t,error:i}=await m.from("showroom_listings").select("property_id");if(i)return J(i)?p("âš ï¸ Sync blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):p("Could not load existing listings: "+i.message,"error");const o=new Set((t||[]).map(u=>u.property_id)),n=ie.filter(u=>u&&u.property_id&&!o.has(u.property_id));if(!n.length){p("Showroom already in sync â€” no new listings to add.");return}let r=0,l=0,d=!1;const c=20;for(let u=0;u<n.length;u+=c){const g=n.slice(u,u+c).map(b=>({property_id:b.property_id,listing_type:b.listing_type||"product",category:b.category||null,subcategory:b.subcategory||null,title:b.title||"Untitled Listing",description:b.description||"",price:parseFloat(b.price)||0,currency:b.currency||"USD",country:b.country||"",country_code:b.country_code||"",state:b.state||"",city:b.city||"",town:b.town||"",product_location:b.product_location||"",latitude:b.latitude??null,longitude:b.longitude??null,property_type:b.property_type||null,listing_status:b.listing_status||"sale",bedrooms:b.bedrooms??null,bathrooms:b.bathrooms??null,building_size:b.building_size||"",land_size:b.land_size||"",parking_spaces:b.parking_spaces??null,furnished:b.furnished||"",features:Array.isArray(b.features)?b.features:[],tags:Array.isArray(b.tags)?b.tags:[],highlights:Array.isArray(b.highlights)?b.highlights:[],seo_keywords:Array.isArray(b.seo_keywords)?b.seo_keywords:[],images:Array.isArray(b.images)?b.images:[],brand:b.brand||null,color:b.color||null,size:b.size||null,condition:b.condition||null,warranty:b.warranty||null,availability_status:b.availability_status||"In Stock",stock_quantity:b.stock_quantity!=null?parseInt(b.stock_quantity,10):null,is_active:b.is_active!==!1,is_featured:!!b.is_featured,is_ai_generated:!!b.is_ai_generated,ai_generated_fields:Array.isArray(b.ai_generated_fields)?b.ai_generated_fields:[],specifications:b.specifications||{},created_at:b.created_at||new Date().toISOString()})),{error:y}=await m.from("showroom_listings").insert(g);y?(J(y)&&(d=!0),l+=g.length):r+=g.length,e&&(e.textContent=`Syncingâ€¦ ${Math.min(u+c,n.length)}/${n.length}`)}if(d){p(`âš ï¸ Sync partially blocked: database admin role rejected some inserts. Re-run the admin permission migration. (${r}/${n.length} added)`,"error");return}p(`Showroom synced: ${r} new listing${r!==1?"s":""} added to the database${l?` (${l} failed)`:""}.`,l?"error":"success")}catch(t){p("Sync failed: "+t.message,"error")}finally{e&&(e.textContent=a)}};window.testGitHubConnection=async function(){const e=document.querySelector("[name=github_username]")?.value?.trim(),a=document.querySelector("[name=github_repo]")?.value?.trim();if(!e||!a){p("Enter your GitHub username and repo name first","info");return}try{const t=await fetch(`https://api.github.com/repos/${e}/${a}`);if(t.ok){const i=await t.json();p(`âœ“ Connected: ${i.full_name} (${i.visibility})`)}else t.status===404?p("Repository not found. Check username and repo name.","error"):p("GitHub API error: "+t.status,"error")}catch{p("Could not reach GitHub API","error")}};window.deployToProduction=window.triggerDeploy;window.rebuildSite=window.triggerRebuild;const ci=30,Y={category:null,page:0,query:""};async function Te(){const e=document.getElementById("content");if(!e)return;await Dt();const a=new Set(at()),t=ki();Y.category||(Y.category=t[0]?.slug||null);const i=0,o=Y.query.trim().toLowerCase(),n=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-xl font-black text-white">Generated Catalog</h2>
        <p class="text-xs text-gray-500 mt-1">Deterministic storefront items. Hiding a listing removes it from the site everywhere â€” including direct links.</p>
      </div>
      <button onclick="catalogResetHidden()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition">Show All Hidden</button>
    </div>`,r=`
    <div class="flex flex-wrap gap-2">
      ${t.map(y=>`<button onclick="catalogSetCategory('${y.slug}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${Y.category===y.slug?"bg-blue-500/20 text-blue-200 border-blue-500/40":"bg-white/5 text-gray-400 border-white/10 hover:text-white"}">${s(y.name)}</button>`).join("")}
    </div>`,l=`
    <div class="flex flex-wrap items-center gap-2">
      <input id="catalog-search-input" class="input-field flex-1 min-w-[220px]" placeholder="Search title, id or subcategoryâ€¦" value="${s(Y.query)}" onkeyup="if (event.key === 'Enter') catalogSearch()">
      <button onclick="catalogSearch()" class="btn-press px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition">Search</button>
    </div>`;let d=[];const c=d.length?d.map(y=>{const b=a.has(y.property_id),h=y.images&&y.images[0]||"/fallback.svg";return`
          <div class="flex items-center gap-3 p-3 rounded-xl border ${b?"border-red-500/25 bg-red-500/5":"border-white/10 bg-white/[0.02]"}">
            <img src="${s(h)}" alt="" class="w-12 h-12 rounded-lg object-cover bg-gray-800 shrink-0" loading="lazy">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-white truncate">${s(y.title)}</p>
              <p class="text-[11px] text-gray-500 truncate">${s(y.property_id)} Â· ${s(y.subcategory||y.category||"")} Â· ${Aa(y.price,"USD")}</p>
            </div>
            ${ee(!b)}
            <button onclick="catalogToggle('${s(y.property_id)}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${b?"bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25":"bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20"}">
              ${b?"Show":"Hide"}
            </button>
          </div>`}).join(""):'<div class="text-center py-16 text-gray-500 text-sm">No catalog items match.</div>',u=o?1:Math.max(1,Math.ceil(i/ci)),g=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <p class="text-xs text-gray-500">${o?`${d.length} match`:`${i.toLocaleString()} items in ${s("")}`} Â· ${a.size} hidden</p>
      <div class="flex items-center gap-2">
        <button onclick="catalogPage(-1)" ${Y.page<=0?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Prev</button>
        <span class="text-xs text-gray-500">Page ${Y.page+1} / ${u}</span>
        <button onclick="catalogPage(1)" ${Y.page>=u-1?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Next</button>
      </div>
    </div>`;e.innerHTML=`
    <div class="space-y-4 fade-in">
      ${n}
      ${r}
      ${l}
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 space-y-2">${c}</div>
      ${g}
    </div>`,window.lucide&&lucide.createIcons()}window.catalogSetCategory=function(e){Y.category=e,Y.page=0,Y.query="",Te()};window.catalogSearch=function(){const e=document.getElementById("catalog-search-input");Y.query=e?e.value:"",Y.page=0,Te()};window.catalogPage=function(e){const a=Y.query.trim()?1:Math.max(1,Math.ceil(0/ci));Y.page=Math.max(0,Math.min(a-1,Y.page+e)),Te()};window.catalogToggle=async function(e){const a=!at().includes(e),t=await wa(e,a);p(a?"Listing hidden from storefront":"Listing restored",t.ok?"success":"info"),Te()};window.catalogResetHidden=async function(){await Ii(),p("All hidden catalog listings restored"),Te()};(function(){if(!(!window.history||!window.history.pushState)){try{window.history.replaceState({adminGuard:1},document.title,window.location.href),window.history.pushState({adminGuard:2},document.title,window.location.href)}catch{return}window.addEventListener("popstate",function(e){e.state&&e.state.adminGuard===1&&window.location.replace("/")})}})();async function ga(){window.lucide&&lucide.createIcons(),Ca(),await Ki(),m.auth.onAuthStateChange((e,a)=>{if(e==="SIGNED_OUT"){B.user=null;const t=document.getElementById("login-screen");t&&(t.style.display="flex")}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ga):ga();
