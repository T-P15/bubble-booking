import "~/utils/styles/globals.css";

import { Quicksand } from "next/font/google";
import { cookies } from "next/headers";
import { ReactNode, Suspense } from "react";
import { Loading } from "~/components/layouts/Loading";
import { ReactQueryClientProvider } from "~/utils/providers/ReactQueryClientProvider";
import { SettingsProvider } from "~/utils/providers/SettingsProvider";
import SupabaseProvider from "~/utils/providers/SupabaseProvider";
import { ThemeProvider } from "~/utils/providers/ThemeProvider";
import useSupabaseServer from "~/utils/server/supabase-server";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Bubble Bookings",
  description: "Bubble Bookings",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = useSupabaseServer(cookies());
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${quicksand.variable}`}>
        <ReactQueryClientProvider>
          <ThemeProvider>
            <SupabaseProvider session={session}>
              <SettingsProvider>
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </SettingsProvider>
            </SupabaseProvider>
          </ThemeProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
