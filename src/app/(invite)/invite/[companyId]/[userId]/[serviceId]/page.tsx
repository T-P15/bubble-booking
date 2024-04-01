"use client";
import { getCompanyById } from "~/utils/api/company";
import { getProfileByUserId } from "~/utils/api/profile";
import { getServiceById } from "~/utils/api/service";
import useSupabaseClient from "~/utils/client/supabase-client";

import { useQueries } from "@tanstack/react-query";

type InviteProps = {
  params: { companyId: string; userId: string; serviceId: string };
};

export default function Invite({ params }: InviteProps) {
  const { companyId, userId, serviceId } = params;
  const supabase = useSupabaseClient();
  const results = useQueries({
    queries: [
      {
        queryKey: ["companyId", companyId],
        queryFn: async () =>
          getCompanyById(supabase, companyId)?.then(
            (response) => response.data,
          ),
      },
      {
        queryKey: ["userId", userId],
        queryFn: async () =>
          getProfileByUserId(supabase, userId)?.then(
            (response) => response.data,
          ),
      },
      {
        queryKey: ["serviceId", serviceId],
        queryFn: async () =>
          getServiceById(supabase, serviceId)?.then(
            (response) => response.data,
          ),
      },
    ],
  });

  return (
    <>
      <p>companyId: {companyId}</p>
      <p>userId: {userId}</p>
      <p>serviceId: {serviceId}</p>
    </>
  );
}
