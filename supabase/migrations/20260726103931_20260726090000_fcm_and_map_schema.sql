/*
# FCM Device Tokens + Map Coordinates Schema

## Purpose
1. Adds a `device_tokens` table so Firebase Cloud Messaging (FCM) push notification
   tokens can be stored per user. The existing `send-order-notification` edge function
   will query this table to send push notifications when an order status changes.
2. Adds `latitude` and `longitude` numeric columns to `showroom_listings` so listing
   locations can be displayed on an OpenStreetMap (Leaflet) map on the property details
   page. These columns are nullable so existing rows are unaffected.

## New Tables

### `device_tokens`
- `id` (uuid, primary key)
- `user_id` (uuid, not null, references auth.users, defaults to auth.uid())
- `token` (text, not null) — the FCM registration token
- `platform` (text, default 'web') — 'web', 'android', or 'ios'
- `created_at` (timestamptz, default now())
- Unique constraint on (user_id, token) to prevent duplicate registrations.

## Modified Tables

### `showroom_listings`
- `latitude` (numeric, nullable) — geographic latitude for map display
- `longitude` (numeric, nullable) — geographic longitude for map display

## Security
- RLS enabled on `device_tokens`.
- Authenticated users can INSERT and SELECT their own device tokens.
- Authenticated users can DELETE their own device tokens.
- `showroom_listings` already has RLS enabled; no policy changes needed since the new
  columns are read alongside existing public-readable columns.
*/

CREATE TABLE IF NOT EXISTS device_tokens (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  token text NOT NULL,
  platform text NOT NULL DEFAULT 'web',
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, token)
);

ALTER TABLE device_tokens ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_tokens" ON device_tokens;
CREATE POLICY "select_own_tokens"
ON device_tokens FOR SELECT
TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_tokens" ON device_tokens;
CREATE POLICY "insert_own_tokens"
ON device_tokens FOR INSERT
TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_tokens" ON device_tokens;
CREATE POLICY "delete_own_tokens"
ON device_tokens FOR DELETE
TO authenticated USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_device_tokens_user ON device_tokens(user_id);

ALTER TABLE showroom_listings ADD COLUMN IF NOT EXISTS latitude numeric;
ALTER TABLE showroom_listings ADD COLUMN IF NOT EXISTS longitude numeric;
