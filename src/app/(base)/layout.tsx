import { ReactNode } from "react";
import BaseLayout from "~/components/layouts/Base";

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return <BaseLayout>{children}</BaseLayout>;
}
