import { getAllShowcaseProperties, getAllHeroVehicles, heroCardHtml, houseTypeLabel, vehicleKindLabel, heroStyles } from './showroom-hero.js';
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

function render(cat, filterType) {
  const results = document.getElementById('kco-results');
  if (!results) return;
  heroStyles();
  const isRe = cat === 'real-estate';
  const list = isRe ? getAllShowcaseProperties() : getAllHeroVehicles();
  const title = document.getElementById('kco-cat-title');
  const sub = document.getElementById('kco-cat-sub');
  document.querySelectorAll('.kco-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
  if (title) title.textContent = isRe ? 'Browse Real Estate' : 'Browse Cars & Trucks';
  if (sub) sub.textContent = isRe
    ? `${list.length} properties — every house, apartment, villa and more, grouped by type.`
    : `${list.length} vehicles — every car, truck, bus, motorhome and more, grouped by type.`;

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
          <span class="kco-gh-ic">${icon(isRe ? 'home' : 'car-front')}</span>
          <h2>${esc(key)}</h2>
          <span>${items.length} listing${items.length === 1 ? '' : 's'}</span>
        </div>
        <div class="kco-grid">${cards}</div>
      </section>`;
  }).join('');

  results.innerHTML = html || '<div class="kco-empty">No items in this group yet.</div>';
  if (window.lucide) lucide.createIcons();
}

function init() {
  hydrateDBListingsFromCache();
  render(currentCat(), '');
  loadDBListings().then(() => render(currentCat(), '')).catch(() => {});
  window.addEventListener('showroom-categories-ready', () => render(currentCat(), ''));
}

init();