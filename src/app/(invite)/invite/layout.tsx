import { ReactNode } from "react";
import InviteLayout from "~/components/layouts/Invite/InviteLayout";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <InviteLayout>{children}</InviteLayout>;
}
