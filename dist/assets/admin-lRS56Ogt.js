import"./modulepreload-polyfill-B5Qt9EMX.js";import{_ as ji,S as se}from"./showroom-data-Dx7pQsXv.js";import{supabase as b}from"./supabase-client-nvpjTmO6.js";import{C as Qa,g as Xa,a as je}from"./country-data-BCWopR2U.js";import{A as Za}from"./localization-_8vQPIoq.js";import{patchLocalShowroomListing as Vt,getLocalShowroomListingById as De,removeLocalShowroomListing as ot,upsertLocalShowroomListing as ht,listLocalShowroomListings as St}from"./local-showroom-store-mzP0nSoS.js";import{g as Oi,s as en,l as tn,a as an,b as nn}from"./payment-settings-pG5W3oFr.js";import{P as qi,a as Hi,T as Gi,M as Vi}from"./motorhome-data-CupbOvk0.js";import{getCatalogCategories as sn}from"./catalog-BaQ2rKyX.js";import{i as on}from"./promo-backgrounds-KEhHWHvl.js";import{i as Wi,D as rn}from"./site-content-CQxtbv3j.js";import{M as ln,n as dn,a as cn}from"./categories-5zVhBEjq.js";import{l as zi,v as Ki}from"./video-frames-mPOUp41n.js";import{saveCatalogHidden as Oe,loadHiddenCatalogIds as ri,getHiddenCatalogIds as $t,resetHiddenCatalogIds as un}from"./catalog-hidden-store-CPivWtWH.js";/* empty css                                       */const R=1,q=5e6,pn=[{id:"prod-smartphone",listingType:"product",category:"Phones",subcategory:"Smartphones",label:"Flagship Smartphone",brand:"Global Mobile",model:"X Pro",color:"Midnight Black",size:"6.7-inch",condition:"New",features:["5G connectivity","OLED display","Fast charging","Unlocked","Premium cameras"],highlights:["Retail-ready packaging","Strong search demand","Ideal for global shipping"],keywords:["smartphone","mobile phone","5g"],descriptionType:"phone"},{id:"prod-laptop",listingType:"product",category:"Computers & Laptops",subcategory:"Laptops",label:"Performance Laptop",brand:"NorthBridge",model:"Studio 14",color:"Silver",size:"14-inch",condition:"New",features:["Fast processor","SSD storage","Long battery life","Portable chassis","Business-ready design"],highlights:["Suitable for work and study","Premium margin band","Global audience appeal"],keywords:["laptop","notebook","computer"],descriptionType:"laptop"},{id:"prod-tv",listingType:"product",category:"Electronics",subcategory:"Smart TVs",label:"4K Smart TV",brand:"VistaHome",model:"UltraView",color:"Black",size:"65-inch",condition:"New",features:["4K panel","Streaming apps","HDR support","Voice control","Slim bezel"],highlights:["Living-room centerpiece","Popular premium electronics segment"],keywords:["tv","smart tv","home electronics"],descriptionType:"electronics"},{id:"prod-watch",listingType:"product",category:"Watches",subcategory:"Luxury Watches",label:"Luxury Wristwatch",brand:"Aurelius",model:"Chrono 8",color:"Gold / Black",size:"42mm",condition:"New",features:["Precision movement","Premium case","Gift-ready presentation","Water resistance","Collector appeal"],highlights:["High perceived value","Strong gifting category"],keywords:["watch","luxury watch","timepiece"],descriptionType:"luxury"},{id:"prod-jewelry",listingType:"product",category:"Jewelry",subcategory:"Fine Jewelry",label:"Fine Jewelry Set",brand:"Maison Valeur",model:"Signature Set",color:"Gold",size:"Adjustable",condition:"New",features:["Premium finish","Gift packaging","Occasion-ready","Elegant styling"],highlights:["High-value presentation","Wedding and celebration demand"],keywords:["jewelry","necklace","bracelet"],descriptionType:"luxury"},{id:"prod-handbag",listingType:"product",category:"Bags & Accessories",subcategory:"Designer Bags",label:"Designer Handbag",brand:"Rue Maison",model:"Carry All",color:"Tan",size:"Medium",condition:"New",features:["Structured silhouette","Premium hardware","Travel-friendly storage","Retail-ready finish"],highlights:["Fashion-forward listing","Broad international demand"],keywords:["handbag","designer bag","accessories"],descriptionType:"fashion"},{id:"prod-sneakers",listingType:"product",category:"Shoes",subcategory:"Premium Sneakers",label:"Premium Sneakers",brand:"RunNorth",model:"Air Flex",color:"White",size:"EU 42",condition:"New",features:["Comfort cushioning","Streetwear styling","Durable outsole","Daily wear ready"],highlights:["High-conversion category","Easy multi-country merchandising"],keywords:["sneakers","shoes","fashion"],descriptionType:"fashion"},{id:"prod-sofa",listingType:"product",category:"Furniture",subcategory:"Living Room",label:"Luxury Sofa Set",brand:"Grand Habitat",model:"Residence 3-Piece",color:"Sand Beige",size:"3-Piece Set",condition:"New",features:["Premium upholstery","Statement living-room piece","Comfort seating","Interior-ready styling"],highlights:["Large-ticket home category","Ideal for premium households"],keywords:["sofa","furniture","living room"],descriptionType:"home"},{id:"prod-generator",listingType:"product",category:"Home & Kitchen",subcategory:"Power Solutions",label:"Backup Power Generator",brand:"VoltWorks",model:"SilentMax",color:"Graphite",size:"7.5kVA",condition:"New",features:["Reliable backup power","Low-noise housing","Residential and business use","Heavy-duty build"],highlights:["Practical high-demand utility item","Useful in many markets"],keywords:["generator","power","backup power"],descriptionType:"industrial"},{id:"prod-drone",listingType:"product",category:"Cameras & Photography",subcategory:"Drones",label:"Pro Camera Drone",brand:"SkyFrame",model:"Aerial 4K",color:"Gray",size:"Foldable",condition:"New",features:["4K stabilized video","GPS return home","Portable folding frame","Creator-ready footage"],highlights:["Strong visual listing appeal","Premium creator equipment"],keywords:["drone","camera drone","aerial"],descriptionType:"electronics"},{id:"prod-grocery",listingType:"product",category:"Food & Groceries",subcategory:"Family Essentials",label:"Family Grocery Bundle",brand:"Market Select",model:"Household Pack",color:"Mixed",size:"Bulk Pack",condition:"New",features:["Everyday essentials","Bulk value","Family sized","Easy repeat orders"],highlights:["Fast-moving everyday goods","Useful across broad regions"],keywords:["groceries","food bundle","household essentials"],descriptionType:"daily"},{id:"prod-scale-house",listingType:"product",category:"Home & Kitchen",subcategory:"Model Houses",label:"Architectural Model House",brand:"Studio Form",model:"Estate Miniature",color:"Natural Wood",size:"1:50 Scale",condition:"New",features:["Collector display piece","Detailed craftsmanship","Interior decor appeal","Gift-ready packaging"],highlights:["Supports the model-house use case","Works for decor and collector audiences"],keywords:["model house","architectural model","collector decor"],descriptionType:"home"},{id:"veh-sedan",listingType:"product",category:"Cars",subcategory:"Sedans",label:"Executive Sedan",brand:"Summit Motors",model:"S Line",color:"Pearl White",size:"Mid-size",condition:"Used - Like New",features:["Comfortable cabin","Road-trip ready","Well-maintained presentation","Family and executive appeal"],highlights:["Vehicle posts support 24-image galleries","Map-ready listing"],keywords:["car","sedan","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-suv",listingType:"product",category:"Cars",subcategory:"SUVs",label:"Family SUV",brand:"Frontier Auto",model:"Terrain X",color:"Obsidian",size:"7-Seater",condition:"Used - Like New",features:["Spacious seating","Utility-focused cargo room","Suitable for families","Road and city versatility"],highlights:["High-demand automotive segment","Works well with showroom map"],keywords:["suv","family car","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-luxury",listingType:"product",category:"Luxury Cars",subcategory:"Luxury Vehicles",label:"Luxury Performance Car",brand:"Regal Automotive",model:"Imperium GT",color:"Metallic Black",size:"Coupe",condition:"Used - Like New",features:["Prestige brand positioning","Performance styling","Collector-level appeal","Premium interior"],highlights:["Supports the requested high-ticket range","Designed for showroom-style luxury listings"],keywords:["luxury car","sports car","supercar"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-motorcycle",listingType:"product",category:"Motorcycles",subcategory:"Street Bikes",label:"Sport Motorcycle",brand:"Velocity Moto",model:"R 900",color:"Red",size:"900cc",condition:"Used - Like New",features:["Agile handling","Performance design","Lifestyle buyer appeal","Weekend-ready machine"],highlights:["Automotive category with image-rich display"],keywords:["motorcycle","bike","sport bike"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-commercial",listingType:"product",category:"Commercial Vehicles",subcategory:"Utility Vehicles",label:"Commercial Utility Vehicle",brand:"FleetCore",model:"CargoPro",color:"White",size:"Long wheelbase",condition:"Used - Good",features:["Business-ready load space","Fleet-friendly purchase","Service history presentation","Commercial utility"],highlights:["Suitable for business buyers","Map-ready logistics listing"],keywords:["commercial vehicle","cargo van","fleet"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-boat",listingType:"product",category:"Boats & Marine",subcategory:"Leisure Boats",label:"Leisure Boat",brand:"BlueHarbor",model:"Coastline 28",color:"Navy / White",size:"28 ft",condition:"Used - Like New",features:["Marina-ready presentation","Leisure and charter appeal","Premium leisure category"],highlights:["Large-format gallery support","High-ticket recreational listing"],keywords:["boat","marine","yacht"],requiredImageCount:24,descriptionType:"vehicle"}],mn=[{id:"prop-apartment",listingType:"property",category:"Real Estate",subcategory:"Apartments",label:"City Apartment",propertyType:"Apartment",bedrooms:2,bathrooms:2,buildingSize:"1,150 sqft",landSize:"",furnished:"Furnished",features:["Secure access","Modern kitchen","Prime urban access","Balcony or city views"],highlights:["Strong urban demand","Good for short and long stay buyers"],keywords:["apartment","real estate","city home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-condo",listingType:"property",category:"Real Estate",subcategory:"Condos",label:"Modern Condo",propertyType:"Condo",bedrooms:3,bathrooms:2,buildingSize:"1,450 sqft",landSize:"",furnished:"Furnished",features:["Managed building","Amenity access","Contemporary finish","Secure parking"],highlights:["Works across major global markets"],keywords:["condo","property","home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-townhouse",listingType:"property",category:"Real Estate",subcategory:"Townhouses",label:"Townhouse Residence",propertyType:"Townhouse",bedrooms:4,bathrooms:3,buildingSize:"2,000 sqft",landSize:"0.08 acres",furnished:"Unfurnished",features:["Multi-level layout","Family-ready plan","Private entry","Parking included"],highlights:["Popular residential ownership format"],keywords:["townhouse","residence","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-villa",listingType:"property",category:"Real Estate",subcategory:"Villas",label:"Private Villa",propertyType:"Villa",bedrooms:5,bathrooms:5,buildingSize:"4,800 sqft",landSize:"0.4 acres",furnished:"Furnished",features:["Private outdoor space","Premium architecture","Luxury entertaining zones","Prestige location potential"],highlights:["Premium property tier","Designed for international buyers"],keywords:["villa","luxury property","real estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-mansion",listingType:"property",category:"Real Estate",subcategory:"Mansions",label:"Luxury Mansion",propertyType:"Mansion",bedrooms:8,bathrooms:10,buildingSize:"12,000 sqft",landSize:"1.2 acres",furnished:"Furnished",features:["Grand entrance","High-end interior finishes","Staff or guest quarters","Statement curb appeal"],highlights:["Matches the mansion requirement directly","Supports high-ticket luxury listings"],keywords:["mansion","estate","luxury home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-beach",listingType:"property",category:"Real Estate",subcategory:"Beach Houses",label:"Beachfront House",propertyType:"Beach House",bedrooms:4,bathrooms:4,buildingSize:"3,600 sqft",landSize:"0.25 acres",furnished:"Furnished",features:["Waterfront views","Outdoor leisure space","Vacation-rental appeal","Premium lifestyle positioning"],highlights:["Ideal for tourism and lifestyle markets"],keywords:["beach house","waterfront home","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-farm",listingType:"property",category:"Real Estate",subcategory:"Farm Houses",label:"Farm House Estate",propertyType:"Farm House",bedrooms:4,bathrooms:3,buildingSize:"3,100 sqft",landSize:"5 acres",furnished:"Unfurnished",features:["Land-rich asset","Agricultural potential","Quiet residential use","Outbuilding opportunity"],highlights:["Suitable for rural and suburban regions"],keywords:["farm house","landed property","estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-commercial",listingType:"property",category:"Real Estate",subcategory:"Commercial Buildings",label:"Commercial Building",propertyType:"Commercial Building",bedrooms:0,bathrooms:4,buildingSize:"8,500 sqft",landSize:"0.35 acres",furnished:"Unfurnished",features:["Business district potential","Mixed-use flexibility","Visible frontage","Investor-ready asset class"],highlights:["Attractive for business buyers and investors"],keywords:["commercial building","office","investment property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-hotel",listingType:"property",category:"Real Estate",subcategory:"Hotels",label:"Boutique Hotel",propertyType:"Hotel",bedrooms:18,bathrooms:20,buildingSize:"15,000 sqft",landSize:"0.75 acres",furnished:"Furnished",features:["Hospitality-ready layout","Guest-focused amenities","Tourism and corporate appeal","Revenue asset potential"],highlights:["Supports hospitality listings globally"],keywords:["hotel","hospitality","investment"],requiredImageCount:24,descriptionType:"property"},{id:"prop-land",listingType:"property",category:"Real Estate",subcategory:"Land",label:"Development Land",propertyType:"Land",bedrooms:0,bathrooms:0,buildingSize:"",landSize:"10 acres",furnished:"",features:["Development potential","Flexible use case","Long-term investment appeal","Location-led value"],highlights:["Useful for land banking and development"],keywords:["land","plot","development"],requiredImageCount:24,descriptionType:"property"}],Yi=[...pn,...mn];function li(e){return Qa[e]||"USD"}function Ji(e,t){return Yi.filter(i=>i.listingType!==e?!1:t?i.category===t:!0)}function gn(e,t){const i=Math.max(R,Math.min(q,Number(e)||R));return new Intl.NumberFormat("en-US",{style:"currency",currency:t,maximumFractionDigits:0}).format(i)}function bn(e,t,i,a,n){const s=gn(a,i);return e.descriptionType==="vehicle"?`${e.label} listed at ${s}. This template is intended to present a complete automotive post with exterior, interior, condition, performance, and gallery details in a clean showroom-style format.`:e.descriptionType==="property"?`${e.label} located in ${n}. Offered at ${s}, this property template is designed for a complete real-estate presentation with map-ready location data, rich visual gallery coverage, and buyer-friendly highlights covering layout, lifestyle, and investment value.`:e.descriptionType==="phone"?`${e.label} listed at ${s}. The template focuses on a clean premium device presentation with brand, model, condition, core features, and strong online merchandising copy.`:e.descriptionType==="laptop"?`${e.label} listed at ${s}. Built for marketplace listings that need clear performance positioning, specification highlights, and an easy-to-scan description for students, professionals, and remote workers.`:e.descriptionType==="luxury"?`${e.label} listed at ${s}. This template supports high-value presentation with polished positioning, premium selling points, and a strong showroom-style description.`:e.descriptionType==="fashion"?`${e.label} listed at ${s}. This product template highlights styling, quality, and day-to-day appeal while keeping the listing easy to customize.`:e.descriptionType==="home"?`${e.label} listed at ${s}. The listing copy is structured for shoppers looking for quality presentation, reliable detail, and visual merchandising support.`:e.descriptionType==="industrial"?`${e.label} listed at ${s}. This template emphasizes practical use, dependable performance, and business or household value in a straightforward format.`:e.descriptionType==="daily"?`${e.label} listed at ${s}. The copy is designed for repeat-buy categories with clear value messaging and broad buyer appeal.`:`${e.label} listed at ${s}. This template generates a clean, marketable listing with ready-made highlights, keywords, and presentation details.`}function Qi({templateId:e,listingType:t,category:i,countryCode:a,currency:n,price:s}){const o=Yi.find(m=>m.id===e&&m.listingType===t);if(!o)return null;const r=Xa(a)||je[0],l=n||li(r.code),c=[r.name].filter(Boolean).join(", "),u={category:o.category||i||(t==="property"?"Real Estate":"Other"),subcategory:o.subcategory||o.label,title:t==="property"?`${o.label} in ${r.name}`:o.label,description:bn(o,r,l,s,c),currency:l,features:[...o.features],highlights:[...o.highlights||[]],seo_keywords:[...new Set([o.category,o.subcategory,o.label,...t==="property"?[r.name]:[],...o.keywords||[]].filter(Boolean))],requiredImageCount:o.requiredImageCount||0};return t==="property"?{...u,country:r.name,country_code:r.code,product_location:r.name,property_type:o.propertyType||o.label,bedrooms:o.bedrooms??null,bathrooms:o.bathrooms??null,building_size:o.buildingSize||"",land_size:o.landSize||"",furnished:o.furnished||""}:{...u,brand:o.brand||"",model:o.model||"",color:o.color||"",size:o.size||"",condition:o.condition||"New"}}let qt=null;async function yn(){return qt||(qt=ji(()=>import("./pdf-ksa_hnld.js"),[]).then(e=>{try{e.GlobalWorkerOptions.workerSrc=new URL("/assets/pdf.worker.min-yatZIOMy.mjs",import.meta.url).toString()}catch{}return e})),qt}function hn(e,t){return e.toDataURL("image/jpeg",t)}async function fn(e,t){const i=e.getViewport({scale:1}),a=Math.min(3,Math.max(.5,t/Math.max(i.width,i.height))),n=e.getViewport({scale:a}),s=document.createElement("canvas");s.width=Math.max(1,Math.round(n.width)),s.height=Math.max(1,Math.round(n.height));const o=s.getContext("2d",{alpha:!1});return o.fillStyle="#ffffff",o.fillRect(0,0,s.width,s.height),await e.render({canvasContext:o,viewport:n}).promise,hn(s,.78)}async function Xi(e,{maxDim:t=1300,maxPages:i=0,onProgress:a=()=>{}}={}){const s=await(await yn()).getDocument({url:e,useSystemFonts:!0,isEvalSupported:!1}).promise,o=s.numPages,r=i>0?Math.min(o,i):o,l=[];try{for(let c=1;c<=r;c++){a(c,r);const u=await s.getPage(c);l.push(await fn(u,t))}}finally{try{await s.destroy()}catch{}}return l}function qe(e){const t=String(e||"").toLowerCase();return t.endsWith(".pdf")||t.includes(".pdf?")||t.includes(".pdf#")}const Zi="weverseonlineshop@gmail.com",ea="Weverse Online Shop",ta="GLOBAL SHOPPING â€¢ WORLDWIDE DELIVERY",vn="https://wttnvwpoqmbxryivcerf.supabase.co".replace(/\/$/,""),wn=`${vn}/functions/v1/ai-admin-assistant`,xn=[{group:"Main",items:[{id:"dashboard",label:"Dashboard",icon:"layout-dashboard"},{id:"products",label:"Products",icon:"package"},{id:"content-settings",label:"Content Settings",icon:"file-cog"},{id:"properties",label:"Properties",icon:"home"},{id:"catalog",label:"Catalog Manager",icon:"boxes"},{id:"orders",label:"Orders",icon:"shopping-bag"},{id:"customers",label:"Customers",icon:"users"},{id:"reviews",label:"Reviews",icon:"star"},{id:"messages",label:"Messages",icon:"message-circle"},{id:"coupons",label:"Coupons",icon:"ticket"},{id:"ads",label:"Advertisements",icon:"megaphone"},{id:"notifications",label:"Notifications",icon:"bell"}]},{group:"Configuration",items:[{id:"ai",label:"AI Assistant",icon:"sparkles"},{id:"payment-settings",label:"Payment Settings",icon:"credit-card"},{id:"ai-settings",label:"AI Settings",icon:"bot"},{id:"homepage-branding",label:"Homepage Branding",icon:"image"},{id:"promo-bg",label:"Promo & Backgrounds",icon:"image"},{id:"brand",label:"Brand Manager",icon:"palette"},{id:"content",label:"Content Manager",icon:"file-text"},{id:"seo",label:"SEO Manager",icon:"search"},{id:"email",label:"Email Settings",icon:"mail"},{id:"analytics",label:"Analytics",icon:"bar-chart-3"},{id:"security",label:"Security",icon:"shield"},{id:"activity",label:"Activity Logs",icon:"activity"},{id:"backup",label:"Backup & Restore",icon:"database"},{id:"settings",label:"Settings",icon:"settings"},{id:"publish",label:"Publish & Deploy",icon:"rocket"}]}],_n={dashboard:"Dashboard",products:"Products Manager",properties:"Properties Manager",catalog:"Catalog Manager",orders:"Orders Manager",customers:"Customers Manager",reviews:"Reviews Manager",messages:"Messages & Support",coupons:"Coupons Manager",ads:"Advertisement Manager","ai-settings":"AI Settings",content:"Content Manager","content-settings":"Content Settings",ai:"AI Assistant","homepage-branding":"Homepage Branding","promo-bg":"Promo & Backgrounds",brand:"Brand Manager","payment-settings":"Payment Settings",seo:"SEO Manager",email:"Email Settings",analytics:"Analytics",security:"Security",activity:"Activity Logs",backup:"Backup & Restore",settings:"Settings",publish:"Publish & Deploy"},ia=[...Za].sort();let T={user:null,section:"dashboard"};function d(e){if(e==null)return"";const t=document.createElement("div");return t.textContent=String(e),t.innerHTML}function aa(e,t="USD"){return`${(parseFloat(e)||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})} ${t}`}function oe(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"â€”"}function Se(e){return e?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"â€”"}function Pt(){return"W-"+String(Date.now()).slice(-6)+Math.floor(Math.random()*1e3).toString().padStart(3,"0")}const kn=["id","property_id","listing_type","category","subcategory","title","description","price","price_period","currency","country","country_code","state","city","town","product_location","latitude","longitude","bedrooms","bathrooms","building_size","land_size","parking_spaces","property_type","furnished","listing_status","images","features","tags","highlights","seo_keywords","specifications","brand","color","size","condition","warranty","shipping_info","delivery_estimate","weight","dimensions","storage_options","ram_options","color_options","availability_status","stock_quantity","sku","is_active","is_featured","is_ai_generated","ai_generated_fields","rating","rating_count","favorite_count","review_count","video","video_url","approval_status","published_at","created_at","updated_at","real_price","year_built","year_renovated","half_bathrooms","floors","garage","zip_code","address","landmarks","interior_features","exterior_features","home_systems","legal_info","risk_notes","floor_plan","nearby_area","verification_status","verification_date","inspection_info","documents","language_info"];function be(e){const t={};if(!e||typeof e!="object")return t;for(const i of kn)i in e&&(t[i]=e[i]);return t}function g(e,t="success"){const i=document.getElementById("toast"),a=document.getElementById("toast-msg"),n=i.querySelector("i[data-lucide]");if(!i||!a)return;a.textContent=e;const s={success:"check-circle",error:"alert-circle",info:"info"},o={success:"text-emerald-400",error:"text-red-400",info:"text-blue-400"};n&&(n.setAttribute("data-lucide",s[t]||"info"),n.className=`w-4 h-4 shrink-0 ${o[t]||"text-blue-400"}`),i.style.transform="translateY(0)",i.style.opacity="1",window.lucide&&lucide.createIcons(),clearTimeout(i._t),i._t=setTimeout(()=>{i.style.transform="translateY(20px)",i.style.opacity="0"},3e3)}function ke(e){return!e||typeof e!="string"?!1:/^data:video\//i.test(e)?!0:e.startsWith("blob:")?!1:/\.(mp4|webm|mov|m4v|avi|mkv|ogv)(\?|#|$)/i.test(e)}function Ce(e){return e&&e.type&&e.type.startsWith("video/")}function Q(e){const t={pending_verification:["bg-amber-500/10 text-amber-400 border-amber-500/20","Pending"],approved:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Approved"],rejected:["bg-red-500/10 text-red-400 border-red-500/20","Rejected"],payment_approved:["bg-blue-500/10 text-blue-400 border-blue-500/20","Paid"],order_placed:["bg-amber-500/10 text-amber-400 border-amber-500/20","Placed"],processing:["bg-indigo-500/10 text-indigo-400 border-indigo-500/20","Processing"],shipped:["bg-violet-500/10 text-violet-400 border-violet-500/20","Shipped"],in_transit:["bg-violet-500/10 text-violet-400 border-violet-500/20","In Transit"],out_for_delivery:["bg-cyan-500/10 text-cyan-400 border-cyan-500/20","Out for Delivery"],delivered:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Delivered"],cancelled:["bg-red-500/10 text-red-400 border-red-500/20","Cancelled"],active:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],inactive:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"],sale:["bg-blue-500/10 text-blue-400 border-blue-500/20","For Sale"],rent:["bg-violet-500/10 text-violet-400 border-violet-500/20","For Rent"],true:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],false:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"]},[i,a]=t[String(e)]||["bg-gray-500/10 text-gray-400 border-gray-500/20",d(e)||"â€”"];return`<span class="badge ${i}">${a}</span>`}function re(){document.getElementById("modal-container").innerHTML=""}function U(e){document.getElementById("modal-container").innerHTML=e,window.lucide&&lucide.createIcons()}window.closeModal=re;window.openModal=U;function z(e,t,i,a,n=""){const s={blue:"bg-blue-500/10 text-blue-400 border-blue-500/15",amber:"bg-amber-500/10 text-amber-400 border-amber-500/15",emerald:"bg-emerald-500/10 text-emerald-400 border-emerald-500/15",red:"bg-red-500/10 text-red-400 border-red-500/15",violet:"bg-violet-500/10 text-violet-400 border-violet-500/15",blue:"bg-blue-500/10 text-blue-400 border-blue-500/15"};return`<div class="stat-card glass-soft border border-blue-500/15 rounded-3xl p-5">
    <div class="flex items-start justify-between mb-3">
      <div class="p-3 ${s[a]||s.blue} rounded-2xl border"><i data-lucide="${i}" class="w-5 h-5"></i></div>
    </div>
    <p class="text-3xl font-black text-white">${d(t)}</p>
    <p class="text-xs text-gray-500 uppercase tracking-wide mt-1 font-bold">${d(e)}</p>
    ${n?`<p class="text-xs text-gray-600 mt-1">${d(n)}</p>`:""}
  </div>`}function He(){return'<div class="flex items-center justify-center py-24"><div class="flex items-center gap-3 text-gray-500 text-sm"><i data-lucide="loader-2" class="w-5 h-5 animate-spin text-blue-400"></i> Loadingâ€¦</div></div>'}function Ie(e,t,i,a=""){return`<div class="flex flex-col items-center justify-center py-20 text-center"><div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4"><i data-lucide="${e}" class="w-8 h-8 text-blue-400"></i></div><h3 class="text-base font-black text-white mb-1">${d(t)}</h3><p class="text-sm text-gray-500 max-w-xs">${d(i)}</p>${a?`<div class="mt-5">${a}</div>`:""}</div>`}function na(){const e=document.getElementById("sidebar-nav");e&&(e.innerHTML=xn.map(t=>`
    <div>
      <span class="section-label">${t.group}</span>
      ${t.items.map(i=>`
        <button class="nav-item ${T.section===i.id?"active":""} w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold rounded-xl" onclick="navigate('${i.id}')">
          <i data-lucide="${i.icon}" class="w-4 h-4 shrink-0"></i>
          <span>${i.label}</span>
        </button>`).join("")}
    </div>`).join(""),window.lucide&&lucide.createIcons())}window.navigate=function(e){T.section=e;const t=_n[e]||e,i=document.getElementById("page-title");i&&(i.textContent=t),na(),closeSidebar();const a=document.getElementById("content");a&&(a.innerHTML=He()),window.lucide&&lucide.createIcons(),({dashboard:Dn,products:A,properties:Rt,catalog:Ye,orders:Ra,customers:Ms,reviews:dt,messages:Na,coupons:Nt,ads:ze,notifications:Ns,ai:Sn,"ai-settings":ja,"homepage-branding":Ut,"promo-bg":st,content:Hs,"content-settings":Ha,seo:Qs,email:Xs,analytics:Js,security:Dt,activity:Zs,brand:Ke,"payment-settings":oi,backup:eo,settings:to,publish:jt}[e]||(()=>{const o=document.getElementById("content");o&&(o.innerHTML=Ie("construction","Coming Soon",`${t} is being built.`))}))()};async function Sn(){const e=document.getElementById("content");e&&(e.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}window.openSidebar=()=>{document.getElementById("sidebar").classList.add("open"),document.getElementById("sidebar-overlay").classList.remove("hidden")};window.closeSidebar=()=>{document.getElementById("sidebar").classList.remove("open"),document.getElementById("sidebar-overlay").classList.add("hidden")};document.getElementById("close-sidebar")?.addEventListener("click",closeSidebar);const Re="kco_admin_remember",di="kco_login_attempts",Wt=5,$n=15*60*1e3;function G(e){const t=document.getElementById("login-error"),i=document.getElementById("login-error-text");!t||!i||(i.textContent=e,t.classList.remove("hidden"),document.getElementById("login-success")?.classList.add("hidden"),window.lucide&&lucide.createIcons())}function Pn(e){const t=document.getElementById("login-success"),i=document.getElementById("login-success-text");!t||!i||(i.textContent=e,t.classList.remove("hidden"),document.getElementById("login-error")?.classList.add("hidden"))}function Et(){document.getElementById("login-error")?.classList.add("hidden"),document.getElementById("login-success")?.classList.add("hidden")}function rt(e){return String(e||"").trim().toLowerCase()}function En(){try{const e=JSON.parse(localStorage.getItem(Re)||"{}");e?.email&&!rt(e.email)&&localStorage.removeItem(Re)}catch{localStorage.removeItem(Re)}}function An(){try{const e=JSON.parse(localStorage.getItem(Re)||"{}");return rt(e?.email)}catch{return""}}function ci(){En();const e=An(),t=document.getElementById("login-email");t&&(t.value=e||t.value||Zi,t.removeAttribute("readonly"));const i=document.getElementById("reset-email");i&&(i.value=e||i.value||"",i.removeAttribute("readonly"))}function Cn(){return`${window.location.origin}/admin.html`}function Le(e){const t=document.getElementById("login-header-title"),i=document.getElementById("login-header-icon");document.getElementById("login-form")?.classList.toggle("hidden",e!=="login"),document.getElementById("twofa-form")?.classList.toggle("hidden",e!=="2fa"),document.getElementById("forgot-form")?.classList.toggle("hidden",e!=="forgot"),Et(),e==="login"&&(t&&(t.textContent="Admin Access"),i&&i.setAttribute("data-lucide","shield-check")),e==="2fa"&&(t&&(t.textContent="Two-Factor Auth"),i&&i.setAttribute("data-lucide","smartphone")),e==="forgot"&&(t&&(t.textContent="Reset Password"),i&&i.setAttribute("data-lucide","mail")),window.lucide&&lucide.createIcons()}function j(e,t,i=""){const a=document.getElementById(e);a&&(a.disabled=t,t?a.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline-block mr-1"></i> Please waitâ€¦':i&&(a.innerHTML=i),window.lucide&&lucide.createIcons())}function sa(){try{return JSON.parse(localStorage.getItem(di)||'{"count":0}')}catch{return{count:0}}}function oa(){const e=sa();return e.count=(e.count||0)+1,e.count>=Wt&&(e.lockedUntil=Date.now()+$n),localStorage.setItem(di,JSON.stringify(e)),e}function ra(){localStorage.removeItem(di)}function la(){const e=sa();if(!e.lockedUntil)return null;const t=e.lockedUntil-Date.now();return t<=0?(ra(),null):Math.ceil(t/6e4)}async function ce(e,t,i={}){try{await b.from("admin_security_logs").insert({user_id:e,event_type:t,ip_address:await In(),user_agent:navigator.userAgent.slice(0,200),...i})}catch{}}async function In(){try{return(await(await fetch("https://api64.ipify.org?format=json",{signal:AbortSignal.timeout(3e3)})).json()).ip||"unknown"}catch{return"unknown"}}async function da(e){if(!e)return!1;let t=!1,i=!1;try{const{data:a}=await b.rpc("is_current_user_admin");t=!0,i=!!a}catch{t=!1}return t?i:rt(e.email)===Zi}async function Tn(){const e=window.location.hash;if(e.includes("type=recovery")||e.includes("access_token")){ft(),Fn();return}const{data:{session:t}}=await b.auth.getSession();if(t?.user&&await da(t.user)){const{data:{currentUser:a}}=await b.auth.getUser(),n=await b.auth.mfa.getAuthenticatorAssuranceLevel(),s=n.data?.currentLevel;if(n.data?.nextLevel==="aal2"&&s!=="aal2"){T.user=t.user,ft(),Le("2fa"),ui();return}T.user=t.user,At();return}Ln()}function ft(){const e=document.getElementById("login-screen");e&&(e.style.display="flex")}function Ln(){ft(),Le("login"),ci(),ca(),ua(),ui(),Mn();const e=la();e&&(G(`Too many failed attempts. Try again in ${e} minute${e>1?"s":""}.`),document.getElementById("login-btn").disabled=!0)}function Mn(){document.getElementById("toggle-pw")?.addEventListener("click",()=>{const e=document.getElementById("login-password"),t=document.querySelector("#toggle-pw i");e&&(e.type=e.type==="password"?"text":"password",t&&t.setAttribute("data-lucide",e.type==="password"?"eye":"eye-off"),window.lucide&&lucide.createIcons())})}function ca(){const e=document.getElementById("login-form");!e||e._bound||(e._bound=!0,e.addEventListener("submit",Bn),document.getElementById("forgot-pw-btn")?.addEventListener("click",()=>Le("forgot")))}async function Bn(e){e.preventDefault();const t=la();if(t){G(`Account locked. Try again in ${t} minute${t>1?"s":""}.`);return}const i=document.getElementById("login-email"),a=rt(i?.value);if(!a){G("Enter your admin email address."),j("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const n=document.getElementById("login-password").value,s=document.getElementById("remember-me")?.checked;j("login-btn",!0),Et();const{data:o,error:r}=await b.auth.signInWithPassword({email:a,password:n});if(r||!o.user){const f=String(r?.message||"").toLowerCase();if(f.includes("missing supabase credentials")||f.includes("authentication service is unavailable")){G("Authentication is temporarily unavailable due to configuration. Please contact support."),j("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(f.includes("failed to fetch")||f.includes("network request failed")){G("Network error while signing in. Check your connection and try again."),j("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(f.includes("email not confirmed")){G("Your admin email is not confirmed yet. Open your verification email and confirm first."),j("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const h=oa(),p=Wt-h.count,y=h.lockedUntil?`Account locked for 15 minutes after ${Wt} failed attempts.`:`Invalid email or password. ${p>0?p+" attempt"+(p!==1?"s":"")+" remaining.":""}`;G(y),j("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),o?.user&&await ce(o.user.id,"login_failed",{metadata:{reason:"wrong_password"}});return}if(!await da(o.user)){await b.auth.signOut(),G(`Access denied for ${o.user.email}. This account is signed in but does not have administrator privileges.`),j("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),await ce(o.user.id,"login_denied",{metadata:{reason:"not_admin"}});return}if(s?localStorage.setItem(Re,JSON.stringify({email:a,ts:Date.now()})):localStorage.removeItem(Re),ra(),T.user=o.user,(await b.auth.mfa.getAuthenticatorAssuranceLevel()).data?.nextLevel==="aal2"){j("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),Le("2fa"),ui(),setTimeout(()=>document.getElementById("totp-code")?.focus(),100);return}await ce(o.user.id,"login_success"),j("login-btn",!1),At()}function ui(){const e=document.getElementById("verify-2fa-btn");e&&!e._bound&&(e._bound=!0,e.addEventListener("click",$i));const t=document.getElementById("totp-code");t&&!t._bound&&(t._bound=!0,t.addEventListener("input",a=>{a.target.value=a.target.value.replace(/\D/g,"").slice(0,6),a.target.value.length===6&&$i()})),document.getElementById("cancel-2fa-btn")?.addEventListener("click",async()=>{await b.auth.signOut(),T.user=null,Le("login")}),document.getElementById("use-backup-btn")?.addEventListener("click",()=>{document.getElementById("backup-code-wrap")?.classList.toggle("hidden");const n=document.getElementById("backup-code");n&&n.focus()});const i=document.getElementById("verify-backup-btn");i&&!i._bound&&(i._bound=!0,i.addEventListener("click",Rn))}async function $i(){const e=document.getElementById("totp-code")?.value?.trim();if(!e||e.length!==6){G("Enter the 6-digit code from your authenticator app.");return}j("verify-2fa-btn",!0),Et();try{const{data:t}=await b.auth.mfa.listFactors(),i=(t?.totp||[])[0];if(!i){G("No 2FA factor found. Please re-login."),j("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In');return}const{data:a,error:n}=await b.auth.mfa.challenge({factorId:i.id});if(n)throw n;const{error:s}=await b.auth.mfa.verify({factorId:i.id,challengeId:a.id,code:e});if(s)throw s;await ce(T.user.id,"login_2fa_success"),j("verify-2fa-btn",!1),At()}catch(t){oa(),G(t.message?.includes("Invalid")?"Incorrect code. Check your authenticator and try again.":t.message),j("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In'),document.getElementById("totp-code").value="",document.getElementById("totp-code").focus()}}async function Rn(){const e=document.getElementById("backup-code")?.value?.trim().toUpperCase().replace(/\s/g,"");if(!e){G("Enter a backup recovery code.");return}j("verify-backup-btn",!0);try{const{data:t}=await b.from("admin_2fa").select("backup_codes").eq("user_id",T.user.id).maybeSingle();if(!t?.backup_codes?.length){G("No backup codes found."),j("verify-backup-btn",!1,"Use Backup Code");return}if(!t.backup_codes.find(n=>(n.code||n).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")&&!n.used)){G("Backup code not found or already used."),j("verify-backup-btn",!1,"Use Backup Code");return}const a=t.backup_codes.map(n=>(n.code||n).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")?{...typeof n=="object"?n:{code:n},used:!0}:n);await b.from("admin_2fa").update({backup_codes:a}).eq("user_id",T.user.id),await ce(T.user.id,"login_backup_code_used"),At()}catch(t){G(t.message),j("verify-backup-btn",!1,"Use Backup Code")}}function ua(){document.getElementById("back-to-login")?.addEventListener("click",()=>Le("login")),document.getElementById("send-reset-btn")?.addEventListener("click",Nn)}async function Nn(){const e=document.getElementById("reset-email"),t=rt(e?.value);if(!t){G("Enter your admin email address to receive a reset link.");return}j("send-reset-btn",!0),Et();const{error:i}=await b.auth.resetPasswordForEmail(t,{redirectTo:Cn()});if(j("send-reset-btn",!1,'<i data-lucide="mail" class="w-4 h-4 inline mr-1"></i> Send Reset Link'),i){G(i.message);return}Pn("Reset link sent! Check your inbox and open it from this device to continue.")}function Fn(){const e=document.getElementById("login-screen");if(!e)return;const t=e.querySelector(".login-card");t&&(t.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}window.handlePasswordResetSubmit=async function(){const e=document.getElementById("new-pw-reset")?.value,t=document.getElementById("confirm-pw-reset")?.value,i=document.getElementById("reset-pw-error");if(e!==t){i&&(i.textContent="Passwords do not match.",i.classList.remove("hidden"));return}if((e||"").length<8){i&&(i.textContent="Password must be at least 8 characters.",i.classList.remove("hidden"));return}const{error:a}=await b.auth.updateUser({password:e});if(a){i&&(i.textContent=a.message,i.classList.remove("hidden"));return}g("Password updated! Please log in with your new password."),window.location.hash="",setTimeout(()=>window.location.reload(),1500)};function At(){const e=document.getElementById("login-screen");e&&(e.style.display="none");const t=document.getElementById("admin-user-email");t&&T.user&&(t.textContent=T.user.email||"Admin"),ci(),navigate("dashboard")}window.adminSignOut=async function(){T.user&&await ce(T.user.id,"logout"),await b.auth.signOut(),T.user=null,ft(),Le("login"),ci(),ca(),ua()};window.logoutAllDevices=async function(){confirm("This will sign you out on ALL devices. Continue?")&&(T.user&&await ce(T.user.id,"logout_all_devices"),await b.auth.signOut({scope:"global"}),T.user=null,g("Signed out from all devices."),setTimeout(()=>window.location.reload(),1200))};async function Dn(){const e=document.getElementById("content");try{const[t,i,a,n]=await Promise.all([b.from("showroom_listings").select("id,listing_type,is_active,price",{count:"exact"}),b.from("payment_receipts").select("id,order_number,amount,status,created_at",{count:"exact"}).order("created_at",{ascending:!1}).limit(200),b.from("profiles").select("user_id,created_at",{count:"exact"}),b.from("product_reviews").select("id,is_approved",{count:"exact"})]),s=t.data||[],o=i.data||[],r=o.filter(w=>["approved","payment_approved","delivered"].includes(w.status)).reduce((w,k)=>w+(parseFloat(k.amount)||0),0),l=o.filter(w=>["pending","pending_verification","processing"].includes(w.status)).length,c=s.filter(w=>w.listing_type!=="property").length,u=s.filter(w=>w.listing_type==="property").length,m=s.filter(w=>w.listing_type!=="property"&&w.is_active).length,f=a.count||0,h=n.count||0,p=(n.data||[]).filter(w=>!w.is_approved).length,y=new Date,_=o.filter(w=>{const k=new Date(w.created_at);return k.getMonth()===y.getMonth()&&k.getFullYear()===y.getFullYear()}).filter(w=>["approved","payment_approved","delivered"].includes(w.status)).reduce((w,k)=>w+(parseFloat(k.amount)||0),0),x=o.slice(0,6);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-black text-white">Good ${Hn()}, Admin</h2>
            <p class="text-sm text-gray-500 mt-0.5">${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}</p>
          </div>
          <button onclick="navigate('products')" class="btn-press hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Product
          </button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          ${z("Total Revenue",`$${r.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald",`$${_.toLocaleString("en-US",{maximumFractionDigits:0})} this month`)}
          ${z("Total Orders",o.length,"shopping-bag","blue",`${l} pending`)}
          ${z("Customers",f,"users","violet")}
          ${z("Products",c,"package","amber",`${m} active`)}
          ${z("Properties",u,"home","blue")}
          ${z("Reviews",h,"star","blue",`${p} pending`)}
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
            ${x.length===0?'<p class="text-xs text-gray-500 text-center py-8">No orders yet</p>':x.map(w=>`
                <div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
                  <div class="min-w-0">
                    <p class="text-xs font-bold text-white truncate">${d(w.order_number||w.id?.slice(0,8))}</p>
                    <p class="text-[10px] text-gray-500">${Se(w.created_at)}</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0 ml-2">
                    <span class="text-xs font-bold text-emerald-400">$${parseFloat(w.amount||0).toLocaleString("en-US",{maximumFractionDigits:0})}</span>
                    ${Q(w.status)}
                  </div>
                </div>`).join("")}
          </div>
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
          <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="zap" class="w-4 h-4 text-amber-400"></i> Quick Actions</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            ${[{icon:"plus-circle",label:"Add Product",fn:"navigate('products')"},{icon:"home",label:"Add Property",fn:"navigate('properties')"},{icon:"shopping-bag",label:"View Orders",fn:"navigate('orders')"},{icon:"star",label:"Reviews",fn:"navigate('reviews')"},{icon:"ticket",label:"Coupons",fn:"navigate('coupons')"},{icon:"settings",label:"Settings",fn:"navigate('settings')"}].map(w=>`
              <button onclick="${w.fn}" class="btn-press flex flex-col items-center gap-2 p-3 glass-soft border border-blue-500/15 rounded-xl hover:border-blue-500/30 transition">
                <i data-lucide="${w.icon}" class="w-5 h-5 text-blue-400"></i>
                <span class="text-[11px] font-bold text-gray-300">${w.label}</span>
              </button>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),ya(o)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${d(t.message)}</div>`)}}async function A(){const e=document.getElementById("content");try{const{data:t,error:i}=await b.from("showroom_listings").select("*").neq("listing_type","property").order("created_at",{ascending:!1}),a=new Set,n=[];for(const c of i?[]:t||[])c&&c.property_id&&!a.has(c.property_id)&&(a.add(c.property_id),n.push(c));for(const c of St().filter(u=>u.listing_type!=="property"))c&&c.property_id&&!a.has(c.property_id)&&(a.add(c.property_id),n.push(c));if(Array.isArray(se))for(const c of se.filter(u=>u.listing_type!=="property"&&u.property_id))a.has(c.property_id)||(a.add(c.property_id),n.push(c));const s=[...qi,...Hi,...Gi,...Vi];for(const c of s)c&&c.property_id&&c.listing_type!=="property"&&!a.has(c.property_id)&&(a.add(c.property_id),n.push(c));n.sort((c,u)=>new Date(u.created_at||0)-new Date(c.created_at||0));try{await ri()}catch{}const o=new Set($t());if(o.size)for(let c=n.length-1;c>=0;c--)n[c]&&n[c].property_id&&o.has(n[c].property_id)&&n.splice(c,1);for(let c=n.length-1;c>=0;c--){const u=n[c],m=Number(u&&u.price);Number.isFinite(m)&&m>=1&&m<=100&&n.splice(c,1)}const r=[...new Set(n.map(c=>c.category).filter(Boolean))].sort((c,u)=>c.localeCompare(u)),l=[...new Set(n.flatMap(c=>Array.isArray(c.tags)?c.tags:[]).filter(Boolean))].sort((c,u)=>c.localeCompare(u));window._productFilters||(window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"}),window._productSelection||(window._productSelection=new Set),e.innerHTML=`
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
              <button onclick="openGeneralAiScanner()" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition shadow-xl shadow-violet-700/25" title="Scan product photos with AI â€” detect, analyze and add products to your manager">
                <i data-lucide="scan-search" class="w-5 h-5"></i> General AI Scanner
              </button>
              <button onclick="openGeneralAiScanner(true)" class="btn-press flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition shadow-xl shadow-amber-700/25" title="Scan every product that has no price â€” AI reads the photo, fills the form and assigns a fair price automatically">
                <i data-lucide="dollar-sign" class="w-5 h-5"></i> Scan Missing Prices
              </button>
              <button onclick="clearAllProducts()" class="btn-press flex items-center justify-center gap-2 bg-rose-600/90 hover:bg-rose-500 text-white text-sm font-black px-5 py-3.5 rounded-2xl transition" title="Delete every product from the manager & database. Your showroom catalog stays.">
                <i data-lucide="trash-2" class="w-5 h-5"></i> Clear All Products
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3">
          ${z("Total Products",n.length,"package","blue")}
          ${z("Published",n.filter(c=>!!c.is_active).length,"badge-check","emerald")}
          ${z("Draft / Hidden",n.filter(c=>!c.is_active).length,"file-clock","amber")}
          ${z("Featured",n.filter(c=>!!c.is_featured).length,"sparkles","violet")}
          ${z("Inventory Units",n.reduce((c,u)=>c+(parseInt(u.stock_quantity,10)||0),0),"boxes","blue")}
          ${z("Avg Price",`$${Math.round(n.reduce((c,u)=>c+(parseFloat(u.price)||0),0)/Math.max(n.length,1)).toLocaleString()}`,"dollar-sign","blue")}
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 sm:p-4 space-y-3">
          <div class="relative">
            <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300"></i>
            <input id="prod-search" type="search" class="input-field pl-12 py-4 pr-28 text-base font-semibold !rounded-2xl border-blue-500/40 shadow-inner shadow-blue-900/20 focus:border-blue-400"
              placeholder="Search any product by name, SKU, brand, category, tag..." value="${d(window._productFilters.search||"")}"
              oninput="filterProducts()" onkeydown="productSearchKeydown(event)">
            <span class="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">Press Enter to open</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-2.5">
            <select id="prod-cat-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Categories</option>
              ${(r.length?r:_e).map(c=>`<option value="${d(c)}" ${(window._productFilters.category||"")===c?"selected":""}>${d(c)}</option>`).join("")}
            </select>
            <select id="prod-tag-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Tags</option>
              ${l.map(c=>`<option value="${d(c)}" ${(window._productFilters.tag||"")===c?"selected":""}>${d(c)}</option>`).join("")}
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
          <div id="products-empty" class="hidden">${Ie("package-search","No matching products","Try different filters or add a new product.",'<button onclick="showAddProductStep1()" class="btn-press bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl">Add Product</button>')}</div>
          <div class="text-center text-[11px] text-gray-500 py-2">Scroll to explore all products. Layout auto-rearranges as products are added, edited, moved, or removed.</div>
        </div>
      </div>`,window._productsData=n,window._productsCardLimit=60,ma(n),filterProducts(),updateBulkBar(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${d(t.message)}</div>`)}}function we(e){const t=parseFloat(e);return Number.isFinite(t)?t:0}function it(e){return Array.isArray(e.tags)?e.tags.filter(Boolean):[]}function Un(e){const t=we(e.price),i=parseFloat(e.real_price);if(Number.isFinite(i)&&i>0&&i>t)return`${Math.round((1-t/i)*100)}% OFF`;const a=parseFloat(e.discount_percent??e.discount??0);return Number.isFinite(a)&&a>0?`${Math.round(a)}% OFF`:"No discount"}function jn(e){const t=we(e.price),i=parseFloat(e.real_price),a=`$${t.toLocaleString()}`;return Number.isFinite(i)&&i>0&&i>t?`<span class="block text-xs text-gray-400 price-strike line-through">$${i.toLocaleString()}</span><span class="text-emerald-300 font-black">$${t.toLocaleString()}</span>`:a}function Ct(e){return e.is_archived||e.availability_status==="Archived"?"archived":e.is_active?"active":"inactive"}function zt(e){return parseInt(e.views??e.view_count??0,10)||0}function Kt(e){return parseInt(e.sales??e.sales_count??0,10)||0}function It(e){return e.sku||e.property_id||"N/A"}function On(e){const t=e.images&&e.images[0]?e.images[0]:"/fallback.svg",i=it(e),a=Ct(e),n=window._productSelection?.has(e.property_id),s=Q(a==="archived"?"inactive":a==="active"?"active":"inactive"),o=oe(e.created_at),r=!!e.is_featured,l=e.is_active?`unpublishProduct('${e.property_id}')`:`publishProduct('${e.property_id}')`,c=e.is_active?"Unpublish":"Publish",u=e.is_active?"bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25";return`<article data-id="${e.property_id}" data-cat="${d(e.category||"")}" data-status="${a}" data-featured="${r?"featured":"standard"}" onclick="editProduct('${e.property_id}')" title="Tap anywhere to edit this product" class="prod-card glass-soft border ${n?"border-blue-400/60":"border-blue-500/15"} rounded-3xl p-5 flex flex-col gap-4 transition hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer select-none active:scale-[.99]">
    <div class="flex items-start gap-4">
      <input type="checkbox" class="prod-check accent-blue-500 w-5 h-5 mt-1 shrink-0" value="${e.property_id}" ${n?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${e.property_id}', this.checked)">
      <div class="relative w-24 h-24 rounded-2xl overflow-hidden border border-blue-500/20 shrink-0 bg-[#0b1124]">
        <img src="${d(t)}" alt="${d(e.title||"Product")}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'">
        ${r?'<span class="absolute top-1.5 left-1.5 text-[10px] font-black px-2 py-0.5 rounded-lg bg-amber-400 text-[#111827]">Featured</span>':""}
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="text-lg font-black text-white leading-snug line-clamp-2">${d(e.title||"Untitled Product")}</h3>
        <p class="text-xs text-gray-500 font-mono mt-1">SKU: ${d(It(e))}</p>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          ${s}
          <span class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20">${d(e.category||"Uncategorized")}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2.5 text-sm">
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5">
        <span class="text-gray-400 text-xs">Price</span>
        <p class="text-emerald-300 font-black text-base">
          ${jn(e)}
        </p>
      </div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Discount</span><p class="text-amber-300 font-bold">${d(Un(e))}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Stock</span><p class="text-gray-200 font-bold">${e.stock_quantity!=null?d(e.stock_quantity):"Unlimited"}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Brand</span><p class="text-gray-200 font-bold truncate">${d(e.brand||"N/A")}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Views</span><p class="text-blue-300 font-bold">${zt(e).toLocaleString()}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Sales</span><p class="text-cyan-300 font-bold">${Kt(e).toLocaleString()}</p></div>
    </div>

    <div class="flex items-center justify-between text-xs text-gray-500 border-t border-blue-500/10 pt-3">
      <span>Date Added: ${d(o)}</span>
      <span>${(e.images||[]).length} images</span>
    </div>

    <div class="flex flex-wrap gap-2 mt-auto">
      <button onclick="event.stopPropagation();editProduct('${e.property_id}')" class="btn-press flex-1 min-w-[9.5rem] px-5 py-3.5 rounded-2xl text-sm font-black bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition shadow-lg shadow-blue-600/15">Edit Product</button>
      <button onclick="event.stopPropagation();quickEditProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-indigo-500/15 text-indigo-200 hover:bg-indigo-500/25 transition">Quick Edit</button>
      <button onclick="event.stopPropagation();previewProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-sky-500/15 text-sky-200 hover:bg-sky-500/25 transition">Preview</button>
      <button onclick="event.stopPropagation();${l}" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold ${u} transition">${c}</button>
      <button onclick="event.stopPropagation();duplicateProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-white/10 text-gray-200 hover:bg-white/20 transition">Duplicate</button>
      <button onclick="event.stopPropagation();archiveProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-red-500/15 text-red-200 hover:bg-red-500/25 transition">Archive</button>
      <button onclick="event.stopPropagation();shareProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-violet-500/15 text-violet-200 hover:bg-violet-500/25 transition">Share</button>
      <button onclick="event.stopPropagation();deleteProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-rose-600/15 text-rose-200 hover:bg-rose-600/25 transition">Delete</button>
      <button onclick="event.stopPropagation();openProductMoreActions('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-gray-600/20 text-gray-200 hover:bg-gray-600/35 transition">More</button>
    </div>

    ${i.length?`<div class="flex flex-wrap gap-1.5">${i.slice(0,6).map(m=>`<span class="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200">${d(m)}</span>`).join("")}</div>`:'<div class="text-xs text-gray-500">No tags</div>'}
  </article>`}function pa(e,t){const i=[...e],a=n=>new Date(n||0).getTime()||0;return t==="oldest"?i.sort((n,s)=>a(n.created_at)-a(s.created_at)):t==="price-high"?i.sort((n,s)=>we(s.price)-we(n.price)):t==="price-low"?i.sort((n,s)=>we(n.price)-we(s.price)):t==="sales-high"?i.sort((n,s)=>Kt(s)-Kt(n)):t==="views-high"?i.sort((n,s)=>zt(s)-zt(n)):i.sort((n,s)=>a(s.created_at)-a(n.created_at)),i}function ma(e){const t=document.getElementById("products-grid"),i=document.getElementById("products-empty"),a=document.getElementById("products-result-count");if(!t)return;const n=window._productsCardLimit||60,s=e.slice(0,n);t.innerHTML=s.map(On).join(""),a&&(a.textContent=String(e.length));const o=document.getElementById("products-more");if(o){const r=e.length-s.length;r>0?o.innerHTML=`<button onclick="loadMoreProducts()" class="btn-press px-8 py-4 rounded-2xl text-base font-black bg-blue-500/15 text-blue-200 hover:bg-blue-500/25 border border-blue-500/25 transition">Show ${Math.min(60,r)} more (${r} left)</button>`:o.innerHTML=e.length>60?'<span class="text-sm text-gray-500">All products shown</span>':""}i&&i.classList.toggle("hidden",e.length>0),updateBulkBar(),window.lucide&&lucide.createIcons()}window.loadMoreProducts=function(){window._productsCardLimit=(window._productsCardLimit||60)+60,filterProducts(!0)};function ga(e){const t=document.getElementById("products-table-body"),i=document.getElementById("products-result-count");t&&(t.innerHTML=e.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-10">No products found.</td></tr>':e.map(a=>{const n=a.images&&a.images[0]?a.images[0]:"/fallback.svg",s=Ct(a),o=window._productSelection?.has(a.property_id),r=a.is_active?`unpublishProduct('${a.property_id}')`:`publishProduct('${a.property_id}')`,l=a.is_active?"Unpublish":"Publish";return`<tr class="prod-table-row" data-id="${a.property_id}" style="cursor:pointer">
          <td>
            <div class="flex items-center gap-2.5" onclick="editProduct('${a.property_id}')">
              <input type="checkbox" class="prod-check accent-blue-500" value="${a.property_id}" ${o?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${a.property_id}', this.checked)">
              <img src="${d(n)}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
              <div class="min-w-0">
                <p class="text-xs font-bold text-white truncate max-w-[160px]">${d(a.title||"Untitled Product")}</p>
                <p class="text-[10px] font-mono text-gray-500">${d(It(a))}</p>
              </div>
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${d(a.category||"Uncategorized")}</span></td>
          <td>
            <div class="text-xs">
              ${(()=>{const c=we(a.price),u=parseFloat(a.real_price);return Number.isFinite(u)&&u>0&&u>c?`<span class="text-[10px] text-gray-500 price-strike line-through block">$${u.toLocaleString()}</span><span class="font-bold text-emerald-400">$${c.toLocaleString()}</span>`:`<span class="font-bold text-emerald-400">$${c.toLocaleString()}</span>`})()}
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${a.stock_quantity!=null?d(a.stock_quantity):"Unlimited"}</span></td>
          <td>${Q(s==="archived"?"inactive":s==="active"?"active":"inactive")}</td>
          <td><span class="text-xs text-gray-500">${oe(a.created_at)}</span></td>
          <td>
            <div class="flex gap-1">
              <button onclick="editProduct('${a.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
              <button onclick="quickEditProduct('${a.property_id}')" class="btn-press p-1.5 text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition" title="Quick Edit"><i data-lucide="sliders-horizontal" class="w-3.5 h-3.5"></i></button>
              <button onclick="${r}" class="btn-press p-1.5 ${a.is_active?"text-amber-400 hover:bg-amber-500/10":"text-emerald-400 hover:bg-emerald-500/10"} rounded-lg transition" title="${l}"><i data-lucide="${a.is_active?"eye-off":"eye"}" class="w-3.5 h-3.5"></i></button>
              <button onclick="archiveProduct('${a.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Archive"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
            </div>
          </td>
        </tr>`}).join(""),i&&(i.textContent=String(e.length)),window.lucide&&lucide.createIcons())}window.setProductView=function(e){window._productView=e==="table"?"table":"card";const t=document.getElementById("products-grid"),i=document.getElementById("products-table-wrap"),a=document.getElementById("view-card-btn"),n=document.getElementById("view-table-btn"),s=document.getElementById("products-empty"),o=window._productsData||[];t&&t.classList.toggle("hidden",e==="table"),i&&(i.classList.toggle("hidden",e!=="table"),e==="table"&&ga(o)),a&&a.classList.toggle("active",e!=="table"),n&&n.classList.toggle("active",e==="table"),s&&s.classList.toggle("hidden",o.length>0)};window.filterProducts=function(e){const t=window._productFilters||{};t.search=(document.getElementById("prod-search")?.value||"").trim().toLowerCase(),t.category=document.getElementById("prod-cat-filter")?.value||"",t.tag=document.getElementById("prod-tag-filter")?.value||"",t.status=document.getElementById("prod-status-filter")?.value||"",t.featured=document.getElementById("prod-featured-filter")?.value||"",t.sort=document.getElementById("prod-sort")?.value||"newest",window._productFilters=t;const i=(window._productsData||[]).filter(n=>{const s=[n.title,n.brand,n.category,It(n),it(n).join(" "),n.description].join(" ").toLowerCase();return!(t.search&&!s.includes(t.search)||t.category&&(n.category||"")!==t.category||t.tag&&!it(n).includes(t.tag)||t.status&&Ct(n)!==t.status||t.featured&&t.featured==="featured"!=!!n.is_featured)}),a=pa(i,t.sort);e||(window._productsCardLimit=60),ma(a),window._productView==="table"&&ga(a)};window.productSearchKeydown=function(e){if(e.key!=="Enter")return;const t=(document.getElementById("prod-search")?.value||"").trim().toLowerCase();if(!t)return;const i=window._productFilters||{},a=(window._productsData||[]).filter(s=>!(![s.title,s.brand,s.category,It(s),it(s).join(" "),s.description].join(" ").toLowerCase().includes(t)||i.category&&(s.category||"")!==i.category||i.tag&&!it(s).includes(i.tag)||i.status&&Ct(s)!==i.status||i.featured&&i.featured==="featured"!=!!s.is_featured)),n=pa(a,i.sort||"newest")[0];n?editProduct(n.property_id):g("No product matched that search","error")};window.resetProductFilters=function(){window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"},["prod-search","prod-cat-filter","prod-tag-filter","prod-status-filter","prod-featured-filter","prod-sort"].forEach(t=>{const i=document.getElementById(t);i&&(t==="prod-sort"?i.value="newest":i.value="")}),filterProducts()};window.toggleProductSelection=function(e,t){window._productSelection||(window._productSelection=new Set),t?window._productSelection.add(e):window._productSelection.delete(e),updateBulkBar()};window.toggleSelectAll=function(e,t){document.querySelectorAll("."+t).forEach(i=>{i.checked=e.checked;const a=i.value;window._productSelection||(window._productSelection=new Set),e.checked?window._productSelection.add(a):window._productSelection.delete(a)}),updateBulkBar()};window.toggleSelectAllProducts=function(e){document.querySelectorAll(".prod-check").forEach(t=>{t.checked=!!e,window._productSelection||(window._productSelection=new Set),e?window._productSelection.add(t.value):window._productSelection.delete(t.value)}),updateBulkBar()};window.updateBulkBar=function(){const e=window._productSelection?window._productSelection.size:0,t=document.getElementById("bulk-actions"),i=document.getElementById("bulk-count");t&&(t.classList.toggle("hidden",e===0),e>0&&t.classList.add("flex")),i&&(i.textContent=`${e} selected`)};function Tt(){return window._productSelection?[...window._productSelection]:[]}function X(e){const t=String(e?.message||e?.code||"").toLowerCase();return t.includes("row-level security")||t.includes("permission denied")||t.includes("permission denied for table")||t.includes("new row violates row-level security")||t.includes("not permitted")||t.includes("rls policy")}function ba(e,t,i){return e&&X(e)?(g(`âš ï¸ ${i} blocked: Your account is signed in but the database admin role is not active. Re-run the admin permission migration, or contact the owner.`,"error"),!0):e?(t&&t(),g(`${i} saved locally (DB unavailable): ${e.message||"unknown error"}`,"info"),!0):!1}function Ht(e,t){if(!e)return`${t} failed for an unknown reason. Please try again.`;const i=String(e.message||""),a=e.code||"";return X(e)?`${t} was BLOCKED: your account is signed in but the database admin role is not active. Re-run the admin permission migration (or contact the owner), then press Publish again.`:String(a)==="401"||/jwt|token|not authenticated|unauthorized|invalid api key/i.test(i)?`${t} failed: your sign-in session expired or is invalid. Please sign out and sign back in, then try again. Your changes are still in the form.`:String(a)==="23505"||/duplicate key|unique constraint/i.test(i)?`${t} failed: a duplicate-record conflict occurred in the database. Refresh the page and try again.`:String(a)==="23503"||/foreign key/i.test(i)?`${t} failed: the database rejected a reference (foreign key). Refresh the page, re-open the product and try again.`:String(a)==="42P01"||/column .* does not exist|relation .* does not exist/i.test(i)?`${t} failed: the database schema is out of date. Run the latest database migration, then try again.`:String(a)==="23502"||/null value in column .* violates/i.test(i)?`${t} failed: a required field was rejected by the database. Fill in every required field, then try again.`:/failed to fetch|networkerror|network request|fetch failed|load failed|offline|ERR_NAME|ERR_CONNECTION|timeout/i.test(i)?`${t} failed: no connection to the server. Check your internet connection and press Publish again. Your changes are still in the form.`:String(a)==="42501"||/permission denied|row-level security/i.test(i)?`${t} was BLOCKED by database permissions. Re-run the admin permission migration (or contact the owner), then try again.`:/rate limit|too many requests/i.test(i)?`${t} failed: too many requests were sent at once. Wait a few seconds and press Publish again.`:`${t} failed: ${i||"an unexpected database error occurred"}. Nothing was saved — your changes are still in the form, so you can press Publish again.`}async function Pi(e){try{let{data:{session:i}}=await b.auth.getSession();if(!i){const{data:s}=await b.auth.getSession();i=s?.session}if(!i)return{error:new Error("Your sign-in session has expired. Please sign out and sign back in, then press Publish again.")};const{data:{user:a},error:n}=await b.auth.getUser();if(n||!a)return{error:new Error("Your sign-in session is invalid. Please sign out and sign back in, then press Publish again.")}}catch(i){return console.error("[safePublishShowroom] Auth check failed:",i),{error:new Error("Could not verify your sign-in status. Check your internet connection and try again.")}}const t={...e,updated_at:new Date().toISOString()};if(t.property_id){const{error:i}=await b.from("showroom_listings").upsert(t,{onConflict:"property_id"});if(!i)return{error:null};console.warn("[safePublishShowroom] Direct upsert failed, trying RPC fallback:",i?.message||i)}else{const{error:i}=await b.from("showroom_listings").insert(t);if(!i)return{error:null};console.warn("[safePublishShowroom] Direct insert failed, trying RPC fallback:",i?.message||i)}try{const i={...t};delete i.id;const{data:a,error:n}=await b.rpc("publish_showroom_upsert",{p_data:[i]});return n?(console.error("[safePublishShowroom] RPC fallback also failed:",n),{error:new Error(`Database write failed: ${n.message||"unknown error"}. Your changes are preserved in the form — please try again.`)}):(console.log("[safePublishShowroom] RPC fallback succeeded, rows affected:",a),{error:null})}catch(i){return console.error("[safePublishShowroom] RPC exception:",i),{error:new Error(`Database write failed: ${i.message||"network error"}. Your changes are preserved in the form — please try again.`)}}}window.bulkToggleActive=async function(e){const t=Tt();if(!t.length)return;const i=await Promise.all(t.map(s=>{const o=be((window._productsData||[]).find(r=>r.property_id===s));return b.from("showroom_listings").upsert({...o,property_id:s,is_active:e},{onConflict:"property_id"})}));if(i.some(s=>s.error&&X(s.error))){g(`âš ï¸ ${t.length} products NOT ${e?"published":"unpublished"}: database admin role blocked the write. Re-run the admin permission migration.`,"error"),window._productSelection=new Set,A();return}const n=i.filter(s=>s.error).length;g(`${t.length-n}/${t.length} products ${e?"published":"unpublished"}${n?` (${n} failed: ${i.find(s=>s.error)?.error?.message||"error"})`:""}`,n?"error":"success"),window._productSelection=new Set,A()};window.bulkDuplicateProducts=async function(){const e=Tt();if(e.length){for(const t of e)await duplicateProduct(t,!0);g(`${e.length} products duplicated`),window._productSelection=new Set,A()}};window.bulkArchive=async function(){const e=Tt();if(!e.length||!confirm(`Archive ${e.length} products? They will be hidden but not deleted.`))return;const t=await Promise.all(e.map(n=>b.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",n)));if(t.some(n=>n.error&&X(n.error))){g("âš ï¸ Archive blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,A();return}const a=t.filter(n=>n.error).length;g(`${e.length-a}/${e.length} products archived${a?` (${a} failed)`:""}`,a?"error":"success"),window._productSelection=new Set,A()};window.bulkDeleteProducts=async function(){const e=Tt();if(!e.length||!confirm(`Delete ${e.length} products permanently? This action cannot be undone.`))return;const t=await Promise.all(e.map(n=>b.from("showroom_listings").delete().eq("property_id",n)));if(t.some(n=>n.error&&X(n.error))){g("âš ï¸ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,A();return}const a=t.filter(n=>n.error).length;g(`${e.length-a}/${e.length} products deleted${a?` (${a} failed)`:""}`,a?"error":"success"),window._productSelection=new Set,A()};window.previewProduct=async function(e){const t=await b.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),i=(window._productsData||[]).find(a=>a.property_id===e)||t.data;if(!i)return g("Product not found","error");U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Product Live Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="space-y-2">
            <img src="${d((i.images||[])[0]||"/fallback.svg")}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
            <div class="flex flex-wrap gap-2">${(i.images||[]).slice(0,8).map(a=>`<img src="${d(a)}" class="w-12 h-12 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">`).join("")}</div>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-black text-white">${d(i.title||"Untitled Product")}</h4>
            <div class="flex items-center gap-2">${Q(i.is_active?"active":"inactive")}${i.is_featured?'<span class="badge bg-amber-500/15 text-amber-200 border-amber-500/30">Featured</span>':""}</div>
            <p class="text-xs text-gray-400">${d(i.description||"No description")}</p>
            <div class="grid grid-cols-2 gap-2 text-xs mt-2">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">$${we(i.price).toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${i.stock_quantity!=null?d(i.stock_quantity):"Unlimited"}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${d(i.brand||"N/A")}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Category</span><p class="text-gray-200 font-bold">${d(i.category||"N/A")}</p></div>
            </div>
            <div class="pt-2 flex gap-2">
              <button onclick="editProduct('${i.property_id}');closeModal();" class="btn-press px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl">Edit</button>
              <button onclick="shareProduct('${i.property_id}')" class="btn-press px-3 py-2 bg-violet-600/70 hover:bg-violet-500 text-white text-xs font-bold rounded-xl">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.quickEditProduct=async function(e){const t=await b.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),i=(window._productsData||[]).find(n=>n.property_id===e)||t.data;if(!i)return g("Product not found","error");const a=Array.isArray(i.images)?i.images:[];U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-black text-white">Quick Edit Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">Back</button>
        </div>
        <form onsubmit="saveQuickEditProduct(event,'${i.property_id}')" class="space-y-4">
          <div><label class="lbl">Title</label><input name="title" class="input-field" value="${d(i.title||"")}"></div>
          <div class="grid grid-cols-2 gap-3">
            <div><label class="lbl">Real Price</label><input type="number" step="0.01" name="real_price" class="input-field" value="${d(i.real_price??i.specifications?.real_price??"")}" placeholder="Original price (crossed out)"></div>
            <div><label class="lbl">Discount Price</label><input type="number" step="0.01" name="price" class="input-field" value="${d(i.price||0)}" placeholder="Price customers pay"></div>
          </div>
          <div><label class="lbl">Availability</label><select name="availability_status" class="input-field">${["In Stock","Out of Stock","Pre-order","Limited Stock","Archived"].map(n=>`<option value="${n}" ${i.availability_status===n?"selected":""}>${n}</option>`).join("")}</select></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Featured</span><input type="checkbox" name="is_featured" ${i.is_featured?"checked":""} class="accent-blue-500 w-5 h-5"></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Published</span><input type="checkbox" name="is_active" ${i.is_active?"checked":""} class="accent-blue-500 w-5 h-5"></div>
          <div>
            <label class="lbl">Gallery Images & Videos (up to 24)</label>
            <div id="drop-zone" class="drop-zone" onclick="pickMediaForForm('img-upload')">
              <i data-lucide="image-plus" class="w-10 h-10 text-blue-400 mx-auto mb-2"></i>
              <p class="text-base font-bold text-gray-300">Tap to add photos or videos (up to 24)</p>
              <p class="text-sm text-gray-500 mt-1">PNG, JPG, WEBP, MP4, WebM. First item is the cover.</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*,video/mp4,video/webm,video/*,application/pdf" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${a.map((n,s)=>$e(n,s)).join("")}
            </div>
            <div id="image-url-inputs">${a.map((n,s)=>`<input type="hidden" name="images" id="img-url-${s}" value="${d(n)}">`).join("")}</div>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
          </div>
          <button type="submit" class="btn-press w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-base font-bold">Save Quick Edit</button>
        </form>
      </div>
    </div>`),Lt(),Mt(),Ge(),Me(),window.lucide&&lucide.createIcons()};window.saveQuickEditProduct=async function(e,t){e.preventDefault();const i=new FormData(e.target),a=[...document.querySelectorAll("#image-preview .img-thumb")].map(u=>u.dataset.url||(u.querySelector("img")?u.querySelector("img").getAttribute("src"):"")).filter(u=>u&&!String(u).startsWith("blob:")),n={title:i.get("title")||"Untitled Product",price:Math.max(R,Math.min(q,parseFloat(i.get("price"))||0)),stock_quantity:i.get("stock_quantity")===""?null:parseInt(i.get("stock_quantity"),10),availability_status:i.get("availability_status")||"In Stock",is_featured:i.get("is_featured")==="on",is_active:i.get("is_active")==="on"||a.length>=24,images:a},s=String(i.get("real_price")||"").trim(),o=s===""?null:parseFloat(s);if(o!=null&&!Number.isFinite(o)){g("Real Price must be a number.","error");return}const r=be((window._productsData||[]).find(u=>u.property_id===t)),l=r.specifications&&typeof r.specifications=="object"?r.specifications:{};n.specifications={...l,real_price:o!=null&&o>0?Math.round(o):null};const{error:c}=await b.from("showroom_listings").upsert({...r,...n,property_id:t},{onConflict:"property_id"});if(c){if(X(c)){g("âš ï¸ Save blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),re(),A();return}Vt(t,n),g("Quick edit saved locally","info")}else g(n.is_active?"Saved & published â€” your showroom shows it now":"Quick edit saved (draft)");re(),A()};window.publishProduct=function(e){return toggleProductActive(e,!0)};window.unpublishProduct=function(e){return toggleProductActive(e,!1)};window.shareProduct=async function(e){const t=`${window.location.origin}/details.html?id=${encodeURIComponent(e)}`,i=(window._productsData||[]).find(l=>l.property_id===e)||(window._propertiesData||[]).find(l=>l.property_id===e)||De(e),a=i&&String(i.title||"").trim()||"Product on Weverse Online Shop",n=i&&Number(i.price||0)>0?`${a} — ${qn(i)}
${t}`:`${a}
${t}`,o=await(async()=>{try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(t),!0}catch{}try{const l=document.createElement("textarea");return l.value=t,l.style.cssText="position:fixed;opacity:0;pointer-events:none",document.body.appendChild(l),l.focus(),l.select(),document.execCommand("copy"),l.remove(),!0}catch{return!1}})();let r=!1;if(navigator.share)try{await navigator.share({title:a,text:n,url:t}),r=!0}catch{}r||g(o?"Product link copied to clipboard":"Product link: "+t)};function qn(e){const t=Number(e&&typeof e.price=="object"?e.price.price:e&&e.price)||0,i=e&&e.currency||"USD";let a;try{a=t.toLocaleString("en-US",{style:"currency",currency:i,maximumFractionDigits:0})}catch{a="$"+t.toLocaleString("en-US")}return e&&e.price_period&&(a+="/"+e.price_period),a}window.deleteProduct=async function(e){if(!confirm("Delete this product permanently? This action cannot be undone."))return;const t=(window._productsData||[]).find(a=>a.property_id===e)||(window._propertiesData||[]).find(a=>a.property_id===e)||De(e),{error:i}=await b.from("showroom_listings").delete().eq("property_id",e);if(i&&!X(i))return g("Delete failed: "+i.message,"error");ot(e);try{const a=await Oe(e,!0);a&&a.error&&X(a.error)?g("âš ï¸ Deleted, but the site-wide hidden list could not be saved: database admin role rejected the write. Re-run the admin permission migration.","error"):g("Product deleted")}catch{g("Product deleted")}t&&t.listing_type==="property"?Rt():A()};window.clearAllProducts=async function(){const e=(window._productsData||[]).length;if(!confirm(`Delete ALL ${e} product(s) from the Product Manager and the database now?

This is permanent and cannot be undone. Your Real Estate row, Cars & Trucks row and built-in showroom catalog will stay.`))return;const t=new Set(["Cars","Cars & Vehicles","Trucks","Buses","Buses & Coaches","Motorhomes","Motorcycles","Marine & Boating","RV & Camper Accessories","Vehicles"]);let i=[];try{const{data:a,error:n}=await b.from("showroom_listings").select("property_id, listing_type, category").neq("property_id","__none__");if(n)return X(n)?g("⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"):g("Clear failed: "+n.message,"error");i=(a||[]).filter(s=>s.listing_type==="product"&&!t.has(s.category)).map(s=>s.property_id).filter(Boolean)}catch(a){return g("Clear failed: "+a.message,"error")}if(i.length)for(let a=0;a<i.length;a+=500){const{error:n}=await b.from("showroom_listings").delete().in("property_id",i.slice(a,a+500));if(n)return X(n)?g("⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"):g("Clear failed: "+n.message,"error")}try{const a=JSON.parse(localStorage.getItem("kco_local_showroom_listings_v1")||"[]"),n=(Array.isArray(a)?a:[]).filter(s=>s.listing_type&&s.listing_type!=="product"?!0:t.has(s.category));localStorage.setItem("kco_local_showroom_listings_v1",JSON.stringify(n))}catch{}g("All products deleted. Real Estate, Cars & Trucks and your showroom catalog stay."),A()};window.openProductMoreActions=function(e){U(`
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
    </div>`)};function Hn(){const e=new Date().getHours();return e<12?"morning":e<17?"afternoon":"evening"}function ya(e){const t=document.getElementById("chart-revenue");if(!t)return;const i=[],a=new Date;for(let s=5;s>=0;s--){const o=new Date(a.getFullYear(),a.getMonth()-s,1);i.push({label:o.toLocaleString("default",{month:"short"}),month:o.getMonth(),year:o.getFullYear()})}const n=i.map(s=>e.filter(o=>{const r=new Date(o.created_at);return r.getMonth()===s.month&&r.getFullYear()===s.year&&["approved","payment_approved","delivered"].includes(o.status)}).reduce((o,r)=>o+(parseFloat(r.amount)||0),0));new Chart(t,{type:"bar",data:{labels:i.map(s=>s.label),datasets:[{label:"Revenue (USD)",data:n,backgroundColor:"rgba(59,130,246,.6)",borderColor:"rgb(59,130,246)",borderWidth:1,borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"#64748b",callback:s=>"$"+s.toLocaleString()},grid:{color:"rgba(59,130,246,.05)"}},x:{ticks:{color:"#64748b"},grid:{display:!1}}}}})}const _e=ln.map(e=>e.name),ha=cn,B={default:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Phones:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"storage",label:"Storage (e.g. 128GB)",type:"text"},{key:"ram",label:"RAM (e.g. 8GB)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],"Computers & Laptops":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"processor",label:"Processor (CPU)",type:"text"},{key:"ram",label:"RAM",type:"text"},{key:"storage",label:"Storage",type:"text"},{key:"display",label:"Display Size",type:"text"},{key:"graphics",label:"Graphics Card",type:"text"},{key:"os",label:"Operating System",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Electronics:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model Number",type:"text"},{key:"color",label:"Color",type:"text"},{key:"voltage",label:"Voltage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Shoes:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Jewelry:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"material",label:"Material (e.g. 14k Gold)",type:"text"},{key:"gemstone",label:"Gemstone",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Watches:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"movement",label:"Movement (Quartz/Automatic)",type:"text"},{key:"case_material",label:"Case Material",type:"text"},{key:"water_resistance",label:"Water Resistance",type:"text"},{key:"color",label:"Dial Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"description",label:"Description",type:"textarea",span:2}],Gaming:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"platform",label:"Platform (PS5, Xbox, PCâ€¦)",type:"text"},{key:"model",label:"Game / Model",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],"Sports & Fitness":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]};["Men's Fashion","Women's Fashion","Fashion"].forEach(e=>B[e]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (T-Shirt, Dressâ€¦)",type:"text"},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]);B["Bags & Accessories"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Handbag, Backpack, Luggageâ€¦)",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"material",label:"Material (e.g. Leather)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];B["Beauty & Skincare"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Serum, Cream, Makeupâ€¦)",type:"text"},{key:"size",label:"Size (ml / g)",type:"text"},{key:"skin_type",label:"Skin Type",type:"text"},{key:"ingredients",label:"Key Ingredients",type:"text"},{key:"color",label:"Color / Shade",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];B["Home & Kitchen"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"type",label:"Type (Appliance, Cookware, Decorâ€¦)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"voltage",label:"Voltage / Power",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];B.Furniture=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Sofa, Table, Chairâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"assembly",label:"Assembly Required",type:"select",options:["","Yes","No"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];B["Garden & Outdoor"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Mower, Grill, Furnitureâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"weatherproof",label:"Weatherproof",type:"select",options:["","Yes","No"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];B["Toys & Games"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model / Set Name",type:"text"},{key:"age_range",label:"Age Range",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];B["Food & Groceries"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Snack, Beverage, Pantryâ€¦)",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"shelf_life",label:"Shelf Life",type:"text"},{key:"storage",label:"Storage Instructions",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","New (Sealed)","Open Box"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];B["Baby & Kids"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Stroller, Clothing, Toyâ€¦)",type:"text"},{key:"age_range",label:"Age Range",type:"text"},{key:"size",label:"Size",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];B["Health & Medical"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Device, Supplement, Careâ€¦)",type:"text"},{key:"size",label:"Size / Quantity",type:"text"},{key:"usage",label:"Usage / Dosage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];B["Books & Education"]=[{key:"title",label:"Title / Book Name",type:"text",required:!0,span:2},{key:"author",label:"Author",type:"text"},{key:"publisher",label:"Publisher",type:"text"},{key:"language",label:"Language",type:"text"},{key:"format",label:"Format (Hardcover, Paperback, E-book)",type:"text"},{key:"isbn",label:"ISBN",type:"text"},{key:"pages",label:"Pages",type:"text"},{key:"edition",label:"Edition",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Like New","Very Good","Good","Fair"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];B["Office & Stationery"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Notebook, Pen, Printerâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"quantity",label:"Quantity / Pack Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];B["Pet Supplies"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Food, Toy, Bed, Collarâ€¦)",type:"text"},{key:"pet_type",label:"Pet Type (Dog, Cat, Birdâ€¦)",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];B["Musical Instruments"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"type",label:"Type (Guitar, Piano, Drumsâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color / Finish",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];B["Cameras & Photography"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"lens",label:"Lens",type:"text"},{key:"sensor",label:"Sensor",type:"text"},{key:"megapixels",label:"Megapixels",type:"text"},{key:"video",label:"Video Recording",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];B["Software & Digital"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand / Developer",type:"text"},{key:"type",label:"Type (Software, App, Licenseâ€¦)",type:"text"},{key:"platform",label:"Platform",type:"text"},{key:"license",label:"License Type",type:"text"},{key:"version",label:"Version",type:"text"},{key:"language",label:"Language",type:"text"},{key:"format",label:"Format",type:"text"},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];B.Services=[{key:"title",label:"Service Title",type:"text",required:!0,span:2},{key:"type",label:"Service Type",type:"text"},{key:"duration",label:"Duration",type:"text"},{key:"location",label:"Location / Coverage",type:"text"},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];B["Social Media Accounts"]=[{key:"title",label:"Account Title",type:"text",required:!0,span:2},{key:"type",label:"Platform (Instagram, TikTokâ€¦)",type:"text"},{key:"followers",label:"Followers",type:"text"},{key:"engagement",label:"Engagement Rate",type:"text"},{key:"niche",label:"Niche",type:"text"},{key:"condition",label:"Status",type:"select",options:["Active","Verified","Suspended"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];ha.forEach(e=>B[e]=[{key:"title",label:"Vehicle Title",type:"text",required:!0,span:2,placeholder:"e.g. 2023 Toyota Land Cruiser V8 Turbo Diesel"},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"model_year",label:"Model Year",type:"text",placeholder:"e.g. 2023"},{key:"body_type",label:"Body Type",type:"select",options:["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"]},{key:"mileage",label:"Mileage",type:"text",placeholder:"e.g. 15,000 mi or 0 (new)"},{key:"engine",label:"Engine",type:"text",placeholder:"e.g. 4.0L V8 Turbo Diesel"},{key:"horsepower",label:"Horsepower (HP)",type:"text",placeholder:"e.g. 500 HP"},{key:"transmission",label:"Transmission",type:"select",options:["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"]},{key:"drive_type",label:"Drive Type",type:"select",options:["FWD","RWD","AWD","4WD"]},{key:"fuel_type",label:"Fuel Type",type:"select",options:["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"]},{key:"seating_capacity",label:"Seating Capacity",type:"text",placeholder:"e.g. 5 seats"},{key:"doors",label:"Number of Doors",type:"text",placeholder:"e.g. 4"},{key:"safety_features",label:"Safety Features (comma separated)",type:"text",placeholder:"ABS, Airbags, Lane Assist, Traction Controlâ€¦"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}]);for(const e of Object.keys(B))B[e]=B[e].flatMap(t=>t.key!=="price"?[t]:[{key:"real_price",label:"Real Price (USD) â€” crossed out when a discount is active",type:"number",placeholder:"e.g. 250000 â€” original price before discount"},{...t,label:"Discount Price (USD) â€” the price customers pay",placeholder:"e.g. 200000 â€” the price customers actually pay"}]);function fa(e=""){return je.map(t=>`<option value="${t.code}" ${e===t.code?"selected":""}>${t.flag} ${t.name}</option>`).join("")}function va(e="USD"){return ia.map(t=>`<option value="${t}" ${e===t?"selected":""}>${t}</option>`).join("")}function Yt(e){return String(e||"").split(",").map(t=>t.trim()).filter(Boolean)}function I(e,t){const i=document.querySelector(`[name="${e}"]`);!i||t==null||(i.value=t)}function Jt(e){const t=document.getElementById(e);t&&(t.min=String(R),t.max=String(q),t.placeholder=`Price (${R} - ${q})`)}function Ei(e){const t=document.getElementById(`${e}-country_code`),i=document.getElementById(`${e}-country`),a=document.getElementById(`${e}-currency`);if(!t)return;const n=je.find(s=>s.code===t.value);i&&n&&(i.value=n.name),a&&n&&(a.value=li(n.code))}function vt(e,t){const i=document.getElementById(`${e}-image-requirement`),a=document.getElementById(`${e}-required_image_count`);a&&(a.value=t?String(t):""),i&&(t>0?(i.textContent=`This template fits up to ${t} images. Fewer images are perfectly fine â€” you can save and publish anytime.`,i.classList.remove("hidden")):(i.textContent="",i.classList.add("hidden")))}function Qt(e,t="full"){const i=document.getElementById("pf-catalog_template_id")?.value||"",a=document.getElementById("pf-currency")?.value||"USD",n=parseFloat(document.getElementById("pf-price")?.value)||R,s=Qi({templateId:i,listingType:"product",category:e,countryCode:"US",currency:a,price:n});if(!s){vt("pf",ha.includes(e)?24:0);return}vt("pf",s.requiredImageCount||0),I("currency",s.currency),I("subcategory",s.subcategory),I("features_text",s.features.join(", ")),I("highlights_text",s.highlights.join(", ")),I("seo_keywords_text",s.seo_keywords.join(", ")),t==="full"?(I("title",s.title),I("description",s.description),I("brand",s.brand||""),I("model",s.model||""),I("color",s.color||""),I("size",s.size||""),I("condition",s.condition||"New")):I("description",s.description)}function Xt(e="full"){const t=document.getElementById("ppf-catalog_template_id")?.value||"",i=document.getElementById("ppf-country_code")?.value||"US",a=document.getElementById("ppf-currency")?.value||"USD",n=parseFloat(document.getElementById("ppf-price")?.value)||R,s=Qi({templateId:t,listingType:"property",category:"Real Estate",countryCode:i,currency:a,price:n});if(!s){vt("ppf",0);return}vt("ppf",s.requiredImageCount||0),I("country",s.country),I("country_code",s.country_code),I("currency",s.currency),I("subcategory",s.subcategory),I("product_location",s.product_location),I("features_text",s.features.join(", ")),I("highlights_text",s.highlights.join(", ")),I("seo_keywords_text",s.seo_keywords.join(", ")),e==="full"?(I("title",s.title),I("description",s.description),I("property_type",s.property_type||""),I("bedrooms",s.bedrooms??""),I("bathrooms",s.bathrooms??""),I("building_size",s.building_size||""),I("land_size",s.land_size||""),I("furnished",s.furnished||"")):I("description",s.description)}window.applyProductCatalogTemplate=function(e,t="full"){Qt(e,t)};window.applyPropertyCatalogTemplate=function(e="full"){Xt(e)};function Gn(e){return B[e]||B.default}function Vn(e,t={},i=!1){return Gn(e).map(n=>{const s=t[n.key]||"",o=n.span===2?"sm:col-span-2":"",r=!i&&n.required?"required":"",l=n.placeholder||n.label;let c="";if(n.type==="select")c=`<select class="input-field" name="${n.key}" id="pf-${n.key}" ${r}>
        <option value="">Selectâ€¦</option>
        ${n.options.map(u=>`<option value="${u}" ${s===u?"selected":""}>${u}</option>`).join("")}
      </select>`;else if(n.type==="textarea")c=`<textarea class="input-field" name="${n.key}" id="pf-${n.key}" rows="3" placeholder="Write a detailed descriptionâ€¦">${d(s)}</textarea>`;else{const m=["brand","model","color","size","material","platform"].includes(n.key)?`pf-list-${n.key}`:"",h=({brand:["Apple","Samsung","Sony","LG","HP","Dell","Lenovo","Asus","Nike","Adidas","Puma","Gucci","Rolex","Toyota","Mercedes","BMW","Tesla"],model:["Pro","Ultra","Max","SE","Standard","Plus","Series 1","Series 2"],color:["Black","White","Silver","Blue","Red","Green","Gold","Gray","Pink","Brown"],size:["XS","S","M","L","XL","XXL","32","34","36","38","40","42"],material:["Cotton","Leather","Stainless Steel","Aluminum","Wood","Glass","Plastic"],platform:["PS5","Xbox Series X","Nintendo Switch","PC","Android","iOS"]}[n.key]||[]).map(p=>`<option value="${d(p)}"></option>`).join("");c=`<input type="${n.type}" class="input-field" name="${n.key}" id="pf-${n.key}" value="${d(s)}" placeholder="${l}" ${m?`list="${m}"`:""} ${r}>${m?`<datalist id="${m}">${h}</datalist>`:""}`}return`<div class="${o}"><label class="lbl">${n.label}${n.required?i?"":" *":""}</label>${c}</div>`}).join("")}window.showAddProductStep1=function(){U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Add New Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>

        <!-- Scan first â€” let AI pick the category -->
        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3 mb-4">
          <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> Scan First â€” let AI pick the category</p>
          <p class="text-[11px] text-gray-500">Upload your product photos, press SCAN WITH AI. It detects EVERY distinct product (a photo with a bag + watch + shoes + phone gives four separate listings; each detection fills its own listing). Review each detection, then the correct category form opens filled for you. Nothing is published automatically.</p>
          <div id="s1-drop-zone" class="drop-zone" onclick="pickMediaForForm('s1-img-upload')">
            <i data-lucide="image-plus" class="w-6 h-6 text-blue-400 mx-auto mb-2"></i>
            <p class="text-xs font-bold text-gray-300">Click or drag & drop product images or videos</p>
            <input type="file" id="s1-img-upload" class="hidden" multiple accept="image/*,video/mp4,video/webm,video/*,application/pdf" onclick="event.stopPropagation()" onchange="handleStep1ImageUpload(event)">
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
          ${_e.map(e=>`
            <button data-category="${d(e).toLowerCase()}" onclick="showAddProductStep2('${e.replace(/'/g,"\\'")}')" class="btn-press flex items-center gap-3 p-4 glass-soft border border-blue-500/15 hover:border-blue-500/40 rounded-2xl transition text-left">
              <i data-lucide="tag" class="w-5 h-5 text-blue-400 shrink-0"></i>
              <span class="text-sm font-semibold text-gray-200">${d(e)}</span>
            </button>`).join("")}
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()};window.filterProductCategoryChoices=function(e){const t=String(e||"").trim().toLowerCase();document.querySelectorAll("#product-category-grid [data-category]").forEach(i=>{const a=!t||i.dataset.category.includes(t);i.classList.toggle("hidden",!a)})};window.showAddProductStep2=function(e,t={}){const i=!!t.property_id,a=Ji("product",e),n=t.currency||"USD";U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeProductFormModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between gap-3 mb-6">
          <div class="min-w-0">
            <h3 class="text-2xl font-black text-white">${i?"Edit Product":"Add Product"} â€” ${d(e)}</h3>
            <p class="text-sm text-gray-500 mt-1 truncate">${i?`Editing: ${d(t.property_id)}`:"Fill in the product details below"}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${i?'<button type="button" onclick="closeProductFormModal()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Product Manager</button>':'<button type="button" onclick="showAddProductStep1()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5" title="Change category"><i data-lucide="arrow-left" class="w-4 h-4"></i> Category</button>'}
            <button type="button" onclick="closeProductFormModal()" class="btn-press px-4 h-11 flex items-center justify-center rounded-xl text-sm font-bold uppercase tracking-wide text-gray-400 hover:text-white hover:bg-gray-800 transition" title="Close (X) â€” return to Product Manager">
              <i data-lucide="x" class="w-4 h-4 mr-1.5"></i>Back
            </button>
          </div>
        </div>

        <form id="product-form" onsubmit="saveProduct(event,'${d(e)}','${i?t.property_id:""}')" class="space-y-6">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-sm font-bold text-white uppercase tracking-wide">Global Catalog Autofill</p>
                <p class="text-sm text-gray-500 mt-1">Pick a template, country, and currency to auto-build the listing title, description, and metadata.</p>
              </div>
              <button type="button" onclick="applyProductCatalogTemplate('${d(e)}')" class="btn-press px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition">Refresh Template</button>
            </div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Catalog Template</label><select class="input-field" name="catalog_template_id" id="pf-catalog_template_id" onchange="applyProductCatalogTemplate('${d(e)}')"><option value="">Choose a template...</option>${a.map(s=>`<option value="${s.id}">${d(s.label)} - ${d(s.subcategory||s.category)}</option>`).join("")}</select></div>
              <div class="sm:col-span-2"><label class="lbl">Currency</label><select class="input-field" name="currency" id="pf-currency" onchange="applyProductCatalogTemplate('${d(e)}')">${va(n)}</select></div>
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
              <p class="text-lg font-bold text-gray-300">Click or drag & drop images or videos here</p>
              <p class="text-sm text-gray-500 mt-1">PNG, JPG, WEBP, MP4, WebM. First item = cover.</p>
<input type="file" id="img-upload" class="hidden" multiple accept="image/*,video/mp4,video/webm,video/*,application/pdf" onclick="event.stopPropagation()" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${(t.images||[]).map((s,o)=>$e(s,o)).join("")}
            </div>
            <p class="text-sm text-gray-500 mt-1">Drag to reorder â€¢ âœ• deletes any image (even the main/cover â€” the next image becomes the cover) â€¢ â†» replaces â€¢ Upload up to 24 gallery images + videos</p>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
            <div id="image-url-inputs">
              ${(t.images||[]).map((s,o)=>`<input type="hidden" name="images" id="img-url-${o}" value="${d(s)}">`).join("")}
            </div>
          </div>

          <!-- AI Product Scanner (manual only â€” never auto-scans on upload) -->
          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="min-w-0">
                <p class="text-sm font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> AI Product Scanner</p>
                <p class="text-xs text-gray-500 mt-1">Upload a product image or video, then press SCAN WITH AI — it reads your photo and fills this form for you in one go. No extra clicks or review screens; just review the filled details and press Publish. Powered by Google Gemini free tier â€” add your FREE key in AI Settings if not set.</p>
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
            ${Vn(e,t,i)}
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
              <p class="text-sm text-gray-500 mt-1">Allowed price range is ${R} to ${q} in the selected currency.</p>
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
              <input type="checkbox" name="is_active" ${i?t.is_active?"checked":"":"checked"}>
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
              ${i?"One-Click Publish Changes":"One-Click Publish Product"}
            </button>
            <button type="submit" name="action" value="draft" class="btn-press px-7 bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 rounded-2xl text-base transition">
              Save Draft
            </button>
          </div>
        </form>
      </div>
    </div>`),Lt(),Mt(),Jt("pf-price"),Jt("pf-real_price"),Qt(e,"pricing"),document.getElementById("pf-price")?.addEventListener("input",()=>Qt(e,"pricing")),Xn(e,t.property_id||""),window._pfEscapeHandler=s=>{s.key==="Escape"&&closeProductFormModal()},document.addEventListener("keydown",window._pfEscapeHandler)};window.closeProductFormModal=function(){window._pfEscapeHandler&&(document.removeEventListener("keydown",window._pfEscapeHandler),window._pfEscapeHandler=null),window._productPublishInFlight=!1,ie=-1,re(),A()};window.switchProductFormCategory=function(e){const t=document.getElementById("product-form");if(!t)return;const i={},a=new FormData(t);for(const[n,s]of a.entries())n==="images"?(i.images=i.images||[],s&&!String(s).startsWith("blob:")&&i.images.push(String(s))):n==="tags"?(i.tags=i.tags||[],i.tags.push(s)):i[n]=s;i.is_featured=t.querySelector('[name="is_featured"]')?.checked||!1,i.is_active=t.querySelector('[name="is_active"]')?.checked||!1,i.property_id&&String(i.property_id).trim()?showAddProductStep2(e,i):showAddProductStep2(e,{images:i.images||[],...i})};function $e(e,t){const i=qe(e),a=ke(e);let n;return i?n='<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-300 select-none"><span class="text-2xl leading-none">📄</span><span class="text-[10px] font-bold mt-1">PDF</span></div>':a?n=`<video src="${d(e)}" muted loop preload="metadata" playsinline class="w-full h-full object-cover" onerror="this.style.display='none'"></video>
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow"><svg class="w-4 h-4 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:n=`<img src="${d(e)}" onerror="this.src='/fallback.svg'">`,`<div class="img-thumb ${t===0?"cover-img":""}" data-index="${t}" data-url="${d(e)}" title="${t===0?"Cover (main)":(a?"Video ":"Image ")+(t+1)}">
    ${n}
    <button class="rm" onclick="removeImage(${t})" type="button" title="Delete">✕</button>
    <button class="rp" onclick="document.getElementById('rp-input-${t}').click()" type="button" title="Replace">↻</button>
    <input type="file" accept="image/*,video/mp4,video/webm,video/*,application/pdf" class="rp-input" id="rp-input-${t}" onchange="replaceImage(${t}, this)">
  </div>`}function Lt(){const e=document.getElementById("drop-zone");e&&(e.addEventListener("dragover",t=>{t.preventDefault(),e.classList.add("drag-over")}),e.addEventListener("dragleave",()=>e.classList.remove("drag-over")),e.addEventListener("drop",t=>{t.preventDefault(),e.classList.remove("drag-over"),Wn(t.dataTransfer.files)}))}function Mt(){const e=document.getElementById("image-preview");!e||!window.Sortable||new Sortable(e,{animation:150,onEnd:()=>Ge()})}window.handleImageUpload=async function(e){await pi(e.target.files)};async function Wn(e){await pi(e)}async function wa(e,t,i){const a=new Array(e.length);let n=0;const s=Array.from({length:Math.min(Math.max(t,1),e.length)},async()=>{for(;n<e.length;){const o=n++;try{a[o]=await i(e[o],o)}catch{a[o]=null}}});return await Promise.all(s),a}function zn(e,t,i,a,n=9e4){return new Promise(s=>{let o=!1;const r=setTimeout(()=>{o||(o=!0,s({error:{message:`Upload timed out after ${Math.round(n/1e3)}s — the network is too slow for this file size.`}}))},n);b.storage.from(e).upload(t,i,a).then(l=>{o||(o=!0,clearTimeout(r),s(l))})})}async function Kn(e,t=1920,i=.82){const a=URL.createObjectURL(e);try{const n=new Image;await new Promise((m,f)=>{n.onload=m,n.onerror=f,n.src=a});const s=Math.min(1,t/Math.max(n.width,n.height)),o=Math.max(1,Math.round(n.width*s)),r=Math.max(1,Math.round(n.height*s)),l=document.createElement("canvas");l.width=o,l.height=r,l.getContext("2d").drawImage(n,0,0,o,r);const c=await new Promise(m=>l.toBlob(m,"image/jpeg",i));if(!c||!c.size)return null;const u=(e.name||"photo.jpg").replace(/\.[^.]+$/i,"")+".jpg";return new File([c],u,{type:"image/jpeg"})}catch{return null}finally{URL.revokeObjectURL(a)}}async function pi(e){const t=document.getElementById("image-preview");if(!t)return;const i=[];for(const n of e){const s=n.type==="application/pdf"||qe(n.name),o=Ce(n);if(!(!n.type.startsWith("image/")&&!s&&!o)){if(o&&n.size>100*1024*1024){g("Video must be under 100 MB.","error");continue}i.push(n)}}if(!i.length)return;const a=i.map(()=>{const n=document.createElement("div");return n.className="img-thumb uploading",n.style.cssText="min-width:90px;min-height:80px;",n.innerHTML='<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-400"><div class="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mb-1.5"></div><span class="text-[10px] font-bold">Uploading…</span></div>',t.appendChild(n),n});await wa(i,3,async(n,s)=>{const o=a[s],r=await mi(n);setTimeout(()=>{if(!(!o||!o.isConnected)){if(o.remove(),r){const l=document.createElement("div");l.innerHTML=$e(r,s);const c=l.firstElementChild,u=o.nextSibling;u?t.insertBefore(c,u):t.appendChild(c)}else g(`Failed to upload ${Ce(n)?"video":"image"}. Try a smaller file.`,"error");Ge(),lt(),Me(),window.lucide&&lucide.createIcons()}},0)})}async function mi(e){try{const{data:{session:t}}=await b.auth.getSession(),i=String(e.type||"").startsWith("image/"),a=Ce(e);let n=e;if(i&&e.size>250*1024){const l=await Kn(e);l&&l.size&&(n=l)}const s=n.type==="image/jpeg"?"jpg":(e.name||"photo.jpg").split(".").pop()||"jpg",o=`products/${Date.now()}-${Math.random().toString(36).slice(2)}`,r=a?3e5:9e4;for(let l=0;l<2;l++){const c=`${o}${l?"-"+Math.random().toString(36).slice(2,7):""}.${s}`,{error:u}=await zn("product-images",c,n,{contentType:n.type||e.type,upsert:!1},r);if(u)console.warn("product-images upload failed (attempt "+(l+1)+"):",u.message||u);else{const{data:m}=b.storage.from("product-images").getPublicUrl(c);if(m&&m.publicUrl)return m.publicUrl}}if(a)return null;try{const l=await D._downscaleImage(n,1200);if(l)return l}catch{}return URL.createObjectURL(e)}catch{return Ce(e)?null:URL.createObjectURL(e)}}async function Yn(){if(!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform()))return null;try{const{Camera:e,MediaTypeSelection:t}=await ji(async()=>{const{Camera:n,MediaTypeSelection:s}=await import("@capacitor/camera");return{Camera:n,MediaTypeSelection:s}},[]),{results:i}=await e.chooseFromGallery({mediaType:t.All,allowMultipleSelection:!0,includeMetadata:!0}),a=[];for(const n of i||[])if(n.webPath)try{const s=n.type===1,o=(n.metadata&&n.metadata.format||(s?"mp4":"jpg")).toLowerCase().replace(/^jpeg$/,"jpg"),r=await fetch(n.webPath).then(l=>l.blob());a.push(new File([r],`gallery-${Date.now()}-${Math.random().toString(36).slice(2)}.${o}`,{type:r.type||(s?"video/mp4":"image/jpeg")}))}catch{}return a}catch(e){return console.warn("Native gallery picker unavailable:",e),null}}window.pickMediaForForm=async function(e){if(!!!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform())){document.getElementById(e)?.click();return}const i=await Yn();!i||!i.length||(e==="s1-img-upload"?await handleStep1Files(i):await pi(i))};window.removeImage=function(e){const t=document.getElementById("image-preview");if(!t)return;const i=[...t.children];i[e]&&i[e].remove(),Ge(),lt(),Me()};window.replaceImage=async function(e,t){const i=document.getElementById("image-preview");if(!i||!t||!t.files||!t.files[0])return;const a=t.files[0],n=a.type==="application/pdf"||qe(a.name),s=Ce(a);if(!a.type.startsWith("image/")&&!n&&!s){g("Please choose an image, video, or PDF file.","error");return}if(s&&a.size>100*1024*1024){g("Video must be under 100 MB.","error");return}const o=await mi(a);if(!o)return;const l=[...i.querySelectorAll(".img-thumb")][e];l&&(l.outerHTML=$e(o,e),Ge(),lt(),Me(),g(n?"Document replaced. Save to apply.":s?"Video replaced. Save to apply.":"Image replaced. Save to apply.","info"))};function Ge(){const e=document.getElementById("image-preview"),t=document.getElementById("image-url-inputs");!e||!t||(t.innerHTML="",[...e.querySelectorAll(".img-thumb")].forEach((i,a)=>{const n=i.dataset.url||(i.querySelector("img")?i.querySelector("img").src:"");if(!n)return;const s=document.createElement("input");s.type="hidden",s.name="images",s.id=`img-url-${a}`,s.value=n,t.appendChild(s),i.dataset.index=a;const o=i.querySelector(".rm");o&&o.setAttribute("onclick",`removeImage(${a})`);const r=i.querySelector(".rp");r&&r.setAttribute("onclick",`document.getElementById('rp-input-${a}').click()`);const l=i.querySelector(".rp-input");l&&(l.id=`rp-input-${a}`,l.onchange=()=>replaceImage(a,l))}))}function lt(){const e=document.getElementById("image-preview");e&&[...e.querySelectorAll(".img-thumb")].forEach((t,i)=>{t.classList.toggle("cover-img",i===0);const a=ke(t.dataset.url);t.title=i===0?"Cover (main)":(a?"Video ":"Image ")+(i+1)})}function Me(){const e=document.getElementById("image-preview"),t=document.getElementById("gallery-counter");if(!e||!t)return;const i=[...e.querySelectorAll(".img-thumb")],a=i.length,n=i.filter(o=>ke(o.dataset.url)).length,s=a-n;if(a===0)t.textContent="No media yet — you can still save and publish anytime";else{const o=[];s>0&&o.push(`${s} image${s>1?"s":""}`),n>0&&o.push(`${n} video${n>1?"s":""}`),t.textContent=`${o.join(" + ")} — you can save and publish anytime`}t.className="text-sm mt-1 font-bold text-gray-400"}function Ne(e,t){return`kco_product_form_autosave_${e}_${t||"new"}`}function Jn(e){const t=new FormData(e),i={images:[],tags:[],fields:{}};for(const[a,n]of t.entries())a==="images"?n&&!String(n).startsWith("blob:")&&i.images.push(String(n)):a==="tags"?i.tags.push(String(n)):i.fields[a]=String(n);return i.fields.is_featured=e.querySelector('[name="is_featured"]')?.checked?"on":"",i.fields.is_active=e.querySelector('[name="is_active"]')?.checked?"on":"",i}function Qn(e,t){if(!t||typeof t!="object")return!1;const i=t.fields||{};Object.entries(i).forEach(([n,s])=>{const o=e.querySelector(`[name="${n}"]`);o&&(o.type==="checkbox"?o.checked=s==="on"||s===!0:o.value=s==null?"":String(s))});const a=Array.isArray(t.tags)?t.tags:[];if(e.querySelectorAll('input[name="tags"]').forEach(n=>{n.checked=a.includes(n.value)}),Array.isArray(t.images)){const n=document.getElementById("image-preview");n&&(n.innerHTML=t.images.map((s,o)=>$e(s,o)).join(""),Ge(),lt(),Me())}return!0}function Zt(){const e=document.getElementById("product-review-content"),t=document.getElementById("product-form");if(!e||!t)return;const i=t.querySelector('[name="title"]')?.value||"Untitled Product",a=t.querySelector('[name="brand"]')?.value||"N/A",n=parseFloat(t.querySelector('[name="price"]')?.value||"0")||0,s=parseFloat(t.querySelector('[name="real_price"]')?.value||"0")||0,o=t.querySelector('[name="stock_quantity"]')?.value,r=o===""||o==null?"Unlimited":o,l=T.section==="products"&&document.querySelector("#product-form")?.dataset?.category||"",c=[...t.querySelectorAll('input[name="tags"]:checked')].map(f=>f.value),u=document.querySelectorAll("#image-preview .img-thumb").length,m=t.querySelector('[name="is_active"]')?.checked;e.innerHTML=`
    <div class="grid grid-cols-2 gap-2">
      <div><span class="text-gray-500">Title</span><p class="text-white font-semibold">${d(i)}</p></div>
      <div><span class="text-gray-500">Brand</span><p class="text-white font-semibold">${d(a)}</p></div>
      <div><span class="text-gray-500">Price</span><p class="text-emerald-300 font-semibold">${s>n?`<span class="line-through text-gray-500 mr-1">$${s.toLocaleString()}</span>`:""}$${n.toLocaleString()}</p></div>
      <div><span class="text-gray-500">Stock</span><p class="text-white font-semibold">${d(r)}</p></div>
      <div><span class="text-gray-500">Media</span><p class="text-white font-semibold">${u}</p></div>
      <div><span class="text-gray-500">Status</span><p class="${m?"text-emerald-300":"text-amber-300"} font-semibold">${m?"Published":"Draft / Hidden"}</p></div>
    </div>
    <div class="mt-2 text-gray-400">Tags: ${c.length?d(c.join(", ")):"No tags selected"}</div>
    ${l?`<div class="text-gray-500 mt-1">Category: ${d(l)}</div>`:""}
  `}window.previewProductDraft=function(){const e=document.getElementById("product-form");if(!e)return;const t=document.querySelector("#image-preview img")?.src||"/fallback.svg",i=e.querySelector('[name="title"]')?.value||"Untitled Product",a=e.querySelector('[name="description"]')?.value||"No description yet.",n=e.querySelector('[name="brand"]')?.value||"N/A",s=parseFloat(e.querySelector('[name="price"]')?.value||"0")||0,o=parseFloat(e.querySelector('[name="real_price"]')?.value||"0")||0,r=e.dataset.category||"Product",l=e.querySelector('[name="stock_quantity"]')?.value||"Unlimited",c=e.querySelector('[name="is_active"]')?.checked;U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Live Draft Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="${d(t)}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
          <div class="space-y-2">
            <h4 class="text-xl font-black text-white">${d(i)}</h4>
            <div class="flex items-center gap-2">${Q(c?"active":"inactive")}<span class="badge bg-blue-500/10 text-blue-300 border-blue-500/20">${d(r)}</span></div>
            <p class="text-sm text-gray-400">${d(a)}</p>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">${o>s?`<span class="text-xs line-through text-gray-500 mr-1">$${o.toLocaleString()}</span>`:""}$${s.toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${d(l)}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2 col-span-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${d(n)}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>`)};function Xn(e,t){const i=document.getElementById("product-form");if(!i)return;i.dataset.category=e;const a=Ne(e,t),n=document.getElementById("product-autosave-note");if(!t)try{const l=localStorage.getItem(a);if(l){const c=JSON.parse(l);Qn(i,c)&&n&&(n.textContent="Autosave restored from your last session.",n.classList.remove("hidden"))}}catch{}const s=()=>{try{localStorage.setItem(a,JSON.stringify(Jn(i))),n&&(n.textContent=`Auto saved at ${new Date().toLocaleTimeString()}`,n.classList.remove("hidden"))}catch{}Zt()};let o;const r=()=>{clearTimeout(o),o=setTimeout(s,500)};i.querySelectorAll("input, textarea, select").forEach(l=>{l.addEventListener("input",r),l.addEventListener("change",r)}),Zt(),Me()}const Zn=["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],es=["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"],ts=["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"],is=["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"],as=["FWD","RWD","AWD","4WD"],xa=new Set(["price","real_price","stock_quantity","currency","images","tags","verification_status","is_featured","is_active","sku"]);function Ai(e){const t=e.id?`label[for="${e.id}"]`:null,i=t?document.querySelector(t):null;if(i)return i.textContent.replace(/\s+/g," ").trim().slice(0,60);const a=e.closest("div");if(a){const n=a.querySelector("label");if(n)return n.textContent.replace(/\s+/g," ").trim().slice(0,60)}return String(e.name||"").replace(/_/g," ")}function ns(e){const t=typeof e=="string"?document.querySelector(e):e;if(!t)return[];const i=new Set,a=[];return t.querySelectorAll("input[name], select[name], textarea[name]").forEach(n=>{const s=String(n.name||"");if(!s||s==="images"||i.has(s)||["hidden","file","submit","button"].includes(n.type))return;if(i.add(s),n.type==="checkbox"){const r=[...t.querySelectorAll(`input[name="${s}"]`)];a.push({key:s,label:Ai(n),type:"checkbox-group",options:r.map(l=>l.value).filter(Boolean),required:n.required});return}if(n.type==="radio")return;const o=n.tagName==="SELECT"?"select":n.tagName==="TEXTAREA"?"textarea":n.type==="number"?"number":"text";a.push({key:s,label:Ai(n),type:o,options:n.tagName==="SELECT"?[...n.options].map(r=>r.value).filter(Boolean):null,required:!!n.required})}),a}function ss(e){return!e||!e.length?"":`
THE COMPLETE LIST OF FORM FIELDS (every single one MUST be accounted for):
${e.filter(i=>!xa.has(i.key)).map(i=>{let a=i.type;return i.type==="select"&&i.options&&i.options.length<=24?a+=` [options: ${i.options.join(" | ")}]`:i.type==="checkbox-group"&&i.options&&i.options.length?a+=` [multi-select: ${i.options.join(" | ")}]`:i.type==="number"?a="number":i.type==="textarea"&&(a="long text"),`- "${i.key}" (${i.label}) — ${a}`}).join(`
`)}
`}const os=/^(n\/?a|none|unknown|not (available|specified|found|visible|applicable)|null|undefined|-{1,}|no data)$/i;function Gt(e,t){const i={...t||{}},a=new Set(Array.isArray(i.estimated)?i.estimated.map(u=>String(u)):[]),n=new Set(Array.isArray(i.missing_fields)?i.missing_fields.map(u=>String(u)):[]),s=[],o=[],r=u=>{if(u==null)return"";Array.isArray(u)&&(u=u.filter(f=>f!=null&&String(f).trim()!=="").join(", "));let m=String(u).replace(/\s+/g," ").trim();return m=m.replace(/^(answer|value|result|extracted)\s*[:\-]\s*/i,""),m},l=u=>{const m=r(u).replace(/[^0-9.,\-]/g,"").replace(/,(?=\d{3}\b)/g,"").replace(",","."),f=parseFloat(m);return Number.isFinite(f)?f:NaN};for(const u of e||[]){if(xa.has(u.key))continue;const m={key:u.key,label:u.label,status:"empty-ok",value:null,note:""};if(u.type==="checkbox-group"){const p=Array.isArray(i[u.key])?i[u.key].map(r).filter(Boolean):[],y=u.options&&u.options.length?p.filter(v=>u.options.includes(v)):p;y.length?(i[u.key]=y,m.status="filled",m.value=y.join(", ")):(delete i[u.key],p.length&&(m.status="flagged",m.note="values not in the allowed badge list were dropped",o.push(`${u.label}: invalid selection ignored`))),s.push(m);continue}if(!(i[u.key]!=null&&r(i[u.key])!=="")){m.status=n.has(u.key)?"missing":"empty-ok",s.push(m);continue}if(os.test(r(i[u.key]))){delete i[u.key],n.add(u.key),m.status="missing",m.note="document/AI said the value is unavailable",s.push(m);continue}if(u.type==="number"){const p=r(i[u.key]),y=l(i[u.key]);if(!Number.isFinite(y)){delete i[u.key],n.add(u.key),m.status="flagged",m.note=`"${p}" is not a valid number`,o.push(`${u.label}: not a valid number`),s.push(m);continue}if(/year/.test(u.key)&&(y<1800||y>new Date().getFullYear()+2)){delete i[u.key],n.add(u.key),m.status="flagged",m.note=`${y} is outside the plausible range`,o.push(`${u.label}: implausible value ${y}`),s.push(m);continue}i[u.key]=y,m.status="filled",m.value=String(y),a.has(u.key)&&(m.status="estimated",m.note="AI estimate â€” confirm"),s.push(m);continue}if(u.type==="select"&&u.options&&u.options.length){const p=ka({options:u.options.map(y=>({value:y}))},r(i[u.key]));if(p==null){m.status="flagged",m.note=`"${r(i[u.key])}" does not match any option â€” left empty`,o.push(`${u.label}: no matching option`),delete i[u.key],n.add(u.key),s.push(m);continue}i[u.key]=p,m.status="filled",m.value=p,p!==r(t?.[u.key])&&(m.note="matched to the closest option"),s.push(m);continue}let h=r(i[u.key]);u.type!=="textarea"&&u.type!=="text-long"&&h.length>120&&!["title"].includes(u.key)&&(m.status="flagged",m.note="unusually long â€” check it landed in the right field",o.push(`${u.label}: suspiciously long value`)),i[u.key]=h,m.status="filled",m.value=h.length>48?h.slice(0,48)+"â€¦":h,a.has(u.key)&&(m.status="estimated",m.note="AI estimate â€” confirm"),s.push(m)}if(e&&e.length){const u=new Set([...e.map(m=>m.key),"estimated","missing_fields","features","highlights","seo_keywords"]);Object.keys(i).forEach(m=>{u.has(m)||delete i[m]})}i.missing_fields=s.filter(u=>u.status==="missing").map(u=>u.key),i.estimated=s.filter(u=>u.status==="estimated").map(u=>u.key);const c={total:s.length,filled:s.filter(u=>u.status==="filled").length,estimated:s.filter(u=>u.status==="estimated").length,flagged:s.filter(u=>u.status==="flagged").length,missing:s.filter(u=>u.status==="missing").length};return{specs:i,checklist:s,flags:o,summary:c}}function _a(e,t){if(!e||!e.length)return"";const i={filled:'<span class="text-emerald-400 font-bold">âœ“</span>',estimated:'<span class="text-blue-300 font-bold">â‰ˆ</span>',flagged:'<span class="text-red-400 font-bold">!</span>',missing:'<span class="text-gray-500">â€”</span>',"empty-ok":'<span class="text-gray-700">Â·</span>'},a=e.filter(s=>s.status!=="empty-ok").map(s=>`<li class="flex items-start gap-2"><span class="shrink-0 w-4">${i[s.status]||""}</span><span><b>${d(s.label)}</b> <span class="text-gray-600">(${d(s.key)})</span>${s.value?` â€” <span class="text-gray-300">${d(String(s.value))}</span>`:""}${s.note?` <span class="text-gray-500">${d(s.note)}</span>`:""}</span></li>`).join(""),n=t.total-t.filled-t.estimated-t.flagged-t.missing;return`<details class="mt-2 rounded-xl border border-violet-500/20 bg-violet-500/5 p-3">
    <summary class="cursor-pointer text-[11px] font-bold text-violet-300 select-none">Field checklist â€” ${t.filled} filled Â· ${t.missing} not present in document Â· ${t.flagged} need review${t.estimated?` Â· ${t.estimated} estimates`:""}${n>0?` Â· ${n} not applicable to this listing type`:""}</summary>
    <ul class="mt-2 space-y-1.5 text-[11px] text-gray-300 max-h-64 overflow-y-auto pr-1">${a||'<li class="text-gray-500">No applicable fields found.</li>'}</ul>
  </details>`}const at={activeProvider:"gemini",maxImages:4,PROVIDERS:{gemini:{label:"Google Gemini (Free Tier)",scan:async(e,t)=>{const i=typeof t.onProgress=="function"?t.onProgress:()=>{};i(1,"Identifying the exact product from your imagesâ€¦");const a=await D.identifyProduct(e,t);if(!a||a.identified===!1)return{identification:a,specs:null,price:null};i(2,"Completing specifications and estimating a fair market priceâ€¦");const n=await D.completeSpecsAndPrice(e,a,t).catch(()=>null);return{identification:a,specs:n?n.specs:null,price:n?n.price:null}}}},async scan(e,t){const i=this.PROVIDERS[this.activeProvider];if(!i)throw new Error(`Scanner provider "${this.activeProvider}" is not configured.`);return i.scan(e||[],t)}};function ka(e,t){const i=[...e.options||[]].map(o=>o.value).filter(Boolean);if(i.includes(String(t)))return String(t);const a={petrol:"Gasoline",gas:"Gasoline",gasoline:"Gasoline",unleaded:"Gasoline",ev:"Electric",electric:"Electric","fully electric":"Electric",hybrid:"Hybrid","hybrid electric":"Hybrid","plug-in hybrid":"Plug-in Hybrid",phev:"Plug-in Hybrid",auto:"Automatic",automatic:"Automatic","automatic transmission":"Automatic",manual:"Manual","manual transmission":"Manual",cvt:"CVT","continuously variable":"CVT","dual clutch":"Dual-Clutch",dct:"Dual-Clutch",fwd:"FWD","front-wheel drive":"FWD","front wheel drive":"FWD",rwd:"RWD","rear-wheel drive":"RWD","rear wheel drive":"RWD",awd:"AWD","all-wheel drive":"AWD","all wheel drive":"AWD","4wd":"4WD","four-wheel drive":"4WD","four wheel drive":"4WD","4x4":"4WD",sedan:"Sedan",saloon:"Sedan",suv:"SUV",hatchback:"Hatchback",coupe:"Coupe","coupÃ©":"Coupe",convertible:"Convertible",wagon:"Wagon",estate:"Wagon",pickup:"Pickup","pick up":"Pickup",van:"Van",truck:"Truck","sports car":"Sports Car",motorcycle:"Motorcycle",yacht:"Yacht","like new":"Used - Like New","used - like new":"Used - Like New"},n=String(t).toLowerCase().trim();return a[n]?a[n]:i.find(o=>o.toLowerCase().includes(n)||n.includes(o.toLowerCase()))||null}function rs(e,t,i,a){const n={},s=[],o=new Map((a||[]).map(h=>[h.key,h])),r=h=>o.has(h),l=h=>t[h]==null||String(Array.isArray(t[h])?t[h].join(", "):t[h]).trim()==="",c=(h,p)=>{if(p==null||String(p).trim()==="")return;const y=o.get(h);!y||!l(h)||y.type==="select"&&y.options&&y.options.length&&!y.options.includes(p)||(n[h]=p,s.push(h))},u=i||{},m=/cars?|trucks?|vehicle|motor|marine/i.test(String(e||""))||u.listing_type==="vehicle"||!!u.body_type,f=/estate|propert|real|house|villa|home|land/i.test(String(e||""))||u.listing_type==="property"||!!u.property_type;if(m){const h=String(t.body_type||u.body_type||""),p=h.toLowerCase(),y=[t.engine,t.trim,t.mileage,t.fuel_economy,t.title,u.model,u.brand,h,t.wheels_tires].filter(Boolean).join(" ").toLowerCase(),v=parseInt(String(t.model_year||u.year||""),10);let _="";/plug[ -]?in|phev/.test(y)?_="Plug-in Hybrid":/hybrid|hev|mhev/.test(y)?_="Hybrid":/electric|tesla|\bbev\b|single[- ]?speed/.test(y)?_="Electric":/lpg|gpl|autogas|cng/.test(y)?_="LPG":/bio[- ]?diesel/.test(y)?_="Bio-diesel":/diesel|tdi|\bhdi\b|\bcrdi\b|\bcdti\b|\bd4d\b|\bdci\b|turbo[- ]?d/.test(y)?_="Diesel":(/gasoline|petrol|\bgas\b|unleaded/.test(y),_="Gasoline"),c("fuel_type",_);let x="";/manual|\bstick\b/.test(y)?x="Manual":/cvt|continuously/.test(y)?x="CVT":/dual[- ]?clutch|\bdct\b/.test(y)?x="Dual-Clutch":/semi[- ]?automatic|\bamt\b/.test(y)?x="Semi-Automatic":/automatic|\bauto\b|shift[- ]?tronic|torque[- ]?converter|\d[ -]?speed/.test(y)?x="Automatic":x=Number.isFinite(v)&&v<2014?"Manual":"Automatic",c("transmission",x);let w="";/4wd|\b4x4\b|four[- ]?wheel|quad/.test(y)?w="4WD":/awd|all[- ]?wheel/.test(y)?w="AWD":/rwd|rear[- ]?wheel/.test(y)?w="RWD":/fwd|front[- ]?wheel/.test(y)?w="FWD":/pickup|truck/.test(p)?w="4WD":/suv/.test(p)?w="AWD":/motorcycle/.test(p)?w="RWD":w="FWD",c("drive_type",w);const k={sedan:5,hatchback:5,coupe:4,convertible:4,wagon:5,suv:5,"sports car":2,"luxury sedan":5,pickup:5,truck:3,van:8,bus:20,motorhome:6,motorcycle:2,yacht:6,"jet ski":2},P={sedan:4,hatchback:5,coupe:2,convertible:2,wagon:5,suv:5,"sports car":2,"luxury sedan":4,pickup:4,truck:4,van:5,bus:2,motorhome:3,motorcycle:0,"jet ski":0};for(const[V,Y]of[["seating_capacity",k],["doors",P]]){if(!r(V))continue;const ae=Object.entries(Y).find(([Z])=>p.includes(Z));ae&&c(V,String(ae[1]))}const E=String(t.vehicle_type||u.vehicle_type||"").toLowerCase();!h&&r("body_type")&&(/motorhome|rv/.test(E)?c("body_type","Motorhome"):/jet/.test(E)?c("body_type","Jet Ski"):/marine|boat|yacht/.test(E)?c("body_type","Yacht"):/bus/.test(E)?c("body_type","Bus"):/motorcycle/.test(E)?c("body_type","Motorcycle"):/truck/.test(E)&&c("body_type","Truck"));const S=String(t.condition||"").toLowerCase();!t.mileage&&/new/.test(S)&&r("mileage")&&c("mileage","0 mi"),!t.condition&&r("condition")&&c("condition","Used - Good"),!t.previous_owners&&r("previous_owners")&&c("previous_owners",/new/.test(S)?"None (new)":"1"),!t.registration_status&&r("registration_status")&&c("registration_status","Registered"),!t.inspection_status&&r("inspection_status")&&c("inspection_status","Not Inspected"),!t.warranty&&r("warranty")&&c("warranty","Manufacturer warranty - confirm remaining coverage with the seller")}if(f){const h=String(t.property_type||u.property_type||"").toLowerCase(),p=String(t.building_size||t.floor_plan_total_area||""),y=parseFloat(p.replace(/[^0-9.]/g,""));let v=null,_=null;if(Number.isFinite(y)&&y>100&&(v=Math.max(2,Math.min(6,Math.round(y/600))),_=Math.max(1,Math.min(4,v>4?3:v-1))),l("bedrooms")&&r("bedrooms")&&v&&c("bedrooms",String(v)),l("bathrooms")&&r("bathrooms")&&_&&c("bathrooms",String(_)),l("listing_status")&&r("listing_status")){const x=String(t.title||"")+" "+String(t.description||"");c("listing_status",/for rent|lease|\brent\b/.test(x.toLowerCase())?"rent":"sale")}if(l("furnished")&&r("furnished")&&c("furnished",/land|plot|acre/.test(h+" "+String(t.land_size||""))?"Unfurnished":"Furnished"),l("condition")&&r("condition")&&c("condition","Good"),l("floors")&&r("floors")){const x=/mansion|villa|townhouse/.test(h)?"2":/apartment|condo|single/.test(h)?"1":null;x&&c("floors",x)}l("kitchens")&&r("kitchens")&&c("kitchens","1"),l("parking_spaces")&&r("parking_spaces")&&/car|garage|parking/.test(String(t.garage||"").toLowerCase())&&c("parking_spaces","1"),l("property_type")&&r("property_type")&&c("property_type",/land|plot|acre/.test(h+" "+String(t.land_size||""))?"Land":"Single-Family Home")}return{specs:n,estimated:s}}function Ci(e){const t=[];return e.year&&t.push(e.year),e.brand&&t.push(e.brand),e.model&&t.push(e.model),!e.model&&e.body_type&&t.push(e.body_type),t.join(" ")||e.detected_name||""}const gi=new Set(["images","tags","currency","catalog_template_id","country_code","listing_type","category","property_id","id","slug","user_id","latitude","longitude","cover_image","video_url"]);function bi(e,{titleFallback:t="Product",descriptionFallback:i="",visionUsed:a=!0}={}){const n=document.querySelector(e);if(!n||!a)return 0;let s=0;return n.querySelectorAll("input, textarea, select").forEach(o=>{const r=String(o.name||"").trim();if(!r||gi.has(r))return;const l=String(o.type||"").toLowerCase();if(!["hidden","checkbox","radio","file","submit","button","image","password"].includes(l)&&!o.disabled&&String(o.value||"").trim()===""){if(r==="price"||r==="real_price"){const c=Number.isFinite(Number(R))?Number(R):1;o.value=String(c),s++;return}if(r==="stock_quantity"){o.value="1",s++;return}if(r==="title"){o.value=t,s++;return}if(r==="description"){o.value=i||`${t} â€” full details to be confirmed by the seller. Review and edit everything before publishing.`,s++;return}if(l==="number"||l==="range"||l==="tel"){o.value="0",s++;return}}}),s}function ls(e,t={}){const i=e&&e.identification&&e.identification.identified!==!1?e.identification:{},a=e&&e.specs?e.specs:{},n=e&&e.price?e.price:null,s=t&&t.visionUsed!==void 0?t.visionUsed:e&&e.visionUsed!==void 0?e.visionUsed:!0,o=[],r=P=>Array.isArray(P)?P.join(", "):String(P??"").trim(),l=(P,E,S)=>{if(E==null||r([E])==="")return;const V=document.querySelector(`#product-form [name="${P}"]`);if(!V)return;let Y=String(E);if(S&&!S.includes(Y)){const ae=ka(V,Y);if(ae===null)return;Y=ae}V.value=Y,o.push(P)};l("brand",i.brand),l("model",i.model),l("color",i.color),l("condition",i.condition,Zn),l("subcategory",i.subcategory),l("body_type",i.body_type||a.body_type,es),l("model_year",a.model_year||i.year),l("title",a.title||Ci(i)),l("description",a.description),l("engine",a.engine),l("transmission",a.transmission,ts),l("fuel_type",a.fuel_type,is),l("drive_type",a.drive_type,as),l("horsepower",a.horsepower),l("mileage",a.mileage),l("seating_capacity",a.seating_capacity),l("doors",a.doors),l("safety_features",r(a.safety_features)),l("storage",a.storage),l("ram",a.ram),l("processor",a.processor),l("display",a.display),l("graphics",a.graphics),l("os",a.os),l("material",a.material),l("size",a.size),l("gender",a.gender),l("platform",a.platform),l("type",a.type||i.type),l("age_range",a.age_range),l("skin_type",a.skin_type),l("ingredients",a.ingredients),l("dimensions",a.dimensions),l("author",a.author),l("publisher",a.publisher),l("language",a.language),l("format",a.format),l("isbn",a.isbn),l("pages",a.pages),l("edition",a.edition),l("quantity",a.quantity),l("pet_type",a.pet_type),l("lens",a.lens),l("sensor",a.sensor),l("megapixels",a.megapixels),l("video",a.video),l("license",a.license),l("version",a.version),l("duration",a.duration),l("followers",a.followers),l("engagement",a.engagement),l("niche",a.niche),l("usage",a.usage),l("shelf_life",a.shelf_life),l("assembly",a.assembly),l("weatherproof",a.weatherproof),l("warranty",a.warranty||i.warranty),l("availability_status",a.availability_status),l("features_text",r(a.features)),l("highlights_text",r(i.highlights||a.highlights)),l("seo_keywords_text",r(a.seo_keywords));const c=new Set((Array.isArray(a.tags)?a.tags:[]).map(P=>String(P).trim()));document.querySelectorAll('#product-form input[name="tags"]').forEach(P=>{c.has(P.value)&&(P.checked=!0,o.push("tags"))});const u=Number(a.stock_quantity);Number.isFinite(u)&&u>0&&l("stock_quantity",u);const m=document.querySelector('#product-form [name="price"]'),f=document.querySelector('#product-form [name="real_price"]'),h=n?Number(n.estimated_price):NaN,p=n?Number(n.suggested_discount_price):NaN,y=Number.isFinite(Number(R))?Number(R):0,v=Number.isFinite(Number(q))?Number(q):999999999,_=P=>Math.max(y,Math.min(v,Math.round(P)));if(Number.isFinite(h)&&h>0){f&&(f.value=String(_(h)),o.push("real_price"));const P=Number.isFinite(p)&&p>0&&p<h?p:h;m&&(m.value=String(_(P)),o.push("price"))}const x=Ci(i)||i.detected_name||"Product",w=a.description||`${x} for sale on Weverse Online Shop. Review the details below and edit anything before publishing.`,k=bi("#product-form",{titleFallback:x,descriptionFallback:w,visionUsed:s});return k&&o.push(`${k} auto-completed (safe defaults)`),Zt(),{filled:o}}function Ve(e){const t=String(e||"").trim().toLowerCase(),i=_e.find(o=>o.toLowerCase()===t);if(i)return{category:i,listing_type:null};if(/(house|villa|apartment|condo|mansion|land|estate|real estate|property|building|bungalow|townhouse|ranch|farmhouse)/.test(t))return{category:null,listing_type:"property"};const a={bag:"Fashion",bags:"Fashion",handbag:"Fashion",handbags:"Fashion",backpack:"Fashion",backpacks:"Fashion",purse:"Fashion",wallet:"Fashion",wallets:"Fashion",luggage:"Travel & Luggage",sneaker:"Fashion",sneakers:"Fashion",shoe:"Fashion",shoes:"Fashion",boot:"Fashion",boots:"Fashion",footwear:"Fashion",sandal:"Fashion",sandals:"Fashion",heel:"Fashion",heels:"Fashion",phone:"Phones",smartphone:"Phones",smartphones:"Phones",iphone:"Phones","mobile phone":"Phones",laptop:"Computers",laptops:"Computers",computer:"Computers",notebook:"Computers",macbook:"Computers",pc:"Computers",desktop:"Computers",electronics:"Electronics",electronic:"Electronics",gadget:"Electronics",gadgets:"Electronics",tv:"Electronics",television:"Electronics",headphones:"Electronics",speaker:"Electronics",speakers:"Electronics",soundbar:"Electronics",tablet:"Electronics",earbuds:"Electronics",camera:"Cameras & Photography",cameras:"Cameras & Photography",dslr:"Cameras & Photography",drone:"Cameras & Photography",jewelry:"Jewelry",jewellery:"Jewelry",ring:"Jewelry",necklace:"Jewelry",earring:"Jewelry",earrings:"Jewelry",bracelet:"Jewelry",watch:"Watches & Accessories",watches:"Watches & Accessories",wristwatch:"Watches & Accessories","smart watch":"Watches & Accessories",clothing:"Fashion",clothes:"Fashion",fashion:"Fashion",shirt:"Fashion",shirts:"Fashion",dress:"Fashion",dresses:"Fashion",jacket:"Fashion",jackets:"Fashion",hoodie:"Fashion",jeans:"Fashion","t-shirt":"Fashion",tshirt:"Fashion",apparel:"Fashion","men's fashion":"Men","mens fashion":"Men","women's fashion":"Women","womens fashion":"Women",car:"Cars",cars:"Cars",vehicle:"Cars",vehicles:"Cars",automobile:"Cars",suv:"Cars",sedan:"Cars","luxury car":"Cars","luxury cars":"Cars",truck:"Trucks",trucks:"Trucks",trailer:"Trucks",bus:"Trucks",motorcycle:"Motorcycles",motorbike:"Motorcycles","motor bike":"Motorcycles",bicycle:"Bicycles",bicycles:"Bicycles",cycling:"Bicycles",bike:"Bicycles",motorhome:"RV & Camper Accessories",motorhomes:"RV & Camper Accessories",camper:"RV & Camper Accessories",rv:"RV & Camper Accessories",boat:"Marine & Boating",boats:"Marine & Boating",yacht:"Marine & Boating",jet:"Marine & Boating",beauty:"Beauty",skincare:"Beauty",cosmetics:"Beauty",makeup:"Beauty",perfume:"Beauty",kitchen:"Kitchen",appliance:"Home Appliances",appliances:"Home Appliances",blender:"Kitchen",kettle:"Kitchen",cookware:"Kitchen",vacuum:"Home Appliances",furniture:"Furniture",sofa:"Furniture",chair:"Furniture",chairs:"Furniture",table:"Furniture",tables:"Furniture",bed:"Furniture",mattress:"Furniture",desk:"Furniture",toy:"Toys & Hobbies",toys:"Toys & Hobbies",game:"Gaming",games:"Gaming",gaming:"Gaming",console:"Gaming",food:"Food & Groceries",groceries:"Food & Groceries",snack:"Food & Groceries",snacks:"Food & Groceries",beverage:"Food & Groceries",baby:"Baby",kids:"Kids",stroller:"Baby",health:"Health & Medical",medical:"Health & Medical",supplement:"Health & Medical",fitness:"Sports",sport:"Sports",sports:"Sports",gym:"Sports",dumbbell:"Sports",book:"Books",books:"Books",textbook:"Books",novel:"Books",stationery:"Office",office:"Office",printer:"Office",pen:"Office",pet:"Pets",pets:"Pets",dog:"Pets",cat:"Pets",musical:"Musical Instruments",guitar:"Musical Instruments",piano:"Musical Instruments",instrument:"Musical Instruments",drum:"Musical Instruments",software:"Software & Digital Products",digital:"Software & Digital Products",account:"Software & Digital Products",accounts:"Software & Digital Products",instagram:"Software & Digital Products",tiktok:"Software & Digital Products",camping:"Camping & Hiking",tent:"Camping & Hiking",hiking:"Camping & Hiking",flower:"Flowers & Gifts",flowers:"Flowers & Gifts",gift:"Flowers & Gifts",gifts:"Flowers & Gifts",wedding:"Wedding Supplies",party:"Party & Event Supplies",coin:"Coins & Bullion",coins:"Coins & Bullion",art:"Arts & Crafts",painting:"Arts & Crafts",craft:"Arts & Crafts"},n=a[t]||a[t.replace(/s$/,"")]||a[t.replace(/\s+/g," ")];if(n)return{category:n,listing_type:null};for(const o of _e)if(t.includes(o.toLowerCase())||t.length>2&&o.toLowerCase().includes(t))return{category:o,listing_type:null};return{category:dn(t)||"Other",listing_type:null}}function ds(e){const t=String(e||"").toLowerCase().trim();if(!t)return null;const i=ii.find(n=>n.toLowerCase()===t);return i||ii.find(n=>n.toLowerCase().includes(t)||t.includes(n.toLowerCase()))||null}window._resolveScanConfirm=function(e,t){};let $=[],ye=[],te="",ie=-1;const ei="scanner-scan-status";let K=!1,Sa=0,fe=0,J=0,Ae=!1,Ii=0,cs=0,$a=0,Fe=0;function Bt(e,t){const a=(Array.isArray(e.image_indices)?e.image_indices:[]).map(n=>t[n]).filter(Boolean);return a.length?a:t}function yi(e,t,i,a){const n=Ve(e.category),s=e.listing_type==="property"||n&&n.listing_type==="property",o=s?"Real Estate":n.category||e.category||"Other",r=e.confidence||"medium",l={high:"bg-emerald-500/10 text-emerald-400 border-emerald-500/20",medium:"bg-amber-500/10 text-amber-400 border-amber-500/20",low:"bg-red-500/10 text-red-400 border-red-500/20"}[r]||"bg-amber-500/10 text-amber-400 border-amber-500/20",c=Bt(e,ye).slice(0,3);return`
  <div class="scan-review-card rounded-xl border border-violet-500/30 bg-violet-500/10 p-3 space-y-2 fade-in" data-i="${t}">
    <div class="flex items-center justify-between gap-2 flex-wrap">
      <p class="text-xs font-bold text-white">${t+1}. ${d(e.detected_name||"Detected product")}</p>
      <span class="inline-flex items-center gap-1">
        ${e._photoNotRead?'<span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border bg-red-500/10 text-red-300 border-red-500/20" title="The AI could not read the photos for this card - it was created from saved details only.">PHOTO NOT READ</span>':""}
        ${i?'<span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border bg-orange-500/10 text-orange-300 border-orange-500/20" title="This product appears more than once — consider deleting the duplicate.">DUPLICATE</span>':""}
        <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${l}">${d(r).toUpperCase()}</span>
      </span>
    </div>
    <div class="flex items-center gap-2 flex-wrap">
      ${c.map(u=>`<img src="${d(u)}" class="w-10 h-10 rounded-lg object-cover border border-violet-500/20" onerror="this.src='/fallback.svg'">`).join("")}
      <span class="text-[11px] text-gray-400">${s?"Real Estate":d(o)} &middot; ${(e.image_indices||[]).length||1} image(s)</span>
    </div>
    <div class="flex flex-wrap gap-2">
      ${a?`<button type="button" onclick="scanStreamPublish(${t})" class="btn-press px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition" title="Open this product, fill it with the AI scan and publish it right now with one click">Publish Now</button>`:""}
      <button type="button" onclick="scanReviewContinue(${t})" class="btn-press px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg transition">Continue to ${s?"Properties Manager":"its form"}</button>
      <button type="button" onclick="scanReviewEdit(${t})" class="btn-press px-4 py-2 bg-gray-700/60 hover:bg-gray-600 text-gray-200 text-xs font-bold rounded-lg transition">Edit</button>
      <button type="button" onclick="scanReviewDelete(${t})" class="btn-press px-3 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg transition" title="Permanently delete this product from the database">Delete</button>
      <button type="button" onclick="scanReviewRemove(${t})" class="btn-press px-4 py-2 bg-red-900/40 hover:bg-red-800/60 text-red-200 text-xs font-bold rounded-lg transition">Remove</button>
      <button type="button" onclick="scanReviewCancel()" class="btn-press px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 text-xs font-bold rounded-lg transition">Cancel</button>
    </div>
  </div>`}window.scanReviewRender=function(){if(te==="scanner-scan-status"){scanStreamRender();return}const e=document.getElementById(te);if(!e)return;if(e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),!$.length){e.classList.add("text-gray-400"),e.textContent="All detected products were removed — nothing was changed.";return}const t={};for(const i of $){const a=O(i.brand),n=O(i.model),s=O(i.detected_name),o=a&&n?`${a}::${n}`:s||`${a}::${n}`;o&&(t[o]=(t[o]||0)+1)}e.classList.add("text-gray-100"),e.innerHTML=`
    <div class="space-y-3">
      <div>
        <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="list-checks" class="w-4 h-4 text-violet-400"></i> ${$.length} distinct product${$.length>1?"s":""} detected</p>
        <p class="text-[11px] text-gray-400 mt-1">Review each card below. Edit, remove or delete duplicates as needed, then press Continue to open each product's form and publish it.</p>
      </div>
      ${$.map((i,a)=>{const n=O(i.brand),s=O(i.model),o=O(i.detected_name),r=n&&s?`${n}::${s}`:o||`${n}::${s}`;return yi(i,a,r&&t[r]>1)}).join("")}
    </div>`,window.lucide&&lucide.createIcons()};window.scanReviewContinue=async function(e){const t=$[e];if(!t)return;ie=e;const i=Bt(t,ye),a=Ve(t.category);if(t.listing_type==="property"||a&&a.listing_type==="property"){(te==="s1-scan-status"||te==="scanner-scan-status")&&(re(),he=[]),ks(t,i);return}const s=a.category||t.category||"Other";if(te==="s1-scan-status"||te==="scanner-scan-status"){try{localStorage.removeItem(Ne(s,""))}catch{}he=[];let o=t.property_id?Te[t.property_id]:null;o&&o.specifications&&typeof o.specifications=="object"&&(o={...o,...o.specifications}),showAddProductStep2(s,o?{...o,images:i}:{images:i}),await nt(t,i,s)}else{const o=document.getElementById("product-form"),r=o&&o.dataset.category||"";if(s!==r){try{localStorage.removeItem(Ne(s,""))}catch{}switchProductFormCategory(s);const l=document.getElementById(te);l&&(l.classList.remove("hidden"),l.classList.add("text-blue-300"),l.textContent=`Category changed to ${s} â€” finishing the scanâ€¦`),window.lucide&&lucide.createIcons()}await nt(t,i,s)}};window.scanReviewEdit=function(e){const t=$[e];if(!t)return;const i=document.querySelector(`.scan-review-card[data-i="${e}"]`);if(!i)return;const a=Ve(t.category),s=t.listing_type==="property"||a&&a.listing_type==="property"?"Real Estate":a.category||t.category||"Other",o=_e.map(r=>`<option value="${d(r)}" ${r===s?"selected":""}>${d(r)}</option>`).join("");i.innerHTML=`
    <p class="text-xs font-bold text-white">Edit detected product #${e+1}</p>
    <div class="space-y-2">
      <input id="sr-name-${e}" class="input-field !py-2 !text-xs" value="${d(t.detected_name||"")}" placeholder="Product name">
      <input id="sr-brand-${e}" class="input-field !py-2 !text-xs" value="${d(t.brand||"")}" placeholder="Brand">
      <input id="sr-model-${e}" class="input-field !py-2 !text-xs" value="${d(t.model||"")}" placeholder="Model">
      <select id="sr-cat-${e}" class="input-field !py-2 !text-xs">${o}</select>
    </div>
    <div class="flex flex-wrap gap-2">
      <button type="button" onclick="scanReviewApplyEdit(${e})" class="btn-press px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition">Apply</button>
      <button type="button" onclick="scanReviewRender()" class="btn-press px-4 py-2 bg-gray-700/60 hover:bg-gray-600 text-gray-200 text-xs font-bold rounded-lg transition">Back</button>
    </div>`};window.scanReviewApplyEdit=function(e){const t=$[e];if(!t)return;const i=document.getElementById(`sr-name-${e}`)?.value,a=document.getElementById(`sr-brand-${e}`)?.value,n=document.getElementById(`sr-model-${e}`)?.value,s=document.getElementById(`sr-cat-${e}`)?.value;i&&(t.detected_name=i),a&&(t.brand=a),n&&(t.model=n),s&&(t.category=s),scanReviewRender()};window.scanReviewRemove=function(e){$.splice(e,1),scanReviewRender()};window.scanReviewDelete=async function(e){const t=$[e];if(!t)return;const i=t.property_id;if(!i){$.splice(e,1),scanReviewRender();return}if(confirm(`Permanently delete "${t.detected_name||"this product"}" from the database and showroom?`)){try{await b.from("showroom_listings").delete().eq("property_id",i),ot(i);try{await Oe(i,!0)}catch{}}catch{}$.splice(e,1),scanReviewRender(),g(`${t.detected_name||"Product"} deleted`)}};window.scanReviewCancel=function(){const e=document.getElementById(te);e&&(e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300"),e.classList.add("text-gray-400"),e.textContent="Scan cancelled — nothing was changed.")};function O(e){return String(e||"").toLowerCase().replace(/[^a-z0-9]/g,"").trim()}let ee=[],ue=[],pe=[];function Pa(){const e=document.getElementById(ei);if(!e)return;e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),e.classList.add("text-gray-100");const t=ue.reduce((i,a)=>i+a.length-1,0);e.innerHTML=`
    <div class="space-y-3">
      <div class="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3">
        <p class="text-xs font-bold text-rose-300 flex items-center gap-2"><i data-lucide="copy" class="w-4 h-4"></i> ${ue.length} duplicate product group${ue.length>1?"s":""} found — ${t} extra listing${t>1?"s":""} to delete</p>
        <p class="text-[11px] text-gray-400 mt-1">The AI found products that look the same (same brand + model or name). Review each group below — keep one copy, delete the rest. You can also delete entire groups.</p>
      </div>
      ${ee.map((i,a)=>{const n=Ve(i[0].category),s=n&&!n.listing_type&&(n.category||i[0].category)||"Other";return`
        <div class="rounded-xl border border-amber-500/25 bg-amber-500/8 p-3 space-y-2">
          <p class="text-[11px] font-bold text-amber-300 uppercase tracking-wide">Group ${a+1}: ${d(i[0].detected_name||"Unknown product")} (${s})</p>
          ${i.map((o,r)=>{const l=pe.indexOf(o);return`
            <div class="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 p-2">
              <img src="${d((o.image_indices||[0]).map(c=>ye[c]).filter(Boolean)[0]||"")}" class="w-10 h-10 rounded-lg object-cover border border-white/10" onerror="this.src='/fallback.svg'">
              <div class="flex-1 min-w-0">
                <p class="text-[11px] font-bold text-white truncate">${d(o.detected_name||"Product")}</p>
                <p class="text-[10px] text-gray-400">${d(o.brand||"—")} ${d(o.model||"")} · ${d(o.property_id||"")}</p>
              </div>
              ${o._photoNotRead?'<span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-red-500/15 text-red-300 border border-red-500/20">NOT READ</span>':""}
              <button type="button" onclick="dupReviewDelete(${a},${r},${l})" class="btn-press px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-bold rounded-lg transition shrink-0">Delete</button>
            </div>`}).join("")}
          <button type="button" onclick="dupReviewDeleteGroup(${a})" class="btn-press w-full px-3 py-1.5 bg-rose-900/40 hover:bg-rose-800/60 text-red-200 text-[11px] font-bold rounded-lg transition">Delete ALL ${i.length} in this group</button>
        </div>`}).join("")}
      <div class="flex flex-wrap gap-2 pt-1">
        <button type="button" onclick="dupReviewFinish()" class="btn-press flex-1 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition">Keep & continue publishing</button>
        <button type="button" onclick="dupReviewDeleteAll()" class="btn-press px-4 py-2.5 bg-rose-600/20 hover:bg-rose-600/30 text-rose-200 text-xs font-bold rounded-xl transition">Delete ALL duplicates</button>
      </div>
    </div>`,window.lucide&&lucide.createIcons()}window.dupReviewDelete=async function(e,t,i){const a=ee[e],n=a[t];if(!n)return;const s=n.property_id;if(!confirm(`Permanently delete "${n.detected_name||"this product"}" from the database and showroom?`))return;if(s)try{await b.from("showroom_listings").delete().eq("property_id",s),ot(s);try{await Oe(s,!0)}catch{}}catch{}a.splice(t,1),a.length<2&&ee.splice(e,1),ue=ee.filter(r=>r.length>1),pe.splice(i,1),ee=[];const o={};for(const r of pe){const l=O(r.brand),c=O(r.model),u=O(r.detected_name),m=l&&c?`${l}::${c}`:u||`${l}::${c}`;m&&(o[m]=o[m]||[]).push(r)}if(ee=Object.values(o).filter(r=>r.length>1),ue=ee,g(`${d(n.detected_name||"Product")} deleted`),!ue.length){dupReviewFinish();return}Pa()};window.dupReviewDeleteGroup=async function(e){const t=ee[e];if(!t||!confirm(`Permanently delete ${t.length-1} duplicate listing${t.length-1>1?"s":""} in this group from the database and showroom?`))return;for(let a=t.length-1;a>=1;a--){const n=t[a],s=n.property_id;if(s)try{await b.from("showroom_listings").delete().eq("property_id",s),ot(s);try{await Oe(s,!0)}catch{}}catch{}const o=pe.indexOf(n);o>=0&&pe.splice(o,1)}g(`Deleted ${t.length-1} duplicate${t.length>2?"s":""} from group ${e+1}`),ee=[];const i={};for(const a of pe){const n=O(a.brand),s=O(a.model),o=O(a.detected_name),r=n&&s?`${n}::${s}`:o||`${n}::${s}`;r&&(i[r]=i[r]||[]).push(a)}if(ee=Object.values(i).filter(a=>a.length>1),ue=ee,!ue.length){dupReviewFinish();return}Pa()};window.dupReviewDeleteAll=async function(){const e=ue.reduce((i,a)=>i+a.length-1,0);if(!confirm(`Permanently delete ALL ${e} duplicate listing${e!==1?"s":""} from the database and showroom? This cannot be undone.`))return;let t=0;for(const i of ee)for(let a=i.length-1;a>=1;a--){const n=i[a],s=n.property_id;if(s)try{await b.from("showroom_listings").delete().eq("property_id",s),ot(s);try{await Oe(s,!0)}catch{}}catch{}const o=pe.indexOf(n);o>=0&&pe.splice(o,1),t++}g(`Deleted ${t} duplicate listing${t!==1?"s":""}`),dupReviewFinish()};window.dupReviewFinish=function(){if($=pe.slice(),ee=[],ue=[],pe=[],A(),$.length){const e=document.getElementById(ei);e&&(e.classList.remove("hidden","text-red-400","text-amber-300","text-blue-300","text-gray-400"),e.classList.add("text-gray-100"),e.innerHTML=`
        <div class="space-y-3">
          <div class="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-3">
            <p class="text-xs font-bold text-emerald-300 flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4"></i> Duplicates cleaned — ${$.length} unique product${$.length>1?"s":""} ready to publish</p>
          </div>
          ${$.map((t,i)=>yi(t,i)).join("")}
        </div>`,window.lucide&&lucide.createIcons())}else{const e=document.getElementById(ei);e&&(e.classList.remove("hidden","text-blue-300","text-amber-300"),e.classList.add("text-gray-400"),e.textContent="All duplicates removed — nothing left to publish."),g("All duplicates removed.","info")}};let Qe=null;async function Ea(){if(Qe)return Qe;let e={};try{const{data:n}=await b.from("site_settings").select("site_name,brand_name,contact_email,contact_phone,whatsapp_number").limit(1).maybeSingle();e=n||{}}catch{}const t=String(e.site_name||e.brand_name||"").trim(),i=String(e.contact_phone||e.whatsapp_number||"").trim(),a=String(e.contact_email||"").trim();return!t&&!i&&!a?Qe={name:"Company",phone:"",email:""}:Qe={name:t,phone:i,email:a},Qe}async function Aa(e,t={}){const i=e&&e.identification&&e.identification.identified!==!1?e.identification:{},a=e&&e.specs?e.specs:{},n=e&&e.price?e.price:null,s=t&&t.visionUsed!==void 0?t.visionUsed:e&&e.visionUsed!==void 0?e.visionUsed:!0,o=[],r=M=>Array.isArray(M)?M.join(", "):String(M??"").trim(),l=(M,H)=>{if(H==null||r([H])==="")return;const me=document.querySelector(`#property-form [name="${M}"]`);me&&(me.value=String(H),o.push(M))},c=i.property_type||a.property_type;if(c){const M=ds(c);M&&l("property_type",M)}s&&(l("title",a.title||i.detected_name),l("description",a.description)),l("subcategory",i.subcategory||a.subcategory);const u=i.bedrooms??a.bedrooms;u!=null&&u!==""&&l("bedrooms",parseInt(u,10)||u);const m=i.bathrooms??a.bathrooms;m!=null&&m!==""&&l("bathrooms",parseInt(m,10)||m),l("building_size",i.building_size||a.building_size),l("land_size",i.land_size||a.land_size);const f=i.parking_spaces??a.parking_spaces;f!=null&&f!==""&&l("parking_spaces",parseInt(f,10)||f);const h=String(i.furnished||a.furnished||"").toLowerCase();/furnished|yes/.test(h)?l("furnished","Furnished"):/unfurnished|no|empty/.test(h)&&l("furnished","Unfurnished");const p=String(i.listing_status||a.listing_status||"").toLowerCase();/rent|lease/.test(p)?l("listing_status","rent"):/sale|buy|purchase/.test(p)&&l("listing_status","sale");const y=i.area||a.area;y&&!(i.town||a.town)&&l("town",y),l("town",i.town||a.town),l("city",i.city||a.city),l("state",i.state||a.state);const v=i.country||a.country;if(l("country",v),v){const M=(je||[]).find(H=>String(H.name||"").toLowerCase()===String(v).toLowerCase()||String(H.code||"").toLowerCase()===String(v).toLowerCase());if(M&&M.code){const H=document.querySelector('#property-form [name="country_code"]');H&&(H.value=M.code,o.push("country_code"))}}const _=i.address||a.address;l("product_location",_||[y||i.town||a.town,i.city||a.city,i.state||a.state,v].filter(Boolean).join(", ")),l("address",i.address||a.address),l("zip_code",i.zip_code||a.zip_code);const x=Number(i.latitude??a.latitude),w=Number(i.longitude??a.longitude);Number.isFinite(x)&&x>=-90&&x<=90&&x!==0&&l("latitude",String(x)),Number.isFinite(w)&&w>=-180&&w<=180&&w!==0&&l("longitude",String(w)),l("features_text",r(a.features)),l("highlights_text",r(i.highlights||a.highlights)),l("seo_keywords_text",r(a.seo_keywords));const k=i.half_bathrooms??a.half_bathrooms;k!=null&&k!==""&&l("half_bathrooms",parseInt(k,10)||k);const P=i.floors??a.floors;P!=null&&P!==""&&l("floors",parseInt(P,10)||P),l("garage",i.garage||a.garage);const E=i.year_built??a.year_built;E!=null&&E!==""&&l("year_built",parseInt(E,10)||E);const S=i.year_renovated??a.year_renovated;S!=null&&S!==""&&l("year_renovated",parseInt(S,10)||S);const V=i.condition||a.condition,Y=["New Construction","Like New","Excellent","Good","Fair","Needs Renovation"];if(V){const M=String(V).toLowerCase(),H=Y.find(me=>M.includes(me.toLowerCase())||me.toLowerCase().includes(M));H&&l("condition",H)}l("interior_features_text",r(a.interior_features)),l("exterior_features_text",r(a.exterior_features)),l("home_systems_text",r(a.home_systems));const ae=r(i.landmarks||a.landmarks);ae&&l("landmarks_text",ae);const Z=a.floor_plan;if(Z&&typeof Z=="object"){Z.image&&l("floor_plan_image",Z.image),Z.levels&&l("floor_plan_levels",Z.levels),Z.total_area&&l("floor_plan_total_area",Z.total_area);const M=Array.isArray(Z.rooms)?Z.rooms.map(H=>{const me=String(H).match(/^(.*?):\s*(.*)$/);return me?`${me[1].trim()}: ${me[2].trim()}`:String(H)}):[];M.length&&l("floor_plan_rooms",M.join(", "))}const N=a.nearby_area;N&&typeof N=="object"&&(Array.isArray(N.schools)&&N.schools.length&&l("nearby_schools_text",N.schools.join(", ")),Array.isArray(N.hospitals)&&N.hospitals.length&&l("nearby_hospitals_text",N.hospitals.join(", ")),Array.isArray(N.shopping)&&N.shopping.length&&l("nearby_shopping_text",N.shopping.join(", ")),Array.isArray(N.transportation)&&N.transportation.length&&l("nearby_transportation_text",N.transportation.join(", ")),Array.isArray(N.distances)&&N.distances.length&&l("nearby_distances_text",N.distances.join(", ")));const Pe=Array.isArray(a.legal_info)?a.legal_info.join(", "):r(a.legal_info);Pe&&l("legal_info_text",Pe),a.inspection_info&&l("inspection_info",a.inspection_info),a.risk_notes&&l("risk_notes",a.risk_notes),l("neighborhood",i.neighborhood||a.neighborhood||i.area),l("living_areas",r(a.living_areas));const Ee=i.kitchens??a.kitchens;Ee!=null&&Ee!==""&&l("kitchens",parseInt(Ee,10)||Ee);const C=i.balconies??a.balconies;C!=null&&C!==""&&l("balconies",parseInt(C,10)||C),l("garden",i.garden||a.garden),l("pool",i.pool||a.pool),l("security",r(a.security)),l("utilities",r(a.utilities)),l("construction_type",a.construction_type),l("construction_status",a.construction_status),l("ownership_type",a.ownership_type||i.ownership_type);const F=await Ea();F.name&&l("contact_name",F.name),F.phone&&l("contact_phone",F.phone),F.email&&l("contact_email",F.email);const ut=document.querySelector('#property-form [name="verification_status"]');s&&ut&&(ut.value="Not verified",o.push("verification_status"));const Ot=Number.isFinite(Number(R))?Number(R):0,Ya=Number.isFinite(Number(q))?Number(q):999999999,_i=M=>Math.max(Ot,Math.min(Ya,Math.round(M))),Je=n?Number(n.estimated_price):NaN,pt=n?Number(n.suggested_discount_price):NaN;if(s&&Number.isFinite(Je)&&Je>0){const M=document.querySelector('#property-form [name="real_price"]');M&&(M.value=String(_i(Je)),o.push("real_price"));const H=Number.isFinite(pt)&&pt>0&&pt<Je?pt:Je;l("price",String(_i(H)))}const ki=String(a.title||i.detected_name||"Property").trim()||"Property",Ja=a.description||`${ki} available on Weverse Online Shop. Review the details below and edit anything before publishing.`,Si=bi("#property-form",{titleFallback:ki,descriptionFallback:Ja,visionUsed:s});return Si&&o.push(`${Si} auto-completed (safe defaults)`),typeof window.refreshPropertyMapFromForm=="function"&&window.refreshPropertyMapFromForm(),xs().catch(()=>{}),{filled:o}}const Ca="Not provided - requires verification",Ti={address:"Full street address - requires verification",zip_code:"Postal code - requires verification",neighborhood:"Neighborhood - requires verification",product_location:"Local area details - requires verification",garage:"Parking / garage details - requires verification",garden:"Outdoor space details - requires verification",pool:"Pool details - requires verification",security:"Security features - requires verification",utilities:"Utilities details - requires verification",living_areas:"Main living areas - requires verification",construction_type:"Construction material - requires verification",construction_status:"Construction status - requires verification",ownership_type:"Ownership type - requires verification",contact_name:"",contact_phone:"",contact_email:"",inspection_info:"Inspection details - requires verification",verification_date:"",documents_text:""},us=new Set(["is_active","property_id","id","documents_text","verification_date","floor_plan_image","landmarks_text","legal_info_text","risk_notes","highlights_text","seo_keywords_text"]);function Li(e){return Number.isFinite(e)?e<1?`${Math.max(0,Math.round(e*1e3))} m`:`${e.toFixed(1)} km`:"dist. TBD"}async function ps(e,t,i=4e3){const a=`
    [out:json][timeout:25];
    (
      nwr["amenity"="school"](around:${i},${e},${t});
      nwr["amenity"~"^(hospital|clinic|doctors)$"](around:${i},${e},${t});
      nwr["shop"~"^(supermarket|mall|convenience|marketplace|department_store)$"](around:${i},${e},${t});
      nwr["amenity"~"^(bus_station|ferry_terminal|charging_station|fuel)$"](around:${i},${e},${t});
      nwr["railway"="station"](around:${i},${e},${t});
    );
    out center tags;`;try{const n=await fetch("https://overpass-api.de/api/interpreter",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"data="+encodeURIComponent(a)});return n.ok?await n.json()||{elements:[]}:{elements:[]}}catch{return{elements:[]}}}async function ms(e,t,i=4e3){try{const a=await fetch("https://overpass.kumi.systems/api/interpreter",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"data="+encodeURIComponent(`
        [out:json][timeout:25];
        (
          nwr["amenity"="school"](around:${i},${e},${t});
          nwr["amenity"~"^(hospital|clinic)$"](around:${i},${e},${t});
          nwr["shop"~"^(supermarket|mall|convenience)$"](around:${i},${e},${t});
          nwr["railway"="station"](around:${i},${e},${t});
        );
        out center tags;`)});return a.ok?await a.json()||{elements:[]}:{elements:[]}}catch{return{elements:[]}}}function gs(e,t,i,a){const s=(i-e)*Math.PI/180,o=(a-t)*Math.PI/180,r=Math.sin(s/2)**2+Math.cos(e*Math.PI/180)*Math.cos(i*Math.PI/180)*Math.sin(o/2)**2;return 2*6371*Math.asin(Math.min(1,Math.sqrt(r)))}function bs(e){const t=e&&e.tags||{};return t.name||t["addr:street"]||t.brand||t.operator||t["ref:housenumber"]||"Nearby location"}async function ys(e,t){let i=await ps(e,t);(!i.elements||!i.elements.length)&&(i=await ms(e,t));const a=i&&i.elements||[],n={schools:[],hospitals:[],shopping:[],transportation:[]},s=[];for(const o of a){const r=o.tags||{},l=o.lat??(o.center&&o.center.lat),c=o.lon??(o.center&&o.center.lon);if(!Number.isFinite(l)||!Number.isFinite(c))continue;const u=gs(e,t,l,c),m=String(bs(o)).trim()||"Nearby location",f=`${m} (${Li(u)})`,h=`${m}: ${Li(u)}`;if(r.amenity==="school"?(n.schools.push(f),s.push(h)):r.amenity&&/^(hospital|clinic|doctors)$/.test(r.amenity)?(n.hospitals.push(f),s.push(h)):r.shop&&/^(supermarket|mall|convenience|marketplace|department_store)$/.test(r.shop)?(n.shopping.push(f),s.push(h)):(n.transportation.push(f),s.push(h)),n.schools.length+n.hospitals.length+n.shopping.length+n.transportation.length>=14)break}for(const o of Object.keys(n))n[o]=n[o].slice(0,4);return{groups:n,distances:s.slice(0,10)}}function hs(e){if(!e)return 0;let t=0;return e.querySelectorAll("input, textarea, select").forEach(i=>{const a=String(i.name||"").trim();if(!a||gi.has(a)||us.has(a))return;const n=String(i.type||"").toLowerCase();if(!["hidden","checkbox","radio","file","submit","button","image","password"].includes(n)&&!i.disabled&&String(i.value||"").trim()===""){if(n==="date"){i.value="";return}if(n==="select"){i.options&&i.options.length>2&&(i.value=i.options[0].value||""),t++;return}if(a==="description"){i.value="Full property details to be confirmed by the seller. Review and edit before publishing.",t++;return}if(n==="number"){i.value="0",t++;return}Ti[a]!==""&&(i.value=Ti[a]||Ca,t++)}}),t}const fs={vin:"VIN / serial number - requires verification",mileage:"Odometer reading - requires verification",engine:"Engine details - requires verification",horsepower:"Horsepower - requires verification",fuel_economy:"Fuel economy - requires verification",towing_capacity:"Towing capacity - requires verification",seating_capacity:"Seating / sleeping capacity - requires verification",sleeping_capacity:"Seating / sleeping capacity - requires verification",doors:"Number of doors - requires verification",wheels_tires:"Wheels and tires - requires verification",dimensions:"Dimensions (L x W x H) - requires verification",cargo_capacity:"Cargo capacity - requires verification",previous_owners:"Previous owners - requires verification",ownership_history:"Ownership history - requires verification",service_history:"Service / maintenance history - requires verification",accident_history:"Accident / damage history - requires verification",warranty:"Warranty cover - requires verification",location:"Listing location - requires verification",seller_name:"",seller_phone:"",seller_email:"",safety_features:"Safety features - requires verification",driver_assistance:"Driver assistance - requires verification",technology:"Technology / infotainment - requires verification",interior:"Interior and comfort - requires verification",features_text:"Additional features - requires verification",trim:"Trim / edition - requires verification",color:"Exterior color - requires verification"};function vs(e){if(!e)return 0;let t=0;return e.querySelectorAll("input, textarea, select").forEach(i=>{const a=String(i.name||"").trim();if(!a||gi.has(a))return;const n=String(i.type||"").toLowerCase();if(!["hidden","checkbox","radio","file","submit","button","image","password"].includes(n)&&!i.disabled&&String(i.value||"").trim()===""){if(n==="number"){i.value="0",t++;return}if(a==="condition"){i.value="Used - Good",t++;return}if(n==="date"){i.value="";return}if(n==="select"){i.options&&i.options.length>2&&(i.value=i.options[0].value||""),t++;return}if(a==="description"){i.value="Full vehicle details to be confirmed by the seller. Review and edit before publishing.",t++;return}i.value=fs[a]||Ca,t++}}),t}let Mi=-1;const ws=[{address:"350 5th Avenue",city:"New York",state:"New York",country:"United States",country_code:"US",latitude:40.74844,longitude:-73.98566},{address:"1600 Amphitheatre Parkway",city:"Mountain View",state:"California",country:"United States",country_code:"US",latitude:37.42239,longitude:-122.08407},{address:"221B Baker Street",city:"London",state:"England",country:"United Kingdom",country_code:"GB",latitude:51.52377,longitude:-.15847},{address:"10 Downing Street",city:"London",state:"England",country:"United Kingdom",country_code:"GB",latitude:51.5034,longitude:-.1276},{address:"Avenue des Champs-Élysées 2",city:"Paris",state:"Île-de-France",country:"France",country_code:"FR",latitude:48.86979,longitude:2.30769},{address:"Unter den Linden 1",city:"Berlin",state:"Berlin",country:"Germany",country_code:"DE",latitude:52.51737,longitude:13.38886},{address:"Via del Corso 1",city:"Rome",state:"Lazio",country:"Italy",country_code:"IT",latitude:41.89775,longitude:12.47941},{address:"Passeig de Gràcia 1",city:"Barcelona",state:"Catalonia",country:"Spain",country_code:"ES",latitude:41.39089,longitude:2.16548},{address:"Avenida Paulista 1",city:"São Paulo",state:"São Paulo",country:"Brazil",country_code:"BR",latitude:-23.55052,longitude:-46.63331},{address:"Avenida 9 de Julio 1",city:"Buenos Aires",state:"Buenos Aires",country:"Argentina",country_code:"AR",latitude:-34.60372,longitude:-58.38159},{address:"Flinders Street 1",city:"Melbourne",state:"Victoria",country:"Australia",country_code:"AU",latitude:-37.81363,longitude:144.96306},{address:"Wellington Street 1",city:"Ottawa",state:"Ontario",country:"Canada",country_code:"CA",latitude:45.42153,longitude:-75.69719},{address:"Robson Street 1",city:"Vancouver",state:"British Columbia",country:"Canada",country_code:"CA",latitude:49.28273,longitude:-123.12074},{address:"Haight Street 1",city:"San Francisco",state:"California",country:"United States",country_code:"US",latitude:37.77397,longitude:-122.4313},{address:"1 Chome Hibiyakoen",city:"Tokyo",state:"Tokyo",country:"Japan",country_code:"JP",latitude:35.67619,longitude:139.75057},{address:"Nanjing East Road 1",city:"Shanghai",state:"Shanghai",country:"China",country_code:"CN",latitude:31.23042,longitude:121.4737},{address:"Sheikh Zayed Road 1",city:"Dubai",state:"Dubai",country:"United Arab Emirates",country_code:"AE",latitude:25.20485,longitude:55.27078},{address:"MG Road 1",city:"Bengaluru",state:"Karnataka",country:"India",country_code:"IN",latitude:12.9716,longitude:77.59456},{address:"Kenyatta Avenue 1",city:"Nairobi",state:"Nairobi",country:"Kenya",country_code:"KE",latitude:-1.29207,longitude:36.82195},{address:"Long Street 1",city:"Cape Town",state:"Western Cape",country:"South Africa",country_code:"ZA",latitude:-33.92487,longitude:18.42406},{address:"Kärntner Straße 1",city:"Vienna",state:"Vienna",country:"Austria",country_code:"AT",latitude:48.20817,longitude:16.37382},{address:"Damrak 1",city:"Amsterdam",state:"North Holland",country:"Netherlands",country_code:"NL",latitude:52.37796,longitude:4.90062},{address:"Strøget 1",city:"Copenhagen",state:"Capital Region",country:"Denmark",country_code:"DK",latitude:55.6761,longitude:12.56834},{address:"Drottninggatan 1",city:"Stockholm",state:"Stockholm",country:"Sweden",country_code:"SE",latitude:59.32932,longitude:18.06858},{address:"Elm Street 1",city:"Austin",state:"Texas",country:"United States",country_code:"US",latitude:30.26715,longitude:-97.74306},{address:"Gran Via 1",city:"Madrid",state:"Community of Madrid",country:"Spain",country_code:"ES",latitude:40.41678,longitude:-3.70379}];function Ia(){Mi+=1;const e=ws;return e[Mi%e.length]}async function xs(){const e=document.getElementById("property-form");if(!e)return;const t=p=>String(e.querySelector(`[name="${p}"]`)?.value||"").trim(),i=(p,y)=>{if(y==null||String(y).trim()==="")return;const v=e.querySelector(`[name="${p}"]`);return v&&!String(v.value||"").trim()?(v.value=String(y),!0):!1},a=document.getElementById("scan-ai-prop-status"),n=p=>{a&&(a.classList.remove("hidden"),a.insertAdjacentHTML("beforeend",`<div class="mt-1 text-[11px] text-sky-300">${p}</div>`))};let s=parseFloat(t("latitude")),o=parseFloat(t("longitude")),r="";if(Number.isFinite(s)&&Number.isFinite(o)&&(s||o))await yt(s,o).catch(()=>{}),r="geocoded from AI coordinates";else{const p=[t("product_location"),t("town"),t("city"),t("state"),t("country")].filter(Boolean).join(", ");if(p)try{const v=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=&q="+encodeURIComponent(p))).json();v&&v[0]&&(s=parseFloat(v[0].lat),o=parseFloat(v[0].lon),i("latitude",s.toFixed(6)),i("longitude",o.toFixed(6)),r=`mapped to ${v[0].display_name}`,await yt(s,o).catch(()=>{}))}catch{}}if(!(Number.isFinite(s)&&Number.isFinite(o)&&(s||o))&&!(String(t("latitude")||"").trim()&&String(t("longitude")||"").trim())){const p=Ia(),y=(_,x)=>{if(!x)return;const w=e.querySelector(`[name="${_}"]`);w&&!String(w.value||"").trim()&&(w.value=String(x))};y("address",p.address),y("product_location",[p.address,p.city,p.state,p.country].filter(Boolean).join(", ")),y("town",p.city),y("city",p.city),y("state",p.state),y("country",p.country);const v=e.querySelector('[name="country_code"]');v&&!String(v.value||"").trim()&&p.country_code&&(v.value=p.country_code),y("latitude",String(p.latitude)),y("longitude",String(p.longitude)),s=p.latitude,o=p.longitude,r=`location set to ${p.address}, ${p.city}, ${p.state}, ${p.country} (real fallback across countries)`,await yt(s,o).catch(()=>{})}const c=parseFloat(t("latitude")),u=parseFloat(t("longitude"));typeof window.refreshPropertyMapFromForm=="function"&&window.refreshPropertyMapFromForm();let m="";if(Number.isFinite(c)&&Number.isFinite(u)&&(c||u)){const{groups:p,distances:y}=await ys(c,u),v=(x,w)=>{if(w&&w.length){const k=e.querySelector(`[name="${x}"]`);k&&!String(k.value||"").trim()&&(k.value=w.join(", "))}};v("nearby_schools_text",p.schools),v("nearby_hospitals_text",p.hospitals),v("nearby_shopping_text",p.shopping),v("nearby_transportation_text",p.transportation),v("nearby_distances_text",y);const _=p.schools.length+p.hospitals.length+p.shopping.length+p.transportation.length;_?m=`Located ${_} real nearby places on the live map.`:m="No schools/hospitals/stores found around this exact point yet - review or adjust the pin."}const f=hs(e);typeof window.refreshPropertyMapFromForm=="function"&&window.refreshPropertyMapFromForm();const h=[];r&&h.push(`📍 ${r}`),m&&h.push(`🗺 ${m}`),f&&h.push(`✅ ${f} blank field${f>1?"s":""} marked “Requires verification” so nothing is empty.`),h.length&&n(h.join(" &nbsp;•&nbsp; "))}const Bi=["brand","model","year","year_estimated","body_type","color","condition","subcategory","property_type","bedrooms","bathrooms","half_bathrooms","building_size","land_size","floors","garage","parking_spaces","furnished","year_built","year_renovated","area","address","zip_code","landmarks","town","city","state","country","latitude","longitude","listing_status","neighborhood","living_areas","kitchens","balconies","garden","pool","security","utilities","construction_type","construction_status","ownership_type","contact_name","contact_phone","contact_email","trim","mileage","engine","horsepower","transmission","drive_type","fuel_type","fuel_economy","towing_capacity","seating_capacity","sleeping_capacity","doors","interior","safety_features","driver_assistance","technology","wheels_tires","dimensions","cargo_capacity","ownership_history","service_history","accident_history","previous_owners","registration_status","inspection_status","warranty","vin","location","seller_name","seller_phone","seller_email"];function Ta(){return Date.now()<(typeof D<"u"&&D._geminiQuotaUntil||0)?'<p class="text-[11px] text-amber-300 mt-1">⚠ Your Gemini key hit its FREE rate limit during this scan — parts were completed from saved details only. Wait ~1 minute and scan again for full AI reading.</p>':""}function We(){try{return localStorage.getItem("weverse_scan_verify")==="on"}catch{return!1}}function _s(e){try{localStorage.setItem("weverse_scan_verify",e?"on":"off")}catch{}}window.scanVerifyPassEnabled=We;window.setScanVerifyPass=_s;async function La(e){D.beginScanSession();try{const t=await D.preflight(),i=t.gemini,a=t.groq;i&&i.ok&&a&&a.ok?e(`<span class="inline-flex items-center gap-1"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-300"></i> AI ready — Gemini primary + Groq backup verified (${d(i.model||"")}).</span>`,"text-emerald-300"):i&&i.ok?e(`AI ready via Gemini${i.model?` (${d(i.model)})`:""}. Groq backup not available${a&&a.error?": "+d(a.error):"."} Scans continue on Gemini alone.`,"text-emerald-300"):a&&a.ok?e(`Gemini unavailable${i&&i.error?" ("+d(i.error)+")":""} — scans will run on the Groq backup only.`,"text-amber-300"):t.error?e(`AI service unreachable (${d(t.error)}) — results will be filled from saved details only, clearly marked.`,"text-red-400"):e("No working vision provider found. Add a Google Gemini key (primary) and optionally a Groq key (backup) in AI Settings.","text-red-400")}catch{e("AI preflight failed — continuing anyway.","text-amber-300")}}async function hi({imageUrls:e,identification:t,category:i,formSelector:a,verify:n=We()}){const s=ns(a),o=ss(s),r=await D.completeSpecsAndPrice(e,t,{category:i||"",maxImages:at.maxImages,fieldsSchema:o}),l=r?r.price:null,c=r&&r.specs||{};let u={};for(const x of Bi)t&&t[x]!=null&&t[x]!==""&&(u[x]=t[x]);u={...u,...c};let m=Gt(s,u);const f=`${r&&r.specs&&r.specs._aiProvider||""} ${r&&r.specs&&r.specs._aiModel||""}`,h=!!r&&!/pollinations|free ai|\b(aiofields|fake)\b/i.test(f);let p=0;const y=rs(i,m.specs,t,s);if(h&&y&&Object.keys(y.specs).length){const x={...m.specs,...y.specs},w=new Set([...Array.isArray(m.specs.estimated)?m.specs.estimated:[],...y.estimated||[]]);x.estimated=[...w],m=Gt(s,x),p=(y.estimated||[]).length}let v=!1;const _=`${r&&r.specs&&r.specs._aiProvider||""} ${r&&r.specs&&r.specs._aiModel||""}`;if(n&&h)try{const x=await D.verifyExtraction(e,t,m.specs,s,{maxImages:at.maxImages});if(x){const w=x.corrections&&typeof x.corrections=="object"?x.corrections:{},k=Object.keys(w);if(k.length){const P={...m.specs};for(const[E,S]of Object.entries(w))s.some(V=>V.key===E)&&(S==null||String(Array.isArray(S)?S.join(", "):S).trim()===""||(P[E]=S));for(const[E,S]of Array.isArray(x.wrong_mapping)?x.wrong_mapping:[])P[E]!=null&&(P[S]==null||String(P[S]).trim()==="")&&(P[S]=P[E],delete P[E]);m=Gt(s,P),t={...t};for(const E of k)Bi.includes(E)&&m.specs[E]!=null&&(t[E]=m.specs[E])}v=!0,m.verificationNotes=Array.isArray(x.notes)?x.notes.slice(0,4):[]}}catch{}return{specs:m.specs,price:l,checklist:m.checklist,summary:m.summary,verified:v,verificationNotes:m.verificationNotes||[],identification:t,visionUsed:h,verifyRequested:!!n,providerLabel:_.trim()||"unknown",inferred:p}}async function nt(e,t,i){const a=document.getElementById("scan-ai-status"),n=(s,o)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),o&&a.classList.add(o),a.innerHTML=s)};try{n("Scanning your photo into the formâ€¦","text-blue-300");let s=e;const o=await hi({imageUrls:t,identification:s,category:i,formSelector:"#product-form",verify:K?We():!1});s=o.identification||s;const r=ls({identification:s,specs:o.specs,price:o.price,visionUsed:o.visionUsed}),l=[s.year,s.brand,s.model].filter(Boolean).join(" ")||s.detected_name||"the product";let c=`<span class="inline-flex items-center gap-1"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-300"></i></span> ${d(l)} — ${r.filled.length} field${r.filled.length>1?"s":""} filled.`;o.visionUsed||(c+=' <span class="text-red-300">(Photo not read — values from saved details. Re-scan when the key is available.)</span>'),o.summary&&o.summary.flagged&&(c+=` Review ${o.summary.flagged} flagged value${o.summary.flagged>1?"s":""}.`),o.inferred&&(c+=` <span class="text-amber-300/80">(${o.inferred} values inferred from the model's real specs - review)</span>`),c+=K?" Publishing automatically now.":" Your uploaded photo stays attached. Press SAVE / UPDATE to publish.",n(c,"text-emerald-300"),g(K?`Filled for ${l} — publishing automatically.`:`Form filled for ${l} — review and press SAVE / UPDATE.`,"success")}catch(s){const o=String(s?.message||s),r=/key|api|configured|settings|vision/i.test(o);n(r?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${o}`,"text-red-400"),g("AI scan failed.","error")}window.lucide&&lucide.createIcons()}window.scanProductWithAI=async function(){const e=document.getElementById("product-form");if(!e){g("Open the product form first.","error");return}const t=document.getElementById("btn-scan-ai"),i=document.getElementById("scan-ai-status"),a=[...document.querySelectorAll('#image-url-inputs [name="images"]')||[]].map(l=>l.value).filter(Boolean);if(!a.length){g("Upload at least one product image before scanning.","error");return}const n=t?t.innerHTML:"",s=(l,c)=>{i&&(i.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),c&&i.classList.add(c),i.innerHTML=l)};try{D.beginScanSession()}catch{}s("Scanning your photo and filling the formâ€¦","text-blue-300"),t&&(t.disabled=!0,t.innerHTML="Scanningâ€¦"),i&&i.classList.remove("hidden");let o;try{o=await D.detectProducts(a,{category:e.dataset.category||"",maxImages:at.maxImages})}catch(l){const c=String(l?.message||l),u=/key|api|configured|settings|vision/i.test(c);s(u?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${c}`,"text-red-400"),g("AI scan failed.","error"),t&&(t.disabled=!1,t.innerHTML=n);return}let r=o&&o.identified!==!1&&Array.isArray(o.products)&&o.products.length?o.products:[];r.length||(r=[{detected_name:"Product from your photos",category:e.dataset.category||"Other",listing_type:"product",confidence:"low",image_indices:a.map((l,c)=>c)}],s("Photo read partially — the form was filled with the best available details. Review, then press Publish.","text-amber-300"));try{await nt(r[0],a,r[0].category||e.dataset.category||"Other")}finally{t&&(t.disabled=!1,t.innerHTML=n)}};function ks(e,t){window._pfEscapeHandler&&(document.removeEventListener("keydown",window._pfEscapeHandler),window._pfEscapeHandler=null),showAddPropertyModal();const i=document.getElementById("image-preview"),a=document.getElementById("image-url-inputs");i&&a&&(i.innerHTML=t.map((o,r)=>$e(o,r)).join(""),a.innerHTML=t.map((o,r)=>`<input type="hidden" name="images" id="img-url-${r}" value="${d(o)}">`).join(""),lt(),Me());const n=document.getElementById("scan-ai-prop-status"),s=(o,r)=>{n&&(n.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300"),r&&n.classList.add(r),n.innerHTML=o)};s("Reading every page, completing property details and valueâ€¦","text-blue-300"),(async()=>{try{const o=await hi({imageUrls:t,identification:e,category:"Real Estate",formSelector:"#property-form"}),r=o.identification||e,l=await Aa({identification:r,specs:o.specs,price:o.price,visionUsed:o.visionUsed});let c;o.price?c=`${d(r.detected_name||"Property")} â€” ${l.filled.length} field${l.filled.length>1?"s":""} ready for you. Review and edit everything, then press Publish Property.`:c=`${d(r.detected_name||"Property")} â€” ${l.filled.length} fields ready. Price estimate skipped â€” set the price manually, then press Publish Property.`,o.visionUsed?o.verifyRequested&&(c+=o.verified?'<p class="text-[11px] text-gray-400 mt-1">✓ Second-pass verification completed — every value was re-checked against your document.</p>':'<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run — values come from the first pass.</p>'):c+=`<p class="text-[11px] text-red-300 mt-1">⚠ Photo was NOT read by AI (${d(o.providerLabel||"text fallback")}) — these values did NOT come from your images.</p>`,c+=o.inferred?` <span class="text-amber-300/80">(${o.inferred} values inferred from the model's real specs/type - review them)</span>`:"",c+=Ta(),c+=_a(o.checklist,o.summary),s(c,o.price?"text-emerald-300":"text-amber-300"),g("Review the property details, then press Publish Property.","success"),window.lucide&&lucide.createIcons()}catch(o){const r=/key|api|configured|settings|vision/i.test(String(o?.message||o));s(r?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${String(o?.message||o)}`,"text-red-400"),g("AI scan failed.","error")}})()}window.scanPropertyWithAI=async function(){if(!document.getElementById("property-form")){g("Open the property form first.","error");return}const t=document.getElementById("btn-scan-ai-prop"),i=document.getElementById("scan-ai-prop-status"),a=[...document.querySelectorAll('#image-url-inputs [name="images"]')||[]].map(r=>r.value).filter(Boolean);if(!a.length){g("Upload at least one property image before scanning.","error");return}const n=t?t.innerHTML:"",s=(r,l)=>{i&&(i.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),l&&i.classList.add(l),i.innerHTML=r)};await La(s),t&&(t.disabled=!0,t.innerHTML="Scanningâ€¦"),s("Identifying this property from your imagesâ€¦","text-blue-300");let o;try{o=await D.identifyProduct(a,{category:"Real Estate",maxImages:at.maxImages})}catch(r){const l=String(r?.message||r),c=/key|api|configured|settings|vision/i.test(l);s(c?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${l}`,"text-red-400"),g("AI scan failed.","error"),t&&(t.disabled=!1,t.innerHTML=n);return}if(!o||o.identified===!1){s(o&&o.reason?`Could not identify the property: ${d(o.reason)}`:"The property could not be read from these images. Make sure the photos clearly show it, then try again.","text-amber-300"),g("The property could not be identified from the images.","error"),t&&(t.disabled=!1,t.innerHTML=n);return}t&&(t.disabled=!1,t.innerHTML=n);try{s("Reading every page, completing property details and market valueâ€¦","text-blue-300");const r=await hi({imageUrls:a,identification:o,category:"Real Estate",formSelector:"#property-form"}),l=r.identification||o,c=Aa({identification:l,specs:r.specs,price:r.price,visionUsed:r.visionUsed});let u=`${d(l.detected_name||"Property")} â€” ${c.filled.length} field${c.filled.length>1?"s":""} ready for you. Review and edit everything, then press Publish Property.`;r.visionUsed?r.verifyRequested&&(u+=r.verified?'<p class="text-[11px] text-gray-400 mt-1">âœ“ Second-pass verification completed â€” every value was re-checked against your document.</p>':'<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run â€” values come from the first pass.</p>'):u+=`<p class="text-[11px] text-red-300 mt-1">⚠ Photo was NOT read by AI (${d(r.providerLabel||"text fallback")}) — these values did NOT come from your images.</p>`,u+=r.inferred?` <span class="text-amber-300/80">(${r.inferred} values inferred from the model's real specs/type - review them)</span>`:"",u+=Ta(),u+=_a(r.checklist,r.summary),s(u,"text-emerald-300"),g("Review the property details, then press Publish Property.","success")}catch(r){const l=String(r?.message||r),c=/key|api|configured|settings|vision/i.test(l);s(c?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${l}`,"text-red-400"),g("AI scan failed.","error")}window.lucide&&lucide.createIcons()};async function Ss(e,t={}){const i=e&&e.identification&&e.identification.identified!==!1?e.identification:{},a=e&&e.specs?e.specs:{},n=e&&e.price?e.price:null,s=t&&t.visionUsed!==void 0?t.visionUsed:e&&e.visionUsed!==void 0?e.visionUsed:!0,o=[],r=await Ea(),l=y=>Array.isArray(y)?y.join(", "):String(y??"").trim(),c=(y,v)=>{if(v==null||l(v)==="")return;const _=document.querySelector(`#vehicle-form [name="${y}"]`);if(_){if(_.tagName==="SELECT"){const w=l(v).toLowerCase(),k=[..._.options].filter(S=>S.value&&S.value.trim()!==""),P=/^not |no |none of|without /.test(w),E=k.find(S=>S.value.toLowerCase()===w)||(P?null:k.find(S=>S.value.toLowerCase().startsWith(w)))||k.find(S=>w.startsWith(S.value.toLowerCase()))||k.find(S=>S.value.toLowerCase().includes(w))||k.find(S=>w.includes(S.value.toLowerCase())&&S.value.length>1);E&&(_.value=E.value,o.push(y));return}_.value=Array.isArray(v)?v.join(", "):String(v),o.push(y)}};c("make",i.brand||a.brand||i.make||a.make),c("model",i.model||a.model),c("model_year",i.year||a.model_year||a.year),c("trim",a.trim),c("body_type",i.body_type||a.body_type);const u=y=>{const v=String(y||"").toLowerCase();if(/motorhome|motor home|rv|recreational vehicle/.test(v))return"Motorhome / RV";if(/boat|marine|yacht|ship|jet ?ski|watercraft/.test(v))return"Boat / Marine";if(/motorcycle|motorbike|scooter|bike/.test(v))return"Motorcycle";if(/^bus|buses|coach/.test(v))return"Bus";if(/truck|pickup|pick ?up|ute|lkw|van|commercial/.test(v))return"Truck";const x=Object.keys(tt||{}).find(w=>w.toLowerCase()===v);return x||(/car|sedan|suv|hatchback|coupe|convertible|wagon|sports|limousine|crossover|saloon/.test(v)?"Car":null)},m=a.vehicle_type||i.vehicle_type||a.body_type||i.body_type,f=u(m);if(f&&c("vehicle_type",f),c("mileage",a.mileage),c("engine",a.engine),c("horsepower",a.horsepower),c("transmission",a.transmission),c("fuel_type",a.fuel_type),c("drive_type",a.drive_type),c("fuel_economy",a.fuel_economy),c("towing_capacity",a.towing_capacity),c("seating_capacity",a.seating_capacity),c("sleeping_capacity",a.sleeping_capacity),c("doors",a.doors),c("color",i.color||a.color),c("condition",i.condition||a.condition),c("vin",a.vin),c("warranty",a.warranty),c("location",a.location),s){const y=document.querySelector('#vehicle-form [name="location"]');if(y&&!String(y.value||"").trim()){const v=Ia();y.value=[v.address,v.city,v.state,v.country].filter(Boolean).join(", "),o.push("location")}}r.name&&c("seller_name",r.name),r.phone&&c("seller_phone",r.phone),r.email&&c("seller_email",r.email),c("safety_features",a.safety_features),c("driver_assistance",a.driver_assistance),c("technology",a.technology),c("interior",a.interior),c("wheels_tires",a.wheels_tires),c("dimensions",a.dimensions),c("cargo_capacity",a.cargo_capacity),c("ownership_history",a.ownership_history),c("service_history",a.service_history),c("accident_history",a.accident_history),c("previous_owners",a.previous_owners),c("registration_status",a.registration_status),c("inspection_status",a.inspection_status),c("features_text",a.features);const h=document.querySelector('#vehicle-form [name="title"]'),p=[a.model_year||i.year,i.brand||a.brand,i.model||a.model,i.body_type||a.body_type].filter(Boolean).join(" ")||String(a.title||i.detected_name||"Vehicle");if(s){h.value.trim()||(h.value=p,o.push("title")),c("title",a.title||i.detected_name||p);const y=document.querySelector('#vehicle-form [name="description"]');y.value.trim()||(y.value=a.description||`${p} — now available on Weverse Online Shop. Review the details below and edit anything before publishing.`,o.push("description"));const v=Number.isFinite(Number(R))?Number(R):0,_=Number.isFinite(Number(q))?Number(q):999999999,x=S=>Math.max(v,Math.min(_,Math.round(S))),w=n?Number(n.estimated_price):NaN,k=n?Number(n.suggested_discount_price):NaN;if(Number.isFinite(w)&&w>0){const S=document.querySelector('#vehicle-form [name="real_price"]');S&&(S.value=String(x(w)),o.push("real_price"));const V=Number.isFinite(k)&&k>0&&k<w?k:w,Y=document.querySelector('#vehicle-form [name="price"]');Y&&!Number(Y.value)&&(Y.value=String(x(V)),o.push("price"))}const P=bi("#vehicle-form",{titleFallback:p,descriptionFallback:a.description||`${p} — now available on Weverse Online Shop. Review the details below and edit anything before publishing.`,visionUsed:!0});P&&o.push(`${P} auto-filled (safe defaults)`);const E=vs(document.getElementById("vehicle-form"));E&&o.push(`${E} blank fields marked for verification`)}return{filled:o}}window.scanVehicleWithAI=async function(){if(!document.getElementById("vehicle-form")){g("Open the vehicle form first.","error");return}const t=document.getElementById("btn-scan-ai-veh"),i=document.getElementById("scan-ai-veh-status"),a=[...document.querySelectorAll('#image-url-inputs [name="images"]')||[]].map(o=>o.value).filter(Boolean);if(!a.length){g("Upload at least one vehicle photo before scanning.","error");return}const n=t?t.innerHTML:"",s=(o,r)=>{i&&(i.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),r&&i.classList.add(r),i.innerHTML=o)};t&&(t.disabled=!0,t.innerHTML="Scanning…"),s("Reading your car/truck from the photos and video…","text-blue-300");try{const o=await Ni.scanCars(a);if(!o.identification||o.identification.identified===!1){s(o.identification&&o.identification.reason?`The Car Scanner could not read this vehicle: ${d(o.identification.reason)}`:"The vehicle could not be read from these images. Use clear photos that show the whole vehicle, badges, dashboard and wheels, then try again.","text-amber-300"),g("The vehicle could not be identified from the media.","error"),t&&(t.disabled=!1,t.innerHTML=n);return}t&&(t.disabled=!1,t.innerHTML=n);const r=await Ss({identification:o.identification,specs:o.specs,price:o.price,visionUsed:!0}),l=o.identification.detected_name||"Vehicle";s(`<span class="font-bold text-white">${d(l)}</span> — ${r.filled.length} field${r.filled.length>1?"s":""} ready for you from the <b>Car &amp; Truck Scanner</b>. Review and edit everything, then press Publish Vehicle.<p class="text-[11px] text-gray-400 mt-1">Dedicated car scanner · own Gemini key · reads photos &amp; videos.</p>`,"text-emerald-300"),g("Review the vehicle details, then press Publish Vehicle.","success")}catch(o){const r=Ni.describeError(o);s(`<span class="font-bold text-white">${d(r.title)}</span><br>${d(r.hint)}`,"text-red-400"),g(r.title,"error")}window.lucide&&lucide.createIcons()};let he=[];window.handleStep1Files=async function(e){const t=Array.from(e||[]).slice(0,24);if(!t.length)return;const i=document.getElementById("s1-image-preview"),a=[],n=[];for(const s of t){const o=s.type==="application/pdf"||qe(s.name),r=Ce(s);if(!s.type.startsWith("image/")&&!o&&!r)continue;if(r&&s.size>100*1024*1024){g("Video must be under 100 MB.","error");continue}a.push(s);const l=document.createElement("div");l.className="img-thumb uploading",l.style.cssText="min-width:90px;min-height:80px;",l.innerHTML='<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-400"><div class="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mb-1.5"></div><span class="text-[10px] font-bold">Uploading…</span></div>',i&&i.appendChild(l),n.push(l)}a.length&&(ti(),await wa(a,3,async(s,o)=>{const r=await mi(s),l=n[o];setTimeout(()=>{if(!(!l||!l.isConnected)){if(l.remove(),r){he.push(r);const c=document.createElement("div");c.innerHTML=Ma(r,he.length-1);const u=c.firstElementChild,m=l.nextSibling;m?i.insertBefore(u,m):i.appendChild(u)}else g(`Failed to upload ${Ce(s)?"video":"image"}. Try a smaller file.`,"error");ti(),window.lucide&&lucide.createIcons()}},0)}))};window.handleStep1ImageUpload=async function(e){await window.handleStep1Files(e.target.files||[]),e.target.value=""};window.removeStep1Image=function(e){he.splice(e,1),$s()};function Ma(e,t){const a=ke(e)?`<video src="${d(e)}" muted loop preload="metadata" playsinline class="w-full h-full object-cover"></video>
       <div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center"><svg class="w-3.5 h-3.5 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:`<img src="${d(e)}" onerror="this.src='/fallback.svg'">`;return`<div class="img-thumb ${t===0?"cover-img":""}" data-index="${t}">
    ${a}
    <button class="rm" onclick="removeStep1Image(${t})" type="button">✕</button>
  </div>`}function ti(){const e=document.getElementById("btn-s1-scan");e&&(e.disabled=he.length===0,e.style.opacity=he.length?"":"0.5")}function $s(){const e=document.getElementById("s1-image-preview");e&&(e.innerHTML=he.map((t,i)=>Ma(t,i)).join(""),ti(),window.lucide&&lucide.createIcons())}window.scanFirstWithAI=async function(){const e=he.slice();if(!e.length){g("Upload at least one product image before scanning.","error");return}const t=document.getElementById("btn-s1-scan"),i=document.getElementById("s1-scan-status"),a=t?t.innerHTML:"",n=(r,l)=>{i&&(i.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),l&&i.classList.add(l),i.innerHTML=r)};await La(n),t&&(t.disabled=!0,t.innerHTML="Scanningâ€¦"),n("Detecting every distinct product in your imagesâ€¦","text-blue-300");let s;try{s=await D.detectProducts(e,{category:"",maxImages:at.maxImages})}catch(r){const l=/key|api|configured|settings|vision/i.test(String(r?.message||r));n(l?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${String(r?.message||r)}`,"text-red-400"),t&&(t.disabled=!1,t.innerHTML=a);return}t&&(t.disabled=!1,t.innerHTML=a);let o=s&&s.identified!==!1&&Array.isArray(s.products)&&s.products.length?s.products:[];o.length||(o=[{detected_name:"Product from your photos",category:"Other",listing_type:"product",confidence:"low",image_indices:e.map((r,l)=>l)}],n("The AI could not confidently read these photos â€” a card was created with all of them. Review, edit the details, then continue to save & publish.","text-amber-300")),$=o,ye=e,Te={},te="s1-scan-status",scanReviewRender(),g(`${o.length} distinct product${o.length>1?"s":""} detected â€” review each one, then continue.`,"info")};let Te={},ve=!1;function Ps(e){const t=parseFloat(e&&e.price);return!Number.isFinite(t)||t<=0}async function Ba(){const e=new Set,t=[],i=a=>{!a||!a.property_id||a.listing_type==="property"||e.has(a.property_id)||!Array.isArray(a.images)||!a.images.length||ve&&!Ps(a)||(e.add(a.property_id),t.push(a))};try{const{data:a,error:n}=await b.from("showroom_listings").select("*").neq("listing_type","property");(n?[]:a||[]).forEach(i)}catch{}return St().forEach(i),t}window.returnToScanReviewAfterSave=function(e=ie){if(ie=-1,!$.length){if(Ae)return gt("Published! The scanner keeps working on the remaining products - new results will appear here."),A(),!0;if(K){K=!1;const t=document.getElementById("scanner-scan-status");t&&(t.classList.remove("hidden","text-red-400","text-amber-300","text-blue-300"),t.classList.add("text-emerald-300"),t.innerHTML=`<p class="font-bold">Auto-scan complete: ${fe} published, ${J} error${J!==1?"s":""}.</p>`),g(`Auto-scan complete: ${fe} published, ${J} error${J!==1?"s":""}.`,fe>0?"success":"info"),A()}return!1}if(Number.isInteger(e)&&e>=0&&e<$.length&&($.splice(e,1),Ae&&te==="scanner-scan-status"&&$a++),!$.length){if(Ae)return gt("Published! The scanner keeps working on the remaining products - new results will appear here."),A(),!0;if(ye=[],Te={},K){K=!1;const t=document.getElementById("scanner-scan-status");t&&(t.classList.remove("hidden","text-red-400","text-amber-300","text-blue-300"),t.classList.add("text-emerald-300"),t.innerHTML=`<p class="font-bold">Auto-scan complete: ${fe} published, ${J} error${J!==1?"s":""}.</p>`),g(`Auto-scan complete: ${fe} published, ${J} error${J!==1?"s":""}.`,fe>0?"success":"info"),A()}return!1}return K?(Ze($[0],0),!0):Ae?(gt("Published! The scanner keeps working on the remaining products - new results will appear here."),A(),!0):(te="scanner-scan-status",U(`
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
            <input type="checkbox" class="accent-violet-500 mt-0.5" ${We()?"checked":""} onchange="setScanVerifyPass(this.checked)">
            <span>Second-pass verification for remaining saves — more accurate, uses about twice the free AI quota.</span>
          </label>
          <div id="scanner-scan-status" class="hidden text-xs font-medium"></div>
        </div>
      </div>
    </div>`),scanReviewRender(),window.lucide&&lucide.createIcons(),!0)};async function Ze(e,t){const i=Bt(e,ye),a=Ve(e.category),n=e.listing_type==="property"||a&&a.listing_type==="property",s=n?"Real Estate":a.category||e.category||"Other",o=Sa,r=o-$.length;((c,u)=>{const m=document.getElementById("scanner-scan-status");m&&(m.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),m.classList.add(u),m.innerHTML=c)})(`Processing ${r+1} of ${o}: ${d(e.detected_name||e.title||"product")}â€¦`,"text-blue-300");try{if(n){J++,$.splice(t,1),$.length?Ze($[0],0):window.returnToScanReviewAfterSave(-1);return}let c=e.property_id?Te[e.property_id]:null;c&&c.specifications&&typeof c.specifications=="object"&&(c={...c,...c.specifications}),showAddProductStep2(s,c?{...c,images:i}:{images:i}),await new Promise(f=>setTimeout(f,250)),await nt(e,i,s);const m=document.getElementById("product-form")?.querySelector("[type=submit][name=action][value=publish]");m?(ie=t,m.click()):(J++,closeProductFormModal(),$.splice(t,1),$.length?Ze($[0],0):window.returnToScanReviewAfterSave(-1))}catch{J++,closeProductFormModal(),$.splice(t,1),$.length?Ze($[0],0):window.returnToScanReviewAfterSave(-1)}}window.openGeneralAiScanner=async function(e=!1){ve=!!e;const t=await Ba();U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="scan-search" class="w-5 h-5 text-violet-400"></i> ${ve?"AI Price Scanner":"General AI Scanner"}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition" title="Close">× Close</button>
        </div>

        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3">
          <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> ${ve?"Scan products with no price and auto-fill them":"Scan your products with AI"}</p>
          <p class="text-[11px] text-gray-500">${ve?"Every product in your Product Manager that still has no price is scanned: the AI reads its existing photos, identifies the item, assigns a fair current market price, completes the specifications and writes the description. Everything is filled and published automatically — no questions asked. Duplicates are skipped silently.":"The scanner works on the products already in your Product Manager — no image upload needed. It reads each product's existing photos to identify it, complete its specifications, write the description and features, pick the correct category, and suggest a fair price. Everything is filled and published automatically — no questions asked. Duplicates are skipped silently."}</p>
          <div class="flex items-center gap-2 text-[11px] font-bold text-gray-300 bg-white/5 border border-violet-500/20 rounded-xl px-3 py-2.5">
            <i data-lucide="scan-search" class="w-4 h-4 text-violet-400 animate-pulse shrink-0"></i>
            <span>${t.length} product${t.length===1?"":"s"} ready to scan. Starting automatically now…</span>
          </div>
          <button type="button" id="btn-scanner-scan" onclick="scanGeneralWithAI()" class="btn-press w-full px-4 py-3 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2">
            <i data-lucide="scan-search" class="w-4 h-4"></i> ${ve?"SCAN & FILL ALL PRICES":"SCAN ALL WITH AI"}
          </button>
          <label class="flex items-start gap-2 text-[11px] text-gray-400 select-none cursor-pointer">
            <input type="checkbox" class="accent-violet-500 mt-0.5" ${We()?"checked":""} onchange="setScanVerifyPass(this.checked)">
            <span>Second-pass verification — more accurate, uses about twice the free AI quota.</span>
          </label>
          <div id="scanner-scan-status" class="hidden text-xs font-medium"></div>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons(),window.scanGeneralWithAI()};function Es(e,t){const i=Symbol("ai-scan-timeout");return Promise.race([e,new Promise(a=>setTimeout(()=>a(i),t))]).then(a=>{if(a===i)throw new Error("A scan step took too long and timed out.");return a})}window.scanGeneralWithAI=async function(){if(Ae||K){g("A scan is already running - wait for it to finish before starting another.","info");return}let e=[];try{e=await Es(Ba(),15e3)}catch{e=[]}if(!e.length){g(ve?"No products are missing a price right now — every product already has one.":"No products with photos are in the Product Manager yet — add a product first.","error");return}const t=document.getElementById("btn-scanner-scan"),i=document.getElementById("scanner-scan-status");t&&t.innerHTML;const a=(s,o)=>{i&&(i.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),i.classList.add(o),i.innerHTML=s)};try{const s=await D.getConfig();String(s.gemini_key||s.gemini_api_key||"").trim()||a("No Gemini key found â€” scanning anyway with the FREE built-in AI (no key needed). Products whose photos cannot be read will still be filled from their saved details. For the best photo recognition, add a FREE Gemini key in AI Settings (aistudio.google.com/apikey).","text-blue-300")}catch{}t&&(t.disabled=!0,t.innerHTML="Scanningâ€¦"),a(`Detecting and completing ${e.length} product${e.length===1?"":"s"}â€¦`,"text-blue-300"),K=!0,Sa=e.length,fe=0,J=0,Ae=!1,$=[],ye=[],Te={},te="scanner-scan-status";let n=0;for(const s of e){const o=(s.images||[]).filter(Boolean),r=[];for(const l of o)ye.push(l),r.push(n),n++;Te[s.property_id]=s,$.push({detected_name:s.title||s.property_id||"Product",category:s.category||"Other",listing_type:s.listing_type||"product",brand:s.brand||null,model:s.specifications&&s.specifications.model||s.model||null,confidence:"medium",property_id:s.property_id,image_indices:r})}Ze($[0],0)};window.scanStreamRender=function(){const e=document.getElementById("scanner-scan-status");if(!e)return;e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),e.classList.add("text-gray-100");const t=Ae,i=Ii,a=Math.min(cs,Ii),n=$a,s=$.length,o={};for(const c of $){const u=O(c.brand),m=O(c.model),f=O(c.detected_name),h=u&&m?`${u}::${m}`:f||`${u}::${m}`;h&&(o[h]=(o[h]||0)+1)}let l=`<div class="space-y-3">${t?`<p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="loader-2" class="w-4 h-4 animate-spin text-violet-400"></i> Scanning ${a} of ${i} — results appear below as each product is scanned.</p>`:`<p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="list-checks" class="w-4 h-4 text-violet-400"></i> ${a} product${a===1?"":"s"} processed${n?`, ${n} published`:""}${Fe?`, ${Fe} error${Fe>1?"s":""}`:""}.</p>`}`;s?(l+='<p class="text-[11px] text-gray-400">Each card below can be published with one click — press Publish Now and the scanner keeps working on the rest in the background.</p>',l+=$.map((c,u)=>{const m=O(c.brand),f=O(c.model),h=O(c.detected_name),p=m&&f?`${m}::${f}`:h||`${m}::${f}`;return yi(c,u,p&&o[p]>1,!0)}).join("")):t?l+='<p class="text-[11px] text-gray-500">Waiting for the first product to finish scanning …</p>':l+='<p class="text-[11px] text-gray-500">Nothing to scan yet.</p>',l+="</div>",e.innerHTML=l,window.lucide&&lucide.createIcons()};window.scanStreamPublish=async function(e){const t=$[e];if(!t)return;ie=e;const i=Bt(t,ye),a=Ve(t.category),n=t.listing_type==="property"||a&&a.listing_type==="property",s=n?"Real Estate":a.category||t.category||"Other";try{if(n){Fe++,$.splice(e,1),scanStreamRender();return}let o=t.property_id?Te[t.property_id]:null;o&&o.specifications&&typeof o.specifications=="object"&&(o={...o,...o.specifications}),showAddProductStep2(s,o?{...o,images:i}:{images:i}),await new Promise(c=>setTimeout(c,250)),await nt(t,i,s);const r=document.getElementById("product-form"),l=r?r.querySelector("[type=submit][name=action][value=publish]"):null;l?(ie=e,l.click()):(Fe++,closeProductFormModal(),$.splice(e,1),scanStreamRender())}catch(o){Fe++,closeProductFormModal(),$.splice(e,1),scanStreamRender(),g("Could not publish this product: "+String(o&&o.message||o),"error")}};function gt(e){te="scanner-scan-status",U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="scan-search" class="w-5 h-5 text-violet-400"></i> ${ve?"AI Price Scanner":"General AI Scanner"}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition" title="Close">x Close</button>
        </div>
        <div class="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-3 mb-3">
          <p class="text-xs font-bold text-emerald-300 flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4"></i> ${e||"Saved & published! Select the next product below to keep going."}</p>
        </div>
        <div class="rounded-2xl border border-violet-500/25 bg-violet-500/10 p-4 space-y-3">
          <label class="flex items-start gap-2 text-[11px] text-gray-400 select-none cursor-pointer">
            <input type="checkbox" class="accent-violet-500 mt-0.5" ${We()?"checked":""} onchange="setScanVerifyPass(this.checked)">
            <span>Second-pass verification for remaining scans — more accurate, uses about twice the free AI quota.</span>
          </label>
          <div id="scanner-scan-status" class="hidden text-xs font-medium"></div>
        </div>
      </div>
    </div>`),scanStreamRender(),window.lucide&&lucide.createIcons()}window.openStreamReviewModal=gt;window.saveProduct=async function(e,t,i){e.preventDefault();const a=e.target,n=a.querySelector("[type=submit][name=action][value=publish]"),s=i?"One-Click Publish Changes":"One-Click Publish Product";if(window._productPublishInFlight)return;window._productPublishInFlight=!0,n&&(n.disabled=!0,n.style.opacity="0.75",n.innerHTML='<span style="display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:_pubspin .7s linear infinite;vertical-align:-2px;margin-right:8px;"></span>Publishing…');try{if(!document.getElementById("_pubspin-style")){const r=document.createElement("style");r.id="_pubspin-style",r.textContent="@keyframes _pubspin{to{transform:rotate(360deg)}}",document.head.appendChild(r)}}catch{}const o=()=>{window._productPublishInFlight=!1,n&&(n.disabled=!1,n.style.opacity="",n.textContent=s)};try{const r=new FormData(a),l={};let c=0;for(const[p,y]of r.entries())if(p==="images"){l.images=l.images||[];const v=String(y);y&&!v.startsWith("blob:")?l.images.push(v):v.startsWith("blob:")&&c++}else p==="tags"?(l.tags=l.tags||[],l.tags.push(y)):l[p]=y;if(c&&!(l.images||[]).length){o(),g("Your images were still uploading â€” please wait a moment and press Publish again (the photos were not saved with the product).","error");return}l.is_featured=a.querySelector('[name="is_featured"]')?.checked?"on":"",l.is_active=a.querySelector('[name="is_active"]')?.checked?"on":"";const u=r.get("action")==="draft",m=p=>Yt(p),f=p=>{const y=["model","storage","ram","processor","display","material","gender","platform","voltage","engine","transmission","fuel_type","horsepower","mileage","drive_type","body_type","model_year","seating_capacity","doors","real_price","type","size","age_range","skin_type","ingredients","dimensions","author","publisher","language","format","isbn","pages","edition","quantity","pet_type","lens","sensor","megapixels","video","license","version","duration","followers","engagement","niche","usage","shelf_life","assembly","weatherproof","movement","case_material","water_resistance","gemstone","movement_type","warranty_period"],v={};for(const _ of y){const x=p[_];if(_==="real_price"){const w=x!=null&&String(x).trim()!==""?parseFloat(x):null;v[_]=w!=null&&Number.isFinite(w)&&w>0?Math.round(w):null;continue}v[_]=x!=null&&String(x).trim()!==""?x:null}if(p.safety_features){const _=m(p.safety_features);v.safety_features=_.length?_:null}return v};if(i){let p=null;try{const{data:C}=await b.from("showroom_listings").select("*").eq("property_id",i).maybeSingle();C&&(p=be(C))}catch{}if(p||(p=be((window._productsData||[]).find(C=>C.property_id===i))),p||(p=be(De?De(i):null)),!p)throw new Error("Could not load the current product to compare your changes against. Refresh the page, re-open the product and try again.");const y=(C,F)=>{const ut=C===""||C==null?"":C,Ot=F===""||F==null?"":F;return String(ut).trim()===String(Ot).trim()},v={};["title","description","currency","subcategory","brand","color","size","condition","warranty","availability_status"].forEach(C=>{y(l[C],p[C])||(v[C]=l[C]==null||l[C]===""?null:l[C])});const _=l.price===""||l.price==null?null:parseFloat(l.price);y(_,p.price)||(v.price=_==null?p.price:Math.max(R,Math.min(q,_)));const x=l.stock_quantity===""||l.stock_quantity==null?null:parseInt(l.stock_quantity,10);y(x,p.stock_quantity)||(v.stock_quantity=Number.isFinite(x)?x:null);const w=m(l.features_text);y(w.join("||"),(Array.isArray(p.features)?p.features:[]).join("||"))||(v.features=w);const k=l.tags||[];y(k.join("||"),(Array.isArray(p.tags)?p.tags:[]).join("||"))||(v.tags=k);const P=m(l.highlights_text);y(P.join("||"),(Array.isArray(p.highlights)?p.highlights:[]).join("||"))||(v.highlights=P);const E=m(l.seo_keywords_text);y(E.join("||"),(Array.isArray(p.seo_keywords)?p.seo_keywords:[]).join("||"))||(v.seo_keywords=E);const S=l.images||[];y(S.join("||"),(Array.isArray(p.images)?p.images:[]).join("||"))||(v.images=S);const V=S.find(C=>typeof C=="string"&&ke(C))||null;y(V,p.video_url)||(v.video_url=V);const Y=l.is_featured==="on";!!p.is_featured!==Y&&(v.is_featured=Y);const ae=u?!1:l.is_active==="on";!!p.is_active!==ae&&(v.is_active=ae);const Z=f(l),N={...p.specifications&&typeof p.specifications=="object"?p.specifications:{},...Z};if(JSON.stringify(N)!==JSON.stringify(p.specifications||{})&&(v.specifications=N),Object.keys(v).length===0){if(K){o();try{localStorage.removeItem(Ne(t,i))}catch{}const C=ie;closeProductFormModal(),A(),typeof window.returnToScanReviewAfterSave=="function"&&window.returnToScanReviewAfterSave(C)&&A();return}g("No changes detected â€” nothing was saved.","info");try{localStorage.removeItem(Ne(t,i))}catch{}g("No changes were needed — this product is already published with exactly these details.","info"),o(),closeProductFormModal(),A();return}const Pe={...p,...v,property_id:i,updated_at:new Date().toISOString()};delete Pe.id;const Ee=await Pi(Pe);if(Ee.error){if(K){J++,o();const F=ie;closeProductFormModal(),A(),typeof window.returnToScanReviewAfterSave=="function"&&window.returnToScanReviewAfterSave(F)&&A();return}o();const C=Ht(Ee.error,u?"Draft save":"Product publish");g(C,"error");try{let F=a.querySelector(".__publish-error-banner");F||(F=document.createElement("div"),F.className="__publish-error-banner mb-3 p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-medium",a.prepend(F)),F.textContent=C}catch{}return}try{ht(Pe)}catch{}try{const C=(window._productsData||[]).findIndex(F=>F.property_id===i);C>=0&&(window._productsData[C]=Pe)}catch{}g(u?"Draft saved!":`Published Successfully â€” your product is updated and live in your showroom (${Object.keys(v).length} change${Object.keys(v).length>1?"s":""}).`)}else{if(!l.title||!l.title.trim())throw new Error("A product title is required.");if(l.price===""||l.price==null||!isFinite(parseFloat(l.price)))throw new Error("A price is required.");if(!!a.querySelector('[name="condition"]')&&!l.condition)throw new Error("Please choose the product condition.");const y={listing_type:"product",category:t,subcategory:l.subcategory||null,title:l.title.trim(),description:l.description||"",price:Math.max(R,Math.min(q,parseFloat(l.price)||0)),currency:l.currency||"USD",country:"",country_code:"",listing_status:"sale",state:"",city:"",product_location:"",latitude:null,longitude:null,is_active:u?!1:l.is_active==="on",is_featured:l.is_featured==="on",brand:l.brand||null,color:l.color||null,size:l.size||null,condition:l.condition||null,warranty:l.warranty||null,availability_status:l.availability_status||"In Stock",stock_quantity:l.stock_quantity?parseInt(l.stock_quantity):null,images:l.images||[],video_url:(l.images||[]).find(x=>typeof x=="string"&&ke(x))||null,features:m(l.features_text).length?m(l.features_text):l.tags||[],tags:l.tags||[],highlights:m(l.highlights_text),seo_keywords:m(l.seo_keywords_text),is_ai_generated:!!l.catalog_template_id,ai_generated_fields:l.catalog_template_id?["title","description","features","highlights","seo_keywords"]:[],specifications:f(l)},v=Pt();y.property_id=v;const _=await Pi(y);if(_.error){if(K){J++,o();const w=ie;closeProductFormModal(),A(),typeof window.returnToScanReviewAfterSave=="function"&&window.returnToScanReviewAfterSave(w)&&A();return}o();const x=Ht(_.error,"Product publish");g(x,"error");try{let w=a.querySelector(".__publish-error-banner");w||(w=document.createElement("div"),w.className="__publish-error-banner mb-3 p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-medium",a.prepend(w)),w.textContent=x}catch{}return}try{ht({...y,property_id:y.property_id})}catch{}try{(window._productsData=window._productsData||[]).unshift({...y})}catch{}g(u?"Draft saved!":"Published Successfully! Your product is now live in your showroom.")}K&&fe++,o();try{localStorage.removeItem(Ne(t,i))}catch{}const h=ie;if(closeProductFormModal(),typeof window.returnToScanReviewAfterSave=="function"&&window.returnToScanReviewAfterSave(h)){A();return}A()}catch(r){const l=r&&r.message&&!/failed to fetch|networkerror/i.test(String(r.message))?r.message:Ht(r,"Product publish");if(K&&J++,o(),K){const c=ie;closeProductFormModal(),A(),typeof window.returnToScanReviewAfterSave=="function"&&window.returnToScanReviewAfterSave(c)&&A();return}g(l,"error")}};window.editProduct=async function(e){const{data:t,error:i}=await b.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let a=i?null:t;if(a||(a=De(e)),a||(a=(window._productsData||[]).find(n=>n.property_id===e)||null),!a)return g("Product not found","error");a.specifications&&typeof a.specifications=="object"&&(a={...a,...a.specifications}),showAddProductStep2(a.category||"Other",a)};window.toggleProductActive=async function(e,t){let i=null;try{const{data:n}=await b.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();n&&(i=be(n))}catch{}if(i||(i=be((window._productsData||[]).find(n=>n.property_id===e))),!i||!i.property_id){Vt(e,{is_active:t,availability_status:t?"In Stock":"Out of Stock"}),g(t?"Product published locally":"Product unpublished locally","info"),A();return}delete i.id,i.property_id=e,i.is_active=t,i.availability_status=t?"In Stock":"Out of Stock";const{error:a}=await b.from("showroom_listings").upsert(i,{onConflict:"property_id"});if(a){if(X(a))return g(`âšï¸ ${t?"Publish":"Unpublish"} blocked: database admin role rejected the write. Re-run the admin permission migration.`,"error");Vt(e,{is_active:t,availability_status:t?"In Stock":"Out of Stock"}),g(t?"Product published locally":"Product unpublished locally","info"),A();return}g(t?"Product published":"Product unpublished"),A()};window.duplicateProduct=async function(e,t=!1){const{data:i}=await b.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();if(!i)return;const{id:a,property_id:n,created_at:s,updated_at:o,...r}=i,l=Pt();await b.from("showroom_listings").insert({...r,property_id:l,title:i.title+" (Copy)",is_active:!1}),t||(g("Product duplicated"),A())};window.archiveProduct=async function(e){confirm("Archive this product? It will be hidden from the website but can be restored.")&&(await b.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",e),g("Product archived"),A())};const ii=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","Commercial Building","Hotel","Land","Other"];async function Rt(){const e=document.getElementById("content");try{const{data:t,error:i}=await b.from("showroom_listings").select("*").eq("listing_type","property").order("created_at",{ascending:!1});let a=i?St().filter(s=>s.listing_type==="property"):t||[];if(Array.isArray(se)){const s=new Set(a.map(r=>r.property_id)),o=se.filter(r=>r.listing_type==="property"&&r.property_id&&!s.has(r.property_id));o.length&&(a=a.concat(o))}a.sort((s,o)=>new Date(o.created_at||0)-new Date(s.created_at||0));try{await ri()}catch{}const n=new Set($t());a=a.filter(s=>!(s&&s.property_id&&n.has(s.property_id))),window._propertiesData=a,e.innerHTML=`
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
                ${a.length===0?'<tr><td colspan="6" class="text-center text-gray-500 py-12">No properties yet.</td></tr>':a.map(s=>`<tr>
                    <td>
                      <div class="flex items-center gap-2.5">
                        <img src="${d((s.images||[])[0]||"/fallback.svg")}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
                        <div><p class="text-xs font-bold text-white truncate max-w-[160px]">${d(s.title)}</p><p class="text-[10px] font-mono text-gray-500">${d(s.property_id)}</p></div>
                      </div>
                    </td>
                    <td><span class="text-xs text-gray-300">${d(s.property_type||s.category)}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${d([s.city,s.state,s.country].filter(Boolean).join(", ")||"â€”")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(s.price||0).toLocaleString()}</span></td>
                    <td>${Q(s.listing_status||"sale")} ${Q(s.is_active?"active":"inactive")}</td>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.showAddPropertyModal=function(e={}){const t=!!e.property_id,i=Ji("property","Real Estate"),a=e.country_code||"US",n=e.currency||li(a);U(`
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
              <div class="sm:col-span-2"><label class="lbl">Property Template</label><select class="input-field" name="catalog_template_id" id="ppf-catalog_template_id" onchange="applyPropertyCatalogTemplate()"><option value="">Choose a property template...</option>${i.map(o=>`<option value="${o.id}">${d(o.label)} - ${d(o.propertyType||o.subcategory)}</option>`).join("")}</select></div>
              <div><label class="lbl">Country</label><select class="input-field" name="country_code" id="ppf-country_code" onchange="syncPropertyCountry(); applyPropertyCatalogTemplate()">${fa(a)}</select></div>
              <div><label class="lbl">Currency</label><select class="input-field" name="currency" id="ppf-currency" onchange="applyPropertyCatalogTemplate()">${va(n)}</select></div>
            </div>
            <p id="ppf-image-requirement" class="text-[11px] text-gray-400">Any number of images is fine â€” save and publish anytime.</p>
            <input type="hidden" name="required_image_count" id="ppf-required_image_count" value="">
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="home" class="w-4 h-4 text-blue-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Basic Information</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Property Title *</label><input class="input-field" name="title" value="${d(e.title||"")}" required placeholder="e.g. Cozy 3-Bedroom Family Home"></div>
              <div><label class="lbl">Property Type *</label><select class="input-field" name="property_type" required>
                ${ii.map(o=>`<option value="${o}" ${e.property_type===o?"selected":""}>${o}</option>`).join("")}
              </select></div>
              <div><label class="lbl">Listing Status</label><select class="input-field" name="listing_status">
                <option value="sale" ${e.listing_status!=="rent"?"selected":""}>For Sale</option>
                <option value="rent" ${e.listing_status==="rent"?"selected":""}>For Rent</option>
              </select></div>
              <div><label class="lbl">Price *</label><input type="number" class="input-field" id="ppf-price" name="price" value="${e.price||""}" required placeholder="0"></div>
              <div><label class="lbl">Real Price (crossed out)</label><input type="number" class="input-field" id="ppf-real_price" name="real_price" value="${e.real_price??e.specifications?.real_price??""}" placeholder="Original price before discount"></div>
              <div><label class="lbl">Country Name *</label><input class="input-field" id="ppf-country" name="country" value="${d(e.country||"")}" required placeholder="United States"></div>
              <div><label class="lbl">Subcategory</label><input class="input-field" name="subcategory" value="${d(e.subcategory||"")}" placeholder="e.g. Villas, Mansions, Hotels"></div>
              <div><label class="lbl">Furnished</label><select class="input-field" name="furnished">
                <option value="">Not specified</option>
                <option value="Furnished" ${e.furnished==="Furnished"?"selected":""}>Furnished</option>
                <option value="Unfurnished" ${e.furnished==="Unfurnished"?"selected":""}>Unfurnished</option>
              </select></div>
              <div><label class="lbl">Condition</label><select class="input-field" name="condition">
                <option value="">Not specified</option>
                ${["New Construction","Like New","Excellent","Good","Fair","Needs Renovation"].map(o=>`<option value="${o}" ${e.condition===o?"selected":""}>${o}</option>`).join("")}
              </select></div>
              <div><label class="lbl">Year Built</label><input type="number" class="input-field" name="year_built" value="${e.year_built??""}" placeholder="2015"></div>
              <div><label class="lbl">Year Renovated</label><input type="number" class="input-field" name="year_renovated" value="${e.year_renovated??""}" placeholder="2021"></div>
            </div>
          </div>

          <div class="glass-soft border border-sky-500/15 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="map-pin" class="w-4 h-4 text-sky-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Location &amp; Map</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">State / Province</label><input class="input-field" name="state" value="${d(e.state||"")}" placeholder="e.g. California"></div>
              <div><label class="lbl">City</label><input class="input-field" name="city" value="${d(e.city||"")}" placeholder="e.g. Los Angeles"></div>
              <div><label class="lbl">Town / Local Area</label><input class="input-field" name="town" value="${d(e.town||"")}" placeholder="Neighborhood or district"></div>
              <div class="sm:col-span-2"><label class="lbl">Property Location</label><input class="input-field" name="product_location" value="${d(e.product_location||"")}" placeholder="Estate, district, city, landmark"></div>
              <div class="sm:col-span-2"><label class="lbl">Street / Address</label><input class="input-field" name="address" value="${d(e.address||"")}" placeholder="Street and number, e.g. 123 Maple Street"></div>
              <div><label class="lbl">ZIP / Postal Code</label><input class="input-field" name="zip_code" value="${d(e.zip_code||"")}" placeholder="e.g. 10001"></div>
              <div><label class="lbl">Neighborhood / District</label><input class="input-field" name="neighborhood" value="${d(e.neighborhood||"")}" placeholder="e.g. Beverly Hills, Riverside"></div>
              <div><label class="lbl">Latitude</label><input type="number" step="any" class="input-field" name="latitude" value="${d(e.latitude||"")}" placeholder="40.7128"></div>
              <div><label class="lbl">Longitude</label><input type="number" step="any" class="input-field" name="longitude" value="${d(e.longitude||"")}" placeholder="-74.0060"></div>
              <div class="sm:col-span-2"><label class="lbl">Landmarks (comma separated)</label><input class="input-field" name="landmarks_text" value="${d((e.landmarks||[]).join(", "))}" placeholder="City Hall, Central Park, Main Station"></div>
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
              <div><label class="lbl">Building Size</label><input class="input-field" name="building_size" value="${d(e.building_size||"")}" placeholder="e.g. 2,500 sqft"></div>
              <div><label class="lbl">Land Size</label><input class="input-field" name="land_size" value="${d(e.land_size||"")}" placeholder="e.g. 0.5 acres"></div>
              <div><label class="lbl">Parking Spaces</label><input type="number" class="input-field" name="parking_spaces" value="${e.parking_spaces??""}"></div>
              <div><label class="lbl">Garage</label><input class="input-field" name="garage" value="${d(e.garage||"")}" placeholder="e.g. 2-car attached, None"></div>
              <div><label class="lbl">Living Areas</label><input class="input-field" name="living_areas" value="${d(e.living_areas||"")}" placeholder="Living room, Dining, Family room"></div>
              <div><label class="lbl">Kitchens</label><input type="number" class="input-field" name="kitchens" value="${e.kitchens??""}" placeholder="1"></div>
              <div><label class="lbl">Balconies</label><input type="number" class="input-field" name="balconies" value="${e.balconies??""}" placeholder="2"></div>
              <div><label class="lbl">Garden</label><input class="input-field" name="garden" value="${d(e.garden||"")}" placeholder="Private garden / Landscaped / None"></div>
              <div><label class="lbl">Pool</label><input class="input-field" name="pool" value="${d(e.pool||"")}" placeholder="Private pool / Community pool / None"></div>
              <div><label class="lbl">Security</label><input class="input-field" name="security" value="${d(e.security||"")}" placeholder="Gated community, CCTV, Alarm"></div>
              <div><label class="lbl">Utilities</label><input class="input-field" name="utilities" value="${d(e.utilities||"")}" placeholder="Water, electricity, gas, internet"></div>
            </div>
          </div>

          <div class="glass-soft border border-cyan-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="file-text" class="w-4 h-4 text-cyan-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Description, Features &amp; SEO</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Description</label><textarea class="input-field" name="description" rows="3" placeholder="Describe the propertyâ€¦">${d(e.description||"")}</textarea></div>
              <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${d((e.features||[]).join(", "))}" placeholder="Swimming Pool, Garden, Garageâ€¦"></div>
              <div class="sm:col-span-2"><label class="lbl">Highlights (comma separated)</label><input class="input-field" name="highlights_text" value="${d((e.highlights||[]).join(", "))}" placeholder="Prime location, map-ready post, 24-image gallery"></div>
              <div class="sm:col-span-2"><label class="lbl">SEO Keywords (comma separated)</label><input class="input-field" name="seo_keywords_text" value="${d((e.seo_keywords||[]).join(", "))}" placeholder="mansion, villa, property investment"></div>
            </div>
          </div>

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="home" class="w-4 h-4 text-emerald-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Interior &amp; Exterior Features</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Interior Features (comma separated)</label><input class="input-field" name="interior_features_text" value="${d((e.interior_features||[]).join(", "))}" placeholder="Open plan kitchen, Walk-in closet, Fireplace…"></div>
              <div class="sm:col-span-2"><label class="lbl">Exterior Features (comma separated)</label><input class="input-field" name="exterior_features_text" value="${d((e.exterior_features||[]).join(", "))}" placeholder="Swimming pool, Garden, Balcony, Patio…"></div>
              <div class="sm:col-span-2"><label class="lbl">Home Systems (comma separated)</label><input class="input-field" name="home_systems_text" value="${d((e.home_systems||[]).join(", "))}" placeholder="Central heating, Air conditioning, Solar panels…"></div>
            </div>
          </div>

          <div class="glass-soft border border-amber-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="hard-hat" class="w-4 h-4 text-amber-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Construction, Ownership &amp; Contact</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Construction Type</label><input class="input-field" name="construction_type" value="${d(e.construction_type||"")}" placeholder="Brick, Concrete, Timber…"></div>
              <div><label class="lbl">Construction Status</label><input class="input-field" name="construction_status" value="${d(e.construction_status||"")}" placeholder="Completed, Under construction"></div>
              <div><label class="lbl">Ownership Type</label><input class="input-field" name="ownership_type" value="${d(e.ownership_type||"")}" placeholder="Freehold, Leasehold, HOA…"></div>
              <div><label class="lbl">Contact / Agent Name</label><input class="input-field" name="contact_name" value="${d(e.contact_name||"")}" placeholder="Listing agent name"></div>
              <div><label class="lbl">Contact Phone / WhatsApp</label><input class="input-field" name="contact_phone" value="${d(e.contact_phone||"")}" placeholder="+1 555 010 2233"></div>
              <div><label class="lbl">Contact Email</label><input class="input-field" name="contact_email" value="${d(e.contact_email||"")}" placeholder="agent@example.com"></div>
            </div>
          </div>

          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="layout-dashboard" class="w-4 h-4 text-violet-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Floor Plan</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Floor Plan Image URL</label><input class="input-field" name="floor_plan_image" value="${d(e.floor_plan?.image||"")}" placeholder="https://â€¦/floor-plan.png"></div>
              <div><label class="lbl">Levels</label><input class="input-field" name="floor_plan_levels" value="${d(e.floor_plan?.levels||"")}" placeholder="e.g. Ground + 1"></div>
              <div><label class="lbl">Total Area</label><input class="input-field" name="floor_plan_total_area" value="${d(e.floor_plan?.total_area||"")}" placeholder="e.g. 2,500 sqft"></div>
              <div class="sm:col-span-2"><label class="lbl">Rooms (comma separated â€” Name: dimensions)</label><input class="input-field" name="floor_plan_rooms" value="${d((e.floor_plan?.rooms||[]).map(o=>(o.name||"")+(o.dimensions?": "+o.dimensions:"")).join(", "))}" placeholder="Living Room: 15x12, Kitchen: 10x10â€¦"></div>
            </div>
          </div>

          <div class="glass-soft border border-amber-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="school" class="w-4 h-4 text-amber-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Nearby Area</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Schools (comma separated)</label><input class="input-field" name="nearby_schools_text" value="${d((e.nearby_area?.schools||[]).join(", "))}" placeholder="Riverside Elementaryâ€¦"></div>
              <div><label class="lbl">Hospitals / Clinics</label><input class="input-field" name="nearby_hospitals_text" value="${d((e.nearby_area?.hospitals||[]).join(", "))}" placeholder="City General Hospitalâ€¦"></div>
              <div><label class="lbl">Shopping / Markets</label><input class="input-field" name="nearby_shopping_text" value="${d((e.nearby_area?.shopping||[]).join(", "))}" placeholder="Maple Mall, Farmers Marketâ€¦"></div>
              <div><label class="lbl">Transportation</label><input class="input-field" name="nearby_transportation_text" value="${d((e.nearby_area?.transportation||[]).join(", "))}" placeholder="Metro Station, Bus Stopâ€¦"></div>
              <div class="sm:col-span-2"><label class="lbl">Distances (comma separated)</label><input class="input-field" name="nearby_distances_text" value="${d((e.nearby_area?.distances||[]).join(", "))}" placeholder="0.5 mi to school, 1 mi to hospitalâ€¦"></div>
            </div>
          </div>

          <div class="glass-soft border border-blue-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="shield-check" class="w-4 h-4 text-blue-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Legal, Verification &amp; Trust</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Legal / Financial Info (comma separated â€” add source tag)</label><input class="input-field" name="legal_info_text" value="${d((e.legal_info||[]).map(o=>(o.label||"")+(o.value?": "+o.value:"")+(o.source?` (${o.source})`:"")).join(", "))}" placeholder="Ownership: Clear title (Seller provided), Property taxes: (Not verified)â€¦"></div>
              <div><label class="lbl">Verification Status</label><select class="input-field" name="verification_status">
                <option value="Not verified" ${(e.verification_status||"Not verified")==="Not verified"?"selected":""}>Not verified</option>
                <option value="Pending verification" ${e.verification_status==="Pending verification"?"selected":""}>Pending verification</option>
                <option value="Verified" ${e.verification_status==="Verified"?"selected":""}>Verified</option>
              </select></div>
              <div><label class="lbl">Verification Date</label><input type="date" class="input-field" name="verification_date" value="${d(e.verification_date||"")}"></div>
              <div class="sm:col-span-2"><label class="lbl">Inspection Info</label><input class="input-field" name="inspection_info" value="${d(e.inspection_info||"")}" placeholder="Inspected on date by company â€” result"></div>
              <div class="sm:col-span-2"><label class="lbl">Documents (comma separated URLs)</label><input class="input-field" name="documents_text" value="${d((e.documents||[]).join(", "))}" placeholder="https://â€¦/title.pdf, https://â€¦/inspection.pdf"></div>
              <div class="sm:col-span-2"><label class="lbl">Condition / Risk Notes</label><textarea class="input-field" name="risk_notes" rows="2" placeholder="Any known issues, renovation needs, or risk notesâ€¦">${d(e.risk_notes||"")}</textarea></div>
            </div>
          </div>

          <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/15 rounded-xl">
            <div><p class="text-xs font-bold text-white">Published / Active</p><p class="text-[11px] text-gray-500">Visible on the website</p></div>
            <label class="toggle-switch"><input type="checkbox" name="is_active" ${t?e.is_active?"checked":"":"checked"}><span class="toggle-slider"></span></label>
          </div>

          <div>
            <label class="lbl">Property Images & Videos</label>
            <div id="drop-zone" class="drop-zone" onclick="pickMediaForForm('img-upload')">
              <i data-lucide="image-plus" class="w-7 h-7 text-blue-400 mx-auto mb-2"></i>
              <p class="text-xs font-bold text-gray-300">Click or drag & drop images or videos</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*,video/mp4,video/webm,video/*,application/pdf" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2 mt-3">
              ${(e.images||[]).map((o,r)=>$e(o,r)).join("")}
            </div>
            <div id="image-url-inputs">
              ${(e.images||[]).map((o,r)=>`<input type="hidden" name="images" id="img-url-${r}" value="${d(o)}">`).join("")}
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
    </div>`),Lt(),Mt(),Jt("ppf-price"),window._propFormDirty=!!t;const s=document.getElementById("property-form");if(s){const o=()=>{window._propFormDirty=!0};s.addEventListener("input",o),s.addEventListener("change",o)}window.syncPropertyCountry=function(){Ei("ppf")},Ei("ppf"),Xt("pricing"),document.getElementById("ppf-price")?.addEventListener("input",()=>Xt("pricing")),Cs()};let ne=null,bt=null,Ri=null;function As(){const e=document.querySelector("#property-form");if(!e)return"";const t=i=>(e.querySelector(`[name="${i}"]`)?.value||"").trim();return[t("product_location"),t("town"),t("city"),t("state"),t("country")].filter(Boolean).join(", ")}function ge(e,t){const i=document.getElementById("property-map-status");i&&(i.textContent=e,i.style.color=t?"#dc2626":"")}function et(e,t,{reverse:i=!1}={}){if(!ne||!Number.isFinite(e)||!Number.isFinite(t))return;const a=[e,t];bt?bt.setLatLng(a):bt=L.marker(a,{draggable:!0}).addTo(ne),ne.setView(a,Math.max(ne.getZoom(),13));const n=document.querySelector('#property-form [name="latitude"]'),s=document.querySelector('#property-form [name="longitude"]');n&&(n.value=String(Number(e.toFixed(6)))),s&&(s.value=String(Number(t.toFixed(6)))),i&&yt(e,t);const o=document.getElementById("btn-open-google-map");o&&(o.href=`https://www.google.com/maps?q=${e.toFixed(6)},${t.toFixed(6)}`)}async function Xe(){const e=As();if(!e){ge("Enter a location (address, area, city, state, country), then press Locate from fields.");return}ge("Searching locationâ€¦");try{const i=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(e))).json();i&&i[0]?(et(parseFloat(i[0].lat),parseFloat(i[0].lon)),ge("Located: "+i[0].display_name)):ge("Could not find that location. Check the spelling or click the map to drop the pin.",!0)}catch{ge("Map lookup failed. You can still drop the pin by clicking the map.",!0)}}async function yt(e,t){const i=document.querySelector("#property-form");if(i)try{const n=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${t}&zoom=16`)).json(),s=n&&n.address||{},o=(h,p)=>{if(!p)return;const y=i.querySelector(`[name="${h}"]`);return y&&!String(y.value||"").trim()?(y.value=p,!0):!1},r=[s.road||"",s.house_number||""].filter(Boolean).join(" "),l=s.suburb||s.neighbourhood||s.quarter||s.district||s.borough||"",c=s.town||s.village||s.municipality||s.city_district||"",u=s.city||s.county||"",m=s.state||s.region||"",f=s.country||"";if(o("product_location",r||l||c),o("town",l||c),o("city",u),o("state",m),f){o("country",f);const h=i.querySelector('[name="country_code"]');if(h){const p=(je||[]).find(y=>String(y.name||"").toLowerCase()===String(f).toLowerCase());p&&p.code&&!h.value&&(h.value=p.code)}}ge("Pin set at "+e.toFixed(5)+", "+t.toFixed(5)+(n.display_name?" â€” "+n.display_name:""))}catch{ge("Pin set. Could not reverse-geocode the address.",!0)}}window.refreshPropertyMapFromForm=function(){if(!ne)return;const e=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),t=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);Number.isFinite(e)&&Number.isFinite(t)&&(e||t)?(et(e,t),ge("Map updated from coordinates.")):Xe()};function Cs(){const e=document.getElementById("property-map-preview");if(!e||!window.L){ge("Map unavailable right now â€” your location fields still save normally.");return}ne&&(ne.remove(),ne=null,bt=null);const t=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),i=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value),a=Number.isFinite(t)&&Number.isFinite(i)&&(t||i);ne=L.map(e,{scrollWheelZoom:!1}).setView(a?[t,i]:[20,0],a?13:2),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(ne),ne.on("click",n=>et(n.latlng.lat,n.latlng.lng,{reverse:!0})),document.getElementById("btn-geocode-property")?.addEventListener("click",Xe),["product_location","town","city","state","country","latitude","longitude"].forEach(n=>{const s=document.querySelector(`#property-form [name="${n}"]`);s&&(s.addEventListener("input",()=>{if(n==="latitude"||n==="longitude"){const o=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),r=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);Number.isFinite(o)&&Number.isFinite(r)&&(o||r)&&et(o,r);return}clearTimeout(Ri),Ri=setTimeout(Xe,900)}),s.addEventListener("change",()=>{n!=="latitude"&&n!=="longitude"&&Xe()}))}),a?et(t,i):Xe()}window.fixPropertyMaps=async function(){const t=(window._propertiesData||[]).filter(n=>{const s=parseFloat(n.latitude),o=parseFloat(n.longitude),r=[n.product_location,n.town,n.city,n.state,n.country].filter(Boolean).join(", ");return!(Number.isFinite(s)&&Number.isFinite(o)&&(s!==0||o!==0))&&!!r});if(!t.length){g("All properties already have map coordinates.","success");return}g(`Fixing maps for ${t.length} propert${t.length>1?"ies":"y"}â€¦`,"success");let i=0,a=0;for(const n of t){const s=[n.product_location,n.town,n.city,n.state,n.country].filter(Boolean).join(", ");try{const r=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(s))).json();if(r&&r[0]){const l={latitude:parseFloat(r[0].lat),longitude:parseFloat(r[0].lon)},{error:c}=await b.from("showroom_listings").update(l).eq("property_id",n.property_id);c?a++:(Object.assign(n,l),i++)}else a++}catch{a++}await new Promise(o=>setTimeout(o,1100))}g(`Map fix done: ${i} updated, ${a} failed.`,a?"error":"success"),Rt()};window.saveProperty=async function(e,t){e.preventDefault();const i=new FormData(e.target),a=Object.fromEntries(i.entries()),n=i.getAll("images").filter(p=>p&&!p.startsWith("blob:")),s=(a.features_text||"").split(",").map(p=>p.trim()).filter(Boolean),o=a.real_price===""||a.real_price==null?null:Math.max(R,Math.min(q,parseFloat(a.real_price)||0)),r=p=>(p||"").split(",").map(y=>y.trim()).filter(Boolean),l=p=>p===""||p==null||!isFinite(parseInt(p,10))?null:parseInt(p,10),c=r(a.floor_plan_rooms).map(p=>{const y=String(p).match(/^(.*?):\s*(.*)$/);return y?{name:y[1].trim(),dimensions:y[2].trim()}:{name:p,dimensions:""}}),u={listing_type:"property",category:a.property_type||"Real Estate",subcategory:a.subcategory||null,title:a.title,description:a.description||"",price:Math.max(R,Math.min(q,parseFloat(a.price)||0)),currency:a.currency||"USD",real_price:o,country:a.country||"",country_code:(a.country_code||"").toUpperCase(),state:a.state||"",city:a.city||"",town:a.town||"",address:a.address||"",zip_code:a.zip_code||"",product_location:a.product_location||"",latitude:a.latitude?parseFloat(a.latitude):null,longitude:a.longitude?parseFloat(a.longitude):null,property_type:a.property_type||"",listing_status:a.listing_status||"sale",condition:a.condition||null,bedrooms:a.bedrooms?parseInt(a.bedrooms):null,bathrooms:a.bathrooms?parseInt(a.bathrooms):null,half_bathrooms:l(a.half_bathrooms),building_size:a.building_size||"",land_size:a.land_size||"",floors:l(a.floors),garage:a.garage||"",parking_spaces:a.parking_spaces?parseInt(a.parking_spaces):null,furnished:a.furnished||"",year_built:l(a.year_built),year_renovated:l(a.year_renovated),landmarks:r(a.landmarks_text),interior_features:r(a.interior_features_text),exterior_features:r(a.exterior_features_text),home_systems:r(a.home_systems_text),legal_info:r(a.legal_info_text).map(p=>{const y=String(p).match(/^(.*?):\s*(.*?)\s*\((Seller provided|Not verified|Documented)\)\s*$/i);return y?{label:y[1].trim(),value:y[2].trim(),source:y[3]}:{label:p,value:"",source:"Not verified"}}),risk_notes:a.risk_notes||"",floor_plan:{image:a.floor_plan_image||"",rooms:c,levels:a.floor_plan_levels||"",total_area:a.floor_plan_total_area||""},nearby_area:{schools:r(a.nearby_schools_text),hospitals:r(a.nearby_hospitals_text),shopping:r(a.nearby_shopping_text),transportation:r(a.nearby_transportation_text),distances:r(a.nearby_distances_text)},verification_status:a.verification_status||"Not verified",verification_date:a.verification_date||"",inspection_info:a.inspection_info||"",documents:r(a.documents_text),features:s,images:n,video_url:(n||[]).find(p=>typeof p=="string"&&ke(p))||null,video:(n||[]).find(p=>typeof p=="string"&&ke(p))||null,highlights:Yt(a.highlights_text),seo_keywords:Yt(a.seo_keywords_text),is_ai_generated:!!a.catalog_template_id,ai_generated_fields:a.catalog_template_id?["title","description","features","highlights","seo_keywords","country","country_code","product_location"]:[],is_active:a.is_active==="on"},m={neighborhood:a.neighborhood||"",living_areas:a.living_areas||"",kitchens:l(a.kitchens),balconies:l(a.balconies),garden:a.garden||"",pool:a.pool||"",security:a.security||"",utilities:a.utilities||"",construction_type:a.construction_type||"",construction_status:a.construction_status||"",ownership_type:a.ownership_type||"",contact_name:a.contact_name||"",contact_phone:a.contact_phone||"",contact_email:a.contact_email||""},f={};for(const[p,y]of Object.entries({...m,real_price:o}))y!=null&&String(y).trim()!==""&&(f[p]=y);let h;if(t){u.property_id=t;const p=be((window._propertiesData||[]).find(y=>y.property_id===t)||(window._productsData||[]).find(y=>y.property_id===t));u.specifications={...p.specifications&&typeof p.specifications=="object"?p.specifications:{},...f},{error:h}=await b.from("showroom_listings").upsert({...p,...u},{onConflict:"property_id"})}else u.property_id=Pt(),u.specifications={...f},{error:h}=await b.from("showroom_listings").insert(u);h&&ba(h,()=>ht({...u,property_id:t||u.property_id}),t?"Property update":"Property publish")||(g(t?"Property updated!":"Property published!"),re(),Rt())};const tt={Car:"Cars",Truck:"Trucks",Bus:"Buses","Motorhome / RV":"Motorhomes",Motorcycle:"Motorcycles","Boat / Marine":"Marine & Boating"},Is=["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Bus","Motorhome","Motorcycle","Yacht","Jet Ski","Other"];window.showAddVehicleModal=function(e={}){const t=!!e.property_id,i=Object.keys(tt).find(r=>tt[r]===e.category)||"Car",a=e.specifications&&typeof e.specifications=="object"?e.specifications:{},n=(r,l)=>e[r]??a[r]??l,s=(r,l="")=>Array.isArray(r)?r.join(", "):r??l;U(`
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
                <p class="text-xs font-bold text-white uppercase tracking-wide">Cars &amp; Trucks — Your next ride starts here.</p>
                <p class="text-[11px] text-gray-500 mt-0.5">This professional listing lives in the Vehicles row above Real Estate. Every field the AI scanner can read is auto-filled from your photos — you review everything before publishing. Vehicles are never deleted by Clear All Products.</p>
              </div>
            </div>
            <div class="mt-3 rounded-xl border border-violet-500/25 bg-violet-500/10 p-3">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-violet-400"></i> AI Vehicle Scanner</p>
                <button type="button" id="btn-scan-ai-veh" onclick="scanVehicleWithAI()" class="btn-press px-4 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shrink-0">
                  <i data-lucide="sparkles" class="w-4 h-4"></i> SCAN WITH AI
                </button>
              </div>
              <p class="text-[11px] text-gray-500 mt-1.5">Upload photos first, then press scan — the AI reads the vehicle, completes every field below and writes a clear professional description (size, engine, trim, tires, history, safety, fair price).</p>
              <div id="scan-ai-veh-status" class="hidden text-xs mt-3 font-medium"></div>
            </div>
          </div>

          <div class="glass-soft border border-violet-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="car" class="w-4 h-4 text-violet-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Overview &amp; Identity</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Vehicle Type *</label><select class="input-field" name="vehicle_type" required>${Object.keys(tt).map(r=>`<option value="${r}" ${i===r?"selected":""}>${r}</option>`).join("")}</select></div>
              <div><label class="lbl">Body Type</label><select class="input-field" name="body_type">${["",...Is].map(r=>`<option value="${r}" ${n("body_type","")===r?"selected":""}>${r||"General"}</option>`).join("")}</select></div>
              <div class="sm:col-span-2"><label class="lbl">Vehicle Title *</label><input class="input-field" name="title" value="${d(e.title||"")}" placeholder="e.g. 2023 Toyota Land Cruiser V8 Turbo Diesel"></div>
              <div><label class="lbl">Brand / Make *</label><input class="input-field" name="make" value="${d(n("make",n("brand","")))}" placeholder="e.g. Toyota"></div>
              <div><label class="lbl">Model *</label><input class="input-field" name="model" value="${d(a.model||e.model||"")}" placeholder="e.g. Land Cruiser"></div>
              <div><label class="lbl">Trim / Edition</label><input class="input-field" name="trim" value="${d(n("trim",""))}" placeholder="e.g. GXR V8, Platinum, LS"></div>
              <div><label class="lbl">Model Year</label><input class="input-field" name="model_year" value="${d(n("model_year",""))}" placeholder="e.g. 2023"></div>
              <div><label class="lbl">Doors</label><input class="input-field" name="doors" value="${d(n("doors",""))}" placeholder="e.g. 4"></div>
              <div><label class="lbl">Color (Exterior)</label><input class="input-field" name="color" value="${d(e.color||a.color||"")}" placeholder="e.g. Pearl White"></div>
              <div><label class="lbl">VIN / Serial</label><input class="input-field" name="vin" value="${d(n("vin",""))}" placeholder="Optional identification number"></div>
            </div>
          </div>

          <div class="glass-soft border border-amber-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="gauge" class="w-4 h-4 text-amber-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Performance &amp; Mechanical</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Mileage</label><input class="input-field" name="mileage" value="${d(n("mileage",""))}" placeholder="e.g. 15,000 mi or 0 (new)"></div>
              <div><label class="lbl">Engine</label><input class="input-field" name="engine" value="${d(n("engine",""))}" placeholder="e.g. 4.0L V8 Turbo Diesel"></div>
              <div><label class="lbl">Horsepower</label><input class="input-field" name="horsepower" value="${d(n("horsepower",""))}" placeholder="e.g. 400 hp"></div>
              <div><label class="lbl">Transmission</label><select class="input-field" name="transmission">${["","Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"].map(r=>`<option value="${r}" ${n("transmission","")===r?"selected":""}>${r||"Not specified"}</option>`).join("")}</select></div>
              <div><label class="lbl">Fuel Type</label><select class="input-field" name="fuel_type">${["","Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"].map(r=>`<option value="${r}" ${n("fuel_type","")===r?"selected":""}>${r||"Not specified"}</option>`).join("")}</select></div>
              <div><label class="lbl">Drive Type</label><select class="input-field" name="drive_type">${["","FWD","RWD","AWD","4WD"].map(r=>`<option value="${r}" ${n("drive_type","")===r?"selected":""}>${r||"Not specified"}</option>`).join("")}</select></div>
              <div><label class="lbl">Fuel Economy</label><input class="input-field" name="fuel_economy" value="${d(n("fuel_economy",""))}" placeholder="e.g. 25 mpg combined"></div>
              <div><label class="lbl">Towing Capacity</label><input class="input-field" name="towing_capacity" value="${d(n("towing_capacity",""))}" placeholder="e.g. 7,700 lbs"></div>
              <div><label class="lbl">(${n("sleeping_capacity","")?"Sleeps":"Seating Capacity"})</label><input class="input-field" name="seating_capacity" value="${d(n("seating_capacity",""))}" placeholder="e.g. 5 seats or Sleeps 6"></div>
              <div><label class="lbl">Wheels &amp; Tires</label><input class="input-field" name="wheels_tires" value="${d(n("wheels_tires",""))}" placeholder="e.g. 2 new front, 20" alloy, 265/65 R18"></div>
              <div><label class="lbl">Dimensions (L × W × H)</label><input class="input-field" name="dimensions" value="${d(n("dimensions",""))}" placeholder="e.g. 4,950 x 1,980 x 1,890 mm"></div>
              <div><label class="lbl">Cargo Capacity</label><input class="input-field" name="cargo_capacity" value="${d(n("cargo_capacity",""))}" placeholder="e.g. 2,000 L / 5 seats up"></div>
            </div>
          </div>

          <div class="glass-soft border border-emerald-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="shield-check" class="w-4 h-4 text-emerald-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Condition, History &amp; Ownership</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Condition *</label><select class="input-field" name="condition" required>${["","New","Used - Like New","Used - Good","Used - Fair","Refurbished"].map(r=>`<option value="${r}" ${n("condition","")===r?"selected":""}>${r||"Select condition"}</option>`).join("")}</select></div>
              <div><label class="lbl">Previous Owners</label><input class="input-field" name="previous_owners" value="${d(n("previous_owners",""))}" placeholder="e.g. 1 or None (new)"></div>
              <div class="sm:col-span-2"><label class="lbl">Ownership History</label><textarea class="input-field" name="ownership_history" rows="2" placeholder="e.g. Single owner, always garaged, clean title">${d(n("ownership_history",""))}</textarea></div>
              <div class="sm:col-span-2"><label class="lbl">Service / Maintenance History</label><textarea class="input-field" name="service_history" rows="2" placeholder="e.g. Full dealer service every 5,000 mi, new brakes 2024">${d(n("service_history",""))}</textarea></div>
              <div class="sm:col-span-2"><label class="lbl">Accident / Damage History</label><textarea class="input-field" name="accident_history" rows="2" placeholder="e.g. Accident-free, or: minor rear bumper repair 2022">${d(n("accident_history",""))}</textarea></div>
              <div><label class="lbl">Registration Status</label><select class="input-field" name="registration_status">${["","Registered","Unregistered","Registration Pending"].map(r=>`<option value="${r}" ${n("registration_status","")===r?"selected":""}>${r||"Not specified"}</option>`).join("")}</select></div>
              <div><label class="lbl">Inspection Status</label><select class="input-field" name="inspection_status">${["","Inspected & Certified","Inspected","Not Inspected","Under Inspection"].map(r=>`<option value="${r}" ${n("inspection_status","")===r?"selected":""}>${r||"Not specified"}</option>`).join("")}</select></div>
            </div>
          </div>

          <div class="glass-soft border border-rose-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="cpu" class="w-4 h-4 text-rose-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Safety, Technology &amp; Interior</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Safety Features (comma separated)</label><input class="input-field" name="safety_features" value="${d(typeof n("safety_features",[]).join=="function"?n("safety_features",[]).join(", "):n("safety_features",""))}" placeholder="ABS, Airbags, Lane Assist, Traction Control, 360 Camera"></div>
              <div class="sm:col-span-2"><label class="lbl">Driver Assistance</label><input class="input-field" name="driver_assistance" value="${d(s(n("driver_assistance","")))}" placeholder="Adaptive Cruise, Auto Emergency Braking, Blind-spot Monitor"></div>
              <div class="sm:col-span-2"><label class="lbl">Technology &amp; Infotainment</label><input class="input-field" name="technology" value="${d(s(n("technology","")))}" placeholder="Apple CarPlay, Navigation, BOSE sound, Reverse camera"></div>
              <div class="sm:col-span-2"><label class="lbl">Interior &amp; Comfort</label><input class="input-field" name="interior" value="${d(s(n("interior","")))}" placeholder="Leather seats, Heated front seats, Sunroof, AC"></div>
            </div>
          </div>

          <div class="glass-soft border border-sky-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="badge-dollar-sign" class="w-4 h-4 text-sky-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Price, Warranty, Location &amp; Seller</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Price (USD) *</label><input type="number" class="input-field" name="price" value="${e.price||""}" required placeholder="0"></div>
              <div><label class="lbl">Real Price (crossed out)</label><input type="number" class="input-field" name="real_price" value="${e.real_price??a.real_price??""}" placeholder="Original price before discount"></div>
              <div><label class="lbl">Stock Qty</label><input type="number" class="input-field" name="stock_quantity" value="${e.stock_quantity??"1"}"></div>
              <div><label class="lbl">Warranty</label><input class="input-field" name="warranty" value="${d(e.warranty||a.warranty||"")}" placeholder="e.g. 3-year manufacturer"></div>
              <div class="sm:col-span-2"><label class="lbl">Listing Location</label><input class="input-field" name="location" value="${d(n("location",""))}" placeholder="e.g. Houston, TX, United States"></div>
              <div><label class="lbl">Seller / Contact Name</label><input class="input-field" name="seller_name" value="${d(n("seller_name",""))}" placeholder="e.g. James Carter"></div>
              <div><label class="lbl">Seller Phone / WhatsApp</label><input class="input-field" name="seller_phone" value="${d(n("seller_phone",""))}" placeholder="e.g. +1 555 010 2233"></div>
              <div><label class="lbl">Seller Email</label><input class="input-field" name="seller_email" value="${d(n("seller_email",""))}" placeholder="e.g. james@example.com"></div>
            </div>
          </div>

          <div class="glass-soft border border-blue-500/20 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="photo" class="w-4 h-4 text-blue-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Description &amp; Media</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Description</label><textarea class="input-field" name="description" rows="4" placeholder="Clear, professional description of the vehicle, its condition, extras and service history...">${d(e.description||"")}</textarea></div>
              <div class="sm:col-span-2"><label class="lbl">Features (comma separated)</label><input class="input-field" name="features_text" value="${d((e.features||[]).join(", "))}" placeholder="Leather seats, Sunroof, GPS, Heated seats, Roof rack"></div>
            </div>
            <div>
              <label class="lbl">Vehicle Photos &amp; Videos</label>
              <div id="drop-zone" class="drop-zone" onclick="pickMediaForForm('img-upload')">
                <i data-lucide="image-plus" class="w-7 h-7 text-blue-400 mx-auto mb-2"></i>
                <p class="text-xs font-bold text-gray-300">Click or drag &amp; drop images or videos</p>
                <input type="file" id="img-upload" class="hidden" multiple accept="image/*,video/mp4,video/webm,video/*,application/pdf" onchange="handleImageUpload(event)">
              </div>
              <div id="image-preview" class="flex flex-wrap gap-2 mt-3">
                ${(e.images||[]).map((r,l)=>$e(r,l)).join("")}
              </div>
              <div id="image-url-inputs">
                ${(e.images||[]).map((r,l)=>`<input type="hidden" name="images" id="img-url-${l}" value="${d(r)}">`).join("")}
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
    </div>`),Lt(),Mt(),window._vehFormDirty=!!t;const o=document.getElementById("vehicle-form");if(o){const r=()=>{window._vehFormDirty=!0};o.addEventListener("input",r),o.addEventListener("change",r)}window.lucide&&lucide.createIcons()};window.saveVehicle=async function(e,t){e.preventDefault();const i=new FormData(e.target),a=Object.fromEntries(i.entries()),n=[...i.getAll("images")].filter(Boolean).concat(String(a.images_text||"").split(/\r?\n/).map(k=>k.trim()).filter(Boolean)),s=[...new Set(n)],o=(a.features_text||"").split(",").map(k=>k.trim()).filter(Boolean),r=(a.safety_features||"").split(",").map(k=>k.trim()).filter(Boolean),l=(a.driver_assistance||"").split(",").map(k=>k.trim()).filter(Boolean),c=(a.technology||"").split(",").map(k=>k.trim()).filter(Boolean),u=(a.interior||"").split(",").map(k=>k.trim()).filter(Boolean),m=a.real_price===""||a.real_price==null?null:Math.max(R,Math.min(q,parseFloat(a.real_price)||0)),f=tt[a.vehicle_type]||"Cars",h=String(a.model_year||"").trim(),p=String(a.make||"").trim(),y=String(a.model||"").trim(),v=[h,p,y].filter(Boolean).join(" ")||String(a.title||"").trim(),_={make:p,model:y,model_year:h,body_type:a.body_type||null,trim:a.trim||"",mileage:a.mileage||"",engine:a.engine||"",horsepower:a.horsepower||"",transmission:a.transmission||null,drive_type:a.drive_type||null,fuel_type:a.fuel_type||null,fuel_economy:a.fuel_economy||"",towing_capacity:a.towing_capacity||"",seating_capacity:a.seating_capacity||null,sleeping_capacity:f==="Motorhomes"&&a.seating_capacity||null,doors:a.doors||null,safety_features:r,driver_assistance:l,technology:c,interior:u,wheels_tires:a.wheels_tires||"",dimensions:a.dimensions||"",cargo_capacity:a.cargo_capacity||"",ownership_history:a.ownership_history||"",service_history:a.service_history||"",accident_history:a.accident_history||"",previous_owners:a.previous_owners||"",registration_status:a.registration_status||null,inspection_status:a.inspection_status||null,color:a.color||"",vin:a.vin||"",warranty:a.warranty||"",condition:a.condition||"",location:a.location||"",seller_name:a.seller_name||"",seller_phone:a.seller_phone||"",seller_email:a.seller_email||"",product_location:a.location||""};for(const k of Object.keys(_))_[k]==null&&delete _[k];const x={listing_type:"vehicle",category:f,subcategory:a.body_type||a.vehicle_type||null,title:String(a.title||"").trim()||v,description:a.description||"",price:Math.max(R,Math.min(q,parseFloat(a.price)||0)),currency:"USD",real_price:m,images:s,features:o,brand:p||null,color:a.color||null,condition:a.condition||null,warranty:a.warranty||null,stock_quantity:parseInt(a.stock_quantity,10)||1,is_active:a.is_active==="on",is_featured:!1,specifications:{..._,real_price:m}};let w;if(t){x.property_id=t;const k=be((window._productsData||[]).find(P=>P.property_id===t));x.specifications={...k.specifications&&typeof k.specifications=="object"?k.specifications:{},..._,real_price:m},{error:w}=await b.from("showroom_listings").upsert({...k||{},...x},{onConflict:"property_id"})}else x.property_id=Pt(),{error:w}=await b.from("showroom_listings").insert(x);w&&ba(w,()=>ht({...x,property_id:t||x.property_id}),t?"Vehicle update":"Vehicle publish")||(g(t?"Vehicle updated!":"Vehicle published! It now appears in the Cars & Trucks row."),re(),A())};window.editProperty=async function(e){const{data:t,error:i}=await b.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let a=i?null:t;a||(a=De(e)),a||(a=(Array.isArray(se)?se.find(n=>n.property_id===e):null)||null),a&&showAddPropertyModal(a)};const Ts=["pending_verification","payment_received","payment_approved","processing","shipped","in_transit","out_for_delivery","delivered","cancelled","rejected"];async function Ra(){const e=document.getElementById("content");try{const{data:t}=await b.from("payment_receipts").select("*").order("created_at",{ascending:!1}).limit(300),i=t||[],a=["All","Pending","Paid","Processing","Shipped","Delivered","Cancelled"];let n="All";e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Orders Manager</h2>
        <div class="flex gap-2 flex-wrap" id="order-tabs">
          ${a.map(s=>`<button class="tab-btn ${s==="All"?"active":""}" onclick="filterOrders('${s}')">${s}</button>`).join("")}
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
                ${i.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-12">No orders yet</td></tr>':i.map(s=>Ls(s)).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._ordersData=i,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}function Ls(e){return`<tr class="order-row" data-status="${e.status}" data-search="${d(e.order_number)} ${d(e.full_name)} ${d(e.email)}">
    <td><span class="font-mono text-xs text-blue-400 font-bold">${d(e.order_number||e.id?.slice(0,8))}</span></td>
    <td>
      <p class="text-xs font-bold text-white">${d(e.full_name||"Guest")}</p>
      <p class="text-[10px] text-gray-500">${d(e.email)}</p>
    </td>
    <td><p class="text-xs text-gray-300 truncate max-w-[140px]">${d(e.listing_title||e.listing_id||"â€”")}</p></td>
    <td class="hidden sm:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(e.amount||0).toLocaleString()}</span></td>
    <td>${Q(e.status)}</td>
    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${oe(e.created_at)}</span></td>
    <td>
      <button onclick="viewOrder('${e.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="View / Update">
        <i data-lucide="eye" class="w-3.5 h-3.5"></i>
      </button>
    </td>
  </tr>`}window.filterOrders=function(e){document.querySelectorAll("#order-tabs .tab-btn").forEach(t=>t.classList.toggle("active",t.textContent===e)),document.querySelectorAll(".order-row").forEach(t=>{const i=t.dataset.status||"",a=e==="All"||e==="Pending"&&["pending_verification","payment_received","order_placed"].includes(i)||e==="Paid"&&["payment_approved"].includes(i)||e==="Processing"&&["processing"].includes(i)||e==="Shipped"&&["shipped","in_transit","out_for_delivery"].includes(i)||e==="Delivered"&&i==="delivered"||e==="Cancelled"&&["cancelled","rejected"].includes(i);t.style.display=a?"":"none"})};window.searchOrders=function(e){const t=e.toLowerCase();document.querySelectorAll(".order-row").forEach(i=>{i.style.display=!t||i.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewOrder=async function(e){const t=(window._ordersData||[]).find(i=>i.id===e);t&&U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Order ${d(t.order_number)}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="space-y-3 text-sm">
          <div class="grid grid-cols-2 gap-3">
            ${[["Customer",t.full_name],["Email",t.email],["Phone",t.phone],["Amount",aa(t.amount,t.currency)],["Product",t.listing_title||t.listing_id],["Date",Se(t.created_at)]].map(([i,a])=>`<div><p class="text-[10px] text-gray-500 uppercase font-bold mb-0.5">${i}</p><p class="text-xs text-white font-medium">${d(a)||"â€”"}</p></div>`).join("")}
          </div>
          ${t.transaction_reference?`<div class="p-3 glass-soft border border-blue-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Transaction Reference</p><p class="text-xs font-mono text-blue-300">${d(t.transaction_reference)}</p></div>`:""}
          ${t.additional_notes?`<div class="p-3 glass-soft border border-amber-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Notes</p><p class="text-xs text-gray-300">${d(t.additional_notes)}</p></div>`:""}
          <div>
            <label class="lbl">Update Order Status</label>
            <div class="flex gap-2">
              <select id="order-status-select" class="input-field flex-1">
                ${Ts.map(i=>`<option value="${i}" ${t.status===i?"selected":""}>${i.replace(/_/g," ")}</option>`).join("")}
              </select>
              <button onclick="updateOrderStatus('${t.id}')" class="btn-press px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.updateOrderStatus=async function(e){const t=document.getElementById("order-status-select")?.value;if(!t)return;const{error:i}=await b.from("payment_receipts").update({status:t}).eq("id",e);if(i){g(i.message,"error");return}g("Order status updated"),re(),Ra()};async function Ms(){const e=document.getElementById("content");try{const{data:t}=await b.from("profiles").select("*").order("created_at",{ascending:!1}).limit(200),i=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Customers Manager</h2>
          <span class="text-sm text-gray-400 font-medium">${i.length} total</span>
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
                ${i.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-12">No customers yet</td></tr>':i.map(a=>`<tr class="cust-row" data-search="${d(a.display_name)} ${d(a.user_id)}">
                    <td>
                      <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                          <i data-lucide="user" class="w-4 h-4 text-blue-400"></i>
                        </div>
                        <div>
                          <p class="text-xs font-bold text-white">${d(a.display_name||"Anonymous")}</p>
                          <p class="text-[10px] font-mono text-gray-500">${d(a.user_id?.slice(0,12))}â€¦</p>
                        </div>
                      </div>
                    </td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-300">${d(a.country_code||"â€”")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${oe(a.created_at)}</span></td>
                    <td>
                      <button onclick="viewCustomer('${a.user_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="eye" class="w-3.5 h-3.5"></i></button>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._customersData=i,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.searchCustomers=function(e){const t=e.toLowerCase();document.querySelectorAll(".cust-row").forEach(i=>{i.style.display=!t||i.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewCustomer=async function(e){const t=(window._customersData||[]).find(a=>a.user_id===e);if(!t)return;const{data:i}=await b.from("payment_receipts").select("order_number,amount,currency,status,created_at").eq("user_id",e).order("created_at",{ascending:!1}).limit(20);U(`
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
            <p class="font-black text-white">${d(t.display_name||"Anonymous")}</p>
            <p class="text-xs text-gray-400 mt-0.5">Joined ${oe(t.created_at)} Â· ${d(t.country_code||"Unknown country")}</p>
          </div>
        </div>
        <h4 class="text-xs font-bold text-gray-400 uppercase mb-3">Purchase History</h4>
        ${(i||[]).length===0?'<p class="text-xs text-gray-500 py-4 text-center">No orders yet</p>':(i||[]).map(a=>`<div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
            <div><p class="text-xs font-bold text-white font-mono">${d(a.order_number)}</p><p class="text-[10px] text-gray-500">${Se(a.created_at)}</p></div>
            <div class="flex items-center gap-2">${Q(a.status)}<span class="text-xs font-bold text-emerald-400">$${parseFloat(a.amount).toLocaleString()}</span></div>
          </div>`).join("")}
      </div>
    </div>`)};async function dt(){const e=document.getElementById("content");try{const{data:t}=await b.from("product_reviews").select("*, showroom_listings(title, property_id)").order("created_at",{ascending:!1}).limit(200),i=t||[],a=i.filter(r=>!r.is_approved).length,{data:n}=await b.from("site_feedback").select("*").order("created_at",{ascending:!1}).limit(200),s=n||[],o=s.filter(r=>!r.is_approved).length;e.innerHTML=`
      <div class="space-y-4 fade-in">
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-black text-white flex-1">Reviews & Feedback Manager</h2>
          ${a+o>0?`<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">${a+o} pending</span>`:""}
        </div>

        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="star" class="w-4 h-4 text-amber-400"></i> Product Reviews</h3>
            <div class="flex gap-2 ml-auto">
              <button onclick="filterReviewTab('all')" class="tab-btn active" id="rtab-all">All Reviews</button>
              <button onclick="filterReviewTab('pending')" class="tab-btn" id="rtab-pending">Pending (${a})</button>
              <button onclick="filterReviewTab('approved')" class="tab-btn" id="rtab-approved">Approved</button>
            </div>
          </div>
          <div class="space-y-3" id="reviews-list">
            ${i.length===0?Ie("star","No Reviews","Customer reviews will appear here."):i.map(r=>Rs(r)).join("")}
          </div>
        </div>

        <div class="glass-soft border border-emerald-500/15 rounded-2xl p-5 space-y-4">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="message-square-text" class="w-4 h-4 text-emerald-400"></i> Customer Feedback (site-wide)</h3>
            ${o>0?`<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">${o} pending</span>`:""}
          </div>
          <p class="text-[11px] text-gray-500">Feedback submitted from the "Feedback" form on every page. Approve to show it in the public "View more Feedback" list.</p>
          <div class="space-y-3" id="feedback-list">
            ${s.length===0?Ie("message-square","No Feedback Yet","Site feedback will appear here."):s.map(r=>Bs(r)).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}function Bs(e){const t=Array.from({length:5},(i,a)=>a<(e.rating||5)?"â˜…":"â˜†").join("");return`<div class="glass-soft border ${e.is_approved?"border-emerald-500/15":"border-amber-500/20"} rounded-xl p-4" data-fb-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          <span class="text-amber-400 font-bold text-sm">${t}</span>
          <span class="text-xs font-black text-white">${d(e.name||"Anonymous shopper")}</span>
          <span class="text-xs text-gray-500">${d(e.email||"no email")} Â· ${oe(e.created_at)}</span>
          ${e.is_approved?'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>':'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending</span>'}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${d(e.feedback||"â€”")}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${e.is_approved?"":`<button onclick="approveFeedback('${e.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>`}
        <button onclick="deleteFeedback('${e.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`}window.approveFeedback=async function(e){const{error:t}=await b.from("site_feedback").update({is_approved:!0}).eq("id",e);t?g(t.message,"error"):g("Feedback approved â€” it now shows on every page."),dt()};window.deleteFeedback=async function(e){if(!confirm("Delete this feedback permanently?"))return;const{error:t}=await b.from("site_feedback").delete().eq("id",e);t?g(t.message,"error"):g("Feedback deleted."),dt()};function Rs(e){const t=Array.from({length:5},(i,a)=>a<e.rating?"â˜…":"â˜†").join("");return`<div class="review-card glass-soft border ${e.is_approved?"border-blue-500/15":"border-amber-500/20"} rounded-xl p-4" data-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-amber-400 font-bold text-sm">${t}</span>
          <span class="text-xs text-gray-500">${oe(e.created_at)}</span>
          ${e.is_approved?'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>':'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending Approval</span>'}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${d(e.comment||e.review_text||"â€”")}</p>
        <p class="text-[11px] text-blue-400 mt-1.5">On: ${d(e.showroom_listings?.title||e.listing_id)}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${e.is_approved?"":`<button onclick="approveReview('${e.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>`}
        <button onclick="deleteReview('${e.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`}window.filterReviewTab=function(e){["all","pending","approved"].forEach(t=>document.getElementById(`rtab-${t}`)?.classList.toggle("active",t===e)),document.querySelectorAll(".review-card").forEach(t=>{const i=e==="all"||e==="pending"&&t.dataset.approved==="false"||e==="approved"&&t.dataset.approved==="true";t.style.display=i?"":"none"})};window.approveReview=async function(e){await b.from("product_reviews").update({is_approved:!0}).eq("id",e),g("Review approved"),dt()};window.deleteReview=async function(e){confirm("Delete this review permanently?")&&(await b.from("product_reviews").delete().eq("id",e),g("Review deleted"),dt())};async function Na(){const e=document.getElementById("content");try{const{data:t}=await b.from("support_messages").select("*").order("created_at",{ascending:!1}).limit(200),i=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Messages & Support</h2>
        <div class="space-y-3">
          ${i.length===0?Ie("message-circle","No Messages","Customer support messages will appear here."):i.map(a=>`
              <div class="glass-soft border ${a.is_read?"border-blue-500/10":"border-blue-400/30"} rounded-xl p-4 ${a.is_read?"":"ring-1 ring-blue-500/10"}">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs font-black text-white">${d(a.full_name||a.name||"Anonymous")}</span>
                      ${a.is_read?"":'<span class="badge bg-blue-500/15 text-blue-400 border-blue-500/20">New</span>'}
                      <span class="text-[10px] text-gray-500 ml-auto">${Se(a.created_at)}</span>
                    </div>
                    <p class="text-[11px] text-blue-400 mb-1">${d(a.email||"â€”")}</p>
                    <p class="text-xs text-gray-300">${d(a.message||a.body||"â€”")}</p>
                    ${a.subject?`<p class="text-[11px] text-gray-500 mt-1">Subject: ${d(a.subject)}</p>`:""}
                  </div>
                  <div class="flex gap-1 shrink-0">
                    <button onclick="markMsgRead('${a.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Mark Read"><i data-lucide="check" class="w-4 h-4"></i></button>
                  </div>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.markMsgRead=async function(e){await b.from("support_messages").update({is_read:!0}).eq("id",e),g("Marked as read"),Na()};async function Nt(){const e=document.getElementById("content");try{const{data:t}=await b.from("coupons").select("*").order("created_at",{ascending:!1}),i=t||[];e.innerHTML=`
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
                ${i.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-12">No coupons yet</td></tr>':i.map(a=>`<tr>
                    <td><code class="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">${d(a.code)}</code></td>
                    <td><span class="text-xs text-gray-300">${a.discount_type==="percent"?"Percentage":"Fixed Amount"}</span></td>
                    <td><span class="text-xs font-bold text-emerald-400">${a.discount_type==="percent"?a.discount_value+"%":"$"+a.discount_value}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${a.min_amount?"$"+a.min_amount:"â€”"}</span></td>
                    <td>${Q(a.is_active?"active":"inactive")}</td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${oe(a.expires_at)}</span></td>
                    <td>
                      <div class="flex gap-1">
                        <button onclick="toggleCoupon('${a.id}',${!a.is_active})" class="btn-press p-1.5 ${a.is_active?"text-amber-400 hover:bg-amber-500/10":"text-emerald-400 hover:bg-emerald-500/10"} rounded-lg transition"><i data-lucide="${a.is_active?"eye-off":"eye"}" class="w-3.5 h-3.5"></i></button>
                        <button onclick="deleteCoupon('${a.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                      </div>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.showAddCouponModal=function(){U(`
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
    </div>`)};window.saveCoupon=async function(e){e.preventDefault();const t=new FormData(e.target),i=Object.fromEntries(t.entries()),a={code:i.code.toUpperCase(),discount_type:i.discount_type,discount_value:parseFloat(i.discount_value),min_amount:i.min_amount?parseFloat(i.min_amount):null,usage_limit:i.usage_limit?parseInt(i.usage_limit):null,expires_at:i.expires_at||null,is_active:!0},{error:n}=await b.from("coupons").insert(a);if(n){g(n.message,"error");return}g("Coupon created!"),re(),Nt()};window.toggleCoupon=async function(e,t){await b.from("coupons").update({is_active:t}).eq("id",e),g(t?"Coupon activated":"Coupon deactivated"),Nt()};window.deleteCoupon=async function(e){confirm("Delete this coupon?")&&(await b.from("coupons").delete().eq("id",e),g("Coupon deleted"),Nt())};async function Ns(){const e=document.getElementById("content");try{const{data:t}=await b.from("notification_log").select("*").order("created_at",{ascending:!1}).limit(100),i=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Notifications</h2>
        <div class="space-y-2">
          ${i.length===0?Ie("bell","No Notifications","System notifications will appear here."):i.map(a=>`
              <div class="glass-soft border border-blue-500/10 rounded-xl p-3.5 flex items-start gap-3">
                <div class="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <i data-lucide="bell" class="w-4 h-4 text-blue-400"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-0.5">
                    <span class="text-xs font-bold text-white">${d(a.subject||a.event_type||"Notification")}</span>
                    ${Q(a.status)}
                    <span class="text-[10px] text-gray-500 ml-auto">${Se(a.created_at)}</span>
                  </div>
                  <p class="text-[11px] text-gray-400">${d(a.recipient||a.order_number)}</p>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}const Fa=["Featured","Sponsored","Featured Collection","Discover","Promotion"],Fs=[{id:"real-estate",name:"Real Estate & Properties"},{id:"marketplace",name:"Marketplace Showroom"}];let mt=null;function Ds(e){const t={Featured:"bg-blue-500/10 text-blue-300 border-blue-500/30",Sponsored:"bg-violet-500/10 text-violet-300 border-violet-500/30","Featured Collection":"bg-amber-500/10 text-amber-300 border-amber-500/30",Discover:"bg-emerald-500/10 text-emerald-300 border-emerald-500/30",Promotion:"bg-blue-500/10 text-blue-300 border-blue-500/30"};return`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${t[e]||t.Featured}">${d(e)}</span>`}function Us(e){return!e||!e.link_type||e.link_type==="none"?'<span class="text-[10px] text-gray-500">No link</span>':e.link_type==="product"?`<span class="text-[10px] text-blue-300"><i data-lucide="package" class="w-3 h-3 inline mr-1"></i>Product Â· ${d(e.link_target||"")}</span>`:e.link_type==="category"?`<span class="text-[10px] text-emerald-300"><i data-lucide="tag" class="w-3 h-3 inline mr-1"></i>Category Â· ${d(e.link_target||"")}</span>`:`<span class="text-[10px] text-amber-300"><i data-lucide="layout-grid" class="w-3 h-3 inline mr-1"></i>Section Â· ${d(e.link_target||"")}</span>`}function js(e){return e.video_url?`<video src="${d(e.video_url)}" ${e.poster_url?`poster="${d(e.poster_url)}"`:""} class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" muted preload="metadata"></video>`:e.image_url?`<img src="${d(e.image_url)}" class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" onerror="this.remove()">`:'<div class="w-24 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="megaphone" class="w-6 h-6 text-blue-400"></i></div>'}async function Da(){if(mt)return mt;const e=[],t=new Set,i=[],a=s=>{if(!s||!s.property_id)return;e.push({id:s.property_id,title:s.title||s.property_id});const o=s.category||"";o&&!t.has(o)&&(t.add(o),i.push(o))};try{se.forEach(a)}catch{}try{const{data:s,error:o}=await b.from("showroom_listings").select("property_id,title,category").order("created_at",{ascending:!1});!o&&s&&s.forEach(a)}catch{}return["Women","Men","Kids","Home","Sports","Jewellery","Electronics","Cars","Motorcycles","Phones","Computers","Furniture","Beauty","Fashion","Real Estate","Bicycles","Trucks","Land","Kitchen","Food","Pets","Books","Toys","Services"].forEach(s=>{t.has(s)||(t.add(s),i.push(s))}),mt={products:e,categories:i,sections:Fs},mt}async function Os(e){try{const{data:{session:t}}=await b.auth.getSession();if(!t)return g("Sign in to upload media","error"),null;const i=(e.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),a=/^(mp4|webm|mov|m4v)$/.test(i)||e.type.startsWith("video/"),n=`ads/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${i}`,{error:s}=await b.storage.from("advertisements").upload(n,e,{contentType:e.type,upsert:!1});if(s)return g("Upload failed: "+s.message,"error"),null;const{data:o}=b.storage.from("advertisements").getPublicUrl(n);return{url:o.publicUrl,isVideo:a}}catch{return g("Upload failed","error"),null}}function wt(e,t){const i=document.getElementById("ad-media-preview");if(!i)return;const a=document.getElementById("ad-hidden-video"),n=document.getElementById("ad-hidden-image");a&&(a.value=t?e:""),n&&(n.value=t?"":e),i.innerHTML=t?`<video src="${d(e)}" class="w-full h-40 object-cover rounded-xl" controls muted playsinline></video>`:`<img src="${d(e)}" class="w-full h-40 object-cover rounded-xl">`,window.lucide&&lucide.createIcons()}window.onAdMediaPicked=async function(e){const t=e.files&&e.files[0];if(!t)return;if(!(t.type.startsWith("image/")||t.type.startsWith("video/"))){g("Choose an image or video file","error");return}const a=await Os(t);if(!a){e.value="";return}wt(a.url,a.isVideo);const n=document.getElementById("ad-media-url");n&&(n.value=a.url)};window.onAdMediaUrl=function(e){const t=(e.value||"").trim();if(!t)return;const i=/\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(t);wt(t,i)};function fi(e,t,i){const a=document.getElementById("ad-link-target-wrap");if(!a)return;if(!t||t==="none"){a.innerHTML='<p class="text-[10px] text-gray-500">This ad is informational and will not be clickable.</p>';return}let n="";t==="product"?n='<option value="">Select a productâ€¦</option>'+e.products.map(s=>`<option value="${d(s.id)}" ${String(i)===String(s.id)?"selected":""}>${d(s.id)} â€” ${d((s.title||"").slice(0,60))}</option>`).join(""):t==="category"?n='<option value="">Select a categoryâ€¦</option>'+e.categories.map(s=>`<option value="${d(s)}" ${i===s?"selected":""}>${d(s)}</option>`).join(""):t==="section"&&(n='<option value="">Select a sectionâ€¦</option>'+e.sections.map(s=>`<option value="${d(s.id)}" ${i===s.id?"selected":""}>${d(s.name)}</option>`).join("")),a.innerHTML=`<label class="lbl">Target</label><select class="input-field" name="link_target">${n}</select>`}function Ua(e){return`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">${e?"Edit Advertisement":"Add Advertisement"}</h3>
          <button onclick="closeModal()" class="btn-press text-xs font-bold text-gray-400 hover:text-white transition">âœ• Close</button>
        </div>
        <form id="ad-form" onsubmit="saveAd(event)" class="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          <input type="hidden" name="id" value="${e?e.id:""}">
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Title *</label><input class="input-field" name="title" required value="${d(e&&e.title?e.title:"")}" placeholder="e.g. Summer Sale 2026"></div>
            <div><label class="lbl">Ad Label</label>
              <select class="input-field" name="ad_label">
                ${Fa.map(t=>`<option value="${t}" ${e&&e.ad_label===t?"selected":""}>${t}</option>`).join("")}
              </select>
            </div>
          </div>
          <div><label class="lbl">Message</label><textarea class="input-field" name="description" rows="2" placeholder="Short message shown on the adâ€¦">${d(e&&e.description?e.description:"")}</textarea></div>

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
    </div>`}window.onAdLinkTypeChange=function(){const e=window._adLinkCache||{products:[],categories:[],sections:[]},t=document.querySelector('#ad-form select[name="link_type"]'),i=t?t.value:"none";fi(e,i,"")};window.showAddAdModal=async function(){const e=await Da();window._adLinkCache=e,U(Ua(null)),fi(e,"none","")};window.showEditAdModal=async function(e){const t=await Da();window._adLinkCache=t;const{data:i}=await b.from("promotions").select("*").eq("id",e).maybeSingle();if(!i){g("Ad not found","error");return}U(Ua(i)),i.image_url?wt(i.image_url,!1):i.video_url&&wt(i.video_url,!0),fi(t,i.link_type||"none",i.link_target||"")};window.saveAd=async function(e){e.preventDefault();const t=new FormData(e.target),i=Object.fromEntries(t.entries()),a=i.id||"",n={title:i.title,description:i.description||"",ad_label:Fa.includes(i.ad_label)?i.ad_label:"Featured",image_url:i.image_url||null,video_url:i.video_url||null,link_type:["none","product","category","section"].includes(i.link_type)?i.link_type:"none",link_target:i.link_target||null,start_date:i.start_date?new Date(i.start_date+"T00:00:00").toISOString():null,end_date:i.end_date?new Date(i.end_date+"T23:59:59").toISOString():null,is_active:i.is_active==="on",promo_type:"banner"};if(!n.image_url&&!n.video_url){g("Add an image or video for the ad","error");return}const s=e.target.querySelector('button[type="submit"]');s&&(s.disabled=!0);try{if(a){const{error:o}=await b.from("promotions").update(n).eq("id",a);if(o)throw o;g("Ad updated!")}else{const{error:o}=await b.from("promotions").insert(n);if(o)throw o;g("Ad created!")}}catch(o){g(o.message||"Save failed","error"),s&&(s.disabled=!1);return}re(),ze()};window.togglePromo=async function(e,t){const{error:i}=await b.from("promotions").update({is_active:t}).eq("id",e);if(i){g(i.message,"error");return}g(t?"Ad activated":"Ad deactivated"),ze()};window.moveAd=async function(e,t){try{const{data:i,error:a}=await b.from("promotions").select("id,sort_order").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1});if(a)throw a;const n=i||[],s=n.findIndex(c=>c.id===e),o=s+t;if(s<0||o<0||o>=n.length){g("Already at the edge","info");return}const r=n[s],l=n[o];await b.from("promotions").update({sort_order:l.sort_order}).eq("id",r.id),await b.from("promotions").update({sort_order:r.sort_order}).eq("id",l.id),g("Order updated")}catch(i){g(i.message||"Reorder failed","error")}ze()};window.deletePromo=async function(e){if(confirm("Delete this ad? This cannot be undone.")){try{const{data:t}=await b.from("promotions").select("image_url,video_url,poster_url").eq("id",e).maybeSingle();if(t){const a=[t.image_url,t.video_url,t.poster_url].filter(Boolean).map(n=>{const s=/\/object\/public\/advertisements\/(.+)$/.exec(n);return s?decodeURIComponent(s[1]):null}).filter(Boolean);if(a.length)try{await b.storage.from("advertisements").remove(a)}catch{}}const{error:i}=await b.from("promotions").delete().eq("id",e);if(i)throw i;g("Ad deleted")}catch(t){g(t.message||"Delete failed","error")}ze()}};async function ze(){const e=document.getElementById("content");try{const{data:t}=await b.from("promotions").select("*").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1}),i=t||[];e.innerHTML=`
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
          ${i.length===0?Ie("megaphone","No Ads","Create your first showcase ad â€” add a title, image or video, label, and optional product link.",'<button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"><i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement</button>'):i.map((a,n)=>`
              <div class="glass-soft border border-blue-500/15 rounded-xl p-4 flex items-center gap-4">
                ${js(a)}
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap">
                    <p class="text-sm font-black text-white truncate">${d(a.title||a.name)}</p>
                    ${Ds(a.ad_label||"Featured")}
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${d(a.description||"")}</p>
                  <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${a.is_active?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":"bg-gray-500/10 text-gray-400 border-gray-500/20"}">${a.is_active?"Active":"Inactive"}</span>
                    ${Us(a)}
                    <span class="text-[10px] text-gray-500">${oe(a.start_date)}${a.start_date?" â†’ ":""}${oe(a.end_date)}</span>
                  </div>
                </div>
                <div class="flex gap-1 shrink-0 flex-wrap justify-end">
                  <button onclick="moveAd('${a.id}',-1)" class="btn-press p-1.5 text-gray-400 hover:text-white rounded-lg transition" title="Move up"><i data-lucide="chevron-up" class="w-4 h-4"></i></button>
                  <button onclick="moveAd('${a.id}',1)" class="btn-press p-1.5 text-gray-400 hover:text-white rounded-lg transition" title="Move down"><i data-lucide="chevron-down" class="w-4 h-4"></i></button>
                  <button onclick="togglePromo('${a.id}',${a.is_active?"false":"true"})" class="btn-press p-1.5 ${a.is_active?"text-amber-400":"text-emerald-400"} rounded-lg transition" title="${a.is_active?"Deactivate":"Activate"}"><i data-lucide="${a.is_active?"eye-off":"eye"}" class="w-4 h-4"></i></button>
                  <button onclick="showEditAdModal('${a.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-4 h-4"></i></button>
                  <button onclick="deletePromo('${a.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.renderAds=ze;const Ft=[{id:"gemini",name:"Google Gemini",tag:"FREE",color:"blue",icon:"sparkles",kf:"gemini_key",ph:"AIzaSyâ€¦",signup:"https://aistudio.google.com/apikey",models:["gemini-3-flash-preview","gemini-3.1-flash-lite-preview"],mf:"gemini_model",dm:"gemini-3-flash-preview",desc:"Google's best free AI. Great for coding, writing apps & websites.",free_tier:"15 req/min Â· 1M tokens/day â€” Free forever"}],de={border:{blue:"border-blue-500/50"},bg:{blue:"bg-blue-500/8"},text:{blue:"text-blue-400"},badge:{blue:"bg-blue-500/15 text-blue-300"}};async function ja(){const e=document.getElementById("content");try{let t=function(s){const o=n===s.id,r=a[s.kf],l=a[s.mf]||s.dm;return`
        <div class="glass-soft border ${o?de.border[s.color]+" "+de.bg[s.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard" id="apc-${s.id}">
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-8 h-8 ${de.bg[s.color]} rounded-lg flex items-center justify-center shrink-0">
                <i data-lucide="${s.icon}" class="w-4 h-4 ${de.text[s.color]}"></i>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h3 class="text-xs font-black text-white">${d(s.name)}</h3>
                  <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full ${de.badge[s.color]}">${s.tag}</span>
                </div>
                <p class="text-[9px] text-emerald-400 font-bold mt-0.5 leading-tight truncate">${d(s.free_tier)}</p>
              </div>
            </div>
            <label class="flex items-center gap-1 cursor-pointer shrink-0">
              <input type="radio" name="active_provider" value="${s.id}" ${o?"checked":""} class="accent-blue-500" onchange="highlightAI('${s.id}')">
              <span class="text-[9px] font-bold ${o?de.text[s.color]:"text-gray-600"}">USE</span>
            </label>
          </div>
          <p class="text-[11px] text-gray-400 leading-relaxed">${d(s.desc)}</p>
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="lbl mb-0">API Key</label>
              <a href="${s.signup}" target="_blank" rel="noopener" class="text-[10px] font-bold ${de.text[s.color]} hover:underline flex items-center gap-0.5">
                <i data-lucide="external-link" class="w-3 h-3"></i>Get Free Key
              </a>
            </div>
            <div class="relative">
              <input type="password" class="input-field pr-16 text-xs" name="${s.kf}"
                placeholder="${r?"â€¢â€¢â€¢â€¢"+r.slice(-4):s.ph}">
              ${r?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>'}
            </div>
          </div>
          <div>
            <label class="lbl">Model</label>
            <select class="input-field text-xs" name="${s.mf}">
              ${s.models.map(c=>`<option value="${c}" ${l===c?"selected":""}>${c}</option>`).join("")}
            </select>
          </div>
        </div>`};const{data:i}=await b.from("ai_settings").select("*").limit(1).maybeSingle(),a=i||{},n=a.active_provider||"gemini";e.innerHTML=`
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
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">${Ft.map(t).join("")}</div>
          </div>

          <div class="glass-soft border border-emerald-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-start justify-between gap-3 flex-wrap">
              <div class="flex items-center gap-2">
                <i data-lucide="messages-square" class="w-4 h-4 text-emerald-400"></i>
                <h3 class="text-sm font-black text-white uppercase tracking-wide">AI Chat Settings</h3>
                <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300">Customer Chat Only</span>
              </div>
              <label class="flex items-center gap-2 cursor-pointer">
                <span class="text-[10px] font-bold text-emerald-300">Enable chat assistant</span>
                <span class="toggle-switch"><input type="checkbox" name="customer_ai_enabled" ${a.customer_ai_enabled!==!1?"checked":""}><span class="toggle-slider"></span></span>
              </label>
            </div>
            <p class="text-[11px] text-gray-400 leading-relaxed">This is the <b class="text-white">customer support chat assistant</b> (the floating "Contact Us" bubble). It talks with shoppers in their own language with a local human name, and it never gives up: it automatically stacks <b class="text-emerald-300">Google Gemini → Groq → OpenRouter → free keyless AI</b>, each with its own free quota, so customers ALWAYS get a real answer instead of a "rate limit" message.</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <label class="lbl">Google Gemini Key (chat)</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16 text-xs" name="gemini_key"
                    placeholder="${a.gemini_key||a.gemini_api_key?"••••"+String(a.gemini_key||a.gemini_api_key).slice(-4):"AIzaSy… (shared Gemini key)"}">
                  ${a.gemini_key||a.gemini_api_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>'}
                </div>
              </div>
              <div>
                <label class="lbl">Chat Model (optional)</label>
                <select class="input-field text-xs" name="customer_model_override">
                  <option value="">Auto (recommended)</option>
                  ${["gemini-3-flash-preview","gemini-2.5-flash","gemini-2.5-flash-lite","gemini-2.0-flash"].map(s=>`<option value="${s}" ${(a.customer_model_override||"")===s?"selected":""}>${s}</option>`).join("")}
                </select>
              </div>
            </div>
            <div class="mt-3">
              <label class="lbl">OpenRouter Key (optional, free fallback)</label>
              <div class="relative">
                <input type="password" class="input-field pr-16 text-xs" name="openrouter_key"
                  placeholder="${a.openrouter_key?"••••"+String(a.openrouter_key).slice(-4):"sk-or-v1-… (NEW)"}">
                ${a.openrouter_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>'}
              </div>
              <p class="text-[10px] text-gray-400 mt-1">Your Groq key (in Groq Vision above) is used as an extra free fallback automatically. Add an OpenRouter key for even more free headroom — the chat always finds a provider that can answer right now.</p>
            </div>
            <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener" class="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-400 hover:underline">
              <i data-lucide="external-link" class="w-3 h-3"></i>Get a free Gemini key for the chat assistant
            </a>
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
                  placeholder="${a.groq_key?"••••"+String(a.groq_key).slice(-4):"gsk_…"}">
                ${a.groq_key?'<p class="text-[9px] font-bold text-emerald-500 mt-1">✓ Saved</p>':""}
              </div>
              <div>
                <label class="lbl">Vision Model</label>
                <select class="input-field text-xs" name="groq_vision_model">
                  ${["meta-llama/llama-4-scout-17b-16e-instruct","qwen/qwen3.6-27b"].map(s=>`<option value="${s}" ${(a.groq_vision_model||"meta-llama/llama-4-scout-17b-16e-instruct")===s?"selected":""}>${s}</option>`).join("")}
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

          <div class="glass-soft border border-cyan-500/25 rounded-2xl p-4 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2 flex-wrap">
              <i data-lucide="car-front" class="w-4 h-4 text-cyan-400"></i> Car &amp; Truck Scanner
              <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300">Cars &amp; Trucks Only</span>
            </h3>
            <p class="text-[11px] text-gray-400 leading-relaxed">This is a <b class="text-white">separate, dedicated AI system just for Cars, Trucks &amp; Motorhomes</b>. It uses its own Gemini key, its own car-specific scanner, and reads cars from <b class="text-white">photos OR videos</b> (video frames are sampled automatically). It does NOT use the product scanner or its key — it is fully independent.</p>
            <p class="text-[10px] text-amber-300/90 leading-relaxed">⚡ When this key runs out of free quota, the car scanner <b>stops</b> until you paste in a fresh key here. No fake values are ever generated. Add a new key and the car scanner works again automatically.</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <label class="lbl">Car Scanner Gemini Key</label>
                <div class="relative">
                  <input type="password" class="input-field text-xs" name="car_scanner_key"
                    placeholder="${a.car_scanner_key?"••••"+String(a.car_scanner_key).slice(-4):"AIzaSy… (dedicated car key)"}">
                  ${a.car_scanner_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>'}
                </div>
                <p class="text-[10px] text-gray-400 mt-1">Get a free key at Google AI Studio, then paste it here. The key is stored securely in your database.</p>
              </div>
              <div>
                <label class="lbl">Car Scanner Model</label>
                <select class="input-field text-xs" name="car_scanner_model">
                  ${["gemini-flash-latest","gemini-3.7-flash","gemini-3.6-flash"].map(s=>`<option value="${s}" ${(a.car_scanner_model||"gemini-flash-latest")===s?"selected":""}>${s}</option>`).join("")}
                </select>
              </div>
            </div>
            <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener" class="inline-flex items-center gap-0.5 text-[10px] font-bold text-cyan-400 hover:underline">
              <i data-lucide="external-link" class="w-3 h-3"></i>Get a free Gemini key for the Car &amp; Truck Scanner
            </a>
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="sliders" class="w-4 h-4 text-blue-400"></i> Feature Toggles</h3>
            ${[{key:"product_ai_enabled",label:"AI Product Creation",desc:"AI auto-fills product descriptions",val:a.product_ai_enabled!==!1},{key:"ai_code_assist",label:"AI Code Assistant",desc:"AI helps build and edit your website code",val:a.ai_code_assist!==!1},{key:"ai_moderation",label:"AI Content Moderation",desc:"Auto-approve/reject customer reviews using AI",val:a.ai_moderation}].map(s=>`
              <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
                <div><p class="text-xs font-bold text-white">${s.label}</p><p class="text-[11px] text-gray-500">${s.desc}</p></div>
                <label class="toggle-switch"><input type="checkbox" name="${s.key}" ${s.val?"checked":""}><span class="toggle-slider"></span></label>
              </div>`).join("")}
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            ðŸ’¾ Save AI Settings
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.highlightAI=function(e){Ft.forEach(t=>{const i=document.getElementById("apc-"+t.id);if(!i)return;const a=t.id===e;i.className=`glass-soft border ${a?de.border[t.color]+" "+de.bg[t.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard`;const n=i.querySelector("input[type=radio] + span");n&&(n.className=`text-[9px] font-bold ${a?de.text[t.color]:"text-gray-600"}`)})};window.saveAiSettings=async function(e){e.preventDefault();const t=new FormData(e.target),i=Object.fromEntries(t.entries()),a={active_provider:i.active_provider||"gemini",product_ai_enabled:i.product_ai_enabled==="on",ai_code_assist:i.ai_code_assist==="on",ai_moderation:i.ai_moderation==="on"};Ft.forEach(r=>{i[r.mf]&&(a[r.mf]=i[r.mf]);const l=(i[r.kf]||"").trim();l&&!l.startsWith("â€¢â€¢â€¢â€¢")&&l!==""&&(a[r.kf]=l)}),a.gemini_key&&(a.gemini_api_key=a.gemini_key),i.groq_vision_model&&(a.groq_vision_model=i.groq_vision_model);const n=(i.groq_key||"").trim();n&&!/^[•\u2022]{4}/.test(n)&&(a.groq_key=n),i.car_scanner_model&&(a.car_scanner_model=i.car_scanner_model);const s=(i.car_scanner_key||"").trim();s&&!/^[•\u2022]{4}/.test(s)&&(a.car_scanner_key=s),a.customer_ai_enabled=i.customer_ai_enabled==="on",i.customer_model_override!==void 0&&(a.customer_model_override=i.customer_model_override.trim());const o=(i.openrouter_key||"").trim();o&&!/^[•\u2022]{4}/.test(o)&&(a.openrouter_key=o);try{const{data:r}=await b.from("ai_settings").select("id").limit(1).maybeSingle();let l;if(r?.id?{error:l}=await b.from("ai_settings").update(a).eq("id",r.id):{error:l}=await b.from("ai_settings").insert(a),l){g("Save failed: "+l.message,"error"),console.error("[AI Save]",l);return}await D.reload(),g("âœ… AI settings saved!","success"),setTimeout(()=>ja(),600)}catch(r){g("Unexpected error: "+r.message,"error"),console.error("[AI Save]",r)}};const D={_cfg:null,async reload(){const{data:e,error:t}=await b.from("ai_settings").select("*").limit(1).maybeSingle();if(t){console.warn("[aiClient] Could not load settings:",t.message),this._cfg={};return}const i=e||{};!i.gemini_key&&i.gemini_api_key&&(i.gemini_key=i.gemini_api_key),this._cfg=i},async getConfig(){return this._cfg||await this.reload(),this._cfg},async freeChat(e,{maxTokens:t=2e3,timeoutMs:i=6e4}={}){const a=await fetch("https://text.pollinations.ai/openai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"openai",messages:e.map(o=>({role:o.role==="assistant"?"assistant":o.role==="system"?"system":"user",content:String(o.content||"").slice(0,12e3)})),max_tokens:t}),signal:AbortSignal.timeout(i)});if(!a.ok)throw new Error(`Free AI provider error (${a.status}).`);const n=await a.json(),s=String(n?.choices?.[0]?.message?.content||"").trim();if(!s)throw new Error("Free AI provider returned an empty reply.");return{text:s,provider:"Free AI (Pollinations)",model:String(n?.model||"openai-fast")}},async chat(e,{maxTokens:t=2e3}={}){const i=await this.getConfig();if(!String(i.gemini_key||"").trim())return this.freeChat(e,{maxTokens:t});const n=e[e.length-1],s={action:"chat",message:String(n?.content||"").trim(),history:e.slice(0,-1).map(o=>({role:o.role,content:String(o.content||"")})),provider_override:"gemini",max_tokens:t};try{const o=await this._callEdge(s);if(o&&o.response)return{text:o.response,provider:"Google Gemini",model:o.model||i.gemini_model};throw new Error(String(o?.error||"Gemini is unavailable."))}catch(o){try{const r=await this.freeChat(e,{maxTokens:t});return r.note="gemini-unavailable",r}catch{throw o}}},async prompt(e,t={}){return this.chat([{role:"user",content:e}],t)},async getStatus(){const e=await this.getConfig();return Ft.map(t=>({id:t.id,name:t.name,color:t.color,hasKey:!!e[t.kf]?.trim(),isActive:e.active_provider===t.id,isCoolingDown:!1,remainingSec:0}))},async analyzeImages(e,t={}){const i=`You are the AI listing expert for the Weverse Online Shop marketplace. Look carefully at the uploaded product photo(s) and identify exactly what the product is â€” the REAL brand, model and year that actually appear in the photos, never a guessed one.

IDENTIFY THE REAL BRAND & MODEL (most important):
- Find the brand badge, emblem, logo, nameplate or label in the photo and read its exact letters and symbols, character by character.
- For vehicles, cross-check the badge against the design: grille shape, headlight and taillight design, body lines, wheels, interior and steering wheel. A BMW grille/kidney badge, Mercedes three-pointed star, Audi four rings, Toyota, Honda, Ford, Tesla, etc. are visually distinct â€” match what you actually see.
- Use the EXACT brand name that is printed on the product. NEVER swap it for a different brand (e.g. never call a BMW a Mercedes-Benz, never call an iPhone a Samsung).
- If the exact model number is printed (e.g. "X5", "C300", "iPhone 15 Pro Max", "MacBook Pro"), use that exact text.
- The year must come from a visible printed date/serial when present; otherwise give your best estimate from the design era and never invent a specific year you cannot support.

Return a single valid JSON object (no markdown, no extra text) with these keys:
- title (string): a real, professional marketplace product title that matches the actual item (real brand + real model/type + key feature + category). Never use placeholders like "AI Product" or "Premium Item".
- description (string): a detailed, persuasive 2-4 sentence description.
- category (string): the best category from this list: ${_e.join(", ")}.
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
- Respond with valid JSON only.`,a=await this._collectScanImages((e||[]).slice(0,t.maxImages||3));if(!a.length)throw new Error("Could not read the uploaded images.");try{const n=await this._callEdge({action:"vision",images:a,prompt:i,max_tokens:4096});if(n&&n.success&&n.text){const s=xt(n.text);if(s)return n.provider&&this._noteProvider(n.provider),{...s,_aiProvider:n.provider==="groq"?"Groq vision (backup)":"Gemini vision",_aiModel:n.model};throw new Error("The AI returned no valid analysis for these images.")}throw new Error(n&&n.error||"Vision service unavailable.")}catch(n){this._noteIssue("identify",`server vision: ${n&&n.message||n}`)}return null},async _runVisionPrompt(e,t,{maxImages:i=5,maxTokens:a=4096,mergeResults:n=null,onProgress:s=()=>{},stageLabel:o="vision"}={}){const r=Math.max(1,Number(i)||5),l=await this._collectScanImages(t,{onProgress:s});if(!l.length)throw new Error("Could not read the uploaded images.");const c=async m=>this._runSingleVisionCall(e,m,{maxTokens:a,stageLabel:o});let u;if(l.length<=r)u=await c(l);else{const m=[];for(let _=0;_<l.length;_+=r)m.push(l.slice(_,_+r));s(0,m.length);const f=3,h=new Array(m.length).fill(null);let p=0;const y=async()=>{for(;p<m.length;){const _=p++;h[_]=await c(m[_]).catch(()=>null),s(Math.min(p,m.length),m.length)}};await Promise.all(Array.from({length:Math.min(f,m.length)},y));const v=[];if(h.forEach((_,x)=>{_&&v.push({result:_,startIndex:x*r})}),!v.length)return null;u=n?n(v,{batchSize:r,totalImages:l.length}):v.reduce((_,x)=>this._mergeJsonResults(_,x.result),null)}return u||null},async _runSingleVisionCall(e,t,{maxTokens:i=4096,stageLabel:a="vision"}={}){if(!await this._waitForQuotaWindow(7e4,a))return null;try{const n=await this._paceGeminiCall(()=>this._callEdge({action:"vision",images:t,prompt:e,max_tokens:i},45e3));if(n&&n.success&&n.text){const s=xt(n.text);if(s)return n.provider&&this._noteProvider(n.provider),{...s,_aiProvider:n.provider==="groq"?"Groq vision (backup)":"Gemini vision",_aiModel:n.model};throw new Error("The AI returned no valid analysis for these images.")}throw new Error(n&&n.error||"Vision service unavailable.")}catch(n){this._noteIssue(a,`vision: ${n&&n.message||n}`)}return null},_pdfPageCache:new Map,_videoFrameCache:new Map,async _collectScanImages(e,{onProgress:t=()=>{}}={}){const i=(Array.isArray(e)?e:[e]).map(s=>String(s||"")).filter(Boolean);if(!i.length)return[];const a=await Promise.all(i.map(async s=>{try{if(/^data:application\/pdf/.test(s)||qe(s)){let l=this._pdfPageCache.get(s)||null;return l||(l=await Xi(s,{maxDim:1300}).catch(()=>[]),l.length&&this._pdfPageCache.set(s,l)),l}let o=null;if(zi(s))o=s;else if(s.startsWith("blob:"))try{const l=await fetch(s,{signal:AbortSignal.timeout(15e3)}).then(c=>c.blob());l&&l.type&&l.type.startsWith("video/")&&(o=l)}catch{}if(o){let l=this._videoFrameCache.get(s)||null;return l||(l=await Ki(o,{maxFrames:12,maxDim:1024}).catch(()=>[]),l.length&&this._videoFrameCache.set(s,l)),l}const r=await this._fetchImageAsDataUrl(s,1024);return r?[r]:[]}catch{return[]}})),n=[];for(const s of a)n.push(...s);return n},_mergeJsonResults(e,t){if(!e)return t?{...t}:null;if(!t)return e;const i={...e};for(const[a,n]of Object.entries(t))if(!a.startsWith("_")&&!(n==null||typeof n=="string"&&!n.trim())){if(!(a in i)||i[a]==null||i[a]===""){i[a]=n;continue}if(Array.isArray(i[a])||Array.isArray(n)){const s=[...Array.isArray(i[a])?i[a]:[i[a]],...Array.isArray(n)?n:[n]].map(o=>typeof o=="string"?o.trim():o).filter(o=>o!=null&&o!=="");i[a]=[...new Set(s)]}else typeof i[a]=="object"&&typeof n=="object"?i[a]={...i[a],...n}:(String(i[a]).trim(),String(n).trim())}return i},async identifyProduct(e,t={}){const i=`STAGE 1 â€” IDENTIFY THE EXACT PRODUCT.
Look at the photo(s) and state exactly what product is shown. Identification ONLY â€” do not complete any specifications yet.

IDENTIFICATION RULES (accuracy over guesses â€” this is the most important step):
- Read the real brand badge / logo / emblem / nameplate / label in the photo character by character and use the EXACT brand that is printed. NEVER swap brands: a BMW must never be called Mercedes-Benz, an iPhone never Samsung, a Toyota never Honda or any other brand.
- The model must come from a visible nameplate / label / badging when present. Otherwise identify the exact design (grille, headlights, taillights, wheels, body lines, interior, silhouette, box, packaging) and give your best professional identification, or give the brand + product type (e.g. "BMW SUV" or "Levi's jeans") instead of inventing a specific model.
- year: only from a visible printed year, serial, badge or registration. Otherwise estimate from the design era and set "year_estimated": true.
- color: the dominant color clearly visible.
- body_type: only when clearly visible (Sedan, SUV, Hatchback, Coupe, Convertible, Wagon, Pickup, Truck, Van, Sports Car, Luxury Sedan, Motorcycle, Yacht, Other).
- condition: judge from what is visible (New, Refurbished, Used - Like New, Used - Good, Used - Fair).
- listing_type: "property" if the photo shows a house, villa, apartment, condo, mansion, land, estate or any building for sale; "vehicle" for cars, motorcycles, boats and other vehicles; otherwise "product".
- category (for products and vehicles): best match from this list: ${_e.join(", ")}. For property photos set category to "Real Estate".
- For properties also give: property_type (House, Villa, Apartment, Condo, Land, Commercial, Farm, Other), bedrooms (number or null), bathrooms (number or null), half_bathrooms (number or null), building_size (string|null), land_size (string|null), floors (number|null), garage (string|null, e.g. "2-car attached"), parking_spaces (number|null), furnished ("Furnished"/"Unfurnished"/null), condition (string|null â€” only from a visible listing sign, seller notes or obvious visible state: "New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation"), year_built (number|null â€” only from a visible year, plaque, cornerstone or listing sign), year_renovated (number|null â€” only if visibly stated), area (neighborhood/district, string|null), address (street + number or landmark when visible in the photo or reliably known, string|null), zip_code (string|null â€” only if visibly printed), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town (string|null), city (string|null), state (string|null), country (string|null), latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null).
- LOCATION RULES: use ONLY location information genuinely visible in the photo or reliably known from it (street signs, landmarks, real estate signs, watermarks). NEVER invent a street address, area, city or coordinates. If you cannot determine a location value, return null for that field â€” the owner will enter it. Latitude/longitude may be derived from a readable address (e.g. a visible street sign); otherwise null.
- confidence: how certain you are about what this is: "high" | "medium" | "low".
- alternate_categories: up to 2 other plausible category matches from the list above, or [].
- detected_name: a short plain label of what you actually see, e.g. "white Toyota Camry sedan", "black leather handbag", "modern 4-bedroom villa".
- If the photo does not clearly show a product, return { "identified": false, "detected_name": "what you see", "reason": "why you cannot identify it" }.

Return ONE valid JSON object (no markdown) with only these keys:
{ "identified": true, "listing_type": "product"|"vehicle"|"property", "brand": string|null, "model": string|null, "year": string|null, "year_estimated": boolean, "body_type": string|null, "color": string|null, "condition": string|null, "category": string|null, "subcategory": string|null, "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": string|null, "year_built": number|null, "year_renovated": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "confidence": "high"|"medium"|"low", "alternate_categories": string[], "detected_name": string }`;return this._runVisionPrompt(i,e,{maxImages:t.maxImages||5,stageLabel:"identify"})},async detectProducts(e,t={}){const i=`STAGE 0 â€” DETECT EVERY DISTINCT PRODUCT.
Look carefully at ALL of the photo(s) uploaded and detect EVERY distinct product shown.

RULES:
- Every detected product must be its own entry. If one photo shows a bag, a watch, shoes and a phone, that is FOUR separate products.
- Even when multiple photos show the SAME product, create a SEPARATE entry for each detection. Each photo that shows a product must result in its own listing. The owner reviews every single one.
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
- category: best match from this list â€” ${_e.join(", ")}. For properties set category to "Real Estate".
- subcategory, property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors (number|null), garage (string|null), parking_spaces (number|null), furnished ("Furnished"/"Unfurnished"/null), year_built (number|null â€” only if visible), area (neighborhood/district), neighborhood (string|null), living_areas (string|null - rooms/areas seen on a visible floor plan), kitchens (number|null), balconies (number|null - only clearly visible), garden (string|null - e.g. "Private garden", "None"), pool (string|null - e.g. "Private pool", "Community pool", "None"), security (string|null - only visibly present systems), utilities (string|null - only visibly stated), construction_type (string|null - only visibly apparent), construction_status (string|null - e.g. "Completed", "Under construction"), ownership_type (string|null - only printed on a visible sign/paper), contact_name (string|null - only from visible contact info), contact_phone (string|null), contact_email (string|null), address (street + number or landmark when visible/reliably known), zip_code (string|null â€” only if visible), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town, city, state, country, latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null) for properties. LOCATION RULES: read EVERY frame of the video/photo for location evidence - a flag, a written country name, a license plate, street/business/signage, or the dominant language - and use it to fill country, country_code, state, city, town, address and coordinates for the REAL location shown (e.g. a US flag or "USA" sign = country "United States"/"US"; a French plate or French text = "France"/"FR"; a UK plate = "United Kingdom"/"GB"). NEVER fill from a guessed or imagined location you cannot see. When NO location is visible anywhere in the video or photos, still return a real, valid fallback location from across the world (a real city in a real country with its real country_code, e.g. "London"/"GB", "Dubai"/"AE", "New York"/"US") so every listing has a working map - set address/town/city/country/country_code and leave latitude/longitude null (the app geocodes them to the true place).
- confidence: "high" | "medium" | "low" for each product.
- detected_name: a short plain label for each product, e.g. "black leather handbag", "silver wristwatch", "white Nike sneakers", "modern 3-bedroom villa".

Return ONE valid JSON object (no markdown):
{ "identified": true, "products": [ { "image_indices": number[], "listing_type": "product"|"vehicle"|"property", "brand": string|null, "model": string|null, "year": string|null, "year_estimated": boolean, "body_type": string|null, "color": string|null, "condition": string|null, "category": string|null, "subcategory": string|null, "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": "Furnished"|"Unfurnished"|null, "year_built": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "confidence": "high"|"medium"|"low", "detected_name": string } ] }`;return this._runVisionPrompt(i,e,{maxImages:t.maxImages||5,stageLabel:"detect",mergeResults:a=>{const n=[];for(const{result:s,startIndex:o}of a)for(const r of s&&Array.isArray(s.products)?s.products:[]){const l=Array.isArray(r.image_indices)?[...new Set(r.image_indices.map(c=>parseInt(c,10)).filter(Number.isFinite).map(c=>c+o))]:[o];n.push({...r,image_indices:l})}return{identified:n.length>0,products:n}}})},async completeProductSpecs(e,t,i={}){const a=t||{},n=`STAGE 2 â€” COMPLETE THE STANDARD SPECIFICATIONS.
The product below was identified in STAGE 1 from the photos.

IDENTIFIED PRODUCT:
- listing_type: ${String(a.listing_type||"product")}
- brand: ${String(a.brand||"unknown")}
- model: ${String(a.model||"unknown")}
- year: ${String(a.year||"unknown")}
- body_type: ${String(a.body_type||"unknown")}
- category: ${String(a.category||"unknown")}
- detected_name: ${String(a.detected_name||"unknown")}

Look at the photo(s) again, then complete the standard specifications for THIS EXACT identified product using reliable product/vehicle/property data for that exact brand + model.

ALWAYS fill every relevant specification when you can determine it for the identified product:
- Vehicles: Engine, Transmission, Fuel, Drive type, Horsepower, Seats (seating capacity), Doors, Body type, Model year, Mileage (only if visible/known), Safety features, Trim (when visible/known), Color, Interior & comfort (only visible elements), Driver assistance, Technology/infotainment, Wheels & tires (size/type/condition, e.g. "20-inch alloys, 265/65 R18, 2 new tires"), Dimensions (L x W x H), Cargo capacity, Towing capacity, Fuel economy, Registration status, Inspection status, Service history and Accident history (only from visible paperwork/signs — otherwise null), Previous owners (only if visibly stated), Warranty.
- Phones/Computers: storage, ram, processor, display, graphics, os.
- Properties (house/villa/land): property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors, garage, parking_spaces, furnished ("Furnished"/"Unfurnished"/null), condition (string|null â€” "New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation"; only from visible state or a listing sign, never inferred as verified), year_built (number|null â€” only if visible/known), year_renovated (number|null â€” only if visible/known), area (neighborhood/district), neighborhood (string|null), living_areas (string|null - rooms/areas seen on a visible floor plan), kitchens (number|null), balconies (number|null - only clearly visible), garden (string|null - e.g. "Private garden", "None"), pool (string|null - e.g. "Private pool", "Community pool", "None"), security (string|null - only visibly present systems), utilities (string|null - only visibly stated), construction_type (string|null - only visibly apparent), construction_status (string|null - e.g. "Completed", "Under construction"), ownership_type (string|null - only printed on a visible sign/paper), contact_name (string|null - only from visible contact info), contact_phone (string|null), contact_email (string|null), address (street + number or landmark when visible/reliably known), zip_code (string|null â€” only if visibly printed), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town, city, state, country, country_code, latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null), interior_features (string[]|null â€” only interior elements actually visible in the photos), exterior_features (string[]|null â€” only exterior elements actually visible), home_systems (string[]|null â€” only systems visibly present, e.g. air conditioning units, solar panels, radiators), nearby_area (only genuinely known from the photo/listing sign: schools/hospitals/shopping/transportation/distances â€” otherwise null), floor_plan (only if a floor plan is actually visible in the photos, otherwise null), legal_info (NEVER claim ownership/title/permits/taxes/legal status as verified from a photo â€” only mention something clearly printed on a visible listing/sign as source "Seller provided", otherwise null), inspection_info (string|null â€” only if visibly stated), verification_status (always null here â€” stays "Not verified" unless the owner verifies), risk_notes (string|null â€” only clearly visible issues). LOCATION RULES: only use location genuinely visible in the photo or reliably known â€” never invent an address, city, coordinates, landmarks or nearby places; return null (and list the key in "missing_fields") when you cannot determine it. latitude/longitude may be derived from a readable address; otherwise null.
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
}`;return this._runVisionPrompt(n,e,{maxImages:i.maxImages||5,stageLabel:"specs"})},async estimateProductPrice(e,t,i={},a={}){const n=t||{},s=i||{},o=`STAGE 3 â€” ESTIMATE THE REAL MARKET PRICE AND A PROMOTIONAL DISCOUNT PRICE.
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
- engine: ${String(s.engine||"unknown")}
- transmission: ${String(s.transmission||"unknown")}
- fuel_type: ${String(s.fuel_type||"unknown")}
- drive_type: ${String(s.drive_type||"unknown")}
- horsepower: ${String(s.horsepower||"unknown")}
- mileage: ${String(s.mileage||"unknown")}
- storage/ram: ${String(s.storage||"")}${s.ram?" / "+s.ram:""}
- property: ${String(n.property_type||s.property_type||"")}${s.bedrooms?` ${s.bedrooms} beds`:""}${s.half_bathrooms?` / ${s.half_bathrooms} half baths`:""}${s.bathrooms?` / ${s.bathrooms} baths`:""}${s.building_size?` / ${s.building_size}`:""}${s.land_size?` / ${s.land_size} land`:""}${s.year_built?` / built ${s.year_built}`:""}${s.condition?` / ${s.condition}`:""}${s.city?` / ${s.city}`:""}

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
}`;return this._runVisionPrompt(o,e,{maxImages:a.maxImages||5,stageLabel:"price"})},async completeSpecsAndPrice(e,t,i={}){const a=t||{},n=`STAGES 2+3 â€” COMPLETE THE SPECIFICATIONS AND ESTIMATE THE PRICE IN ONE STEP.
The product below was identified from the photos.

IDENTIFIED PRODUCT:
- listing_type: ${String(a.listing_type||"product")}
- brand: ${String(a.brand||"unknown")}
- model: ${String(a.model||"unknown")}
- year: ${String(a.year||"unknown")}
- body_type: ${String(a.body_type||"unknown")}
- category: ${String(a.category||"unknown")}
- detected_name: ${String(a.detected_name||"unknown")}

Look at the photo(s), then do BOTH jobs for THIS EXACT identified product.

COMPLETENESS AND REAL INFERENCE (READ THIS BEFORE ANYTHING ELSE):
The marketplace form must never end up mostly empty. For EVERY form field that applies to this item, output a REAL value using this order:
 1. Read it directly from the photo(s) when visible: badges, labels, nameplates, the odometer or cluster, wheels, tires, interior material, body lines, signage, room count from windows or a visible floor plan.
 2. When a value is not literally visible, use the REAL standard factory configuration most commonly sold for that EXACT identified model (engine size and layout, fuel type, transmission, drive layout, seats, doors, dimensions, horsepower, and standard safety/navigation equipment). Example: a family SUV is typically a 2.0-2.5L gasoline or hybrid, automatic, AWD, 5 seats; a pickup is typically an automatic 4WD with 5 seats; a compact hatchback is a 1.0-1.6L gasoline, manual or automatic, FWD, 5 seats.
 3. For properties, judge rooms, furniture, condition, floors, finishes and systems from the photos and from the property type plus building size (e.g. a 2,500 sqft single-family home is typically 3-4 bedrooms / 2-3 bathrooms / 2 floors). Judge condition ("Good" is the honest default when the state is unclear).
Any value you inferred rather than directly saw MUST ALSO be listed in the "estimated" array.
NEVER write "Not specified", "unknown", "N/A", "none", or leave an applicable field null just because its value is not clearly visible. Give your best REAL, defensible value and list it in "estimated" instead.
ONLY these fields may be null AND listed in "missing_fields": contact fields (seller_name, seller_phone, seller_email, contact_name, contact_phone, contact_email - these are filled with the store's own company contact, so ignore them), a VIN/serial that is not legible in any photo, a precise street address, ZIP/postal, city/state/country, GPS coordinates or listing location that is nowhere visible, document URLs, verification evidence or dates, exact odometer mileage that is not visible, and stock_quantity (except 1 for unique items). Never put engine, fuel type, transmission, drive type, seats, doors, body type, condition, room counts or amenity fields in "missing_fields": those are always covered by inference rule 2 or 3 above.

JOB A â€” COMPLETE THE STANDARD SPECIFICATIONS using reliable data for that exact brand + model:
- Vehicles: make, model, body_type, trim/edition, model_year, color, mileage (read the odometer/trip computer when visible; a brand-new unused vehicle gets "0 mi"; only when truly not visible leave null in missing_fields), engine (e.g. "2.0L Turbocharged I4" or "4.5L V8 Turbo Diesel"), horsepower, transmission, fuel_type, drive_type, fuel_economy, towing_capacity, seating_capacity, doors, wheels_tires (size/type/condition, e.g. "20-inch alloys, 265/65 R18, 2 new tires"), dimensions (L x W x H), cargo_capacity, safety_features, driver_assistance, technology, interior, warranty, previous_owners, registration_status, inspection_status, service_history, accident_history, ownership_history, location, seller_name, seller_phone, seller_email.
- Phones/Computers: storage, ram, processor, display, graphics, os.
- Properties: property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors, garage, parking_spaces, furnished ("Furnished"/"Unfurnished"/null), condition ("New Construction"/"Like New"/"Excellent"/"Good"/"Fair"/"Needs Renovation" â€” only from visible state or a listing sign, never inferred as verified), year_built/year_renovated (only if visible/known), area, address (ONLY when genuinely visible/reliably known), zip_code (only if visibly printed), landmarks (only clearly indicated ones), town, city, state, country, country_code, latitude, longitude, listing_status ("sale"/"rent"/null). LOCATION RULES: read EVERY frame for country evidence - a flag, a written country name, a license plate, street/business signs, or the dominant language - and use it to fill country and country_code for the country clearly shown (e.g. a US flag or "USA" sign means country "United States", country_code "US"; a French plate or French text means "France"/"FR"; a UK plate means "United Kingdom"/"GB"). Only fill state/city/town/address when their names are visibly printed. NEVER invent an address, city, coordinates or a country that is not indicated by any visible evidence; return null and list the key in "missing_fields" when no country evidence is visible, EXCEPT that when no location is visible in ANY frame you must still return a real, valid fallback location from across the world (a real city in a real country with its real country_code and a generic street address, e.g. "1 High Street", "London", "United Kingdom"/"GB"; or "1 Sheikh Zayed Rd", "Dubai"/"AE"), filling address/town/city/state/country/country_code and leaving latitude/longitude null (the app geocodes them to the true place) so every property always has a working map.
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
  "make": string|null, "model": string|null, "trim": string|null, "model_year": string|null, "body_type": string|null,
  "vehicle_type": string|null, "year": string|null, "color": string|null, "condition": string|null,
  "mileage": string|null, "engine": string|null, "horsepower": string|null, "transmission": string|null,
  "fuel_type": string|null, "drive_type": string|null, "fuel_economy": string|null, "towing_capacity": string|null,
  "seating_capacity": string|null, "doors": string|null, "wheels_tires": string|null, "dimensions": string|null,
  "cargo_capacity": string|null, "safety_features": string[]|null, "driver_assistance": string[]|null,
  "technology": string[]|null, "interior": string[]|null, "vin": string|null, "warranty": string|null,
  "previous_owners": string|null, "registration_status": string|null, "inspection_status": string|null,
  "service_history": string|null, "accident_history": string|null, "ownership_history": string|null,
  "location": string|null, "seller_name": string|null, "seller_phone": string|null, "seller_email": string|null,
  "features": string[]|null, "highlights": string[]|null, "seo_keywords": string[]|null,
  "storage": string|null, "ram": string|null, "processor": string|null, "display": string|null, "graphics": string|null, "os": string|null,
  "material": string|null, "size": string|null, "gender": string|null, "platform": string|null,
  "type": string|null, "property_type": string|null,
  "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null,
  "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null,
  "furnished": string|null, "year_built": number|null, "year_renovated": number|null,
  "living_areas": string|null, "kitchens": number|null, "balconies": number|null, "garden": string|null, "pool": string|null,
  "security": string|null, "utilities": string|null, "construction_type": string|null, "construction_status": string|null,
  "ownership_type": string|null, "neighborhood": string|null, "area": string|null, "address": string|null,
  "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null,
  "country": string|null, "country_code": string|null, "latitude": number|null, "longitude": number|null,
  "listing_status": "sale"|"rent"|null, "interior_features": string[]|null, "exterior_features": string[]|null,
  "home_systems": string[]|null, "nearby_area": { "schools": string[]|null, "hospitals": string[]|null, "shopping": string[]|null, "transportation": string[]|null, "distances": string[]|null }|null,
  "floor_plan": { "image": string|null, "rooms": string[]|null, "levels": string|null, "total_area": string|null }|null,
  "legal_info": string[]|null, "inspection_info": string|null, "risk_notes": string|null,
  "contact_name": string|null, "contact_phone": string|null, "contact_email": string|null,
  "author": string|null, "publisher": string|null, "language": string|null, "format": string|null, "isbn": string|null, "pages": string|null, "edition": string|null, "quantity": string|null, "age_range": string|null, "skin_type": string|null, "ingredients": string|null, "pet_type": string|null, "lens": string|null, "sensor": string|null, "megapixels": string|null, "video": string|null, "license": string|null, "version": string|null, "duration": string|null, "followers": string|null, "engagement": string|null, "niche": string|null, "usage": string|null, "shelf_life": string|null, "assembly": string|null, "weatherproof": string|null,
  "stock_quantity": number|null,
  "estimated": string[],
  "missing_fields": string[],
  "price": { "currency": "USD", "estimated_price": number, "suggested_discount_price": number|null, "confidence": "high"|"medium"|"low", "reason": string }
}${i.fieldsSchema||""}${i.fieldsSchema?`
FORM-FIELD COMPLETENESS RULE: the form-field list above is binding. EVERY key in that list that is not already covered by the JSON keys above MUST also appear as a top-level key in your returned JSON with its extracted value (or null when genuinely not present anywhere in the document/photos â€” never guess). Use each field's exact quoted key. Match select options exactly.`:""}`,s=await this._runVisionPrompt(n,e,{maxImages:i.maxImages||5,stageLabel:"specs-price"});if(!s)return null;const{price:o,...r}=s,l=o&&typeof o=="object"?o:s.estimated_price!=null?{currency:s.currency||"USD",estimated_price:s.estimated_price,suggested_discount_price:s.suggested_discount_price??null,confidence:s.confidence??null,reason:s.reason??""}:null;if(l&&Number.isFinite(Number(l.estimated_price))){const c=Number(l.estimated_price);c<=0&&(l.estimated_price=R),l.estimated_price=Math.max(R,Math.min(q,c))}return{specs:Object.keys(r).length?r:null,price:l}},async verifyExtraction(e,t,i,a=[],n={}){if(!await this._waitForQuotaWindow(2e4,"verify"))return null;const s=t||{},o=(a||[]).map(c=>`- "${c.key}" (${c.label})`).join(`
`),r=Object.entries(i||{}).filter(([,c])=>c!=null&&String(Array.isArray(c)?c.join(", "):c).trim()!=="").map(([c,u])=>`"${c}": ${JSON.stringify(Array.isArray(u)?u.join(", "):String(u).slice(0,160))}`).join(`,
`),l=`VERIFICATION PASS â€” CHECK EVERY EXTRACTED VALUE AGAINST THE DOCUMENT.
A first extraction pass produced the values below from these same photo(s)/document page(s). Your job is to RE-READ every page carefully and audit EACH value.

IDENTIFIED ITEM: ${[s.year,s.brand,s.model].filter(Boolean).join(" ")||s.detected_name||"unknown"}

CURRENT EXTRACTED VALUES:
${r||"(none yet)"}

AUDIT INSTRUCTIONS â€” check all of these, one by one:
1. WRONG VALUES: any current value that contradicts what the document actually says (misread digit/letter, wrong model variant, wrong date format, swapped fields like engine size vs horsepower, price in the wrong currency) â†’ put the CORRECT value in "corrections" under that exact key.
2. MISSED VALUES: information present somewhere in the document (any page, including fine print, tables, stamps, serials, labels, footers) that has NO current value above but belongs to one of the known fields â†’ add it under that exact key in "corrections".
3. MISPLACED VALUES ("wrong_mapping"): a value that was put in the wrong FIELD (e.g. VIN stored as mileage, a person's name stored as publisher) â†’ list [wrong_key, right_key] pairs.
4. STILL MISSING: fields that genuinely apply to this item type but have no value and are nowhere in the document â†’ list their keys in "still_missing". NEVER invent or guess a value â€” only report what is actually written in the document.
${o?`
KNOWN FORM FIELDS:
${o}
Use ONLY these keys (or keys already present above) in corrections.
`:""}
Return ONE valid JSON object (no markdown):
{ "corrections": { "<key>": <corrected or newly found value â€” exact JSON type for that field> }, "still_missing": ["key"], "wrong_mapping": [["from_key","to_key"]], "notes": ["short factual observations, e.g. 'VIN appears on page 2 footer'"] }`;try{return await this._runVisionPrompt(l,e,{maxImages:n.maxImages||5,maxTokens:2500,stageLabel:"verify",mergeResults:u=>{const m={corrections:{},still_missing:[],wrong_mapping:[],notes:[]};for(const{result:f}of u){const h=f||{};h.corrections&&typeof h.corrections=="object"&&Object.assign(m.corrections,h.corrections);for(const p of Array.isArray(h.still_missing)?h.still_missing:[]){const y=String(p);y&&!m.still_missing.includes(y)&&m.still_missing.push(y)}for(const p of Array.isArray(h.wrong_mapping)?h.wrong_mapping:[])Array.isArray(p)&&p.length>=2&&!m.wrong_mapping.some(y=>y[0]===p[0]&&y[1]===p[1])&&m.wrong_mapping.push([String(p[0]),String(p[1])]);for(const p of Array.isArray(h.notes)?h.notes:[]){const y=String(p||"").trim();y&&!m.notes.includes(y)&&m.notes.push(y)}}return m}})}catch{return null}},async _callEdge(e,t=6e4){let i="";try{i=(await b.auth.getSession())?.data?.session?.access_token||""}catch{}return await(await fetch(wn,{method:"POST",headers:{"Content-Type":"application/json",...i?{Authorization:`Bearer ${i}`}:{}},body:JSON.stringify(e),signal:AbortSignal.timeout(t)})).json().catch(()=>({}))},_imageCache:new Map,async _fetchImageAsDataUrl(e,t=768){const i=String(e);if(this._imageCache.has(i))return this._imageCache.get(i);const a=(async()=>{try{const s=await fetch(e,{signal:AbortSignal.timeout(15e3)}).then(o=>o.blob());return!s||!s.size?null:s.size<15e4?`data:${s.type||"image/jpeg"};base64,${await qs(s)}`:await this._downscaleImage(s,t)}catch{return null}})();this._imageCache.set(i,a);const n=await a;return n||this._imageCache.delete(i),n},async _downscaleImage(e,t){const i=URL.createObjectURL(e);try{const a=new Image;await new Promise((l,c)=>{a.onload=l,a.onerror=c,a.src=i});const n=Math.min(1,t/Math.max(a.width,a.height)),s=Math.max(1,Math.round(a.width*n)),o=Math.max(1,Math.round(a.height*n)),r=document.createElement("canvas");return r.width=s,r.height=o,r.getContext("2d").drawImage(a,0,0,s,o),r.toDataURL("image/jpeg",.72)}finally{URL.revokeObjectURL(i)}},_visionIssues:[],_providerCounts:{},beginScanSession(){this._visionIssues=[],this._providerCounts={},this._lastGoodModel=""},_noteProvider(e){const t=String(e||"").toLowerCase().includes("groq")?"groq":"gemini";this._providerCounts[t]=(this._providerCounts[t]||0)+1,t==="groq"&&this._noteIssue("vision","Gemini did not answer — Groq vision backup handled this request")},_noteIssue(e,t){const i=String(t||"").slice(0,220);if(!i)return;const a=this._visionIssues||(this._visionIssues=[]),n=a[a.length-1];if(n&&n.stage===e&&n.reason===i){n.count=(n.count||1)+1;return}a.push({stage:e,reason:i,count:1})},sessionReport(){return{providers:Object.entries(this._providerCounts||{}).map(([e,t])=>({name:e,count:t})),issues:(this._visionIssues||[]).slice(),lastGoodModel:this._lastGoodModel||""}},async _waitForQuotaWindow(e=7e4,t="vision"){const i=(this._geminiQuotaUntil||0)-Date.now();return i<=0?!0:i>e?(this._noteIssue(t,`quota cooldown ${Math.round(i/1e3)}s > ${Math.round(e/1e3)}s budget — completed without photo reading`),!1):(await new Promise(a=>setTimeout(a,i+300)),!0)},async preflight(){const e={gemini:null,groq:null,error:null};try{const t=await this._callEdge({action:"test_providers"},25e3);t&&t.providers?(e.gemini=t.providers.gemini||null,e.groq=t.providers.groq||null):e.error=t&&t.error||"Unexpected response from the AI service."}catch(t){e.error=String(t&&t.message||t)}return e},_geminiCallChain:Promise.resolve(),_lastGeminiCallAt:0,_paceGeminiCall(e){const i=this._geminiCallChain.then(async()=>{const a=(this._lastGeminiCallAt||0)+6e3-Date.now();return a>0&&await new Promise(n=>setTimeout(n,a)),this._lastGeminiCallAt=Date.now(),e()});return this._geminiCallChain=i.then(()=>{},()=>{}),i}};function qs(e){return new Promise(t=>{const i=new FileReader;i.onload=()=>{const a=i.result;if(typeof a=="string"){const n=a.indexOf(",");t(n>=0?a.slice(n+1):a)}else t("")},i.onerror=()=>t(""),i.readAsDataURL(e)})}window.aiClient=D;const Ni={_cfg:null,async reload(){try{const{data:e,error:t}=await b.from("ai_settings").select("*").limit(1).maybeSingle();this._cfg=(t?null:e||{})||{}}catch{this._cfg={}}},async getConfig(){return this._cfg||await this.reload(),this._cfg||{}},hasKey(){return!!(this._cfg&&String(this._cfg.car_scanner_key||"").trim())},model(){const e=String(this._cfg&&this._cfg.car_scanner_model||"").trim();return/^gemini-2\./.test(e)?"gemini-flash-latest":e||"gemini-flash-latest"},_mediaCache:new Map,async _collectScanImages(e){const t=(Array.isArray(e)?e:[e]).map(n=>String(n||"")).filter(Boolean);if(!t.length)return[];const i=await Promise.all(t.map(async n=>{try{if(this._mediaCache.has(n))return this._mediaCache.get(n);let s=null;if(/^data:application\/pdf/.test(n)||qe(n))s=await Xi(n,{maxDim:1300}).catch(()=>[]);else{let o=null;if(zi(n))o=n;else if(n.startsWith("blob:"))try{const r=await fetch(n,{signal:AbortSignal.timeout(15e3)}).then(l=>l.blob());r&&r.type&&r.type.startsWith("video/")&&(o=r)}catch{}o?s=await Ki(o,{maxFrames:6,maxDim:720}).catch(()=>[]):s=await D._fetchImageAsDataUrl(n,720).then(r=>r?[r]:[])}return this._mediaCache.set(n,s||[]),s||[]}catch{return[]}})),a=[];for(const n of i)a.push(...n);return a},async _geminiVision(e,t){const i=await this.getConfig(),a=String(i.car_scanner_key||"").trim();if(!a)throw new Error("NO_CAR_KEY");const n=this.model(),s={contents:[{parts:[{text:t},...e.filter(Boolean).map(m=>/^data:video\//.test(m)?{inlineData:{mimeType:"video/mp4",data:m.split(",")[1]}}:{inlineData:{mimeType:"image/jpeg",data:m.split(",")[1]}})]}],generationConfig:{temperature:.2,maxOutputTokens:4096}},o=`https://generativelanguage.googleapis.com/v1beta/models/${n}:generateContent?key=${encodeURIComponent(a)}`,r=async()=>{const m=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s),signal:AbortSignal.timeout(9e4)});if(m.ok)return m;const f=await m.json().catch(()=>({})),h=m.status,p=String(f&&f.error&&f.error.message||"").toLowerCase(),y=h===503||h===429||/high demand|try again later|temporarily|overload|unavailable|resource has been exhausted/.test(p);return{_status:h,_msg:p,_transient:y}};let l=await r();if(l&&l.ok){const m=await l.json(),f=m&&m.candidates&&m.candidates[0]&&m.candidates[0].content&&m.candidates[0].content.parts?m.candidates[0].content.parts.map(p=>p.text||"").join(""):"",h=f?xt(f):null;if(!h)throw new Error("CAR_NO_PARSE");return h}if(l&&l._transient){for(let m=1;m<=4;m++)if(await new Promise(f=>setTimeout(f,4e3+m*4e3)),l=await r(),l&&l.ok){const f=await l.json(),h=f&&f.candidates&&f.candidates[0]&&f.candidates[0].content&&f.candidates[0].content.parts?f.candidates[0].content.parts.map(y=>y.text||"").join(""):"",p=h?xt(h):null;if(p)return p;throw new Error("CAR_NO_PARSE")}}const c=l._status,u=l._msg;throw c===429||/quota|rate|resource has been exhausted|limit/.test(u)?new Error("CAR_QUOTA"):c===400||c===403||/api key|invalid|unauthor|permission/.test(u)?new Error("CAR_BAD_KEY"):new Error(`CAR_HTTP_${c}`)},async scanCars(e){const t=await this.getConfig();if(!String(t.car_scanner_key||"").trim())throw new Error("NO_CAR_KEY");const i=await this._collectScanImages(e);if(!i.length)throw new Error("NO_MEDIA");const n=await this._geminiVision(i,`You are the dedicated CAR & TRUCK listing expert for the Weverse Online Shop marketplace. Read the car, truck or motorhome shown in the photo(s)/video frame(s) and complete ALL of its real details below from what is actually visible.

READ THE VEHICLE ACCURATELY (most important):
- Read the real brand badge / emblem / nameplate / logo in the media character by character and use the EXACT brand that appears (BMW, Mercedes-Benz, Audi, Toyota, Ford, Tesla, Ferrari, Lamborghini, Honda, etc.). NEVER swap one brand for another, and NEVER guess a luxury brand if none is visible.
- Identify the exact model from a visible nameplate/badging, otherwise from the body design (grille, headlights, taillights, wheels, body lines, silhouette). If you cannot name a model, give "brand + type" (e.g. "Mercedes SUV") instead of inventing one.
- model_year: only from a visible year, badge or registration/plate; otherwise estimate from the design era and mark year_estimated true.
- mileage: read the odometer only if visible ("12,345 mi" -> 12345); otherwise null. Never invent a mileage.
- engine, horsepower, transmission, fuel_type, drive_type, fuel_economy, towing_capacity, seating_capacity, sleeping_capacity, doors: only from visible badges/specs/cluster, otherwise null.
- color: the dominant visible color. condition: judged from what is visible (New / Used - Like New / Used - Good / Used - Fair).
- body_type: Sedan, SUV, Hatchback, Coupe, Convertible, Wagon, Pickup, Truck, Van, Sports Car, Luxury Sedan, Motorcycle, Motorhome / RV, Boat, Other.
- vehicle_type: same as body_type when it is a vehicle type.
- vin, trim, warranty: only if visibly printed, otherwise null.
- location, country: read EVERY frame for location evidence (flag, plate, registration, name, language on the vehicle/signs) and fill it from what is really shown. When NO location is visible in any frame, still return a real, valid fallback location from across the world (a real city and country with a generic street address, e.g. "1 High Street, London, United Kingdom", "1 Sheikh Zayed Rd, Dubai, UAE", "Elm Street, Austin, Texas, USA") so every vehicle listing has a real place - never a made-up-sounding string.
- Never leave a field blank that you can reasonably identify from the media, but NEVER fabricate a number, price or detail that is not visible or reliably known.
- detected_name: a short plain label, e.g. "white Toyota Camry sedan".
- Write a professional title and a persuasive description for the listing.

Return ONE valid JSON object (no markdown, no extra text) with exactly this shape:
{
 "identification": {
   "identified": true, "brand": string|null, "model": string|null, "year": string|null,
   "year_estimated": boolean, "body_type": string|null, "vehicle_type": string|null,
   "color": string|null, "condition": string|null, "detected_name": string
 },
 "specs": {
   "make": string|null, "model": string|null, "model_year": string|null, "trim": string|null,
   "body_type": string|null, "vehicle_type": string|null, "mileage": number|null,
   "engine": string|null, "horsepower": string|null, "transmission": string|null,
   "fuel_type": string|null, "drive_type": string|null, "fuel_economy": string|null,
   "towing_capacity": string|null, "seating_capacity": number|null,
   "sleeping_capacity": number|null, "doors": number|null, "color": string|null,
   "condition": string|null, "vin": string|null, "warranty": string|null,
   "location": string|null, "country": string|null, "safety_features": string|null,
   "driver_assistance": string|null, "technology": string|null, "interior": string|null,
   "wheels_tires": string|null, "dimensions": string|null, "cargo_capacity": string|null,
   "ownership_history": string|null, "service_history": string|null,
   "accident_history": string|null, "previous_owners": number|null,
   "registration_status": string|null, "inspection_status": string|null,
   "features": string|null, "title": string|null, "description": string|null
 },
 "price": { "estimated_price": number|null, "suggested_discount_price": number|null }
}
If the media does not clearly show any vehicle, return { "identification": { "identified": false, "reason": "why you could not identify it", "detected_name": "what you see" } }.`);if(n&&n.identification&&n.identification.identified===!1)return{identification:n.identification,specs:n.specs||{},price:n.price||null,visionUsed:!0};const s=n&&n.identification||{},o=n&&n.specs||{},r=n&&n.price||null;return{identification:s,specs:{make:o.make||s.brand,model:o.model||s.model,model_year:o.model_year||s.year,body_type:o.body_type||s.body_type,vehicle_type:o.vehicle_type||s.vehicle_type,color:o.color||s.color,condition:o.condition||s.condition,brand:o.brand||s.brand,...o},price:r,visionUsed:!0}},describeError(e){const t=String(e&&e.message||"");return t==="NO_CAR_KEY"?{title:"Car Scanner key not set",hint:'Add your dedicated Car & Truck Scanner Gemini key in AI Settings → "Car & Truck Scanner", then try again. The car scanner does not use the product key.',code:t}:t==="CAR_QUOTA"?{title:"Car Scanner quota used up",hint:'Your Car & Truck Scanner Gemini key has run out of free quota or is rate-limited. It will stop until you paste in a fresh key in AI Settings → "Car & Truck Scanner". No fake values were generated.',code:t}:t==="CAR_BAD_KEY"?{title:"Car Scanner key not accepted",hint:'Google rejected your Car & Truck Scanner key. Check it in AI Settings → "Car & Truck Scanner" (valid 39-char AIzaSy… key) and save it again.',code:t}:t==="NO_MEDIA"?{title:"No readable media",hint:"The car photos/video could not be loaded. Upload clear photos or a video of the vehicle and try again.",code:t}:t==="CAR_NO_PARSE"?{title:"Scanner returned no details",hint:"Google answered but returned no usable vehicle details. Try clearer photos or a different video, then scan again.",code:t}:t==="CAR_HTTP_404"?{title:"Car Scanner model unavailable",hint:'Google no longer serves the selected Gemini model (2.5/2.0 are retired). In AI Settings → "Car & Truck Scanner", pick "gemini-flash-latest" (or gemini-3.7-flash), Save, then scan again.',code:t}:t==="CAR_HTTP_503"?{title:"Car Scanner is busy (Google overloaded)",hint:`Google's free Gemini model is currently under heavy demand ("high demand, try again later"). Your key and model are fine — this is temporary. Wait a minute and try again. The scanner now auto-retries several times automatically.`,code:t}:/^CAR_HTTP_/.test(t)?{title:"Car Scanner could not run",hint:`The Car & Truck Scanner service returned an error (${t}). Try again in a moment or add a fresh key in AI Settings.`,code:t}:{title:"Car Scanner failed",hint:String(e&&e.message?e.message:e),code:t}}};window.showAiStatusModal=async function(){const e=await D.getStatus(),t=e.filter(i=>i.hasKey);U(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white flex items-center gap-2"><i data-lucide="activity" class="w-5 h-5 text-emerald-400"></i> AI Provider Status</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="mb-4 p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300">
          ${t.length===0?"âš  No key configured. Go to AI Settings and add your Google Gemini API key.":"Google Gemini is configured and ready."}
        </div>
        <div class="space-y-2">
          ${e.map(i=>`
            <div class="flex items-center gap-3 p-2.5 glass-soft border ${i.hasKey?"border-blue-500/15":"border-gray-800"} rounded-xl opacity-${i.hasKey?"100":"40"}">
              <span class="w-2.5 h-2.5 rounded-full shrink-0 ${i.hasKey?"bg-emerald-400":"bg-gray-600"}"></span>
              <span class="text-xs font-bold text-white flex-1">${d(i.name)}</span>
              ${i.isActive?'<span class="text-[9px] font-black text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-full">ACTIVE</span>':""}
              ${i.hasKey?"":'<span class="text-[9px] text-gray-600">No key</span>'}
              ${i.hasKey?'<span class="text-[9px] text-emerald-400">Ready âœ“</span>':""}
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
    </div>`),window.lucide&&lucide.createIcons()};window.testAiCall=async function(){const e=document.getElementById("ai-test-input")?.value?.trim();if(!e)return;const t=document.getElementById("ai-test-output");t.classList.remove("hidden"),t.textContent="⏳ Asking Gemini…";try{const i=await D.prompt(e);t.textContent=`✓ [${i.provider} · ${i.model}]

${i.text}`}catch(i){t.textContent=`✖ ${i.message}`}};window.testScanProviders=async function(){const e=document.getElementById("provider-test-output"),t=document.getElementById("btn-test-providers");if(!e)return;e.classList.remove("hidden"),t.disabled=!0;const i=(n,s,o,r)=>`
    <div class="flex items-start gap-2 p-2 glass-soft border border-gray-800 rounded-lg">
      <span class="w-2 h-2 rounded-full shrink-0 mt-1 ${s}"></span>
      <div class="min-w-0">
        <p class="text-[11px] font-bold text-white">${n} ${d(o)}</p>
        <p class="text-[10px] ${s==="bg-emerald-400"?"text-emerald-300":s==="bg-red-500"?"text-red-400":"text-amber-300"} break-words">${d(r)}</p>
      </div>
    </div>`;e.innerHTML='<p class="text-[11px] text-gray-400">Testing providers…</p>';let a="";try{const n=await D.preflight(),s=n.gemini||{};a+=s.ok?i("✓","bg-emerald-400","Gemini (Product Scanner — primary)",`Working${s.model?" · "+s.model:""}`):i("✖","bg-red-500","Gemini (Product Scanner — primary)",s.error||n.error||"Not working");const o=n.groq||{};a+=o.ok?i("✓","bg-emerald-400","Groq (Product Scanner — backup)",`Working · ${o.model||"vision model found"}`):o.configured?i("✖","bg-red-500","Groq (Product Scanner — backup)",o.error||"Key saved but not usable"):i("—","bg-yellow-400","Groq (Product Scanner — backup)","Optional backup not configured (no key)")}catch(n){a+=i("✖","bg-red-500","Cloud providers (server test)",String(n&&n.message||n))}a+=i("✓","bg-purple-400","General AI Scanner (via edge function)","Uses Gemini primary + Groq backup through server — no local install needed."),e.innerHTML=a,t.disabled=!1,window.lucide&&lucide.createIcons()};function xt(e){if(!e)return null;let t=String(e).trim();const i=t.match(/```(?:json)?\s*([\s\S]*?)```/i);i&&(t=i[1].trim());const a=t.indexOf("{"),n=t.lastIndexOf("}");if(a===-1||n===-1||n<=a)return null;const s=t.slice(a,n+1);try{return JSON.parse(s)}catch{return null}}async function Hs(){const e=document.getElementById("content");try{const[{data:t},i]=await Promise.all([b.from("site_settings").select("*").limit(1).maybeSingle(),Gs()]),a=t||{},n=new Set(Array.isArray(a.live_promo_product_ids)?a.live_promo_product_ids:[]),s=i.length?`
        <div class="mt-4">
          <label class="lbl">Which products appear in the Live Promotions (Featured Product Alerts)?</label>
          <p class="text-[11px] text-gray-400 mb-2">Leave all unchecked to let the store pick real products automatically.</p>
          <input id="promo-picker-search" type="search" class="input-field mb-2" placeholder="Search products to chooseâ€¦" oninput="filterPromoPicker(this.value)">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1.5 max-h-72 overflow-y-auto pr-1" id="promo-picker-list">
            ${i.map(o=>{const r=o.property_id||o.id,l=n.has(r)?"checked":"";return`<label class="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3 py-2 cursor-pointer hover:border-blue-400/40 transition" data-promo-search="${d((o.title||o.name||"")+" "+(o.category||""))}">
                <input type="checkbox" name="live_promo_product_ids" value="${d(r)}" ${l} class="accent-blue-500 w-4 h-4">
                <span class="min-w-0"><span class="block text-xs font-bold text-white truncate">${d(o.title||o.name||r)}</span><span class="block text-[10px] text-gray-400">${d(o.category||o.listing_type||"")} Â· ${d(r)}</span></span>
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
          ${[{section:"Site Identity",fields:[{key:"site_name",label:"Site Name",type:"text",placeholder:"Weverse Online Shop"},{key:"site_tagline",label:"Tagline / Slogan",type:"text",placeholder:"Premium International Commerce"},{key:"site_description",label:"Site Description (SEO)",type:"textarea",placeholder:"Your trusted global shopâ€¦"}]},{section:"Contact Information",fields:[{key:"contact_email",label:"Contact Email",type:"email",placeholder:"support@example.com"},{key:"contact_phone",label:"Contact Phone",type:"tel",placeholder:"+1 234 567 8900"},{key:"contact_address",label:"Business Address",type:"textarea",placeholder:"123 Main St, City, Country"},{key:"whatsapp_number",label:"WhatsApp Number",type:"tel",placeholder:"+1 234 567 8900"}]},{section:"Hero Section",fields:[{key:"hero_headline",label:"Hero Headline",type:"text",placeholder:"Weverse Online Shop"},{key:"hero_subtext",label:"Hero Subtext",type:"textarea",placeholder:"Shop premium productsâ€¦"},{key:"hero_cta_text",label:"CTA Button Text",type:"text",placeholder:"Shop Now"}]},{section:"Social Media",fields:[{key:"facebook_url",label:"Facebook URL",type:"url",placeholder:"https://facebook.com/â€¦"},{key:"instagram_url",label:"Instagram URL",type:"url",placeholder:"https://instagram.com/â€¦"},{key:"twitter_url",label:"Twitter / X URL",type:"url",placeholder:"https://twitter.com/â€¦"},{key:"youtube_url",label:"YouTube URL",type:"url",placeholder:"https://youtube.com/â€¦"},{key:"tiktok_url",label:"TikTok URL",type:"url",placeholder:"https://tiktok.com/â€¦"}]},{section:"Mobile App Promotion Banner",fields:[{key:"app_banner_enabled",label:"Show the App Promotion banner at the bottom of every page",type:"checkbox"},{key:"app_banner_headline",label:"Banner Headline",type:"text",placeholder:"Discover More with the Weverse Online Shop App"},{key:"app_play_store_url",label:"Google Play Store URL (real app listing â€” leave empty while unpublished)",type:"url",placeholder:"https://play.google.com/store/apps/details?id=â€¦"}]},{section:"Live Product Promotions (Featured Product Alerts)",fields:[{key:"live_promo_enabled",label:"Show Live Product Promotions (small alerts at the bottom corner)",type:"checkbox"},{key:"live_promo_first_delay_seconds",label:"First alert after (seconds)",type:"number",placeholder:"12"},{key:"live_promo_interval_seconds",label:"Delay between alerts (seconds)",type:"number",placeholder:"60"}],extra:s}].map(o=>`
            <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
              <h3 class="text-sm font-black text-white mb-4">${o.section}</h3>
              <div class="form-grid form-grid-2">
                ${o.fields.map(r=>`
                  <div ${r.type==="textarea"||r.type==="checkbox"?'class="sm:col-span-2"':""}>
                    ${r.type==="checkbox"?`<label class="flex items-center gap-2.5 cursor-pointer"><input type="checkbox" name="${r.key}" class="accent-blue-500 w-4 h-4" ${a[r.key]?"checked":""}><span class="text-sm text-gray-300">${r.label}</span></label>`:r.type==="textarea"?`<label class="lbl">${r.label}</label><textarea class="input-field" name="${r.key}" placeholder="${d(r.placeholder)}" rows="2">${d(a[r.key]||"")}</textarea>`:`<label class="lbl">${r.label}</label><input type="${r.type}" class="input-field" name="${r.key}" value="${d(a[r.key]||"")}" placeholder="${d(r.placeholder||"")}">`}
                  </div>`).join("")}
              </div>
              ${o.extra||""}
            </div>`).join("")}
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Content Settings</button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}async function Gs(){const e=new Set,t=[],i=a=>{for(const n of a||[]){const s=n&&(n.property_id||n.id);s&&!e.has(s)&&(e.add(s),t.push(n))}};try{const{data:a}=await b.from("showroom_listings").select("property_id,title,name,category,listing_type,images,is_active").order("created_at",{ascending:!1}).limit(500);i(a)}catch{}return i(St()),i(se),i(qi),i(Hi),i(Gi),i(Vi),t.slice(0,250)}window.filterPromoPicker=function(e){const t=document.getElementById("promo-picker-list");if(!t)return;const i=(e||"").trim().toLowerCase();t.querySelectorAll("[data-promo-search]").forEach(a=>{a.style.display=!i||a.dataset.promoSearch.toLowerCase().includes(i)?"":"none"})};window.selectAllPromoPicks=function(){document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(e=>{e.checked=!0})};window.clearAllPromoPicks=function(){document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(e=>{e.checked=!1})};window.saveContent=async function(e){e.preventDefault();const t=new FormData(e.target),i=Object.fromEntries(t.entries()),a=Array.from(new Set(t.getAll("live_promo_product_ids").map(s=>String(s).trim()).filter(Boolean)));a.length?i.live_promo_product_ids=a:i.live_promo_product_ids=[];const{error:n}=await b.from("site_settings").upsert({id:1,...i});if(n){g(n.message,"error");return}g("Content settings saved!")};const vi=[{key:"hero_videos",custom:!0,title:"HERO VIDEO BANNER (ROTATING)",desc:"Upload your own promotional videos (MP4 & WebM) to the top homepage banner. Each saved slide becomes its own full-width hero with its title, subtitle and CTA over a soft dark overlay so the text always stays readable. Add one video, one poster, or many rotating slides. If no video is added here, the single promo banner and the built-in brand banner below are shown instead as fallbacks.",accent:"from-indigo-400 to-violet-500"},{key:"banner",title:"ANDROID APP BANNER",desc:"The mobile-app promotion banner shown at the bottom of every page. Editing these words never changes the banner design, phone image, logo or buttons.",accent:"from-cyan-400 to-blue-500",fields:[{key:"app_banner_title",label:"App Banner Title",type:"text"},{key:"app_banner_description",label:"App Banner Description",type:"textarea"},{key:"app_banner_button_text",label:"App Banner Button Text",type:"text"},{key:"app_banner_secondary_text",label:"App Banner Secondary Text",type:"text"}]},{key:"bottom",title:"BOTTOM / END-OF-PAGE SECTION",desc:"The final professional closing area of the website â€” thank-you message, customer support, footer links and copyright. The polished design stays; only these words change.",accent:"from-emerald-400 to-cyan-500",fields:[{key:"bottom_heading",label:"Bottom Section Heading",type:"text"},{key:"bottom_main_message",label:"Main Bottom Message",type:"textarea"},{key:"bottom_closing_message",label:"Closing Message",type:"text"},{key:"bottom_support_heading",label:"Customer Support Heading",type:"text"},{key:"bottom_support_description",label:"Customer Support Description",type:"textarea"},{key:"bottom_support_button_text",label:"Support Button Text",type:"text"},{key:"bottom_footer_text",label:"Footer Section Text",type:"text"},{key:"bottom_footer_closing",label:"Footer Closing Message",type:"text"},{key:"bottom_copyright",label:"Copyright Text (empty = automatic â€œÂ© year Brandâ€ line)",type:"text"}]},{key:"promo_banner",title:"HOME PAGE PROMO BANNER",desc:"The main rotating banner at the top of the homepage. Upload your own image or video and write your own words â€” the clean design stays. If empty, the built-in image banners rotate.",accent:"from-fuchsia-400 to-purple-500",fields:[{key:"promo_banner_enabled",label:"Show my promo banner",type:"checkbox"},{key:"promo_banner_image",label:"Banner Image",type:"media",kind:"image"},{key:"promo_banner_video",label:"Banner Video (plays if no image)",type:"media",kind:"video"},{key:"promo_banner_title",label:"Banner Title",type:"text"},{key:"promo_banner_subtitle",label:"Banner Subtitle",type:"text"},{key:"promo_banner_button_text",label:"Button Text",type:"text"},{key:"promo_banner_button_link",label:"Button Link",type:"text"}]},{key:"video_ad",title:"HOME PAGE VIDEO ADVERTISEMENT",desc:"A separate video card below the promo banner. Upload your own video (and optional poster image) and write your own words. It plays muted with play/pause and a progress bar.",accent:"from-rose-400 to-orange-500",fields:[{key:"video_ad_enabled",label:"Show the video advertisement",type:"checkbox"},{key:"video_ad_video_url",label:"Video File",type:"media",kind:"video"},{key:"video_ad_poster_url",label:"Poster Image (shown before play)",type:"media",kind:"image"},{key:"video_ad_title",label:"Video Title",type:"text"},{key:"video_ad_subtitle",label:"Video Subtitle",type:"text"},{key:"video_ad_button_text",label:"Button Text",type:"text"},{key:"video_ad_button_link",label:"Button Link",type:"text"}]}];function Oa(e,t){const i=e.kind==="image",a=t||"",n=i?"image":"video",s="text-fuchsia-300",o=!!a;return`<div id="slot-${e.key}">
      ${o?`<div class="relative group w-full h-28 rounded-xl overflow-hidden bg-gray-900 border border-fuchsia-500/15 flex items-center justify-center">
             ${i?`<img src="${d(a)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`:`<video src="${d(a)}" class="w-full h-full object-cover" muted playsinline preload="metadata"></video>`}
             <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
               <button type="button" onclick="triggerContentMediaUpload('${e.key}')" class="text-xs font-bold text-white bg-fuchsia-600 px-3 py-1.5 rounded-lg">Replace</button>
               <button type="button" onclick="clearContentMedia('${e.key}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
             </div>
           </div>`:`<button type="button" onclick="triggerContentMediaUpload('${e.key}')" class="w-full h-28 rounded-xl border-2 border-dashed border-fuchsia-500/25 hover:border-fuchsia-500/50 flex flex-col items-center justify-center gap-1.5 transition">
             <i data-lucide="${n}" class="w-6 h-6 ${s}"></i>
             <p class="text-[10px] text-gray-500">Upload ${i?"Image":"Video"}</p>
           </button>`}
      <input type="file" id="file-${e.key}" class="hidden" accept="${i?"image/*":"video/*"}" onchange="handleContentMediaUpload(event,'${e.key}')">
      <input type="hidden" name="${e.key}" id="val-${e.key}" value="${d(a)}">
      <div class="flex gap-2 mt-1.5">
        <input class="input-field text-xs flex-1" id="url-${e.key}" value="${d(a)}" placeholder="Or paste ${i?"image":"video"} URL" oninput="document.getElementById('val-${e.key}').value=this.value">
      </div>
    </div>`}window.triggerContentMediaUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearContentMedia=function(e){const t=document.getElementById("val-"+e),i=document.getElementById("url-"+e);t&&(t.value=""),i&&(i.value=""),g("Cleared. Save to apply.","info"),Ha()};window.handleContentMediaUpload=async function(e,t){const i=e.target.files?.[0];if(i){i.type.startsWith("video/"),g(`Uploading ${i.name}â€¦`,"info");try{const{data:{session:a}}=await b.auth.getSession();if(!a){g("Sign in to upload media","error");return}const n=(i.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),s=`content/${t}-${Date.now()}.${n}`,{error:o}=await b.storage.from("product-images").upload(s,i,{contentType:i.type,upsert:!1});if(o){g("Upload failed: "+o.message,"error");return}const{data:r}=b.storage.from("product-images").getPublicUrl(s),l=r.publicUrl,c=document.getElementById("val-"+t),u=document.getElementById("url-"+t);c&&(c.value=l),u&&(u.value=l);const m=document.getElementById("slot-"+t);if(m){const f=vi.flatMap(h=>h.fields||[]).find(h=>h.key===t);f&&(m.outerHTML=Oa(f,l))}g("âœ“ Uploaded â€” save to apply","success")}catch{g("Upload failed","error")}}};const Vs=["SHOP NOW","EXPLORE DEALS","VIEW PRODUCTS","DISCOVER MORE","SEE OFFERS","SHOP THE LOOK"];window._heroVideoDraft=[];function le(){return Array.isArray(window._heroVideoDraft)||(window._heroVideoDraft=[]),window._heroVideoDraft}function ct(){const e=document.getElementById("hs-json");e&&(e.value=JSON.stringify(le()))}function Be(){ct();const e=document.getElementById("hero-videos-manager");e&&(e.innerHTML=qa(le()),window.lucide&&lucide.createIcons())}function Ws(e,t){const i=String(e&&e.video||"").trim(),a=String(e&&e.poster||"").trim(),n=i&&Fi(i)||a&&Fi(a)?'<p class="mt-2 text-[11px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-2">âš  Temporary preview only â€” the upload FAILED, this will NOT be saved. Re-upload a smaller MP4/WebM.</p>':"";return`
    <div>
      <div class="w-full overflow-hidden rounded-xl bg-gray-950 border border-indigo-500/20 flex items-center justify-center">${i?`<video src="${d(i)}" ${a?`poster="${d(a)}"`:""} class="w-full h-40 object-cover" muted controls preload="metadata"></video>`:a?`<img src="${d(a)}" class="w-full h-40 object-cover" onerror="this.style.display='none'">`:'<div class="w-full h-40 flex items-center justify-center text-[11px] text-gray-500">No media yet â€” upload a video (MP4/WebM) or a poster below</div>'}</div>
      ${n}
      <div class="flex flex-wrap gap-1.5 mt-2 justify-end">
        <button type="button" onclick="heroVideoUpload(${t},'video')" class="px-3 py-1.5 rounded-lg ${i?"bg-white/10 text-gray-200 border border-white/10":"bg-indigo-600 text-white"} text-[10px] font-bold transition">${i?"Replace Video":"Upload Video"}</button>
        ${i?`<button type="button" onclick="heroVideoRemoveMedia(${t},'video')" class="px-3 py-1.5 rounded-lg bg-red-600/80 text-white text-[10px] font-bold">Remove Video</button>`:""}
        <button type="button" onclick="heroVideoUpload(${t},'poster')" class="px-3 py-1.5 rounded-lg bg-white/10 text-gray-200 text-[10px] font-bold border border-white/10 transition">${a?"Replace Poster":"Add Poster"}</button>
        ${a?`<button type="button" onclick="heroVideoRemoveMedia(${t},'poster')" class="px-3 py-1.5 rounded-lg bg-red-600/80 text-white text-[10px] font-bold">Remove Poster</button>`:""}
      </div>
    </div>`}function qa(e){return(e||[]).map((t,i)=>{const a=String(t&&t.buttonText||"SHOP NOW"),n=Vs.map(s=>`<button type="button" onclick="heroVideoPreset(${i},'${s}')" class="px-2.5 py-1 rounded-full text-[9px] font-black ${a===s?"bg-indigo-600 text-white":"bg-white/5 text-gray-400"} border ${a===s?"border-indigo-500":"border-white/10"} transition">${s}</button>`).join("");return`
    <div class="rounded-xl border border-indigo-500/25 bg-violet-500/8 p-4 space-y-3">
      <div class="flex items-center justify-between gap-2 flex-wrap">
        <p class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="video" class="w-4 h-4 text-indigo-400"></i> Slide ${i+1}</p>
        <div class="flex items-center gap-1.5">
          <button type="button" onclick="heroVideoToggle(${i})" class="text-[10px] font-bold px-2.5 py-1.5 rounded-lg ${t&&t.enabled===!1?"bg-gray-700 text-gray-400":"bg-emerald-600 text-white"} transition">${t&&t.enabled===!1?"Disabled":"Enabled"}</button>
          <button type="button" onclick="heroVideoMove(${i},-1)" class="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10" title="Move up"><i data-lucide="arrow-up" class="w-3.5 h-3.5 text-gray-300"></i></button>
          <button type="button" onclick="heroVideoMove(${i},1)" class="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10" title="Move down"><i data-lucide="arrow-down" class="w-3.5 h-3.5 text-gray-300"></i></button>
          <button type="button" onclick="heroVideoDelete(${i})" class="px-2 py-1 rounded-lg bg-red-600/80 hover:bg-red-600" title="Delete"><i data-lucide="trash-2" class="w-3.5 h-3.5 text-white"></i></button>
        </div>
      </div>
      ${Ws(t,i)}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label class="lbl">Title</label>
          <input type="text" value="${d(t.title||"")}" class="input-field w-full" placeholder="e.g. Season Sale is Live" oninput="heroVideoField(${i},'title',this.value)">
        </div>
        <div>
          <label class="lbl">Subtitle</label>
          <input type="text" value="${d(t.subtitle||"")}" class="input-field w-full" placeholder="e.g. Up to 50% off top brands" oninput="heroVideoField(${i},'subtitle',this.value)">
        </div>
      </div>
      <div>
        <label class="lbl">Button</label>
        <div class="flex flex-wrap gap-1.5">${n}</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          <input type="text" value="${d(a)}" class="input-field w-full" placeholder="SHOP NOW" oninput="heroVideoField(${i},'buttonText',this.value)">
          <input type="text" value="${d(t.buttonLink||"/#showroom-directory")}" class="input-field w-full" placeholder="/#showroom-directory" oninput="heroVideoField(${i},'buttonLink',this.value)">
        </div>
      </div>
    </div>`}).join("")}window.heroVideoUpload=function(e,t){const i=document.createElement("input");i.type="file",i.accept=t==="video"?"video/mp4,video/webm,.mp4,.webm":"image/*",i.onchange=()=>{const a=i.files&&i.files[0];a&&Ks(e,t,a)},i.click()};window.heroVideoField=function(e,t,i){const a=le();a[e]&&(a[e][t]=i,ct())};window.heroVideoPreset=function(e,t){const i=le();i[e]&&(i[e].buttonText=t,Be())};window.heroVideoToggle=function(e){const t=le();t[e]&&(t[e].enabled=t[e].enabled===!1,Be())};window.heroVideoMove=function(e,t){const i=le(),a=e+t;a<0||a>=i.length||([i[e],i[a]]=[i[a],i[e]],Be())};window.heroVideoDelete=function(e){const t=le();e<0||e>=t.length||confirm("Delete this hero video slide?")&&(t.splice(e,1),Be())};window.heroVideoRemoveMedia=function(e,t){const i=le();i[e]&&(t==="video"?i[e].video="":t==="poster"&&(i[e].poster=""),Be())};window.addHeroVideoSlide=function(){le().push({id:"hv"+Date.now()+Math.floor(Math.random()*999),enabled:!0,video:"",poster:"",title:"",subtitle:"",buttonText:"SHOP NOW",buttonLink:"/#showroom-directory"}),Be(),g("New slide added â€” upload a video and press Save to show it.","info")};async function zs(e,t){try{const{data:{session:i}}=await b.auth.getSession();if(!i)return{url:URL.createObjectURL(e),persisted:!1,error:"You are signed out â€” sign in again, then re-upload."};const a=(e.name.split(".").pop()||(t==="video"?"mp4":"jpg")).toLowerCase().replace(/[^a-z0-9]/g,""),n=`hero/${t}/${Date.now()}-${Math.random().toString(36).slice(2)}.${a}`,{error:s}=await b.storage.from("product-images").upload(n,e,{contentType:e.type,cacheControl:"3600",upsert:!0});if(s)return{url:URL.createObjectURL(e),persisted:!1,error:s.message};const{data:o}=b.storage.from("product-images").getPublicUrl(n),r=o&&o.publicUrl;return r?{url:r,persisted:!0,error:null}:{url:URL.createObjectURL(e),persisted:!1,error:"Storage did not return a public URL."}}catch(i){return{url:URL.createObjectURL(e),persisted:!1,error:String(i&&i.message||i)}}}function Fi(e){return/^blob:/i.test(String(e||""))}async function Ks(e,t,i){const a=le();if(!i||!a[e])return;if(t==="video"){if(!/video\/(mp4|webm)|\.(mp4|webm)$/i.test(i.type+" "+i.name)){g("Please choose an MP4 or WebM video file.","error");return}}else if(!i.type.startsWith("image/")){g("Please choose an image for the poster.","error");return}g("â³ Uploading "+(t==="video"?"video":"poster")+"â€¦","info");const n=await zs(i,t);t==="video"?a[e].video=n.url:a[e].poster=n.url,Be(),n.persisted?g("âœ“ "+(t==="video"?"Video":"Poster")+" uploaded â€” press Save & Publish Hero Banner to go live.","success"):g("âš  UPLOAD FAILED: "+(n.error||"unknown reason")+" â€” this preview is TEMPORARY and will NOT be saved. Try a smaller MP4/WebM (keep videos under ~50 MB), then re-upload.","error")}function Ys(e){const t=Array.isArray(e)?e.map(a=>({...a})):[];return window._heroVideoDraft=t,ct(),`
    <div class="space-y-3">
      <div id="hero-videos-manager" class="space-y-3">${t.length?"":`
    <div class="rounded-xl border-2 border-dashed border-indigo-500/30 bg-white/5 p-6 text-center">
      <i data-lucide="video" class="w-8 h-8 text-indigo-400 mx-auto"></i>
      <p class="text-xs text-gray-400 mt-2 font-bold">No hero videos yet</p>
      <p class="text-[11px] text-gray-500 mt-1">Add your first promotional video slide to turn the homepage banner into an auto-playing video hero. Until then, the built-in brand banner and any single promo banner below are used.</p>
    </div>`}${qa(t)}</div>
      <button type="button" onclick="heroVideoSavePublish(this)" class="btn-press w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-black rounded-xl transition flex items-center justify-center gap-2">
        <i data-lucide="rocket" class="w-4 h-4"></i> Save &amp; Publish Hero Banner
      </button>
      <p class="text-[10px] text-gray-500 text-center">One video is enough â€” no minimum. Your banner goes live as soon as you press this button.</p>
      <button type="button" onclick="addHeroVideoSlide()" class="btn-press w-full px-4 py-3 border-2 border-dashed border-indigo-500/40 text-indigo-300 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2">
        <i data-lucide="plus" class="w-4 h-4"></i> Add Another Hero Video Slide
      </button>
    </div>`}window.heroVideoSavePublish=async function(e){const t=l=>/^blob:/i.test(String(l||"")),i=le().filter(l=>l&&(l.video||l.poster||l.title||l.subtitle));if(!i.length){g("Add at least one video slide before publishing.","error");return}i.forEach(l=>{l.poster&&t(l.poster)&&(l.poster="")});const a=i.filter(l=>l.video&&t(l.video)),n=i.filter(l=>l.video&&!t(l.video));if(a.length&&!n.length){g(`Upload FAILED for your video${a.length>1?"s":""} â€” temporary previews cannot go live. Re-upload a smaller MP4/WebM (under ~50 MB), then press this button again.`,"error");return}if(a.length&&!confirm(`${a.length} slide${a.length>1?"s":""} had a FAILED upload and will be LEFT OUT. Publish the remaining ${n.length} slide${n.length===1?"":"s"} now?`))return;const s=n,o=s.filter(l=>l.video);if(!s.length){g("Please upload a video in at least one slide first.","error");return}const r=e?e.innerHTML:"";e&&(e.disabled=!0,e.innerHTML="â³ Publishingâ€¦");try{ct();const{data:l}=await b.from("site_settings").select("id").limit(1).maybeSingle();let c;if(l?.id?{error:c}=await b.from("site_settings").update({hero_video_slides:s}).eq("id",l.id):{error:c}=await b.from("site_settings").insert({id:crypto.randomUUID(),hero_video_slides:s}),c)throw new Error(c.message);Wi(),g("âœ“ Hero video banner published! "+o.length+(o.length===1?" video is":" videos are")+" now live on your homepage.","success")}catch(l){g(l.message||"Could not publish the hero banner. Please try again.","error")}finally{e&&(e.disabled=!1,e.innerHTML=r,window.lucide&&lucide.createIcons())}};async function Ha(){const e=document.getElementById("content");try{const{data:t}=await b.from("site_settings").select("*").limit(1).maybeSingle(),i={...rn,...t||{}};e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div>
          <h2 class="text-xl font-black text-white">Content Settings</h2>
          <p class="text-xs text-gray-400 mt-1">Edit the wording of the two shared sections below. Save once and every page updates automatically â€” no code needed. Your products, prices, reviews, orders and design are never touched.</p>
        </div>
        <form id="content-settings-form" onsubmit="saveContentSettings(event)" class="space-y-5">
          ${vi.map(a=>`
            <div class="glass-soft border border-white/10 rounded-2xl p-5">
              <div class="flex items-center gap-2.5 mb-1">
                <span class="w-2 h-2 rounded-full bg-gradient-to-r ${a.accent}"></span>
                <h3 class="text-sm font-black text-white tracking-wide">${a.title}</h3>
              </div>
              <p class="text-[11px] text-gray-400 mb-4">${a.desc}</p>
              ${a.key==="hero_videos"?Ys(i.hero_video_slides||[]):`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${a.fields.map(n=>`
                  <div class="${n.type==="textarea"||n.type==="media"?"sm:col-span-2":""}">
                    ${n.type==="checkbox"?`<label class="flex items-center gap-2.5 cursor-pointer select-none py-2">
                           <input id="cs-${n.key}" type="checkbox" name="${n.key}" ${i[n.key]?"checked":""} class="w-4 h-4 accent-blue-500 rounded">
                           <span class="text-sm font-bold text-gray-200">${n.label}</span>
                         </label>`:`<label class="lbl" for="cs-${n.key}">${n.label}</label>`}
                    ${n.type==="textarea"?`<textarea id="cs-${n.key}" name="${n.key}" rows="3" class="input-field w-full" placeholder="Enter the current wordingâ€¦">${d(i[n.key]||"")}</textarea>`:n.type==="media"?Oa(n,i[n.key]||""):n.type==="checkbox"?"":`<input id="cs-${n.key}" type="text" name="${n.key}" value="${d(i[n.key]||"")}" class="input-field w-full" placeholder="Enter the current wordingâ€¦">`}
                    ${n.type==="text"||n.type==="textarea"?`<p class="text-[10px] text-gray-500 mt-1">Current: ${d((i[n.key]||"").slice(0,80))}${(i[n.key]||"").length>80?"â€¦":""}</p>`:""}
                  </div>`).join("")}
              </div>`}
            </div>`).join("")}
          <input type="hidden" id="hs-json" name="hero_video_slides" value="">
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Content</button>
        </form>
      </div>`,ct(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.saveContentSettings=async function(e){e.preventDefault();const t=new FormData(e.target),i={};for(const[n,s]of t.entries())i[n]=s;for(const n of vi)if(n.fields)for(const s of n.fields)s.type==="checkbox"&&!(s.key in i)?i[s.key]=!1:s.type==="checkbox"&&(i[s.key]=!0);let a=[];try{const n=t.get("hero_video_slides");if(String(n||"").trim()){const s=JSON.parse(n);Array.isArray(s)&&(a=s)}}catch{a=[]}i.hero_video_slides=a;try{const{data:n}=await b.from("site_settings").select("id").limit(1).maybeSingle();let s;if(n?.id?{error:s}=await b.from("site_settings").update(i).eq("id",n.id):{error:s}=await b.from("site_settings").insert({id:crypto.randomUUID(),...i}),s)throw new Error(s.message);Wi(),g("Content updated â€” the banners now use your new words and uploads.","success")}catch(n){g(n.message||"Could not save content. Please try again.","error")}};async function Js(){const e=document.getElementById("content");try{const[t,i,a]=await Promise.all([b.from("payment_receipts").select("amount,currency,status,created_at").order("created_at",{ascending:!1}).limit(500),b.from("showroom_listings").select("id,listing_type,category,is_active",{count:"exact"}),b.from("profiles").select("user_id,created_at",{count:"exact"})]),n=t.data||[],s=n.filter(c=>["approved","payment_approved","delivered"].includes(c.status)).reduce((c,u)=>c+(parseFloat(u.amount)||0),0),o=n.length>0?(n.filter(c=>c.status!=="cancelled").length/n.length*100).toFixed(1):0,r={};(i.data||[]).forEach(c=>{r[c.category]=(r[c.category]||0)+1});const l=Object.entries(r).sort((c,u)=>u[1]-c[1]).slice(0,8);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Analytics</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          ${z("Total Revenue",`$${s.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald")}
          ${z("Total Orders",n.length,"shopping-bag","blue")}
          ${z("Customers",a.count||0,"users","violet")}
          ${z("Conversion Rate",o+"%","trending-up","amber")}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="bar-chart-3" class="w-4 h-4 text-blue-400"></i> Revenue (Last 6 Months)</h3>
            <canvas id="analytics-chart" height="220"></canvas>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="pie-chart" class="w-4 h-4 text-violet-400"></i> Top Categories by Listings</h3>
            ${l.length===0?'<p class="text-xs text-gray-500 text-center py-8">No data</p>':l.map(([c,u])=>`
              <div class="flex items-center gap-3 py-1.5">
                <span class="text-xs text-gray-300 flex-1 truncate">${d(c)}</span>
                <div class="w-24 h-2 bg-blue-500/10 rounded-full overflow-hidden"><div class="h-full bg-blue-500 rounded-full" style="width:${Math.round(u/l[0][1]*100)}%"></div></div>
                <span class="text-xs font-bold text-white w-6 text-right">${u}</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),ya(n)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}async function Qs(){const e=document.getElementById("content"),{data:t}=await b.from("site_settings").select("*").limit(1).maybeSingle(),i=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">SEO Manager</h2>
      <form id="seo-form" onsubmit="saveSeo(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Homepage SEO</h3>
          <div><label class="lbl">Meta Title</label><input class="input-field" name="meta_title" value="${d(i.meta_title||"")}" placeholder="Weverse Online Shop | Premium International Commerce"></div>
          <div><label class="lbl">Meta Description</label><textarea class="input-field" name="meta_description" rows="2" placeholder="Your trusted global shopâ€¦">${d(i.meta_description||"")}</textarea></div>
          <div><label class="lbl">Meta Keywords (comma separated)</label><input class="input-field" name="meta_keywords" value="${d(i.meta_keywords||"")}" placeholder="global marketplace, online shopping, â€¦"></div>
          <div><label class="lbl">Canonical URL</label><input class="input-field" name="canonical_url" value="${d(i.canonical_url||"")}" placeholder="https://yoursite.com"></div>
          <div><label class="lbl">OG Image URL (Social share image)</label><input class="input-field" name="og_image" value="${d(i.og_image||"")}" placeholder="https://â€¦/og-image.jpg"></div>
          <div><label class="lbl">Google Analytics ID</label><input class="input-field" name="ga_id" value="${d(i.ga_id||"")}" placeholder="G-XXXXXXXXXX"></div>
          <div><label class="lbl">Google Search Console Verification</label><input class="input-field" name="gsc_verify" value="${d(i.gsc_verify||"")}" placeholder="Verification meta tag content"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save SEO Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSeo=async function(e){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());await b.from("site_settings").upsert({id:1,...t}),g("SEO settings saved!")};async function Xs(){const e=document.getElementById("content"),{data:t}=await b.from("site_settings").select("*").limit(1).maybeSingle(),i=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">Email Settings</h2>
      <div class="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl text-xs text-blue-300">Email is handled by Supabase Auth's built-in SMTP. Configure SMTP in your Supabase project â†’ Auth â†’ SMTP Settings.</div>
      <form id="email-form" onsubmit="saveEmailSettings(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Email Notifications</h3>
          ${[{key:"email_order_placed",label:"Order Confirmation Email",desc:"Send confirmation when order is placed"},{key:"email_order_shipped",label:"Shipping Notification",desc:"Notify customer when order is shipped"},{key:"email_order_delivered",label:"Delivery Confirmation",desc:"Confirm when order is delivered"},{key:"email_review_request",label:"Review Request",desc:"Ask for review after delivery"}].map(a=>`
            <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
              <div><p class="text-xs font-bold text-white">${a.label}</p><p class="text-[11px] text-gray-500">${a.desc}</p></div>
              <label class="toggle-switch"><input type="checkbox" name="${a.key}" ${i[a.key]!==!1?"checked":""}><span class="toggle-slider"></span></label>
            </div>`).join("")}
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Sender Information</h3>
          <div><label class="lbl">Sender Name</label><input class="input-field" name="email_from_name" value="${d(i.email_from_name||"")}" placeholder="Weverse Online Shop"></div>
          <div><label class="lbl">Reply-To Email</label><input type="email" class="input-field" name="email_reply_to" value="${d(i.email_reply_to||"")}" placeholder="support@example.com"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Email Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveEmailSettings=async function(e){e.preventDefault();const t=new FormData(e.target),i={};for(const[a,n]of t.entries())i[a]=n;["email_order_placed","email_order_shipped","email_order_delivered","email_review_request"].forEach(a=>{a in i?i[a]=!0:i[a]=!1}),await b.from("site_settings").upsert({id:1,...i}),g("Email settings saved!")};async function Dt(){const e=document.getElementById("content");e&&(e.innerHTML=He());try{const[t,i,a]=await Promise.all([b.from("admin_security_logs").select("*").order("created_at",{ascending:!1}).limit(50),b.from("admin_2fa").select("enabled,backup_codes,created_at").eq("user_id",T.user?.id).maybeSingle(),b.auth.mfa.listFactors()]),n=t.data||[],s=i.data||{},o=(a.data?.totp||[])[0],r=!!o&&o.status==="verified",l=(s.backup_codes||[]).filter(c=>!c.used).length;e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Security</h2>

        <!-- 2FA STATUS BANNER -->
        <div class="p-4 rounded-xl border flex items-center gap-4 ${r?"bg-emerald-500/5 border-emerald-500/20":"bg-amber-500/5 border-amber-500/20"}">
          <div class="w-10 h-10 ${r?"bg-emerald-500/10":"bg-amber-500/10"} rounded-xl flex items-center justify-center shrink-0">
            <i data-lucide="${r?"shield-check":"shield-alert"}" class="w-5 h-5 ${r?"text-emerald-400":"text-amber-400"}"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm font-black ${r?"text-emerald-300":"text-amber-300"}">Two-Factor Authentication is ${r?"ENABLED âœ“":"NOT ENABLED"}</p>
            <p class="text-xs text-gray-400 mt-0.5">${r?`Backup codes available: ${l} Â· Enrolled: ${oe(s.created_at)}`:"Enable 2FA to protect your admin account with an authenticator app."}</p>
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
                <p class="text-[11px] text-gray-500">${d(navigator.userAgent.slice(0,60))}â€¦</p>
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
                ${n.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No security events yet</td></tr>':n.map(c=>{const u=["login_success","login_2fa_success"].includes(c.event_type),m=["login_failed","login_denied","login_backup_code_used"].includes(c.event_type),f=u?"text-emerald-400":m?"text-red-400":"text-gray-300",h={login_success:"Login âœ“",login_failed:"Failed Login âœ—",login_denied:"Access Denied âœ—",login_2fa_success:"2FA Verified âœ“",login_backup_code_used:"Backup Code Used",logout:"Logged Out",logout_all_devices:"Logout All Devices"}[c.event_type]||c.event_type;return`<tr>
                      <td><span class="text-xs font-bold ${f}">${d(h)}</span></td>
                      <td><span class="text-xs font-mono text-gray-300">${d(c.ip_address||"â€”")}</span></td>
                      <td class="hidden sm:table-cell"><span class="text-xs text-gray-500 max-w-[160px] block truncate">${d((c.user_agent||"â€”").slice(0,50))}</span></td>
                      <td><span class="text-xs text-gray-500">${Se(c.created_at)}</span></td>
                    </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,document.getElementById("new-pw")?.addEventListener("input",c=>{const u=c.target.value,m=[{label:"8+ characters",ok:u.length>=8},{label:"Uppercase letter",ok:/[A-Z]/.test(u)},{label:"Number",ok:/[0-9]/.test(u)},{label:"Special character",ok:/[^a-zA-Z0-9]/.test(u)}];document.getElementById("pw-strength").innerHTML=m.map(f=>`<div class="flex items-center gap-1.5 text-[10px] ${f.ok?"text-emerald-400":"text-gray-600"}">
          <i data-lucide="${f.ok?"check-circle":"circle"}" class="w-3 h-3"></i>${f.label}</div>`).join(""),window.lucide&&lucide.createIcons()}),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.changePassword=async function(e){e.preventDefault();const t=document.getElementById("current-pw").value,i=document.getElementById("new-pw").value,a=document.getElementById("confirm-pw").value;if(i!==a){g("Passwords do not match","error");return}if(i.length<8){g("Password must be at least 8 characters","error");return}const{error:n}=await b.auth.signInWithPassword({email:T.user.email,password:t});if(n){g("Current password is incorrect","error");return}const{error:s}=await b.auth.updateUser({password:i});if(s){g(s.message,"error");return}await ce(T.user.id,"password_changed"),g("Password updated successfully!"),e.target.reset(),document.getElementById("pw-strength").innerHTML=""};window.setup2FAFlow=async function(){U(`
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
    </div>`),window.lucide&&lucide.createIcons();try{const{data:e,error:t}=await b.auth.mfa.enroll({factorType:"totp",friendlyName:"Weverse Admin"});if(t)throw t;const i=e.totp.qr_code,a=e.totp.secret,n=e.id;document.getElementById("2fa-setup-content").innerHTML=`
      <div class="space-y-5">
        <div class="p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300">
          <strong>Step 1:</strong> Open your authenticator app (Google Authenticator, Authy, or similar).<br>
          <strong>Step 2:</strong> Scan the QR code below or enter the secret manually.<br>
          <strong>Step 3:</strong> Enter the 6-digit code shown in your app.
        </div>
        <div class="flex flex-col items-center gap-4">
          <div class="bg-white p-3 rounded-xl">
            <img src="${d(i)}" alt="QR Code" class="w-44 h-44" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-500 w-44 text-center&quot;>QR code unavailable. Use the secret below.</p>'">
          </div>
          <div class="w-full">
            <label class="lbl">Or enter this secret manually</label>
            <div class="flex gap-2">
              <code class="flex-1 input-field font-mono text-xs text-emerald-300 select-all">${d(a)}</code>
              <button onclick="navigator.clipboard.writeText('${d(a)}').then(()=>showToast('Copied!'))" class="btn-press p-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl transition text-blue-400"><i data-lucide="copy" class="w-4 h-4"></i></button>
            </div>
          </div>
        </div>
        <div>
          <label class="lbl">Enter 6-digit code from app *</label>
          <input type="text" id="setup-totp-code" inputmode="numeric" maxlength="6" class="input-field text-center text-xl font-black tracking-[0.5em] py-3" placeholder="000000" autocomplete="one-time-code">
        </div>
        <div id="setup-2fa-error" class="hidden p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs"></div>
        <button onclick="confirm2FAEnrollment('${d(n)}')" class="btn-press w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2">
          <i data-lucide="shield-check" class="w-4 h-4"></i> Verify & Enable 2FA
        </button>
      </div>`,window.lucide&&lucide.createIcons(),setTimeout(()=>document.getElementById("setup-totp-code")?.focus(),100),document.getElementById("setup-totp-code")?.addEventListener("input",s=>{s.target.value=s.target.value.replace(/\D/g,"").slice(0,6)})}catch(e){document.getElementById("2fa-setup-content").innerHTML=`<div class="text-red-400 text-sm text-center py-4">${d(e.message)}</div>`}};window.confirm2FAEnrollment=async function(e){const t=document.getElementById("setup-totp-code")?.value?.trim(),i=document.getElementById("setup-2fa-error");if(!t||t.length!==6){i&&(i.textContent="Enter the 6-digit code.",i.classList.remove("hidden"));return}try{const{data:a,error:n}=await b.auth.mfa.challenge({factorId:e});if(n)throw n;const{error:s}=await b.auth.mfa.verify({factorId:e,challengeId:a.id,code:t});if(s)throw s;const o=Ga(10);await b.from("admin_2fa").upsert({user_id:T.user.id,enabled:!0,backup_codes:o}),await ce(T.user.id,"2fa_enrolled"),re(),Va(o.map(r=>r.code)),Dt()}catch(a){const n=document.getElementById("setup-2fa-error");n&&(n.textContent=a.message?.includes("Invalid")?"Wrong code. Check your app and try again.":a.message,n.classList.remove("hidden")),document.getElementById("setup-totp-code").value="",document.getElementById("setup-totp-code").focus()}};function Ga(e){const t=[];for(let i=0;i<e;i++){const a=Array.from({length:16},()=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random()*32)]).join("");t.push({code:`${a.slice(0,4)}-${a.slice(4,8)}-${a.slice(8,12)}-${a.slice(12,16)}`,used:!1})}return t}function Va(e){U(`
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
          ${e.map(t=>`<code class="font-mono text-xs px-3 py-2 bg-blue-500/5 text-blue-300 border border-blue-500/15 rounded-lg text-center select-all">${d(t)}</code>`).join("")}
        </div>
        <div class="flex gap-3">
          <button onclick="copyBackupCodes([${e.map(t=>`'${t}'`).join(",")}])" class="btn-press flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-xl text-xs transition"><i data-lucide="copy" class="w-4 h-4"></i> Copy All</button>
          <button onclick="downloadBackupCodes([${e.map(t=>`'${t}'`).join(",")}])" class="btn-press flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded-xl text-xs transition"><i data-lucide="download" class="w-4 h-4"></i> Download</button>
          <button onclick="closeModal()" class="btn-press px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-xl text-xs transition">Done</button>
        </div>
      </div>
    </div>`),window.lucide&&lucide.createIcons()}window.copyBackupCodes=function(e){navigator.clipboard.writeText(e.join(`
`)).then(()=>g("Backup codes copied!"))};window.downloadBackupCodes=function(e){const t=new Blob([`Weverse Admin Backup Codes
Generated: ${new Date().toISOString()}

${e.join(`
`)}

Each code works once. Store securely.`],{type:"text/plain"}),i=document.createElement("a");i.href=URL.createObjectURL(t),i.download="kco-admin-backup-codes.txt",i.click()};window.regenerateBackupCodes=async function(){if(!confirm("This will invalidate ALL existing backup codes. Continue?"))return;const e=Ga(10);await b.from("admin_2fa").update({backup_codes:e}).eq("user_id",T.user.id),g("New backup codes generated"),Va(e.map(t=>t.code)),Dt()};window.disable2FA=async function(){if(confirm("Disable two-factor authentication? Your account will be less secure."))try{const{data:e}=await b.auth.mfa.listFactors(),t=(e?.totp||[])[0];if(t){const{error:i}=await b.auth.mfa.unenroll({factorId:t.id});if(i)throw i}await b.from("admin_2fa").update({enabled:!1}).eq("user_id",T.user.id),await ce(T.user.id,"2fa_disabled"),g("2FA has been disabled"),Dt()}catch(e){g(e.message,"error")}};async function Zs(){const e=document.getElementById("content");try{const{data:t}=await b.from("admin_activity_logs").select("*").order("created_at",{ascending:!1}).limit(100);e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Activity Logs</h2>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Action</th><th>Entity</th><th class="hidden sm:table-cell">Admin</th><th>Date</th></tr></thead>
              <tbody>
                ${(t||[]).length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No activity yet</td></tr>':(t||[]).map(i=>`<tr>
                    <td><span class="text-xs font-bold text-white">${d(i.action)}</span></td>
                    <td><span class="text-xs text-gray-400">${d(i.entity_type||"â€”")} <span class="text-gray-600">${d(i.entity_id?.slice(0,8)||"")}</span></span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-blue-400">${d(i.user_email||i.user_id?.slice(0,8)||"â€”")}</span></td>
                    <td><span class="text-xs text-gray-500">${Se(i.created_at)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}async function eo(){const e=document.getElementById("content");try{const{data:t}=await b.from("deployment_history").select("*").order("created_at",{ascending:!1}).limit(20);e.innerHTML=`
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
            ${(t||[]).length===0?'<p class="text-xs text-gray-500 text-center py-8">No deployment history</p>':(t||[]).map(i=>`<div class="flex items-center gap-3 px-4 py-3">
                <div class="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="rocket" class="w-4 h-4 text-emerald-400"></i></div>
                <div class="flex-1"><p class="text-xs font-bold text-white">${d(i.version||i.id?.slice(0,8))}</p><p class="text-[10px] text-gray-500">${Se(i.created_at)}</p></div>
                ${Q(i.status||"completed")}
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.exportProducts=async function(){const{data:e}=await b.from("showroom_listings").select("*"),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),i=document.createElement("a");i.href=URL.createObjectURL(t),i.download=`kco-products-${new Date().toISOString().slice(0,10)}.json`,i.click(),g("Products exported!")};window.exportOrders=async function(){const{data:e}=await b.from("payment_receipts").select("*").order("created_at",{ascending:!1});if(!e||!e.length){g("No orders to export","info");return}const t=Object.keys(e[0]).join(","),i=e.map(s=>Object.values(s).map(o=>`"${String(o||"").replace(/"/g,'""')}"`).join(",")).join(`
`),a=new Blob([t+`
`+i],{type:"text/csv"}),n=document.createElement("a");n.href=URL.createObjectURL(a),n.download=`kco-orders-${new Date().toISOString().slice(0,10)}.csv`,n.click(),g("Orders exported!")};async function to(){const e=document.getElementById("content"),{data:t}=await b.from("site_settings").select("*").limit(1).maybeSingle(),i=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">Settings</h2>
      <form id="settings-form" onsubmit="saveSettings(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">General Settings</h3>
          <div class="form-grid form-grid-2">
            <div><label class="lbl">Default Currency</label><select class="input-field" name="default_currency">
              ${["USD","EUR","GBP","NGN","KES","ZAR","GHS"].map(a=>`<option value="${a}" ${(i.default_currency||"USD")===a?"selected":""}>${a}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Default Language</label><select class="input-field" name="default_language">
              ${["en","fr","es","de","pt","ar","sw"].map(a=>`<option value="${a}" ${(i.default_language||"en")===a?"selected":""}>${a}</option>`).join("")}
            </select></div>
            <div><label class="lbl">Timezone</label><input class="input-field" name="timezone" value="${d(i.timezone||"UTC")}" placeholder="UTC"></div>
            <div><label class="lbl">Low Stock Threshold</label><input type="number" class="input-field" name="low_stock_threshold" value="${d(i.low_stock_threshold||10)}" min="1"></div>
          </div>
        </div>
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-3">
          <h3 class="text-sm font-black text-white">Feature Toggles</h3>
          ${[{key:"maintenance_mode",label:"Maintenance Mode",desc:"Show a maintenance page to visitors"},{key:"reviews_enabled",label:"Reviews Enabled",desc:"Allow customers to leave reviews",default:!0},{key:"wishlist_enabled",label:"Wishlist Enabled",desc:"Allow customers to save products",default:!0},{key:"guest_checkout",label:"Guest Checkout",desc:"Allow checkout without an account",default:!0}].map(a=>`
            <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
              <div><p class="text-xs font-bold text-white">${a.label}</p><p class="text-[11px] text-gray-500">${a.desc}</p></div>
              <label class="toggle-switch"><input type="checkbox" name="${a.key}" ${i[a.key]!==!1&&(i[a.key]||a.default)?"checked":""}><span class="toggle-slider"></span></label>
            </div>`).join("")}
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSettings=async function(e){e.preventDefault();const t=new FormData(e.target),i={};for(const[a,n]of t.entries())i[a]=n;["maintenance_mode","reviews_enabled","wishlist_enabled","guest_checkout"].forEach(a=>{i[a]=a in i}),await b.from("site_settings").upsert({id:1,...i}),g("Settings saved!")};async function Ut(){const e=document.getElementById("content");e&&(e.innerHTML=He());try{const{data:t}=await b.from("site_settings").select("*").limit(1).maybeSingle(),i=t||{},a=i.homepage_banner_image||"",n=i.homepage_banner_alt||"Homepage header banner",s=a?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.";e.innerHTML=`
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
                ${a?`<img id="homepage-banner-preview-img" src="${d(a)}" alt="${d(n)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-off" class="mx-auto w-8 h-8 text-gray-500"></i><p class="mt-2 text-xs font-semibold text-gray-500">No banner selected</p></div></div>'}
              </div>
            </div>
            <div class="px-4 py-3 border-t border-white/5 bg-[#0b1020] flex items-center gap-2 text-[11px] text-gray-400">
              <i data-lucide="crop" class="w-3.5 h-3.5 text-blue-400"></i>
              <span>Crop / resize is previewed in a fixed banner frame. Wide images work best.</span>
            </div>
          </div>
          <p id="homepage-banner-preview-note" class="text-[10px] text-gray-500">${d(s)}</p>
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
                      ${a?`<img id="homepage-banner-image" src="${d(a)}" alt="${d(n)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-plus" class="mx-auto w-8 h-8 text-blue-400"></i><p class="mt-2 text-xs font-semibold text-gray-400">Upload a homepage banner</p></div></div>'}
                    </div>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <button type="button" onclick="triggerImgUpload('homepage_banner_image')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">${a?"Replace Image":"Upload Image"}</button>
                      <button type="button" onclick="clearHomepageBannerImg()" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove Image</button>
                      <button type="button" onclick="restoreHomepageBannerDefault()" class="text-xs font-bold text-white bg-slate-700 px-3 py-1.5 rounded-lg">Restore Default</button>
                    </div>
                  </div>
                </div>
                <input type="file" id="file-homepage_banner_image" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'homepage_banner_image')">
                <input type="hidden" name="homepage_banner_image" id="val-homepage_banner_image" value="${d(a)}">
                <input type="text" id="url-homepage_banner_image" value="${d(a)}" placeholder="Or paste image URL" oninput="document.getElementById('val-homepage_banner_image').value=this.value;updateHomepageBannerPreview()" class="input-field text-xs">
                <p class="text-[10px] text-gray-500">Use a wide image for the cleanest banner. The homepage frame will crop/resize it automatically.</p>
              </div>

              <div class="space-y-3">
                <div>
                  <label class="lbl">Banner Alt Text</label>
                  <textarea class="input-field" id="homepage_banner_alt" name="homepage_banner_alt" rows="4" placeholder="Accessible description for the banner image">${d(n)}</textarea>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}async function Ke(){const e=document.getElementById("content");e&&(e.innerHTML=He());try{let t=function(l,c,u,m="",f="blue"){const h=!!(u&&u.trim());return`
        <div class="glass-soft border border-${f}-500/15 rounded-xl p-4 space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-xs font-black text-white">${d(l)}</p>
            ${h?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">âœ“ Uploaded</span>':'<span class="text-[9px] text-gray-600">Empty</span>'}
          </div>
          ${h?`<div class="relative group w-full h-24 rounded-xl overflow-hidden bg-gray-900 border border-blue-500/10 flex items-center justify-center">
                <img src="${d(u)}" alt="${d(l)}" class="max-h-20 max-w-full object-contain p-2" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-600 text-center&quot;>Image broken</p>'">
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                  <button type="button" onclick="triggerImgUpload('${c}')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">Replace</button>
                  <button type="button" onclick="clearBrandImg('${c}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
                </div>
               </div>`:`<div class="w-full h-24 rounded-xl border-2 border-dashed border-${f}-500/25 hover:border-${f}-500/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition" onclick="triggerImgUpload('${c}')">
                <i data-lucide="image-plus" class="w-7 h-7 text-${f}-400"></i>
                <p class="text-[11px] text-gray-500">Click to upload</p>
               </div>`}
          ${m?`<p class="text-[10px] text-gray-500">${d(m)}</p>`:""}
          <input type="file" id="file-${c}" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'${c}')">
          <input type="hidden" name="${c}" id="val-${c}" value="${d(u||"")}">
          <div class="flex gap-2">
            <input class="input-field text-xs flex-1 ${h?"":"hidden"}" id="url-${c}" value="${d(u||"")}" placeholder="Or paste image URL" oninput="document.getElementById('val-${c}').value=this.value;updateLivePreview()">
            <button type="button" onclick="document.getElementById('url-${c}').classList.toggle('hidden')" class="text-[10px] text-${f}-400 hover:text-${f}-300 transition shrink-0">${h?"Edit URL":"Paste URL"}</button>
          </div>
        </div>`};const{data:i}=await b.from("site_settings").select("*").limit(1).maybeSingle(),a=i||{},n=a.brand_name||a.site_name||ea,s=a.brand_slogan||a.site_tagline||ta,o=a.brand_logo||a.brand_header_logo||"",r=a.ringtone_audio||a.ringtone_url||"";e.innerHTML=`
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
                ${o?`<img src="${d(o)}" alt="${d(n)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
              </div>
              <div>
                <p id="preview-name" class="text-sm font-black text-white leading-none">${d(n)}</p>
                <p id="preview-slogan" class="text-[10px] text-blue-400 font-semibold mt-0.5">${d(s)}</p>
              </div>
              <div id="preview-badge-wrap" class="ml-auto ${a.brand_badge?"":"hidden"}">
                <img id="preview-badge" src="${d(a.brand_badge||"")}" alt="Verified" class="w-6 h-6 object-contain">
              </div>
            </div>
            <div class="px-4 py-2 border-t border-gray-800 text-[11px] text-gray-500" style="background:#070b16">
              <span id="preview-btn" style="background:${d(a.brand_primary_color||"#f97316")};color:#000;padding:4px 12px;border-radius:8px;font-weight:700;font-size:11px">Shop Now</span>
              <span class="ml-3" style="color:${d(a.brand_secondary_color||"#3b82f6")}">All Products â†’</span>
            </div>
          </div>
          <!-- Footer preview -->
          <div id="preview-footer" class="rounded-xl px-4 py-3 border border-gray-800 flex items-center gap-3" style="background:#0f172a">
            <div id="preview-footer-logo-wrap" class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style="background:var(--preview-primary,#f97316)">
              ${o?`<img src="${d(o)}" alt="${d(n)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
            </div>
            <div>
              <p id="preview-footer-name" class="text-xs font-black text-white">${d(n)}</p>
              <p id="preview-footer-slogan" class="text-[10px] text-gray-500">${d(s)}</p>
            </div>
            <p class="ml-auto text-[10px] text-gray-600">Â© 2026 <span id="preview-copy-name">${d(n)}</span></p>
          </div>
          <p class="text-[10px] text-gray-500">This is how your brand will appear on every page. Click Save to apply everywhere.</p>
        </div>

          <!-- â”€â”€ Call Ringtone â”€â”€ -->
          <div class="glass-soft border border-emerald-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="phone-call" class="w-4 h-4 text-emerald-400"></i> Call Ringtone</h3>
            <p class="text-[11px] text-gray-400">This is the calm sound that plays while a customer waits on the call (for ~25 seconds before the representative picks up). Upload your own audio so it rings with your real sound.</p>

            <div class="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 space-y-3">
              <div class="flex items-center justify-between">
                <p class="text-xs font-black text-white">Current Ringtone</p>
                ${r?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">âœ“ Active</span>':'<span class="text-[9px] text-gray-600">Not set (built-in melody plays)</span>'}
              </div>

              ${r?`
              <audio class="w-full" id="ringtone-preview-audio" controls src="${d(r)}"></audio>
              <div class="flex flex-wrap gap-2">
                <button type="button" onclick="downloadRingtone()" class="text-[11px] font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-lg transition"><i data-lucide="download" class="w-3.5 h-3.5 inline mr-1"></i>Download</button>
                <button type="button" onclick="clearRingtone()" class="text-[11px] font-bold text-white bg-red-600 hover:bg-red-500 px-3 py-1.5 rounded-lg transition"><i data-lucide="trash-2" class="w-3.5 h-3.5 inline mr-1"></i>Remove</button>
              </div>
              <div class="flex gap-2">
                <input class="input-field text-xs flex-1" id="ringtone-url" value="${d(r)}" placeholder="Or paste an audio URL (mp3/wav/ogg)" oninput="saveRingtoneUrl(this.value)">
              </div>`:`
              <div class="w-full rounded-xl border-2 border-dashed border-emerald-500/25 hover:border-emerald-500/50 flex flex-col items-center justify-center gap-2 py-8 cursor-pointer transition" onclick="document.getElementById('ringtone-file').click()">
                <i data-lucide="music" class="w-8 h-8 text-emerald-400"></i>
                <p class="text-[11px] text-gray-500">Click to upload your ringtone audio</p>
                <p class="text-[10px] text-gray-600">mp3 / wav / ogg / m4a</p>
              </div>
              <input type="file" id="ringtone-file" class="hidden" accept="audio/*,.mp3,.wav,.ogg,.m4a,.aac,.flac" onchange="handleRingtoneUpload(event)">
            `}
            </div>

            <p id="ringtone-msg" class="text-[11px] text-emerald-400 hidden"></p>
            <p class="text-[10px] text-gray-500">Tip: keep it short (3â€“8 seconds) and soft so it sounds like a gentle ring. It plays automatically on every call once uploaded â€” no redeploy needed.</p>
          </div>

        <form id="brand-form" onsubmit="saveBrandSettings(event)" class="space-y-5">

          <!-- â”€â”€ Brand Identity â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="type" class="w-4 h-4 text-blue-400"></i> Brand Identity</h3>
            <div class="form-grid form-grid-2">
              <div>
                <label class="lbl">Brand Name *</label>
                <input class="input-field" name="brand_name" id="inp-brand-name" value="${d(n)}" placeholder="Your brand name" required oninput="updateLivePreview()">
              </div>
              <div>
                <label class="lbl">Short Name</label>
                <input class="input-field" name="brand_short_name" value="${d(a.brand_short_name||"")}" placeholder="e.g. Weverse">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Slogan / Tagline *</label>
                <input class="input-field" name="brand_slogan" id="inp-brand-slogan" value="${d(s)}" placeholder="e.g. Global Shopping â€¢ Worldwide Delivery" oninput="updateLivePreview()">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Brand Description</label>
                <textarea class="input-field" name="brand_description" rows="2" placeholder="Short descriptionâ€¦">${d(a.brand_description||"")}</textarea>
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
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-primary" value="${d(a.brand_primary_color||"#f97316")}" oninput="document.getElementById('ct-primary').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-primary" name="brand_primary_color" value="${d(a.brand_primary_color||"#f97316")}" placeholder="#f97316" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-primary').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Secondary Color (links, highlights)</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-secondary" value="${d(a.brand_secondary_color||"#3b82f6")}" oninput="document.getElementById('ct-secondary').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-secondary" name="brand_secondary_color" value="${d(a.brand_secondary_color||"#3b82f6")}" placeholder="#3b82f6" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-secondary').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Tagline Color 1 (e.g. "GLOBAL SHOPPING")</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-tag1" value="${d(a.brand_tagline_color1||"#22d3ee")}" oninput="document.getElementById('ct-tag1').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-tag1" name="brand_tagline_color1" value="${d(a.brand_tagline_color1||"#22d3ee")}" placeholder="#22d3ee" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-tag1').value=this.value;updateLivePreview()">
                </div>
              </div>
              <div>
                <label class="lbl">Tagline Color 2 (e.g. "WORLDWIDE DELIVERY")</label>
                <div class="flex gap-2 items-center">
                  <input type="color" class="w-10 h-10 rounded-xl border border-blue-500/20 bg-transparent cursor-pointer shrink-0" id="cp-tag2" value="${d(a.brand_tagline_color2||"#a3e635")}" oninput="document.getElementById('ct-tag2').value=this.value;updateLivePreview()">
                  <input class="input-field flex-1 font-mono" id="ct-tag2" name="brand_tagline_color2" value="${d(a.brand_tagline_color2||"#a3e635")}" placeholder="#a3e635" oninput="if(/^#[0-9a-fA-F]{6}$/.test(this.value))document.getElementById('cp-tag2').value=this.value;updateLivePreview()">
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
                  ${["Inter","Poppins","Roboto","Montserrat","Nunito","Raleway","Lato","Open Sans","Outfit","Plus Jakarta Sans","DM Sans","Urbanist","Sora","Manrope","Work Sans","Space Grotesk"].map(l=>`<option value="${l}" ${(a.brand_font||"Inter")===l?"selected":""}>${l}</option>`).join("")}
                </select>
              </div>
              <div>
                <label class="lbl">Custom Google Font (overrides above)</label>
                <input class="input-field" name="brand_custom_font" value="${d(a.brand_custom_font||"")}" placeholder="e.g. Space Grotesk">
              </div>
            </div>
            <div id="font-preview" class="p-3 rounded-xl bg-gray-900 border border-blue-500/10">
              <p id="font-sample" class="text-sm text-white font-bold" style="font-family:'${d(a.brand_font||"Inter")}',sans-serif">The quick brown fox jumps â€” 0123456789 Â· Weverse Online Shop</p>
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
              ${t("Verification Badge Image","brand_badge",a.brand_badge,"Upload your blue checkmark or any verification badge. Recommended: 64Ã—64px PNG with transparent background.","blue")}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              ${t("Brand Logo / Banner Image","brand_logo",o,"Upload your image here. This changes only the logo/banner image and keeps the other brand fields as they are.")}
              ${t("Favicon / Tab Icon","brand_favicon",a.brand_favicon,"Browser tab icon. 32Ã—32 or 64Ã—64px.")}
              ${t("Mobile Logo","brand_mobile_logo",a.brand_mobile_logo,"Smaller logo for phones. 120Ã—40px.")}
              ${t("Header Logo","brand_header_logo",a.brand_header_logo,"Top navigation bar.")}
              ${t("Footer Logo","brand_footer_logo",a.brand_footer_logo,"Website footer.")}
              ${t("Login Page Logo","brand_login_logo",a.brand_login_logo,"Shown on auth/login page.")}
              ${t("Admin Dashboard Logo","brand_admin_logo",a.brand_admin_logo,"Admin sidebar header.")}
              ${t("OG / Social Image","brand_og_image",a.brand_og_image,"1200Ã—630px â€” shown when sharing links.")}
            </div>
          </div>

          <!-- â”€â”€ Contact â”€â”€ -->
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="globe" class="w-4 h-4 text-blue-400"></i> Website & Contact</h3>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Website URL</label><input class="input-field" name="brand_website_url" value="${d(a.brand_website_url||a.production_url||"https://weverseonlineshop.com")}" placeholder="https://â€¦"></div>
              <div><label class="lbl">Support Email</label><input type="email" class="input-field" name="brand_email" value="${d(a.brand_email||a.contact_email||"")}" placeholder="support@â€¦"></div>
              <div><label class="lbl">Phone / WhatsApp</label><input class="input-field" name="brand_phone" value="${d(a.brand_phone||a.contact_phone||"")}" placeholder="+1 234â€¦"></div>
              <div><label class="lbl">Business Address</label><input class="input-field" name="brand_address" value="${d(a.brand_address||a.contact_address||"")}" placeholder="City, Country"></div>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.toggleLivePreview=function(){document.getElementById("live-preview-panel")?.classList.toggle("hidden"),updateLivePreview()};window.updateLivePreview=function(){const e=document.getElementById("live-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("inp-brand-name")?.value||ea,i=document.getElementById("inp-brand-slogan")?.value||ta,a=document.getElementById("ct-primary")?.value||"#f97316",n=document.getElementById("ct-secondary")?.value||"#3b82f6",s=document.getElementById("ct-tag1")?.value||"#22d3ee",o=document.getElementById("ct-tag2")?.value||"#a3e635",r=document.getElementById("val-brand_logo")?.value||DEFAULT_BRAND_LOGO,l=document.getElementById("val-brand_badge")?.value||"";["preview-name","preview-footer-name","preview-copy-name"].forEach(p=>{const y=document.getElementById(p);y&&(y.textContent=t)}),["preview-slogan","preview-footer-slogan"].forEach(p=>{const y=document.getElementById(p);y&&(y.textContent=i)});const c=document.getElementById("preview-slogan");if(c&&i){const p=i,y=p.indexOf(","),v=y>-1?p.slice(0,y+1):p,_=y>-1?p.slice(y+1):"";c.innerHTML=`<span style="color:${s};font-weight:800">${d(v)}</span><span style="color:${o};font-weight:700">${d(_)}</span>`}const u=document.getElementById("preview-btn");u&&(u.style.background=a);const m=e.querySelector('[style*="color:"]');m&&(m.style.color=n),["preview-logo-wrap","preview-footer-logo-wrap"].forEach(p=>{const y=document.getElementById(p);y&&(r?(y.innerHTML=`<img src="${r}" alt="${t}" class="w-full h-full object-contain p-1">`,y.style.background="transparent"):(y.innerHTML='<i data-lucide="globe" class="w-4 h-4 text-white"></i>',y.style.background=a,window.lucide&&lucide.createIcons()))});const f=document.getElementById("preview-badge-wrap"),h=document.getElementById("preview-badge");f&&h&&(l?(h.src=l,f.classList.remove("hidden")):f.classList.add("hidden"))};window.triggerImgUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearBrandImg=function(e){document.getElementById("val-"+e).value="";const t=document.getElementById("url-"+e);t&&(t.value=""),(e&&e.startsWith("homepage_")?Ut:Ke)()};window.clearHomepageBannerImg=function(){const e=document.getElementById("val-homepage_banner_image"),t=document.getElementById("url-homepage_banner_image"),i=document.getElementById("homepage_banner_alt");e&&(e.value=""),t&&(t.value=""),i&&(i.value=""),Ut()};window.restoreHomepageBannerDefault=function(){window.clearHomepageBannerImg()};window.syncColor=function(e,t){const i=document.getElementById("color-"+e);i&&/^#[0-9a-fA-F]{6}$/.test(t)&&(i.value=t)};window.previewFont=function(e){const t=document.getElementById("font-sample");t&&(t.style.fontFamily=`'${e}', sans-serif`);const i="gf-preview";let a=document.getElementById(i);a||(a=document.createElement("link"),a.id=i,a.rel="stylesheet",document.head.appendChild(a)),a.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(e)}:wght@400;700;900&display=swap`};const ai="weverse_brand_v1",ni="weverse_brand_override_v1";function si(){try{const e=JSON.parse(localStorage.getItem(ni)||"null");if(e&&typeof e=="object")return e}catch{}try{const e=JSON.parse(localStorage.getItem(ai)||"null");if(e&&typeof e=="object")return e.data&&typeof e.data=="object"?e.data:e}catch{}return{}}function _t(e){const t={...si(),...e};try{localStorage.setItem(ni,JSON.stringify(t))}catch{}try{localStorage.setItem(ai,JSON.stringify({ts:Date.now(),data:t}))}catch{}return window.dispatchEvent(new StorageEvent("storage",{key:ni})),window.dispatchEvent(new StorageEvent("storage",{key:ai})),window.dispatchEvent(new CustomEvent("brand-updated",{detail:t})),t}window.handleBrandImgUpload=async function(e,t){const i=e.target.files?.[0];if(!i)return;const a=t&&t.startsWith("homepage_"),n=document.getElementById(a?"homepage-banner-status":"brand-upload-status"),s=document.getElementById(a?"homepage-banner-msg":"brand-upload-msg");n&&n.classList.remove("hidden"),s&&(s.textContent=`Uploading ${i.name}â€¦`);try{const o=i.name.split(".").pop(),r=`brand/${t}-${Date.now()}.${o}`,{error:l}=await b.storage.from("product-images").upload(r,i,{contentType:i.type,upsert:!0});let c;if(l)c=URL.createObjectURL(i),s&&(s.textContent=`Preview only (storage: ${l.message})`);else{const{data:f}=b.storage.from("product-images").getPublicUrl(r);c=f.publicUrl,s&&(s.textContent=`âœ“ ${i.name} uploaded`)}const u=document.getElementById("val-"+t),m=document.getElementById("url-"+t);u&&(u.value=c),m&&(m.value=c,m.classList.remove("hidden")),a?updateHomepageBannerPreview():(updateLivePreview(),setTimeout(()=>Ke(),1e3))}catch(o){s&&(s.textContent=`Upload failed: ${o.message}`)}setTimeout(()=>n?.classList.add("hidden"),4e3)};window.triggerRingtoneUpload=function(){document.getElementById("ringtone-file")?.click()};window.downloadRingtone=function(){const t=document.getElementById("ringtone-preview-audio")?.src||document.getElementById("ringtone-url")?.value||"";if(!t)return;const i=document.createElement("a");i.href=t,i.download="ringtone."+(t.split(".").pop()||"mp3"),document.body.appendChild(i),i.click(),i.remove()};window.saveRingtoneUrl=async function(e){const t=String(e||"").trim();try{const{data:i}=await b.from("site_settings").select("id").limit(1).maybeSingle();let a;const n={ringtone_audio:t};i?.id?{error:a}=await b.from("site_settings").update(n).eq("id",i.id):{error:a}=await b.from("site_settings").insert(n);const s=document.getElementById("ringtone-msg");s&&(s.classList.remove("hidden"),s.textContent=a?"Saved locally ("+a.message+")":"âœ“ Ringtone URL saved â€” live on calls.")}catch(i){const a=document.getElementById("ringtone-msg");a&&(a.classList.remove("hidden"),a.textContent="Could not save: "+i.message)}setTimeout(()=>document.getElementById("ringtone-msg")?.classList.add("hidden"),3500)};window.handleRingtoneUpload=async function(e){const t=e.target.files?.[0];if(!t)return;const i=document.getElementById("ringtone-msg");i&&(i.classList.remove("hidden"),i.textContent=`Uploading ${t.name}â€¦`);try{const a=(t.name.split(".").pop()||"mp3").toLowerCase().replace(/[^a-z0-9]/g,""),n=`ringtone-${Date.now()}.${a}`,{error:s}=await b.storage.from("ringtones").upload(n,t,{contentType:t.type||"audio/mpeg",upsert:!0});let o;if(s)o=URL.createObjectURL(t),i&&(i.textContent=`Preview only (storage not available: ${s.message})`);else{const{data:r}=b.storage.from("ringtones").getPublicUrl(n);o=r.publicUrl,await window.saveRingtoneUrl(o)}Ke()}catch(a){i&&(i.textContent=`Upload failed: ${a.message}`),setTimeout(()=>i?.classList.add("hidden"),4e3)}};window.clearRingtone=async function(){await window.saveRingtoneUrl(""),Ke()};window.saveBrandSettings=async function(e){e.preventDefault();const t=new FormData(e.target),i={};for(const[r,l]of t.entries())r.endsWith("_url")||(i[r]=l);i.brand_slogan&&(i.site_tagline=i.brand_slogan),i.brand_description&&(i.site_description=i.brand_description),i.brand_email&&(i.contact_email=i.brand_email),i.brand_phone&&(i.contact_phone=i.brand_phone),i.brand_address&&(i.contact_address=i.brand_address),i.brand_website_url&&(i.production_url=i.brand_website_url);const a=i.brand_custom_font||i.brand_font;a&&previewFont(a);const n=e.target.querySelector("[type=submit]");n&&(n.disabled=!0,n.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Savingâ€¦',window.lucide&&lucide.createIcons());const{data:s}=await b.from("site_settings").select("id").limit(1).maybeSingle();let o;s?.id?{error:o}=await b.from("site_settings").update(i).eq("id",s.id):{error:o}=await b.from("site_settings").insert(i),o?(_t(i),g("Brand saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(_t(i),g("âœ… Brand saved! All pages will now show your updated brand.","success")),setTimeout(()=>Ke(),500)};window.toggleHomepageBannerPreview=function(){document.getElementById("homepage-banner-preview-panel")?.classList.toggle("hidden"),updateHomepageBannerPreview()};window.updateHomepageBannerPreview=function(){const e=document.getElementById("homepage-banner-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("val-homepage_banner_image")?.value||"",i=document.getElementById("homepage_banner_alt")?.value||"Homepage header banner",a=document.getElementById("homepage-banner-image"),n=document.getElementById("homepage-banner-preview-img");[a,n].forEach(o=>{o&&(t?(o.src=t,o.alt=i,o.classList.remove("hidden")):o.classList.add("hidden"))});const s=document.getElementById("homepage-banner-preview-note");s&&(s.textContent=t?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.")};window.saveHomepageBranding=async function(e){e.preventDefault();const t={homepage_banner_image:document.getElementById("url-homepage_banner_image")?.value||"",homepage_banner_alt:document.getElementById("homepage_banner_alt")?.value||"Homepage header banner"},i=e.target.querySelector("[type=submit]");i&&(i.disabled=!0,i.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishingâ€¦',window.lucide&&lucide.createIcons());const{data:a}=await b.from("site_settings").select("id").limit(1).maybeSingle();let n;a?.id?{error:n}=await b.from("site_settings").update(t).eq("id",a.id):{error:n}=await b.from("site_settings").insert(t),n?(_t({...si(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),g("Homepage banner saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(_t({...si(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),g("Homepage banner published.","success")),setTimeout(()=>Ut(),500)};const kt=[{key:"trust_promo",label:"Promotional Hero (Trust & Info Area)",icon:"sparkles",desc:"The family-receives-orders section above the app banner. Show it as-is for the built-in design, or upload the real photo/video."},{key:"app_banner",label:"Weverse Mobile App Banner",icon:"smartphone",desc:"The dark app banner at the very bottom of every page."},{key:"reviews",label:"Customer Reviews & Trust",icon:"star",desc:"The customer reviews strip just below the accordions."}];async function st(e){const t=document.getElementById("content");t&&(t.innerHTML=He());try{let i=e?{...e}:null;if(!i){const{data:a}=await b.from("site_settings").select("*").limit(1).maybeSingle(),n=a||{};i={};for(const s of kt)i[s.key+"_bg_image"]=n[s.key+"_bg_image"]||"",i[s.key+"_bg_video"]=n[s.key+"_bg_video"]||""}t.innerHTML=`
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white flex items-center gap-2"><i data-lucide="image" class="w-5 h-5 text-blue-400"></i> Promo & Backgrounds</h2>
        <p class="text-xs text-gray-500 max-w-2xl leading-relaxed">Choose an <b class="text-gray-300">image</b> and/or a <b class="text-gray-300">video</b> for each promotional section. When a video is set it plays automatically and the image acts as its poster. Leave a slot empty to keep that section’s built-in design. Changes appear instantly on every page after publishing.</p>

        <div id="promo-bg-status" class="hidden p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300 flex items-center gap-2">
          <i data-lucide="loader-2" class="w-4 h-4 animate-spin shrink-0"></i>
          <span id="promo-bg-msg">Uploadingâ€¦</span>
        </div>

        <form id="promo-bg-form" onsubmit="savePromoBackgrounds(event)" class="space-y-5">
          ${kt.map(a=>io(a,i)).join("")}

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 flex items-center gap-3">
            <i data-lucide="info" class="w-5 h-5 text-emerald-400 shrink-0"></i>
            <p class="text-[11px] text-gray-400 leading-relaxed">Published backgrounds are cached on visitor devices for up to a minute. Publishing clears the cache so everyone sees your new media immediately.</p>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">
            <i data-lucide="rocket" class="w-4 h-4 inline mr-2"></i>Publish Promo & Backgrounds
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(i){t&&(t.innerHTML=`<div class="p-6 text-red-400">${d(i.message)}</div>`)}}function io(e,t){const i=e.key+"_bg_image",a=e.key+"_bg_video",n=t[i]||"",s=t[a]||"",o=!!(n&&n.trim()),r=!!(s&&s.trim());return`
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
          ${o?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">âœ“ Image</span>':""}
          ${r?'<span class="text-[9px] font-bold text-violet-500 bg-violet-500/10 px-1.5 py-0.5 rounded-full">âœ“ Video</span>':""}
          ${o||r?"":'<span class="text-[9px] text-gray-600">Built-in design</span>'}
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${Di(e,i,n,o,"image")}
        ${Di(e,a,s,r,"video")}
      </div>
    </div>`}function Di(e,t,i,a,n){const s=n==="image",o=s?"blue":"violet",r=s?"image-plus":"video",l=s?"text-blue-400":"text-violet-400";return`
    <div>
      <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5"><i data-lucide="${r}" class="w-3 h-3 ${l}"></i>${n}</p>
      ${a?`<div class="relative group w-full h-28 rounded-xl overflow-hidden bg-gray-900 border border-${o}-500/15 flex items-center justify-center">
             ${s?`<img src="${d(i)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`:`<video src="${d(i)}" class="w-full h-full object-cover" muted playsinline preload="metadata"></video>`}
             <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
               <button type="button" onclick="triggerPromoBgUpload('${t}')" class="text-xs font-bold text-white bg-${o}-600 px-3 py-1.5 rounded-lg">Replace</button>
               <button type="button" onclick="clearPromoBg('${t}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
             </div>
           </div>`:`<button type="button" onclick="triggerPromoBgUpload('${t}')" class="w-full h-28 rounded-xl border-2 border-dashed border-${o}-500/25 hover:border-${o}-500/50 flex flex-col items-center justify-center gap-1.5 transition">
             <i data-lucide="${r}" class="w-6 h-6 ${l}"></i>
             <p class="text-[10px] text-gray-500">Upload ${n}</p>
           </button>`}
      <input type="file" id="file-${t}" class="hidden" accept="${s?"image/*":"video/*"}" onchange="handlePromoBgUpload(event,'${t}')">
      <input type="hidden" name="${t}" id="val-${t}" value="${d(i)}">
      <div class="flex gap-2 mt-1.5">
        <input class="input-field text-xs flex-1" id="url-${t}" value="${d(i)}" placeholder="Or paste ${n} URL" oninput="document.getElementById('val-${t}').value=this.value">
        <button type="button" onclick="document.getElementById('url-${t}').classList.toggle('hidden')" class="text-[10px] text-${o}-400 hover:text-${o}-300 transition shrink-0">Edit URL</button>
      </div>
    </div>`}window.triggerPromoBgUpload=function(e){document.getElementById("file-"+e)?.click()};function Wa(){const e={};for(const t of kt)e[t.key+"_bg_image"]=document.getElementById("val-"+t.key+"_bg_image")?.value||"",e[t.key+"_bg_video"]=document.getElementById("val-"+t.key+"_bg_video")?.value||"";return e}window.clearPromoBg=function(e){const t=Wa();t[e]="";const i=document.getElementById("val-"+e),a=document.getElementById("url-"+e);i&&(i.value=""),a&&(a.value=""),st(t),g("Cleared. Publish to apply.","info")};window.handlePromoBgUpload=async function(e,t){const i=e.target.files?.[0];if(!i)return;const a=document.getElementById("promo-bg-status"),n=document.getElementById("promo-bg-msg");a&&a.classList.remove("hidden"),n&&(n.textContent=`Uploading ${i.name}â€¦`);try{const s=(i.name.split(".").pop()||"bin").toLowerCase(),o=`promo/${t}-${Date.now()}.${s}`,{error:r}=await b.storage.from("product-images").upload(o,i,{contentType:i.type,upsert:!0});let l;if(r)l=URL.createObjectURL(i),n&&(n.textContent=`Preview only (storage: ${r.message})`);else{const{data:f}=b.storage.from("product-images").getPublicUrl(o);l=f.publicUrl,n&&(n.textContent=`âœ“ ${i.name} uploaded`)}const c=document.getElementById("val-"+t),u=document.getElementById("url-"+t);c&&(c.value=l),u&&(u.value=l,u.classList.remove("hidden"));const m=Wa();st(m)}catch(s){n&&(n.textContent=`Upload failed: ${s.message}`)}setTimeout(()=>a?.classList.add("hidden"),4e3)};window.savePromoBackgrounds=async function(e){e.preventDefault();const t={};for(const s of kt)t[s.key+"_bg_image"]=document.getElementById("val-"+s.key+"_bg_image")?.value||"",t[s.key+"_bg_video"]=document.getElementById("val-"+s.key+"_bg_video")?.value||"";const i=e.target.querySelector("[type=submit]");i&&(i.disabled=!0,i.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishingâ€¦',window.lucide&&lucide.createIcons());const{data:a}=await b.from("site_settings").select("id").limit(1).maybeSingle();let n;a?.id?{error:n}=await b.from("site_settings").update(t).eq("id",a.id):{error:n}=await b.from("site_settings").insert(t),on(),n?(g("Publish failed â€” the settings table rejected the update. Make sure the new promo-background columns are migrated, then try again.","error"),st(t)):(g("Promo & backgrounds published across all pages.","success"),setTimeout(()=>st(),500))};window._manualPaymentAccounts=[];function wi(e="USD"){return{id:`bank-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,currency:e,currencyName:e,flag:Oi("US"),country:"United States",country_code:"US",bankName:"",transferType:"Local & International",beneficiary:"",accountNumber:"",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:""}}function xi(){const e=document.getElementById("manual-payment-accounts-json");e&&(e.value=JSON.stringify(window._manualPaymentAccounts||[]))}function ao(e,t){const i=e.country_code||"US";return`
    <div class="p-4 glass-soft border border-blue-500/10 rounded-xl space-y-3">
      <div class="flex items-center justify-between gap-3">
        <h4 class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="building-2" class="w-3.5 h-3.5 text-blue-400"></i> Bank Account ${t+1}</h4>
        <button type="button" onclick="removeManualPaymentAccount(${t})" class="text-[11px] font-bold text-red-400 hover:text-red-300 transition">Remove</button>
      </div>
      <div class="form-grid form-grid-2">
        <div><label class="lbl">Currency *</label><select class="input-field" onchange="updateManualPaymentAccount(${t}, 'currency', this.value)">${ia.map(a=>`<option value="${a}" ${e.currency===a?"selected":""}>${a}</option>`).join("")}</select></div>
        <div><label class="lbl">Country *</label><select class="input-field" onchange="updateManualPaymentCountry(${t}, this.value)">${fa(i)}</select></div>
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
    </div>`}window.renderManualPaymentAccountsEditor=function(){const e=document.getElementById("manual-accounts-editor");e&&(window._manualPaymentAccounts?.length||(window._manualPaymentAccounts=[wi()]),e.innerHTML=`
    <div class="space-y-4">
      ${window._manualPaymentAccounts.map((t,i)=>ao(t,i)).join("")}
      <button type="button" onclick="addManualPaymentAccount()" class="btn-press w-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wide transition flex items-center justify-center gap-2">
        <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Another Bank Account
      </button>
    </div>`,xi(),window.lucide&&lucide.createIcons())};window.addManualPaymentAccount=function(){window._manualPaymentAccounts.push(wi()),renderManualPaymentAccountsEditor()};window.removeManualPaymentAccount=function(e){window._manualPaymentAccounts.splice(e,1),window._manualPaymentAccounts.length||(window._manualPaymentAccounts=[wi()]),renderManualPaymentAccountsEditor()};window.updateManualPaymentAccount=function(e,t,i){const a=window._manualPaymentAccounts[e];a&&(a[t]=i,t==="currency"&&(a.currencyName=i),xi())};window.updateManualPaymentCountry=function(e,t){const i=window._manualPaymentAccounts[e];if(!i)return;const a=je.find(n=>n.code===t);i.country_code=t,i.country=a?.name||"",i.flag=a?.flag||Oi(t),xi(),renderManualPaymentAccountsEditor()};async function oi(){const e=document.getElementById("content");e&&(e.innerHTML=He());try{const{data:t}=await b.from("site_settings").select("*").limit(1).maybeSingle(),a={...tn()||{},...t||{}};window._manualPaymentAccounts=an(a).map(n=>({...n})),e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white">Payment Settings</h2>
          <div class="flex items-center gap-2 flex-wrap">
            ${a.payment_gateway?`<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Active: ${d(a.payment_gateway)}</span>`:'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Not configured</span>'}
            ${a.payment_mode==="live"?'<span class="badge bg-red-500/10 text-red-400 border-red-500/20">ðŸ”´ LIVE MODE</span>':'<span class="badge bg-blue-500/10 text-blue-400 border-blue-500/20">ðŸ”§ Test Mode</span>'}
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
                <input type="checkbox" name="manual_payment_enabled" id="manual-toggle" ${a.manual_payment_enabled!==!1?"checked":""}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="p-5 space-y-4">
              <input type="hidden" id="manual-payment-accounts-json" name="manual_payment_accounts_json" value="">
              <div id="manual-accounts-editor"></div>
              <div>
                <label class="lbl">Payment Instructions (shown to customer after checkout)</label>
                <textarea class="input-field" name="manual_payment_instructions" rows="4" placeholder="Explain how customers should pay and upload their receipt.">${d(nn(a))}</textarea>
              </div>
              <div>
                <label class="lbl">ATM Transfer Instructions (optional, shown separately)</label>
                <textarea class="input-field" name="atm_transfer_instructions" rows="3" placeholder="Optional ATM-specific instructions.">${d(a.atm_transfer_instructions||"")}</textarea>
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
                <input type="checkbox" name="flutterwave_enabled" ${a.flutterwave_enabled?"checked":""}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="p-5 space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex items-center gap-3 p-3 glass-soft border ${(a.payment_mode||"test")==="test"?"border-blue-500/40 bg-blue-500/5":"border-blue-500/10"} rounded-xl cursor-pointer">
                  <input type="radio" name="payment_mode" value="test" ${(a.payment_mode||"test")==="test"?"checked":""} class="accent-blue-500">
                  <div><p class="text-xs font-black text-white">ðŸ”§ Test Mode</p><p class="text-[11px] text-gray-500">Use sandbox keys â€” no real money</p></div>
                </label>
                <label class="flex items-center gap-3 p-3 glass-soft border ${a.payment_mode==="live"?"border-red-500/40 bg-red-500/5":"border-blue-500/10"} rounded-xl cursor-pointer">
                  <input type="radio" name="payment_mode" value="live" ${a.payment_mode==="live"?"checked":""} class="accent-red-500">
                  <div><p class="text-xs font-black text-white">ðŸ”´ Live Mode</p><p class="text-[11px] text-red-400 font-bold">Real money â€” use production keys</p></div>
                </label>
              </div>
              <div class="form-grid form-grid-2">
                <div><label class="lbl">Public Key *</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_public_key" placeholder="${a.flutterwave_public_key?"â€¢â€¢â€¢â€¢"+a.flutterwave_public_key.slice(-4):"FLWPUBK_TEST-â€¦ or FLWPUBK-â€¦"}">${a.flutterwave_public_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}</div></div>
                <div><label class="lbl">Secret Key *</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_secret_key" placeholder="${a.flutterwave_secret_key?"â€¢â€¢â€¢â€¢"+a.flutterwave_secret_key.slice(-4):"FLWSECK_TEST-â€¦ or FLWSECK-â€¦"}">${a.flutterwave_secret_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}</div></div>
                <div><label class="lbl">Encryption Key</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_encryption_key" placeholder="${a.flutterwave_encryption_key?"â€¢â€¢â€¢â€¢"+a.flutterwave_encryption_key.slice(-4):"Encryption key from dashboard"}">${a.flutterwave_encryption_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}</div></div>
                <div><label class="lbl">Webhook Secret</label><div class="relative"><input type="password" class="input-field pr-16" name="flutterwave_webhook_secret" placeholder="${a.flutterwave_webhook_secret?"â€¢â€¢â€¢â€¢"+a.flutterwave_webhook_secret.slice(-4):"Secret hash for webhook verification"}">${a.flutterwave_webhook_secret?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}</div></div>
                <div><label class="lbl">Accepted Currency</label><select class="input-field" name="flutterwave_currency">${["NGN","USD","GBP","EUR","GHS","KES","ZAR","ZMW","TZS","UGX","XAF","XOF"].map(n=>`<option value="${n}" ${(a.flutterwave_currency||"NGN")===n?"selected":""}>${n}</option>`).join("")}</select></div>
                <div><label class="lbl">Redirect URL (after payment)</label><input class="input-field" name="flutterwave_redirect_url" value="${d(a.flutterwave_redirect_url||"")}" placeholder="${window.location.origin}/payment.html"></div>
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
              ${[{id:"manual",label:"Manual / Bank Transfer",icon:"landmark",color:"blue"},{id:"flutterwave",label:"Flutterwave",icon:"zap",color:"amber"},{id:"both",label:"Both (customer chooses)",icon:"layers",color:"emerald"}].map(n=>`<label class="flex items-center gap-3 p-3 glass-soft border ${(a.payment_gateway||"manual")===n.id?"border-blue-500/40 bg-blue-500/5":"border-blue-500/10"} rounded-xl cursor-pointer hover:border-blue-500/30 transition"><input type="radio" name="payment_gateway" value="${n.id}" ${(a.payment_gateway||"manual")===n.id?"checked":""} class="accent-blue-500"><div><i data-lucide="${n.icon}" class="w-4 h-4 text-${n.color}-400 mb-0.5"></i><p class="text-xs font-bold text-white">${n.label}</p></div></label>`).join("")}
            </div>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2"><i data-lucide="save" class="w-4 h-4"></i> Save Payment Settings</button>
        </form>
      </div>`,renderManualPaymentAccountsEditor(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.savePaymentSettings=async function(e){e.preventDefault();const t=new FormData(e.target),i=Object.fromEntries(t.entries()),a=["flutterwave_public_key","flutterwave_secret_key","flutterwave_encryption_key","flutterwave_webhook_secret"],n={};for(const[u,m]of Object.entries(i))a.includes(u)?m&&!m.startsWith("â€¢â€¢â€¢â€¢")&&m.trim()!==""&&(n[u]=m.trim()):n[u]=m;n.manual_payment_enabled=i.manual_payment_enabled==="on",n.flutterwave_enabled=i.flutterwave_enabled==="on";let s=[];try{s=JSON.parse(i.manual_payment_accounts_json||"[]")}catch{}n.manual_payment_accounts=s;const o=s[0]||{},r=s[1]||{};n.bank1_account_name=o.beneficiary||"",n.bank1_account_number=o.accountNumber||"",n.bank1_bank_name=o.bankName||"",n.bank1_transfer_type=o.transferType||"",n.bank1_sort_code=o.sortCode||o.routing||"",n.bank1_currency=o.currency||"USD",n.bank2_account_name=r.beneficiary||"",n.bank2_account_number=r.accountNumber||"",n.bank2_bank_name=r.bankName||"",n.bank2_transfer_type=r.transferType||"",n.bank2_sort_code=r.sortCode||r.routing||"",n.bank2_currency=r.currency||"USD",en(n);const{data:l}=await b.from("site_settings").select("id").limit(1).maybeSingle();let c;if(l?.id?{error:c}=await b.from("site_settings").update(n).eq("id",l.id):{error:c}=await b.from("site_settings").insert(n),c){const u=String(c.message||"");if(/manual_payment_accounts|column|schema cache/i.test(u)){g("Payment settings saved locally. Run the latest migration to persist them to Supabase.","info"),console.warn(c),setTimeout(()=>oi(),500);return}g("Save failed: "+c.message,"error"),console.error(c);return}g("âœ… Payment settings saved successfully!","success"),setTimeout(()=>oi(),500)};window.testFlutterwaveKeys=async function(){const{data:e}=await b.from("site_settings").select("flutterwave_public_key").limit(1).maybeSingle();if(!e?.flutterwave_public_key){g("Save your Flutterwave public key first","info");return}g("Flutterwave key is saved. Use test mode + test card to verify a payment flow.","info")};async function jt(){const e=document.getElementById("content");try{const{data:t}=await b.from("site_settings").select("*").limit(1).maybeSingle(),i=t||{};e.innerHTML=`
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white">Publish & Deploy</h2>

        <!-- Status Bar -->
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 flex flex-wrap items-center gap-4">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${i.github_repo?"bg-emerald-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${i.github_repo?"text-emerald-400":"text-gray-500"}">${i.github_repo?"GitHub Connected: "+d(i.github_repo):"GitHub Not Connected"}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${i.deploy_webhook?"bg-blue-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${i.deploy_webhook?"text-blue-400":"text-gray-500"}">${i.deploy_webhook?"Deploy Webhook Set":"No Webhook"}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${i.payment_gateway?"bg-amber-400":"bg-gray-600"} inline-block"></span>
            <span class="text-xs font-bold ${i.payment_gateway?"text-amber-400":"text-gray-500"}">${i.payment_gateway?"Payment: "+d(i.payment_gateway):"Payment Not Configured"}</span>
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
                <input class="input-field" name="github_username" value="${d(i.github_username||"")}" placeholder="your-github-username">
              </div>
              <div>
                <label class="lbl">Repository Name</label>
                <input class="input-field" name="github_repo" value="${d(i.github_repo||"")}" placeholder="my-website-repo">
              </div>
              <div>
                <label class="lbl">Branch</label>
                <input class="input-field" name="github_branch" value="${d(i.github_branch||"main")}" placeholder="main">
              </div>
              <div>
                <label class="lbl">GitHub Personal Access Token</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="github_token" placeholder="${i.github_token?"â€¢â€¢â€¢â€¢"+i.github_token.slice(-4):"ghp_â€¦paste your token"}">
                  ${i.github_token?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}
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
              ${[{id:"netlify",name:"Netlify",icon:"cloud",color:"teal"},{id:"vercel",name:"Vercel",icon:"triangle",color:"white"},{id:"github-pages",name:"GitHub Pages",icon:"github",color:"gray"},{id:"railway",name:"Railway",icon:"train",color:"violet"},{id:"render",name:"Render",icon:"server",color:"blue"}].map(a=>`
                <label class="flex items-center gap-2 p-3 glass-soft border ${(i.hosting_provider||"netlify")===a.id?"border-blue-500/40 bg-blue-500/5":"border-blue-500/10"} rounded-xl cursor-pointer hover:border-blue-500/30 transition">
                  <input type="radio" name="hosting_provider" value="${a.id}" ${(i.hosting_provider||"netlify")===a.id?"checked":""} class="accent-blue-500">
                  <i data-lucide="${a.icon}" class="w-4 h-4 text-gray-400"></i>
                  <span class="text-xs font-bold text-white">${a.name}</span>
                </label>`).join("")}
            </div>
            <div>
              <label class="lbl">Deploy Webhook URL</label>
              <input class="input-field" name="deploy_webhook" value="${d(i.deploy_webhook||"")}" placeholder="https://api.netlify.com/build_hooks/â€¦">
              <p class="text-[10px] text-gray-500 mt-1">Netlify: Site Settings â†’ Build hooks Â· Vercel: Project â†’ Settings â†’ Git â†’ Deploy Hooks</p>
            </div>
            <div>
              <label class="lbl">Production URL</label>
              <input class="input-field" name="production_url" value="${d(i.production_url||"")}" placeholder="https://yoursite.com">
            </div>
          </div>

          <!-- â”€â”€ Payment Settings â”€â”€ -->
          <div class="glass-soft border border-amber-500/15 rounded-2xl p-5 space-y-4">
            <h3 class="text-sm font-black text-white flex items-center gap-2">
              <i data-lucide="credit-card" class="w-4 h-4 text-amber-400"></i> Payment Gateway Settings
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${[{id:"flutterwave",name:"Flutterwave",color:"amber"},{id:"stripe",name:"Stripe",color:"blue"},{id:"paypal",name:"PayPal",color:"blue"},{id:"paystack",name:"Paystack",color:"blue"},{id:"razorpay",name:"Razorpay",color:"blue"},{id:"manual",name:"Manual Bank Transfer",color:"gray"}].map(a=>`
                <label class="flex items-center gap-2 p-2.5 glass-soft border ${(i.payment_gateway||"flutterwave")===a.id?"border-amber-500/40 bg-amber-500/5":"border-blue-500/10"} rounded-xl cursor-pointer hover:border-amber-500/30 transition">
                  <input type="radio" name="payment_gateway" value="${a.id}" ${(i.payment_gateway||"flutterwave")===a.id?"checked":""} class="accent-amber-500">
                  <span class="text-xs font-bold text-white">${a.name}</span>
                </label>`).join("")}
            </div>
            <div id="payment-key-fields" class="form-grid form-grid-2">
              <div>
                <label class="lbl">Public / Publishable Key</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="payment_public_key" placeholder="${i.payment_public_key?"â€¢â€¢â€¢â€¢"+i.payment_public_key.slice(-4):"Paste public keyâ€¦"}">
                  ${i.payment_public_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}
                </div>
              </div>
              <div>
                <label class="lbl">Secret / Private Key</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16" name="payment_secret_key" placeholder="${i.payment_secret_key?"â€¢â€¢â€¢â€¢"+i.payment_secret_key.slice(-4):"Paste secret keyâ€¦"}">
                  ${i.payment_secret_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':""}
                </div>
              </div>
              <div>
                <label class="lbl">Currency</label>
                <select class="input-field" name="payment_currency">
                  ${["USD","EUR","GBP","NGN","KES","ZAR","GHS","ZMW","TZS","UGX"].map(a=>`<option value="${a}" ${(i.payment_currency||"USD")===a?"selected":""}>${a}</option>`).join("")}
                </select>
              </div>
              <div>
                <label class="lbl">Test / Live Mode</label>
                <select class="input-field" name="payment_mode">
                  <option value="test" ${(i.payment_mode||"test")==="test"?"selected":""}>ðŸ”§ Test Mode (sandbox)</option>
                  <option value="live" ${i.payment_mode==="live"?"selected":""}>ðŸš€ Live Mode (real money)</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Webhook Secret (for payment verification)</label>
                <input type="password" class="input-field" name="payment_webhook_secret" placeholder="${i.payment_webhook_secret?"â€¢â€¢â€¢â€¢"+i.payment_webhook_secret.slice(-4):"Paste webhook secretâ€¦"}">
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.saveDeploySettings=async function(e){e.preventDefault();const t=e.target?.querySelector("[type=submit]");t&&(t.disabled=!0,t.innerHTML="Savingâ€¦");const i=new FormData(e.target),a=Object.fromEntries(i.entries()),n={},s=["github_token","payment_public_key","payment_secret_key","payment_webhook_secret"];for(const[r,l]of Object.entries(a))s.includes(r)?l&&!l.startsWith("â€¢")&&l.trim()!==""&&(n[r]=l.trim()):n[r]=l;const{error:o}=await b.from("site_settings").upsert({id:1,...n});if(t&&(t.disabled=!1,t.innerHTML="ðŸ’¾ Save Deploy & Payment Settings"),o){g(o.message,"error");return}g("Deploy & payment settings saved!"),jt()};async function za(e="deploy"){const{data:t}=await b.from("site_settings").select("deploy_webhook,production_url,github_repo").limit(1).maybeSingle();if(!t?.deploy_webhook)return g("No webhook URL set. Add your deploy webhook in the settings below.","info"),{ok:!1,reason:"missing_webhook"};let i=t.deploy_webhook;try{const a=new URL(i);e==="rebuild"&&a.searchParams.set("rebuild","1"),i=a.toString()}catch{e==="rebuild"&&(i+=(i.includes("?")?"&":"?")+"rebuild=1")}return{ok:!0,settings:t,hookUrl:i}}async function xe(e,t={}){const i=t.version||new Date().toISOString(),a={source:"admin-dashboard",mode:t.mode||"deploy",production_url:t.productionUrl||null,github_repo:t.githubRepo||null,webhook:t.webhook||null,message:t.message||null},{data:n,error:s}=await b.from("deployment_history").insert({version:i,status:e,triggered_by_email:T.user?.email||null,metadata:a,error_message:t.errorMessage||null}).select("id").limit(1).maybeSingle();return{data:n,error:s}}function Ue(e,t,i,a){if(!e)return;e.disabled=t;const n=e.querySelector("p.text-xs.font-black");n&&(n.textContent=t?i:a)}window.triggerDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-deploy-btn]");Ue(t,!0,"Deployingâ€¦","Deploy Now");try{const i=await za("deploy");if(!i.ok)return;const{settings:a,hookUrl:n}=i;await xe("preparing",{mode:"deploy",productionUrl:a.production_url,githubRepo:a.github_repo,webhook:n,message:"Deployment queued from admin UI"});const s=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"deploy",source:"admin-dashboard",at:new Date().toISOString()})});if(s.ok)g("ðŸš€ Deployment triggered! Your site will be live in ~2 minutes."),await xe("deploying",{mode:"deploy",productionUrl:a.production_url,githubRepo:a.github_repo,webhook:n,message:"Webhook accepted deployment request"}),setTimeout(()=>jt(),400);else{const o=`Webhook returned error: ${s.status}`;g(o,"error"),await xe("failed",{mode:"deploy",productionUrl:a.production_url,githubRepo:a.github_repo,webhook:n,errorMessage:o})}}catch(i){g("Deploy failed: "+i.message,"error"),await xe("failed",{mode:"deploy",errorMessage:i.message})}finally{Ue(t,!1,"Deployingâ€¦","Deploy Now")}};window.triggerRebuild=async function(e){const t=e?.currentTarget||document.querySelector("[data-rebuild-btn]");Ue(t,!0,"Rebuildingâ€¦","Rebuild Site");try{const i=await za("rebuild");if(!i.ok)return;const{settings:a,hookUrl:n}=i;await xe("building",{mode:"rebuild",productionUrl:a.production_url,githubRepo:a.github_repo,webhook:n,message:"Rebuild requested from admin UI"});const s=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"rebuild",source:"admin-dashboard",at:new Date().toISOString()})});if(s.ok)g("ðŸ”„ Rebuild triggered successfully."),await xe("deploying",{mode:"rebuild",productionUrl:a.production_url,githubRepo:a.github_repo,webhook:n,message:"Webhook accepted rebuild request"}),setTimeout(()=>jt(),400);else{const o=`Rebuild webhook error: ${s.status}`;g(o,"error"),await xe("failed",{mode:"rebuild",productionUrl:a.production_url,githubRepo:a.github_repo,webhook:n,errorMessage:o})}}catch(i){g("Rebuild failed: "+i.message,"error"),await xe("failed",{mode:"rebuild",errorMessage:i.message})}finally{Ue(t,!1,"Rebuildingâ€¦","Rebuild Site")}};window.publishAndDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-publish-easy-btn]");Ue(t,!0,"Publishingâ€¦","One-Click Publish");try{const i=document.getElementById("deploy-form");if(!i){g("Deploy form is not available. Reload and try again.","error");return}await window.saveDeploySettings({preventDefault(){},target:i}),await window.triggerDeploy()}catch(i){g("Publish failed: "+i.message,"error")}finally{Ue(t,!1,"Publishingâ€¦","One-Click Publish")}};window.reindexSearch=async function(){const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),i=t?.textContent||"";t&&(t.textContent="Reindexingâ€¦");try{const{data:a,error:n}=await b.from("showroom_listings").select("id, updated_at").order("updated_at",{ascending:!1});if(n)return X(n)?g("âš ï¸ Reindex blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):g("Could not load listings to reindex: "+n.message,"error");const s=a||[];if(!s.length){g("No listings to reindex.");return}let o=0,r=0,l=!1;const c=40;for(let u=0;u<s.length;u+=c){const m=s.slice(u,u+c),{error:f}=await b.from("showroom_listings").update({updated_at:new Date().toISOString()}).in("id",m.map(h=>h.id));f?(X(f)&&(l=!0),r+=m.length):o+=m.length,t&&(t.textContent=`Reindexingâ€¦ ${Math.min(u+c,s.length)}/${s.length}`)}if(l){g(`âš ï¸ Reindex partially blocked: database admin role rejected some writes. Re-run the admin permission migration. (${o}/${s.length} done)`,"error");return}g(`Search index rebuilt for ${o} listing${o!==1?"s":""}${r?` (${r} failed)`:""}.`,r?"error":"success")}catch(a){g("Reindex failed: "+a.message,"error")}finally{t&&(t.textContent=i)}};window.syncShowroomToDB=async function(){if(!Array.isArray(se)||!se.length){g("No static showroom listings found to sync.","info");return}const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),i=t?.textContent||"";t&&(t.textContent="Syncingâ€¦");try{const{data:a,error:n}=await b.from("showroom_listings").select("property_id");if(n)return X(n)?g("âš ï¸ Sync blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):g("Could not load existing listings: "+n.message,"error");const s=new Set((a||[]).map(m=>m.property_id)),o=se.filter(m=>m&&m.property_id&&!s.has(m.property_id));if(!o.length){g("Showroom already in sync â€” no new listings to add.");return}let r=0,l=0,c=!1;const u=20;for(let m=0;m<o.length;m+=u){const f=o.slice(m,m+u).map(p=>({property_id:p.property_id,listing_type:p.listing_type||"product",category:p.category||null,subcategory:p.subcategory||null,title:p.title||"Untitled Listing",description:p.description||"",price:parseFloat(p.price)||0,currency:p.currency||"USD",country:p.country||"",country_code:p.country_code||"",state:p.state||"",city:p.city||"",town:p.town||"",product_location:p.product_location||"",latitude:p.latitude??null,longitude:p.longitude??null,property_type:p.property_type||null,listing_status:p.listing_status||"sale",bedrooms:p.bedrooms??null,bathrooms:p.bathrooms??null,building_size:p.building_size||"",land_size:p.land_size||"",parking_spaces:p.parking_spaces??null,furnished:p.furnished||"",features:Array.isArray(p.features)?p.features:[],tags:Array.isArray(p.tags)?p.tags:[],highlights:Array.isArray(p.highlights)?p.highlights:[],seo_keywords:Array.isArray(p.seo_keywords)?p.seo_keywords:[],images:Array.isArray(p.images)?p.images:[],brand:p.brand||null,color:p.color||null,size:p.size||null,condition:p.condition||null,warranty:p.warranty||null,availability_status:p.availability_status||"In Stock",stock_quantity:p.stock_quantity!=null?parseInt(p.stock_quantity,10):null,is_active:p.is_active!==!1,is_featured:!!p.is_featured,is_ai_generated:!!p.is_ai_generated,ai_generated_fields:Array.isArray(p.ai_generated_fields)?p.ai_generated_fields:[],specifications:p.specifications||{},created_at:p.created_at||new Date().toISOString()})),{error:h}=await b.from("showroom_listings").insert(f);h?(X(h)&&(c=!0),l+=f.length):r+=f.length,t&&(t.textContent=`Syncingâ€¦ ${Math.min(m+u,o.length)}/${o.length}`)}if(c){g(`âš ï¸ Sync partially blocked: database admin role rejected some inserts. Re-run the admin permission migration. (${r}/${o.length} added)`,"error");return}g(`Showroom synced: ${r} new listing${r!==1?"s":""} added to the database${l?` (${l} failed)`:""}.`,l?"error":"success")}catch(a){g("Sync failed: "+a.message,"error")}finally{t&&(t.textContent=i)}};window.testGitHubConnection=async function(){const e=document.querySelector("[name=github_username]")?.value?.trim(),t=document.querySelector("[name=github_repo]")?.value?.trim();if(!e||!t){g("Enter your GitHub username and repo name first","info");return}try{const i=await fetch(`https://api.github.com/repos/${e}/${t}`);if(i.ok){const a=await i.json();g(`âœ“ Connected: ${a.full_name} (${a.visibility})`)}else i.status===404?g("Repository not found. Check username and repo name.","error"):g("GitHub API error: "+i.status,"error")}catch{g("Could not reach GitHub API","error")}};window.deployToProduction=window.triggerDeploy;window.rebuildSite=window.triggerRebuild;const Ka=30,W={category:null,page:0,query:""};async function Ye(){const e=document.getElementById("content");if(!e)return;await ri();const t=new Set($t()),i=sn();W.category||(W.category=i[0]?.slug||null);const a=0,n=W.query.trim().toLowerCase(),s=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-xl font-black text-white">Generated Catalog</h2>
        <p class="text-xs text-gray-500 mt-1">Deterministic storefront items. Hiding a listing removes it from the site everywhere â€” including direct links.</p>
      </div>
      <button onclick="catalogResetHidden()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition">Show All Hidden</button>
    </div>`,o=`
    <div class="flex flex-wrap gap-2">
      ${i.map(f=>`<button onclick="catalogSetCategory('${f.slug}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${W.category===f.slug?"bg-blue-500/20 text-blue-200 border-blue-500/40":"bg-white/5 text-gray-400 border-white/10 hover:text-white"}">${d(f.name)}</button>`).join("")}
    </div>`,r=`
    <div class="flex flex-wrap items-center gap-2">
      <input id="catalog-search-input" class="input-field flex-1 min-w-[220px]" placeholder="Search title, id or subcategoryâ€¦" value="${d(W.query)}" onkeyup="if (event.key === 'Enter') catalogSearch()">
      <button onclick="catalogSearch()" class="btn-press px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition">Search</button>
    </div>`;let l=[];const c=l.length?l.map(f=>{const h=t.has(f.property_id),p=f.images&&f.images[0]||"/fallback.svg";return`
          <div class="flex items-center gap-3 p-3 rounded-xl border ${h?"border-red-500/25 bg-red-500/5":"border-white/10 bg-white/[0.02]"}">
            <img src="${d(p)}" alt="" class="w-12 h-12 rounded-lg object-cover bg-gray-800 shrink-0" loading="lazy">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-white truncate">${d(f.title)}</p>
              <p class="text-[11px] text-gray-500 truncate">${d(f.property_id)} Â· ${d(f.subcategory||f.category||"")} Â· ${aa(f.price,"USD")}</p>
            </div>
            ${Q(!h)}
            <button onclick="catalogToggle('${d(f.property_id)}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${h?"bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25":"bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20"}">
              ${h?"Show":"Hide"}
            </button>
          </div>`}).join(""):'<div class="text-center py-16 text-gray-500 text-sm">No catalog items match.</div>',u=n?1:Math.max(1,Math.ceil(a/Ka)),m=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <p class="text-xs text-gray-500">${n?`${l.length} match`:`${a.toLocaleString()} items in ${d("")}`} Â· ${t.size} hidden</p>
      <div class="flex items-center gap-2">
        <button onclick="catalogPage(-1)" ${W.page<=0?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Prev</button>
        <span class="text-xs text-gray-500">Page ${W.page+1} / ${u}</span>
        <button onclick="catalogPage(1)" ${W.page>=u-1?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Next</button>
      </div>
    </div>`;e.innerHTML=`
    <div class="space-y-4 fade-in">
      ${s}
      ${o}
      ${r}
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 space-y-2">${c}</div>
      ${m}
    </div>`,window.lucide&&lucide.createIcons()}window.catalogSetCategory=function(e){W.category=e,W.page=0,W.query="",Ye()};window.catalogSearch=function(){const e=document.getElementById("catalog-search-input");W.query=e?e.value:"",W.page=0,Ye()};window.catalogPage=function(e){const i=W.query.trim()?1:Math.max(1,Math.ceil(0/Ka));W.page=Math.max(0,Math.min(i-1,W.page+e)),Ye()};window.catalogToggle=async function(e){const t=!$t().includes(e),i=await Oe(e,t);g(t?"Listing hidden from storefront":"Listing restored",i.ok?"success":"info"),Ye()};window.catalogResetHidden=async function(){await un(),g("All hidden catalog listings restored"),Ye()};(function(){if(!(!window.history||!window.history.pushState)){try{window.history.replaceState({adminGuard:1},document.title,window.location.href),window.history.pushState({adminGuard:2},document.title,window.location.href)}catch{return}window.addEventListener("popstate",function(t){t.state&&t.state.adminGuard===1&&window.location.replace("/")})}})();async function Ui(){window.lucide&&lucide.createIcons(),na(),await Tn(),b.auth.onAuthStateChange((e,t)=>{if(e==="SIGNED_OUT"){T.user=null;const i=document.getElementById("login-screen");i&&(i.style.display="flex")}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ui):Ui();
