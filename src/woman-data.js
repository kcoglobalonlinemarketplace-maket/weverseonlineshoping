// Woman Love — beautiful international products women love (China / USA / Europe).
// Every image is a clean, product-only studio shot (no models, no people, no ads).
// One listing per category — one beautiful card per item.
// Photo IDs were picked from Pexels product-photography only (verified no-people).

const PX = (id, w = 1000) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const WOMAN_LISTINGS = [];

function W(subcategory, brand, title, price, color, size, material, imgIds, description, features, rating, ratingCount) {
  WOMAN_LISTINGS.push({
    property_id: 'W-W' + String(WOMAN_LISTINGS.length + 1).padStart(4, '0'),
    listing_type: 'product',
    category: 'Woman',
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

export function getWomanItemById(id) {
  return WOMAN_LISTINGS.find((l) => l.property_id === id) || null;
}

// ── MAKEUP ──────────────────────────────────────────────────────


// ── SKINCARE ────────────────────────────────────────────────────

W('Moisturizers', 'La Mer', 'Crème de la Mer Moisturizer', 185.99, 'White', '60ml', 'Miracle Broth',
  [3348350, 5069393, 4639974],
  'The legendary cult moisturizer with Miracle Broth. Deeply hydrates and visibly renews for soft, radiant skin.',
  ['Miracle Broth', 'Deep hydration', 'Visible renewal', 'Luxury texture', 'All skin types'], 4.8, 1420);


// ── HAIR ────────────────────────────────────────────────────────
W('Human-Hair Wigs', 'GlamSeamless', '100% Human Hair Lace Wig', 189.99, 'Jet Black', 'One Size', 'Virgin Human Hair',
  [2940244, 1129501, 1707823],
  'A pre-plucked, bleached-knot human-hair wig on a breathable lace cap. Natural hairline with a bouncy, silky finish.',
  ['100% human hair', 'Pre-plucked hairline', 'Breathable cap', 'Heat styleable', 'Tangle free'], 4.7, 510);

W('Lace Wigs', 'GlamSeamless', 'HD Lace Frontal Wig', 219.99, 'Natural Black', 'One Size', 'HD Lace + Human Hair',
  [1129501, 2940244, 1707823],
  'An HD-transparent lace frontal wig that melts into any skin tone. Full coverage with a flawless, undetectable hairline.',
  ['HD lace', 'Melts to skin', 'Full coverage', 'Natural hairline', 'Long lasting'], 4.7, 430);


W('Hair Bundles', 'Bellami', 'Weave Hair Bundles 3-Pack', 129.99, 'Natural Brown', '24 inch', 'Virgin Remy Hair',
  [1707823, 2940244, 1129501],
  'Three bundles of virgin Remy hair with silky cuticles intact. Full, bouncy volume for any weave style.',
  ['Virgin Remy', '3 bundles', 'Full volume', 'Silky cuticles', 'Styling ready'], 4.6, 340);

W('Hair Straighteners', 'Dyson', 'Corrale Hair Straightener', 499.99, 'Nickel', 'One Size', 'Titanium Plates',
  [3775677, 1284442, 2114745],
  'A cordless straightener with flexing copper plates that gather hair for less heat damage and more shine.',
  ['Cordless', 'Flexing plates', 'Less damage', '5-year warranty', 'Fast heat-up'], 4.8, 690);

W('Curling Irons', 'GHD', 'Classic Curl 1" Curling Iron', 169.99, 'Black', '1 inch', 'Ceramic Barrel',
  [1284442, 3775677, 2114745],
  'A 1-inch ceramic curling iron with a smooth barrel and a cool tip. Salon-style curls and waves with one tool.',
  ['Ceramic barrel', 'Cool tip', 'Digital heat', '30s heat-up', 'Auto sleep'], 4.7, 540);

W('Hair Dryers', 'Dyson', 'Supersonic Hair Dryer', 429.99, 'Fuchsia', 'One Size', 'Digital Motor',
  [3775677, 1284442, 2114745],
  'A fast, lightweight hair dryer with intelligent heat control and a powerful digital motor. Smooth, shiny, frizz-free hair.',
  ['Digital motor', 'Heat control', 'Frizz free', 'Lightweight', 'Magnetic nozzles'], 4.8, 810);


// ── JEWELRY ─────────────────────────────────────────────────────


W('Bracelets', 'Tiffany & Co.', 'Return to Tiffany Bracelet', 150.99, 'Silver', '7 inch', 'Sterling Silver',
  [2665015, 2365658, 1453007],
  'The iconic engraved heart bracelet in sterling silver. A timeless gift and a forever keepsake.',
  ['Iconic heart', 'Sterling silver', 'Engraved', 'Adjustable', 'Signature gift box'], 4.8, 690);


W('Jewelry Sets', 'Dior', 'Floral Jewelry Gift Set', 129.99, 'Gold Tone', 'Set', 'Gold-Plated',
  [265879, 1453007, 1556646],
  'A coordinated set of necklace, earrings and bracelet in gold-tone florals. Everything you need in one luxurious box.',
  ['3-piece set', 'Gold tone', 'Floral design', 'Luxury box', 'Hypoallergenic'], 4.7, 350);

W('Pearl Jewelry', 'Mikimoto', 'Akoya Pearl Necklace', 999.99, 'White', '16 inch', 'Akoya Pearl',
  [1556645, 1453007, 1556646],
  'A strand of lustrous Akoya pearls in classic white. Timeless luxury that elevates every outfit.',
  ['Akoya pearls', 'Classic strand', 'Lustrous', 'Hand-knotted', 'Lifetime beauty'], 4.9, 210);


W('Statement Jewelry', 'Kendra Scott', 'Statement Gem Necklace', 129.99, 'Emerald', '18 inch', 'Gem + Gold Tone',
  [1556645, 2438358, 2798382],
  'A bold gem-set pendant necklace with an adjustable chain. The focal point of any outfit.',
  ['Gem pendant', 'Bold design', 'Adjustable', 'Gold tone', 'Showstopper'], 4.7, 290);

W('Brooches', 'Chanel', 'Crystal Brooch', 199.99, 'Silver', 'One Size', 'Crystal + Metal',
  [2633981, 2798382, 2438358],
  'A sparkling crystal brooch in an iconic silhouette. A refined finishing touch for jackets, scarves and lapels.',
  ['Crystal', 'Iconic design', 'Secure pin', 'Versatile', 'Luxury finish'], 4.7, 180);


// ── BAGS & ACCESSORIES ──────────────────────────────────────────
W('Handbags', 'Coach', 'Quilted Leather Handbag', 249.99, 'Black', 'Medium', 'Full-Grain Leather',
  [1152077, 1587009, 3330899],
  'A quilted leather handbag with a sculpted top handle and gold-tone hardware. Polished, structured luxury for every day.',
  ['Full-grain leather', 'Quilted', 'Gold hardware', 'Structured', 'Interior zip'], 4.8, 940);

W('Shoulder Bags', 'Michael Kors', 'Mercer Shoulder Bag', 168.99, 'Tan', 'Medium', 'Saffiano Leather',
  [1587009, 1152077, 3330899],
  'A structured shoulder bag in textured saffiano leather. Clean lines, roomy interior and a secure top zip.',
  ['Saffiano leather', 'Top zip', 'Roomy', 'Adjustable strap', 'Gold hardware'], 4.7, 720);


W('Mini Bags', 'YSL', 'Mini Chain Shoulder Bag', 1499.99, 'Black', 'Mini', 'Leather',
  [1587009, 1152077, 3330899],
  'A mini quilted shoulder bag on a chic chain strap. Maximum style in the smallest silhouette.',
  ['Quilted leather', 'Chain strap', 'Mini size', 'Flap closure', 'Iconic logo'], 4.8, 260);


W('Wallets', 'Gucci', 'Signature Card Wallet', 259.99, 'Beige', 'One Size', 'Canvas + Leather',
  [4964430, 1620761, 1720541],
  'A compact card wallet in iconic monogram canvas. Eight card slots and a zip pocket in a slim, elegant profile.',
  ['Monogram canvas', '8 card slots', 'Zip pocket', 'Slim', 'Iconic'], 4.7, 540);

W('Card Holders', 'Saint Laurent', 'Leather Card Holder', 129.99, 'Black', 'One Size', 'Leather',
  [1620761, 4964430, 1720541],
  'A sleek leather card holder with four slots and a center pocket. Minimal luxury that slips into any bag.',
  ['Leather', '4 slots', 'Center pocket', 'Slim', 'Luxury finish'], 4.6, 610);


W('Belts', 'Hermès', 'Silk-Inspired Leather Belt', 399.99, 'Gold', 'One Size', 'Leather',
  [1741814, 1720541, 4964430],
  'A slim leather belt with a polished gold buckle. Refined waist-defining elegance for trousers and dresses.',
  ['Leather', 'Gold buckle', 'Slim profile', 'Adjustable holes', 'Luxury'], 4.7, 230);

W('Silk Scarves', 'Hermès', 'Twilly Silk Scarf', 185.99, 'Multicolor', '26 inch', '100% Silk',
  [4112020, 4429270, 1741814],
  'A hand-rolled 100% silk twilly with a bold print. Tie it on bags, hair or neck for a signature French touch.',
  ['100% silk', 'Hand-rolled hem', 'Bold print', 'Versatile', 'Luxury feel'], 4.8, 310);


// ── SHOES ───────────────────────────────────────────────────────
W('Sneakers', 'Veja', 'Esplar Leather Sneakers', 149.99, 'White', 'EU 36–42', 'Leather + Rubber',
  [2529148, 1425521, 1844189],
  'Clean white leather sneakers with a sustainable soul. Minimal silhouette, cushioned sole, effortless style.',
  ['Leather', 'Eco friendly', 'Cushioned', 'Minimal', 'Versatile'], 4.7, 1560);

W('Ballet Flats', 'Repetto', 'Cendrillon Ballet Flats', 129.99, 'Black', 'EU 36–42', 'Leather',
  [267320, 1805029, 1335829],
  'Hand-stitched ballet flats in supple leather. A Parisian icon that is as elegant as it is comfortable.',
  ['Hand stitched', 'Leather', 'Flexible sole', 'Parisian', 'All-day wear'], 4.6, 640);

W('Kitten Heels', 'Jimmy Choo', 'Anouk Kitten Heel', 499.99, 'Nude', 'EU 36–42', 'Leather',
  [45201, 1163195, 4672256],
  'A pointy-toe pump on a walkable 60mm kitten heel. Glamorous yet comfortable for long days and nights.',
  ['Kitten heel', 'Pointy toe', 'Leather', 'Comfortable', 'Evening'], 4.7, 310);

W('High Heels', 'Christian Louboutin', 'Pigalle 100', 795.99, 'Black', 'EU 36–42', 'Patent Leather',
  [1163195, 45201, 4672256],
  'The iconic 100mm stiletto in glossy patent leather. A leg-lengthening statement of timeless glamour.',
  ['100mm heel', 'Patent leather', 'Iconic shape', 'Evening', 'Statement'], 4.8, 540);

W('Boots', 'Stuart Weitzman', 'Over-the-Knee Boot', 799.99, 'Black', 'EU 36–42', 'Stretch Suede',
  [1280064, 2048548, 267320],
  'A sleek stretch-suede over-the-knee boot with a low block heel. Instant elongation and effortless chic.',
  ['Stretch suede', 'Over-knee', 'Low block heel', 'Sleek', 'Elongating'], 4.8, 380);

W('Ankle Boots', 'Jimmy Choo', 'Mia Leather Ankle Boot', 599.99, 'Tan', 'EU 36–42', 'Leather',
  [2048548, 1280064, 267320],
  'A polished leather ankle boot with a side zip and a stacked heel. Sharp tailoring for ankle-length elegance.',
  ['Leather', 'Side zip', 'Stacked heel', 'Pointed toe', 'Tailored'], 4.7, 260);

W('Sandals', 'Tory Burch', 'Miller Leather Sandal', 228.99, 'Tan', 'EU 36–42', 'Leather',
  [1335829, 1805029, 267320],
  'A comfortable flat sandal with a contoured footbed and logo medallion. Breezy, beach-ready polish.',
  ['Contoured footbed', 'Leather', 'Logo medallion', 'Flat', 'Everyday'], 4.6, 890);

W('Slides', 'Gucci', 'Leather Slide Sandal', 449.99, 'Black', 'EU 36–42', 'Leather',
  [1782040, 1513150, 1335829],
  'An elegant leather slide with a cushioned footbed and horsebit detail. Pool-to-city luxury in one step.',
  ['Leather', 'Cushioned', 'Horsebit detail', 'Slip on', 'Luxury'], 4.7, 430);

W('Loafers', 'Tod\'s', 'Leather Penny Loafers', 349.99, 'Tan', 'EU 36–42', 'Leather',
  [1740372, 1478442, 1741814],
  'Classic penny loafers handcrafted in supple leather. Preppy, polished and effortlessly smart-casual.',
  ['Handcrafted', 'Leather', 'Penny slot', 'Cushioned', 'Classic'], 4.7, 510);

W('Platform Shoes', 'Jeffrey Campbell', 'Lita Platform Boot', 399.99, 'Black', 'EU 36–42', 'Leather',
  [1163195, 45201, 4672256],
  'A chunky platform boot with a lace-up front. Edge and attitude with a comfortable, walkable height.',
  ['Chunky platform', 'Lace-up', 'Leather', 'Walkable', 'Statement'], 4.6, 290);

// ── HOME & DECOR ────────────────────────────────────────────────
W('Decorative Mirrors', 'West Elm', 'Rounded Wall Mirror', 129.99, 'Brass', '24 inch', 'Glass + Brass',
  [1866149, 1157794, 1129416],
  'A sculptural round wall mirror with a brushed-brass frame. Brightens and beautifully frames any room.',
  ['Round design', 'Brass frame', 'Wall mount', 'Statement', 'Easy hang'], 4.6, 420);


W('Bedsheets', 'Brooklinen', 'Luxury Cotton Sheet Set', 159.99, 'White', 'Queen', 'Long-Staple Cotton',
  [1080721, 2506045, 1603052],
  'Crisp, breathable long-staple cotton sheets with a cool sateen finish. Hotel-quality sleep, every night.',
  ['Long-staple cotton', 'Sateen', 'Queen set', 'Breathable', 'Deep pockets'], 4.7, 730);


// ── TECH ────────────────────────────────────────────────────────
W('Wireless Earbuds', 'Apple', 'AirPods Pro 2', 249.99, 'White', 'One Size', 'Plastic + Silicone',
  [5038998, 3780681, 5038999],
  'Active noise-cancelling wireless earbuds with a MagSafe case. Adaptive audio for immersive sound anywhere.',
  ['Active noise cancelling', 'MagSafe case', 'Adaptive audio', 'Spatial audio', 'Comfort tips'], 4.8, 2650);

W('Smartwatches', 'Apple', 'Apple Watch Series 9', 429.99, 'Midnight', 'One Size', 'Aluminum + Silicone',
  [12611569, 11225330, 11225331],
  'A brilliant smartwatch with health tracking, GPS and a retina display. Your day, beautifully on your wrist.',
  ['Retina display', 'Health tracking', 'GPS', 'Sleep tracking', 'Water resistant'], 4.8, 1820);


W('Wireless Chargers', 'Belkin', '3-in-1 Wireless Charging Stand', 149.99, 'White', '3 Devices', 'Plastic',
  [1614005, 1614004, 5038998],
  'A sleek 3-in-1 charging stand for phone, watch and earbuds. One beautiful station, all your devices.',
  ['3-in-1', 'Fast charge', 'Stable stand', 'Sleek', 'Travel friendly'], 4.7, 890);

W('Portable Speakers', 'Marshall', 'Emberton II Speaker', 169.99, 'Black', 'One Size', 'Silicone + Mesh',
  [167446, 4244879, 1614005],
  'A portable speaker with iconic Marshall looks and 30+ hours of play. Big, room-filling sound anywhere.',
  ['30h play', 'Iconic design', 'IP67 waterproof', 'Stackable', 'Bluetooth'], 4.7, 1030);


W('Tablet Accessories', 'ZAGG', 'iPad Pro Keyboard Case', 199.99, 'Black', '11 inch', 'Polycarbonate',
  [34577, 1515877, 1614004],
  'A protective keyboard case with a trackpad and backlit keys. Turn your tablet into a workstation.',
  ['Trackpad', 'Backlit keys', 'Protective', 'Multi-angle', 'Slim'], 4.6, 420);


W('Smart Mirrors', 'Vanity Mirror', 'LED Smart Vanity Mirror', 169.99, 'White', '24 inch', 'Glass + LED',
  [1866149, 1157794, 1129416],
  'A backlit smart vanity mirror with adjustable color temperature and touch controls. Perfect lighting for makeup and skincare.',
  ['Backlit LED', 'Color temp', 'Touch controls', 'Large 24"', 'Dimmable'], 4.7, 480);

// ── FITNESS & WELLNESS ──────────────────────────────────────────


W('Pilates Equipment', 'Fittok', 'Foldable Pilates Reformer', 249.99, 'Grey', 'Foldable', 'Aluminum + Nylon',
  [4056724, 8121238, 5169157],
  'A foldable pilates reformer with smooth springs and a padded carriage. Studio-quality reformer workouts at home.',
  ['Foldable', 'Smooth springs', 'Padded carriage', 'Compact storage', 'Heavy duty'], 4.6, 320);


W('Fitness Trackers', 'Apple', 'Apple Watch SE', 249.99, 'Starlight', 'One Size', 'Aluminum + Silicone',
  [7505954, 12611569, 11225317],
  'A smart fitness tracker with activity rings, heart-rate alerts and workout tracking. Motivation, beautifully on your wrist.',
  ['Activity rings', 'Heart rate', 'Workout tracking', 'Fall detection', 'Water resistant'], 4.7, 1480);

W('Massage Devices', 'Theragun', 'Mini Massage Gun', 199.99, 'Lilac', 'One Size', 'Aluminum + Foam',
  [5169157, 8121238, 4056724],
  'A pocket-sized percussion massage gun with four attachments. Deep, targeted relief wherever you are.',
  ['Percussion', '4 attachments', 'Quiet', 'Compact', 'Bluetooth app'], 4.7, 610);


// ── CLOTHING ────────────────────────────────────────────────────


W('Skirts', 'Missoni', 'Pleated Midi Skirt', 159.99, 'Multicolor', 'XS–XL', 'Pleated Fabric',
  [1598507, 6556292, 3216502],
  'A swishy pleated midi skirt with a tonal print. Lightweight, graceful movement in every step.',
  ['Pleated', 'Midi', 'Lightweight', 'Elastic waist', 'Movement'], 4.6, 420);


W('Blazers', 'Theory', 'Tailored Blazer', 295.99, 'Navy', 'XS–XL', 'Wool Blend',
  [9936087, 1288248, 13113866],
  'A sharply tailored blazer with a clean shoulder and a nipped waist. Boardroom-to-brunch polish.',
  ['Tailored', 'Wool blend', 'Nipped waist', 'Fully lined', 'Two-button'], 4.7, 380);


W('Sweaters', 'COS', 'Cashmere Crew Sweater', 189.99, 'Heather Grey', 'XS–XL', 'Cashmere',
  [13113869, 13113867, 17708185],
  'A featherweight cashmere crew-neck sweater. Whisper-soft luxury that layers beautifully.',
  ['Cashmere', 'Crew neck', 'Featherweight', 'Soft', 'Luxury'], 4.7, 420);


W('Jackets', 'The North Face', 'Denali Fleece Jacket', 169.99, 'Black', 'XS–XL', 'Fleece',
  [13113863, 10608234, 11159009],
  'A warm fleece jacket with zip pockets and a classic profile. Outdoor warmth with everyday style.',
  ['Warm fleece', 'Zip pockets', 'Classic', 'Lightweight', 'Layering'], 4.6, 540);

W('Coats', 'Max Mara', 'Iconic Camel Wool Coat', 1299.99, 'Camel', 'XS–XL', 'Camel Wool',
  [11159015, 11159009, 13113863],
  'The legendary double-faced camel coat. Effortless, elegant and timelessly chic for life.',
  ['Double faced', 'Camel wool', 'Timeless', 'Longline', 'Tailored'], 4.9, 260);


W('Pajamas', 'Sleepy Jones', 'Silk Pajama Set', 179.99, 'Blush', 'XS–XL', 'Silk',
  [13113869, 17708185, 15604534],
  'A button-front silk pajama set with piping trim. Luxurious sleepwear for beautiful mornings.',
  ['Silk', 'Button front', 'Piping', 'Set', 'Luxury'], 4.7, 310);


W('Yoga Pants', 'Alo Yoga', 'Airbrush High-Waist Leggings', 119.99, 'Black', 'XS–XL', 'Airbrush',
  [13106240, 4056724, 1082526],
  'High-waist leggings in signature Airbrush fabric. Seamless, squat-proof and buttery soft.',
  ['Airbrush', 'High waist', 'Squat proof', 'Seamless', 'Soft'], 4.7, 830);
