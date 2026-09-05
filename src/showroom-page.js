import { getAllShowcaseProperties, getAllHeroVehicles, heroCardHtml, houseTypeLabel, vehicleKindLabel, heroStyles, videoSection } from './showroom-hero.js';
import { getDBListings, loadDBListings, hydrateDBListingsFromCache } from './showroom-data.js';

const HOUSE_ORDER = [
  'Single-Family Home', 'Apartment', 'Condo', 'Townhouse', 'Villa', 'Mansion',
  'Beach House', 'Farm House', 'House', 'Homes', 'Duplex', 'Penthouse',
  'Bungalow', 'Cottage', 'Chalet', 'Studio', 'Loft',
];

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function icon(name) {
  return `<i data-lucide="${name}" class="w-5 h-5"></i>`;
}

function currentCat() {
  try { return new URLSearchParams(window.location.search).get('cat') || 'real-estate'; }
  catch { return 'real-estate'; }
}

function setupCatBar(types, active, veh) {
  const bar = document.getElementById('kco-catbar');
  if (!bar) return;
  bar.innerHTML = `<a class="kco-cat ${!active ? 'active' : ''} ${veh ? 'veh' : ''}" href="#" data-type="">All Types</a>` +
    types.map(t => `<a class="kco-cat ${active === t ? 'active' : ''} ${veh ? 'veh' : ''}" href="#" data-type="${esc(t)}">${esc(t)}</a>`).join('');
  bar.querySelectorAll('.kco-cat').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      render(currentCat(), a.dataset.type || '');
    });
  });
}

function showroomMasthead(isRe, list) {
  const mast = document.getElementById('kco-brand-mast') || document.querySelector('.kco-head');
  if (!mast) return;
  mast.innerHTML = `
    <h1 id="kco-cat-title">${isRe ? 'Houses For Sale' : 'Cars &amp; Trucks'}</h1>
    <p id="kco-cat-sub">${isRe ? 'Homes listed for sale or rent by their sellers, with video tours available.' : 'New and used cars, trucks, buses and motorhomes listed by their sellers.'}</p>`;
}

const HOUSE_ICONS = {
  'Single-Family Home': 'home', 'Apartment': 'building-2', 'Condo': 'building-2', 'Townhouse': 'home',
  'Villa': 'castle', 'Mansion': 'warehouse', 'Beach House': 'waves', 'Farm House': 'tractor',
  'House': 'home', 'Homes': 'home', 'Duplex': 'building-2', 'Penthouse': 'building-2',
  'Bungalow': 'home', 'Cottage': 'home', 'Chalet': 'mountain', 'Studio': 'building-2', 'Loft': 'building-2',
};

const VEHICLE_ICONS = {
  'Car': 'car-front', 'Truck': 'truck', 'Bus': 'bus', 'Motorhome / RV': 'van',
  'Motorcycle': 'bike', 'Boat / Marine': 'ship',
};

function render(cat, filterType) {
  const results = document.getElementById('kco-results');
  if (!results) return;
  heroStyles();
  const isRe = cat === 'real-estate';
  const list = isRe ? getAllShowcaseProperties() : getAllHeroVehicles();
  showroomMasthead(isRe, list);
  document.querySelectorAll('.kco-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === cat));

  const groups = new Map();
  const order = [];
  for (const l of list) {
    const key = isRe ? houseTypeLabel(l) : vehicleKindLabel(l);
    if (!groups.has(key)) { groups.set(key, []); order.push(key); }
    groups.get(key).push(l);
  }
  const baseOrder = isRe ? HOUSE_ORDER : ['Car', 'Truck', 'Bus', 'Motorhome / RV', 'Motorcycle', 'Boat / Marine'];
  order.sort((a, b) => {
    const ia = baseOrder.indexOf(a), ib = baseOrder.indexOf(b);
    const av = ia === -1 ? 1000 : ia, bv = ib === -1 ? 1000 : ib;
    if (av !== bv) return av - bv;
    return groups.get(b).length - groups.get(a).length;
  });

  const veh = !isRe;
  setupCatBar(order, filterType || '', veh);

  const visibleOrder = filterType ? order.filter(k => k === filterType) : order;
  const html = visibleOrder.map(key => {
    const items = groups.get(key);
    const cards = items.map(l => heroCardHtml(l, isRe ? 'house' : 'vehicle', 'kco-card')).join('');
    return `
      <section class="kco-group">
        <div class="kco-group-head ${veh ? 'veh' : ''}">
          <span class="kco-gh-ic">${icon(isRe ? (HOUSE_ICONS[key] || 'home') : (VEHICLE_ICONS[key] || 'car-front'))}</span>
          <h2>${esc(key)}</h2>
          <span>${items.length} listing${items.length === 1 ? '' : 's'}</span>
        </div>
        <div class="kco-grid">${cards}</div>
      </section>`;
  }).join('');

  results.innerHTML = html || '<div class="kco-empty">No items in this group yet.</div>';
  // All property videos go in ONE full-width horizontal line of big cards at the
  // top (same look as the Houses and Cars & Trucks rows) — not scattered as
  // normal product cards in the grouped grid below.
  try {
    const vs = videoSection();
    if (vs && vs.nodeType) results.insertBefore(vs, results.firstChild);
  } catch {}
  if (window.lucide) lucide.createIcons();
}

function init() {
  hydrateDBListingsFromCache();
  render(currentCat(), '');
  loadDBListings().then(() => render(currentCat(), '')).catch(() => {});
  window.addEventListener('showroom-categories-ready', () => render(currentCat(), ''));
  window.addEventListener('kco-db-refresh', () => render(currentCat(), ''));
}

init();