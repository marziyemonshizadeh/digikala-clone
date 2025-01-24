import CartOff from "@/assets/icons/CartOff";
import LeftArrow from "@/assets/icons/LeftArrow";
import Logo from "@/assets/icons/Logo";
import SearchIcon from "@/assets/icons/SearchIcon";
import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { LuBadgePercent, LuMenu } from "react-icons/lu";
import Cart from "./Cart/Cart";
import SmallDevicesSearchBar from "./SmallDevicesSearchBar";

function Header() {
  const productCount = true;
  return (
    <header className="flex-col top-0 w-full select-none sticky border-b border-gray-300 bg-white px-4 shadow z-50">
      <div className="lg:flex block lg:justify-between items-center py-3">
        <div className="lg:flex block lg:items-center gap-3">
          <Link href="#" className="lg:block hidden w-[195px] h-[30px]">
            <Logo />
          </Link>
          <div className="relative lg:flex hidden items-center lg:min-w-[600px] md:w-full h-[44px] bg-[#F0F0F1] rounded-lg">
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
          <SmallDevicesSearchBar />
        </div>
        {/* left */}
        <div className="lg:flex hidden items-center gap-3">
          <button
            type="button"
            className="text-gray-900 flex items-center gap-2 bg-white border border-[rgb(224, 224, 226)] w-[134.261px] h-10 py-2 px-4 focus:outline-none font-normal text-xs rounded-lg leading-[26.04px]"
          >
            <LeftArrow />
            <span>ورود | ثبت نام</span>
          </button>
          <div className="border-s border-[#E0E0E2] ps-5 group relative">
            <button
              className="p-2 group group-hover:bg-[#FCEAEC] relative border-2 border-transparent text-gray-800 rounded-md hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Cart"
            >
              <CartOff />
              {productCount && (
                <span className="absolute inset-0 top-3 object-right-bottom -mr-6">
                  <div className="inline-flex w-5 h-5 items-center p-1 border-2 border-white rounded-md text-xs font-semibold leading-4 bg-red-500 text-white">
                    ۳
                  </div>
                </span>
              )}
            </button>
            <Cart />
          </div>
        </div>
      </div>
      {/* navbar */}
      <nav className="lg:flex hidden justify-between font-medium text-sm h-10">
        <div className="flex justify-between gap-4">
          <div className="relative group flex items-center border-b-[3px] border-transparent hover:border-[#FF0800] transition-border duration-150">
            <div className="group flex items-center gap-2">
              <LuMenu />
              <span>دسته بندی کالا</span>
              <span
                style={{
                  width: "1px",
                  height: "16px",
                  margin: "0px 8px",
                  display: "block",
                  boxSizing: "border-box",
                  background: "#A3A5A9",
                  fontSize: "15px",
                  fontWeight: 700,
                  lineHeight: "32.25px",
                  color: "#A3A5A9",
                }}
              ></span>
            </div>
            <div className="absolute top-[41px] rounded-bl-lg w-[800px] h-96 bg-white hidden group-hover:md:inline-flex hover:md:inline-flex w-100 z-10 w-100">
              <ul className="bg-[#F5F5F5] h-96 overflow-y-scroll w-[250px]">
                <li className="p-4 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#F05D78]">
                  <LuBadgePercent />
                  <span className="font-semibold text-xs">موبایل</span>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#F05D78]">
                  <LuBadgePercent />
                  <span className="font-semibold text-xs">کالای دیجیتال</span>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#F05D78]">
                  <LuBadgePercent />
                  <span className="font-semibold text-xs">خانه‌و‌آشپزخانه</span>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#F05D78]">
                  <LuBadgePercent />
                  <span className="font-semibold text-xs">آرایشی بهداشتی</span>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#F05D78]">
                  <LuBadgePercent />
                  <span className="font-semibold text-xs">
                    خودرو‌و‌موتورسیکلت
                  </span>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#F05D78]">
                  <LuBadgePercent />
                  <span className="font-semibold text-xs">
                    لوازم‌خانگی‌برقی
                  </span>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#F05D78]">
                  <LuBadgePercent />
                  <span className="font-semibold text-xs">
                    ابزار‌آلات‌و‌تجهیزات
                  </span>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#F05D78]">
                  <LuBadgePercent />
                  <span className="font-semibold text-xs">مد و پوشاک</span>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#F05D78]">
                  <LuBadgePercent />
                  <span className="font-semibold text-xs">طلا و نقره</span>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#F05D78]">
                  <LuBadgePercent />
                  <span className="font-semibold text-xs">
                    تجهیزات‌پزشکی‌وسلامت
                  </span>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#F05D78]">
                  <LuBadgePercent />
                  <span className="font-semibold text-xs">
                    کتاب،لوازم‌تحریر‌وهنر
                  </span>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#F05D78]">
                  <LuBadgePercent />
                  <span className="font-semibold text-xs">ورزش‌و‌سفر</span>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#F05D78]">
                  <LuBadgePercent />
                  <span className="font-semibold text-xs">
                    کارت‌هدیه‌و‌گیفت‌کارت
                  </span>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#F05D78]">
                  <LuBadgePercent />
                  <span className="font-semibold text-xs">
                    کالای‌خوراکی‌و‌اساسی
                  </span>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#F05D78]">
                  <LuBadgePercent />
                  <span className="font-semibold text-xs">
                    اسباب‌بازی،کودک‌و‌نوزاد
                  </span>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#F05D78]">
                  <LuBadgePercent />
                  <span className="font-semibold text-xs">
                    محصولات‌بومی‌و‌محلی
                  </span>
                </li>
              </ul>
              <div className="overflow-y-scroll w-[750px] p-5">
                <div className="flex items-center gap-1 text-[#42AAC6] font-medium">
                  <Link href={"/"}>همه محصولات موبایل</Link>
                  <IoIosArrowBack />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  molestias in architecto aut pariatur? Excepturi reprehenderit
                  nam autem corporis nulla, illo, ad nobis voluptate nesciunt
                  praesentium ipsa. Qui ducimus perspiciatis itaque rerum
                  quisquam amet alias dicta distinctio, voluptate eius in?
                  Corrupti doloremque, illo debitis et voluptatum pariatur
                  sapiente sit aperiam sunt quos ex nesciunt aliquid culpa iusto
                  odio nulla autem! Voluptates, iure quam odio, mollitia,
                  excepturi ad distinctio sint soluta qui labore inventore! Aut
                  facere, a repellat ducimus officia saepe pariatur, dolores
                  quas explicabo, ab incidunt repudiandae maxime alias. Facilis
                  exercitationem voluptas beatae minima? Natus nihil doloribus
                  consequuntur repudiandae itaque? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Unde molestias in architecto aut
                  pariatur? Excepturi reprehenderit nam autem corporis nulla,
                  illo, ad nobis voluptate nesciunt praesentium ipsa. Qui
                  ducimus perspiciatis itaque rerum quisquam amet alias dicta
                  distinctio, voluptate eius in? Corrupti doloremque, illo
                  debitis et voluptatum pariatur sapiente sit aperiam sunt quos
                  ex nesciunt aliquid culpa iusto odio nulla autem! Voluptates,
                  iure quam odio, mollitia, excepturi ad distinctio sint soluta
                  qui labore inventore! Aut facere, a repellat ducimus officia
                  saepe pariatur, dolores quas explicabo, ab incidunt
                  repudiandae maxime alias. Facilis exercitationem voluptas
                  beatae minima? Natus nihil doloribus consequuntur repudiandae
                  itaque? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Unde molestias in architecto aut pariatur? Excepturi
                  reprehenderit nam autem corporis nulla, illo, ad nobis
                  voluptate nesciunt praesentium ipsa. Qui ducimus perspiciatis
                  itaque rerum quisquam amet alias dicta distinctio, voluptate
                  eius in? Corrupti doloremque, illo debitis et voluptatum
                  pariatur sapiente sit aperiam sunt quos ex nesciunt aliquid
                  culpa iusto odio nulla autem! Voluptates, iure quam odio,
                  mollitia, excepturi ad distinctio sint soluta qui labore
                  inventore! Aut facere, a repellat ducimus officia saepe
                  pariatur, dolores quas explicabo, ab incidunt repudiandae
                  maxime alias. Facilis exercitationem voluptas beatae minima?
                  Natus nihil doloribus consequuntur repudiandae itaque? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Unde
                  molestias in architecto aut pariatur? Excepturi reprehenderit
                  nam autem corporis nulla, illo, ad nobis voluptate nesciunt
                  praesentium ipsa. Qui ducimus perspiciatis itaque rerum
                  quisquam amet alias dicta distinctio, voluptate eius in?
                  Corrupti doloremque, illo debitis et voluptatum pariatur
                  sapiente sit aperiam sunt quos ex nesciunt aliquid culpa iusto
                  odio nulla autem! Voluptates, iure quam odio, mollitia,
                  excepturi ad distinctio sint soluta qui labore inventore! Aut
                  facere, a repellat ducimus officia saepe pariatur, dolores
                  quas explicabo, ab incidunt repudiandae maxime alias. Facilis
                  exercitationem voluptas beatae minima? Natus nihil doloribus
                  consequuntur repudiandae itaque?
                </p>
              </div>
            </div>
          </div>

          <Link
            href={"incredible-offers"}
            className="flex items-center text-gray-500 gap-2 px-2 border-b-[3px] border-transparent hover:border-[#FF0800] transition-border duration-150"
          >
            <LuBadgePercent />
            <span>شگفت انگیزها</span>
          </Link>
          <Link
            href={"/fresh"}
            className="flex items-center text-gray-500 gap-2 px-2 border-b-[3px] border-transparent hover:border-[#FF0800] transition-border duration-150"
          >
            <LuBadgePercent />
            <span>سوپرمارکت</span>
          </Link>
          <Link
            href={"/best-selling"}
            className="flex items-center text-gray-500 gap-2 px-2 border-b-[3px] border-transparent hover:border-[#FF0800] transition-border duration-150"
          >
            <LuBadgePercent />
            <span>پرفروش ترین ها</span>
          </Link>
          <Link
            href={"/faq"}
            className="flex items-center text-gray-500 gap-2 px-2 border-b-[3px] border-transparent hover:border-[#FF0800] transition-border duration-150"
          >
            <LuBadgePercent />
            <span>سوالی دارید؟</span>
          </Link>
          <Link
            href={"/landings"}
            className="flex items-center text-gray-500 gap-2 px-2 border-b-[3px] border-transparent hover:border-[#FF0800] transition-border duration-150"
          >
            <LuBadgePercent />
            <span>در دیجی کالا بفروشید!</span>
          </Link>
        </div>
        <div className="text-[#F57F17] w-[172.318px] h-[34.0341px] bg-[#FEF6EF] rounded-3xl flex items-center justify-center gap-1 font-medium py-2 px-3">
          <GrLocation className="mt-1" />
          <span>شهرخود را انتخاب کنید</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
