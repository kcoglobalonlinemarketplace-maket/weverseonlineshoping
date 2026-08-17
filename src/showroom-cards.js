import { SHOWROOM_LISTINGS, formatPrice, flagEmoji, getListingsByIds, getDBListings, loadDBListings, cleanListing } from './showroom-data.js';
import { TRUCK_LISTINGS, formatTruckPrice } from './truck-data.js';
import { MOTORHOME_LISTINGS } from './motorhome-data.js';
import { PRODUCT_LISTINGS } from './products-data.js';
import { PRODUCT_EXTRA_LISTINGS } from './products-extra.js';
import { getCurrentUser, setRedirectAfterAuth } from './auth-lazy.js';
import { isCatalogListingHidden, loadHiddenCatalogIds } from './catalog-hidden-store.js';

const FALLBACK_IMG = '/fallback.svg';

// ── View mode ──────────────────────────────────────────────────
// The showroom can show products in a compact 2-column grid (default —
// scroll down to browse), one by one (vertical feed) or in horizontal
// lines (sideways scroll). The choice is stored so it sticks.
const VIEW_MODE_KEY = 'kco_showroom_view_mode';
let viewMode = 'grid'; // 'grid' (2 columns, default) | 'feed' (one by one) | 'line' (by line)

function readSavedViewMode() {
  try { return localStorage.getItem(VIEW_MODE_KEY) === 'line' ? 'line' : 'grid'; } catch { return 'grid'; }
}
viewMode = readSavedViewMode();

const isLineMode = () => viewMode === 'line';
const isGridMode = () => viewMode === 'grid';
const overlayCard = (l) => (isLineMode() ? renderCard(l) : renderFeedCard(l));
const overlayContainerClass = () => (isLineMode() ? 'hscroll flex gap-4 overflow-x-auto scrollbar-none pb-1' : 'showroom-feed flex flex-col gap-4 sm:gap-5');

export function setShowroomViewMode(mode) {
  viewMode = (mode === 'line') ? 'line' : (mode === 'feed') ? 'feed' : 'grid';
  try { localStorage.setItem(VIEW_MODE_KEY, viewMode); } catch {}
  document.querySelectorAll('[data-showroom-grid]').forEach(g => {
    delete g.dataset.initialized;
    delete g.dataset.prerendered;
    g.innerHTML = '';
  });
  renderAllGrids();
  if (window.lucide) lucide.createIcons();
  updateViewModePicker();
}

function updateViewModePicker() {
  const picker = document.getElementById('view-mode-picker');
  if (!picker) return;
  picker.querySelectorAll('[data-view-mode]').forEach(btn => {
    const active = btn.dataset.viewMode === viewMode;
    btn.classList.toggle('view-mode-active', active);
    btn.setAttribute('aria-checked', active ? 'true' : 'false');
  });
}

function wireViewModePicker() {
  const picker = document.getElementById('view-mode-picker');
  if (!picker) return;
  picker.querySelectorAll('[data-view-mode]').forEach(btn => {
    btn.addEventListener('click', () => setShowroomViewMode(btn.dataset.viewMode));
  });
  updateViewModePicker();
}

function scrollRow(row, dir) {
  const track = row.querySelector('.hscroll');
  if (!track) return;
  track.scrollBy({ left: dir * 260 * 3, behavior: 'smooth' });
}

// ── Products ───────────────────────────────────────────────────
// Every owner product appears in rows of exactly 10 cards each so the
// shop stays tidy (10 per line) while every downloaded image is shown.
const ALL_PRODUCTS = [...PRODUCT_LISTINGS, ...PRODUCT_EXTRA_LISTINGS];

// Owner's own downloaded house/apartment photos — shown in the bright
// homepage Houses line, alongside the very first (kept) house. The other
// old houses stay in code (All Houses overlay) but off the front.
const NEW_HOUSES = [
  'KCO-000001',   // the first/kept house
  'KCO-PX0111',   // Pima Canyon Apartments
  'KCO-PX0720',   // Modern House for Rent
  'KCO-PX0722',   // It's a beautiful day to hang a sold sign
  'KCO-PX0726',   // Pittsburg, KS Homes for Sale
].map(id => SHOWROOM_LISTINGS.find(l => l.property_id === id) || PRODUCT_EXTRA_LISTINGS.find(l => l.property_id === id)).filter(Boolean);

// Owner's own downloaded car images — shown in the bright homepage Cars
// line (replaces the old stock car cards). Trucks & motorhomes stay in
// their own sections.
const NEW_CARS = [
  'KCO-PX0015', 'KCO-PX0018', 'KCO-PX0019', 'KCO-PX0058', 'KCO-PX0061',
  'KCO-PX0085', 'KCO-PX0104', 'KCO-PX0236', 'KCO-PX0630', 'KCO-PX0637',
  'KCO-PX0638', 'KCO-PX0658', 'KCO-PX0659', 'KCO-PX0664', 'KCO-PX0666',
  'KCO-PX0669', 'KCO-PX0670', 'KCO-PX0673', 'KCO-PX0676', 'KCO-PX0685',
  'KCO-PX0690', 'KCO-PX0691', 'KCO-PX0698', 'KCO-PX0701', 'KCO-PX0730',
  'KCO-PX0743',
].map(id => PRODUCT_EXTRA_LISTINGS.find(l => l.property_id === id)).filter(Boolean);
// ── Gathered type lines ─────────────────────────────────────────
// Everything of the same type lives in ONE line: all cars together,
// all homes together, all washing machines together, all trucks
// together, all motorhomes together. No type is scattered or repeated.
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

// Every owner product is shown grouped by category, so each category is one
// clean horizontal line (all cars together, all houses together, all kitchen
// items together, etc.) — never mixed into arbitrary 10-card rows. Categories
// that already have a dedicated gathered line (cars, houses, trucks,
// motorhomes) and washing-machine items are excluded so nothing repeats.
const PRODUCT_CATEGORY_ORDER = [
  'Houses & Real Estate', 'Cars & Vehicles', 'Trucks', 'Motorhomes',
  'Kitchen & Appliances', 'Home Appliances & Cleaning', 'Jewelry', 'Watches',
  'Fashion & Shoes', 'Babies & Kids', 'Electronics', 'Tools & Hardware',
  'Beauty & Personal Care', 'Home Decor & Storage', 'New Arrivals',
];
const PRODUCT_CAT_ICON = {
  'Houses & Real Estate': 'home', 'Cars & Vehicles': 'car-front', 'Trucks': 'truck',
  'Motorhomes': 'bus', 'Kitchen & Appliances': 'chef-hat', 'Home Appliances & Cleaning': 'washing-machine',
  'Jewelry': 'gem', 'Watches': 'watch', 'Fashion & Shoes': 'shirt', 'Babies & Kids': 'baby',
  'Electronics': 'smartphone', 'Tools & Hardware': 'wrench', 'Beauty & Personal Care': 'sparkles',
  'Home Decor & Storage': 'lamp', 'New Arrivals': 'package',
};
function productCatSlug(c) { return String(c).toLowerCase().replace(/[^a-z0-9]+/g, '-'); }
function buildCategoryRows(products) {
  const byCat = new Map();
  for (const l of products) {
    const c = l.category || 'New Arrivals';
    if (!byCat.has(c)) byCat.set(c, []);
    byCat.get(c).push(l.property_id || l.id);
  }
  const order = [...byCat.keys()].sort((a, b) => {
    const ia = PRODUCT_CATEGORY_ORDER.indexOf(a);
    const ib = PRODUCT_CATEGORY_ORDER.indexOf(b);
    return (ia === -1 ? PRODUCT_CATEGORY_ORDER.length : ia) - (ib === -1 ? PRODUCT_CATEGORY_ORDER.length : ib);
  });
  return order
    .map(c => ({ id: `products-${productCatSlug(c)}`, label: c, icon: PRODUCT_CAT_ICON[c] || 'package', productCategory: c }))
    .filter(r => (byCat.get(r.productCategory) || []).length);
}

const PRODUCT_ROWS = buildCategoryRows(
  ALL_PRODUCTS.filter(l => {
    const c = l.category || 'New Arrivals';
    const id = l.property_id || l.id;
    return !['Houses & Real Estate', 'Cars & Vehicles', 'Trucks', 'Motorhomes'].includes(c) && !WASHING_IDS.has(id);
  })
);

// ── Lazy catalog ────────────────────────────────────────────────
// The generated catalog (src/catalog.js) is the single biggest JS module
// (~196 kB) but the homepage only needs it for generated real-estate
// extras and the "All Houses" overlay. It is fetched in the background
// AFTER the page has already rendered, so it never blocks first paint.
let _catalog = null;
let _catalogLoading = null;
function loadCatalog() {
  if (!_catalogLoading) {
    _catalogLoading = import('./catalog.js').then((m) => { _catalog = m; return m; });
  }
  return _catalogLoading;
}

// ── Wishlist state (guest + signed-in) ──────────────────────────
// Guests keep a local list so the heart works immediately; signed-in
// users get the same list mirrored to their Supabase wishlist table.
const WISHLIST_LOCAL_KEY = 'kco_wishlist_ids';
let wishlistIds = new Set();
let _wishStylesInjected = false;

function injectWishStyles() {
  if (_wishStylesInjected) return;
  _wishStylesInjected = true;
  const style = document.createElement('style');
  style.textContent = `
    @keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}
    .wish-pop i{animation:kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)}
  `;
  document.head.appendChild(style);
}

function loadLocalWishlist() {
  try { wishlistIds = new Set(JSON.parse(localStorage.getItem(WISHLIST_LOCAL_KEY) || '[]')); }
  catch { wishlistIds = new Set(); }
}
function saveLocalWishlist() {
  try { localStorage.setItem(WISHLIST_LOCAL_KEY, JSON.stringify([...wishlistIds])); }
  catch { /* noop */ }
}

async function syncWishlistFromDB() {
  try {
    const user = await getCurrentUser();
    if (!user) return;
    const { supabase } = await import('./supabase-client.js');
    const { data } = await supabase.from('wishlist').select('listing_id, property_id');
    if (data) data.forEach((row) => { if (row.listing_id) wishlistIds.add(row.listing_id); else if (row.property_id) wishlistIds.add(row.property_id); });
  } catch { /* best-effort */ }
}

function isSaved(listing) {
  return wishlistIds.has(listing.id || listing.property_id);
}

function updateWishlistButton(btn, saved) {
  if (!btn) return;
  btn.classList.toggle('saved', saved);
  btn.classList.toggle('text-red-400', saved);
  btn.classList.toggle('bg-red-500/20', saved);
  btn.classList.toggle('border', saved);
  btn.classList.toggle('border-red-500/40', saved);
  btn.setAttribute('aria-label', saved ? 'Remove from wishlist' : 'Add to wishlist');
  btn.title = saved ? 'Remove from wishlist' : 'Add to wishlist';
  btn.innerHTML = `<i data-lucide="heart" class="w-4 h-4 ${saved ? 'fill-red-500 text-red-500' : ''}"></i>`;
  btn.classList.remove('wish-pop');
  void btn.offsetWidth;
  btn.classList.add('wish-pop');
  if (window.lucide) lucide.createIcons();
}

async function toggleWishlist(listing, btn) {
  const id = listing.id || listing.property_id;
  const wasSaved = wishlistIds.has(id);
  const saved = !wasSaved;
  if (saved) wishlistIds.add(id); else wishlistIds.delete(id);
  saveLocalWishlist();
  updateWishlistButton(btn, saved);

  const user = await getCurrentUser();
  if (!user) {
    showToast(saved ? 'Saved to wishlist \u2665' : 'Removed from wishlist');
    if (saved) {
      setTimeout(() => showToast('Sign in to sync your wishlist across devices'), 1400);
    }
    return;
  }
  try {
    const { supabase } = await import('./supabase-client.js');
    const { data: existing } = await supabase.from('wishlist')
      .select('id').eq('listing_id', id).eq('user_id', user.id).maybeSingle();
    if (saved && !existing) {
      await supabase.from('wishlist').insert({ user_id: user.id, listing_id: id, property_id: listing.property_id });
    } else if (!saved && existing) {
      await supabase.from('wishlist').delete().eq('id', existing.id);
    }
    showToast(saved ? 'Added to wishlist \u2665' : 'Removed from wishlist');
  } catch {
    showToast('Wishlist action failed');
  }
}

// ── Section 1: Real Estate & Vehicles ──
// Each listing ID appears in exactly ONE row — no overlaps, no duplicates.
const REAL_ESTATE_SECTIONS = [
  {
    id: 'local-houses', label: 'Local Houses & Real Estate', icon: 'home',
    subtitle: 'Homes for sale or rent — scroll down to see every one, one by one.',
    rows: [
      { id: 'new-houses', label: 'Houses', icon: 'home', newHouses: true },
    ],
  },
  {
    id: 'modern-luxury', label: 'Modern Homes & Luxury Properties', icon: 'building-2',
    subtitle: 'Contemporary villas, mansions, and new-build family homes.',
    rows: [
      { id: 'new-homes', label: 'New Homes', icon: 'home', ids: ['KCO-000021', 'KCO-000022', 'KCO-000023', 'KCO-000024', 'KCO-000025', 'KCO-000026', 'KCO-000027', 'KCO-000028', 'KCO-000029', 'KCO-000030'] },
      { id: 'modern-homes', label: 'Modern Homes', icon: 'building-2', ids: ['KCO-000007', 'KCO-000010'] },
      { id: 'mansion-homes', label: 'Mansions', icon: 'landmark', ids: ['KCO-000008'] },
      { id: 'farm-house', label: 'Farm Houses', icon: 'wheat', ids: ['KCO-000011'] },
    ],
  },
  {
    id: 'commercial-land', label: 'Commercial Properties & Land', icon: 'briefcase',
    subtitle: 'Retail buildings, hotels, and investment-grade commercial real estate.',
    rows: [
      { id: 'commercial', label: 'Commercial Buildings', icon: 'store', ids: ['KCO-000012'] },
      { id: 'hotels', label: 'Hotels & Hospitality', icon: 'bed-double', ids: ['KCO-000014'] },
    ],
  },
  {
    id: 'cars', label: 'Cars', icon: 'car-front',
    subtitle: 'Brand new car arrivals — bright, shiny and ready to drive home. Scroll to see them all.',
    rows: [
      { id: 'all-cars', label: 'New Cars', icon: 'car-front', allCars: true },
    ],
  },
  {
    id: 'washing-machines', label: 'Washing Machines', icon: 'washing-machine',
    subtitle: 'Every washer, dryer and laundry item, gathered in one long scroll.',
    rows: [
      { id: 'all-washing-machines', label: 'Washing Machines', icon: 'washing-machine', allWashingMachines: true },
    ],
  },
  {
    id: 'trucks-buses', label: 'Trucks', icon: 'truck',
    subtitle: 'Heavy-duty trucks and commercial transport vehicles.',
    rows: [
      { id: 'all-trucks', label: 'All Trucks', icon: 'truck', allTrucks: true },
    ],
  },
  {
    id: 'motorhomes-boats', label: 'Motorhomes', icon: 'bus',
    subtitle: 'Luxury motorhomes and RVs for travel and adventure — one after another below.',
    rows: [
      { id: 'all-motorhomes', label: 'All Motorhomes', icon: 'bus', allMotorhomes: true },
    ],
  },
  {
    id: 'products', label: 'Products', icon: 'package',
    subtitle: 'Premium shop products — jewelry, watches, fashion and more.',
    rows: PRODUCT_ROWS,
  },
];

// ── Catalog-backed rows ────────────────────────────────────────
// Maps a showroom row to its generated catalog slug. Rows that map to a
// catalog are filled with deterministic generated listings (seeded items
// and DB items come first, then generated extras) instead of "Coming Soon".
const ROW_TO_CATALOG_SLUG = {
  // Real estate & vehicles
  'affordable-homes': 'real-estate',
  'apartment-homes': 'real-estate',
  'cape-cod': 'real-estate',
  'beach-houses': 'real-estate',
  'new-homes': 'real-estate',
  'modern-homes': 'real-estate',
  'mansion-homes': 'real-estate',
  'farm-house': 'real-estate',
  'commercial': 'real-estate',
  'hotels': 'real-estate',
  'all-cars': 'cars',
  'all-trucks': 'trucks',
  'all-motorhomes': 'motorhomes',
};

// How many generated catalog listings to append per row (after seeds/DB).
// Set to 0 — generated/AI extras are disabled so the homepage never loads
// the 235kB catalog module and stays fast on Android phones.
const GENERATED_PER_ROW = 0;

// Tiny deterministic seed so different rows in the same category
// surface different generated items instead of repeating the same set.
function rowSeed(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h % 997;
}

function getCatalogListingsForRow(rowDef, existingIds) {
  const slug = ROW_TO_CATALOG_SLUG[rowDef.id];
  if (!slug) return [];
  const c = _catalog;
  if (!c) return [];
  const def = c.getCatalogCategory(slug);
  if (!def) return [];
  const seen = new Set(existingIds);
  const cap = Math.min(GENERATED_PER_ROW, def.count);
  const out = [];
  const seed = rowSeed(rowDef.id);
  for (let i = 0; i < cap; i++) {
    const idx = (seed + i * 53) % def.count;
    const item = c.generateProduct(slug, idx);
    if (item && !seen.has(item.property_id)) {
      seen.add(item.property_id);
      if (isCatalogListingHidden(item.property_id)) continue;
      out.push(item);
    }
  }
  return out;
}

// ── Card rendering ──
// Shared computed pieces used by both the compact card (grids) and the
// full-width feed card (vertical one-by-one showroom). Kept in one place so
// the two layouts always stay consistent.
function cardParts(listing) {
  cleanListing(listing);

  const isProperty = listing.listing_type === 'property';
  const isPet = listing.listing_type === 'pet';
  const isTruck = listing.listing_type === 'vehicle' && listing.category === 'Trucks';
  const isMotorhome = listing.listing_type === 'vehicle' && listing.category === 'Motorhomes';
  const isCar = listing.listing_type === 'vehicle' && listing.category === 'Cars';
  const listingId = listing.id || listing.property_id;
  const cover = listing.images?.[0] || FALLBACK_IMG;
  const price = isTruck ? formatTruckPrice(listing) : formatPrice(listing);
  const statusBadge = listing.listing_type === 'product' ? 'New' : ((isProperty || isPet) ? 'For Sale' : '');

  // AI-generated rating: show estimated rating with "AI" label when no real reviews exist
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

  // Rating display: real reviews take priority, estimate shown without label
  let ratingStars = '';
  if (displayRating > 0) {
    ratingStars = `<div class="flex items-center gap-0.5 text-xs"><i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i><span class="text-gray-800 font-semibold">${displayRating.toFixed(1)}</span><span class="text-gray-500">(${reviewCount})</span></div>`;
  }

  // Product badges (New Arrival, Best Seller, etc.)
  const badgesHtml = '';

  // Discount badge + original (was) price, shown when the listing carries a
  // discount (discount_percent / discount / compare_at_price / original_price).
  let discountBadge = '';
  let originalPriceHtml = '';
  const discountPct = parseFloat(listing.discount_percent ?? listing.discount ?? 0);
  if (Number.isFinite(discountPct) && discountPct > 0 && discountPct < 100) {
    const pct = Math.round(discountPct);
    let originalNum = parseFloat(listing.compare_at_price ?? listing.original_price);
    if (!Number.isFinite(originalNum) || originalNum <= 0) originalNum = listing.price / (1 - discountPct / 100);
    const fmtNum = (n) => (isTruck ? formatTruckPrice({ ...listing, price: n }) : formatPrice({ ...listing, price: n }));
    discountBadge = `<span class="absolute bottom-2 left-2 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-full shadow-md shadow-red-500/30">-${pct}%</span>`;
    originalPriceHtml = `<span class="text-xs text-gray-400 line-through">${fmtNum(originalNum)}</span>`;
  }

  // Map preview strip for property cards (rendered from listing coordinates).
  let mapPreviewHtml = '';
  if (isProperty && listing.latitude && listing.longitude) {
    const mapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${listing.latitude},${listing.longitude}&zoom=13&size=600x160&markers=${listing.latitude},${listing.longitude},color-red&maptype=mapnik`;
    mapPreviewHtml = `
      <div class="relative mt-2.5 h-20 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
        <img src="${mapUrl}" alt="Map location for ${listing.title}" loading="lazy" decoding="async" class="w-full h-full object-cover" onerror="this.onerror=null;this.style.display='none'">
        <span class="absolute top-1 left-1 bg-black/70 backdrop-blur-sm text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full inline-flex items-center gap-1"><i data-lucide="map" class="w-3 h-3"></i>Map · ${listing.city || listing.town || ''}</span>
      </div>`;
  }

  return {
    isProperty, isPet, isTruck, isMotorhome, isCar,
    listingId, cover, price, statusBadge,
    locationHtml, specsHtml, ratingStars, mapPreviewHtml,
    discountBadge, originalPriceHtml,
  };
}

export function renderCard(listing) {
  const p = cardParts(listing);
  const card = document.createElement('div');
  card.className = 'showroom-card group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 flex flex-col cursor-pointer';
  card.dataset.id = p.listingId;

  const wishSaved = isSaved(listing);

  card.innerHTML = `
    <div class="relative aspect-[4/3] overflow-hidden bg-gray-100">
      <img src="${p.cover}" alt="${listing.title}" loading="lazy" decoding="async"
           class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
           onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
      ${p.statusBadge ? `<span class="absolute top-2 left-2 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full">${p.statusBadge}</span>` : ''}
      ${p.discountBadge}
      <div class="absolute top-2 right-2 flex flex-col gap-1.5">
        <button class="share-btn shrink-0 w-7 h-7 bg-white/90 hover:bg-white text-gray-500 hover:text-blue-600 rounded-full shadow-sm transition flex items-center justify-center" title="Share product" aria-label="Share product">
          <i data-lucide="share-2" class="w-4 h-4"></i>
        </button>
        <button class="wishlist-btn ${wishSaved ? 'saved bg-red-500/15 text-red-500 border border-red-500/40' : ''} shrink-0 w-7 h-7 bg-white/90 hover:bg-white text-gray-500 hover:text-red-500 rounded-full shadow-sm transition flex items-center justify-center" title="${wishSaved ? 'Remove from wishlist' : 'Add to wishlist'}" aria-label="${wishSaved ? 'Remove from wishlist' : 'Add to wishlist'}">
          <i data-lucide="heart" class="w-4 h-4 ${wishSaved ? 'fill-red-500 text-red-500' : ''}"></i>
        </button>
      </div>
    </div>
    <div class="p-3 flex flex-col flex-1">
      <h3 class="text-[13px] font-bold text-gray-900 leading-snug mb-1 line-clamp-2">${listing.title}</h3>
      ${p.ratingStars}
      <div class="flex items-baseline flex-wrap gap-x-1.5 gap-y-0.5 mt-1">
        <span class="text-[15px] font-black text-blue-600">${p.price}</span>
        ${p.originalPriceHtml}
      </div>
      ${p.locationHtml}
      ${p.specsHtml}
      <div class="flex gap-1.5 mt-2 pt-2 border-t border-gray-100">
        <button class="buy-btn flex-1 min-w-0 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white text-[11px] font-bold py-2 rounded-lg transition flex items-center justify-center gap-1">
          <i data-lucide="shopping-bag" class="w-3.5 h-3.5 shrink-0"></i> <span class="truncate">Buy</span>
        </button>
        <button class="cart-btn flex-1 min-w-0 bg-gray-50 hover:bg-blue-50 active:scale-95 text-gray-700 hover:text-blue-700 text-[11px] font-bold py-2 rounded-lg transition flex items-center justify-center gap-1 border border-gray-200 hover:border-blue-300">
          <i data-lucide="shopping-cart" class="w-3.5 h-3.5 shrink-0"></i> <span class="truncate">Cart</span>
        </button>
      </div>
    </div>
  `;

  attachCardListeners(card, listing);

  return card;
}

// Full-width "feed" card for the vertical one-by-one showroom: large image on
// the left (top on mobile), details on the right, generous padding. Reads like
// a magazine feed as the page scrolls straight down.
export function renderFeedCard(listing) {
  const p = cardParts(listing);
  const card = document.createElement('div');
  card.className = 'showroom-card showroom-feed-card group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 flex flex-col sm:flex-row cursor-pointer';
  card.dataset.id = p.listingId;

  const wishSaved = isSaved(listing);

  card.innerHTML = `
    <div class="relative shrink-0 sm:w-[42%] lg:w-[38%] xl:w-[34%] aspect-[16/10] sm:aspect-auto sm:min-h-[280px] overflow-hidden bg-gray-100">
      <img src="${p.cover}" alt="${listing.title}" loading="lazy" decoding="async"
           class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
           onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
      ${p.statusBadge ? `<span class="absolute top-2.5 left-2.5 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">${p.statusBadge}</span>` : ''}
      ${p.discountBadge}
      <span class="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 bg-black/55 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <i data-lucide="expand" class="w-3.5 h-3.5"></i> View
      </span>
    </div>
    <div class="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col min-w-0">
      <h3 class="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-1.5 line-clamp-2 group-hover:text-blue-700 transition-colors">${listing.title}</h3>
      ${p.locationHtml}
      ${p.specsHtml}
      <div class="flex items-center justify-between gap-3 mt-auto pt-2">
        <span class="flex items-baseline flex-wrap gap-x-2"><span class="text-xl sm:text-2xl font-black text-blue-600">${p.price}</span>${p.originalPriceHtml}</span>
        ${p.ratingStars}
      </div>
      ${p.mapPreviewHtml}
      <div class="flex items-center gap-1.5 mt-2.5 pt-2.5 border-t border-gray-100 justify-end">
        <button class="share-btn shrink-0 w-9 h-9 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-500 rounded-xl transition flex items-center justify-center" title="Share product" aria-label="Share product">
          <i data-lucide="share-2" class="w-4 h-4"></i>
        </button>
        <button class="wishlist-btn ${wishSaved ? 'saved bg-red-500/20 text-red-400 border border-red-500/40' : ''} shrink-0 w-9 h-9 bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-500 rounded-xl transition flex items-center justify-center" title="${wishSaved ? 'Remove from wishlist' : 'Add to wishlist'}" aria-label="${wishSaved ? 'Remove from wishlist' : 'Add to wishlist'}">
          <i data-lucide="heart" class="w-4 h-4 ${wishSaved ? 'fill-red-500 text-red-500' : ''}"></i>
        </button>
      </div>
      <div class="flex gap-2 mt-2.5">
        <button class="buy-btn flex-1 min-w-0 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white text-xs font-bold py-3.5 rounded-xl transition uppercase tracking-wide flex items-center justify-center gap-1.5 shadow-sm shadow-blue-500/25">
          <i data-lucide="shopping-bag" class="w-4 h-4 shrink-0"></i> <span class="truncate">Buy Now</span>
        </button>
        <button class="cart-btn flex-1 min-w-0 bg-emerald-50 hover:bg-emerald-100 active:scale-95 text-emerald-700 hover:text-emerald-800 text-xs font-bold py-3.5 rounded-xl transition uppercase tracking-wide flex items-center justify-center gap-1.5 border border-emerald-300 hover:border-emerald-400">
          <i data-lucide="shopping-cart" class="w-4 h-4 shrink-0"></i> <span class="truncate">Add to Cart</span>
        </button>
        <button class="details-btn flex-1 min-w-0 bg-gray-50 hover:bg-gray-100 active:scale-95 text-gray-700 hover:text-gray-900 text-xs font-bold py-3.5 rounded-xl transition uppercase tracking-wide flex items-center justify-center gap-1.5 border border-gray-300 hover:border-gray-400">
          <i data-lucide="eye" class="w-4 h-4 shrink-0"></i> <span class="truncate">View Details</span>
        </button>
      </div>
    </div>
  `;

  attachCardListeners(card, listing);

  return card;
}

// Wire the per-card actions onto an existing card element. Used by renderCard
// and by the pre-render adoption pass (the static cards in index.html).
function attachCardListeners(card, listing) {
  card.addEventListener('click', (e) => {
    if (e.target.closest('button')) return;
    window.location.href = `/details.html?id=${listing.property_id}`;
  });
  card.querySelector('.buy-btn').addEventListener('click', (e) => { e.stopPropagation(); handleBuyNow(listing); });
  card.querySelector('.wishlist-btn').addEventListener('click', (e) => { e.stopPropagation(); toggleWishlist(listing, e.currentTarget); });
  card.querySelector('.share-btn').addEventListener('click', (e) => { e.stopPropagation(); handleShare(listing); });
  card.querySelector('.cart-btn')?.addEventListener('click', (e) => { e.stopPropagation(); addToCart(listing); });
  card.querySelector('.details-btn')?.addEventListener('click', (e) => { e.stopPropagation(); window.location.href = `/details.html?id=${listing.property_id}`; });
}

async function handleBuyNow(listing) {
  const user = await getCurrentUser();
  if (user) {
    window.location.href = `/checkout.html?id=${listing.property_id}`;
  } else {
    setRedirectAfterAuth(`/checkout.html?id=${listing.property_id}`);
    window.location.href = `/auth.html?redirect=${encodeURIComponent('/checkout.html?id=' + listing.property_id)}`;
  }
}

// Add the listing to the on-device cart (same kco_cart store the details page
// and checkout read from). Duplicate adds are ignored.
function addToCart(listing) {
  const id = listing.property_id || listing.id;
  try {
    let cart = JSON.parse(localStorage.getItem('kco_cart') || '[]');
    if (!Array.isArray(cart)) cart = [];
    if (!cart.includes(id)) {
      cart.push(id);
      localStorage.setItem('kco_cart', JSON.stringify(cart));
    }
  } catch { /* noop */ }
  showToast('Added to cart');
}

function handleShare(listing) {
  const url = `${window.location.origin}/details.html?id=${listing.property_id}`;
  if (navigator.share) {
    navigator.share({ title: listing.title, url }).catch(() => {});
  } else {
    navigator.clipboard?.writeText(url).then(() => showToast('Link copied to clipboard'));
  }
}

function showToast(msg) {
  let toast = document.getElementById('card-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'card-toast';
    toast.className = 'fixed bottom-5 right-5 z-[200] bg-gray-900 border border-blue-500/30 text-white px-4 py-2.5 rounded-xl shadow-xl text-xs font-medium transition-all duration-300 pointer-events-none';
    toast.style.transform = 'translateY(20px)';
    toast.style.opacity = '0';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.transform = 'translateY(20px)';
    toast.style.opacity = '0';
  }, 2500);
}

// ── Row rendering ──

// ── Man row ─────────────────────────────────────────────────────
function getRowListings(rowDef) {
  let listings;
  if (rowDef.allTrucks) {
    listings = ALL_TRUCKS;
  } else if (rowDef.allMotorhomes) {
    listings = ALL_MOTORHOMES;
  } else if (rowDef.allCars) {
    listings = ALL_CARS;
  } else if (rowDef.newHouses) {
    listings = ALL_HOUSES;
  } else if (rowDef.allWashingMachines) {
    listings = ALL_WASHING_MACHINES;
  } else if (rowDef.productCategory) {
    listings = ALL_PRODUCTS.filter(l => (l.category || 'New Arrivals') === rowDef.productCategory);
  } else if (rowDef.allProducts) {
    listings = rowDef.productRange ? ALL_PRODUCTS.slice(rowDef.productRange[0], rowDef.productRange[1]) : ALL_PRODUCTS;
  } else {
    listings = getListingsByIds(rowDef.ids);
  }
  let catalogExtra = [];
  if (!rowDef.allTrucks && !rowDef.allMotorhomes && !rowDef.allCars && !rowDef.newHouses && !rowDef.allProducts && !rowDef.productCategory && !rowDef.allWashingMachines) {
    catalogExtra = getCatalogListingsForRow(rowDef, listings.map(l => l.property_id));
  }
  if (catalogExtra.length > 0) {
    listings = [...listings, ...catalogExtra];
  }
  return listings;
}

function renderRow(rowDef) {
  const listings = getRowListings(rowDef);
  const hasItems = listings.length > 0;
  // Normal products (and washing machines) always use the compact 2-column
  // grid in grid mode so customers scroll down to browse; houses, cars,
  // trucks and motorhomes keep their larger feed card instead.
  const isGrid = viewMode === 'grid'
    ? Boolean(rowDef.layout === 'grid' || rowDef.productCategory || rowDef.allWashingMachines || rowDef.allProducts)
    : rowDef.layout === 'grid';
  const lineMode = isLineMode() && !isGrid;

  const row = document.createElement('div');
  row.className = 'showroom-row relative';
  row.dataset.rowId = rowDef.id;
  if (isGrid) row.dataset.layout = 'grid';
  if (lineMode) row.dataset.layout = 'line';

  row.innerHTML = `
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2.5 min-w-0">
        <span class="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
          <i data-lucide="${rowDef.icon}" class="w-4 h-4 text-blue-600"></i>
        </span>
        <h4 class="text-base font-bold text-gray-900 tracking-wide truncate">${rowDef.label}</h4>
        ${hasItems ? `<span class="hidden sm:inline-flex shrink-0 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300">${listings.length} Items</span>` : ''}
      </div>
      <div class="flex items-center gap-1 ${hasItems && lineMode ? '' : 'hidden'}">
        <button class="scroll-left hscroll-btn p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition" aria-label="Scroll left">
          <i data-lucide="chevron-left" class="w-4 h-4"></i>
        </button>
        <button class="scroll-right hscroll-btn p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition" aria-label="Scroll right">
          <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
    <div class="${isGrid ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4' : lineMode ? 'hscroll flex gap-4 overflow-x-auto scrollbar-none pb-1' : 'showroom-feed flex flex-col gap-4 sm:gap-5'}"></div>
  `;

  const track = row.querySelector(isGrid ? '.grid' : lineMode ? '.hscroll' : '.showroom-feed');

  if (hasItems) {
    const frag = document.createDocumentFragment();
    listings.forEach(listing => frag.appendChild(isGrid ? renderCard(listing) : lineMode ? renderCard(listing) : renderFeedCard(listing)));
    track.appendChild(frag);
  } else {
    track.innerHTML = `<div class="flex items-center justify-center w-full py-6">
      <span class="inline-flex items-center gap-2 text-sm text-gray-500 uppercase tracking-widest border border-dashed border-gray-300 rounded-xl px-5 py-3">Coming Soon</span>
    </div>`;
  }

  row.querySelector('.scroll-left')?.addEventListener('click', () => scrollRow(row, -1));
  row.querySelector('.scroll-right')?.addEventListener('click', () => scrollRow(row, 1));

  return row;
}

// ── Section rendering ──
// Professional showroom headings: large gradient title, glowing icon tile,
// subtitle, live item count, and a clean divider. Products flow continuously.
function countSectionItems(section) {
  let count = 0;
  section.rows.forEach((r) => {
    const base = r.allTrucks ? ALL_TRUCKS : r.allMotorhomes ? ALL_MOTORHOMES : r.allCars ? ALL_CARS : r.newHouses ? ALL_HOUSES : r.allWashingMachines ? ALL_WASHING_MACHINES : r.productCategory ? ALL_PRODUCTS.filter(l => (l.category || 'New Arrivals') === r.productCategory) : r.allProducts ? (r.productRange ? ALL_PRODUCTS.slice(r.productRange[0], r.productRange[1]) : ALL_PRODUCTS) : getListingsByIds(r.ids);
    count += base.length;
    if (!r.allTrucks && !r.allMotorhomes && !r.allCars && !r.allProducts && !r.productCategory && !r.allWashingMachines) {
      count += getCatalogListingsForRow(r, base.map(l => l.property_id)).length;
    }
  });
  return count;
}

function renderSection(section, accentColor, maxRows) {
  const sec = document.createElement('div');
  sec.className = 'showroom-section space-y-3';

  const isCars = section.id === 'cars' || section.id === 'local-houses';
  const accentText = isCars ? 'text-amber-300' : 'text-blue-300';
  const accentBorder = isCars ? 'border-amber-400/40' : 'border-blue-500/30';
  const accentBg = isCars ? 'bg-amber-400/15' : 'bg-blue-500/10';
  const glow = isCars ? '0 0 26px rgba(251,191,36,0.35)' : '0 0 22px rgba(59,130,246,0.25)';
  const gradient = isCars ? 'from-amber-100 via-white to-orange-200' : 'from-blue-200 via-white to-blue-300';
  const itemCount = countSectionItems(section);

  if (isCars) {
    sec.style.background = 'linear-gradient(180deg, rgba(255,245,215,0.55) 0%, rgba(255,255,255,0) 55%)';
    sec.style.borderRadius = '1.25rem';
    sec.style.padding = '0.25rem 0.5rem 0.5rem';
    sec.style.boxShadow = 'inset 0 0 40px rgba(251,191,36,0.10)';
  }

  const header = document.createElement('div');
  header.className = 'relative pt-2 pb-3';
  header.innerHTML = `
    <div class="flex items-center gap-3.5">
      <div class="p-3 rounded-2xl border ${accentBorder} ${accentBg} shrink-0" style="box-shadow:${glow}">
        <i data-lucide="${section.icon}" class="w-6 h-6 ${accentText}"></i>
      </div>
      <div class="flex-1 min-w-0">
        <h3 class="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight">
          <span class="bg-gradient-to-r ${gradient} bg-clip-text text-transparent">${section.label}</span>
        </h3>
        <p class="text-gray-400 text-xs sm:text-[13px] leading-tight mt-1 truncate">${section.subtitle}</p>
      </div>
      <span class="hidden sm:inline-flex shrink-0 items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full border ${accentBorder} ${accentBg} ${accentText}">${itemCount} Items</span>
    </div>
    <div class="mt-3 h-px bg-gradient-to-r ${isCars ? 'from-amber-400/60 via-orange-300/40' : 'from-blue-500/40 via-gray-700/40'} to-transparent"></div>
  `;
  sec.appendChild(header);

  const rowsToShow = (maxRows && maxRows > 0) ? section.rows.slice(0, maxRows) : section.rows;
  rowsToShow.forEach(rowDef => {
    sec.appendChild(renderRow(rowDef));
  });

  return sec;
}

// ── Incremental overlay renderer ────────────────────────────────
// The "View All" overlays hold thousands of catalog cards. Instead of
// building them all at once (which freezes phones), we keep a buffer of
// rendered cards AHEAD of the scroll position and top it up as the user
// scrolls — so scrolling is continuous, with no waiting or gaps.
// Cards are created with the exact same renderCard — style untouched.
const OVERLAY_CHUNK_SIZE = 24;
const OVERLAY_BUFFER_HEIGHTS = 2;
const OVERLAY_IO_MARGIN = 1200;

function createIncrementalLoader(scroller, body, units) {
  let gi = 0;
  let ii = 0;
  let pumpTimer = null;
  let io = null;
  let onScroll = null;
  const sentinel = document.createElement('div');
  sentinel.className = 'incremental-sentinel';
  body.appendChild(sentinel);

  const finish = () => {
    if (io) io.disconnect();
    if (onScroll) scroller.removeEventListener('scroll', onScroll);
    if (pumpTimer != null) cancelAnimationFrame(pumpTimer);
    sentinel.remove();
  };

  const bufferOk = () => {
    if (!scroller.clientHeight) return false;
    const sentinelTop = sentinel.offsetTop;
    const viewBottom = scroller.scrollTop + scroller.clientHeight;
    return sentinelTop - viewBottom < OVERLAY_BUFFER_HEIGHTS * scroller.clientHeight;
  };

  const loadChunk = () => {
    if (gi >= units.length) return false;
    const unit = units[gi];
    const end = Math.min(ii + OVERLAY_CHUNK_SIZE, unit.items.length);
    const frag = document.createDocumentFragment();
    for (let k = ii; k < end; k++) frag.appendChild(overlayCard(unit.items[k]));
    unit.grid.appendChild(frag);
    ii = end;
    if (ii >= unit.items.length) { gi++; ii = 0; }
    return gi < units.length;
  };

  const pumpStep = () => {
    pumpTimer = null;
    if (gi >= units.length) { finish(); return; }
    if (!bufferOk()) return;
    loadChunk();
    if (gi >= units.length) { finish(); return; }
    if (bufferOk()) pumpTimer = requestAnimationFrame(pumpStep);
  };

  const pump = () => {
    if (gi >= units.length) return;
    if (pumpTimer == null && bufferOk()) {
      pumpTimer = requestAnimationFrame(pumpStep);
    }
  };

  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver((entries) => {
      if (entries.some(en => en.isIntersecting)) pump();
    }, { root: scroller, rootMargin: `${OVERLAY_IO_MARGIN}px 0px` });
    io.observe(sentinel);
  }
  onScroll = pump;
  scroller.addEventListener('scroll', onScroll, { passive: true });

  pump();
  return { pump };
}

// ── All Houses view ────────────────────────────────────────────
// "View All Houses" opens a full-screen catalog of every property
// (seed + DB + generated catalog), grouped by property type. It reuses
// the exact same renderCard, so card style/layout never changes.
const HOUSE_SECTION_IDS = new Set(['local-houses', 'modern-luxury', 'commercial-land']);
const HOUSE_TYPE_ORDER = ['Apartment', 'Condo', 'Townhouse', 'Detached House', 'Villa', 'Beach House', 'Farm House', 'Penthouse'];

let allHousesOverlay = null;
let _housesLoader = null;
let _housesEscBound = false;

async function collectAllHouses() {
  const seen = new Set();
  const out = [];
  const add = (l) => {
    if (!l) return;
    const isHome = l.listing_type === 'property' || (l.listing_type === 'vehicle' && l.category === 'Motorhomes');
    if (!isHome) return;
    const id = l.id || l.property_id;
    if (!id || seen.has(id)) return;
    seen.add(id);
    out.push(l);
  };
  SHOWROOM_LISTINGS.forEach(add);
  getDBListings().forEach(add);
  MOTORHOME_LISTINGS.forEach(add);
  return out;
}

function groupHousesByType(houses) {
  const groups = new Map();
  houses.forEach(h => {
    const t = h.category === 'Motorhomes' ? 'Motorhomes' : (h.property_type || h.subcategory || 'Homes');
    if (!groups.has(t)) groups.set(t, []);
    groups.get(t).push(h);
  });
  const order = [...HOUSE_TYPE_ORDER, ...Array.from(groups.keys()).filter(k => !HOUSE_TYPE_ORDER.includes(k))];
  return order.filter(k => groups.has(k)).map(k => ({ type: k, items: groups.get(k) }));
}

async function buildAllHousesOverlay() {
  const existing = document.getElementById('all-houses-overlay');
  if (existing) existing.remove();
  allHousesOverlay = document.createElement('div');
  allHousesOverlay.id = 'all-houses-overlay';
  allHousesOverlay.className = 'hidden fixed inset-0 z-[80] bg-white overflow-y-auto overscroll-contain';

  const header = document.createElement('div');
  header.className = 'sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3';
  header.innerHTML = `
    <div class="flex items-center gap-3 min-w-0">
      <span class="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0"><i data-lucide="home" class="w-5 h-5 text-blue-600"></i></span>
      <div class="min-w-0">
        <h2 class="text-lg font-black text-gray-900 tracking-tight leading-tight">All Houses &amp; Motorhomes</h2>
        <p id="all-houses-count" class="text-[11px] text-gray-400 truncate"></p>
      </div>
    </div>
    <button class="close-all-houses btn-press p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition" aria-label="Close All Houses"><i data-lucide="x" class="w-5 h-5"></i></button>
  `;

  const body = document.createElement('div');
  body.id = 'all-houses-body';
  body.className = 'px-4 sm:px-6 lg:px-8 py-5 space-y-6';

  allHousesOverlay.appendChild(header);
  allHousesOverlay.appendChild(body);
  document.body.appendChild(allHousesOverlay);

  const houses = await collectAllHouses();
  const groups = groupHousesByType(houses);
  const units = groups.map(({ type, items }) => {
    const label = /s$/i.test(type) ? type : type + 's';
    const sec = document.createElement('section');
    sec.className = 'space-y-3';
    const head = document.createElement('div');
    head.className = 'flex items-center justify-between gap-2';
    head.innerHTML = `
      <div class="flex items-center gap-2.5 min-w-0">
        <span class="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0"><i data-lucide="building-2" class="w-4 h-4 text-blue-600"></i></span>
        <h3 class="text-base font-bold text-gray-100 tracking-wide truncate">${label}</h3>
      </div>
      <span class="hidden sm:inline-flex shrink-0 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300">${items.length} Properties</span>
    `;
    const grid = document.createElement('div');
    grid.className = overlayContainerClass();
    sec.appendChild(head);
    sec.appendChild(grid);
    body.appendChild(sec);
    return { grid, items };
  });

  _housesLoader = createIncrementalLoader(allHousesOverlay, body, units);

  const countEl = document.getElementById('all-houses-count');
  if (countEl) countEl.textContent = `${houses.length} homes · houses & motorhomes worldwide`;

  header.querySelector('.close-all-houses').addEventListener('click', closeAllHousesView);
  allHousesOverlay.addEventListener('click', (e) => { if (e.target === allHousesOverlay) closeAllHousesView(); });

  if (!_housesEscBound) {
    _housesEscBound = true;
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAllHousesView(); });
  }

  if (window.lucide) lucide.createIcons();
}

async function openAllHousesView() {
  if (!allHousesOverlay || !document.getElementById('all-houses-overlay')) await buildAllHousesOverlay();
  if (window.lucide) lucide.createIcons();
  allHousesOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  allHousesOverlay.scrollTop = 0;
  if (_housesLoader) _housesLoader.pump();
}

function closeAllHousesView() {
  if (!allHousesOverlay) return;
  allHousesOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

function createViewAllHousesButton() {
  const wrap = document.createElement('div');
  wrap.className = 'flex justify-center py-1';
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'view-all-houses-btn btn-press flex items-center justify-center gap-2 w-full max-w-md py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-base font-extrabold tracking-wide shadow-lg shadow-blue-600/30 transition active:scale-95';
  btn.innerHTML = `View All Houses &amp; Motorhomes Worldwide <span class="text-lg">→ 🌎</span>`;
  btn.addEventListener('click', openAllHousesView);
  wrap.appendChild(btn);
  return wrap;
}

// ── All Cars view ──────────────────────────────────────────────
// "View all Cars" opens a full-screen catalog of every car listing
// (real photos), shown in a beautiful responsive card grid. Reuses
// the same renderCard + loader.
const VEHICLE_SECTION_IDS = new Set(['cars', 'trucks-buses']);

let allCarsOverlay = null;
let _carsLoader = null;
let _carsEscBound = false;

function buildAllCarsOverlay() {
  const existing = document.getElementById('all-cars-overlay');
  if (existing) existing.remove();
  allCarsOverlay = document.createElement('div');
  allCarsOverlay.id = 'all-cars-overlay';
  allCarsOverlay.className = 'hidden fixed inset-0 z-[80] bg-white overflow-y-auto overscroll-contain';

  const header = document.createElement('div');
  header.className = 'sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3';
  header.innerHTML = `
    <div class="flex items-center gap-3 min-w-0">
      <span class="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0"><i data-lucide="car-front" class="w-5 h-5 text-amber-600"></i></span>
      <div class="min-w-0">
        <h2 class="text-lg font-black text-gray-900 tracking-tight leading-tight">All Cars</h2>
        <p id="all-cars-count" class="text-[11px] text-gray-400 truncate"></p>
      </div>
    </div>
    <button class="close-all-cars btn-press p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition" aria-label="Close All Cars"><i data-lucide="x" class="w-5 h-5"></i></button>
  `;

  const body = document.createElement('div');
  body.id = 'all-cars-body';
  body.className = 'px-4 sm:px-6 lg:px-8 py-5 space-y-6';

  allCarsOverlay.appendChild(header);
  allCarsOverlay.appendChild(body);
  document.body.appendChild(allCarsOverlay);

  const cars = ALL_CARS.filter(l => l && !isCatalogListingHidden(l.property_id));
  const grid = document.createElement('div');
  grid.className = overlayContainerClass();
  body.appendChild(grid);

  _carsLoader = createIncrementalLoader(allCarsOverlay, body, [{ grid, items: cars }]);

  const countEl = document.getElementById('all-cars-count');
  if (countEl) countEl.textContent = `${cars.length} cars · latest models worldwide`;

  header.querySelector('.close-all-cars').addEventListener('click', closeAllCarsView);
  allCarsOverlay.addEventListener('click', (e) => { if (e.target === allCarsOverlay) closeAllCarsView(); });

  if (!_carsEscBound) {
    _carsEscBound = true;
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAllCarsView(); });
  }

  if (window.lucide) lucide.createIcons();
}

function openAllCarsView() {
  if (!allCarsOverlay || !document.getElementById('all-cars-overlay')) buildAllCarsOverlay();
  if (window.lucide) lucide.createIcons();
  allCarsOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  allCarsOverlay.scrollTop = 0;
  if (_carsLoader) _carsLoader.pump();
}

function closeAllCarsView() {
  if (!allCarsOverlay) return;
  allCarsOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

function createViewAllCarsButton() {
  const wrap = document.createElement('div');
  wrap.className = 'flex justify-center py-1';
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'view-all-cars-btn btn-press flex items-center justify-center gap-2 w-full max-w-md py-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white text-base font-extrabold tracking-wide shadow-lg shadow-amber-600/30 transition active:scale-95';
  btn.innerHTML = `View all Cars <span class="text-lg">→ 🚗</span>`;
  btn.addEventListener('click', openAllCarsView);
  wrap.appendChild(btn);
  return wrap;
}

// ── All Trucks view ────────────────────────────────────────────
// "View all Trucks" opens a full-screen catalog of every truck listing
// (real photos), shown in a beautiful responsive card grid that starts
// with the newest models. Reuses the same renderCard + loader.
let allTrucksOverlay = null;
let _trucksLoader = null;
let _trucksEscBound = false;

function buildAllTrucksOverlay() {
  const existing = document.getElementById('all-trucks-overlay');
  if (existing) existing.remove();
  allTrucksOverlay = document.createElement('div');
  allTrucksOverlay.id = 'all-trucks-overlay';
  allTrucksOverlay.className = 'hidden fixed inset-0 z-[80] bg-white overflow-y-auto overscroll-contain';

  const header = document.createElement('div');
  header.className = 'sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3';
  header.innerHTML = `
    <div class="flex items-center gap-3 min-w-0">
      <span class="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0"><i data-lucide="truck" class="w-5 h-5 text-amber-600"></i></span>
      <div class="min-w-0">
        <h2 class="text-lg font-black text-gray-900 tracking-tight leading-tight">All Trucks</h2>
        <p id="all-trucks-count" class="text-[11px] text-gray-400 truncate"></p>
      </div>
    </div>
    <button class="close-all-trucks btn-press p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition" aria-label="Close All Trucks"><i data-lucide="x" class="w-5 h-5"></i></button>
  `;

  const body = document.createElement('div');
  body.id = 'all-trucks-body';
  body.className = 'px-4 sm:px-6 lg:px-8 py-5 space-y-6';

  allTrucksOverlay.appendChild(header);
  allTrucksOverlay.appendChild(body);
  document.body.appendChild(allTrucksOverlay);

  const trucks = ALL_TRUCKS.filter(l => l && !isCatalogListingHidden(l.property_id));
  const grid = document.createElement('div');
  grid.className = overlayContainerClass();
  body.appendChild(grid);

  _trucksLoader = createIncrementalLoader(allTrucksOverlay, body, [{ grid, items: trucks }]);

  const countEl = document.getElementById('all-trucks-count');
  if (countEl) countEl.textContent = `${trucks.length} trucks · latest models worldwide`;

  header.querySelector('.close-all-trucks').addEventListener('click', closeAllTrucksView);
  allTrucksOverlay.addEventListener('click', (e) => { if (e.target === allTrucksOverlay) closeAllTrucksView(); });

  if (!_trucksEscBound) {
    _trucksEscBound = true;
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAllTrucksView(); });
  }

  if (window.lucide) lucide.createIcons();
}

function openAllTrucksView() {
  if (!allTrucksOverlay || !document.getElementById('all-trucks-overlay')) buildAllTrucksOverlay();
  if (window.lucide) lucide.createIcons();
  allTrucksOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  allTrucksOverlay.scrollTop = 0;
  if (_trucksLoader) _trucksLoader.pump();
}

function closeAllTrucksView() {
  if (!allTrucksOverlay) return;
  allTrucksOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

function createViewAllTrucksButton() {
  const total = ALL_TRUCKS.filter(l => l && !isCatalogListingHidden(l.property_id)).length;
  const wrap = document.createElement('div');
  wrap.className = 'flex justify-center py-1';
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'view-all-trucks-btn btn-press flex items-center justify-center gap-2 w-full max-w-md py-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white text-base font-extrabold tracking-wide shadow-lg shadow-amber-600/30 transition active:scale-95';
  btn.innerHTML = `See More Trucks <span class="inline-flex items-center rounded-full bg-white/20 px-2 py-0.5 text-xs font-bold">${total}</span> <span class="text-lg">→ 🚚</span>`;
  btn.addEventListener('click', openAllTrucksView);
  wrap.appendChild(btn);
  return wrap;
}

// ── Grid renderer ───────────────────────────────────────────────
function renderGrid(gridName) {
  const container = document.querySelector(`[data-showroom-grid="${gridName}"]`);
  if (!container || container.dataset.initialized) return;
  container.dataset.initialized = 'true';

  // Static content may already be baked into index.html (build-time
  // pre-render). When present we adopt it in place instead of wiping it,
  // so there is never a blank-grid flash and no re-render.
  const prerendered = container.dataset.prerendered === 'true';
  delete container.dataset.prerendered;
  if (!prerendered) container.innerHTML = '';

  const preRenderedRowIds = new Set();
  if (prerendered) {
    container.querySelectorAll('.showroom-row[data-row-id]').forEach(r => preRenderedRowIds.add(r.dataset.rowId));
  }
  const hasRow = (id) => preRenderedRowIds.has(id);

  const sections = REAL_ESTATE_SECTIONS;
  const accent = 'blue';

  if (gridName === 'real-estate') {
    // Compact homepage: 1 line houses, 1 line cars, 1 line washing
    // machines, 1 line trucks, 1 line motorhomes, then products.
    const byId = new Map(sections.map(s => [s.id, s]));
    for (const id of ['local-houses', 'cars', 'washing-machines', 'trucks-buses', 'motorhomes-boats', 'products']) {
      const section = byId.get(id);
      if (!section) continue;
      const alreadyRendered = section.rows.some(r => hasRow(r.id));
      if (!alreadyRendered) {
        const isTeaser = HOUSE_SECTION_IDS.has(id) || VEHICLE_SECTION_IDS.has(id);
        container.appendChild(renderSection(section, accent, isTeaser ? 1 : undefined));
      }
      if (id === 'motorhomes-boats' && !container.querySelector('[data-viewall="houses"]')) container.appendChild(createViewAllHousesButton());
      if (id === 'cars' && !container.querySelector('[data-viewall="cars"]')) container.appendChild(createViewAllCarsButton());
      if (id === 'trucks-buses') container.appendChild(createViewAllTrucksButton());
    }
    // modern-luxury & commercial-land are intentionally left off the
    // homepage — every property stays reachable in the All Houses overlay.
  } else {
    sections.forEach(section => {
      container.appendChild(renderSection(section, accent));
    });
  }

  if (window.lucide) lucide.createIcons();
  adoptPrerendered(container);
}

// Find a row definition by its id across the showroom sections.
function findRowDef(id) {
  for (const s of REAL_ESTATE_SECTIONS) {
    for (const r of s.rows) if (r.id === id) return r;
  }
  return null;
}

// Wire up the static pre-rendered rows/buttons baked into index.html at build
// time so every card, scroll arrow, and "View All" button behaves exactly like
// a freshly rendered one. JS-rendered elements are left untouched.
function adoptPrerendered(container) {
  container.querySelectorAll('.showroom-row[data-prerendered]').forEach(row => {
    const rowDef = findRowDef(row.dataset.rowId);
    if (!rowDef) return;
    const listings = getRowListings(rowDef);
    const track = row.querySelector('.showroom-feed, .grid');
    if (track) {
      track.querySelectorAll('.showroom-card').forEach(card => {
        const id = card.dataset.id;
        const listing = listings.find(l => (l.id || l.property_id) === id);
        if (listing) attachCardListeners(card, listing);
        else if (id) attachCardListeners(card, { id, property_id: id, title: id });
      });
    }
    delete row.dataset.prerendered;
  });

  container.querySelectorAll('[data-viewall][data-prerendered]').forEach(wrap => {
    const kind = wrap.dataset.viewall;
    const btn = wrap.querySelector('button');
    if (!btn) return;
    if (kind === 'houses') btn.addEventListener('click', openAllHousesView);
    else if (kind === 'cars') btn.addEventListener('click', openAllCarsView);
    delete wrap.dataset.prerendered;
  });
}

// Render every showroom grid. Preserves each row's horizontal scroll
// position so a background refresh never makes the page jump.
function renderAllGrids() {
  const grids = document.querySelectorAll('[data-showroom-grid]');
  if (isLineMode()) {
    // The baked static HTML is the one-by-one feed; when the saved mode is
    // "By Line" we must replace it, not adopt it.
    grids.forEach(g => {
      delete g.dataset.prerendered;
      g.innerHTML = '';
    });
  }
  grids.forEach((g, i) => {
    const name = g.dataset.showroomGrid;
    const run = () => renderGrid(name);
    if (i === 0) {
      // Render the above-the-fold grid immediately so the page paints fast.
      run();
    } else if (window.requestIdleCallback) {
      // Defer any remaining grid to idle time so it never blocks first paint.
      requestIdleCallback(run, { timeout: 2000 });
    } else {
      setTimeout(run, 0);
    }
  });
}

// ── Category filtering ──
function collectAllRows() {
  return REAL_ESTATE_SECTIONS
    .flatMap(s => s.rows.map(r => ({ section: s, row: r })));
}

function categoryMatches(catName, sectionLabel, rowLabel) {
  if (catName === 'All') return true;
  const n = catName.toLowerCase();
  const s = (sectionLabel || '').toLowerCase();
  const r = (rowLabel || '').toLowerCase();
  const keywords = {
    'women': ['women', 'woman'], 'men': ['men', 'man'], 'kids': ['kids', 'kid', 'child', 'baby'],
    'home': ['home'], 'sports': ['sport', 'fitness', 'gym', 'athletic'], 'jewellery': ['jewel'],
    'electronics': ['electronic', 'gadget'], 'cars': ['car'], 'motorcycles': ['motorcycle', 'motor'],
    'phones': ['phone', 'smartphone', 'mobile'], 'computers': ['computer', 'laptop', 'monitor'],
    'furniture': ['furniture', 'armchair', 'chair', 'table', 'sofa'], 'beauty': ['beauty', 'cosmetic', 'makeup', 'skincare'],
    'fashion': ['fashion', 'apparel', 'clothing'],     'real estate': ['real estate', 'house', 'property', 'apartment', 'villa', 'motorhome', 'camper', 'rv'],
    'bicycles': ['bicycle', 'bike', 'cycling'], 'trucks': ['truck'], 'land': ['land', 'commercial'],
    'kitchen': ['kitchen', 'cookware', 'utensil'], 'food': ['food', 'grocer', 'groceries'],
    'pets': ['pet'], 'books': ['book'], 'toys': ['toy', 'game', 'hobby'], 'services': ['service', 'industrial', 'equipment'],
  };
  const kws = keywords[n] || [n];
  return kws.some(k => s.includes(k) || r.includes(k));
}

export function filterShowroomByCategory(categoryName) {
  const grid = document.querySelector('[data-showroom-grid="real-estate"]');
  if (!grid) return;
  const allRows = collectAllRows();
  allRows.forEach(({ section, row }) => {
    const rowEl = grid.querySelector(`[data-row-id="${row.id}"]`);
    if (!rowEl) return;
    const match = categoryMatches(categoryName, section.label, row.label);
    rowEl.style.display = match ? '' : 'none';
  });
  grid.querySelectorAll('.showroom-section').forEach(sec => {
    const visibleRows = sec.querySelectorAll('.showroom-row:not([style*="display: none"])');
    sec.style.display = visibleRows.length > 0 ? '' : 'none';
  });
}

export function clearShowroomFilter() {
  const grids = document.querySelectorAll('[data-showroom-grid]');
  grids.forEach(grid => {
    grid.querySelectorAll('.showroom-row, .showroom-section').forEach(el => {
      el.style.display = '';
    });
  });
}

// ── Data-driven category inventory ──────────────────────────────
// Aggregates every category that actually exists in the showroom
// (seed + DB products + catalog + trucks). The homepage nav is built
// from this list, so new products/categories appear automatically.
const DEPT_KEYWORDS = {
  fashion: ['women', 'men', 'kids', 'fashion', 'beauty', 'jewel', 'watch', 'shoe', 'handbag', 'apparel', 'dress', 'baby'],
  electronics: ['electronic', 'phone', 'computer', 'laptop', 'gaming', 'camera', 'software', 'digital', 'tv', 'audio', 'appliance'],
  realestate: ['real estate', 'houses', 'homes', 'apartment', 'villa', 'mansion', 'land', 'commercial', 'hotel', 'condominium', 'property', 'beach house', 'farm house', 'estate'],
  home: ['home', 'furniture', 'kitchen', 'garden', 'decor', 'pool', 'spa', 'cleaning', 'laundry', 'bedroom', 'bathroom'],
  vehicles: ['car', 'motorcycle', 'truck', 'bicycle', 'marine', 'boating', 'rv', 'camper', 'auto', 'vehicle'],
  sports: ['sport', 'fitness', 'camping', 'hiking', 'outdoor', 'gym', 'athletic', 'bike'],
  everyday: ['food', 'grocer', 'pet', 'book', 'toy', 'office', 'health', 'medical', 'music', 'instrument', 'art', 'craft', 'service', 'travel', 'luggage', 'religious', 'flower', 'gift', 'party', 'wedding', 'costume', 'coin', 'funeral', 'packaging', 'safety', 'security', 'industrial', 'business', 'educational', 'collectible', 'fireplace', 'pharmacy'],
};

export async function getShowroomCategoryInventory() {
  const counts = new Map();
  const add = (cat, sub, n = 1) => {
    if (!cat) return;
    const key = String(cat).trim();
    if (!counts.has(key)) counts.set(key, { name: key, count: 0, subs: new Set() });
    const e = counts.get(key);
    e.count += n;
    if (sub) e.subs.add(String(sub).trim());
  };
  [...SHOWROOM_LISTINGS, ...getDBListings()].forEach(l => add(l.category, l.subcategory));
  TRUCK_LISTINGS.forEach(l => add(l.category, l.subcategory));
  PRODUCT_LISTINGS.forEach(l => add(l.category, l.subcategory));
  PRODUCT_EXTRA_LISTINGS.forEach(l => add(l.category, l.subcategory));

  // Only categories that actually appear on the homepage (real estate, cars,
  // trucks, motorhomes, products) are surfaced in the nav.
  const keptLabels = REAL_ESTATE_SECTIONS.map(s => s.label);
  const productLabels = [...PRODUCT_LISTINGS, ...PRODUCT_EXTRA_LISTINGS].map(l => l.category);
  counts.forEach((entry, name) => {
    const matchesKept = keptLabels.some(label => categoryMatches(name, label, ''))
      || productLabels.some(label => categoryMatches(name, label, ''));
    if (!matchesKept) counts.delete(name);
  });

  // Display order
  const deptIds = ['fashion', 'electronics', 'home', 'vehicles', 'realestate', 'sports', 'everyday'];
  const depts = deptIds.map(id => ({ id, categories: [] }));
  const more = { id: 'more', label: 'More', icon: 'grid', color: 'gray', categories: [] };
  // Match priority (real-estate terms must win over the generic "home" keyword)
  const matchOrder = ['fashion', 'electronics', 'realestate', 'home', 'vehicles', 'sports', 'everyday'];

  counts.forEach((entry, name) => {
    const n = name.toLowerCase();
    const deptId = matchOrder.find(id => DEPT_KEYWORDS[id].some(k => n.includes(k)));
    const dept = depts.find(d => d.id === deptId);
    (dept || more).categories.push(entry);
  });

  const out = depts.map(d => {
    d.categories.sort((a, b) => b.count - a.count);
    return d;
  }).filter(d => d.categories.length);
  if (more.categories.length) out.push(more);
  return out;
}

export async function filterShowroomByDepartment(deptId) {
  const inventory = await getShowroomCategoryInventory();
  let names = [];
  inventory.forEach(d => { if (d.id === deptId) names = d.categories.map(c => c.name); });
  filterShowroomByCategories(names.length ? names : [deptId]);
}

export function filterShowroomByCategories(names) {
  const grid = document.querySelector('[data-showroom-grid="real-estate"]');
  if (!grid) return;
  const allRows = collectAllRows();
  const list = (names || []).map(n => String(n).toLowerCase()).filter(Boolean);
  allRows.forEach(({ section, row }) => {
    const rowEl = grid.querySelector(`[data-row-id="${row.id}"]`);
    if (!rowEl) return;
    const match = list.length === 0 || list.some(n => categoryMatches(n, section.label, row.label));
    rowEl.style.display = match ? '' : 'none';
  });
  grid.querySelectorAll('.showroom-section').forEach(sec => {
    const visibleRows = sec.querySelectorAll('.showroom-row:not([style*="display: none"])');
    sec.style.display = visibleRows.length > 0 ? '' : 'none';
  });
}

// ── Initialization ──
// Render all showroom grids immediately on page load so product cards,
// banners, and categories are visible without requiring a scroll event.
// The previous IntersectionObserver approach left the grids blank when
// they had zero height (nothing to intersect), producing a black gap
// after the Live Advertisement section.
let _dbSectionAdded = false;

// ── Category mapping ──────────────────────────────────────────
// Maps a product's category/subcategory field to the marketplace
// section row where it should appear.  This ensures AI-created
// products land in the correct section instead of only "New Arrivals".
const CATEGORY_TO_SECTION_ROW = {
  // Real estate & vehicles
  'Real Estate': { section: 'local-houses', row: 'affordable-homes' },
  'Apartments': { section: 'local-houses', row: 'apartment-homes' },
  'Villas': { section: 'modern-luxury', row: 'modern-homes' },
  'Mansions': { section: 'modern-luxury', row: 'mansion-homes' },
  'Beach Houses': { section: 'local-houses', row: 'beach-houses' },
  'Luxury Condominiums': { section: 'modern-luxury', row: 'modern-homes' },
  'Farm Houses': { section: 'modern-luxury', row: 'farm-house' },
  'Commercial Buildings': { section: 'commercial-land', row: 'commercial' },
  'Hotels': { section: 'commercial-land', row: 'hotels' },
  'Cars': { section: 'cars', row: 'all-cars' },
  'Motorhomes': { section: 'motorhomes-boats', row: 'all-motorhomes' },
  'Trucks': { section: 'trucks-buses', row: 'all-trucks' },
};

// Fuzzy keyword matching for categories not found exactly
const CATEGORY_KEYWORDS = [
  { keywords: ['car', 'vehicle', 'auto', 'sedan', 'suv'], target: { section: 'cars', row: 'all-cars' } },
  { keywords: ['truck', 'pickup', 'lorry'], target: { section: 'trucks-buses', row: 'all-trucks' } },
  { keywords: ['motorhome', 'camper', 'rv'], target: { section: 'motorhomes-boats', row: 'all-motorhomes' } },
  { keywords: ['apartment', 'condo', 'flat'], target: { section: 'local-houses', row: 'apartment-homes' } },
  { keywords: ['villa', 'luxury home'], target: { section: 'modern-luxury', row: 'modern-homes' } },
  { keywords: ['mansion', 'estate'], target: { section: 'modern-luxury', row: 'mansion-homes' } },
  { keywords: ['beach', 'coastal'], target: { section: 'local-houses', row: 'beach-houses' } },
  { keywords: ['farm'], target: { section: 'modern-luxury', row: 'farm-house' } },
  { keywords: ['commercial', 'retail', 'store'], target: { section: 'commercial-land', row: 'commercial' } },
  { keywords: ['hotel', 'hospitality'], target: { section: 'commercial-land', row: 'hotels' } },
];

function findSectionRowForCategory(category, subcategory) {
  if (!category) return null;
  // 1. Exact match
  const exact = CATEGORY_TO_SECTION_ROW[category];
  if (exact) return exact;
  // 2. Case-insensitive match
  const lower = category.toLowerCase();
  for (const [key, val] of Object.entries(CATEGORY_TO_SECTION_ROW)) {
    if (key.toLowerCase() === lower) return val;
  }
  // 3. Keyword fuzzy match
  for (const { keywords, target } of CATEGORY_KEYWORDS) {
    if (keywords.some(k => lower.includes(k))) return target;
  }
  // 4. Try subcategory
  if (subcategory) {
    const subLower = subcategory.toLowerCase();
    for (const { keywords, target } of CATEGORY_KEYWORDS) {
      if (keywords.some(k => subLower.includes(k))) return target;
    }
  }
  return null;
}

function findSectionAndRowById(id) {
  for (const section of REAL_ESTATE_SECTIONS) {
    for (const row of section.rows) {
      if (row.ids && row.ids.includes(id)) {
        return { sectionId: section.id, rowId: row.id };
      }
    }
  }
  return null;
}

export async function initAllShowrooms() {
  loadLocalWishlist();
  injectWishStyles();
  wireViewModePicker();

  // Paint the static catalog instantly — no network wait. Every seed
  // listing (houses, trucks, cars, catalog) is already in the bundle,
  // so the showrooms appear immediately.
  renderAllGrids();

  // Load DB products + hidden-catalog rules right away. The generated
  // catalog chunk is never fetched on the homepage (GENERATED_PER_ROW = 0),
  // so nothing extra competes with the initial paint or the supabase burst.
  const dbReady = Promise.all([loadDBListings(), loadHiddenCatalogIds()]).catch(() => {});

  try {
    await dbReady;
    await syncWishlistFromDB();
    const dbListings = getDBListings();
    const seedIds = new Set(SHOWROOM_LISTINGS.map(l => l.property_id));
    const dbOnly = dbListings.filter(l => !seedIds.has(l.property_id));

    if (dbOnly.length > 0 && !_dbSectionAdded) {
      _dbSectionAdded = true;

      // Distribute each DB product into its correct category section.
      // Products that don't map to a kept section (real estate, cars,
      // trucks, motorhomes) are simply skipped.
      for (const listing of dbOnly) {
        const target = findSectionRowForCategory(listing.category, listing.subcategory);
        if (!target) continue;
        const section = REAL_ESTATE_SECTIONS.find(s => s.id === target.section);
        if (!section) continue;
        const row = section.rows.find(r => r.id === target.row);
        if (!row) continue;
        // row.ids may be undefined for "all trucks" type rows
        if (!row.ids) row.ids = [];
        if (!row.ids.includes(listing.property_id)) {
          row.ids.push(listing.property_id);
        }
      }
    }
  } catch {
    // Static catalog is already visible; nothing else to do.
  }

  // Refresh once the DB products are ready, so the final grid shows them.
  renderAllGrids();

  window.dispatchEvent(new CustomEvent('showroom-categories-ready'));
}

// Expose filter functions to window so app.js category buttons can call them
window._filterShowroomByCategory = filterShowroomByCategory;
window._clearShowroomFilter = clearShowroomFilter;
window._filterShowroomByDepartment = filterShowroomByDepartment;
window._filterShowroomByCategories = filterShowroomByCategories;
window._getShowroomCategoryInventory = getShowroomCategoryInventory;

if (document.querySelector('[data-showroom-grid]')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAllShowrooms());
  } else {
    initAllShowrooms();
  }
}
