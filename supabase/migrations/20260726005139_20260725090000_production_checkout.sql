/*
# Production Checkout & Order Management

## Purpose
Upgrades the order system for production: adds coupon/discount support,
payment method tracking, shipping/billing address links, quantity, and
Flutterwave transaction references. Adds a coupons table and an invoices
table for downloadable invoices.

## Changes

### 1. Expand payment_receipts
New columns added (all nullable / defaulted so existing rows are safe):
  - payment_method      text DEFAULT 'manual_bank_transfer'
    Values: 'manual_bank_transfer' | 'flutterwave' | 'card'
  - flutterwave_tx_ref  text  (Flutterwave transaction reference)
  - flutterwave_tx_id   text  (Flutterwave transaction ID from verify)
  - coupon_code         text  (applied coupon code, if any)
  - discount_amount     numeric DEFAULT 0  (amount discounted)
  - subtotal            numeric DEFAULT 0  (pre-discount total)
  - quantity            integer DEFAULT 1
  - shipping_address_id uuid  (FK → shipping_addresses.id, nullable)
  - billing_address     text  (formatted billing address, nullable)
  - invoice_number      text  (generated invoice number, nullable)
  - tracking_number     text  (courier tracking number, nullable)
  - carrier             text  (shipping carrier name, nullable)

  The status CHECK constraint is expanded to include 'payment_verified'
  and 'cancelled' alongside existing values.

### 2. New table: coupons
Discount codes for the marketplace.
  - id              uuid PK
  - code            text UNIQUE NOT NULL
  - discount_type   text NOT NULL DEFAULT 'percentage'  ('percentage' | 'fixed')
  - discount_value  numeric NOT NULL DEFAULT 0
  - min_amount      numeric DEFAULT 0  (minimum subtotal to apply)
  - max_uses        integer  (NULL = unlimited)
  - used_count      integer DEFAULT 0
  - valid_from      timestamptz DEFAULT now()
  - valid_until     timestamptz  (NULL = no expiry)
  - is_active       boolean DEFAULT true
  - created_at      timestamptz DEFAULT now()

### 3. New table: invoices
Generated invoices for orders (downloadable).
  - id              uuid PK
  - invoice_number  text UNIQUE NOT NULL
  - order_number    text NOT NULL
  - user_id         uuid (nullable for guests)
  - items           jsonb  (line items snapshot)
  - subtotal        numeric
  - discount_amount numeric DEFAULT 0
  - total           numeric
  - currency        text DEFAULT 'USD'
  - billing_address text
  - created_at      timestamptz DEFAULT now()

## Security
  - coupons: SELECT to anon+authenticated (so checkout can validate);
    INSERT/UPDATE/DELETE only via service role (no client policies = admin-only).
  - invoices: SELECT scoped to owner via payment_receipts join.
  - payment_receipts: existing RLS policies remain; new columns inherit.
  - shipping_addresses FK added with ON DELETE SET NULL so deleting an
    address never orphans an order.
*/

-- ── 1. Expand payment_receipts ──────────────────────────────
ALTER TABLE public.payment_receipts
  ADD COLUMN IF NOT EXISTS payment_method text NOT NULL DEFAULT 'manual_bank_transfer',
  ADD COLUMN IF NOT EXISTS flutterwave_tx_ref text,
  ADD COLUMN IF NOT EXISTS flutterwave_tx_id text,
  ADD COLUMN IF NOT EXISTS coupon_code text,
  ADD COLUMN IF NOT EXISTS discount_amount numeric NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS subtotal numeric NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS quantity integer NOT NULL DEFAULT 1,
  ADD COLUMN IF NOT EXISTS shipping_address_id uuid REFERENCES public.shipping_addresses(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS billing_address text,
  ADD COLUMN IF NOT EXISTS invoice_number text,
  ADD COLUMN IF NOT EXISTS tracking_number text,
  ADD COLUMN IF NOT EXISTS carrier text;

-- Expand status constraint
ALTER TABLE public.payment_receipts DROP CONSTRAINT IF EXISTS payment_receipts_status_check;
ALTER TABLE public.payment_receipts
  ADD CONSTRAINT payment_receipts_status_check
  CHECK (status = ANY (ARRAY[
    'order_placed','payment_received','pending_verification','payment_approved',
    'payment_verified','order_processing','order_shipped','out_for_delivery',
    'order_delivered','approved','rejected','cancelled','receipt_requested'
  ]::text[]));

-- ── 2. coupons table ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.coupons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  discount_type text NOT NULL DEFAULT 'percentage' CHECK (discount_type IN ('percentage','fixed')),
  discount_value numeric NOT NULL DEFAULT 0,
  min_amount numeric NOT NULL DEFAULT 0,
  max_uses integer,
  used_count integer NOT NULL DEFAULT 0,
  valid_from timestamptz NOT NULL DEFAULT now(),
  valid_until timestamptz,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;

-- Coupons are readable by anyone (checkout validation), writable only by service role
DROP POLICY IF EXISTS "anon_read_coupons" ON public.coupons;
CREATE POLICY "anon_read_coupons" ON public.coupons FOR SELECT
  TO anon, authenticated USING (true);

-- ── 3. invoices table ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.invoices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_number text UNIQUE NOT NULL,
  order_number text NOT NULL,
  user_id uuid,
  items jsonb NOT NULL DEFAULT '[]'::jsonb,
  subtotal numeric NOT NULL DEFAULT 0,
  discount_amount numeric NOT NULL DEFAULT 0,
  total numeric NOT NULL DEFAULT 0,
  currency text NOT NULL DEFAULT 'USD',
  billing_address text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_invoices_order_number ON public.invoices (order_number);
CREATE INDEX IF NOT EXISTS idx_invoices_user_id ON public.invoices (user_id);

ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_invoices" ON public.invoices;
CREATE POLICY "select_own_invoices" ON public.invoices FOR SELECT
  TO authenticated
  USING (
    user_id = auth.uid()
    OR EXISTS (
      SELECT 1 FROM public.payment_receipts pr
      WHERE pr.order_number = invoices.order_number
        AND pr.user_id = auth.uid()
    )
  );

-- ── 4. Seed demo coupons ─────────────────────────────────────
INSERT INTO public.coupons (code, discount_type, discount_value, min_amount, is_active)
VALUES
  ('WELCOME10', 'percentage', 10, 0, true),
  ('SAVE25', 'fixed', 25, 100, true),
  ('FREESHIP', 'fixed', 15, 50, true)
ON CONFLICT (code) DO NOTHING;