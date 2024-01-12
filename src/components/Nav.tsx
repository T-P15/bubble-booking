import { useCallback } from "react";

import {
  AccessTime,
  AccountTree,
  CalendarMonth,
  Close,
  Link,
  Settings,
} from "@mui/icons-material";

const NAV_ITEMS = [
  {
    title: "Event Types",
    href: "/dashboard/event-types",
    icon: <Link />,
  },
  {
    title: "Bookings",
    href: "/dashboard/bookings",
    icon: <CalendarMonth />,
  },
  {
    title: "Availability",
    href: "/dashboard/availability",
    icon: <AccessTime />,
  },
  {
    title: "Workflows",
    href: "/dashboard/workflows",
    icon: <AccountTree />,
  },
];

export type NavProps = {
  onClose?: () => void;
  isMobile?: boolean;
};

export function Nav({ onClose, isMobile }: NavProps) {
  const handleDrawerClose = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  return (
    <div className="flex w-full flex-col gap-x-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
      <div className="flex h-16 w-full items-center justify-between">
        <div className="flex">Logo</div>
        {isMobile ? (
          <div className="flex shrink justify-center opacity-100 lg:hidden">
            <button
              type="button"
              className="m-[-0.625rem] p-2.5"
              onClick={handleDrawerClose}
            >
              <span className="absolute m-[-1px] h-[1px] w-[1px] overflow-hidden whitespace-nowrap border-0 p-0">
                Close sidebar
              </span>
              <Close className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        ) : null}
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-x-7">
          <li>
            <ul role="list" className="mx-[-0.5rem]">
              {NAV_ITEMS.map(({ title, icon, href }) => (
                <li key={title}>
                  <a
                    href={href}
                    className="flex gap-x-3 rounded-md p-2 text-sm leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    {icon}
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <a
              href="#"
              className="mx-[-0.5rem] flex gap-x-3 rounded-md p-2 text-sm leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
            >
              <Settings className="h-6 w-6 shrink" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
