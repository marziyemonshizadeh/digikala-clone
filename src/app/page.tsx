"use client";

import Category from "@/components/_pages/home/Categories/Category";
import MarketBtn from "@/components/_pages/home/MarketButton";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";

// import { useRouter } from "next/router";
// import { useEffect } from "react";

export default function page() {
  // const { push } = useRouter();

  // useEffect(() => {
  //   push("/home");
  // }, []);

  return (
    <div className="bg-white dark:bg-[#2e2b27] flex flex-col min-h-screen">
      <Header />/ page
      <Category />
      <div className="flex-1 z-50">
        <MarketBtn />
        <Link
          href="#"
          id="btn-back-to-top"
          className="rounded-full fixed bottom-[32px] right-[50px] me-3 z-50 flex items-center justify-center bg-red-500 text-white text-2xl w-12 h-12"
        >
          <BiSupport />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
