import BaseLayout from "~/components/layouts/Base";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BaseLayout>{children}</BaseLayout>;
}
