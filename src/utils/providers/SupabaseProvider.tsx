"use client";

import { useRouter } from "next/navigation";
import { createContext, useEffect } from "react";
import AuthModal from "~/components/auth/AuthModal";

import {
  createClientComponentClient,
  Session,
  SupabaseClient,
} from "@supabase/auth-helpers-nextjs";

import { Database } from "../types/database.types";

type MaybeSession = Session | null;

type SupabaseContext = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: SupabaseClient<any, string>;
  session: MaybeSession;
};

export const SupabaseContext = createContext<SupabaseContext | undefined>(
  undefined,
);

function SupabaseProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: MaybeSession;
}) {
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
    <SupabaseContext.Provider value={{ supabase, session }}>
      {children}
      <AuthModal />
    </SupabaseContext.Provider>
  );
}

export default SupabaseProvider;
