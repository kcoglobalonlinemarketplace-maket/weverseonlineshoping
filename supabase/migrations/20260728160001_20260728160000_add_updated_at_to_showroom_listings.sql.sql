/*
# Add updated_at column to showroom_listings for tracking pending changes

1. Modified Tables
- `showroom_listings`: adds `updated_at` (timestamptz, defaults to now())
- A trigger automatically updates `updated_at` to now() on every UPDATE.

2. Security
- No RLS policy changes.

3. Important Notes
- This column lets the Publish & Deploy system detect which products were
  modified since the last deployment, so it can show a pending-changes summary.
- No existing data is modified — the column defaults to now() for all rows.
*/

ALTER TABLE showroom_listings
  ADD COLUMN IF NOT EXISTS updated_at timestamptz NOT NULL DEFAULT now();

CREATE OR REPLACE FUNCTION update_showroom_listings_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_showroom_listings_updated_at ON showroom_listings;
CREATE TRIGGER trg_showroom_listings_updated_at
  BEFORE UPDATE ON showroom_listings
  FOR EACH ROW
  EXECUTE FUNCTION update_showroom_listings_updated_at();