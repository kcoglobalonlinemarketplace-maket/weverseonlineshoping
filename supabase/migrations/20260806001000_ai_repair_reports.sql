-- AI Repair Assistant reporting support

alter table public.ai_settings
  add column if not exists repair_ai_provider text,
  add column if not exists repair_ai_model text,
  add column if not exists repair_ai_api_key text,
  add column if not exists repair_auto_apply_safe_fixes boolean default true,
  add column if not exists repair_scan_interval_minutes integer default 15;

create table if not exists public.ai_repair_reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  target_url text not null,
  release_tag text,
  report_data jsonb not null default '{}'::jsonb,
  auto_fixes_applied jsonb not null default '[]'::jsonb,
  unresolved_issues jsonb not null default '[]'::jsonb,
  recommendations jsonb not null default '[]'::jsonb,
  notification_required boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists idx_ai_repair_reports_user_created
  on public.ai_repair_reports(user_id, created_at desc);

create index if not exists idx_ai_repair_reports_notify
  on public.ai_repair_reports(notification_required, created_at desc);

alter table public.ai_repair_reports enable row level security;

drop policy if exists "Users can read own repair reports" on public.ai_repair_reports;
create policy "Users can read own repair reports"
  on public.ai_repair_reports
  for select to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users can insert own repair reports" on public.ai_repair_reports;
create policy "Users can insert own repair reports"
  on public.ai_repair_reports
  for insert to authenticated
  with check (auth.uid() = user_id);
