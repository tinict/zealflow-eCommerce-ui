import { Navbar } from "@/components/navbar";
import React from "react";
import { Link } from "@nextui-org/link";
import Footer from "@/components/footer";

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
