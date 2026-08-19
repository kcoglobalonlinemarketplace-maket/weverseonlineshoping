#!/usr/bin/env node
/**
 * Backfill missing map coordinates for existing house/property listings.
 *
 * Every property with text location (address/town/city/state/country) but no
 * valid latitude/longitude gets geocoded via OpenStreetMap Nominatim and saved.
 * Properties that already have coordinates are verified (and kept). Respects
 * the Nominatim usage policy (1 request/second).
 *
 * Usage:
 *   VITE_SUPABASE_URL=... VITE_SUPABASE_ANON_KEY=... node scripts/backfill-property-maps.mjs
 */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const anonKey = process.env.VITE_SUPABASE_ANON_KEY;
if (!supabaseUrl || !anonKey) { console.error('Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY env vars'); process.exit(1); }
const supabase = createClient(supabaseUrl, anonKey, { auth: { persistSession: false } });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const isValidCoord = (n) => Number.isFinite(n) && n !== 0;

const { data: props, error } = await supabase
  .from('showroom_listings')
  .select('property_id,title,country,state,city,town,product_location,latitude,longitude')
  .eq('listing_type', 'property');
if (error) { console.error('Query failed:', error.message); process.exit(1); }

let ok = 0, skipped = 0, failed = 0, updated = 0;

for (const p of props || []) {
  const lat = parseFloat(p.latitude);
  const lng = parseFloat(p.longitude);
  const hasCoords = isValidCoord(lat) && isValidCoord(lng);
  const id = p.property_id || p.title || '?';

  if (hasCoords) {
    ok++;
    console.log(`OK   ${id} — already has coords (${lat.toFixed(5)}, ${lng.toFixed(5)})`);
    continue;
  }

  const query = [p.product_location, p.town, p.city, p.state, p.country].filter(Boolean).join(', ');
  if (!query) {
    skipped++;
    console.log(`SKIP ${id} — no location text`);
    continue;
  }

  let coords = null;
  for (let attempt = 0; attempt < 3 && !coords; attempt++) {
    try {
      const res = await fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + encodeURIComponent(query));
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      if (data && data[0]) coords = { latitude: parseFloat(data[0].lat), longitude: parseFloat(data[0].lon) };
    } catch { /* retry */ }
    if (!coords) await sleep(2000);
  }

  if (!coords) {
    failed++;
    console.log(`FAIL ${id} — could not geocode "${query}"`);
    continue;
  }

  const { error: uErr } = await supabase.from('showroom_listings').update(coords).eq('property_id', p.property_id);
  if (uErr) {
    failed++;
    console.log(`ERR  ${id} — ${uErr.message}`);
  } else {
    updated++;
    console.log(`SET  ${id} — "${query}" → ${coords.latitude.toFixed(5)}, ${coords.longitude.toFixed(5)}`);
  }
  await sleep(1100);
}

console.log(`\nDone. already-ok=${ok} updated=${updated} skipped=${skipped} failed=${failed}`);