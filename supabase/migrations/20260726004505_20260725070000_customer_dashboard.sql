/*
# Customer Dashboard Tables

## Purpose
Adds tables needed for the full Customer Dashboard: multiple shipping
addresses, email notification preferences, and a customer support message
thread. Also expands the profiles table with an avatar URL and a few
optional fields.

## New Tables

### 1. shipping_addresses
Stores multiple shipping addresses per customer.
  - id            uuid PK
  - user_id        uuid → auth.users (owner)
  - label          text  (e.g. "Home", "Office")
  - full_name      text
  - phone          text
  - address_line1  text
  - address_line2  text (optional)
  - city           text
  - state          text
  - postal_code    text
  - country_code   text
  - is_default     boolean DEFAULT false
  - created_at     timestamptz

### 2. email_preferences
One row per customer controlling which notification emails they receive.
  - user_id              uuid PK → auth.users
  - order_updates        boolean DEFAULT true
  - payment_updates      boolean DEFAULT true
  - shipping_updates     boolean DEFAULT true
  - promotional_emails   boolean DEFAULT false
  - security_alerts      boolean DEFAULT true
  - newsletter           boolean DEFAULT false
  - updated_at           timestamptz

### 3. support_messages
Customer support conversation thread.
  - id           uuid PK
  - user_id       uuid → auth.users (owner)
  - order_number  text (optional, links to an order)
  - subject       text
  - message       text
  - from_admin    boolean DEFAULT false
  - read          boolean DEFAULT false
  - created_at     timestamptz

## Modified Tables
### profiles
Adds columns:
  - avatar_url        text (profile picture URL)
  - first_name        text
  - last_name         text
  - bio               text

## Security
  - RLS enabled on all new tables.
  - Owner-scoped CRUD policies (4 per table) using auth.uid().
  - SELECT policy on support_messages allows owner to read their thread
    (both customer and admin messages in the same thread).
  - No client-side access to other customers' data.
*/

-- ── Expand profiles ──────────────────────────────────────────
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS avatar_url text,
  ADD COLUMN IF NOT EXISTS first_name text,
  ADD COLUMN IF NOT EXISTS last_name text,
  ADD COLUMN IF NOT EXISTS bio text;

-- ── shipping_addresses ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.shipping_addresses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  label text NOT NULL DEFAULT 'Home',
  full_name text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  address_line1 text NOT NULL DEFAULT '',
  address_line2 text,
  city text NOT NULL DEFAULT '',
  state text NOT NULL DEFAULT '',
  postal_code text NOT NULL DEFAULT '',
  country_code text NOT NULL DEFAULT 'US',
  is_default boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_shipping_addresses_user
  ON public.shipping_addresses (user_id);

ALTER TABLE public.shipping_addresses ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_addresses" ON public.shipping_addresses;
CREATE POLICY "select_own_addresses" ON public.shipping_addresses FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_addresses" ON public.shipping_addresses;
CREATE POLICY "insert_own_addresses" ON public.shipping_addresses FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_addresses" ON public.shipping_addresses;
CREATE POLICY "update_own_addresses" ON public.shipping_addresses FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_addresses" ON public.shipping_addresses;
CREATE POLICY "delete_own_addresses" ON public.shipping_addresses FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

-- ── email_preferences ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.email_preferences (
  user_id uuid PRIMARY KEY DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  order_updates boolean NOT NULL DEFAULT true,
  payment_updates boolean NOT NULL DEFAULT true,
  shipping_updates boolean NOT NULL DEFAULT true,
  promotional_emails boolean NOT NULL DEFAULT false,
  security_alerts boolean NOT NULL DEFAULT true,
  newsletter boolean NOT NULL DEFAULT false,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.email_preferences ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_email_prefs" ON public.email_preferences;
CREATE POLICY "select_own_email_prefs" ON public.email_preferences FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_email_prefs" ON public.email_preferences;
CREATE POLICY "insert_own_email_prefs" ON public.email_preferences FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_email_prefs" ON public.email_preferences;
CREATE POLICY "update_own_email_prefs" ON public.email_preferences FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- ── support_messages ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.support_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  order_number text,
  subject text NOT NULL DEFAULT '',
  message text NOT NULL DEFAULT '',
  from_admin boolean NOT NULL DEFAULT false,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_support_messages_user
  ON public.support_messages (user_id, created_at);

ALTER TABLE public.support_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_messages" ON public.support_messages;
CREATE POLICY "select_own_messages" ON public.support_messages FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_messages" ON public.support_messages;
CREATE POLICY "insert_own_messages" ON public.support_messages FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_messages" ON public.support_messages;
CREATE POLICY "update_own_messages" ON public.support_messages FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_messages" ON public.support_messages;
CREATE POLICY "delete_own_messages" ON public.support_messages FOR DELETE
  TO authenticated USING (auth.uid() = user_id);