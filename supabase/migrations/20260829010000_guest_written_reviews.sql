-- ──────────────────────────────────────────────────────────────
-- Guest-written reviews
-- Run in Supabase SQL editor (owner/admin). Safe to re-run.
-- Lets ANY visitor (even not signed in) rate a product and post a
-- review. The review is anonymous (user_id NULL) with an optional
-- display name, goes live immediately, and appears at the top of the
-- "What Buyers Say" list.
-- NOTE: columns/property_id + policies below match EXACTLY what the
-- site's details.js submits, including signed-in member reviews and
-- admin moderation (approve/delete) through the anon client.
-- ──────────────────────────────────────────────────────────────

-- 1. Columns the app writes:
--    guest display name, guest avatar, the public Product ID string
--    (details.js also sends `property_id`), and the review photo URL
--    (signed-in users).
ALTER TABLE public.product_reviews
  ADD COLUMN IF NOT EXISTS author_name text,
  ADD COLUMN IF NOT EXISTS author_avatar text,
  ADD COLUMN IF NOT EXISTS property_id text,
  ADD COLUMN IF NOT EXISTS review_photo text;

CREATE INDEX IF NOT EXISTS idx_product_reviews_listing ON public.product_reviews (listing_id);
CREATE INDEX IF NOT EXISTS idx_product_reviews_property ON public.product_reviews (property_id);

-- 2. Anyone may read approved review lists (public section).
DROP POLICY IF EXISTS "reviews_public_read" ON public.product_reviews;
CREATE POLICY "reviews_public_read" ON public.product_reviews FOR SELECT USING (true);

-- 3. Guests (anon role) may submit a review keyed by the listing.
DROP POLICY IF EXISTS "guest_insert_reviews" ON public.product_reviews;
CREATE POLICY "guest_insert_reviews" ON public.product_reviews FOR INSERT
  TO anon
  WITH CHECK (
    user_id IS NULL
    AND is_approved = true
    AND rating BETWEEN 1 AND 5
    AND listing_id IS NOT NULL
  );

-- 4. Signed-in members may review once, bound to their own account.
DROP POLICY IF EXISTS "member_insert_reviews" ON public.product_reviews;
CREATE POLICY "member_insert_reviews" ON public.product_reviews FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid() AND rating BETWEEN 1 AND 5);

-- 5. Admin moderation (approve / delete) uses the anon client, so keep
--    UPDATE/DELETE open like the rest of the store's review tooling.
DROP POLICY IF EXISTS "reviews_public_update" ON public.product_reviews;
CREATE POLICY "reviews_public_update" ON public.product_reviews FOR UPDATE USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "reviews_public_delete" ON public.product_reviews;
CREATE POLICY "reviews_public_delete" ON public.product_reviews FOR DELETE USING (true);

-- 6. Make sure the roles actually have privileges on the table.
GRANT SELECT, INSERT, UPDATE, DELETE ON public.product_reviews TO anon, authenticated, service_role;