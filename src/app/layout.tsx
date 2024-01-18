import "~/utils/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { ReactNode } from "react";
import { ReactQueryClientProvider } from "~/utils/providers/ReactQueryClientProvider";
import { SessionProvider } from "~/utils/providers/SessionProvider";
import { SettingsProvider } from "~/utils/providers/SettingsProvider";
import { ThemeProvider } from "~/utils/providers/ThemeProvider";
import useSupabaseServer from "~/utils/server/supabase-server";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Bubble Booking",
  description: "Bubble Booking",
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
      <body className={`font-sans ${inter.variable}`}>
        <ReactQueryClientProvider>
          <ThemeProvider>
            <SessionProvider session={session}>
              <SettingsProvider>{children}</SettingsProvider>
            </SessionProvider>
          </ThemeProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
