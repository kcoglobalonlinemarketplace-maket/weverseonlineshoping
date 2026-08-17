// Showroom Phase 1 — 20 professional sample listings
// Real estate + vehicles. Uses real Pexels stock photo URLs of actual homes.

const PEXELS = (id, w = 800) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// Every house listing builds its gallery from explicit, per-listing Pexels photo IDs —
// each photo is used by exactly ONE house, so no duplicate images appear anywhere.
// All IDs were HEAD-verified against images.pexels.com.

const VEHICLE = {
  car: [10054672, 11836424, 30809411, 31458555],
};

// Build a gallery for a property: 3 unique exteriors, then unique interior room photos.
function propertyGallery(exteriorIds, interiorIds) {
  const imgs = [];
  exteriorIds.forEach((id) => imgs.push(PEXELS(id, 1200)));
  interiorIds.forEach((id) => imgs.push(PEXELS(id, 1000)));
  return imgs;
}

function vehicleGallery(vehicleIds, count = 12) {
  const imgs = [];
  for (let i = 0; i < count; i++) {
    imgs.push(PEXELS(vehicleIds[i % vehicleIds.length], 1000));
  }
  return imgs;
}

// Build a gallery from an explicit exterior set plus unique interior room photos.
function newHomeGallery(ids, interiorIds) {
  const base = ids.map((id, i) => PEXELS(id, i < 3 ? 1200 : 1000));
  const interiors = interiorIds.map((id) => PEXELS(id, 1000));
  return [...base, ...interiors];
}

export const SHOWROOM_LISTINGS = [
  // === REAL ESTATE (16 listings) — mix of affordable, mid-range, and premium ===

  // 1. Affordable starter home
  {
    property_id: 'KCO-000001', listing_type: 'property', category: 'Real Estate',
    title: 'Cozy Starter Home with Updated Kitchen',
    description: 'Perfect first home for a small family or couple starting out. This charming one-story house features a renovated kitchen with modern appliances, hardwood floors throughout, and a private backyard. The living room gets plenty of natural light through large windows. Located on a quiet street close to schools and a community park. Recently repainted exterior and a new roof installed two years ago. An excellent value in a growing neighborhood.',
    price: 20000, currency: 'USD', country: 'United States', country_code: 'US',
    state: 'Ohio', city: 'Columbus', town: 'Hilliard',
    bedrooms: 2, bathrooms: 1, building_size: '850 sqft', land_size: '0.15 acres',
    parking_spaces: 1, property_type: 'Single-Family Home', furnished: 'Unfurnished', listing_status: 'sale',
    images: propertyGallery([8583638, 31602311, 3958958], [30386991, 19836790, 4940609, 6663039, 19846354, 5900807, 7546775, 7167984, 19916712, 12908582]),
    features: ['Updated Kitchen', 'Hardwood Floors', 'New Roof', 'Private Backyard', 'Near Schools', 'Quiet Street', 'Carport'],
  },
  // 2. Suburban two-storey family home
  {
    property_id: 'KCO-000002', listing_type: 'property', category: 'Real Estate',
    title: 'Spacious Two-Storey Family Home with Garage',
    description: 'A well-maintained two-storey family home in a friendly suburban neighborhood. The main floor features an open living and dining area, a practical kitchen with breakfast bar, and a half bath. Upstairs offers three comfortable bedrooms and a full bathroom. The finished basement provides extra living space or a home office. Two-car attached garage and a level backyard perfect for kids. Walk to elementary school and local shops.',
    price: 40000, currency: 'USD', country: 'United States', country_code: 'US',
    state: 'Texas', city: 'Austin', town: 'Round Rock',
    bedrooms: 3, bathrooms: 2, building_size: '1,750 sqft', land_size: '0.2 acres',
    parking_spaces: 2, property_type: 'Single-Family Home', furnished: 'Unfurnished', listing_status: 'sale',
    images: propertyGallery([32802992, 18098285, 33388518], [7061677, 5502219, 17158647, 37184182, 36777913, 7045947, 27359993, 18071801, 35539075, 10182862]),
    features: ['2-Car Garage', 'Finished Basement', 'Open Floor Plan', 'Breakfast Bar', 'Level Backyard', 'Walk to School', 'Air Conditioning'],
  },
  // 3. Cape Cod style home
  {
    property_id: 'KCO-000003', listing_type: 'property', category: 'Real Estate',
    title: 'Classic Cape Cod with Black Shutters',
    description: 'A timeless Cape Cod-style home with white clapboard siding and classic black shutters. The cozy living room features a wood-burning fireplace and built-in bookshelves. The kitchen has been updated with granite countertops and stainless steel appliances. Two bedrooms on the main level and a finished attic space used as a third bedroom or office. A picket fence and mature landscaping give this home excellent curb appeal. Located in an established neighborhood close to downtown.',
    price: 20000, currency: 'USD', country: 'United States', country_code: 'US',
    state: 'Massachusetts', city: 'Boston', town: 'Quincy',
    bedrooms: 3, bathrooms: 1, building_size: '1,200 sqft', land_size: '0.12 acres',
    parking_spaces: 1, property_type: 'Cape Cod', furnished: 'Unfurnished', listing_status: 'sale',
    images: propertyGallery([33607464, 34933247, 8031882], [12119320, 8146322, 36841749, 31525131, 28457986, 5998031, 5178059, 10628459]),
    features: ['Fireplace', 'Granite Countertops', 'Picket Fence', 'Mature Landscaping', 'Finished Attic', 'Built-in Bookshelves', 'Near Downtown'],
  },
  // 4. Duplex / two-family
  {
    property_id: 'KCO-000004', listing_type: 'property', category: 'Real Estate',
    title: 'Income-Producing Duplex — Live in One, Rent the Other',
    description: 'A solid two-family duplex offering excellent income potential. Each unit has two bedrooms, one bathroom, a living room, and a kitchen. Separate utilities and private entrances for each unit. The property has been well-maintained with updated electrical and a five-year-old roof. Both units are currently rented with reliable tenants. A great investment opportunity or house-hack setup for an owner-occupant. Conveniently located near public transit and shopping.',
    price: 40000, currency: 'USD', country: 'Canada', country_code: 'CA',
    state: 'Ontario', city: 'Toronto', town: 'Scarborough',
    bedrooms: 4, bathrooms: 2, building_size: '2,200 sqft', land_size: '0.18 acres',
    parking_spaces: 4, property_type: 'Duplex', furnished: 'Unfurnished', listing_status: 'sale',
    images: propertyGallery([32622694, 9869371, 12577414], [8082242, 6021777, 28586197, 3214064, 4469177, 9193637, 7534282, 19866415, 9439256]),
    features: ['Two Units', 'Separate Utilities', 'Private Entrances', 'Updated Electrical', 'New Roof', 'Rented Units', 'Near Transit', 'Investment Property'],
  },
  // 5. Renovated ranch house
  {
    property_id: 'KCO-000005', listing_type: 'property', category: 'Real Estate',
    title: 'Fully Renovated Ranch House on Quiet Cul-de-Sac',
    description: 'A beautifully renovated single-story ranch home on a desirable cul-de-sac. The renovation opened up the floor plan, creating a seamless flow between the living room, dining area, and kitchen. New kitchen includes soft-close cabinets, quartz countertops, and a tile backsplash. Both bathrooms have been completely updated. New flooring, fresh paint, and updated lighting throughout. The large backyard has a new patio and fire pit area. Move-in ready with nothing to do.',
    price: 40000, currency: 'USD', country: 'United States', country_code: 'US',
    state: 'North Carolina', city: 'Charlotte', town: 'Matthews',
    bedrooms: 3, bathrooms: 2, building_size: '1,500 sqft', land_size: '0.25 acres',
    parking_spaces: 2, property_type: 'Ranch House', furnished: 'Unfurnished', listing_status: 'sale',
    images: propertyGallery([5785100, 29350636, 1396132], [19846360, 37153440, 29304261, 7546556, 29086916, 36411723, 27623999, 15456260, 8583822]),
    features: ['Fully Renovated', 'Open Floor Plan', 'Quartz Countertops', 'New Flooring', 'Updated Bathrooms', 'Patio', 'Fire Pit', 'Cul-de-Sac'],
  },
  // 6. Mid-range apartment for rent
  {
    property_id: 'KCO-000006', listing_type: 'property', category: 'Apartments',
    title: 'Bright Two-Bedroom Apartment Near Riverfront',
    description: 'A bright and airy two-bedroom apartment on the third floor of a well-managed building. The open-concept kitchen features modern appliances and a breakfast bar. Large windows in the living room offer pleasant city views. Both bedrooms are generously sized with good closet space. Building amenities include 24/7 concierge, fitness center, and rooftop terrace. Steps from the riverfront promenade, cafes, and public transit. Perfect for professionals seeking urban convenience.',
    price: 1450, price_period: 'month', currency: 'USD', country: 'United Kingdom', country_code: 'GB',
    state: 'England', city: 'London', town: 'Canary Wharf',
    bedrooms: 2, bathrooms: 2, building_size: '850 sqft', land_size: null,
    parking_spaces: 1, property_type: 'Apartment', furnished: 'Furnished', listing_status: 'rent',
    images: propertyGallery([18729245, 18587809, 18153132], [20681936, 7005291, 17158655, 29086914, 6890406, 7005268, 11119777, 28962508, 36777945]),
    features: ['Concierge', 'Fitness Center', 'Rooftop Terrace', 'Air Conditioning', 'Balcony', 'Pet Friendly', 'Elevator', 'Near Transit'],
  },
  // 7. Affordable villa
  {
    property_id: 'KCO-000007', listing_type: 'property', category: 'Villas',
    title: 'Modern Villa with Garden and Terrace',
    description: 'A contemporary villa offering comfortable family living at an accessible price point. The ground floor features an open-plan living and dining area with direct garden access. The kitchen is fully fitted with quality appliances. Upstairs, three bedrooms share a family bathroom, and the master has an en-suite. A covered terrace overlooks the landscaped garden with a lawn area. Located in a family-friendly development with shared playground and walking paths.',
    price: 40000, currency: 'USD', country: 'Spain', country_code: 'ES',
    state: 'Andalusia', city: 'Marbella', town: 'San Pedro de Alcántara',
    bedrooms: 3, bathrooms: 2, building_size: '1,800 sqft', land_size: '0.3 acres',
    parking_spaces: 2, property_type: 'Villa', furnished: 'Unfurnished', listing_status: 'sale',
    images: propertyGallery([7031595, 7031594, 17174766], [28054895, 6908561, 12700442, 34574606, 30767888, 38071642, 31525748, 20193734, 8134745]),
    features: ['Garden', 'Covered Terrace', 'Open Plan', 'En-suite Master', 'Family Bathroom', 'Playground Nearby', 'Air Conditioning'],
  },
  // 8. Mid-range mansion
  {
    property_id: 'KCO-000008', listing_type: 'property', category: 'Mansions',
    title: 'Grand Estate with Private Gardens and Pool',
    description: 'An impressive estate set on 1.5 acres of manicured grounds. The grand foyer leads to a formal living room with high ceilings and a fireplace. The gourmet kitchen features professional-grade appliances and a large island. The master suite includes a sitting area and spa-like bathroom. Additional amenities include a home gym, game room, and climate-controlled wine storage. The outdoor oasis includes a pool, spa, and outdoor kitchen. A rare offering in a prestigious neighborhood.',
    price: 60000, currency: 'USD', country: 'France', country_code: 'FR',
    state: 'Île-de-France', city: 'Paris', town: 'Neuilly-sur-Seine',
    bedrooms: 6, bathrooms: 5, building_size: '5,500 sqft', land_size: '1.5 acres',
    parking_spaces: 4, property_type: 'Mansion', furnished: 'Unfurnished', listing_status: 'sale',
    images: propertyGallery([38255315, 7045711, 31685810], [37132127, 6987730, 18285887, 10584374, 18285944, 4682136, 35189677, 16513601, 16256067, 19714324, 37885738, 30725657]),
    features: ['Pool & Spa', 'Outdoor Kitchen', 'Wine Storage', 'Home Gym', 'Game Room', 'Fireplace', '4-Car Garage', 'Smart Home'],
  },
  // 9. Beach house for rent
  {
    property_id: 'KCO-000009', listing_type: 'property', category: 'Beach Houses',
    title: 'Beachfront Cottage with Ocean Views',
    description: 'A charming beachfront cottage with direct ocean access and stunning sea views. The open living area flows to a large deck perfect for entertaining or relaxing to the sound of waves. The kitchen features coastal-inspired cabinetry and stainless steel appliances. Two bedrooms and one bathroom with a walk-in shower. Steps from a pristine sandy beach and a short walk to local cafes. A turnkey coastal retreat with strong vacation rental potential.',
    price: 2200, price_period: 'month', currency: 'USD', country: 'Australia', country_code: 'AU',
    state: 'Queensland', city: 'Gold Coast', town: 'Burleigh Heads',
    bedrooms: 2, bathrooms: 1, building_size: '1,000 sqft', land_size: '0.1 acres',
    parking_spaces: 1, property_type: 'Beach Cottage', furnished: 'Furnished', listing_status: 'rent',
    images: propertyGallery([34958535, 35713601, 28352505], [28862441, 6908562, 30070551, 9890650, 7534166, 31466720, 25972319]),
    features: ['Ocean View', 'Direct Beach Access', 'Deck', 'Air Conditioning', 'Outdoor Shower', 'Furnished', 'Walk to Cafes', 'Pet Friendly'],
  },
  // 10. Luxury condominium
  {
    property_id: 'KCO-000010', listing_type: 'property', category: 'Luxury Condominiums',
    title: 'Skyline Condo with Floor-to-Ceiling Windows',
    description: 'An ultra-modern luxury condominium on the 35th floor with breathtaking skyline views. The residence features an open floor plan, designer kitchen with quartz countertops, and spa-like bathrooms. Building amenities include a sky lounge, indoor pool, fitness center, and 24-hour valet. Steps from fine dining, luxury shopping, and the business district. A premier address for the discerning urbanite seeking a lock-and-leave lifestyle.',
    price: 4200, price_period: 'month', currency: 'USD', country: 'United Arab Emirates', country_code: 'AE',
    state: 'Dubai', city: 'Dubai', town: 'Downtown Dubai',
    bedrooms: 2, bathrooms: 2, building_size: '1,200 sqft', land_size: null,
    parking_spaces: 1, property_type: 'Condominium', furnished: 'Furnished', listing_status: 'rent',
    images: propertyGallery([30506378, 29560596, 16110999], [29012619, 6903160, 34961617, 18285949, 13722861, 33599113, 5331349, 9422447, 2876753, 11593501]),
    features: ['Sky Lounge', 'Indoor Pool', 'Fitness Center', '24h Valet', 'Concierge', 'Smart Home', 'Balcony', 'City View'],
  },
  // 11. Farmhouse with acreage
  {
    property_id: 'KCO-000011', listing_type: 'property', category: 'Farm Houses',
    title: 'Restored Farmhouse with 5 Acres and Barn',
    description: 'A beautifully restored 19th-century farmhouse on 5 acres of pastoral land. The home retains its original charm with exposed beams and stone fireplaces while offering modern comforts. The property includes a restored barn suitable for equestrian use, a chicken coop, and established vegetable gardens. Peaceful country living with easy access to the nearby town. Ideal for a hobby farm, equestrian setup, or those seeking space and tranquility.',
    price: 40000, currency: 'USD', country: 'Canada', country_code: 'CA',
    state: 'Ontario', city: 'Ottawa', town: 'Manotick',
    bedrooms: 3, bathrooms: 2, building_size: '2,200 sqft', land_size: '5 acres',
    parking_spaces: 4, property_type: 'Farmhouse', furnished: 'Unfurnished', listing_status: 'sale',
    images: propertyGallery([32940727, 17626748, 7255464], [7746476, 10772180, 7167993, 15456211, 3999070, 29887333, 2058752, 18093631]),
    features: ['Barn', '5 Acres', 'Fireplace', 'Garden', 'Chicken Coop', 'Equestrian Ready', 'Exposed Beams', 'Solar Panels'],
  },
  // 12. Commercial building
  {
    property_id: 'KCO-000012', listing_type: 'property', category: 'Commercial Buildings',
    title: 'Prime Retail Building on High-Traffic Avenue',
    description: 'A strategically located commercial building on a high-traffic avenue with excellent visibility. The ground floor offers 2,500 sqft of retail space with large storefront windows. The upper floor features modern office space with a separate entrance. Ample parking for 20 vehicles and excellent signage opportunities. Strong rental history with a long-term tenant. A solid investment in a growing commercial corridor.',
    price: 60000, currency: 'USD', country: 'Germany', country_code: 'DE',
    state: 'Bavaria', city: 'Munich', town: 'Schwabing',
    bedrooms: null, bathrooms: 2, building_size: '4,500 sqft', land_size: '0.3 acres',
    parking_spaces: 20, property_type: 'Commercial', furnished: 'Unfurnished', listing_status: 'sale',
    images: propertyGallery([29854540, 32367382, 4889296], [32549955, 37080685, 36631701, 18999482, 5324874, 6899357, 11251672, 8919461]),
    features: ['High Traffic', 'Storefront Windows', 'Office Space', 'Parking 20', 'Signage Available', 'Separate Entrance', 'Long-Term Tenant'],
  },
  // 13. Affordable suburban home
  {
    property_id: 'KCO-000013', listing_type: 'property', category: 'Real Estate',
    title: 'Affordable Brick Home with Large Backyard',
    description: 'A solid brick home offering great value for a growing family. The main floor has a comfortable living room, formal dining room, and a practical kitchen with plenty of cabinet space. Three bedrooms upstairs with a shared full bathroom. The large fenced backyard is perfect for children and pets, with a storage shed and room for a garden. Attached single garage and a long driveway for extra parking. Located in an established neighborhood near parks and schools.',
    price: 20000, currency: 'USD', country: 'United States', country_code: 'US',
    state: 'Indiana', city: 'Indianapolis', town: 'Fishers',
    bedrooms: 3, bathrooms: 1, building_size: '1,400 sqft', land_size: '0.22 acres',
    parking_spaces: 3, property_type: 'Single-Family Home', furnished: 'Unfurnished', listing_status: 'sale',
    images: propertyGallery([17086063, 32972999, 18480410], [6980724, 8092433, 12700430, 12700517, 19541364, 11036444, 18869571, 18041828, 9702373]),
    features: ['Brick Construction', 'Fenced Yard', 'Attached Garage', 'Storage Shed', 'Near Parks', 'Near Schools', 'Formal Dining Room'],
  },
  // 14. Hotel
  {
    property_id: 'KCO-000014', listing_type: 'property', category: 'Hotels',
    title: 'Boutique Hotel Near Historic City Center',
    description: 'A charming 24-room boutique hotel steps from the historic city center. Each room is uniquely decorated with local art and premium furnishings. The property features a restaurant, bar, courtyard garden, and rooftop terrace. Strong occupancy rates and excellent reviews across all platforms. Turnkey operation with trained staff and established booking systems. A rare opportunity in a top tourist destination.',
    price: 60000, currency: 'USD', country: 'Italy', country_code: 'IT',
    state: 'Tuscany', city: 'Florence', town: 'Oltrarno',
    bedrooms: 24, bathrooms: 24, building_size: '10,000 sqft', land_size: '0.5 acres',
    parking_spaces: 12, property_type: 'Hotel', furnished: 'Furnished', listing_status: 'sale',
    images: propertyGallery([34487094, 33791950, 28238364], [695193, 34496701, 36767624, 32568165, 4784165, 33649128, 30525944, 7512139, 14036253]),
    features: ['Restaurant', 'Bar', 'Courtyard Garden', 'Rooftop Terrace', '24 Rooms', 'Reception', 'Turnkey Operation', 'Laundry'],
  },
  // 15. Beach house for sale
  {
    property_id: 'KCO-000015', listing_type: 'property', category: 'Beach Houses',
    title: 'Modern Beach House with Wraparound Deck',
    description: 'A modern beach house designed for indoor-outdoor coastal living. The open living area features vaulted ceilings and large windows capturing ocean views. The kitchen has been updated with coastal-inspired finishes and stainless steel appliances. Three bedrooms including a master suite with a private balcony. The wraparound deck is perfect for entertaining, with stairs leading directly to the beach. Hurricane-rated windows and a new roof provide peace of mind.',
    price: 60000, currency: 'USD', country: 'Australia', country_code: 'AU',
    state: 'Queensland', city: 'Gold Coast', town: 'Surfers Paradise',
    bedrooms: 3, bathrooms: 2, building_size: '1,800 sqft', land_size: '0.18 acres',
    parking_spaces: 2, property_type: 'Beach House', furnished: 'Furnished', listing_status: 'sale',
    images: propertyGallery([29334715, 32506603, 36410769], [19899070, 18033166, 28054852, 37436121, 3144580, 6394530, 7031840, 38188641, 16974551]),
    features: ['Ocean View', 'Wraparound Deck', 'Direct Beach Access', 'Hurricane Windows', 'Vaulted Ceilings', 'Master Balcony', 'Air Conditioning', 'Outdoor Shower'],
  },
  // 16. Affordable apartment for sale
  {
    property_id: 'KCO-000016', listing_type: 'property', category: 'Apartments',
    title: 'Studio Apartment in Vibrant Arts District',
    description: 'A stylish studio apartment in the vibrant arts district, perfect for first-time buyers or investors. The unit features an efficient layout with a modern kitchenette, updated bathroom, and a private balcony. The building offers a communal rooftop garden and secure bike storage. Walk to galleries, cafes, and public transit. Strong rental demand in this up-and-coming neighborhood makes it an excellent investment.',
    price: 20000, currency: 'USD', country: 'Netherlands', country_code: 'NL',
    state: 'North Holland', city: 'Amsterdam', town: 'Jordaan',
    bedrooms: 1, bathrooms: 1, building_size: '400 sqft', land_size: null,
    parking_spaces: 0, property_type: 'Studio Apartment', furnished: 'Unfurnished', listing_status: 'sale',
    images: propertyGallery([28241644, 31032064, 16981072], [4208390, 18897327, 3701455, 19857270, 14343389, 15241687]),
    features: ['Balcony', 'Rooftop Garden', 'Bike Storage', 'Elevator', 'Near Transit', 'Walk to Cafes', 'Investment Potential'],
  },

  // === VEHICLES (4 listings) ===
  {
    property_id: 'KCO-000017', listing_type: 'vehicle', category: 'Cars',
    title: 'Mercedes-Benz S-Class 2024 — Premium Sedan',
    description: 'The 2024 Mercedes-Benz S-Class represents the pinnacle of luxury sedans. This flagship model features a 3.0L inline-6 turbo engine with EQ Boost delivering 429 horsepower. The cabin offers executive rear seating with massage, heated and ventilated Nappa leather seats, and a rear-seat entertainment system. The MBUX infotainment system includes a 12.8-inch OLED touchscreen with voice control. Advanced safety features include adaptive cruise control, lane-keeping assist, and a 360-degree camera. Immaculate condition with low mileage and full service history.',
    price: 20000, currency: 'USD', country: '', country_code: '',
    state: null, city: null, town: null,
    bedrooms: null, bathrooms: null, building_size: null, land_size: null,
    parking_spaces: null, property_type: 'Sedan', furnished: null, listing_status: 'sale',
    images: vehicleGallery(VEHICLE.car), rating: 4.9, rating_count: 87, favorite_count: 64,
    features: ['3.0L Inline-6 Turbo', '429 HP', 'Nappa Leather', 'MBUX System', 'Adaptive Cruise', '360 Camera', 'Panoramic Roof', 'Low Mileage'],
  },
  {
    property_id: 'KCO-000018', listing_type: 'vehicle', category: 'Cars',
    title: 'Mercedes-Benz GLE 450 2025 — Luxury SUV',
    description: 'The 2025 Mercedes-Benz GLE 450 combines SUV capability with luxury refinement. Powered by a 3.0L inline-6 turbo engine with EQ Boost producing 375 horsepower and 4MATIC all-wheel drive. The spacious interior features MB-Tex upholstery, a 12.3-inch digital dashboard, and a Burmester sound system. Seven-seat configuration with power-folding third row. Includes trailer hitch, air suspension, and off-road driving modes. One owner, pristine condition, factory warranty active.',
    price: 20000, currency: 'USD', country: '', country_code: '',
    state: null, city: null, town: null,
    bedrooms: null, bathrooms: null, building_size: null, land_size: null,
    parking_spaces: null, property_type: 'SUV', furnished: null, listing_status: 'sale',
    images: vehicleGallery(VEHICLE.car), rating: 4.8, rating_count: 65, favorite_count: 48,
    features: ['3.0L Inline-6 Turbo', '375 HP', '4MATIC AWD', '7 Seats', 'Air Suspension', 'Burmester Audio', 'Trailer Hitch', 'Warranty Active'],
  },

  // === 10 NEW INTERNATIONAL HOMES (one per country) ===

  // 21. United States — Affordable Craftsman Bungalow
  {
    property_id: 'KCO-000021', listing_type: 'property', category: 'International Homes',
    title: 'Craftsman Bungalow with Covered Porch in Portland',
    description: 'A charming 1928 Craftsman bungalow in the heart of Portland\'s Alberta Arts District. This lovingly maintained home features original hardwood floors, built-in bookshelves, and a wood-burning fireplace. The renovated kitchen opens to a cozy dining nook with garden views. Two main-floor bedrooms share a fully updated bathroom, with a third bedroom and second bathroom upstairs. The covered front porch is perfect for morning coffee, and the fenced backyard includes raised garden beds and a detached one-car garage. Walk to cafes, galleries, and weekly farmers market.',
    price: 20000, currency: 'USD', country: 'United States', country_code: 'US',
    state: 'Oregon', city: 'Portland', town: 'Alberta Arts District',
    bedrooms: 3, bathrooms: 2, building_size: '1,450 sqft', land_size: '0.12 acres',
    parking_spaces: 1, property_type: 'Craftsman Bungalow', furnished: 'Unfurnished', listing_status: 'sale',
    year_built: 1928,
    images: newHomeGallery([5353939, 6835077, 5353946, 15888628, 5524205, 12332182, 8031883, 35698264, 33327061, 12227640], [34963015, 7168051, 33693815, 9102822, 33054908, 33994485]),
    rating: 4.5, rating_count: 38, favorite_count: 25,
    features: ['Hardwood Floors', 'Wood-Burning Fireplace', 'Covered Porch', 'Built-in Bookshelves', 'Detached Garage', 'Raised Garden Beds', 'Near Farmers Market', 'Updated Plumbing'],
  },
  // 22. Canada — Mid-range Victorian Heritage Home
  {
    property_id: 'KCO-000022', listing_type: 'property', category: 'International Homes',
    title: 'Restored Victorian Heritage Home in Vancouver',
    description: 'A grand 1905 Victorian heritage home on a tree-lined street in Vancouver\'s Kitsilano neighbourhood. This meticulously restored home retains its original woodwork, stained glass windows, and ornate fireplaces while offering modern comforts. The main floor features a formal parlour, dining room, and a renovated chef\'s kitchen with butler\'s pantry. Four bedrooms across the upper two floors, including a master suite with sitting area. The landscaped garden includes a patio and detached two-car garage. Steps from Kitsilano Beach and West 4th Avenue shopping.',
    price: 40000, currency: 'USD', country: 'Canada', country_code: 'CA',
    state: 'British Columbia', city: 'Vancouver', town: 'Kitsilano',
    bedrooms: 4, bathrooms: 3, building_size: '2,400 sqft', land_size: '0.15 acres',
    parking_spaces: 2, property_type: 'Victorian Heritage Home', furnished: 'Unfurnished', listing_status: 'sale',
    year_built: 1905,
    images: newHomeGallery([33835032, 37091039, 30419060, 35107473, 37091037, 36770370, 35014869, 36022211, 36770371, 15875708], [6489441, 36260762, 3718434, 36099150, 8135289, 37859439]),
    rating: 4.7, rating_count: 44, favorite_count: 31,
    features: ['Heritage Designation', 'Original Woodwork', 'Stained Glass Windows', 'Ornate Fireplaces', 'Butler\'s Pantry', 'Landscaped Garden', 'Detached Garage', 'Near Beach'],
  },
  // 23. United Kingdom — Affordable Victorian Terraced House
  {
    property_id: 'KCO-000023', listing_type: 'property', category: 'International Homes',
    title: 'Victorian Terraced House Near Manchester City Centre',
    description: 'A characterful 1895 Victorian terraced house in the popular Chorlton area of Manchester. This home has been thoughtfully updated while preserving period features including sash windows, high ceilings, and cast-iron fireplaces. The ground floor offers a bay-windowed living room, a separate dining room, and a modern galley kitchen leading to a compact rear courtyard garden. Two double bedrooms upstairs share a contemporary family bathroom. Excellent transport links with the Metrolink tram a three-minute walk away. Ideal for first-time buyers or as a city base.',
    price: 20000, currency: 'USD', country: 'United Kingdom', country_code: 'GB',
    state: 'England', city: 'Manchester', town: 'Chorlton',
    bedrooms: 2, bathrooms: 1, building_size: '850 sqft', land_size: '0.03 acres',
    parking_spaces: 0, property_type: 'Victorian Terraced House', furnished: 'Unfurnished', listing_status: 'sale',
    year_built: 1895,
    images: newHomeGallery([35402056, 30683472, 30683465, 35402058, 37623595, 29207330, 37623824, 15366525, 13657362, 16375856], [30992365, 38688304, 4906250, 14613397, 20053927, 7031719]),
    rating: 4.3, rating_count: 27, favorite_count: 18,
    features: ['Period Features', 'Sash Windows', 'Cast-Iron Fireplaces', 'Rear Courtyard Garden', 'Near Metrolink', 'Walk to Cafes', 'Double Glazing', 'Central Heating'],
  },
  // 24. Australia — Mid-range Contemporary Family Home
  {
    property_id: 'KCO-000024', listing_type: 'property', category: 'International Homes',
    title: 'Contemporary Family Home with Alfresco Dining in Melbourne',
    description: 'A modern 2015 family home in Melbourne\'s thriving eastern suburb of Box Hill. The open-plan living and dining area flows seamlessly to an alfresco entertaining zone with a built-in BBQ and paved patio. The kitchen features stone benchtops, a walk-in pantry, and premium stainless steel appliances. Four bedrooms include a master retreat with walk-in robe and en-suite. Ducted air conditioning, solar panels, and a double remote garage with internal access. Walking distance to Box Hill Central shopping, top-rated schools, and parklands.',
    price: 60000, currency: 'USD', country: 'Australia', country_code: 'AU',
    state: 'Victoria', city: 'Melbourne', town: 'Box Hill',
    bedrooms: 4, bathrooms: 2, building_size: '2,100 sqft', land_size: '0.2 acres',
    parking_spaces: 2, property_type: 'Contemporary Family Home', furnished: 'Unfurnished', listing_status: 'sale',
    year_built: 2015,
    images: newHomeGallery([30580640, 20296321, 7031405, 18078684, 27953061, 32115995, 7031411, 1974596, 7031581, 15422346], [38369490, 36511383, 30816307, 5178074, 7031216, 15657940]),
    rating: 4.6, rating_count: 52, favorite_count: 36,
    features: ['Open-Plan Living', 'Ducted Air Conditioning', 'Alfresco Dining', 'Solar Panels', 'Stone Benchtops', 'Walk-in Pantry', 'Double Garage', 'Near Top Schools'],
  },
  // 25. Germany — Mid-range Modern Apartment
  {
    property_id: 'KCO-000025', listing_type: 'property', category: 'International Homes',
    title: 'Modern Energy-Efficient Apartment in Berlin Mitte',
    description: 'A sleek 2018 apartment in a boutique energy-efficient development in Berlin\'s sought-after Mitte district. The residence features underfloor heating throughout, floor-to-ceiling windows with electric blinds, and a high-spec built-in kitchen with integrated appliances. Three bedrooms and two bathrooms, including an en-suite master. The private balcony overlooks a quiet inner courtyard. Building amenities include a lift, bicycle storage room, and a communal rooftop garden. Two minutes from the Rosenthaler Platz U-Bahn station and surrounded by galleries, restaurants, and shops.',
    price: 60000, currency: 'USD', country: 'Germany', country_code: 'DE',
    state: 'Berlin', city: 'Berlin', town: 'Mitte',
    bedrooms: 3, bathrooms: 2, building_size: '1,350 sqft', land_size: null,
    parking_spaces: 1, property_type: 'Modern Apartment', furnished: 'Unfurnished', listing_status: 'sale',
    year_built: 2018,
    images: newHomeGallery([33244441, 21071043, 22927128, 31656143, 9170385, 31656173, 14424262, 27459248, 37224965, 13812522], [7534560, 7614540, 7168026, 31602336, 19916748, 28957826]),
    rating: 4.6, rating_count: 41, favorite_count: 28,
    features: ['Underfloor Heating', 'Floor-to-Ceiling Windows', 'Built-in Kitchen', 'Private Balcony', 'Elevator', 'Bicycle Storage', 'Rooftop Garden', 'Energy Efficient'],
  },
  // 26. France — Luxury Château
  {
    property_id: 'KCO-000026', listing_type: 'property', category: 'International Homes',
    title: '18th-Century Château with Vineyard Views in Provence',
    description: 'A magnificent 1780 château set on 4.5 acres of manicured grounds in the heart of Provence. The grand entrance hall leads to formal reception rooms with original marble fireplaces, tall French windows, and parquet de chêne flooring. The gourmet kitchen opens to a shaded dining terrace overlooking the swimming pool and formal gardens. Eight bedrooms and six bathrooms across three floors, including a master wing with dressing room and private salon. The wine cellar is carved into the natural rock. Staff quarters and a helipad complete this exceptional estate. Thirty minutes from Avignon TGV station.',
    price: 60000, currency: 'USD', country: 'France', country_code: 'FR',
    state: 'Provence-Alpes-Côte d\'Azur', city: 'Avignon', town: 'Saint-Rémy-de-Provence',
    bedrooms: 8, bathrooms: 6, building_size: '6,500 sqft', land_size: '4.5 acres',
    parking_spaces: 6, property_type: 'Château', furnished: 'Partially Furnished', listing_status: 'sale',
    year_built: 1780,
    images: newHomeGallery([37305886, 37437492, 37878477, 16754892, 9088004, 17987528, 8143677, 33738275, 36794346, 38021449], [14011664, 36056363, 18285884, 36777559, 36099777, 7535063, 8142046, 6297086, 12700519, 30557566, 34290550, 15580470]),
    rating: 4.9, rating_count: 33, favorite_count: 52,
    features: ['Vineyard Views', 'Swimming Pool', 'Formal Gardens', 'Wine Cellar', 'Marble Fireplaces', 'Staff Quarters', 'Helipad', 'Smart Home System'],
  },
  // 27. Italy — Mid-range Tuscan Farmhouse
  {
    property_id: 'KCO-000027', listing_type: 'property', category: 'International Homes',
    title: 'Restored Tuscan Farmhouse with Olive Grove',
    description: 'A beautifully restored 1850 stone farmhouse nestled among 2.5 acres of olive groves in the Tuscan countryside near San Casciano. The home retains its authentic character with exposed chestnut beams, terracotta tile floors, and a wood-fired bread oven in the garden. The ground floor has a farmhouse kitchen with a stone sink, a dining room with fireplace, and a sitting room. Four bedrooms and three bathrooms, including a master with en-suite. The infinity-edge swimming pool overlooks rolling vineyards and the Chianti hills. An outdoor kitchen and dining area make this perfect for entertaining. Forty-five minutes from Florence.',
    price: 40000, currency: 'USD', country: 'Italy', country_code: 'IT',
    state: 'Tuscany', city: 'Florence', town: 'San Casciano in Val di Pesa',
    bedrooms: 4, bathrooms: 3, building_size: '2,800 sqft', land_size: '2.5 acres',
    parking_spaces: 3, property_type: 'Tuscan Farmhouse', furnished: 'Partially Furnished', listing_status: 'sale',
    year_built: 1850,
    images: newHomeGallery([7455600, 3714192, 37553978, 30259458, 34828574, 16879642, 36883157, 5063027, 37760096, 37436223], [27302957, 2079246, 7163654, 30089083, 20276493, 30463423]),
    rating: 4.8, rating_count: 47, favorite_count: 39,
    features: ['Olive Grove', 'Stone Construction', 'Chestnut Beams', 'Terracotta Floors', 'Wood-fired Oven', 'Infinity Pool', 'Vineyard Views', 'Outdoor Kitchen'],
  },
  // 28. Spain — Affordable Apartment
  {
    property_id: 'KCO-000028', listing_type: 'property', category: 'International Homes',
    title: 'Apartment with Catalan Vault Ceiling in Barcelona Gothic Quarter',
    description: 'A distinctive apartment in Barcelona\'s Gothic Quarter, featuring original Catalan vault ceilings and exposed brick walls. The 750 sqft layout includes a bright living area with a small balcony overlooking a historic lane, a compact but fully equipped kitchen, and two comfortable bedrooms sharing one bathroom. The building has a restored lift and a communal rooftop terrace with city views. Steps from Las Ramblas, the Boqueria market, and Barcelona Cathedral. An excellent entry point into one of Europe\'s most vibrant neighbourhoods.',
    price: 20000, currency: 'USD', country: 'Spain', country_code: 'ES',
    state: 'Catalonia', city: 'Barcelona', town: 'Barri Gòtic',
    bedrooms: 2, bathrooms: 1, building_size: '750 sqft', land_size: null,
    parking_spaces: 0, property_type: 'Apartment', furnished: 'Unfurnished', listing_status: 'sale',
    year_built: 1900,
    images: newHomeGallery([38510040, 32770929, 17274632, 17159074, 17159138, 15949268, 17274520, 17274519, 16674384, 14917630], [33537442, 12513477, 31145676, 57686, 19866402, 34266122]),
    rating: 4.4, rating_count: 35, favorite_count: 22,
    features: ['Catalan Vault Ceiling', 'Exposed Brick', 'Balcony', 'Rooftop Terrace', 'Near Las Ramblas', 'Walk to Beach', 'Air Conditioning', 'Elevator'],
  },
  // 29. Switzerland — Luxury Alpine Chalet
  {
    property_id: 'KCO-000029', listing_type: 'property', category: 'International Homes',
    title: 'Alpine Chalet with Matterhorn Views in Zermatt',
    description: 'An architect-designed 2020 chalet in the car-free alpine resort of Zermatt, offering uninterrupted views of the Matterhorn. The great room features floor-to-ceiling windows, a double-height stone fireplace, and an open chef\'s kitchen with Gaggenau appliances. Six en-suite bedrooms across three levels, each with mountain views. The lower level includes a wellness area with sauna, steam room, and a ski room with boot warmers. Underfloor heating throughout, triple-glazed windows, and a smart home system. A triple garage is accessible via the underground car park tunnel. A rare offering in one of the world\'s premier ski destinations.',
    price: 60000, currency: 'USD', country: 'Switzerland', country_code: 'CH',
    state: 'Valais', city: 'Zermatt', town: 'Winkelmatten',
    bedrooms: 6, bathrooms: 5, building_size: '4,200 sqft', land_size: '0.8 acres',
    parking_spaces: 3, property_type: 'Alpine Chalet', furnished: 'Fully Furnished', listing_status: 'sale',
    year_built: 2020,
    images: newHomeGallery([38965501, 38965502, 31900824, 32129370, 34229769, 16396624, 8904544, 30276941, 33659164, 17966432], [12713296, 35189706, 26886813, 18285931, 36420270, 18285439]),
    rating: 4.9, rating_count: 29, favorite_count: 44,
    features: ['Matterhorn Views', 'Floor-to-Ceiling Windows', 'Double-Height Fireplace', 'Sauna & Steam Room', 'Ski Room', 'Underfloor Heating', 'Triple Garage', 'Smart Home System'],
  },
  // 30. Sweden — Affordable Scandinavian Cabin
  {
    property_id: 'KCO-000030', listing_type: 'property', category: 'International Homes',
    title: 'Waterfront Scandinavian Cabin in Stockholm Archipelago',
    description: 'A contemporary 2010 Scandinavian cabin on the Stockholm archipelago island of Vaxholm. The open-plan living area features a wood-burning stove, large picture windows, and a designer kitchen with island. Three bedrooms and two bathrooms, with the master opening directly onto the deck. The 0.5-acre plot includes a private dock, a traditional wood-fired sauna by the water\'s edge, and mature pine forest surrounding the property. Triple-glazed windows and superior insulation ensure year-round comfort. A 30-minute ferry from Stockholm city centre. The perfect year-round retreat for nature lovers.',
    price: 40000, currency: 'USD', country: 'Sweden', country_code: 'SE',
    state: 'Stockholm', city: 'Stockholm', town: 'Vaxholm',
    bedrooms: 3, bathrooms: 2, building_size: '1,600 sqft', land_size: '0.5 acres',
    parking_spaces: 1, property_type: 'Scandinavian Cabin', furnished: 'Partially Furnished', listing_status: 'sale',
    year_built: 2010,
    images: newHomeGallery([4406354, 1365110, 18274228, 34164516, 33143867, 7911964, 11642005, 10608118, 11539578, 2294125], [29214399, 10670947, 2631746, 8583816, 6969997, 7587477]),
    rating: 4.6, rating_count: 31, favorite_count: 26,
    features: ['Waterfront', 'Wood-fired Sauna', 'Wood-burning Stove', 'Private Dock', 'Large Deck', 'Triple-Glazed Windows', 'Forest Views', 'Ferry to City'],
  },

];

// Real-world coordinates for every seeded property listing so showroom cards can
// render a map preview and the details page map can skip geocoding lookups.
const PROPERTY_COORDS = {
  'KCO-000001': [40.0330, -83.1583],  // Hilliard, OH
  'KCO-000002': [30.5083, -97.6789],  // Round Rock, TX
  'KCO-000003': [42.2529, -71.0023],  // Quincy, MA
  'KCO-000004': [43.7765, -79.2317],  // Scarborough, ON
  'KCO-000005': [35.1168, -80.7237],  // Matthews, NC
  'KCO-000006': [51.5051, -0.0196],   // Canary Wharf, London
  'KCO-000007': [36.4840, -4.9904],   // San Pedro de Alcántara, Marbella
  'KCO-000008': [48.8844, 2.2691],    // Neuilly-sur-Seine, Paris
  'KCO-000009': [-28.0890, 153.4533], // Burleigh Heads, Gold Coast
  'KCO-000010': [25.1972, 55.2744],   // Downtown Dubai
  'KCO-000011': [45.2269, -75.6831],  // Manotick, Ottawa
  'KCO-000012': [48.1615, 11.5780],   // Schwabing, Munich
  'KCO-000013': [39.9556, -86.0139],  // Fishers, IN
  'KCO-000014': [43.7666, 11.2478],   // Oltrarno, Florence
  'KCO-000015': [-28.0027, 153.4309], // Surfers Paradise
  'KCO-000016': [52.3744, 4.8821],    // Jordaan, Amsterdam
  'KCO-000021': [45.5615, -122.6501], // Alberta Arts District, Portland
  'KCO-000022': [49.2643, -123.1542], // Kitsilano, Vancouver
  'KCO-000023': [53.4431, -2.2729],   // Chorlton, Manchester
  'KCO-000024': [-37.8188, 145.1252], // Box Hill, Melbourne
  'KCO-000025': [52.5200, 13.4050],   // Berlin Mitte
  'KCO-000026': [43.7891, 4.8317],    // Saint-Rémy-de-Provence
  'KCO-000027': [43.6586, 11.1855],   // San Casciano in Val di Pesa
  'KCO-000028': [41.3831, 2.1767],    // Gothic Quarter, Barcelona
  'KCO-000029': [46.0207, 7.7491],    // Winkelmatten, Zermatt
  'KCO-000030': [59.4022, 18.3533],   // Vaxholm
};
for (const l of SHOWROOM_LISTINGS) {
  const c = PROPERTY_COORDS[l.property_id];
  if (c) { l.latitude = c[0]; l.longitude = c[1]; }
}

export function formatPrice(listing) {
  const formatted = listing.price.toLocaleString('en-US', { style: 'currency', currency: listing.currency || 'USD', maximumFractionDigits: 0 });
  return listing.price_period ? `${formatted}/mo` : formatted;
}

export function flagEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) return '';
  const codePoints = countryCode.toUpperCase().split('').map(c => 0x1F1E6 + c.charCodeAt(0) - 65);
  return String.fromCodePoint(...codePoints);
}

// Removes any AI branding, machine-generated phrases, and fake "Stock #STK-…"
// codes from customer-visible listing text so everything reads like a real,
// professional marketplace listing.
export function cleanListingText(text) {
  if (text == null) return text;
  let s = String(text);
  s = s.replace(/Stock\s+#?STK[-]?[\w-]*\.?/gi, '');
  s = s.replace(/\b(?:was\s+)?(?:curated|auto-created|created)\s+by\s+admin\s+ai(?:\s+on\s+[0-9TZ:.\-]+)?[^.]*\.?\s*/gi, '');
  s = s.replace(/\bscanned\s+by\s+[^.]*\.?\s*/gi, '');
  s = s.replace(/\bgenerated\s+by\s+ai\s+fallback\b/gi, 'professionally prepared');
  s = s.replace(/\b8K\s+AI[- ]?[Uu]pscaling(?:\s+[Ee]ngine)?\b/gi, 'Neo Quantum Processor 8K');
  s = s.replace(/\bAI[- ]?(?:managed|powered|curated|created|generated|product|listing|assistant|model|image|content|scan|repair|advertisement|marketing|architecture|automation|settings|chatbot|chat|upscaling)\b/gi, '');
  s = s.replace(/\bAdmin\s+AI\b/gi, '');
  s = s.replace(/\bAI\b/gi, '');
  s = s.replace(/\s{2,}/g, ' ');
  s = s.replace(/\s+([.,;:!?])/g, '$1');
  s = s.replace(/^\s*[,.;:]+\s*|\s*[,.;:]+\s*$/g, '');
  return s.trim();
}

export function cleanListing(listing) {
  if (!listing) return listing;
  listing.title = cleanListingText(listing.title);
  listing.description = cleanListingText(listing.description);
  if (Array.isArray(listing.features)) listing.features = listing.features.map(cleanListingText).filter(Boolean);
  if (Array.isArray(listing.highlights)) listing.highlights = listing.highlights.map(cleanListingText).filter(Boolean);
  if (Array.isArray(listing.tags)) listing.tags = listing.tags.map(cleanListingText).filter(Boolean);
  return listing;
}

// Lookup helper: find a listing by its property_id
const LISTING_MAP = new Map(SHOWROOM_LISTINGS.map(l => [l.property_id, l]));

export function getListingsByIds(ids) {
  return ids.map(id => LISTING_MAP.get(id)).filter(Boolean);
}

// ── Database product loading ──────────────────────────────────
// Products created by the AI Admin Assistant are saved to the
// showroom_listings table.  We fetch those rows at runtime and merge
// them with the hardcoded seed data so they appear on the marketplace
// automatically — no rebuild required.

let _dbListings = [];
let _dbLoaded = false;

export function getDBListings() { return _dbListings; }
export function isDBLoaded() { return _dbLoaded; }

export async function loadDBListings() {
  try {
    const { supabase } = await import('./supabase-client.js');
    const { listLocalShowroomListings } = await import('./local-showroom-store.js');
    const { data, error } = await supabase
      .from('showroom_listings')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });
    // Always merge database rows with the local fallback store so products that
    // were saved locally (while the database was unavailable) still show up on
    // the store. Database rows win on duplicate IDs.
    const rows = (error ? [] : (data || []));
    const dbIds = new Set(rows.map(row => row.property_id));
    for (const row of listLocalShowroomListings().filter(item => item.is_active !== false)) {
      if (row && row.property_id && !dbIds.has(row.property_id)) { dbIds.add(row.property_id); rows.push(row); }
    }
    const source = rows;
    _dbListings = source.map(row => ({
      ...row,
      images: Array.isArray(row.images) ? row.images : [],
      features: Array.isArray(row.features) ? row.features : [],
      highlights: Array.isArray(row.highlights) ? row.highlights : [],
      rating: Number(row.rating) || 0,
      rating_count: row.rating_count || 0,
      favorite_count: row.favorite_count || 0,
      price: Number(row.price) || 0,
    }));
    // Merge into the listing map (DB entries take priority on duplicate IDs)
    for (const l of _dbListings) LISTING_MAP.set(l.property_id, l);
    _dbLoaded = true;
    return _dbListings;
  } catch {
    _dbLoaded = true;
    return [];
  }
}

// Return ALL listings: hardcoded + database, deduplicated by property_id.
export function getAllListings() {
  const seen = new Set();
  const all = [];
  for (const l of _dbListings) {
    if (!seen.has(l.property_id)) { seen.add(l.property_id); all.push(l); }
  }
  for (const l of SHOWROOM_LISTINGS) {
    if (!seen.has(l.property_id)) { seen.add(l.property_id); all.push(l); }
  }
  return all;
}

// Find a single listing by property_id across both sources.
export function findListingById(id) {
  return LISTING_MAP.get(id) || null;
}
