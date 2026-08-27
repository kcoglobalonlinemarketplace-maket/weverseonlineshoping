// scripts/import-downloads.mjs — Bulk import of today's downloaded product
// images into the showroom_listings table using plain fetch (no supabase-js,
// which fails on this machine).
//
// For each image found in the Downloads folder (modified today):
//   1. Upload it to the public `product-images` storage bucket.
//   2. Insert a minimal product row (image + filename-derived title + $0
//      placeholder) so it appears in the showroom with the exact same card as
//      every other product.
//   3. The admin then runs the "General AI Scanner" to fill title/price/
//      category/description from the photo.
//
// Requires VITE_SUPABASE_SERVICE_ROLE_KEY in .env (removed after the run).
//
// Usage: node scripts/import-downloads.mjs [--dry-run]

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const DRY_RUN = process.argv.includes('--dry-run');

function loadEnv() {
  const envPath = path.join(process.cwd(), '.env');
  const out = {};
  if (!fs.existsSync(envPath)) return out;
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) out[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
  }
  return out;
}

const env = loadEnv();
const SUPABASE_URL = (env.VITE_SUPABASE_URL || 'https://wttnvwpoqmbxryivcerf.supabase.co').replace(/\/$/, '');
const SERVICE_ROLE_KEY = env.VITE_SUPABASE_SERVICE_ROLE_KEY || '';

if (!SERVICE_ROLE_KEY) {
  console.error('✗ Missing VITE_SUPABASE_SERVICE_ROLE_KEY in .env. Add it, then re-run.');
  process.exit(1);
}
if (!SUPABASE_URL) {
  console.error('✗ Missing VITE_SUPABASE_URL in .env.');
  process.exit(1);
}

const BUCKET = 'product-images';
const headers = {
  apikey: SERVICE_ROLE_KEY,
  Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
};

async function api(pathname, { method = 'GET', body, contentType, extraHeaders } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  let res;
  try {
    res = await fetch(`${SUPABASE_URL}${pathname}`, {
      method,
      signal: controller.signal,
      headers: contentType ? { ...headers, ...extraHeaders, 'Content-Type': contentType } : { ...headers, ...extraHeaders },
      body,
    });
  } finally {
    clearTimeout(timer);
  }
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status} ${pathname}: ${text.slice(0, 300)}`);
  }
  return res;
}

async function apiRetry(pathname, opts, tries = 3) {
  for (let attempt = 1; attempt <= tries; attempt++) {
    try {
      return await api(pathname, opts);
    } catch (err) {
      if (attempt === tries) throw err;
      await new Promise((r) => setTimeout(r, 500 * attempt));
    }
  }
}

const DOWNLOADS = path.join(os.homedir(), 'Downloads');
const IMG_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const startOfToday = new Date();
startOfToday.setHours(0, 0, 0, 0);

let files;
try {
  files = fs.readdirSync(DOWNLOADS)
    .map((name) => ({ name, full: path.join(DOWNLOADS, name), stat: fs.statSync(path.join(DOWNLOADS, name)) }))
    .filter((f) => f.stat.isFile())
    .filter((f) => IMG_EXT.has(path.extname(f.name).toLowerCase()))
    .filter((f) => f.stat.mtime >= startOfToday)
    .sort((a, b) => a.name.localeCompare(b.name));
} catch (err) {
  console.error(`✗ Cannot read ${DOWNLOADS}:`, err.message);
  process.exit(1);
}

if (!files.length) {
  console.error('✗ No image files modified today in Downloads.');
  process.exit(1);
}
console.log(`Found ${files.length} images downloaded today. ${DRY_RUN ? '(DRY RUN — nothing will be written)' : ''}`);

function cleanTitle(filename) {
  let t = filename.replace(/\.[^.]+$/, '');
  t = t.replace(/[_-]+/g, ' ');
  t = t.replace(/\.\.+/g, ' ');
  t = t.replace(/\s{2,}/g, ' ').trim();
  return t
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ')
    .slice(0, 120) || 'Product';
}

function guessCategory(filename) {
  const n = filename.toLowerCase();
  const map = [
    [/baby|newborn|onesie|bodysuit|layette|kids|toddler|bibs?|infant/, 'Babies & Kids'],
    [/watch|wristwatch|timepiece/, 'Watches'],
    [/jewel|necklace|bracelet|earring|ring|diamond|gold|silver|cross|chain|pendant|moissanite/, 'Jewelry'],
    [/iphone|android|smartphone|pixel|samsung|phone|tablet/, 'Phones'],
    [/laptop|macbook|computer|pc|gaming|monitor|keyboard|mouse|wifi|dongle/, 'Computers'],
    [/tv|television|led|smart tv|screen/, 'Electronics'],
    [/playstation|ps5|console|gaming/, 'Gaming'],
    [/car|truck|vehicle|toyota|mercedes|bmw|tesla|motorcycle|scooter/, 'Cars'],
    [/rv|motorhome|camper|coachmen|thor|fleetwood|forest river/, 'Motorhomes'],
    [/washing|laundry|washer|dryer/, 'Home Appliances'],
    [/fridge|refrigerator|freezer/, 'Kitchen & Appliances'],
    [/sofa|chair|recliner|beanbag|furniture|couch|bed|mattress|pillow|mattress topper/, 'Home Decor & Storage'],
    [/air ?condition|ac |cooler|fan|air conditioner/, 'Electronics'],
    [/drill|tool|toolbox|screwdriver|wrench/, 'Tools & Hardware'],
    [/shirt|hoodie|dress|jacket|sweatshirt|pants|outfit|apparel|fashion|clothes|bodysuit/, 'Fashion & Shoes'],
    [/handbag|tote|bag|purse|gucci|coach|saint laurent/, 'Fashion & Shoes'],
    [/tumbler|stanley|cup|mug|bottle/, 'Kitchen & Appliances'],
    [/flashlight|torch|lantern/, 'Tools & Hardware'],
    [/dog|cat|puppy|kitten|pet/, 'Babies & Kids'],
    [/pillow|neck|sleep|cushion|seat|memory foam/, 'Home Decor & Storage'],
  ];
  for (const [re, cat] of map) if (re.test(n)) return cat;
  return 'New Arrivals';
}

function extOf(name) {
  return path.extname(name).toLowerCase().replace('.', '') || 'jpg';
}

const today = new Date().toISOString().slice(0, 10);
let ok = 0, failed = 0, skipped = 0;
const errors = [];

let existingIds = new Set();
if (!DRY_RUN) {
  try {
    const res = await api(`/rest/v1/showroom_listings?select=property_id&property_id=like.KCO-IMP-%25&limit=1000`);
    const rows = await res.json();
    existingIds = new Set(rows.map((r) => r.property_id));
    console.log(`Already imported: ${existingIds.size} rows. Resuming where needed.`);
  } catch { }
}

for (let i = 0; i < files.length; i++) {
  const f = files[i];
  const propertyId = `KCO-IMP-${String(i + 1).padStart(4, '0')}`;
  const ext = extOf(f.name);
  const storagePath = `imports/${today}/${propertyId}.${ext}`;
  const title = cleanTitle(f.name);
  const category = guessCategory(f.name);

  if (existingIds.has(propertyId)) {
    skipped++;
    continue;
  }

  if (DRY_RUN) {
    console.log(`  [dry] ${propertyId} — ${category} — ${title} → ${storagePath}`);
    continue;
  }

  try {
    const data = fs.readFileSync(f.full);
    const mime = 'image/' + (ext === 'jpg' ? 'jpeg' : ext === 'jpeg' ? 'jpeg' : ext);
    try {
      await apiRetry(`/storage/v1/object/${BUCKET}/${storagePath}?upsert=true`, {
        method: 'POST',
        body: data,
        contentType: mime,
      });
    } catch (upErr) {
      if (!/Duplicate|already exists/i.test(String(upErr.message))) throw upErr;
    }

    const imageUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${storagePath}`;

    const row = {
      property_id: propertyId,
      listing_type: 'product',
      category,
      subcategory: null,
      title,
      description: '',
      price: 0,
      currency: 'USD',
      country: '', country_code: '',
      listing_status: 'sale',
      images: [imageUrl],
      features: [],
      tags: [], highlights: [], seo_keywords: [],
      specifications: {},
      condition: 'New',
      availability_status: 'In Stock',
      is_active: true,
      is_ai_generated: false,
      ai_generated_fields: null,
      rating: 0, rating_count: 0, favorite_count: 0, review_count: 0,
      approval_status: 'published',
    };

    await apiRetry(`/rest/v1/showroom_listings`, {
      method: 'POST',
      contentType: 'application/json',
      extraHeaders: { Prefer: 'return=minimal' },
      body: JSON.stringify(row),
    });

    ok++;
    if (ok % 25 === 0 || i === files.length - 1) {
      console.log(`  ${ok}/${files.length} imported (last: ${propertyId} — ${title})`);
    }
  } catch (err) {
    failed++;
    errors.push(`${f.name}: ${err.message}`);
  }
}

console.log('─── Result ───');
console.log(`Imported: ${ok}   Skipped (already in DB): ${skipped}   Failed: ${failed}   Total: ${files.length}`);
if (errors.length) {
  console.log('Failures (first 20):');
  errors.slice(0, 20).forEach((e) => console.log('  • ' + e));
}