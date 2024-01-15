import { ReactNode } from "react";
import DashboardLayout from "~/components/layouts/Dashboard";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
