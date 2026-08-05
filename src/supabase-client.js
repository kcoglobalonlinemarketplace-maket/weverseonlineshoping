import { createClient } from '@supabase/supabase-js';

const DEFAULT_SUPABASE_URL = 'https://wttnvwpoqmbxryivcerf.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'sb_publishable_X_6kXsJwApi7v7HwoC1xtA_igns4Rxa';

function pickFirstNonEmpty(...values) {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) return value.trim();
  }
  return '';
}

const runtimeConfig = globalThis?.__KCO_RUNTIME_CONFIG__ || {};
const env = import.meta.env || {};

export const SUPABASE_URL = pickFirstNonEmpty(
  env.VITE_SUPABASE_URL,
  runtimeConfig.VITE_SUPABASE_URL,
  globalThis?.VITE_SUPABASE_URL,
  DEFAULT_SUPABASE_URL,
);

export const ANON_KEY = pickFirstNonEmpty(
  env.VITE_SUPABASE_ANON_KEY,
  runtimeConfig.VITE_SUPABASE_ANON_KEY,
  globalThis?.VITE_SUPABASE_ANON_KEY,
  DEFAULT_SUPABASE_ANON_KEY,
);

export const isSupabaseConfigured = Boolean(SUPABASE_URL && ANON_KEY);

const CONFIG_ERROR_MESSAGE = 'Authentication service is unavailable. Missing Supabase credentials.';

// Guard: createClient throws if URL is missing (e.g. no .env file).
// Return a no-op proxy so the rest of the app can still load safely.
function createSafeClient() {
  if (!isSupabaseConfigured) {
    const noop = () => Promise.resolve({ data: null, error: { message: CONFIG_ERROR_MESSAGE } });
    const chainable = () => ({ select: chainable, insert: noop, update: noop, delete: noop, eq: chainable, neq: chainable, order: chainable, limit: chainable, maybeSingle: noop, single: noop, then: (resolve) => resolve({ data: null, error: { message: CONFIG_ERROR_MESSAGE } }) });

    console.error('[Supabase] Missing configuration. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');

    return {
      from: () => chainable(),
      rpc: noop,
      auth: {
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
        getUser: () => Promise.resolve({ data: { user: null }, error: null }),
        signUp: noop, signInWithPassword: noop, signOut: noop,
        resetPasswordForEmail: noop, updateUser: noop,
        resend: noop,
        exchangeCodeForSession: noop,
        verifyOtp: noop,
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      },
      channel: () => ({ on: () => ({ subscribe: () => {} }) }),
      removeChannel: () => {},
      storage: { from: () => ({ upload: noop, getPublicUrl: () => ({ data: { publicUrl: '' } }) }) },
    };
  }
  return createClient(SUPABASE_URL, ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true },
  });
}

export const supabase = createSafeClient();

export function getSessionKey() {
  let key = localStorage.getItem('kco_session_key');
  if (!key) {
    key = 'kco-' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem('kco_session_key', key);
  }
  return key;
}
