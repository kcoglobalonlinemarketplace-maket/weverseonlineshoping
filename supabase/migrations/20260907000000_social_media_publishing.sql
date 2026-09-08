/*
# Social Media Publishing System

Complete automatic + manual social publishing backend for the marketplace.

Tables:
- social_settings          : single-row global automation master switches.
- social_platform_settings : per-platform configuration + requirements flags.
- social_accounts          : connected platform accounts. Access tokens are
                             stored ENCRYPTED (AES-256-GCM at the application
                             layer, key lives only in server env vars). The
                             client never receives tokens.
- social_automation_rules  : automatic posting rules (what / when / where).
- social_content_items     : admin-managed news / article items for auto posts.
- social_posts             : draft / scheduled / queued / publishing / published
                             / failed / cancelled queue + history.
- social_post_media        : media attached to a post.
- social_post_logs         : per-post info / warn / error log trail.
- social_publish_state     : per-platform lock, daily counters and counters.
- social_oauth_states      : short-lived OAuth `state` values for callbacks.

Security:
- ROW LEVEL SECURITY enabled on every table.
- Only admins (public.is_current_user_admin()) can read/write via the client.
  The server-side scheduler/publisher runs with the service_role key (bypasses
  RLS) and never exposes tokens to the browser.
- No passwords are collected anywhere in this system.
- Duplicate-post protection: unique partial index on (platform, dedupe_hash).

Safe to run multiple times.
*/

-- ═══════════════════════════════════════════════════════════════════
-- 1. social_settings (global automation master switch)
-- ═══════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.social_settings (
  id integer PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  auto_posting_enabled boolean NOT NULL DEFAULT false,
  automation_paused boolean NOT NULL DEFAULT false,
  require_approval boolean NOT NULL DEFAULT false,
  default_hashtags text NOT NULL DEFAULT '',
  default_caption_template text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

INSERT INTO public.social_settings (id)
VALUES (1)
ON CONFLICT (id) DO NOTHING;

-- ═══════════════════════════════════════════════════════════════════
-- 2. social_platform_settings
-- ═══════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.social_platform_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL UNIQUE,
  enabled boolean NOT NULL DEFAULT false,
  requires_approval boolean NOT NULL DEFAULT false,
  approval_note text,
  oauth_configured boolean NOT NULL DEFAULT false,
  connection_required boolean NOT NULL DEFAULT true,
  capability text NOT NULL DEFAULT 'text' CHECK (capability IN ('text','image','video','all')),
  default_caption text NOT NULL DEFAULT '',
  default_hashtags text NOT NULL DEFAULT '',
  min_interval_minutes integer NOT NULL DEFAULT 60,
  max_posts_per_day integer NOT NULL DEFAULT 5,
  config jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

INSERT INTO public.social_platform_settings (platform, enabled, requires_approval, approval_note, oauth_configured, connection_required, capability) VALUES
  ('tiktok',     true,  false, NULL, false, true,  'video'),
  ('telegram',   true,  false, NULL, false, true,  'all'),
  ('facebook',   false, true,  'Facebook Pages require a Meta app + Page Manage permission. Business verification may be required.', false, true, 'all'),
  ('instagram',  false, true,  'Instagram requires a connected Instagram Business/Creator account via Meta. App review needed for publishing.', false, true, 'image'),
  ('youtube',    false, true,  'YouTube requires a Google Cloud project with the YouTube Data API v3 enabled and OAuth consent approval.', false, true, 'video'),
  ('x',          false, true,  'X requires a developer app with OAUTH2 + write permissions. App review needed for production use.', false, true, 'all'),
  ('pinterest',  false, true,  'Pinterest requires app review to grant board:write:secret and pins:read/write scopes.', false, true, 'image'),
  ('linkedin',   false, true,  'LinkedIn requires an app with the w_member_social scope. Business pages need the Organisation API and approval.', false, true, 'all'),
  ('whatsapp',   false, true,  'WhatsApp Channels require a Meta Business portfolio + WABA with the WhatsApp Business Cloud API approved.', false, true, 'all')
ON CONFLICT (platform) DO NOTHING;

-- ═══════════════════════════════════════════════════════════════════
-- 3. social_accounts
-- ═══════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.social_accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL,
  platform_user_id text,
  account_name text,
  display_name text,
  avatar_url text,
  status text NOT NULL DEFAULT 'connected'
    CHECK (status IN ('connected','disconnected','error','revoked','requires_approval','expired')),
  access_token_enc text,
  refresh_token_enc text,
  token_expires_at timestamptz,
  refresh_token_expires_at timestamptz,
  scopes text[] NOT NULL DEFAULT '{}'::text[],
  raw_profile jsonb NOT NULL DEFAULT '{}'::jsonb,
  last_error text,
  requires_approval boolean NOT NULL DEFAULT false,
  approval_note text,
  extra jsonb NOT NULL DEFAULT '{}'::jsonb,
  disconnected_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_social_accounts_platform ON public.social_accounts(platform);
CREATE INDEX IF NOT EXISTS idx_social_accounts_status ON public.social_accounts(status);

-- ═══════════════════════════════════════════════════════════════════
-- 4. social_automation_rules
-- ═══════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.social_automation_rules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  enabled boolean NOT NULL DEFAULT false,
  paused boolean NOT NULL DEFAULT false,
  platforms text[] NOT NULL DEFAULT '{}'::text[],
  content_type text NOT NULL DEFAULT 'products'
    CHECK (content_type IN ('products','selected_products','promotions','content_items')),
  selected_ids jsonb NOT NULL DEFAULT '[]'::jsonb,
  schedule_type text NOT NULL DEFAULT 'daily'
    CHECK (schedule_type IN ('hourly','daily','weekly','interval','custom')),
  schedule_time text NOT NULL DEFAULT '09:00',
  schedule_days text[] NOT NULL DEFAULT '{"mon","tue","wed","thu","fri","sat","sun"}'::text[],
  interval_hours integer NOT NULL DEFAULT 24,
  custom_cron text,
  max_posts_per_day integer NOT NULL DEFAULT 1,
  approval_mode text NOT NULL DEFAULT 'auto' CHECK (approval_mode IN ('auto','manual')),
  caption_template text,
  include_price boolean NOT NULL DEFAULT true,
  include_link boolean NOT NULL DEFAULT true,
  hashtags text NOT NULL DEFAULT '',
  next_run_at timestamptz,
  last_run_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_social_rules_enabled ON public.social_automation_rules(enabled) WHERE enabled = true;
CREATE INDEX IF NOT EXISTS idx_social_rules_next_run ON public.social_automation_rules(next_run_at);

-- ═══════════════════════════════════════════════════════════════════
-- 5. social_content_items (news / articles for auto posting)
-- ═══════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.social_content_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  body text,
  image_url text,
  video_url text,
  link_url text,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- ═══════════════════════════════════════════════════════════════════
-- 6. social_posts (queue + history)
-- ═══════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.social_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL,
  platform_account_id uuid REFERENCES public.social_accounts(id) ON DELETE SET NULL,
  content_type text NOT NULL DEFAULT 'manual',
  source_type text,
  source_id text,
  status text NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft','scheduled','queued','publishing','published','failed','cancelled')),
  caption text,
  hashtags text NOT NULL DEFAULT '',
  media jsonb NOT NULL DEFAULT '[]'::jsonb,
  scheduled_for timestamptz,
  published_at timestamptz,
  platform_post_id text,
  platform_post_url text,
  dedupe_hash text,
  auto_generated boolean NOT NULL DEFAULT false,
  retry_count integer NOT NULL DEFAULT 0,
  max_retries integer NOT NULL DEFAULT 3,
  next_retry_at timestamptz,
  last_error text,
  error_detail jsonb NOT NULL DEFAULT '{}'::jsonb,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Duplicate-post protection: the same source content can only be queued /
-- published to the same platform once.
CREATE UNIQUE INDEX IF NOT EXISTS uq_social_posts_dedupe
  ON public.social_posts(platform, dedupe_hash)
  WHERE dedupe_hash IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_social_posts_status ON public.social_posts(status);
CREATE INDEX IF NOT EXISTS idx_social_posts_scheduled_for ON public.social_posts(scheduled_for) WHERE scheduled_for IS NOT NULL OR status IN ('queued','publishing');
CREATE INDEX IF NOT EXISTS idx_social_posts_next_retry ON public.social_posts(next_retry_at) WHERE status = 'failed';
CREATE INDEX IF NOT EXISTS idx_social_posts_created_at ON public.social_posts(created_at DESC);

-- ═══════════════════════════════════════════════════════════════════
-- 7. social_post_media
-- ═══════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.social_post_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid NOT NULL REFERENCES public.social_posts(id) ON DELETE CASCADE,
  url text NOT NULL,
  type text NOT NULL DEFAULT 'image' CHECK (type IN ('image','video')),
  position integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_social_post_media_post ON public.social_post_media(post_id);

-- ═══════════════════════════════════════════════════════════════════
-- 8. social_post_logs
-- ═══════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.social_post_logs (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  post_id uuid REFERENCES public.social_posts(id) ON DELETE CASCADE,
  platform text,
  level text NOT NULL DEFAULT 'info' CHECK (level IN ('info','warn','error')),
  message text NOT NULL,
  detail jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_social_post_logs_post ON public.social_post_logs(post_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_social_post_logs_created ON public.social_post_logs(created_at DESC);

-- ═══════════════════════════════════════════════════════════════════
-- 9. social_publish_state (per-platform lock + daily counters)
-- ═══════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.social_publish_state (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL UNIQUE,
  today_date text NOT NULL DEFAULT to_char(now(), 'YYYY-MM-DD'),
  posts_today integer NOT NULL DEFAULT 0,
  lock boolean NOT NULL DEFAULT false,
  lock_acquired_at timestamptz,
  lock_owner text,
  last_run_at timestamptz,
  next_run_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

INSERT INTO public.social_publish_state (platform)
SELECT unnest(ARRAY['tiktok','telegram','facebook','instagram','youtube','x','pinterest','linkedin','whatsapp'])
ON CONFLICT (platform) DO NOTHING;

-- ═══════════════════════════════════════════════════════════════════
-- 10. social_oauth_states
-- ═══════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.social_oauth_states (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL,
  state text NOT NULL UNIQUE,
  redirect_to text,
  expires_at timestamptz NOT NULL DEFAULT now() + interval '10 minutes',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_social_oauth_states_state ON public.social_oauth_states(state);

-- ═══════════════════════════════════════════════════════════════════
-- ROW LEVEL SECURITY — admin only (client), service_role bypasses.
-- ═══════════════════════════════════════════════════════════════════
ALTER TABLE public.social_settings           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_platform_settings  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_accounts           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_automation_rules   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_content_items      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_posts              ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_post_media         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_post_logs          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_publish_state      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_oauth_states       ENABLE ROW LEVEL SECURITY;

DO $$
DECLARE t text;
BEGIN
  FOREACH t IN ARRAY ARRAY[
    'social_settings',
    'social_platform_settings',
    'social_accounts',
    'social_automation_rules',
    'social_content_items',
    'social_posts',
    'social_post_media',
    'social_post_logs',
    'social_publish_state'
  ]
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', 'admin_select_' || t, t);
    EXECUTE format('CREATE POLICY %I ON public.%I FOR SELECT TO authenticated USING (public.is_current_user_admin())', 'admin_select_' || t, t);

    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', 'admin_insert_' || t, t);
    EXECUTE format('CREATE POLICY %I ON public.%I FOR INSERT TO authenticated WITH CHECK (public.is_current_user_admin())', 'admin_insert_' || t, t);

    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', 'admin_update_' || t, t);
    EXECUTE format('CREATE POLICY %I ON public.%I FOR UPDATE TO authenticated USING (public.is_current_user_admin()) WITH CHECK (public.is_current_user_admin())', 'admin_update_' || t, t);

    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', 'admin_delete_' || t, t);
    EXECUTE format('CREATE POLICY %I ON public.%I FOR DELETE TO authenticated USING (public.is_current_user_admin())', 'admin_delete_' || t, t);
  END LOOP;
END $$;

-- social_oauth_states is written by the server (service_role) and read for
-- validation by the server; no client policy needed (default deny).

-- ═══════════════════════════════════════════════════════════════════
-- Storage bucket: social-posts (public media used by platforms)
-- ═══════════════════════════════════════════════════════════════════
INSERT INTO storage.buckets (id, name, public)
VALUES ('social-posts', 'social-posts', true)
ON CONFLICT (id) DO UPDATE SET public = true;

DROP POLICY IF EXISTS "social_posts_public_read" ON storage.objects;
CREATE POLICY "social_posts_public_read"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'social-posts');

DROP POLICY IF EXISTS "social_posts_admin_insert" ON storage.objects;
CREATE POLICY "social_posts_admin_insert"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'social-posts' AND public.is_current_user_admin());

DROP POLICY IF EXISTS "social_posts_admin_update" ON storage.objects;
CREATE POLICY "social_posts_admin_update"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'social-posts' AND public.is_current_user_admin());

DROP POLICY IF EXISTS "social_posts_admin_delete" ON storage.objects;
CREATE POLICY "social_posts_admin_delete"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'social-posts' AND public.is_current_user_admin());