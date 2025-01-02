import CartOff from "@/assets/icons/CartOff";
import LeftArrow from "@/assets/icons/LeftArrow";
import Logo from "@/assets/icons/Logo";
import SearchIcon from "@/assets/icons/SearchIcon";
import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import { LuBadgePercent, LuMenu } from "react-icons/lu";

type Props = {};
function Header({}: Props) {
  const productCount = true;
  return (
    <header className="flex-col top-0 z-40 w-full select-none sticky border-b border-gray-300 bg-white px-4 shadow">
      <div className="flex justify-between items-center py-3">
        <div className="flex items-center gap-3">
          <Link href="#" className="w-[195px] h-[30px]">
            <Logo />
          </Link>
          <div className="relative flex items-center lg:min-w-[600px] md:min-w-[400px] h-[44px] bg-[#F0F0F1] rounded-lg">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-transparent text-gray-900  focus:ring-0 focus:outline-none block w-full px-4 pb-[8.99px] pt-[8.6px] ps-10 font-normal text-xs"
              placeholder="جستجو"
            />
          </div>
        </div>
        {/* left */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="text-gray-900 flex items-center gap-2 bg-white border border-[rgb(224, 224, 226)] w-[134.261px] h-10 py-2 px-4 focus:outline-none font-normal text-xs rounded-lg leading-[26.04px]"
          >
            <LeftArrow />
            <span>ورود | ثبت نام</span>
          </button>
          <div className="border-s border-[#E0E0E2] ps-5">
            <button
              className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Cart"
            >
              <CartOff />
              {productCount && (
                <span className="absolute inset-0 top-5 object-right-bottom -mr-6">
                  <div className="inline-flex w-5 h-5 items-center p-1 border-2 border-white rounded-md text-xs font-semibold leading-4 bg-red-500 text-white">
                    ۳
                  </div>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div
        className="flex justify-between gap-4 font-medium text-sm"
        style={{
          height: " 40px",
          // padding: "0px 16px",
        }}
      >
        <div className="flex justify-between gap-4">
          <div className="flex items-center gap-2">
            <LuMenu />
            <span>دسته بندی کالا</span>
            <span
              style={{
                width: "1px",
                height: "16px",
                margin: "0px 8px",
                display: "block",
                boxSizing: "border-box",
                background: "black",
                fontSize: "15px",
                fontWeight: 700,
                lineHeight: "32.25px",
                color: "black",
              }}
            ></span>
          </div>
          <div className="flex items-center text-gray-500 gap-2 px-2 border-b-[3px] border-transparent hover:border-[#FF0800] transition-border duration-150">
            <LuBadgePercent />
            <span>شگفت انگیزها</span>
          </div>
          <div className="flex items-center text-gray-500 gap-2 px-2 border-b-[3px] border-transparent hover:border-[#FF0800] transition-border duration-150">
            <LuBadgePercent />
            <span>سوپرمارکت</span>
          </div>
          <div className="flex items-center text-gray-500 gap-2 px-2 border-b-[3px] border-transparent hover:border-[#FF0800] transition-border duration-150">
            <LuBadgePercent />
            <span>کارت هدیه</span>
          </div>
          <div className="flex items-center text-gray-500 gap-2 px-2 border-b-[3px] border-transparent hover:border-[#FF0800] transition-border duration-150">
            <LuBadgePercent />
            <span>پرفروش ترین ها</span>
          </div>
          <div className="flex items-center text-gray-500 gap-2 px-2 border-b-[3px] border-transparent hover:border-[#FF0800] transition-border duration-150">
            <LuBadgePercent />
            <span>سوالی دارید؟</span>
          </div>
          <div className="flex items-center text-gray-500 gap-2 px-2 border-b-[3px] border-transparent hover:border-[#FF0800] transition-border duration-150">
            <LuBadgePercent />
            <span>در دیجی کالا بفروشید!</span>
          </div>
        </div>
        <div
          className="text-[#F57F17] bg-[#FEF6EF] rounded-3xl flex items-center justify-center gap-1 font-medium py-2 px-3"
          style={{
            width: "172.318px",
            height: "34.0341px",
            // padding: " 4px 12px",
          }}
        >
          <GrLocation className="mt-1" />

          <span>شهرخود را انتخاب کنید</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
