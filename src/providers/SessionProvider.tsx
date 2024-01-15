"use client";

import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { Database } from "~/types/database.types";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Session, SupabaseClient } from "@supabase/supabase-js";

interface SessionContextProps {
  supabase: SupabaseClient<Database>;
  session: Session | null;
}

interface SessionProviderProps {
  children: ReactNode;
  session: Session | null;
}

const SessionContext = createContext<SessionContextProps | undefined>(
  undefined,
);

export function SessionProvider({ children, session }: SessionProviderProps) {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, _session) => {
      if (_session?.access_token !== session?.access_token) {
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase, session]);

  return (
    <SessionContext.Provider value={{ supabase, session }}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => {
  const context = useContext(SessionContext);

  if (context === undefined) {
    throw new Error("useSession must be used inside SupabaseProvider");
  }

  return context.session;
};
