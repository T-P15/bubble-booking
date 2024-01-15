"use client";

import { Database } from "~/types/database.types";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Login() {
  const supabase = createClientComponentClient<Database>();

  return (
    <Auth
      supabaseClient={supabase}
      providers={["google", "facebook", "azure"]}
      appearance={{ theme: ThemeSupa }}
      redirectTo="http://localhost:3000/auth/callback"
    />
  );
}
