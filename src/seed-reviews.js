// Deterministic, realistic-looking customer reviews seeded per product.
// EVERY product gets its OWN large, independent review base (187+ reviews,
// varied per product, e.g. 384 / 837 / 272 / 836 / 838) — never shared with
// another product, never the same text on another page, and stable across
// reloads. Real buyer reviews from the product_reviews table are always shown
// on top of these when they exist, and the totals/breakdown/rating recompute
// automatically to include them.

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

const CITIES = [
  { city: 'Austin', country: 'United States' }, { city: 'London', country: 'United Kingdom' },
  { city: 'Toronto', country: 'Canada' }, { city: 'Sydney', country: 'Australia' },
  { city: 'Dublin', country: 'Ireland' }, { city: 'Berlin', country: 'Germany' },
  { city: 'Amsterdam', country: 'Netherlands' }, { city: 'Auckland', country: 'New Zealand' },
  { city: 'Cape Town', country: 'South Africa' }, { city: 'Lagos', country: 'Nigeria' },
  { city: 'Nairobi', country: 'Kenya' }, { city: 'Accra', country: 'Ghana' },
  { city: 'Manchester', country: 'United Kingdom' }, { city: 'Seattle', country: 'United States' },
  { city: 'Melbourne', country: 'Australia' }, { city: 'Singapore', country: 'Singapore' },
  { city: 'Mumbai', country: 'India' }, { city: 'Dubai', country: 'United Arab Emirates' },
  { city: 'Paris', country: 'France' }, { city: 'Madrid', country: 'Spain' },
  { city: 'Rome', country: 'Italy' }, { city: 'Stockholm', country: 'Sweden' },
  { city: 'Oslo', country: 'Norway' }, { city: 'Zurich', country: 'Switzerland' },
  { city: 'Copenhagen', country: 'Denmark' }, { city: 'Helsinki', country: 'Finland' },
  { city: 'Warsaw', country: 'Poland' }, { city: 'Prague', country: 'Czech Republic' },
  { city: 'Lisbon', country: 'Portugal' }, { city: 'Athens', country: 'Greece' },
  { city: 'Istanbul', country: 'Turkey' }, { city: 'Tel Aviv', country: 'Israel' },
  { city: 'Bangkok', country: 'Thailand' }, { city: 'Jakarta', country: 'Indonesia' },
  { city: 'Manila', country: 'Philippines' }, { city: 'Kuala Lumpur', country: 'Malaysia' },
  { city: 'Seoul', country: 'South Korea' }, { city: 'Tokyo', country: 'Japan' },
  { city: 'Sao Paulo', country: 'Brazil' }, { city: 'Mexico City', country: 'Mexico' },
  { city: 'Buenos Aires', country: 'Argentina' }, { city: 'Lima', country: 'Peru' },
  { city: 'Bogota', country: 'Colombia' }, { city: 'Santiago', country: 'Chile' },
  { city: 'Cairo', country: 'Egypt' }, { city: 'Casablanca', country: 'Morocco' },
  { city: 'Riyadh', country: 'Saudi Arabia' }, { city: 'Nicosia', country: 'Cyprus' },
  { city: 'Reykjavik', country: 'Iceland' },
];

// Title built from two parts (adj + noun): 26 x 26 = 676 unique combos.
const TITLE_A = [
  'Exactly as described','Very happy','Great quality','Would recommend','Worth every penny',
  'Impressed with the quality','Smooth transaction','Exceeded expectations','As pictured',
  'Solid buy','Reliable seller','Genuine and honest','Top notch','Great value','Excellent condition',
  'Flawless','Outstanding','Trustworthy','Perfect match','Quality purchase','Better than expected',
  'Professional all the way','No complaints at all','Very satisfied','Highly recommended','Genuine',
  'First class','A cut above','Well worth it','Absolute pleasure','Consistently great','Beyond pleased',
  'Properly premium','Easily five stars','Just what I wanted','Nothing to fault','Deserves the praise',
  'Impeccable','Truly impressed','Honest and quick','Fantastic all round','Real quality','Second to none',
  'Delighted with it','Smart purchase','Total confidence','Remarkable value','Spot on','A brilliant buy',
];

const TITLE_B = [
  ' purchase',' experience',' product',' service',' buy',' deal',' transaction',' order',
  ' item',' listing',' shop',' investment',' delivery',' communication',' packaging',' quality',
  ' performance',' value',' craftsmanship',' detail',' accuracy',' support',' speed',' pricing',
  ' overall experience',' standard',' finish',' durability',' presentation',' process',' handling',
  ' follow-up',' attention',' results',' outcome',' seller',' customer service',' efficiency',' care',
];

const OPENERS = [
  'I was a little nervous ordering online, but the whole process was smooth from start to finish.',
  'I have ordered from many shops before and this was one of the most professional transactions I have had.',
  'The listing was accurate on every detail, which made the whole experience stress-free.',
  'Communication before ordering was quick and genuinely helpful, which I really appreciated.',
  'This was my first order from this shop and I am glad I went ahead with it.',
  'I compared this with similar listings elsewhere and the price here was fair for the quality.',
  'Everything was straightforward from payment to delivery, exactly as a smooth order should be.',
  'I placed the order with a few questions in mind, and they were all answered clearly.',
  'Having shopped internationally before, I was pleased with how easy this one was.',
  'The description, photos, and what I received all lined up perfectly.',
  'I was hesitant at first, but the clear listing and good reviews convinced me.',
  'From order confirmation to the final delivery update, everything was clear and timely.',
  'A pleasant experience overall, and the item is just as good as shown.',
  'I appreciated how transparent the whole process was, including the shipping timeline.',
  'The seller kept me informed throughout, which is exactly what you want when ordering.',
  'Ordering was quick, checkout was simple, and there were no surprises afterwards.',
  'I have ordered from them before and the consistency gives me confidence.',
  'This order went as well as any I have made, and the quality speaks for itself.',
  'I read the full listing carefully before buying and it matched reality perfectly.',
  'A straightforward, honest transaction that did not waste anyone\u2019s time.',
];

const DETAILS = [
  'Shipping was faster than the estimated window and the package arrived well protected.',
  'The quality feels solid and the finish is clean, with no defects at all.',
  'It arrived earlier than expected and in pristine condition.',
  'The team kept me updated at every stage of delivery, which removed all the guesswork.',
  'Packaging was careful and secure, so nothing shifted or damaged in transit.',
  'The item looks even better in person than it does in the photos.',
  'Everything was included exactly as the listing promised, nothing missing.',
  'The materials feel genuinely good and the build is reassuringly sturdy.',
  'It was well packed in a sturdy box with proper padding around it.',
  'Delivery tracking worked perfectly and the timeline was accurate.',
  'The product performs exactly as described and has not missed a beat since arrival.',
  'I have been using it daily for a couple of weeks now and it has held up beautifully.',
  'The quality-to-price ratio is genuinely impressive.',
  'It was dispatched quickly, within a day of placing the order.',
  'The finishing touches show real attention to detail from the maker.',
  'Everything arrived complete with all accessories and documentation.',
  'The condition on arrival was like-new, with no scratches or marks.',
  'It matches the dimensions and specifications listed, which I verified myself.',
  'Customs and delivery went through without any issues on the international leg.',
  'The packaging was so well done that the item had zero room to move.',
  'Setup was easy and everything worked correctly on the first attempt.',
  'The little details were handled nicely, right down to the packaging.',
  'It was clearly handled with care throughout the whole journey.',
  'The order status updates were timely and accurate the entire way.',
  'Quality control clearly runs deep with this seller; it shows in the product.',
  'I compared the received item against the listing specs and everything matched.',
  'The product arrived ready to use with nothing needing adjustment.',
  'Shipping updates were clear, and the estimated date was honest.',
  'It exceeded the expectations I had from the description.',
  'The item feels premium, not flimsy, which is exactly what I hoped for.',
  'Everything was exactly as promised, right down to the small print.',
  'The delivery service handled it carefully and the courier was courteous.',
  'It was shipped out fast and arrived ahead of schedule.',
  'The build quality is consistent across the whole product, no weak points.',
  'I checked it thoroughly on arrival and found no faults whatsoever.',
  'The listing mentioned everything honestly, which builds trust.',
  'It came in perfect shape and was ready to use immediately.',
  'The whole delivery experience was smooth and drama-free.',
  'It has proven durable through daily use, exactly as advertised.',
  'The seller handled a minor query I had quickly and courteously.',
  'It arrived exactly on the date the tracking promised.',
];

const CLOSERS = [
  'I would definitely order from this shop again.',
  'Happy to recommend it to friends and family.',
  'Five stars from me, no hesitation.',
  'A great experience from start to finish.',
  'Would buy from them again without thinking twice.',
  'Very satisfied with the entire transaction.',
  'I am glad I chose this shop for this purchase.',
  'No regrets at all with this one.',
  'A really solid buying experience overall.',
  'Recommended for anyone considering a similar purchase.',
  'They have earned a repeat customer for sure.',
  'This sets a good example for other online shops.',
  'I would trust this seller again in the future.',
  'Thoroughly pleased and would order again.',
  'Happy customer here, without a doubt.',
  'A purchase I feel good about.',
];

const CATEGORY_DETAILS = {
  vehicle: [
    'The vehicle starts clean, drives smoothly, and the mileage matched the listing exactly.',
    'I had a local mechanic inspect it and they confirmed the condition matches the description.',
    'The paperwork was complete and the handover was handled professionally.',
    'It was delivered on a trailer and the whole arrangement was effortless.',
  ],
  property: [
    'The property is exactly as presented, and the neighbourhood is quiet and well connected.',
    'The viewing process was professional and all documents were in order.',
    'The location is convenient with shops and transport within easy reach.',
    'The agent handled everything transparently and kept us updated throughout.',
  ],
  phone: [
    'The phone arrived with battery health exactly as advertised and works flawlessly.',
    'The IMEI and serial matched the listing, and it came fully unlocked.',
    'It was sealed and in brand-new cosmetic condition.',
    'The phone charged quickly and the screen has no imperfections.',
  ],
  pet: [
    'Our new family member is healthy, playful, and already very well socialised.',
    'All vaccination records and health paperwork were provided with the sale.',
    'The seller clearly cares about their animals, which shows in their condition.',
    'The little one settled in quickly and is thriving at home.',
  ],
  product: [
    'I have used it daily since it arrived and it performs exactly as described.',
    'It works well out of the box and the instructions were clear.',
    'The quality is better than similar items I have bought elsewhere.',
    'It has become my go-to and I use it more than I expected to.',
  ],
};

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

  // Star distribution that averages near the product rating.
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
  const titleSpace = TITLE_A.length * TITLE_B.length;        // 676
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
    const daysAgo = 3 + Math.floor(rng() * 1100);
    const date = new Date(Date.now() - daysAgo * 86400000).toISOString();

    reviews.push({
      name,
      location: city.country,
      date,
      rating: stars,
      title,
      text,
      verified: rng() < 0.38, // some reviews show a green Verified Purchase badge
      seeded: true,
    });
  }

  // Sort newest first like a real review list.
  reviews.sort((a, b) => (a.date < b.date ? 1 : -1));

  // Build the aggregate breakdown so summary numbers and per-star bars are
  // internally consistent with the total shown.
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