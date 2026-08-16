// scripts/recategorize.mjs - FREE re-sort of downloaded Pinterest products.
// Uses only free text (Source filename + OCR) to give each product a
// professional category, brand and title. Nothing else is edited.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const TEMP = 'C:/Users/HP/AppData/Local/Temp/opencode';
const OUT = path.join(ROOT, 'src', 'products-extra.js');
const fileUrl = (p) => pathToFileURL(p).href;

const srcMap = {};
for (const line of fs.readFileSync(path.join(TEMP, 'products-manifest.csv'), 'utf8').split(/\r?\n/).filter(Boolean).slice(1)) {
  const m = line.match(/^"(.+)","(.*)"$/);
  if (m) srcMap[m[1]] = m[2];
}
let ocrMap = new Map();
try {
  const raw = JSON.parse(fs.readFileSync(path.join(TEMP, 'ocr-results.json'), 'utf8').replace(/^\uFEFF/, ''));
  ocrMap = new Map(raw.map((r) => [r.file, r.text || '']));
} catch {}

const { PRODUCT_EXTRA_LISTINGS } = await import(fileUrl(OUT));

const BRAND_PATTERNS = [
  [/rolex/i,'Rolex'],[/kitchenaid|kitchen aid/i,'KitchenAid'],[/bosch/i,'Bosch'],
  [/philips/i,'Philips'],[/loui\s*ton|vuitton|loutton/gi,'Louis Vuitton'],[/nyh/i,'NYH Jewelry'],
  [/goldgenie/i,'Goldgenie'],[/obozo |oozo/i,'OOZO'],[/paris/i,'Paris'],[/transcend/i,'Transcend'],
];
function brandOf(h){ for(const[r,b]of BRAND_PATTERNS) if(r.test(h)) return b; return null; }

const RULES = [
  { c:'Trucks', p:15000, k:['truck','kenworth','pickup','big rig','semi','box truck','heavy duty','dump truck'] },
  { c:'Cars & Vehicles', p:12000, k:['car','vehicles','suv','sedan','coupe','mercedes','bmw','tesla','toyota','ford','porsche','lambo','lamborghini','range rover','evoque','honda','kia','audi','lexus','jeep','hyundai','nissan','tires','wheels','rims','cyber','quad','motorcycle','motorbike','scooter','auto'] },
  { c:'Houses & Real Estate', p:180000, k:['for sale','for rent','house','home','apartment','apartments','villa','mansion','property','real estate','listing','sold sign','bedroom','bathroom','duplex','condo','estate','pima canyon','pittsburg'] },
  { c:'Motorhomes', p:35000, k:['motorhome','rv ','camper','caravan','toy hauler'] },
  { c:'Watches', p:300, k:['rolex','watch','timepiece','chrono','wrist watch'] },
  { c:'Jewelry', p:150, k:['ring','gold','diamond','bangle','necklace','bracelet','earring','pendant','chain','cttw','14k','18k','24k','karat','jewel','parure','gem','sterling'] },
  { c:'Babies & Kids', p:30, k:['baby','kids','child','toddler','diaper','stroller','pram','carseat','crib','nursery','toy ','children','minnie','doll','lego','plush'] },
  { c:'Kitchen & Appliances', p:60, k:['air fryer','airfryer','fryer','oven','microwave','toaster','blender','mixer','kettle','cook','crock','saucepan','pan ','pot ','grill','slow cooker','bread maker','breadmaker','jaffle','grilled','kitchen','fridge','refrigerator','freezer','dispenser','water dispenser','cooler','soda','food'] },
  { c:'Home Appliances & Cleaning', p:90, k:['vacuum','cleaner','mop','pressure washer','washer','dryer','fan ','table fan','purifier','humidifier','party light','lamp','light ','stand'] },
  { c:'Fashion & Shoes', p:45, k:['fashion','dress','silk','scarf','shoe','shoes','heels','flats','sneaker','bag ','handbag','pump ','purse','sandal','apparel','skirt','blouse','t-shirt','jacket','louis','vuitton'] },
  { c:'Electronics', p:120, k:['philips','sony','speaker','headphone','earphone','headset','smart tv','television','phone','charger','power bank','camera','laptop','bluetooth','rf wireless','transcend','audio','projector','drone'] },
{ c:'Tools & Hardware', p:50, k:['drill','wrench','screwdriver','hardware','tool ','grinder','sander','inverter','hydraulic','gpm','psi ','socket','hammer'] },
  { c:'Beauty & Personal Care', p:35, k:['nail','makeup','cosmetic','perfume','skincare','serum','hair ','clipper','shaver','mirror','lotion'] },
  { c:'Home Decor & Storage', p:40, k:['decor','frame','vase','candle','rug','basket','storage','organizer','rack','soap box','wall mount','shelf'] },
];
const cleanTok = (s)=>String(s||'').toLowerCase().replace(/[^a-z0-9\s/"-]/g,' ');
function title(src,ocr){
  let t=String(src||'').replace(/\.[a-z0-9]+$/i,'').replace(/^download\s*(?:\(\d+\))?/i,'')
    .replace(/^images?$/i,'').replace(/[\-_|]+/g,' ')
    .replace(/pinterest|amazon|aliexpress|etsy|shopee|instagram|facebook|tiktok|ltk|walmart|target|whatsapp|inbox|contact|order via/gi,'')
    .replace(/\s{2,}/g,' ').trim();
  if(t.length<4&&ocr){const o=String(ocr).replace(/[^a-z0-9 .,&'-]/gi,' ').replace(/\s{2,}/g,' ').trim();if(o.length>3&&o.length<80)t=o;}
  if(!t||t.length<3)return null;
  const minor=new Set(['of','the','and','for','a','an','to','in','on','with','at']);
  t=t.toLowerCase().split(/\s+/).map((w,i)=>(i!==0&&minor.has(w))?w:w.charAt(0).toUpperCase()+w.slice(1)).join(' ');
  if(t.length>70)t=t.slice(0,70).replace(/\s+\S*$/,'');
  if(!t||/^\d+$/.test(t)) return null;
  return t;
}

function cls(file){
  const src=srcMap[file]||'';
  const ocr=ocrMap.get(file)||'';
  const hay=cleanTok(src)+' '+cleanTok(ocr);
  const br=brandOf(hay);
  for(const r of RULES) for(const k of r.k) if(hay.includes(k))
    return {c:r.c,p:r.p,b:br||'Weverse',t:title(src,ocr)||`${br||'Weverse'} ${r.c}`};
  return {c:'New Arrivals',p:30,b:br||'Weverse',t:title(src,ocr)||'New Arrival'};
}

const out=[]; const counts={}; let na=0;
for(const l of PRODUCT_EXTRA_LISTINGS){
  const f=l.images?.[0]?.replace(/^\/products\//,'')||'';
  let {c,b,t,p}=cls(f);
  if(c==='New Arrivals'){ na++; b=b||'Weverse'; t=`Weverse New Arrival ${String(na).padStart(3,'0')}`; }
  counts[c]=(counts[c]||0)+1;
  out.push({...l,category:c,brand:b,title:t,
    description:`${t} - a professional new arrival at Weverse Online Shop. Quality checked, priced for fast worldwide delivery.`,
    price:p>0?p:l.price});
}
fs.writeFileSync(OUT,
 '// Auto-generated product listings from the owner downloaded images.\n// One line per category (Cars, Houses, Babies & Kids, Kitchen, ...). Do not edit by hand.\n\nexport const PRODUCT_EXTRA_LISTINGS = '+
 JSON.stringify(out,null,2)+';\n','utf8');

console.log('Re-categorized '+out.length+' products.');
console.log('\nCategory lines:');
Object.entries(counts).sort((a,b)=>b[1]-a[1]).forEach(([c,n])=>console.log('  '+String(c).padEnd(30)+n));