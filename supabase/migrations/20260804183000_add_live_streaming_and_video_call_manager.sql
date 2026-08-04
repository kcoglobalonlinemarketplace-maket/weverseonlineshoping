/*
# Add Live Streaming & Video Call Manager tables

## Purpose
Provide secure admin-only storage for streaming/video-call provider credentials and
manager state, while exposing a sanitized public live-state record for the
homepage live badge and embedded live player.
*/

CREATE TABLE IF NOT EXISTS public.admin_live_control (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  live_streaming_platforms jsonb NOT NULL DEFAULT '[]'::jsonb,
  video_call_providers jsonb NOT NULL DEFAULT '[]'::jsonb,
  live_stream_sessions jsonb NOT NULL DEFAULT '[]'::jsonb,
  video_call_rooms jsonb NOT NULL DEFAULT '[]'::jsonb,
  preferences jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS admin_live_control_singleton ON public.admin_live_control ((1));
INSERT INTO public.admin_live_control (id)
SELECT gen_random_uuid()
WHERE NOT EXISTS (SELECT 1 FROM public.admin_live_control);

ALTER TABLE public.admin_live_control ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "admin_read_live_control" ON public.admin_live_control;
CREATE POLICY "admin_read_live_control"
ON public.admin_live_control FOR SELECT
TO authenticated
USING (public.is_current_user_admin());

DROP POLICY IF EXISTS "admin_insert_live_control" ON public.admin_live_control;
CREATE POLICY "admin_insert_live_control"
ON public.admin_live_control FOR INSERT
TO authenticated
WITH CHECK (public.is_current_user_admin());

DROP POLICY IF EXISTS "admin_update_live_control" ON public.admin_live_control;
CREATE POLICY "admin_update_live_control"
ON public.admin_live_control FOR UPDATE
TO authenticated
USING (public.is_current_user_admin())
WITH CHECK (public.is_current_user_admin());

CREATE TABLE IF NOT EXISTS public.public_live_state (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  is_live boolean NOT NULL DEFAULT false,
  badge_text text NOT NULL DEFAULT 'LIVE NOW',
  headline text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  platform_labels jsonb NOT NULL DEFAULT '[]'::jsonb,
  embed_url text NOT NULL DEFAULT '',
  viewer_count integer NOT NULL DEFAULT 0,
  comment_count integer NOT NULL DEFAULT 0,
  stream_status text NOT NULL DEFAULT 'offline',
  session_id text NOT NULL DEFAULT '',
  notify_visitors boolean NOT NULL DEFAULT true,
  started_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS public_live_state_singleton ON public.public_live_state ((1));
INSERT INTO public.public_live_state (id)
SELECT gen_random_uuid()
WHERE NOT EXISTS (SELECT 1 FROM public.public_live_state);

ALTER TABLE public.public_live_state ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_live_state" ON public.public_live_state;
CREATE POLICY "public_read_live_state"
ON public.public_live_state FOR SELECT
TO anon, authenticated
USING (true);

DROP POLICY IF EXISTS "admin_insert_live_state" ON public.public_live_state;
CREATE POLICY "admin_insert_live_state"
ON public.public_live_state FOR INSERT
TO authenticated
WITH CHECK (public.is_current_user_admin());

DROP POLICY IF EXISTS "admin_update_live_state" ON public.public_live_state;
CREATE POLICY "admin_update_live_state"
ON public.public_live_state FOR UPDATE
TO authenticated
USING (public.is_current_user_admin())
WITH CHECK (public.is_current_user_admin());
