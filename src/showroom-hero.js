import { SHOWROOM_LISTINGS, formatPrice, flagEmoji, getDBListings, loadDBListings, hydrateDBListingsFromCache, cleanListing } from './showroom-data.js';
import { TRUCK_LISTINGS, formatTruckPrice } from './truck-data.js';
import { MOTORHOME_LISTINGS } from './motorhome-data.js';
import { PRODUCT_LISTINGS } from './products-data.js';
import { PRODUCT_EXTRA_LISTINGS } from './products-extra.js';
import { isCatalogListingHidden } from './catalog-hidden-store.js';

const CONTAINER_ID = 'kco-hero-rows';
const FALLBACK_IMG = '/fallback.svg';

const VEHICLE_CATEGORIES = new Set([
  'Cars', 'Cars & Vehicles', 'Trucks', 'Buses', 'Buses & Coaches', 'Motorhomes',
  'Motorcycles', 'Marine & Boating', 'RV & Camper Accessories', 'Vehicles',
]);

const HOUSE_TYPES = new Set([
  'Single-Family Home', 'Apartment', 'Condo', 'Townhouse', 'Villa', 'Mansion',
  'Beach House', 'Farm House', 'House', 'Homes', 'Duplex', 'Penthouse',
  'Bungalow', 'Cottage', 'Chalet', 'Studio', 'Loft',
]);

const HOUSE_ORDER = [
  'Single-Family Home', 'Apartment', 'Condo', 'Townhouse', 'Villa', 'Mansion',
  'Beach House', 'Farm House', 'House', 'Homes', 'Duplex', 'Penthouse',
  'Bungalow', 'Cottage', 'Chalet', 'Studio', 'Loft',
];

function sp(listing, key) {
  return listing.specifications && typeof listing.specifications === 'object' && listing.specifications[key] != null
    ? listing.specifications[key]
    : listing[key];
}

function isVehicle(listing) {
  return listing.listing_type === 'vehicle' || VEHICLE_CATEGORIES.has(listing.category);
}

function isHouse(listing) {
  if (listing.listing_type === 'property') {
    if (!listing.property_type && listing.category === 'Houses & Real Estate') return true;
    return HOUSE_TYPES.has(listing.property_type) || HOUSE_TYPES.has(listing.subcategory);
  }
  if (listing.listing_type === 'product') {
    return listing.category === 'Houses & Real Estate' || listing.category === 'Real Estate'
      || HOUSE_TYPES.has(listing.property_type || listing.subcategory);
  }
  return false;
}

function dedupe(listings) {
  const seen = new Set();
  const out = [];
  for (const l of listings) {
    if (!l) continue;
    const id = l.property_id || l.id;
    if (!id || seen.has(id)) continue;
    seen.add(id);
    out.push(l);
  }
  return out;
}

function visible(listings) {
  return dedupe(listings)
    .filter(l => {
      if (isCatalogListingHidden && isCatalogListingHidden(l.property_id)) return false;
      if (l.property_id && String(l.property_id).startsWith('W')) return true;
      return l.is_active !== false;
    })
    .sort((a, b) => {
      const ap = Number.isFinite(parseFloat(a.price)) ? parseFloat(a.price) : 0;
      const bp = Number.isFinite(parseFloat(b.price)) ? parseFloat(b.price) : 0;
      return bp - ap;
    });
}

export function houseTypeLabel(listing) {
  const t = listing.property_type || listing.subcategory || listing.category;
  if (t && !HouseTypeLabelCache.has(t)) {
    const l = String(t).toLowerCase();
    for (const h of HOUSE_ORDER) if (l === h.toLowerCase() || l.includes(h.toLowerCase())) { HouseTypeLabelCache.set(t, h); break; }
    if (!HouseTypeLabelCache.has(t)) HouseTypeLabelCache.set(t, String(t));
  }
  return t ? HouseTypeLabelCache.get(t) : 'Homes';
}
const HouseTypeLabelCache = new Map();

function getAllHeroHouses() {
  return getAllShowcaseProperties().filter(l => isHouse(l));
}

export function getAllShowcaseProperties() {
  const db = getDBListings() || [];
  const dbProps = db.filter(l =>
    l.listing_type === 'property' ||
    l.category === 'Real Estate' || l.category === 'Houses & Real Estate' ||
    HOUSE_TYPES.has(l.property_type) || HOUSE_TYPES.has(l.subcategory)
  );
  const statics = [...PRODUCT_LISTINGS, ...PRODUCT_EXTRA_LISTINGS, ...SHOWROOM_LISTINGS]
    .filter(l => l && (l.category === 'Houses & Real Estate' || l.category === 'Real Estate' || HOUSE_TYPES.has(l.property_type || l.subcategory)));
  return visible([...dbProps, ...statics]);
}

function getAllHeroVehicles() {
  const db = getDBListings() || [];
  const dbVehicles = db.filter(l => isVehicle(l));
  const staticVehicles = [...TRUCK_LISTINGS, ...MOTORHOME_LISTINGS, ...PRODUCT_LISTINGS, ...PRODUCT_EXTRA_LISTINGS]
    .filter(l => l && isVehicle(l));
  return visible([...dbVehicles, ...staticVehicles]);
}

export { getAllHeroVehicles, heroStyles, sp, isVehicle, vehicleKindLabel };

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function heroStyles() {
  if (document.getElementById('kco-hero-styles')) return;
  const st = document.createElement('style');
  st.id = 'kco-hero-styles';
  st.textContent = `
#kco-hero-rows{display:block}
.kco-hero-section{position:relative;border-radius:1.5rem;overflow:hidden;box-shadow:0 10px 30px -12px rgba(2,6,23,.25)}
.kco-hero-section+.kco-hero-section{margin-top:1.5rem}
.kco-hero-panel{position:relative;padding:1.25rem 1rem 1.4rem}
@media(min-width:640px){.kco-hero-panel{padding:1.6rem 1.75rem 1.7rem}}
.kco-hero-re{background:linear-gradient(135deg,#022c22 0%,#064e3b 45%,#0d9488 130%)}
.kco-hero-veh{background:linear-gradient(135deg,#111827 0%,#1f2937 45%,#92400e 135%)}
.kco-hero-hscroll{display:flex;gap:.9rem;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:.4rem 2px .7rem;cursor:grab}
.kco-hero-hscroll::-webkit-scrollbar{display:none}
.kco-hero-hscroll.dragging{cursor:grabbing;scroll-snap-type:none;-webkit-user-select:none;user-select:none}
.kco-hero-card{flex:0 0 auto;scroll-snap-align:start;width:272px;min-width:272px;border-radius:1.25rem;overflow:hidden;background:#fff;border:1px solid rgba(255,255,255,.14);box-shadow:0 12px 26px -12px rgba(0,0,0,.45);transition:transform .18s ease,box-shadow .18s ease;text-decoration:none;display:flex;flex-direction:column}
@media(min-width:640px){.kco-hero-card{width:372px;min-width:372px}}
@media(min-width:1024px){.kco-hero-card{width:450px;min-width:450px}}
.kco-hero-card:hover{transform:translateY(-3px);box-shadow:0 20px 40px -14px rgba(0,0,0,.5)}
.kco-hero-media{position:relative;aspect-ratio:16/10;background:#0b1120;overflow:hidden}
.kco-hero-media img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s ease}
.kco-hero-card:hover .kco-hero-media img{transform:scale(1.04)}
.kco-hero-type{position:absolute;top:.7rem;left:.7rem;display:inline-flex;align-items:center;gap:.35rem;background:rgba(0,0,0,.68);backdrop-filter:blur(6px);color:#fff;font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:.3rem .65rem;border-radius:999px;border:1px solid rgba(255,255,255,.2)}
.kco-hero-loc{position:absolute;bottom:.7rem;left:.7rem;right:.7rem;display:flex;align-items:center;gap:.4rem;background:rgba(0,0,0,.55);backdrop-filter:blur(6px);color:#fff;font-size:11px;font-weight:600;padding:.35rem .7rem;border-radius:.8rem}
.kco-hero-body{display:flex;flex-direction:column;gap:.55rem;padding:.85rem .95rem 1rem}
.kco-hero-price{display:flex;align-items:baseline;gap:.5rem;flex-wrap:wrap}
.kco-hero-price b{font-size:1.35rem;font-weight:900;color:#0f172a;line-height:1}
@media(min-width:640px){.kco-hero-price b{font-size:1.55rem}}
.kco-hero-price span{font-size:.72rem;font-weight:700}
.kco-hero-title{font-size:.98rem;line-height:1.3;font-weight:800;color:#0f172a;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
@media(min-width:640px){.kco-hero-title{font-size:1.12rem}}
.kco-hero-chips{display:flex;flex-wrap:wrap;gap:.4rem}
.kco-hero-chip{display:inline-flex;align-items:center;gap:.3rem;font-size:10.5px;font-weight:700;color:#334155;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:.6rem;padding:.28rem .55rem}
.kco-hero-btn{margin-top:.15rem;display:inline-flex;align-items:center;justify-content:center;gap:.45rem;width:100%;border-radius:.9rem;padding:.6rem;font-size:.8rem;font-weight:900;color:#fff;letter-spacing:.02em;text-align:center;transition:filter .15s ease}
.kco-hero-btn:hover{filter:brightness(1.08)}
.kco-hero-re .kco-hero-btn{background:linear-gradient(90deg,#059669,#0d9488)}
.kco-hero-veh .kco-hero-btn{background:linear-gradient(90deg,#f59e0b,#ea580c)}
.kco-hero-empty{padding:1.2rem;text-align:center;color:rgba(255,255,255,.75);font-size:.85rem;font-weight:600;background:rgba(255,255,255,.06);border:1px dashed rgba(255,255,255,.25);border-radius:1rem}
.kco-hero-head{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1rem}
.kco-hero-headleft{display:flex;align-items:center;gap:.7rem;min-width:0}
.kco-hero-ic{flex:0 0 auto;width:2.6rem;height:2.6rem;border-radius:.85rem;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.22)}
.kco-hero-head h3{color:#fff;font-size:1.05rem;font-weight:900;letter-spacing:.02em;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.kco-hero-head p{color:rgba(255,255,255,.72);font-size:.72rem;font-weight:600;margin:.12rem 0 0}
.kco-hero-count{display:none;font-size:.62rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding:.28rem .6rem;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.22);color:#fff;white-space:nowrap}
@media(min-width:640px){.kco-hero-count{display:inline-flex}}
.kco-hero-seeall{flex:0 0 auto;display:inline-flex;align-items:center;gap:.45rem;padding:.6rem 1.15rem;border-radius:.95rem;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.28);color:#fff;font-size:.78rem;font-weight:900;text-decoration:none;transition:background .15s ease,transform .15s ease;white-space:nowrap}
.kco-hero-seeall:hover{background:rgba(255,255,255,.26);transform:translateY(-1px)}
.kco-hero-arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:5;width:2.25rem;height:2.25rem;border-radius:999px;display:none;align-items:center;justify-content:center;background:rgba(255,255,255,.92);color:#0f172a;border:none;box-shadow:0 6px 16px -4px rgba(0,0,0,.35);cursor:pointer;transition:background .15s ease}
.kco-hero-arrow:hover{background:#fff}
.kco-hero-arrow svg{width:1.15rem;height:1.15rem}
@media(min-width:1024px){.kco-hero-arrow{display:flex}}
.kco-hero-arrow.left{left:.8rem}.kco-hero-arrow.right{right:.8rem}
.kco-hero-arrow:disabled{opacity:.35;pointer-events:none}
`;
  document.head.appendChild(st);
}

export function heroCardHtml(listing, kind, cardCls) {
  cleanListing(listing);
  const cls = cardCls || 'kco-hero-card';
  const cover = (listing.images && listing.images[0]) || FALLBACK_IMG;
  const pid = escapeHtmlAttr(listing.property_id || listing.id);
  const priceHtml = kind === 'vehicle' && listing.category === 'Trucks'
    ? formatTruckPrice(listing)
    : formatPrice(listing);

  let chips = '';
  let loc = '';
  if (kind === 'house') {
    const flag = flagEmoji(listing.country_code);
    const place = [listing.city, listing.state].filter(Boolean).join(', ') || listing.country || '';
    if (place) loc = `<span class="kco-hero-loc"><i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>${esc(flag + ' ' + place)}</span>`;
    const c = [];
    if (sp(listing, 'bedrooms') != null) c.push(`<span class="kco-hero-chip"><i data-lucide="bed-double" class="w-3.5 h-3.5"></i>${esc(sp(listing, 'bedrooms'))} Beds</span>`);
    if (sp(listing, 'bathrooms') != null) c.push(`<span class="kco-hero-chip"><i data-lucide="bath" class="w-3.5 h-3.5"></i>${esc(sp(listing, 'bathrooms'))} Baths</span>`);
    if (listing.land_size) c.push(`<span class="kco-hero-chip"><i data-lucide="ruler" class="w-3.5 h-3.5"></i>${esc(listing.land_size)}</span>`);
    if (sp(listing, 'building_size')) c.push(`<span class="kco-hero-chip"><i data-lucide="building-2" class="w-3.5 h-3.5"></i>${esc(sp(listing, 'building_size'))}</span>`);
    if (sp(listing, 'year_built')) c.push(`<span class="kco-hero-chip"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${esc(sp(listing, 'year_built'))}</span>`);
    const t = houseTypeLabel(listing);
    chips = c.join('');
    if (!loc) loc = '';
    const markup = `
      <a href="/details.html?id=${pid}" class="${cls}">
        <div class="kco-hero-media">
          <img src="${esc(cover)}" alt="${esc(listing.title || '')}" loading="lazy">
          <span class="kco-hero-type"><i data-lucide="home" class="w-3 h-3"></i>${esc(t)}</span>
          ${loc}
        </div>
        <div class="kco-hero-body">
          <div class="kco-hero-price"><b>${priceHtml}</b><span>${(listing.listing_status === 'rent') ? 'per month · for rent' : 'for sale'}</span></div>
          <p class="kco-hero-title">${esc(listing.title || '')}</p>
          ${chips ? `<div class="kco-hero-chips">${chips}</div>` : ''}
          <span class="kco-hero-btn">View Property <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>`;
    return markup;
  }

  const c = [];
  if (sp(listing, 'model_year')) c.push(`<span class="kco-hero-chip"><i data-lucide="calendar" class="w-3.5 h-3.5"></i>${esc(sp(listing, 'model_year'))}</span>`);
  if (sp(listing, 'mileage')) c.push(`<span class="kco-hero-chip"><i data-lucide="gauge" class="w-3.5 h-3.5"></i>${esc(sp(listing, 'mileage'))}</span>`);
  if (sp(listing, 'fuel_type')) c.push(`<span class="kco-hero-chip"><i data-lucide="fuel" class="w-3.5 h-3.5"></i>${esc(sp(listing, 'fuel_type'))}</span>`);
  if (sp(listing, 'transmission')) c.push(`<span class="kco-hero-chip"><i data-lucide="cog" class="w-3.5 h-3.5"></i>${esc(sp(listing, 'transmission'))}</span>`);
  if (sp(listing, 'body_type')) c.push(`<span class="kco-hero-chip"><i data-lucide="car-front" class="w-3.5 h-3.5"></i>${esc(sp(listing, 'body_type'))}</span>`);
  chips = c.join('');
  return `
      <a href="/details.html?id=${pid}" class="${cls}">
        <div class="kco-hero-media">
          <img src="${esc(cover)}" alt="${esc(listing.title || '')}" loading="lazy">
          <span class="kco-hero-type"><i data-lucide="car-front" class="w-3 h-3"></i>${esc(vehicleKindLabel(listing))}</span>
        </div>
        <div class="kco-hero-body">
          <div class="kco-hero-price"><b>${priceHtml}</b><span>· ${esc(sp(listing, 'condition') || 'ready')}</span></div>
          <p class="kco-hero-title">${esc(listing.title || '')}</p>
          ${chips ? `<div class="kco-hero-chips">${chips}</div>` : ''}
          <span class="kco-hero-btn">View Vehicle <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
        </div>
      </a>`;
}

function escapeHtmlAttr(value) {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function vehicleKindLabel(listing) {
  const cat = String(listing.category || '');
  const map = { 'Cars': 'Car', 'Cars & Vehicles': 'Car', 'Trucks': 'Truck', 'Buses': 'Bus', 'Buses & Coaches': 'Bus', 'Motorhomes': 'Motorhome / RV', 'Motorcycles': 'Motorcycle', 'Marine & Boating': 'Boat / Marine' };
  if (map[cat]) return map[cat];
  const bt = sp(listing, 'body_type');
  return bt || (cat || 'Vehicle');
}

function icon(name) {
  return `<i data-lucide="${name}" class="w-5 h-5 text-white"></i>`;
}

function wireDrag(track) {
  let down = false, moved = false, startX = 0, startScroll = 0;
  track.addEventListener('pointerdown', (e) => {
    down = true; moved = false;
    startX = e.clientX; startScroll = track.scrollLeft;
    track.classList.add('dragging');
    try { track.setPointerCapture(e.pointerId); } catch {}
  });
  track.addEventListener('pointermove', (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 5) moved = true;
    track.scrollLeft = startScroll - dx;
  });
  const end = () => { down = false; track.classList.remove('dragging'); };
  track.addEventListener('pointerup', end);
  track.addEventListener('pointercancel', end);
  track.addEventListener('pointerleave', end);
  track.addEventListener('click', (e) => {
    if (moved) { e.preventDefault(); e.stopPropagation(); }
  }, true);
}

function heroSection(opts) {
  const sec = document.createElement('section');
  sec.className = `kco-hero-section ${opts.kindCls}`;
  sec.setAttribute('aria-label', opts.title);

  const arrows = `
    <button class="kco-hero-arrow left" aria-label="Scroll ${opts.title} left">${SVG_CH_L}</button>
    <button class="kco-hero-arrow right" aria-label="Scroll ${opts.title} right">${SVG_CH_R}</button>`;

  const head = `
    <div class="kco-hero-panel">
      <div class="kco-hero-head">
        <div class="kco-hero-headleft">
          ${opts.icon ? `<span class="kco-hero-ic">${icon(opts.icon)}</span>` : ''}
          <div class="min-w-0">
            <h3>${esc(opts.title)}</h3>
            <p>${esc(opts.subtitle)}</p>
          </div>
        </div>
        <span class="kco-hero-count">${opts.listings.length} Available</span>
        ${opts.seeAll ? `<a class="kco-hero-seeall" href="/showroom.html?cat=${opts.cat}">See All <i data-lucide="arrow-up-right" class="w-4 h-4"></i></a>` : ''}
      </div>
      <div class="kco-hero-hscroll">
        ${opts.listings.length
          ? opts.listings.map(l => opts.card(l)).join('')
          : '<div class="kco-hero-empty">New listings will appear here as soon as they are published.</div>'}
      </div>
      ${arrows}
    </div>`;

  sec.innerHTML = head;

  const track = sec.querySelector('.kco-hero-hscroll');
  wireDrag(track);
  const left = sec.querySelector('.kco-hero-arrow.left');
  const right = sec.querySelector('.kco-hero-arrow.right');
  const update = () => {
    const max = track.scrollWidth - track.clientWidth - 2;
    left.disabled = track.scrollLeft <= 2;
    right.disabled = track.scrollLeft >= max;
  };
  left.addEventListener('click', () => track.scrollBy({ left: -track.clientWidth * 0.8, behavior: 'smooth' }));
  right.addEventListener('click', () => track.scrollBy({ left: track.clientWidth * 0.8, behavior: 'smooth' }));
  track.addEventListener('scroll', update, { passive: true });
  update();

  return sec;
}

const SVG_CH_L = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>';
const SVG_CH_R = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';

function renderHeroRows() {
  const container = document.getElementById(CONTAINER_ID);
  if (!container) return;
  heroStyles();
  const houses = getAllHeroHouses();
  const vehicles = getAllHeroVehicles();
  const frag = document.createDocumentFragment();
  frag.appendChild(heroSection({
    kindCls: 'kco-hero-re',
    title: '🏡 Houses & Real Estate', subtitle: 'Your dream home starts here.',
    icon: '', cat: 'real-estate', seeAll: true,
    listings: houses, card: (l) => heroCardHtml(l, 'house'),
  }));
  frag.appendChild(heroSection({
    kindCls: 'kco-hero-veh',
    title: '🚗 Cars & Trucks', subtitle: 'Your next ride starts here.',
    icon: '', cat: 'cars-trucks', seeAll: true,
    listings: vehicles, card: (l) => heroCardHtml(l, 'vehicle'),
  }));
  container.replaceChildren(frag);
  if (window.lucide) lucide.createIcons();
}

let _bootstrapped = false;
function bootstrap() {
  if (_bootstrapped) return;
  _bootstrapped = true;
  if (!document.getElementById(CONTAINER_ID)) return;
  hydrateDBListingsFromCache();
  renderHeroRows();
  loadDBListings().then(() => renderHeroRows()).catch(() => {});
  window.addEventListener('showroom-categories-ready', () => renderHeroRows());
  window.addEventListener('kco-db-refresh', () => renderHeroRows());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}