/*
# Order Reminders & Customer Notifications

## Purpose
Creates an automatic notification system for KCO Global Online Marketplace.
After every successful order, the system logs order events and sends professional
reminder emails to customers at each stage of the purchase lifecycle.

## Changes

### 1. Expand payment_receipts.status
Adds new order lifecycle statuses so the order can be tracked end-to-end:
  - order_placed        (initial, set on insert)
  - payment_received    (customer submitted receipt)
  - pending_verification (legacy alias, kept for compatibility)
  - payment_approved    (admin verified payment)
  - order_processing    (being prepared)
  - order_shipped       (dispatched)
  - out_for_delivery    (with courier, final mile)
  - order_delivered     (completed)
  - rejected            (legacy, kept)

The existing CHECK constraint is replaced to include the new statuses.

### 2. New table: order_events
Append-only event log — one row per status change per order.
  - id           uuid PK
  - order_number  text (matches payment_receipts.order_number)
  - event_type    text (one of the lifecycle statuses)
  - message      text  (human-readable description)
  - metadata      jsonb (optional context)
  - created_at    timestamptz DEFAULT now()
Indexed on order_number for fast timeline lookups.

### 3. New table: notification_log
Records every notification attempt (email or in-app).
  - id            uuid PK
  - order_number  text
  - event_type    text
  - channel       text  ('email' | 'in_app')
  - recipient     text  (customer email)
  - customer_name text
  - subject       text
  - body          text
  - status        text  ('queued' | 'sent' | 'failed' | 'skipped')
  - error         text
  - created_at    timestamptz DEFAULT now()

### 4. Trigger: payment_receipts_status_change
AFTER INSERT or UPDATE OF status on payment_receipts.
Inserts a row into order_events and a queued row into notification_log
for the new status. The edge function picks up queued rows and sends emails.

### 5. RLS
  - order_events: SELECT only for authenticated owner (via payment_receipts join).
  - notification_log: SELECT only for authenticated owner (via payment_receipts join).
  Both tables are insertable only by the service role / triggers (no client INSERT policy).

## Security
  - RLS enabled on both new tables.
  - No client-side INSERT/UPDATE/DELETE on event/log tables — only the database
    trigger (running as definer) and the service role can write.
  - SELECT policies scope reads to the order owner.
*/

-- ── 1. Expand statuses on payment_receipts ──────────────────
ALTER TABLE public.payment_receipts DROP CONSTRAINT IF EXISTS payment_receipts_status_check;

ALTER TABLE public.payment_receipts
  ADD CONSTRAINT payment_receipts_status_check
  CHECK (status = ANY (ARRAY[
    'order_placed',
    'payment_received',
    'pending_verification',
    'payment_approved',
    'order_processing',
    'order_shipped',
    'out_for_delivery',
    'order_delivered',
    'approved',
    'rejected',
    'receipt_requested'
  ]::text[]));

-- ── 2. order_events table ───────────────────────────────────
CREATE TABLE IF NOT EXISTS public.order_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number text NOT NULL,
  event_type text NOT NULL,
  message text NOT NULL DEFAULT '',
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_order_events_order_number
  ON public.order_events (order_number, created_at);

ALTER TABLE public.order_events ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_order_events" ON public.order_events;
CREATE POLICY "select_own_order_events"
  ON public.order_events FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.payment_receipts pr
      WHERE pr.order_number = order_events.order_number
        AND pr.user_id = auth.uid()
    )
  );

-- ── 3. notification_log table ───────────────────────────────
CREATE TABLE IF NOT EXISTS public.notification_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number text NOT NULL,
  event_type text NOT NULL,
  channel text NOT NULL DEFAULT 'email',
  recipient text NOT NULL DEFAULT '',
  customer_name text NOT NULL DEFAULT '',
  subject text NOT NULL DEFAULT '',
  body text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'queued',
  error text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_notification_log_status
  ON public.notification_log (status, created_at);
CREATE INDEX IF NOT EXISTS idx_notification_log_order_number
  ON public.notification_log (order_number);

ALTER TABLE public.notification_log ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_notifications" ON public.notification_log;
CREATE POLICY "select_own_notifications"
  ON public.notification_log FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.payment_receipts pr
      WHERE pr.order_number = notification_log.order_number
        AND pr.user_id = auth.uid()
    )
  );

-- ── 4. Trigger function ─────────────────────────────────────
CREATE OR REPLACE FUNCTION public.handle_order_status_change()
RETURNS TRIGGER AS $$
DECLARE
  v_event_type text;
  v_message text;
  v_recipient text;
  v_customer_name text;
  v_subject text;
  v_body text;
BEGIN
  -- Determine the event type
  IF (TG_OP = 'INSERT') THEN
    v_event_type := 'order_placed';
    v_message := 'Your order has been successfully placed.';
  ELSE
    v_event_type := NEW.status;
    v_message := CASE NEW.status
      WHEN 'payment_received'   THEN 'We have received your payment receipt.'
      WHEN 'pending_verification' THEN 'Your payment receipt is being verified.'
      WHEN 'payment_approved'   THEN 'Your payment has been approved.'
      WHEN 'order_processing'   THEN 'Your order is now being processed.'
      WHEN 'order_shipped'      THEN 'Your order has been shipped.'
      WHEN 'out_for_delivery'   THEN 'Your order is out for delivery.'
      WHEN 'order_delivered'    THEN 'Your order has been delivered. Thank you for shopping with us!'
      WHEN 'rejected'           THEN 'Your payment could not be verified. Please contact support.'
      ELSE 'Order status updated to ' || NEW.status
    END;
  END IF;

  -- Insert event log
  INSERT INTO public.order_events (order_number, event_type, message, metadata)
  VALUES (NEW.order_number, v_event_type, v_message,
    jsonb_build_object('amount', NEW.amount, 'currency', NEW.currency, 'listing_title', NEW.listing_title));

  -- Build email content
  v_recipient := NEW.email;
  v_customer_name := COALESCE(NEW.full_name, 'Customer');
  v_subject := CASE v_event_type
    WHEN 'order_placed'         THEN 'Order Confirmed — ' || NEW.order_number
    WHEN 'payment_received'     THEN 'Payment Received — ' || NEW.order_number
    WHEN 'pending_verification' THEN 'Payment Under Verification — ' || NEW.order_number
    WHEN 'payment_approved'     THEN 'Payment Approved — ' || NEW.order_number
    WHEN 'order_processing'     THEN 'Order Processing — ' || NEW.order_number
    WHEN 'order_shipped'        THEN 'Order Shipped — ' || NEW.order_number
    WHEN 'out_for_delivery'     THEN 'Out for Delivery — ' || NEW.order_number
    WHEN 'order_delivered'      THEN 'Order Delivered — ' || NEW.order_number
    WHEN 'rejected'             THEN 'Action Needed — ' || NEW.order_number
    ELSE 'Order Update — ' || NEW.order_number
  END;

  v_body := 'Dear ' || v_customer_name || ',' || E'\n\n' ||
    v_message || E'\n\n' ||
    'Order Number: ' || NEW.order_number || E'\n' ||
    'Order Date: ' || to_char(NEW.created_at, 'YYYY-MM-DD') || E'\n' ||
    'Product: ' || NEW.listing_title || E'\n' ||
    'Quantity: 1' || E'\n' ||
    'Total Amount: ' || NEW.amount || ' ' || NEW.currency || E'\n' ||
    'Current Status: ' || v_event_type || E'\n\n' ||
    'Thank you for shopping with KCO Global Online Marketplace. ' ||
    'Please keep your Order Number and payment confirmation for your records. ' ||
    'You can log into your account at any time to track your order status and view your order history. ' ||
    'We will continue to keep you updated until your order has been successfully delivered.' || E'\n\n' ||
    'Track your order: https://kcoglobalonlinemarket.com/account' || E'\n' ||
    'Contact Customer Support: support@kcoglobalonlinemarket.com' || E'\n\n' ||
    '— KCO Global Online Marketplace Team';

  -- Queue notification (edge function will pick up 'queued' rows)
  INSERT INTO public.notification_log
    (order_number, event_type, channel, recipient, customer_name, subject, body, status)
  VALUES
    (NEW.order_number, v_event_type, 'email', v_recipient, v_customer_name, v_subject, v_body, 'queued');

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS trg_order_status_change ON public.payment_receipts;
CREATE TRIGGER trg_order_status_change
  AFTER INSERT OR UPDATE OF status ON public.payment_receipts
  FOR EACH ROW EXECUTE FUNCTION public.handle_order_status_change();