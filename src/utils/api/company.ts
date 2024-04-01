import { TypedSupabaseClient } from '../types';

export function getCompanyById(
  client: TypedSupabaseClient, 
  companyId?: string
) {
    if (!companyId) {
        return undefined
    }
    
  return client
    .from('company')
    .select('*')
    .eq('company_id', companyId)
    .throwOnError()
    .single();
}