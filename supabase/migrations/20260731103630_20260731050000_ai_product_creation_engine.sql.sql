/*
# AI Product Creation Engine — Learning & Template System

1. New Tables
- `ai_product_templates`: Learned templates from created products. When a product is created, the AI stores a template keyed by brand+model so future creations of similar products are faster and more accurate.
- `ai_product_relationships`: Stores related/similar/accessory product links per product (type: related, similar, accessory, frequently_bought_together).
- `ai_creation_logs`: Records every AI product creation with the user's original prompt, the AI's analysis, and the final product — for learning and audit.

2. Security
- RLS enabled on all tables
- Admin-only read/write (authenticated + is_admin)
- Service role bypasses RLS for edge function operations

3. Indexes
- On template_key (brand+model), product_id, relationship_type
*/

-- ── ai_product_templates ─────────────────────────────────────
CREATE TABLE IF NOT EXISTS ai_product_templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  template_key text UNIQUE NOT NULL,
  brand text,
  category text,
  subcategory text,
  listing_type text,
  default_specifications jsonb DEFAULT '{}',
  default_features jsonb DEFAULT '[]',
  default_highlights jsonb DEFAULT '[]',
  default_storage_options jsonb DEFAULT '[]',
  default_color_options jsonb DEFAULT '[]',
  default_warranty text,
  default_shipping_info text,
  default_return_policy text,
  default_price_range jsonb,
  seo_keywords jsonb DEFAULT '[]',
  related_product_keywords jsonb DEFAULT '[]',
  accessory_keywords jsonb DEFAULT '[]',
  usage_count integer DEFAULT 1,
  last_used_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE ai_product_templates ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_admin_templates" ON ai_product_templates;
CREATE POLICY "select_admin_templates" ON ai_product_templates
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "insert_admin_templates" ON ai_product_templates;
CREATE POLICY "insert_admin_templates" ON ai_product_templates
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "update_admin_templates" ON ai_product_templates;
CREATE POLICY "update_admin_templates" ON ai_product_templates
  FOR UPDATE TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

CREATE INDEX IF NOT EXISTS idx_templates_key ON ai_product_templates(template_key);
CREATE INDEX IF NOT EXISTS idx_templates_brand ON ai_product_templates(brand, category);

-- ── ai_product_relationships ─────────────────────────────────
CREATE TABLE IF NOT EXISTS ai_product_relationships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL,
  related_product_id uuid,
  related_property_id text,
  related_title text,
  related_image text,
  related_price numeric,
  relationship_type text NOT NULL DEFAULT 'related',
  display_order integer DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE ai_product_relationships ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_admin_relationships" ON ai_product_relationships;
CREATE POLICY "select_admin_relationships" ON ai_product_relationships
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "insert_admin_relationships" ON ai_product_relationships;
CREATE POLICY "insert_admin_relationships" ON ai_product_relationships
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "delete_admin_relationships" ON ai_product_relationships;
CREATE POLICY "delete_admin_relationships" ON ai_product_relationships
  FOR DELETE TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

CREATE INDEX IF NOT EXISTS idx_relationships_product ON ai_product_relationships(product_id, relationship_type);

-- ── ai_creation_logs ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ai_creation_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_prompt text NOT NULL,
  ai_analysis jsonb,
  product_id uuid,
  property_id text,
  product_title text,
  status text DEFAULT 'created',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE ai_creation_logs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_admin_creation_logs" ON ai_creation_logs;
CREATE POLICY "select_admin_creation_logs" ON ai_creation_logs
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );
DROP POLICY IF EXISTS "insert_admin_creation_logs" ON ai_creation_logs;
CREATE POLICY "insert_admin_creation_logs" ON ai_creation_logs
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.user_id = auth.uid() AND profiles.is_admin = true)
  );

CREATE INDEX IF NOT EXISTS idx_creation_logs_product ON ai_creation_logs(product_id);

-- ── Auto-update updated_at on ai_product_templates ───────────
CREATE OR REPLACE FUNCTION public.update_template_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trigger_template_updated_at ON ai_product_templates;
CREATE TRIGGER trigger_template_updated_at
  BEFORE UPDATE ON ai_product_templates
  FOR EACH ROW
  EXECUTE FUNCTION public.update_template_updated_at();