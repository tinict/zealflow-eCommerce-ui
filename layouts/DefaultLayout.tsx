import React from "react";
import Footer from "@/components/footer";
import NavbarHeader from "@/components/navbar";

import { Navbar } from "@/components/navbar";

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarHeader />
      <div>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
