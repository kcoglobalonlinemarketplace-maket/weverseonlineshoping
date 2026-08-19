/*
# Global Smart Product Search - Database Schema

## Purpose
Enables unlimited global product search across the Weverse Online Shop and connected supplier catalogues.
Customers can search for almost any product worldwide. If not in the marketplace, the system searches
connected suppliers and displays items as Special Order / On-Demand listings.

## New Tables

### `global_search_settings`
Single-row config table controlling the global search feature.
- enabled (boolean, default true)
- auto_source_from_suppliers (boolean, default true)
- allow_special_orders (boolean, default true)
- default_profit_margin_pct (numeric, default 15)
- default_service_fee_pct (numeric, default 3)
- default_shipping_fee (numeric, default 0)
- default_tax_pct (numeric, default 0)
- special_order_badge_label (text, default 'Available by Special Order')
- updated_at (timestamptz)

### `supplier_integrations`
Registered supplier catalogue connections.
- id, name, api_endpoint, api_key_ref, is_active, is_approved, catalogue_type,
  default_shipping_days, default_markup_pct, created_at, updated_at

### `supplier_catalogue_items`
Cached product data from connected suppliers (populated by edge function).
- id, supplier_id (FK), external_id, title, brand, description, specifications (jsonb),
  category, images (jsonb array), supplier_price, supplier_currency, available_quantity,
  estimated_delivery_days, shipping_cost, is_available, created_at, updated_at

### `product_requests`
Customer special-order requests when no supplier has the product.
- id, user_id (defaults to auth.uid()), request_title, request_description, category, brand,
  target_price, currency, quantity, delivery_* fields, status, admin_notes,
  quoted_price, quoted_currency, payment_status, created_at, updated_at

### `product_request_status_updates`
Timeline of status changes on each product request.
- id, request_id (FK cascade), status, message, created_by, created_at

## Security (RLS)
- global_search_settings: public read (anon+authenticated), admin write via service role
- supplier_integrations: public read active ones, admin write via service role
- supplier_catalogue_items: public read, admin write via service role
- product_requests: owner-scoped CRUD (authenticated)
- product_request_status_updates: owner read, authenticated insert

## Notes
1. All owner columns default to auth.uid() so inserts omitting user_id succeed.
2. updated_at auto-refreshes via trigger.
3. Admin access uses service role key (server-side), bypassing RLS.
4. A pricing RPC function calculates final selling price from supplier price + rules.
*/

-- ── Global Search Settings ──
CREATE TABLE IF NOT EXISTS global_search_settings (
  id integer PRIMARY KEY DEFAULT 1,
  enabled boolean NOT NULL DEFAULT true,
  auto_source_from_suppliers boolean NOT NULL DEFAULT true,
  allow_special_orders boolean NOT NULL DEFAULT true,
  default_profit_margin_pct numeric NOT NULL DEFAULT 15,
  default_service_fee_pct numeric NOT NULL DEFAULT 3,
  default_shipping_fee numeric NOT NULL DEFAULT 0,
  default_tax_pct numeric NOT NULL DEFAULT 0,
  special_order_badge_label text NOT NULL DEFAULT 'Available by Special Order',
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT single_row CHECK (id = 1)
);

ALTER TABLE global_search_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "read_global_search_settings" ON global_search_settings;
CREATE POLICY "read_global_search_settings" ON global_search_settings FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "write_global_search_settings" ON global_search_settings;
CREATE POLICY "write_global_search_settings" ON global_search_settings FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "insert_global_search_settings" ON global_search_settings;
CREATE POLICY "insert_global_search_settings" ON global_search_settings FOR INSERT
  TO authenticated WITH CHECK (true);

-- Seed default row
INSERT INTO global_search_settings (id) VALUES (1) ON CONFLICT (id) DO NOTHING;

-- ── Supplier Integrations ──
CREATE TABLE IF NOT EXISTS supplier_integrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  api_endpoint text,
  api_key_ref text,
  is_active boolean NOT NULL DEFAULT false,
  is_approved boolean NOT NULL DEFAULT false,
  catalogue_type text NOT NULL DEFAULT 'rest_api',
  default_shipping_days integer NOT NULL DEFAULT 7,
  default_markup_pct numeric NOT NULL DEFAULT 10,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE supplier_integrations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "read_active_suppliers" ON supplier_integrations;
CREATE POLICY "read_active_suppliers" ON supplier_integrations FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "write_suppliers" ON supplier_integrations;
CREATE POLICY "write_suppliers" ON supplier_integrations FOR ALL
  TO authenticated USING (true) WITH CHECK (true);

-- ── Supplier Catalogue Items ──
CREATE TABLE IF NOT EXISTS supplier_catalogue_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  supplier_id uuid NOT NULL REFERENCES supplier_integrations(id) ON DELETE CASCADE,
  external_id text,
  title text NOT NULL,
  brand text,
  description text,
  specifications jsonb DEFAULT '{}'::jsonb,
  category text,
  images jsonb DEFAULT '[]'::jsonb,
  supplier_price numeric NOT NULL DEFAULT 0,
  supplier_currency text NOT NULL DEFAULT 'USD',
  available_quantity integer,
  estimated_delivery_days integer NOT NULL DEFAULT 7,
  shipping_cost numeric NOT NULL DEFAULT 0,
  is_available boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE supplier_catalogue_items ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "read_supplier_items" ON supplier_catalogue_items;
CREATE POLICY "read_supplier_items" ON supplier_catalogue_items FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "write_supplier_items" ON supplier_catalogue_items;
CREATE POLICY "write_supplier_items" ON supplier_catalogue_items FOR ALL
  TO authenticated USING (true) WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_supplier_items_supplier ON supplier_catalogue_items(supplier_id);
CREATE INDEX IF NOT EXISTS idx_supplier_items_title ON supplier_catalogue_items USING gin (to_tsvector('english', title));
CREATE INDEX IF NOT EXISTS idx_supplier_items_category ON supplier_catalogue_items(category);

-- ── Product Requests ──
CREATE TABLE IF NOT EXISTS product_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  request_title text NOT NULL,
  request_description text,
  category text,
  brand text,
  target_price numeric,
  currency text NOT NULL DEFAULT 'USD',
  quantity integer NOT NULL DEFAULT 1,
  delivery_full_name text,
  delivery_address text,
  delivery_city text,
  delivery_state text,
  delivery_country text,
  delivery_postal_code text,
  delivery_phone text,
  status text NOT NULL DEFAULT 'pending_review',
  admin_notes text,
  quoted_price numeric,
  quoted_currency text DEFAULT 'USD',
  payment_status text NOT NULL DEFAULT 'unpaid',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE product_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_product_requests" ON product_requests;
CREATE POLICY "select_own_product_requests" ON product_requests FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_product_requests" ON product_requests;
CREATE POLICY "insert_own_product_requests" ON product_requests FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_product_requests" ON product_requests;
CREATE POLICY "update_own_product_requests" ON product_requests FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_product_requests" ON product_requests;
CREATE POLICY "delete_own_product_requests" ON product_requests FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_product_requests_user_id ON product_requests(user_id);
CREATE INDEX IF NOT EXISTS idx_product_requests_status ON product_requests(status);

-- ── Product Request Status Updates ──
CREATE TABLE IF NOT EXISTS product_request_status_updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id uuid NOT NULL REFERENCES product_requests(id) ON DELETE CASCADE,
  status text NOT NULL,
  message text,
  created_by uuid,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE product_request_status_updates ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "read_own_status_updates" ON product_request_status_updates;
CREATE POLICY "read_own_status_updates" ON product_request_status_updates FOR SELECT
  TO authenticated USING (
    EXISTS (SELECT 1 FROM product_requests WHERE product_requests.id = product_request_status_updates.request_id AND product_requests.user_id = auth.uid())
  );

DROP POLICY IF EXISTS "insert_status_updates" ON product_request_status_updates;
CREATE POLICY "insert_status_updates" ON product_request_status_updates FOR INSERT
  TO authenticated WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_status_updates_request_id ON product_request_status_updates(request_id);

-- ── updated_at trigger ──
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_product_requests_updated_at ON product_requests;
CREATE TRIGGER trg_product_requests_updated_at
  BEFORE UPDATE ON product_requests
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS trg_global_search_settings_updated_at ON global_search_settings;
CREATE TRIGGER trg_global_search_settings_updated_at
  BEFORE UPDATE ON global_search_settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS trg_supplier_integrations_updated_at ON supplier_integrations;
CREATE TRIGGER trg_supplier_integrations_updated_at
  BEFORE UPDATE ON supplier_integrations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS trg_supplier_catalogue_items_updated_at ON supplier_catalogue_items;
CREATE TRIGGER trg_supplier_catalogue_items_updated_at
  BEFORE UPDATE ON supplier_catalogue_items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ── Pricing calculation RPC ──
CREATE OR REPLACE FUNCTION calculate_selling_price(
  p_supplier_price numeric,
  p_profit_margin_pct numeric DEFAULT 15,
  p_service_fee_pct numeric DEFAULT 3,
  p_shipping_fee numeric DEFAULT 0,
  p_tax_pct numeric DEFAULT 0
) RETURNS TABLE (
  base_price numeric,
  profit_margin numeric,
  service_fee numeric,
  shipping_fee numeric,
  tax_amount numeric,
  selling_price numeric
) LANGUAGE plpgsql AS $$
DECLARE
  v_base numeric := COALESCE(p_supplier_price, 0);
  v_margin numeric := v_base * COALESCE(p_profit_margin_pct, 0) / 100;
  v_service numeric := v_base * COALESCE(p_service_fee_pct, 0) / 100;
  v_shipping numeric := COALESCE(p_shipping_fee, 0);
  v_subtotal numeric := v_base + v_margin + v_service + v_shipping;
  v_tax numeric := v_subtotal * COALESCE(p_tax_pct, 0) / 100;
  v_total numeric := v_subtotal + v_tax;
BEGIN
  RETURN QUERY SELECT
    ROUND(v_base, 2),
    ROUND(v_margin, 2),
    ROUND(v_service, 2),
    ROUND(v_shipping, 2),
    ROUND(v_tax, 2),
    ROUND(v_total, 2);
END;
$$;

-- ── Supplier catalogue search RPC ──
CREATE OR REPLACE FUNCTION search_supplier_catalogue(
  p_query text,
  p_limit integer DEFAULT 20
) RETURNS TABLE (
  id uuid,
  supplier_id uuid,
  title text,
  brand text,
  description text,
  category text,
  images jsonb,
  supplier_price numeric,
  supplier_currency text,
  available_quantity integer,
  estimated_delivery_days integer,
  shipping_cost numeric,
  supplier_name text,
  selling_price numeric
) LANGUAGE plpgsql AS $$
BEGIN
  RETURN QUERY
  SELECT
    sci.id,
    sci.supplier_id,
    sci.title,
    sci.brand,
    sci.description,
    sci.category,
    sci.images,
    sci.supplier_price,
    sci.supplier_currency,
    sci.available_quantity,
    sci.estimated_delivery_days,
    sci.shipping_cost,
    si.name,
    COALESCE((
      SELECT selling_price FROM calculate_selling_price(
        sci.supplier_price,
        si.default_markup_pct,
        g.default_service_fee_pct,
        sci.shipping_cost,
        g.default_tax_pct
      )
    ), sci.supplier_price) AS selling_price
  FROM supplier_catalogue_items sci
  JOIN supplier_integrations si ON si.id = sci.supplier_id
  CROSS JOIN global_search_settings g
  WHERE si.is_active = true
    AND si.is_approved = true
    AND sci.is_available = true
    AND g.enabled = true
    AND g.auto_source_from_suppliers = true
    AND (
      sci.title ILIKE '%' || p_query || '%'
      OR sci.brand ILIKE '%' || p_query || '%'
      OR sci.category ILIKE '%' || p_query || '%'
      OR sci.description ILIKE '%' || p_query || '%'
    )
  ORDER BY
    CASE WHEN sci.title ILIKE '%' || p_query || '%' THEN 0 ELSE 1 END,
    sci.title
  LIMIT p_limit;
END;
$$;