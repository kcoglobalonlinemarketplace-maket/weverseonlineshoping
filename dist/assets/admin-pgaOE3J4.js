import"./modulepreload-polyfill-B5Qt9EMX.js";import{_ as qa,S as re}from"./showroom-data-B_6YqRLg.js";import{supabase as y}from"./supabase-client-nvpjTmO6.js";import{C as Gi,g as mt,a as Oe,A as Vi}from"./localization-m4gKtAlW.js";import{patchLocalShowroomListing as Vt,getLocalShowroomListingById as De,removeLocalShowroomListing as it,upsertLocalShowroomListing as bt,listLocalShowroomListings as xt}from"./local-showroom-store-mzP0nSoS.js";import{P as Ha,a as Ga,T as Va,M as Wa}from"./motorhome-data-CupbOvk0.js";import{g as Wi}from"./catalog-CWML433J.js";import{i as zi}from"./promo-backgrounds-BZhAn4aI.js";import{i as za,D as Yi}from"./site-content-DxInYU0I.js";import{M as Ki,n as Ji,a as Qi}from"./categories-5zVhBEjq.js";import{l as Xi,v as Zi}from"./video-frames-mPOUp41n.js";import{saveCatalogHidden as qe,loadHiddenCatalogIds as la,getHiddenCatalogIds as _t,resetHiddenCatalogIds as en}from"./catalog-hidden-store-DROVVFIz.js";/* empty css                                       */const B=1,O=5e6,tn=[{id:"prod-smartphone",listingType:"product",category:"Phones",subcategory:"Smartphones",label:"Flagship Smartphone",brand:"Global Mobile",model:"X Pro",color:"Midnight Black",size:"6.7-inch",condition:"New",features:["5G connectivity","OLED display","Fast charging","Unlocked","Premium cameras"],highlights:["Retail-ready packaging","Strong search demand","Ideal for global shipping"],keywords:["smartphone","mobile phone","5g"],descriptionType:"phone"},{id:"prod-laptop",listingType:"product",category:"Computers & Laptops",subcategory:"Laptops",label:"Performance Laptop",brand:"NorthBridge",model:"Studio 14",color:"Silver",size:"14-inch",condition:"New",features:["Fast processor","SSD storage","Long battery life","Portable chassis","Business-ready design"],highlights:["Suitable for work and study","Premium margin band","Global audience appeal"],keywords:["laptop","notebook","computer"],descriptionType:"laptop"},{id:"prod-tv",listingType:"product",category:"Electronics",subcategory:"Smart TVs",label:"4K Smart TV",brand:"VistaHome",model:"UltraView",color:"Black",size:"65-inch",condition:"New",features:["4K panel","Streaming apps","HDR support","Voice control","Slim bezel"],highlights:["Living-room centerpiece","Popular premium electronics segment"],keywords:["tv","smart tv","home electronics"],descriptionType:"electronics"},{id:"prod-watch",listingType:"product",category:"Watches",subcategory:"Luxury Watches",label:"Luxury Wristwatch",brand:"Aurelius",model:"Chrono 8",color:"Gold / Black",size:"42mm",condition:"New",features:["Precision movement","Premium case","Gift-ready presentation","Water resistance","Collector appeal"],highlights:["High perceived value","Strong gifting category"],keywords:["watch","luxury watch","timepiece"],descriptionType:"luxury"},{id:"prod-jewelry",listingType:"product",category:"Jewelry",subcategory:"Fine Jewelry",label:"Fine Jewelry Set",brand:"Maison Valeur",model:"Signature Set",color:"Gold",size:"Adjustable",condition:"New",features:["Premium finish","Gift packaging","Occasion-ready","Elegant styling"],highlights:["High-value presentation","Wedding and celebration demand"],keywords:["jewelry","necklace","bracelet"],descriptionType:"luxury"},{id:"prod-handbag",listingType:"product",category:"Bags & Accessories",subcategory:"Designer Bags",label:"Designer Handbag",brand:"Rue Maison",model:"Carry All",color:"Tan",size:"Medium",condition:"New",features:["Structured silhouette","Premium hardware","Travel-friendly storage","Retail-ready finish"],highlights:["Fashion-forward listing","Broad international demand"],keywords:["handbag","designer bag","accessories"],descriptionType:"fashion"},{id:"prod-sneakers",listingType:"product",category:"Shoes",subcategory:"Premium Sneakers",label:"Premium Sneakers",brand:"RunNorth",model:"Air Flex",color:"White",size:"EU 42",condition:"New",features:["Comfort cushioning","Streetwear styling","Durable outsole","Daily wear ready"],highlights:["High-conversion category","Easy multi-country merchandising"],keywords:["sneakers","shoes","fashion"],descriptionType:"fashion"},{id:"prod-sofa",listingType:"product",category:"Furniture",subcategory:"Living Room",label:"Luxury Sofa Set",brand:"Grand Habitat",model:"Residence 3-Piece",color:"Sand Beige",size:"3-Piece Set",condition:"New",features:["Premium upholstery","Statement living-room piece","Comfort seating","Interior-ready styling"],highlights:["Large-ticket home category","Ideal for premium households"],keywords:["sofa","furniture","living room"],descriptionType:"home"},{id:"prod-generator",listingType:"product",category:"Home & Kitchen",subcategory:"Power Solutions",label:"Backup Power Generator",brand:"VoltWorks",model:"SilentMax",color:"Graphite",size:"7.5kVA",condition:"New",features:["Reliable backup power","Low-noise housing","Residential and business use","Heavy-duty build"],highlights:["Practical high-demand utility item","Useful in many markets"],keywords:["generator","power","backup power"],descriptionType:"industrial"},{id:"prod-drone",listingType:"product",category:"Cameras & Photography",subcategory:"Drones",label:"Pro Camera Drone",brand:"SkyFrame",model:"Aerial 4K",color:"Gray",size:"Foldable",condition:"New",features:["4K stabilized video","GPS return home","Portable folding frame","Creator-ready footage"],highlights:["Strong visual listing appeal","Premium creator equipment"],keywords:["drone","camera drone","aerial"],descriptionType:"electronics"},{id:"prod-grocery",listingType:"product",category:"Food & Groceries",subcategory:"Family Essentials",label:"Family Grocery Bundle",brand:"Market Select",model:"Household Pack",color:"Mixed",size:"Bulk Pack",condition:"New",features:["Everyday essentials","Bulk value","Family sized","Easy repeat orders"],highlights:["Fast-moving everyday goods","Useful across broad regions"],keywords:["groceries","food bundle","household essentials"],descriptionType:"daily"},{id:"prod-scale-house",listingType:"product",category:"Home & Kitchen",subcategory:"Model Houses",label:"Architectural Model House",brand:"Studio Form",model:"Estate Miniature",color:"Natural Wood",size:"1:50 Scale",condition:"New",features:["Collector display piece","Detailed craftsmanship","Interior decor appeal","Gift-ready packaging"],highlights:["Supports the model-house use case","Works for decor and collector audiences"],keywords:["model house","architectural model","collector decor"],descriptionType:"home"},{id:"veh-sedan",listingType:"product",category:"Cars",subcategory:"Sedans",label:"Executive Sedan",brand:"Summit Motors",model:"S Line",color:"Pearl White",size:"Mid-size",condition:"Used - Like New",features:["Comfortable cabin","Road-trip ready","Well-maintained presentation","Family and executive appeal"],highlights:["Vehicle posts support 24-image galleries","Map-ready listing"],keywords:["car","sedan","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-suv",listingType:"product",category:"Cars",subcategory:"SUVs",label:"Family SUV",brand:"Frontier Auto",model:"Terrain X",color:"Obsidian",size:"7-Seater",condition:"Used - Like New",features:["Spacious seating","Utility-focused cargo room","Suitable for families","Road and city versatility"],highlights:["High-demand automotive segment","Works well with showroom map"],keywords:["suv","family car","vehicle"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-luxury",listingType:"product",category:"Luxury Cars",subcategory:"Luxury Vehicles",label:"Luxury Performance Car",brand:"Regal Automotive",model:"Imperium GT",color:"Metallic Black",size:"Coupe",condition:"Used - Like New",features:["Prestige brand positioning","Performance styling","Collector-level appeal","Premium interior"],highlights:["Supports the requested high-ticket range","Designed for showroom-style luxury listings"],keywords:["luxury car","sports car","supercar"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-motorcycle",listingType:"product",category:"Motorcycles",subcategory:"Street Bikes",label:"Sport Motorcycle",brand:"Velocity Moto",model:"R 900",color:"Red",size:"900cc",condition:"Used - Like New",features:["Agile handling","Performance design","Lifestyle buyer appeal","Weekend-ready machine"],highlights:["Automotive category with image-rich display"],keywords:["motorcycle","bike","sport bike"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-commercial",listingType:"product",category:"Commercial Vehicles",subcategory:"Utility Vehicles",label:"Commercial Utility Vehicle",brand:"FleetCore",model:"CargoPro",color:"White",size:"Long wheelbase",condition:"Used - Good",features:["Business-ready load space","Fleet-friendly purchase","Service history presentation","Commercial utility"],highlights:["Suitable for business buyers","Map-ready logistics listing"],keywords:["commercial vehicle","cargo van","fleet"],requiredImageCount:24,descriptionType:"vehicle"},{id:"veh-boat",listingType:"product",category:"Boats & Marine",subcategory:"Leisure Boats",label:"Leisure Boat",brand:"BlueHarbor",model:"Coastline 28",color:"Navy / White",size:"28 ft",condition:"Used - Like New",features:["Marina-ready presentation","Leisure and charter appeal","Premium leisure category"],highlights:["Large-format gallery support","High-ticket recreational listing"],keywords:["boat","marine","yacht"],requiredImageCount:24,descriptionType:"vehicle"}],an=[{id:"prop-apartment",listingType:"property",category:"Real Estate",subcategory:"Apartments",label:"City Apartment",propertyType:"Apartment",bedrooms:2,bathrooms:2,buildingSize:"1,150 sqft",landSize:"",furnished:"Furnished",features:["Secure access","Modern kitchen","Prime urban access","Balcony or city views"],highlights:["Strong urban demand","Good for short and long stay buyers"],keywords:["apartment","real estate","city home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-condo",listingType:"property",category:"Real Estate",subcategory:"Condos",label:"Modern Condo",propertyType:"Condo",bedrooms:3,bathrooms:2,buildingSize:"1,450 sqft",landSize:"",furnished:"Furnished",features:["Managed building","Amenity access","Contemporary finish","Secure parking"],highlights:["Works across major global markets"],keywords:["condo","property","home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-townhouse",listingType:"property",category:"Real Estate",subcategory:"Townhouses",label:"Townhouse Residence",propertyType:"Townhouse",bedrooms:4,bathrooms:3,buildingSize:"2,000 sqft",landSize:"0.08 acres",furnished:"Unfurnished",features:["Multi-level layout","Family-ready plan","Private entry","Parking included"],highlights:["Popular residential ownership format"],keywords:["townhouse","residence","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-villa",listingType:"property",category:"Real Estate",subcategory:"Villas",label:"Private Villa",propertyType:"Villa",bedrooms:5,bathrooms:5,buildingSize:"4,800 sqft",landSize:"0.4 acres",furnished:"Furnished",features:["Private outdoor space","Premium architecture","Luxury entertaining zones","Prestige location potential"],highlights:["Premium property tier","Designed for international buyers"],keywords:["villa","luxury property","real estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-mansion",listingType:"property",category:"Real Estate",subcategory:"Mansions",label:"Luxury Mansion",propertyType:"Mansion",bedrooms:8,bathrooms:10,buildingSize:"12,000 sqft",landSize:"1.2 acres",furnished:"Furnished",features:["Grand entrance","High-end interior finishes","Staff or guest quarters","Statement curb appeal"],highlights:["Matches the mansion requirement directly","Supports high-ticket luxury listings"],keywords:["mansion","estate","luxury home"],requiredImageCount:24,descriptionType:"property"},{id:"prop-beach",listingType:"property",category:"Real Estate",subcategory:"Beach Houses",label:"Beachfront House",propertyType:"Beach House",bedrooms:4,bathrooms:4,buildingSize:"3,600 sqft",landSize:"0.25 acres",furnished:"Furnished",features:["Waterfront views","Outdoor leisure space","Vacation-rental appeal","Premium lifestyle positioning"],highlights:["Ideal for tourism and lifestyle markets"],keywords:["beach house","waterfront home","property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-farm",listingType:"property",category:"Real Estate",subcategory:"Farm Houses",label:"Farm House Estate",propertyType:"Farm House",bedrooms:4,bathrooms:3,buildingSize:"3,100 sqft",landSize:"5 acres",furnished:"Unfurnished",features:["Land-rich asset","Agricultural potential","Quiet residential use","Outbuilding opportunity"],highlights:["Suitable for rural and suburban regions"],keywords:["farm house","landed property","estate"],requiredImageCount:24,descriptionType:"property"},{id:"prop-commercial",listingType:"property",category:"Real Estate",subcategory:"Commercial Buildings",label:"Commercial Building",propertyType:"Commercial Building",bedrooms:0,bathrooms:4,buildingSize:"8,500 sqft",landSize:"0.35 acres",furnished:"Unfurnished",features:["Business district potential","Mixed-use flexibility","Visible frontage","Investor-ready asset class"],highlights:["Attractive for business buyers and investors"],keywords:["commercial building","office","investment property"],requiredImageCount:24,descriptionType:"property"},{id:"prop-hotel",listingType:"property",category:"Real Estate",subcategory:"Hotels",label:"Boutique Hotel",propertyType:"Hotel",bedrooms:18,bathrooms:20,buildingSize:"15,000 sqft",landSize:"0.75 acres",furnished:"Furnished",features:["Hospitality-ready layout","Guest-focused amenities","Tourism and corporate appeal","Revenue asset potential"],highlights:["Supports hospitality listings globally"],keywords:["hotel","hospitality","investment"],requiredImageCount:24,descriptionType:"property"},{id:"prop-land",listingType:"property",category:"Real Estate",subcategory:"Land",label:"Development Land",propertyType:"Land",bedrooms:0,bathrooms:0,buildingSize:"",landSize:"10 acres",furnished:"",features:["Development potential","Flexible use case","Long-term investment appeal","Location-led value"],highlights:["Useful for land banking and development"],keywords:["land","plot","development"],requiredImageCount:24,descriptionType:"property"}],Ya=[...tn,...an];function da(e){return Gi[e]||"USD"}function Ka(e,t){return Ya.filter(a=>a.listingType!==e?!1:t?a.category===t:!0)}function nn(e,t){const a=Math.max(B,Math.min(O,Number(e)||B));return new Intl.NumberFormat("en-US",{style:"currency",currency:t,maximumFractionDigits:0}).format(a)}function rn(e,t,a,i,n){const r=nn(i,a);return e.descriptionType==="vehicle"?`${e.label} listed at ${r}. This template is intended to present a complete automotive post with exterior, interior, condition, performance, and gallery details in a clean showroom-style format.`:e.descriptionType==="property"?`${e.label} located in ${n}. Offered at ${r}, this property template is designed for a complete real-estate presentation with map-ready location data, rich visual gallery coverage, and buyer-friendly highlights covering layout, lifestyle, and investment value.`:e.descriptionType==="phone"?`${e.label} listed at ${r}. The template focuses on a clean premium device presentation with brand, model, condition, core features, and strong online merchandising copy.`:e.descriptionType==="laptop"?`${e.label} listed at ${r}. Built for marketplace listings that need clear performance positioning, specification highlights, and an easy-to-scan description for students, professionals, and remote workers.`:e.descriptionType==="luxury"?`${e.label} listed at ${r}. This template supports high-value presentation with polished positioning, premium selling points, and a strong showroom-style description.`:e.descriptionType==="fashion"?`${e.label} listed at ${r}. This product template highlights styling, quality, and day-to-day appeal while keeping the listing easy to customize.`:e.descriptionType==="home"?`${e.label} listed at ${r}. The listing copy is structured for shoppers looking for quality presentation, reliable detail, and visual merchandising support.`:e.descriptionType==="industrial"?`${e.label} listed at ${r}. This template emphasizes practical use, dependable performance, and business or household value in a straightforward format.`:e.descriptionType==="daily"?`${e.label} listed at ${r}. The copy is designed for repeat-buy categories with clear value messaging and broad buyer appeal.`:`${e.label} listed at ${r}. This template generates a clean, marketable listing with ready-made highlights, keywords, and presentation details.`}function Ja({templateId:e,listingType:t,category:a,countryCode:i,currency:n,price:r}){const s=Ya.find(m=>m.id===e&&m.listingType===t);if(!s)return null;const l=mt(i)||Oe[0],o=n||da(l.code),c=[l.name].filter(Boolean).join(", "),u={category:s.category||a||(t==="property"?"Real Estate":"Other"),subcategory:s.subcategory||s.label,title:t==="property"?`${s.label} in ${l.name}`:s.label,description:rn(s,l,o,r,c),currency:o,features:[...s.features],highlights:[...s.highlights||[]],seo_keywords:[...new Set([s.category,s.subcategory,s.label,...t==="property"?[l.name]:[],...s.keywords||[]].filter(Boolean))],requiredImageCount:s.requiredImageCount||0};return t==="property"?{...u,country:l.name,country_code:l.code,product_location:l.name,property_type:s.propertyType||s.label,bedrooms:s.bedrooms??null,bathrooms:s.bathrooms??null,building_size:s.buildingSize||"",land_size:s.landSize||"",furnished:s.furnished||""}:{...u,brand:s.brand||"",model:s.model||"",color:s.color||"",size:s.size||"",condition:s.condition||"New"}}const Qa="kco_payment_settings_v1",sn=[{currency:"USD",currencyName:"United States Dollar",flag:"US",country:"United States",bankName:"Citibank",transferType:"Local & International",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"70589490002447647",accountType:"Checking",iban:"",swift:"CITIUS33",routing:"031100209",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:"111 Wall Street, New York, NY 10043, USA"},{currency:"GBP",currencyName:"British Pound",flag:"GB",country:"United Kingdom",bankName:"Citibank",transferType:"Local & International",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"56468624",accountType:"",iban:"GB94CITI18500856468624",swift:"CITIGB2L",routing:"",sortCode:"185008",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:"Canada Square, Canary Wharf, London E14 5LB, United Kingdom"},{currency:"EUR",currencyName:"Euro",flag:"EU",country:"Eurozone",bankName:"Citibank",transferType:"Local & International",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"",accountType:"",iban:"IE70CITI99005171297018",swift:"CITIIE2X",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:"1 North Wall Quay, IFSC, Dublin 1, Ireland"},{currency:"CAD",currencyName:"Canadian Dollar",flag:"CA",country:"Canada",bankName:"Citibank NA Canadian Branch",transferType:"Local Transfer",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"3001440544",accountType:"Checking",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"0328",transitNumber:"20012",bsbCode:"",address:"123 Front St. West, Toronto, ON M5J 2M3, Canada"},{currency:"AUD",currencyName:"Australian Dollar",flag:"AU",country:"Australia",bankName:"Citibank",transferType:"Local & International",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"10674571",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"248024",address:"2 Park Street, Sydney NSW 2000, Australia"},{currency:"SGD",currencyName:"Singapore Dollar",flag:"SG",country:"Singapore",bankName:"Citibank N.A. Singapore Branch",transferType:"Local & International",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"44990709533",accountType:"",iban:"",swift:"CITISGSG",routing:"",sortCode:"",bankCode:"7214",branchCode:"001",institutionNumber:"",transitNumber:"",bsbCode:"",address:"8 Marina View, #17-01 Asia Square Tower 1, Singapore 018960"},{currency:"JPY",currencyName:"Japanese Yen",flag:"JP",country:"Japan",bankName:"MUFG Bank Ltd.",transferType:"Local Transfer",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"4682719",accountType:"Savings / Futsu",iban:"",swift:"",routing:"",sortCode:"",bankCode:"0005",branchCode:"869",institutionNumber:"",transitNumber:"",bsbCode:"",address:"7-1 Marunouchi 2-Chome, Chiyoda-ku, Tokyo, Japan"},{currency:"MXN",currencyName:"Mexican Peso",flag:"MX",country:"Mexico",bankName:"Sistema de Transferencias y Pagos",transferType:"Local Transfer",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"646010504200345127",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"646",branchCode:"010",institutionNumber:"",transitNumber:"",bsbCode:"",address:"Av. Insurgentes Sur 1425, Ciudad de México, México"},{currency:"IDR",currencyName:"Indonesian Rupiah",flag:"ID",country:"Indonesia",bankName:"Deutsche Bank AG Jakarta Branch",transferType:"Local Transfer",beneficiary:"KENNETH CHIDERA ODENYI",accountNumber:"974400000904",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"0670304",institutionNumber:"",transitNumber:"",bsbCode:"",address:"Jl. Imam Bonjol 80, Jakarta 10310, Indonesia"}];function ca(e){if(!e||e.length!==2)return"🏦";const t=e.toUpperCase().split("").map(a=>127462+a.charCodeAt(0)-65);try{return String.fromCodePoint(...t)}catch{return"🏦"}}function on(){try{const e=localStorage.getItem(Qa);return e?JSON.parse(e):null}catch{return null}}function ln(e){try{localStorage.setItem(Qa,JSON.stringify(e))}catch{}}function gt(e,t=0){const a=e.country_code||e.flag||(e.currency==="EUR"?"EU":"US"),i=e.country||mt(a)?.name||"",n=(e.currency||"USD").toUpperCase();return{id:e.id||`bank-${t+1}`,currency:n,currencyName:e.currencyName||e.currency_name||n,flag:e.flag&&e.flag.length>2?e.flag:ca(a),country:i,country_code:a,bankName:e.bankName||e.bank_name||"",transferType:e.transferType||e.transfer_type||"Bank Transfer",beneficiary:e.beneficiary||e.accountName||e.account_name||"",accountNumber:e.accountNumber||e.account_number||"",accountType:e.accountType||e.account_type||"",iban:e.iban||"",swift:e.swift||"",routing:e.routing||"",sortCode:e.sortCode||e.sort_code||"",bankCode:e.bankCode||e.bank_code||"",branchCode:e.branchCode||e.branch_code||"",institutionNumber:e.institutionNumber||e.institution_number||"",transitNumber:e.transitNumber||e.transit_number||"",bsbCode:e.bsbCode||e.bsb_code||"",address:e.address||""}}function dn(e=[]){return e.map((t,a)=>gt(t,a)).filter(t=>t.currency&&(t.accountNumber||t.iban||t.swift||t.routing||t.sortCode||t.bankCode||t.branchCode||t.institutionNumber||t.transitNumber||t.bsbCode))}function cn(e={}){const t=[];return(e.bank1_account_name||e.bank1_account_number||e.bank1_bank_name)&&t.push(gt({id:"bank-1",currency:e.bank1_currency||"USD",country:e.bank1_country||mt("US")?.name||"United States",country_code:e.bank1_country_code||"US",bank_name:e.bank1_bank_name,transfer_type:e.bank1_transfer_type,account_name:e.bank1_account_name,account_number:e.bank1_account_number,sort_code:e.bank1_sort_code},0)),(e.bank2_account_name||e.bank2_account_number||e.bank2_bank_name)&&t.push(gt({id:"bank-2",currency:e.bank2_currency||"USD",country:e.bank2_country||mt("US")?.name||"United States",country_code:e.bank2_country_code||"US",bank_name:e.bank2_bank_name,transfer_type:e.bank2_transfer_type,account_name:e.bank2_account_name,account_number:e.bank2_account_number,sort_code:e.bank2_sort_code},1)),t}function un(e={}){const t=dn(e.manual_payment_accounts||[]);if(t.length>0)return t;const a=cn(e);return a.length>0?a:sn.map((i,n)=>gt(i,n))}function pn(e={}){return e.manual_payment_instructions||"Transfer the exact order amount to the bank account shown below. After payment, upload your receipt for verification. Once your receipt is verified, your goods will be shipped immediately."}let qt=null;async function mn(){return qt||(qt=qa(()=>import("./pdf-ksa_hnld.js"),[]).then(e=>{try{e.GlobalWorkerOptions.workerSrc=new URL("/assets/pdf.worker.min-yatZIOMy.mjs",import.meta.url).toString()}catch{}return e})),qt}function bn(e,t){return e.toDataURL("image/jpeg",t)}async function gn(e,t){const a=e.getViewport({scale:1}),i=Math.min(3,Math.max(.5,t/Math.max(a.width,a.height))),n=e.getViewport({scale:i}),r=document.createElement("canvas");r.width=Math.max(1,Math.round(n.width)),r.height=Math.max(1,Math.round(n.height));const s=r.getContext("2d",{alpha:!1});return s.fillStyle="#ffffff",s.fillRect(0,0,r.width,r.height),await e.render({canvasContext:s,viewport:n}).promise,bn(r,.78)}async function yn(e,{maxDim:t=1300,maxPages:a=0,onProgress:i=()=>{}}={}){const r=await(await mn()).getDocument({url:e,useSystemFonts:!0,isEvalSupported:!1}).promise,s=r.numPages,l=a>0?Math.min(s,a):s,o=[];try{for(let c=1;c<=l;c++){i(c,l);const u=await r.getPage(c);o.push(await gn(u,t))}}finally{try{await r.destroy()}catch{}}return o}function nt(e){const t=String(e||"").toLowerCase();return t.endsWith(".pdf")||t.includes(".pdf?")||t.includes(".pdf#")}const Xa="weverseonlineshop@gmail.com",Za="Weverse Online Shop",ei="GLOBAL SHOPPING â€¢ WORLDWIDE DELIVERY",fn="https://wttnvwpoqmbxryivcerf.supabase.co".replace(/\/$/,""),hn=`${fn}/functions/v1/ai-admin-assistant`,vn=[{group:"Main",items:[{id:"dashboard",label:"Dashboard",icon:"layout-dashboard"},{id:"products",label:"Products",icon:"package"},{id:"content-settings",label:"Content Settings",icon:"file-cog"},{id:"properties",label:"Properties",icon:"home"},{id:"catalog",label:"Catalog Manager",icon:"boxes"},{id:"orders",label:"Orders",icon:"shopping-bag"},{id:"customers",label:"Customers",icon:"users"},{id:"reviews",label:"Reviews",icon:"star"},{id:"messages",label:"Messages",icon:"message-circle"},{id:"coupons",label:"Coupons",icon:"ticket"},{id:"ads",label:"Advertisements",icon:"megaphone"},{id:"notifications",label:"Notifications",icon:"bell"}]},{group:"Configuration",items:[{id:"ai",label:"AI Assistant",icon:"sparkles"},{id:"payment-settings",label:"Payment Settings",icon:"credit-card"},{id:"ai-settings",label:"AI Settings",icon:"bot"},{id:"homepage-branding",label:"Homepage Branding",icon:"image"},{id:"promo-bg",label:"Promo & Backgrounds",icon:"image"},{id:"brand",label:"Brand Manager",icon:"palette"},{id:"content",label:"Content Manager",icon:"file-text"},{id:"seo",label:"SEO Manager",icon:"search"},{id:"email",label:"Email Settings",icon:"mail"},{id:"analytics",label:"Analytics",icon:"bar-chart-3"},{id:"security",label:"Security",icon:"shield"},{id:"activity",label:"Activity Logs",icon:"activity"},{id:"backup",label:"Backup & Restore",icon:"database"},{id:"settings",label:"Settings",icon:"settings"},{id:"publish",label:"Publish & Deploy",icon:"rocket"}]}],wn={dashboard:"Dashboard",products:"Products Manager",properties:"Properties Manager",catalog:"Catalog Manager",orders:"Orders Manager",customers:"Customers Manager",reviews:"Reviews Manager",messages:"Messages & Support",coupons:"Coupons Manager",ads:"Advertisement Manager","ai-settings":"AI Settings",content:"Content Manager","content-settings":"Content Settings",ai:"AI Assistant","homepage-branding":"Homepage Branding","promo-bg":"Promo & Backgrounds",brand:"Brand Manager","payment-settings":"Payment Settings",seo:"SEO Manager",email:"Email Settings",analytics:"Analytics",security:"Security",activity:"Activity Logs",backup:"Backup & Restore",settings:"Settings",publish:"Publish & Deploy"},ti=[...Vi].sort();let I={user:null,section:"dashboard"};function d(e){if(e==null)return"";const t=document.createElement("div");return t.textContent=String(e),t.innerHTML}function ai(e,t="USD"){return`${(parseFloat(e)||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})} ${t}`}function se(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"â€”"}function Se(e){return e?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"â€”"}function kt(){return"W-"+String(Date.now()).slice(-6)+Math.floor(Math.random()*1e3).toString().padStart(3,"0")}const xn=["id","property_id","listing_type","category","subcategory","title","description","price","price_period","currency","country","country_code","state","city","town","product_location","latitude","longitude","bedrooms","bathrooms","building_size","land_size","parking_spaces","property_type","furnished","listing_status","images","features","tags","highlights","seo_keywords","specifications","brand","color","size","condition","warranty","shipping_info","delivery_estimate","weight","dimensions","storage_options","ram_options","color_options","availability_status","stock_quantity","sku","is_active","is_featured","is_ai_generated","ai_generated_fields","rating","rating_count","favorite_count","review_count","video","video_url","approval_status","published_at","created_at","updated_at","real_price","year_built","year_renovated","half_bathrooms","floors","garage","zip_code","address","landmarks","interior_features","exterior_features","home_systems","legal_info","risk_notes","floor_plan","nearby_area","verification_status","verification_date","inspection_info","documents","language_info"];function ge(e){const t={};if(!e||typeof e!="object")return t;for(const a of xn)a in e&&(t[a]=e[a]);return t}function b(e,t="success"){const a=document.getElementById("toast"),i=document.getElementById("toast-msg"),n=a.querySelector("i[data-lucide]");if(!a||!i)return;i.textContent=e;const r={success:"check-circle",error:"alert-circle",info:"info"},s={success:"text-emerald-400",error:"text-red-400",info:"text-blue-400"};n&&(n.setAttribute("data-lucide",r[t]||"info"),n.className=`w-4 h-4 shrink-0 ${s[t]||"text-blue-400"}`),a.style.transform="translateY(0)",a.style.opacity="1",window.lucide&&lucide.createIcons(),clearTimeout(a._t),a._t=setTimeout(()=>{a.style.transform="translateY(20px)",a.style.opacity="0"},3e3)}function ke(e){return!e||typeof e!="string"?!1:/^data:video\//i.test(e)?!0:e.startsWith("blob:")?!1:/\.(mp4|webm|mov|m4v|avi|mkv|ogv)(\?|#|$)/i.test(e)}function Ce(e){return e&&e.type&&e.type.startsWith("video/")}function K(e){const t={pending_verification:["bg-amber-500/10 text-amber-400 border-amber-500/20","Pending"],approved:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Approved"],rejected:["bg-red-500/10 text-red-400 border-red-500/20","Rejected"],payment_approved:["bg-blue-500/10 text-blue-400 border-blue-500/20","Paid"],order_placed:["bg-amber-500/10 text-amber-400 border-amber-500/20","Placed"],processing:["bg-indigo-500/10 text-indigo-400 border-indigo-500/20","Processing"],shipped:["bg-violet-500/10 text-violet-400 border-violet-500/20","Shipped"],in_transit:["bg-violet-500/10 text-violet-400 border-violet-500/20","In Transit"],out_for_delivery:["bg-cyan-500/10 text-cyan-400 border-cyan-500/20","Out for Delivery"],delivered:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Delivered"],cancelled:["bg-red-500/10 text-red-400 border-red-500/20","Cancelled"],active:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],inactive:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"],sale:["bg-blue-500/10 text-blue-400 border-blue-500/20","For Sale"],rent:["bg-violet-500/10 text-violet-400 border-violet-500/20","For Rent"],true:["bg-emerald-500/10 text-emerald-400 border-emerald-500/20","Active"],false:["bg-gray-500/10 text-gray-400 border-gray-500/20","Inactive"]},[a,i]=t[String(e)]||["bg-gray-500/10 text-gray-400 border-gray-500/20",d(e)||"â€”"];return`<span class="badge ${a}">${i}</span>`}function oe(){document.getElementById("modal-container").innerHTML=""}function D(e){document.getElementById("modal-container").innerHTML=e,window.lucide&&lucide.createIcons()}window.closeModal=oe;window.openModal=D;function W(e,t,a,i,n=""){const r={blue:"bg-blue-500/10 text-blue-400 border-blue-500/15",amber:"bg-amber-500/10 text-amber-400 border-amber-500/15",emerald:"bg-emerald-500/10 text-emerald-400 border-emerald-500/15",red:"bg-red-500/10 text-red-400 border-red-500/15",violet:"bg-violet-500/10 text-violet-400 border-violet-500/15",blue:"bg-blue-500/10 text-blue-400 border-blue-500/15"};return`<div class="stat-card glass-soft border border-blue-500/15 rounded-3xl p-5">
    <div class="flex items-start justify-between mb-3">
      <div class="p-3 ${r[i]||r.blue} rounded-2xl border"><i data-lucide="${a}" class="w-5 h-5"></i></div>
    </div>
    <p class="text-3xl font-black text-white">${d(t)}</p>
    <p class="text-xs text-gray-500 uppercase tracking-wide mt-1 font-bold">${d(e)}</p>
    ${n?`<p class="text-xs text-gray-600 mt-1">${d(n)}</p>`:""}
  </div>`}function He(){return'<div class="flex items-center justify-center py-24"><div class="flex items-center gap-3 text-gray-500 text-sm"><i data-lucide="loader-2" class="w-5 h-5 animate-spin text-blue-400"></i> Loadingâ€¦</div></div>'}function Ie(e,t,a,i=""){return`<div class="flex flex-col items-center justify-center py-20 text-center"><div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4"><i data-lucide="${e}" class="w-8 h-8 text-blue-400"></i></div><h3 class="text-base font-black text-white mb-1">${d(t)}</h3><p class="text-sm text-gray-500 max-w-xs">${d(a)}</p>${i?`<div class="mt-5">${i}</div>`:""}</div>`}function ii(){const e=document.getElementById("sidebar-nav");e&&(e.innerHTML=vn.map(t=>`
    <div>
      <span class="section-label">${t.group}</span>
      ${t.items.map(a=>`
        <button class="nav-item ${I.section===a.id?"active":""} w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold rounded-xl" onclick="navigate('${a.id}')">
          <i data-lucide="${a.icon}" class="w-4 h-4 shrink-0"></i>
          <span>${a.label}</span>
        </button>`).join("")}
    </div>`).join(""),window.lucide&&lucide.createIcons())}window.navigate=function(e){I.section=e;const t=wn[e]||e,a=document.getElementById("page-title");a&&(a.textContent=t),ii(),closeSidebar();const i=document.getElementById("content");i&&(i.innerHTML=He()),window.lucide&&lucide.createIcons(),({dashboard:Rn,products:E,properties:Mt,catalog:Ye,orders:Ci,customers:Cr,reviews:ot,messages:Ii,coupons:Nt,ads:ze,notifications:Lr,ai:_n,"ai-settings":Ni,"homepage-branding":Ft,"promo-bg":at,content:Ur,"content-settings":Fi,seo:zr,email:Yr,analytics:Wr,security:Rt,activity:Kr,brand:Dt,"payment-settings":oa,backup:Jr,settings:Qr,publish:Ut}[e]||(()=>{const s=document.getElementById("content");s&&(s.innerHTML=Ie("construction","Coming Soon",`${t} is being built.`))}))()};async function _n(){const e=document.getElementById("content");e&&(e.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}window.openSidebar=()=>{document.getElementById("sidebar").classList.add("open"),document.getElementById("sidebar-overlay").classList.remove("hidden")};window.closeSidebar=()=>{document.getElementById("sidebar").classList.remove("open"),document.getElementById("sidebar-overlay").classList.add("hidden")};document.getElementById("close-sidebar")?.addEventListener("click",closeSidebar);const Be="kco_admin_remember",ua="kco_login_attempts",Wt=5,kn=15*60*1e3;function H(e){const t=document.getElementById("login-error"),a=document.getElementById("login-error-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-success")?.classList.add("hidden"),window.lucide&&lucide.createIcons())}function Sn(e){const t=document.getElementById("login-success"),a=document.getElementById("login-success-text");!t||!a||(a.textContent=e,t.classList.remove("hidden"),document.getElementById("login-error")?.classList.add("hidden"))}function St(){document.getElementById("login-error")?.classList.add("hidden"),document.getElementById("login-success")?.classList.add("hidden")}function rt(e){return String(e||"").trim().toLowerCase()}function $n(){try{const e=JSON.parse(localStorage.getItem(Be)||"{}");e?.email&&!rt(e.email)&&localStorage.removeItem(Be)}catch{localStorage.removeItem(Be)}}function Pn(){try{const e=JSON.parse(localStorage.getItem(Be)||"{}");return rt(e?.email)}catch{return""}}function pa(){$n();const e=Pn(),t=document.getElementById("login-email");t&&(t.value=e||t.value||Xa,t.removeAttribute("readonly"));const a=document.getElementById("reset-email");a&&(a.value=e||a.value||"",a.removeAttribute("readonly"))}function En(){return`${window.location.origin}/admin.html`}function Le(e){const t=document.getElementById("login-header-title"),a=document.getElementById("login-header-icon");document.getElementById("login-form")?.classList.toggle("hidden",e!=="login"),document.getElementById("twofa-form")?.classList.toggle("hidden",e!=="2fa"),document.getElementById("forgot-form")?.classList.toggle("hidden",e!=="forgot"),St(),e==="login"&&(t&&(t.textContent="Admin Access"),a&&a.setAttribute("data-lucide","shield-check")),e==="2fa"&&(t&&(t.textContent="Two-Factor Auth"),a&&a.setAttribute("data-lucide","smartphone")),e==="forgot"&&(t&&(t.textContent="Reset Password"),a&&a.setAttribute("data-lucide","mail")),window.lucide&&lucide.createIcons()}function U(e,t,a=""){const i=document.getElementById(e);i&&(i.disabled=t,t?i.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline-block mr-1"></i> Please waitâ€¦':a&&(i.innerHTML=a),window.lucide&&lucide.createIcons())}function ni(){try{return JSON.parse(localStorage.getItem(ua)||'{"count":0}')}catch{return{count:0}}}function ri(){const e=ni();return e.count=(e.count||0)+1,e.count>=Wt&&(e.lockedUntil=Date.now()+kn),localStorage.setItem(ua,JSON.stringify(e)),e}function si(){localStorage.removeItem(ua)}function oi(){const e=ni();if(!e.lockedUntil)return null;const t=e.lockedUntil-Date.now();return t<=0?(si(),null):Math.ceil(t/6e4)}async function ce(e,t,a={}){try{await y.from("admin_security_logs").insert({user_id:e,event_type:t,ip_address:await An(),user_agent:navigator.userAgent.slice(0,200),...a})}catch{}}async function An(){try{return(await(await fetch("https://api64.ipify.org?format=json",{signal:AbortSignal.timeout(3e3)})).json()).ip||"unknown"}catch{return"unknown"}}async function li(e){if(!e)return!1;let t=!1,a=!1;try{const{data:i}=await y.rpc("is_current_user_admin");t=!0,a=!!i}catch{t=!1}return t?a:rt(e.email)===Xa}async function Cn(){const e=window.location.hash;if(e.includes("type=recovery")||e.includes("access_token")){yt(),Bn();return}const{data:{session:t}}=await y.auth.getSession();if(t?.user&&await li(t.user)){const{data:{currentUser:i}}=await y.auth.getUser(),n=await y.auth.mfa.getAuthenticatorAssuranceLevel(),r=n.data?.currentLevel;if(n.data?.nextLevel==="aal2"&&r!=="aal2"){I.user=t.user,yt(),Le("2fa"),ma();return}I.user=t.user,$t();return}In()}function yt(){const e=document.getElementById("login-screen");e&&(e.style.display="flex")}function In(){yt(),Le("login"),pa(),di(),ci(),ma(),Tn();const e=oi();e&&(H(`Too many failed attempts. Try again in ${e} minute${e>1?"s":""}.`),document.getElementById("login-btn").disabled=!0)}function Tn(){document.getElementById("toggle-pw")?.addEventListener("click",()=>{const e=document.getElementById("login-password"),t=document.querySelector("#toggle-pw i");e&&(e.type=e.type==="password"?"text":"password",t&&t.setAttribute("data-lucide",e.type==="password"?"eye":"eye-off"),window.lucide&&lucide.createIcons())})}function di(){const e=document.getElementById("login-form");!e||e._bound||(e._bound=!0,e.addEventListener("submit",Ln),document.getElementById("forgot-pw-btn")?.addEventListener("click",()=>Le("forgot")))}async function Ln(e){e.preventDefault();const t=oi();if(t){H(`Account locked. Try again in ${t} minute${t>1?"s":""}.`);return}const a=document.getElementById("login-email"),i=rt(a?.value);if(!i){H("Enter your admin email address."),U("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const n=document.getElementById("login-password").value,r=document.getElementById("remember-me")?.checked;U("login-btn",!0),St();const{data:s,error:l}=await y.auth.signInWithPassword({email:i,password:n});if(l||!s.user){const h=String(l?.message||"").toLowerCase();if(h.includes("missing supabase credentials")||h.includes("authentication service is unavailable")){H("Authentication is temporarily unavailable due to configuration. Please contact support."),U("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(h.includes("failed to fetch")||h.includes("network request failed")){H("Network error while signing in. Check your connection and try again."),U("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}if(h.includes("email not confirmed")){H("Your admin email is not confirmed yet. Open your verification email and confirm first."),U("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In');return}const f=ri(),p=Wt-f.count,g=f.lockedUntil?`Account locked for 15 minutes after ${Wt} failed attempts.`:`Invalid email or password. ${p>0?p+" attempt"+(p!==1?"s":"")+" remaining.":""}`;H(g),U("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),s?.user&&await ce(s.user.id,"login_failed",{metadata:{reason:"wrong_password"}});return}if(!await li(s.user)){await y.auth.signOut(),H(`Access denied for ${s.user.email}. This account is signed in but does not have administrator privileges.`),U("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),await ce(s.user.id,"login_denied",{metadata:{reason:"not_admin"}});return}if(r?localStorage.setItem(Be,JSON.stringify({email:i,ts:Date.now()})):localStorage.removeItem(Be),si(),I.user=s.user,(await y.auth.mfa.getAuthenticatorAssuranceLevel()).data?.nextLevel==="aal2"){U("login-btn",!1,'<i data-lucide="log-in" class="w-4 h-4 inline mr-1"></i> Sign In'),Le("2fa"),ma(),setTimeout(()=>document.getElementById("totp-code")?.focus(),100);return}await ce(s.user.id,"login_success"),U("login-btn",!1),$t()}function ma(){const e=document.getElementById("verify-2fa-btn");e&&!e._bound&&(e._bound=!0,e.addEventListener("click",Aa));const t=document.getElementById("totp-code");t&&!t._bound&&(t._bound=!0,t.addEventListener("input",i=>{i.target.value=i.target.value.replace(/\D/g,"").slice(0,6),i.target.value.length===6&&Aa()})),document.getElementById("cancel-2fa-btn")?.addEventListener("click",async()=>{await y.auth.signOut(),I.user=null,Le("login")}),document.getElementById("use-backup-btn")?.addEventListener("click",()=>{document.getElementById("backup-code-wrap")?.classList.toggle("hidden");const n=document.getElementById("backup-code");n&&n.focus()});const a=document.getElementById("verify-backup-btn");a&&!a._bound&&(a._bound=!0,a.addEventListener("click",Mn))}async function Aa(){const e=document.getElementById("totp-code")?.value?.trim();if(!e||e.length!==6){H("Enter the 6-digit code from your authenticator app.");return}U("verify-2fa-btn",!0),St();try{const{data:t}=await y.auth.mfa.listFactors(),a=(t?.totp||[])[0];if(!a){H("No 2FA factor found. Please re-login."),U("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In');return}const{data:i,error:n}=await y.auth.mfa.challenge({factorId:a.id});if(n)throw n;const{error:r}=await y.auth.mfa.verify({factorId:a.id,challengeId:i.id,code:e});if(r)throw r;await ce(I.user.id,"login_2fa_success"),U("verify-2fa-btn",!1),$t()}catch(t){ri(),H(t.message?.includes("Invalid")?"Incorrect code. Check your authenticator and try again.":t.message),U("verify-2fa-btn",!1,'<i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i> Verify & Sign In'),document.getElementById("totp-code").value="",document.getElementById("totp-code").focus()}}async function Mn(){const e=document.getElementById("backup-code")?.value?.trim().toUpperCase().replace(/\s/g,"");if(!e){H("Enter a backup recovery code.");return}U("verify-backup-btn",!0);try{const{data:t}=await y.from("admin_2fa").select("backup_codes").eq("user_id",I.user.id).maybeSingle();if(!t?.backup_codes?.length){H("No backup codes found."),U("verify-backup-btn",!1,"Use Backup Code");return}if(!t.backup_codes.find(n=>(n.code||n).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")&&!n.used)){H("Backup code not found or already used."),U("verify-backup-btn",!1,"Use Backup Code");return}const i=t.backup_codes.map(n=>(n.code||n).toUpperCase().replace(/-/g,"")===e.replace(/-/g,"")?{...typeof n=="object"?n:{code:n},used:!0}:n);await y.from("admin_2fa").update({backup_codes:i}).eq("user_id",I.user.id),await ce(I.user.id,"login_backup_code_used"),$t()}catch(t){H(t.message),U("verify-backup-btn",!1,"Use Backup Code")}}function ci(){document.getElementById("back-to-login")?.addEventListener("click",()=>Le("login")),document.getElementById("send-reset-btn")?.addEventListener("click",Nn)}async function Nn(){const e=document.getElementById("reset-email"),t=rt(e?.value);if(!t){H("Enter your admin email address to receive a reset link.");return}U("send-reset-btn",!0),St();const{error:a}=await y.auth.resetPasswordForEmail(t,{redirectTo:En()});if(U("send-reset-btn",!1,'<i data-lucide="mail" class="w-4 h-4 inline mr-1"></i> Send Reset Link'),a){H(a.message);return}Sn("Reset link sent! Check your inbox and open it from this device to continue.")}function Bn(){const e=document.getElementById("login-screen");if(!e)return;const t=e.querySelector(".login-card");t&&(t.innerHTML=`
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
    </div>`,window.lucide&&lucide.createIcons())}window.handlePasswordResetSubmit=async function(){const e=document.getElementById("new-pw-reset")?.value,t=document.getElementById("confirm-pw-reset")?.value,a=document.getElementById("reset-pw-error");if(e!==t){a&&(a.textContent="Passwords do not match.",a.classList.remove("hidden"));return}if((e||"").length<8){a&&(a.textContent="Password must be at least 8 characters.",a.classList.remove("hidden"));return}const{error:i}=await y.auth.updateUser({password:e});if(i){a&&(a.textContent=i.message,a.classList.remove("hidden"));return}b("Password updated! Please log in with your new password."),window.location.hash="",setTimeout(()=>window.location.reload(),1500)};function $t(){const e=document.getElementById("login-screen");e&&(e.style.display="none");const t=document.getElementById("admin-user-email");t&&I.user&&(t.textContent=I.user.email||"Admin"),pa(),navigate("dashboard")}window.adminSignOut=async function(){I.user&&await ce(I.user.id,"logout"),await y.auth.signOut(),I.user=null,yt(),Le("login"),pa(),di(),ci()};window.logoutAllDevices=async function(){confirm("This will sign you out on ALL devices. Continue?")&&(I.user&&await ce(I.user.id,"logout_all_devices"),await y.auth.signOut({scope:"global"}),I.user=null,b("Signed out from all devices."),setTimeout(()=>window.location.reload(),1200))};async function Rn(){const e=document.getElementById("content");try{const[t,a,i,n]=await Promise.all([y.from("showroom_listings").select("id,listing_type,is_active,price",{count:"exact"}),y.from("payment_receipts").select("id,order_number,amount,status,created_at",{count:"exact"}).order("created_at",{ascending:!1}).limit(200),y.from("profiles").select("user_id,created_at",{count:"exact"}),y.from("product_reviews").select("id,is_approved",{count:"exact"})]),r=t.data||[],s=a.data||[],l=s.filter(w=>["approved","payment_approved","delivered"].includes(w.status)).reduce((w,k)=>w+(parseFloat(k.amount)||0),0),o=s.filter(w=>["pending","pending_verification","processing"].includes(w.status)).length,c=r.filter(w=>w.listing_type!=="property").length,u=r.filter(w=>w.listing_type==="property").length,m=r.filter(w=>w.listing_type!=="property"&&w.is_active).length,h=i.count||0,f=n.count||0,p=(n.data||[]).filter(w=>!w.is_approved).length,g=new Date,_=s.filter(w=>{const k=new Date(w.created_at);return k.getMonth()===g.getMonth()&&k.getFullYear()===g.getFullYear()}).filter(w=>["approved","payment_approved","delivered"].includes(w.status)).reduce((w,k)=>w+(parseFloat(k.amount)||0),0),v=s.slice(0,6);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-black text-white">Good ${On()}, Admin</h2>
            <p class="text-sm text-gray-500 mt-0.5">${new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}</p>
          </div>
          <button onclick="navigate('products')" class="btn-press hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Product
          </button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          ${W("Total Revenue",`$${l.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald",`$${_.toLocaleString("en-US",{maximumFractionDigits:0})} this month`)}
          ${W("Total Orders",s.length,"shopping-bag","blue",`${o} pending`)}
          ${W("Customers",h,"users","violet")}
          ${W("Products",c,"package","amber",`${m} active`)}
          ${W("Properties",u,"home","blue")}
          ${W("Reviews",f,"star","blue",`${p} pending`)}
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
            ${v.length===0?'<p class="text-xs text-gray-500 text-center py-8">No orders yet</p>':v.map(w=>`
                <div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
                  <div class="min-w-0">
                    <p class="text-xs font-bold text-white truncate">${d(w.order_number||w.id?.slice(0,8))}</p>
                    <p class="text-[10px] text-gray-500">${Se(w.created_at)}</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0 ml-2">
                    <span class="text-xs font-bold text-emerald-400">$${parseFloat(w.amount||0).toLocaleString("en-US",{maximumFractionDigits:0})}</span>
                    ${K(w.status)}
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
      </div>`,window.lucide&&lucide.createIcons(),gi(s)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${d(t.message)}</div>`)}}async function E(){const e=document.getElementById("content");try{const{data:t,error:a}=await y.from("showroom_listings").select("*").neq("listing_type","property").order("created_at",{ascending:!1}),i=new Set,n=[];for(const c of a?[]:t||[])c&&c.property_id&&!i.has(c.property_id)&&(i.add(c.property_id),n.push(c));for(const c of xt().filter(u=>u.listing_type!=="property"))c&&c.property_id&&!i.has(c.property_id)&&(i.add(c.property_id),n.push(c));if(Array.isArray(re))for(const c of re.filter(u=>u.listing_type!=="property"&&u.property_id))i.has(c.property_id)||(i.add(c.property_id),n.push(c));const r=[...Ha,...Ga,...Va,...Wa];for(const c of r)c&&c.property_id&&c.listing_type!=="property"&&!i.has(c.property_id)&&(i.add(c.property_id),n.push(c));n.sort((c,u)=>new Date(u.created_at||0)-new Date(c.created_at||0));try{await la()}catch{}const s=new Set(_t());if(s.size)for(let c=n.length-1;c>=0;c--)n[c]&&n[c].property_id&&s.has(n[c].property_id)&&n.splice(c,1);for(let c=n.length-1;c>=0;c--){const u=n[c],m=Number(u&&u.price);Number.isFinite(m)&&m>=1&&m<=100&&n.splice(c,1)}const l=[...new Set(n.map(c=>c.category).filter(Boolean))].sort((c,u)=>c.localeCompare(u)),o=[...new Set(n.flatMap(c=>Array.isArray(c.tags)?c.tags:[]).filter(Boolean))].sort((c,u)=>c.localeCompare(u));window._productFilters||(window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"}),window._productSelection||(window._productSelection=new Set),e.innerHTML=`
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
          ${W("Total Products",n.length,"package","blue")}
          ${W("Published",n.filter(c=>!!c.is_active).length,"badge-check","emerald")}
          ${W("Draft / Hidden",n.filter(c=>!c.is_active).length,"file-clock","amber")}
          ${W("Featured",n.filter(c=>!!c.is_featured).length,"sparkles","violet")}
          ${W("Inventory Units",n.reduce((c,u)=>c+(parseInt(u.stock_quantity,10)||0),0),"boxes","blue")}
          ${W("Avg Price",`$${Math.round(n.reduce((c,u)=>c+(parseFloat(u.price)||0),0)/Math.max(n.length,1)).toLocaleString()}`,"dollar-sign","blue")}
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
              ${(l.length?l:_e).map(c=>`<option value="${d(c)}" ${(window._productFilters.category||"")===c?"selected":""}>${d(c)}</option>`).join("")}
            </select>
            <select id="prod-tag-filter" class="input-field" onchange="filterProducts()">
              <option value="">All Tags</option>
              ${o.map(c=>`<option value="${d(c)}" ${(window._productFilters.tag||"")===c?"selected":""}>${d(c)}</option>`).join("")}
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
      </div>`,window._productsData=n,window._productsCardLimit=60,pi(n),filterProducts(),updateBulkBar(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400 text-sm">Error: ${d(t.message)}</div>`)}}function we(e){const t=parseFloat(e);return Number.isFinite(t)?t:0}function et(e){return Array.isArray(e.tags)?e.tags.filter(Boolean):[]}function Fn(e){const t=we(e.price),a=parseFloat(e.real_price);if(Number.isFinite(a)&&a>0&&a>t)return`${Math.round((1-t/a)*100)}% OFF`;const i=parseFloat(e.discount_percent??e.discount??0);return Number.isFinite(i)&&i>0?`${Math.round(i)}% OFF`:"No discount"}function Dn(e){const t=we(e.price),a=parseFloat(e.real_price),i=`$${t.toLocaleString()}`;return Number.isFinite(a)&&a>0&&a>t?`<span class="block text-xs text-gray-400 price-strike line-through">$${a.toLocaleString()}</span><span class="text-emerald-300 font-black">$${t.toLocaleString()}</span>`:i}function Pt(e){return e.is_archived||e.availability_status==="Archived"?"archived":e.is_active?"active":"inactive"}function zt(e){return parseInt(e.views??e.view_count??0,10)||0}function Yt(e){return parseInt(e.sales??e.sales_count??0,10)||0}function Et(e){return e.sku||e.property_id||"N/A"}function Un(e){const t=e.images&&e.images[0]?e.images[0]:"/fallback.svg",a=et(e),i=Pt(e),n=window._productSelection?.has(e.property_id),r=K(i==="archived"?"inactive":i==="active"?"active":"inactive"),s=se(e.created_at),l=!!e.is_featured,o=e.is_active?`unpublishProduct('${e.property_id}')`:`publishProduct('${e.property_id}')`,c=e.is_active?"Unpublish":"Publish",u=e.is_active?"bg-amber-500/15 text-amber-200 hover:bg-amber-500/25":"bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25";return`<article data-id="${e.property_id}" data-cat="${d(e.category||"")}" data-status="${i}" data-featured="${l?"featured":"standard"}" onclick="editProduct('${e.property_id}')" title="Tap anywhere to edit this product" class="prod-card glass-soft border ${n?"border-blue-400/60":"border-blue-500/15"} rounded-3xl p-5 flex flex-col gap-4 transition hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer select-none active:scale-[.99]">
    <div class="flex items-start gap-4">
      <input type="checkbox" class="prod-check accent-blue-500 w-5 h-5 mt-1 shrink-0" value="${e.property_id}" ${n?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${e.property_id}', this.checked)">
      <div class="relative w-24 h-24 rounded-2xl overflow-hidden border border-blue-500/20 shrink-0 bg-[#0b1124]">
        <img src="${d(t)}" alt="${d(e.title||"Product")}" class="w-full h-full object-cover" onerror="this.src='/fallback.svg'">
        ${l?'<span class="absolute top-1.5 left-1.5 text-[10px] font-black px-2 py-0.5 rounded-lg bg-amber-400 text-[#111827]">Featured</span>':""}
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="text-lg font-black text-white leading-snug line-clamp-2">${d(e.title||"Untitled Product")}</h3>
        <p class="text-xs text-gray-500 font-mono mt-1">SKU: ${d(Et(e))}</p>
        <div class="mt-2 flex items-center gap-2 flex-wrap">
          ${r}
          <span class="badge bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20">${d(e.category||"Uncategorized")}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2.5 text-sm">
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5">
        <span class="text-gray-400 text-xs">Price</span>
        <p class="text-emerald-300 font-black text-base">
          ${Dn(e)}
        </p>
      </div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Discount</span><p class="text-amber-300 font-bold">${d(Fn(e))}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Stock</span><p class="text-gray-200 font-bold">${e.stock_quantity!=null?d(e.stock_quantity):"Unlimited"}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Brand</span><p class="text-gray-200 font-bold truncate">${d(e.brand||"N/A")}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Views</span><p class="text-blue-300 font-bold">${zt(e).toLocaleString()}</p></div>
      <div class="rounded-2xl bg-white/5 border border-white/10 px-3 py-2.5"><span class="text-gray-400 text-xs">Sales</span><p class="text-cyan-300 font-bold">${Yt(e).toLocaleString()}</p></div>
    </div>

    <div class="flex items-center justify-between text-xs text-gray-500 border-t border-blue-500/10 pt-3">
      <span>Date Added: ${d(s)}</span>
      <span>${(e.images||[]).length} images</span>
    </div>

    <div class="flex flex-wrap gap-2 mt-auto">
      <button onclick="event.stopPropagation();editProduct('${e.property_id}')" class="btn-press flex-1 min-w-[9.5rem] px-5 py-3.5 rounded-2xl text-sm font-black bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition shadow-lg shadow-blue-600/15">Edit Product</button>
      <button onclick="event.stopPropagation();quickEditProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-indigo-500/15 text-indigo-200 hover:bg-indigo-500/25 transition">Quick Edit</button>
      <button onclick="event.stopPropagation();previewProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-sky-500/15 text-sky-200 hover:bg-sky-500/25 transition">Preview</button>
      <button onclick="event.stopPropagation();${o}" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold ${u} transition">${c}</button>
      <button onclick="event.stopPropagation();duplicateProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-white/10 text-gray-200 hover:bg-white/20 transition">Duplicate</button>
      <button onclick="event.stopPropagation();archiveProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-red-500/15 text-red-200 hover:bg-red-500/25 transition">Archive</button>
      <button onclick="event.stopPropagation();shareProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-violet-500/15 text-violet-200 hover:bg-violet-500/25 transition">Share</button>
      <button onclick="event.stopPropagation();deleteProduct('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-rose-600/15 text-rose-200 hover:bg-rose-600/25 transition">Delete</button>
      <button onclick="event.stopPropagation();openProductMoreActions('${e.property_id}')" class="btn-press px-4 py-3.5 rounded-2xl text-sm font-bold bg-gray-600/20 text-gray-200 hover:bg-gray-600/35 transition">More</button>
    </div>

    ${a.length?`<div class="flex flex-wrap gap-1.5">${a.slice(0,6).map(m=>`<span class="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200">${d(m)}</span>`).join("")}</div>`:'<div class="text-xs text-gray-500">No tags</div>'}
  </article>`}function ui(e,t){const a=[...e],i=n=>new Date(n||0).getTime()||0;return t==="oldest"?a.sort((n,r)=>i(n.created_at)-i(r.created_at)):t==="price-high"?a.sort((n,r)=>we(r.price)-we(n.price)):t==="price-low"?a.sort((n,r)=>we(n.price)-we(r.price)):t==="sales-high"?a.sort((n,r)=>Yt(r)-Yt(n)):t==="views-high"?a.sort((n,r)=>zt(r)-zt(n)):a.sort((n,r)=>i(r.created_at)-i(n.created_at)),a}function pi(e){const t=document.getElementById("products-grid"),a=document.getElementById("products-empty"),i=document.getElementById("products-result-count");if(!t)return;const n=window._productsCardLimit||60,r=e.slice(0,n);t.innerHTML=r.map(Un).join(""),i&&(i.textContent=String(e.length));const s=document.getElementById("products-more");if(s){const l=e.length-r.length;l>0?s.innerHTML=`<button onclick="loadMoreProducts()" class="btn-press px-8 py-4 rounded-2xl text-base font-black bg-blue-500/15 text-blue-200 hover:bg-blue-500/25 border border-blue-500/25 transition">Show ${Math.min(60,l)} more (${l} left)</button>`:s.innerHTML=e.length>60?'<span class="text-sm text-gray-500">All products shown</span>':""}a&&a.classList.toggle("hidden",e.length>0),updateBulkBar(),window.lucide&&lucide.createIcons()}window.loadMoreProducts=function(){window._productsCardLimit=(window._productsCardLimit||60)+60,filterProducts(!0)};function mi(e){const t=document.getElementById("products-table-body"),a=document.getElementById("products-result-count");t&&(t.innerHTML=e.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-10">No products found.</td></tr>':e.map(i=>{const n=i.images&&i.images[0]?i.images[0]:"/fallback.svg",r=Pt(i),s=window._productSelection?.has(i.property_id),l=i.is_active?`unpublishProduct('${i.property_id}')`:`publishProduct('${i.property_id}')`,o=i.is_active?"Unpublish":"Publish";return`<tr class="prod-table-row" data-id="${i.property_id}" style="cursor:pointer">
          <td>
            <div class="flex items-center gap-2.5" onclick="editProduct('${i.property_id}')">
              <input type="checkbox" class="prod-check accent-blue-500" value="${i.property_id}" ${s?"checked":""} onclick="event.stopPropagation()" onchange="toggleProductSelection('${i.property_id}', this.checked)">
              <img src="${d(n)}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
              <div class="min-w-0">
                <p class="text-xs font-bold text-white truncate max-w-[160px]">${d(i.title||"Untitled Product")}</p>
                <p class="text-[10px] font-mono text-gray-500">${d(Et(i))}</p>
              </div>
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${d(i.category||"Uncategorized")}</span></td>
          <td>
            <div class="text-xs">
              ${(()=>{const c=we(i.price),u=parseFloat(i.real_price);return Number.isFinite(u)&&u>0&&u>c?`<span class="text-[10px] text-gray-500 price-strike line-through block">$${u.toLocaleString()}</span><span class="font-bold text-emerald-400">$${c.toLocaleString()}</span>`:`<span class="font-bold text-emerald-400">$${c.toLocaleString()}</span>`})()}
            </div>
          </td>
          <td><span class="text-xs text-gray-300">${i.stock_quantity!=null?d(i.stock_quantity):"Unlimited"}</span></td>
          <td>${K(r==="archived"?"inactive":r==="active"?"active":"inactive")}</td>
          <td><span class="text-xs text-gray-500">${se(i.created_at)}</span></td>
          <td>
            <div class="flex gap-1">
              <button onclick="editProduct('${i.property_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="Edit"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
              <button onclick="quickEditProduct('${i.property_id}')" class="btn-press p-1.5 text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition" title="Quick Edit"><i data-lucide="sliders-horizontal" class="w-3.5 h-3.5"></i></button>
              <button onclick="${l}" class="btn-press p-1.5 ${i.is_active?"text-amber-400 hover:bg-amber-500/10":"text-emerald-400 hover:bg-emerald-500/10"} rounded-lg transition" title="${o}"><i data-lucide="${i.is_active?"eye-off":"eye"}" class="w-3.5 h-3.5"></i></button>
              <button onclick="archiveProduct('${i.property_id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Archive"><i data-lucide="archive" class="w-3.5 h-3.5"></i></button>
            </div>
          </td>
        </tr>`}).join(""),a&&(a.textContent=String(e.length)),window.lucide&&lucide.createIcons())}window.setProductView=function(e){window._productView=e==="table"?"table":"card";const t=document.getElementById("products-grid"),a=document.getElementById("products-table-wrap"),i=document.getElementById("view-card-btn"),n=document.getElementById("view-table-btn"),r=document.getElementById("products-empty"),s=window._productsData||[];t&&t.classList.toggle("hidden",e==="table"),a&&(a.classList.toggle("hidden",e!=="table"),e==="table"&&mi(s)),i&&i.classList.toggle("active",e!=="table"),n&&n.classList.toggle("active",e==="table"),r&&r.classList.toggle("hidden",s.length>0)};window.filterProducts=function(e){const t=window._productFilters||{};t.search=(document.getElementById("prod-search")?.value||"").trim().toLowerCase(),t.category=document.getElementById("prod-cat-filter")?.value||"",t.tag=document.getElementById("prod-tag-filter")?.value||"",t.status=document.getElementById("prod-status-filter")?.value||"",t.featured=document.getElementById("prod-featured-filter")?.value||"",t.sort=document.getElementById("prod-sort")?.value||"newest",window._productFilters=t;const a=(window._productsData||[]).filter(n=>{const r=[n.title,n.brand,n.category,Et(n),et(n).join(" "),n.description].join(" ").toLowerCase();return!(t.search&&!r.includes(t.search)||t.category&&(n.category||"")!==t.category||t.tag&&!et(n).includes(t.tag)||t.status&&Pt(n)!==t.status||t.featured&&t.featured==="featured"!=!!n.is_featured)}),i=ui(a,t.sort);e||(window._productsCardLimit=60),pi(i),window._productView==="table"&&mi(i)};window.productSearchKeydown=function(e){if(e.key!=="Enter")return;const t=(document.getElementById("prod-search")?.value||"").trim().toLowerCase();if(!t)return;const a=window._productFilters||{},i=(window._productsData||[]).filter(r=>!(![r.title,r.brand,r.category,Et(r),et(r).join(" "),r.description].join(" ").toLowerCase().includes(t)||a.category&&(r.category||"")!==a.category||a.tag&&!et(r).includes(a.tag)||a.status&&Pt(r)!==a.status||a.featured&&a.featured==="featured"!=!!r.is_featured)),n=ui(i,a.sort||"newest")[0];n?editProduct(n.property_id):b("No product matched that search","error")};window.resetProductFilters=function(){window._productFilters={search:"",category:"",tag:"",status:"",featured:"",sort:"newest"},["prod-search","prod-cat-filter","prod-tag-filter","prod-status-filter","prod-featured-filter","prod-sort"].forEach(t=>{const a=document.getElementById(t);a&&(t==="prod-sort"?a.value="newest":a.value="")}),filterProducts()};window.toggleProductSelection=function(e,t){window._productSelection||(window._productSelection=new Set),t?window._productSelection.add(e):window._productSelection.delete(e),updateBulkBar()};window.toggleSelectAll=function(e,t){document.querySelectorAll("."+t).forEach(a=>{a.checked=e.checked;const i=a.value;window._productSelection||(window._productSelection=new Set),e.checked?window._productSelection.add(i):window._productSelection.delete(i)}),updateBulkBar()};window.toggleSelectAllProducts=function(e){document.querySelectorAll(".prod-check").forEach(t=>{t.checked=!!e,window._productSelection||(window._productSelection=new Set),e?window._productSelection.add(t.value):window._productSelection.delete(t.value)}),updateBulkBar()};window.updateBulkBar=function(){const e=window._productSelection?window._productSelection.size:0,t=document.getElementById("bulk-actions"),a=document.getElementById("bulk-count");t&&(t.classList.toggle("hidden",e===0),e>0&&t.classList.add("flex")),a&&(a.textContent=`${e} selected`)};function At(){return window._productSelection?[...window._productSelection]:[]}function J(e){const t=String(e?.message||e?.code||"").toLowerCase();return t.includes("row-level security")||t.includes("permission denied")||t.includes("permission denied for table")||t.includes("new row violates row-level security")||t.includes("not permitted")||t.includes("rls policy")}function bi(e,t,a){return e&&J(e)?(b(`âš ï¸ ${a} blocked: Your account is signed in but the database admin role is not active. Re-run the admin permission migration, or contact the owner.`,"error"),!0):e?(t&&t(),b(`${a} saved locally (DB unavailable): ${e.message||"unknown error"}`,"info"),!0):!1}function Ht(e,t){if(!e)return`${t} failed for an unknown reason. Please try again.`;const a=String(e.message||""),i=e.code||"";return J(e)?`${t} was BLOCKED: your account is signed in but the database admin role is not active. Re-run the admin permission migration (or contact the owner), then press Publish again.`:String(i)==="401"||/jwt|token|not authenticated|unauthorized|invalid api key/i.test(a)?`${t} failed: your sign-in session expired or is invalid. Please sign out and sign back in, then try again. Your changes are still in the form.`:String(i)==="23505"||/duplicate key|unique constraint/i.test(a)?`${t} failed: a duplicate-record conflict occurred in the database. Refresh the page and try again.`:String(i)==="23503"||/foreign key/i.test(a)?`${t} failed: the database rejected a reference (foreign key). Refresh the page, re-open the product and try again.`:String(i)==="42P01"||/column .* does not exist|relation .* does not exist/i.test(a)?`${t} failed: the database schema is out of date. Run the latest database migration, then try again.`:String(i)==="23502"||/null value in column .* violates/i.test(a)?`${t} failed: a required field was rejected by the database. Fill in every required field, then try again.`:/failed to fetch|networkerror|network request|fetch failed|load failed|offline|ERR_NAME|ERR_CONNECTION|timeout/i.test(a)?`${t} failed: no connection to the server. Check your internet connection and press Publish again. Your changes are still in the form.`:String(i)==="42501"||/permission denied|row-level security/i.test(a)?`${t} was BLOCKED by database permissions. Re-run the admin permission migration (or contact the owner), then try again.`:/rate limit|too many requests/i.test(a)?`${t} failed: too many requests were sent at once. Wait a few seconds and press Publish again.`:`${t} failed: ${a||"an unexpected database error occurred"}. Nothing was saved — your changes are still in the form, so you can press Publish again.`}async function Ca(e){try{let{data:{session:a}}=await y.auth.getSession();if(!a){const{data:r}=await y.auth.getSession();a=r?.session}if(!a)return{error:new Error("Your sign-in session has expired. Please sign out and sign back in, then press Publish again.")};const{data:{user:i},error:n}=await y.auth.getUser();if(n||!i)return{error:new Error("Your sign-in session is invalid. Please sign out and sign back in, then press Publish again.")}}catch(a){return console.error("[safePublishShowroom] Auth check failed:",a),{error:new Error("Could not verify your sign-in status. Check your internet connection and try again.")}}const t={...e,updated_at:new Date().toISOString()};if(t.property_id){const{error:a}=await y.from("showroom_listings").upsert(t,{onConflict:"property_id"});if(!a)return{error:null};console.warn("[safePublishShowroom] Direct upsert failed, trying RPC fallback:",a?.message||a)}else{const{error:a}=await y.from("showroom_listings").insert(t);if(!a)return{error:null};console.warn("[safePublishShowroom] Direct insert failed, trying RPC fallback:",a?.message||a)}try{const a={...t};delete a.id;const{data:i,error:n}=await y.rpc("publish_showroom_upsert",{p_data:[a]});return n?(console.error("[safePublishShowroom] RPC fallback also failed:",n),{error:new Error(`Database write failed: ${n.message||"unknown error"}. Your changes are preserved in the form — please try again.`)}):(console.log("[safePublishShowroom] RPC fallback succeeded, rows affected:",i),{error:null})}catch(a){return console.error("[safePublishShowroom] RPC exception:",a),{error:new Error(`Database write failed: ${a.message||"network error"}. Your changes are preserved in the form — please try again.`)}}}window.bulkToggleActive=async function(e){const t=At();if(!t.length)return;const a=await Promise.all(t.map(r=>{const s=ge((window._productsData||[]).find(l=>l.property_id===r));return y.from("showroom_listings").upsert({...s,property_id:r,is_active:e},{onConflict:"property_id"})}));if(a.some(r=>r.error&&J(r.error))){b(`âš ï¸ ${t.length} products NOT ${e?"published":"unpublished"}: database admin role blocked the write. Re-run the admin permission migration.`,"error"),window._productSelection=new Set,E();return}const n=a.filter(r=>r.error).length;b(`${t.length-n}/${t.length} products ${e?"published":"unpublished"}${n?` (${n} failed: ${a.find(r=>r.error)?.error?.message||"error"})`:""}`,n?"error":"success"),window._productSelection=new Set,E()};window.bulkDuplicateProducts=async function(){const e=At();if(e.length){for(const t of e)await duplicateProduct(t,!0);b(`${e.length} products duplicated`),window._productSelection=new Set,E()}};window.bulkArchive=async function(){const e=At();if(!e.length||!confirm(`Archive ${e.length} products? They will be hidden but not deleted.`))return;const t=await Promise.all(e.map(n=>y.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",n)));if(t.some(n=>n.error&&J(n.error))){b("âš ï¸ Archive blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,E();return}const i=t.filter(n=>n.error).length;b(`${e.length-i}/${e.length} products archived${i?` (${i} failed)`:""}`,i?"error":"success"),window._productSelection=new Set,E()};window.bulkDeleteProducts=async function(){const e=At();if(!e.length||!confirm(`Delete ${e.length} products permanently? This action cannot be undone.`))return;const t=await Promise.all(e.map(n=>y.from("showroom_listings").delete().eq("property_id",n)));if(t.some(n=>n.error&&J(n.error))){b("âš ï¸ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),window._productSelection=new Set,E();return}const i=t.filter(n=>n.error).length;b(`${e.length-i}/${e.length} products deleted${i?` (${i} failed)`:""}`,i?"error":"success"),window._productSelection=new Set,E()};window.previewProduct=async function(e){const t=await y.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(i=>i.property_id===e)||t.data;if(!a)return b("Product not found","error");D(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Product Live Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="space-y-2">
            <img src="${d((a.images||[])[0]||"/fallback.svg")}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
            <div class="flex flex-wrap gap-2">${(a.images||[]).slice(0,8).map(i=>`<img src="${d(i)}" class="w-12 h-12 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">`).join("")}</div>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-black text-white">${d(a.title||"Untitled Product")}</h4>
            <div class="flex items-center gap-2">${K(a.is_active?"active":"inactive")}${a.is_featured?'<span class="badge bg-amber-500/15 text-amber-200 border-amber-500/30">Featured</span>':""}</div>
            <p class="text-xs text-gray-400">${d(a.description||"No description")}</p>
            <div class="grid grid-cols-2 gap-2 text-xs mt-2">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">$${we(a.price).toLocaleString()}</p></div>
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
    </div>`)};window.quickEditProduct=async function(e){const t=await y.from("showroom_listings").select("*").eq("property_id",e).maybeSingle(),a=(window._productsData||[]).find(n=>n.property_id===e)||t.data;if(!a)return b("Product not found","error");const i=Array.isArray(a.images)?a.images:[];D(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-black text-white">Quick Edit Product</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition">Back</button>
        </div>
        <form onsubmit="saveQuickEditProduct(event,'${a.property_id}')" class="space-y-4">
          <div><label class="lbl">Title</label><input name="title" class="input-field" value="${d(a.title||"")}"></div>
          <div class="grid grid-cols-2 gap-3">
            <div><label class="lbl">Real Price</label><input type="number" step="0.01" name="real_price" class="input-field" value="${d(a.real_price??a.specifications?.real_price??"")}" placeholder="Original price (crossed out)"></div>
            <div><label class="lbl">Discount Price</label><input type="number" step="0.01" name="price" class="input-field" value="${d(a.price||0)}" placeholder="Price customers pay"></div>
          </div>
          <div><label class="lbl">Availability</label><select name="availability_status" class="input-field">${["In Stock","Out of Stock","Pre-order","Limited Stock","Archived"].map(n=>`<option value="${n}" ${a.availability_status===n?"selected":""}>${n}</option>`).join("")}</select></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Featured</span><input type="checkbox" name="is_featured" ${a.is_featured?"checked":""} class="accent-blue-500 w-5 h-5"></div>
          <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"><span class="text-sm text-gray-300">Published</span><input type="checkbox" name="is_active" ${a.is_active?"checked":""} class="accent-blue-500 w-5 h-5"></div>
          <div>
            <label class="lbl">Gallery Images & Videos (up to 24)</label>
            <div id="drop-zone" class="drop-zone" onclick="pickMediaForForm('img-upload')">
              <i data-lucide="image-plus" class="w-10 h-10 text-blue-400 mx-auto mb-2"></i>
              <p class="text-base font-bold text-gray-300">Tap to add photos or videos (up to 24)</p>
              <p class="text-sm text-gray-500 mt-1">PNG, JPG, WEBP, MP4, WebM. First item is the cover.</p>
              <input type="file" id="img-upload" class="hidden" multiple accept="image/*,video/mp4,video/webm,video/*,application/pdf" onchange="handleImageUpload(event)">
            </div>
            <div id="image-preview" class="flex flex-wrap gap-2.5 mt-3">
              ${i.map((n,r)=>$e(n,r)).join("")}
            </div>
            <div id="image-url-inputs">${i.map((n,r)=>`<input type="hidden" name="images" id="img-url-${r}" value="${d(n)}">`).join("")}</div>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
          </div>
          <button type="submit" class="btn-press w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-base font-bold">Save Quick Edit</button>
        </form>
      </div>
    </div>`),Ct(),It(),Ge(),Me(),window.lucide&&lucide.createIcons()};window.saveQuickEditProduct=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=[...document.querySelectorAll("#image-preview .img-thumb")].map(u=>u.dataset.url||(u.querySelector("img")?u.querySelector("img").getAttribute("src"):"")).filter(u=>u&&!String(u).startsWith("blob:")),n={title:a.get("title")||"Untitled Product",price:Math.max(B,Math.min(O,parseFloat(a.get("price"))||0)),stock_quantity:a.get("stock_quantity")===""?null:parseInt(a.get("stock_quantity"),10),availability_status:a.get("availability_status")||"In Stock",is_featured:a.get("is_featured")==="on",is_active:a.get("is_active")==="on"||i.length>=24,images:i},r=String(a.get("real_price")||"").trim(),s=r===""?null:parseFloat(r);if(s!=null&&!Number.isFinite(s)){b("Real Price must be a number.","error");return}const l=ge((window._productsData||[]).find(u=>u.property_id===t)),o=l.specifications&&typeof l.specifications=="object"?l.specifications:{};n.specifications={...o,real_price:s!=null&&s>0?Math.round(s):null};const{error:c}=await y.from("showroom_listings").upsert({...l,...n,property_id:t},{onConflict:"property_id"});if(c){if(J(c)){b("âš ï¸ Save blocked: database admin role rejected the write. Re-run the admin permission migration.","error"),oe(),E();return}Vt(t,n),b("Quick edit saved locally","info")}else b(n.is_active?"Saved & published â€” your showroom shows it now":"Quick edit saved (draft)");oe(),E()};window.publishProduct=function(e){return toggleProductActive(e,!0)};window.unpublishProduct=function(e){return toggleProductActive(e,!1)};window.shareProduct=async function(e){const t=`${window.location.origin}/details.html?id=${encodeURIComponent(e)}`,a=(window._productsData||[]).find(o=>o.property_id===e)||(window._propertiesData||[]).find(o=>o.property_id===e)||De(e),i=a&&String(a.title||"").trim()||"Product on Weverse Online Shop",n=a&&Number(a.price||0)>0?`${i} — ${jn(a)}
${t}`:`${i}
${t}`,s=await(async()=>{try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(t),!0}catch{}try{const o=document.createElement("textarea");return o.value=t,o.style.cssText="position:fixed;opacity:0;pointer-events:none",document.body.appendChild(o),o.focus(),o.select(),document.execCommand("copy"),o.remove(),!0}catch{return!1}})();let l=!1;if(navigator.share)try{await navigator.share({title:i,text:n,url:t}),l=!0}catch{}l||b(s?"Product link copied to clipboard":"Product link: "+t)};function jn(e){const t=Number(e&&typeof e.price=="object"?e.price.price:e&&e.price)||0,a=e&&e.currency||"USD";let i;try{i=t.toLocaleString("en-US",{style:"currency",currency:a,maximumFractionDigits:0})}catch{i="$"+t.toLocaleString("en-US")}return e&&e.price_period&&(i+="/"+e.price_period),i}window.deleteProduct=async function(e){if(!confirm("Delete this product permanently? This action cannot be undone."))return;const t=(window._productsData||[]).find(i=>i.property_id===e)||(window._propertiesData||[]).find(i=>i.property_id===e)||De(e),{error:a}=await y.from("showroom_listings").delete().eq("property_id",e);if(a&&!J(a))return b("Delete failed: "+a.message,"error");it(e);try{const i=await qe(e,!0);i&&i.error&&J(i.error)?b("âš ï¸ Deleted, but the site-wide hidden list could not be saved: database admin role rejected the write. Re-run the admin permission migration.","error"):b("Product deleted")}catch{b("Product deleted")}t&&t.listing_type==="property"?Mt():E()};window.clearAllProducts=async function(){const e=(window._productsData||[]).length;if(!confirm(`Delete ALL ${e} product(s) from the Product Manager and the database now?

This is permanent and cannot be undone. Your Real Estate row, Cars & Trucks row and built-in showroom catalog will stay.`))return;const t=new Set(["Cars","Cars & Vehicles","Trucks","Buses","Buses & Coaches","Motorhomes","Motorcycles","Marine & Boating","RV & Camper Accessories","Vehicles"]);let a=[];try{const{data:i,error:n}=await y.from("showroom_listings").select("property_id, listing_type, category").neq("property_id","__none__");if(n)return J(n)?b("⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"):b("Clear failed: "+n.message,"error");a=(i||[]).filter(r=>r.listing_type==="product"&&!t.has(r.category)).map(r=>r.property_id).filter(Boolean)}catch(i){return b("Clear failed: "+i.message,"error")}if(a.length)for(let i=0;i<a.length;i+=500){const{error:n}=await y.from("showroom_listings").delete().in("property_id",a.slice(i,i+500));if(n)return J(n)?b("⚠️ Delete blocked: database admin role rejected the write. Re-run the admin permission migration.","error"):b("Clear failed: "+n.message,"error")}try{const i=JSON.parse(localStorage.getItem("kco_local_showroom_listings_v1")||"[]"),n=(Array.isArray(i)?i:[]).filter(r=>r.listing_type&&r.listing_type!=="product"?!0:t.has(r.category));localStorage.setItem("kco_local_showroom_listings_v1",JSON.stringify(n))}catch{}b("All products deleted. Real Estate, Cars & Trucks and your showroom catalog stay."),E()};window.openProductMoreActions=function(e){D(`
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
    </div>`)};function On(){const e=new Date().getHours();return e<12?"morning":e<17?"afternoon":"evening"}function gi(e){const t=document.getElementById("chart-revenue");if(!t)return;const a=[],i=new Date;for(let r=5;r>=0;r--){const s=new Date(i.getFullYear(),i.getMonth()-r,1);a.push({label:s.toLocaleString("default",{month:"short"}),month:s.getMonth(),year:s.getFullYear()})}const n=a.map(r=>e.filter(s=>{const l=new Date(s.created_at);return l.getMonth()===r.month&&l.getFullYear()===r.year&&["approved","payment_approved","delivered"].includes(s.status)}).reduce((s,l)=>s+(parseFloat(l.amount)||0),0));new Chart(t,{type:"bar",data:{labels:a.map(r=>r.label),datasets:[{label:"Revenue (USD)",data:n,backgroundColor:"rgba(59,130,246,.6)",borderColor:"rgb(59,130,246)",borderWidth:1,borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{ticks:{color:"#64748b",callback:r=>"$"+r.toLocaleString()},grid:{color:"rgba(59,130,246,.05)"}},x:{ticks:{color:"#64748b"},grid:{display:!1}}}}})}const _e=Ki.map(e=>e.name),yi=Qi,N={default:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Phones:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"storage",label:"Storage (e.g. 128GB)",type:"text"},{key:"ram",label:"RAM (e.g. 8GB)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],"Computers & Laptops":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"processor",label:"Processor (CPU)",type:"text"},{key:"ram",label:"RAM",type:"text"},{key:"storage",label:"Storage",type:"text"},{key:"display",label:"Display Size",type:"text"},{key:"graphics",label:"Graphics Card",type:"text"},{key:"os",label:"Operating System",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Electronics:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model Number",type:"text"},{key:"color",label:"Color",type:"text"},{key:"voltage",label:"Voltage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}],Shoes:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Jewelry:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"material",label:"Material (e.g. 14k Gold)",type:"text"},{key:"gemstone",label:"Gemstone",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],Watches:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"movement",label:"Movement (Quartz/Automatic)",type:"text"},{key:"case_material",label:"Case Material",type:"text"},{key:"water_resistance",label:"Water Resistance",type:"text"},{key:"color",label:"Dial Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"description",label:"Description",type:"textarea",span:2}],Gaming:[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"platform",label:"Platform (PS5, Xbox, PCâ€¦)",type:"text"},{key:"model",label:"Game / Model",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}],"Sports & Fitness":[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]};["Men's Fashion","Women's Fashion","Fashion"].forEach(e=>N[e]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (T-Shirt, Dressâ€¦)",type:"text"},{key:"size",label:"Size",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}]);N["Bags & Accessories"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Handbag, Backpack, Luggageâ€¦)",type:"text"},{key:"size",label:"Size / Dimensions",type:"text"},{key:"material",label:"Material (e.g. Leather)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"gender",label:"Gender",type:"select",options:["Men","Women","Unisex","Kids"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];N["Beauty & Skincare"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Serum, Cream, Makeupâ€¦)",type:"text"},{key:"size",label:"Size (ml / g)",type:"text"},{key:"skin_type",label:"Skin Type",type:"text"},{key:"ingredients",label:"Key Ingredients",type:"text"},{key:"color",label:"Color / Shade",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];N["Home & Kitchen"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model",type:"text"},{key:"type",label:"Type (Appliance, Cookware, Decorâ€¦)",type:"text"},{key:"color",label:"Color",type:"text"},{key:"material",label:"Material",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"voltage",label:"Voltage / Power",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];N.Furniture=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Sofa, Table, Chairâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"assembly",label:"Assembly Required",type:"select",options:["","Yes","No"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];N["Garden & Outdoor"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Mower, Grill, Furnitureâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"dimensions",label:"Dimensions",type:"text"},{key:"weatherproof",label:"Weatherproof",type:"select",options:["","Yes","No"]},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];N["Toys & Games"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"model",label:"Model / Set Name",type:"text"},{key:"age_range",label:"Age Range",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];N["Food & Groceries"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Snack, Beverage, Pantryâ€¦)",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"shelf_life",label:"Shelf Life",type:"text"},{key:"storage",label:"Storage Instructions",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","New (Sealed)","Open Box"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];N["Baby & Kids"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Stroller, Clothing, Toyâ€¦)",type:"text"},{key:"age_range",label:"Age Range",type:"text"},{key:"size",label:"Size",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];N["Health & Medical"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Device, Supplement, Careâ€¦)",type:"text"},{key:"size",label:"Size / Quantity",type:"text"},{key:"usage",label:"Usage / Dosage",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];N["Books & Education"]=[{key:"title",label:"Title / Book Name",type:"text",required:!0,span:2},{key:"author",label:"Author",type:"text"},{key:"publisher",label:"Publisher",type:"text"},{key:"language",label:"Language",type:"text"},{key:"format",label:"Format (Hardcover, Paperback, E-book)",type:"text"},{key:"isbn",label:"ISBN",type:"text"},{key:"pages",label:"Pages",type:"text"},{key:"edition",label:"Edition",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Like New","Very Good","Good","Fair"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];N["Office & Stationery"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Notebook, Pen, Printerâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"size",label:"Size",type:"text"},{key:"quantity",label:"Quantity / Pack Size",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];N["Pet Supplies"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text"},{key:"type",label:"Type (Food, Toy, Bed, Collarâ€¦)",type:"text"},{key:"pet_type",label:"Pet Type (Dog, Cat, Birdâ€¦)",type:"text"},{key:"size",label:"Size / Weight",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];N["Musical Instruments"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"type",label:"Type (Guitar, Piano, Drumsâ€¦)",type:"text"},{key:"material",label:"Material",type:"text"},{key:"color",label:"Color / Finish",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];N["Cameras & Photography"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text"},{key:"lens",label:"Lens",type:"text"},{key:"sensor",label:"Sensor",type:"text"},{key:"megapixels",label:"Megapixels",type:"text"},{key:"video",label:"Video Recording",type:"text"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}];N["Software & Digital"]=[{key:"title",label:"Product Title",type:"text",required:!0,span:2},{key:"brand",label:"Brand / Developer",type:"text"},{key:"type",label:"Type (Software, App, Licenseâ€¦)",type:"text"},{key:"platform",label:"Platform",type:"text"},{key:"license",label:"License Type",type:"text"},{key:"version",label:"Version",type:"text"},{key:"language",label:"Language",type:"text"},{key:"format",label:"Format",type:"text"},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];N.Services=[{key:"title",label:"Service Title",type:"text",required:!0,span:2},{key:"type",label:"Service Type",type:"text"},{key:"duration",label:"Duration",type:"text"},{key:"location",label:"Location / Coverage",type:"text"},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];N["Social Media Accounts"]=[{key:"title",label:"Account Title",type:"text",required:!0,span:2},{key:"type",label:"Platform (Instagram, TikTokâ€¦)",type:"text"},{key:"followers",label:"Followers",type:"text"},{key:"engagement",label:"Engagement Rate",type:"text"},{key:"niche",label:"Niche",type:"text"},{key:"condition",label:"Status",type:"select",options:["Active","Verified","Suspended"]},{key:"price",label:"Price (USD)",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"description",label:"Description",type:"textarea",span:2}];yi.forEach(e=>N[e]=[{key:"title",label:"Vehicle Title",type:"text",required:!0,span:2,placeholder:"e.g. 2023 Toyota Land Cruiser V8 Turbo Diesel"},{key:"brand",label:"Brand",type:"text",required:!0},{key:"model",label:"Model",type:"text",required:!0},{key:"model_year",label:"Model Year",type:"text",placeholder:"e.g. 2023"},{key:"body_type",label:"Body Type",type:"select",options:["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"]},{key:"mileage",label:"Mileage",type:"text",placeholder:"e.g. 15,000 mi or 0 (new)"},{key:"engine",label:"Engine",type:"text",placeholder:"e.g. 4.0L V8 Turbo Diesel"},{key:"horsepower",label:"Horsepower (HP)",type:"text",placeholder:"e.g. 500 HP"},{key:"transmission",label:"Transmission",type:"select",options:["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"]},{key:"drive_type",label:"Drive Type",type:"select",options:["FWD","RWD","AWD","4WD"]},{key:"fuel_type",label:"Fuel Type",type:"select",options:["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"]},{key:"seating_capacity",label:"Seating Capacity",type:"text",placeholder:"e.g. 5 seats"},{key:"doors",label:"Number of Doors",type:"text",placeholder:"e.g. 4"},{key:"safety_features",label:"Safety Features (comma separated)",type:"text",placeholder:"ABS, Airbags, Lane Assist, Traction Controlâ€¦"},{key:"color",label:"Color",type:"text"},{key:"condition",label:"Condition",type:"select",options:["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],required:!0},{key:"price",label:"Price",type:"number",required:!0},{key:"stock_quantity",label:"Stock Qty",type:"number"},{key:"warranty",label:"Warranty",type:"text"},{key:"description",label:"Description",type:"textarea",span:2}]);for(const e of Object.keys(N))N[e]=N[e].flatMap(t=>t.key!=="price"?[t]:[{key:"real_price",label:"Real Price (USD) â€” crossed out when a discount is active",type:"number",placeholder:"e.g. 250000 â€” original price before discount"},{...t,label:"Discount Price (USD) â€” the price customers pay",placeholder:"e.g. 200000 â€” the price customers actually pay"}]);function fi(e=""){return Oe.map(t=>`<option value="${t.code}" ${e===t.code?"selected":""}>${t.flag} ${t.name}</option>`).join("")}function hi(e="USD"){return ti.map(t=>`<option value="${t}" ${e===t?"selected":""}>${t}</option>`).join("")}function Kt(e){return String(e||"").split(",").map(t=>t.trim()).filter(Boolean)}function C(e,t){const a=document.querySelector(`[name="${e}"]`);!a||t==null||(a.value=t)}function Jt(e){const t=document.getElementById(e);t&&(t.min=String(B),t.max=String(O),t.placeholder=`Price (${B} - ${O})`)}function Ia(e){const t=document.getElementById(`${e}-country_code`),a=document.getElementById(`${e}-country`),i=document.getElementById(`${e}-currency`);if(!t)return;const n=Oe.find(r=>r.code===t.value);a&&n&&(a.value=n.name),i&&n&&(i.value=da(n.code))}function ft(e,t){const a=document.getElementById(`${e}-image-requirement`),i=document.getElementById(`${e}-required_image_count`);i&&(i.value=t?String(t):""),a&&(t>0?(a.textContent=`This template fits up to ${t} images. Fewer images are perfectly fine â€” you can save and publish anytime.`,a.classList.remove("hidden")):(a.textContent="",a.classList.add("hidden")))}function Qt(e,t="full"){const a=document.getElementById("pf-catalog_template_id")?.value||"",i=document.getElementById("pf-currency")?.value||"USD",n=parseFloat(document.getElementById("pf-price")?.value)||B,r=Ja({templateId:a,listingType:"product",category:e,countryCode:"US",currency:i,price:n});if(!r){ft("pf",yi.includes(e)?24:0);return}ft("pf",r.requiredImageCount||0),C("currency",r.currency),C("subcategory",r.subcategory),C("features_text",r.features.join(", ")),C("highlights_text",r.highlights.join(", ")),C("seo_keywords_text",r.seo_keywords.join(", ")),t==="full"?(C("title",r.title),C("description",r.description),C("brand",r.brand||""),C("model",r.model||""),C("color",r.color||""),C("size",r.size||""),C("condition",r.condition||"New")):C("description",r.description)}function Xt(e="full"){const t=document.getElementById("ppf-catalog_template_id")?.value||"",a=document.getElementById("ppf-country_code")?.value||"US",i=document.getElementById("ppf-currency")?.value||"USD",n=parseFloat(document.getElementById("ppf-price")?.value)||B,r=Ja({templateId:t,listingType:"property",category:"Real Estate",countryCode:a,currency:i,price:n});if(!r){ft("ppf",0);return}ft("ppf",r.requiredImageCount||0),C("country",r.country),C("country_code",r.country_code),C("currency",r.currency),C("subcategory",r.subcategory),C("product_location",r.product_location),C("features_text",r.features.join(", ")),C("highlights_text",r.highlights.join(", ")),C("seo_keywords_text",r.seo_keywords.join(", ")),e==="full"?(C("title",r.title),C("description",r.description),C("property_type",r.property_type||""),C("bedrooms",r.bedrooms??""),C("bathrooms",r.bathrooms??""),C("building_size",r.building_size||""),C("land_size",r.land_size||""),C("furnished",r.furnished||"")):C("description",r.description)}window.applyProductCatalogTemplate=function(e,t="full"){Qt(e,t)};window.applyPropertyCatalogTemplate=function(e="full"){Xt(e)};function qn(e){return N[e]||N.default}function Hn(e,t={},a=!1){return qn(e).map(n=>{const r=t[n.key]||"",s=n.span===2?"sm:col-span-2":"",l=!a&&n.required?"required":"",o=n.placeholder||n.label;let c="";if(n.type==="select")c=`<select class="input-field" name="${n.key}" id="pf-${n.key}" ${l}>
        <option value="">Selectâ€¦</option>
        ${n.options.map(u=>`<option value="${u}" ${r===u?"selected":""}>${u}</option>`).join("")}
      </select>`;else if(n.type==="textarea")c=`<textarea class="input-field" name="${n.key}" id="pf-${n.key}" rows="3" placeholder="Write a detailed descriptionâ€¦">${d(r)}</textarea>`;else{const m=["brand","model","color","size","material","platform"].includes(n.key)?`pf-list-${n.key}`:"",f=({brand:["Apple","Samsung","Sony","LG","HP","Dell","Lenovo","Asus","Nike","Adidas","Puma","Gucci","Rolex","Toyota","Mercedes","BMW","Tesla"],model:["Pro","Ultra","Max","SE","Standard","Plus","Series 1","Series 2"],color:["Black","White","Silver","Blue","Red","Green","Gold","Gray","Pink","Brown"],size:["XS","S","M","L","XL","XXL","32","34","36","38","40","42"],material:["Cotton","Leather","Stainless Steel","Aluminum","Wood","Glass","Plastic"],platform:["PS5","Xbox Series X","Nintendo Switch","PC","Android","iOS"]}[n.key]||[]).map(p=>`<option value="${d(p)}"></option>`).join("");c=`<input type="${n.type}" class="input-field" name="${n.key}" id="pf-${n.key}" value="${d(r)}" placeholder="${o}" ${m?`list="${m}"`:""} ${l}>${m?`<datalist id="${m}">${f}</datalist>`:""}`}return`<div class="${s}"><label class="lbl">${n.label}${n.required?a?"":" *":""}</label>${c}</div>`}).join("")}window.showAddProductStep1=function(){D(`
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
    </div>`),window.lucide&&lucide.createIcons()};window.filterProductCategoryChoices=function(e){const t=String(e||"").trim().toLowerCase();document.querySelectorAll("#product-category-grid [data-category]").forEach(a=>{const i=!t||a.dataset.category.includes(t);a.classList.toggle("hidden",!i)})};window.showAddProductStep2=function(e,t={}){const a=!!t.property_id,i=Ka("product",e),n=t.currency||"USD";D(`
    <div class="modal-overlay" onclick="if(event.target===this)closeProductFormModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between gap-3 mb-6">
          <div class="min-w-0">
            <h3 class="text-2xl font-black text-white">${a?"Edit Product":"Add Product"} â€” ${d(e)}</h3>
            <p class="text-sm text-gray-500 mt-1 truncate">${a?`Editing: ${d(t.property_id)}`:"Fill in the product details below"}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${a?'<button type="button" onclick="closeProductFormModal()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Product Manager</button>':'<button type="button" onclick="showAddProductStep1()" class="btn-press px-4 py-2.5 rounded-xl text-sm font-bold bg-gray-700/60 hover:bg-gray-600 text-gray-200 transition flex items-center gap-1.5" title="Change category"><i data-lucide="arrow-left" class="w-4 h-4"></i> Category</button>'}
            <button type="button" onclick="closeProductFormModal()" class="btn-press px-4 h-11 flex items-center justify-center rounded-xl text-sm font-bold uppercase tracking-wide text-gray-400 hover:text-white hover:bg-gray-800 transition" title="Close (X) â€” return to Product Manager">
              <i data-lucide="x" class="w-4 h-4 mr-1.5"></i>Back
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
              <div class="sm:col-span-2"><label class="lbl">Currency</label><select class="input-field" name="currency" id="pf-currency" onchange="applyProductCatalogTemplate('${d(e)}')">${hi(n)}</select></div>
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
              ${(t.images||[]).map((r,s)=>$e(r,s)).join("")}
            </div>
            <p class="text-sm text-gray-500 mt-1">Drag to reorder â€¢ âœ• deletes any image (even the main/cover â€” the next image becomes the cover) â€¢ â†» replaces â€¢ Upload up to 24 gallery images + videos</p>
            <p id="gallery-counter" class="text-sm mt-1 font-bold text-gray-400"></p>
            <div id="image-url-inputs">
              ${(t.images||[]).map((r,s)=>`<input type="hidden" name="images" id="img-url-${s}" value="${d(r)}">`).join("")}
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
            ${Hn(e,t,a)}
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
              <p class="text-sm text-gray-500 mt-1">Allowed price range is ${B} to ${O} in the selected currency.</p>
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
    </div>`),Ct(),It(),Jt("pf-price"),Jt("pf-real_price"),Qt(e,"pricing"),document.getElementById("pf-price")?.addEventListener("input",()=>Qt(e,"pricing")),Jn(e,t.property_id||""),window._pfEscapeHandler=r=>{r.key==="Escape"&&closeProductFormModal()},document.addEventListener("keydown",window._pfEscapeHandler)};window.closeProductFormModal=function(){window._pfEscapeHandler&&(document.removeEventListener("keydown",window._pfEscapeHandler),window._pfEscapeHandler=null),window._productPublishInFlight=!1,te=-1,oe(),E()};window.switchProductFormCategory=function(e){const t=document.getElementById("product-form");if(!t)return;const a={},i=new FormData(t);for(const[n,r]of i.entries())n==="images"?(a.images=a.images||[],r&&!String(r).startsWith("blob:")&&a.images.push(String(r))):n==="tags"?(a.tags=a.tags||[],a.tags.push(r)):a[n]=r;a.is_featured=t.querySelector('[name="is_featured"]')?.checked||!1,a.is_active=t.querySelector('[name="is_active"]')?.checked||!1,a.property_id&&String(a.property_id).trim()?showAddProductStep2(e,a):showAddProductStep2(e,{images:a.images||[],...a})};function $e(e,t){const a=nt(e),i=ke(e);let n;return a?n='<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-300 select-none"><span class="text-2xl leading-none">📄</span><span class="text-[10px] font-bold mt-1">PDF</span></div>':i?n=`<video src="${d(e)}" muted loop preload="metadata" playsinline class="w-full h-full object-cover" onerror="this.style.display='none'"></video>
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow"><svg class="w-4 h-4 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:n=`<img src="${d(e)}" onerror="this.src='/fallback.svg'">`,`<div class="img-thumb ${t===0?"cover-img":""}" data-index="${t}" data-url="${d(e)}" title="${t===0?"Cover (main)":(i?"Video ":"Image ")+(t+1)}">
    ${n}
    <button class="rm" onclick="removeImage(${t})" type="button" title="Delete">✕</button>
    <button class="rp" onclick="document.getElementById('rp-input-${t}').click()" type="button" title="Replace">↻</button>
    <input type="file" accept="image/*,video/mp4,video/webm,video/*,application/pdf" class="rp-input" id="rp-input-${t}" onchange="replaceImage(${t}, this)">
  </div>`}function Ct(){const e=document.getElementById("drop-zone");e&&(e.addEventListener("dragover",t=>{t.preventDefault(),e.classList.add("drag-over")}),e.addEventListener("dragleave",()=>e.classList.remove("drag-over")),e.addEventListener("drop",t=>{t.preventDefault(),e.classList.remove("drag-over"),Gn(t.dataTransfer.files)}))}function It(){const e=document.getElementById("image-preview");!e||!window.Sortable||new Sortable(e,{animation:150,onEnd:()=>Ge()})}window.handleImageUpload=async function(e){await ba(e.target.files)};async function Gn(e){await ba(e)}async function vi(e,t,a){const i=new Array(e.length);let n=0;const r=Array.from({length:Math.min(Math.max(t,1),e.length)},async()=>{for(;n<e.length;){const s=n++;try{i[s]=await a(e[s],s)}catch{i[s]=null}}});return await Promise.all(r),i}function Vn(e,t,a,i,n=9e4){return new Promise(r=>{let s=!1;const l=setTimeout(()=>{s||(s=!0,r({error:{message:`Upload timed out after ${Math.round(n/1e3)}s — the network is too slow for this file size.`}}))},n);y.storage.from(e).upload(t,a,i).then(o=>{s||(s=!0,clearTimeout(l),r(o))})})}async function Wn(e,t=1920,a=.82){const i=URL.createObjectURL(e);try{const n=new Image;await new Promise((m,h)=>{n.onload=m,n.onerror=h,n.src=i});const r=Math.min(1,t/Math.max(n.width,n.height)),s=Math.max(1,Math.round(n.width*r)),l=Math.max(1,Math.round(n.height*r)),o=document.createElement("canvas");o.width=s,o.height=l,o.getContext("2d").drawImage(n,0,0,s,l);const c=await new Promise(m=>o.toBlob(m,"image/jpeg",a));if(!c||!c.size)return null;const u=(e.name||"photo.jpg").replace(/\.[^.]+$/i,"")+".jpg";return new File([c],u,{type:"image/jpeg"})}catch{return null}finally{URL.revokeObjectURL(i)}}async function ba(e){const t=document.getElementById("image-preview");if(!t)return;const a=[];for(const n of e){const r=n.type==="application/pdf"||nt(n.name),s=Ce(n);if(!(!n.type.startsWith("image/")&&!r&&!s)){if(s&&n.size>100*1024*1024){b("Video must be under 100 MB.","error");continue}a.push(n)}}if(!a.length)return;const i=a.map(()=>{const n=document.createElement("div");return n.className="img-thumb uploading",n.style.cssText="min-width:90px;min-height:80px;",n.innerHTML='<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-400"><div class="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mb-1.5"></div><span class="text-[10px] font-bold">Uploading…</span></div>',t.appendChild(n),n});await vi(a,3,async(n,r)=>{const s=i[r],l=await ga(n);setTimeout(()=>{if(!(!s||!s.isConnected)){if(s.remove(),l){const o=document.createElement("div");o.innerHTML=$e(l,r);const c=o.firstElementChild,u=s.nextSibling;u?t.insertBefore(c,u):t.appendChild(c)}else b(`Failed to upload ${Ce(n)?"video":"image"}. Try a smaller file.`,"error");Ge(),st(),Me(),window.lucide&&lucide.createIcons()}},0)})}async function ga(e){try{const{data:{session:t}}=await y.auth.getSession(),a=String(e.type||"").startsWith("image/"),i=Ce(e);let n=e;if(a&&e.size>250*1024){const o=await Wn(e);o&&o.size&&(n=o)}const r=n.type==="image/jpeg"?"jpg":(e.name||"photo.jpg").split(".").pop()||"jpg",s=`products/${Date.now()}-${Math.random().toString(36).slice(2)}`,l=i?3e5:9e4;for(let o=0;o<2;o++){const c=`${s}${o?"-"+Math.random().toString(36).slice(2,7):""}.${r}`,{error:u}=await Vn("product-images",c,n,{contentType:n.type||e.type,upsert:!1},l);if(u)console.warn("product-images upload failed (attempt "+(o+1)+"):",u.message||u);else{const{data:m}=y.storage.from("product-images").getPublicUrl(c);if(m&&m.publicUrl)return m.publicUrl}}if(i)return null;try{const o=await F._downscaleImage(n,1200);if(o)return o}catch{}return URL.createObjectURL(e)}catch{return Ce(e)?null:URL.createObjectURL(e)}}async function zn(){if(!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform()))return null;try{const{Camera:e,MediaTypeSelection:t}=await qa(async()=>{const{Camera:n,MediaTypeSelection:r}=await import("@capacitor/camera");return{Camera:n,MediaTypeSelection:r}},[]),{results:a}=await e.chooseFromGallery({mediaType:t.All,allowMultipleSelection:!0,includeMetadata:!0}),i=[];for(const n of a||[])if(n.webPath)try{const r=n.type===1,s=(n.metadata&&n.metadata.format||(r?"mp4":"jpg")).toLowerCase().replace(/^jpeg$/,"jpg"),l=await fetch(n.webPath).then(o=>o.blob());i.push(new File([l],`gallery-${Date.now()}-${Math.random().toString(36).slice(2)}.${s}`,{type:l.type||(r?"video/mp4":"image/jpeg")}))}catch{}return i}catch(e){return console.warn("Native gallery picker unavailable:",e),null}}window.pickMediaForForm=async function(e){if(!!!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform())){document.getElementById(e)?.click();return}const a=await zn();!a||!a.length||(e==="s1-img-upload"?await handleStep1Files(a):await ba(a))};window.removeImage=function(e){const t=document.getElementById("image-preview");if(!t)return;const a=[...t.children];a[e]&&a[e].remove(),Ge(),st(),Me()};window.replaceImage=async function(e,t){const a=document.getElementById("image-preview");if(!a||!t||!t.files||!t.files[0])return;const i=t.files[0],n=i.type==="application/pdf"||nt(i.name),r=Ce(i);if(!i.type.startsWith("image/")&&!n&&!r){b("Please choose an image, video, or PDF file.","error");return}if(r&&i.size>100*1024*1024){b("Video must be under 100 MB.","error");return}const s=await ga(i);if(!s)return;const o=[...a.querySelectorAll(".img-thumb")][e];o&&(o.outerHTML=$e(s,e),Ge(),st(),Me(),b(n?"Document replaced. Save to apply.":r?"Video replaced. Save to apply.":"Image replaced. Save to apply.","info"))};function Ge(){const e=document.getElementById("image-preview"),t=document.getElementById("image-url-inputs");!e||!t||(t.innerHTML="",[...e.querySelectorAll(".img-thumb")].forEach((a,i)=>{const n=a.dataset.url||(a.querySelector("img")?a.querySelector("img").src:"");if(!n)return;const r=document.createElement("input");r.type="hidden",r.name="images",r.id=`img-url-${i}`,r.value=n,t.appendChild(r),a.dataset.index=i;const s=a.querySelector(".rm");s&&s.setAttribute("onclick",`removeImage(${i})`);const l=a.querySelector(".rp");l&&l.setAttribute("onclick",`document.getElementById('rp-input-${i}').click()`);const o=a.querySelector(".rp-input");o&&(o.id=`rp-input-${i}`,o.onchange=()=>replaceImage(i,o))}))}function st(){const e=document.getElementById("image-preview");e&&[...e.querySelectorAll(".img-thumb")].forEach((t,a)=>{t.classList.toggle("cover-img",a===0);const i=ke(t.dataset.url);t.title=a===0?"Cover (main)":(i?"Video ":"Image ")+(a+1)})}function Me(){const e=document.getElementById("image-preview"),t=document.getElementById("gallery-counter");if(!e||!t)return;const a=[...e.querySelectorAll(".img-thumb")],i=a.length,n=a.filter(s=>ke(s.dataset.url)).length,r=i-n;if(i===0)t.textContent="No media yet — you can still save and publish anytime";else{const s=[];r>0&&s.push(`${r} image${r>1?"s":""}`),n>0&&s.push(`${n} video${n>1?"s":""}`),t.textContent=`${s.join(" + ")} — you can save and publish anytime`}t.className="text-sm mt-1 font-bold text-gray-400"}function Re(e,t){return`kco_product_form_autosave_${e}_${t||"new"}`}function Yn(e){const t=new FormData(e),a={images:[],tags:[],fields:{}};for(const[i,n]of t.entries())i==="images"?n&&!String(n).startsWith("blob:")&&a.images.push(String(n)):i==="tags"?a.tags.push(String(n)):a.fields[i]=String(n);return a.fields.is_featured=e.querySelector('[name="is_featured"]')?.checked?"on":"",a.fields.is_active=e.querySelector('[name="is_active"]')?.checked?"on":"",a}function Kn(e,t){if(!t||typeof t!="object")return!1;const a=t.fields||{};Object.entries(a).forEach(([n,r])=>{const s=e.querySelector(`[name="${n}"]`);s&&(s.type==="checkbox"?s.checked=r==="on"||r===!0:s.value=r==null?"":String(r))});const i=Array.isArray(t.tags)?t.tags:[];if(e.querySelectorAll('input[name="tags"]').forEach(n=>{n.checked=i.includes(n.value)}),Array.isArray(t.images)){const n=document.getElementById("image-preview");n&&(n.innerHTML=t.images.map((r,s)=>$e(r,s)).join(""),Ge(),st(),Me())}return!0}function Zt(){const e=document.getElementById("product-review-content"),t=document.getElementById("product-form");if(!e||!t)return;const a=t.querySelector('[name="title"]')?.value||"Untitled Product",i=t.querySelector('[name="brand"]')?.value||"N/A",n=parseFloat(t.querySelector('[name="price"]')?.value||"0")||0,r=parseFloat(t.querySelector('[name="real_price"]')?.value||"0")||0,s=t.querySelector('[name="stock_quantity"]')?.value,l=s===""||s==null?"Unlimited":s,o=I.section==="products"&&document.querySelector("#product-form")?.dataset?.category||"",c=[...t.querySelectorAll('input[name="tags"]:checked')].map(h=>h.value),u=document.querySelectorAll("#image-preview .img-thumb").length,m=t.querySelector('[name="is_active"]')?.checked;e.innerHTML=`
    <div class="grid grid-cols-2 gap-2">
      <div><span class="text-gray-500">Title</span><p class="text-white font-semibold">${d(a)}</p></div>
      <div><span class="text-gray-500">Brand</span><p class="text-white font-semibold">${d(i)}</p></div>
      <div><span class="text-gray-500">Price</span><p class="text-emerald-300 font-semibold">${r>n?`<span class="line-through text-gray-500 mr-1">$${r.toLocaleString()}</span>`:""}$${n.toLocaleString()}</p></div>
      <div><span class="text-gray-500">Stock</span><p class="text-white font-semibold">${d(l)}</p></div>
      <div><span class="text-gray-500">Media</span><p class="text-white font-semibold">${u}</p></div>
      <div><span class="text-gray-500">Status</span><p class="${m?"text-emerald-300":"text-amber-300"} font-semibold">${m?"Published":"Draft / Hidden"}</p></div>
    </div>
    <div class="mt-2 text-gray-400">Tags: ${c.length?d(c.join(", ")):"No tags selected"}</div>
    ${o?`<div class="text-gray-500 mt-1">Category: ${d(o)}</div>`:""}
  `}window.previewProductDraft=function(){const e=document.getElementById("product-form");if(!e)return;const t=document.querySelector("#image-preview img")?.src||"/fallback.svg",a=e.querySelector('[name="title"]')?.value||"Untitled Product",i=e.querySelector('[name="description"]')?.value||"No description yet.",n=e.querySelector('[name="brand"]')?.value||"N/A",r=parseFloat(e.querySelector('[name="price"]')?.value||"0")||0,s=parseFloat(e.querySelector('[name="real_price"]')?.value||"0")||0,l=e.dataset.category||"Product",o=e.querySelector('[name="stock_quantity"]')?.value||"Unlimited",c=e.querySelector('[name="is_active"]')?.checked;D(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box wide">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-black text-white">Live Draft Preview</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white transition"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="${d(t)}" class="w-full h-64 object-cover rounded-xl border border-blue-500/20" onerror="this.src='/fallback.svg'">
          <div class="space-y-2">
            <h4 class="text-xl font-black text-white">${d(a)}</h4>
            <div class="flex items-center gap-2">${K(c?"active":"inactive")}<span class="badge bg-blue-500/10 text-blue-300 border-blue-500/20">${d(l)}</span></div>
            <p class="text-sm text-gray-400">${d(i)}</p>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Price</span><p class="text-emerald-300 font-black">${s>r?`<span class="text-xs line-through text-gray-500 mr-1">$${s.toLocaleString()}</span>`:""}$${r.toLocaleString()}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2"><span class="text-gray-500">Stock</span><p class="text-gray-200 font-bold">${d(o)}</p></div>
              <div class="glass-soft border border-blue-500/15 rounded-lg p-2 col-span-2"><span class="text-gray-500">Brand</span><p class="text-gray-200 font-bold">${d(n)}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>`)};function Jn(e,t){const a=document.getElementById("product-form");if(!a)return;a.dataset.category=e;const i=Re(e,t),n=document.getElementById("product-autosave-note");if(!t)try{const o=localStorage.getItem(i);if(o){const c=JSON.parse(o);Kn(a,c)&&n&&(n.textContent="Autosave restored from your last session.",n.classList.remove("hidden"))}}catch{}const r=()=>{try{localStorage.setItem(i,JSON.stringify(Yn(a))),n&&(n.textContent=`Auto saved at ${new Date().toLocaleTimeString()}`,n.classList.remove("hidden"))}catch{}Zt()};let s;const l=()=>{clearTimeout(s),s=setTimeout(r,500)};a.querySelectorAll("input, textarea, select").forEach(o=>{o.addEventListener("input",l),o.addEventListener("change",l)}),Zt(),Me()}const Qn=["New","Refurbished","Used - Like New","Used - Good","Used - Fair"],Xn=["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Motorcycle","Yacht","Other"],Zn=["Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"],er=["Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"],tr=["FWD","RWD","AWD","4WD"],wi=new Set(["price","real_price","stock_quantity","currency","images","tags","verification_status","is_featured","is_active","sku"]);function Ta(e){const t=e.id?`label[for="${e.id}"]`:null,a=t?document.querySelector(t):null;if(a)return a.textContent.replace(/\s+/g," ").trim().slice(0,60);const i=e.closest("div");if(i){const n=i.querySelector("label");if(n)return n.textContent.replace(/\s+/g," ").trim().slice(0,60)}return String(e.name||"").replace(/_/g," ")}function ar(e){const t=typeof e=="string"?document.querySelector(e):e;if(!t)return[];const a=new Set,i=[];return t.querySelectorAll("input[name], select[name], textarea[name]").forEach(n=>{const r=String(n.name||"");if(!r||r==="images"||a.has(r)||["hidden","file","submit","button"].includes(n.type))return;if(a.add(r),n.type==="checkbox"){const l=[...t.querySelectorAll(`input[name="${r}"]`)];i.push({key:r,label:Ta(n),type:"checkbox-group",options:l.map(o=>o.value).filter(Boolean),required:n.required});return}if(n.type==="radio")return;const s=n.tagName==="SELECT"?"select":n.tagName==="TEXTAREA"?"textarea":n.type==="number"?"number":"text";i.push({key:r,label:Ta(n),type:s,options:n.tagName==="SELECT"?[...n.options].map(l=>l.value).filter(Boolean):null,required:!!n.required})}),i}function ir(e){return!e||!e.length?"":`
THE COMPLETE LIST OF FORM FIELDS (every single one MUST be accounted for):
${e.filter(a=>!wi.has(a.key)).map(a=>{let i=a.type;return a.type==="select"&&a.options&&a.options.length<=24?i+=` [options: ${a.options.join(" | ")}]`:a.type==="checkbox-group"&&a.options&&a.options.length?i+=` [multi-select: ${a.options.join(" | ")}]`:a.type==="number"?i="number":a.type==="textarea"&&(i="long text"),`- "${a.key}" (${a.label}) — ${i}`}).join(`
`)}
`}const nr=/^(n\/?a|none|unknown|not (available|specified|found|visible|applicable)|null|undefined|-{1,}|no data)$/i;function Gt(e,t){const a={...t||{}},i=new Set(Array.isArray(a.estimated)?a.estimated.map(u=>String(u)):[]),n=new Set(Array.isArray(a.missing_fields)?a.missing_fields.map(u=>String(u)):[]),r=[],s=[],l=u=>{if(u==null)return"";Array.isArray(u)&&(u=u.filter(h=>h!=null&&String(h).trim()!=="").join(", "));let m=String(u).replace(/\s+/g," ").trim();return m=m.replace(/^(answer|value|result|extracted)\s*[:\-]\s*/i,""),m},o=u=>{const m=l(u).replace(/[^0-9.,\-]/g,"").replace(/,(?=\d{3}\b)/g,"").replace(",","."),h=parseFloat(m);return Number.isFinite(h)?h:NaN};for(const u of e||[]){if(wi.has(u.key))continue;const m={key:u.key,label:u.label,status:"empty-ok",value:null,note:""};if(u.type==="checkbox-group"){const p=Array.isArray(a[u.key])?a[u.key].map(l).filter(Boolean):[],g=u.options&&u.options.length?p.filter(x=>u.options.includes(x)):p;g.length?(a[u.key]=g,m.status="filled",m.value=g.join(", ")):(delete a[u.key],p.length&&(m.status="flagged",m.note="values not in the allowed badge list were dropped",s.push(`${u.label}: invalid selection ignored`))),r.push(m);continue}if(!(a[u.key]!=null&&l(a[u.key])!=="")){m.status=n.has(u.key)?"missing":"empty-ok",r.push(m);continue}if(nr.test(l(a[u.key]))){delete a[u.key],n.add(u.key),m.status="missing",m.note="document/AI said the value is unavailable",r.push(m);continue}if(u.type==="number"){const p=l(a[u.key]),g=o(a[u.key]);if(!Number.isFinite(g)){delete a[u.key],n.add(u.key),m.status="flagged",m.note=`"${p}" is not a valid number`,s.push(`${u.label}: not a valid number`),r.push(m);continue}if(/year/.test(u.key)&&(g<1800||g>new Date().getFullYear()+2)){delete a[u.key],n.add(u.key),m.status="flagged",m.note=`${g} is outside the plausible range`,s.push(`${u.label}: implausible value ${g}`),r.push(m);continue}a[u.key]=g,m.status="filled",m.value=String(g),i.has(u.key)&&(m.status="estimated",m.note="AI estimate â€” confirm"),r.push(m);continue}if(u.type==="select"&&u.options&&u.options.length){const p=xi({options:u.options.map(g=>({value:g}))},l(a[u.key]));if(p==null){m.status="flagged",m.note=`"${l(a[u.key])}" does not match any option â€” left empty`,s.push(`${u.label}: no matching option`),delete a[u.key],n.add(u.key),r.push(m);continue}a[u.key]=p,m.status="filled",m.value=p,p!==l(t?.[u.key])&&(m.note="matched to the closest option"),r.push(m);continue}let f=l(a[u.key]);u.type!=="textarea"&&u.type!=="text-long"&&f.length>120&&!["title"].includes(u.key)&&(m.status="flagged",m.note="unusually long â€” check it landed in the right field",s.push(`${u.label}: suspiciously long value`)),a[u.key]=f,m.status="filled",m.value=f.length>48?f.slice(0,48)+"â€¦":f,i.has(u.key)&&(m.status="estimated",m.note="AI estimate â€” confirm"),r.push(m)}if(e&&e.length){const u=new Set([...e.map(m=>m.key),"estimated","missing_fields","features","highlights","seo_keywords"]);Object.keys(a).forEach(m=>{u.has(m)||delete a[m]})}a.missing_fields=r.filter(u=>u.status==="missing").map(u=>u.key),a.estimated=r.filter(u=>u.status==="estimated").map(u=>u.key);const c={total:r.length,filled:r.filter(u=>u.status==="filled").length,estimated:r.filter(u=>u.status==="estimated").length,flagged:r.filter(u=>u.status==="flagged").length,missing:r.filter(u=>u.status==="missing").length};return{specs:a,checklist:r,flags:s,summary:c}}function ya(e,t){if(!e||!e.length)return"";const a={filled:'<span class="text-emerald-400 font-bold">âœ“</span>',estimated:'<span class="text-blue-300 font-bold">â‰ˆ</span>',flagged:'<span class="text-red-400 font-bold">!</span>',missing:'<span class="text-gray-500">â€”</span>',"empty-ok":'<span class="text-gray-700">Â·</span>'},i=e.filter(r=>r.status!=="empty-ok").map(r=>`<li class="flex items-start gap-2"><span class="shrink-0 w-4">${a[r.status]||""}</span><span><b>${d(r.label)}</b> <span class="text-gray-600">(${d(r.key)})</span>${r.value?` â€” <span class="text-gray-300">${d(String(r.value))}</span>`:""}${r.note?` <span class="text-gray-500">${d(r.note)}</span>`:""}</span></li>`).join(""),n=t.total-t.filled-t.estimated-t.flagged-t.missing;return`<details class="mt-2 rounded-xl border border-violet-500/20 bg-violet-500/5 p-3">
    <summary class="cursor-pointer text-[11px] font-bold text-violet-300 select-none">Field checklist â€” ${t.filled} filled Â· ${t.missing} not present in document Â· ${t.flagged} need review${t.estimated?` Â· ${t.estimated} estimates`:""}${n>0?` Â· ${n} not applicable to this listing type`:""}</summary>
    <ul class="mt-2 space-y-1.5 text-[11px] text-gray-300 max-h-64 overflow-y-auto pr-1">${i||'<li class="text-gray-500">No applicable fields found.</li>'}</ul>
  </details>`}const Ue={activeProvider:"gemini",maxImages:4,PROVIDERS:{gemini:{label:"Google Gemini (Free Tier)",scan:async(e,t)=>{const a=typeof t.onProgress=="function"?t.onProgress:()=>{};a(1,"Identifying the exact product from your imagesâ€¦");const i=await F.identifyProduct(e,t);if(!i||i.identified===!1)return{identification:i,specs:null,price:null};a(2,"Completing specifications and estimating a fair market priceâ€¦");const n=await F.completeSpecsAndPrice(e,i,t).catch(()=>null);return{identification:i,specs:n?n.specs:null,price:n?n.price:null}}}},async scan(e,t){const a=this.PROVIDERS[this.activeProvider];if(!a)throw new Error(`Scanner provider "${this.activeProvider}" is not configured.`);return a.scan(e||[],t)}};function xi(e,t){const a=[...e.options||[]].map(s=>s.value).filter(Boolean);if(a.includes(String(t)))return String(t);const i={petrol:"Gasoline",gas:"Gasoline",gasoline:"Gasoline",unleaded:"Gasoline",ev:"Electric",electric:"Electric","fully electric":"Electric",hybrid:"Hybrid","hybrid electric":"Hybrid","plug-in hybrid":"Plug-in Hybrid",phev:"Plug-in Hybrid",auto:"Automatic",automatic:"Automatic","automatic transmission":"Automatic",manual:"Manual","manual transmission":"Manual",cvt:"CVT","continuously variable":"CVT","dual clutch":"Dual-Clutch",dct:"Dual-Clutch",fwd:"FWD","front-wheel drive":"FWD","front wheel drive":"FWD",rwd:"RWD","rear-wheel drive":"RWD","rear wheel drive":"RWD",awd:"AWD","all-wheel drive":"AWD","all wheel drive":"AWD","4wd":"4WD","four-wheel drive":"4WD","four wheel drive":"4WD","4x4":"4WD",sedan:"Sedan",saloon:"Sedan",suv:"SUV",hatchback:"Hatchback",coupe:"Coupe","coupÃ©":"Coupe",convertible:"Convertible",wagon:"Wagon",estate:"Wagon",pickup:"Pickup","pick up":"Pickup",van:"Van",truck:"Truck","sports car":"Sports Car",motorcycle:"Motorcycle",yacht:"Yacht","like new":"Used - Like New","used - like new":"Used - Like New"},n=String(t).toLowerCase().trim();return i[n]?i[n]:a.find(s=>s.toLowerCase().includes(n)||n.includes(s.toLowerCase()))||null}function rr(e,t,a,i){const n={},r=[],s=new Map((i||[]).map(f=>[f.key,f])),l=f=>s.has(f),o=f=>t[f]==null||String(Array.isArray(t[f])?t[f].join(", "):t[f]).trim()==="",c=(f,p)=>{if(p==null||String(p).trim()==="")return;const g=s.get(f);!g||!o(f)||g.type==="select"&&g.options&&g.options.length&&!g.options.includes(p)||(n[f]=p,r.push(f))},u=a||{},m=/cars?|trucks?|vehicle|motor|marine/i.test(String(e||""))||u.listing_type==="vehicle"||!!u.body_type,h=/estate|propert|real|house|villa|home|land/i.test(String(e||""))||u.listing_type==="property"||!!u.property_type;if(m){const f=String(t.body_type||u.body_type||""),p=f.toLowerCase(),g=[t.engine,t.trim,t.mileage,t.fuel_economy,t.title,u.model,u.brand,f,t.wheels_tires].filter(Boolean).join(" ").toLowerCase(),x=parseInt(String(t.model_year||u.year||""),10);let _="";/plug[ -]?in|phev/.test(g)?_="Plug-in Hybrid":/hybrid|hev|mhev/.test(g)?_="Hybrid":/electric|tesla|\bbev\b|single[- ]?speed/.test(g)?_="Electric":/lpg|gpl|autogas|cng/.test(g)?_="LPG":/bio[- ]?diesel/.test(g)?_="Bio-diesel":/diesel|tdi|\bhdi\b|\bcrdi\b|\bcdti\b|\bd4d\b|\bdci\b|turbo[- ]?d/.test(g)?_="Diesel":(/gasoline|petrol|\bgas\b|unleaded/.test(g),_="Gasoline"),c("fuel_type",_);let v="";/manual|\bstick\b/.test(g)?v="Manual":/cvt|continuously/.test(g)?v="CVT":/dual[- ]?clutch|\bdct\b/.test(g)?v="Dual-Clutch":/semi[- ]?automatic|\bamt\b/.test(g)?v="Semi-Automatic":/automatic|\bauto\b|shift[- ]?tronic|torque[- ]?converter|\d[ -]?speed/.test(g)?v="Automatic":v=Number.isFinite(x)&&x<2014?"Manual":"Automatic",c("transmission",v);let w="";/4wd|\b4x4\b|four[- ]?wheel|quad/.test(g)?w="4WD":/awd|all[- ]?wheel/.test(g)?w="AWD":/rwd|rear[- ]?wheel/.test(g)?w="RWD":/fwd|front[- ]?wheel/.test(g)?w="FWD":/pickup|truck/.test(p)?w="4WD":/suv/.test(p)?w="AWD":/motorcycle/.test(p)?w="RWD":w="FWD",c("drive_type",w);const k={sedan:5,hatchback:5,coupe:4,convertible:4,wagon:5,suv:5,"sports car":2,"luxury sedan":5,pickup:5,truck:3,van:8,bus:20,motorhome:6,motorcycle:2,yacht:6,"jet ski":2},$={sedan:4,hatchback:5,coupe:2,convertible:2,wagon:5,suv:5,"sports car":2,"luxury sedan":4,pickup:4,truck:4,van:5,bus:2,motorhome:3,motorcycle:0,"jet ski":0};for(const[Q,ae]of[["seating_capacity",k],["doors",$]]){if(!l(Q))continue;const ie=Object.entries(ae).find(([X])=>p.includes(X));ie&&c(Q,String(ie[1]))}const S=String(t.vehicle_type||u.vehicle_type||"").toLowerCase();!f&&l("body_type")&&(/motorhome|rv/.test(S)?c("body_type","Motorhome"):/jet/.test(S)?c("body_type","Jet Ski"):/marine|boat|yacht/.test(S)?c("body_type","Yacht"):/bus/.test(S)?c("body_type","Bus"):/motorcycle/.test(S)?c("body_type","Motorcycle"):/truck/.test(S)&&c("body_type","Truck"));const T=String(t.condition||"").toLowerCase();!t.mileage&&/new/.test(T)&&l("mileage")&&c("mileage","0 mi"),!t.condition&&l("condition")&&c("condition","Used - Good"),!t.previous_owners&&l("previous_owners")&&c("previous_owners",/new/.test(T)?"None (new)":"1"),!t.registration_status&&l("registration_status")&&c("registration_status","Registered"),!t.inspection_status&&l("inspection_status")&&c("inspection_status","Not Inspected"),!t.warranty&&l("warranty")&&c("warranty","Manufacturer warranty - confirm remaining coverage with the seller")}if(h){const f=String(t.property_type||u.property_type||"").toLowerCase(),p=String(t.building_size||t.floor_plan_total_area||""),g=parseFloat(p.replace(/[^0-9.]/g,""));let x=null,_=null;if(Number.isFinite(g)&&g>100&&(x=Math.max(2,Math.min(6,Math.round(g/600))),_=Math.max(1,Math.min(4,x>4?3:x-1))),o("bedrooms")&&l("bedrooms")&&x&&c("bedrooms",String(x)),o("bathrooms")&&l("bathrooms")&&_&&c("bathrooms",String(_)),o("listing_status")&&l("listing_status")){const v=String(t.title||"")+" "+String(t.description||"");c("listing_status",/for rent|lease|\brent\b/.test(v.toLowerCase())?"rent":"sale")}if(o("furnished")&&l("furnished")&&c("furnished",/land|plot|acre/.test(f+" "+String(t.land_size||""))?"Unfurnished":"Furnished"),o("condition")&&l("condition")&&c("condition","Good"),o("floors")&&l("floors")){const v=/mansion|villa|townhouse/.test(f)?"2":/apartment|condo|single/.test(f)?"1":null;v&&c("floors",v)}o("kitchens")&&l("kitchens")&&c("kitchens","1"),o("parking_spaces")&&l("parking_spaces")&&/car|garage|parking/.test(String(t.garage||"").toLowerCase())&&c("parking_spaces","1"),o("property_type")&&l("property_type")&&c("property_type",/land|plot|acre/.test(f+" "+String(t.land_size||""))?"Land":"Single-Family Home")}return{specs:n,estimated:r}}function La(e){const t=[];return e.year&&t.push(e.year),e.brand&&t.push(e.brand),e.model&&t.push(e.model),!e.model&&e.body_type&&t.push(e.body_type),t.join(" ")||e.detected_name||""}const _i=new Set(["images","tags","currency","catalog_template_id","country_code","listing_type","category","property_id","id","slug","user_id","latitude","longitude","cover_image","video_url"]);function fa(e,{titleFallback:t="Product",descriptionFallback:a="",visionUsed:i=!0}={}){const n=document.querySelector(e);if(!n||!i)return 0;let r=0;return n.querySelectorAll("input, textarea, select").forEach(s=>{const l=String(s.name||"").trim();if(!l||_i.has(l))return;const o=String(s.type||"").toLowerCase();if(!["hidden","checkbox","radio","file","submit","button","image","password"].includes(o)&&!s.disabled&&String(s.value||"").trim()===""){if(l==="price"||l==="real_price"){const c=Number.isFinite(Number(B))?Number(B):1;s.value=String(c),r++;return}if(l==="stock_quantity"){s.value="1",r++;return}if(l==="title"){s.value=t,r++;return}if(l==="description"){s.value=a||`${t} â€” full details to be confirmed by the seller. Review and edit everything before publishing.`,r++;return}if(o==="number"||o==="range"||o==="tel"){s.value="0",r++;return}}}),r}function sr(e,t={}){const a=e&&e.identification&&e.identification.identified!==!1?e.identification:{},i=e&&e.specs?e.specs:{},n=e&&e.price?e.price:null,r=t&&t.visionUsed!==void 0?t.visionUsed:e&&e.visionUsed!==void 0?e.visionUsed:!0,s=[],l=$=>Array.isArray($)?$.join(", "):String($??"").trim(),o=($,S,T)=>{if(S==null||l([S])==="")return;const Q=document.querySelector(`#product-form [name="${$}"]`);if(!Q)return;let ae=String(S);if(T&&!T.includes(ae)){const ie=xi(Q,ae);if(ie===null)return;ae=ie}Q.value=ae,s.push($)};o("brand",a.brand),o("model",a.model),o("color",a.color),o("condition",a.condition,Qn),o("subcategory",a.subcategory),o("body_type",a.body_type||i.body_type,Xn),o("model_year",i.model_year||a.year),o("title",i.title||La(a)),o("description",i.description),o("engine",i.engine),o("transmission",i.transmission,Zn),o("fuel_type",i.fuel_type,er),o("drive_type",i.drive_type,tr),o("horsepower",i.horsepower),o("mileage",i.mileage),o("seating_capacity",i.seating_capacity),o("doors",i.doors),o("safety_features",l(i.safety_features)),o("storage",i.storage),o("ram",i.ram),o("processor",i.processor),o("display",i.display),o("graphics",i.graphics),o("os",i.os),o("material",i.material),o("size",i.size),o("gender",i.gender),o("platform",i.platform),o("type",i.type||a.type),o("age_range",i.age_range),o("skin_type",i.skin_type),o("ingredients",i.ingredients),o("dimensions",i.dimensions),o("author",i.author),o("publisher",i.publisher),o("language",i.language),o("format",i.format),o("isbn",i.isbn),o("pages",i.pages),o("edition",i.edition),o("quantity",i.quantity),o("pet_type",i.pet_type),o("lens",i.lens),o("sensor",i.sensor),o("megapixels",i.megapixels),o("video",i.video),o("license",i.license),o("version",i.version),o("duration",i.duration),o("followers",i.followers),o("engagement",i.engagement),o("niche",i.niche),o("usage",i.usage),o("shelf_life",i.shelf_life),o("assembly",i.assembly),o("weatherproof",i.weatherproof),o("warranty",i.warranty||a.warranty),o("availability_status",i.availability_status),o("features_text",l(i.features)),o("highlights_text",l(a.highlights||i.highlights)),o("seo_keywords_text",l(i.seo_keywords));const c=new Set((Array.isArray(i.tags)?i.tags:[]).map($=>String($).trim()));document.querySelectorAll('#product-form input[name="tags"]').forEach($=>{c.has($.value)&&($.checked=!0,s.push("tags"))});const u=Number(i.stock_quantity);Number.isFinite(u)&&u>0&&o("stock_quantity",u);const m=document.querySelector('#product-form [name="price"]'),h=document.querySelector('#product-form [name="real_price"]'),f=n?Number(n.estimated_price):NaN,p=n?Number(n.suggested_discount_price):NaN,g=Number.isFinite(Number(B))?Number(B):0,x=Number.isFinite(Number(O))?Number(O):999999999,_=$=>Math.max(g,Math.min(x,Math.round($)));if(Number.isFinite(f)&&f>0){h&&(h.value=String(_(f)),s.push("real_price"));const $=Number.isFinite(p)&&p>0&&p<f?p:f;m&&(m.value=String(_($)),s.push("price"))}const v=La(a)||a.detected_name||"Product",w=i.description||`${v} for sale on Weverse Online Shop. Review the details below and edit anything before publishing.`,k=fa("#product-form",{titleFallback:v,descriptionFallback:w,visionUsed:r});return k&&s.push(`${k} auto-completed (safe defaults)`),Zt(),{filled:s}}function Ve(e){const t=String(e||"").trim().toLowerCase(),a=_e.find(s=>s.toLowerCase()===t);if(a)return{category:a,listing_type:null};if(/(house|villa|apartment|condo|mansion|land|estate|real estate|property|building|bungalow|townhouse|ranch|farmhouse)/.test(t))return{category:null,listing_type:"property"};const i={bag:"Fashion",bags:"Fashion",handbag:"Fashion",handbags:"Fashion",backpack:"Fashion",backpacks:"Fashion",purse:"Fashion",wallet:"Fashion",wallets:"Fashion",luggage:"Travel & Luggage",sneaker:"Fashion",sneakers:"Fashion",shoe:"Fashion",shoes:"Fashion",boot:"Fashion",boots:"Fashion",footwear:"Fashion",sandal:"Fashion",sandals:"Fashion",heel:"Fashion",heels:"Fashion",phone:"Phones",smartphone:"Phones",smartphones:"Phones",iphone:"Phones","mobile phone":"Phones",laptop:"Computers",laptops:"Computers",computer:"Computers",notebook:"Computers",macbook:"Computers",pc:"Computers",desktop:"Computers",electronics:"Electronics",electronic:"Electronics",gadget:"Electronics",gadgets:"Electronics",tv:"Electronics",television:"Electronics",headphones:"Electronics",speaker:"Electronics",speakers:"Electronics",soundbar:"Electronics",tablet:"Electronics",earbuds:"Electronics",camera:"Cameras & Photography",cameras:"Cameras & Photography",dslr:"Cameras & Photography",drone:"Cameras & Photography",jewelry:"Jewelry",jewellery:"Jewelry",ring:"Jewelry",necklace:"Jewelry",earring:"Jewelry",earrings:"Jewelry",bracelet:"Jewelry",watch:"Watches & Accessories",watches:"Watches & Accessories",wristwatch:"Watches & Accessories","smart watch":"Watches & Accessories",clothing:"Fashion",clothes:"Fashion",fashion:"Fashion",shirt:"Fashion",shirts:"Fashion",dress:"Fashion",dresses:"Fashion",jacket:"Fashion",jackets:"Fashion",hoodie:"Fashion",jeans:"Fashion","t-shirt":"Fashion",tshirt:"Fashion",apparel:"Fashion","men's fashion":"Men","mens fashion":"Men","women's fashion":"Women","womens fashion":"Women",car:"Cars",cars:"Cars",vehicle:"Cars",vehicles:"Cars",automobile:"Cars",suv:"Cars",sedan:"Cars","luxury car":"Cars","luxury cars":"Cars",truck:"Trucks",trucks:"Trucks",trailer:"Trucks",bus:"Trucks",motorcycle:"Motorcycles",motorbike:"Motorcycles","motor bike":"Motorcycles",bicycle:"Bicycles",bicycles:"Bicycles",cycling:"Bicycles",bike:"Bicycles",motorhome:"RV & Camper Accessories",motorhomes:"RV & Camper Accessories",camper:"RV & Camper Accessories",rv:"RV & Camper Accessories",boat:"Marine & Boating",boats:"Marine & Boating",yacht:"Marine & Boating",jet:"Marine & Boating",beauty:"Beauty",skincare:"Beauty",cosmetics:"Beauty",makeup:"Beauty",perfume:"Beauty",kitchen:"Kitchen",appliance:"Home Appliances",appliances:"Home Appliances",blender:"Kitchen",kettle:"Kitchen",cookware:"Kitchen",vacuum:"Home Appliances",furniture:"Furniture",sofa:"Furniture",chair:"Furniture",chairs:"Furniture",table:"Furniture",tables:"Furniture",bed:"Furniture",mattress:"Furniture",desk:"Furniture",toy:"Toys & Hobbies",toys:"Toys & Hobbies",game:"Gaming",games:"Gaming",gaming:"Gaming",console:"Gaming",food:"Food & Groceries",groceries:"Food & Groceries",snack:"Food & Groceries",snacks:"Food & Groceries",beverage:"Food & Groceries",baby:"Baby",kids:"Kids",stroller:"Baby",health:"Health & Medical",medical:"Health & Medical",supplement:"Health & Medical",fitness:"Sports",sport:"Sports",sports:"Sports",gym:"Sports",dumbbell:"Sports",book:"Books",books:"Books",textbook:"Books",novel:"Books",stationery:"Office",office:"Office",printer:"Office",pen:"Office",pet:"Pets",pets:"Pets",dog:"Pets",cat:"Pets",musical:"Musical Instruments",guitar:"Musical Instruments",piano:"Musical Instruments",instrument:"Musical Instruments",drum:"Musical Instruments",software:"Software & Digital Products",digital:"Software & Digital Products",account:"Software & Digital Products",accounts:"Software & Digital Products",instagram:"Software & Digital Products",tiktok:"Software & Digital Products",camping:"Camping & Hiking",tent:"Camping & Hiking",hiking:"Camping & Hiking",flower:"Flowers & Gifts",flowers:"Flowers & Gifts",gift:"Flowers & Gifts",gifts:"Flowers & Gifts",wedding:"Wedding Supplies",party:"Party & Event Supplies",coin:"Coins & Bullion",coins:"Coins & Bullion",art:"Arts & Crafts",painting:"Arts & Crafts",craft:"Arts & Crafts"},n=i[t]||i[t.replace(/s$/,"")]||i[t.replace(/\s+/g," ")];if(n)return{category:n,listing_type:null};for(const s of _e)if(t.includes(s.toLowerCase())||t.length>2&&s.toLowerCase().includes(t))return{category:s,listing_type:null};return{category:Ji(t)||"Other",listing_type:null}}function or(e){const t=String(e||"").toLowerCase().trim();if(!t)return null;const a=aa.find(n=>n.toLowerCase()===t);return a||aa.find(n=>n.toLowerCase().includes(t)||t.includes(n.toLowerCase()))||null}window._resolveScanConfirm=function(e,t){};let P=[],ye=[],ee="",te=-1;const ea="scanner-scan-status";let z=!1,ki=0,he=0,Y=0,Ae=!1,Ma=0,lr=0,Si=0,Fe=0;function Tt(e,t){const i=(Array.isArray(e.image_indices)?e.image_indices:[]).map(n=>t[n]).filter(Boolean);return i.length?i:t}function ha(e,t,a,i){const n=Ve(e.category),r=e.listing_type==="property"||n&&n.listing_type==="property",s=r?"Real Estate":n.category||e.category||"Other",l=e.confidence||"medium",o={high:"bg-emerald-500/10 text-emerald-400 border-emerald-500/20",medium:"bg-amber-500/10 text-amber-400 border-amber-500/20",low:"bg-red-500/10 text-red-400 border-red-500/20"}[l]||"bg-amber-500/10 text-amber-400 border-amber-500/20",c=Tt(e,ye).slice(0,3);return`
  <div class="scan-review-card rounded-xl border border-violet-500/30 bg-violet-500/10 p-3 space-y-2 fade-in" data-i="${t}">
    <div class="flex items-center justify-between gap-2 flex-wrap">
      <p class="text-xs font-bold text-white">${t+1}. ${d(e.detected_name||"Detected product")}</p>
      <span class="inline-flex items-center gap-1">
        ${e._photoNotRead?'<span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border bg-red-500/10 text-red-300 border-red-500/20" title="The AI could not read the photos for this card - it was created from saved details only.">PHOTO NOT READ</span>':""}
        ${a?'<span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border bg-orange-500/10 text-orange-300 border-orange-500/20" title="This product appears more than once — consider deleting the duplicate.">DUPLICATE</span>':""}
        <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${o}">${d(l).toUpperCase()}</span>
      </span>
    </div>
    <div class="flex items-center gap-2 flex-wrap">
      ${c.map(u=>`<img src="${d(u)}" class="w-10 h-10 rounded-lg object-cover border border-violet-500/20" onerror="this.src='/fallback.svg'">`).join("")}
      <span class="text-[11px] text-gray-400">${r?"Real Estate":d(s)} &middot; ${(e.image_indices||[]).length||1} image(s)</span>
    </div>
    <div class="flex flex-wrap gap-2">
      ${i?`<button type="button" onclick="scanStreamPublish(${t})" class="btn-press px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition" title="Open this product, fill it with the AI scan and publish it right now with one click">Publish Now</button>`:""}
      <button type="button" onclick="scanReviewContinue(${t})" class="btn-press px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg transition">Continue to ${r?"Properties Manager":"its form"}</button>
      <button type="button" onclick="scanReviewEdit(${t})" class="btn-press px-4 py-2 bg-gray-700/60 hover:bg-gray-600 text-gray-200 text-xs font-bold rounded-lg transition">Edit</button>
      <button type="button" onclick="scanReviewDelete(${t})" class="btn-press px-3 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg transition" title="Permanently delete this product from the database">Delete</button>
      <button type="button" onclick="scanReviewRemove(${t})" class="btn-press px-4 py-2 bg-red-900/40 hover:bg-red-800/60 text-red-200 text-xs font-bold rounded-lg transition">Remove</button>
      <button type="button" onclick="scanReviewCancel()" class="btn-press px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 text-xs font-bold rounded-lg transition">Cancel</button>
    </div>
  </div>`}window.scanReviewRender=function(){if(ee==="scanner-scan-status"){scanStreamRender();return}const e=document.getElementById(ee);if(!e)return;if(e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),!P.length){e.classList.add("text-gray-400"),e.textContent="All detected products were removed — nothing was changed.";return}const t={};for(const a of P){const i=j(a.brand),n=j(a.model),r=j(a.detected_name),s=i&&n?`${i}::${n}`:r||`${i}::${n}`;s&&(t[s]=(t[s]||0)+1)}e.classList.add("text-gray-100"),e.innerHTML=`
    <div class="space-y-3">
      <div>
        <p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="list-checks" class="w-4 h-4 text-violet-400"></i> ${P.length} distinct product${P.length>1?"s":""} detected</p>
        <p class="text-[11px] text-gray-400 mt-1">Review each card below. Edit, remove or delete duplicates as needed, then press Continue to open each product's form and publish it.</p>
      </div>
      ${P.map((a,i)=>{const n=j(a.brand),r=j(a.model),s=j(a.detected_name),l=n&&r?`${n}::${r}`:s||`${n}::${r}`;return ha(a,i,l&&t[l]>1)}).join("")}
    </div>`,window.lucide&&lucide.createIcons()};window.scanReviewContinue=async function(e){const t=P[e];if(!t)return;te=e;const a=Tt(t,ye),i=Ve(t.category);if(t.listing_type==="property"||i&&i.listing_type==="property"){(ee==="s1-scan-status"||ee==="scanner-scan-status")&&(oe(),fe=[]),vr(t,a);return}const r=i.category||t.category||"Other";if(ee==="s1-scan-status"||ee==="scanner-scan-status"){try{localStorage.removeItem(Re(r,""))}catch{}fe=[];let s=t.property_id?Te[t.property_id]:null;s&&s.specifications&&typeof s.specifications=="object"&&(s={...s,...s.specifications}),showAddProductStep2(r,s?{...s,images:a}:{images:a}),await tt(t,a,r)}else{const s=document.getElementById("product-form"),l=s&&s.dataset.category||"";if(r!==l){try{localStorage.removeItem(Re(r,""))}catch{}switchProductFormCategory(r);const o=document.getElementById(ee);o&&(o.classList.remove("hidden"),o.classList.add("text-blue-300"),o.textContent=`Category changed to ${r} â€” finishing the scanâ€¦`),window.lucide&&lucide.createIcons()}await tt(t,a,r)}};window.scanReviewEdit=function(e){const t=P[e];if(!t)return;const a=document.querySelector(`.scan-review-card[data-i="${e}"]`);if(!a)return;const i=Ve(t.category),r=t.listing_type==="property"||i&&i.listing_type==="property"?"Real Estate":i.category||t.category||"Other",s=_e.map(l=>`<option value="${d(l)}" ${l===r?"selected":""}>${d(l)}</option>`).join("");a.innerHTML=`
    <p class="text-xs font-bold text-white">Edit detected product #${e+1}</p>
    <div class="space-y-2">
      <input id="sr-name-${e}" class="input-field !py-2 !text-xs" value="${d(t.detected_name||"")}" placeholder="Product name">
      <input id="sr-brand-${e}" class="input-field !py-2 !text-xs" value="${d(t.brand||"")}" placeholder="Brand">
      <input id="sr-model-${e}" class="input-field !py-2 !text-xs" value="${d(t.model||"")}" placeholder="Model">
      <select id="sr-cat-${e}" class="input-field !py-2 !text-xs">${s}</select>
    </div>
    <div class="flex flex-wrap gap-2">
      <button type="button" onclick="scanReviewApplyEdit(${e})" class="btn-press px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition">Apply</button>
      <button type="button" onclick="scanReviewRender()" class="btn-press px-4 py-2 bg-gray-700/60 hover:bg-gray-600 text-gray-200 text-xs font-bold rounded-lg transition">Back</button>
    </div>`};window.scanReviewApplyEdit=function(e){const t=P[e];if(!t)return;const a=document.getElementById(`sr-name-${e}`)?.value,i=document.getElementById(`sr-brand-${e}`)?.value,n=document.getElementById(`sr-model-${e}`)?.value,r=document.getElementById(`sr-cat-${e}`)?.value;a&&(t.detected_name=a),i&&(t.brand=i),n&&(t.model=n),r&&(t.category=r),scanReviewRender()};window.scanReviewRemove=function(e){P.splice(e,1),scanReviewRender()};window.scanReviewDelete=async function(e){const t=P[e];if(!t)return;const a=t.property_id;if(!a){P.splice(e,1),scanReviewRender();return}if(confirm(`Permanently delete "${t.detected_name||"this product"}" from the database and showroom?`)){try{await y.from("showroom_listings").delete().eq("property_id",a),it(a);try{await qe(a,!0)}catch{}}catch{}P.splice(e,1),scanReviewRender(),b(`${t.detected_name||"Product"} deleted`)}};window.scanReviewCancel=function(){const e=document.getElementById(ee);e&&(e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300"),e.classList.add("text-gray-400"),e.textContent="Scan cancelled — nothing was changed.")};function j(e){return String(e||"").toLowerCase().replace(/[^a-z0-9]/g,"").trim()}let Z=[],ue=[],pe=[];function $i(){const e=document.getElementById(ea);if(!e)return;e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),e.classList.add("text-gray-100");const t=ue.reduce((a,i)=>a+i.length-1,0);e.innerHTML=`
    <div class="space-y-3">
      <div class="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3">
        <p class="text-xs font-bold text-rose-300 flex items-center gap-2"><i data-lucide="copy" class="w-4 h-4"></i> ${ue.length} duplicate product group${ue.length>1?"s":""} found — ${t} extra listing${t>1?"s":""} to delete</p>
        <p class="text-[11px] text-gray-400 mt-1">The AI found products that look the same (same brand + model or name). Review each group below — keep one copy, delete the rest. You can also delete entire groups.</p>
      </div>
      ${Z.map((a,i)=>{const n=Ve(a[0].category),r=n&&!n.listing_type&&(n.category||a[0].category)||"Other";return`
        <div class="rounded-xl border border-amber-500/25 bg-amber-500/8 p-3 space-y-2">
          <p class="text-[11px] font-bold text-amber-300 uppercase tracking-wide">Group ${i+1}: ${d(a[0].detected_name||"Unknown product")} (${r})</p>
          ${a.map((s,l)=>{const o=pe.indexOf(s);return`
            <div class="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 p-2">
              <img src="${d((s.image_indices||[0]).map(c=>ye[c]).filter(Boolean)[0]||"")}" class="w-10 h-10 rounded-lg object-cover border border-white/10" onerror="this.src='/fallback.svg'">
              <div class="flex-1 min-w-0">
                <p class="text-[11px] font-bold text-white truncate">${d(s.detected_name||"Product")}</p>
                <p class="text-[10px] text-gray-400">${d(s.brand||"—")} ${d(s.model||"")} · ${d(s.property_id||"")}</p>
              </div>
              ${s._photoNotRead?'<span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-red-500/15 text-red-300 border border-red-500/20">NOT READ</span>':""}
              <button type="button" onclick="dupReviewDelete(${i},${l},${o})" class="btn-press px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-bold rounded-lg transition shrink-0">Delete</button>
            </div>`}).join("")}
          <button type="button" onclick="dupReviewDeleteGroup(${i})" class="btn-press w-full px-3 py-1.5 bg-rose-900/40 hover:bg-rose-800/60 text-red-200 text-[11px] font-bold rounded-lg transition">Delete ALL ${a.length} in this group</button>
        </div>`}).join("")}
      <div class="flex flex-wrap gap-2 pt-1">
        <button type="button" onclick="dupReviewFinish()" class="btn-press flex-1 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition">Keep & continue publishing</button>
        <button type="button" onclick="dupReviewDeleteAll()" class="btn-press px-4 py-2.5 bg-rose-600/20 hover:bg-rose-600/30 text-rose-200 text-xs font-bold rounded-xl transition">Delete ALL duplicates</button>
      </div>
    </div>`,window.lucide&&lucide.createIcons()}window.dupReviewDelete=async function(e,t,a){const i=Z[e],n=i[t];if(!n)return;const r=n.property_id;if(!confirm(`Permanently delete "${n.detected_name||"this product"}" from the database and showroom?`))return;if(r)try{await y.from("showroom_listings").delete().eq("property_id",r),it(r);try{await qe(r,!0)}catch{}}catch{}i.splice(t,1),i.length<2&&Z.splice(e,1),ue=Z.filter(l=>l.length>1),pe.splice(a,1),Z=[];const s={};for(const l of pe){const o=j(l.brand),c=j(l.model),u=j(l.detected_name),m=o&&c?`${o}::${c}`:u||`${o}::${c}`;m&&(s[m]=s[m]||[]).push(l)}if(Z=Object.values(s).filter(l=>l.length>1),ue=Z,b(`${d(n.detected_name||"Product")} deleted`),!ue.length){dupReviewFinish();return}$i()};window.dupReviewDeleteGroup=async function(e){const t=Z[e];if(!t||!confirm(`Permanently delete ${t.length-1} duplicate listing${t.length-1>1?"s":""} in this group from the database and showroom?`))return;for(let i=t.length-1;i>=1;i--){const n=t[i],r=n.property_id;if(r)try{await y.from("showroom_listings").delete().eq("property_id",r),it(r);try{await qe(r,!0)}catch{}}catch{}const s=pe.indexOf(n);s>=0&&pe.splice(s,1)}b(`Deleted ${t.length-1} duplicate${t.length>2?"s":""} from group ${e+1}`),Z=[];const a={};for(const i of pe){const n=j(i.brand),r=j(i.model),s=j(i.detected_name),l=n&&r?`${n}::${r}`:s||`${n}::${r}`;l&&(a[l]=a[l]||[]).push(i)}if(Z=Object.values(a).filter(i=>i.length>1),ue=Z,!ue.length){dupReviewFinish();return}$i()};window.dupReviewDeleteAll=async function(){const e=ue.reduce((a,i)=>a+i.length-1,0);if(!confirm(`Permanently delete ALL ${e} duplicate listing${e!==1?"s":""} from the database and showroom? This cannot be undone.`))return;let t=0;for(const a of Z)for(let i=a.length-1;i>=1;i--){const n=a[i],r=n.property_id;if(r)try{await y.from("showroom_listings").delete().eq("property_id",r),it(r);try{await qe(r,!0)}catch{}}catch{}const s=pe.indexOf(n);s>=0&&pe.splice(s,1),t++}b(`Deleted ${t} duplicate listing${t!==1?"s":""}`),dupReviewFinish()};window.dupReviewFinish=function(){if(P=pe.slice(),Z=[],ue=[],pe=[],E(),P.length){const e=document.getElementById(ea);e&&(e.classList.remove("hidden","text-red-400","text-amber-300","text-blue-300","text-gray-400"),e.classList.add("text-gray-100"),e.innerHTML=`
        <div class="space-y-3">
          <div class="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-3">
            <p class="text-xs font-bold text-emerald-300 flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4"></i> Duplicates cleaned — ${P.length} unique product${P.length>1?"s":""} ready to publish</p>
          </div>
          ${P.map((t,a)=>ha(t,a)).join("")}
        </div>`,window.lucide&&lucide.createIcons())}else{const e=document.getElementById(ea);e&&(e.classList.remove("hidden","text-blue-300","text-amber-300"),e.classList.add("text-gray-400"),e.textContent="All duplicates removed — nothing left to publish."),b("All duplicates removed.","info")}};function Pi(e,t={}){const a=e&&e.identification&&e.identification.identified!==!1?e.identification:{},i=e&&e.specs?e.specs:{},n=e&&e.price?e.price:null,r=t&&t.visionUsed!==void 0?t.visionUsed:e&&e.visionUsed!==void 0?e.visionUsed:!0,s=[],l=M=>Array.isArray(M)?M.join(", "):String(M??"").trim(),o=(M,q)=>{if(q==null||l([q])==="")return;const me=document.querySelector(`#property-form [name="${M}"]`);me&&(me.value=String(q),s.push(M))},c=a.property_type||i.property_type;if(c){const M=or(c);M&&o("property_type",M)}r&&(o("title",i.title||a.detected_name),o("description",i.description)),o("subcategory",a.subcategory||i.subcategory);const u=a.bedrooms??i.bedrooms;u!=null&&u!==""&&o("bedrooms",parseInt(u,10)||u);const m=a.bathrooms??i.bathrooms;m!=null&&m!==""&&o("bathrooms",parseInt(m,10)||m),o("building_size",a.building_size||i.building_size),o("land_size",a.land_size||i.land_size);const h=a.parking_spaces??i.parking_spaces;h!=null&&h!==""&&o("parking_spaces",parseInt(h,10)||h);const f=String(a.furnished||i.furnished||"").toLowerCase();/furnished|yes/.test(f)?o("furnished","Furnished"):/unfurnished|no|empty/.test(f)&&o("furnished","Unfurnished");const p=String(a.listing_status||i.listing_status||"").toLowerCase();/rent|lease/.test(p)?o("listing_status","rent"):/sale|buy|purchase/.test(p)&&o("listing_status","sale");const g=a.area||i.area;g&&!(a.town||i.town)&&o("town",g),o("town",a.town||i.town),o("city",a.city||i.city),o("state",a.state||i.state);const x=a.country||i.country;if(o("country",x),x){const M=(Oe||[]).find(q=>String(q.name||"").toLowerCase()===String(x).toLowerCase()||String(q.code||"").toLowerCase()===String(x).toLowerCase());if(M&&M.code){const q=document.querySelector('#property-form [name="country_code"]');q&&(q.value=M.code,s.push("country_code"))}}const _=a.address||i.address;o("product_location",_||[g||a.town||i.town,a.city||i.city,a.state||i.state,x].filter(Boolean).join(", ")),o("address",a.address||i.address),o("zip_code",a.zip_code||i.zip_code);const v=Number(a.latitude??i.latitude),w=Number(a.longitude??i.longitude);Number.isFinite(v)&&v>=-90&&v<=90&&v!==0&&o("latitude",String(v)),Number.isFinite(w)&&w>=-180&&w<=180&&w!==0&&o("longitude",String(w)),o("features_text",l(i.features)),o("highlights_text",l(a.highlights||i.highlights)),o("seo_keywords_text",l(i.seo_keywords));const k=a.half_bathrooms??i.half_bathrooms;k!=null&&k!==""&&o("half_bathrooms",parseInt(k,10)||k);const $=a.floors??i.floors;$!=null&&$!==""&&o("floors",parseInt($,10)||$),o("garage",a.garage||i.garage);const S=a.year_built??i.year_built;S!=null&&S!==""&&o("year_built",parseInt(S,10)||S);const T=a.year_renovated??i.year_renovated;T!=null&&T!==""&&o("year_renovated",parseInt(T,10)||T);const Q=a.condition||i.condition,ae=["New Construction","Like New","Excellent","Good","Fair","Needs Renovation"];if(Q){const M=String(Q).toLowerCase(),q=ae.find(me=>M.includes(me.toLowerCase())||me.toLowerCase().includes(M));q&&o("condition",q)}o("interior_features_text",l(i.interior_features)),o("exterior_features_text",l(i.exterior_features)),o("home_systems_text",l(i.home_systems));const ie=l(a.landmarks||i.landmarks);ie&&o("landmarks_text",ie);const X=i.floor_plan;if(X&&typeof X=="object"){X.image&&o("floor_plan_image",X.image),X.levels&&o("floor_plan_levels",X.levels),X.total_area&&o("floor_plan_total_area",X.total_area);const M=Array.isArray(X.rooms)?X.rooms.map(q=>{const me=String(q).match(/^(.*?):\s*(.*)$/);return me?`${me[1].trim()}: ${me[2].trim()}`:String(q)}):[];M.length&&o("floor_plan_rooms",M.join(", "))}const R=i.nearby_area;R&&typeof R=="object"&&(Array.isArray(R.schools)&&R.schools.length&&o("nearby_schools_text",R.schools.join(", ")),Array.isArray(R.hospitals)&&R.hospitals.length&&o("nearby_hospitals_text",R.hospitals.join(", ")),Array.isArray(R.shopping)&&R.shopping.length&&o("nearby_shopping_text",R.shopping.join(", ")),Array.isArray(R.transportation)&&R.transportation.length&&o("nearby_transportation_text",R.transportation.join(", ")),Array.isArray(R.distances)&&R.distances.length&&o("nearby_distances_text",R.distances.join(", ")));const Pe=Array.isArray(i.legal_info)?i.legal_info.join(", "):l(i.legal_info);Pe&&o("legal_info_text",Pe),i.inspection_info&&o("inspection_info",i.inspection_info),i.risk_notes&&o("risk_notes",i.risk_notes),o("neighborhood",a.neighborhood||i.neighborhood||a.area),o("living_areas",l(i.living_areas));const Ee=a.kitchens??i.kitchens;Ee!=null&&Ee!==""&&o("kitchens",parseInt(Ee,10)||Ee);const A=a.balconies??i.balconies;A!=null&&A!==""&&o("balconies",parseInt(A,10)||A),o("garden",a.garden||i.garden),o("pool",a.pool||i.pool),o("security",l(i.security)),o("utilities",l(i.utilities)),o("construction_type",i.construction_type),o("construction_status",i.construction_status),o("ownership_type",i.ownership_type||a.ownership_type),o("contact_name",i.contact_name||a.contact_name),o("contact_phone",i.contact_phone||a.contact_phone),o("contact_email",i.contact_email||a.contact_email);const G=document.querySelector('#property-form [name="verification_status"]');r&&G&&(G.value="Not verified",s.push("verification_status"));const jt=Number.isFinite(Number(B))?Number(B):0,Ot=Number.isFinite(Number(O))?Number(O):999999999,$a=M=>Math.max(jt,Math.min(Ot,Math.round(M))),Ke=n?Number(n.estimated_price):NaN,dt=n?Number(n.suggested_discount_price):NaN;if(r&&Number.isFinite(Ke)&&Ke>0){const M=document.querySelector('#property-form [name="real_price"]');M&&(M.value=String($a(Ke)),s.push("real_price"));const q=Number.isFinite(dt)&&dt>0&&dt<Ke?dt:Ke;o("price",String($a(q)))}const Pa=String(i.title||a.detected_name||"Property").trim()||"Property",Hi=i.description||`${Pa} available on Weverse Online Shop. Review the details below and edit anything before publishing.`,Ea=fa("#property-form",{titleFallback:Pa,descriptionFallback:Hi,visionUsed:r});return Ea&&s.push(`${Ea} auto-completed (safe defaults)`),typeof window.refreshPropertyMapFromForm=="function"&&window.refreshPropertyMapFromForm(),fr().catch(()=>{}),{filled:s}}const dr="Not provided - requires verification",Na={address:"Full street address - requires verification",zip_code:"Postal code - requires verification",neighborhood:"Neighborhood - requires verification",product_location:"Local area details - requires verification",garage:"Parking / garage details - requires verification",garden:"Outdoor space details - requires verification",pool:"Pool details - requires verification",security:"Security features - requires verification",utilities:"Utilities details - requires verification",living_areas:"Main living areas - requires verification",construction_type:"Construction material - requires verification",construction_status:"Construction status - requires verification",ownership_type:"Ownership type - requires verification",contact_name:"Listing agent name - requires verification",contact_phone:"Contact phone / WhatsApp - requires verification",contact_email:"Contact email - requires verification",inspection_info:"Inspection details - requires verification",verification_date:"",documents_text:""},cr=new Set(["is_active","property_id","id","documents_text","verification_date","floor_plan_image","landmarks_text","legal_info_text","risk_notes","highlights_text","seo_keywords_text"]);function Ba(e){return Number.isFinite(e)?e<1?`${Math.max(0,Math.round(e*1e3))} m`:`${e.toFixed(1)} km`:"dist. TBD"}async function ur(e,t,a=4e3){const i=`
    [out:json][timeout:25];
    (
      nwr["amenity"="school"](around:${a},${e},${t});
      nwr["amenity"~"^(hospital|clinic|doctors)$"](around:${a},${e},${t});
      nwr["shop"~"^(supermarket|mall|convenience|marketplace|department_store)$"](around:${a},${e},${t});
      nwr["amenity"~"^(bus_station|ferry_terminal|charging_station|fuel)$"](around:${a},${e},${t});
      nwr["railway"="station"](around:${a},${e},${t});
    );
    out center tags;`;try{const n=await fetch("https://overpass-api.de/api/interpreter",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"data="+encodeURIComponent(i)});return n.ok?await n.json()||{elements:[]}:{elements:[]}}catch{return{elements:[]}}}async function pr(e,t,a=4e3){try{const i=await fetch("https://overpass.kumi.systems/api/interpreter",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"data="+encodeURIComponent(`
        [out:json][timeout:25];
        (
          nwr["amenity"="school"](around:${a},${e},${t});
          nwr["amenity"~"^(hospital|clinic)$"](around:${a},${e},${t});
          nwr["shop"~"^(supermarket|mall|convenience)$"](around:${a},${e},${t});
          nwr["railway"="station"](around:${a},${e},${t});
        );
        out center tags;`)});return i.ok?await i.json()||{elements:[]}:{elements:[]}}catch{return{elements:[]}}}function mr(e,t,a,i){const r=(a-e)*Math.PI/180,s=(i-t)*Math.PI/180,l=Math.sin(r/2)**2+Math.cos(e*Math.PI/180)*Math.cos(a*Math.PI/180)*Math.sin(s/2)**2;return 2*6371*Math.asin(Math.min(1,Math.sqrt(l)))}function br(e){const t=e&&e.tags||{};return t.name||t["addr:street"]||t.brand||t.operator||t["ref:housenumber"]||"Nearby location"}async function gr(e,t){let a=await ur(e,t);(!a.elements||!a.elements.length)&&(a=await pr(e,t));const i=a&&a.elements||[],n={schools:[],hospitals:[],shopping:[],transportation:[]},r=[];for(const s of i){const l=s.tags||{},o=s.lat??(s.center&&s.center.lat),c=s.lon??(s.center&&s.center.lon);if(!Number.isFinite(o)||!Number.isFinite(c))continue;const u=mr(e,t,o,c),m=String(br(s)).trim()||"Nearby location",h=`${m} (${Ba(u)})`,f=`${m}: ${Ba(u)}`;if(l.amenity==="school"?(n.schools.push(h),r.push(f)):l.amenity&&/^(hospital|clinic|doctors)$/.test(l.amenity)?(n.hospitals.push(h),r.push(f)):l.shop&&/^(supermarket|mall|convenience|marketplace|department_store)$/.test(l.shop)?(n.shopping.push(h),r.push(f)):(n.transportation.push(h),r.push(f)),n.schools.length+n.hospitals.length+n.shopping.length+n.transportation.length>=14)break}for(const s of Object.keys(n))n[s]=n[s].slice(0,4);return{groups:n,distances:r.slice(0,10)}}function yr(e){if(!e)return 0;let t=0;return e.querySelectorAll("input, textarea, select").forEach(a=>{const i=String(a.name||"").trim();if(!i||_i.has(i)||cr.has(i))return;const n=String(a.type||"").toLowerCase();if(!["hidden","checkbox","radio","file","submit","button","image","password"].includes(n)&&!a.disabled&&String(a.value||"").trim()===""){if(n==="date"){a.value="";return}if(n==="select"){a.options&&a.options.length>2&&(a.value=a.options[0].value||""),t++;return}if(i==="description"){a.value="Full property details to be confirmed by the seller. Review and edit before publishing.",t++;return}if(n==="number"){a.value="0",t++;return}Na[i]!==""&&(a.value=Na[i]||dr,t++)}}),t}async function fr(){const e=document.getElementById("property-form");if(!e)return;const t=f=>String(e.querySelector(`[name="${f}"]`)?.value||"").trim(),a=(f,p)=>{if(p==null||String(p).trim()==="")return;const g=e.querySelector(`[name="${f}"]`);return g&&!String(g.value||"").trim()?(g.value=String(p),!0):!1},i=document.getElementById("scan-ai-prop-status"),n=f=>{i&&(i.classList.remove("hidden"),i.insertAdjacentHTML("beforeend",`<div class="mt-1 text-[11px] text-sky-300">${f}</div>`))};let r=parseFloat(t("latitude")),s=parseFloat(t("longitude")),l="";if(Number.isFinite(r)&&Number.isFinite(s)&&(r||s))await ia(r,s).catch(()=>{}),l="geocoded from AI coordinates";else{const f=[t("product_location"),t("town"),t("city"),t("state"),t("country")].filter(Boolean).join(", ");if(f)try{const g=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=&q="+encodeURIComponent(f))).json();g&&g[0]&&(r=parseFloat(g[0].lat),s=parseFloat(g[0].lon),a("latitude",r.toFixed(6)),a("longitude",s.toFixed(6)),l=`mapped to ${g[0].display_name}`,await ia(r,s).catch(()=>{}))}catch{}}const o=parseFloat(t("latitude")),c=parseFloat(t("longitude"));typeof window.refreshPropertyMapFromForm=="function"&&window.refreshPropertyMapFromForm();let u="";if(Number.isFinite(o)&&Number.isFinite(c)&&(o||c)){const{groups:f,distances:p}=await gr(o,c),g=(_,v)=>{if(v&&v.length){const w=e.querySelector(`[name="${_}"]`);w&&!String(w.value||"").trim()&&(w.value=v.join(", "))}};g("nearby_schools_text",f.schools),g("nearby_hospitals_text",f.hospitals),g("nearby_shopping_text",f.shopping),g("nearby_transportation_text",f.transportation),g("nearby_distances_text",p);const x=f.schools.length+f.hospitals.length+f.shopping.length+f.transportation.length;x?u=`Located ${x} real nearby places on the live map.`:u="No schools/hospitals/stores found around this exact point yet - review or adjust the pin."}const m=yr(e);typeof window.refreshPropertyMapFromForm=="function"&&window.refreshPropertyMapFromForm();const h=[];l&&h.push(`📍 ${l}`),u&&h.push(`🗺 ${u}`),m&&h.push(`✅ ${m} blank field${m>1?"s":""} marked “Requires verification” so nothing is empty.`),h.length&&n(h.join(" &nbsp;•&nbsp; "))}const Ra=["brand","model","year","year_estimated","body_type","color","condition","subcategory","property_type","bedrooms","bathrooms","half_bathrooms","building_size","land_size","floors","garage","parking_spaces","furnished","year_built","year_renovated","area","address","zip_code","landmarks","town","city","state","country","latitude","longitude","listing_status","neighborhood","living_areas","kitchens","balconies","garden","pool","security","utilities","construction_type","construction_status","ownership_type","contact_name","contact_phone","contact_email","trim","mileage","engine","horsepower","transmission","drive_type","fuel_type","fuel_economy","towing_capacity","seating_capacity","sleeping_capacity","doors","interior","safety_features","driver_assistance","technology","wheels_tires","dimensions","cargo_capacity","ownership_history","service_history","accident_history","previous_owners","registration_status","inspection_status","warranty","vin","location","seller_name","seller_phone","seller_email"];function va(){return Date.now()<(typeof F<"u"&&F._geminiQuotaUntil||0)?'<p class="text-[11px] text-amber-300 mt-1">⚠ Your Gemini key hit its FREE rate limit during this scan — parts were completed from saved details only. Wait ~1 minute and scan again for full AI reading.</p>':""}function We(){try{return localStorage.getItem("weverse_scan_verify")==="on"}catch{return!1}}function hr(e){try{localStorage.setItem("weverse_scan_verify",e?"on":"off")}catch{}}window.scanVerifyPassEnabled=We;window.setScanVerifyPass=hr;async function wa(e){F.beginScanSession();try{const t=await F.preflight(),a=t.gemini,i=t.groq;a&&a.ok&&i&&i.ok?e(`<span class="inline-flex items-center gap-1"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-300"></i> AI ready — Gemini primary + Groq backup verified (${d(a.model||"")}).</span>`,"text-emerald-300"):a&&a.ok?e(`AI ready via Gemini${a.model?` (${d(a.model)})`:""}. Groq backup not available${i&&i.error?": "+d(i.error):"."} Scans continue on Gemini alone.`,"text-emerald-300"):i&&i.ok?e(`Gemini unavailable${a&&a.error?" ("+d(a.error)+")":""} — scans will run on the Groq backup only.`,"text-amber-300"):t.error?e(`AI service unreachable (${d(t.error)}) — results will be filled from saved details only, clearly marked.`,"text-red-400"):e("No working vision provider found. Add a Google Gemini key (primary) and optionally a Groq key (backup) in AI Settings.","text-red-400")}catch{e("AI preflight failed — continuing anyway.","text-amber-300")}}async function Lt({imageUrls:e,identification:t,category:a,formSelector:i,verify:n=We()}){const r=ar(i),s=ir(r),l=await F.completeSpecsAndPrice(e,t,{category:a||"",maxImages:Ue.maxImages,fieldsSchema:s}),o=l?l.price:null,c=l&&l.specs||{};let u={};for(const v of Ra)t&&t[v]!=null&&t[v]!==""&&(u[v]=t[v]);u={...u,...c};let m=Gt(r,u);const h=`${l&&l.specs&&l.specs._aiProvider||""} ${l&&l.specs&&l.specs._aiModel||""}`,f=!!l&&!/pollinations|free ai|\b(aiofields|fake)\b/i.test(h);let p=0;const g=rr(a,m.specs,t,r);if(f&&g&&Object.keys(g.specs).length){const v={...m.specs,...g.specs},w=new Set([...Array.isArray(m.specs.estimated)?m.specs.estimated:[],...g.estimated||[]]);v.estimated=[...w],m=Gt(r,v),p=(g.estimated||[]).length}let x=!1;const _=`${l&&l.specs&&l.specs._aiProvider||""} ${l&&l.specs&&l.specs._aiModel||""}`;if(n&&f)try{const v=await F.verifyExtraction(e,t,m.specs,r,{maxImages:Ue.maxImages});if(v){const w=v.corrections&&typeof v.corrections=="object"?v.corrections:{},k=Object.keys(w);if(k.length){const $={...m.specs};for(const[S,T]of Object.entries(w))r.some(Q=>Q.key===S)&&(T==null||String(Array.isArray(T)?T.join(", "):T).trim()===""||($[S]=T));for(const[S,T]of Array.isArray(v.wrong_mapping)?v.wrong_mapping:[])$[S]!=null&&($[T]==null||String($[T]).trim()==="")&&($[T]=$[S],delete $[S]);m=Gt(r,$),t={...t};for(const S of k)Ra.includes(S)&&m.specs[S]!=null&&(t[S]=m.specs[S])}x=!0,m.verificationNotes=Array.isArray(v.notes)?v.notes.slice(0,4):[]}}catch{}return{specs:m.specs,price:o,checklist:m.checklist,summary:m.summary,verified:x,verificationNotes:m.verificationNotes||[],identification:t,visionUsed:f,verifyRequested:!!n,providerLabel:_.trim()||"unknown",inferred:p}}async function tt(e,t,a){const i=document.getElementById("scan-ai-status"),n=(r,s)=>{i&&(i.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),s&&i.classList.add(s),i.innerHTML=r)};try{n("Scanning your photo into the formâ€¦","text-blue-300");let r=e;const s=await Lt({imageUrls:t,identification:r,category:a,formSelector:"#product-form",verify:z?We():!1});r=s.identification||r;const l=sr({identification:r,specs:s.specs,price:s.price,visionUsed:s.visionUsed}),o=[r.year,r.brand,r.model].filter(Boolean).join(" ")||r.detected_name||"the product";let c=`<span class="inline-flex items-center gap-1"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-300"></i></span> ${d(o)} — ${l.filled.length} field${l.filled.length>1?"s":""} filled.`;s.visionUsed||(c+=' <span class="text-red-300">(Photo not read — values from saved details. Re-scan when the key is available.)</span>'),s.summary&&s.summary.flagged&&(c+=` Review ${s.summary.flagged} flagged value${s.summary.flagged>1?"s":""}.`),s.inferred&&(c+=` <span class="text-amber-300/80">(${s.inferred} values inferred from the model's real specs - review)</span>`),c+=z?" Publishing automatically now.":" Your uploaded photo stays attached. Press SAVE / UPDATE to publish.",n(c,"text-emerald-300"),b(z?`Filled for ${o} — publishing automatically.`:`Form filled for ${o} — review and press SAVE / UPDATE.`,"success")}catch(r){const s=String(r?.message||r),l=/key|api|configured|settings|vision/i.test(s);n(l?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${s}`,"text-red-400"),b("AI scan failed.","error")}window.lucide&&lucide.createIcons()}window.scanProductWithAI=async function(){const e=document.getElementById("product-form");if(!e){b("Open the product form first.","error");return}const t=document.getElementById("btn-scan-ai"),a=document.getElementById("scan-ai-status"),i=[...document.querySelectorAll('#image-url-inputs [name="images"]')||[]].map(o=>o.value).filter(Boolean);if(!i.length){b("Upload at least one product image before scanning.","error");return}const n=t?t.innerHTML:"",r=(o,c)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),c&&a.classList.add(c),a.innerHTML=o)};try{F.beginScanSession()}catch{}r("Scanning your photo and filling the formâ€¦","text-blue-300"),t&&(t.disabled=!0,t.innerHTML="Scanningâ€¦"),a&&a.classList.remove("hidden");let s;try{s=await F.detectProducts(i,{category:e.dataset.category||"",maxImages:Ue.maxImages})}catch(o){const c=String(o?.message||o),u=/key|api|configured|settings|vision/i.test(c);r(u?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${c}`,"text-red-400"),b("AI scan failed.","error"),t&&(t.disabled=!1,t.innerHTML=n);return}let l=s&&s.identified!==!1&&Array.isArray(s.products)&&s.products.length?s.products:[];l.length||(l=[{detected_name:"Product from your photos",category:e.dataset.category||"Other",listing_type:"product",confidence:"low",image_indices:i.map((o,c)=>c)}],r("Photo read partially — the form was filled with the best available details. Review, then press Publish.","text-amber-300"));try{await tt(l[0],i,l[0].category||e.dataset.category||"Other")}finally{t&&(t.disabled=!1,t.innerHTML=n)}};function vr(e,t){window._pfEscapeHandler&&(document.removeEventListener("keydown",window._pfEscapeHandler),window._pfEscapeHandler=null),showAddPropertyModal();const a=document.getElementById("image-preview"),i=document.getElementById("image-url-inputs");a&&i&&(a.innerHTML=t.map((s,l)=>$e(s,l)).join(""),i.innerHTML=t.map((s,l)=>`<input type="hidden" name="images" id="img-url-${l}" value="${d(s)}">`).join(""),st(),Me());const n=document.getElementById("scan-ai-prop-status"),r=(s,l)=>{n&&(n.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300"),l&&n.classList.add(l),n.innerHTML=s)};r("Reading every page, completing property details and valueâ€¦","text-blue-300"),(async()=>{try{const s=await Lt({imageUrls:t,identification:e,category:"Real Estate",formSelector:"#property-form"}),l=s.identification||e,o=Pi({identification:l,specs:s.specs,price:s.price,visionUsed:s.visionUsed});let c;s.price?c=`${d(l.detected_name||"Property")} â€” ${o.filled.length} field${o.filled.length>1?"s":""} ready for you. Review and edit everything, then press Publish Property.`:c=`${d(l.detected_name||"Property")} â€” ${o.filled.length} fields ready. Price estimate skipped â€” set the price manually, then press Publish Property.`,s.visionUsed?s.verifyRequested&&(c+=s.verified?'<p class="text-[11px] text-gray-400 mt-1">✓ Second-pass verification completed — every value was re-checked against your document.</p>':'<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run — values come from the first pass.</p>'):c+=`<p class="text-[11px] text-red-300 mt-1">⚠ Photo was NOT read by AI (${d(s.providerLabel||"text fallback")}) — these values did NOT come from your images.</p>`,c+=s.inferred?` <span class="text-amber-300/80">(${s.inferred} values inferred from the model's real specs/type - review them)</span>`:"",c+=va(),c+=ya(s.checklist,s.summary),r(c,s.price?"text-emerald-300":"text-amber-300"),b("Review the property details, then press Publish Property.","success"),window.lucide&&lucide.createIcons()}catch(s){const l=/key|api|configured|settings|vision/i.test(String(s?.message||s));r(l?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${String(s?.message||s)}`,"text-red-400"),b("AI scan failed.","error")}})()}window.scanPropertyWithAI=async function(){if(!document.getElementById("property-form")){b("Open the property form first.","error");return}const t=document.getElementById("btn-scan-ai-prop"),a=document.getElementById("scan-ai-prop-status"),i=[...document.querySelectorAll('#image-url-inputs [name="images"]')||[]].map(l=>l.value).filter(Boolean);if(!i.length){b("Upload at least one property image before scanning.","error");return}const n=t?t.innerHTML:"",r=(l,o)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),o&&a.classList.add(o),a.innerHTML=l)};await wa(r),t&&(t.disabled=!0,t.innerHTML="Scanningâ€¦"),r("Identifying this property from your imagesâ€¦","text-blue-300");let s;try{s=await F.identifyProduct(i,{category:"Real Estate",maxImages:Ue.maxImages})}catch(l){const o=String(l?.message||l),c=/key|api|configured|settings|vision/i.test(o);r(c?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${o}`,"text-red-400"),b("AI scan failed.","error"),t&&(t.disabled=!1,t.innerHTML=n);return}if(!s||s.identified===!1){r(s&&s.reason?`Could not identify the property: ${d(s.reason)}`:"The property could not be read from these images. Make sure the photos clearly show it, then try again.","text-amber-300"),b("The property could not be identified from the images.","error"),t&&(t.disabled=!1,t.innerHTML=n);return}t&&(t.disabled=!1,t.innerHTML=n);try{r("Reading every page, completing property details and market valueâ€¦","text-blue-300");const l=await Lt({imageUrls:i,identification:s,category:"Real Estate",formSelector:"#property-form"}),o=l.identification||s,c=Pi({identification:o,specs:l.specs,price:l.price,visionUsed:l.visionUsed});let u=`${d(o.detected_name||"Property")} â€” ${c.filled.length} field${c.filled.length>1?"s":""} ready for you. Review and edit everything, then press Publish Property.`;l.visionUsed?l.verifyRequested&&(u+=l.verified?'<p class="text-[11px] text-gray-400 mt-1">âœ“ Second-pass verification completed â€” every value was re-checked against your document.</p>':'<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run â€” values come from the first pass.</p>'):u+=`<p class="text-[11px] text-red-300 mt-1">⚠ Photo was NOT read by AI (${d(l.providerLabel||"text fallback")}) — these values did NOT come from your images.</p>`,u+=l.inferred?` <span class="text-amber-300/80">(${l.inferred} values inferred from the model's real specs/type - review them)</span>`:"",u+=va(),u+=ya(l.checklist,l.summary),r(u,"text-emerald-300"),b("Review the property details, then press Publish Property.","success")}catch(l){const o=String(l?.message||l),c=/key|api|configured|settings|vision/i.test(o);r(c?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${o}`,"text-red-400"),b("AI scan failed.","error")}window.lucide&&lucide.createIcons()};function wr(e,t={}){const a=e&&e.identification&&e.identification.identified!==!1?e.identification:{},i=e&&e.specs?e.specs:{},n=e&&e.price?e.price:null,r=t&&t.visionUsed!==void 0?t.visionUsed:e&&e.visionUsed!==void 0?e.visionUsed:!0,s=[],l=p=>Array.isArray(p)?p.join(", "):String(p??"").trim(),o=(p,g)=>{if(g==null||l(g)==="")return;const x=document.querySelector(`#vehicle-form [name="${p}"]`);if(x){if(x.tagName==="SELECT"){const v=l(g).toLowerCase(),w=[...x.options].filter(S=>S.value&&S.value.trim()!==""),k=/^not |no |none of|without /.test(v),$=w.find(S=>S.value.toLowerCase()===v)||(k?null:w.find(S=>S.value.toLowerCase().startsWith(v)))||w.find(S=>v.startsWith(S.value.toLowerCase()))||w.find(S=>S.value.toLowerCase().includes(v))||w.find(S=>v.includes(S.value.toLowerCase())&&S.value.length>1);$&&(x.value=$.value,s.push(p));return}x.value=Array.isArray(g)?g.join(", "):String(g),s.push(p)}};o("make",a.brand||i.brand||a.make||i.make),o("model",a.model||i.model),o("model_year",a.year||i.model_year||i.year),o("trim",i.trim),o("body_type",a.body_type||i.body_type);const c=p=>{const g=String(p||"").toLowerCase();if(/motorhome|motor home|rv|recreational vehicle/.test(g))return"Motorhome / RV";if(/boat|marine|yacht|ship|jet ?ski|watercraft/.test(g))return"Boat / Marine";if(/motorcycle|motorbike|scooter|bike/.test(g))return"Motorcycle";if(/^bus|buses|coach/.test(g))return"Bus";if(/truck|pickup|pick ?up|ute|lkw|van|commercial/.test(g))return"Truck";const _=Object.keys(Ze||{}).find(v=>v.toLowerCase()===g);return _||(/car|sedan|suv|hatchback|coupe|convertible|wagon|sports|limousine|crossover|saloon/.test(g)?"Car":null)},u=i.vehicle_type||a.vehicle_type||i.body_type||a.body_type,m=c(u);m&&o("vehicle_type",m),o("mileage",i.mileage),o("engine",i.engine),o("horsepower",i.horsepower),o("transmission",i.transmission),o("fuel_type",i.fuel_type),o("drive_type",i.drive_type),o("fuel_economy",i.fuel_economy),o("towing_capacity",i.towing_capacity),o("seating_capacity",i.seating_capacity),o("sleeping_capacity",i.sleeping_capacity),o("doors",i.doors),o("color",a.color||i.color),o("condition",a.condition||i.condition),o("vin",i.vin),o("warranty",i.warranty),o("location",i.location),o("seller_name",i.seller_name),o("seller_phone",i.seller_phone),o("seller_email",i.seller_email),o("safety_features",i.safety_features),o("driver_assistance",i.driver_assistance),o("technology",i.technology),o("interior",i.interior),o("wheels_tires",i.wheels_tires),o("dimensions",i.dimensions),o("cargo_capacity",i.cargo_capacity),o("ownership_history",i.ownership_history),o("service_history",i.service_history),o("accident_history",i.accident_history),o("previous_owners",i.previous_owners),o("registration_status",i.registration_status),o("inspection_status",i.inspection_status),o("features_text",i.features);const h=document.querySelector('#vehicle-form [name="title"]'),f=[i.model_year||a.year,a.brand||i.brand,a.model||i.model,a.body_type||i.body_type].filter(Boolean).join(" ")||String(i.title||a.detected_name||"Vehicle");if(r){h.value.trim()||(h.value=f,s.push("title")),o("title",i.title||a.detected_name||f);const p=document.querySelector('#vehicle-form [name="description"]');p.value.trim()||(p.value=i.description||`${f} — now available on Weverse Online Shop. Review the details below and edit anything before publishing.`,s.push("description"));const g=Number.isFinite(Number(B))?Number(B):0,x=Number.isFinite(Number(O))?Number(O):999999999,_=$=>Math.max(g,Math.min(x,Math.round($))),v=n?Number(n.estimated_price):NaN,w=n?Number(n.suggested_discount_price):NaN;if(Number.isFinite(v)&&v>0){const $=document.querySelector('#vehicle-form [name="real_price"]');$&&($.value=String(_(v)),s.push("real_price"));const S=Number.isFinite(w)&&w>0&&w<v?w:v,T=document.querySelector('#vehicle-form [name="price"]');T&&!Number(T.value)&&(T.value=String(_(S)),s.push("price"))}const k=fa("#vehicle-form",{titleFallback:f,descriptionFallback:i.description||`${f} — now available on Weverse Online Shop. Review the details below and edit anything before publishing.`,visionUsed:!0});k&&s.push(`${k} auto-filled (safe defaults)`)}return{filled:s}}window.scanVehicleWithAI=async function(){if(!document.getElementById("vehicle-form")){b("Open the vehicle form first.","error");return}const t=document.getElementById("btn-scan-ai-veh"),a=document.getElementById("scan-ai-veh-status"),i=[...document.querySelectorAll('#image-url-inputs [name="images"]')||[]].map(l=>l.value).filter(Boolean);if(!i.length){b("Upload at least one vehicle photo before scanning.","error");return}const n=t?t.innerHTML:"",r=(l,o)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),o&&a.classList.add(o),a.innerHTML=l)};await wa(r),t&&(t.disabled=!0,t.innerHTML="Scanning…"),r("Identifying this vehicle from your photos…","text-blue-300");let s;try{s=await F.identifyProduct(i,{category:"Cars & Trucks",maxImages:Ue.maxImages})}catch(l){const o=String(l?.message||l),c=/key|api|configured|settings|vision/i.test(o);r(c?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${o}`,"text-red-400"),b("AI scan failed.","error"),t&&(t.disabled=!1,t.innerHTML=n);return}if(!s||s.identified===!1){r(s&&s.reason?`The AI could not read this vehicle: ${d(s.reason)}`:"The vehicle could not be read from these images. Use clear photos that show the whole vehicle, badges, dashboard and wheels, then try again.","text-amber-300"),b("The vehicle could not be identified from the images.","error"),t&&(t.disabled=!1,t.innerHTML=n);return}t&&(t.disabled=!1,t.innerHTML=n);try{r("Reading every photo, completing the vehicle specs and market value…","text-blue-300");const l=await Lt({imageUrls:i,identification:s,category:"Cars & Trucks",formSelector:"#vehicle-form"}),o=l.identification||s,c=wr({identification:o,specs:l.specs,price:l.price,visionUsed:l.visionUsed});let u=`${d(o.detected_name||"Vehicle")} — ${c.filled.length} field${c.filled.length>1?"s":""} ready for you. Review and edit everything, then press Publish Vehicle.`;l.visionUsed?l.verifyRequested&&(u+=l.verified?'<p class="text-[11px] text-gray-400 mt-1">✓ Second-pass verification completed — every value was re-checked against your photos.</p>':'<p class="text-[11px] text-amber-300/80 mt-1">Second-pass verification could not run — values come from the first pass.</p>'):u+=`<p class="text-[11px] text-red-300 mt-1">⚠ Photos were NOT read by AI (${d(l.providerLabel||"text fallback")}) — these values did NOT come from your images.</p>`,u+=l.inferred?` <span class="text-amber-300/80">(${l.inferred} values inferred from the model's real specs/type - review them)</span>`:"",u+=va(),u+=ya(l.checklist,l.summary),r(u,"text-emerald-300"),b("Review the vehicle details, then press Publish Vehicle.","success")}catch(l){const o=String(l?.message||l),c=/key|api|configured|settings|vision/i.test(o);r(c?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${o}`,"text-red-400"),b("AI scan failed.","error")}window.lucide&&lucide.createIcons()};let fe=[];window.handleStep1Files=async function(e){const t=Array.from(e||[]).slice(0,24);if(!t.length)return;const a=document.getElementById("s1-image-preview"),i=[],n=[];for(const r of t){const s=r.type==="application/pdf"||nt(r.name),l=Ce(r);if(!r.type.startsWith("image/")&&!s&&!l)continue;if(l&&r.size>100*1024*1024){b("Video must be under 100 MB.","error");continue}i.push(r);const o=document.createElement("div");o.className="img-thumb uploading",o.style.cssText="min-width:90px;min-height:80px;",o.innerHTML='<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-400"><div class="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mb-1.5"></div><span class="text-[10px] font-bold">Uploading…</span></div>',a&&a.appendChild(o),n.push(o)}i.length&&(ta(),await vi(i,3,async(r,s)=>{const l=await ga(r),o=n[s];setTimeout(()=>{if(!(!o||!o.isConnected)){if(o.remove(),l){fe.push(l);const c=document.createElement("div");c.innerHTML=Ei(l,fe.length-1);const u=c.firstElementChild,m=o.nextSibling;m?a.insertBefore(u,m):a.appendChild(u)}else b(`Failed to upload ${Ce(r)?"video":"image"}. Try a smaller file.`,"error");ta(),window.lucide&&lucide.createIcons()}},0)}))};window.handleStep1ImageUpload=async function(e){await window.handleStep1Files(e.target.files||[]),e.target.value=""};window.removeStep1Image=function(e){fe.splice(e,1),xr()};function Ei(e,t){const i=ke(e)?`<video src="${d(e)}" muted loop preload="metadata" playsinline class="w-full h-full object-cover"></video>
       <div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center"><svg class="w-3.5 h-3.5 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`:`<img src="${d(e)}" onerror="this.src='/fallback.svg'">`;return`<div class="img-thumb ${t===0?"cover-img":""}" data-index="${t}">
    ${i}
    <button class="rm" onclick="removeStep1Image(${t})" type="button">✕</button>
  </div>`}function ta(){const e=document.getElementById("btn-s1-scan");e&&(e.disabled=fe.length===0,e.style.opacity=fe.length?"":"0.5")}function xr(){const e=document.getElementById("s1-image-preview");e&&(e.innerHTML=fe.map((t,a)=>Ei(t,a)).join(""),ta(),window.lucide&&lucide.createIcons())}window.scanFirstWithAI=async function(){const e=fe.slice();if(!e.length){b("Upload at least one product image before scanning.","error");return}const t=document.getElementById("btn-s1-scan"),a=document.getElementById("s1-scan-status"),i=t?t.innerHTML:"",n=(l,o)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),o&&a.classList.add(o),a.innerHTML=l)};await wa(n),t&&(t.disabled=!0,t.innerHTML="Scanningâ€¦"),n("Detecting every distinct product in your imagesâ€¦","text-blue-300");let r;try{r=await F.detectProducts(e,{category:"",maxImages:Ue.maxImages})}catch(l){const o=/key|api|configured|settings|vision/i.test(String(l?.message||l));n(o?"The scanner could not run right now. Confirm your free key is set in AI Settings, then try again.":`Scan failed: ${String(l?.message||l)}`,"text-red-400"),t&&(t.disabled=!1,t.innerHTML=i);return}t&&(t.disabled=!1,t.innerHTML=i);let s=r&&r.identified!==!1&&Array.isArray(r.products)&&r.products.length?r.products:[];s.length||(s=[{detected_name:"Product from your photos",category:"Other",listing_type:"product",confidence:"low",image_indices:e.map((l,o)=>o)}],n("The AI could not confidently read these photos â€” a card was created with all of them. Review, edit the details, then continue to save & publish.","text-amber-300")),P=s,ye=e,Te={},ee="s1-scan-status",scanReviewRender(),b(`${s.length} distinct product${s.length>1?"s":""} detected â€” review each one, then continue.`,"info")};let Te={},ve=!1;function _r(e){const t=parseFloat(e&&e.price);return!Number.isFinite(t)||t<=0}async function Ai(){const e=new Set,t=[],a=i=>{!i||!i.property_id||i.listing_type==="property"||e.has(i.property_id)||!Array.isArray(i.images)||!i.images.length||ve&&!_r(i)||(e.add(i.property_id),t.push(i))};try{const{data:i,error:n}=await y.from("showroom_listings").select("*").neq("listing_type","property");(n?[]:i||[]).forEach(a)}catch{}return xt().forEach(a),t}window.returnToScanReviewAfterSave=function(e=te){if(te=-1,!P.length){if(Ae)return ut("Published! The scanner keeps working on the remaining products - new results will appear here."),E(),!0;if(z){z=!1;const t=document.getElementById("scanner-scan-status");t&&(t.classList.remove("hidden","text-red-400","text-amber-300","text-blue-300"),t.classList.add("text-emerald-300"),t.innerHTML=`<p class="font-bold">Auto-scan complete: ${he} published, ${Y} error${Y!==1?"s":""}.</p>`),b(`Auto-scan complete: ${he} published, ${Y} error${Y!==1?"s":""}.`,he>0?"success":"info"),E()}return!1}if(Number.isInteger(e)&&e>=0&&e<P.length&&(P.splice(e,1),Ae&&ee==="scanner-scan-status"&&Si++),!P.length){if(Ae)return ut("Published! The scanner keeps working on the remaining products - new results will appear here."),E(),!0;if(ye=[],Te={},z){z=!1;const t=document.getElementById("scanner-scan-status");t&&(t.classList.remove("hidden","text-red-400","text-amber-300","text-blue-300"),t.classList.add("text-emerald-300"),t.innerHTML=`<p class="font-bold">Auto-scan complete: ${he} published, ${Y} error${Y!==1?"s":""}.</p>`),b(`Auto-scan complete: ${he} published, ${Y} error${Y!==1?"s":""}.`,he>0?"success":"info"),E()}return!1}return z?(Qe(P[0],0),!0):Ae?(ut("Published! The scanner keeps working on the remaining products - new results will appear here."),E(),!0):(ee="scanner-scan-status",D(`
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
    </div>`),scanReviewRender(),window.lucide&&lucide.createIcons(),!0)};async function Qe(e,t){const a=Tt(e,ye),i=Ve(e.category),n=e.listing_type==="property"||i&&i.listing_type==="property",r=n?"Real Estate":i.category||e.category||"Other",s=ki,l=s-P.length;((c,u)=>{const m=document.getElementById("scanner-scan-status");m&&(m.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),m.classList.add(u),m.innerHTML=c)})(`Processing ${l+1} of ${s}: ${d(e.detected_name||e.title||"product")}â€¦`,"text-blue-300");try{if(n){Y++,P.splice(t,1),P.length?Qe(P[0],0):window.returnToScanReviewAfterSave(-1);return}let c=e.property_id?Te[e.property_id]:null;c&&c.specifications&&typeof c.specifications=="object"&&(c={...c,...c.specifications}),showAddProductStep2(r,c?{...c,images:a}:{images:a}),await new Promise(h=>setTimeout(h,250)),await tt(e,a,r);const m=document.getElementById("product-form")?.querySelector("[type=submit][name=action][value=publish]");m?(te=t,m.click()):(Y++,closeProductFormModal(),P.splice(t,1),P.length?Qe(P[0],0):window.returnToScanReviewAfterSave(-1))}catch{Y++,closeProductFormModal(),P.splice(t,1),P.length?Qe(P[0],0):window.returnToScanReviewAfterSave(-1)}}window.openGeneralAiScanner=async function(e=!1){ve=!!e;const t=await Ai();D(`
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
    </div>`),window.lucide&&lucide.createIcons(),window.scanGeneralWithAI()};function kr(e,t){const a=Symbol("ai-scan-timeout");return Promise.race([e,new Promise(i=>setTimeout(()=>i(a),t))]).then(i=>{if(i===a)throw new Error("A scan step took too long and timed out.");return i})}window.scanGeneralWithAI=async function(){if(Ae||z){b("A scan is already running - wait for it to finish before starting another.","info");return}let e=[];try{e=await kr(Ai(),15e3)}catch{e=[]}if(!e.length){b(ve?"No products are missing a price right now — every product already has one.":"No products with photos are in the Product Manager yet — add a product first.","error");return}const t=document.getElementById("btn-scanner-scan"),a=document.getElementById("scanner-scan-status");t&&t.innerHTML;const i=(r,s)=>{a&&(a.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),a.classList.add(s),a.innerHTML=r)};try{const r=await F.getConfig();String(r.gemini_key||r.gemini_api_key||"").trim()||i("No Gemini key found â€” scanning anyway with the FREE built-in AI (no key needed). Products whose photos cannot be read will still be filled from their saved details. For the best photo recognition, add a FREE Gemini key in AI Settings (aistudio.google.com/apikey).","text-blue-300")}catch{}t&&(t.disabled=!0,t.innerHTML="Scanningâ€¦"),i(`Detecting and completing ${e.length} product${e.length===1?"":"s"}â€¦`,"text-blue-300"),z=!0,ki=e.length,he=0,Y=0,Ae=!1,P=[],ye=[],Te={},ee="scanner-scan-status";let n=0;for(const r of e){const s=(r.images||[]).filter(Boolean),l=[];for(const o of s)ye.push(o),l.push(n),n++;Te[r.property_id]=r,P.push({detected_name:r.title||r.property_id||"Product",category:r.category||"Other",listing_type:r.listing_type||"product",brand:r.brand||null,model:r.specifications&&r.specifications.model||r.model||null,confidence:"medium",property_id:r.property_id,image_indices:l})}Qe(P[0],0)};window.scanStreamRender=function(){const e=document.getElementById("scanner-scan-status");if(!e)return;e.classList.remove("hidden","text-red-400","text-emerald-300","text-amber-300","text-blue-300","text-gray-400"),e.classList.add("text-gray-100");const t=Ae,a=Ma,i=Math.min(lr,Ma),n=Si,r=P.length,s={};for(const c of P){const u=j(c.brand),m=j(c.model),h=j(c.detected_name),f=u&&m?`${u}::${m}`:h||`${u}::${m}`;f&&(s[f]=(s[f]||0)+1)}let o=`<div class="space-y-3">${t?`<p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="loader-2" class="w-4 h-4 animate-spin text-violet-400"></i> Scanning ${i} of ${a} — results appear below as each product is scanned.</p>`:`<p class="text-xs font-bold text-white flex items-center gap-2"><i data-lucide="list-checks" class="w-4 h-4 text-violet-400"></i> ${i} product${i===1?"":"s"} processed${n?`, ${n} published`:""}${Fe?`, ${Fe} error${Fe>1?"s":""}`:""}.</p>`}`;r?(o+='<p class="text-[11px] text-gray-400">Each card below can be published with one click — press Publish Now and the scanner keeps working on the rest in the background.</p>',o+=P.map((c,u)=>{const m=j(c.brand),h=j(c.model),f=j(c.detected_name),p=m&&h?`${m}::${h}`:f||`${m}::${h}`;return ha(c,u,p&&s[p]>1,!0)}).join("")):t?o+='<p class="text-[11px] text-gray-500">Waiting for the first product to finish scanning …</p>':o+='<p class="text-[11px] text-gray-500">Nothing to scan yet.</p>',o+="</div>",e.innerHTML=o,window.lucide&&lucide.createIcons()};window.scanStreamPublish=async function(e){const t=P[e];if(!t)return;te=e;const a=Tt(t,ye),i=Ve(t.category),n=t.listing_type==="property"||i&&i.listing_type==="property",r=n?"Real Estate":i.category||t.category||"Other";try{if(n){Fe++,P.splice(e,1),scanStreamRender();return}let s=t.property_id?Te[t.property_id]:null;s&&s.specifications&&typeof s.specifications=="object"&&(s={...s,...s.specifications}),showAddProductStep2(r,s?{...s,images:a}:{images:a}),await new Promise(c=>setTimeout(c,250)),await tt(t,a,r);const l=document.getElementById("product-form"),o=l?l.querySelector("[type=submit][name=action][value=publish]"):null;o?(te=e,o.click()):(Fe++,closeProductFormModal(),P.splice(e,1),scanStreamRender())}catch(s){Fe++,closeProductFormModal(),P.splice(e,1),scanStreamRender(),b("Could not publish this product: "+String(s&&s.message||s),"error")}};function ut(e){ee="scanner-scan-status",D(`
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
    </div>`),scanStreamRender(),window.lucide&&lucide.createIcons()}window.openStreamReviewModal=ut;window.saveProduct=async function(e,t,a){e.preventDefault();const i=e.target,n=i.querySelector("[type=submit][name=action][value=publish]"),r=a?"One-Click Publish Changes":"One-Click Publish Product";if(window._productPublishInFlight)return;window._productPublishInFlight=!0,n&&(n.disabled=!0,n.style.opacity="0.75",n.innerHTML='<span style="display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:_pubspin .7s linear infinite;vertical-align:-2px;margin-right:8px;"></span>Publishing…');try{if(!document.getElementById("_pubspin-style")){const l=document.createElement("style");l.id="_pubspin-style",l.textContent="@keyframes _pubspin{to{transform:rotate(360deg)}}",document.head.appendChild(l)}}catch{}const s=()=>{window._productPublishInFlight=!1,n&&(n.disabled=!1,n.style.opacity="",n.textContent=r)};try{const l=new FormData(i),o={};let c=0;for(const[p,g]of l.entries())if(p==="images"){o.images=o.images||[];const x=String(g);g&&!x.startsWith("blob:")?o.images.push(x):x.startsWith("blob:")&&c++}else p==="tags"?(o.tags=o.tags||[],o.tags.push(g)):o[p]=g;if(c&&!(o.images||[]).length){s(),b("Your images were still uploading â€” please wait a moment and press Publish again (the photos were not saved with the product).","error");return}o.is_featured=i.querySelector('[name="is_featured"]')?.checked?"on":"",o.is_active=i.querySelector('[name="is_active"]')?.checked?"on":"";const u=l.get("action")==="draft",m=p=>Kt(p),h=p=>{const g=["model","storage","ram","processor","display","material","gender","platform","voltage","engine","transmission","fuel_type","horsepower","mileage","drive_type","body_type","model_year","seating_capacity","doors","real_price","type","size","age_range","skin_type","ingredients","dimensions","author","publisher","language","format","isbn","pages","edition","quantity","pet_type","lens","sensor","megapixels","video","license","version","duration","followers","engagement","niche","usage","shelf_life","assembly","weatherproof","movement","case_material","water_resistance","gemstone","movement_type","warranty_period"],x={};for(const _ of g){const v=p[_];if(_==="real_price"){const w=v!=null&&String(v).trim()!==""?parseFloat(v):null;x[_]=w!=null&&Number.isFinite(w)&&w>0?Math.round(w):null;continue}x[_]=v!=null&&String(v).trim()!==""?v:null}if(p.safety_features){const _=m(p.safety_features);x.safety_features=_.length?_:null}return x};if(a){let p=null;try{const{data:A}=await y.from("showroom_listings").select("*").eq("property_id",a).maybeSingle();A&&(p=ge(A))}catch{}if(p||(p=ge((window._productsData||[]).find(A=>A.property_id===a))),p||(p=ge(De?De(a):null)),!p)throw new Error("Could not load the current product to compare your changes against. Refresh the page, re-open the product and try again.");const g=(A,G)=>{const jt=A===""||A==null?"":A,Ot=G===""||G==null?"":G;return String(jt).trim()===String(Ot).trim()},x={};["title","description","currency","subcategory","brand","color","size","condition","warranty","availability_status"].forEach(A=>{g(o[A],p[A])||(x[A]=o[A]==null||o[A]===""?null:o[A])});const _=o.price===""||o.price==null?null:parseFloat(o.price);g(_,p.price)||(x.price=_==null?p.price:Math.max(B,Math.min(O,_)));const v=o.stock_quantity===""||o.stock_quantity==null?null:parseInt(o.stock_quantity,10);g(v,p.stock_quantity)||(x.stock_quantity=Number.isFinite(v)?v:null);const w=m(o.features_text);g(w.join("||"),(Array.isArray(p.features)?p.features:[]).join("||"))||(x.features=w);const k=o.tags||[];g(k.join("||"),(Array.isArray(p.tags)?p.tags:[]).join("||"))||(x.tags=k);const $=m(o.highlights_text);g($.join("||"),(Array.isArray(p.highlights)?p.highlights:[]).join("||"))||(x.highlights=$);const S=m(o.seo_keywords_text);g(S.join("||"),(Array.isArray(p.seo_keywords)?p.seo_keywords:[]).join("||"))||(x.seo_keywords=S);const T=o.images||[];g(T.join("||"),(Array.isArray(p.images)?p.images:[]).join("||"))||(x.images=T);const Q=T.find(A=>typeof A=="string"&&ke(A))||null;g(Q,p.video_url)||(x.video_url=Q);const ae=o.is_featured==="on";!!p.is_featured!==ae&&(x.is_featured=ae);const ie=u?!1:o.is_active==="on";!!p.is_active!==ie&&(x.is_active=ie);const X=h(o),R={...p.specifications&&typeof p.specifications=="object"?p.specifications:{},...X};if(JSON.stringify(R)!==JSON.stringify(p.specifications||{})&&(x.specifications=R),Object.keys(x).length===0){if(z){s();try{localStorage.removeItem(Re(t,a))}catch{}const A=te;closeProductFormModal(),E(),typeof window.returnToScanReviewAfterSave=="function"&&window.returnToScanReviewAfterSave(A)&&E();return}b("No changes detected â€” nothing was saved.","info");try{localStorage.removeItem(Re(t,a))}catch{}b("No changes were needed — this product is already published with exactly these details.","info"),s(),closeProductFormModal(),E();return}const Pe={...p,...x,property_id:a,updated_at:new Date().toISOString()};delete Pe.id;const Ee=await Ca(Pe);if(Ee.error){if(z){Y++,s();const G=te;closeProductFormModal(),E(),typeof window.returnToScanReviewAfterSave=="function"&&window.returnToScanReviewAfterSave(G)&&E();return}s();const A=Ht(Ee.error,u?"Draft save":"Product publish");b(A,"error");try{let G=i.querySelector(".__publish-error-banner");G||(G=document.createElement("div"),G.className="__publish-error-banner mb-3 p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-medium",i.prepend(G)),G.textContent=A}catch{}return}try{bt(Pe)}catch{}try{const A=(window._productsData||[]).findIndex(G=>G.property_id===a);A>=0&&(window._productsData[A]=Pe)}catch{}b(u?"Draft saved!":`Published Successfully â€” your product is updated and live in your showroom (${Object.keys(x).length} change${Object.keys(x).length>1?"s":""}).`)}else{if(!o.title||!o.title.trim())throw new Error("A product title is required.");if(o.price===""||o.price==null||!isFinite(parseFloat(o.price)))throw new Error("A price is required.");if(!!i.querySelector('[name="condition"]')&&!o.condition)throw new Error("Please choose the product condition.");const g={listing_type:"product",category:t,subcategory:o.subcategory||null,title:o.title.trim(),description:o.description||"",price:Math.max(B,Math.min(O,parseFloat(o.price)||0)),currency:o.currency||"USD",country:"",country_code:"",listing_status:"sale",state:"",city:"",product_location:"",latitude:null,longitude:null,is_active:u?!1:o.is_active==="on",is_featured:o.is_featured==="on",brand:o.brand||null,color:o.color||null,size:o.size||null,condition:o.condition||null,warranty:o.warranty||null,availability_status:o.availability_status||"In Stock",stock_quantity:o.stock_quantity?parseInt(o.stock_quantity):null,images:o.images||[],video_url:(o.images||[]).find(v=>typeof v=="string"&&ke(v))||null,features:m(o.features_text).length?m(o.features_text):o.tags||[],tags:o.tags||[],highlights:m(o.highlights_text),seo_keywords:m(o.seo_keywords_text),is_ai_generated:!!o.catalog_template_id,ai_generated_fields:o.catalog_template_id?["title","description","features","highlights","seo_keywords"]:[],specifications:h(o)},x=kt();g.property_id=x;const _=await Ca(g);if(_.error){if(z){Y++,s();const w=te;closeProductFormModal(),E(),typeof window.returnToScanReviewAfterSave=="function"&&window.returnToScanReviewAfterSave(w)&&E();return}s();const v=Ht(_.error,"Product publish");b(v,"error");try{let w=i.querySelector(".__publish-error-banner");w||(w=document.createElement("div"),w.className="__publish-error-banner mb-3 p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-medium",i.prepend(w)),w.textContent=v}catch{}return}try{bt({...g,property_id:g.property_id})}catch{}try{(window._productsData=window._productsData||[]).unshift({...g})}catch{}b(u?"Draft saved!":"Published Successfully! Your product is now live in your showroom.")}z&&he++,s();try{localStorage.removeItem(Re(t,a))}catch{}const f=te;if(closeProductFormModal(),typeof window.returnToScanReviewAfterSave=="function"&&window.returnToScanReviewAfterSave(f)){E();return}E()}catch(l){const o=l&&l.message&&!/failed to fetch|networkerror/i.test(String(l.message))?l.message:Ht(l,"Product publish");if(z&&Y++,s(),z){const c=te;closeProductFormModal(),E(),typeof window.returnToScanReviewAfterSave=="function"&&window.returnToScanReviewAfterSave(c)&&E();return}b(o,"error")}};window.editProduct=async function(e){const{data:t,error:a}=await y.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=a?null:t;if(i||(i=De(e)),i||(i=(window._productsData||[]).find(n=>n.property_id===e)||null),!i)return b("Product not found","error");i.specifications&&typeof i.specifications=="object"&&(i={...i,...i.specifications}),showAddProductStep2(i.category||"Other",i)};window.toggleProductActive=async function(e,t){let a=null;try{const{data:n}=await y.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();n&&(a=ge(n))}catch{}if(a||(a=ge((window._productsData||[]).find(n=>n.property_id===e))),!a||!a.property_id){Vt(e,{is_active:t,availability_status:t?"In Stock":"Out of Stock"}),b(t?"Product published locally":"Product unpublished locally","info"),E();return}delete a.id,a.property_id=e,a.is_active=t,a.availability_status=t?"In Stock":"Out of Stock";const{error:i}=await y.from("showroom_listings").upsert(a,{onConflict:"property_id"});if(i){if(J(i))return b(`âšï¸ ${t?"Publish":"Unpublish"} blocked: database admin role rejected the write. Re-run the admin permission migration.`,"error");Vt(e,{is_active:t,availability_status:t?"In Stock":"Out of Stock"}),b(t?"Product published locally":"Product unpublished locally","info"),E();return}b(t?"Product published":"Product unpublished"),E()};window.duplicateProduct=async function(e,t=!1){const{data:a}=await y.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();if(!a)return;const{id:i,property_id:n,created_at:r,updated_at:s,...l}=a,o=kt();await y.from("showroom_listings").insert({...l,property_id:o,title:a.title+" (Copy)",is_active:!1}),t||(b("Product duplicated"),E())};window.archiveProduct=async function(e){confirm("Archive this product? It will be hidden from the website but can be restored.")&&(await y.from("showroom_listings").update({is_active:!1,availability_status:"Archived"}).eq("property_id",e),b("Product archived"),E())};const aa=["Single-Family Home","Apartment","Condo","Townhouse","Villa","Mansion","Beach House","Farm House","Commercial Building","Hotel","Land","Other"];async function Mt(){const e=document.getElementById("content");try{const{data:t,error:a}=await y.from("showroom_listings").select("*").eq("listing_type","property").order("created_at",{ascending:!1});let i=a?xt().filter(r=>r.listing_type==="property"):t||[];if(Array.isArray(re)){const r=new Set(i.map(l=>l.property_id)),s=re.filter(l=>l.listing_type==="property"&&l.property_id&&!r.has(l.property_id));s.length&&(i=i.concat(s))}i.sort((r,s)=>new Date(s.created_at||0)-new Date(r.created_at||0));try{await la()}catch{}const n=new Set(_t());i=i.filter(r=>!(r&&r.property_id&&n.has(r.property_id))),window._propertiesData=i,e.innerHTML=`
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
                        <img src="${d((r.images||[])[0]||"/fallback.svg")}" class="w-9 h-9 rounded-lg object-cover border border-blue-500/20" onerror="this.src='/fallback.svg'">
                        <div><p class="text-xs font-bold text-white truncate max-w-[160px]">${d(r.title)}</p><p class="text-[10px] font-mono text-gray-500">${d(r.property_id)}</p></div>
                      </div>
                    </td>
                    <td><span class="text-xs text-gray-300">${d(r.property_type||r.category)}</span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${d([r.city,r.state,r.country].filter(Boolean).join(", ")||"â€”")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(r.price||0).toLocaleString()}</span></td>
                    <td>${K(r.listing_status||"sale")} ${K(r.is_active?"active":"inactive")}</td>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.showAddPropertyModal=function(e={}){const t=!!e.property_id,a=Ka("property","Real Estate"),i=e.country_code||"US",n=e.currency||da(i);D(`
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
              <div class="sm:col-span-2"><label class="lbl">Property Template</label><select class="input-field" name="catalog_template_id" id="ppf-catalog_template_id" onchange="applyPropertyCatalogTemplate()"><option value="">Choose a property template...</option>${a.map(s=>`<option value="${s.id}">${d(s.label)} - ${d(s.propertyType||s.subcategory)}</option>`).join("")}</select></div>
              <div><label class="lbl">Country</label><select class="input-field" name="country_code" id="ppf-country_code" onchange="syncPropertyCountry(); applyPropertyCatalogTemplate()">${fi(i)}</select></div>
              <div><label class="lbl">Currency</label><select class="input-field" name="currency" id="ppf-currency" onchange="applyPropertyCatalogTemplate()">${hi(n)}</select></div>
            </div>
            <p id="ppf-image-requirement" class="text-[11px] text-gray-400">Any number of images is fine â€” save and publish anytime.</p>
            <input type="hidden" name="required_image_count" id="ppf-required_image_count" value="">
          </div>

          <div class="glass-soft border border-blue-500/15 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="home" class="w-4 h-4 text-blue-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Basic Information</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Property Title *</label><input class="input-field" name="title" value="${d(e.title||"")}" required placeholder="e.g. Cozy 3-Bedroom Family Home"></div>
              <div><label class="lbl">Property Type *</label><select class="input-field" name="property_type" required>
                ${aa.map(s=>`<option value="${s}" ${e.property_type===s?"selected":""}>${s}</option>`).join("")}
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
                ${["New Construction","Like New","Excellent","Good","Fair","Needs Renovation"].map(s=>`<option value="${s}" ${e.condition===s?"selected":""}>${s}</option>`).join("")}
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
              <div class="sm:col-span-2"><label class="lbl">Rooms (comma separated â€” Name: dimensions)</label><input class="input-field" name="floor_plan_rooms" value="${d((e.floor_plan?.rooms||[]).map(s=>(s.name||"")+(s.dimensions?": "+s.dimensions:"")).join(", "))}" placeholder="Living Room: 15x12, Kitchen: 10x10â€¦"></div>
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
              <div class="sm:col-span-2"><label class="lbl">Legal / Financial Info (comma separated â€” add source tag)</label><input class="input-field" name="legal_info_text" value="${d((e.legal_info||[]).map(s=>(s.label||"")+(s.value?": "+s.value:"")+(s.source?` (${s.source})`:"")).join(", "))}" placeholder="Ownership: Clear title (Seller provided), Property taxes: (Not verified)â€¦"></div>
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
              ${(e.images||[]).map((s,l)=>$e(s,l)).join("")}
            </div>
            <div id="image-url-inputs">
              ${(e.images||[]).map((s,l)=>`<input type="hidden" name="images" id="img-url-${l}" value="${d(s)}">`).join("")}
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
    </div>`),Ct(),It(),Jt("ppf-price"),window._propFormDirty=!!t;const r=document.getElementById("property-form");if(r){const s=()=>{window._propFormDirty=!0};r.addEventListener("input",s),r.addEventListener("change",s)}window.syncPropertyCountry=function(){Ia("ppf")},Ia("ppf"),Xt("pricing"),document.getElementById("ppf-price")?.addEventListener("input",()=>Xt("pricing")),$r()};let ne=null,pt=null,Fa=null;function Sr(){const e=document.querySelector("#property-form");if(!e)return"";const t=a=>(e.querySelector(`[name="${a}"]`)?.value||"").trim();return[t("product_location"),t("town"),t("city"),t("state"),t("country")].filter(Boolean).join(", ")}function be(e,t){const a=document.getElementById("property-map-status");a&&(a.textContent=e,a.style.color=t?"#dc2626":"")}function Xe(e,t,{reverse:a=!1}={}){if(!ne||!Number.isFinite(e)||!Number.isFinite(t))return;const i=[e,t];pt?pt.setLatLng(i):pt=L.marker(i,{draggable:!0}).addTo(ne),ne.setView(i,Math.max(ne.getZoom(),13));const n=document.querySelector('#property-form [name="latitude"]'),r=document.querySelector('#property-form [name="longitude"]');n&&(n.value=String(Number(e.toFixed(6)))),r&&(r.value=String(Number(t.toFixed(6)))),a&&ia(e,t);const s=document.getElementById("btn-open-google-map");s&&(s.href=`https://www.google.com/maps?q=${e.toFixed(6)},${t.toFixed(6)}`)}async function Je(){const e=Sr();if(!e){be("Enter a location (address, area, city, state, country), then press Locate from fields.");return}be("Searching locationâ€¦");try{const a=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(e))).json();a&&a[0]?(Xe(parseFloat(a[0].lat),parseFloat(a[0].lon)),be("Located: "+a[0].display_name)):be("Could not find that location. Check the spelling or click the map to drop the pin.",!0)}catch{be("Map lookup failed. You can still drop the pin by clicking the map.",!0)}}async function ia(e,t){const a=document.querySelector("#property-form");if(a)try{const n=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${t}&zoom=16`)).json(),r=n&&n.address||{},s=(f,p)=>{if(!p)return;const g=a.querySelector(`[name="${f}"]`);return g&&!String(g.value||"").trim()?(g.value=p,!0):!1},l=[r.road||"",r.house_number||""].filter(Boolean).join(" "),o=r.suburb||r.neighbourhood||r.quarter||r.district||r.borough||"",c=r.town||r.village||r.municipality||r.city_district||"",u=r.city||r.county||"",m=r.state||r.region||"",h=r.country||"";if(s("product_location",l||o||c),s("town",o||c),s("city",u),s("state",m),h){s("country",h);const f=a.querySelector('[name="country_code"]');if(f){const p=(Oe||[]).find(g=>String(g.name||"").toLowerCase()===String(h).toLowerCase());p&&p.code&&!f.value&&(f.value=p.code)}}be("Pin set at "+e.toFixed(5)+", "+t.toFixed(5)+(n.display_name?" â€” "+n.display_name:""))}catch{be("Pin set. Could not reverse-geocode the address.",!0)}}window.refreshPropertyMapFromForm=function(){if(!ne)return;const e=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),t=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);Number.isFinite(e)&&Number.isFinite(t)&&(e||t)?(Xe(e,t),be("Map updated from coordinates.")):Je()};function $r(){const e=document.getElementById("property-map-preview");if(!e||!window.L){be("Map unavailable right now â€” your location fields still save normally.");return}ne&&(ne.remove(),ne=null,pt=null);const t=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),a=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value),i=Number.isFinite(t)&&Number.isFinite(a)&&(t||a);ne=L.map(e,{scrollWheelZoom:!1}).setView(i?[t,a]:[20,0],i?13:2),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(ne),ne.on("click",n=>Xe(n.latlng.lat,n.latlng.lng,{reverse:!0})),document.getElementById("btn-geocode-property")?.addEventListener("click",Je),["product_location","town","city","state","country","latitude","longitude"].forEach(n=>{const r=document.querySelector(`#property-form [name="${n}"]`);r&&(r.addEventListener("input",()=>{if(n==="latitude"||n==="longitude"){const s=parseFloat(document.querySelector('#property-form [name="latitude"]')?.value),l=parseFloat(document.querySelector('#property-form [name="longitude"]')?.value);Number.isFinite(s)&&Number.isFinite(l)&&(s||l)&&Xe(s,l);return}clearTimeout(Fa),Fa=setTimeout(Je,900)}),r.addEventListener("change",()=>{n!=="latitude"&&n!=="longitude"&&Je()}))}),i?Xe(t,a):Je()}window.fixPropertyMaps=async function(){const t=(window._propertiesData||[]).filter(n=>{const r=parseFloat(n.latitude),s=parseFloat(n.longitude),l=[n.product_location,n.town,n.city,n.state,n.country].filter(Boolean).join(", ");return!(Number.isFinite(r)&&Number.isFinite(s)&&(r!==0||s!==0))&&!!l});if(!t.length){b("All properties already have map coordinates.","success");return}b(`Fixing maps for ${t.length} propert${t.length>1?"ies":"y"}â€¦`,"success");let a=0,i=0;for(const n of t){const r=[n.product_location,n.town,n.city,n.state,n.country].filter(Boolean).join(", ");try{const l=await(await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=1&q="+encodeURIComponent(r))).json();if(l&&l[0]){const o={latitude:parseFloat(l[0].lat),longitude:parseFloat(l[0].lon)},{error:c}=await y.from("showroom_listings").update(o).eq("property_id",n.property_id);c?i++:(Object.assign(n,o),a++)}else i++}catch{i++}await new Promise(s=>setTimeout(s,1100))}b(`Map fix done: ${a} updated, ${i} failed.`,i?"error":"success"),Mt()};window.saveProperty=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=Object.fromEntries(a.entries()),n=a.getAll("images").filter(p=>p&&!p.startsWith("blob:")),r=(i.features_text||"").split(",").map(p=>p.trim()).filter(Boolean),s=i.real_price===""||i.real_price==null?null:Math.max(B,Math.min(O,parseFloat(i.real_price)||0)),l=p=>(p||"").split(",").map(g=>g.trim()).filter(Boolean),o=p=>p===""||p==null||!isFinite(parseInt(p,10))?null:parseInt(p,10),c=l(i.floor_plan_rooms).map(p=>{const g=String(p).match(/^(.*?):\s*(.*)$/);return g?{name:g[1].trim(),dimensions:g[2].trim()}:{name:p,dimensions:""}}),u={listing_type:"property",category:i.property_type||"Real Estate",subcategory:i.subcategory||null,title:i.title,description:i.description||"",price:Math.max(B,Math.min(O,parseFloat(i.price)||0)),currency:i.currency||"USD",real_price:s,country:i.country||"",country_code:(i.country_code||"").toUpperCase(),state:i.state||"",city:i.city||"",town:i.town||"",address:i.address||"",zip_code:i.zip_code||"",product_location:i.product_location||"",latitude:i.latitude?parseFloat(i.latitude):null,longitude:i.longitude?parseFloat(i.longitude):null,property_type:i.property_type||"",listing_status:i.listing_status||"sale",condition:i.condition||null,bedrooms:i.bedrooms?parseInt(i.bedrooms):null,bathrooms:i.bathrooms?parseInt(i.bathrooms):null,half_bathrooms:o(i.half_bathrooms),building_size:i.building_size||"",land_size:i.land_size||"",floors:o(i.floors),garage:i.garage||"",parking_spaces:i.parking_spaces?parseInt(i.parking_spaces):null,furnished:i.furnished||"",year_built:o(i.year_built),year_renovated:o(i.year_renovated),landmarks:l(i.landmarks_text),interior_features:l(i.interior_features_text),exterior_features:l(i.exterior_features_text),home_systems:l(i.home_systems_text),legal_info:l(i.legal_info_text).map(p=>{const g=String(p).match(/^(.*?):\s*(.*?)\s*\((Seller provided|Not verified|Documented)\)\s*$/i);return g?{label:g[1].trim(),value:g[2].trim(),source:g[3]}:{label:p,value:"",source:"Not verified"}}),risk_notes:i.risk_notes||"",floor_plan:{image:i.floor_plan_image||"",rooms:c,levels:i.floor_plan_levels||"",total_area:i.floor_plan_total_area||""},nearby_area:{schools:l(i.nearby_schools_text),hospitals:l(i.nearby_hospitals_text),shopping:l(i.nearby_shopping_text),transportation:l(i.nearby_transportation_text),distances:l(i.nearby_distances_text)},verification_status:i.verification_status||"Not verified",verification_date:i.verification_date||"",inspection_info:i.inspection_info||"",documents:l(i.documents_text),features:r,images:n,video_url:(n||[]).find(p=>typeof p=="string"&&ke(p))||null,video:(n||[]).find(p=>typeof p=="string"&&ke(p))||null,highlights:Kt(i.highlights_text),seo_keywords:Kt(i.seo_keywords_text),is_ai_generated:!!i.catalog_template_id,ai_generated_fields:i.catalog_template_id?["title","description","features","highlights","seo_keywords","country","country_code","product_location"]:[],is_active:i.is_active==="on"},m={neighborhood:i.neighborhood||"",living_areas:i.living_areas||"",kitchens:o(i.kitchens),balconies:o(i.balconies),garden:i.garden||"",pool:i.pool||"",security:i.security||"",utilities:i.utilities||"",construction_type:i.construction_type||"",construction_status:i.construction_status||"",ownership_type:i.ownership_type||"",contact_name:i.contact_name||"",contact_phone:i.contact_phone||"",contact_email:i.contact_email||""},h={};for(const[p,g]of Object.entries({...m,real_price:s}))g!=null&&String(g).trim()!==""&&(h[p]=g);let f;if(t){u.property_id=t;const p=ge((window._propertiesData||[]).find(g=>g.property_id===t)||(window._productsData||[]).find(g=>g.property_id===t));u.specifications={...p.specifications&&typeof p.specifications=="object"?p.specifications:{},...h},{error:f}=await y.from("showroom_listings").upsert({...p,...u},{onConflict:"property_id"})}else u.property_id=kt(),u.specifications={...h},{error:f}=await y.from("showroom_listings").insert(u);f&&bi(f,()=>bt({...u,property_id:t||u.property_id}),t?"Property update":"Property publish")||(b(t?"Property updated!":"Property published!"),oe(),Mt())};const Ze={Car:"Cars",Truck:"Trucks",Bus:"Buses","Motorhome / RV":"Motorhomes",Motorcycle:"Motorcycles","Boat / Marine":"Marine & Boating"},Pr=["Sedan","SUV","Hatchback","Coupe","Convertible","Wagon","Pickup","Van","Truck","Sports Car","Luxury Sedan","Bus","Motorhome","Motorcycle","Yacht","Jet Ski","Other"];window.showAddVehicleModal=function(e={}){const t=!!e.property_id,a=Object.keys(Ze).find(l=>Ze[l]===e.category)||"Car",i=e.specifications&&typeof e.specifications=="object"?e.specifications:{},n=(l,o)=>e[l]??i[l]??o,r=(l,o="")=>Array.isArray(l)?l.join(", "):l??o;D(`
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
              <div><label class="lbl">Vehicle Type *</label><select class="input-field" name="vehicle_type" required>${Object.keys(Ze).map(l=>`<option value="${l}" ${a===l?"selected":""}>${l}</option>`).join("")}</select></div>
              <div><label class="lbl">Body Type</label><select class="input-field" name="body_type">${["",...Pr].map(l=>`<option value="${l}" ${n("body_type","")===l?"selected":""}>${l||"General"}</option>`).join("")}</select></div>
              <div class="sm:col-span-2"><label class="lbl">Vehicle Title *</label><input class="input-field" name="title" value="${d(e.title||"")}" placeholder="e.g. 2023 Toyota Land Cruiser V8 Turbo Diesel"></div>
              <div><label class="lbl">Brand / Make *</label><input class="input-field" name="make" value="${d(n("make",n("brand","")))}" placeholder="e.g. Toyota"></div>
              <div><label class="lbl">Model *</label><input class="input-field" name="model" value="${d(i.model||e.model||"")}" placeholder="e.g. Land Cruiser"></div>
              <div><label class="lbl">Trim / Edition</label><input class="input-field" name="trim" value="${d(n("trim",""))}" placeholder="e.g. GXR V8, Platinum, LS"></div>
              <div><label class="lbl">Model Year</label><input class="input-field" name="model_year" value="${d(n("model_year",""))}" placeholder="e.g. 2023"></div>
              <div><label class="lbl">Doors</label><input class="input-field" name="doors" value="${d(n("doors",""))}" placeholder="e.g. 4"></div>
              <div><label class="lbl">Color (Exterior)</label><input class="input-field" name="color" value="${d(e.color||i.color||"")}" placeholder="e.g. Pearl White"></div>
              <div><label class="lbl">VIN / Serial</label><input class="input-field" name="vin" value="${d(n("vin",""))}" placeholder="Optional identification number"></div>
            </div>
          </div>

          <div class="glass-soft border border-amber-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="gauge" class="w-4 h-4 text-amber-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Performance &amp; Mechanical</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Mileage</label><input class="input-field" name="mileage" value="${d(n("mileage",""))}" placeholder="e.g. 15,000 mi or 0 (new)"></div>
              <div><label class="lbl">Engine</label><input class="input-field" name="engine" value="${d(n("engine",""))}" placeholder="e.g. 4.0L V8 Turbo Diesel"></div>
              <div><label class="lbl">Horsepower</label><input class="input-field" name="horsepower" value="${d(n("horsepower",""))}" placeholder="e.g. 400 hp"></div>
              <div><label class="lbl">Transmission</label><select class="input-field" name="transmission">${["","Automatic","Manual","CVT","Dual-Clutch","Semi-Automatic","Electric (Single Speed)"].map(l=>`<option value="${l}" ${n("transmission","")===l?"selected":""}>${l||"Not specified"}</option>`).join("")}</select></div>
              <div><label class="lbl">Fuel Type</label><select class="input-field" name="fuel_type">${["","Gasoline","Diesel","Electric","Hybrid","Plug-in Hybrid","LPG","Bio-diesel"].map(l=>`<option value="${l}" ${n("fuel_type","")===l?"selected":""}>${l||"Not specified"}</option>`).join("")}</select></div>
              <div><label class="lbl">Drive Type</label><select class="input-field" name="drive_type">${["","FWD","RWD","AWD","4WD"].map(l=>`<option value="${l}" ${n("drive_type","")===l?"selected":""}>${l||"Not specified"}</option>`).join("")}</select></div>
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
              <div><label class="lbl">Condition *</label><select class="input-field" name="condition" required>${["","New","Used - Like New","Used - Good","Used - Fair","Refurbished"].map(l=>`<option value="${l}" ${n("condition","")===l?"selected":""}>${l||"Select condition"}</option>`).join("")}</select></div>
              <div><label class="lbl">Previous Owners</label><input class="input-field" name="previous_owners" value="${d(n("previous_owners",""))}" placeholder="e.g. 1 or None (new)"></div>
              <div class="sm:col-span-2"><label class="lbl">Ownership History</label><textarea class="input-field" name="ownership_history" rows="2" placeholder="e.g. Single owner, always garaged, clean title">${d(n("ownership_history",""))}</textarea></div>
              <div class="sm:col-span-2"><label class="lbl">Service / Maintenance History</label><textarea class="input-field" name="service_history" rows="2" placeholder="e.g. Full dealer service every 5,000 mi, new brakes 2024">${d(n("service_history",""))}</textarea></div>
              <div class="sm:col-span-2"><label class="lbl">Accident / Damage History</label><textarea class="input-field" name="accident_history" rows="2" placeholder="e.g. Accident-free, or: minor rear bumper repair 2022">${d(n("accident_history",""))}</textarea></div>
              <div><label class="lbl">Registration Status</label><select class="input-field" name="registration_status">${["","Registered","Unregistered","Registration Pending"].map(l=>`<option value="${l}" ${n("registration_status","")===l?"selected":""}>${l||"Not specified"}</option>`).join("")}</select></div>
              <div><label class="lbl">Inspection Status</label><select class="input-field" name="inspection_status">${["","Inspected & Certified","Inspected","Not Inspected","Under Inspection"].map(l=>`<option value="${l}" ${n("inspection_status","")===l?"selected":""}>${l||"Not specified"}</option>`).join("")}</select></div>
            </div>
          </div>

          <div class="glass-soft border border-rose-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="cpu" class="w-4 h-4 text-rose-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Safety, Technology &amp; Interior</p></div>
            <div class="form-grid form-grid-2">
              <div class="sm:col-span-2"><label class="lbl">Safety Features (comma separated)</label><input class="input-field" name="safety_features" value="${d(typeof n("safety_features",[]).join=="function"?n("safety_features",[]).join(", "):n("safety_features",""))}" placeholder="ABS, Airbags, Lane Assist, Traction Control, 360 Camera"></div>
              <div class="sm:col-span-2"><label class="lbl">Driver Assistance</label><input class="input-field" name="driver_assistance" value="${d(r(n("driver_assistance","")))}" placeholder="Adaptive Cruise, Auto Emergency Braking, Blind-spot Monitor"></div>
              <div class="sm:col-span-2"><label class="lbl">Technology &amp; Infotainment</label><input class="input-field" name="technology" value="${d(r(n("technology","")))}" placeholder="Apple CarPlay, Navigation, BOSE sound, Reverse camera"></div>
              <div class="sm:col-span-2"><label class="lbl">Interior &amp; Comfort</label><input class="input-field" name="interior" value="${d(r(n("interior","")))}" placeholder="Leather seats, Heated front seats, Sunroof, AC"></div>
            </div>
          </div>

          <div class="glass-soft border border-sky-500/25 rounded-2xl p-4 space-y-3">
            <div class="flex items-center gap-2"><i data-lucide="badge-dollar-sign" class="w-4 h-4 text-sky-400"></i><p class="text-xs font-bold text-white uppercase tracking-wide">Price, Warranty, Location &amp; Seller</p></div>
            <div class="form-grid form-grid-2">
              <div><label class="lbl">Price (USD) *</label><input type="number" class="input-field" name="price" value="${e.price||""}" required placeholder="0"></div>
              <div><label class="lbl">Real Price (crossed out)</label><input type="number" class="input-field" name="real_price" value="${e.real_price??i.real_price??""}" placeholder="Original price before discount"></div>
              <div><label class="lbl">Stock Qty</label><input type="number" class="input-field" name="stock_quantity" value="${e.stock_quantity??"1"}"></div>
              <div><label class="lbl">Warranty</label><input class="input-field" name="warranty" value="${d(e.warranty||i.warranty||"")}" placeholder="e.g. 3-year manufacturer"></div>
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
                ${(e.images||[]).map((l,o)=>$e(l,o)).join("")}
              </div>
              <div id="image-url-inputs">
                ${(e.images||[]).map((l,o)=>`<input type="hidden" name="images" id="img-url-${o}" value="${d(l)}">`).join("")}
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
    </div>`),Ct(),It(),window._vehFormDirty=!!t;const s=document.getElementById("vehicle-form");if(s){const l=()=>{window._vehFormDirty=!0};s.addEventListener("input",l),s.addEventListener("change",l)}window.lucide&&lucide.createIcons()};window.saveVehicle=async function(e,t){e.preventDefault();const a=new FormData(e.target),i=Object.fromEntries(a.entries()),n=[...a.getAll("images")].filter(Boolean).concat(String(i.images_text||"").split(/\r?\n/).map(k=>k.trim()).filter(Boolean)),r=[...new Set(n)],s=(i.features_text||"").split(",").map(k=>k.trim()).filter(Boolean),l=(i.safety_features||"").split(",").map(k=>k.trim()).filter(Boolean),o=(i.driver_assistance||"").split(",").map(k=>k.trim()).filter(Boolean),c=(i.technology||"").split(",").map(k=>k.trim()).filter(Boolean),u=(i.interior||"").split(",").map(k=>k.trim()).filter(Boolean),m=i.real_price===""||i.real_price==null?null:Math.max(B,Math.min(O,parseFloat(i.real_price)||0)),h=Ze[i.vehicle_type]||"Cars",f=String(i.model_year||"").trim(),p=String(i.make||"").trim(),g=String(i.model||"").trim(),x=[f,p,g].filter(Boolean).join(" ")||String(i.title||"").trim(),_={make:p,model:g,model_year:f,body_type:i.body_type||null,trim:i.trim||"",mileage:i.mileage||"",engine:i.engine||"",horsepower:i.horsepower||"",transmission:i.transmission||null,drive_type:i.drive_type||null,fuel_type:i.fuel_type||null,fuel_economy:i.fuel_economy||"",towing_capacity:i.towing_capacity||"",seating_capacity:i.seating_capacity||null,sleeping_capacity:h==="Motorhomes"&&i.seating_capacity||null,doors:i.doors||null,safety_features:l,driver_assistance:o,technology:c,interior:u,wheels_tires:i.wheels_tires||"",dimensions:i.dimensions||"",cargo_capacity:i.cargo_capacity||"",ownership_history:i.ownership_history||"",service_history:i.service_history||"",accident_history:i.accident_history||"",previous_owners:i.previous_owners||"",registration_status:i.registration_status||null,inspection_status:i.inspection_status||null,color:i.color||"",vin:i.vin||"",warranty:i.warranty||"",condition:i.condition||"",location:i.location||"",seller_name:i.seller_name||"",seller_phone:i.seller_phone||"",seller_email:i.seller_email||"",product_location:i.location||""};for(const k of Object.keys(_))_[k]==null&&delete _[k];const v={listing_type:"vehicle",category:h,subcategory:i.body_type||i.vehicle_type||null,title:String(i.title||"").trim()||x,description:i.description||"",price:Math.max(B,Math.min(O,parseFloat(i.price)||0)),currency:"USD",real_price:m,images:r,features:s,brand:p||null,color:i.color||null,condition:i.condition||null,warranty:i.warranty||null,stock_quantity:parseInt(i.stock_quantity,10)||1,is_active:i.is_active==="on",is_featured:!1,specifications:{..._,real_price:m}};let w;if(t){v.property_id=t;const k=ge((window._productsData||[]).find($=>$.property_id===t));v.specifications={...k.specifications&&typeof k.specifications=="object"?k.specifications:{},..._,real_price:m},{error:w}=await y.from("showroom_listings").upsert({...k||{},...v},{onConflict:"property_id"})}else v.property_id=kt(),{error:w}=await y.from("showroom_listings").insert(v);w&&bi(w,()=>bt({...v,property_id:t||v.property_id}),t?"Vehicle update":"Vehicle publish")||(b(t?"Vehicle updated!":"Vehicle published! It now appears in the Cars & Trucks row."),oe(),E())};window.editProperty=async function(e){const{data:t,error:a}=await y.from("showroom_listings").select("*").eq("property_id",e).maybeSingle();let i=a?null:t;i||(i=De(e)),i||(i=(Array.isArray(re)?re.find(n=>n.property_id===e):null)||null),i&&showAddPropertyModal(i)};const Er=["pending_verification","payment_received","payment_approved","processing","shipped","in_transit","out_for_delivery","delivered","cancelled","rejected"];async function Ci(){const e=document.getElementById("content");try{const{data:t}=await y.from("payment_receipts").select("*").order("created_at",{ascending:!1}).limit(300),a=t||[],i=["All","Pending","Paid","Processing","Shipped","Delivered","Cancelled"];let n="All";e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Orders Manager</h2>
        <div class="flex gap-2 flex-wrap" id="order-tabs">
          ${i.map(r=>`<button class="tab-btn ${r==="All"?"active":""}" onclick="filterOrders('${r}')">${r}</button>`).join("")}
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
                ${a.length===0?'<tr><td colspan="7" class="text-center text-gray-500 py-12">No orders yet</td></tr>':a.map(r=>Ar(r)).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._ordersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}function Ar(e){return`<tr class="order-row" data-status="${e.status}" data-search="${d(e.order_number)} ${d(e.full_name)} ${d(e.email)}">
    <td><span class="font-mono text-xs text-blue-400 font-bold">${d(e.order_number||e.id?.slice(0,8))}</span></td>
    <td>
      <p class="text-xs font-bold text-white">${d(e.full_name||"Guest")}</p>
      <p class="text-[10px] text-gray-500">${d(e.email)}</p>
    </td>
    <td><p class="text-xs text-gray-300 truncate max-w-[140px]">${d(e.listing_title||e.listing_id||"â€”")}</p></td>
    <td class="hidden sm:table-cell"><span class="text-xs font-bold text-emerald-400">$${parseFloat(e.amount||0).toLocaleString()}</span></td>
    <td>${K(e.status)}</td>
    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${se(e.created_at)}</span></td>
    <td>
      <button onclick="viewOrder('${e.id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition" title="View / Update">
        <i data-lucide="eye" class="w-3.5 h-3.5"></i>
      </button>
    </td>
  </tr>`}window.filterOrders=function(e){document.querySelectorAll("#order-tabs .tab-btn").forEach(t=>t.classList.toggle("active",t.textContent===e)),document.querySelectorAll(".order-row").forEach(t=>{const a=t.dataset.status||"",i=e==="All"||e==="Pending"&&["pending_verification","payment_received","order_placed"].includes(a)||e==="Paid"&&["payment_approved"].includes(a)||e==="Processing"&&["processing"].includes(a)||e==="Shipped"&&["shipped","in_transit","out_for_delivery"].includes(a)||e==="Delivered"&&a==="delivered"||e==="Cancelled"&&["cancelled","rejected"].includes(a);t.style.display=i?"":"none"})};window.searchOrders=function(e){const t=e.toLowerCase();document.querySelectorAll(".order-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewOrder=async function(e){const t=(window._ordersData||[]).find(a=>a.id===e);t&&D(`
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal-box">
        <div class="flex items-center justify-between mb-5">
          <h3 class="text-base font-black text-white">Order ${d(t.order_number)}</h3>
          <button onclick="closeModal()" class="text-gray-500 hover:text-white"><i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-1.5 align-[-2px]"></i> Back</button>
        </div>
        <div class="space-y-3 text-sm">
          <div class="grid grid-cols-2 gap-3">
            ${[["Customer",t.full_name],["Email",t.email],["Phone",t.phone],["Amount",ai(t.amount,t.currency)],["Product",t.listing_title||t.listing_id],["Date",Se(t.created_at)]].map(([a,i])=>`<div><p class="text-[10px] text-gray-500 uppercase font-bold mb-0.5">${a}</p><p class="text-xs text-white font-medium">${d(i)||"â€”"}</p></div>`).join("")}
          </div>
          ${t.transaction_reference?`<div class="p-3 glass-soft border border-blue-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Transaction Reference</p><p class="text-xs font-mono text-blue-300">${d(t.transaction_reference)}</p></div>`:""}
          ${t.additional_notes?`<div class="p-3 glass-soft border border-amber-500/15 rounded-xl"><p class="text-[10px] text-gray-500 font-bold uppercase mb-1">Notes</p><p class="text-xs text-gray-300">${d(t.additional_notes)}</p></div>`:""}
          <div>
            <label class="lbl">Update Order Status</label>
            <div class="flex gap-2">
              <select id="order-status-select" class="input-field flex-1">
                ${Er.map(a=>`<option value="${a}" ${t.status===a?"selected":""}>${a.replace(/_/g," ")}</option>`).join("")}
              </select>
              <button onclick="updateOrderStatus('${t.id}')" class="btn-press px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>`)};window.updateOrderStatus=async function(e){const t=document.getElementById("order-status-select")?.value;if(!t)return;const{error:a}=await y.from("payment_receipts").update({status:t}).eq("id",e);if(a){b(a.message,"error");return}b("Order status updated"),oe(),Ci()};async function Cr(){const e=document.getElementById("content");try{const{data:t}=await y.from("profiles").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
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
                ${a.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-12">No customers yet</td></tr>':a.map(i=>`<tr class="cust-row" data-search="${d(i.display_name)} ${d(i.user_id)}">
                    <td>
                      <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                          <i data-lucide="user" class="w-4 h-4 text-blue-400"></i>
                        </div>
                        <div>
                          <p class="text-xs font-bold text-white">${d(i.display_name||"Anonymous")}</p>
                          <p class="text-[10px] font-mono text-gray-500">${d(i.user_id?.slice(0,12))}â€¦</p>
                        </div>
                      </div>
                    </td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-300">${d(i.country_code||"â€”")}</span></td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${se(i.created_at)}</span></td>
                    <td>
                      <button onclick="viewCustomer('${i.user_id}')" class="btn-press p-1.5 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"><i data-lucide="eye" class="w-3.5 h-3.5"></i></button>
                    </td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window._customersData=a,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.searchCustomers=function(e){const t=e.toLowerCase();document.querySelectorAll(".cust-row").forEach(a=>{a.style.display=!t||a.dataset.search.toLowerCase().includes(t)?"":"none"})};window.viewCustomer=async function(e){const t=(window._customersData||[]).find(i=>i.user_id===e);if(!t)return;const{data:a}=await y.from("payment_receipts").select("order_number,amount,currency,status,created_at").eq("user_id",e).order("created_at",{ascending:!1}).limit(20);D(`
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
            <p class="text-xs text-gray-400 mt-0.5">Joined ${se(t.created_at)} Â· ${d(t.country_code||"Unknown country")}</p>
          </div>
        </div>
        <h4 class="text-xs font-bold text-gray-400 uppercase mb-3">Purchase History</h4>
        ${(a||[]).length===0?'<p class="text-xs text-gray-500 py-4 text-center">No orders yet</p>':(a||[]).map(i=>`<div class="flex items-center justify-between py-2 border-b border-blue-500/5 last:border-0">
            <div><p class="text-xs font-bold text-white font-mono">${d(i.order_number)}</p><p class="text-[10px] text-gray-500">${Se(i.created_at)}</p></div>
            <div class="flex items-center gap-2">${K(i.status)}<span class="text-xs font-bold text-emerald-400">$${parseFloat(i.amount).toLocaleString()}</span></div>
          </div>`).join("")}
      </div>
    </div>`)};async function ot(){const e=document.getElementById("content");try{const{data:t}=await y.from("product_reviews").select("*, showroom_listings(title, property_id)").order("created_at",{ascending:!1}).limit(200),a=t||[],i=a.filter(l=>!l.is_approved).length,{data:n}=await y.from("site_feedback").select("*").order("created_at",{ascending:!1}).limit(200),r=n||[],s=r.filter(l=>!l.is_approved).length;e.innerHTML=`
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
            ${a.length===0?Ie("star","No Reviews","Customer reviews will appear here."):a.map(l=>Tr(l)).join("")}
          </div>
        </div>

        <div class="glass-soft border border-emerald-500/15 rounded-2xl p-5 space-y-4">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-sm font-black text-white flex items-center gap-2"><i data-lucide="message-square-text" class="w-4 h-4 text-emerald-400"></i> Customer Feedback (site-wide)</h3>
            ${s>0?`<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">${s} pending</span>`:""}
          </div>
          <p class="text-[11px] text-gray-500">Feedback submitted from the "Feedback" form on every page. Approve to show it in the public "View more Feedback" list.</p>
          <div class="space-y-3" id="feedback-list">
            ${r.length===0?Ie("message-square","No Feedback Yet","Site feedback will appear here."):r.map(l=>Ir(l)).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}function Ir(e){const t=Array.from({length:5},(a,i)=>i<(e.rating||5)?"â˜…":"â˜†").join("");return`<div class="glass-soft border ${e.is_approved?"border-emerald-500/15":"border-amber-500/20"} rounded-xl p-4" data-fb-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          <span class="text-amber-400 font-bold text-sm">${t}</span>
          <span class="text-xs font-black text-white">${d(e.name||"Anonymous shopper")}</span>
          <span class="text-xs text-gray-500">${d(e.email||"no email")} Â· ${se(e.created_at)}</span>
          ${e.is_approved?'<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Approved</span>':'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Pending</span>'}
        </div>
        <p class="text-sm text-gray-200 leading-relaxed">${d(e.feedback||"â€”")}</p>
      </div>
      <div class="flex gap-1 shrink-0">
        ${e.is_approved?"":`<button onclick="approveFeedback('${e.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Approve"><i data-lucide="check" class="w-4 h-4"></i></button>`}
        <button onclick="deleteFeedback('${e.id}')" class="btn-press p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Delete"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>`}window.approveFeedback=async function(e){const{error:t}=await y.from("site_feedback").update({is_approved:!0}).eq("id",e);t?b(t.message,"error"):b("Feedback approved â€” it now shows on every page."),ot()};window.deleteFeedback=async function(e){if(!confirm("Delete this feedback permanently?"))return;const{error:t}=await y.from("site_feedback").delete().eq("id",e);t?b(t.message,"error"):b("Feedback deleted."),ot()};function Tr(e){const t=Array.from({length:5},(a,i)=>i<e.rating?"â˜…":"â˜†").join("");return`<div class="review-card glass-soft border ${e.is_approved?"border-blue-500/15":"border-amber-500/20"} rounded-xl p-4" data-approved="${e.is_approved}">
    <div class="flex items-start justify-between gap-3">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-amber-400 font-bold text-sm">${t}</span>
          <span class="text-xs text-gray-500">${se(e.created_at)}</span>
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
  </div>`}window.filterReviewTab=function(e){["all","pending","approved"].forEach(t=>document.getElementById(`rtab-${t}`)?.classList.toggle("active",t===e)),document.querySelectorAll(".review-card").forEach(t=>{const a=e==="all"||e==="pending"&&t.dataset.approved==="false"||e==="approved"&&t.dataset.approved==="true";t.style.display=a?"":"none"})};window.approveReview=async function(e){await y.from("product_reviews").update({is_approved:!0}).eq("id",e),b("Review approved"),ot()};window.deleteReview=async function(e){confirm("Delete this review permanently?")&&(await y.from("product_reviews").delete().eq("id",e),b("Review deleted"),ot())};async function Ii(){const e=document.getElementById("content");try{const{data:t}=await y.from("support_messages").select("*").order("created_at",{ascending:!1}).limit(200),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Messages & Support</h2>
        <div class="space-y-3">
          ${a.length===0?Ie("message-circle","No Messages","Customer support messages will appear here."):a.map(i=>`
              <div class="glass-soft border ${i.is_read?"border-blue-500/10":"border-blue-400/30"} rounded-xl p-4 ${i.is_read?"":"ring-1 ring-blue-500/10"}">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs font-black text-white">${d(i.full_name||i.name||"Anonymous")}</span>
                      ${i.is_read?"":'<span class="badge bg-blue-500/15 text-blue-400 border-blue-500/20">New</span>'}
                      <span class="text-[10px] text-gray-500 ml-auto">${Se(i.created_at)}</span>
                    </div>
                    <p class="text-[11px] text-blue-400 mb-1">${d(i.email||"â€”")}</p>
                    <p class="text-xs text-gray-300">${d(i.message||i.body||"â€”")}</p>
                    ${i.subject?`<p class="text-[11px] text-gray-500 mt-1">Subject: ${d(i.subject)}</p>`:""}
                  </div>
                  <div class="flex gap-1 shrink-0">
                    <button onclick="markMsgRead('${i.id}')" class="btn-press p-1.5 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition" title="Mark Read"><i data-lucide="check" class="w-4 h-4"></i></button>
                  </div>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.markMsgRead=async function(e){await y.from("support_messages").update({is_read:!0}).eq("id",e),b("Marked as read"),Ii()};async function Nt(){const e=document.getElementById("content");try{const{data:t}=await y.from("coupons").select("*").order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
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
                    <td class="hidden sm:table-cell"><span class="text-xs text-gray-400">${i.min_amount?"$"+i.min_amount:"â€”"}</span></td>
                    <td>${K(i.is_active?"active":"inactive")}</td>
                    <td class="hidden md:table-cell"><span class="text-xs text-gray-500">${se(i.expires_at)}</span></td>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.showAddCouponModal=function(){D(`
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
    </div>`)};window.saveCoupon=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={code:a.code.toUpperCase(),discount_type:a.discount_type,discount_value:parseFloat(a.discount_value),min_amount:a.min_amount?parseFloat(a.min_amount):null,usage_limit:a.usage_limit?parseInt(a.usage_limit):null,expires_at:a.expires_at||null,is_active:!0},{error:n}=await y.from("coupons").insert(i);if(n){b(n.message,"error");return}b("Coupon created!"),oe(),Nt()};window.toggleCoupon=async function(e,t){await y.from("coupons").update({is_active:t}).eq("id",e),b(t?"Coupon activated":"Coupon deactivated"),Nt()};window.deleteCoupon=async function(e){confirm("Delete this coupon?")&&(await y.from("coupons").delete().eq("id",e),b("Coupon deleted"),Nt())};async function Lr(){const e=document.getElementById("content");try{const{data:t}=await y.from("notification_log").select("*").order("created_at",{ascending:!1}).limit(100),a=t||[];e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Notifications</h2>
        <div class="space-y-2">
          ${a.length===0?Ie("bell","No Notifications","System notifications will appear here."):a.map(i=>`
              <div class="glass-soft border border-blue-500/10 rounded-xl p-3.5 flex items-start gap-3">
                <div class="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <i data-lucide="bell" class="w-4 h-4 text-blue-400"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-0.5">
                    <span class="text-xs font-bold text-white">${d(i.subject||i.event_type||"Notification")}</span>
                    ${K(i.status)}
                    <span class="text-[10px] text-gray-500 ml-auto">${Se(i.created_at)}</span>
                  </div>
                  <p class="text-[11px] text-gray-400">${d(i.recipient||i.order_number)}</p>
                </div>
              </div>`).join("")}
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}const Ti=["Featured","Sponsored","Featured Collection","Discover","Promotion"],Mr=[{id:"real-estate",name:"Real Estate & Properties"},{id:"marketplace",name:"Marketplace Showroom"}];let ct=null;function Nr(e){const t={Featured:"bg-blue-500/10 text-blue-300 border-blue-500/30",Sponsored:"bg-violet-500/10 text-violet-300 border-violet-500/30","Featured Collection":"bg-amber-500/10 text-amber-300 border-amber-500/30",Discover:"bg-emerald-500/10 text-emerald-300 border-emerald-500/30",Promotion:"bg-blue-500/10 text-blue-300 border-blue-500/30"};return`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${t[e]||t.Featured}">${d(e)}</span>`}function Br(e){return!e||!e.link_type||e.link_type==="none"?'<span class="text-[10px] text-gray-500">No link</span>':e.link_type==="product"?`<span class="text-[10px] text-blue-300"><i data-lucide="package" class="w-3 h-3 inline mr-1"></i>Product Â· ${d(e.link_target||"")}</span>`:e.link_type==="category"?`<span class="text-[10px] text-emerald-300"><i data-lucide="tag" class="w-3 h-3 inline mr-1"></i>Category Â· ${d(e.link_target||"")}</span>`:`<span class="text-[10px] text-amber-300"><i data-lucide="layout-grid" class="w-3 h-3 inline mr-1"></i>Section Â· ${d(e.link_target||"")}</span>`}function Rr(e){return e.video_url?`<video src="${d(e.video_url)}" ${e.poster_url?`poster="${d(e.poster_url)}"`:""} class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" muted preload="metadata"></video>`:e.image_url?`<img src="${d(e.image_url)}" class="w-24 h-14 rounded-lg object-cover border border-blue-500/20 shrink-0" onerror="this.remove()">`:'<div class="w-24 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0"><i data-lucide="megaphone" class="w-6 h-6 text-blue-400"></i></div>'}async function Li(){if(ct)return ct;const e=[],t=new Set,a=[],i=r=>{if(!r||!r.property_id)return;e.push({id:r.property_id,title:r.title||r.property_id});const s=r.category||"";s&&!t.has(s)&&(t.add(s),a.push(s))};try{re.forEach(i)}catch{}try{const{data:r,error:s}=await y.from("showroom_listings").select("property_id,title,category").order("created_at",{ascending:!1});!s&&r&&r.forEach(i)}catch{}return["Women","Men","Kids","Home","Sports","Jewellery","Electronics","Cars","Motorcycles","Phones","Computers","Furniture","Beauty","Fashion","Real Estate","Bicycles","Trucks","Land","Kitchen","Food","Pets","Books","Toys","Services"].forEach(r=>{t.has(r)||(t.add(r),a.push(r))}),ct={products:e,categories:a,sections:Mr},ct}async function Fr(e){try{const{data:{session:t}}=await y.auth.getSession();if(!t)return b("Sign in to upload media","error"),null;const a=(e.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),i=/^(mp4|webm|mov|m4v)$/.test(a)||e.type.startsWith("video/"),n=`ads/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${a}`,{error:r}=await y.storage.from("advertisements").upload(n,e,{contentType:e.type,upsert:!1});if(r)return b("Upload failed: "+r.message,"error"),null;const{data:s}=y.storage.from("advertisements").getPublicUrl(n);return{url:s.publicUrl,isVideo:i}}catch{return b("Upload failed","error"),null}}function ht(e,t){const a=document.getElementById("ad-media-preview");if(!a)return;const i=document.getElementById("ad-hidden-video"),n=document.getElementById("ad-hidden-image");i&&(i.value=t?e:""),n&&(n.value=t?"":e),a.innerHTML=t?`<video src="${d(e)}" class="w-full h-40 object-cover rounded-xl" controls muted playsinline></video>`:`<img src="${d(e)}" class="w-full h-40 object-cover rounded-xl">`,window.lucide&&lucide.createIcons()}window.onAdMediaPicked=async function(e){const t=e.files&&e.files[0];if(!t)return;if(!(t.type.startsWith("image/")||t.type.startsWith("video/"))){b("Choose an image or video file","error");return}const i=await Fr(t);if(!i){e.value="";return}ht(i.url,i.isVideo);const n=document.getElementById("ad-media-url");n&&(n.value=i.url)};window.onAdMediaUrl=function(e){const t=(e.value||"").trim();if(!t)return;const a=/\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(t);ht(t,a)};function xa(e,t,a){const i=document.getElementById("ad-link-target-wrap");if(!i)return;if(!t||t==="none"){i.innerHTML='<p class="text-[10px] text-gray-500">This ad is informational and will not be clickable.</p>';return}let n="";t==="product"?n='<option value="">Select a productâ€¦</option>'+e.products.map(r=>`<option value="${d(r.id)}" ${String(a)===String(r.id)?"selected":""}>${d(r.id)} â€” ${d((r.title||"").slice(0,60))}</option>`).join(""):t==="category"?n='<option value="">Select a categoryâ€¦</option>'+e.categories.map(r=>`<option value="${d(r)}" ${a===r?"selected":""}>${d(r)}</option>`).join(""):t==="section"&&(n='<option value="">Select a sectionâ€¦</option>'+e.sections.map(r=>`<option value="${d(r.id)}" ${a===r.id?"selected":""}>${d(r.name)}</option>`).join("")),i.innerHTML=`<label class="lbl">Target</label><select class="input-field" name="link_target">${n}</select>`}function Mi(e){return`
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
                ${Ti.map(t=>`<option value="${t}" ${e&&e.ad_label===t?"selected":""}>${t}</option>`).join("")}
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
    </div>`}window.onAdLinkTypeChange=function(){const e=window._adLinkCache||{products:[],categories:[],sections:[]},t=document.querySelector('#ad-form select[name="link_type"]'),a=t?t.value:"none";xa(e,a,"")};window.showAddAdModal=async function(){const e=await Li();window._adLinkCache=e,D(Mi(null)),xa(e,"none","")};window.showEditAdModal=async function(e){const t=await Li();window._adLinkCache=t;const{data:a}=await y.from("promotions").select("*").eq("id",e).maybeSingle();if(!a){b("Ad not found","error");return}D(Mi(a)),a.image_url?ht(a.image_url,!1):a.video_url&&ht(a.video_url,!0),xa(t,a.link_type||"none",a.link_target||"")};window.saveAd=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=a.id||"",n={title:a.title,description:a.description||"",ad_label:Ti.includes(a.ad_label)?a.ad_label:"Featured",image_url:a.image_url||null,video_url:a.video_url||null,link_type:["none","product","category","section"].includes(a.link_type)?a.link_type:"none",link_target:a.link_target||null,start_date:a.start_date?new Date(a.start_date+"T00:00:00").toISOString():null,end_date:a.end_date?new Date(a.end_date+"T23:59:59").toISOString():null,is_active:a.is_active==="on",promo_type:"banner"};if(!n.image_url&&!n.video_url){b("Add an image or video for the ad","error");return}const r=e.target.querySelector('button[type="submit"]');r&&(r.disabled=!0);try{if(i){const{error:s}=await y.from("promotions").update(n).eq("id",i);if(s)throw s;b("Ad updated!")}else{const{error:s}=await y.from("promotions").insert(n);if(s)throw s;b("Ad created!")}}catch(s){b(s.message||"Save failed","error"),r&&(r.disabled=!1);return}oe(),ze()};window.togglePromo=async function(e,t){const{error:a}=await y.from("promotions").update({is_active:t}).eq("id",e);if(a){b(a.message,"error");return}b(t?"Ad activated":"Ad deactivated"),ze()};window.moveAd=async function(e,t){try{const{data:a,error:i}=await y.from("promotions").select("id,sort_order").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1});if(i)throw i;const n=a||[],r=n.findIndex(c=>c.id===e),s=r+t;if(r<0||s<0||s>=n.length){b("Already at the edge","info");return}const l=n[r],o=n[s];await y.from("promotions").update({sort_order:o.sort_order}).eq("id",l.id),await y.from("promotions").update({sort_order:l.sort_order}).eq("id",o.id),b("Order updated")}catch(a){b(a.message||"Reorder failed","error")}ze()};window.deletePromo=async function(e){if(confirm("Delete this ad? This cannot be undone.")){try{const{data:t}=await y.from("promotions").select("image_url,video_url,poster_url").eq("id",e).maybeSingle();if(t){const i=[t.image_url,t.video_url,t.poster_url].filter(Boolean).map(n=>{const r=/\/object\/public\/advertisements\/(.+)$/.exec(n);return r?decodeURIComponent(r[1]):null}).filter(Boolean);if(i.length)try{await y.storage.from("advertisements").remove(i)}catch{}}const{error:a}=await y.from("promotions").delete().eq("id",e);if(a)throw a;b("Ad deleted")}catch(t){b(t.message||"Delete failed","error")}ze()}};async function ze(){const e=document.getElementById("content");try{const{data:t}=await y.from("promotions").select("*").order("sort_order",{ascending:!0}).order("created_at",{ascending:!1}),a=t||[];e.innerHTML=`
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
          ${a.length===0?Ie("megaphone","No Ads","Create your first showcase ad â€” add a title, image or video, label, and optional product link.",'<button onclick="showAddAdModal()" class="btn-press flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"><i data-lucide="plus" class="w-4 h-4"></i> Add Advertisement</button>'):a.map((i,n)=>`
              <div class="glass-soft border border-blue-500/15 rounded-xl p-4 flex items-center gap-4">
                ${Rr(i)}
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap">
                    <p class="text-sm font-black text-white truncate">${d(i.title||i.name)}</p>
                    ${Nr(i.ad_label||"Featured")}
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${d(i.description||"")}</p>
                  <div class="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${i.is_active?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":"bg-gray-500/10 text-gray-400 border-gray-500/20"}">${i.is_active?"Active":"Inactive"}</span>
                    ${Br(i)}
                    <span class="text-[10px] text-gray-500">${se(i.start_date)}${i.start_date?" â†’ ":""}${se(i.end_date)}</span>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.renderAds=ze;const Bt=[{id:"gemini",name:"Google Gemini",tag:"FREE",color:"blue",icon:"sparkles",kf:"gemini_key",ph:"AIzaSyâ€¦",signup:"https://aistudio.google.com/apikey",models:["gemini-3-flash-preview","gemini-3.1-flash-lite-preview"],mf:"gemini_model",dm:"gemini-3-flash-preview",desc:"Google's best free AI. Great for coding, writing apps & websites.",free_tier:"15 req/min Â· 1M tokens/day â€” Free forever"}],de={border:{blue:"border-blue-500/50"},bg:{blue:"bg-blue-500/8"},text:{blue:"text-blue-400"},badge:{blue:"bg-blue-500/15 text-blue-300"}};async function Ni(){const e=document.getElementById("content");try{let t=function(r){const s=n===r.id,l=i[r.kf],o=i[r.mf]||r.dm;return`
        <div class="glass-soft border ${s?de.border[r.color]+" "+de.bg[r.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard" id="apc-${r.id}">
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-8 h-8 ${de.bg[r.color]} rounded-lg flex items-center justify-center shrink-0">
                <i data-lucide="${r.icon}" class="w-4 h-4 ${de.text[r.color]}"></i>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h3 class="text-xs font-black text-white">${d(r.name)}</h3>
                  <span class="text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full ${de.badge[r.color]}">${r.tag}</span>
                </div>
                <p class="text-[9px] text-emerald-400 font-bold mt-0.5 leading-tight truncate">${d(r.free_tier)}</p>
              </div>
            </div>
            <label class="flex items-center gap-1 cursor-pointer shrink-0">
              <input type="radio" name="active_provider" value="${r.id}" ${s?"checked":""} class="accent-blue-500" onchange="highlightAI('${r.id}')">
              <span class="text-[9px] font-bold ${s?de.text[r.color]:"text-gray-600"}">USE</span>
            </label>
          </div>
          <p class="text-[11px] text-gray-400 leading-relaxed">${d(r.desc)}</p>
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="lbl mb-0">API Key</label>
              <a href="${r.signup}" target="_blank" rel="noopener" class="text-[10px] font-bold ${de.text[r.color]} hover:underline flex items-center gap-0.5">
                <i data-lucide="external-link" class="w-3 h-3"></i>Get Free Key
              </a>
            </div>
            <div class="relative">
              <input type="password" class="input-field pr-16 text-xs" name="${r.kf}"
                placeholder="${l?"â€¢â€¢â€¢â€¢"+l.slice(-4):r.ph}">
              ${l?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">âœ“ Saved</span>':'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>'}
            </div>
          </div>
          <div>
            <label class="lbl">Model</label>
            <select class="input-field text-xs" name="${r.mf}">
              ${r.models.map(c=>`<option value="${c}" ${o===c?"selected":""}>${c}</option>`).join("")}
            </select>
          </div>
        </div>`};const{data:a}=await y.from("ai_settings").select("*").limit(1).maybeSingle(),i=a||{},n=i.active_provider||"gemini";e.innerHTML=`
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
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">${Bt.map(t).join("")}</div>
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
                <span class="toggle-switch"><input type="checkbox" name="customer_ai_enabled" ${i.customer_ai_enabled!==!1?"checked":""}><span class="toggle-slider"></span></span>
              </label>
            </div>
            <p class="text-[11px] text-gray-400 leading-relaxed">This is the <b class="text-white">customer support chat assistant</b> (the floating "Contact Us" bubble). It talks with shoppers in their own language with a local human name, and it never gives up: it automatically stacks <b class="text-emerald-300">Google Gemini → Groq → OpenRouter → free keyless AI</b>, each with its own free quota, so customers ALWAYS get a real answer instead of a "rate limit" message.</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <label class="lbl">Google Gemini Key (chat)</label>
                <div class="relative">
                  <input type="password" class="input-field pr-16 text-xs" name="gemini_key"
                    placeholder="${i.gemini_key||i.gemini_api_key?"••••"+String(i.gemini_key||i.gemini_api_key).slice(-4):"AIzaSy… (shared Gemini key)"}">
                  ${i.gemini_key||i.gemini_api_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>'}
                </div>
              </div>
              <div>
                <label class="lbl">Chat Model (optional)</label>
                <select class="input-field text-xs" name="customer_model_override">
                  <option value="">Auto (recommended)</option>
                  ${["gemini-3-flash-preview","gemini-2.5-flash","gemini-2.5-flash-lite","gemini-2.0-flash"].map(r=>`<option value="${r}" ${(i.customer_model_override||"")===r?"selected":""}>${r}</option>`).join("")}
                </select>
              </div>
            </div>
            <div class="mt-3">
              <label class="lbl">OpenRouter Key (optional, free fallback)</label>
              <div class="relative">
                <input type="password" class="input-field pr-16 text-xs" name="openrouter_key"
                  placeholder="${i.openrouter_key?"••••"+String(i.openrouter_key).slice(-4):"sk-or-v1-… (NEW)"}">
                ${i.openrouter_key?'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-emerald-500">✓ Saved</span>':'<span class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] text-gray-600">Empty</span>'}
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
                  placeholder="${i.groq_key?"••••"+String(i.groq_key).slice(-4):"gsk_…"}">
                ${i.groq_key?'<p class="text-[9px] font-bold text-emerald-500 mt-1">✓ Saved</p>':""}
              </div>
              <div>
                <label class="lbl">Vision Model</label>
                <select class="input-field text-xs" name="groq_vision_model">
                  ${["meta-llama/llama-4-scout-17b-16e-instruct","qwen/qwen3.6-27b"].map(r=>`<option value="${r}" ${(i.groq_vision_model||"meta-llama/llama-4-scout-17b-16e-instruct")===r?"selected":""}>${r}</option>`).join("")}
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
            ${[{key:"product_ai_enabled",label:"AI Product Creation",desc:"AI auto-fills product descriptions",val:i.product_ai_enabled!==!1},{key:"ai_code_assist",label:"AI Code Assistant",desc:"AI helps build and edit your website code",val:i.ai_code_assist!==!1},{key:"ai_moderation",label:"AI Content Moderation",desc:"Auto-approve/reject customer reviews using AI",val:i.ai_moderation}].map(r=>`
              <div class="flex items-center justify-between p-3 glass-soft border border-blue-500/10 rounded-xl">
                <div><p class="text-xs font-bold text-white">${r.label}</p><p class="text-[11px] text-gray-500">${r.desc}</p></div>
                <label class="toggle-switch"><input type="checkbox" name="${r.key}" ${r.val?"checked":""}><span class="toggle-slider"></span></label>
              </div>`).join("")}
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl text-sm transition">
            ðŸ’¾ Save AI Settings
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.highlightAI=function(e){Bt.forEach(t=>{const a=document.getElementById("apc-"+t.id);if(!a)return;const i=t.id===e;a.className=`glass-soft border ${i?de.border[t.color]+" "+de.bg[t.color]:"border-blue-500/10"} rounded-2xl p-4 space-y-3 ai-pcard`;const n=a.querySelector("input[type=radio] + span");n&&(n.className=`text-[9px] font-bold ${i?de.text[t.color]:"text-gray-600"}`)})};window.saveAiSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i={active_provider:a.active_provider||"gemini",product_ai_enabled:a.product_ai_enabled==="on",ai_code_assist:a.ai_code_assist==="on",ai_moderation:a.ai_moderation==="on"};Bt.forEach(s=>{a[s.mf]&&(i[s.mf]=a[s.mf]);const l=(a[s.kf]||"").trim();l&&!l.startsWith("â€¢â€¢â€¢â€¢")&&l!==""&&(i[s.kf]=l)}),i.gemini_key&&(i.gemini_api_key=i.gemini_key),a.groq_vision_model&&(i.groq_vision_model=a.groq_vision_model);const n=(a.groq_key||"").trim();n&&!/^[•\u2022]{4}/.test(n)&&(i.groq_key=n),i.customer_ai_enabled=a.customer_ai_enabled==="on",a.customer_model_override!==void 0&&(i.customer_model_override=a.customer_model_override.trim());const r=(a.openrouter_key||"").trim();r&&!/^[•\u2022]{4}/.test(r)&&(i.openrouter_key=r);try{const{data:s}=await y.from("ai_settings").select("id").limit(1).maybeSingle();let l;if(s?.id?{error:l}=await y.from("ai_settings").update(i).eq("id",s.id):{error:l}=await y.from("ai_settings").insert(i),l){b("Save failed: "+l.message,"error"),console.error("[AI Save]",l);return}await F.reload(),b("âœ… AI settings saved!","success"),setTimeout(()=>Ni(),600)}catch(s){b("Unexpected error: "+s.message,"error"),console.error("[AI Save]",s)}};const F={_cfg:null,async reload(){const{data:e,error:t}=await y.from("ai_settings").select("*").limit(1).maybeSingle();if(t){console.warn("[aiClient] Could not load settings:",t.message),this._cfg={};return}const a=e||{};!a.gemini_key&&a.gemini_api_key&&(a.gemini_key=a.gemini_api_key),this._cfg=a},async getConfig(){return this._cfg||await this.reload(),this._cfg},async freeChat(e,{maxTokens:t=2e3,timeoutMs:a=6e4}={}){const i=await fetch("https://text.pollinations.ai/openai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"openai",messages:e.map(s=>({role:s.role==="assistant"?"assistant":s.role==="system"?"system":"user",content:String(s.content||"").slice(0,12e3)})),max_tokens:t}),signal:AbortSignal.timeout(a)});if(!i.ok)throw new Error(`Free AI provider error (${i.status}).`);const n=await i.json(),r=String(n?.choices?.[0]?.message?.content||"").trim();if(!r)throw new Error("Free AI provider returned an empty reply.");return{text:r,provider:"Free AI (Pollinations)",model:String(n?.model||"openai-fast")}},async chat(e,{maxTokens:t=2e3}={}){const a=await this.getConfig();if(!String(a.gemini_key||"").trim())return this.freeChat(e,{maxTokens:t});const n=e[e.length-1],r={action:"chat",message:String(n?.content||"").trim(),history:e.slice(0,-1).map(s=>({role:s.role,content:String(s.content||"")})),provider_override:"gemini",max_tokens:t};try{const s=await this._callEdge(r);if(s&&s.response)return{text:s.response,provider:"Google Gemini",model:s.model||a.gemini_model};throw new Error(String(s?.error||"Gemini is unavailable."))}catch(s){try{const l=await this.freeChat(e,{maxTokens:t});return l.note="gemini-unavailable",l}catch{throw s}}},async prompt(e,t={}){return this.chat([{role:"user",content:e}],t)},async getStatus(){const e=await this.getConfig();return Bt.map(t=>({id:t.id,name:t.name,color:t.color,hasKey:!!e[t.kf]?.trim(),isActive:e.active_provider===t.id,isCoolingDown:!1,remainingSec:0}))},async analyzeImages(e,t={}){const a=`You are the AI listing expert for the Weverse Online Shop marketplace. Look carefully at the uploaded product photo(s) and identify exactly what the product is â€” the REAL brand, model and year that actually appear in the photos, never a guessed one.

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
- Respond with valid JSON only.`,i=await this._collectScanImages((e||[]).slice(0,t.maxImages||3));if(!i.length)throw new Error("Could not read the uploaded images.");try{const n=await this._callEdge({action:"vision",images:i,prompt:a,max_tokens:4096});if(n&&n.success&&n.text){const r=Da(n.text);if(r)return n.provider&&this._noteProvider(n.provider),{...r,_aiProvider:n.provider==="groq"?"Groq vision (backup)":"Gemini vision",_aiModel:n.model};throw new Error("The AI returned no valid analysis for these images.")}throw new Error(n&&n.error||"Vision service unavailable.")}catch(n){this._noteIssue("identify",`server vision: ${n&&n.message||n}`)}return null},async _runVisionPrompt(e,t,{maxImages:a=5,maxTokens:i=4096,mergeResults:n=null,onProgress:r=()=>{},stageLabel:s="vision"}={}){const l=Math.max(1,Number(a)||5),o=await this._collectScanImages(t,{onProgress:r});if(!o.length)throw new Error("Could not read the uploaded images.");const c=async m=>this._runSingleVisionCall(e,m,{maxTokens:i,stageLabel:s});let u;if(o.length<=l)u=await c(o);else{const m=[];for(let _=0;_<o.length;_+=l)m.push(o.slice(_,_+l));r(0,m.length);const h=3,f=new Array(m.length).fill(null);let p=0;const g=async()=>{for(;p<m.length;){const _=p++;f[_]=await c(m[_]).catch(()=>null),r(Math.min(p,m.length),m.length)}};await Promise.all(Array.from({length:Math.min(h,m.length)},g));const x=[];if(f.forEach((_,v)=>{_&&x.push({result:_,startIndex:v*l})}),!x.length)return null;u=n?n(x,{batchSize:l,totalImages:o.length}):x.reduce((_,v)=>this._mergeJsonResults(_,v.result),null)}return u||null},async _runSingleVisionCall(e,t,{maxTokens:a=4096,stageLabel:i="vision"}={}){if(!await this._waitForQuotaWindow(7e4,i))return null;try{const n=await this._paceGeminiCall(()=>this._callEdge({action:"vision",images:t,prompt:e,max_tokens:a},45e3));if(n&&n.success&&n.text){const r=Da(n.text);if(r)return n.provider&&this._noteProvider(n.provider),{...r,_aiProvider:n.provider==="groq"?"Groq vision (backup)":"Gemini vision",_aiModel:n.model};throw new Error("The AI returned no valid analysis for these images.")}throw new Error(n&&n.error||"Vision service unavailable.")}catch(n){this._noteIssue(i,`vision: ${n&&n.message||n}`)}return null},_pdfPageCache:new Map,_videoFrameCache:new Map,async _collectScanImages(e,{onProgress:t=()=>{}}={}){const a=(Array.isArray(e)?e:[e]).map(r=>String(r||"")).filter(Boolean);if(!a.length)return[];const i=await Promise.all(a.map(async r=>{try{if(/^data:application\/pdf/.test(r)||nt(r)){let o=this._pdfPageCache.get(r)||null;return o||(o=await yn(r,{maxDim:1300}).catch(()=>[]),o.length&&this._pdfPageCache.set(r,o)),o}let s=null;if(Xi(r))s=r;else if(r.startsWith("blob:"))try{const o=await fetch(r,{signal:AbortSignal.timeout(15e3)}).then(c=>c.blob());o&&o.type&&o.type.startsWith("video/")&&(s=o)}catch{}if(s){let o=this._videoFrameCache.get(r)||null;return o||(o=await Zi(s,{maxFrames:12,maxDim:1024}).catch(()=>[]),o.length&&this._videoFrameCache.set(r,o)),o}const l=await this._fetchImageAsDataUrl(r,1024);return l?[l]:[]}catch{return[]}})),n=[];for(const r of i)n.push(...r);return n},_mergeJsonResults(e,t){if(!e)return t?{...t}:null;if(!t)return e;const a={...e};for(const[i,n]of Object.entries(t))if(!i.startsWith("_")&&!(n==null||typeof n=="string"&&!n.trim())){if(!(i in a)||a[i]==null||a[i]===""){a[i]=n;continue}if(Array.isArray(a[i])||Array.isArray(n)){const r=[...Array.isArray(a[i])?a[i]:[a[i]],...Array.isArray(n)?n:[n]].map(s=>typeof s=="string"?s.trim():s).filter(s=>s!=null&&s!=="");a[i]=[...new Set(r)]}else typeof a[i]=="object"&&typeof n=="object"?a[i]={...a[i],...n}:(String(a[i]).trim(),String(n).trim())}return a},async identifyProduct(e,t={}){const a=`STAGE 1 â€” IDENTIFY THE EXACT PRODUCT.
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
{ "identified": true, "listing_type": "product"|"vehicle"|"property", "brand": string|null, "model": string|null, "year": string|null, "year_estimated": boolean, "body_type": string|null, "color": string|null, "condition": string|null, "category": string|null, "subcategory": string|null, "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": string|null, "year_built": number|null, "year_renovated": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "confidence": "high"|"medium"|"low", "alternate_categories": string[], "detected_name": string }`;return this._runVisionPrompt(a,e,{maxImages:t.maxImages||5,stageLabel:"identify"})},async detectProducts(e,t={}){const a=`STAGE 0 â€” DETECT EVERY DISTINCT PRODUCT.
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
- subcategory, property_type, bedrooms, bathrooms, half_bathrooms, building_size, land_size, floors (number|null), garage (string|null), parking_spaces (number|null), furnished ("Furnished"/"Unfurnished"/null), year_built (number|null â€” only if visible), area (neighborhood/district), neighborhood (string|null), living_areas (string|null - rooms/areas seen on a visible floor plan), kitchens (number|null), balconies (number|null - only clearly visible), garden (string|null - e.g. "Private garden", "None"), pool (string|null - e.g. "Private pool", "Community pool", "None"), security (string|null - only visibly present systems), utilities (string|null - only visibly stated), construction_type (string|null - only visibly apparent), construction_status (string|null - e.g. "Completed", "Under construction"), ownership_type (string|null - only printed on a visible sign/paper), contact_name (string|null - only from visible contact info), contact_phone (string|null), contact_email (string|null), address (street + number or landmark when visible/reliably known), zip_code (string|null â€” only if visible), landmarks (string[]|null â€” only well-known landmarks visible in or clearly indicated by the photo), town, city, state, country, latitude (number|null), longitude (number|null), listing_status ("sale"/"rent"/null) for properties. LOCATION RULES: only use location genuinely visible in the photo â€” never invent an address or coordinates; return null when unknown.
- confidence: "high" | "medium" | "low" for each product.
- detected_name: a short plain label for each product, e.g. "black leather handbag", "silver wristwatch", "white Nike sneakers", "modern 3-bedroom villa".

Return ONE valid JSON object (no markdown):
{ "identified": true, "products": [ { "image_indices": number[], "listing_type": "product"|"vehicle"|"property", "brand": string|null, "model": string|null, "year": string|null, "year_estimated": boolean, "body_type": string|null, "color": string|null, "condition": string|null, "category": string|null, "subcategory": string|null, "property_type": string|null, "bedrooms": number|null, "bathrooms": number|null, "half_bathrooms": number|null, "building_size": string|null, "land_size": string|null, "floors": number|null, "garage": string|null, "parking_spaces": number|null, "furnished": "Furnished"|"Unfurnished"|null, "year_built": number|null, "area": string|null, "address": string|null, "zip_code": string|null, "landmarks": string[]|null, "town": string|null, "city": string|null, "state": string|null, "country": string|null, "latitude": number|null, "longitude": number|null, "listing_status": "sale"|"rent"|null, "confidence": "high"|"medium"|"low", "detected_name": string } ] }`;return this._runVisionPrompt(a,e,{maxImages:t.maxImages||5,stageLabel:"detect",mergeResults:i=>{const n=[];for(const{result:r,startIndex:s}of i)for(const l of r&&Array.isArray(r.products)?r.products:[]){const o=Array.isArray(l.image_indices)?[...new Set(l.image_indices.map(c=>parseInt(c,10)).filter(Number.isFinite).map(c=>c+s))]:[s];n.push({...l,image_indices:o})}return{identified:n.length>0,products:n}}})},async completeProductSpecs(e,t,a={}){const i=t||{},n=`STAGE 2 â€” COMPLETE THE STANDARD SPECIFICATIONS.
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
}`;return this._runVisionPrompt(n,e,{maxImages:a.maxImages||5,stageLabel:"specs"})},async estimateProductPrice(e,t,a={},i={}){const n=t||{},r=a||{},s=`STAGE 3 â€” ESTIMATE THE REAL MARKET PRICE AND A PROMOTIONAL DISCOUNT PRICE.
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
- engine: ${String(r.engine||"unknown")}
- transmission: ${String(r.transmission||"unknown")}
- fuel_type: ${String(r.fuel_type||"unknown")}
- drive_type: ${String(r.drive_type||"unknown")}
- horsepower: ${String(r.horsepower||"unknown")}
- mileage: ${String(r.mileage||"unknown")}
- storage/ram: ${String(r.storage||"")}${r.ram?" / "+r.ram:""}
- property: ${String(n.property_type||r.property_type||"")}${r.bedrooms?` ${r.bedrooms} beds`:""}${r.half_bathrooms?` / ${r.half_bathrooms} half baths`:""}${r.bathrooms?` / ${r.bathrooms} baths`:""}${r.building_size?` / ${r.building_size}`:""}${r.land_size?` / ${r.land_size} land`:""}${r.year_built?` / built ${r.year_built}`:""}${r.condition?` / ${r.condition}`:""}${r.city?` / ${r.city}`:""}

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
}`;return this._runVisionPrompt(s,e,{maxImages:i.maxImages||5,stageLabel:"price"})},async completeSpecsAndPrice(e,t,a={}){const i=t||{},n=`STAGES 2+3 â€” COMPLETE THE SPECIFICATIONS AND ESTIMATE THE PRICE IN ONE STEP.
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

COMPLETENESS AND REAL INFERENCE (READ THIS BEFORE ANYTHING ELSE):
The marketplace form must never end up mostly empty. For EVERY form field that applies to this item, output a REAL value using this order:
 1. Read it directly from the photo(s) when visible: badges, labels, nameplates, the odometer or cluster, wheels, tires, interior material, body lines, signage, room count from windows or a visible floor plan.
 2. When a value is not literally visible, use the REAL standard factory configuration most commonly sold for that EXACT identified model (engine size and layout, fuel type, transmission, drive layout, seats, doors, dimensions, horsepower, and standard safety/navigation equipment). Example: a family SUV is typically a 2.0-2.5L gasoline or hybrid, automatic, AWD, 5 seats; a pickup is typically an automatic 4WD with 5 seats; a compact hatchback is a 1.0-1.6L gasoline, manual or automatic, FWD, 5 seats.
 3. For properties, judge rooms, furniture, condition, floors, finishes and systems from the photos and from the property type plus building size (e.g. a 2,500 sqft single-family home is typically 3-4 bedrooms / 2-3 bathrooms / 2 floors). Judge condition ("Good" is the honest default when the state is unclear).
Any value you inferred rather than directly saw MUST ALSO be listed in the "estimated" array.
NEVER write "Not specified", "unknown", "N/A", "none", or leave an applicable field null just because its value is not clearly visible. Give your best REAL, defensible value and list it in "estimated" instead.
ONLY these fields may be null AND listed in "missing_fields": a private seller's contact details (seller_name, seller_phone, seller_email, contact_name, contact_phone, contact_email), a VIN/serial that is not legible in any photo, a precise street address, ZIP/postal, city/state/country, GPS coordinates or listing location that is nowhere visible, document URLs, verification evidence or dates, exact odometer mileage that is not visible, and stock_quantity (except 1 for unique items). Never put engine, fuel type, transmission, drive type, seats, doors, body type, condition, room counts or amenity fields in "missing_fields": those are always covered by inference rule 2 or 3 above.

JOB A â€” COMPLETE THE STANDARD SPECIFICATIONS using reliable data for that exact brand + model:
- Vehicles: make, model, body_type, trim/edition, model_year, color, mileage (read the odometer/trip computer when visible; a brand-new unused vehicle gets "0 mi"; only when truly not visible leave null in missing_fields), engine (e.g. "2.0L Turbocharged I4" or "4.5L V8 Turbo Diesel"), horsepower, transmission, fuel_type, drive_type, fuel_economy, towing_capacity, seating_capacity, doors, wheels_tires (size/type/condition, e.g. "20-inch alloys, 265/65 R18, 2 new tires"), dimensions (L x W x H), cargo_capacity, safety_features, driver_assistance, technology, interior, warranty, previous_owners, registration_status, inspection_status, service_history, accident_history, ownership_history, location, seller_name, seller_phone, seller_email.
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
}${a.fieldsSchema||""}${a.fieldsSchema?`
FORM-FIELD COMPLETENESS RULE: the form-field list above is binding. EVERY key in that list that is not already covered by the JSON keys above MUST also appear as a top-level key in your returned JSON with its extracted value (or null when genuinely not present anywhere in the document/photos â€” never guess). Use each field's exact quoted key. Match select options exactly.`:""}`,r=await this._runVisionPrompt(n,e,{maxImages:a.maxImages||5,stageLabel:"specs-price"});if(!r)return null;const{price:s,...l}=r,o=s&&typeof s=="object"?s:r.estimated_price!=null?{currency:r.currency||"USD",estimated_price:r.estimated_price,suggested_discount_price:r.suggested_discount_price??null,confidence:r.confidence??null,reason:r.reason??""}:null;if(o&&Number.isFinite(Number(o.estimated_price))){const c=Number(o.estimated_price);c<=0&&(o.estimated_price=B),o.estimated_price=Math.max(B,Math.min(O,c))}return{specs:Object.keys(l).length?l:null,price:o}},async verifyExtraction(e,t,a,i=[],n={}){if(!await this._waitForQuotaWindow(2e4,"verify"))return null;const r=t||{},s=(i||[]).map(c=>`- "${c.key}" (${c.label})`).join(`
`),l=Object.entries(a||{}).filter(([,c])=>c!=null&&String(Array.isArray(c)?c.join(", "):c).trim()!=="").map(([c,u])=>`"${c}": ${JSON.stringify(Array.isArray(u)?u.join(", "):String(u).slice(0,160))}`).join(`,
`),o=`VERIFICATION PASS â€” CHECK EVERY EXTRACTED VALUE AGAINST THE DOCUMENT.
A first extraction pass produced the values below from these same photo(s)/document page(s). Your job is to RE-READ every page carefully and audit EACH value.

IDENTIFIED ITEM: ${[r.year,r.brand,r.model].filter(Boolean).join(" ")||r.detected_name||"unknown"}

CURRENT EXTRACTED VALUES:
${l||"(none yet)"}

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
{ "corrections": { "<key>": <corrected or newly found value â€” exact JSON type for that field> }, "still_missing": ["key"], "wrong_mapping": [["from_key","to_key"]], "notes": ["short factual observations, e.g. 'VIN appears on page 2 footer'"] }`;try{return await this._runVisionPrompt(o,e,{maxImages:n.maxImages||5,maxTokens:2500,stageLabel:"verify",mergeResults:u=>{const m={corrections:{},still_missing:[],wrong_mapping:[],notes:[]};for(const{result:h}of u){const f=h||{};f.corrections&&typeof f.corrections=="object"&&Object.assign(m.corrections,f.corrections);for(const p of Array.isArray(f.still_missing)?f.still_missing:[]){const g=String(p);g&&!m.still_missing.includes(g)&&m.still_missing.push(g)}for(const p of Array.isArray(f.wrong_mapping)?f.wrong_mapping:[])Array.isArray(p)&&p.length>=2&&!m.wrong_mapping.some(g=>g[0]===p[0]&&g[1]===p[1])&&m.wrong_mapping.push([String(p[0]),String(p[1])]);for(const p of Array.isArray(f.notes)?f.notes:[]){const g=String(p||"").trim();g&&!m.notes.includes(g)&&m.notes.push(g)}}return m}})}catch{return null}},async _callEdge(e,t=6e4){let a="";try{a=(await y.auth.getSession())?.data?.session?.access_token||""}catch{}return await(await fetch(hn,{method:"POST",headers:{"Content-Type":"application/json",...a?{Authorization:`Bearer ${a}`}:{}},body:JSON.stringify(e),signal:AbortSignal.timeout(t)})).json().catch(()=>({}))},_imageCache:new Map,async _fetchImageAsDataUrl(e,t=768){const a=String(e);if(this._imageCache.has(a))return this._imageCache.get(a);const i=(async()=>{try{const r=await fetch(e,{signal:AbortSignal.timeout(15e3)}).then(s=>s.blob());return!r||!r.size?null:r.size<15e4?`data:${r.type||"image/jpeg"};base64,${await Dr(r)}`:await this._downscaleImage(r,t)}catch{return null}})();this._imageCache.set(a,i);const n=await i;return n||this._imageCache.delete(a),n},async _downscaleImage(e,t){const a=URL.createObjectURL(e);try{const i=new Image;await new Promise((o,c)=>{i.onload=o,i.onerror=c,i.src=a});const n=Math.min(1,t/Math.max(i.width,i.height)),r=Math.max(1,Math.round(i.width*n)),s=Math.max(1,Math.round(i.height*n)),l=document.createElement("canvas");return l.width=r,l.height=s,l.getContext("2d").drawImage(i,0,0,r,s),l.toDataURL("image/jpeg",.72)}finally{URL.revokeObjectURL(a)}},_visionIssues:[],_providerCounts:{},beginScanSession(){this._visionIssues=[],this._providerCounts={},this._lastGoodModel=""},_noteProvider(e){const t=String(e||"").toLowerCase().includes("groq")?"groq":"gemini";this._providerCounts[t]=(this._providerCounts[t]||0)+1,t==="groq"&&this._noteIssue("vision","Gemini did not answer — Groq vision backup handled this request")},_noteIssue(e,t){const a=String(t||"").slice(0,220);if(!a)return;const i=this._visionIssues||(this._visionIssues=[]),n=i[i.length-1];if(n&&n.stage===e&&n.reason===a){n.count=(n.count||1)+1;return}i.push({stage:e,reason:a,count:1})},sessionReport(){return{providers:Object.entries(this._providerCounts||{}).map(([e,t])=>({name:e,count:t})),issues:(this._visionIssues||[]).slice(),lastGoodModel:this._lastGoodModel||""}},async _waitForQuotaWindow(e=7e4,t="vision"){const a=(this._geminiQuotaUntil||0)-Date.now();return a<=0?!0:a>e?(this._noteIssue(t,`quota cooldown ${Math.round(a/1e3)}s > ${Math.round(e/1e3)}s budget — completed without photo reading`),!1):(await new Promise(i=>setTimeout(i,a+300)),!0)},async preflight(){const e={gemini:null,groq:null,error:null};try{const t=await this._callEdge({action:"test_providers"},25e3);t&&t.providers?(e.gemini=t.providers.gemini||null,e.groq=t.providers.groq||null):e.error=t&&t.error||"Unexpected response from the AI service."}catch(t){e.error=String(t&&t.message||t)}return e},_geminiCallChain:Promise.resolve(),_lastGeminiCallAt:0,_paceGeminiCall(e){const a=this._geminiCallChain.then(async()=>{const i=(this._lastGeminiCallAt||0)+6e3-Date.now();return i>0&&await new Promise(n=>setTimeout(n,i)),this._lastGeminiCallAt=Date.now(),e()});return this._geminiCallChain=a.then(()=>{},()=>{}),a}};function Dr(e){return new Promise(t=>{const a=new FileReader;a.onload=()=>{const i=a.result;if(typeof i=="string"){const n=i.indexOf(",");t(n>=0?i.slice(n+1):i)}else t("")},a.onerror=()=>t(""),a.readAsDataURL(e)})}window.aiClient=F;window.showAiStatusModal=async function(){const e=await F.getStatus(),t=e.filter(a=>a.hasKey);D(`
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
          ${e.map(a=>`
            <div class="flex items-center gap-3 p-2.5 glass-soft border ${a.hasKey?"border-blue-500/15":"border-gray-800"} rounded-xl opacity-${a.hasKey?"100":"40"}">
              <span class="w-2.5 h-2.5 rounded-full shrink-0 ${a.hasKey?"bg-emerald-400":"bg-gray-600"}"></span>
              <span class="text-xs font-bold text-white flex-1">${d(a.name)}</span>
              ${a.isActive?'<span class="text-[9px] font-black text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-full">ACTIVE</span>':""}
              ${a.hasKey?"":'<span class="text-[9px] text-gray-600">No key</span>'}
              ${a.hasKey?'<span class="text-[9px] text-emerald-400">Ready âœ“</span>':""}
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
    </div>`),window.lucide&&lucide.createIcons()};window.testAiCall=async function(){const e=document.getElementById("ai-test-input")?.value?.trim();if(!e)return;const t=document.getElementById("ai-test-output");t.classList.remove("hidden"),t.textContent="⏳ Asking Gemini…";try{const a=await F.prompt(e);t.textContent=`✓ [${a.provider} · ${a.model}]

${a.text}`}catch(a){t.textContent=`✖ ${a.message}`}};window.testScanProviders=async function(){const e=document.getElementById("provider-test-output"),t=document.getElementById("btn-test-providers");if(!e)return;e.classList.remove("hidden"),t.disabled=!0;const a=(n,r,s,l)=>`
    <div class="flex items-start gap-2 p-2 glass-soft border border-gray-800 rounded-lg">
      <span class="w-2 h-2 rounded-full shrink-0 mt-1 ${r}"></span>
      <div class="min-w-0">
        <p class="text-[11px] font-bold text-white">${n} ${d(s)}</p>
        <p class="text-[10px] ${r==="bg-emerald-400"?"text-emerald-300":r==="bg-red-500"?"text-red-400":"text-amber-300"} break-words">${d(l)}</p>
      </div>
    </div>`;e.innerHTML='<p class="text-[11px] text-gray-400">Testing providers…</p>';let i="";try{const n=await F.preflight(),r=n.gemini||{};i+=r.ok?a("✓","bg-emerald-400","Gemini (Product Scanner — primary)",`Working${r.model?" · "+r.model:""}`):a("✖","bg-red-500","Gemini (Product Scanner — primary)",r.error||n.error||"Not working");const s=n.groq||{};i+=s.ok?a("✓","bg-emerald-400","Groq (Product Scanner — backup)",`Working · ${s.model||"vision model found"}`):s.configured?a("✖","bg-red-500","Groq (Product Scanner — backup)",s.error||"Key saved but not usable"):a("—","bg-yellow-400","Groq (Product Scanner — backup)","Optional backup not configured (no key)")}catch(n){i+=a("✖","bg-red-500","Cloud providers (server test)",String(n&&n.message||n))}i+=a("✓","bg-purple-400","General AI Scanner (via edge function)","Uses Gemini primary + Groq backup through server — no local install needed."),e.innerHTML=i,t.disabled=!1,window.lucide&&lucide.createIcons()};function Da(e){if(!e)return null;let t=String(e).trim();const a=t.match(/```(?:json)?\s*([\s\S]*?)```/i);a&&(t=a[1].trim());const i=t.indexOf("{"),n=t.lastIndexOf("}");if(i===-1||n===-1||n<=i)return null;const r=t.slice(i,n+1);try{return JSON.parse(r)}catch{return null}}async function Ur(){const e=document.getElementById("content");try{const[{data:t},a]=await Promise.all([y.from("site_settings").select("*").limit(1).maybeSingle(),jr()]),i=t||{},n=new Set(Array.isArray(i.live_promo_product_ids)?i.live_promo_product_ids:[]),r=a.length?`
        <div class="mt-4">
          <label class="lbl">Which products appear in the Live Promotions (Featured Product Alerts)?</label>
          <p class="text-[11px] text-gray-400 mb-2">Leave all unchecked to let the store pick real products automatically.</p>
          <input id="promo-picker-search" type="search" class="input-field mb-2" placeholder="Search products to chooseâ€¦" oninput="filterPromoPicker(this.value)">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1.5 max-h-72 overflow-y-auto pr-1" id="promo-picker-list">
            ${a.map(s=>{const l=s.property_id||s.id,o=n.has(l)?"checked":"";return`<label class="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3 py-2 cursor-pointer hover:border-blue-400/40 transition" data-promo-search="${d((s.title||s.name||"")+" "+(s.category||""))}">
                <input type="checkbox" name="live_promo_product_ids" value="${d(l)}" ${o} class="accent-blue-500 w-4 h-4">
                <span class="min-w-0"><span class="block text-xs font-bold text-white truncate">${d(s.title||s.name||l)}</span><span class="block text-[10px] text-gray-400">${d(s.category||s.listing_type||"")} Â· ${d(l)}</span></span>
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
          ${[{section:"Site Identity",fields:[{key:"site_name",label:"Site Name",type:"text",placeholder:"Weverse Online Shop"},{key:"site_tagline",label:"Tagline / Slogan",type:"text",placeholder:"Premium International Commerce"},{key:"site_description",label:"Site Description (SEO)",type:"textarea",placeholder:"Your trusted global shopâ€¦"}]},{section:"Contact Information",fields:[{key:"contact_email",label:"Contact Email",type:"email",placeholder:"support@example.com"},{key:"contact_phone",label:"Contact Phone",type:"tel",placeholder:"+1 234 567 8900"},{key:"contact_address",label:"Business Address",type:"textarea",placeholder:"123 Main St, City, Country"},{key:"whatsapp_number",label:"WhatsApp Number",type:"tel",placeholder:"+1 234 567 8900"}]},{section:"Hero Section",fields:[{key:"hero_headline",label:"Hero Headline",type:"text",placeholder:"Weverse Online Shop"},{key:"hero_subtext",label:"Hero Subtext",type:"textarea",placeholder:"Shop premium productsâ€¦"},{key:"hero_cta_text",label:"CTA Button Text",type:"text",placeholder:"Shop Now"}]},{section:"Social Media",fields:[{key:"facebook_url",label:"Facebook URL",type:"url",placeholder:"https://facebook.com/â€¦"},{key:"instagram_url",label:"Instagram URL",type:"url",placeholder:"https://instagram.com/â€¦"},{key:"twitter_url",label:"Twitter / X URL",type:"url",placeholder:"https://twitter.com/â€¦"},{key:"youtube_url",label:"YouTube URL",type:"url",placeholder:"https://youtube.com/â€¦"},{key:"tiktok_url",label:"TikTok URL",type:"url",placeholder:"https://tiktok.com/â€¦"}]},{section:"Mobile App Promotion Banner",fields:[{key:"app_banner_enabled",label:"Show the App Promotion banner at the bottom of every page",type:"checkbox"},{key:"app_banner_headline",label:"Banner Headline",type:"text",placeholder:"Discover More with the Weverse Online Shop App"},{key:"app_play_store_url",label:"Google Play Store URL (real app listing â€” leave empty while unpublished)",type:"url",placeholder:"https://play.google.com/store/apps/details?id=â€¦"}]},{section:"Live Product Promotions (Featured Product Alerts)",fields:[{key:"live_promo_enabled",label:"Show Live Product Promotions (small alerts at the bottom corner)",type:"checkbox"},{key:"live_promo_first_delay_seconds",label:"First alert after (seconds)",type:"number",placeholder:"12"},{key:"live_promo_interval_seconds",label:"Delay between alerts (seconds)",type:"number",placeholder:"60"}],extra:r}].map(s=>`
            <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
              <h3 class="text-sm font-black text-white mb-4">${s.section}</h3>
              <div class="form-grid form-grid-2">
                ${s.fields.map(l=>`
                  <div ${l.type==="textarea"||l.type==="checkbox"?'class="sm:col-span-2"':""}>
                    ${l.type==="checkbox"?`<label class="flex items-center gap-2.5 cursor-pointer"><input type="checkbox" name="${l.key}" class="accent-blue-500 w-4 h-4" ${i[l.key]?"checked":""}><span class="text-sm text-gray-300">${l.label}</span></label>`:l.type==="textarea"?`<label class="lbl">${l.label}</label><textarea class="input-field" name="${l.key}" placeholder="${d(l.placeholder)}" rows="2">${d(i[l.key]||"")}</textarea>`:`<label class="lbl">${l.label}</label><input type="${l.type}" class="input-field" name="${l.key}" value="${d(i[l.key]||"")}" placeholder="${d(l.placeholder||"")}">`}
                  </div>`).join("")}
              </div>
              ${s.extra||""}
            </div>`).join("")}
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Content Settings</button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}async function jr(){const e=new Set,t=[],a=i=>{for(const n of i||[]){const r=n&&(n.property_id||n.id);r&&!e.has(r)&&(e.add(r),t.push(n))}};try{const{data:i}=await y.from("showroom_listings").select("property_id,title,name,category,listing_type,images,is_active").order("created_at",{ascending:!1}).limit(500);a(i)}catch{}return a(xt()),a(re),a(Ha),a(Ga),a(Va),a(Wa),t.slice(0,250)}window.filterPromoPicker=function(e){const t=document.getElementById("promo-picker-list");if(!t)return;const a=(e||"").trim().toLowerCase();t.querySelectorAll("[data-promo-search]").forEach(i=>{i.style.display=!a||i.dataset.promoSearch.toLowerCase().includes(a)?"":"none"})};window.selectAllPromoPicks=function(){document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(e=>{e.checked=!0})};window.clearAllPromoPicks=function(){document.querySelectorAll('#promo-picker-list input[name="live_promo_product_ids"]').forEach(e=>{e.checked=!1})};window.saveContent=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=Array.from(new Set(t.getAll("live_promo_product_ids").map(r=>String(r).trim()).filter(Boolean)));i.length?a.live_promo_product_ids=i:a.live_promo_product_ids=[];const{error:n}=await y.from("site_settings").upsert({id:1,...a});if(n){b(n.message,"error");return}b("Content settings saved!")};const _a=[{key:"hero_videos",custom:!0,title:"HERO VIDEO BANNER (ROTATING)",desc:"Upload your own promotional videos (MP4 & WebM) to the top homepage banner. Each saved slide becomes its own full-width hero with its title, subtitle and CTA over a soft dark overlay so the text always stays readable. Add one video, one poster, or many rotating slides. If no video is added here, the single promo banner and the built-in brand banner below are shown instead as fallbacks.",accent:"from-indigo-400 to-violet-500"},{key:"banner",title:"ANDROID APP BANNER",desc:"The mobile-app promotion banner shown at the bottom of every page. Editing these words never changes the banner design, phone image, logo or buttons.",accent:"from-cyan-400 to-blue-500",fields:[{key:"app_banner_title",label:"App Banner Title",type:"text"},{key:"app_banner_description",label:"App Banner Description",type:"textarea"},{key:"app_banner_button_text",label:"App Banner Button Text",type:"text"},{key:"app_banner_secondary_text",label:"App Banner Secondary Text",type:"text"}]},{key:"bottom",title:"BOTTOM / END-OF-PAGE SECTION",desc:"The final professional closing area of the website â€” thank-you message, customer support, footer links and copyright. The polished design stays; only these words change.",accent:"from-emerald-400 to-cyan-500",fields:[{key:"bottom_heading",label:"Bottom Section Heading",type:"text"},{key:"bottom_main_message",label:"Main Bottom Message",type:"textarea"},{key:"bottom_closing_message",label:"Closing Message",type:"text"},{key:"bottom_support_heading",label:"Customer Support Heading",type:"text"},{key:"bottom_support_description",label:"Customer Support Description",type:"textarea"},{key:"bottom_support_button_text",label:"Support Button Text",type:"text"},{key:"bottom_footer_text",label:"Footer Section Text",type:"text"},{key:"bottom_footer_closing",label:"Footer Closing Message",type:"text"},{key:"bottom_copyright",label:"Copyright Text (empty = automatic â€œÂ© year Brandâ€ line)",type:"text"}]},{key:"promo_banner",title:"HOME PAGE PROMO BANNER",desc:"The main rotating banner at the top of the homepage. Upload your own image or video and write your own words â€” the clean design stays. If empty, the built-in image banners rotate.",accent:"from-fuchsia-400 to-purple-500",fields:[{key:"promo_banner_enabled",label:"Show my promo banner",type:"checkbox"},{key:"promo_banner_image",label:"Banner Image",type:"media",kind:"image"},{key:"promo_banner_video",label:"Banner Video (plays if no image)",type:"media",kind:"video"},{key:"promo_banner_title",label:"Banner Title",type:"text"},{key:"promo_banner_subtitle",label:"Banner Subtitle",type:"text"},{key:"promo_banner_button_text",label:"Button Text",type:"text"},{key:"promo_banner_button_link",label:"Button Link",type:"text"}]},{key:"video_ad",title:"HOME PAGE VIDEO ADVERTISEMENT",desc:"A separate video card below the promo banner. Upload your own video (and optional poster image) and write your own words. It plays muted with play/pause and a progress bar.",accent:"from-rose-400 to-orange-500",fields:[{key:"video_ad_enabled",label:"Show the video advertisement",type:"checkbox"},{key:"video_ad_video_url",label:"Video File",type:"media",kind:"video"},{key:"video_ad_poster_url",label:"Poster Image (shown before play)",type:"media",kind:"image"},{key:"video_ad_title",label:"Video Title",type:"text"},{key:"video_ad_subtitle",label:"Video Subtitle",type:"text"},{key:"video_ad_button_text",label:"Button Text",type:"text"},{key:"video_ad_button_link",label:"Button Link",type:"text"}]}];function Bi(e,t){const a=e.kind==="image",i=t||"",n=a?"image":"video",r="text-fuchsia-300",s=!!i;return`<div id="slot-${e.key}">
      ${s?`<div class="relative group w-full h-28 rounded-xl overflow-hidden bg-gray-900 border border-fuchsia-500/15 flex items-center justify-center">
             ${a?`<img src="${d(i)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`:`<video src="${d(i)}" class="w-full h-full object-cover" muted playsinline preload="metadata"></video>`}
             <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
               <button type="button" onclick="triggerContentMediaUpload('${e.key}')" class="text-xs font-bold text-white bg-fuchsia-600 px-3 py-1.5 rounded-lg">Replace</button>
               <button type="button" onclick="clearContentMedia('${e.key}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
             </div>
           </div>`:`<button type="button" onclick="triggerContentMediaUpload('${e.key}')" class="w-full h-28 rounded-xl border-2 border-dashed border-fuchsia-500/25 hover:border-fuchsia-500/50 flex flex-col items-center justify-center gap-1.5 transition">
             <i data-lucide="${n}" class="w-6 h-6 ${r}"></i>
             <p class="text-[10px] text-gray-500">Upload ${a?"Image":"Video"}</p>
           </button>`}
      <input type="file" id="file-${e.key}" class="hidden" accept="${a?"image/*":"video/*"}" onchange="handleContentMediaUpload(event,'${e.key}')">
      <input type="hidden" name="${e.key}" id="val-${e.key}" value="${d(i)}">
      <div class="flex gap-2 mt-1.5">
        <input class="input-field text-xs flex-1" id="url-${e.key}" value="${d(i)}" placeholder="Or paste ${a?"image":"video"} URL" oninput="document.getElementById('val-${e.key}').value=this.value">
      </div>
    </div>`}window.triggerContentMediaUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearContentMedia=function(e){const t=document.getElementById("val-"+e),a=document.getElementById("url-"+e);t&&(t.value=""),a&&(a.value=""),b("Cleared. Save to apply.","info"),Fi()};window.handleContentMediaUpload=async function(e,t){const a=e.target.files?.[0];if(a){a.type.startsWith("video/"),b(`Uploading ${a.name}â€¦`,"info");try{const{data:{session:i}}=await y.auth.getSession();if(!i){b("Sign in to upload media","error");return}const n=(a.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,""),r=`content/${t}-${Date.now()}.${n}`,{error:s}=await y.storage.from("product-images").upload(r,a,{contentType:a.type,upsert:!1});if(s){b("Upload failed: "+s.message,"error");return}const{data:l}=y.storage.from("product-images").getPublicUrl(r),o=l.publicUrl,c=document.getElementById("val-"+t),u=document.getElementById("url-"+t);c&&(c.value=o),u&&(u.value=o);const m=document.getElementById("slot-"+t);if(m){const h=_a.flatMap(f=>f.fields||[]).find(f=>f.key===t);h&&(m.outerHTML=Bi(h,o))}b("âœ“ Uploaded â€” save to apply","success")}catch{b("Upload failed","error")}}};const Or=["SHOP NOW","EXPLORE DEALS","VIEW PRODUCTS","DISCOVER MORE","SEE OFFERS","SHOP THE LOOK"];window._heroVideoDraft=[];function le(){return Array.isArray(window._heroVideoDraft)||(window._heroVideoDraft=[]),window._heroVideoDraft}function lt(){const e=document.getElementById("hs-json");e&&(e.value=JSON.stringify(le()))}function Ne(){lt();const e=document.getElementById("hero-videos-manager");e&&(e.innerHTML=Ri(le()),window.lucide&&lucide.createIcons())}function qr(e,t){const a=String(e&&e.video||"").trim(),i=String(e&&e.poster||"").trim(),n=a&&Ua(a)||i&&Ua(i)?'<p class="mt-2 text-[11px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-2">âš  Temporary preview only â€” the upload FAILED, this will NOT be saved. Re-upload a smaller MP4/WebM.</p>':"";return`
    <div>
      <div class="w-full overflow-hidden rounded-xl bg-gray-950 border border-indigo-500/20 flex items-center justify-center">${a?`<video src="${d(a)}" ${i?`poster="${d(i)}"`:""} class="w-full h-40 object-cover" muted controls preload="metadata"></video>`:i?`<img src="${d(i)}" class="w-full h-40 object-cover" onerror="this.style.display='none'">`:'<div class="w-full h-40 flex items-center justify-center text-[11px] text-gray-500">No media yet â€” upload a video (MP4/WebM) or a poster below</div>'}</div>
      ${n}
      <div class="flex flex-wrap gap-1.5 mt-2 justify-end">
        <button type="button" onclick="heroVideoUpload(${t},'video')" class="px-3 py-1.5 rounded-lg ${a?"bg-white/10 text-gray-200 border border-white/10":"bg-indigo-600 text-white"} text-[10px] font-bold transition">${a?"Replace Video":"Upload Video"}</button>
        ${a?`<button type="button" onclick="heroVideoRemoveMedia(${t},'video')" class="px-3 py-1.5 rounded-lg bg-red-600/80 text-white text-[10px] font-bold">Remove Video</button>`:""}
        <button type="button" onclick="heroVideoUpload(${t},'poster')" class="px-3 py-1.5 rounded-lg bg-white/10 text-gray-200 text-[10px] font-bold border border-white/10 transition">${i?"Replace Poster":"Add Poster"}</button>
        ${i?`<button type="button" onclick="heroVideoRemoveMedia(${t},'poster')" class="px-3 py-1.5 rounded-lg bg-red-600/80 text-white text-[10px] font-bold">Remove Poster</button>`:""}
      </div>
    </div>`}function Ri(e){return(e||[]).map((t,a)=>{const i=String(t&&t.buttonText||"SHOP NOW"),n=Or.map(r=>`<button type="button" onclick="heroVideoPreset(${a},'${r}')" class="px-2.5 py-1 rounded-full text-[9px] font-black ${i===r?"bg-indigo-600 text-white":"bg-white/5 text-gray-400"} border ${i===r?"border-indigo-500":"border-white/10"} transition">${r}</button>`).join("");return`
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
      ${qr(t,a)}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label class="lbl">Title</label>
          <input type="text" value="${d(t.title||"")}" class="input-field w-full" placeholder="e.g. Season Sale is Live" oninput="heroVideoField(${a},'title',this.value)">
        </div>
        <div>
          <label class="lbl">Subtitle</label>
          <input type="text" value="${d(t.subtitle||"")}" class="input-field w-full" placeholder="e.g. Up to 50% off top brands" oninput="heroVideoField(${a},'subtitle',this.value)">
        </div>
      </div>
      <div>
        <label class="lbl">Button</label>
        <div class="flex flex-wrap gap-1.5">${n}</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          <input type="text" value="${d(i)}" class="input-field w-full" placeholder="SHOP NOW" oninput="heroVideoField(${a},'buttonText',this.value)">
          <input type="text" value="${d(t.buttonLink||"/#showroom-directory")}" class="input-field w-full" placeholder="/#showroom-directory" oninput="heroVideoField(${a},'buttonLink',this.value)">
        </div>
      </div>
    </div>`}).join("")}window.heroVideoUpload=function(e,t){const a=document.createElement("input");a.type="file",a.accept=t==="video"?"video/mp4,video/webm,.mp4,.webm":"image/*",a.onchange=()=>{const i=a.files&&a.files[0];i&&Gr(e,t,i)},a.click()};window.heroVideoField=function(e,t,a){const i=le();i[e]&&(i[e][t]=a,lt())};window.heroVideoPreset=function(e,t){const a=le();a[e]&&(a[e].buttonText=t,Ne())};window.heroVideoToggle=function(e){const t=le();t[e]&&(t[e].enabled=t[e].enabled===!1,Ne())};window.heroVideoMove=function(e,t){const a=le(),i=e+t;i<0||i>=a.length||([a[e],a[i]]=[a[i],a[e]],Ne())};window.heroVideoDelete=function(e){const t=le();e<0||e>=t.length||confirm("Delete this hero video slide?")&&(t.splice(e,1),Ne())};window.heroVideoRemoveMedia=function(e,t){const a=le();a[e]&&(t==="video"?a[e].video="":t==="poster"&&(a[e].poster=""),Ne())};window.addHeroVideoSlide=function(){le().push({id:"hv"+Date.now()+Math.floor(Math.random()*999),enabled:!0,video:"",poster:"",title:"",subtitle:"",buttonText:"SHOP NOW",buttonLink:"/#showroom-directory"}),Ne(),b("New slide added â€” upload a video and press Save to show it.","info")};async function Hr(e,t){try{const{data:{session:a}}=await y.auth.getSession();if(!a)return{url:URL.createObjectURL(e),persisted:!1,error:"You are signed out â€” sign in again, then re-upload."};const i=(e.name.split(".").pop()||(t==="video"?"mp4":"jpg")).toLowerCase().replace(/[^a-z0-9]/g,""),n=`hero/${t}/${Date.now()}-${Math.random().toString(36).slice(2)}.${i}`,{error:r}=await y.storage.from("product-images").upload(n,e,{contentType:e.type,cacheControl:"3600",upsert:!0});if(r)return{url:URL.createObjectURL(e),persisted:!1,error:r.message};const{data:s}=y.storage.from("product-images").getPublicUrl(n),l=s&&s.publicUrl;return l?{url:l,persisted:!0,error:null}:{url:URL.createObjectURL(e),persisted:!1,error:"Storage did not return a public URL."}}catch(a){return{url:URL.createObjectURL(e),persisted:!1,error:String(a&&a.message||a)}}}function Ua(e){return/^blob:/i.test(String(e||""))}async function Gr(e,t,a){const i=le();if(!a||!i[e])return;if(t==="video"){if(!/video\/(mp4|webm)|\.(mp4|webm)$/i.test(a.type+" "+a.name)){b("Please choose an MP4 or WebM video file.","error");return}}else if(!a.type.startsWith("image/")){b("Please choose an image for the poster.","error");return}b("â³ Uploading "+(t==="video"?"video":"poster")+"â€¦","info");const n=await Hr(a,t);t==="video"?i[e].video=n.url:i[e].poster=n.url,Ne(),n.persisted?b("âœ“ "+(t==="video"?"Video":"Poster")+" uploaded â€” press Save & Publish Hero Banner to go live.","success"):b("âš  UPLOAD FAILED: "+(n.error||"unknown reason")+" â€” this preview is TEMPORARY and will NOT be saved. Try a smaller MP4/WebM (keep videos under ~50 MB), then re-upload.","error")}function Vr(e){const t=Array.isArray(e)?e.map(i=>({...i})):[];return window._heroVideoDraft=t,lt(),`
    <div class="space-y-3">
      <div id="hero-videos-manager" class="space-y-3">${t.length?"":`
    <div class="rounded-xl border-2 border-dashed border-indigo-500/30 bg-white/5 p-6 text-center">
      <i data-lucide="video" class="w-8 h-8 text-indigo-400 mx-auto"></i>
      <p class="text-xs text-gray-400 mt-2 font-bold">No hero videos yet</p>
      <p class="text-[11px] text-gray-500 mt-1">Add your first promotional video slide to turn the homepage banner into an auto-playing video hero. Until then, the built-in brand banner and any single promo banner below are used.</p>
    </div>`}${Ri(t)}</div>
      <button type="button" onclick="heroVideoSavePublish(this)" class="btn-press w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-black rounded-xl transition flex items-center justify-center gap-2">
        <i data-lucide="rocket" class="w-4 h-4"></i> Save &amp; Publish Hero Banner
      </button>
      <p class="text-[10px] text-gray-500 text-center">One video is enough â€” no minimum. Your banner goes live as soon as you press this button.</p>
      <button type="button" onclick="addHeroVideoSlide()" class="btn-press w-full px-4 py-3 border-2 border-dashed border-indigo-500/40 text-indigo-300 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2">
        <i data-lucide="plus" class="w-4 h-4"></i> Add Another Hero Video Slide
      </button>
    </div>`}window.heroVideoSavePublish=async function(e){const t=o=>/^blob:/i.test(String(o||"")),a=le().filter(o=>o&&(o.video||o.poster||o.title||o.subtitle));if(!a.length){b("Add at least one video slide before publishing.","error");return}a.forEach(o=>{o.poster&&t(o.poster)&&(o.poster="")});const i=a.filter(o=>o.video&&t(o.video)),n=a.filter(o=>o.video&&!t(o.video));if(i.length&&!n.length){b(`Upload FAILED for your video${i.length>1?"s":""} â€” temporary previews cannot go live. Re-upload a smaller MP4/WebM (under ~50 MB), then press this button again.`,"error");return}if(i.length&&!confirm(`${i.length} slide${i.length>1?"s":""} had a FAILED upload and will be LEFT OUT. Publish the remaining ${n.length} slide${n.length===1?"":"s"} now?`))return;const r=n,s=r.filter(o=>o.video);if(!r.length){b("Please upload a video in at least one slide first.","error");return}const l=e?e.innerHTML:"";e&&(e.disabled=!0,e.innerHTML="â³ Publishingâ€¦");try{lt();const{data:o}=await y.from("site_settings").select("id").limit(1).maybeSingle();let c;if(o?.id?{error:c}=await y.from("site_settings").update({hero_video_slides:r}).eq("id",o.id):{error:c}=await y.from("site_settings").insert({id:crypto.randomUUID(),hero_video_slides:r}),c)throw new Error(c.message);za(),b("âœ“ Hero video banner published! "+s.length+(s.length===1?" video is":" videos are")+" now live on your homepage.","success")}catch(o){b(o.message||"Could not publish the hero banner. Please try again.","error")}finally{e&&(e.disabled=!1,e.innerHTML=l,window.lucide&&lucide.createIcons())}};async function Fi(){const e=document.getElementById("content");try{const{data:t}=await y.from("site_settings").select("*").limit(1).maybeSingle(),a={...Yi,...t||{}};e.innerHTML=`
      <div class="space-y-6 fade-in">
        <div>
          <h2 class="text-xl font-black text-white">Content Settings</h2>
          <p class="text-xs text-gray-400 mt-1">Edit the wording of the two shared sections below. Save once and every page updates automatically â€” no code needed. Your products, prices, reviews, orders and design are never touched.</p>
        </div>
        <form id="content-settings-form" onsubmit="saveContentSettings(event)" class="space-y-5">
          ${_a.map(i=>`
            <div class="glass-soft border border-white/10 rounded-2xl p-5">
              <div class="flex items-center gap-2.5 mb-1">
                <span class="w-2 h-2 rounded-full bg-gradient-to-r ${i.accent}"></span>
                <h3 class="text-sm font-black text-white tracking-wide">${i.title}</h3>
              </div>
              <p class="text-[11px] text-gray-400 mb-4">${i.desc}</p>
              ${i.key==="hero_videos"?Vr(a.hero_video_slides||[]):`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${i.fields.map(n=>`
                  <div class="${n.type==="textarea"||n.type==="media"?"sm:col-span-2":""}">
                    ${n.type==="checkbox"?`<label class="flex items-center gap-2.5 cursor-pointer select-none py-2">
                           <input id="cs-${n.key}" type="checkbox" name="${n.key}" ${a[n.key]?"checked":""} class="w-4 h-4 accent-blue-500 rounded">
                           <span class="text-sm font-bold text-gray-200">${n.label}</span>
                         </label>`:`<label class="lbl" for="cs-${n.key}">${n.label}</label>`}
                    ${n.type==="textarea"?`<textarea id="cs-${n.key}" name="${n.key}" rows="3" class="input-field w-full" placeholder="Enter the current wordingâ€¦">${d(a[n.key]||"")}</textarea>`:n.type==="media"?Bi(n,a[n.key]||""):n.type==="checkbox"?"":`<input id="cs-${n.key}" type="text" name="${n.key}" value="${d(a[n.key]||"")}" class="input-field w-full" placeholder="Enter the current wordingâ€¦">`}
                    ${n.type==="text"||n.type==="textarea"?`<p class="text-[10px] text-gray-500 mt-1">Current: ${d((a[n.key]||"").slice(0,80))}${(a[n.key]||"").length>80?"â€¦":""}</p>`:""}
                  </div>`).join("")}
              </div>`}
            </div>`).join("")}
          <input type="hidden" id="hs-json" name="hero_video_slides" value="">
          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Content</button>
        </form>
      </div>`,lt(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.saveContentSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[n,r]of t.entries())a[n]=r;for(const n of _a)if(n.fields)for(const r of n.fields)r.type==="checkbox"&&!(r.key in a)?a[r.key]=!1:r.type==="checkbox"&&(a[r.key]=!0);let i=[];try{const n=t.get("hero_video_slides");if(String(n||"").trim()){const r=JSON.parse(n);Array.isArray(r)&&(i=r)}}catch{i=[]}a.hero_video_slides=i;try{const{data:n}=await y.from("site_settings").select("id").limit(1).maybeSingle();let r;if(n?.id?{error:r}=await y.from("site_settings").update(a).eq("id",n.id):{error:r}=await y.from("site_settings").insert({id:crypto.randomUUID(),...a}),r)throw new Error(r.message);za(),b("Content updated â€” the banners now use your new words and uploads.","success")}catch(n){b(n.message||"Could not save content. Please try again.","error")}};async function Wr(){const e=document.getElementById("content");try{const[t,a,i]=await Promise.all([y.from("payment_receipts").select("amount,currency,status,created_at").order("created_at",{ascending:!1}).limit(500),y.from("showroom_listings").select("id,listing_type,category,is_active",{count:"exact"}),y.from("profiles").select("user_id,created_at",{count:"exact"})]),n=t.data||[],r=n.filter(c=>["approved","payment_approved","delivered"].includes(c.status)).reduce((c,u)=>c+(parseFloat(u.amount)||0),0),s=n.length>0?(n.filter(c=>c.status!=="cancelled").length/n.length*100).toFixed(1):0,l={};(a.data||[]).forEach(c=>{l[c.category]=(l[c.category]||0)+1});const o=Object.entries(l).sort((c,u)=>u[1]-c[1]).slice(0,8);e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Analytics</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          ${W("Total Revenue",`$${r.toLocaleString("en-US",{maximumFractionDigits:0})}`,"dollar-sign","emerald")}
          ${W("Total Orders",n.length,"shopping-bag","blue")}
          ${W("Customers",i.count||0,"users","violet")}
          ${W("Conversion Rate",s+"%","trending-up","amber")}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="bar-chart-3" class="w-4 h-4 text-blue-400"></i> Revenue (Last 6 Months)</h3>
            <canvas id="analytics-chart" height="220"></canvas>
          </div>
          <div class="glass-soft border border-blue-500/15 rounded-2xl p-5">
            <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><i data-lucide="pie-chart" class="w-4 h-4 text-violet-400"></i> Top Categories by Listings</h3>
            ${o.length===0?'<p class="text-xs text-gray-500 text-center py-8">No data</p>':o.map(([c,u])=>`
              <div class="flex items-center gap-3 py-1.5">
                <span class="text-xs text-gray-300 flex-1 truncate">${d(c)}</span>
                <div class="w-24 h-2 bg-blue-500/10 rounded-full overflow-hidden"><div class="h-full bg-blue-500 rounded-full" style="width:${Math.round(u/o[0][1]*100)}%"></div></div>
                <span class="text-xs font-bold text-white w-6 text-right">${u}</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons(),gi(n)}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}async function zr(){const e=document.getElementById("content"),{data:t}=await y.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
    <div class="space-y-5 fade-in">
      <h2 class="text-xl font-black text-white">SEO Manager</h2>
      <form id="seo-form" onsubmit="saveSeo(event)" class="space-y-4">
        <div class="glass-soft border border-blue-500/15 rounded-2xl p-5 space-y-4">
          <h3 class="text-sm font-black text-white">Homepage SEO</h3>
          <div><label class="lbl">Meta Title</label><input class="input-field" name="meta_title" value="${d(a.meta_title||"")}" placeholder="Weverse Online Shop | Premium International Commerce"></div>
          <div><label class="lbl">Meta Description</label><textarea class="input-field" name="meta_description" rows="2" placeholder="Your trusted global shopâ€¦">${d(a.meta_description||"")}</textarea></div>
          <div><label class="lbl">Meta Keywords (comma separated)</label><input class="input-field" name="meta_keywords" value="${d(a.meta_keywords||"")}" placeholder="global marketplace, online shopping, â€¦"></div>
          <div><label class="lbl">Canonical URL</label><input class="input-field" name="canonical_url" value="${d(a.canonical_url||"")}" placeholder="https://yoursite.com"></div>
          <div><label class="lbl">OG Image URL (Social share image)</label><input class="input-field" name="og_image" value="${d(a.og_image||"")}" placeholder="https://â€¦/og-image.jpg"></div>
          <div><label class="lbl">Google Analytics ID</label><input class="input-field" name="ga_id" value="${d(a.ga_id||"")}" placeholder="G-XXXXXXXXXX"></div>
          <div><label class="lbl">Google Search Console Verification</label><input class="input-field" name="gsc_verify" value="${d(a.gsc_verify||"")}" placeholder="Verification meta tag content"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save SEO Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSeo=async function(e){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());await y.from("site_settings").upsert({id:1,...t}),b("SEO settings saved!")};async function Yr(){const e=document.getElementById("content"),{data:t}=await y.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
          <div><label class="lbl">Sender Name</label><input class="input-field" name="email_from_name" value="${d(a.email_from_name||"")}" placeholder="Weverse Online Shop"></div>
          <div><label class="lbl">Reply-To Email</label><input type="email" class="input-field" name="email_reply_to" value="${d(a.email_reply_to||"")}" placeholder="support@example.com"></div>
        </div>
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Email Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveEmailSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,n]of t.entries())a[i]=n;["email_order_placed","email_order_shipped","email_order_delivered","email_review_request"].forEach(i=>{i in a?a[i]=!0:a[i]=!1}),await y.from("site_settings").upsert({id:1,...a}),b("Email settings saved!")};async function Rt(){const e=document.getElementById("content");e&&(e.innerHTML=He());try{const[t,a,i]=await Promise.all([y.from("admin_security_logs").select("*").order("created_at",{ascending:!1}).limit(50),y.from("admin_2fa").select("enabled,backup_codes,created_at").eq("user_id",I.user?.id).maybeSingle(),y.auth.mfa.listFactors()]),n=t.data||[],r=a.data||{},s=(i.data?.totp||[])[0],l=!!s&&s.status==="verified",o=(r.backup_codes||[]).filter(c=>!c.used).length;e.innerHTML=`
      <div class="space-y-6 fade-in">
        <h2 class="text-xl font-black text-white">Security</h2>

        <!-- 2FA STATUS BANNER -->
        <div class="p-4 rounded-xl border flex items-center gap-4 ${l?"bg-emerald-500/5 border-emerald-500/20":"bg-amber-500/5 border-amber-500/20"}">
          <div class="w-10 h-10 ${l?"bg-emerald-500/10":"bg-amber-500/10"} rounded-xl flex items-center justify-center shrink-0">
            <i data-lucide="${l?"shield-check":"shield-alert"}" class="w-5 h-5 ${l?"text-emerald-400":"text-amber-400"}"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm font-black ${l?"text-emerald-300":"text-amber-300"}">Two-Factor Authentication is ${l?"ENABLED âœ“":"NOT ENABLED"}</p>
            <p class="text-xs text-gray-400 mt-0.5">${l?`Backup codes available: ${o} Â· Enrolled: ${se(r.created_at)}`:"Enable 2FA to protect your admin account with an authenticator app."}</p>
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
                ${n.length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No security events yet</td></tr>':n.map(c=>{const u=["login_success","login_2fa_success"].includes(c.event_type),m=["login_failed","login_denied","login_backup_code_used"].includes(c.event_type),h=u?"text-emerald-400":m?"text-red-400":"text-gray-300",f={login_success:"Login âœ“",login_failed:"Failed Login âœ—",login_denied:"Access Denied âœ—",login_2fa_success:"2FA Verified âœ“",login_backup_code_used:"Backup Code Used",logout:"Logged Out",logout_all_devices:"Logout All Devices"}[c.event_type]||c.event_type;return`<tr>
                      <td><span class="text-xs font-bold ${h}">${d(f)}</span></td>
                      <td><span class="text-xs font-mono text-gray-300">${d(c.ip_address||"â€”")}</span></td>
                      <td class="hidden sm:table-cell"><span class="text-xs text-gray-500 max-w-[160px] block truncate">${d((c.user_agent||"â€”").slice(0,50))}</span></td>
                      <td><span class="text-xs text-gray-500">${Se(c.created_at)}</span></td>
                    </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,document.getElementById("new-pw")?.addEventListener("input",c=>{const u=c.target.value,m=[{label:"8+ characters",ok:u.length>=8},{label:"Uppercase letter",ok:/[A-Z]/.test(u)},{label:"Number",ok:/[0-9]/.test(u)},{label:"Special character",ok:/[^a-zA-Z0-9]/.test(u)}];document.getElementById("pw-strength").innerHTML=m.map(h=>`<div class="flex items-center gap-1.5 text-[10px] ${h.ok?"text-emerald-400":"text-gray-600"}">
          <i data-lucide="${h.ok?"check-circle":"circle"}" class="w-3 h-3"></i>${h.label}</div>`).join(""),window.lucide&&lucide.createIcons()}),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.changePassword=async function(e){e.preventDefault();const t=document.getElementById("current-pw").value,a=document.getElementById("new-pw").value,i=document.getElementById("confirm-pw").value;if(a!==i){b("Passwords do not match","error");return}if(a.length<8){b("Password must be at least 8 characters","error");return}const{error:n}=await y.auth.signInWithPassword({email:I.user.email,password:t});if(n){b("Current password is incorrect","error");return}const{error:r}=await y.auth.updateUser({password:a});if(r){b(r.message,"error");return}await ce(I.user.id,"password_changed"),b("Password updated successfully!"),e.target.reset(),document.getElementById("pw-strength").innerHTML=""};window.setup2FAFlow=async function(){D(`
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
    </div>`),window.lucide&&lucide.createIcons();try{const{data:e,error:t}=await y.auth.mfa.enroll({factorType:"totp",friendlyName:"Weverse Admin"});if(t)throw t;const a=e.totp.qr_code,i=e.totp.secret,n=e.id;document.getElementById("2fa-setup-content").innerHTML=`
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
        <button onclick="confirm2FAEnrollment('${d(n)}')" class="btn-press w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2">
          <i data-lucide="shield-check" class="w-4 h-4"></i> Verify & Enable 2FA
        </button>
      </div>`,window.lucide&&lucide.createIcons(),setTimeout(()=>document.getElementById("setup-totp-code")?.focus(),100),document.getElementById("setup-totp-code")?.addEventListener("input",r=>{r.target.value=r.target.value.replace(/\D/g,"").slice(0,6)})}catch(e){document.getElementById("2fa-setup-content").innerHTML=`<div class="text-red-400 text-sm text-center py-4">${d(e.message)}</div>`}};window.confirm2FAEnrollment=async function(e){const t=document.getElementById("setup-totp-code")?.value?.trim(),a=document.getElementById("setup-2fa-error");if(!t||t.length!==6){a&&(a.textContent="Enter the 6-digit code.",a.classList.remove("hidden"));return}try{const{data:i,error:n}=await y.auth.mfa.challenge({factorId:e});if(n)throw n;const{error:r}=await y.auth.mfa.verify({factorId:e,challengeId:i.id,code:t});if(r)throw r;const s=Di(10);await y.from("admin_2fa").upsert({user_id:I.user.id,enabled:!0,backup_codes:s}),await ce(I.user.id,"2fa_enrolled"),oe(),Ui(s.map(l=>l.code)),Rt()}catch(i){const n=document.getElementById("setup-2fa-error");n&&(n.textContent=i.message?.includes("Invalid")?"Wrong code. Check your app and try again.":i.message,n.classList.remove("hidden")),document.getElementById("setup-totp-code").value="",document.getElementById("setup-totp-code").focus()}};function Di(e){const t=[];for(let a=0;a<e;a++){const i=Array.from({length:16},()=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random()*32)]).join("");t.push({code:`${i.slice(0,4)}-${i.slice(4,8)}-${i.slice(8,12)}-${i.slice(12,16)}`,used:!1})}return t}function Ui(e){D(`
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
`)).then(()=>b("Backup codes copied!"))};window.downloadBackupCodes=function(e){const t=new Blob([`Weverse Admin Backup Codes
Generated: ${new Date().toISOString()}

${e.join(`
`)}

Each code works once. Store securely.`],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download="kco-admin-backup-codes.txt",a.click()};window.regenerateBackupCodes=async function(){if(!confirm("This will invalidate ALL existing backup codes. Continue?"))return;const e=Di(10);await y.from("admin_2fa").update({backup_codes:e}).eq("user_id",I.user.id),b("New backup codes generated"),Ui(e.map(t=>t.code)),Rt()};window.disable2FA=async function(){if(confirm("Disable two-factor authentication? Your account will be less secure."))try{const{data:e}=await y.auth.mfa.listFactors(),t=(e?.totp||[])[0];if(t){const{error:a}=await y.auth.mfa.unenroll({factorId:t.id});if(a)throw a}await y.from("admin_2fa").update({enabled:!1}).eq("user_id",I.user.id),await ce(I.user.id,"2fa_disabled"),b("2FA has been disabled"),Rt()}catch(e){b(e.message,"error")}};async function Kr(){const e=document.getElementById("content");try{const{data:t}=await y.from("admin_activity_logs").select("*").order("created_at",{ascending:!1}).limit(100);e.innerHTML=`
      <div class="space-y-4 fade-in">
        <h2 class="text-xl font-black text-white">Activity Logs</h2>
        <div class="glass-soft border border-blue-500/15 rounded-2xl overflow-hidden">
          <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full dt">
              <thead><tr><th>Action</th><th>Entity</th><th class="hidden sm:table-cell">Admin</th><th>Date</th></tr></thead>
              <tbody>
                ${(t||[]).length===0?'<tr><td colspan="4" class="text-center text-gray-500 py-8">No activity yet</td></tr>':(t||[]).map(a=>`<tr>
                    <td><span class="text-xs font-bold text-white">${d(a.action)}</span></td>
                    <td><span class="text-xs text-gray-400">${d(a.entity_type||"â€”")} <span class="text-gray-600">${d(a.entity_id?.slice(0,8)||"")}</span></span></td>
                    <td class="hidden sm:table-cell"><span class="text-xs text-blue-400">${d(a.user_email||a.user_id?.slice(0,8)||"â€”")}</span></td>
                    <td><span class="text-xs text-gray-500">${Se(a.created_at)}</span></td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}async function Jr(){const e=document.getElementById("content");try{const{data:t}=await y.from("deployment_history").select("*").order("created_at",{ascending:!1}).limit(20);e.innerHTML=`
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
                <div class="flex-1"><p class="text-xs font-bold text-white">${d(a.version||a.id?.slice(0,8))}</p><p class="text-[10px] text-gray-500">${Se(a.created_at)}</p></div>
                ${K(a.status||"completed")}
              </div>`).join("")}
          </div>
        </div>
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.exportProducts=async function(){const{data:e}=await y.from("showroom_listings").select("*"),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download=`kco-products-${new Date().toISOString().slice(0,10)}.json`,a.click(),b("Products exported!")};window.exportOrders=async function(){const{data:e}=await y.from("payment_receipts").select("*").order("created_at",{ascending:!1});if(!e||!e.length){b("No orders to export","info");return}const t=Object.keys(e[0]).join(","),a=e.map(r=>Object.values(r).map(s=>`"${String(s||"").replace(/"/g,'""')}"`).join(",")).join(`
`),i=new Blob([t+`
`+a],{type:"text/csv"}),n=document.createElement("a");n.href=URL.createObjectURL(i),n.download=`kco-orders-${new Date().toISOString().slice(0,10)}.csv`,n.click(),b("Orders exported!")};async function Qr(){const e=document.getElementById("content"),{data:t}=await y.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
        <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">ðŸ’¾ Save Settings</button>
      </form>
    </div>`,window.lucide&&lucide.createIcons()}window.saveSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[i,n]of t.entries())a[i]=n;["maintenance_mode","reviews_enabled","wishlist_enabled","guest_checkout"].forEach(i=>{a[i]=i in a}),await y.from("site_settings").upsert({id:1,...a}),b("Settings saved!")};async function Ft(){const e=document.getElementById("content");e&&(e.innerHTML=He());try{const{data:t}=await y.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{},i=a.homepage_banner_image||"",n=a.homepage_banner_alt||"Homepage header banner",r=i?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.";e.innerHTML=`
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
                ${i?`<img id="homepage-banner-preview-img" src="${d(i)}" alt="${d(n)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-off" class="mx-auto w-8 h-8 text-gray-500"></i><p class="mt-2 text-xs font-semibold text-gray-500">No banner selected</p></div></div>'}
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
              <span id="homepage-banner-msg">Uploadingâ€¦</span>
            </div>

            <div class="grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
              <div class="space-y-3">
                <div class="group relative overflow-hidden rounded-2xl border border-dashed border-blue-500/25 bg-[#0b1020] transition hover:border-blue-500/50">
                  <div class="p-3 sm:p-4">
                    <div class="overflow-hidden rounded-xl border border-white/10 bg-[#111827]" style="aspect-ratio: 1600 / 320;">
                      ${i?`<img id="homepage-banner-image" src="${d(i)}" alt="${d(n)}" class="h-full w-full object-cover">`:'<div class="flex h-full w-full items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"><div class="text-center"><i data-lucide="image-plus" class="mx-auto w-8 h-8 text-blue-400"></i><p class="mt-2 text-xs font-semibold text-gray-400">Upload a homepage banner</p></div></div>'}
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}async function Dt(){const e=document.getElementById("content");e&&(e.innerHTML=He());try{let t=function(l,o,c,u="",m="blue"){const h=!!(c&&c.trim());return`
        <div class="glass-soft border border-${m}-500/15 rounded-xl p-4 space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-xs font-black text-white">${d(l)}</p>
            ${h?'<span class="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">âœ“ Uploaded</span>':'<span class="text-[9px] text-gray-600">Empty</span>'}
          </div>
          ${h?`<div class="relative group w-full h-24 rounded-xl overflow-hidden bg-gray-900 border border-blue-500/10 flex items-center justify-center">
                <img src="${d(c)}" alt="${d(l)}" class="max-h-20 max-w-full object-contain p-2" onerror="this.closest('div').innerHTML='<p class=&quot;text-xs text-gray-600 text-center&quot;>Image broken</p>'">
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                  <button type="button" onclick="triggerImgUpload('${o}')" class="text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg">Replace</button>
                  <button type="button" onclick="clearBrandImg('${o}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
                </div>
               </div>`:`<div class="w-full h-24 rounded-xl border-2 border-dashed border-${m}-500/25 hover:border-${m}-500/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition" onclick="triggerImgUpload('${o}')">
                <i data-lucide="image-plus" class="w-7 h-7 text-${m}-400"></i>
                <p class="text-[11px] text-gray-500">Click to upload</p>
               </div>`}
          ${u?`<p class="text-[10px] text-gray-500">${d(u)}</p>`:""}
          <input type="file" id="file-${o}" class="hidden" accept="image/*" onchange="handleBrandImgUpload(event,'${o}')">
          <input type="hidden" name="${o}" id="val-${o}" value="${d(c||"")}">
          <div class="flex gap-2">
            <input class="input-field text-xs flex-1 ${h?"":"hidden"}" id="url-${o}" value="${d(c||"")}" placeholder="Or paste image URL" oninput="document.getElementById('val-${o}').value=this.value;updateLivePreview()">
            <button type="button" onclick="document.getElementById('url-${o}').classList.toggle('hidden')" class="text-[10px] text-${m}-400 hover:text-${m}-300 transition shrink-0">${h?"Edit URL":"Paste URL"}</button>
          </div>
        </div>`};const{data:a}=await y.from("site_settings").select("*").limit(1).maybeSingle(),i=a||{},n=i.brand_name||i.site_name||Za,r=i.brand_slogan||i.site_tagline||ei,s=i.brand_logo||i.brand_header_logo||"";e.innerHTML=`
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
                ${s?`<img src="${d(s)}" alt="${d(n)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
              </div>
              <div>
                <p id="preview-name" class="text-sm font-black text-white leading-none">${d(n)}</p>
                <p id="preview-slogan" class="text-[10px] text-blue-400 font-semibold mt-0.5">${d(r)}</p>
              </div>
              <div id="preview-badge-wrap" class="ml-auto ${i.brand_badge?"":"hidden"}">
                <img id="preview-badge" src="${d(i.brand_badge||"")}" alt="Verified" class="w-6 h-6 object-contain">
              </div>
            </div>
            <div class="px-4 py-2 border-t border-gray-800 text-[11px] text-gray-500" style="background:#070b16">
              <span id="preview-btn" style="background:${d(i.brand_primary_color||"#f97316")};color:#000;padding:4px 12px;border-radius:8px;font-weight:700;font-size:11px">Shop Now</span>
              <span class="ml-3" style="color:${d(i.brand_secondary_color||"#3b82f6")}">All Products â†’</span>
            </div>
          </div>
          <!-- Footer preview -->
          <div id="preview-footer" class="rounded-xl px-4 py-3 border border-gray-800 flex items-center gap-3" style="background:#0f172a">
            <div id="preview-footer-logo-wrap" class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style="background:var(--preview-primary,#f97316)">
              ${s?`<img src="${d(s)}" alt="${d(n)}" class="w-full h-full object-contain p-1">`:'<i data-lucide="globe" class="w-4 h-4 text-white"></i>'}
            </div>
            <div>
              <p id="preview-footer-name" class="text-xs font-black text-white">${d(n)}</p>
              <p id="preview-footer-slogan" class="text-[10px] text-gray-500">${d(r)}</p>
            </div>
            <p class="ml-auto text-[10px] text-gray-600">Â© 2026 <span id="preview-copy-name">${d(n)}</span></p>
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
                <input class="input-field" name="brand_name" id="inp-brand-name" value="${d(n)}" placeholder="Your brand name" required oninput="updateLivePreview()">
              </div>
              <div>
                <label class="lbl">Short Name</label>
                <input class="input-field" name="brand_short_name" value="${d(i.brand_short_name||"")}" placeholder="e.g. Weverse">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Slogan / Tagline *</label>
                <input class="input-field" name="brand_slogan" id="inp-brand-slogan" value="${d(r)}" placeholder="e.g. Global Shopping â€¢ Worldwide Delivery" oninput="updateLivePreview()">
              </div>
              <div class="sm:col-span-2">
                <label class="lbl">Brand Description</label>
                <textarea class="input-field" name="brand_description" rows="2" placeholder="Short descriptionâ€¦">${d(i.brand_description||"")}</textarea>
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
                <input class="input-field" name="brand_custom_font" value="${d(i.brand_custom_font||"")}" placeholder="e.g. Space Grotesk">
              </div>
            </div>
            <div id="font-preview" class="p-3 rounded-xl bg-gray-900 border border-blue-500/10">
              <p id="font-sample" class="text-sm text-white font-bold" style="font-family:'${d(i.brand_font||"Inter")}',sans-serif">The quick brown fox jumps â€” 0123456789 Â· Weverse Online Shop</p>
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
              <div><label class="lbl">Website URL</label><input class="input-field" name="brand_website_url" value="${d(i.brand_website_url||i.production_url||"https://weverseonlineshop.com")}" placeholder="https://â€¦"></div>
              <div><label class="lbl">Support Email</label><input type="email" class="input-field" name="brand_email" value="${d(i.brand_email||i.contact_email||"")}" placeholder="support@â€¦"></div>
              <div><label class="lbl">Phone / WhatsApp</label><input class="input-field" name="brand_phone" value="${d(i.brand_phone||i.contact_phone||"")}" placeholder="+1 234â€¦"></div>
              <div><label class="lbl">Business Address</label><input class="input-field" name="brand_address" value="${d(i.brand_address||i.contact_address||"")}" placeholder="City, Country"></div>
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.toggleLivePreview=function(){document.getElementById("live-preview-panel")?.classList.toggle("hidden"),updateLivePreview()};window.updateLivePreview=function(){const e=document.getElementById("live-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("inp-brand-name")?.value||Za,a=document.getElementById("inp-brand-slogan")?.value||ei,i=document.getElementById("ct-primary")?.value||"#f97316",n=document.getElementById("ct-secondary")?.value||"#3b82f6",r=document.getElementById("ct-tag1")?.value||"#22d3ee",s=document.getElementById("ct-tag2")?.value||"#a3e635",l=document.getElementById("val-brand_logo")?.value||DEFAULT_BRAND_LOGO,o=document.getElementById("val-brand_badge")?.value||"";["preview-name","preview-footer-name","preview-copy-name"].forEach(p=>{const g=document.getElementById(p);g&&(g.textContent=t)}),["preview-slogan","preview-footer-slogan"].forEach(p=>{const g=document.getElementById(p);g&&(g.textContent=a)});const c=document.getElementById("preview-slogan");if(c&&a){const p=a,g=p.indexOf(","),x=g>-1?p.slice(0,g+1):p,_=g>-1?p.slice(g+1):"";c.innerHTML=`<span style="color:${r};font-weight:800">${d(x)}</span><span style="color:${s};font-weight:700">${d(_)}</span>`}const u=document.getElementById("preview-btn");u&&(u.style.background=i);const m=e.querySelector('[style*="color:"]');m&&(m.style.color=n),["preview-logo-wrap","preview-footer-logo-wrap"].forEach(p=>{const g=document.getElementById(p);g&&(l?(g.innerHTML=`<img src="${l}" alt="${t}" class="w-full h-full object-contain p-1">`,g.style.background="transparent"):(g.innerHTML='<i data-lucide="globe" class="w-4 h-4 text-white"></i>',g.style.background=i,window.lucide&&lucide.createIcons()))});const h=document.getElementById("preview-badge-wrap"),f=document.getElementById("preview-badge");h&&f&&(o?(f.src=o,h.classList.remove("hidden")):h.classList.add("hidden"))};window.triggerImgUpload=function(e){document.getElementById("file-"+e)?.click()};window.clearBrandImg=function(e){document.getElementById("val-"+e).value="";const t=document.getElementById("url-"+e);t&&(t.value=""),(e&&e.startsWith("homepage_")?Ft:Dt)()};window.clearHomepageBannerImg=function(){const e=document.getElementById("val-homepage_banner_image"),t=document.getElementById("url-homepage_banner_image"),a=document.getElementById("homepage_banner_alt");e&&(e.value=""),t&&(t.value=""),a&&(a.value=""),Ft()};window.restoreHomepageBannerDefault=function(){window.clearHomepageBannerImg()};window.syncColor=function(e,t){const a=document.getElementById("color-"+e);a&&/^#[0-9a-fA-F]{6}$/.test(t)&&(a.value=t)};window.previewFont=function(e){const t=document.getElementById("font-sample");t&&(t.style.fontFamily=`'${e}', sans-serif`);const a="gf-preview";let i=document.getElementById(a);i||(i=document.createElement("link"),i.id=a,i.rel="stylesheet",document.head.appendChild(i)),i.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(e)}:wght@400;700;900&display=swap`};const na="weverse_brand_v1",ra="weverse_brand_override_v1";function sa(){try{const e=JSON.parse(localStorage.getItem(ra)||"null");if(e&&typeof e=="object")return e}catch{}try{const e=JSON.parse(localStorage.getItem(na)||"null");if(e&&typeof e=="object")return e.data&&typeof e.data=="object"?e.data:e}catch{}return{}}function vt(e){const t={...sa(),...e};try{localStorage.setItem(ra,JSON.stringify(t))}catch{}try{localStorage.setItem(na,JSON.stringify({ts:Date.now(),data:t}))}catch{}return window.dispatchEvent(new StorageEvent("storage",{key:ra})),window.dispatchEvent(new StorageEvent("storage",{key:na})),window.dispatchEvent(new CustomEvent("brand-updated",{detail:t})),t}window.handleBrandImgUpload=async function(e,t){const a=e.target.files?.[0];if(!a)return;const i=t&&t.startsWith("homepage_"),n=document.getElementById(i?"homepage-banner-status":"brand-upload-status"),r=document.getElementById(i?"homepage-banner-msg":"brand-upload-msg");n&&n.classList.remove("hidden"),r&&(r.textContent=`Uploading ${a.name}â€¦`);try{const s=a.name.split(".").pop(),l=`brand/${t}-${Date.now()}.${s}`,{error:o}=await y.storage.from("product-images").upload(l,a,{contentType:a.type,upsert:!0});let c;if(o)c=URL.createObjectURL(a),r&&(r.textContent=`Preview only (storage: ${o.message})`);else{const{data:h}=y.storage.from("product-images").getPublicUrl(l);c=h.publicUrl,r&&(r.textContent=`âœ“ ${a.name} uploaded`)}const u=document.getElementById("val-"+t),m=document.getElementById("url-"+t);u&&(u.value=c),m&&(m.value=c,m.classList.remove("hidden")),i?updateHomepageBannerPreview():(updateLivePreview(),setTimeout(()=>Dt(),1e3))}catch(s){r&&(r.textContent=`Upload failed: ${s.message}`)}setTimeout(()=>n?.classList.add("hidden"),4e3)};window.saveBrandSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a={};for(const[l,o]of t.entries())l.endsWith("_url")||(a[l]=o);a.brand_name&&(a.site_name=a.brand_name),a.brand_slogan&&(a.site_tagline=a.brand_slogan),a.brand_description&&(a.site_description=a.brand_description),a.brand_email&&(a.contact_email=a.brand_email),a.brand_phone&&(a.contact_phone=a.brand_phone),a.brand_address&&(a.contact_address=a.brand_address),a.brand_website_url&&(a.production_url=a.brand_website_url);const i=a.brand_custom_font||a.brand_font;i&&previewFont(i);const n=e.target.querySelector("[type=submit]");n&&(n.disabled=!0,n.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Savingâ€¦',window.lucide&&lucide.createIcons());const{data:r}=await y.from("site_settings").select("id").limit(1).maybeSingle();let s;r?.id?{error:s}=await y.from("site_settings").update(a).eq("id",r.id):{error:s}=await y.from("site_settings").insert(a),s?(vt(a),b("Brand saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(vt(a),b("âœ… Brand saved! All pages will now show your updated brand.","success")),setTimeout(()=>Dt(),500)};window.toggleHomepageBannerPreview=function(){document.getElementById("homepage-banner-preview-panel")?.classList.toggle("hidden"),updateHomepageBannerPreview()};window.updateHomepageBannerPreview=function(){const e=document.getElementById("homepage-banner-preview-panel");if(!e||e.classList.contains("hidden"))return;const t=document.getElementById("val-homepage_banner_image")?.value||"",a=document.getElementById("homepage_banner_alt")?.value||"Homepage header banner",i=document.getElementById("homepage-banner-image"),n=document.getElementById("homepage-banner-preview-img");[i,n].forEach(s=>{s&&(t?(s.src=t,s.alt=a,s.classList.remove("hidden")):s.classList.add("hidden"))});const r=document.getElementById("homepage-banner-preview-note");r&&(r.textContent=t?"Uploaded banner will appear at the top of the homepage only.":"No homepage banner is set yet.")};window.saveHomepageBranding=async function(e){e.preventDefault();const t={homepage_banner_image:document.getElementById("url-homepage_banner_image")?.value||"",homepage_banner_alt:document.getElementById("homepage_banner_alt")?.value||"Homepage header banner"},a=e.target.querySelector("[type=submit]");a&&(a.disabled=!0,a.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishingâ€¦',window.lucide&&lucide.createIcons());const{data:i}=await y.from("site_settings").select("id").limit(1).maybeSingle();let n;i?.id?{error:n}=await y.from("site_settings").update(t).eq("id",i.id):{error:n}=await y.from("site_settings").insert(t),n?(vt({...sa(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),b("Homepage banner saved locally because the live settings table rejected part of the update. The site now uses the override immediately.","success")):(vt({...sa(),homepage_banner_image:t.homepage_banner_image,homepage_banner_alt:t.homepage_banner_alt}),b("Homepage banner published.","success")),setTimeout(()=>Ft(),500)};const wt=[{key:"trust_promo",label:"Promotional Hero (Trust & Info Area)",icon:"sparkles",desc:"The family-receives-orders section above the app banner. Show it as-is for the built-in design, or upload the real photo/video."},{key:"app_banner",label:"Weverse Mobile App Banner",icon:"smartphone",desc:"The dark app banner at the very bottom of every page."},{key:"reviews",label:"Customer Reviews & Trust",icon:"star",desc:"The customer reviews strip just below the accordions."}];async function at(e){const t=document.getElementById("content");t&&(t.innerHTML=He());try{let a=e?{...e}:null;if(!a){const{data:i}=await y.from("site_settings").select("*").limit(1).maybeSingle(),n=i||{};a={};for(const r of wt)a[r.key+"_bg_image"]=n[r.key+"_bg_image"]||"",a[r.key+"_bg_video"]=n[r.key+"_bg_video"]||""}t.innerHTML=`
      <div class="space-y-5 fade-in">
        <h2 class="text-xl font-black text-white flex items-center gap-2"><i data-lucide="image" class="w-5 h-5 text-blue-400"></i> Promo & Backgrounds</h2>
        <p class="text-xs text-gray-500 max-w-2xl leading-relaxed">Choose an <b class="text-gray-300">image</b> and/or a <b class="text-gray-300">video</b> for each promotional section. When a video is set it plays automatically and the image acts as its poster. Leave a slot empty to keep that section’s built-in design. Changes appear instantly on every page after publishing.</p>

        <div id="promo-bg-status" class="hidden p-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-xs text-blue-300 flex items-center gap-2">
          <i data-lucide="loader-2" class="w-4 h-4 animate-spin shrink-0"></i>
          <span id="promo-bg-msg">Uploadingâ€¦</span>
        </div>

        <form id="promo-bg-form" onsubmit="savePromoBackgrounds(event)" class="space-y-5">
          ${wt.map(i=>Xr(i,a)).join("")}

          <div class="glass-soft border border-emerald-500/20 rounded-2xl p-4 flex items-center gap-3">
            <i data-lucide="info" class="w-5 h-5 text-emerald-400 shrink-0"></i>
            <p class="text-[11px] text-gray-400 leading-relaxed">Published backgrounds are cached on visitor devices for up to a minute. Publishing clears the cache so everyone sees your new media immediately.</p>
          </div>

          <button type="submit" class="btn-press w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl text-sm transition">
            <i data-lucide="rocket" class="w-4 h-4 inline mr-2"></i>Publish Promo & Backgrounds
          </button>
        </form>
      </div>`,window.lucide&&lucide.createIcons()}catch(a){t&&(t.innerHTML=`<div class="p-6 text-red-400">${d(a.message)}</div>`)}}function Xr(e,t){const a=e.key+"_bg_image",i=e.key+"_bg_video",n=t[a]||"",r=t[i]||"",s=!!(n&&n.trim()),l=!!(r&&r.trim());return`
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
          ${l?'<span class="text-[9px] font-bold text-violet-500 bg-violet-500/10 px-1.5 py-0.5 rounded-full">âœ“ Video</span>':""}
          ${s||l?"":'<span class="text-[9px] text-gray-600">Built-in design</span>'}
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${ja(e,a,n,s,"image")}
        ${ja(e,i,r,l,"video")}
      </div>
    </div>`}function ja(e,t,a,i,n){const r=n==="image",s=r?"blue":"violet",l=r?"image-plus":"video",o=r?"text-blue-400":"text-violet-400";return`
    <div>
      <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5"><i data-lucide="${l}" class="w-3 h-3 ${o}"></i>${n}</p>
      ${i?`<div class="relative group w-full h-28 rounded-xl overflow-hidden bg-gray-900 border border-${s}-500/15 flex items-center justify-center">
             ${r?`<img src="${d(a)}" class="w-full h-full object-cover" onerror="this.style.display='none'">`:`<video src="${d(a)}" class="w-full h-full object-cover" muted playsinline preload="metadata"></video>`}
             <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
               <button type="button" onclick="triggerPromoBgUpload('${t}')" class="text-xs font-bold text-white bg-${s}-600 px-3 py-1.5 rounded-lg">Replace</button>
               <button type="button" onclick="clearPromoBg('${t}')" class="text-xs font-bold text-white bg-red-600 px-3 py-1.5 rounded-lg">Remove</button>
             </div>
           </div>`:`<button type="button" onclick="triggerPromoBgUpload('${t}')" class="w-full h-28 rounded-xl border-2 border-dashed border-${s}-500/25 hover:border-${s}-500/50 flex flex-col items-center justify-center gap-1.5 transition">
             <i data-lucide="${l}" class="w-6 h-6 ${o}"></i>
             <p class="text-[10px] text-gray-500">Upload ${n}</p>
           </button>`}
      <input type="file" id="file-${t}" class="hidden" accept="${r?"image/*":"video/*"}" onchange="handlePromoBgUpload(event,'${t}')">
      <input type="hidden" name="${t}" id="val-${t}" value="${d(a)}">
      <div class="flex gap-2 mt-1.5">
        <input class="input-field text-xs flex-1" id="url-${t}" value="${d(a)}" placeholder="Or paste ${n} URL" oninput="document.getElementById('val-${t}').value=this.value">
        <button type="button" onclick="document.getElementById('url-${t}').classList.toggle('hidden')" class="text-[10px] text-${s}-400 hover:text-${s}-300 transition shrink-0">Edit URL</button>
      </div>
    </div>`}window.triggerPromoBgUpload=function(e){document.getElementById("file-"+e)?.click()};function ji(){const e={};for(const t of wt)e[t.key+"_bg_image"]=document.getElementById("val-"+t.key+"_bg_image")?.value||"",e[t.key+"_bg_video"]=document.getElementById("val-"+t.key+"_bg_video")?.value||"";return e}window.clearPromoBg=function(e){const t=ji();t[e]="";const a=document.getElementById("val-"+e),i=document.getElementById("url-"+e);a&&(a.value=""),i&&(i.value=""),at(t),b("Cleared. Publish to apply.","info")};window.handlePromoBgUpload=async function(e,t){const a=e.target.files?.[0];if(!a)return;const i=document.getElementById("promo-bg-status"),n=document.getElementById("promo-bg-msg");i&&i.classList.remove("hidden"),n&&(n.textContent=`Uploading ${a.name}â€¦`);try{const r=(a.name.split(".").pop()||"bin").toLowerCase(),s=`promo/${t}-${Date.now()}.${r}`,{error:l}=await y.storage.from("product-images").upload(s,a,{contentType:a.type,upsert:!0});let o;if(l)o=URL.createObjectURL(a),n&&(n.textContent=`Preview only (storage: ${l.message})`);else{const{data:h}=y.storage.from("product-images").getPublicUrl(s);o=h.publicUrl,n&&(n.textContent=`âœ“ ${a.name} uploaded`)}const c=document.getElementById("val-"+t),u=document.getElementById("url-"+t);c&&(c.value=o),u&&(u.value=o,u.classList.remove("hidden"));const m=ji();at(m)}catch(r){n&&(n.textContent=`Upload failed: ${r.message}`)}setTimeout(()=>i?.classList.add("hidden"),4e3)};window.savePromoBackgrounds=async function(e){e.preventDefault();const t={};for(const r of wt)t[r.key+"_bg_image"]=document.getElementById("val-"+r.key+"_bg_image")?.value||"",t[r.key+"_bg_video"]=document.getElementById("val-"+r.key+"_bg_video")?.value||"";const a=e.target.querySelector("[type=submit]");a&&(a.disabled=!0,a.innerHTML='<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline mr-2"></i>Publishingâ€¦',window.lucide&&lucide.createIcons());const{data:i}=await y.from("site_settings").select("id").limit(1).maybeSingle();let n;i?.id?{error:n}=await y.from("site_settings").update(t).eq("id",i.id):{error:n}=await y.from("site_settings").insert(t),zi(),n?(b("Publish failed â€” the settings table rejected the update. Make sure the new promo-background columns are migrated, then try again.","error"),at(t)):(b("Promo & backgrounds published across all pages.","success"),setTimeout(()=>at(),500))};window._manualPaymentAccounts=[];function ka(e="USD"){return{id:`bank-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,currency:e,currencyName:e,flag:ca("US"),country:"United States",country_code:"US",bankName:"",transferType:"Local & International",beneficiary:"",accountNumber:"",accountType:"",iban:"",swift:"",routing:"",sortCode:"",bankCode:"",branchCode:"",institutionNumber:"",transitNumber:"",bsbCode:"",address:""}}function Sa(){const e=document.getElementById("manual-payment-accounts-json");e&&(e.value=JSON.stringify(window._manualPaymentAccounts||[]))}function Zr(e,t){const a=e.country_code||"US";return`
    <div class="p-4 glass-soft border border-blue-500/10 rounded-xl space-y-3">
      <div class="flex items-center justify-between gap-3">
        <h4 class="text-xs font-black text-white flex items-center gap-2"><i data-lucide="building-2" class="w-3.5 h-3.5 text-blue-400"></i> Bank Account ${t+1}</h4>
        <button type="button" onclick="removeManualPaymentAccount(${t})" class="text-[11px] font-bold text-red-400 hover:text-red-300 transition">Remove</button>
      </div>
      <div class="form-grid form-grid-2">
        <div><label class="lbl">Currency *</label><select class="input-field" onchange="updateManualPaymentAccount(${t}, 'currency', this.value)">${ti.map(i=>`<option value="${i}" ${e.currency===i?"selected":""}>${i}</option>`).join("")}</select></div>
        <div><label class="lbl">Country *</label><select class="input-field" onchange="updateManualPaymentCountry(${t}, this.value)">${fi(a)}</select></div>
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
    </div>`}window.renderManualPaymentAccountsEditor=function(){const e=document.getElementById("manual-accounts-editor");e&&(window._manualPaymentAccounts?.length||(window._manualPaymentAccounts=[ka()]),e.innerHTML=`
    <div class="space-y-4">
      ${window._manualPaymentAccounts.map((t,a)=>Zr(t,a)).join("")}
      <button type="button" onclick="addManualPaymentAccount()" class="btn-press w-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wide transition flex items-center justify-center gap-2">
        <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Another Bank Account
      </button>
    </div>`,Sa(),window.lucide&&lucide.createIcons())};window.addManualPaymentAccount=function(){window._manualPaymentAccounts.push(ka()),renderManualPaymentAccountsEditor()};window.removeManualPaymentAccount=function(e){window._manualPaymentAccounts.splice(e,1),window._manualPaymentAccounts.length||(window._manualPaymentAccounts=[ka()]),renderManualPaymentAccountsEditor()};window.updateManualPaymentAccount=function(e,t,a){const i=window._manualPaymentAccounts[e];i&&(i[t]=a,t==="currency"&&(i.currencyName=a),Sa())};window.updateManualPaymentCountry=function(e,t){const a=window._manualPaymentAccounts[e];if(!a)return;const i=Oe.find(n=>n.code===t);a.country_code=t,a.country=i?.name||"",a.flag=i?.flag||ca(t),Sa(),renderManualPaymentAccountsEditor()};async function oa(){const e=document.getElementById("content");e&&(e.innerHTML=He());try{const{data:t}=await y.from("site_settings").select("*").limit(1).maybeSingle(),i={...on()||{},...t||{}};window._manualPaymentAccounts=un(i).map(n=>({...n})),e.innerHTML=`
      <div class="space-y-5 fade-in">
        <div class="flex items-center justify-between flex-wrap gap-3">
          <h2 class="text-xl font-black text-white">Payment Settings</h2>
          <div class="flex items-center gap-2 flex-wrap">
            ${i.payment_gateway?`<span class="badge bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Active: ${d(i.payment_gateway)}</span>`:'<span class="badge bg-amber-500/10 text-amber-400 border-amber-500/20">Not configured</span>'}
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
                <textarea class="input-field" name="manual_payment_instructions" rows="4" placeholder="Explain how customers should pay and upload their receipt.">${d(pn(i))}</textarea>
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
                <div><label class="lbl">Redirect URL (after payment)</label><input class="input-field" name="flutterwave_redirect_url" value="${d(i.flutterwave_redirect_url||"")}" placeholder="${window.location.origin}/payment.html"></div>
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
      </div>`,renderManualPaymentAccountsEditor(),window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.savePaymentSettings=async function(e){e.preventDefault();const t=new FormData(e.target),a=Object.fromEntries(t.entries()),i=["flutterwave_public_key","flutterwave_secret_key","flutterwave_encryption_key","flutterwave_webhook_secret"],n={};for(const[u,m]of Object.entries(a))i.includes(u)?m&&!m.startsWith("â€¢â€¢â€¢â€¢")&&m.trim()!==""&&(n[u]=m.trim()):n[u]=m;n.manual_payment_enabled=a.manual_payment_enabled==="on",n.flutterwave_enabled=a.flutterwave_enabled==="on";let r=[];try{r=JSON.parse(a.manual_payment_accounts_json||"[]")}catch{}n.manual_payment_accounts=r;const s=r[0]||{},l=r[1]||{};n.bank1_account_name=s.beneficiary||"",n.bank1_account_number=s.accountNumber||"",n.bank1_bank_name=s.bankName||"",n.bank1_transfer_type=s.transferType||"",n.bank1_sort_code=s.sortCode||s.routing||"",n.bank1_currency=s.currency||"USD",n.bank2_account_name=l.beneficiary||"",n.bank2_account_number=l.accountNumber||"",n.bank2_bank_name=l.bankName||"",n.bank2_transfer_type=l.transferType||"",n.bank2_sort_code=l.sortCode||l.routing||"",n.bank2_currency=l.currency||"USD",ln(n);const{data:o}=await y.from("site_settings").select("id").limit(1).maybeSingle();let c;if(o?.id?{error:c}=await y.from("site_settings").update(n).eq("id",o.id):{error:c}=await y.from("site_settings").insert(n),c){const u=String(c.message||"");if(/manual_payment_accounts|column|schema cache/i.test(u)){b("Payment settings saved locally. Run the latest migration to persist them to Supabase.","info"),console.warn(c),setTimeout(()=>oa(),500);return}b("Save failed: "+c.message,"error"),console.error(c);return}b("âœ… Payment settings saved successfully!","success"),setTimeout(()=>oa(),500)};window.testFlutterwaveKeys=async function(){const{data:e}=await y.from("site_settings").select("flutterwave_public_key").limit(1).maybeSingle();if(!e?.flutterwave_public_key){b("Save your Flutterwave public key first","info");return}b("Flutterwave key is saved. Use test mode + test card to verify a payment flow.","info")};async function Ut(){const e=document.getElementById("content");try{const{data:t}=await y.from("site_settings").select("*").limit(1).maybeSingle(),a=t||{};e.innerHTML=`
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
              <input class="input-field" name="deploy_webhook" value="${d(a.deploy_webhook||"")}" placeholder="https://api.netlify.com/build_hooks/â€¦">
              <p class="text-[10px] text-gray-500 mt-1">Netlify: Site Settings â†’ Build hooks Â· Vercel: Project â†’ Settings â†’ Git â†’ Deploy Hooks</p>
            </div>
            <div>
              <label class="lbl">Production URL</label>
              <input class="input-field" name="production_url" value="${d(a.production_url||"")}" placeholder="https://yoursite.com">
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
      </div>`,window.lucide&&lucide.createIcons()}catch(t){e&&(e.innerHTML=`<div class="p-6 text-red-400">${d(t.message)}</div>`)}}window.saveDeploySettings=async function(e){e.preventDefault();const t=e.target?.querySelector("[type=submit]");t&&(t.disabled=!0,t.innerHTML="Savingâ€¦");const a=new FormData(e.target),i=Object.fromEntries(a.entries()),n={},r=["github_token","payment_public_key","payment_secret_key","payment_webhook_secret"];for(const[l,o]of Object.entries(i))r.includes(l)?o&&!o.startsWith("â€¢")&&o.trim()!==""&&(n[l]=o.trim()):n[l]=o;const{error:s}=await y.from("site_settings").upsert({id:1,...n});if(t&&(t.disabled=!1,t.innerHTML="ðŸ’¾ Save Deploy & Payment Settings"),s){b(s.message,"error");return}b("Deploy & payment settings saved!"),Ut()};async function Oi(e="deploy"){const{data:t}=await y.from("site_settings").select("deploy_webhook,production_url,github_repo").limit(1).maybeSingle();if(!t?.deploy_webhook)return b("No webhook URL set. Add your deploy webhook in the settings below.","info"),{ok:!1,reason:"missing_webhook"};let a=t.deploy_webhook;try{const i=new URL(a);e==="rebuild"&&i.searchParams.set("rebuild","1"),a=i.toString()}catch{e==="rebuild"&&(a+=(a.includes("?")?"&":"?")+"rebuild=1")}return{ok:!0,settings:t,hookUrl:a}}async function xe(e,t={}){const a=t.version||new Date().toISOString(),i={source:"admin-dashboard",mode:t.mode||"deploy",production_url:t.productionUrl||null,github_repo:t.githubRepo||null,webhook:t.webhook||null,message:t.message||null},{data:n,error:r}=await y.from("deployment_history").insert({version:a,status:e,triggered_by_email:I.user?.email||null,metadata:i,error_message:t.errorMessage||null}).select("id").limit(1).maybeSingle();return{data:n,error:r}}function je(e,t,a,i){if(!e)return;e.disabled=t;const n=e.querySelector("p.text-xs.font-black");n&&(n.textContent=t?a:i)}window.triggerDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-deploy-btn]");je(t,!0,"Deployingâ€¦","Deploy Now");try{const a=await Oi("deploy");if(!a.ok)return;const{settings:i,hookUrl:n}=a;await xe("preparing",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,message:"Deployment queued from admin UI"});const r=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"deploy",source:"admin-dashboard",at:new Date().toISOString()})});if(r.ok)b("ðŸš€ Deployment triggered! Your site will be live in ~2 minutes."),await xe("deploying",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,message:"Webhook accepted deployment request"}),setTimeout(()=>Ut(),400);else{const s=`Webhook returned error: ${r.status}`;b(s,"error"),await xe("failed",{mode:"deploy",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,errorMessage:s})}}catch(a){b("Deploy failed: "+a.message,"error"),await xe("failed",{mode:"deploy",errorMessage:a.message})}finally{je(t,!1,"Deployingâ€¦","Deploy Now")}};window.triggerRebuild=async function(e){const t=e?.currentTarget||document.querySelector("[data-rebuild-btn]");je(t,!0,"Rebuildingâ€¦","Rebuild Site");try{const a=await Oi("rebuild");if(!a.ok)return;const{settings:i,hookUrl:n}=a;await xe("building",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,message:"Rebuild requested from admin UI"});const r=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({trigger:"rebuild",source:"admin-dashboard",at:new Date().toISOString()})});if(r.ok)b("ðŸ”„ Rebuild triggered successfully."),await xe("deploying",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,message:"Webhook accepted rebuild request"}),setTimeout(()=>Ut(),400);else{const s=`Rebuild webhook error: ${r.status}`;b(s,"error"),await xe("failed",{mode:"rebuild",productionUrl:i.production_url,githubRepo:i.github_repo,webhook:n,errorMessage:s})}}catch(a){b("Rebuild failed: "+a.message,"error"),await xe("failed",{mode:"rebuild",errorMessage:a.message})}finally{je(t,!1,"Rebuildingâ€¦","Rebuild Site")}};window.publishAndDeploy=async function(e){const t=e?.currentTarget||document.querySelector("[data-publish-easy-btn]");je(t,!0,"Publishingâ€¦","One-Click Publish");try{const a=document.getElementById("deploy-form");if(!a){b("Deploy form is not available. Reload and try again.","error");return}await window.saveDeploySettings({preventDefault(){},target:a}),await window.triggerDeploy()}catch(a){b("Publish failed: "+a.message,"error")}finally{je(t,!1,"Publishingâ€¦","One-Click Publish")}};window.reindexSearch=async function(){const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=t?.textContent||"";t&&(t.textContent="Reindexingâ€¦");try{const{data:i,error:n}=await y.from("showroom_listings").select("id, updated_at").order("updated_at",{ascending:!1});if(n)return J(n)?b("âš ï¸ Reindex blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):b("Could not load listings to reindex: "+n.message,"error");const r=i||[];if(!r.length){b("No listings to reindex.");return}let s=0,l=0,o=!1;const c=40;for(let u=0;u<r.length;u+=c){const m=r.slice(u,u+c),{error:h}=await y.from("showroom_listings").update({updated_at:new Date().toISOString()}).in("id",m.map(f=>f.id));h?(J(h)&&(o=!0),l+=m.length):s+=m.length,t&&(t.textContent=`Reindexingâ€¦ ${Math.min(u+c,r.length)}/${r.length}`)}if(o){b(`âš ï¸ Reindex partially blocked: database admin role rejected some writes. Re-run the admin permission migration. (${s}/${r.length} done)`,"error");return}b(`Search index rebuilt for ${s} listing${s!==1?"s":""}${l?` (${l} failed)`:""}.`,l?"error":"success")}catch(i){b("Reindex failed: "+i.message,"error")}finally{t&&(t.textContent=a)}};window.syncShowroomToDB=async function(){if(!Array.isArray(re)||!re.length){b("No static showroom listings found to sync.","info");return}const t=(document.querySelector("[data-publish-easy-btn]")||document.querySelector("[data-rebuild-btn]"))?.querySelector("p.text-xs.font-black"),a=t?.textContent||"";t&&(t.textContent="Syncingâ€¦");try{const{data:i,error:n}=await y.from("showroom_listings").select("property_id");if(n)return J(n)?b("âš ï¸ Sync blocked: database admin role rejected the read. Re-run the admin permission migration.","error"):b("Could not load existing listings: "+n.message,"error");const r=new Set((i||[]).map(m=>m.property_id)),s=re.filter(m=>m&&m.property_id&&!r.has(m.property_id));if(!s.length){b("Showroom already in sync â€” no new listings to add.");return}let l=0,o=0,c=!1;const u=20;for(let m=0;m<s.length;m+=u){const h=s.slice(m,m+u).map(p=>({property_id:p.property_id,listing_type:p.listing_type||"product",category:p.category||null,subcategory:p.subcategory||null,title:p.title||"Untitled Listing",description:p.description||"",price:parseFloat(p.price)||0,currency:p.currency||"USD",country:p.country||"",country_code:p.country_code||"",state:p.state||"",city:p.city||"",town:p.town||"",product_location:p.product_location||"",latitude:p.latitude??null,longitude:p.longitude??null,property_type:p.property_type||null,listing_status:p.listing_status||"sale",bedrooms:p.bedrooms??null,bathrooms:p.bathrooms??null,building_size:p.building_size||"",land_size:p.land_size||"",parking_spaces:p.parking_spaces??null,furnished:p.furnished||"",features:Array.isArray(p.features)?p.features:[],tags:Array.isArray(p.tags)?p.tags:[],highlights:Array.isArray(p.highlights)?p.highlights:[],seo_keywords:Array.isArray(p.seo_keywords)?p.seo_keywords:[],images:Array.isArray(p.images)?p.images:[],brand:p.brand||null,color:p.color||null,size:p.size||null,condition:p.condition||null,warranty:p.warranty||null,availability_status:p.availability_status||"In Stock",stock_quantity:p.stock_quantity!=null?parseInt(p.stock_quantity,10):null,is_active:p.is_active!==!1,is_featured:!!p.is_featured,is_ai_generated:!!p.is_ai_generated,ai_generated_fields:Array.isArray(p.ai_generated_fields)?p.ai_generated_fields:[],specifications:p.specifications||{},created_at:p.created_at||new Date().toISOString()})),{error:f}=await y.from("showroom_listings").insert(h);f?(J(f)&&(c=!0),o+=h.length):l+=h.length,t&&(t.textContent=`Syncingâ€¦ ${Math.min(m+u,s.length)}/${s.length}`)}if(c){b(`âš ï¸ Sync partially blocked: database admin role rejected some inserts. Re-run the admin permission migration. (${l}/${s.length} added)`,"error");return}b(`Showroom synced: ${l} new listing${l!==1?"s":""} added to the database${o?` (${o} failed)`:""}.`,o?"error":"success")}catch(i){b("Sync failed: "+i.message,"error")}finally{t&&(t.textContent=a)}};window.testGitHubConnection=async function(){const e=document.querySelector("[name=github_username]")?.value?.trim(),t=document.querySelector("[name=github_repo]")?.value?.trim();if(!e||!t){b("Enter your GitHub username and repo name first","info");return}try{const a=await fetch(`https://api.github.com/repos/${e}/${t}`);if(a.ok){const i=await a.json();b(`âœ“ Connected: ${i.full_name} (${i.visibility})`)}else a.status===404?b("Repository not found. Check username and repo name.","error"):b("GitHub API error: "+a.status,"error")}catch{b("Could not reach GitHub API","error")}};window.deployToProduction=window.triggerDeploy;window.rebuildSite=window.triggerRebuild;const qi=30,V={category:null,page:0,query:""};async function Ye(){const e=document.getElementById("content");if(!e)return;await la();const t=new Set(_t()),a=Wi();V.category||(V.category=a[0]?.slug||null);const i=0,n=V.query.trim().toLowerCase(),r=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-xl font-black text-white">Generated Catalog</h2>
        <p class="text-xs text-gray-500 mt-1">Deterministic storefront items. Hiding a listing removes it from the site everywhere â€” including direct links.</p>
      </div>
      <button onclick="catalogResetHidden()" class="btn-press px-3 py-2 rounded-xl text-xs font-bold bg-red-500/10 text-red-300 border border-red-500/25 hover:bg-red-500/20 transition">Show All Hidden</button>
    </div>`,s=`
    <div class="flex flex-wrap gap-2">
      ${a.map(h=>`<button onclick="catalogSetCategory('${h.slug}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${V.category===h.slug?"bg-blue-500/20 text-blue-200 border-blue-500/40":"bg-white/5 text-gray-400 border-white/10 hover:text-white"}">${d(h.name)}</button>`).join("")}
    </div>`,l=`
    <div class="flex flex-wrap items-center gap-2">
      <input id="catalog-search-input" class="input-field flex-1 min-w-[220px]" placeholder="Search title, id or subcategoryâ€¦" value="${d(V.query)}" onkeyup="if (event.key === 'Enter') catalogSearch()">
      <button onclick="catalogSearch()" class="btn-press px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition">Search</button>
    </div>`;let o=[];const c=o.length?o.map(h=>{const f=t.has(h.property_id),p=h.images&&h.images[0]||"/fallback.svg";return`
          <div class="flex items-center gap-3 p-3 rounded-xl border ${f?"border-red-500/25 bg-red-500/5":"border-white/10 bg-white/[0.02]"}">
            <img src="${d(p)}" alt="" class="w-12 h-12 rounded-lg object-cover bg-gray-800 shrink-0" loading="lazy">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-white truncate">${d(h.title)}</p>
              <p class="text-[11px] text-gray-500 truncate">${d(h.property_id)} Â· ${d(h.subcategory||h.category||"")} Â· ${ai(h.price,"USD")}</p>
            </div>
            ${K(!f)}
            <button onclick="catalogToggle('${d(h.property_id)}')" class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold border transition ${f?"bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25":"bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20"}">
              ${f?"Show":"Hide"}
            </button>
          </div>`}).join(""):'<div class="text-center py-16 text-gray-500 text-sm">No catalog items match.</div>',u=n?1:Math.max(1,Math.ceil(i/qi)),m=`
    <div class="flex flex-wrap items-center justify-between gap-3">
      <p class="text-xs text-gray-500">${n?`${o.length} match`:`${i.toLocaleString()} items in ${d("")}`} Â· ${t.size} hidden</p>
      <div class="flex items-center gap-2">
        <button onclick="catalogPage(-1)" ${V.page<=0?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Prev</button>
        <span class="text-xs text-gray-500">Page ${V.page+1} / ${u}</span>
        <button onclick="catalogPage(1)" ${V.page>=u-1?"disabled":""} class="btn-press px-3 py-1.5 rounded-xl text-xs font-bold bg-white/5 text-gray-300 border border-white/10 hover:text-white disabled:opacity-40">Next</button>
      </div>
    </div>`;e.innerHTML=`
    <div class="space-y-4 fade-in">
      ${r}
      ${s}
      ${l}
      <div class="glass-soft border border-blue-500/15 rounded-2xl p-3 space-y-2">${c}</div>
      ${m}
    </div>`,window.lucide&&lucide.createIcons()}window.catalogSetCategory=function(e){V.category=e,V.page=0,V.query="",Ye()};window.catalogSearch=function(){const e=document.getElementById("catalog-search-input");V.query=e?e.value:"",V.page=0,Ye()};window.catalogPage=function(e){const a=V.query.trim()?1:Math.max(1,Math.ceil(0/qi));V.page=Math.max(0,Math.min(a-1,V.page+e)),Ye()};window.catalogToggle=async function(e){const t=!_t().includes(e),a=await qe(e,t);b(t?"Listing hidden from storefront":"Listing restored",a.ok?"success":"info"),Ye()};window.catalogResetHidden=async function(){await en(),b("All hidden catalog listings restored"),Ye()};(function(){if(!(!window.history||!window.history.pushState)){try{window.history.replaceState({adminGuard:1},document.title,window.location.href),window.history.pushState({adminGuard:2},document.title,window.location.href)}catch{return}window.addEventListener("popstate",function(t){t.state&&t.state.adminGuard===1&&window.location.replace("/")})}})();async function Oa(){window.lucide&&lucide.createIcons(),ii(),await Cn(),y.auth.onAuthStateChange((e,t)=>{if(e==="SIGNED_OUT"){I.user=null;const a=document.getElementById("login-screen");a&&(a.style.display="flex")}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Oa):Oa();
