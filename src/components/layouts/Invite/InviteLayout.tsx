"use client";

import { ReactNode } from "react";

interface DefaultProps {
  children: ReactNode;
}

export default function InviteLayout({ children }: DefaultProps) {
  return (
    <main className="m-auto">
      <div className="m-auto backdrop-blur">{children}</div>
    </main>
  );
}
