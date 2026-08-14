// Woman Love — beautiful international products women love (China / USA / Europe).
// Every image is a clean, product-only studio shot (no models, no people, no ads).
// One listing per category — one beautiful card per item.
// Photo IDs were picked from Pexels product-photography only (verified no-people).

const PX = (id, w = 1000) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const WOMAN_LISTINGS = [];

function W(subcategory, brand, title, price, color, size, material, imgIds, description, features, rating, ratingCount) {
  WOMAN_LISTINGS.push({
    property_id: 'KCO-W' + String(WOMAN_LISTINGS.length + 1).padStart(4, '0'),
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
W('Lip Gloss', 'Dior', 'Dior Addict Lip Glow — 6ml', 38.99, 'Pink', '6ml', 'Oil-Infused Gloss',
  [2532723, 4041392, 2157327],
  'A weightless, high-shine lip gloss with a cushiony applicator. Sheer luminous color with a soft balm feel and a delicate rose scent.',
  ['High-shine finish', 'Cushiony wand', 'Vitamin E enriched', 'Non-sticky', 'Smooth glide'], 4.7, 1280);

W('Lipstick', 'Charlotte Tilbury', 'Matte Revolution Lipstick', 34.99, 'Rose Nude', '3.5g', 'Matte Cream',
  [4041392, 2532723, 823694],
  'A cult matte lipstick with a creamy, velvet finish. One-swipe rich color that lasts all day without drying.',
  ['Velvet matte', 'Pigment-rich', 'Long wearing', 'Moisturizing', 'One-swipe color'], 4.8, 1620);

W('Lip Liners', 'NYX', 'Slim Lip Liner Pencil', 7.99, 'Deep Red', '1.2g', 'Wax Pencil',
  [2157327, 823694, 2818480],
  'A retractable lip liner with a creamy, blendable formula. Defines and shapes lips while keeping lipstick in place.',
  ['Retractable tip', 'Creamy formula', 'Smudge proof', 'Prevents feathering', 'Rich pigment'], 4.5, 2140);

W('Lip Oils', 'Clarins', 'Lip Comfort Oil — 7ml', 28.99, 'Rosewood', '7ml', 'Plant-Based Oil',
  [823694, 2818480, 2533266],
  'A nourishing lip oil that instantly plumps and shines. Plant extracts soften and smooth while leaving a gorgeous glossy veil.',
  ['Plant extracts', 'Instant shine', 'Nourishing', 'Softens lips', 'Glossy veil'], 4.6, 940);

W('Mascara', 'Lancôme', 'Hypnôse Volume Mascara', 29.99, 'Black', '6.5ml', 'Cream Wax',
  [4432673, 3760004, 2818480],
  'A volumizing mascara with a dense sculpting brush. Lifts, defines and builds dramatic volume without clumping.',
  ['Volume brush', 'No clumps', 'Smudge resistant', 'Easy removal', 'Dramatic lift'], 4.7, 1950);

W('Eyeliner', 'Stila', 'Stay All Day Liquid Eyeliner', 24.99, 'Black', '0.5ml', 'Waterproof Ink',
  [4132207, 2806345, 3760004],
  'A precision felt-tip liquid eyeliner that glides on effortlessly. Waterproof, long-wearing ink for a perfect winged look.',
  ['Felt-tip precision', 'Waterproof', 'All-day wear', 'Intense black', 'Quick dry'], 4.7, 1330);

W('Eyeshadow Palettes', 'Urban Decay', 'Naked Eyeshadow Palette', 54.99, 'Neutral', '12 Shades', 'Pressed Powder',
  [2818480, 823694, 2157327],
  'A 12-shade neutral palette with silky, blendable mattes and shimmers. Effortless day-to-night looks in one elegant compact.',
  ['12 shades', 'Silky texture', 'High pigment', 'Mirror included', 'Blendable'], 4.8, 2410);

W('Blush', 'NARS', 'Orgasm Blush', 32.99, 'Peachy Pink', '4.8g', 'Pressed Powder',
  [3827743, 2818480, 2533266],
  'The iconic peachy-pink blush with a golden shimmer. A healthy, lit-from-within glow on every skin tone.',
  ['Iconic shade', 'Golden shimmer', 'Buildable color', 'Silky texture', 'Long lasting'], 4.8, 3100);

W('Highlighter', 'Fenty Beauty', 'Killawatt Freestyle Highlighter', 38.99, 'Champagne', '9g', 'Pressed Powder',
  [3760004, 2818480, 3827743],
  'A buildable highlighter that delivers a wet-look sheen. Smooth, non-chunky shimmer for a radiant glow.',
  ['Wet-look glow', 'Smooth shimmer', 'Buildable', 'No fallout', 'Universal tone'], 4.7, 1180);

W('Foundation', 'Estée Lauder', 'Double Wear Foundation', 46.99, 'Warm Ivory', '30ml', 'Liquid',
  [4041392, 4432673, 2818480],
  'A long-wearing liquid foundation with a natural matte finish. 24-hour wear that resists heat, humidity and transfer.',
  ['24h wear', 'Natural matte', 'Full coverage', 'Transfer resistant', 'Oil free'], 4.8, 2860);

W('Concealer', 'NARS', 'Radiant Creamy Concealer', 32.99, 'Vanilla', '6ml', 'Cream',
  [4432673, 3827743, 4041392],
  'A creamy concealer that blurs imperfections and brightens under-eyes. Buildable medium-to-full coverage with a radiant finish.',
  ['Buildable coverage', 'Brightens', 'Blurs lines', 'Creamy texture', 'Radiant finish'], 4.7, 1780);

W('Makeup Brushes', 'Real Techniques', 'Everyday Brush Collection', 24.99, 'Rose Gold', '12 Piece', 'Synthetic Bristles',
  [18456, 3965604, 3778591],
  'A 12-piece brush set with ultra-soft synthetic bristles. Every essential brush for a flawless, professional finish.',
  ['12 brushes', 'Ultra-soft', 'Vegan bristles', 'Rose-gold ferrules', 'Stand included'], 4.7, 1490);

W('Makeup Sponges', 'Beautyblender', 'Original Makeup Sponge', 20.99, 'Pink', 'One Size', 'Latex-Free Foam',
  [3778591, 3965604, 18456],
  'The original egg-shaped sponge that applies, blends and sets makeup seamlessly. Damp application for an airbrushed finish.',
  ['Airbrush finish', 'Seamless blend', 'Latex free', 'Reusable', '90-day use'], 4.6, 2230);

W('Setting Spray', 'Urban Decay', 'All Nighter Setting Spray', 36.99, 'Clear', '118ml', 'Mist',
  [3760004, 2818480, 2533266],
  'A weightless setting spray that locks makeup in place for up to 16 hours. No fading, caking or melting.',
  ['16h hold', 'Weightless', 'No caking', 'All skin types', 'Transfer control'], 4.7, 2670);

W('Makeup Bags', 'Goyard', 'Cosmetic Zip Pouch', 59.99, 'Rose', 'Medium', 'Waxed Canvas',
  [1587009, 2397344, 1152077],
  'A structured cosmetic pouch in water-repellent canvas with a smooth two-way zip. Keeps beauty essentials organized and chic.',
  ['Water repellent', 'Two-way zip', 'Structured', 'Lining pocket', 'Premium canvas'], 4.6, 620);

W('False Eyelashes', 'Ardell', 'Wispies False Lashes', 6.99, 'Black', '5 Pair', 'Synthetic Fiber',
  [3860851, 3760004, 4132207],
  'Five pairs of featherlight wispy lashes with a flexible band. Natural-looking volume that is easy to apply and reuse.',
  ['Featherlight', 'Flexible band', 'Reusable', 'Natural look', 'Easy apply'], 4.6, 1750);

W('Eyelash Curlers', 'Shu Uemura', 'Eyelash Curler', 19.99, 'Gold', 'One Size', 'Stainless Steel',
  [4132207, 2806345, 3860851],
  'A precision eyelash curler with a wide-opening silicone pad. Curls without pinching for a wide-open, lifted look.',
  ['Precision curve', 'Silicone pad', 'No pinch', 'Refill pads', 'Wide opening'], 4.6, 980);

W('Nail Polish', 'OPI', 'Classic Nail Lacquer', 11.99, 'Bubble Bath', '15ml', 'Nitrocellulose',
  [1053450, 1025246, 1123019],
  'A chip-resistant nail lacquer with a glossy, salon-quality finish. Smooth, even coverage in one or two strokes.',
  ['Chip resistant', 'High gloss', 'Even coverage', 'Salon formula', 'Quick dry'], 4.6, 1320);

W('Gel Nail Kits', 'Sensationail', 'LED Gel Nail Kit', 39.99, 'Assorted', 'Complete Set', 'Gel + LED',
  [1025246, 1123019, 1053450],
  'A complete gel nail system with a curing lamp, base coat, colors and top coat. Salon-shine results at home in minutes.',
  ['LED lamp', '12 shades', 'Base & top coat', 'Salon shine', 'Lasts 3 weeks'], 4.6, 870);

W('Nail Stickers', 'Jamberry', 'Design Nail Sticker Sheets', 9.99, 'Assorted', '20 Sheets', 'Nail Foil',
  [1123019, 1053450, 1025246],
  'Twenty sheets of peel-and-press nail stickers in delicate prints. Instant nail art with no dry time and a glossy seal.',
  ['20 sheets', 'No dry time', 'Long wear', 'Glossy seal', 'Easy apply'], 4.4, 640);

// ── SKINCARE ────────────────────────────────────────────────────
W('Facial Cleansers', 'CeraVe', 'Foaming Facial Cleanser', 15.99, 'Clear', '236ml', 'Foaming Gel',
  [5069393, 4639974, 3318861],
  'A gentle foaming cleanser with ceramides and hyaluronic acid. Removes makeup, dirt and oil without stripping the skin.',
  ['Ceramides', 'Hyaluronic acid', 'Non-stripping', 'Fragrance free', 'Dermatologist approved'], 4.7, 1980);

W('Moisturizers', 'La Mer', 'Crème de la Mer Moisturizer', 185.99, 'White', '60ml', 'Miracle Broth',
  [3348350, 5069393, 4639974],
  'The legendary cult moisturizer with Miracle Broth. Deeply hydrates and visibly renews for soft, radiant skin.',
  ['Miracle Broth', 'Deep hydration', 'Visible renewal', 'Luxury texture', 'All skin types'], 4.8, 1420);

W('Face Serums', 'The Ordinary', 'Hyaluronic Acid Serum', 9.99, 'Clear', '30ml', 'Hyaluronic Complex',
  [3760004, 5069393, 3348350],
  'A multi-molecular-weight hyaluronic acid serum. Plumps and hydrates skin at every layer for a dewy, bouncy look.',
  ['Multi-molecular', 'Deep hydration', 'Plumping', 'Lightweight', 'All skin types'], 4.7, 2870);

W('Sunscreen', 'Supergoop', 'Unseen Sunscreen SPF 40', 36.99, 'Clear', '50ml', 'Silk Gel',
  [4639974, 3318861, 5069393],
  'An invisible, weightless sunscreen that doubles as a primer. Broad-spectrum SPF 40 with a smooth matte finish.',
  ['Invisible', 'SPF 40', 'Primer finish', 'Weightless', 'Non-greasy'], 4.7, 1560);

W('Sheet Masks', 'SK-II', 'Facial Treatment Sheet Mask', 25.99, 'Clear', '6 Sheet', 'Essence Soaked',
  [3760004, 3827743, 2818480],
  'Six essence-soaked sheet masks that flood skin with hydration. Visibly plumps, brightens and calms in 15 minutes.',
  ['Essence soaked', 'Brightens', 'Plumps', 'Calms', 'Single use'], 4.6, 1100);

W('Acne Patches', 'COSRX', 'Acne Pimple Patch', 8.99, 'Clear', '24 Patch', 'Hydrocolloid',
  [4432673, 2818480, 3827743],
  'Invisible hydrocolloid patches that draw out impurities overnight. Fast relief for blemishes with a crystal-clear finish.',
  ['Hydrocolloid', 'Invisible', 'Overnight', '24 patches', 'Fast relief'], 4.5, 1720);

W('Eye Creams', 'Kiehl\'s', 'Creamy Eye Treatment', 28.99, 'White', '14ml', 'Cream',
  [3827743, 3348350, 5069393],
  'An ultra-creamy eye treatment that de-puffs, brightens and smooths the delicate eye area with avocado and shea.',
  ['De-puffs', 'Brightens', 'Avocado & shea', 'Smooths lines', 'Dermatologist tested'], 4.6, 980);

W('Toners', 'Laneige', 'Cream Skin Toner', 29.99, 'White', '150ml', 'Milky Water',
  [2818480, 3760004, 3348350],
  'A milky toner that layers hydration like a light cream. Leaves skin soft, supple and prepped for skincare.',
  ['Milky texture', 'Hydrating layers', 'Soft finish', 'Gentle', 'Daily use'], 4.7, 1240);

W('Exfoliators', 'Paula\'s Choice', 'Skin Perfecting 2% BHA Exfoliant', 34.99, 'Clear', '118ml', 'Liquid Exfoliant',
  [5069393, 3827743, 2818480],
  'A leave-on liquid exfoliant with 2% BHA that unclogs pores and smooths texture. Reveals brighter, clearer skin.',
  ['2% BHA', 'Unclogs pores', 'Smooths texture', 'Non-drying', 'Visible glow'], 4.7, 1650);

W('Face Masks', 'GlamGlow', 'Youthmud Tinglexfoliate Mask', 39.99, 'Charcoal', '50g', 'Clay Mask',
  [3827743, 4432673, 2818480],
  'A tingly clay mask with activated charcoal that detoxifies, exfoliates and brightens in minutes. Fresh, polished skin.',
  ['Activated charcoal', 'Detoxifies', 'Exfoliates', 'Brightens', 'Deep clean'], 4.6, 720);

W('Lip Masks', 'Laneige', 'Lip Sleeping Mask', 24.99, 'Berry', '20g', 'Overnight Balm',
  [823694, 2532723, 2157327],
  'A leave-on overnight lip mask that nourishes and smooths. Wake up to soft, supple, baby-smooth lips.',
  ['Overnight care', 'Berry vitamin', 'Smooths', 'Nourishes', 'Non-sticky'], 4.7, 2130);

W('Facial Oils', 'Sunday Riley', 'Luna Sleeping Night Oil', 88.99, 'Blue', '35ml', 'Retinol Oil',
  [3348350, 5069393, 3827743],
  'A blue nighttime facial oil with encapsulated retinol. Gently resurfaces while restoring, for smoother morning skin.',
  ['Encapsulated retinol', 'Restores', 'Smooths', 'Overnight', 'Blue tansy'], 4.7, 540);

W('Beauty Rollers', 'TheraFace', 'Facial Roller Massager', 18.99, 'Rose Quartz', 'One Size', 'Rose Quartz',
  [2533266, 2818480, 3827743],
  'A rose-quartz facial roller that depuffs, boosts circulation and helps serums absorb. A spa ritual in seconds.',
  ['Rose quartz', 'Depuffs', 'Boosts circulation', 'Serum boost', 'Cooling'], 4.5, 890);

W('Gua Sha Tools', 'Mount Lai', 'Rose Quartz Gua Sha', 34.99, 'Rose Quartz', 'One Size', 'Rose Quartz',
  [2533266, 3827743, 2818480],
  'A sculpting gua sha stone that contours, relieves tension and promotes a natural glow. Timeless beauty ritual.',
  ['Sculpting', 'Relieves tension', 'Contours', 'Natural glow', 'Hand finished'], 4.6, 760);

W('Pore Care', 'The Ordinary', 'Niacinamide 10% + Zinc 1%', 8.99, 'Clear', '30ml', 'Serum',
  [5069393, 3760004, 2818480],
  'A clarifying serum with niacinamide and zinc that visibly reduces pores, refines texture and controls oil.',
  ['10% niacinamide', 'Refines pores', 'Controls oil', 'Brightens', 'Daily use'], 4.6, 2430);

// ── HAIR ────────────────────────────────────────────────────────
W('Human-Hair Wigs', 'GlamSeamless', '100% Human Hair Lace Wig', 189.99, 'Jet Black', 'One Size', 'Virgin Human Hair',
  [2940244, 1129501, 1707823],
  'A pre-plucked, bleached-knot human-hair wig on a breathable lace cap. Natural hairline with a bouncy, silky finish.',
  ['100% human hair', 'Pre-plucked hairline', 'Breathable cap', 'Heat styleable', 'Tangle free'], 4.7, 510);

W('Lace Wigs', 'GlamSeamless', 'HD Lace Frontal Wig', 219.99, 'Natural Black', 'One Size', 'HD Lace + Human Hair',
  [1129501, 2940244, 1707823],
  'An HD-transparent lace frontal wig that melts into any skin tone. Full coverage with a flawless, undetectable hairline.',
  ['HD lace', 'Melts to skin', 'Full coverage', 'Natural hairline', 'Long lasting'], 4.7, 430);

W('Hair Extensions', 'Bellami', 'Luxury Hair Extensions', 99.99, 'Balayage', '20 inch', 'Remy Human Hair',
  [1707823, 2940244, 1129501],
  'Premium Remy hair extensions in hand-tied wefts. Seamless blend, silky texture and long-lasting color.',
  ['Remy human hair', 'Hand-tied wefts', 'Seamless blend', 'Silky texture', 'Long lasting'], 4.6, 380);

W('Clip-In Extensions', 'Hidden Crown', 'Halo Hair Extensions', 59.99, 'Chocolate', '18 inch', 'Remy Human Hair',
  [2940244, 1707823, 1129501],
  'A weft-on-a-wire halo that clips in invisibly in seconds. Instant length and volume with no damage.',
  ['Invisible halo', 'No damage', 'Instant length', 'Remy hair', 'Easy in-out'], 4.6, 620);

W('Ponytail Extensions', 'GlamSeamless', 'Wet-Look Ponytail Extension', 34.99, 'Black', '22 inch', 'Human Hair Blend',
  [1129501, 2940244, 1707823],
  'A voluminous ponytail extension with a secure snap clip. Sleek, high-gloss finish for a polished updo.',
  ['Snap clip', 'High gloss', '22 inch', 'Voluminous', 'Secure fit'], 4.4, 290);

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

W('Hot-Air Brushes', 'Revlon', 'One-Step Hair Dryer Brush', 39.99, 'Black', 'One Size', 'Ceramic + Nylon',
  [2114745, 3775677, 1284442],
  'A round hot-air brush that dries and styles in one step. Adds volume and smooths frizz for a salon blowout.',
  ['Dry + style', 'Adds volume', 'Anti-frizz', 'Ceramic coating', 'Cool tip'], 4.6, 1260);

W('Hair Rollers', 'Sleep Stretcher', 'Satin Hair Rollers Set', 24.99, 'Black', '6 Piece', 'Satin Foam',
  [1865878, 3221199, 3866960],
  'Six satin-covered rollers that set curls while you sleep. Damage-free volume and soft, bouncy waves by morning.',
  ['Satin covered', 'Sleep-friendly', 'No damage', '6 rollers', 'Soft waves'], 4.4, 320);

W('Hair Clips', 'Briogeo', 'Bobby Hair Clips 24-Pack', 12.99, 'Black', '24 Pack', 'Metal',
  [3221199, 1865878, 3866960],
  'Twenty-four bobby clips that grip firmly without leaving dents. Holds every style secure all day.',
  ['Firm grip', 'No dents', '24 pack', 'Rust resistant', 'All styles'], 4.4, 780);

W('Claw Clips', 'Lilysilk', 'Oversized Claw Clip', 14.99, 'Tortoise', 'Large', 'Acetate',
  [3866960, 3221199, 1865878],
  'A sleek oversized claw clip that holds thick hair with a comfortable grip. Effortless, polished up-dos in seconds.',
  ['Oversized', 'Comfort grip', 'Acetate finish', 'Holds thick hair', 'No snags'], 4.5, 1130);

W('French Hair Pins', 'Ouidad', 'French Twist Hair Pins', 11.99, 'Antique Gold', '12 Piece', 'Metal',
  [3866960, 1865878, 3221199],
  'Twelve vintage-style French pins that create sleek chignons and twist styles. Elegant, secure and tangle-free.',
  ['Vintage style', '12 pins', 'Sleek hold', 'Tangle free', 'Elegant finish'], 4.4, 420);

W('Hair Bands', 'Kitsch', 'Scrunchies 6-Pack', 9.99, 'Silk Mix', '6 Pack', 'Silk-Blend',
  [3221199, 3866960, 1865878],
  'Six velvet-soft scrunchies that hold hair gently without creases. Perfect for effortless, chic everyday looks.',
  ['Gentle hold', 'No creases', '6 pack', 'Velvet soft', 'Chic'], 4.5, 980);

W('Hair Brushes', 'Tangle Teezer', 'The Original Detangling Brush', 14.99, 'Purple', 'One Size', 'Nylon Teeth',
  [2703738, 1865867, 3866960],
  'A detangling brush with flexible teeth that glide through knots with ease. Gentle on wet and dry hair.',
  ['Gentle detangle', 'Wet & dry', 'Flexible teeth', 'Frizz control', 'Compact'], 4.7, 1520);

W('Hair Styling Tools', 'Hot Tools', 'Professional Diffuser', 29.99, 'Black', 'Universal', 'Heat Resistant',
  [1284442, 2114745, 3775677],
  'A universal diffuser that adds definition and volume to curls. Even heat distribution for bouncy, frizz-free waves.',
  ['Universal fit', 'Volume boost', 'Curl definition', 'Even heat', 'Frizz free'], 4.4, 260);

// ── JEWELRY ─────────────────────────────────────────────────────
W('Necklaces', 'Pandora', 'Sparkling Infinity Necklace', 89.99, 'Silver', '16–18 inch', 'Sterling Silver',
  [1453007, 1556646, 265879],
  'A delicate sterling-silver necklace with a sparkling infinity pendant. Everyday elegance that catches the light.',
  ['Sterling silver', 'Infinity pendant', 'Adjustable chain', 'Hypoallergenic', 'Gift boxed'], 4.7, 860);

W('Earrings', 'Swarovski', 'Crystal Stud Earrings', 79.99, 'Clear', 'One Size', 'Crystal + Rhodium',
  [2798382, 2438358, 2633981],
  'Brilliant-cut crystal studs in rhodium-plated settings. A classic sparkle for day or evening.',
  ['Crystal', 'Rhodium plated', 'Classic stud', 'Hypoallergenic', 'Gift boxed'], 4.7, 1040);

W('Rings', 'Pandora', 'Twilight Shimmer Ring', 69.99, 'Silver', 'US 6–9', 'Sterling Silver',
  [265879, 1453007, 1556646],
  'A dainty stacking ring with a shimmering crystal set. Designed to mix, match and shine every day.',
  ['Sterling silver', 'Crystal accent', 'Stackable', 'Comfort fit', 'Tarnish resistant'], 4.6, 730);

W('Bracelets', 'Tiffany & Co.', 'Return to Tiffany Bracelet', 150.99, 'Silver', '7 inch', 'Sterling Silver',
  [2665015, 2365658, 1453007],
  'The iconic engraved heart bracelet in sterling silver. A timeless gift and a forever keepsake.',
  ['Iconic heart', 'Sterling silver', 'Engraved', 'Adjustable', 'Signature gift box'], 4.8, 690);

W('Anklets', 'Pandora', 'Silver Chain Anklet', 49.99, 'Silver', '10 inch', 'Sterling Silver',
  [2365658, 2665015, 1453007],
  'A delicate sterling-silver chain anklet with a tiny charm. Subtle shine for barefoot summer days.',
  ['Sterling silver', 'Delicate chain', 'Charm accent', 'Adjustable', 'Hypoallergenic'], 4.5, 320);

W('Chokers', 'Swarovski', 'Crystal Mesh Choker', 89.99, 'Crystal', 'One Size', 'Crystal Mesh',
  [2438358, 2798382, 2633981],
  'A flexible crystal-mesh choker with a luminous sparkle. Modern elegance that sits perfectly at the collar.',
  ['Crystal mesh', 'Flexible fit', 'Luminous', 'Modern', 'Gift boxed'], 4.6, 410);

W('Jewelry Sets', 'Dior', 'Floral Jewelry Gift Set', 129.99, 'Gold Tone', 'Set', 'Gold-Plated',
  [265879, 1453007, 1556646],
  'A coordinated set of necklace, earrings and bracelet in gold-tone florals. Everything you need in one luxurious box.',
  ['3-piece set', 'Gold tone', 'Floral design', 'Luxury box', 'Hypoallergenic'], 4.7, 350);

W('Pearl Jewelry', 'Mikimoto', 'Akoya Pearl Necklace', 999.99, 'White', '16 inch', 'Akoya Pearl',
  [1556645, 1453007, 1556646],
  'A strand of lustrous Akoya pearls in classic white. Timeless luxury that elevates every outfit.',
  ['Akoya pearls', 'Classic strand', 'Lustrous', 'Hand-knotted', 'Lifetime beauty'], 4.9, 210);

W('Gold-Tone Jewelry', 'Kendra Scott', 'Gold Layered Necklace', 79.99, 'Gold', '18 inch', 'Gold-Plated',
  [1556646, 265879, 1453007],
  'A layered gold-tone necklace with delicate pendants. On-trend shine that stacks beautifully with other pieces.',
  ['Gold tone', 'Layered', 'Delicate', 'Tarnish resistant', 'Gift boxed'], 4.6, 480);

W('Statement Jewelry', 'Kendra Scott', 'Statement Gem Necklace', 129.99, 'Emerald', '18 inch', 'Gem + Gold Tone',
  [1556645, 2438358, 2798382],
  'A bold gem-set pendant necklace with an adjustable chain. The focal point of any outfit.',
  ['Gem pendant', 'Bold design', 'Adjustable', 'Gold tone', 'Showstopper'], 4.7, 290);

W('Brooches', 'Chanel', 'Crystal Brooch', 199.99, 'Silver', 'One Size', 'Crystal + Metal',
  [2633981, 2798382, 2438358],
  'A sparkling crystal brooch in an iconic silhouette. A refined finishing touch for jackets, scarves and lapels.',
  ['Crystal', 'Iconic design', 'Secure pin', 'Versatile', 'Luxury finish'], 4.7, 180);

W('Jewelry Organizers', 'Stackers', 'Velvet Jewelry Box', 54.99, 'Blush', 'Medium', 'Velvet',
  [2365658, 2665015, 1453007],
  'A blush-velvet jewelry box with ring rolls, compartments and a mirrored lid. Tangle-free storage for your favorites.',
  ['Velvet lining', 'Ring rolls', 'Mirrored lid', 'Compartments', 'Protects gems'], 4.5, 460);

// ── BAGS & ACCESSORIES ──────────────────────────────────────────
W('Handbags', 'Coach', 'Quilted Leather Handbag', 249.99, 'Black', 'Medium', 'Full-Grain Leather',
  [1152077, 1587009, 3330899],
  'A quilted leather handbag with a sculpted top handle and gold-tone hardware. Polished, structured luxury for every day.',
  ['Full-grain leather', 'Quilted', 'Gold hardware', 'Structured', 'Interior zip'], 4.8, 940);

W('Shoulder Bags', 'Michael Kors', 'Mercer Shoulder Bag', 168.99, 'Tan', 'Medium', 'Saffiano Leather',
  [1587009, 1152077, 3330899],
  'A structured shoulder bag in textured saffiano leather. Clean lines, roomy interior and a secure top zip.',
  ['Saffiano leather', 'Top zip', 'Roomy', 'Adjustable strap', 'Gold hardware'], 4.7, 720);

W('Crossbody Bags', 'Longchamp', 'Le Pliage Crossbody', 89.99, 'Navy', 'Small', 'Nylon + Leather',
  [3330899, 1587009, 1152077],
  'A lightweight crossbody with a foldable nylon body and leather trim. Effortless French elegance that packs flat.',
  ['Foldable', 'Leather trim', 'Adjustable strap', 'Zip closure', 'Feather light'], 4.7, 860);

W('Tote Bags', 'Lululemon', 'Everywhere Belt Bag Tote', 49.99, 'Black', 'One Size', 'Nylon',
  [1152077, 3330899, 1587009],
  'A roomy everyday tote in water-repellent nylon. Multiple pockets keep essentials organized and within reach.',
  ['Water repellent', 'Multiple pockets', 'Roomy', 'Durable nylon', 'Easy clean'], 4.6, 1180);

W('Mini Bags', 'YSL', 'Mini Chain Shoulder Bag', 1499.99, 'Black', 'Mini', 'Leather',
  [1587009, 1152077, 3330899],
  'A mini quilted shoulder bag on a chic chain strap. Maximum style in the smallest silhouette.',
  ['Quilted leather', 'Chain strap', 'Mini size', 'Flap closure', 'Iconic logo'], 4.8, 260);

W('Clutches', 'Kate Spade', 'Evening Clutch', 89.99, 'Blush', 'One Size', 'Satin',
  [2397344, 1152077, 1587009],
  'A satin evening clutch with a subtle sparkle and a slim chain. The perfect finishing touch for nights out.',
  ['Satin', 'Subtle sparkle', 'Chain detail', 'Magnetic flap', 'Evening ready'], 4.6, 390);

W('Wallets', 'Gucci', 'Signature Card Wallet', 259.99, 'Beige', 'One Size', 'Canvas + Leather',
  [4964430, 1620761, 1720541],
  'A compact card wallet in iconic monogram canvas. Eight card slots and a zip pocket in a slim, elegant profile.',
  ['Monogram canvas', '8 card slots', 'Zip pocket', 'Slim', 'Iconic'], 4.7, 540);

W('Card Holders', 'Saint Laurent', 'Leather Card Holder', 129.99, 'Black', 'One Size', 'Leather',
  [1620761, 4964430, 1720541],
  'A sleek leather card holder with four slots and a center pocket. Minimal luxury that slips into any bag.',
  ['Leather', '4 slots', 'Center pocket', 'Slim', 'Luxury finish'], 4.6, 610);

W('Backpacks', 'Herschel', 'Little America Backpack', 89.99, 'Forest', '25L', 'Polyester',
  [2562687, 1545976, 1936950],
  'A classic mountaineering-style backpack with a padded 15-inch laptop sleeve. Stylish, organized and built to last.',
  ['15" sleeve', 'Classic design', 'Padded straps', 'Magnetic clips', 'Roomy'], 4.7, 720);

W('Sunglasses', 'Ray-Ban', 'Round Metal Sunglasses', 99.99, 'Gold', 'One Size', 'Metal + Acetate',
  [46710, 1580160, 1618901],
  'Round metal-frame sunglasses with UV400 lenses. Retro-inspired elegance for every sunny day.',
  ['UV400', 'Metal frame', 'Round shape', 'Lightweight', 'Classic'], 4.7, 980);

W('Belts', 'Hermès', 'Silk-Inspired Leather Belt', 399.99, 'Gold', 'One Size', 'Leather',
  [1741814, 1720541, 4964430],
  'A slim leather belt with a polished gold buckle. Refined waist-defining elegance for trousers and dresses.',
  ['Leather', 'Gold buckle', 'Slim profile', 'Adjustable holes', 'Luxury'], 4.7, 230);

W('Silk Scarves', 'Hermès', 'Twilly Silk Scarf', 185.99, 'Multicolor', '26 inch', '100% Silk',
  [4112020, 4429270, 1741814],
  'A hand-rolled 100% silk twilly with a bold print. Tie it on bags, hair or neck for a signature French touch.',
  ['100% silk', 'Hand-rolled hem', 'Bold print', 'Versatile', 'Luxury feel'], 4.8, 310);

W('Fashion Gloves', 'Dents', 'Leather Driving Gloves', 69.99, 'Black', 'S–L', 'Kidskin Leather',
  [1720541, 1741814, 4964430],
  'Classic kidskin-leather driving gloves with perforated backs. Timeless, fitted elegance for cold-weather polish.',
  ['Kidskin leather', 'Perforated back', 'Fitted', 'Ventilated', 'Classic style'], 4.5, 170);

W('Hats', 'Lack of Color', 'Felt Wide-Brim Hat', 89.99, 'Camel', 'One Size', 'Wool Felt',
  [3329850, 6408328, 9854393],
  'A structured wool-felt hat with a wide brim. Sun-smart, timeless style for every season.',
  ['Wool felt', 'Wide brim', 'Structured', 'One size', 'UV shade'], 4.6, 380);

W('Hair Accessories', 'Jennifer Behr', 'Pearl Hair Barrette', 79.99, 'White', 'One Size', 'Pearl + Metal',
  [3221199, 3866960, 1865878],
  'A sculptural barrette with pearl accents. Instant elegance for up-dos and everyday styles.',
  ['Pearl accents', 'Sculptural', 'Secure grip', 'Everyday luxury', 'Gift boxed'], 4.6, 210);

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

W('Makeup Organizers', 'The Container Store', 'Acrylic Makeup Organizer', 34.99, 'Clear', 'Large', 'Acrylic',
  [2818480, 823694, 2157327],
  'A clear acrylic organizer with drawers and slots. Every lipstick, brush and bottle in perfect view.',
  ['Clear acrylic', 'Drawers', 'Lipstick slots', 'Brush holders', 'Stackable'], 4.6, 980);

W('Vanity Organizers', 'Urban Outfitters', 'Vanity Organizer Set', 49.99, 'White Marble', 'Set', 'Acrylic + Marble',
  [2818480, 2533266, 823694],
  'A coordinating marble-top vanity set with trays and jars. A beautiful, tidy routine every morning.',
  ['Marble top', 'Trays', 'Jars', 'Set', 'Elegant'], 4.5, 510);

W('LED Vanity Lights', 'Lumimart', 'Hollywood Vanity Mirror Lights', 79.99, 'Silver', '10 Bulb', 'Metal + LED',
  [1866149, 1157794, 1129416],
  'Ten bright LED bulbs that frame a mirror with flattering, even light. Get ready with professional glow.',
  ['10 bulbs', 'Bright LED', 'Mirror clamp', 'Dimming', 'Flattering light'], 4.5, 620);

W('Bedsheets', 'Brooklinen', 'Luxury Cotton Sheet Set', 159.99, 'White', 'Queen', 'Long-Staple Cotton',
  [1080721, 2506045, 1603052],
  'Crisp, breathable long-staple cotton sheets with a cool sateen finish. Hotel-quality sleep, every night.',
  ['Long-staple cotton', 'Sateen', 'Queen set', 'Breathable', 'Deep pockets'], 4.7, 730);

W('Pillows', 'Casper', 'Down-Alternative Pillow', 59.99, 'White', 'Standard', 'Microfiber',
  [1603052, 2062051, 1080721],
  'A plush down-alternative pillow that supports and cools. Fluffy comfort with a breathable cotton cover.',
  ['Down alternative', 'Plush', 'Breathable', 'Standard size', 'All sleepers'], 4.6, 890);

W('Blankets', 'Ugg', 'Cozy Sherpa Throw', 89.99, 'Cream', 'Throw', 'Sherpa',
  [1645954, 1789252, 1603052],
  'A cloud-soft sherpa throw that warms any couch or bed. Snuggly luxury for cozy nights in.',
  ['Sherpa', 'Soft', 'Throw size', 'Cozy', 'Warm'], 4.7, 540);

W('Scented Candles', 'Jo Malone', 'Lime Basil & Mandarin Candle', 69.99, 'Cream', '200g', 'Soy Wax',
  [2400571, 1643809, 3000055],
  'A hand-poured soy candle with a fresh, citrusy fragrance. Around 45 hours of elegant, calming scent.',
  ['Soy wax', '45h burn', 'Citrus scent', 'Hand poured', 'Luxury jar'], 4.8, 620);

W('Home Fragrance', 'Diptyque', 'Baies Home Fragrance', 55.99, 'Assorted', '150g', 'Wax',
  [1643809, 2400571, 3000055],
  'A signature reed diffuser fragrance of blackcurrant and rose. Fills the room with refined, lasting scent.',
  ['Signature scent', '150g', 'Long lasting', 'Blackcurrant', 'Elegant'], 4.7, 380);

W('Diffusers', 'Voluspa', 'Reed Diffuser Set', 39.99, 'Blush', '2 Pack', 'Fragrance Oil + Reeds',
  [1643809, 3000055, 2400571],
  'Two reed diffusers with a soft floral scent. Continuous fragrance without a flame.',
  ['2 pack', 'Floral', 'No flame', 'Continuous', '8 weeks'], 4.5, 430);

W('Decorative Lamps', 'IKEA', 'Table Lamp with Textured Shade', 89.99, 'Beige', 'Small', 'Metal + Linen',
  [1129416, 1698356, 1866149],
  'A sculptural table lamp with a textured linen shade. Warm, ambient light for cozy corners.',
  ['Linen shade', 'Warm light', 'Metal base', 'Small size', 'Ambient'], 4.5, 310);

W('Storage Organizers', 'mDesign', 'Decorative Storage Bins', 39.99, 'Rattan', '3 Pack', 'Woven Rattan',
  [1698356, 1129416, 1866149],
  'Three woven-rattan storage bins with handles. Beautifully organizes shelves, closets and counters.',
  ['Woven rattan', '3 pack', 'Handles', 'Shelf style', 'Multi-use'], 4.5, 460);

W('Kitchen Gadgets', 'Le Creuset', 'Ceramic Herb Keeper', 24.99, 'Pink', 'One Size', 'Ceramic',
  [1645954, 1698356, 2400571],
  'A ceramic herb keeper that extends freshness up to three weeks. Stylish countertop storage for fresh herbs.',
  ['Keeps herbs fresh', 'Ceramic', 'Pink glaze', 'Countertop', 'Gift boxed'], 4.6, 380);

W('Coffee Accessories', 'Starbucks', 'Ceramic Coffee Cup Set', 39.99, 'White', '2 Cup', 'Ceramic',
  [3000055, 2400571, 1643809],
  'A two-cup ceramic set with saucers in a glossy finish. Barista-style coffee moments at home.',
  ['2 cups', 'Glossy finish', 'Ceramic', 'Saucers', 'Dishwasher safe'], 4.5, 290);

W('Travel Organizers', 'Away', 'Travel Toiletry Bag', 45.99, 'Black', 'Medium', 'Nylon',
  [1936950, 1545976, 2562687],
  'A hangable, waterproof toiletry bag with organized compartments. TSA-friendly travel with zero leaks.',
  ['Hangable', 'Waterproof', 'Compartments', 'TSA friendly', 'Compact'], 4.6, 540);

// ── TECH ────────────────────────────────────────────────────────
W('Wireless Earbuds', 'Apple', 'AirPods Pro 2', 249.99, 'White', 'One Size', 'Plastic + Silicone',
  [5038998, 3780681, 5038999],
  'Active noise-cancelling wireless earbuds with a MagSafe case. Adaptive audio for immersive sound anywhere.',
  ['Active noise cancelling', 'MagSafe case', 'Adaptive audio', 'Spatial audio', 'Comfort tips'], 4.8, 2650);

W('Smartwatches', 'Apple', 'Apple Watch Series 9', 429.99, 'Midnight', 'One Size', 'Aluminum + Silicone',
  [12611569, 11225330, 11225331],
  'A brilliant smartwatch with health tracking, GPS and a retina display. Your day, beautifully on your wrist.',
  ['Retina display', 'Health tracking', 'GPS', 'Sleep tracking', 'Water resistant'], 4.8, 1820);

W('Phone Cases', 'CASETiFY', 'Impact Clear Phone Case', 59.99, 'Clear', 'iPhone', 'Recycled Plastic',
  [1515877, 34577, 5038998],
  'A clear, impact-resistant phone case made with recycled materials. Drop protection with a crystal-clear look.',
  ['Impact resistant', 'Recycled', 'Crystal clear', 'Wireless charge', 'Raised edges'], 4.6, 980);

W('Phone Charms', 'Lulululu', 'Beaded Phone Charm', 14.99, 'Pearl', 'One Size', 'Acrylic Beads',
  [3221199, 3866960, 2533266],
  'A dainty beaded phone charm with a pearl finish. A cute, personal touch that makes your phone uniquely yours.',
  ['Beaded', 'Pearl finish', 'Adjustable loop', 'Lightweight', 'Trendy'], 4.4, 640);

W('Power Banks', 'Anker', 'MagSafe Power Bank', 89.99, 'White', '10000mAh', 'Aluminum',
  [1614004, 1614005, 5038998],
  'A magnetic wireless power bank that snaps to your phone. Fast, cable-free charging on the go.',
  ['Magnetic', '10000mAh', 'Wireless', 'Fast charge', 'Slim'], 4.7, 1210);

W('Wireless Chargers', 'Belkin', '3-in-1 Wireless Charging Stand', 149.99, 'White', '3 Devices', 'Plastic',
  [1614005, 1614004, 5038998],
  'A sleek 3-in-1 charging stand for phone, watch and earbuds. One beautiful station, all your devices.',
  ['3-in-1', 'Fast charge', 'Stable stand', 'Sleek', 'Travel friendly'], 4.7, 890);

W('Portable Speakers', 'Marshall', 'Emberton II Speaker', 169.99, 'Black', 'One Size', 'Silicone + Mesh',
  [167446, 4244879, 1614005],
  'A portable speaker with iconic Marshall looks and 30+ hours of play. Big, room-filling sound anywhere.',
  ['30h play', 'Iconic design', 'IP67 waterproof', 'Stackable', 'Bluetooth'], 4.7, 1030);

W('Selfie Lights', 'Ring Light', '10" Selfie Ring Light', 32.99, 'White', '10 inch', 'LED',
  [1866149, 2818480, 3760004],
  'A 10-inch LED ring light with a phone holder and tripod. Flawless, flattering light for photos and videos.',
  ['10" LED', 'Phone holder', 'Tripod', '3 light modes', 'Adjustable height'], 4.5, 760);

W('Phone Stands', 'Lamicall', 'Adjustable Aluminum Phone Stand', 24.99, 'Silver', 'Universal', 'Aluminum',
  [34577, 1515877, 1614004],
  'A minimal aluminum stand with adjustable viewing angles. Stable support for desk and bedside.',
  ['Aluminum', 'Adjustable', 'Stable', 'Universal', 'Sleek'], 4.6, 1130);

W('Tablet Accessories', 'ZAGG', 'iPad Pro Keyboard Case', 199.99, 'Black', '11 inch', 'Polycarbonate',
  [34577, 1515877, 1614004],
  'A protective keyboard case with a trackpad and backlit keys. Turn your tablet into a workstation.',
  ['Trackpad', 'Backlit keys', 'Protective', 'Multi-angle', 'Slim'], 4.6, 420);

W('Laptop Accessories', 'Belle & Beam', 'Laptop Sleeve with Handles', 34.99, 'Rose', '13–15 inch', 'Faux Leather',
  [34577, 1545976, 1936950],
  'A padded laptop sleeve in soft faux leather with handles. Office-chic protection for your everyday carry.',
  ['Padded', 'Faux leather', 'Handles', 'Fits 13–15"', 'Professional'], 4.5, 540);

W('Smart Mirrors', 'Vanity Mirror', 'LED Smart Vanity Mirror', 169.99, 'White', '24 inch', 'Glass + LED',
  [1866149, 1157794, 1129416],
  'A backlit smart vanity mirror with adjustable color temperature and touch controls. Perfect lighting for makeup and skincare.',
  ['Backlit LED', 'Color temp', 'Touch controls', 'Large 24"', 'Dimmable'], 4.7, 480);

// ── FITNESS & WELLNESS ──────────────────────────────────────────
W('Yoga Mats', 'Lululemon', 'The Mat 5mm', 98.99, 'Lilac', '5mm', 'Natural Rubber',
  [4056724, 8121238, 5169157],
  'A 5mm natural-rubber yoga mat with superior grip. Sweat-wicking surface with alignment lines.',
  ['Natural rubber', 'Superior grip', 'Sweat wicking', 'Alignment lines', 'Cushioned'], 4.8, 940);

W('Resistance Bands', 'FitSimplify', 'Loop Resistance Bands Set', 29.99, 'Assorted', '5 Levels', 'Latex',
  [8121238, 4056724, 5169157],
  'Five loop bands with graduated resistance for every level. Full-body training with a carry pouch.',
  ['5 levels', 'Latex', 'Carry pouch', 'Guide', 'Snag free'], 4.5, 780);

W('Pilates Equipment', 'Fittok', 'Foldable Pilates Reformer', 249.99, 'Grey', 'Foldable', 'Aluminum + Nylon',
  [4056724, 8121238, 5169157],
  'A foldable pilates reformer with smooth springs and a padded carriage. Studio-quality reformer workouts at home.',
  ['Foldable', 'Smooth springs', 'Padded carriage', 'Compact storage', 'Heavy duty'], 4.6, 320);

W('Gym Bags', 'Nike', 'Brasilia Training Bag', 59.99, 'Black', 'Large', 'Polyester',
  [1936950, 2562687, 1545976],
  'A spacious training bag with a ventilated shoe pocket and zippered sections. Stylish, organized gym days.',
  ['Shoe pocket', 'Spacious', 'Zippered sections', 'Padded strap', 'Water resistant'], 4.6, 680);

W('Water Bottles', 'Hydro Flask', 'Wide Mouth Water Bottle', 39.99, 'Sage', '946ml', 'Stainless Steel',
  [3161061, 2793210, 2421374],
  'A double-wall insulated bottle that keeps drinks ice-cold for 24 hours. BPA-free, condensation-free stainless steel.',
  ['24h cold', 'Stainless steel', 'Wide mouth', 'Leak proof', 'Sweat free'], 4.7, 1350);

W('Fitness Trackers', 'Apple', 'Apple Watch SE', 249.99, 'Starlight', 'One Size', 'Aluminum + Silicone',
  [7505954, 12611569, 11225317],
  'A smart fitness tracker with activity rings, heart-rate alerts and workout tracking. Motivation, beautifully on your wrist.',
  ['Activity rings', 'Heart rate', 'Workout tracking', 'Fall detection', 'Water resistant'], 4.7, 1480);

W('Massage Devices', 'Theragun', 'Mini Massage Gun', 199.99, 'Lilac', 'One Size', 'Aluminum + Foam',
  [5169157, 8121238, 4056724],
  'A pocket-sized percussion massage gun with four attachments. Deep, targeted relief wherever you are.',
  ['Percussion', '4 attachments', 'Quiet', 'Compact', 'Bluetooth app'], 4.7, 610);

W('Recovery Accessories', 'TriggerPoint', 'Foam Roller & Ball Set', 34.99, 'Blue', 'Set', 'EVA Foam',
  [8121238, 5169157, 4056724],
  'A foam roller and massage ball set that releases tight muscles. Quick, effective recovery after every workout.',
  ['Foam roller', 'Massage ball', 'Muscle release', 'Set', 'Travel friendly'], 4.6, 540);

// ── CLOTHING ────────────────────────────────────────────────────
W('Dresses', 'SHEIN', 'Satin Slip Dress', 45.99, 'Champagne', 'XS–XL', 'Satin',
  [2235089, 996329, 1320901],
  'A bias-cut satin slip dress with a delicate cowl neck. Fluid, flattering and effortlessly glamorous.',
  ['Bias cut', 'Cowl neck', 'Satin', 'Midi length', 'Slip style'], 4.6, 1120);

W('Tops', 'Zara', 'Silk Effect Blouse', 59.99, 'White', 'XS–XL', 'Silk Effect',
  [1598507, 3216502, 6556292],
  'A fluid silk-effect blouse with a tie neckline. Elegant drape that pairs with everything.',
  ['Silk effect', 'Tie neck', 'Fluid drape', 'Breathable', 'Versatile'], 4.5, 860);

W('Blouses', 'H&M', 'Satin Wrap Blouse', 49.99, 'Blush', 'XS–XL', 'Satin',
  [1598507, 6556292, 3216502],
  'A wrap-front satin blouse with a flattering V-neck. Refined shine for the office or evening.',
  ['Wrap front', 'Satin', 'V-neck', 'Long sleeves', 'Flattering'], 4.5, 640);

W('T-Shirts', 'Uniqlo', 'Supima Cotton Crew Tee', 24.99, 'White', 'XS–XXL', 'Supima Cotton',
  [18257675, 18186105, 18265935],
  'A buttery-soft Supima cotton crew tee. Clean, breathable and endlessly wearable.',
  ['Supima cotton', 'Crew neck', 'Breathable', 'Relaxed fit', 'Machine washable'], 4.5, 1430);

W('Jeans', 'Levi\'s', '501 Original Jeans', 89.99, 'Mid Blue', '24–34', 'Denim',
  [1082526, 13106240, 39798],
  'The iconic straight-leg 501 in premium denim. Timeless fit that only gets better with age.',
  ['Iconic fit', 'Premium denim', 'Straight leg', 'Button fly', 'Classic'], 4.7, 1670);

W('Wide-Leg Trousers', 'Zara', 'High-Waist Wide-Leg Pants', 69.99, 'Black', 'XS–XL', 'Crepe',
  [13106240, 1598507, 1598503],
  'High-waist wide-leg trousers in a fluid crepe. Elegant, elongating tailoring for every occasion.',
  ['High waist', 'Wide leg', 'Crepe', 'Pleated front', 'Tailored'], 4.6, 720);

W('Capri Pants', 'Lululemon', 'Capri Yoga Pants', 64.99, 'Black', 'XS–XL', 'Nulu Fabric',
  [13106240, 1082526, 1598503],
  'Buttery-soft capri leggings with a high waist. Four-way stretch for yoga, travel and everyday ease.',
  ['Nulu fabric', 'High waist', 'Four-way stretch', 'No seams', 'Breathable'], 4.6, 830);

W('Skirts', 'Missoni', 'Pleated Midi Skirt', 159.99, 'Multicolor', 'XS–XL', 'Pleated Fabric',
  [1598507, 6556292, 3216502],
  'A swishy pleated midi skirt with a tonal print. Lightweight, graceful movement in every step.',
  ['Pleated', 'Midi', 'Lightweight', 'Elastic waist', 'Movement'], 4.6, 420);

W('Leggings', 'Lululemon', 'Align High-Rise Leggings', 98.99, 'Black', 'XS–XL', 'Nulu',
  [13106240, 1082526, 4056724],
  'The cult high-rise leggings in weightless Nulu fabric. Buttery comfort for yoga, studio and street.',
  ['Nulu fabric', 'High rise', 'Weightless', 'Squat proof', 'Buttery soft'], 4.8, 1980);

W('Shorts', 'Free People', 'Denim Shorts', 54.99, 'Light Wash', '24–34', 'Denim',
  [1082526, 13106240, 1598503],
  'Comfortable high-rise denim shorts with a frayed hem. Casual summer styling at its best.',
  ['High rise', 'Frayed hem', 'Denim', 'Relaxed', 'Summer'], 4.4, 580);

W('Blazers', 'Theory', 'Tailored Blazer', 295.99, 'Navy', 'XS–XL', 'Wool Blend',
  [9936087, 1288248, 13113866],
  'A sharply tailored blazer with a clean shoulder and a nipped waist. Boardroom-to-brunch polish.',
  ['Tailored', 'Wool blend', 'Nipped waist', 'Fully lined', 'Two-button'], 4.7, 380);

W('Cardigans', 'Uniqlo', 'Chunky Knit Cardigan', 54.99, 'Camel', 'XS–XL', 'Wool Blend',
  [13113869, 17708185, 13113867],
  'A cozy chunky-knit cardigan with wooden buttons. Warm, layered comfort with a soft hand feel.',
  ['Chunky knit', 'Wooden buttons', 'Cozy', 'Wool blend', 'Layered'], 4.5, 640);

W('Sweaters', 'COS', 'Cashmere Crew Sweater', 189.99, 'Heather Grey', 'XS–XL', 'Cashmere',
  [13113869, 13113867, 17708185],
  'A featherweight cashmere crew-neck sweater. Whisper-soft luxury that layers beautifully.',
  ['Cashmere', 'Crew neck', 'Featherweight', 'Soft', 'Luxury'], 4.7, 420);

W('Hoodies', 'Champion', 'Oversized Fleece Hoodie', 64.99, 'Lavender', 'XS–XL', 'Cotton Fleece',
  [13113868, 13113867, 13113865],
  'An oversized fleece hoodie with a drop shoulder and a soft hood. Cozy, cute and endlessly comfortable.',
  ['Oversized', 'Fleece', 'Drop shoulder', 'Kangaroo pocket', 'Soft'], 4.6, 890);

W('Jackets', 'The North Face', 'Denali Fleece Jacket', 169.99, 'Black', 'XS–XL', 'Fleece',
  [13113863, 10608234, 11159009],
  'A warm fleece jacket with zip pockets and a classic profile. Outdoor warmth with everyday style.',
  ['Warm fleece', 'Zip pockets', 'Classic', 'Lightweight', 'Layering'], 4.6, 540);

W('Coats', 'Max Mara', 'Iconic Camel Wool Coat', 1299.99, 'Camel', 'XS–XL', 'Camel Wool',
  [11159015, 11159009, 13113863],
  'The legendary double-faced camel coat. Effortless, elegant and timelessly chic for life.',
  ['Double faced', 'Camel wool', 'Timeless', 'Longline', 'Tailored'], 4.9, 260);

W('Jumpsuits', 'Zara', 'Wide-Leg Jumpsuit', 89.99, 'Black', 'XS–XL', 'Crepe',
  [13106240, 1598507, 6556292],
  'A one-piece wide-leg jumpsuit with a wrap waist. Effortless evening glamour in a single silhouette.',
  ['Wide leg', 'Wrap waist', 'One piece', 'Crepe', 'Evening'], 4.6, 430);

W('Rompers', 'Free People', 'Linen Romper', 79.99, 'White', 'XS–XL', 'Linen',
  [1598507, 6556292, 3216502],
  'A breezy linen romper with a tie waist. Sun-ready, easy and effortlessly chic.',
  ['Linen', 'Tie waist', 'Breezy', 'Short sleeve', 'Summer'], 4.5, 380);

W('Lingerie', 'Victoria\'s Secret', 'Lace Bralette Set', 44.99, 'Black', 'XS–L', 'Lace + Stretch',
  [1416470, 5725133, 1598507],
  'A delicate lace bralette with matching trim. Soft, feminine and comfortably supportive.',
  ['Lace', 'Comfort fit', 'Bralette', 'Stretch', 'Delicate'], 4.5, 720);

W('Pajamas', 'Sleepy Jones', 'Silk Pajama Set', 179.99, 'Blush', 'XS–XL', 'Silk',
  [13113869, 17708185, 15604534],
  'A button-front silk pajama set with piping trim. Luxurious sleepwear for beautiful mornings.',
  ['Silk', 'Button front', 'Piping', 'Set', 'Luxury'], 4.7, 310);

W('Activewear', 'Nike', 'Dri-FIT Training Set', 99.99, 'Black', 'XS–XL', 'Dri-FIT',
  [13113865, 1598507, 13113867],
  'A quick-dry Dri-FIT training top and leggings set. Performance comfort that moves with you.',
  ['Dri-FIT', 'Quick dry', 'Set', 'Breathable', 'Squat proof'], 4.6, 640);

W('Gym Sets', 'Gymshark', 'Training Gym Set', 89.99, 'Charcoal', 'XS–XL', 'Seamless',
  [13113865, 13113867, 1598507],
  'A seamless gym set with a sculpting fit and sweat-wicking fabric. Train hard, look sharp.',
  ['Seamless', 'Sculpting', 'Sweat wicking', 'Set', 'Flexible'], 4.6, 510);

W('Yoga Pants', 'Alo Yoga', 'Airbrush High-Waist Leggings', 119.99, 'Black', 'XS–XL', 'Airbrush',
  [13106240, 4056724, 1082526],
  'High-waist leggings in signature Airbrush fabric. Seamless, squat-proof and buttery soft.',
  ['Airbrush', 'High waist', 'Squat proof', 'Seamless', 'Soft'], 4.7, 830);

W('Sports Bras', 'Nike', 'Dri-FIT Sports Bra', 34.99, 'Black', 'XS–XL', 'Dri-FIT',
  [13113865, 1598507, 13113867],
  'A supportive, breathable sports bra with medium-impact coverage. Comfort for every workout.',
  ['Medium impact', 'Breathable', 'Supportive', 'Dri-FIT', 'Racer back'], 4.5, 980);

W('Swimwear', 'Seafolly', 'Bandeau Bikini Set', 79.99, 'Palm Print', 'XS–XL', 'Nylon + Spandex',
  [1782040, 1486283, 1335829],
  'A bright bandeau bikini set with a flattering, adjustable fit. Sun-ready, poolside-perfect style.',
  ['Bandeau', 'Adjustable', 'Print', 'Quick dry', 'Set'], 4.5, 460);
