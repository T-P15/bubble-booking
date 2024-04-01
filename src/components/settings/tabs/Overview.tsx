import { getProfileByUserId } from "~/utils/api/profile";
import useSupabaseClient from "~/utils/client/supabase-client";
import useSession from "~/utils/hooks/useSession";

import { useQuery } from "@tanstack/react-query";

function Overview() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const { data: profile } = useQuery({
    queryKey: ["sessionUserId", session?.user.id],
    queryFn: async () =>
      getProfileByUserId(supabase, session?.user.id)?.then(
        (response) => response.data,
      ),
  });

  return (
    <div>
      <div>Overview</div>
      <div>{profile?.user}</div>
    </div>
  );
}

export default Overview;
