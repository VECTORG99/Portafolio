import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// CRITICAL: Check env vars exist, not client truthiness.
// Supabase client constructor returns an object even without env vars,
// but calls will fail at runtime. We must guard on the env var itself.
const hasSupabase = !!(supabaseUrl && supabaseKey);

let supabase = null;
if (hasSupabase) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export { supabase, hasSupabase };
