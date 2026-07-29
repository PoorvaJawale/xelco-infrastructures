import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://yownstjdvwvejrpepjom.supabase.co';
const supabaseKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 'sb_publishable_EPNJjvMfKgvh-U6CVTmPJA_lYkISrXj';

export const supabase = createClient(supabaseUrl, supabaseKey);
