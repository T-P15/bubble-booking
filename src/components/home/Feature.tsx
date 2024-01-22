"use client";

import Link from "next/link";

import { ChevronRight } from "@mui/icons-material";

function Feature() {
  return (
    <section>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto mb-8 flex max-w-screen-md flex-col lg:mb-16">
          <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            bubble is the assistant you always dreamed of.
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            our software helps increase client retention and experience, help
            staff upsell without training costs, and makes your day to day more
            efficient. Bubble will transform your store to make your life
            simplier while making more making more for you.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex w-full items-center justify-center rounded-full">
              <svg
                className="text-primary-600 dark:text-primary-300 mx-auto h-12 w-12"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-center text-xl font-bold dark:text-white">
              optimise online bookings
            </h3>
            <p className="mb-4 text-center text-gray-500 dark:text-gray-400">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
            <Link
              href={"/"}
              className="flex w-full items-center justify-center text-sm text-gray-400 dark:text-white"
            >
              Learn how to keep your funds safe
              <ChevronRight />
            </Link>
          </div>
          <div>
            <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex w-full items-center justify-center rounded-full">
              <svg
                className="text-primary-600 dark:text-primary-300 mx-auto h-12 w-12"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="mb-2 text-center text-xl font-bold dark:text-white">
              optimise staff and instore sales
            </h3>
            <p className="mb-4 text-center text-gray-500 dark:text-gray-400">
              Protect your organization, devices and stay compliant with our
              structured workflows and custom permissions made for you.
            </p>
            <Link
              href={"/"}
              className="flex w-full items-center justify-center text-sm text-gray-400 dark:text-white"
            >
              Learn how to keep your funds safe
              <ChevronRight />
            </Link>
          </div>
          <div>
            <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex w-full items-center justify-center rounded-full">
              <svg
                className="text-primary-600 dark:text-primary-300 mx-auto h-12 w-12"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            <h3 className="mb-2 text-center text-xl font-bold dark:text-white">
              flexible and customisable to your store
            </h3>
            <p className="mb-4 text-center text-gray-500 dark:text-gray-400">
              Auto-assign tasks, send Slack messages, and much more. Now power
              up with hundreds of new templates to help you get started.
            </p>
            <Link
              href={"/"}
              className="flex w-full items-center justify-center text-sm text-gray-400 dark:text-white"
            >
              Learn how to keep your funds safe
              <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
