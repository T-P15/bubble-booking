import { ReactNode } from "react";
import DashboardLayout from "~/components/layouts/Dashboard/DashboardLayout";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
