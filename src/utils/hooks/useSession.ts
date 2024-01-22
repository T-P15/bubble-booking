import { useContext } from 'react';

import { SupabaseContext } from '../providers/SupabaseProvider';

function useSession()  {
  const context = useContext(SupabaseContext);

  if (context === undefined) {
    throw new Error("useSession must be used inside SupabaseProvider");
  }

  return context.session;
}

export default useSession;