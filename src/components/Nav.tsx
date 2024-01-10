import {
  AccessTime,
  AccountTree,
  CalendarMonth,
  Link,
} from "@mui/icons-material";

const NAV_ITEMS = [
  {
    title: "Event Types",
    href: "/app/event-types",
    icon: <Link />,
  },
  {
    title: "Bookings",
    href: "/app/bookings",
    icon: <CalendarMonth />,
  },
  {
    title: "Availability",
    href: "/app/availability",
    icon: <AccessTime />,
  },
  {
    title: "Workflows",
    href: "/app/workflows",
    icon: <AccountTree />,
  },
];

export function Nav() {
  return (
    <div className="flex grow flex-col gap-x-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
      <div className="flex h-16 shrink items-center">Logo</div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-x-7">
          <li>
            <ul role="list" className="mx-[-0.5rem]">
              {NAV_ITEMS.map(({ title, icon, href }) => (
                <li key={title}>
                  <a
                    href={href}
                    className="flex gap-x-3 rounded-md bg-indigo-600 p-2 text-sm font-semibold leading-6 text-indigo-200	hover:bg-indigo-700 hover:text-white"
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
              className="flex gap-x-3 rounded-md bg-indigo-600 p-2 text-sm font-semibold leading-6 text-white hover:bg-indigo-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6 shrink text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
