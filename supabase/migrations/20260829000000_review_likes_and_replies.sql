-- 20260829000000_review_likes_and_replies.sql
-- Persistent ❤️ likes + 💬 reply comments for the "What Buyers Say" list.
-- Guests can like and reply WITHOUT an account:
--   • review_likes    — one row per (review_key, liker_id); Like toggles by
--                       inserting/deleting a row. liker_id is the signed-in
--                       user id or a device-generated anon id.
--   • review_comments — threaded replies typed on a product page. review_key
--                       is `seed-<hash>` for generated comments or `db-<id>`
--                       for real reviews in `product_reviews`.
-- Run this in the Supabase SQL editor (Dashboard → SQL Editor → New query).

CREATE TABLE IF NOT EXISTS public.review_likes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id text NOT NULL,
  review_key text NOT NULL,
  liker_id text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (review_key, liker_id)
);

CREATE INDEX IF NOT EXISTS idx_review_likes_property ON public.review_likes (property_id);
CREATE INDEX IF NOT EXISTS idx_review_likes_key ON public.review_likes (review_key);

ALTER TABLE public.review_likes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "review_likes_public_read" ON public.review_likes;
CREATE POLICY "review_likes_public_read" ON public.review_likes FOR SELECT USING (true);

DROP POLICY IF EXISTS "review_likes_public_insert" ON public.review_likes;

DROP POLICY IF EXISTS "review_likes_owner_delete" ON public.review_likes;

GRANT SELECT, INSERT, DELETE ON public.review_likes TO anon, authenticated, service_role;

CREATE TABLE IF NOT EXISTS public.review_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id text NOT NULL,
  review_key text NOT NULL,
  author text NOT NULL DEFAULT 'Guest',
  body text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_review_comments_property ON public.review_comments (property_id);
CREATE INDEX IF NOT EXISTS idx_review_comments_key ON public.review_comments (review_key);

ALTER TABLE public.review_comments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "review_comments_public_read" ON public.review_comments;
CREATE POLICY "review_comments_public_read" ON public.review_comments FOR SELECT USING (true);

DROP POLICY IF EXISTS "review_comments_public_insert" ON public.review_comments;

GRANT SELECT, INSERT ON public.review_comments TO anon, authenticated, service_role;