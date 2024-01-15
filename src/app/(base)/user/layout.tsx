import Image from "next/image";
import { ReactNode } from "react";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="dark:bg-gray-900">
      <div className="mx-auto w-full max-w-lg sm:py-10">
        <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-6 p-10 sm:rounded-3xl sm:bg-white sm:dark:bg-gray-800">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/images/logo.png"}
              alt={"Bubble Booking Logo"}
              width={6000}
              height={6000}
              className="aspect-square w-20"
            />
            <span className="text-lg">Bubble Booking</span>
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
