/*
# Add admin review fields to payment_receipts

## Purpose
Administrators need to add notes when rejecting a receipt and track when the
review happened. This migration adds two columns:
- `admin_notes` (text, nullable) — explanation from admin when approving/rejecting
- `admin_reviewed_at` (timestamptz, nullable) — when admin acted on the receipt

## Security
- No RLS policy changes — existing admin_read_all_receipts and
  admin_update_all_receipts policies already cover these new columns.
*/

ALTER TABLE public.payment_receipts
  ADD COLUMN IF NOT EXISTS admin_notes text,
  ADD COLUMN IF NOT EXISTS admin_reviewed_at timestamptz;
