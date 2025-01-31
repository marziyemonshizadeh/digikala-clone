import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
// import Header from "@/components/layout/Header/Header";
// import Image from "next/image";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";

function notFound() {
  return (
    <div className="flex flex-col gap-0 min-h-screen">
      <Header />
      <div className="grow bg-neutral-000 w-full container-2xl-w pt-6 flex flex-col justify-center items-center px-5">
        <h2 className="text-h4 text-neutral-800 text-center">
          صفحه‌ای که دنبال آن بودید پیدا نشد!
        </h2>
        <a
          className="inline-flex items-center cursor-pointer styles_Anchor--secondary__3KsgY text-button-2 mt-4"
          href="/"
        >
          <span>صفحه اصلی</span>
          <div className="flex"></div>
        </a>
        <div className="mt-8 flex justify-center items-center">
          <div className="max-w-full">
            {/* <Image
                className="w-44 h-44"
                alt="notFound"
                src="https://www.digikala.com/statics/img/png/page-not-found.webp"
                width={200}
                height={200}
                priority
              /> */}
            <img
              src="https://www.digikala.com/statics/img/png/page-not-found.webp"
              alt="test"
            />
          </div>
        </div>
      </div>

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
}

export default notFound;
