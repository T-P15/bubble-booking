"use client";

import { redirect } from "next/navigation";
import { ReactNode, Suspense, useCallback, useEffect, useState } from "react";
import useSession from "~/utils/hooks/useSession";

import { Menu, Notifications, Search } from "@mui/icons-material";
import { InputAdornment, InputBase } from "@mui/material";

import { Loading } from "../Loading";
import { Nav } from "./Nav";

interface DashboardProps {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardProps) {
  const session = useSession();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  useEffect(() => {
    if (session?.user.role !== "authenticated") {
      redirect("/");
    }
  }, [session?.user.role]);

  return (
    <div>
      <div className="bg-white">
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-full lg:max-w-72 lg:flex-col">
          <Nav />
        </div>
        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="m-[-0.625rem] p-2.5 text-gray-700 lg:hidden"
              onClick={handleDrawerOpen}
            >
              <span className="absolute m-[-1px] h-[1px] w-[1px] overflow-hidden whitespace-nowrap border-0 p-0">
                Open sidebar
              </span>
              <Menu className="h-6 w-6" />
            </button>
            <div
              className="h-6 w-[1px] bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />
            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <InputBase
                className="relative flex flex-1"
                placeholder="Search"
                startAdornment={
                  <InputAdornment position="start">
                    <Search className="text-gray-400" />
                  </InputAdornment>
                }
              />
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="m-[-0.625rem] p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="absolute m-[-1px] h-[1px] w-[1px] overflow-hidden whitespace-nowrap border-0 p-0">
                    View notifications
                  </span>
                  <Notifications className="h-6 w-6" />
                </button>
                <div
                  className="hidden bg-gray-900/10 lg:block lg:h-6 lg:w-[1px]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <main className="px-4 py-10 sm:px-6 lg:px-8">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
        </div>
      </div>
      <div
        className={`relative z-50 transition-all  lg:hidden ${
          isDrawerOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="fixed inset-0 bg-gray-900/80 opacity-100"
          onClick={handleDrawerClose}
        ></div>
        <div className="fixed inset-0 flex w-full max-w-72">
          <div className="relative flex flex-1 scale-100">
            <Nav onClose={handleDrawerClose} isMobile={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
