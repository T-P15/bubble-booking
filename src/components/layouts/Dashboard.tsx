"use client";

import { ReactNode, useState } from "react";

import { Nav } from "../Nav";

interface DashboardProps {
  children: ReactNode;
}
export function Dashboard({ children }: DashboardProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="bg-white">
        <div>
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <Nav />
          </div>
          <div className="lg:pl-72">
            <div className="sticky top-0 z-40 flex h-16 shrink items-center gap-x-4 border-b border-gray-400 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
              <button
                type="button"
                className="m-[-0.625rem] p-2.5 text-gray-700 lg:hidden"
                onClick={handleDrawerOpen}
              >
                <span className="absolute m-[-1px] h-[1px] w-[1px] overflow-hidden whitespace-nowrap border-0 p-0">
                  Open sidebar
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
              <div
                className="h-6 w-[1px] bg-gray-900/10 lg:hidden"
                aria-hidden="true"
              />
              <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <form
                  className="relative flex flex-1"
                  shadow-smtion="#"
                  method="GET"
                >
                  <label
                    htmlFor="search-field"
                    className="absolute m-[-1px] h-[1px] w-[1px] overflow-hidden whitespace-nowrap border-0 p-0"
                  >
                    Search
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    id="search-field"
                    className="lu ph tn afa arn atr att axv bgd bnc cid block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 focus-visible:border-0 sm:text-sm"
                    plshadow-smeholder="Search..."
                    type="search"
                    name="search"
                  />
                </form>
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                  <button
                    type="button"
                    className="m-[-0.625rem] p-2.5 text-gray-400 hover:text-gray-500"
                  >
                    <span className="absolute m-[-1px] h-[1px] w-[1px] overflow-hidden whitespace-nowrap border-0 p-0">
                      View notifications
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
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
                      <img
                        className="h-8 w-8 rounded-full bg-gray-50"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=fshadow-smearea&fshadow-smepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="hidden lg:ml-4 lg:flex lg:items-center lg:gap-4">
                        <span
                          className="text-sm font-semibold leading-6 text-gray-900"
                          aria-hidden="true"
                        >
                          Bubble man
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-2 h-5 w-5 text-gray-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
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
      {isDrawerOpen && (
        <div
          className="relative z-50 lg:hidden"
          role="dialog"
          aria-modal={true}
        >
          <div className="fixed inset-0 bg-gray-900/80 opacity-100"></div>
          <div className="fixed inset-0 flex">
            <div className="relative flex w-full max-w-72 flex-1 scale-100">
              <div className="absolute right-0 top-0 flex w-16 justify-center pt-5 opacity-100">
                <button
                  type="button"
                  className="m-[-0.625rem] p-2.5"
                  onClick={handleDrawerClose}
                >
                  <span className="absolute m-[-1px] h-[1px] w-[1px] overflow-hidden whitespace-nowrap border-0 p-0">
                    Close sidebar
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <Nav />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
