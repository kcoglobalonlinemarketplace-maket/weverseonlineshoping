// Showroom Phase 1 — 20 professional sample listings
// Real estate + vehicles. Uses real Pexels stock photo URLs of actual homes.

const PEXELS = (id, w = 800) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// Every house listing builds its gallery from explicit, per-listing Pexels photo IDs —
// each photo is used by exactly ONE house, so no duplicate images appear anywhere.
// All IDs were HEAD-verified against images.pexels.com.

const VEHICLE = {
  car: [10054672, 11836424, 30809411, 31458555],
};

// Build a gallery for a property: 3 unique exteriors, then unique interior room photos.
function propertyGallery(exteriorIds, interiorIds) {
  const imgs = [];
  exteriorIds.forEach((id) => imgs.push(PEXELS(id, 1200)));
  interiorIds.forEach((id) => imgs.push(PEXELS(id, 1000)));
  return imgs;
}

function vehicleGallery(vehicleIds, count = 12) {
  const imgs = [];
  for (let i = 0; i < count; i++) {
    imgs.push(PEXELS(vehicleIds[i % vehicleIds.length], 1000));
  }
  return imgs;
}

// Build a gallery from an explicit exterior set plus unique interior room photos.
function newHomeGallery(ids, interiorIds) {
  const base = ids.map((id, i) => PEXELS(id, i < 3 ? 1200 : 1000));
  const interiors = interiorIds.map((id) => PEXELS(id, 1000));
  return [...base, ...interiors];
}

export const SHOWROOM_LISTINGS = [];

// Real-world coordinates for every seeded property listing so showroom cards can
// render a map preview and the details page map can skip geocoding lookups.
const PROPERTY_COORDS = {
  'W10000': [40.0330, -83.1583],  // Hilliard, OH
  'W10001': [30.5083, -97.6789],  // Round Rock, TX
  'W10002': [42.2529, -71.0023],  // Quincy, MA
  'W10003': [43.7765, -79.2317],  // Scarborough, ON
  'W10004': [35.1168, -80.7237],  // Matthews, NC
  'W10005': [51.5051, -0.0196],   // Canary Wharf, London
  'W10006': [36.4840, -4.9904],   // San Pedro de Alcántara, Marbella
  'W10007': [48.8844, 2.2691],    // Neuilly-sur-Seine, Paris
  'W10008': [-28.0890, 153.4533], // Burleigh Heads, Gold Coast
  'W10009': [25.1972, 55.2744],   // Downtown Dubai
  'W10010': [45.2269, -75.6831],  // Manotick, Ottawa
  'W10011': [48.1615, 11.5780],   // Schwabing, Munich
  'W10012': [39.9556, -86.0139],  // Fishers, IN
  'W10013': [43.7666, 11.2478],   // Oltrarno, Florence
  'W10014': [-28.0027, 153.4309], // Surfers Paradise
  'W10015': [52.3744, 4.8821],    // Jordaan, Amsterdam
  'W10018': [45.5615, -122.6501], // Alberta Arts District, Portland
  'W10019': [49.2643, -123.1542], // Kitsilano, Vancouver
  'W10020': [53.4431, -2.2729],   // Chorlton, Manchester
  'W10021': [-37.8188, 145.1252], // Box Hill, Melbourne
  'W10022': [52.5200, 13.4050],   // Berlin Mitte
  'W10023': [43.7891, 4.8317],    // Saint-Rémy-de-Provence
  'W10024': [43.6586, 11.1855],   // San Casciano in Val di Pesa
  'W10025': [41.3831, 2.1767],    // Gothic Quarter, Barcelona
  'W10026': [46.0207, 7.7491],    // Winkelmatten, Zermatt
  'W10027': [59.4022, 18.3533],   // Vaxholm
};
for (const l of SHOWROOM_LISTINGS) {
  const c = PROPERTY_COORDS[l.property_id];
  if (c) { l.latitude = c[0]; l.longitude = c[1]; }
}

export function formatPrice(listing) {
  const formatted = listing.price.toLocaleString('en-US', { style: 'currency', currency: listing.currency || 'USD', maximumFractionDigits: 0 });
  return listing.price_period ? `${formatted}/mo` : formatted;
}

export function flagEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) return '';
  const codePoints = countryCode.toUpperCase().split('').map(c => 0x1F1E6 + c.charCodeAt(0) - 65);
  return String.fromCodePoint(...codePoints);
}

// Removes any AI branding, machine-generated phrases, and fake "Stock #STK-…"
// codes from customer-visible listing text so everything reads like a real,
// professional marketplace listing.
export function cleanListingText(text) {
  if (text == null) return text;
  let s = String(text);
  s = s.replace(/Stock\s+#?STK[-]?[\w-]*\.?/gi, '');
  s = s.replace(/\b(?:was\s+)?(?:curated|auto-created|created)\s+by\s+admin\s+ai(?:\s+on\s+[0-9TZ:.\-]+)?[^.]*\.?\s*/gi, '');
  s = s.replace(/\bscanned\s+by\s+[^.]*\.?\s*/gi, '');
  s = s.replace(/\bgenerated\s+by\s+ai\s+fallback\b/gi, 'professionally prepared');
  s = s.replace(/\b8K\s+AI[- ]?[Uu]pscaling(?:\s+[Ee]ngine)?\b/gi, 'Neo Quantum Processor 8K');
  s = s.replace(/\bAI[- ]?(?:managed|powered|curated|created|generated|product|listing|assistant|model|image|content|scan|repair|advertisement|marketing|architecture|automation|settings|chatbot|chat|upscaling)\b/gi, '');
  s = s.replace(/\bAdmin\s+AI\b/gi, '');
  s = s.replace(/\bAI\b/gi, '');
  s = s.replace(/\s{2,}/g, ' ');
  s = s.replace(/\s+([.,;:!?])/g, '$1');
  s = s.replace(/^\s*[,.;:]+\s*|\s*[,.;:]+\s*$/g, '');
  return s.trim();
}

export function cleanListing(listing) {
  if (!listing) return listing;
  listing.title = cleanListingText(listing.title);
  listing.description = cleanListingText(listing.description);
  if (Array.isArray(listing.features)) listing.features = listing.features.map(cleanListingText).filter(Boolean);
  if (Array.isArray(listing.highlights)) listing.highlights = listing.highlights.map(cleanListingText).filter(Boolean);
  if (Array.isArray(listing.tags)) listing.tags = listing.tags.map(cleanListingText).filter(Boolean);
  return listing;
}

// Lookup helper: find a listing by its property_id
const LISTING_MAP = new Map(SHOWROOM_LISTINGS.map(l => [l.property_id, l]));

export function getListingsByIds(ids) {
  return ids.map(id => LISTING_MAP.get(id)).filter(Boolean);
}

// ── Database product loading ──────────────────────────────────
// Products created by the AI Admin Assistant are saved to the
// showroom_listings table.  We fetch those rows at runtime and merge
// them with the hardcoded seed data so they appear on the marketplace
// automatically — no rebuild required.
//
// The fetched rows are ALSO cached in localStorage. On the next page load we
// hydrate from that cache synchronously, so the homepage showroom and category
// bar paint the owner's products instantly — no network round-trip in front of
// the first paint. The network fetch still runs in the background and refreshes
// the cache, so products are always fresh a moment later.

let _dbListings = [];
let _dbLoaded = false;
let _dbLoading = null;

export function getDBListings() { return _dbListings; }
export function isDBLoaded() { return _dbLoaded; }

// Hard ceiling on how long a database fetch may take. If Supabase is slow or
// unreachable the page must still render from cached/seed data instead of
// hanging on "Loading property details..." forever. On timeout we resolve with
// what we have (cache/seeds) and treat the DB as loaded so callers move on.
const DB_FETCH_TIMEOUT_MS = 6000;
const DB_CACHE_KEY = 'kco_db_listings_cache_v1';

function withTimeout(promise, ms) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve('__timeout__'), ms);
    promise.then(
      (v) => { clearTimeout(timer); resolve(v); },
      () => { clearTimeout(timer); resolve('__timeout__'); }
    );
  });
}

// Turn a raw DB/local-store row into the shape the showroom/details pages read.
function normalizeDbRow(row) {
  const images = Array.isArray(row.images) ? [...row.images] : [];
  // Merge standalone video/video_url columns into images[] so every renderer
  // that iterates `listing.images` automatically picks up the product video.
  for (const v of [row.video, row.video_url]) {
    if (v && typeof v === 'string' && !images.includes(v)) images.push(v);
  }
  return {
    ...row,
    // Vehicle/product specs are stored in the `specifications` JSONB column
    // (model_year, engine, transmission, seating_capacity, doors, etc.).
    // Flatten them to top-level so the showroom/details pages can read them
    // the same way they read the hardcoded seed data.
    ...(row.specifications && typeof row.specifications === 'object' ? row.specifications : {}),
    images,
    features: Array.isArray(row.features) ? row.features : [],
    highlights: Array.isArray(row.highlights) ? row.highlights : [],
    rating: Number(row.rating) || 0,
    rating_count: row.rating_count || 0,
    favorite_count: row.favorite_count || 0,
    price: Number(row.price) || 0,
  };
}

function readDBCache() {
  try {
    const raw = localStorage.getItem(DB_CACHE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeDBCache(rows) {
  try { localStorage.setItem(DB_CACHE_KEY, JSON.stringify(rows)); } catch { /* ignore */ }
}

function applyDbRows(rows) {
  _dbListings = rows.map(normalizeDbRow).filter(Boolean);
  // Merge into the listing map (DB entries take priority on duplicate IDs)
  for (const l of _dbListings) LISTING_MAP.set(l.property_id, l);
}

// Synchronously load the last-fetched DB rows from localStorage so the homepage
// can render real products before any network request resolves. Called at the
// very start of the showroom init (and never throws).
export function hydrateDBListingsFromCache() {
  if (_dbLoaded) return;
  const cached = readDBCache();
  if (!cached.length) return;
  applyDbRows(cached);
  writeDBCache(cached);
}

// Single shared in-flight request: if the homepage, promo pool, cards, and the
// details page all ask for listings at once, they reuse ONE fetch instead of
// hammering Supabase N times. This is what makes the details page open fast.
export function loadDBListings() {
  if (_dbLoaded) return Promise.resolve(_dbListings);
  if (_dbLoading) return _dbLoading;
  _dbLoading = (async () => {
    try {
      const { supabase } = await import('./supabase-client.js');
      const { listLocalShowroomListings } = await import('./local-showroom-store.js');
      const result = await withTimeout(
        supabase
          .from('showroom_listings')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: false }),
        DB_FETCH_TIMEOUT_MS
      );
      const ok = result !== '__timeout__' && !result.error;
      const rows = ok ? (result.data || []) : [];
      // Always merge database rows with the local fallback store so products that
      // were saved locally (while the database was unavailable) still show up on
      // the store. Database rows win on duplicate IDs.
      const dbIds = new Set(rows.map(row => row.property_id));
      for (const row of listLocalShowroomListings().filter(item => item.is_active !== false)) {
        if (row && row.property_id && !dbIds.has(row.property_id)) { dbIds.add(row.property_id); rows.push(row); }
      }
      if (ok) {
        // Fresh DB data replaces whatever was hydrated from the cache.
        applyDbRows(rows);
        writeDBCache(rows);
      } else {
        // Network failed/timed out — keep the cached rows we already have (if
        // any) and only add any newly-saved local-store rows that are missing.
        const existing = new Map(_dbListings.map(l => [l.property_id, l]));
        for (const row of rows) {
          const norm = normalizeDbRow(row);
          if (norm && norm.property_id && !existing.has(norm.property_id)) existing.set(norm.property_id, norm);
        }
        _dbListings = Array.from(existing.values());
      }
      _dbLoaded = true;
      return _dbListings;
    } catch {
      _dbLoaded = true;
      return _dbListings;
    } finally {
      _dbLoading = null;
    }
  })();
  return _dbLoading;
}

// Return ALL listings: hardcoded + database, deduplicated by property_id.
function readHiddenIds() {
  try {
    const raw = JSON.parse(localStorage.getItem('kco_hidden_catalog_ids_v1') || '[]');
    return new Set(Array.isArray(raw) ? raw : []);
  } catch {
    return new Set();
  }
}

export function getAllListings() {
  const hidden = readHiddenIds();
  const seen = new Set();
  const all = [];
  for (const l of _dbListings) {
    if (!l || !l.property_id || hidden.has(l.property_id)) continue;
    if (!seen.has(l.property_id)) { seen.add(l.property_id); all.push(l); }
  }
  for (const l of SHOWROOM_LISTINGS) {
    if (!l || !l.property_id || hidden.has(l.property_id)) continue;
    if (!seen.has(l.property_id)) { seen.add(l.property_id); all.push(l); }
  }
  return all;
}

// Find a single listing by property_id across both sources.
export function findListingById(id) {
  if (readHiddenIds().has(id)) return null;
  return LISTING_MAP.get(id) || null;
}
