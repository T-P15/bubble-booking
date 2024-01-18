import { useMemo } from 'react';

import { createBrowserClient } from '@supabase/ssr';

import { TypedSupabaseClient } from '../types';
import { Database } from '../types/database.types';

let client: TypedSupabaseClient | undefined

function getSupabaseBrowserClient() {
  if (client) {
    return client
  }

  client = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  return client
}

function useSupabaseClient() {
  return useMemo(getSupabaseBrowserClient, [])
}

export default useSupabaseClient