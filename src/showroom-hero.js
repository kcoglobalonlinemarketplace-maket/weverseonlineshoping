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

// ── Property Video Tours ─────────────────────────────────────────────
// A single full-width horizontal section that shows every property that
// has a video (house, land, apartment, villa, mansion, etc.), each as one
// large prominent video card — NOT a small card or two-column grid.
function isVideoUrl(url) {
  if (!url || typeof url !== 'string') return false;
  if (/^data:video\//i.test(url)) return true;
  if (url.startsWith('blob:')) return false;
  return /\.(mp4|webm|mov|m4v|avi|mkv|ogv)(\?|#|$)/i.test(url);
}

// The FIRST valid video URL for a property, from the standalone video fields
// or from a video merged into the images gallery. Returns null if none.
function listingVideoUrl(listing) {
  if (!listing) return null;
  for (const v of [listing.video, listing.video_url]) {
    if (isVideoUrl(v)) return v;
  }
  if (Array.isArray(listing.images)) {
    for (const img of listing.images) if (isVideoUrl(img)) return img;
  }
  return null;
}

// The best poster frame (a real image, never a video) for a video card.
function listingPoster(listing) {
  if (Array.isArray(listing.images)) {
    for (const img of listing.images) if (!isVideoUrl(img)) return img;
  }
  return FALLBACK_IMG;
}

// Every property listing that has a video, deduplicated by property_id AND by
// video URL — one card per DISTINCT video. This guarantees a clean single row
// with no duplicate videos: if two property rows point at the same video file
// (common when a listing was duplicated in the DB), only the first is shown.
function getAllPropertyVideos() {
  const seenIds = new Set();
  const seenVideos = new Set();
  const out = [];
  for (const l of getAllShowcaseProperties()) {
    if (!l) continue;
    const id = l.property_id || l.id;
    if (!id || seenIds.has(id)) continue;
    const video = listingVideoUrl(l);
    if (!video) continue;
    if (seenVideos.has(video)) continue;
    seenIds.add(id);
    seenVideos.add(video);
    out.push(l);
  }
  return out;
}

function videoCardHtml(listing) {
  cleanListing(listing);
  const pid = escapeHtmlAttr(listing.property_id || listing.id);
  const video = listingVideoUrl(listing);
  const poster = listingPoster(listing);
  const priceHtml = formatPrice(listing);
  const type = houseTypeLabel(listing);
  const flag = flagEmoji(listing.country_code);
  const place = [listing.city, listing.state].filter(Boolean).join(', ') || listing.country || '';
  const loc = place
    ? `<span class="kco-video-loc"><i data-lucide="map-pin" class="w-3 h-3 shrink-0"></i>${esc(flag ? flag + ' ' + place : place)}</span>`
    : '';
  const isRent = listing.listing_status === 'rent';
  const statusCls = isRent ? 'kco-sale-rent' : 'kco-sale-buy';
  const statusLabel = isRent ? 'For Rent' : 'For Sale';

  const beds = sp(listing, 'bedrooms') != null ? `<span class="kco-hero-chip"><i data-lucide="bed-double" class="w-3.5 h-3.5"></i>${esc(sp(listing, 'bedrooms'))} Bed${Number(sp(listing, 'bedrooms')) === 1 ? '' : 's'}</span>` : '';
  const baths = sp(listing, 'bathrooms') != null ? `<span class="kco-hero-chip"><i data-lucide="bath" class="w-3.5 h-3.5"></i>${esc(sp(listing, 'bathrooms'))} Bath${Number(sp(listing, 'bathrooms')) === 1 ? '' : 's'}</span>` : '';
  const build = sp(listing, 'building_size') ? `<span class="kco-hero-chip"><i data-lucide="building-2" class="w-3.5 h-3.5"></i>${esc(sp(listing, 'building_size'))}</span>` : '';
  const land = listing.land_size ? `<span class="kco-hero-chip"><i data-lucide="ruler" class="w-3.5 h-3.5"></i>${esc(listing.land_size)}</span>` : '';

  return `
    <a href="/details.html?id=${pid}" class="kco-video-card">
      <div class="kco-video-media">
        <video src="${esc(video)}" poster="${esc(poster)}" muted loop playsinline preload="metadata" class="kco-video-el" data-detail-href="/details.html?id=${pid}" aria-label="${esc(listing.title || '')}">
          <source src="${esc(video)}">
        </video>
        <div class="kco-video-bigplay"><span class="kco-video-playcircle"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></div>
        <span class="kco-hero-type"><i data-lucide="home" class="w-3 h-3"></i>${esc(type)}</span>
        <span class="kco-video-badge ${statusCls}">${statusLabel}</span>
        ${loc}
      </div>
      <div class="kco-video-body">
        <div class="kco-hero-price"><b>${priceHtml}</b><span>${isRent ? 'per month · for rent' : 'for sale'}</span></div>
        <p class="kco-hero-title">${esc(listing.title || '')}</p>
        ${(beds || baths || build || land) ? `<div class="kco-hero-chips">${beds}${baths}${build}${land}</div>` : ''}
        <span class="kco-hero-btn">View Home &amp; Watch Tour <i data-lucide="arrow-right" class="w-4 h-4"></i></span>
      </div>
    </a>`;
}

// Play/pause a video card's <video> when it scrolls into view (desktop), and
// let taps toggle play on mobile instead of losing the tap to the link alone.
function wireVideoCards(section) {
  const io = ('IntersectionObserver' in window)
    ? new IntersectionObserver((entries) => {
        for (const en of entries) {
          const el = en.target;
          if (!el || typeof el.play !== 'function') continue;
          if (en.isIntersecting) {
            el.play().catch(() => {});
          } else {
            try { el.pause(); } catch {}
          }
        }
      }, { rootMargin: '120px' })
    : null;

  section.querySelectorAll('.kco-video-el').forEach((vd) => {
    // Tapping the video toggles play/pause, but still lets the surrounding
    // anchor open details when the video is NOT playing.
    vd.addEventListener('click', (e) => {
      if (vd.paused) {
        vd.play().catch(() => {});
        e.preventDefault();
        e.stopPropagation();
      }
    });
    if (io) io.observe(vd);
  });

  // Keep the observer reference so the section can be replaced without leaking.
  Object.defineProperty(section, '_kcoVideoIO', { value: io, configurable: true });
  if (!('_kcoVideoCleanup' in section)) {
    Object.defineProperty(section, '_kcoVideoCleanup', { value: () => io && io.disconnect(), configurable: true });
  }
}

function videoSection() {
  const listings = getAllPropertyVideos();
  if (!listings.length) return document.createDocumentFragment();

  const sec = document.createElement('section');
  sec.className = 'kco-hero-section kco-video-section';
  sec.setAttribute('aria-label', 'Houses and Real Estate Video Tours');
  sec.setAttribute('data-property-videos', 'true');

  const head = `
    <div class="kco-hero-panel">
      <div class="kco-hero-head">
        <div class="kco-hero-headleft">
          <span class="kco-hero-ic kco-video-ic"><i data-lucide="home" class="w-5 h-5"></i></span>
          <div class="min-w-0">
            <span class="kco-video-eyebrow">Real Estate</span>
            <h3 class="kco-video-h3">Houses and Real Estate Video Tours</h3>
            <p>Watch every home, apartment, villa &amp; mansion on video.</p>
          </div>
        </div>
        <span class="kco-hero-count">${listings.length} Homes</span>
        <a class="kco-hero-seeall" href="/showroom.html?cat=real-estate">See More Homes <i data-lucide="arrow-up-right" class="w-4 h-4"></i></a>
      </div>
      <div class="kco-video-hscroll">
        ${listings.map(l => videoCardHtml(l)).join('')}
      </div>
      <button class="kco-hero-arrow left" aria-label="Scroll Houses and Real Estate Video Tours left">${SVG_CH_L}</button>
      <button class="kco-hero-arrow right" aria-label="Scroll Houses and Real Estate Video Tours right">${SVG_CH_R}</button>
    </div>`;

  sec.innerHTML = head;

  const track = sec.querySelector('.kco-video-hscroll');
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

  // Pause sidebar work whenever the whole page is hidden so background scans
  // never keep playing hidden videos.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) sec.querySelectorAll('.kco-video-el').forEach(v => { try { v.pause(); } catch {} });
  });

  requestAnimationFrame(() => wireVideoCards(sec));
  if (window.lucide) lucide.createIcons();
  return sec;
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

export { getAllHeroVehicles, heroStyles, sp, isVehicle, vehicleKindLabel, videoSection };

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
.kco-video-section{background:linear-gradient(135deg,#043a1c 0%,#0b6b3c 48%,#059669 100%);border:1px solid rgba(209,250,229,.22);box-shadow:0 18px 46px -22px rgba(4,58,28,.55)}
.kco-video-ic{background:#ffffff;border:none;color:#065f46;box-shadow:0 10px 20px -8px rgba(0,0,0,.35)}
.kco-video-eyebrow{display:inline-flex;align-items:center;font-size:.62rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#050505;background:#ffffff;border-radius:999px;padding:.22rem .6rem;margin-bottom:.35rem;box-shadow:0 4px 12px -4px rgba(0,0,0,.4)}
.kco-video-section .kco-hero-head .kco-video-h3{color:#ffffff;font-size:clamp(1.15rem,2.4vw,1.55rem);font-weight:900;letter-spacing:.02em;text-transform:none;text-shadow:0 2px 14px rgba(0,0,0,.35)}
.kco-video-section .kco-hero-head p{color:#ffffff;font-size:.78rem;font-weight:700;letter-spacing:.01em;text-shadow:0 1px 10px rgba(0,0,0,.3)}
.kco-video-section .kco-hero-count{background:#ffffff;border:none;color:#040a06;box-shadow:0 4px 14px -4px rgba(0,0,0,.35)}
.kco-video-section .kco-hero-count b,.kco-video-section .kco-hero-count strong{color:#065f46}
.kco-video-section .kco-hero-seeall{background:#050505;border:1.5px solid #ffffff;color:#ffffff}
.kco-video-section .kco-hero-seeall:hover{background:#065f46;border-color:#ffffff;color:#ffffff}
.kco-video-hscroll{display:flex;gap:1rem;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:.4rem 2px .7rem;cursor:grab}
.kco-video-hscroll::-webkit-scrollbar{display:none}
.kco-video-hscroll.dragging{cursor:grabbing;scroll-snap-type:none;-webkit-user-select:none;user-select:none}
.kco-video-card{flex:0 0 auto;scroll-snap-align:start;width:272px;min-width:272px;border-radius:1.1rem;overflow:hidden;background:#fff;border:1px solid #e2e8f0;box-shadow:0 8px 22px -12px rgba(2,6,23,.18);transition:transform .18s ease,box-shadow .18s ease;text-decoration:none;display:flex;flex-direction:column}
@media(min-width:640px){.kco-video-card{width:372px;min-width:372px}}
@media(min-width:1024px){.kco-video-card{width:440px;min-width:440px}}
.kco-video-card:hover{transform:translateY(-4px);box-shadow:0 20px 38px -16px rgba(2,6,23,.32);border-color:#bfdbfe}
.kco-video-media{position:relative;aspect-ratio:16/10;background:#0b1120;overflow:hidden}
.kco-video-media video{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s ease}
.kco-video-card:hover .kco-video-media video{transform:scale(1.04)}
.kco-video-bigplay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;opacity:.95;transition:opacity .2s ease}
.kco-video-playcircle{width:3.4rem;height:3.4rem;border-radius:999px;background:rgba(255,255,255,.94);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px -6px rgba(0,0,0,.45);transition:transform .18s ease}
.kco-video-playcircle svg{width:1.5rem;height:1.5rem;color:#1e3a8a;margin-left:.15rem}
.kco-video-card:hover .kco-video-bigplay,.kco-video-media.video-playing .kco-video-bigplay{opacity:0}
.kco-video-card:hover .kco-video-playcircle{transform:scale(1.1)}
.kco-video-badge{position:absolute;top:.7rem;right:.7rem;display:inline-flex;align-items:center;gap:.3rem;font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:.3rem .6rem;border-radius:999px;box-shadow:0 4px 12px -2px rgba(0,0,0,.3)}
.kco-video-badge.kco-sale-buy{background:#059669;color:#fff;border:1px solid rgba(255,255,255,.25)}
.kco-video-badge.kco-sale-rent{background:#d97706;color:#fff;border:1px solid rgba(255,255,255,.25)}
.kco-video-badge svg{width:.8rem;height:.8rem}
.kco-video-loc{position:absolute;bottom:.7rem;left:.7rem;right:.7rem;display:flex;align-items:center;gap:.4rem;background:rgba(0,0,0,.55);backdrop-filter:blur(6px);color:#fff;font-size:11px;font-weight:600;padding:.35rem .7rem;border-radius:.8rem}
.kco-video-section .kco-video-loc{left:.7rem}
.kco-video-body{display:flex;flex-direction:column;gap:.55rem;padding:.9rem 1rem 1rem}
.kco-video-section .kco-video-body .kco-hero-price b{color:#0f172a;font-size:1.45rem}
.kco-video-section .kco-video-body .kco-hero-price span{color:#059669;font-weight:800}
.kco-video-section .kco-video-body .kco-hero-btn{background:linear-gradient(90deg,#1d4ed8,#2563eb);box-shadow:0 8px 16px -6px rgba(37,99,235,.45)}
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
  const vehicles = getAllHeroVehicles();
  const frag = document.createDocumentFragment();
  // Houses show ONLY as video tours (single full-width row of large video
  // cards) — no card grid, so every home is seen as a real walkthrough.
  frag.appendChild(videoSection());
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