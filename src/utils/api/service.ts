import { TypedSupabaseClient } from '../types';

export function getServiceById(
  client: TypedSupabaseClient, 
  serviceId?: string
) {
    if (!serviceId) {
        return undefined
    }
    
  return client
    .from('service')
    .select('*')
    .eq('service_id', serviceId)
    .throwOnError()
    .single();
}