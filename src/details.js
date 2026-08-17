import { SHOWROOM_LISTINGS, formatPrice, flagEmoji, findListingById, loadDBListings, getAllListings, isDBLoaded, cleanListing } from './showroom-data.js';
import { getCatalogCategory, getCatalogSample } from './catalog.js';
import { getTruckById, formatTruckPrice, TRUCK_LISTINGS } from './truck-data.js';
import { getMotorhomeById, MOTORHOME_LISTINGS } from './motorhome-data.js';
import { getCarById, CAR_LISTINGS } from './car-data.js';
import { getPhoneById, PHONE_LISTINGS } from './phone-data.js';
import { PET_LISTINGS } from './pet-data.js';
import { PRODUCT_LISTINGS } from './products-data.js';
import { PRODUCT_EXTRA_LISTINGS } from './products-extra.js';
import { renderCard } from './showroom-cards.js';
import { getCurrentUser, setRedirectAfterAuth } from './auth.js';
import { trackEvent } from './analytics.js';
import { supabase } from './supabase-client.js';

const FALLBACK_IMG = '/fallback.svg';

function safeRating(r) { return (typeof r === 'number' && !isNaN(r)) ? r.toFixed(1) : '0.0'; }
function safeImages(imgs) { return (Array.isArray(imgs) && imgs.length > 0) ? imgs : [FALLBACK_IMG]; }

function getListingId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

const ALL_PRODUCTS = [...PRODUCT_LISTINGS, ...PRODUCT_EXTRA_LISTINGS];
function findProductById(id) {
  return ALL_PRODUCTS.find(l => l.property_id === id) || null;
}

function renderTruck(listing) {
  const root = document.getElementById('details-content');
  const price = formatTruckPrice(listing);

  const imgs = safeImages(listing.images);
  const galleryThumbs = imgs.map((img, i) =>
    `<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${i === 0 ? 'active border-blue-500' : 'border-gray-200'} shrink-0" data-img="${escapeHtml(img)}">
      <img src="${escapeHtml(img)}" alt="View ${i + 1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
    </button>`
  ).join('');

  const galleryLabels = [
    'Front View', 'Rear View', 'Left Side', 'Right Side',
    'Interior Dashboard', 'Driver Seat', 'Cargo Area / Truck Bed',
    'Engine', 'Wheels / Tires', 'Additional View'
  ];

  const specs = [
    { icon: 'building-2', label: 'Brand', value: listing.brand },
    { icon: 'car', label: 'Model', value: listing.model },
    { icon: 'calendar', label: 'Model Year', value: listing.model_year },
    { icon: 'badge-check', label: 'Condition', value: listing.condition },
    { icon: 'gauge', label: 'Mileage', value: listing.mileage },
    { icon: 'cog', label: 'Transmission', value: listing.transmission },
    { icon: 'fuel', label: 'Fuel Type', value: listing.fuel_type },
    { icon: 'zap', label: 'Engine', value: listing.engine },
    { icon: 'truck', label: 'Drive Type', value: listing.drive_type },
    { icon: 'palette', label: 'Colour', value: listing.color },
    { icon: 'package', label: 'Payload Capacity', value: listing.payload_capacity },
    { icon: 'link', label: 'Towing Capacity', value: listing.towing_capacity },
    { icon: 'barcode', label: 'VIN', value: listing.vin },
    { icon: 'tag', label: 'Stock Number', value: listing.stock_number },
  ].filter(s => s.value != null && s.value !== '' && s.value !== 'N/A');

  const featuresBlock = listing.features?.length ? `
    <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Features</h3>
      <div class="flex flex-wrap gap-2">
        ${listing.features.map(f => `<span class="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full border border-gray-300">${escapeHtml(f)}</span>`).join('')}
      </div>
    </div>` : '';

  const ratingsBlock = `
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-amber-400 text-amber-600"></i>
        <span class="text-lg font-bold text-gray-900">${safeRating(listing.rating)}</span>
        <span class="text-gray-500 text-sm">(${listing.rating_count || 0} ratings)</span>
      </div>
    </div>`;

  root.innerHTML = `
    <div class="fade-in">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>Trucks</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${listing.title}</span>
      </div>

      <!-- Title & ID -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${escapeHtml(listing.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${escapeHtml(listing.stock_number || '—')}</span> &middot; VIN: <span class="text-gray-600 font-mono">${escapeHtml(listing.vin || '—')}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${price}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${escapeHtml(listing.condition || 'Used')} &middot; For Sale</span>
        </div>
      </div>

      ${ratingsBlock}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${listing.images[0]}" alt="${listing.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${galleryLabels[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${galleryThumbs}
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 mb-8">
        <button id="buy-now-btn" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl uppercase text-sm tracking-wider transition flex items-center justify-center gap-2">
          <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
        </button>
        <button id="wishlist-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="w-5 h-5"></i>
        </button>
        <button id="share-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Share">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Description -->
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Description</h3>
        <p class="text-gray-600 text-sm leading-relaxed">${escapeHtml(listing.description || '')}</p>
      </div>

      <!-- Truck Information -->
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Truck Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          ${specs.map(s => `
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${s.icon}" class="w-3.5 h-3.5"></i>${s.label}</div>
              <div class="text-gray-800 font-medium text-sm">${escapeHtml(s.value)}</div>
            </div>
          `).join('')}
        </div>
      </div>

      ${featuresBlock}

      ${sellerBlock(listing)}

      ${relSectionsHtml()}
    </div>
  `;

  const hero = document.getElementById('hero-image');
  const label = document.getElementById('gallery-label');
  root.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active', 'border-blue-500'));
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.add('border-gray-200'));
      thumb.classList.add('active', 'border-blue-500');
      thumb.classList.remove('border-gray-200');
      hero.src = thumb.dataset.img;
      label.textContent = galleryLabels[i] || `View ${i + 1}`;
    });
  });

  document.getElementById('buy-now-btn').addEventListener('click', async () => {
    const user = await getCurrentUser();
    if (user) {
      window.location.href = `/checkout.html?id=${listing.property_id}`;
    } else {
      setRedirectAfterAuth(`/checkout.html?id=${listing.property_id}`);
      window.location.href = `/auth.html?redirect=${encodeURIComponent('/checkout.html?id=' + listing.property_id)}`;
    }
  });

  document.getElementById('share-btn').addEventListener('click', async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: escapeHtml(listing.title), url });
      } else {
        await navigator.clipboard.writeText(url);
        const btn = document.getElementById('share-btn');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Copied!';
        if (window.lucide) lucide.createIcons();
        setTimeout(() => { btn.innerHTML = orig; if (window.lucide) lucide.createIcons(); }, 2000);
      }
    } catch (e) { /* user cancelled */ }
  });

  loadRelatedSections(listing);

  if (window.lucide) lucide.createIcons();
}

function renderMotorhome(listing) {
  const root = document.getElementById('details-content');
  const price = formatPrice(listing);

  const imgs = safeImages(listing.images);
  const galleryThumbs = imgs.map((img, i) =>
    `<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${i === 0 ? 'active border-blue-500' : 'border-gray-200'} shrink-0" data-img="${escapeHtml(img)}">
      <img src="${escapeHtml(img)}" alt="View ${i + 1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
    </button>`
  ).join('');

  const galleryLabels = [
    'Exterior Front', 'Exterior Side', 'Exterior Rear', 'Living Area',
    'Kitchen', 'Bedroom', 'Bathroom', 'Additional View'
  ];

  const specs = [
    { icon: 'building-2', label: 'Brand', value: listing.brand },
    { icon: 'car', label: 'Model', value: listing.model },
    { icon: 'calendar', label: 'Model Year', value: listing.model_year },
    { icon: 'badge-check', label: 'Condition', value: listing.condition },
    { icon: 'gauge', label: 'Mileage', value: listing.mileage },
    { icon: 'cog', label: 'Transmission', value: listing.transmission },
    { icon: 'fuel', label: 'Fuel Type', value: listing.fuel_type },
    { icon: 'zap', label: 'Engine', value: listing.engine },
    { icon: 'bus', label: 'Type', value: listing.property_type },
    { icon: 'truck', label: 'Drive Type', value: listing.drive_type },
    { icon: 'palette', label: 'Colour', value: listing.color },
    { icon: 'moon', label: 'Sleeping Capacity', value: listing.sleeping_capacity },
    { icon: 'users', label: 'Seating Capacity', value: listing.seating_capacity },
    { icon: 'shower-head', label: 'Bathroom', value: listing.bathroom },
    { icon: 'utensils', label: 'Kitchen', value: listing.kitchen },
    { icon: 'droplet', label: 'Water Tank', value: listing.water_tank },
    { icon: 'barcode', label: 'VIN', value: listing.vin },
    { icon: 'tag', label: 'Stock Number', value: listing.stock_number },
  ].filter(s => s.value != null && s.value !== '' && s.value !== 'N/A');

  const featuresBlock = listing.features?.length ? `
    <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Features</h3>
      <div class="flex flex-wrap gap-2">
        ${listing.features.map(f => `<span class="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full border border-gray-300">${escapeHtml(f)}</span>`).join('')}
      </div>
    </div>` : '';

  const ratingsBlock = `
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-amber-400 text-amber-600"></i>
        <span class="text-lg font-bold text-gray-900">${safeRating(listing.rating)}</span>
        <span class="text-gray-500 text-sm">(${listing.rating_count || 0} ratings)</span>
      </div>
    </div>`;

  root.innerHTML = `
    <div class="fade-in">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>Motorhomes</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${listing.title}</span>
      </div>

      <!-- Title & ID -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${escapeHtml(listing.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${escapeHtml(listing.stock_number || '—')}</span> &middot; VIN: <span class="text-gray-600 font-mono">${escapeHtml(listing.vin || '—')}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${price}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${escapeHtml(listing.condition || 'Used')} &middot; For Sale</span>
        </div>
      </div>

      ${ratingsBlock}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${listing.images[0]}" alt="${listing.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${galleryLabels[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${galleryThumbs}
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 mb-8">
        <button id="buy-now-btn" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl uppercase text-sm tracking-wider transition flex items-center justify-center gap-2">
          <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
        </button>
        <button id="wishlist-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="w-5 h-5"></i>
        </button>
        <button id="share-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Share">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Description -->
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Description</h3>
        <p class="text-gray-600 text-sm leading-relaxed">${escapeHtml(listing.description || '')}</p>
      </div>

      <!-- Motorhome Information -->
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Motorhome Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          ${specs.map(s => `
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${s.icon}" class="w-3.5 h-3.5"></i>${s.label}</div>
              <div class="text-gray-800 font-medium text-sm">${escapeHtml(s.value)}</div>
            </div>
          `).join('')}
        </div>
      </div>

      ${featuresBlock}

      ${sellerBlock(listing)}

      ${relSectionsHtml()}
    </div>
  `;

  const hero = document.getElementById('hero-image');
  const label = document.getElementById('gallery-label');
  root.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active', 'border-blue-500'));
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.add('border-gray-200'));
      thumb.classList.add('active', 'border-blue-500');
      thumb.classList.remove('border-gray-200');
      hero.src = thumb.dataset.img;
      label.textContent = galleryLabels[i] || `View ${i + 1}`;
    });
  });

  document.getElementById('buy-now-btn').addEventListener('click', async () => {
    const user = await getCurrentUser();
    if (user) {
      window.location.href = `/checkout.html?id=${listing.property_id}`;
    } else {
      setRedirectAfterAuth(`/checkout.html?id=${listing.property_id}`);
      window.location.href = `/auth.html?redirect=${encodeURIComponent('/checkout.html?id=' + listing.property_id)}`;
    }
  });

  document.getElementById('share-btn').addEventListener('click', async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: escapeHtml(listing.title), url });
      } else {
        await navigator.clipboard.writeText(url);
        const btn = document.getElementById('share-btn');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Copied!';
        if (window.lucide) lucide.createIcons();
        setTimeout(() => { btn.innerHTML = orig; if (window.lucide) lucide.createIcons(); }, 2000);
      }
    } catch (e) { /* user cancelled */ }
  });

  loadRelatedSections(listing);

  if (window.lucide) lucide.createIcons();
}

function renderCar(listing) {
  const root = document.getElementById('details-content');
  const price = formatPrice(listing);

  const imgs = safeImages(listing.images);
  const galleryThumbs = imgs.map((img, i) =>
    `<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${i === 0 ? 'active border-blue-500' : 'border-gray-200'} shrink-0" data-img="${escapeHtml(img)}">
      <img src="${escapeHtml(img)}" alt="View ${i + 1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
    </button>`
  ).join('');

  const galleryLabels = [
    'Front View', 'Rear View', 'Left Side', 'Right Side',
    'Interior Dashboard', 'Driver Seat', 'Cabin / Interior',
    'Wheels / Tires', 'Additional View'
  ];

  const specs = [
    { icon: 'building-2', label: 'Brand', value: listing.brand },
    { icon: 'car', label: 'Model', value: listing.model },
    { icon: 'calendar', label: 'Model Year', value: listing.model_year },
    { icon: 'badge-check', label: 'Condition', value: listing.condition },
    { icon: 'gauge', label: 'Mileage', value: listing.mileage },
    { icon: 'cog', label: 'Transmission', value: listing.transmission },
    { icon: 'fuel', label: 'Fuel Type', value: listing.fuel_type },
    { icon: 'zap', label: 'Engine', value: listing.engine },
    { icon: 'truck', label: 'Drive Type', value: listing.drive_type },
    { icon: 'palette', label: 'Colour', value: listing.color },
    { icon: 'barcode', label: 'VIN', value: listing.vin },
    { icon: 'tag', label: 'Stock Number', value: listing.stock_number },
  ].filter(s => s.value != null && s.value !== '' && s.value !== 'N/A');

  const featuresBlock = listing.features?.length ? `
    <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Features</h3>
      <div class="flex flex-wrap gap-2">
        ${listing.features.map(f => `<span class="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full border border-gray-300">${escapeHtml(f)}</span>`).join('')}
      </div>
    </div>` : '';

  const ratingsBlock = `
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-amber-400 text-amber-600"></i>
        <span class="text-lg font-bold text-gray-900">${safeRating(listing.rating)}</span>
        <span class="text-gray-500 text-sm">(${listing.rating_count || 0} ratings)</span>
      </div>
    </div>`;

  root.innerHTML = `
    <div class="fade-in">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>Cars</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${listing.title}</span>
      </div>

      <!-- Title & ID -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${escapeHtml(listing.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${escapeHtml(listing.stock_number || '—')}</span> &middot; VIN: <span class="text-gray-600 font-mono">${escapeHtml(listing.vin || '—')}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${price}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${escapeHtml(listing.condition || 'Used')} &middot; For Sale</span>
        </div>
      </div>

      ${ratingsBlock}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${listing.images[0]}" alt="${listing.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        <span id="gallery-label" class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">${galleryLabels[0]}</span>
      </div>

      <!-- Gallery -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${galleryThumbs}
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 mb-8">
        <button id="buy-now-btn" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl uppercase text-sm tracking-wider transition flex items-center justify-center gap-2">
          <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
        </button>
        <button id="wishlist-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="w-5 h-5"></i>
        </button>
        <button id="share-btn" class="px-5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Share">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Description -->
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Description</h3>
        <p class="text-gray-600 text-sm leading-relaxed">${escapeHtml(listing.description || '')}</p>
      </div>

      <!-- Car Information -->
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Car Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          ${specs.map(s => `
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${s.icon}" class="w-3.5 h-3.5"></i>${s.label}</div>
              <div class="text-gray-800 font-medium text-sm">${escapeHtml(s.value)}</div>
            </div>
          `).join('')}
        </div>
      </div>

      ${featuresBlock}

      ${sellerBlock(listing)}

      ${relSectionsHtml()}
    </div>
  `;

  const hero = document.getElementById('hero-image');
  const label = document.getElementById('gallery-label');
  root.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active', 'border-blue-500'));
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.add('border-gray-200'));
      thumb.classList.add('active', 'border-blue-500');
      thumb.classList.remove('border-gray-200');
      hero.src = thumb.dataset.img;
      label.textContent = galleryLabels[i] || `View ${i + 1}`;
    });
  });

  document.getElementById('buy-now-btn').addEventListener('click', async () => {
    const user = await getCurrentUser();
    if (user) {
      window.location.href = `/checkout.html?id=${listing.property_id}`;
    } else {
      setRedirectAfterAuth(`/checkout.html?id=${listing.property_id}`);
      window.location.href = `/auth.html?redirect=${encodeURIComponent('/checkout.html?id=' + listing.property_id)}`;
    }
  });

  document.getElementById('share-btn').addEventListener('click', async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: escapeHtml(listing.title), url });
      } else {
        await navigator.clipboard.writeText(url);
        const btn = document.getElementById('share-btn');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Copied!';
        if (window.lucide) lucide.createIcons();
        setTimeout(() => { btn.innerHTML = orig; if (window.lucide) lucide.createIcons(); }, 2000);
      }
    } catch (e) { /* user cancelled */ }
  });

  loadRelatedSections(listing);

  if (window.lucide) lucide.createIcons();
}

function galleryLabelsFor(listing) {
  if (listing.listing_type === 'vehicle') {
    return ['Front View', 'Rear View', 'Left Side', 'Right Side', 'Interior Dashboard', 'Driver Seat', 'Cargo / Bed', 'Engine', 'Wheels / Tires', 'Additional View'];
  }
  if (listing.listing_type === 'property') {
    return ['Front Exterior', 'Side Exterior', 'Back Exterior', 'Living Room', 'Kitchen', 'Dining Area', 'Bedroom', 'Bathroom', 'Additional Interior', 'Additional View'];
  }
  return ['Front View', 'Angle View', 'Detail View', 'Packaging', 'Additional View'];
}

function actionGridHtml(listing) {
  const isProperty = listing.listing_type === 'property';
  const shareLabel = isProperty ? 'Share Property' : 'Share';
  const contactHref = `/contact.html?listing=${encodeURIComponent(listing.property_id || '')}`;
  return `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
      <button type="button" id="view-details-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="eye" class="w-5 h-5"></i> View Details
      </button>
      <button type="button" id="add-cart-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart
      </button>
      <button type="button" id="buy-now-btn" class="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition text-sm uppercase tracking-wider">
        <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
      </button>
      <a href="${contactHref}" class="flex items-center justify-center gap-2 bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-700 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="badge-check" class="w-4 h-4"></i> Contact Us
        <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online</span>
      </a>
      <button type="button" id="wishlist-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-700 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="heart" class="w-5 h-5"></i> Add to Wishlist
      </button>
      <button type="button" id="share-btn" class="flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="share-2" class="w-5 h-5"></i> ${shareLabel}
      </button>
    </div>
  `;
}

function sellerBlock(listing) {
  const isAgent = listing.listing_type === 'property';
  const base = `/contact.html?listing=${encodeURIComponent(listing.property_id || '')}`;
  return `
    <div class="bg-gray-50 border border-gray-200 rounded-xl p-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="shrink-0 w-11 h-11 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-gray-200">
          <img src="/w-logo.svg" alt="Weverse Online Shop" class="w-full h-full object-contain" onerror="this.onerror=null;this.style.display='none'">
        </div>
        <div>
          <p class="text-sm font-bold text-gray-900">Weverse Online Shop</p>
          <p class="text-xs text-emerald-600 flex items-center gap-1"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Seller</p>
        </div>
      </div>
      <p class="text-xs text-gray-500">${isAgent ? 'Professional agent for this listing' : 'Trusted marketplace seller'} on Weverse Online Shop</p>
      <p class="text-xs text-gray-600 mt-2 flex items-center gap-1"><i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-600"></i> Secure checkout · Authentic listings</p>
      <div class="flex gap-2 mt-4">
        <a href="${base}" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 rounded-xl text-xs text-center transition">Contact Seller</a>
        <a href="${base}&subject=Enquiry" class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2.5 rounded-xl text-xs text-center transition">Send Message</a>
      </div>
    </div>`;
}

function relSectionsHtml() {
  return `
      <div id="similar-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Similar Products</h3>
        <div class="rel-grid flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-1 snap-x snap-mandatory"></div>
      </div>
      <div id="related-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Related Products</h3>
        <div class="rel-grid flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-1 snap-x snap-mandatory"></div>
      </div>
      <div id="recommended-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Recommended For You</h3>
        <div class="rel-grid flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-1 snap-x snap-mandatory"></div>
      </div>`;
}

function buildRelatedPool(listing) {
  const seen = new Map();
  const add = (arr) => (arr || []).forEach(l => { if (l && l.property_id) seen.set(l.property_id, l); });
  add(SHOWROOM_LISTINGS);
  add(TRUCK_LISTINGS);
  add(MOTORHOME_LISTINGS);
  add(CAR_LISTINGS);
  add(PHONE_LISTINGS);
  add(PET_LISTINGS);
  add(PRODUCT_LISTINGS);
  add(PRODUCT_EXTRA_LISTINGS);
  add(getAllListings());
  const cat = getCatalogCategory(listing.category || listing.subcategory);
  if (cat) add(getCatalogSample(cat.slug, 50));
  return [...seen.values()].filter(l => l.property_id !== listing.property_id);
}

function relScore(a, b) {
  let score = 0;
  const n = s => String(s || '').trim().toLowerCase();
  if (a.listing_type && a.listing_type === b.listing_type) score += 40;
  if (a.category && n(a.category) === n(b.category)) score += 30;
  if (a.subcategory && n(a.subcategory) === n(b.subcategory)) score += 20;
  if (a.brand && n(a.brand) === n(b.brand)) score += 15;
  if (a.breed && n(a.breed) === n(b.breed)) score += 15;
  if (a.model && n(a.model) === n(b.model)) score += 10;
  if (a.property_type && n(a.property_type) === n(b.property_type)) score += 15;
  const pa = parseFloat(a.price) || 0, pb = parseFloat(b.price) || 0;
  if (pa > 0 && pb > 0) {
    const ratio = Math.min(pa, pb) / Math.max(pa, pb);
    if (ratio >= 0.8) score += 10;
    else if (ratio >= 0.6) score += 6;
    else if (ratio >= 0.4) score += 3;
  }
  if (a.country_code && a.country_code === b.country_code) score += 5;
  const wa = new Set(n(a.title).split(/[^a-z0-9]+/).filter(w => w.length > 2));
  const wb = new Set(n(b.title).split(/[^a-z0-9]+/).filter(w => w.length > 2));
  let overlap = 0;
  wa.forEach(w => { if (wb.has(w)) overlap++; });
  score += Math.min(overlap * 2, 10);
  return score;
}

function fillRelGrid(sectionId, items) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  const grid = section.querySelector('.rel-grid');
  if (!grid) return;
  if (!items.length) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');
  grid.innerHTML = '';
  const frag = document.createDocumentFragment();
  items.slice(0, 10).forEach(item => {
    const wrap = document.createElement('div');
    wrap.className = 'shrink-0 w-[260px] sm:w-[320px] snap-start';
    const card = renderCard(item);
    card.style.width = '100%';
    wrap.appendChild(card);
    frag.appendChild(wrap);
  });
  grid.appendChild(frag);
  if (window.lucide) lucide.createIcons();
}

function loadRelatedSections(listing) {
  const poolAll = buildRelatedPool(listing);
  const scored = poolAll
    .map(c => ({ item: c, score: relScore(listing, c) }))
    .sort((x, y) => y.score - x.score || (y.item.rating || 0) - (x.item.rating || 0));
  const similar = scored.filter(s => s.score >= 35).map(s => s.item);
  const used = new Set(similar.map(s => s.property_id));
  const related = scored.filter(s => s.score >= 15 && s.score < 35 && !used.has(s.item.property_id)).map(s => s.item);
  const recommended = [...poolAll]
    .filter(l => !used.has(l.property_id))
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 10);
  const fallback = scored.filter(s => !used.has(s.item.property_id)).map(s => s.item);
  fillRelGrid('similar-section', similar.length ? similar : fallback.slice(0, 10));
  fillRelGrid('related-section', related.length ? related : fallback.slice(0, 10));
  fillRelGrid('recommended-section', recommended.length ? recommended : fallback.slice(0, 10));
}

function render(listing) {
  const root = document.getElementById('details-content');
  const isProperty = listing.listing_type === 'property';
  const price = formatPrice(listing);
  const flag = flagEmoji(listing.country_code);
  const idLabel = listing.listing_type === 'product' ? 'Product ID' : isProperty ? 'Property ID' : 'Listing ID';

  const imgs2 = safeImages(listing.images);
  const galleryThumbs = imgs2.map((img, i) =>
    `<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${i === 0 ? 'active border-blue-500' : 'border-gray-200'} shrink-0" data-img="${escapeHtml(img)}">
      <img src="${escapeHtml(img)}" alt="View ${i + 1}" loading="lazy" class="w-20 h-16 object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
    </button>`
  ).join('');

  let locationBlock = '';
  if (isProperty) {
    const locItems = [
      { icon: 'globe', label: 'Country', value: `${flag} ${listing.country}` },
      { icon: 'map-pin', label: 'State / Province', value: listing.state },
      { icon: 'building', label: 'City', value: listing.city },
      { icon: 'navigation', label: 'Town / Local Area', value: listing.town },
    ].filter(item => item.value);
    locationBlock = `
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Location</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${locItems.map(item => `
            <div class="flex items-center gap-2.5 text-sm">
              <div class="p-2 bg-gray-100 rounded-lg"><i data-lucide="${item.icon}" class="w-4 h-4 text-blue-500"></i></div>
              <div><div class="text-gray-500 text-xs">${item.label}</div><div class="text-gray-800 font-medium">${item.value}</div></div>
            </div>
          `).join('')}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-200" style="height:280px"></div>
      </div>`;
  }

  let specsBlock = '';
  if (isProperty) {
    const specs = [
      { icon: 'bed-double', label: 'Bedrooms', value: listing.bedrooms },
      { icon: 'bath', label: 'Bathrooms', value: listing.bathrooms },
      { icon: 'building', label: 'Building Size', value: listing.building_size },
      { icon: 'ruler', label: 'Land Size', value: listing.land_size },
      { icon: 'car', label: 'Parking Spaces', value: listing.parking_spaces },
      { icon: 'home', label: 'Property Type', value: listing.property_type },
      { icon: 'sofa', label: 'Furnished', value: listing.furnished },
      { icon: 'calendar', label: 'Year Built', value: listing.year_built },
      { icon: 'tag', label: 'Status', value: listing.listing_status === 'rent' ? 'For Rent' : 'For Sale' },
    ].filter(s => s.value != null && s.value !== '');
    specsBlock = `
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Property Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${specs.map(s => `
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${s.icon}" class="w-3.5 h-3.5"></i>${s.label}</div>
              <div class="text-gray-800 font-medium text-sm">${escapeHtml(s.value)}</div>
            </div>
          `).join('')}
        </div>
      </div>`;
  } else if (listing.category === 'Motorhomes') {
    const specs = [
      { icon: 'factory', label: 'Brand', value: listing.brand },
      { icon: 'car', label: 'Model', value: listing.model },
      { icon: 'calendar', label: 'Year', value: listing.model_year },
      { icon: 'badge-check', label: 'Condition', value: listing.condition },
      { icon: 'gauge', label: 'Mileage', value: listing.mileage },
      { icon: 'cog', label: 'Transmission', value: listing.transmission },
      { icon: 'fuel', label: 'Fuel Type', value: listing.fuel_type },
      { icon: 'zap', label: 'Engine', value: listing.engine },
      { icon: 'bus', label: 'Type', value: listing.property_type },
      { icon: 'moon', label: 'Sleeping Capacity', value: listing.sleeping_capacity },
      { icon: 'users', label: 'Seating Capacity', value: listing.seating_capacity },
      { icon: 'shower-head', label: 'Bathroom', value: listing.bathroom },
      { icon: 'utensils', label: 'Kitchen', value: listing.kitchen },
      { icon: 'droplet', label: 'Water Tank', value: listing.water_tank },
    ].filter(s => s.value != null && s.value !== '');
    specsBlock = `
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Vehicle Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${specs.map(s => `
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${s.icon}" class="w-3.5 h-3.5"></i>${s.label}</div>
              <div class="text-gray-800 font-medium text-sm">${escapeHtml(s.value)}</div>
            </div>
          `).join('')}
        </div>
      </div>`;
  } else if (listing.listing_type === 'product') {
    const specs = [
      { icon: 'factory', label: 'Brand', value: listing.brand },
      { icon: 'tag', label: 'Subcategory', value: listing.subcategory },
      { icon: 'palette', label: 'Colour', value: listing.color },
      { icon: 'ruler', label: 'Size', value: listing.size },
      { icon: 'layers', label: 'Material', value: listing.material },
      { icon: 'badge-check', label: 'Condition', value: listing.condition || 'New' },
      { icon: 'shield-check', label: 'Warranty', value: listing.warranty },
      { icon: 'package-check', label: 'Availability', value: listing.availability_status },
    ].filter(s => s.value != null && s.value !== '');
    specsBlock = `
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Product Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${specs.map(s => `
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${s.icon}" class="w-3.5 h-3.5"></i>${s.label}</div>
              <div class="text-gray-800 font-medium text-sm">${escapeHtml(s.value)}</div>
            </div>
          `).join('')}
        </div>
      </div>`;
  } else if (listing.listing_type === 'pet') {
    const specs = [
      { icon: 'paw-print', label: 'Breed', value: listing.breed },
      { icon: 'calendar', label: 'Age', value: listing.age },
      { icon: 'users', label: 'Gender', value: listing.gender },
      { icon: 'palette', label: 'Colour', value: listing.color },
      { icon: 'scale', label: 'Weight', value: listing.size },
      { icon: 'globe', label: 'Origin', value: `${flagEmoji(listing.country_code)} ${listing.country}` },
      { icon: 'badge-check', label: 'Health', value: listing.condition },
    ].filter(s => s.value != null && s.value !== '');
    specsBlock = `
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Pet Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${specs.map(s => `
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${s.icon}" class="w-3.5 h-3.5"></i>${s.label}</div>
              <div class="text-gray-800 font-medium text-sm">${escapeHtml(s.value)}</div>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  const featuresBlock = listing.features?.length ? `
    <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Features & Amenities</h3>
      <div class="flex flex-wrap gap-2">
        ${listing.features.map(f => `<span class="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full border border-gray-300">${escapeHtml(f)}</span>`).join('')}
      </div>
    </div>` : '';

  const highlightsBlock = listing.highlights?.length ? `
    <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Highlights</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${listing.highlights.map(item => `<div class="flex items-start gap-2 text-sm text-gray-700"><i data-lucide="badge-check" class="w-4 h-4 text-blue-500 mt-0.5"></i><span>${escapeHtml(item)}</span></div>`).join('')}
      </div>
    </div>` : '';

  const ratingsBlock = `
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-amber-400 text-amber-600"></i>
        <span class="text-lg font-bold text-gray-900">${safeRating(listing.rating)}</span>
        <span class="text-gray-500 text-sm">(${listing.rating_count || 0} ratings)</span>
      </div>
    </div>`;

  root.innerHTML = `
    <div class="fade-in">
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <a href="/" class="hover:text-blue-500 transition">Home</a>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span>${listing.category}</span>
        <i data-lucide="chevron-right" class="w-3 h-3"></i>
        <span class="text-gray-700 truncate">${escapeHtml(listing.title)}</span>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">${escapeHtml(listing.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">${idLabel}: <span class="text-blue-500 font-mono font-bold">${escapeHtml(listing.property_id)}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${price}</div>
          <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">${listing.listing_status === 'rent' ? 'For Rent' : 'For Sale'}</span>
        </div>
      </div>

      ${ratingsBlock}

      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 mb-3 hero-zoom">
        <img id="hero-image" src="${listing.images[0]}" alt="${listing.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${galleryThumbs}
      </div>

      ${actionGridHtml(listing)}

      <div id="listing-details" class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Description</h3>
        <p class="text-gray-600 text-sm leading-relaxed">${escapeHtml(listing.description || '')}</p>
      </div>

      ${locationBlock}
      ${specsBlock}
      ${featuresBlock}
      ${highlightsBlock}

      <div id="reviews-section" class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Customer Reviews</h3>
        <div id="reviews-list"><p class="text-gray-500 text-sm">Loading reviews...</p></div>
        <div id="review-form-wrapper" class="mt-4 pt-4 border-t border-gray-200">
          <h4 class="text-sm font-bold text-gray-900 mb-3">Write a Review</h4>
          <div id="review-login-msg" class="text-xs text-gray-500 hidden">Please <a href="/auth.html?redirect=${encodeURIComponent(window.location.pathname + window.location.search)}" class="text-blue-500 hover:underline">sign in</a> to write a review.</div>
          <form id="review-form" class="space-y-3">
            <div class="flex items-center gap-2">
              <label class="text-xs text-gray-600 font-bold uppercase">Rating</label>
              <div id="star-rating" class="flex gap-1">
                ${[1,2,3,4,5].map(i => `<button type="button" data-rating="${i}" class="star-btn p-1"><i data-lucide="star" class="w-5 h-5 text-gray-600 hover:text-blue-500 transition"></i></button>`).join('')}
              </div>
            </div>
            <textarea id="review-text" rows="3" placeholder="Share your experience with this product..." class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500"></textarea>
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-xl text-sm transition">Submit Review</button>
          </form>
        </div>
      </div>

      <div id="recommendations-section" class="hidden">
        <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">You May Also Like</h3>
        <div id="recommendations-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>

      ${relSectionsHtml()}
    </div>
  `;

  const hero = document.getElementById('hero-image');
  root.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active', 'border-blue-500'));
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.add('border-gray-200'));
      thumb.classList.add('active', 'border-blue-500');
      thumb.classList.remove('border-gray-200');
      hero.src = thumb.dataset.img;
    });
  });

  document.getElementById('buy-now-btn').addEventListener('click', async () => {
    const user = await getCurrentUser();
    if (user) {
      window.location.href = `/checkout.html?id=${listing.property_id}`;
    } else {
      setRedirectAfterAuth(`/checkout.html?id=${listing.property_id}`);
      window.location.href = `/auth.html?redirect=${encodeURIComponent('/checkout.html?id=' + listing.property_id)}`;
    }
  });

  document.getElementById('share-btn').addEventListener('click', async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: escapeHtml(listing.title), url });
      } else {
        await navigator.clipboard.writeText(url);
        const btn = document.getElementById('share-btn');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Copied!';
        if (window.lucide) lucide.createIcons();
        setTimeout(() => { btn.innerHTML = orig; if (window.lucide) lucide.createIcons(); }, 2000);
      }
    } catch (e) { /* user cancelled */ }
  });

  const viewDetailsBtn = document.getElementById('view-details-btn');
  if (viewDetailsBtn) {
    viewDetailsBtn.addEventListener('click', () => {
      const target = document.getElementById('listing-details');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  const addCartBtn = document.getElementById('add-cart-btn');
  if (addCartBtn) {
    addCartBtn.addEventListener('click', () => {
      let cart = JSON.parse(localStorage.getItem('kco_cart') || '[]');
      if (!cart.includes(listing.property_id)) {
        cart.push(listing.property_id);
        localStorage.setItem('kco_cart', JSON.stringify(cart));
      }
      addCartBtn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i> Added to Cart';
      if (window.lucide) lucide.createIcons();
      setTimeout(() => {
        addCartBtn.innerHTML = '<i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart';
        if (window.lucide) lucide.createIcons();
      }, 2000);
    });
  }

  setupWishlistButton(listing);
  setupReviewForm(listing);
  loadReviews(listing);
  loadRecommendations(listing);

  if (window.lucide) lucide.createIcons();

  trackEvent('view_item', { item_id: listing.property_id, item_name: listing.title, value: parseFloat(listing.price) || 0, currency: listing.currency || 'USD' });

  const mapEl = document.getElementById('listing-map');
  if (mapEl && window.L) {
    const lat = parseFloat(listing.latitude) || null;
    const lng = parseFloat(listing.longitude) || null;
    const query = [listing.town, listing.city, listing.state, listing.country].filter(Boolean).join(', ');
    if (lat && lng) {
      const map = L.map(mapEl).setView([lat, lng], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
      L.marker([lat, lng]).addTo(map).bindPopup(listing.title);
    } else if (query) {
      fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + encodeURIComponent(query))
        .then(r => r.json())
        .then(data => {
          if (data && data[0]) {
            const ml = parseFloat(data[0].lat);
            const mln = parseFloat(data[0].lon);
            const map = L.map(mapEl).setView([ml, mln], 12);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
            L.marker([ml, mln]).addTo(map).bindPopup(listing.title);
          } else {
            mapEl.style.display = 'none';
          }
        })
        .catch(() => { mapEl.style.display = 'none'; });
    } else {
      mapEl.style.display = 'none';
    }
  }
}

let selectedRating = 0;

// Heart pop animation (smooth, app-like toggle feedback)
let _wishPopStyleInjected = false;
function ensureWishPopStyle() {
  if (_wishPopStyleInjected) return;
  _wishPopStyleInjected = true;
  const s = document.createElement('style');
  s.textContent = '@keyframes kcoWishPop{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.86)}100%{transform:scale(1)}}';
  document.head.appendChild(s);
}
function setWishlistBtn(btn, saved) {
  if (!btn) return;
  ensureWishPopStyle();
  btn.innerHTML = `<i data-lucide="heart" class="w-5 h-5 ${saved ? 'fill-red-500 text-red-500' : ''}"></i>`;
  btn.classList.toggle('bg-red-50', saved);
  btn.classList.toggle('border', saved);
  btn.classList.toggle('border-red-200', saved);
  const sub = btn.querySelector('span');
  if (sub) sub.textContent = saved ? 'Saved to Wishlist' : 'Add to Wishlist';
  if (window.lucide) lucide.createIcons();
  const icon = btn.querySelector('i');
  if (icon) {
    icon.style.animation = 'none';
    void icon.offsetWidth;
    icon.style.animation = 'kcoWishPop .5s cubic-bezier(.34,1.56,.64,1)';
    setTimeout(() => { if (icon) icon.style.animation = ''; }, 550);
  }
}

async function setupWishlistButton(listing) {
  const btn = document.getElementById('wishlist-btn');
  if (!btn) return;
  const user = await getCurrentUser();
  if (!user) {
    btn.addEventListener('click', () => {
      setRedirectAfterAuth(window.location.pathname + window.location.search);
      window.location.href = `/auth.html?redirect=${encodeURIComponent(window.location.pathname + window.location.search)}`;
    });
    return;
  }
  const { data: existing, error: wishErr } = await supabase
    .from('wishlist')
    .select('id')
    .eq('user_id', user.id)
    .eq('listing_id', listing.id)
    .maybeSingle();
  if (wishErr) { console.error('Wishlist check failed:', wishErr.message); return; }
  if (existing) setWishlistBtn(btn, true);
  btn.addEventListener('click', async () => {
    const { data: fav, error: favErr } = await supabase
      .from('wishlist')
      .select('id')
      .eq('user_id', user.id)
      .eq('listing_id', listing.id)
      .maybeSingle();
    if (favErr) { console.error('Wishlist toggle failed:', favErr.message); return; }
    if (fav) {
      const { error: delErr } = await supabase.from('wishlist').delete().eq('id', fav.id);
      if (delErr) { console.error('Wishlist delete failed:', delErr.message); return; }
      setWishlistBtn(btn, false);
    } else {
      const { error: insErr } = await supabase.from('wishlist').insert({ user_id: user.id, listing_id: listing.id });
      if (insErr) { console.error('Wishlist insert failed:', insErr.message); return; }
      setWishlistBtn(btn, true);
    }
  });
}

async function setupReviewForm(listing) {
  const form = document.getElementById('review-form');
  const loginMsg = document.getElementById('review-login-msg');
  const user = await getCurrentUser();
  if (!user) {
    form.classList.add('hidden');
    loginMsg.classList.remove('hidden');
    return;
  }
  document.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedRating = parseInt(btn.dataset.rating, 10);
      document.querySelectorAll('.star-btn').forEach((b, i) => {
        const icon = b.querySelector('i');
        if (i < selectedRating) {
          icon.classList.add('fill-blue-500','text-blue-500');
          icon.classList.remove('text-gray-600');
        } else {
          icon.classList.remove('fill-blue-500','text-blue-500');
          icon.classList.add('text-gray-600');
        }
      });
    });
  });
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = document.getElementById('review-text').value.trim();
    if (!selectedRating) { alert('Please select a rating.'); return; }
    if (!text) { alert('Please write a review.'); return; }
    const { error } = await supabase.from('product_reviews').insert({
      listing_id: listing.id,
      user_id: user.id,
      rating: selectedRating,
      review_text: text,
      is_approved: false,
    });
    if (error) { alert('Error: ' + error.message); return; }
    document.getElementById('review-text').value = '';
    selectedRating = 0;
    document.querySelectorAll('.star-btn').forEach(b => {
      const icon = b.querySelector('i');
      icon.classList.remove('fill-blue-500','text-blue-500');
      icon.classList.add('text-gray-600');
    });
    alert('Review submitted! It will appear after admin approval.');
    loadReviews(listing);
  });
}

async function loadReviews(listing) {
  const container = document.getElementById('reviews-list');
  if (!container || !listing.id) return;
  const { data: reviews, error } = await supabase
    .from('product_reviews')
    .select('*, profiles(full_name)')
    .eq('listing_id', listing.id)
    .eq('is_approved', true)
    .order('created_at', { ascending: false });
  if (error) { container.innerHTML = '<p class="text-gray-500 text-sm">Unable to load reviews.</p>'; return; }
  if (!reviews || reviews.length === 0) {
    container.innerHTML = '<p class="text-gray-500 text-sm">No reviews yet. Be the first to review this product!</p>';
    return;
  }
  container.innerHTML = reviews.map(r => `
    <div class="border-b border-gray-200 pb-3 mb-3 last:border-0">
      <div class="flex items-center gap-2 mb-1">
        <div class="flex gap-0.5">${[1,2,3,4,5].map(i => `<i data-lucide="star" class="w-3.5 h-3.5 ${i <= r.rating ? 'fill-amber-400 text-amber-600' : 'text-gray-600'}"></i>`).join('')}</div>
        <span class="text-xs text-gray-600 font-bold">${escapeHtml(r.profiles?.full_name || 'Anonymous')}</span>
        <span class="text-xs text-gray-600">${new Date(r.created_at).toLocaleDateString()}</span>
        ${r.is_verified_purchase ? '<span class="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Verified Purchase</span>' : ''}
      </div>
      <p class="text-sm text-gray-700">${escapeHtml(r.review_text || '')}</p>
      ${r.vendor_response ? `<div class="mt-2 bg-gray-100 rounded-lg p-2 text-xs text-gray-600"><strong class="text-gray-700">Seller response:</strong> ${escapeHtml(r.vendor_response)}</div>` : ''}
    </div>`).join('');
  if (window.lucide) lucide.createIcons();
}

async function loadRecommendations(listing) {
  const section = document.getElementById('recommendations-section');
  const grid = document.getElementById('recommendations-grid');
  if (!section || !grid || !listing.id) return;
  const { data: recs, error: recErr } = await supabase
    .from('product_recommendations')
    .select('recommended_listing_id, showroom_listings!product_recommendations_recommended_listing_id_fkey(property_id, title, price, currency, images, listing_type)')
    .eq('listing_id', listing.id)
    .order('score', { ascending: false })
    .limit(4);
  if (recErr) { console.error('Recommendations load failed:', recErr.message); section.classList.add('hidden'); return; }
  let items = (recs || []).map(r => r.showroom_listings).filter(Boolean);
  if (items.length < 4) {
    const { data: related } = await supabase
      .from('showroom_listings')
      .select('property_id, title, price, currency, images, listing_type')
      .eq('category', listing.category)
      .neq('id', listing.id)
      .eq('is_active', true)
      .order('rating', { ascending: false })
      .limit(4 - items.length);
    items = [...items, ...(related || [])];
  }
  if (items.length === 0) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');
  grid.innerHTML = items.map(p => {
    const img = (p.images && p.images[0]) || '/fallback.svg';
    const pprice = typeof p.price === 'number' ? p.price : parseFloat(p.price || 0);
    const cur = p.currency || 'USD';
    return `<a href="/details.html?id=${p.property_id}" class="block bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition group">
      <div class="aspect-square overflow-hidden bg-gray-100"><img src="${escapeHtml(img)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-gray-900 font-bold truncate">${escapeHtml(p.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${cur} ${pprice.toLocaleString()}</p></div>
    </a>`;
  }).join('');
}

function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

async function init() {
  const id = getListingId();
  if (!id) {
    document.getElementById('details-content').innerHTML = '<div class="text-center py-20 text-gray-500">Listing not found.</div>';
    return;
  }

  // Load the live database FIRST so admin edits (title, price, images,
  // publish state) always win over the built-in catalog on the details page.
  await loadDBListings();
  const live = findListingById(id);
  if (live) {
    cleanListing(live);
    document.title = `${live.title} | Weverse Online Shop`;
    render(live);
    try { loadRelatedSections(live); } catch {}
    return;
  }

  const truck = getTruckById(id);
  if (truck) {
    cleanListing(truck);
    document.title = `${truck.title} | Weverse Online Shop`;
    renderTruck(truck);
    return;
  }

  const motorhome = getMotorhomeById(id);
  if (motorhome) {
    cleanListing(motorhome);
    document.title = `${motorhome.title} | Weverse Online Shop`;
    renderMotorhome(motorhome);
    return;
  }

  const car = getCarById(id);
  if (car) {
    cleanListing(car);
    document.title = `${car.title} | Weverse Online Shop`;
    renderCar(car);
    return;
  }

  const phone = getPhoneById(id);
  if (phone) {
    cleanListing(phone);
    document.title = `${phone.title} | Weverse Online Shop`;
    render(phone);
    try { loadRelatedSections(phone); } catch {}
    return;
  }

  const product = findProductById(id);
  if (product) {
    cleanListing(product);
    document.title = `${product.title} | Weverse Online Shop`;
    render(product);
    try { loadRelatedSections(product); } catch {}
    return;
  }

  // Deterministic catalog listings (KCO-XX-NNNN) resolve instantly.
  const [{ generateListingById }, { loadHiddenCatalogIds }] = await Promise.all([
    import('./catalog.js'),
    import('./catalog-hidden-store.js'),
  ]);
  await loadHiddenCatalogIds();
  const listing = generateListingById(id);
  if (!listing) {
    document.getElementById('details-content').innerHTML = '<div class="text-center py-20 text-gray-500">Listing not found.</div>';
    return;
  }
  cleanListing(listing);
  document.title = `${listing.title} | Weverse Online Shop`;
  render(listing);
  try { loadRelatedSections(listing); } catch {}
}

init();
