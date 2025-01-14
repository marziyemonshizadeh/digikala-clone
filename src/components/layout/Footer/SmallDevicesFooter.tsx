import { BiCategoryAlt, BiSolidHomeAlt2 } from "react-icons/bi";
import { BsGooglePlay } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

type Props = {};

function SmallDevicesFooter({}: Props) {
  return (
    <div className="w-full z-3 sticky lg:hidden block left-0 bottom-0 border-t border-gray-300 bg-white px-4 shadow-t-2xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <BiSolidHomeAlt2 />
          <span>خانه</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <BiCategoryAlt />
          <span>دسته‌بندی</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <LuShoppingCart />
          <span>سبدخرید</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <BsGooglePlay />
          <span>مگنت</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaRegUser />
          <span>دیجی کالای من</span>
        </div>
      </div>
    </div>
  );
}

export default SmallDevicesFooter;
