import { TypedSupabaseClient } from '../types';

export function getProfileByUserId(
  client: TypedSupabaseClient, 
  userId?: string
) {
    if (!userId) {
        return undefined
    }
    
  return client
    .from('profile')
    .select('*')
    .eq('user_id', userId)
    .throwOnError()
    .single();
}