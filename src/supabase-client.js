import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Guard: createClient throws if URL is missing (e.g. no .env file).
// Return a no-op proxy so the rest of the app can still load safely.
function createSafeClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    const noop = () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } });
    const chainable = () => ({ select: chainable, insert: noop, update: noop, delete: noop, eq: chainable, neq: chainable, order: chainable, limit: chainable, maybeSingle: noop, single: noop, then: (resolve) => resolve({ data: null, error: { message: 'Supabase not configured' } }) });
    return {
      from: () => chainable(),
      rpc: noop,
      auth: {
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
        getUser: () => Promise.resolve({ data: { user: null }, error: null }),
        signUp: noop, signInWithPassword: noop, signOut: noop,
        resetPasswordForEmail: noop, updateUser: noop,
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      },
      channel: () => ({ on: () => ({ subscribe: () => {} }) }),
      removeChannel: () => {},
      storage: { from: () => ({ upload: noop, getPublicUrl: () => ({ data: { publicUrl: '' } }) }) },
    };
  }
  return createClient(supabaseUrl, supabaseAnonKey, {
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
