-- ═══════════════════════════════════════════════════════════════════
-- Self-trigger for the social scheduler.
--
-- Vercel Hobby accounts only allow ONE cron run per day, so the
-- every-15-minutes auto-poster cannot run from Vercel Cron. Instead,
-- Supabase's pg_cron calls the deployed scheduler endpoint every 15
-- minutes (guard: x-cron-secret = SCHEDULER_CRON_SECRET, the same value
-- that is set in the Vercel project environment).
--
-- Apply this AFTER the social media migration, once the site is
-- deployed to https://weverseonlineshop.com. Safe to re-run.
--
-- ⚠ SECURITY: before running in the SQL editor, replace the literal
-- __SCHEDULER_CRON_SECRET__ below with the REAL value of the Vercel
-- environment variable SCHEDULER_CRON_SECRET (Vercel → Project →
-- Settings → Environment Variables). The real value must never be
-- committed to this public repository.
-- ═══════════════════════════════════════════════════════════════════
CREATE EXTENSION IF NOT EXISTS pg_net;

DO $$
DECLARE
  existing_job bigint;
BEGIN
  SELECT jobid INTO existing_job FROM cron.job WHERE jobname = 'social_scheduler_15';
  IF existing_job IS NOT NULL THEN
    PERFORM cron.unschedule(existing_job);
  END IF;

  PERFORM cron.schedule('social_scheduler_15', '*/15 * * * *', $sched$
    SELECT net.http_post(
      url := 'https://weverseonlineshop.com/api/social/scheduler',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'x-cron-secret', '__SCHEDULER_CRON_SECRET__'
      ),
      body := '{}'
    ) AS request_id;
  $sched$);
END $$;