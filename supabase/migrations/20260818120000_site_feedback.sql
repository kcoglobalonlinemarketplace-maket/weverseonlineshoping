-- Site-wide Customer Feedback (trust/info area feedback form).
-- Visitors can type feedback without an account; submissions are hidden from
-- the public until an admin approves them. Admins manage via admin dashboard.

CREATE TABLE IF NOT EXISTS public.site_feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  rating smallint NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  feedback text NOT NULL DEFAULT '',
  is_approved boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_site_feedback_approved
  ON public.site_feedback (is_approved, created_at DESC);

ALTER TABLE public.site_feedback ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anyone_can_submit_feedback" ON public.site_feedback;
CREATE POLICY "anyone_can_submit_feedback" ON public.site_feedback FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "public_read_approved_feedback" ON public.site_feedback;
CREATE POLICY "public_read_approved_feedback" ON public.site_feedback FOR SELECT
  TO anon, authenticated USING (is_approved = true);

DROP POLICY IF EXISTS "admin_read_all_feedback" ON public.site_feedback;
CREATE POLICY "admin_read_all_feedback" ON public.site_feedback FOR SELECT
  TO authenticated USING (public.is_current_user_admin());

DROP POLICY IF EXISTS "admin_update_feedback" ON public.site_feedback;
CREATE POLICY "admin_update_feedback" ON public.site_feedback FOR UPDATE
  TO authenticated USING (public.is_current_user_admin()) WITH CHECK (public.is_current_user_admin());

DROP POLICY IF EXISTS "admin_delete_feedback" ON public.site_feedback;
CREATE POLICY "admin_delete_feedback" ON public.site_feedback FOR DELETE
  TO authenticated USING (public.is_current_user_admin());