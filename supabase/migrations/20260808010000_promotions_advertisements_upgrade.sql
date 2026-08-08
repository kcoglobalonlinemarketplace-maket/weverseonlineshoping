-- ─────────────────────────────────────────────────────────────
--  Advertisement Manager upgrade for the `promotions` table.
--  Adds the fields used by the homepage showcase ads and the
--  admin Advertisement Manager (image/video/poster media, labels,
--  click-through links, scheduling, and manual sort order).
--  Also creates the `advertisements` storage bucket (admin-only
--  writes, public reads) used for ad media uploads.
-- ─────────────────────────────────────────────────────────────

-- ── 1. New columns on public.promotions ──────────────────────
ALTER TABLE public.promotions
  ADD COLUMN IF NOT EXISTS image_url text,
  ADD COLUMN IF NOT EXISTS video_url text,
  ADD COLUMN IF NOT EXISTS poster_url text,
  ADD COLUMN IF NOT EXISTS ad_label text NOT NULL DEFAULT 'Featured',
  ADD COLUMN IF NOT EXISTS link_type text NOT NULL DEFAULT 'none'
    CHECK (link_type IN ('none','product','category','section')),
  ADD COLUMN IF NOT EXISTS link_target text,
  ADD COLUMN IF NOT EXISTS sort_order integer NOT NULL DEFAULT 0;

-- ── 2. Index for the homepage showcase query ─────────────────
CREATE INDEX IF NOT EXISTS idx_promotions_active_showcase
  ON public.promotions (is_active, sort_order, created_at DESC);

-- ── 3. `advertisements` storage bucket (public reads) ─────────
INSERT INTO storage.buckets (id, name, public)
VALUES ('advertisements', 'advertisements', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "public_read_advertisements" ON storage.objects;
CREATE POLICY "public_read_advertisements" ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'advertisements');

-- Writes are restricted to admins so only the dashboard can publish ad media.
DROP POLICY IF EXISTS "admin_upload_advertisements" ON storage.objects;
CREATE POLICY "admin_upload_advertisements" ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'advertisements' AND public.is_current_user_admin());

DROP POLICY IF EXISTS "admin_update_advertisements" ON storage.objects;
CREATE POLICY "admin_update_advertisements" ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'advertisements' AND public.is_current_user_admin())
  WITH CHECK (bucket_id = 'advertisements' AND public.is_current_user_admin());

DROP POLICY IF EXISTS "admin_delete_advertisements" ON storage.objects;
CREATE POLICY "admin_delete_advertisements" ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'advertisements' AND public.is_current_user_admin());
