import { SHOWROOM_LISTINGS, formatPrice, flagEmoji, getListingsByIds, getDBListings, loadDBListings, hydrateDBListingsFromCache, cleanListing } from './showroom-data.js';
import { TRUCK_LISTINGS, formatTruckPrice } from './truck-data.js';
import { MOTORHOME_LISTINGS } from './motorhome-data.js';
import { PRODUCT_LISTINGS } from './products-data.js';
import { PRODUCT_EXTRA_LISTINGS } from './products-extra.js';
import { getCurrentUser, setRedirectAfterAuth } from './auth-lazy.js';
import { isCatalogListingHidden, loadHiddenCatalogIds } from './catalog-hidden-store.js';
import { addToCart as cartAddToCart } from './cart.js';
import { openShareSheet } from './share.js';
import { renderCardMaps } from './static-map.js';
import { canonicalCategoriesForLabel } from './categories.js';
import './smart-agent.js';

const FALLBACK_IMG = '/fallback.svg';

function isVideoUrl(url) {
  if (!url || typeof url !== 'string') return false;
  if (/^data:video\//i.test(url)) return true;
  if (url.startsWith('blob:')) return false;
  return /\.(mp4|webm|mov|m4v|avi|mkv|ogv)(\?|#|$)/i.test(url);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Temu-style compact count label, always derived from the listing's real data.
// 838 -> "838", 3200 -> "3.2k", 10000 -> "10k", 100000 -> "100k", 1200000 -> "1.2m".
function formatCompactCount(n) {
  const num = Math.round(Number(n) || 0);
  if (num <= 0) return '';
  if (num < 1000) return String(num);
  if (num < 10000) {
    const k = num / 1000;
    return (k >= 10 || Number.isInteger(k) ? Math.round(k) : k.toFixed(1)) + 'k';
  }
  if (num < 1000000) return Math.round(num / 1000) + 'k';
  const m = num / 1000000;
  return (m >= 10 ? Math.round(m) : m.toFixed(1)) + 'm';
}

// Five-star row (filled up to the rounded rating), rendered exclusively from the
// listing's real rating. Temu-style amber stars used across cards and details.
function renderStars(rating, sizeClass = 'w-3.5 h-3.5') {
  const filled = Math.min(5, Math.max(0, Math.round(Number(rating) || 0)));
  let out = '';
  for (let i = 0; i < 5; i++) {
    out += i < filled
      ? `<i data-lucide="star" class="${sizeClass} fill-amber-400 text-amber-400"></i>`
      : `<i data-lucide="star" class="${sizeClass} text-gray-300"></i>`;
  }
  return out;
}

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

// Saved admin edits (database or local fallback) always win over the
// hardcoded catalog, so the showroom instantly reflects whatever you save.
function liveListing(listing) {
  if (!listing) return listing;
  const db = getDBListings().find(d => d.property_id === listing.property_id);
  return db || listing;
}

// Owner's own downloaded house/apartment photos — shown in the bright
// homepage Houses line, alongside the very first (kept) house. The other
// old houses stay in code (All Houses overlay) but off the front.
const NEW_HOUSES = [
  'W10000',   // the first/kept house
  'W10475',   // Pima Canyon Apartments
  'W11084',   // Modern House for Rent
  'W11086',   // It's a beautiful day to hang a sold sign
  'W11090',   // Pittsburg, KS Homes for Sale
].map(id => SHOWROOM_LISTINGS.find(l => l.property_id === id) || PRODUCT_EXTRA_LISTINGS.find(l => l.property_id === id)).filter(Boolean);

// Owner's own downloaded car images — shown in the bright homepage Cars
// line (replaces the old stock car cards). Trucks & motorhomes stay in
// their own sections.
const NEW_CARS = [
  'W10379', 'W10382', 'W10383', 'W10422', 'W10425',
  'W10449', 'W10468', 'W10600', 'W10994', 'W11001',
  'W11002', 'W11022', 'W11023', 'W11028', 'W11030',
  'W11033', 'W11034', 'W11037', 'W11040', 'W11049',
  'W11054', 'W11055', 'W11062', 'W11065', 'W11094',
  'W11107',
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
  'Electronics': 'smartphone', 'Tools & Hardware': 'wrench', 'Beauty & Personal Care': 'flower',
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

// Rebuild the Products section rows from the owner's live database listings
// (categories already gathered into their own lines — houses, cars, trucks,
// motorhomes, washing machines — are excluded so nothing repeats). Called after
// the DB load so the Products section shows the owner's real items, not old
// regenerated ones.
function buildDbCategoryRows() {
  const db = getDBListings() || [];
  const byCat = new Map();
  for (const l of db) {
    const c = l.category || 'New Arrivals';
    const id = l.property_id || l.id;
    if (!id) continue;
    if (['Houses & Real Estate', 'Real Estate', 'Cars', 'Cars & Vehicles', 'Trucks', 'Motorhomes'].includes(c)) continue;
    if (WASHING_RE.test(l.title || '')) continue;
    if (!byCat.has(c)) byCat.set(c, []);
    byCat.get(c).push(id);
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
    subtitle: 'Homes for sale or rent, listed by their sellers.',
    rows: [
      { id: 'new-houses', label: 'Houses', icon: 'home', newHouses: true },
    ],
  },
  {
    id: 'modern-luxury', label: 'Modern Homes & Luxury Properties', icon: 'building-2',
    subtitle: 'Contemporary villas, mansions, and new-build family homes.',
    rows: [
      { id: 'new-homes', label: 'New Homes', icon: 'home', ids: ['W10018', 'W10019', 'W10020', 'W10021', 'W10022', 'W10023', 'W10024', 'W10025', 'W10026', 'W10027'] },
      { id: 'modern-homes', label: 'Modern Homes', icon: 'building-2', ids: ['W10006', 'W10009'] },
      { id: 'mansion-homes', label: 'Mansions', icon: 'landmark', ids: ['W10007'] },
      { id: 'farm-house', label: 'Farm Houses', icon: 'wheat', ids: ['W10010'] },
    ],
  },
  {
    id: 'commercial-land', label: 'Commercial Properties & Land', icon: 'briefcase',
    subtitle: 'Retail buildings, hotels, and investment-grade commercial real estate.',
    rows: [
      { id: 'commercial', label: 'Commercial Buildings', icon: 'store', ids: ['W10011'] },
      { id: 'hotels', label: 'Hotels & Hospitality', icon: 'bed-double', ids: ['W10013'] },
    ],
  },
  {
    id: 'cars', label: 'Cars', icon: 'car-front',
    subtitle: 'Cars listed by their sellers, from new arrivals to well-maintained used vehicles.',
    rows: [
      { id: 'all-cars', label: 'New Cars', icon: 'car-front', allCars: true },
    ],
  },
  {
    id: 'washing-machines', label: 'Washing Machines', icon: 'washing-machine',
    subtitle: 'Washers, dryers and laundry appliances, listed by their sellers.',
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
    subtitle: 'Motorhomes and RVs listed by their sellers, ready for travel.',
    rows: [
      { id: 'all-motorhomes', label: 'All Motorhomes', icon: 'bus', allMotorhomes: true },
    ],
  },
  {
    id: 'products', label: 'Products', icon: 'package',
    subtitle: 'Jewelry, watches, fashion and more, available from sellers.',
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
  const isCoverVideo = isVideoUrl(cover);
  const price = isTruck ? formatTruckPrice(listing) : formatPrice(listing);
  const statusBadge = listing.listing_type === 'product' ? 'New' : ((isProperty || isPet) ? 'For Sale' : '');

  // Auto-published showcase rows (WS-A/WS-C/WS-T/WS-P) and anything flagged
  // realistic-illustrative get honest badges; featured rows are "Priority".
  const isIllustrative = listing.verification_status === 'Illustrative'
    || /illustrative/i.test(String(listing.availability_status || ''))
    || /^WS-[ACPT]-/.test(String(listing.property_id || ''));
  const isPriority = listing.is_featured === true;

  let badgeRow = '';
  if (isPriority) badgeRow += `<span class="inline-flex items-center gap-1 bg-amber-100 text-amber-700 border border-amber-300 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full"><i data-lucide="star" class="w-3 h-3"></i>Priority</span>`;
  if (isIllustrative) badgeRow += `<span class="inline-flex items-center gap-1 bg-orange-50 text-orange-600 border border-orange-200 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">Illustrative Listing</span>`;
  if (badgeRow) badgeRow = `<div class="flex flex-wrap items-center gap-1.5 mb-1.5">${badgeRow}</div>`;

  // Real ratings only — never show fake or estimated ratings.
  const hasRealReviews = (listing.rating_count || 0) > 0;
  const displayRating = hasRealReviews ? Number(listing.rating) || 0 : 0;
  const reviewCount = listing.review_count || listing.rating_count || 0;

  let locationHtml = '';
  if (isProperty) {
    const flag = flagEmoji(listing.country_code);
    const parts = [listing.city, listing.state].filter(Boolean);
    locationHtml = `<div class="flex items-center gap-1 text-gray-400 text-xs mb-1.5"><i data-lucide="map" class="w-3.5 h-3.5 shrink-0"></i><span>${flag} ${parts.join(', ') || listing.country}</span></div>`;
  } else if (isPet) {
    const flag = flagEmoji(listing.country_code);
    locationHtml = `<div class="flex items-center gap-1 text-gray-400 text-xs mb-1.5"><i data-lucide="paw-print" class="w-3.5 h-3.5 shrink-0"></i><span>${flag} ${listing.country}</span></div>`;
  }

  let specsHtml = '';
  if (isProperty) {
    const specs = [];
    if (listing.bedrooms != null) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="bed-double" class="w-3.5 h-3.5"></i>${listing.bedrooms}</span>`);
    if (listing.bathrooms != null) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="bath" class="w-3.5 h-3.5"></i>${listing.bathrooms}</span>`);
    if (listing.land_size) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="ruler" class="w-3.5 h-3.5"></i>${listing.land_size}</span>`);
    if (listing.year_built) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${listing.year_built}</span>`);
    if (listing.condition) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i>${listing.condition}</span>`);
    if (specs.length) specsHtml = `<div class="flex items-center gap-2 text-gray-400 text-xs mb-2">${specs.join('')}</div>`;
  } else if (isTruck || isMotorhome || isCar) {
    const specs = [];
    specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${listing.model_year}</span>`);
    specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="gauge" class="w-3.5 h-3.5"></i>${listing.mileage}</span>`);
    if (isMotorhome) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="moon" class="w-3.5 h-3.5"></i>Sleeps ${listing.sleeping_capacity}</span>`);
    if (isCar) specs.push(`<span class="flex items-center gap-0.5"><i data-lucide="fuel" class="w-3.5 h-3.5"></i>${listing.fuel_type}</span>`);
    if (specs.length) specsHtml = `<div class="flex items-center gap-2 text-gray-400 text-xs mb-2">${specs.join('')}</div>`;
  }

  // Star row is ALWAYS shown on every card — new products and old alike —
  // so no card ever looks bare. Real ratings from actual buyer reviews are
  // shown when they exist; a brand-new listing (no reviews yet) gets the
  // standard "just listed" baseline of 5 stars at 5.0 with (0) reviews.
  // Clicking the stars opens the product's details page (interactive rating
  // widget + real buyer reviews).
  //
  // Sold count reuses the exact same real-data convention as the details page
  // (sold_count, falling back to review_count), so the card always matches the
  // product page. Rendered Temu-style (e.g. "838 sold", "2.1k sold") with real
  // data — never fabricated numbers.
  const soldN = Math.round(Number(listing.sold_count) || Number(listing.review_count) || 0);
  const soldLabel = formatCompactCount(soldN);
  const showRating = displayRating > 0;
  const shownRating = showRating ? Number(displayRating) : 5;
  const shownReviewCount = showRating ? (reviewCount || 0) : 0;
  const ratingSoldHtml = `<a href="/product/${listing.property_id}" class="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs no-underline rounded-md group/rating transition" title="View ratings & reviews"><span class="flex items-center gap-1"><span class="flex">${renderStars(shownRating, 'w-3.5 h-3.5')}</span><span class="text-gray-900 font-bold">${shownRating.toFixed(1)}</span><span class="text-gray-500">(${shownReviewCount})</span></span>${soldLabel ? `<span class="inline-flex items-center gap-1 text-emerald-600 font-bold ml-auto whitespace-nowrap"><i data-lucide="shopping-bag" class="w-3.5 h-3.5 shrink-0"></i>${soldLabel} sold</span>` : ''}</a>`;

  // Product badges (New Arrival, Best Seller, etc.)
  const badgesHtml = '';

  // Discount display: Real Price (crossed out through the middle) + Discount
  // Price (what customers pay). The Real Price comes from the listing's
  // real_price field; legacy compare_at_price / original_price / discount_percent
  // are honored as fallbacks for older listings.
  let discountBadge = '';
  let originalPriceHtml = '';
  let realNum = parseFloat(listing.real_price);
  if (!Number.isFinite(realNum) || realNum <= 0) realNum = parseFloat(listing.compare_at_price ?? listing.original_price);
  if (Number.isFinite(realNum) && realNum > 0 && realNum > parseFloat(listing.price)) {
    const pct = Math.round((1 - parseFloat(listing.price) / realNum) * 100);
    const fmtNum = (n) => (isTruck ? formatTruckPrice({ ...listing, price: n }) : formatPrice({ ...listing, price: n }));
    discountBadge = `<span class="absolute bottom-2 left-2 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-full shadow-md shadow-red-500/30">-${pct}%</span>`;
    originalPriceHtml = `<span class="text-xs text-gray-400 price-strike line-through">${fmtNum(realNum)}</span>`;
  }

  // Map preview strip for property cards (rendered from listing coordinates
  // onto a canvas using OpenStreetMap tiles — no API key, no dead service).
  let mapPreviewHtml = '';
  if (isProperty && listing.latitude && listing.longitude) {
    mapPreviewHtml = `
      <div class="relative mt-2.5 h-20 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
        <canvas data-static-map data-lat="${escapeHtml(listing.latitude)}" data-lng="${escapeHtml(listing.longitude)}" class="w-full h-full block"></canvas>
        <span class="absolute top-1 left-1 bg-black/70 backdrop-blur-sm text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full inline-flex items-center gap-1"><i data-lucide="map" class="w-3 h-3"></i>Map · ${listing.city || listing.town || ''}</span>
      </div>`;
  }

  return {
    isProperty, isPet, isTruck, isMotorhome, isCar,
    listingId, cover, isCoverVideo, price, statusBadge,
    locationHtml, specsHtml, ratingSoldHtml, mapPreviewHtml,
    discountBadge, originalPriceHtml, badgeRow,
  };
}

export function renderCard(listing) {
  listing = liveListing(listing);
  const p = cardParts(listing);
  const card = document.createElement('div');
  card.className = 'showroom-card group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 flex flex-col cursor-pointer';
  card.dataset.id = p.listingId;

  const wishSaved = isSaved(listing);

  card.innerHTML = `
    <div class="relative aspect-[6/5] overflow-hidden bg-gray-100">
      ${p.isCoverVideo
        ? `<video src="${escapeHtml(p.cover)}" muted loop autoplay playsinline preload="metadata" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.style.display='none'"></video>
           <div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-11 h-11 rounded-full bg-white/80 flex items-center justify-center shadow-lg"><svg class="w-5 h-5 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`
        : `<img src="${p.cover}" alt="${listing.title}" loading="lazy" decoding="async"
             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">`
      }
      ${p.statusBadge ? `<span class="absolute top-2 left-2 bg-blue-500 text-white text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">${p.statusBadge}</span>` : ''}
      ${p.discountBadge}
      <div class="absolute top-2 right-2 flex flex-col gap-1.5">
        <button class="share-btn shrink-0 w-9 h-9 bg-white/90 hover:bg-white text-gray-500 hover:text-blue-600 rounded-full shadow-sm transition flex items-center justify-center" title="Share product" aria-label="Share product">
          <i data-lucide="share-2" class="w-4 h-4"></i>
        </button>
        <button class="wishlist-btn ${wishSaved ? 'saved bg-red-500/15 text-red-500 border border-red-500/40' : ''} shrink-0 w-9 h-9 bg-white/90 hover:bg-white text-gray-500 hover:text-red-500 rounded-full shadow-sm transition flex items-center justify-center" title="${wishSaved ? 'Remove from wishlist' : 'Add to wishlist'}" aria-label="${wishSaved ? 'Remove from wishlist' : 'Add to wishlist'}">
          <i data-lucide="heart" class="w-4 h-4 ${wishSaved ? 'fill-red-500 text-red-500' : ''}"></i>
        </button>
      </div>
    </div>
    <div class="px-3.5 sm:px-4 pt-2.5 sm:pt-3 pb-3 sm:pb-3.5 flex flex-col flex-1">
      <h3 class="text-[15px] font-bold text-gray-900 leading-snug mb-1.5">${listing.title}</h3>
      ${p.badgeRow}
      ${p.ratingSoldHtml}
      <div class="flex items-baseline flex-wrap gap-x-2 gap-y-0.5 mt-1.5">
        ${p.originalPriceHtml}
        <span class="text-lg font-black text-blue-600">${p.price}</span>
      </div>
      ${p.locationHtml}
      ${p.specsHtml}
      ${p.mapPreviewHtml}
      <div class="flex gap-2 mt-2.5 pt-2.5 border-t border-gray-100">
        <button class="buy-btn flex-1 min-w-0 bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-[0.97] text-white text-[13px] font-bold py-3 rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/30">
          <i data-lucide="shopping-bag" class="w-4 h-4 shrink-0"></i> <span class="truncate">Buy</span>
        </button>
        <button class="cart-btn flex-1 min-w-0 bg-white hover:bg-emerald-50 active:scale-[0.97] text-emerald-600 text-[13px] font-bold py-3 rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 border-2 border-emerald-400 shadow-sm">
          <i data-lucide="shopping-cart" class="w-4 h-4 shrink-0"></i> <span class="truncate">Cart</span>
        </button>
      </div>
      <button class="details-btn mt-2 w-full min-w-0 bg-blue-50 hover:bg-blue-100 active:scale-[0.97] text-blue-700 text-[13px] font-black py-3 rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 border-2 border-blue-300 hover:border-blue-400 shadow-sm">
        <i data-lucide="eye" class="w-4 h-4 shrink-0"></i> <span class="truncate">View Product Details →</span>
      </button>
    </div>
  `;

  attachCardListeners(card, listing);
  renderCardMaps(card);

  return card;
}

// Full-width "feed" card for the vertical one-by-one showroom: large image on
// the left (top on mobile), details on the right, generous padding. Reads like
// a magazine feed as the page scrolls straight down.
export function renderFeedCard(listing) {
  listing = liveListing(listing);
  const p = cardParts(listing);
  const card = document.createElement('div');
  card.className = 'showroom-card showroom-feed-card group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 flex flex-col sm:flex-row cursor-pointer';
  card.dataset.id = p.listingId;

  const wishSaved = isSaved(listing);

  card.innerHTML = `
    <div class="relative shrink-0 sm:w-[42%] lg:w-[38%] xl:w-[34%] aspect-[7/5] sm:aspect-auto sm:min-h-[300px] overflow-hidden bg-gray-100">
      ${p.isCoverVideo
        ? `<video src="${escapeHtml(p.cover)}" muted loop autoplay playsinline preload="metadata" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.style.display='none'"></video>
           <div class="absolute inset-0 flex items-center justify-center pointer-events-none"><div class="w-11 h-11 rounded-full bg-white/80 flex items-center justify-center shadow-lg"><svg class="w-5 h-5 text-gray-800 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>`
        : `<img src="${p.cover}" alt="${listing.title}" loading="lazy" decoding="async"
             class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">`
      }
      ${p.statusBadge ? `<span class="absolute top-2.5 left-2.5 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">${p.statusBadge}</span>` : ''}
      ${p.discountBadge}
      <span class="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 bg-black/55 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <i data-lucide="expand" class="w-3.5 h-3.5"></i> View
      </span>
    </div>
    <div class="flex-1 px-4 pt-2.5 pb-4 sm:p-5 lg:p-6 flex flex-col min-w-0">
      <h3 class="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-1.5 line-clamp-2 group-hover:text-blue-700 transition-colors">${listing.title}</h3>
      ${p.badgeRow}
      ${p.ratingSoldHtml}
      ${p.locationHtml}
      ${p.specsHtml}
      <div class="flex items-center justify-between gap-3 mt-auto pt-2">
        <span class="flex items-baseline flex-wrap gap-x-2">${p.originalPriceHtml}<span class="text-xl sm:text-2xl font-black text-blue-600">${p.price}</span></span>
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
      <div class="flex gap-2 mt-2.5 pt-2.5 border-t border-gray-100">
        <button class="buy-btn flex-1 min-w-0 bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-[0.97] text-white text-[13px] font-bold py-3 rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/30">
          <i data-lucide="shopping-bag" class="w-4 h-4 shrink-0"></i> <span class="truncate">Buy</span>
        </button>
        <button class="cart-btn flex-1 min-w-0 bg-white hover:bg-emerald-50 active:scale-[0.97] text-emerald-600 text-[13px] font-bold py-3 rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 border-2 border-emerald-400 shadow-sm">
          <i data-lucide="shopping-cart" class="w-4 h-4 shrink-0"></i> <span class="truncate">Cart</span>
        </button>
      </div>
      <button class="details-btn mt-2 w-full min-w-0 bg-blue-50 hover:bg-blue-100 active:scale-[0.97] text-blue-700 text-[13px] font-black py-3 rounded-xl transition-all duration-150 flex items-center justify-center gap-1.5 border-2 border-blue-300 hover:border-blue-400 shadow-sm">
        <i data-lucide="eye" class="w-4 h-4 shrink-0"></i> <span class="truncate">View Product Details →</span>
      </button>
    </div>
  `;

  attachCardListeners(card, listing);
  renderCardMaps(card);

  return card;
}

// Wire the per-card actions onto an existing card element. Used by renderCard
// and by the pre-render adoption pass (the static cards in index.html).
function attachCardListeners(card, listing) {
  card.addEventListener('click', (e) => {
    if (e.target.closest('button')) return;
    window.location.href = `/product/${listing.property_id}`;
  });
  card.querySelector('.buy-btn').addEventListener('click', (e) => { e.stopPropagation(); handleBuyNow(listing); });
  card.querySelector('.wishlist-btn').addEventListener('click', (e) => { e.stopPropagation(); toggleWishlist(listing, e.currentTarget); });
  card.querySelector('.share-btn').addEventListener('click', (e) => { e.stopPropagation(); handleShare(listing); });
  card.querySelector('.cart-btn')?.addEventListener('click', (e) => { e.stopPropagation(); addToCart(listing); });
  card.querySelector('.details-btn')?.addEventListener('click', (e) => { e.stopPropagation(); window.location.href = `/product/${listing.property_id}`; });
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

// Add the listing to the on-device cart (same kco_cart store the details page,
// cart page and checkout read from). Duplicate adds increase the quantity.
function addToCart(listing) {
  const id = listing.property_id || listing.id;
  cartAddToCart(id, 1);
  showToast('Added to cart');
}

function handleShare(listing) {
  openShareSheet(listing);
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
// Live database listings that belong to a showroom row. The static catalog has
// been removed, so the showroom is populated from the owner's real database
// rows (and any locally-saved listings) instead of regenerated old products.
function dbListingsForRow(rowDef) {
  const db = getDBListings() || [];
  if (rowDef.allTrucks) return db.filter(l => l.category === 'Trucks');
  if (rowDef.allMotorhomes) return db.filter(l => l.category === 'Motorhomes');
  if (rowDef.allCars) return db.filter(l => l.category === 'Cars' || l.category === 'Cars & Vehicles');
  if (rowDef.newHouses) return db.filter(l => l.listing_type === 'property' || l.category === 'Houses & Real Estate' || l.category === 'Real Estate');
  if (rowDef.allWashingMachines) return db.filter(l => WASHING_RE.test(l.title || ''));
  if (rowDef.productCategory) return db.filter(l => (l.category || 'New Arrivals') === rowDef.productCategory);
  if (rowDef.allProducts) return db;
  if (rowDef.ids) return getListingsByIds(rowDef.ids);
  return [];
}

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
  // Always merge the owner's live database listings so real products appear
  // in their correct row (and can never be replaced by regenerated old items).
  const dbList = dbListingsForRow(rowDef);
  const seen = new Set(listings.map(l => l.property_id || l.id));
  for (const l of dbList) {
    const id = l.property_id || l.id;
    if (!id || seen.has(id)) continue;
    seen.add(id);
    listings = [...listings, l];
  }
  let catalogExtra = [];
  if (!rowDef.allTrucks && !rowDef.allMotorhomes && !rowDef.allCars && !rowDef.newHouses && !rowDef.allProducts && !rowDef.productCategory && !rowDef.allWashingMachines) {
    catalogExtra = getCatalogListingsForRow(rowDef, listings.map(l => l.property_id));
  }
  if (catalogExtra.length > 0) {
    listings = [...listings, ...catalogExtra];
  }
  return listings.filter(l => l && !isCatalogListingHidden(l.property_id));
}

function renderRow(rowDef) {
  const listings = getRowListings(rowDef);
  const hasItems = listings.length > 0;
  // Every section (houses, cars, trucks, motorhomes, products) uses the
  // compact 2-column grid in grid mode so customers scroll down to browse
  // and always see 2 products side by side on a phone.
  const isGrid = viewMode === 'grid' || rowDef.layout === 'grid';
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
    listings.forEach(listing => {
      try {
        frag.appendChild(isGrid ? renderCard(listing) : lineMode ? renderCard(listing) : renderFeedCard(listing));
      } catch { /* skip a listing that can't be rendered */ }
    });
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
    count += getRowListings(r).length;
  });
  return count;
}

function renderSection(section, accentColor, maxRows) {
  const sec = document.createElement('div');
  sec.className = 'showroom-section space-y-3';

  const rowsToShow = ((maxRows && maxRows > 0) ? section.rows.slice(0, maxRows) : section.rows)
    .filter(r => (getRowListings(r) || []).length > 0);
  rowsToShow.forEach(rowDef => {
    try {
      sec.appendChild(renderRow(rowDef));
    } catch { /* skip a row that can't be rendered */ }
  });

  return sec;
}

// ── Grid renderer ───────────────────────────────────────────────
const HOUSE_SECTION_IDS = new Set(['local-houses', 'modern-luxury', 'commercial-land']);
const VEHICLE_SECTION_IDS = new Set(['cars', 'trucks-buses']);
function sectionHasItems(section) {
  return section.rows.some(r => (getRowListings(r) || []).length > 0);
}

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

  // Remove any stale pre-rendered rows that now hold no items (the static
  // catalog was removed, so a baked "Coming Soon" row must not linger while
  // the owner's live database listings take its place).
  if (prerendered) {
    container.querySelectorAll('.showroom-row[data-row-id]').forEach(r => {
      const rowDef = findRowDef(r.dataset.rowId);
      if (!rowDef || (getRowListings(rowDef) || []).length === 0) r.remove();
    });
  }

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
      if (!alreadyRendered && sectionHasItems(section)) {
        const isTeaser = HOUSE_SECTION_IDS.has(id) || VEHICLE_SECTION_IDS.has(id);
        try {
          container.appendChild(renderSection(section, accent, isTeaser ? 1 : undefined));
        } catch { /* skip a section that can't be rendered */ }
      }
    }
    // modern-luxury & commercial-land are intentionally left off the
    // homepage — every property stays reachable in the All Houses overlay.
  } else {
    sections.forEach(section => {
      if (!sectionHasItems(section)) return;
      try {
        container.appendChild(renderSection(section, accent));
      } catch { /* skip a section that can't be rendered */ }
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

// Wire up the static pre-rendered rows baked into index.html at build
// time so every card and scroll arrow behaves exactly like a freshly
// rendered one. JS-rendered elements are left untouched.
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
        const target = listing || (id ? { id, property_id: id, title: id } : null);
        if (!target) return;
        attachCardListeners(card, target);
      });
    }
    delete row.dataset.prerendered;
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

// Canonical marketplace category names a given showroom section/row belongs
// to. Fixed gathered sections (houses, cars, trucks, motorhomes, land,
// washing machines) map directly to their canonical bar names; product rows
// are matched by keyword through the shared canonical category list so the
// customer bar, admin manager and AI scanner always agree.
function rowCanonicalNames(section, row) {
  const sId = section.id || '';
  if (sId === 'local-houses' || sId === 'modern-luxury') return ['houses'];
  if (sId === 'commercial-land') return ['land'];
  if (sId === 'cars') return ['cars'];
  if (sId === 'trucks-buses') return ['trucks'];
  if (sId === 'motorhomes-boats') return ['rv & camper accessories'];
  if (sId === 'washing-machines') return ['home appliances'];
  return canonicalCategoriesForLabel(row.label);
}

function rowBelongsToCategory(catName, section, row) {
  const n = String(catName || '').toLowerCase();
  if (n === 'all' || !n) return true;
  const names = rowCanonicalNames(section, row);
  if (names.includes(n)) return true;
  const raw = String(row.label || '').toLowerCase();
  return raw === n || String(section.label || '').toLowerCase() === n;
}

function categoryMatches(catName, sectionLabel, rowLabel) {
  if (catName === 'All') return true;
  const n = String(catName || '').toLowerCase();
  const s = String(sectionLabel || '').toLowerCase();
  const r = String(rowLabel || '').toLowerCase();
  if (s === n || r === n) return true;
  return canonicalCategoriesForLabel(r).includes(n) || canonicalCategoriesForLabel(s).includes(n);
}

function applyRowVisibility(grid, predicate) {
  const allRows = collectAllRows();
  let anyVisible = false;
  allRows.forEach(({ section, row }) => {
    const rowEl = grid.querySelector(`[data-row-id="${row.id}"]`);
    if (!rowEl) return;
    const match = predicate(section, row);
    rowEl.style.display = match ? '' : 'none';
    if (match) anyVisible = true;
  });
  grid.querySelectorAll('.showroom-section').forEach(sec => {
    const visibleRows = sec.querySelectorAll('.showroom-row:not([style*="display: none"])');
    sec.style.display = visibleRows.length > 0 ? '' : 'none';
  });
  const empty = grid.querySelector('[data-category-empty]');
  if (!anyVisible) {
    if (!empty) {
      grid.insertAdjacentHTML('beforeend',
        '<div data-category-empty class="category-empty flex flex-col items-center justify-center text-center py-16 px-4">'
        + '<span class="w-14 h-14 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-4">'
        + '<i data-lucide="package-open" class="w-7 h-7 text-gray-400"></i></span>'
        + '<p class="text-sm font-bold text-gray-700">No products available in this category yet</p>'
        + '<p class="text-xs text-gray-500 mt-1">Check back soon — new items are added regularly.</p></div>');
      if (window.lucide) window.lucide.createIcons();
    }
  } else if (empty) {
    empty.remove();
  }
}

export function filterShowroomByCategory(categoryName) {
  const grid = document.querySelector('[data-showroom-grid="real-estate"]');
  if (!grid) return;
  applyRowVisibility(grid, (section, row) => rowBelongsToCategory(categoryName, section, row));
  grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function clearShowroomFilter() {
  const grids = document.querySelectorAll('[data-showroom-grid]');
  grids.forEach(grid => {
    grid.querySelectorAll('.showroom-row, .showroom-section').forEach(el => {
      el.style.display = '';
    });
    const empty = grid.querySelector('[data-category-empty]');
    if (empty) empty.remove();
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
    let key = String(cat).trim();
    // Merged gathered lines: "Cars & Vehicles" belongs to the Cars chip.
    const merge = { 'Cars & Vehicles': 'Cars', 'Houses & Real Estate': 'Houses', 'Real Estate': 'Houses' };
    if (merge[key]) key = merge[key];
    if (!counts.has(key)) counts.set(key, { name: key, count: 0, subs: new Set() });
    const e = counts.get(key);
    e.count += n;
    if (sub) e.subs.add(String(sub).trim());
  };
  [...SHOWROOM_LISTINGS, ...getDBListings()].forEach(l => add(l.category, l.subcategory));
  TRUCK_LISTINGS.forEach(l => add(l.category, l.subcategory));
  PRODUCT_LISTINGS.forEach(l => add(l.category, l.subcategory));
  PRODUCT_EXTRA_LISTINGS.forEach(l => add(l.category, l.subcategory));

  // Only categories that actually have items are surfaced in the nav. The
  // owner's live database listings are the source of truth, so every DB
  // category survives — an old hardcoded whitelist would drop Fashion,
  // Watches, New Arrivals, Jewelry and Phones.
  const dbCats = new Set((getDBListings() || []).map(l => String(l.category || '').trim()).filter(Boolean));
  counts.forEach((entry, name) => {
    const hasItems = dbCats.has(name) || (entry.count || 0) > 0;
    if (!hasItems) counts.delete(name);
  });

  // Display order
  const deptMeta = {
    fashion: { label: 'Fashion', icon: 'shopping-bag', color: 'pink' },
    electronics: { label: 'Electronics', icon: 'smartphone', color: 'blue' },
    home: { label: 'Home', icon: 'home', color: 'emerald' },
    vehicles: { label: 'Vehicles', icon: 'car-front', color: 'red' },
    realestate: { label: 'Real Estate', icon: 'building-2', color: 'slate' },
    sports: { label: 'Sports', icon: 'dumbbell', color: 'lime' },
    everyday: { label: 'Everyday', icon: 'shopping-basket', color: 'amber' },
  };
  const deptIds = ['fashion', 'electronics', 'home', 'vehicles', 'realestate', 'sports', 'everyday'];
  const depts = deptIds.map(id => ({ id, ...deptMeta[id], categories: [] }));
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
  const list = (names || []).map(n => String(n).toLowerCase()).filter(Boolean);
  applyRowVisibility(grid, (section, row) => {
    if (list.length === 0) return true;
    return list.some(n => rowBelongsToCategory(n, section, row));
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

  // Hydrate the owner's products from the localStorage cache (if any) BEFORE
  // the first paint so the showroom renders real items instantly, without
  // waiting for the network fetch. The fetch below still refreshes them.
  hydrateDBListingsFromCache();

  // Paint the showroom from the owner's live database listings. Rows with no
  // items are hidden, so the page never shows regenerated old products.
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

      // Rebuild the Products section rows from the owner's live database
      // listings so products like jewelry, watches, phones and fashion
      // always appear (the old static catalog no longer provides them).
      const productsSection = REAL_ESTATE_SECTIONS.find(s => s.id === 'products');
      if (productsSection) {
        const dbRows = buildDbCategoryRows();
        if (dbRows.length) productsSection.rows = dbRows;
      }
    }
  } catch {
    // DB load failed; the grid simply stays as rendered above.
  }

  // Refresh once the DB products are ready, so the final grid shows them.
  // Hard rebuild: clear the initialized/pre-rendered flags so every card is
  // re-created from the LIVE database/local data — anything you saved in the
  // admin (title, price, images, publish state) appears on the showroom here.
  document.querySelectorAll('[data-showroom-grid]').forEach(g => {
    delete g.dataset.initialized;
    delete g.dataset.prerendered;
    g.innerHTML = '';
  });
  try {
    renderAllGrids();
  } catch {
    // Never leave the grid blank. If the fresh render fails on any section,
    // clear flags and retry so the showroom still populates from the DB.
    document.querySelectorAll('[data-showroom-grid]').forEach(g => {
      delete g.dataset.initialized;
      delete g.dataset.prerendered;
      if (g.children.length === 0) g.innerHTML = '';
    });
    renderAllGrids();
  }

  window.dispatchEvent(new CustomEvent('showroom-categories-ready'));
}

// Expose filter functions to window so app.js category buttons can call them
window._filterShowroomByCategory = filterShowroomByCategory;
window._clearShowroomFilter = clearShowroomFilter;
window._filterShowroomByDepartment = filterShowroomByDepartment;
window._filterShowroomByCategories = filterShowroomByCategories;
window._getShowroomCategoryInventory = getShowroomCategoryInventory;

// Eager prefetch: start the Supabase request the moment this module loads (it
// overlaps with HTML parsing), so by DOMContentLoaded the products may already
// be here — and cached for the next visit. Never blocks, never throws.
loadDBListings().catch(() => {});

if (document.querySelector('[data-showroom-grid]')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAllShowrooms());
  } else {
    initAllShowrooms();
  }
}
