"use client";

import Calendar from '~/components/calendar/Calendar';
import useSupabaseClient from '~/utils/client/supabase-client';

type InviteProps = {
  params: { companyId: string; userId: string; serviceId: string };
};

export default function Invite({ params }: InviteProps) {
  const { companyId, userId, serviceId } = params;
  const supabase = useSupabaseClient();
  // const results = useQueries({
  //   queries: [
  //     {
  //       queryKey: ["companyId", companyId],
  //       queryFn: async () =>
  //         getCompanyById(supabase, companyId)?.then(
  //           (response) => response.data,
  //         ),
  //     },
  //     {
  //       queryKey: ["userId", userId],
  //       queryFn: async () =>
  //         getProfileByUserId(supabase, userId)?.then(
  //           (response) => response.data,
  //         ),
  //     },
  //     {
  //       queryKey: ["serviceId", serviceId],
  //       queryFn: async () =>
  //         getServiceById(supabase, serviceId)?.then(
  //           (response) => response.data,
  //         ),
  //     },
  //   ],
  // });

  return (
    <>
      <div>
        <div>INFO CARD</div>
        <div>CALENDAR MONTH VIEW</div>
      </div>
      <div>
        <Calendar />
      </div>
    </>
  );
}
