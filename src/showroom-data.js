// Showroom Phase 1 — 20 professional sample listings
// Real estate + vehicles. Uses real Pexels stock photo URLs of actual homes.

import { HOUSE_KITCHEN_LISTINGS } from './home-kitchen-data.js';
import { APPLIANCE_SHOWCASE_LISTINGS } from './appliance-showcase-data.js';
import { APPLIANCE_ESSENTIALS_LISTINGS } from './appliance-essentials-data.js';
import { PET_LISTINGS } from './pet-data.js';
import { NEW_DOG_LISTINGS } from './dog-data.js';
import { MEN_LISTINGS } from './men-data.js';
import { WOMAN_LISTINGS } from './woman-data.js';

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
    price: 89500, currency: 'USD', country: 'United States', country_code: 'US',
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
    price: 245000, currency: 'USD', country: 'United States', country_code: 'US',
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
    price: 185000, currency: 'USD', country: 'United States', country_code: 'US',
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
    price: 320000, currency: 'USD', country: 'Canada', country_code: 'CA',
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
    price: 275000, currency: 'USD', country: 'United States', country_code: 'US',
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
    price: 350000, currency: 'USD', country: 'Spain', country_code: 'ES',
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
    price: 850000, currency: 'USD', country: 'France', country_code: 'FR',
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
    price: 295000, currency: 'USD', country: 'Canada', country_code: 'CA',
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
    price: 475000, currency: 'USD', country: 'Germany', country_code: 'DE',
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
    price: 165000, currency: 'USD', country: 'United States', country_code: 'US',
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
    price: 1850000, currency: 'USD', country: 'Italy', country_code: 'IT',
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
    price: 385000, currency: 'USD', country: 'Australia', country_code: 'AU',
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
    price: 65000, currency: 'USD', country: 'Netherlands', country_code: 'NL',
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
    price: 115000, currency: 'USD', country: '', country_code: '',
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
    price: 89500, currency: 'USD', country: '', country_code: '',
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
    price: 185000, currency: 'USD', country: 'United States', country_code: 'US',
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
    price: 285000, currency: 'USD', country: 'Canada', country_code: 'CA',
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
    price: 175000, currency: 'USD', country: 'United Kingdom', country_code: 'GB',
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
    price: 425000, currency: 'USD', country: 'Australia', country_code: 'AU',
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
    price: 390000, currency: 'USD', country: 'Germany', country_code: 'DE',
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
    price: 1250000, currency: 'USD', country: 'France', country_code: 'FR',
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
    price: 320000, currency: 'USD', country: 'Italy', country_code: 'IT',
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
    price: 165000, currency: 'USD', country: 'Spain', country_code: 'ES',
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
    price: 2800000, currency: 'USD', country: 'Switzerland', country_code: 'CH',
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
    price: 245000, currency: 'USD', country: 'Sweden', country_code: 'SE',
    state: 'Stockholm', city: 'Stockholm', town: 'Vaxholm',
    bedrooms: 3, bathrooms: 2, building_size: '1,600 sqft', land_size: '0.5 acres',
    parking_spaces: 1, property_type: 'Scandinavian Cabin', furnished: 'Partially Furnished', listing_status: 'sale',
    year_built: 2010,
    images: newHomeGallery([4406354, 1365110, 18274228, 34164516, 33143867, 7911964, 11642005, 10608118, 11539578, 2294125], [29214399, 10670947, 2631746, 8583816, 6969997, 7587477]),
    rating: 4.6, rating_count: 31, favorite_count: 26,
    features: ['Waterfront', 'Wood-fired Sauna', 'Wood-burning Stove', 'Private Dock', 'Large Deck', 'Triple-Glazed Windows', 'Forest Views', 'Ferry to City'],
  },

  // === SHOWROOM 2 — MEN'S CATEGORY (35 products) ===

  // 36. T-Shirt
  {
    property_id: 'KCO-000036', listing_type: 'product', category: 'Men',
    title: 'Premium Cotton Crew Neck T-Shirt — Heather Grey',
    description: 'A premium 100% combed cotton crew neck t-shirt in heather grey. Features a modern slim fit, reinforced collar, and pre-shrunk fabric for a perfect wash-and-wear experience. Soft, breathable, and versatile for layering or wearing alone. Ethically made and garment-dyed for a unique depth of colour.',
    price: 29, currency: 'USD', country: '', country_code: '',
    brand: 'Atlas Apparel', color: 'Heather Grey', size: 'S–XXL', material: '100% Combed Cotton',
    images: [PEXELS(806626, 1200), PEXELS(2451200, 1000), PEXELS(3760852, 1000), PEXELS(8217400, 1000), PEXELS(8217415, 1000)],
    rating: 4.5, rating_count: 128, favorite_count: 64,
    features: ['Pre-Shrunk', 'Reinforced Collar', 'Breathable', 'Garment-Dyed', 'Modern Slim Fit'],
  },
  // 37. Polo Shirt
  {
    property_id: 'KCO-000037', listing_type: 'product', category: 'Men',
    title: 'Classic Pique Polo Shirt — Navy Blue',
    description: 'A timeless navy blue pique knit polo shirt with a two-button placket and ribbed collar. Made from breathable cotton pique for all-day comfort. The tailored fit sits neatly between slim and regular for a polished look that works from the office to the weekend.',
    price: 49, currency: 'USD', country: '', country_code: '',
    brand: 'Harbor & Co.', color: 'Navy Blue', size: 'S–XXL', material: 'Cotton Pique',
    images: [PEXELS(264726, 1200), PEXELS(10536994, 1000), PEXELS(1736278, 1000), PEXELS(20763273, 1000), PEXELS(10952730, 1000)],
    rating: 4.6, rating_count: 89, favorite_count: 51,
    features: ['Two-Button Placket', 'Ribbed Collar', 'Breathable Pique', 'Tailored Fit'],
  },
  // 38. Dress Shirt
  {
    property_id: 'KCO-000038', listing_type: 'product', category: 'Men',
    title: 'Wrinkle-Resistant Dress Shirt — White',
    description: 'A crisp white dress shirt in wrinkle-resistant twill. Features a spread collar, adjustable barrel cuffs, and a slim fit through the torso. The no-iron fabric stays smooth straight out of the dryer, making it the easiest choice for a sharp office look every day.',
    price: 69, currency: 'USD', country: '', country_code: '',
    brand: 'Westminster', color: 'White', size: '15–18 Neck', material: 'Wrinkle-Resistant Cotton Twill',
    images: [PEXELS(10563910, 1200), PEXELS(11100267, 1000), PEXELS(11585380, 1000), PEXELS(15973340, 1000), PEXELS(30283441, 1000)],
    rating: 4.7, rating_count: 156, favorite_count: 82,
    features: ['No-Iron Fabric', 'Spread Collar', 'Barrel Cuffs', 'Slim Fit'],
  },
  // 39. Casual Shirt
  {
    property_id: 'KCO-000039', listing_type: 'product', category: 'Men',
    title: 'Oxford Button-Down Casual Shirt — Light Blue',
    description: 'A relaxed light blue Oxford button-down shirt with a soft unstructured collar and a straight hem for untucked wear. Woven from breathable cotton Oxford cloth with a slightly roomy fit. A versatile wardrobe staple that pairs with jeans, chinos, or shorts.',
    price: 55, currency: 'USD', country: '', country_code: '',
    brand: 'Brookside', color: 'Light Blue', size: 'S–XXL', material: 'Cotton Oxford',
    images: [PEXELS(30663372, 1200), PEXELS(32969108, 1000), PEXELS(8217461, 1000), PEXELS(9558711, 1000), PEXELS(4842655, 1000)],
    rating: 4.4, rating_count: 73, favorite_count: 38,
    features: ['Button-Down Collar', 'Soft Unstructured', 'Straight Hem', 'Roomy Fit'],
  },
  // 40. Hoodie
  {
    property_id: 'KCO-000040', listing_type: 'product', category: 'Men',
    title: 'Heavyweight Fleece Hoodie — Charcoal Black',
    description: 'A 400gsm heavyweight fleece pullover hoodie in charcoal black. Features a double-layer hood with drawcord, kangaroo pocket, and ribbed cuffs and hem. Brushed interior for warmth and softness. Built to last with reinforced stitching at all stress points.',
    price: 79, currency: 'USD', country: '', country_code: '',
    brand: 'Ironclad', color: 'Charcoal Black', size: 'S–XXL', material: '400gsm Cotton Fleece',
    images: [PEXELS(1634839, 1200), PEXELS(2108816, 1000), PEXELS(8408556, 1000), PEXELS(12039633, 1000), PEXELS(9775732, 1000)],
    rating: 4.7, rating_count: 201, favorite_count: 117,
    features: ['400gsm Heavyweight', 'Double-Layer Hood', 'Kangaroo Pocket', 'Brushed Interior', 'Reinforced Stitching'],
  },
  // 41. Sweatshirt
  {
    property_id: 'KCO-000041', listing_type: 'product', category: 'Men',
    title: 'Crew Neck Sweatshirt — Olive Green',
    description: 'A mid-weight cotton-blend crew neck sweatshirt in olive green. Features a ribbed V-neck inset, ribbed cuffs and waistband, and a fleece-lined interior for warmth without bulk. A clean, minimal design that layers well under jackets or over a tee.',
    price: 65, currency: 'USD', country: '', country_code: '',
    brand: 'Northvale', color: 'Olive Green', size: 'S–XXL', material: 'Cotton-Blend Fleece',
    images: [PEXELS(10133278, 1200), PEXELS(11340657, 1000), PEXELS(8217406, 1000), PEXELS(13431729, 1000), PEXELS(15127546, 1000)],
    rating: 4.5, rating_count: 94, favorite_count: 56,
    features: ['Ribbed V-Neck Inset', 'Fleece-Lined', 'Mid-Weight', 'Minimal Design'],
  },
  // 42. Jacket
  {
    property_id: 'KCO-000042', listing_type: 'product', category: 'Men',
    title: 'Waterproof Bomber Jacket — Matte Black',
    description: 'A matte black waterproof bomber jacket with a full-length zip, ribbed collar and cuffs, and two zippered hand-warmer pockets. The outer shell is seam-sealed for full weather protection while the lightweight insulation keeps you warm without restricting movement. Includes an interior chest pocket.',
    price: 129, currency: 'USD', country: '', country_code: '',
    brand: 'Vanguard', color: 'Matte Black', size: 'S–XXL', material: 'Seam-Sealed Nylon Shell',
    images: [PEXELS(1697570, 1200), PEXELS(11285597, 1000), PEXELS(9286989, 1000), PEXELS(6044143, 1000), PEXELS(11032688, 1000)],
    rating: 4.6, rating_count: 112, favorite_count: 73,
    features: ['Waterproof', 'Seam-Sealed', 'Full-Length Zip', 'Interior Pocket', 'Lightweight Insulation'],
  },
  // 43. Coat
  {
    property_id: 'KCO-000043', listing_type: 'product', category: 'Men',
    title: 'Wool-Blend Overcoat — Camel',
    description: 'A tailored camel wool-blend overcoat with a single-breasted three-button front and notch lapel. Fully lined with two exterior flap pockets and an interior pocket. The mid-length cut falls just below the knee for elegant coverage. A refined outerwear piece for cold-weather sophistication.',
    price: 249, currency: 'USD', country: '', country_code: '',
    brand: 'Donatello', color: 'Camel', size: 'S–XXL', material: '70% Wool / 30% Polyester',
    images: [PEXELS(13122356, 1200), PEXELS(14693247, 1000), PEXELS(19380819, 1000), PEXELS(19807755, 1000), PEXELS(19109162, 1000)],
    rating: 4.8, rating_count: 67, favorite_count: 44,
    features: ['Wool Blend', 'Notch Lapel', 'Fully Lined', 'Mid-Length', 'Three-Button Front'],
  },
  // 44. Blazer
  {
    property_id: 'KCO-000044', listing_type: 'product', category: 'Men',
    title: 'Unstructured Linen Blazer — Sand Beige',
    description: 'An unstructured sand beige linen blazer with a soft natural shoulder and patch pockets. The breathable linen fabric and unlined construction make it ideal for warm-weather events and smart-casual occasions. Features a two-button front and double back vent for ease of movement.',
    price: 189, currency: 'USD', country: '', country_code: '',
    brand: 'Riviera', color: 'Sand Beige', size: 'S–XXL', material: '100% Linen',
    images: [PEXELS(12975963, 1200), PEXELS(19807757, 1000), PEXELS(19133954, 1000), PEXELS(19800418, 1000), PEXELS(6766299, 1000)],
    rating: 4.6, rating_count: 54, favorite_count: 31,
    features: ['Unstructured', 'Patch Pockets', 'Unlined', 'Double Back Vent', 'Breathable Linen'],
  },
  // 45. Suit
  {
    property_id: 'KCO-000045', listing_type: 'product', category: 'Men',
    title: 'Two-Piece Slim Fit Suit — Charcoal Grey',
    description: 'A sharp two-piece suit in charcoal grey with a slim-fit notch-lapel jacket and flat-front trousers. The jacket features a two-button front, side vents, and functional surgeon cuffs. Trousers have a tapered leg with an unfinished hem for custom tailoring. Wrinkle-resistant travel fabric for a crisp look all day.',
    price: 399, currency: 'USD', country: '', country_code: '',
    brand: 'Sartoro', color: 'Charcoal Grey', size: '36–46 Regular', material: 'Wool-Blend Travel Fabric',
    images: [PEXELS(12377231, 1200), PEXELS(12848320, 1000), PEXELS(12911890, 1000), PEXELS(13801831, 1000), PEXELS(1550895, 1000)],
    rating: 4.8, rating_count: 143, favorite_count: 88,
    features: ['Slim Fit', 'Notch Lapel', 'Side Vents', 'Surgeon Cuffs', 'Flat-Front Trousers', 'Wrinkle-Resistant'],
  },
  // 46. Jeans
  {
    property_id: 'KCO-000046', listing_type: 'product', category: 'Men',
    title: 'Slim Fit Stretch Jeans — Indigo Wash',
    description: 'A pair of indigo wash slim fit jeans with a touch of stretch for comfort. Features a mid-rise waist, five-pocket styling, and a tapered leg opening. The dark indigo dye fades naturally with wear for a personalized look. Reinforced stress points and a durable brass button fly.',
    price: 89, currency: 'USD', country: '', country_code: '',
    brand: 'Denim Lab', color: 'Indigo Wash', size: '30–38 Waist', material: '98% Cotton / 2% Elastane',
    images: [PEXELS(1082526, 1200), PEXELS(1365363, 1000), PEXELS(17630811, 1000), PEXELS(17720437, 1000), PEXELS(17720471, 1000)],
    rating: 4.5, rating_count: 187, favorite_count: 102,
    features: ['Slim Fit', 'Stretch Denim', 'Five-Pocket', 'Mid-Rise', 'Tapered Leg'],
  },
  // 47. Trousers
  {
    property_id: 'KCO-000047', listing_type: 'product', category: 'Men',
    title: 'Chino Trousers — Khaki',
    description: 'A versatile pair of khaki chino trousers with a straight leg and a clean flat front. Made from brushed cotton twill with a slight stretch for comfort. Features slant pockets, a button-through back pocket, and a zip fly. A wardrobe essential that transitions from office to weekend effortlessly.',
    price: 65, currency: 'USD', country: '', country_code: '',
    brand: 'Park Lane', color: 'Khaki', size: '30–40 Waist', material: 'Cotton Twill with Stretch',
    images: [PEXELS(17265364, 1200), PEXELS(17720474, 1000), PEXELS(17745134, 1000), PEXELS(18031844, 1000), PEXELS(18186106, 1000)],
    rating: 4.4, rating_count: 76, favorite_count: 42,
    features: ['Straight Leg', 'Flat Front', 'Slant Pockets', 'Stretch Twill', 'Zip Fly'],
  },
  // 48. Cargo Pants
  {
    property_id: 'KCO-000048', listing_type: 'product', category: 'Men',
    title: 'Ripstop Cargo Pants — Forest Green',
    description: 'Durable forest green ripstop cargo pants with six pockets including bellowed leg cargo pockets. The ripstop fabric resists tearing and abrasion, while the gusseted crotch and articulated knees provide full range of motion. Drawcord ankle cinches keep out debris. Built for work and outdoor adventures.',
    price: 75, currency: 'USD', country: '', country_code: '',
    brand: 'Terraform', color: 'Forest Green', size: '30–38 Waist', material: 'Ripstop Cotton',
    images: [PEXELS(10133273, 1200), PEXELS(14428671, 1000), PEXELS(22856154, 1000), PEXELS(26425708, 1000), PEXELS(30415877, 1000)],
    rating: 4.5, rating_count: 98, favorite_count: 61,
    features: ['Ripstop Fabric', 'Six Pockets', 'Articulated Knees', 'Gusseted Crotch', 'Drawcord Ankles'],
  },
  // 49. Joggers
  {
    property_id: 'KCO-000049', listing_type: 'product', category: 'Men',
    title: 'Fleece-Lined Joggers — Slate Grey',
    description: 'Comfortable slate grey joggers with a tapered fit, elastic drawcord waist, and ribbed ankle cuffs. The fleece-lined interior provides warmth and softness, while the four-way stretch fabric moves with you. Two side pockets and a zippered back pocket keep essentials secure. Perfect for lounging or light activity.',
    price: 55, currency: 'USD', country: '', country_code: '',
    brand: 'Pace', color: 'Slate Grey', size: 'S–XXL', material: 'Fleece-Lined Polyester Blend',
    images: [PEXELS(5319371, 1200), PEXELS(5319373, 1000), PEXELS(17135740, 1000), PEXELS(4554337, 1000), PEXELS(5604021, 1000)],
    rating: 4.6, rating_count: 142, favorite_count: 87,
    features: ['Fleece-Lined', 'Four-Way Stretch', 'Drawcord Waist', 'Zip Back Pocket', 'Tapered Fit'],
  },
  // 50. Shorts
  {
    property_id: 'KCO-000050', listing_type: 'product', category: 'Men',
    title: 'Quick-Dry Cargo Shorts — Stone Beige',
    description: 'Lightweight stone beige cargo shorts with a 9-inch inseam and quick-dry fabric. Features six pockets including side cargo pockets with flap closures. The moisture-wicking material and mesh pocket bags keep you cool and dry in hot weather. A built-in webbing belt ensures a perfect fit.',
    price: 45, currency: 'USD', country: '', country_code: '',
    brand: 'Trailhead', color: 'Stone Beige', size: '30–38 Waist', material: 'Quick-Dry Nylon',
    images: [PEXELS(10341113, 1200), PEXELS(10484479, 1000), PEXELS(10506088, 1000), PEXELS(17119884, 1000), PEXELS(10484502, 1000)],
    rating: 4.3, rating_count: 67, favorite_count: 35,
    features: ['Quick-Dry', '9-Inch Inseam', 'Six Pockets', 'Moisture-Wicking', 'Built-In Belt'],
  },
  // 51. Sneakers
  {
    property_id: 'KCO-000051', listing_type: 'product', category: 'Men',
    title: 'Minimal Leather Sneakers — White',
    description: 'A pair of clean white minimal leather sneakers with a cupsole construction and a padded leather lining. The full-grain leather upper is resoleable, and the natural rubber outsole provides reliable grip. A timeless design that pairs with everything from jeans to tailored trousers.',
    price: 119, currency: 'USD', country: '', country_code: '',
    brand: 'Mercer', color: 'White', size: '7–13 US', material: 'Full-Grain Leather',
    images: [PEXELS(2529148, 1200), PEXELS(1456733, 1000), PEXELS(5526492, 1000), PEXELS(5710076, 1000), PEXELS(2579760, 1000)],
    rating: 4.7, rating_count: 213, favorite_count: 134,
    features: ['Full-Grain Leather', 'Resoleable', 'Cupsole Construction', 'Padded Lining', 'Natural Rubber Outsole'],
  },
  // 52. Running Shoes
  {
    property_id: 'KCO-000052', listing_type: 'product', category: 'Men',
    title: 'Cushioned Running Shoes — Neon Yellow',
    description: 'High-performance neon yellow running shoes with a responsive cushioned midsole and a breathable engineered mesh upper. The 8mm drop and rocker geometry promote a smooth stride, while the durable outsole rubber handles road and light trail. Reflective detailing for low-light visibility.',
    price: 139, currency: 'USD', country: '', country_code: '',
    brand: 'Kinetics', color: 'Neon Yellow', size: '7–13 US', material: 'Engineered Mesh / EVA Midsole',
    images: [PEXELS(13450843, 1200), PEXELS(13560373, 1000), PEXELS(13691720, 1000), PEXELS(15229823, 1000), PEXELS(16350687, 1000)],
    rating: 4.6, rating_count: 178, favorite_count: 95,
    features: ['Responsive Cushioning', 'Breathable Mesh', '8mm Drop', 'Rocker Geometry', 'Reflective Detailing'],
  },
  // 53. Boots
  {
    property_id: 'KCO-000053', listing_type: 'product', category: 'Men',
    title: 'Leather Chelsea Boots — Tobacco Brown',
    description: 'A pair of tobacco brown leather Chelsea boots with elastic side gores and a pull-on loop. The Goodyear-welted construction allows resoling for years of wear, and the full-grain leather develops a rich patina over time. A stacked leather heel and rubber forefoot overlay provide traction and durability.',
    price: 189, currency: 'USD', country: '', country_code: '',
    brand: 'Cobblestone', color: 'Tobacco Brown', size: '7–13 US', material: 'Full-Grain Leather',
    images: [PEXELS(27381293, 1200), PEXELS(27352801, 1000), PEXELS(27353347, 1000), PEXELS(2112753, 1000), PEXELS(12210270, 1000)],
    rating: 4.7, rating_count: 96, favorite_count: 58,
    features: ['Goodyear Welted', 'Elastic Side Gores', 'Resoleable', 'Stacked Leather Heel', 'Full-Grain Leather'],
  },
  // 54. Sandals
  {
    property_id: 'KCO-000054', listing_type: 'product', category: 'Men',
    title: 'Leather Slide Sandals — Tan',
    description: 'A pair of tan leather slide sandals with a contoured footbed and a dual-layer leather strap. The molded EVA midsole provides cushioning and arch support, while the durable rubber outsole offers grip on wet and dry surfaces. A comfortable, easy-wear option for warm days.',
    price: 59, currency: 'USD', country: '', country_code: '',
    brand: 'Soleil', color: 'Tan', size: '7–13 US', material: 'Leather / EVA Midsole',
    images: [PEXELS(27113461, 1200), PEXELS(26925251, 1000), PEXELS(26965818, 1000), PEXELS(27046150, 1000), PEXELS(31450985, 1000)],
    rating: 4.4, rating_count: 52, favorite_count: 28,
    features: ['Contoured Footbed', 'Arch Support', 'Dual-Layer Strap', 'Durable Rubber Outsole'],
  },
  // 55. Loafers
  {
    property_id: 'KCO-000055', listing_type: 'product', category: 'Men',
    title: 'Penny Loafers — Burgundy',
    description: 'A pair of burgundy penny loafers with a moccasin-stitched toe and a leather sole. The full-grain leather upper is lined with soft leather for comfort, and the leather-welted construction allows for resoling. A classic design that elevates both casual and tailored outfits.',
    price: 159, currency: 'USD', country: '', country_code: '',
    brand: 'Bellini', color: 'Burgundy', size: '7–13 US', material: 'Full-Grain Leather',
    images: [PEXELS(7413278, 1200), PEXELS(27063078, 1000), PEXELS(31935085, 1000), PEXELS(31935098, 1000), PEXELS(2929281, 1000)],
    rating: 4.6, rating_count: 71, favorite_count: 39,
    features: ['Moccasin-Stitched Toe', 'Leather Lined', 'Leather-Welted', 'Resoleable'],
  },
  // 56. Watches
  {
    property_id: 'KCO-000056', listing_type: 'product', category: 'Men',
    title: 'Automatic Dive Watch — Steel Blue Dial',
    description: 'A stainless steel automatic dive watch with a steel blue dial, 200m water resistance, and a sapphire crystal. The 40mm case houses a self-winding movement with a 42-hour power reserve. Features a unidirectional ceramic bezel, luminous hands and markers, and a solid steel bracelet with a diver extension. A precision instrument built for adventure.',
    price: 449, currency: 'USD', country: '', country_code: '',
    brand: 'Meridian', color: 'Steel Blue', size: '40mm Case', material: 'Stainless Steel / Sapphire',
    images: [PEXELS(11263067, 1200), PEXELS(14691505, 1000), PEXELS(15710086, 1000), PEXELS(167703, 1000), PEXELS(14808296, 1000)],
    rating: 4.8, rating_count: 167, favorite_count: 112,
    features: ['Automatic Movement', '200m Water Resistance', 'Sapphire Crystal', 'Ceramic Bezel', '42h Power Reserve', 'Diver Extension'],
  },
  // 57. Wallets
  {
    property_id: 'KCO-000057', listing_type: 'product', category: 'Men',
    title: 'Slim Bifold Leather Wallet — Cognac',
    description: 'A slim cognac brown bifold wallet handcrafted from full-grain leather. Features six card slots, a full-length cash pocket, and a quick-access ID window. The minimalist profile slips easily into a front pocket without bulk. Vegetable-tanned leather that ages beautifully with use.',
    price: 79, currency: 'USD', country: '', country_code: '',
    brand: 'Hide & Stitch', color: 'Cognac Brown', size: '4.5" x 3.25"', material: 'Full-Grain Vegetable-Tanned Leather',
    images: [PEXELS(14401958, 1200), PEXELS(14402037, 1000), PEXELS(14402038, 1000), PEXELS(14402040, 1000), PEXELS(14402041, 1000)],
    rating: 4.7, rating_count: 134, favorite_count: 78,
    features: ['Six Card Slots', 'ID Window', 'Full-Length Cash Pocket', 'Vegetable-Tanned', 'Slim Profile'],
  },
  // 58. Belts
  {
    property_id: 'KCO-000058', listing_type: 'product', category: 'Men',
    title: 'Full-Grain Leather Belt — Espresso Brown',
    description: 'An espresso brown full-grain leather belt with a solid brass roller buckle. The 1.25-inch width suits both jeans and trousers, and the single-prong roller design makes sizing easy. Cut from a single strip of leather with no fillers or bonded layers for lasting durability.',
    price: 49, currency: 'USD', country: '', country_code: '',
    brand: 'Hide & Stitch', color: 'Espresso Brown', size: '30–42 Waist', material: 'Full-Grain Leather / Brass',
    images: [PEXELS(31367059, 1200), PEXELS(31367060, 1000), PEXELS(31959214, 1000), PEXELS(31959215, 1000), PEXELS(31959216, 1000)],
    rating: 4.6, rating_count: 88, favorite_count: 47,
    features: ['Full-Grain Leather', 'Solid Brass Buckle', '1.25" Width', 'Single Strip', 'Roller Buckle'],
  },
  // 59. Sunglasses
  {
    property_id: 'KCO-000059', listing_type: 'product', category: 'Men',
    title: 'Polarized Aviator Sunglasses — Gold Frame',
    description: 'A pair of gold-framed aviator sunglasses with green polarized lenses. The lightweight metal frame features adjustable nose pads and temple tips for a custom fit. Polarized lenses reduce glare and provide 100% UV protection. Includes a hard case and microfiber cleaning pouch.',
    price: 129, currency: 'USD', country: '', country_code: '',
    brand: 'Solis', color: 'Gold / Green', size: '58mm Lens', material: 'Metal Frame / Polarized Glass',
    images: [PEXELS(121795, 1200), PEXELS(7013278, 1000), PEXELS(1461048, 1000), PEXELS(1013482, 1000), PEXELS(10837797, 1000)],
    rating: 4.6, rating_count: 145, favorite_count: 83,
    features: ['Polarized Lenses', '100% UV Protection', 'Adjustable Nose Pads', 'Lightweight Metal Frame', 'Hard Case Included'],
  },
  // 60. Caps
  {
    property_id: 'KCO-000060', listing_type: 'product', category: 'Men',
    title: 'Six-Panel Dad Cap — Washed Black',
    description: 'A washed black six-panel dad cap with a curved brim and an unstructured crown for a broken-in look. The cotton twill fabric softens with every wash, and the metal back buckle allows for an adjustable fit. A subtle embroidered logo sits on the left side panel.',
    price: 35, currency: 'USD', country: '', country_code: '',
    brand: 'Atlas Apparel', color: 'Washed Black', size: 'Adjustable', material: 'Cotton Twill',
    images: [PEXELS(185765, 1200), PEXELS(9558770, 1000), PEXELS(187881, 1000), PEXELS(211048, 1000), PEXELS(13900627, 1000)],
    rating: 4.4, rating_count: 76, favorite_count: 44,
    features: ['Six-Panel', 'Curved Brim', 'Unstructured Crown', 'Metal Buckle', 'Washed Cotton Twill'],
  },
  // 61. Hats
  {
    property_id: 'KCO-000061', listing_type: 'product', category: 'Men',
    title: 'Felt Fedora Hat — Charcoal Grey',
    description: 'A charcoal grey felt fedora with a grosgrain ribbon band and a structured center-dent crown. The wool felt is water-resistant and holds its shape beautifully. Features a raw-edge brim and an interior leather sweatband for comfort. A timeless accessory that adds polish to any outfit.',
    price: 89, currency: 'USD', country: '', country_code: '',
    brand: 'Donatello', color: 'Charcoal Grey', size: 'S–XL', material: 'Wool Felt',
    images: [PEXELS(12551957, 1200), PEXELS(16766943, 1000), PEXELS(465960, 1000), PEXELS(26873540, 1000), PEXELS(28128058, 1000)],
    rating: 4.5, rating_count: 61, favorite_count: 33,
    features: ['Wool Felt', 'Center-Dent Crown', 'Grosgrain Band', 'Raw-Edge Brim', 'Leather Sweatband'],
  },
  // 62. Backpacks
  {
    property_id: 'KCO-000062', listing_type: 'product', category: 'Men',
    title: 'Waterproof Commuter Backpack — Graphite',
    description: 'A 24L graphite waterproof commuter backpack with a padded 15-inch laptop compartment and a luggage pass-through strap. The roll-top closure keeps contents dry in any weather, and the air-mesh back panel prevents overheating. Includes a hidden anti-theft pocket and reflective accents for low-light visibility.',
    price: 149, currency: 'USD', country: '', country_code: '',
    brand: 'Vanguard', color: 'Graphite', size: '24L', material: 'TPU-Coated Nylon',
    images: [PEXELS(12067501, 1200), PEXELS(15806857, 1000), PEXELS(19850113, 1000), PEXELS(27869785, 1000), PEXELS(22434759, 1000)],
    rating: 4.7, rating_count: 198, favorite_count: 121,
    features: ['Waterproof', '15" Laptop Compartment', 'Roll-Top Closure', 'Anti-Theft Pocket', 'Reflective Accents', 'Luggage Pass-Through'],
  },
  // 63. Travel Bags
  {
    property_id: 'KCO-000063', listing_type: 'product', category: 'Men',
    title: 'Leather Duffel Travel Bag — Dark Brown',
    description: 'A 45L dark brown full-grain leather duffel bag with a detachable shoulder strap and dual carry handles. The spacious main compartment fits a weekend worth of essentials, with an interior zip pocket and a separate shoe compartment. Solid brass hardware and a cotton-twill lining. Built to last for years of travel.',
    price: 299, currency: 'USD', country: '', country_code: '',
    brand: 'Cobblestone', color: 'Dark Brown', size: '45L', material: 'Full-Grain Leather / Brass',
    images: [PEXELS(28726897, 1200), PEXELS(28758346, 1000), PEXELS(35101279, 1000), PEXELS(36462069, 1000), PEXELS(36687007, 1000)],
    rating: 4.8, rating_count: 87, favorite_count: 56,
    features: ['Full-Grain Leather', '45L Capacity', 'Detachable Strap', 'Shoe Compartment', 'Brass Hardware', 'Twill Lining'],
  },
  // 64. Bracelets
  {
    property_id: 'KCO-000064', listing_type: 'product', category: 'Men',
    title: 'Braided Leather Bracelet with Steel Clasp — Black',
    description: 'A black braided leather bracelet with a stainless steel magnetic clasp. The multi-strand braid gives a substantial look while remaining lightweight. The stainless steel clasp is hypoallergenic and secure. A versatile accessory that adds edge to both casual and smart outfits.',
    price: 39, currency: 'USD', country: '', country_code: '',
    brand: 'Meridian', color: 'Black', size: '7.5"–8.5"', material: 'Braided Leather / Stainless Steel',
    images: [PEXELS(12194338, 1200), PEXELS(12194336, 1000), PEXELS(12194298, 1000), PEXELS(10023037, 1000), PEXELS(1302623, 1000)],
    rating: 4.4, rating_count: 58, favorite_count: 31,
    features: ['Braided Leather', 'Magnetic Clasp', 'Hypoallergenic', 'Multi-Strand Braid'],
  },
  // 65. Necklaces
  {
    property_id: 'KCO-000065', listing_type: 'product', category: 'Men',
    title: 'Stainless Steel Dog Tag Necklace — Silver',
    description: 'A silver stainless steel dog tag necklace with a 24-inch ball chain. The tag is deeply engraved with a subtle geometric pattern and can be custom-engraved on the reverse. Hypoallergenic and tarnish-resistant. A modern take on a classic design.',
    price: 45, currency: 'USD', country: '', country_code: '',
    brand: 'Meridian', color: 'Silver', size: '24" Chain', material: 'Stainless Steel',
    images: [PEXELS(7134458, 1200), PEXELS(16109182, 1000), PEXELS(15691510, 1000), PEXELS(12421547, 1000), PEXELS(18609432, 1000)],
    rating: 4.5, rating_count: 64, favorite_count: 37,
    features: ['Stainless Steel', '24" Ball Chain', 'Engravable', 'Hypoallergenic', 'Tarnish-Resistant'],
  },
  // 66. Rings
  {
    property_id: 'KCO-000066', listing_type: 'product', category: 'Men',
    title: 'Tungsten Carbide Ring with Carbon Fiber Inlay — Gunmetal',
    description: 'A gunmetal tungsten carbide ring with a carbon fiber inlay and a brushed finish. The 8mm comfort-fit band is scratch-resistant and hypoallergenic. Tungsten carbide is one of the hardest metals used in jewelry, ensuring this ring maintains its finish for life. A bold, modern statement ring.',
    price: 89, currency: 'USD', country: '', country_code: '',
    brand: 'Meridian', color: 'Gunmetal', size: '7–13', material: 'Tungsten Carbide / Carbon Fiber',
    images: [PEXELS(10164658, 1200), PEXELS(10526289, 1000), PEXELS(12753202, 1000), PEXELS(12133990, 1000), PEXELS(13155692, 1000)],
    rating: 4.7, rating_count: 92, favorite_count: 61,
    features: ['Tungsten Carbide', 'Carbon Fiber Inlay', '8mm Comfort Fit', 'Scratch-Resistant', 'Hypoallergenic'],
  },
  // 67. Perfumes
  {
    property_id: 'KCO-000067', listing_type: 'product', category: 'Men',
    title: 'Eau de Parfum — Oud & Amber 100ml',
    description: 'A 100ml eau de parfum with a warm, woody scent profile. Top notes of bergamot and pink pepper give way to a heart of oud and leather, with a base of amber, sandalwood, and musk. Long-lasting projection with moderate sillage. Presented in a weighted glass bottle with a magnetic cap.',
    price: 119, currency: 'USD', country: '', country_code: '',
    brand: 'Maison Noir', color: 'Amber Glass', size: '100ml', material: 'Eau de Parfum',
    images: [PEXELS(16089870, 1200), PEXELS(3785784, 1000), PEXELS(12461865, 1000), PEXELS(14211239, 1000), PEXELS(14490634, 1000)],
    rating: 4.6, rating_count: 156, favorite_count: 94,
    features: ['100ml', 'Oud & Amber', 'Long-Lasting', 'Magnetic Cap', 'Weighted Glass Bottle'],
  },
  // 68. Beard Care
  {
    property_id: 'KCO-000068', listing_type: 'product', category: 'Men',
    title: 'Beard Oil Kit — Cedar & Sandalwood',
    description: 'A complete beard care kit featuring a 30ml cedar and sandalwood beard oil, a boar bristle brush, and a wooden comb. The oil blend of argan and jojoba softens coarse hair and moisturizes the skin beneath. The boar bristle brush distributes oils evenly for a healthy shine. A perfect gift set.',
    price: 45, currency: 'USD', country: '', country_code: '',
    brand: 'Beard & Blade', color: 'Natural Wood', size: '30ml Oil', material: 'Argan / Jojoba / Boar Bristle',
    images: [PEXELS(3809173, 1200), PEXELS(905186, 1000), PEXELS(28557815, 1000), PEXELS(28664165, 1000), PEXELS(30263576, 1000)],
    rating: 4.5, rating_count: 113, favorite_count: 67,
    features: ['30ml Beard Oil', 'Boar Bristle Brush', 'Wooden Comb', 'Cedar & Sandalwood', 'Argan & Jojoba'],
  },
  // 69. Grooming Kits
  {
    property_id: 'KCO-000069', listing_type: 'product', category: 'Men',
    title: 'Complete Grooming Kit — 7 Piece Stainless Steel Set',
    description: 'A 7-piece stainless steel grooming kit including a nail clipper, toenail clipper, tweezers, scissors, a file, an ear pick, and a comb. All tools are made from surgical-grade stainless steel and come in a compact leather-look travel case. A practical and elegant set for daily or travel use.',
    price: 69, currency: 'USD', country: '', country_code: '',
    brand: 'Beard & Blade', color: 'Silver / Black Case', size: '7 Pieces', material: 'Surgical Stainless Steel',
    images: [PEXELS(6560380, 1200), PEXELS(36043168, 1000), PEXELS(32630376, 1000), PEXELS(32630382, 1000), PEXELS(32645070, 1000)],
    rating: 4.6, rating_count: 98, favorite_count: 52,
    features: ['7 Pieces', 'Surgical Steel', 'Travel Case', 'Nail Clipper', 'Tweezers', 'Scissors'],
  },
  // 70. Hair Clippers
  {
    property_id: 'KCO-000070', listing_type: 'product', category: 'Men',
    title: 'Cordless Hair Clipper with Titanium Blades',
    description: 'A cordless hair clipper with self-sharpening titanium blades and a digital motor for smooth, snag-free cutting. The lithium-ion battery provides 4 hours of runtime on a 2-hour charge. Includes 8 guide combs (1–8mm), a styling comb, scissors, and a cleaning brush. An LCD battery indicator keeps you informed.',
    price: 89, currency: 'USD', country: '', country_code: '',
    brand: 'Beard & Blade', color: 'Black / Silver', size: '8 Guide Combs', material: 'Titanium Blades',
    images: [PEXELS(10517484, 1200), PEXELS(10775080, 1000), PEXELS(16407082, 1000), PEXELS(18503633, 1000), PEXELS(11424756, 1000)],
    rating: 4.7, rating_count: 187, favorite_count: 103,
    features: ['Cordless', 'Titanium Blades', '4h Battery', '8 Guide Combs', 'LCD Indicator', 'Digital Motor'],
  },
];

// Home & Kitchen — 200 curated products appended to the marketplace listings.
SHOWROOM_LISTINGS.push(...HOUSE_KITCHEN_LISTINGS);

// Modern Home Appliances — 10 real world-famous products for the
// "Modern Home Appliances" section (former Heavy Equipment & Auto Parts).
SHOWROOM_LISTINGS.push(...APPLIANCE_SHOWCASE_LISTINGS);

// Home Appliance Essentials — real photos for the marketplace
// "Home Appliances" section (washers, dryers, cooling, fans, water,
// irons, and air purifiers).
SHOWROOM_LISTINGS.push(...APPLIANCE_ESSENTIALS_LISTINGS);

// Beautiful Pets — 15 dog breeds for sale in the "Pets & Dogs" section.
SHOWROOM_LISTINGS.push(...PET_LISTINGS);

// Beautiful Dogs — 15 extra gorgeous, healthy breeds shown at the front
// of the "Beautiful Dogs" line.
SHOWROOM_LISTINGS.push(...NEW_DOG_LISTINGS);

// Man — 90 international fashion & lifestyle products (one per category),
// product-only photos, powering the "Man" homepage section.
SHOWROOM_LISTINGS.push(...MEN_LISTINGS);

// Woman Love 💕 — 149 international beauty, fashion & lifestyle products
// (one per category), product-only photos from China/USA/Europe.
SHOWROOM_LISTINGS.push(...WOMAN_LISTINGS);

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
    const source = error ? listLocalShowroomListings().filter(row => row.is_active !== false) : (data || []);
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
