import { useContext } from 'react';
import { SessionContext } from '~/providers/SessionProvider';

function useSession()  {
  const context = useContext(SessionContext);

  if (context === undefined) {
    throw new Error("useSession must be used inside SupabaseProvider");
  }

  return context.session;
};

export default useSession;