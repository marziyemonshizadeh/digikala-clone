"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function MarketBtn() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 250 ? setIsVisible(true) : setIsVisible(true);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <Link
      href="#"
      onClick={() => scrollToTop}
      id="btn-back-to-top"
      className={`${
        isVisible ? "visible " : "invisible "
      } rounded-3xl fixed bottom-[32px] left-0 me-3 z-50 flex items-center justify-center bg-[#029A49] text-slate-50 w-[271.575px] h-[45.25px] p-2`}
    >
      <span>سوپرمارکت</span>
      <span
        style={{
          width: "1px",
          height: "16px",
          margin: "0px 8px",
          display: "block",
          boxSizing: "border-box",
          background: "rgba(255, 255, 255, 0.22)",
          fontSize: "15px",
          fontWeight: 700,
          lineHeight: "32.25px",
          color: "rgb(255, 255, 255)",
        }}
      ></span>
      <span>تنوع بالا و پرتخفیف</span>
      <FaAngleUp className="shadow-2xl text-3xl" />
    </Link>
  );
}

export default MarketBtn;
