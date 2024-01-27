import "~/utils/styles/globals.css";

import { Poppins } from "next/font/google";
import { cookies } from "next/headers";
import { ReactNode, Suspense } from "react";
import { Loading } from "~/components/layouts/Loading";
import { ReactQueryClientProvider } from "~/utils/providers/ReactQueryClientProvider";
import { SettingsProvider } from "~/utils/providers/SettingsProvider";
import SupabaseProvider from "~/utils/providers/SupabaseProvider";
import { ThemeProvider } from "~/utils/providers/ThemeProvider";
import useSupabaseServer from "~/utils/server/supabase-server";

import { GoogleAnalytics } from "@next/third-parties/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
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
  const gaId = process.env.NEXT_PUBLIC_GTM_ID;
  const supabase = useSupabaseServer(cookies());
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${poppins.variable}`}>
        <ReactQueryClientProvider>
          <ThemeProvider>
            <SupabaseProvider session={session}>
              <SettingsProvider>
                <Suspense fallback={<Loading />}>{children}</Suspense>
                {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
              </SettingsProvider>
            </SupabaseProvider>
          </ThemeProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
