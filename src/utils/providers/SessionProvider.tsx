"use client";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useEffect } from "react";
import AuthModal from "~/components/auth/AuthModal";
import { Database } from "~/utils/types/database.types";

import { Session, SupabaseClient } from "@supabase/supabase-js";

import useSupabaseClient from "../client/supabase-client";

interface SessionContextProps {
  supabase: SupabaseClient<Database>;
  session: Session | null;
}

interface SessionProviderProps {
  children: ReactNode;
  session: Session | null;
}

export const SessionContext = createContext<SessionContextProps | undefined>(
  undefined,
);

export function SessionProvider({ children, session }: SessionProviderProps) {
  const supabase = useSupabaseClient();
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
      <AuthModal />
    </SessionContext.Provider>
  );
}
