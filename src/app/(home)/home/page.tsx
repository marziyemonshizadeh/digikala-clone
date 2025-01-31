"use client";
import { homeWidget } from "@/constants/endpoints";
import { useGetService } from "@/hooks/api";
import { SetStateAction, useEffect, useState } from "react";
import Categories from "./components/Categories/Categories";
import FullSider from "./components/FullSider/FullSider";
import Stories from "./components/Stories/Stories";
// import { useGetService } from "@/hooks/api";
// import { homeWidget } from "@/constants/endpoints";

type Props = {};

export default function Home({}: Props) {
  const { data, isLoading } = useGetService<any>(homeWidget, homeWidget, true);
  const [fullSliderData, setFullSliderData] = useState([]);
  const [deepLinksData, setDeepLinksData] = useState([]);
  console.log("data", data?.data?.widgets);

  useEffect(() => {
    if (!isLoading) {
      data?.data?.widgets?.map(
        (widget: { type: string; data: SetStateAction<never[]> }) => {
          if (widget.type == "full_slider") setFullSliderData(widget?.data);
          else if (widget.type == "deep_links") setDeepLinksData(widget?.data);
        }
      );
    }
  }, [isLoading]);

  return (
    <main className="grow">
      <Stories />
      <FullSider data={fullSliderData} />
      <Categories data={deepLinksData} />
      {/* <div className="flex-1 z-50 lg:block hidden">
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
      <ShoppingByCategory /> */}
    </main>
  );
}
