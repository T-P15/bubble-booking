"use client";

import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

interface DefaultProps {
  children: ReactNode;
}

function BaseLayout({ children }: DefaultProps) {
  return (
    <main className="dark:from-primary-dark-pale-blue from-primary-pale-blue via-secondary-pale-purple dark:via-secondary-dark-pale-purple to-tertiary-baby-pink dark:to-tertiary-dark-baby-pink m-auto scroll-smooth bg-gradient-to-br lowercase">
      <Header />
      <div className="m-auto backdrop-blur">{children}</div>
      <Footer />
    </main>
  );
}

export default BaseLayout;
