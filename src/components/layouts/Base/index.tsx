import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

interface DefaultProps {
  children: ReactNode;
}

function BaseLayout({ children }: DefaultProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default BaseLayout;
