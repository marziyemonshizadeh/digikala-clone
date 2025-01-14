"use client";

import Categories from "@/components/_pages/home/Categories/Categories";
import MarketBtn from "@/components/_pages/home/MarketButton";
import ShoppingByCategory from "@/components/_pages/home/ShoppingByCategory/ShoppingByCategory";
import Footer from "@/components/layout/Footer/Footer";
import SmallDevicesFooter from "@/components/layout/Footer/SmallDevicesFooter";
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
    <div className="bg-white dark:bg-[#2e2b27] flex flex-col justify-between min-h-screen">
      <Header />
      <main className="grow">
        <Categories />
        <div className="flex-1 z-50 lg:block hidden">
          <MarketBtn />
          <Link
            href="#"
            id="btn-back-to-top"
            className="rounded-full fixed bottom-[32px] right-[50px] me-3 z-50 flex items-center justify-center bg-red-500 text-white text-2xl w-12 h-12"
          >
            <BiSupport />
          </Link>
        </div>
        <div className="container-2xl-w mx-auto lg:px-4 2xl:px-0 px-5">
          <div className="flex flex-wrap">
            <a
              className="w-full block relative"
              target="_blank"
              style={{
                width: "calc(100% + 0px)",
                marginRight: "0px",
                marginTop: "0px",
              }}
            >
              <div>
                <div
                  className="h-full styles_Banner--d__24zzm"
                  style={{ borderRadius: "16px", lineHeight: "0" }}
                >
                  <img
                    className="w-full h-full styles_Banner__image__C8h94 inline-block"
                    src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a17381eef202b3f963bde5b80254ce9f9b1f57b9_1735717964.gif?x-oss-process=image"
                    alt="پارتنرشیپ-ری بن"
                    title="پارتنرشیپ-ری بن"
                    style={{ objectFit: "cover", borderRadius: "16px" }}
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
        <ShoppingByCategory />
      </main>
      <footer>
        <Footer />
        <SmallDevicesFooter />
      </footer>
    </div>
  );
}
