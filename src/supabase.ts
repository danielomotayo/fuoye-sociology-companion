import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zrnuoqxaphqdibfbnbco.supabase.co';

const supabasePublishableKey =
  'sb_publishable_3F9QdFsRENwIwF4AtVuqWw_rPgPhnkX';

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);
