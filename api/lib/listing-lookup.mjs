// Shared Supabase listing lookup for the serverless OG/image functions.
// Uses a fast, targeted single-row query by property_id (with a UUID `id`
// fallback) and `persistSession:false` so it never touches localStorage and
// never loads the whole table on a crawler request.

const SUPABASE_URL = 'https://wttnvwpoqmbxryivcerf.supabase.co';
const ANON_KEY = 'sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa';

let client = null;

export async function getDbClient() {
  if (client) return client;
  const { createClient } = await import('@supabase/supabase-js');
  client = createClient(SUPABASE_URL, ANON_KEY, { auth: { persistSession: false, autoRefreshToken: false } });
  return client;
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function isUuid(id) { return UUID_RE.test(String(id)); }

export function normalizeRow(row) {
  return {
    ...row,
    price: Number(row.price) || 0,
    images: Array.isArray(row.images) ? row.images : [],
  };
}

export async function resolveFromDb(id) {
  try {
    const c = await getDbClient();
    const byProperty = await c.from('showroom_listings')
      .select('*')
      .eq('is_active', true)
      .eq('property_id', id)
      .maybeSingle();
    if (byProperty && !byProperty.error && byProperty.data) return normalizeRow(byProperty.data);
    if (isUuid(id)) {
      const byId = await c.from('showroom_listings')
        .select('*')
        .eq('is_active', true)
        .eq('id', id)
        .maybeSingle();
      if (byId && !byId.error && byId.data) return normalizeRow(byId.data);
    }
    return null;
  } catch (err) {
    console.error('[og-lookup] resolveFromDb failed:', err && err.message ? err.message : err);
    return null;
  }
}
