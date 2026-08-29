-- ──────────────────────────────────────────────────────────────
-- Guest-written reviews
-- Run in Supabase SQL editor (owner/admin). Safe to re-run.
-- Lets ANY visitor (even not signed in) rate a product and post a
-- review. The review is anonymous (user_id NULL) with an optional
-- display name, goes live immediately, and appears at the top of the
-- "What Buyers Say" list.
-- ──────────────────────────────────────────────────────────────

-- 1. Columns for a guest's optional display name.
ALTER TABLE public.product_reviews
  ADD COLUMN IF NOT EXISTS author_name text,
  ADD COLUMN IF NOT EXISTS author_avatar text;

-- 2. Guests (anon role) may submit a review keyed by the public Product ID.
DROP POLICY IF EXISTS "guest_insert_reviews" ON public.product_reviews;
CREATE POLICY "guest_insert_reviews" ON public.product_reviews FOR INSERT
  TO anon
  WITH CHECK (
    user_id IS NULL
    AND is_approved = true
    AND rating BETWEEN 1 AND 5
    AND property_id IS NOT NULL
  );

-- 3. Make sure the roles actually have privileges on the table.
GRANT SELECT, INSERT ON public.product_reviews TO anon, authenticated;