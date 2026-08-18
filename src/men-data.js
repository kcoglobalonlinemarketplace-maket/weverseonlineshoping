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
M('T-Shirts', 'Uniqlo', 'Essential Crew Neck Cotton T-Shirt', 24.99, 'White', 'S–XXL', '100% Supima Cotton',
  [18257675, 18186105, 18265935],
  'A soft, breathable crew-neck tee in premium Supima cotton. Clean seams and a relaxed fit make it the everyday staple that layers or wears well on its own.',
  ['100% Supima cotton', 'Breathable knit', 'Reinforced seams', 'Machine washable', 'Relaxed fit'], 4.6, 1204);

M('Polo Shirts', 'Hugo Boss', 'Classic Pique Polo Shirt', 59.99, 'Navy', 'S–XXL', 'Cotton Pique',
  [13113866, 17468040, 13113862],
  'A tailored pique polo with a crisp collar and tonal buttons. Moisture-wicking cotton keeps you comfortable from the office to the weekend.',
  ['Cotton pique knit', 'Ribbed collar & cuffs', 'Mother-of-pearl buttons', 'Moisture wicking', 'Tailored fit'], 4.5, 486);

M('Dress Shirts', 'Calvin Klein', 'Slim Fit Oxford Dress Shirt', 64.99, 'Light Blue', 'S–XXL', '100% Cotton Oxford',
  [264726, 13113860, 13113864],
  'A classic button-down Oxford with a slim silhouette and a soft broken-in finish. Pairs perfectly with chinos or under a tailored suit.',
  ['100% cotton oxford', 'Button-down collar', 'Slim fit', 'Adjustable cuffs', 'Wrinkle resistant'], 4.7, 823);

M('Hoodies', 'Champion', 'Pullover Fleece Hoodie', 49.99, 'Charcoal', 'S–XXL', 'Cotton Fleece',
  [13113868, 13113867, 13113865],
  'A heavyweight pullover hoodie with a soft brushed interior and a roomy hood. Durable ribbed cuffs and hem hold their shape wash after wash.',
  ['Brushed-back fleece', 'Double-layer hood', 'Kangaroo pocket', 'Heavyweight 12oz', 'Ribbed cuffs'], 4.6, 954);

M('Sweatshirts', 'Champion', 'Classic Crew Sweatshirt', 44.99, 'Heather Grey', 'S–XXL', 'Cotton Fleece',
  [13113869, 17708185, 13113867],
  'The iconic crew sweatshirt in soft fleece with ribbed trims. A true wardrobe workhorse built for daily wear and easy styling.',
  ['Cotton-blend fleece', 'Ribbed crew collar', 'Set-in sleeves', 'Ribbed hem', 'Unisex fit'], 4.5, 612);

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

M('Jeans', "Levi's", 'Slim Fit Stretch Jeans', 69.99, 'Indigo Blue', '28–40', 'Denim / Stretch',
  [1082526, 13106240, 39798],
  'Iconic slim-fit jeans in premium indigo denim with just the right amount of stretch. Classic five-pocket styling that never goes out of style.',
  ['Premium indigo denim', 'Slim fit', 'Comfort stretch', 'Five-pocket', 'Zip fly'], 4.6, 1870);

M('Cargo Pants', 'Zara', 'Utility Cargo Pants', 54.99, 'Olive', '28–40', 'Cotton Twill',
  [13448724, 15377679, 4210863],
  'Hard-wearing cotton-twill cargos with multi-pocket utility styling. A tapered leg keeps the silhouette clean while staying practical.',
  ['Cotton twill', 'Six-pocket cargo', 'Tapered leg', 'Adjustable waist', 'Reinforced stitching'], 4.4, 543);

M('Chinos', 'Dockers', 'Classic Fit Chino Trousers', 49.99, 'Khaki', '28–40', 'Cotton Twill',
  [1598507, 3216502, 6556292],
  'The essential chino in a classic straight fit. Soft, wrinkle-resistant twill with a comfortable rise and clean cuffed hem.',
  ['Cotton twill', 'Classic fit', 'Wrinkle resistant', 'Zip fly', 'Welt pockets'], 4.5, 908);

M('Dress Trousers', 'Hugo Boss', 'Tailored Dress Trousers', 79.99, 'Dark Grey', '28–40', 'Wool Blend',
  [13106240, 1598503, 1598507],
  'Sharp flat-front dress trousers in a drapey wool blend. Perfect with a blazer or under a full suit for refined tailoring.',
  ['Wool blend', 'Flat-front', 'Tapered leg', 'Hook & bar closure', 'Suit-ready'], 4.6, 348);

M('Shorts', 'H&M', 'Everyday Cotton Shorts', 29.99, 'Navy', '28–40', 'Cotton',
  [1598507, 1598503, 1082526],
  'Versatile cotton shorts with a mid-rise fit and side slash pockets. An easy warm-weather essential for casual days out.',
  ['100% cotton', 'Mid-rise fit', 'Side slash pockets', 'Elastic waist', 'Machine washable'], 4.3, 611);

M('Tracksuits', 'Adidas', 'Two-Piece Track Suit', 89.99, 'Black', 'S–XXL', 'Polyester Mesh',
  [15604534, 13113869, 17708185],
  'A matching zip-up jacket and tapered pants in breathable mesh. Iconic three-stripe styling with a relaxed athletic fit.',
  ['Breathable mesh', 'Zip-up jacket', 'Tapered pants', 'Ribbed trims', 'Athletic fit'], 4.5, 522);

M('Underwear', 'Calvin Klein', 'Cotton Boxer Briefs 3-Pack', 34.99, 'Black', 'S–XXL', '95% Cotton / 5% Elastane',
  [1416470, 5725133],
  'Three pairs of soft cotton boxer briefs with a comfortable waistband and breathable knit. All-day comfort in a classic silhouette.',
  ['Soft cotton blend', 'Elastic waistband', 'Breathable knit', 'Full support', 'Pack of 3'], 4.6, 1287);

M('Socks', 'Nike', 'Cushioned Cotton Crew Socks 5-Pack', 19.99, 'White/Black', 'One Size', 'Cotton / Elastane',
  [102129, 1721971],
  'Five pairs of cushioned crew socks with arch support and a reinforced heel and toe. Durable everyday comfort for work or training.',
  ['Cushioned sole', 'Arch support', 'Reinforced heel & toe', 'Moisture wicking', 'Pack of 5'], 4.4, 986);

M('Pajamas', 'Uniqlo', 'Cotton Lounge Pajama Set', 39.99, 'Grey', 'S–XXL', 'Cotton',
  [13113869, 17708185, 15604534],
  'A relaxed two-piece lounge set in breathable cotton. Drawstring pants and a soft top make for an easy night in.',
  ['Breathable cotton', 'Two-piece set', 'Drawstring waist', 'Soft brushed finish', 'Machine washable'], 4.5, 415);

M('Gym Wear', 'Under Armour', 'Performance Gym Tee & Shorts', 44.99, 'Grey', 'S–XXL', 'Polyester Blend',
  [13113865, 1598507, 13113867],
  'A quick-dry training tee and matching shorts with four-way stretch. Moves with you through every rep and sprint.',
  ['Quick-dry fabric', 'Four-way stretch', 'Anti-odor finish', 'Mesh ventilation', 'Reflective logo'], 4.5, 634);

M('Swimwear', 'Speedo', 'Quick-Dry Swim Trunks', 34.99, 'Navy', 'S–XXL', 'Polyester',
  [1598507, 1782040, 1486283],
  'Lightweight swim trunks with an inner mesh liner and quick-dry fabric. A side pocket with drain hole keeps essentials secure.',
  ['Quick-dry polyester', 'Inner mesh liner', 'Drawstring waist', 'Drain-hole pocket', 'Chlorine resistant'], 4.4, 356);

// ── SHOES ───────────────────────────────────────────────────────
M('Sneakers', 'Adidas', 'Classic White Leather Sneakers', 89.99, 'White', 'EU 40–46', 'Leather / Rubber',
  [2529148, 1425521, 1844189],
  'Timeless low-top sneakers in smooth white leather with a cushioned midsole. Clean lines that go with everything.',
  ['Full-grain leather', 'Cushioned midsole', 'Rubber outsole', 'Padded collar', 'Classic low-top'], 4.6, 1562);

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

M('Casual Shoes', 'Puma', 'Everyday Casual Sneakers', 74.99, 'White', 'EU 40–46', 'Canvas / Rubber',
  [1032110, 17684395, 2529148],
  'Easy-wearing canvas sneakers with a padded footbed and vulcanized sole. A laid-back look that pairs with almost anything.',
  ['Canvas upper', 'Padded footbed', 'Vulcanized sole', 'Round toe', 'Lace-up closure'], 4.4, 713);

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

M('Sandals', 'Clarks', 'Leather Strap Sandals', 44.99, 'Brown', 'EU 40–46', 'Leather / Rubber',
  [1335829, 1486283, 1354392],
  'Comfortable leather sandals with adjustable straps and a contoured footbed. Breezy, adjustable support for warm days.',
  ['Genuine leather', 'Adjustable straps', 'Contoured footbed', 'Grippy outsole', 'Ankle support'], 4.4, 289);

M('Slides', 'Adidas', 'Comfort Pool Slides', 34.99, 'White', 'EU 40–46', 'EVA Foam',
  [1782040, 1513150, 1335829],
  'Cloud-soft EVA slides with a contoured footbed and quick-dry design. The ultimate post-gym or poolside comfort.',
  ['Molded EVA', 'Contoured footbed', 'Quick-dry', 'Lightweight', 'Easy to clean'], 4.3, 645);

// ── ACCESSORIES ─────────────────────────────────────────────────
M('Watches', 'Casio', 'Automatic Stainless Steel Watch', 149.99, 'Silver', 'One Size', 'Stainless Steel',
  [1697570, 11805599, 12307471],
  'An automatic dress watch with a brushed stainless case, sapphire-coated glass and date window. Reliable mechanical movement, timeless face.',
  ['Automatic movement', 'Stainless steel case', 'Sapphire glass', 'Date window', 'Water resistant'], 4.7, 932);

M('Smartwatches', 'Apple', 'Fitness Smartwatch — GPS', 399.99, 'Midnight', 'One Size', 'Aluminum / Silicone',
  [12611569, 11225330, 11225331],
  'A full-featured smartwatch with GPS, heart-rate monitoring and a bright always-on display. Tracks workouts, sleep and notifications.',
  ['Always-on display', 'GPS tracking', 'Heart-rate sensor', '50m water resistant', 'Fast charging'], 4.8, 2410);

M('Sunglasses', 'Ray-Ban', 'Classic Wayfarer Sunglasses', 89.99, 'Black', 'One Size', 'Acetate',
  [46710, 1580160, 1618901],
  'The legendary Wayfarer silhouette with UV400 lenses and a sturdy acetate frame. Bold, timeless protection in the sun.',
  ['UV400 lenses', 'Acetate frame', 'Polarized option', 'Hinge-tested', 'Classic shape'], 4.7, 1487);

M('Wallets', 'Tommy Hilfiger', 'Slim Leather Wallet', 49.99, 'Brown', 'One Size', 'Genuine Leather',
  [4964430, 1620761, 1720541],
  'A slim bifold wallet in rich leather with six card slots and a bill compartment. Minimal bulk, maximum everyday carry.',
  ['Genuine leather', 'Six card slots', 'Bill compartment', 'RFID lining', 'Slim profile'], 4.5, 768);

M('Belts', "Levi's", 'Full-Grain Leather Belt', 39.99, 'Black', '30–42', 'Leather',
  [1741814, 1720541, 4964430],
  'A classic full-grain leather belt with a brushed metal buckle. Sturdy daily wear that pairs with denim or tailoring.',
  ['Full-grain leather', 'Brushed buckle', 'Stitched edges', 'Size adjustable', 'Unisex design'], 4.5, 856);

M('Backpacks', 'Samsonite', 'Urban Laptop Backpack — 25L', 79.99, 'Black', '25L', 'Polyester',
  [2562687, 1545976, 1936950],
  'A padded 25L commuter backpack with a dedicated 15-inch laptop sleeve and water-resistant shell. Organized, comfortable and durable.',
  ['15" laptop sleeve', 'Water resistant', 'Padded shoulder straps', 'Multiple pockets', '25L capacity'], 4.6, 1195);

M('Crossbody Bags', 'Zara', 'Crossbody Messenger Bag', 54.99, 'Brown', 'One Size', 'Leather',
  [1545972, 1545976, 1749437],
  'A compact leather crossbody bag with an adjustable strap and secure flap closure. Hands-free everyday carry with a polished look.',
  ['Leather exterior', 'Adjustable strap', 'Flap closure', 'Interior pockets', 'Compact size'], 4.4, 467);

M('Briefcases', 'Samsonite', 'Executive Leather Briefcase', 129.99, 'Brown', '15" Laptop', 'Leather',
  [9207496, 1545972, 1545976],
  'A structured leather briefcase with a padded laptop compartment and roomy interior. Professional looks, executive-level organization.',
  ['Padded 15" sleeve', 'Genuine leather', 'Two-way zips', 'Interior organizer', 'Detachable strap'], 4.6, 342);

M('Travel Bags', 'Eastpak', 'Classic Duffel Travel Bag', 69.99, 'Black', '45L', 'Nylon',
  [1936950, 2562687, 2760607],
  'A roomy 45L duffel in tough ballistic nylon with a padded shoulder strap. Weekend trips and gym sessions covered in one bag.',
  ['45L capacity', 'Ballistic nylon', 'Padded strap', 'Side pockets', 'Reinforced base'], 4.5, 528);

M('Caps', 'Nike', 'Classic Baseball Cap', 24.99, 'Red', 'Adjustable', 'Cotton',
  [4928154, 6408328, 9854393],
  'A classic six-panel baseball cap in breathable cotton with an adjustable strap. Sun-ready, easy-wearing, always on brand.',
  ['Six-panel design', 'Breathable cotton', 'Adjustable strap', 'Pre-curved brim', 'Embroidered logo'], 4.4, 921);

M('Hats', 'Zara', 'Wool Beanie Hat', 39.99, 'Black', 'One Size', 'Wool',
  [3329850, 6408328, 9854393],
  'A snug knitted beanie in soft wool blend with a folded cuff. Simple warmth with a clean, minimal silhouette.',
  ['Wool blend knit', 'Folded cuff', 'Stretch fit', 'One size', 'Winter warm'], 4.3, 254);

M('Ties', 'Hugo Boss', 'Silk Necktie', 34.99, 'Navy', 'Standard', 'Silk',
  [5536432, 9936086, 9936085],
  'A hand-finished silk necktie in a versatile navy tone. Subtle texture and the right weight for a crisp Windsor knot.',
  ['100% silk', 'Hand-finished', 'Classic width', 'Interlined body', 'Gift ready'], 4.6, 387);

M('Cufflinks', 'Hugo Boss', 'Silver Knot Cufflinks', 49.99, 'Silver', 'One Size', 'Stainless Steel',
  [1288248, 5536432, 9936084],
  'Polished silver knot cufflinks with a secure T-bar closure. Understated luxury to finish a formal shirt.',
  ['Polished steel', 'Knot design', 'Secure closure', 'Hypoallergenic', 'Gift box'], 4.5, 176);

M('Bracelets', 'Gucci', 'Leather Cuff Bracelet', 79.99, 'Gold', 'One Size', 'Leather / Metal',
  [14833742, 11805599, 14833727],
  'A polished gold-toned cuff bracelet with a fine engraved finish. Statement jewelry with a modern edge.',
  ['Gold-tone finish', 'Polished detail', 'Adjustable fit', 'Hypoallergenic', 'Luxury finish'], 4.5, 312);

M('Necklaces', 'Gucci', 'Gold Chain Necklace', 99.99, 'Gold', 'One Size', 'Gold-Plated',
  [14833727, 9357285, 14833742],
  'A bold gold-plated chain necklace with a secure lobster clasp. Wear alone for impact or layered with pendants.',
  ['Gold plated', 'Lobster clasp', 'Interlocking links', 'Tarnish resistant', 'Gift boxed'], 4.6, 298);

M('Rings', 'Armani', 'Bands Ring — Silver', 59.99, 'Silver', '7–12', 'Stainless Steel',
  [1306227, 9357285, 14833727],
  'A sleek polished-silver band ring with a subtle brushed center. Minimalist design for everyday wear.',
  ['Polished steel', 'Brushed center', 'Hypoallergenic', 'Sizing 7–12', 'Comfort fit'], 4.4, 205);

M('Chains', 'Armani', 'Sterling Silver Chain', 89.99, 'Silver', '18–24"', 'Sterling Silver',
  [14833727, 9357285, 1306227],
  'A classic sterling silver chain with durable links and a spring-ring clasp. Versatile enough for any pendant.',
  ['Sterling silver', 'Spring-ring clasp', 'Durable links', 'Tarnish resistant', 'Length 18–24"'], 4.5, 231);

// ── GROOMING ────────────────────────────────────────────────────
M('Perfumes', 'Dior', 'Eau de Toilette — 100ml', 89.99, 'Amber', '100ml', 'Fragrance',
  [965989, 1604846, 2610867],
  'A refined eau de toilette with notes of citrus, spice and warm woods. Long-lasting presence for day or evening.',
  ['100ml bottle', 'Top citrus notes', 'Warm wood base', 'Long lasting', 'Premium atomizer'], 4.7, 1620);

M('Beard Trimmers', 'Braun', 'Precision Beard Trimmer', 49.99, 'Black', 'One Size', 'Stainless Steel',
  [3000279, 2867984, 3348350],
  'A precision beard trimmer with 40 length settings and a self-sharpening steel blade. Clean, even edges in one pass.',
  ['40 length settings', 'Self-sharpening blade', 'Cordless', 'Washable head', '2h runtime'], 4.6, 883);

M('Electric Shavers', 'Braun', 'Series 5 Electric Shaver', 99.99, 'Black', 'One Size', 'Stainless Steel',
  [3000279, 3329922, 3775677],
  'A flexible electric shaver with 3 floating heads and a 360° flexing system. A close, comfortable shave on sensitive skin.',
  ['3 floating heads', '360° flex system', 'Wet & dry', 'LED battery display', 'Pop-up trimmer'], 4.6, 764);

M('Hair Clippers', 'Wahl', 'Professional Hair Clippers', 69.99, 'Black', 'One Size', 'Metal Blades',
  [3000279, 2867984, 3348350],
  'Professional-grade clippers with precision-ground steel blades and 10 guide combs. Powerful, quiet and built for years.',
  ['Precision steel blades', '10 guide combs', 'Powerful motor', 'Low-noise design', 'Corded/cordless'], 4.6, 512);

M('Hair Styling', 'American Crew', 'Hair Styling Clay', 19.99, 'Matte', '100g', 'Clay / Wax',
  [3348350, 2867984, 965989],
  'A matte-finish styling clay with medium-to-strong hold and a natural look. Shapes, defines and restyles throughout the day.',
  ['Matte finish', 'Strong hold', 'Natural look', 'Re-stylable', 'Easy washout'], 4.5, 677);

M('Beard Oil', 'Beardbrand', 'Nourishing Beard Oil — 30ml', 24.99, 'Amber', '30ml', 'Natural Oils',
  [2867984, 3348350, 965989],
  'A conditioning beard oil with jojoba and argan oils. Softens, tames and adds a healthy sheen without feeling greasy.',
  ['Jojoba & argan oil', '30ml dropper', 'Non-greasy', 'Natural scent', 'Softens & conditions'], 4.6, 543);

M('Beard Balm', 'Beardbrand', 'Beard Balm Tin', 22.99, 'Natural', '60g', 'Beeswax / Butter',
  [2867984, 3348350, 1604846],
  'A beeswax-based beard balm that styles, tames and moisturizes. Light hold with a pleasant, natural finish.',
  ['Beeswax base', 'Medium hold', 'Moisturizing butters', 'Tames flyaways', '60g tin'], 4.5, 421);

M('Face Wash', 'NIVEA', 'Deep Clean Face Wash', 12.99, 'Clear', '150ml', 'Gel',
  [5069393, 3348350, 2867984],
  'A refreshing gel face wash that removes dirt and oil without stripping skin. Leaves the face clean, smooth and energized.',
  ['Deep clean gel', 'Oil control', 'Gentle formula', '150ml pump', 'Daily use'], 4.4, 1045);

M('Moisturizers', 'NIVEA', 'Daily Moisturizing Lotion', 16.99, 'White', '200ml', 'Lotion',
  [3348350, 5069393, 4639974],
  'A fast-absorbing daily lotion that hydrates all day. Non-greasy with SPF-free comfort for normal to dry skin.',
  ['24h hydration', 'Fast absorbing', 'Non-greasy', '200ml pump', 'All skin types'], 4.4, 932);

M('Sunscreen', 'NIVEA', 'SPF50 Sunscreen', 14.99, 'White', '200ml', 'Cream',
  [4639974, 3318861, 3348350],
  'High-protection SPF50 sunscreen with a non-greasy finish. Guards against UVA/UVB with a light, fast-absorbing texture.',
  ['SPF50 protection', 'UVA/UVB defense', 'Non-greasy', 'Water resistant', '200ml bottle'], 4.5, 687);

M('Shaving Kits', 'The Art of Shaving', 'Complete Shaving Kit', 59.99, 'Black', 'Set', 'Steel / Wood',
  [3000279, 3329922, 3775677],
  'A full wet-shave kit with pre-shave oil, cream, brush and balm. The classic ritual for a smooth, comfortable shave.',
  ['4-piece set', 'Pre-shave oil', 'Shave brush', 'Post-shave balm', 'Gift ready'], 4.6, 289);

M('Grooming Kits', 'Lindberg', "Men's Grooming Gift Set", 69.99, 'Assorted', 'Set', 'Mixed',
  [2867984, 3348350, 3000279],
  'A curated grooming set combining beard oil, balm and styling clay. Everything a modern man needs, beautifully boxed.',
  ['Curated essentials', 'Beard oil + balm', 'Styling clay', 'Premium packaging', 'Gift ready'], 4.6, 318);

M('Electric Toothbrushes', 'Philips', 'Sonic Electric Toothbrush', 89.99, 'White', 'One Size', 'ABS / Bristles',
  [3329922, 3775677, 3000279],
  'A sonic toothbrush with 3 cleaning modes and a pressure sensor. Removes up to 7x more plaque with gentle brushing.',
  ['3 cleaning modes', 'Pressure sensor', '2-min timer', 'Long battery', 'Travel case'], 4.7, 1542);

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

M('Gaming Headsets', 'HyperX', 'Gaming Headset with Mic', 99.99, 'Black/Red', 'One Size', 'Plastic / Cushion',
  [577769, 1851415, 3394664],
  'A comfortable gaming headset with surround sound, a noise-cancelling mic and plush ear cushions. Game all night in comfort.',
  ['Surround sound', 'Noise-cancelling mic', 'Plush cushions', 'Volume wheel', 'Multi-platform'], 4.6, 1128);

M('Power Banks', 'Anker', '20000mAh Power Bank', 49.99, 'Black', '20000mAh', 'Aluminum',
  [1614004, 1614005, 5038998],
  'A high-capacity 20000mAh power bank with dual USB outputs and fast charging. Days of power for your phone in your pocket.',
  ['20000mAh capacity', 'Fast charging', 'Dual USB ports', 'LED indicator', 'Compact design'], 4.7, 2314);

M('Wireless Chargers', 'Anker', '15W Wireless Charging Pad', 29.99, 'Silver', 'One Size', 'Aluminum / Glass',
  [1614005, 1614004, 5038998],
  'A sleek 15W Qi wireless charging pad with foreign-object detection. Drop your phone and go — no cables needed.',
  ['15W fast charge', 'Qi compatible', 'Foreign-object detection', 'Anti-slip surface', 'LED indicator'], 4.5, 1187);

M('Phone Cases', 'Spigen', 'Shockproof Phone Case', 19.99, 'Black', 'Universal', 'TPU / PC',
  [1515877, 34577, 7505954],
  'A slim shockproof case with raised edges and a grippy finish. Military-grade drop protection in a pocket-friendly profile.',
  ['Military-grade drop test', 'Slim profile', 'Raised camera lip', 'Grippy texture', 'Wireless-charge friendly'], 4.6, 2012);

M('Phone Holders', 'Anker', 'Adjustable Car Phone Holder', 22.99, 'Black', 'Universal', 'ABS',
  [34577, 1515877, 1614004],
  'A sturdy car phone holder with an adjustable clamp and 360° rotation. Keeps your phone in view and within reach.',
  ['360° rotation', 'Adjustable clamp', 'Dash & vent mount', 'Universal fit', 'One-hand release'], 4.4, 856);

M('Bluetooth Speakers', 'JBL', 'Portable Bluetooth Speaker', 79.99, 'White', 'One Size', 'Fabric / Rubber',
  [167446, 4244879, 1614005],
  'A waterproof portable speaker with bold stereo sound and 12-hour battery. Take the party anywhere.',
  ['Waterproof IPX7', '12h battery', 'Big stereo sound', 'Built-in mic', 'Pairs two speakers'], 4.6, 1645);

M('Portable Projectors', 'Anker', 'Mini HD Projector', 199.99, 'Black', '1080p', 'Plastic / Metal',
  [5222328, 167446, 4244879],
  'A pocket-sized 1080p projector with auto-focus and built-in speakers. Turn any wall into a cinema, anywhere.',
  ['1080p resolution', 'Auto focus', 'Built-in speaker', 'Compact design', 'HDMI & USB'], 4.5, 768);

M('Gaming Accessories', 'Logitech', 'RGB Gaming Bundle', 59.99, 'Black/RGB', 'Set', 'Plastic',
  [577769, 3394664, 167446],
  'A starter gaming bundle with an RGB-lit mouse and keyboard. Programmable buttons and responsive keys for every title.',
  ['RGB lighting', 'Programmable buttons', 'Mechanical feel', 'Wired setup', 'Anti-ghosting'], 4.4, 987);

M('Laptop Accessories', 'Logitech', 'Laptop Stand & Sleeve', 39.99, 'Silver', '13–16"', 'Aluminum / Neoprene',
  [34577, 1515877, 1614004],
  'An ergonomic aluminum laptop stand plus a padded neoprene sleeve. Better posture at your desk, safe travel on the go.',
  ['Ergonomic angle', 'Aluminum build', 'Padded sleeve', 'Fits 13–16"', 'Foldable design'], 4.4, 612);

M('Computer Accessories', 'Logitech', 'Wireless Mouse & Keyboard', 69.99, 'Black', 'Set', 'Plastic',
  [1614004, 1614005, 3394664],
  'A quiet wireless mouse and full-size keyboard combo with a reliable long-range connection. Clutter-free desk, all-day comfort.',
  ['Wireless combo', 'Quiet keys', 'Long battery', 'Full-size layout', 'Plug-and-play'], 4.5, 1089);

M('Car Gadgets', 'Garmin', 'Dash Cam & Car Charger', 89.99, 'Black', 'One Size', 'Plastic',
  [7505954, 1614004, 4244879],
  'A 1440p front dash cam with loop recording, night vision and G-sensor protection — plus a fast car charger bundle.',
  ['1440p recording', 'Night vision', 'G-sensor parking', 'Loop recording', 'Car charger included'], 4.5, 534);

M('Fitness Trackers', 'Fitbit', 'Fitness Tracker Band', 99.99, 'Black', 'One Size', 'Aluminum / Silicone',
  [7505954, 12611569, 11225317],
  'A slim fitness band with 24/7 heart-rate, sleep and activity tracking plus a week-long battery. Motivation on your wrist.',
  ['24/7 heart rate', 'Sleep tracking', '7-day battery', 'Water resistant', 'Phone notifications'], 4.6, 1376);

// ── FITNESS & LIFESTYLE ─────────────────────────────────────────
M('Gym Bags', 'Under Armour', 'Duffel Gym Bag', 49.99, 'Black', '35L', 'Polyester',
  [1936950, 2562687, 1545976],
  'A 35L duffel with a ventilated shoe pocket, wet-dry compartment and padded shoulder strap. All your training gear, organized.',
  ['35L capacity', 'Ventilated shoe pocket', 'Wet/dry section', 'Padded strap', 'Water resistant'], 4.5, 743);

M('Protein Shakers', 'BlenderBottle', 'Protein Shaker Bottle', 14.99, 'Black', '600ml', 'BPA-Free Plastic',
  [2421374, 3161061, 2793210],
  'A 600ml shaker bottle with a patented mixing system that blends powder smooth. Leak-proof lid and carry loop included.',
  ['600ml capacity', 'Patented mixing', 'Leak-proof lid', 'BPA free', 'Carry loop'], 4.5, 1298);

M('Water Bottles', 'Hydro Flask', 'Insulated Steel Water Bottle', 29.99, 'Silver', '750ml', 'Stainless Steel',
  [3161061, 2793210, 2421374],
  'A double-wall insulated bottle that keeps drinks cold 24h or hot 12h. Durable, condensation-free stainless steel.',
  ['24h cold / 12h hot', 'Double-wall steel', '750ml size', 'Leak-proof lid', 'Sweat-free'], 4.7, 1865);

M('Gym Gloves', 'Under Armour', 'Padded Gym Gloves', 19.99, 'Black', 'S–XL', 'Leather / Mesh',
  [8121238, 5169157, 2146721],
  'Breathable training gloves with padded palms and an open back. Firm grip and wrist support for lifting sessions.',
  ['Padded palm', 'Breathable mesh', 'Wrist support', 'Grippy surface', 'Hook-and-loop closure'], 4.3, 567);

M('Resistance Bands', 'FitSimplify', 'Resistance Bands Set', 24.99, 'Assorted', '5 Levels', 'Latex',
  [8121238, 4056724, 5169157],
  'A 5-band resistance set covering light to heavy tension. Full-body home training with a carry pouch and guide.',
  ['5 resistance levels', 'Natural latex', 'Carry pouch', 'Workout guide', 'Smooth, snag-free'], 4.4, 921);

M('Dumbbells', 'Bowflex', 'Hex Rubber Dumbbell Set', 99.99, 'Black', '2.5–10kg', 'Rubber / Iron',
  [5169157, 2146721, 8121238],
  'Hex-shaped rubber dumbbells with a knurled grip that stay put when set down. A versatile pair for strength training at home.',
  ['Hex design', 'Knurled grip', 'Protective rubber', 'Anti-roll', 'Home gym ready'], 4.6, 684);

M('Yoga Mats', 'Lululemon', 'Non-Slip Yoga Mat', 39.99, 'Green', '6mm', 'TPE',
  [4056724, 8121238, 5169157],
  'A 6mm non-slip TPE mat with dense cushioning and alignment lines. Grip that holds through the sweatiest flows.',
  ['6mm cushioning', 'Non-slip surface', 'Alignment lines', 'Lightweight', 'Eco-friendly TPE'], 4.6, 1123);

M('Sports Bags', 'Nike', 'Drawstring Sports Sack', 19.99, 'Black', 'One Size', 'Polyester',
  [2562687, 1936950, 1545976],
  'A lightweight drawstring sack with a large main compartment and adjustable shoulder straps. Grab-and-go gym simplicity.',
  ['Large main pocket', 'Drawstring closure', 'Adjustable straps', 'Lightweight', 'Front zip pocket'], 4.3, 478);

M('Cycling Accessories', 'Giro', 'Cycling Kit & Bottle', 59.99, 'Black', 'Set', 'Mixed',
  [4056724, 8121238, 3161061],
  'A starter cycling set with insulated bottle, ride pack and accessories. Everything you need for a smooth daily ride.',
  ['Insulated bottle', 'Ride pack', 'Essential tools', 'Reflective detail', 'Compact kit'], 4.3, 387);

M('Running Accessories', 'Nike', 'Running Belt & Bottle', 24.99, 'Black', 'One Size', 'Nylon',
  [3161061, 2793210, 8121238],
  'A lightweight hydration belt with a secure bottle and phone pocket. Barely-there support for longer runs.',
  ['Hydration bottle', 'Phone pocket', 'Adjustable strap', 'Bounce-free', 'Reflective trim'], 4.4, 523);

M('Outdoor Gear', 'Leatherman', 'Outdoor Multi-Tool Kit', 69.99, 'Steel', 'One Size', 'Stainless Steel',
  [45241, 9269367, 1309586],
  'A pocket multi-tool with pliers, knife, screwdrivers and more, plus a rugged sheath. Prepared for every trail and task.',
  ['15 tools in one', 'Stainless steel', 'Locking blades', 'Sheath included', 'Compact carry'], 4.7, 612);

M('Camping Equipment', 'Coleman', '2-Person Camping Tent', 129.99, 'Green', '2 Person', 'Polyester / Steel',
  [45241, 11113247, 9269367],
  'A weather-resistant 2-person dome tent with quick-pitch poles and a rainfly. Easy setup for weekends under the stars.',
  ['Quick-pitch design', 'Weather resistant', 'Ventilated mesh', 'Rainfly included', 'Carry bag'], 4.5, 745);

M('Travel Organizers', 'Samsonite', 'Travel Packing Cubes Set', 24.99, 'Black', 'Set of 4', 'Nylon Mesh',
  [1936950, 1545976, 2562687],
  'A 4-piece packing cube set with mesh panels and dual zippers. Keep luggage organized and unpack faster.',
  ['Set of 4', 'Mesh panels', 'Dual zippers', 'Compression design', 'Machine washable'], 4.5, 897);

M('Travel Backpacks', 'Samsonite', '40L Travel Backpack', 109.99, 'Black', '40L', 'Polyester',
  [1936950, 1545976, 2562687],
  'A carry-on-friendly 40L travel backpack with a padded laptop sleeve and hideaway shoulder straps. Move through airports with ease.',
  ['40L capacity', 'Carry-on size', 'Padded laptop sleeve', 'Hideaway straps', 'Water resistant'], 4.6, 764);

M('Luggage', 'Samsonite', 'Spinner Luggage Suitcase', 149.99, 'Black', '24"', 'Polycarbonate',
  [886743, 887952, 1936950],
  'A lightweight polycarbonate spinner suitcase with 360° wheels and a TSA lock. Tough, roomy and easy to roll anywhere.',
  ['4 spinner wheels', 'Polycarbonate shell', 'TSA lock', 'Interior straps', 'Expandable zip'], 4.6, 1082);
