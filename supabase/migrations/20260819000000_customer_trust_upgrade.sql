-- ──────────────────────────────────────────────────────────────
-- Customer Trust & Product Detail upgrade
-- Run this in Supabase SQL editor (owner/admin). Safe to re-run.
-- ──────────────────────────────────────────────────────────────

-- 0. Reviews are keyed by the PUBLIC Product ID (property_id) so the same
--    system works for catalog, seed and database products, and a review for
--    Product A can never appear on Product B. Also support review photos and
--    the Verified Purchase badge (only set for real approved orders).
ALTER TABLE public.product_reviews
  ADD COLUMN IF NOT EXISTS property_id text,
  ADD COLUMN IF NOT EXISTS review_photo text,
  ADD COLUMN IF NOT EXISTS is_verified_purchase boolean NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS idx_product_reviews_property ON public.product_reviews(property_id);

-- 1. Customers may submit reviews on any product they can view.
--    Reviews go live immediately (is_approved = true) keyed by Product ID.
DROP POLICY IF EXISTS "customer_insert_reviews" ON public.product_reviews;
CREATE POLICY "customer_insert_reviews" ON public.product_reviews FOR INSERT
  TO authenticated
  WITH CHECK (
    user_id = auth.uid()
    AND is_approved = true
    AND rating BETWEEN 1 AND 5
    AND property_id IS NOT NULL
  );

-- 2. Customers may delete only their own reviews.
DROP POLICY IF EXISTS "customer_delete_own_reviews" ON public.product_reviews;
CREATE POLICY "customer_delete_own_reviews" ON public.product_reviews FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

-- 3. Add SKU + product detail columns to showroom_listings (idempotent).
ALTER TABLE public.showroom_listings
  ADD COLUMN IF NOT EXISTS sku text,
  ADD COLUMN IF NOT EXISTS shipping_origin text,
  ADD COLUMN IF NOT EXISTS shipping_availability text DEFAULT 'available',
  ADD COLUMN IF NOT EXISTS return_eligibility text DEFAULT 'eligible',
  ADD COLUMN IF NOT EXISTS brand text,
  ADD COLUMN IF NOT EXISTS stock_quantity integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS weight text,
  ADD COLUMN IF NOT EXISTS dimensions text,
  ADD COLUMN IF NOT EXISTS shipping_info text,
  ADD COLUMN IF NOT EXISTS delivery_estimate text,
  ADD COLUMN IF NOT EXISTS product_location text;

-- 4. Product-specific FAQ entries (expandable Q&A on the details page).
CREATE TABLE IF NOT EXISTS public.product_faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id uuid REFERENCES public.showroom_listings(id) ON DELETE CASCADE,
  question text NOT NULL,
  answer text NOT NULL,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.product_faqs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_product_faqs" ON public.product_faqs;
CREATE POLICY "public_read_product_faqs" ON public.product_faqs FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "admin_write_product_faqs" ON public.product_faqs;
CREATE POLICY "admin_write_product_faqs" ON public.product_faqs FOR INSERT
  TO authenticated WITH CHECK (public.is_current_user_admin());
CREATE POLICY "admin_update_product_faqs" ON public.product_faqs FOR UPDATE
  TO authenticated USING (public.is_current_user_admin()) WITH CHECK (public.is_current_user_admin());
CREATE POLICY "admin_delete_product_faqs" ON public.product_faqs FOR DELETE
  TO authenticated USING (public.is_current_user_admin());

CREATE INDEX IF NOT EXISTS idx_product_faqs_listing ON public.product_faqs(listing_id);

-- 6. Review photos: public bucket, owner can upload to their own folder.
INSERT INTO storage.buckets (id, name, public)
VALUES ('review-photos', 'review-photos', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "review_photos_public_read" ON storage.objects;
CREATE POLICY "review_photos_public_read"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'review-photos');

DROP POLICY IF EXISTS "review_photos_owner_insert" ON storage.objects;
CREATE POLICY "review_photos_owner_insert"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'review-photos'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

DROP POLICY IF EXISTS "review_photos_owner_delete" ON storage.objects;
CREATE POLICY "review_photos_owner_delete"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'review-photos'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

-- 7. Verify purchases badge: only orders paid & verified grant it.
--    The checkout writes payment_receipts rows on success; listing_id there is
--    the property_id (text). This helper backfills is_verified_purchase for
--    approved orders, keyed by the review's property_id.
CREATE OR REPLACE FUNCTION public.mark_verified_purchases()
RETURNS void
LANGUAGE sql
SECURITY DEFINER
AS $$
  UPDATE public.product_reviews r
  SET is_verified_purchase = true
  WHERE r.is_verified_purchase IS NOT true
    AND r.user_id IS NOT NULL
    AND EXISTS (
      SELECT 1 FROM public.payment_receipts p
      WHERE p.user_id = r.user_id
        AND p.status = 'approved'
        AND p.listing_id = r.property_id
    );
$$;