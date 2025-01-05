"use client";

import Categories from "@/components/_pages/home/Categories/Categories";
import MarketBtn from "@/components/_pages/home/MarketButton";
import ShoppingByCategory from "@/components/_pages/home/ShoppingByCategory/ShoppingByCategory";
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
      <Categories />
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
      <div className="container-2xl-w mx-auto lg:px-4 2xl:px-0 px-5">
        <div className="flex flex-wrap">
          <a
            className="w-full block relative"
            target="_blank"
            // bannerdescription=""
            // bannershowpages="homePage"
            // bannerproducts=""
            // bannersrc="https://dkstatics-public.digikala.com/digikala-adservice-banners/a17381eef202b3f963bde5b80254ce9f9b1f57b9_1735717964.gif?x-oss-process=image"
            // href="/product-list/plp_228477160/?sort=7&amp;promo_name=%D9%BE%D8%A7%D8%B1%D8%AA%D9%86%D8%B1%D8%B4%DB%8C%D9%BE-%D8%B1%DB%8C+%D8%A8%D9%86&amp;promo_position=home_bottom&amp;promo_creative=191775&amp;bCode=191775"
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
                {/* <picture>
              <source type="image/webp" srcset="https://dkstatics-public.digikala.com/digikala-adservice-banners/a17381eef202b3f963bde5b80254ce9f9b1f57b9_1735717964.gif?x-oss-process=image?x-oss-process=image/format,webp">
              <source type="image/jpeg" srcset="https://dkstatics-public.digikala.com/digikala-adservice-banners/a17381eef202b3f963bde5b80254ce9f9b1f57b9_1735717964.gif?x-oss-process=image"> */}
                <img
                  className="w-full h-full styles_Banner__image__C8h94 inline-block"
                  src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a17381eef202b3f963bde5b80254ce9f9b1f57b9_1735717964.gif?x-oss-process=image"
                  alt="پارتنرشیپ-ری بن"
                  title="پارتنرشیپ-ری بن"
                  style={{ objectFit: "cover", borderRadius: "16px" }}
                />
                {/* </picture> */}
              </div>
            </div>
          </a>
        </div>
      </div>
      <ShoppingByCategory />
      <Footer />
    </div>
  );
}
