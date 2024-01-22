import { useEffect, useState } from "react";
import useSupabaseClient from "~/utils/client/supabase-client";
import useSession from "~/utils/hooks/useSession";
import { Database } from "~/utils/types/database.types";

function Overview() {
  const session = useSession();
  const supabase = useSupabaseClient();

  const [profile, setProfile] =
    useState<Database["public"]["Tables"]["profile"]["Row"]>();

  useEffect(() => {
    (async () => {
      if (session) {
        const { data } = await supabase
          .from("profile")
          .select("*")
          .eq("user_id", session.user.id)
          .single();

        if (data) {
          setProfile(data);
        }
      }
    })();
  }, [session, supabase]);

  return (
    <div>
      <div>Overview</div>
      <div></div>
    </div>
  );
}

export default Overview;
