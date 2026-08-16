// scripts/prerender-home.mjs — Build-time home page pre-render.
// Bakes the very first visible content (hero slide 0 + first showroom
// sections) into index.html as static HTML so the browser paints it before
// any JS runs. Replicates renderCard/renderRow/renderSection markup using the
// same pure data modules, so the baked output matches the runtime render.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const INDEX_HTML = path.join(ROOT, 'index.html');

const fileUrl = (p) => pathToFileURL(p).href;

// catalog-hidden-store.js reads localStorage at import time.
const store = new Map();
globalThis.localStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: (k) => store.delete(k),
  clear: () => store.clear(),
};

const { formatPrice, formatTruckPrice, getListingsByIds, cleanListing, SHOWROOM_LISTINGS } = await import(
  fileUrl(path.join(ROOT, 'src/showroom-data.js'))
);
const { TRUCK_LISTINGS } = await import(fileUrl(path.join(ROOT, 'src/truck-data.js')));
const { MOTORHOME_LISTINGS } = await import(fileUrl(path.join(ROOT, 'src/motorhome-data.js')));
const { CAR_LISTINGS } = await import(fileUrl(path.join(ROOT, 'src/car-data.js')));
const { PRODUCT_LISTINGS } = await import(fileUrl(path.join(ROOT, 'src/products-data.js')));
const { PRODUCT_EXTRA_LISTINGS } = await import(fileUrl(path.join(ROOT, 'src/products-extra.js')));
const { generateProduct, getCatalogCategory, isCatalogListingHidden } = await import(
  fileUrl(path.join(ROOT, 'src/catalog.js'))
);

const FALLBACK_IMG = '/fallback.svg';
const GENERATED_PER_ROW = 0;

const ALL_PRODUCTS = [...PRODUCT_LISTINGS, ...PRODUCT_EXTRA_LISTINGS];

const NEW_HOUSES = [
  'KCO-000001',   // the first/kept house
  'KCO-PX0111',   // Pima Canyon Apartments
  'KCO-PX0720',   // Modern House for Rent
  'KCO-PX0722',   // It's a beautiful day to hang a sold sign
  'KCO-PX0726',   // Pittsburg, KS Homes for Sale
].map(id => SHOWROOM_LISTINGS.find(l => l.property_id === id) || ALL_PRODUCTS.find(l => l.property_id === id)).filter(Boolean);

const NEW_CARS = [
  'KCO-PX0015', 'KCO-PX0018', 'KCO-PX0019', 'KCO-PX0058', 'KCO-PX0061',
  'KCO-PX0085', 'KCO-PX0104', 'KCO-PX0236', 'KCO-PX0630', 'KCO-PX0637',
  'KCO-PX0638', 'KCO-PX0658', 'KCO-PX0659', 'KCO-PX0664', 'KCO-PX0666',
  'KCO-PX0669', 'KCO-PX0670', 'KCO-PX0673', 'KCO-PX0676', 'KCO-PX0685',
  'KCO-PX0690', 'KCO-PX0691', 'KCO-PX0698', 'KCO-PX0701', 'KCO-PX0730',
  'KCO-PX0743',
].map(id => ALL_PRODUCTS.find(l => l.property_id === id)).filter(Boolean);

// Mirrors the gathered type lines in src/showroom-cards.js so the baked
// homepage HTML matches the runtime render exactly.
const byCategory = (cat) => ALL_PRODUCTS.filter(l => (l.category || 'New Arrivals') === cat);
const WASHING_RE = /\b(washer|washing|laundry|launder|dryer)\b/i;
const ALL_WASHING_MACHINES = ALL_PRODUCTS.filter(l => WASHING_RE.test(l.title || ''));
const WASHING_IDS = new Set(ALL_WASHING_MACHINES.map(l => l.property_id || l.id));
const _gatheredIds = new Set();
const pick = (list) => list.filter(l => {
  const id = l.property_id || l.id;
  if (!id || WASHING_IDS.has(id) || _gatheredIds.has(id)) return false;
  _gatheredIds.add(id);
  return true;
});
const ALL_HOUSES = pick([...NEW_HOUSES, ...byCategory('Houses & Real Estate')]);
const ALL_CARS = pick([...NEW_CARS, ...byCategory('Cars & Vehicles')]);
const ALL_TRUCKS = pick([...TRUCK_LISTINGS, ...byCategory('Trucks')]);
const ALL_MOTORHOMES = pick([...MOTORHOME_LISTINGS, ...byCategory('Motorhomes')]);

const ROW_TO_CATALOG_SLUG = {
  'affordable-homes': 'real-estate',
  'apartment-homes': 'real-estate',
  'cape-cod': 'real-estate',
  'beach-houses': 'real-estate',
  'new-houses': 'real-estate',
};

const HOUSE_SECTION_IDS = new Set(['local-houses', 'modern-luxury', 'commercial-land']);
const VEHICLE_SECTION_IDS = new Set(['cars', 'trucks-buses']);

// The only showroom section baked into the HTML is the very first homepage
// section (local-houses → the gathered Houses line). Baking the full first
// screen keeps the paint instant while keeping index.html small, so slow
// mobile connections don't stall on a large HTML download. The remaining
// sections (cars, washing machines, trucks, motorhomes, products, …) are
// appended by JS at load.
const PRE_RENDER_SECTIONS = [
  {
    id: 'local-houses', label: 'Local Houses & Real Estate', icon: 'home',
    subtitle: 'Homes for sale or rent — scroll down to see every one, one by one.',
    rows: [
      { id: 'new-houses', label: 'Houses', icon: 'home', newHouses: true },
    ],
  },
];

function rowSeed(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h % 997;
}

function getCatalogListingsForRow(rowDef, existingIds) {
  const slug = ROW_TO_CATALOG_SLUG[rowDef.id];
  if (!slug) return [];
  const def = getCatalogCategory(slug);
  if (!def) return [];
  const seen = new Set(existingIds);
  const cap = Math.min(GENERATED_PER_ROW, def.count);
  const out = [];
  const seed = rowSeed(rowDef.id);
  for (let i = 0; i < cap; i++) {
    const idx = (seed + i * 53) % def.count;
    const item = generateProduct(slug, idx);
    if (item && !seen.has(item.property_id)) {
      seen.add(item.property_id);
      if (isCatalogListingHidden(item.property_id)) continue;
      out.push(item);
    }
  }
  return out;
}

function getRowListings(rowDef) {
  let listings;
  if (rowDef.allTrucks) listings = ALL_TRUCKS;
  else if (rowDef.allMotorhomes) listings = ALL_MOTORHOMES;
  else if (rowDef.allCars) listings = ALL_CARS;
  else if (rowDef.newHouses) listings = ALL_HOUSES;
  else if (rowDef.allWashingMachines) listings = ALL_WASHING_MACHINES;
  else listings = getListingsByIds(rowDef.ids);
  let catalogExtra = [];
  if (!rowDef.allTrucks && !rowDef.allMotorhomes && !rowDef.allCars && !rowDef.newHouses && !rowDef.allWashingMachines) {
    catalogExtra = getCatalogListingsForRow(rowDef, listings.map((l) => l.property_id));
  }
  if (catalogExtra.length > 0) listings = [...listings, ...catalogExtra];
  return listings;
}

function flagEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) return '';
  const codePoints = countryCode.toUpperCase().split('').map((c) => 0x1f1e6 + c.charCodeAt(0) - 65);
  return String.fromCodePoint(...codePoints);
}

// card markup identical to renderCard in src/showroom-cards.js (no listeners).
function cardHtml(listing) {
  cleanListing(listing);

  const isProperty = listing.listing_type === 'property';
  const isPet = listing.listing_type === 'pet';
  const isTruck = listing.listing_type === 'vehicle' && listing.category === 'Trucks';
  const isMotorhome = listing.listing_type === 'vehicle' && listing.category === 'Motorhomes';
  const isCar = listing.listing_type === 'vehicle' && listing.category === 'Cars';
  const listingId = listing.id || listing.property_id;
  const cover = listing.images?.[0] || FALLBACK_IMG;
  const price = isTruck ? formatTruckPrice(listing) : formatPrice(listing);
  const statusBadge = listing.listing_type === 'product' ? 'New' : (isProperty || isPet ? 'For Sale' : '');

  const hasRealReviews = (listing.rating_count || 0) > 0;
  const aiEstimatedRating = listing.is_ai_generated && !hasRealReviews ? 4.5 : 0;
  const displayRating = hasRealReviews ? listing.rating : aiEstimatedRating;
  const reviewCount = listing.review_count || listing.rating_count || 0;

  let locationHtml = '';
  if (isProperty) {
    const flag = flagEmoji(listing.country_code);
    const parts = [listing.city, listing.state].filter(Boolean);
    locationHtml = `<div class="flex items-center gap-1 text-gray-400 text-xs mb-1.5 truncate"><i data-lucide="map" class="w-3.5 h-3.5 shrink-0"></i><span class="truncate">${flag} ${parts.join(', ') || listing.country}</span></div>`;
  } else if (isPet) {
    const flag = flagEmoji(listing.country_code);
    locationHtml = `<div class="flex items-center gap-1 text-gray-400 text-xs mb-1.5 truncate"><i data-lucide="paw-print" class="w-3.5 h-3.5 shrink-0"></i><span class="truncate">${flag} ${listing.country}</span></div>`;
  }

  let specsHtml = '';
  if (isProperty) {
    const specs = [];
    if (listing.bedrooms != null) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="bed-double" class="w-3.5 h-3.5"></i>${listing.bedrooms}</span>`);
    if (listing.bathrooms != null) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="bath" class="w-3.5 h-3.5"></i>${listing.bathrooms}</span>`);
    if (listing.land_size) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="ruler" class="w-3.5 h-3.5"></i>${listing.land_size}</span>`);
    if (specs.length) specsHtml = `<div class="flex items-center gap-2 text-gray-400 text-xs mb-2">${specs.join('')}</div>`;
  } else if (isTruck || isMotorhome || isCar) {
    const specs = [];
    specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${listing.model_year}</span>`);
    specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="gauge" class="w-3.5 h-3.5"></i>${listing.mileage}</span>`);
    if (isMotorhome) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="moon" class="w-3.5 h-3.5"></i>Sleeps ${listing.sleeping_capacity}</span>`);
    if (isCar) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="fuel" class="w-3.5 h-3.5"></i>${listing.fuel_type}</span>`);
    if (specs.length) specsHtml = `<div class="flex items-center gap-2 text-gray-400 text-xs mb-2">${specs.join('')}</div>`;
  }

  let ratingStars = '';
  if (displayRating > 0) {
    ratingStars = `<div class="flex items-center gap-0.5 text-xs"><i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i><span class="text-gray-800 font-semibold">${displayRating.toFixed(1)}</span><span class="text-gray-500">(${reviewCount})</span></div>`;
  }

  let mapPreviewHtml = '';
  if (isProperty && listing.latitude && listing.longitude) {
    const mapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${listing.latitude},${listing.longitude}&zoom=13&size=600x160&markers=${listing.latitude},${listing.longitude},color-red&maptype=mapnik`;
    mapPreviewHtml = `
      <div class="relative mt-2.5 h-20 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
        <img src="${mapUrl}" alt="Map location for ${listing.title}" loading="lazy" decoding="async" class="w-full h-full object-cover" onerror="this.onerror=null;this.style.display='none'">
        <span class="absolute top-1 left-1 bg-black/70 backdrop-blur-sm text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full inline-flex items-center gap-1"><i data-lucide="map" class="w-3 h-3"></i>Map · ${listing.city || listing.town || ''}</span>
      </div>`;
  }

  return `<div class="showroom-card group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 flex flex-col cursor-pointer" data-id="${listingId}">
    <div class="relative aspect-[4/3] overflow-hidden bg-gray-100">
      <img src="${cover}" alt="${listing.title}" loading="lazy" decoding="async"
           class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
           onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
      ${statusBadge ? `<span class="absolute top-2 left-2 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full">${statusBadge}</span>` : ''}
    </div>
    <div class="p-4 flex flex-col flex-1">
      <h3 class="text-[15px] font-bold text-gray-900 leading-snug mb-1.5 line-clamp-2">${listing.title}</h3>
      ${locationHtml}
      ${specsHtml}
      <div class="flex items-center justify-between mt-auto pt-2">
        <span class="text-lg font-black text-blue-600">${price}</span>
        ${ratingStars}
      </div>
      <div class="flex items-center justify-end gap-1.5 mt-2 pt-2 border-t border-gray-100">
        <button class="share-btn shrink-0 w-8 h-8 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-500 rounded-lg transition flex items-center justify-center" title="Share product" aria-label="Share product">
          <i data-lucide="share-2" class="w-4 h-4"></i>
        </button>
        <button class="wishlist-btn shrink-0 w-8 h-8 bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-500 rounded-lg transition flex items-center justify-center" title="Add to wishlist" aria-label="Add to wishlist">
          <i data-lucide="heart" class="w-4 h-4"></i>
        </button>
      </div>
      ${mapPreviewHtml}
      <div class="flex gap-2 mt-2.5">
        <button class="buy-btn flex-1 min-w-0 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white text-xs font-bold py-3 rounded-lg transition uppercase tracking-wide flex items-center justify-center gap-1.5">
          <i data-lucide="shopping-bag" class="w-4 h-4 shrink-0"></i> <span class="truncate">Buy Now</span>
        </button>
        <button class="details-btn flex-1 min-w-0 bg-gray-50 hover:bg-gray-100 active:scale-95 text-gray-700 hover:text-gray-900 text-xs font-bold py-3 rounded-lg transition uppercase tracking-wide flex items-center justify-center gap-1.5 border border-gray-300 hover:border-gray-400">
          <i data-lucide="eye" class="w-4 h-4 shrink-0"></i> <span class="truncate">View Details</span>
        </button>
      </div>
    </div>
  </div>`;
}

// full-width feed card markup identical to renderFeedCard in showroom-cards.js.
function feedCardHtml(listing) {
  cleanListing(listing);

  const isProperty = listing.listing_type === 'property';
  const isPet = listing.listing_type === 'pet';
  const isTruck = listing.listing_type === 'vehicle' && listing.category === 'Trucks';
  const isMotorhome = listing.listing_type === 'vehicle' && listing.category === 'Motorhomes';
  const isCar = listing.listing_type === 'vehicle' && listing.category === 'Cars';
  const listingId = listing.id || listing.property_id;
  const cover = listing.images?.[0] || FALLBACK_IMG;
  const price = isTruck ? formatTruckPrice(listing) : formatPrice(listing);
  const statusBadge = listing.listing_type === 'product' ? 'New' : (isProperty || isPet ? 'For Sale' : '');

  const hasRealReviews = (listing.rating_count || 0) > 0;
  const aiEstimatedRating = listing.is_ai_generated && !hasRealReviews ? 4.5 : 0;
  const displayRating = hasRealReviews ? listing.rating : aiEstimatedRating;
  const reviewCount = listing.review_count || listing.rating_count || 0;

  let locationHtml = '';
  if (isProperty) {
    const flag = flagEmoji(listing.country_code);
    const parts = [listing.city, listing.state].filter(Boolean);
    locationHtml = `<div class="flex items-center gap-1 text-gray-400 text-xs mb-1.5 truncate"><i data-lucide="map" class="w-3.5 h-3.5 shrink-0"></i><span class="truncate">${flag} ${parts.join(', ') || listing.country}</span></div>`;
  } else if (isPet) {
    const flag = flagEmoji(listing.country_code);
    locationHtml = `<div class="flex items-center gap-1 text-gray-400 text-xs mb-1.5 truncate"><i data-lucide="paw-print" class="w-3.5 h-3.5 shrink-0"></i><span class="truncate">${flag} ${listing.country}</span></div>`;
  }

  let specsHtml = '';
  if (isProperty) {
    const specs = [];
    if (listing.bedrooms != null) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="bed-double" class="w-3.5 h-3.5"></i>${listing.bedrooms}</span>`);
    if (listing.bathrooms != null) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="bath" class="w-3.5 h-3.5"></i>${listing.bathrooms}</span>`);
    if (listing.land_size) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="ruler" class="w-3.5 h-3.5"></i>${listing.land_size}</span>`);
    if (specs.length) specsHtml = `<div class="flex items-center gap-2 text-gray-400 text-xs mb-2">${specs.join('')}</div>`;
  } else if (isTruck || isMotorhome || isCar) {
    const specs = [];
    specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${listing.model_year}</span>`);
    specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="gauge" class="w-3.5 h-3.5"></i>${listing.mileage}</span>`);
    if (isMotorhome) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="moon" class="w-3.5 h-3.5"></i>Sleeps ${listing.sleeping_capacity}</span>`);
    if (isCar) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="fuel" class="w-3.5 h-3.5"></i>${listing.fuel_type}</span>`);
    if (specs.length) specsHtml = `<div class="flex items-center gap-2 text-gray-400 text-xs mb-2">${specs.join('')}</div>`;
  }

  let ratingStars = '';
  if (displayRating > 0) {
    ratingStars = `<div class="flex items-center gap-0.5 text-xs"><i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i><span class="text-gray-800 font-semibold">${displayRating.toFixed(1)}</span><span class="text-gray-500">(${reviewCount})</span></div>`;
  }

  let mapPreviewHtml = '';
  if (isProperty && listing.latitude && listing.longitude) {
    const mapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${listing.latitude},${listing.longitude}&zoom=13&size=600x160&markers=${listing.latitude},${listing.longitude},color-red&maptype=mapnik`;
    mapPreviewHtml = `
      <div class="relative mt-2.5 h-20 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
        <img src="${mapUrl}" alt="Map location for ${listing.title}" loading="lazy" decoding="async" class="w-full h-full object-cover" onerror="this.onerror=null;this.style.display='none'">
        <span class="absolute top-1 left-1 bg-black/70 backdrop-blur-sm text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full inline-flex items-center gap-1"><i data-lucide="map" class="w-3 h-3"></i>Map · ${listing.city || listing.town || ''}</span>
      </div>`;
  }

  return `<div class="showroom-card showroom-feed-card group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 flex flex-col sm:flex-row cursor-pointer" data-id="${listingId}">
    <div class="relative shrink-0 sm:w-[42%] lg:w-[38%] xl:w-[34%] aspect-[16/10] sm:aspect-auto sm:min-h-[280px] overflow-hidden bg-gray-100">
      <img src="${cover}" alt="${listing.title}" loading="lazy" decoding="async"
           class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
           onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
      ${statusBadge ? `<span class="absolute top-2.5 left-2.5 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">${statusBadge}</span>` : ''}
      <span class="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 bg-black/55 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <i data-lucide="expand" class="w-3.5 h-3.5"></i> View
      </span>
    </div>
    <div class="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col min-w-0">
      <h3 class="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-1.5 line-clamp-2 group-hover:text-blue-700 transition-colors">${listing.title}</h3>
      ${locationHtml}
      ${specsHtml}
      <div class="flex items-center justify-between gap-3 mt-auto pt-2">
        <span class="text-xl sm:text-2xl font-black text-blue-600">${price}</span>
        ${ratingStars}
      </div>
      ${mapPreviewHtml}
      <div class="flex items-center gap-1.5 mt-2.5 pt-2.5 border-t border-gray-100 justify-end">
        <button class="share-btn shrink-0 w-9 h-9 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-500 rounded-xl transition flex items-center justify-center" title="Share product" aria-label="Share product">
          <i data-lucide="share-2" class="w-4 h-4"></i>
        </button>
        <button class="wishlist-btn shrink-0 w-9 h-9 bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-500 rounded-xl transition flex items-center justify-center" title="Add to wishlist" aria-label="Add to wishlist">
          <i data-lucide="heart" class="w-4 h-4"></i>
        </button>
      </div>
      <div class="flex gap-2 mt-2.5">
        <button class="buy-btn flex-1 min-w-0 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white text-xs font-bold py-3.5 rounded-xl transition uppercase tracking-wide flex items-center justify-center gap-1.5 shadow-sm shadow-blue-500/25">
          <i data-lucide="shopping-bag" class="w-4 h-4 shrink-0"></i> <span class="truncate">Buy Now</span>
        </button>
        <button class="details-btn flex-1 min-w-0 bg-gray-50 hover:bg-gray-100 active:scale-95 text-gray-700 hover:text-gray-900 text-xs font-bold py-3.5 rounded-xl transition uppercase tracking-wide flex items-center justify-center gap-1.5 border border-gray-300 hover:border-gray-400">
          <i data-lucide="eye" class="w-4 h-4 shrink-0"></i> <span class="truncate">View Details</span>
        </button>
      </div>
    </div>
  </div>`;
}

// row markup identical to renderRow in src/showroom-cards.js.
function rowHtml(rowDef) {
  const listings = getRowListings(rowDef);
  const hasItems = listings.length > 0;
  const isGrid = rowDef.layout === 'grid';

  let header = `
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2.5 min-w-0">
        <span class="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
          <i data-lucide="${rowDef.icon}" class="w-4 h-4 text-blue-600"></i>
        </span>
        <h4 class="text-base font-bold text-gray-900 tracking-wide truncate">${rowDef.label}</h4>
        ${hasItems && isGrid ? `<span class="hidden sm:inline-flex shrink-0 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300">${listings.length} Items</span>` : ''}
      </div>
    </div>`;

  let track;
  if (hasItems) {
    track = `<div class="${isGrid ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4' : 'showroom-feed flex flex-col gap-4 sm:gap-5'}">${listings.map(isGrid ? cardHtml : feedCardHtml).join('')}</div>`;
  } else {
    track = `<div class="${isGrid ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4' : 'showroom-feed flex flex-col gap-4 sm:gap-5'}"><div class="flex items-center justify-center w-full py-6"><span class="inline-flex items-center gap-2 text-sm text-gray-500 uppercase tracking-widest border border-dashed border-gray-300 rounded-xl px-5 py-3">Coming Soon</span></div></div>`;
  }

  return `<div class="showroom-row relative" data-row-id="${rowDef.id}"${isGrid ? ' data-layout="grid"' : ''} data-prerendered="1">${header}${track}</div>`;
}

// section markup identical to renderSection in src/showroom-cards.js.
function countSectionItems(section) {
  let count = 0;
  section.rows.forEach((r) => {
    const base = r.allTrucks ? ALL_TRUCKS : r.allMotorhomes ? ALL_MOTORHOMES : r.allCars ? ALL_CARS : r.newHouses ? ALL_HOUSES : r.allWashingMachines ? ALL_WASHING_MACHINES : getListingsByIds(r.ids);
    count += base.length;
    if (!r.allTrucks && !r.allMotorhomes && !r.allCars && !r.newHouses && !r.allWashingMachines) {
      count += getCatalogListingsForRow(r, base.map((l) => l.property_id)).length;
    }
  });
  return count;
}

function sectionHtml(section, maxRows) {
  const itemCount = countSectionItems(section);
  const header = `
    <div class="relative pt-2 pb-3">
      <div class="flex items-center gap-3.5">
        <div class="p-3 rounded-2xl border border-blue-500/30 bg-blue-500/10 shrink-0" style="box-shadow:0 0 22px rgba(59,130,246,0.25)">
          <i data-lucide="${section.icon}" class="w-6 h-6 text-blue-300"></i>
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight">
            <span class="bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent">${section.label}</span>
          </h3>
          <p class="text-gray-400 text-xs sm:text-[13px] leading-tight mt-1 truncate">${section.subtitle}</p>
        </div>
        <span class="hidden sm:inline-flex shrink-0 items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300">${itemCount} Items</span>
      </div>
      <div class="mt-3 h-px bg-gradient-to-r from-blue-500/40 via-gray-700/40 to-transparent"></div>
    </div>`;

  const rowsToShow = (maxRows && maxRows > 0) ? section.rows.slice(0, maxRows) : section.rows;
  return `<div class="showroom-section space-y-3">${header}${rowsToShow.map(rowHtml).join('')}</div>`;
}

function viewAllButton(kind) {
  const parts = {
    houses: { label: 'View All Houses &amp; Motorhomes Worldwide <span class="text-lg">→ 🌎</span>', cls: 'view-all-houses-btn bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-blue-600/30' },
    cars: { label: 'View all Cars <span class="text-lg">→ 🚗</span>', cls: 'view-all-cars-btn bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 shadow-amber-600/30' },
  }[kind];
  if (!parts) return '';
  return `<div class="flex justify-center py-1" data-viewall="${kind}" data-prerendered="1">
    <button type="button" class="${parts.cls} btn-press flex items-center justify-center gap-2 w-full max-w-md py-4 rounded-xl text-white text-base font-extrabold tracking-wide shadow-lg transition active:scale-95">${parts.label}</button>
  </div>`;
}

// Hero slide 0 — identical to the first slide renderCarousel builds.
// Must match the first slide that survives the homepage filter in app.js
// (only homes, trucks, motorhomes and cars are shown at the top).
function heroHtml() {
  const V = 'https://videos.pexels.com/video-files/';
  const slide = { video: V + '4324104/4324104-sd_640_360_24fps.mp4' };
  return `<div class="carousel-slide active-slide" id="slide-0">
  <video class="hero-video" muted loop playsinline webkit-playsinline preload="metadata" data-src="${slide.video}" style="width:100%;height:100%;object-fit:cover;object-position:center"></video>
  <div class="absolute inset-0 z-10 flex items-center justify-center text-center p-6 sm:p-10">
    <div class="glass-hero-panel">
      <h2 id="slide-title-0" class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]">Weverse Online Shop</h2>
      <p class="mt-3 text-base sm:text-lg font-extrabold text-amber-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Delivering worldwide 🚛🚒</p>
    </div>
  </div>
</div>`;
}

function buildGridHtml() {
  // Keep the pre-rendered grid to just the first section's teaser row so
  // index.html stays small for slow connections. The rest of the sections
  // and their view-all buttons are appended by JS in the normal order.
  const order = ['local-houses'];
  const byId = new Map(PRE_RENDER_SECTIONS.map((s) => [s.id, s]));
  let html = '';
  for (const id of order) {
    const section = byId.get(id);
    if (!section) continue;
    const isTeaser = HOUSE_SECTION_IDS.has(id) || VEHICLE_SECTION_IDS.has(id);
    html += sectionHtml(section, isTeaser ? 1 : undefined);
  }
  return html;
}

function main() {
  let html = fs.readFileSync(INDEX_HTML, 'utf8');
  const gridHtml = buildGridHtml();
  const carouselHtml = heroHtml();

  // Remove any previously baked blocks so the script is idempotent.
  html = html.replace(/<!--PRERENDER:carousel-->[\s\S]*?<!--\/PRERENDER:carousel-->/g, '');
  html = html.replace(/<!--PRERENDER:grid-->[\s\S]*?<!--\/PRERENDER:grid-->/g, '');
  // Collapse the emptied containers back to their pristine empty form.
  html = html.replace(/(<div id="carousel-slides" class="relative w-full h-full">)\s*(<\/div>)/, '$1$2');
  html = html.replace(/(<div data-showroom-grid="real-estate" class="px-4 sm:px-6 lg:px-8 py-3\.5 space-y-4")(\s+data-prerendered="true")?>[\s\S]*?<\/div>/, (m, g1) => g1 + '></div>');

  const carouselMatch = html.match(/<div id="carousel-slides" class="relative w-full h-full"><\/div>/);
  if (!carouselMatch) throw new Error('carousel-slides container not found in index.html');
  const gridMatch = html.match(/<div data-showroom-grid="real-estate" class="px-4 sm:px-6 lg:px-8 py-3\.5 space-y-4"><\/div>/);
  if (!gridMatch) throw new Error('real-estate grid container not found in index.html');

  const carouselBlock = `<!--PRERENDER:carousel-->\n        ${carouselHtml}\n      <!--/PRERENDER:carousel-->`;
  const gridBlock = `<!--PRERENDER:grid-->\n        ${gridHtml}\n      <!--/PRERENDER:grid-->`;

  html = html
    .replace(carouselMatch[0], `<div id="carousel-slides" class="relative w-full h-full">\n        ${carouselBlock}\n      </div>`)
    .replace(
      gridMatch[0],
      `<div data-showroom-grid="real-estate" class="px-4 sm:px-6 lg:px-8 py-3.5 space-y-4" data-prerendered="true">\n        ${gridBlock}\n      </div>`
    );

  fs.writeFileSync(INDEX_HTML, html, 'utf8');
  console.log(
    `pre-render ok — hero slide + ${gridHtml.split('data-row-id=').length - 1} rows baked into index.html`
  );
}

main();

