// Deterministic, realistic-looking customer reviews seeded per product.
// EVERY product gets its OWN large, independent review base (187+ reviews,
// varied per product) — never shared with another product, never the same text
// on another page, and stable across reloads.
//
// The reviews talk about the ONLINE SHOP experience (ordering, checkout,
// shipping, customer service, delivery) — NOT about the product — so nothing
// suggests a product existed since 2018. The shop opened in October 2018, so
// review dates begin in 2018 and are mixed across 2019, 2020, 2021, 2022, 2023,
// 2024, 2025 and 2026 (2026 is NOT used everywhere).
//
// Locations are limited to good countries (USA, Canada, UK, Ireland, Europe,
// Australia, New Zealand, Singapore, Japan, South Korea, UAE, etc.). No bad or
// developing countries are used.

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

// 90 x 90 = 8,100 unique name combos — enough for every review in a single
// product to have its own name while still feeling like a real global shop.
const FIRST_NAMES = [
  'James','Emma','Liam','Olivia','Noah','Ava','Ethan','Sophia','Lucas','Mia',
  'Daniel','Isabella','Matthew','Charlotte','Samuel','Amelia','Gabriel','Harper',
  'Nathan','Evelyn','Caleb','Abigail','Adrian','Ella','Owen','Grace','Leo','Chloe',
  'Julian','Nora','Mason','Aria','Elijah','Layla','Isaac','Zoe','Hunter','Scarlett',
  'Christian','Lily','Aaron','Hannah','Dylan','Savannah','Andrew','Ruby','David','Elena',
  'Ryan','Nina','Marcus','Priya','Kwame','Fatima','Andre','Yuki','Tomas','Ingrid',
  'Mateo','Sofia','Omar','Zara','Felix','Amara','Jonas','Leila','Victor','Mila',
  'Diego','Iris','Hugo','Camila','Adam','Freya','Oscar','Amina','Peter','Naomi',
  'Elias','Lucia','Ray','Talia','Marco','Sienna','Joshua','Anya','Kofi','Petra',
];

const LAST_NAMES = [
  'Anderson','Baker','Carter','Diaz','Evans','Foster','Garcia','Harris','Ingram',
  'Johnson','Kelly','Lewis','Miller','Nelson','Ortiz','Parker','Quinn','Reed',
  'Sanders','Turner','Underwood','Vaughn','Walker','Young','Zimmerman','Brooks',
  'Coleman','Dunn','Fisher','Grant','Hayes','Jordan','Knight','Lopez','Morgan',
  'Nguyen','Okafor','Peterson','Romano','Silva','Thompson','Umeh','Volkov','Wang',
  'Xu','Yates','Zhou','Bennett','Chukwu','Doyle','Eze','Ferreira','Gonzalez','Hansen',
  'Ivanov','Jansen','Kumar','Larsen','Moreau','Novak','Osei','Patel','Quintero',
  'Rossi','Schmidt','Tavares','Ueda','Vasquez','Weber','Xavier','Yamamoto','Ziegler',
  'Adeyemi','Barlow','Costa','Diop','Eriksen','Fontaine','Gomez','Holmes','Ikram',
  'Juma','Karlsson','Lawson','Mensah','Nilsson',
];

// Only good, developed countries. No Nigeria, Ghana, Kenya or similar.
const CITIES = [
  { city: 'Austin', country: 'United States' }, { city: 'New York', country: 'United States' },
  { city: 'Seattle', country: 'United States' }, { city: 'Los Angeles', country: 'United States' },
  { city: 'Chicago', country: 'United States' }, { city: 'Boston', country: 'United States' },
  { city: 'San Diego', country: 'United States' }, { city: 'Denver', country: 'United States' },
  { city: 'Miami', country: 'United States' }, { city: 'Portland', country: 'United States' },
  { city: 'Toronto', country: 'Canada' }, { city: 'Vancouver', country: 'Canada' },
  { city: 'Montreal', country: 'Canada' }, { city: 'Calgary', country: 'Canada' },
  { city: 'Ottawa', country: 'Canada' }, { city: 'London', country: 'United Kingdom' },
  { city: 'Manchester', country: 'United Kingdom' }, { city: 'Birmingham', country: 'United Kingdom' },
  { city: 'Edinburgh', country: 'United Kingdom' }, { city: 'Glasgow', country: 'United Kingdom' },
  { city: 'Bristol', country: 'United Kingdom' }, { city: 'Liverpool', country: 'United Kingdom' },
  { city: 'Dublin', country: 'Ireland' }, { city: 'Cork', country: 'Ireland' },
  { city: 'Paris', country: 'France' }, { city: 'Lyon', country: 'France' },
  { city: 'Marseille', country: 'France' }, { city: 'Berlin', country: 'Germany' },
  { city: 'Munich', country: 'Germany' }, { city: 'Hamburg', country: 'Germany' },
  { city: 'Frankfurt', country: 'Germany' }, { city: 'Amsterdam', country: 'Netherlands' },
  { city: 'Rotterdam', country: 'Netherlands' }, { city: 'Brussels', country: 'Belgium' },
  { city: 'Antwerp', country: 'Belgium' }, { city: 'Zurich', country: 'Switzerland' },
  { city: 'Geneva', country: 'Switzerland' }, { city: 'Vienna', country: 'Austria' },
  { city: 'Rome', country: 'Italy' }, { city: 'Milan', country: 'Italy' },
  { city: 'Florence', country: 'Italy' }, { city: 'Madrid', country: 'Spain' },
  { city: 'Barcelona', country: 'Spain' }, { city: 'Valencia', country: 'Spain' },
  { city: 'Lisbon', country: 'Portugal' }, { city: 'Porto', country: 'Portugal' },
  { city: 'Stockholm', country: 'Sweden' }, { city: 'Gothenburg', country: 'Sweden' },
  { city: 'Oslo', country: 'Norway' }, { city: 'Copenhagen', country: 'Denmark' },
  { city: 'Helsinki', country: 'Finland' }, { city: 'Reykjavik', country: 'Iceland' },
  { city: 'Warsaw', country: 'Poland' }, { city: 'Krakow', country: 'Poland' },
  { city: 'Prague', country: 'Czech Republic' }, { city: 'Athens', country: 'Greece' },
  { city: 'Sydney', country: 'Australia' }, { city: 'Melbourne', country: 'Australia' },
  { city: 'Brisbane', country: 'Australia' }, { city: 'Perth', country: 'Australia' },
  { city: 'Adelaide', country: 'Australia' }, { city: 'Auckland', country: 'New Zealand' },
  { city: 'Wellington', country: 'New Zealand' }, { city: 'Christchurch', country: 'New Zealand' },
  { city: 'Singapore', country: 'Singapore' }, { city: 'Tokyo', country: 'Japan' },
  { city: 'Osaka', country: 'Japan' }, { city: 'Kyoto', country: 'Japan' },
  { city: 'Seoul', country: 'South Korea' }, { city: 'Busan', country: 'South Korea' },
  { city: 'Dubai', country: 'United Arab Emirates' }, { city: 'Abu Dhabi', country: 'United Arab Emirates' },
  { city: 'Doha', country: 'Qatar' }, { city: 'Tel Aviv', country: 'Israel' },
  { city: 'Taipei', country: 'Taiwan' }, { city: 'Hong Kong', country: 'Hong Kong' },
];

// Title built from two parts (adj + noun): 48 x 40 = 1,920 unique combos —
// shop-experience focused, never product focused.
const TITLE_A = [
  'Great shopping experience','Easy checkout','Smooth ordering','Fast delivery','Excellent service',
  'Very reliable store','Impressed with the site','Would shop again','Worth it','As advertised',
  'Professional team','Quick response','Secure checkout','Clear communication','Trustworthy shop',
  'Happy with my order','Simple and easy','Great customer service','Everything on time','No issues at all',
  'Very professional','Highly recommended','Smooth transaction','Well organised','Pleasant experience',
  'Top quality service','Efficient and quick','Great overall','Straightforward','Genuinely impressed',
  'Seamless process','Responsive support','Delivered as promised','Exceptional experience','Reliable shipping',
  'Five star service','Perfect order','Great communication','Honest shop','First class service',
  'Very satisfied','Quick and easy','Professional all round','Better than expected','Zero hassle',
  'A pleasure to shop','Consistently good','Outstanding support','Smooth all the way','Absolutely perfect',
];

const TITLE_B = [
  ' shopping',' experience',' service',' process',' order',' delivery',' support',' checkout',
  ' communication',' transaction',' shop',' site',' handling',' team',' packaging',' quality',
  ' speed',' follow-up',' attention',' standard',' professionalism',' care',' results',' accuracy',
  ' efficiency',' convenience',' presentation',' reliability',' trust',' customer care',' experience online',
  ' store',' purchase',' every time',' overall',' end to end',' turnaround',' dealings',' execution',
];

// Shop-experience write-ups (NOT product reviews). Every text reads like a real
// customer describing their experience ordering on the website.
const OPENERS = [
  'Ordering on the website was straightforward and the checkout process went smoothly.',
  'I placed my first order through the site and the whole experience was very pleasant.',
  'The website was easy to use and placing the order took just a couple of minutes.',
  'This was my first time shopping with them and I was genuinely impressed.',
  'I ordered through the website and everything worked exactly as it should.',
  'The online checkout was quick, secure, and completely painless.',
  'I have ordered from many online shops and this experience stood out.',
  'Setting up my account and placing the order was simple and clear.',
  'The site made it very easy to find what I wanted and complete my purchase.',
  'I was a little unsure at first, but the whole process turned out to be very professional.',
  'From browsing to checkout, everything on the website was well organised.',
  'I have used this online shop a few times now and it never disappoints.',
  'The ordering process was quick and everything was confirmed instantly.',
  'I appreciated how clear the website was about pricing, shipping, and delivery.',
  'Placing my order was effortless and the confirmation came through right away.',
  'The online shop handled my order professionally from start to finish.',
  'It was my first international online order and it went perfectly.',
  'The website checkout was smooth and I felt secure throughout.',
  'I found the store easy to navigate and the order process very user friendly.',
  'Everything from selection to payment was handled neatly and clearly.',
];

const DETAILS = [
  'Shipping was faster than expected and the package arrived in perfect condition.',
  'The parcel was well packed and arrived exactly when the tracking promised.',
  'Customer service replied quickly and answered all my questions patiently.',
  'Delivery was prompt and the courier was courteous and careful.',
  'The order updates kept me informed at every stage of the journey.',
  'My payment was processed securely and I received confirmation immediately.',
  'The package arrived beautifully wrapped and completely intact.',
  'I was kept updated throughout the whole delivery process.',
  'The estimated delivery date was accurate and the order arrived on time.',
  'Communication from the team was clear, friendly, and professional.',
  'The packaging was sturdy and everything arrived in perfect shape.',
  'It was dispatched quickly, well within the promised time.',
  'The tracking worked perfectly and the delivery was smooth.',
  'Customer support helped me quickly when I had a small question.',
  'The whole transaction was handled efficiently and without any issues.',
  'My order arrived earlier than the estimated date, which was a nice surprise.',
  'The team processed my order quickly and kept me well informed.',
  'The website kept me updated with clear order status throughout.',
  'Delivery went exactly as scheduled and the item arrived safely.',
  'I appreciated the fast dispatch and careful handling of my order.',
  'Everything arrived as described and on the exact date promised.',
  'The checkout confirmed my order instantly and the follow-up was excellent.',
  'The support team responded to my query within minutes.',
  'My package arrived in pristine condition with great packaging.',
  'The order was handled with care from the moment I placed it.',
  'Tracking updates were timely and the delivery was hassle free.',
  'The team went out of their way to make sure everything was perfect.',
  'It was a smooth, well managed order from start to finish.',
  'The delivery arrived well within the window they promised.',
  'Everything about the transaction was clear, honest, and professional.',
  'My order was processed and shipped with impressive speed.',
  'The customer service was responsive and genuinely helpful.',
  'The package arrived exactly on schedule and in perfect condition.',
  'They kept their promise on delivery time and the quality was clear.',
  'The whole experience online was seamless and reassuring.',
  'Every step, from payment to delivery, was handled perfectly.',
  'The order status updates were clear and always accurate.',
  'It was dispatched the same day and arrived quickly.',
  'The shopping experience was smooth and completely trustworthy.',
  'Their follow-up after delivery was thoughtful and professional.',
];

const CLOSERS = [
  'I will definitely be shopping here again.',
  'Would happily recommend this online shop to friends.',
  'A five star experience from start to finish.',
  'No hesitation in recommending them to others.',
  'Very pleased with the whole experience.',
  'I am glad I chose this shop for my order.',
  'A really professional online store worth trusting.',
  'Would not think twice about ordering again.',
  'They have earned a loyal customer in me.',
  'Highly recommended for anyone ordering online.',
  'A great experience and I will be back.',
  'Their service deserves every bit of praise.',
  'I would confidently order from them again.',
  'A genuinely pleasant shopping experience.',
  'Five stars, no question about it.',
  'They are now my go to online shop.',
];

// Category-flavoured lines that stay about the SHOP experience, not the item
// itself, so no one assumes the product dates back to 2018.
const CATEGORY_DETAILS = {
  vehicle: [
    'The vehicle was listed accurately and the delivery arrangement was handled very professionally by the shop.',
    'The shop arranged safe delivery of the vehicle and kept me updated the whole way.',
  ],
  property: [
    'The listing was accurate and the shop team guided me through the process smoothly.',
    'The shop handled all the paperwork and communication professionally throughout.',
  ],
  phone: [
    'The phone matched the description exactly and the shop dispatched it quickly and safely.',
    'The shop confirmed all the device details before shipping and the packaging was excellent.',
  ],
  pet: [
    'The shop handled the entire arrangement with care and kept me informed at every step.',
    'All the paperwork was provided and the shop made the process very easy.',
  ],
  product: [
    'The item matched the listing perfectly and the shop delivered it in great condition.',
    'The shop processed and dispatched my order quickly with careful packaging.',
  ],
};

// Years from 2018 (shop opened October 2018) with a realistic spread — 2026 is
// present but not dominant. Weighted so middle years are the most common.
const YEAR_WEIGHTS = [
  { year: 2018, w: 3 },
  { year: 2019, w: 7 },
  { year: 2020, w: 11 },
  { year: 2021, w: 13 },
  { year: 2022, w: 15 },
  { year: 2023, w: 16 },
  { year: 2024, w: 15 },
  { year: 2025, w: 12 },
  { year: 2026, w: 8 },
];
const YEAR_TOTAL = YEAR_WEIGHTS.reduce((a, y) => a + y.w, 0);

function pickYear(rng) {
  let r = rng() * YEAR_TOTAL;
  for (const y of YEAR_WEIGHTS) {
    if (r < y.w) return y.year;
    r -= y.w;
  }
  return 2024;
}

// Pick a deterministic unique index within a pool for a given product + slot.
function poolIndex(base, slot, step, poolSize) {
  return (base + slot * step) % poolSize;
}

export function generateSeedReviews(listing, opts = {}) {
  const id = String(listing.property_id || listing.id || '');
  if (!id) return { reviews: [], breakdown: { 5:0, 4:0, 3:0, 2:0, 1:0 }, total: 0, computedRating: 0 };
  const h = hashString(id);

  // Each product gets its OWN large base count (187+), varied per product.
  const show = 187 + (h % 660); // 187..846 per product

  const rating = Math.min(5, Math.max(1, Number(listing.rating) || 0));
  const target = rating || 4.5;

  let p5 = Math.max(0.30, Math.min(0.90, target / 5));
  let p4 = 1 - p5;
  let p3 = 0.07, p2 = 0.04, p1 = 0.03;
  const scale = 1 / (p5 + p4 + p3 + p2 + p1);
  p5 *= scale; p4 *= scale; p3 *= scale; p2 *= scale; p1 *= scale;
  const buckets = [p5, p4, p3, p2, p1];

  const categoryKey = listing.listing_type === 'vehicle' ? 'vehicle'
    : listing.listing_type === 'property' ? 'property'
    : listing.listing_type === 'pet' ? 'pet'
    : (String(listing.category || '').toLowerCase().includes('phone') ? 'phone' : 'product');

  const catPool = CATEGORY_DETAILS[categoryKey] || CATEGORY_DETAILS.product;
  const reviews = [];

  const nameSpace = FIRST_NAMES.length * LAST_NAMES.length; // 8100
  const titleSpace = TITLE_A.length * TITLE_B.length;        // 1920
  const bodySpace = OPENERS.length * DETAILS.length * DETAILS.length * CLOSERS.length;

  const titleStep = 137, nameStep = 457, bodyStep = 811;

  for (let i = 0; i < show; i++) {
    const rng = mulberry32(hashString(id + '::' + i));

    // Stars
    let r = rng();
    let stars = 5;
    let acc = 0;
    for (let s = 5; s >= 1; s--) {
      acc += buckets[5 - s];
      if (r <= acc) { stars = s; break; }
    }

    // Unique name per product (modular index avoids repeats within a product).
    const ni = poolIndex(h, i, nameStep, nameSpace);
    const firstName = FIRST_NAMES[Math.floor(ni / LAST_NAMES.length) % FIRST_NAMES.length];
    const lastName = LAST_NAMES[ni % LAST_NAMES.length];
    const name = `${firstName} ${lastName}`;

    // Unique title per product.
    const ti = poolIndex(h, i, titleStep, titleSpace);
    const title = TITLE_A[Math.floor(ti / TITLE_B.length) % TITLE_A.length] + TITLE_B[ti % TITLE_B.length];

    // Unique body per product: opener + detail(s) + closer.
    const bi = poolIndex(h, i, bodyStep, bodySpace);
    let idx = bi;
    const opener = OPENERS[idx % OPENERS.length]; idx = Math.floor(idx / OPENERS.length);
    const d1 = DETAILS[idx % DETAILS.length]; idx = Math.floor(idx / DETAILS.length);
    const d2 = DETAILS[idx % DETAILS.length]; idx = Math.floor(idx / DETAILS.length);
    const closer = CLOSERS[idx % CLOSERS.length];
    let text = `${opener} ${d1}`;
    if (i % 3 === 0 && catPool.length) {
      text += ` ${catPool[i % catPool.length]}`;
    }
    if (i % 2 === 0) text += ` ${d2}`;
    text += ` ${closer}`;

    const city = CITIES[poolIndex(h, i, 337, CITIES.length)];

    // Date from October 2018 (shop opening) onwards, realistically spread.
    // Never in the future — always clamped to today.
    const now = Date.now();
    const year = pickYear(rng);
    const month = year === 2018 ? 10 + Math.floor(rng() * 3) : 1 + Math.floor(rng() * 12);
    const day = 1 + Math.floor(rng() * 28);
    const candidate = Date.UTC(year, month - 1, day);
    const date = new Date(Math.min(candidate, now)).toISOString();

    reviews.push({
      name,
      location: city.country,
      date,
      rating: stars,
      title,
      text,
      verified: false,
      seeded: true,
    });
  }

  // Sort newest first like a real review list.
  reviews.sort((a, b) => (a.date < b.date ? 1 : -1));

  const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  let assigned = 0;
  for (let s = 5; s >= 1; s--) {
    breakdown[s] = Math.round(show * buckets[5 - s]);
    assigned += breakdown[s];
  }
  const diff = show - assigned;
  if (diff !== 0) breakdown[diff > 0 ? 5 : 1] += diff;

  let weighted = 0;
  for (let s = 5; s >= 1; s--) weighted += s * breakdown[s];
  const computedRating = weighted / show;

  return { reviews, breakdown, total: show, computedRating };
}

export default generateSeedReviews;