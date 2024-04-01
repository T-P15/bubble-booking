import { TypedSupabaseClient } from '../types';

export function getStaffById(
  client: TypedSupabaseClient, 
  staffId?: string
) {
    if (!staffId) {
        return undefined
    }
    
  return client
    .from('staff')
    .select('*')
    .eq('staff_id', staffId)
    .throwOnError()
    .single();
}