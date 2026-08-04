/*
# Add dynamic payment settings to site_settings

## Purpose
Enable the admin dashboard to manage multiple manual bank transfer accounts,
checkout payment gateway selection, and receipt-upload instructions without
hardcoding bank details in the frontend.
*/

ALTER TABLE public.site_settings
  ADD COLUMN IF NOT EXISTS manual_payment_enabled boolean DEFAULT true,
  ADD COLUMN IF NOT EXISTS manual_payment_accounts jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS manual_payment_instructions text,
  ADD COLUMN IF NOT EXISTS atm_transfer_instructions text,
  ADD COLUMN IF NOT EXISTS payment_gateway text DEFAULT 'both',
  ADD COLUMN IF NOT EXISTS payment_mode text DEFAULT 'test',
  ADD COLUMN IF NOT EXISTS flutterwave_enabled boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS flutterwave_public_key text,
  ADD COLUMN IF NOT EXISTS flutterwave_secret_key text,
  ADD COLUMN IF NOT EXISTS flutterwave_encryption_key text,
  ADD COLUMN IF NOT EXISTS flutterwave_webhook_secret text,
  ADD COLUMN IF NOT EXISTS flutterwave_currency text DEFAULT 'USD',
  ADD COLUMN IF NOT EXISTS flutterwave_redirect_url text,
  ADD COLUMN IF NOT EXISTS bank1_account_name text,
  ADD COLUMN IF NOT EXISTS bank1_account_number text,
  ADD COLUMN IF NOT EXISTS bank1_bank_name text,
  ADD COLUMN IF NOT EXISTS bank1_transfer_type text,
  ADD COLUMN IF NOT EXISTS bank1_sort_code text,
  ADD COLUMN IF NOT EXISTS bank1_currency text,
  ADD COLUMN IF NOT EXISTS bank2_account_name text,
  ADD COLUMN IF NOT EXISTS bank2_account_number text,
  ADD COLUMN IF NOT EXISTS bank2_bank_name text,
  ADD COLUMN IF NOT EXISTS bank2_transfer_type text,
  ADD COLUMN IF NOT EXISTS bank2_sort_code text,
  ADD COLUMN IF NOT EXISTS bank2_currency text;
