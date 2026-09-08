// Server-side Supabase helpers for the social publishing system.
// These run ONLY in Vercel serverless functions (never shipped to the browser).
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '';
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export function isServiceConfigured() {
  return Boolean(SUPABASE_URL && SERVICE_ROLE_KEY);
}

export function getServiceClient() {
  if (!isServiceConfigured()) {
    throw new Error('Social publishing is not configured: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required server-side.');
  }
  return createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export function publicStorageUrl(path) {
  const base = (SUPABASE_URL || '').replace(/\/$/, '');
  if (!base || !path) return '';
  return `${base}/storage/v1/object/public/${path.replace(/^\/+/, '')}`;
}

export function siteUrl(req) {
  const envUrl = (process.env.VITE_SITE_URL || process.env.SITE_URL || '').replace(/\/$/, '');
  if (envUrl) return envUrl;
  const proto = req?.headers?.['x-forwarded-proto'] || 'https';
  const host = req?.headers?.['x-forwarded-host'] || req?.headers?.host || 'localhost';
  return `${proto}://${host}`;
}