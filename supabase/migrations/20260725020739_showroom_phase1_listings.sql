/*
# Showroom Phase 1 — Listings & Favorites

## Purpose
Stores the 20 sample product listings for Showroom Phase 1 of the Weverse Online Shop.
Covers Real Estate (apartments, villas, mansions, beach houses, luxury condos, farm houses,
commercial buildings, hotels) and Vehicles (cars, motorhomes).

## New Tables

### `showroom_listings`
- `id` (uuid, primary key)
- `property_id` (text, unique) — KCO-branded ID, e.g. KCO-000001
- `listing_type` (text) — 'property' or 'vehicle'
- `category` (text) — e.g. 'Villas', 'Cars', 'Motorhomes'
- `title` (text)
- `description` (text)
- `price` (numeric) — listing price
- `price_period` (text, nullable) — 'month' for rentals, null for sales
- `currency` (text, default 'USD')
- `country` (text)
- `country_code` (text) — ISO 3166-1 alpha-2 for flag emoji
- `state` (text, nullable)
- `city` (text, nullable)
- `town` (text, nullable)
- `bedrooms` (int, nullable)
- `bathrooms` (int, nullable)
- `building_size` (text, nullable) — e.g. '2,500 sqft'
- `land_size` (text, nullable) — e.g. '0.5 acres'
- `parking_spaces` (int, nullable)
- `property_type` (text, nullable)
- `furnished` (text, nullable) — 'Furnished' or 'Unfurnished'
- `listing_status` (text, default 'sale') — 'sale' or 'rent'
- `images` (jsonb) — array of image URLs
- `features` (jsonb) — array of amenity strings
- `rating` (numeric, default 0) — average rating
- `rating_count` (int, default 0)
- `favorite_count` (int, default 0)
- `created_at` (timestamptz, default now())

### `showroom_favorites`
- `id` (uuid, primary key)
- `listing_id` (uuid, references showroom_listings)
- `session_key` (text) — identifies the browser session for anon users
- `created_at` (timestamptz, default now())

## Security
- RLS enabled on both tables.
- showroom_listings: public read (anon + authenticated), no public write (seeded via migration).
- showroom_favorites: public read + write (anon + authenticated) so unauthenticated visitors can favorite.
*/

CREATE TABLE IF NOT EXISTS showroom_listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id text UNIQUE NOT NULL,
  listing_type text NOT NULL CHECK (listing_type IN ('property','vehicle')),
  category text NOT NULL,
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  price numeric NOT NULL DEFAULT 0,
  price_period text,
  currency text NOT NULL DEFAULT 'USD',
  country text NOT NULL DEFAULT '',
  country_code text NOT NULL DEFAULT '',
  state text,
  city text,
  town text,
  bedrooms int,
  bathrooms int,
  building_size text,
  land_size text,
  parking_spaces int,
  property_type text,
  furnished text,
  listing_status text NOT NULL DEFAULT 'sale',
  images jsonb NOT NULL DEFAULT '[]'::jsonb,
  features jsonb NOT NULL DEFAULT '[]'::jsonb,
  rating numeric NOT NULL DEFAULT 0,
  rating_count int NOT NULL DEFAULT 0,
  favorite_count int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE showroom_listings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_showroom_listings" ON showroom_listings;
CREATE POLICY "public_read_showroom_listings"
ON showroom_listings FOR SELECT
TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS showroom_favorites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id uuid NOT NULL REFERENCES showroom_listings(id) ON DELETE CASCADE,
  session_key text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE showroom_favorites ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_favorites" ON showroom_favorites;
CREATE POLICY "public_read_favorites"
ON showroom_favorites FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_insert_favorites" ON showroom_favorites;
CREATE POLICY "public_insert_favorites"
ON showroom_favorites FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "public_delete_favorites" ON showroom_favorites;
CREATE POLICY "public_delete_favorites"
ON showroom_favorites FOR DELETE
TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_showroom_listings_type ON showroom_listings(listing_type);
CREATE INDEX IF NOT EXISTS idx_showroom_listings_category ON showroom_listings(category);
CREATE INDEX IF NOT EXISTS idx_showroom_favorites_session ON showroom_favorites(session_key);
