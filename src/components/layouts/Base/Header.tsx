import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import ThemeSwitcher from "~/components/ThemeSwitcher";
import useSupabaseClient from "~/utils/client/supabase-client";
import useQuery from "~/utils/hooks/useQuery";
import useSession from "~/utils/hooks/useSession";

import { Close, Menu } from "@mui/icons-material";

const NAV_ITEMS = [
  { title: "Company", href: "#" },
  { title: "Marketplace", href: "#" },
  { title: "Features", href: "#" },
  { title: "Team", href: "#" },
  { title: "Contact", href: "#" },
];

function Header() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const { setSearchParam } = useQuery();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleClickLogIn = useCallback(() => {
    setSearchParam("auth-modal", "sign_in");
  }, [setSearchParam]);

  const handleClickSignUp = useCallback(() => {
    setSearchParam("auth-modal", "sign_up");
  }, [setSearchParam]);

  const handleClickSignOut = useCallback(async () => {
    try {
      void fetch("/auth/signout", { method: "POST" });

      await supabase.auth.signOut();
    } catch (e) {
      console.error(e);
    }
  }, [supabase.auth]);

  return (
    <header className="sticky top-0 z-50">
      <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              className="mr-3 aspect-square w-6 sm:w-9"
              alt="Bubble Booking"
              width={6000}
              height={6000}
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Bubble Booking
            </span>
          </a>
          <div
            className={`${
              isMobileMenuOpen ? " flex " : "hidden"
            } absolute left-0 top-full w-full items-center justify-between bg-white dark:bg-gray-800 lg:relative lg:order-1 lg:flex lg:w-auto`}
          >
            <ul className="flex w-full flex-col font-medium lg:mt-0 lg:flex-row lg:gap-x-8">
              {NAV_ITEMS.map((navItem) => (
                <li key={navItem.title}>
                  <Link
                    href={navItem.href}
                    className="lg:hover:text-primary block rounded border-gray-100 px-4 py-2 text-center text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-2 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center lg:order-2">
            {session ? (
              <>
                {session.user.email}
                <button
                  onClick={handleClickSignOut}
                  className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:px-5 lg:py-2.5"
                >
                  Sign out
                </button>{" "}
              </>
            ) : (
              <>
                <button
                  onClick={handleClickLogIn}
                  className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:px-5 lg:py-2.5"
                >
                  Log in
                </button>
                <button
                  onClick={handleClickSignUp}
                  className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 focus:outline-none focus:ring-4 dark:text-white lg:px-5 lg:py-2.5"
                >
                  Sign up
                </button>
              </>
            )}
            <ThemeSwitcher />
            <button
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
              aria-expanded="false"
              onClick={handleToggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <Close className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
