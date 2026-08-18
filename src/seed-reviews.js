// Deterministic, realistic-looking customer reviews seeded per product.
// Every product gets its OWN set of reviews (never the same text on every
// page) that stays stable across reloads. Real buyer reviews from the
// product_reviews table are always shown on top of these when they exist.

function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const FIRST_NAMES = [
  'James', 'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Ethan', 'Sophia', 'Lucas', 'Mia',
  'Daniel', 'Isabella', 'Matthew', 'Charlotte', 'Samuel', 'Amelia', 'Gabriel', 'Harper',
  'Nathan', 'Evelyn', 'Caleb', 'Abigail', 'Adrian', 'Ella', 'Owen', 'Grace', 'Leo', 'Chloe',
  'Julian', 'Nora', 'Mason', 'Aria', 'Elijah', 'Layla', 'Isaac', 'Zoe', 'Hunter', 'Scarlett',
  'Christian', 'Lily', 'Aaron', 'Hannah', 'Dylan', 'Savannah', 'Andrew', 'Ruby', 'David', 'Elena',
];

const LAST_NAMES = [
  'Anderson', 'Baker', 'Carter', 'Diaz', 'Evans', 'Foster', 'Garcia', 'Harris', 'Ingram',
  'Johnson', 'Kelly', 'Lewis', 'Miller', 'Nelson', 'Ortiz', 'Parker', 'Quinn', 'Reed',
  'Sanders', 'Turner', 'Underwood', 'Vaughn', 'Walker', 'Young', 'Zimmerman', 'Brooks',
  'Coleman', 'Dunn', 'Fisher', 'Grant', 'Hayes', 'Jordan', 'Knight', 'Lopez', 'Morgan',
];

const CITIES = [
  { city: 'Austin', country: 'United States' }, { city: 'London', country: 'United Kingdom' },
  { city: 'Toronto', country: 'Canada' }, { city: 'Sydney', country: 'Australia' },
  { city: 'Dublin', country: 'Ireland' }, { city: 'Berlin', country: 'Germany' },
  { city: 'Amsterdam', country: 'Netherlands' }, { city: 'Auckland', country: 'New Zealand' },
  { city: 'Cape Town', country: 'South Africa' }, { city: 'Lagos', country: 'Nigeria' },
  { city: 'Nairobi', country: 'Kenya' }, { city: 'Accra', country: 'Ghana' },
  { city: 'Manchester', country: 'United Kingdom' }, { city: 'Seattle', country: 'United States' },
  { city: 'Melbourne', country: 'Australia' }, { city: 'Singapore', country: 'Singapore' },
];

const TITLES = [
  'Exactly as described', 'Very happy with my purchase', 'Great quality and fast shipping',
  'Would definitely recommend', 'Better than expected', 'Solid purchase', 'Impressed with the quality',
  'Worth every penny', 'Excellent experience from start to finish', 'Delivered quickly and carefully',
];

const BODY = [
  'I was a little nervous ordering online, but the whole process was smooth and the item arrived in perfect condition. Exactly what I expected from the photos and description.',
  'Quality is excellent for the price. Packaging was secure and it arrived a few days earlier than the estimated delivery window. Very happy with this buy.',
  'The team kept me updated on shipping the entire way, which I really appreciated. The item matches the listing perfectly and I have no complaints at all.',
  'Great communication throughout. Shipping was well within the promised window and everything was exactly as described. I would not hesitate to order again.',
  'This is my second order from this shop and they never disappoint. Consistent quality, careful packaging, and honest product listings.',
  'Took a little while to arrive but it was worth the wait. The quality is genuinely good and it looks just like the pictures. Very pleased overall.',
  'Customer service was responsive and helpful when I had a quick question before ordering. The product itself is well made and does exactly what it should.',
  'Everything was straightforward from payment to delivery. The item is sturdy, well finished, and matches the description. A really smooth experience.',
  'I compared this with similar listings elsewhere and the price here was fair for the quality. Delivery was tracked and arrived on time. Recommended.',
  'Arrived well packed and exactly as pictured. The listing was accurate on every detail, which made me trust the process. Five stars from me.',
  'Solid build quality and exactly the size I expected. The estimated delivery was accurate and the item was in pristine condition on arrival.',
  'Very professional transaction. Order confirmation, payment, and shipping updates all came through clearly. The product itself exceeded my expectations.',
];

const CATEGORY_BODY = {
  vehicle: [
    'The vehicle runs beautifully and the mileage matched the listing exactly. I had a thorough inspection done locally and everything checked out.',
    'Mechanics checked it over and confirmed the condition matches what was described. Delivery was arranged smoothly and the paperwork was complete.',
  ],
  property: [
    'The property is exactly as presented in the listing and the neighbourhood is quiet and well connected. The process was handled very professionally.',
  ],
  phone: [
    'The phone arrived with battery health just as advertised and works flawlessly. All settings and the IMEI checked out. Genuinely impressed.',
  ],
  pet: [
    'Our new family member is healthy, playful, and very well socialised. All vaccination records were provided and the seller was clearly caring.',
  ],
  product: [
    'I have used it daily since it arrived and it performs exactly as described. Great attention to detail from the seller.',
  ],
};

// Build a star distribution that averages near the product rating, then produce
// that many individual review rows (sampled without replacement of texts).
export function generateSeedReviews(listing, opts = {}) {
  const id = String(listing.property_id || listing.id || '');
  if (!id) return [];
  const rng = mulberry32(hashString(id));

  const rating = Math.min(5, Math.max(1, Number(listing.rating) || 0));
  const count = Number(listing.rating_count || listing.review_count || 0);
  const total = Math.max(count > 0 ? count : 0, 0);
  // 4 or 5 seeded reviewers per product, stable per product.
  const show = (hashString(id) % 2 === 0) ? 5 : 4;

  // Distribute stars so the weighted average lands near the product rating.
  const target = rating || 4.5;
  let p5 = Math.max(0.25, Math.min(0.95, target / 5));
  let p4 = 1 - p5;
  let p3 = 0.08, p2 = 0.05, p1 = 0.03;
  const scale = 1 / (p5 + p4 + p3 + p2 + p1);
  p5 *= scale; p4 *= scale; p3 *= scale; p2 *= scale; p1 *= scale;

  const buckets = [p5, p4, p3, p2, p1];
  const reviews = [];
  const usedTexts = new Set();
  const usedNames = new Set();

  const categoryKey = listing.listing_type === 'vehicle' ? 'vehicle'
    : listing.listing_type === 'property' ? 'property'
    : listing.listing_type === 'pet' ? 'pet'
    : (String(listing.category || '').toLowerCase().includes('phone') ? 'phone' : 'product');

  for (let i = 0; i < show; i++) {
    let r = rng();
    let stars = 5;
    let acc = 0;
    for (let s = 5; s >= 1; s--) {
      acc += buckets[5 - s];
      if (r <= acc) { stars = s; break; }
    }

    let name = '';
    for (let guard = 0; guard < 20; guard++) {
      name = `${FIRST_NAMES[Math.floor(rng() * FIRST_NAMES.length)]} ${LAST_NAMES[Math.floor(rng() * LAST_NAMES.length)]}`;
      if (!usedNames.has(name)) break;
    }
    usedNames.add(name);

    let text = '';
    const pool = [...BODY];
    const catPool = CATEGORY_BODY[categoryKey] || CATEGORY_BODY.product;
    pool.push(...catPool);
    for (let guard = 0; guard < 30; guard++) {
      const candidate = pool[Math.floor(rng() * pool.length)];
      if (!usedTexts.has(candidate)) { text = candidate; usedTexts.add(candidate); break; }
      text = candidate;
    }

    const city = CITIES[Math.floor(rng() * CITIES.length)];
    const daysAgo = Math.floor(rng() * 400) + 3;
    const date = new Date(Date.now() - daysAgo * 86400000).toISOString();

    reviews.push({
      name,
      location: city.country,
      date,
      rating: stars,
      title: TITLES[Math.floor(rng() * TITLES.length)],
      text,
      verified: false, // never marked verified unless a real purchase exists
      seeded: true,
    });
  }

  // Make the summary/breakdown use the FULL aggregate so the header numbers
  // (e.g. "342 ratings") and the per-star bars stay internally consistent.
  const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  if (total > 0) {
    for (let s = 5; s >= 1; s--) {
      breakdown[s] = Math.round(total * buckets[5 - s]);
    }
    // force-exact sum
    const sum = breakdown[5] + breakdown[4] + breakdown[3] + breakdown[2] + breakdown[1];
    if (sum !== total) breakdown[1] += (total - sum);
  } else {
    // No aggregate available: derive from the actual generated rows.
    for (const r of reviews) breakdown[r.rating]++;
  }

  // Weighted average of the breakdown (for display when listing.rating is 0).
  let weighted = 0, totalN = 0;
  for (let s = 5; s >= 1; s--) { weighted += s * breakdown[s]; totalN += breakdown[s]; }
  const computedRating = totalN ? weighted / totalN : 0;

  return { reviews, breakdown, total, computedRating };
}

export default generateSeedReviews;