// Syncs static showroom data into Supabase via the bulk_upsert_showroom_listings RPC.
import { createClient } from '@supabase/supabase-js';
import { SHOWROOM_LISTINGS } from '../src/showroom-data.js';
import { TRUCK_LISTINGS } from '../src/truck-data.js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const anonKey = process.env.VITE_SUPABASE_ANON_KEY;
if (!supabaseUrl || !anonKey) { console.error('Missing env vars'); process.exit(1); }
const supabase = createClient(supabaseUrl, anonKey, { auth: { persistSession: false } });

function mapListing(l) {
  return {
    property_id: l.property_id,
    listing_type: l.listing_type,
    category: l.category || '',
    subcategory: l.subcategory || '',
    title: l.title,
    description: l.description || '',
    price: l.price || 0,
    currency: l.currency || 'USD',
    country: l.country || '',
    state: l.state || '',
    city: l.city || '',
    town: l.town || '',
    bedrooms: l.bedrooms ?? null,
    bathrooms: l.bathrooms ?? null,
    building_size: l.building_size || '',
    land_size: l.land_size || '',
    parking_spaces: l.parking_spaces ?? null,
    property_type: l.property_type || '',
    furnished: l.furnished || '',
    listing_status: l.listing_status || 'sale',
    features: l.features || [],
    tags: l.features || [],
    rating: l.rating || 0,
    rating_count: l.rating_count || 0,
    favorite_count: l.favorite_count || 0,
    sku: l.stock_number || l.property_id,
    is_active: true,
    specifications: {
      brand: l.brand || null,
      model: l.model || null,
      model_year: l.model_year || null,
      condition: l.condition || null,
      mileage: l.mileage || null,
      transmission: l.transmission || null,
      fuel_type: l.fuel_type || null,
      engine: l.engine || null,
      drive_type: l.drive_type || null,
      color: l.color || null,
      payload_capacity: l.payload_capacity || null,
      towing_capacity: l.towing_capacity || null,
      vin: l.vin || null,
      stock_number: l.stock_number || null,
    },
    seo_keywords: l.seo_keywords || [],
    images: l.images || [],
  };
}

async function sync() {
  const all = [...SHOWROOM_LISTINGS, ...TRUCK_LISTINGS];
  console.log(`Syncing ${all.length} listings...`);
  const rows = all.map(mapListing);
  const batch = 20;
  let total = 0;
  for (let i = 0; i < rows.length; i += batch) {
    const b = rows.slice(i, i + batch);
    const { data, error } = await supabase.rpc('bulk_upsert_showroom_listings', { p_data: b });
    if (error) console.error(`Batch ${i}: ${error.message}`);
    else { total += data || 0; console.log(`  ${i}-${i+b.length}: ${data} rows`); }
  }
  console.log(`Synced ${total} listings.`);

  // Force rebuild search index
  console.log('Rebuilding search index...');
  const { error: idxError } = await supabase.rpc('sync_search_index_force');
  if (idxError) console.log('Manual index rebuild not available, trigger handles it automatically.');

  const { count } = await supabase.from('search_index').select('*', { count: 'exact', head: true });
  console.log(`Search index: ${count} entries.`);

  // Verify brand/model populated
  const { data: verify } = await supabase.from('search_index').select('brand, model_number').not('brand', 'eq', '').limit(3);
  console.log('Brand sample:', verify);
}
sync().catch(e => { console.error(e); process.exit(1); });
