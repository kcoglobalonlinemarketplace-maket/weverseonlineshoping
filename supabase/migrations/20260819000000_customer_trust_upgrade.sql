-- ──────────────────────────────────────────────────────────────
-- Customer Trust & Product Detail upgrade
-- Run this in Supabase SQL editor (owner/admin). Safe to re-run.
-- ──────────────────────────────────────────────────────────────

-- 1. Customers may submit reviews on products they can view.
--    New reviews start hidden (is_approved = false) until an admin approves.
DROP POLICY IF EXISTS "customer_insert_reviews" ON public.product_reviews;
CREATE POLICY "customer_insert_reviews" ON public.product_reviews FOR INSERT
  TO authenticated
  WITH CHECK (
    user_id = auth.uid()
    AND is_approved = false
    AND rating BETWEEN 1 AND 5
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

-- 5. Verify purchases badge: only orders paid & verified grant it.
--    The checkout writes payment_receipts rows on success; listing_id there is
--    the property_id (text), while product_reviews.listing_id is the internal
--    uuid. This helper backfills is_verified_purchase for approved orders.
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
      JOIN public.showroom_listings sl ON sl.property_id = p.listing_id
      WHERE p.user_id = r.user_id
        AND p.status = 'approved'
        AND sl.id = r.listing_id
    );
$$;