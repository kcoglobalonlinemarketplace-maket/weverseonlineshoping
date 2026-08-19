-- Site Content Editor (Website Content Settings).
-- Adds site_settings columns that let the owner edit, from the admin
-- "Content Settings" panel, the written content of:
--   • the Android App promotional banner (bottom of every page), and
--   • the final bottom / end-of-page closing section (thank-you message,
--     customer support, footer blurb + copyright) shown on every page.
-- The design is fixed; only the wording is editable. No destructive changes.
-- Safe to re-run.

ALTER TABLE public.site_settings
  ADD COLUMN IF NOT EXISTS app_banner_title text NOT NULL DEFAULT 'Discover More with the Weverse Online Shop App',
  ADD COLUMN IF NOT EXISTS app_banner_description text NOT NULL DEFAULT 'Shop products, discover new arrivals, manage your orders, save favorites, and enjoy a smooth shopping experience wherever you go.',
  ADD COLUMN IF NOT EXISTS app_banner_button_text text NOT NULL DEFAULT 'Get it on Google Play',
  ADD COLUMN IF NOT EXISTS app_banner_secondary_text text NOT NULL DEFAULT 'Browse the Shop',

  ADD COLUMN IF NOT EXISTS bottom_heading text NOT NULL DEFAULT 'Thank You for Shopping With Us',
  ADD COLUMN IF NOT EXISTS bottom_main_message text NOT NULL DEFAULT 'Every visit, every order, and every moment you spend with us means more than simply shopping. You are part of our journey toward creating a better global shopping experience.',
  ADD COLUMN IF NOT EXISTS bottom_closing_message text NOT NULL DEFAULT 'We look forward to serving you again. ❤️',
  ADD COLUMN IF NOT EXISTS bottom_support_heading text NOT NULL DEFAULT 'Customer Support',
  ADD COLUMN IF NOT EXISTS bottom_support_description text NOT NULL DEFAULT 'Our support team is here for you 24/7 — before and after every order.',
  ADD COLUMN IF NOT EXISTS bottom_support_button_text text NOT NULL DEFAULT 'Contact Support',
  ADD COLUMN IF NOT EXISTS bottom_footer_text text NOT NULL DEFAULT 'GLOBAL SHOPPING · WORLDWIDE DELIVERY',
  ADD COLUMN IF NOT EXISTS bottom_footer_closing text NOT NULL DEFAULT 'Made with ❤️ for shoppers everywhere',
  ADD COLUMN IF NOT EXISTS bottom_copyright text NOT NULL DEFAULT '';