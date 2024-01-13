"use client";

import { ReactNode, useState } from "react";

import { ExpandMore, Menu, Notifications, Search } from "@mui/icons-material";
import { Avatar, InputAdornment, InputBase } from "@mui/material";

import { Nav } from "./Nav";

interface DashboardProps {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <div className="bg-white">
        <div>
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
                  <div className="relative" data-headlessui-state="">
                    <button
                      className="m-[-0.375rem] flex items-center p-1.5"
                      id="headlessui-menu-button-1"
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-headlessui-state=""
                      onClick={handleDrawerOpen}
                    >
                      <span className="absolute m-[-1px] h-[1px] w-[1px] overflow-hidden whitespace-nowrap border-0 p-0">
                        Open user menu
                      </span>
                      <Avatar src="" alt="Bubble man" />
                      <span className="hidden lg:ml-4 lg:flex lg:items-center lg:gap-4">
                        <span
                          className="text-sm leading-6 text-gray-900"
                          aria-hidden="true"
                        >
                          Bubble man
                        </span>
                        <ExpandMore className="ml-2 h-5 w-5 text-gray-400" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <main className="px-4 py-10 sm:px-6 lg:px-8">{children}</main>
          </div>
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
