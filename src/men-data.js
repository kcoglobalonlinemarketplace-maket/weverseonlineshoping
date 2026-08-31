// Man — international fashion & lifestyle (China / Europe / USA).
// Product-only photos (no models wearing the items) — every image ID below was
// verified against Pexels descriptions as a standalone product shot.
// One listing per category, matching the Man homepage section.

const PX = (id, w = 1000) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const MEN_LISTINGS = [];

function M(subcategory, brand, title, price, color, size, material, imgIds, description, features, rating, ratingCount) {
  MEN_LISTINGS.push({
    property_id: 'W-M' + String(MEN_LISTINGS.length + 1).padStart(4, '0'),
    listing_type: 'product',
    category: 'Man',
    subcategory,
    title,
    description,
    price,
    currency: 'USD',
    color,
    size,
    material,
    brand,
    condition: 'New',
    availability_status: 'In Stock',
    images: imgIds.map((id, i) => PX(id, i === 0 ? 1200 : 1000)),
    rating,
    rating_count: ratingCount,
    favorite_count: Math.round(ratingCount / 8),
    features,
  });
}

export function getMenItemById(id) {
  return MEN_LISTINGS.find((l) => l.property_id === id) || null;
}

// ── CLOTHING ────────────────────────────────────────────────────


M('Jackets', 'The North Face', 'Water-Resistant Puffer Jacket', 119.99, 'Black', 'S–XXL', 'Nylon Ripstop',
  [13113863, 10608234, 11159009],
  'A lightweight puffer with water-repellent ripstop shell and quilted insulation. Packs down small yet keeps you warm in cold, damp conditions.',
  ['Water-repellent shell', 'Thermal insulation', 'Full-zip front', 'Packable design', 'Zippered pockets'], 4.7, 731);

M('Leather Jackets', 'AllSaints', 'Premium Leather Biker Jacket', 199.99, 'Black', 'S–XXL', 'Genuine Leather',
  [11159015, 11159009, 13113863],
  'A genuine-leather biker jacket with asymmetric zip, quilted shoulders and a tailored cut. Ages beautifully with a rich patina over time.',
  ['Genuine cow leather', 'Asymmetric zip', 'Quilted shoulder', 'Zip cuffs', 'Lining pockets'], 4.8, 512);

M('Blazers', 'Hugo Boss', 'Tailored Two-Button Blazer', 249.99, 'Navy', '46–56 EU', 'Wool Blend',
  [9936087, 1288248, 13113866],
  'A sharp two-button blazer cut from a fine wool blend with natural stretch. Half-canvas construction delivers a clean, structured drape.',
  ['Wool blend fabric', 'Half-canvas body', 'Two-button front', 'Notch lapels', 'Interior pockets'], 4.7, 389);

M('Suits', 'Calvin Klein', 'Slim Fit Business Suit', 399.99, 'Charcoal', '46–56 EU', 'Wool Blend',
  [9936087, 1288248, 264726],
  'A complete two-piece slim-fit suit in charcoal wool blend. Crisp lapels, tapered trousers and a modern silhouette for boardroom confidence.',
  ['Two-piece set', 'Slim fit', 'Wool blend', 'Tapered trousers', 'Flat-front'], 4.6, 274);


// ── SHOES ───────────────────────────────────────────────────────

M('Running Shoes', 'Adidas', 'Cloudfoam Running Shoes', 119.99, 'Black/White', 'EU 40–46', 'Mesh / Foam',
  [10991332, 1102777, 1598505],
  'A responsive everyday runner with Cloudfoam cushioning and a breathable mesh upper. Smooth heel-to-toe transitions for daily miles.',
  ['Cloudfoam cushioning', 'Breathable mesh', 'Lightweight', 'Durable outsole', 'Reflective details'], 4.6, 1143);

M('Basketball Shoes', 'Nike', 'High-Top Basketball Shoes', 149.99, 'Blue/Yellow', 'EU 40–46', 'Leather / Rubber',
  [1456706, 1598505, 9138883],
  'High-top basketball shoes with ankle support and a grippy court outsole. Impact-cushioning foam keeps you explosive in the fourth quarter.',
  ['High-top support', 'Impact cushioning', 'Herringbone grip', 'Leather upper', 'Padded tongue'], 4.7, 689);

M('Football Boots', 'Nike', 'Firm-Ground Football Boots', 129.99, 'Black', 'EU 40–46', 'Synthetic / Rubber',
  [1598505, 1456706, 1102777],
  'Lightweight firm-ground football boots with a textured strike zone and molded studs. Precision touch for sharp turns and accurate finishes.',
  ['Firm-ground studs', 'Textured strike zone', 'Lightweight build', 'Snug fit', 'Synthetic upper'], 4.6, 872);


M('Loafers', 'Clarks', 'Tassel Leather Loafers', 109.99, 'Beige', 'EU 40–46', 'Leather',
  [1740372, 1478442, 1741814],
  'Polished tassel loafers in supple leather with a cushioned insole. Smart-casual elegance for evenings and weekends.',
  ['Genuine leather', 'Tassel detail', 'Cushioned insole', 'Slip-on fit', 'Flexible sole'], 4.6, 421);

M('Dress Shoes', 'Clarks', 'Oxford Leather Dress Shoes', 129.99, 'Black', 'EU 40–46', 'Leather',
  [1478442, 1740372, 1486283],
  'Classic cap-toe Oxfords in polished leather with a subtle welt. Sharp enough for the boardroom, comfortable enough for the commute.',
  ['Polished leather', 'Cap-toe design', 'Goodyear welt', 'Cushioned footbed', 'Leather lining'], 4.7, 398);

M('Boots', 'Timberland', 'Rugged Leather Work Boots', 159.99, 'Brown', 'EU 40–46', 'Full-Grain Leather',
  [3206201, 2897531, 1715053],
  'Built-for-work boots in waterproof full-grain leather with a lugged rubber outsole. Heavy-duty comfort that takes on any terrain.',
  ['Waterproof leather', 'Lugged outsole', 'Padded collar', 'Steel shank', 'Anti-fatigue insole'], 4.7, 1024);


// ── ACCESSORIES ─────────────────────────────────────────────────
M('Watches', 'Casio', 'Automatic Stainless Steel Watch', 149.99, 'Silver', 'One Size', 'Stainless Steel',
  [1697570, 11805599, 12307471],
  'An automatic dress watch with a brushed stainless case, sapphire-coated glass and date window. Reliable mechanical movement, timeless face.',
  ['Automatic movement', 'Stainless steel case', 'Sapphire glass', 'Date window', 'Water resistant'], 4.7, 932);

M('Smartwatches', 'Apple', 'Fitness Smartwatch — GPS', 399.99, 'Midnight', 'One Size', 'Aluminum / Silicone',
  [12611569, 11225330, 11225331],
  'A full-featured smartwatch with GPS, heart-rate monitoring and a bright always-on display. Tracks workouts, sleep and notifications.',
  ['Always-on display', 'GPS tracking', 'Heart-rate sensor', '50m water resistant', 'Fast charging'], 4.8, 2410);


M('Briefcases', 'Samsonite', 'Executive Leather Briefcase', 129.99, 'Brown', '15" Laptop', 'Leather',
  [9207496, 1545972, 1545976],
  'A structured leather briefcase with a padded laptop compartment and roomy interior. Professional looks, executive-level organization.',
  ['Padded 15" sleeve', 'Genuine leather', 'Two-way zips', 'Interior organizer', 'Detachable strap'], 4.6, 342);


// ── GROOMING ────────────────────────────────────────────────────


// ── TECH & GADGETS ──────────────────────────────────────────────
M('Wireless Earbuds', 'Sony', 'True Wireless Earbuds Pro', 129.99, 'White', 'One Size', 'Plastic / Silicone',
  [5038998, 3780681, 5038999],
  'Noise-cancelling true wireless earbuds with a charging case and crystal-clear call mics. All-day battery with rapid charge.',
  ['Active noise cancelling', 'Charging case', 'Bluetooth 5.3', 'Touch controls', 'IPX4 water resistant'], 4.7, 1963);

M('Headphones', 'Sony', 'Over-Ear Wireless Headphones', 149.99, 'Black', 'One Size', 'Plastic / Cushion',
  [3394664, 1851415, 577769],
  'Over-ear wireless headphones with deep bass, plush memory-foam cushions and 30-hour battery. Immersive sound for hours.',
  ['30h battery', 'Memory-foam cushions', 'Deep bass', 'Built-in mic', 'Foldable design'], 4.7, 1732);

M('Smartwatches', 'Garmin', 'Advanced GPS Smartwatch', 349.99, 'Black', 'One Size', 'Aluminum / Silicone',
  [7505954, 11225314, 11225317],
  'A rugged GPS smartwatch with multisport tracking, heart-rate monitoring and a bright display. Built for athletes and adventurers.',
  ['Built-in GPS', 'Heart-rate monitoring', 'Multisport modes', 'Battery saver', 'Water resistant'], 4.6, 843);


M('Portable Projectors', 'Anker', 'Mini HD Projector', 199.99, 'Black', '1080p', 'Plastic / Metal',
  [5222328, 167446, 4244879],
  'A pocket-sized 1080p projector with auto-focus and built-in speakers. Turn any wall into a cinema, anywhere.',
  ['1080p resolution', 'Auto focus', 'Built-in speaker', 'Compact design', 'HDMI & USB'], 4.5, 768);


// ── FITNESS & LIFESTYLE ─────────────────────────────────────────


M('Camping Equipment', 'Coleman', '2-Person Camping Tent', 129.99, 'Green', '2 Person', 'Polyester / Steel',
  [45241, 11113247, 9269367],
  'A weather-resistant 2-person dome tent with quick-pitch poles and a rainfly. Easy setup for weekends under the stars.',
  ['Quick-pitch design', 'Weather resistant', 'Ventilated mesh', 'Rainfly included', 'Carry bag'], 4.5, 745);


M('Travel Backpacks', 'Samsonite', '40L Travel Backpack', 109.99, 'Black', '40L', 'Polyester',
  [1936950, 1545976, 2562687],
  'A carry-on-friendly 40L travel backpack with a padded laptop sleeve and hideaway shoulder straps. Move through airports with ease.',
  ['40L capacity', 'Carry-on size', 'Padded laptop sleeve', 'Hideaway straps', 'Water resistant'], 4.6, 764);

M('Luggage', 'Samsonite', 'Spinner Luggage Suitcase', 149.99, 'Black', '24"', 'Polycarbonate',
  [886743, 887952, 1936950],
  'A lightweight polycarbonate spinner suitcase with 360° wheels and a TSA lock. Tough, roomy and easy to roll anywhere.',
  ['4 spinner wheels', 'Polycarbonate shell', 'TSA lock', 'Interior straps', 'Expandable zip'], 4.6, 1082);
