import Image from "next/image";
import { useCallback, useState } from "react";
import ThemeSwitcher from "~/components/ThemeSwitcher";

const NAV_ITEMS = [
  { title: "feature", href: "feature" },
  { title: "image with content", href: "image-with-content" },
  { title: "image with cta", href: "image-with-cta" },
];

function Header() {
  // const supabase = useSupabaseClient();
  // const session = useSession();
  // const { setSearchParam } = useQuery();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // const handleClickLogIn = useCallback(() => {
  //   setSearchParam("auth-modal", "sign_in");
  // }, [setSearchParam]);

  // const handleClickSignUp = useCallback(() => {
  //   setSearchParam("auth-modal", "sign_up");
  // }, [setSearchParam]);

  // const handleClickSignOut = useCallback(async () => {
  //   try {
  //     void fetch("/auth/signout", { method: "POST" });

  //     await supabase.auth.signOut();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, [supabase.auth]);

  const scrollToId = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 m-auto bg-white/50 lowercase shadow-lg backdrop-blur dark:bg-black/50">
      <nav className="px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-lg flex-wrap items-center justify-between">
          <a href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              className="mr-3 aspect-square w-6 sm:w-9"
              alt="Bubble Bookings"
              width={6000}
              height={6000}
            />
            <span className="self-center whitespace-nowrap text-xl dark:text-white">
              bubble
            </span>
          </a>
          {/* <div
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } lg:bg-image absolute left-0 top-full w-full items-center justify-between bg-white/90 backdrop-blur dark:bg-black/90 lg:relative lg:order-1 lg:flex lg:w-auto lg:bg-transparent lg:backdrop-blur-[none] lg:dark:bg-transparent`}
          >
            <ul className="flex w-full flex-col lg:mt-0 lg:flex-row lg:gap-x-8">
              {NAV_ITEMS.map((navItem) => (
                <li key={navItem.title}>
                  <button
                    onClick={() => scrollToId(navItem.href)}
                    className="block rounded px-4 py-2 text-center text-gray-700 hover:text-gray-500 dark:text-gray-400 dark:hover:text-white lg:border-0 lg:p-2 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    {navItem.title}
                  </button>
                </li>
              ))}
            </ul>
          </div> */}
          <div className="flex items-center lg:order-2">
            {/* TODO: implement auth
              {session ? (
              <>
                {session.user.email}
                <button
                  onClick={handleClickSignOut}
                  className="block rounded px-4 py-2 text-center text-gray-700 hover:text-gray-500 dark:text-gray-400 dark:hover:text-white lg:border-0 lg:p-2 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  sign out
                </button>{" "}
              </>
            ) : (
              <>
                <button
                  onClick={handleClickLogIn}
                  className="block rounded px-4 py-2 text-center text-gray-700 hover:text-gray-500 dark:text-gray-400 dark:hover:text-white lg:border-0 lg:p-2 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  log in
                </button>
                <button
                  onClick={handleClickSignUp}
                  className="block rounded px-4 py-2 text-center text-gray-700 hover:text-gray-500 dark:text-gray-400 dark:hover:text-white lg:border-0 lg:p-2 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  sign up
                </button>
              </>
            )} */}
            <ThemeSwitcher />
            {/* <button
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-700 hover:text-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:hidden"
              aria-expanded="false"
              onClick={handleToggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <Close className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
