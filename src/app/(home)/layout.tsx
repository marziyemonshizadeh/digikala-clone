import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import Link from "next/link";
import React from "react";
import { BiSupport } from "react-icons/bi";

type homePageLayoutProps = { children: React.ReactNode };

const HomePageLayout = async ({ children }: homePageLayoutProps) => {
  return (
    <div className="bg-white dark:bg-[#2e2b27] flex flex-col min-h-screen">
      <Header />
      {children}
      {/* <Category /> */}
      <div className="flex items-center flex-1">
        {/* <ScrollToTop /> */}
        <Link
          href="#"
          id="btn-back-to-top"
          className="rounded-full fixed bottom-[32px] right-[50px] me-3 z-50 flex items-center justify-center bg-red-500 text-white text-2xl w-12 h-12 "
        >
          <BiSupport />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default HomePageLayout;
