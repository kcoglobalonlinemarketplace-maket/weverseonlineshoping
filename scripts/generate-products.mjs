// Generates product listings from the owner's downloaded images.
// Reads the copy manifest + OCR results and emits src/products-extra.js
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const TEMP = 'C:/Users/HP/AppData/Local/Temp/opencode';
const manifestRaw = fs.readFileSync(path.join(TEMP, 'products-manifest.csv'), 'utf8');
// CSV parse (simple, our data has no embedded commas in names/... it does, but Name/Source are last)
const lines = manifestRaw.split(/\r?\n/).filter(Boolean);
const manifest = [];
for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  // format: "Name","Source"
  const m = line.match(/^"([^"]+)","(.*)"$/);
  if (m) manifest.push({ Name: m[1], Source: m[2] });
  else manifest.push({ Name: line.split(',')[0].replace(/"/g, ''), Source: line.split(',').slice(1).join(',').replace(/"/g, '') });
}

const ocrRaw = JSON.parse(fs.readFileSync(path.join(TEMP, 'ocr-results.json'), 'utf8').replace(/^\uFEFF/, ''));
const ocrMap = new Map(ocrRaw.map((r) => [r.file, r.text || '']));

// Skip the first 38 (already hand-listed as gold-diamond-ring etc.)
const NEW = manifest.filter((r) => {
  const m = r.Name.match(/^p0?(\d+)\./);
  if (!m) return false;
  const n = parseInt(m[1], 10);
  return n >= 39;
});

function cleanTitle(source) {
  let t = source.replace(/\.(jpe?g|png|webp|gif|bmp)$/i, '');
  t = t.replace(/^download\s*(?:\((\d+)\))?\s*-\s*\d{4}-\d{2}-\d{2}T\d{6}/, '');
  t = t.replace(/^download\s*(?:\((\d+)\))?\s*-\s*/, '');
  t = t.replace(/\s*[\-\_|]\s*/g, ' ');
  t = t.replace(/\bAmazon_com_|amazon\.com|AliExpress|Etsy|Shopee|Instagram|Facebook|TikTok|Pinterest|LTK|Walmart|Target\b/gi, '');
  t = t.replace(/\bOrder via IG_whatsapp\b|\bWhatsApp\b|\binbox us\b|\bContact on\b|\+?\d[\d\s\-]{6,}/gi, '');
  t = t.replace(/\bPRICE[:_\-]?\s*[\d,\.]+/gi, '');
  t = t.replace(/\b(?:^|\s)[\d,\.]{3,}(?:\.\d+)?\s*(?:USD|US\$|\$)\b/gi, '');
  t = t.replace(/[#\[\]\(\)"']/g, '');
  t = t.replace(/\s{2,}/g, ' ').trim();
  t = t.replace(/^[\s\-\_|]+|[\s\-\_|]+$/g, '');
  if (t.length > 70) t = t.slice(0, 70).trim().replace(/\s+\S*$/, '');
  return t;
}

const CATEGORY_RULES = [
  { re: /\b(air ?fryer|waffle|oven|microwave|toaster|blender|chopper|food ?processor|fry|pot|pan|kettle|egg ?poach|kitchen|bakeware|cookware|casserole|mug|utensil|storage container|food storage|organizer|dispenser|measur|slicer|grater|stove|cooker|rice)\b/i, cat: 'Kitchen Appliances', price: 35 },
  { re: /\b(fridge|refrigerator|freezer|washer|dryer|laundry|washing)\b/i, cat: 'Appliances', price: 320 },
  { re: /\b(tv|television|screen|qled|oled|uhd|4k|smart tv)\b/i, cat: 'Electronics & TVs', price: 450 },
  { re: /\b(air ?cooler|air ?condition|ac |cooler|fan|purifier|humidifier|heater|water pump|water dispenser|dispenser)\b/i, cat: 'Home Appliances', price: 90 },
  { re: /\b(mop|vacuum|dyson|shark|duster|broom|cleaning|cleaner|sanitiz|mop pad|bucket|spin mop|bottle brush|window vacuum|floor tool)\b/i, cat: 'Cleaning Supplies', price: 45 },
  { re: /\b(shoe|sneaker|flats|heels|heel |pump|boot|trainer|sandal|footwear)\b/i, cat: 'Fashion Shoes', price: 40 },
  { re: /\b(dress|top |skirt|jeans|sweater|sweatshirt|shirt|hoodie|jacket|outfit|clothing|apparel|t-shirt|tshirt|blouse|pants|fashion|wear)\b/i, cat: 'Fashion Clothing', price: 25 },
  { re: /\b(handbag|bag|purse|satchel|shoulder bag|crossbody|tote|backpack|clutch)\b/i, cat: 'Bags & Handbags', price: 45 },
  { re: /\b(watch|rolex|timepiece|wristwatch)\b/i, cat: 'Watches', price: 220 },
  { re: /\b(ring|necklace|bracelet|jewel|gold|diamond|bangle|earring|pendant|chain|anklet)\b/i, cat: 'Jewelry', price: 80 },
  { re: /\b(iphone|phone|smartphone|case|mobile)\b/i, cat: 'Phone Accessories', price: 35 },
  { re: /\b(car|truck|vehicle|suv|sedan|cybertruck|mercedes|bmw|ford|toyota|tesla|range rover|evoque|kenworth|lambo|lamborghini|porsche|honda|quad|bike|motorcycle|motorbike|scooter|electric bike)\b/i, cat: 'Vehicles', price: 15000 },
  { re: /\b(motorhome|rv|camper|van)\b/i, cat: 'Motorhomes', price: 30000 },
  { re: /\b(bedding|bed set|blanket|sheet|pillow|duvet|mattress|towel)\b/i, cat: 'Home Textiles', price: 30 },
  { re: /\b(furniture|sofa|couch|chair|table|shelf|rack|storage|organizer|basket|wardrobe|hanger|stand|cabinet|drawer)\b/i, cat: 'Home Storage & Furniture', price: 55 },
  { re: /\b(decoration|decor|home goods|homegoods|home decor|rug|mat |wall|art|vase|candle|lamp|light)\b/i, cat: 'Home Decor', price: 40 },
  { re: /\b(toy|doll|lego|puzzle|stuffed|plush|kids|baby|child|ride|bike for|kiddie|play)\b/i, cat: 'Toys & Kids', price: 20 },
  { re: /\b(pet|dog|puppy|cat|kitten|animal)\b/i, cat: 'Pets & Pet Supplies', price: 25 },
  { re: /\b(tool|wrench|socket|drill|hammer|screwdriver|hardware|gardening|garden|roof)\b/i, cat: 'Tools & Hardware', price: 40 },
];

function classify(title, ocr) {
  const hay = (title + ' ' + ocr);
  for (const r of CATEGORY_RULES) {
    if (r.re.test(hay)) return { cat: r.cat, price: r.price };
  }
  return { cat: 'Products', price: 30 };
}

const out = [];
let idx = 0;
for (const item of NEW) {
  idx++;
  const src = item.Source;
  const file = item.Name;
  const ocr = (ocrMap.get(file) || '').trim();
  let title = cleanTitle(src);
  // If the cleaned title is too generic, prefer OCR brand/product text
  const generic = !title || /^download|^\d+$|^p\d|^$|^images$/.test(title);
  if ((generic || title.length < 4) && ocr && !/^[0-9\s]+$/.test(ocr)) {
    title = cleanTitle(ocr);
  }
  if (!title || title.length < 3) {
    title = 'Shop Product ' + String(idx).padStart(3, '0');
  }
  title = title.charAt(0).toUpperCase() + title.slice(1);
  const { cat, price } = classify(title, ocr);
  const pid = 'W-PX' + String(idx).padStart(4, '0');
  out.push({
    property_id: pid,
    listing_type: 'product',
    category: cat,
    subcategory: 'New Arrival',
    title,
    description: `${title} — a quality new arrival at Weverse Online Shop, priced affordably for fast global delivery. Condition new, ready to ship worldwide.`,
    price,
    currency: 'USD',
    brand: 'Weverse',
    condition: 'New',
    color: 'Black',
    availability_status: 'In Stock',
    stock_quantity: 10,
    listing_status: 'sale',
    images: [`/products/${file}`],
    rating: 4.5,
    rating_count: 5,
    favorite_count: 3,
    features: ['New Arrival', 'Affordable Price', 'Fast Worldwide Delivery', 'Quality Guaranteed'],
  });
}

fs.writeFileSync(path.join(ROOT, 'src', 'products-extra.js'),
  '// Auto-generated product listings from the owner\'s downloaded images.\n// 10 cards per showroom line. Do not edit by hand — regenerate via scripts.\n\nexport const PRODUCT_EXTRA_LISTINGS = ' +
  JSON.stringify(out, null, 2) + ';\n', 'utf8');

console.log('Wrote ' + out.length + ' generated listings to src/products-extra.js');
// Summary by category
const byCat = {};
out.forEach((l) => { byCat[l.category] = (byCat[l.category] || 0) + 1; });
console.log(byCat);