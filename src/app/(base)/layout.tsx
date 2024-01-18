import { ReactNode } from "react";
import BaseLayout from "~/components/layouts/Base/BaseLayout";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <BaseLayout>{children}</BaseLayout>;
}
