-- Complete, professional real-estate listings.
-- Adds the columns the property form, AI scanner, and details page need for a
-- full property listing: pricing (real vs discount), construction info,
-- location details, feature groups, home systems, legal/financial notes,
-- floor plan, nearby area, and trust/verification data.
-- Every column is nullable with safe defaults so existing rows are unaffected.

ALTER TABLE showroom_listings
  ADD COLUMN IF NOT EXISTS real_price numeric,
  ADD COLUMN IF NOT EXISTS year_built int,
  ADD COLUMN IF NOT EXISTS year_renovated int,
  ADD COLUMN IF NOT EXISTS half_bathrooms int,
  ADD COLUMN IF NOT EXISTS floors int,
  ADD COLUMN IF NOT EXISTS garage text,
  ADD COLUMN IF NOT EXISTS zip_code text,
  ADD COLUMN IF NOT EXISTS address text,
  ADD COLUMN IF NOT EXISTS landmarks jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS interior_features jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS exterior_features jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS home_systems jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS legal_info jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS risk_notes text,
  ADD COLUMN IF NOT EXISTS floor_plan jsonb,
  ADD COLUMN IF NOT EXISTS nearby_area jsonb,
  ADD COLUMN IF NOT EXISTS verification_status text DEFAULT 'Not verified',
  ADD COLUMN IF NOT EXISTS verification_date text,
  ADD COLUMN IF NOT EXISTS inspection_info text,
  ADD COLUMN IF NOT EXISTS documents jsonb DEFAULT '[]'::jsonb;

COMMENT ON COLUMN showroom_listings.real_price IS 'Original (real) market price used for the crossed-out comparison price; price holds the customer-facing (discount) price.';
COMMENT ON COLUMN showroom_listings.legal_info IS 'Array of {label, value, source} items where source is "Seller provided" or "Not verified" — never claimed as verified from a photo.';
COMMENT ON COLUMN showroom_listings.floor_plan IS 'Object {image, rooms:[{name,dimensions}], levels, total_area}';
COMMENT ON COLUMN showroom_listings.nearby_area IS 'Object {schools:[], hospitals:[], shopping:[], transportation:[], distances:[]}';
COMMENT ON COLUMN showroom_listings.verification_status IS 'One of "Not verified", "Pending verification", "Verified"';
COMMENT ON COLUMN showroom_listings.documents IS 'Array of document URLs (title/ownership, inspection reports, etc.)';