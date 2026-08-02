/*
# Add product detail columns to showroom_listings

## Purpose
The product cards and details page already reference fields like brand, color,
size, condition, warranty, etc. but these columns don't exist in the database.
This migration adds them so AI-created products can store complete product info.

## New Columns on showroom_listings
- brand (text) — product brand/manufacturer
- color (text) — primary color
- size (text) — size variant
- condition (text) — product condition (New, Refurbished, Used, etc.)
- warranty (text) — warranty information
- shipping_info (text) — shipping details
- delivery_estimate (text) — estimated delivery time
- weight (text) — product weight
- dimensions (text) — product dimensions
- highlights (jsonb) — key product highlights (array of strings)
- storage_options (jsonb) — storage variants for phones/computers (array of strings)
- ram_options (jsonb) — RAM variants (array of strings)
- color_options (jsonb) — available color choices (array of strings)
- availability_status (text) — In Stock, Out of Stock, Pre-order, etc.
- product_location (text) — where the product is located
- language_info (text) — language information if applicable
- review_count (integer) — number of reviews (alias for rating_count display)
- is_ai_generated (boolean) — marks fields that were AI-generated so admin can edit later
- ai_generated_fields (jsonb) — list of field names that were AI-generated

## Security
- No RLS changes needed (existing policies cover new columns).
- All columns are nullable with safe defaults.
*/

ALTER TABLE showroom_listings
  ADD COLUMN IF NOT EXISTS brand text,
  ADD COLUMN IF NOT EXISTS color text,
  ADD COLUMN IF NOT EXISTS size text,
  ADD COLUMN IF NOT EXISTS condition text DEFAULT 'New',
  ADD COLUMN IF NOT EXISTS warranty text,
  ADD COLUMN IF NOT EXISTS shipping_info text,
  ADD COLUMN IF NOT EXISTS delivery_estimate text,
  ADD COLUMN IF NOT EXISTS weight text,
  ADD COLUMN IF NOT EXISTS dimensions text,
  ADD COLUMN IF NOT EXISTS highlights jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS storage_options jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS ram_options jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS color_options jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS availability_status text DEFAULT 'In Stock',
  ADD COLUMN IF NOT EXISTS product_location text,
  ADD COLUMN IF NOT EXISTS language_info text,
  ADD COLUMN IF NOT EXISTS review_count integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS is_ai_generated boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS ai_generated_fields jsonb DEFAULT '[]'::jsonb;