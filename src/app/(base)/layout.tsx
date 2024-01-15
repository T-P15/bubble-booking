import { ReactNode } from "react";
import BaseLayout from "~/components/layouts/Base";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <BaseLayout>{children}</BaseLayout>;
}
