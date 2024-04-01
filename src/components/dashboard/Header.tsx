import { ReactNode } from "react";

export type HeaderProps = {
  title: string;
  subtitle?: string;
  actionBar?: ReactNode;
};

export default function Header({ title, subtitle, actionBar }: HeaderProps) {
  return (
    <div className="mb-0 flex w-full max-w-full items-center truncate md:mb-6 md:mt-0 lg:mb-8">
      <div className="w-full truncate md:block ltr:mr-4 rtl:ml-4">
        <h3 className="text-emphasis hidden max-w-28 truncate text-xl tracking-wide text-gray-700 sm:max-w-72 sm:text-xl md:block md:max-w-80 xl:max-w-full">
          {title}
        </h3>
        {subtitle && (
          <p className="hidden text-sm font-normal leading-6 text-gray-700 md:block">
            {subtitle}
          </p>
        )}
      </div>
      {actionBar && (
        <div className="pwa:bottom-[max(7rem,_calc(5rem_+_env(safe-area-inset-bottom)))] fixed bottom-20 z-40 flex-shrink-0 [-webkit-app-region:no-drag] md:relative md:bottom-auto md:right-auto md:z-auto ltr:right-4 md:ltr:right-0 rtl:left-4 md:rtl:left-0">
          {actionBar}
        </div>
      )}
    </div>
  );
}
