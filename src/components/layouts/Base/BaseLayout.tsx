"use client";

import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

interface DefaultProps {
  children: ReactNode;
}

function BaseLayout({ children }: DefaultProps) {
  return (
    <main>
      <Header />
      <div className="m-auto bg-gray-100 dark:bg-gray-800">{children}</div>
      <Footer />
    </main>
  );
}

export default BaseLayout;
