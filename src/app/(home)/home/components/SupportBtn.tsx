"use client";
import Link from "next/link";
// import { FaAngleUp } from "react-icons/fa";

function SupportBtn() {
  return (
    <Link
      href="#"
      id="btn-back-to-top"
      className="rounded-full fixed bottom-3 right-0 me-3 z-50 flex items-center justify-center bg-red-500 text-black w-14 h-14"
    >
      r{/* <FaAngleUp className="shadow-2xl text-3xl" /> */}
    </Link>
  );
}

export default SupportBtn;
