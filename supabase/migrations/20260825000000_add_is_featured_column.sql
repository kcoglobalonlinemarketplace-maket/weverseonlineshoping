-- Add the missing is_featured column to showroom_listings.
-- The publish_showroom_upsert RPC and admin JS reference this column but it
-- was never created in any prior migration, causing:
--   ERROR: column "is_featured" does not exist

ALTER TABLE public.showroom_listings
  ADD COLUMN IF NOT EXISTS is_featured boolean NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS idx_showroom_listings_featured
  ON public.showroom_listings(is_featured) WHERE is_featured = true;
