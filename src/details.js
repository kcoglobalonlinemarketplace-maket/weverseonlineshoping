import { SHOWROOM_LISTINGS, formatPrice, flagEmoji, findListingById, loadDBListings, cleanListing } from './showroom-data.js';
import { getTruckById, formatTruckPrice, TRUCK_LISTINGS } from './truck-data.js';
import { getMotorhomeById, MOTORHOME_LISTINGS } from './motorhome-data.js';
import { getCarById, CAR_LISTINGS } from './car-data.js';
import { getPhoneById, PHONE_LISTINGS } from './phone-data.js';
import { PET_LISTINGS } from './pet-data.js';
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

function renderTruck(listing) {
  const root = document.getElementById('details-content');
  const price = formatTruckPrice(listing);

  const imgs = safeImages(listing.images);
  const galleryThumbs = imgs.map((img, i) =>
    `<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${i === 0 ? 'active border-blue-500' : 'border-gray-800'} shrink-0" data-img="${escapeHtml(img)}">
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
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features</h3>
      <div class="flex flex-wrap gap-2">
        ${listing.features.map(f => `<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${escapeHtml(f)}</span>`).join('')}
      </div>
    </div>` : '';

  const ratingsBlock = `
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-amber-400 text-amber-400"></i>
        <span class="text-lg font-bold text-white">${safeRating(listing.rating)}</span>
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
        <span class="text-gray-300 truncate">${listing.title}</span>
      </div>

      <!-- Title & ID -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${escapeHtml(listing.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${escapeHtml(listing.stock_number || '—')}</span> &middot; VIN: <span class="text-gray-400 font-mono">${escapeHtml(listing.vin || '—')}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${price}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${escapeHtml(listing.condition || 'Used')} &middot; For Sale</span>
        </div>
      </div>

      ${ratingsBlock}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
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
        <button id="wishlist-btn" class="px-5 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="w-5 h-5"></i>
        </button>
        <button id="share-btn" class="px-5 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Share">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Description -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-3">Description</h3>
        <p class="text-gray-400 text-sm leading-relaxed">${escapeHtml(listing.description || '')}</p>
      </div>

      <!-- Truck Information -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Truck Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          ${specs.map(s => `
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${s.icon}" class="w-3.5 h-3.5"></i>${s.label}</div>
              <div class="text-gray-200 font-medium text-sm">${escapeHtml(s.value)}</div>
            </div>
          `).join('')}
        </div>
      </div>

      ${featuresBlock}

      ${sellerBlock(listing)}

      <div id="similar-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Similar Products</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
      <div id="related-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Related Products</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
      <div id="recommended-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Recommended For You</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
    </div>
  `;

  const hero = document.getElementById('hero-image');
  const label = document.getElementById('gallery-label');
  root.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active', 'border-blue-500'));
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.add('border-gray-800'));
      thumb.classList.add('active', 'border-blue-500');
      thumb.classList.remove('border-gray-800');
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
    `<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${i === 0 ? 'active border-blue-500' : 'border-gray-800'} shrink-0" data-img="${escapeHtml(img)}">
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
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features</h3>
      <div class="flex flex-wrap gap-2">
        ${listing.features.map(f => `<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${escapeHtml(f)}</span>`).join('')}
      </div>
    </div>` : '';

  const ratingsBlock = `
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-amber-400 text-amber-400"></i>
        <span class="text-lg font-bold text-white">${safeRating(listing.rating)}</span>
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
        <span class="text-gray-300 truncate">${listing.title}</span>
      </div>

      <!-- Title & ID -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${escapeHtml(listing.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${escapeHtml(listing.stock_number || '—')}</span> &middot; VIN: <span class="text-gray-400 font-mono">${escapeHtml(listing.vin || '—')}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${price}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${escapeHtml(listing.condition || 'Used')} &middot; For Sale</span>
        </div>
      </div>

      ${ratingsBlock}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
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
        <button id="wishlist-btn" class="px-5 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="w-5 h-5"></i>
        </button>
        <button id="share-btn" class="px-5 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Share">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Description -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-3">Description</h3>
        <p class="text-gray-400 text-sm leading-relaxed">${escapeHtml(listing.description || '')}</p>
      </div>

      <!-- Motorhome Information -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Motorhome Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          ${specs.map(s => `
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${s.icon}" class="w-3.5 h-3.5"></i>${s.label}</div>
              <div class="text-gray-200 font-medium text-sm">${escapeHtml(s.value)}</div>
            </div>
          `).join('')}
        </div>
      </div>

      ${featuresBlock}

      ${sellerBlock(listing)}

      <div id="similar-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Similar Products</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
      <div id="related-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Related Products</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
      <div id="recommended-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Recommended For You</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
    </div>
  `;

  const hero = document.getElementById('hero-image');
  const label = document.getElementById('gallery-label');
  root.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active', 'border-blue-500'));
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.add('border-gray-800'));
      thumb.classList.add('active', 'border-blue-500');
      thumb.classList.remove('border-gray-800');
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

  loadRelatedSections(listing, MOTORHOME_LISTINGS);

  if (window.lucide) lucide.createIcons();
}

function renderCar(listing) {
  const root = document.getElementById('details-content');
  const price = formatPrice(listing);

  const imgs = safeImages(listing.images);
  const galleryThumbs = imgs.map((img, i) =>
    `<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${i === 0 ? 'active border-blue-500' : 'border-gray-800'} shrink-0" data-img="${escapeHtml(img)}">
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
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features</h3>
      <div class="flex flex-wrap gap-2">
        ${listing.features.map(f => `<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${escapeHtml(f)}</span>`).join('')}
      </div>
    </div>` : '';

  const ratingsBlock = `
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-amber-400 text-amber-400"></i>
        <span class="text-lg font-bold text-white">${safeRating(listing.rating)}</span>
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
        <span class="text-gray-300 truncate">${listing.title}</span>
      </div>

      <!-- Title & ID -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${escapeHtml(listing.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">Stock #: <span class="text-blue-500 font-mono font-bold">${escapeHtml(listing.stock_number || '—')}</span> &middot; VIN: <span class="text-gray-400 font-mono">${escapeHtml(listing.vin || '—')}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${price}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${escapeHtml(listing.condition || 'Used')} &middot; For Sale</span>
        </div>
      </div>

      ${ratingsBlock}

      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
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
        <button id="wishlist-btn" class="px-5 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Add to Wishlist">
          <i data-lucide="heart" class="w-5 h-5"></i>
        </button>
        <button id="share-btn" class="px-5 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2" aria-label="Share">
          <i data-lucide="share-2" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Description -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-3">Description</h3>
        <p class="text-gray-400 text-sm leading-relaxed">${escapeHtml(listing.description || '')}</p>
      </div>

      <!-- Car Information -->
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Car Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          ${specs.map(s => `
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${s.icon}" class="w-3.5 h-3.5"></i>${s.label}</div>
              <div class="text-gray-200 font-medium text-sm">${escapeHtml(s.value)}</div>
            </div>
          `).join('')}
        </div>
      </div>

      ${featuresBlock}

      ${sellerBlock(listing)}

      <div id="similar-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Similar Products</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
      <div id="related-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Related Products</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
      <div id="recommended-section" class="hidden mb-6">
        <h3 class="rel-title text-sm font-bold text-white uppercase tracking-wide mb-4">Recommended For You</h3>
        <div class="rel-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
    </div>
  `;

  const hero = document.getElementById('hero-image');
  const label = document.getElementById('gallery-label');
  root.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active', 'border-blue-500'));
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.add('border-gray-800'));
      thumb.classList.add('active', 'border-blue-500');
      thumb.classList.remove('border-gray-800');
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

  loadRelatedSections(listing, CAR_LISTINGS);

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
      <button type="button" id="view-details-btn" class="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="eye" class="w-5 h-5"></i> View Details
      </button>
      <button type="button" id="add-cart-btn" class="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="shopping-cart" class="w-5 h-5"></i> Add to Cart
      </button>
      <button type="button" id="buy-now-btn" class="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition text-sm uppercase tracking-wider">
        <i data-lucide="shopping-bag" class="w-5 h-5"></i> Buy Now
      </button>
      <a href="${contactHref}" class="flex items-center justify-center gap-2 bg-blue-600/10 border border-blue-500/30 hover:bg-blue-600/20 text-blue-300 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="badge-check" class="w-4 h-4"></i> Contact Us
        <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online</span>
      </a>
      <button type="button" id="wishlist-btn" class="flex items-center justify-center gap-2 bg-gray-800 hover:bg-red-500/20 hover:text-red-400 text-gray-300 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="heart" class="w-5 h-5"></i> Add to Wishlist
      </button>
      <button type="button" id="share-btn" class="flex items-center justify-center gap-2 bg-gray-800 hover:bg-blue-500/20 hover:text-blue-400 text-gray-300 font-bold py-3.5 rounded-xl transition text-sm">
        <i data-lucide="share-2" class="w-5 h-5"></i> ${shareLabel}
      </button>
    </div>
  `;
}

function sellerBlock(listing) {
  const isAgent = listing.listing_type === 'property';
  const base = `/contact.html?listing=${encodeURIComponent(listing.property_id || '')}`;
  return `
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="shrink-0 w-11 h-11 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-gray-800">
          <img src="/brand-logo.jpeg" alt="Weverse Online Shop" class="w-full h-full object-contain" onerror="this.onerror=null;this.style.display='none'">
        </div>
        <div>
          <p class="text-sm font-bold text-white">Weverse Online Shop</p>
          <p class="text-xs text-emerald-400 flex items-center gap-1"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Verified Seller</p>
        </div>
      </div>
      <p class="text-xs text-gray-500">${isAgent ? 'Professional agent for this listing' : 'Trusted marketplace seller'} on Weverse Online Shop</p>
      <p class="text-xs text-gray-400 mt-2 flex items-center gap-1"><i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i> Secure checkout · Authentic listings</p>
      <div class="flex gap-2 mt-4">
        <a href="${base}" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 rounded-xl text-xs text-center transition">Contact Seller</a>
        <a href="${base}&subject=Enquiry" class="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold py-2.5 rounded-xl text-xs text-center transition">Send Message</a>
      </div>
    </div>`;
}

function relGridCard(item) {
  const img = (item.images && item.images[0]) || '/fallback.svg';
  return `<a href="/details.html?id=${encodeURIComponent(item.property_id)}" class="block bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/30 transition group">
      <div class="aspect-square overflow-hidden bg-gray-800"><img src="${escapeHtml(img)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-white font-bold truncate">${escapeHtml(item.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${formatPrice(item)}</p></div>
    </a>`;
}

function fillRelGrid(sectionId, items) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  const grid = section.querySelector('.rel-grid');
  if (!grid) return;
  if (!items.length) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');
  grid.innerHTML = items.slice(0, 4).map(relGridCard).join('');
}

function loadRelatedSections(listing, pool) {
  let poolAll;
  if (pool) {
    poolAll = pool.filter(t => t.property_id !== listing.property_id);
  } else if (listing.listing_type === 'pet') {
    poolAll = PET_LISTINGS.filter(t => t.property_id !== listing.property_id);
  } else {
    poolAll = TRUCK_LISTINGS.filter(t => t.property_id !== listing.property_id);
  }
  const similar = poolAll.filter(t => t.category === listing.category);
  const related = poolAll.filter(t => (t.breed && t.breed === listing.breed) || (t.brand && t.brand === listing.brand));
  const recommended = [...poolAll].sort((a, b) => (b.rating || 0) - (a.rating || 0));
  fillRelGrid('similar-section', similar.length ? similar : recommended.slice(0, 4));
  fillRelGrid('related-section', related.length ? related : recommended.slice(0, 4));
  fillRelGrid('recommended-section', recommended);
}

function render(listing) {
  const root = document.getElementById('details-content');
  const isProperty = listing.listing_type === 'property';
  const price = formatPrice(listing);
  const flag = flagEmoji(listing.country_code);
  const idLabel = listing.listing_type === 'product' ? 'Product ID' : isProperty ? 'Property ID' : 'Listing ID';

  const imgs2 = safeImages(listing.images);
  const galleryThumbs = imgs2.map((img, i) =>
    `<button class="gallery-thumb rounded-lg overflow-hidden border-2 ${i === 0 ? 'active border-blue-500' : 'border-gray-800'} shrink-0" data-img="${escapeHtml(img)}">
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
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Location</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${locItems.map(item => `
            <div class="flex items-center gap-2.5 text-sm">
              <div class="p-2 bg-gray-800 rounded-lg"><i data-lucide="${item.icon}" class="w-4 h-4 text-blue-500"></i></div>
              <div><div class="text-gray-500 text-xs">${item.label}</div><div class="text-gray-200 font-medium">${item.value}</div></div>
            </div>
          `).join('')}
        </div>
        <div id="listing-map" class="mt-4 rounded-xl overflow-hidden border border-gray-800" style="height:280px"></div>
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
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Property Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${specs.map(s => `
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${s.icon}" class="w-3.5 h-3.5"></i>${s.label}</div>
              <div class="text-gray-200 font-medium text-sm">${escapeHtml(s.value)}</div>
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
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Vehicle Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${specs.map(s => `
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${s.icon}" class="w-3.5 h-3.5"></i>${s.label}</div>
              <div class="text-gray-200 font-medium text-sm">${escapeHtml(s.value)}</div>
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
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Product Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${specs.map(s => `
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${s.icon}" class="w-3.5 h-3.5"></i>${s.label}</div>
              <div class="text-gray-200 font-medium text-sm">${escapeHtml(s.value)}</div>
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
      <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Pet Information</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${specs.map(s => `
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1.5 text-gray-500 text-xs"><i data-lucide="${s.icon}" class="w-3.5 h-3.5"></i>${s.label}</div>
              <div class="text-gray-200 font-medium text-sm">${escapeHtml(s.value)}</div>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  const featuresBlock = listing.features?.length ? `
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Features & Amenities</h3>
      <div class="flex flex-wrap gap-2">
        ${listing.features.map(f => `<span class="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700">${escapeHtml(f)}</span>`).join('')}
      </div>
    </div>` : '';

  const highlightsBlock = listing.highlights?.length ? `
    <div class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
      <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Highlights</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${listing.highlights.map(item => `<div class="flex items-start gap-2 text-sm text-gray-300"><i data-lucide="sparkles" class="w-4 h-4 text-blue-500 mt-0.5"></i><span>${escapeHtml(item)}</span></div>`).join('')}
      </div>
    </div>` : '';

  const ratingsBlock = `
    <div class="flex items-center gap-4 mb-6">
      <div class="flex items-center gap-1.5">
        <i data-lucide="star" class="w-5 h-5 fill-amber-400 text-amber-400"></i>
        <span class="text-lg font-bold text-white">${safeRating(listing.rating)}</span>
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
        <span class="text-gray-300 truncate">${escapeHtml(listing.title)}</span>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h1 class="text-2xl sm:text-3xl font-black text-white leading-tight">${escapeHtml(listing.title)}</h1>
          <p class="text-gray-500 text-sm mt-1">${idLabel}: <span class="text-blue-500 font-mono font-bold">${escapeHtml(listing.property_id)}</span></p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-3xl font-black text-blue-500">${price}</div>
          <span class="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mt-1">${listing.listing_status === 'rent' ? 'For Rent' : 'For Sale'}</span>
        </div>
      </div>

      ${ratingsBlock}

      <div class="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 mb-3 hero-zoom">
        <img id="hero-image" src="${listing.images[0]}" alt="${listing.title}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
      </div>

      <div class="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-8">
        ${galleryThumbs}
      </div>

      ${actionGridHtml(listing)}

      <div id="listing-details" class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-3">Description</h3>
        <p class="text-gray-400 text-sm leading-relaxed">${escapeHtml(listing.description || '')}</p>
      </div>

      ${locationBlock}
      ${specsBlock}
      ${featuresBlock}
      ${highlightsBlock}

      <div id="reviews-section" class="bg-[#0f172a]/60 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Customer Reviews</h3>
        <div id="reviews-list"><p class="text-gray-500 text-sm">Loading reviews...</p></div>
        <div id="review-form-wrapper" class="mt-4 pt-4 border-t border-gray-800">
          <h4 class="text-sm font-bold text-white mb-3">Write a Review</h4>
          <div id="review-login-msg" class="text-xs text-gray-500 hidden">Please <a href="/auth.html?redirect=${encodeURIComponent(window.location.pathname + window.location.search)}" class="text-blue-500 hover:underline">sign in</a> to write a review.</div>
          <form id="review-form" class="space-y-3">
            <div class="flex items-center gap-2">
              <label class="text-xs text-gray-400 font-bold uppercase">Rating</label>
              <div id="star-rating" class="flex gap-1">
                ${[1,2,3,4,5].map(i => `<button type="button" data-rating="${i}" class="star-btn p-1"><i data-lucide="star" class="w-5 h-5 text-gray-600 hover:text-blue-500 transition"></i></button>`).join('')}
              </div>
            </div>
            <textarea id="review-text" rows="3" placeholder="Share your experience with this product..." class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"></textarea>
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-xl text-sm transition">Submit Review</button>
          </form>
        </div>
      </div>

      <div id="recommendations-section" class="hidden">
        <h3 class="text-sm font-bold text-white uppercase tracking-wide mb-4">You May Also Like</h3>
        <div id="recommendations-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"></div>
      </div>
    </div>
  `;

  const hero = document.getElementById('hero-image');
  root.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active', 'border-blue-500'));
      root.querySelectorAll('.gallery-thumb').forEach(t => t.classList.add('border-gray-800'));
      thumb.classList.add('active', 'border-blue-500');
      thumb.classList.remove('border-gray-800');
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
  btn.classList.toggle('bg-red-500/10', saved);
  btn.classList.toggle('border', saved);
  btn.classList.toggle('border-red-500/20', saved);
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
    <div class="border-b border-gray-800 pb-3 mb-3 last:border-0">
      <div class="flex items-center gap-2 mb-1">
        <div class="flex gap-0.5">${[1,2,3,4,5].map(i => `<i data-lucide="star" class="w-3.5 h-3.5 ${i <= r.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-600'}"></i>`).join('')}</div>
        <span class="text-xs text-gray-400 font-bold">${escapeHtml(r.profiles?.full_name || 'Anonymous')}</span>
        <span class="text-xs text-gray-600">${new Date(r.created_at).toLocaleDateString()}</span>
        ${r.is_verified_purchase ? '<span class="text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">Verified Purchase</span>' : ''}
      </div>
      <p class="text-sm text-gray-300">${escapeHtml(r.review_text || '')}</p>
      ${r.vendor_response ? `<div class="mt-2 bg-gray-800/50 rounded-lg p-2 text-xs text-gray-400"><strong class="text-gray-300">Seller response:</strong> ${escapeHtml(r.vendor_response)}</div>` : ''}
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
    return `<a href="/details.html?id=${p.property_id}" class="block bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/30 transition group">
      <div class="aspect-square overflow-hidden bg-gray-800"><img src="${escapeHtml(img)}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" onerror="this.src='/fallback.svg'"></div>
      <div class="p-2"><p class="text-xs text-white font-bold truncate">${escapeHtml(p.title)}</p><p class="text-xs text-blue-500 font-bold mt-1">${cur} ${pprice.toLocaleString()}</p></div>
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
    return;
  }

  let listing = SHOWROOM_LISTINGS.find(l => l.property_id === id);
  if (!listing) {
    // Deterministic catalog listings (KCO-XX-NNNN) resolve instantly.
    const [{ generateListingById }, { loadHiddenCatalogIds }] = await Promise.all([
      import('./catalog.js'),
      import('./catalog-hidden-store.js'),
    ]);
    await loadHiddenCatalogIds();
    listing = generateListingById(id);
  }
  if (!listing) {
    // Try loading from the database (AI-created products)
    await loadDBListings();
    listing = findListingById(id);
  }
  if (!listing) {
    document.getElementById('details-content').innerHTML = '<div class="text-center py-20 text-gray-500">Listing not found.</div>';
    return;
  }
  cleanListing(listing);
  document.title = `${listing.title} | Weverse Online Shop`;
  render(listing);
}

init();
